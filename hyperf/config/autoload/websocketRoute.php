<?php

declare(strict_types=1);

use App\WebsocketService\RouteService;
use App\WebsocketController\IndexController;
use App\WebsocketMiddleware\AbstractMiddleware;

/**
 *  websocket 路由
 * @param RouteService $routeService
 */
return function (RouteService $routeService) {
    $routeService->get('route', [IndexController::class, 'index'])
        ->middleware(AbstractMiddleware::class)
        ->middleware(\App\WebsocketMiddleware\TestMiddleware::class);
    $routeService->group('group', function () use($routeService) {
        $routeService->get('/test/route', [IndexController::class, 'index']);
        $routeService->group('/hello/', function() use($routeService){
            $routeService->get('thired/hello/{test}', [IndexController::class, 'index'])
                ->middleware(\App\WebsocketMiddleware\Test2Middleware::class);
        }, ['middlewares' => [
            \App\WebsocketMiddleware\TestMiddleware::class
        ]]);
    },['middlewares' => [
            \App\WebsocketMiddleware\TestMiddleware::class
        ]]
    );
};

