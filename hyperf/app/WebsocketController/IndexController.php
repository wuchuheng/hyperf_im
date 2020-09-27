<?php

declare(strict_types=1);

namespace App\WebsocketController;

use Hyperf\Contract\OnCloseInterface;
use Hyperf\Contract\OnMessageInterface;
use Hyperf\Contract\OnOpenInterface;
use Swoole\Http\Request;
use Swoole\Websocket\Frame;
use Hyperf\Di\Annotation\Inject;
use App\WebsocketValidate\FieldValidate;
use App\WebsocketException\Handler\BaseExceptionHandler;
use App\WebsocketException\FormatErrorException;
use Hyperf\WebSocketServer\Context;
use Hyperf\WebSocketServer\Sender;


class IndexController
{
    /**
     * @Inject
     * @var Sender
     */
    private $_sender;

    public function index($body, $params = [])
    {
        $fd = Context::get('fd');
        $this->_sender->push($fd, json_encode([1, 3, 3]));
        var_dump($body, $params);
    }
}