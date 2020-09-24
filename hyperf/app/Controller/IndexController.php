<?php

declare(strict_types=1);

namespace App\Controller;

use Hyperf\HttpServer\Annotation\Controller;
use Hyperf\HttpServer\Annotation\RequestMapping;
use Hyperf\Di\Annotation\Inject;


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

    }
}
