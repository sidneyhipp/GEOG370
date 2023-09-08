(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[200,30,87,249,273,310,326,759],{1002:function(e,t,r){"use strict"
r.d(t,"a",(function(){return l}))
var n=r(968),s=r(975),i=r(1017),a=r(969)
class o{constructor(){this._emitter=new o.EventEmitter(this)}emit(e,t){return this._emitter.emit(e,t)}on(e,t){return this._emitter.on(e,t)}once(e,t){return this._emitter.once(e,t)}hasEventListener(e){return this._emitter.hasEventListener(e)}}!function(e){class t{constructor(e=null){this._target=e,this._listenersMap=null}clear(){this._listenersMap&&this._listenersMap.clear(),this._listenersMap=null}emit(e,t){const r=this._listenersMap&&this._listenersMap.get(e)
if(!r)return!1
const n=this._target||this
return[...r].forEach(e=>{e.call(n,t)}),r.length>0}on(e,t){if(Array.isArray(e)){const r=e.map(e=>this.on(e,t))
return Object(i.b)(r)}if(e.includes(","))throw new TypeError("Evented.on() with a comma delimited string of event types is not supported")
this._listenersMap||(this._listenersMap=new Map)
const r=this._listenersMap.get(e)||[]
return r.push(t),this._listenersMap.set(e,r),{remove:()=>{const r=this._listenersMap&&this._listenersMap.get(e)||[],n=r.indexOf(t)
n>=0&&r.splice(n,1)}}}once(e,t){const r=this.on(e,e=>{r.remove(),t.call(null,e)})
return r}hasEventListener(e){const t=this._listenersMap&&this._listenersMap.get(e)
return null!=t&&t.length>0}}e.EventEmitter=t,e.EventedMixin=e=>{let r=class extends e{constructor(){super(...arguments),this._emitter=new t}destroy(){this._emitter.clear()}emit(e,t){return this._emitter.emit(e,t)}on(e,t){return this._emitter.on(e,t)}once(e,t){return this._emitter.once(e,t)}hasEventListener(e){return this._emitter.hasEventListener(e)}}
return r=Object(n.a)([Object(a.a)("esri.core.Evented")],r),r}
let r=class extends s.a{constructor(){super(...arguments),this._emitter=new o.EventEmitter(this)}destroy(){this._emitter.clear()}emit(e,t){return this._emitter.emit(e,t)}on(e,t){return this._emitter.on(e,t)}once(e,t){return this._emitter.once(e,t)}hasEventListener(e){return this._emitter.hasEventListener(e)}}
r=Object(n.a)([Object(a.a)("esri.core.Evented")],r),e.EventedAccessor=r}(o||(o={}))
const l=o},1012:function(e,t,r){"use strict"
r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return s})),r.d(t,"d",(function(){return f})),r.d(t,"e",(function(){return p})),r.d(t,"f",(function(){return b})),r.d(t,"g",(function(){return v})),r.d(t,"h",(function(){return O})),r.d(t,"i",(function(){return d})),r.d(t,"j",(function(){return m})),r.d(t,"k",(function(){return y})),r.d(t,"l",(function(){return i})),r.d(t,"m",(function(){return g})),r.d(t,"n",(function(){return E}))
var n=r(1016)
function s(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function i(e,t,r,n,s){return e[0]=t,e[1]=r,e[2]=n,e[3]=s,e}function a(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e[3]=t[3]+r[3],e}function o(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e[3]=t[3]-r[3],e}function l(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e[3]=t[3]*r[3],e}function c(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e[3]=t[3]/r[3],e}function u(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e}function h(e,t){const r=t[0]-e[0],n=t[1]-e[1],s=t[2]-e[2],i=t[3]-e[3]
return Math.sqrt(r*r+n*n+s*s+i*i)}function d(e,t){const r=t[0]-e[0],n=t[1]-e[1],s=t[2]-e[2],i=t[3]-e[3]
return r*r+n*n+s*s+i*i}function p(e){const t=e[0],r=e[1],n=e[2],s=e[3]
return Math.sqrt(t*t+r*r+n*n+s*s)}function b(e){const t=e[0],r=e[1],n=e[2],s=e[3]
return t*t+r*r+n*n+s*s}function y(e,t){const r=t[0],n=t[1],s=t[2],i=t[3]
let a=r*r+n*n+s*s+i*i
return a>0&&(a=1/Math.sqrt(a),e[0]=r*a,e[1]=n*a,e[2]=s*a,e[3]=i*a),e}function f(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]}function m(e,t,r,n){const s=t[0],i=t[1],a=t[2],o=t[3]
return e[0]=s+n*(r[0]-s),e[1]=i+n*(r[1]-i),e[2]=a+n*(r[2]-a),e[3]=o+n*(r[3]-o),e}function g(e,t,r){const n=t[0],s=t[1],i=t[2],a=t[3]
return e[0]=r[0]*n+r[4]*s+r[8]*i+r[12]*a,e[1]=r[1]*n+r[5]*s+r[9]*i+r[13]*a,e[2]=r[2]*n+r[6]*s+r[10]*i+r[14]*a,e[3]=r[3]*n+r[7]*s+r[11]*i+r[15]*a,e}function v(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]}function O(e,t){const r=e[0],s=e[1],i=e[2],a=e[3],o=t[0],l=t[1],c=t[2],u=t[3],h=Object(n.c)()
return Math.abs(r-o)<=h*Math.max(1,Math.abs(r),Math.abs(o))&&Math.abs(s-l)<=h*Math.max(1,Math.abs(s),Math.abs(l))&&Math.abs(i-c)<=h*Math.max(1,Math.abs(i),Math.abs(c))&&Math.abs(a-u)<=h*Math.max(1,Math.abs(a),Math.abs(u))}const j=o,_=l,w=c,S=h,L=d,M=p,T=b,E=Object.freeze(Object.defineProperty({__proto__:null,add:a,ceil:function(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e[3]=Math.ceil(t[3]),e},copy:s,dist:S,distance:h,div:w,divide:c,dot:f,equals:O,exactEquals:v,floor:function(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e[3]=Math.floor(t[3]),e},inverse:function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e[3]=1/t[3],e},len:M,length:p,lerp:m,max:function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e[3]=Math.max(t[3],r[3]),e},min:function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e[3]=Math.min(t[3],r[3]),e},mul:_,multiply:l,negate:function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e},normalize:y,random:function(e,t){const r=n.a
let s,i,a,o,l,c
t=t||1
do{s=2*r()-1,i=2*r()-1,l=s*s+i*i}while(l>=1)
do{a=2*r()-1,o=2*r()-1,c=a*a+o*o}while(c>=1)
const u=Math.sqrt((1-l)/c)
return e[0]=t*s,e[1]=t*i,e[2]=t*a*u,e[3]=t*o*u,e},round:function(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e[3]=Math.round(t[3]),e},scale:u,scaleAndAdd:function(e,t,r,n){return e[0]=t[0]+r[0]*n,e[1]=t[1]+r[1]*n,e[2]=t[2]+r[2]*n,e[3]=t[3]+r[3]*n,e},set:i,sqrDist:L,sqrLen:T,squaredDistance:d,squaredLength:b,str:function(e){return"vec4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},sub:j,subtract:o,transformMat4:g,transformQuat:function(e,t,r){const n=t[0],s=t[1],i=t[2],a=r[0],o=r[1],l=r[2],c=r[3],u=c*n+o*i-l*s,h=c*s+l*n-a*i,d=c*i+a*s-o*n,p=-a*n-o*s-l*i
return e[0]=u*c+p*-a+h*-l-d*-o,e[1]=h*c+p*-o+d*-a-u*-l,e[2]=d*c+p*-l+u*-o-h*-a,e[3]=t[3],e}},Symbol.toStringTag,{value:"Module"}))},1016:function(e,t,r){"use strict"
r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return s})),r.d(t,"d",(function(){return l}))
let n=1e-6
function s(){return n}const i=Math.random,a=Math.PI/180,o=180/Math.PI
function l(e){return e*a}function c(e){return e*o}Object.freeze(Object.defineProperty({__proto__:null,RANDOM:i,equals:function(e,t){return Math.abs(e-t)<=n*Math.max(1,Math.abs(e),Math.abs(t))},getEpsilon:s,setEpsilon:function(e){n=e},toDegree:c,toRadian:l},Symbol.toStringTag,{value:"Module"}))},1019:function(e,t,r){"use strict"
r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return u}))
var n=r(110),s=r(771),i=r(446),a=r(233),o=r(374)
const l=a.a.getLogger("esri.assets")
function c(e,t){return Object(s.default)(u(e),t)}function u(e){if(!n.default.assetsPath)throw l.errorOnce("The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50"),new i.a("assets:path-not-set","config.assetsPath is not set")
return Object(o.E)(n.default.assetsPath,e)}},1021:function(e,t,r){"use strict"
r.d(t,"a",(function(){return f}))
var n,s=r(968),i=r(234),a=r(970),o=(r(971),r(969)),l=r(974),c=r(770),u=r(1004),h=r(992),d=r(769),p=r(1157),b=r(1105)
let y=n=class extends u.a{constructor(...e){super(...e),this.paths=[],this.type="polyline"}normalizeCtorArgs(e,t){let r,n,s=null,i=null
return e&&!Array.isArray(e)?(s=e.paths?e.paths:null,t||(e.spatialReference?t=e.spatialReference:e.paths||(t=e)),r=e.hasZ,n=e.hasM):s=e,s=s||[],t=t||d.default.WGS84,s.length&&s[0]&&null!=s[0][0]&&"number"==typeof s[0][0]&&(s=[s]),i=s[0]&&s[0][0],i&&(void 0===r&&void 0===n?(r=i.length>2,n=!1):void 0===r?r=!n&&i.length>3:void 0===n&&(n=!r&&i.length>3)),{paths:s,spatialReference:t,hasZ:r,hasM:n}}get cache(){return this.commitProperty("paths"),this.commitProperty("hasZ"),this.commitProperty("hasM"),this.commitProperty("spatialReference"),{}}get extent(){const{spatialReference:e}=this,t=Object(p.c)(this)
if(!t)return null
const r=new c.default(t)
return r.spatialReference=e,r}writePaths(e,t){t.paths=Object(i.a)(this.paths)}addPath(e){if(!e)return
const t=this.paths,r=t.length
if(function(e){return!Array.isArray(e[0])}(e)){const n=[]
for(let t=0,r=e.length;t<r;t++)n[t]=e[t].toArray()
t[r]=n}else t[r]=e.concat()
return this.notifyChange("paths"),this}clone(){const e=new n
return e.spatialReference=this.spatialReference,e.paths=Object(i.a)(this.paths),e.hasZ=this.hasZ,e.hasM=this.hasM,e}getPoint(e,t){if(!this._validateInputs(e,t))return null
const r=this.paths[e][t],n=this.hasZ,s=this.hasM
return n&&!s?new h.a(r[0],r[1],r[2],void 0,this.spatialReference):s&&!n?new h.a(r[0],r[1],void 0,r[2],this.spatialReference):n&&s?new h.a(r[0],r[1],r[2],r[3],this.spatialReference):new h.a(r[0],r[1],this.spatialReference)}insertPoint(e,t,r){return this._validateInputs(e,t,!0)?(Object(b.a)(this,r),Array.isArray(r)||(r=r.toArray()),this.paths[e].splice(t,0,r),this.notifyChange("paths"),this):this}removePath(e){if(!this._validateInputs(e,null))return null
const t=this.paths.splice(e,1)[0],r=this.spatialReference,n=t.map(e=>new h.a(e,r))
return this.notifyChange("paths"),n}removePoint(e,t){if(!this._validateInputs(e,t))return null
const r=new h.a(this.paths[e].splice(t,1)[0],this.spatialReference)
return this.notifyChange("paths"),r}setPoint(e,t,r){return this._validateInputs(e,t)?(Object(b.a)(this,r),Array.isArray(r)||(r=r.toArray()),this.paths[e][t]=r,this.notifyChange("paths"),this):this}_validateInputs(e,t,r=!1){if(null==e||e<0||e>=this.paths.length)return!1
if(null!=t){const n=this.paths[e]
if(r&&(t<0||t>n.length))return!1
if(!r&&(t<0||t>=n.length))return!1}return!0}toJSON(e){return this.write({},e)}}
Object(s.a)([Object(a.b)({readOnly:!0})],y.prototype,"cache",null),Object(s.a)([Object(a.b)({readOnly:!0})],y.prototype,"extent",null),Object(s.a)([Object(a.b)({type:[[[Number]]],json:{write:{isRequired:!0}}})],y.prototype,"paths",void 0),Object(s.a)([Object(l.a)("paths")],y.prototype,"writePaths",null),y=n=Object(s.a)([Object(o.a)("esri.geometry.Polyline")],y),y.prototype.toJSON.isDefaultToJSON=!0
const f=y},1027:function(e,t,r){"use strict"
r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b})),r.d(t,"c",(function(){return d}))
var n=r(446),s=r(973),i=r(1005)
const a=/^([a-z]{2})(?:[-_]([A-Za-z]{2}))?$/,o={ar:!0,bg:!0,bs:!0,ca:!0,cs:!0,da:!0,de:!0,el:!0,en:!0,es:!0,et:!0,fi:!0,fr:!0,he:!0,hr:!0,hu:!0,id:!0,it:!0,ja:!0,ko:!0,lt:!0,lv:!0,nb:!0,nl:!0,pl:!0,"pt-BR":!0,"pt-PT":!0,ro:!0,ru:!0,sk:!0,sl:!0,sr:!0,sv:!0,th:!0,tr:!0,uk:!0,vi:!0,"zh-CN":!0,"zh-HK":!0,"zh-TW":!0}
function l(e){var t
return null!=(t=o[e])&&t}const c=[],u=new Map
function h(e){for(const t of u.keys())y(e.pattern,t)&&u.delete(t)}function d(e){return c.includes(e)||(h(e),c.unshift(e)),{remove(){const t=c.indexOf(e)
t>-1&&(c.splice(t,1),h(e))}}}async function p(e){const t=Object(i.b)()
u.has(e)||u.set(e,async function(e,t){const r=[]
for(const n of c)if(y(n.pattern,e))try{return await n.fetchMessageBundle(e,t)}catch(e){r.push(e)}if(r.length)throw new n.a("intl:message-bundle-error",`Errors occurred while loading "${e}"`,{errors:r})
throw new n.a("intl:no-message-bundle-loader",`No loader found for message bundle "${e}"`)}(e,t))
const r=u.get(e)
return r&&await f.add(r),r}function b(e){if(!a.test(e))return null
const t=a.exec(e)
if(null===t)return null
const[,r,n]=t,s=r+(n?"-"+n.toUpperCase():"")
return l(s)?s:l(r)?r:null}function y(e,t){return"string"==typeof e?t.startsWith(e):e.test(t)}Object(i.a)(()=>{u.clear()})
const f=new class{constructor(){this._numLoading=0,this._dfd=null}async waitForAll(){this._dfd&&await this._dfd.promise}add(e){return this._increase(),e.then(()=>this._decrease(),()=>this._decrease()),this.waitForAll()}_increase(){this._numLoading++,this._dfd||(this._dfd=Object(s.d)())}_decrease(){this._numLoading=Math.max(this._numLoading-1,0),this._dfd&&0===this._numLoading&&(this._dfd.resolve(),this._dfd=null)}}},1034:function(e,t,r){"use strict"
r.d(t,"a",(function(){return y})),r.d(t,"b",(function(){return f})),r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return u})),r.d(t,"e",(function(){return p})),r.d(t,"f",(function(){return b}))
var n=r(968),s=r(975),i=r(23),a=r(973),o=r(970),l=(r(971),r(445),r(969))
function c(e,t,r){return Object(a.g)(e.map((e,n)=>t.apply(r,[e,n])))}async function u(e,t,r){return(await Object(a.g)(e.map((e,n)=>t.apply(r,[e,n])))).map(e=>e.value)}function h(e){return{ok:!0,value:e}}function d(e){return{ok:!1,error:e}}async function p(e){if(Object(i.k)(e))return{ok:!1,error:new Error("no promise provided")}
try{return h(await e)}catch(e){return d(e)}}async function b(e){try{return h(await e)}catch(e){return Object(a.p)(e),d(e)}}function y(e){if(!0===e.ok)return e.value
throw e.error}function f(e,t){return new m(e,t)}let m=class extends s.a{get value(){return e=this._result,Object(i.l)(e)&&!0===e.ok?e.value:null
var e}get error(){return e=this._result,Object(i.l)(e)&&!1===e.ok?e.error:null
var e}get finished(){return Object(i.l)(this._result)}constructor(e,t){super({}),this._result=null,this._abortHandle=null,this.abort=()=>{this._abortController=Object(i.a)(this._abortController)},this.remove=this.abort,this._abortController=new AbortController
const{signal:r}=this._abortController
this.promise=e(r),this.promise.then(e=>{this._result=h(e),this._cleanup()},e=>{this._result=d(e),this._cleanup()}),this._abortHandle=Object(a.n)(t,this.abort)}normalizeCtorArgs(){return{}}destroy(){this.abort()}_cleanup(){this._abortHandle=Object(i.s)(this._abortHandle),this._abortController=null}}
Object(n.a)([Object(o.b)()],m.prototype,"value",null),Object(n.a)([Object(o.b)()],m.prototype,"error",null),Object(n.a)([Object(o.b)()],m.prototype,"finished",null),Object(n.a)([Object(o.b)()],m.prototype,"promise",void 0),Object(n.a)([Object(o.b)()],m.prototype,"_result",void 0),m=Object(n.a)([Object(l.a)("esri.core.asyncUtils.ReactiveTask")],m)},1036:function(e,t,r){"use strict"
r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return i}))
var n=r(976)
const s=Object(n.b)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon"}),i=Object(n.b)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh"})},1037:function(e,t,r){"use strict"
r.d(t,"a",(function(){return g})),r.d(t,"b",(function(){return m})),r.d(t,"c",(function(){return f})),r.d(t,"d",(function(){return y})),r.d(t,"e",(function(){return d})),r.d(t,"f",(function(){return p})),r.d(t,"g",(function(){return b})),r.d(t,"h",(function(){return o})),r.d(t,"i",(function(){return h})),r.d(t,"j",(function(){return c})),r.d(t,"k",(function(){return a})),r.d(t,"l",(function(){return u})),r.d(t,"m",(function(){return l}))
var n=r(196),s=r(771),i=r(23)
function a(e){const t=null==e?void 0:e.type
return"base-tile"===t||"tile"===t||"elevation"===t||"imagery-tile"===t||"base-elevation"===t||"open-street-map"===t||"wcs"===t||"web-tile"===t||"wmts"===t||"vector-tile"===t}function o(e){return null!=e&&"type"in e&&"group"===e.type}const l={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"}
function c(e){const t=null==e?void 0:e.type
return"building-scene"===t||"integrated-mesh"===t||"point-cloud"===t||"scene"===t}function u(e){return"voxel"===(null==e?void 0:e.type)}function h(e){return"imagery-tile"===(null==e?void 0:e.type)}function d(e){return null!=e&&null!=e.parent&&"declaredClass"in e.parent&&"esri.Basemap"===e.parent.declaredClass&&e.parent.baseLayers.includes(e)}function p(e){var t
return"feature"===(null==e?void 0:e.type)&&!e.url&&"memory"===(null==(t=e.source)?void 0:t.type)}function b(e){var t
return"feature"===(null==e?void 0:e.type)&&"feature-layer"===(null==(t=e.source)?void 0:t.type)}function y(e){if(e.activeLayer){const t=e.activeLayer.tileMatrixSet
if(t)return t
const r=e.activeLayer.tileMatrixSets
if(r)return r}return null}async function f(e,t){const r=null==n.b?void 0:n.b.findServerInfo(e)
if(null!=(null==r?void 0:r.currentVersion))return r.owningSystemUrl||null
const a=e.toLowerCase().indexOf("/rest/services")
if(-1===a)return null
const o=e.substring(0,a)+"/rest/info",l=Object(i.l)(t)?t.signal:null,{data:c}=await Object(s.default)(o,{query:{f:"json"},responseType:"json",signal:l})
return(null==c?void 0:c.owningSystemUrl)||null}function m(e){return function(e){if(!("capabilities"in e))return!1
switch(e.type){case"csv":case"feature":case"geojson":case"imagery":case"knowledge-graph-sublayer":case"ogc-feature":case"oriented-imagery":case"scene":case"subtype-group":case"subtype-sublayer":case"wfs":return!0
default:return!1}}(e)?"effectiveCapabilities"in e?e.effectiveCapabilities:e.capabilities:null}function g(e){return!!function(e){if(!("editingEnabled"in e))return!1
switch(e.type){case"csv":case"feature":case"geojson":case"oriented-imagery":case"scene":case"subtype-group":case"subtype-sublayer":return!0
default:return!1}}(e)&&("effectiveEditingEnabled"in e?e.effectiveEditingEnabled:e.editingEnabled)}},1046:function(e,t,r){"use strict"
r.d(t,"a",(function(){return b}))
var n=r(968),s=r(446),i=r(1058),a=r(973),o=r(1044),l=r(970),c=r(969)
const u="loaded",h=e=>{let t=class extends e{constructor(...e){super(...e),this._loadController=null,this.loadError=null,this.loadStatus="not-loaded",this._set("loadWarnings",[]),this.addResolvingPromise(new Promise(e=>{const t=this.load.bind(this)
this.load=r=>{const n=new Promise((e,t)=>{const n=Object(a.o)(r,t)
this.destroyed&&t(new s.a("load:instance-destroyed",`Instance of '${this.declaredClass||this.constructor.name}' is already destroyed`,{instance:this})),this._promiseProps.when(e,t).finally(()=>{n&&n.remove()})})
if("not-loaded"===this.loadStatus){this._set("loadStatus","loading")
const e=this._loadController=new AbortController
t({signal:e.signal}),Object(a.n)(e.signal,()=>{this._promiseProps.abort()})}return e(),n}})),this.when(()=>{this._set("loadStatus",u),this._loadController=null},e=>{this._set("loadStatus","failed"),this._set("loadError",e),this._loadController=null})}get loaded(){return this.loadStatus===u}get loadWarnings(){return this._get("loadWarnings")}load(){return null}cancelLoad(){var e
return this.isFulfilled()||(this._set("loadError",new s.a("load:cancelled","Cancelled")),null!=(e=this._loadController)&&e.abort()),this}}
return Object(n.a)([Object(l.b)({readOnly:!0})],t.prototype,"loaded",null),Object(n.a)([Object(l.b)({readOnly:!0})],t.prototype,"loadError",void 0),Object(n.a)([Object(l.b)({clonable:!1})],t.prototype,"loadStatus",void 0),Object(n.a)([Object(l.b)({type:[o.a],readOnly:!0})],t.prototype,"loadWarnings",null),t=Object(n.a)([Object(c.a)("esri.core.Loadable")],t),t}
let d=class extends(h(i.a)){}
var p
d=Object(n.a)([Object(c.a)("esri.core.Loadable")],d),(p=d||(d={})).LoadableMixin=h,p.isLoadable=function(e){return!(!e||!e.load)}
const b=d},1055:function(e,t,r){"use strict"
r.d(t,"a",(function(){return y}))
var n,s=r(968),i=r(234),a=r(970),o=(r(971),r(969)),l=r(974),c=r(770),u=r(1004),h=r(992),d=r(1105)
function p(e){return(t,r)=>null==t?r:null==r?t:e(t,r)}let b=n=class extends u.a{constructor(...e){super(...e),this.points=[],this.type="multipoint"}normalizeCtorArgs(e,t){if(!e&&!t)return{}
const r={}
Array.isArray(e)?(r.points=e,r.spatialReference=t):function(e){return e&&("esri.geometry.SpatialReference"===e.declaredClass||null!=e.wkid)}(e)?r.spatialReference=e:(e.points&&(r.points=e.points),e.spatialReference&&(r.spatialReference=e.spatialReference),e.hasZ&&(r.hasZ=e.hasZ),e.hasM&&(r.hasM=e.hasM))
const n=r.points&&r.points[0]
return n&&(void 0===r.hasZ&&void 0===r.hasM?(r.hasZ=n.length>2,r.hasM=!1):void 0===r.hasZ?r.hasZ=n.length>3:void 0===r.hasM&&(r.hasM=n.length>3)),r}get cache(){return this.commitProperty("points"),this.commitProperty("hasZ"),this.commitProperty("hasM"),this.commitProperty("spatialReference"),{}}get extent(){const e=this.points
if(!e.length)return null
const t=new c.default,r=this.hasZ,n=this.hasM,s=r?3:2,i=e[0],a=p(Math.min),o=p(Math.max)
let l,u,h,d,[b,y]=i,[f,m]=i
for(let t=0,i=e.length;t<i;t++){const i=e[t],[c,p]=i
if(b=a(b,c),y=a(y,p),f=o(f,c),m=o(m,p),r&&i.length>2){const e=i[2]
l=a(l,e),h=o(h,e)}if(n&&i.length>s){const e=i[s]
u=a(u,e),d=o(d,e)}}return t.xmin=b,t.ymin=y,t.xmax=f,t.ymax=m,t.spatialReference=this.spatialReference,r?(t.zmin=l,t.zmax=h):(t.zmin=void 0,t.zmax=void 0),n?(t.mmin=u,t.mmax=d):(t.mmin=void 0,t.mmax=void 0),t}writePoints(e,t){t.points=Object(i.a)(this.points)}addPoint(e){return Object(d.a)(this,e),Array.isArray(e)?this.points.push(e):this.points.push(e.toArray()),this.notifyChange("points"),this}clone(){const e={points:Object(i.a)(this.points),spatialReference:this.spatialReference}
return this.hasZ&&(e.hasZ=!0),this.hasM&&(e.hasM=!0),new n(e)}getPoint(e){if(!this._validateInputs(e))return null
const t=this.points[e],r={x:t[0],y:t[1],spatialReference:this.spatialReference}
let n=2
return this.hasZ&&(r.z=t[2],n=3),this.hasM&&(r.m=t[n]),new h.a(r)}removePoint(e){if(!this._validateInputs(e))return null
const t=new h.a(this.points.splice(e,1)[0],this.spatialReference)
return this.notifyChange("points"),t}setPoint(e,t){return this._validateInputs(e)?(Object(d.a)(this,t),Array.isArray(t)||(t=t.toArray()),this.points[e]=t,this.notifyChange("points"),this):this}toJSON(e){return this.write({},e)}_validateInputs(e){return null!=e&&e>=0&&e<this.points.length}}
Object(s.a)([Object(a.b)({readOnly:!0})],b.prototype,"cache",null),Object(s.a)([Object(a.b)()],b.prototype,"extent",null),Object(s.a)([Object(a.b)({type:[[Number]],json:{write:{isRequired:!0}}})],b.prototype,"points",void 0),Object(s.a)([Object(l.a)("points")],b.prototype,"writePoints",null),b=n=Object(s.a)([Object(o.a)("esri.geometry.Multipoint")],b),b.prototype.toJSON.isDefaultToJSON=!0
const y=b},1058:function(e,t,r){"use strict"
r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return h}))
var n,s,i=r(968),a=r(975),o=r(23),l=r(973),c=r(969);(s=n||(n={}))[s.PENDING=0]="PENDING",s[s.RESOLVED=1]="RESOLVED",s[s.REJECTED=2]="REJECTED"
class u{constructor(e){this.instance=e,this._resolver=Object(l.d)(),this._status=n.PENDING,this._resolvingPromises=[],this._resolver.promise.then(()=>{this._status=n.RESOLVED,this._cleanUp()},()=>{this._status=n.REJECTED,this._cleanUp()})}addResolvingPromise(e){this._resolvingPromises.push(e),this._tryResolve()}isResolved(){return this._status===n.RESOLVED}isRejected(){return this._status===n.REJECTED}isFulfilled(){return this._status!==n.PENDING}abort(){this._resolver.reject(Object(l.c)())}when(e,t){return this._resolver.promise.then(e,t)}_cleanUp(){this._allPromise=this._resolvingPromises=this._allPromise=null}_tryResolve(){if(this.isFulfilled())return
const e=Object(l.d)(),t=[...this._resolvingPromises,Object(o.d)(e.promise)],r=this._allPromise=Promise.all(t)
r.then(()=>{this.isFulfilled()||this._allPromise!==r||this._resolver.resolve(this.instance)},e=>{this.isFulfilled()||this._allPromise!==r||Object(l.j)(e)||this._resolver.reject(e)}),e.resolve()}}const h=e=>{let t=class extends e{constructor(...e){super(...e),this._promiseProps=new u(this),this.addResolvingPromise(Promise.resolve())}isResolved(){return this._promiseProps.isResolved()}isRejected(){return this._promiseProps.isRejected()}isFulfilled(){return this._promiseProps.isFulfilled()}when(e,t){return new Promise((e,t)=>{this._promiseProps.when(e,t)}).then(e,t)}catch(e){return this.when(null,e)}addResolvingPromise(e){e&&!this._promiseProps.isFulfilled()&&this._promiseProps.addResolvingPromise("_promiseProps"in e?e.when():e)}}
return t=Object(i.a)([Object(c.a)("esri.core.Promise")],t),t}
let d=class extends(h(a.a)){}
d=Object(i.a)([Object(c.a)("esri.core.Promise")],d)},1063:function(e,t,r){"use strict"
r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return o}))
var n=r(968),s=r(969)
let i=0
const a=e=>{let t=class extends e{constructor(...e){super(...e),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:Date.now().toString(16)+"-object-"+i++})}}
return t=Object(n.a)([Object(s.a)("esri.core.Identifiable")],t),t},o=e=>{let t=class extends e{constructor(...e){super(...e),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:i++})}}
return t=Object(n.a)([Object(s.a)("esri.core.NumericIdentifiable")],t),t}
let l=class extends(a(class{})){}
l=Object(n.a)([Object(s.a)("esri.core.Identifiable")],l)},1066:function(e,t,r){"use strict"
r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return f})),r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return i})),r.d(t,"e",(function(){return a})),r.d(t,"f",(function(){return h})),r.d(t,"g",(function(){return d})),r.d(t,"h",(function(){return p})),r.d(t,"i",(function(){return j})),r.d(t,"j",(function(){return _})),r.d(t,"k",(function(){return b})),r.d(t,"l",(function(){return l})),r.d(t,"m",(function(){return g})),r.d(t,"n",(function(){return v}))
var n=r(445),s=r(988)
function i(e){if(!e)return null
if(Array.isArray(e))return e
const t=e.hasZ,r=e.hasM
if("point"===e.type)return r&&t?[e.x,e.y,e.z,e.m]:t?[e.x,e.y,e.z]:r?[e.x,e.y,e.m]:[e.x,e.y]
if("polygon"===e.type)return e.rings.slice(0)
if("polyline"===e.type)return e.paths.slice(0)
if("multipoint"===e.type)return e.points.slice(0)
if("extent"===e.type){const t=e.clone().normalize()
if(!t)return null
let r=!1,n=!1
return t.forEach(e=>{e.hasZ&&(r=!0),e.hasM&&(n=!0)}),t.map(e=>{const t=[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]
if(r&&e.hasZ){const r=.5*(e.zmax-e.zmin)
for(let e=0;e<t.length;e++)t[e].push(r)}if(n&&e.hasM){const r=.5*(e.mmax-e.mmin)
for(let e=0;e<t.length;e++)t[e].push(r)}return t})}return null}function a(e,t){const r=t[0]-e[0],n=t[1]-e[1]
if(e.length>2&&t.length>2){const s=e[2]-t[2]
return Math.sqrt(r*r+n*n+s*s)}return Math.sqrt(r*r+n*n)}function o(e,t,r){const n=e[0]+r*(t[0]-e[0]),s=e[1]+r*(t[1]-e[1])
return e.length>2&&t.length>2?[n,s,e[2]+r*(t[2]-e[2])]:[n,s]}function l(e,t,r,n){const[s,i]=t,[a,o]=r[n],[l,c]=r[n+1],u=l-a,h=c-o,d=u*u+h*h,p=(s-a)*u+(i-o)*h,b=Math.min(1,Math.max(0,p/d))
return e[0]=a+u*b,e[1]=o+h*b,e}function c(e,t,r){const n=r.rings
let s,i,a=!1,o=1/0
for(let r=0;r<n.length;r++){const l=n[r]
for(let r=0,n=l.length-1;r<l.length;n=r++)s=l[r],i=l[n],s[1]>t!=i[1]>t&&e<(i[0]-s[0])*(t-s[1])/(i[1]-s[1])+s[0]&&(a=!a),o=Math.min(o,u(e,t,s,i))}return 0===o?0:(a?1:-1)*Math.sqrt(o)}function u(e,t,r,n){let s=r[0],i=r[1],a=n[0]-s,o=n[1]-i
if(0!==a||0!==o){const r=((e-s)*a+(t-i)*o)/(a*a+o*o)
r>1?(s=n[0],i=n[1]):r>0&&(s+=a*r,i+=o*r)}return a=e-s,o=t-i,a*a+o*o}function h(e,t){return o(e,t,.5)}function d(e){const t=e.length
let r=0
for(let n=0;n<t-1;++n)r+=a(e[n],e[n+1])
return r}function p(e,t){if(t<=0)return e[0]
const r=e.length
let n=0
for(let s=0;s<r-1;++s){const r=a(e[s],e[s+1])
if(t-n<r){const i=(t-n)/r
return o(e[s],e[s+1],i)}n+=r}return e[r-1]}function b(e,t,r){const n=e.length
let s=0,i=0,a=0
for(let o=0;o<n;o++){const l=e[o],c=e[(o+1)%n]
let u=2
s+=l[0]*c[1]-c[0]*l[1],l.length>2&&c.length>2&&r&&(i+=l[0]*c[2]-c[0]*l[2],u=3),l.length>u&&c.length>u&&t&&(a+=l[0]*c[u]-c[0]*l[u])}return s<=0&&i<=0&&a<=0}function y(e){const t=e.length
return t>2&&Object(n.e)(e[0],e[t-1])}function f(e){var t,r
if("rings"in e&&(m(e),e.rings.length>0&&!b(e.rings[0],null!=(t=e.hasM)&&t,null!=(r=e.hasZ)&&r)))for(const t of e.rings)t.reverse()}function m(e){if("rings"in e)for(const t of e.rings)y(t)||t.push(t[0].slice())}function g(e){return"polygon"!==e.type&&"polyline"!==e.type||v("polygon"===e.type?e.rings:e.paths,e.spatialReference),e}function v(e,t){const r=Object(s.e)(t)
if(!r)return
const n=r.valid[0],i=r.valid[1],a=i-n
for(const t of e){let e=1/0,r=-1/0
for(const s of t){const t=O(s[0],n,i)
e=Math.min(e,t),r=Math.max(r,t),s[0]=t}const s=r-e
a-s<s&&t.forEach(e=>{e[0]<0&&(e[0]+=a)})}}function O(e,t,r){const n=r-t
return e<t?r-(t-e)%n:e>r?t+(e-t)%n:e}function j(e){if(!e||e.length<3)return 0
let t=0
const r=e.length-1
for(let n=0;n<r;n++)t+=(e[n][0]-e[n+1][0])*(e[n][1]+e[n+1][1])
return t+=(e[r][0]-e[0][0])*(e[r][1]+e[0][1]),-.5*t}function _(e,t){if(e===t)return!0
if(e.type!==t.type)return!1
if("point"===e.type||"extent"===e.type)return!0
if("multipoint"===e.type)return e.points.length===t.points.length
const[r,n]="polyline"===e.type?[e.paths,t.paths]:[e.rings,t.rings]
return r.length===n.length&&r.every((e,t)=>e.length===n[t].length)}},1079:function(e,t,r){"use strict"
function n(e){return void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax}function s(e){return void 0!==e.points}function i(e){return void 0!==e.x&&void 0!==e.y}function a(e){return void 0!==e.paths}function o(e){return void 0!==e.rings}function l(e){return function(t,r){return null==t?r:null==r?t:e(t,r)}}r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return y})),r.d(t,"d",(function(){return p}))
const c=l(Math.min),u=l(Math.max)
function h(e,t){return a(t)?p(e,t.paths,!1,!1):o(t)?p(e,t.rings,!1,!1):s(t)?y(e,t.points,!1,!1,!1,!1):n(t)?b(e,t):(i(t)&&(e[0]=t.x,e[1]=t.y,e[2]=t.x,e[3]=t.y),e)}function d(e,t){return a(t)?p(e,t.paths,!0,!1):o(t)?p(e,t.rings,!0,!1):s(t)?y(e,t.points,!0,!1,!0,!1):n(t)?b(e,t,!0,!1,!0,!1):(i(t)&&(e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.x,e[4]=t.y,e[5]=t.z),e)}function p(e,t,r,n){const s=r?3:2
if(!t.length||!t[0].length)return null
let i,a,o,l,[h,d]=t[0][0],[p,b]=t[0][0]
for(let e=0;e<t.length;e++){const y=t[e]
for(let e=0;e<y.length;e++){const t=y[e],[f,m]=t
if(h=c(h,f),d=c(d,m),p=u(p,f),b=u(b,m),r&&t.length>2){const e=t[2]
i=c(i,e),a=u(a,e)}if(n&&t.length>s){const e=t[s]
o=c(i,e),l=u(a,e)}}}return r?n?(e[0]=h,e[1]=d,e[2]=i,e[3]=o,e[4]=p,e[5]=b,e[6]=a,e[7]=l,e.length=8,e):(e[0]=h,e[1]=d,e[2]=i,e[3]=p,e[4]=b,e[5]=a,e.length=6,e):n?(e[0]=h,e[1]=d,e[2]=o,e[3]=p,e[4]=b,e[5]=l,e.length=6,e):(e[0]=h,e[1]=d,e[2]=p,e[3]=b,e.length=4,e)}function b(e,t,r,n,s,i){const a=t.xmin,o=t.xmax,l=t.ymin,c=t.ymax
let u=t.zmin,h=t.zmax,d=t.mmin,p=t.mmax
return s?(u=u||0,h=h||0,i?(d=d||0,p=p||0,e[0]=a,e[1]=l,e[2]=u,e[3]=d,e[4]=o,e[5]=c,e[6]=h,e[7]=p,e):(e[0]=a,e[1]=l,e[2]=u,e[3]=o,e[4]=c,e[5]=h,e)):i?(d=d||0,p=p||0,e[0]=a,e[1]=l,e[2]=d,e[3]=o,e[4]=c,e[5]=p,e):(e[0]=a,e[1]=l,e[2]=o,e[3]=c,e)}function y(e,t,r,n,s,i){const a=r?3:2,o=n&&i,l=r&&s
if(!t.length||!t[0].length)return null
let h,d,p,b,[y,f]=t[0],[m,g]=t[0]
for(let e=0;e<t.length;e++){const r=t[e],[n,s]=r
if(y=c(y,n),f=c(f,s),m=u(m,n),g=u(g,s),l&&r.length>2){const e=r[2]
h=c(h,e),d=u(d,e)}if(o&&r.length>a){const e=r[a]
p=c(h,e),b=u(d,e)}}return s?(h=h||0,d=d||0,i?(p=p||0,b=b||0,e[0]=y,e[1]=f,e[2]=h,e[3]=p,e[4]=m,e[5]=g,e[6]=d,e[7]=b,e):(e[0]=y,e[1]=f,e[2]=h,e[3]=m,e[4]=g,e[5]=d,e)):i?(p=p||0,b=b||0,e[0]=y,e[1]=f,e[2]=p,e[3]=m,e[4]=g,e[5]=b,e):(e[0]=y,e[1]=f,e[2]=m,e[3]=g,e)}},1082:function(e,t,r){"use strict"
function n(e){return(t,r)=>{t[r]=e}}r.d(t,"a",(function(){return n}))},1087:function(e,t,r){"use strict"
r.d(t,"a",(function(){return s}))
var n=r(1165)
class s extends n.a{notify(){const e=this._observers
if(e&&e.length>0){const t=e.slice()
for(const e of t)e.onInvalidated(),e.onCommitted()}}}},1090:function(e,t,r){"use strict"
function n(e){}function s(e){return()=>e}r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return s})),r(235)},1105:function(e,t,r){"use strict"
function n(e,t,r=!1){let{hasM:n,hasZ:s}=e
Array.isArray(t)?4!==t.length||n||s?3===t.length&&r&&!n?(s=!0,n=!1):3===t.length&&n&&s&&(n=!1,s=!1):(n=!0,s=!0):(s=!s&&t.hasZ&&(!n||t.hasM),n=!n&&t.hasM&&(!s||t.hasZ)),e.hasZ=s,e.hasM=n}r.d(t,"a",(function(){return n}))},1114:function(e,t,r){"use strict"
var n
r.d(t,"a",(function(){return n})),function(e){e[e.ADD=1]="ADD",e[e.REMOVE=2]="REMOVE",e[e.MOVE=4]="MOVE"}(n||(n={}))},1119:function(e,t,r){"use strict"
r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return i}))
var n=r(971)
function s(e){const t=Object(n.e)(100*(1-e))
return Math.max(0,Math.min(t,100))}function i(e){const t=1-e/100
return Math.max(0,Math.min(t,1))}},1142:function(e,t,r){"use strict"
r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return a})),r.d(t,"e",(function(){return l}))
var n=r(1066)
function s(e){return e?e.hasZ?[e.xmax-e.xmin/2,e.ymax-e.ymin/2,e.zmax-e.zmin/2]:[e.xmax-e.xmin/2,e.ymax-e.ymin/2]:null}function i(e){var t
return e?a(e.rings,null!=(t=e.hasZ)&&t):null}function a(e,t){if(!e||!e.length)return null
const r=[],s=[],i=t?[1/0,-1/0,1/0,-1/0,1/0,-1/0]:[1/0,-1/0,1/0,-1/0]
for(let r=0,n=e.length;r<n;r++){const n=o(e[r],t,i)
n&&s.push(n)}if(s.sort((e,r)=>{let n=e[2]-r[2]
return 0===n&&t&&(n=e[4]-r[4]),n}),s.length&&(r[0]=s[0][0],r[1]=s[0][1],t&&(r[2]=s[0][3]),(r[0]<i[0]||r[0]>i[1]||r[1]<i[2]||r[1]>i[3]||t&&(r[2]<i[4]||r[2]>i[5]))&&(r.length=0)),!r.length){const s=e[0]&&e[0].length?function(e,t){const r=t?[0,0,0]:[0,0],s=t?[0,0,0]:[0,0]
let i=0,a=0,o=0,l=0
for(let c=0,u=e.length;c<u-1;c++){const u=e[c],h=e[c+1]
if(u&&h){r[0]=u[0],r[1]=u[1],s[0]=h[0],s[1]=h[1],t&&u.length>2&&h.length>2&&(r[2]=u[2],s[2]=h[2])
const e=Object(n.e)(r,s)
if(e){i+=e
const r=Object(n.f)(u,h)
a+=e*r[0],o+=e*r[1],t&&r.length>2&&(l+=e*r[2])}}}return i>0?t?[a/i,o/i,l/i]:[a/i,o/i]:e.length?e[0]:null}(e[0],t):null
if(!s)return null
r[0]=s[0],r[1]=s[1],t&&s.length>2&&(r[2]=s[2])}return r}function o(e,t,r){let n=0,s=0,i=0,a=0,o=0
const l=e.length?e[0][0]:0,c=e.length?e[0][1]:0,u=e.length&&t?e[0][2]:0
for(let h=0;h<e.length;h++){const d=e[h],p=e[(h+1)%e.length],[b,y,f]=d,m=b-l,g=y-c,[v,O,j]=p,_=v-l,w=O-c,S=m*w-_*g
if(a+=S,n+=(m+_)*S,s+=(g+w)*S,t&&d.length>2&&p.length>2){const e=f-u,t=j-u,r=m*t-_*e
i+=(e+t)*r,o+=r}b<r[0]&&(r[0]=b),b>r[1]&&(r[1]=b),y<r[2]&&(r[2]=y),y>r[3]&&(r[3]=y),t&&(f<r[4]&&(r[4]=f),f>r[5]&&(r[5]=f))}if(a>0&&(a*=-1),o>0&&(o*=-1),!a)return null
a*=.5,o*=.5
const h=[n/(6*a)+l,s/(6*a)+c,a]
return t&&(r[4]===r[5]||0===o?(h[3]=(r[4]+r[5])/2,h[4]=0):(h[3]=i/(6*o)+u,h[4]=o)),h}function l(e){if(!e||!e.rings)return null
const{rings:t}=e
let r=0
for(let e=0;e<t.length;e++)r+=Object(n.i)(t[e])
if(r<1e-6)return a(t,!1)
const s=[0,0],i=t[0][0]
for(let e=0;e<t.length;e++)c(s,i,t[e])
return s[0]*=1/r,s[1]*=1/r,s[0]+=i[0],s[1]+=i[1],s}function c(e,t,r){if(!e||!r||r.length<3)return null
const s=r[0],i=[0,0],a=[r[1][0]-s[0],r[1][1]-s[1]]
let o
for(let t=2;t<r.length;t++)i[0]=r[t][0]-s[0],i[1]=r[t][1]-s[1],o=1/3*.5*(i[0]*a[1]-i[1]*a[0]),e[0]+=o*(a[0]+i[0]),e[1]+=o*(a[1]+i[1]),a[0]=i[0],a[1]=i[1]
const l=Object(n.i)(r),c=[s[0],s[1]]
return c[0]-=t[0],c[1]-=t[1],c[0]*=l,c[1]*=l,e[0]+=c[0],e[1]+=c[1],e}},1146:function(e,t,r){"use strict"
r.d(t,"a",(function(){return i}))
var n=r(374)
const s=["elevation3d.arcgis.com","js.arcgis.com","jsdev.arcgis.com","jsqa.arcgis.com","static.arcgis.com"]
function i(e){const t=Object(n.p)(e,!0)
return!!t&&t.endsWith(".arcgis.com")&&!s.includes(t)&&!e.endsWith("/sharing/rest/generateToken")}},1154:function(e,t,r){"use strict"
r.r(t),r.d(t,"default",(function(){return E}))
var n=r(968),s=r(1019),i=r(446),a=r(972),o=r(234),l=r(1046),c=r(23),u=r(374),h=r(970),d=r(971),p=r(977),b=r(969),y=r(770),f=r(1028),m=r(975),g=r(233),v=r(987)
r(445)
let O=class extends m.a{constructor(e){super(e),this.portalItem=null}normalizeCtorArgs(e){return e&&e.portalItem&&e.path?{...e,path:this._normalizePath(e.path,e.portalItem)}:e}set path(e){Object(c.l)(e)&&Object(u.x)(e)?g.a.getLogger(this.declaredClass).error("portalitemresource:invalid-path","A portal item resource path must be relative"):this._set("path",e)}_castPath(e){return this._normalizePath(e,this.portalItem)}get url(){return this.portalItem&&this.path?`${this.portalItem.itemUrl}/resources/${this.path}`:null}get itemRelativeUrl(){return this.portalItem&&this.path?"./resources/"+this.path:null}fetch(e="json",t){const r=this.url
if(Object(c.k)(r))throw new i.a("portal-item-resource:fetch","Portal item resource does not refer to a valid item or path")
return this.portalItem.portal.request(r,{responseType:e,query:{token:this.portalItem.apiKey},signal:Object(c.j)(t,"signal")})}async update(e,t){return(await r.e(34).then(r.bind(null,1935))).addOrUpdateResource(this,"update",e,t)}hasPath(){return Object(c.l)(this.path)}_normalizePath(e,t){var r
return Object(c.k)(e)?e:(e=e.replace(/^\/+/,""),Object(c.l)(t)&&Object(u.x)(e)&&(e=Object(u.H)(e,t.itemUrl)),null==(r=e)?void 0:r.replace(/^\/+/,"").replace(/^(\.\/)?resources\//,""))}}
Object(n.a)([Object(h.b)()],O.prototype,"portalItem",void 0),Object(n.a)([Object(h.b)({type:String,value:null})],O.prototype,"path",null),Object(n.a)([Object(v.a)("path")],O.prototype,"_castPath",null),Object(n.a)([Object(h.b)({type:String,readOnly:!0})],O.prototype,"url",null),Object(n.a)([Object(h.b)({type:String,readOnly:!0})],O.prototype,"itemRelativeUrl",null),O=Object(n.a)([Object(b.a)("esri.portal.PortalItemResource")],O)
const j=O
let _=class extends m.a{constructor(e){super(e),this.created=null,this.rating=null}}
Object(n.a)([Object(h.b)()],_.prototype,"created",void 0),Object(n.a)([Object(h.b)()],_.prototype,"rating",void 0),_=Object(n.a)([Object(b.a)("esri.portal.PortalRating")],_)
const w=_
var S
const L=new Set(["Map Service","Feature Service","Feature Collection","Scene Service","Image Service","Stream Service","Vector Tile Service","GeoJson","CSV","KML","WFS","WMTS","WMS","Feed"]),M=new Set(["KML","GeoJson","CSV"])
let T=S=class extends(Object(a.b)(l.a)){static from(e){return Object(d.d)(S,e)}constructor(e){super(e),this.access=null,this.accessInformation=null,this.apiKey=null,this.applicationProxies=null,this.avgRating=null,this.categories=null,this.created=null,this.culture=null,this.description=null,this.extent=null,this.groupCategories=null,this.id=null,this.isOrgItem=!1,this.itemControl=null,this.licenseInfo=null,this.modified=null,this.name=null,this.numComments=null,this.numRatings=null,this.numViews=null,this.owner=null,this.ownerFolder=null,this.portal=null,this.screenshots=null,this.size=null,this.snippet=null,this.sourceJSON=null,this.sourceUrl=null,this.spatialReference=null,this.tags=null,this.title=null,this.type=null,this.typeKeywords=null,this.url=null}destroy(){this.portal=null}get displayName(){const e=this.type,t=this.typeKeywords||[]
let r=e
return"Feature Service"===e||"Feature Collection"===e?r=t.includes("Table")?"Table":t.includes("Route Layer")?"Route Layer":t.includes("Markup")?"Markup":"Feature Layer":"Image Service"===e?r=t.includes("Elevation 3D Layer")?"Elevation Layer":t.includes("Tiled Imagery")?"Tiled Imagery Layer":"Imagery Layer":"Scene Service"===e?r="Scene Layer":"Video Service"===e?r="Video Layer":"Scene Package"===e?r="Scene Layer Package":"Stream Service"===e?r="Feature Layer":"Geoprocessing Service"===e&&this.portal&&this.portal.isPortal?r=t.includes("Web Tool")?"Tool":"Geoprocessing Service":"Geocoding Service"===e?r="Locator":"Geoenrichment Service"===e?r="GeoEnrichment Service":"Microsoft Powerpoint"===e?r="Microsoft PowerPoint":"GeoJson"===e?r="GeoJSON":"Globe Service"===e?r="Globe Layer":"Vector Tile Service"===e?r="Tile Layer":"netCDF"===e?r="NetCDF":"Map Service"===e?r=t.includes("Spatiotemporal")||!t.includes("Hosted Service")&&!t.includes("Tiled")||t.includes("Relational")?"Map Image Layer":"Tile Layer":e&&e.toLowerCase().includes("add in")?r=e.replace(/(add in)/gi,"Add-In"):"datastore catalog service"===e?r="Big Data File Share":"Compact Tile Package"===e?r="Tile Package (tpkx)":"OGCFeatureServer"===e?r="OGC Feature Layer":"web mapping application"===e&&t.includes("configurableApp")?r="Instant App":"Insights Page"===e&&(r="Insights Report"),r}readExtent(e){return e&&e.length?new y.default(e[0][0],e[0][1],e[1][0],e[1][1]):null}get iconUrl(){const e=this.type&&this.type.toLowerCase()||"",t=this.typeKeywords||[]
let r,n=!1,i=!1,a=!1,o=!1,l=!1,c=!1
return e.indexOf("service")>0||"feature collection"===e||"kml"===e||"wms"===e||"wmts"===e||"wfs"===e?(n=t.includes("Hosted Service"),"feature service"===e||"feature collection"===e||"kml"===e||"wfs"===e?(i=t.includes("Table"),a=t.includes("Route Layer"),o=t.includes("Markup"),l=t.includes("Spatiotemporal"),c=t.includes("UtilityNetwork"),r=l&&i?"spatiotemporaltable":i?"table":a?"routelayer":o?"markup":l?"spatiotemporal":n?"featureshosted":c?"utilitynetwork":"features"):r="map service"===e||"wms"===e||"wmts"===e?n||t.includes("Tiled")||"wmts"===e?"maptiles":"mapimages":"scene service"===e?t.includes("Line")?"sceneweblayerline":t.includes("3DObject")?"sceneweblayermultipatch":t.includes("Point")?"sceneweblayerpoint":t.includes("IntegratedMesh")?"sceneweblayermesh":t.includes("PointCloud")?"sceneweblayerpointcloud":t.includes("Polygon")?"sceneweblayerpolygon":t.includes("Building")?"sceneweblayerbuilding":t.includes("Voxel")?"sceneweblayervoxel":"sceneweblayer":"image service"===e?t.includes("Elevation 3D Layer")?"elevationlayer":t.includes("Tiled Imagery")?"tiledimagerylayer":"imagery":"stream service"===e?"streamlayer":"video service"===e?"mediaservice":"vector tile service"===e?"vectortile":"datastore catalog service"===e?"datastorecollection":"geocoding service"===e?"geocodeservice":"geoprocessing service"===e?t.includes("Web Tool")&&this.portal&&this.portal.isPortal?"tool":"layers":"geodata service"===e?"geodataservice":"layers"):r="web map"===e||"cityengine web scene"===e?"maps":"web scene"===e?t.includes("ViewingMode-Local")?"webscenelocal":"websceneglobal":"web mapping application"===e&&t.includes("configurableApp")?"instantapps":"web mapping application"===e||"mobile application"===e||"application"===e||"operation view"===e||"desktop application"===e?"apps":"map document"===e||"map package"===e||"published map"===e||"scene document"===e||"globe document"===e||"basemap package"===e||"mobile basemap package"===e||"mobile map package"===e||"project package"===e||"project template"===e||"pro map"===e||"layout"===e||"layer"===e&&t.includes("ArcGIS Pro")||"explorer map"===e&&t.indexOf("Explorer Document")?"mapsgray":"service definition"===e||"csv"===e||"shapefile"===e||"cad drawing"===e||"geojson"===e||"360 vr experience"===e||"netcdf"===e||"administrative report"===e?"datafiles":"explorer add in"===e||"desktop add in"===e||"windows viewer add in"===e||"windows viewer configuration"===e?"appsgray":"arcgis pro add in"===e||"arcgis pro configuration"===e?"addindesktop":"rule package"===e||"file geodatabase"===e||"sqlite geodatabase"===e||"csv collection"===e||"kml collection"===e||"windows mobile package"===e||"map template"===e||"desktop application template"===e||"gml"===e||"arcpad package"===e||"code sample"===e||"form"===e||"document link"===e||"earth configuration"===e||"operations dashboard add in"===e||"rules package"===e||"image"===e||"workflow manager package"===e||"explorer map"===e&&t.includes("Explorer Mapping Application")||t.includes("Document")?"datafilesgray":"network analysis service"===e||"geoprocessing service"===e||"geodata service"===e||"geometry service"===e||"geoprocessing package"===e||"locator package"===e||"geoprocessing sample"===e||"workflow manager service"===e?"toolsgray":"layer"===e||"layer package"===e||"explorer layer"===e?"layersgray":"scene package"===e?"scenepackage":"mobile scene package"===e?"mobilescenepackage":"tile package"===e||"compact tile package"===e?"tilepackage":"task file"===e?"taskfile":"report template"===e?"report-template":"statistical data collection"===e?"statisticaldatacollection":"insights workbook"===e?"workbook":"insights model"===e?"insightsmodel":"insights page"===e?"insightspage":"insights theme"===e?"insightstheme":"hub initiative"===e?"hubinitiative":"hubpage"===e?"hubpage":"hub event"===e?"hubevent":"hub site application"===e?"hubsite":"hub project"===e?"hubproject":"relational database connection"===e?"relationaldatabaseconnection":"big data file share"===e?"datastorecollection":"image collection"===e?"imagecollection":"style"===e?"style":"desktop style"===e?"desktopstyle":"dashboard"===e?"dashboard":"raster function template"===e?"rasterprocessingtemplate":"vector tile package"===e?"vectortilepackage":"ortho mapping project"===e?"orthomappingproject":"ortho mapping template"===e?"orthomappingtemplate":"solution"===e?"solutions":"geopackage"===e?"geopackage":"deep learning package"===e?"deeplearningpackage":"real time analytic"===e?"realtimeanalytics":"big data analytic"===e?"bigdataanalytics":"feed"===e?"feed":"excalibur imagery project"===e?"excaliburimageryproject":"notebook"===e?"notebook":"storymap"===e?"storymap":"survey123 add in"===e?"survey123addin":"mission"===e?"mission":"mission report"===e?"missionreport":"quickcapture project"===e?"quickcaptureproject":"pro report"===e?"proreport":"pro report template"===e?"proreporttemplate":"urban model"===e?"urbanmodel":"web experience"===e?"experiencebuilder":"web experience template"===e?"webexperiencetemplate":"experience builder widget"===e?"experiencebuilderwidget":"experience builder widget package"===e?"experiencebuilderwidgetpackage":"workflow"===e?"workflow":"insights script"===e?"insightsscript":"kernel gateway connection"===e?"kernelgatewayconnection":"hub initiative template"===e?"hubinitiativetemplate":"storymap theme"===e?"storymaptheme":"knowledge graph"===e?"knowledgegraph":"native application"===e?"nativeapp":"native application installer"===e?"nativeappinstaller":"link chart"===e?"linkchart":"investigation"===e?"investigation":"ogcfeatureserver"===e?"features":"pro project"===e?"proproject":"insights workbook package"===e?"insightsworkbookpackage":"apache parquet"===e?"apacheparquet":"notebook code snippets"===e||"notebook code snippet library"===e?"notebookcodesnippets":"suitability model"===e?"suitabilitymodel":"esri classifier definition"===e?"classifierdefinition":"esri classification schema"===e?"classificationschema":"insights data engineering workbook"===e?"dataengineeringworkbook":"insights data engineering model"===e?"dataengineeringmodel":"deep learning studio project"===e?"deeplearningproject":"discussion"===e?"discussion":"allsource project"===e?"allsourceproject":"api key"===e?"apikey":"maps",r?Object(s.b)("esri/images/portal/"+r+"16.png"):null}get isLayer(){return null!=this.type&&L.has(this.type)}get itemPageUrl(){var e
const t=null==(e=this.portal)?void 0:e.itemPageUrl
return t&&this.id?`${t}?id=${this.id}`:null}get itemUrl(){var e
const t=null==(e=this.portal)?void 0:e.restUrl
return t&&this.id?`${t}/content/items/${this.id}`:null}get thumbnailUrl(){var e,t
const r=this.itemUrl,n=this.thumbnail
return r&&n&&null!=(e=null==(t=this.portal)?void 0:t.normalizeUrl(`${r}/info/${n}?f=json`))?e:null}get userItemUrl(){const e=this.get("portal.restUrl")
if(!e)return null
const t=this.owner||this.get("portal.user.username")
return t?`${e}/content/users/${this.ownerFolder?`${t}/${this.ownerFolder}`:t}/items/${this.id}`:null}load(e){var t
const r=null!=(t=this.portal)?t:this.portal=f.a.getDefault(),n=r.load(e).then(()=>this.sourceJSON?this.sourceJSON:this.id&&this.itemUrl?r.request(this.itemUrl,{signal:Object(c.l)(e)?e.signal:null,query:{token:this.apiKey}}):{}).then(e=>{this.sourceJSON=e,this.read(e)})
return this.addResolvingPromise(n),Promise.resolve(this)}async addRating(e){const t={method:"post",query:{}}
return e instanceof w&&(e=e.rating),null==e||isNaN(e)||"number"!=typeof e||(t.query.rating=e),this.portal?(await this.portal.request(this.itemUrl+"/addRating",t),new w({rating:e,created:new Date})):null}clone(){const e={access:this.access,accessInformation:this.accessInformation,applicationProxies:Object(o.a)(this.applicationProxies),avgRating:this.avgRating,categories:Object(o.a)(this.categories),created:Object(o.a)(this.created),culture:this.culture,description:this.description,extent:Object(o.a)(this.extent),groupCategories:Object(o.a)(this.groupCategories),id:this.id,itemControl:this.itemControl,licenseInfo:this.licenseInfo,modified:Object(o.a)(this.modified),name:this.name,numComments:this.numComments,numRatings:this.numRatings,numViews:this.numViews,owner:this.owner,ownerFolder:this.ownerFolder,portal:this.portal,screenshots:Object(o.a)(this.screenshots),size:this.size,snippet:this.snippet,sourceUrl:this.sourceUrl,spatialReference:this.spatialReference,tags:Object(o.a)(this.tags),thumbnail:this.thumbnail,title:this.title,type:this.type,typeKeywords:Object(o.a)(this.typeKeywords),url:this.url}
this.loaded&&(e.loadStatus="loaded")
const t=new S({sourceJSON:this.sourceJSON}).set(e)
return t._set("isOrgItem",this.isOrgItem),t}createPostQuery(){const e=this.toJSON()
for(const t of["tags","typeKeywords","categories"])e[t]&&(e[t]=e[t].join(", "))
const{extent:t}=e
return t&&(e.extent=JSON.stringify(t)),e}async deleteRating(){await Object(c.w)(this.portal).request(this.itemUrl+"/deleteRating",{method:"post"})}fetchData(e="json",t){return Object(c.w)(this.portal).request(this.itemUrl+"/data",{responseType:e,...t,query:{token:this.apiKey}})}async fetchRating(e){const t=await Object(c.w)(this.portal).request(this.itemUrl+"/rating",{query:{token:this.apiKey},...e})
return null!=t.rating?(t.created=new Date(t.created),new w(t)):null}fetchRelatedItems(e,t){return Object(c.w)(this.portal).requestToTypedArray(this.itemUrl+"/relatedItems",{query:{...e,token:this.apiKey},...t},S)}getThumbnailUrl(e){let t=this.thumbnailUrl
return t&&e&&(t+="&w="+e),t}reload(){var e
return Object(c.w)(this.portal).request(null!=(e=this.itemUrl)?e:"",{cacheBust:!0,query:{token:this.apiKey}}).then(e=>(this.sourceJSON=e,this.read(e),this))}update(e){return this.id?this.load().then(()=>Object(c.w)(this.portal).signIn()).then(()=>{const t=e&&e.data,r={method:"post"}
r.query=this.createPostQuery()
for(const e in r.query)null===r.query[e]&&(r.query[e]="")
return r.query.clearEmptyFields=!0,null!=t&&("string"==typeof t?r.query.text=t:"object"==typeof t&&(r.query.text=JSON.stringify(t))),this.portal.request(this.userItemUrl+"/update",r).then(()=>this.reload())}):Promise.reject(new i.a("portal:item-does-not-exist","The item does not exist yet and cannot be updated"))}async copy(e){if(!this.id)throw new i.a("portal:item-does-not-exist","The item does not exist yet")
await this.load()
const{portal:t,itemUrl:r}=this
await Object(c.w)(t).signIn()
const{copyResources:n,folder:s,tags:a,title:o}=e||{},l={method:"post",query:{copyPrivateResources:"all"===n,folder:"string"==typeof s?s:null==s?void 0:s.id,includeResources:!!n,tags:null==a?void 0:a.join(","),title:o}},{itemId:u}=await t.request(r+"/copy",l)
return new S({id:u,portal:t})}updateThumbnail(e){return this.id?this.load().then(()=>this.portal.signIn()).then(()=>{const t=e.thumbnail,r=e.filename,n={method:"post"}
if("string"==typeof t)Object(u.z)(t)?n.query={data:t}:n.query={url:Object(u.F)(t)},Object(c.l)(r)&&(n.query.filename=r)
else{const e=new FormData
Object(c.l)(r)?e.append("file",t,r):e.append("file",t),n.body=e}return this.portal.request(this.userItemUrl+"/updateThumbnail",n).then(()=>this.reload())}):Promise.reject(new i.a("portal:item-does-not-exist","The item does not exist yet and cannot be updated"))}async fetchResources(e={},t){return(await r.e(34).then(r.bind(null,1935))).fetchResources(this,e,t)}async addResource(e,t,n){const s=await r.e(34).then(r.bind(null,1935))
return e.portalItem=this,s.addOrUpdateResource(e,"add",t,n)}async removeResource(e,t){const n=await r.e(34).then(r.bind(null,1935))
if(e.portalItem&&e.portalItem.itemUrl!==this.itemUrl)throw new i.a("removeresource:portal-item-mismatch","The portal item associated with the provided resource does not match the item")
return n.removeResource(this,e,t)}async removeAllResources(e){return(await r.e(34).then(r.bind(null,1935))).removeAllResources(this,e)}resourceFromPath(e){return new j({portalItem:this,path:e})}toJSON(){const e=this.extent,t={accessInformation:this.accessInformation,categories:Object(o.a)(this.categories),created:this.created&&this.created.getTime(),description:this.description,extent:e&&[[e.xmin,e.ymin],[e.xmax,e.ymax]],id:this.id,isOrgItem:this.isOrgItem,licenseInfo:this.licenseInfo,modified:this.modified&&this.modified.getTime(),name:this.name,owner:this.owner,ownerFolder:this.ownerFolder,snippet:this.snippet,sourceUrl:this.sourceUrl,spatialReference:this.spatialReference,tags:Object(o.a)(this.tags),thumbnail:this.thumbnail,title:this.title,type:this.type,typeKeywords:Object(o.a)(this.typeKeywords),url:this.url}
return Object(o.d)(t)}static fromJSON(e){if(!e)return null
if(e.declaredClass)throw new Error("JSON object is already hydrated")
return new S({sourceJSON:e})}_getPostQuery(){const e=this.toJSON()
for(const t in e)"tags"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"typeKeywords"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"extent"===t&&e[t]&&(e[t]=JSON.stringify(e[t]))
return e}}
Object(n.a)([Object(h.b)({type:["private","shared","org","public"]})],T.prototype,"access",void 0),Object(n.a)([Object(h.b)()],T.prototype,"accessInformation",void 0),Object(n.a)([Object(h.b)({type:String})],T.prototype,"apiKey",void 0),Object(n.a)([Object(h.b)({json:{read:{source:"appProxies"}}})],T.prototype,"applicationProxies",void 0),Object(n.a)([Object(h.b)()],T.prototype,"avgRating",void 0),Object(n.a)([Object(h.b)()],T.prototype,"categories",void 0),Object(n.a)([Object(h.b)({type:Date})],T.prototype,"created",void 0),Object(n.a)([Object(h.b)()],T.prototype,"culture",void 0),Object(n.a)([Object(h.b)()],T.prototype,"description",void 0),Object(n.a)([Object(h.b)({readOnly:!0})],T.prototype,"displayName",null),Object(n.a)([Object(h.b)({type:y.default})],T.prototype,"extent",void 0),Object(n.a)([Object(p.a)("extent")],T.prototype,"readExtent",null),Object(n.a)([Object(h.b)()],T.prototype,"groupCategories",void 0),Object(n.a)([Object(h.b)({readOnly:!0})],T.prototype,"iconUrl",null),Object(n.a)([Object(h.b)()],T.prototype,"id",void 0),Object(n.a)([Object(h.b)({readOnly:!0})],T.prototype,"isLayer",null),Object(n.a)([Object(h.b)({type:Boolean,readOnly:!0})],T.prototype,"isOrgItem",void 0),Object(n.a)([Object(h.b)()],T.prototype,"itemControl",void 0),Object(n.a)([Object(h.b)({readOnly:!0})],T.prototype,"itemPageUrl",null),Object(n.a)([Object(h.b)({readOnly:!0})],T.prototype,"itemUrl",null),Object(n.a)([Object(h.b)()],T.prototype,"licenseInfo",void 0),Object(n.a)([Object(h.b)({type:Date})],T.prototype,"modified",void 0),Object(n.a)([Object(h.b)()],T.prototype,"name",void 0),Object(n.a)([Object(h.b)()],T.prototype,"numComments",void 0),Object(n.a)([Object(h.b)()],T.prototype,"numRatings",void 0),Object(n.a)([Object(h.b)()],T.prototype,"numViews",void 0),Object(n.a)([Object(h.b)()],T.prototype,"owner",void 0),Object(n.a)([Object(h.b)()],T.prototype,"ownerFolder",void 0),Object(n.a)([Object(h.b)({type:f.a})],T.prototype,"portal",void 0),Object(n.a)([Object(h.b)()],T.prototype,"screenshots",void 0),Object(n.a)([Object(h.b)()],T.prototype,"size",void 0),Object(n.a)([Object(h.b)()],T.prototype,"snippet",void 0),Object(n.a)([Object(h.b)()],T.prototype,"sourceJSON",void 0),Object(n.a)([Object(h.b)({type:String})],T.prototype,"sourceUrl",void 0),Object(n.a)([Object(h.b)({type:String})],T.prototype,"spatialReference",void 0),Object(n.a)([Object(h.b)()],T.prototype,"tags",void 0),Object(n.a)([Object(h.b)()],T.prototype,"thumbnail",void 0),Object(n.a)([Object(h.b)({readOnly:!0})],T.prototype,"thumbnailUrl",null),Object(n.a)([Object(h.b)()],T.prototype,"title",void 0),Object(n.a)([Object(h.b)()],T.prototype,"type",void 0),Object(n.a)([Object(h.b)()],T.prototype,"typeKeywords",void 0),Object(n.a)([Object(h.b)({type:String,json:{read(e,t){if(M.has(t.type)){var r
const t=null==(r=this.portal)?void 0:r.restUrl
e||(e=t&&this.id?`${t}/content/items/${this.id}/data`:null)}return e}}})],T.prototype,"url",void 0),Object(n.a)([Object(h.b)({readOnly:!0})],T.prototype,"userItemUrl",null),T=S=Object(n.a)([Object(b.a)("esri.portal.PortalItem")],T)
const E=T},1157:function(e,t,r){"use strict"
r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h})),r.d(t,"c",(function(){return d}))
var n=r(1079)
const s=[]
function i(e,t,r,n){return{xmin:e,ymin:t,xmax:r,ymax:n}}function a(e,t,r,n,s,i){return{xmin:e,ymin:t,zmin:r,xmax:n,ymax:s,zmax:i}}function o(e,t,r,n,s,i){return{xmin:e,ymin:t,mmin:r,xmax:n,ymax:s,mmax:i}}function l(e,t,r,n,s,i,a,o){return{xmin:e,ymin:t,zmin:r,mmin:n,xmax:s,ymax:i,zmax:a,mmax:o}}function c(e,t=!1,r=!1){return t?r?l(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]):a(e[0],e[1],e[2],e[3],e[4],e[5]):r?o(e[0],e[1],e[2],e[3],e[4],e[5]):i(e[0],e[1],e[2],e[3])}function u(e){return e?function(e){return void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax}(e)?e:function(e){return void 0!==e.x&&void 0!==e.y}(e)?function(e){const{x:t,y:r,z:n,m:s}=e,c=null!=s
return null!=n?c?l(t,r,n,s,t,r,n,s):a(t,r,n,t,r,n):c?o(t,r,s,t,r,s):i(t,r,t,r)}(e):function(e){return void 0!==e.rings}(e)?h(e):function(e){return void 0!==e.paths}(e)?d(e):function(e){return void 0!==e.points}(e)?function(e){const{hasZ:t,hasM:r,points:i}=e
return c(Object(n.c)(s,i,null!=t&&t,null!=r&&r),t,r)}(e):null:null}function h(e){const{hasZ:t,hasM:r,rings:i}=e,a=Object(n.d)(s,i,null!=t&&t,null!=r&&r)
return a?c(a,t,r):null}function d(e){const{hasZ:t,hasM:r,paths:i}=e,a=Object(n.d)(s,i,null!=t&&t,null!=r&&r)
return a?c(a,t,r):null}},1162:function(e,t,r){"use strict"
r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return l})),r.d(t,"e",(function(){return s}))
const n={transparent:[0,0,0,0],black:[0,0,0,1],silver:[192,192,192,1],gray:[128,128,128,1],white:[255,255,255,1],maroon:[128,0,0,1],red:[255,0,0,1],purple:[128,0,128,1],fuchsia:[255,0,255,1],green:[0,128,0,1],lime:[0,255,0,1],olive:[128,128,0,1],yellow:[255,255,0,1],navy:[0,0,128,1],blue:[0,0,255,1],teal:[0,128,128,1],aqua:[0,255,255,1],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],blanchedalmond:[255,235,205,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],oldlace:[253,245,230,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],rebeccapurple:[102,51,153,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],whitesmoke:[245,245,245,1],yellowgreen:[154,205,50,1]}
function s(e){return n[e]||n[e.toLowerCase()]}function i(e){var t
return null!=(t=n[e])?t:n[e.toLowerCase()]}function a(e){return[...i(e)]}function o(e,t,r){r<0&&++r,r>1&&--r
const n=6*r
return n<1?e+(t-e)*n:2*r<1?t:3*r<2?e+(t-e)*(2/3-r)*6:e}function l(e,t,r,n=1){const s=(e%360+360)%360/360,i=r<=.5?r*(t+1):r+t-r*t,a=2*r-i
return[Math.round(255*o(a,i,s+1/3)),Math.round(255*o(a,i,s)),Math.round(255*o(a,i,s-1/3)),n]}function c(e){const t=e.length>5,r=t?8:4,n=(1<<r)-1,s=t?1:17,i=t?9===e.length:5===e.length
let a=Number("0x"+e.substr(1))
if(isNaN(a))return null
const o=[0,0,0,1]
let l
return i&&(l=a&n,a>>=r,o[3]=s*l/255),l=a&n,a>>=r,o[2]=s*l,l=a&n,a>>=r,o[1]=s*l,l=a&n,a>>=r,o[0]=s*l,o}},1179:function(e,t,r){"use strict"
r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return s}))
var n=r(993)
function s(e,t,r=n.a){return t||(t=new r),t===e||(t.removeAll(),(s=e)&&(Array.isArray(s)||"items"in s&&Array.isArray(s.items))?t.addMany(e):e&&t.add(e)),t
var s}function i(e){return e}},1229:function(e,t,r){"use strict"
r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return u})),r.d(t,"d",(function(){return d}))
var n=r(110),s=r(235),i=r(23),a=r(973),o=r(374)
function l(e,t,r=!1,n){return new Promise((o,l)=>{if(Object(a.k)(n))return void l(c())
let u=()=>{p(),l(new Error("Unable to load "+t))},h=()=>{const t=e
p(),o(t)},d=()=>{if(!e)return
const t=e
p(),t.src="",l(c())}
const p=()=>{Object(s.a)("esri-image-decode")||(e.removeEventListener("error",u),e.removeEventListener("load",h)),u=null,h=null,e=null,Object(i.l)(n)&&n.removeEventListener("abort",d),d=null,r&&URL.revokeObjectURL(t)}
Object(i.l)(n)&&n.addEventListener("abort",d),Object(s.a)("esri-image-decode")?e.decode().then(h,u):(e.addEventListener("error",u),e.addEventListener("load",h))})}function c(){try{return new DOMException("Aborted","AbortError")}catch{const e=new Error
return e.name="AbortError",e}}function u(e){n.default.request.crossOriginNoCorsDomains||(n.default.request.crossOriginNoCorsDomains={})
const t=n.default.request.crossOriginNoCorsDomains
for(let n of e){var r,s,i
n=n.toLowerCase(),/^https?:\/\//.test(n)?t[null!=(r=Object(o.p)(n))?r:""]=0:(t[null!=(s=Object(o.p)("http://"+n))?s:""]=0,t[null!=(i=Object(o.p)("https://"+n))?i:""]=0)}}function h(e){const t=n.default.request.crossOriginNoCorsDomains
if(t){let r=Object(o.p)(e)
if(r)return r=r.toLowerCase(),!Object(o.v)(r,Object(o.m)())&&t[r]<Date.now()-36e5}return!1}async function d(e){var t
const r=n.default.request.crossOriginNoCorsDomains,s=Object(o.p)(e)
r&&s&&(r[s.toLowerCase()]=Date.now())
const i=Object(o.Q)(e)
e=i.path,"json"===(null==(t=i.query)?void 0:t.f)&&(e+="?f=json")
try{await fetch(e,{mode:"no-cors",credentials:"include"})}catch{}}},1243:function(e,t,r){"use strict"
r.d(t,"a",(function(){return l}))
var n=r(968),s=r(975),i=r(970),a=(r(971),r(445),r(969))
let o=class extends s.a{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1,this.TERRAIN_USE_LEGACY_SHADING=!1}}
Object(n.a)([Object(i.b)()],o.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),Object(n.a)([Object(i.b)()],o.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),Object(n.a)([Object(i.b)()],o.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),Object(n.a)([Object(i.b)()],o.prototype,"DECONFLICTOR_SHOW_GRID",void 0),Object(n.a)([Object(i.b)()],o.prototype,"LABELS_SHOW_BORDER",void 0),Object(n.a)([Object(i.b)()],o.prototype,"TEXT_SHOW_BASELINE",void 0),Object(n.a)([Object(i.b)()],o.prototype,"TEXT_SHOW_BORDER",void 0),Object(n.a)([Object(i.b)()],o.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),Object(n.a)([Object(i.b)()],o.prototype,"OVERLAY_SHOW_CENTER",void 0),Object(n.a)([Object(i.b)()],o.prototype,"SHOW_POI",void 0),Object(n.a)([Object(i.b)()],o.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),Object(n.a)([Object(i.b)()],o.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),Object(n.a)([Object(i.b)()],o.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),Object(n.a)([Object(i.b)()],o.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),Object(n.a)([Object(i.b)()],o.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),Object(n.a)([Object(i.b)()],o.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),Object(n.a)([Object(i.b)()],o.prototype,"I3S_TREE_SHOW_TILES",void 0),Object(n.a)([Object(i.b)()],o.prototype,"I3S_SHOW_MODIFICATIONS",void 0),Object(n.a)([Object(i.b)()],o.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),Object(n.a)([Object(i.b)()],o.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),Object(n.a)([Object(i.b)()],o.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),Object(n.a)([Object(i.b)()],o.prototype,"LINE_WIREFRAMES",void 0),Object(n.a)([Object(i.b)()],o.prototype,"TERRAIN_USE_LEGACY_SHADING",void 0),o=Object(n.a)([Object(a.a)("esri.views.3d.support.DebugFlags")],o)
const l=new o},1279:function(e,t,r){"use strict"
r.d(t,"a",(function(){return u}))
var n=r(968),s=r(993),i=r(23),a=(r(235),r(446),r(233),r(1076),r(1048)),o=r(970),l=(r(971),r(445),r(969))
let c=class extends s.a{constructor(e){super(e),this.getCollections=null}initialize(){this.own(Object(a.a)(()=>this._refresh()))}destroy(){this.getCollections=null}_refresh(){const e=Object(i.l)(this.getCollections)?this.getCollections():null
if(Object(i.k)(e))return void this.removeAll()
let t=0
for(const r of e)Object(i.l)(r)&&(t=this._processCollection(t,r))
this.splice(t,this.length)}_createNewInstance(e){return new s.a(e)}_processCollection(e,t){if(!t)return e
const r=this.itemFilterFunction?this.itemFilterFunction:e=>!!e
for(const n of t)if(n){if(r(n)){const t=this.indexOf(n,e)
t>=0?t!==e&&this.reorder(n,e):this.add(n,e),++e}if(this.getChildrenFunction){const t=this.getChildrenFunction(n)
if(Array.isArray(t))for(const r of t)e=this._processCollection(e,r)
else e=this._processCollection(e,t)}}return e}}
Object(n.a)([Object(o.b)()],c.prototype,"getCollections",void 0),Object(n.a)([Object(o.b)()],c.prototype,"getChildrenFunction",void 0),Object(n.a)([Object(o.b)()],c.prototype,"itemFilterFunction",void 0),c=Object(n.a)([Object(l.a)("esri.core.CollectionFlattener")],c)
const u=c},1329:function(e,t,r){"use strict"
r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return l}))
var n=r(1034),s=r(993),i=r(1046),a=r(23)
async function o(e,t){return await e.load(),l(e,t)}async function l(e,t){const r=[],o=(...e)=>{for(const t of e)Object(a.k)(t)||(Array.isArray(t)?o(...t):s.a.isCollection(t)?t.forEach(e=>o(e)):i.a.isLoadable(t)&&r.push(t))}
t(o)
let l=null
if(await Object(n.d)(r,async e=>{const t=await Object(n.e)(function(e){return"loadAll"in e&&"function"==typeof e.loadAll}(e)?e.loadAll():e.load())
!1!==t.ok||l||(l=t)}),l)throw l.error
return e}},1505:function(e,t,r){"use strict"
r.d(t,"a",(function(){return y})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return p})),r.d(t,"d",(function(){return b})),r.d(t,"e",(function(){return O})),r.d(t,"f",(function(){return f})),r.d(t,"g",(function(){return g})),r.d(t,"h",(function(){return v}))
var n=r(782),s=r(110),i=r(993),a=r(233),o=r(23),l=r(374),c=r(971),u=r(780)
const h=a.a.getLogger("esri.support.basemapUtils")
function d(){return{}}function p(e){for(const t in e){const r=e[t]
!1===(null==r?void 0:r.destroyed)&&r.destroy(),delete e[t]}}function b(e,t){var r
let i
if("string"==typeof e){if(!(e in u.esriBasemapDefinitions)){const t=Object.entries(u.esriBasemapDefinitions).filter(([e,t])=>s.default.apiKey&&!t.classic||!s.default.apiKey&&t.classic&&!t.deprecated).map(([e])=>`"${e}"`).join(", ")
return h.warn(`Unable to find basemap definition for: ${e}. Try one of these: ${t}`),null}t&&(i=t[e]),i||(i=n.default.fromId(e),t&&(t[e]=i))}else i=Object(c.m)(n.default,e)
return null!=(r=i)&&r.destroyed&&(h.warn("The provided basemap is already destroyed",{basemap:i}),i=null),i}function y(e,t=null){const r=b(e)
if(!r)return null
const s=new n.default({id:r.id,title:r.title,baseLayers:r.baseLayers.slice(),referenceLayers:r.referenceLayers.slice()})
return t&&(s.baseLayers=m(s.baseLayers,t.baseLayers),s.referenceLayers=m(s.referenceLayers,t.referenceLayers)),s.load().catch(()=>{}),s.portalItem=r.portalItem,s}function f(e){let t=null
const r=function(e){return e?!e.loaded&&e.resourceInfo?L(e.resourceInfo.data):{baseLayers:w(e.baseLayers),referenceLayers:w(e.referenceLayers)}:null}(e),n=!(null!=r&&r.baseLayers.length)
for(const e in u.esriBasemapDefinitions){const s=T(r,L(u.esriBasemapDefinitions[e]),{mustMatchReferences:n})
if("equal"===s){t=e
break}"base-layers-equal"===s&&(t=e)}return t}function m(e,t){const r=new i.a
return e.forEach(e=>{const n=t.find(t=>I(S(e),S(t)))||e
r.includes(n)?r.push(e):r.push(n)}),r}function g(e){return!(null==e||!e.baseLayers.concat(e.referenceLayers).some(v))}function v(e){if(_(e.url))return!0
if("vector-tile"===e.type)for(const r in e.sourceNameToSource){var t
if(_(null==(t=e.sourceNameToSource[r])?void 0:t.sourceUrl))return!0}return!1}function O(e,t){var r,n,s
if(Object(o.k)(t)||Object(o.k)(e))return{spatialReference:null,updating:!1}
if("not-loaded"===t.loadStatus)return t.load(),{spatialReference:null,updating:!0}
if(t.spatialReference)return{spatialReference:t.spatialReference,updating:!1}
if(0===t.baseLayers.length)return{spatialReference:null,updating:!1}
const i=t.baseLayers.getItemAt(0)
switch(i.loadStatus){case"not-loaded":i.load()
case"loading":return{spatialReference:null,updating:!0}
case"failed":return{spatialReference:null,updating:!1}}const a=(("supportedSpatialReferences"in i?i.supportedSpatialReferences:null)||["tileInfo"in i?null==(r=i.tileInfo)?void 0:r.spatialReference:i.spatialReference]).filter(Boolean),l=e.spatialReference
return l?{spatialReference:null!=(n=null!=(s=a.find(e=>l.equals(e)))?s:a[0])?n:null,updating:!1}:{spatialReference:a[0],updating:!1}}const j=/^(basemaps|ibasemaps).*-api\.arcgis\.com$/i
function _(e){if(!e)return!1
const t=new l.a(Object(l.F)(e))
return!!t.authority&&j.test(t.authority)}function w(e){return(i.a.isCollection(e)?e.toArray():e).map(S)}function S(e){var t,r
return{type:e.type,url:R("urlTemplate"in e&&e.urlTemplate||e.url||"styleUrl"in e&&e.styleUrl||""),minScale:"minScale"in e&&null!=e.minScale?e.minScale:0,maxScale:"maxScale"in e&&null!=e.maxScale?e.maxScale:0,opacity:null!=e.opacity?e.opacity:1,visible:null==e.visible||!!e.visible,sublayers:"map-image"!==e.type&&"wms"!==e.type||!Object(o.l)(e.sublayers)||null==(t=e.sublayers)?void 0:t.map(e=>({id:e.id,visible:e.visible})),activeLayerId:"wmts"===e.type?null==(r=e.activeLayer)?void 0:r.id:void 0}}function L(e){var t,r
return e?{baseLayers:M((null!=(t=e.baseMapLayers)?t:[]).filter(e=>!e.isReference)),referenceLayers:M((null!=(r=e.baseMapLayers)?r:[]).filter(e=>e.isReference))}:null}function M(e){return e.map(e=>function(e){let t
switch(e.layerType){case"VectorTileLayer":t="vector-tile"
break
case"ArcGISTiledMapServiceLayer":t="tile"
break
default:t="unknown"}return{type:t,url:R(e.templateUrl||e.urlTemplate||e.styleUrl||e.url),minScale:null!=e.minScale?e.minScale:0,maxScale:null!=e.maxScale?e.maxScale:0,opacity:null!=e.opacity?e.opacity:1,visible:null==e.visibility||!!e.visibility,sublayers:void 0,activeLayerId:void 0}}(e))}function T(e,t,r){return null!=e!=(null!=t)?"not-equal":e&&t?E(e.baseLayers,t.baseLayers)?E(e.referenceLayers,t.referenceLayers)?"equal":r.mustMatchReferences?"not-equal":"base-layers-equal":"not-equal":"equal"}function E(e,t){if(e.length!==t.length)return!1
for(let r=0;r<e.length;r++)if(!I(e[r],t[r]))return!1
return!0}function I(e,t){if(e.type!==t.type||"scene"===e.type||e.url!==t.url||e.minScale!==t.minScale||e.maxScale!==t.maxScale||e.visible!==t.visible||e.opacity!==t.opacity)return!1
if(Object(o.l)(e.activeLayerId)||Object(o.l)(t.activeLayerId))return e.activeLayerId===t.activeLayerId
if(Object(o.l)(e.sublayers)||Object(o.l)(t.sublayers)){if(Object(o.k)(e.sublayers)||Object(o.k)(t.sublayers)||e.sublayers.length!==t.sublayers.length)return!1
for(let r=0;r<e.sublayers.length;r++){const n=e.sublayers.at(r),s=t.sublayers.at(r)
if((null==n?void 0:n.id)!==(null==s?void 0:s.id)||(null==n?void 0:n.visible)!==(null==s?void 0:s.visible))return!1}}return!0}function R(e){return e?Object(l.I)(e).replace(/^\s*https?:/i,"").toLowerCase():""}},1517:function(e,t,r){"use strict"
r.d(t,"a",(function(){return T}))
var n,s=r(968),i=r(990),a=r(993),o=r(1179),l=r(1090),c=r(446),u=r(972),h=r(234),d=r(1046),p=r(1329),b=r(233),y=r(973),f=r(970),m=r(971),g=r(969),v=r(974),O=(r(445),r(235),r(979))
let j=n=class extends u.a{constructor(e){super(e),this.type="none"}clone(){return new n({type:this.type})}}
Object(s.a)([Object(O.a)({none:"none",stayAbove:"stay-above"})],j.prototype,"type",void 0),j=n=Object(s.a)([Object(g.a)("esri.ground.NavigationConstraint")],j)
var _,w=r(1243),S=r(1119)
let L=_=class extends(Object(u.b)(d.a)){constructor(e){super(e),this.opacity=1,this.shading=!w.a.TERRAIN_USE_LEGACY_SHADING,this.surfaceColor=null,this.navigationConstraint=null,this.layers=new a.a
const t=e=>{e.parent&&e.parent!==this&&"remove"in e.parent&&e.parent.remove(e),e.parent=this,"elevation"!==e.type&&"base-elevation"!==e.type&&b.a.getLogger(this.declaredClass).error(`Layer '${e.title}, id:${e.id}' of type '${e.type}' is not supported as a ground layer and will therefore be ignored. Only layers of type 'elevation' are supported.`)}
this.layers.on("after-add",e=>t(e.item)),this.layers.on("after-remove",e=>(e=>{e.parent=null})(e.item))}initialize(){this.when().catch(e=>{b.a.getLogger(this.declaredClass).error("#load()","Failed to load ground",e)}),this.resourceInfo&&this.read(this.resourceInfo.data,this.resourceInfo.context)}destroy(){const e=this.layers.removeAll()
for(const t of e)t.destroy()
this.layers.destroy()}normalizeCtorArgs(e){return e&&"resourceInfo"in e&&(this._set("resourceInfo",e.resourceInfo),delete(e={...e}).resourceInfo),e}set layers(e){this._set("layers",Object(o.b)(e,this._get("layers")))}writeLayers(e,t,r,n){const s=[]
e?(n={...n,layerContainerType:"ground"},e.forEach(e=>{if("write"in e){const t={}
Object(l.b)(e)().write(t,n)&&s.push(t)}else n&&n.messages&&n.messages.push(new c.a("layer:unsupported",`Layers (${e.title}, ${e.id}) of type '${e.declaredClass}' cannot be persisted in the ground`,{layer:e}))}),t.layers=s):t.layers=s}load(e){return this.addResolvingPromise(this._loadFromSource(e)),Promise.resolve(this)}loadAll(){return Object(p.a)(this,e=>{e(this.layers)})}async queryElevation(e,t){await this.load({signal:null==t?void 0:t.signal})
const{ElevationQuery:n}=await Promise.all([r.e(1),r.e(74)]).then(r.bind(null,2685))
Object(y.q)(t)
const s=new n,i=this.layers.filter(M).toArray()
return s.queryAll(i,e,t)}async createElevationSampler(e,t){await this.load({signal:null==t?void 0:t.signal})
const{ElevationQuery:n}=await Promise.all([r.e(1),r.e(74)]).then(r.bind(null,2685))
Object(y.q)(t)
const s=new n,i=this.layers.filter(M).toArray()
return s.createSamplerAll(i,e,t)}clone(){const e={opacity:this.opacity,surfaceColor:Object(h.a)(this.surfaceColor),navigationConstraint:Object(h.a)(this.navigationConstraint),layers:this.layers.slice()}
return this.loaded&&(e.loadStatus="loaded"),new _({resourceInfo:this.resourceInfo}).set(e)}read(e,t){this.resourceInfo||this._set("resourceInfo",{data:e,context:t}),super.read(e,t)}_loadFromSource(e){const t=this.resourceInfo
return t?this._loadLayersFromJSON(t.data,t.context,e):Promise.resolve()}_loadLayersFromJSON(e,t,n){const s=t&&t.origin||"web-scene",i=t&&t.portal||null,a=t&&t.url||null
return Promise.all([r.e(1),r.e(277)]).then(r.bind(null,1781)).then(({populateOperationalLayers:t})=>{Object(y.q)(n)
const r=[]
if(e.layers&&Array.isArray(e.layers)){const n={context:{origin:s,url:a,portal:i,layerContainerType:"ground"},defaultLayerType:"ArcGISTiledElevationServiceLayer"}
r.push(t(this.layers,e.layers,n))}return Object(y.g)(r)}).then(()=>{})}}
function M(e){return"elevation"===e.type||function(e){return e&&"createElevationSampler"in e}(e)}Object(s.a)([Object(f.b)({json:{read:!1}})],L.prototype,"layers",null),Object(s.a)([Object(v.a)("layers")],L.prototype,"writeLayers",null),Object(s.a)([Object(f.b)({readOnly:!0})],L.prototype,"resourceInfo",void 0),Object(s.a)([Object(f.b)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{type:m.a,read:{reader:S.b,source:"transparency"},write:{writer:(e,t)=>{t.transparency=Object(S.a)(e)},target:"transparency"}}})],L.prototype,"opacity",void 0),Object(s.a)([Object(f.b)({type:Boolean,nonNullable:!0,json:{read:!1}})],L.prototype,"shading",void 0),Object(s.a)([Object(f.b)({type:i.a,json:{type:[m.a],write:(e,t)=>{t.surfaceColor=e.toJSON().slice(0,3)}}})],L.prototype,"surfaceColor",void 0),Object(s.a)([Object(f.b)({type:j,json:{write:!0}})],L.prototype,"navigationConstraint",void 0),L=_=Object(s.a)([Object(g.a)("esri.Ground")],L)
const T=L},1518:function(e,t,r){"use strict"
r.d(t,"a",(function(){return d}))
var n=r(446),s=r(234),i=r(23),a=r(146),o=r(1364),l=r(1037)
const c=new Set(["bing-maps","imagery","imagery-tile","map-image","open-street-map","tile","unknown","unsupported","vector-tile","web-tile","wms","wmts"]),u=new Set(["csv","feature","geo-rss","geojson","group","imagery","imagery-tile","kml","map-image","map-notes","media","ogc-feature","route","subtype-group","tile","unknown","unsupported","vector-tile","web-tile","wfs","wms","wmts"])
function h(e,t){var r,n
"maxScale"in e&&(t.maxScale=null!=(r=Object(o.b)(e.maxScale))?r:void 0),"minScale"in e&&(t.minScale=null!=(n=Object(o.b)(e.minScale))?n:void 0)}function d(e,t,r){if(!("write"in e)||!e.write)return r&&r.messages&&r.messages.push(new n.a("layer:unsupported",`Layers (${e.title}, ${e.id}) of type '${e.declaredClass}' cannot be persisted`,{layer:e})),null
if(function(e,t){if(t.restrictedWebMapWriting){const r=function(e){return"basemap"===e.layerContainerType?c:"operational-layers"===e.layerContainerType?u:null}(t)
return!Object(i.l)(r)||r.has(e.type)&&!Object(l.f)(e)}return!0}(e,r)){const t={}
return e.write(t,r)?t:null}return Object(i.l)(t)&&function(e,t){var r
if(function(e,t){if(t)if(Object(l.f)(e)){const r=Object(a.b)("featureCollection.layers",t),n=r&&r[0]&&r[0].layerDefinition
n&&h(e,n)}else"stream"===e.type?h(e,t.layerDefinition=t.layerDefinition||{}):"group"!==e.type&&h(e,t)}(e,t),t&&("blendMode"in e&&(t.blendMode=e.blendMode,"normal"===t.blendMode&&delete t.blendMode),t.opacity=null!=(r=Object(o.b)(e.opacity))?r:void 0,t.title=e.title||"Layer",t.visibility=e.visible,"legendEnabled"in e&&"wmts"!==e.type))if(Object(l.f)(e)){const r=t.featureCollection
r&&(r.showLegend=e.legendEnabled)}else t.showLegend=e.legendEnabled}(e,t=Object(s.a)(t)),t}},1649:function(e,t,r){"use strict"
r.d(t,"a",(function(){return s}))
var n=r(1279)
function s(e){return new n.a({getCollections:()=>[e.tables,e.layers],getChildrenFunction:e=>{const t=[]
return"tables"in e&&t.push(e.tables),"layers"in e&&t.push(e.layers),t},itemFilterFunction:e=>{const t=e.parent
return!!t&&"tables"in t&&t.tables.includes(e)}})}},1650:function(e,t,r){"use strict"
r.d(t,"a",(function(){return d}))
var n=r(968),s=r(993),i=r(1179),a=r(233),o=r(973),l=r(970),c=(r(971),r(445),r(969)),u=r(777)
function h(e,t,r){let n,s
if(e)for(let a=0,o=e.length;a<o;a++){var i
if(n=e.getItemAt(a),n[t]===r)return n
if("group"===(null==(i=n)?void 0:i.type)&&(s=h(n.layers,t,r),s))return s}}const d=e=>{let t=class extends e{constructor(...e){super(...e),this.layers=new s.a
const t=e=>{e.parent=this,this.layerAdded(e),"elevation"!==e.type&&"base-elevation"!==e.type||a.a.getLogger(this.declaredClass).error(`Layer 'title:${e.title}, id:${e.id}' of type '${e.type}' is not supported as an operational layer and will therefore be ignored.`)},r=e=>{e.parent=null,this.layerRemoved(e)}
this.layers.on("before-add",e=>(e=>{e.parent&&"remove"in e.parent&&e.parent.remove(e)})(e.item)),this.layers.on("after-add",e=>t(e.item)),this.layers.on("after-remove",e=>r(e.item))}destroy(){const e=this.layers.removeAll()
for(const t of e)this.layerRemoved(t),t.destroy()
this.layers.destroy()}set layers(e){this._set("layers",Object(i.b)(e,this._get("layers")))}add(e,t){const r=this.layers
if(t=r.getNextIndex(t),e instanceof u.default){const n=e
n.parent===this?this.reorder(n,t):r.add(n,t)}else Object(o.l)(e)?e.then(e=>{this.destroyed||this.add(e,t)}):a.a.getLogger(this.declaredClass).error("#add()","The item being added is not a Layer or a Promise that resolves to a Layer.")}addMany(e,t){const r=this.layers
let n=r.getNextIndex(t)
e.slice().forEach(e=>{e.parent!==this?(r.add(e,n),n+=1):this.reorder(e,n)})}findLayerById(e){return h(this.layers,"id",e)}findLayerByUid(e){return h(this.layers,"uid",e)}remove(e){return this.layers.remove(e)}removeMany(e){return this.layers.removeMany(e)}removeAll(){return this.layers.removeAll()}reorder(e,t){return this.layers.reorder(e,t)}layerAdded(e){}layerRemoved(e){}}
return Object(n.a)([Object(l.b)()],t.prototype,"layers",null),t=Object(n.a)([Object(c.a)("esri.support.LayersMixin")],t),t}},1651:function(e,t,r){"use strict"
r.d(t,"a",(function(){return u}))
var n=r(968),s=r(993),i=r(1179),a=r(233),o=r(970),l=(r(971),r(445),r(969))
function c(e,t,r){if(e)for(let n=0,s=e.length;n<s;n++){const s=e.getItemAt(n)
if(s[t]===r)return s
if("group"===(null==s?void 0:s.type)){const e=c(s.tables,t,r)
if(e)return e}}}const u=e=>{let t=class extends e{constructor(...e){super(...e),this.tables=new s.a,this.tables.on("after-add",e=>{const t=e.item
t.parent&&t.parent!==this&&"tables"in t.parent&&t.parent.tables.remove(t),t.parent=this,"feature"!==t.type&&a.a.getLogger(this.declaredClass).error(`Layer 'title:${t.title}, id:${t.id}' of type '${t.type}' is not supported as a table and will therefore be ignored.`)}),this.tables.on("after-remove",e=>{e.item.parent=null})}destroy(){const e=this.tables.removeAll()
for(const t of e)t.destroy()
this.tables.destroy()}set tables(e){this._set("tables",Object(i.b)(e,this._get("tables")))}findTableById(e){return c(this.tables,"id",e)}findTableByUid(e){return c(this.tables,"uid",e)}}
return Object(n.a)([Object(o.b)()],t.prototype,"tables",null),t=Object(n.a)([Object(l.a)("esri.support.TablesMixin")],t),t}},771:function(e,t,r){"use strict"
r.r(t),r.d(t,"default",(function(){return b}))
var n=r(110),s=r(196),i=r(446),a=r(235),o=r(234),l=r(23),c=r(973),u=r(374),h=r(198),d=r(1146),p=r(1229)
async function b(e,t){var o
const h=Object(u.z)(e),g=Object(u.y)(e)
g||h||(e=Object(u.I)(e))
const v={url:e,requestOptions:{...Object(l.u)(t)}}
let O=Object(u.o)(e)
if(O){const e=await async function(e,t){if(null!=e.responseData)return e.responseData
if(e.headers&&(t.requestOptions.headers={...t.requestOptions.headers,...e.headers}),e.query&&(t.requestOptions.query={...t.requestOptions.query,...e.query}),e.before){let r,n
try{n=await e.before(t)}catch(e){r=S("request:interceptor",e,t)}if((n instanceof Error||n instanceof i.a)&&(r=S("request:interceptor",n,t)),r)throw e.error&&e.error(r),r
return n}}(O,v)
if(null!=e)return{data:e,getHeader:j,httpStatus:200,requestOptions:v.requestOptions,url:v.url}
O.after||O.error||(O=null)}if(e=v.url,"image"===(t=v.requestOptions).responseType){if(Object(a.a)("host-webworker")||Object(a.a)("host-node"))throw S("request:invalid-parameters",new Error("responseType 'image' is not supported in Web Workers or Node environment"),v)}else if(h)throw S("request:invalid-parameters",new Error("Data URLs are not supported for responseType = "+t.responseType),v)
if("head"===t.method){if(t.body)throw S("request:invalid-parameters",new Error("body parameter cannot be set when method is 'head'"),v)
if(h||g)throw S("request:invalid-parameters",new Error("data and blob URLs are not supported for method 'head'"),v)}if(await async function(){Object(a.a)("host-webworker")?y||(y=await r.e(760).then(r.bind(null,1482))):b._abortableFetch||(b._abortableFetch=globalThis.fetch.bind(globalThis))}(),y)return y.execute(e,t)
const _=new AbortController
Object(c.n)(t,()=>_.abort())
const w={controller:_,credential:void 0,credentialToken:void 0,fetchOptions:void 0,hasToken:!1,interceptor:O,params:v,redoRequest:!1,useIdentity:f.useIdentity,useProxy:!1,useSSL:!1,withCredentials:!1},E=await async function(e){var t,r
let i,a
await async function(e){var t,r
const i=e.params.url,a=e.params.requestOptions,o=e.controller.signal,l=a.body
let u=null,h=null
if(m&&"HTMLFormElement"in globalThis&&(l instanceof FormData?u=l:l instanceof HTMLFormElement&&(u=new FormData(l))),"string"==typeof l&&(h=l),e.fetchOptions={cache:a.cacheBust&&!b._abortableFetch.polyfill?"no-cache":"default",credentials:"same-origin",headers:a.headers||{},method:"head"===a.method?"HEAD":"GET",mode:"cors",priority:f.priority,redirect:"follow",signal:o},(u||h)&&(e.fetchOptions.body=u||h),"anonymous"===a.authMode&&(e.useIdentity=!1),e.hasToken=!!(/token=/i.test(i)||null!=(t=a.query)&&t.token||null!=(r=u)&&r.get("token")),!e.hasToken&&n.default.apiKey&&Object(d.a)(i)&&(a.query||(a.query={}),a.query.token=n.default.apiKey,e.hasToken=!0),e.useIdentity&&!e.hasToken&&!e.credentialToken&&!M(i)&&!Object(c.k)(o)){let t
"immediate"===a.authMode?(await L(),t=await s.b.getCredential(i,{signal:o}),e.credential=t):"no-prompt"===a.authMode?(await L(),t=await s.b.getCredential(i,{prompt:!1,signal:o}).catch(()=>{}),e.credential=t):s.b&&(t=s.b.findCredential(i)),t&&(e.credentialToken=t.token,e.useSSL=!!t.ssl)}}(e)
try{do{[i,a]=await T(e)}while(!await I(e,i,a))}catch(t){const r=S("request:server",t,e.params,i)
throw r.details.ssl=e.useSSL,e.interceptor&&e.interceptor.error&&e.interceptor.error(r),r}const o=e.params.url
if(a&&/\/sharing\/rest\/(accounts|portals)\/self/i.test(o)){var l
if(!e.hasToken&&!e.credentialToken&&null!=(l=a.user)&&l.username&&!Object(u.D)(o)){const e=Object(u.p)(o,!0)
e&&f.trustedServers.push(e)}Array.isArray(a.authorizedCrossOriginNoCorsDomains)&&Object(p.c)(a.authorizedCrossOriginNoCorsDomains)}const h=e.credential
if(h&&s.b){const e=s.b.findServerInfo(h.server)
let t=e&&e.owningSystemUrl
if(t){t=t.replace(/\/?$/,"/sharing")
const e=s.b.findCredential(t,h.userId)
e&&-1===s.b._getIdenticalSvcIdx(t,e)&&e.resources.unshift(t)}}return{data:a,getHeader:i?e=>{var t
return null==(t=i)?void 0:t.headers.get(e)}:j,httpStatus:null!=(t=null==(r=i)?void 0:r.status)?t:200,requestOptions:e.params.requestOptions,ssl:e.useSSL,url:e.params.url}}(w)
return null!=(o=O)&&null!=o.after&&o.after(E),E}let y
const f=n.default.request,m="FormData"in globalThis,g=[499,498,403,401],v=["COM_0056","COM_0057","SB_0008"],O=[/\/arcgis\/tokens/i,/\/sharing(\/rest)?\/generatetoken/i,/\/rest\/info/i],j=()=>null,_=Symbol()
function w(e){const t=Object(u.p)(e)
return!t||t.endsWith(".arcgis.com")||b._corsServers.includes(t)||Object(u.D)(t)}function S(e,t,r,n){let s="Error"
const a={url:r.url,requestOptions:r.requestOptions,getHeader:j,ssl:!1}
if(t instanceof i.a)return t.details?(t.details=Object(o.a)(t.details),t.details.url=r.url,t.details.requestOptions=r.requestOptions):t.details=a,t
if(t){const e=n&&(e=>n.headers.get(e)),r=n&&n.status,i=t.message
i&&(s=i),e&&(a.getHeader=e),a.httpStatus=(null!=t.httpCode?t.httpCode:t.code)||r||0,a.subCode=t.subcode,a.messageCode=t.messageCode,"string"==typeof t.details?a.messages=[t.details]:a.messages=t.details,a.raw=_ in t?t[_]:t}return Object(c.j)(t)?Object(c.c)():new i.a(e,s,a)}async function L(){s.b||await Promise.all([r.e(5),r.e(18),r.e(59),r.e(475)]).then(r.bind(null,784))}function M(e){return O.some(t=>t.test(e))}async function T(e){var t
let r=e.params.url
const n=e.params.requestOptions,i=null!=(t=e.fetchOptions)?t:{},o=Object(u.y)(r)||Object(u.z)(r),l=n.responseType||"json",d=o?0:null!=n.timeout?n.timeout:f.timeout
let y=!1
if(!o){e.useSSL&&(r=Object(u.P)(r)),n.cacheBust&&"default"===i.cache&&(r=Object(u.d)(r,"request.preventCache",Date.now()))
let t={...n.query}
e.credentialToken&&(t.token=e.credentialToken)
let o=Object(u.J)(t)
Object(a.a)("esri-url-encodes-apostrophe")&&(o=o.replace(/'/g,"%27"))
const l=r.length+1+o.length
let c
y="delete"===n.method||"post"===n.method||"put"===n.method||!!n.body||l>f.maxUrlLength
const d=n.useProxy||!!Object(u.r)(r)
if(d){const e=Object(u.s)(r)
c=e.path,!y&&c.length+1+l>f.maxUrlLength&&(y=!0),e.query&&(t={...e.query,...t})}if("HEAD"===i.method&&(y||d)){if(y){if(l>f.maxUrlLength)throw S("request:invalid-parameters",new Error("URL exceeds maximum length"),e.params)
throw S("request:invalid-parameters",new Error("cannot use POST request when method is 'head'"),e.params)}if(d)throw S("request:invalid-parameters",new Error("cannot use proxy when method is 'head'"),e.params)}if(y?(i.method="delete"===n.method?"DELETE":"put"===n.method?"PUT":"POST",n.body?r=Object(u.e)(r,t):(i.body=Object(u.J)(t),i.headers||(i.headers={}),i.headers["Content-Type"]="application/x-www-form-urlencoded")):r=Object(u.e)(r,t),d&&(e.useProxy=!0,r=`${c}?${r}`),t.token&&m&&i.body instanceof FormData&&!Object(h.a)(r)&&i.body.set("token",t.token),n.hasOwnProperty("withCredentials"))e.withCredentials=n.withCredentials
else if(!Object(u.v)(r,Object(u.m)()))if(Object(u.D)(r))e.withCredentials=!0
else if(s.b){const t=s.b.findServerInfo(r)
t&&t.webTierAuth&&(e.withCredentials=!0)}e.withCredentials&&(i.credentials="include",Object(p.a)(r)&&await Object(p.d)(y?Object(u.e)(r,t):r))}let g,v,O=0,j=!1
d>0&&(O=setTimeout(()=>{j=!0,e.controller.abort()},d))
try{if("native-request-init"===n.responseType)v=i,v.url=r
else if("image"!==n.responseType||"default"!==i.cache||"GET"!==i.method||y||function(e){if(e)for(const t of Object.getOwnPropertyNames(e))if(e[t])return!0
return!1}(n.headers)||!o&&!e.useProxy&&f.proxyUrl&&!w(r)){if(g=await b._abortableFetch(r,i),e.useProxy||function(e){const t=Object(u.p)(e)
t&&!b._corsServers.includes(t)&&b._corsServers.push(t)}(r),"native"===n.responseType)v=g
else if("HEAD"!==i.method)if(g.ok){switch(l){case"array-buffer":v=await g.arrayBuffer()
break
case"blob":case"image":v=await g.blob()
break
default:v=await g.text()}if(O&&(clearTimeout(O),O=0),"json"===l||"xml"===l||"document"===l)if(v)switch(l){case"json":v=JSON.parse(v)
break
case"xml":v=E(v,"application/xml")
break
case"document":v=E(v,"text/html")}else v=null
if(v){if("array-buffer"===l||"blob"===l){const e=g.headers.get("Content-Type")
if(e&&/application\/json|text\/plain/i.test(e)&&v["blob"===l?"size":"byteLength"]<=750)try{const e=await new Response(v).json()
e.error&&(v=e)}catch{}}"image"===l&&v instanceof Blob&&(v=await R(URL.createObjectURL(v),e,!0))}}else v=await g.text()}else v=await R(r,e)}catch(t){var _
if("AbortError"===t.name){if(j)throw new Error("Timeout exceeded")
throw Object(c.c)("Request canceled")}if(!(!g&&t instanceof TypeError&&f.proxyUrl)||n.body||"delete"===n.method||"head"===n.method||"post"===n.method||"put"===n.method||e.useProxy||w(r))throw t
e.redoRequest=!0,Object(u.c)({proxyUrl:f.proxyUrl,urlPrefix:null!=(_=Object(u.p)(r))?_:""})}finally{O&&clearTimeout(O)}return[g,v]}function E(e,t){let r
try{r=(new DOMParser).parseFromString(e,t)}catch{}if(!r||r.getElementsByTagName("parsererror").length)throw new SyntaxError("XML Parse error")
return r}async function I(e,t,r){if(e.redoRequest)return e.redoRequest=!1,!1
const n=e.params.requestOptions
if(!t||"native"===n.responseType||"native-request-init"===n.responseType)return!0
let i,a
if(!t.ok)throw i=new Error(`Unable to load ${t.url} status: ${t.status}`),i[_]=r,i
r&&(r.error?i=r.error:"error"===r.status&&Array.isArray(r.messages)&&(i={...r},i[_]=r,i.details=r.messages))
let o,l=null
i&&(a=Number(i.code),l=i.hasOwnProperty("subcode")?Number(i.subcode):null,o=i.messageCode,o=o&&o.toUpperCase())
const c=n.authMode
if(403===a&&(4===l||i.message&&i.message.toLowerCase().includes("ssl")&&!i.message.toLowerCase().includes("permission"))){if(!e.useSSL)return e.useSSL=!0,!1}else if(!e.hasToken&&e.useIdentity&&("no-prompt"!==c||498===a)&&void 0!==a&&g.includes(a)&&!M(e.params.url)&&(403!==a||o&&!v.includes(o)&&(null==l||2===l&&e.credentialToken))){await L()
try{const t=await s.b.getCredential(e.params.url,{error:S("request:server",i,e.params),prompt:"no-prompt"!==c,signal:e.controller.signal,token:e.credentialToken})
return e.credential=t,e.credentialToken=t.token,e.useSSL=e.useSSL||t.ssl,!1}catch(t){if("no-prompt"===c)return e.credential=void 0,e.credentialToken=void 0,!1
i=t}}if(i)throw i
return!0}function R(e,t,r=!1){const n=t.controller.signal,s=new Image
return t.withCredentials?s.crossOrigin="use-credentials":s.crossOrigin="anonymous",s.alt="",s.fetchPriority=f.priority,s.src=e,Object(p.b)(s,e,r,n)}b._abortableFetch=null,b._corsServers=["https://server.arcgisonline.com","https://services.arcgisonline.com"]},773:function(e,t,r){"use strict"
r.r(t),r.d(t,"default",(function(){return S}))
var n,s=r(968),i=r(445),a=r(234),o=r(23),l=r(970),c=(r(971),r(969)),u=r(974),h=r(770),d=r(1004),p=r(992),b=r(769),y=r(1142),f=r(1085),m=r(1066),g=r(1157),v=r(1118),O=r(774),j=r(1105)
function _(e){return!Array.isArray(e[0])}let w=n=class extends d.a{static fromExtent(e){const t=e.clone().normalize(),r=e.spatialReference
let s=!1,i=!1
for(const e of t)e.hasZ&&(s=!0),e.hasM&&(i=!0)
const a={rings:t.map(e=>{const t=[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]
if(s&&e.hasZ){const r=e.zmin+.5*(e.zmax-e.zmin)
for(let e=0;e<t.length;e++)t[e].push(r)}if(i&&e.hasM){const r=e.mmin+.5*(e.mmax-e.mmin)
for(let e=0;e<t.length;e++)t[e].push(r)}return t}),spatialReference:r}
return s&&(a.hasZ=!0),i&&(a.hasM=!0),new n(a)}constructor(...e){super(...e),this.rings=[],this.type="polygon"}normalizeCtorArgs(e,t){let r,n,s=null,i=null
return e&&!Array.isArray(e)?(s=e.rings?e.rings:null,t||(e.spatialReference?t=e.spatialReference:e.rings||(t=e)),r=e.hasZ,n=e.hasM):s=e,s=s||[],t=t||b.default.WGS84,s.length&&s[0]&&null!=s[0][0]&&"number"==typeof s[0][0]&&(s=[s]),i=s[0]&&s[0][0],i&&(void 0===r&&void 0===n?(r=i.length>2,n=i.length>3):void 0===r?r=n?i.length>3:i.length>2:void 0===n&&(n=r?i.length>3:i.length>2)),{rings:s,spatialReference:t,hasZ:r,hasM:n}}get cache(){return this.commitProperty("rings"),this.commitProperty("hasZ"),this.commitProperty("hasM"),this.commitProperty("spatialReference"),{}}get centroid(){const e=Object(y.b)(this)
if(!e||isNaN(e[0])||isNaN(e[1])||this.hasZ&&isNaN(e[2]))return null
const t=new p.a
return t.x=e[0],t.y=e[1],t.spatialReference=this.spatialReference,this.hasZ&&(t.z=e[2]),t}get extent(){const{spatialReference:e}=this,t=Object(g.b)(this)
if(!t)return null
const r=new h.default(t)
return r.spatialReference=e,r}get isSelfIntersecting(){return Object(v.d)(this.rings)}writeRings(e,t){t.rings=Object(a.a)(this.rings)}addRing(e){if(!e)return
const t=this.rings,r=t.length
if(_(e)){const n=[]
for(let t=0,r=e.length;t<r;t++)n[t]=e[t].toArray()
t[r]=n}else t[r]=e.concat()
return this.notifyChange("rings"),this}clone(){const e=new n
return e.spatialReference=this.spatialReference,e.rings=Object(a.a)(this.rings),e.hasZ=this.hasZ,e.hasM=this.hasM,e}equals(e){if(this===e)return!0
if(Object(o.k)(e))return!1
const t=this.spatialReference,r=e.spatialReference
if(Object(o.l)(t)!==Object(o.l)(r))return!1
if(Object(o.l)(t)&&Object(o.l)(r)&&!t.equals(r))return!1
if(this.rings.length!==e.rings.length)return!1
const n=([e,t,r,n],[s,i,a,o])=>e===s&&t===i&&(null==r&&null==a||r===a)&&(null==n&&null==o||n===o)
for(let t=0;t<this.rings.length;t++){const r=this.rings[t],s=e.rings[t]
if(!Object(i.e)(r,s,n))return!1}return!0}contains(e){if(!e)return!1
const t=Object(O.project)(e,this.spatialReference)
return Object(f.g)(this,Object(o.l)(t)?t:e)}isClockwise(e){let t
return t=_(e)?e.map(e=>this.hasZ?this.hasM?[e.x,e.y,e.z,e.m]:[e.x,e.y,e.z]:[e.x,e.y]):e,Object(m.k)(t,this.hasM,this.hasZ)}getPoint(e,t){if(!this._validateInputs(e,t))return null
const r=this.rings[e][t],n=this.hasZ,s=this.hasM
return n&&!s?new p.a(r[0],r[1],r[2],void 0,this.spatialReference):s&&!n?new p.a(r[0],r[1],void 0,r[2],this.spatialReference):n&&s?new p.a(r[0],r[1],r[2],r[3],this.spatialReference):new p.a(r[0],r[1],this.spatialReference)}insertPoint(e,t,r){return this._validateInputs(e,t,!0)?(Object(j.a)(this,r),Array.isArray(r)||(r=r.toArray()),this.rings[e].splice(t,0,r),this.notifyChange("rings"),this):this}removePoint(e,t){if(!this._validateInputs(e,t))return null
const r=new p.a(this.rings[e].splice(t,1)[0],this.spatialReference)
return this.notifyChange("rings"),r}removeRing(e){if(!this._validateInputs(e,null))return null
const t=this.rings.splice(e,1)[0],r=this.spatialReference,n=t.map(e=>new p.a(e,r))
return this.notifyChange("rings"),n}setPoint(e,t,r){return this._validateInputs(e,t)?(Object(j.a)(this,r),Array.isArray(r)||(r=r.toArray()),this.rings[e][t]=r,this.notifyChange("rings"),this):this}_validateInputs(e,t,r=!1){if(null==e||e<0||e>=this.rings.length)return!1
if(null!=t){const n=this.rings[e]
if(r&&(t<0||t>n.length))return!1
if(!r&&(t<0||t>=n.length))return!1}return!0}toJSON(e){return this.write({},e)}}
Object(s.a)([Object(l.b)({readOnly:!0})],w.prototype,"cache",null),Object(s.a)([Object(l.b)({readOnly:!0})],w.prototype,"centroid",null),Object(s.a)([Object(l.b)({readOnly:!0})],w.prototype,"extent",null),Object(s.a)([Object(l.b)({readOnly:!0})],w.prototype,"isSelfIntersecting",null),Object(s.a)([Object(l.b)({type:[[[Number]]],json:{write:{isRequired:!0}}})],w.prototype,"rings",void 0),Object(s.a)([Object(u.a)("rings")],w.prototype,"writeRings",null),w=n=Object(s.a)([Object(c.a)("esri.geometry.Polygon")],w),w.prototype.toJSON.isDefaultToJSON=!0
const S=w},777:function(e,t,r){"use strict"
r.r(t),r.d(t,"default",(function(){return v}))
var n=r(968),s=(r(982),r(771)),i=r(446),a=r(1002),o=r(1063),l=r(1046),c=r(233),u=r(973),h=r(374),d=r(970),p=(r(971),r(445),r(969)),b=r(110),y=r(770),f=r(769)
let m=0,g=class extends(a.a.EventedMixin(Object(o.b)(l.a))){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new y.default(-180,-90,180,90,f.default.WGS84),this.id=Date.now().toString(16)+"-layer-"+m++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=f.default.WGS84,this.title=null,this.type=null,this.url=null,this.visible=!0}static async fromArcGISServerUrl(e){const t="string"==typeof e?{url:e}:e
return(await r.e(319).then(r.bind(null,2926))).fromUrl(t)}static fromPortalItem(e){return async function(e){const t="portalItem"in e?e:{portalItem:e},n=await Promise.all([r.e(1),r.e(2),r.e(246)]).then(r.bind(null,2192))
try{return await n.fromItem(t)}catch(e){const r=t&&t.portalItem,n=r&&r.id||"unset",s=r&&r.portal&&r.portal.url||b.default.portalUrl
throw c.a.getLogger("esri.layers.support.fromPortalItem").error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+s+"', id: '"+n+"')",e),e}}(e)}initialize(){this.when().catch(e=>{var t,r
Object(u.j)(e)||c.a.getLogger(this.declaredClass).error("#load()",`Failed to load layer (title: '${null!=(t=this.title)?t:"no title"}', id: '${null!=(r=this.id)?r:"no id"}')`,{error:e})})}destroy(){if(this.parent){const e=this,t=this.parent
"layers"in t&&t.layers.includes(e)?t.layers.remove(e):"tables"in t&&t.tables.includes(e)?t.tables.remove(e):"baseLayers"in t&&t.baseLayers.includes(e)?t.baseLayers.remove(e):"baseLayers"in t&&t.referenceLayers.includes(e)&&t.referenceLayers.remove(e)}}get hasAttributionData(){return null!=this.attributionDataUrl}get parsedUrl(){return Object(h.Q)(this.url)}async fetchAttributionData(){const e=this.attributionDataUrl
if(this.hasAttributionData&&e)return(await Object(s.default)(e,{query:{f:"json"},responseType:"json"})).data
throw new i.a("layer:no-attribution-data","Layer does not have attribution data")}}
Object(n.a)([Object(d.b)({type:String})],g.prototype,"attributionDataUrl",void 0),Object(n.a)([Object(d.b)({type:y.default})],g.prototype,"fullExtent",void 0),Object(n.a)([Object(d.b)({readOnly:!0})],g.prototype,"hasAttributionData",null),Object(n.a)([Object(d.b)({type:String,clonable:!1})],g.prototype,"id",void 0),Object(n.a)([Object(d.b)({type:Boolean,nonNullable:!0})],g.prototype,"legendEnabled",void 0),Object(n.a)([Object(d.b)({type:["show","hide","hide-children"]})],g.prototype,"listMode",void 0),Object(n.a)([Object(d.b)({type:Number,range:{min:0,max:1},nonNullable:!0})],g.prototype,"opacity",void 0),Object(n.a)([Object(d.b)({clonable:!1})],g.prototype,"parent",void 0),Object(n.a)([Object(d.b)({readOnly:!0})],g.prototype,"parsedUrl",null),Object(n.a)([Object(d.b)({type:Boolean})],g.prototype,"popupEnabled",void 0),Object(n.a)([Object(d.b)({type:Boolean})],g.prototype,"attributionVisible",void 0),Object(n.a)([Object(d.b)({type:f.default})],g.prototype,"spatialReference",void 0),Object(n.a)([Object(d.b)({type:String})],g.prototype,"title",void 0),Object(n.a)([Object(d.b)({readOnly:!0,json:{read:!1}})],g.prototype,"type",void 0),Object(n.a)([Object(d.b)()],g.prototype,"url",void 0),Object(n.a)([Object(d.b)({type:Boolean,nonNullable:!0})],g.prototype,"visible",void 0),g=Object(n.a)([Object(p.a)("esri.layers.Layer")],g)
const v=g},780:function(e,t,r){"use strict"
r.r(t),r.d(t,"esriBasemapDefinitions",(function(){return a})),r.d(t,"getBasemapTitle",(function(){return i}))
var n=r(1019),s=r(1027)
async function i(e){if(!e)return
const t=e.includes("-vector")?e.slice(0,e.indexOf("-vector")):e,r=await Object(s.a)("esri/t9n/basemaps")
return r[e]||r[t]}const a={streets:{id:"streets",classic:!0,deprecated:!0,get thumbnailUrl(){return Object(n.b)("esri/images/basemap/streets.jpg")},baseMapLayers:[{id:"streets-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Street Map",showLegend:!1,visibility:!0,opacity:1}]},satellite:{id:"satellite",classic:!0,get thumbnailUrl(){return Object(n.b)("esri/images/basemap/satellite.jpg")},baseMapLayers:[{id:"satellite-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Imagery",showLegend:!1,visibility:!0,opacity:1}]},hybrid:{id:"hybrid",classic:!0,get thumbnailUrl(){return Object(n.b)("esri/images/basemap/hybrid.jpg")},baseMapLayers:[{id:"hybrid-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Imagery",showLegend:!1,visibility:!0,opacity:1},{id:"hybrid-reference-layer",styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/30d6b8271e1849cd9c3042060001f425/resources/styles/root.json",layerType:"VectorTileLayer",title:"Hybrid Reference Layer",isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},terrain:{id:"terrain",classic:!0,get thumbnailUrl(){return Object(n.b)("esri/images/basemap/terrain.jpg")},baseMapLayers:[{id:"terrain-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Terrain Base",showLegend:!1,visibility:!0,opacity:1},{id:"terrain-reference-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Reference_Overlay/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Reference Overlay",isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},topo:{id:"topo",classic:!0,deprecated:!0,get thumbnailUrl(){return Object(n.b)("esri/images/basemap/topo.jpg")},baseMapLayers:[{id:"topo-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Topo Map",showLegend:!1,visibility:!0,opacity:1}]},gray:{id:"gray",classic:!0,deprecated:!0,get thumbnailUrl(){return Object(n.b)("esri/images/basemap/gray.jpg")},baseMapLayers:[{id:"gray-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Light Gray Base",showLegend:!1,visibility:!0,opacity:1},{id:"gray-reference-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Light Gray Reference",isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},"dark-gray":{id:"dark-gray",classic:!0,deprecated:!0,get thumbnailUrl(){return Object(n.b)("esri/images/basemap/dark-gray.jpg")},baseMapLayers:[{id:"dark-gray-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Dark Gray Base",showLegend:!1,visibility:!0,opacity:1},{id:"dark-gray-reference-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Dark Gray Reference",isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},oceans:{id:"oceans",classic:!0,get thumbnailUrl(){return Object(n.b)("esri/images/basemap/oceans.jpg")},baseMapLayers:[{id:"oceans-base-layer",url:"//services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Ocean Base",showLegend:!1,visibility:!0,opacity:1},{id:"oceans-reference-layer",url:"//services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Reference/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Ocean Reference",isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},"national-geographic":{id:"national-geographic",classic:!0,deprecated:!0,get thumbnailUrl(){return Object(n.b)("esri/images/basemap/national-geographic.jpg")},baseMapLayers:[{id:"national-geographic-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer",title:"NatGeo World Map",showLegend:!1,layerType:"ArcGISTiledMapServiceLayer",visibility:!0,opacity:1}]},osm:{id:"osm",classic:!0,get thumbnailUrl(){return Object(n.b)("esri/images/basemap/osm.jpg")},baseMapLayers:[{id:"osm-base-layer",layerType:"OpenStreetMap",title:"Open Street Map",showLegend:!1,visibility:!0,opacity:1}]},"dark-gray-vector":{id:"dark-gray-vector",classic:!0,get thumbnailUrl(){return Object(n.b)("esri/images/basemap/dark-gray-vector.jpg")},baseMapLayers:[{id:"dark-gray-base-layer",styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/5e9b3685f4c24d8781073dd928ebda50/resources/styles/root.json",layerType:"VectorTileLayer",title:"Dark Gray Base",visibility:!0,opacity:1},{id:"dark-gray-reference-layer",styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/747cb7a5329c478cbe6981076cc879c5/resources/styles/root.json",layerType:"VectorTileLayer",title:"Dark Gray Reference",isReference:!0,visibility:!0,opacity:1}]},"gray-vector":{id:"gray-vector",classic:!0,get thumbnailUrl(){return Object(n.b)("esri/images/basemap/gray-vector.jpg")},baseMapLayers:[{id:"gray-base-layer",styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/291da5eab3a0412593b66d384379f89f/resources/styles/root.json",layerType:"VectorTileLayer",title:"Light Gray Base",visibility:!0,opacity:1},{id:"gray-reference-layer",styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/1768e8369a214dfab4e2167d5c5f2454/resources/styles/root.json",layerType:"VectorTileLayer",title:"Light Gray Reference",isReference:!0,visibility:!0,opacity:1}]},"streets-vector":{id:"streets-vector",classic:!0,get thumbnailUrl(){return Object(n.b)("esri/images/basemap/streets-vector.jpg")},baseMapLayers:[{id:"streets-vector-base-layer",styleUrl:"//cdn.arcgis.com/sharing/rest/content/items/de26a3cf4cc9451298ea173c4b324736/resources/styles/root.json",layerType:"VectorTileLayer",title:"World Streets",visibility:!0,opacity:1}]},"topo-vector":{id:"topo-vector",classic:!0,get thumbnailUrl(){return Object(n.b)("esri/images/basemap/topo-vector.jpg")},baseMapLayers:[{id:"world-hillshade-layer",url:"//services.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Hillshade",showLegend:!1,visibility:!0,opacity:1},{id:"topo-vector-base-layer",styleUrl:"//cdn.arcgis.com/sharing/rest/content/items/7dc6cea0b1764a1f9af2e679f642f0f5/resources/styles/root.json",layerType:"VectorTileLayer",title:"World Topo",visibility:!0,opacity:1}]},"streets-night-vector":{id:"streets-night-vector",classic:!0,get thumbnailUrl(){return Object(n.b)("esri/images/basemap/streets-night.jpg")},baseMapLayers:[{id:"streets-night-vector-base-layer",styleUrl:"//cdn.arcgis.com/sharing/rest/content/items/86f556a2d1fd468181855a35e344567f/resources/styles/root.json",layerType:"VectorTileLayer",title:"World Streets Night",visibility:!0,opacity:1}]},"streets-relief-vector":{id:"streets-relief-vector",classic:!0,get thumbnailUrl(){return Object(n.b)("esri/images/basemap/streets-relief.jpg")},baseMapLayers:[{id:"world-hillshade-layer",url:"//services.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Hillshade",showLegend:!1,visibility:!0,opacity:1},{id:"streets-relief-vector-base-layer",styleUrl:"//www.arcgis.com/sharing/rest/content/items/b266e6d17fc345b498345613930fbd76/resources/styles/root.json",title:"World Streets Relief",layerType:"VectorTileLayer",visibility:!0,opacity:1}]},"streets-navigation-vector":{id:"streets-navigation-vector",classic:!0,get thumbnailUrl(){return Object(n.b)("esri/images/basemap/streets-navigation.jpg")},baseMapLayers:[{id:"streets-navigation-vector-base-layer",styleUrl:"//cdn.arcgis.com/sharing/rest/content/items/63c47b7177f946b49902c24129b87252/resources/styles/root.json",layerType:"VectorTileLayer",title:"World Streets Navigation",visibility:!0,opacity:1}]},"arcgis-imagery":{get thumbnailUrl(){return Object(n.b)("esri/images/basemap/hybrid.jpg")},title:"Imagery Hybrid",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Imagery",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/World_Imagery/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Imagery:Labels",title:"Hybrid Reference Layer",isReference:!0}]},"arcgis-imagery-standard":{get thumbnailUrl(){return Object(n.b)("esri/images/basemap/satellite.jpg")},title:"Imagery",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Imagery",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/World_Imagery/MapServer"}]},"arcgis-imagery-labels":{title:"Hybrid [Reference]",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Imagery:Labels",title:"Hybrid Reference Layer",isReference:!0}]},"arcgis-light-gray":{get thumbnailUrl(){return Object(n.b)("esri/images/basemap/gray-vector.jpg")},title:"Light Gray Canvas",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:LightGray:Base",title:"Light Gray Canvas Base"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:LightGray:Labels",title:"Light Gray Canvas Labels",isReference:!0}]},"arcgis-dark-gray":{get thumbnailUrl(){return Object(n.b)("esri/images/basemap/dark-gray.jpg")},title:"Dark Gray Canvas",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:DarkGray:Base",title:"Dark Gray Canvas Base"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:DarkGray:Labels",title:"Dark Gray Canvas Labels",isReference:!0}]},"arcgis-navigation":{get thumbnailUrl(){return Object(n.b)("esri/images/basemap/streets-navigation.jpg")},title:"Navigation",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Navigation",title:"World Navigation Map"}]},"arcgis-navigation-night":{title:"Navigation (Dark Mode)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:NavigationNight",title:"World Navigation Map (Dark Mode)"}]},"arcgis-streets":{get thumbnailUrl(){return Object(n.b)("esri/images/basemap/streets-vector.jpg")},title:"Streets",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Streets",title:"World Street Map"}]},"arcgis-streets-night":{get thumbnailUrl(){return Object(n.b)("esri/images/basemap/streets-night.jpg")},title:"Streets (Night)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:StreetsNight",title:"World Street Map (Night)"}]},"arcgis-streets-relief":{get thumbnailUrl(){return Object(n.b)("esri/images/basemap/streets-relief.jpg")},title:"Streets (with Relief)",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:StreetsRelief:Base",title:"World Street Map (with Relief)"}]},"arcgis-topographic":{get thumbnailUrl(){return Object(n.b)("esri/images/basemap/topo.jpg")},title:"Topographic",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Topographic:Base",title:"World Topographic Map"}]},"arcgis-oceans":{get thumbnailUrl(){return Object(n.b)("esri/images/basemap/oceans.jpg")},title:"Oceans",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Ocean Base",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Oceans:Labels",title:"World Ocean Reference",isReference:!0}]},"osm-standard":{title:"OpenStreetMap",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:Standard",title:"OpenStreetMap"}]},"osm-standard-relief":{title:"OpenStreetMap (with relief)",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:StandardRelief:Base",layerType:"VectorTileLayer",title:"OpenStreetMap Relief Base"}]},"osm-streets":{title:"OpenStreetMap (Streets)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:Streets",title:"OpenStreetMap (Streets)"}]},"osm-streets-relief":{title:"OpenStreetMap (Streets with relief)",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:StreetsRelief:Base",layerType:"VectorTileLayer",title:"OpenStreetMap Relief Base"}]},"osm-light-gray":{title:"OpenStreetMap (Light Gray Canvas)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:LightGray:Base",title:"OSM (Light Gray Base)"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:LightGray:Labels",title:"OSM (Light Gray Reference)",isReference:!0}]},"osm-dark-gray":{title:"OpenStreetMap (Dark Gray Canvas)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:DarkGray:Base",title:"OSM (Dark Gray Base)"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:DarkGray:Labels",title:"OSM (Dark Gray Reference)",isReference:!0}]},"arcgis-terrain":{title:"Terrain with Labels",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Terrain:Base",title:"World Terrain Base"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Terrain:Detail",title:"World Terrain Reference",isReference:!0}]},"arcgis-community":{title:"Community",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Community",title:"Community"}]},"arcgis-charted-territory":{title:"Charted Territory",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:ChartedTerritory:Base",title:"Charted Territory"}]},"arcgis-colored-pencil":{title:"Colored Pencil",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:ColoredPencil",title:"Colored Pencil"}]},"arcgis-nova":{title:"Nova",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Nova",title:"Nova"}]},"arcgis-modern-antique":{title:"Modern Antique",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:ModernAntique:Base",title:"Modern Antique"}]},"arcgis-midcentury":{title:"Mid-Century",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Midcentury",title:"Mid-Century"}]},"arcgis-newspaper":{title:"Newspaper",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Newspaper",title:"Newspaper"}]},"arcgis-hillshade-light":{title:"Hillshade",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"}]},"arcgis-hillshade-dark":{title:"Hillshade (Dark)",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade (Dark)",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade_Dark/MapServer"}]},"arcgis-human-geography":{title:"Human Geography",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:HumanGeography:Base",title:"Human Geography Base"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:HumanGeography:Detail",title:"Human Geography Detail",isReference:!0},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:HumanGeography:Label",title:"Human Geography Label",isReference:!0}]},"arcgis-human-geography-dark":{title:"Human Geography (Dark)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:HumanGeographyDark:Base",title:"Human Geography Dark Base"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:HumanGeographyDark:Detail",title:"Human Geography Dark Detail",isReference:!0},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:HumanGeographyDark:Label",title:"Human Geography Dark Label",isReference:!0}]}}},782:function(e,t,r){"use strict"
r.r(t),r.d(t,"default",(function(){return T}))
var n,s=r(968),i=r(993),a=r(1179),o=r(1095),l=r(972),c=r(234),u=r(1046),h=r(1329),d=r(233),p=r(23),b=r(973),y=r(374),f=r(970),m=(r(971),r(969)),g=r(974),v=r(769),O=r(1028),j=r(1154),_=r(780),w=r(1518)
let S=0
const L="esri.Basemap"
let M=n=class extends(Object(l.b)(u.a)){constructor(e){super(e),this.id=null,this.portalItem=null,this.spatialReference=null,this.thumbnailUrl=null,this.title="Basemap",this.id=Date.now().toString(16)+"-basemap-"+S++,this.baseLayers=new i.a,this.referenceLayers=new i.a
const t=e=>{e.parent&&e.parent!==this&&"remove"in e.parent&&e.parent.remove(e),e.parent=this,"elevation"===e.type&&d.a.getLogger(this.declaredClass).error(`Layer '${e.title}, id:${e.id}' of type '${e.type}' is not supported as a basemap layer and will therefore be ignored.`)},r=e=>{e.parent=null}
this.baseLayers.on("after-add",e=>t(e.item)),this.referenceLayers.on("after-add",e=>t(e.item)),this.baseLayers.on("after-remove",e=>r(e.item)),this.referenceLayers.on("after-remove",e=>r(e.item))}initialize(){this.when().catch(e=>{d.a.getLogger(this.declaredClass).error("#load()",`Failed to load basemap (title: '${this.title}', id: '${this.id}')`,e)}),this.resourceInfo&&this.read(this.resourceInfo.data,this.resourceInfo.context)}destroy(){var e
const t=this.baseLayers.removeAll()
for(const e of t)e.destroy()
const r=this.referenceLayers.removeAll()
for(const e of r)e.destroy()
this.baseLayers.destroy(),this.referenceLayers.destroy(),null!=(e=this.portalItem)&&e.destroy(),this.portalItem=null}normalizeCtorArgs(e){return e&&"resourceInfo"in e&&(this._set("resourceInfo",e.resourceInfo),delete(e={...e}).resourceInfo),e}set baseLayers(e){this._set("baseLayers",Object(a.b)(e,this._get("baseLayers")))}_writeBaseLayers(e,t,r){const n=[]
e?(r={...r,layerContainerType:"basemap"},this.baseLayers.forEach(e=>{const t=Object(w.a)(e,r.webmap?r.webmap.getLayerJSONFromResourceInfo(e):null,r)
Object(p.l)(t)&&n.push(t)}),this.referenceLayers.forEach(e=>{const t=Object(w.a)(e,r.webmap?r.webmap.getLayerJSONFromResourceInfo(e):null,r)
Object(p.l)(t)&&("scene"!==e.type&&(t.isReference=!0),n.push(t))}),t.baseMapLayers=n):t.baseMapLayers=n}set referenceLayers(e){this._set("referenceLayers",Object(a.b)(e,this._get("referenceLayers")))}writeTitle(e,t){t.title=e||"Basemap"}load(e){return this.addResolvingPromise(this._loadFromSource(e)),Promise.resolve(this)}loadAll(){return Object(h.a)(this,e=>{e(this.baseLayers,this.referenceLayers)})}clone(){const e={id:this.id,title:this.title,portalItem:this.portalItem,baseLayers:this.baseLayers.slice(),referenceLayers:this.referenceLayers.slice()}
return this.loaded&&(e.loadStatus="loaded"),new n({resourceInfo:this.resourceInfo}).set(e)}read(e,t){this.resourceInfo||this._set("resourceInfo",{data:e,context:t}),super.read(e,t)}write(e,t){return e=e||{},t&&t.origin||(t={origin:"web-map",...t}),super.write(e,t),!this.loaded&&this.resourceInfo&&this.resourceInfo.data.baseMapLayers&&(e.baseMapLayers=this.resourceInfo.data.baseMapLayers.map(e=>{const t=Object(c.a)(e)
return t.url&&Object(y.B)(t.url)&&(t.url="https:"+t.url),t.templateUrl&&Object(y.B)(t.templateUrl)&&(t.templateUrl="https:"+t.templateUrl),t})),e}async _loadFromSource(e){const{resourceInfo:t,portalItem:r}=this
Object(b.q)(e)
const n=[]
if(t){const r=t.context?t.context.url:null
if(n.push(this._loadLayersFromJSON(t.data,r,e)),t.data.id&&!t.data.title){const e=t.data.id
n.push(Object(_.getBasemapTitle)(e).then(e=>{e&&this.read({title:e},t.context)}))}}else r&&n.push(this._loadFromItem(r,e))
await Promise.all(n)}async _loadLayersFromJSON(e,t,n){const s=this.resourceInfo&&this.resourceInfo.context,i=this.portalItem&&this.portalItem.portal||s&&s.portal||null,a=s&&"web-scene"===s.origin?"web-scene":"web-map",{populateOperationalLayers:o}=await Promise.all([r.e(1),r.e(30),r.e(251)]).then(r.bind(null,1781)),l=[]
if(Object(b.q)(n),e.baseMapLayers&&Array.isArray(e.baseMapLayers)){const r={context:{origin:a,url:t,portal:i,layerContainerType:"basemap"},defaultLayerType:"DefaultTileLayer"},n=e=>"web-scene"===a&&"ArcGISSceneServiceLayer"===e.layerType||e.isReference,s=o(this.baseLayers,e.baseMapLayers.filter(e=>!n(e)),r)
l.push(s)
const c=o(this.referenceLayers,e.baseMapLayers.filter(n),r)
l.push(c)}await Object(b.g)(l)}async _loadFromItem(e,t){var r,n
const s=await e.load(t),i=await s.fetchData("json",t),a=Object(y.Q)(null!=(r=e.itemUrl)?r:"")
return this._set("resourceInfo",{data:null!=(n=i.baseMap)?n:{},context:{origin:"Web Scene"===e.type?"web-scene":"web-map",portal:e.portal||O.a.getDefault(),url:a}}),this.read(this.resourceInfo.data,this.resourceInfo.context),this.read({spatialReference:i.spatialReference},this.resourceInfo.context),this.read({title:e.title,thumbnailUrl:e.thumbnailUrl},{origin:"portal-item",portal:e.portal||O.a.getDefault(),url:a}),this._loadLayersFromJSON(this.resourceInfo.data,a,t)}static fromId(e){const t=_.esriBasemapDefinitions[e]
if(t){if(t.deprecated){let t=null
"dark-gray"===e?t="dark-gray-vector":"gray"===e?t="gray-vector":"streets"===e?t="streets-vector":"topo"===e&&(t="topo-vector"),Object(o.a)(d.a.getLogger(L),`The ${e} basemap has entered mature support and is no longer being updated.`,{replacement:t,see:"https://arcg.is/1iq8aD",warnOnce:!0})}return n.fromJSON(t)}return null}}
Object(s.a)([Object(f.b)({json:{write:{ignoreOrigin:!0,target:"baseMapLayers",writer(e,t,r,n){this._writeBaseLayers(e,t,n)}},origins:{"web-scene":{write:{ignoreOrigin:!0,target:{baseMapLayers:{type:i.a}},writer(e,t,r,n){this._writeBaseLayers(e,t,n)}}}}}})],M.prototype,"baseLayers",null),Object(s.a)([Object(f.b)({type:String,json:{origins:{"web-scene":{write:!0}}}})],M.prototype,"id",void 0),Object(s.a)([Object(f.b)({type:j.default})],M.prototype,"portalItem",void 0),Object(s.a)([Object(f.b)()],M.prototype,"referenceLayers",null),Object(s.a)([Object(f.b)({readOnly:!0})],M.prototype,"resourceInfo",void 0),Object(s.a)([Object(f.b)({type:v.default})],M.prototype,"spatialReference",void 0),Object(s.a)([Object(f.b)()],M.prototype,"thumbnailUrl",void 0),Object(s.a)([Object(f.b)({type:String,json:{origins:{"web-scene":{write:{isRequired:!0}}}}})],M.prototype,"title",void 0),Object(s.a)([Object(g.a)("title")],M.prototype,"writeTitle",null),M=n=Object(s.a)([Object(m.a)(L)],M)
const T=M},783:function(e,t,r){"use strict"
r.r(t),r.d(t,"default",(function(){return w}))
var n=r(968),s=r(782),i=r(1517),a=r(975),o=r(1279),l=r(1002),c=r(23),u=r(970),h=r(987),d=(r(445),r(969)),p=r(1037)
function b(e){var t,r
return!(null==e||!e.loaded||null==(t=Object(p.b)(e))||null==(r=t.operations)||!r.supportsEditing||"editingEnabled"in e&&!Object(p.a)(e))}var y=r(1505),f=r(1649),m=r(233),g=r(971)
const v={"world-elevation":{id:"worldElevation",url:"//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",layerType:"ArcGISTiledElevationServiceLayer"},"world-topobathymetry":{id:"worldTopoBathymetry",url:"//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/TopoBathy3D/ImageServer",layerType:"ArcGISTiledElevationServiceLayer"}}
var O=r(1650),j=r(1651)
let _=class extends(Object(j.a)(Object(O.a)(l.a.EventedMixin(a.a)))){constructor(e){super(e),this.allLayers=new o.a({getCollections:()=>{var e,t,r
return[null==(e=this.basemap)?void 0:e.baseLayers,null==(t=this.ground)?void 0:t.layers,this.layers,null==(r=this.basemap)?void 0:r.referenceLayers]},getChildrenFunction:e=>"layers"in e?e.layers:null}),this.allTables=Object(f.a)(this),this.basemap=null,this.editableLayers=new o.a({getCollections:()=>[this.allLayers],itemFilterFunction:b}),this.ground=new i.a,this._basemapCache=Object(y.b)()}destroy(){var e,t
this.allLayers.destroy(),this.allTables.destroy(),this.editableLayers.destroy(),null!=(e=this.ground)&&e.destroy(),null!=(t=this.basemap)&&t.destroy(),Object(y.c)(this._basemapCache),this._basemapCache=null}castBasemap(e){return Object(y.d)(e,this._basemapCache)}castGround(e){const t=function(e){let t=null
if("string"==typeof e)if(e in v){const r=v[e]
t=new i.a({resourceInfo:{data:{layers:[r]}}})}else m.a.getLogger("esri.support.groundUtils").warn(`Unable to find ground definition for: ${e}. Try "world-elevation"`)
else t=Object(g.m)(i.a,e)
return t}(e)
return Object(c.k)(t)?this._get("ground"):t}findLayerById(e){return this.allLayers.find(t=>t.id===e)}findTableById(e){return this.allTables.find(t=>t.id===e)}}
Object(n.a)([Object(u.b)({readOnly:!0,dependsOn:[]})],_.prototype,"allLayers",void 0),Object(n.a)([Object(u.b)({readOnly:!0})],_.prototype,"allTables",void 0),Object(n.a)([Object(u.b)({type:s.default})],_.prototype,"basemap",void 0),Object(n.a)([Object(h.a)("basemap")],_.prototype,"castBasemap",null),Object(n.a)([Object(u.b)({readOnly:!0})],_.prototype,"editableLayers",void 0),Object(n.a)([Object(u.b)({type:i.a,nonNullable:!0})],_.prototype,"ground",void 0),Object(n.a)([Object(h.a)("ground")],_.prototype,"castGround",null),_=Object(n.a)([Object(d.a)("esri.Map")],_)
const w=_},979:function(e,t,r){"use strict"
r.d(t,"a",(function(){return i}))
var n=r(976),s=r(970)
function i(e,t={}){var r
const i=e instanceof n.a?e:new n.a(e,t),a={type:null==(r=null==t?void 0:t.ignoreUnknown)||r?i.apiValues:String,json:{type:i.jsonValues,read:!(null!=t&&t.readOnly)&&{reader:i.read},write:{writer:i.write}}}
return void 0!==(null==t?void 0:t.readOnly)&&(a.readOnly=!!t.readOnly),void 0!==(null==t?void 0:t.default)&&(a.json.default=t.default),void 0!==(null==t?void 0:t.name)&&(a.json.name=t.name),void 0!==(null==t?void 0:t.nonNullable)&&(a.nonNullable=t.nonNullable),Object(s.b)(a)}},981:function(e,t,r){"use strict"
function n(){return[0,0,0]}function s(e){return[e[0],e[1],e[2]]}function i(e,t,r){return[e,t,r]}function a(e){const t=[0,0,0],r=Math.min(3,e.length)
for(let n=0;n<r;++n)t[n]=e[n]
return t}function o(e,t){return new Float64Array(e,t,3)}function l(){return i(1,1,1)}function c(){return i(1,0,0)}function u(){return i(0,1,0)}function h(){return i(0,0,1)}r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f})),r.d(t,"c",(function(){return d})),r.d(t,"d",(function(){return s})),r.d(t,"e",(function(){return o})),r.d(t,"f",(function(){return n})),r.d(t,"g",(function(){return a})),r.d(t,"h",(function(){return i})),r.d(t,"i",(function(){return h}))
const d=[0,0,0],p=l(),b=c(),y=u(),f=h()
Object.freeze(Object.defineProperty({__proto__:null,ONES:p,UNIT_X:b,UNIT_Y:y,UNIT_Z:f,ZEROS:d,clone:s,create:n,createView:o,fromArray:a,fromValues:i,ones:l,unitX:c,unitY:u,unitZ:h,zeros:function(){return[0,0,0]}},Symbol.toStringTag,{value:"Module"}))},982:function(e,t,r){"use strict"
r.d(t,"c",(function(){return u}))
var n=r(971),s=r(770)
r.d(t,"a",(function(){return s.default}))
var i=r(1004),a=r(1055),o=r(992)
r.d(t,"b",(function(){return o.a}))
var l=r(773),c=r(1021)
r(769),r(1036),r(983)
const u={base:i.a,key:"type",typeMap:{extent:s.default,multipoint:a.a,point:o.a,polyline:c.a,polygon:l.default}}
Object(n.k)(u)},983:function(e,t,r){"use strict"
r.d(t,"a",(function(){return y})),r.d(t,"b",(function(){return g})),r.d(t,"c",(function(){return f})),r.d(t,"d",(function(){return u})),r.d(t,"e",(function(){return h})),r.d(t,"f",(function(){return d})),r.d(t,"g",(function(){return b})),r.d(t,"h",(function(){return p}))
var n=r(23),s=r(770),i=r(1004),a=r(1055),o=r(992),l=r(773),c=r(1021)
function u(e){return void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax}function h(e){return void 0!==e.points}function d(e){return void 0!==e.x&&void 0!==e.y}function p(e){return void 0!==e.paths}function b(e){return void 0!==e.rings}function y(e){return Object(n.k)(e)?null:e instanceof i.a?e:d(e)?o.a.fromJSON(e):p(e)?c.a.fromJSON(e):b(e)?l.default.fromJSON(e):h(e)?a.a.fromJSON(e):u(e)?s.default.fromJSON(e):null}function f(e){return e?d(e)?"esriGeometryPoint":p(e)?"esriGeometryPolyline":b(e)?"esriGeometryPolygon":u(e)?"esriGeometryEnvelope":h(e)?"esriGeometryMultipoint":null:null}const m={esriGeometryPoint:o.a,esriGeometryPolyline:c.a,esriGeometryPolygon:l.default,esriGeometryEnvelope:s.default,esriGeometryMultipoint:a.a}
function g(e){return e&&m[e]||null}},985:function(e,t,r){"use strict"
r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return h})),r.d(t,"d",(function(){return B})),r.d(t,"e",(function(){return q})),r.d(t,"f",(function(){return k})),r.d(t,"g",(function(){return F})),r.d(t,"h",(function(){return d})),r.d(t,"i",(function(){return I})),r.d(t,"j",(function(){return l})),r.d(t,"k",(function(){return c})),r.d(t,"l",(function(){return a})),r.d(t,"m",(function(){return v})),r.d(t,"n",(function(){return w})),r.d(t,"o",(function(){return S})),r.d(t,"p",(function(){return f})),r.d(t,"q",(function(){return L})),r.d(t,"r",(function(){return g})),r.d(t,"s",(function(){return G})),r.d(t,"t",(function(){return C})),r.d(t,"u",(function(){return i})),r.d(t,"v",(function(){return M})),r.d(t,"w",(function(){return _})),r.d(t,"x",(function(){return j})),r.d(t,"y",(function(){return O})),r.d(t,"z",(function(){return E})),r.d(t,"A",(function(){return N})),r.d(t,"B",(function(){return o})),r.d(t,"C",(function(){return T})),r.d(t,"D",(function(){return W})),r.d(t,"E",(function(){return R})),r.d(t,"F",(function(){return D})),r.d(t,"G",(function(){return p})),r.d(t,"H",(function(){return y})),r.d(t,"I",(function(){return m}))
var n=r(981),s=r(1016)
function i(e){const t=e[0],r=e[1],n=e[2]
return Math.sqrt(t*t+r*r+n*n)}function a(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function o(e,t,r,n){return e[0]=t,e[1]=r,e[2]=n,e}function l(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e}function c(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e}function u(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e}function h(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e}function d(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e}function p(e,t){return e[0]=Math.abs(t[0]),e[1]=Math.abs(t[1]),e[2]=Math.abs(t[2]),e}function b(e,t){return e[0]=Math.sign(t[0]),e[1]=Math.sign(t[1]),e[2]=Math.sign(t[2]),e}function y(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e}function f(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e}function m(e,t,r,n){return e[0]=t[0]+r[0]*n,e[1]=t[1]+r[1]*n,e[2]=t[2]+r[2]*n,e}function g(e,t){const r=t[0]-e[0],n=t[1]-e[1],s=t[2]-e[2]
return Math.sqrt(r*r+n*n+s*s)}function v(e,t){const r=t[0]-e[0],n=t[1]-e[1],s=t[2]-e[2]
return r*r+n*n+s*s}function O(e){const t=e[0],r=e[1],n=e[2]
return t*t+r*r+n*n}function j(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}function _(e,t){const r=t[0],n=t[1],s=t[2]
let i=r*r+n*n+s*s
return i>0&&(i=1/Math.sqrt(i),e[0]=t[0]*i,e[1]=t[1]*i,e[2]=t[2]*i),e}function w(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function S(e,t,r){const n=t[0],s=t[1],i=t[2],a=r[0],o=r[1],l=r[2]
return e[0]=s*l-i*o,e[1]=i*a-n*l,e[2]=n*o-s*a,e}function L(e,t,r,n){const s=t[0],i=t[1],a=t[2]
return e[0]=s+n*(r[0]-s),e[1]=i+n*(r[1]-i),e[2]=a+n*(r[2]-a),e}function M(e,t,r){const n=t[0],s=t[1],i=t[2]
return e[0]=r[0]*n+r[4]*s+r[8]*i+r[12],e[1]=r[1]*n+r[5]*s+r[9]*i+r[13],e[2]=r[2]*n+r[6]*s+r[10]*i+r[14],e}function T(e,t,r){const n=t[0],s=t[1],i=t[2]
return e[0]=n*r[0]+s*r[3]+i*r[6],e[1]=n*r[1]+s*r[4]+i*r[7],e[2]=n*r[2]+s*r[5]+i*r[8],e}function E(e,t,r){const n=r[0],s=r[1],i=r[2],a=r[3],o=t[0],l=t[1],c=t[2]
let u=s*c-i*l,h=i*o-n*c,d=n*l-s*o,p=s*d-i*h,b=i*u-n*d,y=n*h-s*u
const f=2*a
return u*=f,h*=f,d*=f,p*=2,b*=2,y*=2,e[0]=o+u+p,e[1]=l+h+b,e[2]=c+d+y,e}function I(e,t,r,n){const s=[],i=[]
return s[0]=t[0]-r[0],s[1]=t[1]-r[1],s[2]=t[2]-r[2],i[0]=s[0]*Math.cos(n)-s[1]*Math.sin(n),i[1]=s[0]*Math.sin(n)+s[1]*Math.cos(n),i[2]=s[2],e[0]=i[0]+r[0],e[1]=i[1]+r[1],e[2]=i[2]+r[2],e}function R(e,t){a(A,e),a(x,t),_(A,A),_(x,x)
const r=w(A,x)
return r>1?0:r<-1?Math.PI:Math.acos(r)}const A=Object(n.f)(),x=Object(n.f)()
function C(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}function k(e,t){if(e===t)return!0
const r=e[0],n=e[1],i=e[2],a=t[0],o=t[1],l=t[2],c=Object(s.c)()
return Math.abs(r-a)<=c*Math.max(1,Math.abs(r),Math.abs(a))&&Math.abs(n-o)<=c*Math.max(1,Math.abs(n),Math.abs(o))&&Math.abs(i-l)<=c*Math.max(1,Math.abs(i),Math.abs(l))}function N(e,t,r){const n=r[0]-t[0],s=r[1]-t[1],i=r[2]-t[2]
let a=n*n+s*s+i*i
return a>0?(a=1/Math.sqrt(a),e[0]=n*a,e[1]=s*a,e[2]=i*a,e):(e[0]=0,e[1]=0,e[2]=0,e)}const D=c,P=u,U=h,G=g,q=v,W=i,B=O,F=Object.freeze(Object.defineProperty({__proto__:null,abs:p,add:l,angle:R,bezier:function(e,t,r,n,s,i){const a=1-i,o=a*a,l=i*i,c=o*a,u=3*i*o,h=3*l*a,d=l*i
return e[0]=t[0]*c+r[0]*u+n[0]*h+s[0]*d,e[1]=t[1]*c+r[1]*u+n[1]*h+s[1]*d,e[2]=t[2]*c+r[2]*u+n[2]*h+s[2]*d,e},ceil:function(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e},copy:a,cross:S,direction:N,dist:G,distance:g,div:U,divide:h,dot:w,equals:k,exactEquals:C,floor:d,hermite:function(e,t,r,n,s,i){const a=i*i,o=a*(2*i-3)+1,l=a*(i-2)+i,c=a*(i-1),u=a*(3-2*i)
return e[0]=t[0]*o+r[0]*l+n[0]*c+s[0]*u,e[1]=t[1]*o+r[1]*l+n[1]*c+s[1]*u,e[2]=t[2]*o+r[2]*l+n[2]*c+s[2]*u,e},inverse:function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e},len:W,length:i,lerp:L,max:function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e},min:y,mul:P,multiply:u,negate:j,normalize:_,random:function(e,t){t=t||1
const r=s.a,n=2*r()*Math.PI,i=2*r()-1,a=Math.sqrt(1-i*i)*t
return e[0]=Math.cos(n)*a,e[1]=Math.sin(n)*a,e[2]=i*t,e},rotateX:function(e,t,r,n){const s=[],i=[]
return s[0]=t[0]-r[0],s[1]=t[1]-r[1],s[2]=t[2]-r[2],i[0]=s[0],i[1]=s[1]*Math.cos(n)-s[2]*Math.sin(n),i[2]=s[1]*Math.sin(n)+s[2]*Math.cos(n),e[0]=i[0]+r[0],e[1]=i[1]+r[1],e[2]=i[2]+r[2],e},rotateY:function(e,t,r,n){const s=[],i=[]
return s[0]=t[0]-r[0],s[1]=t[1]-r[1],s[2]=t[2]-r[2],i[0]=s[2]*Math.sin(n)+s[0]*Math.cos(n),i[1]=s[1],i[2]=s[2]*Math.cos(n)-s[0]*Math.sin(n),e[0]=i[0]+r[0],e[1]=i[1]+r[1],e[2]=i[2]+r[2],e},rotateZ:I,round:function(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e},scale:f,scaleAndAdd:m,set:o,sign:b,sqrDist:q,sqrLen:B,squaredDistance:v,squaredLength:O,str:function(e){return"vec3("+e[0]+", "+e[1]+", "+e[2]+")"},sub:D,subtract:c,transformMat3:T,transformMat4:M,transformQuat:E},Symbol.toStringTag,{value:"Module"}))},990:function(e,t,r){"use strict"
r.d(t,"a",(function(){return d}))
var n,s,i=r(1162),a=r(991),o=r(23),l=r(971)
function c(e){return Object(a.f)(Object(l.e)(e),0,255)}function u(e,t,r){return e=Number(e),isNaN(e)?r:e<t?t:e>r?r:e}class h{static blendColors(e,t,r,n=new h){return n.r=Math.round(e.r+(t.r-e.r)*r),n.g=Math.round(e.g+(t.g-e.g)*r),n.b=Math.round(e.b+(t.b-e.b)*r),n.a=e.a+(t.a-e.a)*r,n._sanitize()}static fromRgb(e,t){const r=e.toLowerCase().match(/^(rgba?|hsla?)\(([\s\.\-,%0-9]+)\)/)
if(r){const e=r[2].split(/\s*,\s*/),n=r[1]
if("rgb"===n&&3===e.length||"rgba"===n&&4===e.length){const r=e[0]
if("%"===r.charAt(r.length-1)){const r=e.map(e=>2.56*parseFloat(e))
return 4===e.length&&(r[3]=parseFloat(e[3])),h.fromArray(r,t)}return h.fromArray(e.map(e=>parseFloat(e)),t)}if("hsl"===n&&3===e.length||"hsla"===n&&4===e.length)return h.fromArray(Object(i.d)(parseFloat(e[0]),parseFloat(e[1])/100,parseFloat(e[2])/100,parseFloat(e[3])),t)}return null}static fromHex(e,t=new h){if(4!==e.length&&7!==e.length||"#"!==e[0])return null
const r=4===e.length?4:8,n=(1<<r)-1
let s=Number("0x"+e.substr(1))
return isNaN(s)?null:(["b","g","r"].forEach(e=>{const i=s&n
s>>=r,t[e]=4===r?17*i:i}),t.a=1,t)}static fromArray(e,t=new h){return t._set(Number(e[0]),Number(e[1]),Number(e[2]),Number(e[3])),isNaN(t.a)&&(t.a=1),t._sanitize()}static fromString(e,t){const r=Object(i.e)(e)?Object(i.a)(e):null
return r&&h.fromArray(r,t)||h.fromRgb(e,t)||h.fromHex(e,t)}static fromJSON(e){return e&&new h([e[0],e[1],e[2],e[3]/255])}static toUnitRGB(e){return Object(o.l)(e)?[e.r/255,e.g/255,e.b/255]:null}static toUnitRGBA(e){return Object(o.l)(e)?[e.r/255,e.g/255,e.b/255,null!=e.a?e.a:1]:null}constructor(e){this.r=255,this.g=255,this.b=255,this.a=1,e&&this.setColor(e)}get isBright(){return.299*this.r+.587*this.g+.114*this.b>=127}setColor(e){var t,r,n,s
return"string"==typeof e?h.fromString(e,this):Array.isArray(e)?h.fromArray(e,this):(this._set(null!=(t=e.r)?t:0,null!=(r=e.g)?r:0,null!=(n=e.b)?n:0,null!=(s=e.a)?s:1),e instanceof h||this._sanitize()),this}toRgb(){return[this.r,this.g,this.b]}toRgba(){return[this.r,this.g,this.b,this.a]}toHex(){const e=this.r.toString(16),t=this.g.toString(16),r=this.b.toString(16)
return`#${e.length<2?"0"+e:e}${t.length<2?"0"+t:t}${r.length<2?"0"+r:r}`}toCss(e=!1){const t=this.r+", "+this.g+", "+this.b
return e?`rgba(${t}, ${this.a})`:`rgb(${t})`}toString(){return this.toCss(!0)}toJSON(){return this.toArray()}toArray(e=h.AlphaMode.ALWAYS){const t=c(this.r),r=c(this.g),n=c(this.b)
return e===h.AlphaMode.ALWAYS||1!==this.a?[t,r,n,c(255*this.a)]:[t,r,n]}clone(){return new h(this.toRgba())}hash(){return this.r<<24|this.g<<16|this.b<<8|255*this.a}equals(e){return Object(o.l)(e)&&e.r===this.r&&e.g===this.g&&e.b===this.b&&e.a===this.a}_sanitize(){return this.r=Math.round(u(this.r,0,255)),this.g=Math.round(u(this.g,0,255)),this.b=Math.round(u(this.b,0,255)),this.a=u(this.a,0,1),this}_set(e,t,r,n){this.r=e,this.g=t,this.b=r,this.a=n}}h.prototype.declaredClass="esri.Color",n=h||(h={}),(s=n.AlphaMode||(n.AlphaMode={}))[s.ALWAYS=0]="ALWAYS",s[s.UNLESS_OPAQUE=1]="UNLESS_OPAQUE"
const d=h},991:function(e,t,r){"use strict"
r.d(t,"a",(function(){return T})),r.d(t,"b",(function(){return y})),r.d(t,"c",(function(){return L})),r.d(t,"d",(function(){return f})),r.d(t,"e",(function(){return S})),r.d(t,"f",(function(){return o})),r.d(t,"g",(function(){return j})),r.d(t,"h",(function(){return d})),r.d(t,"i",(function(){return m})),r.d(t,"j",(function(){return O})),r.d(t,"k",(function(){return M})),r.d(t,"l",(function(){return l})),r.d(t,"m",(function(){return h})),r.d(t,"n",(function(){return u})),r.d(t,"o",(function(){return a})),r.d(t,"p",(function(){return c})),r.d(t,"q",(function(){return p})),r.d(t,"r",(function(){return b})),r.d(t,"s",(function(){return w})),r(23)
var n=r(985),s=r(1012)
const i=new Float32Array(1)
function a(e){--e
for(let t=1;t<32;t<<=1)e|=e>>t
return e+1}function o(e,t,r){return Math.min(Math.max(e,t),r)}function l(e){return 0==(e&e-1)}function c(e){return e--,e|=e>>1,e|=e>>2,e|=e>>4,e|=e>>8,e|=e>>16,++e}function u(e){return 10**Math.ceil(Math.LOG10E*Math.log(e))}function h(e,t,r){return e+(t-e)*r}function d(e){return e*Math.PI/180}function p(e){return 180*e/Math.PI}function b(e,t=1e-6){return(e<0?-1:1)/Math.max(Math.abs(e),t)}function y(e){return Math.acos(o(e,-1,1))}function f(e){return Math.asin(o(e,-1,1))}function m(e,t,r=1e-6){return e===t||!(!Number.isFinite(e)||!Number.isFinite(t))&&(e>t?e-t:t-e)<=r}const g=new DataView(new ArrayBuffer(Float64Array.BYTES_PER_ELEMENT))
const v=BigInt("1000000")
function O(e,t,r=1e-6){if(e===t)return!0
if(!Number.isFinite(e)||!Number.isFinite(t))return!1
const n=Math.abs(e-t),s=Math.abs(e),i=Math.abs(t)
if(0===e||0===t||s<1e-12&&i<1e-12){if(n>.01*r)return!1}else if(n/(s+i)>r)return!1
return!0}function j(e){return _(Math.max(-T,Math.min(e,T)))}function _(e){return i[0]=e,i[0]}function w(e,t,r){const n=o((r-e)/(t-e),0,1)
return n*n*(3-2*n)}function S(e,t){const r=Object(n.u)(e),s=f(e[2]/r),i=Math.atan2(e[1]/r,e[0]/r)
return Object(n.B)(t,r,s,i),t}function L(e,t,r){return Object(s.l)(e,t[0],t[1],t[2],t[3]*r)}function M(e){const t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[3]*e[3]+e[4]*e[4]+e[5]*e[5],n=e[6]*e[6]+e[7]*e[7]+e[8]*e[8]
return!(m(t,1)&&m(r,1)&&m(n,1))}(function(e){const t=function(e){return g.setFloat64(0,e),g.getBigInt64(0)}(e=Math.abs(e)),r=function(e){return g.setBigInt64(0,e),g.getFloat64(0)}(t<=v?v:t-v)
Math.abs(e-r)})(1)
const T=_(34028234663852886e22)},993:function(e,t,r){"use strict"
r.d(t,"a",(function(){return I}))
var n,s=r(968),i=r(1117),a=r(1002),o=r(234),l=r(23),c=r(1049),u=r(1114),h=r(1024),d=r(970),p=r(971),b=r(1082),y=r(969),f=r(1060),m=r(1087)
const g=new c.a(class{constructor(){this.target=null,this.cancellable=!1,this.defaultPrevented=!1,this.item=void 0,this.type=void 0}preventDefault(){this.cancellable&&(this.defaultPrevented=!0)}reset(e){this.defaultPrevented=!1,this.item=e}},void 0,e=>{e.item=null,e.target=null,e.defaultPrevented=!1,e.cancellable=!1}),v=()=>{}
function O(e){return e?e instanceof E?e.toArray():e.length?Array.prototype.slice.apply(e):[]:[]}function j(e){if(e&&e.length)return e[0]}function _(e,t,r,n){const s=Math.min(e.length-r,t.length-n)
let i=0
for(;i<s&&e[r+i]===t[n+i];)i++
return i}const w=new Set,S=new Set,L=new Set,M=new Map
let T=0,E=n=class extends a.a.EventedAccessor{static isCollection(e){return null!=e&&e instanceof n}constructor(e){super(e),this._chgListeners=[],this._notifications=null,this._timer=null,this._observable=new m.a,this.length=0,this._items=[],Object.defineProperty(this,"uid",{value:T++})}normalizeCtorArgs(e){return e?Array.isArray(e)||e instanceof n?{items:e}:e:{}}destroy(){this.removeAll()}*[Symbol.iterator](){yield*this.items}get items(){return Object(f.d)(this._observable),this._items}set items(e){this._emitBeforeChanges(u.a.ADD)||(this._splice(0,this.length,O(e)),this._emitAfterChanges(u.a.ADD))}hasEventListener(e){return"change"===e?this._chgListeners.length>0:this._emitter.hasEventListener(e)}on(e,t){if("change"===e){const e=this._chgListeners,r={removed:!1,callback:t}
return e.push(r),this._notifications&&this._notifications.push({listeners:e.slice(),items:this._items.slice(),changes:[]}),{remove(){this.remove=v,r.removed=!0,e.splice(e.indexOf(r),1)}}}return this._emitter.on(e,t)}once(e,t){const r=this.on(e,t)
return{remove(){r.remove()}}}add(e,t){if(Object(f.d)(this._observable),this._emitBeforeChanges(u.a.ADD))return this
const r=this.getNextIndex(null!=t?t:null)
return this._splice(r,0,[e]),this._emitAfterChanges(u.a.ADD),this}addMany(e,t=this._items.length){if(Object(f.d)(this._observable),!e||!e.length)return this
if(this._emitBeforeChanges(u.a.ADD))return this
const r=this.getNextIndex(t)
return this._splice(r,0,O(e)),this._emitAfterChanges(u.a.ADD),this}at(e){if(Object(f.d)(this._observable),(e=Math.trunc(e)||0)<0&&(e+=this.length),!(e<0||e>=this.length))return this._items[e]}removeAll(){if(Object(f.d)(this._observable),!this.length||this._emitBeforeChanges(u.a.REMOVE))return[]
const e=this._splice(0,this.length)||[]
return this._emitAfterChanges(u.a.REMOVE),e}clone(){return Object(f.d)(this._observable),this._createNewInstance({items:this._items.map(o.a)})}concat(...e){Object(f.d)(this._observable)
const t=e.map(O)
return this._createNewInstance({items:this._items.concat(...t)})}drain(e,t){if(Object(f.d)(this._observable),!this.length||this._emitBeforeChanges(u.a.REMOVE))return
const r=Object(l.d)(this._splice(0,this.length)),n=r.length
for(let s=0;s<n;s++)e.call(t,r[s],s,r)
this._emitAfterChanges(u.a.REMOVE)}every(e,t){return Object(f.d)(this._observable),this._items.every(e,t)}filter(e,t){let r
return Object(f.d)(this._observable),r=2===arguments.length?this._items.filter(e,t):this._items.filter(e),this._createNewInstance({items:r})}find(e,t){return Object(f.d)(this._observable),this._items.find(e,t)}findIndex(e,t){return Object(f.d)(this._observable),this._items.findIndex(e,t)}flatten(e,t){Object(f.d)(this._observable)
const r=[]
return function e(t,r,n,s){r&&r.forEach((r,i,a)=>{t.push(r),e(t,n.call(s,r,i,a),n,s)})}(r,this,e,t),new n(r)}forEach(e,t){return Object(f.d)(this._observable),this._items.forEach(e,t)}getItemAt(e){return Object(f.d)(this._observable),this._items[e]}getNextIndex(e){var t
Object(f.d)(this._observable)
const r=this.length
return(e=null!=(t=e)?t:r)<0?e=0:e>r&&(e=r),e}includes(e,t=0){return Object(f.d)(this._observable),this._items.includes(e,t)}indexOf(e,t=0){return Object(f.d)(this._observable),this._items.indexOf(e,t)}join(e=","){return Object(f.d)(this._observable),this._items.join(e)}lastIndexOf(e,t=this.length-1){return Object(f.d)(this._observable),this._items.lastIndexOf(e,t)}map(e,t){Object(f.d)(this._observable)
const r=this._items.map(e,t)
return new n({items:r})}reorder(e,t=this.length-1){Object(f.d)(this._observable)
const r=this.indexOf(e)
if(-1!==r){if(t<0?t=0:t>=this.length&&(t=this.length-1),r!==t){if(this._emitBeforeChanges(u.a.MOVE))return e
this._splice(r,1),this._splice(t,0,[e]),this._emitAfterChanges(u.a.MOVE)}return e}}pop(){if(Object(f.d)(this._observable),!this.length||this._emitBeforeChanges(u.a.REMOVE))return
const e=j(this._splice(this.length-1,1))
return this._emitAfterChanges(u.a.REMOVE),e}push(...e){return Object(f.d)(this._observable),this._emitBeforeChanges(u.a.ADD)||(this._splice(this.length,0,e),this._emitAfterChanges(u.a.ADD)),this.length}reduce(e,t){Object(f.d)(this._observable)
const r=this._items
return 2===arguments.length?r.reduce(e,t):r.reduce(e)}reduceRight(e,t){Object(f.d)(this._observable)
const r=this._items
return 2===arguments.length?r.reduceRight(e,t):r.reduceRight(e)}remove(e){return Object(f.d)(this._observable),this.removeAt(this.indexOf(e))}removeAt(e){if(Object(f.d)(this._observable),e<0||e>=this.length||this._emitBeforeChanges(u.a.REMOVE))return
const t=j(this._splice(e,1))
return this._emitAfterChanges(u.a.REMOVE),t}removeMany(e){if(Object(f.d)(this._observable),!e||!e.length||this._emitBeforeChanges(u.a.REMOVE))return[]
const t=e instanceof n?e.toArray():e,r=this._items,s=[],i=t.length
for(let e=0;e<i;e++){const n=t[e],i=r.indexOf(n)
if(i>-1){const n=1+_(t,r,e+1,i+1),a=this._splice(i,n)
a&&a.length>0&&s.push.apply(s,a),e+=n-1}}return this._emitAfterChanges(u.a.REMOVE),s}reverse(){if(Object(f.d)(this._observable),this._emitBeforeChanges(u.a.MOVE))return this
const e=this._splice(0,this.length)
return e&&(e.reverse(),this._splice(0,0,e)),this._emitAfterChanges(u.a.MOVE),this}shift(){if(Object(f.d)(this._observable),!this.length||this._emitBeforeChanges(u.a.REMOVE))return
const e=j(this._splice(0,1))
return this._emitAfterChanges(u.a.REMOVE),e}slice(e=0,t=this.length){return Object(f.d)(this._observable),this._createNewInstance({items:this._items.slice(e,t)})}some(e,t){return Object(f.d)(this._observable),this._items.some(e,t)}sort(e){if(Object(f.d)(this._observable),!this.length||this._emitBeforeChanges(u.a.MOVE))return this
const t=Object(l.d)(this._splice(0,this.length))
return arguments.length?t.sort(e):t.sort(),this._splice(0,0,t),this._emitAfterChanges(u.a.MOVE),this}splice(e,t,...r){Object(f.d)(this._observable)
const n=(t?u.a.REMOVE:0)|(r.length?u.a.ADD:0)
if(this._emitBeforeChanges(n))return[]
const s=this._splice(e,t,r)||[]
return this._emitAfterChanges(n),s}toArray(){return Object(f.d)(this._observable),this._items.slice()}toJSON(){return Object(f.d)(this._observable),this.toArray()}toLocaleString(){return Object(f.d)(this._observable),this._items.toLocaleString()}toString(){return Object(f.d)(this._observable),this._items.toString()}unshift(...e){return Object(f.d)(this._observable),!e.length||this._emitBeforeChanges(u.a.ADD)||(this._splice(0,0,e),this._emitAfterChanges(u.a.ADD)),this.length}_createNewInstance(e){return new this.constructor(e)}_splice(e,t,r){const n=this._items,s=this.itemType
let i,a
if(!this._notifications&&this.hasEventListener("change")&&(this._notifications=[{listeners:this._chgListeners.slice(),items:this._items.slice(),changes:[]}],this._timer&&this._timer.remove(),this._timer=Object(h.b)(()=>this._dispatchChange())),t){if(a=n.splice(e,t),this.hasEventListener("before-remove")){const t=g.acquire()
t.target=this,t.cancellable=!0
for(let r=0,s=a.length;r<s;r++)i=a[r],t.reset(i),this.emit("before-remove",t),t.defaultPrevented&&(a.splice(r,1),n.splice(e,0,i),e+=1,r-=1,s-=1)
g.release(t)}if(this.length=this._items.length,this.hasEventListener("after-remove")){const e=g.acquire()
e.target=this,e.cancellable=!1
const t=a.length
for(let r=0;r<t;r++)e.reset(a[r]),this.emit("after-remove",e)
g.release(e)}}if(r&&r.length){if(s){const e=[]
for(const t of r){const r=s.ensureType(t)
null==r&&null!=t||e.push(r)}r=e}const t=this.hasEventListener("before-add"),i=this.hasEventListener("after-add"),a=e===this.length
if(t||i){const s=g.acquire()
s.target=this,s.cancellable=!0
const o=g.acquire()
o.target=this,o.cancellable=!1
for(const l of r)t?(s.reset(l),this.emit("before-add",s),s.defaultPrevented||(a?n.push(l):n.splice(e++,0,l),this._set("length",n.length),i&&(o.reset(l),this.emit("after-add",o)))):(a?n.push(l):n.splice(e++,0,l),this._set("length",n.length),o.reset(l),this.emit("after-add",o))
g.release(o),g.release(s)}else{if(a)for(const e of r)n.push(e)
else n.splice(e,0,...r)
this._set("length",n.length)}}return(r&&r.length||a&&a.length)&&this._notifyChangeEvent(r,a),a}_emitBeforeChanges(e){let t=!1
if(this.hasEventListener("before-changes")){const r=g.acquire()
r.target=this,r.cancellable=!0,r.type=e,this.emit("before-changes",r),t=r.defaultPrevented,g.release(r)}return t}_emitAfterChanges(e){if(this.hasEventListener("after-changes")){const t=g.acquire()
t.target=this,t.cancellable=!1,t.type=e,this.emit("after-changes",t),g.release(t)}this._observable.notify()}_notifyChangeEvent(e,t){this.hasEventListener("change")&&this._notifications&&this._notifications[this._notifications.length-1].changes.push({added:e,removed:t})}_dispatchChange(){if(this._timer&&(this._timer.remove(),this._timer=null),!this._notifications)return
const e=this._notifications
this._notifications=null
for(const t of e){const e=t.changes
w.clear(),S.clear(),L.clear()
for(const{added:t,removed:r}of e){if(t)if(0===L.size&&0===S.size)for(const e of t)w.add(e)
else for(const e of t)S.has(e)?(L.add(e),S.delete(e)):L.has(e)||w.add(e)
if(r)if(0===L.size&&0===w.size)for(const e of r)S.add(e)
else for(const e of r)w.has(e)?w.delete(e):(L.delete(e),S.add(e))}const r=i.a.acquire()
w.forEach(e=>{r.push(e)})
const n=i.a.acquire()
S.forEach(e=>{n.push(e)})
const s=this._items,a=t.items,o=i.a.acquire()
if(L.forEach(e=>{a.indexOf(e)!==s.indexOf(e)&&o.push(e)}),t.listeners&&(r.length||n.length||o.length)){const e={target:this,added:r,removed:n,moved:o},s=t.listeners.length
for(let r=0;r<s;r++){const n=t.listeners[r]
n.removed||n.callback.call(this,e)}}i.a.release(r),i.a.release(n),i.a.release(o)}w.clear(),S.clear(),L.clear()}}
E.ofType=e=>{if(!e)return n
if(M.has(e))return M.get(e)
let t=null
if("function"==typeof e)t=e.prototype.declaredClass
else if(e.base)t=e.base.prototype.declaredClass
else for(const r in e.typeMap){const n=e.typeMap[r].prototype.declaredClass
t?t+=" | "+n:t=n}let r=class extends n{}
return Object(s.a)([Object(b.a)({Type:e,ensureType:"function"==typeof e?Object(p.m)(e):Object(p.k)(e)})],r.prototype,"itemType",void 0),r=Object(s.a)([Object(y.a)(`esri.core.Collection<${t}>`)],r),M.set(e,r),r},Object(s.a)([Object(d.b)()],E.prototype,"length",void 0),Object(s.a)([Object(d.b)()],E.prototype,"items",null),E=n=Object(s.a)([Object(y.a)("esri.core.Collection")],E)
const I=E}}])
