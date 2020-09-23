<?php

declare(strict_types=1);

namespace App\Controller;

use App\Controller\AbstractController;
use App\Model\AlbumsModel;
use Hyperf\HttpServer\Annotation\Controller;
use Hyperf\HttpServer\Annotation\RequestMapping;
use Hyperf\HttpServer\Contract\RequestInterface;
use Hyperf\HttpServer\Contract\ResponseInterface;
use Hyperf\Redis\RedisFactory;
use Hyperf\Utils\ApplicationContext;

/**
 * @Controller()
 */
class IndexController extends  AbstractController
{
    /**
     * @RequestMapping(path="", methods={"get"})
     */
    public function index()
    {
        $container = ApplicationContext::getContainer();

        $redis = $container->get(\Hyperf\Redis\Redis::class);
        $redis->sAdd('online', '1');
        $result = $redis->keys('*');

       return $result;
    }
}
