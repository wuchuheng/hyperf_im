<?php

use Hyperf\Database\Schema\Schema;
use Hyperf\Database\Schema\Blueprint;
use Hyperf\Database\Migrations\Migration;
use Hyperf\DbConnection\Db;

class CreateChatSettingTable extends Migration
{
    public $table_name = 'chat_setting';

    /**
     * Run the migrations.
     */
    public function up(): void
    {
        $table_name = $this->table_name;
        Schema::create($table_name, function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('user_id')->comment(__('database.user_id'));
            $table->integer('rooms')->default(0)->comment(__('database.rooms'));
            $table->smallInteger('is_welcome')->default(0)->comment(__('database.is_welcome'));
            $table->string('welcome', 6144)->default('您好，很高兴为您服务！')->comment(__('database.welcome'));
            $table->timestamps();
        });
        $comment = __('database.chat_setting');
        Db::select("ALTER TABLE {$table_name} COMMENT = '{$comment}'");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists($this->table_name);
    }
}
