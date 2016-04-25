<?php
use Workerman\Worker;
use Workerman\WebServer;
use Workerman\Lib\Timer;
use PHPSocketIO\SocketIO;

include __DIR__ . '/vendor/autoload.php';

// 启动一个webserver，用于吐html css js，方便展示
// 这个webserver服务不是必须的，可以将这些html css js文件放到你的项目下用nginx或者apache跑
$web = new WebServer('http://0.0.0.0:2123');
$web->addRoot('localhost', __DIR__ . '/web');

if(!defined('GLOBAL_START'))
{
    Worker::runAll();
}
