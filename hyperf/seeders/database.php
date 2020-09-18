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

        DB::insert('INSERT INTO `users`(`id`, `username`, `nickname`, `password`, `avatar_id`, `created_at`, `updated_at`) VALUES (1, \'root@wuchuheng.com\', \'admin\', \'$2y$10$26P6hmNGvJ6BAs/nNRfTQeu1cmK4KjLN4o14SKzyrAEtGOFf9YPN.\', 1, \'2020-07-12 18:48:41\', \'2020-07-12 18:48:41\');');

        // chat_setting
        DB::insert('INSERT INTO `chat_setting` (`id`, `user_id`, `rooms`, `is_welcome`, `welcome`) VALUES (\'1\', \'1\', \'2\', \'0\', \'您好，很高兴为您服务！\')');

    }
}
