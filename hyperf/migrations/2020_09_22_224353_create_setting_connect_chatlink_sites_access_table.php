<?php

use Hyperf\Database\Schema\Schema;
use Hyperf\Database\Schema\Blueprint;
use Hyperf\Database\Migrations\Migration;
use Hyperf\DbConnection\Db;

class CreateSettingConnectChatlinkSitesAccessTable extends Migration
{
    public $table_name = 'setting_connect_chatlink_sites_access';

    /**
     * Run the migrations.
     */
    public function up(): void
    {
        $lan = 'setting_connect_chatlink_sites_access';
        Schema::create($this->table_name, function (Blueprint $table) use($lan){
            $table->bigIncrements('id');
            $table->string('name')->comment(__($lan . 'name'));
            $table->integer('album_id')->comment(__($lan . 'album_id'));
            $table->string('url')->comment(__($lan . 'url'));
            $table->integer('order_no')->comment(__($lan . 'order_no'));
            $table->timestamps();
        });
        $comment = __($lan . 'table_name');
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
