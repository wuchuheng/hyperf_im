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

        DB::insert('INSERT INTO `albums`(`id`, `path`, `disk`, `created_at`, `updated_at`) VALUES (1, \'/2020-07-12/5f0ae653f1083.png\', \'public\', \'2020-07-12 18:30:44\', \'2020-07-12 18:30:44\');');

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
    }
}




