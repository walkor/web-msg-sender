<?php
/**
 * This file is part of workerman.
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the MIT-LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @author walkor<walkor@workerman.net>
 * @copyright walkor<walkor@workerman.net>
 * @link http://www.workerman.net/
 * @license http://www.opensource.org/licenses/mit-license.php MIT License
 */

/**
 * 主逻辑
 * 主要是处理 onMessage onClose 方法
 */

use \GatewayWorker\Lib\Gateway;

class Event
{
   /**
    * 有消息时
    * @param int $client_id
    * @param string $message
    */
   public static function onMessage($client_id, $message)
   {
        // debug
        echo "client:{$_SERVER['REMOTE_ADDR']}:{$_SERVER['REMOTE_PORT']} gateway:{$_SERVER['GATEWAY_ADDR']}:{$_SERVER['GATEWAY_PORT']}  client_id:$client_id session:".json_encode($_SESSION)." onMessage:".$message."\n";
        
        // 客户端传递的是json数据
        $message_data = json_decode($message, true);
        if(!$message_data)
        {
            return ;
        }
        
        // 根据类型做相应的业务逻辑
        switch($message_data['type'])
        {
            // 发送数据给用户 message: {type:send, to_client_id:xx, content:xx}
            case 'send':
                // 向某个浏览器窗口发送消息
                if($message_data['to_client_id'] != 'all')
                {
                    $new_message = array(
                            'type'=>'send',
                            'from_client_id'=>$client_id,
                            'to_client_id'=>$message_data['to_client_id'],
                            'content'=>nl2br($message_data['content']),
                            'time'=>date('Y-m-d H:i:s'),
                    );
                    return Gateway::sendToClient($message_data['to_client_id'], json_encode($new_message));
                }
                // 向所有浏览器发送消息
                $new_message = array(
                        'type'=>'send',
                        'from_client_id'=>$client_id,
                        'to_client_id'=>'all',
                        'content'=>nl2br($message_data['content']),
                        'time'=>date('Y-m-d H:i:s'),
                );
                return Gateway::sendToAll(json_encode($new_message));
        }
   }
   
   /**
    * 当用户断开连接时
    * @param integer $client_id 用户id
    */
   public static function onClose($client_id)
   {
       // debug
       echo "client:{$_SERVER['REMOTE_ADDR']}:{$_SERVER['REMOTE_PORT']} gateway:{$_SERVER['GATEWAY_ADDR']}:{$_SERVER['GATEWAY_PORT']}  client_id:$client_id onClose:''\n";
   }
}
