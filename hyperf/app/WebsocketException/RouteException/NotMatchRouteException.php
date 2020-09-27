<?php

/**
 * websocket 路由未匹配到异常
 */
declare(strict_types=1);

namespace App\WebsocketException\RouteException;

use App\WebsocketException\AbstractException;

class NotMatchRouteException extends AbstractException
{
    /**
     * 操作是否成功
     */
    public $success = false;

    /**
     *  错误码
     * @var int
     */
    public $erroeCode = 50000;


    /**
     *  错误信息
     * @var  string
     */
    public $errorMessage = 'the route not be matched';

    /**
     * 前端展示类型
     * @var number
     */
    public $showType;
}