<?php

/**
 * Author Wuchuheng<root@wuchuheng.com>
 * Licence MIT
 * DATE 2020-07-14 13:51
 */

namespace App\Service;

use Hyperf\Di\Annotation\Inject;
use Hyperf\HttpServer\Contract\RequestInterface;
use Qbhy\HyperfAuth\Guard\JwtGuard;
use Qbhy\HyperfAuth\UserProvider;
use Qbhy\SimpleJwt\JWTManager;

class JwtGuardService extends JwtGuard
{
    public function __construct(array $config, string $name, UserProvider $userProvider, RequestInterface $request)
    {
        parent::__construct($config, $name, $userProvider, $request);
        $this->jwtManager = new JWTManagerService($config);
    }
}
