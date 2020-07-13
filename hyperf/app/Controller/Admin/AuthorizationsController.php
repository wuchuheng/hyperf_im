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
use Qbhy\SimpleJwt\EncryptAdapters\PasswordHashEncrypter;
use Hyperf\Contract\ConfigInterface;

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
     * @Inject
     * @var AuthManager
     */
    protected $auth;


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
            return $this->successResponse([
                    'access_token' => $token
            ]);
        } else {
            return $this->failResponse([
                'errorCode' => 50001,
                'message' => __('api.username_invald_or_password_invalid')
            ]);
        }
    }
}
