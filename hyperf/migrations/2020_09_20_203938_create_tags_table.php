<?php

use Hyperf\Database\Schema\Schema;
use Hyperf\Database\Schema\Blueprint;
use Hyperf\Database\Migrations\Migration;
use Hyperf\DbConnection\Db;

class CreateTagsTable extends Migration
{
    public $table_name = 'tags';
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create($this->table_name, function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('type')->comment(__('database.tags_fields.type'));
            $table->string('name')->comment(__('database.tags_fields.name'));
            $table->string('color')->comment(__('database.tags_fields.color'));
            $table->integer('pid')->default(0)->comment(__('database.tags_fields.pid'));
            $table->string('path')->default('0')->comment(__('database.tags_fields.path'));
            $table->softDeletes();
            $table->timestamps();
        });
        $comment = __('database.tags');
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
