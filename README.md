web-msg-sender
==============

Web消息实时推送，支持在线用户数实时统计。基于[PHPSocket.IO](https://github.com/walkor/phpsocket.io)开发，使用websocket推送数据，当浏览器不支持websocket时自动切换comet推送数据。

注意：服务端只支持在linux系统上运行  

效果截图
======
![web-msg-sender-demo](http://www.workerman.net/img/web-msg-sender-demo.png)
 
线上demo  
======

接收消息页面：[http://www.workerman.net:2123/](http://www.workerman.net:2123/)    
后端推送接口url：[http://www.workerman.net:2121/?type=publish&to=&content=msgcontent](http://www.workerman.net:2121/?type=publish&to=&content=msgcontent)  
to为接收消息的uid，如果不传递则向所有人推送消息  
content 为消息内容

注：可以通过php或者其它语言的curl功能实现后台推送

启动停止
======
### 启动服务
php start.php start -d
### 停止服务
php start.php stop
### 服务状态
php start.php status

如果启动不成功请参考 [Workerman手册](http://doc3.workerman.net/install/requirement.html) 配置环境

如果通信不成功检查防火墙   
/sbin/iptables -I INPUT -p tcp --dport 2120 -j ACCEPT   
/sbin/iptables -I INPUT -p tcp --dport 2121 -j ACCEPT   
/sbin/iptables -I INPUT -p tcp --dport 2123 -j ACCEPT    

 
workerman相关参见 [www.workerman.net](http://www.workerman.net/)
=================

workerman更多有趣的应用：
=======================

[小蝌蚪聊天室](http://kedou.workerman.net) 

[多人在线flappy birds](http://www.workerman.net/demos/flappy-bird/)

[其它](http://www.workerman.net/applications)



