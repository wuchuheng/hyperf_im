<?php

use Hyperf\Database\Schema\Schema;
use Hyperf\Database\Schema\Blueprint;
use Hyperf\Database\Migrations\Migration;
use Hyperf\DbConnection\Db;

class CreateAlbumsTable extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        $table_name = 'albums';
        Schema::create($table_name, function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('path', 255)->comment(__('database.filepath'));
            $table->string('disk', 20)->comment(__('database.disk'));
            $table->timestamps();
        });
        $comment = __('database.albumstable');
        DB::select("ALTER TABLE {$table_name} COMMENT = '{$comment}'");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('albums');
    }
}
