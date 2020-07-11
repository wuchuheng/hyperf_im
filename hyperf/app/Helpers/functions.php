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
    switch ($key) {
        case 'APP_URL':
            if ($Configuration->value === '') {
                $Request = ApplicationContext::getContainer()->get(RequestInterface::class);
                $url_info = parse_url($Request->url());
                $port = array_key_exists('port', $url_info) && $url_info['port'] !== 80 ? ':' . $url_info['port'] : '';
                return $url_info['scheme'] . '://' . $url_info['host'] . $port;
            }
            break;
    }
    switch($return_type) {
        case 'string':
            return (string) $Configuration->value;
        case 'int':
            return (int) $Configuration->value;
        case 'float':
            return (float) $Configuration->value;
    }
}

