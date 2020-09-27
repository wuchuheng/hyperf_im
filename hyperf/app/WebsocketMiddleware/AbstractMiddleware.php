<?php


namespace App\WebsocketMiddleware;
use Psr\Container\ContainerInterface;
use Hyperf\Di\Annotation\Inject;

abstract class AbstractMiddleware
{

    /**
     * @Inject
     * @var ContainerInterface
     */
    private $_container;

    abstract public function handle(array $routeInfo, $next);

    public function next($routeInfo)
    {
        // 处理中间件
        if ($routeInfo['middlewares']) {
            $nextMiddleware = array_shift($routeInfo['middlewares']);
            $nextMiddleware = $this->_container->get($nextMiddleware);
            return $nextMiddleware->handle($routeInfo, function() use($nextMiddleware, $routeInfo){
                return $nextMiddleware->next($routeInfo);
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