!function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var i={};e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/breakout/",e(e.s=1)}([function(t,e,i){"use strict";function n(){}function r(t){try{return t.then}catch(t){return v=t,g}}function s(t,e){try{return t(e)}catch(t){return v=t,g}}function o(t,e,i){try{t(e,i)}catch(t){return v=t,g}}function a(t){if("object"!==typeof this)throw new TypeError("Promises must be constructed via new");if("function"!==typeof t)throw new TypeError("Promise constructor's argument is not a function");this._75=0,this._83=0,this._18=null,this._38=null,t!==n&&b(t,this)}function h(t,e,i){return new t.constructor(function(r,s){var o=new a(n);o.then(r,s),l(t,new p(e,i,o))})}function l(t,e){for(;3===t._83;)t=t._18;if(a._47&&a._47(t),0===t._83)return 0===t._75?(t._75=1,void(t._38=e)):1===t._75?(t._75=2,void(t._38=[t._38,e])):void t._38.push(e);u(t,e)}function u(t,e){y(function(){var i=1===t._83?e.onFulfilled:e.onRejected;if(null===i)return void(1===t._83?c(e.promise,t._18):d(e.promise,t._18));var n=s(i,t._18);n===g?d(e.promise,v):c(e.promise,n)})}function c(t,e){if(e===t)return d(t,new TypeError("A promise cannot be resolved with itself."));if(e&&("object"===typeof e||"function"===typeof e)){var i=r(e);if(i===g)return d(t,v);if(i===t.then&&e instanceof a)return t._83=3,t._18=e,void f(t);if("function"===typeof i)return void b(i.bind(e),t)}t._83=1,t._18=e,f(t)}function d(t,e){t._83=2,t._18=e,a._71&&a._71(t,e),f(t)}function f(t){if(1===t._75&&(l(t,t._38),t._38=null),2===t._75){for(var e=0;e<t._38.length;e++)l(t,t._38[e]);t._38=null}}function p(t,e,i){this.onFulfilled="function"===typeof t?t:null,this.onRejected="function"===typeof e?e:null,this.promise=i}function b(t,e){var i=!1,n=o(t,function(t){i||(i=!0,c(e,t))},function(t){i||(i=!0,d(e,t))});i||n!==g||(i=!0,d(e,v))}var y=i(4),v=null,g={};t.exports=a,a._47=null,a._71=null,a._44=n,a.prototype.then=function(t,e){if(this.constructor!==a)return h(this,t,e);var i=new a(n);return l(this,new p(t,e,i)),i}},function(t,e,i){i(2),t.exports=i(9)},function(t,e,i){"use strict";"undefined"===typeof Promise&&(i(3).enable(),window.Promise=i(6)),i(7),Object.assign=i(8)},function(t,e,i){"use strict";function n(){l=!1,a._47=null,a._71=null}function r(t){function e(e){(t.allRejections||o(c[e].error,t.whitelist||h))&&(c[e].displayId=u++,t.onUnhandled?(c[e].logged=!0,t.onUnhandled(c[e].displayId,c[e].error)):(c[e].logged=!0,s(c[e].displayId,c[e].error)))}function i(e){c[e].logged&&(t.onHandled?t.onHandled(c[e].displayId,c[e].error):c[e].onUnhandled||(console.warn("Promise Rejection Handled (id: "+c[e].displayId+"):"),console.warn('  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id '+c[e].displayId+".")))}t=t||{},l&&n(),l=!0;var r=0,u=0,c={};a._47=function(t){2===t._83&&c[t._56]&&(c[t._56].logged?i(t._56):clearTimeout(c[t._56].timeout),delete c[t._56])},a._71=function(t,i){0===t._75&&(t._56=r++,c[t._56]={displayId:null,error:i,timeout:setTimeout(e.bind(null,t._56),o(i,h)?100:2e3),logged:!1})}}function s(t,e){console.warn("Possible Unhandled Promise Rejection (id: "+t+"):"),((e&&(e.stack||e))+"").split("\n").forEach(function(t){console.warn("  "+t)})}function o(t,e){return e.some(function(e){return t instanceof e})}var a=i(0),h=[ReferenceError,TypeError,RangeError],l=!1;e.disable=n,e.enable=r},function(t,e,i){"use strict";(function(e){function i(t){o.length||(s(),a=!0),o[o.length]=t}function n(){for(;h<o.length;){var t=h;if(h+=1,o[t].call(),h>l){for(var e=0,i=o.length-h;e<i;e++)o[e]=o[e+h];o.length-=h,h=0}}o.length=0,h=0,a=!1}function r(t){return function(){function e(){clearTimeout(i),clearInterval(n),t()}var i=setTimeout(e,0),n=setInterval(e,50)}}t.exports=i;var s,o=[],a=!1,h=0,l=1024,u="undefined"!==typeof e?e:self,c=u.MutationObserver||u.WebKitMutationObserver;s="function"===typeof c?function(t){var e=1,i=new c(t),n=document.createTextNode("");return i.observe(n,{characterData:!0}),function(){e=-e,n.data=e}}(n):r(n),i.requestFlush=s,i.makeRequestCallFromTimer=r}).call(e,i(5))},function(t,e){var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch(t){"object"===typeof window&&(i=window)}t.exports=i},function(t,e,i){"use strict";function n(t){var e=new r(r._44);return e._83=1,e._18=t,e}var r=i(0);t.exports=r;var s=n(!0),o=n(!1),a=n(null),h=n(void 0),l=n(0),u=n("");r.resolve=function(t){if(t instanceof r)return t;if(null===t)return a;if(void 0===t)return h;if(!0===t)return s;if(!1===t)return o;if(0===t)return l;if(""===t)return u;if("object"===typeof t||"function"===typeof t)try{var e=t.then;if("function"===typeof e)return new r(e.bind(t))}catch(t){return new r(function(e,i){i(t)})}return n(t)},r.all=function(t){var e=Array.prototype.slice.call(t);return new r(function(t,i){function n(o,a){if(a&&("object"===typeof a||"function"===typeof a)){if(a instanceof r&&a.then===r.prototype.then){for(;3===a._83;)a=a._18;return 1===a._83?n(o,a._18):(2===a._83&&i(a._18),void a.then(function(t){n(o,t)},i))}var h=a.then;if("function"===typeof h){return void new r(h.bind(a)).then(function(t){n(o,t)},i)}}e[o]=a,0===--s&&t(e)}if(0===e.length)return t([]);for(var s=e.length,o=0;o<e.length;o++)n(o,e[o])})},r.reject=function(t){return new r(function(e,i){i(t)})},r.race=function(t){return new r(function(e,i){t.forEach(function(t){r.resolve(t).then(e,i)})})},r.prototype.catch=function(t){return this.then(null,t)}},function(t,e){!function(t){"use strict";function e(t){if("string"!==typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function i(t){return"string"!==typeof t&&(t=String(t)),t}function n(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return v.iterable&&(e[Symbol.iterator]=function(){return e}),e}function r(t){this.map={},t instanceof r?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function s(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function o(t){return new Promise(function(e,i){t.onload=function(){e(t.result)},t.onerror=function(){i(t.error)}})}function a(t){var e=new FileReader,i=o(e);return e.readAsArrayBuffer(t),i}function h(t){var e=new FileReader,i=o(e);return e.readAsText(t),i}function l(t){for(var e=new Uint8Array(t),i=new Array(e.length),n=0;n<e.length;n++)i[n]=String.fromCharCode(e[n]);return i.join("")}function u(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function c(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"===typeof t)this._bodyText=t;else if(v.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(v.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(v.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(v.arrayBuffer&&v.blob&&w(t))this._bodyArrayBuffer=u(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!v.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!k(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=u(t)}else this._bodyText="";this.headers.get("content-type")||("string"===typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):v.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},v.blob&&(this.blob=function(){var t=s(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?s(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(a)}),this.text=function(){var t=s(this);if(t)return t;if(this._bodyBlob)return h(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(l(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},v.formData&&(this.formData=function(){return this.text().then(p)}),this.json=function(){return this.text().then(JSON.parse)},this}function d(t){var e=t.toUpperCase();return m.indexOf(e)>-1?e:t}function f(t,e){e=e||{};var i=e.body;if(t instanceof f){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new r(t.headers)),this.method=t.method,this.mode=t.mode,i||null==t._bodyInit||(i=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new r(e.headers)),this.method=d(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&i)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(i)}function p(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var i=t.split("="),n=i.shift().replace(/\+/g," "),r=i.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(r))}}),e}function b(t){var e=new r;return t.split(/\r?\n/).forEach(function(t){var i=t.split(":"),n=i.shift().trim();if(n){var r=i.join(":").trim();e.append(n,r)}}),e}function y(t,e){e||(e={}),this.type="default",this.status="status"in e?e.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new r(e.headers),this.url=e.url||"",this._initBody(t)}if(!t.fetch){var v={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(v.arrayBuffer)var g=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],w=function(t){return t&&DataView.prototype.isPrototypeOf(t)},k=ArrayBuffer.isView||function(t){return t&&g.indexOf(Object.prototype.toString.call(t))>-1};r.prototype.append=function(t,n){t=e(t),n=i(n);var r=this.map[t];this.map[t]=r?r+","+n:n},r.prototype.delete=function(t){delete this.map[e(t)]},r.prototype.get=function(t){return t=e(t),this.has(t)?this.map[t]:null},r.prototype.has=function(t){return this.map.hasOwnProperty(e(t))},r.prototype.set=function(t,n){this.map[e(t)]=i(n)},r.prototype.forEach=function(t,e){for(var i in this.map)this.map.hasOwnProperty(i)&&t.call(e,this.map[i],i,this)},r.prototype.keys=function(){var t=[];return this.forEach(function(e,i){t.push(i)}),n(t)},r.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),n(t)},r.prototype.entries=function(){var t=[];return this.forEach(function(e,i){t.push([i,e])}),n(t)},v.iterable&&(r.prototype[Symbol.iterator]=r.prototype.entries);var m=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];f.prototype.clone=function(){return new f(this,{body:this._bodyInit})},c.call(f.prototype),c.call(y.prototype),y.prototype.clone=function(){return new y(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new r(this.headers),url:this.url})},y.error=function(){var t=new y(null,{status:0,statusText:""});return t.type="error",t};var x=[301,302,303,307,308];y.redirect=function(t,e){if(-1===x.indexOf(e))throw new RangeError("Invalid status code");return new y(null,{status:e,headers:{location:t}})},t.Headers=r,t.Request=f,t.Response=y,t.fetch=function(t,e){return new Promise(function(i,n){var r=new f(t,e),s=new XMLHttpRequest;s.onload=function(){var t={status:s.status,statusText:s.statusText,headers:b(s.getAllResponseHeaders()||"")};t.url="responseURL"in s?s.responseURL:t.headers.get("X-Request-URL");var e="response"in s?s.response:s.responseText;i(new y(e,t))},s.onerror=function(){n(new TypeError("Network request failed"))},s.ontimeout=function(){n(new TypeError("Network request failed"))},s.open(r.method,r.url,!0),"include"===r.credentials&&(s.withCredentials=!0),"responseType"in s&&v.blob&&(s.responseType="blob"),r.headers.forEach(function(t,e){s.setRequestHeader(e,t)}),s.send("undefined"===typeof r._bodyInit?null:r._bodyInit)})},t.fetch.polyfill=!0}}("undefined"!==typeof self?self:this)},function(t,e,i){"use strict";function n(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}var r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},i=0;i<10;i++)e["_"+String.fromCharCode(i)]=i;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(t){n[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var i,a,h=n(t),l=1;l<arguments.length;l++){i=Object(arguments[l]);for(var u in i)s.call(i,u)&&(h[u]=i[u]);if(r){a=r(i);for(var c=0;c<a.length;c++)o.call(i,a[c])&&(h[a[c]]=i[a[c]])}}return h}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(10),r=i(14);i.n(r),new n.a},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var r=i(11),s=i(12),o=i(13),a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),h=function(){function t(){n(this,t),this.paused=!1,this.over=!1,this.lives=3,this.ballRadius=20,this.paddleWidth=200,this.paddleHeight=40,this.brickWidth=100,this.brickHeight=50,this.ballStartX=490,this.ballStartY=795,this.score=0,this.bricksBroken=0,this.brickAngleCheck=Math.atan(.5*this.brickHeight/(.5*this.brickWidth)),this.brickHyp=Math.sqrt(Math.pow(.5*this.brickHeight,2)+Math.pow(.5*this.brickWidth,2)),this.paddleHyp=Math.sqrt(Math.pow(.5*this.paddleHeight,2)+Math.pow(.5*this.paddleWidth,2)),this.ball=new r.a(this.ballStartX,this.ballStartY,this.ballRadius),this.paddle=new o.a(this.paddleWidth,this.paddleHeight),this.bricks=[],this.debugg=[],this.createBricks(),this.backBufferCanvas=document.createElement("canvas"),this.backBufferCanvas.width=1e3,this.backBufferCanvas.height=1e3,this.backBufferContext=this.backBufferCanvas.getContext("2d"),this.screenBufferCanvas=document.createElement("canvas"),this.screenBufferCanvas.width=1e3,this.screenBufferCanvas.height=1e3,document.body.appendChild(this.screenBufferCanvas),this.screenBufferContext=this.screenBufferCanvas.getContext("2d"),this.pSound1=new Audio("./Pad.wav"),this.bSound1=new Audio("./Brick1.wav"),this.update=this.update.bind(this),this.render=this.render.bind(this),this.loop=this.loop.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleKeyUp=this.handleKeyUp.bind(this),this.ballPaddleCollision=this.ballPaddleCollision.bind(this),this.ballBrickCollision=this.ballBrickCollision.bind(this),this.addPoints=this.addPoints.bind(this),this.displayScore=this.displayScore.bind(this),this.removeBrick=this.removeBrick.bind(this),this.ballReset=this.ballReset.bind(this),this.gameOver=this.gameOver.bind(this),this.playHitPaddle=this.playHitPaddle(this),this.playHitBrick=this.playHitBrick(this),window.onkeydown=this.handleKeyDown,window.onkeyup=this.handleKeyUp,this.interval=setInterval(this.loop,10)}return a(t,[{key:"gameOver",value:function(){this.over=!0,console.log("Game Over"),this.screenBufferContext.font="100px Times New Roman",this.screenBufferContext.fillStyle="Black",this.screenBufferContext.strokeStyle="Red",this.screenBufferContext.fillText("GAME OVER",250,500),this.screenBufferContext.strokeText("GAME OVER",250,500)}},{key:"playHitPaddle",value:function(){this.pSound1.play()}},{key:"playHitBrick",value:function(){this.bSound1.play()}},{key:"createBricks",value:function(){for(var t=0;t<8;t++)for(var e=0;e<8;e++)switch(Math.floor(3*Math.random())){case 0:this.bricks.push(new s.a(e,t,this.brickWidth,this.brickHeight,"purple"));break;case 1:this.bricks.push(new s.a(e,t,this.brickWidth,this.brickHeight,"violet"));break;case 2:this.bricks.push(new s.a(e,t,this.brickWidth,this.brickHeight,"pink"))}}},{key:"handleKeyDown",value:function(t){switch(t.preventDefault(),t.key){case"a":case"A":case"ArrowLeft":this.paddle.changeDirection("left");break;case"d":case"D":case"ArrowRight":this.paddle.changeDirection("right");break;case"p":case"P":this.paused=!this.paused}}},{key:"handleKeyUp",value:function(t){t.preventDefault(),this.paddle.changeDirection("static")}},{key:"addPoints",value:function(){this.score+=5,this.highScore<this.score&&(this.highScore=this.score)}},{key:"ballReset",value:function(){this.ball.setPosition(this.ballStartX,this.ballStartY),this.ball.setSpeed()}},{key:"ballPaddleCollision",value:function(){var t=this.ball.getPosition(),e=this.paddle.getPosition(),i={x:e.x+.5*this.paddleWidth,y:e.y+.5*this.paddleHeight},n=i.x-t.x,r=i.y-t.y;if(t.y>1e3&&(this.ballReset(),this.lives--),!(Math.abs(r)>this.ballRadius+.5*this.paddleHeight)&&!(Math.abs(n)>this.ballRadius+.5*this.paddleWidth)){var s=Math.sqrt(Math.pow(n,2)+Math.pow(r,2)),o=this.paddle.getDirection(),a=this.ball.getSpeed();if(s-this.ballRadius<=this.paddleHyp)"left"===o?a.x<0?(this.ball.changeSpeedX(1.2),this.ball.changeSpeedY(-1.05)):a.x>0&&(this.ball.changeSpeedX(.8),this.ball.changeSpeedY(-1.15)):"right"===o?a.x<0?(this.ball.changeSpeedX(.8),this.ball.changeSpeedY(-1.15)):a.x>0&&(this.ball.changeSpeedX(1.2),this.ball.changeSpeedY(-1.05)):this.ball.changeSpeedY(-1),this.pSound1.play();else if(t.y+this.ballRadius>e.y&&t.x+this.ballRadius>e.x&&t.x-this.ballRadius<e.x+this.paddleWidth){var h=Math.asin(r/s);h>=this.brickAngleCheck&&a.y>0?"left"===o?a.x<0?(this.ball.changeSpeedX(1.1),this.ball.changeSpeedY(-1.05)):a.x>0&&(this.ball.changeSpeedX(.9),this.ball.changeSpeedY(-.95)):"right"===o?a.x>0?(this.ball.changeSpeedX(1.1),this.ball.changeSpeedY(-1.05)):a.x<0&&(this.ball.changeSpeedX(.9),this.ball.changeSpeedY(-.95)):this.ball.changeSpeedY(-1):n>0&&a.x>0?this.ball.changeSpeedX(-1):n<0&&a.x<0&&this.ball.changeSpeedX(-1),this.pSound1.play()}}}},{key:"ballBrickCollision",value:function(){var t,e,i,n,r,s=this,o=this.ball.getPosition(),a=this.ball.getSpeed();this.bricks.forEach(function(h){if(t=h.getPosition(),n={x:t.x+.5*s.brickWidth,y:t.y+.5*s.brickHeight},e=n.x-o.x,i=n.y-o.y,r=Math.sqrt(Math.pow(e,2)+Math.pow(i,2)),!(Math.abs(i)>s.ballRadius+.5*s.brickHeight)&&!(Math.abs(e)>s.ballRadius+.5*s.brickWidth))if(r-s.ballRadius<=s.brickHyp)s.ball.changeSpeedY(-1),s.removeBrick(h),s.bSound1.play();else if(o.y+s.ballRadius>=t.y&&o.y-s.ballRadius<=t.y+s.brickHeight&&o.x+s.ballRadius>=t.x&&o.x-s.ballRadius<=t.x+s.brickWidth){var l=Math.asin(i/r);l>=s.brickAngleCheck&&a.y>0?s.ball.changeSpeedY(-1):l<=-s.brickAngleCheck&&a.y<0?s.ball.changeSpeedY(-1):e>0&&a.x>0?s.ball.changeSpeedX(-1):e<0&&a.x<0&&s.ball.changeSpeedX(-1),s.removeBrick(h),s.bSound1.play()}})}},{key:"removeBrick",value:function(t){var e=this.bricks.indexOf(t);e>-1&&this.bricks.splice(e,1),this.bricksBroken++,this.addPoints()}},{key:"displayScore",value:function(){this.backBufferContext.fillStyle="Indigo",this.backBufferContext.fillRect(0,0,1e3,50),this.backBufferContext.font="45px Lucida Console",this.backBufferContext.fillStyle="Black",this.backBufferContext.fillText("SCORE: "+this.score+" BRICKS: "+this.bricksBroken,0,40),this.backBufferContext.fillText("LIVES: "+this.lives,750,40)}},{key:"update",value:function(){this.ballBrickCollision(),this.ball.update(),this.paddle.update(),this.ballPaddleCollision(),0===this.bricks.length&&(this.createBricks(),this.ballReset()),0===this.lives&&(this.over=!0)}},{key:"render",value:function(){this.backBufferContext.fillStyle="black",this.backBufferContext.fillRect(0,0,1e3,1e3),this.displayScore(),this.ball.render(this.backBufferContext),this.paddle.render(this.backBufferContext);for(var t=0;t<this.bricks.length;t++)this.bricks[t].render(this.backBufferContext);this.screenBufferContext.drawImage(this.backBufferCanvas,0,0),this.over&&this.gameOver()}},{key:"loop",value:function(){this.paused||this.over||(this.update(),this.render())}}]),t}();e.a=h},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=function(){function t(e,i,r){n(this,t),this.x=e,this.y=i,this.radius=r,this.Xspeed,this.Yspeed,this.setSpeed(),this.XspeedLimit=6,this.YspeedLimit=6,this.update=this.update.bind(this),this.render=this.render.bind(this),this.getPosition=this.getPosition.bind(this),this.getSpeed=this.getSpeed.bind(this),this.changeSpeedY=this.changeSpeedY.bind(this),this.changeSpeedX=this.changeSpeedX.bind(this),this.setPosition=this.setPosition.bind(this),this.setSpeed=this.setSpeed.bind(this)}return r(t,[{key:"setPosition",value:function(t,e){this.x=t,this.y=e}},{key:"setSpeed",value:function(){this.Xspeed=4*Math.random()+1,this.Yspeed=-2.5}},{key:"getPosition",value:function(){return{x:this.x,y:this.y}}},{key:"getSpeed",value:function(){return{x:this.Xspeed,y:this.Yspeed}}},{key:"changeSpeedY",value:function(t){this.Yspeed*=t,Math.abs(this.Yspeed)>this.YspeedLimit&&(this.Yspeed=this.YspeedLimit),Math.abs(this.Yspeed)<.5&&(this.Yspeed=-.5)}},{key:"changeSpeedX",value:function(t){this.Xspeed*=t,Math.abs(this.Xspeed)>this.XspeedLimit&&(this.Xspeed=this.XspeedLimit)}},{key:"update",value:function(t,e){var i=1e3-this.radius;this.x>=i&&this.Xspeed>0&&(this.Xspeed=-this.Xspeed),this.x<=this.radius&&this.Xspeed<0&&(this.Xspeed=-this.Xspeed),this.y<=this.radius+50&&(this.Yspeed=-this.Yspeed),this.x+=this.Xspeed,this.y+=this.Yspeed}},{key:"render",value:function(t){t.save(),t.fillStyle="red",t.beginPath(),t.arc(this.x,this.y,this.radius,0,2*Math.PI),t.closePath(),t.fill(),t.fillStyle="maroon",t.beginPath(),t.arc(this.x,this.y,15,0,2*Math.PI),t.closePath(),t.fill(),t.restore()}}]),t}();e.a=s},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=function(){function t(e,i,r,s,o){n(this,t),this.x=e,this.y=i,this.width=r,this.height=s,this.colour=o,this.destroyed=!1,this.update=this.update.bind(this),this.render=this.render.bind(this),this.getPosition=this.getPosition.bind(this)}return r(t,[{key:"getPosition",value:function(){return{x:this.x*this.width+85,y:this.y*this.height+175}}},{key:"update",value:function(){}},{key:"render",value:function(t){switch(t.save(),this.colour){case"purple":t.fillStyle="#12AD2A",t.strokeStyle="#043927";break;case"violet":t.fillStyle="#043927",t.strokeStyle="#00A86B";break;case"pink":t.fillStyle="#00A86B",t.strokeStyle="#043927"}this.destroyed&&(t.fillStyle="black"),t.fillRect(this.x*this.width+85,this.y*this.height+175,this.width,this.height),t.strokeRect(this.x*this.width+85,this.y*this.height+175,this.width,this.height),t.restore()}}]),t}();e.a=s},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=function(){function t(e,i){n(this,t),this.Xposition=450,this.Yposition=950,this.direction="static",this.width=e,this.height=i,this.update=this.update.bind(this),this.render=this.render.bind(this),this.changeDirectiondirection=this.changeDirection.bind(this),this.getDirection=this.getDirection.bind(this),this.getPosition=this.getPosition.bind(this)}return r(t,[{key:"getPosition",value:function(){return{x:this.Xposition,y:this.Yposition}}},{key:"getDirection",value:function(){return this.direction}},{key:"changeDirection",value:function(t){this.direction=t}},{key:"update",value:function(){"right"===this.direction&&this.Xposition<800?this.Xposition+=6:"left"===this.direction&&this.Xposition>0&&(this.Xposition-=6)}},{key:"render",value:function(t){t.save(),t.fillStyle="purple",t.fillRect(this.Xposition,this.Yposition,this.width,this.height),t.fillStyle="black",t.fillRect(this.Xposition+5,this.Yposition+5,this.width-10,this.height-10),t.restore()}}]),t}();e.a=s},function(t,e){}]);
//# sourceMappingURL=main.36b86b36.js.map