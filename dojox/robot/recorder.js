//>>built
define("dojox/robot/recorder",["dojo","dijit","dojox"],function(d){d.provide("dojox.robot.recorder");d.experimental("dojox.robot.recorder");(function(){var n=[],y=0,o=null,q=null,l=function(a,b){if(!(null==o||"doh.robot.keyPress"==a&&b[0]==d.keys.ENTER&&eval("("+b[2]+")").ctrl&&eval("("+b[2]+")").alt)){var c=Math.max(Math.min(Math.round((new Date).getTime()-q.getTime()),1E4),1);"doh.robot.mouseMove"==a?b[2]=c:b[1]=c;n.push({name:a,args:b});q=new Date}},z=function(){var a=n;"doh.robot.keyPress"==a[0].name&&
(a[0].args[0]==d.keys.ENTER||77==a[0].args[0])&&a.splice(0,1);for(var b=a.length-1;b>=a.length-2&&0<=b;b--)("doh.robot.keyPress"==a[b].name&&a[b].args[0]==d.keys.ALT||a[b].args[0]==d.keys.CTRL)&&a.splice(b,1);for(b=0;b<a.length;b++){var c,g;if(a[b+1]&&"doh.robot.mouseMove"==a[b].name&&a[b+1].name==a[b].name&&500>a[b+1].args[2]){c=a[b+1];for(g=0;c&&c.name==a[b].name&&500>c.args[2];)a.splice(b+1,1),g+=c.args[2],a[b].args[0]=c.args[0],a[b].args[1]=c.args[1],c=a[b+1];a[b].args[3]=g}else if(a[b+1]&&"doh.robot.mouseWheel"==
a[b].name&&a[b+1].name==a[b].name&&500>a[b+1].args[1]){c=a[b+1];for(g=0;c&&c.name==a[b].name&&500>c.args[1];)a.splice(b+1,1),g+=c.args[1],a[b].args[0]+=c.args[0],c=a[b+1];a[b].args[2]=g}else if(a[b+2]&&"doh.robot.mouseMoveAt"==a[b].name&&"doh.robot.scrollIntoView"==a[b+2].name)c=a.splice(b+2,1)[0],a.splice(b,0,c);else if(a[b+1]&&"doh.robot.mousePress"==a[b].name&&"doh.robot.mouseRelease"==a[b+1].name&&a[b].args[0]==a[b+1].args[0])a[b].name="doh.robot.mouseClick",a.splice(b+1,1),a[b+1]&&"doh.robot.mouseClick"==
a[b+1].name&&a[b].args[0]==a[b+1].args[0]&&a.splice(b+1,1);else if(a[b+1]&&a[b-1]&&"doh.robot.mouseMoveAt"==a[b-1].name&&"doh.robot.mousePress"==a[b].name&&"doh.robot.mouseMove"==a[b+1].name)a.splice(b+1,0,{name:"doh.robot.mouseMoveAt",args:[a[b-1].args[0],1,100,a[b-1].args[3]+1,a[b-1].args[4]]});else if(a[b+1]&&("doh.robot.keyPress"==a[b].name&&"string"==typeof a[b].args[0]||"doh.robot.typeKeys"==a[b].name)&&"doh.robot.keyPress"==a[b+1].name&&"string"==typeof a[b+1].args[0]&&1E3>=a[b+1].args[1]&&
!eval("("+a[b].args[2]+")").ctrl&&!eval("("+a[b].args[2]+")").alt&&!eval("("+a[b+1].args[2]+")").ctrl&&!eval("("+a[b+1].args[2]+")").alt){a[b].name="doh.robot.typeKeys";a[b].args.splice(3,1);c=a[b+1];for(g=0;c&&"doh.robot.keyPress"==c.name&&"string"==typeof c.args[0]&&1E3>=c.args[1]&&!eval("("+c.args[2]+")").ctrl&&!eval("("+c.args[2]+")").alt;)a.splice(b+1,1),a[b].args[0]+=c.args[0],g+=c.args[1],c=a[b+1];a[b].args[2]=g;a[b].args[0]="'"+a[b].args[0]+"'"}else if("doh.robot.keyPress"==a[b].name)if("string"==
typeof a[b].args[0])a[b].args[0]="'"+a[b].args[0]+"'";else if(0==a[b].args[0])a.splice(b,1);else for(var e in d.keys)if(d.keys[e]==a[b].args[0]){a[b].args[0]="dojo.keys."+e;break}}},A=function(){var a=Math.round((new Date).getTime()-o.getTime());o=null;z();var b=n;if(b.length){var c;c="doh.register('dojox.robot.AutoGeneratedTestGroup',{\n"+("     name: 'autotest"+y++ +"',\n");c=c+("     timeout: "+(a+2E3)+",\n")+"     runTest: function(){\n          var d = new doh.Deferred();\n";for(a=0;a<b.length;a++){c+=
"          "+b[a].name+"(";for(var e=0;e<b[a].args.length;e++)c+=b[a].args[e],e!=b[a].args.length-1&&(c+=", ");c+=");\n"}c+="          doh.robot.sequence(function(){\n               if(/*Your condition here*/){\n                    d.callback(true);\n               }else{\n                    d.errback(new Error('We got a failure'));\n               }\n          }, 1000);\n          return d;\n     }\n});\n";var f=document.createElement("div");f.id="dojox.robot.recorder";f.style.backgroundColor="white";
f.style.position="absolute";b=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;a=window.pageXOffset||(window.dojo?d._fixIeBiDiScrollLeft(document.documentElement.scrollLeft):void 0)||document.body.scrollLeft||0;f.style.left=a+"px";f.style.top=b+"px";b=document.createElement("h1");b.innerHTML="Your code:";f.appendChild(b);b=document.createElement("pre");void 0!==b.innerText?b.innerText=c:b.textContent=c;f.appendChild(b);c=document.createElement("button");c.innerHTML=
"Close";var h=d.connect(c,"onmouseup",function(a){d.stopEvent(a);document.body.removeChild(f);d.disconnect(h)});f.appendChild(c);document.body.appendChild(f);n=[]}},p=function(a){if("string"==typeof a)return"'"+a+"'";if(a.id)return"'"+a.id+"'";var b=document.getElementsByTagName(a.nodeName),c;for(c=0;c<b.length&&!(b[c]==a);c++);return"function(){ return document.getElementsByTagName('"+a.nodeName+"')["+c+"]; }"},r=function(a){return"{left:"+(0==a)+", middle:"+(1==a)+", right:"+(2==a)+"}"};d.connect(document,
"onkeydown",function(a){if((a.keyCode==d.keys.ENTER||77==a.keyCode)&&a.ctrlKey&&a.altKey)d.stopEvent(a),o?A():(alert("Started recording."),n=[],o=new Date,q=new Date)});var e="",f,h,i,m,j,k,s=function(a){if(a&&!(e==a.type&&f==a.button)){e=a.type;f=a.button;h=void 0;i=void 0;m=void 0;j=void 0;k=void 0;var b=p(a.target),c=d.coords(a.target);l("doh.robot.mouseMoveAt",[b,0,100,a.clientX-c.x,a.clientY-c.y]);l("doh.robot.mousePress",[r(a.button-(d.isIE?1:0)),0])}},t=function(a){if(a&&!(e==a.type&&f==a.button))e=
a.type,f=a.button,h=void 0,i=void 0,m=void 0,j=void 0,k=void 0,p(a.target),d.coords(a.target),l("doh.robot.mouseClick",[r(a.button-(d.isIE?1:0)),0])},u=function(a){if(a&&!(e==a.type&&f==a.button))e=a.type,f=a.button,h=void 0,i=void 0,m=void 0,j=void 0,k=void 0,p(a.target),d.coords(a.target),l("doh.robot.mouseRelease",[r(a.button-(d.isIE?1:0)),0])},v=function(a){if(a&&!(e==a.type&&h==a.pageX&&i==a.pageY))e=a.type,m=a.detail?a.detail:-a.wheelDelta/120,f=void 0,h=void 0,i=void 0,j=void 0,k=void 0,l("doh.robot.mouseWheel",
[m])},w=function(a){if(a&&!(e==a.type&&j==a.charCode&&k==a.keyCode))e=a.type,j=a.charCode,k=a.keyCode,f=void 0,h=void 0,i=void 0,m=void 0,l("doh.robot.keyPress",[a.charOrCode==d.keys.SPACE?" ":a.charOrCode,0,"{'shift':"+a.shiftKey+", 'ctrl':"+a.ctrlKey+", 'alt':"+a.altKey+"}"])},x=function(a){if(a&&!(e==a.type&&j==a.charCode&&k==a.keyCode))e=a.type,j=a.charCode,k=a.keyCode,f=void 0,h=void 0,i=void 0,m=void 0};d.connect(document,"onmousedown",s);d.connect(document,"onmouseup",u);d.connect(document,
"onclick",t);d.connect(document,"onkeypress",w);d.connect(document,"onkeyup",x);d.connect(document,"onmousemove",function(a){if(a&&!(e==a.type&&h==a.pageX&&i==a.pageY))e=a.type,h=a.pageX,i=a.pageY,f=void 0,m=void 0,j=void 0,k=void 0,l("doh.robot.mouseMove",[a.pageX,a.pageY,0,100,!0])});d.connect(document,!d.isMozilla?"onmousewheel":"DOMMouseScroll",v);d.addOnLoad(function(){d.window&&d.connect(d.window,"scrollIntoView",function(a){l("doh.robot.scrollIntoView",[p(a)])})});d.connect(d,"connect",function(a,
b,c){if(a&&(!c||!c._mine))if(c=null,"onmousedown"==b.toLowerCase()?c=d.hitch(this,s):b.toLowerCase()==(!d.isMozilla?"onmousewheel":"dommousescroll")?c=d.hitch(this,v):"onclick"==b.toLowerCase()?c=d.hitch(this,t):"onmouseup"==b.toLowerCase()?c=d.hitch(this,u):"onkeypress"==b.toLowerCase()?c=d.hitch(this,w):"onkeyup"==b.toLowerCase()&&(c=d.hitch(this,x)),null!=c)c._mine=!0,d.connect(a,b,c)})})()});