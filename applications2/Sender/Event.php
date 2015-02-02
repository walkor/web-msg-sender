<?php
/**
 * 
 * 主逻辑
 * 主要是处理onGatewayMessage onMessage onClose 三个方法
 * @author walkor <walkor@workerman.net>
 * 
 */
use \Lib\Context;
use \Lib\Gateway;
use \Lib\StatisticClient;
use \Lib\Store;
use \Protocols\GatewayProtocol;
use \Protocols\WebSocket;

class Event
{
    /**
     * 网关有消息时，判断消息是否完整
     */
    public static function onGatewayMessage($buffer)
    {
        return WebSocket::check($buffer);
    }
   
   /**
    * 有消息时
    * @param int $client_id
    * @param string $message
    */
   public static function onMessage($client_id, $message)
   {
       // 如果是websocket握手
       if(self::checkHandshake($message))
       {
           // debug
           echo "client:{$_SERVER['REMOTE_ADDR']}:{$_SERVER['REMOTE_PORT']} gateway:{$_SERVER['GATEWAY_ADDR']}:{$_SERVER['GATEWAY_PORT']}  client_id:$client_id onMessage:".$message."\n";
           return;
       }
       
       // 判断是不是websocket的关闭连接的包
        if(WebSocket::isClosePacket($message))
        {
            Gateway::kickClient($client_id);
            return self::onClose($client_id);
        }
        
        // 解码websocket，得到原始数据
        $message =WebSocket::decode($message);
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
                            'time'=>date('Y-m-d :i:s'),
                    );
                    return Gateway::sendToClient($message_data['to_client_id'], Websocket::encode(json_encode($new_message)));
                }
                // 向所有浏览器发送消息
                $new_message = array(
                        'type'=>'send',
                        'from_client_id'=>$client_id,
                        'to_client_id'=>'all',
                        'content'=>nl2br($message_data['content']),
                        'time'=>date('Y-m-d :i:s'),
                );
                return Gateway::sendToAll(Websocket::encode(json_encode($new_message)));
        }
        
   }
   
   /**
    * 当客户端断开连接时
    * @param integer $client_id 客户端id
    */
   public static function onClose($client_id)
   {
       // debug
       echo "client:{$_SERVER['REMOTE_ADDR']}:{$_SERVER['REMOTE_PORT']} gateway:{$_SERVER['GATEWAY_ADDR']}:{$_SERVER['GATEWAY_PORT']}  client_id:$client_id onClose:''\n";
   }
   
   /**
    * websocket协议握手
    * @param string $message
    */
   public static function checkHandshake($message)
   {
       // WebSocket 握手阶段
       if(0 === strpos($message, 'GET'))
       {
           // 解析Sec-WebSocket-Key
           $Sec_WebSocket_Key = '';
           if(preg_match("/Sec-WebSocket-Key: *(.*?)\r\n/", $message, $match))
           {
               $Sec_WebSocket_Key = $match[1];
           }
           $new_key = base64_encode(sha1($Sec_WebSocket_Key."258EAFA5-E914-47DA-95CA-C5AB0DC85B11",true));
           // 握手返回的数据
           $new_message = "HTTP/1.1 101 Switching Protocols\r\n";
           $new_message .= "Upgrade: websocket\r\n";
           $new_message .= "Sec-WebSocket-Version: 13\r\n";
           $new_message .= "Connection: Upgrade\r\n";
           $new_message .= "Sec-WebSocket-Accept: " . $new_key . "\r\n\r\n";
            
           // 发送数据包到客户端 完成握手
           Gateway::sendToCurrentClient($new_message);
           return true;
       }
       // 如果是flash发来的policy请求
       elseif(trim($message) === '<policy-file-request/>')
       {
           $policy_xml = '<?xml version="1.0"?><cross-domain-policy><site-control permitted-cross-domain-policies="all"/><allow-access-from domain="*" to-ports="*"/></cross-domain-policy>'."\0";
           Gateway::sendToCurrentClient($policy_xml);
           return true;
       }
       return false;
   }

}
