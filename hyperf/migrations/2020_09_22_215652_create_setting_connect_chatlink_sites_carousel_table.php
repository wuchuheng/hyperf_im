<?php

use Hyperf\Database\Schema\Schema;
use Hyperf\Database\Schema\Blueprint;
use Hyperf\Database\Migrations\Migration;
use Hyperf\DbConnection\Db;

class CreateSettingConnectChatlinkSitesCarouselTable extends Migration
{
    public $table_name = 'setting_connect_chatlink_sites_carousel';
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        $lan = 'database.setting_connect_chatlink_sites_carousel.';

        Schema::create('setting_connect_chatlink_sites_carousel', function (Blueprint $table) use($lan){
            $table->bigIncrements('id');
            $table->integer('album_id')
                ->comment(__($lan . 'album_id'));
            $table->integer('site_id')->comment($lan . 'site_id');
            $table->integer('order_no')->comment(__($lan . 'order_no'));
            $table->timestamps();
        });
        $comment = __('database.setting_connect_chatlink_sites_carousel.table_name');
        Db::select("ALTER TABLE {$this->table_name} COMMENT = '{$comment}'");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('setting_connect_chatlink_sites_carousel');
    }
}
