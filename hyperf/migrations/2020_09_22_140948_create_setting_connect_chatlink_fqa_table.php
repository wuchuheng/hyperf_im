<?php

use Hyperf\Database\Schema\Schema;
use Hyperf\Database\Schema\Blueprint;
use Hyperf\Database\Migrations\Migration;
use Hyperf\DbConnection\Db;

class CreateSettingConnectChatlinkFqaTable extends Migration
{
    public $table_name = 'setting_connect_chatlink_fqa';
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create($this->table_name, function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('window_id')
                ->comment(__('database.setting_connect_chatlink_fqa.window_id'));
            $table->string('title')
                ->comment(__('database.setting_connect_chatlink_fqa.title'));
            $table->text('content')
                ->comment(__('database.setting_connect_chatlink_fqa.content'));
            $table->integer('order_no')
                ->comment(__('database.setting_connect_chatlink_fqa.order_no'));
            $table->timestamps();
        });
        $comment = __('database.setting_connect_chatlink_fqa.table_name');
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
