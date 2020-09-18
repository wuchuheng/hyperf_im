<?php

use Hyperf\Database\Schema\Schema;
use Hyperf\Database\Schema\Blueprint;
use Hyperf\Database\Migrations\Migration;
use Hyperf\DbConnection\Db;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        $table_name = 'users';
        Schema::create($table_name, function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('username')->comment(__('database.username'));
            $table->string('nickname')->comment(__('database.nickname'));
            $table->string('password')->comment(__('database.password'));
            $table->integer('avatar_id')->comment(__('database.avatar_id'));
            $table->integer('rooms')->comment(__('database.rooms'));
            $table->timestamps();
        });
        $comment = __('database.usertable');
        DB::select("ALTER TABLE {$table_name} COMMENT = '{$comment}'");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
}
