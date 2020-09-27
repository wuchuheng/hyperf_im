<?php


namespace App\WebsocketMiddleware;


class Test2Middleware extends AbstractMiddleware
{

    public function handle(array $routInfo, $next)
    {
        var_dump(Test2Middleware::class);
        return $next($routInfo);
    }
}