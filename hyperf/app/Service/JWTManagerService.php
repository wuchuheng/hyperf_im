<?php

/**
 * Author Wuchuheng<root@wuchuheng.com>
 * Licence MIT
 * DATE 2020-07-14 13:58
 */

namespace App\Service;

use Qbhy\SimpleJwt\Exceptions\TokenRefreshExpiredException;
use Qbhy\SimpleJwt\JWT;
use Qbhy\SimpleJwt\JWTManager;

class JWTManagerService extends JWTManager
{
    public function setRefreshTtl(int $ttl): JWTManager
    {
        $this->refreshTtl = $ttl * 60;

        return $this;
    }

    public function addBlacklist($jwt)
    {
        $now = time();
        $this->getCache()->save(
            $this->blacklistKey($jwt),
            $now,
            ($jwt instanceof JWT ? ($jwt->getPayload()['iat'] || $now) : $now) + $this->getRefreshTtl() // 存到该 token 超过 refresh 即可
        );
    }

    /**
     * @throws Exceptions\JWTException
     * @return JWT
     */
    public function refresh(JWT $jwt, bool $force = false)
    {
        $payload = $jwt->getPayload();
        if (! $force && isset($payload['iat'])) {
            $refreshExp = $payload['iat'] + $this->getRefreshTtl();
            if ($refreshExp <= time()) {
                throw (new TokenRefreshExpiredException('token expired, refresh is not supported'))->setJwt($jwt);
            }
        }
        unset($payload['exp'], $payload['iat'], $payload['nbf']);

        return $this->make($payload, $jwt->getHeaders());
    }
}
