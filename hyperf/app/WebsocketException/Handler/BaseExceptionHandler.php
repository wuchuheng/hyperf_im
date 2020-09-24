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

class BaseExceptionHandler
{
    /**
     * @Inject
     * @var Sender
     */
    protected $sender;

    public function handle(AbstractException $throwable,  Frame $frame)
    {
        $fd = $frame->fd;
        if ($throwable instanceof FormatErrorException) {
            $this->sender->push($fd, $throwable->getReturnData());
        }
    }
}