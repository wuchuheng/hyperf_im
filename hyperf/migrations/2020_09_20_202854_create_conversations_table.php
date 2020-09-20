<?php

use Hyperf\Database\Schema\Schema;
use Hyperf\Database\Schema\Blueprint;
use Hyperf\Database\Migrations\Migration;
use Hyperf\DbConnection\Db;

class CreateConversationsTable extends Migration
{
    public $table_name = 'conversations';
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create($this->table_name, function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('user_id')->comment(__('database.conversations.tag_id'));
            $table->integer('client_conversation_id')->comment(__('database.client_conversation_id'));
            $table->string('fingerprint')->comment(__('database.clients.fingerprint'));
            $table->smallInteger('rate')->nullable()->comment(__('database.conversations.rate'));
            $table->string('evaluation')->nullable()->comment(__('database.conversations.evaluation'));
            $table->timestamps();
        });
        $comment = __('database.conversations.table_name');
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
