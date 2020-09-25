<?php

declare(strict_types=1);

use App\WebsocketService\RouteService;
use App\WebsocketController\IndexController;

/**
 *  websocket 路由
 * @param RouteService $routeService
 */
return function (RouteService $routeService) {
    $routeService->get('route', [IndexController::class, 'index']);
    $routeService->group('group', function () use($routeService) {
        $routeService->get('/test/route', [IndexController::class, 'index']);
        $routeService->group('/hello/', function() use($routeService){
            $routeService->get('thired', [IndexController::class, 'index']);
        });
    });
};

