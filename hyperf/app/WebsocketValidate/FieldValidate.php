<?php

declare(strict_types = 1);

namespace App\WebsocketValidate;

use Swoole\WebSocket\Frame;

class FieldValidate
{
    public function goCheck($server, Frame $frame) :void
    {
        $server->push($frame->fd, 'from gocheck' . $frame->data);
    }
}
