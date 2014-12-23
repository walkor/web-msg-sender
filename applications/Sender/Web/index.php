<html><head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <title>workerman Web消息推送器</title>
  <script type="text/javascript">
  //WebSocket = null;
  </script>
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <link href="css/style.css" rel="stylesheet">
  <!-- Include these three JS files: -->
 <!-- <script type="text/javascript" src="js/swfobject.js"></script>
  <script type="text/javascript" src="js/web_socket.js"></script>
  <script type="text/javascript" src="js/json.js"></script> -->
 <script type="text/javascript" src="js/sender.js"></script>
  <script type="text/javascript">
    // 提交对话
    function onSubmit() {
      var input = document.getElementById("textarea");
      ws.send(JSON.stringify({"type":"send","to_client_id":"all","content":input.value}));
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
</body>
</html>
