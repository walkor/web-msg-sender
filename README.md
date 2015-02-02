web-msg-sender
==============

Web消息实时推送。websocket+PHP多进程（[workerman框架](http://www.workerman.net/workerman)）


注意：服务端只支持在linux系统上运行  


后台发布消息页面:http://ip:3333  
用户接受消息页面:http://ip:3333/web-msg-sender.html  

接收消息的页面只依赖Web/js/sender.js（不支持websocket的浏览器也会依赖Web/swf/SebSocketMain.swf，通过flash实现websocket连接到workerman服务），  
可以将 js/sender.js 和 /swf/SebSocketMain.swf放入你的站点并引用 js/sender.js，便可以接收消息推送 


如果通信不成功检查防火墙  
/sbin/iptables -I INPUT -p tcp --dport 3333 -j ACCEPT  
/sbin/iptables -I INPUT -p tcp --dport 3232 -j ACCEPT  

demo  
======

后台发消息的的页面：[workerman.net:3333/](http://workerman.net:3333)    
用户接受消息的页面：[workerman.net/web-msg-sender.html](http://workerman.net/web-msg-sender.html) 可以多开几个    

环境部署
======

阿里云主机centos系统安装教程

1、命令行运行yum install php-cli php-process git php-devel php-pear libevent-devel

2、命令行运行pecl install channel://pecl.php.net/libevent-0.1.0

3、命令行运行echo extension=libevent.so > /etc/php.d/libevent.ini

4、命令行运行cd /home/ && git clone https://github.com/walkor/web-msg-sender

5、命令行运行php start.php start -d


阿里云主机debian/ubuntu系统安装教程

1、命令行运行apt-get update && apt-get install php5-cli git php-pear php5-dev libevent-dev

2、命令行运行pecl install channel://pecl.php.net/libevent-0.1.0

3、命令行运行echo extension=libevent.so > /etc/php5/cli/conf.d/libevent.ini

4、命令行运行cd /home/ && git clone https://github.com/walkor/web-msg-sender

5、命令行运行php start.php start -d


 
workerman相关参见 [www.workerman.net](http://www.workerman.net/)
=================

workerman更多有趣的应用：
=======================

[小蝌蚪聊天室](http://kedou.workerman.net) 

[多人在线flappy birds](http://flap.workerman.net)

[其它](http://www.workerman.net/applications)



