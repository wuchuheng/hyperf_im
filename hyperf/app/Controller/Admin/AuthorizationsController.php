<?php

declare(strict_types=1);

namespace App\Controller\Admin;

use App\Controller\AbstractController;
use App\Model\UsersModel;
use Hyperf\Di\Annotation\Inject;
use Hyperf\HttpServer\Annotation\Controller;
use Hyperf\HttpServer\Annotation\RequestMapping;
use Hyperf\HttpServer\Contract\RequestInterface;
use Hyperf\HttpServer\Contract\ResponseInterface;
use Qbhy\HyperfAuth\AuthManager;
use Qbhy\HyperfAuth\Guard\JwtGuard;
use Qbhy\SimpleJwt\EncryptAdapters\PasswordHashEncrypter;
use Hyperf\Contract\ConfigInterface;
use Qbhy\SimpleJwt\JWTManager;

/**
 * @Controller()
 */
class AuthorizationsController extends  AbstractController
{
    /**
     * @Inject()
     * @var PasswordHashEncrypter
     */
    private $passwordHashEncrypter;

    /**
     * @Inject()
     * @var ConfigInterface
     */
    protected $config;

    public function __construct(UsersModel $UsersModel)
    {
        $this->userModel = $UsersModel;
    }

    /**
     * @RequestMapping(path="", methods="post")
     */
    public function store(RequestInterface $Request, ResponseInterface $Response, ConfigInterface $Config)
    {
        $username = $Request->input('username');
        $password = $Request->input('password');
        $User = $this->userModel->where('username', $username)->first();
        if ($User && $this->passwordHashEncrypter->check($password, $User->password)) {
            $token = $this->auth->login($User);
            return $this->successResponse($this->formaToken($token), 201);
        } else {
            return $this->failResponse([
                'errorCode' => 40001,
                'message' => __('api.username_invald_or_password_invalid')
            ]);
        }
    }

    /**
     * @RequestMapping(path="current", methods={"put"})
     */
    public function update()
    {
        $token = $this->auth->guard('jwt')->refresh();
        return $this->successResponse($this->formaToken($token), 201);
    }

    private function formaToken($token)
    {
        $payload = $this->auth->guard('jwt')->getJwtManager()->parse($token)->getPayload();
        return [
            'access_token' => $token,
            'token_type' => 'Bearer',
            'expired_at' => date('Y-m-d H:i:s', $payload['exp']),
            'refreshed_at' => date('Y-m-d H:i:s', $this->config->get('auth.guards.jwt.refresh_ttl') + $payload['iat'])
        ];
    }
}
