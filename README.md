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
推送接口url：[http://www.workerman.net:2121/?type=publish&to=&content=msgcontent](http://www.workerman.net:2121/?type=publish&to=&content=msgcontent)  
to为接收消息的uid，如果不传递则向所有人推送消息  
content 为消息内容

环境部署
======

centos系统安装教程

1、命令行运行yum install php-cli php-process git php-devel php-pear libevent-devel

2、命令行运行pecl install channel://pecl.php.net/libevent-0.1.0

3、命令行运行echo extension=libevent.so > /etc/php.d/libevent.ini

4、命令行运行cd /home/ && git clone https://github.com/walkor/web-msg-sender

5、命令行运行php start.php start -d


debian/ubuntu系统安装教程

1、命令行运行apt-get update && apt-get install php5-cli git php-pear php5-dev libevent-dev

2、命令行运行pecl install channel://pecl.php.net/libevent-0.1.0

3、命令行运行echo extension=libevent.so > /etc/php5/cli/conf.d/libevent.ini

4、命令行运行cd /home/ && git clone https://github.com/walkor/web-msg-sender

5、命令行运行php start.php start -d


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



