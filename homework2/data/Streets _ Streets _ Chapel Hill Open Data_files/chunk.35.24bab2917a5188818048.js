(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[35,43,761],{1223:function(t,e,n){"use strict"
n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return s})),n.d(e,"f",(function(){return c})),n.d(e,"g",(function(){return l})),n.d(e,"h",(function(){return f})),n.d(e,"i",(function(){return u}))
const i=[252,146,31,255],r=[153,153,153,255],o={type:"esriSMS",style:"esriSMSCircle",size:6,color:i,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},s={type:"esriSLS",style:"esriSLSSolid",width:.75,color:i},a={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},c={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},l={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},u={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},f={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}},1268:function(t,e,n){"use strict"
n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"c",(function(){return u})),n.d(e,"d",(function(){return h})),n.d(e,"e",(function(){return d})),n.d(e,"f",(function(){return O})),n.d(e,"g",(function(){return p})),n.d(e,"h",(function(){return b})),n(235)
var i=n(23),r=n(1073),o=n(1065),s=n(1078),a=n(1239),c=n(1223)
const l=s.a.fromJSON(c.c),u=o.a.fromJSON(c.e),f=r.a.fromJSON(c.d),h=a.a.fromJSON(c.f)
function b(t){if(Object(i.k)(t))return null
switch(t.type){case"mesh":return null
case"point":case"multipoint":return l
case"polyline":return u
case"polygon":case"extent":return f}return null}const d=s.a.fromJSON(c.g),p=o.a.fromJSON(c.i),O=r.a.fromJSON(c.h)},1339:function(t,e,n){"use strict"
n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return a}))
var i=n(991)
class r{constructor(t,e){this.min=t,this.max=e,this.range=e-t}ndiff(t,e=0){return Math.ceil((t-e)/this.range)*this.range+e}_normalize(t,e,n,i=0,r=!1){return(n-=i)<t?n+=this.ndiff(t-n):n>e&&(n-=this.ndiff(n-e)),r&&n===e&&(n=t),n+i}normalize(t,e=0,n=!1){return this._normalize(this.min,this.max,t,e,n)}clamp(t,e=0){return Object(i.f)(t-e,this.min,this.max)+e}monotonic(t,e,n){return t<e?e:e+this.ndiff(t-e,n)}minimalMonotonic(t,e,n){return this._normalize(t,t+this.range,e,n)}center(t,e,n){return e=this.monotonic(t,e,n),this.normalize((t+e)/2,n)}diff(t,e,n){return this.monotonic(t,e,n)-t}shortestSignedDiff(t,e){t=this.normalize(t)
const n=(e=this.normalize(e))-t,i=e<t?this.minimalMonotonic(t,e)-t:e-this.minimalMonotonic(e,t)
return Math.abs(n)<Math.abs(i)?n:i}contains(t,e,n){return e=this.minimalMonotonic(t,e),(n=this.minimalMonotonic(t,n))>t&&n<e}}function o(t){for(const e in t){const n=t[e]
n instanceof Function&&(t[e]=n.bind(t))}return t}const s=o(new r(0,2*Math.PI)),a=o(new r(-Math.PI,Math.PI)),c=o(new r(0,360))},1510:function(t,e,n){"use strict"
n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return u}))
var i=n(1089),r=n(769),o=n(988)
const s=new r.default(i.a),a=new r.default(i.b),c=new r.default(i.c),l=new r.default(i.d)
function u(t){return t&&(Object(o.i)(t)||Object(o.d)(t,a))?a:t&&(Object(o.j)(t)||Object(o.d)(t,c))?c:s}},1678:function(t,e,n){"use strict"
n.d(e,"a",(function(){return w})),n.d(e,"b",(function(){return _})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return T})),n.d(e,"e",(function(){return x})),n.d(e,"f",(function(){return m})),n.d(e,"g",(function(){return g})),n.d(e,"h",(function(){return y})),n.d(e,"i",(function(){return j})),n.d(e,"j",(function(){return v})),n.d(e,"k",(function(){return b})),n.d(e,"l",(function(){return d})),n.d(e,"m",(function(){return O})),n.d(e,"n",(function(){return p})),n.d(e,"o",(function(){return S})),n.d(e,"p",(function(){return h}))
var i=n(1207),r=n(1339),o=n(991),s=n(23),a=n(447),c=n(997),l=n(1038)
function u(t,e,n){return t.units[e][n]}function f(t,e,n,i=2,r="abbr"){return`${Object(l.b)(e,{minimumFractionDigits:i,maximumFractionDigits:i,signDisplay:e>0?"never":"exceptZero"})} ${u(t,n,r)}`}function h(t,e,n,i=2,r="abbr"){return`${Object(l.b)(e,{minimumFractionDigits:i,maximumFractionDigits:i,signDisplay:"exceptZero"})} ${u(t,n,r)}`}function b(t,e,n,i=2,r="abbr"){const o=Object(c.u)(e,n)
return f(t,Object(c.e)(e,n,o),o,i,r)}function d(t,e,n,i=2,r="abbr"){const o=Object(c.u)(e,n)
return h(t,Object(c.e)(e,n,o),o,i,r)}function p(t,e,n,i=2,r="abbr"){const o=Object(c.v)(e,n)
return f(t,Object(c.e)(e,n,o),o,i,r)}function O(t,e,n,i=2,r="abbr"){const o=Object(c.v)(e,n)
return h(t,Object(c.e)(e,n,o),o,i,r)}function m(t,e,n,i=2,r="abbr"){const o=Object(c.q)(e,n)
return f(t,Object(c.e)(e,n,o),o,i,r)}function g(t,e,n,i=2,r="abbr"){const o=Object(c.q)(e,n)
return h(t,Object(c.e)(e,n,o),o,i,r)}function j(t,e,n,i=2,r="abbr"){const o=Object(c.r)(e,n)
return f(t,Object(c.e)(e,n,o),o,i,r)}function y(t,e,n,i=2,r="abbr"){const o=Object(c.r)(e,n)
return h(t,Object(c.e)(e,n,o),o,i,r)}function v(t,e,n,i=2,r="abbr"){const o=Object(c.t)(e,n)
return f(t,Object(c.e)(e,n,o),o,i,r)}function x(t,e,n,i=2,r="abbr"){const o=Object(c.p)(e,n)
return f(t,Object(c.e)(e,n,o),o,i,r)}function _(t,e,n=2){let i=Object(c.e)(t,e,"degrees"),r=i-Math.floor(i)
i-=r,r*=60
let o=r-Math.floor(r)
return r-=o,o*=60,`${i.toFixed()}° ${r.toFixed()}' ${o.toFixed(n)}"`}function w(t,e,n,i,o){o=Object(s.v)(o,2)
let a=r.c.normalize(function(t,e,n){if(e===n)return t
switch(n){case"arithmetic":return function(t){return 90-t}(t)
case"geographic":return function(t){return-t-90}(t)}}(Object(c.e)(t,e,"degrees"),n,i),0,!0)
const u={style:"unit",unitDisplay:"narrow",unit:"degree",maximumFractionDigits:o,minimumFractionDigits:o,signDisplay:a>0?"never":"exceptZero"}
return a=z(a,u),Object(l.b)(a,u)}function S(t,e,n,i,r){n!==i&&(t=-t)
const o={style:"unit",unitDisplay:"narrow",unit:"degree",maximumFractionDigits:r=Object(s.v)(r,2),minimumFractionDigits:r,signDisplay:"exceptZero"}
let a=Object(c.e)(t,e,"degrees")%360
return a=z(a,o),Object(l.b)(a,o)}const M=new Map
function z(t,e){const n=JSON.stringify(e)
let i=M.get(n)
return i||(i=new Intl.NumberFormat("en-US",e),M.set(n,i)),/\-?\+?360/.test(i.format(t))?0:t}const C=["B","kB","MB","GB","TB"]
function T(t,e){let n=0===e?0:Math.floor(Math.log(e)/Math.log(i.a.KILOBYTES))
n=Object(o.f)(n,0,C.length-1)
const r=Object(l.b)(e/i.a.KILOBYTES**n,{maximumFractionDigits:2})
return Object(a.c)(t.units.bytes[C[n]],{fileSize:r})}},1733:function(t,e,n){"use strict"
n.r(e),n.d(e,"hydratedAdapter",(function(){return c}))
var i=n(770),r=n(1055),o=n(992),s=n(773),a=n(1021)
const c={convertToGEGeometry:function(t,e){if(null==e)return null
let n="cache"in e?e.cache._geVersion:void 0
return null==n&&(n=t.convertJSONToGeometry(e),"cache"in e&&(e.cache._geVersion=n)),n},exportPoint:function(t,e,n){const i=t.hasZ(e),r=t.hasM(e),s=new o.a({x:t.getPointX(e),y:t.getPointY(e),spatialReference:n})
return i&&(s.z=t.getPointZ(e)),r&&(s.m=t.getPointM(e)),s.cache._geVersion=e,s},exportPolygon:function(t,e,n){const i=new s.default({rings:t.exportPaths(e),hasZ:t.hasZ(e),hasM:t.hasM(e),spatialReference:n})
return i.cache._geVersion=e,i},exportPolyline:function(t,e,n){const i=new a.a({paths:t.exportPaths(e),hasZ:t.hasZ(e),hasM:t.hasM(e),spatialReference:n})
return i.cache._geVersion=e,i},exportMultipoint:function(t,e,n){const i=new r.a({hasZ:t.hasZ(e),hasM:t.hasM(e),points:t.exportPoints(e),spatialReference:n})
return i.cache._geVersion=e,i},exportExtent:function(t,e,n){const r=t.hasZ(e),o=t.hasM(e),s=new i.default({xmin:t.getXMin(e),ymin:t.getYMin(e),xmax:t.getXMax(e),ymax:t.getYMax(e),spatialReference:n})
if(r){const n=t.getZExtent(e)
s.zmin=n.vmin,s.zmax=n.vmax}if(o){const n=t.getMExtent(e)
s.mmin=n.vmin,s.mmax=n.vmax}return s.cache._geVersion=e,s}}},1835:function(t,e,n){"use strict"
function i(t,e){return e?"xoffset"in e&&e.xoffset?Math.max(t,Math.abs(e.xoffset)):"yoffset"in e&&e.yoffset?Math.max(t,Math.abs(e.yoffset||0)):t:t}function r(t,e){return"number"==typeof t?t:t&&t.stops&&t.stops.length?function(t){let e=0,n=0
for(let i=0;i<t.length;i++){const r=t[i].size
"number"==typeof r&&(e+=r,n++)}return e/n}(t.stops):e}function o(t,e){if(!e)return t
const n=e.filter(t=>"size"===t.type).map(e=>{const{maxSize:n,minSize:i}=e
return(r(n,t)+r(i,t))/2})
let i=0
const o=n.length
if(0===o)return t
for(let t=0;t<o;t++)i+=n[t]
const s=Math.floor(i/o)
return Math.max(s,t)}function s(t){const e=t&&t.renderer,n="touch"===(t&&t.event&&t.event.pointerType)?9:6
if(!e)return n
const r="visualVariables"in e?o(n,e.visualVariables):n
if("simple"===e.type)return i(r,e.symbol)
if("unique-value"===e.type){var s
let t=r
return null!=(s=e.uniqueValueInfos)&&s.forEach(e=>{t=i(t,e.symbol)}),t}if("class-breaks"===e.type){let t=r
return e.classBreakInfos.forEach(e=>{t=i(t,e.symbol)}),t}return"dot-density"===e.type||e.type,r}n.d(e,"a",(function(){return s}))},1917:function(t,e,n){"use strict"
n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return c})),n(982)
var i=n(23),r=n(997),o=n(1835),s=n(770)
function a(t,e,n,o=new s.default){var a
let c=0
if("2d"===n.type)c=e*(null!=(a=n.resolution)?a:0)
else if("3d"===n.type){const o=n.overlayPixelSizeInMapUnits(t),s=n.basemapSpatialReference
c=Object(i.l)(s)&&!s.equals(n.spatialReference)?Object(r.g)(s)/Object(r.g)(n.spatialReference):e*o}const l=t.x-c,u=t.y-c,f=t.x+c,h=t.y+c,{spatialReference:b}=n
return o.xmin=Math.min(l,f),o.ymin=Math.min(u,h),o.xmax=Math.max(l,f),o.ymax=Math.max(u,h),o.spatialReference=b,o}function c(t,e,n){const r=n.toMap(t)
return!Object(i.k)(r)&&a(r,Object(o.a)(),n,l).intersects(e)}const l=new s.default},2012:function(t,e,n){"use strict"
n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return f})),n.d(e,"c",(function(){return u})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return l}))
var i=n(991),r=n(996),o=n(1079),s=n(1066)
function a(t,e,n,i){if(null==i||t.hasZ||(i=void 0),"point"===t.type)return t.x+=e,t.y+=n,t.hasZ&&null!=i&&(t.z+=i),t
if("multipoint"===t.type){const r=t.points
for(let t=0;t<r.length;t++)r[t]=h(r[t],e,n,i)
return t}if("extent"===t.type)return t.xmin+=e,t.xmax+=e,t.ymin+=n,t.ymax+=n,null!=i&&(null!=t.zmin||(t.zmin=0),t.zmin+=i,null!=t.zmax||(t.zmax=0),t.zmax+=i),t
const r=Object(s.d)(t),o="polyline"===t.type?t.paths:t.rings
for(let t=0;t<r.length;t++){const o=r[t]
for(let t=0;t<o.length;t++)o[t]=h(o[t],e,n,i)}return"paths"in t?t.paths=o:t.rings=o,t}function c(t,e,n,i,r){const o=t.clone(),c=i.resolution
if("point"===o.type){if(r)a(o,e*c,-n*c)
else{const t=i.state.transform,r=i.state.inverseTransform,s=t[0]*o.x+t[2]*o.y+t[4],a=t[1]*o.x+t[3]*o.y+t[5]
o.x=r[0]*(s+e)+r[2]*(a+n)+r[4],o.y=r[1]*(s+e)+r[3]*(a+n)+r[5]}return o}if("multipoint"===o.type){if(r)a(o,e*c,-n*c)
else{const t=o.points,r=i.state.transform,s=i.state.inverseTransform
for(let i=0;i<t.length;i++){const o=t[i],a=r[0]*o[0]+r[2]*o[1]+r[4],c=r[1]*o[0]+r[3]*o[1]+r[5],l=s[0]*(a+e)+s[2]*(c+n)+s[4],u=s[1]*(a+e)+s[3]*(c+n)+s[5]
t[i]=b(o,l,u,void 0)}}return o}if("extent"===o.type){if(r)a(o,e*c,-n*c)
else{const t=i.state.transform,r=i.state.inverseTransform,s=t[0]*o.xmin+t[2]*o.ymin+t[4],a=t[1]*o.xmin+t[3]*o.ymin+t[5],c=t[0]*o.xmax+t[2]*o.ymax+t[4],l=t[1]*o.xmax+t[3]*o.ymax+t[5]
o.xmin=r[0]*(s+e)+r[2]*(a+n)+r[4],o.ymin=r[1]*(s+e)+r[3]*(a+n)+r[5],o.xmax=r[0]*(c+e)+r[2]*(l+n)+r[4],o.ymax=r[1]*(c+e)+r[3]*(l+n)+r[5]}return o}if(r)a(o,e*c,-n*c)
else{const t=Object(s.d)(o),r="polyline"===o.type?o.paths:o.rings,a=i.state.transform,c=i.state.inverseTransform
for(let i=0;i<t.length;i++){const r=t[i]
for(let t=0;t<r.length;t++){const i=r[t],o=a[0]*i[0]+a[2]*i[1]+a[4],s=a[1]*i[0]+a[3]*i[1]+a[5],l=c[0]*(o+e)+c[2]*(s+n)+c[4],u=c[1]*(o+e)+c[3]*(s+n)+c[5]
r[t]=b(i,l,u,void 0)}}"paths"in o?o.paths=r:o.rings=r}return o}function l(t,e,n,i){if("point"===t.type){const{x:r,y:o}=t,s=i?i[0]:r,a=i?i[1]:o,c=t.clone(),l=(r-s)*e+s,u=(o-a)*n+a
return c.x=l,c.y=u,c}if("multipoint"===t.type){const a=Object(s.d)(t),c=Object(r.m)(),[l,u,f,h]=Object(o.d)(c,[a]),d=i?i[0]:(l+f)/2,p=i?i[1]:(h+u)/2,O=t.clone(),m=O.points
for(let t=0;t<m.length;t++){const i=m[t],[r,o]=i,s=(r-d)*e+d,a=(o-p)*n+p
m[t]=b(i,s,a,void 0)}return O}if("extent"===t.type){const{xmin:r,xmax:o,ymin:s,ymax:a}=t,c=i?i[0]:(r+o)/2,l=i?i[1]:(a+s)/2,u=t.clone()
if(u.xmin=(r-c)*e+c,u.ymax=(a-l)*n+l,u.xmax=(o-c)*e+c,u.ymin=(s-l)*n+l,u.xmin>u.xmax){const t=u.xmin,e=u.xmax
u.xmin=e,u.xmax=t}if(u.ymin>u.ymax){const t=u.ymin,e=u.ymax
u.ymin=e,u.ymax=t}return u}const a=Object(s.d)(t),c=Object(r.m)(),[l,u,f,h]=Object(o.d)(c,a),d=i?i[0]:(l+f)/2,p=i?i[1]:(h+u)/2,O=t.clone(),m="polyline"===O.type?O.paths:O.rings
for(let t=0;t<a.length;t++){const i=a[t]
for(let r=0;r<i.length;r++){const o=i[r],[s,a]=o,c=(s-d)*e+d,l=(a-p)*n+p
m[t][r]=b(o,c,l,void 0)}}return"paths"in O?O.paths=m:O.rings=m,O}function u(t,e,n,i,r,o){const s=Math.sqrt((n-t)*(n-t)+(i-e)*(i-e))
return Math.sqrt((r-t)*(r-t)+(o-e)*(o-e))/s}function f(t,e,n,r=!1){const o=Math.atan2(e.y-n.y,e.x-n.x)-Math.atan2(t.y-n.y,t.x-n.x),s=Math.atan2(Math.sin(o),Math.cos(o))
return r?s:Object(i.q)(s)}function h(t,e,n,i){return b(t,t[0]+e,t[1]+n,null!=t[2]&&null!=i?t[2]+i:void 0)}function b(t,e,n,i){const r=[e,n]
return t.length>2&&r.push(null!=i?i:t[2]),t.length>3&&r.push(t[3]),r}},2013:function(t,e,n){"use strict"
n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return f})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return u})),n.d(e,"f",(function(){return s}))
var i=n(23),r=n(2141),o=n(2731)
function s(t,e){return h(r.g,o.c,r.f,e,t)}function a(t,e,n,i){return h(r.b,o.a,r.d,i,t,e,n)}function c(t,e,n){return h(r.e,o.b,r.e,n,t,e)}function l(t,e,n,i){return h(r.d,o.a,r.d,i,t,e,n)}function u(t){return h(r.g,o.c,r.f,"on-the-ground",t)}function f(t,e){return h(r.e,o.b,r.e,"on-the-ground",t,e)}function h(t,e,n,r,...o){if("on-the-ground"===r){const t=e.apply(void 0,o)
return Object(i.l)(t)?t:n.apply(void 0,o)}return t.apply(void 0,o)}},2081:function(t,e,n){"use strict"
n.d(e,"a",(function(){return a}))
var i=n(968),r=n(975),o=n(970),s=(n(971),n(445),n(969))
let a=class extends r.a{constructor(t){super(t),this.helpMessage=void 0}}
Object(i.a)([Object(o.b)()],a.prototype,"tooltipOptions",void 0),Object(i.a)([Object(o.b)()],a.prototype,"helpMessage",void 0),a=Object(i.a)([Object(s.a)("esri.views.interactive.tooltip.SketchTooltipInfo")],a)},2083:function(t,e,n){"use strict"
n.d(e,"a",(function(){return at}))
var i=n(968),r=n(975),o=n(23),s=n(978),a=n(970),c=(n(971),n(445),n(969))
const l="esri-tooltip",u=l+"-content"
n(233),n(446),n(235),n(1083)
var f=n(1975),h=n(2195),b=n(1061),d=n(998),p=n(1099),O=n(1038)
let m=class extends b.a{get _units(){const t=Object(h.a)(this.tooltip.view)
return{length:t,verticalLength:t,area:t}}_getHelpMessage(t){var e,n,i,r
const{info:o}=this,{tooltipOptions:s,helpMessage:a,viewType:c}=o,l=null!=t?t:a,u="3d"===c?"helpMessages3d":"helpMessages2d"
return(null==s||null==(e=s.visibleElements)?void 0:e.helpMessage)&&l?null==(n=this._messagesTooltip)||null==(i=n.sketch)||null==(r=i[u])?void 0:r[l]:void 0}_formatScale(t){return Object(O.b)(t,{style:"percent",maximumFractionDigits:0})}_formatRelativeOrientation(t){return Object(O.b)(t,{maximumFractionDigits:2,minimumFractionDigits:2,signDisplay:"exceptZero"})}_formatLength(t,e,n){return Object(f.f)(this._messagesUnits,t,Object(o.v)(e,this._units.length),n)}_formatRelativeLength(t){return Object(f.j)(this._messagesUnits,t,this._units.length)}_formatVerticalLength(t){return Object(f.l)(this._messagesUnits,t,this._units.verticalLength)}_formatRelativeVerticalLength(t){return Object(f.k)(this._messagesUnits,t,this._units.verticalLength)}_formatTotalLength(t){return Object(f.f)(this._messagesUnits,t,this._units.length)}_formatArea(t){return Object(f.b)(this._messagesUnits,t,this._units.area)}_formatPercentage(t){return Object(O.b)(t.value,{style:"percent"})}}
Object(i.a)([Object(a.b)()],m.prototype,"info",void 0),Object(i.a)([Object(a.b)()],m.prototype,"tooltip",void 0),Object(i.a)([Object(a.b)()],m.prototype,"_units",null),Object(i.a)([Object(p.a)("esri/core/t9n/Units"),Object(a.b)()],m.prototype,"_messagesUnits",void 0),Object(i.a)([Object(p.a)("esri/views/interactive/tooltip/t9n/Tooltip"),Object(a.b)()],m.prototype,"_messagesTooltip",void 0),m=Object(i.a)([Object(c.a)("esri.views.interactive.tooltip.content.TooltipContent")],m)
var g=n(1018)
function j({className:t,helpMessage:e},...n){const i=n.filter(t=>!!t)
return Object(g.a)("div",{class:Object(d.a)(t,u)},i.length>0?Object(g.a)("div",{class:"esri-tooltip-table"},...i):null,e?Object(g.a)("div",{key:"help-message",class:"esri-tooltip-help-message"},e):null)}const y="esri-tooltip-field",v="esri-tooltip-field__title",x="esri-tooltip-field__value"
let _=class extends b.a{render(){return Object(g.a)("div",{class:y},Object(g.a)("div",{class:v},this.title),Object(g.a)("div",{class:x},this.value))}}
Object(i.a)([Object(a.b)()],_.prototype,"title",void 0),Object(i.a)([Object(a.b)()],_.prototype,"value",void 0),_=Object(i.a)([Object(c.a)("esri.views.interactive.tooltip.support.TooltipField")],_)
const w={base:l+"-value-by-value"}
let S=class extends b.a{constructor(){super(...arguments),this.divider="×"}render(){return Object(g.a)("div",{class:w.base},Object(g.a)("span",null,this.left),Object(g.a)("span",null,this.divider),Object(g.a)("span",null,this.right))}}
Object(i.a)([Object(a.b)()],S.prototype,"left",void 0),Object(i.a)([Object(a.b)()],S.prototype,"divider",void 0),Object(i.a)([Object(a.b)()],S.prototype,"right",void 0),S=Object(i.a)([Object(c.a)("esri.views.interactive.tooltip.support.ValueByValue")],S)
const M={base:`${u} ${u+"--draw-rectangle"}`}
let z=class extends m{render(){const{area:t,radius:e,xSize:n,ySize:i,tooltipOptions:r}=this.info,{visibleElements:s}=r,a=this._messagesTooltip.sketch
return Object(g.a)(j,{className:M.base,helpMessage:this._getHelpMessage()},s.radius&&Object(o.l)(e)&&Object(g.a)(_,{title:a.radius,value:this._formatLength(e)}),s.size&&Object(o.l)(n)&&Object(o.l)(i)&&Object(g.a)(_,{title:a.size,value:Object(g.a)(S,{left:this._formatLength(n),right:this._formatLength(i)})}),s.area&&Object(g.a)(_,{title:a.area,value:this._formatArea(t)}))}}
z=Object(i.a)([Object(c.a)("esri.views.interactive.tooltip.content.TooltipContentDrawCircle")],z)
const C={base:u+"--draw-point"}
let T=class extends m{render(){const{elevation:t,tooltipOptions:e}=this.info,{visibleElements:n}=e,i=this._messagesTooltip.sketch
return Object(g.a)(j,{className:C.base,helpMessage:this._getHelpMessage()},n.elevation&&Object(g.a)(_,{title:i.elevation,value:this._formatVerticalLength(t)}))}}
T=Object(i.a)([Object(c.a)("esri.views.interactive.tooltip.content.TooltipContentDrawPoint")],T)
const L={base:`${u} ${u+"--draw-polygon"}`}
let G=class extends m{render(){const{area:t,elevation:e,tooltipOptions:n,viewType:i}=this.info,{visibleElements:r}=n,o=this._messagesTooltip.sketch
return Object(g.a)(j,{className:L.base,helpMessage:this._getHelpMessage()},r.elevation&&"2d"!==i&&Object(g.a)(_,{title:o.elevation,value:this._formatVerticalLength(e)}),r.area&&Object(g.a)(_,{title:o.area,value:this._formatArea(t)}))}}
G=Object(i.a)([Object(c.a)("esri.views.interactive.tooltip.content.TooltipContentDrawPolygon")],G)
const R={base:`${u} ${u+"--draw-polyline"}`}
let A=class extends m{render(){const{elevation:t,totalLength:e,tooltipOptions:n,viewType:i}=this.info,{visibleElements:r}=n,o=this._messagesTooltip.sketch
return Object(g.a)(j,{className:R.base,helpMessage:this._getHelpMessage()},r.elevation&&"2d"!==i&&Object(g.a)(_,{title:o.elevation,value:this._formatVerticalLength(t)}),r.totalLength&&Object(g.a)(_,{title:o.totalLength,value:this._formatLength(e)}))}}
A=Object(i.a)([Object(c.a)("esri.views.interactive.tooltip.content.TooltipContentDrawPolyline")],A)
const D={base:`${u} ${u+"--draw-rectangle"}`}
let P=class extends m{render(){const{area:t,xSize:e,ySize:n,tooltipOptions:i}=this.info,{visibleElements:r}=i,s=this._messagesTooltip.sketch
return Object(g.a)(j,{className:D.base,helpMessage:this._getHelpMessage()},r.size&&Object(o.l)(e)&&Object(o.l)(n)&&Object(g.a)(_,{title:s.size,value:Object(g.a)(S,{left:this._formatLength(e),right:this._formatLength(n)})}),r.area&&Object(g.a)(_,{title:s.area,value:this._formatArea(t)}))}}
P=Object(i.a)([Object(c.a)("esri.views.interactive.tooltip.content.TooltipContentDrawRectangle")],P)
const k={base:`${u} ${u+"--extent-rotate"}`}
let $=class extends m{render(){const{angle:t,tooltipOptions:e}=this.info,{visibleElements:n}=e,i=this._messagesTooltip.sketch
return Object(g.a)(j,{className:k.base,helpMessage:this._getHelpMessage()},n.rotation&&Object(g.a)(_,{title:i.rotation,value:this._formatRelativeOrientation(t)}))}}
$=Object(i.a)([Object(c.a)("esri.views.interactive.tooltip.content.TooltipContentExtentRotate")],$)
const E={base:`${u} ${u+"--extent-scale"}`}
let V=class extends m{render(){const t=this.info,{visibleElements:e}=t.tooltipOptions,n=this._messagesTooltip.sketch
return Object(g.a)(j,{className:E.base,helpMessage:this._getHelpMessage()},e.size&&Object(g.a)(_,{title:n.size,value:Object(g.a)(S,{left:this._formatLength(t.xSize),right:this._formatLength(t.ySize)})}),e.scale&&Object(g.a)(_,{title:n.scale,value:Object(g.a)(S,{left:this._formatScale(t.xScale),right:this._formatScale(t.yScale)})}))}}
V=Object(i.a)([Object(c.a)("esri.views.interactive.tooltip.content.TooltipContentExtentScale")],V)
const N={base:`${u} ${u+"--reshape-edge-offset"}`}
let H=class extends m{render(){const{area:t,distance:e,totalLength:n,tooltipOptions:i}=this.info,{visibleElements:r}=i,s=this._messagesTooltip.sketch
return Object(g.a)(j,{className:N.base,helpMessage:this._getHelpMessage()},r.distance&&Object(g.a)(_,{title:s.distance,value:this._formatRelativeLength(e)}),r.area&&Object(o.l)(t)&&Object(g.a)(_,{title:s.area,value:this._formatArea(t)}),r.totalLength&&Object(o.l)(n)&&Object(g.a)(_,{title:s.totalLength,value:this._formatLength(n)}))}}
H=Object(i.a)([Object(c.a)("esri.views.interactive.tooltip.content.TooltipContentReshapeEdgeOffset")],H)
const Z={base:`${u} ${u+"--transform-absolute"}`}
let F=class extends m{render(){const{info:t}=this,{visibleElements:e}=t.tooltipOptions,n=this._messagesTooltip.sketch
return Object(g.a)(j,{className:Z.base,helpMessage:this._getHelpMessage()},e.orientation&&t.orientationEnabled&&Object(g.a)(_,{title:n.orientation,value:Object(f.a)(t.orientation,t.rotationType,t.orientationPrecision)}),e.size&&t.sizeEnabled&&Object(g.a)(_,{title:n.size,value:this._formatLength(t.size,t.sizeUnit,t.sizePrecision)}))}}
F=Object(i.a)([Object(c.a)("esri.views.interactive.tooltip.content.TooltipContentTransformAbsolute")],F)
const I={base:`${u} ${u+"--transform-rotate"}`}
let J=class extends m{render(){const{info:t}=this,{visibleElements:e}=t.tooltipOptions,n=this._messagesTooltip.sketch
return Object(g.a)(j,{className:I.base,helpMessage:this._getHelpMessage()},e.rotation&&Object(g.a)(_,{title:n.rotation,value:Object(f.i)(t.rotation,t.rotationType,t.rotationPrecision)}),e.orientation&&Object(g.a)(_,{title:n.orientation,value:Object(f.a)(t.orientation,t.rotationType,t.orientationPrecision)}))}}
J=Object(i.a)([Object(c.a)("esri.views.interactive.tooltip.content.TooltipContentTransformRotate")],J)
const B={base:`${u} ${u+"--transform-scale"}`}
let U=class extends m{render(){const{scale:t,size:e,sizePrecision:n,sizeUnit:i,tooltipOptions:r}=this.info,{visibleElements:o}=r,s=this._messagesTooltip.sketch
return Object(g.a)(j,{className:B.base,helpMessage:this._getHelpMessage()},o.scale&&Object(g.a)(_,{title:s.scale,value:this._formatPercentage(t)}),o.size&&Object(g.a)(_,{title:s.size,value:this._formatLength(e,i,n)}))}}
U=Object(i.a)([Object(c.a)("esri.views.interactive.tooltip.content.TooltipContentTransformScale")],U)
const W={base:`${u} ${u+"--translate-graphic"}`}
let q=class extends m{render(){const{info:t}=this,{visibleElements:e}=t.tooltipOptions,n=this._messagesTooltip.sketch
return Object(g.a)(j,{className:W.base,helpMessage:this._getHelpMessage()},e.distance&&Object(g.a)(_,{title:n.distance,value:this._formatLength(t.distance)}))}}
q=Object(i.a)([Object(c.a)("esri.views.interactive.tooltip.content.TooltipContentTranslateGraphic")],q)
const Y={base:`${u} ${u+"--translate-graphic-xy"}`}
let X=class extends m{render(){const{info:t}=this,{visibleElements:e}=t.tooltipOptions,n=this._messagesTooltip.sketch
return Object(g.a)(j,{className:Y.base,helpMessage:this._getHelpMessage()},e.distance&&Object(g.a)(_,{title:n.distance,value:this._formatRelativeLength(t.distance)}))}}
X=Object(i.a)([Object(c.a)("esri.views.interactive.tooltip.content.TooltipContentTranslateGraphicXY")],X)
const K={base:`${u} ${u+"--translate-graphic-z"}`}
let Q=class extends m{render(){const{info:t}=this,{visibleElements:e}=t.tooltipOptions,n=this._messagesTooltip.sketch
return Object(g.a)(j,{className:K.base,helpMessage:this._getHelpMessage()},e.distance&&Object(g.a)(_,{title:n.distance,value:this._formatRelativeVerticalLength(t.distance)}))}}
Q=Object(i.a)([Object(c.a)("esri.views.interactive.tooltip.content.TooltipContentTranslateGraphicZ")],Q)
const tt={base:`${u} ${u+"--translate-vertex"}`}
let et=class extends m{render(){const{distance:t,elevation:e,area:n,totalLength:i,tooltipOptions:r}=this.info,{visibleElements:s}=r,a=this._messagesTooltip.sketch
return Object(g.a)(j,{className:tt.base,helpMessage:this._getHelpMessage()},s.distance&&Object(g.a)(_,{title:a.distance,value:this._formatLength(t)}),s.elevation&&Object(o.l)(e)&&Object(g.a)(_,{title:a.elevation,value:this._formatVerticalLength(e)}),s.area&&Object(o.l)(n)&&Object(g.a)(_,{title:a.area,value:this._formatArea(n)}),s.totalLength&&Object(o.l)(i)&&Object(g.a)(_,{title:a.totalLength,value:this._formatLength(i)}))}}
et=Object(i.a)([Object(c.a)("esri.views.interactive.tooltip.content.TooltipContentTranslateVertex")],et)
const nt={base:`${u} ${u+"--translate-vertex"}`}
let it=class extends m{render(){const{area:t,distance:e,elevation:n,totalLength:i,tooltipOptions:r}=this.info,{visibleElements:s}=r,a=this._messagesTooltip.sketch
return Object(g.a)(j,{className:nt.base,helpMessage:this._getHelpMessage()},s.distance&&Object(g.a)(_,{title:a.distance,value:this._formatRelativeLength(e)}),s.elevation&&Object(o.l)(n)&&Object(g.a)(_,{title:a.elevation,value:this._formatVerticalLength(n)}),s.area&&Object(o.l)(t)&&Object(g.a)(_,{title:a.area,value:this._formatArea(t)}),s.totalLength&&Object(o.l)(i)&&Object(g.a)(_,{title:a.totalLength,value:this._formatLength(i)}))}}
it=Object(i.a)([Object(c.a)("esri.views.interactive.tooltip.content.TooltipContentTranslateVertexXY")],it)
const rt={base:`${u} ${u+"--translate-vertex"}`}
let ot=class extends m{render(){const{distance:t,elevation:e,tooltipOptions:n}=this.info,{visibleElements:i}=n,r=this._messagesTooltip.sketch
return Object(g.a)(j,{className:rt.base,helpMessage:this._getHelpMessage()},i.distance&&Object(g.a)(_,{title:r.distance,value:this._formatRelativeVerticalLength(t)}),i.elevation&&Object(o.l)(e)&&Object(g.a)(_,{title:r.elevation,value:this._formatVerticalLength(e)}))}}
ot=Object(i.a)([Object(c.a)("esri.views.interactive.tooltip.content.TooltipContentTranslateVertexZ")],ot)
const st={base:""+l}
let at=class extends r.a{constructor(t){super(t),this.info=null,this._contentContainer=(()=>{const t=document.createElement("div")
return t.classList.add(st.base),t})(),this._contentWidget=null}initialize(){const t=this._contentContainer
this.addHandles([Object(s.f)(()=>{var t
return null==(t=this.view.overlay)?void 0:t.surface},e=>{t.remove(),Object(o.b)(e,e=>e.appendChild(t))},s.e),Object(s.f)(()=>this.info,(e,n)=>{Object(o.l)(this._contentWidget)&&Object(o.l)(e)&&Object(o.l)(n)&&e.type===n.type?this._contentWidget.info=e:(this._contentWidget=Object(o.e)(this._contentWidget),Object(o.b)(function(t,e){if(Object(o.k)(e))return null
const n=document.createElement("div")
switch(e.type){case"draw-point":return new T({tooltip:t,info:e,container:n})
case"draw-polygon":return new G({tooltip:t,info:e,container:n})
case"draw-polyline":return new A({tooltip:t,info:e,container:n})
case"draw-rectangle":return new P({tooltip:t,info:e,container:n})
case"draw-circle":return new z({tooltip:t,info:e,container:n})
case"extent-rotate":return new $({tooltip:t,info:e,container:n})
case"extent-scale":return new V({tooltip:t,info:e,container:n})
case"transform-absolute":return new F({tooltip:t,info:e,container:n})
case"transform-rotate":return new J({tooltip:t,info:e,container:n})
case"transform-scale":return new U({tooltip:t,info:e,container:n})
case"translate-graphic":return new q({tooltip:t,info:e,container:n})
case"translate-graphic-z":return new Q({tooltip:t,info:e,container:n})
case"translate-graphic-xy":return new X({tooltip:t,info:e,container:n})
case"translate-vertex":return new et({tooltip:t,info:e,container:n})
case"translate-vertex-z":return new ot({tooltip:t,info:e,container:n})
case"translate-vertex-xy":return new it({tooltip:t,info:e,container:n})
case"reshape-edge-offset":return new H({tooltip:t,info:e,container:n})}}(this,e),e=>{this._contentWidget=e,e.container&&t.appendChild(e.container)}))},s.e),Object(s.f)(()=>({container:this._contentContainer,contentWidget:this._contentWidget,screenPoint:this._screenPoint}),ct,s.e)])}destroy(){this._contentWidget=Object(o.e)(this._contentWidget),this._contentContainer.remove()}clear(){this.info=null}get _screenPoint(){const t=this.view.inputManager
return null!=t&&t.multiTouchActive?null:null==t?void 0:t.latestPointerLocation}get test(){var t
return{contentContainer:this._contentContainer,visible:"none"!==(null==(t=this._contentContainer)?void 0:t.style.display)}}}
function ct({container:t,contentWidget:e,screenPoint:n}){const{style:i}=t
if(Object(o.l)(n)&&Object(o.l)(e)){i.display="block"
const e=Object(d.e)(t),r=`translate(${Math.round(n.x)+lt[0]*(e?-1:1)}px, ${Math.round(n.y)+lt[1]}px)`
i.transform=e?"translate(-100%, 0) "+r:r}else i.display="none"}Object(i.a)([Object(a.b)({nonNullable:!0})],at.prototype,"view",void 0),Object(i.a)([Object(a.b)()],at.prototype,"info",void 0),Object(i.a)([Object(a.b)()],at.prototype,"_contentContainer",void 0),Object(i.a)([Object(a.b)()],at.prototype,"_contentWidget",void 0),Object(i.a)([Object(a.b)()],at.prototype,"_screenPoint",null),at=Object(i.a)([Object(c.a)("esri.views.interactive.tooltip.Tooltip")],at)
const lt=[20,20]},2141:function(t,e,n){"use strict"
n.d(e,"a",(function(){return j})),n.d(e,"b",(function(){return y})),n.d(e,"c",(function(){return O})),n.d(e,"d",(function(){return v})),n.d(e,"e",(function(){return m})),n.d(e,"f",(function(){return d})),n.d(e,"g",(function(){return b})),n.d(e,"h",(function(){return x})),n.d(e,"i",(function(){return g}))
var i,r,o=n(23),s=n(1513),a=n(997),c=n(985),l=n(981),u=n(1015),f=n(988),h=n(2138)
function b(t){return p(t,i.Direct)}function d(t){return p(t,i.Horizontal)}function p(t,e){const{hasZ:n,spatialReference:r}=t,c=Object(h.a)(r)
let l=0
const u=Object(a.n)(c)
if(Object(o.k)(u))return null
const f=e===i.Direct?y:v
for(const e of t.paths){if(e.length<2)continue
const t=e.length-1
for(let i=0;i<t;++i){const t=e[i]
w[0]=t[0],w[1]=t[1],w[2]=n?t[2]:0
const s=e[i+1]
S[0]=s[0],S[1]=s[1],S[2]=n?s[2]:0
const a=f(w,S,r)
if(Object(o.k)(a))return null
l+=a.value}}return Object(s.c)(l,u)}function O(t,e){const{spatialReference:n}=t
return Object(f.d)(n,e.spatialReference)?(w[0]=t.x,w[1]=t.y,w[2]=t.hasZ?t.z:0,S[0]=e.x,S[1]=e.y,S[2]=e.hasZ?e.z:0,y(w,S,n)):null}function m(t,e){const{spatialReference:n}=t
return Object(f.d)(n,e.spatialReference)?(w[0]=t.x,w[1]=t.y,w[2]=t.hasZ?t.z:0,S[0]=e.x,S[1]=e.y,S[2]=e.hasZ?e.z:0,v(w,S,n)):null}function g(t,e){const{spatialReference:n}=t
return Object(f.d)(n,e.spatialReference)?(w[0]=t.x,w[1]=t.y,w[2]=t.hasZ?t.z:0,S[0]=e.x,S[1]=e.y,S[2]=e.hasZ?e.z:0,x(w,S,n)):null}function j(t){return w[0]=t.x,w[1]=t.y,w[2]=t.hasZ?t.z:0,function(t,e){const n=Object(a.z)(e)
return Object(o.l)(n)?Object(s.c)(t[2],n):null}(w,t.spatialReference)}function y(t,e,n){const r=_(t,e,n,i.Direct)
return Object(o.l)(r)?Object(s.c)(r.direct,r.unit):null}function v(t,e,n){const r=_(t,e,n,i.Horizontal)
return Object(o.l)(r)?Object(s.c)(r.horizontal,r.unit):null}function x(t,e,n){const r=_(t,e,n,i.Vertical)
return Object(o.l)(r)?Object(s.c)(r.verticalSigned,r.unit):null}function _(t,e,n,r){const s=Object(h.a)(n),l=Object(a.n)(s)
if(Object(o.k)(l))return null
const f=e[2]-t[2]
if(r===i.Vertical)return{verticalSigned:f,unit:l}
if(!Object(u.C)(t,n,M,s)||!Object(u.C)(e,n,z,s))return null
if(r===i.Direct)return{direct:Object(c.r)(z,M),unit:l}
if(Object(c.B)(C,t[0],t[1],e[2]),!Object(u.C)(C,n,C,s))return null
const b=Object(c.r)(C,z)
return r===i.Horizontal?{horizontal:b,unit:l}:{direct:Object(c.r)(z,M),horizontal:b,vertical:Math.abs(f),unit:l}}(r=i||(i={}))[r.Direct=0]="Direct",r[r.Horizontal=1]="Horizontal",r[r.Vertical=2]="Vertical"
const w=Object(l.f)(),S=Object(l.f)(),M=Object(l.f)(),z=Object(l.f)(),C=Object(l.f)()},2143:function(t,e,n){"use strict"
n.d(e,"a",(function(){return y}))
var i=n(968),r=n(975),o=n(1002),s=n(23),a=n(978),c=n(980),l=n(970),u=(n(971),n(445),n(969)),f=n(1013),h=n(985),b=n(981),d=n(1015),p=n(1227),O=n(1268),m=n(1168),g=n(2563),j=n(1917)
let y=class extends r.a{set graphic(t){this._circleCollisionCache=null,this._originalSymbol=t.symbol,this._set("graphic",t),this.attachSymbolChanged()}get elevationInfo(){const{layer:t}=this.graphic,e=t&&"elevationInfo"in t?t.elevationInfo:null,n=Object(p.j)(this.graphic),i=e?e.offset:0
return new m.a({mode:n,offset:i})}set focusedSymbol(t){t!==this._get("focusedSymbol")&&(this._set("focusedSymbol",t),this._updateGraphicSymbol(),this._circleCollisionCache=null)}grabbableForEvent(){return!0}set grabbing(t){t!==this._get("grabbing")&&(this._set("grabbing",t),this._updateGraphicSymbol())}set hovering(t){t!==this._get("hovering")&&(this._set("hovering",t),this._updateGraphicSymbol())}set selected(t){t!==this._get("selected")&&(this._set("selected",t),this._updateGraphicSymbol(),this.events.emit("select-changed",{action:t?"select":"deselect"}))}get _focused(){return this._get("hovering")||this._get("grabbing")}constructor(t){super(t),this.layer=null,this.interactive=!0,this.selectable=!1,this.grabbable=!0,this.dragging=!1,this.cursor=null,this.events=new o.a.EventEmitter,this._circleCollisionCache=null,this._graphicSymbolChangedHandle=null,this._originalSymbol=null}destroy(){this.detachSymbolChanged(),this._resetGraphicSymbol(),this._set("view",null)}intersectionDistance(t){const e=this.graphic
if(!1===e.visible)return null
const n=e.geometry
if(Object(s.k)(n))return null
const i=this._get("focusedSymbol"),r=Object(s.l)(i)?i:e.symbol
return"2d"===this.view.type?this._intersectDistance2D(this.view,t,n,r):this._intersectDistance3D(this.view,t,e)}attach(){this.attachSymbolChanged(),Object(s.l)(this.layer)&&this.layer.add(this.graphic)}detach(){this.detachSymbolChanged(),this._resetGraphicSymbol(),Object(s.l)(this.layer)&&this.layer.remove(this.graphic)}attachSymbolChanged(){this.detachSymbolChanged(),this._graphicSymbolChangedHandle=Object(a.f)(()=>{var t
return null==(t=this.graphic)?void 0:t.symbol},t=>{Object(s.l)(t)&&t!==this.focusedSymbol&&t!==this._originalSymbol&&(this._originalSymbol=t,this._focused&&Object(s.l)(this.focusedSymbol)&&(this.graphic.symbol=this.focusedSymbol))},a.d)}detachSymbolChanged(){Object(s.l)(this._graphicSymbolChangedHandle)&&(this._graphicSymbolChangedHandle.remove(),this._graphicSymbolChangedHandle=null)}onElevationChange(){}onViewChange(){}_updateGraphicSymbol(){this.graphic.symbol=this._focused&&Object(s.l)(this.focusedSymbol)?this.focusedSymbol:this._originalSymbol}_resetGraphicSymbol(){this.graphic.symbol=this._originalSymbol}_intersectDistance2D(t,e,n,i){var r
if(i=i||Object(O.h)(n),Object(s.k)(i))return null
let o=this._circleCollisionCache
if("point"===n.type&&"cim"===i.type&&"CIMPointSymbol"===(null==(r=i.data.symbol)?void 0:r.type)&&i.data.symbol.symbolLayers){const{offsetX:r,offsetY:o,size:s}=Object(g.a)(i),a=Object(c.j)(e,x),l=s/2,u=t.toScreen(n),h=u.x+r,b=u.y+o
return Object(f.k)(a,[h,b])<l*l?1:null}if("point"!==n.type||"simple-marker"!==i.type)return Object(j.b)(e,n,t)?1:null
if(Object(s.k)(o)||!o.originalPoint.equals(n)){const e=n,r=t.spatialReference
if(Object(d.b)(e.spatialReference,r)){const t=Object(d.m)(e,r)
o={originalPoint:e.clone(),mapPoint:t,radiusPx:Object(c.h)(i.size)},this._circleCollisionCache=o}}if(Object(s.l)(o)){const n=Object(c.j)(e,x),r=null==t.toScreen?void 0:t.toScreen(o.mapPoint)
if(!r)return null
const s=o.radiusPx,a=r.x+Object(c.h)(i.xoffset),l=r.y-Object(c.h)(i.yoffset)
return Object(f.k)(n,[a,l])<s*s?1:null}return null}_intersectDistance3D(t,e,n){const i=t.toMap(e,{include:[n]})
return i&&Object(d.v)(i,v,t.renderSpatialReference)?Object(h.r)(v,t.state.camera.eye):null}}
Object(i.a)([Object(l.b)({constructOnly:!0,nonNullable:!0})],y.prototype,"graphic",null),Object(i.a)([Object(l.b)()],y.prototype,"elevationInfo",null),Object(i.a)([Object(l.b)({constructOnly:!0,nonNullable:!0})],y.prototype,"view",void 0),Object(i.a)([Object(l.b)({value:null})],y.prototype,"focusedSymbol",null),Object(i.a)([Object(l.b)({constructOnly:!0})],y.prototype,"layer",void 0),Object(i.a)([Object(l.b)()],y.prototype,"interactive",void 0),Object(i.a)([Object(l.b)()],y.prototype,"selectable",void 0),Object(i.a)([Object(l.b)()],y.prototype,"grabbable",void 0),Object(i.a)([Object(l.b)({value:!1})],y.prototype,"grabbing",null),Object(i.a)([Object(l.b)()],y.prototype,"dragging",void 0),Object(i.a)([Object(l.b)()],y.prototype,"hovering",null),Object(i.a)([Object(l.b)({value:!1})],y.prototype,"selected",null),Object(i.a)([Object(l.b)()],y.prototype,"cursor",void 0),y=Object(i.a)([Object(u.a)("esri.views.interactive.GraphicManipulator")],y)
const v=Object(b.f)(),x=Object(c.g)()},2562:function(t,e,n){"use strict"
n.d(e,"a",(function(){return o}))
var i=n(1970),r=n(988)
function o(t,e,n,o,...s){return Object(r.h)(t)&&Object(i.f)(t)?e.apply(void 0,s):Object(r.p)(t)?n.apply(void 0,s):o.apply(void 0,s)}},2563:function(t,e,n){"use strict"
n.d(e,"a",(function(){return o}))
var i=n(23),r=n(980)
function o(t){let e=0,n=0,o=0
return t?("cim"===t.type&&t.data.symbol&&"symbolLayers"in t.data.symbol&&t.data.symbol.symbolLayers&&t.data.symbol.symbolLayers.map(t=>{"CIMVectorMarker"===t.type&&t.anchorPoint&&(Math.abs(t.anchorPoint.x)>e&&(e=t.anchorPoint.x),Math.abs(t.anchorPoint.y)>n&&(n=t.anchorPoint.y),Object(i.l)(t.size)&&t.size>o&&(o=t.size))}),e=Object(r.h)(e),n=Object(r.h)(n),o=Object(r.h)(o),{offsetX:e,offsetY:n,size:o}):{offsetX:e,offsetY:n,size:o}}},2730:function(t,e,n){"use strict"
n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return f}))
var i=n(990)
const r={main:new i.a([255,127,0]),selected:new i.a([255,255,255]),outline:new i.a([0,0,0,.5]),selectedOutline:new i.a([255,255,255]),hoverOutline:new i.a([255,255,255]),secondary:new i.a([255,255,255]),secondaryOutline:new i.a([100,100,100]),transparent:new i.a([0,0,0,0])}
function o(t,e){if(e)for(const n in e)t[n]=e[n]}class s{constructor(t){this.size=8,this.hoverSize=10,this.color=r.main,this.hoverColor=r.main,this.outlineColor=r.outline,this.hoverOutlineColor=r.hoverOutline,o(this,t)}}class a{constructor(t){this.color=r.secondary,this.hoverColor=r.main,o(this,t)}}class c{constructor(t){this.color=r.transparent,this.hoverColor=r.transparent,this.outlineColor=r.main,this.hoverOutlineColor=r.main,this.stagedColor=r.transparent,this.stagedOutlineColor=r.secondary,o(this,t)}}class l{constructor(t){this.vertex=new s,this.midpoint=new s({color:r.secondary,outlineColor:r.secondaryOutline,size:6}),this.selected=new s({color:r.selected,hoverColor:r.selected,hoverOutlineColor:r.hoverOutline}),o(this,t)}}class u{constructor(t){this.center=new s({color:r.secondaryOutline}),this.fill=new c,this.line=new a,this.vertex=new s({color:r.selected,outlineColor:r.main,hoverColor:r.selected,hoverOutlineColor:r.secondaryOutline}),o(this,t)}}const f=new class{constructor(t){this.reshapeGraphics=new l,this.transformGraphics=new u,o(this,t)}}},2731:function(t,e,n){"use strict"
n.d(e,"a",(function(){return h})),n.d(e,"b",(function(){return f})),n.d(e,"c",(function(){return u}))
var i=n(1513),r=n(981),o=n(785),s=n(1015),a=n(1970),c=n(988),l=n(2562)
function u(t){const{spatialReference:e}=t
return Object(l.a)(e,O,m,g,t)}function f(t,e){if(!Object(c.d)(t.spatialReference,e.spatialReference))return null
const{spatialReference:n}=t
return y[0]=t.x,y[1]=t.y,y[2]=t.hasZ?t.z:0,v[0]=e.x,v[1]=e.y,v[2]=e.hasZ?e.z:0,h(y,v,n)}function h(t,e,n){return Object(l.a)(n,b,d,p,t,e,n)}function b(t,e,n){return Object(i.c)(Object(a.e)(j,t,e,n).distance,"meters")}function d(t,e,n){return Object(i.c)(Object(o.geodesicLength)(function(t,e,n){return{type:"polyline",spatialReference:n,paths:[[[...t],[...e]]]}}(t,e,n),"meters"),"meters")}function p(t,e,n){return Object(s.D)(t,n,x)&&Object(s.D)(e,n,_)?Object(i.c)(Object(a.e)(j,x,_).distance,"meters"):null}function O(t){return Object(i.c)(Object(a.d)([t],"meters")[0],"meters")}function m(t){return Object(i.c)(Object(o.geodesicLength)(t,"meters"),"meters")}function g(t){const e=[]
if(!Object(s.z)(t,e))return null
let n=0
for(const t of e){let e=0
for(let n=1;n<t.length;++n)e+=Object(a.e)(j,t[n-1],t[n]).distance
n+=e}return Object(i.c)(n,"meters")}const j=new a.a,y=Object(r.f)(),v=Object(r.f)(),x=Object(r.f)(),_=Object(r.f)()},785:function(t,e,n){"use strict"
n.r(e),n.d(e,"buffer",(function(){return z})),n.d(e,"changeDefaultSpatialReferenceTolerance",(function(){return I})),n.d(e,"clearDefaultSpatialReferenceTolerance",(function(){return J})),n.d(e,"clip",(function(){return a})),n.d(e,"contains",(function(){return l})),n.d(e,"convexHull",(function(){return v})),n.d(e,"crosses",(function(){return u})),n.d(e,"cut",(function(){return c})),n.d(e,"densify",(function(){return $})),n.d(e,"difference",(function(){return x})),n.d(e,"disjoint",(function(){return O})),n.d(e,"distance",(function(){return f})),n.d(e,"equals",(function(){return h})),n.d(e,"extendedSpatialReferenceInfo",(function(){return s})),n.d(e,"flipHorizontal",(function(){return D})),n.d(e,"flipVertical",(function(){return P})),n.d(e,"generalize",(function(){return k})),n.d(e,"geodesicArea",(function(){return H})),n.d(e,"geodesicBuffer",(function(){return C})),n.d(e,"geodesicDensify",(function(){return E})),n.d(e,"geodesicLength",(function(){return Z})),n.d(e,"intersect",(function(){return w})),n.d(e,"intersectLinesToPoints",(function(){return F})),n.d(e,"intersects",(function(){return b})),n.d(e,"isSimple",(function(){return j})),n.d(e,"nearestCoordinate",(function(){return T})),n.d(e,"nearestVertex",(function(){return L})),n.d(e,"nearestVertices",(function(){return G})),n.d(e,"offset",(function(){return M})),n.d(e,"overlaps",(function(){return m})),n.d(e,"planarArea",(function(){return V})),n.d(e,"planarLength",(function(){return N})),n.d(e,"relate",(function(){return g})),n.d(e,"rotate",(function(){return A})),n.d(e,"simplify",(function(){return y})),n.d(e,"symmetricDifference",(function(){return _})),n.d(e,"touches",(function(){return d})),n.d(e,"union",(function(){return S})),n.d(e,"within",(function(){return p}))
var i=n(1732),r=n(1733)
function o(t){return Array.isArray(t)?t[0].spatialReference:t&&t.spatialReference}function s(t){return i.G.extendedSpatialReferenceInfo(t)}function a(t,e){return i.G.clip(r.hydratedAdapter,o(t),t,e)}function c(t,e){return i.G.cut(r.hydratedAdapter,o(t),t,e)}function l(t,e){return i.G.contains(r.hydratedAdapter,o(t),t,e)}function u(t,e){return i.G.crosses(r.hydratedAdapter,o(t),t,e)}function f(t,e,n){return i.G.distance(r.hydratedAdapter,o(t),t,e,n)}function h(t,e){return i.G.equals(r.hydratedAdapter,o(t),t,e)}function b(t,e){return i.G.intersects(r.hydratedAdapter,o(t),t,e)}function d(t,e){return i.G.touches(r.hydratedAdapter,o(t),t,e)}function p(t,e){return i.G.within(r.hydratedAdapter,o(t),t,e)}function O(t,e){return i.G.disjoint(r.hydratedAdapter,o(t),t,e)}function m(t,e){return i.G.overlaps(r.hydratedAdapter,o(t),t,e)}function g(t,e,n){return i.G.relate(r.hydratedAdapter,o(t),t,e,n)}function j(t){return i.G.isSimple(r.hydratedAdapter,o(t),t)}function y(t){return i.G.simplify(r.hydratedAdapter,o(t),t)}function v(t,e=!1){return i.G.convexHull(r.hydratedAdapter,o(t),t,e)}function x(t,e){return i.G.difference(r.hydratedAdapter,o(t),t,e)}function _(t,e){return i.G.symmetricDifference(r.hydratedAdapter,o(t),t,e)}function w(t,e){return i.G.intersect(r.hydratedAdapter,o(t),t,e)}function S(t,e=null){return i.G.union(r.hydratedAdapter,o(t),t,e)}function M(t,e,n,s,a,c){return i.G.offset(r.hydratedAdapter,o(t),t,e,n,s,a,c)}function z(t,e,n,s=!1){return i.G.buffer(r.hydratedAdapter,o(t),t,e,n,s)}function C(t,e,n,s,a,c){return i.G.geodesicBuffer(r.hydratedAdapter,o(t),t,e,n,s,a,c)}function T(t,e,n=!0){return i.G.nearestCoordinate(r.hydratedAdapter,o(t),t,e,n)}function L(t,e){return i.G.nearestVertex(r.hydratedAdapter,o(t),t,e)}function G(t,e,n,s){return i.G.nearestVertices(r.hydratedAdapter,o(t),t,e,n,s)}function R(t){var e,n
return"xmin"in t?"center"in t?t.center:null:"x"in t?t:"extent"in t&&null!=(e=null==(n=t.extent)?void 0:n.center)?e:null}function A(t,e,n){var r
if(null==t)throw new B
const o=t.spatialReference
if(null==(n=null!=(r=n)?r:R(t)))throw new B
const s=t.constructor.fromJSON(i.G.rotate(t,e,n))
return s.spatialReference=o,s}function D(t,e){var n
if(null==t)throw new B
const r=t.spatialReference
if(null==(e=null!=(n=e)?n:R(t)))throw new B
const o=t.constructor.fromJSON(i.G.flipHorizontal(t,e))
return o.spatialReference=r,o}function P(t,e){var n
if(null==t)throw new B
const r=t.spatialReference
if(null==(e=null!=(n=e)?n:R(t)))throw new B
const o=t.constructor.fromJSON(i.G.flipVertical(t,e))
return o.spatialReference=r,o}function k(t,e,n,s){return i.G.generalize(r.hydratedAdapter,o(t),t,e,n,s)}function $(t,e,n){return i.G.densify(r.hydratedAdapter,o(t),t,e,n)}function E(t,e,n,s=0){return i.G.geodesicDensify(r.hydratedAdapter,o(t),t,e,n,s)}function V(t,e){return i.G.planarArea(r.hydratedAdapter,o(t),t,e)}function N(t,e){return i.G.planarLength(r.hydratedAdapter,o(t),t,e)}function H(t,e,n){return i.G.geodesicArea(r.hydratedAdapter,o(t),t,e,n)}function Z(t,e,n){return i.G.geodesicLength(r.hydratedAdapter,o(t),t,e,n)}function F(t,e){return i.G.intersectLinesToPoints(r.hydratedAdapter,o(t),t,e)}function I(t,e){i.G.changeDefaultSpatialReferenceTolerance(t,e)}function J(t){i.G.clearDefaultSpatialReferenceTolerance(t)}class B extends Error{constructor(){super("Illegal Argument Exception")}}}}])
