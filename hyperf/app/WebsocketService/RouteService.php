<?php
/**
 *  处理路由
 */

declare(strict_types=1);

namespace App\WebsocketService;

use Hyperf\Di\Annotation\Inject;
use Psr\Container\ContainerInterface;
use App\WebsocketException\RouteException\NotMatchRouteException;


/**
 * @method self get(string $route, array $controllerLocation)
 * @method self post(string $route, array $controllerLocation)
 * @method self put(string $route, array $controllerLocation)
 * @method self delete(string $route, array $controllerLocation)
 * @method self patch(string $route, array $controllerLocation)
 */
class RouteService
{
    private $_container;

    /**
     *  调用栈遍历路由前缀允许通过的方法名
     * @var string[]
     */
    private $_ignoreMethods = [
        'get', 'post', 'delete', 'put', 'pathc', 'group', '{closure}', '__call'
    ];

    private $_prevRoute;

    /**
     * 路由表
     */
    public $routeList = [];

    /**
     *  用于匹配的路由表
     * @var array
     */
    public $_toPatchRouteList = [];

    public function __construct(ContainerInterface $container)
    {
        $this->_container = $container;
        // 加载路由配置
        config('websocketRoute')($this);
    }

    /**
     *  路由组处理
     * @param string $route
     * @param callable $callback
     * @param array $middleware
     */
    public function group(string $route, callable $callback, array $middleware = []): self
    {
        $callback();
        return $this;
    }

    /**
     * 添加蹭件
     *
     * @param $middlewares string
     */
    public function middleware(string $middleware): self
    {
        $methoDmiddlewares = &$this->routeList[$this->_prevRoute['route']]['methods'][$this->_prevRoute['method']];
        if (! in_array($middleware, $methoDmiddlewares)) {
            $methoDmiddlewares[] = $middleware;
        }
        return $this;
    }

    public function __call(string $method, array $arguments = [])
    {
        $allowMethods = ['get', 'post', 'put', 'patch', 'delete'];
        if (in_array($method, $allowMethods)) {
            list($route, $controllerLocation)  = $arguments;
            $trackes = debug_backtrace();
            list($route, $middlewares) = $this->_getRoutePrefix($trackes);
            list($controller, $function) = $controllerLocation;
            $route = '/' . $route;
            if ($middlewares) {
                $this->_pushRouteInfoToRoutList($route, [$method => $middlewares], $controller, $function);
            } else {
                $this->_pushRouteInfoToRoutList($route, [$method => []], $controller, $function);
            }
            $this->_prevRoute = ['route' =>  $route, 'method' => $method];
            return $this;
        }
    }

    /**
     *  获取组路由前缀
     * @param array $tracks
     * @return string
     */
    private function _getRoutePrefix(array $trackes) : array
    {
        $routePrefix = '';
        $middlewares = [];
        foreach ($trackes as $i => $trackItem) {
            $isLocationClassFunction = (
                array_key_exists($i, $trackes) &&
                array_key_exists('function', $trackes[$i]) &&
                in_array($trackes[$i]['function'], $this->_ignoreMethods) &&
                array_key_exists('args', $trackes[$i]) &&
                array_key_exists('class', $trackes[$i]) &&
                $trackes[$i]['class'] === static::class
            );

            $isClosure = (
                array_key_exists('class', $trackes[$i]) &&
                $trackes[$i]['class'] === 'Hyperf\Config\ConfigFactory' &&
                array_key_exists('function', $trackes[$i]) &&
                $trackes[$i]['function'] === '{closure}'
            );

            if ( $isLocationClassFunction ) {
                if ($trackes[$i]['function'] === '__call' ) {
                    $prefix = $trackes[$i]['args'][1][0] ;
                } else {
                    $prefix = $trackes[$i]['args'][0];
                }
                // 收集件配置
                if ($trackes[$i]['function']  === 'group') {
                    if (
                        array_key_exists(2, $trackes[$i]['args']) &&
                        array_key_exists('middlewares', $trackes[$i]['args'][2])
                    ) {
                        $middlewares = array_merge($middlewares, $trackes[$i]['args'][2]['middlewares']);
                    }
                }
                $routePrefix = $prefix . $routePrefix;
            } else if ($isClosure) {
                continue;
            } else {
                return [$routePrefix, $middlewares ? array_unique($middlewares) : false];
            }
        }
    }

    /**
     * @param string $route
     * @param array $methods ['get' => [middleware1, middleware2 ...], 'post' => ...]
     * @param string $controller
     * @param string $function
     */
    private function _pushRouteInfoToRoutList(string $route, array $methods, string $controller, string $function)
    {
        if (!array_key_exists($route, $this->routeList)) {
            // 新增加全新路由
            $this->routeList[$route] = [
                'methods' => $methods,
                'controller' => $controller,
                'function' => $function
            ];
        } else if (
            $this->routeList[$route]['controller'] === $controller &&
            $this->routeList[$route]['function'] === $function
        ) {
            // 增加路由请求方式
            foreach ($methods as $method => $middlewares) {
                $methodsMiddlewares = [];
                if (!array_key_exists($method, $this->routeList[$route]['methods'][$method])) {
                    if ( array_key_exists($method, $this->routeList[$route]['methods']) ) {
                        $inMethodMiddlwares = $this->routeList[$route]['methods'][$method];
                        $methodsMiddlewares = array_merge($inMethodMiddlwares, array_diff($middlewares, $inMethodMiddlwares));
                    }
                    $this->routeList[$route]['methods'][$method] = $methodsMiddlewares;
                }
            }
        }
    }

    /**
     * 把参数的路由进行转换
     */
    private function _transferRoute()
    {
        $_toPatchRouteList = [];
        foreach ($this->routeList as $routeUrl => $routeInfo) {
            // 如果有rest记则进行正则提取
            if (preg_match_all('/\{(\w+)\}/', $routeUrl, $res)) {
                $pregRouteUrl = $routeUrl;
                foreach($res[0] as $replaceItem) {
                    $pregRouteUrl = str_replace($replaceItem, '(\w+)', $pregRouteUrl);
                }
                // 转义/号
                $pregRouteUrl = str_replace('/', '\/', $pregRouteUrl);
                $_toPatchRouteList[$pregRouteUrl] = [
                    'isPreg' => true,
                    'routeListKey' => $routeUrl
                ];
            } else {
                $_toPatchRouteList[$routeUrl] = [
                    'isPreg' => false,
                    'routeListKey' => $routeUrl
                ];
            }
        }
        $this->_toPatchRouteList = $_toPatchRouteList;
    }

    /**
     *  路由匹配
     * @param string $url
     * @param string $method
     */
    public function match(string $url, string $method)
    {
        !$this->_toPatchRouteList && $this->_transferRoute();
        foreach ($this->_toPatchRouteList as $preg => $routeInfo) {
            $isPreg = $routeInfo['isPreg'];
            $routeListKey = $routeInfo['routeListKey'];
            $params = [];
            if ($url === $preg) {
                return  $this->_matchMethod(array_merge(['params' => $params], $this->routeList[$routeListKey]), $method);
            } else if ($isPreg && preg_match_all("/{$preg}/", $url, $res)) {
                preg_match_all('/\{(\w+)\}/',$routeListKey, $restKeyNameInfo);
                foreach($restKeyNameInfo[1] as $k => $keyName) {
                    $resKey = $k + 1;
                    $params[$keyName] = $res[$resKey][0];
                }
                return $this->_matchMethod(array_merge(['params' => $params], $this->routeList[$routeListKey]), $method);
            }
        }
        return false;
    }

    private function _matchMethod(array $routeInfo, string $method)
    {
        if (array_key_exists($method, $routeInfo['methods'])) {
            $middlewares = $routeInfo['methods'][$method];
            return [
                'middlewares' => $middlewares,
                'params' => $routeInfo['params'],
                'controller' => $routeInfo['controller'],
                'function' => $routeInfo['function']
                ];
        } else {
            return false;
        }
    }

    /**
     * 启用路由服务
     * @param string $url
     * @param string $method
     * @param array $body
     * @return mixed
     * @throws NotMatchRouteException
     */
    public function run(string $url, string $method, array $body)
    {
        $routeInfo = $this->match($url, $method);
        if (!$routeInfo) {
            throw new NotMatchRouteException();
        }
        $routeInfo += ['body' => $body];
        // 调用中间件
        if ($routeInfo['middlewares']) {
            $firstMiddleware = array_shift($routeInfo['middlewares']);
            $middlewareInstance = $this->_container->get($firstMiddleware);
            return $middlewareInstance->handle($routeInfo, function() use($middlewareInstance, $routeInfo){
                return $middlewareInstance->next($routeInfo);
            });
        } else {
            // 调用控制器
            $controller = $routeInfo['controller'];
            $function = $routeInfo['function'];
            $controllerParams = [$routeInfo['body']];
            if ($routeInfo['params']) $controllerParams[] = $routeInfo['params'];
            return $this->_container->get($controller)->$function(...$controllerParams);
        }
    }
}