ws = {};
if (typeof console == "undefined") {    this.console = { log: function (msg) {  } };}
WEB_SOCKET_SWF_LOCATION = "swf/WebSocketMain.swf";
WEB_SOCKET_DEBUG = true;
WEB_SOCKET_SUPPRESS_CROSS_DOMAIN_SWF_ERROR = true
window.onload = function()
{
	// =====================================================
	ws = new WebSocket("ws://"+document.domain+":3232/");
	ws.onopen = function() {
		// 发送数据
		ws.send(JSON.stringify({"type":"login","name":"xx"}));
	}
	
	//当有消息时根据消息类型显示不同信息
	ws.onmessage = function(e) {
	  console.log(e.data);
	  var data = JSON.parse(e.data);
	  switch(data['type']){
	        // 展示消息
	        case 'send':
	      	  //{"type":"say","from_client_id":xxx,"to_client_id":"all/client_id","content":"xxx","time":"xxx"}
	        	if(typeof('show_msg')=="function"){
	        		show_msg(data);
	        	}
	        	else{
	        		alert('from_client_id:'+data['from_client_id'] + ' to_client_id:' + data['to_client_id'] + '消息:' +data['content'] + '时间:' + data['time']);
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






/*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();

/*
json2.js
2014-02-04

Public Domain.

NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

See http://www.JSON.org/js.html


This code should be minified before deployment.
See http://javascript.crockford.com/jsmin.html

USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
NOT CONTROL.


This file creates a global JSON object containing two methods: stringify
and parse.

    JSON.stringify(value, replacer, space)
        value       any JavaScript value, usually an object or array.

        replacer    an optional parameter that determines how object
                    values are stringified for objects. It can be a
                    function or an array of strings.

        space       an optional parameter that specifies the indentation
                    of nested structures. If it is omitted, the text will
                    be packed without extra whitespace. If it is a number,
                    it will specify the number of spaces to indent at each
                    level. If it is a string (such as '\t' or '&nbsp;'),
                    it contains the characters used to indent at each level.

        This method produces a JSON text from a JavaScript value.

        When an object value is found, if the object contains a toJSON
        method, its toJSON method will be called and the result will be
        stringified. A toJSON method does not serialize: it returns the
        value represented by the name/value pair that should be serialized,
        or undefined if nothing should be serialized. The toJSON method
        will be passed the key associated with the value, and this will be
        bound to the value

        For example, this would serialize Dates as ISO strings.

            Date.prototype.toJSON = function (key) {
                function f(n) {
                    // Format integers to have at least two digits.
                    return n < 10 ? '0' + n : n;
                }

                return this.getUTCFullYear()   + '-' +
                     f(this.getUTCMonth() + 1) + '-' +
                     f(this.getUTCDate())      + 'T' +
                     f(this.getUTCHours())     + ':' +
                     f(this.getUTCMinutes())   + ':' +
                     f(this.getUTCSeconds())   + 'Z';
            };

        You can provide an optional replacer method. It will be passed the
        key and value of each member, with this bound to the containing
        object. The value that is returned from your method will be
        serialized. If your method returns undefined, then the member will
        be excluded from the serialization.

        If the replacer parameter is an array of strings, then it will be
        used to select the members to be serialized. It filters the results
        such that only members with keys listed in the replacer array are
        stringified.

        Values that do not have JSON representations, such as undefined or
        functions, will not be serialized. Such values in objects will be
        dropped; in arrays they will be replaced with null. You can use
        a replacer function to replace those with JSON values.
        JSON.stringify(undefined) returns undefined.

        The optional space parameter produces a stringification of the
        value that is filled with line breaks and indentation to make it
        easier to read.

        If the space parameter is a non-empty string, then that string will
        be used for indentation. If the space parameter is a number, then
        the indentation will be that many spaces.

        Example:

        text = JSON.stringify(['e', {pluribus: 'unum'}]);
        // text is '["e",{"pluribus":"unum"}]'


        text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
        // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

        text = JSON.stringify([new Date()], function (key, value) {
            return this[key] instanceof Date ?
                'Date(' + this[key] + ')' : value;
        });
        // text is '["Date(---current time---)"]'


    JSON.parse(text, reviver)
        This method parses a JSON text to produce an object or array.
        It can throw a SyntaxError exception.

        The optional reviver parameter is a function that can filter and
        transform the results. It receives each of the keys and values,
        and its return value is used instead of the original value.
        If it returns what it received, then the structure is not modified.
        If it returns undefined then the member is deleted.

        Example:

        // Parse the text. Values that look like ISO date strings will
        // be converted to Date objects.

        myData = JSON.parse(text, function (key, value) {
            var a;
            if (typeof value === 'string') {
                a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                if (a) {
                    return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                        +a[5], +a[6]));
                }
            }
            return value;
        });

        myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
            var d;
            if (typeof value === 'string' &&
                    value.slice(0, 5) === 'Date(' &&
                    value.slice(-1) === ')') {
                d = new Date(value.slice(5, -1));
                if (d) {
                    return d;
                }
            }
            return value;
        });


This is a reference implementation. You are free to copy, modify, or
redistribute.
*/

/*jslint evil: true, regexp: true */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
lastIndex, length, parse, prototype, push, replace, slice, stringify,
test, toJSON, toString, valueOf
*/


//Create a JSON object only if one does not already exist. We create the
//methods in a closure to avoid creating global variables.

if (typeof JSON !== 'object') {
JSON = {};
}

(function () {
'use strict';

function f(n) {
    // Format integers to have at least two digits.
    return n < 10 ? '0' + n : n;
}

if (typeof Date.prototype.toJSON !== 'function') {

    Date.prototype.toJSON = function () {

        return isFinite(this.valueOf())
            ? this.getUTCFullYear()     + '-' +
                f(this.getUTCMonth() + 1) + '-' +
                f(this.getUTCDate())      + 'T' +
                f(this.getUTCHours())     + ':' +
                f(this.getUTCMinutes())   + ':' +
                f(this.getUTCSeconds())   + 'Z'
            : null;
    };

    String.prototype.toJSON      =
        Number.prototype.toJSON  =
        Boolean.prototype.toJSON = function () {
            return this.valueOf();
        };
}

var cx,
    escapable,
    gap,
    indent,
    meta,
    rep;


function quote(string) {

//If the string contains no control characters, no quote characters, and no
//backslash characters, then we can safely slap some quotes around it.
//Otherwise we must also replace the offending characters with safe escape
//sequences.

    escapable.lastIndex = 0;
    return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
        var c = meta[a];
        return typeof c === 'string'
            ? c
            : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
    }) + '"' : '"' + string + '"';
}


function str(key, holder) {

//Produce a string from holder[key].

    var i,          // The loop counter.
        k,          // The member key.
        v,          // The member value.
        length,
        mind = gap,
        partial,
        value = holder[key];

//If the value has a toJSON method, call it to obtain a replacement value.

    if (value && typeof value === 'object' &&
            typeof value.toJSON === 'function') {
        value = value.toJSON(key);
    }

//If we were called with a replacer function, then call the replacer to
//obtain a replacement value.

    if (typeof rep === 'function') {
        value = rep.call(holder, key, value);
    }

//What happens next depends on the value's type.

    switch (typeof value) {
    case 'string':
        return quote(value);

    case 'number':

//JSON numbers must be finite. Encode non-finite numbers as null.

        return isFinite(value) ? String(value) : 'null';

    case 'boolean':
    case 'null':

//If the value is a boolean or null, convert it to a string. Note:
//typeof null does not produce 'null'. The case is included here in
//the remote chance that this gets fixed someday.

        return String(value);

//If the type is 'object', we might be dealing with an object or an array or
//null.

    case 'object':

//Due to a specification blunder in ECMAScript, typeof null is 'object',
//so watch out for that case.

        if (!value) {
            return 'null';
        }

//Make an array to hold the partial results of stringifying this object value.

        gap += indent;
        partial = [];

//Is the value an array?

        if (Object.prototype.toString.apply(value) === '[object Array]') {

//The value is an array. Stringify every element. Use null as a placeholder
//for non-JSON values.

            length = value.length;
            for (i = 0; i < length; i += 1) {
                partial[i] = str(i, value) || 'null';
            }

//Join all of the elements together, separated with commas, and wrap them in
//brackets.

            v = partial.length === 0
                ? '[]'
                : gap
                ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
                : '[' + partial.join(',') + ']';
            gap = mind;
            return v;
        }

//If the replacer is an array, use it to select the members to be stringified.

        if (rep && typeof rep === 'object') {
            length = rep.length;
            for (i = 0; i < length; i += 1) {
                if (typeof rep[i] === 'string') {
                    k = rep[i];
                    v = str(k, value);
                    if (v) {
                        partial.push(quote(k) + (gap ? ': ' : ':') + v);
                    }
                }
            }
        } else {

//Otherwise, iterate through all of the keys in the object.

            for (k in value) {
                if (Object.prototype.hasOwnProperty.call(value, k)) {
                    v = str(k, value);
                    if (v) {
                        partial.push(quote(k) + (gap ? ': ' : ':') + v);
                    }
                }
            }
        }

//Join all of the member texts together, separated with commas,
//and wrap them in braces.

        v = partial.length === 0
            ? '{}'
            : gap
            ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
            : '{' + partial.join(',') + '}';
        gap = mind;
        return v;
    }
}

//If the JSON object does not yet have a stringify method, give it one.

if (typeof JSON.stringify !== 'function') {
    escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    meta = {    // table of character substitutions
        '\b': '\\b',
        '\t': '\\t',
        '\n': '\\n',
        '\f': '\\f',
        '\r': '\\r',
        '"' : '\\"',
        '\\': '\\\\'
    };
    JSON.stringify = function (value, replacer, space) {

//The stringify method takes a value and an optional replacer, and an optional
//space parameter, and returns a JSON text. The replacer can be a function
//that can replace values, or an array of strings that will select the keys.
//A default replacer method can be provided. Use of the space parameter can
//produce text that is more easily readable.

        var i;
        gap = '';
        indent = '';

//If the space parameter is a number, make an indent string containing that
//many spaces.

        if (typeof space === 'number') {
            for (i = 0; i < space; i += 1) {
                indent += ' ';
            }

//If the space parameter is a string, it will be used as the indent string.

        } else if (typeof space === 'string') {
            indent = space;
        }

//If there is a replacer, it must be a function or an array.
//Otherwise, throw an error.

        rep = replacer;
        if (replacer && typeof replacer !== 'function' &&
                (typeof replacer !== 'object' ||
                typeof replacer.length !== 'number')) {
            throw new Error('JSON.stringify');
        }

//Make a fake root object containing our value under the key of ''.
//Return the result of stringifying the value.

        return str('', {'': value});
    };
}


//If the JSON object does not yet have a parse method, give it one.

if (typeof JSON.parse !== 'function') {
    cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    JSON.parse = function (text, reviver) {

//The parse method takes a text and an optional reviver function, and returns
//a JavaScript value if the text is a valid JSON text.

        var j;

        function walk(holder, key) {

//The walk method is used to recursively walk the resulting structure so
//that modifications can be made.

            var k, v, value = holder[key];
            if (value && typeof value === 'object') {
                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = walk(value, k);
                        if (v !== undefined) {
                            value[k] = v;
                        } else {
                            delete value[k];
                        }
                    }
                }
            }
            return reviver.call(holder, key, value);
        }


//Parsing happens in four stages. In the first stage, we replace certain
//Unicode characters with escape sequences. JavaScript handles many characters
//incorrectly, either silently deleting them, or treating them as line endings.

        text = String(text);
        cx.lastIndex = 0;
        if (cx.test(text)) {
            text = text.replace(cx, function (a) {
                return '\\u' +
                    ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
            });
        }

//In the second stage, we run the text against regular expressions that look
//for non-JSON patterns. We are especially concerned with '()' and 'new'
//because they can cause invocation, and '=' because it can cause mutation.
//But just to be safe, we want to reject all unexpected forms.

//We split the second stage into 4 regexp operations in order to work around
//crippling inefficiencies in IE's and Safari's regexp engines. First we
//replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
//replace all simple value tokens with ']' characters. Third, we delete all
//open brackets that follow a colon or comma or that begin the text. Finally,
//we look to see that the remaining characters are only whitespace or ']' or
//',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

        if (/^[\],:{}\s]*$/
                .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                    .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                    .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

//In the third stage we use the eval function to compile the text into a
//JavaScript structure. The '{' operator is subject to a syntactic ambiguity
//in JavaScript: it can begin a block or an object literal. We wrap the text
//in parens to eliminate the ambiguity.

            j = eval('(' + text + ')');

//In the optional fourth stage, we recursively walk the new structure, passing
//each name/value pair to a reviver function for possible transformation.

            return typeof reviver === 'function'
                ? walk({'': j}, '')
                : j;
        }

//If the text is not JSON parseable, then a SyntaxError is thrown.

        throw new SyntaxError('JSON.parse');
    };
}
}());

//Copyright: Hiroshi Ichikawa <http://gimite.net/en/>
//License: New BSD License
//Reference: http://dev.w3.org/html5/websockets/
//Reference: http://tools.ietf.org/html/rfc6455

(function() {

if (window.WEB_SOCKET_FORCE_FLASH) {
 // Keeps going.
} else if (window.WebSocket) {
 return;
} else if (window.MozWebSocket) {
 // Firefox.
 window.WebSocket = MozWebSocket;
 return;
}

var logger;
if (window.WEB_SOCKET_LOGGER) {
 logger = WEB_SOCKET_LOGGER;
} else if (window.console && window.console.log && window.console.error) {
 // In some environment, console is defined but console.log or console.error is missing.
 logger = window.console;
} else {
 logger = {log: function(){ }, error: function(){ }};
}

// swfobject.hasFlashPlayerVersion("10.0.0") doesn't work with Gnash.
if (swfobject.getFlashPlayerVersion().major < 10) {
 logger.error("Flash Player >= 10.0.0 is required.");
 return;
}
if (location.protocol == "file:") {
 logger.error(
   "WARNING: web-socket-js doesn't work in file:///... URL " +
   "unless you set Flash Security Settings properly. " +
   "Open the page via Web server i.e. http://...");
}

/**
* Our own implementation of WebSocket class using Flash.
* @param {string} url
* @param {array or string} protocols
* @param {string} proxyHost
* @param {int} proxyPort
* @param {string} headers
*/
window.WebSocket = function(url, protocols, proxyHost, proxyPort, headers) {
 var self = this;
 self.__id = WebSocket.__nextId++;
 WebSocket.__instances[self.__id] = self;
 self.readyState = WebSocket.CONNECTING;
 self.bufferedAmount = 0;
 self.__events = {};
 if (!protocols) {
   protocols = [];
 } else if (typeof protocols == "string") {
   protocols = [protocols];
 }
 // Uses setTimeout() to make sure __createFlash() runs after the caller sets ws.onopen etc.
 // Otherwise, when onopen fires immediately, onopen is called before it is set.
 self.__createTask = setTimeout(function() {
   WebSocket.__addTask(function() {
     self.__createTask = null;
     WebSocket.__flash.create(
         self.__id, url, protocols, proxyHost || null, proxyPort || 0, headers || null);
   });
 }, 0);
};

/**
* Send data to the web socket.
* @param {string} data  The data to send to the socket.
* @return {boolean}  True for success, false for failure.
*/
WebSocket.prototype.send = function(data) {
 if (this.readyState == WebSocket.CONNECTING) {
   throw "INVALID_STATE_ERR: Web Socket connection has not been established";
 }
 // We use encodeURIComponent() here, because FABridge doesn't work if
 // the argument includes some characters. We don't use escape() here
 // because of this:
 // https://developer.mozilla.org/en/Core_JavaScript_1.5_Guide/Functions#escape_and_unescape_Functions
 // But it looks decodeURIComponent(encodeURIComponent(s)) doesn't
 // preserve all Unicode characters either e.g. "\uffff" in Firefox.
 // Note by wtritch: Hopefully this will not be necessary using ExternalInterface.  Will require
 // additional testing.
 var result = WebSocket.__flash.send(this.__id, encodeURIComponent(data));
 if (result < 0) { // success
   return true;
 } else {
   this.bufferedAmount += result;
   return false;
 }
};

/**
* Close this web socket gracefully.
*/
WebSocket.prototype.close = function() {
 if (this.__createTask) {
   clearTimeout(this.__createTask);
   this.__createTask = null;
   this.readyState = WebSocket.CLOSED;
   return;
 }
 if (this.readyState == WebSocket.CLOSED || this.readyState == WebSocket.CLOSING) {
   return;
 }
 this.readyState = WebSocket.CLOSING;
 WebSocket.__flash.close(this.__id);
};

/**
* Implementation of {@link <a href="http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-registration">DOM 2 EventTarget Interface</a>}
*
* @param {string} type
* @param {function} listener
* @param {boolean} useCapture
* @return void
*/
WebSocket.prototype.addEventListener = function(type, listener, useCapture) {
 if (!(type in this.__events)) {
   this.__events[type] = [];
 }
 this.__events[type].push(listener);
};

/**
* Implementation of {@link <a href="http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-registration">DOM 2 EventTarget Interface</a>}
*
* @param {string} type
* @param {function} listener
* @param {boolean} useCapture
* @return void
*/
WebSocket.prototype.removeEventListener = function(type, listener, useCapture) {
 if (!(type in this.__events)) return;
 var events = this.__events[type];
 for (var i = events.length - 1; i >= 0; --i) {
   if (events[i] === listener) {
     events.splice(i, 1);
     break;
   }
 }
};

/**
* Implementation of {@link <a href="http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-registration">DOM 2 EventTarget Interface</a>}
*
* @param {Event} event
* @return void
*/
WebSocket.prototype.dispatchEvent = function(event) {
 var events = this.__events[event.type] || [];
 for (var i = 0; i < events.length; ++i) {
   events[i](event);
 }
 var handler = this["on" + event.type];
 if (handler) handler.apply(this, [event]);
};

/**
* Handles an event from Flash.
* @param {Object} flashEvent
*/
WebSocket.prototype.__handleEvent = function(flashEvent) {
 
 if ("readyState" in flashEvent) {
   this.readyState = flashEvent.readyState;
 }
 if ("protocol" in flashEvent) {
   this.protocol = flashEvent.protocol;
 }
 
 var jsEvent;
 if (flashEvent.type == "open" || flashEvent.type == "error") {
   jsEvent = this.__createSimpleEvent(flashEvent.type);
 } else if (flashEvent.type == "close") {
   jsEvent = this.__createSimpleEvent("close");
   jsEvent.wasClean = flashEvent.wasClean ? true : false;
   jsEvent.code = flashEvent.code;
   jsEvent.reason = flashEvent.reason;
 } else if (flashEvent.type == "message") {
   var data = decodeURIComponent(flashEvent.message);
   jsEvent = this.__createMessageEvent("message", data);
 } else {
   throw "unknown event type: " + flashEvent.type;
 }
 
 this.dispatchEvent(jsEvent);
 
};

WebSocket.prototype.__createSimpleEvent = function(type) {
 if (document.createEvent && window.Event) {
   var event = document.createEvent("Event");
   event.initEvent(type, false, false);
   return event;
 } else {
   return {type: type, bubbles: false, cancelable: false};
 }
};

WebSocket.prototype.__createMessageEvent = function(type, data) {
 if (window.MessageEvent && typeof(MessageEvent) == "function" && !window.opera) {
   return new MessageEvent("message", {
     "view": window,
     "bubbles": false,
     "cancelable": false,
     "data": data
   });
 } else if (document.createEvent && window.MessageEvent && !window.opera) {
   var event = document.createEvent("MessageEvent");
 	event.initMessageEvent("message", false, false, data, null, null, window, null);
   return event;
 } else {
   // Old IE and Opera, the latter one truncates the data parameter after any 0x00 bytes.
   return {type: type, data: data, bubbles: false, cancelable: false};
 }
};

/**
* Define the WebSocket readyState enumeration.
*/
WebSocket.CONNECTING = 0;
WebSocket.OPEN = 1;
WebSocket.CLOSING = 2;
WebSocket.CLOSED = 3;

// Field to check implementation of WebSocket.
WebSocket.__isFlashImplementation = true;
WebSocket.__initialized = false;
WebSocket.__flash = null;
WebSocket.__instances = {};
WebSocket.__tasks = [];
WebSocket.__nextId = 0;

/**
* Load a new flash security policy file.
* @param {string} url
*/
WebSocket.loadFlashPolicyFile = function(url){
 WebSocket.__addTask(function() {
   WebSocket.__flash.loadManualPolicyFile(url);
 });
};

/**
* Loads WebSocketMain.swf and creates WebSocketMain object in Flash.
*/
WebSocket.__initialize = function() {
 
 if (WebSocket.__initialized) return;
 WebSocket.__initialized = true;
 
 if (WebSocket.__swfLocation) {
   // For backword compatibility.
   window.WEB_SOCKET_SWF_LOCATION = WebSocket.__swfLocation;
 }
 if (!window.WEB_SOCKET_SWF_LOCATION) {
   logger.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
   return;
 }
 if (!window.WEB_SOCKET_SUPPRESS_CROSS_DOMAIN_SWF_ERROR &&
     !WEB_SOCKET_SWF_LOCATION.match(/(^|\/)WebSocketMainInsecure\.swf(\?.*)?$/) &&
     WEB_SOCKET_SWF_LOCATION.match(/^\w+:\/\/([^\/]+)/)) {
   var swfHost = RegExp.$1;
   if (location.host != swfHost) {
     logger.error(
         "[WebSocket] You must host HTML and WebSocketMain.swf in the same host " +
         "('" + location.host + "' != '" + swfHost + "'). " +
         "See also 'How to host HTML file and SWF file in different domains' section " +
         "in README.md. If you use WebSocketMainInsecure.swf, you can suppress this message " +
         "by WEB_SOCKET_SUPPRESS_CROSS_DOMAIN_SWF_ERROR = true;");
   }
 }
 var container = document.createElement("div");
 container.id = "webSocketContainer";
 // Hides Flash box. We cannot use display: none or visibility: hidden because it prevents
 // Flash from loading at least in IE. So we move it out of the screen at (-100, -100).
 // But this even doesn't work with Flash Lite (e.g. in Droid Incredible). So with Flash
 // Lite, we put it at (0, 0). This shows 1x1 box visible at left-top corner but this is
 // the best we can do as far as we know now.
 container.style.position = "absolute";
 if (WebSocket.__isFlashLite()) {
   container.style.left = "0px";
   container.style.top = "0px";
 } else {
   container.style.left = "-100px";
   container.style.top = "-100px";
 }
 var holder = document.createElement("div");
 holder.id = "webSocketFlash";
 container.appendChild(holder);
 document.body.appendChild(container);
 // See this article for hasPriority:
 // http://help.adobe.com/en_US/as3/mobile/WS4bebcd66a74275c36cfb8137124318eebc6-7ffd.html
 swfobject.embedSWF(
   WEB_SOCKET_SWF_LOCATION,
   "webSocketFlash",
   "1" /* width */,
   "1" /* height */,
   "10.0.0" /* SWF version */,
   null,
   null,
   {hasPriority: true, swliveconnect : true, allowScriptAccess: "always"},
   null,
   function(e) {
     if (!e.success) {
       logger.error("[WebSocket] swfobject.embedSWF failed");
     }
   }
 );
 
};

/**
* Called by Flash to notify JS that it's fully loaded and ready
* for communication.
*/
WebSocket.__onFlashInitialized = function() {
 // We need to set a timeout here to avoid round-trip calls
 // to flash during the initialization process.
 setTimeout(function() {
   WebSocket.__flash = document.getElementById("webSocketFlash");
   WebSocket.__flash.setCallerUrl(location.href);
   WebSocket.__flash.setDebug(!!window.WEB_SOCKET_DEBUG);
   for (var i = 0; i < WebSocket.__tasks.length; ++i) {
     WebSocket.__tasks[i]();
   }
   WebSocket.__tasks = [];
 }, 0);
};

/**
* Called by Flash to notify WebSockets events are fired.
*/
WebSocket.__onFlashEvent = function() {
 setTimeout(function() {
   try {
     // Gets events using receiveEvents() instead of getting it from event object
     // of Flash event. This is to make sure to keep message order.
     // It seems sometimes Flash events don't arrive in the same order as they are sent.
     var events = WebSocket.__flash.receiveEvents();
     for (var i = 0; i < events.length; ++i) {
       WebSocket.__instances[events[i].webSocketId].__handleEvent(events[i]);
     }
   } catch (e) {
     logger.error(e);
   }
 }, 0);
 return true;
};

// Called by Flash.
WebSocket.__log = function(message) {
 logger.log(decodeURIComponent(message));
};

// Called by Flash.
WebSocket.__error = function(message) {
 logger.error(decodeURIComponent(message));
};

WebSocket.__addTask = function(task) {
 if (WebSocket.__flash) {
   task();
 } else {
   WebSocket.__tasks.push(task);
 }
};

/**
* Test if the browser is running flash lite.
* @return {boolean} True if flash lite is running, false otherwise.
*/
WebSocket.__isFlashLite = function() {
 if (!window.navigator || !window.navigator.mimeTypes) {
   return false;
 }
 var mimeType = window.navigator.mimeTypes["application/x-shockwave-flash"];
 if (!mimeType || !mimeType.enabledPlugin || !mimeType.enabledPlugin.filename) {
   return false;
 }
 return mimeType.enabledPlugin.filename.match(/flashlite/i) ? true : false;
};

if (!window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION) {
 // NOTE:
 //   This fires immediately if web_socket.js is dynamically loaded after
 //   the document is loaded.
 swfobject.addDomLoadEvent(function() {
   WebSocket.__initialize();
 });
}

})();
