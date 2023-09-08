(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[186,25,26,750,751,772],{1080:function(e,t,i){"use strict"
i.d(t,"a",(function(){return O})),i.d(t,"b",(function(){return b})),i.d(t,"c",(function(){return o})),i.d(t,"d",(function(){return _})),i.d(t,"e",(function(){return g})),i.d(t,"f",(function(){return x})),i.d(t,"g",(function(){return y})),i.d(t,"h",(function(){return m})),i.d(t,"i",(function(){return p})),i.d(t,"j",(function(){return v}))
var n=i(234),r=i(983),s=i(1325)
function o(e){const t=Object(n.a)(e)
return(i=t)&&(Object(r.g)(i)?f(i.rings):Object(r.h)(i)?f(i.paths):Object(r.e)(i)&&d(i.points),a(i)),t
var i}function a(e){e&&(Object(r.f)(e)?e.y=-e.y:Object(r.g)(e)?c(e.rings):Object(r.h)(e)?c(e.paths):Object(r.e)(e)&&l(e.points))}function l(e){if(e){const t=e.length
for(let i=0;i<t;i++)e[i][1]=-e[i][1]}}function c(e){if(e)for(const t of e)l(t)}function u(e){if(e)for(let t=e.length-1;t>0;--t)e[t][0]-=e[t-1][0],e[t][1]-=e[t-1][1]}function h(e){if(e)for(const t of e)u(t)}function d(e){if(e){const t=e.length
for(let i=1;i<t;++i)e[i][0]+=e[i-1][0],e[i][1]+=e[i-1][1]}}function f(e){if(e)for(const t of e)d(t)}function _(e){e&&(a(e),Object(r.g)(e)?h(e.rings):Object(r.h)(e)?h(e.paths):Object(r.e)(e)&&u(e.points))}function m(e){if(e)for(const t of e)p(t)}function p(e){e&&e.reverse()}function g(e,t,i){return[e[0]+(t[0]-e[0])*i,e[1]+(t[1]-e[1])*i]}function y(e){return!(!e||0===e.length)&&e[0][0]===e[e.length-1][0]&&e[0][1]===e[e.length-1][1]}function x(e){return e[4]}function v(e,t){e[4]=t}class b{constructor(e,t,i,n=0){this.isClosed=!1,this.multiPath=null,this.acceptPolygon=t,this.acceptPolyline=i,this.geomUnitsPerPoint=n,this.pathCount=-1,this.pathIndex=-1,this.iteratePath=!1,e&&(Object(r.g)(e)?t&&(this.multiPath=e.rings,this.isClosed=!0):Object(r.h)(e)?i&&(this.multiPath=e.paths,this.isClosed=!1):Object(r.d)(e)&&t&&(this.multiPath=S(e).rings,this.isClosed=!0),this.multiPath&&(this.pathCount=this.multiPath.length)),this.internalPlacement=new s.a}next(){if(!this.multiPath)return null
for(;this.iteratePath||this.pathIndex<this.pathCount-1;){this.iteratePath||this.pathIndex++
const e=this.processPath(this.multiPath[this.pathIndex])
if(e)return e}return this.pathCount=-1,this.pathIndex=-1,this.multiPath=null,null}}class O{constructor(e,t,i,n=0){this.isClosed=!1,this.multiPath=null,this.inputGeometries=e,this.acceptPolygon=t,this.acceptPolyline=i,this.geomUnitsPerPoint=n,this.pathCount=-1,this.pathIndex=-1,this.iteratePath=!1}next(){for(;;){if(!this.multiPath){let e=this.inputGeometries.next()
for(;e;){if(Object(r.g)(e)?this.acceptPolygon&&(this.multiPath=e.rings,this.isClosed=!0):Object(r.h)(e)?this.acceptPolyline&&(this.multiPath=e.paths,this.isClosed=!1):Object(r.d)(e)&&this.acceptPolygon&&(this.multiPath=S(e).rings,this.isClosed=!0),this.multiPath){this.pathCount=this.multiPath.length,this.pathIndex=-1
break}e=this.inputGeometries.next()}if(!this.multiPath)return null}for(;this.iteratePath||this.pathIndex<this.pathCount-1;){this.iteratePath||this.pathIndex++
const e=this.processPath(this.multiPath[this.pathIndex])
if(e)return e}this.pathCount=-1,this.pathIndex=-1,this.multiPath=null}}}function S(e){return{rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]}}},1182:function(e,t,i){"use strict"
i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return l})),i.d(t,"d",(function(){return u})),i.d(t,"e",(function(){return h})),i.d(t,"f",(function(){return c})),i.d(t,"g",(function(){return a})),i.d(t,"h",(function(){return s}))
const n=0,r=100
function s(e,t,i){return e[0]=t[0]-i[0],e[1]=t[1]-i[1],e}function o(e,t){return Math.sqrt(e*e+t*t)}function a(e){const t=o(e[0],e[1])
e[0]/=t,e[1]/=t}function l(e,t){return o(e[0]-t[0],e[1]-t[1])}function c(e){return"function"==typeof e}function u(e=2){return 1/Math.max(e,1)}function h(e,t){return[!(null==e||!e.minScale)&&t.scaleToZoom(e.minScale)||n,!(null==e||!e.maxScale)&&t.scaleToZoom(e.maxScale)||r]}},1204:function(e,t,i){"use strict"
i.d(t,"a",(function(){return l}))
var n=i(23),r=i(1e3),s=i(1177),o=i(1023),a=i(984)
class l extends s.a{constructor(){super(...arguments),this._computeDesc=new Map}prepareState({context:e},t){t&&t.includes("hittest")?e.setBlendFunctionSeparate(a.b.ONE,a.b.ONE,a.b.ONE,a.b.ONE):e.setBlendFunctionSeparate(a.b.ONE,a.b.ONE_MINUS_SRC_ALPHA,a.b.ONE,a.b.ONE_MINUS_SRC_ALPHA),e.setBlendingEnabled(!0),e.setColorMask(!0,!0,!0,!0),e.setStencilWriteMask(0),e.setStencilTestEnabled(!0)}draw(e,t,i){const r=this.getGeometryType()
t.commit(e)
const s=t.getGeometry(r)
Object(n.k)(s)||(e.timeline.begin(this.name),e.attributeView.bindTextures(e.context),e.context.setStencilFunction(a.h.EQUAL,t.stencilRef,255),s.forEachCommand(n=>{const r=o.e.load(n.materialKey).symbologyType
this.supportsSymbology(r)&&this.drawGeometry(e,t,n,i)}))}_setSharedUniforms(e,t,i){const{displayLevel:s,pixelRatio:o,state:a,passOptions:l}=t
Object(n.l)(l)&&"hittest"===l.type&&(e.setUniform2fv("u_hittestPos",l.position),e.setUniform1f("u_hittestDist",l.distance)),e.setUniform1f("u_pixelRatio",o),e.setUniformMatrix3fv("u_tileMat3",i.transforms.tileMat3),e.setUniformMatrix3fv("u_viewMat3",a.viewMat3),e.setUniformMatrix3fv("u_dvsMat3",i.transforms.dvs),e.setUniformMatrix3fv("u_displayViewMat3",a.displayViewMat3),e.setUniform1f("u_currentZoom",Math.round(s*r.A)),e.setUniform1i("u_attributeTextureSize",t.attributeView.size),e.setUniform1i("u_attributeData0",r.H),e.setUniform1i("u_attributeData1",r.I),e.setUniform1i("u_attributeData2",r.J),e.setUniform1i("u_attributeData3",r.K),e.setUniform1i("u_attributeData4",r.L),e.setUniform1i("u_attributeData5",r.M)}_setSizeVVUniforms(e,t,i,n){if(e.vvSizeMinMaxValue&&t.setUniform4fv("u_vvSizeMinMaxValue",i.vvSizeMinMaxValue),e.vvSizeScaleStops&&t.setUniform1f("u_vvSizeScaleStopsValue",i.vvSizeScaleStopsValue),e.vvSizeFieldStops){const e=i.getSizeVVFieldStops(n.key.level)
null!=e&&(t.setUniform1fv("u_vvSizeFieldStopsValues",e.values),t.setUniform1fv("u_vvSizeFieldStopsSizes",e.sizes))}e.vvSizeUnitValue&&t.setUniform1f("u_vvSizeUnitValueWorldToPixelsRatio",i.vvSizeUnitValueToPixelsRatio)}_setColorAndOpacityVVUniforms(e,t,i){e.vvColor&&(t.setUniform1fv("u_vvColorValues",i.vvColorValues),t.setUniform4fv("u_vvColors",i.vvColors)),e.vvOpacity&&(t.setUniform1fv("u_vvOpacityValues",i.vvOpacityValues),t.setUniform1fv("u_vvOpacities",i.vvOpacities))}_setRotationVVUniforms(e,t,i){e.vvRotation&&t.setUniform1f("u_vvRotationType","geographic"===i.vvMaterialParameters.vvRotationType?0:1)}_getTriangleDesc(e,t,i=["a_pos"]){const n=t.bufferLayouts.geometry,r=i.map(e=>n.findIndex(t=>t.name===e)),s=`${e}-${r.join("-")}`
let o=this._computeDesc.get(s)
if(!o){const e=t.strides,i=t.strides.geometry,a=new Map(t.attributes),l=n.map(e=>({...e})),c=Math.max(...t.attributes.values()),u={geometry:l}
let h=0
for(const e of r){const t=n[e]
u.geometry.push({count:t.count,name:t.name+"1",divisor:t.divisor,normalized:t.normalized,offset:i+t.offset,stride:i,type:t.type}),u.geometry.push({count:t.count,name:t.name+"2",divisor:t.divisor,normalized:t.normalized,offset:2*i+t.offset,stride:i,type:t.type}),a.set(t.name+"1",c+ ++h),a.set(t.name+"2",c+ ++h)}o={bufferLayouts:u,attributes:a,strides:e},this._computeDesc.set(s,o)}return o}}},1226:function(e,t,i){"use strict"
i.d(t,"a",(function(){return g})),i.d(t,"b",(function(){return p})),i.d(t,"c",(function(){return l})),i.d(t,"d",(function(){return y})),i.d(t,"e",(function(){return x})),i.d(t,"f",(function(){return v})),i.d(t,"g",(function(){return b}))
var n=i(23),r=i(983)
const s=(e,t,i)=>[t,i],o=(e,t,i)=>[t,i,e[2]],a=(e,t,i)=>[t,i,e[2],e[3]]
function l(e){return e?{originPosition:"upper-left"===e.originPosition?"upperLeft":"lower-left"===e.originPosition?"lowerLeft":e.originPosition,scale:e.tolerance?[e.tolerance,e.tolerance]:[1,1],translate:Object(n.l)(e.extent)?[e.extent.xmin,e.extent.ymax]:[0,0]}:null}function c({scale:e,translate:t},i){return Math.round((i-t[0])/e[0])}function u({scale:e,translate:t},i){return Math.round((t[1]-i)/e[1])}function h(e,t,i){const n=[]
let r,s,o,a
for(let l=0;l<i.length;l++){const h=i[l]
l>0?(o=c(e,h[0]),a=u(e,h[1]),o===r&&a===s||(n.push(t(h,o-r,a-s)),r=o,s=a)):(r=c(e,h[0]),s=u(e,h[1]),n.push(t(h,r,s)))}return n.length>0?n:null}function d({scale:e,translate:t},i){return i*e[0]+t[0]}function f({scale:e,translate:t},i){return t[1]-i*e[1]}function _(e,t,i){const n=new Array(i.length)
if(!i.length)return n
const[r,s]=e.scale
let o=d(e,i[0][0]),a=f(e,i[0][1])
n[0]=t(i[0],o,a)
for(let e=1;e<i.length;e++){const l=i[e]
o+=l[0]*r,a-=l[1]*s,n[e]=t(l,o,a)}return n}function m(e,t,i){const n=new Array(i.length)
for(let r=0;r<i.length;r++)n[r]=_(e,t,i[r])
return n}function p(e,t,i,n,r){return t.x=c(e,i.x),t.y=u(e,i.y),t!==i&&(n&&(t.z=i.z),r&&(t.m=i.m)),t}function g(e,t){return e&&t?Object(r.f)(t)?p(e,{},t,!1,!1):Object(r.h)(t)?function(e,t,i,n,r){const l=function(e,t,i,n){const r=[],l=i?n?a:o:n?o:s
for(let i=0;i<t.length;i++){const n=h(e,l,t[i])
n&&n.length>=2&&r.push(n)}return r.length?r:null}(e,i.paths,n,r)
return l?(t.paths=l,t):null}(e,{},t,!1,!1):Object(r.g)(t)?function(e,t,i,n,r){const l=function(e,t,i,n){const r=[],l=i?n?a:o:n?o:s
for(let i=0;i<t.length;i++){const n=h(e,l,t[i])
n&&n.length>=3&&r.push(n)}return r.length?r:null}(e,i.rings,n,r)
return l?(t.rings=l,t):null}(e,{},t,!1,!1):Object(r.e)(t)?function(e,t,i,n,r){var l
return t.points=null!=(l=function(e,t,i,n){return h(e,i?n?a:o:n?o:s,t)}(e,i.points,n,r))?l:[],t}(e,{},t,!1,!1):Object(r.d)(t)?function(e,t,i,n,r){return t.xmin=c(e,i.xmin),t.ymin=u(e,i.ymin),t.xmax=c(e,i.xmax),t.ymax=u(e,i.ymax),t}(e,{},t):null:null}function y(e,t,i,r,l){return Object(n.l)(i)&&(t.points=function(e,t,i,n){return _(e,i?n?a:o:n?o:s,t)}(e,i.points,r,l)),t}function x(e,t,i,r,s){return Object(n.k)(i)||(t.x=d(e,i.x),t.y=f(e,i.y),t!==i&&(r&&(t.z=i.z),s&&(t.m=i.m))),t}function v(e,t,i,r,l){return Object(n.l)(i)&&(t.rings=function(e,t,i,n){return m(e,i?n?a:o:n?o:s,t)}(e,i.rings,r,l)),t}function b(e,t,i,r,l){return Object(n.l)(i)&&(t.paths=function(e,t,i,n){return m(e,i?n?a:o:n?o:s,t)}(e,i.paths,r,l)),t}},1244:function(e,t,i){"use strict"
i.d(t,"a",(function(){return _}))
var n=i(968),r=i(975),s=i(1002),o=i(1025),a=i(1063),l=i(233),c=i(23),u=i(1058),h=i(970),d=(i(971),i(445),i(969))
let f=class extends(Object(o.b)(Object(a.b)(Object(u.b)(s.a.EventedMixin(r.a))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch(e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer&&this.layer.title||"no title"
l.a.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e)}})}get fullOpacity(){return Object(c.v)(this.get("layer.opacity"),1)*Object(c.v)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e
return!this.suspended&&!0===(null==(e=this.layer)?void 0:e.legendEnabled)}get updating(){var e
return!!(null!=(e=this.updatingHandles)&&e.updating||this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e
return!0===(null==(e=this.layer)?void 0:e.visible)}set visible(e){this._overrideIfSome("visible",e)}canResume(){var e,t,i
return this.visible&&(null==(e=this.layer)?void 0:e.loaded)&&!(null!=(t=this.parent)&&t.suspended)&&(null==(i=this.view)?void 0:i.ready)||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{}
return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}}
Object(n.a)([Object(h.b)()],f.prototype,"fullOpacity",null),Object(n.a)([Object(h.b)()],f.prototype,"layer",void 0),Object(n.a)([Object(h.b)()],f.prototype,"parent",void 0),Object(n.a)([Object(h.b)({readOnly:!0})],f.prototype,"suspended",null),Object(n.a)([Object(h.b)({readOnly:!0})],f.prototype,"suspendInfo",null),Object(n.a)([Object(h.b)({readOnly:!0})],f.prototype,"legendEnabled",null),Object(n.a)([Object(h.b)({type:Boolean,readOnly:!0})],f.prototype,"updating",null),Object(n.a)([Object(h.b)({readOnly:!0})],f.prototype,"updatingProgress",null),Object(n.a)([Object(h.b)()],f.prototype,"visible",null),Object(n.a)([Object(h.b)()],f.prototype,"view",void 0),f=Object(n.a)([Object(d.a)("esri.views.layers.LayerView")],f)
const _=f},1261:function(e,t,i){"use strict"
function n(){return new Float32Array(4)}function r(e){const t=new Float32Array(4)
return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function s(e,t,i,n){const r=new Float32Array(4)
return r[0]=e,r[1]=t,r[2]=i,r[3]=n,r}function o(){return n()}function a(){return s(1,1,1,1)}function l(){return s(1,0,0,0)}function c(){return s(0,1,0,0)}function u(){return s(0,0,1,0)}function h(){return s(0,0,0,1)}i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return s}))
const d=o(),f=a(),_=l(),m=c(),p=u(),g=h()
Object.freeze(Object.defineProperty({__proto__:null,ONES:f,UNIT_W:g,UNIT_X:_,UNIT_Y:m,UNIT_Z:p,ZEROS:d,clone:r,create:n,createView:function(e,t){return new Float32Array(e,t,4)},fromValues:s,ones:a,unitW:h,unitX:l,unitY:c,unitZ:u,zeros:o},Symbol.toStringTag,{value:"Module"}))},1269:function(e,t,i){"use strict"
i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return s})),i.d(t,"d",(function(){return h})),i.d(t,"e",(function(){return c})),i.d(t,"f",(function(){return l})),i.d(t,"g",(function(){return a})),i.d(t,"h",(function(){return u}))
const n=8388607,r=8388608,s=0,o=1,a=e=>(e&r)>>>23,l=e=>e&n,c=e=>a(e)===o?254:255
function u(e){return a(e)===o}function h(e,t){return((t?r:0)|e)>>>0}},1293:function(e,t,i){"use strict"
i.d(t,"a",(function(){return r}))
var n=i(1489)
function r(e,t,i=""){return new n.a(e,i+t.shaders.vertexShader,i+t.shaders.fragmentShader,t.attributes)}},1303:function(e,t,i){"use strict"
i.d(t,"a",(function(){return o}))
var n,r,s,o={}
n={get exports(){return o},set exports(e){o=e}},r=function(){function e(e,i,r){r=r||2
var s,o,a,c,u,h,d,f=i&&i.length,_=f?i[0]*r:e.length,m=t(e,0,_,r,!0),p=[]
if(!m||m.next===m.prev)return p
if(f&&(m=l(e,i,m,r)),e.length>80*r){s=a=e[0],o=c=e[1]
for(var g=r;g<_;g+=r)(u=e[g])<s&&(s=u),(h=e[g+1])<o&&(o=h),u>a&&(a=u),h>c&&(c=h)
d=0!==(d=Math.max(a-s,c-o))?1/d:0}return n(m,p,r,s,o,d),p}function t(e,t,i,n,r){var s,o
if(r===I(e,t,i,n)>0)for(s=t;s<i;s+=n)o=C(s,e[s],e[s+1],o)
else for(s=i-n;s>=t;s-=n)o=C(s,e[s],e[s+1],o)
if(o&&x(o,o.next)){var a=o.next
w(o),o=a}return o}function i(e,t){if(!e)return e
t||(t=e)
var i,n=e
do{if(i=!1,n.steiner||!x(n,n.next)&&0!==y(n.prev,n,n.next))n=n.next
else{var r=n.prev
if(w(n),(n=t=r)===n.next)break
i=!0}}while(i||n!==t)
return t}function n(e,t,l,c,u,h,d){if(e){!d&&h&&f(e,c,u,h)
for(var _,m,p=e;e.prev!==e.next;)if(_=e.prev,m=e.next,h?s(e,c,u,h):r(e))t.push(_.i/l),t.push(e.i/l),t.push(m.i/l),w(e),e=m.next,p=m.next
else if((e=m)===p){d?1===d?n(e=o(i(e),t,l),t,l,c,u,h,2):2===d&&a(e,t,l,c,u,h):n(i(e),t,l,c,u,h,1)
break}}}function r(e){var t=e.prev,i=e,n=e.next
if(y(t,i,n)>=0)return!1
for(var r=e.next.next;r!==e.prev;){if(p(t.x,t.y,i.x,i.y,n.x,n.y,r.x,r.y)&&y(r.prev,r,r.next)>=0)return!1
r=r.next}return!0}function s(e,t,i,n){var r=e.prev,s=e,o=e.next
if(y(r,s,o)>=0)return!1
for(var a=r.x<s.x?r.x<o.x?r.x:o.x:s.x<o.x?s.x:o.x,l=r.y<s.y?r.y<o.y?r.y:o.y:s.y<o.y?s.y:o.y,c=r.x>s.x?r.x>o.x?r.x:o.x:s.x>o.x?s.x:o.x,u=r.y>s.y?r.y>o.y?r.y:o.y:s.y>o.y?s.y:o.y,h=_(a,l,t,i,n),d=_(c,u,t,i,n),f=e.prevZ,m=e.nextZ;f&&f.z>=h&&m&&m.z<=d;){if(f!==e.prev&&f!==e.next&&p(r.x,r.y,s.x,s.y,o.x,o.y,f.x,f.y)&&y(f.prev,f,f.next)>=0)return!1
if(f=f.prevZ,m!==e.prev&&m!==e.next&&p(r.x,r.y,s.x,s.y,o.x,o.y,m.x,m.y)&&y(m.prev,m,m.next)>=0)return!1
m=m.nextZ}for(;f&&f.z>=h;){if(f!==e.prev&&f!==e.next&&p(r.x,r.y,s.x,s.y,o.x,o.y,f.x,f.y)&&y(f.prev,f,f.next)>=0)return!1
f=f.prevZ}for(;m&&m.z<=d;){if(m!==e.prev&&m!==e.next&&p(r.x,r.y,s.x,s.y,o.x,o.y,m.x,m.y)&&y(m.prev,m,m.next)>=0)return!1
m=m.nextZ}return!0}function o(e,t,n){var r=e
do{var s=r.prev,o=r.next.next
!x(s,o)&&v(s,r,r.next,o)&&S(s,o)&&S(o,s)&&(t.push(s.i/n),t.push(r.i/n),t.push(o.i/n),w(r),w(r.next),r=e=o),r=r.next}while(r!==e)
return i(r)}function a(e,t,r,s,o,a){var l=e
do{for(var c=l.next.next;c!==l.prev;){if(l.i!==c.i&&g(l,c)){var u=T(l,c)
return l=i(l,l.next),u=i(u,u.next),n(l,t,r,s,o,a),void n(u,t,r,s,o,a)}c=c.next}l=l.next}while(l!==e)}function l(e,n,r,s){var o,a,l,u=[]
for(o=0,a=n.length;o<a;o++)(l=t(e,n[o]*s,o<a-1?n[o+1]*s:e.length,s,!1))===l.next&&(l.steiner=!0),u.push(m(l))
for(u.sort(c),o=0;o<u.length;o++)r=i(r=h(u[o],r),r.next)
return r}function c(e,t){return e.x-t.x}function u(e){if(e.next.prev===e)return e
let t=e
for(;;){const i=t.next
if(i.prev===t||i===t||i===e)break
t=i}return t}function h(e,t){var n=function(e,t){var i,n=t,r=e.x,s=e.y,o=-1/0
do{if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){var a=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y)
if(a<=r&&a>o){if(o=a,a===r){if(s===n.y)return n
if(s===n.next.y)return n.next}i=n.x<n.next.x?n:n.next}}n=n.next}while(n!==t)
if(!i)return null
if(r===o)return i
var l,c=i,u=i.x,h=i.y,f=1/0
n=i
do{r>=n.x&&n.x>=u&&r!==n.x&&p(s<h?r:o,s,u,h,s<h?o:r,s,n.x,n.y)&&(l=Math.abs(s-n.y)/(r-n.x),S(n,e)&&(l<f||l===f&&(n.x>i.x||n.x===i.x&&d(i,n)))&&(i=n,f=l)),n=n.next}while(n!==c)
return i}(e,t)
if(!n)return t
var r=T(n,e),s=i(n,n.next)
let o=u(r)
return i(o,o.next),s=u(s),u(t===n?s:t)}function d(e,t){return y(e.prev,e,t.prev)<0&&y(t.next,e,e.next)<0}function f(e,t,i,n){var r=e
do{null===r.z&&(r.z=_(r.x,r.y,t,i,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next}while(r!==e)
r.prevZ.nextZ=null,r.prevZ=null,function(e){var t,i,n,r,s,o,a,l,c=1
do{for(i=e,e=null,s=null,o=0;i;){for(o++,n=i,a=0,t=0;t<c&&(a++,n=n.nextZ);t++);for(l=c;a>0||l>0&&n;)0!==a&&(0===l||!n||i.z<=n.z)?(r=i,i=i.nextZ,a--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:e=r,r.prevZ=s,s=r
i=n}s.nextZ=null,c*=2}while(o>1)}(r)}function _(e,t,i,n,r){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-i)*r)|e<<8))|e<<4))|e<<2))|e<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-n)*r)|t<<8))|t<<4))|t<<2))|t<<1))<<1}function m(e){var t=e,i=e
do{(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next}while(t!==e)
return i}function p(e,t,i,n,r,s,o,a){return(r-o)*(t-a)-(e-o)*(s-a)>=0&&(e-o)*(n-a)-(i-o)*(t-a)>=0&&(i-o)*(s-a)-(r-o)*(n-a)>=0}function g(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!function(e,t){var i=e
do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&v(i,i.next,e,t))return!0
i=i.next}while(i!==e)
return!1}(e,t)&&(S(e,t)&&S(t,e)&&function(e,t){var i=e,n=!1,r=(e.x+t.x)/2,s=(e.y+t.y)/2
do{i.y>s!=i.next.y>s&&i.next.y!==i.y&&r<(i.next.x-i.x)*(s-i.y)/(i.next.y-i.y)+i.x&&(n=!n),i=i.next}while(i!==e)
return n}(e,t)&&(y(e.prev,e,t.prev)||y(e,t.prev,t))||x(e,t)&&y(e.prev,e,e.next)>0&&y(t.prev,t,t.next)>0)}function y(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function x(e,t){return e.x===t.x&&e.y===t.y}function v(e,t,i,n){var r=O(y(e,t,i)),s=O(y(e,t,n)),o=O(y(i,n,e)),a=O(y(i,n,t))
return r!==s&&o!==a||!(0!==r||!b(e,i,t))||!(0!==s||!b(e,n,t))||!(0!==o||!b(i,e,n))||!(0!==a||!b(i,t,n))}function b(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function O(e){return e>0?1:e<0?-1:0}function S(e,t){return y(e.prev,e,e.next)<0?y(e,t,e.next)>=0&&y(e,e.prev,t)>=0:y(e,t,e.prev)<0||y(e,e.next,t)<0}function T(e,t){var i=new M(e.i,e.x,e.y),n=new M(t.i,t.x,t.y),r=e.next,s=t.prev
return e.next=t,t.prev=e,i.next=r,r.prev=i,n.next=i,i.prev=n,s.next=n,n.prev=s,n}function C(e,t,i,n){var r=new M(e,t,i)
return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function w(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function M(e,t,i){this.i=e,this.x=t,this.y=i,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function I(e,t,i,n){for(var r=0,s=t,o=i-n;s<i;s+=n)r+=(e[o]-e[s])*(e[s+1]+e[o+1]),o=s
return r}return e.deviation=function(e,t,i,n){var r=t&&t.length,s=r?t[0]*i:e.length,o=Math.abs(I(e,0,s,i))
if(r)for(var a=0,l=t.length;a<l;a++){var c=t[a]*i,u=a<l-1?t[a+1]*i:e.length
o-=Math.abs(I(e,c,u,i))}var h=0
for(a=0;a<n.length;a+=3){var d=n[a]*i,f=n[a+1]*i,_=n[a+2]*i
h+=Math.abs((e[d]-e[_])*(e[f+1]-e[d+1])-(e[d]-e[f])*(e[_+1]-e[d+1]))}return 0===o&&0===h?0:Math.abs((h-o)/o)},e.flatten=function(e){for(var t=e[0][0].length,i={vertices:[],holes:[],dimensions:t},n=0,r=0;r<e.length;r++){for(var s=0;s<e[r].length;s++)for(var o=0;o<t;o++)i.vertices.push(e[r][s][o])
r>0&&(n+=e[r-1].length,i.holes.push(n))}return i},e},void 0!==(s=r())&&(n.exports=s)},1304:function(e,t,i){"use strict"
i.d(t,"a",(function(){return r}))
const n=new(i(1731).a)
function r(e){if(null==e)return["",!1]
if(!n.hasBidiChar(e))return[e,!1]
let t
return t="rtl"===n.checkContextual(e)?"IDNNN":"ICNNN",[n.bidiTransform(e,t,"VLYSN"),!0]}},1315:function(e,t,i){"use strict"
i.d(t,"a",(function(){return r}))
var n=i(1320)
const r={shaders:{vertexShader:Object(n.a)("background/background.vert"),fragmentShader:Object(n.a)("background/background.frag")},attributes:new Map([["a_pos",0]])}},1316:function(e,t,i){"use strict"
i.d(t,"a",(function(){return h}))
var n=i(23),r=i(1003),s=i(1022),o=i(1204),a=i(1023),l=i(1187),c=i(984)
const u={shader:"materials/icon",vertexLayout:{geometry:[{location:0,name:"a_pos",count:2,type:c.k.SHORT},{location:1,name:"a_vertexOffset",count:2,type:c.k.SHORT},{location:2,name:"a_texCoords",count:2,type:c.k.UNSIGNED_SHORT},{location:3,name:"a_bitSetAndDistRatio",count:2,type:c.k.UNSIGNED_SHORT},{location:4,name:"a_id",count:4,type:c.k.UNSIGNED_BYTE},{location:5,name:"a_color",count:4,type:c.k.UNSIGNED_BYTE,normalized:!0},{location:6,name:"a_outlineColor",count:4,type:c.k.UNSIGNED_BYTE,normalized:!0},{location:7,name:"a_sizeAndOutlineWidth",count:4,type:c.k.UNSIGNED_BYTE},{location:8,name:"a_zoomRange",count:2,type:c.k.UNSIGNED_SHORT}]},hittestAttributes:["a_vertexOffset","a_texCoords"]}
class h extends o.a{dispose(){}getGeometryType(){return r.d.MARKER}supportsSymbology(e){return e!==r.e.HEATMAP&&e!==r.e.PIE_CHART}drawGeometry(e,t,i,r){const{context:o,painter:h,rendererInfo:d,state:f,passOptions:_,requestRender:m,allowDelayedRender:p}=e,g=a.d.load(i.materialKey),y=Object(l.b)(g.data),x=Object(n.l)(_)&&"hittest"===_.type,{shader:v,vertexLayout:b,hittestAttributes:O}=Object(n.v)(y.programSpec,u)
let S=c.r.TRIANGLES,T=Object(s.g)(g.data,b)
x&&(T=this._getTriangleDesc(i.materialKey,T,O),S=c.r.POINTS)
const{attributes:C,bufferLayouts:w}=T,M=h.materialManager.getMaterialProgram(e,g,v,C,r)
if(p&&Object(n.l)(m)&&!M.compiled)return void m()
o.useProgram(M),g.textureBinding&&h.textureManager.bindTextures(o,M,g,!0),this._setSharedUniforms(M,e,t)
const I=g.vvRotation?f.displayViewMat3:f.displayMat3
M.setUniformMatrix3fv("u_displayMat3",I),this._setSizeVVUniforms(g,M,d,t),this._setColorAndOpacityVVUniforms(g,M,d),this._setRotationVVUniforms(g,M,d)
const P=i.target.getVAO(o,w,C,x)
let E=i.indexCount,L=i.indexFrom*Uint32Array.BYTES_PER_ELEMENT
x&&(E/=3,L/=3),o.bindVAO(P),this._drawMarkers(e,t,M,S,E,L,x),o.bindVAO(null)}_drawMarkers(e,t,i,n,r,s,o){e.context.drawElements(n,r,c.k.UNSIGNED_INT,s)}}},1320:function(e,t,i){"use strict"
i.d(t,"a",(function(){return s}))
const n={background:{"background.frag":"uniform lowp vec4 u_color;\nvoid main() {\ngl_FragColor = u_color;\n}","background.vert":"attribute vec2 a_pos;\nuniform highp mat3 u_dvsMat3;\nuniform mediump vec2 u_coord_range;\nuniform mediump float u_depth;\nvoid main() {\nvec3 v_pos = u_dvsMat3 * vec3(u_coord_range * a_pos, 1.0);\ngl_Position = vec4(v_pos.xy, 0.0, 1.0);\n}"},bitBlit:{"bitBlit.frag":"uniform lowp sampler2D u_tex;\nuniform lowp float u_opacity;\nvarying mediump vec2 v_uv;\nvoid main() {\nlowp vec4 color = texture2D(u_tex, v_uv);\ngl_FragColor = color *  u_opacity;\n}","bitBlit.vert":"attribute vec2 a_pos;\nattribute vec2 a_tex;\nvarying mediump vec2 v_uv;\nvoid main(void) {\ngl_Position = vec4(a_pos, 0.0, 1.0);\nv_uv = a_tex;\n}"},blend:{"blend.frag":"precision mediump float;\nuniform sampler2D u_layerTexture;\nuniform lowp float u_opacity;\nuniform lowp float u_inFadeOpacity;\n#ifndef NORMAL\nuniform sampler2D u_backbufferTexture;\n#endif\nvarying mediump vec2 v_uv;\nfloat rgb2v(in vec3 c) {\nreturn max(c.x, max(c.y, c.z));\n}\nvec3 rgb2hsv(in vec3 c) {\nvec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\nvec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);\nvec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);\nfloat d = q.x - min(q.w, q.y);\nfloat e = 1.0e-10;\nreturn vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);\n}\nvec3 hsv2rgb(in vec3 c) {\nvec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\nvec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\nreturn c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n}\nvec3 tint(in vec3 Cb, in vec3 Cs) {\nfloat vIn = rgb2v(Cb);\nvec3 hsvTint = rgb2hsv(Cs);\nvec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);\nreturn hsv2rgb(hsvOut);\n}\nfloat overlay(in float Cb, in float Cs) {\nreturn (1.0 - step(0.5, Cs)) * (1.0 - 2.0 * (1.0 - Cs ) * (1.0 - Cb)) + step(0.5, Cs) * (2.0 * Cs * Cb);\n}\nfloat colorDodge(in float Cb, in float Cs) {\nreturn (Cb == 0.0) ? 0.0 : (Cs == 1.0) ? 1.0 : min(1.0, Cb / (1.0 - Cs));\n}\nfloat colorBurn(in float Cb, in float Cs) {\nreturn (Cb == 1.0) ? 1.0 : (Cs == 0.0) ? 0.0 : 1.0 - min(1.0, (1.0 - Cb) / Cs);\n}\nfloat hardLight(in float Cb, in float Cs) {\nreturn (1.0 - step(0.5, Cs)) * (2.0 * Cs * Cb) + step(0.5, Cs) * (1.0 - 2.0 * (1.0 - Cs) * (1.0 - Cb));\n}\nfloat reflectBlend(in float Cb, in float Cs) {\nreturn (Cs == 1.0) ? Cs : min(Cb * Cb / (1.0 - Cs), 1.0);\n}\nfloat softLight(in float Cb, in float Cs) {\nif (Cs <= 0.5) {\nreturn Cb - (1.0 - 2.0 * Cs) * Cb * (1.0 - Cb);\n}\nif (Cb <= 0.25) {\nreturn Cb + (2.0 * Cs - 1.0) * Cb * ((16.0 * Cb - 12.0) * Cb + 3.0);\n}\nreturn Cb + (2.0 * Cs - 1.0) * (sqrt(Cb) - Cb);\n}\nfloat vividLight(in float Cb, in float Cs) {\nreturn (1.0 - step(0.5, Cs)) * colorBurn(Cb, 2.0 * Cs) + step(0.5, Cs) * colorDodge(Cb, (2.0 * (Cs - 0.5)));\n}\nfloat minv3(in vec3 c) {\nreturn min(min(c.r, c.g), c.b);\n}\nfloat maxv3(in vec3 c) {\nreturn max(max(c.r, c.g), c.b);\n}\nfloat lumv3(in vec3 c) {\nreturn dot(c, vec3(0.3, 0.59, 0.11));\n}\nfloat satv3(vec3 c) {\nreturn maxv3(c) - minv3(c);\n}\nvec3 clipColor(vec3 color) {\nfloat lum = lumv3(color);\nfloat mincol = minv3(color);\nfloat maxcol = maxv3(color);\nif (mincol < 0.0) {\ncolor = lum + ((color - lum) * lum) / (lum - mincol);\n}\nif (maxcol > 1.0) {\ncolor = lum + ((color - lum) * (1.0 - lum)) / (maxcol - lum);\n}\nreturn color;\n}\nvec3 setLum(vec3 cbase, vec3 clum) {\nfloat lbase = lumv3(cbase);\nfloat llum = lumv3(clum);\nfloat ldiff = llum - lbase;\nvec3 color = cbase + vec3(ldiff);\nreturn clipColor(color);\n}\nvec3 setLumSat(vec3 cbase, vec3 csat, vec3 clum)\n{\nfloat minbase = minv3(cbase);\nfloat sbase = satv3(cbase);\nfloat ssat = satv3(csat);\nvec3 color;\nif (sbase > 0.0) {\ncolor = (cbase - minbase) * ssat / sbase;\n} else {\ncolor = vec3(0.0);\n}\nreturn setLum(color, clum);\n}\nvoid main() {\nvec4 src = texture2D(u_layerTexture, v_uv);\n#ifdef NORMAL\ngl_FragColor = src *  u_opacity;\n#else\nvec4 dst = texture2D(u_backbufferTexture, v_uv);\nvec3 Cs = src.a == 0.0 ? src.rgb : vec3(src.rgb / src.a);\nvec3 Cb = dst.a == 0.0 ? dst.rgb : vec3(dst.rgb / dst.a);\nfloat as = u_opacity * src.a;\nfloat ab = dst.a;\n#ifdef DESTINATION_OVER\ngl_FragColor = vec4(as * Cs * (1.0 - ab) + ab * Cb, as + ab - as * ab);\n#endif\n#ifdef SOURCE_IN\nvec4 color = vec4(as * Cs * ab, as * ab);\nvec4 fadeColor = (1.0 - u_opacity) * u_inFadeOpacity * vec4(ab * Cb, ab);\ngl_FragColor = color + fadeColor;\n#endif\n#ifdef DESTINATION_IN\nvec4 color = vec4(ab * Cb * as, ab * as);\nvec4 fadeColor = (1.0 - u_opacity) * u_inFadeOpacity * vec4(ab * Cb, ab);\ngl_FragColor = color + fadeColor;\n#endif\n#ifdef SOURCE_OUT\ngl_FragColor = vec4(as * Cs * (1.0 - ab), as * (1.0 - ab));\n#endif\n#ifdef DESTINATION_OUT\ngl_FragColor = vec4(ab * Cb * (1.0 - as), ab * (1.0 - as));\n#endif\n#ifdef SOURCE_ATOP\ngl_FragColor = vec4(as * Cs * ab + ab * Cb * (1.0 - as), ab);\n#endif\n#ifdef DESTINATION_ATOP\ngl_FragColor = vec4(as * Cs * (1.0 - ab) + ab * Cb * as, as);\n#endif\n#ifdef XOR\ngl_FragColor = vec4(as * Cs * (1.0 - ab) + ab * Cb * (1.0 - as),\nas * (1.0 - ab) + ab * (1.0 - as));\n#endif\n#ifdef MULTIPLY\ngl_FragColor = vec4(as * Cs * ab * Cb + (1.0 - ab) * as * Cs + (1.0 - as) * ab * Cb,\nas + ab * (1.0 - as));\n#endif\n#ifdef SCREEN\ngl_FragColor = vec4((Cs + Cb - Cs * Cb) * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef OVERLAY\nvec3 f = vec3(overlay(Cb.r, Cs.r), overlay(Cb.g, Cs.g), overlay(Cb.b, Cs.b));\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef DARKEN\ngl_FragColor = vec4(min(Cs, Cb) * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef LIGHTER\ngl_FragColor = vec4(as * Cs + ab * Cb, as + ab);\n#endif\n#ifdef LIGHTEN\ngl_FragColor = vec4(max(Cs, Cb) * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef COLOR_DODGE\nvec3 f = clamp(vec3(colorDodge(Cb.r, Cs.r), colorDodge(Cb.g, Cs.g), colorDodge(Cb.b, Cs.b)), vec3(0.0), vec3(1.0));\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef COLOR_BURN\nvec3 f = vec3(colorBurn(Cb.r, Cs.r), colorBurn(Cb.g, Cs.g), colorBurn(Cb.b, Cs.b));\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef HARD_LIGHT\nvec3 f = vec3(hardLight(Cb.r, Cs.r), hardLight(Cb.g, Cs.g), hardLight(Cb.b, Cs.b));\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef SOFT_LIGHT\nvec3 f = vec3(softLight(Cb.r, Cs.r), softLight(Cb.g, Cs.g), softLight(Cb.b, Cs.b));\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef DIFFERENCE\ngl_FragColor = vec4(abs(Cb - Cs) * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef EXCLUSION\nvec3 f = Cs + Cb - 2.0 * Cs * Cb;\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef INVERT\ngl_FragColor = vec4((1.0 - Cb) * as * ab + Cb * ab * (1.0 - as), ab);\n#endif\n#ifdef VIVID_LIGHT\nvec3 f = vec3(clamp(vividLight(Cb.r, Cs.r), 0.0, 1.0),\nclamp(vividLight(Cb.g, Cs.g), 0.0, 1.0),\nclamp(vividLight(Cb.b, Cs.b), 0.0, 1.0));\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef HUE\nvec3 f = setLumSat(Cs,Cb,Cb);\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef SATURATION\nvec3 f = setLumSat(Cb,Cs,Cb);\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef COLOR\nvec3 f = setLum(Cs,Cb);\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef LUMINOSITY\nvec3 f = setLum(Cb,Cs);\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef PLUS\ngl_FragColor = clamp(vec4(src.r + Cb.r, src.g + Cb.g, src.b + Cb.b, as + ab), 0.0, 1.0);\n#endif\n#ifdef MINUS\ngl_FragColor = vec4(clamp(vec3(Cb.r - src.r, Cb.g - src.g, Cb.b - src.b), 0.0, 1.0), ab * as);\n#endif\n#ifdef AVERAGE\nvec3 f = (Cb + Cs) / 2.0;\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef REFLECT\nvec3 f = clamp(vec3(reflectBlend(Cb.r, Cs.r),\nreflectBlend(Cb.g, Cs.g),\nreflectBlend(Cb.b, Cs.b)), vec3(0.0), vec3(1.0));\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#endif\n}","blend.vert":"attribute vec2 a_position;\nvarying mediump vec2 v_uv;\nvoid main(void) {\ngl_Position = vec4(a_position , 0.0, 1.0);\nv_uv = (a_position + 1.0) / 2.0;\n}"},debug:{overlay:{"overlay.frag":"precision mediump float;\nvarying vec4 v_color;\nvoid main(void) {\ngl_FragColor = v_color;\n}","overlay.vert":"attribute vec3 a_PositionAndFlags;\nuniform mat3 u_dvsMat3;\nuniform vec4 u_colors[4];\nuniform float u_opacities[4];\nvarying vec4 v_color;\nvoid main(void) {\nvec2 position = a_PositionAndFlags.xy;\nfloat flags = a_PositionAndFlags.z;\nint colorIndex = int(mod(flags, 4.0));\nvec4 color;\nfor (int i = 0; i < 4; i++) {\ncolor = u_colors[i];\nif (i == colorIndex) {\nbreak;\n}\n}\nint opacityIndex = int(mod(floor(flags / 4.0), 4.0));\nfloat opacity;\nfor (int i = 0; i < 4; i++) {\nopacity = u_opacities[i];\nif (i == opacityIndex) {\nbreak;\n}\n}\nv_color = color * opacity;\ngl_Position = vec4((u_dvsMat3 * vec3(position, 1.0)).xy, 0.0, 1.0);\n}"}},dot:{dot:{"dot.frag":"precision mediump float;\nvarying vec4 v_color;\nvarying float v_dotRatio;\nvarying float v_invEdgeRatio;\nuniform highp float u_tileZoomFactor;\nvoid main()\n{\nfloat dist = length(gl_PointCoord - vec2(.5, .5)) * 2.;\nfloat alpha = smoothstep(0., 1., v_invEdgeRatio * (dist - v_dotRatio) + 1.);\ngl_FragColor = v_color * alpha;\n}","dot.vert":"precision highp float;\nattribute vec2 a_pos;\nuniform sampler2D u_texture;\nuniform highp mat3 u_dvsMat3;\nuniform highp float u_tileZoomFactor;\nuniform highp float u_dotSize;\nuniform highp float u_pixelRatio;\nvarying vec2 v_pos;\nvarying vec4 v_color;\nvarying float v_dotRatio;\nvarying float v_invEdgeRatio;\nconst float EPSILON = 0.000001;\nvoid main()\n{\nmat3 tileToTileTexture = mat3(  1., 0., 0.,\n0., -1., 0.,\n0., 1., 1.  );\nvec3 texCoords = tileToTileTexture * vec3(a_pos.xy / 512., 1.);\nv_color = texture2D(u_texture, texCoords.xy);\nfloat smoothEdgeWidth = max(u_dotSize / 2., 1.) ;\nfloat z = 0.;\nz += 2.0 * step(v_color.a, EPSILON);\ngl_PointSize = (smoothEdgeWidth + u_dotSize);\ngl_Position = vec4((u_dvsMat3 * vec3(a_pos + .5, 1.)).xy, z, 1.);\nv_dotRatio = u_dotSize / gl_PointSize;\nv_invEdgeRatio = -1. / ( smoothEdgeWidth / gl_PointSize );\ngl_PointSize  *= (u_pixelRatio * u_tileZoomFactor);\n}"}},filtering:{"bicubic.glsl":"vec4 computeWeights(float v) {\nfloat b = 1.0 / 6.0;\nfloat v2 = v * v;\nfloat v3 = v2 * v;\nfloat w0 = b * (-v3 + 3.0 * v2 - 3.0 * v + 1.0);\nfloat w1 = b * (3.0 * v3  - 6.0 * v2 + 4.0);\nfloat w2 = b * (-3.0 * v3 + 3.0 * v2 + 3.0 * v + 1.0);\nfloat w3 = b * v3;\nreturn vec4(w0, w1, w2, w3);\n}\nvec4 bicubicOffsetsAndWeights(float v) {\nvec4 w = computeWeights(v);\nfloat g0 = w.x + w.y;\nfloat g1 = w.z + w.w;\nfloat h0 = 1.0 - (w.y / g0) + v;\nfloat h1 = 1.0 + (w.w / g1) - v;\nreturn vec4(h0, h1, g0, g1);\n}\nvec4 sampleBicubicBSpline(sampler2D sampler, vec2 coords, vec2 texSize) {\nvec2 eX = vec2(1.0 / texSize.x, 0.0);\nvec2 eY = vec2(0.0, 1.0 / texSize.y);\nvec2 texel = coords * texSize - 0.5;\nvec3 hgX = bicubicOffsetsAndWeights(fract(texel).x).xyz;\nvec3 hgY = bicubicOffsetsAndWeights(fract(texel).y).xyz;\nvec2 coords10 = coords + hgX.x * eX;\nvec2 coords00 = coords - hgX.y * eX;\nvec2 coords11 = coords10 + hgY.x * eY;\nvec2 coords01 = coords00 + hgY.x * eY;\ncoords10 = coords10 - hgY.y * eY;\ncoords00 = coords00 - hgY.y * eY;\nvec4 color00 = texture2D(sampler, coords00);\nvec4 color10 = texture2D(sampler, coords10);\nvec4 color01 = texture2D(sampler, coords01);\nvec4 color11 = texture2D(sampler, coords11);\ncolor00 = mix(color00, color01, hgY.z);\ncolor10 = mix(color10, color11, hgY.z);\ncolor00 = mix(color00, color10, hgX.z);\nreturn color00;\n}","bilinear.glsl":"vec4 sampleBilinear(sampler2D sampler, vec2 coords, vec2 texSize) {\nvec2 texelStart = floor(coords * texSize);\nvec2 coord0 = texelStart / texSize;\nvec2 coord1 = (texelStart +  vec2(1.0, 0.0)) / texSize;\nvec2 coord2 = (texelStart +  vec2(0.0, 1.0)) / texSize;\nvec2 coord3 = (texelStart +  vec2(1.0, 1.0)) / texSize;\nvec4 color0 = texture2D(sampler, coord0);\nvec4 color1 = texture2D(sampler, coord1);\nvec4 color2 = texture2D(sampler, coord2);\nvec4 color3 = texture2D(sampler, coord3);\nvec2 blend = fract(coords * texSize);\nvec4 color01 = mix(color0, color1, blend.x);\nvec4 color23 = mix(color2, color3, blend.x);\nvec4 color = mix(color01, color23, blend.y);\n#ifdef NNEDGE\nfloat alpha = floor(color0.a * color1.a * color2.a * color3.a + 0.5);\ncolor = color * alpha + (1.0 - alpha) * texture2D(sampler, coords);\n#endif\nreturn color;\n}","epx.glsl":"vec4 sampleEPX(sampler2D sampler, float size, vec2 coords, vec2 texSize) {\nvec2 invSize = 1.0 / texSize;\nvec2 texel = coords * texSize;\nvec2 texel_i = floor(texel);\nvec2 texel_frac = fract(texel);\nvec4 colorP = texture2D(sampler, texel_i * invSize);\nvec4 colorP1 = vec4(colorP);\nvec4 colorP2 = vec4(colorP);\nvec4 colorP3 = vec4(colorP);\nvec4 colorP4 = vec4(colorP);\nvec4 colorA = texture2D(sampler, (texel_i - vec2(0.0, 1.0)) * invSize);\nvec4 colorB = texture2D(sampler, (texel_i + vec2(1.0, 0.0)) * invSize);\nvec4 colorC = texture2D(sampler, (texel_i - vec2(1.0, 0.0)) * invSize);\nvec4 colorD = texture2D(sampler, (texel_i + vec2(0.0, 1.0)) * invSize);\nif (colorC == colorA && colorC != colorD && colorA != colorB) {\ncolorP1 = colorA;\n}\nif (colorA == colorB && colorA != colorC && colorB != colorD) {\ncolorP2 = colorB;\n}\nif (colorD == colorC && colorD != colorB && colorC != colorA) {\ncolorP3 = colorC;\n}\nif (colorB == colorD && colorB != colorA && colorD != colorC) {\ncolorP4 = colorD;\n}\nvec4 colorP12 = mix(colorP1, colorP2, texel_frac.x);\nvec4 colorP34 = mix(colorP1, colorP2, texel_frac.x);\nreturn mix(colorP12, colorP34, texel_frac.y);\n}"},fx:{integrate:{"integrate.frag":"precision mediump float;\nuniform lowp sampler2D u_sourceTexture;\nuniform lowp sampler2D u_maskTexture;\nuniform mediump float u_zoomLevel;\nuniform highp float u_timeDelta;\nuniform highp float u_animationTime;\nvarying highp vec2 v_texcoord;\n#include <materials/utils.glsl>\nvoid main()\n{\n#ifdef DELTA\nvec4 texel = texture2D(u_sourceTexture, v_texcoord);\nvec4 data0 = texture2D(u_maskTexture, v_texcoord);\nfloat flags = data0.r * 255.0;\nfloat groupMinZoom = data0.g * 255.0;\nfloat isVisible = getFilterBit(flags, 0);\nfloat wouldClip = step(groupMinZoom, u_zoomLevel);\nfloat direction = wouldClip * 1.0 + (1.0 - wouldClip) * -1.0;\nfloat dt = u_timeDelta / max(u_animationTime, 0.0001);\nvec4 nextState = vec4(texel + direction * dt);\ngl_FragColor =  vec4(nextState);\n#elif defined(UPDATE)\nvec4 texel = texture2D(u_sourceTexture, v_texcoord);\ngl_FragColor = texel;\n#endif\n}","integrate.vert":"precision mediump float;\nattribute vec2 a_pos;\nvarying highp vec2 v_texcoord;\nvoid main()\n{\nv_texcoord = a_pos;\ngl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n}"}},heatmap:{heatmapResolve:{"heatmapResolve.frag":"precision highp float;\n#ifdef HEATMAP_PRECISION_HALF_FLOAT\n#define COMPRESSION_FACTOR 4.0\n#else\n#define COMPRESSION_FACTOR 1.0\n#endif\nuniform sampler2D u_texture;\nuniform sampler2D u_gradient;\nuniform vec2 u_densityMinAndInvRange;\nuniform float u_densityNormalization;\nvarying vec2 v_uv;\nvoid main() {\nvec4 data = texture2D(u_texture, v_uv);\nfloat density = data.r * COMPRESSION_FACTOR;\ndensity *= u_densityNormalization;\ndensity = (density - u_densityMinAndInvRange.x) * u_densityMinAndInvRange.y;\nvec4 color = texture2D(u_gradient, vec2(density, 0.5));\ngl_FragColor = vec4(color.rgb * color.a, color.a);\n}","heatmapResolve.vert":"precision highp float;\nattribute vec2 a_pos;\nvarying vec2 v_uv;\nvoid main() {\nv_uv = a_pos;\ngl_Position = vec4(a_pos * 2.0 - 1.0, 1., 1.);\n}"}},highlight:{"blur.frag":"varying mediump vec2 v_texcoord;\nuniform mediump vec4 u_direction;\nuniform mediump mat4 u_channelSelector;\nuniform mediump float u_sigma;\nuniform sampler2D u_texture;\nmediump float gauss1(mediump vec2 dir) {\nreturn exp(-dot(dir, dir) / (2.0 * u_sigma * u_sigma));\n}\nmediump vec4 selectChannel(mediump vec4 sample) {\nreturn u_channelSelector * sample;\n}\nvoid accumGauss1(mediump float i, inout mediump float tot, inout mediump float weight) {\nmediump float w = gauss1(i * u_direction.xy);\ntot += selectChannel(texture2D(u_texture, v_texcoord + i * u_direction.zw))[3] * w;\nweight += w;\n}\nvoid main(void) {\nmediump float tot = 0.0;\nmediump float weight = 0.0;\naccumGauss1(-5.0, tot, weight);\naccumGauss1(-4.0, tot, weight);\naccumGauss1(-3.0, tot, weight);\naccumGauss1(-2.0, tot, weight);\naccumGauss1(-1.0, tot, weight);\naccumGauss1(0.0, tot, weight);\naccumGauss1(1.0, tot, weight);\naccumGauss1(2.0, tot, weight);\naccumGauss1(3.0, tot, weight);\naccumGauss1(4.0, tot, weight);\naccumGauss1(5.0, tot, weight);\ngl_FragColor = vec4(0.0, 0.0, 0.0, tot / weight);\n}","highlight.frag":"varying mediump vec2 v_texcoord;\nuniform sampler2D u_texture;\nuniform mediump float u_sigma;\nuniform sampler2D u_shade;\nuniform mediump vec2 u_minMaxDistance;\nmediump float estimateDistance() {\nmediump float y = texture2D(u_texture, v_texcoord)[3];\nconst mediump float y0 = 0.5;\nmediump float m0 = 1.0 / (sqrt(2.0 * 3.1415) * u_sigma);\nmediump float d = (y - y0) / m0;\nreturn d;\n}\nmediump vec4 shade(mediump float d) {\nmediump float mappedDistance = (d - u_minMaxDistance.x) / (u_minMaxDistance.y - u_minMaxDistance.x);\nmappedDistance = clamp(mappedDistance, 0.0, 1.0);\nreturn texture2D(u_shade, vec2(mappedDistance, 0.5));\n}\nvoid main(void) {\nmediump float d = estimateDistance();\ngl_FragColor = shade(d);\n}","textured.vert":"attribute mediump vec2 a_position;\nattribute mediump vec2 a_texcoord;\nvarying mediump vec2 v_texcoord;\nvoid main(void) {\ngl_Position = vec4(a_position, 0.0, 1.0);\nv_texcoord = a_texcoord;\n}"},magnifier:{"magnifier.frag":"uniform lowp vec4 u_background;\nuniform mediump sampler2D u_readbackTexture;\nuniform mediump sampler2D u_maskTexture;\nuniform mediump sampler2D u_overlayTexture;\nuniform bool u_maskEnabled;\nuniform bool u_overlayEnabled;\nvarying mediump vec2 v_texCoord;\nconst lowp float barrelFactor = 1.1;\nlowp vec2 barrel(lowp vec2 uv) {\nlowp vec2 uvn = uv * 2.0 - 1.0;\nif (uvn.x == 0.0 && uvn.y == 0.0) {\nreturn vec2(0.5, 0.5);\n}\nlowp float theta = atan(uvn.y, uvn.x);\nlowp float r = pow(length(uvn), barrelFactor);\nreturn r * vec2(cos(theta), sin(theta)) * 0.5 + 0.5;\n}\nvoid main(void)\n{\nlowp vec4 color = texture2D(u_readbackTexture, barrel(v_texCoord));\ncolor = (color + (1.0 - color.a) * u_background);\nlowp float mask = u_maskEnabled ? texture2D(u_maskTexture, v_texCoord).a : 1.0;\ncolor *= mask;\nlowp vec4 overlayColor = u_overlayEnabled ? texture2D(u_overlayTexture, v_texCoord) : vec4(0);\ngl_FragColor = overlayColor + (1.0 - overlayColor.a) * color;\n}","magnifier.vert":"precision mediump float;\nattribute mediump vec2 a_pos;\nuniform mediump vec4 u_drawPos;\nvarying mediump vec2 v_texCoord;\nvoid main(void)\n{\nv_texCoord = a_pos;\ngl_Position = vec4(u_drawPos.xy + vec2(a_pos - 0.5) * u_drawPos.zw, 0.0, 1.0);\n}"},materials:{"attributeData.glsl":"uniform highp sampler2D u_attributeData0;\nuniform highp sampler2D u_attributeData1;\nuniform highp sampler2D u_attributeData2;\nuniform highp sampler2D u_attributeData3;\nuniform highp sampler2D u_attributeData4;\nuniform highp sampler2D u_attributeData5;\nuniform highp int u_attributeTextureSize;\nhighp vec2 getAttributeDataCoords(in highp vec3 id) {\nhighp vec3  texel = unpackDisplayIdTexel(id);\nhighp float size = float(u_attributeTextureSize);\nhighp float u32 = float(int(texel.r) + int(texel.g) * 256 + int(texel.b) * 256 * 256);\nhighp float col = mod(u32, size);\nhighp float row = (u32 - col) / size;\nhighp float u = col / size;\nhighp float v = row / size;\nreturn vec2(u, v);\n}\nhighp vec2 getAttributeDataTextureCoords(in highp vec3 id) {\nreturn (getAttributeDataCoords(id) * 2.0) - 1.0 + (.5 / vec2(u_attributeTextureSize));\n}\nhighp vec4 getAttributeData0(in highp vec3 id) {\nvec2 coords = getAttributeDataCoords(id);\nreturn texture2D(u_attributeData0, coords);\n}\nhighp vec4 getAttributeData1(in highp vec3 id) {\nhighp vec2 coords = getAttributeDataCoords(id);\nreturn texture2D(u_attributeData1, coords);\n}\nhighp vec4 getAttributeData2(in highp vec3 id) {\nhighp vec2 coords = getAttributeDataCoords(id);\nreturn texture2D(u_attributeData2, coords);\n}\nhighp vec4 getAttributeData3(in highp vec3 id) {\nhighp vec2 coords = getAttributeDataCoords(id);\nreturn texture2D(u_attributeData3, coords);\n}\nhighp vec4 getAttributeData4(in highp vec3 id) {\nhighp vec2 coords = getAttributeDataCoords(id);\nreturn texture2D(u_attributeData4, coords);\n}\nhighp vec4 getAttributeData5(in highp vec3 id) {\nhighp vec2 coords = getAttributeDataCoords(id);\nreturn texture2D(u_attributeData5, coords);\n}\nfloat u88VVToFloat(in vec2 v) {\nbool isMagic = v.x == 255.0 && v.y == 255.0;\nif (isMagic) {\nreturn NAN_MAGIC_NUMBER;\n}\nreturn (v.x + v.y * float(0x100)) - 32768.0;\n}","barycentric.glsl":"float inTriangle(vec3 bary) {\nvec3 absBary = abs(bary);\nreturn step((absBary.x + absBary.y + absBary.z), 1.05);\n}\nvec3 xyToBarycentric(in vec2 pos, in vec2 v0,  in vec2 v1, in vec2 v2) {\nmat3 xyToBarycentricMat3 = mat3(\nv1.x * v2.y - v2.x * v1.y, v2.x * v0.y - v0.x * v2.y, v0.x * v1.y - v1.x * v0.y,\nv1.y - v2.y, v2.y - v0.y, v0.y - v1.y,\nv2.x - v1.x, v0.x - v2.x, v1.x - v0.x\n);\nfloat A2 = v0.x * (v1.y - v2.y) + v1.x * (v2.y - v0.y) + v2.x * (v0.y - v1.y);\nreturn (1. / A2) * xyToBarycentricMat3 * vec3(1., pos);\n}","constants.glsl":"const float C_DEG_TO_RAD = 3.14159265359 / 180.0;\nconst float C_256_TO_RAD = 3.14159265359 / 128.0;\nconst float C_RAD_TO_DEG = 180.0 / 3.141592654;\nconst float POSITION_PRECISION = 1.0 / 8.0;\nconst float FILL_POSITION_PRECISION = 1.0 / 1.0;\nconst float SOFT_EDGE_RATIO = 1.0;\nconst float THIN_LINE_WIDTH_FACTOR = 1.1;\nconst float THIN_LINE_HALF_WIDTH = 1.0;\nconst float EXTRUDE_SCALE_PLACEMENT_PADDING = 1.0 / 4.0;\nconst float OFFSET_PRECISION = 1.0 / 8.0;\nconst float OUTLINE_SCALE = 1.0 / 5.0;\nconst float SDF_FONT_SIZE = 24.0;\nconst float MAX_SDF_DISTANCE = 8.0;\nconst float PLACEMENT_PADDING = 8.0;\nconst float EPSILON = 0.00001;\nconst float EPSILON_HITTEST = 0.05;\nconst int MAX_FILTER_COUNT = 2;\nconst int ATTR_VV_SIZE = 0;\nconst int ATTR_VV_COLOR = 1;\nconst int ATTR_VV_OPACITY = 2;\nconst int ATTR_VV_ROTATION = 3;\nconst highp float NAN_MAGIC_NUMBER = 1e-30;\nconst int BITSET_GENERIC_LOCK_COLOR = 1;\nconst int BITSET_GENERIC_CONSIDER_ALPHA_ONLY = 4;\nconst int BITSET_MARKER_ALIGNMENT_MAP = 0;\nconst int BITSET_MARKER_OUTLINE_ALLOW_COLOR_OVERRIDE = 2;\nconst int BITSET_MARKER_SCALE_SYMBOLS_PROPORTIONALLY = 3;\nconst int BITSET_TYPE_FILL_OUTLINE = 0;\nconst int BITSET_FILL_RANDOM_PATTERN_OFFSET = 2;\nconst int BITSET_FILL_HAS_UNRESOLVED_REPLACEMENT_COLOR = 3;\nconst int BITSET_LINE_SCALE_DASH = 2;",fill:{"common.glsl":"#include <materials/symbologyTypeUtils.glsl>\n#ifdef PATTERN\nuniform mediump vec2 u_mosaicSize;\nvarying mediump float v_sampleAlphaOnly;\n#endif\n#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY\nuniform lowp vec4 u_isActive[ 2 ];\nuniform highp float u_dotValue;\nuniform highp float u_tileDotsOverArea;\nuniform highp float u_dotTextureDotCount;\nuniform mediump float u_tileZoomFactor;\n#endif\nvarying highp vec3 v_id;\nvarying lowp vec4 v_color;\nvarying lowp float v_opacity;\nvarying mediump vec4 v_aux1;\n#ifdef PATTERN\nvarying mediump vec2 v_tileTextureCoord;\n#endif\n#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\nvarying lowp float v_isOutline;\n#endif\n#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY\nvarying highp vec2 v_dotTextureCoords;\nvarying highp vec4 v_dotThresholds[ 2 ];\n#endif","fill.frag":"precision highp float;\n#include <materials/constants.glsl>\n#include <materials/utils.glsl>\n#include <materials/fill/common.glsl>\n#ifdef PATTERN\nuniform lowp sampler2D u_texture;\n#endif\n#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY\nuniform mediump mat4 u_dotColors[ 2 ];\nuniform sampler2D u_dotTextures[ 2 ];\nuniform vec4 u_dotBackgroundColor;\n#endif\n#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\n#include <materials/shared/line/common.glsl>\n#include <materials/shared/line/line.frag>\nlowp vec4 drawLine() {\nfloat v_lineWidth = v_aux1.x;\nvec2  v_normal    = v_aux1.yz;\nLineData inputs = LineData(\nv_color,\nv_normal,\nv_lineWidth,\nv_opacity,\nv_id\n);\nreturn shadeLine(inputs);\n}\n#endif\nlowp vec4 drawFill() {\nlowp vec4 out_color = vec4(0.);\n#ifdef HITTEST\nout_color = v_color;\n#elif defined(PATTERN)\nmediump vec4 v_tlbr = v_aux1;\nmediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);\nmediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);\nlowp vec4 color = texture2D(u_texture, samplePos);\nif (v_sampleAlphaOnly > 0.5) {\ncolor.rgb = vec3(color.a);\n}\nout_color = v_opacity * v_color * color;\n#elif SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY && !defined(HIGHLIGHT)\nvec4 textureThresholds0 = texture2D(u_dotTextures[0], v_dotTextureCoords);\nvec4 textureThresholds1 = texture2D(u_dotTextures[1], v_dotTextureCoords);\nvec4 difference0 = v_dotThresholds[0] - textureThresholds0;\nvec4 difference1 = v_dotThresholds[1] - textureThresholds1;\n#ifdef DD_DOT_BLENDING\nvec4 isPositive0 = step(0.0, difference0);\nvec4 isPositive1 = step(0.0, difference1);\nfloat weightSum = dot(isPositive0, difference0) + dot(isPositive1, difference1);\nfloat lessThanEqZero = step(weightSum, 0.0);\nfloat greaterThanZero = 1.0 - lessThanEqZero ;\nfloat divisor = (weightSum + lessThanEqZero);\nvec4 weights0 = difference0 * isPositive0 / divisor;\nvec4 weights1 = difference1 * isPositive1 / divisor;\nvec4 dotColor = u_dotColors[0] * weights0 + u_dotColors[1] * weights1;\nvec4 preEffectColor = greaterThanZero * dotColor + lessThanEqZero * u_dotBackgroundColor;\n#else\nfloat diffMax = max(max4(difference0), max4(difference1));\nfloat lessThanZero = step(diffMax, 0.0);\nfloat greaterOrEqZero = 1.0 - lessThanZero;\nvec4 isMax0 = step(diffMax, difference0);\nvec4 isMax1 = step(diffMax, difference1);\nvec4 dotColor = u_dotColors[0] * isMax0 + u_dotColors[1] * isMax1;\nvec4 preEffectColor = greaterOrEqZero * dotColor + lessThanZero * u_dotBackgroundColor;\n#endif\nout_color = preEffectColor;\n#else\nout_color = v_opacity * v_color;\n#endif\n#ifdef HIGHLIGHT\nout_color.a = 1.0;\n#endif\nreturn out_color;\n}\nvoid main() {\n#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\nif (v_isOutline > 0.5) {\ngl_FragColor = drawLine();\n} else {\ngl_FragColor = drawFill();\n}\n#else\ngl_FragColor = drawFill();\n#endif\n}","fill.vert":"#include <materials/symbologyTypeUtils.glsl>\n#define PACKED_LINE\nprecision highp float;\nattribute float a_bitset;\n#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY\nattribute float a_inverseArea;\nvec4 a_color = vec4(0.0, 0.0, 0.0, 1.0);\nvec2 a_zoomRange = vec2(0.0, 10000.0);\n#else\nattribute vec4 a_color;\nattribute vec4 a_aux2;\nattribute vec4 a_aux3;\n#ifndef SYMBOLOGY_TYPE_IS_SIMPLE_LIKE\nattribute vec4 a_aux1;\nattribute vec2 a_zoomRange;\n#else\nvec2 a_zoomRange = vec2(0.0, 10000.0);\n#endif\n#endif\nuniform vec2 u_tileOffset;\n#include <util/encoding.glsl>\n#include <materials/vcommon.glsl>\n#include <materials/fill/common.glsl>\n#include <materials/fill/hittest.glsl>\nconst float INV_SCALE_COMPRESSION_FACTOR = 1.0 / 128.0;\n#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY\nvec4 dotThreshold(vec4 featureAttrOverFeatureArea, float dotValue, float tileDotsOverArea) {\nreturn featureAttrOverFeatureArea * (1.0 / dotValue)  * (1.0 / tileDotsOverArea);\n}\n#endif\n#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\n#include <materials/shared/line/common.glsl>\n#include <materials/shared/line/line.vert>\nvoid drawLine(out lowp vec4 out_color, out highp vec3 out_pos) {\nLineData outputs = buildLine(\nout_pos,\na_id,\na_pos,\na_color,\n(a_aux3.xy - 128.) / 16.,\n(a_aux3.zw - 128.) / 16.,\n0.,\na_aux2.z / 16.,\na_bitset,\nvec4(0.),\nvec2(0.),\na_aux2.w / 16.\n);\nv_id      = outputs.id;\nv_opacity = outputs.opacity;\nv_aux1    = vec4(outputs.lineHalfWidth, outputs.normal, 0.);\nout_color = outputs.color;\n}\n#endif\nvoid drawFill(out lowp vec4 out_color, out highp vec3 out_pos) {\nfloat a_bitSet = a_bitset;\nout_color = getColor(a_color, a_bitSet, BITSET_GENERIC_LOCK_COLOR);\nv_opacity = getOpacity();\nv_id      = norm(a_id);\n#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY\nmat3 tileToTileNormalized = mat3(  2. / 512.,  0.,  0.,\n0., -2. / 512.,  0.,\n-1.,  1.,  1.  );\nout_pos   = tileToTileNormalized * vec3((a_pos * FILL_POSITION_PRECISION), 1.);\n#else\nout_pos   = u_dvsMat3 * vec3(a_pos * FILL_POSITION_PRECISION, 1.);\n#endif\n#ifdef PATTERN\nvec4  a_tlbr   = a_aux1;\nfloat a_width  = a_aux2.x;\nfloat a_height = a_aux2.y;\nvec2  a_offset = a_aux2.zw;\nvec2  a_scale  = a_aux3.xy;\nfloat a_angle  = a_aux3.z;\nvec2 scale = INV_SCALE_COMPRESSION_FACTOR * a_scale;\nfloat width = u_zoomFactor * a_width * scale.x;\nfloat height = u_zoomFactor * a_height * scale.y;\nfloat angle = C_256_TO_RAD * a_angle;\nfloat sinA = sin(angle);\nfloat cosA = cos(angle);\nfloat dx = 0.0;\nfloat dy = 0.0;\nif (getBit(a_bitset, BITSET_FILL_RANDOM_PATTERN_OFFSET) > 0.5) {\nfloat id = rgba2float(vec4(a_id, 0.0));\ndx = rand(vec2(id, 0.0));\ndy = rand(vec2(0.0, id));\n}\nmat3 patternMatrix = mat3(cosA / width, sinA / height, 0,\n-sinA / width, cosA / height, 0,\ndx,            dy,           1);\nvec2 tileOffset = vec2(u_tileOffset.x * cosA - u_tileOffset.y * sinA, u_tileOffset.x * sinA + u_tileOffset.y * cosA);\ntileOffset = mod(tileOffset, vec2(a_aux2.x, a_aux2.y));\nvec2 symbolOffset = (a_offset - tileOffset) / vec2(width, height);\nv_tileTextureCoord = (patternMatrix * vec3(a_pos * FILL_POSITION_PRECISION, 1.0)).xy - symbolOffset;\nv_aux1 = a_tlbr / u_mosaicSize.xyxy;\nv_sampleAlphaOnly = getBit(a_bitset, BITSET_GENERIC_CONSIDER_ALPHA_ONLY);\nif (getBit(a_bitSet, BITSET_FILL_HAS_UNRESOLVED_REPLACEMENT_COLOR) > 0.5) {\n#ifdef VV_COLOR\nv_sampleAlphaOnly *= 1.0 - getBit(a_bitSet, BITSET_GENERIC_LOCK_COLOR);\n#else\nv_sampleAlphaOnly = 0.0;\n#endif\n}\n#elif SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY\nvec4 ddAttributeData0 = getAttributeData2(a_id) * u_isActive[0] * a_inverseArea;\nvec4 ddAttributeData1 = getAttributeData3(a_id) * u_isActive[1] * a_inverseArea;\nfloat size = u_tileZoomFactor * 512.0 * 1.0 / u_pixelRatio;\nv_dotThresholds[0] = dotThreshold(ddAttributeData0, u_dotValue, u_tileDotsOverArea);\nv_dotThresholds[1] = dotThreshold(ddAttributeData1, u_dotValue, u_tileDotsOverArea);\nv_dotTextureCoords = (a_pos * FILL_POSITION_PRECISION + 0.5) / size;\n#endif\n}\n#ifdef HITTEST\nvoid draw(out lowp vec4 out_color, out highp vec3 out_pos) {\n#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\nif (getBit(a_bitset, BITSET_TYPE_FILL_OUTLINE) > 0.5) {\nout_pos = vec3(0., 0., 2.);\nreturn;\n}\n#endif\nhittestFill(out_color, out_pos);\ngl_PointSize = 1.0;\n}\n#elif defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE)\nvoid draw(out lowp vec4 out_color, out highp vec3 out_pos) {\nv_isOutline = getBit(a_bitset, BITSET_TYPE_FILL_OUTLINE);\nif (v_isOutline > 0.5) {\ndrawLine(out_color, out_pos);\n} else {\ndrawFill(out_color, out_pos);\n}\n}\n#else\n#define draw drawFill\n#endif\nvoid main()\n{\nINIT;\nhighp vec3 pos  = vec3(0.);\nhighp vec4 color  = vec4(0.);\ndraw(color, pos);\nv_color = color;\ngl_Position = vec4(clip(v_color, pos, getFilterFlags(), a_zoomRange), 1.0);\n}","hittest.glsl":"#ifdef HITTEST\n#include <materials/hittest/common.glsl>\nattribute vec2 a_pos1;\nattribute vec2 a_pos2;\nvoid hittestFill(\nout lowp vec4 out_color,\nout highp vec3 out_pos\n) {\nvec3 pos        = u_viewMat3 * u_tileMat3 * vec3(a_pos  * FILL_POSITION_PRECISION, 1.);\nvec3 pos1       = u_viewMat3 * u_tileMat3 * vec3(a_pos1 * FILL_POSITION_PRECISION, 1.);\nvec3 pos2       = u_viewMat3 * u_tileMat3 * vec3(a_pos2 * FILL_POSITION_PRECISION, 1.);\nfloat hittestDist = u_hittestDist;\nfloat dist = distPointTriangle(u_hittestPos, pos.xy, pos1.xy, pos2.xy);\nout_pos = vec3(getAttributeDataTextureCoords(a_id), 0.0);\nif (dist < 0. || dist >= hittestDist) {\nout_pos.z += 2.0;\n}\nout_color = vec4(1. / 255., 0, 0, dist == 0. ? (1. / 255.) : 0.);\n}\n#endif"},hittest:{"common.glsl":"#ifdef HITTEST\nuniform float u_hittestDist;\nuniform highp vec2 u_hittestPos;\nfloat projectScalar(vec2 a, vec2 b) {\nreturn dot(a, normalize(b));\n}\nfloat distPointSegment(vec2 p0, vec2 p1, vec2 p2) {\nvec2 L = p2 - p1;\nvec2 A = p0 - p1;\nfloat projAL = projectScalar(A, L);\nfloat t = clamp(projAL / length(L), 0., 1.);\nreturn distance(p0, p1 + t * (p2 - p1));\n}\nvoid hittestMarker(out lowp vec4 out_color, out highp vec3 out_pos, in highp vec3 pos, float size) {\nfloat dist = distance(pos, vec3(u_hittestPos, 1.));\nout_pos = vec3(getAttributeDataTextureCoords(a_id), 0.0);\nif ((dist - size) > u_hittestDist) {\nout_pos.z += 2.0;\n}\nout_color = vec4(1. / 255., 0, 0, (dist - size) < 0. ? (1. / 255.) : 0.);\n}\nfloat intersectPointTriangleBary(vec2 p, vec2 a, vec2 b, vec2 c) {\nreturn inTriangle(xyToBarycentric(p, a, b, c));\n}\nfloat distPointTriangle(vec2 p, vec2 a, vec2 b, vec2 c) {\nvec2 ba = b - a;\nvec2 ca = c - a;\nfloat crossProduct = ba.x * ca.y - ca.x * ba.y;\nbool isParallel = crossProduct < EPSILON_HITTEST && crossProduct > -EPSILON_HITTEST;\nif (isParallel) {\nreturn -1.;\n}\nif (intersectPointTriangleBary(p.xy, a, b, c) == 1.) {\nreturn 0.;\n}\nfloat distAB = distPointSegment(p, a, b);\nfloat distBC = distPointSegment(p, b, c);\nfloat distCA = distPointSegment(p, c, a);\nreturn min(min(distAB, distBC), distCA);\n}\n#endif"},icon:{"common.glsl":"#include <util/encoding.glsl>\nuniform lowp vec2 u_mosaicSize;\nvarying lowp vec4 v_color;\nvarying highp vec3 v_id;\nvarying highp vec4 v_sizeTex;\nvarying mediump vec3 v_pos;\nvarying lowp float v_opacity;\nuniform lowp sampler2D u_texture;\n#ifdef SDF\nvarying lowp vec4 v_outlineColor;\nvarying mediump float v_outlineWidth;\nvarying mediump float v_distRatio;\nvarying mediump float v_overridingOutlineColor;\nvarying mediump float v_isThin;\n#endif\n#ifdef SDF\nvec4 getColor(vec2 v_size, vec2 v_tex) {\nlowp vec4 fillPixelColor = v_color;\nfloat d = 0.5 - rgba2float(texture2D(u_texture, v_tex));\nfloat size = max(v_size.x, v_size.y);\nfloat dist = d * size * SOFT_EDGE_RATIO * v_distRatio;\nfillPixelColor *= clamp(0.5 - dist, 0.0, 1.0);\nfloat outlineWidth = v_outlineWidth;\n#ifdef HIGHLIGHT\noutlineWidth = max(outlineWidth, 4.0 * v_isThin);\n#endif\nif (outlineWidth > 0.25) {\nlowp vec4 outlinePixelColor = v_overridingOutlineColor * v_color + (1.0 - v_overridingOutlineColor) * v_outlineColor;\nfloat clampedOutlineSize = min(outlineWidth, size);\noutlinePixelColor *= clamp(0.5 - abs(dist) + clampedOutlineSize * 0.5, 0.0, 1.0);\nreturn v_opacity * ((1.0 - outlinePixelColor.a) * fillPixelColor + outlinePixelColor);\n}\nreturn v_opacity * fillPixelColor;\n}\n#else\nvec4 getColor(vec2 _v_size, vec2 v_tex) {\nlowp vec4 texColor = texture2D(u_texture, v_tex);\nreturn v_opacity * texColor * v_color;\n}\n#endif",heatmapAccumulate:{"common.glsl":"varying lowp vec4 v_hittestResult;\nvarying mediump vec2 v_offsetFromCenter;\nvarying highp float v_fieldValue;","heatmapAccumulate.frag":"precision mediump float;\n#include <materials/icon/heatmapAccumulate/common.glsl>\n#ifdef HEATMAP_PRECISION_HALF_FLOAT\n#define COMPRESSION_FACTOR 0.25\n#else\n#define COMPRESSION_FACTOR 1.0\n#endif\nuniform lowp sampler2D u_texture;\nvoid main() {\n#ifdef HITTEST\ngl_FragColor = v_hittestResult;\n#else\nfloat radius = length(v_offsetFromCenter);\nfloat shapeWeight = step(radius, 1.0);\nfloat oneMinusRadiusSquared = 1.0 - radius * radius;\nfloat kernelWeight = oneMinusRadiusSquared * oneMinusRadiusSquared;\ngl_FragColor = vec4(shapeWeight * kernelWeight * v_fieldValue * COMPRESSION_FACTOR);\n#endif\n}","heatmapAccumulate.vert":"precision highp float;\nattribute vec2 a_vertexOffset;\nvec4 a_color = vec4(0.0);\nvec2 a_zoomRange = vec2(0.0, 10000.0);\nuniform float u_radius;\nuniform float u_isFieldActive;\n#include <materials/vcommon.glsl>\n#include <materials/hittest/common.glsl>\n#include <materials/icon/heatmapAccumulate/common.glsl>\nvoid main() {\nfloat filterFlags = getFilterFlags();\n#ifdef HITTEST\nhighp vec4 out_hittestResult = vec4(0.);\nhighp vec3 out_pos = vec3(0.);\nvec3 pos = u_viewMat3 * u_tileMat3 * vec3(a_pos * POSITION_PRECISION, 1.0);\nhittestMarker(out_hittestResult, out_pos, pos, u_radius);\nv_hittestResult = out_hittestResult;\ngl_PointSize = 1.;\ngl_Position = vec4(clip(a_color, out_pos, filterFlags, a_zoomRange), 1.0);\n#else\nv_offsetFromCenter = sign(a_vertexOffset);\nv_fieldValue = getAttributeData2(a_id).x * u_isFieldActive + 1.0 - u_isFieldActive;\nvec3 centerPos = u_dvsMat3 * vec3(a_pos * POSITION_PRECISION, 1.0);\nvec3 vertexPos = centerPos + u_displayViewMat3 * vec3(v_offsetFromCenter, 0.0) * u_radius;\ngl_Position = vec4(clip(a_color, vertexPos, filterFlags, a_zoomRange), 1.0);\n#endif\n}"},"hittest.glsl":"#ifdef HITTEST\n#include <materials/hittest/common.glsl>\nattribute vec2 a_vertexOffset1;\nattribute vec2 a_vertexOffset2;\nattribute vec2 a_texCoords1;\nattribute vec2 a_texCoords2;\nvec2 getTextureCoords(in vec3 bary, in vec2 texCoords0, in vec2 texCoords1, in vec2 texCoords2) {\nreturn texCoords0 * bary.x + texCoords1 * bary.y + texCoords2 * bary.z;\n}\nvoid hittestIcon(\ninout lowp vec4 out_color,\nout highp vec3 out_pos,\nin vec3 pos,\nin vec3 offset,\nin vec2 size,\nin float scaleFactor,\nin float isMapAligned\n) {\nout_pos = vec3(getAttributeDataTextureCoords(a_id), 0.0);\nvec3 posBase = u_viewMat3 * u_tileMat3  * pos;\nvec3 offset1 = scaleFactor * vec3(a_vertexOffset1 / 16.0, 0.);\nvec3 offset2 = scaleFactor * vec3(a_vertexOffset2 / 16.0, 0.);\nvec2 pos0    = (posBase + getMatrixNoDisplay(isMapAligned) * offset).xy;\nvec2 pos1    = (posBase + getMatrixNoDisplay(isMapAligned) * offset1).xy;\nvec2 pos2    = (posBase + getMatrixNoDisplay(isMapAligned) * offset2).xy;\nvec3 bary0 = xyToBarycentric(u_hittestPos + vec2(-u_hittestDist, -u_hittestDist), pos0, pos1, pos2);\nvec3 bary1 = xyToBarycentric(u_hittestPos + vec2(0., -u_hittestDist), pos0, pos1, pos2);\nvec3 bary2 = xyToBarycentric(u_hittestPos + vec2(u_hittestDist, -u_hittestDist), pos0, pos1, pos2);\nvec3 bary3 = xyToBarycentric(u_hittestPos + vec2(-u_hittestDist, 0.), pos0, pos1, pos2);\nvec3 bary4 = xyToBarycentric(u_hittestPos, pos0, pos1, pos2);\nvec3 bary5 = xyToBarycentric(u_hittestPos + vec2(u_hittestDist, 0.), pos0, pos1, pos2);\nvec3 bary6 = xyToBarycentric(u_hittestPos + vec2(-u_hittestDist, u_hittestDist), pos0, pos1, pos2);\nvec3 bary7 = xyToBarycentric(u_hittestPos + vec2(0., u_hittestDist), pos0, pos1, pos2);\nvec3 bary8 = xyToBarycentric(u_hittestPos + vec2(u_hittestDist, u_hittestDist), pos0, pos1, pos2);\nvec2 tex0 = a_texCoords  / u_mosaicSize;\nvec2 tex1 = a_texCoords1 / u_mosaicSize;\nvec2 tex2 = a_texCoords2 / u_mosaicSize;\nfloat alphaSum = 0.;\nalphaSum += inTriangle(bary0) * getColor(size, getTextureCoords(bary0, tex0, tex1, tex2)).a;\nalphaSum += inTriangle(bary1) * getColor(size, getTextureCoords(bary1, tex0, tex1, tex2)).a;\nalphaSum += inTriangle(bary2) * getColor(size, getTextureCoords(bary2, tex0, tex1, tex2)).a;\nalphaSum += inTriangle(bary3) * getColor(size, getTextureCoords(bary3, tex0, tex1, tex2)).a;\nalphaSum += inTriangle(bary4) * getColor(size, getTextureCoords(bary4, tex0, tex1, tex2)).a;\nalphaSum += inTriangle(bary5) * getColor(size, getTextureCoords(bary5, tex0, tex1, tex2)).a;\nalphaSum += inTriangle(bary6) * getColor(size, getTextureCoords(bary6, tex0, tex1, tex2)).a;\nalphaSum += inTriangle(bary7) * getColor(size, getTextureCoords(bary7, tex0, tex1, tex2)).a;\nout_pos.z += step(alphaSum, .05) * 2.0;\nout_color = vec4(1. / 255., 0., 0., alphaSum / 255.);\n}\n#endif","icon.frag":"precision mediump float;\n#include <materials/constants.glsl>\n#include <materials/utils.glsl>\n#include <materials/icon/common.glsl>\nvoid main()\n{\n#ifdef HITTEST\nvec4 color = v_color;\n#else\nvec4 color = getColor(v_sizeTex.xy, v_sizeTex.zw);\n#endif\n#ifdef HIGHLIGHT\ncolor.a = step(1.0 / 255.0, color.a);\n#endif\ngl_FragColor = color;\n}","icon.vert":"precision highp float;\nattribute vec4 a_color;\nattribute vec4 a_outlineColor;\nattribute vec4 a_sizeAndOutlineWidth;\nattribute vec2 a_vertexOffset;\nattribute vec2 a_texCoords;\nattribute vec2 a_bitSetAndDistRatio;\nattribute vec2 a_zoomRange;\n#include <materials/vcommon.glsl>\n#include <materials/icon/common.glsl>\n#include <materials/icon/hittest.glsl>\nfloat getMarkerScaleFactor(inout vec2 size, in float referenceSize) {\n#ifdef VV_SIZE\nfloat f = getSize(size.y) / size.y;\nfloat sizeFactor = size.y / referenceSize;\nreturn getSize(referenceSize) / referenceSize;\n#else\nreturn 1.;\n#endif\n}\nvoid main()\n{\nINIT;\nfloat a_bitSet = a_bitSetAndDistRatio.x;\nvec3  pos           = vec3(a_pos * POSITION_PRECISION, 1.0);\nvec2  size          = a_sizeAndOutlineWidth.xy * a_sizeAndOutlineWidth.xy / 128.0;\nvec3  offset        = vec3(a_vertexOffset / 16.0, 0.);\nfloat outlineSize   = a_sizeAndOutlineWidth.z * a_sizeAndOutlineWidth.z / 128.0;\nfloat isMapAligned  = getBit(a_bitSet, BITSET_MARKER_ALIGNMENT_MAP);\nfloat referenceSize = a_sizeAndOutlineWidth.w * a_sizeAndOutlineWidth.w / 128.0;\nfloat scaleSymbolProportionally = getBit(a_bitSet, BITSET_MARKER_SCALE_SYMBOLS_PROPORTIONALLY);\nfloat scaleFactor               = getMarkerScaleFactor(size, referenceSize);\nsize.xy     *= scaleFactor;\noffset.xy   *= scaleFactor;\noutlineSize *= scaleSymbolProportionally * (scaleFactor - 1.0) + 1.0;\nvec2 v_tex   = a_texCoords / u_mosaicSize;\nfloat filterFlags = getFilterFlags();\nv_color    = getColor(a_color, a_bitSet, BITSET_GENERIC_LOCK_COLOR);\nv_opacity  = getOpacity();\nv_id       = norm(a_id);\nv_pos      = u_dvsMat3 * pos + getMatrix(isMapAligned) * getRotation()  * offset;\nv_sizeTex  = vec4(size.xy, v_tex.xy);\n#ifdef SDF\nv_isThin   = getBit(a_bitSet, BITSET_MARKER_OUTLINE_ALLOW_COLOR_OVERRIDE);\n#ifdef VV_COLOR\nv_overridingOutlineColor = v_isThin;\n#else\nv_overridingOutlineColor = 0.0;\n#endif\nv_outlineWidth = min(outlineSize, max(max(size.x, size.y) - 0.99, 0.0));\nv_outlineColor = a_outlineColor;\nv_distRatio = a_bitSetAndDistRatio.y / 126.0;\n#endif\n#ifdef HITTEST\nhighp vec4 out_color = vec4(0.);\nhighp vec3 out_pos   = vec3(0.);\nhittestIcon(out_color, out_pos, pos, offset, size, scaleFactor, isMapAligned);\nv_color = out_color;\ngl_PointSize = 1.;\ngl_Position = vec4(clip(v_color, out_pos, filterFlags, a_zoomRange), 1.0);\n#else\ngl_Position = vec4(clip(v_color, v_pos, filterFlags, a_zoomRange), 1.0);\n#endif\n}"},label:{"common.glsl":"uniform mediump float u_zoomLevel;\nuniform mediump float u_mapRotation;\nuniform mediump float u_mapAligned;\nuniform mediump vec2 u_mosaicSize;\nvarying mediump float v_antialiasingWidth;\nvarying mediump float v_edgeDistanceOffset;\nvarying mediump vec2 v_tex;\nvarying mediump vec4 v_color;\nvarying lowp vec4 v_animation;","label.frag":"#include <materials/text/text.frag>","label.vert":"precision highp float;\n#include <materials/vcommon.glsl>\n#include <materials/text/common.glsl>\nattribute vec4 a_color;\nattribute vec4 a_haloColor;\nattribute vec4 a_texAndSize;\nattribute vec4 a_refSymbolAndPlacementOffset;\nattribute vec4 a_glyphData;\nattribute vec2 a_vertexOffset;\nattribute vec2 a_texCoords;\nuniform float u_isHaloPass;\nuniform float u_isBackgroundPass;\nuniform float u_mapRotation;\nuniform float u_mapAligned;\nfloat getZ(in float minZoom, in float maxZoom, in float angle) {\nfloat glyphAngle = angle * 360.0 / 254.0;\nfloat mapAngle = u_mapRotation * 360.0 / 254.0;\nfloat diffAngle = min(360.0 - abs(mapAngle - glyphAngle), abs(mapAngle - glyphAngle));\nfloat z = 0.0;\nz += u_mapAligned * (2.0 * (1.0 - step(minZoom, u_currentZoom)));\nz += u_mapAligned * 2.0 * step(90.0, diffAngle);\nz += 2.0 * (1.0 - step(u_currentZoom, maxZoom));\nreturn z;\n}\nvoid main()\n{\nINIT;\nfloat groupMinZoom    = getMinZoom();\nfloat glyphMinZoom    = a_glyphData.x;\nfloat glyphMaxZoom    = a_glyphData.y;\nfloat glyphAngle      = a_glyphData.z;\nfloat a_isBackground  = a_glyphData.w;\nfloat a_minZoom          = max(groupMinZoom, glyphMinZoom);\nfloat a_placementPadding = a_refSymbolAndPlacementOffset.x * EXTRUDE_SCALE_PLACEMENT_PADDING;\nvec2  a_placementDir     = unpack_u8_nf32(a_refSymbolAndPlacementOffset.zw);\nfloat a_refSymbolSize    = a_refSymbolAndPlacementOffset.y;\nfloat fontSize           = a_texAndSize.z;\nfloat haloSize           = a_texAndSize.w * OUTLINE_SCALE;\nvec2  vertexOffset = a_vertexOffset * OFFSET_PRECISION;\nvec3  pos          = vec3(a_pos * POSITION_PRECISION, 1.0);\nfloat z            = getZ(a_minZoom, glyphMaxZoom, glyphAngle);\nfloat fontScale    = fontSize / SDF_FONT_SIZE;\nfloat halfSize     = getSize(a_refSymbolSize) / 2.0;\nfloat animation    = pow(getAnimationState(), vec4(2.0)).r;\nfloat isText = 1.0 - a_isBackground;\nfloat isBackground = u_isBackgroundPass * a_isBackground;\nvec4  nonHaloColor = (isBackground + isText) * a_color;\nv_color     = animation * ((1.0 - u_isHaloPass) * nonHaloColor + (u_isHaloPass * a_haloColor));\nv_opacity   = 1.0;\nv_tex       = a_texCoords / u_mosaicSize;\nv_edgeDistanceOffset = u_isHaloPass * haloSize / fontScale / MAX_SDF_DISTANCE;\nv_antialiasingWidth  = 0.105 * SDF_FONT_SIZE / fontSize / u_pixelRatio;\nvec2 placementOffset = a_placementDir * (halfSize + a_placementPadding);\nvec3 glyphOffset     = u_displayMat3 * vec3(vertexOffset + placementOffset, 0.0);\nvec3 v_pos           = vec3((u_dvsMat3 * pos + glyphOffset).xy, z);\nfloat isHidden = u_isBackgroundPass * isText + (1.0 - u_isBackgroundPass) * a_isBackground;\nv_pos.z += 2.0 * isHidden;\ngl_Position = vec4(v_pos, 1.0);\n#ifdef DEBUG\nv_color = vec4(a_color.rgb, z == 0.0 ? 1.0 : 0.645);\n#endif\n}"},line:{"common.glsl":"varying lowp vec4 v_color;\nvarying highp vec3 v_id;\nvarying mediump vec2 v_normal;\nvarying mediump float v_lineHalfWidth;\nvarying lowp float v_opacity;\n#ifdef PATTERN\nvarying mediump vec4 v_tlbr;\nvarying mediump vec2 v_patternSize;\n#endif\n#if defined(PATTERN) || defined(SDF)\nvarying highp float v_accumulatedDistance;\n#endif\n#ifdef SDF\nvarying mediump float v_lineWidthRatio;\n#endif","hittest.glsl":"#include <materials/hittest/common.glsl>\n#ifdef HITTEST\nattribute vec2 a_pos1;\nattribute vec2 a_pos2;\nvoid hittestLine(out lowp vec4 out_color, out highp vec3 out_pos, float halfWidth) {\nvec3 pos        = u_viewMat3 * u_tileMat3 * vec3(a_pos  * POSITION_PRECISION, 1.);\nvec3 pos1       = u_viewMat3 * u_tileMat3 * vec3(a_pos1 * POSITION_PRECISION, 1.);\nvec3 pos2       = u_viewMat3 * u_tileMat3 * vec3(a_pos2 * POSITION_PRECISION, 1.);\nvec3 outTextureCoords = vec3(getAttributeDataTextureCoords(a_id), 0.0);\nfloat dist = min(distPointSegment(u_hittestPos, pos.xy, pos1.xy),\ndistPointSegment(u_hittestPos, pos.xy, pos2.xy)) - halfWidth;\nout_pos = vec3(getAttributeDataTextureCoords(a_id), 0.0);\nif (dist >= u_hittestDist) {\nout_pos.z += 2.0;\n}\nout_color = vec4(1. / 255., 0, 0, dist <= 0. ? (1. / 255.) : 0.);\n}\n#endif","line.frag":"precision lowp float;\n#include <util/encoding.glsl>\n#include <materials/constants.glsl>\n#include <materials/symbologyTypeUtils.glsl>\n#include <materials/line/common.glsl>\n#include <materials/shared/line/common.glsl>\n#include <materials/shared/line/line.frag>\n#ifdef HITTEST\nvoid main() {\ngl_FragColor = v_color;\n}\n#else\nvoid main() {\nLineData inputs = LineData(\nv_color,\nv_normal,\nv_lineHalfWidth,\nv_opacity,\n#ifndef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\n#ifdef PATTERN\nv_tlbr,\nv_patternSize,\n#endif\n#ifdef SDF\nv_lineWidthRatio,\n#endif\n#if defined(PATTERN) || defined(SDF)\nv_accumulatedDistance,\n#endif\n#endif\nv_id\n);\ngl_FragColor = shadeLine(inputs);\n}\n#endif",
"line.vert":"precision highp float;\nattribute vec4 a_color;\nattribute vec4 a_offsetAndNormal;\nattribute vec2 a_accumulatedDistanceAndHalfWidth;\nattribute vec4 a_tlbr;\nattribute vec4 a_segmentDirection;\nattribute vec2 a_aux;\nattribute vec2 a_zoomRange;\n#include <materials/vcommon.glsl>\n#include <materials/symbologyTypeUtils.glsl>\n#include <materials/line/common.glsl>\n#include <materials/line/hittest.glsl>\n#include <materials/shared/line/common.glsl>\n#include <materials/shared/line/line.vert>\n#ifdef HITTEST\nvoid draw() {\nfloat aa        = 0.5 * u_antialiasing;\nfloat a_halfWidth = a_accumulatedDistanceAndHalfWidth.y / 16.;\nfloat a_cimHalfWidth = a_aux.x / 16. ;\nvec2  a_offset = a_offsetAndNormal.xy / 16.;\nfloat baseWidth = getBaseLineHalfWidth(a_halfWidth, a_cimHalfWidth);\nfloat halfWidth = getLineHalfWidth(baseWidth, aa);\nhighp vec3 pos  = vec3(0.);\nv_color = vec4(0.);\nhittestLine(v_color, pos, halfWidth);\ngl_PointSize = 1.;\ngl_Position = vec4(clip(v_color, pos, getFilterFlags(), a_zoomRange), 1.0);\n}\n#else\nvoid draw()\n{\nhighp vec3 pos = vec3(0.);\nLineData outputs = buildLine(\npos,\na_id,\na_pos,\na_color,\na_offsetAndNormal.xy / 16.,\na_offsetAndNormal.zw / 16.,\na_accumulatedDistanceAndHalfWidth.x,\na_accumulatedDistanceAndHalfWidth.y / 16.,\na_segmentDirection.w,\na_tlbr,\na_segmentDirection.xy / 16.,\na_aux.x / 16.\n);\nv_id              = outputs.id;\nv_color           = outputs.color;\nv_normal          = outputs.normal;\nv_lineHalfWidth   = outputs.lineHalfWidth;\nv_opacity         = outputs.opacity;\n#ifndef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\n#ifdef PATTERN\nv_tlbr          = outputs.tlbr;\nv_patternSize   = outputs.patternSize;\n#endif\n#ifdef SDF\nv_lineWidthRatio = outputs.lineWidthRatio;\n#endif\n#if defined(PATTERN) || defined(SDF)\nv_accumulatedDistance = outputs.accumulatedDistance;\n#endif\n#endif\ngl_Position = vec4(clip(outputs.color, pos, getFilterFlags(), a_zoomRange), 1.0);\n}\n#endif\nvoid main() {\nINIT;\ndraw();\n}"},pie:{"pie.frag":"precision mediump float;\n#include <util/atan2.glsl>\n#include <materials/constants.glsl>\n#include <materials/utils.glsl>\n#include <materials/icon/common.glsl>\nvarying float v_size;\nvarying vec2 v_offset;\nvarying vec2 v_filteredSectorToColorId[NUMBER_OF_FIELDS];\nvarying float v_numOfEntries;\nvarying float v_maxSectorAngle;\nuniform lowp vec4 u_colors[NUMBER_OF_FIELDS];\nuniform lowp vec4 u_defaultColor;\nuniform lowp vec4 u_othersColor;\nuniform lowp vec4 u_outlineColor;\nuniform float u_donutRatio;\nuniform float u_sectorThreshold;\nstruct FilteredChartInfo {\nfloat endSectorAngle;\nint colorId;\n};\nlowp vec4 getSectorColor(in int index, in vec2 filteredSectorToColorId[NUMBER_OF_FIELDS]) {\n#if __VERSION__ == 300\nmediump int colorIndex = int(filteredSectorToColorId[index].y);\nreturn u_colors[colorIndex];\n#else\nmediump int colorIndex;\nfor (int i = 0; i < NUMBER_OF_FIELDS; ++i) {\nif (i == index) {\ncolorIndex = int(filteredSectorToColorId[i].y);\n}\n}\nfor (int i = 0; i < NUMBER_OF_FIELDS; ++i) {\nif (i == colorIndex) {\nreturn u_colors[i];\n}\n}\nreturn u_colors[NUMBER_OF_FIELDS - 1];\n#endif\n}\nconst int OTHER_SECTOR_ID = 255;\n#ifdef HITTEST\nvec4 getColor() {\nreturn v_color;\n}\n#else\nvec4 getColor() {\nfloat angle = 90.0 - C_RAD_TO_DEG * atan2(v_offset.y, v_offset.x);\nif (angle < 0.0) {\nangle += 360.0;\n} else if (angle > 360.0) {\nangle = mod(angle, 360.0);\n}\nint numOfEntries = int(v_numOfEntries);\nfloat maxSectorAngle = v_maxSectorAngle;\nlowp vec4 fillColor = (maxSectorAngle > 0.0 || u_sectorThreshold > 0.0) ? u_othersColor : u_defaultColor;\nlowp vec4 prevColor = vec4(0.0);\nlowp vec4 nextColor = vec4(0.0);\nfloat startSectorAngle = 0.0;\nfloat endSectorAngle = 0.0;\nif (angle < maxSectorAngle) {\nfor (int index = 0; index < NUMBER_OF_FIELDS; ++index) {\nstartSectorAngle = endSectorAngle;\nendSectorAngle = v_filteredSectorToColorId[index].x;\nif (endSectorAngle > angle) {\nfillColor = getSectorColor(index, v_filteredSectorToColorId);\nprevColor = u_sectorThreshold != 0.0 && index == 0 && abs(360.0 - maxSectorAngle) < EPSILON ? u_othersColor :\ngetSectorColor(index > 0 ? index - 1 : numOfEntries - 1, v_filteredSectorToColorId);\nnextColor = u_sectorThreshold != 0.0 && abs(endSectorAngle - maxSectorAngle) < EPSILON ? u_othersColor :\ngetSectorColor(index < numOfEntries - 1 ? index + 1 : 0, v_filteredSectorToColorId);\nbreak;\n}\nif (index == numOfEntries - 1) {\nbreak;\n}\n}\n} else {\nprevColor = getSectorColor(numOfEntries - 1, v_filteredSectorToColorId);\nnextColor = getSectorColor(0, v_filteredSectorToColorId);\nstartSectorAngle = maxSectorAngle;\nendSectorAngle = 360.0;\n}\nlowp vec4 outlineColor = u_outlineColor;\nfloat offset = length(v_offset);\nfloat distanceSize = offset * v_size;\nif (startSectorAngle != 0.0 || endSectorAngle != 360.0) {\nfloat distanceToStartSector = (angle - startSectorAngle);\nfloat distanceToEndSector = (endSectorAngle - angle);\nfloat sectorThreshold = 0.6;\nfloat beginSectorAlpha = smoothstep(0.0, sectorThreshold, distanceToStartSector * offset);\nfloat endSectorAlpha = smoothstep(0.0, sectorThreshold, distanceToEndSector * offset);\nif (endSectorAlpha > 0.0) {\nfillColor = mix(nextColor, fillColor, endSectorAlpha);\n} else if (beginSectorAlpha > 0.0) {\nfillColor = mix(prevColor, fillColor, beginSectorAlpha);\n}\n}\nfloat donutSize = u_donutRatio * (v_size - v_outlineWidth);\nfloat endOfDonut = donutSize - v_outlineWidth;\nfloat aaThreshold = 0.75;\nfloat innerCircleAlpha = endOfDonut - aaThreshold > 0.0 ? smoothstep(endOfDonut - aaThreshold, endOfDonut + aaThreshold, distanceSize) : 1.0;\nfloat outerCircleAlpha = 1.0 - smoothstep(v_size - aaThreshold, v_size + aaThreshold , distanceSize);\nfloat circleAlpha = innerCircleAlpha * outerCircleAlpha;\nfloat startOfOutline = v_size - v_outlineWidth;\nif (startOfOutline > 0.0 && v_outlineWidth > 0.25) {\nfloat outlineFactor = smoothstep(startOfOutline - aaThreshold, startOfOutline + aaThreshold, distanceSize);\nfloat innerLineFactor = donutSize - aaThreshold > 0.0 ? 1.0 - smoothstep(donutSize - aaThreshold, donutSize + aaThreshold , distanceSize) : 0.0;\nfillColor = mix(fillColor, outlineColor, innerLineFactor + outlineFactor);\n}\nreturn v_opacity * circleAlpha * fillColor;\n}\n#endif\nvoid main()\n{\nvec4 color = getColor();\n#ifdef HIGHLIGHT\ncolor.a = step(1.0 / 255.0, color.a);\n#endif\ngl_FragColor = color;\n}","pie.vert":"precision highp float;\nattribute vec4 a_color;\nattribute vec4 a_outlineColor;\nattribute vec4 a_sizeAndOutlineWidth;\nattribute vec2 a_vertexOffset;\nattribute vec2 a_texCoords;\nattribute vec2 a_bitSetAndDistRatio;\nattribute vec2 a_zoomRange;\nuniform float u_outlineWidth;\nuniform mediump float u_sectorThreshold;\nvarying float v_size;\nvarying vec2 v_offset;\nvarying vec2 v_filteredSectorToColorId[NUMBER_OF_FIELDS];\nvarying float v_numOfEntries;\nvarying float v_maxSectorAngle;\nstruct FilteredChartInfo {\nfloat endSectorAngle;\nint colorId;\n};\nint filter(in float sectorAngle,\nin int currentIndex,\ninout FilteredChartInfo filteredInfo,\ninout vec2 filteredSectorToColorId[NUMBER_OF_FIELDS]) {\nif (sectorAngle > u_sectorThreshold * 360.0) {\nfilteredInfo.endSectorAngle += sectorAngle;\n#if __VERSION__ == 300\nfilteredSectorToColorId[filteredInfo.colorId] = vec2(filteredInfo.endSectorAngle, currentIndex);\n#else\nfor (int i = 0; i < NUMBER_OF_FIELDS; i++) {\nif (i == filteredInfo.colorId) {\nfilteredSectorToColorId[i] = vec2(filteredInfo.endSectorAngle, currentIndex);\n}\n}\n#endif\n++filteredInfo.colorId;\n}\nreturn 0;\n}\nint filterValues(inout vec2 filteredSectorToColorId[NUMBER_OF_FIELDS],\ninout FilteredChartInfo filteredInfo,\nin float sectorAngles[NUMBER_OF_FIELDS]) {\nfor (int index = 0; index < NUMBER_OF_FIELDS; ++index) {\nfloat sectorValue = sectorAngles[index];\nfilter(sectorValue, index, filteredInfo, filteredSectorToColorId);\n}\nreturn filteredInfo.colorId;\n}\n#include <materials/vcommon.glsl>\n#include <materials/icon/common.glsl>\n#include <materials/hittest/common.glsl>\nvec2 getMarkerSize(inout vec2 offset, inout vec2 baseSize, inout float outlineSize, in float referenceSize, in float bitSet) {\nvec2 outSize = baseSize;\n#ifdef VV_SIZE\nfloat r = 0.5 * getSize(referenceSize) / referenceSize;\noutSize.xy *= r;\noffset.xy *= r;\nfloat scaleSymbolProportionally = getBit(bitSet, BITSET_MARKER_SCALE_SYMBOLS_PROPORTIONALLY);\noutlineSize *= scaleSymbolProportionally * (r - 1.0) + 1.0;\n#endif\nreturn outSize;\n}\nvec3 getOffset(in vec2 in_offset, float a_bitSet) {\nfloat isMapAligned = getBit(a_bitSet, BITSET_MARKER_ALIGNMENT_MAP);\nvec3  offset       = vec3(in_offset, 0.0);\nreturn getMatrix(isMapAligned) * offset;\n}\nfloat filterNaNValues(in float value) {\nreturn value != NAN_MAGIC_NUMBER && value > 0.0 ? value : 0.0;\n}\nvoid main()\n{\nINIT;\nvec2  a_size   = a_sizeAndOutlineWidth.xy * a_sizeAndOutlineWidth.xy / 128.0;\nvec2  a_offset = a_vertexOffset / 16.0;\nfloat outlineSize = u_outlineWidth;\nfloat a_bitSet = a_bitSetAndDistRatio.x;\nvec2 size = getMarkerSize(a_offset, a_size, outlineSize, a_sizeAndOutlineWidth.w * a_sizeAndOutlineWidth.w / 128.0, a_bitSet);\nfloat filterFlags = getFilterFlags();\nvec3  pos         = vec3(a_pos * POSITION_PRECISION, 1.0);\nv_opacity      = getOpacity();\nv_id           = norm(a_id);\nv_pos          = u_dvsMat3 * pos + getOffset(a_offset, a_bitSet);\nv_offset       = sign(a_texCoords - 0.5);\nv_size         = max(size.x, size.y);\nv_outlineWidth = outlineSize;\nfloat attributeData[10];\nvec4 attributeData0 = getAttributeData3(a_id);\nattributeData[0] = filterNaNValues(attributeData0.x);\nattributeData[1] = filterNaNValues(attributeData0.y);\nattributeData[2] = filterNaNValues(attributeData0.z);\nattributeData[3] = filterNaNValues(attributeData0.w);\n#if (NUMBER_OF_FIELDS > 4)\nvec4 attributeData1 = getAttributeData4(a_id);\nattributeData[4] = filterNaNValues(attributeData1.x);\nattributeData[5] = filterNaNValues(attributeData1.y);\nattributeData[6] = filterNaNValues(attributeData1.z);\nattributeData[7] = filterNaNValues(attributeData1.w);\n#endif\n#if (NUMBER_OF_FIELDS > 8)\nvec4 attributeData2 = getAttributeData5(a_id);\nattributeData[8] = filterNaNValues(attributeData2.x);\nattributeData[9] = filterNaNValues(attributeData2.y);\n#endif\nfloat sum = 0.0;\nfor (int i = 0; i < NUMBER_OF_FIELDS; ++i) {\nsum += attributeData[i];\n}\nfloat sectorAngles[NUMBER_OF_FIELDS];\nfor (int i = 0; i < NUMBER_OF_FIELDS; ++i) {\nsectorAngles[i] = 360.0 * attributeData[i] / sum;\n}\nvec2 filteredSectorToColorId[NUMBER_OF_FIELDS];\nFilteredChartInfo filteredInfo = FilteredChartInfo(0.0, 0);\nint numOfEntries = filterValues(filteredSectorToColorId, filteredInfo, sectorAngles);\nv_numOfEntries = float(numOfEntries);\nv_maxSectorAngle = filteredInfo.endSectorAngle;\n#if __VERSION__ == 300\nv_filteredSectorToColorId = filteredSectorToColorId;\n#else\nfor (int i = 0; i < NUMBER_OF_FIELDS; ++i) {\nif (i == numOfEntries) {\nbreak;\n}\nv_filteredSectorToColorId[i] = filteredSectorToColorId[i];\n}\n#endif\n#ifdef HITTEST\nhighp vec3 out_pos = vec3(0.0);\nv_color            = vec4(0.0);\nhittestMarker(v_color, out_pos, u_viewMat3 * u_tileMat3 *  pos, v_size);\ngl_PointSize = 1.0;\ngl_Position = vec4(clip(v_color, out_pos, filterFlags, a_zoomRange), 1.0);\n#else\ngl_Position = vec4(clip(v_color, v_pos, filterFlags, a_zoomRange), 1.0);\n#endif\n}"},shared:{line:{"common.glsl":"#if !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE) && defined(PATTERN)\nuniform mediump vec2 u_mosaicSize;\nvarying mediump float v_sampleAlphaOnly;\n#endif\nstruct LineData {\nlowp vec4 color;\nmediump vec2 normal;\nmediump float lineHalfWidth;\nlowp float opacity;\n#ifndef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\n#ifdef PATTERN\nmediump vec4 tlbr;\nmediump vec2 patternSize;\n#endif\n#ifdef SDF\nmediump float lineWidthRatio;\n#endif\n#if defined(PATTERN) || defined(SDF)\nhighp float accumulatedDistance;\n#endif\n#endif\nhighp vec3 id;\n};","line.frag":"uniform lowp float u_blur;\n#if !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE) && !defined(HIGHLIGHT)\n#if defined(PATTERN) || defined(SDF)\nuniform sampler2D u_texture;\nuniform highp float u_pixelRatio;\n#endif\n#endif\n#if defined(SDF) && !defined(HIGHLIGHT) && !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE)\nlowp vec4 getLineColor(LineData line) {\nmediump float adjustedPatternWidth = line.patternSize.x * 2.0 * line.lineWidthRatio;\nmediump float relativeTexX = fract(line.accumulatedDistance / adjustedPatternWidth);\nmediump float relativeTexY = 0.5 + 0.25 * line.normal.y;\nmediump vec2 texCoord = mix(line.tlbr.xy, line.tlbr.zw, vec2(relativeTexX, relativeTexY));\nmediump float d = rgba2float(texture2D(u_texture, texCoord)) - 0.5;\nfloat dist = d * line.lineHalfWidth;\nreturn line.opacity * clamp(0.5 - dist, 0.0, 1.0) * line.color;\n}\n#elif defined(PATTERN) && !defined(HIGHLIGHT) && !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE)\nlowp vec4 getLineColor(LineData line) {\nmediump float lineHalfWidth = line.lineHalfWidth;\nmediump float adjustedPatternHeight = line.patternSize.y * 2.0 * lineHalfWidth / line.patternSize.x;\nmediump float relativeTexY = fract(line.accumulatedDistance / adjustedPatternHeight);\nmediump float relativeTexX = 0.5 + 0.5 * line.normal.y;\nmediump vec2 texCoord = mix(line.tlbr.xy, line.tlbr.zw, vec2(relativeTexX, relativeTexY));\nlowp vec4 color = texture2D(u_texture, texCoord);\n#ifdef VV_COLOR\nif (v_sampleAlphaOnly > 0.5) {\ncolor.rgb = vec3(color.a);\n}\n#endif\nreturn line.opacity * line.color * color;\n}\n#else\nlowp vec4 getLineColor(LineData line) {\nreturn line.opacity * line.color;\n}\n#endif\nvec4 shadeLine(LineData line)\n{\nmediump float thinLineFactor = max(THIN_LINE_WIDTH_FACTOR * step(line.lineHalfWidth, THIN_LINE_HALF_WIDTH), 1.0);\nmediump float fragDist = length(line.normal) * line.lineHalfWidth;\nlowp float alpha = clamp(thinLineFactor * (line.lineHalfWidth - fragDist) / (u_blur + thinLineFactor - 1.0), 0.0, 1.0);\nlowp vec4 out_color = getLineColor(line) * alpha;\n#ifdef HIGHLIGHT\nout_color.a = step(1.0 / 255.0, out_color.a);\n#endif\n#ifdef ID\nif (out_color.a < 1.0 / 255.0) {\ndiscard;\n}\nout_color = vec4(line.id, 0.0);\n#endif\nreturn out_color;\n}","line.vert":"float getBaseLineHalfWidth(in float lineHalfWidth, in float referenceHalfWidth) {\n#ifdef VV_SIZE\nfloat refLineWidth = 2.0 * referenceHalfWidth;\nreturn 0.5 * (lineHalfWidth / max(referenceHalfWidth, EPSILON)) * getSize(refLineWidth);\n#else\nreturn lineHalfWidth;\n#endif\n}\nfloat getLineHalfWidth(in float baseWidth, in float aa) {\nfloat halfWidth = max(baseWidth + aa, 0.45) + 0.1 * aa;\n#ifdef HIGHLIGHT\nhalfWidth = max(halfWidth, 2.0);\n#endif\nreturn halfWidth;\n}\nvec2 getDist(in vec2 offset, in float halfWidth) {\nfloat thinLineFactor = max(THIN_LINE_WIDTH_FACTOR * step(halfWidth, THIN_LINE_HALF_WIDTH), 1.0);\nreturn thinLineFactor * halfWidth * offset;\n}\nLineData buildLine(\nout vec3 out_pos,\nin vec3 in_id,\nin vec2 in_pos,\nin vec4 in_color,\nin vec2 in_offset,\nin vec2 in_normal,\nin float in_accumulatedDist,\nin float in_lineHalfWidth,\nin float in_bitSet,\nin vec4 in_tlbr,\nin vec2 in_segmentDirection,\nin float in_referenceHalfWidth\n)\n{\nfloat aa        = 0.5 * u_antialiasing;\nfloat baseWidth = getBaseLineHalfWidth(in_lineHalfWidth, in_referenceHalfWidth);\nfloat halfWidth = getLineHalfWidth(baseWidth, aa);\nfloat z         = 2.0 * step(baseWidth, 0.0);\nvec2  dist      = getDist(in_offset, halfWidth);\nvec3  offset    = u_displayViewMat3 * vec3(dist, 0.0);\nvec3  pos       = u_dvsMat3 * vec3(in_pos * POSITION_PRECISION, 1.0) + offset;\n#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\nvec4  color     = in_color;\nfloat opacity   = 1.0;\n#else\nvec4  color     = getColor(in_color, in_bitSet, BITSET_GENERIC_LOCK_COLOR);\nfloat opacity   = getOpacity();\n#ifdef SDF\nconst float SDF_PATTERN_HALF_WIDTH = 15.5;\nfloat scaleDash = getBit(in_bitSet, BITSET_LINE_SCALE_DASH);\nfloat lineWidthRatio = (scaleDash * max(halfWidth - 0.55 * u_antialiasing, 0.25) + (1.0 - scaleDash)) / SDF_PATTERN_HALF_WIDTH;\n#endif\n#endif\n#if !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE) && defined(PATTERN)\nv_sampleAlphaOnly = getBit(in_bitSet, BITSET_GENERIC_CONSIDER_ALPHA_ONLY);\n#endif\nout_pos = vec3(pos.xy, z);\nreturn LineData(\ncolor,\nin_normal,\nhalfWidth,\nopacity,\n#ifndef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\n#ifdef PATTERN\nin_tlbr / u_mosaicSize.xyxy,\nvec2(in_tlbr.z - in_tlbr.x, in_tlbr.w - in_tlbr.y),\n#endif\n#ifdef SDF\nlineWidthRatio,\n#endif\n#if defined(PATTERN) || defined(SDF)\nin_accumulatedDist * u_zoomFactor + dot(in_segmentDirection, dist),\n#endif\n#endif\nnorm(in_id)\n);\n}"}},"symbologyTypeUtils.glsl":"#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_OUTLINE_FILL || SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_OUTLINE_FILL_SIMPLE\n#define SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\n#endif\n#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_SIMPLE || SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_OUTLINE_FILL_SIMPLE\n#define SYMBOLOGY_TYPE_IS_SIMPLE_LIKE\n#endif",text:{"common.glsl":"uniform highp vec2 u_mosaicSize;\nvarying highp vec3 v_id;\nvarying mediump vec3 v_pos;\nvarying lowp float v_opacity;\nvarying lowp vec4 v_color;\nvarying highp vec2 v_tex;\nvarying mediump float v_antialiasingWidth;\nvarying mediump float v_edgeDistanceOffset;\nvarying lowp float v_transparency;","hittest.glsl":"#include <materials/hittest/common.glsl>","text.frag":"precision mediump float;\n#include <materials/text/common.glsl>\nuniform lowp sampler2D u_texture;\n#ifdef HITTEST\nvec4 getColor() {\nreturn v_color;\n}\n#else\nvec4 getColor()\n{\nfloat SDF_CUTOFF = (2.0 / 8.0);\nfloat SDF_BASE_EDGE_DIST = 1.0 - SDF_CUTOFF;\nlowp float dist = texture2D(u_texture, v_tex).a;\nmediump float edge = SDF_BASE_EDGE_DIST - v_edgeDistanceOffset;\n#ifdef HIGHLIGHT\nedge /= 2.0;\n#endif\nlowp float aa = v_antialiasingWidth;\nlowp float alpha = smoothstep(edge - aa, edge + aa, dist);\nreturn alpha * v_color * v_opacity;\n}\n#endif\nvoid main()\n{\ngl_FragColor = getColor();\n}","text.vert":"precision highp float;\n#include <materials/utils.glsl>\n#include <materials/vcommon.glsl>\n#include <materials/text/common.glsl>\n#include <materials/text/hittest.glsl>\nattribute vec4 a_color;\nattribute vec4 a_haloColor;\nattribute vec4 a_texFontSize;\nattribute vec4 a_aux;\nattribute vec2 a_zoomRange;\nattribute vec2 a_vertexOffset;\nattribute vec2 a_texCoords;\nuniform float u_isHaloPass;\nuniform float u_isBackgroundPass;\nfloat getTextSize(inout vec2 offset, inout float baseSize, in float referenceSize) {\n#ifdef VV_SIZE\nfloat r = getSize(referenceSize) / referenceSize;\nbaseSize *= r;\noffset.xy *= r;\nreturn baseSize;\n#endif\nreturn baseSize;\n}\nvoid main()\n{\nINIT;\nfloat a_isBackground  = a_aux.y;\nfloat a_referenceSize = a_aux.z * a_aux.z / 256.0;\nfloat a_bitSet        = a_aux.w;\nfloat a_fontSize      = a_texFontSize.z;\nvec2  a_offset        = a_vertexOffset * OFFSET_PRECISION;\nvec3  in_pos        = vec3(a_pos * POSITION_PRECISION, 1.0);\nfloat fontSize      = getTextSize(a_offset, a_fontSize, a_referenceSize);\nfloat fontScale     = fontSize / SDF_FONT_SIZE;\nvec3  offset        = getRotation() * vec3(a_offset, 0.0);\nmat3  extrudeMatrix = getBit(a_bitSet, 0) == 1.0 ? u_displayViewMat3 : u_displayMat3;\nfloat isText = 1.0 - a_isBackground;\nfloat isBackground = u_isBackgroundPass * a_isBackground;\nvec4  nonHaloColor  = (isBackground * a_color) + (isText * getColor(a_color, a_bitSet, 1));\nv_color   = u_isHaloPass * a_haloColor + (1.0 - u_isHaloPass) * nonHaloColor;\nv_opacity = getOpacity();\nv_id      = norm(a_id);\nv_tex     = a_texCoords / u_mosaicSize;\nv_pos     = u_dvsMat3 * in_pos + extrudeMatrix * offset;\nfloat isHidden = u_isBackgroundPass * isText + (1.0 - u_isBackgroundPass) * a_isBackground;\nv_pos.z += 2.0 * isHidden;\nv_edgeDistanceOffset = u_isHaloPass * OUTLINE_SCALE * a_texFontSize.w / fontScale / MAX_SDF_DISTANCE;\nv_antialiasingWidth  = 0.105 * SDF_FONT_SIZE / fontSize / u_pixelRatio;\n#ifdef HITTEST\nhighp vec3 out_pos  = vec3(0.);\nv_color = vec4(0.);\nhittestMarker(v_color, out_pos, u_viewMat3 * u_tileMat3 *  vec3(a_pos * POSITION_PRECISION, 1.0)\n+ u_tileMat3 * offset, fontSize / 2.);\ngl_PointSize = 1.;\ngl_Position = vec4(clip(v_color, out_pos, getFilterFlags(), a_zoomRange), 1.0);\n#else\ngl_Position =  vec4(clip(v_color, v_pos, getFilterFlags(), a_zoomRange), 1.0);\n#endif\n}"},"utils.glsl":"float rshift(in float u32, in int amount) {\nreturn floor(u32 / pow(2.0, float(amount)));\n}\nfloat getBit(in float bitset, in int bitIndex) {\nfloat offset = pow(2.0, float(bitIndex));\nreturn mod(floor(bitset / offset), 2.0);\n}\nfloat getFilterBit(in float bitset, in int bitIndex) {\nreturn getBit(bitset, bitIndex + 1);\n}\nfloat getHighlightBit(in float bitset) {\nreturn getBit(bitset, 0);\n}\nhighp vec3 unpackDisplayIdTexel(in highp vec3 bitset) {\nfloat isAggregate = getBit(bitset.b, 7);\nreturn (1.0 - isAggregate) * bitset + isAggregate * (vec3(bitset.rgb) - vec3(0.0, 0.0, float(0x80)));\n}\nvec4 unpack(in float u32) {\nfloat r = mod(rshift(u32, 0), 255.0);\nfloat g = mod(rshift(u32, 8), 255.0);\nfloat b = mod(rshift(u32, 16), 255.0);\nfloat a = mod(rshift(u32, 24), 255.0);\nreturn vec4(r, g, b, a);\n}\nvec3 norm(in vec3 v) {\nreturn v /= 255.0;\n}\nvec4 norm(in vec4 v) {\nreturn v /= 255.0;\n}\nfloat max4(vec4 target) {\nreturn max(max(max(target.x, target.y), target.z), target.w);\n}\nvec2 unpack_u8_nf32(vec2 bytes) {\nreturn (bytes - 127.0) / 127.0;\n}\nhighp float rand(in vec2 co) {\nhighp float a = 12.9898;\nhighp float b = 78.233;\nhighp float c = 43758.5453;\nhighp float dt = dot(co, vec2(a,b));\nhighp float sn = mod(dt, 3.14);\nreturn fract(sin(sn) * c);\n}","vcommon.glsl":"#include <materials/constants.glsl>\n#include <materials/utils.glsl>\n#include <materials/attributeData.glsl>\n#include <materials/vv.glsl>\n#include <materials/barycentric.glsl>\nattribute vec2 a_pos;\nattribute highp vec3 a_id;\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform highp mat3 u_displayViewMat3;\nuniform highp mat3 u_tileMat3;\nuniform highp mat3 u_viewMat3;\nuniform highp float u_pixelRatio;\nuniform mediump float u_zoomFactor;\nuniform mediump float u_antialiasing;\nuniform mediump float u_currentZoom;\nvec4 VV_ADATA = vec4(0.0);\nvoid loadVisualVariableData(inout vec4 target) {\n#ifdef SUPPORTS_TEXTURE_FLOAT\ntarget.rgba = getAttributeData2(a_id);\n#else\nvec4 data0 = getAttributeData2(a_id);\nvec4 data1 = getAttributeData3(a_id);\ntarget.r = u88VVToFloat(data0.rg * 255.0);\ntarget.g = u88VVToFloat(data0.ba * 255.0);\ntarget.b = u88VVToFloat(data1.rg * 255.0);\ntarget.a = u88VVToFloat(data1.ba * 255.0);\n#endif\n}\n#ifdef VV\n#define INIT loadVisualVariableData(VV_ADATA)\n#else\n#define INIT\n#endif\nvec4 getColor(in vec4 a_color, in float a_bitSet, int index) {\n#ifdef VV_COLOR\nfloat isColorLocked   = getBit(a_bitSet, index);\nreturn getVVColor(VV_ADATA[ATTR_VV_COLOR], a_color, isColorLocked);\n#else\nreturn a_color;\n#endif\n}\nfloat getOpacity() {\n#ifdef VV_OPACITY\nreturn getVVOpacity(VV_ADATA[ATTR_VV_OPACITY]);\n#else\nreturn 1.0;\n#endif\n}\nfloat getSize(in float in_size) {\n#ifdef VV_SIZE\nreturn getVVSize(in_size, VV_ADATA[ATTR_VV_SIZE]);\n#else\nreturn in_size;\n#endif\n}\nmat3 getRotation() {\n#ifdef VV_ROTATION\nreturn getVVRotationMat3(mod(VV_ADATA[ATTR_VV_ROTATION], 360.0));\n#else\nreturn mat3(1.0);\n#endif\n}\nfloat getFilterFlags() {\n#ifdef IGNORES_SAMPLER_PRECISION\nreturn ceil(getAttributeData0(a_id).x * 255.0);\n#else\nreturn getAttributeData0(a_id).x * 255.0;\n#endif\n}\nvec4 getAnimationState() {\nreturn getAttributeData1(a_id);\n}\nfloat getMinZoom() {\nvec4 data0 = getAttributeData0(a_id) * 255.0;\nreturn data0.g;\n}\nmat3 getMatrixNoDisplay(float isMapAligned) {\nreturn isMapAligned * u_viewMat3 * u_tileMat3 + (1.0 - isMapAligned) * u_tileMat3;\n}\nmat3 getMatrix(float isMapAligned) {\nreturn isMapAligned * u_displayViewMat3 + (1.0 - isMapAligned) * u_displayMat3;\n}\nvec3 clip(inout vec4 color, inout vec3 pos, in float filterFlags, in vec2 minMaxZoom) {\npos.z += 2.0 * (1.0 - getFilterBit(filterFlags, 0));\n#ifdef INSIDE\npos.z += 2.0 * (1.0 - getFilterBit(filterFlags, 1));\n#elif defined(OUTSIDE)\npos.z += 2.0 * getFilterBit(filterFlags, 1);\n#elif defined(HIGHLIGHT)\n#if !defined(HIGHLIGHT_ALL)\npos.z += 2.0 * (1.0 - getHighlightBit(filterFlags));\n#endif\n#endif\npos.z += 2.0 * (step(minMaxZoom.y, u_currentZoom) + (1.0 - step(minMaxZoom.x, u_currentZoom)));\nreturn pos;\n}","vv.glsl":"#if defined(VV_SIZE_MIN_MAX_VALUE) || defined(VV_SIZE_SCALE_STOPS) || defined(VV_SIZE_FIELD_STOPS) || defined(VV_SIZE_UNIT_VALUE)\n#define VV_SIZE\n#endif\n#if defined(VV_COLOR) || defined(VV_SIZE) || defined(VV_OPACITY) || defined(VV_ROTATION)\n#define VV\n#endif\n#ifdef VV_COLOR\nuniform highp float u_vvColorValues[8];\nuniform vec4 u_vvColors[8];\n#endif\n#ifdef VV_SIZE_MIN_MAX_VALUE\nuniform highp vec4 u_vvSizeMinMaxValue;\n#endif\n#ifdef VV_SIZE_SCALE_STOPS\nuniform highp float u_vvSizeScaleStopsValue;\n#endif\n#ifdef VV_SIZE_FIELD_STOPS\nuniform highp float u_vvSizeFieldStopsValues[6];\nuniform float u_vvSizeFieldStopsSizes[6];\n#endif\n#ifdef VV_SIZE_UNIT_VALUE\nuniform highp float u_vvSizeUnitValueWorldToPixelsRatio;\n#endif\n#ifdef VV_OPACITY\nuniform highp float u_vvOpacityValues[8];\nuniform float u_vvOpacities[8];\n#endif\n#ifdef VV_ROTATION\nuniform lowp float u_vvRotationType;\n#endif\nbool isNan(float val) {\nreturn (val == NAN_MAGIC_NUMBER);\n}\n#ifdef VV_SIZE_MIN_MAX_VALUE\nfloat getVVMinMaxSize(float sizeValue, float fallback) {\nif (isNan(sizeValue)) {\nreturn fallback;\n}\nfloat interpolationRatio = (sizeValue  - u_vvSizeMinMaxValue.x) / (u_vvSizeMinMaxValue.y - u_vvSizeMinMaxValue.x);\ninterpolationRatio = clamp(interpolationRatio, 0.0, 1.0);\nreturn u_vvSizeMinMaxValue.z + interpolationRatio * (u_vvSizeMinMaxValue.w - u_vvSizeMinMaxValue.z);\n}\n#endif\n#ifdef VV_SIZE_FIELD_STOPS\nconst int VV_SIZE_N = 6;\nfloat getVVStopsSize(float sizeValue, float fallback) {\nif (isNan(sizeValue)) {\nreturn fallback;\n}\nif (sizeValue <= u_vvSizeFieldStopsValues[0]) {\nreturn u_vvSizeFieldStopsSizes[0];\n}\nfor (int i = 1; i < VV_SIZE_N; ++i) {\nif (u_vvSizeFieldStopsValues[i] >= sizeValue) {\nfloat f = (sizeValue - u_vvSizeFieldStopsValues[i-1]) / (u_vvSizeFieldStopsValues[i] - u_vvSizeFieldStopsValues[i-1]);\nreturn mix(u_vvSizeFieldStopsSizes[i-1], u_vvSizeFieldStopsSizes[i], f);\n}\n}\nreturn u_vvSizeFieldStopsSizes[VV_SIZE_N - 1];\n}\n#endif\n#ifdef VV_SIZE_UNIT_VALUE\nfloat getVVUnitValue(float sizeValue, float fallback) {\nif (isNan(sizeValue)) {\nreturn fallback;\n}\nreturn u_vvSizeUnitValueWorldToPixelsRatio * sizeValue;\n}\n#endif\n#ifdef VV_OPACITY\nconst int VV_OPACITY_N = 8;\nfloat getVVOpacity(float opacityValue) {\nif (isNan(opacityValue)) {\nreturn 1.0;\n}\nif (opacityValue <= u_vvOpacityValues[0]) {\nreturn u_vvOpacities[0];\n}\nfor (int i = 1; i < VV_OPACITY_N; ++i) {\nif (u_vvOpacityValues[i] >= opacityValue) {\nfloat f = (opacityValue - u_vvOpacityValues[i-1]) / (u_vvOpacityValues[i] - u_vvOpacityValues[i-1]);\nreturn mix(u_vvOpacities[i-1], u_vvOpacities[i], f);\n}\n}\nreturn u_vvOpacities[VV_OPACITY_N - 1];\n}\n#endif\n#ifdef VV_ROTATION\nmat4 getVVRotation(float rotationValue) {\nif (isNan(rotationValue)) {\nreturn mat4(1, 0, 0, 0,\n0, 1, 0, 0,\n0, 0, 1, 0,\n0, 0, 0, 1);\n}\nfloat rotation = rotationValue;\nif (u_vvRotationType == 1.0) {\nrotation = 90.0 - rotation;\n}\nfloat angle = C_DEG_TO_RAD * rotation;\nfloat sinA = sin(angle);\nfloat cosA = cos(angle);\nreturn mat4(cosA, sinA, 0, 0,\n-sinA,  cosA, 0, 0,\n0,     0, 1, 0,\n0,     0, 0, 1);\n}\nmat3 getVVRotationMat3(float rotationValue) {\nif (isNan(rotationValue)) {\nreturn mat3(1, 0, 0,\n0, 1, 0,\n0, 0, 1);\n}\nfloat rotation = rotationValue;\nif (u_vvRotationType == 1.0) {\nrotation = 90.0 - rotation;\n}\nfloat angle = C_DEG_TO_RAD * -rotation;\nfloat sinA = sin(angle);\nfloat cosA = cos(angle);\nreturn mat3(cosA, -sinA, 0,\nsinA, cosA, 0,\n0,    0,    1);\n}\n#endif\n#ifdef VV_COLOR\nconst int VV_COLOR_N = 8;\nvec4 getVVColor(float colorValue, vec4 fallback, float isColorLocked) {\nif (isNan(colorValue) || isColorLocked == 1.0) {\nreturn fallback;\n}\nif (colorValue <= u_vvColorValues[0]) {\nreturn u_vvColors[0];\n}\nfor (int i = 1; i < VV_COLOR_N; ++i) {\nif (u_vvColorValues[i] >= colorValue) {\nfloat f = (colorValue - u_vvColorValues[i-1]) / (u_vvColorValues[i] - u_vvColorValues[i-1]);\nreturn mix(u_vvColors[i-1], u_vvColors[i], f);\n}\n}\nreturn u_vvColors[VV_COLOR_N - 1];\n}\n#endif\nfloat getVVSize(in float size, in float vvSize)  {\n#ifdef VV_SIZE_MIN_MAX_VALUE\nreturn getVVMinMaxSize(vvSize, size);\n#elif defined(VV_SIZE_SCALE_STOPS)\nreturn u_vvSizeScaleStopsValue;\n#elif defined(VV_SIZE_FIELD_STOPS)\nfloat outSize = getVVStopsSize(vvSize, size);\nreturn isNan(outSize) ? size : outSize;\n#elif defined(VV_SIZE_UNIT_VALUE)\nreturn getVVUnitValue(vvSize, size);\n#else\nreturn size;\n#endif\n}"},overlay:{overlay:{"overlay.frag":"precision lowp float;\nuniform lowp sampler2D u_texture;\nuniform lowp float u_opacity;\nvarying mediump vec2 v_uv;\nvoid main() {\nvec4 color = texture2D(u_texture, v_uv);\ngl_FragColor = color *  u_opacity;\n}","overlay.vert":"precision mediump float;\nattribute vec2 a_pos;\nattribute vec2 a_uv;\nuniform highp mat3 u_dvsMat3;\nuniform mediump vec2 u_perspective;\nvarying mediump vec2 v_uv;\nvoid main(void) {\nv_uv = a_uv;\nfloat w = 1.0 + dot(a_uv, u_perspective);\nvec3 pos = u_dvsMat3 * vec3(a_pos, 1.0);\ngl_Position = vec4(w * pos.xy, 0.0, w);\n}"}},"post-processing":{blit:{"blit.frag":"precision mediump float;\nuniform sampler2D u_texture;\nvarying vec2 v_uv;\nvoid main() {\ngl_FragColor = texture2D(u_texture, v_uv);\n}"},bloom:{composite:{"composite.frag":"precision mediump float;\nvarying vec2 v_uv;\nuniform sampler2D u_blurTexture1;\nuniform sampler2D u_blurTexture2;\nuniform sampler2D u_blurTexture3;\nuniform sampler2D u_blurTexture4;\nuniform sampler2D u_blurTexture5;\nuniform float u_bloomStrength;\nuniform float u_bloomRadius;\nuniform float u_bloomFactors[NUMMIPS];\nuniform vec3 u_bloomTintColors[NUMMIPS];\nfloat lerpBloomFactor(const in float factor) {\nfloat mirrorFactor = 1.2 - factor;\nreturn mix(factor, mirrorFactor, u_bloomRadius);\n}\nvoid main() {\nvec4 color = u_bloomStrength * (\nlerpBloomFactor(u_bloomFactors[0]) * vec4(u_bloomTintColors[0], 1.0) * texture2D(u_blurTexture1, v_uv) +\nlerpBloomFactor(u_bloomFactors[1]) * vec4(u_bloomTintColors[1], 1.0) * texture2D(u_blurTexture2, v_uv) +\nlerpBloomFactor(u_bloomFactors[2]) * vec4(u_bloomTintColors[2], 1.0) * texture2D(u_blurTexture3, v_uv) +\nlerpBloomFactor(u_bloomFactors[3]) * vec4(u_bloomTintColors[3], 1.0) * texture2D(u_blurTexture4, v_uv) +\nlerpBloomFactor(u_bloomFactors[4]) * vec4(u_bloomTintColors[4], 1.0) * texture2D(u_blurTexture5, v_uv)\n);\ngl_FragColor = clamp(color, 0.0, 1.0);\n}"},gaussianBlur:{"gaussianBlur.frag":"precision mediump float;\nuniform sampler2D u_colorTexture;\nuniform vec2 u_texSize;\nuniform vec2 u_direction;\nvarying vec2 v_uv;\n#define KERNEL_RADIUS RADIUS\n#define SIGMA RADIUS\nfloat gaussianPdf(in float x, in float sigma) {\nreturn 0.39894 * exp(-0.5 * x * x / ( sigma * sigma)) / sigma;\n}\nvoid main() {\nvec2 invSize = 1.0 / u_texSize;\nfloat fSigma = float(SIGMA);\nfloat weightSum = gaussianPdf(0.0, fSigma);\nvec4 pixelColorSum = texture2D(u_colorTexture, v_uv) * weightSum;\nfor (int i = 1; i < KERNEL_RADIUS; i ++) {\nfloat x = float(i);\nfloat w = gaussianPdf(x, fSigma);\nvec2 uvOffset = u_direction * invSize * x;\nvec4 sample1 = texture2D(u_colorTexture, v_uv + uvOffset);\nvec4 sample2 = texture2D(u_colorTexture, v_uv - uvOffset);\npixelColorSum += (sample1 + sample2) * w;\nweightSum += 2.0 * w;\n}\ngl_FragColor = pixelColorSum /weightSum;\n}"},luminosityHighPass:{"luminosityHighPass.frag":"precision mediump float;\nuniform sampler2D u_texture;\nuniform vec3 u_defaultColor;\nuniform float u_defaultOpacity;\nuniform float u_luminosityThreshold;\nuniform float u_smoothWidth;\nvarying vec2 v_uv;\nvoid main() {\nvec4 texel = texture2D(u_texture, v_uv);\nvec3 luma = vec3(0.299, 0.587, 0.114);\nfloat v = dot(texel.xyz, luma);\nvec4 outputColor = vec4(u_defaultColor.rgb, u_defaultOpacity);\nfloat alpha = smoothstep(u_luminosityThreshold, u_luminosityThreshold + u_smoothWidth, v);\ngl_FragColor = mix(outputColor, texel, alpha);\n}"}},blur:{gaussianBlur:{"gaussianBlur.frag":"precision mediump float;\nuniform sampler2D u_colorTexture;\nuniform vec2 u_texSize;\nuniform vec2 u_direction;\nuniform float u_sigma;\nvarying vec2 v_uv;\n#define KERNEL_RADIUS RADIUS\nfloat gaussianPdf(in float x, in float sigma) {\nreturn 0.39894 * exp(-0.5 * x * x / ( sigma * sigma)) / sigma;\n}\nvoid main() {\nvec2 invSize = 1.0 / u_texSize;\nfloat fSigma = u_sigma;\nfloat weightSum = gaussianPdf(0.0, fSigma);\nvec4 pixelColorSum = texture2D(u_colorTexture, v_uv) * weightSum;\nfor (int i = 1; i < KERNEL_RADIUS; i ++) {\nfloat x = float(i);\nfloat w = gaussianPdf(x, fSigma);\nvec2 uvOffset = u_direction * invSize * x;\nvec4 sample1 = texture2D(u_colorTexture, v_uv + uvOffset);\nvec4 sample2 = texture2D(u_colorTexture, v_uv - uvOffset);\npixelColorSum += (sample1 + sample2) * w;\nweightSum += 2.0 * w;\n}\ngl_FragColor = pixelColorSum /weightSum;\n}"},"radial-blur":{"radial-blur.frag":"precision mediump float;\nuniform sampler2D u_colorTexture;\nvarying vec2 v_uv;\nconst float sampleDist = 1.0;\nconst float sampleStrength = 2.2;\nvoid main(void) {\nfloat samples[10];\nsamples[0] = -0.08;\nsamples[1] = -0.05;\nsamples[2] = -0.03;\nsamples[3] = -0.02;\nsamples[4] = -0.01;\nsamples[5] =  0.01;\nsamples[6] =  0.02;\nsamples[7] =  0.03;\nsamples[8] =  0.05;\nsamples[9] =  0.08;\nvec2 dir = 0.5 - v_uv;\nfloat dist = sqrt(dir.x * dir.x + dir.y * dir.y);\ndir = dir / dist;\nvec4 color = texture2D(u_colorTexture,v_uv);\nvec4 sum = color;\nfor (int i = 0; i < 10; i++) {\nsum += texture2D(u_colorTexture, v_uv + dir * samples[i] * sampleDist);\n}\nsum *= 1.0 / 11.0;\nfloat t = dist * sampleStrength;\nt = clamp(t, 0.0, 1.0);\ngl_FragColor = mix(color, sum, t);\n}"}},dra:{"dra.frag":"precision mediump float;\nuniform sampler2D u_minColor;\nuniform sampler2D u_maxColor;\nuniform sampler2D u_texture;\nvarying vec2 v_uv;\nvoid main() {\nvec4 minColor = texture2D(u_minColor, vec2(0.5));\nvec4 maxColor = texture2D(u_maxColor, vec2(0.5));\nvec4 color = texture2D(u_texture, v_uv);\nvec3 minColorUnpremultiply = minColor.rgb / minColor.a;\nvec3 maxColorUnpremultiply = maxColor.rgb / maxColor.a;\nvec3 colorUnpremultiply = color.rgb / color.a;\nvec3 range = maxColorUnpremultiply - minColorUnpremultiply;\ngl_FragColor = vec4(color.a * (colorUnpremultiply - minColorUnpremultiply) / range, color.a);\n}","min-max":{"min-max.frag":"#extension GL_EXT_draw_buffers : require\nprecision mediump float;\n#define CELL_SIZE 2\nuniform sampler2D u_minTexture;\nuniform sampler2D u_maxTexture;\nuniform vec2 u_srcResolution;\nuniform vec2 u_dstResolution;\nvarying vec2 v_uv;\nvoid main() {\nvec2 srcPixel = floor(gl_FragCoord.xy) * float(CELL_SIZE);\nvec2 onePixel = vec2(1.0) / u_srcResolution;\nvec2 uv = (srcPixel + 0.5) / u_srcResolution;\nvec4 minColor = vec4(1.0);\nvec4 maxColor = vec4(0.0);\nfor (int y = 0; y < CELL_SIZE; ++y) {\nfor (int x = 0; x < CELL_SIZE; ++x) {\nvec2 offset = uv + vec2(x, y) * onePixel;\nminColor = min(minColor, texture2D(u_minTexture, offset));\nmaxColor = max(maxColor, texture2D(u_maxTexture, offset));\n}\n}\ngl_FragData[0] = minColor;\ngl_FragData[1] = maxColor;\n}"}},"drop-shadow":{composite:{"composite.frag":"precision mediump float;\nuniform sampler2D u_layerFBOTexture;\nuniform sampler2D u_blurTexture;\nuniform vec4 u_shadowColor;\nuniform vec2 u_shadowOffset;\nuniform highp mat3 u_displayViewMat3;\nvarying vec2 v_uv;\nvoid main() {\nvec3 offset = u_displayViewMat3 * vec3(u_shadowOffset, 0.0);\nvec4 layerColor = texture2D(u_layerFBOTexture, v_uv);\nvec4 blurColor = texture2D(u_blurTexture, v_uv - offset.xy / 2.0);\ngl_FragColor = ((1.0 - layerColor.a) * blurColor.a * u_shadowColor + layerColor);\n}"}},"edge-detect":{"frei-chen":{"frei-chen.frag":"precision mediump float;\nuniform sampler2D u_colorTexture;\nuniform vec2 u_texSize;\nvarying vec2 v_uv;\nvec2 texel = vec2(1.0 / u_texSize.x, 1.0 / u_texSize.y);\nmat3 G[9];\nconst mat3 g0 = mat3( 0.3535533845424652, 0, -0.3535533845424652, 0.5, 0, -0.5, 0.3535533845424652, 0, -0.3535533845424652 );\nconst mat3 g1 = mat3( 0.3535533845424652, 0.5, 0.3535533845424652, 0, 0, 0, -0.3535533845424652, -0.5, -0.3535533845424652 );\nconst mat3 g2 = mat3( 0, 0.3535533845424652, -0.5, -0.3535533845424652, 0, 0.3535533845424652, 0.5, -0.3535533845424652, 0 );\nconst mat3 g3 = mat3( 0.5, -0.3535533845424652, 0, -0.3535533845424652, 0, 0.3535533845424652, 0, 0.3535533845424652, -0.5 );\nconst mat3 g4 = mat3( 0, -0.5, 0, 0.5, 0, 0.5, 0, -0.5, 0 );\nconst mat3 g5 = mat3( -0.5, 0, 0.5, 0, 0, 0, 0.5, 0, -0.5 );\nconst mat3 g6 = mat3( 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.6666666865348816, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204 );\nconst mat3 g7 = mat3( -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, 0.6666666865348816, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408 );\nconst mat3 g8 = mat3( 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408 );\nvoid main() {\nG[0] = g0,\nG[1] = g1,\nG[2] = g2,\nG[3] = g3,\nG[4] = g4,\nG[5] = g5,\nG[6] = g6,\nG[7] = g7,\nG[8] = g8;\nmat3 I;\nfloat cnv[9];\nvec3 sample;\nfor (float i = 0.0; i < 3.0; i++) {\nfor (float j = 0.0; j < 3.0; j++) {\nsample = texture2D(u_colorTexture, v_uv + texel * vec2(i - 1.0,j - 1.0)).rgb;\nI[int(i)][int(j)] = length(sample);\n}\n}\nfor (int i = 0; i < 9; i++) {\nfloat dp3 = dot(G[i][0], I[0]) + dot(G[i][1], I[1]) + dot(G[i][2], I[2]);\ncnv[i] = dp3 * dp3;\n}\nfloat M = (cnv[0] + cnv[1]) + (cnv[2] + cnv[3]);\nfloat S = (cnv[4] + cnv[5]) + (cnv[6] + cnv[7]) + (cnv[8] + M);\ngl_FragColor = vec4(vec3(sqrt(M / S)), texture2D(u_colorTexture, v_uv).a);\n}"},sobel:{"sobel.frag":"precision mediump float;\nuniform sampler2D u_colorTexture;\nvarying vec2 v_uv;\nuniform vec2 u_texSize;\nvec2 texel = vec2(1.0 / u_texSize.x, 1.0 / u_texSize.y);\nmat3 G[2];\nconst mat3 g0 = mat3( 1.0, 2.0, 1.0, 0.0, 0.0, 0.0, -1.0, -2.0, -1.0 );\nconst mat3 g1 = mat3( 1.0, 0.0, -1.0, 2.0, 0.0, -2.0, 1.0, 0.0, -1.0 );\nvoid main() {\nmat3 I;\nfloat cnv[2];\nvec3 sample;\nG[0] = g0;\nG[1] = g1;\nfor (float i = 0.0; i < 3.0; i++) {\nfor (float j = 0.0; j < 3.0; j++) {\nsample = texture2D( u_colorTexture, v_uv + texel * vec2(i-1.0,j-1.0) ).rgb;\nI[int(i)][int(j)] = length(sample);\n}\n}\nfor (int i = 0; i < 2; i++) {\nfloat dp3 = dot(G[i][0], I[0]) + dot(G[i][1], I[1]) + dot(G[i][2], I[2]);\ncnv[i] = dp3 * dp3;\n}\ngl_FragColor = vec4(vec3(0.5 * sqrt(cnv[0] * cnv[0] + cnv[1] * cnv[1])), texture2D(u_colorTexture, v_uv).a);\n}"}},"edge-enhance":{"edge-enhance.frag":"precision mediump float;\nuniform sampler2D u_colorTexture;\nvarying vec2 v_uv;\nuniform vec2 u_texSize;\nvec2 texel = vec2(1.0 / u_texSize.x, 1.0 / u_texSize.y);\nmat3 G[2];\nconst mat3 g0 = mat3( 1.0, 0.0, -1.0, 1.0, 0.0, -1.0, 1.0, 0.0, -1.0 );\nconst mat3 g1 = mat3( 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, -1.0, -1.0, -1.0 );\nvoid main() {\nmat3 I;\nfloat cnv[2];\nvec3 sample;\nG[0] = g0;\nG[1] = g1;\nfor (float i = 0.0; i < 3.0; i++) {\nfor (float j = 0.0; j < 3.0; j++) {\nsample = texture2D( u_colorTexture, v_uv + texel * vec2(i-1.0,j-1.0) ).rgb;\nI[int(i)][int(j)] = length(sample);\n}\n}\nfor (int i = 0; i < 2; i++) {\nfloat dp3 = dot(G[i][0], I[0]) + dot(G[i][1], I[1]) + dot(G[i][2], I[2]);\ncnv[i] = dp3 * dp3;\n}\nvec4 color = texture2D(u_colorTexture, v_uv);\ngl_FragColor = vec4(0.5 * sqrt(cnv[0] * cnv[0] + cnv[1] * cnv[1]) * color);\n}"},filterEffect:{"filterEffect.frag":"precision mediump float;\nuniform sampler2D u_colorTexture;\nuniform mat4 u_coefficients;\nvarying vec2 v_uv;\nvoid main() {\nvec4 color = texture2D(u_colorTexture, v_uv);\nvec4 rgbw = u_coefficients * vec4(color.a > 0.0 ? color.rgb / color.a : vec3(0.0), 1.0);\nfloat a = color.a;\ngl_FragColor = vec4(a * rgbw.rgb, a);\n}"},pp:{"pp.vert":"precision mediump float;\nattribute vec2 a_position;\nvarying vec2 v_uv;\nvoid main() {\ngl_Position = vec4(a_position, 0.0, 1.0);\nv_uv = (a_position + 1.0) / 2.0;\n}"}},raster:{bitmap:{"bitmap.frag":"precision mediump float;\nvarying highp vec2 v_texcoord;\nuniform sampler2D u_texture;\nuniform highp vec2 u_coordScale;\nuniform lowp float u_opacity;\n#include <filtering/bicubic.glsl>\nvoid main() {\n#ifdef BICUBIC\nvec4 color = sampleBicubicBSpline(u_texture, v_texcoord, u_coordScale);\n#else\nvec4 color = texture2D(u_texture, v_texcoord);\n#endif\ngl_FragColor = vec4(color.rgb * u_opacity, color.a * u_opacity);\n}","bitmap.vert":"precision mediump float;\nattribute vec2 a_pos;\nuniform highp mat3 u_dvsMat3;\nuniform highp vec2 u_coordScale;\nvarying highp vec2 v_texcoord;\nvoid main()\n{\nv_texcoord = a_pos;\ngl_Position = vec4(u_dvsMat3 * vec3(a_pos * u_coordScale, 1.0), 1.0);\n}"},common:{"common.glsl":"uniform sampler2D u_image;\nuniform int u_bandCount;\nuniform bool u_flipY;\nuniform float u_opacity;\nuniform int u_resampling;\nuniform vec2 u_srcImageSize;\n#ifdef APPLY_PROJECTION\n#include <raster/common/projection.glsl>\n#endif\n#ifdef BICUBIC\n#include <filtering/bicubic.glsl>\n#endif\n#ifdef BILINEAR\n#include <filtering/bilinear.glsl>\n#endif\nvec2 getPixelLocation(vec2 coords) {\nvec2 targetLocation = u_flipY ? vec2(coords.s, 1.0 - coords.t) : coords;\n#ifdef APPLY_PROJECTION\ntargetLocation = projectPixelLocation(targetLocation);\n#endif\nreturn targetLocation;\n}\nbool isOutside(vec2 coords){\nif (coords.t>1.00001 ||coords.t<-0.00001 || coords.s>1.00001 ||coords.s<-0.00001) {\nreturn true;\n} else {\nreturn false;\n}\n}\nvec4 getPixel(vec2 pixelLocation) {\n#ifdef BICUBIC\nvec4 color = sampleBicubicBSpline(u_image, pixelLocation, u_srcImageSize);\n#elif defined(BILINEAR)\nvec4 color = sampleBilinear(u_image, pixelLocation, u_srcImageSize);\n#else\nvec4 color = texture2D(u_image, pixelLocation);\n#endif\nreturn color;\n}","common.vert":"precision mediump float;\nattribute vec2 a_pos;\nuniform highp mat3 u_dvsMat3;\nuniform highp vec2 u_coordScale;\nuniform highp float u_scale;\nuniform highp vec2 u_offset;\nvarying highp vec2 v_texcoord;\nvoid main()\n{\nv_texcoord = a_pos * u_scale + u_offset;\ngl_Position = vec4(u_dvsMat3 * vec3(a_pos * u_coordScale, 1.0), 1.0);\n}","contrastBrightness.glsl":"uniform float u_contrastOffset;\nuniform float u_brightnessOffset;\nvec4 adjustContrastBrightness(vec4 currentPixel, bool isFloat) {\nvec4 pixelValue = isFloat ? currentPixel * 255.0 : currentPixel;\nfloat maxI = 255.0;\nfloat mid = 128.0;\nfloat c = u_contrastOffset;\nfloat b = u_brightnessOffset;\nvec4 v;\nif (c > 0.0 && c < 100.0) {\nv = (200.0 * pixelValue - 100.0 * maxI + 2.0 * maxI * b) / (2.0 * (100.0 - c)) + mid;\n} else if (c <= 0.0 && c > -100.0) {\nv = (200.0 * pixelValue - 100.0 * maxI + 2.0 * maxI * b) * (100.0 + c) / 20000.0 + mid;\n} else if (c == 100.0) {\nv = (200.0 * pixelValue - 100.0 * maxI + (maxI + 1.0) * (100.0 - c) + 2.0 * maxI * b);\nv = (sign(v) + 1.0) / 2.0;\n} else if (c == -100.0) {\nv = vec4(mid, mid, mid, currentPixel.a);\n}\nreturn vec4(v.r / 255.0, v.g / 255.0, v.b / 255.0, currentPixel.a);\n}","inverse.glsl":"float invertValue(float value) {\nfloat s = sign(value);\nreturn (s * s) / (value + abs(s) - 1.0);\n}","mirror.glsl":"vec2 mirror(vec2 pos) {\nvec2 pos1 = abs(pos);\nreturn step(pos1, vec2(1.0, 1.0)) * pos1 + step(1.0, pos1) * (2.0 - pos1);\n}","projection.glsl":"uniform sampler2D u_transformGrid;\nuniform vec2 u_transformSpacing;\nuniform vec2 u_transformGridSize;\nuniform vec2 u_targetImageSize;\nvec2 projectPixelLocation(vec2 coords) {\n#ifdef LOOKUP_PROJECTION\nvec4 pv = texture2D(u_transformGrid, coords);\nreturn vec2(pv.r, pv.g);\n#endif\nvec2 index_image = floor(coords * u_targetImageSize);\nvec2 oneTransformPixel = vec2(0.25 / u_transformGridSize.s, 1.0 / u_transformGridSize.t);\nvec2 index_transform = floor(index_image / u_transformSpacing) / u_transformGridSize;\nvec2 pos = fract((index_image + vec2(0.5, 0.5)) / u_transformSpacing);\nvec2 srcLocation;\nvec2 transform_location = index_transform + oneTransformPixel * 0.5;\nif (pos.s <= pos.t) {\nvec4 ll_abc = texture2D(u_transformGrid, vec2(transform_location.s, transform_location.t));\nvec4 ll_def = texture2D(u_transformGrid, vec2(transform_location.s + oneTransformPixel.s, transform_location.t));\nsrcLocation.s = dot(ll_abc.rgb, vec3(pos, 1.0));\nsrcLocation.t = dot(ll_def.rgb, vec3(pos, 1.0));\n} else {\nvec4 ur_abc = texture2D(u_transformGrid, vec2(transform_location.s + 2.0 * oneTransformPixel.s, transform_location.t));\nvec4 ur_def = texture2D(u_transformGrid, vec2(transform_location.s + 3.0 * oneTransformPixel.s, transform_location.t));\nsrcLocation.s = dot(ur_abc.rgb, vec3(pos, 1.0));\nsrcLocation.t = dot(ur_def.rgb, vec3(pos, 1.0));\n}\nreturn srcLocation;\n}"},flow:{"getFadeOpacity.glsl":"uniform float u_decayRate;\nuniform float u_fadeToZero;\nfloat getFadeOpacity(float x) {\nfloat cutOff = mix(0.0, exp(-u_decayRate), u_fadeToZero);\nreturn (exp(-u_decayRate * x) - cutOff) / (1.0 - cutOff);\n}","getFragmentColor.glsl":"vec4 getFragmentColor(vec4 color, float dist, float size, float featheringSize) {\nfloat featheringStart = clamp(0.5 - featheringSize / size, 0.0, 0.5);\nif (dist > featheringStart) {\ncolor *= 1.0 - (dist - featheringStart) / (0.5 - featheringStart);\n}\nreturn color;\n}",imagery:{"imagery.frag":"precision highp float;\nvarying vec2 v_texcoord;\nuniform sampler2D u_texture;\nuniform float u_Min;\nuniform float u_Max;\nuniform float u_featheringSize;\n#include <raster/flow/vv.glsl>\nfloat getIntensity(float v) {\nreturn u_Min + v * (u_Max - u_Min);\n}\nvoid main(void) {\nvec4 sampled = texture2D(u_texture, v_texcoord);\nfloat intensity = getIntensity(sampled.r);\ngl_FragColor = getColor(intensity);\ngl_FragColor.a *= getOpacity(sampled.r);\ngl_FragColor.a *= sampled.a;\ngl_FragColor.rgb *= gl_FragColor.a;\n}","imagery.vert":"attribute vec2 a_position;\nattribute vec2 a_texcoord;\nuniform mat3 u_dvsMat3;\nvarying vec2 v_texcoord;\nvoid main(void) {\nvec2 xy = (u_dvsMat3 * vec3(a_position, 1.0)).xy;\ngl_Position = vec4(xy, 0.0, 1.0);\nv_texcoord = a_texcoord;\n}"},particles:{"particles.frag":"precision highp float;\nvarying vec4 v_color;\nvarying vec2 v_texcoord;\nvarying float v_size;\nuniform float u_featheringSize;\n#include <raster/flow/getFragmentColor.glsl>\nvoid main(void) {\ngl_FragColor = getFragmentColor(v_color, length(v_texcoord - 0.5), v_size, u_featheringSize);\n}",
"particles.vert":"attribute vec4 a_xyts0;\nattribute vec4 a_xyts1;\nattribute vec4 a_typeIdDurationSeed;\nattribute vec4 a_extrudeInfo;\nuniform mat3 u_dvsMat3;\nuniform mat3 u_displayViewMat3;\nuniform float u_time;\nuniform float u_trailLength;\nuniform float u_flowSpeed;\nvarying vec4 v_color;\nvarying vec2 v_texcoord;\nvarying float v_size;\nuniform float u_featheringSize;\nuniform float u_introFade;\n#include <raster/flow/vv.glsl>\n#include <raster/flow/getFadeOpacity.glsl>\nvoid main(void) {\nvec2 position0 = a_xyts0.xy;\nfloat t0 = a_xyts0.z;\nfloat speed0 = a_xyts0.w;\nvec2 position1 = a_xyts1.xy;\nfloat t1 = a_xyts1.z;\nfloat speed1 = a_xyts1.w;\nfloat type = a_typeIdDurationSeed.x;\nfloat id = a_typeIdDurationSeed.y;\nfloat duration = a_typeIdDurationSeed.z;\nfloat seed = a_typeIdDurationSeed.w;\nvec2 e0 = a_extrudeInfo.xy;\nvec2 e1 = a_extrudeInfo.zw;\nfloat animationPeriod = duration + u_trailLength;\nfloat scaledTime = u_time * u_flowSpeed;\nfloat randomizedTime = scaledTime + seed * animationPeriod;\nfloat t = mod(randomizedTime, animationPeriod);\nfloat fUnclamped = (t - t0) / (t1 - t0);\nfloat f = clamp(fUnclamped, 0.0, 1.0);\nfloat clampedTime = mix(t0, t1, f);\nfloat speed = mix(speed0, speed1, f);\nvec2 extrude;\nvec2 position;\nfloat fadeOpacity;\nfloat introOpacity;\nif (type == 2.0) {\nif (fUnclamped < 0.0 || (fUnclamped > 1.0 && t1 != duration)) {\ngl_Position = vec4(0.0, 0.0, -2.0, 1.0);\nreturn;\n}\nvec2 ortho = mix(e0, e1, f);\nvec2 parallel;\nparallel = normalize(position1 - position0) * 0.5;\nif (id == 1.0) {\nextrude = ortho;\nv_texcoord = vec2(0.5, 0.0);\n} else if (id == 2.0) {\nextrude = -ortho;\nv_texcoord = vec2(0.5, 1.0);\n} else if (id == 3.0) {\nextrude = ortho + parallel;\nv_texcoord = vec2(1.0, 0.0);\n} else if (id == 4.0) {\nextrude = -ortho + parallel;\nv_texcoord = vec2(1.0, 1.0);\n}\nfadeOpacity = getFadeOpacity((t - clampedTime) / u_trailLength);\nintroOpacity = 1.0 - exp(-clampedTime);\nv_size = getSize(speed);\nv_color = getColor(speed);\nv_color.a *= getOpacity(speed);\nposition = mix(position0, position1, f);\n} else {\nif (fUnclamped < 0.0) {\ngl_Position = vec4(0.0, 0.0, -2.0, 1.0);\nreturn;\n}\nif (id == 1.0) {\nextrude = e0;\nv_texcoord = vec2(0.5, 0.0);\nfadeOpacity = getFadeOpacity((t - t0) / u_trailLength);\nintroOpacity = 1.0 - exp(-t0);\nv_size = getSize(speed0);\nv_color = getColor(speed0);\nv_color.a *= getOpacity(speed0);\nposition = position0;\n} else if (id == 2.0) {\nextrude = -e0;\nv_texcoord = vec2(0.5, 1.0);\nfadeOpacity = getFadeOpacity((t - t0) / u_trailLength);\nintroOpacity = 1.0 - exp(-t0);\nv_size = getSize(speed0);\nv_color = getColor(speed0);\nv_color.a *= getOpacity(speed0);\nposition = position0;\n} else if (id == 3.0) {\nextrude = mix(e0, e1, f);\nv_texcoord = vec2(0.5, 0.0);\nfadeOpacity = getFadeOpacity((t - clampedTime) / u_trailLength);\nintroOpacity = 1.0 - exp(-clampedTime);\nv_size = getSize(speed);\nv_color = getColor(speed);\nv_color.a *= getOpacity(speed);\nposition = mix(position0, position1, f);\n} else if (id == 4.0) {\nextrude = -mix(e0, e1, f);\nv_texcoord = vec2(0.5, 1.0);\nfadeOpacity = getFadeOpacity((t - clampedTime) / u_trailLength);\nintroOpacity = 1.0 - exp(-clampedTime);\nv_size = getSize(speed);\nv_color = getColor(speed);\nv_color.a *= getOpacity(speed);\nposition = mix(position0, position1, f);\n}\n}\nvec2 xy = (u_dvsMat3 * vec3(position, 1.0) + u_displayViewMat3 * vec3(extrude * v_size, 0.0)).xy;\ngl_Position = vec4(xy, 0.0, 1.0);\nv_color.a *= fadeOpacity;\nv_color.a *= mix(1.0, introOpacity, u_introFade);\nv_color.rgb *= v_color.a;\n}"},streamlines:{"streamlines.frag":"precision highp float;\nvarying float v_side;\nvarying float v_time;\nvarying float v_totalTime;\nvarying float v_timeSeed;\nvarying vec4 v_color;\nvarying float v_size;\nuniform float u_time;\nuniform float u_trailLength;\nuniform float u_flowSpeed;\nuniform float u_featheringSize;\nuniform float u_introFade;\n#include <raster/flow/getFragmentColor.glsl>\n#include <raster/flow/getFadeOpacity.glsl>\nvoid main(void) {\nfloat t = mod(v_timeSeed * (v_totalTime + u_trailLength) + u_time * u_flowSpeed, v_totalTime + u_trailLength) - v_time;\nvec4 color = v_color * step(0.0, t) * getFadeOpacity(t / u_trailLength);\ncolor *= mix(1.0, 1.0 - exp(-v_time), u_introFade);\ngl_FragColor = getFragmentColor(color, length((v_side + 1.0) / 2.0 - 0.5), v_size, u_featheringSize);\n}","streamlines.vert":"attribute vec3 a_positionAndSide;\nattribute vec3 a_timeInfo;\nattribute vec2 a_extrude;\nattribute float a_speed;\nuniform mat3 u_dvsMat3;\nuniform mat3 u_displayViewMat3;\nvarying float v_time;\nvarying float v_totalTime;\nvarying float v_timeSeed;\nvarying vec4 v_color;\nvarying float v_side;\nvarying float v_size;\nuniform float u_featheringSize;\n#include <raster/flow/vv.glsl>\nvoid main(void) {\nvec4 lineColor = getColor(a_speed);\nfloat lineOpacity = getOpacity(a_speed);\nfloat lineSize = getSize(a_speed);\nvec2 position = a_positionAndSide.xy;\nv_side = a_positionAndSide.z;\nvec2 xy = (u_dvsMat3 * vec3(position, 1.0) + u_displayViewMat3 * vec3(a_extrude * lineSize, 0.0)).xy;\ngl_Position = vec4(xy, 0.0, 1.0);\nv_time = a_timeInfo.x;\nv_totalTime = a_timeInfo.y;\nv_timeSeed = a_timeInfo.z;\nv_color = lineColor;\nv_color.a *= lineOpacity;\nv_color.rgb *= v_color.a;\nv_size = lineSize;\n}"},"vv.glsl":"#define MAX_STOPS 8\n#ifdef VV_COLOR\nuniform float u_color_stops[MAX_STOPS];\nuniform vec4 u_color_values[MAX_STOPS];\nuniform int u_color_count;\n#else\nuniform vec4 u_color;\n#endif\n#ifdef VV_OPACITY\nuniform float u_opacity_stops[MAX_STOPS];\nuniform float u_opacity_values[MAX_STOPS];\nuniform int u_opacity_count;\n#else\nuniform float u_opacity;\n#endif\n#ifdef VV_SIZE\nuniform float u_size_stops[MAX_STOPS];\nuniform float u_size_values[MAX_STOPS];\nuniform int u_size_count;\n#else\nuniform float u_size;\n#endif\nuniform float u_featheringOffset;\nvec4 getColor(float x) {\n#ifdef VV_COLOR\nvec4 color = u_color_values[0];\n{\nfor (int i = 1; i < MAX_STOPS; i++) {\nif (i >= u_color_count) {\nbreak;\n}\nfloat x1 = u_color_stops[i - 1];\nif (x < x1) {\nbreak;\n}\nfloat x2 = u_color_stops[i];\nvec4 y2 = u_color_values[i];\nif (x < x2) {\nvec4 y1 = u_color_values[i - 1];\ncolor = y1 + (y2 - y1) * (x - x1) / (x2 - x1);\n} else {\ncolor = y2;\n}\n}\n}\n#else\nvec4 color = u_color;\n#endif\nreturn color;\n}\nfloat getOpacity(float x) {\n#ifdef VV_OPACITY\nfloat opacity = u_opacity_values[0];\n{\nfor (int i = 1; i < MAX_STOPS; i++) {\nif (i >= u_opacity_count) {\nbreak;\n}\nfloat x1 = u_opacity_stops[i - 1];\nif (x < x1) {\nbreak;\n}\nfloat x2 = u_opacity_stops[i];\nfloat y2 = u_opacity_values[i];\nif (x < x2) {\nfloat y1 = u_opacity_values[i - 1];\nopacity = y1 + (y2 - y1) * (x - x1) / (x2 - x1);\n} else {\nopacity = y2;\n}\n}\n}\n#else\nfloat opacity = u_opacity;\n#endif\nreturn opacity;\n}\nfloat getSize(float x) {\n#ifdef VV_SIZE\nfloat size = u_size_values[0];\n{\nfor (int i = 1; i < MAX_STOPS; i++) {\nif (i >= u_size_count) {\nbreak;\n}\nfloat x1 = u_size_stops[i - 1];\nif (x < x1) {\nbreak;\n}\nfloat x2 = u_size_stops[i];\nfloat y2 = u_size_values[i];\nif (x < x2) {\nfloat y1 = u_size_values[i - 1];\nsize = y1 + (y2 - y1) * (x - x1) / (x2 - x1);\n} else {\nsize = y2;\n}\n}\n}\n#else\nfloat size = u_size;\n#endif\nreturn size + 2.0 * u_featheringSize * u_featheringOffset;\n}"},hillshade:{"hillshade.frag":"precision mediump float;\nvarying highp vec2 v_texcoord;\n#include <raster/common/common.glsl>\nuniform int u_hillshadeType;\nuniform float u_sinZcosAs[6];\nuniform float u_sinZsinAs[6];\nuniform float u_cosZs[6];\nuniform float u_weights[6];\nuniform vec2 u_factor;\nuniform float u_minValue;\nuniform float u_maxValue;\n#include <raster/lut/colorize.glsl>\nfloat getNeighborHoodAlpha(float a, float b, float c, float d, float e, float f, float g, float h, float i){\nif (a == 0.0 || a == 0.0 || a==0.0 || a == 0.0 || a == 0.0 || a==0.0 || a == 0.0 || a == 0.0 || a==0.0) {\nreturn 0.0;\n}\nelse {\nreturn e;\n}\n}\nvec3 rgb2hsv(vec3 c) {\nvec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\nvec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);\nvec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);\nfloat d = q.x - min(q.w, q.y);\nfloat e = 1.0e-10;\nreturn vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);\n}\nvec3 hsv2rgb(vec3 c) {\nvec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\nvec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\nreturn c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n}\nvec4 overlay(float val, float minValue, float maxValue, float hillshade) {\nval = clamp((val - minValue) / (maxValue - minValue), 0.0, 1.0);\nvec4 rgb = colorize(vec4(val, val, val, 1.0), 255.0);\nvec3 hsv = rgb2hsv(rgb.xyz);\nhsv.z = hillshade;\nreturn vec4(hsv2rgb(hsv), 1.0) * rgb.a;\n}\nvoid main() {\nvec2 pixelLocation = getPixelLocation(v_texcoord);\nif (isOutside(pixelLocation)) {\ngl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\nreturn;\n}\nvec4 currentPixel = getPixel(pixelLocation);\nif (currentPixel.a == 0.0) {\ngl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\nreturn;\n}\nvec2 axy = vec2(-1.0, -1.0);\nvec2 bxy = vec2(0.0, -1.0);\nvec2 cxy = vec2(1.0, -1.0);\nvec2 dxy = vec2(-1.0, 0.0);\nvec2 fxy = vec2(1.0, 0.0);\nvec2 gxy = vec2(-1.0, 1.0);\nvec2 hxy = vec2(0.0, 1.0);\nvec2 ixy = vec2(1.0, 1.0);\nvec2 onePixel = 1.0 / u_srcImageSize;\nif (pixelLocation.s < onePixel.s) {\naxy[0] = 1.0;\ndxy[0] = 1.0;\ngxy[0] = 1.0;\n}\nif (pixelLocation.t < onePixel.t) {\naxy[1] = 1.0;\nbxy[1] = 1.0;\ncxy[1] = 1.0;\n}\nif (pixelLocation.s > 1.0 - onePixel.s) {\ncxy[0] = -1.0;\nfxy[0] = -1.0;\nixy[0] = -1.0;\n}\nif (pixelLocation.t > 1.0 - onePixel.t) {\ngxy[1] = -1.0;\nhxy[1] = -1.0;\nixy[1] = -1.0;\n}\nvec4 va = texture2D(u_image, pixelLocation + onePixel * axy);\nvec4 vb = texture2D(u_image, pixelLocation + onePixel * bxy);\nvec4 vc = texture2D(u_image, pixelLocation + onePixel * cxy);\nvec4 vd = texture2D(u_image, pixelLocation + onePixel * dxy);\nvec4 ve = texture2D(u_image, pixelLocation);\nvec4 vf = texture2D(u_image, pixelLocation + onePixel * fxy);\nvec4 vg = texture2D(u_image, pixelLocation + onePixel * gxy);\nvec4 vh = texture2D(u_image, pixelLocation + onePixel * hxy);\nvec4 vi = texture2D(u_image, pixelLocation + onePixel * ixy);\nfloat dzx = (vc + 2.0 * vf + vi - va - 2.0 * vd - vg).r * u_factor.s;\nfloat dzy = (vg + 2.0 * vh + vi - va - 2.0 * vb - vc).r * u_factor.t;\nfloat dzd = sqrt(1.0 + dzx * dzx + dzy * dzy);\nfloat hillshade = 0.0;\nif (u_hillshadeType == 0){\nfloat cosDelta = u_sinZsinAs[0] * dzy - u_sinZcosAs[0] * dzx;\nfloat z = (u_cosZs[0] + cosDelta) / dzd;\nif (z < 0.0)  z = 0.0;\nhillshade = z;\n} else {\nfor (int k = 0; k < 6; k++) {\nfloat cosDelta = u_sinZsinAs[k] * dzy - u_sinZcosAs[k] * dzx;\nfloat z = (u_cosZs[k] + cosDelta) / dzd;\nif (z < 0.0) z = 0.0;\nhillshade = hillshade + z * u_weights[k];\nif (k == 5) break;\n}\n}\nfloat alpha = getNeighborHoodAlpha(va.a, vb.a, vc.a, vd.a, ve.a, vf.a, vg.a, vh.a, vi.a);\n#ifdef APPLY_COLORMAP\ngl_FragColor = overlay(ve.r, u_minValue, u_maxValue, hillshade) * alpha * u_opacity;\n#else\ngl_FragColor = vec4(hillshade, hillshade, hillshade, 1.0) * alpha * u_opacity;\n#endif\n}"},lut:{"colorize.glsl":"uniform sampler2D u_colormap;\nuniform float u_colormapOffset;\nuniform float u_colormapMaxIndex;\nvec4 colorize(vec4 currentPixel, float scaleFactor) {\nfloat clrIndex = clamp(currentPixel.r * scaleFactor - u_colormapOffset, 0.0, u_colormapMaxIndex);\nvec2 clrPosition = vec2((clrIndex + 0.5) / (u_colormapMaxIndex + 1.0), 0.0);\nvec4 color = texture2D(u_colormap, clrPosition);\nvec4 result = vec4(color.rgb, color.a * currentPixel.a);\nreturn result;\n}","lut.frag":"precision mediump float;\nvarying highp vec2 v_texcoord;\n#include <raster/common/common.glsl>\n#include <raster/lut/colorize.glsl>\nvoid main() {\nvec2 pixelLocation = getPixelLocation(v_texcoord);\nif (isOutside(pixelLocation)) {\ngl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\nreturn;\n}\nvec4 currentPixel = getPixel(pixelLocation);\nvec4 result = colorize(currentPixel, 1.0);\ngl_FragColor = vec4(result.xyz, 1.0) * result.a * u_opacity;\n}"},magdir:{"magdir.frag":"precision mediump float;\nvarying vec4 v_color;\nuniform lowp float u_opacity;\nvoid main() {\ngl_FragColor = v_color * u_opacity;\n}","magdir.vert":"precision mediump float;\nattribute vec2 a_pos;\nattribute vec2 a_offset;\nattribute vec2 a_vv;\nuniform highp mat3 u_dvsMat3;\nuniform highp vec2 u_coordScale;\nuniform vec2 u_symbolSize;\nuniform vec2 u_symbolPercentRange;\nuniform vec2 u_dataRange;\nuniform float u_rotation;\nuniform vec4 u_colors[12];\nvarying vec4 v_color;\nvoid main()\n{\nfloat angle = a_offset.y + u_rotation;\n#ifndef ROTATION_GEOGRAPHIC\nangle = 3.14159265359 * 2.0 - angle - 3.14159265359 / 2.0;\n#endif\nvec2 offset = vec2(cos(angle), sin(angle)) * a_offset.x;\n#ifdef DATA_RANGE\nfloat valuePercentage = clamp((a_vv.y - u_dataRange.x) / (u_dataRange.y - u_dataRange.x), 0.0, 1.0);\nfloat sizeRatio = u_symbolPercentRange.x + valuePercentage * (u_symbolPercentRange.y - u_symbolPercentRange.x);\nfloat sizePercentage = clamp(sizeRatio, u_symbolPercentRange.x, u_symbolPercentRange.y);\n#else\nfloat sizePercentage = (u_symbolPercentRange.x + u_symbolPercentRange.y) / 2.0;\n#endif\nvec2 pos = a_pos + offset * sizePercentage * u_symbolSize;\nv_color = u_colors[int(a_vv.x)];\ngl_Position = vec4(u_dvsMat3 * vec3(pos * u_coordScale, 1.0), 1.0);\n}"},reproject:{"reproject.frag":"precision mediump float;\nvarying vec2 v_texcoord;\n#include <raster/common/common.glsl>\nvoid main() {\nvec2 pixelLocation = getPixelLocation(v_texcoord);\nif (isOutside(pixelLocation)) {\ngl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\nreturn;\n}\nvec4 currentPixel = getPixel(pixelLocation);\ngl_FragColor = vec4(currentPixel.rgb, 1.0) * currentPixel.a * u_opacity;\n}","reproject.vert":"precision mediump float;\nattribute vec2 a_position;\nvarying highp vec2 v_texcoord;\nvoid main()\n{\nv_texcoord = a_position;\ngl_Position = vec4(2.0 * (a_position - 0.5), 0.0, 1.0);\n}"},rfx:{aspect:{"aspect.frag":"precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texcoord;\nuniform vec2 u_cellSize;\nuniform vec2 u_srcImageSize;\n#include <raster/common/mirror.glsl>\nconst float pi = 3.14159265359;\nvoid main() {\nvec2 axy = vec2(-1.0, -1.0);\nvec2 bxy = vec2(0.0, -1.0);\nvec2 cxy = vec2(1.0, -1.0);\nvec2 dxy = vec2(-1.0, 0.0);\nvec2 fxy = vec2(1.0, 0.0);\nvec2 gxy = vec2(-1.0, 1.0);\nvec2 hxy = vec2(0.0, 1.0);\nvec2 ixy = vec2(1.0, 1.0);\nvec2 onePixel = 1.0 / u_srcImageSize;\nvec4 va = texture2D(u_image, mirror(v_texcoord + onePixel * axy));\nvec4 vb = texture2D(u_image, mirror(v_texcoord + onePixel * bxy));\nvec4 vc = texture2D(u_image, mirror(v_texcoord + onePixel * cxy));\nvec4 vd = texture2D(u_image, mirror(v_texcoord + onePixel * dxy));\nvec4 ve = texture2D(u_image, mirror(v_texcoord + onePixel * vec2(0, 0)));\nvec4 vf = texture2D(u_image, mirror(v_texcoord + onePixel * fxy));\nvec4 vg = texture2D(u_image, mirror(v_texcoord + onePixel * gxy));\nvec4 vh = texture2D(u_image, mirror(v_texcoord + onePixel * hxy));\nvec4 vi = texture2D(u_image, mirror(v_texcoord + onePixel * ixy));\nfloat dzx = (vc + 2.0 * vf + vi - va - 2.0 * vd - vg).r / (8.0 * u_cellSize[0]);\nfloat dzy = -(vg + 2.0 * vh + vi - va - 2.0 * vb - vc).r / (8.0 * u_cellSize[1]);\nfloat alpha = va.a * vb.a * vc.a * vd.a * ve.a * vf.a * vg.a * vh.a * vi.a * sign(abs(dzx) + abs(dzy));\nfloat aspect_rad = (dzx == 0.0) ? (step(0.0, dzy) * 0.5 * pi + step(dzy, 0.0) * 1.5 * pi) : mod((2.5 * pi + atan(dzy, -dzx)), 2.0 * pi);\nfloat aspect = aspect_rad * 180.0 / pi;\ngl_FragColor = vec4(aspect, aspect, aspect, 1.0) * alpha;\n}"},bandarithmetic:{"bandarithmetic.frag":"precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texcoord;\nuniform mediump mat3 u_bandIndexMat3;\nuniform float u_adjustments[3];\n#include <raster/common/inverse.glsl>\nvoid main() {\nvec4 pv = texture2D(u_image, v_texcoord);\nvec3 pv2 = u_bandIndexMat3 * pv.rgb;\nfloat nir = pv2.r;\nfloat red = pv2.g;\nfloat index;\n#ifdef NDXI\nindex = (nir - red) * invertValue(nir + red);\n#elif defined(SR)\nindex = nir * invertValue(red);\n#elif defined(CI)\nindex = nir * invertValue(red) - 1.0;\n#elif defined(SAVI)\nindex = (nir - red) * invertValue(nir + red + u_adjustments[0]) * (1.0 + u_adjustments[0]);\n#elif defined(TSAVI)\nfloat s = u_adjustments[0];\nfloat a = u_adjustments[1];\nfloat x = u_adjustments[2];\nfloat y = -a * s + x * (1.0 + s * s);\nindex = (s * (nir - s * red - a)) * invertValue(a * nir + red + y);\n#elif defined(MAVI)\nindex = 0.5 * (2.0 * (nir + 1.0) - sqrt(pow((2.0 * nir + 1.0), 2.0) - 8.0 * (nir - red)));\n#elif defined(GEMI)\nfloat eta = (2.0 * (nir * nir - red * red) + 1.5 * nir + 0.5 * red) * invertValue(nir + red + 0.5);\nindex = eta * (1.0 - 0.25 * eta) - (red - 0.125) * invertValue(1.0 - red);\n#elif defined(PVI)\nfloat a = u_adjustments[0];\nfloat b = u_adjustments[1];\nfloat y = sqrt(1.0 + a * a);\nindex = (nir - a * red - b) * invertValue(y);\n#elif defined(VARI)\nindex = (pv2.g - pv2.r) * invertValue(pv2.g + pv2.r - pv2.b);\n#elif defined(MTVI2)\nfloat green = pv2.b;\nfloat v = pow(sqrt((2.0 * nir + 1.0), 2.0) - 6.0 * nir - 5.0 * sqrt(red) - 0.5);\nindex = 1.5 * (1.2 * (nir - green) - 2.5 * (red - green)) * v;\n#elif defined(RTVICORE)\nfloat green = pv2.b;\nindex = 100.0 * (nir - red) - 10.0 * (nir - green);\n#elif defined(EVI)\nfloat blue = pv2.b;\nfloat denom = nir + 6.0 * red - 7.5 * blue + 1.0;\nindex =  (2.5 * (nir - red)) * invertValue(denom);\n#elif defined(WNDWI)\nfloat g = pv2.r;\nfloat n = pv2.g;\nfloat s = pv2.s;\nfloat a = u_adjustments[0];\nfloat denom = g + a * n + (1.0 - a) * s;\nindex = (g - a * n - (1 - a) * s) * invertValue(denom);\n#elif defined(BAI)\nindex = invertValue(pow((0.1 - red), 2.0) + pow((0.06 - nir), 2.0));\n#else\ngl_FragColor = pv;\nreturn;\n#endif\ngl_FragColor = vec4(index, index, index, pv.a);\n}"},compositeband:{"compositeband.frag":"precision mediump float;\nuniform sampler2D u_image;\nuniform sampler2D u_image1;\nuniform sampler2D u_image2;\nvarying vec2 v_texcoord;\nvoid main() {\nvec4 p0 = texture2D(u_image, v_texcoord);\nvec4 p1 = texture2D(u_image1, v_texcoord);\nvec4 p2 = texture2D(u_image2, v_texcoord);\ngl_FragColor = vec4(p0.r, p1.r, p2.r, p0.a * p1.a * p2.a);\n}"},convolution:{"convolution.frag":"precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texcoord;\nuniform vec2 u_srcImageSize;\n#define KERNEL_SIZE_ROWS ROWS\n#define KERNEL_SIZE_COLS COLS\nuniform vec2 u_clampRange;\nuniform float u_kernel[25];\n#include <raster/common/mirror.glsl>\nvoid main() {\nvec3 rgb = vec3(0.0, 0.0, 0.0);\nvec2 resolution = 1.0 / u_srcImageSize;\nfloat rowOffset = -float(floor(float(KERNEL_SIZE_ROWS) / 2.0));\nfloat colOffset = -float(floor(float(KERNEL_SIZE_COLS) / 2.0));\nfloat alpha = 1.0;\nfor (int row = 0; row < KERNEL_SIZE_ROWS; row++) {\nfloat pos_row = rowOffset + float(row);\nfor (int col = 0; col < KERNEL_SIZE_COLS; col++) {\nvec2 pos = v_texcoord + vec2(colOffset + float(col), pos_row) * resolution;\nvec4 pv = texture2D(u_image, mirror(pos));\nrgb += pv.rgb * u_kernel[row * KERNEL_SIZE_COLS + col];\nalpha *= pv.a;\n}\n}\nrgb = clamp(rgb, u_clampRange.s, u_clampRange.t);\ngl_FragColor = vec4(rgb * alpha, alpha);\n}"},extractband:{"extractband.frag":"precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texcoord;\nuniform mediump mat3 u_bandIndexMat3;\nvoid main() {\nvec4 pv = texture2D(u_image, v_texcoord);\nvec3 pv2 = u_bandIndexMat3 * pv.rgb;\ngl_FragColor = vec4(pv2, pv.a);\n}"},local:{"local.frag":"precision mediump float;\nuniform sampler2D u_image;\nuniform sampler2D u_image1;\n#ifdef ONE_CONSTANT\nuniform float u_image1Const;\n#ifdef TWO_CONSTANT\nuniform float u_image2Const;\n#endif\nuniform mat3 u_imageSwap;\n#endif\nvarying vec2 v_texcoord;\nuniform vec2 u_domainRange;\n#include <raster/common/inverse.glsl>\nvoid main() {\nvec4 pv0 = texture2D(u_image, v_texcoord);\nfloat a = pv0.r;\n#ifdef TWO_IMAGES\n#ifdef ONE_CONSTANT\nfloat b = u_image1Const;\nvec3 abc = u_imageSwap * vec3(a, b, 0);\na = abc.s;\nb = abc.t;\n#else\nvec4 pv1 = texture2D(u_image1, v_texcoord);\nfloat b = pv1.r;\n#endif\n#elif defined(CONDITIONAL)\n#ifdef TWO_CONSTANT\nfloat b = u_image1Const;\nfloat c = u_image2Const;\nvec3 abc = u_imageSwap * vec3(a, b, c);\na = abc.s;\nb = abc.t;\nc = abc.p;\n#elif defined(ONE_CONSTANT)\nvec4 pv1 = texture2D(u_image1, v_texcoord);\nfloat b = pv1.r;\nfloat c = u_image1Const;\nvec3 abc = u_imageSwap * vec3(a, b, c);\na = abc.s;\nb = abc.t;\nc = abc.p;\n#else\nvec4 pv1 = texture2D(u_image1, v_texcoord);\nvec4 pv2 = texture2D(u_image2, v_texcoord);\nfloat b = pv1.r;\nfloat c = pv2.r;\n#endif\n#endif\nfloat result = a;\nfloat alpha = pv0.a;\n#ifdef PLUS\nresult = a + b;\n#elif defined(MINUS)\nresult = a - b;\n#elif defined(TIMES)\nresult = a * b;\n#elif defined(DIVIDE)\nresult = a * invertValue(b);\nalpha *= float(abs(sign(b)));\n#elif defined(FLOATDIVIDE)\nresult = a * invertValue(b);\nalpha *= float(abs(sign(b)));\n#elif defined(FLOORDIVIDE)\nresult = floor(a * invertValue(b));\nalpha *= float(abs(sign(b)));\n#elif defined(SQUARE)\nresult = a * a;\n#elif defined(SQRT)\nresult = sqrt(a);\n#elif defined(POWER)\nresult = pow(a, b);\n#elif defined(LN)\nresult = a <= 0.0 ? 0.0: log(a);\nalpha *= float(a > 0.0);\n#elif defined(LOG_1_0)\nresult = a <= 0.0 ? 0.0: log2(a) * invertValue(log2(10.0));\nalpha *= float(a > 0.0);\n#elif defined(LOG_2)\nresult = a <= 0.0 ? 0.0: log2(a);\nalpha *= float(a > 0.0);\n#elif defined(EXP)\nresult = exp(a);\n#elif defined(EXP_1_0)\nresult = pow(10.0, a);\n#elif defined(EXP_2)\nresult = pow(2.0, a);\n#elif defined(ROUNDDOWN)\nresult = floor(a);\n#elif defined(ROUNDUP)\nresult = ceil(a);\n#elif defined(INT)\nresult = float(sign(a)) * floor(abs(a));\n#elif defined(MOD)\nresult = mod(a, b);\n#elif defined(NEGATE)\nresult = -a;\n#elif defined(ABS)\nresult = abs(a);\n#elif defined(ACOS)\nresult = abs(a) > 1.0 ? 0.0: acos(a);\nalpha *= step(abs(a), 1.00001);\n#elif defined(ACOSH)\nresult = acosh(a);\n#elif defined(POLYFILLACOSH)\nresult = log(a + sqrt(a * a - 1.0));\n#elif defined(ASIN)\nresult = abs(a) > 1.0 ? 0.0: asin(a);\nalpha *= step(abs(a), 1.00001);\n#elif defined(ASINH)\nresult = asinh(a);\n#elif defined(POLYFILLASINH)\nresult = log(a + sqrt(a * a + 1.0));\n#elif defined(ATAN)\nresult = atan(a);\n#elif defined(ATANH)\nresult = abs(a) > 1.0 ? 0.0: atanh(a);\nalpha *= step(abs(a), 1.0);\n#elif defined(POLYFILLATANH)\nresult = a == 1.0 ? 0.0 : 0.5 * log((1.0 + a)/(1.0 -a));\n#elif defined(ATAN_2)\nresult = atan(a, b);\n#elif defined(COS)\nresult = cos(a);\n#elif defined(COSH)\nresult = cosh(a);\n#elif defined(POLYFILLCOSH)\nfloat halfexp = exp(a) / 2.0;\nresult = halfexp + 1.0 / halfexp;\n#elif defined(SIN)\nresult = sin(a);\n#elif defined(SINH)\nresult = sinh(a);\n#elif defined(POLYFILLSINH)\nfloat halfexp = exp(a) / 2.0;\nresult = halfexp - 1.0 / halfexp;\n#elif defined(TAN)\nresult = tan(a);\n#elif defined(TANH)\nresult = tanh(a);\n#elif defined(POLYFILLTANH)\nfloat expx = exp(a);\nresult = (expx - 1.0 / expx) / (expx + 1.0 / expx);\n#elif defined(BITWISEAND)\nresult = a & b;\n#elif defined(BITWISEOR)\nresult = a | b;\n#elif defined(BITWISELEFTSHIFT)\nresult = a << b;\n#elif defined(BITWISERIGHTSHIFT)\nresult = a >> b;\n#elif defined(BITWISENOT)\nresult = ~a;\n#elif defined(BITWISEXOR)\nresult = a ^ b;\n#elif defined(BOOLEANAND)\nresult = float((a != 0.0) && (b != 0.0));\n#elif defined(BOOLEANNOT)\nresult = float(a == 0.0);\n#elif defined(BOOLEANOR)\nresult = float((a != 0.0) || (b != 0.0));\n#elif defined(BOOLEANXOR)\nresult = float((a != 0.0) ^^ (b != 0.0));\n#elif defined(GREATERTHAN)\nresult = float(a > b);\n#elif defined(GREATERTHANEQUAL)\nresult = float(a >= b);\n#elif defined(LESSTHAN)\nresult = float(a < b);\n#elif defined(LESSTHANEQUAL)\nresult = float(a <= b);\n#elif defined(EQUALTO)\nresult = float(a == b);\n#elif defined(NOTEQUAL)\nresult = float(a != b);\n#elif defined(ISNULL)\nresult = float(alpha == 0.0);\nalpha = 1.0;\n#elif defined(SETNULL)\nfloat maskValue = float(a == 0.0);\nresult = maskValue * b;\nalpha *= maskValue;\n#elif defined(CONDITIONAL)\nfloat weight = float(abs(sign(a)));\nresult = weight * b + (1.0 - weight) * c;\n#endif\nbool isInvalid = result < u_domainRange.s || result > u_domainRange.t;\nresult = isInvalid ? 0.0 : result;\nalpha *= float(!isInvalid);\n#ifdef ROUND_OUTPUT\nresult = floor(result + 0.5);\n#endif\ngl_FragColor = vec4(result, result, result, alpha);\n}"},mask:{"mask.frag":"precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texcoord;\n#define LEN_INCLUDED_RANGES 6\n#define LEN_NODATA_VALUES 6\nuniform highp float u_includedRanges[6];\nuniform highp float u_noDataValues[6];\nfloat maskFactor(float bandValue, float fromValue, float to) {\nfloat factor = 1.0;\nfor (int i = 0; i < LEN_NODATA_VALUES; i++) {\nfactor *= float(u_noDataValues[i] != bandValue);\n}\nfactor *= step(fromValue, bandValue) * step(bandValue, to);\nreturn factor;\n}\nvoid main() {\nvec4 pv = texture2D(u_image, v_texcoord);\nfloat redFactor = maskFactor(pv.r, u_includedRanges[0], u_includedRanges[1]);\n#ifdef MULTI_BAND\nfloat greenFactor = maskFactor(pv.g, u_includedRanges[2], u_includedRanges[3]);\nfloat blueFactor = maskFactor(pv.b, u_includedRanges[4], u_includedRanges[5]);\nfloat maskFactor = redFactor * greenFactor * blueFactor;\ngl_FragColor = pv * maskFactor;\n#else\ngl_FragColor = pv * redFactor;\n#endif\n}"},ndvi:{"ndvi.frag":"precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texcoord;\nuniform mediump mat3 u_bandIndexMat3;\n#include <raster/common/inverse.glsl>\nvoid main() {\nvec4 pv = texture2D(u_image, v_texcoord);\nvec3 pv2 = u_bandIndexMat3 * pv.rgb;\nfloat nir = pv2.r;\nfloat red = pv2.g;\nfloat index = (nir - red) * invertValue(nir + red);\n#ifdef SCALED\nindex = floor((index + 1.0) * 100.0 + 0.5);\n#endif\ngl_FragColor = vec4(index, index, index, pv.a);\n}"},remap:{"remap.frag":"precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texcoord;\n#define LEN_REMAP_RANGES 18\n#define LEN_NODATA_RANGES 12\nuniform highp float u_rangeMaps[18];\nuniform highp float u_noDataRanges[12];\nuniform highp float u_unmatchMask;\nuniform vec2 u_clampRange;\nvoid main() {\nvec4 pv = texture2D(u_image, v_texcoord);\nfloat factor = 1.0;\nfloat bandValue = pv.r;\nfor (int i = 0; i < LEN_NODATA_RANGES; i+=2) {\nfloat inside = 1.0 - step(u_noDataRanges[i], bandValue) * step(bandValue, u_noDataRanges[i+1]);\nfactor *= inside;\n}\nfloat mapValue = 0.0;\nfloat includeMask = 0.0;\nfor (int i = 0; i < LEN_REMAP_RANGES; i+=3) {\nfloat stepMask = step(u_rangeMaps[i], bandValue) * step(bandValue, u_rangeMaps[i+1]);\nincludeMask = (1.0 - stepMask) * includeMask + stepMask;\nmapValue = (1.0 - stepMask) * mapValue + stepMask * u_rangeMaps[i+2];\n}\nbandValue = factor * (mapValue + (1.0 - includeMask) * u_unmatchMask * pv.r);\nfloat bandMask = factor * max(u_unmatchMask, includeMask);\nbandValue = clamp(bandValue, u_clampRange.s, u_clampRange.t);\ngl_FragColor = vec4(bandValue, bandValue, bandValue, bandMask * pv.a);\n}"},slope:{"slope.frag":"precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texcoord;\nuniform vec2 u_cellSize;\nuniform float u_zFactor;\nuniform vec2 u_srcImageSize;\nuniform float u_pixelSizePower;\nuniform float u_pixelSizeFactor;\n#include <raster/common/mirror.glsl>\nvoid main() {\nvec2 axy = vec2(-1.0, -1.0);\nvec2 bxy = vec2(0.0, -1.0);\nvec2 cxy = vec2(1.0, -1.0);\nvec2 dxy = vec2(-1.0, 0.0);\nvec2 fxy = vec2(1.0, 0.0);\nvec2 gxy = vec2(-1.0, 1.0);\nvec2 hxy = vec2(0.0, 1.0);\nvec2 ixy = vec2(1.0, 1.0);\nvec2 onePixel = 1.0 / u_srcImageSize;\nvec4 va = texture2D(u_image, mirror(v_texcoord + onePixel * axy));\nvec4 vb = texture2D(u_image, mirror(v_texcoord + onePixel * bxy));\nvec4 vc = texture2D(u_image, mirror(v_texcoord + onePixel * cxy));\nvec4 vd = texture2D(u_image, mirror(v_texcoord + onePixel * dxy));\nvec4 ve = texture2D(u_image, mirror(v_texcoord + onePixel * vec2(0, 0)));\nvec4 vf = texture2D(u_image, mirror(v_texcoord + onePixel * fxy));\nvec4 vg = texture2D(u_image, mirror(v_texcoord + onePixel * gxy));\nvec4 vh = texture2D(u_image, mirror(v_texcoord + onePixel * hxy));\nvec4 vi = texture2D(u_image, mirror(v_texcoord + onePixel * ixy));\nfloat xf = (u_zFactor + pow(u_cellSize[0], u_pixelSizePower) * u_pixelSizeFactor) / (8.0 * u_cellSize[0]);\nfloat yf = (u_zFactor + pow(u_cellSize[1], u_pixelSizePower) * u_pixelSizeFactor) / (8.0 * u_cellSize[1]);\nfloat dzx = (vc + 2.0 * vf + vi - va - 2.0 * vd - vg).r * xf;\nfloat dzy = -(vg + 2.0 * vh + vi - va - 2.0 * vb - vc).r * yf;\nfloat alpha = va.a * vb.a * vc.a * vd.a * ve.a * vf.a * vg.a * vh.a * vi.a;\nfloat rise2run = sqrt(dzx * dzx + dzy * dzy);\n#ifdef PERCENT_RISE\nfloat percentRise = rise2run * 100.0;\ngl_FragColor = vec4(percentRise, percentRise, percentRise, alpha);\n#else\nfloat degree = atan(rise2run) * 57.2957795;\ngl_FragColor = vec4(degree, degree, degree, alpha);\n#endif\n}"},stretch:{"stretch.frag":"precision mediump float;\nuniform sampler2D u_image;\nvarying highp vec2 v_texcoord;\nuniform float u_minCutOff[3];\nuniform float u_maxCutOff[3];\nuniform float u_minOutput;\nuniform float u_maxOutput;\nuniform float u_factor[3];\nuniform float u_gamma[3];\nuniform float u_gammaCorrection[3];\nfloat stretchOneValue(float val, float minCutOff, float maxCutOff, float minOutput, float maxOutput, float factor, float gamma, float gammaCorrection) {\nval = clamp(val, minCutOff, maxCutOff);\nfloat stretchedVal;\n#ifdef USE_GAMMA\nfloat tempf = 1.0;\nfloat outRange = maxOutput - minOutput;\nfloat relativeVal = (val - minCutOff) / (maxCutOff - minCutOff);\ntempf -= step(1.0, gamma) * sign(gamma - 1.0) * pow(1.0 / outRange, relativeVal * gammaCorrection);\nstretchedVal = tempf * outRange * pow(relativeVal, 1.0 / gamma) + minOutput;\nstretchedVal = clamp(stretchedVal, minOutput, maxOutput);\n#else\nstretchedVal = minOutput + (val - minCutOff) * factor;\n#endif\n#ifdef ROUND_OUTPUT\nstretchedVal = floor(stretchedVal + 0.5);\n#endif\nreturn stretchedVal;\n}\nvoid main() {\nvec4 currentPixel = texture2D(u_image, v_texcoord);\nfloat redVal = stretchOneValue(currentPixel.r, u_minCutOff[0], u_maxCutOff[0], u_minOutput, u_maxOutput, u_factor[0], u_gamma[0], u_gammaCorrection[0]);\n#ifdef MULTI_BAND\nfloat greenVal = stretchOneValue(currentPixel.g, u_minCutOff[1], u_maxCutOff[1], u_minOutput, u_maxOutput, u_factor[1], u_gamma[1], u_gammaCorrection[1]);\nfloat blueVal = stretchOneValue(currentPixel.b, u_minCutOff[2], u_maxCutOff[2], u_minOutput, u_maxOutput, u_factor[2], u_gamma[2], u_gammaCorrection[2]);\ngl_FragColor = vec4(redVal, greenVal, blueVal, currentPixel.a);\n#else\ngl_FragColor = vec4(redVal, redVal, redVal, currentPixel.a);\n#endif\n}"},vs:{"vs.vert":"precision mediump float;\nattribute vec2 a_pos;\nuniform highp mat3 u_dvsMat3;\nuniform highp vec2 u_coordScale;\nvarying highp vec2 v_texcoord;\nvoid main()\n{\nv_texcoord = a_pos;\ngl_Position = vec4(u_dvsMat3 * vec3(a_pos * u_coordScale, 1.0), 1.0);\n}"}},scalar:{"scalar.frag":"precision mediump float;\nuniform lowp float u_opacity;\nvarying vec2 v_pos;\nconst vec4 outlineColor = vec4(0.2, 0.2, 0.2, 1.0);\nconst float outlineSize = 0.02;\nconst float innerRadius = 0.25;\nconst float outerRadius = 0.42;\nconst float innerSquareLength = 0.15;\nvoid main() {\nmediump float dist = length(v_pos);\nmediump float fillalpha1 = smoothstep(outerRadius, outerRadius + outlineSize, dist);\nfillalpha1 *= (1.0-smoothstep(outerRadius + outlineSize, outerRadius + 0.1 + outlineSize, dist));\n#ifdef INNER_CIRCLE\nmediump float fillalpha2 = smoothstep(innerRadius, innerRadius + outlineSize, dist);\nfillalpha2 *= (1.0-smoothstep(innerRadius + outlineSize, innerRadius + 0.1 + outlineSize, dist));\n#else\nmediump float fillalpha2 = (abs(v_pos.x) < innerSquareLength ? 1.0 : 0.0) * (abs(v_pos.y) < innerSquareLength ? 1.0 : 0.0);\n#endif\ngl_FragColor = (fillalpha2 + fillalpha1) * outlineColor * u_opacity;\n}","scalar.vert":"precision mediump float;\nattribute vec2 a_pos;\nattribute vec2 a_offset;\nattribute vec2 a_vv;\nuniform highp mat3 u_dvsMat3;\nuniform highp vec2 u_coordScale;\nuniform vec2 u_symbolSize;\nuniform vec2 u_symbolPercentRange;\nuniform vec2 u_dataRange;\nvarying vec2 v_pos;\nvoid main()\n{\n#ifdef DATA_RANGE\nfloat valuePercentage = clamp((a_vv.y - u_dataRange.x) / (u_dataRange.y - u_dataRange.x), 0.0, 1.0);\nfloat sizeRatio = u_symbolPercentRange.x + valuePercentage * (u_symbolPercentRange.y - u_symbolPercentRange.x);\nfloat sizePercentage = clamp(sizeRatio, u_symbolPercentRange.x, u_symbolPercentRange.y);\n#else\nfloat sizePercentage = (u_symbolPercentRange.x + u_symbolPercentRange.y) / 2.0;\n#endif\nvec2 size = u_symbolSize * sizePercentage;\nvec2 pos = a_pos + a_offset * size;\nv_pos = a_offset;\ngl_Position = vec4(u_dvsMat3 * vec3(pos * u_coordScale, 1.0), 1.0);\n}"},stretch:{"stretch.frag":"precision mediump float;\nvarying highp vec2 v_texcoord;\n#include <raster/common/common.glsl>\nuniform float u_minCutOff[3];\nuniform float u_maxCutOff[3];\nuniform float u_minOutput;\nuniform float u_maxOutput;\nuniform float u_factor[3];\nuniform bool u_useGamma;\nuniform float u_gamma[3];\nuniform float u_gammaCorrection[3];\n#include <raster/lut/colorize.glsl>\nfloat stretchOneValue(float val, float minCutOff, float maxCutOff, float minOutput, float maxOutput, float factor, bool useGamma, float gamma, float gammaCorrection) {\nif (val >= maxCutOff) {\nreturn maxOutput;\n} else if (val <= minCutOff) {\nreturn minOutput;\n}\nfloat stretchedVal;\nif (useGamma) {\nfloat tempf = 1.0;\nfloat outRange = maxOutput - minOutput;\nfloat relativeVal = (val - minCutOff) / (maxCutOff - minCutOff);\nif (gamma > 1.0) {\ntempf -= pow(1.0 / outRange, relativeVal * gammaCorrection);\n}\nstretchedVal = (tempf * outRange * pow(relativeVal, 1.0 / gamma) + minOutput) / 255.0;\n} else {\nstretchedVal = minOutput + (val - minCutOff) * factor;\n}\nreturn stretchedVal;\n}\nvoid main() {\nvec2 pixelLocation = getPixelLocation(v_texcoord);\nif (isOutside(pixelLocation)) {\ngl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\nreturn;\n}\nvec4 currentPixel = getPixel(pixelLocation);\n#ifdef NOOP\ngl_FragColor = vec4(currentPixel.rgb, 1.0) * currentPixel.a * u_opacity;\nreturn;\n#endif\nif (u_bandCount == 1) {\nfloat grayVal = stretchOneValue(currentPixel.r, u_minCutOff[0], u_maxCutOff[0], u_minOutput, u_maxOutput, u_factor[0], u_useGamma, u_gamma[0], u_gammaCorrection[0]);\n#ifdef APPLY_COLORMAP\nvec4 result = colorize(vec4(grayVal, grayVal, grayVal, 1.0), u_useGamma ? 255.0 : 1.0);\ngl_FragColor = vec4(result.xyz, 1.0) * result.a * currentPixel.a * u_opacity;\n#else\ngl_FragColor = vec4(grayVal, grayVal, grayVal, 1.0) * currentPixel.a * u_opacity;\n#endif\n} else {\nfloat redVal = stretchOneValue(currentPixel.r, u_minCutOff[0], u_maxCutOff[0], u_minOutput, u_maxOutput, u_factor[0], u_useGamma, u_gamma[0], u_gammaCorrection[0]);\nfloat greenVal = stretchOneValue(currentPixel.g, u_minCutOff[1], u_maxCutOff[1], u_minOutput, u_maxOutput, u_factor[1], u_useGamma, u_gamma[1], u_gammaCorrection[1]);\nfloat blueVal = stretchOneValue(currentPixel.b, u_minCutOff[2], u_maxCutOff[2], u_minOutput, u_maxOutput, u_factor[2], u_useGamma, u_gamma[2], u_gammaCorrection[2]);\ngl_FragColor = vec4(redVal, greenVal, blueVal, 1.0) * currentPixel.a * u_opacity;\n}\n}"}},stencil:{"stencil.frag":"void main() {\ngl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n}","stencil.vert":"attribute vec2 a_pos;\nuniform mat3 u_worldExtent;\nvoid main() {\ngl_Position = vec4(u_worldExtent * vec3(a_pos, 1.0), 1.0);\n}"},tileInfo:{"tileInfo.frag":"uniform mediump sampler2D u_texture;\nvarying mediump vec2 v_tex;\nvoid main(void) {\nlowp vec4 color = texture2D(u_texture, v_tex);\ngl_FragColor = 0.75 * color;\n}","tileInfo.vert":"attribute vec2 a_pos;\nuniform highp mat3 u_dvsMat3;\nuniform mediump float u_depth;\nuniform mediump vec2 u_coord_ratio;\nuniform mediump vec2 u_delta;\nuniform mediump vec2 u_dimensions;\nvarying mediump vec2 v_tex;\nvoid main() {\nmediump vec2 offset = u_coord_ratio * vec2(u_delta + a_pos * u_dimensions);\nvec3 v_pos = u_dvsMat3 * vec3(offset, 1.0);\ngl_Position = vec4(v_pos.xy, 0.0, 1.0);\nv_tex = a_pos;\n}"},util:{"atan2.glsl":"float atan2(in float y, in float x) {\nfloat t0, t1, t2, t3, t4;\nt3 = abs(x);\nt1 = abs(y);\nt0 = max(t3, t1);\nt1 = min(t3, t1);\nt3 = 1.0 / t0;\nt3 = t1 * t3;\nt4 = t3 * t3;\nt0 =         - 0.013480470;\nt0 = t0 * t4 + 0.057477314;\nt0 = t0 * t4 - 0.121239071;\nt0 = t0 * t4 + 0.195635925;\nt0 = t0 * t4 - 0.332994597;\nt0 = t0 * t4 + 0.999995630;\nt3 = t0 * t3;\nt3 = (abs(y) > abs(x)) ? 1.570796327 - t3 : t3;\nt3 = x < 0.0 ?  3.141592654 - t3 : t3;\nt3 = y < 0.0 ? -t3 : t3;\nreturn t3;\n}","encoding.glsl":"const vec4 rgba2float_factors = vec4(\n255.0 / (256.0),\n255.0 / (256.0 * 256.0),\n255.0 / (256.0 * 256.0 * 256.0),\n255.0 / (256.0 * 256.0 * 256.0 * 256.0)\n);\nfloat rgba2float(vec4 rgba) {\nreturn dot(rgba, rgba2float_factors);\n}"}},r=new(i(1695).a)((function(e){let t=n
return e.split("/").forEach(e=>{t&&(t=t[e])}),t}))
function s(e){return r.resolveIncludes(e)}},1325:function(e,t,i){"use strict"
i.d(t,"a",(function(){return n}))
class n{constructor(){this.setIdentity()}getAngle(){return(null==this.rz||0===this.rz&&1!==this.rzCos&&0!==this.rzSin)&&(this.rz=Math.atan2(this.rzSin,this.rzCos)),this.rz}setIdentity(){this.tx=0,this.ty=0,this.tz=0,this.s=1,this.rx=0,this.ry=0,this.rz=0,this.rzCos=1,this.rzSin=0}setTranslate(e,t){this.tx=e,this.ty=t}setTranslateZ(e){this.tz=e}setRotateCS(e,t){this.rz=void 0,this.rzCos=e,this.rzSin=t}setRotate(e){this.rz=e,this.rzCos=void 0,this.rzSin=void 0}setRotateY(e){this.ry=e}setScale(e){this.s=e}setMeasure(e){this.m=e}}},1326:function(e,t,i){"use strict"
i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return a})),i(234)
var n=i(1468)
let r
class s{constructor(e){this._geometry=e}next(){const e=this._geometry
return this._geometry=null,e}}function o(e,t){let i,s
r||(r=new n.d(0,0,0,1)),r.reset(n.a.Polygon),r.setPixelMargin(t+1),r.setExtent(512)
for(const t of e.rings)if(t&&!(t.length<3)){i=t[0][0],s=-t[0][1],r.moveTo(i,s)
for(let e=1;e<t.length;e++)i=t[e][0],s=-t[e][1],r.lineTo(i,s)
r.close()}const o=r.result(!1)
if(o){const e=[]
for(const t of o){const i=[]
e.push(i)
for(const e of t)i.push([e.x,-e.y])}return{rings:e}}return{rings:[]}}function a(e,t){let i,s
r||(r=new n.d(0,0,0,1)),r.reset(n.a.LineString),r.setPixelMargin(t+1),r.setExtent(512)
for(const t of e.paths)if(t&&!(t.length<2)){i=t[0][0],s=-t[0][1],r.moveTo(i,s)
for(let e=1;e<t.length;e++)i=t[e][0],s=-t[e][1],r.lineTo(i,s)}const o=r.result(!1)
if(o){const e=[]
for(const t of o){const i=[]
e.push(i)
for(const e of t)i.push([e.x,-e.y])}return{paths:e}}return{paths:[]}}},1327:function(e,t,i){"use strict"
i.d(t,"a",(function(){return s}))
var n=i(23),r=i(1582)
class s{constructor(){this._materialKey=null}bindFeature(e,t,i){}write(e,t,i,s){var o
if(Object(n.k)(this._effects)||0===(null==(o=this._effects)?void 0:o.length))return this._write(e,t,s)
const a=r.a.executeEffects(this._effects,t.readLegacyGeometryForDisplay(),e.tileKey,s.geometryEngine)
let l=r.a.next(a)
for(;l;)this._write(e,t,s,l),l=r.a.next(a)}_write(e,t,i,n){}}},1340:function(e,t,i){"use strict"
i.r(t),i.d(t,"createSymbolSchema",(function(){return a}))
var n=i(1003),r=i(1023)
function s(e){var t
return"line-marker"===e.type?{type:"line-marker",color:null==(t=e.color)?void 0:t.toJSON(),placement:e.placement,style:e.style}:e.constructor.fromJSON(e.toJSON()).toJSON()}function o(e){return Object(r.j)(e)}function a(e,t,i=!1){if(!e)return null
switch(e.type){case"simple-fill":case"picture-fill":return function(e,t,i){const a=Object(r.g)(n.d.FILL,t),l=i?o(a):a,c=e.clone(),u=c.outline,h=Object(r.k)(t.symbologyType)
h||(c.outline=null)
const d={materialKey:l,hash:c.hash(),...s(c)}
if(h)return d
const f=[]
if(f.push(d),u){const e=Object(r.g)(n.d.LINE,{...t,isOutline:!0}),a={materialKey:i?o(e):e,hash:u.hash(),...s(u)}
f.push(a)}return{type:"composite-symbol",layers:f,hash:f.reduce((e,t)=>t.hash+e,"")}}(e,t,i)
case"simple-marker":case"picture-marker":return function(e,t,i){const a=Object(r.g)(n.d.MARKER,t),l=i?o(a):a,c=s(e)
return{materialKey:l,hash:e.hash(),...c,angle:e.angle,maxVVSize:t.maxVVSize}}(e,t,i)
case"simple-line":return function(e,t,i){const a=Object(r.k)(t.symbologyType)?n.e.DEFAULT:t.symbologyType,l=Object(r.g)(n.d.LINE,{...t,symbologyType:a}),c=i?o(l):l,u=e.clone(),h=u.marker
u.marker=null
const d=[]
if(d.push({materialKey:c,hash:u.hash(),...s(u)}),h){var f
const e=Object(r.g)(n.d.MARKER,t),a=i?o(e):e
h.color=null!=(f=h.color)?f:u.color,d.push({materialKey:a,hash:h.hash(),lineWidth:u.width,...s(h)})}return{type:"composite-symbol",layers:d,hash:d.reduce((e,t)=>t.hash+e,"")}}(e,t,i)
case"text":return function(e,t,i){const a=Object(r.g)(n.d.TEXT,t),l=i?o(a):a,c=s(e)
return{materialKey:l,hash:e.hash(),...c,angle:e.angle,maxVVSize:t.maxVVSize}}(e,t,i)
case"label":return function(e,t,i){const s=e.toJSON(),a=Object(r.g)(n.d.LABEL,{...t,placement:s.labelPlacement})
return{materialKey:i?o(a):a,hash:e.hash(),...s,labelPlacement:s.labelPlacement}}(e,t,i)
case"cim":return{type:"cim",rendererKey:t.vvFlags,data:e.data,maxVVSize:t.maxVVSize}
case"CIMSymbolReference":return{type:"cim",rendererKey:t.vvFlags,data:e,maxVVSize:t.maxVVSize}
case"web-style":return{...s(e),type:"web-style",hash:e.hash(),rendererKey:t.vvFlags,maxVVSize:t.maxVVSize}
default:throw new Error("symbol not supported "+e.type)}}},1350:function(e,t,i){"use strict"
i.d(t,"a",(function(){return A})),i.d(t,"b",(function(){return L})),i.d(t,"c",(function(){return j})),i.d(t,"d",(function(){return U})),i.d(t,"e",(function(){return w}))
var n=i(990),r=i(1304),s=i(234),o=i(233),a=i(23),l=i(448),c=i(980),u=i(996),h=i(1079),d=i(1010),f=i(1325),_=i(1589),m=i(1030),p=i(1230),g=i(1391),y=i(1543),x=i(1e3),v=i(1373)
const b=Math.PI,O=b/2,S=96/72,T=Math.PI/180,C=o.a.getLogger("esri.symbols.cim.CIMSymbolHelper")
function w(e){if(!e||!e.type)return null
let t
switch(e.type){case"cim":return e.data
case"web-style":return e
case"simple-marker":{const i=A.fromSimpleMarker(e)
if(!i)return null
t=i
break}case"picture-marker":t=A.fromPictureMarker(e)
break
case"simple-line":t=A.fromSimpleLineSymbol(e)
break
case"simple-fill":t=A.fromSimpleFillSymbol(e)
break
case"picture-fill":t=A.fromPictureFillSymbol(e)
break
case"text":t=A.fromTextSymbol(e)}return{type:"CIMSymbolReference",symbol:t}}function M(e,t,i){switch(t.type){case"CIMSymbolReference":return M(e,t.symbol,i)
case"CIMPointSymbol":null==i&&(i={x:0,y:0}),e.drawSymbol(t,i)
break
case"CIMLineSymbol":null==i&&(i={paths:[[[0,0],[10,0]]]}),e.drawSymbol(t,i)
break
case"CIMPolygonSymbol":null==i&&(i={rings:[[[0,0],[0,10],[10,10],[10,0],[0,0]]]}),e.drawSymbol(t,i)
break
case"CIMTextSymbol":{const i={x:0,y:0}
e.drawSymbol(t,i)
break}case"CIMVectorMarker":{const i=new f.a
e.drawMarker(t,i)
break}}return e.envelope()}function I(e){if(!e)return 0
switch(e.type){case"CIMMarkerPlacementAlongLineSameSize":case"CIMMarkerPlacementAlongLineRandomSize":case"CIMMarkerPlacementAtExtremities":case"CIMMarkerPlacementAtMeasuredUnits":case"CIMMarkerPlacementAtRatioPositions":case"CIMMarkerPlacementOnLine":case"CIMMarkerPlacementOnVertices":return Math.abs(e.offset)
default:return 0}}function P(e){if(!e)return 0
switch(e.type){case"CIMGeometricEffectArrow":return Math.abs(.5*e.width)
case"CIMGeometricEffectBuffer":return Math.abs(e.size)
case"CIMGeometricEffectExtension":case"CIMGeometricEffectRadial":return Math.abs(e.length)
case"CIMGeometricEffectJog":return Math.abs(.5*e.length)
case"CIMGeometricEffectMove":return Math.max(Math.abs(Object(p.s)(e.offsetX)),Math.abs(Object(p.s)(e.offsetY)))
case"CIMGeometricEffectOffset":case"CIMGeometricEffectOffsetTangent":return Math.abs(e.offset)
case"CIMGeometricEffectRegularPolygon":return Math.abs(e.radius)
case"CIMGeometricEffectRotate":case"CIMGeometricEffectScale":default:return 0
case"CIMGeometricEffectTaperedPolygon":return.5*Math.max(Math.abs(e.fromWidth),Math.abs(e.toWidth))
case"CIMGeometricEffectWave":return Math.abs(e.amplitude)}}function E(e){if(!e)return 0
let t=0
for(const i of e)t+=P(i)
return t}class L{getSymbolInflateSize(e,t,i,n,r){return e||(e=[0,0,0,0]),t?this._getInflateSize(e,t,i,n,r):e}static safeSize(e){const t=Math.max(Math.abs(e[0]),Math.abs(e[2])),i=Math.max(Math.abs(e[1]),Math.abs(e[3]))
return Math.sqrt(t*t+i*i)}_vectorMarkerBounds(e,t,i,n){let r=!0
const s=Object(u.m)()
if(t&&t.markerGraphics)for(const o of t.markerGraphics){const t=[0,0,0,0]
o.geometry&&(Object(h.a)(s,o.geometry),t[0]=0,t[1]=0,t[2]=0,t[3]=0,this.getSymbolInflateSize(t,o.symbol,i,0,n),s[0]+=t[0],s[1]+=t[1],s[2]+=t[2],s[3]+=t[3],r?(e[0]=s[0],e[1]=s[1],e[2]=s[2],e[3]=s[3],r=!1):(e[0]=Math.min(e[0],s[0]),e[1]=Math.min(e[1],s[1]),e[2]=Math.max(e[2],s[2]),e[3]=Math.max(e[3],s[3])))}return e}_getInflateSize(e,t,i,n,r){if(function(e){return void 0!==e.symbolLayers}(t)){const s=this._getLayersInflateSize(e,t.symbolLayers,i,n,r),o=E(t.effects)
return o>0&&(s[0]-=o,s[1]-=o,s[2]+=o,s[3]+=o),s}return this._getTextInflatedSize(e,t,r)}_getLayersInflateSize(e,t,i,n,r){let s=!0
if(!t)return e
for(const o of t){if(!o)continue
let t=[0,0,0,0]
switch(o.type){case"CIMSolidFill":case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":break
case"CIMSolidStroke":case"CIMPictureStroke":case"CIMGradientStroke":{const e=o
let i=e.width
null!=i&&(e.capStyle===m.q.Square||e.joinStyle===m.s.Miter?i/=1.4142135623730951:i/=2,t[0]=-i,t[1]=-i,t[2]=i,t[3]=i)
break}case"CIMCharacterMarker":case"CIMVectorMarker":case"CIMPictureMarker":{const e=o
if("CIMVectorMarker"===o.type){const e=o
if(t=this._vectorMarkerBounds(t,e,i,r),e.frame){const i=(e.frame.xmin+e.frame.xmax)/2,n=(e.frame.ymin+e.frame.ymax)/2
if(t[0]-=i,t[1]-=n,t[2]-=i,t[3]-=n,null!=e.size){const i=e.size/(e.frame.ymax-e.frame.ymin)
t[0]*=i,t[1]*=i,t[2]*=i,t[3]*=i}}}else if("CIMPictureMarker"===o.type){const n=o,r=i.getResource(n.url)
let s=1
if(Object(a.l)(r)&&r.height&&(s=r.width/r.height),null!=e.size){const i=e.size/2,r=e.size*s*n.scaleX/2
t=[-r,-i,r,i]}}else if(null!=e.size){const i=e.size/2
t=[-i,-i,i,i]}if(e.anchorPoint){let i,n
"Absolute"===e.anchorPointUnits?(i=e.anchorPoint.x,n=e.anchorPoint.y):(i=e.anchorPoint.x*(t[2]-t[0]),n=e.anchorPoint.y*(t[3]-t[1])),t[0]-=i,t[1]-=n,t[2]-=i,t[3]-=n}let s=Object(p.s)(e.rotation)
if(e.rotateClockwise&&(s=-s),n&&(s-=n),s){const e=T*s,i=Math.cos(e),n=Math.sin(e),r=Object(u.m)([y.c,y.c,-y.c,-y.c])
Object(u.r)(r,[t[0]*i-t[1]*n,t[0]*n+t[1]*i]),Object(u.r)(r,[t[0]*i-t[3]*n,t[0]*n+t[3]*i]),Object(u.r)(r,[t[2]*i-t[1]*n,t[2]*n+t[1]*i]),Object(u.r)(r,[t[2]*i-t[3]*n,t[2]*n+t[3]*i]),t=r}let l=Object(p.s)(e.offsetX),c=Object(p.s)(e.offsetY)
if(n){const e=T*n,t=Math.cos(e),i=Math.sin(e),r=l*i+c*t
l=l*t-c*i,c=r}t[0]+=l,t[1]+=c,t[2]+=l,t[3]+=c
const h=I(e.markerPlacement)
h>0&&(t[0]-=h,t[1]-=h,t[2]+=h,t[3]+=h)
break}}const l=E(o.effects)
l>0&&(t[0]-=l,t[1]-=l,t[2]+=l,t[3]+=l),s?(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],s=!1):(e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.max(e[2],t[2]),e[3]=Math.max(e[3],t[3]))}return e}_getTextInflatedSize(e,t,i){var n,s,o
const a=null!=(n=t.height)?n:10
if(e[0]=-a/2,e[1]=-a/2,e[2]=a/2,e[3]=a/2,!i)return e
const l=i.get(t)
if(!l)return e
const{text:c,mosaicItem:u}=l
if(null==u||null==(s=u.glyphMosaicItems)||!s.length)return e
const{lineGapType:h,lineGap:d}=t,f=h?Object(_.f)(h,null!=d?d:0,a):0,m=Object(r.a)(c)[1],g=u.glyphMosaicItems,y="CIMBackgroundCallout"===(null==(o=t.callout)?void 0:o.type),b=Object(v.a)(g,m,{scale:a/x.v,angle:Object(p.s)(t.angle),xOffset:Object(p.s)(t.offsetX),yOffset:Object(p.s)(t.offsetY),hAlign:Object(_.e)(t.horizontalAlignment),vAlign:Object(_.g)(t.verticalAlignment),maxLineWidth:512,lineHeight:x.y*Math.max(.25,Math.min(f||1,4)),decoration:t.font.decoration||"none",isCIM:!0,hasBackground:y}).boundsT
return e[0]=b.x-b.halfWidth,e[1]=-b.y-b.halfHeight,e[2]=b.x+b.halfWidth,e[3]=-b.y+b.halfHeight,e}}class A{static getEnvelope(e,t,i){if(!e)return null
const n=new _.b(i)
if(Array.isArray(e)){let i
for(const r of e)i?i.union(M(n,r,t)):i=M(n,r,t)
return i}return M(n,e,t)}static getTextureAnchor(e,t){const i=this.getEnvelope(e,null,t)
if(!i)return[0,0,0]
const n=(i.x+.5*i.width)*S,r=(i.y+.5*i.height)*S,s=i.width*S+2,o=i.height*S+2
return[-n/s,-r/o,o]}static rasterize(e,t,i,n,r=!0){const s=i||this.getEnvelope(t,null,n)
if(!s)return[null,0,0,0,0]
const o=(s.x+.5*s.width)*S,a=(s.y+.5*s.height)*S
e.width=s.width*S,e.height=s.height*S,i||(e.width+=2,e.height+=2)
const l=e.getContext("2d"),c=_.d.createScale(S,-S)
c.translate(.5*e.width-o,.5*e.height+a)
const u=new _.a(l,n,c)
switch(t.type){case"CIMPointSymbol":{const e={type:"point",x:0,y:0}
u.drawSymbol(t,e)
break}case"CIMVectorMarker":{const e=new f.a
u.drawMarker(t,e)
break}}const h=l.getImageData(0,0,e.width,e.height),d=new Uint8Array(h.data)
if(r){let e
for(let t=0;t<d.length;t+=4)e=d[t+3]/255,d[t]=d[t]*e,d[t+1]=d[t+1]*e,d[t+2]=d[t+2]*e}return[d,e.width,e.height,-o/e.width,-a/e.height]}static fromTextSymbol(e){const{angle:t,color:i,font:n,haloColor:s,haloSize:o,horizontalAlignment:a,kerning:l,text:c,verticalAlignment:u,xoffset:h,yoffset:d,backgroundColor:f,borderLineColor:_,borderLineSize:g}=e
let y,x,v,b,O,S
n&&(y=n.family,x=n.style,v=n.weight,b=n.size,O=n.decoration)
let T=!1
return c&&(T=Object(r.a)(c)[1]),(f||g)&&(S={type:"CIMBackgroundCallout",margin:null,backgroundSymbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",color:k(f)},{type:"CIMSolidStroke",color:k(_),width:g}]},accentBarSymbol:null,gap:null,leaderLineSymbol:null,lineStyle:null}),{type:"CIMPointSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPointUnits:"Relative",dominantSizeAxis3D:"Y",size:10,billboardMode3D:"FaceNearPlane",frame:{xmin:-5,ymin:-5,xmax:5,ymax:5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{x:0,y:0},symbol:{type:"CIMTextSymbol",angle:t,blockProgression:m.d.BTT,depth3D:1,extrapolateBaselines:!0,fontEffects:m.g.Normal,fontEncoding:m.h.Unicode,fontFamilyName:y||"Arial",fontStyleName:N(x,v),fontType:m.i.Unspecified,haloSize:o,height:b,hinting:m.o.Default,horizontalAlignment:z(null!=a?a:"center"),kerning:l,letterWidth:100,ligatures:!0,lineGapType:"Multiple",offsetX:Object(p.s)(h),offsetY:Object(p.s)(d),strikethrough:"line-through"===O,underline:"underline"===O,symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:k(i)}]},haloSymbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:k(s)}]},shadowColor:[0,0,0,255],shadowOffsetX:1,shadowOffsetY:1,textCase:"Normal",textDirection:T?m.x.RTL:m.x.LTR,verticalAlignment:F(null!=u?u:"baseline"),verticalGlyphOrientation:m.z.Right,wordSpacing:100,billboardMode3D:m.c.FaceNearPlane,callout:S},textString:c}],scaleSymbolsProportionally:!0,respectFrame:!0}],scaleX:1,angleAlignment:"Display"}}static fromPictureFillSymbol(e){var t
const{height:i,outline:n,width:r,xoffset:s,xscale:o,yoffset:a,yscale:l}=e,c=[],u={type:"CIMPolygonSymbol",symbolLayers:c}
if(n){const{cap:e,join:t,miterLimit:i,width:r}=n
c.push({type:"CIMSolidStroke",color:k(n.color),capStyle:R(e),joinStyle:D(t),miterLimit:i,width:r})}let h=e.url
"esriPFS"===e.type&&e.imageData&&(h=e.imageData)
const d="angle"in e&&null!=(t=e.angle)?t:0,f=(null!=r?r:0)*(o||1),_=(null!=i?i:0)*(l||1)
return c.push({type:"CIMPictureFill",invertBackfaceTexture:!1,scaleX:1,textureFilter:m.y.Picture,tintColor:null,url:h,height:_,width:f,offsetX:Object(p.s)(s),offsetY:Object(p.s)(a),rotation:Object(p.s)(-d),colorSubstitutions:null}),u}static fromSimpleFillSymbol(e){const{color:t,style:i,outline:n}=e,r=[],o={type:"CIMPolygonSymbol",symbolLayers:r}
let a=null
if(n){const{cap:e,join:t,style:i}=n
"solid"!==i&&"none"!==i&&"esriSLSSolid"!==i&&"esriSLSNull"!==i&&(a=[{type:"CIMGeometricEffectDashes",dashTemplate:U(i,e),lineDashEnding:"NoConstraint",scaleDash:!0,offsetAlongLine:null}]),r.push({type:"CIMSolidStroke",color:k(n.color),capStyle:R(e),joinStyle:D(t),miterLimit:n.miterLimit,width:n.width,effects:a})}if(i&&"solid"!==i&&"none"!==i&&"esriSFSSolid"!==i&&"esriSFSNull"!==i){const e={type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",color:k(t),capStyle:m.q.Butt,joinStyle:m.s.Miter,width:.75}]}
let n=0
const o=Object(c.i)(H(i)?8:10)
switch(i){case"vertical":case"esriSFSVertical":n=90
break
case"forward-diagonal":case"esriSFSForwardDiagonal":case"diagonal-cross":case"esriSFSDiagonalCross":n=-45
break
case"backward-diagonal":case"esriSFSBackwardDiagonal":n=45
break
case"cross":case"esriSFSCross":n=0}r.push({type:"CIMHatchFill",lineSymbol:e,offsetX:0,offsetY:0,rotation:n,separation:o}),"cross"===i||"esriSFSCross"===i?r.push({type:"CIMHatchFill",lineSymbol:Object(s.a)(e),offsetX:0,offsetY:0,rotation:90,separation:o}):"diagonal-cross"!==i&&"esriSFSDiagonalCross"!==i||r.push({type:"CIMHatchFill",lineSymbol:Object(s.a)(e),offsetX:0,offsetY:0,rotation:45,separation:o})}else!i||"solid"!==i&&"esriSFSSolid"!==i||r.push({type:"CIMSolidFill",enable:!0,color:k(t)})
return o}static fromSimpleLineSymbol(e){const{cap:t,color:i,join:n,marker:r,miterLimit:s,style:o,width:a}=e
let l=null
"solid"!==o&&"none"!==o&&"esriSLSSolid"!==o&&"esriSLSNull"!==o&&(l=[{type:"CIMGeometricEffectDashes",dashTemplate:U(o,t),lineDashEnding:"NoConstraint",scaleDash:!0,offsetAlongLine:null}])
const c=[]
if(r){let e
switch(r.placement){case"begin-end":e=m.f.Both
break
case"begin":e=m.f.JustBegin
break
case"end":e=m.f.JustEnd
break
default:e=m.f.None}const t=A.fromSimpleMarker(r,a,i).symbolLayers[0]
t.markerPlacement={type:"CIMMarkerPlacementAtExtremities",angleToLine:!0,offset:0,extremityPlacement:e,offsetAlongLine:0},c.push(t)}return"none"!==o&&"esriSLSNull"!==o&&c.push({type:"CIMSolidStroke",color:k(i),capStyle:R(t),joinStyle:D(n),miterLimit:s,width:a,effects:l}),{type:"CIMLineSymbol",symbolLayers:c}}static fromPictureMarker(e){const{angle:t,height:i,width:n,xoffset:r,yoffset:s}=e
let o=e.url
return"esriPMS"===e.type&&e.imageData&&(o=e.imageData),{type:"CIMPointSymbol",symbolLayers:[{type:"CIMPictureMarker",invertBackfaceTexture:!1,scaleX:1,textureFilter:m.y.Picture,tintColor:null,url:o,size:i,width:n,offsetX:Object(p.s)(r),offsetY:Object(p.s)(s),rotation:Object(p.s)(-t)}]}}static fromSimpleMarker(e,t,i){var n
const{style:r}=e,s=null!=(n=e.color)?n:i
if("path"===r){const t=[]
if("outline"in e&&e.outline){const i=e.outline
t.push({type:"CIMSolidStroke",enable:!0,width:Object(c.h)(Math.round(Object(c.i)(i.width))),color:k(i.color)})}t.push({type:"CIMSolidFill",enable:!0,color:k(s),path:e.path})
const[i,n]=G("square")
return{type:"CIMPointSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,rotation:Object(p.s)(-e.angle),size:Object(p.s)(e.size||6),offsetX:Object(p.s)(e.xoffset),offsetY:Object(p.s)(e.yoffset),frame:i,markerGraphics:[{type:"CIMMarkerGraphic",geometry:n,symbol:{type:"CIMPolygonSymbol",symbolLayers:t}}]}]}}const[o,a]=G(r)
let l
if(a&&o){const i=[]
if("outline"in e&&e.outline){const t=e.outline
i.push({type:"CIMSolidStroke",enable:!0,width:null!=t.width&&t.width>.667?Object(c.h)(Math.round(Object(c.i)(t.width))):t.width,color:k(t.color)})}else!t||"line-marker"!==e.type||"cross"!==e.style&&"x"!==e.style||i.push({type:"CIMSolidStroke",enable:!0,width:t,color:k(s)})
i.push({type:"CIMSolidFill",enable:!0,color:k(s)})
const n={type:"CIMPolygonSymbol",symbolLayers:i}
l={type:"CIMPointSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,rotation:Object(p.s)(-e.angle),size:Object(p.s)(e.size||6*t),offsetX:Object(p.s)(e.xoffset),offsetY:Object(p.s)(e.yoffset),frame:o,markerGraphics:[{type:"CIMMarkerGraphic",geometry:a,symbol:n}]}]}}return l}static fromCIMHatchFill(e,t){var i,n
const r=t*(null!=(i=e.separation)?i:4),o=r/2,a=Object(s.a)(e.lineSymbol)
null==(n=a.symbolLayers)||n.forEach(e=>{var i
switch(e.type){case"CIMSolidStroke":null!=e.width&&(e.width*=t),null==(i=e.effects)||i.forEach(e=>{"CIMGeometricEffectDashes"===e.type&&(e.dashTemplate=e.dashTemplate.map(e=>e*t))})
break
case"CIMVectorMarker":{null!=e.size&&(e.size*=t)
const i=e.markerPlacement
null!=i&&"placementTemplate"in i&&(i.placementTemplate=i.placementTemplate.map(e=>e*t))
break}}})
let l=this._getLineSymbolPeriod(a)||4
for(;l<4;)l*=2
const c=l/2
return{type:"CIMVectorMarker",frame:{xmin:-c,xmax:c,ymin:-o,ymax:o},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{paths:[[[-c,0],[c,0]]]},symbol:a}],size:r}}static fetchResources(e,t,i){if(e&&t)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":{const n=e.symbolLayers
if(!n)return
for(const e of n)switch(Y(e,t,i),e.type){case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMCharacterMarker":case"CIMPictureMarker":"url"in e&&e.url&&i.push(t.fetchResource(e.url,null))
break
case"CIMVectorMarker":{const n=e.markerGraphics
if(!n)continue
for(const e of n)if(e){const n=e.symbol
n&&A.fetchResources(n,t,i)}}}}}}static _getLineSymbolPeriod(e){if(e){const t=this._getEffectsRepeat(e.effects)
if(t)return t
if(e.symbolLayers)for(const t of e.symbolLayers)if(t){const e=this._getEffectsRepeat(t.effects)
if(e)return e
switch(t.type){case"CIMCharacterMarker":case"CIMPictureMarker":case"CIMVectorMarker":case"CIMObjectMarker3D":case"CIMglTFMarker3D":{const e=this._getPlacementRepeat(t.markerPlacement)
if(e)return e}}}}return 0}static _getEffectsRepeat(e){if(e)for(const t of e)if(t)switch(t.type){case"CIMGeometricEffectDashes":{const e=t.dashTemplate
if(e&&e.length){let t=0
for(const i of e)t+=i
return 1&e.length&&(t*=2),t}break}case"CIMGeometricEffectWave":return t.period
default:C.error("unsupported geometric effect type "+t.type)}return 0}static _getPlacementRepeat(e){if(e)switch(e.type){case"CIMMarkerPlacementAlongLineSameSize":case"CIMMarkerPlacementAlongLineRandomSize":case"CIMMarkerPlacementAlongLineVariableSize":{const t=e.placementTemplate
if(t&&t.length){let e=0
for(const i of t)e+=+i
return 1&t.length&&(e*=2),e}break}}return 0}static fromCIMInsidePolygon(e){var t
const i=e.markerPlacement,n={...e}
n.markerPlacement=null,n.anchorPoint=null
const r=Math.abs(i.stepX),s=Math.abs(i.stepY),o=(null!=(t=i.randomness)?t:100)/100
let a,u,h,d
if("Random"===i.gridType){const e=Object(c.i)(x.F),t=Math.max(Math.floor(e/r),1),n=Math.max(Math.floor(e/s),1)
a=t*r/2,u=n*s/2,h=2*u
const f=new l.a(i.seed),_=o*r/1.5,m=o*s/1.5
d=[]
for(let e=0;e<t;e++)for(let t=0;t<n;t++){const i=e*r-a+_*(.5-f.getFloat()),n=t*s-u+m*(.5-f.getFloat())
d.push({x:i,y:n}),0===e&&d.push({x:i+2*a,y:n}),0===t&&d.push({x:i,y:n+2*u})}}else!0===i.shiftOddRows?(a=r/2,u=s,h=2*s,d=[{x:-a,y:0},{x:a,y:0},{x:0,y:u},{x:0,y:-u}]):(a=r/2,u=s/2,h=s,d=[{x:-r,y:0},{x:0,y:-s},{x:-r,y:-s},{x:0,y:0},{x:r,y:0},{x:0,y:s},{x:r,y:s},{x:-r,y:s},{x:r,y:-s}])
return{type:"CIMVectorMarker",frame:{xmin:-a,xmax:a,ymin:-u,ymax:u},markerGraphics:d.map(e=>({type:"CIMMarkerGraphic",geometry:e,symbol:{type:"CIMPointSymbol",symbolLayers:[n]}})),size:h}}static getSize(e){if(e)switch(e.type){case"CIMTextSymbol":return e.height
case"CIMPointSymbol":{let t=0
if(e.symbolLayers)for(const i of e.symbolLayers)if(i)switch(i.type){case"CIMCharacterMarker":case"CIMPictureMarker":case"CIMVectorMarker":case"CIMObjectMarker3D":case"CIMglTFMarker3D":{const e=i.size
null!=e&&e>t&&(t=e)
break}}return t}case"CIMLineSymbol":case"CIMPolygonSymbol":{let t=0
if(e.symbolLayers)for(const i of e.symbolLayers)if(i)switch(i.type){case"CIMSolidStroke":case"CIMPictureStroke":case"CIMGradientStroke":{const e=i.width
null!=e&&e>t&&(t=e)
break}case"CIMCharacterMarker":case"CIMPictureMarker":case"CIMVectorMarker":case"CIMObjectMarker3D":case"CIMglTFMarker3D":if(i.markerPlacement&&Object(p.w)(i.markerPlacement)){const e=i.size
null!=e&&e>t&&(t=e)}}return t}}}static getMarkerScaleRatio(e){if(e&&"CIMVectorMarker"===e.type&&!1!==e.scaleSymbolsProportionally&&e.frame&&null!=e.size){const t=e.frame.ymax-e.frame.ymin
return e.size/t}return 1}}class j{static findApplicableOverrides(e,t,i){if(e&&t){if(e.primitiveName){let n=!1
for(const t of i)if(t.primitiveName===e.primitiveName){n=!0
break}if(!n)for(const n of t)n.primitiveName===e.primitiveName&&i.push(n)}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(const n of e.effects)j.findApplicableOverrides(n,t,i)
if(e.symbolLayers)for(const n of e.symbolLayers)j.findApplicableOverrides(n,t,i)
break
case"CIMTextSymbol":break
case"CIMSolidStroke":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMSolidFill":case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMVectorMarker":case"CIMCharacterMarker":case"CIMPictureMarker":if(e.effects)for(const n of e.effects)j.findApplicableOverrides(n,t,i)
if(e.markerPlacement&&j.findApplicableOverrides(e.markerPlacement,t,i),"CIMVectorMarker"===e.type){if(e.markerGraphics)for(const n of e.markerGraphics)j.findApplicableOverrides(n,t,i),j.findApplicableOverrides(n.symbol,t,i)}else"CIMCharacterMarker"===e.type?j.findApplicableOverrides(e.symbol,t,i):"CIMHatchFill"===e.type?j.findApplicableOverrides(e.lineSymbol,t,i):"CIMPictureMarker"===e.type&&j.findApplicableOverrides(e.animatedSymbolProperties,t,i)}}}static findEffectOverrides(e,t,i){if(!t||!e)return
const n=e.length
for(let s=0;s<n;s++){var r
const n=null==(r=e[s])?void 0:r.primitiveName
if(n){let e=!1
for(const t of i)if(t.primitiveName===n){e=!0
break}if(!e)for(const e of t)e.primitiveName===n&&i.push(e)}}}static async resolveSymbolOverrides(e,t,i,n,r,o,a){if(!e||!e.symbol)return null
let{symbol:l,primitiveOverrides:c}=e
const u=!!c
if(!u&&!n)return l
l=Object(s.a)(l)
let h=!0
if(t||(t={attributes:{}},h=!1),u){if(h||(c=c.filter(e=>{var t
return!(null!=(t=e.valueExpressionInfo)&&t.expression.includes("$feature"))})),a||(c=c.filter(e=>{var t
return!(null!=(t=e.valueExpressionInfo)&&t.expression.includes("$view"))})),c.length>0){const e=Object(p.d)(t.attributes)
await j.evaluateOverrides(c,t,{spatialReference:i,fields:e,geometryType:r},o,a)}j.applyOverrides(l,c)}return n&&j.applyDictionaryTextOverrides(l,t,n),l}static async evaluateOverrides(e,t,i,n,r){if(!t)return
let s
for(const o of e){const e=o.valueExpressionInfo
if(e&&i&&i.geometryType){s||(s=[]),o.value=void 0
const a=Object(d.d)(e.expression,i.spatialReference,i.fields).then(e=>{o.value=Object(g.a)(e,t,{$view:r},i.geometryType,n)})
s.push(a)}}void 0!==s&&s.length>0&&await Promise.all(s)}static applyDictionaryTextOverrides(e,t,i,n="Normal"){if(e&&e.type)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":case"CIMTextSymbol":{const r=e.symbolLayers
if(!r)return
for(const s of r)s&&"CIMVectorMarker"===s.type&&j.applyDictionaryTextOverrides(s,t,i,"CIMTextSymbol"===e.type?e.textCase:n)}break
case"CIMVectorMarker":{const n=e.markerGraphics
if(!n)return
for(const e of n)e&&j.applyDictionaryTextOverrides(e,t,i)}break
case"CIMMarkerGraphic":{const r=e.textString
if(r&&r.includes("[")){const s=Object(p.b)(r,i)
e.textString=Object(p.c)(t,s,n)}}}}static applyOverrides(e,t,i,n){if(e.primitiveName)for(const r of t)if(r.primitiveName===e.primitiveName){const t=W(r.propertyName)
if(n&&n.push({cim:e,nocapPropertyName:t,value:e[t]}),r.expression&&(r.value=j.toValue(r.propertyName,r.expression)),i){let t=!1
for(const n of i)n.primitiveName===e.primitiveName&&(t=!0)
t||i.push(r)}Object(a.l)(r.value)&&(e[t]=r.value)}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(const r of e.effects)j.applyOverrides(r,t,i,n)
if(e.symbolLayers)for(const r of e.symbolLayers)j.applyOverrides(r,t,i,n)
break
case"CIMTextSymbol":break
case"CIMSolidStroke":case"CIMSolidFill":case"CIMVectorMarker":if(e.effects)for(const r of e.effects)j.applyOverrides(r,t,i,n)
if("CIMVectorMarker"===e.type&&e.markerGraphics)for(const r of e.markerGraphics)j.applyOverrides(r,t,i,n),j.applyOverrides(r.symbol,t,i,n)}}static restoreOverrides(e){for(const t of e)t.cim[t.nocapPropertyName]=t.value}static buildOverrideKey(e){let t=""
for(const i of e)void 0!==i.value&&(t+=`${i.primitiveName}${i.propertyName}${JSON.stringify(i.value)}`)
return t}static toValue(e,t){if("DashTemplate"===e)return t.split(" ").map(e=>Number(e))
if("Color"===e){const e=new n.a(t).toRgba()
return e[3]*=255,e}return t}}const R=e=>{if(!e)return m.q.Butt
switch(e){case"butt":return m.q.Butt
case"square":return m.q.Square
case"round":return m.q.Round}},D=e=>{if(!e)return m.s.Miter
switch(e){case"miter":return m.s.Miter
case"round":return m.s.Round
case"bevel":return m.s.Bevel}},z=e=>{if(Object(a.k)(e))return"Center"
switch(e){case"left":return"Left"
case"right":return"Right"
case"center":return"Center"}},F=e=>{if(Object(a.k)(e))return"Center"
switch(e){case"baseline":return"Baseline"
case"top":return"Top"
case"middle":return"Center"
case"bottom":return"Bottom"}},k=e=>{if(!e)return[0,0,0,0]
const{r:t,g:i,b:n,a:r}=e
return[t,i,n,255*r]},N=(e,t)=>{const i=V(t),n=B(e)
return i&&n?`${i}-${n}`:`${i}${n}`},V=e=>{if(!e)return""
switch(e.toLowerCase()){case"bold":case"bolder":return"bold"}return""},B=e=>{if(!e)return""
switch(e.toLowerCase()){case"italic":case"oblique":return"italic"}return""},U=(e,t)=>{const i="butt"===t
switch(e){case"dash":case"esriSLSDash":return i?[4,3]:[3,4]
case"dash-dot":case"esriSLSDashDot":return i?[4,3,1,3]:[3,4,0,4]
case"dot":case"esriSLSDot":return i?[1,3]:[0,4]
case"long-dash":case"esriSLSLongDash":return i?[8,3]:[7,4]
case"long-dash-dot":case"esriSLSLongDashDot":return i?[8,3,1,3]:[7,4,0,4]
case"long-dash-dot-dot":case"esriSLSDashDotDot":return i?[8,3,1,3,1,3]:[7,4,0,4,0,4]
case"short-dash":case"esriSLSShortDash":return i?[4,1]:[3,2]
case"short-dash-dot":case"esriSLSShortDashDot":return i?[4,1,1,1]:[3,2,0,2]
case"short-dash-dot-dot":case"esriSLSShortDashDotDot":return i?[4,1,1,1,1,1]:[3,2,0,2,0,2]
case"short-dot":case"esriSLSShortDot":return i?[1,1]:[0,2]
case"solid":case"esriSLSSolid":case"none":return C.error("Unexpected: style does not require rasterization"),[0,0]
default:return C.error(`Tried to rasterize SLS, but found an unexpected style: ${e}!`),[0,0]}},G=e=>{const t=50
let i,n
const r=e
if("circle"===r||"esriSMSCircle"===r){const e=.25
let r=Math.acos(1-e/t),s=Math.ceil(b/r/4)
0===s&&(s=1),r=O/s,s*=4
const o=[]
o.push([t,0])
for(let e=1;e<s;e++)o.push([t*Math.cos(e*r),-50*Math.sin(e*r)])
o.push([t,0]),i={rings:[o]},n={xmin:-50,ymin:-50,xmax:t,ymax:t}}else if("cross"===r||"esriSMSCross"===r){const e=0
i={rings:[[[e,t],[e,e],[t,e],[t,-e],[e,-e],[e,-50],[-e,-50],[-e,-e],[-50,-e],[-50,e],[-e,e],[-e,t],[e,t]]]},n={xmin:-50,ymin:-50,xmax:t,ymax:t}}else if("diamond"===r||"esriSMSDiamond"===r)i={rings:[[[-50,0],[0,t],[t,0],[0,-50],[-50,0]]]},n={xmin:-50,ymin:-50,xmax:t,ymax:t}
else if("square"===r||"esriSMSSquare"===r)i={rings:[[[-50,-50],[-50,t],[t,t],[t,-50],[-50,-50]]]},n={xmin:-50,ymin:-50,xmax:t,ymax:t}
else if("x"===r||"esriSMSX"===r){const e=0
i={rings:[[[0,e],[t-e,t],[t,t-e],[e,0],[t,e-t],[t-e,-50],[0,-e],[e-t,-50],[-50,e-t],[-e,0],[-50,t-e],[e-t,t],[0,e]]]},n={xmin:-50,ymin:-50,xmax:t,ymax:t}}else if("triangle"===r||"esriSMSTriangle"===r){const e=57.735026918962575,t=-e,r=2/3*100,s=r-100
i={rings:[[[t,s],[0,r],[e,s],[t,s]]]},n={xmin:t,ymin:s,xmax:e,ymax:r}}else"arrow"===r&&(i={rings:[[[-50,50],[50,0],[-50,-50],[-33,-20],[-33,20],[-50,50]]]},n={xmin:-50,ymin:-50,xmax:t,ymax:t})
return[n,i]},H=e=>"vertical"===e||"horizontal"===e||"cross"===e||"esriSFSCross"===e||"esriSFSVertical"===e||"esriSFSHorizontal"===e,W=e=>e?e.charAt(0).toLowerCase()+e.substr(1):e
function Y(e,t,i){e.effects&&!Object(a.l)(t.geometryEngine)&&(t.geometryEnginePromise?i.push(t.geometryEnginePromise):Object(p.y)(e.effects)&&(t.geometryEnginePromise=Object(p.t)(),i.push(t.geometryEnginePromise),t.geometryEnginePromise.then(e=>t.geometryEngine=e)))}},1356:function(e,t,i){"use strict"
i.d(t,"a",(function(){return x})),i.d(t,"b",(function(){return y}))
var n=i(1537),r=i(1003),s=i(1023)
const o={marker:r.d.MARKER,fill:r.d.FILL,line:r.d.LINE,text:r.d.TEXT}
class a{constructor(e,t,i,n){const a={minScale:null==t?void 0:t.minScale,maxScale:null==t?void 0:t.maxScale},l=function(e){return e.minScale||e.maxScale?e.minScale+"-"+e.maxScale:""}(a)
this.layers=e,this.data=t,this.hash=this._createHash()+l,this.rendererKey=i
const c={isOutline:!1,placement:null,symbologyType:r.e.DEFAULT,vvFlags:i}
for(const t of e){const e=o[t.type]
c.isOutline="line"===t.type&&t.isOutline,t.materialKey=Object(s.g)(e,c),t.maxVVSize=n,t.scaleInfo=a,t.templateHash+=l}}get type(){return"expanded-cim"}_createHash(){let e=""
for(const t of this.layers)e+=t.templateHash
return e}}var l=i(1436),c=i(446),u=i(23),h=i(973),d=i(374),f=i(1028),_=i(1054),m=i(1181)
async function p(e,t,i){if(!e.name)throw new c.a("style-symbol-reference-name-missing","Missing name in style symbol reference")
if(e.styleName&&"Esri2DPointSymbolsStyle"===e.styleName)return async function(e,t){const i=m.a.replace(/\{SymbolName\}/gi,e.name)
try{const e=await Object(m.d)(i,t)
return Object(m.c)(e.data)}catch(e){return Object(h.q)(e),null}}(e,i)
try{return async function(e,t,i,n){const r=e.data,s={portal:i&&Object(u.l)(i.portal)?i.portal:f.a.getDefault(),url:Object(d.Q)(e.baseUrl),origin:"portal-item"},o=r.items.find(e=>e.name===t)
if(!o)throw new c.a("symbolstyleutils:symbol-name-not-found",`The symbol name '${t}' could not be found`,{symbolName:t})
let a=Object(_.d)(Object(m.e)(o,"cimRef"),s)
Object(l.b)()&&(a=Object(l.a)(a))
try{const e=await Object(m.d)(a,n)
return Object(m.c)(e.data)}catch(e){return Object(h.q)(e),null}}(await Object(m.b)(e,t,i),e.name,t,i)}catch(e){return Object(h.q)(e),null}}const g=async(e,t,i)=>new a(await Object(n.b)(e.data,t,i),e.data,e.rendererKey,e.maxVVSize)
async function y(e,t,i,n){if(!e)return null
if("cim"===e.type)return g(e,t,i)
if("web-style"===e.type){var r
const s={type:"cim",data:null!=(r=await p(e,null,n))?r:void 0,rendererKey:e.rendererKey,maxVVSize:e.maxVVSize}
return g(s,t,i)}return e}function x(e){if(!e)return null
const{avoidSDFRasterization:t,type:i,cim:n,url:r,materialHash:s}=e,o={cim:n,type:i,mosaicHash:s,url:r,size:null,dashTemplate:null,path:null,text:null,fontName:null,animatedSymbolProperties:null,avoidSDFRasterization:t}
switch(i){case"marker":o.size=e.size,o.path=e.path,o.animatedSymbolProperties=e.animatedSymbolProperties
break
case"line":o.dashTemplate=e.dashTemplate
break
case"text":o.text=e.text,o.fontName=e.fontName}return o}},1360:function(e,t,i){"use strict"
function n(){return new Float32Array(3)}function r(e){const t=new Float32Array(3)
return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function s(e,t,i){const n=new Float32Array(3)
return n[0]=e,n[1]=t,n[2]=i,n}function o(e,t){return new Float32Array(e,t,3)}function a(){return n()}function l(){return s(1,1,1)}function c(){return s(1,0,0)}function u(){return s(0,1,0)}function h(){return s(0,0,1)}i.d(t,"a",(function(){return o})),i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return n})),i.d(t,"d",(function(){return s})),i.d(t,"e",(function(){return a}))
const d=a(),f=l(),_=c(),m=u(),p=h()
Object.freeze(Object.defineProperty({__proto__:null,ONES:f,UNIT_X:_,UNIT_Y:m,UNIT_Z:p,ZEROS:d,clone:r,create:n,createView:o,fromValues:s,ones:l,unitX:c,unitY:u,unitZ:h,zeros:a},Symbol.toStringTag,{value:"Module"}))},1362:function(e,t,i){"use strict"
i.d(t,"a",(function(){return a}))
var n=i(1068),r=i(984),s=i(1116),o=i(1202)
class a{constructor(e,t){this._rctx=e,this._vertexBuffer=n.a.createVertex(e,r.D.STATIC_DRAW,new Uint16Array(t)),this._vao=new s.a(e,new Map([["a_position",0]]),{geometry:[new o.a("a_position",2,r.k.SHORT,0,4)]},{geometry:this._vertexBuffer}),this._count=t.length/2}bind(){this._rctx.bindVAO(this._vao)}unbind(){this._rctx.bindVAO(null)}dispose(){this._vao.dispose(!1),this._vertexBuffer.dispose()}draw(){this._rctx.bindVAO(this._vao),this._rctx.drawArrays(r.r.TRIANGLE_STRIP,0,this._count)}}},1367:function(e,t,i){"use strict"
i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o}))
var n=i(984),r=i(1202)
const s={geometry:[new r.a("a_pos",2,n.k.BYTE,0,2)]},o={geometry:[new r.a("a_pos",2,n.k.BYTE,0,4),new r.a("a_tex",2,n.k.BYTE,2,4)]},a={geometry:[new r.a("a_pos",2,n.k.UNSIGNED_SHORT,0,4)]}},1370:function(e,t,i){"use strict"
i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return s}))
var n=i(991)
function r(e,t,i=0){const r=Object(n.f)(e,0,l)
for(let e=0;e<4;e++)t[i+e]=Math.floor(256*c(r*o[e]))}function s(e,t=0){let i=0
for(let n=0;n<4;n++)i+=e[t+n]*a[n]
return i}const o=[1,256,65536,16777216],a=[1/256,1/65536,1/16777216,1/4294967296],l=s(new Uint8ClampedArray([255,255,255,255]))
function c(e){return e-Math.floor(e)}},1371:function(e,t,i){"use strict"
i.d(t,"a",(function(){return r}))
var n=i(446)
function r(e,t){if(e&&"name"in e){const i=e
return t&&t.error(new n.a(i.name,i.message,i.details)),!1}return!0}},1373:function(e,t,i){"use strict"
i.d(t,"a",(function(){return v}))
var n=i(980),r=i(1215),s=i(1192),o=i(1013),a=i(1173),l=i(1287),c=i(1064),u=i(1527)
class h{constructor(e,t,i,n){this.center=Object(a.d)(e,t),this.centerT=Object(a.c)(),this.halfWidth=i/2,this.halfHeight=n/2,this.width=i,this.height=n}get x(){return this.center[0]}get y(){return this.center[1]}get blX(){return this.center[0]+this.halfWidth}get blY(){return this.center[1]+this.halfHeight}get trX(){return this.center[0]-this.halfWidth}get trY(){return this.center[1]-this.halfHeight}get xmin(){return this.x-this.halfWidth}get xmax(){return this.x+this.halfWidth}get ymin(){return this.y-this.halfHeight}get ymax(){return this.y+this.halfHeight}set x(e){this.center[0]=e}set y(e){this.center[1]=e}clone(){return new h(this.x,this.y,this.width,this.height)}serialize(e){return e.writeF32(this.center[0]),e.writeF32(this.center[1]),e.push(this.width),e.push(this.height),e}findCollisionDelta(e,t=4){const i=Math.abs(e.centerT[0]-this.centerT[0]),n=Math.abs(e.centerT[1]-this.centerT[1]),r=(e.halfWidth+this.halfWidth+t)/i,s=(e.halfHeight+this.halfHeight+t)/n,o=Math.min(r,s)
return Math.log2(o)}extend(e){const t=Math.min(this.xmin,e.xmin),i=Math.min(this.ymin,e.ymin),n=Math.max(this.xmax,e.xmax)-t,r=Math.max(this.ymax,e.ymax)-i,s=t+n/2,o=i+r/2
this.width=n,this.height=r,this.halfWidth=n/2,this.halfHeight=r/2,this.x=s,this.y=o}static deserialize(e){const t=e.readF32(),i=e.readF32(),n=e.readInt32(),r=e.readInt32()
return new h(t,i,n,r)}}const d=Math.PI/180
class f{constructor(e,t,i,n){this._rotationT=Object(s.a)(),this._xBounds=0,this._yBounds=0,this.minZoom=0,this.maxZoom=255,this._bounds=null
const r=i.rect,o=new Float32Array(8)
e*=n,t*=n
const a=i.code?r.width*n:i.metrics.width,l=i.code?r.height*n:i.metrics.height
this.width=a,this.height=l,o[0]=e,o[1]=t,o[2]=e+a,o[3]=t,o[4]=e,o[5]=t+l,o[6]=e+a,o[7]=t+l,this._data=o,this._setTextureCoords(r),this._scale=n,this._mosaic=i,this.x=e,this.y=t,this.maxOffset=Math.max(e+a,t+l)}get mosaic(){return this._mosaic}set angle(e){this._angle=e,Object(r.b)(this._rotationT,-e),this._setOffsets(this._data)}get angle(){return this._angle}get xTopLeft(){return this._data[0]}get yTopLeft(){return this._data[1]}get xBottomRight(){return this._data[6]}get yBottomRight(){return this._data[7]}get texcoords(){return this._texcoords}get textureBinding(){return this._mosaic.textureBinding}get offsets(){return this._offsets||this._setOffsets(this._data),this._offsets}get char(){return String.fromCharCode(this._mosaic.code)}get code(){return this._mosaic.code}get bounds(){if(!this._bounds){const{height:e,width:t}=this._mosaic.metrics,i=t*this._scale,n=Math.abs(e)*this._scale,o=new Float32Array(8)
o[0]=this.x,o[1]=this.y,o[2]=this.x+i,o[3]=this.y,o[4]=this.x,o[5]=this.y+n,o[6]=this.x+i,o[7]=this.y+n
const a=Object(r.g)(Object(s.a)(),this._rotationT,this._transform)
Object(s.b)(o,o,a)
let l=1/0,c=1/0,u=0,d=0
for(let e=0;e<4;e++){const t=o[2*e],i=o[2*e+1]
l=Math.min(l,t),c=Math.min(c,i),u=Math.max(u,t),d=Math.max(d,i)}const f=u-l,_=d-c,m=l+f/2,p=c+_/2
this._bounds=new h(m,p,f,_)}return this._bounds}setTransform(e){this._transform=e,this._offsets=null}_setOffsets(e){this._offsets||(this._offsets={upperLeft:0,upperRight:0,lowerLeft:0,lowerRight:0})
const t=this._offsets,i=new Float32Array(8),n=Object(r.g)(Object(s.a)(),this._rotationT,this._transform)
Object(s.b)(i,e,n),t.upperLeft=Object(c.a)(8*i[0],8*i[1]),t.upperRight=Object(c.a)(8*i[2],8*i[3]),t.lowerLeft=Object(c.a)(8*i[4],8*i[5]),t.lowerRight=Object(c.a)(8*i[6],8*i[7])}_setTextureCoords({x:e,y:t,width:i,height:n}){this._texcoords={upperLeft:Object(c.a)(e,t),upperRight:Object(c.a)(e+i,t),lowerLeft:Object(c.a)(e,t+n),lowerRight:Object(c.a)(e+i,t+n)}}}const _=(e,t)=>({code:0,page:0,sdf:!0,rect:new u.a(0,0,11,8),textureBinding:t,metrics:{advance:0,height:4,width:e,left:0,top:0}})
function m(e,t){return e.forEach(e=>Object(o.t)(e,e,t)),{upperLeft:Object(c.a)(8*e[0][0],8*e[0][1]),upperRight:Object(c.a)(8*e[1][0],8*e[1][1]),lowerLeft:Object(c.a)(8*e[2][0],8*e[2][1]),lowerRight:Object(c.a)(8*e[3][0],8*e[3][1])}}class p{constructor(e,t,i){this._rotation=0,this._decorate(e,t,i),this.glyphs=e,this.bounds=this._createBounds(e),this.isMultiline=t.length>1,this._hasRotation=0!==i.angle,this._transform=this._createGlyphTransform(this.bounds,i),this._borderLineSize=i.borderLineSize,(i.borderLineSize||i.hasBackground)&&([this.bounds,this.background]=this.shapeBackground(this._transform))
for(const t of e)t.setTransform(this._transform)}setRotation(e){if(0===e&&0===this._rotation)return
this._rotation=e
const t=this._transform,i=Object(r.b)(Object(s.a)(),e)
Object(r.g)(t,i,t)
for(const e of this.glyphs)e.setTransform(this._transform)}_decorate(e,t,i){if(!i.decoration||"none"===i.decoration||!e.length)return
const n=i.scale,r="underline"===i.decoration?30:20,s=e[0].textureBinding
for(const i of t){const t=i.startX*n,o=i.startY*n,a=(i.width+i.glyphWidthEnd)*n
e.push(new f(t,o+r*n,_(a,s),1))}}shapeBackground(e){const t=(1.5+Object(n.h)(this._borderLineSize||0))/2,i=this._borderLineSize?t:0,{xmin:r,ymin:s,xmax:o,ymax:a,x:l,y:c,width:u,height:d}=this.bounds,f=[r-8,s-8],_=[o+8,s-8],p=[r-8,a+8],g=[o+8,a+8],y=m([[f[0]-t,f[1]-t],[_[0]+t,_[1]-t],[f[0]+i,f[1]+i],[_[0]-i,_[1]+i]],e),x=m([[p[0]+i,p[1]-i],[g[0]-i,g[1]-i],[p[0]-t,p[1]+t],[g[0]+t,g[1]+t]],e),v=m([[f[0]-t,f[1]-t],[f[0]+i,f[1]+i],[p[0]-t,p[1]+t],[p[0]+i,p[1]-i]],e),b=m([[_[0]-i,_[1]+i],[_[0]+t,_[1]-t],[g[0]-i,g[1]-i],[g[0]+t,g[1]+t]],e),O={main:m([f,_,p,g],e),top:y,bot:x,left:v,right:b}
return[new h(l,c,u+2*t,d+2*t),O]}get boundsT(){const e=this.bounds,t=Object(o.s)(Object(a.c)(),e.x,e.y)
if(Object(o.t)(t,t,this._transform),this._hasRotation){const i=Math.max(e.width,e.height)
return new h(t[0],t[1],i,i)}return new h(t[0],t[1],e.width,e.height)}_createBounds(e){let t=1/0,i=1/0,n=0,r=0
for(const s of e)t=Math.min(t,s.xTopLeft),i=Math.min(i,s.yTopLeft),n=Math.max(n,s.xBottomRight),r=Math.max(r,s.yBottomRight)
const s=n-t,o=r-i
return new h(t+s/2,i+o/2,s,o)}_createGlyphTransform(e,t){const i=d*t.angle,n=Object(s.a)(),l=Object(a.c)()
return Object(r.j)(n,n,Object(o.s)(l,t.xOffset,-t.yOffset)),t.isCIM?Object(r.h)(n,n,i):(Object(r.j)(n,n,Object(o.s)(l,e.x,e.y)),Object(r.h)(n,n,i),Object(r.j)(n,n,Object(o.s)(l,-e.x,-e.y))),n}}class g{constructor(e,t,i,n,r,s){this.glyphWidthEnd=0,this.startX=0,this.startY=0,this.start=Math.max(0,Math.min(t,i)),this.end=Math.max(0,Math.max(t,i)),this.end<e.length&&(this.glyphWidthEnd=e[this.end].metrics.width),this.width=n,this.yMin=r,this.yMax=s}}const y=e=>10===e,x=e=>32===e
function v(e,t,i){const n=i.scale,r=new Array,s=function(e,t,i){const n=new Array,r=1/i.scale,s=i.maxLineWidth*r,o=t?e.length-1:0,a=t?-1:e.length,l=t?-1:1
let c=o,u=0,h=0,d=c,f=d,_=0,m=1/0,p=0
for(;c!==a;){const{code:t,metrics:i}=e[c],r=Math.abs(i.top)
if(y(t)||x(t)||(m=Math.min(m,r),p=Math.max(p,r+i.height)),y(t))c!==o&&(n.push(new g(e,d,c-l,u,m,p)),m=1/0,p=0),u=0,d=c+l,f=c+l,h=0
else if(x(t))f=c+l,h=0,_=i.advance,u+=i.advance
else if(u>s){if(f!==d){const t=f-2*l
u-=_,n.push(new g(e,d,t,u-h,m,p)),m=1/0,p=0,d=f,u=h}else n.push(new g(e,d,c-l,u,m,p)),m=1/0,p=0,d=c,f=c,u=0
u+=i.advance,h+=i.advance}else u+=i.advance,h+=i.advance
c+=l}const v=new g(e,d,c-l,u,m,p)
return v.start>=0&&v.end<e.length&&n.push(v),n}(e,t,i),o=function(e,t){let i=0
for(let t=0;t<e.length;t++){const{width:n}=e[t]
i=Math.max(n,i)}const n="underline"===t.decoration?4:0,r=e[0].yMin
return{x:0,y:r,height:e[e.length-1].yMax+t.lineHeight*(e.length-1)+n-r,width:i}}(s,i),{vAlign:a,hAlign:c}=i,u=a===l.b.Baseline?1:0,h=u?0:a-1,d=(1-u)*-o.y+h*(o.height/2)+-26*(u?1:0)
for(let t=0;t<s.length;t++){const{start:o,end:a,width:l}=s[t]
let u=-1*(c+1)*(l/2)-3
const h=t*i.lineHeight+d-3
s[t].startX=u,s[t].startY=h
for(let t=o;t<=a;t++){const i=e[t]
if(y(i.code))continue
const s=new f(u+i.metrics.left,h-i.metrics.top,i,n)
u+=i.metrics.advance,r.push(s)}}return new p(r,s,i)}},1391:function(e,t,i){"use strict"
i.d(t,"a",(function(){return a}))
var n=i(446),r=i(233),s=i(23),o=i(1226)
function a(e,t,i,n,o){if(Object(s.k)(e))return null
const a=e.referencesGeometry()&&o?c(t,n,o):t,l=e.repurposeFeature(a)
try{return e.evaluate({...i,$feature:l})}catch(e){return r.a.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",e),null}}const l=new Map
function c(e,t,i){const{transform:s,hasZ:a,hasM:c}=i
l.has(t)||l.set(t,function(e){const t={}
switch(e){case"esriGeometryPoint":return(e,i,n,r)=>Object(o.e)(i,t,e,n,r)
case"esriGeometryPolygon":return(e,i,n,r)=>Object(o.f)(i,t,e,n,r)
case"esriGeometryPolyline":return(e,i,n,r)=>Object(o.g)(i,t,e,n,r)
case"esriGeometryMultipoint":return(e,i,n,r)=>Object(o.d)(i,t,e,n,r)
default:return r.a.getLogger("esri.views.2d.support.arcadeOnDemand").error(new n.a("mapview-arcade","Unable to handle geometryType: "+e)),e=>e}}(t))
const u=l.get(t)(e.geometry,s,a,c)
return{...e,geometry:u}}},1412:function(e,t,i){"use strict"
i.d(t,"a",(function(){return o}))
var n=i(446),r=i(23),s=i(984)
function o(e,t){const{textureFloat:i,colorBufferFloat:o}=e.capabilities,a=null==i?void 0:i.textureFloat,l=null==i?void 0:i.textureFloatLinear,c=null==i?void 0:i.textureHalfFloat,u=null==i?void 0:i.textureHalfFloatLinear,h=null==i?void 0:i.HALF_FLOAT,d=null==o?void 0:o.textureFloat,f=null==o?void 0:o.textureHalfFloat,_=null==o?void 0:o.floatBlend,m=Object(r.w)(e.driverTest).floatBufferBlend.result
if(!a&&!c)throw new n.a("heatmap:missing-texture-float","HeatmapRenderer requires WebGL2 or the WebGL1 extension OES_texture_float or OES_texture_half_float.")
if(!d&&!f)throw new n.a("heatmap:missing-color-buffer-float","HeatmapRenderer requires the WebGL extension EXT_color_buffer_float or EXT_color_buffer_half_float or WEBGL_color_buffer_float.")
if(!(_&&m||f))throw new n.a("heatmap:missing-float-blend","HeatmapRenderer requires the WebGL extension EXT_float_blend or EXT_color_buffer_half_float."+(m?"":" This device claims support for EXT_float_blend, but does not actually support it."))
const p=a&&d&&_&&m,g=c&&f,y=l,x=u,v=!(null==o||!o.R32F),b=!(null==o||!o.R16F)
if(p&&(y||!x))return y||t.warnOnce("Missing WebGL extension OES_texture_float_linear. Heatmap quality may be reduced."),{dataType:s.q.FLOAT,samplingMode:y?s.z.LINEAR:s.z.NEAREST,pixelFormat:v?s.p.RED:s.p.RGBA,internalFormat:v?s.v.R32F:s.p.RGBA}
if(g)return x||t.warnOnce("Missing WebGL extension OES_texture_half_float_linear. Heatmap quality may be reduced."),{dataType:h,samplingMode:x?s.z.LINEAR:s.z.NEAREST,pixelFormat:b?s.p.RED:s.p.RGBA,internalFormat:b?s.v.R16F:s.p.RGBA}
throw new n.a("heatmap:missing-hardware-support","HeatmapRenderer requires WebGL extensions that allow it to render and blend to float or half float textures.")}},1422:function(e,t,i){"use strict"
i.d(t,"a",(function(){return n}))
class n{constructor(e=0,t=0,i=0,n=0){this.x=e,this.y=t,this.width=i,this.height=n}get isEmpty(){return this.width<=0||this.height<=0}union(e){this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.width=Math.max(this.width,e.width),this.height=Math.max(this.height,e.height)}}},1426:function(e,t,i){"use strict"
var n
i.d(t,"a",(function(){return c})),i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return u})),i.d(t,"d",(function(){return n})),i.d(t,"e",(function(){return m})),i.d(t,"f",(function(){return f})),i.d(t,"g",(function(){return h})),i.d(t,"h",(function(){return d})),function(e){e.AsyncNotEnabled="AsyncNotEnabled",e.ModulesNotSupported="ModulesNotSupported",e.CircularModules="CircularModules",e.NeverReach="NeverReach",e.UnsupportedHashType="UnsupportedHashType",e.InvalidParameter="InvalidParameter",e.UnexpectedToken="UnexpectedToken",e.Unrecognised="Unrecognised",e.UnrecognisedType="UnrecognisedType",e.MaximumCallDepth="MaximumCallDepth",e.BooleanConditionRequired="BooleanConditionRequired",e.TypeNotAllowedInFeature="TypeNotAllowedInFeature",e.KeyMustBeString="KeyMustBeString",e.WrongNumberOfParameters="WrongNumberOfParameters",e.CallNonFunction="CallNonFunction",e.NoFunctionInTemplateLiteral="NoFunctionInTemplateLiteral",e.NoFunctionInDictionary="NoFunctionInDictionary",e.NoFunctionInArray="NoFunctionInArray",e.AssignModuleFunction="AssignModuleFunction",e.LogicExpressionOrAnd="LogicExpressionOrAnd",e.LogicalExpressionOnlyBoolean="LogicalExpressionOnlyBoolean",e.FuncionNotFound="FunctionNotFound",e.InvalidMemberAccessKey="InvalidMemberAccessKey",e.UnsupportedUnaryOperator="UnsupportUnaryOperator",e.InvalidIdentifier="InvalidIdentifier",e.MemberOfNull="MemberOfNull",e.UnsupportedOperator="UnsupportedOperator",e.Cancelled="Cancelled",e.ModuleAccessorMustBeString="ModuleAccessorMustBeString",e.ModuleExportNotFound="ModuleExportNotFound",e.Immutable="Immutable",e.OutOfBounds="OutOfBounds",e.IllegalResult="IllegalResult",e.FieldNotFound="FieldNotFound",e.PortalRequired="PortalRequired",e.LogicError="LogicError",e.ArrayAccessorMustBeNumber="ArrayAccessMustBeNumber",e.KeyAccessorMustBeString="KeyAccessorMustBeString",e.WrongSpatialReference="WrongSpatialReference"}(n||(n={}))
const r={[n.TypeNotAllowedInFeature]:"Feature attributes only support dates, numbers, strings, guids.",[n.LogicError]:"Logic error - {reason}",[n.NeverReach]:"Encountered unreachable logic",[n.AsyncNotEnabled]:"Async Arcade must be enabled for this script",[n.ModuleAccessorMustBeString]:"Module accessor must be a string",[n.ModuleExportNotFound]:"Module has no export with provided identifier",[n.ModulesNotSupported]:"Current profile does not support modules",[n.ArrayAccessorMustBeNumber]:"Array accessor must be a number",[n.FuncionNotFound]:"Function not found",[n.FieldNotFound]:"Key not found - {key}",[n.CircularModules]:"Circular module dependencies are not allowed",[n.Cancelled]:"Execution cancelled",[n.UnsupportedHashType]:"Type not supported in hash function",[n.IllegalResult]:"Value is not a supported return type",[n.PortalRequired]:"Portal is required",[n.InvalidParameter]:"Invalid parameter",[n.WrongNumberOfParameters]:"Call with wrong number of parameters",[n.Unrecognised]:"Unrecognised code structure",[n.UnrecognisedType]:"Unrecognised type",[n.WrongSpatialReference]:"Cannot work with geometry in this spatial reference. It is different to the execution spatial reference",[n.BooleanConditionRequired]:"Conditions must use booleans",[n.NoFunctionInDictionary]:"Dictionaries cannot contain functions.",[n.NoFunctionInArray]:"Arrays cannot contain functions.",[n.NoFunctionInTemplateLiteral]:"Template Literals do not expect functions by value.",[n.KeyAccessorMustBeString]:"Accessor must be a string",[n.KeyMustBeString]:"Object keys must be a string",[n.Immutable]:"Object is immutable",[n.InvalidParameter]:"Invalid parameter",[n.UnexpectedToken]:"Unexpected token",[n.MemberOfNull]:"Cannot access property of null object",[n.MaximumCallDepth]:"Exceeded maximum function depth",[n.OutOfBounds]:"Out of bounds",[n.InvalidIdentifier]:"Identifier not recognised",[n.FuncionNotFound]:"Function not found",[n.CallNonFunction]:"Expression is not a function",[n.InvalidMemberAccessKey]:"Cannot access value using a key of this type",[n.AssignModuleFunction]:"Cannot assign function to module variable",[n.UnsupportedUnaryOperator]:"Unsupported unary operator",[n.UnsupportedOperator]:"Unsupported operator",[n.LogicalExpressionOnlyBoolean]:"Logical expressions must be boolean",[n.LogicExpressionOrAnd]:"Logical expression can only be combined with || or &&"}
class s extends Error{constructor(...e){super(...e)}}class o extends s{constructor(e,t){super(l(t)+e.message,{cause:e}),this.loc=null,Error.captureStackTrace&&Error.captureStackTrace(this,o),t&&t.loc&&(this.loc=t.loc)}}class a extends Error{constructor(e,t,i,n){super("Execution error - "+l(i)+h(r[t],n)),this.loc=null,this.declaredRootClass="esri.arcade.arcadeexecutionerror",Error.captureStackTrace&&Error.captureStackTrace(this,a),i&&i.loc&&(this.loc=i.loc)}}function l(e){var t,i
return e&&e.loc?`Line : ${null==(t=e.loc.start)?void 0:t.line}, ${null==(i=e.loc.start)?void 0:i.column}: `:""}class c extends Error{constructor(e,t,i,n){super("Compilation error - "+l(i)+h(r[t],n)),this.loc=null,this.declaredRootClass="esri.arcade.arcadecompilationerror",Error.captureStackTrace&&Error.captureStackTrace(this,c),i&&i.loc&&(this.loc=i.loc)}}class u extends Error{constructor(){super("Uncompilable code structures"),this.declaredRootClass="esri.arcade.arcadeuncompilableerror",Error.captureStackTrace&&Error.captureStackTrace(this,u)}}function h(e,t){try{if(!t)return e
for(const i in t){let n=t[i]
n||(n=""),e=e.replace("{"+i+"}",t[i])}}catch(e){}return e}function d(e,t,i){return"esri.arcade.arcadeexecutionerror"===i.declaredRootClass||"esri.arcade.arcadecompilationerror"===i.declaredRootClass?null===i.loc&&t&&t.loc?new o(i,{cause:i}):i:("esri.arcade.featureset.support.featureseterror"===i.declaredRootClass||"esri.arcade.featureset.support.sqlerror"===i.declaredRootClass||i.declaredRootClass,t&&t.loc?new o(i,{cause:i}):i)}var f
!function(e){e.UnrecognisedUri="UnrecognisedUri",e.UnsupportedUriProtocol="UnsupportedUriProtocol"}(f||(f={}))
const _={[f.UnrecognisedUri]:"Unrecognised uri - {uri}",[f.UnsupportedUriProtocol]:"Unrecognised uri protocol"}
class m extends Error{constructor(e,t){super(h(_[e],t)),this.declaredRootClass="esri.arcade.arcademoduleerror",Error.captureStackTrace&&Error.captureStackTrace(this,m)}}},1447:function(e,t,i){"use strict"
i.d(t,"a",(function(){return f})),i.d(t,"b",(function(){return d})),i.d(t,"c",(function(){return y})),i.d(t,"d",(function(){return g})),i.d(t,"e",(function(){return _})),i.d(t,"f",(function(){return p})),i.d(t,"g",(function(){return m})),i.d(t,"h",(function(){return x}))
var n=i(1304),r=i(23),s=i(980),o=i(773),a=i(996),l=i(988),c=i(1287),u=i(1e3),h=i(1373)
const d=512,f=50
function _(e,t){const i=Object(l.e)(t)
if(!i)return null
const[n,r]=i.valid
return e[2]>r?[Object(a.m)([e[0],e[1],r,e[3]]),Object(a.m)([n,e[1],n+e[2]-r,e[3]])]:e[0]<n?[Object(a.m)([n,e[1],e[2],e[3]]),Object(a.m)([r-(n-e[0]),e[1],r,e[3]])]:null}function m(e){return"text"===e||"esriTS"===e}function p(e){return"simple-marker"===e||"picture-marker"===e||"esriSMS"===e||"esriPMS"===e}function g(e){switch(Object(r.u)(e.geometry).type){case"point":case"multipoint":return 0
case"polyline":return 1
case"polygon":case"extent":return 2}return 0}function y(e,t,i){var r,o,a,l
if(null==i||null==(r=i.glyphMosaicItems)||!r.length)return e
const d=Object(n.a)(t.text)[1],f=i.glyphMosaicItems,_=Object(h.a)(f,d,{scale:Object(s.h)(t.font.size)/u.v,angle:null!=(o=t.angle)?o:0,xOffset:null!=(a=t.xoffset)?a:0,yOffset:null!=(l=t.yoffset)?l:0,hAlign:Object(c.e)(t.horizontalAlignment||"center"),vAlign:Object(c.g)(t.verticalAlignment||"baseline"),maxLineWidth:Math.max(32,Math.min(t.lineWidth||512,512)),lineHeight:u.y*Math.max(.25,Math.min(t.lineHeight||1,4)),decoration:t.font.decoration||"none",isCIM:!1,hasBackground:!!t.backgroundColor,borderLineSize:t.borderLineSize}).bounds
return e[0]=Object(s.h)(_.x-_.halfWidth),e[1]=Object(s.h)(_.y-_.halfHeight),e[2]=Object(s.h)(_.width),e[3]=Object(s.h)(_.height),e}function x(e){if(!e)return null
const{xmin:t,ymin:i,xmax:n,ymax:r,spatialReference:s}=e
return new o.default({rings:[[[t,i],[t,r],[n,r],[n,i],[t,i]]],spatialReference:s})}},1459:function(e,t,i){"use strict"
i.d(t,"a",(function(){return _}))
var n=i(23),r=i(1261),s=i(1367),o=i(1177),a=i(1315),l=i(1557),c=i(1068),u=i(984),h=i(1293),d=i(1072),f=i(1116)
class _ extends o.a{constructor(){super(...arguments),this._color=Object(r.b)(1,0,0,1)}dispose(){var e,t,i,n
null!=(e=this._outlineProgram)&&e.dispose(),this._outlineProgram=null,null!=(t=this._tileInfoProgram)&&t.dispose(),this._tileInfoProgram=null,null!=(i=this._outlineVertexArrayObject)&&i.dispose(),this._outlineVertexArrayObject=null,null!=(n=this._tileInfoVertexArrayObject)&&n.dispose(),this._tileInfoVertexArrayObject=null,this._canvas=null}prepareState({context:e}){e.setBlendingEnabled(!0),e.setBlendFunctionSeparate(u.b.ONE,u.b.ONE_MINUS_SRC_ALPHA,u.b.ONE,u.b.ONE_MINUS_SRC_ALPHA),e.setColorMask(!0,!0,!0,!0),e.setStencilWriteMask(0),e.setStencilTestEnabled(!1)}draw(e,t){const{context:i,requestRender:r,allowDelayedRender:s}=e
if(!t.isReady)return
if(this._loadWGLResources(i),s&&Object(n.l)(r)&&(!this._outlineProgram.compiled||!this._tileInfoProgram.compiled))return void r()
i.bindVAO(this._outlineVertexArrayObject),i.useProgram(this._outlineProgram),this._outlineProgram.setUniformMatrix3fv("u_dvsMat3",t.transforms.dvs),this._outlineProgram.setUniform2f("u_coord_range",t.rangeX,t.rangeY),this._outlineProgram.setUniform1f("u_depth",0),this._outlineProgram.setUniform4fv("u_color",this._color),i.drawArrays(u.r.LINE_STRIP,0,4)
const o=this._getTexture(i,t)
o?(i.bindVAO(this._tileInfoVertexArrayObject),i.useProgram(this._tileInfoProgram),i.bindTexture(o,0),this._tileInfoProgram.setUniformMatrix3fv("u_dvsMat3",t.transforms.dvs),this._tileInfoProgram.setUniform1f("u_depth",0),this._tileInfoProgram.setUniform2f("u_coord_ratio",t.rangeX/t.width,t.rangeY/t.height),this._tileInfoProgram.setUniform2f("u_delta",8,8),this._tileInfoProgram.setUniform2f("u_dimensions",o.descriptor.width,o.descriptor.height),i.drawArrays(u.r.TRIANGLE_STRIP,0,4),i.bindVAO()):i.bindVAO()}_loadWGLResources(e){if(this._outlineProgram&&this._tileInfoProgram)return
const t=Object(h.a)(e,a.a),i=Object(h.a)(e,l.a),n=new Int8Array([0,0,1,0,1,1,0,1]),r=c.a.createVertex(e,u.D.STATIC_DRAW,n),o=new f.a(e,a.a.attributes,s.a,{geometry:r}),d=new Int8Array([0,0,1,0,0,1,1,1]),_=c.a.createVertex(e,u.D.STATIC_DRAW,d),m=new f.a(e,l.a.attributes,s.a,{geometry:_})
this._outlineProgram=t,this._tileInfoProgram=i,this._outlineVertexArrayObject=o,this._tileInfoVertexArrayObject=m}_getTexture(e,t){if(t.texture&&t.triangleCountReportedInDebug===t.triangleCount)return t.texture
t.triangleCountReportedInDebug=t.triangleCount,this._canvas||(this._canvas=document.createElement("canvas"),this._canvas.setAttribute("id","canvas2d"),this._canvas.setAttribute("width","300"),this._canvas.setAttribute("height","32"),this._canvas.setAttribute("style","display:none"))
const i=t.triangleCount
let n=t.key.id
t.triangleCount>0&&(n+=", "+i)
const r=this._canvas,s=r.getContext("2d")
return s.font="24px sans-serif",s.textAlign="left",s.textBaseline="top",s.clearRect(0,0,300,32),i>1e5?(s.fillStyle="red",s.fillRect(0,0,300,32),s.fillStyle="black"):(s.clearRect(0,0,300,32),s.fillStyle="blue"),s.fillText(n,0,0),t.texture=new d.a(e,{target:u.A.TEXTURE_2D,pixelFormat:u.p.RGBA,dataType:u.q.UNSIGNED_BYTE,samplingMode:u.z.NEAREST,wrapMode:u.B.CLAMP_TO_EDGE},r),t.texture}}},1460:function(e,t,i){"use strict"
i.d(t,"a",(function(){return d}))
var n=i(23),r=i(1261),s=i(1367),o=i(1177),a=i(1315),l=i(1068),c=i(984),u=i(1293),h=i(1116)
class d extends o.a{constructor(){super(...arguments),this._color=Object(r.b)(1,0,0,1),this._initialized=!1}dispose(){this._solidProgram&&(this._solidProgram.dispose(),this._solidProgram=null),this._solidVertexArrayObject&&(this._solidVertexArrayObject.dispose(),this._solidVertexArrayObject=null)}prepareState({context:e}){e.setDepthWriteEnabled(!1),e.setDepthTestEnabled(!1),e.setStencilTestEnabled(!0),e.setBlendingEnabled(!1),e.setColorMask(!1,!1,!1,!1),e.setStencilOp(c.w.KEEP,c.w.KEEP,c.w.REPLACE),e.setStencilWriteMask(255)}draw(e,t){const{context:i,requestRender:r,allowDelayedRender:s}=e
this._initialized||this._initialize(i),s&&Object(n.l)(r)&&!this._solidProgram.compiled?r():(i.setStencilFunctionSeparate(c.n.FRONT_AND_BACK,c.h.GREATER,t.stencilRef,255),i.bindVAO(this._solidVertexArrayObject),i.useProgram(this._solidProgram),this._solidProgram.setUniformMatrix3fv("u_dvsMat3",t.transforms.dvs),this._solidProgram.setUniform2fv("u_coord_range",[t.rangeX,t.rangeY]),this._solidProgram.setUniform1f("u_depth",0),this._solidProgram.setUniform4fv("u_color",this._color),i.drawArrays(c.r.TRIANGLE_STRIP,0,4),i.bindVAO())}_initialize(e){if(this._initialized)return!0
const t=Object(u.a)(e,a.a)
if(!t)return!1
const i=new Int8Array([0,0,1,0,0,1,1,1]),n=l.a.createVertex(e,c.D.STATIC_DRAW,i),r=new h.a(e,a.a.attributes,s.a,{geometry:n})
return this._solidProgram=t,this._solidVertexArrayObject=r,this._initialized=!0,!0}}},1468:function(e,t,i){"use strict"
var n,r
i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return s})),i.d(t,"c",(function(){return l})),i.d(t,"d",(function(){return a})),function(e){e[e.Unknown=0]="Unknown",e[e.Point=1]="Point",e[e.LineString=2]="LineString",e[e.Polygon=3]="Polygon"}(n||(n={}))
class s{constructor(e,t){this.x=e,this.y=t}clone(){return new s(this.x,this.y)}equals(e,t){return e===this.x&&t===this.y}isEqual(e){return e.x===this.x&&e.y===this.y}setCoords(e,t){this.x=e,this.y=t}normalize(){const e=this.x,t=this.y,i=Math.sqrt(e*e+t*t)
this.x/=i,this.y/=i}rightPerpendicular(){const e=this.x
this.x=this.y,this.y=-e}move(e,t){this.x+=e,this.y+=t}assign(e){this.x=e.x,this.y=e.y}assignAdd(e,t){this.x=e.x+t.x,this.y=e.y+t.y}assignSub(e,t){this.x=e.x-t.x,this.y=e.y-t.y}rotate(e,t){const i=this.x,n=this.y
this.x=i*e-n*t,this.y=i*t+n*e}scale(e){this.x*=e,this.y*=e}length(){const e=this.x,t=this.y
return Math.sqrt(e*e+t*t)}static distance(e,t){const i=t.x-e.x,n=t.y-e.y
return Math.sqrt(i*i+n*n)}static add(e,t){return new s(e.x+t.x,e.y+t.y)}static sub(e,t){return new s(e.x-t.x,e.y-t.y)}}class o{constructor(e,t,i){this.ratio=e,this.x=t,this.y=i}}class a{constructor(e,t,i,n=8,r=8){this._lines=[],this._starts=[],this.validateTessellation=!0,this._pixelRatio=n,this._pixelMargin=r,this._tileSize=512*n,this._dz=e,this._yPos=t,this._xPos=i}setPixelMargin(e){e!==this._pixelMargin&&(this._pixelMargin=e,this.setExtent(this._extent))}setExtent(e){this._extent=e,this._finalRatio=this._tileSize/e*(1<<this._dz)
let t=this._pixelRatio*this._pixelMargin
t/=this._finalRatio
const i=e>>this._dz
t>i&&(t=i),this._margin=t,this._xmin=i*this._xPos-t,this._ymin=i*this._yPos-t,this._xmax=this._xmin+i+2*t,this._ymax=this._ymin+i+2*t}reset(e){this._type=e,this._lines=[],this._starts=[],this._line=null,this._start=0}moveTo(e,t){this._pushLine(),this._prevIsIn=this._isIn(e,t),this._moveTo(e,t,this._prevIsIn),this._prevPt=new s(e,t),this._firstPt=new s(e,t),this._dist=0}lineTo(e,t){const i=this._isIn(e,t),n=new s(e,t),r=s.distance(this._prevPt,n)
let a,l,c,u,h,d,f,_
if(i)this._prevIsIn?this._lineTo(e,t,!0):(a=this._prevPt,l=n,c=this._intersect(l,a),this._start=this._dist+r*(1-this._r),this._lineTo(c.x,c.y,!0),this._lineTo(l.x,l.y,!0))
else if(this._prevIsIn)l=this._prevPt,a=n,c=this._intersect(l,a),this._lineTo(c.x,c.y,!0),this._lineTo(a.x,a.y,!1)
else{const e=this._prevPt,t=n
if(e.x<=this._xmin&&t.x<=this._xmin||e.x>=this._xmax&&t.x>=this._xmax||e.y<=this._ymin&&t.y<=this._ymin||e.y>=this._ymax&&t.y>=this._ymax)this._lineTo(t.x,t.y,!1)
else{const i=[]
if((e.x<this._xmin&&t.x>this._xmin||e.x>this._xmin&&t.x<this._xmin)&&(u=(this._xmin-e.x)/(t.x-e.x),_=e.y+u*(t.y-e.y),_<=this._ymin?d=!1:_>=this._ymax?d=!0:i.push(new o(u,this._xmin,_))),(e.x<this._xmax&&t.x>this._xmax||e.x>this._xmax&&t.x<this._xmax)&&(u=(this._xmax-e.x)/(t.x-e.x),_=e.y+u*(t.y-e.y),_<=this._ymin?d=!1:_>=this._ymax?d=!0:i.push(new o(u,this._xmax,_))),(e.y<this._ymin&&t.y>this._ymin||e.y>this._ymin&&t.y<this._ymin)&&(u=(this._ymin-e.y)/(t.y-e.y),f=e.x+u*(t.x-e.x),f<=this._xmin?h=!1:f>=this._xmax?h=!0:i.push(new o(u,f,this._ymin))),(e.y<this._ymax&&t.y>this._ymax||e.y>this._ymax&&t.y<this._ymax)&&(u=(this._ymax-e.y)/(t.y-e.y),f=e.x+u*(t.x-e.x),f<=this._xmin?h=!1:f>=this._xmax?h=!0:i.push(new o(u,f,this._ymax))),0===i.length)h?d?this._lineTo(this._xmax,this._ymax,!0):this._lineTo(this._xmax,this._ymin,!0):d?this._lineTo(this._xmin,this._ymax,!0):this._lineTo(this._xmin,this._ymin,!0)
else if(i.length>1&&i[0].ratio>i[1].ratio)this._start=this._dist+r*i[1].ratio,this._lineTo(i[1].x,i[1].y,!0),this._lineTo(i[0].x,i[0].y,!0)
else{this._start=this._dist+r*i[0].ratio
for(let e=0;e<i.length;e++)this._lineTo(i[e].x,i[e].y,!0)}this._lineTo(t.x,t.y,!1)}}this._dist+=r,this._prevIsIn=i,this._prevPt=n}close(){if(this._line.length>2){const e=this._firstPt,t=this._prevPt
e.x===t.x&&e.y===t.y||this.lineTo(e.x,e.y)
const i=this._line
let n=i.length
for(;n>=4&&(i[0].x===i[1].x&&i[0].x===i[n-2].x||i[0].y===i[1].y&&i[0].y===i[n-2].y);)i.pop(),i[0].x=i[n-2].x,i[0].y=i[n-2].y,--n}}result(e=!0){return this._pushLine(),0===this._lines.length?null:(this._type===n.Polygon&&e&&c.simplify(this._tileSize,this._margin*this._finalRatio,this._lines),this._lines)}resultWithStarts(){if(this._type!==n.LineString)throw new Error("Only valid for lines")
this._pushLine()
const e=this._lines,t=e.length
if(0===t)return null
const i=[]
for(let n=0;n<t;n++)i.push({line:e[n],start:this._starts[n]||0})
return i}_isIn(e,t){return e>=this._xmin&&e<=this._xmax&&t>=this._ymin&&t<=this._ymax}_intersect(e,t){let i,n,r
if(t.x>=this._xmin&&t.x<=this._xmax)n=t.y<=this._ymin?this._ymin:this._ymax,r=(n-e.y)/(t.y-e.y),i=e.x+r*(t.x-e.x)
else if(t.y>=this._ymin&&t.y<=this._ymax)i=t.x<=this._xmin?this._xmin:this._xmax,r=(i-e.x)/(t.x-e.x),n=e.y+r*(t.y-e.y)
else{n=t.y<=this._ymin?this._ymin:this._ymax,i=t.x<=this._xmin?this._xmin:this._xmax
const s=(i-e.x)/(t.x-e.x),o=(n-e.y)/(t.y-e.y)
s<o?(r=s,n=e.y+s*(t.y-e.y)):(r=o,i=e.x+o*(t.x-e.x))}return this._r=r,new s(i,n)}_pushLine(){this._line&&(this._type===n.Point?this._line.length>0&&(this._lines.push(this._line),this._starts.push(this._start)):this._type===n.LineString?this._line.length>1&&(this._lines.push(this._line),this._starts.push(this._start)):this._type===n.Polygon&&this._line.length>3&&(this._lines.push(this._line),this._starts.push(this._start))),this._line=[],this._start=0}_moveTo(e,t,i){this._type!==n.Polygon?i&&(e=Math.round((e-(this._xmin+this._margin))*this._finalRatio),t=Math.round((t-(this._ymin+this._margin))*this._finalRatio),this._line.push(new s(e,t))):(i||(e<this._xmin&&(e=this._xmin),e>this._xmax&&(e=this._xmax),t<this._ymin&&(t=this._ymin),t>this._ymax&&(t=this._ymax)),e=Math.round((e-(this._xmin+this._margin))*this._finalRatio),t=Math.round((t-(this._ymin+this._margin))*this._finalRatio),this._line.push(new s(e,t)),this._isH=!1,this._isV=!1)}_lineTo(e,t,i){let r,o
if(this._type!==n.Polygon)if(i){if(e=Math.round((e-(this._xmin+this._margin))*this._finalRatio),t=Math.round((t-(this._ymin+this._margin))*this._finalRatio),this._line.length>0&&(r=this._line[this._line.length-1],r.equals(e,t)))return
this._line.push(new s(e,t))}else this._line&&this._line.length>0&&this._pushLine()
else if(i||(e<this._xmin&&(e=this._xmin),e>this._xmax&&(e=this._xmax),t<this._ymin&&(t=this._ymin),t>this._ymax&&(t=this._ymax)),e=Math.round((e-(this._xmin+this._margin))*this._finalRatio),t=Math.round((t-(this._ymin+this._margin))*this._finalRatio),this._line&&this._line.length>0){r=this._line[this._line.length-1]
const i=r.x===e,n=r.y===t
if(i&&n)return
this._isH&&i||this._isV&&n?(r.x=e,r.y=t,o=this._line[this._line.length-2],o.x===e&&o.y===t?(this._line.pop(),this._line.length<=1?(this._isH=!1,this._isV=!1):(o=this._line[this._line.length-2],this._isH=o.x===e,this._isV=o.y===t)):(this._isH=o.x===e,this._isV=o.y===t)):(this._line.push(new s(e,t)),this._isH=i,this._isV=n)}else this._line.push(new s(e,t))}}class l{setExtent(e){this._ratio=4096===e?1:4096/e}get validateTessellation(){return this._ratio<1}reset(e){this._lines=[],this._line=null}moveTo(e,t){this._line&&this._lines.push(this._line),this._line=[]
const i=this._ratio
this._line.push(new s(e*i,t*i))}lineTo(e,t){const i=this._ratio
this._line.push(new s(e*i,t*i))}close(){const e=this._line
e&&!e[0].isEqual(e[e.length-1])&&e.push(e[0])}result(){return this._line&&this._lines.push(this._line),0===this._lines.length?null:this._lines}}!function(e){e[e.sideLeft=0]="sideLeft",e[e.sideRight=1]="sideRight",e[e.sideTop=2]="sideTop",e[e.sideBottom=3]="sideBottom"}(r||(r={}))
class c{static simplify(e,t,i){if(!i)return
const n=-t,s=e+t,o=-t,a=e+t,l=[],u=[],h=i.length
for(let e=0;e<h;++e){const t=i[e]
if(!t||t.length<2)continue
let c,h=t[0]
const d=t.length
for(let i=1;i<d;++i)c=t[i],h.x===c.x&&(h.x<=n&&(h.y>c.y?(l.push(e),l.push(i),l.push(r.sideLeft),l.push(-1)):(u.push(e),u.push(i),u.push(r.sideLeft),u.push(-1))),h.x>=s&&(h.y<c.y?(l.push(e),l.push(i),l.push(r.sideRight),l.push(-1)):(u.push(e),u.push(i),u.push(r.sideRight),u.push(-1)))),h.y===c.y&&(h.y<=o&&(h.x<c.x?(l.push(e),l.push(i),l.push(r.sideTop),l.push(-1)):(u.push(e),u.push(i),u.push(r.sideTop),u.push(-1))),h.y>=a&&(h.x>c.x?(l.push(e),l.push(i),l.push(r.sideBottom),l.push(-1)):(u.push(e),u.push(i),u.push(r.sideBottom),u.push(-1)))),h=c}if(0===l.length||0===u.length)return
c.fillParent(i,u,l),c.fillParent(i,l,u)
const d=[]
c.calcDeltas(d,u,l),c.calcDeltas(d,l,u),c.addDeltas(d,i)}static fillParent(e,t,i){const n=i.length,s=t.length
for(let o=0;o<s;o+=4){const s=t[o],a=t[o+1],l=t[o+2],c=e[s][a-1],h=e[s][a]
let d=8092,f=-1
for(let t=0;t<n;t+=4){if(i[t+2]!==l)continue
const n=i[t],s=i[t+1],o=e[n][s-1],a=e[n][s]
switch(l){case r.sideLeft:case r.sideRight:if(u(c.y,o.y,a.y)&&u(h.y,o.y,a.y)){const e=Math.abs(a.y-o.y)
e<d&&(d=e,f=t)}break
case r.sideTop:case r.sideBottom:if(u(c.x,o.x,a.x)&&u(h.x,o.x,a.x)){const e=Math.abs(a.x-o.x)
e<d&&(d=e,f=t)}}}t[o+3]=f}}static calcDeltas(e,t,i){const n=t.length
for(let r=0;r<n;r+=4){const n=[],s=c.calcDelta(r,t,i,n)
e.push(t[r]),e.push(t[r+1]),e.push(t[r+2]),e.push(s)}}static calcDelta(e,t,i,n){const r=t[e+3]
if(-1===r)return 0
const s=n.length
return s>1&&n[s-2]===r?0:(n.push(r),c.calcDelta(r,i,t,n)+1)}static addDeltas(e,t){const i=e.length
let n=0
for(let t=0;t<i;t+=4){const i=e[t+3]
i>n&&(n=i)}for(let s=0;s<i;s+=4){const i=t[e[s]],o=e[s+1],a=n-e[s+3]
switch(e[s+2]){case r.sideLeft:i[o-1].x-=a,i[o].x-=a,1===o&&(i[i.length-1].x-=a),o===i.length-1&&(i[0].x-=a)
break
case r.sideRight:i[o-1].x+=a,i[o].x+=a,1===o&&(i[i.length-1].x+=a),o===i.length-1&&(i[0].x+=a)
break
case r.sideTop:i[o-1].y-=a,i[o].y-=a,1===o&&(i[i.length-1].y-=a),o===i.length-1&&(i[0].y-=a)
break
case r.sideBottom:i[o-1].y+=a,i[o].y+=a,1===o&&(i[i.length-1].y+=a),o===i.length-1&&(i[0].y+=a)}}}}const u=(e,t,i)=>e>=t&&e<=i||e>=i&&e<=t},1475:function(e,t,i){"use strict"
i.d(t,"a",(function(){return c})),i.d(t,"b",(function(){return l})),i.d(t,"c",(function(){return n})),i.d(t,"d",(function(){return o})),i.d(t,"e",(function(){return u}))
var n,r=i(1426),s=i(1200)
class o{}o.instance=new s.IANAZone("Etc/UTC"),(n||(n={})).TimeZoneNotRecognised="TimeZoneNotRecognised"
const a={[n.TimeZoneNotRecognised]:"Timezone identifier has not been recognised."}
class l extends Error{constructor(e,t){super(Object(r.g)(a[e],t)),this.declaredRootClass="esri.arcade.arcadedate.dateerror",Error.captureStackTrace&&Error.captureStackTrace(this,l)}}class c{constructor(e){this._date=e,this.declaredRootClass="esri.arcade.arcadedate"}static fromParts(e=0,t=1,i=1,n=0,r=0,o=0,a=0,l){if(isNaN(e)||isNaN(t)||isNaN(i)||isNaN(n)||isNaN(r)||isNaN(o)||isNaN(a))return null
let h=0
const d=s.DateTime.local(e,t).daysInMonth
i<1&&(h=i-1,i=1),i>d&&(h=i-d,i=d)
let f=0
t>12?(f=t-12,t=12):t<1&&(f=t-1,t=1)
let _=0
r>59?(_=r-59,r=59):r<0&&(_=r,r=0)
let m=0
o>59?(m=o-59,o=59):o<0&&(m=o,o=0)
let p=0
a>999?(p=a-999,a=999):a<0&&(p=a,a=0)
let g=s.DateTime.fromObject({day:i,year:e,month:t,hour:n,minute:r,second:o,millisecond:a},{zone:u(l)})
return 0!==f&&(g=g.plus({months:f})),0!==h&&(g=g.plus({days:h})),0!==_&&(g=g.plus({minutes:_})),0!==m&&(g=g.plus({seconds:m})),0!==p&&(g=g.plus({milliseconds:p})),new c(g)}static get systemTimeZoneCanonicalName(){var e
return null!=(e=Intl.DateTimeFormat().resolvedOptions().timeZone)?e:"system"}static arcadeDateAndZoneToArcadeDate(e,t){const i=u(t)
return e.isUnknownTimeZone||i===o.instance?c.fromParts(e.year,e.monthJS+1,e.day,e.hour,e.minute,e.second,e.millisecond,i):new c(e._date.setZone(t))}static dateJSToArcadeDate(e){return new c(s.DateTime.fromJSDate(e,{zone:"system"}))}static dateJSAndZoneToArcadeDate(e,t="system"){return new c(s.DateTime.fromJSDate(e,{zone:t}))}static unknownEpochToArcadeDate(e){return new c(s.DateTime.fromMillis(e,{zone:o.instance}))}static unknownDateJSToArcadeDate(e){return new c(s.DateTime.fromMillis(e.getTime(),{zone:o.instance}))}static epochToArcadeDate(e,t="system"){return new c(s.DateTime.fromMillis(e,{zone:t}))}static dateTimeToArcadeDate(e){return new c(e)}changeTimeZone(e){const t=u(e)
return c.dateTimeToArcadeDate(this._date.setZone(t))}static dateTimeAndZoneToArcadeDate(e,t){const i=u(t)
return e.zone===o.instance||i===o.instance?c.fromParts(e.year,e.month,e.day,e.hour,e.minute,e.second,e.millisecond,i):new c(e.setZone(i))}static nowToArcadeDate(e){return new c(s.DateTime.fromJSDate(new Date,{zone:e}))}static nowUTCToArcadeDate(){return new c(s.DateTime.utc())}get isSystem(){return"system"===this.timeZone||this.timeZone===c.systemTimeZoneCanonicalName}equals(e){return this.isSystem&&e.isSystem?this.toNumber()===e.toNumber():this.isUnknownTimeZone===e.isUnknownTimeZone&&this._date.equals(e._date)}get isUnknownTimeZone(){return this._date.zone===o.instance}get isValid(){return this._date.isValid}get hour(){return this._date.hour}get second(){return this._date.second}get day(){return this._date.day}get dayOfWeekISO(){return this._date.weekday}get dayOfWeekJS(){let e=this._date.weekday
return e>6&&(e=0),e}get millisecond(){return this._date.millisecond}get monthISO(){return this._date.month}get weekISO(){return this._date.weekNumber}get yearISO(){return this._date.weekYear}get monthJS(){return this._date.month-1}get year(){return this._date.year}get minute(){return this._date.minute}get zone(){return this._date.zone}get timeZoneOffset(){return this.isUnknownTimeZone?0:this._date.offset}get timeZone(){if(this.isUnknownTimeZone)return"unknown"
if("system"===this._date.zone.type)return"system"
const e=this.zone
return"fixed"===e.type?0===e.fixed?"utc":e.formatOffset(0,"short"):e.name}stringify(){return JSON.stringify(this.toJSDate())}plus(e){return new c(this._date.plus(e))}diff(e,t="milliseconds"){return this._date.diff(e._date,t)[t]}toISOString(e){return e?this._date.toISO({suppressMilliseconds:!0,includeOffset:!this.isUnknownTimeZone}):this._date.toISO({includeOffset:!this.isUnknownTimeZone})}toFormat(e,t){return this._date.toFormat(e,t)}toJSDate(){return this._date.toJSDate()}toSQLString(){return"timestamp '"+this._date.toFormat("yyyy-LL-dd HH:mm:ss")+"'"}toDateTime(){return this._date}toNumber(){return this._date.toMillis()}getTime(){return this._date.toMillis()}toUTC(){return new c(this._date.toUTC())}toLocal(){return new c(this._date.toLocal())}toString(){return this.toISOString(!0)}}function u(e){if(e instanceof s.Zone)return e
if("system"===e.toLowerCase())return"system"
if("utc"===e.toLowerCase())return"utc"
if("unknown"===e.toLowerCase())return o.instance
if(/^[\+\-]?[0-9]{1,2}([:][0-9]{2})?$/.test(e)){const t=s.FixedOffsetZone.parseSpecifier("UTC"+(e.startsWith("+")||e.startsWith("-")?"":"+")+e)
if(t)return t}const t=s.IANAZone.create(e)
if(!t.isValid)throw new l(n.TimeZoneNotRecognised)
return t}},1484:function(e,t,i){"use strict"
i.d(t,"a",(function(){return Pe})),i.d(t,"b",(function(){return Ee}))
var n=i(234),r=i(983),s=i(1080)
class o{static local(){return null===o.instance&&(o.instance=new o),o.instance}execute(e,t,i,n,r){return new a(e,t,i)}}o.instance=null
class a{constructor(e,t,i){this._inputGeometries=e,this._angleTolerance=void 0!==t.angleTolerance?t.angleTolerance:120,this._maxCosAngle=Math.cos((1-Math.abs(this._angleTolerance)/180)*Math.PI)}next(){let e=this._inputGeometries.next()
for(;e;){if(Object(r.g)(e)){this._isClosed=!0
const t=Object(n.a)(e)
return this._processMultipath(t.rings),t}if(Object(r.h)(e)){this._isClosed=!1
const t=Object(n.a)(e)
return this._processMultipath(t.paths),t}if(Object(r.d)(e)){if(this._maxCosAngle)return e
this._isClosed=!0
const t=[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]
return this._processPath(t),{rings:[t]}}e=this._inputGeometries.next()}return null}_processMultipath(e){if(e)for(const t of e)this._processPath(t)}_processPath(e){if(e){let t,i,n,r,o,a,l=e.length,c=e[0]
this._isClosed&&++l
for(let u=1;u<l;++u){let h
h=this._isClosed&&u===l-1?e[0]:e[u]
const d=h[0]-c[0],f=h[1]-c[1],_=Math.sqrt(d*d+f*f)
u>1&&_>0&&n>0&&(t*d+i*f)/_/n<=this._maxCosAngle&&Object(s.j)(c,1),1===u&&(r=d,o=f,a=_),_>0&&(c=h,t=d,i=f,n=_)}this._isClosed&&n>0&&a>0&&(t*r+i*o)/a/n<=this._maxCosAngle&&Object(s.j)(e[0],1)}}}var l=i(1030)
class c{constructor(){this._path=[]}path(){return this._path}addPath(e,t){t||e.reverse(),Array.prototype.push.apply(this._path,e),t||e.reverse()}static mergePath(e,t){t&&Array.prototype.push.apply(e,t)}startPath(e){this._path.push(e)}lineTo(e){this._path.push(e)}close(){const e=this._path
e.length>1&&(e[0][0]===e[e.length-1][0]&&e[0][1]===e[e.length-1][1]||e.push([e[0][0],e[0][1]]))}}class u{constructor(e=0,t=!1){}normalize(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1])
0!==t&&(e[0]/=t,e[1]/=t)}calculateLength(e,t){const i=t[0]-e[0],n=t[1]-e[1]
return Math.sqrt(i*i+n*n)}calculateSegLength(e,t){return this.calculateLength(e[t],e[t+1])}calculatePathLength(e){let t=0
const i=e?e.length:0
for(let n=0;n<i-1;++n)t+=this.calculateSegLength(e,n)
return t}calculatePathArea(e){let t=0
const i=e?e.length:0
for(let n=0;n<i-1;++n)t+=(e[n+1][0]-e[n][0])*(e[n+1][1]+e[n][1])
return t/2}getCoord2D(e,t,i){return[e[0]+(t[0]-e[0])*i,e[1]+(t[1]-e[1])*i]}getSegCoord2D(e,t,i){return this.getCoord2D(e[t],e[t+1],i)}getAngle(e,t,i){const n=t[0]-e[0],r=t[1]-e[1]
return Math.atan2(r,n)}getSegAngle(e,t,i){return this.getAngle(e[t],e[t+1],i)}getAngleCS(e,t,i){const n=t[0]-e[0],r=t[1]-e[1],s=Math.sqrt(n*n+r*r)
return s>0?[n/s,r/s]:[1,0]}getSegAngleCS(e,t,i){return this.getAngleCS(e[t],e[t+1],i)}cut(e,t,i,n){return[i<=0?e[t]:this.getSegCoord2D(e,t,i),n>=1?e[t+1]:this.getSegCoord2D(e,t,n)]}addSegment(e,t,i){i&&e.push(t[0]),e.push(t[1])}getSubCurve(e,t,i){const n=[]
return this.appendSubCurve(n,e,t,i)?n:null}appendSubCurve(e,t,i,n){const r=t?t.length-1:0
let s=0,o=!0,a=0
for(;a<r;){const r=this.calculateSegLength(t,a)
if(0!==r){if(o){if(s+r>i){const l=(i-s)/r
let c=1,u=!1
s+r>=n&&(c=(n-s)/r,u=!0)
const h=this.cut(t,a,l,c)
if(h&&this.addSegment(e,h,o),u)break
o=!1}}else{if(s+r>n){const i=this.cut(t,a,0,(n-s)/r)
i&&this.addSegment(e,i,o)
break}this.addSegment(e,[t[a],t[a+1]],o)}s+=r,++a}else++a}return!0}getCIMPointAlong(e,t){const i=e?e.length-1:0
let n=0,r=-1
for(;r<i;){++r
const i=this.calculateSegLength(e,r)
if(0!==i){if(n+i>t){const s=(t-n)/i
return this.getCoord2D(e[r],e[r+1],s)}n+=i}}return null}isEmpty(e,t){if(!e||e.length<=1)return!0
const i=e?e.length-1:0
let n=-1
for(;n<i;){if(++n,e[n+1][0]!==e[n][0]||e[n+1][1]!==e[n][1])return!1
if(t&&e[n+1][2]!==e[n][2])return!1}return!0}offset(e,t,i,n,r){if(!e||e.length<2)return null
let s=0,o=e[s++],a=s
for(;s<e.length;){const t=e[s]
t[0]===o[0]&&t[1]===o[1]||(s!==a&&(e[a]=e[s]),o=e[a++]),s++}const c=e[0][0]===e[a-1][0]&&e[0][1]===e[a-1][1]
if(c&&--a,a<(c?3:2))return null
const u=[]
o=c?e[a-1]:null
let h=e[0]
for(let r=0;r<a;r++){const s=r===a-1?c?e[0]:null:e[r+1]
if(o)if(s){const e=[s[0]-h[0],s[1]-h[1]]
this.normalize(e)
const r=[h[0]-o[0],h[1]-o[1]]
this.normalize(r)
const a=r[0]*e[1]-r[1]*e[0],c=r[0]*e[0]+r[1]*e[1]
if(0===a&&1===c){h=s
continue}if(a>=0==t<=0){if(c<1){const i=[e[0]-r[0],e[1]-r[1]]
this.normalize(i)
const s=Math.sqrt((1+c)/2)
if(s>1/n){const e=-Math.abs(t)/s
u.push([h[0]-i[0]*e,h[1]-i[1]*e])}}}else switch(i){case l.m.Mitered:{const i=Math.sqrt((1+c)/2)
if(i>0&&1/i<n){const n=[e[0]-r[0],e[1]-r[1]]
this.normalize(n)
const s=Math.abs(t)/i
u.push([h[0]-n[0]*s,h[1]-n[1]*s])
break}}case l.m.Bevelled:u.push([h[0]+r[1]*t,h[1]-r[0]*t]),u.push([h[0]+e[1]*t,h[1]-e[0]*t])
break
case l.m.Rounded:if(c<1){u.push([h[0]+r[1]*t,h[1]-r[0]*t])
const i=Math.floor(2.5*(1-c))
if(i>0){const n=1/i
let s=n
for(let o=1;o<i;o++,s+=n){const i=[r[1]*(1-s)+e[1]*s,-r[0]*(1-s)-e[0]*s]
this.normalize(i),u.push([h[0]+i[0]*t,h[1]+i[1]*t])}}u.push([h[0]+e[1]*t,h[1]-e[0]*t])}break
case l.m.Square:default:if(a<0)u.push([h[0]+(r[1]+r[0])*t,h[1]+(r[1]-r[0])*t]),u.push([h[0]+(e[1]-e[0])*t,h[1]-(e[0]+e[1])*t])
else{const i=Math.sqrt((1+Math.abs(c))/2),n=[e[0]-r[0],e[1]-r[1]]
this.normalize(n)
const s=t/i
u.push([h[0]-n[0]*s,h[1]-n[1]*s])}}}else{const e=[h[0]-o[0],h[1]-o[1]]
this.normalize(e),u.push([h[0]+e[1]*t,h[1]-e[0]*t])}else{const e=[s[0]-h[0],s[1]-h[1]]
this.normalize(e),u.push([h[0]+e[1]*t,h[1]-e[0]*t])}o=h,h=s}return u.length<(c?3:2)?null:(c&&u.push([u[0][0],u[0][1]]),u)}}const h=l.j.OpenEnded
class d{static local(){return null===d.instance&&(d.instance=new d),d.instance}execute(e,t,i,n,r){return new f(e,t,i)}}d.instance=null
class f extends s.a{constructor(e,t,i){super(e,!1,!0),this._curveHelper=new u,this._width=(void 0!==t.width?t.width:5)*i,this._arrowType=void 0!==t.geometricEffectArrowType?t.geometricEffectArrowType:void 0!==t.arrowType?t.arrowType:h,this._offsetFlattenError=.03*i}processPath(e){switch(this._arrowType){case l.j.OpenEnded:default:return this._constructSimpleArrow(e,!0)
case l.j.Block:return this._constructSimpleArrow(e,!1)
case l.j.Crossed:return this._constructCrossedArrow(e)}}_constructSimpleArrow(e,t){const i=this._curveHelper.calculatePathLength(e)
let n=this._width
i<2*n&&(n=i/2)
const r=this._curveHelper.getSubCurve(e,0,i-n)
if(!r)return null
const s=n/2
if(this._curveHelper.isEmpty(r,!1))return null
const o=this._constructOffset(r,-s)
if(!o)return null
const a=this._constructOffset(r,s)
if(!a)return null
const l=this._constructArrowBasePoint(o,-s/2)
if(!l)return null
const u=this._constructArrowBasePoint(a,s/2)
if(!u)return null
const h=e[e.length-1]
t||(this._makeControlPoint(a,!0),this._makeControlPoint(o,!0))
const d=new c
return d.addPath(a,!0),d.lineTo(u),this._makeControlPoint(d.path()),d.lineTo(h),this._makeControlPoint(d.path()),d.lineTo(l),this._makeControlPoint(d.path()),d.addPath(o,!1),t?{paths:[d.path()]}:(d.close(),{rings:[d.path()]})}_constructCrossedArrow(e){const t=this._curveHelper.calculatePathLength(e)
let i=this._width
t<3.732050807568877*i&&(i=t/3.732050807568877)
const n=this._curveHelper.getSubCurve(e,0,t-2.732050807568877*i)
if(!n)return null
const r=i/2
if(this._curveHelper.isEmpty(n,!1))return null
const s=this._constructOffset(n,r)
if(!s)return null
const o=this._constructOffset(n,-r)
if(!o)return null
const a=this._curveHelper.getSubCurve(e,0,t-i)
if(!a)return null
if(this._curveHelper.isEmpty(a,!1))return null
const l=this._constructOffset(a,r)
if(!l)return null
const u=this._constructOffset(a,-r)
if(!u)return null
const h=l[l.length-1],d=this._constructArrowBasePoint(l,r/2)
if(!d)return null
const f=u[u.length-1],_=this._constructArrowBasePoint(u,-r/2)
if(!_)return null
const m=e[e.length-1]
this._makeControlPoint(s,!1),this._makeControlPoint(o,!1)
const p=new c
return p.addPath(s,!0),this._makeControlPoint(p.path()),p.lineTo(f),p.lineTo(_),this._makeControlPoint(p.path()),p.lineTo(m),this._makeControlPoint(p.path()),p.lineTo(d),this._makeControlPoint(p.path()),p.lineTo(h),this._makeControlPoint(p.path()),p.addPath(o,!1),{paths:[p.path()]}}_constructOffset(e,t){return this._curveHelper.offset(e,t,l.m.Rounded,4,this._offsetFlattenError)}_constructArrowBasePoint(e,t){if(!e||e.length<2)return null
const i=e[e.length-2],n=e[e.length-1],r=[n[0]-i[0],n[1]-i[1]]
return this._curveHelper.normalize(r),[n[0]+r[1]*t,n[1]-r[0]*t]}_makeControlPoint(e,t=!1){Object(s.j)(t?e[0]:e[e.length-1],1)}}i(982)
var _,m,p=i(23),g=i(1326),y=i(769)
class x{static local(){return null===x.instance&&(x.instance=new x),x.instance}execute(e,t,i,n,r){return new v(e,t,i,n,r)}}x.instance=null
class v{constructor(e,t,i,n,r){this._inputGeometries=e,this._tileKey=n,this._geometryEngine=r,this._curveHelper=new u,this._size=(void 0!==t.size?t.size:1)*i,this._offsetFlattenError=.03*i}next(){let e
for(;e=this._inputGeometries.next();){if(0===this._size)return e
if(Object(r.d)(e))if(this._size>0){const t=[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]],i=this._curveHelper.offset(t,this._size,l.m.Rounded,4,this._offsetFlattenError)
if(i)return{rings:[i]}}else if(this._size<0&&Math.min(e.xmax-e.xmin,e.ymax-e.ymin)+2*this._size>0)return{xmin:e.xmin-this._size,xmax:e.xmax+this._size,ymin:e.ymin-this._size,ymax:e.ymax+this._size}
const t=this._geometryEngine
if(Object(p.k)(t))return null
let i=e
if((!Object(r.g)(e)||!this._tileKey||(i=Object(g.b)(e,Math.abs(this._size)+1),i&&i.rings&&0!==i.rings.length))&&(!Object(r.h)(e)||!this._tileKey||(i=Object(g.c)(e,Math.abs(this._size)+1),i&&i.paths&&0!==i.paths.length)))return t.buffer(y.default.WebMercator,i,this._size,1)}return null}}class b{static local(){return null===b.instance&&(b.instance=new b),b.instance}execute(e,t,i,n,r){return new O(e,t,i)}}b.instance=null
class O{constructor(e,t,i){var n
this._defaultPointSize=20,this._inputGeometries=e,this._geomUnitsPerPoint=i,this._rule=null!=(n=t.rule)?n:l.k.FullGeometry,this._defaultSize=this._defaultPointSize*i}next(){let e
for(;e=this._inputGeometries.next();){let t
if(Object(r.f)(e)?t=this._processGeom([[[e.x,e.y]]]):Object(r.e)(e)?t=this._processGeom([e.points]):Object(r.h)(e)?t=this._processGeom(e.paths):Object(r.g)(e)&&(t=this._processGeom(e.rings)),t&&t.length)return{paths:t}}return null}_clone(e){return[e[0],e[1]]}_mid(e,t){return[(e[0]+t[0])/2,(e[1]+t[1])/2]}_mix(e,t,i,n){return[e[0]*t+i[0]*n,e[1]*t+i[1]*n]}_add(e,t){return[e[0]+t[0],e[1]+t[1]]}_add2(e,t,i){return[e[0]+t,e[1]+i]}_sub(e,t){return[e[0]-t[0],e[1]-t[1]]}_dist(e,t){return Math.sqrt((e[0]-t[0])*(e[0]-t[0])+(e[1]-t[1])*(e[1]-t[1]))}_norm(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}_normalize(e,t=1){const i=t/this._norm(e)
e[0]*=i,e[1]*=i}_leftPerpendicular(e){const t=-e[1],i=e[0]
e[0]=t,e[1]=i}_leftPerp(e){return[-e[1],e[0]]}_rightPerpendicular(e){const t=e[1],i=-e[0]
e[0]=t,e[1]=i}_rightPerp(e){return[e[1],-e[0]]}_dotProduct(e,t){return e[0]*t[0]+e[1]*t[1]}_crossProduct(e,t){return e[0]*t[1]-e[1]*t[0]}_rotateDirect(e,t,i){const n=e[0]*t-e[1]*i,r=e[0]*i+e[1]*t
e[0]=n,e[1]=r}_makeCtrlPt(e){const t=[e[0],e[1]]
return Object(s.j)(t,1),t}_addAngledTicks(e,t,i,n){const r=this._sub(i,t)
this._normalize(r)
const s=this._crossProduct(r,this._sub(n,t))
let o
o=s>0?this._rightPerp(r):this._leftPerp(r)
const a=Math.abs(s)/2,l=[]
l.push([t[0]+(o[0]-r[0])*a,t[1]+(o[1]-r[1])*a]),l.push(t),l.push(i),l.push([i[0]+(o[0]+r[0])*a,i[1]+(o[1]+r[1])*a]),e.push(l)}_addBezier2(e,t,i,n,r){if(0==r--)return void e.push(n)
const s=this._mid(t,i),o=this._mid(i,n),a=this._mid(s,o)
this._addBezier2(e,t,s,a,r),this._addBezier2(e,a,o,n,r)}_addBezier3(e,t,i,n,r,s){if(0==s--)return void e.push(r)
const o=this._mid(t,i),a=this._mid(i,n),l=this._mid(n,r),c=this._mid(o,a),u=this._mid(a,l),h=this._mid(c,u)
this._addBezier3(e,t,o,c,h,s),this._addBezier3(e,h,u,l,r,s)}_add90DegArc(e,t,i,n,r){const s=null!=r?r:this._crossProduct(this._sub(i,t),this._sub(n,t))>0,o=this._mid(t,i),a=this._sub(o,t)
s?this._leftPerpendicular(a):this._rightPerpendicular(a),o[0]+=a[0],o[1]+=a[1],this._addBezier3(e,t,this._mix(t,.33333,o,.66667),this._mix(i,.33333,o,.66667),i,4)}_addArrow(e,t,i){const n=t[0],r=t[1],s=t[t.length-1],o=this._sub(n,r)
this._normalize(o)
const a=this._crossProduct(o,this._sub(s,r)),l=.5*a,c=this._leftPerp(o),u=[s[0]-c[0]*a,s[1]-c[1]*a],h=t.length-1,d=[]
d.push(i?[-c[0],-c[1]]:c)
let f=[-o[0],-o[1]]
for(let e=1;e<h-1;e++){const i=this._sub(t[e+1],t[e])
this._normalize(i)
const n=this._dotProduct(i,f),r=this._crossProduct(i,f),s=Math.sqrt((1+n)/2),o=this._sub(i,f)
this._normalize(o),o[0]/=s,o[1]/=s,d.push(r<0?[-o[0],-o[1]]:o),f=i}d.push(this._rightPerp(f))
for(let i=d.length-1;i>0;i--)e.push([t[i][0]+d[i][0]*l,t[i][1]+d[i][1]*l])
e.push([u[0]+d[0][0]*l,u[1]+d[0][1]*l]),e.push([u[0]+d[0][0]*a,u[1]+d[0][1]*a]),e.push(n),e.push([u[0]-d[0][0]*a,u[1]-d[0][1]*a]),e.push([u[0]-d[0][0]*l,u[1]-d[0][1]*l])
for(let i=1;i<d.length;i++)e.push([t[i][0]-d[i][0]*l,t[i][1]-d[i][1]*l])}_cp2(e,t,i){return e.length>=2?e[1]:this._add2(e[0],t*this._defaultSize,i*this._defaultSize)}_cp3(e,t,i,n){if(e.length>=3)return e[2]
const r=this._mix(e[0],1-i,t,i),s=this._sub(t,e[0])
return this._normalize(s),this._rightPerpendicular(s),[r[0]+s[0]*n*this._defaultSize,r[1]+s[1]*n*this._defaultSize]}_arrowPath(e){if(e.length>2)return e
const t=e[0],i=this._cp2(e,-4,0),n=this._sub(t,i)
this._normalize(n)
const r=this._rightPerp(n)
return[t,i,[t[0]+(r[0]-n[0])*this._defaultSize,t[1]+(r[1]-n[1])*this._defaultSize]]}_arrowLastSeg(e){const t=e[0],i=this._cp2(e,-4,0)
let n
if(e.length>=3)n=e[e.length-1]
else{const e=this._sub(t,i)
this._normalize(e)
const r=this._rightPerp(e)
n=[t[0]+(r[0]-e[0])*this._defaultSize,t[1]+(r[1]-e[1])*this._defaultSize]}return[i,n]}_processGeom(e){if(!e)return null
const t=[]
for(const i of e){if(!i||0===i.length)continue
const e=i.length
let n=i[0]
switch(this._rule){case l.k.PerpendicularFromFirstSegment:{const e=this._cp2(i,0,-1),r=this._cp3(i,e,.5,4),s=[]
s.push(r),s.push(this._mid(n,e)),t.push(s)
break}case l.k.ReversedFirstSegment:{const e=this._cp2(i,0,-1)
t.push([e,n])
break}case l.k.PerpendicularToSecondSegment:{const e=this._cp2(i,-4,1),r=this._cp3(i,e,.882353,-1.94),s=[]
s.push(this._mid(e,r)),s.push(n),t.push(s)
break}case l.k.SecondSegmentWithTicks:{const e=this._cp2(i,-4,1),r=this._cp3(i,e,.882353,-1.94),s=this._sub(r,e)
let o
o=this._crossProduct(s,this._sub(n,e))>0?this._rightPerp(o):this._leftPerp(s)
const a=[]
a.push([e[0]+(o[0]-s[0])/3,e[1]+(o[1]-s[1])/3]),a.push(e),a.push(r),a.push([r[0]+(o[0]+s[0])/3,r[1]+(o[1]+s[1])/3]),t.push(a)
break}case l.k.DoublePerpendicular:{const e=this._cp2(i,0,-1),r=this._cp3(i,e,.5,3),s=this._mid(n,e),o=this._sub(s,r)
this._normalize(o)
const a=this._crossProduct(o,this._sub(n,r))
this._leftPerpendicular(o)
const l=[]
l.push(n),l.push([r[0]+o[0]*a,r[1]+o[1]*a]),t.push(l)
const c=[]
c.push([r[0]-o[0]*a,r[1]-o[1]*a]),c.push(e),t.push(c)
break}case l.k.OppositeToFirstSegment:{const e=this._cp2(i,0,-1),r=this._cp3(i,e,.5,3),s=this._mid(n,e),o=this._sub(s,r)
this._normalize(o)
const a=this._crossProduct(o,this._sub(n,r))
this._leftPerpendicular(o)
const l=[]
l.push([r[0]+o[0]*a,r[1]+o[1]*a]),l.push([r[0]-o[0]*a,r[1]-o[1]*a]),t.push(l)
break}case l.k.TriplePerpendicular:{const e=this._cp2(i,0,-1),r=this._cp3(i,e,.5,4),s=this._mid(n,e),o=this._sub(s,r)
this._normalize(o)
const a=this._crossProduct(o,this._sub(n,r))
this._leftPerpendicular(o)
const l=[]
l.push([r[0]+o[0]*a*.8,r[1]+o[1]*a*.8]),l.push([s[0]+.8*(n[0]-s[0]),s[1]+.8*(n[1]-s[1])]),t.push(l),t.push([r,s])
const c=[]
c.push([r[0]-o[0]*a*.8,r[1]-o[1]*a*.8]),c.push([s[0]+.8*(e[0]-s[0]),s[1]+.8*(e[1]-s[1])]),t.push(c)
break}case l.k.HalfCircleFirstSegment:{const e=this._cp2(i,0,-1),r=this._cp3(i,e,.5,4),s=this._mid(n,e)
let o=this._sub(e,n)
const a=Math.cos(Math.PI/18),l=Math.sin(Math.PI/18),c=Math.sqrt((1+a)/2),u=Math.sqrt((1-a)/2),h=[]
let d
this._crossProduct(o,this._sub(r,n))>0?(h.push(n),o=this._sub(n,s),d=e):(h.push(e),o=this._sub(e,s),d=n),this._rotateDirect(o,c,u),o[0]/=c,o[1]/=c
for(let e=1;e<=18;e++)h.push(this._add(s,o)),this._rotateDirect(o,a,l)
h.push(d),t.push(h)
break}case l.k.HalfCircleSecondSegment:{const e=this._cp2(i,0,-1),r=this._cp3(i,e,1,-1)
let s=this._sub(n,e)
this._normalize(s)
const o=this._crossProduct(s,this._sub(r,e))/2
this._leftPerpendicular(s)
const a=[e[0]+s[0]*o,e[1]+s[1]*o]
s=this._sub(e,a)
const l=Math.cos(Math.PI/18)
let c=Math.sin(Math.PI/18)
o>0&&(c=-c)
const u=[e]
for(let e=1;e<=18;e++)this._rotateDirect(s,l,c),u.push(this._add(a,s))
t.push(u)
break}case l.k.HalfCircleExtended:{const r=this._cp2(i,0,-2),s=this._cp3(i,r,1,-1)
let o
if(e>=4)o=i[3]
else{const e=this._sub(n,r)
o=this._add(s,e)}const a=this._dist(r,s)/2/.75,l=this._sub(r,n)
this._normalize(l,a)
const c=this._sub(s,o)
this._normalize(c,a)
const u=[o,s]
t.push(u)
const h=[this._clone(s)]
this._addBezier3(h,s,this._add(s,c),this._add(r,l),r,4),h.push(n),t.push(h)
break}case l.k.OpenCircle:{const e=this._cp2(i,-2,0),r=this._sub(e,n),s=Math.cos(Math.PI/18),o=-Math.sin(Math.PI/18),a=[e]
for(let e=1;e<=33;e++)this._rotateDirect(r,s,o),a.push(this._add(n,r))
t.push(a)
break}case l.k.CoverageEdgesWithTicks:{const r=this._cp2(i,0,-1)
let s,o
if(e>=3)s=i[2]
else{const e=this._sub(r,n),t=this._leftPerp(e)
s=[n[0]+t[0]-.25*e[0],n[1]+t[1]-.25*e[1]]}if(e>=4)o=i[3]
else{const e=this._mid(n,r),t=this._sub(n,r)
this._normalize(t),this._leftPerpendicular(t)
const i=this._crossProduct(t,this._sub(s,e))
this._rightPerpendicular(t),o=[s[0]+t[0]*i*2,s[1]+t[1]*i*2]}const a=this._sub(r,n)
let l,c
l=this._crossProduct(a,this._sub(s,n))>0?this._rightPerp(a):this._leftPerp(a),c=[],c.push(s),c.push(n),c.push([n[0]+(l[0]-a[0])/3,n[1]+(l[1]-a[1])/3]),t.push(c),l=this._crossProduct(a,this._sub(o,r))>0?this._rightPerp(l):this._leftPerp(a),c=[],c.push([r[0]+(l[0]+a[0])/3,r[1]+(l[1]+a[1])/3]),c.push(r),c.push(o),t.push(c)
break}case l.k.GapExtentWithDoubleTicks:{const r=this._cp2(i,0,2),s=this._cp3(i,r,0,1)
let o
if(e>=4)o=i[3]
else{const e=this._sub(r,n)
o=this._add(s,e)}this._addAngledTicks(t,n,r,this._mid(s,o)),this._addAngledTicks(t,s,o,this._mid(n,r))
break}case l.k.GapExtentMidline:{const r=this._cp2(i,2,0),s=this._cp3(i,r,0,1)
let o
if(e>=4)o=i[3]
else{const e=this._sub(r,n)
o=this._add(s,e)}const a=[]
a.push(this._mid(n,s)),a.push(this._mid(r,o)),t.push(a)
break}case l.k.Chevron:{const r=this._cp2(i,-1,-1)
let s
if(e>=3)s=i[2]
else{const e=this._sub(r,n)
this._leftPerpendicular(e),s=this._add(n,e)}t.push([r,this._makeCtrlPt(n),s])
break}case l.k.PerpendicularWithArc:{const e=this._cp2(i,0,-2),r=this._cp3(i,e,.5,-1)
let s=this._sub(e,n)
const o=this._norm(s)
s[0]/=o,s[1]/=o
const a=this._crossProduct(s,this._sub(r,n))
let l=this._dotProduct(s,this._sub(r,n))
l<.05*o?l=.05*o:l>.95*o&&(l=.95*o)
const c=[n[0]+s[0]*l,n[1]+s[1]*l]
this._leftPerpendicular(s)
let u=[]
u.push([c[0]-s[0]*a,c[1]-s[1]*a]),u.push([c[0]+s[0]*a,c[1]+s[1]*a]),t.push(u)
const h=[e[0]+s[0]*a,e[1]+s[1]*a]
s=this._sub(e,h)
const d=Math.cos(Math.PI/18)
let f=Math.sin(Math.PI/18)
a<0&&(f=-f),u=[n,e]
for(let e=1;e<=9;e++)this._rotateDirect(s,d,f),u.push(this._add(h,s))
t.push(u)
break}case l.k.ClosedHalfCircle:{const e=this._cp2(i,2,0),r=this._mid(n,e),s=this._sub(e,r),o=Math.cos(Math.PI/18),a=Math.sin(Math.PI/18),l=[n,e]
for(let e=1;e<=18;e++)this._rotateDirect(s,o,a),l.push(this._add(r,s))
t.push(l)
break}case l.k.TripleParallelExtended:{const e=this._cp2(i,0,-2),r=this._cp3(i,e,1,-2),o=this._mid(n,e),a=this._sub(r,e)
this._normalize(a)
const l=Math.abs(this._crossProduct(a,this._sub(o,e)))/2,c=this._dist(e,r),u=[e,n]
u.push([n[0]+a[0]*c*.5,n[1]+a[1]*c*.5]),t.push(u)
const h=[]
h.push([o[0]-a[0]*l,o[1]-a[1]*l]),h.push([o[0]+a[0]*c*.375,o[1]+a[1]*c*.375]),Object(s.j)(h[h.length-1],1),h.push([o[0]+a[0]*c*.75,o[1]+a[1]*c*.75]),t.push(h)
const d=[e,r]
t.push(d)
break}case l.k.ParallelWithTicks:{const e=this._cp2(i,3,0),r=this._cp3(i,e,.5,-1),s=this._sub(r,e)
this._normalize(s)
const o=this._crossProduct(s,this._sub(r,n))
this._leftPerpendicular(s),this._addAngledTicks(t,n,e,r),this._addAngledTicks(t,this._mix(n,1,s,o),this._mix(e,1,s,o),this._mid(n,e))
break}case l.k.Parallel:{const e=this._cp2(i,3,0),r=this._cp3(i,e,.5,-1),s=this._sub(e,n)
this._normalize(s)
const o=this._leftPerp(s),a=this._crossProduct(s,this._sub(r,n))
let l=[n,e]
t.push(l),l=[],l.push([n[0]+o[0]*a,n[1]+o[1]*a]),l.push([e[0]+o[0]*a,e[1]+o[1]*a]),t.push(l)
break}case l.k.PerpendicularToFirstSegment:{const e=this._cp2(i,3,0),r=this._cp3(i,e,.5,-1),s=this._mid(n,e),o=this._sub(e,n)
this._normalize(o)
const a=this._crossProduct(o,this._sub(r,n))
this._leftPerpendicular(o)
const l=[]
l.push([s[0]-o[0]*a*.25,s[1]-o[1]*a*.25]),l.push([s[0]+o[0]*a*1.25,s[1]+o[1]*a*1.25]),t.push(l)
break}case l.k.ParallelOffset:{const e=this._cp2(i,3,0),r=this._cp3(i,e,.5,-1),s=this._sub(e,n)
this._normalize(s)
const o=this._crossProduct(s,this._sub(r,n))
this._leftPerpendicular(s)
const a=[]
a.push([n[0]-s[0]*o,n[1]-s[1]*o]),a.push([e[0]-s[0]*o,e[1]-s[1]*o]),t.push(a)
const l=[]
l.push([n[0]+s[0]*o,n[1]+s[1]*o]),l.push([e[0]+s[0]*o,e[1]+s[1]*o]),t.push(l)
break}case l.k.OffsetOpposite:{const e=this._cp2(i,3,0),r=this._cp3(i,e,.5,-1),s=this._sub(e,n)
this._normalize(s)
const o=this._crossProduct(s,this._sub(r,n))
this._leftPerpendicular(s)
const a=[]
a.push([n[0]-s[0]*o,n[1]-s[1]*o]),a.push([e[0]-s[0]*o,e[1]-s[1]*o]),t.push(a)
break}case l.k.OffsetSame:{const e=this._cp2(i,3,0),r=this._cp3(i,e,.5,-1),s=this._sub(e,n)
this._normalize(s)
const o=this._crossProduct(s,this._sub(r,n))
this._leftPerpendicular(s)
const a=[]
a.push([n[0]+s[0]*o,n[1]+s[1]*o]),a.push([e[0]+s[0]*o,e[1]+s[1]*o]),t.push(a)
break}case l.k.CircleWithArc:{let r=this._cp2(i,3,0)
const o=this._cp3(i,r,.5,-1)
let a,l
if(e>=4)a=i[3],l=this._crossProduct(this._sub(a,r),this._sub(o,r))>0
else{a=r,l=this._crossProduct(this._sub(a,n),this._sub(o,n))>0
const e=24*this._geomUnitsPerPoint,t=this._sub(a,n)
this._normalize(t,e)
const i=Math.sqrt(2)/2
this._rotateDirect(t,i,l?i:-i),r=this._add(n,t)}const c=this._sub(r,n),u=Math.cos(Math.PI/18),h=Math.sin(Math.PI/18),d=[r]
for(let e=1;e<=36;e++)this._rotateDirect(c,u,h),d.push(this._add(n,c))
this._add90DegArc(d,r,a,o,l),Object(s.j)(d[d.length-8],1),t.push(d)
break}case l.k.DoubleJog:{let r,s,o=this._cp2(i,-3,1)
if(r=e>=3?i[2]:this._add(n,this._sub(n,o)),e>=4)s=i[3]
else{const e=n
n=o,s=r
const t=this._dist(n,e),i=this._dist(s,e)
let a=30*this._geomUnitsPerPoint;.5*t<a&&(a=.5*t),.5*i<a&&(a=.5*i),o=this._mix(n,a/t,e,(t-a)/t),r=this._mix(s,a/i,e,(i-a)/i)}const a=this._mid(n,o),l=this._mid(s,r),c=this._dist(n,o),u=this._dist(r,s)
let h=Math.min(c,u)/8
h=Math.min(h,24*this._geomUnitsPerPoint)
const d=Math.cos(Math.PI/4)
let f=this._sub(n,o)
this._normalize(f,h),this._crossProduct(f,this._sub(s,o))>0?this._rotateDirect(f,d,-d):this._rotateDirect(f,d,d)
let _=[]
_.push(o),_.push(this._add(a,f)),_.push(this._sub(a,f)),_.push(n),t.push(_),f=this._sub(s,r),this._normalize(f,h),this._crossProduct(f,this._sub(n,r))<0?this._rotateDirect(f,d,d):this._rotateDirect(f,d,-d),_=[],_.push(r),_.push(this._add(l,f)),_.push(this._sub(l,f)),_.push(s),t.push(_)
break}case l.k.PerpendicularOffset:{const e=this._cp2(i,-4,1),r=this._cp3(i,e,.882353,-1.94),s=this._sub(r,e)
this._crossProduct(s,this._sub(n,e))>0?this._rightPerpendicular(s):this._leftPerpendicular(s)
const o=[s[0]/8,s[1]/8],a=this._sub(this._mid(e,r),o)
t.push([a,n])
break}case l.k.LineExcludingLastSegment:{const e=this._arrowPath(i),n=[]
let r=e.length-2
for(;r--;)n.push(e[r])
t.push(n)
break}case l.k.MultivertexArrow:{const e=this._arrowPath(i),n=[]
this._addArrow(n,e,!1),t.push(n)
break}case l.k.CrossedArrow:{const e=this._arrowPath(i),n=[]
this._addArrow(n,e,!0),t.push(n)
break}case l.k.ChevronArrow:{const[e,r]=this._arrowLastSeg(i),s=10*this._geomUnitsPerPoint,o=this._sub(n,e)
this._normalize(o)
const a=this._crossProduct(o,this._sub(r,e)),l=this._leftPerp(o),c=[r[0]-l[0]*a*2,r[1]-l[1]*a*2],u=[]
u.push([r[0]+o[0]*s,r[1]+o[1]*s]),u.push(n),u.push([c[0]+o[0]*s,c[1]+o[1]*s]),t.push(u)
break}case l.k.ChevronArrowOffset:{const[e,r]=this._arrowLastSeg(i),s=this._sub(n,e)
this._normalize(s)
const o=this._crossProduct(s,this._sub(r,e))
this._leftPerpendicular(s)
const a=[r[0]-s[0]*o,r[1]-s[1]*o],l=[]
l.push([a[0]+s[0]*o*.5,a[1]+s[1]*o*.5]),l.push(this._mid(a,n)),l.push([a[0]-s[0]*o*.5,a[1]-s[1]*o*.5]),t.push(l)
break}case l.k.PartialFirstSegment:{const[e,r]=this._arrowLastSeg(i),s=this._sub(n,e)
this._normalize(s)
const o=this._crossProduct(s,this._sub(r,e))
this._leftPerpendicular(s)
const a=[r[0]-s[0]*o,r[1]-s[1]*o]
t.push([e,a])
break}case l.k.Arch:{const e=this._cp2(i,0,-1),r=this._cp3(i,e,.5,1),s=this._sub(n,e),o=this._mix(r,1,s,.55),a=this._mix(r,1,s,-.55),l=[n]
this._addBezier2(l,n,o,r,4),this._addBezier2(l,r,a,e,4),t.push(l)
break}case l.k.CurvedParallelTicks:{const e=this._cp2(i,-4,1),r=this._cp3(i,e,.882353,-1.94),s=this._sub(r,e)
this._crossProduct(s,this._sub(n,e))>0?this._rightPerpendicular(s):this._leftPerpendicular(s)
const o=[s[0]/8,s[1]/8],a=this._sub(this._mid(e,r),o),l=this._sub(this._mix(e,.75,r,.25),o),c=this._sub(this._mix(e,.25,r,.75),o),u=[e]
this._addBezier2(u,e,l,a,3),this._addBezier2(u,a,c,r,3),t.push(u)
for(let e=0;e<8;e++){const i=u[2*e+1],n=[this._clone(i)]
n.push(this._add(i,[s[0]/4,s[1]/4])),t.push(n)}break}case l.k.Arc90Degrees:{const e=this._cp2(i,0,-1),r=this._cp3(i,e,.5,1),s=[e]
this._add90DegArc(s,e,n,r),t.push(s)
break}case l.k.FullGeometry:default:t.push(i)}}return t}}class S{static local(){return null===S.instance&&(S.instance=new S),S.instance}execute(e,t,i,n,r){return new T(e,t,i)}}S.instance=null
class T extends s.a{constructor(e,t,i){super(e,!0,!0),this._curveHelper=new u,this._beginCut=(void 0!==t.beginCut?t.beginCut:1)*i,this._endCut=(void 0!==t.endCut?t.endCut:1)*i,this._middleCut=(void 0!==t.middleCut?t.middleCut:0)*i,this._invert=void 0!==t.invert&&t.invert,this._beginCut<0&&(this._beginCut=0),this._endCut<0&&(this._endCut=0),this._middleCut<0&&(this._middleCut=0)}processPath(e){const t=this._beginCut,i=this._endCut,n=this._middleCut,r=this._curveHelper.calculatePathLength(e),s=[]
if(this._invert)if(0===t&&0===i&&0===n);else if(t+i+n>=r)s.push(e)
else{let o=this._curveHelper.getSubCurve(e,0,t)
o&&s.push(o),o=this._curveHelper.getSubCurve(e,.5*(r-n),.5*(r+n)),o&&s.push(o),o=this._curveHelper.getSubCurve(e,r-i,i),o&&s.push(o)}else if(0===t&&0===i&&0===n)s.push(e)
else if(t+i+n>=r);else if(0===n){const n=this._curveHelper.getSubCurve(e,t,r-i)
n&&s.push(n)}else{let o=this._curveHelper.getSubCurve(e,t,.5*(r-n))
o&&s.push(o),o=this._curveHelper.getSubCurve(e,.5*(r+n),r-i),o&&s.push(o)}return 0===s.length?null:{paths:s}}}class C{constructor(){this._values=[],this.extPtGap=0,this.ctrlPtGap=0,this._length=0,this._currentValue=0}isEmpty(){return 0===this._values.length}size(){return this._values.length}init(e,t,i=!0){if(this._setEmpty(),!e||0===e.length)return!1
for(let t=0;t<e.length;t++){let n=Math.abs(e[t])
i&&n<1e-7&&(n=1e-7),this._values.push(n),this._length+=n}return t&&1&e.length&&(this._length*=2),0!==this._length&&(this.ctrlPtGap=this.extPtGap=0,this._currentValue=-1,!0)}scale(e){const t=this._values?this._values.length:0
for(let i=0;i<t;++i)this._values[i]*=e
this._length*=e,this.extPtGap*=e,this.ctrlPtGap*=e}addValue(e){this._length+=e,this._values.push(e)}firstValue(){return this._values[0]}lastValue(){return this._values[this._values.length-1]}nextValue(){return this._currentValue++,this._currentValue===this._values.length&&(this._currentValue=0),this._values[this._currentValue]}reset(){this._currentValue=-1}length(){return this._length}_setEmpty(){this.extPtGap=this.ctrlPtGap=this._length=0,this._currentValue=-1,this._values.length=0}}class w{constructor(){this.pt=null,this.ca=0,this.sa=0}}(m=_||(_={}))[m.FAIL=0]="FAIL",m[m.END=1]="END",m[m.CONTINUE=2]="CONTINUE"
class M{constructor(){this.reset()}reset(){this.segment=-1,this.segmentLength=0,this.abscissa=0,this.isPathEnd=!1,this.isPartEnd=!1}isValid(){return-1!==this.segment}copyTo(e){e.segment=this.segment,e.segmentLength=this.segmentLength,e.abscissa=this.abscissa,e.isPathEnd=this.isPathEnd,e.isPartEnd=this.isPartEnd}}class I extends u{constructor(e=0,t=!1){super(e,t),this._tolerance=.03,this._currentPosition=new M}updateTolerance(e){this._tolerance=.03*e}init(e,t,i=!0){return i?(this._patternLength=t.length(),this._partExtPtGap=t.extPtGap,this._partCtrlPtGap=t.ctrlPtGap):(this._patternLength=0,this._partExtPtGap=0,this._partCtrlPtGap=0),this._currentPosition.reset(),this._partSegCount=0,this._path=e,this._seg=-1,this._setPosAtNextPart()}curPositionIsValid(){return this._currentPosition.isValid()}nextPosition(e,t=_.FAIL){const i=new M
return!!this._nextPosition(e,i,null,t)&&(i.copyTo(this._currentPosition),!0)}curPointAndAngle(e){e.pt=this._getPoint(this._currentPosition)
const[t,i]=this._getAngle(this._currentPosition)
e.ca=t,e.sa=i}nextPointAndAngle(e,t,i=_.FAIL){const n=new M
if(!this._nextPosition(e,n,null,i))return!1
n.copyTo(this._currentPosition),t.pt=this._getPoint(n)
const[r,s]=this._getAngle(n)
return t.ca=r,t.sa=s,!0}nextCurve(e){if(0===e)return null
const t=[],i=new M
return this._nextPosition(e,i,t,_.END)?(i.copyTo(this._currentPosition),t):null}isPathEnd(){return this._currentPosition.isPathEnd}getPathEnd(){if(-1===this._currentPosition.segment)throw new Error("missing segment")
return this._path[this._currentPosition.segment+1]}_nextPosition(e,t,i,n){if(this._currentPosition.isPathEnd)return!1
let r=this._currentPosition.abscissa
for(this._currentPosition.segmentLength>0&&(r/=this._currentPosition.segmentLength),this._currentPosition.copyTo(t);t.abscissa+e*this._partLengthRatio>t.segmentLength+this._tolerance;){if(i){if(0===i.length)if(0===r){const e=this._path[t.segment]
i.push([e[0],e[1]])}else i.push(this.getSegCoord2D(this._path,t.segment,r))
const e=this._path[t.segment+1]
i.push([e[0],e[1]])}if(r=0,e-=(t.segmentLength-t.abscissa)/this._partLengthRatio,this._partSegCount)t.segment=this._nextSegment(),t.segmentLength=this.calculateSegLength(this._path,t.segment),t.abscissa=0,this._partSegCount--
else{if(!this._setPosAtNextPart())return n!==_.FAIL&&(t.segmentLength=this.calculateSegLength(this._path,t.segment),t.isPartEnd=!0,n===_.END?(t.abscissa=t.segmentLength,t.isPathEnd=!0):t.abscissa=t.segmentLength+e,!0)
this._currentPosition.copyTo(t)}}if(t.abscissa+=e*this._partLengthRatio,i){if(0===i.length)if(0===r){const e=this._path[t.segment]
i.push([e[0],e[1]])}else i.push(this.getSegCoord2D(this._path,t.segment,r))
const e=t.abscissa/t.segmentLength
if(1===e){const e=this._path[t.segment+1]
i.push([e[0],e[1]])}else i.push(this.getSegCoord2D(this._path,t.segment,e))}return this._partSegCount||Math.abs(t.abscissa-t.segmentLength)<this._tolerance&&(t.isPathEnd=this._partIsLast,t.isPartEnd=!0),!0}_getPoint(e){if(-1===e.segment)throw new Error("missing segment")
const t=e.segmentLength<=0?0:e.abscissa/e.segmentLength
return this.getSegCoord2D(this._path,e.segment,t)}_getAngle(e){if(-1===e.segment)throw new Error("missing segment")
const t=e.segmentLength<=0?0:e.abscissa/e.segmentLength
return this.getSegAngleCS(this._path,e.segment,t)}_setPosAtNextPart(){for(;this._partSegCount;)this._hasNextSegment()&&this._nextSegment(),this._partSegCount--
if(!this._hasNextSegment())return!1
for(this._partLength=0,this._partIsLast=!0,this._partSegCount=0;this._hasNextSegment();)if(this._partLength+=this.calculateSegLength(this._path,this._nextSegment()),this._partSegCount++,1===Object(s.f)(this._path[this._getEndPointIndex()])){this._partIsLast=!this._hasNextSegment()
break}let e=this._partSegCount
for(;e;)this._previousSegment(),--e
this._currentPosition.segment=this._nextSegment(),this._currentPosition.segmentLength=this.calculateSegLength(this._path,this._currentPosition.segment),this._currentPosition.abscissa=0,this._currentPosition.isPathEnd=this._currentPosition.isPartEnd=!1,--this._partSegCount
const t=this._getStartPointIndex()
this._ctrlPtBegin=1===Object(s.f)(this._path[t])
let i=t+this._partSegCount+1
if(i>=this._path.length&&(i=0),this._ctrlPtEnd=1===Object(s.f)(this._path[i]),this._patternLength>0){const e=this._ctrlPtBegin?this._partCtrlPtGap:this._partExtPtGap,t=this._ctrlPtEnd?this._partCtrlPtGap:this._partExtPtGap
let i=Math.round((this._partLength-(e+t))/this._patternLength)
i<=0&&(i=e+t>0?0:1),this._partLengthRatio=this._partLength/(e+t+i*this._patternLength),this._partLengthRatio<.01&&(this._partLengthRatio=1)}else this._partLengthRatio=1
return!0}_hasNextSegment(){return this._seg<this._path.length-2}_previousSegment(){return--this._seg}_nextSegment(){return++this._seg}_getStartPointIndex(){return this._seg}_getEndPointIndex(){return this._seg+1}}class P{static local(){return null===P.instance&&(P.instance=new P),P.instance}execute(e,t,i,n,r){return new E(e,t,i)}}P.instance=null
class E extends s.a{constructor(e,t,i){var n,r
super(e,!0,!0),this._firstCurve=null,this._walker=new I,this._walker.updateTolerance(i),this._endings=t.lineDashEnding,this._customDashPos=-(null!=(n=t.offsetAlongLine)?n:0)*i,this._offsetAtEnd=(null!=(r=t.customEndingOffset)?r:0)*i,this._pattern=new C,this._pattern.init(t.dashTemplate,!0),this._pattern.scale(i)}processPath(e){if(0===this._pattern.length())return this.iteratePath=!1,{paths:[e]}
if(!this.iteratePath){let t=!0
switch(this._endings){case l.r.HalfPattern:case l.r.HalfGap:default:this._pattern.extPtGap=0
break
case l.r.FullPattern:this.isClosed||(this._pattern.extPtGap=.5*this._pattern.firstValue())
break
case l.r.FullGap:this.isClosed||(this._pattern.extPtGap=.5*this._pattern.lastValue())
break
case l.r.NoConstraint:this.isClosed||(t=!1)
break
case l.r.Custom:this.isClosed||(this._pattern.extPtGap=.5*this._offsetAtEnd)}const i=this._walker.calculatePathLength(e)
if(this._pattern.isEmpty()||i<.1*this._pattern.length())return{paths:[e]}
if(!this._walker.init(e,this._pattern,t))return{paths:[e]}}let t
if(this.iteratePath)t=this._pattern.nextValue()
else{let e
switch(this._endings){case l.r.HalfPattern:default:e=.5*this._pattern.firstValue()
break
case l.r.HalfGap:e=.5*-this._pattern.lastValue()
break
case l.r.FullGap:e=-this._pattern.lastValue()
break
case l.r.FullPattern:e=0
break
case l.r.NoConstraint:case l.r.Custom:e=-this._customDashPos}let i=e/this._pattern.length()
i-=Math.floor(i),e=i*this._pattern.length(),this._pattern.reset(),t=this._pattern.nextValue()
let n=!1
for(;e>=t;)e-=t,t=this._pattern.nextValue(),n=!n
t-=e,n?(this._walker.nextPosition(t),t=this._pattern.nextValue()):this.isClosed&&(this._firstCurve=this._walker.nextCurve(t),t=this._pattern.nextValue(),this._walker.nextPosition(t),t=this._pattern.nextValue())}let i=this._walker.nextCurve(t)
return i?this._walker.isPathEnd()?(this.iteratePath=!1,this._firstCurve&&(this._firstCurve.splice(0,1),c.mergePath(i,this._firstCurve),this._firstCurve=null)):(t=this._pattern.nextValue(),!this._walker.nextPosition(t)||this._walker.isPathEnd()?(this.iteratePath=!1,this._firstCurve&&(i=this._firstCurve,this._firstCurve=null)):this.iteratePath=!0):(this.iteratePath=!1,i=this._firstCurve,this._firstCurve=null),{paths:[i]}}}class L{static local(){return null===L.instance&&(L.instance=new L),L.instance}execute(e,t,i,n,r){return new A(e,t,i,n,r)}}L.instance=null
class A{constructor(e,t,i,n,r){switch(this._inputGeometries=e,this._tileKey=n,this._geometryEngine=r,this._width=(void 0!==t.width?t.width:2)*i,t.method){case l.l.Mitered:case l.l.Bevelled:case l.l.Rounded:case l.l.TrueBuffer:case l.l.Square:}this._option=t.option}next(){let e
for(;e=this._inputGeometries.next();){if(Object(r.d)(e)&&this._width>0){if(Math.min(e.xmax-e.xmin,e.ymax-e.ymin)-2*this._width<0)return e
const t=[]
return t.push([[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]),t.push([[e.xmin+this._width,e.ymin+this._width],[e.xmax-this._width,e.ymin+this._width],[e.xmax-this._width,e.ymax-this._width],[e.xmin+this._width,e.ymax-this._width],[e.xmin+this._width,e.ymin+this._width]]),{rings:t}}if(Object(r.g)(e)){let t=null
const i=this._geometryEngine
let n=e
if(this._tileKey&&(n=Object(g.b)(e,Math.abs(this._width)+1),!n||!n.rings||0===n.rings.length))continue
if(Object(p.l)(i)&&(t=i.buffer(y.default.WebMercator,n,-this._width,1)),this._width>0){const i=[]
for(const t of e.rings)t&&i.push(t)
if(t)for(const e of t.rings)e&&i.push(e.reverse())
if(i.length)return{rings:i}}}}return null}}class j{static local(){return null===j.instance&&(j.instance=new j),j.instance}execute(e,t,i,n,r){return new R(e,t,i)}}j.instance=null
class R extends s.a{constructor(e,t,i){super(e,!1,!0),this._curveHelper=new u,this._length=(void 0!==t.length?t.length:20)*i,this._angle=void 0!==t.angle?t.angle:225,this._position=void 0!==t.position?t.position:50,this._length<0&&(this._length=-this._length),this._position<20&&(this._position=20),this._position>80&&(this._position=80),this._mirror=!1}processPath(e){if(this._curveHelper.isEmpty(e,!1))return null
const t=e[0],i=e[e.length-1],n=[i[0]-t[0],i[1]-t[1]]
this._curveHelper.normalize(n)
const r=[t[0]+(i[0]-t[0])*this._position/100,t[1]+(i[1]-t[1])*this._position/100],s=Math.cos((90-this._angle)/180*Math.PI)
let o=Math.sin((90-this._angle)/180*Math.PI)
return this._mirror&&(o=-o),this._mirror=!this._mirror,{paths:[[t,[r[0]-this._length/2*s,r[1]-this._length/2*o],[r[0]+this._length/2*s,r[1]+this._length/2*o],i]]}}}class D{static local(){return null===D.instance&&(D.instance=new D),D.instance}execute(e,t,i,n,r){return new z(e,t,i)}}D.instance=null
class z{constructor(e,t,i){this._inputGeometries=e,this._offsetX=void 0!==t.offsetX?t.offsetX*i:0,this._offsetY=void 0!==t.offsetY?-t.offsetY*i:0}next(){let e=this._inputGeometries.next()
for(;e;){if(Object(r.d)(e))return{xmin:e.xmin+this._offsetX,xmax:e.xmax+this._offsetX,ymin:e.ymin+this._offsetY,ymax:e.ymax+this._offsetY}
if(Object(r.g)(e)){const t=Object(n.a)(e)
return this._moveMultipath(t.rings,this._offsetX,this._offsetY),t}if(Object(r.h)(e)){const t=Object(n.a)(e)
return this._moveMultipath(t.paths,this._offsetX,this._offsetY),t}if(Object(r.e)(e)){const t=Object(n.a)(e)
return this._movePath(t.points,this._offsetX,this._offsetY),t}if(Object(r.f)(e))return{x:e.x+this._offsetX,y:e.y+this._offsetY}
e=this._inputGeometries.next()}return null}_moveMultipath(e,t,i){if(e)for(const n of e)this._movePath(n,t,i)}_movePath(e,t,i){if(e)for(const n of e)n[0]+=t,n[1]+=i}}class F{static local(){return null===F.instance&&(F.instance=new F),F.instance}execute(e,t,i,n,r){return new k(e,t,i,n,r)}}F.instance=null
class k{constructor(e,t,i,n,r){var s
this._inputGeometries=e,this._tileKey=n,this._geometryEngine=r,this._curveHelper=new u,this._offset=(null!=(s=t.offset)?s:1)*i,this._method=t.method,this._option=t.option,this._offsetFlattenError=.03*i}next(){let e
for(;e=this._inputGeometries.next();){if(0===this._offset)return e
if(Object(r.d)(e)){if(this._method===l.m.Rounded&&this._offset>0){const t=[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]],i=this._curveHelper.offset(t,-this._offset,this._method,4,this._offsetFlattenError)
return i?{rings:[i]}:null}if(Math.min(e.xmax-e.xmin,e.ymax-e.ymin)+2*this._offset>0)return{xmin:e.xmin-this._offset,xmax:e.xmax+this._offset,ymin:e.ymin-this._offset,ymax:e.ymax+this._offset}}const t=this._geometryEngine
if(Object(p.k)(t))return null
let i=e
if(Object(r.g)(e)){if(this._tileKey&&(i=Object(g.b)(e,Math.abs(this._offset)+1),!i||!i.rings||0===i.rings.length))continue}else if(Object(r.h)(e)&&this._tileKey&&(i=Object(g.c)(e,Math.abs(this._offset)+1),!i||!i.paths||0===i.paths.length))continue
return t.offset(y.default.WebMercator,i,-this._offset,1,this._method,4,this._offsetFlattenError)}return null}}class N{static local(){return null===N.instance&&(N.instance=new N),N.instance}execute(e,t,i,n,r){return new V(e,t,i)}}N.instance=null
class V{constructor(e,t,i){this._inputGeometries=e,this._reverse=void 0===t.reverse||t.reverse}next(){let e=this._inputGeometries.next()
for(;e;){if(!this._reverse)return e
if(Object(r.h)(e)){const t=Object(n.a)(e)
return Object(s.h)(t.paths),t}e=this._inputGeometries.next()}return null}}var B=i(996),U=i(1079)
class G{static local(){return null===G.instance&&(G.instance=new G),G.instance}execute(e,t,i,n,r){return new H(e,t,i)}}G.instance=null
class H{constructor(e,t,i){this._inputGeometries=e,this._rotateAngle=void 0!==t.angle?t.angle*Math.PI/180:0}next(){let e=this._inputGeometries.next()
for(;e;){if(0===this._rotateAngle)return e
const t=Object(B.m)()
Object(U.a)(t,e)
const i=(t[2]+t[0])/2,s=(t[3]+t[1])/2
if(Object(r.d)(e)){const t={rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]}
return this._rotateMultipath(t.rings,i,s),t}if(Object(r.g)(e)){const t=Object(n.a)(e)
return this._rotateMultipath(t.rings,i,s),t}if(Object(r.h)(e)){const t=Object(n.a)(e)
return this._rotateMultipath(t.paths,i,s),t}if(Object(r.e)(e)){const t=Object(n.a)(e)
return this._rotatePath(t.points,i,s),t}if(Object(r.f)(e))return e
e=this._inputGeometries.next()}return null}_rotateMultipath(e,t,i){if(e)for(const n of e)this._rotatePath(n,t,i)}_rotatePath(e,t,i){if(e){const n=Math.cos(this._rotateAngle),r=Math.sin(this._rotateAngle)
for(const s of e){const e=s[0]-t,o=s[1]-i
s[0]=t+e*n-o*r,s[1]=i+e*r+o*n}}}}class W{static local(){return null===W.instance&&(W.instance=new W),W.instance}execute(e,t,i,n,r){return new Y(e,t,i)}}W.instance=null
class Y{constructor(e,t,i){this._inputGeometries=e,this._xFactor=void 0!==t.xScaleFactor?t.xScaleFactor:1.15,this._yFactor=void 0!==t.yScaleFactor?t.yScaleFactor:1.15}next(){let e=this._inputGeometries.next()
for(;e;){if(1===this._xFactor&&1===this._yFactor)return e
const t=Object(B.m)()
Object(U.a)(t,e)
const i=(t[2]+t[0])/2,s=(t[3]+t[1])/2
if(Object(r.d)(e)){const t={rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]}
return this._scaleMultipath(t.rings,i,s),t}if(Object(r.g)(e)){const t=Object(n.a)(e)
return this._scaleMultipath(t.rings,i,s),t}if(Object(r.h)(e)){const t=Object(n.a)(e)
return this._scaleMultipath(t.paths,i,s),t}if(Object(r.e)(e)){const t=Object(n.a)(e)
return this._scalePath(t.points,i,s),t}if(Object(r.f)(e))return e
e=this._inputGeometries.next()}return null}_scaleMultipath(e,t,i){if(e)for(const n of e)this._scalePath(n,t,i)}_scalePath(e,t,i){if(e)for(const n of e){const e=(n[0]-t)*this._xFactor,r=(n[1]-i)*this._yFactor
n[0]=t+e,n[1]=i+r}}}class Z{static local(){return null===Z.instance&&(Z.instance=new Z),Z.instance}execute(e,t,i,n,r){return new q(e,t,i)}}Z.instance=null
class q{constructor(e,t,i){this._inputGeometries=e,this._height=(void 0!==t.amplitude?t.amplitude:2)*i,this._period=(void 0!==t.period?t.period:3)*i,this._style=t.waveform,this._height<=0&&(this._height=Math.abs(this._height)),this._period<=0&&(this._period=Math.abs(this._period)),this._pattern=new C,this._pattern.addValue(this._period),this._pattern.addValue(this._period),this._walker=new I,this._walker.updateTolerance(i)}next(){let e=this._inputGeometries.next()
for(;e;){if(0===this._height||0===this._period)return e
if(Object(r.h)(e)){const t=this._processGeom(e.paths)
if(t.length)return{paths:t}}if(Object(r.g)(e)){const t=this._processGeom(e.rings)
if(t.length)return{rings:t}}e=this._inputGeometries.next()}return null}_processGeom(e){const t=[]
for(const i of e)if(this._walker.init(i,this._pattern))switch(this._style){case l.n.Sinus:default:t.push(this._constructCurve(i,!1))
break
case l.n.Square:t.push(this._constructSquare(i))
break
case l.n.Triangle:t.push(this._constructTriangle(i))
break
case l.n.Random:t.push(this._constructCurve(i,!0))}else t.push(i)
return t}_constructCurve(e,t){const i=new c,n=this._walker.calculatePathLength(e)
let r=Math.round(n/this._period)
0===r&&(r=1)
const s=16*r+1,o=n/r,a=this._period/16,l=1/s,u=2*Math.PI*n/o,h=2*Math.PI*Math.random(),d=2*Math.PI*Math.random(),f=2*Math.PI*Math.random(),_=.75-Math.random()/2,m=.75-Math.random()/2,p=new w
this._walker.curPointAndAngle(p),i.startPath(p.pt)
let g=0
for(;;){if(!this._walker.nextPointAndAngle(a,p)){i.lineTo(e[e.length-1])
break}{const e=g
let n
if(g+=l,t){const t=this._height/2*(1+.3*Math.sin(_*u*e+h))
n=t*Math.sin(u*e+d),n+=t*Math.sin(m*u*e+f),n/=2}else n=.5*this._height*Math.sin(.5*u*e)
i.lineTo([p.pt[0]-n*p.sa,p.pt[1]+n*p.ca])}}return i.path()}_constructSquare(e){const t=new c,i=this._walker.calculatePathLength(e)
Math.round(i/this._period)
let n=!0
for(;;){let e=!1
if(this._walker.curPositionIsValid()){const i=new w
this._walker.curPointAndAngle(i)
const r=new w
if(this._walker.nextPointAndAngle(this._period,r)){const s=new w
this._walker.nextPointAndAngle(this._period,s)&&(n?(t.startPath(i.pt),n=!1):t.lineTo(i.pt),t.lineTo([i.pt[0]-this._height/2*i.sa,i.pt[1]+this._height/2*i.ca]),t.lineTo([r.pt[0]-this._height/2*r.sa,r.pt[1]+this._height/2*r.ca]),t.lineTo([r.pt[0]+this._height/2*r.sa,r.pt[1]-this._height/2*r.ca]),t.lineTo([s.pt[0]+this._height/2*s.sa,s.pt[1]-this._height/2*s.ca]),e=!0)}}if(!e){t.lineTo(this._walker.getPathEnd())
break}}return t.path()}_constructTriangle(e){const t=new c,i=this._walker.calculatePathLength(e)
Math.round(i/this._period)
let n=!0
for(;;){let e=!1
if(this._walker.curPositionIsValid()){const i=new w
this._walker.curPointAndAngle(i)
const r=new w
if(this._walker.nextPointAndAngle(this._period/2,r)){const s=new w
this._walker.nextPointAndAngle(this._period,s)&&(this._walker.nextPosition(this._period/2)&&(n?(t.startPath(i.pt),n=!1):t.lineTo(i.pt),t.lineTo([r.pt[0]-this._height/2*r.sa,r.pt[1]+this._height/2*r.ca]),t.lineTo([s.pt[0]+this._height/2*s.sa,s.pt[1]-this._height/2*s.ca])),e=!0)}}if(!e){t.lineTo(this._walker.getPathEnd())
break}}return t.path()}}class X{static local(){return null===X.instance&&(X.instance=new X),X.instance}execute(e,t,i,n,r){return new K(e,t,i)}}X.instance=null
class K extends s.b{constructor(e,t,i){var n
super(e,!0,!0),this._geometryWalker=new I,this._geometryWalker.updateTolerance(i),this._angleToLine=null==(n=t.angleToLine)||n,this._offset=(t.offset?t.offset:0)*i,this._originalEndings=t.endings,this._offsetAtEnd=(t.customEndingOffset?t.customEndingOffset:0)*i,this._position=-(t.offsetAlongLine?t.offsetAlongLine:0)*i,this._pattern=new C,this._pattern.init(t.placementTemplate,!1),this._pattern.scale(i),this._endings=this._originalEndings}processPath(e){if(this._pattern.isEmpty())return null
let t
if(this.iteratePath)t=this._pattern.nextValue()
else{this._originalEndings===l.t.WithFullGap&&this.isClosed?this._endings=l.t.WithMarkers:this._endings=this._originalEndings,this._pattern.extPtGap=0
let i,n=!0
switch(this._endings){case l.t.NoConstraint:i=-this._position,i=this._adjustPosition(i),n=!1
break
case l.t.WithHalfGap:default:i=-this._pattern.lastValue()/2
break
case l.t.WithFullGap:i=-this._pattern.lastValue(),this._pattern.extPtGap=this._pattern.lastValue()
break
case l.t.WithMarkers:i=0
break
case l.t.Custom:i=-this._position,i=this._adjustPosition(i),this._pattern.extPtGap=.5*this._offsetAtEnd}if(!this._geometryWalker.init(e,this._pattern,n))return null
this._pattern.reset()
let r=0
for(;i>r;)i-=r,r=this._pattern.nextValue()
r-=i,t=r,this.iteratePath=!0}const i=new w
return this._geometryWalker.nextPointAndAngle(t,i)?this._endings===l.t.WithFullGap&&this._geometryWalker.isPathEnd()?(this.iteratePath=!1,null):this._endings===l.t.WithMarkers&&this._geometryWalker.isPathEnd()&&(this.iteratePath=!1,this.isClosed)?null:(this.internalPlacement.setTranslate(i.pt[0]-this._offset*i.sa,i.pt[1]+this._offset*i.ca),this._angleToLine&&this.internalPlacement.setRotateCS(i.ca,i.sa),this.internalPlacement):(this.iteratePath=!1,null)}_adjustPosition(e){let t=e/this._pattern.length()
return t-=Math.floor(t),t*this._pattern.length()}}class J{static local(){return null===J.instance&&(J.instance=new J),J.instance}execute(e,t,i,n,r){return new $(e,t,i)}}J.instance=null
class $ extends s.b{constructor(e,t,i){super(e,!1,!0),this._curveHelper=new u,this._angleToLine=void 0===t.angleToLine||t.angleToLine,this._offset=void 0!==t.offset?t.offset*i:0,this._type=t.extremityPlacement,this._position=void 0!==t.offsetAlongLine?t.offsetAlongLine*i:0,this._beginProcessed=!1}processPath(e){let t
switch(this._type){case l.f.Both:default:this._beginProcessed?(t=this._atExtremities(e,this._position,!1),this._beginProcessed=!1,this.iteratePath=!1):(t=this._atExtremities(e,this._position,!0),this._beginProcessed=!0,this.iteratePath=!0)
break
case l.f.JustBegin:t=this._atExtremities(e,this._position,!0)
break
case l.f.JustEnd:t=this._atExtremities(e,this._position,!1)
case l.f.None:}return t}_atExtremities(e,t,i){const n=e.length
if(n<2)return null
const r=i?1:n-2,o=i?n:-1,a=i?1:-1
let l,c=0,u=i?e[0]:e[n-1]
for(let i=r;i!==o;i+=a){l=u,u=e[i]
const n=this._curveHelper.calculateLength(l,u)
if(c+n>t){const e=(t-c)/n,[i,r]=this._curveHelper.getAngleCS(l,u,e),o=Object(s.e)(l,u,e)
return this.internalPlacement.setTranslate(o[0]-this._offset*r,o[1]+this._offset*i),this._angleToLine&&this.internalPlacement.setRotateCS(-i,-r),this.internalPlacement}c+=n}return null}}class Q{static local(){return null===Q.instance&&(Q.instance=new Q),Q.instance}execute(e,t,i,n,r){return new ee(e,t,i)}}Q.instance=null
class ee extends s.b{constructor(e,t,i){super(e,!0,!0),this._walker=new I,this._walker.updateTolerance(i),this._angleToLine=void 0===t.angleToLine||t.angleToLine,this._offset=void 0!==t.offset?t.offset*i:0,this._beginGap=void 0!==t.beginPosition?t.beginPosition*i:0,this._endGap=void 0!==t.endPosition?t.endPosition*i:0,this._flipFirst=void 0===t.flipFirst||t.flipFirst,this._pattern=new C,this._pattern.init(t.positionArray,!1,!1),this._subPathLen=0,this._posCount=this._pattern.size(),this._isFirst=!0,this._prevPos=0}processPath(e){if(this._pattern.isEmpty())return null
let t
if(this.iteratePath){const e=this._pattern.nextValue()*this._subPathLen,i=this._beginGap+e
t=i-this._prevPos,this._prevPos=i}else{if(this._posCount=this._pattern.size(),this._isFirst=!0,this._prevPos=0,this._subPathLen=this._walker.calculatePathLength(e)-this._beginGap-this._endGap,this._subPathLen<0)return this.iteratePath=!1,null
if(!this._walker.init(e,this._pattern,!1))return null
this._pattern.reset()
const i=this._pattern.nextValue()*this._subPathLen,n=this._beginGap+i
t=n-this._prevPos,this._prevPos=n,this.iteratePath=!0}const i=new w
if(!this._walker.nextPointAndAngle(t,i,_.END))return this.iteratePath=!1,null
this.internalPlacement.setTranslate(i.pt[0]-this._offset*i.sa,i.pt[1]+this._offset*i.ca)
const n=this._isFirst&&this._flipFirst
let r,s
return this._angleToLine?(r=i.ca,s=i.sa):(r=1,s=0),n&&(r=-r,s=-s),this.internalPlacement.setRotateCS(r,s),this._isFirst=!1,this._posCount--,0===this._posCount&&(this.iteratePath=!1),this.internalPlacement}}var te=i(448),ie=i(1325)
class ne{static local(){return null===ne.instance&&(ne.instance=new ne),ne.instance}execute(e,t,i,n,r){return new re(e,t,i,n,r)}}ne.instance=null
class re{constructor(e,t,i,n,r){var s,o
if(this._xMin=0,this._xMax=0,this._yMin=0,this._yMax=0,this._currentX=0,this._currentY=0,this._accelerationMap=null,this._testInsidePolygon=!1,this._verticalSubdivision=!0,this._stepX=Math.abs(null!=(s=t.stepX)?s:16)*i,this._stepY=Math.abs(null!=(o=t.stepY)?o:16)*i,0!==this._stepX&&0!==this._stepY&&e&&function(e){return void 0!==e.rings}(e)&&e.rings){var a
if(this._gridType=null!=(a=t.gridType)?a:l.u.Fixed,this._gridType===l.u.Random){var c,u
const e=null!=(c=t.seed)?c:13,i=1
this._randomLCG=new te.a(e*i),this._randomness=(null!=(u=t.randomness)?u:100)/100,this._gridAngle=0,this._shiftOddRows=!1,this._cosAngle=1,this._sinAngle=0,this._offsetX=0,this._offsetY=0,this._buildRandomValues()}else{var h,d,f,_
if(this._randomness=0,this._gridAngle=null!=(h=t.gridAngle)?h:0,this._shiftOddRows=null!=(d=t.shiftOddRows)&&d,this._offsetX=(null!=(f=t.offsetX)?f:0)*i,this._offsetY=(null!=(_=t.offsetY)?_:0)*i,this._cosAngle=Math.cos(this._gridAngle/180*Math.PI),this._sinAngle=-Math.sin(this._gridAngle/180*Math.PI),this._stepX)if(this._offsetX<0)for(;this._offsetX<-.5*this._stepX;)this._offsetX+=this._stepX
else for(;this._offsetX>=.5*this._stepX;)this._offsetX-=this._stepX
if(this._stepY)if(this._offsetY<0)for(;this._offsetY<-.5*this._stepY;)this._offsetY+=this._stepY
else for(;this._offsetY>=.5*this._stepY;)this._offsetY-=this._stepY}if(this._graphicOriginX=0,this._graphicOriginY=0,null!=n){const[e,t,i]=n.split("/"),r=parseFloat(t),s=parseFloat(i)
this._graphicOriginX=512*-s,this._graphicOriginY=512*r,this._testInsidePolygon=!0}this._internalPlacement=new ie.a,this._calculateMinMax(e),this._geometry=e}}next(){return this._geometry?this._nextInside():null}_buildRandomValues(){if(!re._randValues){re._randValues=[]
for(let e=0;e<24;e++)for(let e=0;e<24;e++)re._randValues.push(this._randomLCG.getFloat()),re._randValues.push(this._randomLCG.getFloat())}}_calculateMinMax(e){let t,i,n,r,s,o,a,l,c,u,h,d,f,_
this._xMin=0,this._xMax=0,this._yMin=0,this._yMax=0,a=l=f=h=Number.MAX_VALUE,c=u=_=d=-Number.MAX_VALUE
const m=1!==this._cosAngle
let p=0
for(const g of e.rings){const e=g?g.length:0
for(let y=0;y<e;y++)o=g[y][0],s=g[y][1],t=o-this._graphicOriginX-this._offsetX,i=s-this._graphicOriginY-this._offsetY,m?(n=this._cosAngle*t-this._sinAngle*i,r=this._sinAngle*t+this._cosAngle*i):(n=t,r=i),a=Math.min(a,n),c=Math.max(c,n),l=Math.min(l,r),u=Math.max(u,r),h=Math.min(h,s),d=Math.max(d,s),f=Math.min(f,o),_=Math.max(_,o),p++}h=h!==Number.MAX_VALUE?h:-512-this._stepY,d=d!==-Number.MAX_VALUE?d:this._stepY,f=f!==Number.MAX_VALUE?f:-this._stepX,_=_!==-Number.MAX_VALUE?_:512+this._stepX
const g=d-h,y=_-f
if(this._verticalSubdivision=g>=y,this._polygonMin=this._verticalSubdivision?h:f,this._testInsidePolygon){let e=0-this._graphicOriginX-this._offsetX-this._stepX,t=512-this._graphicOriginX-this._offsetX+this._stepX,i=-512-this._graphicOriginY-this._offsetY-this._stepY,n=0-this._graphicOriginY-this._offsetY+this._stepY
if(m){const r=[[e,i],[e,n],[t,i],[t,n]]
e=i=Number.MAX_VALUE,t=n=-Number.MAX_VALUE
for(const s of r){const r=this._cosAngle*s[0]-this._sinAngle*s[1],o=this._sinAngle*s[0]+this._cosAngle*s[1]
e=Math.min(e,r),t=Math.max(t,r),i=Math.min(i,o),n=Math.max(n,o)}}a=a!==Number.MAX_VALUE?Math.max(a,e):e,l=l!==Number.MAX_VALUE?Math.max(l,i):i,c=c!==-Number.MAX_VALUE?Math.min(c,t):t,u=u!==-Number.MAX_VALUE?Math.min(u,n):n}this._xMin=Math.round(a/this._stepX),this._xMax=Math.round(c/this._stepX),this._yMin=Math.round(l/this._stepY),this._yMax=Math.round(u/this._stepY),this._currentX=this._xMax+1,this._currentY=this._yMin-1,this._testInsidePolygon&&p>12&&(g>25||y>25)&&this._buildAccelerationMap(e,f,_,h,d)}_buildAccelerationMap(e,t,i,n,r){const{rings:s}=e,o=new Map,a=this._verticalSubdivision,l=a?r-n:i-t
let c=Math.ceil(l/10)
if(c<=1)return
const u=Math.floor(l/c)
let h,d,f,_,m,p,g,y,x,v
c++,this._delta=u,a?(y=-512-this._stepY,x=this._stepY,v=n):(y=-this._stepX,x=512+this._stepX,v=t)
for(let e=0;e<s.length;e++)if(h=s[e],!(h.length<2))for(let t=1;t<h.length;t++){if(d=h[t-1],f=h[t],a){if(d[1]===f[1]||d[1]<y&&f[1]<y||d[1]>x&&f[1]>x)continue
_=Math.min(d[1],f[1]),m=Math.max(d[1],f[1])}else{if(d[0]===f[0]||d[0]<y&&f[0]<y||d[0]>x&&f[0]>x)continue
_=Math.min(d[0],f[0]),m=Math.max(d[0],f[0])}for(;_<m;)p=Math.floor((_-v)/u),se(p,e,t,o),_+=u
g=Math.floor((m-v)/u),g>p&&se(g,e,t,o)}this._accelerationMap=o}_nextInside(){for(;;){if(this._currentX>this._xMax){if(this._currentY++,this._currentY>this._yMax)return null
this._currentX=this._xMin,this._shiftOddRows&&this._currentY%2&&this._currentX--}let e=this._currentX*this._stepX+this._offsetX
this._shiftOddRows&&this._currentY%2&&(e+=.5*this._stepX)
const t=this._currentY*this._stepY+this._offsetY
let i,n
if(this._currentX++,this._gridType===l.u.Random){const r=(this._currentX%24+24)%24,s=(this._currentY%24+24)%24
i=this._graphicOriginX+e+this._stepX*this._randomness*(.5-re._randValues[24*s+r])*2/3,n=this._graphicOriginY+t+this._stepY*this._randomness*(.5-re._randValues[24*s+r+1])*2/3}else i=this._graphicOriginX+this._cosAngle*e+this._sinAngle*t,n=this._graphicOriginY-this._sinAngle*e+this._cosAngle*t
if(!this._testInsidePolygon||this._isInsidePolygon(i,n,this._geometry))return this._internalPlacement.setTranslate(i,n),this._internalPlacement}}_isInsidePolygon(e,t,i){const{rings:n}=i
if(Object(p.k)(this._accelerationMap))return function(e,t,i){const{rings:n}=i
let r,s,o,a=0
for(const i of n){r=i.length
for(let n=1;n<r;++n)s=i[n-1],o=i[n],s[1]>t!=o[1]>t&&((o[0]-s[0])*(t-s[1])-(o[1]-s[1])*(e-s[0])>0?a++:a--)}return 0!==a}(e,t,i)
const r=this._verticalSubdivision,s=r?t:e,o=Math.floor((s-this._polygonMin)/this._delta),a=this._accelerationMap.get(o)
if(!a)return!1
let l,c,u,h,d,f=0
for(const i of a){d=i[0]
const s=n[d]
if(h=i[1],l=s[h-1],c=s[h],r){if(l[1]>t==c[1]>t)continue
u=(c[0]-l[0])*(t-l[1])-(c[1]-l[1])*(e-l[0])}else{if(l[0]>e==c[0]>e)continue
u=(c[1]-l[1])*(e-l[0])-(c[0]-l[0])*(t-l[1])}u>0?f++:f--}return 0!==f}}function se(e,t,i,n){let r=n.get(e)
r||(r=[],n.set(e,r)),r.push([t,i])}class oe{static local(){return null===oe.instance&&(oe.instance=new oe),oe.instance}execute(e,t,i,n,r){return new ae(e,t,i)}}oe.instance=null
class ae extends s.b{constructor(e,t,i){super(e,!0,!0),this._curveHelper=new u,this._angleToLine=void 0===t.angleToLine||t.angleToLine,this._offset=void 0!==t.offset?t.offset*i:0,this._relativeTo=t.relativeTo,this._position=void 0!==t.startPointOffset?t.startPointOffset*i:0,this._epsilon=.001*i}processPath(e){const t=this._position
if(this._relativeTo===l.v.SegmentMidpoint){for(this.iteratePath||(this._segmentCount=e.length,this._curSegment=1,this.iteratePath=!0);this._curSegment<this._segmentCount;){const t=this._curSegment
this._curSegment++
const i=e[t-1],n=e[t],r=this._curveHelper.calculateLength(i,n)
if(r<this._epsilon)continue
const o=.5+this._position/r,[a,l]=this._curveHelper.getAngleCS(i,n,o),c=Object(s.e)(i,n,o)
return this.internalPlacement.setTranslate(c[0]-this._offset*l,c[1]+this._offset*a),this._angleToLine&&this.internalPlacement.setRotateCS(a,l),this.internalPlacement}return this.iteratePath=!1,null}this._relativeTo===l.v.LineEnd&&Object(s.i)(e)
const i=this.onLine(e,t)
return this._relativeTo===l.v.LineEnd&&Object(s.i)(e),i}onLine(e,t){let i,n=!1
switch(this._relativeTo){case l.v.LineMiddle:default:i=this._curveHelper.calculatePathLength(e)/2+t
break
case l.v.LineBeginning:i=t
break
case l.v.LineEnd:i=t,n=!0}const r=e.length
let o,a=0,c=e[0]
for(let t=1;t<r;++t){o=c,c=e[t]
const r=this._curveHelper.calculateLength(o,c)
if(a+r>i){const e=(i-a)/r,[t,l]=this._curveHelper.getAngleCS(o,c,e),u=Object(s.e)(o,c,e),h=n?-this._offset:this._offset
return this.internalPlacement.setTranslate(u[0]-h*l,u[1]+h*t),this._angleToLine&&(n?this.internalPlacement.setRotateCS(-t,-l):this.internalPlacement.setRotateCS(t,l)),this.internalPlacement}a+=r}return null}}class le{static local(){return null===le.instance&&(le.instance=new le),le.instance}execute(e,t,i,n,r){return new ce(e,t,i)}}le.instance=null
class ce extends s.b{constructor(e,t,i){super(e,!0,!0),this._curveHelper=new u,this._angleToLine=void 0===t.angleToLine||t.angleToLine,this._offset=void 0!==t.offset?t.offset*i:0,this._endPoints=void 0===t.placeOnEndPoints||t.placeOnEndPoints,this._controlPoints=void 0===t.placeOnControlPoints||t.placeOnControlPoints,this._regularVertices=void 0===t.placeOnRegularVertices||t.placeOnRegularVertices,this._tags=[],this._tagIterator=0}processPath(e){if(this.iteratePath||(this._preparePath(e),this.iteratePath=!0),this._tagIterator>=this._tags.length)return this._tags.length=0,this._tagIterator=0,this.iteratePath=!1,null
const t=this._tags[this._tagIterator]
this._angleToLine&&this.internalPlacement.setRotate(t[2])
let i=t[0],n=t[1]
if(0!==this._offset){const e=Math.cos(t[2]),r=Math.sin(t[2])
i-=this._offset*r,n+=this._offset*e}return this.internalPlacement.setTranslate(i,n),this._tagIterator++,this.internalPlacement}_preparePath(e){this._tags.length=0,this._tagIterator=0
const t=Object(s.g)(e),i=e.length-1
let n,r,o=0,a=0,l=0,c=0,u=0
for(;o<i;){o++,n=e[o-1],r=e[o]
const h=Object(s.f)(n),d=Object(s.f)(r);(this._angleToLine||0!==this._offset)&&(c=this._curveHelper.getAngle(n,r,0)),1===o?t?(a=c,l=h):(this._endPoints||this._controlPoints&&1===h)&&this._tags.push([n[0],n[1],c]):1===h?this._controlPoints&&this._tags.push([n[0],n[1],ue(u,c)]):this._regularVertices&&this._tags.push([n[0],n[1],ue(u,c)]),(this._angleToLine||0!==this._offset)&&(u=this._curveHelper.getAngle(n,r,1)),o===i&&(t?1===d||1===l?this._controlPoints&&this._tags.push([r[0],r[1],ue(u,a)]):this._regularVertices&&this._tags.push([r[0],r[1],ue(u,a)]):(this._endPoints||this._controlPoints&&1===d)&&this._tags.push([r[0],r[1],u]))}this._tagIterator=0}}function ue(e,t){const i=Math.PI
for(;Math.abs(t-e)>i+2e-15;)t-e>i?t-=2*i:t+=2*i
return(e+t)/2}var he=i(235),de=i(1142)
class fe{constructor(e=_e){this._data=[],this._compare=e}get size(){return this._data.length}enqueue(e){if(null==e)return
const{_data:t,_compare:i}=this
t.push(e)
let n=t.length-1>>>0
const r=t[n]
for(;n>0;){const e=n-1>>1,s=t[e]
if(!(i(s,r)<=0))break
t[e]=r,t[n]=s,n=e}}dequeue(){const{_data:e,_compare:t}=this,i=e[0],n=e.pop()
if(0===e.length)return i
e[0]=n
let r=0
const s=e.length,o=e[0]
let a,l,c=null
for(;;){const i=2*r+1,n=2*r+2
if(c=null,i<s&&(a=e[i],t(a,o)>0&&(c=i)),n<s&&(l=e[n],(null===c&&t(l,o)<=0||null!==c&&t(l,a)<=0)&&(c=n)),null===c)break
e[r]=e[c],e[c]=o,r=c}return i}}const _e=(e,t)=>e<t?-1:e>t?1:0
var me=i(1066),pe=i(1118)
function ge(e,t){const{rings:i}=t
let n=0
for(const t of i){const i=t.length
for(let r=1;r<i;++r){const i=t[r-1],s=t[r]
i[1]>e[1]!=s[1]>e[1]&&((s[0]-i[0])*(e[1]-i[1])-(s[1]-i[1])*(e[0]-i[0])>0?n++:n--)}}return 0!==n}function ye(e,t,i){if(i&&ge(e,t))return{coord:e,distance:0}
let n=1/0,r=0,s=0
const o=[0,0],{rings:a}=t
for(const t of a)if(!(t.length<2))for(let i=0;i<t.length-1;i++){Object(me.l)(o,e,t,i)
const a=Te(e,o)
a<n&&(n=a,r=o[0],s=o[1])}return{coord:[r,s],distance:Math.sqrt(n)}}function xe(e,t,i,n){const r=[t,0]
let s=1/0,o=1/0,a=!1,l=!1
const c=[[t,n[1]-1],[t,n[3]+1]],u=[0,0],h=[0,0],d=[0,0],f=[[0,0],[0,0]],_=Object(B.m)(),{rings:m}=e
for(const e of m)if(!(e.length<2))for(let t=1;t<e.length;t++){if(f[0][0]=e[t-1][0],f[0][1]=e[t-1][1],f[1][0]=e[t][0],f[1][1]=e[t][1],null===ve(_,f))continue
if(h[0]=c[0][0],h[1]=c[0][1],d[0]=c[1][0],d[1]=c[1][1],0===be(_,h,d))continue
if(!Object(pe.e)(c[0],c[1],f[0],f[1],u))continue
const i=u[1]
s>o?i<s&&(s=i,a=!0):i<o&&(o=i,l=!0)}return a&&l?r[1]=(s+o)/2:r[0]=r[1]=NaN,r}function ve(e,t){if(t.length<2)return null
e||(e=Object(B.m)())
const[i,n]=t[0],[r,s]=t[1]
return e[0]=Math.min(i,r),e[1]=Math.min(n,s),e[2]=Math.max(i,r),e[3]=Math.max(n,s),e}function be(e,t,i){let n=Oe(t,e),r=Oe(i,e)
const s=e[0],o=e[1],a=e[2],l=e[3]
if(n&r)return 0
if(!(n|r))return 4
const c=(n?1:0)|(r?2:0)
do{const c=i[0]-t[0],u=i[1]-t[1]
if(c>u)3&n?(1&n?(t[1]+=u*(s-t[0])/c,t[0]=s):(t[1]+=u*(a-t[0])/c,t[0]=a),n=Oe(t,e)):3&r?(1&r?(i[1]+=u*(s-i[0])/c,i[0]=s):(i[1]+=u*(a-i[0])/c,i[0]=a),r=Oe(i,e)):n?(4&n?(t[0]+=c*(o-t[1])/u,t[1]=o):(t[0]+=c*(l-t[1])/u,t[1]=l),n=Oe(t,e)):(4&r?(i[0]+=c*(o-i[1])/u,i[1]=o):(i[0]+=c*(l-i[1])/u,i[1]=l),r=Oe(i,e))
else if(12&n?(4&n?(t[0]+=c*(o-t[1])/u,t[1]=o):(t[0]+=c*(l-t[1])/u,t[1]=l),n=Oe(t,e)):12&r?(4&r?(i[0]+=c*(o-i[1])/u,i[1]=o):(i[0]+=c*(l-i[1])/u,i[1]=l),r=Oe(i,e)):n?(1&n?(t[1]+=u*(s-t[0])/c,t[0]=s):(t[1]+=u*(a-t[0])/c,t[0]=a),n=Oe(t,e)):(1&r?(i[1]+=u*(s-i[0])/c,i[0]=s):(i[1]+=u*(a-i[0])/c,i[0]=a),r=Oe(i,e)),n&r)return 0}while(n|r)
return c}function Oe(e,t){return(e[0]<t[0]?1:0)|(e[0]>t[2]?1:0)<<1|(e[1]<t[1]?1:0)<<2|(e[1]>t[3]?1:0)<<3}function Se(e,t,i){return e+(t-e)*i}function Te(e,t){return(e[0]-t[0])*(e[0]-t[0])+(e[1]-t[1])*(e[1]-t[1])}function Ce(e,t){if(e<t)return-1
if(e>t)return 1
if(e===t)return 0
const i=isNaN(e),n=isNaN(t)
return i<n?-1:i>n?1:0}class we{constructor(e,t,i,n){this.x=e,this.y=t,this.cellSize=i,this.distancefromCellCenter=Object(me.c)(e,t,n),this.maxDistanceToPolygon=this.distancefromCellCenter+this.cellSize*Math.SQRT2}}class Me{static local(){return null===Me.instance&&(Me.instance=new Me),Me.instance}execute(e,t,i,n,r){return new Ie(e,t,i)}}Me.instance=null
class Ie{constructor(e,t,i){this._geometry=e,this._offsetX=void 0!==t.offsetX?t.offsetX*i:0,this._offsetY=void 0!==t.offsetY?t.offsetY*i:0,this._method=void 0!==t.method?t.method:l.w.OnPolygon,this._internalPlacement=new ie.a}next(){const e=this._geometry
return this._geometry=null,e&&function(e){return void 0!==e.rings}(e)?this._polygonCenter(e):null}_polygonCenter(e){let t=!1
switch(this._method){case l.w.CenterOfMass:{const i=Object(de.e)(e)
i&&(this._internalPlacement.setTranslate(i[0]+this._offsetX,i[1]+this._offsetY),t=!0)}break
case l.w.BoundingBoxCenter:{const i=Object(B.m)()
Object(U.a)(i,e),i&&(this._internalPlacement.setTranslate((i[2]+i[0])/2+this._offsetX,(i[3]+i[1])/2+this._offsetY),t=!0)}break
case l.w.OnPolygon:default:{let i
i=Object(he.a)("polylabel-placement-enabled")?function(e){if(!e||!e.rings||0===e.rings.length)return null
const t=Object(U.c)(Object(B.m)(),e.rings[0])
if(!t)return null
const i=t[2]-t[0],n=t[3]-t[1]
if(0===i||0===n)return[t[0]+i/2,t[1]+n/2]
const r=Math.max(Math.min(i,n)/100,1),s=new fe((e,t)=>t.maxDistanceToPolygon-e.maxDistanceToPolygon),o=Math.min(i,n)
let a=o/2,l=0,c=0
for(l=t[0];l<t[2];l+=o)for(c=t[1];c<t[3];c+=o)s.enqueue(new we(l+a,c+a,a,e))
const u=Object(de.d)(e.rings,!1)
if(null===u)return null
let h,d=new we(u[0],u[1],0,e)
for(;s.size>0;)h=Object(p.u)(s.dequeue()),h.distancefromCellCenter>d.distancefromCellCenter&&(d=h),h.maxDistanceToPolygon-d.distancefromCellCenter<=r||(a=h.cellSize/2,s.enqueue(new we(h.x-a,h.y-a,a,e)),s.enqueue(new we(h.x+a,h.y-a,a,e)),s.enqueue(new we(h.x-a,h.y+a,a,e)),s.enqueue(new we(h.x+a,h.y+a,a,e)))
return[d.x,d.y]}(e):function(e){const{rings:t}=e
if(!t||0===t.length)return null
const i=Object(U.a)(Object(B.m)(),e)
if(!i)return null
const n=4*(Math.abs(i[0])+Math.abs(i[2])+Math.abs(i[1])+Math.abs(i[3])+1)*222045e-19
let r=0,s=0
for(let e=0;e<t.length;e++){const i=Object(me.i)(t[e])
i>s&&(s=i,r=e)}if(Math.abs(s)<=2*n*n){const e=Object(U.c)(Object(B.m)(),t[r])
return[(e[0]+e[2])/2,(e[1]+e[3])/2]}const o=Object(de.c)(t[r],!1,Object(B.m)())
if(null===o)return null
if(1===t.length&&t[0].length<4)return o
const a=[[NaN,NaN],[NaN,NaN],[NaN,NaN],[NaN,NaN]],l=[NaN,NaN,NaN,NaN],c=[NaN,NaN,NaN,NaN]
let u=!1,h=ye(o,e,!0)
0===h.distance&&(u=!0,a[0][0]=o[0],a[0][1]=o[1],h=ye(o,e,!1)),l[0]=h.distance,c[0]=0
const d=[NaN,NaN]
let f=!1,_=.25,m=-1
const p=Object(U.c)(Object(B.m)(),t[r])
let g=NaN
do{if(g=NaN,a[1]=xe(e,Se(p[0],p[2],_),0,i),isNaN(a[1][0])||isNaN(a[1][1])||(h=ye(a[1],e,!1),g=h.distance),!isNaN(g)&&g>n&&ge(a[1],e))f=!0,l[1]=g,c[1]=Te(a[1],o)
else if(!isNaN(g)&&g>m&&(m=g,d[0]=a[1][0],d[1]=a[1][1]),_-=.01,_<.1){if(!(m>=0))break
f=!0,l[1]=m,a[1][0]=d[0],a[1][1]=d[1],c[1]=Te(a[1],o)}}while(!f)
f=!1,_=.5,m=-1
let y=.01,x=1
do{if(g=NaN,a[2]=xe(e,Se(p[0],p[2],_),0,i),isNaN(a[2][0])||isNaN(a[2][1])||(h=ye(a[2],e,!1),g=h.distance),!isNaN(g)&&g>n&&ge(a[2],e))f=!0,l[2]=g,c[2]=Te(a[2],o)
else if(!isNaN(g)&&g>m)m=g,d[0]=a[2][0],d[1]=a[2][1]
else if(g>m&&(m=g,d[0]=a[2][0],d[1]=a[2][1]),_=.5+y*x,y+=.01,x*=-1,_<.3||_>.7){if(!(m>=0))break
f=!0,l[2]=m,a[2][0]=d[0],a[2][1]=d[1],c[2]=Te(a[2],o)}}while(!f)
f=!1,_=.75,m=-1
do{if(g=NaN,a[3]=xe(e,Se(p[0],p[2],_),0,i),isNaN(a[3][0])||isNaN(a[3][1])||(h=ye(a[3],e,!1),g=h.distance),!isNaN(g)&&g>n&&ge(a[3],e))f=!0,l[3]=g,c[3]=Te(a[3],o)
else if(g>m&&(m=g,d[0]=a[3][0],d[1]=a[3][1]),_+=.01,_>.9){if(!(m>=0))break
f=!0,l[3]=m,a[3][0]=d[0],a[3][1]=d[1],c[3]=Te(a[3],o)}}while(!f)
const v=[0,1,2,3],b=u?0:1
let O
for(let e=b;e<4;e++)for(let e=b;e<3;e++){const t=c[e],i=c[e+1]
Ce(t,i)>0&&(O=v[e],v[e]=v[e+1],v[e+1]=O,c[e]=i,c[e+1]=t)}let S=b,T=0,C=0
for(let e=b;e<4;e++){switch(e){case 0:C=2*l[v[e]]
break
case 1:C=1.66666666*l[v[e]]
break
case 2:C=1.33333333*l[v[e]]
break
case 3:C=l[v[e]]}C>T&&(T=C,S=v[e])}return a[S]}(e),null!==i&&(this._internalPlacement.setTranslate(i[0]+this._offsetX,i[1]+this._offsetY),t=!0)}}return t?this._internalPlacement:null}}function Pe(e){if(!e)return null
switch(e.type){case"CIMGeometricEffectAddControlPoints":return o.local()
case"CIMGeometricEffectArrow":return d.local()
case"CIMGeometricEffectBuffer":return x.local()
case"CIMGeometricEffectControlMeasureLine":return b.local()
case"CIMGeometricEffectCut":return S.local()
case"CIMGeometricEffectDashes":return P.local()
case"CIMGeometricEffectDonut":return L.local()
case"CIMGeometricEffectJog":return j.local()
case"CIMGeometricEffectMove":return D.local()
case"CIMGeometricEffectOffset":return F.local()
case"CIMGeometricEffectReverse":return N.local()
case"CIMGeometricEffectRotate":return G.local()
case"CIMGeometricEffectScale":return W.local()
case"CIMGeometricEffectWave":return Z.local()}return null}function Ee(e){if(!e)return null
switch(e.type){case"CIMMarkerPlacementAlongLineSameSize":return X.local()
case"CIMMarkerPlacementAtExtremities":return J.local()
case"CIMMarkerPlacementAtRatioPositions":return Q.local()
case"CIMMarkerPlacementInsidePolygon":return ne.local()
case"CIMMarkerPlacementOnLine":return oe.local()
case"CIMMarkerPlacementOnVertices":return le.local()
case"CIMMarkerPlacementPolygonCenter":return Me.local()}return null}},1488:function(e,t,i){"use strict"
i.d(t,"a",(function(){return k}))
var n=i(1555),r=i(23),s=i(1261),o=i(1022),a=i(1177),l=i(1315),c=i(984),u=i(1293)
class h extends a.a{constructor(){super(...arguments),this._color=Object(s.b)(0,1,0,1)}dispose(){this._program&&this._program.dispose()}prepareState({context:e}){e.setStencilTestEnabled(!0),e.setBlendingEnabled(!1),e.setFaceCullingEnabled(!1),e.setColorMask(!1,!1,!1,!1),e.setStencilOp(c.w.KEEP,c.w.KEEP,c.w.REPLACE),e.setStencilWriteMask(255),e.setStencilFunction(c.h.ALWAYS,0,255)}draw(e,t){const{context:i,state:n,requestRender:s,allowDelayedRender:a}=e,h=Object(o.g)("clip",{geometry:[{location:0,name:"a_pos",count:2,type:c.k.SHORT}]}),d=t.getVAO(i,n,h.attributes,h.bufferLayouts)
Object(r.k)(d.indexBuffer)||(this._program||(this._program=Object(u.a)(i,l.a)),a&&Object(r.l)(s)&&!this._program.compiled?s():(i.useProgram(this._program),this._program.setUniform2fv("u_coord_range",[1,1]),this._program.setUniform4fv("u_color",this._color),this._program.setUniformMatrix3fv("u_dvsMat3",n.displayMat3),i.bindVAO(d),i.drawElements(c.r.TRIANGLES,d.indexBuffer.size,c.k.UNSIGNED_INT,0),i.bindVAO()))}}var d=i(1e3)
class f extends a.a{constructor(){super(...arguments),this._desc={vsPath:"overlay/overlay",fsPath:"overlay/overlay",attributes:new Map([["a_pos",0],["a_uv",1]])}}dispose(){}prepareState({context:e}){e.setBlendingEnabled(!0),e.setColorMask(!0,!0,!0,!0),e.setBlendFunctionSeparate(c.b.ONE,c.b.ONE_MINUS_SRC_ALPHA,c.b.ONE,c.b.ONE_MINUS_SRC_ALPHA),e.setStencilWriteMask(0),e.setStencilTestEnabled(!0),e.setStencilFunction(c.h.GREATER,255,255)}draw(e,t){const{context:i,painter:n,requestRender:s,allowDelayedRender:a}=e
if(!t.isReady)return
const{computedOpacity:l,dvsMat3:u,isWrapAround:h,perspectiveTransform:f,texture:_}=t
e.timeline.begin(this.name)
const m=n.materialManager.getProgram(this._desc)
if(a&&Object(r.l)(s)&&!m.compiled)return void s()
const p=Object(o.g)("overlay",{geometry:[{location:0,name:"a_pos",count:2,type:c.k.FLOAT}],tex:[{location:1,name:"a_uv",count:2,type:c.k.UNSIGNED_SHORT}]}),g=t.getVAO(i,p.bufferLayouts,p.attributes)
if(!g)return
i.bindVAO(g),i.useProgram(m),i.bindTexture(_,d.N),m.setUniformMatrix3fv("u_dvsMat3",u),m.setUniform1i("u_texture",d.N),m.setUniform1f("u_opacity",l),m.setUniform2fv("u_perspective",f)
const y=h?10:4
i.drawArrays(c.r.TRIANGLE_STRIP,0,y),i.bindVAO(),e.timeline.end(this.name)}}var _=i(448),m=i(1003),p=i(1204),g=i(1023),y=i(1187)
class x extends p.a{dispose(){}getGeometryType(){return m.d.FILL}supportsSymbology(e){return e!==m.e.DOT_DENSITY}drawGeometry(e,t,i,n){const{context:s,painter:a,rendererInfo:l,requiredLevel:u,passOptions:h,requestRender:d,allowDelayedRender:f}=e,_=g.a.load(i.materialKey),p=Object(y.b)(_.data),x=Object(r.l)(h)&&"hittest"===h.type,v=a.materialManager,{shader:b,vertexLayout:O,hittestAttributes:S}=Object(r.v)(p.programSpec,function(e){const t={geometry:[{location:0,name:"a_pos",count:2,type:c.k.SHORT},{location:1,name:"a_id",count:3,type:c.k.UNSIGNED_BYTE},{location:2,name:"a_bitset",count:1,type:c.k.UNSIGNED_BYTE},{location:3,name:"a_color",count:4,type:c.k.UNSIGNED_BYTE,normalized:!0},{location:4,name:"a_aux1",count:4,type:c.k.UNSIGNED_SHORT},{location:5,name:"a_aux2",count:4,type:c.k.SHORT},{location:6,name:"a_aux3",count:4,type:c.k.UNSIGNED_BYTE},{location:7,name:"a_zoomRange",count:2,type:c.k.UNSIGNED_SHORT}]}
switch(e.symbologyType){case m.e.SIMPLE:case m.e.OUTLINE_FILL_SIMPLE:t.geometry.splice(7,1),t.geometry.splice(4,1)}return{shader:"materials/fill",vertexLayout:t}}(_))
let T=c.r.TRIANGLES,C=Object(o.g)(_.data,O)
x&&(C=this._getTriangleDesc(i.materialKey,C,S),T=c.r.POINTS)
const{attributes:w,bufferLayouts:M}=C,I=v.getMaterialProgram(e,_,b,w,n)
if(f&&Object(r.l)(d)&&!I.compiled)return void d()
if(s.useProgram(I),this._setSharedUniforms(I,e,t),I.setUniform2f("u_tileOffset",512*t.key.col,512*t.key.row),_.textureBinding){a.textureManager.bindTextures(s,I,_)
const e=1/2**(u-t.key.level)
I.setUniform1f("u_zoomFactor",e)}const P=1/e.pixelRatio
I.setUniform1f("u_blur",P),I.setUniform1f("u_antialiasing",P),this._setSizeVVUniforms(_,I,l,t),this._setColorAndOpacityVVUniforms(_,I,l)
const E=i.target.getVAO(s,M,w,x)
let L=i.indexCount,A=i.indexFrom*Uint32Array.BYTES_PER_ELEMENT
x&&(L/=3,A/=3),s.bindVAO(E),this._drawFills(e,t,I,T,L,A)}_drawFills(e,t,i,n,r,s){e.context.drawElements(n,r,c.k.UNSIGNED_INT,s)}}var v=i(1068),b=i(1171),O=i(1474),S=i(1072),T=i(1116),C=i(1556),w=i(1459),M=i(1316)
class I extends M.a{supportsSymbology(e){return e===m.e.PIE_CHART}_drawMarkers(e,t,i,n,r,s,o){const{context:a}=e,{rendererInfo:l}=e,{rendererSchema:u}=l
Object(y.a)(u,"pie-chart"),i.setUniform4fv("u_colors",u.colors),i.setUniform4fv("u_defaultColor",u.defaultColor),i.setUniform4fv("u_othersColor",u.othersColor),i.setUniform4fv("u_outlineColor",u.outlineColor),i.setUniform1f("u_donutRatio",u.holePercentage),i.setUniform1f("u_sectorThreshold",u.sectorThreshold),i.setUniform1f("u_outlineWidth",u.outlineWidth),a.drawElements(n,r,c.k.UNSIGNED_INT,s)}}var P=i(1460),E=i(1814),L=i(1815),A=i(1816),j=i(1817),R=i(1818)
class D extends p.a{dispose(){}getGeometryType(){return m.d.LABEL}supportsSymbology(e){return!0}drawGeometry(e,t,i,n){const{context:s,painter:a,state:l,rendererInfo:u,requestRender:h,allowDelayedRender:d}=e,f=g.b.load(i.materialKey),_=f.mapAligned?1:0
if(!_&&Math.abs(t.key.level-Math.round(100*e.displayLevel)/100)>=1)return
const{bufferLayouts:m,attributes:p}=(x=f,Object(o.g)(x.data,{geometry:[{location:0,name:"a_pos",count:2,type:c.k.SHORT},{location:1,name:"a_id",count:4,type:c.k.UNSIGNED_BYTE},{location:2,name:"a_color",count:4,type:c.k.UNSIGNED_BYTE,normalized:!0},{location:3,name:"a_haloColor",count:4,type:c.k.UNSIGNED_BYTE,normalized:!0},{location:4,name:"a_texAndSize",count:4,type:c.k.UNSIGNED_BYTE},{location:5,name:"a_refSymbolAndPlacementOffset",count:4,type:c.k.UNSIGNED_BYTE},{location:6,name:"a_glyphData",count:4,type:c.k.UNSIGNED_BYTE},{location:7,name:"a_vertexOffset",count:2,type:c.k.SHORT},{location:8,name:"a_texCoords",count:2,type:c.k.UNSIGNED_SHORT}]})),y=a.materialManager.getMaterialProgram(e,f,"materials/label",p,n)
var x
if(d&&Object(r.l)(h)&&!y.compiled)return void h()
e.context.setStencilFunction(c.h.EQUAL,0,255),s.useProgram(y),this._setSharedUniforms(y,e,t),a.textureManager.bindTextures(s,y,f)
const v=1===_?l.displayViewMat3:l.displayMat3
this._setSizeVVUniforms(f,y,u,t),y.setUniform1f("u_mapRotation",Math.floor(l.rotation/360*254)),y.setUniform1f("u_mapAligned",_),y.setUniformMatrix3fv("u_displayMat3",v),y.setUniform1f("u_opacity",1),y.setUniform2fv("u_screenSize",e.state.size)
const b=i.target.getVAO(s,m,p),O=i.indexFrom*Uint32Array.BYTES_PER_ELEMENT
s.bindVAO(b),y.setUniform1f("u_isHaloPass",0),y.setUniform1f("u_isBackgroundPass",1),s.drawElements(c.r.TRIANGLES,i.indexCount,c.k.UNSIGNED_INT,O),y.setUniform1f("u_isHaloPass",1),y.setUniform1f("u_isBackgroundPass",0),s.drawElements(c.r.TRIANGLES,i.indexCount,c.k.UNSIGNED_INT,O),y.setUniform1f("u_isHaloPass",0),y.setUniform1f("u_isBackgroundPass",0),s.drawElements(c.r.TRIANGLES,i.indexCount,c.k.UNSIGNED_INT,O),s.setStencilTestEnabled(!0),s.setBlendingEnabled(!0)}}class z extends p.a{dispose(){}getGeometryType(){return m.d.LINE}supportsSymbology(e){return!0}drawGeometry(e,t,i,n){const{context:s,painter:a,rendererInfo:l,displayLevel:u,passOptions:h,requestRender:d,allowDelayedRender:f}=e,_=g.c.load(i.materialKey),m=Object(r.l)(h)&&"hittest"===h.type
let p=(x=_,Object(o.g)(x.data,{geometry:[{location:0,name:"a_pos",count:2,type:c.k.SHORT},{location:1,name:"a_id",count:4,type:c.k.UNSIGNED_BYTE},{location:2,name:"a_color",count:4,type:c.k.UNSIGNED_BYTE,normalized:!0},{location:3,name:"a_offsetAndNormal",count:4,type:c.k.BYTE},{location:4,name:"a_accumulatedDistanceAndHalfWidth",count:2,type:c.k.UNSIGNED_SHORT},{location:5,name:"a_tlbr",count:4,type:c.k.UNSIGNED_SHORT},{location:6,name:"a_segmentDirection",count:4,type:c.k.BYTE},{location:7,name:"a_aux",count:2,type:c.k.UNSIGNED_SHORT},{location:8,name:"a_zoomRange",count:2,type:c.k.UNSIGNED_SHORT}]})),y=c.r.TRIANGLES
var x
m&&(p=this._getTriangleDesc(i.materialKey,p),y=c.r.POINTS)
const{attributes:v,bufferLayouts:b}=p,O=a.materialManager.getMaterialProgram(e,_,"materials/line",v,n)
if(f&&Object(r.l)(d)&&!O.compiled)return void d()
const S=1/e.pixelRatio
s.useProgram(O),this._setSharedUniforms(O,e,t),_.textureBinding&&a.textureManager.bindTextures(s,O,_)
const T=2**(u-t.key.level)
O.setUniform1f("u_zoomFactor",T),O.setUniform1f("u_blur",0+S),O.setUniform1f("u_antialiasing",S),this._setSizeVVUniforms(_,O,l,t),this._setColorAndOpacityVVUniforms(_,O,l),s.setFaceCullingEnabled(!1)
const C=i.target.getVAO(s,b,v,m)
let w=i.indexCount,M=i.indexFrom*Uint32Array.BYTES_PER_ELEMENT
m&&(w/=3,M/=3),s.bindVAO(C),s.drawElements(y,w,c.k.UNSIGNED_INT,M)}}class F extends p.a{dispose(){}getGeometryType(){return m.d.TEXT}supportsSymbology(e){return!0}drawGeometry(e,t,i,n){const{context:s,painter:a,rendererInfo:l,state:u,passOptions:h,requestRender:d,allowDelayedRender:f}=e,_=g.f.load(i.materialKey),m=Object(r.l)(h)&&"hittest"===h.type,{bufferLayouts:p,attributes:y}=(v=_,Object(o.g)(v.data,{geometry:[{location:0,name:"a_pos",count:2,type:c.k.SHORT},{location:1,name:"a_id",count:4,type:c.k.UNSIGNED_BYTE},{location:2,name:"a_color",count:4,type:c.k.UNSIGNED_BYTE,normalized:!0},{location:3,name:"a_haloColor",count:4,type:c.k.UNSIGNED_BYTE,normalized:!0},{location:4,name:"a_texFontSize",count:4,type:c.k.UNSIGNED_BYTE},{location:5,name:"a_aux",count:4,type:c.k.BYTE},{location:6,name:"a_zoomRange",count:2,type:c.k.UNSIGNED_SHORT},{location:7,name:"a_vertexOffset",count:2,type:c.k.SHORT},{location:8,name:"a_texCoords",count:2,type:c.k.UNSIGNED_SHORT}]})),x=a.materialManager.getMaterialProgram(e,_,"materials/text",y,n)
var v
if(f&&Object(r.l)(d)&&!x.compiled)return void d()
s.useProgram(x)
let b=c.r.TRIANGLES
m&&(b=c.r.POINTS),this._setSharedUniforms(x,e,t),a.textureManager.bindTextures(s,x,_),x.setUniformMatrix3fv("u_displayMat3",u.displayMat3),x.setUniformMatrix3fv("u_displayViewMat3",u.displayViewMat3),this._setSizeVVUniforms(_,x,l,t),this._setColorAndOpacityVVUniforms(_,x,l),this._setRotationVVUniforms(_,x,l)
const O=i.target.getVAO(s,p,y),S=i.indexFrom*Uint32Array.BYTES_PER_ELEMENT
x.setUniform1f("u_isHaloPass",0),x.setUniform1f("u_isBackgroundPass",1),s.bindVAO(O),s.drawElements(b,i.indexCount,c.k.UNSIGNED_INT,S),x.setUniform1f("u_isHaloPass",1),x.setUniform1f("u_isBackgroundPass",0),s.drawElements(c.r.TRIANGLES,i.indexCount,c.k.UNSIGNED_INT,S),x.setUniform1f("u_isHaloPass",0),x.setUniform1f("u_isBackgroundPass",0),s.drawElements(b,i.indexCount,c.k.UNSIGNED_INT,S)}}const k={marker:M.a,line:z,fill:x,text:F,label:D,clip:h,stencil:P.a,bitmap:n.a,overlay:f,tileInfo:w.a,vtlBackground:E.a,vtlFill:A.a,vtlLine:j.a,vtlCircle:L.a,vtlSymbol:R.a,dotDensity:class extends x{constructor(){super(...arguments),this._dotTextureSize=0,this._dotTextures=null,this._dotSamplers=new Int32Array([d.S,d.T]),this._dotVAO=null,this._dotDesc={vsPath:"dot/dot",fsPath:"dot/dot",attributes:new Map([["a_pos",0]])}}dispose(){super.dispose(),this._disposeTextures(),this._dotFBO=Object(r.f)(this._dotFBO),this._dotVAO=Object(r.f)(this._dotVAO)}getGeometryType(){return m.d.FILL}supportsSymbology(e){return e===m.e.DOT_DENSITY}_drawFills(e,t,i,n,s,o){const{passOptions:a}=e
if(Object(r.l)(a)&&"hittest"===a.type)super._drawFills(e,t,i,n,s,o)
else{const n=this._drawDotLocations(e,t,i,s,o)
this._drawDotDensity(e,t,n)}}_drawDotDensity(e,t,i){const{context:n,painter:s,rendererInfo:o,requestRender:a,allowDelayedRender:l}=e,u=s.materialManager.getProgram(this._dotDesc)
if(l&&Object(r.l)(a)&&!u.compiled)return void a()
const{rendererSchema:h}=o
Object(y.a)(h,"dot-density")
const d=this._createDotDensityMesh(n,this._dotDesc.attributes,{geometry:[{name:"a_pos",count:2,type:c.k.SHORT,divisor:0,normalized:!1,offset:0,stride:4}]})
n.setStencilTestEnabled(!0),n.useProgram(u),u.setUniform1f("u_tileZoomFactor",1),u.setUniform1i("u_texture",this._dotSamplers[0]),u.setUniform1f("u_dotSize",Math.max(h.dotSize,1)),u.setUniform1f("u_pixelRatio",window.devicePixelRatio),this._setSharedUniforms(u,e,t),n.bindTexture(i,this._dotSamplers[0]),n.bindVAO(d),n.drawArrays(c.r.POINTS,0,262144)}_drawDotLocations(e,t,i,n,r){const{context:s,rendererInfo:o,requiredLevel:a}=e,l=s.getViewport(),{rendererSchema:u}=o
Object(y.a)(u,"dot-density")
const{dotScale:h,colors:f,activeDots:_,backgroundColor:m,dotValue:p}=u
s.setViewport(0,0,512,512)
const g=s.getBoundFramebufferObject(),x=this._createFBO(s)
s.bindFramebuffer(x),s.setClearColor(0,0,0,0),s.clear(s.gl.COLOR_BUFFER_BIT|s.gl.STENCIL_BUFFER_BIT),s.setStencilTestEnabled(!1)
const v=1/2**(a-t.key.level),b=d.Z,O=b*window.devicePixelRatio*b*window.devicePixelRatio,S=1/v*(1/v),T=h?e.state.scale/h:1
return i.setUniform1f("u_tileZoomFactor",v),i.setUniform1f("u_tileDotsOverArea",O/(d.Z*window.devicePixelRatio*d.Z*window.devicePixelRatio)),i.setUniformMatrix4fv("u_dotColors",f),i.setUniform4fv("u_isActive",_),i.setUniform4fv("u_dotBackgroundColor",m),i.setUniform1f("u_dotValue",Math.max(1,p*T*S)),this._bindDotDensityTextures(s,i,o,b),s.drawElements(c.r.TRIANGLES,n,c.k.UNSIGNED_INT,r),s.setViewport(l.x,l.y,l.width,l.height),s.bindFramebuffer(g),x.colorTexture}_createFBO(e){if(Object(r.k)(this._dotFBO)){const t=512,i=512,n={target:c.A.TEXTURE_2D,pixelFormat:c.p.RGBA,dataType:c.q.UNSIGNED_BYTE,samplingMode:c.z.NEAREST,wrapMode:c.B.CLAMP_TO_EDGE,width:t,height:i},r={colorTarget:c.y.TEXTURE,depthStencilTarget:c.m.DEPTH_STENCIL_RENDER_BUFFER},s=new O.a(e,{width:t,height:i,internalFormat:c.s.DEPTH_STENCIL})
this._dotFBO=new b.a(e,r,n,s)}return this._dotFBO}_disposeTextures(){if(this._dotTextures){for(let e=0;e<this._dotTextures.length;e++)this._dotTextures[e].dispose()
this._dotTextures=null}}_bindDotDensityTextures(e,t,i,n){const{rendererSchema:r}=i
Object(y.a)(r,"dot-density")
const s=this._createDotDensityTextures(e,n,r.seed)
t.setUniform1iv("u_dotTextures",this._dotSamplers)
for(let t=0;t<s.length;t++)e.bindTexture(s[t],this._dotSamplers[t])}_createDotDensityMesh(e,t,i){if(Object(r.k)(this._dotVAO)){const n=2,r=new Int16Array(262144*n)
for(let e=0;e<512;e++)for(let t=0;t<512;t++)r[n*(t+512*e)]=t,r[n*(t+512*e)+1]=e
const s=v.a.createVertex(e,c.D.STATIC_DRAW,r)
this._dotVAO=new T.a(e,t,i,{geometry:s},null)}return this._dotVAO}_createDotDensityTextures(e,t,i){if(this._dotTextureSize===t&&this._seed===i||(this._disposeTextures(),this._dotTextureSize=t,this._seed=i),null===this._dotTextures){const n=new _.a(i)
this._dotTextures=[this._allocDotDensityTexture(e,t,n),this._allocDotDensityTexture(e,t,n)]}return this._dotTextures}_allocDotDensityTexture(e,t,i){const n=new Float32Array(t*t*4)
for(let e=0;e<n.length;e++)n[e]=i.getFloat()
return new S.a(e,{wrapMode:c.B.REPEAT,pixelFormat:c.p.RGBA,dataType:c.q.FLOAT,samplingMode:c.z.NEAREST,width:t,height:t},n)}},heatmap:C.a,pieChart:I}},1489:function(e,t,i){"use strict"
i.d(t,"a",(function(){return v}))
var n=i(445),r=(i(235),i(23)),s=i(1473),o=i(1088),a=i(984)
const l=["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uint","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"]
var c=i(1501),u=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"]
function h(e){return function(e){var t=function(){var e,t,i,n=0,r=0,s=999,o=[],a=[],l=1,h=0,d=0,f=!1,_=!1,m=""
return function(e){return a=[],null!==e?g(e.replace?e.replace(/\r\n/g,"\n"):e):(o.length&&p(o.join("")),s=10,p("(eof)"),a)}
function p(e){e.length&&a.push({type:u[s],data:e,position:d,line:l,column:h})}function g(t){var o
for(n=0,i=(m+=t).length;e=m[n],n<i;){switch(o=n,s){case 0:n=b()
break
case 1:case 2:n=v()
break
case 3:n=O()
break
case 4:n=C()
break
case 11:n=T()
break
case 5:n=w()
break
case 9999:n=M()
break
case 9:n=x()
break
case 999:n=y()}o!==n&&("\n"===m[o]?(h=0,++l):++h)}return r+=n,m=m.slice(n),a}function y(){return o=o.length?[]:o,"/"===t&&"*"===e?(d=r+n-1,s=0,t=e,n+1):"/"===t&&"/"===e?(d=r+n-1,s=1,t=e,n+1):"#"===e?(s=2,d=r+n,n):/\s/.test(e)?(s=9,d=r+n,n):(f=/\d/.test(e),_=/[^\w_]/.test(e),d=r+n,s=f?4:_?3:9999,n)}function x(){return/[^\s]/g.test(e)?(p(o.join("")),s=999,n):(o.push(e),t=e,n+1)}function v(){return"\r"!==e&&"\n"!==e||"\\"===t?(o.push(e),t=e,n+1):(p(o.join("")),s=999,n)}function b(){return"/"===e&&"*"===t?(o.push(e),p(o.join("")),s=999,n+1):(o.push(e),t=e,n+1)}function O(){if("."===t&&/\d/.test(e))return s=5,n
if("/"===t&&"*"===e)return s=0,n
if("/"===t&&"/"===e)return s=1,n
if("."===e&&o.length){for(;S(o););return s=5,n}if(";"===e||")"===e||"("===e){if(o.length)for(;S(o););return p(e),s=999,n+1}var i=2===o.length&&"="!==e
if(/[\w_\d\s]/.test(e)||i){for(;S(o););return s=999,n}return o.push(e),t=e,n+1}function S(e){for(var t,i,n=0;;){if(t=c.c.indexOf(e.slice(0,e.length+n).join("")),i=c.c[t],-1===t){if(n--+e.length>0)continue
i=e.slice(0,1).join("")}return p(i),d+=i.length,(o=o.slice(i.length)).length}}function T(){return/[^a-fA-F0-9]/.test(e)?(p(o.join("")),s=999,n):(o.push(e),t=e,n+1)}function C(){return"."===e||/[eE]/.test(e)?(o.push(e),s=5,t=e,n+1):"x"===e&&1===o.length&&"0"===o[0]?(s=11,o.push(e),t=e,n+1):/[^\d]/.test(e)?(p(o.join("")),s=999,n):(o.push(e),t=e,n+1)}function w(){return"f"===e&&(o.push(e),t=e,n+=1),/[eE]/.test(e)||"-"===e&&/[eE]/.test(t)?(o.push(e),t=e,n+1):/[^\d]/.test(e)?(p(o.join("")),s=999,n):(o.push(e),t=e,n+1)}function M(){if(/[^\d\w_]/.test(e)){var i=o.join("")
return s=c.b.indexOf(i)>-1?8:c.a.indexOf(i)>-1?7:6,p(o.join("")),s=999,n}return o.push(e),t=e,n+1}}(),i=[]
return(i=i.concat(t(e))).concat(t(null))}(e)}const d=["GL_OES_standard_derivatives","GL_EXT_frag_depth","GL_EXT_draw_buffers","GL_EXT_shader_texture_lod"]
function f(e,t){for(let i=t-1;i>=0;i--){const t=e[i]
if("whitespace"!==t.type&&"block-comment"!==t.type){if("keyword"!==t.type)break
if("attribute"===t.data||"in"===t.data)return!0}}return!1}function _(e,t,i,n){n=n||i
for(const r of e)if("ident"===r.type&&r.data===i)return n in t?t[n]++:t[n]=0,_(e,t,n+"_"+t[n],n)
return i}function m(e,t,i="afterVersion"){function n(e,t){for(let i=t;i<e.length;i++){const t=e[i]
if("operator"===t.type&&";"===t.data)return i}return null}const r={data:"\n",type:"whitespace"},s=t=>t<e.length&&/[^\r\n]$/.test(e[t].data)
let o=function(e){let t=-1,r=0,s=-1
for(let o=0;o<e.length;o++){const a=e[o]
if("preprocessor"===a.type&&(a.data.match(/\#(if|ifdef|ifndef)\s+.+/)?++r:a.data.match(/\#endif\s*.*/)&&--r),"afterVersion"!==i&&"afterPrecision"!==i||"preprocessor"===a.type&&/^#version/.test(a.data)&&(s=Math.max(s,o)),"afterPrecision"===i&&"keyword"===a.type&&"precision"===a.data){const t=n(e,o)
if(null===t)throw new Error("precision statement not followed by any semicolons!")
s=Math.max(s,t)}t<s&&0===r&&(t=o)}return t+1}(e)
s(o-1)&&e.splice(o++,0,r)
for(const i of t)e.splice(o++,0,i)
s(o-1)&&s(o)&&e.splice(o,0,r)}function p(e,t,i,n="lowp"){m(e,[{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:n},{type:"whitespace",data:" "},{type:"keyword",data:i},{type:"whitespace",data:" "},{type:"ident",data:t},{type:"operator",data:";"}],"afterPrecision")}function g(e,t,i,n,r="lowp"){m(e,[{type:"keyword",data:"layout"},{type:"operator",data:"("},{type:"keyword",data:"location"},{type:"whitespace",data:" "},{type:"operator",data:"="},{type:"whitespace",data:" "},{type:"integer",data:n.toString()},{type:"operator",data:")"},{type:"whitespace",data:" "},{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"keyword",data:i},{type:"whitespace",data:" "},{type:"ident",data:t},{type:"operator",data:";"}],"afterPrecision")}function y(e,t){let i,n,r=-1
for(let s=t;s<e.length;s++){const t=e[s]
if("operator"===t.type&&("["===t.data&&(i=s),"]"===t.data)){n=s
break}"integer"===t.type&&(r=parseInt(t.data,10))}return i&&n&&e.splice(i,n-i+1),r}function x(e,t){const i=(e,null)
if(Object(r.l)(i))return i
const n=h(e)
if("300 es"===function(e,t="100",i="300 es"){const n=/^\s*\#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/
for(const r of e)if("preprocessor"===r.type){const e=n.exec(r.data)
if(e){const n=e[1].replace(/\s\s+/g," ")
if(n===i)return n
if(n===t)return r.data="#version "+i,t
throw new Error("unknown glsl version: "+n)}}return e.splice(0,0,{type:"preprocessor",data:"#version "+i},{type:"whitespace",data:"\n"}),null}(n,"100","300 es"))return e
let s=null,o=null
const c={},u={}
for(let e=0;e<n.length;++e){const i=n[e]
switch(i.type){case"keyword":t===a.u.VERTEX_SHADER&&"attribute"===i.data?i.data="in":"varying"===i.data&&(i.data=t===a.u.VERTEX_SHADER?"out":"in")
break
case"builtin":if(/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(i.data.trim())&&(i.data=i.data.replace(/(2D|Cube|EXT)/g,"")),t===a.u.FRAGMENT_SHADER&&"gl_FragColor"===i.data&&(s||(s=_(n,c,"fragColor"),p(n,s,"vec4")),i.data=s),t===a.u.FRAGMENT_SHADER&&"gl_FragData"===i.data){const t=y(n,e+1),r=_(n,c,"fragData")
g(n,r,"vec4",t,"mediump"),i.data=r}else t===a.u.FRAGMENT_SHADER&&"gl_FragDepthEXT"===i.data&&(o||(o=_(n,c,"gl_FragDepth")),i.data=o)
break
case"ident":if(l.includes(i.data)){if(t===a.u.VERTEX_SHADER&&f(n,e))throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es")
i.data in u||(u[i.data]=_(n,c,i.data)),i.data=u[i.data]}}}for(let e=n.length-1;e>=0;--e){const t=n[e]
if("preprocessor"===t.type){const i=t.data.match(/\#extension\s+(.*)\:/)
if(i&&i[1]&&d.includes(i[1].trim())){const t=n[e+1]
n.splice(e,t&&"whitespace"===t.type?2:1)}const r=t.data.match(/\#ifdef\s+(.*)/)
r&&r[1]&&d.includes(r[1].trim())&&(t.data="#if 1")
const s=t.data.match(/\#ifndef\s+(.*)/)
s&&s[1]&&d.includes(s[1].trim())&&(t.data="#if 0")}}return function(e,t){return t}(0,function(e){return e.map(e=>"eof"!==e.type?e.data:"").join("")}(n))}new Map
class v{constructor(e,t,i,n,r=new Map){this._context=e,this._locations=n,this._uniformBlockBindings=r,this._refCount=1,this._compiled=!1,this._nameToUniformLocation={},this._nameToUniform1={},this._nameToUniform1v=new Map,this._nameToUniform2=new Map,this._nameToUniform3=new Map,this._nameToUniform4=new Map,this._nameToUniformMatrix3=new Map,this._nameToUniformMatrix4=new Map,e||console.error("RenderingContext isn't initialized!"),0===t.length&&console.error("Shaders source should not be empty!"),this._context.type===o.a.WEBGL2&&(t=x(t,a.u.VERTEX_SHADER),i=x(i,a.u.FRAGMENT_SHADER)),this._vShader=b(this._context,a.u.VERTEX_SHADER,t),this._fShader=b(this._context,a.u.FRAGMENT_SHADER,i),this._vShader&&this._fShader||console.error("Error loading shaders!"),this._context.instanceCounter.increment(a.t.Shader,this),Object(s.c)()&&(this.vertexShader=t,this.fragmentShader=i)
const l=this._context.gl,c=l.createProgram()
if(l.attachShader(c,this._vShader),l.attachShader(c,this._fShader),this._locations.forEach((e,t)=>l.bindAttribLocation(c,e,t)),l.linkProgram(c),Object(s.c)()&&!l.getProgramParameter(c,l.LINK_STATUS)&&console.error(`Could not link shader\nvalidated: ${l.getProgramParameter(c,l.VALIDATE_STATUS)}, gl error ${l.getError()}, vertex: ${l.getShaderParameter(this._vShader,l.COMPILE_STATUS)}, fragment: ${l.getShaderParameter(this._fShader,l.COMPILE_STATUS)}, info log: ${l.getProgramInfoLog(c)}, vertex source: ${this.vertexShader}, fragment source: ${this.fragmentShader}`),this._context.type===o.a.WEBGL2){const e=l
for(const[t,i]of this._uniformBlockBindings){const n=e.getUniformBlockIndex(c,t)
n<4294967295&&e.uniformBlockBinding(c,n,i)}}this._glName=c,this._context.instanceCounter.increment(a.t.Program,this)}get glName(){return this._glName}get hasGLName(){return Object(r.l)(this._glName)}get compiled(){if(this._compiled)return!0
const e=this._context.gl.getExtension("KHR_parallel_shader_compile")
return null==e||Object(r.k)(this.glName)?(this._compiled=!0,!0):(this._compiled=!!this._context.gl.getProgramParameter(this.glName,e.COMPLETION_STATUS_KHR),this._compiled)}dispose(){if(--this._refCount>0)return
const e=this._context.gl
this._vShader&&(e.deleteShader(this._vShader),this._vShader=null,this._context.instanceCounter.decrement(a.t.Shader,this)),this._fShader&&(e.deleteShader(this._fShader),this._fShader=null),this._glName&&(e.deleteProgram(this._glName),this._glName=null,this._context.instanceCounter.decrement(a.t.Program,this))}ref(){++this._refCount}_getUniformLocation(e){return void 0===this._nameToUniformLocation[e]&&Object(r.l)(this.glName)&&(++S.numUniforms,this._nameToUniformLocation[e]=this._context.gl.getUniformLocation(this.glName,e)),this._nameToUniformLocation[e]}hasUniform(e){return null!==this._getUniformLocation(e)}setUniform1i(e,t){const i=this._nameToUniform1[e]
void 0!==i&&t===i||(this._context.gl.uniform1i(this._getUniformLocation(e),t),this._nameToUniform1[e]=t)}setUniform1iv(e,t){O(this._nameToUniform1v,e,t)&&this._context.gl.uniform1iv(this._getUniformLocation(e),t)}setUniform2iv(e,t){O(this._nameToUniform2,e,t)&&this._context.gl.uniform2iv(this._getUniformLocation(e),t)}setUniform3iv(e,t){O(this._nameToUniform3,e,t)&&this._context.gl.uniform3iv(this._getUniformLocation(e),t)}setUniform4iv(e,t){O(this._nameToUniform4,e,t)&&this._context.gl.uniform4iv(this._getUniformLocation(e),t)}setUniform1f(e,t){const i=this._nameToUniform1[e]
void 0!==i&&t===i||(this._context.gl.uniform1f(this._getUniformLocation(e),t),this._nameToUniform1[e]=t)}setUniform1fv(e,t){O(this._nameToUniform1v,e,t)&&this._context.gl.uniform1fv(this._getUniformLocation(e),t)}setUniform2f(e,t,i){const n=this._nameToUniform2.get(e)
void 0===n?(this._context.gl.uniform2f(this._getUniformLocation(e),t,i),this._nameToUniform2.set(e,[t,i])):t===n[0]&&i===n[1]||(this._context.gl.uniform2f(this._getUniformLocation(e),t,i),n[0]=t,n[1]=i)}setUniform2fv(e,t){O(this._nameToUniform2,e,t)&&this._context.gl.uniform2fv(this._getUniformLocation(e),t)}setUniform3f(e,t,i,n){const r=this._nameToUniform3.get(e)
void 0===r?(this._context.gl.uniform3f(this._getUniformLocation(e),t,i,n),this._nameToUniform3[e]=[t,i,n]):t===r[0]&&i===r[1]&&n===r[2]||(this._context.gl.uniform3f(this._getUniformLocation(e),t,i,n),r[0]=t,r[1]=i,r[2]=n)}setUniform3fv(e,t){O(this._nameToUniform3,e,t)&&this._context.gl.uniform3fv(this._getUniformLocation(e),t)}setUniform4f(e,t,i,n,r){const s=this._nameToUniform4.get(e)
void 0===s?(this._context.gl.uniform4f(this._getUniformLocation(e),t,i,n,r),this._nameToUniform4.set(e,[t,i,n,r])):void 0!==s&&t===s[0]&&i===s[1]&&n===s[2]&&r===s[3]||(this._context.gl.uniform4f(this._getUniformLocation(e),t,i,n,r),s[0]=t,s[1]=i,s[2]=n,s[3]=r)}setUniform4fv(e,t){O(this._nameToUniform4,e,t)&&this._context.gl.uniform4fv(this._getUniformLocation(e),t)}setUniformMatrix3fv(e,t,i=!1){O(this._nameToUniformMatrix3,e,t)&&this._context.gl.uniformMatrix3fv(this._getUniformLocation(e),i,t)}setUniformMatrix4fv(e,t,i=!1){O(this._nameToUniformMatrix4,e,t)&&this._context.gl.uniformMatrix4fv(this._getUniformLocation(e),i,t)}stop(){}}function b(e,t,i){const n=e.gl,r=n.createShader(t)
return n.shaderSource(r,i),n.compileShader(r),Object(s.c)()&&!n.getShaderParameter(r,n.COMPILE_STATUS)&&(console.error("Compile error in ".concat(t===a.u.VERTEX_SHADER?"vertex":"fragment"," shader")),console.error(n.getShaderInfoLog(r)),console.error(function(e){let t=2
return e.replace(/\n/g,()=>"\n"+function(e){return e>=1e3?e.toString():("  "+e).slice(-3)}(t++)+":")}(i))),S.enabled&&(S.compiledLOC+=i.match(/\n/g).length+1),r}function O(e,t,i){const r=e.get(t)
return r?Object(n.r)(r,i):(e.set(t,Array.from(i)),!0)}const S={compiledLOC:0,numUniforms:0,enabled:!1}},1493:function(e,t,i){"use strict"
i.d(t,"a",(function(){return n}))
class n{get length(){return this._pos}constructor(e,t){this._pos=0
const i=t?this._roundToNearest(t,e.BYTES_PER_ELEMENT):40
this._array=new ArrayBuffer(i),this._buffer=new e(this._array),this._ctor=e,this._i16View=new Int16Array(this._array)}_roundToNearest(e,t){const i=Math.round(e)
return i+(t-i%t)}_ensureSize(e){if(this._pos+e>=this._buffer.length){const t=this._roundToNearest(1.25*(this._array.byteLength+e*this._buffer.BYTES_PER_ELEMENT),this._buffer.BYTES_PER_ELEMENT),i=new ArrayBuffer(t),n=new this._ctor(i)
n.set(this._buffer,0),this._array=i,this._buffer=n,this._i16View=new Int16Array(this._array)}}ensureSize(e){this._ensureSize(e)}writeF32(e){this._ensureSize(1)
const t=this._pos
return new Float32Array(this._array,4*this._pos,1)[0]=e,this._pos++,t}push(e){this._ensureSize(1)
const t=this._pos
return this._buffer[this._pos++]=e,t}writeFixed(e){this._buffer[this._pos++]=e}setValue(e,t){this._buffer[e]=t}i1616Add(e,t,i){this._i16View[2*e]+=t,this._i16View[2*e+1]+=i}getValue(e){return this._buffer[e]}incr(e){if(this._buffer.length<e)throw new Error("Increment index overflows the target buffer")
this._buffer[e]++}decr(e){this._buffer[e]--}writeRegion(e){this._ensureSize(e.length)
const t=this._pos
return this._buffer.set(e,this._pos),this._pos+=e.length,t}writeManyFrom(e,t,i){this._ensureSize(i-t)
for(let n=t;n!==i;n++)this.writeFixed(e._buffer[n])}buffer(){const e=this._array.slice(0,4*this._pos)
return this.destroy(),e}toArray(){const e=this._array,t=[]
for(let i=0;i<e.byteLength/4;i++)t.push(e[i])
return t}seek(e){this._pos=e}destroy(){this._array=null,this._buffer=null}}},1501:function(e,t,i){"use strict"
i.d(t,"a",(function(){return h})),i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return c}))
var n,r={},s={get exports(){return r},set exports(e){r=e}}
void 0!==(n=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"])&&(s.exports=n)
const o=r
var a,l={}
a={get exports(){return l},set exports(e){l=e}},function(e){var t=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"]
void 0!==t&&(a.exports=t)}()
const c=l
var u={}
!function(e){!function(t){var i=["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT","textureSize","texelFetch"]
void 0!==i&&(e.exports=i)}()}({get exports(){return u},set exports(e){u=e}})
const h=u},1512:function(e,t,i){"use strict"
i.d(t,"a",(function(){return a}))
var n=i(446),r=i(233),s=i(1003),o=i(1022)
function a(e){return Object(o.v)(e.minDataValue)&&Object(o.v)(e.maxDataValue)&&null!=e.minSize&&null!=e.maxSize?s.f.SIZE_MINMAX_VALUE:(e.expression&&"view.scale"===e.expression||e.valueExpression&&"$view.scale"===e.valueExpression)&&Array.isArray(e.stops)?s.f.SIZE_SCALE_STOPS:(null!=e.field||e.expression&&"view.scale"!==e.expression||e.valueExpression&&"$view.scale"!==e.valueExpression)&&(Array.isArray(e.stops)||"levels"in e&&e.levels)?s.f.SIZE_FIELD_STOPS:(null!=e.field||e.expression&&"view.scale"!==e.expression||e.valueExpression&&"$view.scale"!==e.valueExpression)&&null!=e.valueUnit?s.f.SIZE_UNIT_VALUE:(r.a.getLogger("esri.views.2d.engine.webgl").error(new n.a("mapview-bad-type","Found invalid size VisualVariable",e)),s.f.NONE)}},1516:function(e,t,i){"use strict"
i.d(t,"a",(function(){return w})),i(235)
var n=i(23),r=i(1151),s=i(1488),o=i(1502),a=i(446),l=i(233),c=i(978),u=i(1331),h=i(1303),d=i(1013),f=i(1026),_=i(1057),m=i(1062),p=i(1064),g=i(1068),y=i(984)
const x=(e,t,i,n)=>{let r=0
for(let n=1;n<i;n++){const i=e[2*(t+n-1)],s=e[2*(t+n-1)+1]
r+=(e[2*(t+n)]-i)*(e[2*(t+n)+1]+s)}return n?r>0:r<0},v=({coords:e,lengths:t},i)=>{const n=[]
for(let r=0,s=0;r<t.length;s+=t[r],r+=1){const o=s,a=[]
for(;r<t.length-1&&x(e,s+t[r],t[r+1],i);r+=1,s+=t[r])a.push(s+t[r]-o)
const l=e.slice(2*o,2*(s+t[r])),c=Object(h.a)(l,a,2)
for(const e of c)n.push(e+o)}return n}
class b{constructor(e,t,i,n=!1){this._cache={},this.vertices=e,this.indices=t,this.primitiveType=i,this.isMapSpace=n}static fromRect({x:e,y:t,width:i,height:n}){const r=e,s=t,o=r+i,a=s+n
return b.fromScreenExtent({xmin:r,ymin:s,xmax:o,ymax:a})}static fromPath(e){const t=Object(_.f)(new m.a,e.path,!1,!1),i=t.coords,n=new Uint32Array(v(t,!0)),r=new Uint32Array(i.length/2)
for(let e=0;e<r.length;e++)r[e]=Object(p.a)(Math.floor(i[2*e]),Math.floor(i[2*e+1]))
return new b({geometry:r},n,y.r.TRIANGLES)}static fromGeometry(e,t){var i
const n=null==(i=t.geometry)?void 0:i.type
switch(n){case"polygon":return b.fromPolygon(e,t.geometry)
case"extent":return b.fromMapExtent(e,t.geometry)
default:return l.a.getLogger("esri.views.2d.engine.webgl.Mesh2D").error(new a.a("mapview-bad-type","Unable to create a mesh from type "+n,t)),b.fromRect({x:0,y:0,width:1,height:1})}}static fromPolygon(e,t){const i=Object(_.h)(new m.a,t,!1,!1),n=i.coords,r=new Uint32Array(v(i,!1)),s=new Uint32Array(n.length/2),o=Object(f.d)(),a=Object(f.d)()
for(let t=0;t<s.length;t++)Object(d.s)(o,n[2*t],n[2*t+1]),e.toScreen(a,o),s[t]=Object(p.a)(Math.floor(a[0]),Math.floor(a[1]))
return new b({geometry:s},r,y.r.TRIANGLES,!0)}static fromScreenExtent({xmin:e,xmax:t,ymin:i,ymax:n}){const r={geometry:new Uint32Array([Object(p.a)(e,i),Object(p.a)(t,i),Object(p.a)(e,n),Object(p.a)(e,n),Object(p.a)(t,i),Object(p.a)(t,n)])},s=new Uint32Array([0,1,2,3,4,5])
return new b(r,s,y.r.TRIANGLES)}static fromMapExtent(e,t){const[i,n]=e.toScreen([0,0],[t.xmin,t.ymin]),[r,s]=e.toScreen([0,0],[t.xmax,t.ymax]),o={geometry:new Uint32Array([Object(p.a)(i,n),Object(p.a)(r,n),Object(p.a)(i,s),Object(p.a)(i,s),Object(p.a)(r,n),Object(p.a)(r,s)])},a=new Uint32Array([0,1,2,3,4,5])
return new b(o,a,y.r.TRIANGLES)}destroy(){Object(n.l)(this._cache.indexBuffer)&&this._cache.indexBuffer.dispose()
for(const e in this._cache.vertexBuffers)Object(n.l)(this._cache.vertexBuffers[e])&&this._cache.vertexBuffers[e].dispose()}get elementType(){return(e=>{switch(e.BYTES_PER_ELEMENT){case 1:return y.k.UNSIGNED_BYTE
case 2:return y.k.UNSIGNED_SHORT
case 4:return y.k.UNSIGNED_INT
default:throw new a.a("Cannot get DataType of array")}})(this.indices)}getIndexBuffer(e,t=y.D.STATIC_DRAW){return this._cache.indexBuffer||(this._cache.indexBuffer=g.a.createIndex(e,t,this.indices)),this._cache.indexBuffer}getVertexBuffers(e,t=y.D.STATIC_DRAW){return this._cache.vertexBuffers||(this._cache.vertexBuffers=Object.keys(this.vertices).reduce((i,n)=>({...i,[n]:g.a.createVertex(e,t,this.vertices[n])}),{})),this._cache.vertexBuffers}}var O=i(1116)
const S=e=>parseFloat(e)/100
class T extends u.a{constructor(e,t){super(),this._clip=t,this._cache={},this.stage=e,this._handle=Object(c.f)(()=>t.version,()=>this._invalidate()),this.ready()}static fromClipArea(e,t){return new T(e,t)}_destroyGL(){Object(n.l)(this._cache.mesh)&&(this._cache.mesh.destroy(),this._cache.mesh=null),Object(n.l)(this._cache.vao)&&(this._cache.vao.dispose(),this._cache.vao=null)}destroy(){this._destroyGL(),this._handle.remove()}getVAO(e,t,i,r){const[s,o]=t.size
if("geometry"!==this._clip.type&&this._lastWidth===s&&this._lastHeight===o||(this._lastWidth=s,this._lastHeight=o,this._destroyGL()),Object(n.k)(this._cache.vao)){const n=this._createMesh(t,this._clip),s=n.getIndexBuffer(e),o=n.getVertexBuffers(e)
this._cache.mesh=n,this._cache.vao=new O.a(e,i,r,o,s)}return this._cache.vao}_createTransforms(){return{dvs:Object(r.b)()}}_invalidate(){this._destroyGL(),this.requestRender()}_createScreenRect(e,t){const[i,n]=e.size,r="string"==typeof t.left?S(t.left)*i:t.left,s="string"==typeof t.right?S(t.right)*i:t.right,o="string"==typeof t.top?S(t.top)*n:t.top,a="string"==typeof t.bottom?S(t.bottom)*n:t.bottom,l=r,c=o
return{x:l,y:c,width:Math.max(i-s-l,0),height:Math.max(n-a-c,0)}}_createMesh(e,t){switch(t.type){case"rect":return b.fromRect(this._createScreenRect(e,t))
case"path":return b.fromPath(t)
case"geometry":return b.fromGeometry(e,t)
default:return l.a.getLogger("esri.views.2d.engine.webgl.ClippingInfo").error(new a.a("mapview-bad-type","Unable to create ClippingInfo mesh from clip of type: ${clip.type}")),b.fromRect({x:0,y:0,width:1,height:1})}}}var C=i(1003)
class w extends o.a{constructor(){super(...arguments),this.name=this.constructor.name}set clips(e){this._clips=e,this.children.forEach(t=>t.clips=e),this._updateClippingInfo()}beforeRender(e){super.beforeRender(e),this.updateTransforms(e.state)}_createTransforms(){return{dvs:Object(r.b)()}}doRender(e){const t=this.createRenderParams(e),{painter:i,globalOpacity:n,profiler:r,drawPhase:s}=t,o=s===C.c.LABEL||s===C.c.HIGHLIGHT?1:n*this.computedOpacity
r.recordContainerStart(this.name),i.beforeRenderLayer(t,this._clippingInfos?255:0,o),this.renderChildren(t),i.compositeLayer(t,o),r.recordContainerEnd()}renderChildren(e){Object(n.k)(this._renderPasses)&&(this._renderPasses=this.prepareRenderPasses(e.painter))
for(const t of this._renderPasses)try{t.render(e)}catch(e){}}createRenderParams(e){return e.requireFBO=this.requiresDedicatedFBO,e}prepareRenderPasses(e){return[e.registerRenderPass({name:"clip",brushes:[s.a.clip],target:()=>this._clippingInfos,drawPhase:C.c.MAP|C.c.LABEL|C.c.LABEL_ALPHA|C.c.DEBUG|C.c.HIGHLIGHT})]}updateTransforms(e){for(const t of this.children)t.setTransform(e)}onAttach(){super.onAttach(),this._updateClippingInfo()}onDetach(){super.onDetach(),this._updateClippingInfo()}_updateClippingInfo(){Object(n.l)(this._clippingInfos)&&(this._clippingInfos.forEach(e=>e.destroy()),this._clippingInfos=null)
const e=this.stage
if(!e)return
const t=this._clips
Object(n.l)(t)&&t.length&&(this._clippingInfos=t.items.map(t=>T.fromClipArea(e,t))),this.requestRender()}}},1525:function(e,t,i){"use strict"
i.d(t,"a",(function(){return d})),i.d(t,"b",(function(){return m})),i.d(t,"c",(function(){return g}))
var n=i(23),r=i(1015),s=i(1578),o=i(988),a=i(774)
const l=[0,0]
function c(e,t){if(!t)return null
if("x"in t){const i={x:0,y:0}
return[i.x,i.y]=e(t.x,t.y,l),null!=t.z&&(i.z=t.z),null!=t.m&&(i.m=t.m),i}if("xmin"in t){const i={xmin:0,ymin:0,xmax:0,ymax:0}
return[i.xmin,i.ymin]=e(t.xmin,t.ymin,l),[i.xmax,i.ymax]=e(t.xmax,t.ymax,l),t.hasZ&&(i.zmin=t.zmin,i.zmax=t.zmax,i.hasZ=!0),t.hasM&&(i.mmin=t.mmin,i.mmax=t.mmax,i.hasM=!0),i}return"rings"in t?{rings:u(t.rings,e),hasM:t.hasM,hasZ:t.hasZ}:"paths"in t?{paths:u(t.paths,e),hasM:t.hasM,hasZ:t.hasZ}:"points"in t?{points:h(t.points,e),hasM:t.hasM,hasZ:t.hasZ}:null}function u(e,t){const i=[]
for(const n of e)i.push(h(n,t))
return i}function h(e,t){const i=[]
for(const n of e){const e=t(n[0],n[1],[0,0])
i.push(e),n.length>2&&e.push(n[2]),n.length>3&&e.push(n[3])}return i}async function d(e,t){if(!e||!t)return
const i=Array.isArray(e)?e.map(e=>Object(n.l)(e.geometry)?e.geometry.spatialReference:null).filter(n.l):[e]
await Object(r.g)(i.map(e=>({source:e,dest:t})))}const f=c.bind(null,a.lngLatToXY),_=c.bind(null,a.xyToLngLat)
function m(e,t,i,n){if(!e)return e
if(i||(i=t,t=e.spatialReference),!Object(o.l)(t)||!Object(o.l)(i)||Object(o.d)(t,i))return e
if(Object(a.canProject)(t,i)){const t=Object(o.p)(i)?f(e):_(e)
return t.spatialReference=i,t}return Object(r.r)(s.a,[e],t,i,null,n)[0]}const p=new class{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(e,t,i){if(!e||!e.length||!t||!i||Object(o.d)(t,i))return e
const n={geometries:e,inSpatialReference:t,outSpatialReference:i,resolve:null}
return this._jobs.push(n),new Promise(e=>{n.resolve=e,null===this._timer&&(this._timer=setTimeout(this._process,10))})}_process(){this._timer=null
const e=this._jobs.shift()
if(!e)return
const{geometries:t,inSpatialReference:i,outSpatialReference:n,resolve:l}=e
Object(a.canProject)(i,n)?Object(o.p)(n)?l(t.map(f)):l(t.map(_)):l(Object(r.r)(s.a,t,i,n,null,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}}
function g(e,t,i){return p.push(e,t,i)}},1527:function(e,t,i){"use strict"
i.d(t,"a",(function(){return n}))
class n{constructor(e=0,t=0,i=0,n=0){this.x=e,this.y=t,this.width=i,this.height=n}get isEmpty(){return this.width<=0||this.height<=0}union(e){this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.width=Math.max(this.width,e.width),this.height=Math.max(this.height,e.height)}}},1528:function(e,t,i){"use strict"
i.d(t,"a",(function(){return P}))
var n=i(968),r=i(993),s=i(1179),o=i(446),a=i(978),l=i(970),c=(i(971),i(445),i(969)),u=i(1502),h=i(1522),d=i(972)
let f=class extends d.a{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}}
Object(n.a)([Object(l.b)({readOnly:!0})],f.prototype,"version",null),f=Object(n.a)([Object(c.a)("esri.views.layers.support.ClipArea")],f)
const _=f
var m
let p=m=class extends _{constructor(e){super(e),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new m({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}}
Object(n.a)([Object(l.b)({type:[Number,String],json:{write:!0}})],p.prototype,"left",void 0),Object(n.a)([Object(l.b)({type:[Number,String],json:{write:!0}})],p.prototype,"right",void 0),Object(n.a)([Object(l.b)({type:[Number,String],json:{write:!0}})],p.prototype,"top",void 0),Object(n.a)([Object(l.b)({type:[Number,String],json:{write:!0}})],p.prototype,"bottom",void 0),p=m=Object(n.a)([Object(c.a)("esri.views.layers.support.ClipRect")],p)
const g=p
i(982)
var y,x=i(1004),v=i(983),b=i(770),O=i(773)
const S={base:x.a,key:"type",typeMap:{extent:b.default,polygon:O.default}}
let T=y=class extends _{constructor(e){super(e),this.type="geometry",this.geometry=null}clone(){var e,t
return new y({geometry:null!=(e=null==(t=this.geometry)?void 0:t.clone())?e:null})}commitVersionProperties(){this.commitProperty("geometry")}}
Object(n.a)([Object(l.b)({types:S,json:{read:v.a,write:!0}})],T.prototype,"geometry",void 0),T=y=Object(n.a)([Object(c.a)("esri.views.layers.support.Geometry")],T)
const C=T
let w=class extends _{constructor(e){super(e),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}}
Object(n.a)([Object(l.b)({type:[[[Number]]],json:{write:!0}})],w.prototype,"path",void 0),w=Object(n.a)([Object(c.a)("esri.views.layers.support.Path")],w)
const M=w,I=r.a.ofType({key:"type",base:null,typeMap:{rect:g,path:M,geometry:C}}),P=e=>{let t=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new I,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1,this.highlightOptions=null}initialize(){var e,t,i,n
const r=null==(e=null==(t=this.view)?void 0:t.spatialReferenceLocked)||e;(null==(i=this.view)?void 0:i.spatialReference)&&r&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new o.a("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new u.a),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([Object(a.f)(()=>this.suspended,e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()},a.e),Object(a.f)(()=>{var e,t
return null!=(e=null==(t=this.layer)?void 0:t.opacity)?e:1},e=>{this.container&&(this.container.opacity=e)},a.e),Object(a.f)(()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal",e=>{this.container&&(this.container.blendMode=e)},a.e),Object(a.f)(()=>this.layer&&"effect"in this.layer?this.layer.effect:null,e=>{this.container&&(this.container.effect=e)},a.e),Object(a.f)(()=>this.highlightOptions,e=>this.container.highlightOptions=e,a.e),Object(a.b)(()=>this.clips,"change",()=>{this.container&&(this.container.clips=this.clips)},a.e),Object(a.f)(()=>{var e
return{scale:null==(e=this.view)?void 0:e.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}},({scale:e})=>{const t=null!=e&&this.isVisibleAtScale(e)
t!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",t)},a.e)],"constructor"),null!=(n=this.view)&&n.whenLayerView?this.view.whenLayerView(this.layer).then(e=>{e===this&&this.processAttach()},()=>{}):this.when().then(()=>{this.processAttach()},()=>{}))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){var e
const t=null==(e=this.view)?void 0:e.spatialReference
return null==t||this.supportsSpatialReference(t)}get updating(){var e
return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(null==(e=this.updatingHandles)||!e.updating))}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}isVisibleAtScale(e){const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null
if(!t)return!0
const{minScale:i,maxScale:n}=t
return(0===i||e<=i)&&(0===n||e>=n)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported,i=this.visibleAtCurrentScale
return t&&(e.spatialReferenceNotSupported=t),i&&(e.outsideScaleRange=i),e}addAttachHandles(e){this.addHandles(e,"attach")}}
return Object(n.a)([Object(l.b)()],t.prototype,"attached",void 0),Object(n.a)([Object(l.b)({type:I,set(e){const t=Object(s.b)(e,this._get("clips"),I)
this._set("clips",t)}})],t.prototype,"clips",void 0),Object(n.a)([Object(l.b)()],t.prototype,"container",void 0),Object(n.a)([Object(l.b)()],t.prototype,"moving",void 0),Object(n.a)([Object(l.b)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),Object(n.a)([Object(l.b)({readOnly:!0})],t.prototype,"updateParameters",void 0),Object(n.a)([Object(l.b)()],t.prototype,"updateRequested",void 0),Object(n.a)([Object(l.b)()],t.prototype,"updating",null),Object(n.a)([Object(l.b)()],t.prototype,"view",void 0),Object(n.a)([Object(l.b)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",void 0),Object(n.a)([Object(l.b)({type:h.a})],t.prototype,"highlightOptions",void 0),t=Object(n.a)([Object(c.a)("esri.views.2d.layers.LayerView2D")],t),t}},1534:function(e,t,i){"use strict"
i.d(t,"a",(function(){return n}))
class n{constructor(){this.name=this.constructor.name}createOptions(e,t){return null}}},1535:function(e,t,i){"use strict"
i.d(t,"a",(function(){return o})),i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return s}))
var n=i(110)
const r=new Map
async function s(e){const t=a(e)
let i=r.get(t)
if(i)return i
const s=new FontFace(e.family,`url('${n.default.fontsUrl}/woff2/${t}.woff2') format('woff2')`),o=document.fonts
return o.has(s)&&"loading"===s.status?s.loaded:(i=s.load(),r.set(t,i),o.add(s),i)}function o(e){if(!e)return"arial-unicode-ms"
const t=e.toLowerCase().split(" ").join("-")
switch(t){case"serif":return"noto-serif"
case"sans-serif":return"arial-unicode-ms"
case"monospace":return"ubuntu-mono"
case"fantasy":return"cabin-sketch"
case"cursive":return"redressed"
default:return t}}function a(e){const t=function(e){if(!e.weight)return""
switch(e.weight.toLowerCase()){case"bold":case"bolder":return"-bold"}return""}(e)+function(e){if(!e.style)return""
switch(e.style.toLowerCase()){case"italic":case"oblique":return"-italic"}return""}(e)
return o(e.family)+(t.length>0?t:"-regular")}},1537:function(e,t,i){"use strict"
i.d(t,"a",(function(){return Z})),i.d(t,"b",(function(){return w}))
var n=i(990),r=i(1535),s=i(234),o=i(233),a=i(23),l=i(980),c=i(447),u=i(1010),h=i(1350),d=i(1030)
const f=new Set(["StartTimeOffset","Duration","RepeatDelay"])
function _(e,t){return f.has(t)?(i=e,.05*Math.max(Math.round(i/.05),1)):e
var i}var m=i(1684),p=i(1230),g=i(1582),y=i(1391),x=i(1e3),v=i(1696)
const b=o.a.getLogger("esri.symbols.cim.cimAnalyzer")
function O(e){switch(e){case"Butt":return d.e.BUTT
case"Square":return d.e.SQUARE
default:return d.e.ROUND}}function S(e){switch(e){case"Bevel":return d.p.BEVEL
case"Miter":return d.p.MITER
default:return d.p.ROUND}}function T(e,t,i,n){let r
e[t]?r=e[t]:(r={},e[t]=r),r[i]=n}function C(e){const t=e.markerPlacement
return t&&t.angleToLine?d.a.MAP:d.a.SCREEN}async function w(e,t,i,n,r){var s
const o=null!=n?n:[]
if(!e)return o
let l,c
const f={}
if("CIMSymbolReference"!==e.type)return b.error("Expect cim type to be 'CIMSymbolReference'"),o
if(l=e.symbol,c=e.primitiveOverrides,c){const e=[]
for(const i of c){const n=i.valueExpressionInfo
if(n&&t){const r=n.expression,s=Object(u.d)(r,t.spatialReference,t.fields).then(e=>{Object(a.k)(e)||T(f,i.primitiveName,i.propertyName,e)})
e.push(s)}else null!=i.value&&T(f,i.primitiveName,i.propertyName,i.value)}e.length>0&&await Promise.all(e)}const _=[]
switch(h.a.fetchResources(l,i,_),_.length>0&&await Promise.all(_),null==(s=l)?void 0:s.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":!function(e,t,i,n,r,s,o){var a
if(!e)return
const l=e.symbolLayers
if(!l)return
const c=e.effects
let u=d.a.SCREEN
const f=null!=(a=h.a.getSize(e))?a:0
"CIMPointSymbol"===e.type&&"Map"===e.angleAlignment&&(u=d.a.MAP)
let _=l.length
for(;_--;){const a=l[_]
if(!a||!1===a.enable)continue
let d
c&&c.length&&(d=[...c])
const m=a.effects
m&&m.length&&(c?d.push(...m):d=[...m])
const p=[]
let g
h.c.findEffectOverrides(d,t,p),g=p.length>0?H(d,p,i,n):d
const y=[]
switch(h.c.findApplicableOverrides(a,t,y),a.type){case"CIMSolidFill":M(a,g,i,y,n,r)
break
case"CIMPictureFill":I(a,g,i,y,n,s,r)
break
case"CIMHatchFill":P(a,g,i,y,n,r)
break
case"CIMGradientFill":E(a,g,i,y,n,r)
break
case"CIMSolidStroke":L(a,g,i,y,n,r,"CIMPolygonSymbol"===e.type,f)
break
case"CIMPictureStroke":A(a,g,i,y,n,r,"CIMPolygonSymbol"===e.type,f)
break
case"CIMGradientStroke":j(a,g,i,y,n,r,"CIMPolygonSymbol"===e.type,f)
break
case"CIMCharacterMarker":if(R(a,g,i,y,n,r))break
break
case"CIMPictureMarker":if(R(a,g,i,y,n,r))break
"CIMLineSymbol"===e.type&&(u=C(a)),D(a,g,i,y,n,s,r,u,f)
break
case"CIMVectorMarker":if(R(a,g,i,y,n,r))break
"CIMLineSymbol"===e.type&&(u=C(a)),z(a,g,i,y,n,r,s,u,f,o)
break
default:b.error("Cannot analyze CIM layer",a.type)}}}(l,c,f,t,o,i,!!r)}return o}function M(e,t,i,n,r,s){const o=e.primitiveName,a=Object(p.h)(e.color),[l,u]=q(n,o,t,null,null),h=Object(c.b)(JSON.stringify(e)+u).toString()
s.push({type:"fill",templateHash:h,materialHash:l?()=>h:h,cim:e,materialOverrides:null,colorLocked:!!e.colorLocked,color:U(o,i,"Color",r,a,B),height:0,angle:0,offsetX:0,offsetY:0,scaleX:1,effects:t,applyRandomOffset:!1,sampleAlphaOnly:!0})}function I(e,t,i,n,r,s,o){const l=e.primitiveName,u=Object(p.r)(e),[h,d]=q(n,l,t,null,null),f=Object(c.b)(JSON.stringify(e)+d).toString(),_=Object(c.b)(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString()
let m=Object(p.s)(e.scaleX)
if("width"in e&&"number"==typeof e.width){const t=e.width
let i=1
const n=s.getResource(e.url)
Object(a.l)(n)&&(i=n.width/n.height),m/=i*(e.height/t)}o.push({type:"fill",templateHash:f,materialHash:h?()=>_:_,cim:e,materialOverrides:null,colorLocked:!!e.colorLocked,effects:t,color:U(l,i,"TintColor",r,u,B),height:U(l,i,"Height",r,e.height),scaleX:U(l,i,"ScaleX",r,m),angle:U(l,i,"Rotation",r,Object(p.s)(e.rotation)),offsetX:U(l,i,"OffsetX",r,Object(p.s)(e.offsetX)),offsetY:U(l,i,"OffsetY",r,Object(p.s)(e.offsetY)),url:e.url,applyRandomOffset:!1,sampleAlphaOnly:!1})}function P(e,t,i,n,r,s){var o,a
const l=["Rotation","OffsetX","OffsetY"],u=n.filter(t=>t.primitiveName!==e.primitiveName||!l.includes(t.propertyName)),h=e.primitiveName
let[d,f]=q(n,h,t,null,null)
const _=Object(c.b)(JSON.stringify(e)+f).toString(),m=Object(c.b)(`${e.separation}${JSON.stringify(e.lineSymbol)}`).toString()
let g={r:255,g:255,b:255,a:1},y=!1
const x=null==(o=e.lineSymbol)||null==(a=o.symbolLayers)?void 0:a.find(e=>{var t
return"CIMSolidStroke"===e.type&&null!=(null==(t=i[e.primitiveName])?void 0:t.Color)})
if(x){g=Object(p.h)(x.color),g=U(x.primitiveName,i,"Color",r,g,B)
const e="function"==typeof g
d=d||e,y=null!=x.color||e}s.push({type:"fill",templateHash:_,materialHash:d?Y(m,i,u,r):m,cim:e,materialOverrides:u,colorLocked:!!e.colorLocked,effects:t,color:g,height:U(h,i,"Separation",r,e.separation),scaleX:1,angle:U(h,i,"Rotation",r,Object(p.s)(e.rotation)),offsetX:U(h,i,"OffsetX",r,Object(p.s)(e.offsetX)),offsetY:U(h,i,"OffsetY",r,Object(p.s)(e.offsetY)),applyRandomOffset:!1,sampleAlphaOnly:!0,hasUnresolvedReplacementColor:!y})}function E(e,t,i,n,r,s){const o=e.primitiveName,[a,l]=q(n,o,t,null,null),u=Object(c.b)(JSON.stringify(e)+l).toString()
s.push({type:"fill",templateHash:u,materialHash:a?Y(u,i,n,r):u,cim:e,materialOverrides:null,colorLocked:!!e.colorLocked,effects:t,color:{r:128,g:128,b:128,a:1},height:0,angle:0,offsetX:0,offsetY:0,scaleX:1,applyRandomOffset:!1,sampleAlphaOnly:!1})}function L(e,t,i,n,r,s,o,a){const l=e.primitiveName,u=Object(p.h)(e.color),h=null!=e.width?e.width:4,d=O(e.capStyle),f=S(e.joinStyle),_=e.miterLimit,[m,g]=q(n,l,t,null,null),y=Object(c.b)(JSON.stringify(e)+g).toString()
let x,v
if(t&&t instanceof Array&&t.length>0){const e=t[t.length-1]
if("CIMGeometricEffectDashes"===e.type&&"NoConstraint"===e.lineDashEnding&&null===e.offsetAlongLine){const e=(t=[...t]).pop()
x=e.dashTemplate,v=e.scaleDash}}s.push({type:"line",templateHash:y,materialHash:m?()=>y:y,cim:e,materialOverrides:null,isOutline:o,colorLocked:!!e.colorLocked,effects:t,color:U(l,i,"Color",r,u,B),width:U(l,i,"Width",r,h),cap:U(l,i,"CapStyle",r,d),join:U(l,i,"JoinStyle",r,f),miterLimit:_&&U(l,i,"MiterLimit",r,_),referenceWidth:a,zOrder:V(e.name),dashTemplate:x,scaleDash:v,sampleAlphaOnly:!0})}function A(e,t,i,n,r,s,o,a){const l=Object(c.b)(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString(),u=e.primitiveName,h=Object(p.r)(e),d=null!=e.width?e.width:4,f=O(e.capStyle),_=S(e.joinStyle),m=e.miterLimit,[g,y]=q(n,u,t,null,null),x=Object(c.b)(JSON.stringify(e)+y).toString()
s.push({type:"line",templateHash:x,materialHash:g?()=>l:l,cim:e,materialOverrides:null,isOutline:o,colorLocked:!!e.colorLocked,effects:t,color:U(u,i,"TintColor",r,h,B),width:U(u,i,"Width",r,d),cap:U(u,i,"CapStyle",r,f),join:U(u,i,"JoinStyle",r,_),miterLimit:m&&U(u,i,"MiterLimit",r,m),referenceWidth:a,zOrder:V(e.name),dashTemplate:null,scaleDash:!1,url:e.url,sampleAlphaOnly:!1})}function j(e,t,i,n,r,s,o,a){const l=e.primitiveName,u=null!=e.width?e.width:4,h=O(e.capStyle),d=S(e.joinStyle),f=e.miterLimit,[_,m]=q(n,l,t,null,null),p=Object(c.b)(JSON.stringify(e)+m).toString()
s.push({type:"line",templateHash:p,materialHash:_?Y(p,i,n,r):p,cim:e,materialOverrides:null,isOutline:o,colorLocked:!!e.colorLocked,effects:t,color:{r:128,g:128,b:128,a:1},width:U(l,i,"Width",r,u),cap:U(l,i,"CapStyle",r,h),join:U(l,i,"JoinStyle",r,d),miterLimit:f&&U(l,i,"MiterLimit",r,f),referenceWidth:a,zOrder:V(e.name),dashTemplate:null,scaleDash:!1,sampleAlphaOnly:!1})}function R(e,t,i,n,r,s){const{markerPlacement:o,type:a}=e
if(!o||"CIMMarkerPlacementInsidePolygon"!==o.type)return!1
if("CIMVectorMarker"===a||"CIMPictureMarker"===a){const i=e.primitiveName
if(i){const[e,r]=q(n,i,t,null,null)
if(e)return!1}const r=o.primitiveName
if(r){const[e,i]=q(n,r,t,null,null)
if(e)return!1}if("CIMVectorMarker"===a){const{markerGraphics:t}=e
if(t)for(const e of t){const{symbol:t}=e
if("CIMPolygonSymbol"===(null==t?void 0:t.type)&&t.symbolLayers){const{symbolLayers:e}=t
for(const t of e)if("CIMSolidStroke"===t.type)return!1}}}else{const{animatedSymbolProperties:t}=e
if(t)return!1}}const u=o,h=Math.abs(u.stepX),d=Math.abs(u.stepY)
if(0===h||0===d)return!0
const f=["Rotation","OffsetX","OffsetY"],_=n.filter(t=>t.primitiveName!==e.primitiveName||!f.includes(t.propertyName)),m="url"in e&&"string"==typeof e.url?e.url:void 0,[g,y]=q(n,u.primitiveName,t,null,null),v=Object(c.b)(JSON.stringify(e)+y).toString()
let b,O,S=null
if("Random"===o.gridType){const e=Object(l.i)(x.F),t=Math.max(Math.floor(e/h),1),i=Math.max(Math.floor(e/d),1)
b=d*i,S=e=>e?e*i:0,O=t*h/b}else o.shiftOddRows?(b=2*d,S=e=>e?2*e:0,O=h/d*.5):(b=d,S=null,O=h/d)
const T=Object(p.r)(e)
return s.push({type:"fill",templateHash:v,materialHash:g?Y(v,i,_,r):v,cim:e,materialOverrides:_,colorLocked:!!e.colorLocked,effects:t,color:U(u.primitiveName,i,"TintColor",r,T,B),height:U(u.primitiveName,i,"StepY",r,b,S),scaleX:O,angle:U(u.primitiveName,i,"GridAngle",r,u.gridAngle),offsetX:U(u.primitiveName,i,"OffsetX",r,Object(p.s)(u.offsetX)),offsetY:U(u.primitiveName,i,"OffsetY",r,Object(p.s)(u.offsetY)),url:m,applyRandomOffset:"Random"===o.gridType,sampleAlphaOnly:!m,hasUnresolvedReplacementColor:!0}),!0}function D(e,t,i,n,r,o,l,d,f){var m
const g=e.primitiveName,x=Object(p.s)(e.size)
let b=Object(p.s)(e.scaleX,1)
const O=Object(p.s)(e.rotation),S=Object(p.s)(e.offsetX),T=Object(p.s)(e.offsetY),C=Object(p.r)(e),w=Object(c.b)(`${e.url}${JSON.stringify(e.colorSubstitutions)}${JSON.stringify(e.animatedSymbolProperties)}`).toString(),M=W(e.markerPlacement,n,i,r),I=function(e,t,i,n){const r=[]
if(h.c.findApplicableOverrides(e,t,r),null==e||0===r.length)return e
for(const e of r)if(e.valueExpressionInfo&&null!=n&&n.geometryType){const t=i[e.primitiveName]&&i[e.primitiveName][e.propertyName]
t instanceof u.a&&(e.fn=(e,i,r)=>Object(y.a)(t,e,{$view:r},n.geometryType,i))}return(t,i,n)=>{for(const e of r)e.fn&&(e.value=e.fn(t,i,n))
const o=Object(s.a)(e),a=e.primitiveName
for(const e of r)if(e.primitiveName===a){const t=G(e.propertyName)
if(null!=e.value){const i=_(e.value,e.propertyName)
i!==o[t]&&(o[t]=i)}}return o}}(e.animatedSymbolProperties,n,i,r),[P,E]=q(n,g,t,M,I),L=Object(c.b)(JSON.stringify(e)+E).toString(),A=null!=(m=e.anchorPoint)?m:{x:0,y:0}
if("width"in e&&"number"==typeof e.width){const t=e.width
let i=1
const n=o.getResource(e.url)
Object(a.l)(n)&&(i=n.width/n.height),b/=i*(x/t)}function j(e,t){return Object(a.l)(I)?Object(p.g)(I,e,t):null}const R=e.animatedSymbolProperties&&!0===e.animatedSymbolProperties.randomizeStartTime?(e,t,i,n)=>{const r=Object(v.a)(null!=n?n:0),s=j(e,t)
return w+`-MATERIALGROUP(${r})`+`-ASP(${JSON.stringify(s)})`}:P?(e,t)=>{const i=j(e,t)
return w+`-ASP(${JSON.stringify(i)})`}:w
l.push({type:"marker",templateHash:L,materialHash:R,cim:e,materialOverrides:null,colorLocked:!!e.colorLocked,effects:t,scaleSymbolsProportionally:!1,alignment:d,size:U(g,i,"Size",r,x),scaleX:U(g,i,"ScaleX",r,b),rotation:U(g,i,"Rotation",r,O),offsetX:U(g,i,"OffsetX",r,S),offsetY:U(g,i,"OffsetY",r,T),color:U(g,i,"TintColor",r,C,B),anchorPoint:{x:A.x,y:-A.y},isAbsoluteAnchorPoint:"Relative"!==e.anchorPointUnits,outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,frameHeight:0,rotateClockwise:!!e.rotateClockwise,referenceSize:f,sizeRatio:1,markerPlacement:M,url:e.url,animatedSymbolProperties:I})}function z(e,t,i,n,r,s,o,a,l,c){const u=e.markerGraphics
if(!u)return
let h=0
if(e.scaleSymbolsProportionally){const t=e.frame
t&&(h=t.ymax-t.ymin)}const d=W(e.markerPlacement,n,i,r)
for(const f of u)if(f){const u=f.symbol
if(!u)continue
switch(u.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":k(e,t,d,null,f,n,i,r,s,o,a,l,h,!!c)
break
case"CIMTextSymbol":F(e,t,d,f,i,n,r,s,a,l,h)}}}function F(e,t,i,n,s,o,a,l,u,d,f){var _,m
h.c.findApplicableOverrides(n,o,[])
const g=n.geometry
if(!("x"in g)||!("y"in g))return
const y=n.symbol,x=Object(p.i)(y),v=Object(p.j)(y.fontStyleName),b=Object(r.a)(y.fontFamilyName)
y.font={family:b,decoration:x,...v}
const O=e.frame,S=g.x-.5*(O.xmin+O.xmax),T=g.y-.5*(O.ymin+O.ymax),C=e.size/f,w=e.primitiveName,M=Object(p.s)(y.height)*C,I=Object(p.s)(y.angle),P=Object(p.s)(e.offsetX)+(Object(p.s)(y.offsetX)+S)*C,E=Object(p.s)(e.offsetY)+(Object(p.s)(y.offsetY)+T)*C,L=Object(p.h)(Object(p.m)(y))
let A=Object(p.h)(Object(p.p)(y)),j=null!=(_=Object(p.q)(y))?_:0
j||(A=Object(p.h)(Object(p.m)(y.haloSymbol)),y.haloSize&&(j=y.haloSize*C))
let R=null,D=null,z=0
if(y.callout&&"CIMBackgroundCallout"===y.callout.type){const e=y.callout
if(e.backgroundSymbol){const t=e.backgroundSymbol.symbolLayers
if(t)for(const e of t)"CIMSolidFill"===e.type?R=Object(p.h)(e.color):"CIMSolidStroke"===e.type&&(D=Object(p.h)(e.color),z=Object(p.s)(e.width))}}const[F,k]=q(o,w,t,i,null),N=JSON.stringify(e.effects)+Number(e.colorLocked).toString()+JSON.stringify(e.anchorPoint)+e.anchorPointUnits+JSON.stringify(e.markerPlacement)+e.size.toString(),V=Object(c.b)(JSON.stringify(n)+N+k).toString()
let B=U(n.primitiveName,s,"TextString",a,null!=(m=n.textString)?m:"",p.a,y.textCase)
if(null==B)return
const{fontStyleName:G}=y,H=b+(G?"-"+G.toLowerCase():"-regular"),W=H
"string"==typeof B&&B.includes("[")&&y.fieldMap&&(B=Object(p.f)(y.fieldMap,B,y.textCase)),l.push({type:"text",templateHash:V,materialHash:F||"function"==typeof B||B.match(/\[(.*?)\]/)?(e,t,i)=>W+"-"+Object(p.g)(B,e,t,i):W+"-"+Object(c.b)(B),cim:y,materialOverrides:null,colorLocked:!!e.colorLocked,effects:t,alignment:u,anchorPoint:{x:e.anchorPoint?e.anchorPoint.x:0,y:e.anchorPoint?e.anchorPoint.y:0},isAbsoluteAnchorPoint:"Relative"!==e.anchorPointUnits,fontName:H,decoration:x,weight:U(w,s,"Weight",a,v.weight),style:U(w,s,"Size",a,v.style),size:U(w,s,"Size",a,M),angle:U(w,s,"Rotation",a,I),offsetX:U(w,s,"OffsetX",a,P),offsetY:U(w,s,"OffsetY",a,E),horizontalAlignment:Object(p.k)(y.horizontalAlignment),verticalAlignment:Object(p.l)(y.verticalAlignment),text:B,color:L,outlineColor:A,outlineSize:j,backgroundColor:R,borderLineColor:D,borderLineWidth:z,referenceSize:d,sizeRatio:1,markerPlacement:i})}function k(e,t,i,n,r,s,o,l,u,h,d,f,_,y){const x=r.symbol,v=x.symbolLayers
if(!v)return
if(y)return void N(e,t,i,n,r,o,s,l,u,h,d,f,_)
let b=v.length
if(X(v))return void function(e,t,i,n,r,s,o,l,u,h,d,f,_){var g
const y=r.geometry,x=s[0],v=s[1],b=Object(m.b)(y)
if(!b)return
const O="Relative"!==e.anchorPointUnits,[S,T,C]=Object(m.d)(b,e.frame,e.size,e.anchorPoint,O),w={type:"sdf",geom:y,asFill:!0},M=e.primitiveName,I=Object(p.s)(e.size),P=Object(p.s)(e.rotation),E=Object(p.s)(e.offsetX),L=Object(p.s)(e.offsetY),A=v.path,j=v.primitiveName,R=x.primitiveName,D=Object(p.h)(Object(p.m)(v)),z=Object(p.h)(Object(p.p)(x)),F=null!=(g=Object(p.q)(x))?g:0
let k=!1,N=""
for(const e of o)e.primitiveName!==j&&e.primitiveName!==R&&e.primitiveName!==M||(void 0!==e.value?N+=`-${e.primitiveName}-${e.propertyName}-${JSON.stringify(e.value)}`:e.valueExpressionInfo&&(k=!0))
Object(a.l)(i)&&"function"==typeof i&&(k=!0)
const V=JSON.stringify({...e,markerGraphics:null}),G=Object(c.b)(JSON.stringify(w)+A).toString(),H={type:"marker",templateHash:Object(c.b)(JSON.stringify(r)+JSON.stringify(v)+JSON.stringify(x)+V+N).toString(),materialHash:k?()=>G:G,cim:w,materialOverrides:null,colorLocked:!!e.colorLocked,effects:t,scaleSymbolsProportionally:!!e.scaleSymbolsProportionally,alignment:d,anchorPoint:{x:T,y:C},isAbsoluteAnchorPoint:O,size:U(e.primitiveName,l,"Size",u,I),rotation:U(e.primitiveName,l,"Rotation",u,P),offsetX:U(e.primitiveName,l,"OffsetX",u,E),offsetY:U(e.primitiveName,l,"OffsetY",u,L),scaleX:1,frameHeight:_,rotateClockwise:!!e.rotateClockwise,referenceSize:f,sizeRatio:S,color:U(j,l,"Color",u,D,B),outlineColor:U(R,l,"Color",u,z,B),outlineWidth:U(R,l,"Width",u,F),markerPlacement:i,path:A,animatedSymbolProperties:n}
h.push(H)}(e,t,i,n,r,v,s,o,l,u,d,f,_)
const O=g.a.applyEffects(x.effects,r.geometry,h.geometryEngine)
if(O)for(;b--;){const y=v[b]
if(y&&!1!==y.enable)switch(y.type){case"CIMSolidFill":case"CIMSolidStroke":{var S,T
const x=g.a.applyEffects(y.effects,O,h.geometryEngine),v=Object(m.b)(x)
if(!v)continue
const b="Relative"!==e.anchorPointUnits,[C,w,M]=Object(m.d)(v,e.frame,e.size,e.anchorPoint,b),I="CIMSolidFill"===y.type,P={type:"sdf",geom:x,asFill:I},E=e.primitiveName,L=null!=(S=Object(p.s)(e.size))?S:10,A=Object(p.s)(e.rotation),j=Object(p.s)(e.offsetX),R=Object(p.s)(e.offsetY),D=y.path,z=y.primitiveName,F=Object(p.h)(I?Object(p.m)(y):Object(p.p)(y)),k=I?{r:0,g:0,b:0,a:0}:Object(p.h)(Object(p.p)(y)),N=null!=(T=Object(p.q)(y))?T:0
if(!I&&!N)break
let V=!1,G=""
for(const e of s)e.primitiveName!==z&&e.primitiveName!==E||(void 0!==e.value?G+=`-${e.primitiveName}-${e.propertyName}-${JSON.stringify(e.value)}`:e.valueExpressionInfo&&(V=!0));(Object(a.l)(t)&&"function"==typeof t||Object(a.l)(i)&&"function"==typeof i)&&(V=!0)
const H=JSON.stringify({...e,markerGraphics:null}),W=Object(c.b)(JSON.stringify(P)+D).toString(),Y={type:"marker",templateHash:Object(c.b)(JSON.stringify(r)+JSON.stringify(y)+H+G).toString(),materialHash:V?()=>W:W,cim:P,materialOverrides:null,colorLocked:!!e.colorLocked,effects:t,scaleSymbolsProportionally:!!e.scaleSymbolsProportionally,alignment:d,anchorPoint:{x:w,y:M},isAbsoluteAnchorPoint:b,size:U(e.primitiveName,o,"Size",l,L),rotation:U(e.primitiveName,o,"Rotation",l,A),offsetX:U(e.primitiveName,o,"OffsetX",l,j),offsetY:U(e.primitiveName,o,"OffsetY",l,R),scaleX:1,frameHeight:_,rotateClockwise:!!e.rotateClockwise,referenceSize:f,sizeRatio:C,color:U(z,o,"Color",l,F,B),outlineColor:U(z,o,"Color",l,k,B),outlineWidth:U(z,o,"Width",l,N),markerPlacement:i,animatedSymbolProperties:n,path:D}
u.push(Y)
break}default:N(e,t,i,n,r,o,s,l,u,h,d,f,_)}}}function N(e,t,i,n,r,s,o,u,d,f,_,m,g){const y=function(e,t){return{type:e.type,enable:!0,name:e.name,colorLocked:e.colorLocked,primitiveName:e.primitiveName,anchorPoint:e.anchorPoint,anchorPointUnits:e.anchorPointUnits,offsetX:0,offsetY:0,rotateClockwise:e.rotateClockwise,rotation:0,size:e.size,billboardMode3D:e.billboardMode3D,depth3D:e.depth3D,frame:e.frame,markerGraphics:[t],scaleSymbolsProportionally:e.scaleSymbolsProportionally,respectFrame:e.respectFrame,clippingPath:e.clippingPath}}(e,r),x=["Rotation","OffsetX","OffsetY"],v=o.filter(t=>t.primitiveName!==e.primitiveName||!x.includes(t.propertyName))
let b=""
for(const e of o)void 0!==e.value&&(b+=`-${e.primitiveName}-${e.propertyName}-${JSON.stringify(e.value)}`)
const[O,S,T]=h.a.getTextureAnchor(y,f),C=e.primitiveName,w=Object(p.s)(e.rotation),M=Object(p.s)(e.offsetX),I=Object(p.s)(e.offsetY),P=Object(c.b)(JSON.stringify(y)+b).toString(),E={type:"marker",templateHash:P,materialHash:v.length>0||Object(a.l)(t)&&"function"==typeof t?Y(P,s,v,u):P,cim:y,materialOverrides:v,colorLocked:!!e.colorLocked,effects:t,scaleSymbolsProportionally:!!e.scaleSymbolsProportionally,alignment:_,anchorPoint:{x:O,y:S},isAbsoluteAnchorPoint:!1,size:Object(p.s)(e.size),rotation:U(C,s,"Rotation",u,w),offsetX:U(C,s,"OffsetX",u,M),offsetY:U(C,s,"OffsetY",u,I),color:{r:255,g:255,b:255,a:1},outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,scaleX:1,frameHeight:g,rotateClockwise:!!e.rotateClockwise,referenceSize:m,sizeRatio:T/Object(l.h)(e.size),markerPlacement:i,animatedSymbolProperties:n,avoidSDFRasterization:!0}
d.push(E)}function V(e){if(e&&0===e.indexOf("Level_")){const t=parseInt(e.substr(6),10)
if(!isNaN(t))return t}return 0}function B(e){if(!e||0===e.length)return null
const t=new n.a(e).toRgba()
return{r:t[0],g:t[1],b:t[2],a:t[3]}}function U(e,t,i,n,r,s,o){if(null==e)return r
const a=t[e]
if(a){const e=a[i]
if("string"==typeof e||"number"==typeof e||e instanceof Array)return s?s.call(null,e,o):e
if(null!=e&&e instanceof u.a&&null!=n&&n.geometryType)return(t,i,a)=>{let l=Object(y.a)(e,t,{$view:a},n.geometryType,i)
return null!==l&&s&&(l=s.call(null,l,o)),null!==l?l:r}}return r}function G(e){return e?e.charAt(0).toLowerCase()+e.substr(1):e}function H(e,t,i,n){for(const e of t)if(e.valueExpressionInfo&&null!=n&&n.geometryType){const t=i[e.primitiveName]&&i[e.primitiveName][e.propertyName]
t instanceof u.a&&(e.fn=(e,i,r)=>Object(y.a)(t,e,{$view:r},n.geometryType,i))}return(i,n,r)=>{for(const e of t)e.fn&&(e.value=e.fn(i,n,r))
const o=[]
for(let i of e){var a
const e=null==(a=i)?void 0:a.primitiveName
if(e){let n=!1
for(const r of t)if(r.primitiveName===e){const e=G(r.propertyName)
null!=r.value&&r.value!==i[e]&&(n||(i=Object(s.a)(i),n=!0),i[e]=r.value)}}o.push(i)}return o}}function W(e,t,i,n){const r=[]
if(h.c.findApplicableOverrides(e,t,r),null==e||0===r.length)return e
for(const e of r)if(e.valueExpressionInfo&&null!=n&&n.geometryType){const t=i[e.primitiveName]&&i[e.primitiveName][e.propertyName]
t instanceof u.a&&(e.fn=(e,i,r)=>Object(y.a)(t,e,{$view:r},n.geometryType,i))}return(t,i,n)=>{for(const e of r)e.fn&&(e.value=e.fn(t,i,n))
const o=Object(s.a)(e),a=e.primitiveName
for(const e of r)if(e.primitiveName===a){const t=G(e.propertyName)
null!=e.value&&e.value!==o[t]&&(o[t]=e.value)}return o}}function Y(e,t,i,n){for(const e of i)if(e.valueExpressionInfo&&null!=n&&n.geometryType){const i=t[e.primitiveName]&&t[e.primitiveName][e.propertyName]
i instanceof u.a&&(e.fn=(e,t,r)=>Object(y.a)(i,e,{$view:r},n.geometryType,t))}return(t,n,r)=>{for(const e of i)e.fn&&(e.value=e.fn(t,n,r))
return Object(c.b)(e+h.c.buildOverrideKey(i)).toString()}}function Z(e,t){if(!t||0===t.length)return e
const i=Object(s.a)(e)
return h.c.applyOverrides(i,t),i}function q(e,t,i,n,r){let s=!1,o=""
for(const i of e)i.primitiveName===t&&(void 0!==i.value?o+=`-${i.primitiveName}-${i.propertyName}-${JSON.stringify(i.value)}`:i.valueExpressionInfo&&(s=!0))
return Object(a.l)(i)&&"function"==typeof i&&(s=!0),Object(a.l)(n)&&"function"==typeof n&&(s=!0),Object(a.l)(r)&&"function"==typeof r&&(s=!0),[s,o]}const X=e=>e&&2===e.length&&e[0].enable&&e[1].enable&&"CIMSolidStroke"===e[0].type&&"CIMSolidFill"===e[1].type&&!e[0].effects&&!e[1].effects},1543:function(e,t,i){"use strict"
i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return n})),i.d(t,"d",(function(){return r})),i.d(t,"e",(function(){return d})),i.d(t,"f",(function(){return h})),i.d(t,"g",(function(){return c})),i.d(t,"h",(function(){return u}))
const n=Number.POSITIVE_INFINITY,r=Math.PI,s=2*r,o=128/r,a=r/180,l=1/Math.LN2
function c(e,t){return(e%=t)>=0?e:e+t}function u(e){return c(e*o,256)}function h(e){return Math.log(e)*l}function d(e,t,i){return e*(1-i)+t*i}},1548:function(e,t,i){"use strict"
i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return l}))
var n=i(1019),r=i(235)
let s=null,o=null
async function a(){return s||(s=async function(){const e=Object(r.a)("esri-csp-restrictions")?await Promise.all([i.e(756),i.e(473)]).then(i.bind(null,1978)).then(e=>e.l):await i.e(376).then(i.bind(null,1979)).then(e=>e.l)
o=await e.load({locateFile:e=>Object(n.b)("esri/core/libs/libtess/"+e)})}()),s}function l(e,t){const i=Math.max(e.length,128e3)
return o.triangulate(e,t,i)}},1549:function(e,t,i){"use strict"
i.d(t,"a",(function(){return n}))
class n{static fromBuffer(e,t){return new n(e,t)}static create(e,t=4294967295){const i=new Uint32Array(Math.ceil(e/32))
return new n(i,t)}constructor(e,t){this._mask=0,this._buf=e,this._mask=t}_getIndex(e){return Math.floor(e/32)}has(e){const t=this._mask&e
return!!(this._buf[this._getIndex(t)]&1<<t%32)}hasRange(e,t){let i=e,n=t
for(;i%32&&i!==n;){if(this.has(i))return!0
i++}for(;n%32&&i!==n;){if(this.has(i))return!0
n--}if(i===n)return!1
for(let e=i/32;e!==n/32;e++)if(this._buf[e])return!0
return!1}set(e){const t=this._mask&e,i=this._getIndex(t),n=1<<t%32
this._buf[i]|=n}setRange(e,t){let i=e,n=t
for(;i%32&&i!==n;)this.set(i++)
for(;n%32&&i!==n;)this.set(n--)
if(i!==n)for(let e=i/32;e!==n/32;e++)this._buf[e]=4294967295}unset(e){const t=this._mask&e,i=this._getIndex(t),n=1<<t%32
this._buf[i]&=4294967295^n}resize(e){const t=this._buf,i=new Uint32Array(Math.ceil(e/32))
i.set(t),this._buf=i}or(e){for(let t=0;t<this._buf.length;t++)this._buf[t]|=e._buf[t]
return this}and(e){for(let t=0;t<this._buf.length;t++)this._buf[t]&=e._buf[t]
return this}xor(e){for(let t=0;t<this._buf.length;t++)this._buf[t]^=e._buf[t]
return this}ior(e){for(let t=0;t<this._buf.length;t++)this._buf[t]|=~e._buf[t]
return this}iand(e){for(let t=0;t<this._buf.length;t++)this._buf[t]&=~e._buf[t]
return this}ixor(e){for(let t=0;t<this._buf.length;t++)this._buf[t]^=~e._buf[t]
return this}any(){for(let e=0;e<this._buf.length;e++)if(this._buf[e])return!0
return!1}copy(e){for(let t=0;t<this._buf.length;t++)this._buf[t]=e._buf[t]
return this}clone(){return new n(this._buf.slice(),this._mask)}clear(){for(let e=0;e<this._buf.length;e++)this._buf[e]=0}forEachSet(e){for(let t=0;t<this._buf.length;t++){let i=this._buf[t],n=32*t
if(i)for(;i;)1&i&&e(n),i>>>=1,n++}}countSet(){let e=0
return this.forEachSet(t=>{e++}),e}}},1554:function(e,t,i){"use strict"
i.d(t,"a",(function(){return o}))
var n=i(1109),r=i(1331),s=i(1150)
class o extends r.a{constructor(e,t,i,n,r,o,a=r,l=o){super(),this.triangleCountReportedInDebug=0,this.triangleCount=0,this.texture=null,this.key=new s.a(e),this.resolution=t,this.x=i,this.y=n,this.width=r,this.height=o,this.rangeX=a,this.rangeY=l}destroy(){this.texture&&(this.texture.dispose(),this.texture=null)}setTransform(e){const t=this.resolution/(e.resolution*e.pixelRatio),i=this.transforms.tileMat3,[r,s]=e.toScreenNoRotation([0,0],[this.x,this.y]),o=this.width/this.rangeX*t,a=this.height/this.rangeY*t
Object(n.o)(i,o,0,0,0,a,0,r,s,1),Object(n.l)(this.transforms.dvs,e.displayViewMat3,i)}}},1555:function(e,t,i){"use strict"
i.d(t,"a",(function(){return u}))
var n=i(23),r=i(1e3),s=i(1362),o=i(1177),a=i(984)
const l={nearest:{defines:[],samplingMode:a.z.NEAREST,mips:!1},bilinear:{defines:[],samplingMode:a.z.LINEAR,mips:!1},bicubic:{defines:["bicubic"],samplingMode:a.z.LINEAR,mips:!1},trilinear:{defines:[],samplingMode:a.z.LINEAR_MIPMAP_LINEAR,mips:!0}},c=(e,t,i)=>{if("dynamic"===i.samplingMode){const{state:i}=e,n=t.resolution/t.pixelRatio/i.resolution,r=Math.round(e.pixelRatio)!==e.pixelRatio,s=n>1.05||n<.95
return i.rotation||s||r||t.isSourceScaled||t.rotation?l.bilinear:l.nearest}return l[i.samplingMode]}
class u extends o.a{constructor(){super(...arguments),this._desc={vsPath:"raster/bitmap",fsPath:"raster/bitmap",attributes:new Map([["a_pos",0]])}}dispose(){this._quad&&this._quad.dispose()}prepareState({context:e}){e.setBlendingEnabled(!0),e.setColorMask(!0,!0,!0,!0),e.setStencilWriteMask(0),e.setStencilTestEnabled(!0)}draw(e,t){const{context:i,renderingOptions:o,painter:l,requestRender:u,allowDelayedRender:h}=e
if(!t.source||!t.isReady)return
const d=c(e,t,o),f=l.materialManager.getProgram(this._desc,d.defines)
if(h&&Object(n.l)(u)&&!f.compiled)return void u()
e.timeline.begin(this.name),"additive"===t.blendFunction?i.setBlendFunctionSeparate(a.b.ONE,a.b.ONE,a.b.ONE,a.b.ONE):i.setBlendFunctionSeparate(a.b.ONE,a.b.ONE_MINUS_SRC_ALPHA,a.b.ONE,a.b.ONE_MINUS_SRC_ALPHA),i.setStencilFunction(a.h.EQUAL,t.stencilRef,255),this._quad||(this._quad=new s.a(i,[0,0,1,0,0,1,1,1]))
const{coordScale:_,computedOpacity:m,transforms:p}=t
t.setSamplingProfile(d),t.bind(e.context,r.N),i.useProgram(f),f.setUniformMatrix3fv("u_dvsMat3",p.dvs),f.setUniform1i("u_texture",r.N),f.setUniform2fv("u_coordScale",_),f.setUniform1f("u_opacity",m),this._quad.draw(),e.timeline.end(this.name)}}},1556:function(e,t,i){"use strict"
i.d(t,"a",(function(){return y}))
var n=i(233),r=i(23),s=i(1003),o=i(1362),a=i(1316),l=i(1534),c=i(1187),u=i(1088),h=i(984),d=i(1171),f=i(1412),_=i(1474),m=i(1072)
const p=n.a.getLogger("esri.views.2d.engine.webgl.brushes.WGLBrushHeatmap")
function g(e){return"heatmap"===e.type}class y extends a.a{constructor(){super(...arguments),this.brushEffect=new v}supportsSymbology(e){return e===s.e.HEATMAP}dispose(){super.dispose(),this.brushEffect.dispose(),this.brushEffect=null}prepareState(){}drawGeometry(e,t,i,n){const{defines:r}=this.brushEffect.loadQualityProfile(e.context)
super.drawGeometry(e,t,i,n?[...n,...r]:r)}_drawMarkers(e,t,i,n,r,s,o){const{context:a,rendererInfo:l,state:u}=e,{rendererSchema:d}=l
Object(c.a)(d,"heatmap")
const{referenceScale:f,radius:_,isFieldActive:m}=d,p=_*(0!==f?f/u.scale:1)
i.setUniform1f("u_radius",p),o||(i.setUniform1f("u_isFieldActive",m),a.setStencilFunction(h.h.GEQUAL,t.stencilRef,255)),a.drawElements(n,r,h.k.UNSIGNED_INT,s)}}const x={vsPath:"heatmap/heatmapResolve",fsPath:"heatmap/heatmapResolve",attributes:new Map([["a_position",0]])}
class v extends l.a{constructor(){super(...arguments),this.name=this.constructor.name}createOptions({passOptions:e}){return e}dispose(){this._prevFBO=null,this._accumulateOutputTexture=Object(r.f)(this._accumulateOutputTexture),Object(r.l)(this._accumulateFramebuffer)&&this._accumulateFramebuffer.detachDepthStencilBuffer(),this._accumulateOutputStencilBuffer=Object(r.f)(this._accumulateOutputStencilBuffer),this._accumulateFramebuffer=Object(r.f)(this._accumulateFramebuffer),this._resolveGradientTexture=Object(r.f)(this._resolveGradientTexture),this._tileQuad=Object(r.f)(this._tileQuad)}bind(e){const{context:t,rendererInfo:i,passOptions:n}=e,{rendererSchema:s}=i;(!Object(r.l)(n)||"hittest"!==n.type)&&g(s)&&(this._prevFBO=t.getBoundFramebufferObject(),this._prevViewport=t.getViewport(),Object(c.a)(s,"heatmap"),this._loadResources(e),this._updateResources(t,s),t.bindFramebuffer(this._accumulateFramebuffer),t.setViewport(0,0,this._accumulateFramebuffer.width,this._accumulateFramebuffer.height),t.setStencilTestEnabled(!0),t.setBlendingEnabled(!0),t.setBlendFunction(h.b.ONE,h.b.ONE),t.setClearColor(0,0,0,0),t.clear(h.e.COLOR_BUFFER_BIT))}unbind(){this._prevFBO=null,this._prevViewport=null}draw(e){const{context:t,painter:i,rendererInfo:n,passOptions:s}=e,{rendererSchema:o}=n
if(Object(r.l)(s)&&"hittest"===s.type||!g(o))return
const{defines:a}=this.loadQualityProfile(t),l=i.materialManager.getProgram(x,a)
t.useProgram(l),t.bindFramebuffer(this._prevFBO),t.setViewport(0,0,this._prevViewport.width,this._prevViewport.height),t.setBlendFunction(h.b.ONE,h.b.ONE_MINUS_SRC_ALPHA),t.setStencilTestEnabled(!1)
const{radius:c,minDensity:u,densityRange:d}=o
t.bindTexture(this._accumulateOutputTexture,8),t.bindTexture(this._resolveGradientTexture,9),l.setUniform1i("u_texture",8),l.setUniform1i("u_gradient",9),l.setUniform2f("u_densityMinAndInvRange",u,1/d),l.setUniform1f("u_densityNormalization",3/(c*c*Math.PI)),this._tileQuad.draw()}_loadResources({context:e,painter:t}){const{dataType:i,samplingMode:n,pixelFormat:r,internalFormat:s,shadingRate:a,requiresSharedStencilBuffer:l}=this.loadQualityProfile(e),{width:c,height:u}=this._prevViewport,f=c*a,p=u*a
null!=this._accumulateOutputTexture||(this._accumulateOutputTexture=new m.a(e,{target:h.A.TEXTURE_2D,pixelFormat:r,internalFormat:s,dataType:i,samplingMode:n,wrapMode:h.B.CLAMP_TO_EDGE,width:f,height:p})),l||null!=this._accumulateOutputStencilBuffer||(this._accumulateOutputStencilBuffer=new _.a(e,{width:f,height:p,internalFormat:h.s.DEPTH_STENCIL})),null!=this._accumulateFramebuffer||(this._accumulateFramebuffer=new d.a(e,{},this._accumulateOutputTexture,l?t.getSharedStencilBuffer():this._accumulateOutputStencilBuffer)),null!=this._resolveGradientTexture||(this._resolveGradientTexture=new m.a(e,{target:h.A.TEXTURE_2D,pixelFormat:h.p.RGBA,dataType:h.q.UNSIGNED_BYTE,samplingMode:h.z.LINEAR,wrapMode:h.B.CLAMP_TO_EDGE})),null!=this._tileQuad||(this._tileQuad=new o.a(e,[0,0,1,0,0,1,1,1]))}_updateResources(e,t){const{gradientHash:i,gradient:n}=t
this._prevGradientHash!==i&&(this._resolveGradientTexture.resize(n.length/4,1),this._resolveGradientTexture.setData(n),this._prevGradientHash=i)
const{shadingRate:s,requiresSharedStencilBuffer:o}=this.loadQualityProfile(e),{width:a,height:l}=this._prevViewport,c=a*s,u=l*s,{width:d,height:f}=this._accumulateFramebuffer
if(d!==c||f!==u){const e=this._accumulateFramebuffer.depthStencilAttachment
if(o&&Object(r.l)(e)){const{width:t,height:i}=e.descriptor
t===c&&i===u||(p.errorOnce("Attempted to resize shared stencil buffer! Detaching instead."),this._accumulateFramebuffer.detachDepthStencilBuffer())}this._accumulateFramebuffer.resize(c,u)}o||e.blitFramebuffer(this._prevFBO,this._accumulateFramebuffer,0,0,this._prevFBO.width,this._prevFBO.height,0,0,this._accumulateFramebuffer.width,this._accumulateFramebuffer.height,h.e.STENCIL_BUFFER_BIT,h.z.NEAREST)}loadQualityProfile(e){if(Object(r.k)(this._qualityProfile)){const t=Object(f.a)(e,p),i=e.type===u.a.WEBGL1
this._qualityProfile={...t,requiresSharedStencilBuffer:i,shadingRate:i?1:.25,defines:t.dataType!==h.q.FLOAT?["heatmapPrecisionHalfFloat"]:[]}}return this._qualityProfile}}},1557:function(e,t,i){"use strict"
i.d(t,"a",(function(){return r}))
var n=i(1320)
const r={shaders:{vertexShader:Object(n.a)("tileInfo/tileInfo.vert"),fragmentShader:Object(n.a)("tileInfo/tileInfo.frag")},attributes:new Map([["a_pos",0]])}},1558:function(e,t,i){"use strict"
i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return r}))
const n=new(i(976).a)({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch",mesh:"mesh"})
function r(e){return n.toJSON(e)}function s(e){const{bandCount:t,attributeTable:i,colormap:n,pixelType:r}=e.raster.rasterInfo
return 1===t&&(null!=i||null!=n||"u8"===r||"s8"===r)}},1559:function(e,t,i){"use strict"
i.d(t,"a",(function(){return M})),i(982)
var n,r,s,o=i(1475),a=i(1617),l=i(235),c=i(23),u=i(1574),h=i(1057),d=i(1062),f=i(1549),_=i(983)
let m=0
const p=null!=(n=Object(l.a)("featurelayer-simplify-thresholds"))?n:[.5,.5,.5,.5],g=p[0],y=p[1],x=p[2],v=p[3],b=null!=(r=Object(l.a)("featurelayer-simplify-payload-size-factors"))?r:[1,2,4],O=b[0],S=b[1],T=b[2],C=null!=(s=Object(l.a)("featurelayer-simplify-mobile-factor"))?s:2,w=Object(l.a)("esri-mobile")
class M{constructor(e,t){this.type="FeatureSetReader",this.arcadeDeclaredClass="esri.arcade.Feature",this.seen=!1,this.instance=0,this._tx=0,this._ty=0,this._sx=1,this._sy=1,this._deleted=null,this._joined=[],this._objectIdToIndex=null,this._level=0,this._datetimeMetadata=null,this.contextTimeReference=null,this.instance=e,this._layerSchema=t}static createInstance(){return m++,m=m>65535?0:m,m}get isEmpty(){return Object(c.l)(this._deleted)&&this._deleted.countSet()===this.getSize()}set level(e){this._level=e}getAreaSimplificationThreshold(e,t){let i=1
const n=w?C:1
t>4e6?i=T*n:t>1e6?i=S*n:t>5e5?i=O*n:t>1e5&&(i=n)
let r=0
e>4e3?r=v*i:e>2e3?r=x*i:e>100?r=y:e>15&&(r=g)
let s=8
return this._level<4?s=1:this._level<5?s=2:this._level<6&&(s=4),r*s}createQuantizedExtrudedQuad(e,t){return new d.a([5],[e-1,t,1,-1,1,1,-1,1,-1,-1])}setArcadeSpatialReference(e){this._arcadeSpatialReference=e}attachStorage(e){this._storage=e}getQuantizationTransform(){throw new Error("Unable to find transform for featureSet")}getStorage(){return this._storage}getComputedNumeric(e){return this.getComputedNumericAtIndex(0)}setComputedNumeric(e,t){return this.setComputedNumericAtIndex(t,0)}getComputedString(e){return this.getComputedStringAtIndex(0)}setComputedString(e,t){return this.setComputedStringAtIndex(0,t)}getComputedNumericAtIndex(e){return this._storage.getComputedNumericAtIndex(this.getDisplayId(),e)}setComputedNumericAtIndex(e,t){this._storage.setComputedNumericAtIndex(this.getDisplayId(),e,t)}getComputedStringAtIndex(e){return this._storage.getComputedStringAtIndex(this.getDisplayId(),e)}setComputedStringAtIndex(e,t){return this._storage.setComputedStringAtIndex(this.getDisplayId(),e,t)}transform(e,t,i,n){const r=this.copy()
return r._tx+=e,r._ty+=t,r._sx*=i,r._sy*=n,r}readAttribute(e,t=!1){const i=this._readAttribute(e,t)
if(void 0!==i)return i
for(const i of this._joined){i.setIndex(this.getIndex())
const n=i._readAttribute(e,t)
if(void 0!==n)return n}}readAttributes(){const e=this._readAttributes()
for(const t of this._joined){t.setIndex(this.getIndex())
const i=t._readAttributes()
for(const t of Object.keys(i))e[t]=i[t]}return e}joinAttributes(e){this._joined.push(e)}readArcadeFeature(){return this}geometry(){const e=this.readHydratedGeometry(),t=Object(h.l)(e,this.geometryType,this.hasZ,this.hasM),i=Object(_.a)(t)
return i&&(i.spatialReference=this._arcadeSpatialReference),i}get dateTimeReferenceFieldIndex(){return this._datetimeMetadata||(this._datetimeMetadata=a.a.create(this._layerSchema.fields,this._layerSchema)),this._datetimeMetadata}autocastArcadeDate(e,t){var i,n
return t&&t instanceof Date?this.isUnknownDateTimeField(e)?o.a.unknownDateJSToArcadeDate(t):o.a.dateJSAndZoneToArcadeDate(t,null!=(i=null==(n=this.contextTimeReference)?void 0:n.timeZone)?i:"system"):t}isUnknownDateTimeField(e){var t
return"unknown"===(null==(t=this.dateTimeReferenceFieldIndex)?void 0:t.fieldTimeZone(e))}fieldSourceTimeZone(e){var t,i
return null!=(t=null==(i=this.dateTimeReferenceFieldIndex)?void 0:i.fieldTimeZone(e))?t:""}get layerPreferredTimeZone(){var e,t
return null!=(e=null==(t=this.dateTimeReferenceFieldIndex)?void 0:t.layerPreferredTimeZone)?e:""}field(e){if(this.hasField(e))return this.autocastArcadeDate(e,this.readAttribute(e,!0))
for(const t of this._joined)if(t.setIndex(this.getIndex()),t.hasField(e)){const i=t._readAttribute(e,!0)
return this.autocastArcadeDate(e,i)}throw new Error(`Field ${e} does not exist`)}setField(e,t){throw new Error("Unable to update feature attribute values, feature is readonly")}keys(){return this.getFieldNames()}castToText(e=!1){if(!e)return JSON.stringify(this.readLegacyFeature())
const t=this.readLegacyFeature()
if(!t)return JSON.stringify(null)
const i={geometry:t.geometry,attributes:{...t.attributes?t.attributes:{}}}
for(const e in i.attributes){const t=i.attributes[e]
t instanceof Date&&(i.attributes[e]=t.getTime())}return JSON.stringify(i)}gdbVersion(){return null}fullSchema(){return this._layerSchema}castAsJson(e=null){var t,i
return{attributes:this._readAttributes(),geometry:!0===(null==e?void 0:e.keepGeometryType)?this.geometry():null!=(t=null==(i=this.geometry())?void 0:i.toJSON())?t:null}}castAsJsonAsync(e=null,t=null){return Promise.resolve(this.castAsJson(t))}removeIds(e){if(Object(c.k)(this._objectIdToIndex)){const e=new Map,t=this.getCursor()
for(;t.next();){const i=Object(c.w)(t.getObjectId())
e.set(i,t.getIndex())}this._objectIdToIndex=e}const t=this._objectIdToIndex
for(const i of e)t.has(i)&&this.removeAtIndex(t.get(i))}removeAtIndex(e){Object(c.k)(this._deleted)&&(this._deleted=f.a.create(this.getSize())),this._deleted.set(e)}readGeometryForDisplay(){return this.readUnquantizedGeometry(!0)}readLegacyGeometryForDisplay(){return this.readLegacyGeometry(!0)}*features(){const e=this.getCursor()
for(;e.next();)yield e.readOptimizedFeature()}_getExists(){return Object(c.k)(this._deleted)||!this._deleted.has(this.getIndex())}_computeCentroid(){if("esriGeometryPolygon"!==this.geometryType)return null
const e=this.readUnquantizedGeometry()
if(!e||e.hasIndeterminateRingOrder)return null
const t=Object(c.v)(this.getQuantizationTransform(),null)
return Object(u.a)(new d.a,e,this.hasM,this.hasZ,t)}copyInto(e){e.seen=this.seen,e._storage=this._storage,e._arcadeSpatialReference=this._arcadeSpatialReference,e._joined=this._joined,e._tx=this._tx,e._ty=this._ty,e._sx=this._sx,e._sy=this._sy,e._deleted=this._deleted,e._objectIdToIndex=this._objectIdToIndex}}},1572:function(e,t,i){"use strict"
i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return n}))
const n=(e,t)=>e&&((...e)=>t.warn("DEBUG:",...e))||(()=>null),r=!1},1573:function(e,t,i){"use strict"
function n(e){if(null==e)return[]
const t=new Array(e.length)
for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i)
return t}i.d(t,"a",(function(){return n}))},1574:function(e,t,i){"use strict"
i.d(t,"a",(function(){return s}))
var n=i(23)
function r(e,t){return e?t?4:3:t?3:2}function s(e,t,i,s,l){if(Object(n.k)(t)||!t.lengths.length)return null
const c="upperLeft"===(null==l?void 0:l.originPosition)?-1:1
e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0)
const u=e.coords,h=[],d=i?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:f,coords:_}=t,m=r(i,s)
let p=0
for(const e of f){const t=o(d,_,p,e,i,s,c)
t&&h.push(t),p+=e*m}if(h.sort((e,t)=>{let n=c*e[2]-c*t[2]
return 0===n&&i&&(n=e[4]-t[4]),n}),h.length){let e=6*h[0][2]
u[0]=h[0][0]/e,u[1]=h[0][1]/e,i&&(e=6*h[0][4],u[2]=0!==e?h[0][3]/e:0),(u[0]<d[0]||u[0]>d[1]||u[1]<d[2]||u[1]>d[3]||i&&(u[2]<d[4]||u[2]>d[5]))&&(u.length=0)}if(!u.length){const e=t.lengths[0]?a(_,0,f[0],i,s):null
if(!e)return null
u[0]=e[0],u[1]=e[1],i&&e.length>2&&(u[2]=e[2])}return e}function o(e,t,i,n,s,o,a=1){const l=r(s,o)
let c=i,u=i+l,h=0,d=0,f=0,_=0,m=0
for(let i=0,r=n-1;i<r;i++,c+=l,u+=l){const i=t[c],n=t[c+1],r=t[c+2],o=t[u],a=t[u+1],l=t[u+2]
let p=i*a-o*n
_+=p,h+=(i+o)*p,d+=(n+a)*p,s&&(p=i*l-o*r,f+=(r+l)*p,m+=p),i<e[0]&&(e[0]=i),i>e[1]&&(e[1]=i),n<e[2]&&(e[2]=n),n>e[3]&&(e[3]=n),s&&(r<e[4]&&(e[4]=r),r>e[5]&&(e[5]=r))}if(_*a>0&&(_*=-1),m*a>0&&(m*=-1),!_)return null
const p=[h,d,.5*_]
return s&&(p[3]=f,p[4]=.5*m),p}function a(e,t,i,n,s){const o=r(n,s)
let a=t,d=t+o,f=0,_=0,m=0,p=0
for(let t=0,r=i-1;t<r;t++,a+=o,d+=o){const t=e[a],i=e[a+1],r=e[a+2],s=e[d],o=e[d+1],g=e[d+2],y=n?c(t,i,r,s,o,g):l(t,i,s,o)
if(y)if(f+=y,n){const e=h(t,i,r,s,o,g)
_+=y*e[0],m+=y*e[1],p+=y*e[2]}else{const e=u(t,i,s,o)
_+=y*e[0],m+=y*e[1]}}return f>0?n?[_/f,m/f,p/f]:[_/f,m/f]:i>0?n?[e[t],e[t+1],e[t+2]]:[e[t],e[t+1]]:null}function l(e,t,i,n){const r=i-e,s=n-t
return Math.sqrt(r*r+s*s)}function c(e,t,i,n,r,s){const o=n-e,a=r-t,l=s-i
return Math.sqrt(o*o+a*a+l*l)}function u(e,t,i,n){return[e+.5*(i-e),t+.5*(n-t)]}function h(e,t,i,n,r,s){return[e+.5*(n-e),t+.5*(r-t),i+.5*(s-i)]}},1578:function(e,t,i){"use strict"
i.d(t,"a",(function(){return n}))
const n={convertToGEGeometry:function(e,t){return null==t?null:e.convertJSONToGeometry(t)},exportPoint:function(e,t,i){const n=new r(e.getPointX(t),e.getPointY(t),i),s=e.hasZ(t),o=e.hasM(t)
return s&&(n.z=e.getPointZ(t)),o&&(n.m=e.getPointM(t)),n},exportPolygon:function(e,t,i){return new s(e.exportPaths(t),i,e.hasZ(t),e.hasM(t))},exportPolyline:function(e,t,i){return new o(e.exportPaths(t),i,e.hasZ(t),e.hasM(t))},exportMultipoint:function(e,t,i){return new a(e.exportPoints(t),i,e.hasZ(t),e.hasM(t))},exportExtent:function(e,t,i){const n=e.hasZ(t),r=e.hasM(t),s=new l(e.getXMin(t),e.getYMin(t),e.getXMax(t),e.getYMax(t),i)
if(n){const i=e.getZExtent(t)
s.zmin=i.vmin,s.zmax=i.vmax}if(r){const i=e.getMExtent(t)
s.mmin=i.vmin,s.mmax=i.vmax}return s}}
class r{constructor(e,t,i){this.x=e,this.y=t,this.spatialReference=i,this.z=void 0,this.m=void 0}}class s{constructor(e,t,i,n){this.rings=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,i&&(this.hasZ=i),n&&(this.hasM=n)}}class o{constructor(e,t,i,n){this.paths=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,i&&(this.hasZ=i),n&&(this.hasM=n)}}class a{constructor(e,t,i,n){this.points=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,i&&(this.hasZ=i),n&&(this.hasM=n)}}class l{constructor(e,t,i,n,r){this.xmin=e,this.ymin=t,this.xmax=i,this.ymax=n,this.spatialReference=r,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}},1579:function(e,t,i){"use strict"
i.d(t,"a",(function(){return _}))
var n=i(1304),r=i(980),s=i(1030),o=i(1287),a=i(1174),l=i(1e3),c=i(1064),u=i(1023),h=i(1182),d=i(1580),f=i(1327)
class _ extends(Object(d.a)(f.a)){constructor(e,t,i,n,a,h,d,f,_,m,p,g,y,x,v,b,O,S,T,C,w,M,I,P){super(),this._xOffset=Object(r.h)(y),this._yOffset=Object(r.h)(x),this._decoration=m||"none",this._backgroundColor=M,this._borderLineColor=I,this._borderLineSize=P,this._color=a,this._haloColor=h,this._haloSize=Math.min(Math.floor(5*Object(r.h)(Object(r.k)(i))),127),this._size=Math.min(Math.round(Object(r.h)(t)),127)
const E=Math.min(Math.round(Object(r.h)(n||t)),127)
this._referenceSize=Math.round(Math.sqrt(256*E)),this._scale=this._size/l.v,this._angle=g,this._justify=Object(o.d)(d||"center"),this._xAlignD=Object(o.e)(d||"center"),this._yAlignD=Object(o.g)(f||"baseline"),this._baseline="baseline"===(f||"baseline"),this._bitset=(_===s.a.MAP?1:0)|(p?1:0)<<1
const L=u.e.load(e)
L.sdf=!0,this._materialKey=L.data,this._lineWidth=Object(r.h)(v)||512,this._lineHeight=b||1,this._textPlacement=O,this._effects=S,this._isCIM=null!=T&&T,this._minMaxZoom=Object(c.a)(Math.round(C*l.A),Math.round(w*l.A))}static fromText(e,t){var i,r
const o=null==(i=e.font)?void 0:i.size,l=new _(e.materialKey,o,e.haloSize||0,o,e.color&&Object(a.c)(e.color)||0,e.haloColor&&Object(a.c)(e.haloColor)||0,e.horizontalAlignment,e.verticalAlignment,s.a.SCREEN,null==(r=e.font)?void 0:r.decoration,!1,e.angle||0,e.xoffset||0,e.yoffset||0,e.lineWidth||0,e.lineHeight||0,null,null,!1,h.b,h.a,e.backgroundColor&&Object(a.c)(e.backgroundColor),e.borderLineColor&&Object(a.c)(e.borderLineColor),e.borderLineSize),[,c]=Object(n.a)(e.text)
return l.bindTextInfo(null!=t?t:[],c),l._vertexBoundsScale=e.maxVVSize&&o?e.maxVVSize/o:1,l}static fromCIMText(e,t,i){var r
const s=e.scaleFactor||1,o=e.size*e.sizeRatio*s,[l,c]=Object(h.e)(e.scaleInfo,i),u=new _(e.materialKey,o,e.outlineSize*e.sizeRatio,e.referenceSize,Object(a.b)(e.color),Object(a.b)(e.outlineColor),e.horizontalAlignment,e.verticalAlignment,e.alignment,e.decoration,null!=(r=e.colorLocked)&&r,e.angle,e.offsetX*e.sizeRatio*s,e.offsetY*e.sizeRatio*s,512,1,e.markerPlacement,e.effects,!0,l,c,e.backgroundColor?Object(a.b)(e.backgroundColor):void 0,e.borderLineColor?Object(a.b)(e.borderLineColor):void 0,e.borderLineWidth),[,d]=Object(n.a)(e.text)
return u.bindTextInfo(t,d),u._vertexBoundsScale=e.maxVVSize?e.maxVVSize/o:1,u}}},1580:function(e,t,i){"use strict"
i.d(t,"a",(function(){return b}))
var n=i(23),r=i(980),s=i(1057),o=i(1581),a=i(1e3),l=i(1003),c=i(1064),u=i(1023),h=i(1373)
const d=Object(c.a)(4,4),f=Object(c.a)(4,2),_=Object(c.a)(4,6),m=[f,f,_,_],p=[f,_,f,_],g=[_,_,d,d],y=[d,d,_,_],x=[_,d,_,d],v=[d,_,d,_],b=e=>class extends e{constructor(...e){super(...e),this._isCIM=!1,this._vertexBoundsScale=1,this.geometryType=l.d.TEXT,this._aux=Object(c.b)(0,0,this._referenceSize,this._bitset)}bindTextInfo(e,t){e&&e.length?this._shapingInfo=Object(n.b)(e,e=>Object(h.a)(e,t,{scale:this._scale,angle:this._angle,xOffset:this._xOffset,yOffset:this._yOffset,hAlign:this._xAlignD,vAlign:this._yAlignD,maxLineWidth:Math.max(32,Math.min(this._lineWidth,512)),lineHeight:a.y*Math.max(.25,Math.min(this._lineHeight,4)),decoration:this._decoration,isCIM:this._isCIM,hasBackground:!!this._backgroundColor,borderLineSize:this._borderLineSize})):this._shapingInfo=null}_write(e,t,i,n){const r=t.getDisplayId()
this._writeGeometry(e,t,r,i,n)}_writeGeometry(e,t,i,r,o){const a=this._shapingInfo
if(Object(n.k)(a))return
if(Object(n.l)(this._textPlacement)){const n=null!=o?o:t.readLegacyGeometryForDisplay()
return this._writePlacedText(e,i,n,a,r)}const l=o?Object(s.q)(Object(s.d)(o),2):"esriGeometryPolygon"===t.geometryType?t.readCentroid():t.readGeometryForDisplay()
if(!Object(n.k)(l)){if(l.isPoint){const[t,n]=l.coords
if(!e.hasAggregates&&e.hasPixelBufferEnabled&&(t<0||t>=512||n<0||n>=512))return
return this._writeGlyphs(e,i,{x:t,y:n},a)}l.forEachVertex((t,n)=>this._writeGlyphs(e,i,{x:t,y:n},a))}}_writePlacedText(e,t,i,s,a){const l=Object(n.u)(this._textPlacement),c=o.a.getPlacement(i,l,Object(r.h)(1),e.tileKey,a.geometryEngine)
if(!c)return
let u=c.next()
for(;null!=u;){const i=-u.getAngle()
s.setRotation(i)
const n=u.tx,r=-u.ty
n<0||n>=512||r<0||r>=512||(this._writeGlyphs(e,t,{x:n,y:r},s),s.setRotation(-i)),u=c.next()}}_writeGlyphs(e,t,i,n){const r=u.e.load(this._materialKey),s=Object(c.a)(Math.round(8*i.x),Math.round(8*i.y)),o=this._vertexBoundsScale,{bounds:a,background:l,glyphs:h}=n
h.length>0&&(this._borderLineColor||this._backgroundColor)&&(r.textureBinding=h[0].textureBinding,e.recordStart(t,r.data,this.geometryType,!0),this._writeBackgroundGeometry(e,t,i,a,l),e.recordEnd())
const d=2*Math.max(a.width,a.height)
for(const l of n.glyphs)r.textureBinding=l.textureBinding,e.recordStart(t,r.data,this.geometryType,!0),e.vertexBounds(i.x+a.x+this._xOffset,i.y+a.y-this._yOffset,d*o,d*o),this._writeVertices(e,t,s,l),e.recordEnd()}_writeGlyph(e,t,i,n,r){const s=u.e.load(this._materialKey),o=Object(c.a)(Math.round(8*i),Math.round(8*n))
s.textureBinding=r.textureBinding,e.recordStart(t,s.data,this.geometryType,!0)
const a=r.bounds,l=this._vertexBoundsScale
e.vertexBounds(i+a.x*l,n+a.y*l,a.width*l,a.height*l),this._writeVertices(e,t,o,r),e.recordEnd()}_writeVertices(e,t,i,n){const r=e.vertexCount()
this._writeVertexCommon(e,t,i,n),e.vertexWrite(n.offsets.upperLeft),e.vertexWrite(n.texcoords.upperLeft),e.vertexEnd(),this._writeVertexCommon(e,t,i,n),e.vertexWrite(n.offsets.upperRight),e.vertexWrite(n.texcoords.upperRight),e.vertexEnd(),this._writeVertexCommon(e,t,i,n),e.vertexWrite(n.offsets.lowerLeft),e.vertexWrite(n.texcoords.lowerLeft),e.vertexEnd(),this._writeVertexCommon(e,t,i,n),e.vertexWrite(n.offsets.lowerRight),e.vertexWrite(n.texcoords.lowerRight),e.vertexEnd(),e.indexWrite(r+0),e.indexWrite(r+1),e.indexWrite(r+2),e.indexWrite(r+1),e.indexWrite(r+3),e.indexWrite(r+2)}_writeVertexCommon(e,t,i,n){const r=this._color,s=this._haloColor,o=Object(c.b)(0,0,this._referenceSize,this._bitset),a=Object(c.b)(0,0,this._size,this._haloSize)
e.vertexWrite(i),e.vertexWrite(t),e.vertexWrite(r),e.vertexWrite(s),e.vertexWrite(a),e.vertexWrite(o),e.vertexWrite(this._minMaxZoom)}_writeBackgroundVertex(e,t,i,n,r,s){const o=Object(c.b)(0,1,this._referenceSize,this._bitset),a=Object(c.b)(0,0,this._size,this._haloSize),l=Object(c.b)(0,0,0,0)
e.vertexWrite(i),e.vertexWrite(t),e.vertexWrite(n),e.vertexWrite(l),e.vertexWrite(a),e.vertexWrite(o),e.vertexWrite(this._minMaxZoom),e.vertexWrite(r),e.vertexWrite(s),e.vertexEnd()}_writeBackgroundQuad(e,t,i,n,r,s){const o=e.vertexCount()
this._writeBackgroundVertex(e,t,i,n,r.upperLeft,s[0]),this._writeBackgroundVertex(e,t,i,n,r.upperRight,s[1]),this._writeBackgroundVertex(e,t,i,n,r.lowerLeft,s[2]),this._writeBackgroundVertex(e,t,i,n,r.lowerRight,s[3]),e.indexWrite(o+0),e.indexWrite(o+1),e.indexWrite(o+2),e.indexWrite(o+1),e.indexWrite(o+3),e.indexWrite(o+2)}_writeBackgroundGeometry(e,t,i,n,r){const s=Object(c.a)(Math.round(8*i.x),Math.round(8*i.y)),{x:o,y:a,width:l,height:u}=n,h=2*Math.max(l,u)
if(e.vertexBounds(i.x+o+this._xOffset,i.y+a-this._yOffset,h*this._vertexBoundsScale,h*this._vertexBoundsScale),this._backgroundColor){const i=[d,d,d,d]
this._writeBackgroundQuad(e,t,s,this._backgroundColor,r.main,i)}if(this._borderLineColor||this._backgroundColor){const i=!!this._borderLineColor&&!!this._borderLineSize&&this._borderLineSize>0,[n,o,a,l,c]=i?[m,m,p,p,this._borderLineColor]:[g,y,x,v,this._backgroundColor]
this._writeBackgroundQuad(e,t,s,c,r.top,n),this._writeBackgroundQuad(e,t,s,c,r.bot,o),this._writeBackgroundQuad(e,t,s,c,r.left,a),this._writeBackgroundQuad(e,t,s,c,r.right,l)}}}},1581:function(e,t,i){"use strict"
i.d(t,"a",(function(){return s}))
var n=i(1080),r=i(1484)
class s{static getPlacement(e,t,i,s,o){const a=Object(r.b)(t)
if(!a)return null
const l=Object(n.c)(e)
return a.execute(l,t,i,s,o)}}},1582:function(e,t,i){"use strict"
i.d(t,"a",(function(){return a}))
var n=i(983),r=i(1080),s=i(1326),o=i(1484)
class a{static executeEffects(e,t,i,n){const a=Object(r.c)(t)
let l=new s.a(a)
for(const t of e){const e=Object(o.a)(t)
e&&(l=e.execute(l,t,96/72,i,n))}return l}static next(e){const t=e.next()
return Object(r.d)(t),t}static applyEffects(e,t,i){if(!e)return t
let r=new s.a(t)
for(const t of e){const e=Object(o.a)(t)
e&&(r=e.execute(r,t,1,null,i))}let a,l=null
for(;a=r.next();)l?Object(n.h)(l)?Object(n.h)(a)&&l.paths.push(...a.paths):Object(n.g)(l)&&Object(n.g)(a)&&l.rings.push(...a.rings):l=a
return l}}},1583:function(e,t,i){"use strict"
i.d(t,"a",(function(){return p}))
var n=i(23),r=i(980),s=i(1192),o=i(1173),a=i(1030),l=i(1174),c=i(1e3),u=i(1003),h=i(1064),d=i(1023),f=i(1182),_=i(1584),m=i(1327)
class p extends(Object(_.a)(m.a)){constructor(e,t,i,n,r,l,f,_,m,p,g,y,x,v,b,O,S,T,C,w,M,I,P){super(),this.angle=n,this.height=f,this.width=l,this.xOffset=t*C,this.yOffset=i*C,this._markerPlacement=w,this._effects=M,this._anchorX=O,this._anchorY=S,this._minMaxZoom=Object(h.a)(Math.round(I*c.A),Math.round(P*c.A))
const E=(v===a.a.MAP?c.l:c.m)|(g?c.j:0)|(x?c.n:0)|(y?c.o:0),L=b&&b.sdf,A=d.d.load(e)
A.sdf=L,A.pattern=!0,A.textureBinding=b.textureBinding,this._materialKey=A.data,this._fillColor=r,this._outlineColor=m,this._sizeOutlineWidth=Object(h.b)(Math.round(Math.min(Math.sqrt(128*l),255)),Math.round(Math.min(Math.sqrt(128*f),255)),Math.round(Math.min(Math.sqrt(128*p),255)),Math.round(Math.min(Math.sqrt(128*_),255)))
const j=b.rect.x+c.G,R=b.rect.y+c.G,D=j+b.width,z=R+b.height
this._offsets.xUpperLeft=j,this._offsets.yUpperLeft=R,this._offsets.xUpperRight=D,this._offsets.yUpperRight=R,this._offsets.xBottomLeft=j,this._offsets.yBottomLeft=z,this._offsets.xBottomRight=D,this._offsets.yBottomRight=z,A.symbologyType===u.e.PIE_CHART?(this._texUpperLeft=Object(h.a)(0,1),this._texUpperRight=Object(h.a)(1,1),this._texBottomLeft=Object(h.a)(0,0),this._texBottomRight=Object(h.a)(1,0)):(this._texUpperLeft=Object(h.a)(j,R),this._texUpperRight=Object(h.a)(D,R),this._texBottomLeft=Object(h.a)(j,z),this._texBottomRight=Object(h.a)(D,z)),l*=T,f*=T,l*=C,f*=C
const F=Math.round(64*T)
this._bitestAndDistRatio=Object(h.a)(E,F),this._computedWidth=l,this._computedHeight=f
const k=Object(o.c)(),N=Object(s.a)()
this._applyTransformation(N,k)}static fromCIMMarker(e,t,i){const s=t&&t.width||1,o=t&&t.height||1,c=e.size,u=s/o*e.scaleX,h=e.scaleSymbolsProportionally&&e.frameHeight?c/e.frameHeight:1,d=Object(l.b)(e.color),_=Object(l.b)(e.outlineColor),m=Object(r.h)(c),g=m*u,y=Object(r.h)(e.offsetX||0),x=Object(r.h)(e.offsetY||0),v=Object(r.h)(e.outlineWidth||0)*h,b=e.alignment||a.a.SCREEN,O=Object(r.h)(e.referenceSize),[S,T]=Object(f.e)(e.scaleInfo,i)
let C=e.rotation||0
e.rotateClockwise||(C=-C)
let w=0,M=0
const I=e.anchorPoint
I&&(e.isAbsoluteAnchorPoint?c&&(w=I.x/(c*u),M=I.y/c):(w=I.x,M=I.y))
const P=new p(e.materialKey,y,x,C,d,g,m,O,_,v,e.colorLocked,e.scaleSymbolsProportionally,!1,b,t,w,M,e.sizeRatio,Object(n.v)(e.scaleFactor,1),e.markerPlacement,e.effects,S,T)
return P._vertexBoundsScaleX=e.maxVVSize?e.maxVVSize/g:1,P._vertexBoundsScaleY=e.maxVVSize?e.maxVVSize/m:1,P}static fromPictureMarker(e,t){const i=Math.round(Object(r.h)(e.width)),n=Math.round(Object(r.h)(e.height)),s=c.E,o=Math.round(Object(r.h)(e.xoffset||0)),l=Math.round(Object(r.h)(e.yoffset||0)),u=new p(e.materialKey,o,l,e.angle,s,i,n,n,0,0,!1,!1,!1,a.a.SCREEN,t,0,0,1,1,null,null,f.b,f.a)
return u._vertexBoundsScaleX=e.maxVVSize?e.maxVVSize/e.width:1,u._vertexBoundsScaleY=e.maxVVSize?e.maxVVSize/e.height:1,u}static fromSimpleMarker(e,t){const i=Object(l.c)(e.color),n=Math.round(Object(r.h)(e.size)),s=n,o=Math.round(Object(r.h)(e.xoffset||0)),c=Math.round(Object(r.h)(e.yoffset||0)),u=e.style,h=e.outline,d=0|((null==h?void 0:h.color)&&Object(l.c)(h.color)),_=0|((null==h?void 0:h.width)&&Math.round(Object(r.h)(h.width))),m=new p(e.materialKey,o,c,e.angle,i,n,s,s,d,_,!1,!1,"esriSMSCross"===u||"esriSMSX"===u,a.a.SCREEN,t,0,0,126/64,1,null,null,f.b,f.a)
return m.boundsType="esriSMSCircle"===u?"circle":"square",m._vertexBoundsScaleX=e.maxVVSize?e.maxVVSize/e.size:1,m._vertexBoundsScaleY=e.maxVVSize?e.maxVVSize/e.size:1,m}static fromLineSymbolMarker(e,t){const i=Object(l.c)(e.color),n=Math.round(Object(r.h)(6*e.lineWidth)),s=n,o="cross"===e.style||"x"===e.style
let c
switch(e.placement){case"begin-end":c=a.f.Both
break
case"begin":c=a.f.JustBegin
break
case"end":c=a.f.JustEnd
break
default:c=a.f.None}const u={type:"CIMMarkerPlacementAtExtremities",angleToLine:!0,offset:0,extremityPlacement:c,offsetAlongLine:0},h=new p(e.materialKey,0,0,0,i,n,s,s/6,i,o?Math.round(Object(r.h)(e.lineWidth)):0,!1,!1,o,a.a.MAP,t,0,0,126/64,1,u,null,f.b,f.a)
return h.boundsType="circle"===e.style?"circle":"square",h}}},1584:function(e,t,i){"use strict"
i.d(t,"a",(function(){return p}))
var n=i(23),r=i(980),s=i(1215),o=i(1192),a=i(1013),l=i(1173),c=i(1057),u=i(1581),h=i(1e3),d=i(1003),f=i(1064),_=i(1023)
const m=3.14159265359/180,p=e=>class extends e{constructor(...e){super(...e),this.angle=0,this.xOffset=0,this.yOffset=0,this.width=0,this.height=0,this.boundsType="square",this._anchorX=0,this._anchorY=0,this._computedWidth=0,this._computedHeight=0,this._allowBorrowing=!0,this._vertexBoundsScaleX=1,this._vertexBoundsScaleY=1,this._offsets={xUpperLeft:0,yUpperLeft:0,xUpperRight:0,yUpperRight:0,xBottomLeft:0,yBottomLeft:0,xBottomRight:0,yBottomRight:0},this.geometryType=d.d.MARKER}_write(e,t,i,n){const r=t.getDisplayId()
e.recordStart(r,this._materialKey,this.geometryType,!0),this._writeGeometry(e,t,r,i,n),e.recordEnd()}_writeGeometry(e,t,i,r,s){if(Object(n.l)(this._markerPlacement))return this._writePlacedMarkers(e,t,r,s)
if(this._allowBorrowing=!0,!s&&"esriGeometryPoint"===t.geometryType){const n=t.getX(),r=t.getY()
if(!e.hasAggregates&&e.hasPixelBufferEnabled&&(n<0||n>=513||r<0||r>=513))return
return this._writeVertices(e,i,this._getPos(n,r),n,r)}const o=s?Object(c.q)(Object(c.d)(s),2):"esriGeometryPolygon"===t.geometryType?t.readCentroid():t.readGeometryForDisplay()
if(!Object(n.k)(o)){if(o.isPoint){const[t,n]=o.coords
if(!e.hasAggregates&&e.hasPixelBufferEnabled&&(t<0||t>=512||n<0||n>=512))return
return this._writeVertices(e,i,this._getPos(t,n),t,n)}o.forEachVertex((t,n)=>{const r=2*h.Z
t<-r||t>=r||n<-r||n>=r||this._writeVertices(e,i,this._getPos(t,n),t,n)})}}_writePlacedMarkers(e,t,i,s){const a=null!=s?s:t.readLegacyGeometryForDisplay(),c=u.a.getPlacement(a,Object(n.u)(this._markerPlacement),Object(r.h)(1),e.tileKey,i.geometryEngine)
if(!c)return
this._allowBorrowing="esriGeometryPolygon"!==t.geometryType
const h=t.getDisplayId(),d=Object(l.c)(),f=Object(o.a)()
let _=c.next()
for(;null!=_;){const t=_.tx,i=-_.ty
t>=-128&&t<=640&&i>=-128&&i<=640&&(this._applyTransformation(f,d,-_.getAngle()/m),this._writeVertices(e,h,this._getPos(t,i),t,i)),_=c.next()}}_writeVertices(e,t,i,n,r){const s=_.d.load(this._materialKey)
return s.symbologyType===d.e.HEATMAP?this._writeHeatmapVertices(e,t,i):this._writeMarkerVertices(e,t,s,i,n,r)}_writeMarkerVertices(e,t,i,n,r,s){const o=i.vvRotation,a=e.vertexCount()
let l=this._computedWidth*this._vertexBoundsScaleX,c=this._computedHeight*this._vertexBoundsScaleY
if(this.angle){const e=Math.max(l,c)
l=e,c=e}if(o){const e=Math.max(this.xOffset,this.yOffset)
l+=e,c+=e}this._allowBorrowing&&e.vertexBounds(r+this.xOffset,s-this.yOffset,l,c),e.vertexWrite(n),e.vertexWrite(this._offsetUpperLeft),e.vertexWrite(this._texUpperLeft),e.vertexWrite(this._bitestAndDistRatio),e.vertexWrite(t),e.vertexWrite(this._fillColor),e.vertexWrite(this._outlineColor),e.vertexWrite(this._sizeOutlineWidth),e.vertexWrite(this._minMaxZoom),e.vertexEnd(),e.vertexWrite(n),e.vertexWrite(this._offsetUpperRight),e.vertexWrite(this._texUpperRight),e.vertexWrite(this._bitestAndDistRatio),e.vertexWrite(t),e.vertexWrite(this._fillColor),e.vertexWrite(this._outlineColor),e.vertexWrite(this._sizeOutlineWidth),e.vertexWrite(this._minMaxZoom),e.vertexEnd(),e.vertexWrite(n),e.vertexWrite(this._offsetBottomLeft),e.vertexWrite(this._texBottomLeft),e.vertexWrite(this._bitestAndDistRatio),e.vertexWrite(t),e.vertexWrite(this._fillColor),e.vertexWrite(this._outlineColor),e.vertexWrite(this._sizeOutlineWidth),e.vertexWrite(this._minMaxZoom),e.vertexEnd(),e.vertexWrite(n),e.vertexWrite(this._offsetBottomRight),e.vertexWrite(this._texBottomRight),e.vertexWrite(this._bitestAndDistRatio),e.vertexWrite(t),e.vertexWrite(this._fillColor),e.vertexWrite(this._outlineColor),e.vertexWrite(this._sizeOutlineWidth),e.vertexWrite(this._minMaxZoom),e.vertexEnd(),this._writeIndices(e,a)}_writeHeatmapVertices(e,t,i){const n=e.vertexCount()
e.vertexWrite(i),e.vertexWrite(this._offsetUpperLeft),e.vertexWrite(t),e.vertexEnd(),e.vertexWrite(i),e.vertexWrite(this._offsetUpperRight),e.vertexWrite(t),e.vertexEnd(),e.vertexWrite(i),e.vertexWrite(this._offsetBottomLeft),e.vertexWrite(t),e.vertexEnd(),e.vertexWrite(i),e.vertexWrite(this._offsetBottomRight),e.vertexWrite(t),e.vertexEnd(),this._writeIndices(e,n)}_writeIndices(e,t){e.indexWrite(t+0),e.indexWrite(t+1),e.indexWrite(t+2),e.indexWrite(t+1),e.indexWrite(t+3),e.indexWrite(t+2)}_applyTransformation(e,t,i=0){Object(s.a)(e,Object(l.d)(this.xOffset,-this.yOffset)),null!=this.angle&&this.angle+i!==0&&Object(s.h)(e,e,m*(this.angle+i))
const n=this._computedWidth,r=this._computedHeight,o=-(.5+this._anchorX)*n,c=-(.5-this._anchorY)*r
Object(a.s)(t,o,c),Object(a.t)(t,t,e),this._offsetUpperLeft=Object(f.a)(16*t[0],16*t[1]),this._offsets.xUpperLeft=t[0],this._offsets.yUpperLeft=t[1],Object(a.s)(t,o+n,c),Object(a.t)(t,t,e),this._offsetUpperRight=Object(f.a)(16*t[0],16*t[1]),this._offsets.xUpperRight=t[0],this._offsets.yUpperRight=t[1],Object(a.s)(t,o,c+r),Object(a.t)(t,t,e),this._offsetBottomLeft=Object(f.a)(16*t[0],16*t[1]),this._offsets.xBottomLeft=t[0],this._offsets.yBottomLeft=t[1],Object(a.s)(t,o+n,c+r),Object(a.t)(t,t,e),this._offsetBottomRight=Object(f.a)(16*t[0],16*t[1]),this._offsets.xBottomRight=t[0],this._offsets.yBottomRight=t[1]}_getPos(e,t){return Object(f.a)(Math.round(8*e),Math.round(8*t))}}},1587:function(e,t,i){"use strict"
i.d(t,"a",(function(){return Re})),i.d(t,"b",(function(){return je}))
var n=i(446),r=i(233),s=i(973),o=i(1223),a=i(1003),l=i(1023),c=i(23),u=i(980),h=i(1174),d=i(1e3),f=i(1616),_=i(1064),m=i(1182),p=i(1057),g=i(1022),y=(i(1303),i(1548)),x=i(1468),v=i(1062)
function b(e,t,i,n,r,s,o){H=0
const a=(n-i)*s,l=r&&r.length,c=l?(r[0]-i)*s:a
let u,h,d,f,_,m=O(t,i,n,0,c,s,!0)
if(m&&m.next!==m.prev){if(l&&(m=function(e,t,i,n,r,s){const o=new Array
for(let r=0,a=n.length;r<a;r++){const l=O(e,t,i,n[r]*s,r<a-1?n[r+1]*s:i*s,s,!1)
l===l.next&&(l.steiner=!0),o.push(P(l))}o.sort(F)
for(const e of o)r=E(e,r)
return r}(t,i,n,r,m,s)),a>80*s){u=d=t[0+i*s],h=f=t[1+i*s]
for(let e=s;e<c;e+=s){const n=t[e+i*s],r=t[e+1+i*s]
u=Math.min(u,n),h=Math.min(h,r),d=Math.max(d,n),f=Math.max(f,r)}_=Math.max(d-u,f-h),_=0!==_?1/_:0}T(m,e,s,u,h,_,o,0)}}function O(e,t,i,n,r,s,o){let a
if(o===function(e,t,i,n,r,s){let o=0
for(let i=n,a=r-s;i<r;i+=s)o+=(e[a+t*s]-e[i+t*s])*(e[i+1+t*s]+e[a+1+t*s]),a=i
return o}(e,t,0,n,r,s)>0)for(let i=n;i<r;i+=s)a=M(i+t*s,e[i+t*s],e[i+1+t*s],a)
else for(let i=r-s;i>=n;i-=s)a=M(i+t*s,e[i+t*s],e[i+1+t*s],a)
return a&&z(a,a.next)&&(I(a),a=a.next),a}function S(e,t=e){if(!e)return e
let i,n=e
do{if(i=!1,n.steiner||!z(n,n.next)&&0!==L(n.prev,n,n.next))n=n.next
else{if(I(n),n=t=n.prev,n===n.next)break
i=!0}}while(i||n!==t)
return t}function T(e,t,i,n,r,s,o,a){if(!e)return
!a&&s&&(e=function e(t,i,n,r){let s
for(;s!==t;s=s.next){if(s=s||t,null===s.z&&(s.z=D(s.x,s.y,i,n,r)),s.prev.next!==s||s.next.prev!==s)return s.prev.next=s,s.next.prev=s,e(t,i,n,r)
s.prevZ=s.prev,s.nextZ=s.next}return t.prevZ.nextZ=null,t.prevZ=null,function(e){let t,i=1
for(;;){let n,r=e
e=null,t=null
let s=0
for(;r;){s++,n=r
let o=0
for(;o<i&&n;o++)n=n.nextZ
let a=i
for(;o>0||a>0&&n;){let i
0===o?(i=n,n=n.nextZ,a--):0!==a&&n?r.z<=n.z?(i=r,r=r.nextZ,o--):(i=n,n=n.nextZ,a--):(i=r,r=r.nextZ,o--),t?t.nextZ=i:e=i,i.prevZ=t,t=i}r=n}if(t.nextZ=null,i*=2,s<2)return e}}(t)}(e,n,r,s))
let l=e
for(;e.prev!==e.next;){const c=e.prev,u=e.next
if(s?w(e,n,r,s):C(e))t.push(c.index/i+o),t.push(e.index/i+o),t.push(u.index/i+o),I(e),e=u.next,l=u.next
else if((e=u)===l){a?1===a?T(e=k(e,t,i,o),t,i,n,r,s,o,2):2===a&&N(e,t,i,n,r,s,o):T(S(e),t,i,n,r,s,o,1)
break}}}function C(e){const t=e.prev,i=e,n=e.next
if(L(t,i,n)>=0)return!1
let r=e.next.next
const s=r
let o=0
for(;r!==e.prev&&(0===o||r!==s);){if(o++,j(t.x,t.y,i.x,i.y,n.x,n.y,r.x,r.y)&&L(r.prev,r,r.next)>=0)return!1
r=r.next}return!0}function w(e,t,i,n){const r=e.prev,s=e,o=e.next
if(L(r,s,o)>=0)return!1
const a=r.x<s.x?r.x<o.x?r.x:o.x:s.x<o.x?s.x:o.x,l=r.y<s.y?r.y<o.y?r.y:o.y:s.y<o.y?s.y:o.y,c=r.x>s.x?r.x>o.x?r.x:o.x:s.x>o.x?s.x:o.x,u=r.y>s.y?r.y>o.y?r.y:o.y:s.y>o.y?s.y:o.y,h=D(a,l,t,i,n),d=D(c,u,t,i,n)
let f=e.prevZ,_=e.nextZ
for(;f&&f.z>=h&&_&&_.z<=d;){if(f!==e.prev&&f!==e.next&&j(r.x,r.y,s.x,s.y,o.x,o.y,f.x,f.y)&&L(f.prev,f,f.next)>=0)return!1
if(f=f.prevZ,_!==e.prev&&_!==e.next&&j(r.x,r.y,s.x,s.y,o.x,o.y,_.x,_.y)&&L(_.prev,_,_.next)>=0)return!1
_=_.nextZ}for(;f&&f.z>=h;){if(f!==e.prev&&f!==e.next&&j(r.x,r.y,s.x,s.y,o.x,o.y,f.x,f.y)&&L(f.prev,f,f.next)>=0)return!1
f=f.prevZ}for(;_&&_.z<=d;){if(_!==e.prev&&_!==e.next&&j(r.x,r.y,s.x,s.y,o.x,o.y,_.x,_.y)&&L(_.prev,_,_.next)>=0)return!1
_=_.nextZ}return!0}function M(e,t,i,n){const r=U.create(e,t,i)
return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function I(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function P(e){let t=e,i=e
do{(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next}while(t!==e)
return i}function E(e,t){const i=function(e,t){let i=t
const n=e.x,r=e.y
let s,o=-1/0
do{if(r<=i.y&&r>=i.next.y&&i.next.y!==i.y){const e=i.x+(r-i.y)*(i.next.x-i.x)/(i.next.y-i.y)
if(e<=n&&e>o){if(o=e,e===n){if(r===i.y)return i
if(r===i.next.y)return i.next}s=i.x<i.next.x?i:i.next}}i=i.next}while(i!==t)
if(!s)return null
if(n===o)return s.prev
const a=s,l=s.x,c=s.y
let u,h=1/0
for(i=s.next;i!==a;)n>=i.x&&i.x>=l&&n!==i.x&&j(r<c?n:o,r,l,c,r<c?o:n,r,i.x,i.y)&&(u=Math.abs(r-i.y)/(n-i.x),(u<h||u===h&&i.x>s.x)&&R(i,e)&&(s=i,h=u)),i=i.next
return s}(e,t)
if(!i)return t
const n=B(i,e)
return S(n,n.next),S(i,i.next)}function L(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function A(e,t,i,n){return!!(z(e,t)&&z(i,n)||z(e,n)&&z(i,t))||L(e,t,i)>0!=L(e,t,n)>0&&L(i,n,e)>0!=L(i,n,t)>0}function j(e,t,i,n,r,s,o,a){return(r-o)*(t-a)-(e-o)*(s-a)>=0&&(e-o)*(n-a)-(i-o)*(t-a)>=0&&(i-o)*(s-a)-(r-o)*(n-a)>=0}function R(e,t){return L(e.prev,e,e.next)<0?L(e,t,e.next)>=0&&L(e,e.prev,t)>=0:L(e,t,e.prev)<0||L(e,e.next,t)<0}function D(e,t,i,n,r){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-i)*r)|e<<8))|e<<4))|e<<2))|e<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-n)*r)|t<<8))|t<<4))|t<<2))|t<<1))<<1}function z(e,t){return e.x===t.x&&e.y===t.y}function F(e,t){return e.x-t.x}function k(e,t,i,n){let r=e
do{const s=r.prev,o=r.next.next
!z(s,o)&&A(s,r,r.next,o)&&R(s,o)&&R(o,s)&&(t.push(s.index/i+n),t.push(r.index/i+n),t.push(o.index/i+n),I(r),I(r.next),r=e=o),r=r.next}while(r!==e)
return r}function N(e,t,i,n,r,s,o){let a=e
do{let e=a.next.next
for(;e!==a.prev;){if(a.index!==e.index&&V(a,e)){let l=B(a,e)
return a=S(a,a.next),l=S(l,l.next),T(a,t,i,n,r,s,o,0),void T(l,t,i,n,r,s,o,0)}e=e.next}a=a.next}while(a!==e)}function V(e,t){return e.next.index!==t.index&&e.prev.index!==t.index&&!function(e,t){let i=e
do{if(i.index!==e.index&&i.next.index!==e.index&&i.index!==t.index&&i.next.index!==t.index&&A(i,i.next,e,t))return!0
i=i.next}while(i!==e)
return!1}(e,t)&&R(e,t)&&R(t,e)&&function(e,t){let i=e,n=!1
const r=(e.x+t.x)/2,s=(e.y+t.y)/2
do{i.y>s!=i.next.y>s&&i.next.y!==i.y&&r<(i.next.x-i.x)*(s-i.y)/(i.next.y-i.y)+i.x&&(n=!n),i=i.next}while(i!==e)
return n}(e,t)}function B(e,t){const i=U.create(e.index,e.x,e.y),n=U.create(t.index,t.x,t.y),r=e.next,s=t.prev
return e.next=t,t.prev=e,i.next=r,r.prev=i,n.next=i,i.prev=n,s.next=n,n.prev=s,n}class U{constructor(){this.index=0,this.x=0,this.y=0,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}static create(e,t,i){const n=H<G.length?G[H++]:new U
return n.index=e,n.x=t,n.y=i,n.prev=null,n.next=null,n.z=null,n.prevZ=null,n.nextZ=null,n.steiner=!1,n}}const G=new Array
let H=0
for(let e=0;e<8096;e++)G.push(new U)
const W=new x.d(0,0,0,1,0),Y=new x.d(0,0,0,1,0)
function Z(e,t,i){let n=0
for(let r=1;r<i;r++){const i=e[2*(t+r-1)],s=e[2*(t+r-1)+1]
n+=(e[2*(t+r)]-i)*(e[2*(t+r)+1]+s)}return n}function q(e,t,i,n,r){let s=0
for(let o=i;o<n;o+=3){const i=2*(e[o]-r),n=2*(e[o+1]-r),a=2*(e[o+2]-r)
s+=Math.abs((t[i]-t[a])*(t[n+1]-t[i+1])-(t[i]-t[n])*(t[a+1]-t[i+1]))}return s}W.setExtent(d.Z),Y.setExtent(d.Z)
var X=i(1030),K=i(1705)
const J=e=>class extends e{constructor(...e){super(...e),this.tessellationProperties={},this._tessellationOptions={halfWidth:0,pixelCoordRatio:1,offset:0},this.geometryType=a.d.LINE}writeGeometry(e,t,i,n){this._writeGeometry(e,t,i,n)}_initializeTessellator(e){const t=l.c.load(this._materialKey),i=l.a.load(this._materialKey),n=this._tessellationOptions,r=t.vvSizeFieldStops||t.vvSizeMinMaxValue||t.vvSizeScaleStops||t.vvSizeUnitValue,s=this.tessellationProperties._halfWidth<d.Y&&!e&&!r
this.tessellationProperties.minMaxZoom=this._minMaxZoom,n.wrapDistance=65535,n.textured=this._isDashed||this._hasPattern,n.offset=this.tessellationProperties.offset,n.halfWidth=this.tessellationProperties._halfWidth
const o=s?0:1,a=Object(l.h)(i)?Q:$
this._lineTessellator=new K.a(a(this.tessellationProperties,o,o),ee(this.tessellationProperties),s)}_write(e,t,i,n){const r="esriGeometryPoint"===t.geometryType
e.recordStart(t.getDisplayId(),this._materialKey,this.geometryType,r),this._writeGeometry(e,t,n,r),e.recordEnd()}_writeGeometry(e,t,i,n){const r=null!=i?i:t.readLegacyGeometryForDisplay(),s=this._getLines(r,n)
Object(c.k)(s)||this._writeVertices(e,t,s)}_getLines(e,t){if(Object(c.k)(e))return null
const i=e.paths||e.rings
return Object(c.k)(i)?null:function(e,t){Y.setPixelMargin(t)
const i=Y,n=-t,r=d.Z+t
let s=[],o=!1,a=0
for(;a<e.length;){const t=[],l=e[a]
if(!l)return null
i.reset(x.a.LineString)
let[c,u]=l[0]
if(o)i.moveTo(c,u)
else{if(c<n||c>r||u<n||u>r){o=!0
continue}t.push({x:c,y:u})}let h=!1
const d=l.length
for(let e=1;e<d;++e)if(c+=l[e][0],u+=l[e][1],o)i.lineTo(c,u)
else{if(c<n||c>r||u<n||u>r){h=!0
break}t.push({x:c,y:u})}if(h)o=!0
else{if(o){const e=i.resultWithStarts()
if(e)for(const t of e)s.push(t)}else s.push({line:t,start:0})
a++,o=!1}}return s=s.filter(e=>e.line.length>1),0===s.length?null:s}(i,t?256:16)}_writeVertices(e,t,i){const n=t.getDisplayId(),r=e.vertexCount(),s=this.tessellationProperties,o=this._tessellationOptions
s.out=e,s.id=n,s.indexCount=0,s.vertexCount=0,s.offset=r,o.capType=this._capType,o.joinType=this._joinType
const a=l.a.load(this._materialKey)
this.tessellationProperties.key=Object(l.h)(a)?a:l.c.load(this._materialKey)
for(const{line:e,start:t}of i)o.initialDistance=t%65535,this._lineTessellator.tessellate(e,o)}},$=(e,t,i)=>(n,r,s,o,a,l,c,u,h,d,f)=>{const m=Object(_.a)(f,Math.ceil(16*e._halfWidth)),p=Object(_.b)(Math.round(16*c),Math.round(16*u),Math.round(16*h),Math.round(16*d)),g=Object(_.b)(16*a,16*l,0,e._bitset),y=e.out
return y.vertexBounds(n,r,t,i),y.vertexWrite(Object(_.a)(8*n,8*r)),y.vertexWrite(e.id),y.vertexWrite(e._fillColor),y.vertexWrite(p),y.vertexWrite(m),y.vertexWrite(e._tl),y.vertexWrite(e._br),y.vertexWrite(g),y.vertexWrite(Object(_.a)(Math.ceil(16*e._halfReferenceWidth),0)),y.vertexWrite(e.minMaxZoom),y.vertexEnd(),e.offset+e.vertexCount++},Q=(e,t,i)=>(n,r,s,o,a,c,u,h,d,f,m)=>{const p=Object(_.a)(16*e._halfWidth,16*e._halfReferenceWidth),g=Object(_.b)(16*u+128,16*h+128,16*d+128,16*f+128),y=e.out,x=e._bitset<<24|e.id
y.vertexBounds(n,r,t,i),y.vertexWrite(Object(_.a)(8*n,8*r)),y.vertexWrite(x),y.vertexWrite(e._fillColor)
const v=Object(l.i)(e.key)
return v||(y.vertexWrite(0),y.vertexWrite(0)),y.vertexWrite(0),y.vertexWrite(p),y.vertexWrite(g),v||y.vertexWrite(e.minMaxZoom),y.vertexEnd(),e.offset+e.vertexCount++},ee=e=>(t,i,n)=>{const r=e.out
r.indexWrite(t),r.indexWrite(i),r.indexWrite(n),e.indexCount+=3}
var te=i(1327)
class ie extends(J(te.a)){constructor(e,t,i,n,r,s,o,a,c,u,h,f,p,g,y,x,v,b,O,S){super()
const T=l.c.load(e)
t&&(T.sdf=t.sdf,T.pattern=!0,T.textureBinding=t.textureBinding),this._capType=n,this._joinType=r,this._miterLimitCosine=Object(m.d)(s),this.tessellationProperties._fillColor=o,this.tessellationProperties._tl=a,this.tessellationProperties._br=c,this._hasPattern=u,this._isDashed=h,this._zOrder=v,this._effects=b,this._minMaxZoom=Object(_.a)(Math.round(O*d.A),Math.round(S*d.A)),this._materialKey=T.data
const C=(p?d.j:0)|(g?d.p:0)|(f?d.k:0)|(y?d.i:0)
this.tessellationProperties._bitset=C,this.tessellationProperties._halfWidth=.5*i,this.tessellationProperties._halfReferenceWidth=.5*x,this.tessellationProperties.offset=0,this._initializeTessellator(!1)}static fromCIMLine(e,t,i){var n,r,s,o
const a=e.color,l=e.scaleFactor||1,c=!!e.dashTemplate
let f=e.cap
c&&f===X.e.ROUND&&(f=X.e.SQUARE)
const p=e.join,g=Object(u.h)(e.width)*l,y=Object(u.h)(e.referenceWidth),x=Object(u.h)(e.miterLimit),v=a&&Object(h.b)(a)||0,[b,O]=Object(m.e)(e.scaleInfo,i)
if(!t)return new ie(e.materialKey,t,g,f,p,x,v,0,0,!1,c,null!=(n=e.scaleDash)&&n,null!=(r=e.colorLocked)&&r,!1,e.sampleAlphaOnly,y,e.zOrder,e.effects,b,O)
const{rect:S,width:T,height:C}=t,w=S.x+d.G,M=S.y+d.G,I=w+T,P=M+C,E=Object(_.a)(w,M),L=Object(_.a)(I,P)
return new ie(e.materialKey,t,g,f,p,x,v,E,L,!0,c,null!=(s=e.scaleDash)&&s,null!=(o=e.colorLocked)&&o,!1,e.sampleAlphaOnly,y,e.zOrder,e.effects,b,O)}static fromFillOutline(e){var t
const i=l.a.load(e.materialKey)
return Object(l.h)(i)&&e.outline&&"esriSLSSolid"===(null==(t=e.outline)?void 0:t.style)?ie.fromSimpleLine({hash:"",materialKey:e.materialKey,...e.outline},null,!0):null}static fromSimpleLine(e,t,i=!1){const{color:n}=e,r="esriSLSSolid"!==e.style&&"esriSLSNull"!==e.style,s=Object(g.i)(e.cap||"round"),o=Object(g.j)(e.join||"round")
let a=n&&"esriSLSNull"!==e.style&&Object(h.c)(n)||0
"esriSLSNull"===e.style&&(a=0)
const l=Object(u.h)(e.width),c=e.miterLimit
if(!t)return new ie(e.materialKey,t,l,s,o,c,a,0,0,!1,r,!0,!1,i,!1,l,0,null,m.b,m.a)
const{rect:f,width:p,height:y}=t,x=f.x+d.G,v=f.y+d.G,b=x+p,O=v+y,S=Object(_.a)(x,v),T=Object(_.a)(b,O)
return new ie(e.materialKey,t,l,s,o,c,a,S,T,!0,r,!0,!1,i,!1,l,0,null,m.b,m.a)}static fromPictureLineSymbol(e,t,i,n){return r.a.getLogger("esri.views.2d.engine.webgl.WGLLineTemplate").error("PictureLineSymbol support does not exist!"),null}}const ne=e=>class extends e{constructor(...e){super(...e),this.forceLibtess=!1,this._bitset=0,this._lineTemplate=null,this.geometryType=a.d.FILL}_maybeAddLineTemplate(e){this._lineTemplate=ie.fromFillOutline(e)}_write(e,t,i,n){const r="esriGeometryPoint"===t.geometryType,s=l.a.load(this._materialKey)
e.recordStart(t.getDisplayId(),this._materialKey,this.geometryType,r),this._writeGeometry(e,t,s,n,r),Object(l.h)(s)&&Object(c.l)(this._lineTemplate)&&this._lineTemplate.writeGeometry(e,t,n,r),e.recordEnd()}_writeGeometry(e,t,i,n,r){const s=this._getGeometry(t,n,r)
if(Object(c.k)(s))return
const o=[]
if(!(s.maxLength>100)&&!this.forceLibtess&&function(e,t){const{coords:i,lengths:n,hasIndeterminateRingOrder:r}=t,s=e
if(r)return!1
let o=0
for(let e=0;e<n.length;){let t=e,r=n[e],a=Z(i,o,r)
const l=[]
for(;++t<n.length;){const e=n[t],s=Z(i,o+r,e)
if(!(s>0))break
a+=s,l.push(o+r),r+=e}const c=s.length
b(s,i,o,o+r,l,2,0)
const u=q(s,i,c,s.length,0),h=Math.abs(a)
if(Math.abs((u-h)/Math.max(1e-7,h))>1e-5)return s.length=0,!1
e=t,o+=r}return!0}(o,s))return void(o.length&&this._writeVertices(e,t,s.coords,s.lengths,i,o))
const a=function(e){const{coords:t,lengths:i}=e,{buffer:n}=Object(y.b)(t,i)
return n}(s)
this._writeVertices(e,t,a,[a.length/2],i)}_writeVertex(e,t,i,n,r,s){const o=Object(_.a)(1*n,1*r)
if(e.vertexBounds(n,r,0,0),e.vertexWrite(o),e.vertexWrite(t),i.symbologyType===a.e.DOT_DENSITY)e.vertexWriteF32(1/Math.abs(s.readGeometryArea()))
else{e.vertexWrite(this.fillColor)
const t=Object(l.i)(i)
t||(e.vertexWrite(this.tl),e.vertexWrite(this.br)),e.vertexWrite(this.aux21),e.vertexWrite(this.aux22),e.vertexWrite(this.aux3),t||e.vertexWrite(this._minMaxZoom)}}_writeVertices(e,t,i,n,r,s){const o=t.getDisplayId(),a=this._bitset<<24|o,l=n.reduce((e,t)=>e+t),c=Object(g.n)(r.geometryType,r.symbologyType).geometry/4,u=e.vertexCount()
e.vertexEnsureSize(c*l)
let h=0
if(s)for(const n of s){const s=i[2*n],o=i[2*n+1]
this._writeVertex(e,a,r,s,o,t),h++}else for(let n=0;n<i.length;n+=2){const s=Math.round(i[n]),o=Math.round(i[n+1])
this._writeVertex(e,a,r,s,o,t),h++}e.indexEnsureSize(h)
for(let t=0;t<h;t++)e.indexWrite(t+u)}_getGeometry(e,t,i){const n=t?Object(p.q)(Object(p.d)(t),2):e.readGeometryForDisplay()
return n?function(e,t){if(Object(c.k)(e))return null
if(!function(e,t,i){let n=0
for(let t=0;t<e.lengths.length;t++){const r=e.lengths[t]
for(let t=0;t<r;t++){const r=e.coords[2*(t+n)],s=e.coords[2*(t+n)+1]
if(r<-128||r>i||s<-128||s>i)return!0}n+=r}return!1}(e,0,d.Z+128))return e
W.setPixelMargin(t),W.reset(x.a.Polygon)
let i=0
for(let t=0;t<e.lengths.length;t++){const n=e.lengths[t]
let r=e.coords[2*(0+i)],s=e.coords[2*(0+i)+1]
W.moveTo(r,s)
for(let t=1;t<n;t++)r=e.coords[2*(t+i)],s=e.coords[2*(t+i)+1],W.lineTo(r,s)
W.close(),i+=n}const n=W.result(!1)
if(!n)return null
const r=[],s=[]
for(const e of n){let t=0
for(const i of e)s.push(i.x),s.push(i.y),t++
r.push(t)}return new v.a(r,s)}(n,i?256:8):null}}
var re=i(1537),se=i(1230)
const oe=r.a.getLogger("esri.views.2d.engine.webgl.WGLDynamicMeshTemplate")
class ae extends te.a{constructor(e){super(),this._ongoingMaterialRequestMap=new Map,this._materialCache=new Map,this._dynamicPropertyMap=new Map,this._cimLayer=e}analyze(e,t,i,n,r){if(r&&0===r.length)return null
const s=r&&r.length>0,o=t.readLegacyFeature(),a=t.getObjectId(),l=this._materialCache,c=this._cimLayer.materialHash
if(!c)return oe.error("A Dynamic mesh template must have a material hash value or function!"),Promise.reject(null)
const u="function"==typeof c?c(o,i,n,a):c,h=l.get(u)
if(null!=h)return Promise.resolve(h)
const d=this._ongoingMaterialRequestMap.get(u)
if(d)return d
const f=this._cimLayer,_=Object(re.a)(f.cim,this._cimLayer.materialOverrides)
_.mosaicHash=u
const{type:m,url:p}=f,g={cim:_,type:m,mosaicHash:u,url:p,size:null,dashTemplate:null,text:null,fontName:null,objectId:a,animatedSymbolProperties:null}
switch(m){case"marker":g.size=Object(se.g)(f.size,o,i,n),g.animatedSymbolProperties=Object(se.g)(f.animatedSymbolProperties,o,i,n)
break
case"line":g.dashTemplate=f.dashTemplate
break
case"text":g.text=Object(se.g)(f.text,o,i,n),g.fontName=Object(se.g)(f.fontName,o,i,n)}const y=e.getMosaicItem(g,r).then(e=>(s||(this._ongoingMaterialRequestMap.delete(u),l.set(u,e)),e)).catch(e=>(this._ongoingMaterialRequestMap.delete(u),oe.error(".analyze()",e.message),null))
return s||this._ongoingMaterialRequestMap.set(u,y),y}}var le=i(1371)
class ce extends(ne(ae)){constructor(e,t,i){var n
if(super(e),this._minMaxZoom=Object(_.a)(Math.round(t*d.A),Math.round(i*d.A)),Object(m.f)(e.color)){const t=(t,i,n)=>{const r=e.color(t,i,n)
return r&&Object(h.b)(r)||0}
this._dynamicPropertyMap.set("fillColor",t)}else{const t=e.color
this.fillColor=t&&Object(h.b)(t)||0}const r="CIMMarkerPlacementInsidePolygon"===(null==(n=e.cim.placement)?void 0:n.type)&&e.cim.placement.shiftOddRows?2:1,s=e.height
if(Object(m.f)(s)){const e=(e,t,i)=>s(e,t,i)*r
this._dynamicPropertyMap.set("_height",e)}else this._height=(s||0)*r
const o=e.offsetX
if(Object(m.f)(o)){const e=(e,t,i)=>Object(u.h)(o(e,t,i))
this._dynamicPropertyMap.set("_offsetX",e)}else this._offsetX=Object(u.h)(o||0)
const a=e.offsetY
if(Object(m.f)(a)){const e=(e,t,i)=>Object(u.h)(-a(e,t,i))
this._dynamicPropertyMap.set("_offsetY",e)}else this._offsetY=Object(u.h)(-a||0)
const l=e.scaleX
Object(m.f)(l)?this._dynamicPropertyMap.set("_scaleX",l):this._scaleX=l||1
const p=e.angle
if(Object(m.f)(p)){const e=(e,t,i)=>Object(f.a)(p(e,t,i))
this._dynamicPropertyMap.set("_angle",e)}else this._angle=Object(f.a)(p)||0
if(Object(c.l)(e.effects)){const t=e.effects
Object(m.f)(t)?this._dynamicPropertyMap.set("_effects",t):this._effects=t}this._cimFillLayer=e,this._bitset=(e.colorLocked?d.j:0)|(e.applyRandomOffset?d.h:0)|(e.sampleAlphaOnly?d.i:0)|(e.hasUnresolvedReplacementColor?d.g:0),this._fillMaterialKey=e.materialKey}static fromCIMFill(e,t){const[i,n]=Object(m.e)(e.scaleInfo,t)
return new ce(e,i,n)}bindFeature(e,t,i){const n=e.readLegacyFeature()
this._dynamicPropertyMap.forEach((e,r)=>{this[r]=e(n,t,i)})
const r=l.a.load(this._fillMaterialKey),s=this._materialCache,o=(0,this._cimFillLayer.materialHash)(n,t,i),a=s.get(o)
let c=null
if(a&&Object(le.a)(a.spriteMosaicItem)&&(c=a.spriteMosaicItem),c){const{rect:e,width:t,height:i}=c,n=e.x+d.G,s=e.y+d.G,o=n+t,a=s+i
let l=Math.round(Object(u.h)(this._height))
l<=0&&(l=a-s)
let h=Math.round(Object(u.h)(this._height/i*t||0))
h<=0&&(h=o-n)
const f=this._scaleX,m=1
this.tl=Object(_.a)(n,s),this.br=Object(_.a)(o,a),this.aux21=Object(_.a)(h,l),this.aux22=Object(_.a)(this._offsetX,this._offsetY),this.aux3=Object(_.b)(128*f,128*m,this._angle,0),r.sdf=c.sdf,r.pattern=!0,r.textureBinding=c.textureBinding}else this.tl=0,this.br=0,this.aux21=0,this.aux22=0,this.aux3=0,r.sdf=!1,r.pattern=!1,r.textureBinding=0
this._materialKey=r.data}}class ue extends(J(ae)){constructor(e,t,i){super(e),this._minMaxZoom=Object(_.a)(Math.round(t*d.A),Math.round(i*d.A)),this._cimLineLayer=e
let n=0
Object(m.f)(e.width)||(n=.5*Object(u.h)(e.width)),this._dynamicPropertyMap.set("_halfWidth",(t,i,r)=>Object(m.f)(e.width)?.5*Object(u.h)(e.width(t,i,r)):n),Object(m.f)(e.cap)?this._dynamicPropertyMap.set("_capType",e.cap):this._capType=e.cap,Object(m.f)(e.join)?this._dynamicPropertyMap.set("_joinType",e.join):this._joinType=e.join
const r=e.color
if(Object(m.f)(r)){const e=(e,t,i)=>Object(h.b)(r(e,t,i))
this._dynamicPropertyMap.set("_fillColor",e)}else this._fillColor=r&&Object(h.b)(r)||0
const s=e.miterLimit
if(Object(m.f)(s)){const e=(e,t,i)=>Object(m.d)(s(e,t,i))
this._dynamicPropertyMap.set("_miterLimitCosine",e)}else this._miterLimitCosine=Object(m.d)(s)
if(Object(c.l)(e.effects)){const t=e.effects
Object(m.f)(t)?this._dynamicPropertyMap.set("_effects",t):this._effects=t}this._scaleFactor=e.scaleFactor||1,this._isDashed=null!=e.dashTemplate
const o=e.colorLocked?d.j:0,a=e.scaleDash?d.k:0,l=e.sampleAlphaOnly?d.i:0
this.tessellationProperties._bitset=o|a|l,this._materialKey=e.materialKey,this._initializeTessellator(!0)}static fromCIMLine(e,t){const[i,n]=Object(m.e)(e.scaleInfo,t)
return new ue(e,i,n)}bindFeature(e,t,i){const n=e.readLegacyFeature()
this._dynamicPropertyMap.forEach((e,r)=>{this[r]=e(n,t,i)}),this._halfWidth*=this._scaleFactor
const r=this._materialCache,s=(0,this._cimLineLayer.materialHash)(n,t,i),o=r.get(s)
let a=null
if(o&&Object(le.a)(o.spriteMosaicItem)&&(a=o.spriteMosaicItem),a){this._hasPattern=!0
const{rect:e,width:t,height:i}=a,n=e.x+d.G,r=e.y+d.G,s=n+t,o=r+i
this.tessellationProperties._tl=Object(_.a)(n,r),this.tessellationProperties._br=Object(_.a)(s,o)}else this._hasPattern=!1,this.tessellationProperties._tl=0,this.tessellationProperties._br=0
this.tessellationProperties._fillColor=this._fillColor,this.tessellationProperties._halfWidth=this._halfWidth,this.tessellationProperties.offset=0,this.tessellationProperties._halfReferenceWidth=this.tessellationProperties._halfWidth
const c=l.c.load(this._materialKey)
a&&(c.sdf=a.sdf,c.pattern=!0,c.textureBinding=a.textureBinding),this._materialKey=c.data}}var he=i(1192),de=i(1173),fe=i(1584)
const _e=Object(de.c)(),me=Object(he.a)()
class pe extends(Object(fe.a)(ae)){constructor(e,t,i){super(e),this._cimMarkerLayer=e,this._minMaxZoom=Object(_.a)(Math.round(t*d.A),Math.round(i*d.A))
const n=e.color
if(Object(m.f)(n)){const e=(e,t,i)=>Object(h.b)(n(e,t,i))
this._dynamicPropertyMap.set("_fillColor",e)}else this._fillColor=Object(h.b)(n)
const r=e.outlineColor
if(Object(m.f)(r)){const e=(e,t,i)=>Object(h.b)(r(e,t,i))
this._dynamicPropertyMap.set("_outlineColor",e)}else this._outlineColor=Object(h.b)(r)
const s=e.size
if(Object(m.f)(s)){const e=(e,t,i)=>Object(u.h)(s(e,t,i))
this._dynamicPropertyMap.set("_size",e)}else this._size=Object(u.h)(s)||0
const o=e.scaleX
Object(m.f)(o)?this._dynamicPropertyMap.set("_scaleX",o):this._scaleX=o
const a=e.offsetX
if(Object(m.f)(a)){const e=(e,t,i)=>Object(u.h)(a(e,t,i))
this._dynamicPropertyMap.set("xOffset",e)}else this.xOffset=Object(u.h)(a)||0
const l=e.offsetY
if(Object(m.f)(l)){const e=(e,t,i)=>Object(u.h)(l(e,t,i))
this._dynamicPropertyMap.set("yOffset",e)}else this.yOffset=Object(u.h)(l)||0
const f=e.outlineWidth
if(Object(m.f)(f)){const e=(e,t,i)=>Object(u.h)(f(e,t,i))
this._dynamicPropertyMap.set("_outlineWidth",e)}else this._outlineWidth=Object(u.h)(f)||0
const p=e.rotation
if(Object(m.f)(p)?this._dynamicPropertyMap.set("_angle",p):this._angle=p||0,Object(c.l)(e.effects)){const t=e.effects
Object(m.f)(t)?this._dynamicPropertyMap.set("_effects",t):this._effects=t}if(Object(c.l)(e.markerPlacement)){const t=e.markerPlacement
Object(m.f)(t)?this._dynamicPropertyMap.set("_markerPlacement",t):this._markerPlacement=t}this._scaleFactor=Object(c.v)(e.scaleFactor,1),this._bitSet=(e.alignment===X.a.MAP?1:0)|(e.colorLocked?1:0)<<1|(e.scaleSymbolsProportionally?1:0)<<3,this._materialKey=e.materialKey}static fromCIMMarker(e,t){const[i,n]=Object(m.e)(e.scaleInfo,t)
return new pe(e,i,n)}bindFeature(e,t,i){const s=e.readLegacyFeature(),o=e.getObjectId()
this._dynamicPropertyMap.forEach((e,n)=>{this[n]=e(s,t,i)})
const a=this._cimMarkerLayer.materialHash,c="function"==typeof a?a(s,t,i,o):a,h=this._materialCache.get(c)
if(!h||!Object(le.a)(h.spriteMosaicItem)||!h.spriteMosaicItem)return void r.a.getLogger("esri.views.2d.engine.webgl.WGLDynamicMarkerTemplate").error(new n.a("mapview-cim","Encountered an error when binding feature"))
const f=h.spriteMosaicItem,m=this._cimMarkerLayer.sizeRatio,p=f.width/f.height*this._scaleX,g=this._cimMarkerLayer.rotateClockwise?this._angle:-this._angle
let y=this._size,x=y*p
const v=this.xOffset,b=this.yOffset
this.xOffset*=this._scaleFactor,this.yOffset*=this._scaleFactor
const O=this._cimMarkerLayer.scaleSymbolsProportionally&&this._cimMarkerLayer.frameHeight?this._size/Object(u.h)(this._cimMarkerLayer.frameHeight):1,S=this._outlineWidth*O,T=Object(u.h)(this._cimMarkerLayer.referenceSize)
let C=0,w=0
const M=this._cimMarkerLayer.anchorPoint
M&&(this._cimMarkerLayer.isAbsoluteAnchorPoint?this._size&&(C=Object(u.h)(M.x)/(this._size*p),w=Object(u.h)(M.y)/this._size):(C=M.x,w=M.y)),this._anchorX=C,this._anchorY=w,this._sizeOutlineWidth=Object(_.b)(Math.round(Math.min(Math.sqrt(128*x),255)),Math.round(Math.min(Math.sqrt(128*y),255)),Math.round(Math.min(Math.sqrt(128*S),255)),Math.round(Math.min(Math.sqrt(128*T),255))),this.angle=g
const I=Math.round(64*m)
this._bitestAndDistRatio=Object(_.a)(this._bitSet,I)
const P=f.rect.x+d.G,E=f.rect.y+d.G,L=P+f.width,A=E+f.height
this._texUpperLeft=Object(_.a)(P,E),this._texUpperRight=Object(_.a)(L,E),this._texBottomLeft=Object(_.a)(P,A),this._texBottomRight=Object(_.a)(L,A)
const j=l.d.load(this._materialKey)
j.sdf=f.sdf,j.pattern=!0,j.textureBinding=f.textureBinding,this._materialKey=j.data,x*=m,y*=m,x*=this._scaleFactor,y*=this._scaleFactor,x*=f.rect.width/f.width,y*=f.rect.height/f.height,this._computedWidth=x,this._computedHeight=y,this._applyTransformation(me,_e),this.xOffset=v,this.yOffset=b}}var ge=i(1287),ye=i(1580),xe=i(1573)
class ve extends(Object(ye.a)(ae)){constructor(e,t,i){super(e),this._horizontalAlignment="center",this._verticalAlignment="middle",this._textToGlyphs=new Map,this._minMaxZoom=Object(_.a)(Math.round(t*d.A),Math.round(i*d.A))
const n=e.scaleFactor||1
this._cimTextLayer=e
const r=e.color
if(Object(m.f)(r)){const e=(e,t,i)=>Object(h.b)(r(e,t,i))
this._dynamicPropertyMap.set("_color",e)}else this._color=Object(h.b)(r)
const s=e.outlineColor
if(Object(m.f)(s)){const e=(e,t,i)=>Object(h.b)(s(e,t,i))
this._dynamicPropertyMap.set("_haloColor",e)}else this._haloColor=Object(h.b)(s)
let o,a,f
if(Object(m.f)(e.size)||(o=Math.min(Math.round(Object(u.h)(e.size*e.sizeRatio)),127)),this._dynamicPropertyMap.set("_size",(t,i,n)=>Object(m.f)(e.size)?Math.min(Math.round(Object(u.h)(e.size(t,i,n)*e.sizeRatio)),127):o),Object(m.f)(e.outlineSize)){const t=(t,i,n)=>Math.min(Math.floor(5*Object(u.h)(e.outlineSize(t,i,n)*e.sizeRatio)),127)
this._dynamicPropertyMap.set("_haloSize",t)}else this._haloSize=Math.min(Math.floor(5*Object(u.h)(e.outlineSize*e.sizeRatio)),127)
if(Object(m.f)(e.offsetX)||(a=Math.round(Object(u.h)(e.offsetX*e.sizeRatio))),this._dynamicPropertyMap.set("_xOffset",(t,i,n)=>Object(m.f)(e.offsetX)?Math.round(Object(u.h)(e.offsetX(t,i,n)*e.sizeRatio)):a),Object(m.f)(e.offsetY)||(f=Math.round(Object(u.h)(e.offsetY*e.sizeRatio))),this._dynamicPropertyMap.set("_yOffset",(t,i,n)=>Object(m.f)(e.offsetY)?Math.round(Object(u.h)(e.offsetY(t,i,n)*e.sizeRatio)):f),Object(m.f)(e.angle)?this._dynamicPropertyMap.set("_angle",e.angle):this._angle=e.angle,Object(m.f)(e.horizontalAlignment)?this._dynamicPropertyMap.set("_horizontalAlignment",e.horizontalAlignment):this._horizontalAlignment=e.horizontalAlignment,Object(m.f)(e.verticalAlignment)?this._dynamicPropertyMap.set("_verticalAlignment",e.verticalAlignment):this._verticalAlignment=e.verticalAlignment,Object(c.l)(e.effects)){const t=e.effects
Object(m.f)(t)?this._dynamicPropertyMap.set("_effects",t):this._effects=t}if(Object(c.l)(e.markerPlacement)){const t=e.markerPlacement
Object(m.f)(t)?this._dynamicPropertyMap.set("_markerPlacement",t):this._textPlacement=t}Object(m.f)(e.text)?this._dynamicPropertyMap.set("_text",e.text):this._text=e.text,this._backgroundColor=e.backgroundColor&&Object(h.b)(e.backgroundColor),this._borderLineColor=e.borderLineColor&&Object(h.b)(e.borderLineColor),this._borderLineSize=e.borderLineWidth,this._scaleFactor=n
const p=Math.min(Math.round(Object(u.h)(e.referenceSize*e.sizeRatio)),127)
this._referenceSize=Math.round(Math.sqrt(256*p)),this._materialKey=e.materialKey
const g=l.f.load(this._materialKey)
g.sdf=!0,this._bitset=(e.alignment===X.a.MAP?1:0)|(e.colorLocked?1:0)<<1,this._materialKey=g.data,this._decoration="none",this._lineHeight=1,this._lineWidth=512,this._isCIM=!0}static fromCIMText(e,t){const[i,n]=Object(m.e)(e.scaleInfo,t)
return new ve(e,i,n)}async analyze(e,t,i,n){const r=t.readLegacyFeature(),s=function(e,t,i,n){var r
return"string"==typeof e.text?e.text:"function"==typeof e.text&&null!=(r=e.text(t,i,n))?r:""}(this._cimTextLayer,r,i,n),o=await super.analyze(e,t,i,n,Object(xe.a)(s))
return o&&o.glyphMosaicItems&&this._textToGlyphs.set(s,o.glyphMosaicItems),o}bindFeature(e,t,i){var n
const r=e.readLegacyFeature()
if(this._dynamicPropertyMap.forEach((e,n)=>{this[n]=e(r,t,i)}),!this._text||0===this._text.length)return void(this._shapingInfo=null)
this._size*=this._scaleFactor,this._scale=this._size/d.v,this._xOffset*=this._scaleFactor,this._yOffset*=this._scaleFactor,this._xAlignD=Object(ge.e)(Object(c.v)(this._horizontalAlignment,"center")),this._yAlignD=Object(ge.g)(Object(c.v)(this._verticalAlignment,"baseline"))
const s=null!=(n=this._textToGlyphs.get(this._text))?n:[]
this.bindTextInfo(s,!1)}}class be extends(ne(te.a)){constructor(e,t,i,n,r,s,o,a,c,u,h,f,m,p,g,y){super(),this._effects=p
const x=l.a.load(e)
t&&(x.sdf=t.sdf,x.pattern=!0,x.textureBinding=t.textureBinding),this.fillColor=i,this.tl=n,this.br=r,this.aux21=Object(_.a)(s,o),this.aux22=Object(_.a)(a,c),this.aux3=Object(_.b)(u,h,f,0),this._bitset=m,this._minMaxZoom=Object(_.a)(Math.round(g*d.A),Math.round(y*d.A)),this._materialKey=x.data}static fromCIMFill(e,t,i){const n=e.color,r=n&&Object(h.b)(n)||0,s=e.materialKey,[o,a]=Object(m.e)(e.scaleInfo,i),l=(e.colorLocked?d.j:0)|(e.applyRandomOffset?d.h:0)|(e.sampleAlphaOnly?d.i:0)|(e.hasUnresolvedReplacementColor?d.g:0)
if(!t)return new be(s,null,r,0,0,0,0,0,0,0,0,0,l,e.effects,o,a)
const{rect:c,width:p,height:g}=t,y=e.scaleX||1,x=c.x+d.G,v=c.y+d.G,b=x+p,O=v+g,S=Object(u.h)(e.height)
let T=y*S
"CIMHatchFill"===e.cim.type&&(T*=p/g)
let C=Math.round(S)
C<=0&&(C=O-v)
let w=Math.round(T)
w<=0&&(w=b-x)
const M=Object(u.h)(e.offsetX||0),I=Object(u.h)(-e.offsetY||0),P=Object(_.a)(x,v),E=Object(_.a)(b,O)
return new be(s,t,r,P,E,w,C,M,I,128,128,Object(f.a)(e.angle),l,e.effects,o,a)}static fromSimpleFill(e,t,i=!1){const{color:n}=e,r=n&&"esriSFSNull"!==e.style&&Object(h.c)(n)||0,s=i?d.j:0,o=e.materialKey
let a
if(t){const{rect:e,width:i,height:n,pixelRatio:l}=t,c=e.x+d.G,u=e.y+d.G,h=c+i,f=u+n,p=Object(_.a)(c,u),g=Object(_.a)(h,f)
a=new be(o,t,r,p,g,i/l,n/l,0,0,128,128,0,s,null,m.b,m.a)}else a=new be(o,null,r,0,0,0,0,0,0,0,0,0,s,null,m.b,m.a)
return a._maybeAddLineTemplate(e),a}static fromPictureFill(e,t,i=!1){const n=d.E,{rect:r,width:s,height:o}=t,a=r.x+d.G,l=r.y+d.G,c=a+s,h=l+o,f=Object(_.a)(a,l),p=Object(_.a)(c,h),g=Math.round(Object(u.h)(e.width)),y=Math.round(Object(u.h)(e.height)),x=Object(u.h)(e.xoffset),v=Object(u.h)(-e.yoffset),b=e.materialKey,O=i?d.j:0,S=new be(b,t,n,f,p,g,y,x,v,128*e.xscale,128*e.yscale,0,O,null,m.b,m.a)
return S._maybeAddLineTemplate(e),S}}var Oe=i(1583),Se=i(1579)
class Te{constructor(){this._resolver=null}isHeld(){return!!this._resolver}async acquire(){this._resolver?(await this._resolver.promise,await this.acquire()):this._resolver=Object(s.e)()}release(){const e=this._resolver
this._resolver=null,null==e||e.resolve()}}var Ce=i(1356)
const we=r.a.getLogger("esri.views.2d.engine.webgl.mesh.templates.WGLTemplateStore"),Me={sortKey:null,templates:new Array},Ie={isOutline:!1,placement:null,symbologyType:a.e.DEFAULT,vvFlags:0},Pe={...o.g,hash:JSON.stringify(o.g),materialKey:Object(l.g)(a.d.MARKER,Ie)},Ee={...o.i,hash:JSON.stringify(o.i),materialKey:Object(l.g)(a.d.LINE,Ie)},Le={...o.h,hash:JSON.stringify(o.h),materialKey:Object(l.g)(a.d.FILL,Ie)}
function Ae(e,t){const i=e.length
return e.push(null),t.then(t=>e[i]=t),e}function je(e){return null!=e&&!!(1&e)}class Re{constructor(e,t){this._idCounter=1,this._templateIdCounter=1,this._idToTemplateGroup=new Map,this._symbolToTemplate=new Map,this._fetchQueue=[],this._idToResolver=new Map,this._cimTemplateCache=new Map,this._cimAnalyses=[],this._lock=new Te,this._fetchResource=e,this._tileInfo=t}get _markerError(){return this._errorTemplates.marker[0]}get _fillError(){return this._errorTemplates.fill[0]}get _lineError(){return this._errorTemplates.line[0]}get _textError(){return this._errorTemplates.line[0]}createTemplateGroup(e,t,i=null){this._initErrorTemplates()
const n=e.hash,r=this._symbolToTemplate.get(n)
if(null!=r)return r
const s=new Array,o={sortKey:i,templates:s}
t&&this._createMeshTemplates(s,t,!0),this._createMeshTemplates(s,e,!1)
const a=this._createGroupId("expanded-cim"===e.type&&De(e))
return this._idToTemplateGroup.set(a,o),this._symbolToTemplate.set(n,a),a}getTemplateGroup(e){var t
return null!=(t=this._idToTemplateGroup.get(e))?t:Me}getDynamicTemplateGroup(e){return this._idToTemplateGroup.has(e)?(je(e)||we.error("mapview-template-store",`Id ${e} does not refer to a dynamic template`),this._idToTemplateGroup.get(e)):Me}getMosaicItem(e,t){const i=this._createTemplateId(),n=new Promise(e=>this._idToResolver.set(i,e))
return this._fetchQueue.push({symbol:e,id:i,glyphIds:t}),n}finalize(e){return this._fetchQueue.length||this._lock.isHeld()?async function(e,t,i){try{await e.acquire(),await t(i),e.release()}catch(t){throw e.release(),t}}(this._lock,this._fetchAllQueuedResources.bind(this),e):Promise.resolve()}_initErrorTemplates(){this._errorTemplates||(this._errorTemplates={fill:this._createMeshTemplates([],Le,!1),marker:this._createMeshTemplates([],Pe,!1),line:this._createMeshTemplates([],Ee,!1)})}_fetchAllQueuedResources(e){if(!this._fetchQueue.length)return Promise.resolve()
const t=this._fetchQueue,i=this._cimAnalyses
return this._fetchQueue=[],this._cimAnalyses=[],Promise.all(i).then(()=>this._fetchResource(t,e).then(e=>{for(const{id:t,mosaicItem:i}of e)this._idToResolver.get(t)(i),this._idToResolver.delete(t)})).catch(e=>{Object(s.j)(e)?this._fetchQueue=this._fetchQueue.concat(t):"worker:port-closed"===e.name||we.error(new n.a("mapview-template-store","Unable to fetch requested texture resources",e))})}_createGroupId(e){return this._idCounter++<<1|(e?1:0)}_createTemplateId(){return this._templateIdCounter++}async _createSMS(e){const{spriteMosaicItem:t}=await this.getMosaicItem(e)
return Object(le.a)(t,we)?Oe.a.fromSimpleMarker(e,t):this._markerError}async _createPMS(e){const{spriteMosaicItem:t}=await this.getMosaicItem(e)
return Object(le.a)(t,we)?Oe.a.fromPictureMarker(e,t):this._markerError}async _createSFS(e,t){const{spriteMosaicItem:i}=await this.getMosaicItem(e)
return Object(le.a)(i,we)?be.fromSimpleFill(e,i,t):this._fillError}async _createPFS(e,t){const{spriteMosaicItem:i}=await this.getMosaicItem(e)
return Object(le.a)(i,we)?be.fromPictureFill(e,i,t):this._fillError}async _createSLS(e,t){const{spriteMosaicItem:i}=await this.getMosaicItem(e)
return Object(le.a)(i,we)?ie.fromSimpleLine(e,i):this._lineError}async _createLMS(e){const{spriteMosaicItem:t}=await this.getMosaicItem(e)
return Object(le.a)(t,we)?Oe.a.fromLineSymbolMarker(e,t):this._markerError}async _createTS(e){const{glyphMosaicItems:t}=await this.getMosaicItem(e)
return Se.a.fromText(e,null!=t?t:[])}async _createCIMText(e){const{glyphMosaicItems:t}=await this.getMosaicItem(Object(Ce.a)(e),Object(xe.a)(e.text))
return Object(le.a)(t,we)?Se.a.fromCIMText(e,t,this._tileInfo):this._textError}async _createCIMFill(e){const{spriteMosaicItem:t}=await this.getMosaicItem(Object(Ce.a)(e))
return Object(le.a)(t,we)?be.fromCIMFill(e,t,this._tileInfo):this._fillError}async _createCIMLine(e){const{spriteMosaicItem:t}=await this.getMosaicItem(Object(Ce.a)(e))
return Object(le.a)(t,we)?ie.fromCIMLine(e,t,this._tileInfo):this._lineError}async _createCIMMarker(e){const{spriteMosaicItem:t}=await this.getMosaicItem(Object(Ce.a)(e))
return Object(le.a)(t,we)?Oe.a.fromCIMMarker(e,t,this._tileInfo):this._markerError}async _createCIM(e){const t=e.templateHash
let i=this._cimTemplateCache.get(t)
if(null!=i)return i
switch(e.type){case"marker":i=await this._createCIMMarker(e)
break
case"line":i=await this._createCIMLine(e)
break
case"fill":i=await this._createCIMFill(e)
break
case"text":i=await this._createCIMText(e)}return this._cimTemplateCache.set(t,i),i}async _createDynamicCIM(e){const t=e.templateHash
let i=this._cimTemplateCache.get(t)
if(null!=i)return i
switch(e.type){case"marker":i=pe.fromCIMMarker(e,this._tileInfo)
break
case"line":i=ue.fromCIMLine(e,this._tileInfo)
break
case"fill":i=ce.fromCIMFill(e,this._tileInfo)
break
case"text":i=ve.fromCIMText(e,this._tileInfo)}return this._cimTemplateCache.set(t,i),i}_createPrimitiveMeshTemplates(e,t,i){switch(t.type){case"esriSMS":return Ae(e,this._createSMS(t))
case"esriPMS":return Ae(e,this._createPMS(t))
case"esriSFS":return Ae(e,this._createSFS(t,i))
case"line-marker":return Ae(e,this._createLMS(t))
case"esriPFS":return Ae(e,this._createPFS(t,i))
case"esriSLS":return Ae(e,this._createSLS(t,!1))
case"esriTS":return Ae(e,this._createTS(t))
default:return we.error("Unable to create mesh template for unknown symbol type {: $ }{symbol.type}"),e}}_createMeshTemplates(e,t,i){if(t.type.includes("3d"))return we.error("3D symbols are not supported with MapView"),e
if("expanded-cim"===t.type){for(const i of t.layers)"function"==typeof i.materialHash?Ae(e,this._createDynamicCIM(i)):Ae(e,this._createCIM(i))
return e}if("composite-symbol"===t.type){for(const n of t.layers)this._createPrimitiveMeshTemplates(e,n,i)
return e}return"cim"===t.type||"label"===t.type||"web-style"===t.type?e:this._createPrimitiveMeshTemplates(e,t,i)}}const De=e=>{if(!e.layers)return!1
for(const t of e.layers)if("function"==typeof t.materialHash)return!0
return!1}},1589:function(e,t,i){"use strict"
i.d(t,"a",(function(){return A})),i.d(t,"b",(function(){return E})),i.d(t,"c",(function(){return L})),i.d(t,"d",(function(){return I})),i.d(t,"e",(function(){return D})),i.d(t,"f",(function(){return F})),i.d(t,"g",(function(){return z}))
var n=i(1304),r=i(1535),s=i(234),o=i(233),a=i(23),l=i(1049),c=i(980),u=i(996),h=i(1079),d=i(1142),f=i(983),_=i(1326)
class m{applyColorSubstituition(e,t){if(!t)return e
this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas"))
const{width:i,height:n}=e,r=this._rasterizationCanvas,s=r.getContext("2d")
e!==r&&(r.width=i,r.height=n,s.drawImage(e,0,0,i,n))
const o=s.getImageData(0,0,i,n).data
if(t)for(const e of t)if(e&&e.oldColor&&4===e.oldColor.length&&e.newColor&&4===e.newColor.length){const[t,i,n,r]=e.oldColor,[s,a,l,c]=e.newColor
if(t===s&&i===a&&n===l&&r===c)continue
for(let e=0;e<o.length;e+=4)t===o[e]&&i===o[e+1]&&n===o[e+2]&&r===o[e+3]&&(o[e]=s,o[e+1]=a,o[e+2]=l,o[e+3]=c)}const a=new ImageData(o,i,n)
return s.putImageData(a,0,0),r}tintImageData(e,t){if(!t||t.length<4)return e
this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas"))
const{width:i,height:n}=e,r=this._rasterizationCanvas,s=r.getContext("2d")
e!==r&&(r.width=i,r.height=n,s.drawImage(e,0,0,i,n))
const o=s.getImageData(0,0,i,n),a=new Uint8Array(o.data),l=[t[0]/255,t[1]/255,t[2]/255,t[3]/255]
for(let e=0;e<a.length;e+=4)a[e+0]*=l[0],a[e+1]*=l[1],a[e+2]*=l[2],a[e+3]*=l[3]
const c=new ImageData(new Uint8ClampedArray(a.buffer),i,n)
return s.putImageData(c,0,0),r}}var p=i(1484),g=i(1325),y=i(1030)
function x(e){const t=e.getFrame(0)
if(t instanceof HTMLImageElement||t instanceof HTMLCanvasElement)return t
const i=document.createElement("canvas")
i.width=e.width,i.height=e.height
const n=i.getContext("2d")
return t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0),i}var v=i(1422),b=i(1727),O=i(1230),S=i(1287),T=i(1e3),C=i(1373)
const w=Math.PI/180,M=o.a.getLogger("esri.symbols.cim.CIMSymbolDrawHelper")
class I{constructor(e){this._t=e}static createIdentity(){return new I([1,0,0,0,1,0])}clone(){const e=this._t
return new I(e.slice())}transform(e){const t=this._t
return[t[0]*e[0]+t[1]*e[1]+t[2],t[3]*e[0]+t[4]*e[1]+t[5]]}static createScale(e,t){return new I([e,0,0,0,t,0])}scale(e,t){const i=this._t
return i[0]*=e,i[1]*=e,i[2]*=e,i[3]*=t,i[4]*=t,i[5]*=t,this}scaleRatio(){return Math.sqrt(this._t[0]*this._t[0]+this._t[1]*this._t[1])}static createTranslate(e,t){return new I([0,0,e,0,0,t])}translate(e,t){const i=this._t
return i[2]+=e,i[5]+=t,this}static createRotate(e){const t=Math.cos(e),i=Math.sin(e)
return new I([t,-i,0,i,t,0])}rotate(e){return I.multiply(this,I.createRotate(e),this)}angle(){const e=this._t[0],t=this._t[3],i=Math.sqrt(e*e+t*t)
return[e/i,t/i]}static multiply(e,t,i){const n=e._t,r=t._t,s=n[0]*r[0]+n[3]*r[1],o=n[1]*r[0]+n[4]*r[1],a=n[2]*r[0]+n[5]*r[1]+r[2],l=n[0]*r[3]+n[3]*r[4],c=n[1]*r[3]+n[4]*r[4],u=n[2]*r[3]+n[5]*r[4]+r[5],h=i._t
return h[0]=s,h[1]=o,h[2]=a,h[3]=l,h[4]=c,h[5]=u,i}invert(){const e=this._t
let t=e[0]*e[4]-e[1]*e[3]
if(0===t)return new I([0,0,0,0,0,0])
t=1/t
const i=(e[1]*e[5]-e[2]*e[4])*t,n=(e[2]*e[3]-e[0]*e[5])*t,r=e[4]*t,s=-e[1]*t,o=-e[3]*t,a=e[0]*t
return new I([r,s,i,o,a,n])}}class P{constructor(e,t){this._resourceManager=e,this._transfos=[],this._sizeTransfos=[],this._geomUnitsPerPoint=1,this._placementPool=new l.a(g.a,void 0,void 0,100),this._earlyReturn=!1,this._mapRotation=0,this._transfos.push(t||I.createIdentity()),this._sizeTransfos.push(t?t.scaleRatio():1)}setTransform(e,t){this._transfos=[e||I.createIdentity()],this._sizeTransfos=[t||(e?e.scaleRatio():1)]}setGeomUnitsPerPoint(e){this._geomUnitsPerPoint=e}transformPt(e){return this._transfos[this._transfos.length-1].transform(e)}transformSize(e){return e*this._sizeTransfos[this._sizeTransfos.length-1]}reverseTransformPt(e){return this._transfos[this._transfos.length-1].invert().transform(e)}reverseTransformSize(e){return e/this._sizeTransfos[this._sizeTransfos.length-1]}getTransformAngle(){return this._transfos[this._transfos.length-1].angle()}geomUnitsPerPoint(){return this.isEmbedded()?1:this._geomUnitsPerPoint}isEmbedded(){return this._transfos.length>1}back(){return this._transfos[this._transfos.length-1]}push(e,t){const i=t?e.scaleRatio():1
I.multiply(e,this.back(),e),this._transfos.push(e),this._sizeTransfos.push(this._sizeTransfos[this._sizeTransfos.length-1]*i)}pop(){this._transfos.splice(-1,1),this._sizeTransfos.splice(-1,1)}drawSymbol(e,t,i){if(e)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":this.drawMultiLayerSymbol(e,t)
break
case"CIMTextSymbol":this.drawTextSymbol(e,t,i)}}drawMultiLayerSymbol(e,t){if(!e||!t)return
const i=e.symbolLayers
if(!i)return
const n=e.effects
if(n&&n.length>0){const e=this.executeEffects(n,t)
if(e){let t=e.next()
for(;t;)this.drawSymbolLayers(i,t),t=e.next()}}else this.drawSymbolLayers(i,t)}executeEffects(e,t){const i=this._resourceManager.geometryEngine
let n=new _.a(t)
for(const t of e){const e=Object(p.a)(t)
e&&(n=e.execute(n,t,this.geomUnitsPerPoint(),null,i))}return n}drawSymbolLayers(e,t){let i=e.length
for(;i--;){const n=e[i]
if(!n||!1===n.enable)continue
const r=n.effects
if(r&&r.length>0){const e=this.executeEffects(r,t)
if(e){let t=null
for(;(t=e.next())&&(this.drawSymbolLayer(n,t),!this._earlyReturn););}}else this.drawSymbolLayer(n,t)
if(this._earlyReturn)return}}drawSymbolLayer(e,t){switch(e.type){case"CIMSolidFill":this.drawSolidFill(t,e.color)
break
case"CIMHatchFill":this.drawHatchFill(t,e)
break
case"CIMPictureFill":this.drawPictureFill(t,e)
break
case"CIMGradientFill":this.drawGradientFill(t,e)
break
case"CIMSolidStroke":this.drawSolidStroke(t,e.color,e.width,e.capStyle,e.joinStyle,e.miterLimit)
break
case"CIMPictureStroke":this.drawPictureStroke(t,e)
break
case"CIMGradientStroke":this.drawGradientStroke(t,e)
break
case"CIMCharacterMarker":case"CIMPictureMarker":case"CIMVectorMarker":this.drawMarkerLayer(e,t)}}drawHatchFill(e,t){const i=this._buildHatchPolyline(t,e,this.geomUnitsPerPoint())
i&&(this.pushClipPath(e),this.drawMultiLayerSymbol(t.lineSymbol,i),this.popClipPath())}drawPictureFill(e,t){}drawGradientFill(e,t){}drawPictureStroke(e,t){}drawGradientStroke(e,t){}drawMarkerLayer(e,t){const i=e.markerPlacement
if(i){const n=Object(p.b)(i)
if(n){const r="CIMMarkerPlacementInsidePolygon"===i.type||"CIMMarkerPlacementPolygonCenter"===i.type&&i.clipAtBoundary
r&&this.pushClipPath(t)
const s=n.execute(t,i,this.geomUnitsPerPoint(),null,this._resourceManager.geometryEngine)
if(s){let t=null
for(;(t=s.next())&&(this.drawMarker(e,t),!this._earlyReturn););}r&&this.popClipPath()}}else{const i=this._placementPool.acquire()
if(Object(f.f)(t))i.tx=t.x,i.ty=t.y,this.drawMarker(e,i)
else if(Object(f.g)(t)){const n=Object(d.b)(t)
n&&([i.tx,i.ty]=n,this.drawMarker(e,i))}else for(const n of t.points)if(i.tx=n[0],i.ty=n[1],this.drawMarker(e,i),this._earlyReturn)break
this._placementPool.release(i)}}drawMarker(e,t){switch(e.type){case"CIMCharacterMarker":case"CIMPictureMarker":this.drawPictureMarker(e,t)
break
case"CIMVectorMarker":this.drawVectorMarker(e,t)}}drawPictureMarker(e,t){var i,n,r,s,o
if(!e)return
const l=this._resourceManager.getResource(e.url),c=null!=(i=e.size)?i:10
if(Object(a.k)(l)||c<=0)return
const u=l.width,h=l.height
if(!u||!h)return
const d=u/h,f=null!=(n=e.scaleX)?n:1,_=I.createIdentity(),m=e.anchorPoint
if(m){let t=m.x,i=m.y
"Absolute"!==e.anchorPointUnits&&(t*=c*d*f,i*=c),_.translate(-t,-i)}let p=null!=(r=e.rotation)?r:0
e.rotateClockwise&&(p=-p),this._mapRotation&&(p+=this._mapRotation),p&&_.rotate(p*w)
let g=null!=(s=e.offsetX)?s:0,y=null!=(o=e.offsetY)?o:0
if(g||y){if(this._mapRotation){const e=w*this._mapRotation,t=Math.cos(e),i=Math.sin(e),n=g*i+y*t
g=g*t-y*i,y=n}_.translate(g,y)}const x=this.geomUnitsPerPoint()
1!==x&&_.scale(x,x)
const v=t.getAngle()
v&&_.rotate(v),_.translate(t.tx,t.ty),this.push(_,!1),this.drawImage(e,c),this.pop()}drawVectorMarker(e,t){var i,n,r,s
if(!e)return
const o=e.markerGraphics
if(!o)return
const a=null!=(i=e.size)?i:10,l=e.frame,c=l?l.ymax-l.ymin:0,u=a&&c?a/c:1,h=I.createIdentity()
l&&h.translate(.5*-(l.xmax+l.xmin),.5*-(l.ymax+l.ymin))
const d=e.anchorPoint
if(d){let t=d.x,i=d.y
"Absolute"!==e.anchorPointUnits?l&&(t*=l.xmax-l.xmin,i*=l.ymax-l.ymin):(t/=u,i/=u),h.translate(-t,-i)}1!==u&&h.scale(u,u)
let f=null!=(n=e.rotation)?n:0
e.rotateClockwise&&(f=-f),this._mapRotation&&(f+=this._mapRotation),f&&h.rotate(f*w)
let _=null!=(r=e.offsetX)?r:0,m=null!=(s=e.offsetY)?s:0
if(_||m){if(this._mapRotation){const e=w*this._mapRotation,t=Math.cos(e),i=Math.sin(e),n=_*i+m*t
_=_*t-m*i,m=n}h.translate(_,m)}const p=this.geomUnitsPerPoint()
1!==p&&h.scale(p,p)
const g=t.getAngle()
g&&h.rotate(g),h.translate(t.tx,t.ty),this.push(h,e.scaleSymbolsProportionally)
for(const e of o)if(e&&e.symbol&&e.geometry||M.error("Invalid marker graphic",e),this.drawSymbol(e.symbol,e.geometry,e.textString),this._earlyReturn)break
this.pop()}drawTextSymbol(e,t,i){var n,r,s,o
if(!e)return
if(!Object(f.f)(t))return
if((null!=(n=e.height)?n:10)<=0)return
const a=I.createIdentity()
let l=null!=(r=e.angle)?r:0
l=-l,l&&a.rotate(l*w)
const c=null!=(s=e.offsetX)?s:0,u=null!=(o=e.offsetY)?o:0;(c||u)&&a.translate(c,u)
const h=this.geomUnitsPerPoint()
1!==h&&a.scale(h,h),a.translate(t.x,t.y),this.push(a,!1),this.drawText(e,i),this.pop()}_buildHatchPolyline(e,t,i){let n=(void 0!==e.separation?e.separation:4)*i,r=void 0!==e.rotation?e.rotation:0
if(0===n)return null
n<0&&(n=-n)
let s=0
const o=.5*n
for(;s>o;)s-=n
for(;s<-o;)s+=n
const a=Object(u.m)()
Object(h.a)(a,t),a[0]-=o,a[1]-=o,a[2]+=o,a[3]+=o
const l=[[a[0],a[1]],[a[0],a[3]],[a[2],a[3]],[a[2],a[1]]]
for(;r>180;)r-=180
for(;r<0;)r+=180
const c=Math.cos(r*w),d=Math.sin(r*w),f=-n*d,_=n*c
let m,p,g,y
s=(void 0!==e.offsetX?e.offsetX*i:0)*d-(void 0!==e.offsetY?e.offsetY*i:0)*c,m=g=Number.MAX_VALUE,p=y=-Number.MAX_VALUE
for(const e of l){const t=e[0],i=e[1],n=c*t+d*i,r=-d*t+c*i
m=Math.min(m,n),g=Math.min(g,r),p=Math.max(p,n),y=Math.max(y,r)}g=Math.floor(g/n)*n
let x=c*m-d*g-f*s/n,v=d*m+c*g-_*s/n,b=c*p-d*g-f*s/n,O=d*p+c*g-_*s/n
const S=1+Math.round((y-g)/n),T=[]
for(let e=0;e<S;e++)x+=f,v+=_,b+=f,O+=_,T.push([[x,v],[b,O]])
return{paths:T}}}class E extends P{constructor(e,t){super(e,t),this.reset()}reset(){this._xmin=this._ymin=1/0,this._xmax=this._ymax=-1/0,this._clipCount=0}envelope(){return new v.a(this._xmin,this._ymin,this._xmax-this._xmin,this._ymax-this._ymin)}bounds(){return Object(u.u)(this._xmin,this._ymin,this._xmax,this._ymax)}drawSolidFill(e){if(e&&!(this._clipCount>0))if(Object(f.g)(e))this._processPath(e.rings,0)
else if(Object(f.h)(e))this._processPath(e.paths,0)
else if(Object(f.d)(e)){const t=R(e)
t&&this._processPath(t.rings,0)}else console.error("drawSolidFill Unexpected geometry type!")}drawSolidStroke(e,t,i){if(!e||this._clipCount>0)return
const n=.5*this.transformSize(null!=i?i:0)
if(Object(f.g)(e))this._processPath(e.rings,n)
else if(Object(f.h)(e))this._processPath(e.paths,n)
else if(Object(f.d)(e)){const t=R(e)
t&&this._processPath(t.rings,n)}else console.error("drawSolidStroke unexpected geometry type!")}drawMarkerLayer(e,t){Object(f.g)(t)&&e.markerPlacement&&("CIMMarkerPlacementInsidePolygon"===e.markerPlacement.type||"CIMMarkerPlacementPolygonCenter"===e.markerPlacement.type&&e.markerPlacement.clipAtBoundary)?this._processPath(t.rings,0):super.drawMarkerLayer(e,t)}drawHatchFill(e,t){this.drawSolidFill(e)}drawPictureFill(e,t){this.drawSolidFill(e)}drawGradientFill(e,t){this.drawSolidFill(e)}drawPictureStroke(e,t){this.drawSolidStroke(e,null,t.width)}drawGradientStroke(e,t){this.drawSolidStroke(e,null,t.width)}pushClipPath(e){this.drawSolidFill(e),this._clipCount++}popClipPath(){this._clipCount--}drawImage(e,t){var i
const{url:n}=e,r=null!=(i=e.scaleX)?i:1
let s=r*t,o=t
const l=this._resourceManager.getResource(n)
!t&&Object(a.l)(l)&&(s=r*l.width,o=l.height),this._merge(this.transformPt([-s/2,-o/2]),0),this._merge(this.transformPt([-s/2,o/2]),0),this._merge(this.transformPt([s/2,-o/2]),0),this._merge(this.transformPt([s/2,o/2]),0)}drawText(e,t){if(!t||0===t.length)return
this._textRasterizer||(this._textRasterizer=new b.a)
const i=k(e),[n,r]=this._textRasterizer.computeTextSize(t,i)
let s=0
switch(e.horizontalAlignment){case"Left":s=n/2
break
case"Right":s=-n/2}let o=0
switch(e.verticalAlignment){case"Bottom":o=r/2
break
case"Top":o=-r/2
break
case"Baseline":o=r/6}this._merge(this.transformPt([-n/2+s,-r/2+o]),0),this._merge(this.transformPt([-n/2+s,r/2+o]),0),this._merge(this.transformPt([n/2+s,-r/2+o]),0),this._merge(this.transformPt([n/2+s,r/2+o]),0)}_processPath(e,t){if(e)for(const i of e){const e=i?i.length:0
if(e>1){this._merge(this.transformPt(i[0]),t)
for(let n=1;n<e;n++)this._merge(this.transformPt(i[n]),t)}}}_merge(e,t){e[0]-t<this._xmin&&(this._xmin=e[0]-t),e[0]+t>this._xmax&&(this._xmax=e[0]+t),e[1]-t<this._ymin&&(this._ymin=e[1]-t),e[1]+t>this._ymax&&(this._ymax=e[1]+t)}}class L extends P{constructor(){super(...arguments),this._searchPoint=[0,0],this._searchDistPoint=0,this._textInfo=null}hitTest(e,t,i,n,r,s){const o=s*Object(c.h)(1)
this.setTransform(),this.setGeomUnitsPerPoint(o),this._searchPoint=[(e[0]+e[2])/2,(e[1]+e[3])/2],this._searchDistPoint=(e[2]-e[0])/2/o,this._textInfo=n
const a=t&&("CIMPointSymbol"===t.type&&"Map"!==t.angleAlignment||"CIMTextSymbol"===t.type)
return this._mapRotation=a?r:0,this._earlyReturn=!1,this.drawSymbol(t,i),this._earlyReturn}drawSolidFill(e,t){this._hitTestFill(e)}drawHatchFill(e,t){this._hitTestFill(e)}drawPictureFill(e,t){this._hitTestFill(e)}drawGradientFill(e,t){this._hitTestFill(e)}drawSolidStroke(e,t,i,n,r,s){this._hitTestStroke(e,i)}drawPictureStroke(e,t){this._hitTestStroke(e,t.width)}drawGradientStroke(e,t){this._hitTestStroke(e,t.width)}drawMarkerLayer(e,t){e.markerPlacement&&("CIMMarkerPlacementInsidePolygon"===e.markerPlacement.type||"CIMMarkerPlacementPolygonCenter"===e.markerPlacement.type&&e.markerPlacement.clipAtBoundary)?this._hitTestFill(t):super.drawMarkerLayer(e,t)}pushClipPath(e){}popClipPath(){}drawImage(e,t){var i
const{url:n}=e,r=null!=(i=e.scaleX)?i:1,s=this._resourceManager.getResource(n)
if(Object(a.k)(s)||0===s.height||0===t)return
const o=t*this.geomUnitsPerPoint(),l=o*r*(s.width/s.height),c=this.reverseTransformPt(this._searchPoint),u=this._searchDistPoint
Math.abs(c[0])<l/2+u&&Math.abs(c[1])<o/2+u&&(this._earlyReturn=!0)}drawText(e,t){var i,r,s
const o=this._textInfo
if(!o)return
const a=o.get(e)
if(!a)return
const{text:l,mosaicItem:c}=a
if(null==c||null==(i=c.glyphMosaicItems)||!i.length)return
const u=null!=(r=e.height)?r:10,{lineGapType:h,lineGap:d}=e,f=h?F(h,null!=d?d:0,u):0,_=Object(n.a)(l)[1],m=c.glyphMosaicItems,p="CIMBackgroundCallout"===(null==(s=e.callout)?void 0:s.type),g=Object(C.a)(m,_,{scale:u/T.v,angle:0,xOffset:0,yOffset:0,hAlign:D(e.horizontalAlignment),vAlign:z(e.verticalAlignment),maxLineWidth:512,lineHeight:T.y*Math.max(.25,Math.min(f||1,4)),decoration:e.font.decoration||"none",isCIM:!0,hasBackground:p}),y=this.reverseTransformPt(this._searchPoint),x=y[0],v=y[1]
for(const e of g.glyphs)if(x>e.xTopLeft&&x<e.xBottomRight&&v>-e.yBottomRight&&v<-e.yTopLeft){this._earlyReturn=!0
break}}_hitTestFill(e){let t=null
if(Object(f.d)(e)){const i=e
t=[[[i.xmin,i.ymin],[i.xmin,i.ymax],[i.xmax,i.ymax],[i.xmax,i.ymin],[i.xmin,i.ymin]]]}else if(Object(f.g)(e))t=e.rings
else{if(!Object(f.h)(e))return
t=e.paths}const i=this.reverseTransformPt(this._searchPoint)
if(this._pointInPolygon(i,t)&&(this._earlyReturn=!0),!this._earlyReturn){const e=this.reverseTransformSize(this._searchDistPoint)*this.geomUnitsPerPoint()
this._nearLine(i,t,e)&&(this._earlyReturn=!0)}}_hitTestStroke(e,t){let i=null
if(Object(f.d)(e)){const t=e
i=[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]}else if(Object(f.g)(e))i=e.rings
else{if(!Object(f.h)(e))return
i=e.paths}const n=this.reverseTransformPt(this._searchPoint),r=(null!=t?t:0)*this.geomUnitsPerPoint(),s=this.reverseTransformSize(this._searchDistPoint)*this.geomUnitsPerPoint()
this._nearLine(n,i,r/2+s)&&(this._earlyReturn=!0)}_pointInPolygon(e,t){let i=0
for(const n of t){const t=n.length
for(let r=1;r<t;r++){const t=n[r-1],s=n[r]
t[1]>e[1]!=s[1]>e[1]&&((s[0]-t[0])*(e[1]-t[1])-(s[1]-t[1])*(e[0]-t[0])>0?i++:i--)}}return 0!==i}_nearLine(e,t,i){for(const n of t){const t=n.length
for(let r=1;r<t;r++){const t=n[r-1],s=n[r]
let o=(s[0]-t[0])*(s[0]-t[0])+(s[1]-t[1])*(s[1]-t[1])
if(0===o)continue
o=Math.sqrt(o)
const a=((s[0]-t[0])*(e[1]-t[1])-(s[1]-t[1])*(e[0]-t[0]))/o
if(Math.abs(a)<i){const n=((s[0]-t[0])*(e[0]-t[0])+(s[1]-t[1])*(e[1]-t[1]))/o
if(n>-i&&n<o+i)return!0}}}return!1}}class A extends P{constructor(e,t,i,n){super(t,i),this._applyAdditionalRenderProps=n,this._colorSubstitutionHelper=new m,this._ctx=e}drawSolidFill(e,t){var i
if(!e)return
if(Object(f.g)(e))this._buildPath(e.rings,!0)
else if(Object(f.h)(e))this._buildPath(e.paths,!0)
else if(Object(f.d)(e))this._buildPath(R(e).rings,!0)
else{if(!Object(f.e)(e))return
console.log("CanvasDrawHelper.drawSolidFill - No implementation!")}const n=this._ctx
n.fillStyle="string"==typeof t?t:"rgba("+Math.round(t[0])+","+Math.round(t[1])+","+Math.round(t[2])+","+(null!=(i=t[3])?i:255)/255+")",n.fill("evenodd")}drawSolidStroke(e,t,i,n,r,s){var o
if(!e||!t||0===i)return
if(Object(f.g)(e))this._buildPath(e.rings,!0)
else if(Object(f.h)(e))this._buildPath(e.paths,!1)
else{if(!Object(f.d)(e))return void console.log("CanvasDrawHelper.drawSolidStroke isn't implemented!")
this._buildPath(R(e).rings,!0)}const a=this._ctx
a.strokeStyle="string"==typeof t?t:"rgba("+Math.round(t[0])+","+Math.round(t[1])+","+Math.round(t[2])+","+(null!=(o=t[3])?o:255)/255+")",a.lineWidth=Math.max(this.transformSize(i),.5),this._setCapStyle(n),this._setJoinStyle(r),a.miterLimit=s,a.stroke()}pushClipPath(e){if(this._ctx.save(),Object(f.g)(e))this._buildPath(e.rings,!0)
else if(Object(f.h)(e))this._buildPath(e.paths,!0)
else{if(!Object(f.d)(e))return
this._buildPath(R(e).rings,!0)}this._ctx.clip("evenodd")}popClipPath(){this._ctx.restore()}drawImage(e,t){var i
const{colorSubstitutions:n,url:r,tintColor:s}=e,o=null!=(i=e.scaleX)?i:1,l=this._resourceManager.getResource(r)
if(Object(a.k)(l))return
let c=t*(l.width/l.height),u=t
t||(c=l.width,u=l.height)
const h=Object(O.z)(r)||"src"in l&&Object(O.z)(l.src)
let d="getFrame"in l?x(l):l
n&&(d=this._colorSubstitutionHelper.applyColorSubstituition(d,n)),this._applyAdditionalRenderProps&&!h&&s&&(d=this._colorSubstitutionHelper.tintImageData(d,s))
const f=this.transformPt([0,0]),[_,m]=this.getTransformAngle(),p=this.transformSize(1),g=this._ctx
g.save(),g.setTransform({m11:o*p*_,m12:o*p*m,m21:-p*m,m22:p*_,m41:f[0],m42:f[1]}),g.drawImage(d,-c/2,-u/2,c,u),g.restore()}drawText(e,t){if(!t||0===t.length)return
this._textRasterizer||(this._textRasterizer=new b.a)
const i=k(e)
i.size*=this.transformSize(Object(c.i)(1))
const n=this._textRasterizer.rasterizeText(t,i)
if(!n)return
const{size:r,anchorX:s,anchorY:o,canvas:a}=n,l=r[0]*(s+.5),u=r[1]*(o-.5),h=this._ctx,d=this.transformPt([0,0]),[f,_]=this.getTransformAngle()
h.save(),h.setTransform({m11:1*f,m12:1*_,m21:-1*_,m22:1*f,m41:d[0]-1*l,m42:d[1]+1*u}),h.drawImage(a,0,0),h.restore()}drawPictureFill(e,t){if(!e)return
let{colorSubstitutions:i,height:n,offsetX:r,offsetY:s,rotation:o,scaleX:l,tintColor:c,url:u}=t
const h=this._resourceManager.getResource(u)
if(Object(a.k)(h))return
if(Object(f.g)(e))this._buildPath(e.rings,!0)
else if(Object(f.h)(e))this._buildPath(e.paths,!0)
else if(Object(f.d)(e))this._buildPath(R(e).rings,!0)
else{if(!Object(f.e)(e))return
console.log("CanvasDrawHelper.drawPictureFill - No implementation!")}const d=this._ctx,_=Object(O.z)(u)||"src"in h&&Object(O.z)(h.src)
let m,p="getFrame"in h?x(h):h
if(i&&(p=this._colorSubstitutionHelper.applyColorSubstituition(p,i)),this._applyAdditionalRenderProps){_||c&&(p=this._colorSubstitutionHelper.tintImageData(p,c)),m=d.createPattern(p,"repeat")
const e=this.transformSize(1)
o||(o=0),r?r*=e:r=0,s?s*=e:s=0,n&&(n*=e)
const t=n?n/h.height:1,i=l&&n?l*n/h.width:1
if(0!==o||1!==t||1!==i||0!==r||0!==s){const e=new DOMMatrix
e.rotateSelf(0,0,-o).translateSelf(r,s).scaleSelf(i,t,1),m.setTransform(e)}}else m=d.createPattern(p,"repeat")
d.save(),d.fillStyle=m,d.fill("evenodd"),d.restore()}drawPictureStroke(e,t){if(!e)return
let{colorSubstitutions:i,capStyle:n,joinStyle:r,miterLimit:o,tintColor:l,url:u,width:h}=t
const d=this._resourceManager.getResource(u)
if(Object(a.k)(d))return
let _
if(Object(f.g)(e))_=e.rings
else if(Object(f.h)(e))_=e.paths
else{if(!Object(f.d)(e))return Object(f.e)(e)?void console.log("CanvasDrawHelper.drawPictureStroke - No implementation!"):void 0
_=R(e).rings}h||(h=d.width)
const m=Object(O.z)(u)||"src"in d&&Object(O.z)(d.src)
let p="getFrame"in d?x(d):d
i&&(p=this._colorSubstitutionHelper.applyColorSubstituition(p,i)),this._applyAdditionalRenderProps&&(m||l&&(p=this._colorSubstitutionHelper.tintImageData(p,l)))
const g=Math.max(this.transformSize(Object(c.h)(h)),.5),y=g/p.width,v=this._ctx,b=v.createPattern(p,"repeat-y")
let S,T
v.save(),this._setCapStyle(n),this._setJoinStyle(r),void 0!==o&&(v.miterLimit=o),v.lineWidth=g
for(let e of _)if(e=Object(s.a)(e),N(e),e&&!(e.length<=1)){S=this.transformPt(e[0])
for(let t=1;t<e.length;t++){T=this.transformPt(e[t])
const i=j(S,T),n=new DOMMatrix
n.translateSelf(0,S[1]-g/2).scaleSelf(y,y,1).rotateSelf(0,0,90-i),b.setTransform(n),v.strokeStyle=b,v.beginPath(),v.moveTo(S[0],S[1]),v.lineTo(T[0],T[1]),v.stroke(),S=T}}v.restore()}_buildPath(e,t){const i=this._ctx
if(i.beginPath(),e)for(const n of e){const e=n?n.length:0
if(e>1){let r=this.transformPt(n[0])
i.moveTo(r[0],r[1])
for(let t=1;t<e;t++)r=this.transformPt(n[t]),i.lineTo(r[0],r[1])
t&&i.closePath()}}}_setCapStyle(e){switch(e){case y.q.Butt:this._ctx.lineCap="butt"
break
case y.q.Round:this._ctx.lineCap="round"
break
case y.q.Square:this._ctx.lineCap="square"}}_setJoinStyle(e){switch(e){case y.s.Bevel:this._ctx.lineJoin="bevel"
break
case y.s.Round:this._ctx.lineJoin="round"
break
case y.s.Miter:this._ctx.lineJoin="miter"}}}function j(e,t){const i=t[0]-e[0],n=t[1]-e[1]
return 180/Math.PI*Math.atan2(n,i)}const R=e=>e?{spatialReference:e.spatialReference,rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]}:null,D=e=>{switch(e){case"Left":return S.a.Left
case"Right":return S.a.Right
case"Center":return S.a.Center
case"Justify":return M.warnOnce("Horizontal alignment 'justify' is not implemented. Falling back to 'center'."),S.a.Center}},z=e=>{switch(e){case"Top":return S.b.Top
case"Center":return S.b.Center
case"Bottom":return S.b.Bottom
case"Baseline":return S.b.Baseline}},F=(e,t,i)=>{switch(e){case"ExtraLeading":return 1+t/i
case"Multiple":return t
case"Exact":return t/i}}
function k(e,t=1){const i=Object(O.i)(e),n=Object(O.j)(e.fontStyleName),s=Object(r.a)(e.fontFamilyName),{weight:o,style:a}=n,l=t*(e.height||5),c=Object(O.k)(e.horizontalAlignment),u=Object(O.l)(e.verticalAlignment),h=Object(O.m)(e),d=Object(O.p)(e.haloSymbol),f=d?t*(0|e.haloSize):0
return{color:h,size:l,horizontalAlignment:c,verticalAlignment:u,font:{family:s,style:Object(O.n)(a),weight:Object(O.o)(o),decoration:i},halo:{size:f||0,color:d,style:a},pixelRatio:1,premultiplyColors:!0}}function N(e){let t,i,n,r,s,o=e[0],a=1
for(;a<e.length;)t=e[a][0]-o[0],i=e[a][1]-o[1],r=0!==t?i/t:Math.PI/2,void 0!==n&&r-n<=1e-4?(e.splice(a-1,1),o=s):(s=o,o=e[a],a++),n=r}},1594:function(e,t,i){"use strict"
i.d(t,"a",(function(){return _})),i.d(t,"b",(function(){return m})),i.d(t,"c",(function(){return c})),i.d(t,"d",(function(){return u}))
var n=i(446),r=i(235),s=i(233),o=i(980),a=i(1333)
const l=s.a.getLogger("esri.views.2d.layers.features.support.rendererUtils"),c=e=>{if(!("visualVariables"in e)||!e.visualVariables||!e.visualVariables.length)return e
const t=e.clone(),i=t.visualVariables.map(e=>h(e)?d(e):e)
return t.visualVariables=i,t}
function u(e){return e.map(e=>h(e)?d(e.clone()):e)}function h(e){return("size"===e.type||"color"===e.type||"opacity"===e.type)&&null!=e.stops}function d(e){var t
return e.stops=function(e,t){return t.length<=8?t:(l.warn(`Found ${t.length} Visual Variable stops, but MapView only supports 8. Displayed stops will be simplified.`),t.length>16?function(e,t){const[i,...n]=t,r=n.pop(),s=n[0].value,a=n[n.length-1].value,l=(a-s)/6,c=[]
for(let i=s;i<a;i+=l){let r=0
for(;i>=n[r].value;)r++
const s=n[r],a=t[r-1],l=i-a.value,u=s.value===a.value?1:l/(s.value-a.value)
if("color"===e){const e=n[r],s=t[r-1],o=e.color.clone()
o.r=f(s.color.r,o.r,u),o.g=f(s.color.g,o.g,u),o.b=f(s.color.b,o.b,u),o.a=f(s.color.a,o.a,u),c.push({value:i,color:o,label:e.label})}else if("size"===e){const e=n[r],s=t[r-1],a=Object(o.k)(e.size),l=f(Object(o.k)(s.size),a,u)
c.push({value:i,size:l,label:e.label})}else{const e=n[r],s=f(t[r-1].opacity,e.opacity,u)
c.push({value:i,opacity:s,label:e.label})}}return[i,...c,r]}(e,t):function(e){const[t,...i]=e,n=i.pop()
for(;i.length>6;){let e=0,t=0
for(let n=1;n<i.length;n++){const r=i[n-1],s=i[n],o=Math.abs(s.value-r.value)
o>t&&(t=o,e=n)}i.splice(e,1)}return[t,...i,n]}(t))}(e.type,null!=(t=e.stops)?t:[]),e}function f(e,t,i){return(1-i)*e+i*t}function _(){if(Object(r.a)("heatmap-force-raster"))return"raster"
const{supportsTextureFloat:e,supportsTextureHalfFloat:t,supportsColorBufferFloat:i,supportsColorBufferFloatBlend:n,supportsColorBufferHalfFloat:s}=Object(a.a)("2d")
return e&&i&&n||t&&s?"symbol":Object(r.a)("heatmap-allow-raster-fallback")?"raster":"none"}function m(e){if(!e)return!0
switch(e.type){case"dot-density":if(!Object(a.a)("2d").supportsTextureFloat)return l.error(new n.a("webgl-missing-extension","Missing WebGL extension OES_Texture_Float which is required for DotDensity")),!1
break
case"heatmap":{const e=_()
if("none"===e||"raster"===e&&!Object(r.a)("heatmap-force-raster")){const t=Object(a.a)("2d"),i=["supportsTextureFloat","supportsTextureHalfFloat","supportsColorBufferFloat","supportsColorBufferFloatBlend","supportsColorBufferHalfFloat"].filter(e=>!t[e]).join(", ")
if("none"===e)return l.errorOnce(new n.a("webgl-missing-extension",`Missing WebGL${t.type} requirements for Heatmap: ${i}`)),!1
"raster"===e&&l.warnOnce(`Missing WebGL${t.type} requirements for accelerated Heatmap: ${i}. Feature support may be limited.`)}break}}return!0}},1614:function(e,t,i){"use strict"
i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return s})),i.d(t,"c",(function(){return n})),i.d(t,"d",(function(){return o}))
const n=!0,r=32,s=1.5,o=200},1617:function(e,t,i){"use strict"
i.d(t,"a",(function(){return u})),i.d(t,"b",(function(){return l}))
var n=i(1475),r=i(1184),s=i(1135),o=i(1200),a=i(1283)
function l(e){if(!e)return null
if(e instanceof s.a&&(e=c(e.toJSON())),e instanceof o.Zone)return e
if("unknown"===e.toLowerCase())return n.d.instance
if("system"===e.toLowerCase())return o.SystemZone.instance
if("utc"===e.toLowerCase())return o.FixedOffsetZone.utcInstance
if(/^[\+\-]?[0-9]{1,2}([:][0-9]{2})?$/.test(e)){const t=o.FixedOffsetZone.parseSpecifier("UTC"+(e.startsWith("+")||e.startsWith("-")?"":"+")+e)
if(t)return t}const t=o.IANAZone.create(e)
if(!t.isValid)throw new n.b(n.c.TimeZoneNotRecognised)
return t}function c(e){return null!=e&&e.timeZoneIANA?null==e?void 0:e.timeZoneIANA:null!=e&&e.timeZone?Object(a.a)(e,""):""}class u{constructor(){this.dateTimeReferenceMetaData=null,this._fieldTimeZoneIndex={},this._fieldIndex=null,this._ianaPreferred=null,this._ianaTimeInfo=null,this._ianaEditFields=null,this._ianaLayerDateFields=null}static create(e,t){const i=new u
return i.dateTimeReferenceMetaData=t,i._fieldIndex=e instanceof r.a?e:new r.a(e),i}static createFromLayer(e){var t,i,n,r,s,o,a,l
if(!e)return null
if(!e.fieldsIndex)return!e.declaredClass&&e.fields?u.create(e.fields,e):null
const c=new u
return c._fieldIndex=e.fieldsIndex,c.dateTimeReferenceMetaData={timeInfo:null!=(t=null==e||null==(i=e.timeInfo)?void 0:i.toJSON())?t:null,editFieldsInfo:null!=(n=null==e||null==(r=e.editFieldsInfo)?void 0:r.toJSON())?n:null,dateFieldsTimeReference:null!=(s=null==e||null==(o=e.dateFieldsTimeReference)?void 0:o.toJSON())?s:null,preferredTimeReference:null!=(a=null==e||null==(l=e.preferredTimeReference)?void 0:l.toJSON())?a:null,datesInUnknownTimezone:!0===(null==e?void 0:e.datesInUnknownTimezone)},c}fieldTimeZone(e){var t,i,n,r,s,o,a,l,c,u,h,d,f,_,m,p,g,y,x,v,b,O,S
const T=null==(t=this._fieldIndex)?void 0:t.get(e)
if(!T)return null
if("date"!==T.type&&"esriFieldTypeDate"!==T.type)return null
const C=this._fieldTimeZoneIndex[T.name]
if(void 0!==C)return C
const w=[{field:null==(i=this.dateTimeReferenceMetaData)||null==(n=i.editFieldsInfo)?void 0:n.creationDateField,timeReference:null==(r=this.dateTimeReferenceMetaData)||null==(s=r.editFieldsInfo)?void 0:s.dateFieldsTimeReference,isunknown:!0===(null==(o=this.dateTimeReferenceMetaData)?void 0:o.datesInUnknownTimezone)},{field:null==(a=this.dateTimeReferenceMetaData)||null==(l=a.editFieldsInfo)?void 0:l.editDateField,timeReference:null==(c=this.dateTimeReferenceMetaData)||null==(u=c.editFieldsInfo)?void 0:u.dateFieldsTimeReference,isunknown:!0===(null==(h=this.dateTimeReferenceMetaData)?void 0:h.datesInUnknownTimezone)},{field:null==(d=this.dateTimeReferenceMetaData)||null==(f=d.timeInfo)?void 0:f.startTimeField,timeReference:null==(_=this.dateTimeReferenceMetaData)||null==(m=_.timeInfo)?void 0:m.timeReference,isunknown:!0===(null==(p=this.dateTimeReferenceMetaData)?void 0:p.datesInUnknownTimezone)},{field:null==(g=this.dateTimeReferenceMetaData)||null==(y=g.timeInfo)?void 0:y.endTimeField,timeReference:null==(x=this.dateTimeReferenceMetaData)||null==(v=x.timeInfo)?void 0:v.timeReference,isunknown:!0===(null==(b=this.dateTimeReferenceMetaData)?void 0:b.datesInUnknownTimezone)}]
for(const e of w)if(e.field===T.name){const t=this.convertToIANA(e.timeReference,e.isunknown)
return this._fieldTimeZoneIndex[T.name]=t,t}const M=this.convertToIANA(null==(O=this.dateTimeReferenceMetaData)?void 0:O.dateFieldsTimeReference,null==(S=this.dateTimeReferenceMetaData)?void 0:S.datesInUnknownTimezone)
return this._fieldTimeZoneIndex[T.name]=M,M}convertToIANA(e,t){return t?"unknown":c(e)}get layerPreferredTimeZone(){var e,t
if(null!==this._ianaPreferred)return this._ianaPreferred
this._ianaPreferred=""
const i=null==(e=this.dateTimeReferenceMetaData)?void 0:e.preferredTimeReference
return this._ianaPreferred=this.convertToIANA(i,!0===(null==(t=this.dateTimeReferenceMetaData)?void 0:t.datesInUnknownTimezone)),this._ianaPreferred}get layerTimeInfoTimeZone(){var e,t
if(null!==this._ianaTimeInfo)return this._ianaTimeInfo
this._ianaTimeInfo=""
const i=null==(e=this.dateTimeReferenceMetaData)||null==(t=e.timeInfo)?void 0:t.timeReference
return this._ianaTimeInfo=this.convertToIANA(i,!1),this._ianaTimeInfo}get layerEditFieldsTimeZone(){var e,t,i
if(null!==this._ianaEditFields)return this._ianaEditFields
this._ianaEditFields=""
const n=null==(e=this.dateTimeReferenceMetaData)||null==(t=e.editFieldsInfo)?void 0:t.dateFieldsTimeReference
return this._ianaEditFields=this.convertToIANA(n,null==(i=this.dateTimeReferenceMetaData)?void 0:i.datesInUnknownTimezone),this._ianaEditFields}get layerDateFieldsTimeZone(){var e,t
if(null!==this._ianaLayerDateFields)return this._ianaLayerDateFields
this._ianaLayerDateFields=""
const i=null==(e=this.dateTimeReferenceMetaData)?void 0:e.dateFieldsTimeReference
return this._ianaLayerDateFields=this.convertToIANA(i,!0===(null==(t=this.dateTimeReferenceMetaData)?void 0:t.datesInUnknownTimezone)),this._ianaLayerDateFields}}},1644:function(e,t,i){"use strict"
i.d(t,"a",(function(){return c}))
var n=i(235),r=i(1003),s=i(1516),o=i(1459),a=i(1460)
const l=(e,t)=>e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col
class c extends s.a{constructor(e){super(),this._tileInfoView=e}get requiresDedicatedFBO(){return!1}renderChildren(e){this.sortChildren(l),this.setStencilReference(e),super.renderChildren(e)}createRenderParams(e){const{state:t}=e,i=super.createRenderParams(e)
return i.requiredLevel=this._tileInfoView.getClosestInfoForScale(t.scale).level,i.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(t.scale),i}prepareRenderPasses(e){const t=super.prepareRenderPasses(e)
return t.push(e.registerRenderPass({name:"stencil",brushes:[a.a],drawPhase:r.c.DEBUG|r.c.MAP|r.c.HIGHLIGHT,target:()=>this.getStencilTarget()})),Object(n.a)("esri-tiles-debug")&&t.push(e.registerRenderPass({name:"tileInfo",brushes:[o.a],drawPhase:r.c.DEBUG,target:()=>this.children})),t}getStencilTarget(){return this.children}setStencilReference(e){let t=1
for(const e of this.children)e.stencilRef=t++}}},1659:function(e,t,i){"use strict"
i.d(t,"a",(function(){return a}))
var n=i(23),r=i(1057),s=i(1153),o=i(1559)
class a extends o.a{static fromFeatures(e,t){const{objectIdField:i,geometryType:n}=t,s=Object(r.c)([],e,n,!1,!1,i)
for(let t=0;t<s.length;t++)s[t].displayId=e[t].displayId
return a.fromOptimizedFeatures(s,t)}static fromFeatureSet(e,t){const i=Object(r.b)(e,t.objectIdField)
return a.fromOptimizedFeatureSet(i,t)}static fromOptimizedFeatureSet(e,t){const{features:i}=e,n=a.fromOptimizedFeatures(i,t)
n._exceededTransferLimit=e.exceededTransferLimit,n._transform=e.transform
for(const t of e.fields)"esriFieldTypeDate"===t.type&&n._dateFields.add(t.name)
return n}static fromOptimizedFeatures(e,t,i){const n=o.a.createInstance(),r=new a(n,e,t)
return r._transform=i,r}constructor(e,t,i){super(e,i),this._exceededTransferLimit=!1,this._featureIndex=-1,this._dateFields=new Set,this._geometryType=null==i?void 0:i.geometryType,this._features=t}get _current(){return this._features[this._featureIndex]}get geometryType(){return this._geometryType}get hasFeatures(){return!!this._features.length}get hasNext(){return this._featureIndex+1<this._features.length}get exceededTransferLimit(){return this._exceededTransferLimit}get hasZ(){return!1}get hasM(){return!1}removeIds(e){const t=new Set(e)
this._features=this._features.filter(e=>!(e.objectId&&t.has(e.objectId)))}append(e){for(const t of e)this._features.push(t)}getSize(){return this._features.length}getCursor(){return this.copy()}getQuantizationTransform(){return this._transform}getAttributeHash(){let e=""
for(const t in this._current.attributes)e+=this._current.attributes[t]
return e}getIndex(){return this._featureIndex}setIndex(e){this._featureIndex=e}getObjectId(){var e
return null==(e=this._current)?void 0:e.objectId}getDisplayId(){return this._current.displayId}setDisplayId(e){this._current.displayId=e}getGroupId(){return this._current.groupId}setGroupId(e){this._current.groupId=e}copy(){const e=new a(this.instance,this._features,this.fullSchema())
return this.copyInto(e),e}next(){for(;++this._featureIndex<this._features.length&&!this._getExists(););return this._featureIndex<this._features.length}readLegacyFeature(){return Object(r.j)(this._current,this.geometryType,this.hasZ,this.hasM)}readOptimizedFeature(){return this._current}readLegacyPointGeometry(){return this.readGeometry()?{x:this.getX(),y:this.getY()}:null}readLegacyGeometry(){const e=this.readGeometry()
return Object(r.l)(e,this.geometryType,this.hasZ,this.hasM)}readLegacyCentroid(){const e=this.readCentroid()
return Object(n.k)(e)?null:{x:e.coords[0]*this._sx+this._tx,y:e.coords[1]*this._sy+this._ty}}readGeometryArea(){return Object(s.c)(this._current)?Object(r.t)(this._current.geometry,2):0}readUnquantizedGeometry(){const e=this.readGeometry()
if("esriGeometryPoint"===this.geometryType||!e)return e
const t=e.clone()
return function({coords:e,lengths:t}){let i=0
for(const n of t){for(let t=1;t<n;t++)e[2*(i+t)]+=e[2*(i+t)-2],e[2*(i+t)+1]+=e[2*(i+t)-1]
i+=n}}(t),t}readHydratedGeometry(){const e=this._current.geometry
if(Object(n.k)(e))return null
const t=e.clone()
return Object(n.l)(this._transform)&&Object(r.A)(t,t,this.hasZ,this.hasM,this._transform),t}getXHydrated(){if(!Object(s.c)(this._current))return 0
const e=this._current.geometry.coords[0],t=this.getQuantizationTransform()
return Object(n.k)(t)?e:e*t.scale[0]+t.translate[0]}getYHydrated(){if(!Object(s.c)(this._current))return 0
const e=this._current.geometry.coords[1],t=this.getQuantizationTransform()
return Object(n.k)(t)?e:t.translate[1]-e*t.scale[1]}getX(){return Object(s.c)(this._current)?this._current.geometry.coords[0]*this._sx+this._tx:0}getY(){return Object(s.c)(this._current)?this._current.geometry.coords[1]*this._sy+this._ty:0}readGeometry(){if(!Object(s.c)(this._current)){if(Object(n.l)(this._current.centroid)){const[e,t]=this._current.centroid.coords
return this.createQuantizedExtrudedQuad(e,t)}return null}const e=this._current.geometry.clone()
if(e.isPoint)return e.coords[0]=e.coords[0]*this._sx+this._tx,e.coords[1]=e.coords[1]*this._sy+this._ty,e
let t=0
for(const i of e.lengths)e.coords[2*t]=e.coords[2*t]*this._sx+this._tx,e.coords[2*t+1]=e.coords[2*t+1]*this._sy+this._ty,t+=i
return e}readCentroid(){return Object(s.c)(this._current)?this._computeCentroid():this._current.centroid}hasField(e){return e in this._current.attributes||this.getFieldNames().map(e=>e.toLowerCase()).includes(e.toLowerCase())}getFieldNames(){return Object.keys(this._current.attributes)}_readAttribute(e,t){const i=this._current.attributes[e]
if(void 0!==i)return null!=i&&t&&this._dateFields.has(e)?new Date(i):i
const n=this.readAttributes(),r=null==e?void 0:e.toLocaleLowerCase().trim()
for(const e in n)if(e.toLocaleLowerCase().trim()===r){const i=this._current.attributes[e]
return null!=i&&t&&this._dateFields.has(e)?new Date(i):i}}copyInto(e){super.copyInto(e),e._featureIndex=this._featureIndex,e._transform=this._transform,e._dateFields=this._dateFields}_readAttributes(){return this._current.attributes}}},1664:function(e,t,i){"use strict"
i.d(t,"a",(function(){return F})),i.d(t,"b",(function(){return M})),i.d(t,"c",(function(){return C}))
var n=i(446),r=i(235),s=i(233),o=i(23),a=i(980),l=i(1198),c=i(1143),u=i(1285),h=i(1003),d=i(1022),f=i(1187),_=i(1512)
function m(e){if(!e)return h.f.NONE
let t=0
for(const i of e)if("size"===i.type){const e=Object(_.a)(i)
t|=e,"outline"===i.target&&(t|=e<<4)}else"color"===i.type?t|=h.f.COLOR:"opacity"===i.type?t|=h.f.OPACITY:"rotation"===i.type&&(t|=h.f.ROTATION)
return t}var p=i(1340),g=(i(1350),i(1422)),y=i(1e3)
function x(e,t){return Math.max(e,t)}i(1447),i(1356),y.f.metrics,new g.a(0,0,24,24)
var v=i(1594),b=i(1312),O=i(1558)
const S=s.a.getLogger("esri.views.2d.layers.features.schemaUtils"),T="ValidationError"
function C(e,t){let i=0,n=0,r=h.e.DEFAULT
if(Object(o.l)(e)){if(n=function(e,t){if(!("visualVariables"in e))return 0
if(!e.hasVisualVariables("size"))return 0
const i=e.getVisualVariablesForType("size")
if(!i[0])return 0
const n=i[0]
if(t&&"cluster_count"===n.field&&"cluster"===t.type)return t.clusterMaxSize
if("outline"===n.target)return 0
if("stops"===n.transformationType)return n.stops.map(e=>e.size).reduce(x,0)
if("clamped-linear"===n.transformationType){let e=-1/0,t=-1/0
return e="number"==typeof n.maxSize?n.maxSize:n.maxSize.stops.map(e=>e.size).reduce(x,0),t="number"==typeof n.minSize?n.minSize:n.minSize.stops.map(e=>e.size).reduce(x,0),Math.max(e,t)}return"real-world-size"===n.transformationType?30:void 0}(e,t),"visualVariables"in e&&(i=m(e.visualVariables||[]),"dot-density"===e.type&&(r=h.e.DOT_DENSITY)),"heatmap"===e.type&&(r=h.e.HEATMAP),"dictionary"===e.type)return{maxVVSize:n,vvFlags:i,symbologyType:h.e.DEFAULT}
if("pie-chart"===e.type)return{maxVVSize:n,vvFlags:i,symbologyType:h.e.PIE_CHART}
if(r!==h.e.DOT_DENSITY&&r!==h.e.HEATMAP){const t=e.getSymbols()
"backgroundFillSymbol"in e&&e.backgroundFillSymbol&&t.push(e.backgroundFillSymbol)
let i=!0,n=!0
for(const e of t)if("cim"===e.type&&(n=!1),"simple-fill"===e.type||"picture-fill"===e.type){const t=e.outline,r=t&&"none"!==t.style&&"solid"!==t.style,s="simple-fill"===e.type&&"none"!==e.style&&"solid"!==e.style
r&&(i=!1),("picture-fill"===e.type||s||r)&&(n=!1)}i?r=n?h.e.OUTLINE_FILL_SIMPLE:h.e.OUTLINE_FILL:n&&(r=h.e.SIMPLE)}}return{vvFlags:i,maxVVSize:n,symbologyType:r}}let w=null
function M(e){if(Object(r.a)("esri-2d-update-debug")){const t=I(e,!0)
console.debug("Created new schema",t),console.debug("Schema diff",Object(c.a)(w,t)),w=t}return I(e)}function I(e,t=!1){try{var i,r
const s=function(e,t=!1){const i=new Array
return i.push(function(e,t,i=!1){var r,s,a
const l={indexCount:0,fields:{}},c="featureReduction"in e&&null!=(r=e.featureReduction)?r:void 0,d=c?"aggregate":"feature"
if("sublayers"in e){const t={type:"subtype",subtypeField:e.subtypeField,renderers:{},symbologyType:h.e.DEFAULT},r={type:"subtype",mapping:{},target:"feature",subtypeField:e.subtypeField},s={type:"subtype",classes:{}},a={type:"symbol",target:"feature",aggregateFields:[],attributes:l,storage:r,mesh:{matcher:t,aggregateMatcher:null,labels:s,sortKey:null}},c=new Set
let u=0
for(const{renderer:a,subtypeCode:f,labelingInfo:_,labelsVisible:p}of e.sublayers){let e=0
"visualVariables"in a&&a.visualVariables&&(a.visualVariables.some(e=>"rotation"!==e.type)&&S.warnOnce("SubtypeGroupLayer currently only supports rotation visualVariables. All other visualVariable types will be ignored."),e=m(a.visualVariables.filter(e=>"size"!==e.type)))
const g={symbologyType:h.e.DEFAULT,vvFlags:e,maxVVSize:0},y=F(l,d,a,g,i),x=z(l,d,a),v=p&&_
if("dictionary"===y.type)throw new n.a(T,"Dictionary renderer is not supported in subtype layers")
if("subtype"===y.type)throw new n.a(T,"Nested subtype renderers is not supported")
if(Object(o.l)(x)&&"subtype"===x.type)throw new n.a(T,"Nested subtype storage is not supported")
if(Object(o.l)(x)&&Object(o.l)(x.attributeMapping))throw new n.a(T,"Non-visual-variable attributes are not supported in subtype layers")
if("heatmap"===y.type)throw new n.a(T,"Heatmaps are not supported in subtype layers")
if("pie-chart"===y.type)throw new n.a(T,"Pie-charts are not supported in subtype layers")
if(c.has(f))throw new n.a(T,"Subtype codes for sublayers must be unique")
c.add(f),t.renderers[f]=y,r.mapping[f]=x,v&&(s.classes[f]=v.map(e=>D(l,e,"feature",u++,g,i)))}return a}if("heatmap"===(null==(s=e.renderer)?void 0:s.type)&&"raster"===Object(v.a)()){const{radius:t,fieldOffset:i,field:n}=e.renderer
return{type:"heatmap",aggregateFields:[],attributes:l,target:d,storage:null,mesh:{radius:t,fieldOffset:i,field:j(l,{target:d,field:n,resultType:"numeric"}).field}}}const f=function(e,t,i){var r,s
const o="featureReduction"in t&&t.featureReduction
if(!o)return{fields:[],labels:[],matcher:void 0,rendererOverride:void 0}
const a=[]
let l=null,c=Object(O.b)(t.geometryType),h=[],d=null
if(o)switch(o.type){case"selection":return S.error(new n.a(T,"Mapview does not support `selection` reduction type",o)),{fields:[],labels:[],matcher:void 0,rendererOverride:void 0}
case"cluster":case"binning":if(a.push(...null!=(r=o.fields)?r:[]),"cluster"===o.type?c="esriGeometryPoint":"binning"===o.type&&(c="esriGeometryPolygon"),!o.renderer||null!=(s=o.renderer.authoringInfo)&&s.isAutoGenerated){if("cluster"===o.type){if(d=Object(b.b)(a,t.renderer,o,null,!0),o.symbol){const e=C(d,o)
l={type:"simple",symbol:Object(p.createSymbolSchema)(o.symbol,e,i),symbologyType:e.symbologyType}}h=o&&o.labelsVisible&&o.labelingInfo||[]}}else{if("cluster"===o.type){const{renderer:e}=Object(b.d)(o.renderer,o,null)
d=e}else d=o.renderer
const t=C(o.renderer,o)
l=F(e,"aggregate",o.renderer,t,i),h=o&&o.labelsVisible&&o.labelingInfo||[]}}return function(e,t){const i={mesh:!0,storage:!0}
for(const n of t){const{name:t,onStatisticField:r,onStatisticExpression:s,statisticType:o}=n
let a,l
const c="numeric",u="feature"
s?l=R(e,{type:"expression",target:u,valueExpression:s.expression,resultType:c}).fieldIndex:a=R(e,{type:"field",target:u,field:r,resultType:c}).field,R(e,{type:"statistic",target:"aggregate",name:t,context:i,inField:a,inFieldIndex:l,statisticType:o})}}(e,a),{labels:Object(u.b)(h,"binning"===o.type?"esriGeometryPolygon":c),matcher:l,fields:a,rendererOverride:d}}(l,e,i),_=Object(O.b)(e.geometryType),g=null!=(a=f.rendererOverride)?a:e.renderer,y=C(g,c),x=F(l,d,g,y,i),w=z(l,d,g),M=function(e,t,i,r){if(Object(o.l)(r))return null
if(Object(o.l)(t)&&t.length){t.length>1&&S.warn(`Layer rendering currently only supports ordering by 1 orderByInfo, but found ${t.length}. All but the first will be discarded`)
const i=t[0],r="ascending"===i.order?"asc":"desc"
return i.field?{field:i.field,order:r}:i.valueExpression?{fieldIndex:R(e,{type:"expression",target:"feature",valueExpression:i.valueExpression,resultType:"numeric"}).fieldIndex,order:r}:(S.error(new n.a(T,"Expected to find a field or valueExpression for OrderByInfo",i)),null)}return Object(o.l)(i)&&"unique-value"===i.type&&i.orderByClassesEnabled?{byRenderer:!0,order:"asc"}:null}(l,e.orderBy,e.renderer,c),I=e.labelsVisible&&e.labelingInfo||[],P=Object(u.b)(I,_)
let E=0
const L=[...P.map(e=>D(l,e,"feature",E++,y,i)),...f.labels.map(e=>D(l,e,"aggregate",E++,y,i))]
return{type:"symbol",target:d,attributes:l,aggregateFields:f.fields,storage:w,mesh:{matcher:x,labels:{type:"simple",classes:L},aggregateMatcher:f.matcher,sortKey:M}}}(e)),i}(e,t),c=function(e){var t
return"heatmap"===(null==(t=e.renderer)?void 0:t.type)&&"raster"===Object(v.a)()?{type:"heatmap"}:{type:"symbol"}}(e),d={}
s.map(t=>function(e,t,i){switch(i.target){case"feature":return void L(e,E(t),i)
case"aggregate":{if(!("featureReduction"in t))return
const r=t.featureReduction
switch(null==r?void 0:r.type){case"selection":throw new n.a(T,"Mapview does not support `selection` reduction type",r)
case"binning":return L(e,E(t),i),void function(e,t,i,n){var r
e.aggregate||(e.aggregate={name:"aggregate",type:"bin",filters:null,input:"feature",params:{fixedBinLevel:t.fixedBinLevel,fields:(null!=(r=t.fields)?r:[]).map(e=>({...e.toJSON(),type:A(e,i)}))},attributes:{}}),P(e.aggregate,n.attributes.fields)}(e,r,t.fields.map(e=>e.toJSON()),i)
case"cluster":return L(e,E(t),i),void function(e,t,i,n){var r,s
e.aggregate||(e.aggregate={name:"aggregate",type:"cluster",input:"feature",filters:null,attributes:{},params:{clusterRadius:Object(a.h)(t.clusterRadius/2),clusterPixelBuffer:64*Math.ceil(Object(a.h)(t.clusterMaxSize)/64),fields:null==(r=null!=(s=t.fields)?s:[])?void 0:r.map(e=>({...e.toJSON(),type:A(e,i)}))}}),P(e.aggregate,n.attributes.fields)}(e,r,t.fields.map(e=>e.toJSON()),i)}}}}(d,e,t))
const f=Object(o.l)(e.subtypeCode)?`${e.subtypeField} = ${e.subtypeCode}`:null
return{source:{definitionExpression:Object(o.u)(Object(l.b)(e.definitionExpression,f)),fields:e.fields.map(e=>e.toJSON()),gdbVersion:e.gdbVersion,historicMoment:null==(i=e.historicMoment)?void 0:i.getTime(),outFields:e.availableFields,pixelBuffer:e.pixelBuffer,spatialReference:e.spatialReference.toJSON(),timeExtent:null==(r=e.timeExtent)?void 0:r.toJSON(),customParameters:e.customParameters},attributes:{fields:{},indexCount:0},processors:s,tileRenderer:c,targets:d}}catch(e){if(e.fieldName===T)return S.error(e),null
throw e}}function P(e,t){for(const r in t){const s=t[r]
if(s.target!==e.name)continue
const o=e.attributes[r]
if(null!=o&&o.context){var i,n
const e=o.context
e.mesh=e.mesh||(null==(i=s.context)?void 0:i.mesh),e.storage=e.storage||(null==(n=s.context)?void 0:n.storage)}else e.attributes[r]=s}return e}function E(e){var t,i,n,r,s
return[null!=(t=null==(i=Object(o.u)(e.filter))?void 0:i.toJSON())?t:null,null!=(n=null==(r=Object(o.u)(null==(s=Object(o.u)(e.featureEffect))?void 0:s.filter))?void 0:r.toJSON())?n:null]}function L(e,t,i){return e.feature||(e.feature={name:"feature",input:"source",filters:t,attributes:{}}),P(e.feature,i.attributes.fields),e}function A(e,t){const{onStatisticExpression:i,onStatisticField:r,statisticType:s}=e
switch(s){case"min":case"max":case"avg":case"avg_angle":case"sum":case"count":return"esriFieldTypeDouble"
case"mode":{if(i){const{returnType:t}=i
return t?"string"===t?"esriFieldTypeString":"esriFieldTypeDouble":(S.error(new n.a(T,"Unable to infer type of aggregateField with onStatisticExpression. ReturnType is not defined",e)),"esriFieldTypeString")}const s=t.find(e=>e.name===r)
return s?s.type:(S.error(new n.a(T,"Unable to infer type of aggregateField with onStatisticExpression. ReturnType is not defined",e)),"esriFieldTypeString")}}}function j(e,t){return t.field?R(e,{...t,type:"field",field:t.field}):t.valueExpression?R(e,{...t,type:"expression",valueExpression:t.valueExpression}):{field:void 0,fieldIndex:void 0}}function R(e,t){switch(t.type){case"expression":{const i=t.valueExpression
if(!e.fields[i]){const n=e.indexCount++
e.fields[i]={...t,name:i,fieldIndex:n}}return{fieldIndex:e.fields[i].fieldIndex}}case"label-expression":{const i=JSON.stringify(t.label)
if(!e.fields[i]){const n=e.indexCount++
e.fields[i]={...t,name:i,fieldIndex:n}}return{fieldIndex:e.fields[i].fieldIndex}}case"field":{const i=t.field
return"aggregate"===t.target&&e.fields[i]||(e.fields[i]={...t,name:i}),{field:i}}case"statistic":return e.fields[t.name]={...t},{field:t.name}}}function D(e,t,i,n,r,s=!1){const o=R(e,{type:"label-expression",target:i,context:{mesh:!0},resultType:"string",label:{labelExpression:t.labelExpression,labelExpressionInfo:t.labelExpressionInfo?{expression:t.labelExpressionInfo.expression}:null,symbol:!!t.symbol,where:t.where}}),{fieldIndex:a}=o
return{...Object(p.createSymbolSchema)(t,r,s),fieldIndex:a,target:i,index:n}}function z(e,t,i){let n
switch(i.type){case"simple":case"class-breaks":case"unique-value":case"dictionary":n={visualVariables:!0,attributes:null}
break
default:n=Object(f.c)(i).getStorageSpec(i)}return function(e,t,i,n){if(Object(o.k)(i))return null
const{visualVariables:r,attributes:s}=i
let a=null
r&&"visualVariables"in n&&(a=function(e,t,i){if(!i||!i.length)return[]
const n={storage:!0},r="numeric"
return Object(v.d)(i).map(i=>{var s
const o=Object(d.p)(i.type),{field:a,fieldIndex:l}=j(e,{target:t,valueExpression:i.valueExpression,field:i.field,context:n,resultType:r})
switch(i.type){case"size":return"$view.scale"===i.valueExpression?null:{type:"size",binding:o,field:a,fieldIndex:l,normalizationField:j(e,{target:t,field:i.normalizationField,context:n,resultType:r}).field,valueRepresentation:null!=(s=i.valueRepresentation)?s:null}
case"color":return{type:"color",binding:o,field:a,fieldIndex:l,normalizationField:j(e,{target:t,field:i.normalizationField,context:n,resultType:r}).field}
case"opacity":return{type:"opacity",binding:o,field:a,fieldIndex:l,normalizationField:j(e,{target:t,field:i.normalizationField,context:n,resultType:r}).field}
case"rotation":return{type:"rotation",binding:o,field:a,fieldIndex:l}}}).filter(o.l)}(e,t,n.visualVariables))
const l=Object(o.l)(a)?4:0
let c=null
return Object(o.l)(s)&&(c=s.map((i,n)=>{const{field:r,fieldIndex:s}=j(e,{valueExpression:i.valueExpression,field:i.field,resultType:"numeric",target:t})
return{binding:n+l,field:r,fieldIndex:s}})),{type:"simple",target:t,attributeMapping:c,vvMapping:a}}(e,t,n,i)}function F(e,t,i,r,s=!1){const a=Object(o.v)(e,{indexCount:0,fields:{}})
switch(i.type){case"simple":case"dot-density":return function(e,t,i,n=!1){const r=t.getSymbols(),s=r.length?r[0]:null
return{type:"simple",symbol:Object(p.createSymbolSchema)(s,i,n),symbologyType:i.symbologyType}}(0,i,r,s)
case"class-breaks":return function(e,t,i,n,r=!1){const s=i.backgroundFillSymbol,{field:o,fieldIndex:a}=j(e,{target:t,field:i.field,valueExpression:i.valueExpression,resultType:"numeric",context:{mesh:!0,use:"renderer.field"}}),l=i.normalizationType,c="log"===l?"esriNormalizeByLog":"percent-of-total"===l?"esriNormalizeByPercentOfTotal":"field"===l?"esriNormalizeByField":null,u=i.classBreakInfos.map(e=>({symbol:Object(p.createSymbolSchema)(e.symbol,n,r),min:e.minValue,max:e.maxValue})).sort((e,t)=>e.min-t.min)
return{type:"interval",attributes:e.fields,field:o,fieldIndex:a,backgroundFillSymbol:Object(p.createSymbolSchema)(s,n,r),defaultSymbol:Object(p.createSymbolSchema)(i.defaultSymbol,n,r),intervals:u,normalizationField:i.normalizationField,normalizationTotal:i.normalizationTotal,normalizationType:c,isMaxInclusive:i.isMaxInclusive,symbologyType:n.symbologyType}}(a,t,i,r,s)
case"unique-value":return function(e,t,i,r,s=!1){var o
const a=[],l=i.backgroundFillSymbol,c={target:t,context:{mesh:!0},resultType:"string"}
if(i.field&&"string"!=typeof i.field)throw new n.a(T,"Expected renderer.field to be a string",i)
const{field:u,fieldIndex:h}=j(e,{...c,field:i.field,valueExpression:i.valueExpression})
for(const e of null!=(d=i.uniqueValueInfos)?d:[]){var d
a.push({value:""+e.value,symbol:Object(p.createSymbolSchema)(e.symbol,r,s)})}return{type:"map",attributes:e.fields,field:u,fieldIndex:h,field2:j(e,{...c,field:i.field2}).field,field3:j(e,{...c,field:i.field3}).field,fieldDelimiter:null!=(o=i.fieldDelimiter)?o:void 0,backgroundFillSymbol:Object(p.createSymbolSchema)(l,r),defaultSymbol:Object(p.createSymbolSchema)(i.defaultSymbol,r),map:a,symbologyType:r.symbologyType}}(a,t,i,r,s)
case"dictionary":return function(e,t,i,n=!1){return{type:"dictionary",config:t.config,fieldMap:t.fieldMap,scaleExpression:t.scaleExpression,url:t.url,symbolOptions:i,symbologyType:i.symbologyType}}(0,i,r,s)
case"heatmap":return function(e,t,i,n=!1){const r=t.getSymbols(),s=r.length?r[0]:null
return{type:"heatmap",symbol:Object(p.createSymbolSchema)(s,i,n),symbologyType:i.symbologyType}}(0,i,r,s)
case"pie-chart":return function(e,t,i,n=!1){const r=t.getSymbols(),s=r[0],o=r.length>1?r[1]:null
return{type:"pie-chart",markerSymbol:Object(p.createSymbolSchema)(s,i,n),fillSymbol:Object(p.createSymbolSchema)(o,i,n),symbologyType:i.symbologyType}}(0,i,r,s)}}},1671:function(e,t,i){"use strict"
i.d(t,"a",(function(){return h})),i.d(t,"b",(function(){return u}))
var n=i(23),r=i(996),s=i(1079),o=i(1066),a=i(983),l=i(1255),c=i(988)
function u(e){return d(e,!0)}function h(e){return d(e,!1)}function d(e,t){if(Object(n.k)(e))return null
const i=e.spatialReference,r=Object(c.e)(i),o="toJSON"in e?e.toJSON():e
if(!r)return o
const u=Object(c.p)(i)?102100:4326,h=l.a[u].maxX,d=l.a[u].minX
if(Object(a.f)(o))return f(o,h,d)
if(Object(a.e)(o))return o.points=o.points.map(e=>f(e,h,d)),o
if(Object(a.d)(o))return function(e,t){if(!t)return e
const i=function(e,t){const i=[],{ymin:n,ymax:r,xmin:s,xmax:o}=e,a=e.xmax-e.xmin,[l,c]=t.valid,{x:u,frameId:h}=_(e.xmin,t),{x:d,frameId:f}=_(e.xmax,t),p=u===d&&a>0
if(a>2*c){const e={xmin:s<o?u:d,ymin:n,xmax:c,ymax:r},t={xmin:l,ymin:n,xmax:s<o?d:u,ymax:r},a={xmin:0,ymin:n,xmax:c,ymax:r},_={xmin:l,ymin:n,xmax:0,ymax:r},p=[],g=[]
m(e,a)&&p.push(h),m(e,_)&&g.push(h),m(t,a)&&p.push(f),m(t,_)&&g.push(f)
for(let e=h+1;e<f;e++)p.push(e),g.push(e)
i.push(new y(e,[h]),new y(t,[f]),new y(a,p),new y(_,g))}else u>d||p?i.push(new y({xmin:u,ymin:n,xmax:c,ymax:r},[h]),new y({xmin:l,ymin:n,xmax:d,ymax:r},[f])):i.push(new y({xmin:u,ymin:n,xmax:d,ymax:r},[h]))
return i}(e,t).map(e=>e.extent)
return i.length<2?i[0]||e:i.length>2?(e.xmin=t.valid[0],e.xmax=t.valid[1],e):{rings:i.map(e=>[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]])}}(o,r)
if(Object(a.g)(o)||Object(a.h)(o)){const e=Object(s.a)(x,o),i={xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3]},n=Object(l.c)(i.xmin,d)*(2*h),r=0===n?o:Object(l.d)(o,n)
return i.xmin+=n,i.xmax+=n,i.xmax>h?g(r,h,t):i.xmin<d?g(r,d,t):r}return o}function f(e,t,i){if(Array.isArray(e)){const n=e[0]
if(n>t){const i=Object(l.c)(n,t)
e[0]=n+i*(-2*t)}else if(n<i){const t=Object(l.c)(n,i)
e[0]=n+t*(-2*i)}}else{const n=e.x
if(n>t){const i=Object(l.c)(n,t)
e.x+=i*(-2*t)}else if(n<i){const t=Object(l.c)(n,i)
e.x+=t*(-2*i)}}return e}function _(e,t){const[i,n]=t.valid,r=2*n
let s,o=0
return e>n?(s=Math.ceil(Math.abs(e-n)/r),e-=s*r,o=s):e<i&&(s=Math.ceil(Math.abs(e-i)/r),e+=s*r,o=-s),{x:e,frameId:o}}function m(e,t){const{xmin:i,ymin:n,xmax:r,ymax:s}=t
return p(e,i,n)&&p(e,i,s)&&p(e,r,s)&&p(e,r,n)}function p(e,t,i){return t>=e.xmin&&t<=e.xmax&&i>=e.ymin&&i<=e.ymax}function g(e,t,i=!0){const n=!Object(a.h)(e)
if(n&&Object(o.a)(e),i)return(new v).cut(e,t)
const r=n?e.rings:e.paths,s=n?4:2,l=r.length,c=-2*t
for(let e=0;e<l;e++){const t=r[e]
if(t&&t.length>=s){const e=[]
for(const i of t)e.push([i[0]+c,i[1]])
r.push(e)}}return n?e.rings=r:e.paths=r,e}class y{constructor(e,t){this.extent=e,this.frameIds=t}}const x=Object(r.m)()
class v{constructor(){this._linesIn=[],this._linesOut=[]}cut(e,t){let i
if(this._xCut=t,e.rings)this._closed=!0,i=e.rings,this._minPts=4
else{if(!e.paths)return null
this._closed=!1,i=e.paths,this._minPts=2}for(const e of i){if(!e||e.length<this._minPts)continue
let t=!0
for(const i of e)t?(this.moveTo(i),t=!1):this.lineTo(i)
this._closed&&this.close()}this._pushLineIn(),this._pushLineOut(),i=[]
for(const e of this._linesIn)e&&e.length>=this._minPts&&i.push(e)
const n=-2*this._xCut
for(const e of this._linesOut)if(e&&e.length>=this._minPts){for(const t of e)t[0]+=n
i.push(e)}return this._closed?e.rings=i:e.paths=i,e}moveTo(e){this._pushLineIn(),this._pushLineOut(),this._prevSide=this._side(e[0]),this._moveTo(e[0],e[1],this._prevSide),this._prevPt=e,this._firstPt=e}lineTo(e){const t=this._side(e[0])
if(t*this._prevSide==-1){const i=this._intersect(this._prevPt,e)
this._lineTo(this._xCut,i,0),this._prevSide=0,this._lineTo(e[0],e[1],t)}else this._lineTo(e[0],e[1],t)
this._prevSide=t,this._prevPt=e}close(){const e=this._firstPt,t=this._prevPt
e[0]===t[0]&&e[1]===t[1]||this.lineTo(e),this._checkClosingPt(this._lineIn),this._checkClosingPt(this._lineOut)}_moveTo(e,t,i){this._closed?(this._lineIn.push([i<=0?e:this._xCut,t]),this._lineOut.push([i>=0?e:this._xCut,t])):(i<=0&&this._lineIn.push([e,t]),i>=0&&this._lineOut.push([e,t]))}_lineTo(e,t,i){this._closed?(this._addPolyVertex(this._lineIn,i<=0?e:this._xCut,t),this._addPolyVertex(this._lineOut,i>=0?e:this._xCut,t)):i<0?(0===this._prevSide&&this._pushLineOut(),this._lineIn.push([e,t])):i>0?(0===this._prevSide&&this._pushLineIn(),this._lineOut.push([e,t])):this._prevSide<0?(this._lineIn.push([e,t]),this._lineOut.push([e,t])):this._prevSide>0&&(this._lineOut.push([e,t]),this._lineIn.push([e,t]))}_addPolyVertex(e,t,i){const n=e.length
n>1&&e[n-1][0]===t&&e[n-2][0]===t?e[n-1][1]=i:e.push([t,i])}_checkClosingPt(e){const t=e.length
t>3&&e[0][0]===this._xCut&&e[t-2][0]===this._xCut&&e[1][0]===this._xCut&&(e[0][1]=e[t-2][1],e.pop())}_side(e){return e<this._xCut?-1:e>this._xCut?1:0}_intersect(e,t){const i=(this._xCut-e[0])/(t[0]-e[0])
return e[1]+i*(t[1]-e[1])}_pushLineIn(){this._lineIn&&this._lineIn.length>=this._minPts&&this._linesIn.push(this._lineIn),this._lineIn=[]}_pushLineOut(){this._lineOut&&this._lineOut.length>=this._minPts&&this._linesOut.push(this._lineOut),this._lineOut=[]}}},1684:function(e,t,i){"use strict"
i.d(t,"a",(function(){return u})),i.d(t,"b",(function(){return l})),i.d(t,"c",(function(){return o})),i.d(t,"d",(function(){return c}))
var n=i(1370),r=i(983),s=i(1422)
function o(e){if(!e)return null
switch(e.type){case"CIMPointSymbol":{const t=e.symbolLayers
return t&&1===t.length?o(t[0]):null}case"CIMVectorMarker":{var t
const i=e.markerGraphics
if(!i||1!==i.length)return null
const n=i[0]
if(!n)return null
const r=n.geometry
if(!r)return null
const s=n.symbol
return!s||"CIMPolygonSymbol"!==s.type&&"CIMLineSymbol"!==s.type||null!=(t=s.symbolLayers)&&t.some(e=>!!e.effects)?null:{geom:r,asFill:"CIMPolygonSymbol"===s.type}}case"sdf":return{geom:e.geom,asFill:e.asFill}}return null}function a(e){let t=1/0,i=-1/0,n=1/0,r=-1/0
for(const s of e)for(const e of s)e[0]<t&&(t=e[0]),e[0]>i&&(i=e[0]),e[1]<n&&(n=e[1]),e[1]>r&&(r=e[1])
return[t,n,i,r]}function l(e){return e?e.rings?a(e.rings):e.paths?a(e.paths):Object(r.d)(e)?[e.xmin,e.ymin,e.xmax,e.ymax]:null:null}function c(e,t,i,n,r){const[s,o,a,l]=e
if(a<s||l<o)return[0,0,0]
const c=a-s,u=l-o,h=Math.floor(31.5),d=(128-2*(h+1))/Math.max(c,u),f=Math.round(c*d)+2*h,_=Math.round(u*d)+2*h
let m=1
t&&(m=_/d/(t.ymax-t.ymin))
let p=0,g=0,y=1
n&&(r?t&&i&&t.ymax-t.ymin>0&&(y=(t.xmax-t.xmin)/(t.ymax-t.ymin),p=n.x/(i*y),g=n.y/i):(p=n.x,g=n.y)),t&&(p=.5*(t.xmax+t.xmin)+p*(t.xmax-t.xmin),g=.5*(t.ymax+t.ymin)+g*(t.ymax-t.ymin)),p-=s,g-=o,p*=d,g*=d,p+=h,g+=h
let x=p/f-.5,v=g/_-.5
return r&&i&&(x*=i*y,v*=i),[m,x,v]}function u(e){const t=function(e){return e?e.rings?e.rings:e.paths?e.paths:void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax?[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]:null:null}(e.geom),i=function(e){let t=1/0,i=-1/0,n=1/0,r=-1/0
for(const s of e)for(const e of s)e[0]<t&&(t=e[0]),e[0]>i&&(i=e[0]),e[1]<n&&(n=e[1]),e[1]>r&&(r=e[1])
return new s.a(t,n,i-t,r-n)}(t),n=Math.floor(31.5),r=(128-2*(n+1))/Math.max(i.width,i.height),o=Math.round(i.width*r)+2*n,a=Math.round(i.height*r)+2*n,l=[]
for(const s of t)if(s&&s.length>1){const t=[]
for(const o of s){let[s,a]=o
s-=i.x,a-=i.y,s*=r,a*=r,s+=n-.5,a+=n-.5,e.asFill?t.push([s,a]):t.push([Math.round(s),Math.round(a)])}if(e.asFill){const e=t.length-1
t[0][0]===t[e][0]&&t[0][1]===t[e][1]||t.push(t[0])}l.push(t)}const c=function(e,t,i,n){const r=t*i,s=new Array(r),o=n*n+1
for(let e=0;e<r;++e)s[e]=o
for(const r of e){const e=r.length
for(let o=1;o<e;++o){const e=r[o-1],a=r[o]
let l,c,u,h
e[0]<a[0]?(l=e[0],c=a[0]):(l=a[0],c=e[0]),e[1]<a[1]?(u=e[1],h=a[1]):(u=a[1],h=e[1])
let d=Math.floor(l)-n,f=Math.floor(c)+n,_=Math.floor(u)-n,m=Math.floor(h)+n
d<0&&(d=0),f>t&&(f=t),_<0&&(_=0),m>i&&(m=i)
const p=a[0]-e[0],g=a[1]-e[1],y=p*p+g*g
for(let n=d;n<f;n++)for(let r=_;r<m;r++){let o,l,c=(n-e[0])*p+(r-e[1])*g
c<0?(o=e[0],l=e[1]):c>y?(o=a[0],l=a[1]):(c/=y,o=e[0]+c*p,l=e[1]+c*g)
const u=(n-o)*(n-o)+(r-l)*(r-l),h=(i-r-1)*t+n
u<s[h]&&(s[h]=u)}}}for(let e=0;e<r;++e)s[e]=Math.sqrt(s[e])
return s}(l,o,a,n)
return e.asFill&&function(e,t,i,n,r){for(const s of e){const e=s.length
for(let o=1;o<e;++o){const e=s[o-1],a=s[o]
let l,c,u,h
e[0]<a[0]?(l=e[0],c=a[0]):(l=a[0],c=e[0]),e[1]<a[1]?(u=e[1],h=a[1]):(u=a[1],h=e[1])
let d=Math.floor(l),f=Math.floor(c)+1,_=Math.floor(u),m=Math.floor(h)+1
d<n&&(d=n),f>t-n&&(f=t-n),_<n&&(_=n),m>i-n&&(m=i-n)
for(let s=_;s<m;++s){if(e[1]>s==a[1]>s)continue
const o=(i-s-1)*t
for(let t=d;t<f;++t)t<(a[0]-e[0])*(s-e[1])/(a[1]-e[1])+e[0]&&(r[o+t]=-r[o+t])
for(let e=n;e<d;++e)r[o+e]=-r[o+e]}}}}(l,o,a,n,c),[h(c,n),o,a]}function h(e,t){const i=2*t,r=e.length,s=new Uint8Array(4*r)
for(let t=0;t<r;++t){const r=.5-e[t]/i
Object(n.a)(r,s,4*t)}return s}},1696:function(e,t,i){"use strict"
i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return r}))
var n=i(447)
function r(e,t){let i
if("string"==typeof e)i=Object(n.b)(e+`-seed(${t})`)
else{let n=12
i=e^t
do{i=107*(i>>8^i)+n|0}while(0!=--n)}return(1+i/(1<<31))/2}function s(e){return Math.floor(r(e,o)*a)}const o=53290320,a=10},1704:function(e,t,i){"use strict"
function n(e,t,i,n){const r=e.clone(),s=1<<r.level,o=r.col+t,a=r.row+i
return n&&o<0?(r.col=o+s,r.world-=1):o>=s?(r.col=o-s,r.world+=1):r.col=o,r.row=a,r}i.d(t,"a",(function(){return n}))},1705:function(e,t,i){"use strict"
i.d(t,"a",(function(){return f}))
var n=i(1030),r=i(1e3)
function s(e,t){return e.x===t.x&&e.y===t.y}function o(e,t){return e.x=t.y,e.y=-t.x,e}function a(e,t){return e.x=-t.y,e.y=t.x,e}function l(e,t){return e.x=t.x,e.y=t.y,e}function c(e,t){return e.x=-t.x,e.y=-t.y,e}function u(e){return Math.sqrt(e.x*e.x+e.y*e.y)}function h(e,t){return e.x*t.x+e.y*t.y}function d(e,t,i,n){return e.x=t.x*i+t.y*n,e.y=t.x*n-t.y*i,e}class f{constructor(e,t,i){this._writeVertex=e,this._writeTriangle=t,this._canUseThinTessellation=i,this._prevNormal={x:void 0,y:void 0},this._nextNormal={x:void 0,y:void 0},this._textureNormalLeft={x:0,y:1},this._textureNormalRight={x:0,y:-1},this._textureNormal={x:void 0,y:void 0},this._joinNormal={x:void 0,y:void 0},this._inner={x:void 0,y:void 0},this._outer={x:void 0,y:void 0},this._roundStart={x:void 0,y:void 0},this._roundEnd={x:void 0,y:void 0},this._startBreak={x:void 0,y:void 0},this._endBreak={x:void 0,y:void 0},this._innerPrev={x:void 0,y:void 0},this._innerNext={x:void 0,y:void 0},this._bevelStart={x:void 0,y:void 0},this._bevelEnd={x:void 0,y:void 0},this._bevelMiddle={x:void 0,y:void 0}}tessellate(e,t){(function(e){if(!e)return
const t=e.length
if(t<=1)return
let i=0
for(let n=1;n<t;n++)s(e[n],e[i])||++i===n||(e[i]=e[n])
e.length=i+1})(e),this._canUseThinTessellation&&t.halfWidth<r.Y&&!t.offset?this._tessellateThin(e,t):this._tessellate(e,t)}_tessellateThin(e,t){if(e.length<2)return
const i=t.wrapDistance||65535
let n=t.initialDistance||0,r=!1,s=e[0].x,o=e[0].y
const a=e.length
for(let t=1;t<a;++t){r&&(r=!1,n=0)
let a=e[t].x,l=e[t].y,c=a-s,u=l-o,h=Math.sqrt(c*c+u*u)
if(c/=h,u/=h,n+h>i){r=!0
const e=(i-n)/h
h=i-n,a=(1-e)*s+e*a,l=(1-e)*o+e*l,--t}const d=this._writeVertex(s,o,0,0,c,u,u,-c,0,-1,n),f=this._writeVertex(s,o,0,0,c,u,-u,c,0,1,n)
n+=h
const _=this._writeVertex(a,l,0,0,c,u,u,-c,0,-1,n),m=this._writeVertex(a,l,0,0,c,u,-u,c,0,1,n)
this._writeTriangle(d,f,_),this._writeTriangle(f,_,m),s=a,o=l}}_tessellate(e,t){const i=e[0],r=e[e.length-1],f=s(i,r),_=f?3:2
if(e.length<_)return
const m=t.pixelCoordRatio,p=null!=t.capType?t.capType:n.e.BUTT,g=null!=t.joinType?t.joinType:n.p.MITER,y=null!=t.miterLimit?Math.min(t.miterLimit,4):2,x=null!=t.roundLimit?Math.min(t.roundLimit,1.05):1.05,v=null!=t.halfWidth?t.halfWidth:2,b=!!t.textured
let O,S,T,C=null
const w=this._prevNormal,M=this._nextNormal
let I=-1,P=-1
const E=this._joinNormal
let L,A
const j=this._textureNormalLeft,R=this._textureNormalRight,D=this._textureNormal
let z=-1,F=-1
const k=t.wrapDistance||65535
let N=t.initialDistance||0
const V=this._writeVertex,B=this._writeTriangle,U=(e,t,i,n,r,s)=>{const o=V(S,T,L,A,i,n,e,t,r,s,N)
return z>=0&&F>=0&&o>=0&&B(z,F,o),z=F,F=o,o}
f&&(O=e[e.length-2],M.x=r.x-O.x,M.y=r.y-O.y,P=u(M),M.x/=P,M.y/=P)
let G=!1
for(let t=0;t<e.length;++t){if(G&&(G=!1,N=0),O&&(w.x=-M.x,w.y=-M.y,I=P,N+I>k&&(G=!0)),G){const i=(k-N)/I
I=k-N,O={x:(1-i)*O.x+i*e[t].x,y:(1-i)*O.y+i*e[t].y},--t}else O=e[t]
S=O.x,T=O.y
const i=t<=0&&!G,r=t===e.length-1
if(i||(N+=I),C=r?f?e[1]:null:e[t+1],C?(M.x=C.x-S,M.y=C.y-T,P=u(M),M.x/=P,M.y/=P):(M.x=void 0,M.y=void 0),!f){if(i){a(E,M),L=E.x,A=E.y,p===n.e.SQUARE&&(U(-M.y-M.x,M.x-M.y,M.x,M.y,0,-1),U(M.y-M.x,-M.x-M.y,M.x,M.y,0,1)),p===n.e.ROUND&&(U(-M.y-M.x,M.x-M.y,M.x,M.y,-1,-1),U(M.y-M.x,-M.x-M.y,M.x,M.y,-1,1)),p!==n.e.ROUND&&p!==n.e.BUTT||(U(-M.y,M.x,M.x,M.y,0,-1),U(M.y,-M.x,M.x,M.y,0,1))
continue}if(r){o(E,w),L=E.x,A=E.y,p!==n.e.ROUND&&p!==n.e.BUTT||(U(w.y,-w.x,-w.x,-w.y,0,-1),U(-w.y,w.x,-w.x,-w.y,0,1)),p===n.e.SQUARE&&(U(w.y-w.x,-w.x-w.y,-w.x,-w.y,0,-1),U(-w.y-w.x,w.x-w.y,-w.x,-w.y,0,1)),p===n.e.ROUND&&(U(w.y-w.x,-w.x-w.y,-w.x,-w.y,1,-1),U(-w.y-w.x,w.x-w.y,-w.x,-w.y,1,1))
continue}}let s,_,V=(W=M,-((H=w).x*W.y-H.y*W.x))
if(Math.abs(V)<.01)h(w,M)>0?(E.x=w.x,E.y=w.y,V=1,s=Number.MAX_VALUE,_=!0):(a(E,M),V=1,s=1,_=!1)
else{E.x=(w.x+M.x)/V,E.y=(w.y+M.y)/V,s=u(E)
const e=(s-1)*v*m
_=s>4||e>I&&e>P}L=E.x,A=E.y
let B=g
switch(g){case n.p.BEVEL:s<1.05&&(B=n.p.MITER)
break
case n.p.ROUND:s<x&&(B=n.p.MITER)
break
case n.p.MITER:s>y&&(B=n.p.BEVEL)}switch(B){case n.p.MITER:if(U(E.x,E.y,-w.x,-w.y,0,-1),U(-E.x,-E.y,-w.x,-w.y,0,1),r)break
if(b){const e=G?0:N
z=this._writeVertex(S,T,L,A,M.x,M.y,E.x,E.y,0,-1,e),F=this._writeVertex(S,T,L,A,M.x,M.y,-E.x,-E.y,0,1,e)}break
case n.p.BEVEL:{const e=V<0
let t,i,n,s
if(e){const e=z
z=F,F=e,t=j,i=R}else t=R,i=j
if(_)n=e?a(this._innerPrev,w):o(this._innerPrev,w),s=e?o(this._innerNext,M):a(this._innerNext,M)
else{const t=e?c(this._inner,E):l(this._inner,E)
n=t,s=t}const u=e?o(this._bevelStart,w):a(this._bevelStart,w)
U(n.x,n.y,-w.x,-w.y,t.x,t.y)
const h=U(u.x,u.y,-w.x,-w.y,i.x,i.y)
if(r)break
const f=e?a(this._bevelEnd,M):o(this._bevelEnd,M)
if(_){const e=this._writeVertex(S,T,L,A,-w.x,-w.y,0,0,0,0,N)
z=this._writeVertex(S,T,L,A,M.x,M.y,s.x,s.y,t.x,t.y,N),F=this._writeVertex(S,T,L,A,M.x,M.y,f.x,f.y,i.x,i.y,N),this._writeTriangle(h,e,F)}else{if(b){const e=this._bevelMiddle
e.x=(u.x+f.x)/2,e.y=(u.y+f.y)/2,d(D,e,-w.x,-w.y),U(e.x,e.y,-w.x,-w.y,D.x,D.y),d(D,e,M.x,M.y),z=this._writeVertex(S,T,L,A,M.x,M.y,e.x,e.y,D.x,D.y,N),F=this._writeVertex(S,T,L,A,M.x,M.y,s.x,s.y,t.x,t.y,N)}else{const e=z
z=F,F=e}U(f.x,f.y,M.x,M.y,i.x,i.y)}if(e){const e=z
z=F,F=e}break}case n.p.ROUND:{const e=V<0
let t,i
if(e){const e=z
z=F,F=e,t=j,i=R}else t=R,i=j
const n=e?c(this._inner,E):l(this._inner,E)
let u,f
_?(u=e?a(this._innerPrev,w):o(this._innerPrev,w),f=e?o(this._innerNext,M):a(this._innerNext,M)):(u=n,f=n)
const m=e?o(this._roundStart,w):a(this._roundStart,w),p=e?a(this._roundEnd,M):o(this._roundEnd,M),g=U(u.x,u.y,-w.x,-w.y,t.x,t.y),y=U(m.x,m.y,-w.x,-w.y,i.x,i.y)
if(r)break
const x=this._writeVertex(S,T,L,A,-w.x,-w.y,0,0,0,0,N)
_||this._writeTriangle(z,F,x)
const v=c(this._outer,n),O=this._writeVertex(S,T,L,A,M.x,M.y,p.x,p.y,i.x,i.y,N)
let C,I
const P=s>2
if(P){let t
s!==Number.MAX_VALUE?(v.x/=s,v.y/=s,t=h(w,v),t=(s*(t*t-1)+1)/t):t=-1,C=e?o(this._startBreak,w):a(this._startBreak,w),C.x+=w.x*t,C.y+=w.y*t,I=e?a(this._endBreak,M):o(this._endBreak,M),I.x+=M.x*t,I.y+=M.y*t}d(D,v,-w.x,-w.y)
const k=this._writeVertex(S,T,L,A,-w.x,-w.y,v.x,v.y,D.x,D.y,N)
d(D,v,M.x,M.y)
const B=b?this._writeVertex(S,T,L,A,M.x,M.y,v.x,v.y,D.x,D.y,N):k,G=x,H=b?this._writeVertex(S,T,L,A,M.x,M.y,0,0,0,0,N):x
let W=-1,Y=-1
if(P&&(d(D,C,-w.x,-w.y),W=this._writeVertex(S,T,L,A,-w.x,-w.y,C.x,C.y,D.x,D.y,N),d(D,I,M.x,M.y),Y=this._writeVertex(S,T,L,A,M.x,M.y,I.x,I.y,D.x,D.y,N)),b?P?(this._writeTriangle(G,y,W),this._writeTriangle(G,W,k),this._writeTriangle(H,B,Y),this._writeTriangle(H,Y,O)):(this._writeTriangle(G,y,k),this._writeTriangle(H,B,O)):P?(this._writeTriangle(x,y,W),this._writeTriangle(x,W,Y),this._writeTriangle(x,Y,O)):(this._writeTriangle(x,y,k),this._writeTriangle(x,B,O)),_?(z=this._writeVertex(S,T,L,A,M.x,M.y,f.x,f.y,t.x,t.y,N),F=O):(z=b?this._writeVertex(S,T,L,A,M.x,M.y,f.x,f.y,t.x,t.y,N):g,this._writeTriangle(z,H,O),F=O),e){const e=z
z=F,F=e}break}}}var H,W}}},1706:function(e,t,i){"use strict"
i.d(t,"a",(function(){return f})),i.d(t,"b",(function(){return c}))
var n=i(23),r=i(980),s=i(1174),o=i(1e3),a=i(1003),l=i(1512)
function c(e,t){if(!e||!t)return e
switch(t){case"radius":case"distance":return 2*e
case"diameter":case"width":return e
case"area":return Math.sqrt(e)}return e}function u(e){return(null!=e?e:[]).map(e=>function(e){return{value:e.value,size:Object(r.k)(e.size)}}(e))}function h(e){if("string"==typeof e||"number"==typeof e)return Object(r.k)(e)
const t=e
return{type:"size",expression:t.expression,stops:u(t.stops)}}const d=e=>{const t=[],i=[],n=u(e),s=n.length
for(let e=0;e<6;e++){const a=n[Math.min(e,s-1)]
t.push(a.value),i.push(null==a.size?o.B:Object(r.h)(a.size))}return{values:new Float32Array(t),sizes:new Float32Array(i)}}
function f(e){var t
const i=e&&e.length>0?{}:null,n=i?{}:null
if(!i||!n)return{vvFields:i,vvRanges:n}
for(const r of e)if(r.field&&(i[r.type]=r.field),"size"===r.type){n.size||(n.size={})
const e=r
switch(Object(l.a)(e)){case a.f.SIZE_MINMAX_VALUE:n.size.minMaxValue={minDataValue:e.minDataValue,maxDataValue:e.maxDataValue,minSize:h(e.minSize),maxSize:h(e.maxSize)}
break
case a.f.SIZE_SCALE_STOPS:n.size.scaleStops={stops:u(e.stops)}
break
case a.f.SIZE_FIELD_STOPS:if(e.levels){const t={}
for(const i in e.levels)t[i]=d(e.levels[i])
n.size.fieldStops={type:"level-dependent",levels:t}}else n.size.fieldStops={type:"static",...d(e.stops)}
break
case a.f.SIZE_UNIT_VALUE:n.size.unitValue={unit:e.valueUnit,valueRepresentation:null!=(t=e.valueRepresentation)?t:void 0}}}else if("color"===r.type)n.color=p(r)
else if("opacity"===r.type)n.opacity=_(r)
else if("rotation"===r.type){const e=r
n.rotation={type:e.rotationType}}return{vvFields:i,vvRanges:n}}function _(e){const t={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]}
if("string"==typeof e.field){if(!e.stops)return null
{if(e.stops.length>8)return null
const i=e.stops
for(let e=0;e<8;++e){const n=i[Math.min(e,i.length-1)]
t.values[e]=n.value,t.opacities[e]=n.opacity}}}else{if(!(e.stops&&e.stops.length>=0))return null
{const i=e.stops&&e.stops.length>=0?e.stops[0].opacity:0
for(let e=0;e<8;e++)t.values[e]=1/0,t.opacities[e]=i}}return t}function m(e,t,i){e[4*t+0]=i.r/255,e[4*t+1]=i.g/255,e[4*t+2]=i.b/255,e[4*t+3]=i.a}function p(e){if(Object(n.k)(e))return null
if(e.normalizationField)return null
const t={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
if("string"==typeof e.field){if(!e.stops)return null
{if(e.stops.length>8)return null
t.field=e.field
const i=e.stops
for(let e=0;e<8;++e){const n=i[Math.min(e,i.length-1)]
t.values[e]=n.value,m(t.colors,e,n.color)}}}else{if(!(e.stops&&e.stops.length>=0))return null
{const i=e.stops&&e.stops.length>=0&&e.stops[0].color
for(let e=0;e<8;e++)t.values[e]=1/0,m(t.colors,e,i)}}for(let e=0;e<32;e+=4)Object(s.a)(t.colors,e,!0)
return t}},1726:function(e,t,i){"use strict"
i.d(t,"a",(function(){return y}))
var n=i(446),r=i(235),s=i(233),o=i(23),a=i(973),l=i(1e3),c=i(1269),u=i(1022),h=i(1572),d=i(984),f=i(1171),_=i(1072)
const m=s.a.getLogger("esri.views.2d.engine.webgl.AttributeStoreView"),p=Object(h.b)(h.a,m)
class g{constructor(e,t,i){this._texture=null,this._lastTexture=null,this._fbos={},this.texelSize=4
const{buffer:n,pixelType:r,textureOnly:s}=e,a=Object(u.l)(r)
this.shared=i,this.pixelType=r,this.size=t,this.textureOnly=s,s||(this.data=new a(Object(o.u)(n))),this._resetRange()}destroy(){Object(o.b)(this._texture,e=>e.dispose())
for(const e in this._fbos)Object(o.b)(this._fbos[e],t=>{"0"===e&&t.detachColorTexture(),t.dispose()}),this._fbos[e]=null
this._texture=null}get _textureDesc(){return{target:d.A.TEXTURE_2D,wrapMode:d.B.CLAMP_TO_EDGE,pixelFormat:d.p.RGBA,dataType:this.pixelType,samplingMode:d.z.NEAREST,width:this.size,height:this.size}}setData(e,t,i){const n=Object(c.f)(e),r=Object(o.u)(this.data),s=n*this.texelSize+t
!r||s>=r.length||(r[s]=i,this.dirtyStart=Math.min(this.dirtyStart,n),this.dirtyEnd=Math.max(this.dirtyEnd,n))}getData(e,t){if(Object(o.k)(this.data))return null
const i=Object(c.f)(e)*this.texelSize+t
return!this.data||i>=this.data.length?null:this.data[i]}getTexture(e){return Object(o.v)(this._texture,()=>this._initTexture(e))}getFBO(e,t=0){if(Object(o.k)(this._fbos[t])){const i={colorTarget:d.y.TEXTURE,depthStencilTarget:d.m.NONE},n=0===t?this.getTexture(e):this._textureDesc
this._fbos[t]=new f.a(e,i,n)}return this._fbos[t]}get locked(){return!(this.pixelType!==d.q.UNSIGNED_BYTE||!this.shared||this.textureOnly||!Object(r.a)("esri-atomics")||!this.data)&&1===Atomics.load(this.data,0)}get hasDirty(){const e=this.dirtyStart
return this.dirtyEnd>=e}updateTexture(e,t){if(!this.locked){try{const t=this.dirtyStart,i=this.dirtyEnd
if(!this.hasDirty)return
this._resetRange()
const r=Object(o.u)(this.data).buffer,s=this.getTexture(e),a=4,l=(t-t%this.size)/this.size,c=(i-i%this.size)/this.size,h=l,d=this.size,f=c,_=l*this.size*a,p=(d+f*this.size)*a-_,g=Object(u.l)(this.pixelType),y=new g(r,_*g.BYTES_PER_ELEMENT,p),x=this.size,v=f-h+1
if(v>this.size)return void m.error(new n.a("mapview-webgl","Out-of-bounds index when updating AttributeData"))
s.updateData(0,0,h,x,v,y)}catch(e){}t()}}update(e){const{data:t,start:i,end:n}=e
if(Object(o.l)(t)&&Object(o.l)(this.data)){const n=this.data,r=i*this.texelSize
for(let i=0;i<t.length;i++){const s=1<<i%this.texelSize
e.layout&s&&(n[r+i]=t[i])}}this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,n)}resize(e,t){const i=this.size
if(this.size=t,this.textureOnly)return void(i!==this.size&&(this._lastTexture=this._texture,this._texture=null))
const n=Object(u.l)(this.pixelType)
this.destroy(),this.data=new n(Object(o.u)(e.buffer))}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}_initTexture(e){const t=new _.a(e,this._textureDesc,Object(o.v)(this.data,void 0))
if(Object(o.l)(this._lastTexture)&&this._fbos[0]){const i=this._lastTexture.descriptor.width,n=this._lastTexture.descriptor.height,r=this._lastTexture.descriptor.dataType,s=this._lastTexture.descriptor.pixelFormat,o=this.getFBO(e),a=Object(u.m)(r),l=new(Object(u.l)(r))(new ArrayBuffer(i*n*a*this.texelSize)),c=e.getBoundFramebufferObject(),{x:h,y:d,width:f,height:_}=e.getViewport()
e.bindFramebuffer(o),o.readPixels(0,0,i,n,s,r,l),t.updateData(0,0,0,2*i,n/2,l),e.setViewport(h,d,f,_),e.bindFramebuffer(c)}return this.destroy(),this._texture=t,this._texture}}class y{constructor(e){this._onUpdate=e,this._initialized=!1,this._forceNextUpload=!1,this._locked=!1}initialize(e){const{blocks:t,shared:i,size:n}=e
if(this.shared=i,this.size=n,p("Initializing AttributeStoreView",e),Object(o.k)(this._data))this._data=Object(o.m)(t,e=>new g(e,n,i))
else for(let e=0;e<this._data.length;e++){const r=this._data[e],s=t[e]
Object(o.l)(s)&&(Object(o.k)(r)?this._data[e]=new g(s,n,i):r.resize(s,n))}this._initialized=!0}destroy(){Object(o.b)(this._data,e=>Object(o.m)(e,e=>e.destroy())),Object(o.b)(this._defaultTexture,e=>e.dispose())}isEmpty(){const e=this._data
return Object(o.k)(e)}isUpdating(){const e=Object(o.l)(this._pendingAttributeUpdate),t=e
return Object(r.a)("esri-2d-log-updating")&&console.log(`Updating AttributeStoreView ${t}\n  -> hasPendingUpdate ${e}`),t}getBlock(e){return Object(o.k)(this._data)?null:this._data[e]}setLabelMinZoom(e,t){this.setData(e,0,1,t)}getLabelMinZoom(e){return this.getData(e,0,1,255)}getFilterFlags(e){return this.getData(e,0,0,0)}getVVSize(e){return this.getData(e,l.e,0,0)}getData(e,t,i,n){if(!this._data)return 0
const r=Object(o.u)(this._data)[t]
if(Object(o.k)(r))return 0
const s=r.getData(e,i)
return Object(o.l)(s)?s:n}setData(e,t,i,n){const r=Object(o.u)(this._data)[t]
Object(o.u)(r).setData(e,i,n)}lockTextureUpload(){this._locked=!0}unlockTextureUpload(){this._locked=!1}forceTextureUpload(){this._forceNextUpload=!0}async requestUpdate(e){if(this._pendingAttributeUpdate)return void m.error(new n.a("mapview-webgl","Tried to update attribute data with a pending update"))
const t=Object(a.e)()
return p("AttributeStoreView Update Requested",e),this._pendingAttributeUpdate={data:e,resolver:t},this._onUpdate(),t.promise}update(){if(this._initialized&&Object(o.l)(this._pendingAttributeUpdate)){Object(r.a)("esri-2d-update-debug")&&console.debug("AttributeStoreView::update")
const{data:e,resolver:t}=this._pendingAttributeUpdate,i=Object(o.u)(this._data)
for(let t=0;t<e.blocks.length;t++){const n=e.blocks[t],r=i[t]
Object(o.b)(r,e=>Object(o.b)(n,i=>{p("Updating block "+t,i),e.update(i)}))}this._pendingAttributeUpdate=null,t(),this._onUpdate()}}bindTextures(e,t=!0){const i=this._getDefaultTexture(e)
if(!this._initialized)return e.bindTexture(i,l.H),void(t&&(e.bindTexture(i,l.I),e.bindTexture(i,l.J),e.bindTexture(i,l.K),e.bindTexture(i,l.L),e.bindTexture(i,l.M),e.bindTexture(i,l.P)))
const n=Object(o.u)(this._data)
this._locked&&!this._forceNextUpload||(Object(o.i)(n,t=>t.updateTexture(e,()=>this._onUpdate())),this._forceNextUpload=!1),e.bindTexture(Object(o.n)(n[l.c],i,t=>t.getTexture(e)),l.H),t&&(e.bindTexture(Object(o.n)(n[l.d],i,t=>t.getTexture(e)),l.P),e.bindTexture(Object(o.n)(n[l.a],i,t=>t.getTexture(e)),l.I),e.bindTexture(Object(o.n)(n[l.e],i,t=>t.getTexture(e)),l.J),e.bindTexture(Object(o.n)(n[l.b],i,t=>t.getTexture(e)),l.K),e.bindTexture(Object(o.n)(n[l.L],i,t=>t.getTexture(e)),l.L),e.bindTexture(Object(o.n)(n[l.M],i,t=>t.getTexture(e)),l.M))}_getDefaultTexture(e){if(Object(o.k)(this._defaultTexture)){const t={wrapMode:d.B.CLAMP_TO_EDGE,pixelFormat:d.p.RGBA,dataType:d.q.UNSIGNED_BYTE,samplingMode:d.z.NEAREST,width:1,height:1}
this._defaultTexture=new _.a(e,t,new Uint8Array(4))}return this._defaultTexture}}},1727:function(e,t,i){"use strict"
i.d(t,"a",(function(){return r}))
var n=i(980)
class r{constructor(e){e&&(this._textRasterizationCanvas=e)}rasterizeText(e,t){var i
this._textRasterizationCanvas||(this._textRasterizationCanvas=document.createElement("canvas"))
const n=this._textRasterizationCanvas,r=n.getContext("2d")
this._setFontProperties(r,t),this._parameters=t,this._textLines=e.split(/\r?\n/),this._lineHeight=this._computeLineHeight()
const s=this._computeTextWidth(r,t),{decoration:o,weight:a}=t.font
this._lineThroughWidthOffset=o&&"line-through"===o?.1*this._lineHeight:0
const l=this._lineHeight*this._textLines.length
n.width=s+2*this._lineThroughWidthOffset,n.height=l,this._renderedLineHeight=Math.round(this._lineHeight*t.pixelRatio),this._renderedHaloSize=t.halo.size*t.pixelRatio,this._renderedWidth=s*t.pixelRatio,this._renderedHeight=l*t.pixelRatio,this._lineThroughWidthOffset*=t.pixelRatio
const c=null!=(i=t.color)?i:[0,0,0,0],u=t.halo&&t.halo.color?t.halo.color:[0,0,0,0]
this._fillStyle=function(e){return`rgba(${e.slice(0,3).toString()},${e[3]})`}(c),this._haloStyle=function(e){return`rgb(${e.slice(0,3).toString()})`}(u)
const h=this._renderedLineHeight,d=this._renderedHaloSize
r.save(),r.clearRect(0,0,n.width,n.height),this._setFontProperties(r,t)
const f=function(e,t){return"center"===e?.5*t:"right"===e?t:0}(r.textAlign,this._renderedWidth)+d,_=d,m=d>0
let p=this._lineThroughWidthOffset,g=0
m&&this._renderHalo(r,f,_,p,g,t),g+=_,p+=f
for(const e of this._textLines)m?(r.globalCompositeOperation="destination-out",r.fillStyle="rgb(0, 0, 0)",r.fillText(e,p,g),r.globalCompositeOperation="source-over",r.fillStyle=this._fillStyle,r.fillText(e,p,g)):(r.fillStyle=this._fillStyle,r.fillText(e,p,g)),o&&"none"!==o&&this._renderDecoration(r,p,g,o,a),g+=h
r.restore()
const y=this._renderedWidth+2*this._lineThroughWidthOffset,x=this._renderedHeight,v=r.getImageData(0,0,y,x),b=new Uint8Array(v.data)
if(t.premultiplyColors){let e
for(let t=0;t<b.length;t+=4)e=b[t+3]/255,b[t]=b[t]*e,b[t+1]=b[t+1]*e,b[t+2]=b[t+2]*e}let O,S
switch(t.horizontalAlignment){case"left":O=-.5
break
case"right":O=.5
break
default:O=0}switch(t.verticalAlignment){case"bottom":S=-.5
break
case"top":S=.5
break
default:S=0}return{size:[y,x],image:new Uint32Array(b.buffer),sdf:!1,simplePattern:!1,anchorX:O,anchorY:S,canvas:n}}_renderHalo(e,t,i,n,r,s){const o=this._renderedWidth,a=this._renderedHeight
this._haloRasterizationCanvas||(this._haloRasterizationCanvas=document.createElement("canvas")),this._haloRasterizationCanvas.width=o,this._haloRasterizationCanvas.height=a
const l=this._haloRasterizationCanvas,c=l.getContext("2d")
c.clearRect(0,0,o,a),this._setFontProperties(c,s)
const{decoration:u,weight:h}=s.font
c.fillStyle=this._haloStyle,c.strokeStyle=this._haloStyle,c.lineJoin="round",this._renderHaloNative(c,t,i,u,h),e.globalAlpha=this._parameters.halo.color[3],e.drawImage(l,0,0,o,a,n,r,o,a),e.globalAlpha=1}_renderHaloNative(e,t,i,n,r){const s=this._renderedLineHeight,o=this._renderedHaloSize
for(const a of this._textLines){const l=2*o,c=5,u=.1
for(let s=0;s<c;s++){const o=(1-(c-1)*u+s*u)*l
e.lineWidth=o,e.strokeText(a,t,i),n&&"none"!==n&&this._renderDecoration(e,t,i,n,r,o)}i+=s}}_setFontProperties(e,t){const i=Math.max(t.size,.5),r=t.font,s=`${r.style} ${r.weight} ${Object(n.h)(i*t.pixelRatio).toFixed(1)}px ${r.family}, sans-serif`
let o
switch(e.font=s,e.textBaseline="top",t.horizontalAlignment){case"left":default:o="left"
break
case"right":o="right"
break
case"center":o="center"}e.textAlign=o}computeTextSize(e,t){this._textRasterizationCanvas||(this._textRasterizationCanvas=document.createElement("canvas"))
const i=this._textRasterizationCanvas,n=i.getContext("2d")
this._setFontProperties(n,t),this._parameters=t,this._textLines=e.split(/\r?\n/),this._lineHeight=this._computeLineHeight()
const r=this._computeTextWidth(n,t),s=this._lineHeight*this._textLines.length
return i.width=r,i.height=s,[r*t.pixelRatio,s*t.pixelRatio]}_computeTextWidth(e,t){let i=0
for(const t of this._textLines)i=Math.max(i,e.measureText(t).width)
const n=t.font
return("italic"===n.style||"oblique"===n.style||"string"==typeof n.weight&&("bold"===n.weight||"bolder"===n.weight)||"number"==typeof n.weight&&n.weight>600)&&(i+=.3*e.measureText("w").width),i+=2*this._parameters.halo.size,Math.round(i)}_computeLineHeight(){let e=1.275*this._parameters.size
const t=this._parameters.font.decoration
return t&&"underline"===t&&(e*=1.3),Math.round(e+2*this._parameters.halo.size)}_renderDecoration(e,t,i,n,r,s){const o=.9*this._lineHeight,a="bold"===r?.06:"bolder"===r?.09:.04
switch(e.textAlign){case"center":t-=this._renderedWidth/2
break
case"right":t-=this._renderedWidth}const l=e.textBaseline
if("underline"===n)switch(l){case"top":i+=o
break
case"middle":i+=o/2}else if("line-through"===n)switch(l){case"top":i+=o/1.5
break
case"middle":i+=o/3}const c=s?1.5*s:Math.ceil(o*a)
e.save(),e.beginPath(),e.strokeStyle=e.fillStyle,e.lineWidth=c,e.moveTo(t-this._lineThroughWidthOffset,i),e.lineTo(t+this._renderedWidth+2*this._lineThroughWidthOffset,i),e.stroke(),e.restore()}}},1731:function(e,t,i){"use strict"
i.d(t,"a",(function(){return T}))
const n=[["(",")"],[")","("],["<",">"],[">","<"],["[","]"],["]","["],["{","}"],["}","{"],["«","»"],["»","«"],["‹","›"],["›","‹"],["⁽","⁾"],["⁾","⁽"],["₍","₎"],["₎","₍"],["≤","≥"],["≥","≤"],["〈","〉"],["〉","〈"],["﹙","﹚"],["﹚","﹙"],["﹛","﹜"],["﹜","﹛"],["﹝","﹞"],["﹞","﹝"],["﹤","﹥"],["﹥","﹤"]],r=["آ","أ","إ","ا"],s=["ﻵ","ﻷ","ﻹ","ﻻ"],o=["ﻶ","ﻸ","ﻺ","ﻼ"],a=["ا","ب","ت","ث","ج","ح","خ","د","ذ","ر","ز","س","ش","ص","ض","ط","ظ","ع","غ","ف","ق","ك","ل","م","ن","ه","و","ي","إ","أ","آ","ة","ى","ل","م","ن","ه","و","ي","إ","أ","آ","ة","ى","ی","ئ","ؤ"],l=["ﺍ","ﺏ","ﺕ","ﺙ","ﺝ","ﺡ","ﺥ","ﺩ","ﺫ","ﺭ","ﺯ","ﺱ","ﺵ","ﺹ","ﺽ","ﻁ","ﻅ","ﻉ","ﻍ","ﻑ","ﻕ","ﻙ","ﻝ","ﻡ","ﻥ","ﻩ","ﻭ","ﻱ","ﺇ","ﺃ","ﺁ","ﺓ","ﻯ","ﯼ","ﺉ","ﺅ","ﹰ","ﹲ","ﹴ","ﹶ","ﹸ","ﹺ","ﹼ","ﹾ","ﺀ","ﺉ","ﺅ"],c=["ﺎ","ﺐ","ﺖ","ﺚ","ﺞ","ﺢ","ﺦ","ﺪ","ﺬ","ﺮ","ﺰ","ﺲ","ﺶ","ﺺ","ﺾ","ﻂ","ﻆ","ﻊ","ﻎ","ﻒ","ﻖ","ﻚ","ﻞ","ﻢ","ﻦ","ﻪ","ﻮ","ﻲ","ﺈ","ﺄ","ﺂ","ﺔ","ﻰ","ﯽ","ﺊ","ﺆ","ﹰ","ﹲ","ﹴ","ﹶ","ﹸ","ﹺ","ﹼ","ﹾ","ﺀ","ﺊ","ﺆ"],u=["ﺎ","ﺒ","ﺘ","ﺜ","ﺠ","ﺤ","ﺨ","ﺪ","ﺬ","ﺮ","ﺰ","ﺴ","ﺸ","ﺼ","ﻀ","ﻄ","ﻈ","ﻌ","ﻐ","ﻔ","ﻘ","ﻜ","ﻠ","ﻤ","ﻨ","ﻬ","ﻮ","ﻴ","ﺈ","ﺄ","ﺂ","ﺔ","ﻰ","ﯿ","ﺌ","ﺆ","ﹱ","ﹲ","ﹴ","ﹷ","ﹹ","ﹻ","ﹽ","ﹿ","ﺀ","ﺌ","ﺆ"],h=["ﺍ","ﺑ","ﺗ","ﺛ","ﺟ","ﺣ","ﺧ","ﺩ","ﺫ","ﺭ","ﺯ","ﺳ","ﺷ","ﺻ","ﺿ","ﻃ","ﻇ","ﻋ","ﻏ","ﻓ","ﻗ","ﻛ","ﻟ","ﻣ","ﻧ","ﻫ","ﻭ","ﻳ","ﺇ","ﺃ","ﺁ","ﺓ","ﻯ","ﯾ","ﺋ","ﺅ","ﹰ","ﹲ","ﹴ","ﹶ","ﹸ","ﹺ","ﹼ","ﹾ","ﺀ","ﺋ","ﺅ"],d=["ء","آ","أ","ؤ","إ","ا","ة","د","ذ","ر","ز","و","ى"],f=["ً","ً","ٌ","؟","ٍ","؟","َ","َ","ُ","ُ","ِ","ِ","ّ","ّ","ْ","ْ","ء","آ","آ","أ","أ","ؤ","ؤ","إ","إ","ئ","ئ","ئ","ئ","ا","ا","ب","ب","ب","ب","ة","ة","ت","ت","ت","ت","ث","ث","ث","ث","ج","ج","ج","ج","ح","ح","ح","ح","خ","خ","خ","خ","د","د","ذ","ذ","ر","ر","ز","ز","س","س","س","س","ش","ش","ش","ش","ص","ص","ص","ص","ض","ض","ض","ض","ط","ط","ط","ط","ظ","ظ","ظ","ظ","ع","ع","ع","ع","غ","غ","غ","غ","ف","ف","ف","ف","ق","ق","ق","ق","ك","ك","ك","ك","ل","ل","ل","ل","م","م","م","م","ن","ن","ن","ن","ه","ه","ه","ه","و","و","ى","ى","ي","ي","ي","ي","ﻵ","ﻶ","ﻷ","ﻸ","ﻹ","ﻺ","ﻻ","ﻼ","؟","؟","؟"],_=["ء","ف"],m=["غ","ي"],p=[[0,3,0,1,0,0,0],[0,3,0,1,2,2,0],[0,3,0,17,2,0,1],[0,3,5,5,4,1,0],[0,3,21,21,4,0,1],[0,3,5,5,4,2,0]],g=[[2,0,1,1,0,1,0],[2,0,1,1,0,2,0],[2,0,2,1,3,2,0],[2,0,2,33,3,1,1]],y=10,x=12,v=18,b=["UBAT_L","UBAT_R","UBAT_EN","UBAT_AN","UBAT_ON","UBAT_B","UBAT_S","UBAT_AL","UBAT_WS","UBAT_CS","UBAT_ES","UBAT_ET","UBAT_NSM","UBAT_LRE","UBAT_RLE","UBAT_PDF","UBAT_LRO","UBAT_RLO","UBAT_BN"],O=[100,0,0,0,0,101,102,103,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,104,4,4,4,0,4,0,4,0,4,4,4,0,0,4,4,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,4,4,0,0,4,4,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0,105,7,7,106,107],S=[[v,v,v,v,v,v,v,v,v,6,5,6,8,5,v,v,v,v,v,v,v,v,v,v,v,v,v,v,5,5,5,6,8,4,4,11,11,11,4,4,4,4,4,y,9,y,9,9,2,2,2,2,2,2,2,2,2,2,9,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,v,v,v,v,v,v,5,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,9,4,11,11,11,11,4,4,4,4,0,4,4,v,4,4,11,11,2,2,4,0,4,4,4,2,0,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,4,4,4,4,4,4,4,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,1,x,1,x,x,1,x,x,1,x,4,4,4,4,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,1,1,1,1,1,4,4,4,4,4,4,4,4,4,4,4],[3,3,3,3,4,4,4,4,7,11,11,7,9,7,4,4,x,x,x,x,x,x,x,x,x,x,x,7,4,4,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,3,3,3,3,3,3,3,3,3,3,11,3,3,7,7,7,x,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,x,x,x,x,x,x,x,3,4,x,x,x,x,x,x,7,7,x,x,4,x,x,x,x,7,7,2,2,2,2,2,2,2,2,2,2,7,7,7,7,7,7],[7,7,7,7,7,7,7,7,7,7,7,7,7,7,4,7,7,x,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,4,4,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,x,x,x,x,x,x,x,x,x,x,x,7,4,4,4,4,4,4,4,4,4,4,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,x,x,x,x,x,x,x,x,x,1,1,4,4,4,4,1,4,4,4,4,4],[8,8,8,8,8,8,8,8,8,8,8,v,v,v,0,1,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,8,5,13,14,15,16,17,9,11,11,11,11,11,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,9,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,8,v,v,v,v,v,4,4,4,4,4,v,v,v,v,v,v,2,0,4,4,2,2,2,2,2,2,y,y,4,4,4,0,2,2,2,2,2,2,2,2,2,2,y,y,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],[0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,4,4,4,4,4,1,x,1,1,1,1,1,1,1,1,1,1,y,1,1,1,1,1,1,1,1,1,1,1,1,1,4,1,1,1,1,1,4,1,4,1,1,4,1,1,4,1,1,1,1,1,1,1,1,1,1,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,x,x,x,x,x,x,x,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,9,4,9,4,4,9,4,4,4,4,4,4,4,4,4,11,4,4,y,y,4,4,4,4,4,11,11,4,4,4,4,4,7,7,7,7,7,4,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,4,4,v],[4,4,4,11,11,11,4,4,4,4,4,y,9,y,9,9,2,2,2,2,2,2,2,2,2,2,9,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,0,0,0,0,0,0,4,4,0,0,0,0,0,0,4,4,0,0,0,0,0,0,4,4,0,0,0,4,4,4,11,11,4,4,4,11,11,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]]
class T{constructor(){this.inputFormat="ILYNN",this.outputFormat="VLNNN",this.sourceToTarget=[],this.targetToSource=[],this.levels=[]}bidiTransform(e,t,i){if(this.sourceToTarget=[],this.targetToSource=[],!e)return""
if(function(e,t,i){W=[],Z=[]
for(let n=0;n<i;n++)e[n]=n,t[n]=n,W[n]=n}(this.sourceToTarget,this.targetToSource,e.length),!this.checkParameters(t,i))return e
t=this.inputFormat,i=this.outputFormat
let n=e
const a=q,u=B(t.charAt(1)),d=B(i.charAt(1)),_=("I"===t.charAt(0)?"L":t.charAt(0))+u,m=("I"===i.charAt(0)?"L":i.charAt(0))+d,p=t.charAt(2)+i.charAt(2)
a.defInFormat=_,a.defOutFormat=m,a.defSwap=p
const g=function e(t,i,n,r,s){const o=function(e,t,i){if(void 0===t.inFormat&&(t.inFormat=i.defInFormat),void 0===t.outFormat&&(t.outFormat=i.defOutFormat),void 0===t.swap&&(t.swap=i.defSwap),t.inFormat===t.outFormat)return t
const n=t.inFormat.substring(0,1),r=t.outFormat.substring(0,1)
let s,o=t.inFormat.substring(1,4),a=t.outFormat.substring(1,4)
return"C"===o.charAt(0)&&(s=C(e),o="ltr"===s||"rtl"===s?s.toUpperCase():"L"===t.inFormat.charAt(2)?"LTR":"RTL",t.inFormat=n+o),"C"===a.charAt(0)&&(s=C(e),"rtl"===s?a="RTL":"ltr"===s?(s=function(e){const t=e.split("")
return t.reverse(),C(t.join(""))}(e),a=s.toUpperCase()):a="L"===t.outFormat.charAt(2)?"LTR":"RTL",t.outFormat=r+a),t}(t,{inFormat:i,outFormat:n,swap:r},s)
if(o.inFormat===o.outFormat)return t
i=o.inFormat,n=o.outFormat,r=o.swap
const a=i.substring(0,1),l=i.substring(1,4),c=n.substring(0,1),u=n.substring(1,4)
if(s.inFormat=i,s.outFormat=n,s.swap=r,"L"===a&&"VLTR"===n){if("LTR"===l)return s.dir=J,w(t,s)
if("RTL"===l)return s.dir=$,w(t,s)}if("V"===a&&"V"===c)return s.dir="RTL"===l?$:J,P(t,s)
if("L"===a&&"VRTL"===n)return"LTR"===l?(s.dir=J,t=w(t,s)):(s.dir=$,t=w(t,s)),P(t)
if("VLTR"===i&&"LLTR"===n)return s.dir=J,w(t,s)
if("V"===a&&"L"===c&&l!==u)return t=P(t),"RTL"===l?e(t,"LLTR","VLTR",r,s):e(t,"LRTL","VRTL",r,s)
if("VRTL"===i&&"LRTL"===n)return e(t,"LRTL","VRTL",r,s)
if("L"===a&&"L"===c){const i=s.swap
return s.swap=i.substr(0,1)+"N","RTL"===l?(s.dir=$,t=w(t,s),s.swap="N"+i.substr(1,2),s.dir=J,t=w(t,s)):(s.dir=J,t=w(t,s),s.swap="N"+i.substr(1,2),t=e(t,"VLTR","LRTL",s.swap,s)),t}return t}(e,_,m,p,a)
let y=!1
return"R"===i.charAt(1)?y=!0:"C"!==i.charAt(1)&&"D"!==i.charAt(1)||(y="rtl"===this.checkContextual(g)),this.sourceToTarget=W,this.targetToSource=function(e){const t=new Array(e.length)
for(let i=0;i<e.length;i++)t[e[i]]=i
return t}(this.sourceToTarget),Y=this.targetToSource,n=t.charAt(3)===i.charAt(3)?g:"S"===i.charAt(3)?function(e,t,i){if(0===t.length)return""
void 0===e&&(e=!0),void 0===i&&(i=!0)
const n=(t=String(t)).split("")
let r=0,a=1,u=n.length
e||(r=n.length-1,a=-1,u=1)
const d=function(e,t,i,n,r){let a=0
const u=[]
let d=0
for(let f=t;f*i<n;f+=i)if(L(e[f])||V(e[f])){if("ل"===e[f]&&j(e,f+i,i,n)){e[f]=G(e[f+i],0===a?s:o),f+=i,U(e,f,i,n),r&&(u[d]=f,d++),a=0
continue}const t=e[f]
1===a?e[f]=A(e,f+i,i,n)?k(e[f]):N(e[f],c):!0===A(e,f+i,i,n)?e[f]=N(e[f],h):e[f]=N(e[f],l),V(t)||(a=1),!0===F(t)&&(a=0)}else a=0
return u}(n,r,a,u,i)
let f=""
for(let t=0;t<n.length;t++)i&&E(d,d.length,t)>-1?(H(Y,t,!e,-1),W.splice(t,1)):f+=n[t]
return f}(y,g,!0):function(e,t,i){if(0===e.length)return""
void 0===i&&(i=!0),void 0===t&&(t=!0)
let n=""
const s=(e=String(e)).split("")
for(let o=0;o<e.length;o++){let a=!1
if(s[o]>="ﹰ"&&s[o]<"\ufeff"){const l=e.charCodeAt(o)
s[o]>="ﻵ"&&s[o]<="ﻼ"?(t?(o>0&&i&&" "===s[o-1]?n=n.substring(0,n.length-1)+"ل":(n+="ل",a=!0),n+=r[(l-65269)/2]):(n+=r[(l-65269)/2],n+="ل",o+1<e.length&&i&&" "===s[o+1]?o++:a=!0),a&&(H(Y,o,!0,1),W.splice(o,0,W[o]))):n+=f[l-65136]}else n+=s[o]}return n}(g,y,!0),this.sourceToTarget=W,this.targetToSource=Y,this.levels=Z,n}_inputFormatSetter(e){if(!Q.test(e))throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!")
this.inputFormat=e}_outputFormatSetter(e){if(!Q.test(e))throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!")
this.outputFormat=e}checkParameters(e,t){return e?this._inputFormatSetter(e):e=this.inputFormat,t?this._outputFormatSetter(t):t=this.outputFormat,e!==t}checkContextual(e){let t=C(e)
if("ltr"!==t&&"rtl"!==t){try{t=document.dir.toLowerCase()}catch(e){}"ltr"!==t&&"rtl"!==t&&(t="ltr")}return t}hasBidiChar(e){return ee.test(e)}}function C(e){const t=/[A-Za-z\u05d0-\u065f\u066a-\u06ef\u06fa-\u07ff\ufb1d-\ufdff\ufe70-\ufefc]/.exec(e)
return t?t[0]<="z"?"ltr":"rtl":""}function w(e,t){const i=e.split(""),n=[]
return M(i,n,t),function(e,t,i){if(0!==i.hiLevel&&i.swap.substr(0,1)!==i.swap.substr(1,2))for(let i=0;i<e.length;i++)1===t[i]&&(e[i]=z(e[i]))}(i,n,t),R(2,i,n,t),R(1,i,n,t),Z=n,i.join("")}function M(e,t,i){const n=e.length,r=i.dir?g:p
let s=0,o=-1
const a=[],l=[]
i.hiLevel=i.dir,i.lastArabic=!1,i.hasUbatAl=!1,i.hasUbatB=!1,i.hasUbatS=!1
for(let t=0;t<n;t++)a[t]=I(e[t])
for(let c=0;c<n;c++){const n=s,u=D(e,a,l,c,i)
l[c]=u,s=r[n][u]
const h=240&s
s&=15
const d=r[s][X]
if(t[c]=d,h>0)if(16===h){for(let e=o;e<c;e++)t[e]=1
o=-1}else o=-1
if(r[s][K])-1===o&&(o=c)
else if(o>-1){for(let e=o;e<c;e++)t[e]=d
o=-1}5===a[c]&&(t[c]=0),i.hiLevel|=d}i.hasUbatS&&function(e,t,i,n){for(let r=0;r<i;r++)if(6===e[r]){t[r]=n.dir
for(let i=r-1;i>=0&&8===e[i];i--)t[i]=n.dir}}(a,t,n,i)}function I(e){const t=e.charCodeAt(0),i=O[t>>8]
return i<100?i:S[i-100][255&t]}function P(e,t){const i=e.split("")
if(t){const e=[]
M(i,e,t),Z=e}return i.reverse(),W.reverse(),i.join("")}function E(e,t,i){for(let n=0;n<t;n++)if(e[n]===i)return n
return-1}function L(e){for(let t=0;t<_.length;t++)if(e>=_[t]&&e<=m[t])return!0
return!1}function A(e,t,i,n){for(;t*i<n&&V(e[t]);)t+=i
return!!(t*i<n&&L(e[t]))}function j(e,t,i,n){for(;t*i<n&&V(e[t]);)t+=i
let s=" "
if(!(t*i<n))return!1
s=e[t]
for(let e=0;e<r.length;e++)if(r[e]===s)return!0
return!1}function R(e,t,i,n){if(n.hiLevel<e)return
if(1===e&&n.dir===$&&!n.hasUbatB)return t.reverse(),void W.reverse()
const r=t.length
let s,o,a,l,c,u=0
for(;u<r;){if(i[u]>=e){for(s=u+1;s<r&&i[s]>=e;)s++
for(o=u,a=s-1;o<a;o++,a--)l=t[o],t[o]=t[a],t[a]=l,c=W[o],W[o]=W[a],W[a]=c
u=s}u++}}function D(e,t,i,n,r){const s=t[n]
return{UBAT_L:()=>(r.lastArabic=!1,0),UBAT_R:()=>(r.lastArabic=!1,1),UBAT_ON:()=>4,UBAT_AN:()=>3,UBAT_EN:()=>r.lastArabic?3:2,UBAT_AL:()=>(r.lastArabic=!0,r.hasUbatAl=!0,1),UBAT_WS:()=>4,UBAT_CS:()=>{let e,s
return n<1||n+1>=t.length||2!==(e=i[n-1])&&3!==e||2!==(s=t[n+1])&&3!==s?4:(r.lastArabic&&(s=3),s===e?s:4)},UBAT_ES:()=>2===(n>0?i[n-1]:5)&&n+1<t.length&&2===t[n+1]?2:4,UBAT_ET:()=>{if(n>0&&2===i[n-1])return 2
if(r.lastArabic)return 4
let e=n+1
const s=t.length
for(;e<s&&11===t[e];)e++
return e<s&&2===t[e]?2:4},UBAT_NSM:()=>{if("VLTR"===r.inFormat){const i=t.length
let r=n+1
for(;r<i&&t[r]===x;)r++
if(r<i){const i=e[n].charCodeAt[0],s=i>=1425&&i<=2303||64286===i,o=t[r]
if(s&&(1===o||7===o))return 1}}return n<1||5===t[n-1]?4:i[n-1]},UBAT_B:()=>(r.lastArabic=!0,r.hasUbatB=!0,r.dir),UBAT_S:()=>(r.hasUbatS=!0,4),UBAT_LRE:()=>(r.lastArabic=!1,4),UBAT_RLE:()=>(r.lastArabic=!1,4),UBAT_LRO:()=>(r.lastArabic=!1,4),UBAT_RLO:()=>(r.lastArabic=!1,4),UBAT_PDF:()=>(r.lastArabic=!1,4),UBAT_BN:()=>4}[b[s]]()}function z(e){let t,i=0,r=n.length-1
for(;i<=r;)if(t=Math.floor((i+r)/2),e<n[t][0])r=t-1
else{if(!(e>n[t][0]))return n[t][1]
i=t+1}return e}function F(e){for(let t=0;t<d.length;t++)if(d[t]===e)return!0
return!1}function k(e){for(let t=0;t<a.length;t++)if(e===a[t])return u[t]
return e}function N(e,t){for(let i=0;i<a.length;i++)if(e===a[i])return t[i]
return e}function V(e){return e>="ً"&&e<="ٕ"}function B(e){return"L"===e?"LTR":"R"===e?"RTL":"C"===e?"CLR":"D"===e?"CRL":""}function U(e,t,i,n){for(;t*i<n&&V(e[t]);)t+=i
return t*i<n&&(e[t]=" ",!0)}function G(e,t){for(let i=0;i<r.length;i++)if(e===r[i])return t[i]
return e}function H(e,t,i,n){for(let r=0;r<e.length;r++)(e[r]>t||!i&&e[r]===t)&&(e[r]+=n)}let W=[],Y=[],Z=[]
const q={dir:0,defInFormat:"LLTR",defoutFormat:"VLTR",defSwap:"YN",inFormat:"LLTR",outFormat:"VLTR",swap:"YN",hiLevel:0,lastArabic:!1,hasUbatAl:!1,hasBlockSep:!1,hasSegSep:!1,defOutFormat:""},X=5,K=6,J=0,$=1,Q=/^[(I|V)][(L|R|C|D)][(Y|N)][(S|N)][N]$/,ee=/[\u0591-\u06ff\ufb1d-\ufefc]/},1744:function(e,t,i){"use strict"
i.d(t,"a",(function(){return c}))
var n=i(1215),r=i(1192),s=i(1109),o=i(1151),a=i(1e3),l=i(1554)
class c extends l.a{constructor(e,t,i,n){super(e,t,i,n,a.Z,a.Z)}destroy(){super.destroy(),this._transforms&&c.TransformCache.release(this.key.hash)}setTransform(e){const t=this.resolution/e.resolution,i=this.transforms.tileMat3,[o,a]=e.toScreenNoRotation([0,0],[this.x,this.y]),l=this.width/this.rangeX*t,c=this.height/this.rangeY*t
Object(s.o)(i,l,0,0,0,c,0,o,a,1),Object(s.l)(this.transforms.dvs,e.displayViewMat3,i)
const u=this.transforms.labelMat2d,h=window.devicePixelRatio,d=Object(n.d)(Object(r.a)(),l*h,0,0,c*h,o*h,a*h)
Object(n.g)(u,e.viewMat2d,d)}_createTransforms(){return c.TransformCache.acquire(this.key.hash)}}c.TransformCache=new class{acquire(e){return{refCount:1,version:-1,labelMat2d:Object(r.a)(),tileMat3:Object(o.b)(),dvs:Object(o.b)()}}release(e){}}},1745:function(e,t,i){"use strict"
i.d(t,"a",(function(){return o}))
var n=i(23),r=i(1e3)
const s=2147483647
class o{constructor(e){this._head=e,this._cursor=e}static from(e,t=0,i=e.byteLength/a.BYTES_PER_RECORD-t){const n=new a(new Int32Array(e,t*a.BYTES_PER_RECORD,i*a.ELEMENTS_PER_RECORD))
return new o(n)}size(){let e=this._cursor,t=0
for(;e;)t+=e.size(),e=e._link
return t}get id(){return this._cursor.id}set id(e){this._cursor.id=e}get materialKey(){return this._cursor.materialKey}set materialKey(e){this._cursor.materialKey=e}get insertAfter(){return this._cursor.insertAfter}get indexFrom(){return this._cursor.indexFrom}set indexFrom(e){this._cursor.indexFrom=e}get indexCount(){return this._cursor.indexCount}set indexCount(e){this._cursor.indexCount=e}get vertexFrom(){return this._cursor.vertexFrom}set vertexFrom(e){this._cursor.vertexFrom=e}get vertexCount(){return this._cursor.vertexCount}set vertexCount(e){this._cursor.vertexCount=e}get sortKey(){return this._cursor.sortKey}set sortKey(e){this._cursor.sortKey=e}get index(){return this._cursor._indexStart+this._cursor._index}seekIndex(e){let t=e
for(this._cursor=this._head;this._cursor;){const e=this._cursor.size()
if(t<e)return this._cursor._index=t,!0
t-=e,this._cursor=this._cursor._link}return!1}forEach(e){const t=this.getCursor()
for(;t.next();)e(t)}link(e){if(!this._head)return void(this._head=e._head)
let t=this._head
for(;t._link;)t=t._link
t._link=e._head,t._link._indexStart=t._indexStart+t.size()}getCursor(){return this.copy()}lookup(e){for(this._cursor=this._head;this._cursor&&!this._cursor.lookup(e);){if(!this._cursor._link)return!1
this._cursor=this._cursor._link}return!!this._cursor}copy(){var e
const t=new o(null==(e=this._head)?void 0:e.copy())
if(!t._head)return t
let i=t._head,n=t._head._link
for(;n;)i._link=n.copy(),i=n,n=i._link
return t}next(){return!!this._cursor&&(!!this._cursor.next()||!!this._cursor._link&&(this._cursor=this._cursor._link,this.next()))}peekId(){var e
return null!=(e=this._cursor.peekId())?e:this._cursor._link.peekId()}delete(e){let t=this._head,i=null
for(;t;){if(t.delete(e))return t.isEmpty()&&(Object(n.l)(i)&&(i._link=t._link),t===this._head&&(this._head=t._link),t===this._cursor&&(this._cursor=t._link)),!0
i=t,t=t._link}return!1}}o.ELEMENTS_PER_RECORD=r.r,o.BYTES_PER_RECORD=o.ELEMENTS_PER_RECORD*Int32Array.BYTES_PER_ELEMENT
class a{constructor(e){this._link=null,this._index=-1,this._indexStart=0,this._packedRecordsF32=null,this._deletedCount=0,this._offsets={instance:null},this._packedRecords=e}static from(e,t=0,i=e.byteLength/this.BYTES_PER_RECORD-t){return new a(new Int32Array(e,t*this.BYTES_PER_RECORD,i*this.ELEMENTS_PER_RECORD))}delete(e){const t=this._index,i=this.lookup(e)
if(i)for(this.id=s,++this._deletedCount;this.next()&&this.id===e;)this.id=s,++this._deletedCount
return this._index=t,i}isEmpty(){return this._deletedCount===this.size()}link(e){this._link?this._link.link(e):this._link=e}lookup(e){if(Object(n.k)(this._offsets.instance)){this._offsets.instance=new Map
const e=this.copy()
e._index=-1
let t=0
for(;e.next();)e.id!==t&&(this._offsets.instance.set(e.id,e._index),t=e.id)}if(!this._offsets.instance.has(e))return!1
const t=this._index
return this._index=this._offsets.instance.get(e),this.id!==s||(this._index=t,!1)}get id(){return this._packedRecords[this._index*a.ELEMENTS_PER_RECORD]}set id(e){this._packedRecords[this._index*a.ELEMENTS_PER_RECORD]=e}get materialKey(){return this._packedRecords[this._index*a.ELEMENTS_PER_RECORD+1]}set materialKey(e){this._packedRecords[this._index*a.ELEMENTS_PER_RECORD+1]=e}get insertAfter(){return this._packedRecords[this._index*a.ELEMENTS_PER_RECORD+2]}get indexFrom(){return this._packedRecords[this._index*a.ELEMENTS_PER_RECORD+3]}set indexFrom(e){this._packedRecords[this._index*a.ELEMENTS_PER_RECORD+3]=e}get indexCount(){return this._packedRecords[this._index*a.ELEMENTS_PER_RECORD+4]}set indexCount(e){this._packedRecords[this._index*a.ELEMENTS_PER_RECORD+4]=e}get vertexFrom(){return this._packedRecords[this._index*a.ELEMENTS_PER_RECORD+5]}set vertexFrom(e){this._packedRecords[this._index*a.ELEMENTS_PER_RECORD+5]=e}get vertexCount(){return this._packedRecords[this._index*a.ELEMENTS_PER_RECORD+6]}set vertexCount(e){this._packedRecords[this._index*a.ELEMENTS_PER_RECORD+6]=e}get sortKey(){return this._packedRecordsF32||(this._packedRecordsF32=new Float32Array(this._packedRecords.buffer)),this._packedRecordsF32[this._index*a.ELEMENTS_PER_RECORD+7]}set sortKey(e){this._packedRecordsF32||(this._packedRecordsF32=new Float32Array(this._packedRecords.buffer)),this._packedRecordsF32[this._index*a.ELEMENTS_PER_RECORD+7]=e}get index(){return this._index}size(){return this._packedRecords.length/a.ELEMENTS_PER_RECORD}next(){for(;++this._index<this.size()&&this.id===s;);return this._index<this.size()}peekId(){const e=(this._index+1)*a.ELEMENTS_PER_RECORD
return e>=this._packedRecords.length?0:this._packedRecords[e]}getCursor(){return this.copy()}copy(){const e=new a(this._packedRecords)
return e._indexStart=this._indexStart,e._link=this._link,e._index=this._index,e._offsets=this._offsets,e._deletedCount=this._deletedCount,e}}a.ELEMENTS_PER_RECORD=r.r,a.BYTES_PER_RECORD=a.ELEMENTS_PER_RECORD*Int32Array.BYTES_PER_ELEMENT},1746:function(e,t,i){"use strict"
i.d(t,"a",(function(){return h}))
var n=i(446),r=i(233),s=i(1189),o=i(23),a=i(1010),l=i(1391),c=i(1356)
const u=r.a.getLogger("esri/views/2d/engine/webgl/util/Matcher")
async function h(e,t,i,n){switch(e.type){case"simple":case"heatmap":return d.fromBasicRenderer(e,t,i,n)
case"map":return m.fromUVRenderer(e,t,i,n)
case"interval":return _.fromCBRenderer(e,t,i,n)
case"dictionary":return y.fromDictionaryRenderer(e,t,i,n)
case"pie-chart":return f.fromPieChartRenderer(e,t,i,n)
case"subtype":return f.fromSubtypes(e,t,i,n)}}class d{constructor(){this.type="feature",this._defaultResult=null}static async fromBasicRenderer(e,t,i,n){const r=new d
if(e.symbol){const s=await Object(c.b)(e.symbol,i,n),o=t.createTemplateGroup(s,null)
r.setDefault(o)}return r}static async fromPieChartRenderer(e,t,i,n){const r=new d
if(e.markerSymbol){const s=await Object(c.b)(e.markerSymbol,i,n)
let o
e.fillSymbol&&(o=await Object(c.b)(e.fillSymbol,i,n))
const a=t.createTemplateGroup(s,o)
r.setDefault(a)}return r}size(){return 1}getDefault(){return this._defaultResult}setDefault(e){this._defaultResult=e}match(e,t,i,n,r){return this.getDefault()}async analyze(e,t,i,n,r,s){return null}}class f extends d{constructor(e,t){super(),this._subMatchers=e,this._subtypeField=t}static async fromSubtypes(e,t,i,n){const r=new Map,s=[]
for(const o in e.renderers){const a=parseInt(o,10),l=h(e.renderers[o],t,i,n).then(e=>r.set(a,e))
s.push(l)}return await Promise.all(s),new f(r,e.subtypeField)}match(e,t,i,n,r){const s=t.readAttribute(this._subtypeField),o=this._subMatchers.get(s)
return o?o.match(e,t,i,n,r):null}}class _ extends d{constructor(e,t,i,n){super(),this.type="interval",this._intervals=[],this._isMaxInclusive=t,this._fieldIndex=n,this._field=e,this._normalizationInfo=i}static async fromCBRenderer(e,t,i,n){const{isMaxInclusive:r,normalizationField:s,normalizationTotal:o,normalizationType:a}=e,l=e.field,u=new _(l,r,{normalizationField:s,normalizationTotal:o,normalizationType:a},e.fieldIndex),h=await Object(c.b)(e.backgroundFillSymbol,i,n)
await Promise.all(e.intervals.map(async e=>{const r=await Object(c.b)(e.symbol,i,n),s=await t.createTemplateGroup(r,h),o={min:e.min,max:e.max}
u.add(o,s)}))
const d=await Object(c.b)(e.defaultSymbol,i,n)
if(d){const e=await t.createTemplateGroup(d,h)
u.setDefault(e)}return u}add(e,t){this._intervals.push({interval:e,result:t}),this._intervals.sort((e,t)=>e.interval.min-t.interval.min)}size(){return super.size()+this._intervals.length}match(e,t,i,n,r){if(null==this._fieldIndex&&!this._field)return this.getDefault()
const s=null!=this._fieldIndex?t.getComputedNumericAtIndex(this._fieldIndex):this._getValueFromField(t)
if(null==s||isNaN(s)||s===1/0||s===-1/0)return this.getDefault()
for(let e=0;e<this._intervals.length;e++){const{interval:t,result:i}=this._intervals[e],n=s>=t.min,r=this._isMaxInclusive?s<=t.max:s<t.max
if(n&&r)return i}return this.getDefault()}_needsNormalization(){const e=this._normalizationInfo
return e&&(e.normalizationField||e.normalizationTotal||e.normalizationType)}_getValueFromField(e){var t
const i=e.readAttribute(this._field)
if(!this._needsNormalization()||null==i)return i
const{normalizationField:n,normalizationTotal:r,normalizationType:s}=this._normalizationInfo,o=null!=(t=e.readAttribute(n))?t:1
if(s)switch(s){case"esriNormalizeByField":return o?i/o:void 0
case"esriNormalizeByLog":return Math.log(i)*Math.LOG10E
case"esriNormalizeByPercentOfTotal":return i/r*100
default:return void u.error("Found unknown normalization type: "+s)}else u.error("Normalization is required, but no type was set!")}}class m extends d{constructor(e,t,i){super(),this.type="map",this._nullResult=null,this._resultsMap=new Map,this._fields=[],this._fieldsIndex=i,this._fields=e,this._seperator=t||""}static async fromUVRenderer(e,t,i,n){const r=e.fieldDelimiter,s=[e.field]
e.field2&&s.push(e.field2),e.field3&&s.push(e.field3)
const o=await Object(c.b)(e.backgroundFillSymbol,i,n),a=new m(s,r,e.fieldIndex)
await Promise.all(e.map.map(async(e,r)=>{const s=await Object(c.b)(e.symbol,i,n),l=r+1,u=await t.createTemplateGroup(s,o,l)
"<Null>"===e.value?a.setNullResult(u):a.add(e.value,u)}))
const l=await Object(c.b)(e.defaultSymbol,i,n)
if(l){const e=Number.MAX_SAFE_INTEGER,i=await t.createTemplateGroup(l,o,e)
a.setDefault(i)}return a}setNullResult(e){this._nullResult=e}add(e,t){this._resultsMap.set(e.toString(),t)}size(){return super.size()+this._resultsMap.size}match(e,t,i,n,r){if(null==this._fieldsIndex&&!this._fields)return this.getDefault()
const s=null!=this._fieldsIndex?t.getComputedStringAtIndex(this._fieldsIndex):this._getValueFromFields(t)
if(null!==this._nullResult&&(null==s||""===s||"<Null>"===s))return this._nullResult
if(null==s)return this.getDefault()
const o=s.toString()
return this._resultsMap.has(o)?this._resultsMap.get(o):this.getDefault()}_getValueFromFields(e){const t=[]
for(const i of this._fields){const n=e.readAttribute(i)
null==n||""===n?t.push("<Null>"):t.push(n)}return t.join(this._seperator)}}let p
async function g(){return p||(p=i.e(772).then(i.bind(null,1340))),p}class y extends d{constructor(e,t,i,n,r,o){super(),this.type="dictionary",this._groupIdCache=new s.a(100),this._loader=e,this._fieldMap=e.fieldMap,this._symbolFields=e.getSymbolFields(),this._templates=t,this._info=i,this._scaleFn=n,this._schemaUtilsModule=r,this._symbolOptions=o}static async fromDictionaryRenderer(e,t,n,r){const[{DictionaryLoader:s},o]=await Promise.all([i.e(381).then(i.bind(null,1254)),g()]),c=new s(e.url,e.config,e.fieldMap)
await c.fetchResources({spatialReference:n.spatialReference,fields:n.fields})
const u=await async function(e,t){const i=e||1
if("number"==typeof i)return(e,t,n)=>i
const n=await Object(a.d)(i,t.spatialReference,t.fields)
return(e,i,r)=>Object(l.a)(n,e,{$view:r},t.geometryType,i)||1}(e.scaleExpression,n)
return new y(c,t,n,u,o,e.symbolOptions)}async _analyzeFeature(e,t,i,r,s){const o=e.readLegacyFeature(),a=this._scaleFn(o,i,r),l=this._attributeHash(o)+"-"+a,h=this._groupIdCache.get(l)
if(h)return h
const d={...r,spatialReference:this._info.spatialReference,abortOptions:s,fields:this._info.fields},f=await this._loader.getSymbolAsync(o,d),_=this._schemaUtilsModule.createSymbolSchema(f,this._symbolOptions),m=Object(c.b)(_,this._info,t,s).then(e=>{if("expanded-cim"!==(null==e?void 0:e.type))return u.error(new n.a("mapview-bad-type",`Found unexpected type ${null==e?void 0:e.type} in dictionary response`)),null
e.hash+="-"+a
for(const t of e.layers)t.scaleFactor=a,t.templateHash+="-"+a
return this._templates.createTemplateGroup(e,null)})
return this._groupIdCache.put(l,m,1),m}async analyze(e,t,i,n,r,s){const a=t.getCursor(),l=[]
for(;a.next();)l.push(this._analyzeFeature(a,i,n,r,s))
return Promise.all(l).then(e=>e.filter(o.l))}match(e,t,i,n,r){return null}_attributeHash(e){let t=""
for(const n of this._symbolFields){var i
const r=null==(i=this._fieldMap)?void 0:i[n]
r&&(t+=e.attributes[r]+"-")}return t}}},1747:function(e,t,i){"use strict"
i.d(t,"a",(function(){return O}))
var n=i(446),r=i(235),s=i(233),o=i(991),a=i(23),l=i(973),c=i(1143),u=i(1184),h=i(1e3),d=i(1269),f=i(1022),_=i(1572),m=i(1706),p=i(984)
const g=s.a.getLogger("esri.views.layers.2d.features.support.AttributeStore"),y=Object(_.b)(_.a,g),x={sharedArrayBuffer:Object(r.a)("esri-shared-array-buffer"),atomics:Object(r.a)("esri-atomics")}
function v(e,t){return i=>t(e(i))}class b{constructor(e,t,i,n){this.size=0,this.texelSize=4,this.dirtyStart=0,this.dirtyEnd=0
const{pixelType:r,layout:s,textureOnly:o}=n
this.textureOnly=o||!1,this.pixelType=r,this._ctype=t,this.layout=s,this._resetRange(),this._shared=e,this.size=i,o||(this.data=this._initData(r,i,e,t))}get buffer(){return Object(a.b)(this.data,e=>e.buffer)}unsetComponentAllTexels(e,t){const i=Object(a.u)(this.data)
for(let n=0;n<this.size*this.size;n++)i[n*this.texelSize+e]&=~t
this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1}setComponentAllTexels(e,t){const i=Object(a.u)(this.data)
for(let n=0;n<this.size*this.size;n++)i[n*this.texelSize+e]|=255&t
this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1}setComponent(e,t,i){const n=Object(a.u)(this.data)
for(const r of i)n[r*this.texelSize+e]|=t,this.dirtyStart=Math.min(this.dirtyStart,r),this.dirtyEnd=Math.max(this.dirtyEnd,r)}setComponentTexel(e,t,i){Object(a.u)(this.data)[i*this.texelSize+e]|=t,this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,i)}unsetComponentTexel(e,t,i){Object(a.u)(this.data)[i*this.texelSize+e]&=~t,this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,i)}getData(e,t){const i=Object(d.f)(e)
return Object(a.u)(this.data)[i*this.texelSize+t]}setData(e,t,i){const n=Object(d.f)(e),r=1<<t
0!=(this.layout&r)?Object(a.k)(this.data)||(this.data[n*this.texelSize+t]=i,this.dirtyStart=Math.min(this.dirtyStart,n),this.dirtyEnd=Math.max(this.dirtyEnd,n)):g.error("mapview-attributes-store","Tried to set a value for a texel's readonly component")}lock(){this.pixelType===p.q.UNSIGNED_BYTE&&this._shared&&x.atomics&&"local"!==this._ctype&&Atomics.store(this.data,0,1)}unlock(){this.pixelType===p.q.UNSIGNED_BYTE&&this._shared&&x.atomics&&"local"!==this._ctype&&Atomics.store(this.data,0,0)}expand(e){if(this.size=e,!this.textureOnly){const t=this._initData(this.pixelType,e,this._shared,this._ctype),i=Object(a.u)(this.data)
t.set(i),this.data=t}}toMessage(){const e=this.dirtyStart,t=this.dirtyEnd,i=this.texelSize
if(e>t)return null
this._resetRange()
const n=!(this._shared||"local"===this._ctype),r=this.pixelType,s=this.layout,o=Object(a.u)(this.data)
return{start:e,end:t,data:n&&o.slice(e*i,(t+1)*i)||null,pixelType:r,layout:s}}_initData(e,t,i,n){const r=i&&"local"!==n?SharedArrayBuffer:ArrayBuffer,s=Object(f.l)(e),o=new s(new r(t*t*4*s.BYTES_PER_ELEMENT))
for(let e=0;e<o.length;e+=4)o[e+1]=255
return o}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}}class O{constructor(e,t,i=(()=>{})){this._client=e,this.config=t,this._notifyChange=i,this._blocks=new Array,this._filters=new Array(h.z),this._attributeComputeInfo=null,this._targetType=0,this._abortController=new AbortController,this._hasScaleExpr=!1,this._size=32,this._nextUpdate=null,this._currUpdate=null,this._idsToHighlight=new Set
const n=t.supportsTextureFloat?p.q.FLOAT:p.q.UNSIGNED_BYTE
y(`Creating AttributeStore ${x.sharedArrayBuffer?"with":"without"} shared memory`),this._blockDescriptors=[{pixelType:p.q.UNSIGNED_BYTE,layout:1},{pixelType:p.q.UNSIGNED_BYTE,layout:15,textureOnly:!0},{pixelType:p.q.UNSIGNED_BYTE,layout:15,textureOnly:!0},{pixelType:n,layout:15},{pixelType:n,layout:15},{pixelType:n,layout:15},{pixelType:n,layout:15}],this._blocks=this._blockDescriptors.map(()=>null)}destroy(){this._abortController.abort()}get hasScaleExpr(){return this._hasScaleExpr}get _signal(){return this._abortController.signal}get hasHighlight(){return this._idsToHighlight.size>0}isUpdating(){return!!this._currUpdate||!!this._nextUpdate}update(e,t){this.config=t
const i=t.schema.processors[0].storage,n=Object(c.a)(this._schema,i)
if((e.targets.feature||e.targets.aggregate)&&(e.storage.data=!0),n&&(Object(r.a)("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:",n),e.storage.data=!0,this._schema=i,this._attributeComputeInfo=null,!Object(a.k)(i))){switch(i.target){case"feature":this._targetType=d.c
break
case"aggregate":this._targetType=d.b}if("subtype"===i.type){this._attributeComputeInfo={isSubtype:!0,subtypeField:i.subtypeField,map:new Map}
for(const e in i.mapping){const t=i.mapping[e]
if(Object(a.l)(t)&&Object(a.l)(t.vvMapping))for(const i of t.vvMapping)this._bindAttribute(i,parseInt(e,10))}}else{if(this._attributeComputeInfo={isSubtype:!1,map:new Map},Object(a.l)(i.vvMapping))for(const e of i.vvMapping)this._bindAttribute(e)
if(Object(a.l)(i.attributeMapping))for(const e of i.attributeMapping)this._bindAttribute(e)}}}onTileData(e,t){if(Object(a.k)(t.addOrUpdate))return
const i=t.addOrUpdate.getCursor()
for(;i.next();){const e=i.getDisplayId()
this.setAttributeData(e,i)}}async setHighlight(e,t){const i=this._getBlock(0),n=t.map(e=>Object(d.f)(e))
i.lock(),i.unsetComponentAllTexels(0,1),i.setComponent(0,1,n),i.unlock(),this._idsToHighlight.clear()
for(const t of e)this._idsToHighlight.add(t)
await this.sendUpdates()}async updateFilters(e,t,i){const{service:n,spatialReference:s}=i,{filters:o}=t,a=o.map((e,t)=>this._updateFilter(e,t,n,s));(await Promise.all(a)).some(e=>e)&&(e.storage.filters=!0,Object(r.a)("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:","Filters changed"))}setData(e,t,i,n){const r=Object(d.f)(e)
this._ensureSizeForTexel(r),this._getBlock(t).setData(e,i,n)}getData(e,t,i){return this._getBlock(t).getData(e,i)}getHighlightFlag(e){return this._idsToHighlight.has(e)?h.w:0}unsetAttributeData(e){const t=Object(d.f)(e)
this._getBlock(0).setData(t,0,0)}setAttributeData(e,t){const i=Object(d.f)(e)
if(this._ensureSizeForTexel(i),this._getBlock(0).setData(i,0,this.getFilterFlags(t)),this._targetType!==Object(d.g)(e))return
const n=this._attributeComputeInfo,r=this.config.supportsTextureFloat?1:2
let s=null
n&&(s=n.isSubtype?n.map.get(t.readAttribute(n.subtypeField)):n.map,s&&s.size&&s.forEach((e,n)=>{const s=n*r%4,a=Math.floor(n*r/4),l=this._getBlock(a+h.e),c=e(t)
if(this.config.supportsTextureFloat)l.setData(i,s,c)
else if(c===h.B)l.setData(i,s,255),l.setData(i,s+1,255)
else{const e=Object(o.f)(Math.round(c),-32767,32766)+32768,t=255&e,n=(65280&e)>>8
l.setData(i,s,t),l.setData(i,s+1,n)}}))}sendUpdates(){if(Object(r.a)("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate"),this._notifyChange(),this._nextUpdate)return this._nextUpdate.promise
if(this._currUpdate)return this._nextUpdate=Object(l.e)(),this._nextUpdate.promise
const e={blocks:this._blocks.map(e=>Object(a.l)(e)?e.toMessage():null)}
return this._currUpdate=this._createResources().then(()=>{const t=()=>{if(this._currUpdate=null,this._nextUpdate){const e=this._nextUpdate
this._nextUpdate=null,this.sendUpdates().then(()=>e.resolve())}else Object(r.a)("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate::No additional updates queued")
this._notifyChange()}
Object(r.a)("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate::client.update")
const i=this._client.update(e,this._signal).then(t).catch(t)
return this._client.render(this._signal),i}).catch(e=>{if(Object(l.j)(e))return this._createResourcesPromise=null,this._createResources()
this._notifyChange(),g.error(new n.a("mapview-attribute-store","Encountered an error during client update",e))}),this._currUpdate}_ensureSizeForTexel(e){for(;e>=this._size*this._size;)if(this._expand())return}_bindAttribute(e,t){let i
if(null!=e.fieldIndex)e.normalizationField&&g.warn("mapview-arcade","Ignoring normalizationField specified with an arcade expression which is not supported."),i=t=>t.getComputedNumericAtIndex(e.fieldIndex)
else{if(!e.field)return
i=function(){const{normalizationField:t}=e
return t?i=>{const n=i.readAttribute(t)
return n?i.readAttribute(e.field)/n:null}:t=>t.readAttribute(e.field)}()}const{valueRepresentation:n}=e
n&&(i=v(i,e=>Object(m.b)(e,n)))
const r=e=>null===e||isNaN(e)||e===1/0||e===-1/0?h.B:e,s=this._attributeComputeInfo
if(s.isSubtype){var o
const n=null!=(o=s.map.get(t))?o:new Map
n.set(e.binding,v(i,r)),s.map.set(t,n)}else s.map.set(e.binding,v(i,r))}_createResources(){if(Object(a.l)(this._createResourcesPromise))return this._createResourcesPromise
this._getBlock(h.a),this._getBlock(h.d),y("Initializing AttributeStore")
const e={shared:x.sharedArrayBuffer&&!("local"===this._client.type),size:this._size,blocks:Object(a.m)(this._blocks,e=>({textureOnly:e.textureOnly,buffer:e.buffer,pixelType:e.pixelType}))},t=this._client.initialize(e,this._signal).catch(e=>{Object(l.j)(e)?this._createResourcesPromise=null:g.error(new n.a("mapview-attribute-store","Encountered an error during client initialization",e))})
return this._createResourcesPromise=t,t.then(()=>Object(a.k)(this._createResourcesPromise)?this._createResources():void 0),t}_getBlock(e){const t=this._blocks[e]
if(Object(a.l)(t))return t
y("Initializing AttributeBlock at index "+e)
const i=x.sharedArrayBuffer,n=this._client.type,r=new b(i,n,this._size,this._blockDescriptors[e])
return this._blocks[e]=r,this._createResourcesPromise=null,r}_expand(){if(this._size<this.config.maxTextureSize){const e=this._size<<=1
return y("Expanding block size to",e,this._blocks),Object(a.i)(this._blocks,t=>t.expand(e)),this._createResourcesPromise=null,this._size=e,0}return g.error(new n.a("mapview-limitations","Maximum number of onscreen features exceeded.")),-1}async _updateFilter(e,t,i,n){const r=this._filters[t],s=Object(a.l)(r)&&r.hash
if(!r&&!e)return!1
if(s===JSON.stringify(e))return!1
if(Object(a.k)(e)){if(!r)return!1
const e=1<<t+1,i=this._getBlock(0)
return this._filters[t]=null,i.setComponentAllTexels(0,e),this.sendUpdates(),!0}const o=await this._getFilter(t,i)
return await o.update(e,n),!0}async _getFilter(e,t){const n=this._filters[e]
if(Object(a.l)(n))return n
const{default:r}=await i.e(241).then(i.bind(null,2017)),s=new r({geometryType:t.geometryType,hasM:!1,hasZ:!1,timeInfo:t.timeInfo,fieldsIndex:new u.a(t.fields)})
return this._filters[e]=s,s}isVisible(e){return!!(2&this._getBlock(0).getData(e,0))}getFilterFlags(e){let t=0
const i=Object(d.e)(e.getDisplayId())
for(let n=0;n<this._filters.length;n++){const r=!!(i&1<<n),s=this._filters[n]
t|=(!r||Object(a.k)(s)||s.check(e)?1:0)<<n}let n=0
if(this._idsToHighlight.size){const t=e.getObjectId()
n=this.getHighlightFlag(t)}return t<<1|n}}},1748:function(e,t,i){"use strict"
i.d(t,"a",(function(){return a}))
var n=i(968),r=i(1063),s=i(970),o=(i(971),i(445),i(969))
const a=e=>{let t=class extends(Object(r.b)(e)){constructor(){super(...arguments),this.graphics=null,this.renderer=null}}
return Object(n.a)([Object(s.b)()],t.prototype,"graphics",void 0),Object(n.a)([Object(s.b)()],t.prototype,"renderer",void 0),Object(n.a)([Object(s.b)()],t.prototype,"updating",void 0),Object(n.a)([Object(s.b)()],t.prototype,"view",void 0),t=Object(n.a)([Object(o.a)("esri.views.layers.GraphicsView")],t),t}},1753:function(e,t,i){"use strict"
i.d(t,"a",(function(){return Ge}))
var n=i(968),r=i(975),s=i(1304),o=i(1025),a=i(235),l=i(23),c=i(973),u=i(978),h=i(970),d=(i(971),i(445),i(969)),f=i(769),_=i(996),m=i(1066),p=i(983),g=i(1671),y=i(988),x=i(1525),v=i(1350),b=i(1268),O=i(1e3),S=i(1003)
class T{constructor(){this._dirties=[{vertexFrom:-1,vertexCount:-1,indexFrom:-1,indexCount:-1,allDirty:!1},{vertexFrom:-1,vertexCount:-1,indexFrom:-1,indexCount:-1,allDirty:!1},{vertexFrom:-1,vertexCount:-1,indexFrom:-1,indexCount:-1,allDirty:!1},{vertexFrom:-1,vertexCount:-1,indexFrom:-1,indexCount:-1,allDirty:!1},{vertexFrom:-1,vertexCount:-1,indexFrom:-1,indexCount:-1,allDirty:!1}]}hasDirty(){return this._dirties.some(e=>-1!==e.indexCount||e.allDirty)}markAllClean(){for(const e of this._dirties)e.indexFrom=-1,e.indexCount=-1,e.vertexFrom=-1,e.vertexCount=-1,e.allDirty=!1}markAllDirty(){for(const e of this._dirties)e.allDirty=!0}forEach(e){for(let t=0;t<this._dirties.length;++t){const{indexCount:i,indexFrom:n,vertexCount:r,vertexFrom:s,allDirty:o}=this._dirties[t],a={}
let l,c=!1;(o||-1!==s&&r>0)&&(a.geometry={count:r,from:s,allDirty:o},c=!0),(o||-1!==n&&i>0)&&(l={count:i,from:n,allDirty:o},c=!0),c&&e({indices:l,vertices:a},t)}}markDirtyIndices(e,t,i){const n=this._dirties[e],r=t,s=i
if(!n.allDirty)if(-1!==n.indexCount){const e=Math.min(n.indexFrom,r),t=Math.max(n.indexFrom+n.indexCount,r+s)-e
n.indexFrom=e,n.indexCount=t}else n.indexFrom=r,n.indexCount=s}markDirtyVertices(e,t,i,n){const r=this._dirties[e],s=i,o=n
if(!r.allDirty)if(-1!==r.vertexCount){const e=Math.min(r.vertexFrom,s),t=Math.max(r.vertexFrom+r.vertexCount,s+o)-e
r.vertexFrom=e,r.vertexCount=t}else r.vertexFrom=s,r.vertexCount=o}}class C{get largestRange(){return this._largestRange}constructor(e){this._largestRange=null,this._parent=e,this._updateLargestRange()}rangeCreated(e){(!this._largestRange||e.count>this._largestRange.count)&&(this._largestRange=e)}rangeResized(e,t){e===this._largestRange?e.count<t&&this._updateLargestRange():(!this._largestRange||e.count>this._largestRange.count)&&(this._largestRange=e)}findBestRange(e){let t=this._parent._freeHead,i=null
for(;null!==t;)t.count>=e&&(!i||t.count-e<i.count-e)&&(i=t),t=t.next
return i}findAdjacentRanges(e,t){let i=!0,n=!1,r=null,s=this._parent._freeHead
for(;i&&!n;){const o=null!==r?r.from+r.count:0,a=null!==s?s.from:this._parent._size
e>=o&&e+t<=a?(i=!1,n=!0):null!==s?(r=s,s=s.next):i=!1}return[r,s]}_updateLargestRange(){let e=null,t=this._parent._freeHead
for(;null!==t;)(!e||t.count>e.count)&&(e=t),t=t.next
this._largestRange=e}}class w{constructor(e,t){this._allocated=0,this._size=e,this._freeHead=e>0?{from:0,count:e,prev:null,next:null}:null,this._bookKeeper=t||new C(this),this._freeHead&&this._bookKeeper.rangeCreated(this._freeHead)}allocate(e){const t=this._bookKeeper.findBestRange(e)
if(null==t)return-1
const i=t.from,n=t.count
if(t.from+=e,t.count-=e,this._bookKeeper.rangeResized(t,i,n),this._allocated+=e,0===t.count){const e=null!==t.prev?this._freeHead:t.next
w._removeRange(t),this._freeHead=e}return i}free(e,t){const[i,n]=this._bookKeeper.findAdjacentRanges(e,t),r={from:e,count:t,prev:null!=i?i:null,next:null!=n?n:null}
if(null!=i&&(i.next=r),null!=n&&(n.prev=r),this._bookKeeper.rangeCreated(r),this._allocated-=t,null!=n&&r.from+r.count===n.from){const e=r.from,t=r.count
w._fuse(r,n),w._removeRange(n),this._bookKeeper.rangeResized(r,e,t),this._bookKeeper.rangeResized(n,void 0,0)}if(null!=i&&i.from+i.count===r.from){const e=i.from,t=i.count
w._fuse(i,r),w._removeRange(r),this._bookKeeper.rangeResized(i,e,t),this._bookKeeper.rangeResized(r,void 0,0)}this._freeHead=null!==r.prev?this._freeHead:r}get fragmentation(){const e=this._size-this._allocated
return 0===e?0:1-this._bookKeeper.largestRange.count/e}static _removeRange(e){null!==e.prev?null!==e.next?(e.prev.next=e.next,e.next.prev=e.prev):e.prev.next=null:null!==e.next&&(e.next.prev=null)}static _fuse(e,t){e.count+=t.count,e.next=t.next,t.from+=t.count,t.count=0,null!==t.next&&(t.next.prev=e)}}var M=i(1022)
const I=["FILL","LINE","MARKER","TEXT","LABEL"]
class P{constructor(e,t,i,n){this._strides=e,this._displayList=t,this._freeListsAndStorage={},this._dirtyMap=null,this._dirtyMap=i
for(const t in e){this._freeListsAndStorage[t]={vtxFreeList:n?new w(n):null,idxFreeList:n?new w(n):null,vertexBuffers:{},indexBuffer:n?new Uint32Array(n):null}
for(const i in e[t])this._freeListsAndStorage[t].vertexBuffers[i]={data:n?Object(M.b)(n,e[t][i]):null,stride:e[t][i]}}}static fromTileData(e,t){var i,n
const r=function(e){const t=e.getStrides(),i={}
for(let e=0;e<t.length;e++)i[I[e]]=t[e]
return i}(e),s=[0,0,0,0,0],o=[0,0,0,0,0]
for(const t of e.tileDisplayData.displayObjects)for(const e of t.displayRecords)s[e.geometryType]=Math.max(s[e.geometryType],e.vertexFrom+e.vertexCount),o[e.geometryType]=Math.max(o[e.geometryType],e.indexFrom+e.indexCount)
const a=new P(r,e.tileDisplayData.displayList,t,void 0),l=null!=(i=null==(n=e.tileBufferData)?void 0:n.geometries)?i:[]
for(let e=0;e<l.length;++e){const t=s[e],i=o[e],n=l[e],r=I[e],c=a._storageFor(r),u=l[e].indexBuffer
c.indexBuffer=u,c.idxFreeList=new w(u.length),c.idxFreeList.allocate(i)
let h=0
for(const t in n.vertexBuffer){const i=l[e].vertexBuffer[t]
c.vertexBuffers[t].data=i.data,c.vertexBuffers[t].stride=i.stride
const n=Object(M.B)(i.stride),r=i.data.length*n/i.stride
h||(h=r)}c.vtxFreeList=new w(h),c.vtxFreeList.allocate(t)}return a}delete(e){const t=I[e.geometryType]
this._freeVertices(t,e.vertexFrom,e.vertexCount),this._freeIndices(t,e.indexFrom,e.indexCount),this._displayList.removeFromList(e),e.vertexFrom=void 0,e.indexFrom=void 0}setMeshData(e,t,i,n,r){const s=I[e.geometryType]
let o,a
e.meshData=null,void 0===e.vertexFrom?(a=t.vertexCount,o=this._allocateVertices(s,a)):t.vertexCount>e.vertexCount?(this._freeVertices(s,e.vertexFrom,e.vertexCount),a=t.vertexCount,o=this._allocateVertices(s,a)):t.vertexCount===e.vertexCount?(o=e.vertexFrom,a=e.vertexCount):(this._freeVertices(s,e.vertexFrom+t.vertexCount,e.vertexCount-t.vertexCount),o=e.vertexFrom,a=t.vertexCount)
let l,c,u,h=!0
if(void 0===e.indexFrom?(l=r,u=t.indexCount,c=this._allocateIndices(s,u)):t.indexCount>e.indexCount?(l=this._displayList.removeFromList(e),this._freeIndices(s,e.indexFrom,e.indexCount),u=t.indexCount,c=this._allocateIndices(s,u)):t.indexCount===e.indexCount?(h=!1,c=e.indexFrom,u=e.indexCount):(l=this._displayList.removeFromList(e),this._freeIndices(s,e.indexFrom+t.indexCount,e.indexCount-t.indexCount),c=e.indexFrom,u=t.indexCount),-1!==o&&-1!==c){const r=this._storageFor(s)
if(Object(M.e)(o,c,r.vertexBuffers,r.indexBuffer,t,i,n),e.vertexFrom=o,e.indexFrom=c,e.vertexCount=t.vertexCount,e.indexCount=t.indexCount,this._dirtyMap){this._dirtyMap.markDirtyIndices(e.geometryType,e.indexFrom,e.indexCount)
for(const t in i)this._dirtyMap.markDirtyVertices(e.geometryType,t,e.vertexFrom,e.vertexCount)}return h&&this._displayList.addToList(e,l),!0}return-1!==o&&this._freeVertices(s,o,a),-1!==c&&this._freeIndices(s,c,u),e.setMeshDataFromBuffers(t,i,n),e.vertexFrom=void 0,e.vertexCount=0,e.indexFrom=void 0,e.indexCount=0,!1}tryAddMeshData(e,t){const i=t.vertexBuffer,n=t.indexBuffer,r=I[e.geometryType],s=this._allocateVertices(r,e.vertexCount)
if(-1===s)return this._freeVertices(r,s,e.vertexCount),!1
const o=this._allocateIndices(r,e.indexCount)
if(-1===o)return this._freeVertices(r,s,e.vertexCount),this._freeIndices(r,o,e.indexCount),!1
const a=this._storageFor(r)
if(Object(M.e)(s,o,a.vertexBuffers,a.indexBuffer,e,i,n),e.vertexFrom=s,e.indexFrom=o,this._dirtyMap){this._dirtyMap.markDirtyIndices(e.geometryType,e.indexFrom,e.indexCount)
for(const t in i)this._dirtyMap.markDirtyVertices(e.geometryType,t,s,e.vertexCount)}return this._displayList.addToList(e),!0}_allocateVertices(e,t){var i,n
const r=this._storageFor(e),s=null==(i=r.vtxFreeList)?void 0:i.allocate(t)
if(null==s||-1===s)return-1
const o=null==(n=r.vtxFreeList)?void 0:n.fragmentation
return null==o||o>.5?-1:s}_freeVertices(e,t,i){var n
null==(n=this._storageFor(e).vtxFreeList)||n.free(t,i)}_freeIndices(e,t,i){var n
null==(n=this._storageFor(e).idxFreeList)||n.free(t,i)}_allocateIndices(e,t){var i,n
const r=this._storageFor(e),s=null==(i=r.idxFreeList)?void 0:i.allocate(t)
if(null==s||-1===s)return-1
const o=null==(n=r.idxFreeList)?void 0:n.fragmentation
return null==o||o>.5?-1:s}_storageFor(e){return this._freeListsAndStorage[e]}_stridesFor(e,t){return this._strides[e][t]}}var E=i(1068),L=i(984),A=i(1116)
class j{constructor(e){this.geometryMap=Object(M.f)(()=>({indexBuffer:E.a.createIndex(e,L.D.STATIC_DRAW),vao:null}),(t,i)=>({vertexBuffer:E.a.createVertex(e,M.a[i])}))}dispose(){for(let e=0;e<5;e++){const t=this.geometryMap[e]
if(t){t.data.vao&&t.data.vao.dispose(!1),t.data.indexBuffer&&t.data.indexBuffer.dispose()
for(const e in t.buffers)t.buffers[e]&&t.buffers[e].data.vertexBuffer.dispose()}}}get(e){const t=this.geometryMap[e]
return{getVAO(e,i,n){if(!t.data.vao){const r={}
for(const e in t.buffers)r[e]=t.buffers[e].data.vertexBuffer
t.data.vao=new A.a(e,n,i,r,t.data.indexBuffer)}return t.data.vao}}}has(e){return null!=this.geometryMap[e]}upload(e,t){t.forEach((t,i)=>{this._upload(t,i,e)})}_upload(e,t,i){if(e.indices&&(e.indices.allDirty?this._uploadIndices(i,t):null!=e.indices.from&&null!=e.indices.count&&this._uploadIndices(i,t,e.indices.from,e.indices.count)),e.vertices){const n=e.vertices
for(const e in n){const r=n[e]
r.allDirty?this._uploadVertices(i,t,e):null!=r.from&&null!=r.count&&this._uploadVertices(i,t,e,r.from,r.count)}}}_uploadVertices(e,t,i,n,r){const s=this.geometryMap[t]
if(!s)return
const o=e.geometries[t].vertexBuffer[i]
if(!o)return
const{data:a,stride:l}=o
if(s.buffers[i]&&a.length>0){const e=l/a.BYTES_PER_ELEMENT
null!=n&&null!=r?s.buffers[i].data.vertexBuffer.setSubData(a,n*e,n*e,(n+r)*e):s.buffers[i].data.vertexBuffer.setData(a)}}_uploadIndices(e,t,i,n){const r=this.geometryMap[t]
if(!r)return
const s=e.geometries[t].indexBuffer
r.data.indexBuffer&&s.length>0&&(null!=i&&null!=n?r.data.indexBuffer.setSubData(s,i,i,i+n):r.data.indexBuffer.setData(s))}}var R=i(1744)
class D extends R.a{constructor(){super(...arguments),this._data=null,this._displayList=null,this._lastCommitTime=0,this._hasData=!1,this._invalidated=!1,this._wglBuffers=null,this._dirtyMap=new T}destroy(){super.destroy(),this.clear()}get hasData(){return!!this._hasData}get displayObjects(){var e
return null!=(e=this._displayObjects)?e:[]}getGeometry(e){return this._wglBuffers&&this._wglBuffers.has(e)?this._wglBuffers.get(e):null}getDisplayList(){return this._displayList}patch(e){var t,i
if(!0===e.clear)return this.clear(),void(this._hasData=!1)
const n=e.addOrUpdate,r=e.remove
!this._data&&n&&null!=(t=n.tileDisplayData)&&t.displayObjects.length?(n.tileDisplayData.computeDisplayList(),this._dirtyMap=new T,this._dispRecStore=P.fromTileData(n,this._dirtyMap),this._data=n,this._dirtyMap.markAllDirty(),this._hasData=!0,e.end&&this.ready()):this._data&&(n&&null!=(i=n.tileDisplayData)&&i.displayObjects.length||r.length)?this._doPatchData(e):e.end&&this.ready(),e.end&&!this._data&&this.clear(),this.requestRender(),this.emit("change")}commit(e){e.time&&e.time===this._lastCommitTime||(this._lastCommitTime=e.time,this.visible&&this._data&&(this._wglBuffers||(this._wglBuffers=new j(e.context)),(this._dirtyMap.hasDirty()||this._invalidated)&&(this._invalidated=!1,this._wglBuffers.upload(this._data.tileBufferData,this._dirtyMap),this._displayList=this._data.tileDisplayData.displayList.clone(),this._displayObjects=this._data.tileDisplayData.displayObjects.slice(),this._dirtyMap.markAllClean())))}clear(){this._data=null,this._displayList=null,this._dispRecStore=null,this._wglBuffers&&(this._wglBuffers.dispose(),this._wglBuffers=null)}_doPatchData(e){this._invalidated=!0,this._patchData(e)||(this._dirtyMap.markAllDirty(),this._data.reshuffle(),this._dispRecStore=P.fromTileData(this._data,this._dirtyMap)),this.requestRender()}_patchData(e){var t
let i=!0
const n=e.addOrUpdate&&e.addOrUpdate.tileDisplayData&&e.addOrUpdate.tileDisplayData.displayObjects||[],r=(e.remove||[]).slice()
for(const e of n)null!=e.insertAfter&&r.push(e.id)
let s
r.length>0&&(s=new Set(r))
const o=this._data.tileDisplayData
for(const e of r){const t=o.displayObjectRegistry.get(e)
if(t){o.displayList.removeFromList(t.displayRecords)
for(const e of t.displayRecords)this._dispRecStore.delete(e)
o.displayObjectRegistry.delete(e)}}(null==(t=s)?void 0:t.size)&&(o.displayObjects=o.displayObjects.filter(e=>!s.has(e.id)))
for(const t of n){let n,r=o.displayObjectRegistry.get(t.id)
if(r){const e=r.displayRecords
r.set(t),r.displayRecords=e
const i=r.displayRecords.length
for(let e=0;e<i;++e){const i=r.displayRecords[e],n=t.displayRecords[e];(e>=t.displayRecords.length||i.geometryType!==n.geometryType||i.symbolLevel!==n.symbolLevel||i.zOrder!==n.zOrder||i.materialKey!==n.materialKey)&&(this._dispRecStore.delete(r.displayRecords[e]),e<t.displayRecords.length&&(r.displayRecords[e]=void 0))}r.displayRecords.length=t.displayRecords.length}else{let e
r=t.copy(),r.displayRecords=[],o.displayObjectRegistry.set(t.id,r)
const i=o.displayObjects
if(null!=r.insertAfter)if(n={},r.insertAfter>=0){const t=o.displayObjectRegistry.get(r.insertAfter)
t?(e=i.indexOf(t)+1,e<i.length?i.splice(e,0,r):(i.push(r),e=i.length)):(i.push(r),e=i.length)}else i.unshift(r),e=0
else i.push(r),e=i.length
if(n){const r=t.displayRecords.length>0?1:0
let s=0
for(let t=e-1;t>=0&&s<r;--t)for(let e=i[t].displayRecords.length-1;e>=0&&s<r;--e){const r=i[t].displayRecords[e],a=o.displayList.getDPInfoType()
n[a]||(n[a]=r,++s)}}}const s=t.displayRecords.length
for(let a=0;a<s;++a){const s=t.displayRecords[a]
let l=r.displayRecords[a]
l?(l.meshData=s.meshData,l.materialKey=s.materialKey):(l=s.copy(),l.vertexFrom=void 0,l.indexFrom=void 0,r.displayRecords[a]=l)
const c=s.geometryType,u=o.displayList.getDPInfoType(),h=e.addOrUpdate.tileBufferData.geometries[c],d=h.vertexBuffer,f=h.indexBuffer
let _
n&&(_=n[u]?o.displayList.splitAfter(n[u]):-1),i=this._dispRecStore.setMeshData(l,s,d,f,_)&&i,n&&null!=l.indexFrom&&null!=l.indexFrom&&(n[u]=l)}}return i}}class z{constructor(){this._byGeometryType=null}get satisfied(){return!this._byGeometryType}reset(){this._byGeometryType=null}verticesFor(e){return this._byGeometryType?this._byGeometryType[e].vertices:0}indicesFor(e){return this._byGeometryType?this._byGeometryType[e].indices:0}needMore(e,t,i){if(!t&&!i)return
this._byGeometryType||(this._byGeometryType=[{vertices:0,indices:0},{vertices:0,indices:0},{vertices:0,indices:0},{vertices:0,indices:0},{vertices:0,indices:0}])
const n=this._byGeometryType[e]
n.vertices+=t,n.indices+=i}}class F{constructor(){this.geometries=[{indexBuffer:void 0,vertexBuffer:{}},{indexBuffer:void 0,vertexBuffer:{}},{indexBuffer:void 0,vertexBuffer:{}},{indexBuffer:void 0,vertexBuffer:{}},{indexBuffer:void 0,vertexBuffer:{}}]}clone(){const e=new F
for(let t=0;t<this.geometries.length;t++){const i=this.geometries[t],n=e.geometries[t]
n.indexBuffer=i.indexBuffer.slice(),n.vertexBuffer={}
for(const e in i.vertexBuffer){const{data:t,stride:r}=i.vertexBuffer[e]
n.vertexBuffer[e]={data:t.slice(),stride:r}}}return e}static deserialize(e){const t=new F
for(let i=0;i<5;++i){t.geometries[i].indexBuffer=new Uint32Array(e.geometries[i].indexBuffer),t.geometries[i].vertexBuffer={}
for(const n in e.geometries[i].vertexBuffer)t.geometries[i].vertexBuffer[n]={data:Object(M.c)(e.geometries[i].vertexBuffer[n].data,e.geometries[i].vertexBuffer[n].stride),stride:e.geometries[i].vertexBuffer[n].stride}}return t}serialize(){const e={geometries:[{indexBuffer:this.geometries[0].indexBuffer.buffer,vertexBuffer:{}},{indexBuffer:this.geometries[1].indexBuffer.buffer,vertexBuffer:{}},{indexBuffer:this.geometries[2].indexBuffer.buffer,vertexBuffer:{}},{indexBuffer:this.geometries[3].indexBuffer.buffer,vertexBuffer:{}},{indexBuffer:this.geometries[4].indexBuffer.buffer,vertexBuffer:{}}]}
for(let t=0;t<5;++t)for(const i in this.geometries[t].vertexBuffer)e.geometries[t].vertexBuffer[i]={data:this.geometries[t].vertexBuffer[i].data.buffer,stride:this.geometries[t].vertexBuffer[i].stride}
return e}getBuffers(){const e=[]
for(let t=0;t<5;++t){e.push(this.geometries[t].indexBuffer.buffer)
for(const i in this.geometries[t].vertexBuffer)e.push(this.geometries[t].vertexBuffer[i].data.buffer)}return e}}var k=i(1023)
function N(e,t,i,...n){t<e.length?e.splice(t,i,...n):e.push(...n)}class V{constructor(){this.symbolLevels=[]}replay(e,t,i){for(const n of this.symbolLevels)for(const r of n.zLevels){const n=r.geometryDPInfo.unified
if(n)for(const r of n){const{geometryType:n,materialKey:s,indexFrom:o,indexCount:a}=r,l=k.e.load(s).symbologyType,c=e.painter.getBrush(n,l),u={geometryType:n,materialKey:s,indexFrom:o,indexCount:a,target:t.getGeometry(n)}
c.prepareState(e),c.drawGeometry(e,t,u,i)}}}get empty(){return!this.symbolLevels||0===this.symbolLevels.length}clear(){this.symbolLevels.length=0}addToList(e,t){if(Array.isArray(e))for(const i of e)this._addToList(i,t)
else this._addToList(e,t)}removeFromList(e){Array.isArray(e)||(e=[e])
let t=null
for(const i of e)t=this._removeFromList(i)
return t}clone(){const e=new V
for(const t of this.symbolLevels)e.symbolLevels.push(t.clone())
return e}splitAfter(e){const t=this._getDisplayList(e.symbolLevel,e.zOrder),i=t.length,n=e.indexFrom+e.indexCount
for(let r=0;r<i;++r){const i=t[r]
if(i.geometryType===e.geometryType&&n>i.indexFrom&&n<=i.indexFrom+i.indexCount){if(n<i.indexFrom+i.indexCount){const e=new B
e.geometryType=i.geometryType,e.materialKey=i.materialKey,e.indexFrom=n,e.indexCount=i.indexFrom+i.indexCount-n,t.splice(r+1,0,e),i.indexCount=n-i.indexFrom}return r}}}_addToList(e,t){const i=e.symbolLevel,n=e.zOrder,r=this._getDisplayList(i,n),s=null!=t?t:r.length-1,o=s>=0&&s<r.length?r[s]:null
if(null!==o&&o.materialKey===e.materialKey&&o.indexFrom+o.indexCount===e.indexFrom&&o.geometryType===e.geometryType)o.indexCount+=e.indexCount
else{const t=new B
t.indexFrom=e.indexFrom,t.indexCount=e.indexCount,t.materialKey=e.materialKey,t.geometryType=e.geometryType,N(r,s+1,0,t)}}_removeFromList(e){const t=e.symbolLevel,i=e.zOrder,n=this._getDisplayList(t,i),r=n.length
let s
for(let t=0;t<r;++t){const i=n[t]
if(e.indexFrom+e.indexCount>i.indexFrom&&e.indexFrom<i.indexFrom+i.indexCount&&i.geometryType===e.geometryType){s=t
break}}if(void 0!==s){const t=n[s]
if(e.indexFrom===t.indexFrom)return t.indexCount-=e.indexCount,t.indexFrom+=e.indexCount,0===t.indexCount&&N(n,s,1),s-1
if(e.indexFrom+e.indexCount===t.indexFrom+t.indexCount)return t.indexCount-=e.indexCount,0===t.indexCount?(N(n,s,1),s-1):s
{const i=t.indexFrom,r=e.indexFrom-t.indexFrom,o=e.indexCount,a=t.indexFrom+t.indexCount-(e.indexFrom+e.indexCount)
t.indexCount=r
const l=new B
return l.geometryType=t.geometryType,l.materialKey=t.materialKey,l.indexFrom=i+r+o,l.indexCount=a,N(n,s+1,0,l),s}}return null}_getDisplayList(e,t){let i
const n=this.symbolLevels.length
for(let t=0;t<n;t++)if(this.symbolLevels[t].symbolLevel===e){i=this.symbolLevels[t]
break}let r
i||(i=new H,i.symbolLevel=e,this.symbolLevels.push(i))
const s=i.zLevels.length
for(let e=0;e<s;e++)if(i.zLevels[e].zLevel===t){r=i.zLevels[e]
break}return r||(r=new G,r.geometryDPInfo=new U,r.zLevel=t,i.zLevels.push(r)),r.geometryDPInfo.unified||(r.geometryDPInfo.unified=[]),r.geometryDPInfo.unified}getDPInfoType(){return"unified"}}class B{constructor(){this.materialKey=null,this.indexFrom=0,this.indexCount=0}clone(){const e=new B
return e.geometryType=this.geometryType,e.materialKey=this.materialKey,e.indexFrom=this.indexFrom,e.indexCount=this.indexCount,e}}class U{constructor(){this.fill=null,this.line=null,this.marker=null,this.text=null,this.label=null,this.unified=null}clone(){const e=new U
return e.fill=this.fill&&this.fill.map(e=>e.clone()),e.line=this.line&&this.line.map(e=>e.clone()),e.marker=this.marker&&this.marker.map(e=>e.clone()),e.text=this.text&&this.text.map(e=>e.clone()),e.label=this.label&&this.label.map(e=>e.clone()),e.unified=this.unified&&this.unified.map(e=>e.clone()),e}}class G{constructor(){this.geometryDPInfo=new U}clone(){const e=new G
return e.zLevel=this.zLevel,e.geometryDPInfo=this.geometryDPInfo.clone(),e}}class H{constructor(){this.zLevels=[]}clone(){const e=new H
e.symbolLevel=this.symbolLevel
for(const t of this.zLevels)e.zLevels.push(t.clone())
return e}}class W{constructor(){this.vertexData=new Map,this.vertexCount=0,this.indexData=[]}clear(){this.vertexData.clear(),this.vertexCount=0,this.indexData=[]}update(e,t,i){for(const t in e)this.vertexData.set(t,e[t])
for(const t in this.vertexData)null===e[t]&&this.vertexData.delete(t)
this.vertexCount=t,this.indexData=i}}class Y{constructor(e,t,i,n=0,r=0){this.id=e,this.geometryType=t,this.materialKey=i,this.minZoom=n,this.maxZoom=r,this.meshData=null,this.symbolLevel=0,this.zOrder=0,this.vertexFrom=0,this.vertexCount=0,this.indexFrom=0,this.indexCount=0,this._sortKey=null}get sortKey(){return null==this._sortKey&&this._computeSortKey(),this._sortKey}clone(){return this.copy()}copy(){const e=new Y(this.id,this.geometryType,this.materialKey)
return e.vertexFrom=this.vertexFrom,e.vertexCount=this.vertexCount,e.indexFrom=this.indexFrom,e.indexCount=this.indexCount,e.zOrder=this.zOrder,e.symbolLevel=this.symbolLevel,e.meshData=this.meshData,e.minZoom=this.minZoom,e.maxZoom=this.maxZoom,e}setMeshDataFromBuffers(e,t,i){const n=new W
for(const i in t){const r=t[i].stride,s=t[i].data
if(!s)continue
const o=[],a=Object(M.B)(r)
for(let t=0;t<r*e.vertexCount/a;++t)o[t]=s[t+r*e.vertexFrom/a]
n.vertexData.set(i,o)}n.indexData.length=0
for(let t=0;t<e.indexCount;++t)n.indexData[t]=i[t+e.indexFrom]-e.vertexFrom
n.vertexCount=e.vertexCount,this.meshData=n}readMeshDataFromBuffers(e,t){this.meshData?this.meshData.clear():this.meshData=new W
for(const t in e){const i=e[t].stride,n=e[t].data,r=[],s=Object(M.B)(i)
for(let e=0;e<i*this.vertexCount/s;++e)r[e]=n[e+i*this.vertexFrom/s]
this.meshData.vertexData.set(t,r)}this.meshData.indexData.length=0
for(let e=0;e<this.indexCount;++e)this.meshData.indexData[e]=t[e+this.indexFrom]-this.vertexFrom
this.meshData.vertexCount=this.vertexCount}writeMeshDataToBuffers(e,t,i,n){if(this.meshData){for(const i in t){const n=t[i].stride,r=this.meshData.vertexData.get(i),s=t[i].data,o=Object(M.B)(n)
for(let t=0;t<n*this.meshData.vertexCount/o;++t)s[t+n*e/o]=r[t]}for(let t=0;t<this.meshData.indexData.length;++t)n[t+i]=this.meshData.indexData[t]+e
this.vertexFrom=e,this.vertexCount=this.meshData.vertexCount,this.indexFrom=i,this.indexCount=this.meshData.indexData.length}}static writeAllMeshDataToBuffers(e,t,i){let n=0,r=0
for(const s of e)s.writeMeshDataToBuffers(n,t,r,i),n+=s.vertexCount,r+=s.indexCount}_computeSortKey(){this._sortKey=(31&this.symbolLevel)<<12|(127&this.zOrder)<<4|7&this.geometryType}serialize(e){return e.push(this.geometryType),e.push(this.materialKey),e.push(this.vertexFrom),e.push(this.vertexCount),e.push(this.indexFrom),e.push(this.indexCount),e.push(this.minZoom),e.push(this.maxZoom),e}static deserialize(e,t){const i=e.readInt32(),n=e.readInt32(),r=new Y(t.id,i,n)
return r.vertexFrom=e.readInt32(),r.vertexCount=e.readInt32(),r.indexFrom=e.readInt32(),r.indexCount=e.readInt32(),r.minZoom=e.readInt32(),r.maxZoom=e.readInt32(),r}}function Z(e,t){if(null!==t){e.push(t.length)
for(const i of t)i.serialize(e)
return e}e.push(0)}class q{constructor(e){this.insertAfter=null,this.id=e,this.displayRecords=[]}copy(){const e=new q(this.id)
return e.set(this),e}clone(){const e=new q(this.id)
return e.displayRecords=this.displayRecords.map(e=>e.clone()),e.insertAfter=this.insertAfter,e}set(e){this.id=e.id,this.displayRecords=e.displayRecords,this.insertAfter=e.insertAfter}serialize(e){return e.push(this.id),Z(e,this.displayRecords),e}static deserialize(e){var t
const i=e.readInt32(),n=new q(i),r={id:i}
return n.displayRecords=null!=(t=function(e,t,i){const n=e.readInt32(),r=new Array(n)
for(let n=0;n<r.length;n++)r[n]=t.deserialize(e,i)
return r}(e,Y,r))?t:[],n}}class X{constructor(){this.displayObjects=[],this._displayList=null}get displayObjectRegistry(){if(!this._displayObjectRegistry){this._displayObjectRegistry=new Map
for(const e of this.displayObjects)this._displayObjectRegistry.set(e.id,e)}return this._displayObjectRegistry}get displayList(){return this._displayList}computeDisplayList(){this._displayList=new V
for(const e of this.displayObjects)for(const t of e.displayRecords)this._displayList.addToList(t)}clone(){const e=new X
return this.displayObjects&&(e.displayObjects=this.displayObjects.map(e=>e.clone())),e}serialize(e){return Z(e,this.displayObjects),e}_deserializeObjects(e){const t=e.readInt32(),i=new Array(t),n=new Map
for(let t=0;t<i.length;++t){const r=q.deserialize(e)
i[t]=r,n.set(r.id,r)}this.displayObjects=i,this._displayList=null,this._displayObjectRegistry=n}static deserialize(e){const t=new X
return t._deserializeObjects(e),t}}var K=i(1745)
class J{constructor(e,t){this.data=e,this.stride=t}static decode(e){const t=Object(M.c)(e.data,e.stride),i=e.stride
return new J(t,i)}static fromVertexVector(e){const t=Object(M.c)(e.data.buffer(),e.stride),i=e.stride
return new J(t,i)}}class ${constructor(e,t,i){this.geometryType=e,this.indexBuffer=new Uint32Array(t),this.namedBuffers=i}static decode(e){const t=e.geometryType,i=e.indexBuffer,n={}
for(const t in e.namedBuffers)n[t]=J.decode(e.namedBuffers[t])
return new $(t,i,n)}static fromVertexData(e,t){const i=e.indices,n=Object(M.c)(e.vertices,e.stride),r=e.stride,s={geometry:new J(n,r)}
return new $(t,i,s)}static fromVertexVectors(e){const t=e.geometryType,i=e.indexVector.buffer(),n={}
for(const t in e.namedVectors)n[t]=J.fromVertexVector(e.namedVectors[t])
return new $(t,i,n)}}var Q=i(1493)
class ee{get vertexCount(){const e=this.stride/4,t=this.data.length/e
return t!==(0|t)&&console.debug("Corrupted stride"),t}constructor(e,t){this.data=e,this.stride=t}transfer(e,t){const i=this.data.buffer()
e.vertexCount=this.vertexCount,e.data=i,e.stride=this.stride,t.push(i)}}class te{constructor(e,t,i){this.geometryType=e,this.indexVector=new Q.a(Uint32Array,6*t),this.namedVectors={}
const n=Object(M.n)(e,i)
for(const e in n){const i=n[e]
let r
switch(i%4){case 0:case 2:r=new Q.a(Uint32Array,i*t)
break
case 1:case 3:r=new Q.a(Uint8Array,i*t)}this.namedVectors[e]=new ee(r,i)}}get(e){return this.namedVectors[e].data}getVector(e){return this.namedVectors[e]}transfer(e,t){const i=this.indexVector.buffer(),n={}
t.push(i)
for(const e in this.namedVectors){const i=this.namedVectors[e]
n[e]={},i.transfer(n[e],t)}e.geometryType=this.geometryType,e.indexBuffer=i,e.namedBuffers=n,this.destroy()}intoBuffers(){const e=$.fromVertexVectors(this)
return this.destroy(),e}destroy(){this.indexVector=null,this.namedVectors=null}}const ie=new z,ne=new z
function re(e,t){const i={}
for(const n in e){const r={data:Object(M.b)(t,e[n]),stride:e[n]}
i[n]=r}return i}class se{constructor(){this.tileDisplayData=null,this.tileBufferData=null}reshuffle(){var e
if(ie.reset(),!this.tileDisplayData)return
const t=function(e){const t=[[],[],[],[],[]],i=e
for(const e of i)for(const i of e.displayRecords)t[i.geometryType].push(i)
return t}(this.tileDisplayData.displayObjects)
for(const e of t)for(const t of e)t&&ie.needMore(t.geometryType,t.meshData?t.meshData.vertexCount:t.vertexCount,t.meshData?t.meshData.indexData.length:t.indexCount)
const i=t.length,n=new F
for(let e=0;e<i;++e){var r
n.geometries[e].indexBuffer=new Uint32Array(Math.round(1.5*ie.indicesFor(e)))
const t=[],i=null==(r=this.tileBufferData)?void 0:r.geometries[e].vertexBuffer
if(!i)continue
for(const e in i)t.push(i[e].stride)
const s=se._computeVertexAlignment(t),o=Math.round(1.5*ie.verticesFor(e)),a=se._align(o,s)
for(const t in i){const r=i[t].stride
n.geometries[e].vertexBuffer[t]={stride:r,data:Object(M.b)(a,r)}}}ne.reset(),null==(e=this.tileDisplayData.displayList)||e.clear()
for(let e=0;e<i;++e){const i=t[e]
for(const t of i){if(t.meshData)t.writeMeshDataToBuffers(ne.verticesFor(e),n.geometries[e].vertexBuffer,ne.indicesFor(e),n.geometries[e].indexBuffer),t.meshData=null
else{var s
const i=null==(s=this.tileBufferData)?void 0:s.geometries[e]
if(i){const r=i.vertexBuffer,s=i.indexBuffer,o=n.geometries[e].vertexBuffer,a=n.geometries[e].indexBuffer,l=ne.verticesFor(e),c=ne.indicesFor(e)
Object(M.e)(l,c,o,a,t,r,s),t.vertexFrom=l,t.indexFrom=c}}ne.needMore(e,t.vertexCount,t.indexCount)}}const{displayList:o,displayObjects:a}=this.tileDisplayData
if(o)for(const e of a)o.addToList(e.displayRecords)
this.tileBufferData=n}getStrides(){var e
const t=[],i=null==(e=this.tileBufferData)?void 0:e.geometries
if(!i)return t
for(let e=0;e<i.length;++e){const n=i[e]
t[e]={}
for(const i in n.vertexBuffer)t[e][i]=n.vertexBuffer[i].stride}return t}clone(){var e,t,i,n
const r=new se
return r.tileBufferData=null!=(e=null==(t=this.tileBufferData)?void 0:t.clone())?e:null,r.tileDisplayData=null!=(i=null==(n=this.tileDisplayData)?void 0:n.clone())?i:null,r}_guessSize(){var e,t
const i=null!=(e=null==(t=this.tileDisplayData)?void 0:t.displayObjects)?e:[],n=Math.min(i.length,4)
let r=0
for(let e=0;e<n;e++)r=Math.max(r,i[e].displayRecords.length)
return 2*(12*i.length+i.length*r*40)}serialize(){const e=this.tileBufferData.serialize(),t=this.tileBufferData.getBuffers(),i=this.tileDisplayData.serialize(new Q.a(Int32Array,this._guessSize())).buffer()
return t.push(i),{result:{displayData:i,bufferData:e},transferList:t}}static fromVertexData(e,t){const i={},n=new Map
for(const e of t)n.set(e.id,e)
return Object(M.h)(t=>{const r=e.data[t]
if(Object(l.l)(r)){const e=K.a.from(r.records).getCursor()
for(;e.next();){const i=e.id,r=e.materialKey,s=e.indexFrom,o=e.indexCount,a=e.vertexFrom,l=e.vertexCount,c=n.get(i),u=new Y(i,t,r)
u.indexFrom=s,u.indexCount=o,u.vertexFrom=a,u.vertexCount=l,c.displayRecords.push(u)}i[t]=$.fromVertexData(r,t)}else i[t]=new te(t,0,S.e.DEFAULT).intoBuffers()}),se.fromMeshData({displayObjects:t,vertexBuffersMap:i})}static fromMeshData(e){const t=new se,i=new X,n=new F
i.displayObjects=e.displayObjects
for(const t in e.vertexBuffersMap){const i=e.vertexBuffersMap[t]
n.geometries[t].indexBuffer=i.indexBuffer,n.geometries[t].vertexBuffer=i.namedBuffers}return t.tileDisplayData=i,t.tileBufferData=n,t}static bind(e,t){const i=new se
return i.tileDisplayData=e,i.tileBufferData=t,i}static create(e,t){const i=new se
i.tileDisplayData=new X,i.tileDisplayData.displayObjects=e
const n=[0,0,0,0,0],r=[0,0,0,0,0],s=[[],[],[],[],[]]
for(const t of e)for(const e of t.displayRecords)s[e.geometryType].push(e),n[e.geometryType]+=e.meshData.vertexCount,r[e.geometryType]+=e.meshData.indexData.length
const o=new F,a=function(e){return[e.fill||{},e.line||{},e.icon||{},e.text||{},e.label||{}]}(t)
for(let e=0;e<5;e++){const t=new Uint32Array(r[e]),i=re(a[e],n[e])
Y.writeAllMeshDataToBuffers(s[e],i,t),o.geometries[e]={indexBuffer:t,vertexBuffer:i}}return i.tileBufferData=o,i}static _align(e,t){const i=e%t
return 0===i?e:e+(t-i)}static _computeVertexAlignment(e){let t=!1,i=!1
for(const n of e)n%4==2?t=!0:n%4!=0&&(i=!0)
return i?4:t?2:1}}var oe=i(1754),ae=i(1755),le=i(1587),ce=i(1746),ue=i(1664),he=i(1747),de=i(1758),fe=i(1057),_e=i(1559),me=i(1659)
class pe extends me.a{static from(e,t,i){const n=_e.a.createInstance(),r=[],s=e.filter(e=>!!e.geometry)
for(const e of s){const i=Object(p.c)(e.geometry)
Object(fe.e)(r,[e],i,!1,!1,t)}return new pe(n,r,i)}constructor(e,t,i){super(e,t,null),this._transform=i}get geometryType(){const e=this._current
return e?e.geometryType:null}get insertAfter(){return this._current.insertAfter}readGraphic(){return this._current}getCursor(){return this.copy()}copy(){const e=new pe(this.instance,this._features,this._transform)
return this.copyInto(e),e}}var ge=i(980),ye=i(1568),xe=i(1079),ve=i(1155),be=i(1589),Oe=i(1142),Se=i(1226),Te=i(1062)
const Ce=new Te.a,we=new Te.a
function Me(e){e.coords.length=0,e.lengths.length=0}class Ie{constructor(){this.bounds=Object(_.m)(),this.graphic=null}static acquire(e=null,t,i,n,r){let s
return 0===Ie._pool.length?s=new Ie:(s=Ie._pool.pop(),this._set.delete(s)),s.acquire(e,t,i,n,r),s}static release(e){e&&!this._set.has(e)&&(e.release(),this._pool.push(e),this._set.add(e))}static getCentroidQuantized(e,t){if(Object(p.g)(e.geometry)){const i=e.symbol
if(Object(l.k)(i))return null
if((null==i?void 0:i.layers.length)>0&&i.layers.some(e=>"text"===e.type||"marker"===e.type)){const i=Object(Oe.b)(e.geometry)
return null!==i?Object(Se.b)(t,{},{x:i[0],y:i[1]},!1,!1):null}}return null}acquire(e=null,t,i,n,r){e&&this.set(e,t,i,n,r)}release(){this.graphic=null,this.symbolResource=null,this.geometry=null}get symbol(){return this.symbolResource.symbol}set(e,t,i,n,r){this.graphic=e,this.geometry=i,this.symbolResource=t,this.bounds=n,r&&(this.size=r)}getGeometryQuantized(e,t,i,n){const r=this.geometry,s=Object(p.c)(r)
if(Object(l.k)(s))return null
switch(s){case"esriGeometryPolygon":{const t=r,{rings:i}=t
if(!i||0===i.length)return null
let n
if(n=1===i.length&&2===i[0].length?Object(Se.a)(e,{paths:[[i[0][0],i[0][1]]]}):Object(Se.a)(e,this.geometry),!n){const t={x:i[0][0][0],y:i[0][0][1]}
if(n=Object(Se.a)(e,t),n){const{x:e,y:t}=n
return{rings:[[[e-1,t],[1,-1],[1,1],[-1,1],[-1,-1]]]}}}return n}case"esriGeometryPolyline":{var o,a,c,u
const t=r
Me(Ce),Me(we)
const i=null!=(o=t.hasZ)&&o,n=null!=(a=t.hasM)&&a
return Object(fe.i)(Ce,t),Object(fe.r)(we,Ce,i,n,"esriGeometryPolyline",e.scale[0]),Object(fe.v)(Ce,we,i,n,"esriGeometryPolyline",e),Object(fe.p)(Ce,null!=(c=t.hasZ)&&c,null!=(u=t.hasM)&&u)}case"esriGeometryMultipoint":{const s=r,o=.5*n*Math.max(Math.abs(this.size[0])+this.size[2]-this.size[0],Math.abs(this.size[1])+this.size[3]-this.size[1]),a=Object(y.e)(i)
let l=s.points
if(a){const[e,i]=a.valid,n=i-e
l=l.filter(r=>{if(r[0]+o>i||r[0]-o<e){const e=[...r]
return r[0]+o>i?e[0]-=n:e[0]+=n,Object(_.j)(t,r,o)||Object(_.j)(t,e,o)}return Object(_.j)(t,r,o)})}return 0===l.length?{points:l}:Object(Se.a)(e,{points:l})}}return Object(Se.a)(e,this.geometry)}}Ie._pool=[],Ie._set=new Set
var Pe=i(1447)
const Ee={minX:0,minY:0,maxX:0,maxY:0},Le=Object(_.m)()
function Ae(e,t,i,n,r){return Ee.minX=t,Ee.minY=i,Ee.maxX=n,Ee.maxY=r,e.search(Ee)}function je(e){return{minX:e.bounds[0],minY:e.bounds[1],maxX:e.bounds[2],maxY:e.bounds[3]}}class Re{constructor(e,t,i,n,r,s,o){this._graphics=n,this._onAdd=r,this._onRemove=s,this._hashToCIM=o,this._index=Object(ye.a)(9,je),this._itemByGraphic=new Map,this._inflatedSizeHelper=new v.b,this._tileInfoView=e,this._uidFieldName=i
const a=e.getClosestInfoForScale(t)
a&&(this._resolution=this._tileInfoView.getTileResolution(a.level))}setResourceManager(e){this._cimResourceManager=e,this._hittestDrawHelper=new be.c(e)}hitTest(e,t,i,n,r){e=Object(ve.b)(e,this._tileInfoView.spatialReference)
const s=.5*n*window.devicePixelRatio*i
Le[0]=e-s,Le[1]=t-s,Le[2]=e+s,Le[3]=t+s
const o=.5*n*(i+Pe.a),a=Ae(this._index,e-o,t-o,e+o,t+o)
if(!a||0===a.length)return[]
const l=[],c=Object(_.m)(),u=Object(_.m)()
for(const e of a){var h
const{geometry:t,symbolResource:i}=e
this._getSymbolBounds(c,i,t,u,r),u[3]=u[2]=u[1]=u[0]=0,Object(_.x)(c,Le)&&(null==(h=e.graphic)?void 0:h.visible)&&l.push(e)}if(0===l.length)return[]
const d=this._hittestDrawHelper,f=[]
for(const e of l){const{geometry:t,symbolResource:i}=e,{hash:s,textInfo:o}=i,a=this._hashToCIM.get(s)
a&&d.hitTest(Le,a.symbol,t,o,r,n)&&f.push(e)}return f.sort(De),f.map(e=>e.graphic)}getGraphicsData(e,t,i){const n=this._searchForItems(t)
if(0===n.length||0===i.length)return[]
n.sort((e,t)=>e.zorder-t.zorder),n[0].insertAfter=-1
for(let e=1;e<n.length;e++)n[e].insertAfter=n[e-1].graphic.uid
n.sort((e,t)=>e.graphic.uid-t.graphic.uid),i.sort((e,t)=>e.uid-t.uid)
let r,s=0,o=0
const a=t.resolution,l=[],c={originPosition:"upperLeft",scale:[a,a],translate:[t.bounds[0],t.bounds[3]]}
for(const h of i){var u
for(o=-2;s<n.length;)if(r=n[s],s++,h.uid===r.graphic.uid){o=r.insertAfter
break}if(null==(u=r)||!u.geometry||-2===o)continue
const i=r.getGeometryQuantized(c,t.bounds,this._tileInfoView.spatialReference,a),d={...r.graphic.attributes}
d[this._uidFieldName]=h.uid,null==r.groupId&&(r.groupId=e.createTemplateGroup(r.symbol,null)),l.push({centroid:Ie.getCentroidQuantized(r,c),geometry:i,attributes:d,symbol:r.symbol,groupId:r.groupId,insertAfter:o,zorder:r.zorder})}return l.sort((e,t)=>e.zorder-t.zorder),l}queryTileData(e,t){if(0===this._graphics.length)return[]
const{bounds:i,resolution:n}=t,r=this._searchForItems(t),s=[]
return 0===r.length||this._createTileGraphics(s,e,r,{originPosition:"upperLeft",scale:[n,n],translate:[i[0],i[3]]},t),s}has(e){return this._itemByGraphic.has(e)}getBounds(e){const t=this._itemByGraphic.get(e)
return t?t.bounds:null}getAllBounds(){return Array.from(this._itemByGraphic.values()).filter(e=>e.graphic.visible).map(e=>e.bounds)}addOrModify(e,t,i){if(!e||Object(l.k)(t))return
this.has(e)&&this.remove(e),this._onAdd(e)
const n=[0,0,0,0],r=this._getSymbolBounds(null,t,i,n,0),s=Ie.acquire(e,t,i,Object(l.l)(r)?r:null,n)
return this._itemByGraphic.set(e,s),i&&this._index.insert(s),s.bounds}remove(e){if(!this._itemByGraphic.has(e))return
this._onRemove(e)
const t=this._itemByGraphic.get(e)
null!=t&&t.bounds&&this._index.remove(t),this._itemByGraphic.delete(e)}updateZ(){const e=this._graphics.items
let t,i
for(let n=0;n<e.length;n++)i=e[n],t=this._itemByGraphic.get(i),t&&(t.zorder=n)}update(e,t,i){const n=this._itemByGraphic.get(e)
n.groupId=null
const r=Object(_.f)(n.bounds)
this._index.remove(n)
const s=this._getSymbolBounds(n.bounds,t,i,n.size,0)
return Object(l.l)(s)&&n.set(e,t,i,s,n.size),i&&this._index.insert(n),{oldBounds:r,newBounds:n.bounds}}updateLevel(e){if(this._resolution===e)return
this._resolution=e,this._index.clear()
const t=this._itemByGraphic,i=[]
for(const[e,n]of t){const e=this._getSymbolBounds(n.bounds,n.symbolResource,n.geometry,n.size,0)
n.geometry&&Object(l.l)(e)&&(n.bounds=e,i.push(n))}this._index.load(i)}clear(){this._itemByGraphic.clear(),this._index.clear()}_createTileGraphics(e,t,i,n,r){const s=this._uidFieldName,o=this._tileInfoView.spatialReference,{bounds:a,resolution:l}=r
let c,u,h,d
i.sort((e,t)=>e.zorder-t.zorder)
for(let r=0;r<i.length;r++){h=i[r],c=h.graphic,u=h.getGeometryQuantized(n,a,o,l),d=0===r?-1:i[r-1].graphic.uid
const f={...h.graphic.attributes}
f[s]=c.uid,null==h.groupId&&(h.groupId=t.createTemplateGroup(h.symbol,null)),e.push({centroid:Ie.getCentroidQuantized(h,n),geometry:u,attributes:f,symbol:h.symbol,groupId:h.groupId,insertAfter:d,zorder:h.zorder})}}_searchForItems(e){const t=this._tileInfoView.spatialReference,i=e.bounds,n=Object(y.e)(t)
if(n&&t.isWrappable){const[t,r]=n.valid,s=Math.abs(i[2]-r)<1e-5,o=Math.abs(i[0]-t)<1e-5
if((!s||!o)&&(s||o)){const n=e.resolution
let o
o=Object(_.m)(s?[t,i[1],t+n*Pe.a,i[3]]:[r-n*Pe.a,i[1],r,i[3]])
const a=Ae(this._index,i[0],i[1],i[2],i[3]),l=Ae(this._index,o[0],o[1],o[2],o[3])
return[...new Set([...a,...l])]}}return Ae(this._index,i[0],i[1],i[2],i[3])}_getSymbolBounds(e,t,i,n,r){if(!t||!t.symbol||!i)return null
if(e||(e=Object(_.m)()),Object(xe.a)(e,i),!n||0===n[0]&&0===n[1]&&0===n[2]&&0===n[3]){const{hash:e,textInfo:i}=t,s=this._hashToCIM.get(e)
if(!s)return null
n||(n=[0,0,0,0])
const o=this._inflatedSizeHelper.getSymbolInflateSize(n,s.symbol,this._cimResourceManager,r,i)
n[0]=Object(ge.h)(o[0]),n[1]=Object(ge.h)(o[1]),n[2]=Object(ge.h)(o[2]),n[3]=Object(ge.h)(o[3])}const s=this._resolution,o=v.b.safeSize(n)
return e[0]-=o*s,e[1]-=o*s,e[2]+=o*s,e[3]+=o*s,e}}const De=(e,t)=>{const i=Object(Pe.d)(e.graphic),n=Object(Pe.d)(t.graphic)
return i===n?t.zorder-e.zorder:i-n}
var ze=i(1356),Fe=i(1748),ke=i(1333),Ne=i(1340)
const Ve=Object(a.a)("esri-2d-graphic-debug")
function Be(e,t,i){let n=i.get(e)
return n||(n={tile:t,addedOrModified:[],removed:[]},i.set(e,n)),n}let Ue=class extends(Object(Fe.a)(Object(o.b)(r.a))){constructor(e){super(e),this._storage=new de.a,this._displayIds=new Map,this._controller=new AbortController,this._tiles=new Map,this._graphicStoreUpdate=!1,this._graphicsSet=new Set,this._matcher=Promise.resolve(null),this._tileUpdateSet=new Set,this._tilesToUpdate=new Map,this._graphicIdToAbortController=new Map,this._attached=!1,this._updatingGraphicsTimer=null,this._hashToExpandedSymbol=new Map,this._hashToExpandedSymbolPromise=new Map,this._hashToCIMSymbolPromise=new Map,this._hashToCIM=new Map,this._processing=!1,this._needsProcessing=!1,this._pendingUpdate={added:new Set,updated:new Set,removed:new Set},this.lastUpdateId=-1,this.updateRequested=!1,this.defaultPointSymbolEnabled=!0,this.graphicUpdateHandler=this.graphicUpdateHandler.bind(this)}destroy(){this._updatingGraphicsTimer&&(clearTimeout(this._updatingGraphicsTimer),this._updatingGraphicsTimer=null,this.notifyChange("updating")),this._controller.abort(),this.container.destroy(),this._set("graphics",null),this._graphicStore.clear(),this._attributeStore=null,this._hashToExpandedSymbol.clear(),this.view=null,this.renderer=null,this._hashToCIM.clear(),this._hashToCIMSymbolPromise.clear(),this._hashToExpandedSymbolPromise.clear()}_createMatcher(e,t,i){if(e){const n=Object(ue.c)(e),r=Object(ue.a)({indexCount:0,fields:{}},"feature",e,n)
this._matcher=Object(ce.a)(r,t,null,i)}}_createDisplayId(e){let t=this._displayIds.get(e)
return t||(t=this._storage.createDisplayId(),this._displayIds.set(e,t)),t}initialize(){this._attributeStore=new he.a({type:"local",initialize:e=>Promise.resolve(this.container.attributeView.initialize(e)),update:e=>this.container.attributeView.requestUpdate(e),render:()=>this.container.requestRender()},Object(ke.a)("2d"),()=>this.notifyChange("updating")),this.container.hasHighlight=()=>this._attributeStore.hasHighlight
const e=new le.a(this.container.getMaterialItems.bind(this.container),this.view.featuresTilingScheme.tileInfo)
this._graphicStore=new Re(this.view.featuresTilingScheme,this.view.state.scale,this.uid,this.graphics,e=>{this._createDisplayId(e.uid),this._setFilterState(e.uid,e.visible)},e=>{const t=this._displayIds.get(e.uid)
this._displayIds.delete(e.uid),this._storage.releaseDisplayId(t)},this._hashToCIM),this._meshFactory=new ae.a(null,this.uid,e),this._templateStore=e,this.handles.add([Object(u.f)(()=>this.renderer,t=>{this._createMatcher(t,e,this.container.stage.resourceManager)
for(const e of this.graphics)this._pendingUpdate.updated.add(e)
this.requestUpdate()}),this.view.graphicsTileStore.on("update",this._onTileUpdate.bind(this)),this.container.on("attach",()=>{Ve&&this.container.enableRenderingBounds(()=>this._graphicStore.getAllBounds()),this.graphics.items.length>0&&this._graphicsChangeHandler({target:this.graphics,added:this.graphics.items,removed:[],moved:[]}),this.handles.add(this.graphics.on("change",e=>this._graphicsChangeHandler(e)),"graphics")
const t=this.container.stage.resourceManager
this._createMatcher(this.renderer,e,t),this._graphicStore.setResourceManager(t),this._attached=!0,this.notifyChange("updating")})])
const t=this.view.graphicsTileStore.tiles
this._onTileUpdate({added:t,removed:[]})}get updating(){return!this._attached||null!==this._updatingGraphicsTimer||this._tileUpdateSet.size>0||this._tilesToUpdate.size>0||this._attributeStore.isUpdating()}hitTest(e){if(!this.view||!this.view.position)return[]
const{resolution:t,rotation:i}=this.view.state
return this._graphicStore.hitTest(e.x,e.y,2,t,i)}update(e){Object(c.q)(this._controller.signal)
const t=e.state,{resolution:i}=t
if(this._graphicStore.updateLevel(i),this._graphicStoreUpdate=!0,this.updateRequested=!1,this._pendingUpdate.updated.size>0){if(!this._processing)return void this._updateGraphics()
this._needsProcessing=!0}}viewChange(){this.requestUpdate()}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.requestUpdateCallback())}processUpdate(e){this.updateRequested&&(this.updateRequested=!1,this.update(e))}graphicUpdateHandler(e){const{graphic:t,property:i}=e
switch(i){case"attributes":case"geometry":case"symbol":this._pendingUpdate.updated.add(t),this.requestUpdate()
break
case"visible":this._setFilterState(t.uid,t.visible),this._attributeStore.sendUpdates()}}setHighlight(e){const t=e.map(e=>this._displayIds.get(e)).filter(l.l)
this._attributeStore.setHighlight(e,t)}_getIntersectingTiles(e){const t=this._graphicStore.getBounds(e)
if(!t||0===Object(_.D)(t)||0===Object(_.v)(t))return[]
const i=Object(Pe.e)(t,this.view.spatialReference)
return Object(l.l)(i)?[...new Set([...this.view.graphicsTileStore.boundsIntersections(i[0]),...this.view.graphicsTileStore.boundsIntersections(i[1])])]:this.view.graphicsTileStore.boundsIntersections(t)}async _updateTile(e){Object(c.q)(this._controller.signal)
const t=e.tile,i=this._getGraphicsData(this._templateStore,t,e.addedOrModified),n=await this._processGraphics(t,i)
return Object(c.q)(this._controller.signal),this._patchTile(t.key,{type:"update",addOrUpdate:n,remove:e.removed,end:!0,clear:!1,sort:!1}),n}_patchTile(e,t){const i=this._tiles.get(e)
i&&(this.container.onTileData(i,t),this.container.requestRender())}_graphicsChangeHandler(e){const t=this._pendingUpdate
for(const i of e.added)t.added.add(i)
for(const i of e.moved)t.updated.add(i)
for(const i of e.removed)this._pendingUpdate.added.has(i)?t.added.delete(i):t.removed.add(i)
this._processing?this._needsProcessing=!0:this._updateGraphics()}_getGraphicsToUpdate(){const e={added:[],removed:[],updated:[]}
if(!this.graphics)return e
const t=this._pendingUpdate
for(const i of this.graphics.items)t.added.has(i)?e.added.push(i):t.updated.has(i)&&e.updated.push(i)
for(const i of t.removed)this._graphicStore.has(i)&&e.removed.push(i)
return t.added.clear(),t.removed.clear(),t.updated.clear(),e}async _updateGraphics(){this._processing=!0
const{added:e,removed:t,updated:i}=this._getGraphicsToUpdate(),n=this._tilesToUpdate
let r
try{if(!this._graphicStoreUpdate){const e=this.view.state,{resolution:t}=e
this._graphicStore.updateLevel(t)}const s=[],o=new Array(e.length+t.length)
for(let e=0;e<i.length;e++){const t=i[e],a=this._getIntersectingTiles(t)
for(const e of a)r=e.id,Be(r,e,n).removed.push(this._displayIds.get(t.uid))
s.push(this._updateGraphic(t,null)),o[e]=t}const a=i.length
for(let t=0;t<e.length;t++){const i=e[t]
o[a+t]=i,this._graphicsSet.add(i),s.push(this._addGraphic(i))}for(const e of t){this._abortProcessingGraphic(e.uid)
const t=this._getIntersectingTiles(e)
for(const i of t)r=i.id,Be(r,i,n).removed.push(this._displayIds.get(e.uid))
this._graphicsSet.delete(e),this._graphicStore.remove(e)}let l
this._flipUpdatingGraphics(),await Promise.all(s)
for(let e=0;e<o.length;e++){l=o[e]
const t=this._getIntersectingTiles(l)
for(const e of t)r=e.id,Be(r,e,n).addedOrModified.push(l)}this._graphicStore.updateZ()
const c=[]
for(const[e,t]of n)c.push(this._updateTile(t))
await Promise.all(c)}catch(e){Object(c.j)(e)}for(const i of t)try{const e=await this._getSymbolForGraphic(i,null)
if(e){const t=e.hash()
this._hashToExpandedSymbol.delete(t)}}catch(e){Object(c.j)(e)}n.clear(),this.notifyChange("updating"),this._processing=!1,this._needsProcessing&&(this._needsProcessing=!1,this._updateGraphics())}_getArcadeInfo(e){const t=(e.attributes?Object.keys(e.attributes):[]).map(t=>({name:t,alias:t,type:"string"==typeof e.attributes[t]?"esriFieldTypeString":"esriFieldTypeDouble"}))
return Object(l.k)(e.geometry)?null:{geometryType:Object(p.c)(e.geometry),spatialReference:f.default.fromJSON(e.geometry.spatialReference),fields:t}}_getSymbolForGraphic(e,t){return Object(c.q)(this._controller.signal),Object(l.l)(e.symbol)?Promise.resolve(e.symbol):Object(l.l)(this.renderer)?this.renderer.getSymbolAsync(e,{scale:this.view.scale,signal:Object(l.l)(t)?t.signal:null}):Promise.resolve(this._getNullSymbol(e))}_getCIMSymbol(e,t,i){let n=this._hashToCIM.get(t)
if(n)return Promise.resolve(n)
const r=Object(v.e)(e)
if(Object(l.l)(r)){if("CIMSymbolReference"===r.type)return n=r,this._hashToCIM.set(t,n),Promise.resolve(n)
let e=this._hashToCIMSymbolPromise.get(t)
return e||(e=r.fetchCIMSymbol(i).then(e=>(this._hashToCIM.set(t,e.data),this._hashToCIMSymbolPromise.delete(t),e)).catch(e=>(this._hashToCIMSymbolPromise.delete(t),Object(c.p)(e),null)),this._hashToCIMSymbolPromise.set(t,e),e)}return Promise.resolve(null)}_expandCIMSymbol(e,t,i,n){const r=this._hashToExpandedSymbol.get(i)
if(r)return Promise.resolve(r)
let s=this._hashToExpandedSymbolPromise.get(i)
if(s)return s
const o=this.container.stage,a=this._getArcadeInfo(t),l=Object(ue.c)(null),c=Object(Ne.createSymbolSchema)(e,l)
return s=Object(ze.b)(c,a,o.resourceManager,n),this._hashToExpandedSymbolPromise.set(i,s),s.then(e=>(this._hashToExpandedSymbol.set(i,e),this._hashToExpandedSymbolPromise.delete(i),e)),s}async _getSymbolResources(e,t){return Object(c.q)(this._controller.signal),this.container.stage?this._getSymbolForGraphic(e,t).then(i=>{if(!i)return null
const n=i.hash()
return this._getCIMSymbol(i,n,t).then(i=>Object(l.k)(i)?null:this._expandCIMSymbol(i,e,n,t).then(e=>{const t=e.layers.filter(e=>"text"===e.type&&"string"==typeof e.text)
if(t&&t.length>0){const i=new Array(t.length)
for(let e=0;e<t.length;e++){const n=t[e],r=[],[o]=Object(s.a)(n.text)
n.text=o
for(let e=0;e<o.length;e++)r.push(o.charCodeAt(e))
i[e]={symbol:n,id:e,glyphIds:r}}const r=new Map
return this.container.getMaterialItems(i).then(i=>{Object(l.c)(i)
for(let e=0;e<t.length;e++){const n=t[e]
r.set(n.cim,{text:n.text,mosaicItem:i[e].mosaicItem})}return{symbol:e,textInfo:r,hash:n}})}return{symbol:e,hash:n}}))}).catch(e=>(Object(c.p)(e),null)):null}async _projectAndNormalizeGeometry(e,t){if(Object(c.q)(this._controller.signal),Object(l.k)(e.geometry)||"mesh"===e.geometry.type)return null
let i=e.geometry
if(Object(p.g)(i)){const e=i.rings
i.rings=e}else if(Object(p.h)(i)){const e=i.paths
i.paths=e}else if(Object(p.d)(i)){const n=await this._getSymbolForGraphic(e,t)
Object(c.q)(this._controller.signal),i=n&&(Object(Pe.f)(n.type)||Object(Pe.g)(n.type))?i.center:Object(Pe.h)(i)}await Object(x.a)(i.spatialReference,this.view.spatialReference)
const n=Object(g.a)(i),r=Object(x.b)(n,i.spatialReference,this.view.spatialReference)
return r&&Object(m.b)(r),r}_onTileUpdate(e){const t=Object(y.e)(this.view.spatialReference)
if(e.added&&e.added.length>0)for(const i of e.added)this._addNewTile(i,t)
if(e.removed&&e.removed.length>0)for(const t of e.removed)this._removeTile(t.key)}async _addGraphic(e){this._abortProcessingGraphic(e.uid),Object(c.q)(this._controller.signal)
const t=new AbortController
this._graphicIdToAbortController.set(e.uid,t)
const i={signal:t.signal}
try{await this._addOrUpdateGraphic(e,i),Object(c.q)(this._controller.signal),this._graphicIdToAbortController.delete(e.uid)}catch(t){if(this._graphicIdToAbortController.delete(e.uid),!Object(c.j)(t))throw t}}_updateGraphic(e,t){Object(c.q)(this._controller.signal)
const i=this._projectAndNormalizeGeometry(e,t),n=this._getSymbolResources(e,t)
return Promise.all([i,n]).then(([t,i])=>{Object(c.q)(this._controller.signal),this._graphicStore.addOrModify(e,i,t)})}_addOrUpdateGraphic(e,t){Object(c.q)(this._controller.signal)
const i=this._projectAndNormalizeGeometry(e,t),n=this._getSymbolResources(e,t)
return Promise.all([i,n]).then(([t,i])=>{Object(c.q)(this._controller.signal),this._graphicsSet.has(e)&&this._graphicStore.addOrModify(e,i,t)})}_addTile(e){const t=this.view.featuresTilingScheme.getTileBounds(Object(_.m)(),e),i=this.view.featuresTilingScheme.getTileResolution(e.level),n=new D(e,i,t[0],t[3])
return this._tiles.set(e,n),this.container.addChild(n),n}async _addNewTile(e,t){const i=this._addTile(e.key),n=this._graphicStore.queryTileData(this._templateStore,e)
if(0===n.length)return
if(t){const i=Math.round((t.valid[1]-t.valid[0])/e.resolution)
for(const e of n)e.geometry&&(Object(p.f)(e.geometry)||Object(p.e)(e.geometry))&&this._wrapPoints(e,i)}const r=e.key
this._tileUpdateSet.add(e.key),this.notifyChange("updating")
try{const t={type:"update",clear:!1,addOrUpdate:await this._processGraphics(e,n),remove:[],end:!0,sort:!1}
i.patch(t),this._tileUpdateSet.delete(r),this.notifyChange("updating")}catch(e){if(this._tileUpdateSet.delete(r),this.notifyChange("updating"),!Object(c.j)(e))throw e}}_removeTile(e){if(!this._tiles.has(e))return
const t=this._tiles.get(e)
this.container.removeChild(t),t.destroy(),this._tiles.delete(e)}_setFilterState(e,t){const i=this._displayIds.get(e),n=this._attributeStore.getHighlightFlag(e)
this._attributeStore.setData(i,0,0,n|(t?O.u:0))}_getGraphicsData(e,t,i){const n=this.view,r=Object(y.e)(n.spatialReference),s=this._graphicStore.getGraphicsData(e,t,i)
if(r){const e=Math.round((r.valid[1]-r.valid[0])/t.resolution)
for(const t of s)t.geometry&&(Object(p.f)(t.geometry)||Object(p.e)(t.geometry))&&this._wrapPoints(t,e)}return s}_wrapPoints(e,t){const i=e.geometry
Object(p.e)(i)?this._wrapMultipoint(i,t):this._wrapPoint(e,t)}_wrapMultipoint(e,t){const i=e.points,n=[]
let r=0,s=0
for(const[e,o]of i){if(n.push([e+r,o]),r=0,t===Pe.b){const i=5*Pe.a
e+s<i?(n.push([t,0]),r=-t):e+s>Pe.b-i&&(n.push([-t,0]),r=t)}else e+s<-Pe.a?(n.push([t,0]),r=-t):e+s>Pe.b+Pe.a&&(n.push([-t,0]),r=t)
s+=e}e.points=n}_wrapPoint(e,t){const i=e.geometry
if(t===Pe.b){const n=5*Pe.a
i.x<n?e.geometry={points:[[i.x,i.y],[t,0]]}:i.x>Pe.b-n&&(e.geometry={points:[[i.x,i.y],[-t,0]]})}else i.x<-Pe.a?e.geometry={points:[[i.x,i.y],[t,0]]}:i.x>Pe.b+Pe.a&&(e.geometry={points:[[i.x,i.y],[-t,0]]})}_processGraphics(e,t,i){if(!t||!t.length||!this._meshFactory)return Promise.resolve(null)
const n=pe.from(t,this.uid,e.transform),r=this._meshFactory
return this._matcher.then(t=>r.analyzeGraphics(n,this.container.stage.resourceManager,t,null,null,i).then(()=>(this._attributeStore.sendUpdates(),this._processAnalyzedGraphics(e,n))))}_processAnalyzedGraphics(e,t){const i=this._meshFactory,n=t.getSize(),r=t.getCursor(),s={features:n,records:n,metrics:0},o=new oe.a(e.key.id,s,S.e.DEFAULT,!1,!1),a=[]
for(;r.next();){const t=r.readGraphic()
t.insertAfter=-1===t.insertAfter?-1:this._displayIds.get(t.insertAfter),t.displayId=this._displayIds.get(t.attributes[this.uid])
const n=new q(t.displayId)
n.insertAfter=t.insertAfter,a.push(n),i.writeGraphic(o,r,e.level,this.container.stage.resourceManager)}const l=e.tileInfoView.tileInfo.isWrappable,c=o.serialize(l)
if(1!==c.length)return new se
const u=c[0].message
return se.fromVertexData(u,a)}_abortProcessingGraphic(e){var t
null==(t=this._graphicIdToAbortController.get(e))||t.abort()}_getNullSymbol(e){const t=e.geometry
return Object(p.h)(t)?b.g:Object(p.g)(t)||Object(p.d)(t)?b.f:this.defaultPointSymbolEnabled?b.e:null}_flipUpdatingGraphics(){this._updatingGraphicsTimer&&clearTimeout(this._updatingGraphicsTimer),this._updatingGraphicsTimer=setTimeout(()=>{this._updatingGraphicsTimer=null,this.notifyChange("updating")},160),this.notifyChange("updating")}}
Object(n.a)([Object(h.b)({constructOnly:!0})],Ue.prototype,"requestUpdateCallback",void 0),Object(n.a)([Object(h.b)()],Ue.prototype,"container",void 0),Object(n.a)([Object(h.b)({constructOnly:!0})],Ue.prototype,"graphics",void 0),Object(n.a)([Object(h.b)()],Ue.prototype,"updating",null),Object(n.a)([Object(h.b)()],Ue.prototype,"view",void 0),Object(n.a)([Object(h.b)()],Ue.prototype,"updateRequested",void 0),Object(n.a)([Object(h.b)()],Ue.prototype,"defaultPointSymbolEnabled",void 0),Ue=Object(n.a)([Object(d.a)("esri.views.2d.layers.support.GraphicsView2D")],Ue)
const Ge=Ue},1754:function(e,t,i){"use strict"
i.d(t,"a",(function(){return _})),i(1576),i(1497)
var n=i(1150),r=(i(1545),i(1564),i(1e3)),s=i(1269),o=i(1003),a=i(1022)
const l=new Map
l.set(o.d.MARKER,{multiplier:1,indicesPerRecord:6,verticesPerRecord:4}),l.set(o.d.LINE,{multiplier:1,indicesPerRecord:24,verticesPerRecord:8}),l.set(o.d.FILL,{multiplier:1,indicesPerRecord:10,verticesPerRecord:10}),l.set(o.d.TEXT,{multiplier:8,indicesPerRecord:6,verticesPerRecord:4}),l.set(o.d.LABEL,{multiplier:8,indicesPerRecord:6,verticesPerRecord:4})
var c=i(1493)
class u{constructor(e,t,i){this._start={index:0,vertex:0}
const n=function(e,t,i){const{indicesPerRecord:n,multiplier:s,verticesPerRecord:o}=l.get(e)
return{recordBytes:i*r.r*Uint32Array.BYTES_PER_ELEMENT,indexBytes:s*n*i*Uint32Array.BYTES_PER_ELEMENT,vertexBytes:s*o*i*t}}(e,t,i),s=t/4
this.geometryType=e,this._records=new c.a(Int32Array,n.recordBytes),this._indices=new c.a(Uint32Array,n.indexBytes),this._vertices=new c.a(Uint32Array,n.vertexBytes),this._metrics=new c.a(Float32Array,0),this._strideInt=s}serialize(e){const t=this._records.buffer(),i=this._indices.buffer(),n=this._vertices.buffer(),r=this._metrics.length?this._metrics.buffer():null,s=4*this._strideInt
return e.push(t,i,n),{stride:s,records:t,indices:i,vertices:n,metrics:r}}get strideInt(){return this._strideInt}get recordCount(){return this._records.length/r.r}get vertexCount(){return this._vertices.length/this._strideInt}get indexCount(){return this._indices.length}get indexWriter(){return this._indices}get vertexWriter(){return this._vertices}get metricWriter(){return this._metrics}vertexEnsureSize(e){this._vertices.ensureSize(e)}indexEnsureSize(e){this._indices.ensureSize(e)}recordStart(){this._start.index=this._indices.length,this._start.vertex=this._vertices.length}recordEnd(e,t,i,n,r,s,o,a){this._records.push(e),this._records.push(null!=t?t:0),this._records.push(i),this._records.push(n),this._records.push(r),this._records.push(s),this._records.push(o),this._records.writeF32(a)}writeIndex(e){this._indices.push(e)}writeVertex(e){this._vertices.push(e)}writeVertexF32(e){this._vertices.writeF32(e)}copyLastFrom(e,t,i){const n=e._records.length-r.r,s=e._records.getValue(n),o=e._records.getValue(n+1),a=e._records.getValue(n+2),l=e._records.getValue(n+4),c=e._records.getValue(n+6),u=e._records.getValue(n+7),h=this._vertices.length,d=(e._start.vertex-this._vertices.length)/this._strideInt,f=this._indices.length,_=this.vertexCount
for(let t=e._start.index;t!==e._indices.length;t++){const i=e._indices.getValue(t)
this._indices.push(i-d)}for(let t=e._start.vertex;t!==e._vertices.length;t++){const i=e._vertices.getValue(t)
this._vertices.push(i)}for(let e=h;e<=this._vertices.length;e+=this._strideInt)this._vertices.i1616Add(e,t,i)
this._records.push(s),this._records.push(o),this._records.push(a),this._records.push(f),this._records.push(l),this._records.push(_),this._records.push(c),this._records.push(u)}}var h=i(1704)
function d(e){switch(e){case 1:case 8:case 32:return-1
case 2:case 64:return 0
case 4:case 16:case 128:return 1}}function f(e){switch(e){case 1:case 2:case 4:return-1
case 8:case 16:return 0
case 32:case 64:case 128:return 1}}class _{constructor(e,t,i,n,r,s=0){this._hasAggregate=!1,this.hasRecords=!1,this._data={self:new Map,neighbors:new Array},this._version=0,this._current={geometryType:0,writer:null,overlaps:0,start:0,insertAfter:0,sortKey:0,id:0,materialKey:0,indexStart:0,vertStart:0,isDotDensity:!1,bufferingEnabled:!1,metricBoxLenPointer:0},this.hint=t,this.tileKey=e,this._hasAggregate=n,this._pixelBufferEnabled=r,this._version=s,this._symbologyType=i}get hasAggregates(){return this._hasAggregate}get hasPixelBufferEnabled(){return this._pixelBufferEnabled}serialize(e){const t=[]
return t.push(this._serializeTileVertexData(this.tileKey,this.tileKey,this._data.self)),this._data.neighbors.forEach((i,r)=>{const s=1<<r,o=d(s),a=f(s),l=Object(h.a)(new n.a(this.tileKey),o,a,e),c=this._serializeTileVertexData(this.tileKey,l.id,i.vertexData)
c.message.bufferIds=i.displayIds,t.push(c)}),t}_serializeTileVertexData(e,t,i){var n,r,s,a,l
const c=new Array
return{message:{tileKeyOrigin:e,tileKey:t,data:{[o.d.MARKER]:null==(n=i.get(o.d.MARKER))?void 0:n.serialize(c),[o.d.FILL]:null==(r=i.get(o.d.FILL))?void 0:r.serialize(c),[o.d.LINE]:null==(s=i.get(o.d.LINE))?void 0:s.serialize(c),[o.d.TEXT]:null==(a=i.get(o.d.TEXT))?void 0:a.serialize(c),[o.d.LABEL]:null==(l=i.get(o.d.LABEL))?void 0:l.serialize(c)},version:this._version},transferList:c}}featureStart(e,t){this._current.insertAfter=e,this._current.sortKey=t}featureEnd(){}recordStart(e,t,i,n){this._current.writer=this._getVertexWriter(i),this._current.overlaps=0,this._current.indexStart=this._current.writer.indexCount,this._current.vertStart=this._current.writer.vertexCount,this._current.bufferingEnabled=n,this._current.id=e,this._current.materialKey=t,this._current.geometryType=i,this._current.isDotDensity=!1,this._current.writer.recordStart()}recordCount(){return this._current.writer.recordCount}vertexCount(){return this._current.writer.vertexCount}indexCount(){return this._current.writer.indexCount}vertexEnsureSize(e){this._current.writer.vertexEnsureSize(e)}indexEnsureSize(e){this._current.writer.indexEnsureSize(e)}vertexBounds(e,t,i,n){this._current.bufferingEnabled&&this._addOverlap(e,t,i,n)}vertexWrite(e){this._current.writer.writeVertex(e)}vertexWriteF32(e){this._current.writer.writeVertexF32(e)}vertexEnd(){}vertexWriter(){return this._current.writer.vertexWriter}indexWrite(e){this._current.writer.writeIndex(e)}indexWriter(){return this._current.writer.indexWriter}metricWriter(){return this._current.writer.metricWriter}metricStart(e,t,i,n,r,a,l,c){this._current.writer=this._getVertexWriter(o.d.LABEL)
const u=this._current.writer.metricWriter
u.push(Object(s.f)(e)),u.push(t),u.push(i),u.push(n),u.push(r),u.push(a),u.push(l),u.push(c),u.push(255),this._current.metricBoxLenPointer=u.push(0)}metricEnd(){const e=this._current.writer.metricWriter
0===e.getValue(this._current.metricBoxLenPointer)&&e.seek(e.length-10)}metricBoxWrite(e,t,i,n){const r=this._current.writer.metricWriter
r.incr(this._current.metricBoxLenPointer),r.push(0),r.push(0),r.push(e),r.push(t),r.push(i),r.push(n)}recordEnd(){const e=this._current.vertStart,t=this._current.writer.vertexCount-e
if(!t)return!1
this.hasRecords=!0
const i=this._current.indexStart,n=this._current.writer.indexCount-i
if(this._current.writer.recordEnd(this._current.id,this._current.materialKey,this._current.insertAfter,i,n,e,t,this._current.sortKey),!this._pixelBufferEnabled||this._hasAggregate||0===this._current.overlaps||this._current.geometryType===o.d.LABEL)return!0
const s=this._current.writer
for(let e=0;e<8;e++){const t=1<<e
if(this._current.overlaps&t){this._data.neighbors[e]||(this._data.neighbors[e]={vertexData:new Map,displayIds:new Set})
const i=this._data.neighbors[e],n=this._current.geometryType
if(!i.vertexData.has(n)){const e=Object(a.n)(n,this._symbologyType).geometry,t=new u(n,e,r.C)
i.vertexData.set(n,t)}const o=i.vertexData.get(this._current.geometryType),l=8,c=512*-d(t)*l,h=512*-f(t)*l
null!=o&&o.copyLastFrom(s,c,h),i.displayIds.add(this._current.id)}}return!0}_addOverlap(e,t,i,n){const s=255^((e<0+i?148:e>=r.Z-i?41:189)|(t<0+n?224:t>=r.Z-n?7:231))
this._current.overlaps|=s}_getVertexWriter(e){if(!this._data.self.has(e)){const t=this._data.self,i=Object(a.n)(e,this._symbologyType).geometry
t.set(e,new u(e,i,this.hint.records))}return this._data.self.get(e)}}},1755:function(e,t,i){"use strict"
i.d(t,"a",(function(){return D})),i(235)
var n=i(23),r=i(973),s=i(1548),o=i(1269),a=i(446),l=i(233),c=i(991),u=i(980),h=i(1215),d=i(1192),f=i(1030),_=i(1287),m=i(1174),p=i(1e3),g=i(1003),y=i(1064),x=i(1023),v=i(1182)
function b(e){return e.length-1}function O(e,t,i=1){const[n,r]=function(e,t){return e[t+1]}(e,t)
return Math.sqrt(n*n+r*r)*i}class S{constructor(e,t,i,n,r){this._segments=e,this._index=t,this._distance=i,this._xStart=n,this._yStart=r,this._done=!1}static create(e){return new S(e,0,0,e[0][0],e[0][1])}clone(){return new S(this._segments,this._index,this._distance,this.xStart,this.yStart)}equals(e){return this._index===e._index||e._index===this._index-1&&(0===this._distance||1===e._distance)||e._index===this._index+1&&(1===this._distance||0===e._distance)}leq(e){return this._index<e._index||this._index===e._index&&this._distance<=e._distance}geq(e){return this._index>e._index||this._index===e._index&&this._distance>=e._distance}get _segment(){return this._segments[this._index+1]}get angle(){const e=this.dy,t=(0*e+-1*-this.dx)/(1*this.length)
let i=Math.acos(t)
return e>0&&(i=2*Math.PI-i),i}get xStart(){return this._xStart}get yStart(){return this._yStart}get x(){return this.xStart+this.distance*this.dx}get y(){return this.yStart+this.distance*this.dy}get dx(){return this._segment[0]}get dy(){return this._segment[1]}get xMidpoint(){return this.xStart+.5*this.dx}get yMidpoint(){return this.yStart+.5*this.dy}get xEnd(){return this.xStart+this.dx}get yEnd(){return this.yStart+this.dy}get length(){const{dx:e,dy:t}=this
return Math.sqrt(e*e+t*t)}get remainingLength(){return this.length*(1-this._distance)}get backwardLength(){return this.length*this._distance}get distance(){return this._distance}get done(){return this._done}hasPrev(){return this._index-1>=0}hasNext(){return this._index+1<b(this._segments)}next(){return this.hasNext()?(this._xStart+=this.dx,this._yStart+=this.dy,this._distance=0,this._index+=1,this):null}prev(){return this.hasPrev()?(this._index-=1,this._xStart-=this.dx,this._yStart-=this.dy,this._distance=1,this):(this._done=!0,null)}_seekBackwards(e,t){const i=this.backwardLength
if(e<=i)return this._distance=(i-e)/this.length,this
let n=this.backwardLength
for(;this.prev();){if(n+this.length>e)return this._seekBackwards(e-n)
n+=this.length}return this._distance=0,t?this:null}seek(e,t=!1){if(e<0)return this._seekBackwards(Math.abs(e),t)
if(e<=this.remainingLength)return this._distance=(this.backwardLength+e)/this.length,this
let i=this.remainingLength
for(;this.next();){if(i+this.length>e)return this.seek(e-i,t)
i+=this.length}return this._distance=1,t?this:null}}function T(e,t,i,n=!0){const r=function(e){let t=0
for(let i=0;i<b(e);i++)t+=O(e,i)
return t}(e),s=S.create(e),o=r/2
if(!n)return s.seek(o),void i(s.clone(),0,o+0*t,r)
const a=Math.max((r-t)/2,0),l=Math.floor(a/t),c=o-l*t
s.seek(c)
for(let e=-l;e<=l;e++)s.x<512&&s.x>=0&&s.y<512&&s.y>=0&&i(s.clone(),e,o+e*t,r),s.seek(t)}function C(e,t){const i=1e-6
if(t<=0)return
const n=e.length
if(n<3)return
const r=[]
let s=0
r.push(0)
for(let t=1;t<n;t++)s+=Object(v.c)(e[t],e[t-1]),r.push(s)
t=Math.min(t,.2*s)
const o=[]
o.push(e[0][0]),o.push(e[0][1])
const a=e[n-1][0],l=e[n-1][1],c=Object(v.h)([0,0],e[0],e[1])
Object(v.g)(c),e[0][0]+=t*c[0],e[0][1]+=t*c[1],Object(v.h)(c,e[n-1],e[n-2]),Object(v.g)(c),e[n-1][0]+=t*c[0],e[n-1][1]+=t*c[1]
for(let e=1;e<n;e++)r[e]+=t
r[n-1]+=t
const u=.5*t
for(let s=1;s<n-1;s++){let a=0,l=0,c=0
for(let n=s-1;n>=0&&!(r[n+1]<r[s]-u);n--){const o=u+r[n+1]-r[s],h=r[n+1]-r[n],d=r[s]-r[n]<u?1:o/h
if(Math.abs(d)<i)break
const f=d*d,_=d*o-.5*f*h,m=d*h/t,p=e[n+1],g=e[n][0]-p[0],y=e[n][1]-p[1]
a+=m/_*(p[0]*d*o+.5*f*(o*g-h*p[0])-f*d*h*g/3),l+=m/_*(p[1]*d*o+.5*f*(o*y-h*p[1])-f*d*h*y/3),c+=m}for(let o=s+1;o<n&&!(r[o-1]>r[s]+u);o++){const n=u-r[o-1]+r[s],h=r[o]-r[o-1],d=r[o]-r[s]<u?1:n/h
if(Math.abs(d)<i)break
const f=d*d,_=d*n-.5*f*h,m=d*h/t,p=e[o-1],g=e[o][0]-p[0],y=e[o][1]-p[1]
a+=m/_*(p[0]*d*n+.5*f*(n*g-h*p[0])-f*d*h*g/3),l+=m/_*(p[1]*d*n+.5*f*(n*y-h*p[1])-f*d*h*y/3),c+=m}o.push(a/c),o.push(l/c)}o.push(a),o.push(l)
for(let t=0,i=0;t<n;t++)e[t][0]=o[i++],e[t][1]=o[i++]}var w=i(1579)
const M=l.a.getLogger("esri.views.2d.engine.webgl.WGLLabelTemplate"),I=function(e){const t=new Map
return e=>(t.has(e)||t.set(e,(e=>{let t=0
if(0===e)return 1/0
for(;!(e%2);)t++,e/=2
return t})(e)),t.get(e))}(),P=e=>Math.floor(127*e+127),E=e=>Math.floor(10*e),L=e=>Math.round(e*(254/360))
class A extends w.a{constructor(e,t,i,n){var r,s,o,a,l,h
super(e,null==(r=i.font)?void 0:r.size,i.haloSize||0,null==(s=i.font)?void 0:s.size,i.color&&Object(m.c)(i.color)||0,i.haloColor&&Object(m.c)(i.haloColor)||0,i.horizontalAlignment,i.verticalAlignment,Object(_.i)(t.labelPlacement)?f.a.MAP:f.a.SCREEN,null==(o=i.font)?void 0:o.decoration,!1,i.angle||0,i.xoffset,i.yoffset,i.lineWidth,i.lineHeight,null,null,!1,null,null,i.backgroundColor&&Object(m.c)(i.backgroundColor),i.borderLineColor&&Object(m.c)(i.borderLineColor),i.borderLineSize),this._outLineLabelAngle=0,this._refPlacementPadding=0,this._refPlacementDirX=0,this._refPlacementDirY=0,this._refOffsetX=0,this._refOffsetY=0,this._zoomLevel=0,this.geometryType=g.d.LABEL,this._allowOverrun=null!=(a=t.allowOverrun)&&a,this._repeatLabel=null==(l=t.repeatLabel)||l,this._labelPosition=null!=(h=t.labelPosition)?h:"curved"
const d=function(e,t){const i=!!e.minScale&&t.scaleToZoom(e.minScale)||0
return Object(c.f)(i,0,25.5)}(t,n),y=function(e,t){const i=!!e.maxScale&&t.scaleToZoom(e.maxScale)||255
return Object(c.f)(i,0,25.5)}(t,n),v=t.labelPlacement,[b,O]=Object(_.c)(v)
this._xAlignD=b,this._yAlignD=O,this._minZoom=d,this._maxZoom=y,this._minBackgroundZoom=d,this._maxBackgroundZoom=y,this._refPlacementPadding=Object(u.h)(i.haloSize)+p.X,this._repeatLabelDistance=t.repeatLabelDistance?Object(u.h)(t.repeatLabelDistance):128
const S=x.b.load(e)
S.sdf=!0,this._materialKey=S.data}static fromLabelClass(e,t){if("esriServerLinePlacementCenterAlong"===e.labelPlacement){const t=e.symbol
t.xoffset=0,t.yoffset=0,t.angle=0,t.font.decoration="none"}return new A(e.materialKey,e,e.symbol,t)}get _shapedBox(){return Object(n.u)(this._shapingInfo).bounds}setZoomLevel(e){this._zoomLevel=e}bindReferenceTemplate(e){let t=Object(_.f)(this._xAlignD),i=Object(_.h)(this._yAlignD)
if(this._refOffsetX=0,this._refOffsetY=0,Object(n.k)(e))return void(this._refSymbolAndPlacementOffset=Object(y.b)(0,0,P(t),P(i)))
if("circle"===e.boundsType&&(t||i)){const e=Math.sqrt(t*t+i*i)
t/=e,i/=e}const r=Math.max(e.height,e.width),s=4*this._refPlacementPadding
this._refSymbolAndPlacementOffset=Object(y.b)(s,r,P(t),P(i)),this._referenceSize=r,this._refPlacementDirX=t,this._refPlacementDirY=i,this._refOffsetX=e.xOffset,this._refOffsetY=e.yOffset}_write(e,t){if(Object(n.k)(this._shapingInfo))return
const i=this._shapingInfo,r=t.getDisplayId(),s="esriGeometryPolygon"===t.geometryType?t.readLegacyCentroid():t.readLegacyGeometry()
if(s)switch(this._current={out:e,inId:r,inShaping:i,zoomLevel:this._zoomLevel},"esriGeometryPolyline"===t.geometryType&&"curved"===this._labelPosition&&(this._borderLineColor||this._backgroundColor)&&M.warnOnce("TextSymbol properties 'borderLineColor', 'borderLineSize', and 'backgroundColor' are not supported in curved labels"),t.geometryType){case"esriGeometryPolyline":this._placeLineLabels(s)
break
case"esriGeometryPoint":case"esriGeometryPolygon":this._placePointLabels(s)
break
default:((e,t="mapview-labeling")=>{M.error(new a.a(t,e))})(`Geometry of type ${t.geometryType} is not supported`)}}_isVisible(e,t){const i=E(this._current.zoomLevel)
return E(e)<=i&&i<=E(t)}_placePointLabels(e){const{out:t,inId:i,inShaping:n}=this._current
this._writeGlyphs(t,i,e,n)}_placeLineLabels(e){const t=function(e,t){const i=t
for(let t=0;t<e.length;t++){let n=e[t]
const r=[]
r.push(n[0])
for(let e=1;e<n.length;e++){let[t,i]=r[e-1]
t+=n[e][0],i+=n[e][1],r.push([t,i])}C(r,i)
const s=[]
s.push(r[0])
for(let e=1;e<r.length;e++){const[t,i]=r[e-1],[n,o]=r[e],a=Math.round(n-t),l=Math.round(o-i)
s.push([a,l])}e[t]=s,n=s}return e}(e.paths,this._current.inShaping.bounds.width),i=this._placeSubdivGlyphs.bind(this),n=(this._shapedBox.width+this._repeatLabelDistance)/2
for(const e of t)T(e,n,i,this._repeatLabel)}_placeSubdivGlyphs(e,t,i,n){const r=I(t),s=this._shapedBox.width/2,o=Math.sqrt(this._repeatLabelDistance)/2,a=Math.min(i,n-i),l=this._current.inShaping.isMultiline?25:Math.log2(a/(o+s/2)),c=0===t?l:Math.min(r,l),u=Math.max(this._minZoom,this._current.zoomLevel+1-c),h=this._current.zoomLevel-u,d=this._shapedBox.width/2*2**h
this._current.inShaping.isMultiline?0===t&&this._placeStraight(e,u):this._allowOverrun&&h<0?this._placeStraightAlong(e,this._minZoom):"parallel"===this._labelPosition?this._placeStraightAlong(e,u):"curved"===this._labelPosition&&this._placeCurved(e,u,d)}_placeStraight(e,t){const{out:i,inId:n,inShaping:r}=this._current,s=Math.ceil(e.angle*(180/Math.PI)%360),o=Math.ceil((e.angle*(180/Math.PI)+180)%360)
this._outLineLabelAngle=L(s),this._writeGlyphs(i,n,e,r,t),this._outLineLabelAngle=L(o),this._writeGlyphs(i,n,e,r,t)}_placeCurved(e,t,i){const{out:n,inId:r}=this._current
n.metricStart(r,t,e.x,e.y,0,0,0,0)
const s=e.clone(),o=e.angle*(180/Math.PI)%360,a=(e.angle*(180/Math.PI)+180)%360
this._outLineLabelAngle=L(o),this._placeFirst(s,t,1),this._placeBack(e,s,t,i,1),this._placeForward(e,s,t,i,1),this._outLineLabelAngle=L(a),this._placeFirst(s,t,0),this._placeBack(e,s,t,i,0),this._placeForward(e,s,t,i,0),n.metricEnd()}_placeStraightAlong(e,t){const{out:i,inId:n,inShaping:r}=this._current
i.metricStart(n,t,e.x,e.y,0,0,0,0)
const s=e.clone(),o=e.angle*(180/Math.PI)%360,a=(e.angle*(180/Math.PI)+180)%360,l=r.glyphs.length>0&&(this._borderLineColor||this._backgroundColor)
if(this._maxBackgroundZoom=25,this._minBackgroundZoom=Math.max(t,0),l){const t=x.b.load(this._materialKey)
t.textureBinding=r.glyphs[0].textureBinding
const s=Object(h.b)(Object(d.a)(),-e.angle),[l,c]=r.shapeBackground(s)
this._outLineLabelAngle=L(o),i.recordStart(n,t.data,this.geometryType,!0),this._writeBackgroundGeometry(i,n,e,l,c),i.recordEnd(),this._outLineLabelAngle=L(a),i.recordStart(n,t.data,this.geometryType,!0),this._writeBackgroundGeometry(i,n,e,l,c),i.recordEnd()}this._outLineLabelAngle=L(o),this._placeFirst(s,t,1,!0),this._outLineLabelAngle=L(a),this._placeFirst(s,t,0,!0),i.metricEnd()}_placeBack(e,t,i,n,r){const s=e.clone()
let o=e.backwardLength+0
for(;s.prev()&&!(o>=n);)this._placeOnSegment(s,t,o,i,-1,r),o+=s.length+0}_placeForward(e,t,i,n,r){const s=e.clone()
let o=e.remainingLength+0
for(;s.next()&&!(o>=n);)this._placeOnSegment(s,t,o,i,1,r),o+=s.length+0}_placeFirst(e,t,i,n=!1){const r=e,s=this._current.inShaping,o=s.glyphs,a=this._current.zoomLevel,{out:l,inId:c}=this._current
for(const u of o){const o=u.x>s.bounds.x?i:1-i,h=o*e.remainingLength+(1-o)*e.backwardLength,d=Math.abs(u.x+u.width/2-s.bounds.x),f=Math.max(0,a+Math.log2(d/(h+0))),_=Math.max(t,n?0:f)
if(u.maxZoom=25,u.angle=e.angle+(1-i)*Math.PI,u.minZoom=_,this._writeGlyph(l,c,r.x,r.y,u),i&&this._isVisible(u.minZoom,u.maxZoom)){const e=u.bounds
l.metricBoxWrite(e.center[0],e.center[1],e.width,e.height)}}}_placeOnSegment(e,t,i,n,r,s){const o=this._current.inShaping.glyphs,{out:a,inId:l}=this._current,c=this._current.inShaping,u=this._current.zoomLevel,h=e.dx/e.length,d=e.dy/e.length,f={x:e.x+i*-r*h,y:e.y+i*-r*d}
for(const h of o){const o=h.x>c.bounds.x?s:1-s
if(!(o&&1===r||!o&&-1===r))continue
const d=Math.abs(h.x+h.width/2-c.bounds.x),_=Math.max(0,u+Math.log2(d/i)-.1),m=Math.max(n,u+Math.log2(d/(i+e.length+0)))
if(0!==_&&(h.angle=e.angle+(1-s)*Math.PI,h.minZoom=m,h.maxZoom=_,this._writeGlyph(a,l,f.x,f.y,h),s&&this._isVisible(h.minZoom,h.maxZoom))){const i=h.bounds,n=e.x-t.x,r=e.y-t.y
a.metricBoxWrite(i.center[0]+n,i.center[1]+r,i.width,i.height)}}}_writeGlyphs(e,t,i,n,r=this._minZoom){if(i.x<0||i.x>=512||i.y<0||i.y>=512)return
if(n.glyphs.length>0&&(this._borderLineColor||this._backgroundColor)){const r=x.b.load(this._materialKey)
r.textureBinding=n.glyphs[0].textureBinding,e.recordStart(t,r.data,this.geometryType,!0),this._writeBackgroundGeometry(e,t,i,n.bounds,n.background),e.recordEnd()}const s=i.x+this._refOffsetX,o=i.y-this._refOffsetY
for(const i of n.glyphs)i.minZoom=r,i.maxZoom=this._maxZoom,this._writeGlyph(e,t,s,o,i)
const a=this._refPlacementDirX,l=this._refPlacementDirY,c=n.boundsT
e.metricStart(t,r,s,o,a,l,this._referenceSize,this._materialKey),e.metricBoxWrite(c.center[0],c.center[1],c.width,c.height),e.metricEnd()}_writeVertexCommon(e,t,i,n){const r=this._color,s=this._haloColor,o=Object(y.b)(0,0,this._size,this._haloSize),a=Math.max(n.minZoom,this._minZoom),l=Math.min(n.maxZoom,this._maxZoom),c=Object(y.b)(E(a),E(l),this._outLineLabelAngle,0)
e.vertexWrite(i),e.vertexWrite(t),e.vertexWrite(r),e.vertexWrite(s),e.vertexWrite(o),e.vertexWrite(this._refSymbolAndPlacementOffset),e.vertexWrite(c)}_writeBackgroundVertex(e,t,i,n,r,s){const o=Object(y.b)(0,0,this._size,this._haloSize),a=Object(y.b)(0,0,0,0),l=Object(y.b)(E(this._minBackgroundZoom),E(this._maxBackgroundZoom),this._outLineLabelAngle,1)
e.vertexWrite(i),e.vertexWrite(t),e.vertexWrite(n),e.vertexWrite(a),e.vertexWrite(o),e.vertexWrite(this._refSymbolAndPlacementOffset),e.vertexWrite(l),e.vertexWrite(r),e.vertexWrite(s),e.vertexEnd()}}var j=i(1583),R=i(1587)
class D{constructor(e,t,i){this._loadPromise=Object(s.a)(),this._geometryType=e,this._idField=t,this._templateStore=i}update(e,t){Object(n.l)(e.mesh.labels)&&(this._labelTemplates=this._createLabelTemplates(e.mesh.labels,t)),this._schema=e}_createLabelTemplates(e,t){const i=new Map
if("simple"===e.type){for(const n of e.classes){const e=A.fromLabelClass(n,t)
i.set(n.index,e)}return i}for(const n in e.classes){const r=e.classes[n]
for(const e of r){const n=A.fromLabelClass(e,t)
i.set(e.index,n)}}return i}get templates(){return this._templateStore}async analyze(e,t,i,s,a,l,c){if(Object(r.k)(c))return
let u
"dictionary"===(null==i?void 0:i.type)&&(u=await i.analyze(this._idField,e.copy(),t,a,l,c))
let h=0
for(;e.next();){let t=null
if(t=u?u[h++]:Object(n.l)(s)&&Object(o.h)(e.getDisplayId())&&1!==e.readAttribute("cluster_count")?s.match(this._idField,e,this._geometryType,a,l):i.match(this._idField,e,this._geometryType,a,l),e.setGroupId(t),Object(R.b)(t)){const i=this._templateStore.getDynamicTemplateGroup(t).templates
for(const t of i)t&&t.analyze&&t.analyze(this._templateStore,e,a,l)}}return await this._loadPromise,this._templateStore.finalize(c)}async analyzeGraphics(e,t,i,n,s,o){if(Object(r.k)(o))return
const a=e.getCursor()
for(i&&await i.analyze(this._idField,a.copy(),t,n,s,o);a.next();){let e=a.getGroupId()
if(null!=e&&-1!==e||(e=null==i?void 0:i.match(this._idField,a,a.geometryType,n,s),a.setGroupId(e)),Object(R.b)(e)){const t=this._templateStore.getDynamicTemplateGroup(e).templates
for(const e of t)e&&e.analyze&&e.analyze(this._templateStore,a,n,s)}a.setGroupId(e)}return await this._loadPromise,this._templateStore.finalize(o)}writeGraphic(e,t,i,n){const r=t.getGroupId(),s=t.getDisplayId(),o=this._templateStore.getTemplateGroup(r)
if(e.featureStart(t.insertAfter,0),null!=s){if(Object(R.b)(r))for(const e of o.templates)e&&e.bindFeature(t,null,null)
if(o){for(const r of o.templates)r&&r.write(e,t,i,n)
e.featureEnd()}}}writeCursor(e,t,i,r,s,o,a){const l=t.getGroupId(),c=t.getDisplayId(),u=this._templateStore.getTemplateGroup(l),h=u.templates,d=this._getSortKeyValue(t,u)
if(e.featureStart(0,d),null!=c&&h){if(Object(R.b)(l))for(const e of h)e.bindFeature(t,i,r)
for(const i of h)i.write(e,t,s,a)
if(Object(n.l)(o)&&e.hasRecords){const i=o&&this._findLabelRef(h)
this._writeLabels(e,t,o,i,s,a)}e.featureEnd()}}_getSortKeyValue(e,t){const i=this._schema.mesh.sortKey
if(Object(n.k)(i))return 0
let r=0
return r=!0===i.byRenderer&&null!=t.sortKey?t.sortKey:null!=i.fieldIndex?e.getComputedNumericAtIndex(i.fieldIndex):null!=i.field?e.readAttribute(i.field):e.readAttribute(this._idField),r*="asc"===i.order?1:-1,null==r||isNaN(r)?0:r}_findLabelRef(e){for(const t of e)if(t instanceof j.a)return t
return null}_writeLabels(e,t,i,r,s,o){for(const a of i)if(Object(n.l)(a)&&a){const{glyphs:i,rtl:n,index:l}=a,c=this._labelTemplates.get(l)
if(!c)continue
c.setZoomLevel(s),c.bindReferenceTemplate(r),c.bindTextInfo(i,n),c.write(e,t,null,o)}}}},1758:function(e,t,i){"use strict"
i.d(t,"a",(function(){return a}))
var n=i(1269)
class r{constructor(){this._freeIds=[],this._idCounter=1}createId(e=!1){return Object(n.d)(this._getFreeId(),e)}releaseId(e){this._freeIds.push(e)}_getFreeId(){return this._freeIds.length?this._freeIds.pop():this._idCounter++}}var s=i(1549)
function o(e,t,i){if(!(e.length>t))for(;e.length<=t;)e.push(i)}class a{constructor(){this._numerics=[],this._strings=[],this._idGenerator=new r,this._allocatedSize=256,this._bitsets=[],this._instanceIds=[],this._bounds=[]}createBitset(){const e=this._bitsets.length
return this._bitsets.push(s.a.create(this._allocatedSize,n.a)),e+1}getBitset(e){return this._bitsets[e-1]}_expand(){this._allocatedSize<<=1
for(const e of this._bitsets)e.resize(this._allocatedSize)}_ensureNumeric(e,t){this._numerics[e]||(this._numerics[e]=[]),o(this._numerics[e],t,0)}_ensureInstanceId(e){o(this._instanceIds,e,0)}_ensureString(e,t){this._strings[e]||(this._strings[e]=[]),o(this._strings[e],t,null)}createDisplayId(e=!1){const t=this._idGenerator.createId()
return t>this._allocatedSize&&this._expand(),Object(n.d)(t,e)}releaseDisplayId(e){for(const t of this._bitsets)t.unset(e)
return this._idGenerator.releaseId(e&n.a)}getComputedNumeric(e,t){return this.getComputedNumericAtIndex(e&n.a,0)}setComputedNumeric(e,t,i){return this.setComputedNumericAtIndex(e&n.a,i,0)}getComputedString(e,t){return this.getComputedStringAtIndex(e&n.a,0)}setComputedString(e,t,i){return this.setComputedStringAtIndex(e&n.a,0,i)}getComputedNumericAtIndex(e,t){const i=e&n.a
return this._ensureNumeric(t,i),this._numerics[t][i]}setComputedNumericAtIndex(e,t,i){const r=e&n.a
this._ensureNumeric(t,r),this._numerics[t][r]=i}getInstanceId(e){const t=e&n.a
return this._ensureInstanceId(t),this._instanceIds[t]}setInstanceId(e,t){const i=e&n.a
this._ensureInstanceId(i),this._instanceIds[i]=t}getComputedStringAtIndex(e,t){const i=e&n.a
return this._ensureString(t,i),this._strings[t][i]}setComputedStringAtIndex(e,t,i){const r=e&n.a
this._ensureString(t,r),this._strings[t][r]=i}getXMin(e){return this._bounds[4*(e&n.a)]}getYMin(e){return this._bounds[4*(e&n.a)+1]}getXMax(e){return this._bounds[4*(e&n.a)+2]}getYMax(e){return this._bounds[4*(e&n.a)+3]}setBounds(e,t){const i=t.readHydratedGeometry()
if(!i||!i.coords.length)return!1
let r=1/0,s=1/0,a=-1/0,l=-1/0
i.forEachVertex((e,t)=>{r=Math.min(r,e),s=Math.min(s,t),a=Math.max(a,e),l=Math.max(l,t)})
const c=e&n.a
return o(this._bounds,4*c+4,0),this._bounds[4*c]=r,this._bounds[4*c+1]=s,this._bounds[4*c+2]=a,this._bounds[4*c+3]=l,!0}}},1808:function(e,t,i){"use strict"
i.d(t,"a",(function(){return g}))
var n=i(973),r=i(1208),s=i(1726),o=i(1644),a=i(23),l=i(980),c=i(997),u=i(1093),h=i(1022),d=i(1773),f=i(1187),_=i(1333)
function m(e,t){const i=t.length
if(e<t[0].value||1===i)return t[0].size
for(let n=1;n<i;n++)if(e<t[n].value){const i=(e-t[n-1].value)/(t[n].value-t[n-1].value)
return t[n-1].size+i*(t[n].size-t[n-1].size)}return t[i-1].size}class p{constructor(){this.symbolLevels=[],this.vvColorValues=new Float32Array(8),this.vvColors=new Float32Array(32),this.vvOpacityValues=new Float32Array(8),this.vvOpacities=new Float32Array(8),this.vvSizeMinMaxValue=new Float32Array(4),this.outsideLabelsVisible=!1,this._vvMaterialParameters={vvSizeEnabled:!1,vvColorEnabled:!1,vvRotationEnabled:!1,vvRotationType:"geographic",vvOpacityEnabled:!1},this._technique=d.a}getSizeVVFieldStops(e){const t=this._vvSizeFieldStops
if(t)switch(t.type){case"static":return t
case"level-dependent":return Object(a.v)(t.levels[e],()=>{let i=1/0,n=0
for(const r in t.levels){const t=parseFloat(r),s=Math.abs(e-t)
s<i&&(i=s,n=t)}if(i===1/0)return{sizes:new Float32Array([0,0,0,0,0,0]),values:new Float32Array([0,0,0,0,0,0])}
const r=2**((e-n)/2),s=Object(a.u)(t.levels[n]),o=new Float32Array(s.values)
return o[2]*=r,o[3]*=r,{sizes:Object(a.u)(s.sizes),values:o}})
default:return}}get vvMaterialParameters(){return this._vvMaterialParameters}update(e){Object(a.l)(this._vvInfo)&&this._updateVisualVariables(this._vvInfo.vvRanges,e)}setInfo(e,t,i){this._updateEffects(i),this._vvInfo=t,this._technique=Object(f.c)(e),this.rendererSchema=this._technique.createOrUpdateRendererSchema(this.rendererSchema,e)}getVariation(){return{...this._technique.getVariation(this.rendererSchema),outsideLabelsVisible:this.outsideLabelsVisible,supportsTextureFloat:Object(_.a)("2d").supportsTextureFloat}}getVariationHash(){return this._technique.getVariationHash(this.rendererSchema)<<1|(this.outsideLabelsVisible?1:0)}_updateEffects(e){Object(a.l)(e)?this.outsideLabelsVisible=e.excludedLabelsVisible:this.outsideLabelsVisible=!1}_updateVisualVariables(e,t){const i=this._vvMaterialParameters
if(i.vvOpacityEnabled=!1,i.vvSizeEnabled=!1,i.vvColorEnabled=!1,i.vvRotationEnabled=!1,!e)return
const n=e.size
if(n){if(i.vvSizeEnabled=!0,n.minMaxValue){const e=n.minMaxValue
let i,r
if(Object(h.r)(e.minSize)&&Object(h.r)(e.maxSize))if(Object(h.v)(e.minSize)&&Object(h.v)(e.maxSize))i=Object(l.h)(e.minSize),r=Object(l.h)(e.maxSize)
else{const n=t.scale
i=Object(l.h)(m(n,e.minSize.stops)),r=Object(l.h)(m(n,e.maxSize.stops))}this.vvSizeMinMaxValue.set([e.minDataValue,e.maxDataValue,i,r])}if(n.scaleStops&&(this.vvSizeScaleStopsValue=Object(l.h)(m(t.scale,n.scaleStops.stops))),n.unitValue){const e=Object(c.g)(t.spatialReference)/u.a[n.unitValue.unit]
this.vvSizeUnitValueToPixelsRatio=e/t.resolution}n.fieldStops&&(this._vvSizeFieldStops=n.fieldStops)}const r=e.color
r&&(i.vvColorEnabled=!0,this.vvColorValues.set(r.values),this.vvColors.set(r.colors))
const s=e.opacity
s&&(i.vvOpacityEnabled=!0,this.vvOpacityValues.set(s.values),this.vvOpacities.set(s.opacities))
const o=e.rotation
o&&(i.vvRotationEnabled=!0,i.vvRotationType=o.type)}}class g extends o.a{constructor(e){super(e),this._rendererInfo=new p,this._materialItemsRequestQueue=new r.a,this.attributeView=new s.a(()=>this.onAttributeStoreUpdate())}destroy(){this.children.forEach(e=>e.destroy()),this.removeAllChildren(),this.attributeView.destroy(),this._materialItemsRequestQueue.clear()}setRendererInfo(e,t,i){this._rendererInfo.setInfo(e,t,i),this.requestRender()}async getMaterialItems(e,t){if(!e||0===e.length)return[]
const i=Object(n.e)()
return this._materialItemsRequestQueue.push({items:e,abortOptions:t,resolver:i}),this.requestRender(),i.promise}doRender(e){if(e.context.capabilities.enable("textureFloat"),e.context.capabilities.enable("vao"),this._materialItemsRequestQueue.length>0){let t=this._materialItemsRequestQueue.pop()
for(;t;)this._processMaterialItemRequest(e,t),t=this._materialItemsRequestQueue.pop()}super.doRender(e)}renderChildren(e){for(const t of this.children)t.commit(e)
this._rendererInfo.update(e.state),super.renderChildren(e)}updateTransforms(e){if(this.children.some(e=>e.hasData))for(const t of this.children)t.setTransform(e)}createRenderParams(e){const t=super.createRenderParams(e)
return t.rendererInfo=this._rendererInfo,t.attributeView=this.attributeView,t}onAttributeStoreUpdate(){}_processMaterialItemRequest(e,{items:t,abortOptions:i,resolver:n}){const{painter:r,pixelRatio:s}=e,o=t.map(e=>r.textureManager.rasterizeItem(e.symbol,s,e.glyphIds,i))
Promise.all(o).then(e=>{if(!this.stage)return void n.reject()
const i=e.map((e,i)=>({id:t[i].id,mosaicItem:e}))
n.resolve(i)},n.reject)}}},1838:function(e,t,i){"use strict"
i.d(t,"a",(function(){return y}))
var n=i(23),r=i(1808),s=i(1109),o=i(1151),a=i(1173),l=i(1360),c=i(1155),u=i(1331),h=i(1022),d=i(1068),f=i(984),_=i(1116)
const m=Math.PI/180
class p extends u.a{constructor(e){super(),this._program=null,this._vao=null,this._vertexBuffer=null,this._indexBuffer=null,this._dvsMat3=Object(o.b)(),this._localOrigin={x:0,y:0},this._getBounds=e}destroy(){this._vao&&(this._vao.dispose(!0),this._vao=null,this._vertexBuffer=null,this._indexBuffer=null),this._program=Object(n.f)(this._program)}doRender(e){const{context:t}=e,i=this._getBounds()
if(i.length<1)return
this._createShaderProgram(t),this._updateMatricesAndLocalOrigin(e),this._updateBufferData(t,i),t.setBlendingEnabled(!0),t.setDepthTestEnabled(!1),t.setStencilWriteMask(0),t.setStencilTestEnabled(!1),t.setBlendFunction(f.b.ONE,f.b.ONE_MINUS_SRC_ALPHA),t.setColorMask(!0,!0,!0,!0)
const n=this._program
t.bindVAO(this._vao),t.useProgram(n),n.setUniformMatrix3fv("u_dvsMat3",this._dvsMat3),t.gl.lineWidth(1),t.drawElements(f.r.LINES,8*i.length,f.k.UNSIGNED_INT,0),t.bindVAO()}_createTransforms(){return{dvs:Object(o.b)()}}_createShaderProgram(e){this._program||(this._program=e.programCache.acquire("precision highp float;\n        uniform mat3 u_dvsMat3;\n\n        attribute vec2 a_position;\n\n        void main() {\n          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);\n          gl_Position = vec4(pos.xy, 0.0, 1.0);\n        }","precision mediump float;\n      void main() {\n        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);\n      }",g().attributes))}_updateMatricesAndLocalOrigin(e){const{state:t}=e,{displayMat3:i,size:n,resolution:r,pixelRatio:o,rotation:u,viewpoint:h}=t,d=m*u,{x:f,y:_}=h.targetGeometry,p=Object(c.b)(f,t.spatialReference)
this._localOrigin.x=p,this._localOrigin.y=_
const g=o*n[0],y=o*n[1],x=r*g,v=r*y,b=Object(s.g)(this._dvsMat3)
Object(s.l)(b,b,i),Object(s.h)(b,b,Object(a.d)(g/2,y/2)),Object(s.d)(b,b,Object(l.d)(n[0]/x,-y/v,1)),Object(s.n)(b,b,-d)}_updateBufferData(e,t){const{x:i,y:n}=this._localOrigin,r=8*t.length,s=new Float32Array(r),o=new Uint32Array(8*t.length)
let a=0,l=0
for(const e of t)e&&(s[2*a+0]=e[0]-i,s[2*a+1]=e[1]-n,s[2*a+2]=e[0]-i,s[2*a+3]=e[3]-n,s[2*a+4]=e[2]-i,s[2*a+5]=e[3]-n,s[2*a+6]=e[2]-i,s[2*a+7]=e[1]-n,o[l+0]=a+0,o[l+1]=a+3,o[l+2]=a+3,o[l+3]=a+2,o[l+4]=a+2,o[l+5]=a+1,o[l+6]=a+1,o[l+7]=a+0,a+=4,l+=8)
if(this._vertexBuffer?this._vertexBuffer.setData(s.buffer):this._vertexBuffer=d.a.createVertex(e,f.D.DYNAMIC_DRAW,s.buffer),this._indexBuffer?this._indexBuffer.setData(o):this._indexBuffer=d.a.createIndex(e,f.D.DYNAMIC_DRAW,o),!this._vao){const t=g()
this._vao=new _.a(e,t.attributes,t.bufferLayouts,{geometry:this._vertexBuffer},this._indexBuffer)}}}const g=()=>Object(h.g)("bounds",{geometry:[{location:0,name:"a_position",count:2,type:f.k.FLOAT}]})
let y=class extends r.a{constructor(e){super(e),this.hasHighlight=()=>!0}destroy(){super.destroy(),this._boundsRenderer=Object(n.e)(this._boundsRenderer)}enableRenderingBounds(e){this._boundsRenderer=new p(e),this.requestRender()}get hasLabels(){return!1}onTileData(e,t){e.patch(t),this.contains(e)||this.addChild(e),this.requestRender()}onTileError(e){e.clear(),this.contains(e)||this.addChild(e)}_renderChildren(e,t){for(const i of this.children)i.isReady&&i.hasData&&(i.commit(e),e.context.setStencilFunction(f.h.EQUAL,i.stencilRef,255),i.getDisplayList().replay(e,i,t))}}},1912:function(e,t,i){"use strict"
i.d(t,"a",(function(){return s}))
var n=i(1003),r=i(1838)
class s extends r.a{renderChildren(e){this.attributeView.update(),this.children.some(e=>e.hasData)&&(this.attributeView.bindTextures(e.context,!1),super.renderChildren(e),e.drawPhase===n.c.MAP&&this._renderChildren(e),this.hasHighlight()&&e.drawPhase===n.c.HIGHLIGHT&&this._renderHighlight(e),this._boundsRenderer&&this._boundsRenderer.doRender(e))}_renderHighlight(e){const{painter:t}=e,i=t.effects.highlight
i.bind(e),this._renderChildren(e,i.defines),i.draw(e),i.unbind()}}},2882:function(e,t,i){"use strict"
i.r(t),i.d(t,"default",(function(){return m}))
var n=i(968),r=i(772),s=i(993),o=i(23),a=i(970),l=(i(971),i(445),i(969)),c=i(1528),u=i(1912),h=i(1753),d=i(1244)
const f={remove(){},pause(){},resume(){}}
let _=class extends(Object(c.a)(d.a)){constructor(){super(...arguments),this._highlightIds=new Map}attach(){this.graphicsView=new h.a({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new u.a(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler))}detach(){this.container.removeAllChildren(),this.graphicsView=Object(o.e)(this.graphicsView)}async hitTest(e){return this.graphicsView?this.graphicsView.hitTest(e).map(t=>({type:"graphic",graphic:t,mapPoint:e,layer:this.layer})):null}async fetchPopupFeatures(e){return this.graphicsView?this.graphicsView.hitTest(e).filter(e=>!!e.popupTemplate):[]}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(e){this.graphicsView.processUpdate(e)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(e){var t
let i
"number"==typeof e?i=[e]:e instanceof r.default?i=[e.uid]:Array.isArray(e)&&e.length>0?i="number"==typeof e[0]?e:e.map(e=>e&&e.uid):s.a.isCollection(e)&&e.length>0&&(i=e.map(e=>e&&e.uid).toArray())
const n=null==(t=i)?void 0:t.filter(o.l)
return null!=n&&n.length?(this._addHighlight(n),{remove:()=>this._removeHighlight(n)}):f}_addHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)
this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1)
this._updateHighlight()}_removeHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1
0===e?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_updateHighlight(){var e
null==(e=this.graphicsView)||e.setHighlight(Array.from(this._highlightIds.keys()))}}
Object(n.a)([Object(a.b)()],_.prototype,"graphicsView",void 0),_=Object(n.a)([Object(l.a)("esri.views.2d.layers.GraphicsLayerView2D")],_)
const m=_}}])
