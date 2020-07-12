<?php

declare(strict_types=1);
/**
 * This file is part of Hyperf.
 *
 * @link     https://www.hyperf.io
 * @document https://doc.hyperf.io
 * @contact  group@hyperf.io
 * @license  https://github.com/hyperf/hyperf/blob/master/LICENSE
 */
namespace App\Controller;

use Hyperf\DbConnection\Db;
use Hyperf\Di\Annotation\Inject;
use Hyperf\HttpServer\Contract\RequestInterface;
use Hyperf\HttpServer\Contract\ResponseInterface;
use Psr\Container\ContainerInterface;

abstract class AbstractController
{
    /**
     * @Inject
     * @var ContainerInterface
     */
    protected $container;

    /**
     * @Inject
     * @var RequestInterface
     */
    protected $request;

    /**
     * @Inject
     * @var ResponseInterface
     */
    protected $response;

    public function successResponse(Array $data = [], string $message = 'success', int $status_code = 200)
    {
        $return_data['message'] = $message;
        if(count($data)) {
           $return_data['data'] = $data;
        }
        return $this->response->json($return_data)->withStatus($status_code); }

    public function failResponse(Array $data = [], int $status_code = 400)
    {
        $data['message'] = array_key_exists('message', $data) ? $data['message'] : 'fail';
        $data['errorCode'] = array_key_exists('errorCode', $data) ? $data['errorCode'] : 40000;
        return $this->response->json($data)->withStatus($status_code);
    }
}
