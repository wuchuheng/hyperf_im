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

class IndexController
{
    public function index($params)
    {
        return 'hello from ' . IndexController::class . 'index';
    }
}