<?php 
use \Workerman\Worker;
use \GatewayWorker\BusinessWorker;
use \Workerman\Autoloader;

// 自动加载类
require_once __DIR__ . '/../../Workerman/Autoloader.php';
Autoloader::setRootPath(__DIR__);

// bussinessWorker 进程
$worker = new BusinessWorker();
// 名称
$worker->name = 'SenderBusinessWorker';
// 进程数
$worker->count = 4;


// 如果不是在根目录启动，则运行runAll方法
if(!defined('GLOBAL_START'))
{
    Worker::runAll();
}
