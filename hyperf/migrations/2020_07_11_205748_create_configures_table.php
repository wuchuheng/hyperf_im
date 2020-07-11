<?php

use Hyperf\Database\Schema\Schema;
use Hyperf\Database\Schema\Blueprint;
use Hyperf\Database\Migrations\Migration;
use Hyperf\DbConnection\Db;

class CreateConfiguresTable extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        $table_name = 'configures';
        Schema::create($table_name, function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('key')->comment(__('database.key'));
            $table->string('value')->comment(__('database.value'));
            $table->string('note')->nullable()->comment(__('database.note'));
            $table->timestamps();
        });
        $comment = __('database.configurestable');
        DB::select("ALTER TABLE {$table_name} COMMENT = '{$comment}'");

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('configures');
    }
}
