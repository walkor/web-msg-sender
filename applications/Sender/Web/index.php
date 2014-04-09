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
  ws = {};
  if (typeof console == "undefined") {    this.console = { log: function (msg) {  } };}
  WEB_SOCKET_SWF_LOCATION = "/swf/WebSocketMain.swf";
  WEB_SOCKET_DEBUG = true;
  window.onload = function()
  {
  	// =====================================================
  	ws = new WebSocket("ws://"+document.domain+":3232/");
  	// socket连接打开
  	ws.send(JSON.stringify({"type":"login","name":"xx"}));
  	
  	//当有消息时根据消息类型显示不同信息
  	ws.onmessage = function(e) {
  	  console.log(e.data);
  	  var data = JSON.parse(e.data);
  	  switch(data['type']){
  	        // 展示消息
  	        case 'send':
  	      	  //{"type":"say","from_uid":xxx,"to_uid":"all/uid","content":"xxx","time":"xxx"}
  	        	if(typeof('show_msg')=="function"){
  	        		show_msg(e.data);
  	        	}
  	        	else{
  	        		alert('from_uid:'+data['from_uid'] + ' to_uid:' + data['to_uid'] + '消息:' +data['content'] + '时间:' + data['time']);
  	        	}
  	      	  break;
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
<body>
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
