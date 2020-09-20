<?php

use Hyperf\Database\Schema\Schema;
use Hyperf\Database\Schema\Blueprint;
use Hyperf\Database\Migrations\Migration;
use Hyperf\DbConnection\Db;

class CreateConversationTagsTable extends Migration
{
    public $table_name = 'conversation_tags';

    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create($this->table_name, function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('conversation_id')->comment(__('database.conversation_tags.conversation_id'));
            $table->integer('tag_id')->comment(__('database.conversation_tags.tag_id'));
            $table->timestamps();
        });
        $comment = __('database.conversation_tags.table_name');
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
