<?php 
use \Workerman\Worker;
use \Workerman\WebServer;
use \Workerman\Autoloader;

// 自动加载类
require_once __DIR__ . '/../../Workerman/Autoloader.php';
Autoloader::setRootPath(__DIR__);

// WebServer
$web = new WebServer("http://0.0.0.0:3333");
// WebServer进程数
$web->count = 2;
// 设置域名与站点目录映射关系
$web->addRoot('www.your_domain.com', __DIR__.'/Web');

// 如果不是在根目录启动，则运行runAll方法
if(!defined('GLOBAL_START'))
{
    Worker::runAll();
}
