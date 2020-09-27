<?php

declare(strict_types = 1);

namespace App\WebsocketValidate;

use Swoole\WebSocket\Frame;
use App\WebsocketException\FormatErrorException;
use App\WebsocketException\ValidateException\PinException;

class FieldValidate
{
    public function goCheck($data) :void
    {
        $data = json_decode($data, true);
        if (json_last_error() != JSON_ERROR_NONE ) throw new FormatErrorException('请上传json结构的数据');
        if (!array_key_exists('method', $data)) throw new FormatErrorException('要有method字段');
        if ($data['method'] === 'ping')  throw new PinException();
        if (!array_key_exists('url', $data)) throw new FormatErrorException('要有url字段');
        if (!array_key_exists('body', $data)) throw new FormatErrorException('要有body字段');
    }
}
