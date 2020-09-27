<?php

declare(strict_types=1);

use Hyperf\Database\Seeders\Seeder;
use Hyperf\DbConnection\Db;

class Database extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Db::insert('INSERT INTO `configures`(`id`, `key`, `value`, `note`, `created_at`, `updated_at`) VALUES (1, \'DEFAULT_DISK\', \'public\', \'默认存储硬盘\', NULL, NULL);');
        DB::insert('INSERT INTO `configures`(`id`, `key`, `value`, `note`, `created_at`, `updated_at`) VALUES (2, \'APP_URL\', \'\', \'应用访问链接\', NULL, NULL);');

        // 相册
        DB::insert('INSERT INTO `albums`(`id`, `path`, `disk`, `created_at`, `updated_at`) VALUES (1, \'/2020-07-12/5f0ae653f1083.png\', \'public\', \'2020-07-12 18:30:44\', \'2020-07-12 18:30:44\');');
        DB::insert('INSERT INTO `albums` (`id`, `path`, `disk`) VALUES (\'2\', \'/2020-09-23/thumb-1920-828255.png\', \'public\')');

        DB::insert('INSERT INTO `users`(`id`, `username`, `nickname`, `password`, `name`,  `avatar_id`,  `created_at`, `updated_at`) VALUES (1, \'root@wuchuheng.com\', \'admin\', \'$2y$10$26P6hmNGvJ6BAs/nNRfTQeu1cmK4KjLN4o14SKzyrAEtGOFf9YPN.\', \'超级管理员\',  1, \'2020-07-12 18:48:41\', \'2020-07-12 18:48:41\');');

        // chat_setting
        DB::insert('INSERT INTO `chat_setting` (`id`, `user_id`, `rooms`, `is_welcome`, `welcome`) VALUES (\'1\', \'1\', \'2\', \'0\', \'您好，很高兴为您服务！\')');

        // 会话

        // 标签
        DB::insert('INSERT INTO `tags` (`type`, `name`, `color`) VALUES ( \'conversation\', \'会话标签1\', \'rgb(255, 182, 82)\' )');
        DB::insert('INSERT INTO `tags` (`type`, `name`, `color`) VALUES ( \'conversation\', \'会话标签2\', \'rgb(181, 145, 119)\' )');
        DB::insert('INSERT INTO `tags` (`type`, `name`, `color`) VALUES ( \'conversation\', \'会话标签3\', \'rgb(111, 208, 72)\' )');
        DB::insert('INSERT INTO `tags` (`type`, `name`, `color`) VALUES ( \'conversation\', \'会话标签4\', \'rgb(146, 100, 205)\' )');
        DB::insert('INSERT INTO `tags` (`type`, `name`, `color`) VALUES ( \'conversation\', \'会话标签5\', \'rgb(252, 124, 179)\' )');
        DB::insert('INSERT INTO `tags` (`type`, `name`, `color`) VALUES ( \'conversation\', \'会话标签6\', \'rgb(255, 137, 71)\' )');
        DB::insert('INSERT INTO `tags` (`type`, `name`, `color`) VALUES ( \'conversation\', \'会话标签7\', \'rgb(0, 206, 125)\' )');
        DB::insert('INSERT INTO `tags` (`type`, `name`, `color`) VALUES ( \'conversation\', \'会话标签8\', \'rgb(76, 160, 255)\' )');
        DB::insert('INSERT INTO `tags` (`type`, `name`, `color`) VALUES ( \'conversation\', \'会话标签9\', \'rgb(255, 92, 94)\' )');
        DB::insert('INSERT INTO `tags` (`type`, `name`, `color`) VALUES ( \'conversation\', \'会话标签10\', \'rgb(112, 112, 112)\' )');

        DB::insert('INSERT INTO `tags` (`type`, `name`, `color`) VALUES ( \'client\', \'顾客标签1\', \'rgb(255, 182, 82)\' )');
        DB::insert('INSERT INTO `tags` (`type`, `name`, `color`) VALUES ( \'client\', \'顾客标签2\', \'rgb(181, 145, 119)\' )');
        DB::insert('INSERT INTO `tags` (`type`, `name`, `color`) VALUES ( \'client\', \'顾客标签3\', \'rgb(111, 208, 72)\' )');
        DB::insert('INSERT INTO `tags` (`type`, `name`, `color`) VALUES ( \'client\', \'顾客标签4\', \'rgb(146, 100, 205)\' )');
        DB::insert('INSERT INTO `tags` (`type`, `name`, `color`) VALUES ( \'client\', \'顾客标签5\', \'rgb(252, 124, 179)\' )');
        DB::insert('INSERT INTO `tags` (`type`, `name`, `color`) VALUES ( \'client\', \'顾客标签6\', \'rgb(255, 137, 71)\' )');
        DB::insert('INSERT INTO `tags` (`type`, `name`, `color`) VALUES ( \'client\', \'顾客标签7\', \'rgb(0, 206, 125)\' )');
        DB::insert('INSERT INTO `tags` (`type`, `name`, `color`) VALUES ( \'client\', \'顾客标签8\', \'rgb(76, 160, 255)\' )');
        DB::insert('INSERT INTO `tags` (`type`, `name`, `color`) VALUES ( \'client\', \'顾客标签9\', \'rgb(255, 92, 94)\' )');
        DB::insert('INSERT INTO `tags` (`type`, `name`, `color`) VALUES ( \'client\', \'顾客标签10\', \'rgb(112, 112, 112)\' )');

        //  聊天接入网站
        DB::insert('INSERT INTO `setting_connect_chatlink_sites` (`id`, `title`, `pc_windows_id`, `phone_windows_id`) VALUES (\'1\', \'默认接入网站\', \'1\', \'5\')');

        //  聊天接入网站配置
        DB::insert('INSERT INTO `setting_connect_chatlink_sites_config` (`id`, `site_id`, `driver_type`, `size`, `theme`, `client_text_color`, `is_access`, `is_carousel`, `is_fqa`, `background_color`, `background_album_id`, `rightbar_content`, `rightbar_background_color`, `avatar_location`) VALUES (\'1\', \'1\', \'pc\', \'mini\', \'#007AFF\', \'#FFFFFF\', \'0\', \'0\', \'1\', \'\', NULL, NULL, NULL, NULL)');
        DB::insert('INSERT INTO `setting_connect_chatlink_sites_config` (`id`, `site_id`, `driver_type`, `size`, `theme`, `client_text_color`, `is_access`, `is_carousel`, `is_fqa`, `background_color`, `background_album_id`, `rightbar_content`, `rightbar_background_color`, `avatar_location`) VALUES (\'2\', \'1\', \'pc\', \'normal\', \'#007AFF\', \'#FFFFFF\', \'1\', \'1\', \'1\', \'#FFFFFF\', \'2\', NULL, NULL, NULL)');
        DB::insert('INSERT INTO `setting_connect_chatlink_sites_config` (`id`, `site_id`, `driver_type`, `size`, `theme`, `client_text_color`, `is_access`, `is_carousel`, `is_fqa`, `background_color`, `background_album_id`, `rightbar_content`, `rightbar_background_color`, `avatar_location`) VALUES (\'3\', \'1\', \'pc\', \'full_screen\', \'#007AFF\', \'#FFFFFF\', \'1\', \'1\', \'1\', NULL, NULL, NULL, NULL, NULL)');
        DB::insert('INSERT INTO `setting_connect_chatlink_sites_config` (`id`, `site_id`, `driver_type`, `size`, `theme`, `client_text_color`, `is_access`, `is_carousel`, `is_fqa`, `background_color`, `background_album_id`, `rightbar_content`, `rightbar_background_color`, `avatar_location`) VALUES (\'4\', \'1\', \'pc\', \'custom\', \'#007AFF\', \'#FFFFFF\', \'0\', \'0\', \'0\', \'#FFFFFF\', NULL, \'这是右侧 信息栏目信息\', \'#FFFFFF\', \'leftTop\')');
        DB::insert('INSERT INTO `setting_connect_chatlink_sites_config` (`id`, `site_id`, `driver_type`, `size`, `theme`, `client_text_color`, `is_access`, `is_carousel`, `is_fqa`, `background_color`, `background_album_id`, `rightbar_content`, `rightbar_background_color`, `avatar_location`) VALUES (\'5\', \'1\', \'phone\', \'normal\', \'#007AFF\', \'#FFFFFF\', NULL, NULL, \'1\', NULL, NULL, NULL, NULL, NULL)');

        // 聊天接入设置fqa
        DB::insert('INSERT INTO `setting_connect_chatlink_fqa` (`id`, `site_id`, `driver_type`, `title`, `content`, `order_no`) VALUES (\'1\', \'1\', \'pc\', \'pc默认问题1\', \'pc默认问题1内容\', \'1\')');
        DB::insert('INSERT INTO `setting_connect_chatlink_fqa` (`id`, `site_id`, `driver_type`, `title`, `content`, `order_no`) VALUES (\'2\', \'1\', \'pc\', \'pc默认问题2\', \'pc默认问题2内容\', \'3\')');
        DB::insert('INSERT INTO `setting_connect_chatlink_fqa` (`id`, `site_id`, `driver_type`, `title`, `content`, `order_no`) VALUES (\'3\', \'1\', \'pc\', \'pc默认问题3\', \'pc默认问题3内容\', \'6\')');
        DB::insert('INSERT INTO `setting_connect_chatlink_fqa` (`id`, `site_id`, `driver_type`, `title`, `content`, `order_no`) VALUES (\'4\', \'1\', \'phone\', \'phone默认问题1\', \'phone默认问题1内容\', \'2\')');
        DB::insert('INSERT INTO `setting_connect_chatlink_fqa` (`id`, `site_id`, `driver_type`, `title`, `content`, `order_no`) VALUES (\'5\', \'1\', \'phone\', \'phone默认问题2\', \'phone默认问题2内容\', \'1\')');
        DB::insert('INSERT INTO `setting_connect_chatlink_fqa` (`id`, `site_id`, `driver_type`, `title`, `content`, `order_no`) VALUES (\'6\', \'1\', \'phone\', \'phone默认问题3\', \'phone默认问题3内容\', \'4\')');

        // 聊天接入-快捷入口
        DB::insert('INSERT INTO `setting_connect_chatlink_sites_access` (`id`, `site_id`, `name`, `album_id`, `url`, `order_no`) VALUES (\'1\', \'1\', \'快捷入口1\', \'2\', \'https://qianli.chat\', \'1\')');
        DB::insert('INSERT INTO `setting_connect_chatlink_sites_access` (`id`, `site_id`, `name`, `album_id`, `url`, `order_no`) VALUES (\'2\', \'1\', \'快捷入口2\', \'2\', \'https://qianli.chat\', \'1\')');
        DB::insert('INSERT INTO `setting_connect_chatlink_sites_access` (`id`, `site_id`, `name`, `album_id`, `url`, `order_no`) VALUES (\'3\', \'1\', \'快捷入口3\', \'2\', \'https://qianli.chat\', \'1\')');
        DB::insert('INSERT INTO `setting_connect_chatlink_sites_access` (`id`, `site_id`, `name`, `album_id`, `url`, `order_no`) VALUES (\'4\', \'1\', \'快捷入口4\', \'2\', \'https://qianli.chat\', \'1\')');

        // 聊天接入-幻灯片
        DB::insert('INSERT INTO `qianli`.`setting_connect_chatlink_sites_carousel` (`id`, `album_id`, `site_id`, `order_no`) VALUES (\'1\', \'2\', \'1\', \'1\')');
        DB::insert('INSERT INTO `qianli`.`setting_connect_chatlink_sites_carousel` (`id`, `album_id`, `site_id`, `order_no`) VALUES (\'2\', \'2\', \'1\', \'1\')');
        DB::insert('INSERT INTO `qianli`.`setting_connect_chatlink_sites_carousel` (`id`, `album_id`, `site_id`, `order_no`) VALUES (\'3\', \'2\', \'1\', \'1\')');


    }
}




