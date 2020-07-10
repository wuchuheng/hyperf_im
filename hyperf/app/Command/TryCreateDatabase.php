<?php

declare(strict_types=1);

namespace App\Command;

use Hyperf\Command\Command as HyperfCommand;
use Hyperf\Command\Annotation\Command;
use Psr\Container\ContainerInterface;

/**
 * @Command
 */
class TryCreateDatabase extends HyperfCommand
{
    /**
     * @var ContainerInterface
     */
    protected $container;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;

        parent::__construct('TryCreateDatabase:true');
    }

    public function configure()
    {
        parent::configure();
        $this->setDescription('if database not be exits, then to create');
    }

    public function handle()
    {
        $db_host = env('DB_HOST');
        $db_user = env('DB_USERNAME');
        $db_password = env('DB_PASSWORD');
        $db = env('DB_DATABASE');
        try {
            $dbh = new \PDO("mysql:host=$db_host", $db_user, $db_password);
        } catch (PDOException $e) {
            $this->line($e->getMessage(), 'error');
            die();
        }

        $stmt = $dbh->query("SELECT COUNT(*) FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = '${db}'");
        $is_db_exists = (bool) $stmt->fetchColumn();
        if (!$is_db_exists) {
            try{
                $dbh->exec("CREATE DATABASE `$db`;");
                $this->line("create database $db success", 'info');
                // migrate database
                $this->call('migrate:fresh');
                // inport seeder
                $this->call('db:seed', array_filter([
                    '--database' => 'default',
                    '--force' => true,
                ]));
            } catch (\Exception $E) {
                $this->line($E->getMessage(), 'error');
            }
        }
    }
}
