<?php


namespace App;

use Hyperf\Contract\OnCloseInterface;
use Hyperf\Contract\OnMessageInterface;
use Hyperf\Contract\OnOpenInterface;
use Swoole\Http\Request;
use Swoole\Websocket\Frame;
use Hyperf\Di\Annotation\Inject;
use App\WebsocketValidate\FieldValidate;
use App\WebsocketException\Handler\BaseExceptionHandler;
use App\WebsocketException\FormatErrorException;
use App\WebsocketController\IndexController;
use App\WebsocketService\RouteService;

class WebsocketHandle implements OnMessageInterface, OnOpenInterface, OnCloseInterface
{

    /**
     * @Inject
     * @var RouteService
     */
    private $routeService;

    /**
     * @Inject
     * @var BaseExceptionHandler
     */
    private $baseExceptionHandler;

    /**
     * @Inject
     * @var FieldValidate
     */
    private $fieldValidate;

    public function onMessage($server, Frame $frame): void
    {
        try{


            $data = json_decode($frame->data, true);
            $url = $data['url'];
            $method = $data['method'];
            $this->routeService->run($url, $method);
//            throw new FormatErrorException('1',  40001, 1);
        } catch (\Throwable $t) {
            $this->baseExceptionHandler->handle($t, $frame);
        }
    }

    public function onClose($server, int $fd, int $reactorId): void
    {

    }

    public function onOpen($server, Request $request): void
    {
//        $container = ApplicationContext::getContainer();
//        $redis = $container->get(\Hyperf\Redis\Redis::class);
//        $redis->sAdd('websocketConnect', $request->fd, 'test', 3, 4, 5);
//
//        $server->push($request->fd, 'Opened');
    }
}