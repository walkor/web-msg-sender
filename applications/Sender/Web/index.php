<html><head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <title>Web消息推送器</title>
  <script type="text/javascript">
  //WebSocket = null;
  </script>
  <link href="/css/bootstrap.min.css" rel="stylesheet">
  <link href="/css/style.css" rel="stylesheet">
  <!-- Include these three JS files: -->
 <script type="text/javascript" src="/js/swfobject.js"></script>
  <script type="text/javascript" src="/js/web_socket.js"></script>
  <script type="text/javascript" src="/js/json.js"></script>

  <script type="text/javascript">
    if (typeof console == "undefined") {    this.console = { log: function (msg) {  } };}
    WEB_SOCKET_SWF_LOCATION = "/swf/WebSocketMain.swf";
    WEB_SOCKET_DEBUG = true;
    var ws, name, user_list={};
    function init() {
       // 创建websocket
    	ws = new WebSocket("ws://"+document.domain+":3232/");
      // 当socket连接打开时，输入用户名
      ws.onopen = function() {
    	  show_prompt();
    	  if(!name) {
    		  return ws.close();
   		  }
    	  ws.send(JSON.stringify({"type":"login","name":name}));
      };
      // 当有消息时根据消息类型显示不同信息
      ws.onmessage = function(e) {
    	  console.log(e.data);
        var data = JSON.parse(e.data);
        switch(data['type']){
              // 展示用户列表
              case 'user_list':
            	  //{"type":"user_list","user_list":[{"uid":xxx,"name":"xxx"},{"uid":xxx,"name":"xxx"}]}
            	  flush_user_list(data);
            	  break;
              // 登录
              case 'login':
                  //{"type":"login","uid":xxx,"name":"xxx","time":"xxx"}
            	  add_user_list(data['uid'], data['name']);
                  say(data['uid'], 'all',  data['name']+' 加入了聊天室', data['time']);
                  break;
              // 发言
              case 'say':
            	  //{"type":"say","from_uid":xxx,"to_uid":"all/uid","content":"xxx","time":"xxx"}
            	  say(data['from_uid'], data['to_uid'], data['content'], data['time']);
            	  break;
             // 用户退出 
              case 'logout':
            	  //{"type":"logout","uid":xxx,"time":"xxx"}
         		 say(data['uid'], 'all', user_list['_'+data['uid']]+' 退出了', data['time']);
         		 del_user_list(data['uid']);
        }
      };
      ws.onclose = function() {
    	  console.log("服务端关闭了连接");
      };
      ws.onerror = function() {
    	  console.log("出现错误");
      };
    }
  
    // 提交对话
    function onSubmit() {
      var input = document.getElementById("textarea");
      ws.send(JSON.stringify({"type":"send","to_uid":"all","content":input.value}));
      input.value = "";
      input.focus();
    }

  </script>
</head>
<body onload="init();">
    <div class="container">
	    <div class="row clearfix">
	        <div class="col-md-1 column">
	        </div>
	        <div class="col-md-6 column">
	        <br>
	        <h3>要发送的消息</h3>
	           <form onsubmit="onSubmit(); return false;">
                    <textarea class="textarea thumbnail" id="textarea"></textarea>
                    <div class="say-btn"><input type="submit" class="btn btn-default" value="发表" /></div>
               </form>
               <p class="cp">Powered by <a href="http://www.workerman.net/web-msg-sender" target="_blank">workerman</a></p>
	        </div>
	        <div class="col-md-3 column">
	        </div>
	    </div>
    </div>
     <!--<script type="text/javascript" src="/js/sender.js"></script>-->
</body>
</html>
