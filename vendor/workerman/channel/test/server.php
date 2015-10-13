<?php
use Workerman\Worker;
use Workerman\Lib\Timer;

// composer autoload
include __DIR__ . '/../vendor/autoload.php';

$channel_server = new Channel\Server();

$worker = new Worker();
$worker->onWorkerStart = function()
{
    Channel\Client::$onMessage = function($channel, $data){
        var_dump($channel, $data);
    };
    Channel\Client::subscribe('abc');
    Timer::add(5, function(){
        Channel\Client::publish('abc', array('efg'));
    });
};

Worker::runAll();
