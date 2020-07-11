<?php

declare(strict_types=1);

namespace App\Controller\Admin;

use Hyperf\Di\Annotation\Inject;
use Hyperf\HttpServer\Annotation\Controller;
use Hyperf\HttpServer\Annotation\RequestMapping;
use Hyperf\HttpServer\Contract\RequestInterface;
use Hyperf\HttpServer\Contract\ResponseInterface;
use Qbhy\SimpleJwt\EncryptAdapters\PasswordHashEncrypter;
use Hyperf\Contract\ConfigInterface;

/**
 * @Controller()
 */
class AuthorizationsController
{
    /**
     * @Inject()
     * @var PasswordHashEncrypter
     */
    private $passwordHashEncrypter;

    /**
     * @RequestMapping(path="", methods="post")
     */
    public function store(RequestInterface $Request, ResponseInterface $Response, ConfigInterface $Config)
    {
        return get_config_by_key('DEFAULT_DISK');
        return $this->passwordHashEncrypter->signature("1313123123123");
    }
}
