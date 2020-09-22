<?php

use Hyperf\Database\Schema\Schema;
use Hyperf\Database\Schema\Blueprint;
use Hyperf\Database\Migrations\Migration;
use Hyperf\DbConnection\Db;

class CreateSettingConnectChatlinkSitesTable extends Migration
{
    public $table_name = 'setting_connect_chatlink_sites';

    /**
     * Run the migrations.
     */
    public function up(): void
    {

        Schema::create('setting_connect_chatlink_sites', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title')->comment(__('database.setting_connect_chatlink_sites.title'));
            $table->timestamps();
        });
        $comment = __('database.setting_connect_chatlink_sites.table_name');
        Db::select("ALTER TABLE {$this->table_name} COMMENT = '{$comment}'");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('setting_connect_chatlink_sites');
    }
}
