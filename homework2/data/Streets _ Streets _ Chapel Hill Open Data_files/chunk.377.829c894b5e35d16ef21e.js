(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[377],{1535:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o}))
var a=n(110)
const l=new Map
async function o(e){const t=r(e)
let n=l.get(t)
if(n)return n
const o=new FontFace(e.family,`url('${a.default.fontsUrl}/woff2/${t}.woff2') format('woff2')`),i=document.fonts
return i.has(o)&&"loading"===o.status?o.loaded:(n=o.load(),l.set(t,n),i.add(o),n)}function i(e){if(!e)return"arial-unicode-ms"
const t=e.toLowerCase().split(" ").join("-")
switch(t){case"serif":return"noto-serif"
case"sans-serif":return"arial-unicode-ms"
case"monospace":return"ubuntu-mono"
case"fantasy":return"cabin-sketch"
case"cursive":return"redressed"
default:return t}}function r(e){const t=function(e){if(!e.weight)return""
switch(e.weight.toLowerCase()){case"bold":case"bolder":return"-bold"}return""}(e)+function(e){if(!e.style)return""
switch(e.style.toLowerCase()){case"italic":case"oblique":return"-italic"}return""}(e)
return i(e.family)+(t.length>0?t:"-regular")}},1940:function(e,t,n){"use strict"
n.r(t),n.d(t,"getContrastingBackgroundTheme",(function(){return M})),n.d(t,"getRenderSymbolParameters",(function(){return y})),n.d(t,"previewSymbol2D",(function(){return k}))
var a=n(990),l=n(446),o=n(1535),i=n(980),r=n(1275),u=n(1485),s=n(1490),c=n(794)
const d="picture-fill",h=u.a.size,m=u.a.maxSize,f=u.a.maxOutlineSize,p=u.a.lineWidth,b=document.createElement("canvas")
function w(e,t){const n=b.getContext("2d"),a=[]
return t&&(t.weight&&a.push(t.weight),t.size&&a.push(t.size+"px"),t.family&&a.push(t.family)),n.font=a.join(" "),n.measureText(e).width}function v(e){const t=null==e?void 0:e.size
return{width:null!=t&&"object"==typeof t&&"width"in t?Object(i.h)(t.width):null,height:null!=t&&"object"==typeof t&&"height"in t?Object(i.h)(t.height):null}}function g(e,t){return e>t?"dark":"light"}function y(e,t){var n,a
const l="number"==typeof(null==t?void 0:t.size)?null==t?void 0:t.size:null,o=null!=l?Object(i.h)(l):null,s=null!=(null==t?void 0:t.maxSize)?Object(i.h)(t.maxSize):null,c=null!=(null==t?void 0:t.rotation)?t.rotation:"angle"in e?e.angle:null,b=Object(r.c)(e)
let g=Object(r.e)(e)
"dark"!==M(e,245)||(null==t?void 0:t.ignoreWhiteSymbols)||(g={width:.75,...g,color:"#bdc3c7"})
const y={shape:null,fill:b,stroke:g,offset:[0,0]};(null==(n=g)?void 0:n.width)&&(g.width=Math.min(g.width,f))
const k=(null==(a=g)?void 0:a.width)||0
let j=null!=(null==t?void 0:t.size)&&(null==(null==t?void 0:t.scale)||(null==t?void 0:t.scale)),L=0,O=0,x=!1
switch(e.type){case"simple-marker":{const n=e.style,{width:a,height:l}=v(t),r=a===l&&null!=a?a:null!=o?o:Math.min(Object(i.h)(e.size),s||m)
switch(L=r,O=r,n){case"circle":y.shape={type:"circle",cx:0,cy:0,r:.5*r},j||(L+=k,O+=k)
break
case"cross":y.shape={type:"path",path:[{command:"M",values:[0,.5*O]},{command:"L",values:[L,.5*O]},{command:"M",values:[.5*L,0]},{command:"L",values:[.5*L,O]}]}
break
case"diamond":y.shape={type:"path",path:[{command:"M",values:[0,.5*O]},{command:"L",values:[.5*L,0]},{command:"L",values:[L,.5*O]},{command:"L",values:[.5*L,O]},{command:"Z",values:[]}]},j||(L+=k,O+=k)
break
case"square":y.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[L,0]},{command:"L",values:[L,O]},{command:"L",values:[0,O]},{command:"Z",values:[]}]},j||(L+=k,O+=k),c&&(x=!0)
break
case"triangle":y.shape={type:"path",path:[{command:"M",values:[.5*L,0]},{command:"L",values:[L,O]},{command:"L",values:[0,O]},{command:"Z",values:[]}]},j||(L+=k,O+=k),c&&(x=!0)
break
case"x":y.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[L,O]},{command:"M",values:[L,0]},{command:"L",values:[0,O]}]},c&&(x=!0)
break
case"path":y.shape={type:"path",path:e.path||""},j||(L+=k,O+=k),c&&(x=!0),j=!0}break}case"simple-line":{var z
const{width:e,height:n}=v(t),a=null!=n?n:null!=o?o:k,l=null!=e?e:p
g&&(g.width=a),L=l,O=a
const i=(null==y||null==(z=y.stroke)?void 0:z.cap)||"butt",r="round"===i
j=!0,y.stroke&&(y.stroke.cap="butt"===i?"square":i),y.shape={type:"path",path:[{command:"M",values:[r?a/2:0,O/2]},{command:"L",values:[r?L-a/2:L,O/2]}]}
break}case d:case"simple-fill":{const e="object"==typeof(null==t?void 0:t.symbolConfig)&&(null==t?void 0:t.symbolConfig.isSquareFill),{width:n,height:a}=v(t)
L=!e&&n!==a||null==n?null!=o?o:h:n,O=!e&&n!==a||null==a?L:a,j||(L+=k,O+=k),j=!0,y.shape=e?{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[L,0]},{command:"L",values:[L,O]},{command:"L",values:[0,O]},{command:"L",values:[0,0]},{command:"Z",values:[]}]}:u.m.fill[0]
break}case"picture-marker":{const n=Math.min(Object(i.h)(e.width),s||m),a=Math.min(Object(i.h)(e.height),s||m),{width:l,height:r}=v(t),u=l===r&&null!=l?l:null!=o?o:Math.max(n,a),d=n/a
L=d<=1?Math.ceil(u*d):u,O=d<=1?u:Math.ceil(u/d),y.shape={type:"image",x:-Math.round(L/2),y:-Math.round(O/2),width:L,height:O,src:e.url||""},c&&(x=!0)
break}case"text":{const n=e,a=(null==t?void 0:t.overrideText)||n.text||"Aa",l=n.font,{width:r,height:u}=v(t),c=null!=u?u:null!=o?o:Math.min(Object(i.h)(l.size),s||m),d=w(a,{weight:l.weight,size:c,family:l.family}),h=/[\uE600-\uE6FF]/.test(a)
L=null!=r?r:h?c:d,O=c
let f=.25*function(e){if(0===e.length)return 0
if(e.length>2){const t=Object(i.i)(1),n=parseFloat(e)
switch(e.slice(-2)){case"px":return n
case"pt":return n*t
case"in":return 72*n*t
case"pc":return 12*n*t
case"mm":return n*(7.2/2.54)*t
case"cm":return n*(72/2.54)*t}}return parseFloat(e)}((l?c:0).toString())
h&&(f+=5),y.shape={type:"text",text:a,x:n.xoffset||0,y:n.yoffset||f,align:"middle",alignBaseline:n.verticalAlignment,decoration:l&&l.decoration,rotated:n.rotated,kerning:n.kerning},y.font=l&&{size:c,style:l.style,decoration:l.decoration,weight:l.weight,family:l.family}
break}}return{shapeDescriptor:y,size:[L,O],renderOptions:{node:null==t?void 0:t.node,scale:j,opacity:null==t?void 0:t.opacity,rotation:c,useRotationSize:x,effectView:null==t?void 0:t.effectView}}}async function k(e,t){const{shapeDescriptor:n,size:a,renderOptions:i}=y(e,t)
if(!n.shape)throw new l.a("symbolPreview: renderPreviewHTML2D","symbol not supported.")
await async function(e,t){const n=t.fill,a=e.color
if("pattern"===(null==n?void 0:n.type)&&a&&e.type!==d){const e=await Object(r.d)(n.src,a.toCss(!0))
n.src=e,t.fill=n}}(e,n),await async function(e,t,n,a){var l,i,r
if(!("font"in e)||!e.font||"text"!==t.shape.type)return
try{await Object(o.c)(e.font)}catch{}const{width:u}=v(a),s=/[\uE600-\uE6FF]/.test(t.shape.text)
null!=u||s||(n[0]=w(t.shape.text,{weight:null==(l=t.font)?void 0:l.weight,size:null==(i=t.font)?void 0:i.size,family:null==(r=t.font)?void 0:r.family}))}(e,n,a,t)
const c=[[n]]
if("object"==typeof(null==t?void 0:t.symbolConfig)&&null!=t&&t.symbolConfig.applyColorModulation){const e=.6*a[0]
c.unshift([{...n,offset:[-e,0],fill:Object(u.b)(n.fill,-.3)}]),c.push([{...n,offset:[e,0],fill:Object(u.b)(n.fill,.3)}]),a[0]+=2*e,i.scale=!1}return Object(s.b)(c,a,i)}function M(e,t=225){const n=Object(r.c)(e),l=Object(r.e)(e),o=!n||"type"in n?null:new a.a(n),i=null!=l&&l.color?new a.a(null==l?void 0:l.color):null,u=o?g(Object(c.getColorLuminance)(o),t):null,s=i?g(Object(c.getColorLuminance)(i),t):null
return s?u?u===s?u:t>=225?"light":"dark":s:u}},794:function(e,t,n){"use strict"
n.r(t),n.d(t,"getBackgroundColor",(function(){return o})),n.d(t,"getBackgroundColorTheme",(function(){return i})),n.d(t,"getColorLuminance",(function(){return s})),n.d(t,"getColorTheme",(function(){return r}))
var a=n(990),l=n(23)
async function o(e){var t,n
await e.whenReady()
const l=null!=(t=null==(n=e.basemapView)?void 0:n.baseLayerViews.map(e=>e.layer).toArray())?t:[]
if(!l.length){const t=getComputedStyle(e.container).backgroundColor,n=t&&new a.a(t)
return e.get("background.color")||(n&&0!==n.a?n:null)||null}const o=(await e.takeScreenshot({format:"png",layers:l})).data.data,i=o.length
let r=0,u=0,s=0,c=0,d=0,h=0
for(let e=0;e<i;e+=4){const t=o[e],n=o[e+1],a=o[e+2],l=o[e+3],i=l/255
r+=t*t*i,u+=n*n*i,s+=a*a*i,d+=i,l&&(c+=l,h++)}return r=Math.round(Math.sqrt(r/d)),u=Math.round(Math.sqrt(u/d)),s=Math.round(Math.sqrt(s/d)),new a.a([r,u,s,c/h/255])}async function i(e){if(!e)return null
const t=await o(e)
return Object(l.l)(t)?r(t):null}function r(e){return u(e).isBright?"light":"dark"}function u(e){let{r:t,g:n,b:l,a:o}=e
return o<1&&(t=Math.round(o*t+255*(1-o)),n=Math.round(o*n+255*(1-o)),l=Math.round(o*l+255*(1-o))),new a.a({r:t,g:n,b:l})}function s(e){const{r:t,g:n,b:a}=u(e)
return.2126*t+.7152*n+.0722*a}}}])
