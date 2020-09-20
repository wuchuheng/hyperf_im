<?php

use Hyperf\Database\Schema\Schema;
use Hyperf\Database\Schema\Blueprint;
use Hyperf\Database\Migrations\Migration;
use Hyperf\DbConnection\Db;

class CreateClientsTable extends Migration
{
    public $table_name = 'clients';
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create($this->table_name, function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('referrer')->comment(__('database.clients.referrer'));
            $table->string('os')->comment(__('database.clients.os'));
            $table->string('brower')->comment(__('database.clients.brower'));
            $table->string('ip');
            $table->string('name')->comment(__('database.clients.name'));
            $table->integer('age')->nullable()->comment(__('database.clients.age'));
            $table->integer('sex')->default(2)->comment(__('database.clients.sex'));
            $table->string('tel')->nullable()->comment(__('database.clients.tel'));
            $table->string('qq')->nullable();
            $table->string('wechat')->nullable()->comment(__('database.clients.wechat'));
            $table->string('weibo')->nullable()->comment(__('database.clients.weibo'));
            $table->string('address')->nullable()->comment(__('database.clients.address'));
            $table->string('email')->nullable()->comment(__('database.clients.email'));
            $table->string('contact')->nullable()->comment(__('database.clients.contact'));
            $table->string('note')->nullable()->comment(__('database.clients.note'));
            $table->string('fingerprint')->comment(__('database.clients.fingerprint'));

            $table->timestamps();
        });

        $comment = __('database.clients.table_name');
        Db::select("ALTER TABLE {$this->table_name} COMMENT = '{$comment}'");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists($this->table_name);
    }
}
