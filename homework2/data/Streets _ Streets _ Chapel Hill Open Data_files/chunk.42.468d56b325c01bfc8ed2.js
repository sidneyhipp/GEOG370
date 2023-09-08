(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[42],{2651:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return g})),n.d(e,"c",(function(){return p})),n.d(e,"d",(function(){return m})),n.d(e,"e",(function(){return A})),n.d(e,"f",(function(){return o})),n.d(e,"g",(function(){return v})),n.d(e,"h",(function(){return r}))
var o="object"==typeof t&&t&&t.Object===Object&&t,i="object"==typeof self&&self&&self.Object===Object&&self,r=o||i||Function("return this")(),a=r.Symbol,l=Object.prototype,s=l.hasOwnProperty,c=l.toString,f=a?a.toStringTag:void 0,u=Object.prototype.toString,d=a?a.toStringTag:void 0
function p(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":d&&d in Object(t)?function(t){var e=s.call(t,f),n=t[f]
try{t[f]=void 0
var o=!0}catch(t){}var i=c.call(t)
return o&&(e?t[f]=n:delete t[f]),i}(t):function(t){return u.call(t)}(t)}function m(t){return null!=t&&"object"==typeof t}function g(t){return"symbol"==typeof t||m(t)&&"[object Symbol]"==p(t)}var h=/\s/,y=/^\s+/
function v(t){var e=typeof t
return null!=t&&("object"==e||"function"==e)}var w=/^[-+]0x[0-9a-f]+$/i,x=/^0b[01]+$/i,b=/^0o[0-7]+$/i,E=parseInt
function T(t){if("number"==typeof t)return t
if(g(t))return NaN
if(v(t)){var e="function"==typeof t.valueOf?t.valueOf():t
t=v(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t
t=function(t){return t?t.slice(0,function(t){for(var e=t.length;e--&&h.test(t.charAt(e)););return e}(t)+1).replace(y,""):t}(t)
var n=x.test(t)
return n||b.test(t)?E(t.slice(2),n?2:8):w.test(t)?NaN:+t}var L=function(){return r.Date.now()},R=Math.max,P=Math.min
function A(t,e,n){var o,i,r,a,l,s,c=0,f=!1,u=!1,d=!0
if("function"!=typeof t)throw new TypeError("Expected a function")
function p(e){var n=o,r=i
return o=i=void 0,c=e,a=t.apply(r,n)}function m(t){return c=t,l=setTimeout(h,e),f?p(t):a}function g(t){var n=t-s
return void 0===s||n>=e||n<0||u&&t-c>=r}function h(){var t=L()
if(g(t))return y(t)
l=setTimeout(h,function(t){var n=e-(t-s)
return u?P(n,r-(t-c)):n}(t))}function y(t){return l=void 0,d&&o?p(t):(o=i=void 0,a)}function w(){var t=L(),n=g(t)
if(o=arguments,i=this,s=t,n){if(void 0===l)return m(s)
if(u)return clearTimeout(l),l=setTimeout(h,e),p(s)}return void 0===l&&(l=setTimeout(h,e)),a}return e=T(e)||0,v(n)&&(f=!!n.leading,r=(u="maxWait"in n)?R(T(n.maxWait)||0,e):r,d="trailing"in n?!!n.trailing:d),w.cancel=function(){void 0!==l&&clearTimeout(l),c=0,o=s=i=l=void 0},w.flush=function(){return void 0===l?a:y(L())},w}}).call(this,n(50))},2806:function(t,e,n){"use strict"
n.d(e,"a",(function(){return pt})),n.d(e,"b",(function(){return Et})),n.d(e,"c",(function(){return Tt})),n.d(e,"d",(function(){return bt})),n.d(e,"e",(function(){return gt})),n.d(e,"f",(function(){return yt})),n.d(e,"g",(function(){return Lt}))
var o=n(1217),i=n(1407),r=n(2651)
function a(t){return t.split("-")[1]}function l(t){return"y"===t?"height":"width"}function s(t){return t.split("-")[0]}function c(t){return["top","bottom"].includes(s(t))?"x":"y"}function f(t,e,n){let{reference:o,floating:i}=t
const r=o.x+o.width/2-i.width/2,f=o.y+o.height/2-i.height/2,u=c(e),d=l(u),p=o[d]/2-i[d]/2,m="x"===u
let g
switch(s(e)){case"top":g={x:r,y:o.y-i.height}
break
case"bottom":g={x:r,y:o.y+o.height}
break
case"right":g={x:o.x+o.width,y:f}
break
case"left":g={x:o.x-i.width,y:f}
break
default:g={x:o.x,y:o.y}}switch(a(e)){case"start":g[u]-=p*(n&&m?-1:1)
break
case"end":g[u]+=p*(n&&m?-1:1)}return g}function u(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function d(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function p(t,e){var n
void 0===e&&(e={})
const{x:o,y:i,platform:r,rects:a,elements:l,strategy:s}=t,{boundary:c="clippingAncestors",rootBoundary:f="viewport",elementContext:p="floating",altBoundary:m=!1,padding:g=0}=e,h=u(g),y=l[m?"floating"===p?"reference":"floating":p],v=d(await r.getClippingRect({element:null==(n=await(null==r.isElement?void 0:r.isElement(y)))||n?y:y.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(l.floating)),boundary:c,rootBoundary:f,strategy:s})),w="floating"===p?{...a.floating,x:o,y:i}:a.reference,x=await(null==r.getOffsetParent?void 0:r.getOffsetParent(l.floating)),b=await(null==r.isElement?void 0:r.isElement(x))&&await(null==r.getScale?void 0:r.getScale(x))||{x:1,y:1},E=d(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:w,offsetParent:x,strategy:s}):w)
return{top:(v.top-E.top+h.top)/b.y,bottom:(E.bottom-v.bottom+h.bottom)/b.y,left:(v.left-E.left+h.left)/b.x,right:(E.right-v.right+h.right)/b.x}}const m=Math.min,g=Math.max
function h(t,e,n){return g(t,m(e,n))}const y=["top","right","bottom","left"],v=y.reduce((t,e)=>t.concat(e,e+"-start",e+"-end"),[]),w={left:"right",right:"left",bottom:"top",top:"bottom"}
function x(t){return t.replace(/left|right|bottom|top/g,t=>w[t])}function b(t,e,n){void 0===n&&(n=!1)
const o=a(t),i=c(t),r=l(i)
let s="x"===i?o===(n?"end":"start")?"right":"left":"start"===o?"bottom":"top"
return e.reference[r]>e.floating[r]&&(s=x(s)),{main:s,cross:x(s)}}const E={start:"end",end:"start"}
function T(t){return t.replace(/start|end/g,t=>E[t])}const L=function(t){return void 0===t&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,o,i
const{rects:r,middlewareData:l,placement:c,platform:f,elements:u}=e,{crossAxis:d=!1,alignment:m,allowedPlacements:g=v,autoAlignment:h=!0,...y}=t,w=void 0!==m||g===v?function(t,e,n){return(t?[...n.filter(e=>a(e)===t),...n.filter(e=>a(e)!==t)]:n.filter(t=>s(t)===t)).filter(n=>!t||a(n)===t||!!e&&T(n)!==n)}(m||null,h,g):g,x=await p(e,y),E=(null==(n=l.autoPlacement)?void 0:n.index)||0,L=w[E]
if(null==L)return{}
const{main:R,cross:P}=b(L,r,await(null==f.isRTL?void 0:f.isRTL(u.floating)))
if(c!==L)return{reset:{placement:w[0]}}
const A=[x[s(L)],x[R],x[P]],O=[...(null==(o=l.autoPlacement)?void 0:o.overflows)||[],{placement:L,overflows:A}],D=w[E+1]
if(D)return{data:{index:E+1,overflows:O},reset:{placement:D}}
const j=O.map(t=>{const e=a(t.placement)
return[t.placement,e&&d?t.overflows.slice(0,2).reduce((t,e)=>t+e,0):t.overflows[0],t.overflows]}).sort((t,e)=>t[1]-e[1]),C=(null==(i=j.filter(t=>t[2].slice(0,a(t[0])?2:3).every(t=>t<=0))[0])?void 0:i[0])||j[0][0]
return C!==c?{data:{index:E+1,overflows:O},reset:{placement:C}}:{}}}},R=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var n
const{placement:o,middlewareData:i,rects:r,initialPlacement:l,platform:c,elements:f}=e,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:m,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:y=!0,...v}=t,w=s(o),E=s(l)===l,L=await(null==c.isRTL?void 0:c.isRTL(f.floating)),R=m||(E||!y?[x(l)]:function(t){const e=x(t)
return[T(t),e,T(e)]}(l))
m||"none"===h||R.push(...function(t,e,n,o){const i=a(t)
let r=function(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],a=["bottom","top"]
switch(t){case"top":case"bottom":return n?e?i:o:e?o:i
case"left":case"right":return e?r:a
default:return[]}}(s(t),"start"===n,o)
return i&&(r=r.map(t=>t+"-"+i),e&&(r=r.concat(r.map(T)))),r}(l,y,h,L))
const P=[l,...R],A=await p(e,v),O=[]
let D=(null==(n=i.flip)?void 0:n.overflows)||[]
if(u&&O.push(A[w]),d){const{main:t,cross:e}=b(o,r,L)
O.push(A[t],A[e])}if(D=[...D,{placement:o,overflows:O}],!O.every(t=>t<=0)){var j,C
const t=((null==(j=i.flip)?void 0:j.index)||0)+1,e=P[t]
if(e)return{data:{index:t,overflows:D},reset:{placement:e}}
let n=null==(C=D.filter(t=>t.overflows[0]<=0).sort((t,e)=>t.overflows[1]-e.overflows[1])[0])?void 0:C.placement
if(!n)switch(g){case"bestFit":{var k
const t=null==(k=D.map(t=>[t.placement,t.overflows.filter(t=>t>0).reduce((t,e)=>t+e,0)]).sort((t,e)=>t[1]-e[1])[0])?void 0:k[0]
t&&(n=t)
break}case"initialPlacement":n=l}if(o!==n)return{reset:{placement:n}}}return{}}}}
function P(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function A(t){return y.some(e=>t[e]>=0)}const O=function(t){return void 0===t&&(t={}),{name:"hide",options:t,async fn(e){const{strategy:n="referenceHidden",...o}=t,{rects:i}=e
switch(n){case"referenceHidden":{const t=P(await p(e,{...o,elementContext:"reference"}),i.reference)
return{data:{referenceHiddenOffsets:t,referenceHidden:A(t)}}}case"escaped":{const t=P(await p(e,{...o,altBoundary:!0}),i.floating)
return{data:{escapedOffsets:t,escaped:A(t)}}}default:return{}}}}},D=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){const{x:n,y:o}=e,i=await async function(t,e){const{placement:n,platform:o,elements:i}=t,r=await(null==o.isRTL?void 0:o.isRTL(i.floating)),l=s(n),f=a(n),u="x"===c(n),d=["left","top"].includes(l)?-1:1,p=r&&u?-1:1,m="function"==typeof e?e(t):e
let{mainAxis:g,crossAxis:h,alignmentAxis:y}="number"==typeof m?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...m}
return f&&"number"==typeof y&&(h="end"===f?-1*y:y),u?{x:h*p,y:g*d}:{x:g*d,y:h*p}}(e,t)
return{x:n+i.x,y:o+i.y,data:i}}}}
function j(t){var e
return(null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function C(t){return j(t).getComputedStyle(t)}const k=Math.min,S=Math.max,N=Math.round
function F(t){const e=C(t)
let n=parseFloat(e.width),o=parseFloat(e.height)
const i=t.offsetWidth,r=t.offsetHeight,a=N(n)!==i||N(o)!==r
return a&&(n=i,o=r),{width:n,height:o,fallback:a}}function W(t){return $(t)?(t.nodeName||"").toLowerCase():""}let B
function M(){if(B)return B
const t=navigator.userAgentData
return t&&Array.isArray(t.brands)?(B=t.brands.map(t=>t.brand+"/"+t.version).join(" "),B):navigator.userAgent}function H(t){return t instanceof j(t).HTMLElement}function V(t){return t instanceof j(t).Element}function $(t){return t instanceof j(t).Node}function _(t){return"undefined"!=typeof ShadowRoot&&(t instanceof j(t).ShadowRoot||t instanceof ShadowRoot)}function z(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=C(t)
return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function I(t){return["table","td","th"].includes(W(t))}function U(t){const e=/firefox/i.test(M()),n=C(t),o=n.backdropFilter||n.WebkitBackdropFilter
return"none"!==n.transform||"none"!==n.perspective||!!o&&"none"!==o||e&&"filter"===n.willChange||e&&!!n.filter&&"none"!==n.filter||["transform","perspective"].some(t=>n.willChange.includes(t))||["paint","layout","strict","content"].some(t=>{const e=n.contain
return null!=e&&e.includes(t)})}function J(){return/^((?!chrome|android).)*safari/i.test(M())}function X(t){return["html","body","#document"].includes(W(t))}function Y(t){return V(t)?t:t.contextElement}const q={x:1,y:1}
function G(t){const e=Y(t)
if(!H(e))return q
const n=e.getBoundingClientRect(),{width:o,height:i,fallback:r}=F(e)
let a=(r?N(n.width):n.width)/o,l=(r?N(n.height):n.height)/i
return a&&Number.isFinite(a)||(a=1),l&&Number.isFinite(l)||(l=1),{x:a,y:l}}function K(t,e,n,o){var i,r
void 0===e&&(e=!1),void 0===n&&(n=!1)
const a=t.getBoundingClientRect(),l=Y(t)
let s=q
e&&(o?V(o)&&(s=G(o)):s=G(t))
const c=l?j(l):window,f=J()&&n
let u=(a.left+(f&&(null==(i=c.visualViewport)?void 0:i.offsetLeft)||0))/s.x,d=(a.top+(f&&(null==(r=c.visualViewport)?void 0:r.offsetTop)||0))/s.y,p=a.width/s.x,m=a.height/s.y
if(l){const t=j(l),e=o&&V(o)?j(o):o
let n=t.frameElement
for(;n&&o&&e!==t;){const t=G(n),e=n.getBoundingClientRect(),o=getComputedStyle(n)
e.x+=(n.clientLeft+parseFloat(o.paddingLeft))*t.x,e.y+=(n.clientTop+parseFloat(o.paddingTop))*t.y,u*=t.x,d*=t.y,p*=t.x,m*=t.y,u+=e.x,d+=e.y,n=j(n).frameElement}}return{width:p,height:m,top:d,right:u+p,bottom:d+m,left:u,x:u,y:d}}function Q(t){return(($(t)?t.ownerDocument:t.document)||window.document).documentElement}function Z(t){return V(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function tt(t){return K(Q(t)).left+Z(t).scrollLeft}function et(t){if("html"===W(t))return t
const e=t.assignedSlot||t.parentNode||_(t)&&t.host||Q(t)
return _(e)?e.host:e}function nt(t,e){var n
void 0===e&&(e=[])
const o=function t(e){const n=et(e)
return X(n)?n.ownerDocument.body:H(n)&&z(n)?n:t(n)}(t),i=o===(null==(n=t.ownerDocument)?void 0:n.body),r=j(o)
return i?e.concat(r,r.visualViewport||[],z(o)?o:[]):e.concat(o,nt(o))}function ot(t,e,n){let o
if("viewport"===e)o=function(t,e){const n=j(t),o=Q(t),i=n.visualViewport
let r=o.clientWidth,a=o.clientHeight,l=0,s=0
if(i){r=i.width,a=i.height
const t=J();(!t||t&&"fixed"===e)&&(l=i.offsetLeft,s=i.offsetTop)}return{width:r,height:a,x:l,y:s}}(t,n)
else if("document"===e)o=function(t){const e=Q(t),n=Z(t),o=t.ownerDocument.body,i=S(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=S(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight)
let a=-n.scrollLeft+tt(t)
const l=-n.scrollTop
return"rtl"===C(o).direction&&(a+=S(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:a,y:l}}(Q(t))
else if(V(e))o=function(t,e){const n=K(t,!0,"fixed"===e),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=H(t)?G(t):{x:1,y:1}
return{width:t.clientWidth*r.x,height:t.clientHeight*r.y,x:i*r.x,y:o*r.y}}(e,n)
else{const n={...e}
if(J()){var i,r
const e=j(t)
n.x-=(null==(i=e.visualViewport)?void 0:i.offsetLeft)||0,n.y-=(null==(r=e.visualViewport)?void 0:r.offsetTop)||0}o=n}return d(o)}function it(t,e){return H(t)&&"fixed"!==C(t).position?e?e(t):t.offsetParent:null}function rt(t,e){const n=j(t)
let o=it(t,e)
for(;o&&I(o)&&"static"===C(o).position;)o=it(o,e)
return o&&("html"===W(o)||"body"===W(o)&&"static"===C(o).position&&!U(o))?n:o||function(t){let e=et(t)
for(;H(e)&&!X(e);){if(U(e))return e
e=et(e)}return null}(t)||n}function at(t,e,n){const o=H(e),i=Q(e),r=K(t,!0,"fixed"===n,e)
let a={scrollLeft:0,scrollTop:0}
const l={x:0,y:0}
if(o||!o&&"fixed"!==n)if(("body"!==W(e)||z(i))&&(a=Z(e)),H(e)){const t=K(e,!0)
l.x=t.x+e.clientLeft,l.y=t.y+e.clientTop}else i&&(l.x=tt(i))
return{x:r.left+a.scrollLeft-l.x,y:r.top+a.scrollTop-l.y,width:r.width,height:r.height}}const lt={getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t
const r=[..."clippingAncestors"===n?function(t,e){const n=e.get(t)
if(n)return n
let o=nt(t).filter(t=>V(t)&&"body"!==W(t)),i=null
const r="fixed"===C(t).position
let a=r?et(t):t
for(;V(a)&&!X(a);){const t=C(a),e=U(a)
"fixed"===t.position?i=null:(r?e||i:e||"static"!==t.position||!i||!["absolute","fixed"].includes(i.position))?i=t:o=o.filter(t=>t!==a),a=et(a)}return e.set(t,o),o}(e,this._c):[].concat(n),o],a=r[0],l=r.reduce((t,n)=>{const o=ot(e,n,i)
return t.top=S(o.top,t.top),t.right=k(o.right,t.right),t.bottom=k(o.bottom,t.bottom),t.left=S(o.left,t.left),t},ot(e,a,i))
return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:n,strategy:o}=t
const i=H(n),r=Q(n)
if(n===r)return e
let a={scrollLeft:0,scrollTop:0},l={x:1,y:1}
const s={x:0,y:0}
if((i||!i&&"fixed"!==o)&&(("body"!==W(n)||z(r))&&(a=Z(n)),H(n))){const t=K(n)
l=G(n),s.x=t.x+n.clientLeft,s.y=t.y+n.clientTop}return{width:e.width*l.x,height:e.height*l.y,x:e.x*l.x-a.scrollLeft*l.x+s.x,y:e.y*l.y-a.scrollTop*l.y+s.y}},isElement:V,getDimensions:function(t){return H(t)?F(t):t.getBoundingClientRect()},getOffsetParent:rt,getDocumentElement:Q,getScale:G,async getElementRects(t){let{reference:e,floating:n,strategy:o}=t
const i=this.getOffsetParent||rt,r=this.getDimensions
return{reference:at(e,await i(n),o),floating:{x:0,y:0,...await r(n)}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>"rtl"===C(t).direction}
function st(t,e,n,o){void 0===o&&(o={})
const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:a=!0,animationFrame:l=!1}=o,s=i&&!l,c=s||r?[...V(t)?nt(t):t.contextElement?nt(t.contextElement):[],...nt(e)]:[]
c.forEach(t=>{s&&t.addEventListener("scroll",n,{passive:!0}),r&&t.addEventListener("resize",n)})
let f,u=null
if(a){let o=!0
u=new ResizeObserver(()=>{o||n(),o=!1}),V(t)&&!l&&u.observe(t),V(t)||!t.contextElement||l||u.observe(t.contextElement),u.observe(e)}let d=l?K(t):null
return l&&function e(){const o=K(t)
!d||o.x===d.x&&o.y===d.y&&o.width===d.width&&o.height===d.height||n(),d=o,f=requestAnimationFrame(e)}(),n(),()=>{var t
c.forEach(t=>{s&&t.removeEventListener("scroll",n),r&&t.removeEventListener("resize",n)}),null==(t=u)||t.disconnect(),u=null,l&&cancelAnimationFrame(f)}}const ct=(t,e,n)=>{const o=new Map,i={platform:lt,...n},r={...i.platform,_c:o}
return(async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:a}=n,l=r.filter(Boolean),s=await(null==a.isRTL?void 0:a.isRTL(e))
let c=await a.getElementRects({reference:t,floating:e,strategy:i}),{x:u,y:d}=f(c,o,s),p=o,m={},g=0
for(let n=0;n<l.length;n++){const{name:r,fn:h}=l[n],{x:y,y:v,data:w,reset:x}=await h({x:u,y:d,initialPlacement:o,placement:p,strategy:i,middlewareData:m,rects:c,platform:a,elements:{reference:t,floating:e}})
u=null!=y?y:u,d=null!=v?v:d,m={...m,[r]:{...m[r],...w}},x&&g<=50&&(g++,"object"==typeof x&&(x.placement&&(p=x.placement),x.rects&&(c=!0===x.rects?await a.getElementRects({reference:t,floating:e,strategy:i}):x.rects),({x:u,y:d}=f(c,p,s))),n=-1)}return{x:u,y:d,placement:p,strategy:i,middlewareData:m}})(t,e,{...i,platform:r})},ft={floatingUINonChromiumPositioningFix:!0,...globalThis.calciteComponentsConfig},ut=async function(){function t(){return navigator.userAgentData}if(o.a.isBrowser&&ft.floatingUINonChromiumPositioningFix&&(/firefox|safari/i.test(function(){const e=t()
return null!=e&&e.brands?e.brands.map(({brand:t,version:e})=>`${t}/${e}`).join(" "):navigator.userAgent}())||function(){const e=t()
return null!=e&&e.brands?!!e.brands.find(({brand:t,version:e})=>("Google Chrome"===t||"Chromium"===t)&&Number(e)>=109):!!navigator.userAgent.split(" ").find(t=>{const[e,n]=t.split("/")
return"Chrome"===e&&parseInt(n)>=109})}())){const{offsetParent:t}=await n.e(767).then(n.bind(null,2919)),e=lt.getOffsetParent
lt.getOffsetParent=n=>e(n,t)}}(),dt=["top","bottom","right","left","top-start","top-end","bottom-start","bottom-end","right-start","right-end","left-start","left-end"],pt={animation:"calcite-floating-ui-anim",animationActive:"calcite-floating-ui-anim--active"}
function mt({placement:t,flipDisabled:e,flipPlacements:n,offsetDistance:o,offsetSkidding:i,arrowEl:r,type:f}){const d=[(void 0===m&&(m={}),{name:"shift",options:m,async fn(t){const{x:e,y:n,placement:o}=t,{mainAxis:i=!0,crossAxis:r=!1,limiter:a={fn:t=>{let{x:e,y:n}=t
return{x:e,y:n}}},...l}=m,f={x:e,y:n},u=await p(t,l),d=c(s(o)),g="x"===d?"y":"x"
let y=f[d],v=f[g]
if(i){const t="y"===d?"bottom":"right"
y=h(y+u["y"===d?"top":"left"],y,y-u[t])}if(r){const t="y"===g?"bottom":"right"
v=h(v+u["y"===g?"top":"left"],v,v-u[t])}const w=a.fn({...t,[d]:y,[g]:v})
return{...w,data:{x:w.x-e,y:w.y-n}}}}),O()]
var m
if("menu"===f)return[...d,R({fallbackPlacements:n||["top-start","top","top-end","bottom-start","bottom","bottom-end"]})]
if("popover"===f||"tooltip"===f){const s=[...d,D({mainAxis:"number"==typeof o?o:0,crossAxis:"number"==typeof i?i:0})]
return"auto"===t||"auto-start"===t||"auto-end"===t?s.push(L({alignment:"auto-start"===t?"start":"auto-end"===t?"end":null})):e||s.push(R(n?{fallbackPlacements:n}:{})),r&&s.push((t=>({name:"arrow",options:t,async fn(e){const{element:n,padding:o=0}=t||{},{x:i,y:r,placement:s,rects:f,platform:d}=e
if(null==n)return{}
const p=u(o),m={x:i,y:r},g=c(s),y=l(g),v=await d.getDimensions(n),w="y"===g?"top":"left",x="y"===g?"bottom":"right",b=f.reference[y]+f.reference[g]-m[g]-f.floating[y],E=m[g]-f.reference[g],T=await(null==d.getOffsetParent?void 0:d.getOffsetParent(n))
let L=T?"y"===g?T.clientHeight||0:T.clientWidth||0:0
0===L&&(L=f.floating[y])
const R=b/2-E/2,P=p[w],A=L-v[y]-p[x],O=L/2-v[y]/2+R,D=h(P,O,A),j=null!=a(s)&&O!=D&&f.reference[y]/2-(O<P?p[w]:p[x])-v[y]/2<0
return{[g]:m[g]-(j?O<P?P-O:A-O:0),data:{[g]:D,centerOffset:O-D}}}}))({element:r})),s}return[]}function gt(t,e){const n=t.filter(t=>dt.includes(t))
return n.length!==t.length&&console.warn(`${e.tagName}: Invalid value found in: flipPlacements. Try any of these: ${dt.map(t=>`"${t}"`).join(", ").trim()}`,{el:e}),n}function ht(t,e){const n=["left","right"]
return"rtl"===Object(i.e)(t)&&n.reverse(),e.replace(/leading/gi,n[0]).replace(/trailing/gi,n[1])}async function yt(t,e,n=!1){if(t.open)return n?vt(e):wt(e)}const vt=Object(r.e)(wt,100,{leading:!0,maxWait:100})
async function wt({referenceEl:t,floatingEl:e,overlayPositioning:n="absolute",placement:o,flipDisabled:i,flipPlacements:r,offsetDistance:a,offsetSkidding:l,includeArrow:s=!1,arrowEl:c,type:f}){var u
if(!t||!e||s&&!c)return null
await ut
const{x:d,y:p,placement:m,strategy:g,middlewareData:h}=await ct(t,e,{strategy:n,placement:"auto"===o||"auto-start"===o||"auto-end"===o?void 0:ht(e,o),middleware:mt({placement:o,flipDisabled:i,flipPlacements:r,offsetDistance:a,offsetSkidding:l,arrowEl:c,type:f})})
if(null!=h&&h.arrow){const{x:t,y:e}=h.arrow
Object.assign(c.style,{left:null!=t?t+"px":"",top:null!=e?e+"px":""})}const y=(null==h||null==(u=h.hide)?void 0:u.referenceHidden)?"hidden":null,v=y?"none":null
e.setAttribute("data-placement",m)
const w=`translate(${Math.round(d)}px,${Math.round(p)}px)`
Object.assign(e.style,{visibility:y,pointerEvents:v,position:g,top:"0",left:"0",transform:w})}const xt=new WeakMap
function bt(t,e,n){if(!n||!e)return
Et(t,e,n)
const i=t.overlayPositioning
Object.assign(n.style,{visibility:"hidden",pointerEvents:"none",position:i}),"absolute"===i&&At(n)
const r=o.a.isBrowser?st:(t,e,n)=>(n(),()=>{})
xt.set(t,r(e,n,()=>t.reposition()))}function Et(t,e,n){if(!n||!e)return
Rt(n).removeEventListener("transitionend",Pt)
const o=xt.get(t)
o&&o(),xt.delete(t)}const Tt=Math.ceil(Math.hypot(4,4))
function Lt(t){t&&"absolute"===t.style.position&&Rt(t).addEventListener("transitionend",Pt)}function Rt(t){return t.shadowRoot||t}function Pt(t){const e=t.target
if("opacity"===t.propertyName&&e.classList.contains(pt.animation)){const t=function(t){return Object(i.l)(t,"[data-placement]")}(e)
At(t),Rt(t).removeEventListener("transitionend",Pt)}}function At(t){t.style.transform="",t.style.top="0",t.style.left="0"}},2807:function(t,e,n){"use strict"
n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return l})),n(1217)
const o=new WeakMap
function i(t){t.propertyName===this.openTransitionProp&&t.target===this.transitionEl&&(this.open?this.onBeforeOpen():this.onBeforeClose())}function r(t){t.propertyName===this.openTransitionProp&&t.target===this.transitionEl&&(this.open?this.onOpen():this.onClose())}function a(t){if(l(t),t.transitionEl){const e=i.bind(t),n=r.bind(t)
o.set(t,[t.transitionEl,e,n]),t.transitionEl.addEventListener("transitionstart",e),t.transitionEl.addEventListener("transitionend",n)}}function l(t){if(!o.has(t))return
const[e,n,i]=o.get(t)
e.removeEventListener("transitionstart",n),e.removeEventListener("transitionend",i),o.delete(t)}}}])
