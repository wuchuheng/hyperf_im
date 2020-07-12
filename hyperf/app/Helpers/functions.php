<?php
use \App\Model\ConfiguresModel;
use \Hyperf\Utils\ApplicationContext;
use Hyperf\HttpServer\Contract\RequestInterface;

/**
 *  get system config value by key
 *
 * @param string $key
 * @return string
 */
function get_config_by_key(string $key, string $return_type = 'string')
{
    $Configuration = ConfiguresModel::where('key', $key)->first();
    switch($return_type) {
        case 'string':
            return (string) $Configuration->value;
        case 'int':
            return (int) $Configuration->value;
        case 'float':
            return (float) $Configuration->value;
    }
    return $Configuration->value;
}

