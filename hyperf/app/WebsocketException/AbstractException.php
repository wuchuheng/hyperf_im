<?php

declare(strict_types=1);

namespace App\WebsocketException;

use \Exception;
use \Throwable;

class AbstractException extends Exception implements Throwable
{
    /**
     * 操作是否成功
     */
    public $success = false;

    /**
     *  错误码
     * @var int
     */
    public $erroeCode = 40000;

    /**
     *  错误信息
     * @var  string
     */
    public $errorMessage;

    /**
     * 前端展示类型
     * @var number
     */
    public $showType;

    /**
     *  获取返回的数据
     * @return string
     */
    public function getReturnData(): string
    {

        $returnData = [
            'success' => false,
            'errorMessage' => $this->errorMessage,
            'errorCode' => $this->erroeCode
        ];
        $this->showType && $returnData += ['showType' => $this->showType];
        return json_encode($returnData);
    }

    public function __construct($message = "", $code = 40000, $showType = null,  Throwable $previous = null)
    {
        $this->showType = $showType;
        if ($message !== '') $this->errorMessage = $message;
        if ($code !== 40000) $this->erroeCode = $code;
        parent::__construct($message, $code, $previous);
    }
}
