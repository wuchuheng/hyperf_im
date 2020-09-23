<?php

declare(strict_types=1);

namespace App\WebsocketController;

use Hyperf\Contract\OnCloseInterface;
use Hyperf\Contract\OnMessageInterface;
use Hyperf\Contract\OnOpenInterface;
use Swoole\Http\Request;
use Swoole\Server;
use Swoole\Websocket\Frame;
use Swoole\WebSocket\Server as WebSocketServer;
use Hyperf\Utils\ApplicationContext;


class IndexController implements OnMessageInterface, OnOpenInterface, OnCloseInterface
{

    public function onMessage($server, Frame $frame): void
    {
        $server->push($frame->fd, 'Recv: ' . $frame->data);
    }

    public function onClose($server, int $fd, int $reactorId): void
    {
        var_dump('closed');
    }

    public function onOpen($server, Request $request): void
    {
        $container = ApplicationContext::getContainer();
        $redis = $container->get(\Hyperf\Redis\Redis::class);
        $redis->sAdd('websocketConnect', $request->fd, 'test', 3, 4, 5);

        $server->push($request->fd, 'Opened');
    }
}