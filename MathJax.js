window.MathJax||(window.MathJax={}),MathJax.isPacked=!0,document.getElementById&&document.childNodes&&document.createElement&&(window.MathJax||(window.MathJax={}),MathJax.Hub||(MathJax.version="1.1",function(t){function e(t){var e=(e=t.constructor)||new Function("");for(var i in t)"constructor"!==i&&t.hasOwnProperty(i)&&(e[i]=t[i]);return e}var i=(i=window[t])||(window[t]={}),n=[],s=function(){return new Function("return arguments.callee.Init.call(this,arguments)")},a=s();a.prototype={bug_test:1},a.prototype.bug_test||(s=function(){return function(){return arguments.callee.Init.call(this,arguments)}}),i.Object=e({constructor:s(),Subclass:function(t,e){var i=s();return i.SUPER=this,i.Init=this.Init,i.Subclass=this.Subclass,i.Augment=this.Augment,i.protoFunction=this.protoFunction,i.can=this.can,i.has=this.has,i.isa=this.isa,i.prototype=new this(n),(i.prototype.constructor=i).Augment(t,e),i},Init:function(t){var e=this;return 1===t.length&&t[0]===n?e:(e instanceof t.callee||(e=new t.callee(n)),e.Init.apply(e,t)||e)},Augment:function(t,e){var i;if(null!=t){for(i in t)t.hasOwnProperty(i)&&this.protoFunction(i,t[i]);t.toString!==this.prototype.toString&&t.toString!=={}.toString&&this.protoFunction("toString",t.toString)}if(null!=e)for(i in e)e.hasOwnProperty(i)&&(this[i]=e[i]);return this},protoFunction:function(t,e){"function"==typeof(this.prototype[t]=e)&&(e.SUPER=this.SUPER.prototype)},prototype:{Init:function(){},SUPER:function(t){return t.callee.SUPER},can:function(t){return"function"==typeof this[t]},has:function(t){return void 0!==this[t]},isa:function(t){return t instanceof Object&&this instanceof t}},can:function(t){return this.prototype.can.call(this,t)},has:function(t){return this.prototype.has.call(this,t)},isa:function(t){for(var e=this;e;){if(e===t)return!0;e=e.SUPER}return!1},SimpleSUPER:e({constructor:function(t){return this.SimpleSUPER.define(t)},define:function(t){if(null!=t){for(var e in t)t.hasOwnProperty(e)&&this.protoFunction(e,t[e]);t.toString!==this.prototype.toString&&t.toString!=={}.toString&&this.protoFunction("toString",t.toString)}return{}},wrap:function(t,e){var i;return"function"==typeof e&&e.toString().match(/\.\s*SUPER\s*\(/)&&((i=new Function(this.wrapper)).label=t,i.original=e,(e=i).toString=this.stringify),e},wrapper:function(){var t=arguments.callee;this.SUPER=t.SUPER[t.label];try{var e=t.original.apply(this,arguments)}catch(t){throw delete this.SUPER,t}return delete this.SUPER,e}.toString().replace(/^\s*function \(\)\s*\{\s*/i,"").replace(/\s*\}\s*$/i,""),toString:function(){return this.original.toString.apply(this.original,arguments)}})})}("MathJax"),function(s){var a=(a=window[s])||(window[s]={}),n=function(t){var e=new Function("return arguments.callee.execute.apply(arguments.callee,arguments)");for(var i in n.prototype)n.prototype.hasOwnProperty(i)&&(void 0!==t[i]?e[i]=t[i]:e[i]=n.prototype[i]);return e.toString=n.prototype.toString,e};n.prototype={isCallback:!0,hook:function(){},data:[],object:window,execute:function(){if(!this.called||this.autoReset)return this.called=!this.autoReset,this.hook.apply(this.object,this.data.concat([].slice.call(arguments,0)))},reset:function(){delete this.called},toString:function(){return this.hook.toString.apply(this.hook,arguments)}};function r(t){return"function"==typeof t&&t.isCallback}var i=function(t){return eval.call(window,t)};if(i("var __TeSt_VaR__ = 1"),window.__TeSt_VaR__)try{delete window.__TeSt_VaR__}catch(t){window.__TeSt_VaR__=null}else i=window.execScript?function(t){a.__code=t,t="try {"+s+".__result = eval("+s+".__code)} catch(err) {"+s+".__result = err}",window.execScript(t);var e=a.__result;if(delete a.__result,delete a.__code,e instanceof Error)throw e;return e}:function(t){a.__code=t,t="try {"+s+".__result = eval("+s+".__code)} catch(err) {"+s+".__result = err}";var e=(e=document.getElementsByTagName("head")[0])||document.body,i=document.createElement("script");i.appendChild(document.createTextNode(t)),e.appendChild(i),e.removeChild(i);var n=a.__result;if(delete a.__result,delete a.__code,n instanceof Error)throw n;return n};function o(t,e){if(1<arguments.length&&(t=2===arguments.length&&"function"!=typeof t&&t instanceof Object&&"number"==typeof e?[].slice.call(t,e):[].slice.call(arguments,0)),t instanceof Array&&1===t.length&&(t=t[0]),"function"==typeof t)return t.execute===n.prototype.execute?t:n({hook:t});if(t instanceof Array){if("string"==typeof t[0]&&t[1]instanceof Object&&"function"==typeof t[1][t[0]])return n({hook:t[1][t[0]],object:t[1],data:t.slice(2)});if("function"==typeof t[0])return n({hook:t[0],data:t.slice(1)});if("function"==typeof t[1])return n({hook:t[1],object:t[0],data:t.slice(2)})}else{if("string"==typeof t)return n({hook:i,data:[t]});if(t instanceof Object)return n(t);if(void 0===t)return n({})}throw Error("Can't make callback from given data")}function u(t,e){(t=o(t)).called||(d(t,e),e.pending++)}function l(){var t=this.signal;delete this.signal,this.execute=this.oldExecute,delete this.oldExecute;var e=this.execute.apply(this,arguments);if(r(e)&&!e.called)d(e,t);else for(var i=0,n=t.length;i<n;i++)t[i].pending--,t[i].pending<=0&&t[i].call()}function h(t){(t=o(t)).pending=0;for(var e,i=1,n=arguments.length;i<n;i++)arguments[i]&&u(arguments[i],t);return 0===t.pending&&(e=t(),r(e)&&(t=e)),t}function c(t,e,i){if(!t)return null;t instanceof Array||(t=[t]),e instanceof Array||(e=null==e?[]:[e]);for(var n=[{}],s=0,a=t.length;s<a;s++){i&&t[s].reset();var o=t[s].apply(window,e);r(o)&&!o.called&&n.push(o)}return 1===n.length?null:2===n.length?n[1]:h.apply({},n)}var d=function(t,e){e instanceof Array||(e=[e]),t.signal?1===e.length?t.signal.push(e[0]):t.signal=t.signal.concat(e):(t.oldExecute=t.execute,t.execute=l,t.signal=e)},e=a.Object.Subclass({Init:function(){this.pending=0,this.running=0,this.queue=[],this.Push.apply(this,arguments)},Push:function(){for(var t,e=0,i=arguments.length;e<i;e++)(t=o(arguments[e]))!==arguments[e]||t.called||(t=o(["wait",this,t])),this.queue.push(t);return this.running||this.pending||this.Process(),t},Process:function(t){for(;!this.running&&!this.pending&&this.queue.length;){var e=this.queue[0];t=this.queue.slice(1),this.queue=[],this.Suspend();var i=e();this.Resume(),t.length&&(this.queue=t.concat(this.queue)),r(i)&&!i.called&&u(i,this)}},Suspend:function(){this.running++},Resume:function(){this.running&&this.running--},call:function(){this.Process.apply(this,arguments)},wait:function(t){return t}}),p=e.Subclass({Init:function(t){e.prototype.Init.call(this),this.name=t,this.posted=[],this.listeners=[]},Post:function(t,e,i){if(e=o(e),this.posting||this.pending)this.Push(["Post",this,t,e,i]);else{(this.callback=e).reset(),i||this.posted.push(t),this.Suspend(),this.posting=1;for(var n=0,s=this.listeners.length;n<s;n++){this.listeners[n].reset();var a=this.listeners[n](t);r(a)&&!a.called&&u(a,this)}this.Resume(),delete this.posting,this.pending||this.call()}return e},Clear:function(t){return t=o(t),this.posting||this.pending?t=this.Push(["Clear",this,t]):(this.posted=[],t()),t},call:function(){this.callback(this),this.Process()},Interest:function(t,e){if(t=o(t),this.listeners[this.listeners.length]=t,!e)for(var i=0,n=this.posted.length;i<n;i++){t.reset();var s=t(this.posted[i]);r(s)&&i===this.posted.length-1&&u(s,this)}return t},NoInterest:function(t){for(var e=0,i=this.listeners.length;e<i;e++)if(this.listeners[e]===t)return void this.listeners.splice(e,1)},MessageHook:function(t,e){e=o(e),this.hooks||(this.hooks={},this.Interest(["ExecuteHooks",this])),this.hooks[t]||(this.hooks[t]=[]),this.hooks[t].push(e);for(var i=0,n=this.posted.length;i<n;i++)this.posted[i]==t&&(e.reset(),e(this.posted[i]));return e},ExecuteHooks:function(t,e){var i=t instanceof Array?t[0]:t;return c(this.hooks[i],[t],!0)}},{signals:{},find:function(t){return p.signals[t]||(p.signals[t]=new p(t)),p.signals[t]}});a.Callback=a.CallBack=o,a.Callback.Delay=function(t,e){return(e=o(e)).timeout=setTimeout(e,t),e},a.Callback.After=h,a.Callback.Queue=e,a.Callback.Signal=p.find,a.Callback.ExecuteHooks=c}("MathJax"),function(t){function s(t){return document.styleSheets&&document.styleSheets.length>o&&(o=document.styleSheets.length),t=t||((t=document.getElementsByTagName("head")[0])||document.body)}function i(){for(var t=0,e=r.length;t<e;t++)a.Ajax.head.removeChild(r[t]);r=[]}var a=(a=window[t])||(window[t]={}),n="Apple Computer, Inc."===navigator.vendor&&void 0===navigator.vendorSub,o=0,r=[];a.Ajax={loaded:{},loading:{},loadHooks:{},timeout:15e3,styleDelay:1,config:{root:""},STATUS:{OK:1,ERROR:-1},rootPattern:new RegExp("^\\["+t+"\\]"),fileURL:function(t){return t.replace(this.rootPattern,this.config.root)},Require:function(t,e){var i,n;if(e=a.Callback(e),t instanceof Object){for(var s in t);i=s.toUpperCase(),t=t[s]}else i=t.split(/\./).pop().toUpperCase();return t=this.fileURL(t),this.loaded[t]?e(this.loaded[t]):((n={})[i]=t,this.Load(n,e)),e},Load:function(t,e){var i;if(e=a.Callback(e),t instanceof Object){for(var n in t);i=n.toUpperCase(),t=t[n]}else i=t.split(/\./).pop().toUpperCase();if(t=this.fileURL(t),this.loading[t])this.loadHooks[t]||(this.loadHooks[t]=[]),this.loadHooks[t].push(e);else{if(this.head=s(this.head),!this.loader[i])throw Error("Can't load files of type "+i);this.loader[i].call(this,t,e)}return e},LoadHook:function(t,e){if(e=a.Callback(e),t instanceof Object)for(var i in t)t=t[i];return t=this.fileURL(t),this.loaded[t]?e(this.loaded[t]):(this.loadHooks[t]||(this.loadHooks[t]=[]),this.loadHooks[t].push(e)),e},Preloading:function(){for(var t=0,e=arguments.length;t<e;t++){var i=this.fileURL(arguments[t]);this.loading[i]||(this.loading[i]={preloaded:!0})}},loader:{JS:function(t,e){var i=document.createElement("script"),n=a.Callback(["loadTimeout",this,t]);this.loading[t]={callback:e,message:a.Message.File(t),timeout:setTimeout(n,this.timeout),status:this.STATUS.OK,script:i},i.onerror=n,i.type="text/javascript",i.src=t,this.head.appendChild(i)},CSS:function(t,e){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",i.href=t,this.loading[t]={callback:e,message:a.Message.File(t),status:this.STATUS.OK},this.head.appendChild(i),this.timer.create.call(this,[this.timer.file,t],i)}},timer:{create:function(t,e){return t=a.Callback(t),"STYLE"===e.nodeName&&e.styleSheet&&void 0!==e.styleSheet.cssText||window.chrome&&void 0!==window.sessionStorage&&"STYLE"===e.nodeName?t(this.STATUS.OK):n?this.timer.start(this,[this.timer.checkSafari2,o++,t],this.styleDelay):this.timer.start(this,[this.timer.checkLength,e,t],this.styleDelay),t},start:function(t,e,i,n){(e=a.Callback(e)).execute=this.execute,e.time=this.time,e.STATUS=t.STATUS,e.timeout=n||t.timeout,e.delay=e.total=0,setTimeout(e,i)},time:function(t){return this.total+=this.delay,this.delay=Math.floor(1.05*this.delay+5),this.total>=this.timeout?(t(this.STATUS.ERROR),1):0},file:function(t,e){e<0?a.Ajax.loadTimeout(t):a.Ajax.loadComplete(t)},execute:function(){this.hook.call(this.object,this,this.data[0],this.data[1])},checkSafari2:function(t,e,i){t.time(i)||(document.styleSheets.length>e&&document.styleSheets[e].cssRules&&document.styleSheets[e].cssRules.length?i(t.STATUS.OK):setTimeout(t,t.delay))},checkLength:function(t,e,i){if(!t.time(i)){var n=0,s=e.sheet||e.styleSheet;try{0<(s.cssRules||s.rules||[]).length&&(n=1)}catch(t){(t.message.match(/protected variable|restricted URI/)||t.message.match(/Security error/))&&(n=1)}n?setTimeout(a.Callback([i,t.STATUS.OK]),0):setTimeout(t,t.delay)}}},loadComplete:function(t){t=this.fileURL(t);var e=this.loading[t];e&&!e.preloaded?(a.Message.Clear(e.message),clearTimeout(e.timeout),e.script&&(0===r.length&&setTimeout(i,0),r.push(e.script)),this.loaded[t]=e.status,delete this.loading[t],this.loadHooks[t]||(this.loadHooks[t]=[]),this.loadHooks[t].push(e.callback)):(this.loaded[t]=this.STATUS.OK,e={status:this.STATUS.OK}),a.Callback.ExecuteHooks(this.loadHooks[t],e.status)},loadTimeout:function(t){this.loading[t].timeout&&clearTimeout(this.loading[t].timeout),this.loading[t].status=this.STATUS.ERROR,this.loadError(t),this.loadComplete(t)},loadError:function(t){a.Message.Set("File failed to load: "+t,null,2e3)},Styles:function(t,e){var i,n=this.StyleString(t);return""===n?(e=a.Callback(e))():((i=document.createElement("style")).type="text/css",this.head=s(this.head),this.head.appendChild(i),i.styleSheet&&void 0!==i.styleSheet.cssText?i.styleSheet.cssText=n:i.appendChild(document.createTextNode(n)),e=this.timer.create.call(this,e,i)),e},StyleString:function(t){if("string"==typeof t)return t;var e,i,n="";for(e in t)if(t.hasOwnProperty(e))if("string"==typeof t[e])n+=e+" {"+t[e]+"}\n";else if(t[e]instanceof Array)for(var s=0;s<t[e].length;s++)(i={})[e]=t[e][s],n+=this.StyleString(i);else if("@media"===e.substr(0,6))n+=e+" {"+this.StyleString(t[e])+"}\n";else if(null!=t[e]){for(var a in i=[],t[e])t[e].hasOwnProperty(a)&&null!=t[e][a]&&(i[i.length]=a+": "+t[e][a]);n+=e+" {"+i.join("; ")+"}\n"}return n}}}("MathJax"),MathJax.HTML={Element:function(t,e,i){var n=document.createElement(t);if(e){if(e.style){var s=e.style;for(var a in e.style={},s)s.hasOwnProperty(a)&&(e.style[a.replace(/-([a-z])/g,this.ucMatch)]=s[a])}MathJax.Hub.Insert(n,e)}if(i)for(var o=0;o<i.length;o++)i[o]instanceof Array?n.appendChild(this.Element(i[o][0],i[o][1],i[o][2])):n.appendChild(document.createTextNode(i[o]));return n},ucMatch:function(t,e){return e.toUpperCase()},addElement:function(t,e,i,n){return t.appendChild(this.Element(e,i,n))},TextNode:function(t){return document.createTextNode(t)},addText:function(t,e){return t.appendChild(this.TextNode(e))},setScript:function(t,e){if(this.setScriptBug)t.text=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);this.addText(t,e)}},Cookie:{prefix:"mjx",expires:365,Set:function(t,e){var i=[];if(e)for(var n in e)e.hasOwnProperty(n)&&i.push(n+":"+e[n].toString().replace(/&/g,"&&"));var s,a=this.prefix+"."+t+"="+escape(i.join("&;"));this.expires&&((s=new Date).setDate(s.getDate()+this.expires),a+="; expires="+s.toGMTString()),document.cookie=a+"; path=/"},Get:function(t,e){e=e||{};var i=new RegExp("(?:^|;\\s*)"+this.prefix+"\\."+t+"=([^;]*)(?:;|$)").exec(document.cookie);if(i&&""!==i[1])for(var n=unescape(i[1]).split("&;"),s=0,a=n.length;s<a;s++){var o=(i=n[s].match(/([^:]+):(.*)/))[2].replace(/&&/g,"&");"true"===o?o=!0:"false"===o?o=!1:o.match(/^-?(\d+(\.\d+)?|\.\d+)$/)&&(o=parseFloat(o)),e[i[1]]=o}return e}}},MathJax.Message={log:[{}],current:null,textNodeBug:"Apple Computer, Inc."===navigator.vendor&&void 0===navigator.vendorSub||window.hasOwnProperty&&window.hasOwnProperty("konqueror"),styles:{"#MathJax_Message":{position:"fixed",left:"1px",bottom:"2px","background-color":"#E6E6E6",border:"1px solid #959595",margin:"0px",padding:"2px 8px","z-index":"102",color:"black","font-size":"80%",width:"auto","white-space":"nowrap"},"#MathJax_MSIE_Frame":{position:"absolute",top:0,left:0,width:"0px","z-index":101,border:"0px",margin:"0px",padding:"0px"}},browsers:{MSIE:function(t){MathJax.Hub.config.styles["#MathJax_Message"].position="absolute",MathJax.Message.quirks="BackCompat"===document.compatMode},Chrome:function(t){MathJax.Hub.config.styles["#MathJax_Message"].bottom="1.5em",MathJax.Hub.config.styles["#MathJax_Message"].left="1em"}},Init:function(){return!!document.body&&(this.div&&null==this.div.parentNode&&(this.div=document.getElementById("MathJax_Message"),this.div&&(this.text=this.div.firstChild)),this.div||(t=document.body,MathJax.Hub.Browser.isMSIE&&((t=this.frame=this.addDiv(document.body)).style.position="absolute",t.style.border=t.style.margin=t.style.padding="0px",t.style.zIndex="101",t.style.height="0px",(t=this.addDiv(t)).id="MathJax_MSIE_Frame",window.attachEvent("onscroll",this.MoveFrame),window.attachEvent("onresize",this.MoveFrame),this.MoveFrame()),this.div=this.addDiv(t),this.div.style.display="none",this.text=this.div.appendChild(document.createTextNode(""))),!0);var t},addDiv:function(t){var e=document.createElement("div");return e.id="MathJax_Message",t.firstChild?t.insertBefore(e,t.firstChild):t.appendChild(e),e},MoveFrame:function(){var t=MathJax.Message.quirks?document.body:document.documentElement,e=MathJax.Message.frame;e.style.left=t.scrollLeft+"px",e.style.top=t.scrollTop+"px",e.style.width=t.clientWidth+"px",(e=e.firstChild).style.height=t.clientHeight+"px"},filterText:function(t,e){return"simple"===MathJax.Hub.config.messageStyle&&(t.match(/^Loading /)?(this.loading||(this.loading="Loading "),t=this.loading,this.loading+="."):t.match(/^Processing /)&&(this.processing||(this.processing="Processing "),t=this.processing,this.processing+=".")),t},Set:function(t,e,i){return this.timer&&(clearTimeout(this.timer),delete this.timeout),null==e&&(e=this.log.length,this.log[e]={}),this.log[e].text=t,t=this.filterText(t,e),void 0===this.log[e].next&&(this.log[e].next=this.current,null!=this.current&&(this.log[this.current].prev=e),this.current=e),this.current===e&&"none"!==MathJax.Hub.config.messageStyle&&(this.Init()?(this.textNodeBug?this.div.innerHTML=t:this.text.nodeValue=t,this.div.style.display="",this.status&&(window.status="",delete this.status)):(window.status=t,this.status=!0)),i&&setTimeout(MathJax.Callback(["Clear",this,e]),i),e},Clear:function(t,e){null!=this.log[t].prev&&(this.log[this.log[t].prev].next=this.log[t].next),null!=this.log[t].next&&(this.log[this.log[t].next].prev=this.log[t].prev),this.current===t&&(this.current=this.log[t].next,this.text?(null==this.div.parentNode&&this.Init(),null==this.current?(this.timer&&clearTimeout(this.timer),this.timer=setTimeout(MathJax.Callback(["Remove",this]),e||600)):this.textNodeBug?this.div.innerHTML=this.log[this.current].text:this.text.nodeValue=this.log[this.current].text,this.status&&(window.status="",delete this.status)):this.status&&(window.status=null==this.current?"":this.log[this.current].text)),delete this.log[t].next,delete this.log[t].prev},Remove:function(){this.text.nodeValue="",this.div.style.display="none"},File:function(t){var e=MathJax.Ajax.config.root;return t.substr(0,e.length)===e&&(t="[MathJax]"+t.substr(e.length)),this.Set("Loading "+t)},Log:function(){for(var t=[],e=1,i=this.log.length;e<i;e++)t[e]=this.log[e].text;return t.join("\n")}},MathJax.Hub={config:{root:"",config:[],styleSheets:[],styles:{},jax:[],extensions:[],preJax:null,postJax:null,displayAlign:"center",displayIndent:"0",preRemoveClass:"MathJax_Preview",showProcessingMessages:!0,messageStyle:"normal",delayStartupUntil:"none",skipStartupTypeset:!1,"v1.0-compatible":!0,preProcessors:[],inputJax:{},outputJax:{order:{}},menuSettings:{zoom:"None",CTRL:!1,ALT:!1,CMD:!1,Shift:!1,zscale:"200%",renderer:"",font:"Auto",context:"MathJax"},errorSettings:{message:["[Math Processing Error]"],style:{color:"#CC0000","font-style":"italic"}}},processUpdateTime:250,signal:MathJax.Callback.Signal("Hub"),Config:function(t){this.Insert(this.config,t),this.config.Augment&&this.Augment(this.config.Augment)},CombineConfig:function(t,e){for(var i,n,s=this.config,a=0,o=(t=t.split(/\./)).length;a<o;a++)s[i=t[a]]||(s[i]={}),s=(n=s)[i];return n[i]=s=this.Insert(e,s),s},Register:{PreProcessor:function(t){MathJax.Hub.config.preProcessors.push(MathJax.Callback(t))},MessageHook:function(){return MathJax.Hub.signal.MessageHook.apply(MathJax.Hub.signal,arguments)},StartupHook:function(){return MathJax.Hub.Startup.signal.MessageHook.apply(MathJax.Hub.Startup.signal,arguments)},LoadHook:function(){return MathJax.Ajax.LoadHook.apply(MathJax.Ajax,arguments)}},getAllJax:function(t){for(var e=[],i=this.elementScripts(t),n=0,s=i.length;n<s;n++)i[n].MathJax&&i[n].MathJax.elementJax&&e.push(i[n].MathJax.elementJax);return e},getJaxByType:function(t,e){for(var i=[],n=this.elementScripts(e),s=0,a=n.length;s<a;s++)n[s].MathJax&&n[s].MathJax.elementJax&&n[s].MathJax.elementJax.mimeType===t&&i.push(n[s].MathJax.elementJax);return i},getJaxByInputType:function(t,e){for(var i=[],n=this.elementScripts(e),s=0,a=n.length;s<a;s++)n[s].MathJax&&n[s].MathJax.elementJax&&n[s].type&&n[s].type.replace(/ *;(.|\s)*/,"")===t&&i.push(n[s].MathJax.elementJax);return i},getJaxFor:function(t){return"string"==typeof t&&(t=document.getElementById(t)),t.MathJax?t.MathJax.elementJax:null},isJax:function(t){if("string"==typeof t&&(t=document.getElementById(t)),null!=t.tagName&&"script"===t.tagName.toLowerCase()){if(t.MathJax)return t.MathJax.state===MathJax.ElementJax.STATE.PROCESSED?1:-1;if(t.type&&this.config.inputJax[t.type.replace(/ *;(.|\s)*/,"")])return-1}return 0},Queue:function(){return this.queue.Push.apply(this.queue,arguments)},Typeset:function(t,e){if(!MathJax.isReady)return null;var i=this.elementCallback(t,e);return MathJax.Callback.Queue(["PreProcess",this,i.element],["Process",this,i.element]).Push(i.callback)},PreProcess:function(t,e){var i=this.elementCallback(t,e);return MathJax.Callback.Queue(["Post",this.signal,"Begin PreProcess"],["ExecuteHooks",MathJax.Callback,arguments.callee.disabled?[]:this.config.preProcessors,i.element,!0],["Post",this.signal,"End PreProcess"]).Push(i.callback)},Process:function(t,e){return this.takeAction("Process",t,e)},Update:function(t,e){return this.takeAction("Update",t,e)},Reprocess:function(t,e){return this.takeAction("Reprocess",t,e)},takeAction:function(t,e,i){var n=this.elementCallback(e,i),s=[];return MathJax.Callback.Queue(["Clear",this.signal],["Post",this.signal,["Begin "+t,n.element]],["prepareScripts",this,t,n.element,s],["processScripts",this,s],["Post",this.signal,["End "+t,n.element]]).Push(n.callback)},scriptAction:{Process:function(t){},Update:function(t){var e=t.MathJax.elementJax;e&&e.originalText===(""==t.text?t.innerHTML:t.text)?t.MathJax.state=e.STATE.PROCESSED:(e.outputJax.Remove(e),t.MathJax.state=e.STATE.UPDATE)},Reprocess:function(t){var e=t.MathJax.elementJax;e&&(e.outputJax.Remove(e),t.MathJax.state=e.STATE.UPDATE)}},prepareScripts:function(t,e,i){if(!arguments.callee.disabled)for(var n=this.elementScripts(e),s=MathJax.ElementJax.STATE,a=0,o=n.length;a<o;a++){var r=n[a];r.type&&this.config.inputJax[r.type.replace(/ *;(.|\n)*/,"")]&&(r.MathJax&&r.MathJax.state!==s.PENDING&&this.scriptAction[t](r),r.MathJax||(r.MathJax={state:s.PENDING}),r.MathJax.state!==s.PROCESSED&&i.push(r))}},checkScriptSiblings:function(t){if(!t.MathJax||!t.MathJax.checked){var e,i,n,s=this.config,a=t.previousSibling;if(a&&"#text"==a.nodeName&&((n=t.nextSibling)&&"#text"!=n.nodeName&&(n=null),s.preJax&&("string"==typeof s.preJax&&(s.preJax=new RegExp(s.preJax+"$")),e=a.nodeValue.match(s.preJax)),s.postJax&&n&&("string"==typeof s.postJax&&(s.postJax=new RegExp("^"+s.postJax)),i=n.nodeValue.match(s.postJax)),!e||s.postJax&&!i||(a.nodeValue=a.nodeValue.replace(s.preJax,1<e.length?e[1]:""),a=null),!i||s.preJax&&!e||(n.nodeValue=n.nodeValue.replace(s.postJax,1<i.length?i[1]:"")),a&&!a.nodeValue.match(/\S/)&&(a=a.previousSibling)),s.preRemoveClass&&a&&a.className==s.preRemoveClass){try{a.innerHTML=""}catch(t){}a.style.display="none"}t.MathJax&&(t.MathJax.checked=1)}},processScripts:function(e,i,n){if(arguments.callee.disabled)return null;var t,s=MathJax.ElementJax.STATE,a=this.config.inputJax,o=this.config.outputJax;try{i=i||(new Date).getTime();for(var r,u,l=0;l<e.length;)if(r=e[l]){(u=r.previousSibling)&&"MathJax_Error"===u.className&&u.parentNode.removeChild(u);var h=r.type.replace(/ *;(.|\s)*/,"");if(r.MathJax&&r.MathJax.state!==s.PROCESSED){if(!r.MathJax.elementJax||r.MathJax.state===s.UPDATE){if(this.checkScriptSiblings(r),"function"==typeof(t=a[h].Process(r))){if(t.called)continue;this.RestartAfter(t)}t.Attach(r,a[h])}var c=r.MathJax.elementJax;if(!o[c.mimeType])throw r.MathJax.state=s.UPDATE,Error("No output jax registered for "+c.mimeType);if(c.outputJax=o[c.mimeType][0],"function"==typeof(t=c.outputJax.Process(r))){if(r.MathJax.state=s.UPDATE,t.called)continue;this.RestartAfter(t)}r.MathJax.state=s.PROCESSED,this.signal.Post(["New Math",c.inputID]),l++,(new Date).getTime()-i>this.processUpdateTime&&l<e.length&&(i=0,this.RestartAfter(MathJax.Callback.Delay(1)))}}}catch(t){if(!t.restart){if(!this.config.errorSettings.message)throw t;this.formatError(r,t),l++}n=n||0;var d=Math.floor((n+l)/(n+e.length)*100);return n+=l,this.config.showProcessingMessages&&MathJax.Message.Set("Processing math: "+d+"%",0),MathJax.Callback.After(["processScripts",this,e.slice(l),i,n],t.restart)}return(n||e.length)&&this.config.showProcessingMessages&&(MathJax.Message.Set("Processing Math: 100%",0),MathJax.Message.Clear(0)),null},formatError:function(t,e){var i=MathJax.HTML.Element("span",{className:"MathJax_Error"},this.config.errorSettings.message);t.parentNode.insertBefore(i,t),this.lastError=e},RestartAfter:function(t){throw this.Insert(Error("restart"),{restart:MathJax.Callback(t)})},elementCallback:function(t,e){if(null==e&&(t instanceof Array||"function"==typeof t)?(e=t,t=document.body):null==t?t=document.body:"string"==typeof t&&(t=document.getElementById(t)),!t)throw Error("No such element");return{element:t,callback:e=e||{}}},elementScripts:function(t){return"string"==typeof t&&(t=document.getElementById(t)),null==t&&(t=document.body),null!=t.tagName&&"script"===t.tagName.toLowerCase()?[t]:t.getElementsByTagName("script")},Insert:function(t,e){for(var i in e)e.hasOwnProperty(i)&&("object"!=typeof e[i]||e[i]instanceof Array||"object"!=typeof t[i]&&"function"!=typeof t[i]?t[i]=e[i]:this.Insert(t[i],e[i]));return t}},MathJax.Hub.Insert(MathJax.Hub.config.styles,MathJax.Message.styles),MathJax.Hub.Insert(MathJax.Hub.config.styles,{".MathJax_Error":MathJax.Hub.config.errorSettings.style}),MathJax.Extension={},MathJax.Hub.Configured=MathJax.Callback({}),MathJax.Hub.Startup={script:"",queue:MathJax.Callback.Queue(),signal:MathJax.Callback.Signal("Startup"),params:{},Config:function(){this.queue.Push(["Post",this.signal,"Begin Config"]);var t=MathJax.HTML.Cookie.Get("user");if((t.URL||t.Config)&&(confirm("MathJax has found a user-configuration cookie that includes code to be run.  Do you want to run it?\n\n(You should press Cancel unless you set up the cookie yourself.)")?(t.URL&&this.queue.Push(["Require",MathJax.Ajax,t.URL]),t.Config&&this.queue.Push(new Function(t.Config))):MathJax.HTML.Cookie.Set("user",{})),this.params.config)for(var e=this.params.config.split(/,/),i=0,n=e.length;i<n;i++)e[i].match(/\.js$/)||(e[i]+=".js"),this.queue.Push(["Require",MathJax.Ajax,this.URL("config",e[i])]);this.script.match(/\S/)&&this.queue.Push(this.script+";\n1;"),this.queue.Push(["ConfigDelay",this],["ConfigBlocks",this],["ConfigDefault",this],[function(t){return t.loadArray(MathJax.Hub.config.config,"config",null,!0)},this],["Post",this.signal,"End Config"])},ConfigDelay:function(){var t=this.params.delayStartupUntil||MathJax.Hub.config.delayStartupUntil;return"onload"===t?this.onload:"configured"===t?MathJax.Hub.Configured:t},ConfigBlocks:function(){for(var t=document.getElementsByTagName("script"),e=null,i=MathJax.Callback.Queue(),n=0,s=t.length;n<s;n++){var a=String(t[n].type).replace(/ /g,"");a.match(/^text\/x-mathjax-config(;.*)?$/)&&!a.match(/;executed=true/)&&(t[n].type+=";executed=true",e=i.Push(t[n].innerHTML+";\n1;"))}return e},ConfigDefault:function(){var t=MathJax.Hub.config;if(t["v1.0-compatible"]&&0===t.jax.length)return MathJax.Ajax.Require(this.URL("extensions","v1.0-warning.js"))},Cookie:function(){return this.queue.Push(["Post",this.signal,"Begin Cookie"],["Get",MathJax.HTML.Cookie,"menu",MathJax.Hub.config.menuSettings],[function(t){var e=t.menuSettings.renderer,i=t.jax;if(e){var n="output/"+e;i.sort();for(var s=0,a=i.length;s<a&&"output/"!==i[s].substr(0,7);s++);if(s==a-1)i.pop();else for(;s<a;){if(i[s]===n){i.splice(s,1);break}s++}i.unshift(n)}},MathJax.Hub.config],["Post",this.signal,"End Cookie"])},Styles:function(){return this.queue.Push(["Post",this.signal,"Begin Styles"],["loadArray",this,MathJax.Hub.config.styleSheets,"config"],["Styles",MathJax.Ajax,MathJax.Hub.config.styles],["Post",this.signal,"End Styles"])},Jax:function(){for(var t=MathJax.Hub.config,e=0,i=t.jax.length,n=0;e<i;e++)"output/"===t.jax[e].substr(0,7)&&(t.outputJax.order[t.jax[e].substr(7)]=n,n++);return MathJax.Callback.Queue().Push(["Post",this.signal,"Begin Jax"],["loadArray",this,t.jax,"jax","config.js"],["Post",this.signal,"End Jax"])},Extensions:function(){return MathJax.Callback.Queue().Push(["Post",this.signal,"Begin Extensions"],["loadArray",this,MathJax.Hub.config.extensions,"extensions"],["Post",this.signal,"End Extensions"])},Menu:function(){var t,e=MathJax.Hub.config.menuSettings,i=MathJax.Hub.config.outputJax;for(var n in i)if(i.hasOwnProperty(n)&&i[n].length){t=i[n];break}t&&t.length&&(e.renderer&&e.renderer!==t[0].id&&t.unshift(MathJax.OutputJax[e.renderer]),e.renderer=t[0].id)},onLoad:function(t){var e=this.onload=MathJax.Callback(function(){MathJax.Hub.Startup.signal.Post("onLoad")});return window.addEventListener?window.addEventListener("load",e,!1):window.attachEvent?window.attachEvent("onload",e):window.onload=e,e},Typeset:function(t,e){return MathJax.Hub.config.skipStartupTypeset?function(){}:this.queue.Push(["Post",this.signal,"Begin Typeset"],["Typeset",MathJax.Hub,t,e],["Post",this.signal,"End Typeset"])},URL:function(t,e){return e.match(/^([a-z]+:\/\/|\[|\/)/)||(e="[MathJax]/"+t+"/"+e),e},loadArray:function(t,e,i,n){if(t&&(t instanceof Array||(t=[t]),t.length)){for(var s,a=MathJax.Callback.Queue(),o={},r=0,u=t.length;r<u;r++)s=this.URL(e,t[r]),i&&(s+="/"+i),n?a.Push(["Require",MathJax.Ajax,s,o]):a.Push(MathJax.Ajax.Require(s,o));return a.Push({})}return null}},function(t){var r=window[t],e="["+t+"]",u=r.Hub,l=r.Ajax,h=r.Callback,i=MathJax.Object.Subclass({JAXFILE:"jax.js",require:null,config:{},Init:function(t,e){return 0===arguments.length?this:this.constructor.Subclass(t,e)()},Augment:function(t,e){var i=this.constructor,n={};if(null!=t){for(var s in t)t.hasOwnProperty(s)&&("function"==typeof t[s]?i.protoFunction(s,t[s]):n[s]=t[s]);t.toString!==i.prototype.toString&&t.toString!=={}.toString&&i.protoFunction("toString",t.toString)}return u.Insert(i.prototype,n),i.Augment(null,e),this},Process:function(t){var e=l.Require(this.directory+"/"+this.JAXFILE);return e.called||(this.constructor.prototype.Process=function(t){return e}),e},Translate:function(t){throw Error(this.directory+"/"+this.JAXFILE+" failed to redefine the Translate() method")},Register:function(t){},Config:function(){this.config=u.CombineConfig(this.id,this.config),this.config.Augment&&this.Augment(this.config.Augment)},Startup:function(){},loadComplete:function(t){if("config.js"===t)return l.loadComplete(this.directory+"/"+t);var e=h.Queue();if(e.Push(u.Register.StartupHook("End Config",{}),["Post",u.Startup.signal,this.id+" Jax Config"],["Config",this],["Post",u.Startup.signal,this.id+" Jax Require"]),this.require){var i=this.require;i instanceof Array||(i=[i]);for(var n=0,s=i.length;n<s;n++)e.Push(l.Require(i[n]))}return e.Push([function(t,e){return MathJax.Hub.Startup.loadArray(t.extensions,"extensions/"+e)},this.config||{},this.id],["Post",u.Startup.signal,this.id+" Jax Startup"],["Startup",this],["Post",u.Startup.signal,this.id+" Jax Ready"],[function(t){t.Process=t.Translate},this.constructor.prototype],["loadComplete",l,this.directory+"/"+t])}},{id:"unknown",version:"1.1",directory:e+"/jax",extensionDir:e+"/extensions"});r.InputJax=i.Subclass({elementJax:"mml",Process:function(t){var e=h.Queue(),i=this.elementJax;i instanceof Array||(i=[i]);for(var n=0,s=i.length;n<s;n++){var a=r.ElementJax.directory+"/"+i[n]+"/"+this.JAXFILE;this.require?this.require instanceof Array||(this.require=[this.require]):this.require=[],this.require.push(a),e.Push(l.Require(a))}var o=e.Push(l.Require(this.directory+"/"+this.JAXFILE));return o.called||(this.constructor.prototype.Process=function(){return o}),(i=u.config.outputJax["jax/"+i[0]])&&e.Push(l.Require(i[0].directory+"/"+this.JAXFILE)),e.Push({})},Register:function(t){u.config.inputJax||(u.config.inputJax={}),u.config.inputJax[t]=this}},{version:"1.1",directory:i.directory+"/input",extensionDir:i.extensionDir}),r.OutputJax=i.Subclass({Register:function(t){var e=u.config.outputJax;e[t]||(e[t]=[]),e[t].length&&(this.id===u.config.menuSettings.renderer||(e.order[this.id]||0)<(e.order[e[t][0].id]||0))?e[t].unshift(this):e[t].push(this),this.require?this.require instanceof Array||(this.require=[this.require]):this.require=[],this.require.push(r.ElementJax.directory+"/"+t.split(/\//)[1]+"/"+this.JAXFILE)},Remove:function(t){}},{version:"1.1",directory:i.directory+"/output",extensionDir:i.extensionDir,fontDir:e+(r.isPacked?"":"/..")+"/fonts"}),r.ElementJax=i.Subclass({Init:function(t,e){return this.constructor.Subclass(t,e)},inputJax:null,outputJax:null,inputID:null,originalText:"",mimeType:"",Text:function(t,e){var i=this.SourceElement();return r.HTML.setScript(i,t),i.MathJax.state=this.STATE.UPDATE,u.Update(i,e)},Reprocess:function(t){var e=this.SourceElement();return e.MathJax.state=this.STATE.UPDATE,u.Reprocess(e,t)},Remove:function(){this.outputJax.Remove(this),u.signal.Post(["Remove Math",this.inputID]),this.Detach()},SourceElement:function(){return document.getElementById(this.inputID)},Attach:function(t,e){var i=t.MathJax.elementJax;t.MathJax.state===this.STATE.UPDATE?i.Clone(this):(i=t.MathJax.elementJax=this,t.id?this.inputID=t.id:(t.id=this.inputID=r.ElementJax.GetID(),this.newID=1)),i.originalText=""==t.text?t.innerHTML:t.text,i.inputJax=e},Detach:function(){var e=this.SourceElement();if(e){try{delete e.MathJax}catch(t){e.MathJax=null}this.newID&&(e.id="")}},Clone:function(t){var e;for(e in this)this.hasOwnProperty(e)&&void 0===t[e]&&"newID"!==e&&delete this[e];for(e in t)this.hasOwnProperty(e)&&(void 0===this[e]||this[e]!==t[e]&&"inputID"!==e)&&(this[e]=t[e])}},{version:"1.1",directory:i.directory+"/element",extensionDir:i.extensionDir,ID:0,STATE:{PENDING:1,PROCESSED:2,UPDATE:3},GetID:function(){return this.ID++,"MathJax-Element-"+this.ID},Subclass:function(){var t=i.Subclass.apply(this,arguments);return t.loadComplete=this.prototype.loadComplete,t}}),r.ElementJax.prototype.STATE=r.ElementJax.STATE}("MathJax"),function(t){for(var e=window[t],i=(e=e||(window[t]={})).Hub,n=i.Startup,s=i.config,a=(document.getElementsByTagName("head")[0]||document.childNodes[0],(document.documentElement||document).getElementsByTagName("script")),o=new RegExp("(^|/)"+t+"\\.js(\\?.*)?$"),r=a.length-1;0<=r;r--)if(a[r].src.match(o)){if(n.script=a[r].innerHTML,RegExp.$2)for(var u=RegExp.$2.substr(1).split(/\&/),l=0,h=u.length;l<h;l++){var c=u[l].match(/(.*)=(.*)/);c&&(n.params[unescape(c[1])]=unescape(c[2]))}s.root=a[r].src.replace(/(^|\/)[^\/]*(\?.*)?$/,"");break}e.Ajax.config=s;var d={isMac:"Mac"===navigator.platform.substr(0,3),isPC:"Win"===navigator.platform.substr(0,3),isMSIE:null!=window.ActiveXObject&&null!=window.clipboardData,isFirefox:null!=window.netscape&&null!=document.ATTRIBUTE_NODE&&null==window.opera,isSafari:null!=navigator.userAgent.match(/ (Apple)?WebKit\//)&&null==window.chrome,isChrome:null!=window.chrome&&null!=window.chrome.loadTimes,isOpera:null!=window.opera&&null!=window.opera.version,isKonqueror:window.hasOwnProperty&&window.hasOwnProperty("konqueror")&&"KDE"==navigator.vendor,versionAtLeast:function(t){for(var e=this.version.split("."),i=0,n=(t=new String(t).split(".")).length;i<n;i++)if(e[i]!=t[i])return parseInt(e[i]||"0")>=parseInt(t[i]);return!0},Select:function(t){var e=t[i.Browser];return e?e(i.Browser):null}},p=navigator.userAgent.replace(/^Mozilla\/(\d+\.)+\d+ /,"").replace(/[a-z][-a-z0-9._: ]+\/\d+[^ ]*-[^ ]*\.([a-z][a-z])?\d+ /i,"").replace(/Gentoo |Ubuntu\/(\d+\.)*\d+ (\([^)]*\) )?/,"");for(var f in i.Browser=i.Insert(i.Insert(new String("Unknown"),{version:"0.0"}),d),d)if(d.hasOwnProperty(f)&&d[f]&&"is"===f.substr(0,2)){if("Mac"===(f=f.slice(2))||"PC"===f)continue;i.Browser=i.Insert(new String(f),d);var g=new RegExp(".*(Version)/((?:\\d+\\.)+\\d+)|.*("+f+")"+("MSIE"==f?" ":"/")+"((?:\\d+\\.)*\\d+)|(?:^|\\(| )([a-z][-a-z0-9._: ]+|(?:Apple)?WebKit)/((?:\\d+\\.)+\\d+)").exec(p)||["","","","unknown","0.0"];i.Browser.name="Version"==g[1]?f:g[3]||g[5],i.Browser.version=g[2]||g[4]||g[6];break}i.Browser.Select({Safari:function(t){var e=parseInt(String(t.version).split(".")[0]);85<e&&(t.webkit=t.version),533<=e?t.version="5.0":526<=e?t.version="4.0":525<=e?t.version="3.1":500<e?t.version="3.0":400<e?t.version="2.0":85<e&&(t.version="1.0")},Firefox:function(t){var e;"0.0"===t.version&&"Gecko"===navigator.product&&navigator.productSub&&("20090630"<=(e=navigator.productSub.substr(0,8))?t.version="3.5":"20080617"<=e?t.version="3.0":"20061024"<=e&&(t.version="2.0"))},Opera:function(t){t.version=opera.version()},MSIE:function(t){t.isIE9=!(!document.documentMode||!window.performance&&!window.msPerformance),MathJax.HTML.setScriptBug=!t.isIE9||document.documentMode<9}}),i.Browser.Select(MathJax.Message.browsers),i.queue=e.Callback.Queue(),i.queue.Push(["Post",n.signal,"Begin"],["Config",n],["Cookie",n],["Styles",n],function(){return e.Callback.Queue(n.Jax(),n.Extensions()).Push({})},["Menu",n],n.onLoad(),function(){MathJax.isReady=!0},["Typeset",n],["Post",n.signal,"End"])}("MathJax")));
