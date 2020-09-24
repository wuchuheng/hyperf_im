<?php


namespace App\WebsocketException;

use \Exception;
use \Throwable;

class AbstractException extends Exception implements Throwable
{
    /**
     * 操作是否成功
     */
    private $success = false;

    /**
     *  错误码
     * @var int
     */
    private $erroeCode = 40000;


    /**
     *  错误信息
     * @var  string
     */
    private $errorMessage;

    /**
     * 前端展示类型
     * @var number
     */
    private $showType;

    /**
     *  获取返回的数据
     * @return string
     */
    public function getReturnData(): string
    {

        $returnData = [
            'success' => false,
            'errorMessage' => $this->getMessage(),
            'errorCode' => $this->getCode()
        ];
        $this->showType && $returnData += ['showType' => $this->showType];
        return json_encode($returnData);
    }

    public function __construct($message = "", $code = 40000, $showType = null,  Throwable $previous = null)
    {
        $this->showType = $showType;
        parent::__construct($message, $code, $previous);
    }
}