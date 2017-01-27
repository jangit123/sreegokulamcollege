


// Include JQuery (http://jquery.com/) and jQuery UI
/*
 * jQuery JavaScript Library v1.3.2
 * http://jquery.com/
 *
 * Copyright (c) 2009 John Resig
 * Dual licensed under the MIT and GPL licenses.
 * http://docs.jquery.com/License
 *
 * Date: 2009-02-19 17:34:21 -0500 (Thu, 19 Feb 2009)
 * Revision: 6246
 */
(function(){var l=this,g,y=l.jQuery,p=l.$,o=l.jQuery=l.$=function(E,F){return new o.fn.init(E,F)},D=/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,f=/^.[^:#\[\.,]*$/;o.fn=o.prototype={init:function(E,H){E=E||document;if(E.nodeType){this[0]=E;this.length=1;this.context=E;return this}if(typeof E==="string"){var G=D.exec(E);if(G&&(G[1]||!H)){if(G[1]){E=o.clean([G[1]],H)}else{var I=document.getElementById(G[3]);if(I&&I.id!=G[3]){return o().find(E)}var F=o(I||[]);F.context=document;F.selector=E;return F}}else{return o(H).find(E)}}else{if(o.isFunction(E)){return o(document).ready(E)}}if(E.selector&&E.context){this.selector=E.selector;this.context=E.context}return this.setArray(o.isArray(E)?E:o.makeArray(E))},selector:"",jquery:"1.3.2",size:function(){return this.length},get:function(E){return E===g?Array.prototype.slice.call(this):this[E]},pushStack:function(F,H,E){var G=o(F);G.prevObject=this;G.context=this.context;if(H==="find"){G.selector=this.selector+(this.selector?" ":"")+E}else{if(H){G.selector=this.selector+"."+H+"("+E+")"}}return G},setArray:function(E){this.length=0;Array.prototype.push.apply(this,E);return this},each:function(F,E){return o.each(this,F,E)},index:function(E){return o.inArray(E&&E.jquery?E[0]:E,this)},attr:function(F,H,G){var E=F;if(typeof F==="string"){if(H===g){return this[0]&&o[G||"attr"](this[0],F)}else{E={};E[F]=H}}return this.each(function(I){for(F in E){o.attr(G?this.style:this,F,o.prop(this,E[F],G,I,F))}})},css:function(E,F){if((E=="width"||E=="height")&&parseFloat(F)<0){F=g}return this.attr(E,F,"curCSS")},text:function(F){if(typeof F!=="object"&&F!=null){return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(F))}var E="";o.each(F||this,function(){o.each(this.childNodes,function(){if(this.nodeType!=8){E+=this.nodeType!=1?this.nodeValue:o.fn.text([this])}})});return E},wrapAll:function(E){if(this[0]){var F=o(E,this[0].ownerDocument).clone();if(this[0].parentNode){F.insertBefore(this[0])}F.map(function(){var G=this;while(G.firstChild){G=G.firstChild}return G}).append(this)}return this},wrapInner:function(E){return this.each(function(){o(this).contents().wrapAll(E)})},wrap:function(E){return this.each(function(){o(this).wrapAll(E)})},append:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.appendChild(E)}})},prepend:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.insertBefore(E,this.firstChild)}})},before:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this)})},after:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this.nextSibling)})},end:function(){return this.prevObject||o([])},push:[].push,sort:[].sort,splice:[].splice,find:function(E){if(this.length===1){var F=this.pushStack([],"find",E);F.length=0;o.find(E,this[0],F);return F}else{return this.pushStack(o.unique(o.map(this,function(G){return o.find(E,G)})),"find",E)}},clone:function(G){var E=this.map(function(){if(!o.support.noCloneEvent&&!o.isXMLDoc(this)){var I=this.outerHTML;if(!I){var J=this.ownerDocument.createElement("div");J.appendChild(this.cloneNode(true));I=J.innerHTML}return o.clean([I.replace(/ jQuery\d+="(?:\d+|null)"/g,"").replace(/^\s*/,"")])[0]}else{return this.cloneNode(true)}});if(G===true){var H=this.find("*").andSelf(),F=0;E.find("*").andSelf().each(function(){if(this.nodeName!==H[F].nodeName){return}var I=o.data(H[F],"events");for(var K in I){for(var J in I[K]){o.event.add(this,K,I[K][J],I[K][J].data)}}F++})}return E},filter:function(E){return this.pushStack(o.isFunction(E)&&o.grep(this,function(G,F){return E.call(G,F)})||o.multiFilter(E,o.grep(this,function(F){return F.nodeType===1})),"filter",E)},closest:function(E){var G=o.expr.match.POS.test(E)?o(E):null,F=0;return this.map(function(){var H=this;while(H&&H.ownerDocument){if(G?G.index(H)>-1:o(H).is(E)){o.data(H,"closest",F);return H}H=H.parentNode;F++}})},not:function(E){if(typeof E==="string"){if(f.test(E)){return this.pushStack(o.multiFilter(E,this,true),"not",E)}else{E=o.multiFilter(E,this)}}var F=E.length&&E[E.length-1]!==g&&!E.nodeType;return this.filter(function(){return F?o.inArray(this,E)<0:this!=E})},add:function(E){return this.pushStack(o.unique(o.merge(this.get(),typeof E==="string"?o(E):o.makeArray(E))))},is:function(E){return !!E&&o.multiFilter(E,this).length>0},hasClass:function(E){return !!E&&this.is("."+E)},val:function(K){if(K===g){var E=this[0];if(E){if(o.nodeName(E,"option")){return(E.attributes.value||{}).specified?E.value:E.text}if(o.nodeName(E,"select")){var I=E.selectedIndex,L=[],M=E.options,H=E.type=="select-one";if(I<0){return null}for(var F=H?I:0,J=H?I+1:M.length;F<J;F++){var G=M[F];if(G.selected){K=o(G).val();if(H){return K}L.push(K)}}return L}return(E.value||"").replace(/\r/g,"")}return g}if(typeof K==="number"){K+=""}return this.each(function(){if(this.nodeType!=1){return}if(o.isArray(K)&&/radio|checkbox/.test(this.type)){this.checked=(o.inArray(this.value,K)>=0||o.inArray(this.name,K)>=0)}else{if(o.nodeName(this,"select")){var N=o.makeArray(K);o("option",this).each(function(){this.selected=(o.inArray(this.value,N)>=0||o.inArray(this.text,N)>=0)});if(!N.length){this.selectedIndex=-1}}else{this.value=K}}})},html:function(E){return E===g?(this[0]?this[0].innerHTML.replace(/ jQuery\d+="(?:\d+|null)"/g,""):null):this.empty().append(E)},replaceWith:function(E){return this.after(E).remove()},eq:function(E){return this.slice(E,+E+1)},slice:function(){return this.pushStack(Array.prototype.slice.apply(this,arguments),"slice",Array.prototype.slice.call(arguments).join(","))},map:function(E){return this.pushStack(o.map(this,function(G,F){return E.call(G,F,G)}))},andSelf:function(){return this.add(this.prevObject)},domManip:function(J,M,L){if(this[0]){var I=(this[0].ownerDocument||this[0]).createDocumentFragment(),F=o.clean(J,(this[0].ownerDocument||this[0]),I),H=I.firstChild;if(H){for(var G=0,E=this.length;G<E;G++){L.call(K(this[G],H),this.length>1||G>0?I.cloneNode(true):I)}}if(F){o.each(F,z)}}return this;function K(N,O){return M&&o.nodeName(N,"table")&&o.nodeName(O,"tr")?(N.getElementsByTagName("tbody")[0]||N.appendChild(N.ownerDocument.createElement("tbody"))):N}}};o.fn.init.prototype=o.fn;function z(E,F){if(F.src){o.ajax({url:F.src,async:false,dataType:"script"})}else{o.globalEval(F.text||F.textContent||F.innerHTML||"")}if(F.parentNode){F.parentNode.removeChild(F)}}function e(){return +new Date}o.extend=o.fn.extend=function(){var J=arguments[0]||{},H=1,I=arguments.length,E=false,G;if(typeof J==="boolean"){E=J;J=arguments[1]||{};H=2}if(typeof J!=="object"&&!o.isFunction(J)){J={}}if(I==H){J=this;--H}for(;H<I;H++){if((G=arguments[H])!=null){for(var F in G){var K=J[F],L=G[F];if(J===L){continue}if(E&&L&&typeof L==="object"&&!L.nodeType){J[F]=o.extend(E,K||(L.length!=null?[]:{}),L)}else{if(L!==g){J[F]=L}}}}}return J};var b=/z-?index|font-?weight|opacity|zoom|line-?height/i,q=document.defaultView||{},s=Object.prototype.toString;o.extend({noConflict:function(E){l.$=p;if(E){l.jQuery=y}return o},isFunction:function(E){return s.call(E)==="[object Function]"},isArray:function(E){return s.call(E)==="[object Array]"},isXMLDoc:function(E){return E.nodeType===9&&E.documentElement.nodeName!=="HTML"||!!E.ownerDocument&&o.isXMLDoc(E.ownerDocument)},globalEval:function(G){if(G&&/\S/.test(G)){var F=document.getElementsByTagName("head")[0]||document.documentElement,E=document.createElement("script");E.type="text/javascript";if(o.support.scriptEval){E.appendChild(document.createTextNode(G))}else{E.text=G}F.insertBefore(E,F.firstChild);F.removeChild(E)}},nodeName:function(F,E){return F.nodeName&&F.nodeName.toUpperCase()==E.toUpperCase()},each:function(G,K,F){var E,H=0,I=G.length;if(F){if(I===g){for(E in G){if(K.apply(G[E],F)===false){break}}}else{for(;H<I;){if(K.apply(G[H++],F)===false){break}}}}else{if(I===g){for(E in G){if(K.call(G[E],E,G[E])===false){break}}}else{for(var J=G[0];H<I&&K.call(J,H,J)!==false;J=G[++H]){}}}return G},prop:function(H,I,G,F,E){if(o.isFunction(I)){I=I.call(H,F)}return typeof I==="number"&&G=="curCSS"&&!b.test(E)?I+"px":I},className:{add:function(E,F){o.each((F||"").split(/\s+/),function(G,H){if(E.nodeType==1&&!o.className.has(E.className,H)){E.className+=(E.className?" ":"")+H}})},remove:function(E,F){if(E.nodeType==1){E.className=F!==g?o.grep(E.className.split(/\s+/),function(G){return !o.className.has(F,G)}).join(" "):""}},has:function(F,E){return F&&o.inArray(E,(F.className||F).toString().split(/\s+/))>-1}},swap:function(H,G,I){var E={};for(var F in G){E[F]=H.style[F];H.style[F]=G[F]}I.call(H);for(var F in G){H.style[F]=E[F]}},css:function(H,F,J,E){if(F=="width"||F=="height"){var L,G={position:"absolute",visibility:"hidden",display:"block"},K=F=="width"?["Left","Right"]:["Top","Bottom"];function I(){L=F=="width"?H.offsetWidth:H.offsetHeight;if(E==="border"){return}o.each(K,function(){if(!E){L-=parseFloat(o.curCSS(H,"padding"+this,true))||0}if(E==="margin"){L+=parseFloat(o.curCSS(H,"margin"+this,true))||0}else{L-=parseFloat(o.curCSS(H,"border"+this+"Width",true))||0}})}if(H.offsetWidth!==0){I()}else{o.swap(H,G,I)}return Math.max(0,Math.round(L))}return o.curCSS(H,F,J)},curCSS:function(I,F,G){var L,E=I.style;if(F=="opacity"&&!o.support.opacity){L=o.attr(E,"opacity");return L==""?"1":L}if(F.match(/float/i)){F=w}if(!G&&E&&E[F]){L=E[F]}else{if(q.getComputedStyle){if(F.match(/float/i)){F="float"}F=F.replace(/([A-Z])/g,"-$1").toLowerCase();var M=q.getComputedStyle(I,null);if(M){L=M.getPropertyValue(F)}if(F=="opacity"&&L==""){L="1"}}else{if(I.currentStyle){var J=F.replace(/\-(\w)/g,function(N,O){return O.toUpperCase()});L=I.currentStyle[F]||I.currentStyle[J];if(!/^\d+(px)?$/i.test(L)&&/^\d/.test(L)){var H=E.left,K=I.runtimeStyle.left;I.runtimeStyle.left=I.currentStyle.left;E.left=L||0;L=E.pixelLeft+"px";E.left=H;I.runtimeStyle.left=K}}}}return L},clean:function(F,K,I){K=K||document;if(typeof K.createElement==="undefined"){K=K.ownerDocument||K[0]&&K[0].ownerDocument||document}if(!I&&F.length===1&&typeof F[0]==="string"){var H=/^<(\w+)\s*\/?>$/.exec(F[0]);if(H){return[K.createElement(H[1])]}}var G=[],E=[],L=K.createElement("div");o.each(F,function(P,S){if(typeof S==="number"){S+=""}if(!S){return}if(typeof S==="string"){S=S.replace(/(<(\w+)[^>]*?)\/>/g,function(U,V,T){return T.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?U:V+"></"+T+">"});var O=S.replace(/^\s+/,"").substring(0,10).toLowerCase();var Q=!O.indexOf("<opt")&&[1,"<select multiple='multiple'>","</select>"]||!O.indexOf("<leg")&&[1,"<fieldset>","</fieldset>"]||O.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,"<table>","</table>"]||!O.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!O.indexOf("<td")||!O.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||!O.indexOf("<col")&&[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]||!o.support.htmlSerialize&&[1,"div<div>","</div>"]||[0,"",""];L.innerHTML=Q[1]+S+Q[2];while(Q[0]--){L=L.lastChild}if(!o.support.tbody){var R=/<tbody/i.test(S),N=!O.indexOf("<table")&&!R?L.firstChild&&L.firstChild.childNodes:Q[1]=="<table>"&&!R?L.childNodes:[];for(var M=N.length-1;M>=0;--M){if(o.nodeName(N[M],"tbody")&&!N[M].childNodes.length){N[M].parentNode.removeChild(N[M])}}}if(!o.support.leadingWhitespace&&/^\s/.test(S)){L.insertBefore(K.createTextNode(S.match(/^\s*/)[0]),L.firstChild)}S=o.makeArray(L.childNodes)}if(S.nodeType){G.push(S)}else{G=o.merge(G,S)}});if(I){for(var J=0;G[J];J++){if(o.nodeName(G[J],"script")&&(!G[J].type||G[J].type.toLowerCase()==="text/javascript")){E.push(G[J].parentNode?G[J].parentNode.removeChild(G[J]):G[J])}else{if(G[J].nodeType===1){G.splice.apply(G,[J+1,0].concat(o.makeArray(G[J].getElementsByTagName("script"))))}I.appendChild(G[J])}}return E}return G},attr:function(J,G,K){if(!J||J.nodeType==3||J.nodeType==8){return g}var H=!o.isXMLDoc(J),L=K!==g;G=H&&o.props[G]||G;if(J.tagName){var F=/href|src|style/.test(G);if(G=="selected"&&J.parentNode){J.parentNode.selectedIndex}if(G in J&&H&&!F){if(L){if(G=="type"&&o.nodeName(J,"input")&&J.parentNode){throw"type property can't be changed"}J[G]=K}if(o.nodeName(J,"form")&&J.getAttributeNode(G)){return J.getAttributeNode(G).nodeValue}if(G=="tabIndex"){var I=J.getAttributeNode("tabIndex");return I&&I.specified?I.value:J.nodeName.match(/(button|input|object|select|textarea)/i)?0:J.nodeName.match(/^(a|area)$/i)&&J.href?0:g}return J[G]}if(!o.support.style&&H&&G=="style"){return o.attr(J.style,"cssText",K)}if(L){J.setAttribute(G,""+K)}var E=!o.support.hrefNormalized&&H&&F?J.getAttribute(G,2):J.getAttribute(G);return E===null?g:E}if(!o.support.opacity&&G=="opacity"){if(L){J.zoom=1;J.filter=(J.filter||"").replace(/alpha\([^)]*\)/,"")+(parseInt(K)+""=="NaN"?"":"alpha(opacity="+K*100+")")}return J.filter&&J.filter.indexOf("opacity=")>=0?(parseFloat(J.filter.match(/opacity=([^)]*)/)[1])/100)+"":""}G=G.replace(/-([a-z])/ig,function(M,N){return N.toUpperCase()});if(L){J[G]=K}return J[G]},trim:function(E){return(E||"").replace(/^\s+|\s+$/g,"")},makeArray:function(G){var E=[];if(G!=null){var F=G.length;if(F==null||typeof G==="string"||o.isFunction(G)||G.setInterval){E[0]=G}else{while(F){E[--F]=G[F]}}}return E},inArray:function(G,H){for(var E=0,F=H.length;E<F;E++){if(H[E]===G){return E}}return -1},merge:function(H,E){var F=0,G,I=H.length;if(!o.support.getAll){while((G=E[F++])!=null){if(G.nodeType!=8){H[I++]=G}}}else{while((G=E[F++])!=null){H[I++]=G}}return H},unique:function(K){var F=[],E={};try{for(var G=0,H=K.length;G<H;G++){var J=o.data(K[G]);if(!E[J]){E[J]=true;F.push(K[G])}}}catch(I){F=K}return F},grep:function(F,J,E){var G=[];for(var H=0,I=F.length;H<I;H++){if(!E!=!J(F[H],H)){G.push(F[H])}}return G},map:function(E,J){var F=[];for(var G=0,H=E.length;G<H;G++){var I=J(E[G],G);if(I!=null){F[F.length]=I}}return F.concat.apply([],F)}});var C=navigator.userAgent.toLowerCase();o.browser={version:(C.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,"0"])[1],safari:/webkit/.test(C),opera:/opera/.test(C),msie:/msie/.test(C)&&!/opera/.test(C),mozilla:/mozilla/.test(C)&&!/(compatible|webkit)/.test(C)};o.each({parent:function(E){return E.parentNode},parents:function(E){return o.dir(E,"parentNode")},next:function(E){return o.nth(E,2,"nextSibling")},prev:function(E){return o.nth(E,2,"previousSibling")},nextAll:function(E){return o.dir(E,"nextSibling")},prevAll:function(E){return o.dir(E,"previousSibling")},siblings:function(E){return o.sibling(E.parentNode.firstChild,E)},children:function(E){return o.sibling(E.firstChild)},contents:function(E){return o.nodeName(E,"iframe")?E.contentDocument||E.contentWindow.document:o.makeArray(E.childNodes)}},function(E,F){o.fn[E]=function(G){var H=o.map(this,F);if(G&&typeof G=="string"){H=o.multiFilter(G,H)}return this.pushStack(o.unique(H),E,G)}});o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(E,F){o.fn[E]=function(G){var J=[],L=o(G);for(var K=0,H=L.length;K<H;K++){var I=(K>0?this.clone(true):this).get();o.fn[F].apply(o(L[K]),I);J=J.concat(I)}return this.pushStack(J,E,G)}});o.each({removeAttr:function(E){o.attr(this,E,"");if(this.nodeType==1){this.removeAttribute(E)}},addClass:function(E){o.className.add(this,E)},removeClass:function(E){o.className.remove(this,E)},toggleClass:function(F,E){if(typeof E!=="boolean"){E=!o.className.has(this,F)}o.className[E?"add":"remove"](this,F)},remove:function(E){if(!E||o.filter(E,[this]).length){o("*",this).add([this]).each(function(){o.event.remove(this);o.removeData(this)});if(this.parentNode){this.parentNode.removeChild(this)}}},empty:function(){o(this).children().remove();while(this.firstChild){this.removeChild(this.firstChild)}}},function(E,F){o.fn[E]=function(){return this.each(F,arguments)}});function j(E,F){return E[0]&&parseInt(o.curCSS(E[0],F,true),10)||0}var h="jQuery"+e(),v=0,A={};o.extend({cache:{},data:function(F,E,G){F=F==l?A:F;var H=F[h];if(!H){H=F[h]=++v}if(E&&!o.cache[H]){o.cache[H]={}}if(G!==g){o.cache[H][E]=G}return E?o.cache[H][E]:H},removeData:function(F,E){F=F==l?A:F;var H=F[h];if(E){if(o.cache[H]){delete o.cache[H][E];E="";for(E in o.cache[H]){break}if(!E){o.removeData(F)}}}else{try{delete F[h]}catch(G){if(F.removeAttribute){F.removeAttribute(h)}}delete o.cache[H]}},queue:function(F,E,H){if(F){E=(E||"fx")+"queue";var G=o.data(F,E);if(!G||o.isArray(H)){G=o.data(F,E,o.makeArray(H))}else{if(H){G.push(H)}}}return G},dequeue:function(H,G){var E=o.queue(H,G),F=E.shift();if(!G||G==="fx"){F=E[0]}if(F!==g){F.call(H)}}});o.fn.extend({data:function(E,G){var H=E.split(".");H[1]=H[1]?"."+H[1]:"";if(G===g){var F=this.triggerHandler("getData"+H[1]+"!",[H[0]]);if(F===g&&this.length){F=o.data(this[0],E)}return F===g&&H[1]?this.data(H[0]):F}else{return this.trigger("setData"+H[1]+"!",[H[0],G]).each(function(){o.data(this,E,G)})}},removeData:function(E){return this.each(function(){o.removeData(this,E)})},queue:function(E,F){if(typeof E!=="string"){F=E;E="fx"}if(F===g){return o.queue(this[0],E)}return this.each(function(){var G=o.queue(this,E,F);if(E=="fx"&&G.length==1){G[0].call(this)}})},dequeue:function(E){return this.each(function(){o.dequeue(this,E)})}});
/*
 * Sizzle CSS Selector Engine - v0.9.3
 *  Copyright 2009, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){var R=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g,L=0,H=Object.prototype.toString;var F=function(Y,U,ab,ac){ab=ab||[];U=U||document;if(U.nodeType!==1&&U.nodeType!==9){return[]}if(!Y||typeof Y!=="string"){return ab}var Z=[],W,af,ai,T,ad,V,X=true;R.lastIndex=0;while((W=R.exec(Y))!==null){Z.push(W[1]);if(W[2]){V=RegExp.rightContext;break}}if(Z.length>1&&M.exec(Y)){if(Z.length===2&&I.relative[Z[0]]){af=J(Z[0]+Z[1],U)}else{af=I.relative[Z[0]]?[U]:F(Z.shift(),U);while(Z.length){Y=Z.shift();if(I.relative[Y]){Y+=Z.shift()}af=J(Y,af)}}}else{var ae=ac?{expr:Z.pop(),set:E(ac)}:F.find(Z.pop(),Z.length===1&&U.parentNode?U.parentNode:U,Q(U));af=F.filter(ae.expr,ae.set);if(Z.length>0){ai=E(af)}else{X=false}while(Z.length){var ah=Z.pop(),ag=ah;if(!I.relative[ah]){ah=""}else{ag=Z.pop()}if(ag==null){ag=U}I.relative[ah](ai,ag,Q(U))}}if(!ai){ai=af}if(!ai){throw"Syntax error, unrecognized expression: "+(ah||Y)}if(H.call(ai)==="[object Array]"){if(!X){ab.push.apply(ab,ai)}else{if(U.nodeType===1){for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&(ai[aa]===true||ai[aa].nodeType===1&&K(U,ai[aa]))){ab.push(af[aa])}}}else{for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&ai[aa].nodeType===1){ab.push(af[aa])}}}}}else{E(ai,ab)}if(V){F(V,U,ab,ac);if(G){hasDuplicate=false;ab.sort(G);if(hasDuplicate){for(var aa=1;aa<ab.length;aa++){if(ab[aa]===ab[aa-1]){ab.splice(aa--,1)}}}}}return ab};F.matches=function(T,U){return F(T,null,null,U)};F.find=function(aa,T,ab){var Z,X;if(!aa){return[]}for(var W=0,V=I.order.length;W<V;W++){var Y=I.order[W],X;if((X=I.match[Y].exec(aa))){var U=RegExp.leftContext;if(U.substr(U.length-1)!=="\\"){X[1]=(X[1]||"").replace(/\\/g,"");Z=I.find[Y](X,T,ab);if(Z!=null){aa=aa.replace(I.match[Y],"");break}}}}if(!Z){Z=T.getElementsByTagName("*")}return{set:Z,expr:aa}};F.filter=function(ad,ac,ag,W){var V=ad,ai=[],aa=ac,Y,T,Z=ac&&ac[0]&&Q(ac[0]);while(ad&&ac.length){for(var ab in I.filter){if((Y=I.match[ab].exec(ad))!=null){var U=I.filter[ab],ah,af;T=false;if(aa==ai){ai=[]}if(I.preFilter[ab]){Y=I.preFilter[ab](Y,aa,ag,ai,W,Z);if(!Y){T=ah=true}else{if(Y===true){continue}}}if(Y){for(var X=0;(af=aa[X])!=null;X++){if(af){ah=U(af,Y,X,aa);var ae=W^!!ah;if(ag&&ah!=null){if(ae){T=true}else{aa[X]=false}}else{if(ae){ai.push(af);T=true}}}}}if(ah!==g){if(!ag){aa=ai}ad=ad.replace(I.match[ab],"");if(!T){return[]}break}}}if(ad==V){if(T==null){throw"Syntax error, unrecognized expression: "+ad}else{break}}V=ad}return aa};var I=F.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(T){return T.getAttribute("href")}},relative:{"+":function(aa,T,Z){var X=typeof T==="string",ab=X&&!/\W/.test(T),Y=X&&!ab;if(ab&&!Z){T=T.toUpperCase()}for(var W=0,V=aa.length,U;W<V;W++){if((U=aa[W])){while((U=U.previousSibling)&&U.nodeType!==1){}aa[W]=Y||U&&U.nodeName===T?U||false:U===T}}if(Y){F.filter(T,aa,true)}},">":function(Z,U,aa){var X=typeof U==="string";if(X&&!/\W/.test(U)){U=aa?U:U.toUpperCase();for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){var W=Y.parentNode;Z[V]=W.nodeName===U?W:false}}}else{for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){Z[V]=X?Y.parentNode:Y.parentNode===U}}if(X){F.filter(U,Z,true)}}},"":function(W,U,Y){var V=L++,T=S;if(!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("parentNode",U,V,W,X,Y)},"~":function(W,U,Y){var V=L++,T=S;if(typeof U==="string"&&!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("previousSibling",U,V,W,X,Y)}},find:{ID:function(U,V,W){if(typeof V.getElementById!=="undefined"&&!W){var T=V.getElementById(U[1]);return T?[T]:[]}},NAME:function(V,Y,Z){if(typeof Y.getElementsByName!=="undefined"){var U=[],X=Y.getElementsByName(V[1]);for(var W=0,T=X.length;W<T;W++){if(X[W].getAttribute("name")===V[1]){U.push(X[W])}}return U.length===0?null:U}},TAG:function(T,U){return U.getElementsByTagName(T[1])}},preFilter:{CLASS:function(W,U,V,T,Z,aa){W=" "+W[1].replace(/\\/g,"")+" ";if(aa){return W}for(var X=0,Y;(Y=U[X])!=null;X++){if(Y){if(Z^(Y.className&&(" "+Y.className+" ").indexOf(W)>=0)){if(!V){T.push(Y)}}else{if(V){U[X]=false}}}}return false},ID:function(T){return T[1].replace(/\\/g,"")},TAG:function(U,T){for(var V=0;T[V]===false;V++){}return T[V]&&Q(T[V])?U[1]:U[1].toUpperCase()},CHILD:function(T){if(T[1]=="nth"){var U=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(T[2]=="even"&&"2n"||T[2]=="odd"&&"2n+1"||!/\D/.test(T[2])&&"0n+"+T[2]||T[2]);T[2]=(U[1]+(U[2]||1))-0;T[3]=U[3]-0}T[0]=L++;return T},ATTR:function(X,U,V,T,Y,Z){var W=X[1].replace(/\\/g,"");if(!Z&&I.attrMap[W]){X[1]=I.attrMap[W]}if(X[2]==="~="){X[4]=" "+X[4]+" "}return X},PSEUDO:function(X,U,V,T,Y){if(X[1]==="not"){if(X[3].match(R).length>1||/^\w/.test(X[3])){X[3]=F(X[3],null,null,U)}else{var W=F.filter(X[3],U,V,true^Y);if(!V){T.push.apply(T,W)}return false}}else{if(I.match.POS.test(X[0])||I.match.CHILD.test(X[0])){return true}}return X},POS:function(T){T.unshift(true);return T}},filters:{enabled:function(T){return T.disabled===false&&T.type!=="hidden"},disabled:function(T){return T.disabled===true},checked:function(T){return T.checked===true},selected:function(T){T.parentNode.selectedIndex;return T.selected===true},parent:function(T){return !!T.firstChild},empty:function(T){return !T.firstChild},has:function(V,U,T){return !!F(T[3],V).length},header:function(T){return/h\d/i.test(T.nodeName)},text:function(T){return"text"===T.type},radio:function(T){return"radio"===T.type},checkbox:function(T){return"checkbox"===T.type},file:function(T){return"file"===T.type},password:function(T){return"password"===T.type},submit:function(T){return"submit"===T.type},image:function(T){return"image"===T.type},reset:function(T){return"reset"===T.type},button:function(T){return"button"===T.type||T.nodeName.toUpperCase()==="BUTTON"},input:function(T){return/input|select|textarea|button/i.test(T.nodeName)}},setFilters:{first:function(U,T){return T===0},last:function(V,U,T,W){return U===W.length-1},even:function(U,T){return T%2===0},odd:function(U,T){return T%2===1},lt:function(V,U,T){return U<T[3]-0},gt:function(V,U,T){return U>T[3]-0},nth:function(V,U,T){return T[3]-0==U},eq:function(V,U,T){return T[3]-0==U}},filter:{PSEUDO:function(Z,V,W,aa){var U=V[1],X=I.filters[U];if(X){return X(Z,W,V,aa)}else{if(U==="contains"){return(Z.textContent||Z.innerText||"").indexOf(V[3])>=0}else{if(U==="not"){var Y=V[3];for(var W=0,T=Y.length;W<T;W++){if(Y[W]===Z){return false}}return true}}}},CHILD:function(T,W){var Z=W[1],U=T;switch(Z){case"only":case"first":while(U=U.previousSibling){if(U.nodeType===1){return false}}if(Z=="first"){return true}U=T;case"last":while(U=U.nextSibling){if(U.nodeType===1){return false}}return true;case"nth":var V=W[2],ac=W[3];if(V==1&&ac==0){return true}var Y=W[0],ab=T.parentNode;if(ab&&(ab.sizcache!==Y||!T.nodeIndex)){var X=0;for(U=ab.firstChild;U;U=U.nextSibling){if(U.nodeType===1){U.nodeIndex=++X}}ab.sizcache=Y}var aa=T.nodeIndex-ac;if(V==0){return aa==0}else{return(aa%V==0&&aa/V>=0)}}},ID:function(U,T){return U.nodeType===1&&U.getAttribute("id")===T},TAG:function(U,T){return(T==="*"&&U.nodeType===1)||U.nodeName===T},CLASS:function(U,T){return(" "+(U.className||U.getAttribute("class"))+" ").indexOf(T)>-1},ATTR:function(Y,W){var V=W[1],T=I.attrHandle[V]?I.attrHandle[V](Y):Y[V]!=null?Y[V]:Y.getAttribute(V),Z=T+"",X=W[2],U=W[4];return T==null?X==="!=":X==="="?Z===U:X==="*="?Z.indexOf(U)>=0:X==="~="?(" "+Z+" ").indexOf(U)>=0:!U?Z&&T!==false:X==="!="?Z!=U:X==="^="?Z.indexOf(U)===0:X==="$="?Z.substr(Z.length-U.length)===U:X==="|="?Z===U||Z.substr(0,U.length+1)===U+"-":false},POS:function(X,U,V,Y){var T=U[2],W=I.setFilters[T];if(W){return W(X,V,U,Y)}}}};var M=I.match.POS;for(var O in I.match){I.match[O]=RegExp(I.match[O].source+/(?![^\[]*\])(?![^\(]*\))/.source)}var E=function(U,T){U=Array.prototype.slice.call(U);if(T){T.push.apply(T,U);return T}return U};try{Array.prototype.slice.call(document.documentElement.childNodes)}catch(N){E=function(X,W){var U=W||[];if(H.call(X)==="[object Array]"){Array.prototype.push.apply(U,X)}else{if(typeof X.length==="number"){for(var V=0,T=X.length;V<T;V++){U.push(X[V])}}else{for(var V=0;X[V];V++){U.push(X[V])}}}return U}}var G;if(document.documentElement.compareDocumentPosition){G=function(U,T){var V=U.compareDocumentPosition(T)&4?-1:U===T?0:1;if(V===0){hasDuplicate=true}return V}}else{if("sourceIndex" in document.documentElement){G=function(U,T){var V=U.sourceIndex-T.sourceIndex;if(V===0){hasDuplicate=true}return V}}else{if(document.createRange){G=function(W,U){var V=W.ownerDocument.createRange(),T=U.ownerDocument.createRange();V.selectNode(W);V.collapse(true);T.selectNode(U);T.collapse(true);var X=V.compareBoundaryPoints(Range.START_TO_END,T);if(X===0){hasDuplicate=true}return X}}}}(function(){var U=document.createElement("form"),V="script"+(new Date).getTime();U.innerHTML="<input name='"+V+"'/>";var T=document.documentElement;T.insertBefore(U,T.firstChild);if(!!document.getElementById(V)){I.find.ID=function(X,Y,Z){if(typeof Y.getElementById!=="undefined"&&!Z){var W=Y.getElementById(X[1]);return W?W.id===X[1]||typeof W.getAttributeNode!=="undefined"&&W.getAttributeNode("id").nodeValue===X[1]?[W]:g:[]}};I.filter.ID=function(Y,W){var X=typeof Y.getAttributeNode!=="undefined"&&Y.getAttributeNode("id");return Y.nodeType===1&&X&&X.nodeValue===W}}T.removeChild(U)})();(function(){var T=document.createElement("div");T.appendChild(document.createComment(""));if(T.getElementsByTagName("*").length>0){I.find.TAG=function(U,Y){var X=Y.getElementsByTagName(U[1]);if(U[1]==="*"){var W=[];for(var V=0;X[V];V++){if(X[V].nodeType===1){W.push(X[V])}}X=W}return X}}T.innerHTML="<a href='#'></a>";if(T.firstChild&&typeof T.firstChild.getAttribute!=="undefined"&&T.firstChild.getAttribute("href")!=="#"){I.attrHandle.href=function(U){return U.getAttribute("href",2)}}})();if(document.querySelectorAll){(function(){var T=F,U=document.createElement("div");U.innerHTML="<p class='TEST'></p>";if(U.querySelectorAll&&U.querySelectorAll(".TEST").length===0){return}F=function(Y,X,V,W){X=X||document;if(!W&&X.nodeType===9&&!Q(X)){try{return E(X.querySelectorAll(Y),V)}catch(Z){}}return T(Y,X,V,W)};F.find=T.find;F.filter=T.filter;F.selectors=T.selectors;F.matches=T.matches})()}if(document.getElementsByClassName&&document.documentElement.getElementsByClassName){(function(){var T=document.createElement("div");T.innerHTML="<div class='test e'></div><div class='test'></div>";if(T.getElementsByClassName("e").length===0){return}T.lastChild.className="e";if(T.getElementsByClassName("e").length===1){return}I.order.splice(1,0,"CLASS");I.find.CLASS=function(U,V,W){if(typeof V.getElementsByClassName!=="undefined"&&!W){return V.getElementsByClassName(U[1])}}})()}function P(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1&&!ac){T.sizcache=Y;T.sizset=W}if(T.nodeName===Z){X=T;break}T=T[U]}ad[W]=X}}}function S(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1){if(!ac){T.sizcache=Y;T.sizset=W}if(typeof Z!=="string"){if(T===Z){X=true;break}}else{if(F.filter(Z,[T]).length>0){X=T;break}}}T=T[U]}ad[W]=X}}}var K=document.compareDocumentPosition?function(U,T){return U.compareDocumentPosition(T)&16}:function(U,T){return U!==T&&(U.contains?U.contains(T):true)};var Q=function(T){return T.nodeType===9&&T.documentElement.nodeName!=="HTML"||!!T.ownerDocument&&Q(T.ownerDocument)};var J=function(T,aa){var W=[],X="",Y,V=aa.nodeType?[aa]:aa;while((Y=I.match.PSEUDO.exec(T))){X+=Y[0];T=T.replace(I.match.PSEUDO,"")}T=I.relative[T]?T+"*":T;for(var Z=0,U=V.length;Z<U;Z++){F(T,V[Z],W)}return F.filter(X,W)};o.find=F;o.filter=F.filter;o.expr=F.selectors;o.expr[":"]=o.expr.filters;F.selectors.filters.hidden=function(T){return T.offsetWidth===0||T.offsetHeight===0};F.selectors.filters.visible=function(T){return T.offsetWidth>0||T.offsetHeight>0};F.selectors.filters.animated=function(T){return o.grep(o.timers,function(U){return T===U.elem}).length};o.multiFilter=function(V,T,U){if(U){V=":not("+V+")"}return F.matches(V,T)};o.dir=function(V,U){var T=[],W=V[U];while(W&&W!=document){if(W.nodeType==1){T.push(W)}W=W[U]}return T};o.nth=function(X,T,V,W){T=T||1;var U=0;for(;X;X=X[V]){if(X.nodeType==1&&++U==T){break}}return X};o.sibling=function(V,U){var T=[];for(;V;V=V.nextSibling){if(V.nodeType==1&&V!=U){T.push(V)}}return T};return;l.Sizzle=F})();o.event={add:function(I,F,H,K){if(I.nodeType==3||I.nodeType==8){return}if(I.setInterval&&I!=l){I=l}if(!H.guid){H.guid=this.guid++}if(K!==g){var G=H;H=this.proxy(G);H.data=K}var E=o.data(I,"events")||o.data(I,"events",{}),J=o.data(I,"handle")||o.data(I,"handle",function(){return typeof o!=="undefined"&&!o.event.triggered?o.event.handle.apply(arguments.callee.elem,arguments):g});J.elem=I;o.each(F.split(/\s+/),function(M,N){var O=N.split(".");N=O.shift();H.type=O.slice().sort().join(".");var L=E[N];if(o.event.specialAll[N]){o.event.specialAll[N].setup.call(I,K,O)}if(!L){L=E[N]={};if(!o.event.special[N]||o.event.special[N].setup.call(I,K,O)===false){if(I.addEventListener){I.addEventListener(N,J,false)}else{if(I.attachEvent){I.attachEvent("on"+N,J)}}}}L[H.guid]=H;o.event.global[N]=true});I=null},guid:1,global:{},remove:function(K,H,J){if(K.nodeType==3||K.nodeType==8){return}var G=o.data(K,"events"),F,E;if(G){if(H===g||(typeof H==="string"&&H.charAt(0)==".")){for(var I in G){this.remove(K,I+(H||""))}}else{if(H.type){J=H.handler;H=H.type}o.each(H.split(/\s+/),function(M,O){var Q=O.split(".");O=Q.shift();var N=RegExp("(^|\\.)"+Q.slice().sort().join(".*\\.")+"(\\.|$)");if(G[O]){if(J){delete G[O][J.guid]}else{for(var P in G[O]){if(N.test(G[O][P].type)){delete G[O][P]}}}if(o.event.specialAll[O]){o.event.specialAll[O].teardown.call(K,Q)}for(F in G[O]){break}if(!F){if(!o.event.special[O]||o.event.special[O].teardown.call(K,Q)===false){if(K.removeEventListener){K.removeEventListener(O,o.data(K,"handle"),false)}else{if(K.detachEvent){K.detachEvent("on"+O,o.data(K,"handle"))}}}F=null;delete G[O]}}})}for(F in G){break}if(!F){var L=o.data(K,"handle");if(L){L.elem=null}o.removeData(K,"events");o.removeData(K,"handle")}}},trigger:function(I,K,H,E){var G=I.type||I;if(!E){I=typeof I==="object"?I[h]?I:o.extend(o.Event(G),I):o.Event(G);if(G.indexOf("!")>=0){I.type=G=G.slice(0,-1);I.exclusive=true}if(!H){I.stopPropagation();if(this.global[G]){o.each(o.cache,function(){if(this.events&&this.events[G]){o.event.trigger(I,K,this.handle.elem)}})}}if(!H||H.nodeType==3||H.nodeType==8){return g}I.result=g;I.target=H;K=o.makeArray(K);K.unshift(I)}I.currentTarget=H;var J=o.data(H,"handle");if(J){J.apply(H,K)}if((!H[G]||(o.nodeName(H,"a")&&G=="click"))&&H["on"+G]&&H["on"+G].apply(H,K)===false){I.result=false}if(!E&&H[G]&&!I.isDefaultPrevented()&&!(o.nodeName(H,"a")&&G=="click")){this.triggered=true;try{H[G]()}catch(L){}}this.triggered=false;if(!I.isPropagationStopped()){var F=H.parentNode||H.ownerDocument;if(F){o.event.trigger(I,K,F,true)}}},handle:function(K){var J,E;K=arguments[0]=o.event.fix(K||l.event);K.currentTarget=this;var L=K.type.split(".");K.type=L.shift();J=!L.length&&!K.exclusive;var I=RegExp("(^|\\.)"+L.slice().sort().join(".*\\.")+"(\\.|$)");E=(o.data(this,"events")||{})[K.type];for(var G in E){var H=E[G];if(J||I.test(H.type)){K.handler=H;K.data=H.data;var F=H.apply(this,arguments);if(F!==g){K.result=F;if(F===false){K.preventDefault();K.stopPropagation()}}if(K.isImmediatePropagationStopped()){break}}}},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(H){if(H[h]){return H}var F=H;H=o.Event(F);for(var G=this.props.length,J;G;){J=this.props[--G];H[J]=F[J]}if(!H.target){H.target=H.srcElement||document}if(H.target.nodeType==3){H.target=H.target.parentNode}if(!H.relatedTarget&&H.fromElement){H.relatedTarget=H.fromElement==H.target?H.toElement:H.fromElement}if(H.pageX==null&&H.clientX!=null){var I=document.documentElement,E=document.body;H.pageX=H.clientX+(I&&I.scrollLeft||E&&E.scrollLeft||0)-(I.clientLeft||0);H.pageY=H.clientY+(I&&I.scrollTop||E&&E.scrollTop||0)-(I.clientTop||0)}if(!H.which&&((H.charCode||H.charCode===0)?H.charCode:H.keyCode)){H.which=H.charCode||H.keyCode}if(!H.metaKey&&H.ctrlKey){H.metaKey=H.ctrlKey}if(!H.which&&H.button){H.which=(H.button&1?1:(H.button&2?3:(H.button&4?2:0)))}return H},proxy:function(F,E){E=E||function(){return F.apply(this,arguments)};E.guid=F.guid=F.guid||E.guid||this.guid++;return E},special:{ready:{setup:B,teardown:function(){}}},specialAll:{live:{setup:function(E,F){o.event.add(this,F[0],c)},teardown:function(G){if(G.length){var E=0,F=RegExp("(^|\\.)"+G[0]+"(\\.|$)");o.each((o.data(this,"events").live||{}),function(){if(F.test(this.type)){E++}});if(E<1){o.event.remove(this,G[0],c)}}}}}};o.Event=function(E){if(!this.preventDefault){return new o.Event(E)}if(E&&E.type){this.originalEvent=E;this.type=E.type}else{this.type=E}this.timeStamp=e();this[h]=true};function k(){return false}function u(){return true}o.Event.prototype={preventDefault:function(){this.isDefaultPrevented=u;var E=this.originalEvent;if(!E){return}if(E.preventDefault){E.preventDefault()}E.returnValue=false},stopPropagation:function(){this.isPropagationStopped=u;var E=this.originalEvent;if(!E){return}if(E.stopPropagation){E.stopPropagation()}E.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=u;this.stopPropagation()},isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k};var a=function(F){var E=F.relatedTarget;while(E&&E!=this){try{E=E.parentNode}catch(G){E=this}}if(E!=this){F.type=F.data;o.event.handle.apply(this,arguments)}};o.each({mouseover:"mouseenter",mouseout:"mouseleave"},function(F,E){o.event.special[E]={setup:function(){o.event.add(this,F,a,E)},teardown:function(){o.event.remove(this,F,a)}}});o.fn.extend({bind:function(F,G,E){return F=="unload"?this.one(F,G,E):this.each(function(){o.event.add(this,F,E||G,E&&G)})},one:function(G,H,F){var E=o.event.proxy(F||H,function(I){o(this).unbind(I,E);return(F||H).apply(this,arguments)});return this.each(function(){o.event.add(this,G,E,F&&H)})},unbind:function(F,E){return this.each(function(){o.event.remove(this,F,E)})},trigger:function(E,F){return this.each(function(){o.event.trigger(E,F,this)})},triggerHandler:function(E,G){if(this[0]){var F=o.Event(E);F.preventDefault();F.stopPropagation();o.event.trigger(F,G,this[0]);return F.result}},toggle:function(G){var E=arguments,F=1;while(F<E.length){o.event.proxy(G,E[F++])}return this.click(o.event.proxy(G,function(H){this.lastToggle=(this.lastToggle||0)%F;H.preventDefault();return E[this.lastToggle++].apply(this,arguments)||false}))},hover:function(E,F){return this.mouseenter(E).mouseleave(F)},ready:function(E){B();if(o.isReady){E.call(document,o)}else{o.readyList.push(E)}return this},live:function(G,F){var E=o.event.proxy(F);E.guid+=this.selector+G;o(document).bind(i(G,this.selector),this.selector,E);return this},die:function(F,E){o(document).unbind(i(F,this.selector),E?{guid:E.guid+this.selector+F}:null);return this}});function c(H){var E=RegExp("(^|\\.)"+H.type+"(\\.|$)"),G=true,F=[];o.each(o.data(this,"events").live||[],function(I,J){if(E.test(J.type)){var K=o(H.target).closest(J.data)[0];if(K){F.push({elem:K,fn:J})}}});F.sort(function(J,I){return o.data(J.elem,"closest")-o.data(I.elem,"closest")});o.each(F,function(){if(this.fn.call(this.elem,H,this.fn.data)===false){return(G=false)}});return G}function i(F,E){return["live",F,E.replace(/\./g,"`").replace(/ /g,"|")].join(".")}o.extend({isReady:false,readyList:[],ready:function(){if(!o.isReady){o.isReady=true;if(o.readyList){o.each(o.readyList,function(){this.call(document,o)});o.readyList=null}o(document).triggerHandler("ready")}}});var x=false;function B(){if(x){return}x=true;if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false);o.ready()},false)}else{if(document.attachEvent){document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",arguments.callee);o.ready()}});if(document.documentElement.doScroll&&l==l.top){(function(){if(o.isReady){return}try{document.documentElement.doScroll("left")}catch(E){setTimeout(arguments.callee,0);return}o.ready()})()}}}o.event.add(l,"load",o.ready)}o.each(("blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error").split(","),function(F,E){o.fn[E]=function(G){return G?this.bind(E,G):this.trigger(E)}});o(l).bind("unload",function(){for(var E in o.cache){if(E!=1&&o.cache[E].handle){o.event.remove(o.cache[E].handle.elem)}}});(function(){o.support={};var F=document.documentElement,G=document.createElement("script"),K=document.createElement("div"),J="script"+(new Date).getTime();K.style.display="none";K.innerHTML='   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';var H=K.getElementsByTagName("*"),E=K.getElementsByTagName("a")[0];if(!H||!H.length||!E){return}o.support={leadingWhitespace:K.firstChild.nodeType==3,tbody:!K.getElementsByTagName("tbody").length,objectAll:!!K.getElementsByTagName("object")[0].getElementsByTagName("*").length,htmlSerialize:!!K.getElementsByTagName("link").length,style:/red/.test(E.getAttribute("style")),hrefNormalized:E.getAttribute("href")==="/a",opacity:E.style.opacity==="0.5",cssFloat:!!E.style.cssFloat,scriptEval:false,noCloneEvent:true,boxModel:null};G.type="text/javascript";try{G.appendChild(document.createTextNode("window."+J+"=1;"))}catch(I){}F.insertBefore(G,F.firstChild);if(l[J]){o.support.scriptEval=true;delete l[J]}F.removeChild(G);if(K.attachEvent&&K.fireEvent){K.attachEvent("onclick",function(){o.support.noCloneEvent=false;K.detachEvent("onclick",arguments.callee)});K.cloneNode(true).fireEvent("onclick")}o(function(){var L=document.createElement("div");L.style.width=L.style.paddingLeft="1px";document.body.appendChild(L);o.boxModel=o.support.boxModel=L.offsetWidth===2;document.body.removeChild(L).style.display="none"})})();var w=o.support.cssFloat?"cssFloat":"styleFloat";o.props={"for":"htmlFor","class":"className","float":w,cssFloat:w,styleFloat:w,readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",tabindex:"tabIndex"};o.fn.extend({_load:o.fn.load,load:function(G,J,K){if(typeof G!=="string"){return this._load(G)}var I=G.indexOf(" ");if(I>=0){var E=G.slice(I,G.length);G=G.slice(0,I)}var H="GET";if(J){if(o.isFunction(J)){K=J;J=null}else{if(typeof J==="object"){J=o.param(J);H="POST"}}}var F=this;o.ajax({url:G,type:H,dataType:"html",data:J,complete:function(M,L){if(L=="success"||L=="notmodified"){F.html(E?o("<div/>").append(M.responseText.replace(/<script(.|\s)*?\/script>/g,"")).find(E):M.responseText)}if(K){F.each(K,[M.responseText,L,M])}}});return this},serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?o.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||/select|textarea/i.test(this.nodeName)||/text|hidden|password|search/i.test(this.type))}).map(function(E,F){var G=o(this).val();return G==null?null:o.isArray(G)?o.map(G,function(I,H){return{name:F.name,value:I}}):{name:F.name,value:G}}).get()}});o.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),function(E,F){o.fn[F]=function(G){return this.bind(F,G)}});var r=e();o.extend({get:function(E,G,H,F){if(o.isFunction(G)){H=G;G=null}return o.ajax({type:"GET",url:E,data:G,success:H,dataType:F})},getScript:function(E,F){return o.get(E,null,F,"script")},getJSON:function(E,F,G){return o.get(E,F,G,"json")},post:function(E,G,H,F){if(o.isFunction(G)){H=G;G={}}return o.ajax({type:"POST",url:E,data:G,success:H,dataType:F})},ajaxSetup:function(E){o.extend(o.ajaxSettings,E)},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:function(){return l.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest()},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},ajax:function(M){M=o.extend(true,M,o.extend(true,{},o.ajaxSettings,M));var W,F=/=\?(&|$)/g,R,V,G=M.type.toUpperCase();if(M.data&&M.processData&&typeof M.data!=="string"){M.data=o.param(M.data)}if(M.dataType=="jsonp"){if(G=="GET"){if(!M.url.match(F)){M.url+=(M.url.match(/\?/)?"&":"?")+(M.jsonp||"callback")+"=?"}}else{if(!M.data||!M.data.match(F)){M.data=(M.data?M.data+"&":"")+(M.jsonp||"callback")+"=?"}}M.dataType="json"}if(M.dataType=="json"&&(M.data&&M.data.match(F)||M.url.match(F))){W="jsonp"+r++;if(M.data){M.data=(M.data+"").replace(F,"="+W+"$1")}M.url=M.url.replace(F,"="+W+"$1");M.dataType="script";l[W]=function(X){V=X;I();L();l[W]=g;try{delete l[W]}catch(Y){}if(H){H.removeChild(T)}}}if(M.dataType=="script"&&M.cache==null){M.cache=false}if(M.cache===false&&G=="GET"){var E=e();var U=M.url.replace(/(\?|&)_=.*?(&|$)/,"$1_="+E+"$2");M.url=U+((U==M.url)?(M.url.match(/\?/)?"&":"?")+"_="+E:"")}if(M.data&&G=="GET"){M.url+=(M.url.match(/\?/)?"&":"?")+M.data;M.data=null}if(M.global&&!o.active++){o.event.trigger("ajaxStart")}var Q=/^(\w+:)?\/\/([^\/?#]+)/.exec(M.url);if(M.dataType=="script"&&G=="GET"&&Q&&(Q[1]&&Q[1]!=location.protocol||Q[2]!=location.host)){var H=document.getElementsByTagName("head")[0];var T=document.createElement("script");T.src=M.url;if(M.scriptCharset){T.charset=M.scriptCharset}if(!W){var O=false;T.onload=T.onreadystatechange=function(){if(!O&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){O=true;I();L();T.onload=T.onreadystatechange=null;H.removeChild(T)}}}H.appendChild(T);return g}var K=false;var J=M.xhr();if(M.username){J.open(G,M.url,M.async,M.username,M.password)}else{J.open(G,M.url,M.async)}try{if(M.data){J.setRequestHeader("Content-Type",M.contentType)}if(M.ifModified){J.setRequestHeader("If-Modified-Since",o.lastModified[M.url]||"Thu, 01 Jan 1970 00:00:00 GMT")}J.setRequestHeader("X-Requested-With","XMLHttpRequest");J.setRequestHeader("Accept",M.dataType&&M.accepts[M.dataType]?M.accepts[M.dataType]+", */*":M.accepts._default)}catch(S){}if(M.beforeSend&&M.beforeSend(J,M)===false){if(M.global&&!--o.active){o.event.trigger("ajaxStop")}J.abort();return false}if(M.global){o.event.trigger("ajaxSend",[J,M])}var N=function(X){if(J.readyState==0){if(P){clearInterval(P);P=null;if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}}else{if(!K&&J&&(J.readyState==4||X=="timeout")){K=true;if(P){clearInterval(P);P=null}R=X=="timeout"?"timeout":!o.httpSuccess(J)?"error":M.ifModified&&o.httpNotModified(J,M.url)?"notmodified":"success";if(R=="success"){try{V=o.httpData(J,M.dataType,M)}catch(Z){R="parsererror"}}if(R=="success"){var Y;try{Y=J.getResponseHeader("Last-Modified")}catch(Z){}if(M.ifModified&&Y){o.lastModified[M.url]=Y}if(!W){I()}}else{o.handleError(M,J,R)}L();if(X){J.abort()}if(M.async){J=null}}}};if(M.async){var P=setInterval(N,13);if(M.timeout>0){setTimeout(function(){if(J&&!K){N("timeout")}},M.timeout)}}try{J.send(M.data)}catch(S){o.handleError(M,J,null,S)}if(!M.async){N()}function I(){if(M.success){M.success(V,R)}if(M.global){o.event.trigger("ajaxSuccess",[J,M])}}function L(){if(M.complete){M.complete(J,R)}if(M.global){o.event.trigger("ajaxComplete",[J,M])}if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}return J},handleError:function(F,H,E,G){if(F.error){F.error(H,E,G)}if(F.global){o.event.trigger("ajaxError",[H,F,G])}},active:0,httpSuccess:function(F){try{return !F.status&&location.protocol=="file:"||(F.status>=200&&F.status<300)||F.status==304||F.status==1223}catch(E){}return false},httpNotModified:function(G,E){try{var H=G.getResponseHeader("Last-Modified");return G.status==304||H==o.lastModified[E]}catch(F){}return false},httpData:function(J,H,G){var F=J.getResponseHeader("content-type"),E=H=="xml"||!H&&F&&F.indexOf("xml")>=0,I=E?J.responseXML:J.responseText;if(E&&I.documentElement.tagName=="parsererror"){throw"parsererror"}if(G&&G.dataFilter){I=G.dataFilter(I,H)}if(typeof I==="string"){if(H=="script"){o.globalEval(I)}if(H=="json"){I=l["eval"]("("+I+")")}}return I},param:function(E){var G=[];function H(I,J){G[G.length]=encodeURIComponent(I)+"="+encodeURIComponent(J)}if(o.isArray(E)||E.jquery){o.each(E,function(){H(this.name,this.value)})}else{for(var F in E){if(o.isArray(E[F])){o.each(E[F],function(){H(F,this)})}else{H(F,o.isFunction(E[F])?E[F]():E[F])}}}return G.join("&").replace(/%20/g,"+")}});var m={},n,d=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];function t(F,E){var G={};o.each(d.concat.apply([],d.slice(0,E)),function(){G[this]=F});return G}o.fn.extend({show:function(J,L){if(J){return this.animate(t("show",3),J,L)}else{for(var H=0,F=this.length;H<F;H++){var E=o.data(this[H],"olddisplay");this[H].style.display=E||"";if(o.css(this[H],"display")==="none"){var G=this[H].tagName,K;if(m[G]){K=m[G]}else{var I=o("<"+G+" />").appendTo("body");K=I.css("display");if(K==="none"){K="block"}I.remove();m[G]=K}o.data(this[H],"olddisplay",K)}}for(var H=0,F=this.length;H<F;H++){this[H].style.display=o.data(this[H],"olddisplay")||""}return this}},hide:function(H,I){if(H){return this.animate(t("hide",3),H,I)}else{for(var G=0,F=this.length;G<F;G++){var E=o.data(this[G],"olddisplay");if(!E&&E!=="none"){o.data(this[G],"olddisplay",o.css(this[G],"display"))}}for(var G=0,F=this.length;G<F;G++){this[G].style.display="none"}return this}},_toggle:o.fn.toggle,toggle:function(G,F){var E=typeof G==="boolean";return o.isFunction(G)&&o.isFunction(F)?this._toggle.apply(this,arguments):G==null||E?this.each(function(){var H=E?G:o(this).is(":hidden");o(this)[H?"show":"hide"]()}):this.animate(t("toggle",3),G,F)},fadeTo:function(E,G,F){return this.animate({opacity:G},E,F)},animate:function(I,F,H,G){var E=o.speed(F,H,G);return this[E.queue===false?"each":"queue"](function(){var K=o.extend({},E),M,L=this.nodeType==1&&o(this).is(":hidden"),J=this;for(M in I){if(I[M]=="hide"&&L||I[M]=="show"&&!L){return K.complete.call(this)}if((M=="height"||M=="width")&&this.style){K.display=o.css(this,"display");K.overflow=this.style.overflow}}if(K.overflow!=null){this.style.overflow="hidden"}K.curAnim=o.extend({},I);o.each(I,function(O,S){var R=new o.fx(J,K,O);if(/toggle|show|hide/.test(S)){R[S=="toggle"?L?"show":"hide":S](I)}else{var Q=S.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),T=R.cur(true)||0;if(Q){var N=parseFloat(Q[2]),P=Q[3]||"px";if(P!="px"){J.style[O]=(N||1)+P;T=((N||1)/R.cur(true))*T;J.style[O]=T+P}if(Q[1]){N=((Q[1]=="-="?-1:1)*N)+T}R.custom(T,N,P)}else{R.custom(T,S,"")}}});return true})},stop:function(F,E){var G=o.timers;if(F){this.queue([])}this.each(function(){for(var H=G.length-1;H>=0;H--){if(G[H].elem==this){if(E){G[H](true)}G.splice(H,1)}}});if(!E){this.dequeue()}return this}});o.each({slideDown:t("show",1),slideUp:t("hide",1),slideToggle:t("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(E,F){o.fn[E]=function(G,H){return this.animate(F,G,H)}});o.extend({speed:function(G,H,F){var E=typeof G==="object"?G:{complete:F||!F&&H||o.isFunction(G)&&G,duration:G,easing:F&&H||H&&!o.isFunction(H)&&H};E.duration=o.fx.off?0:typeof E.duration==="number"?E.duration:o.fx.speeds[E.duration]||o.fx.speeds._default;E.old=E.complete;E.complete=function(){if(E.queue!==false){o(this).dequeue()}if(o.isFunction(E.old)){E.old.call(this)}};return E},easing:{linear:function(G,H,E,F){return E+F*G},swing:function(G,H,E,F){return((-Math.cos(G*Math.PI)/2)+0.5)*F+E}},timers:[],fx:function(F,E,G){this.options=E;this.elem=F;this.prop=G;if(!E.orig){E.orig={}}}});o.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)}(o.fx.step[this.prop]||o.fx.step._default)(this);if((this.prop=="height"||this.prop=="width")&&this.elem.style){this.elem.style.display="block"}},cur:function(F){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]}var E=parseFloat(o.css(this.elem,this.prop,F));return E&&E>-10000?E:parseFloat(o.curCSS(this.elem,this.prop))||0},custom:function(I,H,G){this.startTime=e();this.start=I;this.end=H;this.unit=G||this.unit||"px";this.now=this.start;this.pos=this.state=0;var E=this;function F(J){return E.step(J)}F.elem=this.elem;if(F()&&o.timers.push(F)&&!n){n=setInterval(function(){var K=o.timers;for(var J=0;J<K.length;J++){if(!K[J]()){K.splice(J--,1)}}if(!K.length){clearInterval(n);n=g}},13)}},show:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.show=true;this.custom(this.prop=="width"||this.prop=="height"?1:0,this.cur());o(this.elem).show()},hide:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(H){var G=e();if(H||G>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;var E=true;for(var F in this.options.curAnim){if(this.options.curAnim[F]!==true){E=false}}if(E){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;this.elem.style.display=this.options.display;if(o.css(this.elem,"display")=="none"){this.elem.style.display="block"}}if(this.options.hide){o(this.elem).hide()}if(this.options.hide||this.options.show){for(var I in this.options.curAnim){o.attr(this.elem.style,I,this.options.orig[I])}}this.options.complete.call(this.elem)}return false}else{var J=G-this.startTime;this.state=J/this.options.duration;this.pos=o.easing[this.options.easing||(o.easing.swing?"swing":"linear")](this.state,J,0,1,this.options.duration);this.now=this.start+((this.end-this.start)*this.pos);this.update()}return true}};o.extend(o.fx,{speeds:{slow:600,fast:200,_default:400},step:{opacity:function(E){o.attr(E.elem.style,"opacity",E.now)},_default:function(E){if(E.elem.style&&E.elem.style[E.prop]!=null){E.elem.style[E.prop]=E.now+E.unit}else{E.elem[E.prop]=E.now}}}});if(document.documentElement.getBoundingClientRect){o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}var G=this[0].getBoundingClientRect(),J=this[0].ownerDocument,F=J.body,E=J.documentElement,L=E.clientTop||F.clientTop||0,K=E.clientLeft||F.clientLeft||0,I=G.top+(self.pageYOffset||o.boxModel&&E.scrollTop||F.scrollTop)-L,H=G.left+(self.pageXOffset||o.boxModel&&E.scrollLeft||F.scrollLeft)-K;return{top:I,left:H}}}else{o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}o.offset.initialized||o.offset.initialize();var J=this[0],G=J.offsetParent,F=J,O=J.ownerDocument,M,H=O.documentElement,K=O.body,L=O.defaultView,E=L.getComputedStyle(J,null),N=J.offsetTop,I=J.offsetLeft;while((J=J.parentNode)&&J!==K&&J!==H){M=L.getComputedStyle(J,null);N-=J.scrollTop,I-=J.scrollLeft;if(J===G){N+=J.offsetTop,I+=J.offsetLeft;if(o.offset.doesNotAddBorder&&!(o.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(J.tagName))){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}F=G,G=J.offsetParent}if(o.offset.subtractsBorderForOverflowNotVisible&&M.overflow!=="visible"){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}E=M}if(E.position==="relative"||E.position==="static"){N+=K.offsetTop,I+=K.offsetLeft}if(E.position==="fixed"){N+=Math.max(H.scrollTop,K.scrollTop),I+=Math.max(H.scrollLeft,K.scrollLeft)}return{top:N,left:I}}}o.offset={initialize:function(){if(this.initialized){return}var L=document.body,F=document.createElement("div"),H,G,N,I,M,E,J=L.style.marginTop,K='<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';M={position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"};for(E in M){F.style[E]=M[E]}F.innerHTML=K;L.insertBefore(F,L.firstChild);H=F.firstChild,G=H.firstChild,I=H.nextSibling.firstChild.firstChild;this.doesNotAddBorder=(G.offsetTop!==5);this.doesAddBorderForTableAndCells=(I.offsetTop===5);H.style.overflow="hidden",H.style.position="relative";this.subtractsBorderForOverflowNotVisible=(G.offsetTop===-5);L.style.marginTop="1px";this.doesNotIncludeMarginInBodyOffset=(L.offsetTop===0);L.style.marginTop=J;L.removeChild(F);this.initialized=true},bodyOffset:function(E){o.offset.initialized||o.offset.initialize();var G=E.offsetTop,F=E.offsetLeft;if(o.offset.doesNotIncludeMarginInBodyOffset){G+=parseInt(o.curCSS(E,"marginTop",true),10)||0,F+=parseInt(o.curCSS(E,"marginLeft",true),10)||0}return{top:G,left:F}}};o.fn.extend({position:function(){var I=0,H=0,F;if(this[0]){var G=this.offsetParent(),J=this.offset(),E=/^body|html$/i.test(G[0].tagName)?{top:0,left:0}:G.offset();J.top-=j(this,"marginTop");J.left-=j(this,"marginLeft");E.top+=j(G,"borderTopWidth");E.left+=j(G,"borderLeftWidth");F={top:J.top-E.top,left:J.left-E.left}}return F},offsetParent:function(){var E=this[0].offsetParent||document.body;while(E&&(!/^body|html$/i.test(E.tagName)&&o.css(E,"position")=="static")){E=E.offsetParent}return o(E)}});o.each(["Left","Top"],function(F,E){var G="scroll"+E;o.fn[G]=function(H){if(!this[0]){return null}return H!==g?this.each(function(){this==l||this==document?l.scrollTo(!F?H:o(l).scrollLeft(),F?H:o(l).scrollTop()):this[G]=H}):this[0]==l||this[0]==document?self[F?"pageYOffset":"pageXOffset"]||o.boxModel&&document.documentElement[G]||document.body[G]:this[0][G]}});o.each(["Height","Width"],function(I,G){var E=I?"Left":"Top",H=I?"Right":"Bottom",F=G.toLowerCase();o.fn["inner"+G]=function(){return this[0]?o.css(this[0],F,false,"padding"):null};o.fn["outer"+G]=function(K){return this[0]?o.css(this[0],F,false,K?"margin":"border"):null};var J=G.toLowerCase();o.fn[J]=function(K){return this[0]==l?document.compatMode=="CSS1Compat"&&document.documentElement["client"+G]||document.body["client"+G]:this[0]==document?Math.max(document.documentElement["client"+G],document.body["scroll"+G],document.documentElement["scroll"+G],document.body["offset"+G],document.documentElement["offset"+G]):K===g?(this.length?o.css(this[0],J):null):this.css(J,typeof K==="string"?K:K+"px")}})})();;
// remember to update jquery include in /iphone/index.htm for new versions
/*
 * jQuery UI 1.7.1
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI
 */jQuery.ui||(function(c){var i=c.fn.remove,d=c.browser.mozilla&&(parseFloat(c.browser.version)<1.9);c.ui={version:"1.7.1",plugin:{add:function(k,l,n){var m=c.ui[k].prototype;for(var j in n){m.plugins[j]=m.plugins[j]||[];m.plugins[j].push([l,n[j]])}},call:function(j,l,k){var n=j.plugins[l];if(!n||!j.element[0].parentNode){return}for(var m=0;m<n.length;m++){if(j.options[n[m][0]]){n[m][1].apply(j.element,k)}}}},contains:function(k,j){return document.compareDocumentPosition?k.compareDocumentPosition(j)&16:k!==j&&k.contains(j)},hasScroll:function(m,k){if(c(m).css("overflow")=="hidden"){return false}var j=(k&&k=="left")?"scrollLeft":"scrollTop",l=false;if(m[j]>0){return true}m[j]=1;l=(m[j]>0);m[j]=0;return l},isOverAxis:function(k,j,l){return(k>j)&&(k<(j+l))},isOver:function(o,k,n,m,j,l){return c.ui.isOverAxis(o,n,j)&&c.ui.isOverAxis(k,m,l)},keyCode:{BACKSPACE:8,CAPS_LOCK:20,COMMA:188,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38}};if(d){var f=c.attr,e=c.fn.removeAttr,h="http://www.w3.org/2005/07/aaa",a=/^aria-/,b=/^wairole:/;c.attr=function(k,j,l){var m=l!==undefined;return(j=="role"?(m?f.call(this,k,j,"wairole:"+l):(f.apply(this,arguments)||"").replace(b,"")):(a.test(j)?(m?k.setAttributeNS(h,j.replace(a,"aaa:"),l):f.call(this,k,j.replace(a,"aaa:"))):f.apply(this,arguments)))};c.fn.removeAttr=function(j){return(a.test(j)?this.each(function(){this.removeAttributeNS(h,j.replace(a,""))}):e.call(this,j))}}c.fn.extend({remove:function(){c("*",this).add(this).each(function(){c(this).triggerHandler("remove")});return i.apply(this,arguments)},enableSelection:function(){return this.attr("unselectable","off").css("MozUserSelect","").unbind("selectstart.ui")},disableSelection:function(){return this.attr("unselectable","on").css("MozUserSelect","none").bind("selectstart.ui",function(){return false})},scrollParent:function(){var j;if((c.browser.msie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){j=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(c.curCSS(this,"position",1))&&(/(auto|scroll)/).test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0)}else{j=this.parents().filter(function(){return(/(auto|scroll)/).test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0)}return(/fixed/).test(this.css("position"))||!j.length?c(document):j}});c.extend(c.expr[":"],{data:function(l,k,j){return !!c.data(l,j[3])},focusable:function(k){var l=k.nodeName.toLowerCase(),j=c.attr(k,"tabindex");return(/input|select|textarea|button|object/.test(l)?!k.disabled:"a"==l||"area"==l?k.href||!isNaN(j):!isNaN(j))&&!c(k)["area"==l?"parents":"closest"](":hidden").length},tabbable:function(k){var j=c.attr(k,"tabindex");return(isNaN(j)||j>=0)&&c(k).is(":focusable")}});function g(m,n,o,l){function k(q){var p=c[m][n][q]||[];return(typeof p=="string"?p.split(/,?\s+/):p)}var j=k("getter");if(l.length==1&&typeof l[0]=="string"){j=j.concat(k("getterSetter"))}return(c.inArray(o,j)!=-1)}c.widget=function(k,j){var l=k.split(".")[0];k=k.split(".")[1];c.fn[k]=function(p){var n=(typeof p=="string"),o=Array.prototype.slice.call(arguments,1);if(n&&p.substring(0,1)=="_"){return this}if(n&&g(l,k,p,o)){var m=c.data(this[0],k);return(m?m[p].apply(m,o):undefined)}return this.each(function(){var q=c.data(this,k);(!q&&!n&&c.data(this,k,new c[l][k](this,p))._init());(q&&n&&c.isFunction(q[p])&&q[p].apply(q,o))})};c[l]=c[l]||{};c[l][k]=function(o,n){var m=this;this.namespace=l;this.widgetName=k;this.widgetEventPrefix=c[l][k].eventPrefix||k;this.widgetBaseClass=l+"-"+k;this.options=c.extend({},c.widget.defaults,c[l][k].defaults,c.metadata&&c.metadata.get(o)[k],n);this.element=c(o).bind("setData."+k,function(q,p,r){if(q.target==o){return m._setData(p,r)}}).bind("getData."+k,function(q,p){if(q.target==o){return m._getData(p)}}).bind("remove",function(){return m.destroy()})};c[l][k].prototype=c.extend({},c.widget.prototype,j);c[l][k].getterSetter="option"};c.widget.prototype={_init:function(){},destroy:function(){this.element.removeData(this.widgetName).removeClass(this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").removeAttr("aria-disabled")},option:function(l,m){var k=l,j=this;if(typeof l=="string"){if(m===undefined){return this._getData(l)}k={};k[l]=m}c.each(k,function(n,o){j._setData(n,o)})},_getData:function(j){return this.options[j]},_setData:function(j,k){this.options[j]=k;if(j=="disabled"){this.element[k?"addClass":"removeClass"](this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").attr("aria-disabled",k)}},enable:function(){this._setData("disabled",false)},disable:function(){this._setData("disabled",true)},_trigger:function(l,m,n){var p=this.options[l],j=(l==this.widgetEventPrefix?l:this.widgetEventPrefix+l);m=c.Event(m);m.type=j;if(m.originalEvent){for(var k=c.event.props.length,o;k;){o=c.event.props[--k];m[o]=m.originalEvent[o]}}this.element.trigger(m,n);return !(c.isFunction(p)&&p.call(this.element[0],m,n)===false||m.isDefaultPrevented())}};c.widget.defaults={disabled:false};c.ui.mouse={_mouseInit:function(){var j=this;this.element.bind("mousedown."+this.widgetName,function(k){return j._mouseDown(k)}).bind("click."+this.widgetName,function(k){if(j._preventClickEvent){j._preventClickEvent=false;k.stopImmediatePropagation();return false}});if(c.browser.msie){this._mouseUnselectable=this.element.attr("unselectable");this.element.attr("unselectable","on")}this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);(c.browser.msie&&this.element.attr("unselectable",this._mouseUnselectable))},_mouseDown:function(l){l.originalEvent=l.originalEvent||{};if(l.originalEvent.mouseHandled){return}(this._mouseStarted&&this._mouseUp(l));this._mouseDownEvent=l;var k=this,m=(l.which==1),j=(typeof this.options.cancel=="string"?c(l.target).parents().add(l.target).filter(this.options.cancel).length:false);if(!m||j||!this._mouseCapture(l)){return true}this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){k.mouseDelayMet=true},this.options.delay)}if(this._mouseDistanceMet(l)&&this._mouseDelayMet(l)){this._mouseStarted=(this._mouseStart(l)!==false);if(!this._mouseStarted){l.preventDefault();return true}}this._mouseMoveDelegate=function(n){return k._mouseMove(n)};this._mouseUpDelegate=function(n){return k._mouseUp(n)};c(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);(c.browser.safari||l.preventDefault());l.originalEvent.mouseHandled=true;return true},_mouseMove:function(j){if(c.browser.msie&&!j.button){return this._mouseUp(j)}if(this._mouseStarted){this._mouseDrag(j);return j.preventDefault()}if(this._mouseDistanceMet(j)&&this._mouseDelayMet(j)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,j)!==false);(this._mouseStarted?this._mouseDrag(j):this._mouseUp(j))}return !this._mouseStarted},_mouseUp:function(j){c(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;this._preventClickEvent=(j.target==this._mouseDownEvent.target);this._mouseStop(j)}return false},_mouseDistanceMet:function(j){return(Math.max(Math.abs(this._mouseDownEvent.pageX-j.pageX),Math.abs(this._mouseDownEvent.pageY-j.pageY))>=this.options.distance)},_mouseDelayMet:function(j){return this.mouseDelayMet},_mouseStart:function(j){},_mouseDrag:function(j){},_mouseStop:function(j){},_mouseCapture:function(j){return true}};c.ui.mouse.defaults={cancel:null,distance:1,delay:0}})(jQuery);;/*
 * jQuery UI Draggable 1.7.1
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Draggables
 *
 * Depends:
 *	ui.core.js
 */(function(a){a.widget("ui.draggable",a.extend({},a.ui.mouse,{_init:function(){if(this.options.helper=="original"&&!(/^(?:r|a|f)/).test(this.element.css("position"))){this.element[0].style.position="relative"}(this.options.addClasses&&this.element.addClass("ui-draggable"));(this.options.disabled&&this.element.addClass("ui-draggable-disabled"));this._mouseInit()},destroy:function(){if(!this.element.data("draggable")){return}this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy()},_mouseCapture:function(b){var c=this.options;if(this.helper||c.disabled||a(b.target).is(".ui-resizable-handle")){return false}this.handle=this._getHandle(b);if(!this.handle){return false}return true},_mouseStart:function(b){var c=this.options;this.helper=this._createHelper(b);this._cacheHelperProportions();if(a.ui.ddmanager){a.ui.ddmanager.current=this}this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.element.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this._generatePosition(b);this.originalPageX=b.pageX;this.originalPageY=b.pageY;if(c.cursorAt){this._adjustOffsetFromHelper(c.cursorAt)}if(c.containment){this._setContainment()}this._trigger("start",b);this._cacheHelperProportions();if(a.ui.ddmanager&&!c.dropBehaviour){a.ui.ddmanager.prepareOffsets(this,b)}this.helper.addClass("ui-draggable-dragging");this._mouseDrag(b,true);return true},_mouseDrag:function(b,d){this.position=this._generatePosition(b);this.positionAbs=this._convertPositionTo("absolute");if(!d){var c=this._uiHash();this._trigger("drag",b,c);this.position=c.position}if(!this.options.axis||this.options.axis!="y"){this.helper[0].style.left=this.position.left+"px"}if(!this.options.axis||this.options.axis!="x"){this.helper[0].style.top=this.position.top+"px"}if(a.ui.ddmanager){a.ui.ddmanager.drag(this,b)}return false},_mouseStop:function(c){var d=false;if(a.ui.ddmanager&&!this.options.dropBehaviour){d=a.ui.ddmanager.drop(this,c)}if(this.dropped){d=this.dropped;this.dropped=false}if((this.options.revert=="invalid"&&!d)||(this.options.revert=="valid"&&d)||this.options.revert===true||(a.isFunction(this.options.revert)&&this.options.revert.call(this.element,d))){var b=this;a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){b._trigger("stop",c);b._clear()})}else{this._trigger("stop",c);this._clear()}return false},_getHandle:function(b){var c=!this.options.handle||!a(this.options.handle,this.element).length?true:false;a(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==b.target){c=true}});return c},_createHelper:function(c){var d=this.options;var b=a.isFunction(d.helper)?a(d.helper.apply(this.element[0],[c])):(d.helper=="clone"?this.element.clone():this.element);if(!b.parents("body").length){b.appendTo((d.appendTo=="parent"?this.element[0].parentNode:d.appendTo))}if(b[0]!=this.element[0]&&!(/(fixed|absolute)/).test(b.css("position"))){b.css("position","absolute")}return b},_adjustOffsetFromHelper:function(b){if(b.left!=undefined){this.offset.click.left=b.left+this.margins.left}if(b.right!=undefined){this.offset.click.left=this.helperProportions.width-b.right+this.margins.left}if(b.top!=undefined){this.offset.click.top=b.top+this.margins.top}if(b.bottom!=undefined){this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])){b.left+=this.scrollParent.scrollLeft();b.top+=this.scrollParent.scrollTop()}if((this.offsetParent[0]==document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)){b={top:0,left:0}}return{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var b=this.element.position();return{top:b.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:b.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else{return{top:0,left:0}}},_cacheMargins:function(){this.margins={left:(parseInt(this.element.css("marginLeft"),10)||0),top:(parseInt(this.element.css("marginTop"),10)||0)}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e=this.options;if(e.containment=="parent"){e.containment=this.helper[0].parentNode}if(e.containment=="document"||e.containment=="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,a(e.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(a(e.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]}if(!(/^(document|window|parent)$/).test(e.containment)&&e.containment.constructor!=Array){var c=a(e.containment)[0];if(!c){return}var d=a(e.containment).offset();var b=(a(c).css("overflow")!="hidden");this.containment=[d.left+(parseInt(a(c).css("borderLeftWidth"),10)||0)+(parseInt(a(c).css("paddingLeft"),10)||0)-this.margins.left,d.top+(parseInt(a(c).css("borderTopWidth"),10)||0)+(parseInt(a(c).css("paddingTop"),10)||0)-this.margins.top,d.left+(b?Math.max(c.scrollWidth,c.offsetWidth):c.offsetWidth)-(parseInt(a(c).css("borderLeftWidth"),10)||0)-(parseInt(a(c).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,d.top+(b?Math.max(c.scrollHeight,c.offsetHeight):c.offsetHeight)-(parseInt(a(c).css("borderTopWidth"),10)||0)-(parseInt(a(c).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}else{if(e.containment.constructor==Array){this.containment=e.containment}}},_convertPositionTo:function(f,h){if(!h){h=this.position}var c=f=="absolute"?1:-1;var e=this.options,b=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=(/(html|body)/i).test(b[0].tagName);return{top:(h.top+this.offset.relative.top*c+this.offset.parent.top*c-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(g?0:b.scrollTop()))*c)),left:(h.left+this.offset.relative.left*c+this.offset.parent.left*c-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:b.scrollLeft())*c))}},_generatePosition:function(e){var h=this.options,b=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,i=(/(html|body)/i).test(b[0].tagName);if(this.cssPosition=="relative"&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0])){this.offset.relative=this._getRelativeOffset()}var d=e.pageX;var c=e.pageY;if(this.originalPosition){if(this.containment){if(e.pageX-this.offset.click.left<this.containment[0]){d=this.containment[0]+this.offset.click.left}if(e.pageY-this.offset.click.top<this.containment[1]){c=this.containment[1]+this.offset.click.top}if(e.pageX-this.offset.click.left>this.containment[2]){d=this.containment[2]+this.offset.click.left}if(e.pageY-this.offset.click.top>this.containment[3]){c=this.containment[3]+this.offset.click.top}}if(h.grid){var g=this.originalPageY+Math.round((c-this.originalPageY)/h.grid[1])*h.grid[1];c=this.containment?(!(g-this.offset.click.top<this.containment[1]||g-this.offset.click.top>this.containment[3])?g:(!(g-this.offset.click.top<this.containment[1])?g-h.grid[1]:g+h.grid[1])):g;var f=this.originalPageX+Math.round((d-this.originalPageX)/h.grid[0])*h.grid[0];d=this.containment?(!(f-this.offset.click.left<this.containment[0]||f-this.offset.click.left>this.containment[2])?f:(!(f-this.offset.click.left<this.containment[0])?f-h.grid[0]:f+h.grid[0])):f}}return{top:(c-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(i?0:b.scrollTop())))),left:(d-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():i?0:b.scrollLeft())))}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");if(this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval){this.helper.remove()}this.helper=null;this.cancelHelperRemoval=false},_trigger:function(b,c,d){d=d||this._uiHash();a.ui.plugin.call(this,b,[c,d]);if(b=="drag"){this.positionAbs=this._convertPositionTo("absolute")}return a.widget.prototype._trigger.call(this,b,c,d)},plugins:{},_uiHash:function(b){return{helper:this.helper,position:this.position,absolutePosition:this.positionAbs,offset:this.positionAbs}}}));a.extend(a.ui.draggable,{version:"1.7.1",eventPrefix:"drag",defaults:{addClasses:true,appendTo:"parent",axis:false,cancel:":input,option",connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,delay:0,distance:1,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false}});a.ui.plugin.add("draggable","connectToSortable",{start:function(c,e){var d=a(this).data("draggable"),f=d.options,b=a.extend({},e,{item:d.element});d.sortables=[];a(f.connectToSortable).each(function(){var g=a.data(this,"sortable");if(g&&!g.options.disabled){d.sortables.push({instance:g,shouldRevert:g.options.revert});g._refreshItems();g._trigger("activate",c,b)}})},stop:function(c,e){var d=a(this).data("draggable"),b=a.extend({},e,{item:d.element});a.each(d.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;d.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert){this.instance.options.revert=true}this.instance._mouseStop(c);this.instance.options.helper=this.instance.options._helper;if(d.options.helper=="original"){this.instance.currentItem.css({top:"auto",left:"auto"})}}else{this.instance.cancelHelperRemoval=false;this.instance._trigger("deactivate",c,b)}})},drag:function(c,f){var e=a(this).data("draggable"),b=this;var d=function(i){var n=this.offset.click.top,m=this.offset.click.left;var g=this.positionAbs.top,k=this.positionAbs.left;var j=i.height,l=i.width;var p=i.top,h=i.left;return a.ui.isOver(g+n,k+m,p,h,j,l)};a.each(e.sortables,function(g){this.instance.positionAbs=e.positionAbs;this.instance.helperProportions=e.helperProportions;this.instance.offset.click=e.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=a(b).clone().appendTo(this.instance.element).data("sortable-item",true);this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return f.helper[0]};c.target=this.instance.currentItem[0];this.instance._mouseCapture(c,true);this.instance._mouseStart(c,true,true);this.instance.offset.click.top=e.offset.click.top;this.instance.offset.click.left=e.offset.click.left;this.instance.offset.parent.left-=e.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=e.offset.parent.top-this.instance.offset.parent.top;e._trigger("toSortable",c);e.dropped=this.instance.element;e.currentItem=e.element;this.instance.fromOutside=e}if(this.instance.currentItem){this.instance._mouseDrag(c)}}else{if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._trigger("out",c,this.instance._uiHash(this.instance));this.instance._mouseStop(c,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();if(this.instance.placeholder){this.instance.placeholder.remove()}e._trigger("fromSortable",c);e.dropped=false}}})}});a.ui.plugin.add("draggable","cursor",{start:function(c,d){var b=a("body"),e=a(this).data("draggable").options;if(b.css("cursor")){e._cursor=b.css("cursor")}b.css("cursor",e.cursor)},stop:function(b,c){var d=a(this).data("draggable").options;if(d._cursor){a("body").css("cursor",d._cursor)}}});a.ui.plugin.add("draggable","iframeFix",{start:function(b,c){var d=a(this).data("draggable").options;a(d.iframeFix===true?"iframe":d.iframeFix).each(function(){a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1000}).css(a(this).offset()).appendTo("body")})},stop:function(b,c){a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)})}});a.ui.plugin.add("draggable","opacity",{start:function(c,d){var b=a(d.helper),e=a(this).data("draggable").options;if(b.css("opacity")){e._opacity=b.css("opacity")}b.css("opacity",e.opacity)},stop:function(b,c){var d=a(this).data("draggable").options;if(d._opacity){a(c.helper).css("opacity",d._opacity)}}});a.ui.plugin.add("draggable","scroll",{start:function(c,d){var b=a(this).data("draggable");if(b.scrollParent[0]!=document&&b.scrollParent[0].tagName!="HTML"){b.overflowOffset=b.scrollParent.offset()}},drag:function(d,e){var c=a(this).data("draggable"),f=c.options,b=false;if(c.scrollParent[0]!=document&&c.scrollParent[0].tagName!="HTML"){if(!f.axis||f.axis!="x"){if((c.overflowOffset.top+c.scrollParent[0].offsetHeight)-d.pageY<f.scrollSensitivity){c.scrollParent[0].scrollTop=b=c.scrollParent[0].scrollTop+f.scrollSpeed}else{if(d.pageY-c.overflowOffset.top<f.scrollSensitivity){c.scrollParent[0].scrollTop=b=c.scrollParent[0].scrollTop-f.scrollSpeed}}}if(!f.axis||f.axis!="y"){if((c.overflowOffset.left+c.scrollParent[0].offsetWidth)-d.pageX<f.scrollSensitivity){c.scrollParent[0].scrollLeft=b=c.scrollParent[0].scrollLeft+f.scrollSpeed}else{if(d.pageX-c.overflowOffset.left<f.scrollSensitivity){c.scrollParent[0].scrollLeft=b=c.scrollParent[0].scrollLeft-f.scrollSpeed}}}}else{if(!f.axis||f.axis!="x"){if(d.pageY-a(document).scrollTop()<f.scrollSensitivity){b=a(document).scrollTop(a(document).scrollTop()-f.scrollSpeed)}else{if(a(window).height()-(d.pageY-a(document).scrollTop())<f.scrollSensitivity){b=a(document).scrollTop(a(document).scrollTop()+f.scrollSpeed)}}}if(!f.axis||f.axis!="y"){if(d.pageX-a(document).scrollLeft()<f.scrollSensitivity){b=a(document).scrollLeft(a(document).scrollLeft()-f.scrollSpeed)}else{if(a(window).width()-(d.pageX-a(document).scrollLeft())<f.scrollSensitivity){b=a(document).scrollLeft(a(document).scrollLeft()+f.scrollSpeed)}}}}if(b!==false&&a.ui.ddmanager&&!f.dropBehaviour){a.ui.ddmanager.prepareOffsets(c,d)}}});a.ui.plugin.add("draggable","snap",{start:function(c,d){var b=a(this).data("draggable"),e=b.options;b.snapElements=[];a(e.snap.constructor!=String?(e.snap.items||":data(draggable)"):e.snap).each(function(){var g=a(this);var f=g.offset();if(this!=b.element[0]){b.snapElements.push({item:this,width:g.outerWidth(),height:g.outerHeight(),top:f.top,left:f.left})}})},drag:function(u,p){var g=a(this).data("draggable"),q=g.options;var y=q.snapTolerance;var x=p.offset.left,w=x+g.helperProportions.width,f=p.offset.top,e=f+g.helperProportions.height;for(var v=g.snapElements.length-1;v>=0;v--){var s=g.snapElements[v].left,n=s+g.snapElements[v].width,m=g.snapElements[v].top,A=m+g.snapElements[v].height;if(!((s-y<x&&x<n+y&&m-y<f&&f<A+y)||(s-y<x&&x<n+y&&m-y<e&&e<A+y)||(s-y<w&&w<n+y&&m-y<f&&f<A+y)||(s-y<w&&w<n+y&&m-y<e&&e<A+y))){if(g.snapElements[v].snapping){(g.options.snap.release&&g.options.snap.release.call(g.element,u,a.extend(g._uiHash(),{snapItem:g.snapElements[v].item})))}g.snapElements[v].snapping=false;continue}if(q.snapMode!="inner"){var c=Math.abs(m-e)<=y;var z=Math.abs(A-f)<=y;var j=Math.abs(s-w)<=y;var k=Math.abs(n-x)<=y;if(c){p.position.top=g._convertPositionTo("relative",{top:m-g.helperProportions.height,left:0}).top-g.margins.top}if(z){p.position.top=g._convertPositionTo("relative",{top:A,left:0}).top-g.margins.top}if(j){p.position.left=g._convertPositionTo("relative",{top:0,left:s-g.helperProportions.width}).left-g.margins.left}if(k){p.position.left=g._convertPositionTo("relative",{top:0,left:n}).left-g.margins.left}}var h=(c||z||j||k);if(q.snapMode!="outer"){var c=Math.abs(m-f)<=y;var z=Math.abs(A-e)<=y;var j=Math.abs(s-x)<=y;var k=Math.abs(n-w)<=y;if(c){p.position.top=g._convertPositionTo("relative",{top:m,left:0}).top-g.margins.top}if(z){p.position.top=g._convertPositionTo("relative",{top:A-g.helperProportions.height,left:0}).top-g.margins.top}if(j){p.position.left=g._convertPositionTo("relative",{top:0,left:s}).left-g.margins.left}if(k){p.position.left=g._convertPositionTo("relative",{top:0,left:n-g.helperProportions.width}).left-g.margins.left}}if(!g.snapElements[v].snapping&&(c||z||j||k||h)){(g.options.snap.snap&&g.options.snap.snap.call(g.element,u,a.extend(g._uiHash(),{snapItem:g.snapElements[v].item})))}g.snapElements[v].snapping=(c||z||j||k||h)}}});a.ui.plugin.add("draggable","stack",{start:function(b,c){var e=a(this).data("draggable").options;var d=a.makeArray(a(e.stack.group)).sort(function(g,f){return(parseInt(a(g).css("zIndex"),10)||e.stack.min)-(parseInt(a(f).css("zIndex"),10)||e.stack.min)});a(d).each(function(f){this.style.zIndex=e.stack.min+f});this[0].style.zIndex=e.stack.min+d.length}});a.ui.plugin.add("draggable","zIndex",{start:function(c,d){var b=a(d.helper),e=a(this).data("draggable").options;if(b.css("zIndex")){e._zIndex=b.css("zIndex")}b.css("zIndex",e.zIndex)},stop:function(b,c){var d=a(this).data("draggable").options;if(d._zIndex){a(c.helper).css("zIndex",d._zIndex)}}})})(jQuery);;/*
 * jQuery UI Droppable 1.7.1
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Droppables
 *
 * Depends:
 *	ui.core.js
 *	ui.draggable.js
 */(function(a){a.widget("ui.droppable",{_init:function(){var c=this.options,b=c.accept;this.isover=0;this.isout=1;this.options.accept=this.options.accept&&a.isFunction(this.options.accept)?this.options.accept:function(e){return e.is(b)};this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};a.ui.ddmanager.droppables[this.options.scope]=a.ui.ddmanager.droppables[this.options.scope]||[];a.ui.ddmanager.droppables[this.options.scope].push(this);(this.options.addClasses&&this.element.addClass("ui-droppable"))},destroy:function(){var b=a.ui.ddmanager.droppables[this.options.scope];for(var c=0;c<b.length;c++){if(b[c]==this){b.splice(c,1)}}this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable")},_setData:function(b,c){if(b=="accept"){this.options.accept=c&&a.isFunction(c)?c:function(e){return e.is(c)}}else{a.widget.prototype._setData.apply(this,arguments)}},_activate:function(c){var b=a.ui.ddmanager.current;if(this.options.activeClass){this.element.addClass(this.options.activeClass)}(b&&this._trigger("activate",c,this.ui(b)))},_deactivate:function(c){var b=a.ui.ddmanager.current;if(this.options.activeClass){this.element.removeClass(this.options.activeClass)}(b&&this._trigger("deactivate",c,this.ui(b)))},_over:function(c){var b=a.ui.ddmanager.current;if(!b||(b.currentItem||b.element)[0]==this.element[0]){return}if(this.options.accept.call(this.element[0],(b.currentItem||b.element))){if(this.options.hoverClass){this.element.addClass(this.options.hoverClass)}this._trigger("over",c,this.ui(b))}},_out:function(c){var b=a.ui.ddmanager.current;if(!b||(b.currentItem||b.element)[0]==this.element[0]){return}if(this.options.accept.call(this.element[0],(b.currentItem||b.element))){if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)}this._trigger("out",c,this.ui(b))}},_drop:function(c,d){var b=d||a.ui.ddmanager.current;if(!b||(b.currentItem||b.element)[0]==this.element[0]){return false}var e=false;this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var f=a.data(this,"droppable");if(f.options.greedy&&a.ui.intersect(b,a.extend(f,{offset:f.element.offset()}),f.options.tolerance)){e=true;return false}});if(e){return false}if(this.options.accept.call(this.element[0],(b.currentItem||b.element))){if(this.options.activeClass){this.element.removeClass(this.options.activeClass)}if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)}this._trigger("drop",c,this.ui(b));return this.element}return false},ui:function(b){return{draggable:(b.currentItem||b.element),helper:b.helper,position:b.position,absolutePosition:b.positionAbs,offset:b.positionAbs}}});a.extend(a.ui.droppable,{version:"1.7.1",eventPrefix:"drop",defaults:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect"}});a.ui.intersect=function(q,j,o){if(!j.offset){return false}var e=(q.positionAbs||q.position.absolute).left,d=e+q.helperProportions.width,n=(q.positionAbs||q.position.absolute).top,m=n+q.helperProportions.height;var g=j.offset.left,c=g+j.proportions.width,p=j.offset.top,k=p+j.proportions.height;switch(o){case"fit":return(g<e&&d<c&&p<n&&m<k);break;case"intersect":return(g<e+(q.helperProportions.width/2)&&d-(q.helperProportions.width/2)<c&&p<n+(q.helperProportions.height/2)&&m-(q.helperProportions.height/2)<k);break;case"pointer":var h=((q.positionAbs||q.position.absolute).left+(q.clickOffset||q.offset.click).left),i=((q.positionAbs||q.position.absolute).top+(q.clickOffset||q.offset.click).top),f=a.ui.isOver(i,h,p,g,j.proportions.height,j.proportions.width);return f;break;case"touch":return((n>=p&&n<=k)||(m>=p&&m<=k)||(n<p&&m>k))&&((e>=g&&e<=c)||(d>=g&&d<=c)||(e<g&&d>c));break;default:return false;break}};a.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(e,g){var b=a.ui.ddmanager.droppables[e.options.scope];var f=g?g.type:null;var h=(e.currentItem||e.element).find(":data(droppable)").andSelf();droppablesLoop:for(var d=0;d<b.length;d++){if(b[d].options.disabled||(e&&!b[d].options.accept.call(b[d].element[0],(e.currentItem||e.element)))){continue}for(var c=0;c<h.length;c++){if(h[c]==b[d].element[0]){b[d].proportions.height=0;continue droppablesLoop}}b[d].visible=b[d].element.css("display")!="none";if(!b[d].visible){continue}b[d].offset=b[d].element.offset();b[d].proportions={width:b[d].element[0].offsetWidth,height:b[d].element[0].offsetHeight};if(f=="mousedown"){b[d]._activate.call(b[d],g)}}},drop:function(b,c){var d=false;a.each(a.ui.ddmanager.droppables[b.options.scope],function(){if(!this.options){return}if(!this.options.disabled&&this.visible&&a.ui.intersect(b,this,this.options.tolerance)){d=this._drop.call(this,c)}if(!this.options.disabled&&this.visible&&this.options.accept.call(this.element[0],(b.currentItem||b.element))){this.isout=1;this.isover=0;this._deactivate.call(this,c)}});return d},drag:function(b,c){if(b.options.refreshPositions){a.ui.ddmanager.prepareOffsets(b,c)}a.each(a.ui.ddmanager.droppables[b.options.scope],function(){if(this.options.disabled||this.greedyChild||!this.visible){return}var e=a.ui.intersect(b,this,this.options.tolerance);var g=!e&&this.isover==1?"isout":(e&&this.isover==0?"isover":null);if(!g){return}var f;if(this.options.greedy){var d=this.element.parents(":data(droppable):eq(0)");if(d.length){f=a.data(d[0],"droppable");f.greedyChild=(g=="isover"?1:0)}}if(f&&g=="isover"){f.isover=0;f.isout=1;f._out.call(f,c)}this[g]=1;this[g=="isout"?"isover":"isout"]=0;this[g=="isover"?"_over":"_out"].call(this,c);if(f&&g=="isout"){f.isout=0;f.isover=1;f._over.call(f,c)}})}}})(jQuery);;/*
 * jQuery UI Accordion 1.7.1
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Accordion
 *
 * Depends:
 *	ui.core.js
 */(function(a){a.widget("ui.accordion",{_init:function(){var d=this.options,b=this;this.running=0;if(d.collapsible==a.ui.accordion.defaults.collapsible&&d.alwaysOpen!=a.ui.accordion.defaults.alwaysOpen){d.collapsible=!d.alwaysOpen}if(d.navigation){var c=this.element.find("a").filter(d.navigationFilter);if(c.length){if(c.filter(d.header).length){this.active=c}else{this.active=c.parent().parent().prev();c.addClass("ui-accordion-content-active")}}}this.element.addClass("ui-accordion ui-widget ui-helper-reset");if(this.element[0].nodeName=="UL"){this.element.children("li").addClass("ui-accordion-li-fix")}this.headers=this.element.find(d.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion",function(){a(this).addClass("ui-state-hover")}).bind("mouseleave.accordion",function(){a(this).removeClass("ui-state-hover")}).bind("focus.accordion",function(){a(this).addClass("ui-state-focus")}).bind("blur.accordion",function(){a(this).removeClass("ui-state-focus")});this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");this.active=this._findActive(this.active||d.active).toggleClass("ui-state-default").toggleClass("ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top");this.active.next().addClass("ui-accordion-content-active");a("<span/>").addClass("ui-icon "+d.icons.header).prependTo(this.headers);this.active.find(".ui-icon").toggleClass(d.icons.header).toggleClass(d.icons.headerSelected);if(a.browser.msie){this.element.find("a").css("zoom","1")}this.resize();this.element.attr("role","tablist");this.headers.attr("role","tab").bind("keydown",function(e){return b._keydown(e)}).next().attr("role","tabpanel");this.headers.not(this.active||"").attr("aria-expanded","false").attr("tabIndex","-1").next().hide();if(!this.active.length){this.headers.eq(0).attr("tabIndex","0")}else{this.active.attr("aria-expanded","true").attr("tabIndex","0")}if(!a.browser.safari){this.headers.find("a").attr("tabIndex","-1")}if(d.event){this.headers.bind((d.event)+".accordion",function(e){return b._clickHandler.call(b,e,this)})}},destroy:function(){var c=this.options;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role").unbind(".accordion").removeData("accordion");this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("tabindex");this.headers.find("a").removeAttr("tabindex");this.headers.children(".ui-icon").remove();var b=this.headers.next().css("display","").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active");if(c.autoHeight||c.fillHeight){b.css("height","")}},_setData:function(b,c){if(b=="alwaysOpen"){b="collapsible";c=!c}a.widget.prototype._setData.apply(this,arguments)},_keydown:function(e){var g=this.options,f=a.ui.keyCode;if(g.disabled||e.altKey||e.ctrlKey){return}var d=this.headers.length;var b=this.headers.index(e.target);var c=false;switch(e.keyCode){case f.RIGHT:case f.DOWN:c=this.headers[(b+1)%d];break;case f.LEFT:case f.UP:c=this.headers[(b-1+d)%d];break;case f.SPACE:case f.ENTER:return this._clickHandler({target:e.target},e.target)}if(c){a(e.target).attr("tabIndex","-1");a(c).attr("tabIndex","0");c.focus();return false}return true},resize:function(){var e=this.options,d;if(e.fillSpace){if(a.browser.msie){var b=this.element.parent().css("overflow");this.element.parent().css("overflow","hidden")}d=this.element.parent().height();if(a.browser.msie){this.element.parent().css("overflow",b)}this.headers.each(function(){d-=a(this).outerHeight()});var c=0;this.headers.next().each(function(){c=Math.max(c,a(this).innerHeight()-a(this).height())}).height(Math.max(0,d-c)).css("overflow","auto")}else{if(e.autoHeight){d=0;this.headers.next().each(function(){d=Math.max(d,a(this).outerHeight())}).height(d)}}},activate:function(b){var c=this._findActive(b)[0];this._clickHandler({target:c},c)},_findActive:function(b){return b?typeof b=="number"?this.headers.filter(":eq("+b+")"):this.headers.not(this.headers.not(b)):b===false?a([]):this.headers.filter(":eq(0)")},_clickHandler:function(b,f){var d=this.options;if(d.disabled){return false}if(!b.target&&d.collapsible){this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").find(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header);this.active.next().addClass("ui-accordion-content-active");var h=this.active.next(),e={options:d,newHeader:a([]),oldHeader:d.active,newContent:a([]),oldContent:h},c=(this.active=a([]));this._toggle(c,h,e);return false}var g=a(b.currentTarget||f);var i=g[0]==this.active[0];if(this.running||(!d.collapsible&&i)){return false}this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").find(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header);this.active.next().addClass("ui-accordion-content-active");if(!i){g.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").find(".ui-icon").removeClass(d.icons.header).addClass(d.icons.headerSelected);g.next().addClass("ui-accordion-content-active")}var c=g.next(),h=this.active.next(),e={options:d,newHeader:i&&d.collapsible?a([]):g,oldHeader:this.active,newContent:i&&d.collapsible?a([]):c.find("> *"),oldContent:h.find("> *")},j=this.headers.index(this.active[0])>this.headers.index(g[0]);this.active=i?a([]):g;this._toggle(c,h,e,i,j);return false},_toggle:function(b,i,g,j,k){var d=this.options,m=this;this.toShow=b;this.toHide=i;this.data=g;var c=function(){if(!m){return}return m._completed.apply(m,arguments)};this._trigger("changestart",null,this.data);this.running=i.size()===0?b.size():i.size();if(d.animated){var f={};if(d.collapsible&&j){f={toShow:a([]),toHide:i,complete:c,down:k,autoHeight:d.autoHeight||d.fillSpace}}else{f={toShow:b,toHide:i,complete:c,down:k,autoHeight:d.autoHeight||d.fillSpace}}if(!d.proxied){d.proxied=d.animated}if(!d.proxiedDuration){d.proxiedDuration=d.duration}d.animated=a.isFunction(d.proxied)?d.proxied(f):d.proxied;d.duration=a.isFunction(d.proxiedDuration)?d.proxiedDuration(f):d.proxiedDuration;var l=a.ui.accordion.animations,e=d.duration,h=d.animated;if(!l[h]){l[h]=function(n){this.slide(n,{easing:h,duration:e||700})}}l[h](f)}else{if(d.collapsible&&j){b.toggle()}else{i.hide();b.show()}c(true)}i.prev().attr("aria-expanded","false").attr("tabIndex","-1").blur();b.prev().attr("aria-expanded","true").attr("tabIndex","0").focus()},_completed:function(b){var c=this.options;this.running=b?0:--this.running;if(this.running){return}if(c.clearStyle){this.toShow.add(this.toHide).css({height:"",overflow:""})}this._trigger("change",null,this.data)}});a.extend(a.ui.accordion,{version:"1.7.1",defaults:{active:null,alwaysOpen:true,animated:"slide",autoHeight:true,clearStyle:false,collapsible:false,event:"click",fillSpace:false,header:"> li > :first-child,> :not(li):even",icons:{header:"ui-icon-triangle-1-e",headerSelected:"ui-icon-triangle-1-s"},navigation:false,navigationFilter:function(){return this.href.toLowerCase()==location.href.toLowerCase()}},animations:{slide:function(j,h){j=a.extend({easing:"swing",duration:300},j,h);if(!j.toHide.size()){j.toShow.animate({height:"show"},j);return}if(!j.toShow.size()){j.toHide.animate({height:"hide"},j);return}var c=j.toShow.css("overflow"),g,d={},f={},e=["height","paddingTop","paddingBottom"],b;var i=j.toShow;b=i[0].style.width;i.width(parseInt(i.parent().width(),10)-parseInt(i.css("paddingLeft"),10)-parseInt(i.css("paddingRight"),10)-(parseInt(i.css("borderLeftWidth"),10)||0)-(parseInt(i.css("borderRightWidth"),10)||0));a.each(e,function(k,m){f[m]="hide";var l=(""+a.css(j.toShow[0],m)).match(/^([\d+-.]+)(.*)$/);d[m]={value:l[1],unit:l[2]||"px"}});j.toShow.css({height:0,overflow:"hidden"}).show();j.toHide.filter(":hidden").each(j.complete).end().filter(":visible").animate(f,{step:function(k,l){if(l.prop=="height"){g=(l.now-l.start)/(l.end-l.start)}j.toShow[0].style[l.prop]=(g*d[l.prop].value)+d[l.prop].unit},duration:j.duration,easing:j.easing,complete:function(){if(!j.autoHeight){j.toShow.css("height","")}j.toShow.css("width",b);j.toShow.css({overflow:c});j.complete()}})},bounceslide:function(b){this.slide(b,{easing:b.down?"easeOutBounce":"swing",duration:b.down?1000:200})},easeslide:function(b){this.slide(b,{easing:"easeinout",duration:700})}}})})(jQuery);;/*
 * jQuery UI Dialog 1.7.1
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Dialog
 *
 * Depends:
 *	ui.core.js
 *	ui.draggable.js
 *	ui.resizable.js
 */(function(c){var b={dragStart:"start.draggable",drag:"drag.draggable",dragStop:"stop.draggable",maxHeight:"maxHeight.resizable",minHeight:"minHeight.resizable",maxWidth:"maxWidth.resizable",minWidth:"minWidth.resizable",resizeStart:"start.resizable",resize:"drag.resizable",resizeStop:"stop.resizable"},a="ui-dialog ui-widget ui-widget-content ui-corner-all ";c.widget("ui.dialog",{_init:function(){this.originalTitle=this.element.attr("title");var l=this,m=this.options,j=m.title||this.originalTitle||"&nbsp;",e=c.ui.dialog.getTitleId(this.element),k=(this.uiDialog=c("<div/>")).appendTo(document.body).hide().addClass(a+m.dialogClass).css({position:"absolute",overflow:"hidden",zIndex:m.zIndex}).attr("tabIndex",-1).css("outline",0).keydown(function(n){(m.closeOnEscape&&n.keyCode&&n.keyCode==c.ui.keyCode.ESCAPE&&l.close(n))}).attr({role:"dialog","aria-labelledby":e}).mousedown(function(n){l.moveToTop(false,n)}),g=this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(k),f=(this.uiDialogTitlebar=c("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(k),i=c('<a href="#"/>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role","button").hover(function(){i.addClass("ui-state-hover")},function(){i.removeClass("ui-state-hover")}).focus(function(){i.addClass("ui-state-focus")}).blur(function(){i.removeClass("ui-state-focus")}).mousedown(function(n){n.stopPropagation()}).click(function(n){l.close(n);return false}).appendTo(f),h=(this.uiDialogTitlebarCloseText=c("<span/>")).addClass("ui-icon ui-icon-closethick").text(m.closeText).appendTo(i),d=c("<span/>").addClass("ui-dialog-title").attr("id",e).html(j).prependTo(f);f.find("*").add(f).disableSelection();(m.draggable&&c.fn.draggable&&this._makeDraggable());(m.resizable&&c.fn.resizable&&this._makeResizable());this._createButtons(m.buttons);this._isOpen=false;(m.bgiframe&&c.fn.bgiframe&&k.bgiframe());(m.autoOpen&&this.open())},destroy:function(){(this.overlay&&this.overlay.destroy());this.uiDialog.hide();this.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");this.uiDialog.remove();(this.originalTitle&&this.element.attr("title",this.originalTitle))},close:function(e){var d=this;if(false===d._trigger("beforeclose",e)){return}(d.overlay&&d.overlay.destroy());d.uiDialog.unbind("keypress.ui-dialog");(d.options.hide?d.uiDialog.hide(d.options.hide,function(){d._trigger("close",e)}):d.uiDialog.hide()&&d._trigger("close",e));c.ui.dialog.overlay.resize();d._isOpen=false},isOpen:function(){return this._isOpen},moveToTop:function(f,e){if((this.options.modal&&!f)||(!this.options.stack&&!this.options.modal)){return this._trigger("focus",e)}if(this.options.zIndex>c.ui.dialog.maxZ){c.ui.dialog.maxZ=this.options.zIndex}(this.overlay&&this.overlay.$el.css("z-index",c.ui.dialog.overlay.maxZ=++c.ui.dialog.maxZ));var d={scrollTop:this.element.attr("scrollTop"),scrollLeft:this.element.attr("scrollLeft")};this.uiDialog.css("z-index",++c.ui.dialog.maxZ);this.element.attr(d);this._trigger("focus",e)},open:function(){if(this._isOpen){return}var e=this.options,d=this.uiDialog;this.overlay=e.modal?new c.ui.dialog.overlay(this):null;(d.next().length&&d.appendTo("body"));this._size();this._position(e.position);d.show(e.show);this.moveToTop(true);(e.modal&&d.bind("keypress.ui-dialog",function(h){if(h.keyCode!=c.ui.keyCode.TAB){return}var g=c(":tabbable",this),i=g.filter(":first")[0],f=g.filter(":last")[0];if(h.target==f&&!h.shiftKey){setTimeout(function(){i.focus()},1)}else{if(h.target==i&&h.shiftKey){setTimeout(function(){f.focus()},1)}}}));c([]).add(d.find(".ui-dialog-content :tabbable:first")).add(d.find(".ui-dialog-buttonpane :tabbable:first")).add(d).filter(":first").focus();this._trigger("open");this._isOpen=true},_createButtons:function(g){var f=this,d=false,e=c("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");this.uiDialog.find(".ui-dialog-buttonpane").remove();(typeof g=="object"&&g!==null&&c.each(g,function(){return !(d=true)}));if(d){c.each(g,function(h,i){c('<button type="button"></button>').addClass("ui-state-default ui-corner-all").text(h).click(function(){i.apply(f.element[0],arguments)}).hover(function(){c(this).addClass("ui-state-hover")},function(){c(this).removeClass("ui-state-hover")}).focus(function(){c(this).addClass("ui-state-focus")}).blur(function(){c(this).removeClass("ui-state-focus")}).appendTo(e)});e.appendTo(this.uiDialog)}},_makeDraggable:function(){var d=this,f=this.options,e;this.uiDialog.draggable({cancel:".ui-dialog-content",handle:".ui-dialog-titlebar",containment:"document",start:function(){e=f.height;c(this).height(c(this).height()).addClass("ui-dialog-dragging");(f.dragStart&&f.dragStart.apply(d.element[0],arguments))},drag:function(){(f.drag&&f.drag.apply(d.element[0],arguments))},stop:function(){c(this).removeClass("ui-dialog-dragging").height(e);(f.dragStop&&f.dragStop.apply(d.element[0],arguments));c.ui.dialog.overlay.resize()}})},_makeResizable:function(g){g=(g===undefined?this.options.resizable:g);var d=this,f=this.options,e=typeof g=="string"?g:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",alsoResize:this.element,maxWidth:f.maxWidth,maxHeight:f.maxHeight,minWidth:f.minWidth,minHeight:f.minHeight,start:function(){c(this).addClass("ui-dialog-resizing");(f.resizeStart&&f.resizeStart.apply(d.element[0],arguments))},resize:function(){(f.resize&&f.resize.apply(d.element[0],arguments))},handles:e,stop:function(){c(this).removeClass("ui-dialog-resizing");f.height=c(this).height();f.width=c(this).width();(f.resizeStop&&f.resizeStop.apply(d.element[0],arguments));c.ui.dialog.overlay.resize()}}).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_position:function(i){var e=c(window),f=c(document),g=f.scrollTop(),d=f.scrollLeft(),h=g;if(c.inArray(i,["center","top","right","bottom","left"])>=0){i=[i=="right"||i=="left"?i:"center",i=="top"||i=="bottom"?i:"middle"]}if(i.constructor!=Array){i=["center","middle"]}if(i[0].constructor==Number){d+=i[0]}else{switch(i[0]){case"left":d+=0;break;case"right":d+=e.width()-this.uiDialog.outerWidth();break;default:case"center":d+=(e.width()-this.uiDialog.outerWidth())/2}}if(i[1].constructor==Number){g+=i[1]}else{switch(i[1]){case"top":g+=0;break;case"bottom":g+=e.height()-this.uiDialog.outerHeight();break;default:case"middle":g+=(e.height()-this.uiDialog.outerHeight())/2}}g=Math.max(g,h);this.uiDialog.css({top:g,left:d})},_setData:function(e,f){(b[e]&&this.uiDialog.data(b[e],f));switch(e){case"buttons":this._createButtons(f);break;case"closeText":this.uiDialogTitlebarCloseText.text(f);break;case"dialogClass":this.uiDialog.removeClass(this.options.dialogClass).addClass(a+f);break;case"draggable":(f?this._makeDraggable():this.uiDialog.draggable("destroy"));break;case"height":this.uiDialog.height(f);break;case"position":this._position(f);break;case"resizable":var d=this.uiDialog,g=this.uiDialog.is(":data(resizable)");(g&&!f&&d.resizable("destroy"));(g&&typeof f=="string"&&d.resizable("option","handles",f));(g||this._makeResizable(f));break;case"title":c(".ui-dialog-title",this.uiDialogTitlebar).html(f||"&nbsp;");break;case"width":this.uiDialog.width(f);break}c.widget.prototype._setData.apply(this,arguments)},_size:function(){var e=this.options;this.element.css({height:0,minHeight:0,width:"auto"});var d=this.uiDialog.css({height:"auto",width:e.width}).height();this.element.css({minHeight:Math.max(e.minHeight-d,0),height:e.height=="auto"?"auto":Math.max(e.height-d,0)})}});c.extend(c.ui.dialog,{version:"1.7.1",defaults:{autoOpen:true,bgiframe:false,buttons:{},closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:false,maxWidth:false,minHeight:150,minWidth:150,modal:false,position:"center",resizable:true,show:null,stack:true,title:"",width:300,zIndex:1000},getter:"isOpen",uuid:0,maxZ:0,getTitleId:function(d){return"ui-dialog-title-"+(d.attr("id")||++this.uuid)},overlay:function(d){this.$el=c.ui.dialog.overlay.create(d)}});c.extend(c.ui.dialog.overlay,{instances:[],maxZ:0,events:c.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(d){return d+".dialog-overlay"}).join(" "),create:function(e){if(this.instances.length===0){setTimeout(function(){c(document).bind(c.ui.dialog.overlay.events,function(f){var g=c(f.target).parents(".ui-dialog").css("zIndex")||0;return(g>c.ui.dialog.overlay.maxZ)})},1);c(document).bind("keydown.dialog-overlay",function(f){(e.options.closeOnEscape&&f.keyCode&&f.keyCode==c.ui.keyCode.ESCAPE&&e.close(f))});c(window).bind("resize.dialog-overlay",c.ui.dialog.overlay.resize)}var d=c("<div></div>").appendTo(document.body).addClass("ui-widget-overlay").css({width:this.width(),height:this.height()});(e.options.bgiframe&&c.fn.bgiframe&&d.bgiframe());this.instances.push(d);return d},destroy:function(d){this.instances.splice(c.inArray(this.instances,d),1);if(this.instances.length===0){c([document,window]).unbind(".dialog-overlay")}d.remove()},height:function(){if(c.browser.msie&&c.browser.version<7){var e=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);var d=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight);if(e<d){return c(window).height()+"px"}else{return e+"px"}}else{return c(document).height()+"px"}},width:function(){if(c.browser.msie&&c.browser.version<7){var d=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth);var e=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);if(d<e){return c(window).width()+"px"}else{return d+"px"}}else{return c(document).width()+"px"}},resize:function(){var d=c([]);c.each(c.ui.dialog.overlay.instances,function(){d=d.add(this)});d.css({width:0,height:0}).css({width:c.ui.dialog.overlay.width(),height:c.ui.dialog.overlay.height()})}});c.extend(c.ui.dialog.overlay.prototype,{destroy:function(){c.ui.dialog.overlay.destroy(this.$el)}})})(jQuery);;/*
 * jQuery UI Datepicker 1.7.1
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Datepicker
 *
 * Depends:
 *	ui.core.js
 */(function($){$.extend($.ui,{datepicker:{version:"1.7.1"}});var PROP_NAME="datepicker";function Datepicker(){this.debug=false;this._curInst=null;this._keyEvent=false;this._disabledInputs=[];this._datepickerShowing=false;this._inDialog=false;this._mainDivId="ui-datepicker-div";this._inlineClass="ui-datepicker-inline";this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";this._unselectableClass="ui-datepicker-unselectable";this._currentClass="ui-datepicker-current-day";this._dayOverClass="ui-datepicker-days-cell-over";this.regional=[];this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],dateFormat:"mm/dd/yy",firstDay:0,isRTL:false};this._defaults={showOn:"focus",showAnim:"show",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,showMonthAfterYear:false,yearRange:"-10:+10",showOtherMonths:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"normal",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false};$.extend(this._defaults,this.regional[""]);this.dpDiv=$('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all ui-helper-hidden-accessible"></div>')}$.extend(Datepicker.prototype,{markerClassName:"hasDatepicker",log:function(){if(this.debug){console.log.apply("",arguments)}},setDefaults:function(settings){extendRemove(this._defaults,settings||{});return this},_attachDatepicker:function(target,settings){var inlineSettings=null;for(var attrName in this._defaults){var attrValue=target.getAttribute("date:"+attrName);if(attrValue){inlineSettings=inlineSettings||{};try{inlineSettings[attrName]=eval(attrValue)}catch(err){inlineSettings[attrName]=attrValue}}}var nodeName=target.nodeName.toLowerCase();var inline=(nodeName=="div"||nodeName=="span");if(!target.id){target.id="dp"+(++this.uuid)}var inst=this._newInst($(target),inline);inst.settings=$.extend({},settings||{},inlineSettings||{});if(nodeName=="input"){this._connectDatepicker(target,inst)}else{if(inline){this._inlineDatepicker(target,inst)}}},_newInst:function(target,inline){var id=target[0].id.replace(/([:\[\]\.])/g,"\\\\$1");return{id:id,input:target,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:inline,dpDiv:(!inline?this.dpDiv:$('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}},_connectDatepicker:function(target,inst){var input=$(target);inst.trigger=$([]);if(input.hasClass(this.markerClassName)){return}var appendText=this._get(inst,"appendText");var isRTL=this._get(inst,"isRTL");if(appendText){input[isRTL?"before":"after"]('<span class="'+this._appendClass+'">'+appendText+"</span>")}var showOn=this._get(inst,"showOn");if(showOn=="focus"||showOn=="both"){input.focus(this._showDatepicker)}if(showOn=="button"||showOn=="both"){var buttonText=this._get(inst,"buttonText");var buttonImage=this._get(inst,"buttonImage");inst.trigger=$(this._get(inst,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:buttonImage,alt:buttonText,title:buttonText}):$('<button type="button"></button>').addClass(this._triggerClass).html(buttonImage==""?buttonText:$("<img/>").attr({src:buttonImage,alt:buttonText,title:buttonText})));input[isRTL?"before":"after"](inst.trigger);inst.trigger.click(function(){if($.datepicker._datepickerShowing&&$.datepicker._lastInput==target){$.datepicker._hideDatepicker()}else{$.datepicker._showDatepicker(target)}return false})}input.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).bind("setData.datepicker",function(event,key,value){inst.settings[key]=value}).bind("getData.datepicker",function(event,key){return this._get(inst,key)});$.data(target,PROP_NAME,inst)},_inlineDatepicker:function(target,inst){var divSpan=$(target);if(divSpan.hasClass(this.markerClassName)){return}divSpan.addClass(this.markerClassName).append(inst.dpDiv).bind("setData.datepicker",function(event,key,value){inst.settings[key]=value}).bind("getData.datepicker",function(event,key){return this._get(inst,key)});$.data(target,PROP_NAME,inst);this._setDate(inst,this._getDefaultDate(inst));this._updateDatepicker(inst);this._updateAlternate(inst)},_dialogDatepicker:function(input,dateText,onSelect,settings,pos){var inst=this._dialogInst;if(!inst){var id="dp"+(++this.uuid);this._dialogInput=$('<input type="text" id="'+id+'" size="1" style="position: absolute; top: -100px;"/>');this._dialogInput.keydown(this._doKeyDown);$("body").append(this._dialogInput);inst=this._dialogInst=this._newInst(this._dialogInput,false);inst.settings={};$.data(this._dialogInput[0],PROP_NAME,inst)}extendRemove(inst.settings,settings||{});this._dialogInput.val(dateText);this._pos=(pos?(pos.length?pos:[pos.pageX,pos.pageY]):null);if(!this._pos){var browserWidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;var browserHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;var scrollX=document.documentElement.scrollLeft||document.body.scrollLeft;var scrollY=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[(browserWidth/2)-100+scrollX,(browserHeight/2)-150+scrollY]}this._dialogInput.css("left",this._pos[0]+"px").css("top",this._pos[1]+"px");inst.settings.onSelect=onSelect;this._inDialog=true;this.dpDiv.addClass(this._dialogClass);this._showDatepicker(this._dialogInput[0]);if($.blockUI){$.blockUI(this.dpDiv)}$.data(this._dialogInput[0],PROP_NAME,inst);return this},_destroyDatepicker:function(target){var $target=$(target);var inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return}var nodeName=target.nodeName.toLowerCase();$.removeData(target,PROP_NAME);if(nodeName=="input"){inst.trigger.remove();$target.siblings("."+this._appendClass).remove().end().removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress)}else{if(nodeName=="div"||nodeName=="span"){$target.removeClass(this.markerClassName).empty()}}},_enableDatepicker:function(target){var $target=$(target);var inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return}var nodeName=target.nodeName.toLowerCase();if(nodeName=="input"){target.disabled=false;inst.trigger.filter("button").each(function(){this.disabled=false}).end().filter("img").css({opacity:"1.0",cursor:""})}else{if(nodeName=="div"||nodeName=="span"){var inline=$target.children("."+this._inlineClass);inline.children().removeClass("ui-state-disabled")}}this._disabledInputs=$.map(this._disabledInputs,function(value){return(value==target?null:value)})},_disableDatepicker:function(target){var $target=$(target);var inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return}var nodeName=target.nodeName.toLowerCase();if(nodeName=="input"){target.disabled=true;inst.trigger.filter("button").each(function(){this.disabled=true}).end().filter("img").css({opacity:"0.5",cursor:"default"})}else{if(nodeName=="div"||nodeName=="span"){var inline=$target.children("."+this._inlineClass);inline.children().addClass("ui-state-disabled")}}this._disabledInputs=$.map(this._disabledInputs,function(value){return(value==target?null:value)});this._disabledInputs[this._disabledInputs.length]=target},_isDisabledDatepicker:function(target){if(!target){return false}for(var i=0;i<this._disabledInputs.length;i++){if(this._disabledInputs[i]==target){return true}}return false},_getInst:function(target){try{return $.data(target,PROP_NAME)}catch(err){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(target,name,value){var settings=name||{};if(typeof name=="string"){settings={};settings[name]=value}var inst=this._getInst(target);if(inst){if(this._curInst==inst){this._hideDatepicker(null)}extendRemove(inst.settings,settings);var date=new Date();extendRemove(inst,{rangeStart:null,endDay:null,endMonth:null,endYear:null,selectedDay:date.getDate(),selectedMonth:date.getMonth(),selectedYear:date.getFullYear(),currentDay:date.getDate(),currentMonth:date.getMonth(),currentYear:date.getFullYear(),drawMonth:date.getMonth(),drawYear:date.getFullYear()});this._updateDatepicker(inst)}},_changeDatepicker:function(target,name,value){this._optionDatepicker(target,name,value)},_refreshDatepicker:function(target){var inst=this._getInst(target);if(inst){this._updateDatepicker(inst)}},_setDateDatepicker:function(target,date,endDate){var inst=this._getInst(target);if(inst){this._setDate(inst,date,endDate);this._updateDatepicker(inst);this._updateAlternate(inst)}},_getDateDatepicker:function(target){var inst=this._getInst(target);if(inst&&!inst.inline){this._setDateFromField(inst)}return(inst?this._getDate(inst):null)},_doKeyDown:function(event){var inst=$.datepicker._getInst(event.target);var handled=true;var isRTL=inst.dpDiv.is(".ui-datepicker-rtl");inst._keyEvent=true;if($.datepicker._datepickerShowing){switch(event.keyCode){case 9:$.datepicker._hideDatepicker(null,"");break;case 13:var sel=$("td."+$.datepicker._dayOverClass+", td."+$.datepicker._currentClass,inst.dpDiv);if(sel[0]){$.datepicker._selectDay(event.target,inst.selectedMonth,inst.selectedYear,sel[0])}else{$.datepicker._hideDatepicker(null,$.datepicker._get(inst,"duration"))}return false;break;case 27:$.datepicker._hideDatepicker(null,$.datepicker._get(inst,"duration"));break;case 33:$.datepicker._adjustDate(event.target,(event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths")),"M");break;case 34:$.datepicker._adjustDate(event.target,(event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths")),"M");break;case 35:if(event.ctrlKey||event.metaKey){$.datepicker._clearDate(event.target)}handled=event.ctrlKey||event.metaKey;break;case 36:if(event.ctrlKey||event.metaKey){$.datepicker._gotoToday(event.target)}handled=event.ctrlKey||event.metaKey;break;case 37:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,(isRTL?+1:-1),"D")}handled=event.ctrlKey||event.metaKey;if(event.originalEvent.altKey){$.datepicker._adjustDate(event.target,(event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths")),"M")}break;case 38:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,-7,"D")}handled=event.ctrlKey||event.metaKey;break;case 39:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,(isRTL?-1:+1),"D")}handled=event.ctrlKey||event.metaKey;if(event.originalEvent.altKey){$.datepicker._adjustDate(event.target,(event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths")),"M")}break;case 40:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,+7,"D")}handled=event.ctrlKey||event.metaKey;break;default:handled=false}}else{if(event.keyCode==36&&event.ctrlKey){$.datepicker._showDatepicker(this)}else{handled=false}}if(handled){event.preventDefault();event.stopPropagation()}},_doKeyPress:function(event){var inst=$.datepicker._getInst(event.target);if($.datepicker._get(inst,"constrainInput")){var chars=$.datepicker._possibleChars($.datepicker._get(inst,"dateFormat"));var chr=String.fromCharCode(event.charCode==undefined?event.keyCode:event.charCode);return event.ctrlKey||(chr<" "||!chars||chars.indexOf(chr)>-1)}},_showDatepicker:function(input){input=input.target||input;if(input.nodeName.toLowerCase()!="input"){input=$("input",input.parentNode)[0]}if($.datepicker._isDisabledDatepicker(input)||$.datepicker._lastInput==input){return}var inst=$.datepicker._getInst(input);var beforeShow=$.datepicker._get(inst,"beforeShow");extendRemove(inst.settings,(beforeShow?beforeShow.apply(input,[input,inst]):{}));$.datepicker._hideDatepicker(null,"");$.datepicker._lastInput=input;$.datepicker._setDateFromField(inst);if($.datepicker._inDialog){input.value=""}if(!$.datepicker._pos){$.datepicker._pos=$.datepicker._findPos(input);$.datepicker._pos[1]+=input.offsetHeight}var isFixed=false;$(input).parents().each(function(){isFixed|=$(this).css("position")=="fixed";return !isFixed});if(isFixed&&$.browser.opera){$.datepicker._pos[0]-=document.documentElement.scrollLeft;$.datepicker._pos[1]-=document.documentElement.scrollTop}var offset={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};$.datepicker._pos=null;inst.rangeStart=null;inst.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});$.datepicker._updateDatepicker(inst);offset=$.datepicker._checkOffset(inst,offset,isFixed);inst.dpDiv.css({position:($.datepicker._inDialog&&$.blockUI?"static":(isFixed?"fixed":"absolute")),display:"none",left:offset.left+"px",top:offset.top+"px"});if(!inst.inline){var showAnim=$.datepicker._get(inst,"showAnim")||"show";var duration=$.datepicker._get(inst,"duration");var postProcess=function(){$.datepicker._datepickerShowing=true;if($.browser.msie&&parseInt($.browser.version,10)<7){$("iframe.ui-datepicker-cover").css({width:inst.dpDiv.width()+4,height:inst.dpDiv.height()+4})}};if($.effects&&$.effects[showAnim]){inst.dpDiv.show(showAnim,$.datepicker._get(inst,"showOptions"),duration,postProcess)}else{inst.dpDiv[showAnim](duration,postProcess)}if(duration==""){postProcess()}if(inst.input[0].type!="hidden"){inst.input[0].focus()}$.datepicker._curInst=inst}},_updateDatepicker:function(inst){var dims={width:inst.dpDiv.width()+4,height:inst.dpDiv.height()+4};var self=this;inst.dpDiv.empty().append(this._generateHTML(inst)).find("iframe.ui-datepicker-cover").css({width:dims.width,height:dims.height}).end().find("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a").bind("mouseout",function(){$(this).removeClass("ui-state-hover");if(this.className.indexOf("ui-datepicker-prev")!=-1){$(this).removeClass("ui-datepicker-prev-hover")}if(this.className.indexOf("ui-datepicker-next")!=-1){$(this).removeClass("ui-datepicker-next-hover")}}).bind("mouseover",function(){if(!self._isDisabledDatepicker(inst.inline?inst.dpDiv.parent()[0]:inst.input[0])){$(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");$(this).addClass("ui-state-hover");if(this.className.indexOf("ui-datepicker-prev")!=-1){$(this).addClass("ui-datepicker-prev-hover")}if(this.className.indexOf("ui-datepicker-next")!=-1){$(this).addClass("ui-datepicker-next-hover")}}}).end().find("."+this._dayOverClass+" a").trigger("mouseover").end();var numMonths=this._getNumberOfMonths(inst);var cols=numMonths[1];var width=17;if(cols>1){inst.dpDiv.addClass("ui-datepicker-multi-"+cols).css("width",(width*cols)+"em")}else{inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("")}inst.dpDiv[(numMonths[0]!=1||numMonths[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi");inst.dpDiv[(this._get(inst,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");if(inst.input&&inst.input[0].type!="hidden"&&inst==$.datepicker._curInst){$(inst.input[0]).focus()}},_checkOffset:function(inst,offset,isFixed){var dpWidth=inst.dpDiv.outerWidth();var dpHeight=inst.dpDiv.outerHeight();var inputWidth=inst.input?inst.input.outerWidth():0;var inputHeight=inst.input?inst.input.outerHeight():0;var viewWidth=(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)+$(document).scrollLeft();var viewHeight=(window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight)+$(document).scrollTop();offset.left-=(this._get(inst,"isRTL")?(dpWidth-inputWidth):0);offset.left-=(isFixed&&offset.left==inst.input.offset().left)?$(document).scrollLeft():0;offset.top-=(isFixed&&offset.top==(inst.input.offset().top+inputHeight))?$(document).scrollTop():0;offset.left-=(offset.left+dpWidth>viewWidth&&viewWidth>dpWidth)?Math.abs(offset.left+dpWidth-viewWidth):0;offset.top-=(offset.top+dpHeight>viewHeight&&viewHeight>dpHeight)?Math.abs(offset.top+dpHeight+inputHeight*2-viewHeight):0;return offset},_findPos:function(obj){while(obj&&(obj.type=="hidden"||obj.nodeType!=1)){obj=obj.nextSibling}var position=$(obj).offset();return[position.left,position.top]},_hideDatepicker:function(input,duration){var inst=this._curInst;if(!inst||(input&&inst!=$.data(input,PROP_NAME))){return}if(inst.stayOpen){this._selectDate("#"+inst.id,this._formatDate(inst,inst.currentDay,inst.currentMonth,inst.currentYear))}inst.stayOpen=false;if(this._datepickerShowing){duration=(duration!=null?duration:this._get(inst,"duration"));var showAnim=this._get(inst,"showAnim");var postProcess=function(){$.datepicker._tidyDialog(inst)};if(duration!=""&&$.effects&&$.effects[showAnim]){inst.dpDiv.hide(showAnim,$.datepicker._get(inst,"showOptions"),duration,postProcess)}else{inst.dpDiv[(duration==""?"hide":(showAnim=="slideDown"?"slideUp":(showAnim=="fadeIn"?"fadeOut":"hide")))](duration,postProcess)}if(duration==""){this._tidyDialog(inst)}var onClose=this._get(inst,"onClose");if(onClose){onClose.apply((inst.input?inst.input[0]:null),[(inst.input?inst.input.val():""),inst])}this._datepickerShowing=false;this._lastInput=null;if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});if($.blockUI){$.unblockUI();$("body").append(this.dpDiv)}}this._inDialog=false}this._curInst=null},_tidyDialog:function(inst){inst.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(event){if(!$.datepicker._curInst){return}var $target=$(event.target);if(($target.parents("#"+$.datepicker._mainDivId).length==0)&&!$target.hasClass($.datepicker.markerClassName)&&!$target.hasClass($.datepicker._triggerClass)&&$.datepicker._datepickerShowing&&!($.datepicker._inDialog&&$.blockUI)){$.datepicker._hideDatepicker(null,"")}},_adjustDate:function(id,offset,period){var target=$(id);var inst=this._getInst(target[0]);if(this._isDisabledDatepicker(target[0])){return}this._adjustInstDate(inst,offset+(period=="M"?this._get(inst,"showCurrentAtPos"):0),period);this._updateDatepicker(inst)},_gotoToday:function(id){var target=$(id);var inst=this._getInst(target[0]);if(this._get(inst,"gotoCurrent")&&inst.currentDay){inst.selectedDay=inst.currentDay;inst.drawMonth=inst.selectedMonth=inst.currentMonth;inst.drawYear=inst.selectedYear=inst.currentYear}else{var date=new Date();inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear()}this._notifyChange(inst);this._adjustDate(target)},_selectMonthYear:function(id,select,period){var target=$(id);var inst=this._getInst(target[0]);inst._selectingMonthYear=false;inst["selected"+(period=="M"?"Month":"Year")]=inst["draw"+(period=="M"?"Month":"Year")]=parseInt(select.options[select.selectedIndex].value,10);this._notifyChange(inst);this._adjustDate(target)},_clickMonthYear:function(id){var target=$(id);var inst=this._getInst(target[0]);if(inst.input&&inst._selectingMonthYear&&!$.browser.msie){inst.input[0].focus()}inst._selectingMonthYear=!inst._selectingMonthYear},_selectDay:function(id,month,year,td){var target=$(id);if($(td).hasClass(this._unselectableClass)||this._isDisabledDatepicker(target[0])){return}var inst=this._getInst(target[0]);inst.selectedDay=inst.currentDay=$("a",td).html();inst.selectedMonth=inst.currentMonth=month;inst.selectedYear=inst.currentYear=year;if(inst.stayOpen){inst.endDay=inst.endMonth=inst.endYear=null}this._selectDate(id,this._formatDate(inst,inst.currentDay,inst.currentMonth,inst.currentYear));if(inst.stayOpen){inst.rangeStart=this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay));this._updateDatepicker(inst)}},_clearDate:function(id){var target=$(id);var inst=this._getInst(target[0]);inst.stayOpen=false;inst.endDay=inst.endMonth=inst.endYear=inst.rangeStart=null;this._selectDate(target,"")},_selectDate:function(id,dateStr){var target=$(id);var inst=this._getInst(target[0]);dateStr=(dateStr!=null?dateStr:this._formatDate(inst));if(inst.input){inst.input.val(dateStr)}this._updateAlternate(inst);var onSelect=this._get(inst,"onSelect");if(onSelect){onSelect.apply((inst.input?inst.input[0]:null),[dateStr,inst])}else{if(inst.input){inst.input.trigger("change")}}if(inst.inline){this._updateDatepicker(inst)}else{if(!inst.stayOpen){this._hideDatepicker(null,this._get(inst,"duration"));this._lastInput=inst.input[0];if(typeof(inst.input[0])!="object"){inst.input[0].focus()}this._lastInput=null}}},_updateAlternate:function(inst){var altField=this._get(inst,"altField");if(altField){var altFormat=this._get(inst,"altFormat")||this._get(inst,"dateFormat");var date=this._getDate(inst);dateStr=this.formatDate(altFormat,date,this._getFormatConfig(inst));$(altField).each(function(){$(this).val(dateStr)})}},noWeekends:function(date){var day=date.getDay();return[(day>0&&day<6),""]},iso8601Week:function(date){var checkDate=new Date(date.getFullYear(),date.getMonth(),date.getDate());var firstMon=new Date(checkDate.getFullYear(),1-1,4);var firstDay=firstMon.getDay()||7;firstMon.setDate(firstMon.getDate()+1-firstDay);if(firstDay<4&&checkDate<firstMon){checkDate.setDate(checkDate.getDate()-3);return $.datepicker.iso8601Week(checkDate)}else{if(checkDate>new Date(checkDate.getFullYear(),12-1,28)){firstDay=new Date(checkDate.getFullYear()+1,1-1,4).getDay()||7;if(firstDay>4&&(checkDate.getDay()||7)<firstDay-3){return 1}}}return Math.floor(((checkDate-firstMon)/86400000)/7)+1},parseDate:function(format,value,settings){if(format==null||value==null){throw"Invalid arguments"}value=(typeof value=="object"?value.toString():value+"");if(value==""){return null}var shortYearCutoff=(settings?settings.shortYearCutoff:null)||this._defaults.shortYearCutoff;var dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort;var dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames;var monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort;var monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames;var year=-1;var month=-1;var day=-1;var doy=-1;var literal=false;var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);if(matches){iFormat++}return matches};var getNumber=function(match){lookAhead(match);var origSize=(match=="@"?14:(match=="y"?4:(match=="o"?3:2)));var size=origSize;var num=0;while(size>0&&iValue<value.length&&value.charAt(iValue)>="0"&&value.charAt(iValue)<="9"){num=num*10+parseInt(value.charAt(iValue++),10);size--}if(size==origSize){throw"Missing number at position "+iValue}return num};var getName=function(match,shortNames,longNames){var names=(lookAhead(match)?longNames:shortNames);var size=0;for(var j=0;j<names.length;j++){size=Math.max(size,names[j].length)}var name="";var iInit=iValue;while(size>0&&iValue<value.length){name+=value.charAt(iValue++);for(var i=0;i<names.length;i++){if(name==names[i]){return i+1}}size--}throw"Unknown name at position "+iInit};var checkLiteral=function(){if(value.charAt(iValue)!=format.charAt(iFormat)){throw"Unexpected literal at position "+iValue}iValue++};var iValue=0;for(var iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false}else{checkLiteral()}}else{switch(format.charAt(iFormat)){case"d":day=getNumber("d");break;case"D":getName("D",dayNamesShort,dayNames);break;case"o":doy=getNumber("o");break;case"m":month=getNumber("m");break;case"M":month=getName("M",monthNamesShort,monthNames);break;case"y":year=getNumber("y");break;case"@":var date=new Date(getNumber("@"));year=date.getFullYear();month=date.getMonth()+1;day=date.getDate();break;case"'":if(lookAhead("'")){checkLiteral()}else{literal=true}break;default:checkLiteral()}}}if(year==-1){year=new Date().getFullYear()}else{if(year<100){year+=new Date().getFullYear()-new Date().getFullYear()%100+(year<=shortYearCutoff?0:-100)}}if(doy>-1){month=1;day=doy;do{var dim=this._getDaysInMonth(year,month-1);if(day<=dim){break}month++;day-=dim}while(true)}var date=this._daylightSavingAdjust(new Date(year,month-1,day));if(date.getFullYear()!=year||date.getMonth()+1!=month||date.getDate()!=day){throw"Invalid date"}return date},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TIMESTAMP:"@",W3C:"yy-mm-dd",formatDate:function(format,date,settings){if(!date){return""}var dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort;var dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames;var monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort;var monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames;var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);if(matches){iFormat++}return matches};var formatNumber=function(match,value,len){var num=""+value;if(lookAhead(match)){while(num.length<len){num="0"+num}}return num};var formatName=function(match,value,shortNames,longNames){return(lookAhead(match)?longNames[value]:shortNames[value])};var output="";var literal=false;if(date){for(var iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false}else{output+=format.charAt(iFormat)}}else{switch(format.charAt(iFormat)){case"d":output+=formatNumber("d",date.getDate(),2);break;case"D":output+=formatName("D",date.getDay(),dayNamesShort,dayNames);break;case"o":var doy=date.getDate();for(var m=date.getMonth()-1;m>=0;m--){doy+=this._getDaysInMonth(date.getFullYear(),m)}output+=formatNumber("o",doy,3);break;case"m":output+=formatNumber("m",date.getMonth()+1,2);break;case"M":output+=formatName("M",date.getMonth(),monthNamesShort,monthNames);break;case"y":output+=(lookAhead("y")?date.getFullYear():(date.getYear()%100<10?"0":"")+date.getYear()%100);break;case"@":output+=date.getTime();break;case"'":if(lookAhead("'")){output+="'"}else{literal=true}break;default:output+=format.charAt(iFormat)}}}}return output},_possibleChars:function(format){var chars="";var literal=false;for(var iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false}else{chars+=format.charAt(iFormat)}}else{switch(format.charAt(iFormat)){case"d":case"m":case"y":case"@":chars+="0123456789";break;case"D":case"M":return null;case"'":if(lookAhead("'")){chars+="'"}else{literal=true}break;default:chars+=format.charAt(iFormat)}}}return chars},_get:function(inst,name){return inst.settings[name]!==undefined?inst.settings[name]:this._defaults[name]},_setDateFromField:function(inst){var dateFormat=this._get(inst,"dateFormat");var dates=inst.input?inst.input.val():null;inst.endDay=inst.endMonth=inst.endYear=null;var date=defaultDate=this._getDefaultDate(inst);var settings=this._getFormatConfig(inst);try{date=this.parseDate(dateFormat,dates,settings)||defaultDate}catch(event){this.log(event);date=defaultDate}inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();inst.currentDay=(dates?date.getDate():0);inst.currentMonth=(dates?date.getMonth():0);inst.currentYear=(dates?date.getFullYear():0);this._adjustInstDate(inst)},_getDefaultDate:function(inst){var date=this._determineDate(this._get(inst,"defaultDate"),new Date());var minDate=this._getMinMaxDate(inst,"min",true);var maxDate=this._getMinMaxDate(inst,"max");date=(minDate&&date<minDate?minDate:date);date=(maxDate&&date>maxDate?maxDate:date);return date},_determineDate:function(date,defaultDate){var offsetNumeric=function(offset){var date=new Date();date.setDate(date.getDate()+offset);return date};var offsetString=function(offset,getDaysInMonth){var date=new Date();var year=date.getFullYear();var month=date.getMonth();var day=date.getDate();var pattern=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g;var matches=pattern.exec(offset);while(matches){switch(matches[2]||"d"){case"d":case"D":day+=parseInt(matches[1],10);break;case"w":case"W":day+=parseInt(matches[1],10)*7;break;case"m":case"M":month+=parseInt(matches[1],10);day=Math.min(day,getDaysInMonth(year,month));break;case"y":case"Y":year+=parseInt(matches[1],10);day=Math.min(day,getDaysInMonth(year,month));break}matches=pattern.exec(offset)}return new Date(year,month,day)};date=(date==null?defaultDate:(typeof date=="string"?offsetString(date,this._getDaysInMonth):(typeof date=="number"?(isNaN(date)?defaultDate:offsetNumeric(date)):date)));date=(date&&date.toString()=="Invalid Date"?defaultDate:date);if(date){date.setHours(0);date.setMinutes(0);date.setSeconds(0);date.setMilliseconds(0)}return this._daylightSavingAdjust(date)},_daylightSavingAdjust:function(date){if(!date){return null}date.setHours(date.getHours()>12?date.getHours()+2:0);return date},_setDate:function(inst,date,endDate){var clear=!(date);var origMonth=inst.selectedMonth;var origYear=inst.selectedYear;date=this._determineDate(date,new Date());inst.selectedDay=inst.currentDay=date.getDate();inst.drawMonth=inst.selectedMonth=inst.currentMonth=date.getMonth();inst.drawYear=inst.selectedYear=inst.currentYear=date.getFullYear();if(origMonth!=inst.selectedMonth||origYear!=inst.selectedYear){this._notifyChange(inst)}this._adjustInstDate(inst);if(inst.input){inst.input.val(clear?"":this._formatDate(inst))}},_getDate:function(inst){var startDate=(!inst.currentYear||(inst.input&&inst.input.val()=="")?null:this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));return startDate},_generateHTML:function(inst){var today=new Date();today=this._daylightSavingAdjust(new Date(today.getFullYear(),today.getMonth(),today.getDate()));var isRTL=this._get(inst,"isRTL");var showButtonPanel=this._get(inst,"showButtonPanel");var hideIfNoPrevNext=this._get(inst,"hideIfNoPrevNext");var navigationAsDateFormat=this._get(inst,"navigationAsDateFormat");var numMonths=this._getNumberOfMonths(inst);var showCurrentAtPos=this._get(inst,"showCurrentAtPos");var stepMonths=this._get(inst,"stepMonths");var stepBigMonths=this._get(inst,"stepBigMonths");var isMultiMonth=(numMonths[0]!=1||numMonths[1]!=1);var currentDate=this._daylightSavingAdjust((!inst.currentDay?new Date(9999,9,9):new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));var minDate=this._getMinMaxDate(inst,"min",true);var maxDate=this._getMinMaxDate(inst,"max");var drawMonth=inst.drawMonth-showCurrentAtPos;var drawYear=inst.drawYear;if(drawMonth<0){drawMonth+=12;drawYear--}if(maxDate){var maxDraw=this._daylightSavingAdjust(new Date(maxDate.getFullYear(),maxDate.getMonth()-numMonths[1]+1,maxDate.getDate()));maxDraw=(minDate&&maxDraw<minDate?minDate:maxDraw);while(this._daylightSavingAdjust(new Date(drawYear,drawMonth,1))>maxDraw){drawMonth--;if(drawMonth<0){drawMonth=11;drawYear--}}}inst.drawMonth=drawMonth;inst.drawYear=drawYear;var prevText=this._get(inst,"prevText");prevText=(!navigationAsDateFormat?prevText:this.formatDate(prevText,this._daylightSavingAdjust(new Date(drawYear,drawMonth-stepMonths,1)),this._getFormatConfig(inst)));var prev=(this._canAdjustMonth(inst,-1,drawYear,drawMonth)?'<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery.datepicker._adjustDate(\'#'+inst.id+"', -"+stepMonths+", 'M');\" title=\""+prevText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"e":"w")+'">'+prevText+"</span></a>":(hideIfNoPrevNext?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+prevText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"e":"w")+'">'+prevText+"</span></a>"));var nextText=this._get(inst,"nextText");nextText=(!navigationAsDateFormat?nextText:this.formatDate(nextText,this._daylightSavingAdjust(new Date(drawYear,drawMonth+stepMonths,1)),this._getFormatConfig(inst)));var next=(this._canAdjustMonth(inst,+1,drawYear,drawMonth)?'<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery.datepicker._adjustDate(\'#'+inst.id+"', +"+stepMonths+", 'M');\" title=\""+nextText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"w":"e")+'">'+nextText+"</span></a>":(hideIfNoPrevNext?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+nextText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"w":"e")+'">'+nextText+"</span></a>"));var currentText=this._get(inst,"currentText");var gotoDate=(this._get(inst,"gotoCurrent")&&inst.currentDay?currentDate:today);currentText=(!navigationAsDateFormat?currentText:this.formatDate(currentText,gotoDate,this._getFormatConfig(inst)));var controls=(!inst.inline?'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery.datepicker._hideDatepicker();">'+this._get(inst,"closeText")+"</button>":"");var buttonPanel=(showButtonPanel)?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(isRTL?controls:"")+(this._isInRange(inst,gotoDate)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery.datepicker._gotoToday(\'#'+inst.id+"');\">"+currentText+"</button>":"")+(isRTL?"":controls)+"</div>":"";var firstDay=parseInt(this._get(inst,"firstDay"),10);firstDay=(isNaN(firstDay)?0:firstDay);var dayNames=this._get(inst,"dayNames");var dayNamesShort=this._get(inst,"dayNamesShort");var dayNamesMin=this._get(inst,"dayNamesMin");var monthNames=this._get(inst,"monthNames");var monthNamesShort=this._get(inst,"monthNamesShort");var beforeShowDay=this._get(inst,"beforeShowDay");var showOtherMonths=this._get(inst,"showOtherMonths");var calculateWeek=this._get(inst,"calculateWeek")||this.iso8601Week;var endDate=inst.endDay?this._daylightSavingAdjust(new Date(inst.endYear,inst.endMonth,inst.endDay)):currentDate;var defaultDate=this._getDefaultDate(inst);var html="";for(var row=0;row<numMonths[0];row++){var group="";for(var col=0;col<numMonths[1];col++){var selectedDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,inst.selectedDay));var cornerClass=" ui-corner-all";var calender="";if(isMultiMonth){calender+='<div class="ui-datepicker-group ui-datepicker-group-';switch(col){case 0:calender+="first";cornerClass=" ui-corner-"+(isRTL?"right":"left");break;case numMonths[1]-1:calender+="last";cornerClass=" ui-corner-"+(isRTL?"left":"right");break;default:calender+="middle";cornerClass="";break}calender+='">'}calender+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+cornerClass+'">'+(/all|left/.test(cornerClass)&&row==0?(isRTL?next:prev):"")+(/all|right/.test(cornerClass)&&row==0?(isRTL?prev:next):"")+this._generateMonthYearHeader(inst,drawMonth,drawYear,minDate,maxDate,selectedDate,row>0||col>0,monthNames,monthNamesShort)+'</div><table class="ui-datepicker-calendar"><thead><tr>';var thead="";for(var dow=0;dow<7;dow++){var day=(dow+firstDay)%7;thead+="<th"+((dow+firstDay+6)%7>=5?' class="ui-datepicker-week-end"':"")+'><span title="'+dayNames[day]+'">'+dayNamesMin[day]+"</span></th>"}calender+=thead+"</tr></thead><tbody>";var daysInMonth=this._getDaysInMonth(drawYear,drawMonth);if(drawYear==inst.selectedYear&&drawMonth==inst.selectedMonth){inst.selectedDay=Math.min(inst.selectedDay,daysInMonth)}var leadDays=(this._getFirstDayOfMonth(drawYear,drawMonth)-firstDay+7)%7;var numRows=(isMultiMonth?6:Math.ceil((leadDays+daysInMonth)/7));var printDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,1-leadDays));for(var dRow=0;dRow<numRows;dRow++){calender+="<tr>";var tbody="";for(var dow=0;dow<7;dow++){var daySettings=(beforeShowDay?beforeShowDay.apply((inst.input?inst.input[0]:null),[printDate]):[true,""]);var otherMonth=(printDate.getMonth()!=drawMonth);var unselectable=otherMonth||!daySettings[0]||(minDate&&printDate<minDate)||(maxDate&&printDate>maxDate);tbody+='<td class="'+((dow+firstDay+6)%7>=5?" ui-datepicker-week-end":"")+(otherMonth?" ui-datepicker-other-month":"")+((printDate.getTime()==selectedDate.getTime()&&drawMonth==inst.selectedMonth&&inst._keyEvent)||(defaultDate.getTime()==printDate.getTime()&&defaultDate.getTime()==selectedDate.getTime())?" "+this._dayOverClass:"")+(unselectable?" "+this._unselectableClass+" ui-state-disabled":"")+(otherMonth&&!showOtherMonths?"":" "+daySettings[1]+(printDate.getTime()>=currentDate.getTime()&&printDate.getTime()<=endDate.getTime()?" "+this._currentClass:"")+(printDate.getTime()==today.getTime()?" ui-datepicker-today":""))+'"'+((!otherMonth||showOtherMonths)&&daySettings[2]?' title="'+daySettings[2]+'"':"")+(unselectable?"":" onclick=\"DP_jQuery.datepicker._selectDay('#"+inst.id+"',"+drawMonth+","+drawYear+', this);return false;"')+">"+(otherMonth?(showOtherMonths?printDate.getDate():"&#xa0;"):(unselectable?'<span class="ui-state-default">'+printDate.getDate()+"</span>":'<a class="ui-state-default'+(printDate.getTime()==today.getTime()?" ui-state-highlight":"")+(printDate.getTime()>=currentDate.getTime()&&printDate.getTime()<=endDate.getTime()?" ui-state-active":"")+'" href="#">'+printDate.getDate()+"</a>"))+"</td>";printDate.setDate(printDate.getDate()+1);printDate=this._daylightSavingAdjust(printDate)}calender+=tbody+"</tr>"}drawMonth++;if(drawMonth>11){drawMonth=0;drawYear++}calender+="</tbody></table>"+(isMultiMonth?"</div>"+((numMonths[0]>0&&col==numMonths[1]-1)?'<div class="ui-datepicker-row-break"></div>':""):"");group+=calender}html+=group}html+=buttonPanel+($.browser.msie&&parseInt($.browser.version,10)<7&&!inst.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':"");inst._keyEvent=false;return html},_generateMonthYearHeader:function(inst,drawMonth,drawYear,minDate,maxDate,selectedDate,secondary,monthNames,monthNamesShort){minDate=(inst.rangeStart&&minDate&&selectedDate<minDate?selectedDate:minDate);var changeMonth=this._get(inst,"changeMonth");var changeYear=this._get(inst,"changeYear");var showMonthAfterYear=this._get(inst,"showMonthAfterYear");var html='<div class="ui-datepicker-title">';var monthHtml="";if(secondary||!changeMonth){monthHtml+='<span class="ui-datepicker-month">'+monthNames[drawMonth]+"</span> "}else{var inMinYear=(minDate&&minDate.getFullYear()==drawYear);var inMaxYear=(maxDate&&maxDate.getFullYear()==drawYear);monthHtml+='<select class="ui-datepicker-month" onchange="DP_jQuery.datepicker._selectMonthYear(\'#'+inst.id+"', this, 'M');\" onclick=\"DP_jQuery.datepicker._clickMonthYear('#"+inst.id+"');\">";for(var month=0;month<12;month++){if((!inMinYear||month>=minDate.getMonth())&&(!inMaxYear||month<=maxDate.getMonth())){monthHtml+='<option value="'+month+'"'+(month==drawMonth?' selected="selected"':"")+">"+monthNamesShort[month]+"</option>"}}monthHtml+="</select>"}if(!showMonthAfterYear){html+=monthHtml+((secondary||changeMonth||changeYear)&&(!(changeMonth&&changeYear))?"&#xa0;":"")}if(secondary||!changeYear){html+='<span class="ui-datepicker-year">'+drawYear+"</span>"}else{var years=this._get(inst,"yearRange").split(":");var year=0;var endYear=0;if(years.length!=2){year=drawYear-10;endYear=drawYear+10}else{if(years[0].charAt(0)=="+"||years[0].charAt(0)=="-"){year=drawYear+parseInt(years[0],10);endYear=drawYear+parseInt(years[1],10)}else{year=parseInt(years[0],10);endYear=parseInt(years[1],10)}}year=(minDate?Math.max(year,minDate.getFullYear()):year);endYear=(maxDate?Math.min(endYear,maxDate.getFullYear()):endYear);html+='<select class="ui-datepicker-year" onchange="DP_jQuery.datepicker._selectMonthYear(\'#'+inst.id+"', this, 'Y');\" onclick=\"DP_jQuery.datepicker._clickMonthYear('#"+inst.id+"');\">";for(;year<=endYear;year++){html+='<option value="'+year+'"'+(year==drawYear?' selected="selected"':"")+">"+year+"</option>"}html+="</select>"}if(showMonthAfterYear){html+=(secondary||changeMonth||changeYear?"&#xa0;":"")+monthHtml}html+="</div>";return html},_adjustInstDate:function(inst,offset,period){var year=inst.drawYear+(period=="Y"?offset:0);var month=inst.drawMonth+(period=="M"?offset:0);var day=Math.min(inst.selectedDay,this._getDaysInMonth(year,month))+(period=="D"?offset:0);var date=this._daylightSavingAdjust(new Date(year,month,day));var minDate=this._getMinMaxDate(inst,"min",true);var maxDate=this._getMinMaxDate(inst,"max");date=(minDate&&date<minDate?minDate:date);date=(maxDate&&date>maxDate?maxDate:date);inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();if(period=="M"||period=="Y"){this._notifyChange(inst)}},_notifyChange:function(inst){var onChange=this._get(inst,"onChangeMonthYear");if(onChange){onChange.apply((inst.input?inst.input[0]:null),[inst.selectedYear,inst.selectedMonth+1,inst])}},_getNumberOfMonths:function(inst){var numMonths=this._get(inst,"numberOfMonths");return(numMonths==null?[1,1]:(typeof numMonths=="number"?[1,numMonths]:numMonths))},_getMinMaxDate:function(inst,minMax,checkRange){var date=this._determineDate(this._get(inst,minMax+"Date"),null);return(!checkRange||!inst.rangeStart?date:(!date||inst.rangeStart>date?inst.rangeStart:date))},_getDaysInMonth:function(year,month){return 32-new Date(year,month,32).getDate()},_getFirstDayOfMonth:function(year,month){return new Date(year,month,1).getDay()},_canAdjustMonth:function(inst,offset,curYear,curMonth){var numMonths=this._getNumberOfMonths(inst);var date=this._daylightSavingAdjust(new Date(curYear,curMonth+(offset<0?offset:numMonths[1]),1));if(offset<0){date.setDate(this._getDaysInMonth(date.getFullYear(),date.getMonth()))}return this._isInRange(inst,date)},_isInRange:function(inst,date){var newMinDate=(!inst.rangeStart?null:this._daylightSavingAdjust(new Date(inst.selectedYear,inst.selectedMonth,inst.selectedDay)));newMinDate=(newMinDate&&inst.rangeStart<newMinDate?inst.rangeStart:newMinDate);var minDate=newMinDate||this._getMinMaxDate(inst,"min");var maxDate=this._getMinMaxDate(inst,"max");return((!minDate||date>=minDate)&&(!maxDate||date<=maxDate))},_getFormatConfig:function(inst){var shortYearCutoff=this._get(inst,"shortYearCutoff");shortYearCutoff=(typeof shortYearCutoff!="string"?shortYearCutoff:new Date().getFullYear()%100+parseInt(shortYearCutoff,10));return{shortYearCutoff:shortYearCutoff,dayNamesShort:this._get(inst,"dayNamesShort"),dayNames:this._get(inst,"dayNames"),monthNamesShort:this._get(inst,"monthNamesShort"),monthNames:this._get(inst,"monthNames")}},_formatDate:function(inst,day,month,year){if(!day){inst.currentDay=inst.selectedDay;inst.currentMonth=inst.selectedMonth;inst.currentYear=inst.selectedYear}var date=(day?(typeof day=="object"?day:this._daylightSavingAdjust(new Date(year,month,day))):this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));return this.formatDate(this._get(inst,"dateFormat"),date,this._getFormatConfig(inst))}});function extendRemove(target,props){$.extend(target,props);for(var name in props){if(props[name]==null||props[name]==undefined){target[name]=props[name]}}return target}function isArray(a){return(a&&(($.browser.safari&&typeof a=="object"&&a.length)||(a.constructor&&a.constructor.toString().match(/\Array\(\)/))))}$.fn.datepicker=function(options){if(!$.datepicker.initialized){$(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv);$.datepicker.initialized=true}var otherArgs=Array.prototype.slice.call(arguments,1);if(typeof options=="string"&&(options=="isDisabled"||options=="getDate")){return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs))}return this.each(function(){typeof options=="string"?$.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this].concat(otherArgs)):$.datepicker._attachDatepicker(this,options)})};$.datepicker=new Datepicker();$.datepicker.initialized=false;$.datepicker.uuid=new Date().getTime();$.datepicker.version="1.7.1";window.DP_jQuery=$})(jQuery);;/*
 * jQuery UI Progressbar 1.7.1
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Progressbar
 *
 * Depends:
 *   ui.core.js
 */(function(a){a.widget("ui.progressbar",{_init:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this._valueMin(),"aria-valuemax":this._valueMax(),"aria-valuenow":this._value()});this.valueDiv=a('<div class="ui-progressbar-value ui-widget-header ui-corner-left"></div>').appendTo(this.element);this._refreshValue()},destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow").removeData("progressbar").unbind(".progressbar");this.valueDiv.remove();a.widget.prototype.destroy.apply(this,arguments)},value:function(b){arguments.length&&this._setData("value",b);return this._value()},_setData:function(b,c){switch(b){case"value":this.options.value=c;this._refreshValue();this._trigger("change",null,{});break}a.widget.prototype._setData.apply(this,arguments)},_value:function(){var b=this.options.value;if(b<this._valueMin()){b=this._valueMin()}if(b>this._valueMax()){b=this._valueMax()}return b},_valueMin:function(){var b=0;return b},_valueMax:function(){var b=100;return b},_refreshValue:function(){var b=this.value();this.valueDiv[b==this._valueMax()?"addClass":"removeClass"]("ui-corner-right");this.valueDiv.width(b+"%");this.element.attr("aria-valuenow",b)}});a.extend(a.ui.progressbar,{version:"1.7.1",defaults:{value:0}})})(jQuery);;/*
 * jQuery UI Effects 1.7.1
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/
 */jQuery.effects||(function(d){d.effects={version:"1.7.1",save:function(g,h){for(var f=0;f<h.length;f++){if(h[f]!==null){g.data("ec.storage."+h[f],g[0].style[h[f]])}}},restore:function(g,h){for(var f=0;f<h.length;f++){if(h[f]!==null){g.css(h[f],g.data("ec.storage."+h[f]))}}},setMode:function(f,g){if(g=="toggle"){g=f.is(":hidden")?"show":"hide"}return g},getBaseline:function(g,h){var i,f;switch(g[0]){case"top":i=0;break;case"middle":i=0.5;break;case"bottom":i=1;break;default:i=g[0]/h.height}switch(g[1]){case"left":f=0;break;case"center":f=0.5;break;case"right":f=1;break;default:f=g[1]/h.width}return{x:f,y:i}},createWrapper:function(f){if(f.parent().is(".ui-effects-wrapper")){return f.parent()}var g={width:f.outerWidth(true),height:f.outerHeight(true),"float":f.css("float")};f.wrap('<div class="ui-effects-wrapper" style="font-size:100%;background:transparent;border:none;margin:0;padding:0"></div>');var j=f.parent();if(f.css("position")=="static"){j.css({position:"relative"});f.css({position:"relative"})}else{var i=f.css("top");if(isNaN(parseInt(i,10))){i="auto"}var h=f.css("left");if(isNaN(parseInt(h,10))){h="auto"}j.css({position:f.css("position"),top:i,left:h,zIndex:f.css("z-index")}).show();f.css({position:"relative",top:0,left:0})}j.css(g);return j},removeWrapper:function(f){if(f.parent().is(".ui-effects-wrapper")){return f.parent().replaceWith(f)}return f},setTransition:function(g,i,f,h){h=h||{};d.each(i,function(k,j){unit=g.cssUnit(j);if(unit[0]>0){h[j]=unit[0]*f+unit[1]}});return h},animateClass:function(h,i,k,j){var f=(typeof k=="function"?k:(j?j:null));var g=(typeof k=="string"?k:null);return this.each(function(){var q={};var o=d(this);var p=o.attr("style")||"";if(typeof p=="object"){p=p.cssText}if(h.toggle){o.hasClass(h.toggle)?h.remove=h.toggle:h.add=h.toggle}var l=d.extend({},(document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle));if(h.add){o.addClass(h.add)}if(h.remove){o.removeClass(h.remove)}var m=d.extend({},(document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle));if(h.add){o.removeClass(h.add)}if(h.remove){o.addClass(h.remove)}for(var r in m){if(typeof m[r]!="function"&&m[r]&&r.indexOf("Moz")==-1&&r.indexOf("length")==-1&&m[r]!=l[r]&&(r.match(/color/i)||(!r.match(/color/i)&&!isNaN(parseInt(m[r],10))))&&(l.position!="static"||(l.position=="static"&&!r.match(/left|top|bottom|right/)))){q[r]=m[r]}}o.animate(q,i,g,function(){if(typeof d(this).attr("style")=="object"){d(this).attr("style")["cssText"]="";d(this).attr("style")["cssText"]=p}else{d(this).attr("style",p)}if(h.add){d(this).addClass(h.add)}if(h.remove){d(this).removeClass(h.remove)}if(f){f.apply(this,arguments)}})})}};function c(g,f){var i=g[1]&&g[1].constructor==Object?g[1]:{};if(f){i.mode=f}var h=g[1]&&g[1].constructor!=Object?g[1]:(i.duration?i.duration:g[2]);h=d.fx.off?0:typeof h==="number"?h:d.fx.speeds[h]||d.fx.speeds._default;var j=i.callback||(d.isFunction(g[1])&&g[1])||(d.isFunction(g[2])&&g[2])||(d.isFunction(g[3])&&g[3]);return[g[0],i,h,j]}d.fn.extend({_show:d.fn.show,_hide:d.fn.hide,__toggle:d.fn.toggle,_addClass:d.fn.addClass,_removeClass:d.fn.removeClass,_toggleClass:d.fn.toggleClass,effect:function(g,f,h,i){return d.effects[g]?d.effects[g].call(this,{method:g,options:f||{},duration:h,callback:i}):null},show:function(){if(!arguments[0]||(arguments[0].constructor==Number||(/(slow|normal|fast)/).test(arguments[0]))){return this._show.apply(this,arguments)}else{return this.effect.apply(this,c(arguments,"show"))}},hide:function(){if(!arguments[0]||(arguments[0].constructor==Number||(/(slow|normal|fast)/).test(arguments[0]))){return this._hide.apply(this,arguments)}else{return this.effect.apply(this,c(arguments,"hide"))}},toggle:function(){if(!arguments[0]||(arguments[0].constructor==Number||(/(slow|normal|fast)/).test(arguments[0]))||(arguments[0].constructor==Function)){return this.__toggle.apply(this,arguments)}else{return this.effect.apply(this,c(arguments,"toggle"))}},addClass:function(g,f,i,h){return f?d.effects.animateClass.apply(this,[{add:g},f,i,h]):this._addClass(g)},removeClass:function(g,f,i,h){return f?d.effects.animateClass.apply(this,[{remove:g},f,i,h]):this._removeClass(g)},toggleClass:function(g,f,i,h){return((typeof f!=="boolean")&&f)?d.effects.animateClass.apply(this,[{toggle:g},f,i,h]):this._toggleClass(g,f)},morph:function(f,h,g,j,i){return d.effects.animateClass.apply(this,[{add:h,remove:f},g,j,i])},switchClass:function(){return this.morph.apply(this,arguments)},cssUnit:function(f){var g=this.css(f),h=[];d.each(["em","px","%","pt"],function(j,k){if(g.indexOf(k)>0){h=[parseFloat(g),k]}});return h}});d.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","color","outlineColor"],function(g,f){d.fx.step[f]=function(h){if(h.state==0){h.start=e(h.elem,f);h.end=b(h.end)}h.elem.style[f]="rgb("+[Math.max(Math.min(parseInt((h.pos*(h.end[0]-h.start[0]))+h.start[0],10),255),0),Math.max(Math.min(parseInt((h.pos*(h.end[1]-h.start[1]))+h.start[1],10),255),0),Math.max(Math.min(parseInt((h.pos*(h.end[2]-h.start[2]))+h.start[2],10),255),0)].join(",")+")"}});function b(g){var f;if(g&&g.constructor==Array&&g.length==3){return g}if(f=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(g)){return[parseInt(f[1],10),parseInt(f[2],10),parseInt(f[3],10)]}if(f=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(g)){return[parseFloat(f[1])*2.55,parseFloat(f[2])*2.55,parseFloat(f[3])*2.55]}if(f=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(g)){return[parseInt(f[1],16),parseInt(f[2],16),parseInt(f[3],16)]}if(f=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(g)){return[parseInt(f[1]+f[1],16),parseInt(f[2]+f[2],16),parseInt(f[3]+f[3],16)]}if(f=/rgba\(0, 0, 0, 0\)/.exec(g)){return a.transparent}return a[d.trim(g).toLowerCase()]}function e(h,f){var g;do{g=d.curCSS(h,f);if(g!=""&&g!="transparent"||d.nodeName(h,"body")){break}f="backgroundColor"}while(h=h.parentNode);return b(g)}var a={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]};d.easing.jswing=d.easing.swing;d.extend(d.easing,{def:"easeOutQuad",swing:function(g,h,f,j,i){return d.easing[d.easing.def](g,h,f,j,i)},easeInQuad:function(g,h,f,j,i){return j*(h/=i)*h+f},easeOutQuad:function(g,h,f,j,i){return -j*(h/=i)*(h-2)+f},easeInOutQuad:function(g,h,f,j,i){if((h/=i/2)<1){return j/2*h*h+f}return -j/2*((--h)*(h-2)-1)+f},easeInCubic:function(g,h,f,j,i){return j*(h/=i)*h*h+f},easeOutCubic:function(g,h,f,j,i){return j*((h=h/i-1)*h*h+1)+f},easeInOutCubic:function(g,h,f,j,i){if((h/=i/2)<1){return j/2*h*h*h+f}return j/2*((h-=2)*h*h+2)+f},easeInQuart:function(g,h,f,j,i){return j*(h/=i)*h*h*h+f},easeOutQuart:function(g,h,f,j,i){return -j*((h=h/i-1)*h*h*h-1)+f},easeInOutQuart:function(g,h,f,j,i){if((h/=i/2)<1){return j/2*h*h*h*h+f}return -j/2*((h-=2)*h*h*h-2)+f},easeInQuint:function(g,h,f,j,i){return j*(h/=i)*h*h*h*h+f},easeOutQuint:function(g,h,f,j,i){return j*((h=h/i-1)*h*h*h*h+1)+f},easeInOutQuint:function(g,h,f,j,i){if((h/=i/2)<1){return j/2*h*h*h*h*h+f}return j/2*((h-=2)*h*h*h*h+2)+f},easeInSine:function(g,h,f,j,i){return -j*Math.cos(h/i*(Math.PI/2))+j+f},easeOutSine:function(g,h,f,j,i){return j*Math.sin(h/i*(Math.PI/2))+f},easeInOutSine:function(g,h,f,j,i){return -j/2*(Math.cos(Math.PI*h/i)-1)+f},easeInExpo:function(g,h,f,j,i){return(h==0)?f:j*Math.pow(2,10*(h/i-1))+f},easeOutExpo:function(g,h,f,j,i){return(h==i)?f+j:j*(-Math.pow(2,-10*h/i)+1)+f},easeInOutExpo:function(g,h,f,j,i){if(h==0){return f}if(h==i){return f+j}if((h/=i/2)<1){return j/2*Math.pow(2,10*(h-1))+f}return j/2*(-Math.pow(2,-10*--h)+2)+f},easeInCirc:function(g,h,f,j,i){return -j*(Math.sqrt(1-(h/=i)*h)-1)+f},easeOutCirc:function(g,h,f,j,i){return j*Math.sqrt(1-(h=h/i-1)*h)+f},easeInOutCirc:function(g,h,f,j,i){if((h/=i/2)<1){return -j/2*(Math.sqrt(1-h*h)-1)+f}return j/2*(Math.sqrt(1-(h-=2)*h)+1)+f},easeInElastic:function(g,i,f,m,l){var j=1.70158;var k=0;var h=m;if(i==0){return f}if((i/=l)==1){return f+m}if(!k){k=l*0.3}if(h<Math.abs(m)){h=m;var j=k/4}else{var j=k/(2*Math.PI)*Math.asin(m/h)}return -(h*Math.pow(2,10*(i-=1))*Math.sin((i*l-j)*(2*Math.PI)/k))+f},easeOutElastic:function(g,i,f,m,l){var j=1.70158;var k=0;var h=m;if(i==0){return f}if((i/=l)==1){return f+m}if(!k){k=l*0.3}if(h<Math.abs(m)){h=m;var j=k/4}else{var j=k/(2*Math.PI)*Math.asin(m/h)}return h*Math.pow(2,-10*i)*Math.sin((i*l-j)*(2*Math.PI)/k)+m+f},easeInOutElastic:function(g,i,f,m,l){var j=1.70158;var k=0;var h=m;if(i==0){return f}if((i/=l/2)==2){return f+m}if(!k){k=l*(0.3*1.5)}if(h<Math.abs(m)){h=m;var j=k/4}else{var j=k/(2*Math.PI)*Math.asin(m/h)}if(i<1){return -0.5*(h*Math.pow(2,10*(i-=1))*Math.sin((i*l-j)*(2*Math.PI)/k))+f}return h*Math.pow(2,-10*(i-=1))*Math.sin((i*l-j)*(2*Math.PI)/k)*0.5+m+f},easeInBack:function(g,h,f,k,j,i){if(i==undefined){i=1.70158}return k*(h/=j)*h*((i+1)*h-i)+f},easeOutBack:function(g,h,f,k,j,i){if(i==undefined){i=1.70158}return k*((h=h/j-1)*h*((i+1)*h+i)+1)+f},easeInOutBack:function(g,h,f,k,j,i){if(i==undefined){i=1.70158}if((h/=j/2)<1){return k/2*(h*h*(((i*=(1.525))+1)*h-i))+f}return k/2*((h-=2)*h*(((i*=(1.525))+1)*h+i)+2)+f},easeInBounce:function(g,h,f,j,i){return j-d.easing.easeOutBounce(g,i-h,0,j,i)+f},easeOutBounce:function(g,h,f,j,i){if((h/=i)<(1/2.75)){return j*(7.5625*h*h)+f}else{if(h<(2/2.75)){return j*(7.5625*(h-=(1.5/2.75))*h+0.75)+f}else{if(h<(2.5/2.75)){return j*(7.5625*(h-=(2.25/2.75))*h+0.9375)+f}else{return j*(7.5625*(h-=(2.625/2.75))*h+0.984375)+f}}}},easeInOutBounce:function(g,h,f,j,i){if(h<i/2){return d.easing.easeInBounce(g,h*2,0,j,i)*0.5+f}return d.easing.easeOutBounce(g,h*2-i,0,j,i)*0.5+j*0.5+f}})})(jQuery);;/*
 * jQuery UI Effects Blind 1.7.1
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Blind
 *
 * Depends:
 *	effects.core.js
 */(function(a){a.effects.blind=function(b){return this.queue(function(){var d=a(this),c=["position","top","left"];var h=a.effects.setMode(d,b.options.mode||"hide");var g=b.options.direction||"vertical";a.effects.save(d,c);d.show();var j=a.effects.createWrapper(d).css({overflow:"hidden"});var e=(g=="vertical")?"height":"width";var i=(g=="vertical")?j.height():j.width();if(h=="show"){j.css(e,0)}var f={};f[e]=h=="show"?i:0;j.animate(f,b.duration,b.options.easing,function(){if(h=="hide"){d.hide()}a.effects.restore(d,c);a.effects.removeWrapper(d);if(b.callback){b.callback.apply(d[0],arguments)}d.dequeue()})})}})(jQuery);;/*
 * jQuery UI Effects Bounce 1.7.1
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Bounce
 *
 * Depends:
 *	effects.core.js
 */(function(a){a.effects.bounce=function(b){return this.queue(function(){var e=a(this),l=["position","top","left"];var k=a.effects.setMode(e,b.options.mode||"effect");var n=b.options.direction||"up";var c=b.options.distance||20;var d=b.options.times||5;var g=b.duration||250;if(/show|hide/.test(k)){l.push("opacity")}a.effects.save(e,l);e.show();a.effects.createWrapper(e);var f=(n=="up"||n=="down")?"top":"left";var p=(n=="up"||n=="left")?"pos":"neg";var c=b.options.distance||(f=="top"?e.outerHeight({margin:true})/3:e.outerWidth({margin:true})/3);if(k=="show"){e.css("opacity",0).css(f,p=="pos"?-c:c)}if(k=="hide"){c=c/(d*2)}if(k!="hide"){d--}if(k=="show"){var h={opacity:1};h[f]=(p=="pos"?"+=":"-=")+c;e.animate(h,g/2,b.options.easing);c=c/2;d--}for(var j=0;j<d;j++){var o={},m={};o[f]=(p=="pos"?"-=":"+=")+c;m[f]=(p=="pos"?"+=":"-=")+c;e.animate(o,g/2,b.options.easing).animate(m,g/2,b.options.easing);c=(k=="hide")?c*2:c/2}if(k=="hide"){var h={opacity:0};h[f]=(p=="pos"?"-=":"+=")+c;e.animate(h,g/2,b.options.easing,function(){e.hide();a.effects.restore(e,l);a.effects.removeWrapper(e);if(b.callback){b.callback.apply(this,arguments)}})}else{var o={},m={};o[f]=(p=="pos"?"-=":"+=")+c;m[f]=(p=="pos"?"+=":"-=")+c;e.animate(o,g/2,b.options.easing).animate(m,g/2,b.options.easing,function(){a.effects.restore(e,l);a.effects.removeWrapper(e);if(b.callback){b.callback.apply(this,arguments)}})}e.queue("fx",function(){e.dequeue()});e.dequeue()})}})(jQuery);;/*
 * jQuery UI Effects Clip 1.7.1
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Clip
 *
 * Depends:
 *	effects.core.js
 */(function(a){a.effects.clip=function(b){return this.queue(function(){var f=a(this),j=["position","top","left","height","width"];var i=a.effects.setMode(f,b.options.mode||"hide");var k=b.options.direction||"vertical";a.effects.save(f,j);f.show();var c=a.effects.createWrapper(f).css({overflow:"hidden"});var e=f[0].tagName=="IMG"?c:f;var g={size:(k=="vertical")?"height":"width",position:(k=="vertical")?"top":"left"};var d=(k=="vertical")?e.height():e.width();if(i=="show"){e.css(g.size,0);e.css(g.position,d/2)}var h={};h[g.size]=i=="show"?d:0;h[g.position]=i=="show"?0:d/2;e.animate(h,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){if(i=="hide"){f.hide()}a.effects.restore(f,j);a.effects.removeWrapper(f);if(b.callback){b.callback.apply(f[0],arguments)}f.dequeue()}})})}})(jQuery);;/*
 * jQuery UI Effects Drop 1.7.1
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Drop
 *
 * Depends:
 *	effects.core.js
 */(function(a){a.effects.drop=function(b){return this.queue(function(){var e=a(this),d=["position","top","left","opacity"];var i=a.effects.setMode(e,b.options.mode||"hide");var h=b.options.direction||"left";a.effects.save(e,d);e.show();a.effects.createWrapper(e);var f=(h=="up"||h=="down")?"top":"left";var c=(h=="up"||h=="left")?"pos":"neg";var j=b.options.distance||(f=="top"?e.outerHeight({margin:true})/2:e.outerWidth({margin:true})/2);if(i=="show"){e.css("opacity",0).css(f,c=="pos"?-j:j)}var g={opacity:i=="show"?1:0};g[f]=(i=="show"?(c=="pos"?"+=":"-="):(c=="pos"?"-=":"+="))+j;e.animate(g,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){if(i=="hide"){e.hide()}a.effects.restore(e,d);a.effects.removeWrapper(e);if(b.callback){b.callback.apply(this,arguments)}e.dequeue()}})})}})(jQuery);;/*
 * jQuery UI Effects Explode 1.7.1
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Explode
 *
 * Depends:
 *	effects.core.js
 */(function(a){a.effects.explode=function(b){return this.queue(function(){var k=b.options.pieces?Math.round(Math.sqrt(b.options.pieces)):3;var e=b.options.pieces?Math.round(Math.sqrt(b.options.pieces)):3;b.options.mode=b.options.mode=="toggle"?(a(this).is(":visible")?"hide":"show"):b.options.mode;var h=a(this).show().css("visibility","hidden");var l=h.offset();l.top-=parseInt(h.css("marginTop"),10)||0;l.left-=parseInt(h.css("marginLeft"),10)||0;var g=h.outerWidth(true);var c=h.outerHeight(true);for(var f=0;f<k;f++){for(var d=0;d<e;d++){h.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-d*(g/e),top:-f*(c/k)}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:g/e,height:c/k,left:l.left+d*(g/e)+(b.options.mode=="show"?(d-Math.floor(e/2))*(g/e):0),top:l.top+f*(c/k)+(b.options.mode=="show"?(f-Math.floor(k/2))*(c/k):0),opacity:b.options.mode=="show"?0:1}).animate({left:l.left+d*(g/e)+(b.options.mode=="show"?0:(d-Math.floor(e/2))*(g/e)),top:l.top+f*(c/k)+(b.options.mode=="show"?0:(f-Math.floor(k/2))*(c/k)),opacity:b.options.mode=="show"?1:0},b.duration||500)}}setTimeout(function(){b.options.mode=="show"?h.css({visibility:"visible"}):h.css({visibility:"visible"}).hide();if(b.callback){b.callback.apply(h[0])}h.dequeue();a("div.ui-effects-explode").remove()},b.duration||500)})}})(jQuery);;/*
 * jQuery UI Effects Fold 1.7.1
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Fold
 *
 * Depends:
 *	effects.core.js
 */(function(a){a.effects.fold=function(b){return this.queue(function(){var e=a(this),k=["position","top","left"];var h=a.effects.setMode(e,b.options.mode||"hide");var o=b.options.size||15;var n=!(!b.options.horizFirst);var g=b.duration?b.duration/2:a.fx.speeds._default/2;a.effects.save(e,k);e.show();var d=a.effects.createWrapper(e).css({overflow:"hidden"});var i=((h=="show")!=n);var f=i?["width","height"]:["height","width"];var c=i?[d.width(),d.height()]:[d.height(),d.width()];var j=/([0-9]+)%/.exec(o);if(j){o=parseInt(j[1],10)/100*c[h=="hide"?0:1]}if(h=="show"){d.css(n?{height:0,width:o}:{height:o,width:0})}var m={},l={};m[f[0]]=h=="show"?c[0]:o;l[f[1]]=h=="show"?c[1]:0;d.animate(m,g,b.options.easing).animate(l,g,b.options.easing,function(){if(h=="hide"){e.hide()}a.effects.restore(e,k);a.effects.removeWrapper(e);if(b.callback){b.callback.apply(e[0],arguments)}e.dequeue()})})}})(jQuery);;/*
 * jQuery UI Effects Highlight 1.7.1
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Highlight
 *
 * Depends:
 *	effects.core.js
 */(function(a){a.effects.highlight=function(b){return this.queue(function(){var e=a(this),d=["backgroundImage","backgroundColor","opacity"];var h=a.effects.setMode(e,b.options.mode||"show");var c=b.options.color||"#ffff99";var g=e.css("backgroundColor");a.effects.save(e,d);e.show();e.css({backgroundImage:"none",backgroundColor:c});var f={backgroundColor:g};if(h=="hide"){f.opacity=0}e.animate(f,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){if(h=="hide"){e.hide()}a.effects.restore(e,d);if(h=="show"&&a.browser.msie){this.style.removeAttribute("filter")}if(b.callback){b.callback.apply(this,arguments)}e.dequeue()}})})}})(jQuery);;/*
 * jQuery UI Effects Pulsate 1.7.1
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Pulsate
 *
 * Depends:
 *	effects.core.js
 */(function(a){a.effects.pulsate=function(b){return this.queue(function(){var d=a(this);var g=a.effects.setMode(d,b.options.mode||"show");var f=b.options.times||5;var e=b.duration?b.duration/2:a.fx.speeds._default/2;if(g=="hide"){f--}if(d.is(":hidden")){d.css("opacity",0);d.show();d.animate({opacity:1},e,b.options.easing);f=f-2}for(var c=0;c<f;c++){d.animate({opacity:0},e,b.options.easing).animate({opacity:1},e,b.options.easing)}if(g=="hide"){d.animate({opacity:0},e,b.options.easing,function(){d.hide();if(b.callback){b.callback.apply(this,arguments)}})}else{d.animate({opacity:0},e,b.options.easing).animate({opacity:1},e,b.options.easing,function(){if(b.callback){b.callback.apply(this,arguments)}})}d.queue("fx",function(){d.dequeue()});d.dequeue()})}})(jQuery);;/*
 * jQuery UI Effects Scale 1.7.1
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Scale
 *
 * Depends:
 *	effects.core.js
 */(function(a){a.effects.puff=function(b){return this.queue(function(){var f=a(this);var c=a.extend(true,{},b.options);var h=a.effects.setMode(f,b.options.mode||"hide");var g=parseInt(b.options.percent,10)||150;c.fade=true;var e={height:f.height(),width:f.width()};var d=g/100;f.from=(h=="hide")?e:{height:e.height*d,width:e.width*d};c.from=f.from;c.percent=(h=="hide")?g:100;c.mode=h;f.effect("scale",c,b.duration,b.callback);f.dequeue()})};a.effects.scale=function(b){return this.queue(function(){var g=a(this);var d=a.extend(true,{},b.options);var j=a.effects.setMode(g,b.options.mode||"effect");var h=parseInt(b.options.percent,10)||(parseInt(b.options.percent,10)==0?0:(j=="hide"?0:100));var i=b.options.direction||"both";var c=b.options.origin;if(j!="effect"){d.origin=c||["middle","center"];d.restore=true}var f={height:g.height(),width:g.width()};g.from=b.options.from||(j=="show"?{height:0,width:0}:f);var e={y:i!="horizontal"?(h/100):1,x:i!="vertical"?(h/100):1};g.to={height:f.height*e.y,width:f.width*e.x};if(b.options.fade){if(j=="show"){g.from.opacity=0;g.to.opacity=1}if(j=="hide"){g.from.opacity=1;g.to.opacity=0}}d.from=g.from;d.to=g.to;d.mode=j;g.effect("size",d,b.duration,b.callback);g.dequeue()})};a.effects.size=function(b){return this.queue(function(){var c=a(this),n=["position","top","left","width","height","overflow","opacity"];var m=["position","top","left","overflow","opacity"];var j=["width","height","overflow"];var p=["fontSize"];var k=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"];var f=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"];var g=a.effects.setMode(c,b.options.mode||"effect");var i=b.options.restore||false;var e=b.options.scale||"both";var o=b.options.origin;var d={height:c.height(),width:c.width()};c.from=b.options.from||d;c.to=b.options.to||d;if(o){var h=a.effects.getBaseline(o,d);c.from.top=(d.height-c.from.height)*h.y;c.from.left=(d.width-c.from.width)*h.x;c.to.top=(d.height-c.to.height)*h.y;c.to.left=(d.width-c.to.width)*h.x}var l={from:{y:c.from.height/d.height,x:c.from.width/d.width},to:{y:c.to.height/d.height,x:c.to.width/d.width}};if(e=="box"||e=="both"){if(l.from.y!=l.to.y){n=n.concat(k);c.from=a.effects.setTransition(c,k,l.from.y,c.from);c.to=a.effects.setTransition(c,k,l.to.y,c.to)}if(l.from.x!=l.to.x){n=n.concat(f);c.from=a.effects.setTransition(c,f,l.from.x,c.from);c.to=a.effects.setTransition(c,f,l.to.x,c.to)}}if(e=="content"||e=="both"){if(l.from.y!=l.to.y){n=n.concat(p);c.from=a.effects.setTransition(c,p,l.from.y,c.from);c.to=a.effects.setTransition(c,p,l.to.y,c.to)}}a.effects.save(c,i?n:m);c.show();a.effects.createWrapper(c);c.css("overflow","hidden").css(c.from);if(e=="content"||e=="both"){k=k.concat(["marginTop","marginBottom"]).concat(p);f=f.concat(["marginLeft","marginRight"]);j=n.concat(k).concat(f);c.find("*[width]").each(function(){child=a(this);if(i){a.effects.save(child,j)}var q={height:child.height(),width:child.width()};child.from={height:q.height*l.from.y,width:q.width*l.from.x};child.to={height:q.height*l.to.y,width:q.width*l.to.x};if(l.from.y!=l.to.y){child.from=a.effects.setTransition(child,k,l.from.y,child.from);child.to=a.effects.setTransition(child,k,l.to.y,child.to)}if(l.from.x!=l.to.x){child.from=a.effects.setTransition(child,f,l.from.x,child.from);child.to=a.effects.setTransition(child,f,l.to.x,child.to)}child.css(child.from);child.animate(child.to,b.duration,b.options.easing,function(){if(i){a.effects.restore(child,j)}})})}c.animate(c.to,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){if(g=="hide"){c.hide()}a.effects.restore(c,i?n:m);a.effects.removeWrapper(c);if(b.callback){b.callback.apply(this,arguments)}c.dequeue()}})})}})(jQuery);;/*
 * jQuery UI Effects Shake 1.7.1
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Shake
 *
 * Depends:
 *	effects.core.js
 */(function(a){a.effects.shake=function(b){return this.queue(function(){var e=a(this),l=["position","top","left"];var k=a.effects.setMode(e,b.options.mode||"effect");var n=b.options.direction||"left";var c=b.options.distance||20;var d=b.options.times||3;var g=b.duration||b.options.duration||140;a.effects.save(e,l);e.show();a.effects.createWrapper(e);var f=(n=="up"||n=="down")?"top":"left";var p=(n=="up"||n=="left")?"pos":"neg";var h={},o={},m={};h[f]=(p=="pos"?"-=":"+=")+c;o[f]=(p=="pos"?"+=":"-=")+c*2;m[f]=(p=="pos"?"-=":"+=")+c*2;e.animate(h,g,b.options.easing);for(var j=1;j<d;j++){e.animate(o,g,b.options.easing).animate(m,g,b.options.easing)}e.animate(o,g,b.options.easing).animate(h,g/2,b.options.easing,function(){a.effects.restore(e,l);a.effects.removeWrapper(e);if(b.callback){b.callback.apply(this,arguments)}});e.queue("fx",function(){e.dequeue()});e.dequeue()})}})(jQuery);;/*
 * jQuery UI Effects Slide 1.7.1
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Slide
 *
 * Depends:
 *	effects.core.js
 */(function(a){a.effects.slide=function(b){return this.queue(function(){var e=a(this),d=["position","top","left"];var i=a.effects.setMode(e,b.options.mode||"show");var h=b.options.direction||"left";a.effects.save(e,d);e.show();a.effects.createWrapper(e).css({overflow:"hidden"});var f=(h=="up"||h=="down")?"top":"left";var c=(h=="up"||h=="left")?"pos":"neg";var j=b.options.distance||(f=="top"?e.outerHeight({margin:true}):e.outerWidth({margin:true}));if(i=="show"){e.css(f,c=="pos"?-j:j)}var g={};g[f]=(i=="show"?(c=="pos"?"+=":"-="):(c=="pos"?"-=":"+="))+j;e.animate(g,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){if(i=="hide"){e.hide()}a.effects.restore(e,d);a.effects.removeWrapper(e);if(b.callback){b.callback.apply(this,arguments)}e.dequeue()}})})}})(jQuery);;/*
 * jQuery UI Effects Transfer 1.7.1
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Transfer
 *
 * Depends:
 *	effects.core.js
 */(function(a){a.effects.transfer=function(b){return this.queue(function(){var f=a(this),h=a(b.options.to),e=h.offset(),g={top:e.top,left:e.left,height:h.innerHeight(),width:h.innerWidth()},d=f.offset(),c=a('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(b.options.className).css({top:d.top,left:d.left,height:f.innerHeight(),width:f.innerWidth(),position:"absolute"}).animate(g,b.duration,b.options.easing,function(){c.remove();(b.callback&&b.callback.apply(f[0],arguments));f.dequeue()})})}})(jQuery);;;

// Stuff for JD Menu plugin for JQuery
/* Copyright (c) 2007 Paul Bakaus (paul.bakaus@googlemail.com) and Brandon Aaron (brandon.aaron@gmail.com || http://brandonaaron.net)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * $LastChangedDate$
 * $Rev$
 *
 * Version: @VERSION
 *
 * Requires: jQuery 1.2+
 */

(function($){
	
$.dimensions = {
	version: '@VERSION'
};

// Create innerHeight, innerWidth, outerHeight and outerWidth methods
$.each( [ 'Height', 'Width' ], function(i, name){
	
	// innerHeight and innerWidth
	$.fn[ 'inner' + name ] = function() {
		if (!this[0]) return;
		
		var torl = name == 'Height' ? 'Top'    : 'Left',  // top or left
		    borr = name == 'Height' ? 'Bottom' : 'Right'; // bottom or right
		
		return this.is(':visible') ? this[0]['client' + name] : num( this, name.toLowerCase() ) + num(this, 'padding' + torl) + num(this, 'padding' + borr);
	};
	
	// outerHeight and outerWidth
	$.fn[ 'outer' + name ] = function(options) {
		if (!this[0]) return;
		
		var torl = name == 'Height' ? 'Top'    : 'Left',  // top or left
		    borr = name == 'Height' ? 'Bottom' : 'Right'; // bottom or right
		
		options = $.extend({ margin: false }, options || {});
		
		var val = this.is(':visible') ? 
				this[0]['offset' + name] : 
				num( this, name.toLowerCase() )
					+ num(this, 'border' + torl + 'Width') + num(this, 'border' + borr + 'Width')
					+ num(this, 'padding' + torl) + num(this, 'padding' + borr);
		
		return val + (options.margin ? (num(this, 'margin' + torl) + num(this, 'margin' + borr)) : 0);
	};
});

// Create scrollLeft and scrollTop methods
$.each( ['Left', 'Top'], function(i, name) {
	$.fn[ 'scroll' + name ] = function(val) {
		if (!this[0]) return;
		
		return val != undefined ?
		
			// Set the scroll offset
			this.each(function() {
				this == window || this == document ?
					window.scrollTo( 
						name == 'Left' ? val : $(window)[ 'scrollLeft' ](),
						name == 'Top'  ? val : $(window)[ 'scrollTop'  ]()
					) :
					this[ 'scroll' + name ] = val;
			}) :
			
			// Return the scroll offset
			this[0] == window || this[0] == document ?
				self[ (name == 'Left' ? 'pageXOffset' : 'pageYOffset') ] ||
					$.boxModel && document.documentElement[ 'scroll' + name ] ||
					document.body[ 'scroll' + name ] :
				this[0][ 'scroll' + name ];
	};
});

$.fn.extend({
	position: function() {
		var left = 0, top = 0, elem = this[0], offset, parentOffset, offsetParent, results;
		
		if (elem) {
			// Get *real* offsetParent
			offsetParent = this.offsetParent();
			
			// Get correct offsets
			offset       = this.offset();
			parentOffset = offsetParent.offset();
			
			// Subtract element margins
			offset.top  -= num(elem, 'marginTop');
			offset.left -= num(elem, 'marginLeft');
			
			// Add offsetParent borders
			parentOffset.top  += num(offsetParent, 'borderTopWidth');
			parentOffset.left += num(offsetParent, 'borderLeftWidth');
			
			// Subtract the two offsets
			results = {
				top:  offset.top  - parentOffset.top,
				left: offset.left - parentOffset.left
			};
		}
		
		return results;
	},
	
	offsetParent: function() {
		var offsetParent = this[0].offsetParent;
		while ( offsetParent && (!/^body|html$/i.test(offsetParent.tagName) && $.css(offsetParent, 'position') == 'static') )
			offsetParent = offsetParent.offsetParent;
		return $(offsetParent);
	}
});

function num(el, prop) {
	return parseInt($.curCSS(el.jquery?el[0]:el,prop,true))||0;
};

})(jQuery);;
/*
 * jdMenu 1.4.1 (2008-03-31)
 *
 * Copyright (c) 2006,2007 Jonathan Sharp (http://jdsharp.us)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://jdsharp.us/
 *
 * Built upon jQuery 1.2.1 (http://jquery.com)
 * This also requires the jQuery dimensions >= 1.2 plugin
 */

// This initializes the menu
$(function() {
	$('ul.jd_menu').jdMenu();
});

(function($){
	function addEvents(ul) {
		var settings = $.data( $(ul).parents().andSelf().filter('ul.jd_menu')[0], 'jdMenuSettings' );
		$('> li', ul)
			.bind('mouseenter.jdmenu mouseleave.jdmenu', function(evt) {
				$(this).toggleClass('jdm_hover');
				var ul = $('> ul', this);
				if ( ul.length == 1 ) {
					clearTimeout( this.$jdTimer );
					var enter = ( evt.type == 'mouseenter' );
					var fn = ( enter ? showMenu : hideMenu );
					this.$jdTimer = setTimeout(function() {
						fn( ul[0], settings.onAnimate, settings.isVertical );
					}, enter ? settings.showDelay : settings.hideDelay );
				}
			})
			.bind('click.jdmenu', function(evt) {
				var ul = $('> ul', this);
				if ( ul.length == 1 && 
					( settings.disableLinks == true || $(this).hasClass('accessible') ) ) {
					showMenu( ul, settings.onAnimate, settings.isVertical );
					return false;
				}
				
				// The user clicked the li and we need to trigger a click for the a
				if ( evt.target == this ) {
					var link = $('> a', evt.target).not('.accessible');
					if ( link.length > 0 ) {
						var a = link[0];
						if ( !a.onclick ) {
							window.open( a.href, a.target || '_self' );
						} else {
							$(a).trigger('click');
						}
					}
				}
				if ( settings.disableLinks || 
					( !settings.disableLinks && !$(this).parent().hasClass('jd_menu') ) ) {
					$(this).parent().jdMenuHide();
					evt.stopPropagation();
				}
			})
			.find('> a')
				.bind('focus.jdmenu blur.jdmenu', function(evt) {
					var p = $(this).parents('li:eq(0)');
					if ( evt.type == 'focus' ) {
						p.addClass('jdm_hover');
					} else { 
						p.removeClass('jdm_hover');
					}
				})
				.filter('.accessible')
					.bind('click.jdmenu', function(evt) {
						evt.preventDefault();
					});
	}

	function showMenu(ul, animate, vertical) {
		var ul = $(ul);
		if ( ul.is(':visible') ) {
			return;
		}
		ul.bgiframe();
		var li = ul.parent();
		ul	.trigger('jdMenuShow')
			.positionBy({ 	target: 	li[0], 
							targetPos: 	( vertical === true || !li.parent().hasClass('jd_menu') ? 1 : 3 ), 
							positions: 	( !li.parent().hasClass('jd_menu') ? [0,7] : [4,3] ), 
							elementPos: 0,
							hideAfterPosition: true
							});
		if ( !ul.hasClass('jdm_events') ) {
			ul.addClass('jdm_events');
			addEvents(ul);
		}
		li	.addClass('jdm_active')
			// Hide any adjacent menus
			.siblings('li').find('> ul:eq(0):visible')
				.each(function(){
					hideMenu( this ); 
				});
		if ( animate === undefined ) {
			ul.show();
		} else {
			animate.apply( ul[0], [true] );
		}
	}
	
	function hideMenu(ul, animate) {
		var ul = $(ul);
		$('.bgiframe', ul).remove();
		ul	.filter(':not(.jd_menu)')
			.find('> li > ul:eq(0):visible')
				.each(function() {
					hideMenu( this );
				})
			.end();
		if ( animate === undefined ) {
			ul.hide()
		} else {
			animate.apply( ul[0], [false] );
		}

		ul	.trigger('jdMenuHide')
			.parents('li:eq(0)')
				.removeClass('jdm_active jdm_hover')
			.end()
				.find('> li')
				.removeClass('jdm_active jdm_hover');
	}
	
	// Public methods
	$.fn.jdMenu = function(settings) {
		// Future settings: activateDelay
		var settings = $.extend({	// Time in ms before menu shows
									showDelay: 		200,
									// Time in ms before menu hides
									hideDelay: 		500,
									// Should items that contain submenus not 
									// respond to clicks
									disableLinks:	false
									// This callback allows for you to animate menus
									//onAnimate:	null
									}, settings);
		if ( !$.isFunction( settings.onAnimate ) ) {
			settings.onAnimate = undefined;
		}
		return this.filter('ul.jd_menu').each(function() {
			$.data(	this, 
					'jdMenuSettings', 
					$.extend({ isVertical: $(this).hasClass('jd_menu_vertical') }, settings) 
					);
			addEvents(this);
		});
	};
	
	$.fn.jdMenuUnbind = function() {
		$('ul.jdm_events', this)
			.unbind('.jdmenu')
			.find('> a').unbind('.jdmenu');
	};
	$.fn.jdMenuHide = function() {
		return this.filter('ul').each(function(){ 
			hideMenu( this );
		});
	};

	// Private methods and logic
	$(window)
		// Bind a click event to hide all visible menus when the document is clicked
		.bind('click.jdmenu', function(){
			$('ul.jd_menu ul:visible').jdMenuHide();
		});
})(jQuery);

;
/*
 * positionBy 1.0.7 (2008-01-29)
 *
 * Copyright (c) 2006,2007 Jonathan Sharp (http://jdsharp.us)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://jdsharp.us/
 *
 * Built upon jQuery 1.2.2 (http://jquery.com)
 * This also requires the jQuery dimensions plugin
 */
(function($){
	/**
	 * This function centers an absolutely positioned element
	 */
	/*
	$.fn.positionCenter = function(offsetLeft, offsetTop) {
		var offsetLeft 	= offsetLeft || 1;
		var offsetTop 	= offsetTop || 1;

		var ww = $(window).width();
		var wh = $(window).height();
		var sl = $(window).scrollLeft();
		var st = $(window).scrollTop();

		return this.each(function() {
			var $t = $(this);
			
			// If we are not visible we have to display our element (with a negative position offscreen)

			var left = Math.round( ( ww - $t.outerWidth() ) / 2 );
			if ( left < 0 ) {
				left = 0;
			} else {
				left *= offsetLeft;
			}
			left += sl;
			var top  = Math.round( ( wh - $t.outerHeight() ) / 2 );
			if ( top < 0 ) {
				top = 0;
			} else {
				top *= offsetTop;
			}
			top += st;

			$(this).parents().each(function() {
				var $this = $(this);
				if ( $this.css('position') != 'static' ) {
					var o = $this.offset();
					left += -o.left;
					top	 += -o.top;
					return false;
				}
			});

			$t.css({left: left, top: top});
		});
	};
	*/
	
	// Our range object is used in calculating positions
	var Range = function(x1, y1, x2, y2) {
		this.x1	= x1;	this.x2 = x2;
		this.y1 = y1;	this.y2 = y2;
	};
	Range.prototype.contains = function(range) {
		return 	(this.x1 <= range.x1 && range.x2 <= this.x2) 
				&& 
				(this.y1 <= range.y1 && range.y2 <= this.y2);
	};
	Range.prototype.transform = function(x, y) {
		return new Range(this.x1 + x, this.y1 + y, this.x2 + x, this.y2 + y);
	};

	$.fn.positionBy = function(args) {
		var date1 = new Date();
		if ( this.length == 0 ) {
			return this;
		}
		
		var args = $.extend({	// The target element to position us relative to
								target:		null,
								// The target's corner, possible values 0-3
								targetPos:	null,
								// The element's corner, possible values 0-3
								elementPos:	null,
								
								// A raw x,y coordinate
								x:			null,
								y:			null,

								// Pass in an array of positions that are valid 0-15
								positions:	null,

								// Add the final position class to the element (eg. positionBy0 through positionBy3, positionBy15)
								addClass: 	false,
								
								// Force our element to be at the location we specified (don't try to auto position it)
								force: 		false,
								
								// The element that we will make sure our element doesn't go outside of
								container: 	window,

								// Should the element be hidden after positioning?
								hideAfterPosition: false
							}, args);

		if ( args.x != null ) {
			var tLeft	= args.x;
			var tTop	= args.y;
			var tWidth	= 0;
			var tHeight	= 0;
			
		// Position in relation to an element
		} else {
			var $target	= $( $( args.target )[0] );
			var tWidth	= $target.outerWidth();
			var tHeight	= $target.outerHeight();
			var tOffset	= $target.offset();
			var tLeft	= tOffset.left;
			var tTop	= tOffset.top;
		}

		// Our target right, bottom coord
		var tRight	= tLeft + tWidth;
		var tBottom	= tTop + tHeight;

		return this.each(function() {
			var $element = $( this );

			// Position our element in the top left so we can grab its width without triggering scrollbars
			if ( !$element.is(':visible') ) {
				$element.css({	left:  		-3000, 
								top: 		-3000
								})
								.show();
			}

			var eWidth	= $element.outerWidth();
			var eHeight	= $element.outerHeight();
	
			// Holds x1,y1,x2,y2 coordinates for a position in relation to our target element
			var position = [];
			// Holds a list of alternate positions to try if this one is not in the browser viewport
			var next	 = [];
	
			// Our Positions via ASCII ART
			/*
   	      	 8   9       10   11
			   +------------+
			 7 | 15      12 | 0
			   |            |
			 6 | 14      13 | 1
			   +------------+ 
			 5   4        3   2
	
			 */

			position[0]	= new Range(tRight, 			tTop, 				tRight + eWidth, 	tTop + eHeight);
			next[0]		= [1,7,4];
		
			position[1]	= new Range(tRight, 			tBottom - eHeight, 	tRight + eWidth, 	tBottom);
			next[1]		= [0,6,4];
		
			position[2] = new Range(tRight, 			tBottom,			tRight + eWidth, 	tBottom + eHeight);
			next[2]		= [1,3,10];
		
			position[3] = new Range(tRight - eWidth, 	tBottom,			tRight, 			tBottom + eHeight);
			next[3]		= [1,6,10];
			
			position[4] = new Range(tLeft, 				tBottom,			tLeft + eWidth, 	tBottom + eHeight);
			next[4]		= [1,6,9];
		
			position[5] = new Range(tLeft - eWidth, 	tBottom, 			tLeft, 				tBottom + eHeight);
			next[5]		= [6,4,9];
		
			position[6] = new Range(tLeft - eWidth, 	tBottom - eHeight,	tLeft, 				tBottom);
			next[6]		= [7,1,4];
			
			position[7] = new Range(tLeft - eWidth, 	tTop,				tLeft, 				tTop + eHeight);
			next[7]		= [6,0,4];
			
			position[8] = new Range(tLeft - eWidth, 	tTop - eHeight,		tLeft, 				tTop);
			next[8]		= [7,9,4];
			
			position[9] = new Range(tLeft, 				tTop - eHeight,		tLeft + eWidth, 	tTop);
			next[9]		= [0,7,4];
			
			position[10]= new Range(tRight - eWidth, 	tTop - eHeight,		tRight, 			tTop);
			next[10]	= [0,7,3];
		
			position[11]= new Range(tRight, 			tTop - eHeight, 	tRight + eWidth, 	tTop);
			next[11]	= [0,10,3];
			
			position[12]= new Range(tRight - eWidth, 	tTop,				tRight, 			tTop + eHeight);
			next[12]	= [13,7,10];
			
			position[13]= new Range(tRight - eWidth, 	tBottom - eHeight,	tRight, 			tBottom);
			next[13]	= [12,6,3];
			
			position[14]= new Range(tLeft, 				tBottom - eHeight,	tLeft + eWidth, 	tBottom);
			next[14]	= [15,1,4];
			
			position[15]= new Range(tLeft, 				tTop,				tLeft + eWidth, 	tTop + eHeight);
			next[15]	= [14,0,9];
	
			if ( args.positions !== null ) {
				var pos = args.positions[0];
			} else if ( args.targetPos != null && args.elementPos != null ) {
				var pos = [];
				pos[0] = [];
				pos[0][0] = 15;
				pos[0][1] = 7;
				pos[0][2] = 8;
				pos[0][3] = 9;
				pos[1] = [];
				pos[1][0] = 0;
				pos[1][1] = 12;
				pos[1][2] = 10;
				pos[1][3] = 11;
				pos[2] = [];
				pos[2][0] = 2;
				pos[2][1] = 3;
				pos[2][2] = 13;
				pos[2][3] = 1;
				pos[3] = [];
				pos[3][0] = 4;
				pos[3][1] = 5;
				pos[3][2] = 6;
				pos[3][3] = 14;

				var pos = pos[args.targetPos][args.elementPos];
			}
			var ePos = position[pos];
			var fPos = pos;

			if ( !args.force ) {
				// TODO: Do the args.container
				// window width & scroll offset
				$window = $( window );
				var sx = $window.scrollLeft();
				var sy = $window.scrollTop();
				
				// TODO: Look at innerWidth & innerHeight
				var container = new Range( sx, sy, sx + $window.width(), sy + $window.height() );
	
				// If we are outside of our viewport, see if we are outside vertically or horizontally and push onto the stack
				var stack;
				if ( args.positions ) {
					stack = args.positions;
				} else {
					stack = [pos];
				}
				var test = [];		// Keeps track of our positions we already tried
				
				while ( stack.length > 0 ) {
					var p = stack.shift();
					if ( test[p] ) {
						continue;
					}
					test[p] = true;
	
					// If our current position is not within the viewport (eg. window) 
					// add the next suggested position
					if ( !container.contains(position[p]) ) {
						if ( args.positions === null ) {
							stack = jQuery.merge( stack, next[p] );
						}
					} else {
						ePos = position[p];
						break;
					}
				}
			}

			// + TODO: Determine if we are going to use absolute left, top, bottom, right 
			// positions relative to our target
		
			// Take into account any absolute or fixed positioning
			// to 'normalize' our coordinates
			$element.parents().each(function() {
				var $this = $(this);
				if ( $this.css('position') != 'static' ) {
					var abs = $this.offset();
					ePos = ePos.transform( -abs.left, -abs.top );
					return false;
				}
			});
		
			// Finally position our element
			var css = { left: ePos.x1, top: ePos.y1 };
			if ( args.hideAfterPosition ) {
				css['display'] = 'none';
			}
			$element.css( css );

			if ( args.addClass ) {
				$element.removeClass( 'positionBy0 positionBy1 positionBy2 positionBy3 positionBy4 positionBy5 '
									+ 'positionBy6 positionBy7 positionBy8 positionBy9 positionBy10 positionBy11 '
									+ 'positionBy12 positionBy13 positionBy14 positionBy15')
						.addClass('positionBy' + p);
			}
		});
	};
})(jQuery);
;
/* Copyright (c) 2006 Brandon Aaron (http://brandonaaron.net)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * $LastChangedDate$
 * $Rev$
 *
 * Version 2.1.1
 */

(function($){

/**
 * The bgiframe is chainable and applies the iframe hack to get 
 * around zIndex issues in IE6. It will only apply itself in IE6 
 * and adds a class to the iframe called 'bgiframe'. The iframe
 * is appeneded as the first child of the matched element(s) 
 * with a tabIndex and zIndex of -1.
 * 
 * By default the plugin will take borders, sized with pixel units,
 * into account. If a different unit is used for the border's width,
 * then you will need to use the top and left settings as explained below.
 *
 * NOTICE: This plugin has been reported to cause perfromance problems
 * when used on elements that change properties (like width, height and
 * opacity) a lot in IE6. Most of these problems have been caused by 
 * the expressions used to calculate the elements width, height and 
 * borders. Some have reported it is due to the opacity filter. All 
 * these settings can be changed if needed as explained below.
 *
 * @example $('div').bgiframe();
 * @before <div><p>Paragraph</p></div>
 * @result <div><iframe class="bgiframe".../><p>Paragraph</p></div>
 *
 * @param Map settings Optional settings to configure the iframe.
 * @option String|Number top The iframe must be offset to the top
 * 		by the width of the top border. This should be a negative 
 *      number representing the border-top-width. If a number is 
 * 		is used here, pixels will be assumed. Otherwise, be sure
 *		to specify a unit. An expression could also be used. 
 * 		By default the value is "auto" which will use an expression 
 * 		to get the border-top-width if it is in pixels.
 * @option String|Number left The iframe must be offset to the left
 * 		by the width of the left border. This should be a negative 
 *      number representing the border-left-width. If a number is 
 * 		is used here, pixels will be assumed. Otherwise, be sure
 *		to specify a unit. An expression could also be used. 
 * 		By default the value is "auto" which will use an expression 
 * 		to get the border-left-width if it is in pixels.
 * @option String|Number width This is the width of the iframe. If
 *		a number is used here, pixels will be assume. Otherwise, be sure
 * 		to specify a unit. An experssion could also be used.
 *		By default the value is "auto" which will use an experssion
 * 		to get the offsetWidth.
 * @option String|Number height This is the height of the iframe. If
 *		a number is used here, pixels will be assume. Otherwise, be sure
 * 		to specify a unit. An experssion could also be used.
 *		By default the value is "auto" which will use an experssion
 * 		to get the offsetHeight.
 * @option Boolean opacity This is a boolean representing whether or not
 * 		to use opacity. If set to true, the opacity of 0 is applied. If
 *		set to false, the opacity filter is not applied. Default: true.
 * @option String src This setting is provided so that one could change 
 *		the src of the iframe to whatever they need.
 *		Default: "javascript:false;"
 *
 * @name bgiframe
 * @type jQuery
 * @cat Plugins/bgiframe
 * @author Brandon Aaron (brandon.aaron@gmail.com || http://brandonaaron.net)
 */
$.fn.bgIframe = $.fn.bgiframe = function(s) {
	// This is only for IE6
	if ( $.browser.msie && /6.0/.test(navigator.userAgent) ) {
		s = $.extend({
			top     : 'auto', // auto == .currentStyle.borderTopWidth
			left    : 'auto', // auto == .currentStyle.borderLeftWidth
			width   : 'auto', // auto == offsetWidth
			height  : 'auto', // auto == offsetHeight
			opacity : true,
			src     : 'javascript:false;'
		}, s || {});
		var prop = function(n){return n&&n.constructor==Number?n+'px':n;},
		    html = '<iframe class="bgiframe"frameborder="0"tabindex="-1"src="'+s.src+'"'+
		               'style="display:block;position:absolute;z-index:-1;'+
			               (s.opacity !== false?'filter:Alpha(Opacity=\'0\');':'')+
					       'top:'+(s.top=='auto'?'expression(((parseInt(this.parentNode.currentStyle.borderTopWidth)||0)*-1)+\'px\')':prop(s.top))+';'+
					       'left:'+(s.left=='auto'?'expression(((parseInt(this.parentNode.currentStyle.borderLeftWidth)||0)*-1)+\'px\')':prop(s.left))+';'+
					       'width:'+(s.width=='auto'?'expression(this.parentNode.offsetWidth+\'px\')':prop(s.width))+';'+
					       'height:'+(s.height=='auto'?'expression(this.parentNode.offsetHeight+\'px\')':prop(s.height))+';'+
					'"/>';
		return this.each(function() {
			if ( $('> iframe.bgiframe', this).length == 0 )
				this.insertBefore( document.createElement(html), this.firstChild );
		});
	}
	return this;
};

})(jQuery);;

/**
 * --------------------------------------------------------------------
 * jQuery-Plugin "visualize"
 * by Scott Jehl, scott@filamentgroup.com
 * http://www.filamentgroup.com
 * Copyright (c) 2009 Filament Group 
 * Dual licensed under the MIT (filamentgroup.com/examples/mit-license.txt) and GPL (filamentgroup.com/examples/gpl-license.txt) licenses.
 * 	
 * --------------------------------------------------------------------
 */

// updated and improved for PRTG Network Monitor by Dirk Paessler, www.paessler.com

(function($) { 
$.fn.visualize = function(options, container){
	return $(this).each(function(){
		//configuration
		var o = $.extend({
			type: 'bar', //also available: area, pie, line
			width: $(this).width(), //height of canvas - defaults to table height
			height: $(this).height(), //height of canvas - defaults to table height
			appendTitle: true, //table caption text is added to chart
			title: null, //grabs from table caption if null
			appendKey: true, //color key is added to chart
			colors: ['#A80000','#88D58D','#829BFE','#FCD124','#958167','#969696','#be1e2d','#666699','#92d5ea','#ee8310','#8d10ee','#5a3b16','#26a4ed','#f45a90','#e9e744'],
			textColors: [], //corresponds with colors array. null/undefined items will fall back to CSS
			parseDirection: 'x', //which direction to parse the table data
			pieMargin: 20, //pie charts only - spacing around pie
			pieLabelPos: 'inside',
			lineWeight: 4, //for line and area - stroke weight
			barGroupMargin: 10,
			barMargin: 1 //space around bars in bar chart (added to both sides of bar)
		},options);
		
		//reset width, height to numbers
		o.width = parseInt(o.width,10);
		o.height = parseInt(o.height,10);
		
		
		var self = $(this);
		
		//function to scrape data from html table
		function scrapeTable(){
			var colors = o.colors;
			var textColors = o.textColors;
			var tableData = {
				members: function(){
					var members = [];
					if(o.parseDirection == 'x'){
						self.find('tr').each(function(i){
							members[i] = {};
							members[i].points = [];
							members[i].color = colors[i];
							if(textColors[i]){ members[i].textColor = textColors[i]; }
							$(this).find('td').each(function(){
								members[i].points.push($(this).text()*1);
							});
						});
					}
					else {
						var cols = self.find('tr:eq(1) td').size();
						for(var i=0; i<cols; i++){
							members[i] = {};
							members[i].points = [];
							members[i].color = colors[i];
							if(textColors[i]){ members[i].textColor = textColors[i]; }
							self.find('tr:gt(0)').each(function(){
								members[i].points.push( $(this).find('td').eq(i).text()*1 );
							});
						};
					}
					return members;
				},
				allData: function(){
					var allData = [];
					$(this.members()).each(function(){
						allData.push(this.points);
					});
					return allData;
				},
				dataSum: function(){
					var dataSum = 0;
					var allData = this.allData().join(',').split(',');
					$(allData).each(function(){
						dataSum += parseInt(this,10);
					});
					return dataSum
				},	
				topValue: function(){
						var topValue = 0;
						var allData = this.allData().join(',').split(',');
						$(allData).each(function(){
							if(parseInt(this,10)>topValue) topValue = parseInt(this,10);
						});
						return topValue;
				},
				memberTotals: function(){
					var memberTotals = [];
					var members = this.members();
					$(members).each(function(l){
						var count = 0;
						$(members[l].points).each(function(m){
							count +=members[l].points[m];
						});
						memberTotals.push(count);
					});
					return memberTotals;
				},
				yTotals: function(){
					var yTotals = [];
					var members = this.members();
					var loopLength = this.xLabels().length;
					for(var i = 0; i<loopLength; i++){
						yTotals[i] =[];
						var thisTotal = 0;
						$(members).each(function(l){
							yTotals[i].push(this.points[i]);
						});
						yTotals[i].join(',').split(',');
						$(yTotals[i]).each(function(){
							thisTotal += parseInt(this);
						});
						yTotals[i] = thisTotal;
						
					}
					return yTotals;
				},
				topYtotal: function(){
					var topYtotal = 0;
						var yTotals = this.yTotals().join(',').split(',');
						$(yTotals).each(function(){
							if(parseInt(this,10)>topYtotal) topYtotal = parseInt(this,10);
						});
						return topYtotal;
				},
				xLabels: function(){
					var xLabels = [];
					if(o.parseDirection == 'x'){
						self.find('tr th').each(function(){
							xLabels.push($(this).html());
						});
					}
					else{
						self.find('tr:gt(0) th').each(function(){
							xLabels.push($(this).html());
						});
					}
					return xLabels;
				},
				yLabels: function(){
					var yLabels = [];
					var chartHeight = o.height;
					var numLabels = chartHeight / 30;
					var loopInterval = Math.round(this.topValue() / numLabels);
	
					for(var j=0; j<=numLabels; j++){
						yLabels.push(j*loopInterval);
					}
					if(yLabels[numLabels] != this.topValue()) {
						yLabels.pop();
						yLabels.push(this.topValue());
					}
					return yLabels;
				}			
			};
			
			return tableData;
		};
		
		
		//function to create a chart
		var createChart = {
			pie: function(){	
				
				canvasContain
					.addClass('visualize-pie');
				
				if(o.pieLabelPos == 'outside'){ canvasContain.addClass('visualize-pie-outside'); }	
						
				var centerx = Math.round(canvas.width()/2);
				var centery = Math.round(canvas.height()/2);
				var radius = centery - o.pieMargin;				
				var counter = 0.0;
				var toRad = function(integer){ return (Math.PI/180)*integer; };
				var mylabels=xLabels;
				var labels = $('<ul class="visualize-labels"></ul>')
					.insertAfter(canvas);

				ctx.beginPath();
				ctx.moveTo(centerx, centery);
				ctx.arc(centerx, centery, radius, 
					0 * Math.PI * 2 - Math.PI * 0.5,
					100 * Math.PI * 2 - Math.PI * 0.5,
	                true);
		        ctx.lineTo(centerx, centery);
		        ctx.closePath();
			    ctx.shadowOffsetX = 3;
			    ctx.shadowOffsetY = 3;
			    ctx.shadowColor = "#AAAAAA";
		        ctx.fillStyle = '#DDDDDD';
		        ctx.fill();
			    ctx.shadowOffsetX = 0;
			    ctx.shadowOffsetY = 0;
				//draw the pie pieces
				$.each(memberTotals, function(i){
			        if (this/10000>9.5)
			        {
			        	var fraction = this/dataSum;
					
						ctx.beginPath();
						ctx.moveTo(centerx, centery);
						ctx.arc(centerx, centery, radius, 
							counter * Math.PI * 2 - Math.PI * 0.5,
							(counter + fraction) * Math.PI * 2 - Math.PI * 0.5,
			                false);
				        ctx.lineTo(centerx, centery);
				        ctx.closePath();
				            // Schattenoffset
				        ctx.fillStyle = members[i].color;
	
				        ctx.fill();
				        ctx.strokeStyle = "#ffffff";
				        ctx.stroke();
				        // draw labels
				       	var sliceMiddle = (counter + fraction/2);
				       	var distance = o.pieLabelPos == 'inside' ? radius/1.5 : radius +  radius / 5;
				        var labelx = Math.round(centerx + Math.sin(sliceMiddle * Math.PI * 2) * (distance));
				        var labely = Math.round(centery - Math.cos(sliceMiddle * Math.PI * 2) * (distance));
				        var leftRight = (labelx > centerx) ? 'right' : 'left';
				        var topBottom = (labely > centery) ? 'bottom' : 'top';
					        var labeltext = $('<span class="visualize-label"><b>' + mylabels[i]+'</b><br>'+Math.round(this/10000) + '%</span>')
					        	.css(leftRight, 0)
					        	.css(topBottom, 0);
					        var label = $('<li class="visualize-label-pos"></li>')
					       			.appendTo(labels)
					        		.css({left: labelx, top: labely})
					        		.append(labeltext);	
					        labeltext
					        	.css('font-size', radius / 8)		
					        	.css('margin-'+leftRight, -labeltext.width()/2)
					        	.css('margin-'+topBottom, -labeltext.outerHeight()/2);
					        	
					        if(members[i].textColor){ labeltext.css('color', members[i].textColor); }	
				      	counter+=fraction;
			        }
				});
			},
			
			line: function(area){
			
				if(area){ canvasContain.addClass('visualize-area'); }
				else{ canvasContain.addClass('visualize-line'); }
			
				//write X labels
				var xInterval = canvas.width() / (xLabels.length -1);
				var xlabelsUL = $('<ul class="visualize-labels-x"></ul>')
					.width(canvas.width())
					.height(canvas.height())
					.insertBefore(canvas);
				$.each(xLabels, function(i){ 
					var thisLi = $('<li><span>'+this+'</span></li>')
						.prepend('<span class="line" />')
						.css('left', xInterval * i)
						.appendTo(xlabelsUL);						
					var label = thisLi.find('span:not(.line)');
					var leftOffset = label.width()/-2;
					if(i == 0){ leftOffset = 0; }
					else if(i== xLabels.length-1){ leftOffset = -label.width(); }
					label
						.css('margin-left', leftOffset)
						.addClass('label');
				});

				//write Y labels
				var yScale = canvas.height() / topValue;
				var liBottom = canvas.height() / (yLabels.length-1);
				var ylabelsUL = $('<ul class="visualize-labels-y"></ul>')
					.width(canvas.width())
					.height(canvas.height())
					.insertBefore(canvas);
					
				$.each(yLabels, function(i){  
					var thisLi = $('<li><span>'+this+'</span></li>')
						.prepend('<span class="line"  />')
						.css('bottom',liBottom*i)
						.prependTo(ylabelsUL);
					var label = thisLi.find('span:not(.line)');
					var topOffset = label.height()/-2;
					if(i == 0){ topOffset = -label.height(); }
					else if(i== yLabels.length-1){ topOffset = 0; }
					label
						.css('margin-top', topOffset)
						.addClass('label');
				});

				//start from the bottom left
				ctx.translate(0,canvas.height());
				//iterate and draw
				$.each(members,function(h){
					ctx.beginPath();
					ctx.lineWidth = o.lineWeight;
					ctx.lineJoin = 'round';
					var points = this.points;
					var integer = 0;
					ctx.moveTo(0,-(points[0]*yScale));
					$.each(points, function(){
						ctx.lineTo(integer,-(this*yScale));
						integer+=xInterval;
					});
					ctx.strokeStyle = this.color;
					ctx.stroke();
					if(area){
						ctx.lineTo(integer,0);
						ctx.lineTo(0,0);
						ctx.closePath();
						ctx.fillStyle = this.color;
						ctx.globalAlpha = .3;
						ctx.fill();
						ctx.globalAlpha = 1.0;
					}
					else {ctx.closePath();}
				});
			},
			
			area: function(){
				createChart.line(true);
			},
			
			bar: function(){
				
				canvasContain.addClass('visualize-bar');
			
				//write X labels
				var xInterval = canvas.width() / (xLabels.length);
				var xlabelsUL = $('<ul class="visualize-labels-x"></ul>')
					.width(canvas.width())
					.height(canvas.height())
					.insertBefore(canvas);
				$.each(xLabels, function(i){ 
					var thisLi = $('<li><span class="label">'+this+'</span></li>')
						.prepend('<span class="line" />')
						.css('left', xInterval * i)
						.width(xInterval)
						.appendTo(xlabelsUL);
					var label = thisLi.find('span.label');
					label.addClass('label');
				});

				//write Y labels
				var yScale = canvas.height() / topValue;
				var liBottom = canvas.height() / (yLabels.length-1);
				var ylabelsUL = $('<ul class="visualize-labels-y"></ul>')
					.width(canvas.width())
					.height(canvas.height())
					.insertBefore(canvas);
				$.each(yLabels, function(i){  
					var thisLi = $('<li><span>'+this+'</span></li>')
						.prepend('<span class="line"  />')
						.css('bottom',liBottom*i)
						.prependTo(ylabelsUL);
						var label = thisLi.find('span:not(.line)');
						var topOffset = label.height()/-2;
						if(i == 0){ topOffset = -label.height(); }
						else if(i== yLabels.length-1){ topOffset = 0; }
						label
							.css('margin-top', topOffset)
							.addClass('label');
				});

				//start from the bottom left
				ctx.translate(0,canvas.height());
				//iterate and draw
				for(var h=0; h<members.length; h++){
					ctx.beginPath();
					var linewidth = (xInterval-o.barGroupMargin*2) / members.length; //removed +1 
					var strokeWidth = linewidth - (o.barMargin*2);
					ctx.lineWidth = strokeWidth;
					var points = members[h].points;
					var integer = 0;
					for(var i=0; i<points.length; i++){
						var xVal = (integer-o.barGroupMargin)+(h*linewidth)+linewidth/2;
						xVal += o.barGroupMargin*2;
						
						ctx.moveTo(xVal, 0);
						ctx.lineTo(xVal, Math.round(-points[i]*yScale));
						integer+=xInterval;
					}
					ctx.strokeStyle = members[h].color;
					ctx.stroke();
					ctx.closePath();
				}
			}
		};
	
		//create new canvas, set w&h attrs (not inline styles)
		var canvas = $('<canvas/>')
			.attr('height',o.height)
			.attr('width',o.width)
			.css({width: o.width, height: o.height});

		
		//create canvas wrapper div, set inline w&h, append
		var canvasContain = (container || $('<div class="visualize" role="presentation" />'))
			.height(o.height)
			.width(o.width)
			.append(canvas);
		
		//scrape table (this should be cleaned up into an obj)
		var tableData = scrapeTable();
		var members = tableData.members();
		var allData = tableData.allData();
		var dataSum = tableData.dataSum();
		var topValue = tableData.topValue();
		var memberTotals = tableData.memberTotals();
		var xLabels = tableData.xLabels();
		var yLabels = tableData.yLabels();
				
		//title/key container
		if(o.appendTitle || o.appendKey){
			var infoContain = $('<div class="visualize-info"></div>')
				.appendTo(canvasContain);
		}
		
		//append title
		if(o.appendTitle){
			var title = o.title || self.find('caption').text();
			$('<div class="visualize-title">'+ title +'</div>')
				.appendTo(infoContain);
		}
		
		//append key
		if(o.appendKey){
			var newKey = $('<ul class="visualize-key"></ul>');
			var selector = (o.parseDirection == 'x') ? 'tr:gt(0) th' : 'tr:eq(0) th' ;
			self.find(selector).each(function(i){
				$('<li><span class="visualize-key-color" style="background: '+members[i].color+'"></span><span class="visualize-key-label">'+ $(this).text() +'</span></li>')
					.appendTo(newKey);
			});
			newKey.appendTo(infoContain);
		};		
		
		//append new canvas to page
		
		if(!container){canvasContain.insertAfter(this); }
		if($.browser.msie){ G_vmlCanvasManager.initElement(canvas[0]); }	
		
		//set up the drawing board	
		var ctx = canvas[0].getContext('2d');
		
		//create chart
		createChart[o.type]();
		
		//clean up some doubled lines that sit on top of canvas borders (done via JS due to IE)
		$('.visualize-line li:first-child span.line, .visualize-line li:last-child span.line, .visualize-area li:first-child span.line, .visualize-area li:last-child span.line, .visualize-bar li:first-child span.line,.visualize-bar .visualize-labels-y li:last-child span.line').css('border','none');
		if(!container){
		//add event for updating
		canvasContain.bind('visualizeRefresh', function(){
			self.visualize(o, $(this).empty()); 
		});
		}
	}).next(); //returns canvas(es)
};
})(jQuery);


;
/**
 * jQuery-Plugin "preloadCssImages"
 * by Scott Jehl, scott@filamentgroup.com
 * http://www.filamentgroup.com
 * reference article: http://www.filamentgroup.com/lab/update_automatically_preload_images_from_css_with_jquery/
 * demo page: http://www.filamentgroup.com/examples/preloadImages/index_v2.php
 * 
 * Copyright (c) 2008 Filament Group, Inc
 * Dual licensed under the MIT (filamentgroup.com/examples/mit-license.txt) and GPL (filamentgroup.com/examples/gpl-license.txt) licenses.
 *
 * Version: 5.0, 10.31.2008
 * Changelog:
 *    02.20.2008 initial Version 1.0
 *    06.04.2008 Version 2.0 : removed need for any passed arguments. Images load from any and all directories.
 *    06.21.2008 Version 3.0 : Added options for loading status. Fixed IE abs image path bug (thanks Sam Pohlenz).
 *    07.24.2008 Version 4.0 : Added support for @imported CSS (credit: http://marcarea.com/). Fixed support in Opera as well. 
 *    10.31.2008 Version: 5.0 : Many feature and performance enhancements from trixta
 * --------------------------------------------------------------------
 */

;jQuery.preloadCssImages = function(settings){
	settings = jQuery.extend({
		statusTextEl: null,
		statusBarEl: null,
		errorDelay: 999, // handles 404-Errors in IE
		simultaneousCacheLoading: 2
	}, settings);
	var allImgs = [],
		loaded = 0,
		imgUrls = [],
		thisSheetRules,	
		errorTimer;
	
	function onImgComplete(){
		clearTimeout(errorTimer);
		if (imgUrls && imgUrls.length && imgUrls[loaded]) {
			loaded++;
			if (settings.statusTextEl) {
				var nowloading = (imgUrls[loaded]) ? 
					'Now Loading: <span>' + imgUrls[loaded].split('/')[imgUrls[loaded].split('/').length - 1] : 
					'Loading complete'; // wrong status-text bug fixed
				jQuery(settings.statusTextEl).html('<span class="numLoaded">' + loaded + '</span> of <span class="numTotal">' + imgUrls.length + '</span> loaded (<span class="percentLoaded">' + (loaded / imgUrls.length * 100).toFixed(0) + '%</span>) <span class="currentImg">' + nowloading + '</span></span>');
			}
			if (settings.statusBarEl) {
				var barWidth = jQuery(settings.statusBarEl).width();
				jQuery(settings.statusBarEl).css('background-position', -(barWidth - (barWidth * loaded / imgUrls.length).toFixed(0)) + 'px 50%');
			}
			loadImgs();
		}
	}
	
	function loadImgs(){
		//only load 1 image at the same time / most browsers can only handle 2 http requests, 1 should remain for user-interaction (Ajax, other images, normal page requests...)
		// otherwise set simultaneousCacheLoading to a higher number for simultaneous downloads
		if(imgUrls && imgUrls.length && imgUrls[loaded]){
			var img = new Image(); //new img obj
			img.src = imgUrls[loaded];	//set src either absolute or rel to css dir
			if(!img.complete){
				jQuery(img).bind('error load onreadystatechange', onImgComplete);
			} else {
				onImgComplete();
			}
			errorTimer = setTimeout(onImgComplete, settings.errorDelay); // handles 404-Errors in IE
		}
	}
	
	function parseCSS(sheets, urls) {
		var w3cImport = false,
			imported = [],
			importedSrc = [],
			baseURL;
		var sheetIndex = sheets.length;
		while(sheetIndex--){//loop through each stylesheet
			
			var cssPile = '';//create large string of all css rules in sheet
			
			if(urls && urls[sheetIndex]){
				baseURL = urls[sheetIndex];
			} else {
				var csshref = (sheets[sheetIndex].href) ? sheets[sheetIndex].href : 'window.location.href';
				var baseURLarr = csshref.split('/');//split href at / to make array
				baseURLarr.pop();//remove file path from baseURL array
				baseURL = baseURLarr.join('/');//create base url for the images in this sheet (css file's dir)
				if (baseURL) {
					baseURL += '/'; //tack on a / if needed
				}
			}
			if(sheets[sheetIndex].cssRules || sheets[sheetIndex].rules){
				thisSheetRules = (sheets[sheetIndex].cssRules) ? //->>> http://www.quirksmode.org/dom/w3c_css.html
					sheets[sheetIndex].cssRules : //w3
					sheets[sheetIndex].rules; //ie 
				var ruleIndex = thisSheetRules.length;
				while(ruleIndex--){
					if(thisSheetRules[ruleIndex].style && thisSheetRules[ruleIndex].style.cssText){
						var text = thisSheetRules[ruleIndex].style.cssText;
						if(text.toLowerCase().indexOf('url') != -1){ // only add rules to the string if you can assume, to find an image, speed improvement
							cssPile += text; // thisSheetRules[ruleIndex].style.cssText instead of thisSheetRules[ruleIndex].cssText is a huge speed improvement
						}
					} else if(thisSheetRules[ruleIndex].styleSheet) {
						imported.push(thisSheetRules[ruleIndex].styleSheet);
						w3cImport = true;
					}
					
				}
			}
			//parse cssPile for image urls
			var tmpImage = cssPile.match(/[^\("]+\.(gif|jpg|jpeg|png)/g);//reg ex to get a string of between a "(" and a ".filename" / '"' for opera-bugfix
			if(tmpImage){
				var i = tmpImage.length;
				while(i--){ // handle baseUrl here for multiple stylesheets in different folders bug
					var imgSrc = (tmpImage[i].charAt(0) == '/' || tmpImage[i].match('://')) ? // protocol-bug fixed
						tmpImage[i] : 
						baseURL + tmpImage[i];
					
					if(jQuery.inArray(imgSrc, imgUrls) == -1){
						imgUrls.push(imgSrc);
					}
				}
			}
			
			if(!w3cImport && sheets[sheetIndex].imports && sheets[sheetIndex].imports.length) {
				for(var iImport = 0, importLen = sheets[sheetIndex].imports.length; iImport < importLen; iImport++){
					var iHref = sheets[sheetIndex].imports[iImport].href;
					iHref = iHref.split('/');
					iHref.pop();
					iHref = iHref.join('/');
					if (iHref) {
						iHref += '/'; //tack on a / if needed
					}
					var iSrc = (iHref.charAt(0) == '/' || iHref.match('://')) ? // protocol-bug fixed
						iHref : 
						baseURL + iHref;
					
					importedSrc.push(iSrc);
					imported.push(sheets[sheetIndex].imports[iImport]);
				}
				
				
			}
		}//loop
		if(imported.length){
			parseCSS(imported, importedSrc);
			return false;
		}
		var downloads = settings.simultaneousCacheLoading;
		while( downloads--){
			setTimeout(loadImgs, downloads);
		}
	}
	parseCSS(document.styleSheets);
	return imgUrls;
};;

// The Contextmenu plugin has been patched for PRTG 
/*
 * PRTG's Context Menu
 *
 * December 2007: V2.0 by Dirk Paessler 
 * 
 * based on:
 * 
 * ContextMenu - jQuery plugin for right-click context menus
 *
 * Author: Chris Domigan
 * Contributors: Dan G. Switzer, II
 * Parts of this plugin are inspired by Joern Zaefferer's Tooltip plugin
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Version: r2
 * Date: 16 July 2007
 *
 * For documentation visit http://www.trendskitchens.co.nz/jquery/contextmenu/
 *
 */

(function($) {

 	var menu, shadow, trigger, content, hash,currentborder;
  var defaults = {
    menuStyle: {
      bindToEvent:"contextmenu"
    },
    itemStyle: {
    },
    itemHoverStyle: {
    },
    eventPosX: 'pageX',
    eventPosY: 'pageY',
    shadow : true,
    onContextMenu: null,
    onShowMenu: null
 	};

  $.fn.contextMenu = function(id, options) {
    if (!menu) {                                      // Create singleton menu
      menu = $('<div id="jqContextMenu"></div>')
               .hide()
               .css({position:'absolute', zIndex:'5000'})
               .appendTo('body')
               .bind('click', function(e) {
                 e.stopPropagation();
               });
    }
    if (!shadow) {
      shadow = $('<div></div>')
                 .css({backgroundColor:'#000',position:'absolute',opacity:0.2,zIndex:4999})
                 .appendTo('body')
                 .hide();
    }
    hash = hash || [];
    hash.push({
      id : id,
      menuStyle: $.extend({}, defaults.menuStyle, options.menuStyle || {}),
      itemStyle: $.extend({}, defaults.itemStyle, options.itemStyle || {}),
      itemHoverStyle: $.extend({}, defaults.itemHoverStyle, options.itemHoverStyle || {}),
      bindings: options.bindings || {},
      shadow: options.shadow || options.shadow === false ? options.shadow : defaults.shadow,
      onContextMenu: options.onContextMenu || defaults.onContextMenu,
      onShowMenu: options.onShowMenu || defaults.onShowMenu,
      eventPosX: options.eventPosX || defaults.eventPosX,
      eventPosY: options.eventPosY || defaults.eventPosY
    });

    var index = hash.length - 1;
    
    if (!options.menuStyle.bindToEvent) {options.menuStyle.bindToEvent="contextmenu";}
    
    $(this).bind(options.menuStyle.bindToEvent, function(e) {
    	
      if ( ((/chrome/.test( navigator.userAgent.toLowerCase()))) | (!$.browser.safari) )//unter Windows kommt hier immer die Info, dass CTRL gedrückt wird im Safari. Chrome geht aber
      {
    	if (e.ctrlKey) return true; //if someone presses CTRL with a right click he will see the usual browser context menu
      }   
      if ($(e.target).is("img")) return true; //if someone right-clicks an image (chart), show usual context menu
      if ($(e.target).is("input")) return true; //if someone right-clicks an image (chart), show usual context menu
      if ($(e.target).is("textarea")) return true; //if someone right-clicks an image (chart), show usual context menu
      if ($(e.target).is(".enablebrowsercontextmenu")) return true; //if someone right-clicks an image (chart), show usual context menu
      // Check if onContextMenu() defined
      var bShowContext = (!!hash[index].onContextMenu) ? hash[index].onContextMenu(e) : true;
      if (bShowContext) display(index, this, e, options);
      return false;
    });
    return this;
  };

  function display(index, trigger, e, options) {
    var cur = hash[index];
    content = $('#'+cur.id).find('ul:first').clone(true);
    content.css(cur.menuStyle).find('li').css(cur.itemStyle).hover(
      function() {
        $(this).css(cur.itemHoverStyle);
      },
      function(){
        $(this).css(cur.itemStyle);
      }
    ).find('img').css({verticalAlign:'middle',paddingRight:'2px'});

    // Send the content to the menu
    menu.html(content);

    var myobject=$(e.target);
    if (!myobject.attr('id'))    //look downward for the next object that has an id
    {
    	myobject=myobject.children("a").eq(0);
    };
    
    
    // if there's an onShowMenu, run it now -- must run after content has been added
		// if you try to alter the content variable before the menu.html(), IE6 has issues
		// updating the content


    if (!!cur.onShowMenu) menu = cur.onShowMenu(e, menu);
    
    menu.hover( function() { myobject.addClass("hover");myobject.parent().addClass("hover"); }, function() { myobject.removeClass("hover");myobject.parent().removeClass("hover"); } );
    
    

    $.each(cur.bindings, function(id, func) {
      $('#'+id, menu).bind('click', function(e) {
        hide();
        func(myobject);
      });
    });
    
    var myleft=parseInt(e[cur.eventPosX]);
    var mytop=parseInt(e[cur.eventPosY]);
    
    var docwidth=$(document).width();
    var docheight=$(document).height();

    menu.css({'left':myleft+1,'top':mytop}).show();

    var mywidth=parseInt(menu.width());
    var myheight=parseInt(menu.height());
    
    if ((myleft+mywidth)>docwidth)
    {
    	myleft=docwidth-mywidth-5;
    }
    if (mytop+myheight>docheight)
    {
    	mytop=docheight-myheight-5;
    }

    menu.css({'left':myleft+1,'top':mytop});
    
    if (mytop+myheight>docheight-20)
    {
	    menu.find("ul ul").each(function()
    	{
    		$(this).css({"top":-$(this).height()});
    	});
	    menu.addClass("flyoutsup");
    }
    else
    {
	    menu.removeClass("flyoutsup");
    }

    
    if (myleft>$(document).width()-400)
    {
	    menu.addClass("flyoutsleft");
    }
    else
    {
	    menu.removeClass("flyoutsleft");
    }

    if (cur.shadow) shadow.css({width:menu.width(),height:menu.height(),left:myleft+2,top:mytop+2}).show();
    $(document).one('click', hide);
  }

  function hide() {
    menu.hide();
    shadow.hide();
    $('#contextmenuextension').hide();
    menu.children().unbind();
    menu.unbind();
  }

  // Apply defaults
  $.contextMenu = {
    defaults : function(userDefaults) {
      $.each(userDefaults, function(i, val) {
        if (typeof val == 'object' && defaults[i]) {
          $.extend(defaults[i], val);
        }
        else defaults[i] = val;
      });
    }
  };

})(jQuery);

$(function() {
  $('div.contextMenu').hide();
});
;

/* jquery.sparkline 1.4.1pre2 - http://omnipotent.net/jquery.sparkline/ */

(function($){$.fn.simpledraw=function(width,height,use_existing){if(use_existing&&this[0].vcanvas)return this[0].vcanvas;if(width==undefined)width=$(this).innerWidth();if(height==undefined)height=$(this).innerHeight();if($.browser.hasCanvas){return new vcanvas_canvas(width,height,this);}else if($.browser.msie){return new vcanvas_vml(width,height,this);}else{return false;}};var pending=[];$.fn.sparkline=function(uservalues,options){var options=$.extend({type:'line',lineColor:'#00f',fillColor:'#cdf',defaultPixelsPerValue:3,width:'auto',height:'auto',composite:false},options?options:{});return this.each(function(){var render=function(){var values=(uservalues=='html'||uservalues==undefined)?$(this).text().split(','):uservalues;var width=options.width=='auto'?values.length*options.defaultPixelsPerValue:options.width;if(options.height=='auto'){if(!options.composite||!this.vcanvas){var tmp=document.createElement('span');tmp.innerHTML='a';$(this).html(tmp);height=$(tmp).innerHeight();$(tmp).remove();}}else{height=options.height;}
$.fn.sparkline[options.type].call(this,values,options,width,height);}
if(($(this).html()&&$(this).is(':hidden'))||($.fn.jquery<"1.3.0"&&$(this).parents().is(':hidden'))){pending.push([this,render]);}else{render.call(this);}});};$.sparkline_display_visible=function(){for(var i=pending.length-1;i>=0;i--){var el=pending[i][0];if($(el).is(':visible')&&!$(el).parents().is(':hidden')){pending[i][1].call(el);pending.splice(i,1);}}};$.fn.sparkline.line=function(values,options,width,height){var options=$.extend({spotColor:'#f80',spotRadius:1.5,minSpotColor:'#f80',maxSpotColor:'#f80',normalRangeMin:undefined,normalRangeMax:undefined,normalRangeColor:'#ccc',chartRangeMin:undefined,chartRangeMax:undefined},options?options:{});var xvalues=[],yvalues=[];for(i=0;i<values.length;i++){var isstr=typeof(values[i])=='string';var isarray=typeof(values[i])=='object'&&values[i]instanceof Array;var sp=isstr&&values[i].split(':');if(isstr&&sp.length==2){xvalues.push(Number(sp[0]));yvalues.push(Number(sp[1]));}else if(isarray){xvalues.push(values[i][0]);yvalues.push(values[i][1]);}else{xvalues.push(i);yvalues.push(Number(values[i]));}}
if(options.xvalues){xvalues=options.xvalues;}
var maxy=Math.max.apply(Math,yvalues);var maxyval=maxy;var miny=Math.min.apply(Math,yvalues);var minyval=miny;var maxx=Math.max.apply(Math,xvalues);var maxxval=maxx;var minx=Math.min.apply(Math,xvalues);var minxval=minx;if(options.normalRangeMin!=undefined){if(options.normalRangeMin<miny)
miny=options.normalRangeMin;if(options.normalRangeMax>maxy)
maxy=options.normalRangeMax;}
if(options.chartRangeMin!=undefined&&options.chartRangeMin<miny){miny=options.chartRangeMin;}
if(options.chartRangeMax!=undefined&&options.chartRangeMax>maxy){maxy=options.chartRangeMax;}
var rangex=maxx-minx==0?1:maxx-minx;var rangey=maxy-miny==0?1:maxy-miny;var vl=yvalues.length-1;if(vl<1){this.innerHTML='';return;}
var target=$(this).simpledraw(width,height,options.composite);if(target){var canvas_width=target.pixel_width;var canvas_height=target.pixel_height;var canvas_top=0;var canvas_left=0;if(options.spotRadius&&(canvas_width<(options.spotRadius*4)||canvas_height<(options.spotRadius*4))){options.spotRadius=0;}
if(options.spotRadius){if(options.minSpotColor||(options.spotColor&&yvalues[vl]==miny))
canvas_height-=Math.ceil(options.spotRadius);if(options.maxSpotColor||(options.spotColor&&yvalues[vl]==maxy)){canvas_height-=Math.ceil(options.spotRadius);canvas_top+=Math.ceil(options.spotRadius);}
if(options.minSpotColor||options.maxSpotColor&&(yvalues[0]==miny||yvalues[0]==maxy)){canvas_left+=Math.ceil(options.spotRadius);canvas_width-=Math.ceil(options.spotRadius);}
if(options.spotColor||(options.minSpotColor||options.maxSpotColor&&(yvalues[vl]==miny||yvalues[vl]==maxy)))
canvas_width-=Math.ceil(options.spotRadius);}
canvas_height--;if(options.normalRangeMin!=undefined){var ytop=canvas_top+Math.round(canvas_height-(canvas_height*((options.normalRangeMax-miny)/rangey)));var height=Math.round((canvas_height*(options.normalRangeMax-options.normalRangeMin))/rangey);target.drawRect(canvas_left,ytop,canvas_width,height,undefined,options.normalRangeColor);}
var path=[[canvas_left,canvas_top+canvas_height]];for(var i=0;i<yvalues.length;i++){var x=xvalues[i],y=yvalues[i];path.push([canvas_left+Math.round((x-minx)*(canvas_width/rangex)),canvas_top+Math.round(canvas_height-(canvas_height*((y-miny)/rangey)))]);}
if(options.fillColor){path.push([canvas_left+canvas_width,canvas_top+canvas_height-1]);target.drawShape(path,undefined,options.fillColor);path.pop();}
path[0]=[canvas_left,canvas_top+Math.round(canvas_height-(canvas_height*((yvalues[0]-miny)/rangey)))];target.drawShape(path,options.lineColor);if(options.spotRadius&&options.spotColor){target.drawCircle(canvas_left+canvas_width,canvas_top+Math.round(canvas_height-(canvas_height*((yvalues[vl]-miny)/rangey))),options.spotRadius,undefined,options.spotColor);}
if(maxy!=minyval){if(options.spotRadius&&options.minSpotColor){var x=xvalues[yvalues.indexOf(minyval)];target.drawCircle(canvas_left+Math.round((x-minx)*(canvas_width/rangex)),canvas_top+Math.round(canvas_height-(canvas_height*((minyval-miny)/rangey))),options.spotRadius,undefined,options.minSpotColor);}
if(options.spotRadius&&options.maxSpotColor){var x=xvalues[yvalues.indexOf(maxyval)];target.drawCircle(canvas_left+Math.round((x-minx)*(canvas_width/rangex)),canvas_top+Math.round(canvas_height-(canvas_height*((maxyval-miny)/rangey))),options.spotRadius,undefined,options.maxSpotColor);}}}else{this.innerHTML='';}};$.fn.sparkline.bar=function(values,options,width,height){values=$.map(values,Number);var options=$.extend({type:'bar',barColor:'#00f',negBarColor:'#f44',zeroColor:undefined,zeroAxis:undefined,barWidth:4,barSpacing:1,chartRangeMax:undefined,chartRangeMin:undefined},options?options:{});var width=(values.length*options.barWidth)+((values.length-1)*options.barSpacing);var max=Math.max.apply(Math,values);var min=Math.min.apply(Math,values);if(options.chartRangeMin!=undefined&&options.chartRangeMin<min){min=options.chartRangeMin;}
if(options.chartRangeMax!=undefined&&options.chartRangeMax>max){max=options.chartRangeMax;}
if(options.zeroAxis==undefined)options.zeroAxis=min<0;var range=max-min==0?1:max-min;var target=$(this).simpledraw(width,height);if(target){var canvas_width=target.pixel_width;var canvas_height=target.pixel_height;var yzero=min<0&&options.zeroAxis?canvas_height-Math.round(canvas_height*(Math.abs(min)/range))-1:canvas_height-1;for(var i=0;i<values.length;i++){var x=i*(options.barWidth+options.barSpacing);var val=values[i];var color=(val<0)?options.negBarColor:options.barColor;if(options.zeroAxis&&min<0){var height=Math.round(canvas_height*((Math.abs(val)/range)))+1;var y=(val<0)?yzero:yzero-height;}else{var height=Math.round(canvas_height*((val-min)/range))+1;var y=canvas_height-height;}
if(val==0&&options.zeroColor!=undefined){color=options.zeroColor;}
target.drawRect(x,y,options.barWidth-1,height-1,color,color);}}else{this.innerHTML='';}};$.fn.sparkline.tristate=function(values,options,width,height){values=$.map(values,Number);var options=$.extend({barWidth:4,barSpacing:1,posBarColor:'#6f6',negBarColor:'#f44',zeroBarColor:'#999',colorMap:{}},options);var width=(values.length*options.barWidth)+((values.length-1)*options.barSpacing);var target=$(this).simpledraw(width,height);if(target){var canvas_width=target.pixel_width;var canvas_height=target.pixel_height;var half_height=Math.round(canvas_height/2);for(var i=0;i<values.length;i++){var x=i*(options.barWidth+options.barSpacing);if(values[i]<0){var y=half_height;var height=half_height-1;var color=options.negBarColor;}else if(values[i]>0){var y=0;var height=half_height-1;var color=options.posBarColor;}else{var y=half_height-1;var height=2;var color=options.zeroBarColor;}
if(options.colorMap[values[i]]){color=options.colorMap[values[i]];}
target.drawRect(x,y,options.barWidth-1,height-1,color,color);}}else{this.innerHTML='';}};$.fn.sparkline.discrete=function(values,options,width,height){values=$.map(values,Number);var options=$.extend({lineHeight:'auto',thresholdColor:undefined,thresholdValue:0,chartRangeMax:undefined,chartRangeMin:undefined},options);width=options.width=='auto'?values.length*2:width;var interval=Math.floor(width/values.length);var target=$(this).simpledraw(width,height);if(target){var canvas_width=target.pixel_width;var canvas_height=target.pixel_height;var line_height=options.lineHeight=='auto'?Math.round(canvas_height*0.3):options.lineHeight;var pheight=canvas_height-line_height;var min=Math.min.apply(Math,values);var max=Math.max.apply(Math,values);if(options.chartRangeMin!=undefined&&options.chartRangeMin<min){min=options.chartRangeMin;}
if(options.chartRangeMax!=undefined&&options.chartRangeMax>max){max=options.chartRangeMax;}
var range=max-min;for(var i=0;i<values.length;i++){var val=values[i];var x=(i*interval);var ytop=Math.round(pheight-pheight*((val-min)/range));target.drawLine(x,ytop,x,ytop+line_height,(options.thresholdColor&&val<options.thresholdValue)?options.thresholdColor:options.lineColor);}}else{this.innerHTML='';}};$.fn.sparkline.bullet=function(values,options,width,height){values=$.map(values,Number);var options=$.extend({targetColor:'red',targetWidth:3,performanceColor:'blue',rangeColors:['#D3DAFE','#A8B6FF','#7F94FF'],base:undefined},options);width=options.width=='auto'?'4.0em':width;var target=$(this).simpledraw(width,height);if(target&&values.length>1){var canvas_width=target.pixel_width-Math.ceil(options.targetWidth/2);var canvas_height=target.pixel_height;var min=Math.min.apply(Math,values);var max=Math.max.apply(Math,values);if(options.base==undefined){var min=min<0?min:0;}else{min=options.base;}
var range=max-min;for(i=2;i<values.length;i++){var rangeval=parseInt(values[i]);var rangewidth=Math.round(canvas_width*((rangeval-min)/range));target.drawRect(0,0,rangewidth-1,canvas_height-1,options.rangeColors[i-2],options.rangeColors[i-2]);}
var perfval=parseInt(values[1]);var perfwidth=Math.round(canvas_width*((perfval-min)/range));target.drawRect(0,Math.round(canvas_height*0.3),perfwidth-1,Math.round(canvas_height*0.4)-1,options.performanceColor,options.performanceColor);var targetval=parseInt(values[0]);var x=Math.round(canvas_width*((targetval-min)/range)-(options.targetWidth/2));var targettop=Math.round(canvas_height*0.10);var targetheight=canvas_height-(targettop*2);target.drawRect(x,targettop,options.targetWidth-1,targetheight-1,options.targetColor,options.targetColor);}else{this.innerHTML='';}};$.fn.sparkline.pie=function(values,options,width,height){values=$.map(values,Number);var options=$.extend({sliceColors:['#f00','#0f0','#00f']},options);width=options.width=='auto'?height:width;var target=$(this).simpledraw(width,height);if(target&&values.length>1){var canvas_width=target.pixel_width;var canvas_height=target.pixel_height;var radius=Math.floor(Math.min(canvas_width,canvas_height)/2);var total=0;for(var i=0;i<values.length;i++)
total+=values[i];var next=0;if(options.offset){next+=(2*Math.PI)*(options.offset/360);}
var circle=2*Math.PI;for(var i=0;i<values.length;i++){var start=next;var end=next;if(total>0){end=next+(circle*(values[i]/total));}
target.drawPieSlice(radius,radius,radius,start,end,undefined,options.sliceColors[i%options.sliceColors.length]);next=end;}}};function quartile(values,q){if(q==2){var vl2=Math.floor(values.length/2);return values.length%2?values[vl2]:(values[vl2]+values[vl2+1])/2;}else{var vl4=Math.floor(values.length/4);return values.length%2?(values[vl4*q]+values[vl4*q+1])/2:values[vl4*q];}};$.fn.sparkline.box=function(values,options,width,height){values=$.map(values,Number);var options=$.extend({raw:false,boxLineColor:'black',boxFillColor:'#cdf',whiskerColor:'black',outlierLineColor:'#333',outlierFillColor:'white',medianColor:'red',showOutliers:true,outlierIQR:1.5,spotRadius:1.5,target:undefined,targetColor:'#4a2',chartRangeMax:undefined,chartRangeMin:undefined},options);width=options.width=='auto'?'4.0em':width;minvalue=options.chartRangeMin==undefined?Math.min.apply(Math,values):options.chartRangeMin;maxvalue=options.chartRangeMax==undefined?Math.max.apply(Math,values):options.chartRangeMax;var target=$(this).simpledraw(width,height);if(target&&values.length>1){var canvas_width=target.pixel_width;var canvas_height=target.pixel_height;if(options.raw){if(options.showOutliers&&values.length>5){var loutlier=values[0],lwhisker=values[1],q1=values[2],q2=values[3],q3=values[4],rwhisker=values[5],routlier=values[6];}else{var lwhisker=values[0],q1=values[1],q2=values[2],q3=values[3],rwhisker=values[4];}}else{values.sort(function(a,b){return a-b;});var q1=quartile(values,1);var q2=quartile(values,2);var q3=quartile(values,3);var iqr=q3-q1;if(options.showOutliers){var lwhisker=undefined,rwhisker=undefined;for(var i=0;i<values.length;i++){if(lwhisker==undefined&&values[i]>q1-(iqr*options.outlierIQR))
lwhisker=values[i];if(values[i]<q3+(iqr*options.outlierIQR))
rwhisker=values[i];}
var loutlier=values[0];var routlier=values[values.length-1];}else{var lwhisker=values[0];var rwhisker=values[values.length-1];}}
var unitsize=canvas_width/(maxvalue-minvalue+1);var canvas_left=0;if(options.showOutliers){canvas_left=Math.ceil(options.spotRadius);canvas_width-=2*Math.ceil(options.spotRadius);var unitsize=canvas_width/(maxvalue-minvalue+1);if(loutlier<lwhisker)
target.drawCircle((loutlier-minvalue)*unitsize+canvas_left,canvas_height/2,options.spotRadius,options.outlierLineColor,options.outlierFillColor);if(routlier>rwhisker)
target.drawCircle((routlier-minvalue)*unitsize+canvas_left,canvas_height/2,options.spotRadius,options.outlierLineColor,options.outlierFillColor);}
target.drawRect(Math.round((q1-minvalue)*unitsize+canvas_left),Math.round(canvas_height*0.1),Math.round((q3-q1)*unitsize),Math.round(canvas_height*0.8),options.boxLineColor,options.boxFillColor);target.drawLine(Math.round((lwhisker-minvalue)*unitsize+canvas_left),Math.round(canvas_height/2),Math.round((q1-minvalue)*unitsize+canvas_left),Math.round(canvas_height/2),options.lineColor);target.drawLine(Math.round((lwhisker-minvalue)*unitsize+canvas_left),Math.round(canvas_height/4),Math.round((lwhisker-minvalue)*unitsize+canvas_left),Math.round(canvas_height-canvas_height/4),options.whiskerColor);target.drawLine(Math.round((rwhisker-minvalue)*unitsize+canvas_left),Math.round(canvas_height/2),Math.round((q3-minvalue)*unitsize+canvas_left),Math.round(canvas_height/2),options.lineColor);target.drawLine(Math.round((rwhisker-minvalue)*unitsize+canvas_left),Math.round(canvas_height/4),Math.round((rwhisker-minvalue)*unitsize+canvas_left),Math.round(canvas_height-canvas_height/4),options.whiskerColor);target.drawLine(Math.round((q2-minvalue)*unitsize+canvas_left),Math.round(canvas_height*0.1),Math.round((q2-minvalue)*unitsize+canvas_left),Math.round(canvas_height*0.9),options.medianColor);if(options.target){var size=Math.ceil(options.spotRadius);target.drawLine(Math.round((options.target-minvalue)*unitsize+canvas_left),Math.round((canvas_height/2)-size),Math.round((options.target-minvalue)*unitsize+canvas_left),Math.round((canvas_height/2)+size),options.targetColor);target.drawLine(Math.round((options.target-minvalue)*unitsize+canvas_left-size),Math.round(canvas_height/2),Math.round((options.target-minvalue)*unitsize+canvas_left+size),Math.round(canvas_height/2),options.targetColor);}}else{this.innerHTML='';}};if(!Array.prototype.indexOf){Array.prototype.indexOf=function(entry){for(var i=0;i<this.length;i++){if(this[i]==entry)
return i;}
return-1;}}
if($.browser.msie&&!document.namespaces['v']){document.namespaces.add('v','urn:schemas-microsoft-com:vml','#default#VML');}
if($.browser.hasCanvas==undefined){var t=document.createElement('canvas');$.browser.hasCanvas=t.getContext!=undefined;}
var vcanvas_base=function(width,height,target){};vcanvas_base.prototype={init:function(width,height,target){this.width=width;this.height=height;this.target=target;if(target[0])target=target[0];target.vcanvas=this;},drawShape:function(path,lineColor,fillColor){alert('drawShape not implemented');},drawLine:function(x1,y1,x2,y2,lineColor){return this.drawShape([[x1,y1],[x2,y2]],lineColor);},drawCircle:function(x,y,radius,lineColor,fillColor){alert('drawCircle not implemented');},drawPieSlice:function(x,y,radius,startAngle,endAngle,lineColor,fillColor){alert('drawPieSlice not implemented');},drawRect:function(x,y,width,height,lineColor,fillColor){alert('drawRect not implemented');},getElement:function(){return this.canvas;},_insert:function(el,target){$(target).html(el);}};var vcanvas_canvas=function(width,height,target){return this.init(width,height,target);};vcanvas_canvas.prototype=$.extend(new vcanvas_base,{_super:vcanvas_base.prototype,init:function(width,height,target){this._super.init(width,height,target);this.canvas=document.createElement('canvas');if(target[0])target=target[0];target.vcanvas=this;$(this.canvas).css({display:'inline-block',width:width,height:height,verticalAlign:'top'});this._insert(this.canvas,target);this.pixel_height=$(this.canvas).height();this.pixel_width=$(this.canvas).width();this.canvas.width=this.pixel_width;this.canvas.height=this.pixel_height;$(this.canvas).css({width:this.pixel_width,height:this.pixel_height});},_getContext:function(lineColor,fillColor){var context=this.canvas.getContext('2d');if(lineColor!=undefined)
context.strokeStyle=lineColor;context.lineWidth=1;if(fillColor!=undefined)
context.fillStyle=fillColor;return context;},drawShape:function(path,lineColor,fillColor){var context=this._getContext(lineColor,fillColor);context.beginPath();context.moveTo(path[0][0]+0.5,path[0][1]+0.5);for(var i=1;i<path.length;i++){context.lineTo(path[i][0]+0.5,path[i][1]+0.5);}
if(lineColor!=undefined){context.stroke();}
if(fillColor!=undefined){context.fill();}},drawCircle:function(x,y,radius,lineColor,fillColor){var context=this._getContext(lineColor,fillColor);context.beginPath();context.arc(x,y,radius,0,2*Math.PI,false);if(lineColor!=undefined){context.stroke();}
if(fillColor!=undefined){context.fill();}},drawPieSlice:function(x,y,radius,startAngle,endAngle,lineColor,fillColor){var context=this._getContext(lineColor,fillColor);context.beginPath();context.moveTo(x,y);context.arc(x,y,radius,startAngle,endAngle,false);context.lineTo(x,y);context.closePath();if(lineColor!=undefined){context.stroke();}
if(fillColor){context.fill();}},drawRect:function(x,y,width,height,lineColor,fillColor){return this.drawShape([[x,y],[x+width,y],[x+width,y+height],[x,y+height],[x,y]],lineColor,fillColor);}});var vcanvas_vml=function(width,height,target){return this.init(width,height,target);};vcanvas_vml.prototype=$.extend(new vcanvas_base,{_super:vcanvas_base.prototype,init:function(width,height,target){this._super.init(width,height,target);if(target[0])target=target[0];target.vcanvas=this;this.canvas=document.createElement('span');$(this.canvas).css({display:'inline-block',position:'relative',overflow:'hidden',width:width,height:height,margin:'0px',padding:'0px',verticalAlign:'top'});this._insert(this.canvas,target);this.pixel_height=$(this.canvas).height();this.pixel_width=$(this.canvas).width();this.canvas.width=this.pixel_width;this.canvas.height=this.pixel_height;;var groupel='<v:group coordorigin="0 0" coordsize="'+this.pixel_width+' '+this.pixel_height+'"'
+' style="position:absolute;top:0;left:0;width:'+this.pixel_width+'px;height='+this.pixel_height+'px;"></v:group>';this.canvas.insertAdjacentHTML('beforeEnd',groupel);this.group=$(this.canvas).children()[0];},drawShape:function(path,lineColor,fillColor){var vpath=[];for(var i=0;i<path.length;i++){vpath[i]=''+(path[i][0]-0)+','+(path[i][1]-0);}
var initial=vpath.splice(0,1);var stroke=lineColor==undefined?' stroked="false" ':' strokeWeight="1" strokeColor="'+lineColor+'" ';var fill=fillColor==undefined?' filled="false"':' fillColor="'+fillColor+'" filled="true" ';var closed=vpath[0]==vpath[vpath.length-1]?'x ':'';var vel='<v:shape coordorigin="0 0" coordsize="'+this.pixel_width+' '+this.pixel_height+'" '
+stroke
+fill
+' style="position:absolute;left:0px;top:0px;height:'+this.pixel_height+'px;width:'+this.pixel_width+'px;padding:0px;margin:0px;" '
+' path="m '+initial+' l '+vpath.join(', ')+' '+closed+'e">'
+' </v:shape>';this.group.insertAdjacentHTML('beforeEnd',vel);},drawCircle:function(x,y,radius,lineColor,fillColor){x-=radius+1;y-=radius+1;var stroke=lineColor==undefined?' stroked="false" ':' strokeWeight="1" strokeColor="'+lineColor+'" ';var fill=fillColor==undefined?' filled="false"':' fillColor="'+fillColor+'" filled="true" ';var vel='<v:oval '
+stroke
+fill
+' style="position:absolute;top:'+y+'; left:'+x+'; width:'+(radius*2)+'; height:'+(radius*2)+'"></v:oval>';this.group.insertAdjacentHTML('beforeEnd',vel);},drawPieSlice:function(x,y,radius,startAngle,endAngle,lineColor,fillColor){if(startAngle==endAngle){return;}
if((endAngle-startAngle)==(2*Math.PI)){startAngle=0.0;endAngle=(2*Math.PI);}
var startx=x+Math.round(Math.cos(startAngle)*radius);var starty=y+Math.round(Math.sin(startAngle)*radius);var endx=x+Math.round(Math.cos(endAngle)*radius);var endy=y+Math.round(Math.sin(endAngle)*radius);var vpath=[x-radius,y-radius,x+radius,y+radius,startx,starty,endx,endy];var stroke=lineColor==undefined?' stroked="false" ':' strokeWeight="1" strokeColor="'+lineColor+'" ';var fill=fillColor==undefined?' filled="false"':' fillColor="'+fillColor+'" filled="true" ';var vel='<v:shape coordorigin="0 0" coordsize="'+this.pixel_width+' '+this.pixel_height+'" '
+stroke
+fill
+' style="position:absolute;left:0px;top:0px;height:'+this.pixel_height+'px;width:'+this.pixel_width+'px;padding:0px;margin:0px;" '
+' path="m '+x+','+y+' wa '+vpath.join(', ')+' x e">'
+' </v:shape>';this.group.insertAdjacentHTML('beforeEnd',vel);},drawRect:function(x,y,width,height,lineColor,fillColor){return this.drawShape([[x,y],[x,y+height],[x+width,y+height],[x+width,y],[x,y]],lineColor,fillColor);}});})(jQuery);;

// The Scrollto plugin
/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2008 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 9/11/2008
 * @author Ariel Flesler
 * @version 1.4
 *
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 */
;(function(h){var m=h.scrollTo=function(b,c,g){h(window).scrollTo(b,c,g)};m.defaults={axis:'y',duration:1};m.window=function(b){return h(window).scrollable()};h.fn.scrollable=function(){return this.map(function(){var b=this.parentWindow||this.defaultView,c=this.nodeName=='#document'?b.frameElement||b:this,g=c.contentDocument||(c.contentWindow||c).document,i=c.setInterval;return c.nodeName=='IFRAME'||i&&h.browser.safari?g.body:i?g.documentElement:this})};h.fn.scrollTo=function(r,j,a){if(typeof j=='object'){a=j;j=0}if(typeof a=='function')a={onAfter:a};a=h.extend({},m.defaults,a);j=j||a.speed||a.duration;a.queue=a.queue&&a.axis.length>1;if(a.queue)j/=2;a.offset=n(a.offset);a.over=n(a.over);return this.scrollable().each(function(){var k=this,o=h(k),d=r,l,e={},p=o.is('html,body');switch(typeof d){case'number':case'string':if(/^([+-]=)?\d+(px)?$/.test(d)){d=n(d);break}d=h(d,this);case'object':if(d.is||d.style)l=(d=h(d)).offset()}h.each(a.axis.split(''),function(b,c){var g=c=='x'?'Left':'Top',i=g.toLowerCase(),f='scroll'+g,s=k[f],t=c=='x'?'Width':'Height',v=t.toLowerCase();if(l){e[f]=l[i]+(p?0:s-o.offset()[i]);if(a.margin){e[f]-=parseInt(d.css('margin'+g))||0;e[f]-=parseInt(d.css('border'+g+'Width'))||0}e[f]+=a.offset[i]||0;if(a.over[i])e[f]+=d[v]()*a.over[i]}else e[f]=d[i];if(/^\d+$/.test(e[f]))e[f]=e[f]<=0?0:Math.min(e[f],u(t));if(!b&&a.queue){if(s!=e[f])q(a.onAfterFirst);delete e[f]}});q(a.onAfter);function q(b){o.animate(e,j,a.easing,b&&function(){b.call(this,r,a)})};function u(b){var c='scroll'+b,g=k.ownerDocument;return p?Math.max(g.documentElement[c],g.body[c]):k[c]}}).end()};function n(b){return typeof b=='object'?b:{top:b,left:b}}})(jQuery);;

// Stuff for dragging Map items
/**
* EasyDrag 1.4 - Drag & Drop jQuery Plug-in
*
* Thanks for the community that is helping the improvement
* of this little piece of code.
*
* For usage instructions please visit http://fromvega.com
*/

(function($){

	// to track if the mouse button is pressed
	var isMouseDown    = false;

	// to track the current element being dragged
	var currentElement = null;

	// callback holders
	var dropCallbacks = {};
	var dragCallbacks = {};

	// global position records
	var lastMouseX;
	var lastMouseY;
	var lastElemTop;
	var lastElemLeft;
	
	// track element dragStatus
	var dragStatus = {};	

	// returns the mouse (cursor) current position
	$.getMousePosition = function(e){
		var posx = 0;
		var posy = 0;

		if (!e) var e = window.event;

		if (e.pageX || e.pageY) {
			posx = e.pageX;
			posy = e.pageY;
		}
		else if (e.clientX || e.clientY) {
			posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
			posy = e.clientY + document.body.scrollTop  + document.documentElement.scrollTop;
		}
		
		return { 'x': posx, 'y': posy };
	};

	// updates the position of the current element being dragged
	$.updatePosition = function(e) {
		var pos = $.getMousePosition(e);

		var spanX = (pos.x - lastMouseX);
		var spanY = (pos.y - lastMouseY);

		$(currentElement).css("top",  (lastElemTop + spanY));
		$(currentElement).css("left", (lastElemLeft + spanX));
	};

	// when the mouse is moved while the mouse button is pressed
	$(document).mousemove(function(e){
		if(isMouseDown && dragStatus[currentElement.id] == 'on'){
			// update the position and call the registered function
			$.updatePosition(e);
			if(dragCallbacks[currentElement.id] != undefined){
				dragCallbacks[currentElement.id](e, currentElement);
			}

			return false;
		}
	});

	// when the mouse button is released
	$(document).mouseup(function(e){
		if(isMouseDown && dragStatus[currentElement.id] == 'on'){
			isMouseDown = false;
			if(dropCallbacks[currentElement.id] != undefined){
				dropCallbacks[currentElement.id](e, currentElement);
			}

			return false;
		}
	});

	// register the function to be called while an element is being dragged
	$.fn.ondrag = function(callback){
		return this.each(function(){
			dragCallbacks[this.id] = callback;
		});
	};

	// register the function to be called when an element is dropped
	$.fn.ondrop = function(callback){
		return this.each(function(){
			dropCallbacks[this.id] = callback;
		});
	};
	
	// stop the element dragging feature
	$.fn.dragOff = function(){
		return this.each(function(){
			dragStatus[this.id] = 'off';
		});
	};
	
	
	$.fn.dragOn = function(){
		return this.each(function(){
			dragStatus[this.id] = 'on';
		});
	};

	// set an element as draggable - allowBubbling enables/disables event bubbling
	$.fn.easydrag = function(allowBubbling){

		return this.each(function(){
			
			function GetRandom( min, max ) {
        if( min > max ) {
                return( -1 );
        }
        if( min == max ) {
                return( min );
        }
 
        var r = parseInt( Math.random() * ( max+1 ) );
 
        return( r + min <= max ? r + min : r );
} 

			// if no id is defined assign a unique one
			if(undefined == this.id || !this.id.length) this.id = "easydrag"+(new Date().getTime())+GetRandom(0,1000);

			// set dragStatus 
			dragStatus[this.id] = "on";
			
			// change the mouse pointer
			$(this).css("cursor", "move");

			// when an element receives a mouse press
			$(this).mousedown(function(e){

				// set it as absolute positioned
				$(this).css("position", "absolute");

				// set z-index
				$(this).css("z-index", "10000");

				// update track variables
				isMouseDown    = true;
				currentElement = this;

				// retrieve positioning properties
				var pos    = $.getMousePosition(e);
				lastMouseX = pos.x;
				lastMouseY = pos.y;

				lastElemTop  = this.offsetTop;
				lastElemLeft = this.offsetLeft;

				$.updatePosition(e);

				return allowBubbling ? true : false;
			});
		});
	};

})(jQuery);;

// Stuff for Validation plugin for JQuery
/*
 * jQuery validation plug-in 1.5.1
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright (c) 2006 - 2008 JÃ¶rn Zaefferer
 *
 * $Id: jquery.validate.js 6096 2009-01-12 14:12:04Z joern.zaefferer $
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

(function($) {

$.extend($.fn, {
	// http://docs.jquery.com/Plugins/Validation/validate
	validate: function( options ) {
		
		// if nothing is selected, return nothing; can't chain anyway
		if (!this.length) {
			options && options.debug && window.console && console.warn( "nothing selected, can't validate, returning nothing" );
			return;
		}
		
		// check if a validator for this form was already created
		var validator = $.data(this[0], 'validator');
		if ( validator ) {
			return validator;
		}
		
		validator = new $.validator( options, this[0] );
		$.data(this[0], 'validator', validator); 
		
		if ( validator.settings.onsubmit ) {
		
			// allow suppresing validation by adding a cancel class to the submit button
			this.find("input, button").filter(".cancel").click(function() {
				validator.cancelSubmit = true;
			});
		
			// validate the form on submit
			this.submit( function( event ) {
				if ( validator.settings.debug )
					// prevent form submit to be able to see console output
					event.preventDefault();
					
				function handle() {
					if ( validator.settings.submitHandler ) {
						validator.settings.submitHandler.call( validator, validator.currentForm );
						return false;
					}
					return true;
				}
					
				// prevent submit for invalid forms or custom submit handlers
				if ( validator.cancelSubmit ) {
					validator.cancelSubmit = false;
					return handle();
				}
				if ( validator.form() ) {
					if ( validator.pendingRequest ) {
						validator.formSubmitted = true;
						return false;
					}
					return handle();
				} else {
					validator.focusInvalid();
					return false;
				}
			});
		}
		
		return validator;
	},
	// http://docs.jquery.com/Plugins/Validation/valid
	valid: function() {
        if ( $(this[0]).is('form')) {
            return this.validate().form();
        } else {
            var valid = false;
            var validator = $(this[0].form).validate();
            this.each(function() {
				valid |= validator.element(this);
            });
            return valid;
        }
    },
	// attributes: space seperated list of attributes to retrieve and remove
	removeAttrs: function(attributes) {
		var result = {},
			$element = this;
		$.each(attributes.split(/\s/), function(index, value) {
			result[value] = $element.attr(value);
			$element.removeAttr(value);
		});
		return result;
	},
	// http://docs.jquery.com/Plugins/Validation/rules
	rules: function(command, argument) {
		var element = this[0];
		
		if (command) {
			var settings = $.data(element.form, 'validator').settings;
			var staticRules = settings.rules;
			var existingRules = $.validator.staticRules(element);
			switch(command) {
			case "add":
				$.extend(existingRules, $.validator.normalizeRule(argument));
				staticRules[element.name] = existingRules;
				if (argument.messages)
					settings.messages[element.name] = $.extend( settings.messages[element.name], argument.messages );
				break;
			case "remove":
				if (!argument) {
					delete staticRules[element.name];
					return existingRules;
				}
				var filtered = {};
				$.each(argument.split(/\s/), function(index, method) {
					filtered[method] = existingRules[method];
					delete existingRules[method];
				});
				return filtered;
			}
		}
		
		var data = $.validator.normalizeRules(
		$.extend(
			{},
			$.validator.metadataRules(element),
			$.validator.classRules(element),
			$.validator.attributeRules(element),
			$.validator.staticRules(element)
		), element);
		
		// make sure required is at front
		if (data.required) {
			var param = data.required;
			delete data.required;
			data = $.extend({required: param}, data);
		}
		
		return data;
	}
});

// Custom selectors
$.extend($.expr[":"], {
	// http://docs.jquery.com/Plugins/Validation/blank
	blank: function(a) {return !$.trim(a.value);},
	// http://docs.jquery.com/Plugins/Validation/filled
	filled: function(a) {return !!$.trim(a.value);},
	// http://docs.jquery.com/Plugins/Validation/unchecked
	unchecked: function(a) {return !a.checked;}
});


$.format = function(source, params) {
	if ( arguments.length == 1 ) 
		return function() {
			var args = $.makeArray(arguments);
			args.unshift(source);
			return $.format.apply( this, args );
		};
	if ( arguments.length > 2 && params.constructor != Array  ) {
		params = $.makeArray(arguments).slice(1);
	}
	if ( params.constructor != Array ) {
		params = [ params ];
	}
	$.each(params, function(i, n) {
		source = source.replace(new RegExp("\\{" + i + "\\}", "g"), n);
	});
	return source;
};

// constructor for validator
$.validator = function( options, form ) {
	this.settings = $.extend( {}, $.validator.defaults, options );
	this.currentForm = form;
	this.init();
};

$.extend($.validator, {

	defaults: {
		messages: {},
		groups: {},
		rules: {},
		errorClass: "error",
		errorElement: "label",
		focusInvalid: true,
		errorContainer: $( [] ),
		errorLabelContainer: $( [] ),
		onsubmit: true,
		ignore: [],
		ignoreTitle: false,
		onfocusin: function(element) {
			this.lastActive = element;
				
			// hide error label and remove error class on focus if enabled
			if ( this.settings.focusCleanup && !this.blockFocusCleanup ) {
				this.settings.unhighlight && this.settings.unhighlight.call( this, element, this.settings.errorClass );
				this.errorsFor(element).hide();
			}
		},
		onfocusout: function(element) {
			if ( !this.checkable(element) && (element.name in this.submitted || !this.optional(element)) ) {
				this.element(element);
			}
		},
		onkeyup: function(element) {
			if ( element.name in this.submitted || element == this.lastElement ) {
				this.element(element);
			}
		},
		onclick: function(element) {
			if ( element.name in this.submitted )
				this.element(element);
		},
		highlight: function( element, errorClass ) {
			$( element ).addClass( errorClass );
		},
		unhighlight: function( element, errorClass ) {
			$( element ).removeClass( errorClass );
		}
	},

	// http://docs.jquery.com/Plugins/Validation/Validator/setDefaults
	setDefaults: function(settings) {
		$.extend( $.validator.defaults, settings );
	},

	messages: {
		required: "This field is required.",
		remote: "Please fix this field.",
		email: "Please enter a valid email address.",
		url: "Please enter a valid URL.",
		date: "Please enter a valid date.",
		dateISO: "Please enter a valid date (ISO).",
		dateDE: "Please enter a valid date.",
		number: "Please enter a valid number.",
		numberDE: "Please enter a valid number.",
		digits: "Please enter only digits.",
		creditcard: "Please enter a valid credit card number.",
		equalTo: "Please enter the same value again.",
		accept: "Please enter a value with a valid extension.",
		maxlength: $.format("Please enter no more than {0} characters."),
		minlength: $.format("Please enter at least {0} characters."),
		rangelength: $.format("Please enter a value between {0} and {1} characters long."),
		range: $.format("Please enter a value between {0} and {1}."),
		max: $.format("Please enter a value less than or equal to {0}."),
		min: $.format("Please enter a value greater than or equal to {0}.")
	},
	
	autoCreateRanges: false,
	
	prototype: {
		
		init: function() {
			this.labelContainer = $(this.settings.errorLabelContainer);
			this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
			this.containers = $(this.settings.errorContainer).add( this.settings.errorLabelContainer );
			this.submitted = {};
			this.valueCache = {};
			this.pendingRequest = 0;
			this.pending = {};
			this.invalid = {};
			this.reset();
			
			var groups = (this.groups = {});
			$.each(this.settings.groups, function(key, value) {
				$.each(value.split(/\s/), function(index, name) {
					groups[name] = key;
				});
			});
			var rules = this.settings.rules;
			$.each(rules, function(key, value) {
				rules[key] = $.validator.normalizeRule(value);
			});
			
			function delegate(event) {
				var validator = $.data(this[0].form, "validator");
				validator.settings["on" + event.type] && validator.settings["on" + event.type].call(validator, this[0] );
			}
			$(this.currentForm)
				.delegate("focusin focusout keyup", ":text, :password, :file, select, textarea", delegate)
				.delegate("click", ":radio, :checkbox", delegate);

			if (this.settings.invalidHandler)
				$(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler);
		},

		// http://docs.jquery.com/Plugins/Validation/Validator/form
		form: function() {
			this.checkForm();
			$.extend(this.submitted, this.errorMap);
			this.invalid = $.extend({}, this.errorMap);
			if (!this.valid())
				$(this.currentForm).triggerHandler("invalid-form", [this]);
			this.showErrors();
			return this.valid();
		},
		
		checkForm: function() {
			this.prepareForm();
			for ( var i = 0, elements = (this.currentElements = this.elements()); elements[i]; i++ ) {
				this.check( elements[i] );
			}
			return this.valid(); 
		},
		
		// http://docs.jquery.com/Plugins/Validation/Validator/element
		element: function( element ) {
			element = this.clean( element );
			this.lastElement = element;
			this.prepareElement( element );
			this.currentElements = $(element);
			var result = this.check( element );
			if ( result ) {
				delete this.invalid[element.name];
			} else {
				this.invalid[element.name] = true;
			}
			if ( !this.numberOfInvalids() ) {
				// Hide error containers on last error
				this.toHide = this.toHide.add( this.containers );
			}
			this.showErrors();
			return result;
		},

		// http://docs.jquery.com/Plugins/Validation/Validator/showErrors
		showErrors: function(errors) {
			if(errors) {
				// add items to error list and map
				$.extend( this.errorMap, errors );
				this.errorList = [];
				for ( var name in errors ) {
					this.errorList.push({
						message: errors[name],
						element: this.findByName(name)[0]
					});
				}
				// remove items from success list
				this.successList = $.grep( this.successList, function(element) {
					return !(element.name in errors);
				});
			}
			this.settings.showErrors
				? this.settings.showErrors.call( this, this.errorMap, this.errorList )
				: this.defaultShowErrors();
		},
		
		// http://docs.jquery.com/Plugins/Validation/Validator/resetForm
		resetForm: function() {
			if ( $.fn.resetForm )
				$( this.currentForm ).resetForm();
			this.submitted = {};
			this.prepareForm();
			this.hideErrors();
			this.elements().removeClass( this.settings.errorClass );
		},
		
		numberOfInvalids: function() {
			return this.objectLength(this.invalid);
		},
		
		objectLength: function( obj ) {
			var count = 0;
			for ( var i in obj )
				count++;
			return count;
		},
		
		hideErrors: function() {
			this.addWrapper( this.toHide ).hide();
		},
		
		valid: function() {
			return this.size() == 0;
		},
		
		size: function() {
			return this.errorList.length;
		},
		
		focusInvalid: function() {
			if( this.settings.focusInvalid ) {
				try {
					$(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus();
				} catch(e) {
					// ignore IE throwing errors when focusing hidden elements
				}
			}
		},
		
		findLastActive: function() {
			var lastActive = this.lastActive;
			return lastActive && $.grep(this.errorList, function(n) {
				return n.element.name == lastActive.name;
			}).length == 1 && lastActive;
		},
		
		elements: function() {
			var validator = this,
				rulesCache = {};
			
			// select all valid inputs inside the form (no submit or reset buttons)
			// workaround $Query([]).add until http://dev.jquery.com/ticket/2114 is solved
			return $([]).add(this.currentForm.elements)
			.filter(":input")
			.not(":submit, :reset, :image, [disabled]")
			.not( this.settings.ignore )
			.filter(function() {
				!this.name && validator.settings.debug && window.console && console.error( "%o has no name assigned", this);
			
				// select only the first element for each name, and only those with rules specified
				if ( this.name in rulesCache || !validator.objectLength($(this).rules()) )
					return false;
				
				rulesCache[this.name] = true;
				return true;
			});
		},
		
		clean: function( selector ) {
			return $( selector )[0];
		},
		
		errors: function() {
			return $( this.settings.errorElement + "." + this.settings.errorClass, this.errorContext );
		},
		
		reset: function() {
			this.successList = [];
			this.errorList = [];
			this.errorMap = {};
			this.toShow = $([]);
			this.toHide = $([]);
			this.formSubmitted = false;
			this.currentElements = $([]);
		},
		
		prepareForm: function() {
			this.reset();
			this.toHide = this.errors().add( this.containers );
		},
		
		prepareElement: function( element ) {
			this.reset();
			this.toHide = this.errorsFor(element);
		},
	
		check: function( element ) {
			element = this.clean( element );
			
			// if radio/checkbox, validate first element in group instead
			if (this.checkable(element)) {
				element = this.findByName( element.name )[0];
			}
			
			var rules = $(element).rules();
			var dependencyMismatch = false;
			for( method in rules ) {
				var rule = { method: method, parameters: rules[method] };
				try {
					var result = $.validator.methods[method].call( this, element.value, element, rule.parameters );
					
					// if a method indicates that the field is optional and therefore valid,
					// don't mark it as valid when there are no other rules
					if ( result == "dependency-mismatch" ) {
						dependencyMismatch = true;
						continue;
					}
					dependencyMismatch = false;
					
					if ( result == "pending" ) {
						this.toHide = this.toHide.not( this.errorsFor(element) );
						return;
					}
					
					if( !result ) {
						this.formatAndAdd( element, rule );
						return false;
					}
				} catch(e) {
					this.settings.debug && window.console && console.log("exception occured when checking element " + element.id
						 + ", check the '" + rule.method + "' method");
					throw e;
				}
			}
			if (dependencyMismatch)
				return;
			if ( this.objectLength(rules) )
				this.successList.push(element);
			return true;
		},
		
		// return the custom message for the given element and validation method
		// specified in the element's "messages" metadata
		customMetaMessage: function(element, method) {
			if (!$.metadata)
				return;
			
			var meta = this.settings.meta
				? $(element).metadata()[this.settings.meta]
				: $(element).metadata();
			
			return meta && meta.messages && meta.messages[method];
		},
		
		// return the custom message for the given element name and validation method
		customMessage: function( name, method ) {
			var m = this.settings.messages[name];
			return m && (m.constructor == String
				? m
				: m[method]);
		},
		
		// return the first defined argument, allowing empty strings
		findDefined: function() {
			for(var i = 0; i <arguments.length; i++) {
				if (arguments[i] !== undefined)
					return arguments[i];
			}
			return undefined;
		},
		
		defaultMessage: function( element, method) {
			return this.findDefined(
				this.customMessage( element.name, method ),
				this.customMetaMessage( element, method ),
				// title is never undefined, so handle empty string as undefined
				!this.settings.ignoreTitle && element.title || undefined,
				$.validator.messages[method],
				"<strong>Warning: No message defined for " + element.name + "</strong>"
			);
		},
		
		formatAndAdd: function( element, rule ) {
			var message = this.defaultMessage( element, rule.method );
			if ( typeof message == "function" ) 
				message = message.call(this, rule.parameters, element);
			this.errorList.push({
				message: message,
				element: element
			});
			this.errorMap[element.name] = message;
			this.submitted[element.name] = message;
		},
		
		addWrapper: function(toToggle) {
			if ( this.settings.wrapper )
				toToggle = toToggle.add( toToggle.parents( this.settings.wrapper ) );
			return toToggle;
		},
		
		defaultShowErrors: function() {
			for ( var i = 0; this.errorList[i]; i++ ) {
				var error = this.errorList[i];
				this.settings.highlight && this.settings.highlight.call( this, error.element, this.settings.errorClass );
				this.showLabel( error.element, error.message );
			}
			if( this.errorList.length ) {
				this.toShow = this.toShow.add( this.containers );
			}
			if (this.settings.success) {
				for ( var i = 0; this.successList[i]; i++ ) {
					this.showLabel( this.successList[i] );
				}
			}
			if (this.settings.unhighlight) {
				for ( var i = 0, elements = this.validElements(); elements[i]; i++ ) {
					this.settings.unhighlight.call( this, elements[i], this.settings.errorClass );
				}
			}
			this.toHide = this.toHide.not( this.toShow );
			this.hideErrors();
			this.addWrapper( this.toShow ).show();
		},
		
		validElements: function() {
			return this.currentElements.not(this.invalidElements());
		},
		
		invalidElements: function() {
			return $(this.errorList).map(function() {
				return this.element;
			});
		},
		
		showLabel: function(element, message) {
			var label = this.errorsFor( element );
			if ( label.length ) {
				// refresh error/success class
				label.removeClass().addClass( this.settings.errorClass );
			
				// check if we have a generated label, replace the message then
				label.attr("generated") && label.html(message);
			} else {
				// create label
				label = $("<" + this.settings.errorElement + "/>")
					.attr({"for":  this.idOrName(element), generated: true})
					.addClass(this.settings.errorClass)
					.html(message || "");
				if ( this.settings.wrapper ) {
					// make sure the element is visible, even in IE
					// actually showing the wrapped element is handled elsewhere
					label = label.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
				}
				if ( !this.labelContainer.append(label).length )
					this.settings.errorPlacement
						? this.settings.errorPlacement(label, $(element) )
						: label.insertAfter(element);
			}
			if ( !message && this.settings.success ) {
				label.text("");
				typeof this.settings.success == "string"
					? label.addClass( this.settings.success )
					: this.settings.success( label );
			}
			this.toShow = this.toShow.add(label);
		},
		
		errorsFor: function(element) {
			return this.errors().filter("[for='" + this.idOrName(element) + "']");
		},
		
		idOrName: function(element) {
			return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name);
		},

		checkable: function( element ) {
			return /radio|checkbox/i.test(element.type);
		},
		
		findByName: function( name ) {
			// select by name and filter by form for performance over form.find("[name=...]")
			var form = this.currentForm;
			return $(document.getElementsByName(name)).map(function(index, element) {
				return element.form == form && element.name == name && element  || null;
			});
		},
		
		getLength: function(value, element) {
			switch( element.nodeName.toLowerCase() ) {
			case 'select':
				return $("option:selected", element).length;
			case 'input':
				if( this.checkable( element) )
					return this.findByName(element.name).filter(':checked').length;
			}
			return value.length;
		},
	
		depend: function(param, element) {
			return this.dependTypes[typeof param]
				? this.dependTypes[typeof param](param, element)
				: true;
		},
	
		dependTypes: {
			"boolean": function(param, element) {
				return param;
			},
			"string": function(param, element) {
				return !!$(param, element.form).length;
			},
			"function": function(param, element) {
				return param(element);
			}
		},
		
		optional: function(element) {
			return !$.validator.methods.required.call(this, $.trim(element.value), element) && "dependency-mismatch";
		},
		
		startRequest: function(element) {
			if (!this.pending[element.name]) {
				this.pendingRequest++;
				this.pending[element.name] = true;
			}
		},
		
		stopRequest: function(element, valid) {
			this.pendingRequest--;
			// sometimes synchronization fails, make sure pendingRequest is never <0
			if (this.pendingRequest <0)
				this.pendingRequest = 0;
			delete this.pending[element.name];
			if ( valid && this.pendingRequest == 0 && this.formSubmitted && this.form() ) {
				$(this.currentForm).submit();
			} else if (!valid && this.pendingRequest == 0 && this.formSubmitted) {
				$(this.currentForm).triggerHandler("invalid-form", [this]);
			}
		},
		
		previousValue: function(element) {
			return $.data(element, "previousValue") || $.data(element, "previousValue", previous = {
				old: null,
				valid: true,
				message: this.defaultMessage( element, "remote" )
			});
		}
		
	},
	
	classRuleSettings: {
		required: {required: true},
		email: {email: true},
		url: {url: true},
		date: {date: true},
		dateISO: {dateISO: true},
		dateDE: {dateDE: true},
		number: {number: true},
		numberDE: {numberDE: true},
		digits: {digits: true},
		creditcard: {creditcard: true}
	},
	
	addClassRules: function(className, rules) {
		className.constructor == String ?
			this.classRuleSettings[className] = rules :
			$.extend(this.classRuleSettings, className);
	},
	
	classRules: function(element) {
		var rules = {};
		var classes = $(element).attr('class');
		classes && $.each(classes.split(' '), function() {
			if (this in $.validator.classRuleSettings) {
				$.extend(rules, $.validator.classRuleSettings[this]);
			}
		});
		return rules;
	},
	
	attributeRules: function(element) {
		var rules = {};
		var $element = $(element);
		
		for (method in $.validator.methods) {
			var value = $element.attr(method);
			if (value) {
				rules[method] = value;
			}
		}
		
		// maxlength may be returned as -1, 2147483647 (IE) and 524288 (safari) for text inputs
		if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) {
			delete rules.maxlength;
		}
		
		return rules;
	},
	
	metadataRules: function(element) {
		if (!$.metadata) return {};
		
		var meta = $.data(element.form, 'validator').settings.meta;
		return meta ?
			$(element).metadata()[meta] :
			$(element).metadata();
	},
	
	staticRules: function(element) {
		var rules = {};
		var validator = $.data(element.form, 'validator');
		if (validator.settings.rules) {
			rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
		}
		return rules;
	},
	
	normalizeRules: function(rules, element) {
		// handle dependency check
		$.each(rules, function(prop, val) {
			// ignore rule when param is explicitly false, eg. required:false
			if (val === false) {
				delete rules[prop];
				return;
			}
			if (val.param || val.depends) {
				var keepRule = true;
				switch (typeof val.depends) {
					case "string":
						keepRule = !!$(val.depends, element.form).length;
						break;
					case "function":
						keepRule = val.depends.call(element, element);
						break;
				}
				if (keepRule) {
					rules[prop] = val.param !== undefined ? val.param : true;
				} else {
					delete rules[prop];
				}
			}
		});
		
		// evaluate parameters
		$.each(rules, function(rule, parameter) {
			rules[rule] = $.isFunction(parameter) ? parameter(element) : parameter;
		});
		
		// clean number parameters
		$.each(['minlength', 'maxlength', 'min', 'max'], function() {
			if (rules[this]) {
				rules[this] = Number(rules[this]);
			}
		});
		$.each(['rangelength', 'range'], function() {
			if (rules[this]) {
				rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
			}
		});
		
		if ($.validator.autoCreateRanges) {
			// auto-create ranges
			if (rules.min && rules.max) {
				rules.range = [rules.min, rules.max];
				delete rules.min;
				delete rules.max;
			}
			if (rules.minlength && rules.maxlength) {
				rules.rangelength = [rules.minlength, rules.maxlength];
				delete rules.minlength;
				delete rules.maxlength;
			}
		}
		
		// To support custom messages in metadata ignore rule methods titled "messages"
		if (rules.messages) {
			delete rules.messages
		}
		
		return rules;
	},
	
	// Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
	normalizeRule: function(data) {
		if( typeof data == "string" ) {
			var transformed = {};
			$.each(data.split(/\s/), function() {
				transformed[this] = true;
			});
			data = transformed;
		}
		return data;
	},
	
	// http://docs.jquery.com/Plugins/Validation/Validator/addMethod
	addMethod: function(name, method, message) {
		$.validator.methods[name] = method;
		$.validator.messages[name] = message;
		if (method.length <3) {
			$.validator.addClassRules(name, $.validator.normalizeRule(name));
		}
	},

	methods: {

		// http://docs.jquery.com/Plugins/Validation/Methods/required
		required: function(value, element, param) {
			// check if dependency is met
			if ( !this.depend(param, element) )
				return "dependency-mismatch";
			switch( element.nodeName.toLowerCase() ) {
			case 'select':
				var options = $("option:selected", element);
				return options.length > 0 && ( element.type == "select-multiple" || ($.browser.msie && !(options[0].attributes['value'].specified) ? options[0].text : options[0].value).length > 0);
			case 'input':
				if ( this.checkable(element) )
					return this.getLength(value, element) > 0;
			default:
				return $.trim(value).length > 0;
			}
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/remote
		remote: function(value, element, param) {
			if ( this.optional(element) )
				return "dependency-mismatch";
			
			var previous = this.previousValue(element);
			
			if (!this.settings.messages[element.name] )
				this.settings.messages[element.name] = {};
			this.settings.messages[element.name].remote = typeof previous.message == "function" ? previous.message(value) : previous.message;
			
			param = typeof param == "string" && {url:param} || param; 
			
			if ( previous.old !== value ) {
				previous.old = value;
				var validator = this;
				this.startRequest(element);
				var data = {};
				data[element.name] = value;
				$.ajax($.extend(true, {
					url: param,
					mode: "abort",
					port: "validate" + element.name,
					dataType: "json",
					data: data,
					success: function(response) {
						if ( response ) {
							var submitted = validator.formSubmitted;
							validator.prepareElement(element);
							validator.formSubmitted = submitted;
							validator.successList.push(element);
							validator.showErrors();
						} else {
							var errors = {};
							errors[element.name] =  response || validator.defaultMessage( element, "remote" );
							validator.showErrors(errors);
						}
						previous.valid = response;
						validator.stopRequest(element, response);
					}
				}, param));
				return "pending";
			} else if( this.pending[element.name] ) {
				return "pending";
			}
			return previous.valid;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/minlength
		minlength: function(value, element, param) {
			return this.optional(element) || this.getLength($.trim(value), element) >= param;
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/maxlength
		maxlength: function(value, element, param) {
			return this.optional(element) || this.getLength($.trim(value), element) <= param;
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/rangelength
		rangelength: function(value, element, param) {
			var length = this.getLength($.trim(value), element);
			return this.optional(element) || ( length >= param[0] && length <= param[1] );
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/min
		min: function( value, element, param ) {
			return this.optional(element) || value >= param;
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/max
		max: function( value, element, param ) {
			return this.optional(element) || value <= param;
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/range
		range: function( value, element, param ) {
			return this.optional(element) || ( value >= param[0] && value <= param[1] );
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/email
		email: function(value, element) {
			// contributed by Scott Gonzalez: http://projects.scottsplayground.com/email_address_validation/
			return this.optional(element) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(value);
		},
	
		// http://docs.jquery.com/Plugins/Validation/Methods/url
		url: function(value, element) {
			// contributed by Scott Gonzalez: http://projects.scottsplayground.com/iri/
			return this.optional(element) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
		},
        
		// http://docs.jquery.com/Plugins/Validation/Methods/date
		date: function(value, element) {
			return this.optional(element) || !/Invalid|NaN/.test(new Date(value));
		},
	
		// http://docs.jquery.com/Plugins/Validation/Methods/dateISO
		dateISO: function(value, element) {
			return this.optional(element) || /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(value);
		},
	
		// http://docs.jquery.com/Plugins/Validation/Methods/dateDE
		dateDE: function(value, element) {
			return this.optional(element) || /^\d\d?\.\d\d?\.\d\d\d?\d?$/.test(value);
		},
	
		// http://docs.jquery.com/Plugins/Validation/Methods/number
		number: function(value, element) {
			return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(value);
		},
	
		// http://docs.jquery.com/Plugins/Validation/Methods/numberDE
		numberDE: function(value, element) {
			return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:\.\d{3})+)(?:,\d+)?$/.test(value);
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/digits
		digits: function(value, element) {
			return this.optional(element) || /^\d+$/.test(value);
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/creditcard
		// based on http://en.wikipedia.org/wiki/Luhn
		creditcard: function(value, element) {
			if ( this.optional(element) )
				return "dependency-mismatch";
			// accept only digits and dashes
			if (/[^0-9-]+/.test(value))
				return false;
			var nCheck = 0,
				nDigit = 0,
				bEven = false;

			value = value.replace(/\D/g, "");

			for (n = value.length - 1; n >= 0; n--) {
				var cDigit = value.charAt(n);
				var nDigit = parseInt(cDigit, 10);
				if (bEven) {
					if ((nDigit *= 2) > 9)
						nDigit -= 9;
				}
				nCheck += nDigit;
				bEven = !bEven;
			}

			return (nCheck % 10) == 0;
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/accept
		accept: function(value, element, param) {
			param = typeof param == "string" ? param : "png|jpe?g|gif";
			return this.optional(element) || value.match(new RegExp(".(" + param + ")$", "i")); 
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/equalTo
		equalTo: function(value, element, param) {
			return value == $(param).val();
		}
		
	}
	
});

})(jQuery);

// ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort() 
;(function($) {
	var ajax = $.ajax;
	var pendingRequests = {};
	$.ajax = function(settings) {
		// create settings for compatibility with ajaxSetup
		settings = $.extend(settings, $.extend({}, $.ajaxSettings, settings));
		var port = settings.port;
		if (settings.mode == "abort") {
			if ( pendingRequests[port] ) {
				pendingRequests[port].abort();
			}
			return (pendingRequests[port] = ajax.apply(this, arguments));
		}
		return ajax.apply(this, arguments);
	};
})(jQuery);

// provides cross-browser focusin and focusout events
// IE has native support, in other browsers, use event caputuring (neither bubbles)

// provides delegate(type: String, delegate: Selector, handler: Callback) plugin for easier event delegation
// handler is only called when $(event.target).is(delegate), in the scope of the jquery-object for event.target 

// provides triggerEvent(type: String, target: Element) to trigger delegated events
;(function($) {
	$.each({
		focus: 'focusin',
		blur: 'focusout'	
	}, function( original, fix ){
		$.event.special[fix] = {
			setup:function() {
				if ( $.browser.msie ) return false;
				this.addEventListener( original, $.event.special[fix].handler, true );
			},
			teardown:function() {
				if ( $.browser.msie ) return false;
				this.removeEventListener( original,
				$.event.special[fix].handler, true );
			},
			handler: function(e) {
				arguments[0] = $.event.fix(e);
				arguments[0].type = fix;
				return $.event.handle.apply(this, arguments);
			}
		};
	});
	$.extend($.fn, {
		delegate: function(type, delegate, handler) {
			return this.bind(type, function(event) {
				var target = $(event.target);
				if (target.is(delegate)) {
					return handler.apply(target, arguments);
				}
			});
		},
		triggerEvent: function(type, target) {
			return this.triggerHandler(type, [$.event.fix({ type: type, target: target })]);
		}
	})
})(jQuery);
;
/*
 * Metadata - jQuery plugin for parsing metadata from elements
 *
 * Copyright (c) 2006 John Resig, Yehuda Katz, Jï¿½Ã¶rn Zaefferer, Paul McLanahan
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Revision: $Id: jquery.metadata.js 4187 2007-12-16 17:15:27Z joern.zaefferer $
 *
 */

/**
 * Sets the type of metadata to use. Metadata is encoded in JSON, and each property
 * in the JSON will become a property of the element itself.
 *
 * There are three supported types of metadata storage:
 *
 *   attr:  Inside an attribute. The name parameter indicates *which* attribute.
 *          
 *   class: Inside the class attribute, wrapped in curly braces: { }
 *   
 *   elem:  Inside a child element (e.g. a script tag). The
 *          name parameter indicates *which* element.
 *          
 * The metadata for an element is loaded the first time the element is accessed via jQuery.
 *
 * As a result, you can define the metadata type, use $(expr) to load the metadata into the elements
 * matched by expr, then redefine the metadata type and run another $(expr) for other elements.
 * 
 * @name $.metadata.setType
 *
 * @example <p id="one" class="some_class {item_id: 1, item_label: 'Label'}">This is a p</p>
 * @before $.metadata.setType("class")
 * @after $("#one").metadata().item_id == 1; $("#one").metadata().item_label == "Label"
 * @desc Reads metadata from the class attribute
 * 
 * @example <p id="one" class="some_class" data="{item_id: 1, item_label: 'Label'}">This is a p</p>
 * @before $.metadata.setType("attr", "data")
 * @after $("#one").metadata().item_id == 1; $("#one").metadata().item_label == "Label"
 * @desc Reads metadata from a "data" attribute
 * 
 * @example <p id="one" class="some_class"><script>{item_id: 1, item_label: 'Label'}</script>This is a p</p>
 * @before $.metadata.setType("elem", "script")
 * @after $("#one").metadata().item_id == 1; $("#one").metadata().item_label == "Label"
 * @desc Reads metadata from a nested script element
 * 
 * @param String type The encoding type
 * @param String name The name of the attribute to be used to get metadata (optional)
 * @cat Plugins/Metadata
 * @descr Sets the type of encoding to be used when loading metadata for the first time
 * @type undefined
 * @see metadata()
 */

(function($) {

$.extend({
	metadata : {
		defaults : {
			type: 'class',
			name: 'metadata',
			cre: /({.*})/,
			single: 'metadata'
		},
		setType: function( type, name ){
			this.defaults.type = type;
			this.defaults.name = name;
		},
		get: function( elem, opts ){
			var settings = $.extend({},this.defaults,opts);
			// check for empty string in single property
			if ( !settings.single.length ) settings.single = 'metadata';
			
			var data = $.data(elem, settings.single);
			// returned cached data if it already exists
			if ( data ) return data;
			
			data = "{}";
			
			if ( settings.type == "class" ) {
				var m = settings.cre.exec( elem.className );
				if ( m )
					data = m[1];
			} else if ( settings.type == "elem" ) {
				if( !elem.getElementsByTagName )
					return undefined;
				var e = elem.getElementsByTagName(settings.name);
				if ( e.length )
					data = $.trim(e[0].innerHTML);
			} else if ( elem.getAttribute != undefined ) {
				var attr = elem.getAttribute( settings.name );
				if ( attr )
					data = attr;
			}
			
			if ( data.indexOf( '{' ) <0 )
			data = "{" + data + "}";
			
			data = eval("(" + data + ")");
			
			$.data( elem, settings.single, data );
			return data;
		}
	}
});

/**
 * Returns the metadata object for the first member of the jQuery object.
 *
 * @name metadata
 * @descr Returns element's metadata object
 * @param Object opts An object contianing settings to override the defaults
 * @type jQuery
 * @cat Plugins/Metadata
 */
$.fn.metadata = function( opts ){
	return $.metadata.get( this[0], opts );
};

})(jQuery);;

// Stuff for Color Picker for jQuery
// $Id: farbtastic.js,v 1.2 2007/01/08 22:53:01 unconed Exp $
// Farbtastic 1.2

jQuery.fn.farbtastic = function (callback) {
  $.farbtastic(this, callback);
  return this;
};

jQuery.farbtastic = function (container, callback) {
  var container = $(container).get(0);
  return container.farbtastic || (container.farbtastic = new jQuery._farbtastic(container, callback));
}

jQuery._farbtastic = function (container, callback) {
  // Store farbtastic object
  var fb = this;

  // Insert markup
  $(container).html('<div class="farbtastic"><div class="color"></div><div class="wheel"></div><div class="overlay"></div><div class="h-marker marker"></div><div class="sl-marker marker"></div></div>');
  var e = $('.farbtastic', container);
  fb.wheel = $('.wheel', container).get(0);
  // Dimensions
  fb.radius = 84;
  fb.square = 100;
  fb.width = 194;

  // Fix background PNGs in IE6
  if (navigator.appVersion.match(/MSIE [0-6]\./)) {
    $('*', e).each(function () {
      if (this.currentStyle.backgroundImage != 'none') {
        var image = this.currentStyle.backgroundImage;
        image = this.currentStyle.backgroundImage.substring(5, image.length - 2);
        $(this).css({
          'backgroundImage': 'none',
          'filter': "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=crop, src='" + image + "')"
        });
      }
    });
  }

  /**
   * Link to the given element(s) or callback.
   */
  fb.linkTo = function (callback) {
    // Unbind previous nodes
    if (typeof fb.callback == 'object') {
      $(fb.callback).unbind('keyup', fb.updateValue);
    }

    // Reset color
    fb.color = null;

    // Bind callback or elements
    if (typeof callback == 'function') {
      fb.callback = callback;
    }
    else if (typeof callback == 'object' || typeof callback == 'string') {
      fb.callback = $(callback);
      fb.callback.bind('keyup', fb.updateValue);
      if (fb.callback.get(0).value) {
        fb.setColor(fb.callback.get(0).value);
      }
    }
    return this;
  }
  fb.updateValue = function (event) {
    if (this.value && this.value != fb.color) {
      fb.setColor(this.value);
    }
  }

  /**
   * Change color with HTML syntax #123456
   */
  fb.setColor = function (color) {
    var unpack = fb.unpack(color);
    if (fb.color != color && unpack) {
      fb.color = color;
      fb.rgb = unpack;
      fb.hsl = fb.RGBToHSL(fb.rgb);
      fb.updateDisplay();
    }
    return this;
  }

  /**
   * Change color with HSL triplet [0..1, 0..1, 0..1]
   */
  fb.setHSL = function (hsl) {
    fb.hsl = hsl;
    fb.rgb = fb.HSLToRGB(hsl);
    fb.color = fb.pack(fb.rgb);
    fb.updateDisplay();
    return this;
  }

  /////////////////////////////////////////////////////

  /**
   * Retrieve the coordinates of the given event relative to the center
   * of the widget.
   */
  fb.widgetCoords = function (event) {
    var x, y;
    var el = event.target || event.srcElement;
    var reference = fb.wheel;

    if (typeof event.offsetX != 'undefined') {
      // Use offset coordinates and find common offsetParent
      var pos = { x: event.offsetX, y: event.offsetY };

      // Send the coordinates upwards through the offsetParent chain.
      var e = el;
      while (e) {
        e.mouseX = pos.x;
        e.mouseY = pos.y;
        pos.x += e.offsetLeft;
        pos.y += e.offsetTop;
        e = e.offsetParent;
      }

      // Look for the coordinates starting from the wheel widget.
      var e = reference;
      var offset = { x: 0, y: 0 }
      while (e) {
        if (typeof e.mouseX != 'undefined') {
          x = e.mouseX - offset.x;
          y = e.mouseY - offset.y;
          break;
        }
        offset.x += e.offsetLeft;
        offset.y += e.offsetTop;
        e = e.offsetParent;
      }

      // Reset stored coordinates
      e = el;
      while (e) {
        e.mouseX = undefined;
        e.mouseY = undefined;
        e = e.offsetParent;
      }
    }
    else {
      // Use absolute coordinates
      var pos = fb.absolutePosition(reference);
      x = (event.pageX || 0*(event.clientX + $('html').get(0).scrollLeft)) - pos.x;
      y = (event.pageY || 0*(event.clientY + $('html').get(0).scrollTop)) - pos.y;
    }
    // Subtract distance to middle
    return { x: x - fb.width / 2, y: y - fb.width / 2 };
  }

  /**
   * Mousedown handler
   */
  fb.mousedown = function (event) {
    // Capture mouse
    if (!document.dragging) {
      $(document).bind('mousemove', fb.mousemove).bind('mouseup', fb.mouseup);
      document.dragging = true;
    }

    // Check which area is being dragged
    var pos = fb.widgetCoords(event);
    fb.circleDrag = Math.max(Math.abs(pos.x), Math.abs(pos.y)) * 2 > fb.square;

    // Process
    fb.mousemove(event);
    return false;
  }

  /**
   * Mousemove handler
   */
  fb.mousemove = function (event) {
    // Get coordinates relative to color picker center
    var pos = fb.widgetCoords(event);

    // Set new HSL parameters
    if (fb.circleDrag) {
      var hue = Math.atan2(pos.x, -pos.y) / 6.28;
      if (hue < 0) hue += 1;
      fb.setHSL([hue, fb.hsl[1], fb.hsl[2]]);
    }
    else {
      var sat = Math.max(0, Math.min(1, -(pos.x / fb.square) + .5));
      var lum = Math.max(0, Math.min(1, -(pos.y / fb.square) + .5));
      fb.setHSL([fb.hsl[0], sat, lum]);
    }
    return false;
  }

  /**
   * Mouseup handler
   */
  fb.mouseup = function () {
    // Uncapture mouse
    $(document).unbind('mousemove', fb.mousemove);
    $(document).unbind('mouseup', fb.mouseup);
    document.dragging = false;
  }

  /**
   * Update the markers and styles
   */
  fb.updateDisplay = function () {
    // Markers
    var angle = fb.hsl[0] * 6.28;
    $('.h-marker', e).css({
      left: Math.round(Math.sin(angle) * fb.radius + fb.width / 2) + 'px',
      top: Math.round(-Math.cos(angle) * fb.radius + fb.width / 2) + 'px'
    });

    $('.sl-marker', e).css({
      left: Math.round(fb.square * (.5 - fb.hsl[1]) + fb.width / 2) + 'px',
      top: Math.round(fb.square * (.5 - fb.hsl[2]) + fb.width / 2) + 'px'
    });

    // Saturation/Luminance gradient
    $('.color', e).css('backgroundColor', fb.pack(fb.HSLToRGB([fb.hsl[0], 1, 0.5])));

    // Linked elements or callback
    if (typeof fb.callback == 'object') {
      // Set background/foreground color
      $(fb.callback).css({
        backgroundColor: fb.color,
        color: fb.hsl[2] > 0.5 ? '#000' : '#fff'
      });

      // Change linked value
      $(fb.callback).each(function() {
        if (this.value && this.value != fb.color) {
          this.value = fb.color;
        }
      });
    }
    else if (typeof fb.callback == 'function') {
      fb.callback.call(fb, fb.color);
    }
  }

  /**
   * Get absolute position of element
   */
  fb.absolutePosition = function (el) {
    var r = { x: el.offsetLeft, y: el.offsetTop };
    // Resolve relative to offsetParent
    if (el.offsetParent) {
      var tmp = fb.absolutePosition(el.offsetParent);
      r.x += tmp.x;
      r.y += tmp.y;
    }
    return r;
  };

  /* Various color utility functions */
  fb.pack = function (rgb) {
    var r = Math.round(rgb[0] * 255);
    var g = Math.round(rgb[1] * 255);
    var b = Math.round(rgb[2] * 255);
    return '#' + (r < 16 ? '0' : '') + r.toString(16) +
           (g < 16 ? '0' : '') + g.toString(16) +
           (b < 16 ? '0' : '') + b.toString(16);
  }

  fb.unpack = function (color) {
    if (color.length == 7) {
      return [parseInt('0x' + color.substring(1, 3)) / 255,
        parseInt('0x' + color.substring(3, 5)) / 255,
        parseInt('0x' + color.substring(5, 7)) / 255];
    }
    else if (color.length == 4) {
      return [parseInt('0x' + color.substring(1, 2)) / 15,
        parseInt('0x' + color.substring(2, 3)) / 15,
        parseInt('0x' + color.substring(3, 4)) / 15];
    }
  }

  fb.HSLToRGB = function (hsl) {
    var m1, m2, r, g, b;
    var h = hsl[0], s = hsl[1], l = hsl[2];
    m2 = (l <= 0.5) ? l * (s + 1) : l + s - l*s;
    m1 = l * 2 - m2;
    return [this.hueToRGB(m1, m2, h+0.33333),
        this.hueToRGB(m1, m2, h),
        this.hueToRGB(m1, m2, h-0.33333)];
  }

  fb.hueToRGB = function (m1, m2, h) {
    h = (h < 0) ? h + 1 : ((h > 1) ? h - 1 : h);
    if (h * 6 < 1) return m1 + (m2 - m1) * h * 6;
    if (h * 2 < 1) return m2;
    if (h * 3 < 2) return m1 + (m2 - m1) * (0.66666 - h) * 6;
    return m1;
  }

  fb.RGBToHSL = function (rgb) {
    var min, max, delta, h, s, l;
    var r = rgb[0], g = rgb[1], b = rgb[2];
    min = Math.min(r, Math.min(g, b));
    max = Math.max(r, Math.max(g, b));
    delta = max - min;
    l = (min + max) / 2;
    s = 0;
    if (l > 0 && l < 1) {
      s = delta / (l < 0.5 ? (2 * l) : (2 - 2 * l));
    }
    h = 0;
    if (delta > 0) {
      if (max == r && max != g) h += (g - b) / delta;
      if (max == g && max != b) h += (2 + (b - r) / delta);
      if (max == b && max != r) h += (4 + (r - g) / delta);
      h /= 6;
    }
    return [h, s, l];
  }

  // Install mousedown handler (the others are set on the document on-demand)
  $('*', e).mousedown(fb.mousedown);

    // Init color
  fb.setColor('#000000');

  // Set linked elements/callback
  if (callback) {
    fb.linkTo(callback);
  }
};

// Stuff for Fusion Charts (shockwave control)
/**
 * FusionCharts: Flash Player detection and Chart embed 
 * 
 * Morphed from SWFObject (http://blog.deconcept.com/swfobject/) under MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */
if(typeof infosoftglobal == "undefined") var infosoftglobal = new Object();
if(typeof infosoftglobal.FusionChartsUtil == "undefined") infosoftglobal.FusionChartsUtil = new Object();
infosoftglobal.FusionCharts = function(swf, id, w, h, debugMode, registerWithJS, c, scaleMode, lang){
	if (!document.getElementById) { return; }
	
	//Flag to see whether data has been set initially
	this.initialDataSet = false;
	
	//Create container objects
	this.params = new Object();
	this.variables = new Object();
	this.attributes = new Array();
	
	//Set attributes for the SWF
	if(swf) { this.setAttribute('swf', swf); }
	if(id) { this.setAttribute('id', id); }
	if(w) { this.setAttribute('width', w); }
	if(h) { this.setAttribute('height', h); }
	
	//Set background color
	if(c) { this.addParam('bgcolor', c); }
	
	//Set Quality	
	this.addParam('quality', 'high');
	
	//Add scripting access parameter
	this.addParam('allowScriptAccess', 'always');
	
	//Pass width and height to be appended as chartWidth and chartHeight
	this.addVariable('chartWidth', w);
	this.addVariable('chartHeight', h);

	//Whether in debug mode
	debugMode = debugMode ? debugMode : 0;
	this.addVariable('debugMode', debugMode);
	//Pass DOM ID to Chart
	this.addVariable('DOMId', id);
	//Whether to registed with JavaScript
	registerWithJS = registerWithJS ? registerWithJS : 0;
	this.addVariable('registerWithJS', registerWithJS);
	
	//Scale Mode of chart
	scaleMode = scaleMode ? scaleMode : 'noScale';
	this.addVariable('scaleMode', scaleMode);
	//Application Message Language
	lang = lang ? lang : 'EN';
	this.addVariable('lang', lang);
}

infosoftglobal.FusionCharts.prototype = {
	setAttribute: function(name, value){
		this.attributes[name] = value;
	},
	getAttribute: function(name){
		return this.attributes[name];
	},
	addParam: function(name, value){
		this.params[name] = value;
	},
	getParams: function(){
		return this.params;
	},
	addVariable: function(name, value){
		this.variables[name] = value;
	},
	getVariable: function(name){
		return this.variables[name];
	},
	getVariables: function(){
		return this.variables;
	},
	getVariablePairs: function(){
		var variablePairs = new Array();
		var key;
		var variables = this.getVariables();
		for(key in variables){
			variablePairs.push(key +"="+ variables[key]);
		}
		return variablePairs;
	},
	getSWFHTML: function() {
		var swfNode = "";
		if (navigator.plugins && navigator.mimeTypes && navigator.mimeTypes.length) { 
			// netscape plugin architecture			
//edited by DP Sep 2007			swfNode = '<embed type="application/x-shockwave-flash" src="'+ this.getAttribute('swf') +'" width="'+ this.getAttribute('width') +'" height="'+ this.getAttribute('height') +'"  ';
			swfNode = '<embed type="application/x-shockwave-flash" src="'+ this.getAttribute('swf') +'" width="100%" height="100%"  ';
			swfNode += ' id="'+ this.getAttribute('id') +'" name="'+ this.getAttribute('id') +'" ';
			var params = this.getParams();
			 for(var key in params){ swfNode += [key] +'="'+ params[key] +'" '; }
			 swfNode += 'wmode="opaque" ';
			var pairs = this.getVariablePairs().join("&");
			 if (pairs.length > 0){ swfNode += 'flashvars="'+ pairs +'"'; }
			swfNode += '/>';
		} else { // PC IE			
			//edited by DP Sep 2007 swfNode = '<object id="'+ this.getAttribute('id') +'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+ this.getAttribute('width') +'" height="'+ this.getAttribute('height') +'">';
			swfNode = '<object id="'+ this.getAttribute('id') +'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%">';
			swfNode += '<param name="wmode" value="opaque"><param name="movie" value="'+ this.getAttribute('swf') +'" />';
			var params = this.getParams();
			for(var key in params) {
			 swfNode += '<param name="'+ key +'" value="'+ params[key] +'" />';
			}
			var pairs = this.getVariablePairs().join("&");			
			if(pairs.length > 0) {swfNode += '<param name="flashvars" value="'+ pairs +'" />';}
			swfNode += "</object>";
		}
		return swfNode;
	},
	setDataURL: function(strDataURL){
		//This method sets the data URL for the chart.
		//If being set initially
		if (this.initialDataSet==false){
			this.addVariable('dataURL',strDataURL);
			//Update flag
			this.initialDataSet = true;
		}else{
			//Else, we update the chart data using External Interface
			//Get reference to chart object
			var chartObj = infosoftglobal.FusionChartsUtil.getChartObject(this.getAttribute('id'));
			chartObj.setDataURL(strDataURL);
		}
	},
	setDataXML: function(strDataXML){
		//If being set initially
		if (this.initialDataSet==false){
			//This method sets the data XML for the chart INITIALLY.
			this.addVariable('dataXML',strDataXML);
			//Update flag
			this.initialDataSet = true;
		}else{
			//Else, we update the chart data using External Interface
			//Get reference to chart object
			var chartObj = infosoftglobal.FusionChartsUtil.getChartObject(this.getAttribute('id'));
			chartObj.setDataXML(strDataXML);
		}
	},
       		render: function(elementId){
		var n = (typeof elementId == 'string') ? document.getElementById(elementId) : elementId;
		$(n).html( this.getSWFHTML());
		
		//n.innerHTML = this.getSWFHTML();
		return true;		
	}
}

// ------------ Fix for Out of Memory Bug in IE in FP9 ---------------//
/* Fix for video streaming bug */
infosoftglobal.FusionChartsUtil.cleanupSWFs = function() {
	if (window.opera || !document.all) return;
	var objects = document.getElementsByTagName("OBJECT");
	for (var i=0; i < objects.length; i++) {
		objects[i].style.display = 'none';
		for (var x in objects[i]) {
			if (typeof objects[i][x] == 'function') {
				objects[i][x] = function(){};
			}
		}
	}
}
// Fixes bug in fp9
infosoftglobal.FusionChartsUtil.prepUnload = function() {
	__flash_unloadHandler = function(){};
	__flash_savedUnloadHandler = function(){};
	if (typeof window.onunload == 'function') {
		var oldUnload = window.onunload;
		window.onunload = function() {
			infosoftglobal.FusionChartsUtil.cleanupSWFs();
			oldUnload();
		}
	} else {
		window.onunload = infosoftglobal.FusionChartsUtil.cleanupSWFs;
	}
}
if (typeof window.onbeforeunload == 'function') {
	var oldBeforeUnload = window.onbeforeunload;
	window.onbeforeunload = function() {
		infosoftglobal.FusionChartsUtil.prepUnload();
		oldBeforeUnload();
	}
} else {
	window.onbeforeunload = infosoftglobal.FusionChartsUtil.prepUnload;
}

/* Add Array.push if needed (ie5) */
if (Array.prototype.push == null) { Array.prototype.push = function(item) { this[this.length] = item; return this.length; }}

/* Function to return Flash Object from ID */
infosoftglobal.FusionChartsUtil.getChartObject = function(id)
{
  if (window.document[id]) {
      return window.document[id];
  }
  if (navigator.appName.indexOf("Microsoft Internet")==-1) {
    if (document.embeds && document.embeds[id])
      return document.embeds[id]; 
  } else {
    return document.getElementById(id);
  }
}
/* Aliases for easy usage */
var getChartFromId = infosoftglobal.FusionChartsUtil.getChartObject;
var FusionCharts = infosoftglobal.FusionCharts;

;

// Stuff for our contextmenus (original file was patched&edited for PRTG)


	/**************************************************/
	/** Contextmenu	for sensors **/
	/**************************************************/

	var prtgbindings = 
	        {
		        "sensordetail" : function(t) { window.top.location.href = "/sensor.htm?id="+t.attr('id');  },
		        "sensoredit"   : function(t) { window.top.location.href = "/sensor.htm?id="+t.attr('id')+"&gototab=9"; },
		        "sensorgraph0" : function(t) { window.top.location.href = "/sensor.htm?id="+t.attr('id')+"&gototab=2";},
		        "sensorgraph1" : function(t) { window.top.location.href = "/sensor.htm?id="+t.attr('id')+"&gototab=3";},
		        "sensorgraph2" : function(t) { window.top.location.href = "/sensor.htm?id="+t.attr('id')+"&gototab=4";},
		        "sensorgraph3" : function(t) { window.top.location.href = "/sensor.htm?id="+t.attr('id')+"&gototab=5";},
		        "sensorclone" : function(t) { window.top.location.href = "/duplicatesensor.htm?id="+t.attr('id');},
		        "sensoracknowledge" : function(t) { acknowledgeError(t.attr('id'));},
		        "sensorhistoric" : function(t) { window.top.location.href =  "/sensor.htm?id="+t.attr('id')+"&gototab=7";},
	
	/**************************************************/
	/** Contextmenu	for devices **/
	/**************************************************/

		        "devicedetail"    : function(t) { window.top.location.href = "/device.htm?id="+t.attr('id'); },
		        "deviceaddsensor" : function(t) { window.top.location.href = "/addsensor.htm?id="+t.attr('id'); },
		        "deviceedit"      : function(t) { window.top.location.href = "/device.htm?id="+t.attr('id')+"&gototab=7"; },
		        "devicegraph1"    : function(t) { window.top.location.href = "/device.htm?id="+t.attr('id')+"&gototab=2"; },
		        "devicegraph2"    : function(t) {window.top.location.href = "/device.htm?id="+t.attr('id')+"&gototab=3"; },
		        "devicegraph3"    : function(t) {window.top.location.href = "/device.htm?id="+t.attr('id')+"&gototab=4"; },
		        "devicediscover"     : function(t) { discoverObjectNow(t.attr('id'));},
		        "deviceclone"    : function(t) {window.top.location.href = "/duplicatedevice.htm?id="+t.attr('id'); },
		        "devicemove"    : function(t) {window.top.location.href = "/moveobject.htm?id="+t.attr('id'); },
		        "devicerdp"       : function(t) {openRDPWindow(t.attr('id'),"http");},
		        "openvnc"       : function(t) {openVNCWindow(t.attr('id'),"http");},
		        "openssh"       : function(t) {openSSHWindow(t.attr('id'),"http");},
		        "opentelnet"       : function(t) {openTelnetWindow(t.attr('id'),"http");},
		        "openhttp"       : function(t) {openWindow(t.attr('id'),"http");return false;},
		        "openhttps"       : function(t) {openWindow(t.attr('id'),"https");},
		        "serviceurl"       : function(t) {openServiceURLWindow(t.attr('id'));},
		        "openftp"       : function(t) {openWindow(t.attr('id'),"ftp");},
		        "devicetracert"   : function(t) {window.top.location.href = "/traceroute.htm?id="+t.attr('id'); }  ,    
		        "devicecreatetemplate"   : function(t) {window.top.location.href = "/createtemplate.htm?id="+t.attr('id'); }  ,    
	
	/**************************************************/
	/** Contextmenu	for Groups  **/
	/**************************************************/

		        "groupdetail"    : function(t) { window.top.location.href = "/group.htm?id="+t.attr('id');},
		        "groupadddevice" : function(t) { window.top.location.href = "/adddevice.htm?id="+t.attr('id');},
		        "groupaddgroup"  : function(t) { window.top.location.href = "/addgroup.htm?id="+t.attr('id');},
		        "groupaddautogroup"  : function(t) { window.top.location.href = "/addautodiscovery.htm?id="+t.attr('id');},
		        "groupedit"      : function(t) { window.top.location.href = "/group.htm?id="+t.attr('id')+"&gototab=7";},
		        "groupgraph1"    : function(t) { window.top.location.href = "/group.htm?id="+t.attr('id')+"&gototab=2";},
		        "groupgraph2"    : function(t) { window.top.location.href = "/group.htm?id="+t.attr('id')+"&gototab=3";},
		        "groupgraph3"    : function(t) { window.top.location.href = "/group.htm?id="+t.attr('id')+"&gototab=4";},
		        "groupdiscover"     : function(t) { discoverObjectNow(t.attr('id'));},
		        "groupclone"    : function(t) {window.top.location.href = "/duplicategroup.htm?id="+t.attr('id'); },
		        "groupmove"    : function(t) { window.top.location.href = "/moveobject.htm?id="+t.attr('id');}      ,
		        "grouparrange"    : function(t) { window.top.location.href = "/devicesorter.htm?id="+t.attr('id');}      ,

	/**************************************************/
	/** Contextmenu	for the root group  **/
	/**************************************************/

		        "rootgroupdetail"    : function(t) { window.top.location.href = "/group.htm?id="+t.attr('id');},
		        "rootgroupedit"      : function(t) { window.top.location.href = "/group.htm?id="+t.attr('id')+"&gototab=7";},
		        "rootgroupgraph1"    : function(t) { window.top.location.href = "/group.htm?id="+t.attr('id')+"&gototab=2";},
		        "rootgroupgraph2"    : function(t) { window.top.location.href = "/group.htm?id="+t.attr('id')+"&gototab=3";},
		        "rootgroupgraph3"    : function(t) { window.top.location.href = "/group.htm?id="+t.attr('id')+"&gototab=4";},

	/**************************************************/
	/** Contextmenu	for Probes  **/
	/**************************************************/
	
		        "probedetail"    : function(t) { window.top.location.href = "/probenode.htm?id="+t.attr('id');},
		        "probeadddevice" : function(t) { window.top.location.href = "/adddevice.htm?id="+t.attr('id');},
		        "probeaddgroup"  : function(t) { window.top.location.href = "/addgroup.htm?id="+t.attr('id');},
		        "probeaddautogroup"  : function(t) { window.top.location.href = "/addautodiscovery.htm?id="+t.attr('id');},
		        "probeedit"      : function(t) { window.top.location.href = "/probenode.htm?id="+t.attr('id')+"&gototab=7";},
		        "probegraph1"    : function(t) { window.top.location.href = "/probenode.htm?id="+t.attr('id')+"&gototab=2";},
		        "probegraph2"    : function(t) { window.top.location.href = "/probenode.htm?id="+t.attr('id')+"&gototab=3";},
		        "probegraph3"    : function(t) { window.top.location.href = "/probenode.htm?id="+t.attr('id')+"&gototab=4";},

	/**************************************************/
	/** Contextmenu	for Moving Objects  **/
	/**************************************************/
		        
		        "movetop"  : function(t) { setObjectPosition(t.attr('id'),"top"); },
		        "moveup"  : function(t) { setObjectPosition(t.attr('id'),"up"); },
		        "movedown"  : function(t) { setObjectPosition(t.attr('id'),"down"); },
		        "movebottom"  : function(t) { setObjectPosition(t.attr('id'),"bottom"); },
	/**************************************************/
	/** other Contextmenuentries **/
	/**************************************************/
		        "prio1"  : function(t) { setObjectPriority(t.attr('id'),"1"); },
		        "prio2"  : function(t) { setObjectPriority(t.attr('id'),"2"); },
		        "prio3"  : function(t) { setObjectPriority(t.attr('id'),"3"); },
		        "prio4"  : function(t) { setObjectPriority(t.attr('id'),"4"); },
		        "prio5"  : function(t) { setObjectPriority(t.attr('id'),"5"); },
		        "instantreport"  : function(t) { window.top.location.href = "/addreport.htm?id=new&addid="+t.attr('id'); },
		        "addfavorite"  : function(t) { faveObject(t.attr('id'),"toggle"); },
		        "compare" : function(t) { window.top.location.href = "/compare.htm?id="+t.attr('id');}      ,
		        "check"  : function(t) { scanObjectNow(t.attr('id')); },
		        "foldauto"  : function(t) { setObjectCollapse(t.attr('id'),"0") },
		        "foldin"  : function(t) { setObjectCollapse(t.attr('id'),"2") },
		        "foldout"  : function(t) { setObjectCollapse(t.attr('id'),"1") },
		        "pause"  : function(t) { pauseObject(t.attr('id'),"toggle") },
		        "pausenow"  : function(t) { pauseObject(t.attr('id'),"0") },
		        "resumenow"  : function(t) { pauseObject(t.attr('id'),"1") },
		        "pausefor5"  : function(t) { pauseObjectFor(t.attr('id'),5) },
		        "pausefor15"  : function(t) { pauseObjectFor(t.attr('id'),15) },
		        "pausefor60"  : function(t) { pauseObjectFor(t.attr('id'),60) },
		        "pausefor180"  : function(t) { pauseObjectFor(t.attr('id'),180) },
		        "pausefor1440"  : function(t) { pauseObjectFor(t.attr('id'),1440) },
		        "pauseanderror"  : function(t) { simulateObject(t.attr('id'),"1") },
		        "dodelete" : function(t) { window.top.location.href = "/deleteobject.htm?id="+t.attr('id');}      ,
		        
	/**************************************************/
	/** Contextmenu	for Others**/
	/**************************************************/

		        "refresh"    : function(t) { refreshNow();return false;},
		        "makehomepage"    : function(t) {makeThisMyHomepage();return (false);},
		        "logout"    : function(t) { window.top.location.href='/index.htm?logout=1';}

	        };
	
  
function makeThisMyHomepage()
{
	window.top.location.href='/makehome?hash='+encodeURI(window.location.hash.substr(1,100))+'&url='+encodeURIComponent(window.location.pathname+''+window.location.search);
}
	        
	        
function InstallContextMenu()
{
	if (showTiming) {var start=new Date();}
	
	$.contextMenu.defaults({

    menuStyle : { },

    bindings : prtgbindings,
  	    
	onContextMenu: function(e) 
	  	    {
	  	        var myresult=false;
	  	        var myobject=$(e.target);
	  	        
	  	        if (!myobject.attr('id'))    //look downward for the next "a" object that has an id
	  	        {
	  	        	if (myobject.is('td'))
	  	        	{
	  	        		myobject=myobject.children("a").eq(0);
	  	        	}
	  	        };

	  	        if (myobject.attr('class'))    
	  	        {
	  	    		if (myobject.is(".rootgroupmenu")) { myresult=true;}
	  	    		else
	  	    		if (myobject.is(".groupmenu")) { myresult=true;}
	  	    		else
	  	    		if (myobject.is(".sensormenu")) { myresult=true;}
	  	    		else
	  	    		if (myobject.is(".sensr")) { myresult=true;}
	  	    		else
        			if (myobject.is(".devicemenu")) { myresult=true;}
        			else
        			if (myobject.is(".probemenu")) { myresult=true;}
        			else
        			if (myobject.is(".probenodemenu")) { myresult=true;}
        			else
        			if (myobject.is(".tabs-container")) { myresult=true;}
        			else        			
        			if (myobject.is(".systemmenu")) { myresult=true;};

	  	        }
	  	        
	  	        if (!myresult) //if no other menu should be shown, let's show the system menu, but only for specific DOM object types
	  	        {
	  	    		if (myobject.is("div")) { myresult=true;}
	  	    		if (myobject.is("td")) { myresult=true;}
	  	    		if (myobject.is("p")) { myresult=true;}
	  	    		if (myobject.is("h1")) { myresult=true;}
	  	    		if (myobject.is("h2")) { myresult=true;}
	  	    		if (myobject.is("h3")) { myresult=true;}
	  	    		if (myobject.is("body")) { myresult=true;}
	  	    		
	  	    		if ($(myobject).length==0) { myresult=true;} //user clicked into an "undefined" area
	  	        	
	  	        }
	  	        
	  	        if ($(myobject).parents().filter("#form_devicesort").length>0) //no contextmenu on device/group sort page
	  	        {
	  	        	myresult=false;
	  	        }
        		return myresult;
	  	    	
	  	    },
   onShowMenu: function(e, menu) 
	  	    {
				$('li', menu).hide();
	  	        var myobject=$(e.target);
	  	        
	  	        if (!myobject.attr('id'))    //look downward for the next "a" object that has an id
	  	        {
	  	        	if (myobject.is('td'))
	  	        	{
	  	        	myobject=myobject.children("a").eq(0);
	  	        	}
	  	        };
	  	        

	  	        if (myobject.attr('class'))   
	  	        {
		  	    	if (myobject.is(".rootgroupmenu")) 
		  	    		{ 
		  	    			$('li.rootgroup', menu).show();
		  	    		}
		  	    	else
		  	    	if (myobject.is(".probemenu") | myobject.is(".probenodemenu")) 
		  	    		{ 
		  	    			$('li.probe', menu).show();
		  	    		}
		  	    	else
		  	    	if (myobject.is(".groupmenu")) 
		  	    		{ 
		  	    			$('li.group', menu).show();
		  	    		}
		  	    	else
		  	    	if (myobject.is(".sensormenu")) 
		  	    		{ 
		  	    			$('li.sensor', menu).show();
				  	    	if (!(myobject.is(".sensr")) &!(myobject.is(".sr")) & !(myobject.is(".senso"))& !(myobject.is(".so"))) 
				  	    		{ 
				  	    			$('li.sensorred', menu).hide();
				  	    		};
		  	    		}
		  	    	else
	  		    	if (myobject.is(".devicemenu")) 
	  		    		{ 
	  		    			$('li.device', menu).show();
	  		    		}
	  		    	else
	  		    	{$('li.system', menu).show();}

	  	        }
  		    	else
  		    	{$('li.system', menu).show();}
  		    	
  		    	if (userIsReadOnly) {$('li.hideForReadonlyUser', menu).hide();}
  		    	
  		    	
		        return menu;
		     }


    });	
	
	$(document).contextMenu("PRTGContextMenu",{menuStyle : {},    bindings : prtgbindings});    
	  	
	$(".menuleft").contextMenu("PRTGContextMenu",{menuStyle : {bindToEvent:"click"},    bindings : prtgbindings});
	$(".menuleft").contextMenu("PRTGContextMenu",{menuStyle : {bindToEvent:"mouseover"},    bindings : prtgbindings});
	
	if (showTiming) {endTiming(start,'installcontextmenu()',4);start=null;}
}
	        

var contextmenuHTML="<div style='display:none' class='contextMenu' id='PRTGContextMenu'>"+
      "<ul>"+
        "<li class='system menuhead' id=''><b>PRTG System Menu</b></li>"+
        "<li class='system' id='refresh'>Refresh</li>"+
        "<li class='system hideForReadonlyUser makemyhomelink' id='makehomepage'>Make my Homepage</li>"+
        "<li class='system separator' id='logout'>Log Out</li>"+
        "<li class='system separator' id='' style='font-size:9px;color:#888'>Hold CTRL for browser menu</li>"+

        "<li class='sensor menuhead' id=''><b>Sensor Menu</b></li>"+
        "<li class='sensor' id='sensordetail'>Details&hellip;</li>"+
        "<li class='sensor' id='sensoredit'>Settings&hellip;</li>"+

        "<li class='device menuhead' id=''><b>Device Menu</b></li>"+
        "<li class='device' id='devicedetail'>Details&hellip;</li>"+
        "<li class='device' id='deviceedit'>Settings&hellip;</li>"+
        "<li class='device hideForReadonlyUser separator' id='deviceaddsensor'>Add Sensor&hellip;</li>"+
        "<li class='device hideForReadonlyUser' id='devicediscover'>Run Auto-Discovery</li>"+
        "<li class='device hideForReadonlyUser' id='devicecreatetemplate'>Create Device Template&hellip;</li>"+

        
        "<li class='group menuhead' id=''><b>Group Menu</b></li>"+
        "<li class='group' id='groupdetail'>Details&hellip;</li>"+
        "<li class='group' id='groupedit'>Settings&hellip;</li>"+
        "<li class='group hideForReadonlyUser separator' id='groupaddgroup'>Add Group&hellip;</li>"+
        "<li class='group hideForReadonlyUser' id='groupaddautogroup'>Add Auto-Discovery Group&hellip;</li>"+
        "<li class='group hideForReadonlyUser' id='groupadddevice'>Add Device&hellip;</li>"+
        "<li class='group hideForReadonlyUser' id='groupdiscover'>Run Auto-Discovery</li>"+

        "<li class='rootgroup menuhead' id=''><b>Group Menu</b></li>"+
        "<li class='rootgroup' id='rootgroupdetail'>Details&hellip;</li>"+
        "<li class='rootgroup' id='rootgroupedit'>Settings&hellip;</li>"+


        "<li class='probe menuhead' id=''><b>Probe Menu</b></li>"+
        "<li class='probe' id='probedetail'>Details&hellip;</li>"+
        "<li class='probe' id='probeedit'>Settings&hellip;</li>"+
        "<li class='probe hideForReadonlyUser separator' id='probeaddgroup'>Add Group&hellip;</li>"+
        "<li class='probe hideForReadonlyUser' id='probeaddautogroup'>Add Auto-Discovery Group&hellip;</li>"+
        "<li class='probe hideForReadonlyUser' id='probeadddevice'>Add Device&hellip;</li>"+

        
        "<li class='probe hideForReadonlyUser rootgroup sensor device group separator' id='check'>Check Now</li>"+
        "<li class='hideForReadonlyUser sensor sensorred' id='sensoracknowledge'>Acknowledge Alarm...</li>"+

        
        "<li class='probe hideForReadonlyUser group device sensor ' id='dodelete'>Delete&hellip;</li>"+

        "<li class='device hideForReadonlyUser' id='deviceclone'>Clone&hellip;</li>"+
        "<li class='group hideForReadonlyUser' id='groupclone'>Clone&hellip;</li>"+
        "<li class='sensor hideForReadonlyUser' id='sensorclone'>Clone&hellip;</li>"+
        
        "<li class='sensor hideForReadonlyUser device group probe' id=''><div>&raquo;</div>Pause"+
        "<ul>"+
	        "<li class='sensor hideForReadonlyUser device group probe' id='pausenow'>Indefinitely</li>"+
	        "<li class='sensor hideForReadonlyUser device group probe' id='resumenow'>Resume</li>"+
	        "<li class='sensor hideForReadonlyUser device group probe separator' id='pausefor5'>For 5 minutes</li>"+
	        "<li class='sensor hideForReadonlyUser device group probe' id='pausefor15'>For 15 minutes</li>"+
	        "<li class='sensor hideForReadonlyUser device group probe' id='pausefor60'>For 1 hour</li>"+
	        "<li class='sensor hideForReadonlyUser device group probe' id='pausefor180'>For 3 hours</li>"+
	        "<li class='sensor hideForReadonlyUser device group probe' id='pausefor1440'>For 1 day</li>"+
	        "<li class='sensor hideForReadonlyUser device group probe separator' id='pauseanderror'>Set sensor to error</li>"+
	    "</ul></li>"+
        "<li class='device hideForReadonlyUser group probe' id=''><div>&raquo;</div>Fold"+
        "<ul>"+
	        "<li class='device hideForReadonlyUser group probe' id='foldauto'>Auto-Fold</li>"+
	        "<li class='device hideForReadonlyUser group probe separator' id='foldin'>Fold</li>"+
	        "<li class='device hideForReadonlyUser group probe' id='foldout'>Unfold</li>"+
	    "</ul></li>"+
        
        
        "<li class='sensor hideForReadonlyUser device group probe' id=''><div>&raquo;</div>Move"+
        "<ul>"+
	        "<li class='group hideForReadonlyUser' id='groupmove'>To Other Group&hellip;</li>"+
	        "<li class='device hideForReadonlyUser' id='devicemove'>To Other Group&hellip;</li>"+
	        "<li class='sensor hideForReadonlyUser separator device group probe' id='movetop'>Top</li>"+
	        "<li class='sensor hideForReadonlyUser device group probe' id='moveup'>Up</li>"+
	        "<li class='sensor hideForReadonlyUser device group probe' id='movedown'>Down</li>"+
	        "<li class='sensor hideForReadonlyUser device group probe' id='movebottom'>Bottom</li>"+
	        "<li class='group probe hideForReadonlyUser  separator' id='grouparrange'>Arrange Groups & Devices&hellip;</li>"+
        "</ul></li>"+
        
        "<li class='device hideForReadonlyUser group sensor probe separator' id=''><div>&raquo;</div>Priority/Favorite"+
        "<ul>"+
        	"<li class='device hideForReadonlyUser group sensor probe' id='prio5'><span class='favstar'/><span class='favstar'/><span class='favstar'/><span class='favstar'/><span class='favstar'/></li>"+
        	"<li class='device hideForReadonlyUser group sensor probe' id='prio4'><span class='favstar'/><span class='favstar'/><span class='favstar'/><span class='favstar'/><span class='star'/></li>"+
        	"<li class='device hideForReadonlyUser group sensor probe' id='prio3'><span class='favstar'/><span class='favstar'/><span class='favstar'/><span class='star'/><span class='star'/></li>"+
        	"<li class='device hideForReadonlyUser group sensor probe' id='prio2'><span class='favstar'/><span class='favstar'/><span class='star'/><span class='star'/><span class='star'/></li>"+
        	"<li class='device hideForReadonlyUser group sensor probe' id='prio1'><span class='favstar'/><span class='star'/><span class='star'/><span class='star'/><span class='star'/></li>"+
	        "<li class='device hideForReadonlyUser sensor separator' id='addfavorite'>Toggle Favorite</li>"+
        "</ul></li>"+
        
        "<li class='group rootgroup probe device sensor' id=''><div>&raquo;</div>Historic Data"+
        "<ul>"+
	        "<li class='group' id='groupgraph1'>Last 2 days&hellip;</li>"+
	        "<li class='group' id='groupgraph2'>Last 30 days&hellip;</li>"+
	        "<li class='group' id='groupgraph3'>Last 365 days&hellip;</li>"+
        	"<li class='rootgroup' id='rootgroupgraph1'>2 days&hellip;</li>"+
        	"<li class='rootgroup' id='rootgroupgraph2'>30 days&hellip;</li>"+
        	"<li class='rootgroup' id='rootgroupgraph3'>365 days&hellip;</li>"+
	        "<li class='probe' id='probegraph1'>Last 2 days&hellip;</li>"+
   		    "<li class='probe' id='probegraph2'>Last 30 days&hellip;</li>"+
        	"<li class='probe' id='probegraph3'>Last 365 days&hellip;</li>"+
	        "<li class='device' id='devicegraph1'>Last 2 days&hellip;</li>"+
        	"<li class='device' id='devicegraph2'>Last 30 days&hellip;</li>"+
        	"<li class='device' id='devicegraph3'>Last 365 days&hellip;</li>"+
	        "<li class='sensor' id='sensorgraph0'>Live Data&hellip;</li>"+
    	    "<li class='sensor' id='sensorgraph1'>Last 2 days&hellip;</li>"+
	        "<li class='sensor' id='sensorgraph2'>Last 30 days&hellip;</li>"+
    	    "<li class='sensor' id='sensorgraph3'>Last 365 days&hellip;</li>"+
        	"<li class='sensor device probe rootgroup group separator' id='compare'>Compare&hellip;</li>"+
	        "<li class='sensor separator' id='sensorhistoric'>View Historic Data&hellip;</li>"+
        	"<li class='sensor device hideForReadonlyUser rootgroup group probe' id='instantreport'>Create Report&hellip;</li>"+
        "</ul></li>"+


        "<li class='device hideForReadonlyUser' id=''><div>&raquo;</div>Device Tools "+
        "<ul>"+
	        "<li class='device hideForReadonlyUser' id='serviceurl'>Go To Service URL</li>"+
    	    "<li class='device hideForReadonlyUser separator' id='openhttp'>New window with HTTP</li>"+
    	    "<li class='device hideForReadonlyUser' id='openhttps'>New window with HTTPS</li>"+
    	    "<li class='device hideForReadonlyUser' id='openftp'>New window with FTP</li>"+
	        "<li class='device hideForReadonlyUser separator' id='devicerdp'>Remote Desktop</li>"+
    	    "<li class='device hideForReadonlyUser' id='devicetracert'>Traceroute</li>"+
        "</ul></li>"+
        
        //"</ul>"+
        "</div>";
;

// Stuff for our various Ajax triggered actions on objects

function getMultiIDs(formid) //gets the objects IDs from a table for all MultiEdit functions
{
	var myids="";
	$("#"+formid).find(".tablemultiselectcheckbox").each(
		function(num)
		{
		 	if (parseInt($(this).attr("value"))>=0)
		 	{
			 	if ($(this).attr("checked")===true)
			 	{
			 		myids=myids+$(this).attr("value")+",";
			 	}
			}
		});
	return myids;
}

function getFirstID(formid) 
{
	var firstid="";
	$("#"+formid).find(".tablemultiselectcheckbox").each(
		function(num)
		{
		 	if (parseInt($(this).attr("value"))>=0)
		 	{
			 	if ($(this).attr("checked")===true)
			 	{
			 		firstid=$(this).attr("value");
			 		return false;
			 	}
			}
		});
	return firstid;
}


function doMultiStuff(formid,apiurl,urltrailer)
{
	showWorkingDialog();
	$("#"+formid).removeClass("refreshable"); // avoid automatic refreshing
	$.ajax({	url: "/api/"+apiurl+"?id="+getMultiIDs(formid)+"&"+urltrailer,
				data:"",
				async:true,
				type: "GET",
 				success:function(html) 
 				{
					$("#"+formid).addClass("refreshable"); // reenable automatic refreshing
					setTimeout("hideWorkingDialog()",1000);
					reloadTable(formid);
 				}
       			});
}

function showMapRotation(formid)
{
	location.replace("/mapshow.htm?id="+getFirstID(formid)+"&ids="+getMultiIDs(formid));
}


function multiEdit(formid)
{
    var myids="";
	$("#"+formid).find(".tablemultiselectcheckbox").each(
		function(num)
		{
		 	if (parseInt($(this).attr("value"))>=0)
		 	{
			 	if ($(this).attr("checked")===true)
			 	{
			 		myids=myids+$(this).attr("value")+",";
			 	}
			}
		});
		
	window.top.location.href = "/multiedit.htm?id="+myids;
}

function multiEditInputAction(object)
{
  var myobj=$(object).parents("table").eq(0).find(".multieditactivecheckbox").eq(0);
  $(myobj).attr("checked",true);
  multiEditCheckboxAction(myobj);
}


function multiEditCheckboxAction(object)
{
	if ($(object).attr("checked")===true)
	{
		$(object).parents("table").eq(0).parent().removeClass("multiinactive").addClass("multiactive").find(".wiz3 input,.wiz3 select").attr("disabled",false);
	}
	else
	{
		$(object).parents("table").eq(0).parent().addClass("multiinactive").removeClass("multiactive").find(".wiz3 input,.wiz3 select").attr("disabled",true);
	}
}

function multiEditGroupCheckboxAction(object)
{
	if ($(object).attr("checked")===true)
	{
		$(object).parent().parent().removeClass("multiinactive").addClass("multiactive");
	}
	else
	{
		$(object).parent().parent().addClass("multiinactive").removeClass("multiactive");
	}

	
}


function openWindow(objid,action)
{
	var mywin=window.open("/openwindow.htm?id="+objid+"&action="+action,"PRTG_Window_"+objid+action,"width=600,height=500,resizable=yes,status=yes,menubar=yes,scrollbars=yes");
	mywin.focus();
}
function openServiceURLWindow(objid)
{
	var mywin=window.open("/gotoserviceurl.htm?id="+objid,"PRTG_Window_"+objid,"width=600,height=500,resizable=yes,status=yes,menubar=yes,scrollbars=yes");
	mywin.focus();
}
function openRDPWindow(objid,action)
{
	var mywin=window.open("/remotedesktop.htm?id="+objid,"PRTG_Window_"+objid+"rdp","width=840,height=650,resizable=yes,status=yes,menubar=no");
	mywin.focus();
}


// **********************************************
// Pause an Object
// **********************************************


function pauseObject(objid,action)
{
	$.ajax({	url: "/api/pause.htm?id="+objid+"&action="+action,
				data:"",
				type: "GET",
				success:function(html) 
				{	
					$("#pauser"+objid).parent().html(html);
					if (action==1) {scanObjectNow(objid);}
					else {refreshNow();};
				}
			});
	return false;
}

function pauseObjectFor(objid,minutes)
{
	$.ajax({	url: "/api/pauseobjectfor.htm?id="+objid+"&duration="+minutes,
				data:"",
				type: "GET",
				success:function(html) {	$("#pauser"+objid).parent().html(html);refreshNow(); }
			});
	return false;
}

function multiPause(formid,action)
{
	doMultiStuff(formid,"pause.htm","action="+action);
}
function multiPauseFor(formid,duration)
{
	doMultiStuff(formid,"pauseobjectfor.htm","duration="+duration);
}

// **********************************************
// Acknowledge Error
// **********************************************


function acknowledgeError(objectid)
{
	
	function submitByReturn(key) 
	{ 
		if (key.which == 13) { submitAcknowledgeData(); } 
	} 

	function submitAcknowledgeData()
	{
		hideDialogShadow();
		$(this).dialog("destroy"); 
		$.ajax({	
			    url: "/api/acknowledgealarm.htm",
				data:"id="+objectid+"&"+$("#acknowledgealarmform").find("input").serialize(),
				type: "POST",
				success:function(html) {refreshNow(); }
			});
		$("#acknowledgealarmform").remove();
	}
	$.ajax({	url: "/controls/acknowledgealarm.htm?id="+objectid,
				data:"",
				type: "GET",
				success:function(html) 
				{
					$(html).appendTo($("body"));
					showDialogShadow();
					$("#acknowledgealarmform").dialog(
						{ 
							closeOnEscape:false,
							draggable:false,
							resizable:false,
							height:100,
							width:550,
							zIndex:8999,
							buttons: { 
										"Cancel": function() { hideDialogShadow();$(this).dialog("destroy");$("#acknowledgealarmform").remove();},
										"OK": function() { submitAcknowledgeData();} 
									} 
						}
					);
					$("#acknowledgealarmform input").keypress(function(e){submitByReturn(e)});
					$("#reason").focus();
				}
			});
	
	
	
}
function multiAcknowledgeError(formid)
{
	function submitByReturn(key) 
	{ 
		if (key.which == 13) { submitAcknowledgeDataMulti(); } 
	} 

	function submitAcknowledgeDataMulti()
	{
		hideDialogShadow();
		$("#acknowledgealarmform").dialog("destroy");
		doMultiStuff(formid,"acknowledgealarm.htm",$("#acknowledgealarmform").find("input").serialize());
		$("#acknowledgealarmform").remove();
	}

	$.ajax({	url: "/controls/acknowledgealarm.htm?id="+getMultiIDs(formid),
				data:"",
				type: "GET",
				success:function(html) 
				{
					$(html).appendTo($("body"));
					showDialogShadow();
					$("#acknowledgealarmform").dialog(
						{ 
							closeOnEscape:false,
							draggable:false,
							resizable:false,
							height:100,
							width:550,
							zIndex:8999,
							buttons: { 
										"Cancel": function() { hideDialogShadow();$(this).dialog("destroy");$("#acknowledgealarmform").remove();},
										"OK": function() { submitAcknowledgeDataMulti();} 
									} 
						}
					);
					$("#acknowledgealarmform input").keypress(function(e){submitByReturn(e)});
					$("#reason").focus();
				}
			});
	
	
	
}


// **********************************************
// Simulate Error with a Sensor
// **********************************************

function simulateObject(objid,action)
{
	$.ajax({	url: "/api/simulate.htm?id="+objid+"&action="+action,
				data:"",
				type: "GET",
				success:function(html) {scanObjectNow(objid);$("#pauser"+objid).parent().html(html);refreshLater(10000); }
			});
	return false;
}

function multiSimulate(formid,action)
{
	doMultiStuff(formid,"simulate.htm","action="+action);
}


// **********************************************
// Fave an Object
// **********************************************


function faveObject(objid,action)
{
	$.ajax({	url: "/api/fave.htm?id="+objid+"&action="+action,
				data:"",
				type: "GET",
				success:function(html) { refreshNow(); }
			});
	return false;
}

function multiFave(formid,action)
{
	doMultiStuff(formid,"fave.htm","action="+action);
}


// **********************************************
// Test a notification
// **********************************************


function testNotification (objid)
{
	var text=$("#testNotification"+objid).html();
	$("#testNotification"+objid).append(" (Working...)").effect('pulsate',{},1000,function(){$('#testNotification'+objid).html(text);});
	$.ajax({	url: "/api/notificationtest.htm?id="+objid,
				data:"",
				type: "GET"//
			});
	return false;
}


// **********************************************
// Set position for an Object
// **********************************************


function setObjectPosition(objid,pos)
{
	$.ajax({	url: "/api/setposition.htm?id="+objid+"&newpos="+pos,
				data:"",
				type: "GET",
				success:function(html) { refreshNow(); }
			});
	return false;
}

function multiPosition(formid,pos)
{
	doMultiStuff(formid,"setposition.htm","newpos="+pos);
}

// **********************************************
// Change Collapse/Fold/Unfold Settings
// **********************************************


function setObjectCollapse(objid,fold)
{
	$.ajax({	url: "/api/foldobject.htm?id="+objid+"&fold="+fold, //x = 0: auto, x = 1: expand, x = 2: collapse
				data:"",
				type: "GET",
				success:function(html) { refreshNow(); }
			});
	return false;
}


// **********************************************
// Set priority for an Object
// **********************************************


function setObjectPriority(objid,prio)
{
	$.ajax({	url: "/api/setpriority.htm?id="+objid+"&prio="+prio,
				data:"",
				type: "GET",
				success:function(html) { refreshNow(); }
			});
	return false;
}


function multiPrio(formid,prio)
{
	doMultiStuff(formid,"setpriority.htm","prio="+prio);
}

// **********************************************
// Delete a SubObject
// **********************************************


function deleteMapObject(objid,subid)
{
	$(".map_objecttools").hide();
	$("div.map_edit div.map_object").dragOff().html("").fadeTo(200,0.1);
	$.ajax({	url: "/api/deletesubobject.htm?id="+objid+"&subid="+subid,
				data:"",
				type: "GET",
				success:function(html) { refreshNow(); }
			});
	return false;
}

function multiDelete(formid)
{
	function multiDeleteCallback()
	{
		doMultiStuff(formid,"deleteobject.htm","approve=1");
	}
	
	$("#"+formid).removeClass("refreshable"); // avoid automatic refreshing
	var html='<div id="multideletequestion">Are you sure you want to delete the selected objects?<br>This can not be undone!</div>'; 
	
	$(html).appendTo($("body"));
	showDialogShadow();
	$("#multideletequestion").dialog(
		{ 
			closeOnEscape: false,
			draggable:false,
			resizable:false,
			height:100,
			title:"",
			width:250,
			title:"Delete objects?",
			zIndex: 8999,
			buttons: { 
						"No": function() { hideDialogShadow();$(this).dialog("destroy");$("#multideletequestion").remove();} ,
						"Yes": function() { hideDialogShadow();$(this).dialog("destroy");$("#multideletequestion").remove();multiDeleteCallback(true);} 
					} 
		}
	);

}



// **********************************************
// Scan an Object immediately
// **********************************************

function scanObjectNow(objid)
{
	$.ajax({	url: "/api/scannow.htm?id="+objid,
				data:"",
				type: "GET",
				success:function(html) { refreshLater(3000); }
		});
	return false;
}

function multiScan(formid)
{
	doMultiStuff(formid,"scannow.htm","");
	refreshLater(3000);
}

// **********************************************
// Discover an Object immediately
// **********************************************

function discoverObjectNow(objid)
{
	$.ajax({	url: "/api/discovernow.htm?id="+objid,
				data:"",
				type: "GET",
				success:function(html) { refreshLater(3000); }
		});
	return false;
}

// **********************************************
// Acknowledge a Todo
// **********************************************

function acknowledgeToDo(linkintable,id)
{
	$(linkintable).parents("tr").eq(0).fadeTo(400,0.1,function(){$(linkintable).parents("tr").eq(0).remove();});
	$.ajax({	url: "/api/acktodo.htm?id="+id,
				data:"",
				type: "GET",
				success:function(html) { }
		});
	return false;
}

// **********************************************
// Write Probe Stats
// **********************************************


function writeProbeStatus ()
{
	var text=$("#writeprobestatus").html();
	$("#writeprobestatus").append(" (Working...)");
	$.ajax({	url: "/api/writeprobestatus.htm",
				data:"",
				type: "GET",
				success:function(html) {setTimeout("$('#writeprobestatus').html('"+text+"');",3000);   }
			});
	return false;
}

function restartProbes (obj)
{
	var text=$(obj).html();
	$(obj).append(" (Working...)");
	$.ajax({	url: "/api/restartprobes.htm",
				data:"",
				type: "GET",
				success:function(html) {setTimeout("$('#restartprobes').html('"+text+"');",3000);   }
			});
	return false;
}
function restartProbe(obj,id)
{
	$(obj).append(" (Working...)");
	$.ajax({	url: "/api/restartprobes.htm?id="+id,
				data:"",
				type: "GET",
				success:function(html) {refreshLater(2000);}
			});
	return false;
}

function createDatabaseSnapshot(obj)
{
	$(obj).after("<br>Database snapshot is being created in folder 'Configuration Auto-Backups'. This can take 10-100 seconds.");
	$.ajax({	url: "/api/savenow.htm",
				data:"",
				type: "GET",
				success:function(html) {}
			});
	return false;
}

// **********************************************
// Write Core Stats
// **********************************************


function writeCoreStatus ()
{
	var text=$("#writecorestatus").html();
	$("#writecorestatus").append(" (Working...)");
	$.ajax({	url: "/api/writecorestatus.htm",
				data:"",
				type: "GET",
				success:function(html) {setTimeout("$('#writecorestatus').html('"+text+"');",3000);   }
			});
	return false;
}





// **********************************************
// Add some HTML from an AJAX call to an object
// **********************************************

function ajaxAppendHTMLToObject(myobject,myurl)
{
	$.ajax({	url: myurl,
				data:"",
				type: "GET",
				success:function(html) { 
				$("#"+myobject).append(html);
				},
				error:function(xmlobject,status) 
				{ 
					if (!connectionlost) {$("#"+myobject).append(createConnectionErrorMessage("A19",status,xmlobject,"URL:"+myurl,""));}
				}}	);
	return false;
	
	
}





// *******************************************
// Stuff we need for the optional context help
// *******************************************
function hideContextHelp()
{
	$('.contexthelpbox').slideUp("slow");
	contexthelpIsEnabled="false";
	$.ajax({	url: "/api/setshowhelpstatus.htm?action=0&page="+encodeURIComponent(window.location.pathname.substr(1,100)),
				data:"",
				type: "GET"
			});

	return false;
}
function showContextHelp()
{
	$('.contexthelpbox').slideDown("slow");
	contexthelpIsEnabled="true";
	$.ajax({	url: "/api/setshowhelpstatus.htm?action=1&page=all",
				data:"",
				type: "GET"
			});
	return false;
}

 

// **********************************************
// Tree Layout Switching Tools
// **********************************************

function switchTreeLayout(newclass)
{
	function checkclass(a)
	{
		if (newclass==a) 
		{
			$('#sensortreebox').addClass(a)
		}
		else
		{
			$('#sensortreebox').removeClass(a)
			
		}
	}

	checkclass('sensortreexl');
	checkclass('sensortreesmall');
	checkclass('sensortreel');
	
	var action=0;
	
	if (newclass=="sensortreesmall") {action=1};
	if (newclass=="l") {action=2};
	if (newclass=="sensortreel") {action=3};
	if (newclass=="sensortreexl") {action=4};
	$.ajax({	url: "/api/setviewsize.htm?action="+action,
				data:"",
				type: "GET"
		});
	
}



/**************************************************/
/** Show Multi Edit Toolbar in table**/
/**************************************************/

function installMultiEditEnabler(parentobject)
{
	$(".tablemultiselectcheckbox").live("click",
	 function()
	 {
	 	if ($(this).attr("checked")===true)
	 	{
 		  	var a="<div><small>Note: Automatic refresh for this table is disabled for the multi-edit menu (<a href='#' onclick='refreshMultiEditTable();return(false)'>Refresh Now</a>)</small></div>";
 		  	var myform=$(this).parents("form").eq(0);
	        $(myform).find(".tablemultiselectcheckbox").parent().css("background-color","#C5F5CC");
	 		if ($(myform).hasClass("refreshable")) {$(myform).find(".tablemenu").parents("div").eq(0).append(a);}
	 		$(myform).removeClass("refreshable"); //disable refresh for multi edit
	 		
	 		$(this).parents("tr.odd,tr.even").eq(0).addClass("multiselected");
	 		
	 		$(myform).find(".tablemenu").css("display","block");
 		  	$(myform).find(".tablemenu").parents("div").eq(0).css("overflow","visible"); //allow the menu to overflow the table sourrounding DIV
            $(myform).find(".tablemultiselectcheckboxunbind").unbind();                         // Uninstall Handler
	 		;
	 	}
	 	else
	 	{
	 		$(this).parents("tr.odd,tr.even").eq(0).removeClass("multiselected");
	 	}
	 }
	);
};

function refreshMultiEditTable()
{
  $('.tablemenu').parents('form').eq(0).addClass("refreshable");	
  refreshLater(10);
}

function multiSelectAllClick(obj,state)
{
	$("#"+obj).find('.tablemultiselectcheckbox').each(
	function(i)
	{
		$(this).attr('checked',state);
	 	if ($(this).attr("checked")===true)
	 	{
	 		$(this).parents("tr.odd,tr.even").eq(0).addClass("multiselected");
	 	}
	 	else
	 	{
	 		$(this).parents("tr.odd,tr.even").eq(0).removeClass("multiselected");
	 	}
		
	});
}
;

// Stuff for our client timer
/**************************************************/
/** OctopusTimer: Everything we need to do in the browser: */
/** Check for Connection, check Sensor Status Changes (message on top) and do page refreshes at an interval */
/** runs every few seconds */
/**************************************************/

function octopusTimer()
{
	
	if ((!working)&(!connectionlost)&(!endallscripts))
	{
		elapsedTime=timeInSeconds()-timerStart;
		working=true;
		if (newMiniToolsObject!=0) 
		{
			if (timeInSeconds()-MiniToolsPopupdelay>=0) {delayedMiniToolsInstall()};
		}
		else
		if (newMiniToolsObject===0) 
		{
			{$("#objectminitools").remove();};
		};
		if (elapsedTime>autoRefreshInterval) 
		{
				if (autoRefreshType!="none") 
					{
						dosparklines=false;
						refreshNow();
					}
		}
		else
		if ((elapsedTime>(autoRefreshInterval-10)) & !connectionTestRequestSent)
		{
			performConnectionCheck();
		};
		
		if ((!endallscripts) & ((autoRefreshType=="elements") | autoRefreshType=="wholepage"))

		{
			elapsedTime=timeInSeconds()-timerStart; //elapsedtime could have changed by refresh
			if (Math.floor(autoRefreshInterval-elapsedTime>0)) {$("#refreshcountdown").html("Refresh in&nbsp;"
			              +Math.floor(autoRefreshInterval-elapsedTime)+"&nbsp;sec")};
		}
		else
		{
			$("#refreshcountdown").html("");
		}
		working=false;
		if (dosparklines) {renderSparklines();};
	}
};


function installOctopusTimer()
{
  $.ajaxSetup( 
  	{
  		timeout:60000 // 60 seconds timeout for HTTP requests via JQuery
  	} ); 
  working=false;
  octopusTimer();
  timerActive=setInterval( "octopusTimer()", 200 );

};

/*****************************************/
/* stuff related to the status messages on top*/
/*****************************************/

function GetEventCounts()
{
	if (showTiming) {var start=new Date();}
	$.ajax({	
		url: "/api/getstatus.htm",
		data: "",
		type: "GET",
		success:function(data) 
		{
			var json=eval("(" + data + ")");
			$("#footerclock").html(json.Clock);
			showAlerts(json.Alarms,json.NewAlarms,json.NewMessages,json.NewToDos,json.ActivationStatusMessage,json.BackgroundTasks); 
			
	  		if ((json.Alarms>0) & ((playAlarmSounds==2) | ((playAlarmSounds==1)&(pageIsDashboard))) )
	  		{
	  			setTimeout("playAlarm()",1000);
	  		}
			if (showTiming) {endTiming(start,'GetEventCounts()',6);start=null;}
			
		}, 
		error: function(xmlobject,status) 
		{
			if (xmlobject.status==401)
			{
			        				showConnectionLost("Error A8: Your session on server '" + location.host 
								   + "' has expired");
			}
			else
			{
				if (!connectionlost)
				{
					$("#connectionproblem").remove();
					var html="<div id='connectionproblem' title='Connection Problems'><h3>Sorry, at least one request failed during page refresh.</h3><p>Server connection may be lost or unstable.</p>";
					html = html+"<small>Error: A0<br>";
					html = html+"Status: "+status;
					html = html+"<br>Result: "+xmlobject.status+" "+xmlobject.statusText+"</small></div>";
					$(html).appendTo($("body"));
					showDialogShadow();
					$("#connectionproblem").dialog(
						{ 
							closeOnEscape: false,
							draggable:false,
							resizable:false,
							height:200,
							title:"",
							width:350,
							zIndex: 8999,
							buttons: { 
										"Try Again": function() { hideDialogShadow();$(this).dialog("destroy"); refreshNow();$("#connectionproblem").remove();} 
									} 
						}
					)
					.parent().css("position","fixed").css("top","100px").css("left","100px");
				}
			}
		}
	});
		

}

function avoidEverythingElse() //call this to avoid all our own scripts and events
{
	clearInterval(timerActive); //disable our timer
	clearInterval(addSensorProgressTimer); //disable our sensor refresh
	connectionlost=true;
	$(document).unbind("ajaxError");
	endallscripts=true;
	dosparklines=false;
}

function showAlerts(alarms,newalarms,newmessages,newtodos,activationstatusmessage,BackgroundTasks)
{
	if (userIsReadOnly) {activationstatusmessage=""};

	if (alarms>0) 
	{	
		$("#alarmsmenuitem").addClass("highlightalarms"); 
		$("#alarmsmenuitem > a").attr("title",alarms+" Alarm(s)");
	} 
	else 
	{
		$("#alarmsmenuitem").removeClass("highlightalarms"); 
		$("#alarmsmenuitem > a").attr("title","");
	}
	if (newmessages>0) 
	{
		$("#logmenuitem").addClass("highlight");
		$("#logmenuitem > a").attr("title",newmessages+" New Message(s)");
	} 
	else 
	{
		$("#logmenuitem").removeClass("highlight");
		$("#logmenuitem > a").attr("title","");
	}
	if (newtodos>0) 
	{
		$("#todomenuitem").addClass("highlight");	
		$("#todomenuitem > a").attr("title",newtodos+" New ToDo(s)!");
	} 
	else 
	{
		$("#todomenuitem").removeClass("highlight");
		$("#todomenuitem > a").attr("title","");
	}

	if (popupdisplaymode>0)
	{
		if (newalarms>0) 
		{growlAdd('growlalarms',newalarms+" New Alarm(s)",'',0,'',"avoidEverythingElse();resetnewmessagestimestamp('/alarms.htm?filter_status=5&filter_status=4&filter_status=10&filter_status=13');",false,true);}
		else
		{growlFadeAndRemove(".growlalarms");}
		
		if (popupdisplaymode>1)
		{
			if (newmessages>0) 
				{growlAdd('growlmessages',newmessages+" New Message(s)",'',0,'',"avoidEverythingElse();resetnewmessagestimestamp('/log.htm');");	}
			else
				{growlFadeAndRemove(".growlmessages");}

			if (popupdisplaymode>2)
			{
				if (newtodos>0) 
					{growlAdd('growltodos',newtodos+" New ToDo(s)!",'',0,'',"avoidEverythingElse();resetnewmessagestimestamp('/todos.htm');");}
				else
					{growlFadeAndRemove(".growltodos");}
			}
		}
	}
	if (activationstatusmessage!=="") 
		{growlAdd('growlactivation',activationstatusmessage,'',0,'',"avoidEverythingElse();resetnewmessagestimestamp('/activation.htm');");	}
	else
		{growlFadeAndRemove(".growlactivation");}
	if (BackgroundTasks>0)
		{growlAdd('growlbackground'," Cache calculation in progress. User interface may be slower than usual. Tasks to go:"+BackgroundTasks,'',0,'',"",false,false);}
	else
		{growlFadeAndRemove(".growlbackground");}
			
};

function acknowledgeAlarms()
{
	growlFadeAndRemove(".growlalarms");
	growlFadeAndRemove(".growltodos");
	growlFadeAndRemove(".growlactivation");
	growlFadeAndRemove(".growlmessages");
	growlFadeAndRemove(".growlbackground");
	resetnewmessagestimestamp();
	return false;
}

function resetnewmessagestimestamp(gotourl)
{
	$.ajax({url:"/api/resetnewmessagestimestamp.htm",
			success:function()
			{
				if (gotourl!="" & gotourl!=null) {window.top.location.href =gotourl}
			}
		});
}



/***************************************************/
/* Check connectivity (is server reachable and is our session still valid) */
/**************************************************/

function performConnectionCheck()
{
	if (showTiming) {var start=new Date();}
	if (!connectionTestRequestSent)
	{
		connectionTestRequestSent=true;
		$.ajax({url: "/api/public/testlogin.htm",
				data:"",
				timeout:25000,
		        type: "GET",
		        success:function(html,status)
		        {	if (html.substr(0,5)=="NOTOK")
					{
     				showConnectionLost("Error A1: Your session on server '" + location.host 
					   + "' has expired");
					}
					else 
					{
						failedConnectionChecks=0;
					}
					if (showTiming) {endTiming(start,'performConnectionCheck()',7);start=null;}

				},
		        error:function(request,status,exception)
		        {
		        	failedConnectionChecks=failedConnectionChecks+1;
		        	if (failedConnectionChecks>4)
		        	{
		     				showConnectionLost("Error A2: Server '" + location.host 
							   + "' is unreachable (five requests failed)");
		        	}
		        	else
		        	{
		        		var a="<br>"+request+"<br>"+status+"<br>"+exception;
		        		connectionTestRequestSent=false;
		        		setTimeout("performConnectionCheck()",50); //let's try once more!
		        	}
		        }
		        		
		});
	};

}

function clearScreenAndShowConnectionLostMessage()
{
//	$.prompt("<p>Lost connection to PRTG server! Can not continue!</p><small>"+connectionLostMessage+"</small>",
//				{ callback:connectionlostCallback, buttons: {Relogin:true}});
				
	$("#connectionproblem").remove();
	$(".ui-dialog").remove();
	var html="<div id='connectionproblem' title='Connection Problems'><h2>Lost connection to PRTG server!</h2><p>Can not continue!</p>";
	html = html+"<small>"+connectionLostMessage+"</small></div>";
	$(html).appendTo($("body"));
	showDialogShadow();
	dosparklines=false;

	$("#connectionproblem").dialog(
		{ 
			closeOnEscape: false,
			draggable:false,
			resizable:false,
			height:200,
			title:"",
			width:350,
			zIndex: 8999,
			buttons: { 
						"Try Again": function() { hideDialogShadow();$(this).dialog("destroy");location.reload();} 
					} 
		}
	)
	.parent().css("position","fixed").css("top","100px").css("left","100px");
				
}

function createConnectionErrorMessage(errorcode,status,xmlobject,comment,retryonclick)
{
	var text="<div class='ui-state-error connectionerrormessage'><span class='icon ui-icon ui-icon-alert'/>";
	text=text+"<div class='buttons'>";
	if (retryonclick!="")
	{
	  text=text+"<button onclick=\""+retryonclick+"\" >Retry</button><br>";
	}
	text=text+"<button onclick=\"location.reload();\" >Reload</button>";
	text=text+"</div><b>Sorry, update failed!</b> Connection lost or unstable.";
	text=text+"<br style='clear:both'/><small><b>Error: "+errorcode+" - "+status+" - "+xmlobject.status+" "+xmlobject.statusText+"</b><br>"+comment+"</small></div>";
	return text;
	
}

function showConnectionLost(message)
{
	if (!connectionlost)
	{
		connectionLostMessage=message;
		avoidEverythingElse();
		$(".connectionerrormessage").remove();
		$(".jqibox").remove();
		$("#jGrowl").remove();
		setTimeout("clearScreenAndShowConnectionLostMessage()",500);
	}
};

/**********************************************/
/** Stuff we need for the progress bar while scanning for ports/possible sensors
/**********************************************/

function getAddSensorProgress(id,tmpid)
{
	$.getJSON("/api/getaddsensorprogress.htm?id="+id+"&tmpid="+tmpid, 
	  function(json) 
	  { 
	  	processAddSensorProgress(json.progress,json.targeturl); 
		if (json.progress <100) 
		{
			setTimeout( "getAddSensorProgress("+id+","+tmpid+")", 300 )
		};	  	
	  });
}

function processAddSensorProgress(progress,targeturl)
{
	$('#newprogressbar').progressbar('option', 'value', progress);
	if (progress==100)	
		{
		    clearInterval(addSensorProgressTimer); //disable our sensor refresh
			window.location.replace(targeturl); // if back is clicked the browser is taken to the page before the current!	
		}
}
;

// Stuff for refreshing page elements




// **********************************************
// The main routine to install the event bindings for our interactive WebGUI experience.
// Must be run once for each piece if interactive HTML
// **********************************************

function runComparison(a)
{  
	$.ajax({	
		url: "/controls/compareobject.htm?"+$("#compareform"+a).find("input:checked").serialize()+"&"+$("#graphidform").children("input:checked").serialize(),
		data: "",
		type: "GET",
		success:function(html) 
		{
			$("#comparisonresult"+a).html(html);      //success => inject HTML into DOM
			installEvents($("#comparisonresult"+a));  // then we reinstall our bindings for the newly inserted DOM elements
		}, 
		error: function(xmlobject,status) 
		{
			if (xmlobject.status==401)
			
			{
			        				showConnectionLost("Error A8: Your session on server '" + location.host 
								   + "' has expired");

			}
			else
			{
				if (!connectionlost) {$("#comparisonresult"+a).html(createConnectionErrorMessage("A14",status,xmlobject,"","runComparison(\'"+a+"\');return false;"));}
			}
		}
	});
}

function setSensorSelectManualRadioValue(from,to)
{
	$("#"+to).attr("value",$("#"+from).val()).attr("checked",true);
}
function reloadselection(myobject)
{
  $(myobject).parents(".sensorlookup").eq(0).attr("unfoldid",$(myobject).attr("value"));
  $(myobject).parents(".sensorlookup").eq(0).attr("scrolltop",$(myobject).parents(".sensorselect").eq(0).scrollTop());
  installSensorLookup($(myobject).parents(".sensorlookup").eq(0).parent());
}

function installSensorLookup(parentobject)
{
	//Set up Interactive Sensorlookup Lists
	$(parentobject).find(".sensorlookup").each(
	function()
	{
		var myurl="/api/fillsensorlist.htm?";

			function addParameterIfAvailable(object,paramname)
			{
				if (($(object).attr(paramname)!=="")  & ($(object).attr(paramname)!=="undefined") ){myurl=myurl+paramname+"="+$(object).attr(paramname)+"&"; }
			}

		addParameterIfAvailable(this,"inputname");
		addParameterIfAvailable(this,"radioclass");
		addParameterIfAvailable(this,"required");
		addParameterIfAvailable(this,"rootid");
		addParameterIfAvailable(this,"selid");
		addParameterIfAvailable(this,"devices");
		addParameterIfAvailable(this,"hidedevices");
		addParameterIfAvailable(this,"groups");
		addParameterIfAvailable(this,"sensors");
		addParameterIfAvailable(this,"allowroot");
		addParameterIfAvailable(this,"selectsize");
		addParameterIfAvailable(this,"probes");
		addParameterIfAvailable(this,"allownone");
		addParameterIfAvailable(this,"allowself");
		addParameterIfAvailable(this,"show");
		addParameterIfAvailable(this,"displaydepth");
		addParameterIfAvailable(this,"unfoldid");
		addParameterIfAvailable(this,"scrolltop");
		myurl=myurl+"currentid="+currentObjectID;
		
		var myobject=$(this);
		
		$(this).html("").addClass("loading");

		
		unbindAllEvents($(myobject));

		$.ajax({	
			url: myurl,
			data: "",
			type: "GET",
			success:function(html) 
			{
				$(myobject).html(html).removeClass("loading");      //success => inject HTML into DOM
				
		 		var selectsize=$(myobject).attr("selectsize");
		 		if ((selectsize)==undefined) {selectsize=20};

		 		var myscrolltop=$(myobject).attr("scrolltop");
		 		if ((myscrolltop)!=undefined) 
		 			{
		 				$('#sensorselect'+$(myobject).attr("inputname")).get(0).scrollTop=myscrolltop
		 			}
		 		else
			 		if ($("#scrolltome"+$(myobject).attr("inputname")).length>0)
			 		{
			 			$('#sensorselect'+$(myobject).attr("inputname")).get(0).scrollTop=$("#scrolltome"+$(myobject).attr("inputname")).offset().top-$('#sensorselect'+$(myobject).attr("inputname")).offset().top-5*selectsize;
			 		};
				
				
		 		
		 		$(parentobject).find(".validateForm").addClass("validateformdone").removeClass("validateform").validate({errorClass: "validateerror",errorElement: "div"});
				if ($(myobject).attr("radioclass")=="compareradio1") 
				{
					$(".compareradio1").click(function(){runComparison("1")});
					runComparison("1");
				}
				if ($(myobject).attr("radioclass")=="compareradio2") 
				{
					$(".compareradio2").click(function(){runComparison("2")});
				}
				myobject=null;

			}, 
			error: function(xmlobject,status) 
			{
				if (xmlobject.status==401)
				{
				        				showConnectionLost("Error A8: Your session on server '" + location.host 
									   + "' has expired");

				}
				else
				{
					if (!connectionlost) {$(myobject).html(createConnectionErrorMessage("A10",status,xmlobject,"/api/fillsensorlist.htm","")).removeClass("loading");}
				}
				myobject=null;
			}
		});
		
	});
}

function miniToolsEdit(type,id)
{
	var typestr="sensor";
	if (type==1) {typestr="sensor";window.top.location.href = "/"+typestr+".htm?id="+id+"&gototab=9";}
	else
	{
		if (type==2) {typestr="device";}
		if (type==3) {typestr="group";}
		if (type==4) {typestr="probenode";}
		window.top.location.href = "/"+typestr+".htm?id="+id+"&gototab=7";
	}
}

function minitoolsQuickedit(type,objectid)
{
	function submitByReturn(key) 
	{ 
		if (key.which == 13) { submitQuickEditData(true); } 
	} 

	function submitQuickEditData(v,m)
	{
		hideDialogShadow();
		$("#quickeditform").dialog("destroy"); 
		$.ajax({	
			    url: "/editsettings?",
				data:$("#quickeditform").find("input").serialize(),
				type: "POST",
				success:function(html) {refreshNow(); }
			});
		$("#quickeditform").remove();
	}
	
	var myurl="/controls/quickedit.htm?id="+objectid;
	if (type==2) {myurl="/controls/quickeditdevice.htm?id="+objectid};

	$.ajax({	url: myurl,
				data:"",
				type: "GET",
				success:function(html) 
				{
					$(html).appendTo($("body"));
					showDialogShadow();
					$("#quickeditform").dialog(
						{ 
							closeOnEscape:false,
							draggable:false,
							resizable:false,
							height:200,
							width:550,
							zIndex:8999,
							buttons: { 
										"Cancel": function() { hideDialogShadow();$("#quickeditform").dialog("destroy");$("#quickeditform").remove();},
										"OK": function() { submitQuickEditData(true);} 
									} 
						}
					);
					if (type==2) 
					{
						var selectedicon=$("#deviceiconquickselector").attr("selectid");
						$("#deviceiconquickselector input").each(
						function()
						{
							var myobject=$(this);
							if ( $(myobject).attr("value")==selectedicon) {$(myobject).click();}
						}
						);
					};
					$("#quickeditform input").keypress(function(e){submitByReturn(e)});
					$("#quickeditnamedit").focus();
				}
			});
}

function delayedMiniToolsInstall()
{
	if ($(newMiniToolsObject).is("a"))
	{
		if (lastMiniToolsObject!=newMiniToolsObject)
		{
			$("#objectminitools").remove();
			var myid=$(newMiniToolsObject).attr('id');
			var type=0;
			if ($(newMiniToolsObject).is(".sensormenu")) {type=1};
			if ($(newMiniToolsObject).is(".devicemenu")) {type=2};
			if ($(newMiniToolsObject).is(".groupmenu")) {type=3};
			if ($(newMiniToolsObject).is(".probemenu")) {type=4};
			if (type>0)
			{
				$(newMiniToolsObject).append("<div id='objectminitools'></div>");
				var mytop=parseInt($(newMiniToolsObject).offset().top)-12;
				var myleft=parseInt($(newMiniToolsObject).offset().left)-45;
				
				if (!userIsReadOnly)
				{
					$("#objectminitools").append("<a href='#' title='Edit' onclick='miniToolsEdit("+type+","+myid+");return false'><div class='ui-icon ui-icon-wrench'></div></a>");
					$("#objectminitools").append("<a href='#' title='Rename' onclick='minitoolsQuickedit("+type+","+myid+");return false'><div class='ui-icon ui-icon-tag'></div></a><span id='minipfeil'></span>");
	
					
					if (type>1)
					{
					
						if (newMiniToolsObject.parents("li").eq(0).is(".collapsed"))
						{
							$("#objectminitools").prepend("<a href='#' title='Unfold' onclick='setObjectCollapse("+myid+",1);return false'><div class='ui-icon ui-icon-folder-open'></div></a>"); //decollapse
							myleft=myleft-18;
						}
						else
						if (newMiniToolsObject.parents("li").eq(0).is(".open"))
						{
							$("#objectminitools").prepend("<a href='#' title='Fold Up' onclick='setObjectCollapse("+myid+",2);return false'><div class='ui-icon ui-icon-folder-collapsed'></div></a>"); //collapse
							myleft=myleft-18;
						}
					}
				}
			
				if ((type==2) & ($(newMiniToolsObject).parents("div#sensortreebox").eq(0).is(".sensortreesmall")))
				{
					myleft=myleft-parseInt($(newMiniToolsObject).parents("div.row").eq(0).offset().left)-8;
					mytop=mytop-parseInt($(newMiniToolsObject).parents("div.row").eq(0).offset().top);
				}
				else
				if ((type==1) & ($(newMiniToolsObject).parents("div#sensortreebox").eq(0).is(".sensortreesmall")))
				{
					myleft=myleft-parseInt($(newMiniToolsObject).parents("div.row").eq(0).offset().left)-8;
					mytop=mytop-parseInt($(newMiniToolsObject).parents("div.row").eq(0).offset().top)-13;
				}
				else if(myleft<2) {myleft=2;}

				$("#objectminitools").css("top",mytop+'px').css("left",myleft+'px').show();
				
				mytop=parseInt($(newMiniToolsObject).parent().offset().top)+parseInt($(newMiniToolsObject).parent().height())-mytop-9;
				myleft=parseInt($(newMiniToolsObject).parent().offset().left)-myleft-7;

				var graphs="";
				
				if (type==1)
				{
					if (($(newMiniToolsObject).parents("div#sensortreebox").eq(0).is(".sensortreesmall")))
					{
						myleft=myleft-parseInt($(newMiniToolsObject).parents("div.row").eq(0).offset().left)-8;
						mytop=mytop-parseInt($(newMiniToolsObject).parents("div.row").eq(0).offset().top)-13;
					}
					graphs=graphs+ "<img width=380 height=200 src='/chart.png?id="+myid+"&type=graph&graphid=0&width=380&height=200&graphstylefile=graphstylingtiny.htm&datastylefile=graphdatastyling.htm&graphstyling=baseFontSize%3D%279%27+showLegend%3D%271%27'>";
					$("#objectminitools").append("<div id='instantgraphs'>"+graphs+"</div>");
					$("#instantgraphs").css("top",mytop+'px').css("left",myleft+'px');
				}
			}
	
			lastMiniToolsObject=newMiniToolsObject;
			newMiniToolsObject=-1;
		}
	}
	
}

function installObjectIcons(myobject)
{
	if ($(myobject).attr("id")!=$(lastMiniToolsObject).attr("id"))
	{
		if ((myobject!=newMiniToolsObject))
		{
			newMiniToolsObject=myobject;
			MiniToolsPopupdelay=timeInSeconds()+1;
		}
	}
}

function removeObjectIcons(myobject)
{
	newMiniToolsObject=0;
	lastMiniToolsObject=0;
	$("#instantgraphs").remove();
	MiniToolsPopupdelay=timeInSeconds();
}

function renderSparklines()
{
	
	var myobject=0;
	var count=10;
	if (browser_is_ie) {count=3};
	
	if (!dosparklines) {return;};
	
	for (var i=1;i<=count;i++)
	{	
		if (showTiming) {var startx=new Date();}			
		myobject=$(".sparklinetodo").eq(0);
		if (myobject.length>0)
		{
			var myobject=$(".sparklinetodo").eq(0);
			myobject.html( myobject.attr("errordata")).removeClass("sparklinetodo").sparkline("html",{ type:'line',width:"196px",height:"17px",lineColor:"#E9979B",fillColor:"#FDD5D7",chartRangeMin:0,spotRadius:0});
		    myobject.sparkline(myobject.attr("data").split(','),{ type:'line', composite:"true", lineColor:'#A1BEDB', fillColor:'#C7DEF8',spotRadius:0});
	 		myobject=null;
		}
		else
		{
			dosparklines=false;
			break;
		}
		if (showTiming) {endTiming(startx,'Various',13);}
	}
	
}

function installEvents(parentobject)
{
	if (showTiming) {var start=new Date();}

	if ((!endallscripts) & (!connectionlost))
	{

		//If contexthelp is enabled, show the help box
		if (contexthelpIsEnabled=="true")
		{
			$(".contexthelpbox").show();
		}

		//Enable FORM validation
		$(parentobject).find(".validateForm").addClass("validateformdone").removeClass("validateform").validate({errorClass: "validateerror",errorElement: "div"});
		
		
		//Set up Menu (Main menu and table menus)
		$(parentobject).find("ul.jd_menu").jdMenu();
		
		$("#addsensorlist .allowsubmitonclick label").live("click",
	 function()
	 {
	 	console.log("$('#"+$(this).parents("form").eq(0).attr("id")+"').submit();)");
	 	setTimeout("$('#"+$(this).parents("form").eq(0).attr("id")+"').submit();",250);
	 });


		//Set up Date Pickers
		$(parentobject).find(".datepicker").datepicker({ 
													    dateFormat: "yy-mm-dd", 
													    showOn: "both", 
													    minDate: "-10y", 
    													maxDate: 0, 
													    buttonImage: "/images/calendar.gif", 
													    buttonImageOnly: true,
													    prevText: '',
														nextText: '',
														mandatory: true,
														firstDay: 1
															});

		if (!userIsReadOnly)
		{
			// Install Drag&Drop functions
			if ($(parentobject).find("#table_devicesensortable").length>0) {setTimeout("installSensorDragAndDrop();",400)};
			if ($(parentobject).find("#table_devicesort").length>0) {setTimeout("installGroupDeviceDragAndDrop();",400)};
			
			//prepare map events for Map editor
			if ($(parentobject).find("div.requiresmapevents").length>0) {setTimeout("installMapEvents();$('div.requiresmapevents').removeClass('requiresmapevents')",400);}

			if ($(parentobject).find("select#channeldropdown").length>0) 
			{
				$("select#channeldropdown").find("option").eq(0).attr("selected","selected");
				setTimeout($("select#channeldropdown").attr("onchange"),100);
			}
			if ($(parentobject).find("select#toplistdropdown").length>0) 
			{
				setTimeout($("select#toplistdropdown").attr("onchange"),100);
			}
			if ($(parentobject).find(".multieditactivecheckbox").length>0) 
			{
				$(parentobject).find(".multieditactivecheckbox").click(function(){multiEditCheckboxAction($(this))});
				$(parentobject).find(".multirow .wiz3 input,.multirow .wiz3 select").attr("disabled","true").mouseup(function(){multiEditInputAction($(this))});
				$(parentobject).find(".multieditactivegroupcheckbox").click(function(){multiEditGroupCheckboxAction($(this))});
			}
			
			if ($(parentobject).find(".toplistchartreadytoreander").length>0) {setTimeout("renderTopListGraphs();",200)};

			// Setup events for report channel selection
	    	setupReportChannelAjaxInterface(parentobject);
		}
		
			if ($(parentobject).find("#historicdataform").length>0) 
			{
				var now=new Date();
				$("#historicdataform .datepicker").datepicker('setDate',now);
			}
		

		
		// Install Events for Sensor Selection Boxes
		installSensorLookup(parentobject);
		
		//Enable groupwise show/hide for form fields
		installGroupShowHide(parentobject);

		//Create the HTML code for the embedded SWF Charts
		renderCharts(parentobject);
		
		//Install Color Pickers
		installColorPickers(parentobject);
		
		// if we are on the root group page we need to hide some menu options and links
		
		if (currentObjectID=="0")	{$(".hideForID0").remove();	};
		if ((currentObjectID!="-9999") & (currentObjectID!="0"))	{$(".hideForIDnot0").remove();};
		
	    
	    doStatsSparkline($("#stattable div.alarmsgraph .sparklinetodo").eq(0),"#FF7D7B","#FFD7DE");
	    doStatsSparkline($("#stattable div.speedgraph .sparklinetodo").eq(0),"#7BBE7B","#D3F1D3");
	    doStatsSparkline($("#stattable div.cpugraph .sparklinetodo").eq(0),"#C6C7C6","#E7E3E7");
	    doStatsSparkline($("#stattable div.bandwidthgraph .sparklinetodo").eq(0),"#B5BECE","#DEE3F7");
		// '#9FC6F2' '#6390BD
	
		dosparklines=true;
		renderSparklines();
		
	}
	if (showTiming) {endTiming(start,'InstallEvents()'+$(parentobject).attr("id"),0);start=null;}
		
};

function doStatsSparkline(myobject,mylinecolor,myfillcolor)
{
	$(myobject).html($(myobject).attr("data"));
 	$(myobject).removeClass("sparklinetodo").sparkline("html",{ type:'line',width:"192px",height:"15px",lineColor:mylinecolor, fillColor:myfillcolor,spotRadius:0,chartRangeMin:0});
};


function installColorPickers(parentobject)
{
	$(parentobject).find("input.colorselector").each(
	function()
	{
		$(this).after('<div id="colorpicker'+$(this).attr("id")+'"></div>');
		if ($(this).val().length==0)
		{
			$(this).val('#000000');
		}
		$("#colorpicker"+$(this).attr("id")).farbtastic("#"+$(this).attr("id"));
	});
}

function setupReportChannelAjaxInterface(parentobject)
{
	//Set up Interactive Report Channel List
	$(parentobject).find("#reportchannellist").each(
	function()
	{
		$(this).load("/controls/reportchannellist.htm?"+"id="+currentObjectID);
	});
	
};

function reloadTable(formid)
{
	if (showTiming) {var start=new Date();}
	flashRefreshMessage(1000);
	$("#"+formid).removeClass("refreshable"); // avoid automatic refreshing
	$("#"+formid).children("table").fadeTo(10,0.5,    //first we fade the table to 50%
	    function()
		{
			unbindAllEvents($("#"+formid));

			$.ajax({	
				url: "/controls/table.htm?"+$("#"+formid).children("input").serialize(),
				data: "",
				type: "GET",
				success:function(html) 
				{
					$("#"+formid).parent().html(html); //success => inject HTML into DOM
					installEvents($("#"+formid));      // then we reinstall our bindings for the newly inserted DOM elements
					if (showTiming) {endTiming(start,'reloadTable()'+formid,9);start=null;}
				}, 
				error: function(xmlobject,status) 
				{
					if (xmlobject.status==401)
					{
					        				showConnectionLost("Error A8: Your session on server '" + location.host 
										   + "' has expired");

					}
					else
					{
						$("#"+formid).addClass("refreshable");
						if (!connectionlost) {$("#"+formid).children("table").fadeTo(10,1).html(createConnectionErrorMessage("A7",status,xmlobject,"","reloadTable(\'"+formid+"\');return false;"));}
					}
				}
			});
		});
};		

function setHiddenField(formid,name,value)
{
	if ($("#"+formid+"_hidden_"+name).length>0) //look for hidden field
	{
	  $("#"+formid+"_hidden_"+name).val(value); // and update it
	}
	else //field doesn't exist yet. Create it.
	{
		$("#"+formid).append("<input id='"+formid+"_hidden_"+name+"' type='hidden' value='"+value+"' name='"+name+"'>");
	}
}

function unbindAllEvents(parent)
{
	$(parent).find("*").unbind();
}



function flashRefreshMessage(showtime)
{
	growlAdd('GrowlRefresh','Refreshing','',showtime,'','',true)
}

function refreshLater(milliseconds)
{
  setTimeout("refreshNow()",milliseconds);
}

function reloadxTimes(x)
{
	for (var i=0;i<x;i++)
	{
	  refreshLater(i*400);	
	}
	
}

function refreshNow()
{
	if (showTiming)
	{
		setTimeout("showTimepool()",autoRefreshInterval*1000/2);
	}
	if ((autoRefreshType=="wholepage") | ((timeInSeconds()-lastPageLoad>60*60) )) // User Setting: Autorefresh=WholePage
	                                                                              // or - once every 1 hour - we also perform a full refresh
	                                                                              // to avoid (pseudo) memory leaks in the web browsers
	{
		endallscripts=true;           // if we reload the page, all scripts should end NOW
		timerStart=timeInSeconds()+1000;	
		setTimeout("window.location.reload()",2000);
	}
	else
	//  autoRefreshType is "elements" (User Setting: Autorefresh=Refreshable Elements only)
	{
		flashRefreshMessage(1500);
		timerStart=timeInSeconds();	
		GetEventCounts();
		$(".refreshable").each(function()  // do tables and HTML objects first 
			{
				//Refresh this object

				if ($(this)!=undefined)
				{
				  	if (($(this).attr("refreshinterval")===undefined) | ((timeInSeconds()-lastPageLoad)>(1.0*$(this).attr("refreshinterval")+1.0*$(this).attr("lastrefresh"))))
				  	{
				    	$(this).attr("lastrefresh",timeInSeconds()-lastPageLoad);
						if (($(this).attr("refreshurl")!=="") & ($(this).attr("refreshurl")!=undefined))
						{
							if (showTiming) {var start=new Date();}
							$(this).addClass("refreshing").removeClass("refreshable");
							unbindAllEvents($(this));
							var myobject=$(this).parent();

							$.ajax({	
								url: $(this).attr("refreshurl"),
								data: "",
								type: "GET",
								success:function(html) 
								{
									if (browser_is_ie) //this method is 3x faster on ie
									{
										$(myobject).empty();
										$(myobject).append(html);      //success => inject HTML into DOM
									}
									else
									{
										$(myobject).html(html);
									}
									installEvents($(myobject));
									if (showTiming) {endTiming(start,'refreshobject()',8);start=null;}
									myobject=null;
								}, 
								error: function(xmlobject,status) 
								{
									if (xmlobject.status==401)
									{
										showConnectionLost("Error A8: Your session on server '" + location.host 
										   + "' has expired");

									}
									else
									{
										$(myobject).find(".refreshing").removeClass("refreshing").addClass("refreshable");
										if (!connectionlost) {$(myobject).html(createConnectionErrorMessage("A12",status,xmlobject,'URL: '+$(myobject).attr("refreshurl"),"refreshNow();return false;"));}
									}
									myobject=null;
								}
							});
							
						};
				  	};  
				};									

			}); 
		
		renderCharts($('body'));
	}
	connectionTestRequestSent=false;
}

function renderCharts(parentobject)
{
        // Check if any flash charts in page
        if ( $("div.FlashGraphHolder").length > 0 )
        {
            // Version check based upon the values in "Globals"
            var hasRequestedVersion = DetectFlashVer(requiredMajorVersion, requiredMinorVersion, requiredRevision);

            if (!hasRequestedVersion)
            {  // flash is too old or we can't detect the plugin
                $(parentobject).find("div.FlashGraphHolder").html("<p>Flash player insufficient or not installed</p>"+
                                                                                                                  " <p>You can <a href='/public/installflash.htm'>install Flash Player</a><br> "+
                                                                                                                     "or disable Flash-based graphs in the&nbsp;"+
                                                                                                                      "<a href='/setup.htm&gototab=2'>User Settings</a>").css("background-image","none").css("background-color","#eee");
            }
            else
            {
                var counter=0;
                $(parentobject).find("div.FlashGraphHolder").each(function()
                                                        {
                                                                setTimeout("renderOneChart('"+$(this).attr('id')+"');", graphDrawingDelay*1000+200+200*counter);
                                                                counter=counter+1;
                                                        });
            }
        }
}

function renderOneChart(id)
{
	if (!connectionlost)
	{
		if ($("#"+id).length>0) // does the object still exist?
		{
			if (($("#"+id).attr("refreshinterval")===undefined) | ($("#"+id).attr("lastrefresh")=="0") | ((timeInSeconds()-lastPageLoad)>(1.0*$("#"+id).attr("refreshinterval")+1.0*$("#"+id).attr("lastrefresh"))))
			  	{
				if (showTiming) {var start=new Date();}

			   	$("#"+id).attr("lastrefresh",timeInSeconds()-lastPageLoad);
			    var chart = new FusionCharts($("#"+id).attr("flash_swfurl"),
			    							 "MyPRTGChart"+$("#"+id).attr("flash_id"),
			    							 $("#"+id).attr("flash_width"),
			    							 $("#"+id).attr("flash_height"),
			    							 false, //debug
			    							 true); //enable object interface

			    if ($("#"+id).attr("flash_DataXML")) {chart.setDataXML($("#"+id).attr("flash_DataXML"));}
			    else
			    if ($("#"+id).attr("flash_DataURL")) {chart.setDataURL($("#"+id).attr("flash_DataURL"));};
			    chart.render("GraphBox"+$("#"+id).attr("flash_id"));
				if (showTiming) {endTiming(start,'DOM RenderChart()'+id,3);start=null;}
			  	}
		}
	}
}

/**********************************************/
/*  loadChannelList is used on the "channels" tab of sensor.htm
/**********************************************/

  function loadChannelList(objectid,formid,containerid)
  {
  	var myurl="/controls/channels.htm?id="+objectid+"&"+$("#"+formid).find("select").serialize();
	$('#'+containerid).html("").addClass("loading");

	$.ajax({	url: myurl,
		data:"",
		type: "POST",
		success:function(html)
		{
			$('#'+containerid).removeClass("loading").html(html);
			installEvents($('#'+containerid)); 
		},
		error: function(xmlobject,status)
		{
			if (xmlobject.status==401)
			{
				showConnectionLost("Error A8: Your session on server '" + location.host 
				   + "' has expired");
			}
			else
			{
				if (!connectionlost) {$('#'+containerid).removeClass("loading").html(createConnectionErrorMessage("A17",status,xmlobject,"URL: "+myurl,""));}
			}
		}
		});

  }


    function resizeIframe() {

        var docHeight;
        if (typeof document.height != 'undefined') {
            docHeight = document.height;
        }
        else if (document.compatMode && document.compatMode != 'BackCompat') {
            docHeight = document.documentElement.scrollHeight;
        }
        else if (document.body 
            && typeof document.body.scrollHeight != 'undefined') {
            docHeight = document.body.scrollHeight;
        }

        // magic number: suppress generation of scrollbars...
        docHeight += 30;

        if (parent.document.getElementById('helpiframe')) {parent.document.getElementById('helpiframe').style.height = docHeight + "px"; }
    }
    
function loginAnimation()
{
    var image0 = new Image();
	    image0.src = "/images/sky_900px.jpg";
	
	    if (image0.complete)        
	      image0Loaded();        
	    else        
	      image0.onload = image0Loaded;

	function image0Loaded()
	{
	    var image1 = new Image();
	    image1.src = "/images/town_900px.png";

		setTimeout("$('.prtgsky').css('background-image','url(/images/sky_900px.jpg)').fadeIn(1000);",100);
	
	    if (image1.complete)        
	      image1Loaded();        
	    else        
	      image1.onload = image1Loaded;
	}
	function image1Loaded()
	{
		setTimeout("$('.prtgcity').css('background-image','url(/images/town_900px.png)').fadeIn(1000);",800);
	    var image2 = new Image();
	    image2.src = "/images/prtg-tower.png";
	
	    if (image2.complete)        
	      image2Loaded();        
	    else        
	      image2.onload = image2Loaded;
	}
	function image2Loaded()
	{
		setTimeout("$('.prtgtower').css('background-image','url(/images/prtg-tower.png)').fadeIn(1000);",500);
		
		setTimeout("$.preloadCssImages();",2000);
	}
}
    

function showPopupHelp(url)
{
	var help="<iframe title='Help' id='popuphelpiframe' class='loading' src='/embeddedhelp/"+url+"' name='help' frameborder='0' scrolling='no'></iframe>";

	showDialogShadow();
	$(help).appendTo($("body"));
	$("#popuphelpiframe").dialog(
						{ 
							closeOnEscape: true,
							draggable:false,
							resizable:false,
							width:680,
							height:500,
							zIndex: 8999,
							position:[30,30],
							buttons: { 
										"OK": function() { hideDialogShadow();$(this).dialog("destroy");$("#popuphelpiframe").remove();} 
									} 
						}
					);
	$("#popuphelpiframe").css("width","660px");

}
;

// Stuff for toplists

/**********************************************/
/*  getToplistURL is used by workToplist (below)
/**********************************************/

function getToplistURL(worktype,objectid,formid,containerid)
{
	if (worktype == 'add' ) 
	{
		return "/controls/toplistadd.htm?id="+objectid+"&subid=new";
	}
	else 
	if (worktype == 'delete') 
	{
		 return "/controls/toplistdelete.htm?id="+objectid+"&"+$("#"+formid).find("select").serialize()+"&gototab=6";
	} 
	else 
	{
		return "/controls/toplist"+worktype+".htm?id="+objectid+"&"+$("#"+formid).find("select").serialize();
	}
	
	
}


function selectToplist(objectid)
{
	var formid='toplistform';
	var containerid='toplistlistcontainer';
	
	if ($("#"+formid+' select[0] option:selected').val()=="-999999")
	{
		$('#'+containerid).html("");
		return;
	}

	var myurl="/controls/toplistselect.htm?id="+objectid+"&"+$("#"+formid).find("select").serialize();
	
	$('#'+containerid).html("").addClass("loading");

	$.ajax({	
		url: myurl,
		data:"",
		type: "POST",
		success:function(html)
		{
			$('#'+containerid).removeClass("loading").html(html);
			installEvents($('#'+containerid));
			setTimeout('loadLater()',250); 
		},
		error: function(xmlobject,status)
		{
			if (xmlobject.status==401)
			{
				showConnectionLost("Error A8: Your session on server '" + location.host 
				   + "' has expired");
			}
			else
			{
				if (!connectionlost) {$('#'+containerid).removeClass("loading").html(createConnectionErrorMessage("A17",status,xmlobject,"URL: "+myurl,""));}
			}
		}
		});

}
function addToplist(objectid)
{
	var formid='toplistform';
	var containerid='toplistlistcontainer';
	var myurl="/controls/toplistadd.htm?id="+objectid+"&subid=new";
	
	$('#'+containerid).html("").addClass("loading");

	$.ajax({	
		url: myurl,
		data:"",
		type: "POST",
		success:function(html)
		{
			$('#'+containerid).removeClass("loading").html(html);
			installEvents($('#'+containerid));
		},
		error: function(xmlobject,status)
		{
			if (xmlobject.status==401)
			{
				showConnectionLost("Error A8: Your session on server '" + location.host 
				   + "' has expired");
			}
			else
			{
				if (!connectionlost) {$('#'+containerid).removeClass("loading").html(createConnectionErrorMessage("A17",status,xmlobject,"URL: "+myurl,""));}
			}
		}
		});

}

function editToplist(objectid)
{
	var formid='toplistform';
	var containerid='toplistlistcontainer';
	var myurl="/controls/toplistedit.htm?id="+objectid+"&"+$("#"+formid).find("select").serialize();
	
	$('#'+containerid).html("").addClass("loading");

	$.ajax({	
		url: myurl,
		data:"",
		type: "POST",
		success:function(html)
		{
			$('#'+containerid).removeClass("loading").html(html);
			installEvents($('#'+containerid));
		},
		error: function(xmlobject,status)
		{
			if (xmlobject.status==401)
			{
				showConnectionLost("Error A8: Your session on server '" + location.host 
				   + "' has expired");
			}
			else
			{
				if (!connectionlost) {$('#'+containerid).removeClass("loading").html(createConnectionErrorMessage("A17",status,xmlobject,"URL: "+myurl,""));}
			}
		}
		});

}

function deleteToplist(objectid)
{
	var formid='toplistform';
	var containerid='toplistlistcontainer';
	var myurl="/controls/toplistdelete.htm?id="+objectid+"&"+$("#"+formid).find("select").serialize();
	
	$('#'+containerid).html("").addClass("loading");

	$.ajax({	
		url: myurl,
		data:"",
		type: "POST",
		success:function(html)
		{
			$('#'+containerid).removeClass("loading").html(html);
			installEvents($('#'+containerid));
		},
		error: function(xmlobject,status)
		{
			if (xmlobject.status==401)
			{
				showConnectionLost("Error A8: Your session on server '" + location.host 
				   + "' has expired");
			}
			else
			{
				if (!connectionlost) {$('#'+containerid).removeClass("loading").html(createConnectionErrorMessage("A17",status,xmlobject,"URL: "+myurl,""));}
			}
		}
		});

}


/**********************************************/
/*  showToplist is used on the "Toplists" tab of sensor.htm
/**********************************************/


function showToplist(objectid,nix,topnumber)
  {
	var containerid='showtoplistcontainer';
  	var myurl="/controls/toplistshow.htm?id="+objectid+"&topnumber="+topnumber;
	$('#'+containerid).html("").addClass("loading");
	$("#toplistpiechart").addClass("loading");
	$("#toplistpiechart").empty();

	$.ajax({	url: myurl,
		data:"",
		type: "POST",
		success:function(html)
		{
			$('#'+containerid).removeClass("loading").html(html);
			installEvents($('#'+containerid));

		},
		error: function(xmlobject,status)
		{
			if (xmlobject.status==401)
			{
				showConnectionLost("Error A8: Your session on server '" + location.host 
				   + "' has expired");
			}
			else
			{
				if (!connectionlost) {$('#'+containerid).removeClass("loading").html(createConnectionErrorMessage("A17",status,xmlobject,"URL: "+myurl,""));}
			}
		}
		});

  }


function renderTopListGraphs()
{
	$("#toplistpiechart").addClass("loading");
	$("#toplistpiechart").empty();
	
	$("#table_topdatatableraw thead").remove();
	$("#table_topdatatableraw tr").each(function()
	{
		$(this).find("td").each(function(index,obj)
		  {
		  	if(index==0) {$(obj).replaceWith("<th>"+$(obj).html()+"</th>")};
		  })
	});
	
	$("#table_topdatatableraw").visualize({type: 'pie', pieMargin: 10, appendTitle:false,pieLabelPos:"inside",width:185,height:185,appendKey:false}).appendTo("#toplistpiechart").trigger('visualizeRefresh');
	$("#table_topdatatableraw").hide();
	
	$(".toplistchartreadytoreander").removeClass(".toplistchartreadytoreander");
	$("#toplistpiechart").removeClass("loading");
	
}
;

// Stuff for report editing

// **********************************************
// Report functions
// **********************************************

function reportstartchannelsearch(reportid)
{
	$("#reportsearchresult").load('/controls/reportchannelsearch.htm?id='+reportid+'&filter_name=@sub('+encodeURIComponent($("#reportchannelsearchtext").val())+')'+'&filter_device=@sub('+encodeURIComponent($("#reportchannelsearchtext").val())+')'+'&filter_group=@sub('+encodeURIComponent($("#reportchannelsearchtext").val())+')'+'&filter_tags=@sub('+encodeURIComponent($("#reportchannelsearchtext").val())+')',
	{},
	function()
	{
		setupReportChannelAjaxInterface($(".OctopusTabs2"));
	}
	);
	
}

function scrollSensorListEndIntoView(objid)
{
	$("#reportchannellist .sensorid"+objid).parents("tr").eq(0).find("td").css("border-top","2px solid #0060B6").css("border-bottom","2px solid #0060B6");
	$("#reportchannellist2").scrollTo($(".sensorid"+objid).parents("tr").eq(0),1000,{offset:-50});
}

function reportAddSensor(id,sensorid,linkobj)
{
	$("#reportchannellist").html("<center><img style='padding-top:50px;' src='/images/ajax-loader-big.gif' width=32 height=32></center>");
	$(linkobj).parents("tr").eq(0).find("a").css("color","#000").fadeTo(500,0.3);
	$.ajax({	url: "/api/reportaddsensor.htm?id="+id+"&addid="+sensorid,
				data:"",
				type: "GET",
				success:function(html) 
				{ 
					setupReportChannelAjaxInterface($("#reportchannellisthousing"));
					
					setTimeout("scrollSensorListEndIntoView("+sensorid+");",500);
 
				}
			});
}
function reportDeleteSensor(reportid,sensorid)
{
	$("#reportchannellist").html("<center><img style='padding-top:50px;' src='/images/ajax-loader-big.gif' width=32 height=32></center>");
	$.ajax({	url: "/api/deletesubobject.htm?id="+reportid+"&subid="+sensorid,
				data:"",
				type: "GET",
				success:function(html) { setupReportChannelAjaxInterface($("#reportchannellisthousing")); }
			});
}


function reportToggleChannel(mycheckbox,id,reportnodeid,channelid)
{
	if ($(mycheckbox).attr("checked")===true) {
		reportAddChannel(id,reportnodeid,channelid);
	} else {
		reportDeleteChannel(id,reportnodeid,channelid);
	}

}


function reportAddChannel(id,reportnodeid,channelid)
{
	$.ajax({	url: "/api/reportaddsensorchannel.htm?id="+id+"&repnodeid="+reportnodeid+"&channelid="+channelid,
				data:"",
				type: "GET"
			});
}
function reportDeleteChannel(id,reportnodeid,channelid)
{
	$.ajax({	url: "/api/reportdeletesensorchannel.htm?id="+id+"&repnodeid="+reportnodeid+"&channelid="+channelid,
				data:"",
				type: "GET"
			});
}
;

// Stuff for the Map Editor


function getMapMultiIDs(formid) //gets the objects IDs from a table for all MultiEdit functions
{
	var myids="";
	$("#"+formid).find(".checkbox").each(
		function(num)
		{
		 	if (parseInt($(this).attr("value"))>=0)
		 	{
			 	if ($(this).attr("checked")===true)
			 	{
			 		myids=myids+$(this).attr("value")+",";
			 	}
			}
		});
	return myids;
}


function addMapObject(formid)
{
	var myids=getMapMultiIDs(formid);
	if (myids=="")
	{
		$('#the_map_editor').show();
		$('#addobjectform').hide();
	}
	else
	{
	var myurl="/api/addobjecttomap.htm?id="+currentObjectID
	     //+"&"+$("#"+formid).find("input:checked").serialize()
	     +"&dependency_="+myids
	     +"&"+$("#"+formid).find("input:hidden").serialize()
	     +"&"+$("#"+formid).find("input.value").serialize()
	     +"&"+$("#"+formid).find("select").serialize();
	     
		$.ajax({url: myurl,
			data:"",
	        type: "GET",
	        success:function(html,status)
	        {
				$('#the_map_editor').show();
				$('#addobjectform').hide();
	        	refreshNow();
	        }
		});
	}

}

function mapSettings(subid,objectid)
{
	function mapSettingsCallback(v,m)
	{
		$.ajax({	url: "/api/editmapobject.htm?subid="
	                 +subid+"&"+$("#mapeditsettingsform").find("input:checked").serialize()
	                 +"&"+$("#mapeditsettingsform").find("select").serialize()
	                 +"&"+$("#mapeditsettingsform").find("input.value").serialize()
	                 +"&id="+currentObjectID,
				data:"",
				type: "GET",
				success:function(html) {refreshNow(); }
			});
	}
	$.ajax({	url: "/controls/mapeditsettings.htm?subid="+subid+"&id="+currentObjectID+"&selid="+objectid,
				data:"",
				type: "GET",
				success:function(html) 
				{
					showDialogShadow();
					$(html).appendTo($("body"));
					$("#mapeditsettingsform").dialog(
						{ 
							closeOnEscape: false,
							draggable:false,
							resizable:false,
							width:920,
							zIndex: 8999,
							position:[50,100],
							buttons: { 
										"Cancel": function() { hideDialogShadow();$(this).dialog("destroy");$("#mapeditsettingsform").remove();} ,
										"OK": function() { hideDialogShadow();$(this).dialog("destroy");mapSettingsCallback(true);$("#mapeditsettingsform").remove();} 
									} 
						}
					);
					installSensorLookup($("#mapeditsettingsform"));
				}
			});
	
	
	
}


function installMapEvents()
{
	if (showTiming) {var start=new Date();}
	
	$("div.map_edit div.map_object").easydrag(false);

	objectWasDropped=false;
	draggingStarted=false;
	$("div.map_edit div.map_object").ondrop(function(e, element)
											{ 
												if (!objectWasDropped)
												{
													objectWasDropped=true;
													draggingStarted=false;
													var browsercorrection=2;
													if ($.browser.msie) 
													{
														browsercorrection=1;
													}
													$(element).css("border","1px solid red");
													$(".map_object").fadeTo(200,0.1);
													$("div.map_edit div.map_object").dragOff();
													$.ajax({	url: "/api/editmapobject.htm?subid="
													                 +$(element).attr('subid')
													                 +"&top="+($(element).offset().top-$("#map_objectbox").offset().top-browsercorrection+2)
													                 +"&left="+($(element).offset().left-$("#map_objectbox").offset().left-browsercorrection+2)
													                 +"&id="+currentObjectID,
																data:"",
																type: "GET",
																success:function(html) {refreshNow(); }
															});
													
												}

											});
	$("div.map_edit div.map_object").ondrag(function(e, element)
											{ 
												if (!draggingStarted)
												{
													$(element).css("border","1px solid blue");
													$(".map_objecttools").hide();
													$(".map_objectsettings").hide();
													$(".map_objectsizer").hide();
													if ($.browser.msie) 
													{
														$("div.map_table").html(""); 
														$("div.map_graph").html(""); 
													}
													$(".map_object").fadeTo(0,0.3);
													$(element).fadeTo(0,1);
													draggingStarted=true;
												}
											});
											
	$("div.map_edit div.map_object").each(
	function(i)
		{
			if (!($(this).is(".map_icon")))
			{
				$(this).after("<div class='map_objectsizer' forid='"+$(this).attr('id')+"' objid='"+currentObjectID+"' subid='"+$(this).attr('subid')+"'"+
				  "style='position:absolute;top:"+(parseInt($(this).css("top"))-8+parseInt($(this).height()))+"px;left:"+(parseInt($(this).css("left"))-8+parseInt($(this).width()))+"px' "+
				  "><div class='ui-icon ui-icon-arrowthick-2-se-nw'></div></div>");
			}
			$(this).after("<div class='map_objectsettings' forid='"+$(this).attr('id')+"' objid='"+currentObjectID+"' subid='"+$(this).attr('subid')+"'"+
			  "style='position:absolute;top:"+(parseInt($(this).css("top"))+1)+"px;left:"+(parseInt($(this).css("left"))/*+parseInt($(this).width())*/+47)+"px' "+
			  "><a href='#' onclick='mapSettings("+$(this).attr('subid')+","+$(this).attr('objectid')+");return false;'>Settings</a></div>");
			$(this).after("<div class='map_objecttools' objid='"+currentObjectID+"' subid='"+$(this).attr('subid')+"'"+
			  "style='top:"+(parseInt($(this).css("top"))+1)+"px;left:"+(parseInt($(this).css("left")))+"px'"+
			  "><a href='#' onclick='deleteMapObject("+currentObjectID+","+$(this).attr('subid')+");return false;'>Delete</a></div>");
		}
	)
											
	$("div.map_edit div.map_objectsizer").easydrag(false);
	$("div.map_edit div.map_objectsizer").ondrop(function(e, element)
											{
												draggingStarted=false;
													$("div.map_edit div.map_objectsizer").dragOff();
													$.ajax({	url: "/api/editmapobject.htm?subid="
													                 +$("#"+$(element).attr('forid')).attr('subid')
													                 +"&width="+(parseInt($("#"+$(element).attr('forid')).css("width"))+2)
													                 +"&height="+(parseInt($("#"+$(element).attr('forid')).css("height"))-10)
													                 +"&id="+currentObjectID,
																data:"",
																type: "GET",
																success:function(html) {refreshNow(); }
															});
													
												

											});
	$("div.map_edit div.map_objectsizer").ondrag(function(e, element)
											{ 
												if (!draggingStarted)
												{
													$("#"+$(element).attr('forid')).html("");
													if ($.browser.msie) {$("#"+$(element).attr('forid')).css("border","2px dotted green");}
													draggingStarted=true;
												}
												var newheight=parseInt($(element).offset().top)-parseInt($("#"+$(element).attr('forid')).offset().top);
												var newwidth=parseInt($(element).offset().left)-parseInt($("#"+$(element).attr('forid')).offset().left);
												
												if ((newheight>20) & (newheight<1000))
												{
													$("#"+$(element).attr('forid')).css("height",newheight+'px');
												}
												if ((newwidth<2000) & (newwidth>20))
												{
													$("#"+$(element).attr('forid')).css("width",newwidth+'px');
												}
											});
	
	if (showTiming) {endTiming(start,'installmapevents()',5);start=null;}

}
;

// Stuff for the Drag&Drop functions
/***********************************************************************************************/
/* Installs the events for moving and dragging of sensors on the device page*/
/***********************************************************************************************/


function installSensorDragAndDrop()
{
			
	var containleft=$("#table_devicesensortable tr").eq(0).offset().left;
	var containtop=$("#table_devicesensortable").eq(0).offset().top;
	var containbottom=$("#table_devicesensortable").offset().top+$("#table_devicesensortable").height();
	var droptargetposition=-1;
	var droptargetparentgroup=-1;
	
	$("#table_devicesensortable span.sorter").draggable(
		{
		 cursor: 'move',
		 helper: function(){return "<div class='sorter' nodeid='"+$(this).attr("nodeid")+"' position='"+$(this).attr("position")+"'></div>"},
		 zIndex: 2700,
		 cursorAt: { left: 1,top:1 },
		 containment:[containleft,containtop,containleft,containbottom],
		 start: function(event, ui) 
		 	{ 
		 		$("#table_devicesensortable").removeClass("hoverable").removeClass("refreshable").addClass("dragging");
		 		$(ui.helper).css("width","4px").css("height","4px");
		 		$(ui.helper).parents("tr").eq(0).draggable('destroy');
		 		$(ui.helper).parents("tr").eq(0).find("td").addClass("moving");
				droptargetposition=-1;
		 	},
		 stop: function(event, ui) 
		 	{  
		 		$("#table_devicesensortable span.sorter").draggable( 'destroy' );
			 	if (droptargetposition!=-1) 
			 	{
					$.ajax({	url: "/api/setposition.htm?id="+ui.helper.attr("nodeid")+"&newpos="+droptargetposition,
								data:"",
								type: "GET",
								success:function(html) {
														if (html.substring(0,2)!="ok")
														{
																growlAdd('GrowlInfo','Sorry, can not set new position','',15000,'','',true);
																reloadTable("form_devicesensortable"); 
														}
														else
														{
															growlAdd('GrowlInfo','Sensor was moved','',5000,'','',true);
															reloadTable("form_devicesensortable");
														}
									
													 }
							});
			 	}
			 	else
			 	{
			 		reloadTable("form_devicesensortable");
			 	}
		 	}
		});
		
	$("#table_devicesensortable tbody tr").droppable(
		{
		 accept: ".sorter",
		 tolerance: 'pointer',
		 over: function(event, ui) 
		 {
		 	var target=$(this);
		 	var targetsorter=$(target).find("span.sorter");
		 	if (ui.helper.attr("nodeid")!=targetsorter.attr("nodeid"))
		 	{
		 	  if (ui.helper.offset().top>(containtop+$("#table_devicesensortable").height()/2))
		 	  {
		 	  	$("#"+ui.helper.attr("nodeid")).parents("tr").eq(0).insertAfter(target);
		 	  	droptargetposition=parseInt(targetsorter.attr("position"))+1;
		 	  }
		 	  else
		 	  {
		 	  	$("#"+ui.helper.attr("nodeid")).parents("tr").eq(0).insertBefore(target);
		 	  	droptargetposition=parseInt(targetsorter.attr("position"))-1;
		 	  }
		 	}
		 },
		 drop: function(event, ui) {}
		});
}

/***********************************************************************************************/
/* Installs the events for moving and dragging of groups and devices */
/***********************************************************************************************/


function hideSorterKids(parentid)			
{
	$("#table_devicesort span.sorter").each(function ()
	{
		if ($(this).attr("parentid")==parentid)
		{
			hideSorterKids($(this).attr("nodeid"));
			$(this).parents("tr").eq(0).remove();
		}
	})
	$("#table_devicesort span.sorterdisabled").each(function ()
	{
		if ($(this).attr("parentid")==parentid)
		{
			hideSorterKids($(this).attr("nodeid"));
			$(this).parents("tr").eq(0).remove();
		}
	})
	
};

function hideProbeKids()			
{
	$("#table_devicesort span.sorter").each(function ()
	{
		if ($(this).attr("isprobe")=="true")
		{
			hideSorterKids($(this).attr("nodeid"));
		}
	})
};

function showAllSorters()			
{
  $("#table_devicesort table tr").show();
};


function installGroupDeviceDragAndDrop()
{

	containleft=$("#table_devicesort tr").eq(0).offset().left;
	containtop=$("#table_devicesort tbody tr").eq(0).offset().top;
	containbottom=$("#table_devicesort").offset().top+$("#table_devicesort").height()-20;
	
	$("#table_devicesort span.sorter").draggable(
		{
		 cursor: 'move',
		 helper: function(){return "<div class='sorterdevice' nodeid='"+$(this).attr("nodeid")+"' parentid='"+$(this).attr("parentid")+"' type='"+$(this).attr("type")+"' isprobe='"+$(this).attr("isprobe")+"' position='"+$(this).attr("position")+"'></div>"},
		 zIndex: 2700,
		 cursorAt: { left: 1,top:1 },
		 containment:[containleft,containtop,containleft,containbottom],
		 start: function(event, ui) 
		 	{ 
		 		$("#table_devicesort").removeClass("refreshable").removeClass("hoverable").addClass("dragging");
		 		$(ui.helper).css("width","1px").css("height","1px");
		 		$(ui.helper).parents("tr").eq(0).find("td").addClass("moving");
				droptargetposition=-1;
				droptargetparentgroup=-1;
				if ($(ui.helper).attr("isprobe")=="true") {hideProbeKids();}
				else
				  if ($(ui.helper).attr("type")=="group") {hideSorterKids($(ui.helper).attr("nodeid"));}
		 	},
		 stop: function(event, ui) 
		 	{  
		 		$("#table_devicesort span.sorter").draggable( 'destroy' );
  		 		reloadTable("form_devicesort");
		 	}
		});
		
	$("#table_devicesort tbody tr").droppable(
		{
		 tolerance: 'intersect',
		 over: function(event, ui) 
		 {
		 	var target=$(this);
		 	var targetsorter=$(target).find("span.sorter");
		 	if (ui.helper.attr("nodeid")!=targetsorter.attr("nodeid"))
		 	{
		 		if ((targetsorter.attr("parentid")>0))
			 	{
			 	  $("#"+ui.helper.attr("nodeid")).parents("tr").eq(0).insertAfter(target);
			 	  droptargetposition=parseInt(targetsorter.attr("position"))+1;
			 	  if (targetsorter.attr("type")=="group")
			 	  {
			 	    droptargetparentgroup=targetsorter.attr("nodeid");
			 	    droptargetposition=1;
			 	  }
			 	  else
			 	  {
			 	    droptargetparentgroup=targetsorter.attr("parentid");
			 	  }
			 	}
			 	else
		 		if ((targetsorter.attr("parentid")==0))
			 	{
			 	  if (ui.helper.attr("isprobe")=="true") 
			 	  {
				 	  $("#"+ui.helper.attr("nodeid")).parents("tr").eq(0).insertAfter(target);
				 	  droptargetposition=parseInt(targetsorter.attr("position"))+1;
			 	      droptargetparentgroup=0;
			 	  }
			 	}
		 	}
		 },
		 drop: function(event, ui) 
		 { 
		 	if ((droptargetposition!=-1) & (droptargetposition!=-1)) 
		 	{
		 	    if (ui.helper.attr("isprobe")=="true") 
		 	    {
					$.ajax({	url: "/api/setposition.htm?id="+ui.helper.attr("nodeid")+"&newpos="+droptargetposition,
								data:"",
								type: "GET",
								success:function(html) 
								{ 
									if (html.substring(0,2)!="ok")
									{
											growlAdd('GrowlInfo','Sorry, can not set new position','',15000,'','',true);
											reloadTable("form_devicesort");
									}
									else
									{
										growlAdd('GrowlInfo','Object was moved','',5000,'','',true);
										reloadTable("form_devicesort");
									}
								}
							});
		 	    	
		 	    }
		 	    else
		 	    {

		 		
		 		$.ajax({	url: "/api/moveobjectsimple.htm?id="+ui.helper.attr("nodeid")+"&targetid="+droptargetparentgroup,
							data:"",
							type: "GET",
							success:function(html) 
							{ 
								if (html.substring(0,2)!="ok")
								{
										growlAdd('GrowlInfo','Sorry, can not move here','',15000,'','',true);
										reloadTable("form_devicesort");
								}
								else
								{
									$.ajax({	url: "/api/setposition.htm?id="+ui.helper.attr("nodeid")+"&newpos="+droptargetposition,
												data:"",
												type: "GET",
												success:function(html) 
												{ 
													if (html.substring(0,2)!="ok")
													{
															growlAdd('GrowlInfo','Sorry, can not set new position','',15000,'','',true);
															reloadTable("form_devicesort");
													}
													else
													{
														growlAdd('GrowlInfo','Object was moved','',5000,'','',true);
														reloadTable("form_devicesort");
													}
												}
											});
								}
							}
						});
		 	    }
		 	};
		 		
		 }
		});
};

// Various Stuff
// **********************************************
// Write an entry into our browser log (debugging only)
// **********************************************

function webDebugLog(a)
{
	
	
}

function endTiming(starttime,label,timepoolid)
{
	if (showTiming)
	{
		var CurrentTime = new Date();
		timepool[timepoolid]=timepool[timepoolid]+CurrentTime.getTime() - starttime.getTime();;
		timepoolcount[timepoolid]=timepoolcount[timepoolid]+1;
		CurrentTime=null;
	}
}
function showTimepool()
{
	if (showTiming)
	{
		var info="";
		var total=0;
		for (var i = 0; i <timepool.length; i++) 
		{
			if (timepoolcount[i]>0)
			{
				info=info+"<tr><td>"+(timepoollabel[i].toLowerCase())+'</td><td>'+Math.round(timepool[i]/timepoolcount[i])+'</td><td>'+timepoolcount[i]+'x</td></tr>';
				total=total+Math.round(timepool[i]/timepoolcount[i]);
			}
			growlAdd('timepool',"<table cellspacing=2><tr><td></td><td>Avg. ms</td><td>Count</td></tr>"+info+'<tr><td>Total ms<td>'+total+'</td></tr></table>','',0,'','',true);
		}
		info=null;
	}
	
};
function showDialogShadow()
{
	$("#dialogshadow").css("height",window.document.body.clientHeight+"px").show().fadeTo(0,0.7);
}
function hideDialogShadow()
{
	$("#dialogshadow").hide().fadeTo(0,0);
}

function showWorkingDialog()
{
	var html="<div id='working' class='loading' title='Working...'>One moment please...";
	html = html+"</div>";
	
	$(html).appendTo($("body"));
	showDialogShadow();
	$("#working").dialog(
		{ 
			draggable:false,
			resizable:false,
			width:250,
			zIndex:8999,
			buttons: {} 
		}
	);
	
}

function hideWorkingDialog()
{
	hideDialogShadow();
	$("#working").dialog("destroy").remove();
}

;

// Stuff for our group show/hide functions in the edit pages

/**************************************************/
/** GroupShowHide Functions for the wizards and entry pages**/
/**************************************************/

function installGroupShowHide(parentobject)
{
	$(parentobject).find(".GroupShowHide").click(
	 function()
	 {  
	 	if ($(this).attr("checked")===true) 
	 	{
	 		$(".Show"+$(this).attr("id")).show();
	 	 	$(".Hide"+$(this).attr("id")+":visible").css("display","inline-block").slideUp("fast");
                        //Fix for IE bug
                        //force select the default radio after slide down
	 	 	$(".Show"+$(this).attr("id") +" input.IECheckedFix").attr("checked","checked");
	 	} 
	 	else 
	 	{
	 	 	$(".HideNot"+$(this).attr("id")+":visible").css("display","inline-block").slideUp("fast");
	 		$(".ShowNot"+$(this).attr("id")).show();
	 	}
	 }
	);
};

/**************************************************/
/** Disable/Enable a control or a set of controls, used e.g. on Add Sensor page **/
/**************************************************/

function disableEnableControls(disable,enable)
{
	$(disable).attr("disabled","disabled");
	if (enable!=="") 
	{
		$(enable).attr("disabled","");
	}
}



;

// Stuff from Adobe to detect Flash Player Version
// Flash Player Version Detection - Rev 1.5
// Detect Client Browser type
// Copyright(c) 2005-2006 Adobe Macromedia Software, LLC. All rights reserved.
var isIE  = (navigator.appVersion.indexOf("MSIE") != -1) ? true : false;
var isWin = (navigator.appVersion.toLowerCase().indexOf("win") != -1) ? true : false;
var isOpera = (navigator.userAgent.indexOf("Opera") != -1) ? true : false;

function ControlVersion()
{
	var version;
	var axo;
	var e;

	// NOTE : new ActiveXObject(strFoo) throws an exception if strFoo isn't in the registry

	try {
		// version will be set for 7.X or greater players
		axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
		version = axo.GetVariable("$version");
	} catch (e) {
	}

	if (!version)
	{
		try {
			// version will be set for 6.X players only
			axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
			
			// installed player is some revision of 6.0
			// GetVariable("$version") crashes for versions 6.0.22 through 6.0.29,
			// so we have to be careful. 
			
			// default to the first public version
			version = "WIN 6,0,21,0";

			// throws if AllowScripAccess does not exist (introduced in 6.0r47)		
			axo.AllowScriptAccess = "always";

			// safe to call for 6.0r47 or greater
			version = axo.GetVariable("$version");

		} catch (e) {
		}
	}

	if (!version)
	{
		try {
			// version will be set for 4.X or 5.X player
			axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
			version = axo.GetVariable("$version");
		} catch (e) {
		}
	}

	if (!version)
	{
		try {
			// version will be set for 3.X player
			axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
			version = "WIN 3,0,18,0";
		} catch (e) {
		}
	}

	if (!version)
	{
		try {
			// version will be set for 2.X player
			axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
			version = "WIN 2,0,0,11";
		} catch (e) {
			version = -1;
		}
	}
	
	return version;
}

// JavaScript helper required to detect Flash Player PlugIn version information
function GetSwfVer(){
	// NS/Opera version >= 3 check for Flash plugin in plugin array
	var flashVer = -1;
	
	if (navigator.plugins != null && navigator.plugins.length > 0) {
		if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
			var swVer2 = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "";
			var flashDescription = navigator.plugins["Shockwave Flash" + swVer2].description;			
			var descArray = flashDescription.split(" ");
			var tempArrayMajor = descArray[2].split(".");
			var versionMajor = tempArrayMajor[0];
			var versionMinor = tempArrayMajor[1];
			if ( descArray[3] != "" ) {
				tempArrayMinor = descArray[3].split("r");
			} else {
				tempArrayMinor = descArray[4].split("r");
			}
			var versionRevision = tempArrayMinor[1] > 0 ? tempArrayMinor[1] : 0;
			var flashVer = versionMajor + "." + versionMinor + "." + versionRevision;
		}
	}
	// MSN/WebTV 2.6 supports Flash 4
	else if (navigator.userAgent.toLowerCase().indexOf("webtv/2.6") != -1) flashVer = 4;
	// WebTV 2.5 supports Flash 3
	else if (navigator.userAgent.toLowerCase().indexOf("webtv/2.5") != -1) flashVer = 3;
	// older WebTV supports Flash 2
	else if (navigator.userAgent.toLowerCase().indexOf("webtv") != -1) flashVer = 2;
	else if ( isIE && isWin && !isOpera ) {
		flashVer = ControlVersion();
	}	
	return flashVer;
}

// When called with reqMajorVer, reqMinorVer, reqRevision returns true if that version or greater is available
function DetectFlashVer(reqMajorVer, reqMinorVer, reqRevision)
{
	versionStr = GetSwfVer();
	if (versionStr == -1 ) {
		return false;
	} else if (versionStr != 0) {
		if(isIE && isWin && !isOpera) {
			// Given "WIN 2,0,0,11"
			tempArray         = versionStr.split(" "); 	// ["WIN", "2,0,0,11"]
			tempString        = tempArray[1];			// "2,0,0,11"
			versionArray      = tempString.split(",");	// ['2', '0', '0', '11']
		} else {
			versionArray      = versionStr.split(".");
		}
		var versionMajor      = versionArray[0];
		var versionMinor      = versionArray[1];
		var versionRevision   = versionArray[2];

        	// is the major.revision >= requested major.revision AND the minor version >= requested minor
		if (versionMajor > parseFloat(reqMajorVer)) {
			return true;
		} else if (versionMajor == parseFloat(reqMajorVer)) {
			if (versionMinor > parseFloat(reqMinorVer))
				return true;
			else if (versionMinor == parseFloat(reqMinorVer)) {
				if (versionRevision >= parseFloat(reqRevision))
					return true;
			}
		}
		return false;
	}
}

function AC_AddExtension(src, ext)
{
  if (src.indexOf('?') != -1)
    return src.replace(/\?/, ext+'?'); 
  else
    return src + ext;
}

function AC_Generateobj(objAttrs, params, embedAttrs) 
{ 
    var str = '';
    if (isIE && isWin && !isOpera)
    {
  		str += '<object ';
  		for (var i in objAttrs)
  			str += i + '="' + objAttrs[i] + '" ';
  		for (var i in params)
  			str += '><param name="' + i + '" value="' + params[i] + '" /> ';
  		str += '></object>';
    } else {
  		str += '<embed ';
  		for (var i in embedAttrs)
  			str += i + '="' + embedAttrs[i] + '" ';
  		str += '> </embed>';
    }

    document.write(str);
}

function AC_FL_RunContent(){
  var ret = 
    AC_GetArgs
    (  arguments, ".swf", "movie", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
     , "application/x-shockwave-flash"
    );
  AC_Generateobj(ret.objAttrs, ret.params, ret.embedAttrs);
}

function AC_GetArgs(args, ext, srcParamName, classid, mimeType){
  var ret = new Object();
  ret.embedAttrs = new Object();
  ret.params = new Object();
  ret.objAttrs = new Object();
  for (var i=0; i < args.length; i=i+2){
    var currArg = args[i].toLowerCase();    

    switch (currArg){	
      case "classid":
        break;
      case "pluginspage":
        ret.embedAttrs[args[i]] = args[i+1];
        break;
      case "src":
      case "movie":	
        args[i+1] = AC_AddExtension(args[i+1], ext);
        ret.embedAttrs["src"] = args[i+1];
        ret.params[srcParamName] = args[i+1];
        break;
      case "onafterupdate":
      case "onbeforeupdate":
      case "onblur":
      case "oncellchange":
      case "onclick":
      case "ondblClick":
      case "ondrag":
      case "ondragend":
      case "ondragenter":
      case "ondragleave":
      case "ondragover":
      case "ondrop":
      case "onfinish":
      case "onfocus":
      case "onhelp":
      case "onmousedown":
      case "onmouseup":
      case "onmouseover":
      case "onmousemove":
      case "onmouseout":
      case "onkeypress":
      case "onkeydown":
      case "onkeyup":
      case "onload":
      case "onlosecapture":
      case "onpropertychange":
      case "onreadystatechange":
      case "onrowsdelete":
      case "onrowenter":
      case "onrowexit":
      case "onrowsinserted":
      case "onstart":
      case "onscroll":
      case "onbeforeeditfocus":
      case "onactivate":
      case "onbeforedeactivate":
      case "ondeactivate":
      case "type":
      case "codebase":
      case "id":
        ret.objAttrs[args[i]] = args[i+1];
        break;
      case "width":
      case "height":
      case "align":
      case "vspace": 
      case "hspace":
      case "class":
      case "title":
      case "accesskey":
      case "name":
      case "tabindex":
        ret.embedAttrs[args[i]] = ret.objAttrs[args[i]] = args[i+1];
        break;
      default:
        ret.embedAttrs[args[i]] = ret.params[args[i]] = args[i+1];
    }
  }
  ret.objAttrs["classid"] = classid;
  if (mimeType) ret.embedAttrs["type"] = mimeType;
  return ret;
}


;

// Stuff for our growl boxes (bottom right)

// **********************************************
// Growl Light für JQuery - Simple user notifications in a browser window
// for PRTG Network Monitor by Dirk Paessler
// **********************************************

function growlAdd(growlclass,mymessage,header,displaytime,myurl,myonclick,ontop,pulsate)
{
	var mymessageid,now,growl,growlcontent,oldgrowl,animation;
	
	if (disallowgrowls) {return;}
	
	if (ontop== null) { ontop=false};
	if (pulsate== null) { pulsate=false};

	if ( $('#jGrowl').size() == 0 ) // need to set up our outer box first
   	{
   		$('<div id="jGrowl" class="jGrowl"></div>').addClass('bottom-right').appendTo('body');
   	}
   	
   	if (header!="") {header='<div class="header">' + header + '</div>';}
    if (myurl!="") {mymessage='<a href="'+myurl+'" onclick="'+myonclick+'">' + mymessage + '</a>';}
    else
    if (myonclick!="") {mymessage='<a href="#" onclick="'+myonclick+';return false;">' + mymessage + '</a>';}

   	growlcontent='<div class="close"><a href="#" onclick="acknowledgeAlarms();return false">&times;</a></div>' + header+ '<div class="message">' + mymessage + '</div>';
    if (growlclass=="") {growlclass="classnotset"};

    now=new Date();	
    mymessageid=now.getTime();
   	growl='<div id="'+mymessageid+'" class="jGrowl-notification '+growlclass+'">'+growlcontent+'</div>';
	oldgrowl=$("#jGrowl div."+growlclass);
	if ($(oldgrowl).size()==0) 
	{ // no previous message of this class is here, create new box and animate
		animation="blind";
	}
	else
	{ // remove old box, create new, and show without animation
		$(oldgrowl).remove();
		animation="";
	}
	if (ontop) { $(growl).prependTo('#jGrowl').show(animation); } //add on top of list
	      else { $(growl).appendTo('#jGrowl').show(animation); } //add at bottom
	if (displaytime>0) {setTimeout("growlFadeAndRemove('#"+mymessageid+"');",displaytime);}; // optional: hide box after some time
    if (pulsate) {setTimeout("$('#"+mymessageid+"').effect('pulsate');",1000);}; //optional: pulsate the box to attract attention

}

function growlRemove()
{
	$('#jGrowl').remove();
}

function growlFadeAndRemove(selector)
{
	$('#jGrowl '+selector).hide("blind",{},500, function () 
		{
			$('#jGrowl '+selector).remove();
			$('#jGrowl .ui-effects-wrapper').remove();
			if ($('#jGrowl div').size()==0) {growlRemove()};
        });
    
	
}


;



// **********************************************
// Set various global variables
// **********************************************


var autoRefreshInterval=60;
var autoRefreshType="elements";

var working=true;
var connectionlost=false;
var endallscripts=false;
var connectionTestRequestSent=false;
var failedConnectionChecks=0;
var playAlarmSounds=0;
var popupdisplaymode=0;
var pageIsDashboard=false;
var userIsReadOnly=false;

var timerStart=timeInSeconds();
var lastPageLoad=timeInSeconds();
var chartList={};
var timerActive=0;
var addSensorProgressTimer=0;
var currentObjectID="-9999";
var objectWasDropped=false;
var connectionLostMessage="";
var graphDrawingDelay=0;
var contexthelpIsEnabled="false";
var draggingStarted=false;
var lastMiniToolsObject=1;
var newMiniToolsObject=0;
var MiniToolsPopupdelay=0;
var disallowgrowls=false;
var PageStartTime = new Date();
var dosparklines=false;

var showTiming=false;
var timepool=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
var timepoolcount=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
var timepoollabel=new Array("DOM Install Events", //0
							"DOM Switchtab", //1
							"DOM PageSetup", //2
							"DOM Render Flash", //3
							"DOM Contextmenu", //4
							"DOM MapEvents", //5
							"Ajax Event Counts", //6
							"Ajax ConnectCheck", //7
							"Ajax RefreshObject", //8
							"Ajax Reload Table", //9
							"AJAX Loadlater", //10
							"Various 1", //11
							"Various 2", //12
							"Various 3"); //13

if (getURLParam("showtiming")!=="") {  showTiming=true; }



// Major version of Flash required
var requiredMajorVersion = 8;
// Minor version of Flash required
var requiredMinorVersion = 0;
// Minor version of Flash required
var requiredRevision = 0;

var name = navigator.userAgent.toLowerCase();
var browser_is_ie = (name.indexOf("msie")>-1);




// **********************************************
// Programmatically set a tab
// **********************************************

function SwitchTab(a)  //Switches to a specific tab of the Tab Control
{
	$(".OctopusTabs2 > ul > li a").eq(a-1).click();
	return false;
};


function startActivation(button)
{
	$(button).parent().fadeTo("slow",0,function()
	{
		$.ajax({	url: "/api/allowactivation.htm",
					data:"",
					type: "GET",
					success:function(html) {;refreshLater(10000);refreshLater(20000); refreshNow(); }
				});
	}
    );
	$('.EMailActivation').show();
	$('.EMailActivationNode').hide();


}
    	

     	
// *******************************************
// Stuff we need to do whenever a new full page has been loaded.
// *******************************************


function preparePage()
{
		// Install the event bindings for all elements as well as as lots of other stuff
		installEvents($("body"));
		
		// Install Minitool events
		
		$("a.sensormenu,a.devicemenu,a.groupmenu,a.probemenu").live("mouseover",function(){installObjectIcons($(this));});
		$("a.sensormenu,a.devicemenu,a.groupmenu,a.probemenu").live("mouseout",function(){removeObjectIcons($(this));});

		installMultiEditEnabler();

		// Activate Ajax Tabs (and load the initial one)
		
		if (($(".loadlater").length>0) | ($(".loadlaterfirst").length>0))
		{
		  	setTimeout("loadLater()",250);
		};
		
		installOctopusTabs2();
		
		var initialtab=1;
    	if (getURLParam("gototab")!=="") { initialtab=parseInt(getURLParam("gototab")); }
		if (initialtab>1) {$(".OctopusTabs2 > ul > li a").eq(initialtab-1).click();}

		//Install events for context menus
		InstallContextMenu();
		
		//Searchfield is set to empty when clicked
		$("#searchstring").focus(function(){ $("#searchstring").unbind("focus").val(""); });
		
		//Focus Username Input on login page
		$("#loginusername").focus(); 

	  	// Add menu hiding on document click
	  	$(document).bind("click", function() 
	  		{ 	
	  			$("ul.jd_menu ul:visible").jdMenuHide();
	  		});
	  		
}

	function loadOneLater(object,attribute)
	{
		if (showTiming) {var start=new Date();}
  		$(object).addClass("loading");
		$.ajax({	url: $(object).attr(attribute),
				data:"",
				type: "POST",
				success:function(html) 
				{
					$(object).removeClass("loading").html(html); 
					installEvents($(object));
			  		if (showTiming) {endTiming(start,'loadlater',10);start=null;}
				},
				error: function(xmlobject,status) 
				{
					if (xmlobject.status==401)
					{
						showConnectionLost("Error A8: Your session on server '" + location.host + "' has expired");
					}
					else
					{
						if (!connectionlost) {$(object).removeClass("loading").html(createConnectionErrorMessage("A17",status,xmlobject,"URL: "+$(object).attr(attribute),""));}
					}
				}
				
			}); 
	}

  function loadLater()
  {
  	
  	$(".loadlaterfirst").each(function(){loadOneLater(this,"loadurl")}).removeClass("loadlaterfirst");
  	$(".loadlater").each(function(){loadOneLater(this,"loadurl")}).removeClass("loadlater");
  };
  
  function installOctopusTabs2()
  {
  	$(".OctopusTabs2 > ul > li a").click(function() 
  	{
		if (showTiming) {var start=new Date();}
  		$(".OctopusTabs2 > div.tabs-container").addClass("tabs-hide");   //hide all tabs contents
  		$("#tab-"+$(this).attr("tabindex")).removeClass("tabs-hide");    //unhide the new tab content
  		$(".OctopusTabs2 > div.loadwhentabbed").html("");                //empty tabs that would be reloaded when re-tabbed anyway
  		$(".OctopusTabs2 > ul > li").removeClass("tabs-selected");       //deselect all tabs icons
  		$(this).parent().addClass("tabs-selected");                      //select the new tab icon
  		if ($("#tab-"+$(this).attr("tabindex")).is(".loadwhentabbed"))   //load tab if necessary
  		{
  			loadOneLater($("#tab-"+$(this).attr("tabindex")),"loadurl");
  		}
  		if (showTiming) {endTiming(start,'switchtab',1);start=null;}
  		return false;
  	});
  };


// **********************************************
// Various Functions
// **********************************************


function timeInSeconds()
{
  now=new Date();	
  return(now.getTime()/1000);
}



function getURLParam(strParamName){
  var strReturn = "";
  var strHref = window.location.href;
  var myString = strHref.split("#");
  strHref= myString[0];

  if ( strHref.indexOf("?") > -1 ){
    var strQueryString = strHref.substr(strHref.indexOf("?")).toLowerCase();
    var aQueryString = strQueryString.split("&");
    for ( var iParam = 0; iParam <aQueryString.length; iParam++ ){
      if ( aQueryString[iParam].indexOf(strParamName.toLowerCase() + "=") > -1 ){
        var aParam = aQueryString[iParam].split("=");
        strReturn = aParam[1];
        break;
      }
    }
  }
  return unescape(strReturn);
} 

function checkLoginForm()
{
	if ($("#usewingui").attr("checked")===true) {$("#hiddenloginurl").attr("value","/downloads.htm")};
}

function defaultlogin()
{
	if ($("#logindefaultlogin").attr('checked')===true)
	{
		$("#loginusername").val("prtgadmin");
		$("#loginpassword").val("prtgadmin");
	}
	else
	{
		$("#loginusername").val("");
		$("#loginpassword").val("");
	};
}

function playAlarm()
{
		var thissound=document.getElementById("alarmsound");
		if (thissound!=null) {thissound.Play();};
}
    
function runhistoricdata()
{
	var myid=$("#sensorselectid input:checked").val();
	if (typeof(myid)=='undefined') {myid=$("#myid").val();};
	var params="?id="+myid+"&sdate="+$("#sdate").val()+$("#starthour").val()+"&edate="+$("#edate").val()+$("#endhour").val()+"&avg="+$("#avg").val()+"&pctavg="+$("#pctavg").val()+"&pctshow="+$("#pctshow").attr("checked")+"&pct="+$("#pct").val()+"&pctmode="+$("#pctmode1").attr("checked");

	if ($("#formathtml").attr("checked")===true)
	{
		var mywindow=window.open("/historicdata_html.htm"+params,'HistoricDataWindow'+$("#sensorselectid input:checked").val(),'width=900,height=600,scrollbars=yes,toolbar=yes,location=yes,status=yes,menubar=yes,resizable=yes');
		mywindow.focus();
	}
	else
	if ($("#formatxml").attr("checked")===true)
	{
		window.top.location.href = "/api/historicdata.xml"+params;
	}
	else
	if ($("#formatcsv").attr("checked")===true)
	{
		window.top.location.href = "/api/historicdata.csv"+params;
	};

}