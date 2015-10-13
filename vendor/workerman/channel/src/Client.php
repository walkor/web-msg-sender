<?php
namespace Channel;
use Workerman\Lib\Timer;
use Workerman\Connection\AsyncTcpConnection;

class Client 
{
    public static $onMessage = null;

    protected static $_remoteConnection = null;

    protected static $_remoteIp = null;

    protected static $_remotePort = null;

    protected static $_timer = null;

    public static function connect($ip = '127.0.0.1', $port = 2206)
    {
        if(!self::$_remoteConnection)
        {
             self::$_remoteIp = $ip;
             self::$_remotePort = $port;
             self::$_remoteConnection = new AsyncTcpConnection('Text://'.self::$_remoteIp.':'.self::$_remotePort);
             self::$_remoteConnection->onClose = 'Channel\Client::onRemoteClose'; 
             self::$_remoteConnection->onConnect = 'Channel\Client::onRemoteConnect';
             self::$_remoteConnection->onMessage = function($connection, $data)
             {
                 $data = unserialize($data);
                 call_user_func(Client::$onMessage, $data['channel'], $data['data']);
             };
             self::$_remoteConnection->connect();
         }    
    }

    public static function onRemoteClose()
    {
        self::clearTimer();
        self::$_timer = Timer::add(1, 'Channel\Client::connect', array(self::$_remoteIp, self::$_remotePort));
    }

    public static function onRemoteConnect()
    {
        self::clearTimer();
    }

    public static function clearTimer()
    {
        
        if(self::$_timer)
        {
           Timer::del(self::$_timer);
           self::$_timer = null;
        }
    }

    public static function subscribe($channels)
    {
         self::connect();
         self::$_remoteConnection->send(serialize(array('type' => 'subscribe', 'channels'=>(array)$channels)));
    }

    public static function unsubscribe($channels)
    {
        self::connect();
        self::$_remoteConnection->send(serialize(array('type' => 'unsubscribe', 'channels'=>(array)$channels))); 
    }

    public static function publish($channels, $data)
    {
        self::connect();
        self::$_remoteConnection->send(serialize(array('type' => 'publish', 'channels'=>(array)$channels, 'data' => $data)));
    }
    
}
