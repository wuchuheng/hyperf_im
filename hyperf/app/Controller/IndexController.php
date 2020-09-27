<?php

declare(strict_types=1);

namespace App\Controller;

use Hyperf\HttpServer\Annotation\Controller;
use Hyperf\HttpServer\Annotation\RequestMapping;
use Hyperf\Di\Annotation\Inject;
use App\WebsocketService\RouteService;
use Hyperf\Config\Config;
//use ;

/**
 * @Controller()
 */
class IndexController extends  AbstractController
{
    /**
     * @Inject
     * @var RouteService
     */
    private $routeService;

    /**
     * @RequestMapping(path="", methods={"get"})
     */
    public function index()
    {
//        $url = '/group/hello/thired/hello/dfdfdf';
//        if ($routeInfo = $this->routeService->match($url, 'get')) {
//            return $this->routeService->run($routeInfo);
//        } else {
//            return 'exception';
//            // exception
//        }
    }
}
