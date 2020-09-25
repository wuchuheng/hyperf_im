<?php
/**
 *  处理路由
 */

namespace App\WebsocketService;

/**
 * @method self get(string $route, array $controllerLocation)
 * @method self post(string $route, array $controllerLocation)
 * @method self put(string $route, array $controllerLocation)
 * @method self delete(string $route, array $controllerLocation)
 * @method self patch(string $route, array $controllerLocation)
 */

class RouteService
{
    /**
     *  调用栈遍历路由前缀允许通过的方法名
     * @var string[]
     */
    private $_ignoreMethods = [
        'get', 'post', 'delete', 'put', 'pathc', 'group', '{closure}', '__call'
    ];

    /**
     * 路由表
     */
    public $routeList = [];

    public function __construct()
    {
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


    public function __call(string $method, array $arguments = [])
    {
        if (in_array($method, ['get', 'post', 'put', 'patch', 'delete'])) {
            list($route, $controllerLocation)  = $arguments;
            $trackes = debug_backtrace();
            $route = $this->_getRoutePrefix($trackes);
            list($controller, $function) = $controllerLocation;
            $this->_pushRouteInfoToRoutList($route, [$method => []], $controller, $function);
            return $this;
        }
    }

    /**
     *  获取组路由前缀
     * @param array $tracks
     * @return string
     */
    private function _getRoutePrefix(array $trackes) : string
    {
        $routePrefix = '';
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
                $prefix = $trackes[$i]['function'] === '__call' ? $trackes[$i]['args'][1][0] : $trackes[$i]['args'][0];
                $routePrefix = $prefix . $routePrefix;
            } else if ($isClosure) {
                continue;
            } else {
                return $routePrefix;
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
        $route = '/' . $route;
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
            foreach ($methods as $method => $v) {
                if (!array_key_exists($method, $this->routeList[$route]['methods'][$method])) {
                    $this->routeList[$route]['methods'][$method] = [];
                }
            }
        }
    }
}