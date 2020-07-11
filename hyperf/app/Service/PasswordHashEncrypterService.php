<?php

/**
 * Author Wuchuheng<root@wuchuheng.com>
 * Licence MIT
 * DATE 2020-07-11 16:10
 */

namespace App\Service;

use Hyperf\Contract\ConfigInterface;
use Hyperf\Di\Annotation\Inject;
use Psr\Container\ContainerInterface;
use Qbhy\SimpleJwt\EncryptAdapters\PasswordHashEncrypter;

class PasswordHashEncrypterService extends PasswordHashEncrypter
{
    /**
     * @Inject()
     * @var ConfigInterface
     */
    private $config;

    public function __construct()
    {
        $secret = $this->config->get('secret');
        parent::__construct($secret);
    }
}

