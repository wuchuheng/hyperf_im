<?php

declare(strict_types=1);

namespace App\Controller\Admin;

use App\Controller\AbstractController;
use App\Model\AlbumsModel;
use Hyperf\HttpServer\Annotation\Controller;
use Hyperf\HttpServer\Annotation\RequestMapping;
use Hyperf\HttpServer\Contract\RequestInterface;
use Hyperf\HttpServer\Contract\ResponseInterface;

/**
 * @Controller()
 */
class ImagesController extends  AbstractController
{
    /**
     * @RequestMapping(path="", methods={"post"})
     */
    public function store(
        RequestInterface $Requese,
        ResponseInterface $Response,
        \Hyperf\Filesystem\FilesystemFactory $Storage,
        AlbumsModel $AlbumsModel
    )
    {
        $disk_name = get_config_by_key('DEFAULT_DISK');
        $Disk = $Storage->get($disk_name);
        $File = $Requese->file('images');
        $relative_file_name = '/' . date('Y-m-d') . '/' . uniqid() . '.' . $File->getExtension();
        $full_file_name = $Disk->getConfig()->get('root') . $relative_file_name;
        !is_dir(dirname($full_file_name)) && mkdir(dirname($full_file_name), 0777, true);
        $File->moveTo($full_file_name);
        $AlbumsModel->path = $relative_file_name;
        $AlbumsModel->disk = $disk_name;
        if ($AlbumsModel->save()) {
            return $this->successResponse($AlbumsModel->only('id', 'url'), 'success', 201);
        } else {
            return $this->failResponse(['errorCode' => 50000], 500);
        }
    }
}
