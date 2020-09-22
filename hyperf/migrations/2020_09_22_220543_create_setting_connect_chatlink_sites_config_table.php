<?php

use Hyperf\Database\Schema\Schema;
use Hyperf\Database\Schema\Blueprint;
use Hyperf\Database\Migrations\Migration;
use Hyperf\DbConnection\Db;

class CreateSettingConnectChatlinkSitesConfigTable extends Migration
{
    public $table_name = 'setting_connect_chatlink_sites_config';
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        $lan = 'database.setting_connect_chatlink_sites_config.';

        Schema::create('setting_connect_chatlink_sites_config', function (Blueprint $table) use($lan){
            $table->bigIncrements('id');
            $table->integer('site_id')->comment(__($lan. 'site_id'));
            $table->string('driver_type')->comment(__($lan. 'driver_type'));
            $table->string('size')->comment(__($lan.'size'));
            $table->string('theme')->comment(__($lan.'theme'));
            $table->string('client_text_color')->comment(__($lan.'client_text_color'));
            $table->string('is_access')->nullable()->comment(__($lan.'is_access'));
            $table->string('is_carousel')->nullable()->comment(__($lan.'is_carousel'));
            $table->string('is_fqa')->comment(__($lan.'is_fqa'));
            $table->string('background_color')->nullable()->comment(__($lan . 'background_color'));
            $table->integer('background_album_id')->nullable()->comment(__($lan . 'background_album_id'));
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
