(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{5589:function(e,t,r){"use strict";r.d(t,{Z:function(){return te}});var n=r(2506),o=Math.abs,a=String.fromCharCode;function c(e){return e.trim()}function i(e,t,r){return e.replace(t,r)}function s(e,t){return e.indexOf(t)}function u(e,t){return 0|e.charCodeAt(t)}function f(e,t,r){return e.slice(t,r)}function l(e){return e.length}function d(e){return e.length}function p(e,t){return t.push(e),e}var m=1,y=1,h=0,b=0,v=0,g="";function w(e,t,r,n,o,a,c){return{value:e,root:t,parent:r,type:n,props:o,children:a,line:m,column:y,length:c,return:""}}function x(e,t,r){return w(e,t.root,t.parent,r,t.props,t.children,0)}function O(){return v=b>0?u(g,--b):0,y--,10===v&&(y=1,m--),v}function k(){return v=b<h?u(g,b++):0,y++,10===v&&(y=1,m++),v}function S(){return u(g,b)}function C(){return b}function $(e,t){return f(g,e,t)}function _(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function j(e){return m=y=1,h=l(g=e),b=0,[]}function A(e){return g="",e}function M(e){return c($(b-1,N(91===e?e+2:40===e?e+1:e)))}function P(e){for(;(v=S())&&v<33;)k();return _(e)>2||_(v)>3?"":" "}function E(e,t){for(;--t&&k()&&!(v<48||v>102||v>57&&v<65||v>70&&v<97););return $(e,C()+(t<6&&32==S()&&32==k()))}function N(e){for(;k();)switch(v){case e:return b;case 34:case 39:return N(34===e||39===e?e:v);case 40:41===e&&N(e);break;case 92:k()}return b}function T(e,t){for(;k()&&e+v!==57&&(e+v!==84||47!==S()););return"/*"+$(t,b-1)+"*"+a(47===e?e:k())}function D(e){for(;!_(S());)k();return $(e,b)}var R="-ms-",I="-moz-",F="-webkit-",z="comm",H="rule",Z="decl";function L(e,t){for(var r="",n=d(e),o=0;o<n;o++)r+=t(e[o],o,e,t)||"";return r}function W(e,t,r,n){switch(e.type){case"@import":case Z:return e.return=e.return||e.value;case z:return"";case H:e.value=e.props.join(",")}return l(r=L(e.children,n))?e.return=e.value+"{"+r+"}":""}function q(e,t){switch(function(e,t){return(((t<<2^u(e,0))<<2^u(e,1))<<2^u(e,2))<<2^u(e,3)}(e,t)){case 5103:return F+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return F+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return F+e+I+e+R+e+e;case 6828:case 4268:return F+e+R+e+e;case 6165:return F+e+R+"flex-"+e+e;case 5187:return F+e+i(e,/(\w+).+(:[^]+)/,"-webkit-box-$1$2-ms-flex-$1$2")+e;case 5443:return F+e+R+"flex-item-"+i(e,/flex-|-self/,"")+e;case 4675:return F+e+R+"flex-line-pack"+i(e,/align-content|flex-|-self/,"")+e;case 5548:return F+e+R+i(e,"shrink","negative")+e;case 5292:return F+e+R+i(e,"basis","preferred-size")+e;case 6060:return F+"box-"+i(e,"-grow","")+F+e+R+i(e,"grow","positive")+e;case 4554:return F+i(e,/([^-])(transform)/g,"$1-webkit-$2")+e;case 6187:return i(i(i(e,/(zoom-|grab)/,F+"$1"),/(image-set)/,F+"$1"),e,"")+e;case 5495:case 3959:return i(e,/(image-set\([^]*)/,F+"$1$`$1");case 4968:return i(i(e,/(.+:)(flex-)?(.*)/,"-webkit-box-pack:$3-ms-flex-pack:$3"),/s.+-b[^;]+/,"justify")+F+e+e;case 4095:case 3583:case 4068:case 2532:return i(e,/(.+)-inline(.+)/,F+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(l(e)-1-t>6)switch(u(e,t+1)){case 109:if(45!==u(e,t+4))break;case 102:return i(e,/(.+:)(.+)-([^]+)/,"$1-webkit-$2-$3$1"+I+(108==u(e,t+3)?"$3":"$2-$3"))+e;case 115:return~s(e,"stretch")?q(i(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==u(e,t+1))break;case 6444:switch(u(e,l(e)-3-(~s(e,"!important")&&10))){case 107:return i(e,":",":"+F)+e;case 101:return i(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+F+(45===u(e,14)?"inline-":"")+"box$3$1"+F+"$2$3$1"+R+"$2box$3")+e}break;case 5936:switch(u(e,t+11)){case 114:return F+e+R+i(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return F+e+R+i(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return F+e+R+i(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return F+e+R+e+e}return e}function G(e){return A(U("",null,null,null,[""],e=j(e),0,[0],e))}function U(e,t,r,n,o,c,s,u,f){for(var d=0,m=0,y=s,h=0,b=0,v=0,g=1,w=1,x=1,$=0,_="",j=o,A=c,N=n,R=_;w;)switch(v=$,$=k()){case 34:case 39:case 91:case 40:R+=M($);break;case 9:case 10:case 13:case 32:R+=P(v);break;case 92:R+=E(C()-1,7);continue;case 47:switch(S()){case 42:case 47:p(X(T(k(),C()),t,r),f);break;default:R+="/"}break;case 123*g:u[d++]=l(R)*x;case 125*g:case 59:case 0:switch($){case 0:case 125:w=0;case 59+m:b>0&&l(R)-y&&p(b>32?Q(R+";",n,r,y-1):Q(i(R," ","")+";",n,r,y-2),f);break;case 59:R+=";";default:if(p(N=B(R,t,r,d,m,o,u,_,j=[],A=[],y),c),123===$)if(0===m)U(R,t,N,N,j,c,y,u,A);else switch(h){case 100:case 109:case 115:U(e,N,N,n&&p(B(e,N,N,0,0,o,u,_,o,j=[],y),A),o,A,y,u,n?j:A);break;default:U(R,N,N,N,[""],A,y,u,A)}}d=m=b=0,g=x=1,_=R="",y=s;break;case 58:y=1+l(R),b=v;default:if(g<1)if(123==$)--g;else if(125==$&&0==g++&&125==O())continue;switch(R+=a($),$*g){case 38:x=m>0?1:(R+="\f",-1);break;case 44:u[d++]=(l(R)-1)*x,x=1;break;case 64:45===S()&&(R+=M(k())),h=S(),m=l(_=R+=D(C())),$++;break;case 45:45===v&&2==l(R)&&(g=0)}}return c}function B(e,t,r,n,a,s,u,l,p,m,y){for(var h=a-1,b=0===a?s:[""],v=d(b),g=0,x=0,O=0;g<n;++g)for(var k=0,S=f(e,h+1,h=o(x=u[g])),C=e;k<v;++k)(C=c(x>0?b[k]+" "+S:i(S,/&\f/g,b[k])))&&(p[O++]=C);return w(e,t,r,0===a?H:l,p,m,y)}function X(e,t,r){return w(e,t,r,z,a(v),f(e,2,-2),0)}function Q(e,t,r,n){return w(e,t,r,Z,f(e,0,n),f(e,n+1,-1),n)}var V=function(e,t){return A(function(e,t){var r=-1,n=44;do{switch(_(n)){case 0:38===n&&12===S()&&(t[r]=1),e[r]+=D(b-1);break;case 2:e[r]+=M(n);break;case 4:if(44===n){e[++r]=58===S()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=a(n)}}while(n=k());return e}(j(e),t))},Y=new WeakMap,J=function(e){if("rule"===e.type&&e.parent&&e.length){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||Y.get(r))&&!n){Y.set(e,!0);for(var o=[],a=V(t,o),c=r.props,i=0,s=0;i<a.length;i++)for(var u=0;u<c.length;u++,s++)e.props[s]=o[i]?a[i].replace(/&\f/g,c[u]):c[u]+" "+a[i]}}},K=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},ee=[function(e,t,r,n){if(!e.return)switch(e.type){case Z:e.return=q(e.value,e.length);break;case"@keyframes":return L([x(i(e.value,"@","@"+F),e,"")],n);case H:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return L([x(i(t,/:(read-\w+)/,":-moz-$1"),e,"")],n);case"::placeholder":return L([x(i(t,/:(plac\w+)/,":-webkit-input-$1"),e,""),x(i(t,/:(plac\w+)/,":-moz-$1"),e,""),x(i(t,/:(plac\w+)/,R+"input-$1"),e,"")],n)}return""}))}}],te=function(e){var t=e.key;if("css"===t){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var o=e.stylisPlugins||ee;var a,c,i={},s=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)i[t[r]]=!0;s.push(e)}));var u,f,l=[W,(f=function(e){u.insert(e)},function(e){e.root||(e=e.return)&&f(e)})],p=function(e){var t=d(e);return function(r,n,o,a){for(var c="",i=0;i<t;i++)c+=e[i](r,n,o,a)||"";return c}}([J,K].concat(o,l));c=function(e,t,r,n){u=r,L(G(e?e+"{"+t.styles+"}":t.styles),p),n&&(m.inserted[t.name]=!0)};var m={key:t,sheet:new n.m({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend}),nonce:e.nonce,inserted:i,registered:{},insert:c};return m.sheet.hydrate(s),m}},4432:function(e,t,r){"use strict";r.d(t,{E:function(){return p},T:function(){return f},c:function(){return d},h:function(){return i},w:function(){return u}});var n=r(7378),o=r(5589),a=r(3211),c=r(872),i=Object.prototype.hasOwnProperty,s=(0,n.createContext)("undefined"!==typeof HTMLElement?(0,o.Z)({key:"css"}):null),u=(s.Provider,function(e){return(0,n.forwardRef)((function(t,r){var o=(0,n.useContext)(s);return e(t,o,r)}))}),f=(0,n.createContext)({});var l="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",d=function(e,t){var r={};for(var n in t)i.call(t,n)&&(r[n]=t[n]);return r[l]=e,r},p=u((function(e,t,r){var o=e.css;"string"===typeof o&&void 0!==t.registered[o]&&(o=t.registered[o]);var s=e[l],u=[o],d="";"string"===typeof e.className?d=(0,a.f)(t.registered,u,e.className):null!=e.className&&(d=e.className+" ");var p=(0,c.O)(u,void 0,"function"===typeof o||Array.isArray(o)?(0,n.useContext)(f):void 0);(0,a.M)(t,p,"string"===typeof s);d+=t.key+"-"+p.name;var m={};for(var y in e)i.call(e,y)&&"css"!==y&&y!==l&&(m[y]=e[y]);return m.ref=r,m.className=d,(0,n.createElement)(s,m)}))},43:function(e,t,r){"use strict";r.d(t,{xB:function(){return s},iv:function(){return u}});var n=r(7378),o=(r(5589),r(4432)),a=(r(5839),r(3211)),c=r(872),i=r(2506),s=(0,o.w)((function(e,t){var r=e.styles,s=(0,c.O)([r],void 0,"function"===typeof r||Array.isArray(r)?(0,n.useContext)(o.T):void 0),u=(0,n.useRef)();return(0,n.useLayoutEffect)((function(){var e=t.key+"-global",r=new i.m({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),n=!1,o=document.querySelector('style[data-emotion="'+e+" "+s.name+'"]');return t.sheet.tags.length&&(r.before=t.sheet.tags[0]),null!==o&&(n=!0,o.setAttribute("data-emotion",e),r.hydrate([o])),u.current=[r,n],function(){r.flush()}}),[t]),(0,n.useLayoutEffect)((function(){var e=u.current,r=e[0];if(e[1])e[1]=!1;else{if(void 0!==s.next&&(0,a.M)(t,s.next,!0),r.tags.length){var n=r.tags[r.tags.length-1].nextElementSibling;r.before=n,r.flush()}t.insert("",s,r,!1)}}),[t,s.name]),null}));function u(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,c.O)(t)}},7800:function(e,t,r){"use strict";r.d(t,{tZ:function(){return a},BX:function(){return c}});r(7378),r(5589);var n=r(4432),o=(r(5839),r(872),r(4246));o.Fragment;function a(e,t,r){return n.h.call(t,"css")?(0,o.jsx)(n.E,(0,n.c)(e,t),r):(0,o.jsx)(e,t,r)}function c(e,t,r){return n.h.call(t,"css")?(0,o.jsxs)(n.E,(0,n.c)(e,t),r):(0,o.jsxs)(e,t,r)}},872:function(e,t,r){"use strict";r.d(t,{O:function(){return m}});var n=function(e){for(var t,r=0,n=0,o=e.length;o>=4;++n,o-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(o){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)},o={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var a=/[A-Z]|^ms/g,c=/_EMO_([^_]+?)_([^]*?)_EMO_/g,i=function(e){return 45===e.charCodeAt(1)},s=function(e){return null!=e&&"boolean"!==typeof e},u=function(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}((function(e){return i(e)?e:e.replace(a,"-$&").toLowerCase()})),f=function(e,t){switch(e){case"animation":case"animationName":if("string"===typeof t)return t.replace(c,(function(e,t,r){return d={name:t,styles:r,next:d},t}))}return 1===o[e]||i(e)||"number"!==typeof t||0===t?t:t+"px"};function l(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return d={name:r.name,styles:r.styles,next:d},r.name;if(void 0!==r.styles){var n=r.next;if(void 0!==n)for(;void 0!==n;)d={name:n.name,styles:n.styles,next:d},n=n.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var o=0;o<r.length;o++)n+=l(e,t,r[o])+";";else for(var a in r){var c=r[a];if("object"!==typeof c)null!=t&&void 0!==t[c]?n+=a+"{"+t[c]+"}":s(c)&&(n+=u(a)+":"+f(a,c)+";");else if(!Array.isArray(c)||"string"!==typeof c[0]||null!=t&&void 0!==t[c[0]]){var i=l(e,t,c);switch(a){case"animation":case"animationName":n+=u(a)+":"+i+";";break;default:n+=a+"{"+i+"}"}}else for(var d=0;d<c.length;d++)s(c[d])&&(n+=u(a)+":"+f(a,c[d])+";")}return n}(e,t,r);case"function":if(void 0!==e){var o=d,a=r(e);return d=o,l(e,t,a)}break;case"string":}if(null==t)return r;var c=t[r];return void 0!==c?c:r}var d,p=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var m=function(e,t,r){if(1===e.length&&"object"===typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var o=!0,a="";d=void 0;var c=e[0];null==c||void 0===c.raw?(o=!1,a+=l(r,t,c)):a+=c[0];for(var i=1;i<e.length;i++)a+=l(r,t,e[i]),o&&(a+=c[i]);p.lastIndex=0;for(var s,u="";null!==(s=p.exec(a));)u+="-"+s[1];return{name:n(a)+u,styles:a,next:d}}},2506:function(e,t,r){"use strict";r.d(t,{m:function(){return n}});var n=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{r.insertRule(e,r.cssRules.length)}catch(n){0}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}()},3211:function(e,t,r){"use strict";r.d(t,{f:function(){return n},M:function(){return o}});function n(e,t,r){var n="";return r.split(" ").forEach((function(r){void 0!==e[r]?t.push(e[r]+";"):n+=r+" "})),n}var o=function(e,t,r){var n=e.key+"-"+t.name;if(!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles),void 0===e.inserted[t.name]){var o=t;do{e.insert(t===o?"."+n:"",o,e.sheet,!0);o=o.next}while(void 0!==o)}}},5839:function(e,t,r){"use strict";var n=r(9185),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};function s(e){return n.isMemo(e)?c:i[e.$$typeof]||o}i[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i[n.Memo]=c;var u=Object.defineProperty,f=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,r,n){if("string"!==typeof r){if(m){var o=p(r);o&&o!==m&&e(t,o,n)}var c=f(r);l&&(c=c.concat(l(r)));for(var i=s(t),y=s(r),h=0;h<c.length;++h){var b=c[h];if(!a[b]&&(!n||!n[b])&&(!y||!y[b])&&(!i||!i[b])){var v=d(r,b);try{u(t,b,v)}catch(g){}}}}return t}},2833:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(7800),o=r(7105),a=r(43),c=r(7378),i=r(8038);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f={name:"qaq2nv",styles:':root{--space-xxsmall:0.125rem;--space-xsmall:0.25rem;--space-small:0.375rem;--space-medium:0.5rem;--space-large:1rem;--space-xlarge:1.5rem;--space-xxlarge:6rem;--font-brand:"Inter", system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";--font-body:system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";--font-mono:ui-monospace, SFMono-Regular, SF Mono, Consolas, Liberation Mono, Menlo, monospace;--font-xxsmall:0.75rem;--font-xsmall:0.875rem;--font-small:1rem;--font-medium:1.25rem;--font-large:1.5rem;--font-xlarge:1.875rem;--font-xxlarge:2.625rem;--theme:light;--app-bg:#fff;--brand-bg:#166bff;--brand-bg-90:#2d7aff;--brand-bg--40:rgba(22, 107, 255, 0.6);--brand-text:#fff;--link:#166bff;--link-active:#0b55d5;--button-text:#fff;--focus:#8b5cf6;--border:#e2e8f0;--muted:#5F718C;--text:#47546b;--text-heading:#2d3748;--text-disabled:#a0aec0;--code:#47546b;--code-bg:#f6f7f9;--shadow:rgba(22, 107, 255, 0.1);--info:#0299e7;--info-bg:rgba(2, 153, 231, 0.1);--warning:#d97706;--warning-bg:rgba(217, 119, 6, 0.1);--success:#22c55e;--success-bg:rgba(34, 197, 94, 0.1);--danger:#dc2626;--danger-bg:rgba(220, 38, 38, 0.1);--danger-90:#e03c3c;--danger--40:rgba(220, 38, 38, 0.6);--alert-text:#47546b;--grad1-1:#166bff;--grad1-2:#22d3ee;--grad2-1:#10b981;--grad2-2:#22d3ee;--grad3-1:#6373f1;--grad3-2:#da5a99;--grad4-1:#f87171;--grad4-2:#f59e0b;--grad5-1:#ec4899;--grad5-2:#f87171;}*, ::before, ::after{box-sizing:border-box;}html, body{background:var(--app-bg);color:var(--text);height:100%;font-family:var(--font-body);padding:0;margin:0;-webkit-text-size-adjust:none;}blockquote, dd, dl, figure, h1, h2, h3, h4, h5, h6, hr, p, pre{margin:0;}a{text-decoration:none;color:var(--link);}pre{line-height:1.4;font-size:16px;}:focus:not(.focus-visible){outline:none;}*:focus-visible, input:focus-visible, button:focus-visible, [type="submit"]:focus-visible{outline:1px dashed var(--focus);outline-offset:3px;}input:focus-visible{outline-style:solid;outline-width:3px;outline-offset:0;}#__next{min-height:100%;display:grid;grid-template-rows:auto 1fr;grid-template-areas:"header" "main" "footer";grid-template-columns:minmax(0, 1fr);}'};function l(e){var t=e.Component,r=e.pageProps;return(0,n.BX)(c.Fragment,{children:[(0,n.tZ)(a.xB,{styles:f}),(0,n.tZ)(i.default,{children:(0,n.tZ)("meta",{name:"viewport",content:"width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"})}),(0,n.tZ)(t,u({},r))]})}},7529:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var o=((n=r(7378))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=o},2498:function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(o.default.useContext(a.AmpStateContext))};var n,o=(n=r(7378))&&n.__esModule?n:{default:n},a=r(7529);function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,o=void 0!==n&&n,a=e.hasQuery,c=void 0!==a&&a;return r||o&&c}},5639:function(e,t,r){"use strict";var n=r(217);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.__esModule=!0,t.defaultHead=d,t.default=void 0;var a,c=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(7378)),i=(a=r(1062))&&a.__esModule?a:{default:a},s=r(7529),u=r(6287),f=r(2498);function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[c.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(c.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===c.default.Fragment?e.concat(c.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var m=["name","httpEquiv","charSet","itemProp"];function y(e,t){return e.reduce((function(e,t){var r=c.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(p,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(o){var a=!0,c=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){c=!0;var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var s=0,u=m.length;s<u;s++){var f=m[s];if(o.props.hasOwnProperty(f))if("charSet"===f)r.has(f)?a=!1:r.add(f);else{var l=o.props[f],d=n[f]||new Set;"name"===f&&c||!d.has(l)?(d.add(l),n[f]=d):a=!1}}}return a}}()).reverse().map((function(e,r){var a=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var i=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return i["data-href"]=i.href,i.href=void 0,i["data-optimized-fonts"]=!0,c.default.cloneElement(e,i)}return c.default.cloneElement(e,{key:a})}))}var h=function(e){var t=e.children,r=(0,c.useContext)(s.AmpStateContext),n=(0,c.useContext)(u.HeadManagerContext);return c.default.createElement(i.default,{reduceComponentsToState:y,headManager:n,inAmpMode:(0,f.isInAmpMode)(r)},t)};t.default=h},1062:function(e,t,r){"use strict";var n=r(5169),o=r(3190),a=r(2972),c=(r(7261),r(7242)),i=r(9172),s=r(8809);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=s(e);if(t){var o=s(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return i(this,r)}}t.__esModule=!0,t.default=void 0;var f=r(7378),l=function(e){c(r,e);var t=u(r);function r(e){var a;return o(this,r),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(n(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(f.Component);t.default=l},1975:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(2833)}])},8038:function(e,t,r){e.exports=r(5639)},8242:function(e,t,r){var n=r(8246);e.exports=function(e){if(Array.isArray(e))return n(e)}},217:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},7105:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,{Z:function(){return n}})},6118:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},3569:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},5169:function(e,t,r){var n=r(8242),o=r(6118),a=r(4009),c=r(3569);e.exports=function(e){return n(e)||o(e)||a(e)||c()}},8702:function(e,t){"use strict";var r="function"===typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,i=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,u=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,l=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,y=r?Symbol.for("react.memo"):60115,h=r?Symbol.for("react.lazy"):60116,b=r?Symbol.for("react.block"):60121,v=r?Symbol.for("react.fundamental"):60117,g=r?Symbol.for("react.responder"):60118,w=r?Symbol.for("react.scope"):60119;function x(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case f:case l:case a:case i:case c:case p:return e;default:switch(e=e&&e.$$typeof){case u:case d:case h:case y:case s:return e;default:return t}}case o:return t}}}function O(e){return x(e)===l}t.AsyncMode=f,t.ConcurrentMode=l,t.ContextConsumer=u,t.ContextProvider=s,t.Element=n,t.ForwardRef=d,t.Fragment=a,t.Lazy=h,t.Memo=y,t.Portal=o,t.Profiler=i,t.StrictMode=c,t.Suspense=p,t.isAsyncMode=function(e){return O(e)||x(e)===f},t.isConcurrentMode=O,t.isContextConsumer=function(e){return x(e)===u},t.isContextProvider=function(e){return x(e)===s},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return x(e)===d},t.isFragment=function(e){return x(e)===a},t.isLazy=function(e){return x(e)===h},t.isMemo=function(e){return x(e)===y},t.isPortal=function(e){return x(e)===o},t.isProfiler=function(e){return x(e)===i},t.isStrictMode=function(e){return x(e)===c},t.isSuspense=function(e){return x(e)===p},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===a||e===l||e===i||e===c||e===p||e===m||"object"===typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===y||e.$$typeof===s||e.$$typeof===u||e.$$typeof===d||e.$$typeof===v||e.$$typeof===g||e.$$typeof===w||e.$$typeof===b)},t.typeOf=x},9185:function(e,t,r){"use strict";e.exports=r(8702)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1975),t(2295)}));var r=e.O();_N_E=r}]);