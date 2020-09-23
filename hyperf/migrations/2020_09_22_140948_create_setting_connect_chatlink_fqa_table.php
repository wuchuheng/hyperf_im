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
        $lan = 'database.setting_connect_chatlink_fqa.';

        Schema::create($this->table_name, function (Blueprint $table) use($lan){
            $table->bigIncrements('id');
            $table->integer('site_id')
                ->comment(__('.site_id'));
            $table->string('driver_type')->comment(__($lan . 'driver_type'));
            $table->string('title')
                ->comment(__($lan . 'title'));
            $table->text('content')
                ->comment(__($lan . 'content'));
            $table->integer('order_no')
                ->comment(__($lan . 'order_no'));
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
