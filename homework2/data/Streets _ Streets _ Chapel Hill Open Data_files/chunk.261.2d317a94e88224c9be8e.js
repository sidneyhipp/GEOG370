(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[261,772],{1226:function(e,t,r){"use strict"
r.d(t,"a",(function(){return g})),r.d(t,"b",(function(){return b})),r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return m})),r.d(t,"e",(function(){return v})),r.d(t,"f",(function(){return O})),r.d(t,"g",(function(){return j}))
var i=r(23),s=r(983)
const n=(e,t,r)=>[t,r],a=(e,t,r)=>[t,r,e[2]],l=(e,t,r)=>[t,r,e[2],e[3]]
function o(e){return e?{originPosition:"upper-left"===e.originPosition?"upperLeft":"lower-left"===e.originPosition?"lowerLeft":e.originPosition,scale:e.tolerance?[e.tolerance,e.tolerance]:[1,1],translate:Object(i.l)(e.extent)?[e.extent.xmin,e.extent.ymax]:[0,0]}:null}function u({scale:e,translate:t},r){return Math.round((r-t[0])/e[0])}function c({scale:e,translate:t},r){return Math.round((t[1]-r)/e[1])}function d(e,t,r){const i=[]
let s,n,a,l
for(let o=0;o<r.length;o++){const d=r[o]
o>0?(a=u(e,d[0]),l=c(e,d[1]),a===s&&l===n||(i.push(t(d,a-s,l-n)),s=a,n=l)):(s=u(e,d[0]),n=c(e,d[1]),i.push(t(d,s,n)))}return i.length>0?i:null}function p({scale:e,translate:t},r){return r*e[0]+t[0]}function h({scale:e,translate:t},r){return t[1]-r*e[1]}function f(e,t,r){const i=new Array(r.length)
if(!r.length)return i
const[s,n]=e.scale
let a=p(e,r[0][0]),l=h(e,r[0][1])
i[0]=t(r[0],a,l)
for(let e=1;e<r.length;e++){const o=r[e]
a+=o[0]*s,l-=o[1]*n,i[e]=t(o,a,l)}return i}function y(e,t,r){const i=new Array(r.length)
for(let s=0;s<r.length;s++)i[s]=f(e,t,r[s])
return i}function b(e,t,r,i,s){return t.x=u(e,r.x),t.y=c(e,r.y),t!==r&&(i&&(t.z=r.z),s&&(t.m=r.m)),t}function g(e,t){return e&&t?Object(s.f)(t)?b(e,{},t,!1,!1):Object(s.h)(t)?function(e,t,r,i,s){const o=function(e,t,r,i){const s=[],o=r?i?l:a:i?a:n
for(let r=0;r<t.length;r++){const i=d(e,o,t[r])
i&&i.length>=2&&s.push(i)}return s.length?s:null}(e,r.paths,i,s)
return o?(t.paths=o,t):null}(e,{},t,!1,!1):Object(s.g)(t)?function(e,t,r,i,s){const o=function(e,t,r,i){const s=[],o=r?i?l:a:i?a:n
for(let r=0;r<t.length;r++){const i=d(e,o,t[r])
i&&i.length>=3&&s.push(i)}return s.length?s:null}(e,r.rings,i,s)
return o?(t.rings=o,t):null}(e,{},t,!1,!1):Object(s.e)(t)?function(e,t,r,i,s){var o
return t.points=null!=(o=function(e,t,r,i){return d(e,r?i?l:a:i?a:n,t)}(e,r.points,i,s))?o:[],t}(e,{},t,!1,!1):Object(s.d)(t)?function(e,t,r,i,s){return t.xmin=u(e,r.xmin),t.ymin=c(e,r.ymin),t.xmax=u(e,r.xmax),t.ymax=c(e,r.ymax),t}(e,{},t):null:null}function m(e,t,r,s,o){return Object(i.l)(r)&&(t.points=function(e,t,r,i){return f(e,r?i?l:a:i?a:n,t)}(e,r.points,s,o)),t}function v(e,t,r,s,n){return Object(i.k)(r)||(t.x=p(e,r.x),t.y=h(e,r.y),t!==r&&(s&&(t.z=r.z),n&&(t.m=r.m))),t}function O(e,t,r,s,o){return Object(i.l)(r)&&(t.rings=function(e,t,r,i){return y(e,r?i?l:a:i?a:n,t)}(e,r.rings,s,o)),t}function j(e,t,r,s,o){return Object(i.l)(r)&&(t.paths=function(e,t,r,i){return y(e,r?i?l:a:i?a:n,t)}(e,r.paths,s,o)),t}},1244:function(e,t,r){"use strict"
r.d(t,"a",(function(){return f}))
var i=r(968),s=r(975),n=r(1002),a=r(1025),l=r(1063),o=r(233),u=r(23),c=r(1058),d=r(970),p=(r(971),r(445),r(969))
let h=class extends(Object(a.b)(Object(l.b)(Object(c.b)(n.a.EventedMixin(s.a))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch(e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",r=this.layer&&this.layer.title||"no title"
o.a.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${r}', id: '${t}')`,e)}})}get fullOpacity(){return Object(u.v)(this.get("layer.opacity"),1)*Object(u.v)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e
return!this.suspended&&!0===(null==(e=this.layer)?void 0:e.legendEnabled)}get updating(){var e
return!!(null!=(e=this.updatingHandles)&&e.updating||this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e
return!0===(null==(e=this.layer)?void 0:e.visible)}set visible(e){this._overrideIfSome("visible",e)}canResume(){var e,t,r
return this.visible&&(null==(e=this.layer)?void 0:e.loaded)&&!(null!=(t=this.parent)&&t.suspended)&&(null==(r=this.view)?void 0:r.ready)||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{}
return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}}
Object(i.a)([Object(d.b)()],h.prototype,"fullOpacity",null),Object(i.a)([Object(d.b)()],h.prototype,"layer",void 0),Object(i.a)([Object(d.b)()],h.prototype,"parent",void 0),Object(i.a)([Object(d.b)({readOnly:!0})],h.prototype,"suspended",null),Object(i.a)([Object(d.b)({readOnly:!0})],h.prototype,"suspendInfo",null),Object(i.a)([Object(d.b)({readOnly:!0})],h.prototype,"legendEnabled",null),Object(i.a)([Object(d.b)({type:Boolean,readOnly:!0})],h.prototype,"updating",null),Object(i.a)([Object(d.b)({readOnly:!0})],h.prototype,"updatingProgress",null),Object(i.a)([Object(d.b)()],h.prototype,"visible",null),Object(i.a)([Object(d.b)()],h.prototype,"view",void 0),h=Object(i.a)([Object(p.a)("esri.views.layers.LayerView")],h)
const f=h},1340:function(e,t,r){"use strict"
r.r(t),r.d(t,"createSymbolSchema",(function(){return l}))
var i=r(1003),s=r(1023)
function n(e){var t
return"line-marker"===e.type?{type:"line-marker",color:null==(t=e.color)?void 0:t.toJSON(),placement:e.placement,style:e.style}:e.constructor.fromJSON(e.toJSON()).toJSON()}function a(e){return Object(s.j)(e)}function l(e,t,r=!1){if(!e)return null
switch(e.type){case"simple-fill":case"picture-fill":return function(e,t,r){const l=Object(s.g)(i.d.FILL,t),o=r?a(l):l,u=e.clone(),c=u.outline,d=Object(s.k)(t.symbologyType)
d||(u.outline=null)
const p={materialKey:o,hash:u.hash(),...n(u)}
if(d)return p
const h=[]
if(h.push(p),c){const e=Object(s.g)(i.d.LINE,{...t,isOutline:!0}),l={materialKey:r?a(e):e,hash:c.hash(),...n(c)}
h.push(l)}return{type:"composite-symbol",layers:h,hash:h.reduce((e,t)=>t.hash+e,"")}}(e,t,r)
case"simple-marker":case"picture-marker":return function(e,t,r){const l=Object(s.g)(i.d.MARKER,t),o=r?a(l):l,u=n(e)
return{materialKey:o,hash:e.hash(),...u,angle:e.angle,maxVVSize:t.maxVVSize}}(e,t,r)
case"simple-line":return function(e,t,r){const l=Object(s.k)(t.symbologyType)?i.e.DEFAULT:t.symbologyType,o=Object(s.g)(i.d.LINE,{...t,symbologyType:l}),u=r?a(o):o,c=e.clone(),d=c.marker
c.marker=null
const p=[]
if(p.push({materialKey:u,hash:c.hash(),...n(c)}),d){var h
const e=Object(s.g)(i.d.MARKER,t),l=r?a(e):e
d.color=null!=(h=d.color)?h:c.color,p.push({materialKey:l,hash:d.hash(),lineWidth:c.width,...n(d)})}return{type:"composite-symbol",layers:p,hash:p.reduce((e,t)=>t.hash+e,"")}}(e,t,r)
case"text":return function(e,t,r){const l=Object(s.g)(i.d.TEXT,t),o=r?a(l):l,u=n(e)
return{materialKey:o,hash:e.hash(),...u,angle:e.angle,maxVVSize:t.maxVVSize}}(e,t,r)
case"label":return function(e,t,r){const n=e.toJSON(),l=Object(s.g)(i.d.LABEL,{...t,placement:n.labelPlacement})
return{materialKey:r?a(l):l,hash:e.hash(),...n,labelPlacement:n.labelPlacement}}(e,t,r)
case"cim":return{type:"cim",rendererKey:t.vvFlags,data:e.data,maxVVSize:t.maxVVSize}
case"CIMSymbolReference":return{type:"cim",rendererKey:t.vvFlags,data:e,maxVVSize:t.maxVVSize}
case"web-style":return{...n(e),type:"web-style",hash:e.hash(),rendererKey:t.vvFlags,maxVVSize:t.maxVVSize}
default:throw new Error("symbol not supported "+e.type)}}},1356:function(e,t,r){"use strict"
r.d(t,"a",(function(){return v})),r.d(t,"b",(function(){return m}))
var i=r(1537),s=r(1003),n=r(1023)
const a={marker:s.d.MARKER,fill:s.d.FILL,line:s.d.LINE,text:s.d.TEXT}
class l{constructor(e,t,r,i){const l={minScale:null==t?void 0:t.minScale,maxScale:null==t?void 0:t.maxScale},o=function(e){return e.minScale||e.maxScale?e.minScale+"-"+e.maxScale:""}(l)
this.layers=e,this.data=t,this.hash=this._createHash()+o,this.rendererKey=r
const u={isOutline:!1,placement:null,symbologyType:s.e.DEFAULT,vvFlags:r}
for(const t of e){const e=a[t.type]
u.isOutline="line"===t.type&&t.isOutline,t.materialKey=Object(n.g)(e,u),t.maxVVSize=i,t.scaleInfo=l,t.templateHash+=o}}get type(){return"expanded-cim"}_createHash(){let e=""
for(const t of this.layers)e+=t.templateHash
return e}}var o=r(1436),u=r(446),c=r(23),d=r(973),p=r(374),h=r(1028),f=r(1054),y=r(1181)
async function b(e,t,r){if(!e.name)throw new u.a("style-symbol-reference-name-missing","Missing name in style symbol reference")
if(e.styleName&&"Esri2DPointSymbolsStyle"===e.styleName)return async function(e,t){const r=y.a.replace(/\{SymbolName\}/gi,e.name)
try{const e=await Object(y.d)(r,t)
return Object(y.c)(e.data)}catch(e){return Object(d.q)(e),null}}(e,r)
try{return async function(e,t,r,i){const s=e.data,n={portal:r&&Object(c.l)(r.portal)?r.portal:h.a.getDefault(),url:Object(p.Q)(e.baseUrl),origin:"portal-item"},a=s.items.find(e=>e.name===t)
if(!a)throw new u.a("symbolstyleutils:symbol-name-not-found",`The symbol name '${t}' could not be found`,{symbolName:t})
let l=Object(f.d)(Object(y.e)(a,"cimRef"),n)
Object(o.b)()&&(l=Object(o.a)(l))
try{const e=await Object(y.d)(l,i)
return Object(y.c)(e.data)}catch(e){return Object(d.q)(e),null}}(await Object(y.b)(e,t,r),e.name,t,r)}catch(e){return Object(d.q)(e),null}}const g=async(e,t,r)=>new l(await Object(i.b)(e.data,t,r),e.data,e.rendererKey,e.maxVVSize)
async function m(e,t,r,i){if(!e)return null
if("cim"===e.type)return g(e,t,r)
if("web-style"===e.type){var s
const n={type:"cim",data:null!=(s=await b(e,null,i))?s:void 0,rendererKey:e.rendererKey,maxVVSize:e.maxVVSize}
return g(n,t,r)}return e}function v(e){if(!e)return null
const{avoidSDFRasterization:t,type:r,cim:i,url:s,materialHash:n}=e,a={cim:i,type:r,mosaicHash:n,url:s,size:null,dashTemplate:null,path:null,text:null,fontName:null,animatedSymbolProperties:null,avoidSDFRasterization:t}
switch(r){case"marker":a.size=e.size,a.path=e.path,a.animatedSymbolProperties=e.animatedSymbolProperties
break
case"line":a.dashTemplate=e.dashTemplate
break
case"text":a.text=e.text,a.fontName=e.fontName}return a}},1370:function(e,t,r){"use strict"
r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return n}))
var i=r(991)
function s(e,t,r=0){const s=Object(i.f)(e,0,o)
for(let e=0;e<4;e++)t[r+e]=Math.floor(256*u(s*a[e]))}function n(e,t=0){let r=0
for(let i=0;i<4;i++)r+=e[t+i]*l[i]
return r}const a=[1,256,65536,16777216],l=[1/256,1/65536,1/16777216,1/4294967296],o=n(new Uint8ClampedArray([255,255,255,255]))
function u(e){return e-Math.floor(e)}},1383:function(e,t,r){"use strict"
function i(e){var t
const r=e.layer
return"floorInfo"in r&&null!=(t=r.floorInfo)&&t.floorField&&"floors"in e.view?n(e.view.floors,r.floorInfo.floorField):null}function s(e,t){var r
return"floorInfo"in t&&null!=(r=t.floorInfo)&&r.floorField?n(e,t.floorInfo.floorField):null}function n(e,t){if(null==e||!e.length)return null
const r=e.filter(e=>""!==e).map(e=>`'${e}'`)
return r.push("''"),`${t} IN (${r.join(",")}) OR ${t} IS NULL`}r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return s}))},1391:function(e,t,r){"use strict"
r.d(t,"a",(function(){return l}))
var i=r(446),s=r(233),n=r(23),a=r(1226)
function l(e,t,r,i,a){if(Object(n.k)(e))return null
const l=e.referencesGeometry()&&a?u(t,i,a):t,o=e.repurposeFeature(l)
try{return e.evaluate({...r,$feature:o})}catch(e){return s.a.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",e),null}}const o=new Map
function u(e,t,r){const{transform:n,hasZ:l,hasM:u}=r
o.has(t)||o.set(t,function(e){const t={}
switch(e){case"esriGeometryPoint":return(e,r,i,s)=>Object(a.e)(r,t,e,i,s)
case"esriGeometryPolygon":return(e,r,i,s)=>Object(a.f)(r,t,e,i,s)
case"esriGeometryPolyline":return(e,r,i,s)=>Object(a.g)(r,t,e,i,s)
case"esriGeometryMultipoint":return(e,r,i,s)=>Object(a.d)(r,t,e,i,s)
default:return s.a.getLogger("esri.views.2d.support.arcadeOnDemand").error(new i.a("mapview-arcade","Unable to handle geometryType: "+e)),e=>e}}(t))
const c=o.get(t)(e.geometry,n,l,u)
return{...e,geometry:c}}},1413:function(e,t,r){"use strict"
r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return n}))
var i=r(23),s=r(989)
async function n(e,t=e.popupTemplate){var r,n
if(Object(i.k)(t))return[]
const a=await t.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:l}=t,{objectIdField:o,typeIdField:u,globalIdField:c,relationships:d}=e
if(a.includes("*"))return["*"]
const p=l?await Object(s.n)(e):[],h=Object(s.j)(e.fieldsIndex,[...a,...p])
return u&&h.push(u),h&&o&&null!=(r=e.fieldsIndex)&&r.has(o)&&!h.includes(o)&&h.push(o),h&&c&&null!=(n=e.fieldsIndex)&&n.has(c)&&!h.includes(c)&&h.push(c),d&&d.forEach(t=>{var r
const{keyField:i}=t
h&&i&&(null==(r=e.fieldsIndex)?void 0:r.has(i))&&!h.includes(i)&&h.push(i)}),h}function a(e,t){return e.popupTemplate?e.popupTemplate:Object(i.l)(t)&&t.defaultPopupTemplateEnabled&&Object(i.l)(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}},1447:function(e,t,r){"use strict"
r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return p})),r.d(t,"c",(function(){return m})),r.d(t,"d",(function(){return g})),r.d(t,"e",(function(){return f})),r.d(t,"f",(function(){return b})),r.d(t,"g",(function(){return y})),r.d(t,"h",(function(){return v}))
var i=r(1304),s=r(23),n=r(980),a=r(773),l=r(996),o=r(988),u=r(1287),c=r(1e3),d=r(1373)
const p=512,h=50
function f(e,t){const r=Object(o.e)(t)
if(!r)return null
const[i,s]=r.valid
return e[2]>s?[Object(l.m)([e[0],e[1],s,e[3]]),Object(l.m)([i,e[1],i+e[2]-s,e[3]])]:e[0]<i?[Object(l.m)([i,e[1],e[2],e[3]]),Object(l.m)([s-(i-e[0]),e[1],s,e[3]])]:null}function y(e){return"text"===e||"esriTS"===e}function b(e){return"simple-marker"===e||"picture-marker"===e||"esriSMS"===e||"esriPMS"===e}function g(e){switch(Object(s.u)(e.geometry).type){case"point":case"multipoint":return 0
case"polyline":return 1
case"polygon":case"extent":return 2}return 0}function m(e,t,r){var s,a,l,o
if(null==r||null==(s=r.glyphMosaicItems)||!s.length)return e
const p=Object(i.a)(t.text)[1],h=r.glyphMosaicItems,f=Object(d.a)(h,p,{scale:Object(n.h)(t.font.size)/c.v,angle:null!=(a=t.angle)?a:0,xOffset:null!=(l=t.xoffset)?l:0,yOffset:null!=(o=t.yoffset)?o:0,hAlign:Object(u.e)(t.horizontalAlignment||"center"),vAlign:Object(u.g)(t.verticalAlignment||"baseline"),maxLineWidth:Math.max(32,Math.min(t.lineWidth||512,512)),lineHeight:c.y*Math.max(.25,Math.min(t.lineHeight||1,4)),decoration:t.font.decoration||"none",isCIM:!1,hasBackground:!!t.backgroundColor,borderLineSize:t.borderLineSize}).bounds
return e[0]=Object(n.h)(f.x-f.halfWidth),e[1]=Object(n.h)(f.y-f.halfHeight),e[2]=Object(n.h)(f.width),e[3]=Object(n.h)(f.height),e}function v(e){if(!e)return null
const{xmin:t,ymin:r,xmax:i,ymax:s,spatialReference:n}=e
return new a.default({rings:[[[t,r],[t,s],[i,s],[i,r],[t,r]]],spatialReference:n})}},1483:function(e,t,r){"use strict"
r.d(t,"a",(function(){return u}))
var i=r(968),s=r(233),n=r(973),a=r(978),l=r(970),o=(r(971),r(445),r(969))
const u=e=>{let t=class extends e{initialize(){this.handles.add(Object(a.b)(()=>this.layer,"refresh",e=>{this.doRefresh(e.dataChanged).catch(e=>{Object(n.j)(e)||s.a.getLogger(this.declaredClass).error(e)})}),"RefreshableLayerView")}}
return Object(i.a)([Object(l.b)()],t.prototype,"layer",void 0),t=Object(i.a)([Object(o.a)("esri.layers.mixins.RefreshableLayerView")],t),t}},1512:function(e,t,r){"use strict"
r.d(t,"a",(function(){return l}))
var i=r(446),s=r(233),n=r(1003),a=r(1022)
function l(e){return Object(a.v)(e.minDataValue)&&Object(a.v)(e.maxDataValue)&&null!=e.minSize&&null!=e.maxSize?n.f.SIZE_MINMAX_VALUE:(e.expression&&"view.scale"===e.expression||e.valueExpression&&"$view.scale"===e.valueExpression)&&Array.isArray(e.stops)?n.f.SIZE_SCALE_STOPS:(null!=e.field||e.expression&&"view.scale"!==e.expression||e.valueExpression&&"$view.scale"!==e.valueExpression)&&(Array.isArray(e.stops)||"levels"in e&&e.levels)?n.f.SIZE_FIELD_STOPS:(null!=e.field||e.expression&&"view.scale"!==e.expression||e.valueExpression&&"$view.scale"!==e.valueExpression)&&null!=e.valueUnit?n.f.SIZE_UNIT_VALUE:(s.a.getLogger("esri.views.2d.engine.webgl").error(new i.a("mapview-bad-type","Found invalid size VisualVariable",e)),n.f.NONE)}},1528:function(e,t,r){"use strict"
r.d(t,"a",(function(){return I}))
var i=r(968),s=r(993),n=r(1179),a=r(446),l=r(978),o=r(970),u=(r(971),r(445),r(969)),c=r(1502),d=r(1522),p=r(972)
let h=class extends p.a{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}}
Object(i.a)([Object(o.b)({readOnly:!0})],h.prototype,"version",null),h=Object(i.a)([Object(u.a)("esri.views.layers.support.ClipArea")],h)
const f=h
var y
let b=y=class extends f{constructor(e){super(e),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new y({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}}
Object(i.a)([Object(o.b)({type:[Number,String],json:{write:!0}})],b.prototype,"left",void 0),Object(i.a)([Object(o.b)({type:[Number,String],json:{write:!0}})],b.prototype,"right",void 0),Object(i.a)([Object(o.b)({type:[Number,String],json:{write:!0}})],b.prototype,"top",void 0),Object(i.a)([Object(o.b)({type:[Number,String],json:{write:!0}})],b.prototype,"bottom",void 0),b=y=Object(i.a)([Object(u.a)("esri.views.layers.support.ClipRect")],b)
const g=b
r(982)
var m,v=r(1004),O=r(983),j=r(770),_=r(773)
const w={base:v.a,key:"type",typeMap:{extent:j.default,polygon:_.default}}
let x=m=class extends f{constructor(e){super(e),this.type="geometry",this.geometry=null}clone(){var e,t
return new m({geometry:null!=(e=null==(t=this.geometry)?void 0:t.clone())?e:null})}commitVersionProperties(){this.commitProperty("geometry")}}
Object(i.a)([Object(o.b)({types:w,json:{read:O.a,write:!0}})],x.prototype,"geometry",void 0),x=m=Object(i.a)([Object(u.a)("esri.views.layers.support.Geometry")],x)
const S=x
let R=class extends f{constructor(e){super(e),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}}
Object(i.a)([Object(o.b)({type:[[[Number]]],json:{write:!0}})],R.prototype,"path",void 0),R=Object(i.a)([Object(u.a)("esri.views.layers.support.Path")],R)
const F=R,E=s.a.ofType({key:"type",base:null,typeMap:{rect:g,path:F,geometry:S}}),I=e=>{let t=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new E,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1,this.highlightOptions=null}initialize(){var e,t,r,i
const s=null==(e=null==(t=this.view)?void 0:t.spatialReferenceLocked)||e;(null==(r=this.view)?void 0:r.spatialReference)&&s&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new a.a("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new c.a),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([Object(l.f)(()=>this.suspended,e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()},l.e),Object(l.f)(()=>{var e,t
return null!=(e=null==(t=this.layer)?void 0:t.opacity)?e:1},e=>{this.container&&(this.container.opacity=e)},l.e),Object(l.f)(()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal",e=>{this.container&&(this.container.blendMode=e)},l.e),Object(l.f)(()=>this.layer&&"effect"in this.layer?this.layer.effect:null,e=>{this.container&&(this.container.effect=e)},l.e),Object(l.f)(()=>this.highlightOptions,e=>this.container.highlightOptions=e,l.e),Object(l.b)(()=>this.clips,"change",()=>{this.container&&(this.container.clips=this.clips)},l.e),Object(l.f)(()=>{var e
return{scale:null==(e=this.view)?void 0:e.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}},({scale:e})=>{const t=null!=e&&this.isVisibleAtScale(e)
t!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",t)},l.e)],"constructor"),null!=(i=this.view)&&i.whenLayerView?this.view.whenLayerView(this.layer).then(e=>{e===this&&this.processAttach()},()=>{}):this.when().then(()=>{this.processAttach()},()=>{}))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){var e
const t=null==(e=this.view)?void 0:e.spatialReference
return null==t||this.supportsSpatialReference(t)}get updating(){var e
return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(null==(e=this.updatingHandles)||!e.updating))}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}isVisibleAtScale(e){const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null
if(!t)return!0
const{minScale:r,maxScale:i}=t
return(0===r||e<=r)&&(0===i||e>=i)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported,r=this.visibleAtCurrentScale
return t&&(e.spatialReferenceNotSupported=t),r&&(e.outsideScaleRange=r),e}addAttachHandles(e){this.addHandles(e,"attach")}}
return Object(i.a)([Object(o.b)()],t.prototype,"attached",void 0),Object(i.a)([Object(o.b)({type:E,set(e){const t=Object(n.b)(e,this._get("clips"),E)
this._set("clips",t)}})],t.prototype,"clips",void 0),Object(i.a)([Object(o.b)()],t.prototype,"container",void 0),Object(i.a)([Object(o.b)()],t.prototype,"moving",void 0),Object(i.a)([Object(o.b)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),Object(i.a)([Object(o.b)({readOnly:!0})],t.prototype,"updateParameters",void 0),Object(i.a)([Object(o.b)()],t.prototype,"updateRequested",void 0),Object(i.a)([Object(o.b)()],t.prototype,"updating",null),Object(i.a)([Object(o.b)()],t.prototype,"view",void 0),Object(i.a)([Object(o.b)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",void 0),Object(i.a)([Object(o.b)({type:d.a})],t.prototype,"highlightOptions",void 0),t=Object(i.a)([Object(u.a)("esri.views.2d.layers.LayerView2D")],t),t}},1558:function(e,t,r){"use strict"
r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return s}))
const i=new(r(976).a)({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch",mesh:"mesh"})
function s(e){return i.toJSON(e)}function n(e){const{bandCount:t,attributeTable:r,colormap:i,pixelType:s}=e.raster.rasterInfo
return 1===t&&(null!=r||null!=i||"u8"===s||"s8"===s)}},1594:function(e,t,r){"use strict"
r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return y})),r.d(t,"c",(function(){return u})),r.d(t,"d",(function(){return c}))
var i=r(446),s=r(235),n=r(233),a=r(980),l=r(1333)
const o=n.a.getLogger("esri.views.2d.layers.features.support.rendererUtils"),u=e=>{if(!("visualVariables"in e)||!e.visualVariables||!e.visualVariables.length)return e
const t=e.clone(),r=t.visualVariables.map(e=>d(e)?p(e):e)
return t.visualVariables=r,t}
function c(e){return e.map(e=>d(e)?p(e.clone()):e)}function d(e){return("size"===e.type||"color"===e.type||"opacity"===e.type)&&null!=e.stops}function p(e){var t
return e.stops=function(e,t){return t.length<=8?t:(o.warn(`Found ${t.length} Visual Variable stops, but MapView only supports 8. Displayed stops will be simplified.`),t.length>16?function(e,t){const[r,...i]=t,s=i.pop(),n=i[0].value,l=i[i.length-1].value,o=(l-n)/6,u=[]
for(let r=n;r<l;r+=o){let s=0
for(;r>=i[s].value;)s++
const n=i[s],l=t[s-1],o=r-l.value,c=n.value===l.value?1:o/(n.value-l.value)
if("color"===e){const e=i[s],n=t[s-1],a=e.color.clone()
a.r=h(n.color.r,a.r,c),a.g=h(n.color.g,a.g,c),a.b=h(n.color.b,a.b,c),a.a=h(n.color.a,a.a,c),u.push({value:r,color:a,label:e.label})}else if("size"===e){const e=i[s],n=t[s-1],l=Object(a.k)(e.size),o=h(Object(a.k)(n.size),l,c)
u.push({value:r,size:o,label:e.label})}else{const e=i[s],n=h(t[s-1].opacity,e.opacity,c)
u.push({value:r,opacity:n,label:e.label})}}return[r,...u,s]}(e,t):function(e){const[t,...r]=e,i=r.pop()
for(;r.length>6;){let e=0,t=0
for(let i=1;i<r.length;i++){const s=r[i-1],n=r[i],a=Math.abs(n.value-s.value)
a>t&&(t=a,e=i)}r.splice(e,1)}return[t,...r,i]}(t))}(e.type,null!=(t=e.stops)?t:[]),e}function h(e,t,r){return(1-r)*e+r*t}function f(){if(Object(s.a)("heatmap-force-raster"))return"raster"
const{supportsTextureFloat:e,supportsTextureHalfFloat:t,supportsColorBufferFloat:r,supportsColorBufferFloatBlend:i,supportsColorBufferHalfFloat:n}=Object(l.a)("2d")
return e&&r&&i||t&&n?"symbol":Object(s.a)("heatmap-allow-raster-fallback")?"raster":"none"}function y(e){if(!e)return!0
switch(e.type){case"dot-density":if(!Object(l.a)("2d").supportsTextureFloat)return o.error(new i.a("webgl-missing-extension","Missing WebGL extension OES_Texture_Float which is required for DotDensity")),!1
break
case"heatmap":{const e=f()
if("none"===e||"raster"===e&&!Object(s.a)("heatmap-force-raster")){const t=Object(l.a)("2d"),r=["supportsTextureFloat","supportsTextureHalfFloat","supportsColorBufferFloat","supportsColorBufferFloatBlend","supportsColorBufferHalfFloat"].filter(e=>!t[e]).join(", ")
if("none"===e)return o.errorOnce(new i.a("webgl-missing-extension",`Missing WebGL${t.type} requirements for Heatmap: ${r}`)),!1
"raster"===e&&o.warnOnce(`Missing WebGL${t.type} requirements for accelerated Heatmap: ${r}. Feature support may be limited.`)}break}}return!0}},1664:function(e,t,r){"use strict"
r.d(t,"a",(function(){return U})),r.d(t,"b",(function(){return F})),r.d(t,"c",(function(){return S}))
var i=r(446),s=r(235),n=r(233),a=r(23),l=r(980),o=r(1198),u=r(1143),c=r(1285),d=r(1003),p=r(1022),h=r(1187),f=r(1512)
function y(e){if(!e)return d.f.NONE
let t=0
for(const r of e)if("size"===r.type){const e=Object(f.a)(r)
t|=e,"outline"===r.target&&(t|=e<<4)}else"color"===r.type?t|=d.f.COLOR:"opacity"===r.type?t|=d.f.OPACITY:"rotation"===r.type&&(t|=d.f.ROTATION)
return t}var b=r(1340),g=(r(1350),r(1422)),m=r(1e3)
function v(e,t){return Math.max(e,t)}r(1447),r(1356),m.f.metrics,new g.a(0,0,24,24)
var O=r(1594),j=r(1312),_=r(1558)
const w=n.a.getLogger("esri.views.2d.layers.features.schemaUtils"),x="ValidationError"
function S(e,t){let r=0,i=0,s=d.e.DEFAULT
if(Object(a.l)(e)){if(i=function(e,t){if(!("visualVariables"in e))return 0
if(!e.hasVisualVariables("size"))return 0
const r=e.getVisualVariablesForType("size")
if(!r[0])return 0
const i=r[0]
if(t&&"cluster_count"===i.field&&"cluster"===t.type)return t.clusterMaxSize
if("outline"===i.target)return 0
if("stops"===i.transformationType)return i.stops.map(e=>e.size).reduce(v,0)
if("clamped-linear"===i.transformationType){let e=-1/0,t=-1/0
return e="number"==typeof i.maxSize?i.maxSize:i.maxSize.stops.map(e=>e.size).reduce(v,0),t="number"==typeof i.minSize?i.minSize:i.minSize.stops.map(e=>e.size).reduce(v,0),Math.max(e,t)}return"real-world-size"===i.transformationType?30:void 0}(e,t),"visualVariables"in e&&(r=y(e.visualVariables||[]),"dot-density"===e.type&&(s=d.e.DOT_DENSITY)),"heatmap"===e.type&&(s=d.e.HEATMAP),"dictionary"===e.type)return{maxVVSize:i,vvFlags:r,symbologyType:d.e.DEFAULT}
if("pie-chart"===e.type)return{maxVVSize:i,vvFlags:r,symbologyType:d.e.PIE_CHART}
if(s!==d.e.DOT_DENSITY&&s!==d.e.HEATMAP){const t=e.getSymbols()
"backgroundFillSymbol"in e&&e.backgroundFillSymbol&&t.push(e.backgroundFillSymbol)
let r=!0,i=!0
for(const e of t)if("cim"===e.type&&(i=!1),"simple-fill"===e.type||"picture-fill"===e.type){const t=e.outline,s=t&&"none"!==t.style&&"solid"!==t.style,n="simple-fill"===e.type&&"none"!==e.style&&"solid"!==e.style
s&&(r=!1),("picture-fill"===e.type||n||s)&&(i=!1)}r?s=i?d.e.OUTLINE_FILL_SIMPLE:d.e.OUTLINE_FILL:i&&(s=d.e.SIMPLE)}}return{vvFlags:r,maxVVSize:i,symbologyType:s}}let R=null
function F(e){if(Object(s.a)("esri-2d-update-debug")){const t=E(e,!0)
console.debug("Created new schema",t),console.debug("Schema diff",Object(u.a)(R,t)),R=t}return E(e)}function E(e,t=!1){try{var r,s
const n=function(e,t=!1){const r=new Array
return r.push(function(e,t,r=!1){var s,n,l
const o={indexCount:0,fields:{}},u="featureReduction"in e&&null!=(s=e.featureReduction)?s:void 0,p=u?"aggregate":"feature"
if("sublayers"in e){const t={type:"subtype",subtypeField:e.subtypeField,renderers:{},symbologyType:d.e.DEFAULT},s={type:"subtype",mapping:{},target:"feature",subtypeField:e.subtypeField},n={type:"subtype",classes:{}},l={type:"symbol",target:"feature",aggregateFields:[],attributes:o,storage:s,mesh:{matcher:t,aggregateMatcher:null,labels:n,sortKey:null}},u=new Set
let c=0
for(const{renderer:l,subtypeCode:h,labelingInfo:f,labelsVisible:b}of e.sublayers){let e=0
"visualVariables"in l&&l.visualVariables&&(l.visualVariables.some(e=>"rotation"!==e.type)&&w.warnOnce("SubtypeGroupLayer currently only supports rotation visualVariables. All other visualVariable types will be ignored."),e=y(l.visualVariables.filter(e=>"size"!==e.type)))
const g={symbologyType:d.e.DEFAULT,vvFlags:e,maxVVSize:0},m=U(o,p,l,g,r),v=P(o,p,l),O=b&&f
if("dictionary"===m.type)throw new i.a(x,"Dictionary renderer is not supported in subtype layers")
if("subtype"===m.type)throw new i.a(x,"Nested subtype renderers is not supported")
if(Object(a.l)(v)&&"subtype"===v.type)throw new i.a(x,"Nested subtype storage is not supported")
if(Object(a.l)(v)&&Object(a.l)(v.attributeMapping))throw new i.a(x,"Non-visual-variable attributes are not supported in subtype layers")
if("heatmap"===m.type)throw new i.a(x,"Heatmaps are not supported in subtype layers")
if("pie-chart"===m.type)throw new i.a(x,"Pie-charts are not supported in subtype layers")
if(u.has(h))throw new i.a(x,"Subtype codes for sublayers must be unique")
u.add(h),t.renderers[h]=m,s.mapping[h]=v,O&&(n.classes[h]=O.map(e=>A(o,e,"feature",c++,g,r)))}return l}if("heatmap"===(null==(n=e.renderer)?void 0:n.type)&&"raster"===Object(O.a)()){const{radius:t,fieldOffset:r,field:i}=e.renderer
return{type:"heatmap",aggregateFields:[],attributes:o,target:p,storage:null,mesh:{radius:t,fieldOffset:r,field:C(o,{target:p,field:i,resultType:"numeric"}).field}}}const h=function(e,t,r){var s,n
const a="featureReduction"in t&&t.featureReduction
if(!a)return{fields:[],labels:[],matcher:void 0,rendererOverride:void 0}
const l=[]
let o=null,u=Object(_.b)(t.geometryType),d=[],p=null
if(a)switch(a.type){case"selection":return w.error(new i.a(x,"Mapview does not support `selection` reduction type",a)),{fields:[],labels:[],matcher:void 0,rendererOverride:void 0}
case"cluster":case"binning":if(l.push(...null!=(s=a.fields)?s:[]),"cluster"===a.type?u="esriGeometryPoint":"binning"===a.type&&(u="esriGeometryPolygon"),!a.renderer||null!=(n=a.renderer.authoringInfo)&&n.isAutoGenerated){if("cluster"===a.type){if(p=Object(j.b)(l,t.renderer,a,null,!0),a.symbol){const e=S(p,a)
o={type:"simple",symbol:Object(b.createSymbolSchema)(a.symbol,e,r),symbologyType:e.symbologyType}}d=a&&a.labelsVisible&&a.labelingInfo||[]}}else{if("cluster"===a.type){const{renderer:e}=Object(j.d)(a.renderer,a,null)
p=e}else p=a.renderer
const t=S(a.renderer,a)
o=U(e,"aggregate",a.renderer,t,r),d=a&&a.labelsVisible&&a.labelingInfo||[]}}return function(e,t){const r={mesh:!0,storage:!0}
for(const i of t){const{name:t,onStatisticField:s,onStatisticExpression:n,statisticType:a}=i
let l,o
const u="numeric",c="feature"
n?o=k(e,{type:"expression",target:c,valueExpression:n.expression,resultType:u}).fieldIndex:l=k(e,{type:"field",target:c,field:s,resultType:u}).field,k(e,{type:"statistic",target:"aggregate",name:t,context:r,inField:l,inFieldIndex:o,statisticType:a})}}(e,l),{labels:Object(c.b)(d,"binning"===a.type?"esriGeometryPolygon":u),matcher:o,fields:l,rendererOverride:p}}(o,e,r),f=Object(_.b)(e.geometryType),g=null!=(l=h.rendererOverride)?l:e.renderer,m=S(g,u),v=U(o,p,g,m,r),R=P(o,p,g),F=function(e,t,r,s){if(Object(a.l)(s))return null
if(Object(a.l)(t)&&t.length){t.length>1&&w.warn(`Layer rendering currently only supports ordering by 1 orderByInfo, but found ${t.length}. All but the first will be discarded`)
const r=t[0],s="ascending"===r.order?"asc":"desc"
return r.field?{field:r.field,order:s}:r.valueExpression?{fieldIndex:k(e,{type:"expression",target:"feature",valueExpression:r.valueExpression,resultType:"numeric"}).fieldIndex,order:s}:(w.error(new i.a(x,"Expected to find a field or valueExpression for OrderByInfo",r)),null)}return Object(a.l)(r)&&"unique-value"===r.type&&r.orderByClassesEnabled?{byRenderer:!0,order:"asc"}:null}(o,e.orderBy,e.renderer,u),E=e.labelsVisible&&e.labelingInfo||[],I=Object(c.b)(E,f)
let T=0
const q=[...I.map(e=>A(o,e,"feature",T++,m,r)),...h.labels.map(e=>A(o,e,"aggregate",T++,m,r))]
return{type:"symbol",target:p,attributes:o,aggregateFields:h.fields,storage:R,mesh:{matcher:v,labels:{type:"simple",classes:q},aggregateMatcher:h.matcher,sortKey:F}}}(e)),r}(e,t),u=function(e){var t
return"heatmap"===(null==(t=e.renderer)?void 0:t.type)&&"raster"===Object(O.a)()?{type:"heatmap"}:{type:"symbol"}}(e),p={}
n.map(t=>function(e,t,r){switch(r.target){case"feature":return void q(e,T(t),r)
case"aggregate":{if(!("featureReduction"in t))return
const s=t.featureReduction
switch(null==s?void 0:s.type){case"selection":throw new i.a(x,"Mapview does not support `selection` reduction type",s)
case"binning":return q(e,T(t),r),void function(e,t,r,i){var s
e.aggregate||(e.aggregate={name:"aggregate",type:"bin",filters:null,input:"feature",params:{fixedBinLevel:t.fixedBinLevel,fields:(null!=(s=t.fields)?s:[]).map(e=>({...e.toJSON(),type:V(e,r)}))},attributes:{}}),I(e.aggregate,i.attributes.fields)}(e,s,t.fields.map(e=>e.toJSON()),r)
case"cluster":return q(e,T(t),r),void function(e,t,r,i){var s,n
e.aggregate||(e.aggregate={name:"aggregate",type:"cluster",input:"feature",filters:null,attributes:{},params:{clusterRadius:Object(l.h)(t.clusterRadius/2),clusterPixelBuffer:64*Math.ceil(Object(l.h)(t.clusterMaxSize)/64),fields:null==(s=null!=(n=t.fields)?n:[])?void 0:s.map(e=>({...e.toJSON(),type:V(e,r)}))}}),I(e.aggregate,i.attributes.fields)}(e,s,t.fields.map(e=>e.toJSON()),r)}}}}(p,e,t))
const h=Object(a.l)(e.subtypeCode)?`${e.subtypeField} = ${e.subtypeCode}`:null
return{source:{definitionExpression:Object(a.u)(Object(o.b)(e.definitionExpression,h)),fields:e.fields.map(e=>e.toJSON()),gdbVersion:e.gdbVersion,historicMoment:null==(r=e.historicMoment)?void 0:r.getTime(),outFields:e.availableFields,pixelBuffer:e.pixelBuffer,spatialReference:e.spatialReference.toJSON(),timeExtent:null==(s=e.timeExtent)?void 0:s.toJSON(),customParameters:e.customParameters},attributes:{fields:{},indexCount:0},processors:n,tileRenderer:u,targets:p}}catch(e){if(e.fieldName===x)return w.error(e),null
throw e}}function I(e,t){for(const s in t){const n=t[s]
if(n.target!==e.name)continue
const a=e.attributes[s]
if(null!=a&&a.context){var r,i
const e=a.context
e.mesh=e.mesh||(null==(r=n.context)?void 0:r.mesh),e.storage=e.storage||(null==(i=n.context)?void 0:i.storage)}else e.attributes[s]=n}return e}function T(e){var t,r,i,s,n
return[null!=(t=null==(r=Object(a.u)(e.filter))?void 0:r.toJSON())?t:null,null!=(i=null==(s=Object(a.u)(null==(n=Object(a.u)(e.featureEffect))?void 0:n.filter))?void 0:s.toJSON())?i:null]}function q(e,t,r){return e.feature||(e.feature={name:"feature",input:"source",filters:t,attributes:{}}),I(e.feature,r.attributes.fields),e}function V(e,t){const{onStatisticExpression:r,onStatisticField:s,statisticType:n}=e
switch(n){case"min":case"max":case"avg":case"avg_angle":case"sum":case"count":return"esriFieldTypeDouble"
case"mode":{if(r){const{returnType:t}=r
return t?"string"===t?"esriFieldTypeString":"esriFieldTypeDouble":(w.error(new i.a(x,"Unable to infer type of aggregateField with onStatisticExpression. ReturnType is not defined",e)),"esriFieldTypeString")}const n=t.find(e=>e.name===s)
return n?n.type:(w.error(new i.a(x,"Unable to infer type of aggregateField with onStatisticExpression. ReturnType is not defined",e)),"esriFieldTypeString")}}}function C(e,t){return t.field?k(e,{...t,type:"field",field:t.field}):t.valueExpression?k(e,{...t,type:"expression",valueExpression:t.valueExpression}):{field:void 0,fieldIndex:void 0}}function k(e,t){switch(t.type){case"expression":{const r=t.valueExpression
if(!e.fields[r]){const i=e.indexCount++
e.fields[r]={...t,name:r,fieldIndex:i}}return{fieldIndex:e.fields[r].fieldIndex}}case"label-expression":{const r=JSON.stringify(t.label)
if(!e.fields[r]){const i=e.indexCount++
e.fields[r]={...t,name:r,fieldIndex:i}}return{fieldIndex:e.fields[r].fieldIndex}}case"field":{const r=t.field
return"aggregate"===t.target&&e.fields[r]||(e.fields[r]={...t,name:r}),{field:r}}case"statistic":return e.fields[t.name]={...t},{field:t.name}}}function A(e,t,r,i,s,n=!1){const a=k(e,{type:"label-expression",target:r,context:{mesh:!0},resultType:"string",label:{labelExpression:t.labelExpression,labelExpressionInfo:t.labelExpressionInfo?{expression:t.labelExpressionInfo.expression}:null,symbol:!!t.symbol,where:t.where}}),{fieldIndex:l}=a
return{...Object(b.createSymbolSchema)(t,s,n),fieldIndex:l,target:r,index:i}}function P(e,t,r){let i
switch(r.type){case"simple":case"class-breaks":case"unique-value":case"dictionary":i={visualVariables:!0,attributes:null}
break
default:i=Object(h.c)(r).getStorageSpec(r)}return function(e,t,r,i){if(Object(a.k)(r))return null
const{visualVariables:s,attributes:n}=r
let l=null
s&&"visualVariables"in i&&(l=function(e,t,r){if(!r||!r.length)return[]
const i={storage:!0},s="numeric"
return Object(O.d)(r).map(r=>{var n
const a=Object(p.p)(r.type),{field:l,fieldIndex:o}=C(e,{target:t,valueExpression:r.valueExpression,field:r.field,context:i,resultType:s})
switch(r.type){case"size":return"$view.scale"===r.valueExpression?null:{type:"size",binding:a,field:l,fieldIndex:o,normalizationField:C(e,{target:t,field:r.normalizationField,context:i,resultType:s}).field,valueRepresentation:null!=(n=r.valueRepresentation)?n:null}
case"color":return{type:"color",binding:a,field:l,fieldIndex:o,normalizationField:C(e,{target:t,field:r.normalizationField,context:i,resultType:s}).field}
case"opacity":return{type:"opacity",binding:a,field:l,fieldIndex:o,normalizationField:C(e,{target:t,field:r.normalizationField,context:i,resultType:s}).field}
case"rotation":return{type:"rotation",binding:a,field:l,fieldIndex:o}}}).filter(a.l)}(e,t,i.visualVariables))
const o=Object(a.l)(l)?4:0
let u=null
return Object(a.l)(n)&&(u=n.map((r,i)=>{const{field:s,fieldIndex:n}=C(e,{valueExpression:r.valueExpression,field:r.field,resultType:"numeric",target:t})
return{binding:i+o,field:s,fieldIndex:n}})),{type:"simple",target:t,attributeMapping:u,vvMapping:l}}(e,t,i,r)}function U(e,t,r,s,n=!1){const l=Object(a.v)(e,{indexCount:0,fields:{}})
switch(r.type){case"simple":case"dot-density":return function(e,t,r,i=!1){const s=t.getSymbols(),n=s.length?s[0]:null
return{type:"simple",symbol:Object(b.createSymbolSchema)(n,r,i),symbologyType:r.symbologyType}}(0,r,s,n)
case"class-breaks":return function(e,t,r,i,s=!1){const n=r.backgroundFillSymbol,{field:a,fieldIndex:l}=C(e,{target:t,field:r.field,valueExpression:r.valueExpression,resultType:"numeric",context:{mesh:!0,use:"renderer.field"}}),o=r.normalizationType,u="log"===o?"esriNormalizeByLog":"percent-of-total"===o?"esriNormalizeByPercentOfTotal":"field"===o?"esriNormalizeByField":null,c=r.classBreakInfos.map(e=>({symbol:Object(b.createSymbolSchema)(e.symbol,i,s),min:e.minValue,max:e.maxValue})).sort((e,t)=>e.min-t.min)
return{type:"interval",attributes:e.fields,field:a,fieldIndex:l,backgroundFillSymbol:Object(b.createSymbolSchema)(n,i,s),defaultSymbol:Object(b.createSymbolSchema)(r.defaultSymbol,i,s),intervals:c,normalizationField:r.normalizationField,normalizationTotal:r.normalizationTotal,normalizationType:u,isMaxInclusive:r.isMaxInclusive,symbologyType:i.symbologyType}}(l,t,r,s,n)
case"unique-value":return function(e,t,r,s,n=!1){var a
const l=[],o=r.backgroundFillSymbol,u={target:t,context:{mesh:!0},resultType:"string"}
if(r.field&&"string"!=typeof r.field)throw new i.a(x,"Expected renderer.field to be a string",r)
const{field:c,fieldIndex:d}=C(e,{...u,field:r.field,valueExpression:r.valueExpression})
for(const e of null!=(p=r.uniqueValueInfos)?p:[]){var p
l.push({value:""+e.value,symbol:Object(b.createSymbolSchema)(e.symbol,s,n)})}return{type:"map",attributes:e.fields,field:c,fieldIndex:d,field2:C(e,{...u,field:r.field2}).field,field3:C(e,{...u,field:r.field3}).field,fieldDelimiter:null!=(a=r.fieldDelimiter)?a:void 0,backgroundFillSymbol:Object(b.createSymbolSchema)(o,s),defaultSymbol:Object(b.createSymbolSchema)(r.defaultSymbol,s),map:l,symbologyType:s.symbologyType}}(l,t,r,s,n)
case"dictionary":return function(e,t,r,i=!1){return{type:"dictionary",config:t.config,fieldMap:t.fieldMap,scaleExpression:t.scaleExpression,url:t.url,symbolOptions:r,symbologyType:r.symbologyType}}(0,r,s,n)
case"heatmap":return function(e,t,r,i=!1){const s=t.getSymbols(),n=s.length?s[0]:null
return{type:"heatmap",symbol:Object(b.createSymbolSchema)(n,r,i),symbologyType:r.symbologyType}}(0,r,s,n)
case"pie-chart":return function(e,t,r,i=!1){const s=t.getSymbols(),n=s[0],a=s.length>1?s[1]:null
return{type:"pie-chart",markerSymbol:Object(b.createSymbolSchema)(n,r,i),fillSymbol:Object(b.createSymbolSchema)(a,r,i),symbologyType:r.symbologyType}}(0,r,s,n)}}},1714:function(e,t,r){"use strict"
r.d(t,"a",(function(){return j}))
var i=r(968),s=r(446),n=r(233),a=r(23),l=r(973),o=r(978),u=r(970),c=(r(971),r(445),r(969)),d=r(1035),p=r(1338),h=r(1199),f=r(989),y=r(1383),b=r(1014),g=r(1010),m=r(1413)
const v="esri.views.layers.FeatureLayerView",O=n.a.getLogger(v),j=e=>{let t=class extends e{constructor(...e){super(...e),this._updatingRequiredFieldsPromise=null,this.filter=null,this.timeExtent=null,this.layer=null,this.requiredFields=[],this.view=null}initialize(){this.handles.add([Object(o.f)(()=>{var e
const t=this.layer
return[null==t||null==(e=t.elevationInfo)?void 0:e.featureExpressionInfo,t&&"displayField"in t?t.displayField:null,t&&"timeInfo"in t&&t.timeInfo,t&&"renderer"in t&&t.renderer,t&&"labelingInfo"in t&&t.labelingInfo,t&&"floorInfo"in t&&t.floorInfo,this.filter,this.featureEffect,this.timeExtent]},()=>this._handleRequiredFieldsChange(),o.e),Object(o.b)(()=>{var e
return null==(e=this.view)?void 0:e.floors},"change",()=>this._handleRequiredFieldsChange()),Object(o.b)(()=>{const e=this.layer
return e&&"sublayers"in e?e.sublayers:null},"change",()=>this._handleRequiredFieldsChange())])}get availableFields(){const{layer:e,layer:{fieldsIndex:t},requiredFields:r}=this
return"outFields"in e&&e.outFields?Object(f.j)(t,[...Object(f.x)(t,e.outFields),...r]):Object(f.j)(t,r)}get featureEffect(){return this.layer&&"featureEffect"in this.layer?this.layer.featureEffect:null}set featureEffect(e){this._override("featureEffect",e)}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(e){O.error("#maximumNumberOfFeatures=","Setting maximum number of features is not supported")}get maximumNumberOfFeaturesExceeded(){return!1}highlight(e){throw new Error("missing implementation")}createQuery(){const e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference},t=Object(a.l)(this.filter)?this.filter.createQuery(e):new b.a(e)
if("feature"===this.layer.type){const e=Object(y.a)(this)
Object(a.l)(e)&&(t.where=t.where?`(${t.where}) AND (${e})`:e)}return Object(a.l)(this.timeExtent)&&(t.timeExtent=Object(a.l)(t.timeExtent)?t.timeExtent.intersection(this.timeExtent):this.timeExtent.clone()),t}createAggregateQuery(){const e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference}
return new b.a(e)}queryFeatures(e,t){throw new Error("missing implementation")}queryObjectIds(e,t){throw new Error("missing implementation")}queryFeatureCount(e,t){throw new Error("missing implementation")}queryExtent(e,t){throw new Error("missing implementation")}async fetchPopupFeatures(e,t){const r=this.validateFetchPopupFeatures(t)
if(r)throw r
return this.fetchClientPopupFeatures(t)}_loadArcadeModules(e){return e.get("expressionInfos.length")||Array.isArray(e.content)&&e.content.some(e=>"expression"===e.type)?Object(g.e)():Promise.resolve()}_handleRequiredFieldsChange(){const e=this._updateRequiredFields()
this._set("_updatingRequiredFieldsPromise",e),e.then(()=>{this._updatingRequiredFieldsPromise===e&&this._set("_updatingRequiredFieldsPromise",null)})}async _updateRequiredFields(){if(!this.layer||!this.view)return
const e="3d"===this.view.type,{layer:t,layer:{fieldsIndex:r,objectIdField:i}}=this,s="renderer"in t&&t.renderer,n="orderBy"in t&&t.orderBy,o="featureReduction"in t?t.featureReduction:null,u=new Set,c=await Object(l.g)([s?s.collectRequiredFields(u,r):null,Object(f.g)(u,t),e?Object(f.b)(u,t):null,Object(a.l)(this.filter)?Object(f.f)(u,t,this.filter):null,Object(a.l)(this.featureEffect)?Object(f.f)(u,t,this.featureEffect.filter):null,o?Object(f.c)(u,t,o):null,n?Object(f.h)(u,t,n):null])
if("timeInfo"in t&&t.timeInfo&&this.timeExtent&&Object(f.e)(u,t.fieldsIndex,[t.timeInfo.startField,t.timeInfo.endField]),"feature"===t.type&&(t.floorInfo&&Object(f.e)(u,t.fieldsIndex,[t.floorInfo.floorField]),e&&Object(a.l)(t.infoFor3D)&&(null==t.globalIdField&&O.error("globalIdField missing on 3DObjectFeatureLayer"),Object(f.e)(u,t.fieldsIndex,[t.globalIdField]))),"subtype-group"===t.type){Object(f.d)(u,r,t.subtypeField)
const e=t.sublayers.map(e=>{var t
return Promise.all([null==(t=e.renderer)?void 0:t.collectRequiredFields(u,r),Object(f.g)(u,e)])})
await Object(l.g)(e)}for(const e of c)e.error&&O.error(e.error)
Object(f.d)(u,r,i),e&&"displayField"in t&&t.displayField&&Object(f.d)(u,r,t.displayField)
const d=Array.from(u).sort()
this._set("requiredFields",d)}validateFetchPopupFeatures(e){if(Object(a.k)(e))return null
for(const r of null!=(t=e.clientGraphics)?t:[]){var t
const i=r.layer
if("popupEnabled"in i&&!i.popupEnabled)return new s.a("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:i})
if(r.isAggregate){const e="featureReduction"in i?i.featureReduction:null
if(!(e&&"popupTemplate"in e&&e.popupEnabled&&e.popupTemplate))return new s.a("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:i})}else if("popupTemplate"in i&&!Object(m.a)(i,e))return new s.a("featurelayerview:fetchPopupFeatures","Layer does not define a popup template",{layer:i})}}async fetchClientPopupFeatures(e){const t=Object(a.l)(e)?e.clientGraphics:null
if(!t||0===t.length)return[]
const r=new Array(t.length),i=new Map,s=await this.createPopupQuery(e)
for(let n=0;n<t.length;n++){const l=t[n]
if(l.isAggregate){r[n]=l
continue}const o=l.layer
if(!("popupEnabled"in o))continue
const u=Object(f.x)(this.layer.fieldsIndex,s.outFields),c=Object(m.a)(o,e)
if(Object(a.k)(c))continue
const d=await this._loadArcadeModules(c)
d&&d.arcadeUtils.hasGeometryOperations(c)||!Object(f.i)(u,l)?i.set(l.getObjectId(),{graphic:l,index:n}):r[n]=l}if("stream"===this.layer.type||0===i.size)return r.filter(Boolean)
s.objectIds=Array.from(i.keys())
try{const e=await this.layer.queryFeatures(s)
for(const t of e.features){const{graphic:{geometry:e},index:s}=i.get(t.getObjectId())
t.geometry||(t.geometry=e),r[s]=t}}catch{}return r.filter(Boolean)}async createPopupQuery(e){const t=this.layer.createQuery(),r=new Set
let i=!1
const s=Object(a.l)(e)&&e.clientGraphics?e.clientGraphics.map(e=>e.layer):[this.layer]
for(const t of s){if(!("popupEnabled"in t))continue
const s=Object(m.a)(t,e)
if(Object(a.k)(s))continue
const n=await this._loadArcadeModules(s),l=n&&n.arcadeUtils.hasGeometryOperations(s)
i=!("point"!==this.layer.geometryType&&!l)
const o=await Object(m.b)(this.layer,s)
for(const e of o)r.add(e)}if(t.returnGeometry=i,t.returnZ=i,t.returnM=i,t.outFields=Array.from(r),t.outSpatialReference=this.view.spatialReference,"feature"===this.layer.type){const e=Object(y.a)(this)
Object(a.l)(e)&&(t.where=t.where?`(${t.where}) AND (${e})`:e)}return t}canResume(){return!(!super.canResume()||Object(a.l)(this.timeExtent)&&this.timeExtent.isEmpty)}}
return Object(i.a)([Object(u.b)()],t.prototype,"_updatingRequiredFieldsPromise",void 0),Object(i.a)([Object(u.b)({readOnly:!0})],t.prototype,"availableFields",null),Object(i.a)([Object(u.b)({type:p.a})],t.prototype,"featureEffect",null),Object(i.a)([Object(u.b)({type:h.a})],t.prototype,"filter",void 0),Object(i.a)([Object(u.b)(d.a)],t.prototype,"timeExtent",void 0),Object(i.a)([Object(u.b)()],t.prototype,"layer",void 0),Object(i.a)([Object(u.b)({type:Number})],t.prototype,"maximumNumberOfFeatures",null),Object(i.a)([Object(u.b)({readOnly:!0,type:Boolean})],t.prototype,"maximumNumberOfFeaturesExceeded",null),Object(i.a)([Object(u.b)({readOnly:!0})],t.prototype,"requiredFields",void 0),Object(i.a)([Object(u.b)()],t.prototype,"suspended",void 0),Object(i.a)([Object(u.b)()],t.prototype,"view",void 0),t=Object(i.a)([Object(c.a)(v)],t),t}},2580:function(e,t,r){"use strict"
r.r(t),r.d(t,"default",(function(){return re}))
var i=r(968),s=r(772),n=r(970),a=(r(971),r(445),r(969))
let l=class extends s.default{constructor(){super(...arguments),this.isAggregate=!0}getEffectivePopupTemplate(e=!1){if(this.popupTemplate)return this.popupTemplate
const t=this.sourceLayer&&this.sourceLayer.featureReduction
return t&&"popupTemplate"in t&&t.popupEnabled?t.popupTemplate:null}getObjectId(){return this.attributes.aggregateId}}
Object(i.a)([Object(n.b)({type:Boolean})],l.prototype,"isAggregate",void 0),l=Object(i.a)([Object(a.a)("esri.AggregateGraphic")],l)
const o=l
r(982)
var u=r(993),c=r(446),d=r(235),p=r(234),h=r(233),f=r(23),y=r(973),b=r(978),g=r(975),m=r(1910)
let v=class extends g.a{constructor(e){super(e),this._filter=null,this.duration=Object(d.a)("mapview-transitions-duration"),this._excludedEffectView=new m.a(e),this._includedEffectView=new m.a(e)}get excludedEffects(){return this._excludedEffectView.effects}set featureEffect(e){this._get("featureEffect")!==e&&this._transitionTo(e)}get filter(){var e
return this._filter||(null==(e=Object(f.u)(this.featureEffect))?void 0:e.filter)||null}get hasEffects(){return this._excludedEffectView.hasEffects||this._includedEffectView.hasEffects}get includedEffects(){return this._includedEffectView.effects}set scale(e){this._set("scale",e),this._excludedEffectView.scale=e,this._includedEffectView.scale=e}get transitioning(){return this._excludedEffectView.transitioning||this._includedEffectView.transitioning}transitionStep(e,t){this._set("scale",t),this.transitioning?(this._includedEffectView.transitionStep(e,t),this._excludedEffectView.transitionStep(e,t),this.transitioning||(this._filter=null)):(this._excludedEffectView.scale=t,this._includedEffectView.scale=t)}endTransitions(){this._includedEffectView.endTransitions(),this._excludedEffectView.endTransitions(),this._filter=null}_transitionTo(e){const t=this._get("featureEffect"),r=Object(f.u)(e),i=Object(f.u)(null==r?void 0:r.includedEffect),s=Object(f.u)(null==r?void 0:r.excludedEffect),n=this._includedEffectView.canTransitionTo(i)&&this._excludedEffectView.canTransitionTo(s)
this._includedEffectView.effect=i,this._excludedEffectView.effect=s,this._set("featureEffect",r),this._filter=(null==r?void 0:r.filter)||(null==t?void 0:t.filter)||null,n||this.endTransitions()}}
Object(i.a)([Object(n.b)()],v.prototype,"_filter",void 0),Object(i.a)([Object(n.b)()],v.prototype,"_excludedEffectView",void 0),Object(i.a)([Object(n.b)()],v.prototype,"_includedEffectView",void 0),Object(i.a)([Object(n.b)()],v.prototype,"duration",void 0),Object(i.a)([Object(n.b)()],v.prototype,"excludedEffects",null),Object(i.a)([Object(n.b)()],v.prototype,"featureEffect",null),Object(i.a)([Object(n.b)()],v.prototype,"filter",null),Object(i.a)([Object(n.b)()],v.prototype,"hasEffects",null),Object(i.a)([Object(n.b)()],v.prototype,"includedEffects",null),Object(i.a)([Object(n.b)({value:0})],v.prototype,"scale",null),Object(i.a)([Object(n.b)()],v.prototype,"transitioning",null),v=Object(i.a)([Object(a.a)("esri.layers.effects.FeatureEffectView")],v)
const O=v
var j=r(1199),_=r(1037),w=r(977),x=r(1047),S=r(769)
let R=class extends x.a{constructor(){super(...arguments),this.features=[]}readFeatures(e,t){const r=S.default.fromJSON(t.spatialReference),i=[]
for(let t=0;t<e.length;t++){const n=e[t],a=o.fromJSON(n),l=n.geometry&&n.geometry.spatialReference
Object(f.l)(a.geometry)&&!l&&(a.geometry.spatialReference=r)
const u=n.aggregateGeometries,c=a.aggregateGeometries
if(u&&Object(f.l)(c))for(const e in c){var s
const t=c[e],i=null==(s=u[e])?void 0:s.spatialReference
Object(f.l)(t)&&!i&&(t.spatialReference=r)}i.push(a)}return i}}
Object(i.a)([Object(n.b)({type:[o],json:{write:!0}})],R.prototype,"features",void 0),Object(i.a)([Object(w.a)("features")],R.prototype,"readFeatures",null),R=Object(i.a)([Object(a.a)("esri.rest.support.AggregateFeatureSet")],R)
const F=R
var E=r(1014),I=r(1e3),T=r(1528),q=r(1664),V=r(1594),C=r(1312),k=r(1500)
function A(e){return e.some(e=>e.globalId)}function P(e){return e.filter(e=>!e.error).map(e=>{var t
return null!=(t=e.objectId)?t:e.globalId}).filter(e=>null!=e)}function U(e,t){const r=new Set(e)
for(const e of t.values())r.add(e)
return r}function N(e,t){const r=new Set(e)
for(const e of t.values())r.delete(e)
return r}let z=class extends g.a{constructor(e){super(e),this._hasGlobalIds=!1,this._notifyUpdating=()=>{this.notifyChange("updating")}}normalizeCtorArgs(e){return this._queueProcessor=new k.a({concurrency:1,process:e.process}),{}}destroy(){this.clear()}get updating(){return this._queueProcessor.length>0}clear(){this._queueProcessor.clear()}push(e){const t=this._queueProcessor,r=t.last()
switch(e.type){case"update":case"refresh":if((null==r?void 0:r.type)===e.type)return
t.push(e).then(this._notifyUpdating,this._notifyUpdating)
break
case"edit":{const i="processed-edit"===(null==r?void 0:r.type)?r:null
i&&t.popLast()
const s=this._mergeEdits(i,e)
for(const e of s)e&&t.push(e).then(this._notifyUpdating,this._notifyUpdating)
break}}this.notifyChange("updating")}_mergeEdits(e,t){var r,i
const{addedFeatures:s,deletedFeatures:n,updatedFeatures:a}=t.edits
if(this._hasGlobalIds=this._hasGlobalIds||A(s)||A(a)||A(n),this._hasGlobalIds)return[e,{type:"processed-edit",edits:{addOrModified:[...s,...a],removed:n}}]
const l=new Set(P(null!=(r=null==e?void 0:e.edits.addOrModified)?r:[])),o=new Set(P(null!=(i=null==e?void 0:e.edits.removed)?i:[])),u=new Set([...P(s),...P(a)]),c=new Set(P(n))
return[{type:"processed-edit",edits:{addOrModified:Array.from(U(N(l,c),u)).map(e=>({objectId:e})),removed:Array.from(U(N(o,u),c)).map(e=>({objectId:e}))}}]}}
Object(i.a)([Object(n.b)({readOnly:!0})],z.prototype,"updating",null),Object(i.a)([Object(n.b)()],z.prototype,"process",void 0),z=Object(i.a)([Object(a.a)("esri.views.2d.layers.support.FeatureCommandQueue")],z)
const L=z
var M=r(1058),J=r(1228)
let H=class extends M.a{constructor(e){super(e),this._startupResolver=Object(y.e)(),this.isReady=!1}initialize(){this._controller=new AbortController,this.addResolvingPromise(this._startWorker(this._controller.signal))}destroy(){this._controller.abort(),this._connection&&this._connection.close()}set tileRenderer(e){this.client.tileRenderer=e}get closed(){return this._connection.closed}async startup(e,t,r,i){await this.when()
const s=this._controller.signal,n=function(e){return Array.isArray(e)}(r.source)?{transferList:r.source,signal:s}:void 0,a={service:r,config:t,tileInfo:e.tileInfo.toJSON(),tiles:i}
await this._connection.invoke("startup",a,n),this._startupResolver.resolve(),this._set("isReady",!0)}async updateTiles(e){return await this._startupResolver.promise,Object(y.i)(this._connection.invoke("updateTiles",e))}async update(e){const t={config:e}
return await this._startupResolver.promise,this._connection.invoke("update",t)}async applyUpdate(e){return await this._startupResolver.promise,this._connection.invoke("applyUpdate",e)}async setHighlight(e){return await this._startupResolver.promise,Object(y.i)(this._connection.invoke("controller.setHighlight",e))}async stop(){if(await this._startupResolver.promise,!this.closed)return Object(y.i)(this._connection.invoke("stop"))}async refresh(e){return await this._startupResolver.promise,Object(y.i)(this._connection.invoke("controller.refresh",e))}async querySummaryStatistics(e,t,r){return await this._startupResolver.promise,this._connection.invoke("controller.querySummaryStatistics",{query:e.toJSON(),params:t},r)}async queryAggregateSummaryStatistics(e,t,r){return await this._startupResolver.promise,this._connection.invoke("controller.queryAggregateSummaryStatistics",{query:e.toJSON(),params:t},r)}async queryUniqueValues(e,t,r){return await this._startupResolver.promise,this._connection.invoke("controller.queryUniqueValues",{query:e.toJSON(),params:t},r)}async queryAggregateUniqueValues(e,t,r){return await this._startupResolver.promise,this._connection.invoke("controller.queryAggregateUniqueValues",{query:e.toJSON(),params:t},r)}async queryClassBreaks(e,t,r){return await this._startupResolver.promise,this._connection.invoke("controller.queryClassBreaks",{query:e.toJSON(),params:t},r)}async queryAggregateClassBreaks(e,t,r){return await this._startupResolver.promise,this._connection.invoke("controller.queryAggregateClassBreaks",{query:e.toJSON(),params:t},r)}async queryHistogram(e,t,r){return await this._startupResolver.promise,this._connection.invoke("controller.queryHistogram",{query:e.toJSON(),params:t},r)}async queryAggregateHistogram(e,t,r){return await this._startupResolver.promise,this._connection.invoke("controller.queryAggregateHistogram",{query:e.toJSON(),params:t},r)}async queryFeatures(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryFeatures",null==e?void 0:e.toJSON(),t)}async queryVisibleFeatures(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryVisibleFeatures",null==e?void 0:e.toJSON(),t)}async queryObjectIds(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryObjectIds",null==e?void 0:e.toJSON(),t)}async queryFeatureCount(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryFeatureCount",null==e?void 0:e.toJSON(),t)}async queryExtent(e,t){return this._connection.invoke("controller.queryExtent",e.toJSON(),t)}async queryLatestObservations(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryLatestObservations",e.toJSON(),t)}async queryStatistics(e){return await this._startupResolver.promise,this._connection.invoke("controller.queryStatistics",e)}async queryAggregates(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryAggregates",null==e?void 0:e.toJSON(),t)}async queryAggregateCount(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryAggregateCount",null==e?void 0:e.toJSON(),t)}async queryAggregateIds(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryAggregateIds",null==e?void 0:e.toJSON(),t)}async getObjectId(e){return await this._startupResolver.promise,this._connection.invoke("controller.getObjectId",e)}async getDisplayId(e){return await this._startupResolver.promise,this._connection.invoke("controller.getDisplayId",e)}async getFeatures(e){return await this._startupResolver.promise,this._connection.invoke("controller.getFeatures",e)}async getAggregates(){return await this._startupResolver.promise,this._connection.invoke("controller.getAggregates")}async getAggregateValueRanges(){return await this._startupResolver.promise,this._connection.invoke("controller.getAggregateValueRanges")}async mapValidDisplayIds(e){return await this._startupResolver.promise,this._connection.invoke("controller.mapValidDisplayIds",e)}async onEdits(e){return await this._startupResolver.promise,Object(y.i)(this._connection.invoke("controller.onEdits",e))}async enableEvent(e,t){return await this._startupResolver.promise,Object(y.i)(this._connection.invoke("controller.enableEvent",{name:e,value:t}))}async pauseStream(){return await this._startupResolver.promise,Object(y.i)(this._connection.invoke("controller.pauseStream"))}async resumeStream(){return await this._startupResolver.promise,Object(y.i)(this._connection.invoke("controller.resumeStream"))}async sendMessageToSocket(e){return await this._startupResolver.promise,Object(y.i)(this._connection.invoke("controller.sendMessageToSocket",e))}async sendMessageToClient(e){return await this._startupResolver.promise,Object(y.i)(this._connection.invoke("controller.sendMessageToClient",e))}async updateCustomParameters(e){return await this._startupResolver.promise,Object(y.i)(this._connection.invoke("controller.updateCustomParameters",e))}async _startWorker(e){try{this._connection=await Object(J.b)("Pipeline",{client:this.client,strategy:"dedicated",signal:e})}catch(e){Object(y.r)(e)}}}
Object(i.a)([Object(n.b)()],H.prototype,"isReady",void 0),Object(i.a)([Object(n.b)({constructOnly:!0})],H.prototype,"client",void 0),Object(i.a)([Object(n.b)()],H.prototype,"tileRenderer",null),H=Object(i.a)([Object(a.a)("esri.views.2d.layers.support.FeatureLayerProxy")],H)
const B=H
var D=r(1558),G=r(1418),Q=r(1150)
class ${constructor(e){this._tiles=new Map,this.buffer=0,this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,this.buffer=e.buffer}destroy(){}clear(){this._tiles.forEach(e=>this._releaseTile(e))}tileKeys(){const e=[]
return this._tiles.forEach((t,r)=>e.push(r)),e}update(e){const t=this.tileInfoView.getTileCoverage(e.state,this.buffer,"closest"),{spans:r,lodInfo:i}=t,{level:s}=i,n=[],a=[],l=new Set,o=new Set
for(const{row:e,colFrom:t,colTo:a}of r)for(let r=t;r<=a;r++){const t=Q.a.getId(s,e,i.normalizeCol(r),i.getWorldForColumn(r)),a=this._getOrAcquireTile(n,t)
l.add(t),a.isReady?a.visible=!0:o.add(a.key)}return o.forEach(e=>this._addPlaceholders(l,e)),this._tiles.forEach(e=>{l.has(e.key.id)||(a.push(e.key.id),this._releaseTile(e))}),G.a.pool.release(t),{hasMissingTiles:o.size>0,added:n,removed:a}}_getOrAcquireTile(e,t){if(!this._tiles.has(t)){const r=this.acquireTile(new Q.a(t))
e.push(t),this._tiles.set(t,r),r.visible=!1}return this._tiles.get(t)}_getTile(e){return this._tiles.get(e)}_releaseTile(e){this._tiles.delete(e.key.id),this.releaseTile(e)}_addPlaceholders(e,t){const r=this._addPlaceholderChildren(e,t)
Math.abs(1-r)<1e-6||this._addPlaceholderParent(e,t)||(this._getTile(t.id).visible=!0)}_addPlaceholderChildren(e,t){let r=0
return this._tiles.forEach(i=>{r+=this._addPlaceholderChild(e,i,t)}),r}_addPlaceholderChild(e,t,r){return t.key.level<=r.level||!t.hasData||!r.contains(t.key)?0:(t.visible=!0,e.add(t.key.id),1/(1<<2*(t.key.level-r.level)))}_addPlaceholderParent(e,t){let r=t.getParentKey(),i=0,s=null
for(;Object(f.l)(r);){if(e.has(r.id))return!0
const t=this._getTile(r.id)
if(null!=t&&t.isReady){for(const t of e){const e=this._getTile(t)
e&&r.contains(e.key)&&(e.visible=!1)}return t.visible=!0,e.add(t.key.id),!0}null!=t&&t.hasData&&t.patchCount>i&&(i=t.patchCount,s=t),r=r.getParentKey()}return!!s&&(s.visible=!0,e.add(s.key.id),!0)}}var K=r(1714),W=r(1244),Z=r(1483),X=r(1333),Y=r(770)
function ee(e){return e&&"openPorts"in e}let te=class extends(Object(K.a)(Object(Z.a)(Object(T.a)(W.a)))){constructor(){super(...arguments),this._pipelineIsUpdating=!0,this._commandsQueue=new L({process:e=>{switch(e.type){case"processed-edit":return this._doEdit(e)
case"refresh":return this._doRefresh(e.dataChanged)
case"update":return this._doUpdate()}}}),this._visibilityOverrides=new Set,this._highlightIds=new Map,this._updateHighlight=Object(y.f)(async()=>this._proxy.setHighlight(Array.from(this._highlightIds.keys()))),this._uploadsLocked=!1,this._needsClusterSizeUpdate=!1,this.featureEffectView=new O,this._lastDefinitionExpression=null}destroy(){var e
Object(f.b)(this._updateClusterSizeTask,e=>e.remove()),null!=(e=this._proxy)&&e.destroy(),this._commandsQueue.destroy()}initialize(){this.addResolvingPromise(Promise.all([this._initProxy(),this._initServiceOptions()])),this.addHandles([this.on("valueRangesChanged",e=>{this._set("_aggregateValueRanges",e.valueRanges)}),Object(b.f)(()=>this.featureEffect,e=>{this.featureEffectView.featureEffect=e},b.e)],"constructor"),this.featureEffectView.endTransitions()}async _initProxy(){var e
const t=this.layer
if("isTable"in t&&t.isTable)throw new c.a("featurelayerview:table-not-supported","table feature layer can't be displayed",{layer:this.layer})
if(!("feature"!==t.type&&"subtype-group"!==t.type||null!=(e=Object(_.b)(t))&&e.operations.supportsQuery))throw new c.a("featurelayerview:query-not-supported","layer view requires a layer with query capability",{layer:t})
this._proxy&&this._proxy.destroy()
const r=this._createClientOptions()
return this._set("_proxy",new B({client:r})),this._proxy.when()}async _initServiceOptions(){return this._set("_serviceOptions",await this._createServiceOptions()),this._serviceOptions}get _effectiveFeatureReduction(){if(!("featureReduction"in this.layer))return null
const e=this.layer.featureReduction
return e&&(!("maxScale"in e)||!e.maxScale||e.maxScale<this.view.scale)?e:null}get orderByFields(){var e,t
return"stream"!==(null==(e=this._serviceOptions)?void 0:e.type)?null==(t=this._serviceOptions)?void 0:t.orderByFields:void 0}get labelsVisible(){const e="subtype-group"===this.layer.type?this.layer.sublayers.items:[this.layer]
return!this.suspended&&e.some(e=>e.labelingInfo&&e.labelsVisible)}get queryMode(){var e
return null==(e=this._serviceOptions)?void 0:e.type}get renderingConfigHash(){var e,t
if(!this.layer)return null
const r=this.availableFields,i=this.layer,s=this.view.floors,{definitionExpression:n}=i,a="subtype-group"!==this.layer.type&&this.layer.labelsVisible&&this.layer.labelingInfo,l="renderer"in i&&i.renderer,o="gdbVersion"in i?i.gdbVersion:void 0,u="historicMoment"in i?null==(e=i.historicMoment)?void 0:e.getTime():void 0,{timeExtent:c}=this,d="customParameters"in i?JSON.stringify(i.customParameters):void 0,p="apiKey"in i?i.apiKey:void 0,h="stream"===i.type?`${JSON.stringify(i.geometryDefinition)}${i.definitionExpression}`:null,y=JSON.stringify(this.clips),b=null==(t=this._effectiveFeatureReduction)?void 0:t.toJSON(),g="orderBy"in this.layer&&JSON.stringify(this.layer.orderBy),m="sublayers"in this.layer&&this.layer.sublayers.items.reduce((e,t)=>e+`${t.visible?1:0}.${JSON.stringify(t.renderer)}.${t.labelsVisible}\n.${JSON.stringify(t.labelingInfo)}`,""),v="subtypeCode"in this.layer&&this.layer.subtypeCode
return JSON.stringify({orderBy:g,sublayerHash:m,subtypeCode:v,filterHash:Object(f.l)(this.filter)&&this.filter.toJSON(),effectHash:Object(f.l)(this.featureEffect)&&this.featureEffect.toJSON(),streamFilter:h,gdbVersion:o,definitionExpression:n,historicMoment:u,availableFields:r,renderer:l,labelingInfo:a,timeExtent:c,floors:s,clipsHash:y,featureReduction:b,customParameters:d,apiKey:p})}highlight(e){var t
let r
e instanceof s.default?r=[e.getObjectId()]:"number"==typeof e||"string"==typeof e?r=[e]:u.a.isCollection(e)&&e.length>0?r=e.map(e=>null==e?void 0:e.getObjectId()).toArray():Array.isArray(e)&&e.length>0&&(r="number"==typeof e[0]||"string"==typeof e[0]?e:e.map(e=>null==e?void 0:e.getObjectId()))
const i=null==(t=r)?void 0:t.filter(f.l)
return i&&i.length?(this._addHighlight(i),{remove:()=>this._removeHighlight(i)}):{remove:()=>{}}}hasHighlight(){return!!this._highlightIds.size}async hitTest(e,t){if(!this.tileRenderer)return null
const r=await this.tileRenderer.hitTest(t)
if(0===r.length)return null
const{features:i,aggregates:n}=await this._proxy.getFeatures(r)
return[...n.map(t=>this._createGraphicHit(e,o.fromJSON(t))),...i.map(t=>this._createGraphicHit(e,s.default.fromJSON(t)))]}queryStatistics(){return this._proxy.queryStatistics()}async querySummaryStatistics(e,t,r){const i={...t,scale:this.view.scale}
return this._proxy.querySummaryStatistics(this._cleanUpQuery(e),i,r)}async queryAggregateSummaryStatistics(e,t,r){const i={...t,scale:this.view.scale}
return this._proxy.queryAggregateSummaryStatistics(this._cleanUpAggregateQuery(e),i,r)}async queryUniqueValues(e,t,r){const i={...t,scale:this.view.scale}
return this._proxy.queryUniqueValues(this._cleanUpQuery(e),i,r)}async queryAggregateUniqueValues(e,t,r){const i={...t,scale:this.view.scale}
return this._proxy.queryAggregateUniqueValues(this._cleanUpAggregateQuery(e),i,r)}async queryClassBreaks(e,t,r){const i={...t,scale:this.view.scale}
return this._proxy.queryClassBreaks(this._cleanUpQuery(e),i,r)}async queryAggregateClassBreaks(e,t,r){const i={...t,scale:this.view.scale}
return this._proxy.queryAggregateClassBreaks(this._cleanUpAggregateQuery(e),i,r)}async queryHistogram(e,t,r){const i={...t,scale:this.view.scale}
return this._proxy.queryHistogram(this._cleanUpQuery(e),i,r)}async queryAggregateHistogram(e,t,r){const i={...t,scale:this.view.scale}
return this._proxy.queryAggregateHistogram(this._cleanUpAggregateQuery(e),i,r)}queryFeatures(e,t){return this.queryFeaturesJSON(e,t).then(e=>{const t=x.a.fromJSON(e)
return t.features.forEach(e=>this._setLayersForFeature(e)),t})}queryVisibleFeatures(e,t){return this._proxy.queryVisibleFeatures(this._cleanUpQuery(e),t).then(e=>{const t=x.a.fromJSON(e)
return t.features.forEach(e=>this._setLayersForFeature(e)),t})}async queryAggregates(e,t){const r=await this._proxy.queryAggregates(this._cleanUpAggregateQuery(e),t),i=F.fromJSON(r)
return i.features.forEach(e=>this._setLayersForFeature(e)),i}queryAggregateIds(e,t){return this._proxy.queryAggregateIds(this._cleanUpAggregateQuery(e),t)}queryAggregateCount(e,t){return this._proxy.queryAggregateCount(this._cleanUpAggregateQuery(e),t)}queryAggregateJSON(e,t){return this._proxy.queryAggregates(this._cleanUpAggregateQuery(e),t)}queryFeaturesJSON(e,t){return this._proxy.queryFeatures(this._cleanUpQuery(e),t)}queryObjectIds(e,t){return this._proxy.queryObjectIds(this._cleanUpQuery(e),t)}queryFeatureCount(e,t){return this._proxy.queryFeatureCount(this._cleanUpQuery(e),t)}queryExtent(e,t){return this._proxy.queryExtent(this._cleanUpQuery(e),t).then(e=>({count:e.count,extent:Y.default.fromJSON(e.extent)}))}setVisibility(e,t){t?this._visibilityOverrides.delete(e):this._visibilityOverrides.add(e),this._update()}update(e){if(!this._tileStrategy||!this.tileRenderer)return
const{hasMissingTiles:t,added:r,removed:i}=this._tileStrategy.update(e);(r.length||i.length)&&this._proxy.updateTiles({added:r,removed:i}),t&&this.requestUpdate(),this.notifyChange("updating")}attach(){this.view.timeline.record(this.layer.title+" (FeatureLayer) Attach"),this._tileStrategy=new $({acquireTile:e=>this._acquireTile(e),releaseTile:e=>this._releaseTile(e),tileInfoView:this.view.featuresTilingScheme,buffer:0}),this.addAttachHandles(Object(b.f)(()=>this.renderingConfigHash,()=>this._update(),b.a)),"stream"!==this.layer.type&&this.addAttachHandles(this.layer.on("edits",e=>this._edit(e)))}detach(){var e,t
this._commandsQueue.clear(),null!=(e=this._proxy)&&e.stop(),this.container.removeAllChildren(),null!=(t=this.tileRenderer)&&t.uninstall(this.container),this.tileRenderer=null,this._tileStrategy=Object(f.e)(this._tileStrategy),this._tileRendererHash=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}isUpdating(){var e
const t="renderer"in this.layer&&null!=this.layer.renderer,r=this._commandsQueue.updating,i=null!=this._updatingRequiredFieldsPromise,s=!this._proxy||!this._proxy.isReady,n=this._pipelineIsUpdating,a=null==this.tileRenderer||(null==(e=this.tileRenderer)?void 0:e.updating),l=t&&(r||i||s||n||a)
return Object(d.a)("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${l}\n  -> hasRenderer ${t}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${i}\n  -> updatingProxy ${s}\n  -> updatingPipeline ${n}\n  -> updatingTileRenderer ${a}\n`),l}_createClientOptions(){return{setUpdating:e=>{this._set("_pipelineIsUpdating",e)},emitEvent:e=>{this.emit(e.name,e.event)}}}async _detectQueryMode(e){var t
const r="path"in e,{layer:i}=this,s="editingInfo"in i&&(null==(t=i.editingInfo)?void 0:t.lastEditDate),n="refreshInterval"in i&&!!i.refreshInterval,a=!s&&n,l=Object(_.b)(i)
if(r&&("feature"===i.type||"subtype-group"===i.type)&&"point"===i.geometryType&&null!=l&&l.query.supportsPagination&&(null==l||!l.operations.supportsEditing)&&!a&&Object(d.a)("featurelayer-snapshot-enabled"))try{const e=await i.queryFeatureCount()
if(e<=Object(d.a)("featurelayer-snapshot-point-min-threshold"))return{mode:"snapshot",featureCount:e}
const t=Object(d.a)("featurelayer-snapshot-point-max-threshold"),r=Object(d.a)("featurelayer-snapshot-point-coverage"),s=this.view.extent,n=Object(f.u)(i.fullExtent),a=null==n?void 0:n.clone().intersection(s),l=Object(f.l)(a)?a.width*a.height:0,o=(null==n?void 0:n.width)*(null==n?void 0:n.height)
if(e<=t&&(0===o?0:l/o)>=r)return{mode:"snapshot",featureCount:e}}catch(e){h.a.getLogger(this.declaredClass).warn("mapview-feature-layer","Encountered an error when querying for featureCount",{error:e})}return{mode:"on-demand"}}async _createServiceOptions(){var e,t,r,i
const s=this.layer
if("stream"===s.type)return null
const n=Object(_.b)(s),{capabilities:a,objectIdField:l}=s,o=s.fields.map(e=>e.toJSON()),u=Object(f.l)(s.fullExtent)?s.fullExtent.toJSON():null,c=Object(D.b)(s.geometryType),d="timeInfo"in s&&s.timeInfo&&s.timeInfo.toJSON()||null,h=s.spatialReference?s.spatialReference.toJSON():null,y="feature"===s.type?s.globalIdField:null
let b
"ogc-feature"===s.type?b=s.source.getSource():ee(s.source)?b=await s.source.openPorts():s.parsedUrl&&(b=Object(p.a)(s.parsedUrl),"dynamicDataSource"in s&&s.dynamicDataSource&&(b.query={layer:JSON.stringify({source:s.dynamicDataSource})}))
const g="datesInUnknownTimezone"in this.layer&&this.layer.datesInUnknownTimezone,m=null!=(e="subtypeField"in this.layer?this.layer.subtypeField:null)?e:null,{mode:v,featureCount:O}=await this._detectQueryMode(b)
let j=this.layer.objectIdField
if("feature"===this.layer.type&&Object(f.l)(this.layer.orderBy)&&this.layer.orderBy.length){const e=!this.layer.orderBy[0].valueExpression&&this.layer.orderBy[0].field
e&&(j=e)}return{type:v,timeReferenceUnknownClient:g,subtypeField:m,featureCount:O,globalIdField:y,maxRecordCount:a.query.maxRecordCount,tileMaxRecordCount:a.query.tileMaxRecordCount,capabilities:a,effectiveCapabilities:n,fields:o,fullExtent:u,geometryType:c,objectIdField:l,source:b,timeInfo:d,spatialReference:h,orderByFields:j,datesInUnknownTimezone:g,dateFieldsTimeReference:("dateFieldsTimeReference"in this.layer?null==(t=this.layer.dateFieldsTimeReference)?void 0:t.toJSON():null)||null,preferredTimeReference:("preferredTimeReference"in this.layer?null==(r=this.layer.preferredTimeReference)?void 0:r.toJSON():null)||null,editFieldsInfo:"editFieldsInfo"in this.layer?null==(i=this.layer.editFieldsInfo)?void 0:i.toJSON():null}}async _createMemoryServiceOptions(e){const t=await e.openPorts()
return{...this._createServiceOptions(),type:"memory",source:t}}_cleanUpQuery(e){const t=E.a.from(e)||this.createQuery()
return t.outSpatialReference||(t.outSpatialReference=this.view.spatialReference),t}_cleanUpAggregateQuery(e){const t=E.a.from(e)||this.createAggregateQuery()
return t.outSpatialReference||(t.outSpatialReference=this.view.spatialReference),t}async _update(){return this._commandsQueue.push({type:"update"})}async _edit(e){if(!this.suspended)return this._validateEdit(e)?this._commandsQueue.push({type:"edit",edits:e}):void 0
this._clearTiles()}async doRefresh(e){if(this.attached&&this._tileStrategy.tileKeys().length)return this.suspended&&e?void this._clearTiles():this._commandsQueue.push({type:"refresh",dataChanged:e})}_clearTiles(){this._tileStrategy.tileKeys().length&&(this._proxy.updateTiles({added:[],removed:this._tileStrategy.tileKeys()}),this._tileStrategy.clear(),this.requestUpdate(),this._commandsQueue.clear(),this._update())}_validateEdit(e){const t="globalIdField"in this.layer&&this.layer.globalIdField,r=e.deletedFeatures.some(e=>-1===e.objectId||!e.objectId),i=t&&this.availableFields.includes(t)
return r&&!i?(h.a.getLogger(this.declaredClass).error(new c.a("mapview-apply-edits",`Editing the specified service requires the layer's globalIdField, ${t} to be included the layer's outFields for updates to be reflected on the map`)),null):e}async _doUpdate(){try{if(this.destroyed||!this._hasRequiredSupport(this.layer)||!this._tileStrategy)return
const{featureEffectView:r,filter:i}=this
if(await this._updateRequiredFields(),this.destroyed)return
const{renderer:s}=this._getEffectiveRenderer()
this._set("_effectiveRenderer",s)
const n=this._createSchemaConfig(),a=this._createConfiguration(n,i,r.filter),l=this._lastDefinitionExpression!==a.schema.source.definitionExpression
this._lastDefinitionExpression=a.schema.source.definitionExpression
const o=a.schema.tileRenderer,u=this._createTileRendererHash(o)
if("snapshot"===this._serviceOptions.type&&(a.schema.source.initialFeatureCount=this._serviceOptions.featureCount),u!==this._tileRendererHash){await this._initTileRenderer(o,s)
const e=this.layer,t="stream"===e.type?await this._initServiceOptions():this._serviceOptions
this.tileRenderer.onConfigUpdate(s),"stream"!==e.type&&ee(e.source)&&(t.source=await e.source.openPorts())
const r={added:this._tileStrategy.tileKeys(),removed:[]}
await this._proxy.startup(this.view.featuresTilingScheme,a,t,r),this.hasHighlight()&&await this._proxy.setHighlight(Array.from(this._highlightIds.keys())),await this._onceTilesUpdated(),this.tileRenderer.onConfigUpdate(s)}else{var e,t
"snapshot"===this._serviceOptions.type&&l&&(a.schema.source.changedFeatureCount=await this.layer.queryFeatureCount())
const r=await this._proxy.update(a);(r.mesh||(null==(e=r.targets)?void 0:e.aggregate))&&this._lockGPUUploads()
try{await this._proxy.applyUpdate(r)}catch(e){Object(y.j)(e)||h.a.getLogger(this.declaredClass).error(e)}(r.mesh||null!=(t=r.targets)&&t.aggregate)&&this._unlockGPUUploads(),this.tileRenderer.onConfigUpdate(s),this._updateClusterSizeVariable(),this._forceAttributeTextureUpload()}this._tileRendererHash=u,this.tileRenderer.invalidateLabels(),this.requestUpdate()}catch(e){}}async _doEdit(e){try{await this._proxy.onEdits(e)}catch(e){Object(y.j)(e)}}async _doRefresh(e){this._lockGPUUploads()
try{let t
e&&"snapshot"===this.queryMode&&"queryFeatureCount"in this.layer&&(t=await this.layer.queryFeatureCount()),await this._proxy.refresh({dataChanged:e,featureCount:t})}catch(e){Object(y.j)(e)}this._unlockGPUUploads(),this._effectiveFeatureReduction&&this._updateClusterSizeVariable()}_updateClusterSizeVariable(){this._needsClusterSizeUpdate&&(this.tileRenderer.onConfigUpdate(this._effectiveRenderer),this._needsClusterSizeUpdate=!1)}_createUpdateClusterSizeTask(e,t){return Object(b.f)(()=>this._aggregateValueRanges,r=>{this._updateClusterEffectiveRendererSizeVariable(e,t,r),this._needsClusterSizeUpdate=!0,this._uploadsLocked||this._updateClusterSizeVariable()})}async _updateClusterEffectiveRendererSizeVariable(e,t,r){if(e.dynamicClusterSize&&"visualVariables"in e&&e.visualVariables){const i=Object(C.c)(e.visualVariables)
if(Object(f.l)(i)&&"cluster_count"===i.field){const s=e.visualVariables.indexOf(i)
e.visualVariables[s]=Object(C.a)(t,r)
const n=e.clone()
n.dynamicClusterSize=!0,this._set("_effectiveRenderer",n)}}}_getEffectiveRenderer(){var e
const t=this.layer,r="renderer"in t?t.renderer:null,i=this._effectiveFeatureReduction
if(this._updateClusterSizeTask=Object(f.s)(this._updateClusterSizeTask),i&&"renderer"in i&&i.renderer&&(null==(e=i.renderer.authoringInfo)||!e.isAutoGenerated)){const e=i.fields
if("cluster"===i.type){const{renderer:t,didInject:r}=Object(C.d)(i.renderer,i,this._aggregateValueRanges)
return r&&(this._updateClusterSizeTask=this._createUpdateClusterSizeTask(t,i)),{renderer:t,aggregateFields:e,featureReduction:i}}return{renderer:i.renderer,aggregateFields:e,featureReduction:i}}if(i&&"cluster"===i.type&&r&&Object(C.e)(r)){const e=i,t=[],s=Object(C.b)(t,r,e,this._aggregateValueRanges,!0)
return this._updateClusterSizeTask=this._createUpdateClusterSizeTask(s,e),{renderer:s,aggregateFields:t,featureReduction:i}}return{renderer:r,aggregateFields:[],featureReduction:null}}_acquireTile(e){const t=this.tileRenderer.acquireTile(e)
return t.once("attach",()=>{this.requestUpdate()}),t}_releaseTile(e){this.tileRenderer.releaseTile(e)}async _initTileRenderer(e,t){const i=await async function(e,t){if(!e)return null
switch(e.type){case"symbol":return new((await Promise.all([r.e(8),r.e(13),r.e(56),r.e(286)]).then(r.bind(null,3088))).default)(t)
case"heatmap":return new((await Promise.all([r.e(8),r.e(13),r.e(56),r.e(354)]).then(r.bind(null,3106))).default)(t)}}(e,{layerView:this,tileInfoView:this.view.featuresTilingScheme,layer:this.layer})
return this.tileRenderer&&(this._tileStrategy.clear(),this.tileRenderer.uninstall(this.container),this.tileRenderer=Object(f.e)(this.tileRenderer)),this.destroyed?null:(this._proxy.tileRenderer=i,this._set("tileRenderer",i),this.tileRenderer.install(this.container),this.tileRenderer.onConfigUpdate(t),this.requestUpdate(),this.tileRenderer)}_createTileRendererHash(e){return""+e.type}get hasFilter(){const e=!!("floorInfo"in this.layer&&this.layer.floorInfo&&this.view.floors&&this.view.floors.length)
return!!this.filter||e||!!this._visibilityOverrides.size||!!this.timeExtent}_injectOverrides(e){const t=Object(f.l)(e)?e.timeExtent:null,r=Object(f.l)(this.timeExtent)&&Object(f.l)(t)?this.timeExtent.intersection(t):this.timeExtent||t
let i=null
const s="floorInfo"in this.layer&&this.layer.floorInfo
if(s){const t=Object(f.l)(e)?e.where:null
i=this._addFloorFilterClause(t)}if(!this._visibilityOverrides.size&&!r&&!s)return Object(f.l)(e)?e.toJSON():null;(e=Object(f.l)(e)&&e.clone()||new j.a).timeExtent=r,i&&(e.where=i)
const n=e.toJSON()
return n.hiddenIds=Array.from(this._visibilityOverrides),n}_addFloorFilterClause(e){const t=this.layer
let r=e||""
if("floorInfo"in t&&t.floorInfo){var i
let e=this.view.floors
if(!e||!e.length)return r;(null==(i=t.floorInfo.viewAllLevelIds)?void 0:i.length)&&(e=t.floorInfo.viewAllLevelIds)
const s=e.filter(e=>""!==e).map(e=>"'"+e+"'")
s.push("''")
const n=t.floorInfo.floorField
let a="("+n+" IN ({ids}) OR "+n+" IS NULL)"
if(a=a.replace("{ids}",s.join(", ")),Object(f.l)(r)&&r.includes(n)){let e=new RegExp("AND \\("+n+".*NULL\\)","g")
r=r.replace(e,""),e=new RegExp("\\("+n+".*NULL\\)","g"),r=r.replace(e,""),r=r.replace(/\s+/g," ").trim()}r=""!==r?"("+r+") AND "+a:a}return""!==r?r:null}_createConfiguration(e,t,r){var i
const s="feature"===this.layer.type&&this.layer.historicMoment?this.layer.historicMoment.getTime():void 0,n="feature"===this.layer.type&&null!=(i=this.layer.gdbVersion)?i:void 0,a=new Array(I.z),l=this._injectOverrides(t)
a[0]=l,a[1]=Object(f.l)(r)?r.toJSON():null
const o=Object(q.b)(e)
if(Object(f.k)(o))return null
const u=Object(X.a)("2d")
return{availableFields:this.availableFields,gdbVersion:n,historicMoment:s,devicePixelRatio:window.devicePixelRatio||1,filters:a,schema:o,supportsTextureFloat:u.supportsTextureFloat,maxTextureSize:u.maxTextureSize}}_hasRequiredSupport(e){return!("renderer"in e)||Object(V.b)(e.renderer)}_onceTilesUpdated(){return this.requestUpdate(),Object(b.h)(()=>!this._pipelineIsUpdating)}_lockGPUUploads(){this.tileRenderer&&(this._uploadsLocked=!0,this.tileRenderer.lockGPUUploads())}_unlockGPUUploads(){this.tileRenderer&&(this._uploadsLocked=!1,this.tileRenderer.unlockGPUUploads())}_forceAttributeTextureUpload(){this.tileRenderer&&this.tileRenderer.forceAttributeTextureUpload()}_createSchemaConfig(){var e
const t=this.layer
return{renderer:"renderer"in t?t.renderer:null,spatialReference:t.spatialReference,timeExtent:"timeExtent"in t?t.timeExtent:null,definitionExpression:t.definitionExpression,featureReduction:this._effectiveFeatureReduction,fields:t.fields,geometryType:t.geometryType,historicMoment:"historicMoment"in t?t.historicMoment:null,labelsVisible:"labelsVisible"in t&&t.labelsVisible,labelingInfo:"labelingInfo"in t?t.labelingInfo:null,availableFields:this.availableFields,featureEffect:this.featureEffect,filter:this.filter,gdbVersion:"gdbVersion"in t?t.gdbVersion:null,pixelBuffer:0,orderBy:"orderBy"in t&&t.orderBy?t.orderBy:null,customParameters:{..."customParameters"in t?t.customParameters:void 0,token:"apiKey"in t&&null!=(e=t.apiKey)?e:void 0},subtypeCode:"subtypeCode"in t?t.subtypeCode:void 0,subtypeField:"subtypeField"in t?t.subtypeField:void 0}}_addHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)
this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1)
this._updateHighlight().catch(e=>{Object(y.j)(e)||h.a.getLogger(this.declaredClass).error(e)})}_removeHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1
0===e?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight().catch(e=>{Object(y.j)(e)||h.a.getLogger(this.declaredClass).error(e)})}_setLayersForFeature(e){const t=this.layer
e.layer=t,e.sourceLayer=t}_createGraphicHit(e,t){return this._setLayersForFeature(t),Object(f.l)(t.geometry)&&(t.geometry.spatialReference=this.view.spatialReference),{type:"graphic",graphic:t,layer:this.layer,mapPoint:e}}}
Object(i.a)([Object(n.b)()],te.prototype,"_serviceOptions",void 0),Object(i.a)([Object(n.b)()],te.prototype,"_proxy",void 0),Object(i.a)([Object(n.b)()],te.prototype,"_pipelineIsUpdating",void 0),Object(i.a)([Object(n.b)()],te.prototype,"_effectiveRenderer",void 0),Object(i.a)([Object(n.b)()],te.prototype,"_effectiveFeatureReduction",null),Object(i.a)([Object(n.b)()],te.prototype,"_aggregateValueRanges",void 0),Object(i.a)([Object(n.b)()],te.prototype,"_commandsQueue",void 0),Object(i.a)([Object(n.b)()],te.prototype,"featureEffectView",void 0),Object(i.a)([Object(n.b)()],te.prototype,"labelsVisible",null),Object(i.a)([Object(n.b)({readOnly:!0})],te.prototype,"queryMode",null),Object(i.a)([Object(n.b)()],te.prototype,"renderingConfigHash",null),Object(i.a)([Object(n.b)()],te.prototype,"tileRenderer",void 0),Object(i.a)([Object(n.b)()],te.prototype,"updating",void 0),te=Object(i.a)([Object(a.a)("esri.views.2d.layers.FeatureLayerView2D")],te)
const re=te}}])
