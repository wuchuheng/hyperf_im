<?php

namespace App\WebsocketException\Handler;

use Hyperf\Contract\StdoutLoggerInterface;
use Hyperf\ExceptionHandler\ExceptionHandler;
use Swoole\WebSocket\Frame;
use Throwable;
use Hyperf\WebSocketServer\Sender;
use Hyperf\Di\Annotation\Inject;
use App\WebsocketException\FormatErrorException;
use App\WebsocketException\AbstractException;
use App\WebsocketException\ValidateException\PinException;

class BaseExceptionHandler
{
    /**
     * @Inject
     * @var Sender
     */
    protected $sender;

    /**
     *  异常处理
     * @param AbstractException $throwable
     * @param Frame $frame
     */
    public function handle(Throwable $throwable,  Frame $frame)
    {
        $fd = $frame->fd;

        // pin 操作，用于保持心跳，什么都不做
        if ($throwable instanceof PinException) {

        } else if ($throwable instanceof AbstractException) {
            // 自定义异常
            $this->sender->push($fd, $throwable->getReturnData());
        }
    }
}