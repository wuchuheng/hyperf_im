<?php

declare (strict_types=1);
namespace App\Model;

use Hyperf\Di\Annotation\Inject;
use Hyperf\Filesystem\FilesystemFactory;

class AlbumsModel extends Model
{

    /**
     * @Inject()
     * @var FilesystemFactory
     */
    protected $storage;
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'albums';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'disk',
        'path'
    ];

    protected $appends = ['url'];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [];

    public function getUrlAttribute($key)
    {
        $Disk = $this->storage->get(get_config_by_key('DEFAULT_DISK'));
        $base_url = $Disk->getConfig()->get('url');
        $url_info = parse_url($this->request->url());
        $port = array_key_exists('port', $url_info) && $url_info['port'] !== 80 ? ':' . $url_info['port'] : '';
        return $url_info['scheme'] . '://' . $url_info['host'] . $port . $base_url . $this->path;
    }
}
