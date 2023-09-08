(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[249,87,273,759],{1002:function(e,t,r){"use strict"
r.d(t,"a",(function(){return l}))
var s=r(968),i=r(975),a=r(1017),n=r(969)
class o{constructor(){this._emitter=new o.EventEmitter(this)}emit(e,t){return this._emitter.emit(e,t)}on(e,t){return this._emitter.on(e,t)}once(e,t){return this._emitter.once(e,t)}hasEventListener(e){return this._emitter.hasEventListener(e)}}!function(e){class t{constructor(e=null){this._target=e,this._listenersMap=null}clear(){this._listenersMap&&this._listenersMap.clear(),this._listenersMap=null}emit(e,t){const r=this._listenersMap&&this._listenersMap.get(e)
if(!r)return!1
const s=this._target||this
return[...r].forEach(e=>{e.call(s,t)}),r.length>0}on(e,t){if(Array.isArray(e)){const r=e.map(e=>this.on(e,t))
return Object(a.b)(r)}if(e.includes(","))throw new TypeError("Evented.on() with a comma delimited string of event types is not supported")
this._listenersMap||(this._listenersMap=new Map)
const r=this._listenersMap.get(e)||[]
return r.push(t),this._listenersMap.set(e,r),{remove:()=>{const r=this._listenersMap&&this._listenersMap.get(e)||[],s=r.indexOf(t)
s>=0&&r.splice(s,1)}}}once(e,t){const r=this.on(e,e=>{r.remove(),t.call(null,e)})
return r}hasEventListener(e){const t=this._listenersMap&&this._listenersMap.get(e)
return null!=t&&t.length>0}}e.EventEmitter=t,e.EventedMixin=e=>{let r=class extends e{constructor(){super(...arguments),this._emitter=new t}destroy(){this._emitter.clear()}emit(e,t){return this._emitter.emit(e,t)}on(e,t){return this._emitter.on(e,t)}once(e,t){return this._emitter.once(e,t)}hasEventListener(e){return this._emitter.hasEventListener(e)}}
return r=Object(s.a)([Object(n.a)("esri.core.Evented")],r),r}
let r=class extends i.a{constructor(){super(...arguments),this._emitter=new o.EventEmitter(this)}destroy(){this._emitter.clear()}emit(e,t){return this._emitter.emit(e,t)}on(e,t){return this._emitter.on(e,t)}once(e,t){return this._emitter.once(e,t)}hasEventListener(e){return this._emitter.hasEventListener(e)}}
r=Object(s.a)([Object(n.a)("esri.core.Evented")],r),e.EventedAccessor=r}(o||(o={}))
const l=o},1019:function(e,t,r){"use strict"
r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return p}))
var s=r(110),i=r(771),a=r(446),n=r(233),o=r(374)
const l=n.a.getLogger("esri.assets")
function c(e,t){return Object(i.default)(p(e),t)}function p(e){if(!s.default.assetsPath)throw l.errorOnce("The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50"),new a.a("assets:path-not-set","config.assetsPath is not set")
return Object(o.E)(s.default.assetsPath,e)}},1027:function(e,t,r){"use strict"
r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return b})),r.d(t,"c",(function(){return d}))
var s=r(446),i=r(973),a=r(1005)
const n=/^([a-z]{2})(?:[-_]([A-Za-z]{2}))?$/,o={ar:!0,bg:!0,bs:!0,ca:!0,cs:!0,da:!0,de:!0,el:!0,en:!0,es:!0,et:!0,fi:!0,fr:!0,he:!0,hr:!0,hu:!0,id:!0,it:!0,ja:!0,ko:!0,lt:!0,lv:!0,nb:!0,nl:!0,pl:!0,"pt-BR":!0,"pt-PT":!0,ro:!0,ru:!0,sk:!0,sl:!0,sr:!0,sv:!0,th:!0,tr:!0,uk:!0,vi:!0,"zh-CN":!0,"zh-HK":!0,"zh-TW":!0}
function l(e){var t
return null!=(t=o[e])&&t}const c=[],p=new Map
function u(e){for(const t of p.keys())y(e.pattern,t)&&p.delete(t)}function d(e){return c.includes(e)||(u(e),c.unshift(e)),{remove(){const t=c.indexOf(e)
t>-1&&(c.splice(t,1),u(e))}}}async function h(e){const t=Object(a.b)()
p.has(e)||p.set(e,async function(e,t){const r=[]
for(const s of c)if(y(s.pattern,e))try{return await s.fetchMessageBundle(e,t)}catch(e){r.push(e)}if(r.length)throw new s.a("intl:message-bundle-error",`Errors occurred while loading "${e}"`,{errors:r})
throw new s.a("intl:no-message-bundle-loader",`No loader found for message bundle "${e}"`)}(e,t))
const r=p.get(e)
return r&&await m.add(r),r}function b(e){if(!n.test(e))return null
const t=n.exec(e)
if(null===t)return null
const[,r,s]=t,i=r+(s?"-"+s.toUpperCase():"")
return l(i)?i:l(r)?r:null}function y(e,t){return"string"==typeof e?t.startsWith(e):e.test(t)}Object(a.a)(()=>{p.clear()})
const m=new class{constructor(){this._numLoading=0,this._dfd=null}async waitForAll(){this._dfd&&await this._dfd.promise}add(e){return this._increase(),e.then(()=>this._decrease(),()=>this._decrease()),this.waitForAll()}_increase(){this._numLoading++,this._dfd||(this._dfd=Object(i.d)())}_decrease(){this._numLoading=Math.max(this._numLoading-1,0),this._dfd&&0===this._numLoading&&(this._dfd.resolve(),this._dfd=null)}}},1034:function(e,t,r){"use strict"
r.d(t,"a",(function(){return y})),r.d(t,"b",(function(){return m})),r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return p})),r.d(t,"e",(function(){return h})),r.d(t,"f",(function(){return b}))
var s=r(968),i=r(975),a=r(23),n=r(973),o=r(970),l=(r(971),r(445),r(969))
function c(e,t,r){return Object(n.g)(e.map((e,s)=>t.apply(r,[e,s])))}async function p(e,t,r){return(await Object(n.g)(e.map((e,s)=>t.apply(r,[e,s])))).map(e=>e.value)}function u(e){return{ok:!0,value:e}}function d(e){return{ok:!1,error:e}}async function h(e){if(Object(a.k)(e))return{ok:!1,error:new Error("no promise provided")}
try{return u(await e)}catch(e){return d(e)}}async function b(e){try{return u(await e)}catch(e){return Object(n.p)(e),d(e)}}function y(e){if(!0===e.ok)return e.value
throw e.error}function m(e,t){return new g(e,t)}let g=class extends i.a{get value(){return e=this._result,Object(a.l)(e)&&!0===e.ok?e.value:null
var e}get error(){return e=this._result,Object(a.l)(e)&&!1===e.ok?e.error:null
var e}get finished(){return Object(a.l)(this._result)}constructor(e,t){super({}),this._result=null,this._abortHandle=null,this.abort=()=>{this._abortController=Object(a.a)(this._abortController)},this.remove=this.abort,this._abortController=new AbortController
const{signal:r}=this._abortController
this.promise=e(r),this.promise.then(e=>{this._result=u(e),this._cleanup()},e=>{this._result=d(e),this._cleanup()}),this._abortHandle=Object(n.n)(t,this.abort)}normalizeCtorArgs(){return{}}destroy(){this.abort()}_cleanup(){this._abortHandle=Object(a.s)(this._abortHandle),this._abortController=null}}
Object(s.a)([Object(o.b)()],g.prototype,"value",null),Object(s.a)([Object(o.b)()],g.prototype,"error",null),Object(s.a)([Object(o.b)()],g.prototype,"finished",null),Object(s.a)([Object(o.b)()],g.prototype,"promise",void 0),Object(s.a)([Object(o.b)()],g.prototype,"_result",void 0),g=Object(s.a)([Object(l.a)("esri.core.asyncUtils.ReactiveTask")],g)},1037:function(e,t,r){"use strict"
r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return g})),r.d(t,"c",(function(){return m})),r.d(t,"d",(function(){return y})),r.d(t,"e",(function(){return d})),r.d(t,"f",(function(){return h})),r.d(t,"g",(function(){return b})),r.d(t,"h",(function(){return o})),r.d(t,"i",(function(){return u})),r.d(t,"j",(function(){return c})),r.d(t,"k",(function(){return n})),r.d(t,"l",(function(){return p})),r.d(t,"m",(function(){return l}))
var s=r(196),i=r(771),a=r(23)
function n(e){const t=null==e?void 0:e.type
return"base-tile"===t||"tile"===t||"elevation"===t||"imagery-tile"===t||"base-elevation"===t||"open-street-map"===t||"wcs"===t||"web-tile"===t||"wmts"===t||"vector-tile"===t}function o(e){return null!=e&&"type"in e&&"group"===e.type}const l={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"}
function c(e){const t=null==e?void 0:e.type
return"building-scene"===t||"integrated-mesh"===t||"point-cloud"===t||"scene"===t}function p(e){return"voxel"===(null==e?void 0:e.type)}function u(e){return"imagery-tile"===(null==e?void 0:e.type)}function d(e){return null!=e&&null!=e.parent&&"declaredClass"in e.parent&&"esri.Basemap"===e.parent.declaredClass&&e.parent.baseLayers.includes(e)}function h(e){var t
return"feature"===(null==e?void 0:e.type)&&!e.url&&"memory"===(null==(t=e.source)?void 0:t.type)}function b(e){var t
return"feature"===(null==e?void 0:e.type)&&"feature-layer"===(null==(t=e.source)?void 0:t.type)}function y(e){if(e.activeLayer){const t=e.activeLayer.tileMatrixSet
if(t)return t
const r=e.activeLayer.tileMatrixSets
if(r)return r}return null}async function m(e,t){const r=null==s.b?void 0:s.b.findServerInfo(e)
if(null!=(null==r?void 0:r.currentVersion))return r.owningSystemUrl||null
const n=e.toLowerCase().indexOf("/rest/services")
if(-1===n)return null
const o=e.substring(0,n)+"/rest/info",l=Object(a.l)(t)?t.signal:null,{data:c}=await Object(i.default)(o,{query:{f:"json"},responseType:"json",signal:l})
return(null==c?void 0:c.owningSystemUrl)||null}function g(e){return function(e){if(!("capabilities"in e))return!1
switch(e.type){case"csv":case"feature":case"geojson":case"imagery":case"knowledge-graph-sublayer":case"ogc-feature":case"oriented-imagery":case"scene":case"subtype-group":case"subtype-sublayer":case"wfs":return!0
default:return!1}}(e)?"effectiveCapabilities"in e?e.effectiveCapabilities:e.capabilities:null}function f(e){return!!function(e){if(!("editingEnabled"in e))return!1
switch(e.type){case"csv":case"feature":case"geojson":case"oriented-imagery":case"scene":case"subtype-group":case"subtype-sublayer":return!0
default:return!1}}(e)&&("effectiveEditingEnabled"in e?e.effectiveEditingEnabled:e.editingEnabled)}},1046:function(e,t,r){"use strict"
r.d(t,"a",(function(){return b}))
var s=r(968),i=r(446),a=r(1058),n=r(973),o=r(1044),l=r(970),c=r(969)
const p="loaded",u=e=>{let t=class extends e{constructor(...e){super(...e),this._loadController=null,this.loadError=null,this.loadStatus="not-loaded",this._set("loadWarnings",[]),this.addResolvingPromise(new Promise(e=>{const t=this.load.bind(this)
this.load=r=>{const s=new Promise((e,t)=>{const s=Object(n.o)(r,t)
this.destroyed&&t(new i.a("load:instance-destroyed",`Instance of '${this.declaredClass||this.constructor.name}' is already destroyed`,{instance:this})),this._promiseProps.when(e,t).finally(()=>{s&&s.remove()})})
if("not-loaded"===this.loadStatus){this._set("loadStatus","loading")
const e=this._loadController=new AbortController
t({signal:e.signal}),Object(n.n)(e.signal,()=>{this._promiseProps.abort()})}return e(),s}})),this.when(()=>{this._set("loadStatus",p),this._loadController=null},e=>{this._set("loadStatus","failed"),this._set("loadError",e),this._loadController=null})}get loaded(){return this.loadStatus===p}get loadWarnings(){return this._get("loadWarnings")}load(){return null}cancelLoad(){var e
return this.isFulfilled()||(this._set("loadError",new i.a("load:cancelled","Cancelled")),null!=(e=this._loadController)&&e.abort()),this}}
return Object(s.a)([Object(l.b)({readOnly:!0})],t.prototype,"loaded",null),Object(s.a)([Object(l.b)({readOnly:!0})],t.prototype,"loadError",void 0),Object(s.a)([Object(l.b)({clonable:!1})],t.prototype,"loadStatus",void 0),Object(s.a)([Object(l.b)({type:[o.a],readOnly:!0})],t.prototype,"loadWarnings",null),t=Object(s.a)([Object(c.a)("esri.core.Loadable")],t),t}
let d=class extends(u(a.a)){}
var h
d=Object(s.a)([Object(c.a)("esri.core.Loadable")],d),(h=d||(d={})).LoadableMixin=u,h.isLoadable=function(e){return!(!e||!e.load)}
const b=d},1058:function(e,t,r){"use strict"
r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return u}))
var s,i,a=r(968),n=r(975),o=r(23),l=r(973),c=r(969);(i=s||(s={}))[i.PENDING=0]="PENDING",i[i.RESOLVED=1]="RESOLVED",i[i.REJECTED=2]="REJECTED"
class p{constructor(e){this.instance=e,this._resolver=Object(l.d)(),this._status=s.PENDING,this._resolvingPromises=[],this._resolver.promise.then(()=>{this._status=s.RESOLVED,this._cleanUp()},()=>{this._status=s.REJECTED,this._cleanUp()})}addResolvingPromise(e){this._resolvingPromises.push(e),this._tryResolve()}isResolved(){return this._status===s.RESOLVED}isRejected(){return this._status===s.REJECTED}isFulfilled(){return this._status!==s.PENDING}abort(){this._resolver.reject(Object(l.c)())}when(e,t){return this._resolver.promise.then(e,t)}_cleanUp(){this._allPromise=this._resolvingPromises=this._allPromise=null}_tryResolve(){if(this.isFulfilled())return
const e=Object(l.d)(),t=[...this._resolvingPromises,Object(o.d)(e.promise)],r=this._allPromise=Promise.all(t)
r.then(()=>{this.isFulfilled()||this._allPromise!==r||this._resolver.resolve(this.instance)},e=>{this.isFulfilled()||this._allPromise!==r||Object(l.j)(e)||this._resolver.reject(e)}),e.resolve()}}const u=e=>{let t=class extends e{constructor(...e){super(...e),this._promiseProps=new p(this),this.addResolvingPromise(Promise.resolve())}isResolved(){return this._promiseProps.isResolved()}isRejected(){return this._promiseProps.isRejected()}isFulfilled(){return this._promiseProps.isFulfilled()}when(e,t){return new Promise((e,t)=>{this._promiseProps.when(e,t)}).then(e,t)}catch(e){return this.when(null,e)}addResolvingPromise(e){e&&!this._promiseProps.isFulfilled()&&this._promiseProps.addResolvingPromise("_promiseProps"in e?e.when():e)}}
return t=Object(a.a)([Object(c.a)("esri.core.Promise")],t),t}
let d=class extends(u(n.a)){}
d=Object(a.a)([Object(c.a)("esri.core.Promise")],d)},1082:function(e,t,r){"use strict"
function s(e){return(t,r)=>{t[r]=e}}r.d(t,"a",(function(){return s}))},1087:function(e,t,r){"use strict"
r.d(t,"a",(function(){return i}))
var s=r(1165)
class i extends s.a{notify(){const e=this._observers
if(e&&e.length>0){const t=e.slice()
for(const e of t)e.onInvalidated(),e.onCommitted()}}}},1114:function(e,t,r){"use strict"
var s
r.d(t,"a",(function(){return s})),function(e){e[e.ADD=1]="ADD",e[e.REMOVE=2]="REMOVE",e[e.MOVE=4]="MOVE"}(s||(s={}))},1146:function(e,t,r){"use strict"
r.d(t,"a",(function(){return a}))
var s=r(374)
const i=["elevation3d.arcgis.com","js.arcgis.com","jsdev.arcgis.com","jsqa.arcgis.com","static.arcgis.com"]
function a(e){const t=Object(s.p)(e,!0)
return!!t&&t.endsWith(".arcgis.com")&&!i.includes(t)&&!e.endsWith("/sharing/rest/generateToken")}},1154:function(e,t,r){"use strict"
r.r(t),r.d(t,"default",(function(){return I}))
var s=r(968),i=r(1019),a=r(446),n=r(972),o=r(234),l=r(1046),c=r(23),p=r(374),u=r(970),d=r(971),h=r(977),b=r(969),y=r(770),m=r(1028),g=r(975),f=r(233),v=r(987)
r(445)
let O=class extends g.a{constructor(e){super(e),this.portalItem=null}normalizeCtorArgs(e){return e&&e.portalItem&&e.path?{...e,path:this._normalizePath(e.path,e.portalItem)}:e}set path(e){Object(c.l)(e)&&Object(p.x)(e)?f.a.getLogger(this.declaredClass).error("portalitemresource:invalid-path","A portal item resource path must be relative"):this._set("path",e)}_castPath(e){return this._normalizePath(e,this.portalItem)}get url(){return this.portalItem&&this.path?`${this.portalItem.itemUrl}/resources/${this.path}`:null}get itemRelativeUrl(){return this.portalItem&&this.path?"./resources/"+this.path:null}fetch(e="json",t){const r=this.url
if(Object(c.k)(r))throw new a.a("portal-item-resource:fetch","Portal item resource does not refer to a valid item or path")
return this.portalItem.portal.request(r,{responseType:e,query:{token:this.portalItem.apiKey},signal:Object(c.j)(t,"signal")})}async update(e,t){return(await r.e(34).then(r.bind(null,1935))).addOrUpdateResource(this,"update",e,t)}hasPath(){return Object(c.l)(this.path)}_normalizePath(e,t){var r
return Object(c.k)(e)?e:(e=e.replace(/^\/+/,""),Object(c.l)(t)&&Object(p.x)(e)&&(e=Object(p.H)(e,t.itemUrl)),null==(r=e)?void 0:r.replace(/^\/+/,"").replace(/^(\.\/)?resources\//,""))}}
Object(s.a)([Object(u.b)()],O.prototype,"portalItem",void 0),Object(s.a)([Object(u.b)({type:String,value:null})],O.prototype,"path",null),Object(s.a)([Object(v.a)("path")],O.prototype,"_castPath",null),Object(s.a)([Object(u.b)({type:String,readOnly:!0})],O.prototype,"url",null),Object(s.a)([Object(u.b)({type:String,readOnly:!0})],O.prototype,"itemRelativeUrl",null),O=Object(s.a)([Object(b.a)("esri.portal.PortalItemResource")],O)
const j=O
let w=class extends g.a{constructor(e){super(e),this.created=null,this.rating=null}}
Object(s.a)([Object(u.b)()],w.prototype,"created",void 0),Object(s.a)([Object(u.b)()],w.prototype,"rating",void 0),w=Object(s.a)([Object(b.a)("esri.portal.PortalRating")],w)
const _=w
var L
const S=new Set(["Map Service","Feature Service","Feature Collection","Scene Service","Image Service","Stream Service","Vector Tile Service","GeoJson","CSV","KML","WFS","WMTS","WMS","Feed"]),T=new Set(["KML","GeoJson","CSV"])
let M=L=class extends(Object(n.b)(l.a)){static from(e){return Object(d.d)(L,e)}constructor(e){super(e),this.access=null,this.accessInformation=null,this.apiKey=null,this.applicationProxies=null,this.avgRating=null,this.categories=null,this.created=null,this.culture=null,this.description=null,this.extent=null,this.groupCategories=null,this.id=null,this.isOrgItem=!1,this.itemControl=null,this.licenseInfo=null,this.modified=null,this.name=null,this.numComments=null,this.numRatings=null,this.numViews=null,this.owner=null,this.ownerFolder=null,this.portal=null,this.screenshots=null,this.size=null,this.snippet=null,this.sourceJSON=null,this.sourceUrl=null,this.spatialReference=null,this.tags=null,this.title=null,this.type=null,this.typeKeywords=null,this.url=null}destroy(){this.portal=null}get displayName(){const e=this.type,t=this.typeKeywords||[]
let r=e
return"Feature Service"===e||"Feature Collection"===e?r=t.includes("Table")?"Table":t.includes("Route Layer")?"Route Layer":t.includes("Markup")?"Markup":"Feature Layer":"Image Service"===e?r=t.includes("Elevation 3D Layer")?"Elevation Layer":t.includes("Tiled Imagery")?"Tiled Imagery Layer":"Imagery Layer":"Scene Service"===e?r="Scene Layer":"Video Service"===e?r="Video Layer":"Scene Package"===e?r="Scene Layer Package":"Stream Service"===e?r="Feature Layer":"Geoprocessing Service"===e&&this.portal&&this.portal.isPortal?r=t.includes("Web Tool")?"Tool":"Geoprocessing Service":"Geocoding Service"===e?r="Locator":"Geoenrichment Service"===e?r="GeoEnrichment Service":"Microsoft Powerpoint"===e?r="Microsoft PowerPoint":"GeoJson"===e?r="GeoJSON":"Globe Service"===e?r="Globe Layer":"Vector Tile Service"===e?r="Tile Layer":"netCDF"===e?r="NetCDF":"Map Service"===e?r=t.includes("Spatiotemporal")||!t.includes("Hosted Service")&&!t.includes("Tiled")||t.includes("Relational")?"Map Image Layer":"Tile Layer":e&&e.toLowerCase().includes("add in")?r=e.replace(/(add in)/gi,"Add-In"):"datastore catalog service"===e?r="Big Data File Share":"Compact Tile Package"===e?r="Tile Package (tpkx)":"OGCFeatureServer"===e?r="OGC Feature Layer":"web mapping application"===e&&t.includes("configurableApp")?r="Instant App":"Insights Page"===e&&(r="Insights Report"),r}readExtent(e){return e&&e.length?new y.default(e[0][0],e[0][1],e[1][0],e[1][1]):null}get iconUrl(){const e=this.type&&this.type.toLowerCase()||"",t=this.typeKeywords||[]
let r,s=!1,a=!1,n=!1,o=!1,l=!1,c=!1
return e.indexOf("service")>0||"feature collection"===e||"kml"===e||"wms"===e||"wmts"===e||"wfs"===e?(s=t.includes("Hosted Service"),"feature service"===e||"feature collection"===e||"kml"===e||"wfs"===e?(a=t.includes("Table"),n=t.includes("Route Layer"),o=t.includes("Markup"),l=t.includes("Spatiotemporal"),c=t.includes("UtilityNetwork"),r=l&&a?"spatiotemporaltable":a?"table":n?"routelayer":o?"markup":l?"spatiotemporal":s?"featureshosted":c?"utilitynetwork":"features"):r="map service"===e||"wms"===e||"wmts"===e?s||t.includes("Tiled")||"wmts"===e?"maptiles":"mapimages":"scene service"===e?t.includes("Line")?"sceneweblayerline":t.includes("3DObject")?"sceneweblayermultipatch":t.includes("Point")?"sceneweblayerpoint":t.includes("IntegratedMesh")?"sceneweblayermesh":t.includes("PointCloud")?"sceneweblayerpointcloud":t.includes("Polygon")?"sceneweblayerpolygon":t.includes("Building")?"sceneweblayerbuilding":t.includes("Voxel")?"sceneweblayervoxel":"sceneweblayer":"image service"===e?t.includes("Elevation 3D Layer")?"elevationlayer":t.includes("Tiled Imagery")?"tiledimagerylayer":"imagery":"stream service"===e?"streamlayer":"video service"===e?"mediaservice":"vector tile service"===e?"vectortile":"datastore catalog service"===e?"datastorecollection":"geocoding service"===e?"geocodeservice":"geoprocessing service"===e?t.includes("Web Tool")&&this.portal&&this.portal.isPortal?"tool":"layers":"geodata service"===e?"geodataservice":"layers"):r="web map"===e||"cityengine web scene"===e?"maps":"web scene"===e?t.includes("ViewingMode-Local")?"webscenelocal":"websceneglobal":"web mapping application"===e&&t.includes("configurableApp")?"instantapps":"web mapping application"===e||"mobile application"===e||"application"===e||"operation view"===e||"desktop application"===e?"apps":"map document"===e||"map package"===e||"published map"===e||"scene document"===e||"globe document"===e||"basemap package"===e||"mobile basemap package"===e||"mobile map package"===e||"project package"===e||"project template"===e||"pro map"===e||"layout"===e||"layer"===e&&t.includes("ArcGIS Pro")||"explorer map"===e&&t.indexOf("Explorer Document")?"mapsgray":"service definition"===e||"csv"===e||"shapefile"===e||"cad drawing"===e||"geojson"===e||"360 vr experience"===e||"netcdf"===e||"administrative report"===e?"datafiles":"explorer add in"===e||"desktop add in"===e||"windows viewer add in"===e||"windows viewer configuration"===e?"appsgray":"arcgis pro add in"===e||"arcgis pro configuration"===e?"addindesktop":"rule package"===e||"file geodatabase"===e||"sqlite geodatabase"===e||"csv collection"===e||"kml collection"===e||"windows mobile package"===e||"map template"===e||"desktop application template"===e||"gml"===e||"arcpad package"===e||"code sample"===e||"form"===e||"document link"===e||"earth configuration"===e||"operations dashboard add in"===e||"rules package"===e||"image"===e||"workflow manager package"===e||"explorer map"===e&&t.includes("Explorer Mapping Application")||t.includes("Document")?"datafilesgray":"network analysis service"===e||"geoprocessing service"===e||"geodata service"===e||"geometry service"===e||"geoprocessing package"===e||"locator package"===e||"geoprocessing sample"===e||"workflow manager service"===e?"toolsgray":"layer"===e||"layer package"===e||"explorer layer"===e?"layersgray":"scene package"===e?"scenepackage":"mobile scene package"===e?"mobilescenepackage":"tile package"===e||"compact tile package"===e?"tilepackage":"task file"===e?"taskfile":"report template"===e?"report-template":"statistical data collection"===e?"statisticaldatacollection":"insights workbook"===e?"workbook":"insights model"===e?"insightsmodel":"insights page"===e?"insightspage":"insights theme"===e?"insightstheme":"hub initiative"===e?"hubinitiative":"hubpage"===e?"hubpage":"hub event"===e?"hubevent":"hub site application"===e?"hubsite":"hub project"===e?"hubproject":"relational database connection"===e?"relationaldatabaseconnection":"big data file share"===e?"datastorecollection":"image collection"===e?"imagecollection":"style"===e?"style":"desktop style"===e?"desktopstyle":"dashboard"===e?"dashboard":"raster function template"===e?"rasterprocessingtemplate":"vector tile package"===e?"vectortilepackage":"ortho mapping project"===e?"orthomappingproject":"ortho mapping template"===e?"orthomappingtemplate":"solution"===e?"solutions":"geopackage"===e?"geopackage":"deep learning package"===e?"deeplearningpackage":"real time analytic"===e?"realtimeanalytics":"big data analytic"===e?"bigdataanalytics":"feed"===e?"feed":"excalibur imagery project"===e?"excaliburimageryproject":"notebook"===e?"notebook":"storymap"===e?"storymap":"survey123 add in"===e?"survey123addin":"mission"===e?"mission":"mission report"===e?"missionreport":"quickcapture project"===e?"quickcaptureproject":"pro report"===e?"proreport":"pro report template"===e?"proreporttemplate":"urban model"===e?"urbanmodel":"web experience"===e?"experiencebuilder":"web experience template"===e?"webexperiencetemplate":"experience builder widget"===e?"experiencebuilderwidget":"experience builder widget package"===e?"experiencebuilderwidgetpackage":"workflow"===e?"workflow":"insights script"===e?"insightsscript":"kernel gateway connection"===e?"kernelgatewayconnection":"hub initiative template"===e?"hubinitiativetemplate":"storymap theme"===e?"storymaptheme":"knowledge graph"===e?"knowledgegraph":"native application"===e?"nativeapp":"native application installer"===e?"nativeappinstaller":"link chart"===e?"linkchart":"investigation"===e?"investigation":"ogcfeatureserver"===e?"features":"pro project"===e?"proproject":"insights workbook package"===e?"insightsworkbookpackage":"apache parquet"===e?"apacheparquet":"notebook code snippets"===e||"notebook code snippet library"===e?"notebookcodesnippets":"suitability model"===e?"suitabilitymodel":"esri classifier definition"===e?"classifierdefinition":"esri classification schema"===e?"classificationschema":"insights data engineering workbook"===e?"dataengineeringworkbook":"insights data engineering model"===e?"dataengineeringmodel":"deep learning studio project"===e?"deeplearningproject":"discussion"===e?"discussion":"allsource project"===e?"allsourceproject":"api key"===e?"apikey":"maps",r?Object(i.b)("esri/images/portal/"+r+"16.png"):null}get isLayer(){return null!=this.type&&S.has(this.type)}get itemPageUrl(){var e
const t=null==(e=this.portal)?void 0:e.itemPageUrl
return t&&this.id?`${t}?id=${this.id}`:null}get itemUrl(){var e
const t=null==(e=this.portal)?void 0:e.restUrl
return t&&this.id?`${t}/content/items/${this.id}`:null}get thumbnailUrl(){var e,t
const r=this.itemUrl,s=this.thumbnail
return r&&s&&null!=(e=null==(t=this.portal)?void 0:t.normalizeUrl(`${r}/info/${s}?f=json`))?e:null}get userItemUrl(){const e=this.get("portal.restUrl")
if(!e)return null
const t=this.owner||this.get("portal.user.username")
return t?`${e}/content/users/${this.ownerFolder?`${t}/${this.ownerFolder}`:t}/items/${this.id}`:null}load(e){var t
const r=null!=(t=this.portal)?t:this.portal=m.a.getDefault(),s=r.load(e).then(()=>this.sourceJSON?this.sourceJSON:this.id&&this.itemUrl?r.request(this.itemUrl,{signal:Object(c.l)(e)?e.signal:null,query:{token:this.apiKey}}):{}).then(e=>{this.sourceJSON=e,this.read(e)})
return this.addResolvingPromise(s),Promise.resolve(this)}async addRating(e){const t={method:"post",query:{}}
return e instanceof _&&(e=e.rating),null==e||isNaN(e)||"number"!=typeof e||(t.query.rating=e),this.portal?(await this.portal.request(this.itemUrl+"/addRating",t),new _({rating:e,created:new Date})):null}clone(){const e={access:this.access,accessInformation:this.accessInformation,applicationProxies:Object(o.a)(this.applicationProxies),avgRating:this.avgRating,categories:Object(o.a)(this.categories),created:Object(o.a)(this.created),culture:this.culture,description:this.description,extent:Object(o.a)(this.extent),groupCategories:Object(o.a)(this.groupCategories),id:this.id,itemControl:this.itemControl,licenseInfo:this.licenseInfo,modified:Object(o.a)(this.modified),name:this.name,numComments:this.numComments,numRatings:this.numRatings,numViews:this.numViews,owner:this.owner,ownerFolder:this.ownerFolder,portal:this.portal,screenshots:Object(o.a)(this.screenshots),size:this.size,snippet:this.snippet,sourceUrl:this.sourceUrl,spatialReference:this.spatialReference,tags:Object(o.a)(this.tags),thumbnail:this.thumbnail,title:this.title,type:this.type,typeKeywords:Object(o.a)(this.typeKeywords),url:this.url}
this.loaded&&(e.loadStatus="loaded")
const t=new L({sourceJSON:this.sourceJSON}).set(e)
return t._set("isOrgItem",this.isOrgItem),t}createPostQuery(){const e=this.toJSON()
for(const t of["tags","typeKeywords","categories"])e[t]&&(e[t]=e[t].join(", "))
const{extent:t}=e
return t&&(e.extent=JSON.stringify(t)),e}async deleteRating(){await Object(c.w)(this.portal).request(this.itemUrl+"/deleteRating",{method:"post"})}fetchData(e="json",t){return Object(c.w)(this.portal).request(this.itemUrl+"/data",{responseType:e,...t,query:{token:this.apiKey}})}async fetchRating(e){const t=await Object(c.w)(this.portal).request(this.itemUrl+"/rating",{query:{token:this.apiKey},...e})
return null!=t.rating?(t.created=new Date(t.created),new _(t)):null}fetchRelatedItems(e,t){return Object(c.w)(this.portal).requestToTypedArray(this.itemUrl+"/relatedItems",{query:{...e,token:this.apiKey},...t},L)}getThumbnailUrl(e){let t=this.thumbnailUrl
return t&&e&&(t+="&w="+e),t}reload(){var e
return Object(c.w)(this.portal).request(null!=(e=this.itemUrl)?e:"",{cacheBust:!0,query:{token:this.apiKey}}).then(e=>(this.sourceJSON=e,this.read(e),this))}update(e){return this.id?this.load().then(()=>Object(c.w)(this.portal).signIn()).then(()=>{const t=e&&e.data,r={method:"post"}
r.query=this.createPostQuery()
for(const e in r.query)null===r.query[e]&&(r.query[e]="")
return r.query.clearEmptyFields=!0,null!=t&&("string"==typeof t?r.query.text=t:"object"==typeof t&&(r.query.text=JSON.stringify(t))),this.portal.request(this.userItemUrl+"/update",r).then(()=>this.reload())}):Promise.reject(new a.a("portal:item-does-not-exist","The item does not exist yet and cannot be updated"))}async copy(e){if(!this.id)throw new a.a("portal:item-does-not-exist","The item does not exist yet")
await this.load()
const{portal:t,itemUrl:r}=this
await Object(c.w)(t).signIn()
const{copyResources:s,folder:i,tags:n,title:o}=e||{},l={method:"post",query:{copyPrivateResources:"all"===s,folder:"string"==typeof i?i:null==i?void 0:i.id,includeResources:!!s,tags:null==n?void 0:n.join(","),title:o}},{itemId:p}=await t.request(r+"/copy",l)
return new L({id:p,portal:t})}updateThumbnail(e){return this.id?this.load().then(()=>this.portal.signIn()).then(()=>{const t=e.thumbnail,r=e.filename,s={method:"post"}
if("string"==typeof t)Object(p.z)(t)?s.query={data:t}:s.query={url:Object(p.F)(t)},Object(c.l)(r)&&(s.query.filename=r)
else{const e=new FormData
Object(c.l)(r)?e.append("file",t,r):e.append("file",t),s.body=e}return this.portal.request(this.userItemUrl+"/updateThumbnail",s).then(()=>this.reload())}):Promise.reject(new a.a("portal:item-does-not-exist","The item does not exist yet and cannot be updated"))}async fetchResources(e={},t){return(await r.e(34).then(r.bind(null,1935))).fetchResources(this,e,t)}async addResource(e,t,s){const i=await r.e(34).then(r.bind(null,1935))
return e.portalItem=this,i.addOrUpdateResource(e,"add",t,s)}async removeResource(e,t){const s=await r.e(34).then(r.bind(null,1935))
if(e.portalItem&&e.portalItem.itemUrl!==this.itemUrl)throw new a.a("removeresource:portal-item-mismatch","The portal item associated with the provided resource does not match the item")
return s.removeResource(this,e,t)}async removeAllResources(e){return(await r.e(34).then(r.bind(null,1935))).removeAllResources(this,e)}resourceFromPath(e){return new j({portalItem:this,path:e})}toJSON(){const e=this.extent,t={accessInformation:this.accessInformation,categories:Object(o.a)(this.categories),created:this.created&&this.created.getTime(),description:this.description,extent:e&&[[e.xmin,e.ymin],[e.xmax,e.ymax]],id:this.id,isOrgItem:this.isOrgItem,licenseInfo:this.licenseInfo,modified:this.modified&&this.modified.getTime(),name:this.name,owner:this.owner,ownerFolder:this.ownerFolder,snippet:this.snippet,sourceUrl:this.sourceUrl,spatialReference:this.spatialReference,tags:Object(o.a)(this.tags),thumbnail:this.thumbnail,title:this.title,type:this.type,typeKeywords:Object(o.a)(this.typeKeywords),url:this.url}
return Object(o.d)(t)}static fromJSON(e){if(!e)return null
if(e.declaredClass)throw new Error("JSON object is already hydrated")
return new L({sourceJSON:e})}_getPostQuery(){const e=this.toJSON()
for(const t in e)"tags"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"typeKeywords"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"extent"===t&&e[t]&&(e[t]=JSON.stringify(e[t]))
return e}}
Object(s.a)([Object(u.b)({type:["private","shared","org","public"]})],M.prototype,"access",void 0),Object(s.a)([Object(u.b)()],M.prototype,"accessInformation",void 0),Object(s.a)([Object(u.b)({type:String})],M.prototype,"apiKey",void 0),Object(s.a)([Object(u.b)({json:{read:{source:"appProxies"}}})],M.prototype,"applicationProxies",void 0),Object(s.a)([Object(u.b)()],M.prototype,"avgRating",void 0),Object(s.a)([Object(u.b)()],M.prototype,"categories",void 0),Object(s.a)([Object(u.b)({type:Date})],M.prototype,"created",void 0),Object(s.a)([Object(u.b)()],M.prototype,"culture",void 0),Object(s.a)([Object(u.b)()],M.prototype,"description",void 0),Object(s.a)([Object(u.b)({readOnly:!0})],M.prototype,"displayName",null),Object(s.a)([Object(u.b)({type:y.default})],M.prototype,"extent",void 0),Object(s.a)([Object(h.a)("extent")],M.prototype,"readExtent",null),Object(s.a)([Object(u.b)()],M.prototype,"groupCategories",void 0),Object(s.a)([Object(u.b)({readOnly:!0})],M.prototype,"iconUrl",null),Object(s.a)([Object(u.b)()],M.prototype,"id",void 0),Object(s.a)([Object(u.b)({readOnly:!0})],M.prototype,"isLayer",null),Object(s.a)([Object(u.b)({type:Boolean,readOnly:!0})],M.prototype,"isOrgItem",void 0),Object(s.a)([Object(u.b)()],M.prototype,"itemControl",void 0),Object(s.a)([Object(u.b)({readOnly:!0})],M.prototype,"itemPageUrl",null),Object(s.a)([Object(u.b)({readOnly:!0})],M.prototype,"itemUrl",null),Object(s.a)([Object(u.b)()],M.prototype,"licenseInfo",void 0),Object(s.a)([Object(u.b)({type:Date})],M.prototype,"modified",void 0),Object(s.a)([Object(u.b)()],M.prototype,"name",void 0),Object(s.a)([Object(u.b)()],M.prototype,"numComments",void 0),Object(s.a)([Object(u.b)()],M.prototype,"numRatings",void 0),Object(s.a)([Object(u.b)()],M.prototype,"numViews",void 0),Object(s.a)([Object(u.b)()],M.prototype,"owner",void 0),Object(s.a)([Object(u.b)()],M.prototype,"ownerFolder",void 0),Object(s.a)([Object(u.b)({type:m.a})],M.prototype,"portal",void 0),Object(s.a)([Object(u.b)()],M.prototype,"screenshots",void 0),Object(s.a)([Object(u.b)()],M.prototype,"size",void 0),Object(s.a)([Object(u.b)()],M.prototype,"snippet",void 0),Object(s.a)([Object(u.b)()],M.prototype,"sourceJSON",void 0),Object(s.a)([Object(u.b)({type:String})],M.prototype,"sourceUrl",void 0),Object(s.a)([Object(u.b)({type:String})],M.prototype,"spatialReference",void 0),Object(s.a)([Object(u.b)()],M.prototype,"tags",void 0),Object(s.a)([Object(u.b)()],M.prototype,"thumbnail",void 0),Object(s.a)([Object(u.b)({readOnly:!0})],M.prototype,"thumbnailUrl",null),Object(s.a)([Object(u.b)()],M.prototype,"title",void 0),Object(s.a)([Object(u.b)()],M.prototype,"type",void 0),Object(s.a)([Object(u.b)()],M.prototype,"typeKeywords",void 0),Object(s.a)([Object(u.b)({type:String,json:{read(e,t){if(T.has(t.type)){var r
const t=null==(r=this.portal)?void 0:r.restUrl
e||(e=t&&this.id?`${t}/content/items/${this.id}/data`:null)}return e}}})],M.prototype,"url",void 0),Object(s.a)([Object(u.b)({readOnly:!0})],M.prototype,"userItemUrl",null),M=L=Object(s.a)([Object(b.a)("esri.portal.PortalItem")],M)
const I=M},1179:function(e,t,r){"use strict"
r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return i}))
var s=r(993)
function i(e,t,r=s.a){return t||(t=new r),t===e||(t.removeAll(),(i=e)&&(Array.isArray(i)||"items"in i&&Array.isArray(i.items))?t.addMany(e):e&&t.add(e)),t
var i}function a(e){return e}},1229:function(e,t,r){"use strict"
r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return p})),r.d(t,"d",(function(){return d}))
var s=r(110),i=r(235),a=r(23),n=r(973),o=r(374)
function l(e,t,r=!1,s){return new Promise((o,l)=>{if(Object(n.k)(s))return void l(c())
let p=()=>{h(),l(new Error("Unable to load "+t))},u=()=>{const t=e
h(),o(t)},d=()=>{if(!e)return
const t=e
h(),t.src="",l(c())}
const h=()=>{Object(i.a)("esri-image-decode")||(e.removeEventListener("error",p),e.removeEventListener("load",u)),p=null,u=null,e=null,Object(a.l)(s)&&s.removeEventListener("abort",d),d=null,r&&URL.revokeObjectURL(t)}
Object(a.l)(s)&&s.addEventListener("abort",d),Object(i.a)("esri-image-decode")?e.decode().then(u,p):(e.addEventListener("error",p),e.addEventListener("load",u))})}function c(){try{return new DOMException("Aborted","AbortError")}catch{const e=new Error
return e.name="AbortError",e}}function p(e){s.default.request.crossOriginNoCorsDomains||(s.default.request.crossOriginNoCorsDomains={})
const t=s.default.request.crossOriginNoCorsDomains
for(let s of e){var r,i,a
s=s.toLowerCase(),/^https?:\/\//.test(s)?t[null!=(r=Object(o.p)(s))?r:""]=0:(t[null!=(i=Object(o.p)("http://"+s))?i:""]=0,t[null!=(a=Object(o.p)("https://"+s))?a:""]=0)}}function u(e){const t=s.default.request.crossOriginNoCorsDomains
if(t){let r=Object(o.p)(e)
if(r)return r=r.toLowerCase(),!Object(o.v)(r,Object(o.m)())&&t[r]<Date.now()-36e5}return!1}async function d(e){var t
const r=s.default.request.crossOriginNoCorsDomains,i=Object(o.p)(e)
r&&i&&(r[i.toLowerCase()]=Date.now())
const a=Object(o.Q)(e)
e=a.path,"json"===(null==(t=a.query)?void 0:t.f)&&(e+="?f=json")
try{await fetch(e,{mode:"no-cors",credentials:"include"})}catch{}}},1329:function(e,t,r){"use strict"
r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return l}))
var s=r(1034),i=r(993),a=r(1046),n=r(23)
async function o(e,t){return await e.load(),l(e,t)}async function l(e,t){const r=[],o=(...e)=>{for(const t of e)Object(n.k)(t)||(Array.isArray(t)?o(...t):i.a.isCollection(t)?t.forEach(e=>o(e)):a.a.isLoadable(t)&&r.push(t))}
t(o)
let l=null
if(await Object(s.d)(r,async e=>{const t=await Object(s.e)(function(e){return"loadAll"in e&&"function"==typeof e.loadAll}(e)?e.loadAll():e.load())
!1!==t.ok||l||(l=t)}),l)throw l.error
return e}},1518:function(e,t,r){"use strict"
r.d(t,"a",(function(){return d}))
var s=r(446),i=r(234),a=r(23),n=r(146),o=r(1364),l=r(1037)
const c=new Set(["bing-maps","imagery","imagery-tile","map-image","open-street-map","tile","unknown","unsupported","vector-tile","web-tile","wms","wmts"]),p=new Set(["csv","feature","geo-rss","geojson","group","imagery","imagery-tile","kml","map-image","map-notes","media","ogc-feature","route","subtype-group","tile","unknown","unsupported","vector-tile","web-tile","wfs","wms","wmts"])
function u(e,t){var r,s
"maxScale"in e&&(t.maxScale=null!=(r=Object(o.b)(e.maxScale))?r:void 0),"minScale"in e&&(t.minScale=null!=(s=Object(o.b)(e.minScale))?s:void 0)}function d(e,t,r){if(!("write"in e)||!e.write)return r&&r.messages&&r.messages.push(new s.a("layer:unsupported",`Layers (${e.title}, ${e.id}) of type '${e.declaredClass}' cannot be persisted`,{layer:e})),null
if(function(e,t){if(t.restrictedWebMapWriting){const r=function(e){return"basemap"===e.layerContainerType?c:"operational-layers"===e.layerContainerType?p:null}(t)
return!Object(a.l)(r)||r.has(e.type)&&!Object(l.f)(e)}return!0}(e,r)){const t={}
return e.write(t,r)?t:null}return Object(a.l)(t)&&function(e,t){var r
if(function(e,t){if(t)if(Object(l.f)(e)){const r=Object(n.b)("featureCollection.layers",t),s=r&&r[0]&&r[0].layerDefinition
s&&u(e,s)}else"stream"===e.type?u(e,t.layerDefinition=t.layerDefinition||{}):"group"!==e.type&&u(e,t)}(e,t),t&&("blendMode"in e&&(t.blendMode=e.blendMode,"normal"===t.blendMode&&delete t.blendMode),t.opacity=null!=(r=Object(o.b)(e.opacity))?r:void 0,t.title=e.title||"Layer",t.visibility=e.visible,"legendEnabled"in e&&"wmts"!==e.type))if(Object(l.f)(e)){const r=t.featureCollection
r&&(r.showLegend=e.legendEnabled)}else t.showLegend=e.legendEnabled}(e,t=Object(i.a)(t)),t}},771:function(e,t,r){"use strict"
r.r(t),r.d(t,"default",(function(){return b}))
var s=r(110),i=r(196),a=r(446),n=r(235),o=r(234),l=r(23),c=r(973),p=r(374),u=r(198),d=r(1146),h=r(1229)
async function b(e,t){var o
const u=Object(p.z)(e),f=Object(p.y)(e)
f||u||(e=Object(p.I)(e))
const v={url:e,requestOptions:{...Object(l.u)(t)}}
let O=Object(p.o)(e)
if(O){const e=await async function(e,t){if(null!=e.responseData)return e.responseData
if(e.headers&&(t.requestOptions.headers={...t.requestOptions.headers,...e.headers}),e.query&&(t.requestOptions.query={...t.requestOptions.query,...e.query}),e.before){let r,s
try{s=await e.before(t)}catch(e){r=L("request:interceptor",e,t)}if((s instanceof Error||s instanceof a.a)&&(r=L("request:interceptor",s,t)),r)throw e.error&&e.error(r),r
return s}}(O,v)
if(null!=e)return{data:e,getHeader:j,httpStatus:200,requestOptions:v.requestOptions,url:v.url}
O.after||O.error||(O=null)}if(e=v.url,"image"===(t=v.requestOptions).responseType){if(Object(n.a)("host-webworker")||Object(n.a)("host-node"))throw L("request:invalid-parameters",new Error("responseType 'image' is not supported in Web Workers or Node environment"),v)}else if(u)throw L("request:invalid-parameters",new Error("Data URLs are not supported for responseType = "+t.responseType),v)
if("head"===t.method){if(t.body)throw L("request:invalid-parameters",new Error("body parameter cannot be set when method is 'head'"),v)
if(u||f)throw L("request:invalid-parameters",new Error("data and blob URLs are not supported for method 'head'"),v)}if(await async function(){Object(n.a)("host-webworker")?y||(y=await r.e(760).then(r.bind(null,1482))):b._abortableFetch||(b._abortableFetch=globalThis.fetch.bind(globalThis))}(),y)return y.execute(e,t)
const w=new AbortController
Object(c.n)(t,()=>w.abort())
const _={controller:w,credential:void 0,credentialToken:void 0,fetchOptions:void 0,hasToken:!1,interceptor:O,params:v,redoRequest:!1,useIdentity:m.useIdentity,useProxy:!1,useSSL:!1,withCredentials:!1},I=await async function(e){var t,r
let a,n
await async function(e){var t,r
const a=e.params.url,n=e.params.requestOptions,o=e.controller.signal,l=n.body
let p=null,u=null
if(g&&"HTMLFormElement"in globalThis&&(l instanceof FormData?p=l:l instanceof HTMLFormElement&&(p=new FormData(l))),"string"==typeof l&&(u=l),e.fetchOptions={cache:n.cacheBust&&!b._abortableFetch.polyfill?"no-cache":"default",credentials:"same-origin",headers:n.headers||{},method:"head"===n.method?"HEAD":"GET",mode:"cors",priority:m.priority,redirect:"follow",signal:o},(p||u)&&(e.fetchOptions.body=p||u),"anonymous"===n.authMode&&(e.useIdentity=!1),e.hasToken=!!(/token=/i.test(a)||null!=(t=n.query)&&t.token||null!=(r=p)&&r.get("token")),!e.hasToken&&s.default.apiKey&&Object(d.a)(a)&&(n.query||(n.query={}),n.query.token=s.default.apiKey,e.hasToken=!0),e.useIdentity&&!e.hasToken&&!e.credentialToken&&!T(a)&&!Object(c.k)(o)){let t
"immediate"===n.authMode?(await S(),t=await i.b.getCredential(a,{signal:o}),e.credential=t):"no-prompt"===n.authMode?(await S(),t=await i.b.getCredential(a,{prompt:!1,signal:o}).catch(()=>{}),e.credential=t):i.b&&(t=i.b.findCredential(a)),t&&(e.credentialToken=t.token,e.useSSL=!!t.ssl)}}(e)
try{do{[a,n]=await M(e)}while(!await k(e,a,n))}catch(t){const r=L("request:server",t,e.params,a)
throw r.details.ssl=e.useSSL,e.interceptor&&e.interceptor.error&&e.interceptor.error(r),r}const o=e.params.url
if(n&&/\/sharing\/rest\/(accounts|portals)\/self/i.test(o)){var l
if(!e.hasToken&&!e.credentialToken&&null!=(l=n.user)&&l.username&&!Object(p.D)(o)){const e=Object(p.p)(o,!0)
e&&m.trustedServers.push(e)}Array.isArray(n.authorizedCrossOriginNoCorsDomains)&&Object(h.c)(n.authorizedCrossOriginNoCorsDomains)}const u=e.credential
if(u&&i.b){const e=i.b.findServerInfo(u.server)
let t=e&&e.owningSystemUrl
if(t){t=t.replace(/\/?$/,"/sharing")
const e=i.b.findCredential(t,u.userId)
e&&-1===i.b._getIdenticalSvcIdx(t,e)&&e.resources.unshift(t)}}return{data:n,getHeader:a?e=>{var t
return null==(t=a)?void 0:t.headers.get(e)}:j,httpStatus:null!=(t=null==(r=a)?void 0:r.status)?t:200,requestOptions:e.params.requestOptions,ssl:e.useSSL,url:e.params.url}}(_)
return null!=(o=O)&&null!=o.after&&o.after(I),I}let y
const m=s.default.request,g="FormData"in globalThis,f=[499,498,403,401],v=["COM_0056","COM_0057","SB_0008"],O=[/\/arcgis\/tokens/i,/\/sharing(\/rest)?\/generatetoken/i,/\/rest\/info/i],j=()=>null,w=Symbol()
function _(e){const t=Object(p.p)(e)
return!t||t.endsWith(".arcgis.com")||b._corsServers.includes(t)||Object(p.D)(t)}function L(e,t,r,s){let i="Error"
const n={url:r.url,requestOptions:r.requestOptions,getHeader:j,ssl:!1}
if(t instanceof a.a)return t.details?(t.details=Object(o.a)(t.details),t.details.url=r.url,t.details.requestOptions=r.requestOptions):t.details=n,t
if(t){const e=s&&(e=>s.headers.get(e)),r=s&&s.status,a=t.message
a&&(i=a),e&&(n.getHeader=e),n.httpStatus=(null!=t.httpCode?t.httpCode:t.code)||r||0,n.subCode=t.subcode,n.messageCode=t.messageCode,"string"==typeof t.details?n.messages=[t.details]:n.messages=t.details,n.raw=w in t?t[w]:t}return Object(c.j)(t)?Object(c.c)():new a.a(e,i,n)}async function S(){i.b||await Promise.all([r.e(5),r.e(18),r.e(59),r.e(475)]).then(r.bind(null,784))}function T(e){return O.some(t=>t.test(e))}async function M(e){var t
let r=e.params.url
const s=e.params.requestOptions,a=null!=(t=e.fetchOptions)?t:{},o=Object(p.y)(r)||Object(p.z)(r),l=s.responseType||"json",d=o?0:null!=s.timeout?s.timeout:m.timeout
let y=!1
if(!o){e.useSSL&&(r=Object(p.P)(r)),s.cacheBust&&"default"===a.cache&&(r=Object(p.d)(r,"request.preventCache",Date.now()))
let t={...s.query}
e.credentialToken&&(t.token=e.credentialToken)
let o=Object(p.J)(t)
Object(n.a)("esri-url-encodes-apostrophe")&&(o=o.replace(/'/g,"%27"))
const l=r.length+1+o.length
let c
y="delete"===s.method||"post"===s.method||"put"===s.method||!!s.body||l>m.maxUrlLength
const d=s.useProxy||!!Object(p.r)(r)
if(d){const e=Object(p.s)(r)
c=e.path,!y&&c.length+1+l>m.maxUrlLength&&(y=!0),e.query&&(t={...e.query,...t})}if("HEAD"===a.method&&(y||d)){if(y){if(l>m.maxUrlLength)throw L("request:invalid-parameters",new Error("URL exceeds maximum length"),e.params)
throw L("request:invalid-parameters",new Error("cannot use POST request when method is 'head'"),e.params)}if(d)throw L("request:invalid-parameters",new Error("cannot use proxy when method is 'head'"),e.params)}if(y?(a.method="delete"===s.method?"DELETE":"put"===s.method?"PUT":"POST",s.body?r=Object(p.e)(r,t):(a.body=Object(p.J)(t),a.headers||(a.headers={}),a.headers["Content-Type"]="application/x-www-form-urlencoded")):r=Object(p.e)(r,t),d&&(e.useProxy=!0,r=`${c}?${r}`),t.token&&g&&a.body instanceof FormData&&!Object(u.a)(r)&&a.body.set("token",t.token),s.hasOwnProperty("withCredentials"))e.withCredentials=s.withCredentials
else if(!Object(p.v)(r,Object(p.m)()))if(Object(p.D)(r))e.withCredentials=!0
else if(i.b){const t=i.b.findServerInfo(r)
t&&t.webTierAuth&&(e.withCredentials=!0)}e.withCredentials&&(a.credentials="include",Object(h.a)(r)&&await Object(h.d)(y?Object(p.e)(r,t):r))}let f,v,O=0,j=!1
d>0&&(O=setTimeout(()=>{j=!0,e.controller.abort()},d))
try{if("native-request-init"===s.responseType)v=a,v.url=r
else if("image"!==s.responseType||"default"!==a.cache||"GET"!==a.method||y||function(e){if(e)for(const t of Object.getOwnPropertyNames(e))if(e[t])return!0
return!1}(s.headers)||!o&&!e.useProxy&&m.proxyUrl&&!_(r)){if(f=await b._abortableFetch(r,a),e.useProxy||function(e){const t=Object(p.p)(e)
t&&!b._corsServers.includes(t)&&b._corsServers.push(t)}(r),"native"===s.responseType)v=f
else if("HEAD"!==a.method)if(f.ok){switch(l){case"array-buffer":v=await f.arrayBuffer()
break
case"blob":case"image":v=await f.blob()
break
default:v=await f.text()}if(O&&(clearTimeout(O),O=0),"json"===l||"xml"===l||"document"===l)if(v)switch(l){case"json":v=JSON.parse(v)
break
case"xml":v=I(v,"application/xml")
break
case"document":v=I(v,"text/html")}else v=null
if(v){if("array-buffer"===l||"blob"===l){const e=f.headers.get("Content-Type")
if(e&&/application\/json|text\/plain/i.test(e)&&v["blob"===l?"size":"byteLength"]<=750)try{const e=await new Response(v).json()
e.error&&(v=e)}catch{}}"image"===l&&v instanceof Blob&&(v=await E(URL.createObjectURL(v),e,!0))}}else v=await f.text()}else v=await E(r,e)}catch(t){var w
if("AbortError"===t.name){if(j)throw new Error("Timeout exceeded")
throw Object(c.c)("Request canceled")}if(!(!f&&t instanceof TypeError&&m.proxyUrl)||s.body||"delete"===s.method||"head"===s.method||"post"===s.method||"put"===s.method||e.useProxy||_(r))throw t
e.redoRequest=!0,Object(p.c)({proxyUrl:m.proxyUrl,urlPrefix:null!=(w=Object(p.p)(r))?w:""})}finally{O&&clearTimeout(O)}return[f,v]}function I(e,t){let r
try{r=(new DOMParser).parseFromString(e,t)}catch{}if(!r||r.getElementsByTagName("parsererror").length)throw new SyntaxError("XML Parse error")
return r}async function k(e,t,r){if(e.redoRequest)return e.redoRequest=!1,!1
const s=e.params.requestOptions
if(!t||"native"===s.responseType||"native-request-init"===s.responseType)return!0
let a,n
if(!t.ok)throw a=new Error(`Unable to load ${t.url} status: ${t.status}`),a[w]=r,a
r&&(r.error?a=r.error:"error"===r.status&&Array.isArray(r.messages)&&(a={...r},a[w]=r,a.details=r.messages))
let o,l=null
a&&(n=Number(a.code),l=a.hasOwnProperty("subcode")?Number(a.subcode):null,o=a.messageCode,o=o&&o.toUpperCase())
const c=s.authMode
if(403===n&&(4===l||a.message&&a.message.toLowerCase().includes("ssl")&&!a.message.toLowerCase().includes("permission"))){if(!e.useSSL)return e.useSSL=!0,!1}else if(!e.hasToken&&e.useIdentity&&("no-prompt"!==c||498===n)&&void 0!==n&&f.includes(n)&&!T(e.params.url)&&(403!==n||o&&!v.includes(o)&&(null==l||2===l&&e.credentialToken))){await S()
try{const t=await i.b.getCredential(e.params.url,{error:L("request:server",a,e.params),prompt:"no-prompt"!==c,signal:e.controller.signal,token:e.credentialToken})
return e.credential=t,e.credentialToken=t.token,e.useSSL=e.useSSL||t.ssl,!1}catch(t){if("no-prompt"===c)return e.credential=void 0,e.credentialToken=void 0,!1
a=t}}if(a)throw a
return!0}function E(e,t,r=!1){const s=t.controller.signal,i=new Image
return t.withCredentials?i.crossOrigin="use-credentials":i.crossOrigin="anonymous",i.alt="",i.fetchPriority=m.priority,i.src=e,Object(h.b)(i,e,r,s)}b._abortableFetch=null,b._corsServers=["https://server.arcgisonline.com","https://services.arcgisonline.com"]},780:function(e,t,r){"use strict"
r.r(t),r.d(t,"esriBasemapDefinitions",(function(){return n})),r.d(t,"getBasemapTitle",(function(){return a}))
var s=r(1019),i=r(1027)
async function a(e){if(!e)return
const t=e.includes("-vector")?e.slice(0,e.indexOf("-vector")):e,r=await Object(i.a)("esri/t9n/basemaps")
return r[e]||r[t]}const n={streets:{id:"streets",classic:!0,deprecated:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/streets.jpg")},baseMapLayers:[{id:"streets-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Street Map",showLegend:!1,visibility:!0,opacity:1}]},satellite:{id:"satellite",classic:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/satellite.jpg")},baseMapLayers:[{id:"satellite-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Imagery",showLegend:!1,visibility:!0,opacity:1}]},hybrid:{id:"hybrid",classic:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/hybrid.jpg")},baseMapLayers:[{id:"hybrid-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Imagery",showLegend:!1,visibility:!0,opacity:1},{id:"hybrid-reference-layer",styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/30d6b8271e1849cd9c3042060001f425/resources/styles/root.json",layerType:"VectorTileLayer",title:"Hybrid Reference Layer",isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},terrain:{id:"terrain",classic:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/terrain.jpg")},baseMapLayers:[{id:"terrain-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Terrain Base",showLegend:!1,visibility:!0,opacity:1},{id:"terrain-reference-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Reference_Overlay/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Reference Overlay",isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},topo:{id:"topo",classic:!0,deprecated:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/topo.jpg")},baseMapLayers:[{id:"topo-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Topo Map",showLegend:!1,visibility:!0,opacity:1}]},gray:{id:"gray",classic:!0,deprecated:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/gray.jpg")},baseMapLayers:[{id:"gray-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Light Gray Base",showLegend:!1,visibility:!0,opacity:1},{id:"gray-reference-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Light Gray Reference",isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},"dark-gray":{id:"dark-gray",classic:!0,deprecated:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/dark-gray.jpg")},baseMapLayers:[{id:"dark-gray-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Dark Gray Base",showLegend:!1,visibility:!0,opacity:1},{id:"dark-gray-reference-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Dark Gray Reference",isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},oceans:{id:"oceans",classic:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/oceans.jpg")},baseMapLayers:[{id:"oceans-base-layer",url:"//services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Ocean Base",showLegend:!1,visibility:!0,opacity:1},{id:"oceans-reference-layer",url:"//services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Reference/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Ocean Reference",isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},"national-geographic":{id:"national-geographic",classic:!0,deprecated:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/national-geographic.jpg")},baseMapLayers:[{id:"national-geographic-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer",title:"NatGeo World Map",showLegend:!1,layerType:"ArcGISTiledMapServiceLayer",visibility:!0,opacity:1}]},osm:{id:"osm",classic:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/osm.jpg")},baseMapLayers:[{id:"osm-base-layer",layerType:"OpenStreetMap",title:"Open Street Map",showLegend:!1,visibility:!0,opacity:1}]},"dark-gray-vector":{id:"dark-gray-vector",classic:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/dark-gray-vector.jpg")},baseMapLayers:[{id:"dark-gray-base-layer",styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/5e9b3685f4c24d8781073dd928ebda50/resources/styles/root.json",layerType:"VectorTileLayer",title:"Dark Gray Base",visibility:!0,opacity:1},{id:"dark-gray-reference-layer",styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/747cb7a5329c478cbe6981076cc879c5/resources/styles/root.json",layerType:"VectorTileLayer",title:"Dark Gray Reference",isReference:!0,visibility:!0,opacity:1}]},"gray-vector":{id:"gray-vector",classic:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/gray-vector.jpg")},baseMapLayers:[{id:"gray-base-layer",styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/291da5eab3a0412593b66d384379f89f/resources/styles/root.json",layerType:"VectorTileLayer",title:"Light Gray Base",visibility:!0,opacity:1},{id:"gray-reference-layer",styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/1768e8369a214dfab4e2167d5c5f2454/resources/styles/root.json",layerType:"VectorTileLayer",title:"Light Gray Reference",isReference:!0,visibility:!0,opacity:1}]},"streets-vector":{id:"streets-vector",classic:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/streets-vector.jpg")},baseMapLayers:[{id:"streets-vector-base-layer",styleUrl:"//cdn.arcgis.com/sharing/rest/content/items/de26a3cf4cc9451298ea173c4b324736/resources/styles/root.json",layerType:"VectorTileLayer",title:"World Streets",visibility:!0,opacity:1}]},"topo-vector":{id:"topo-vector",classic:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/topo-vector.jpg")},baseMapLayers:[{id:"world-hillshade-layer",url:"//services.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Hillshade",showLegend:!1,visibility:!0,opacity:1},{id:"topo-vector-base-layer",styleUrl:"//cdn.arcgis.com/sharing/rest/content/items/7dc6cea0b1764a1f9af2e679f642f0f5/resources/styles/root.json",layerType:"VectorTileLayer",title:"World Topo",visibility:!0,opacity:1}]},"streets-night-vector":{id:"streets-night-vector",classic:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/streets-night.jpg")},baseMapLayers:[{id:"streets-night-vector-base-layer",styleUrl:"//cdn.arcgis.com/sharing/rest/content/items/86f556a2d1fd468181855a35e344567f/resources/styles/root.json",layerType:"VectorTileLayer",title:"World Streets Night",visibility:!0,opacity:1}]},"streets-relief-vector":{id:"streets-relief-vector",classic:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/streets-relief.jpg")},baseMapLayers:[{id:"world-hillshade-layer",url:"//services.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Hillshade",showLegend:!1,visibility:!0,opacity:1},{id:"streets-relief-vector-base-layer",styleUrl:"//www.arcgis.com/sharing/rest/content/items/b266e6d17fc345b498345613930fbd76/resources/styles/root.json",title:"World Streets Relief",layerType:"VectorTileLayer",visibility:!0,opacity:1}]},"streets-navigation-vector":{id:"streets-navigation-vector",classic:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/streets-navigation.jpg")},baseMapLayers:[{id:"streets-navigation-vector-base-layer",styleUrl:"//cdn.arcgis.com/sharing/rest/content/items/63c47b7177f946b49902c24129b87252/resources/styles/root.json",layerType:"VectorTileLayer",title:"World Streets Navigation",visibility:!0,opacity:1}]},"arcgis-imagery":{get thumbnailUrl(){return Object(s.b)("esri/images/basemap/hybrid.jpg")},title:"Imagery Hybrid",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Imagery",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/World_Imagery/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Imagery:Labels",title:"Hybrid Reference Layer",isReference:!0}]},"arcgis-imagery-standard":{get thumbnailUrl(){return Object(s.b)("esri/images/basemap/satellite.jpg")},title:"Imagery",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Imagery",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/World_Imagery/MapServer"}]},"arcgis-imagery-labels":{title:"Hybrid [Reference]",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Imagery:Labels",title:"Hybrid Reference Layer",isReference:!0}]},"arcgis-light-gray":{get thumbnailUrl(){return Object(s.b)("esri/images/basemap/gray-vector.jpg")},title:"Light Gray Canvas",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:LightGray:Base",title:"Light Gray Canvas Base"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:LightGray:Labels",title:"Light Gray Canvas Labels",isReference:!0}]},"arcgis-dark-gray":{get thumbnailUrl(){return Object(s.b)("esri/images/basemap/dark-gray.jpg")},title:"Dark Gray Canvas",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:DarkGray:Base",title:"Dark Gray Canvas Base"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:DarkGray:Labels",title:"Dark Gray Canvas Labels",isReference:!0}]},"arcgis-navigation":{get thumbnailUrl(){return Object(s.b)("esri/images/basemap/streets-navigation.jpg")},title:"Navigation",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Navigation",title:"World Navigation Map"}]},"arcgis-navigation-night":{title:"Navigation (Dark Mode)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:NavigationNight",title:"World Navigation Map (Dark Mode)"}]},"arcgis-streets":{get thumbnailUrl(){return Object(s.b)("esri/images/basemap/streets-vector.jpg")},title:"Streets",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Streets",title:"World Street Map"}]},"arcgis-streets-night":{get thumbnailUrl(){return Object(s.b)("esri/images/basemap/streets-night.jpg")},title:"Streets (Night)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:StreetsNight",title:"World Street Map (Night)"}]},"arcgis-streets-relief":{get thumbnailUrl(){return Object(s.b)("esri/images/basemap/streets-relief.jpg")},title:"Streets (with Relief)",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:StreetsRelief:Base",title:"World Street Map (with Relief)"}]},"arcgis-topographic":{get thumbnailUrl(){return Object(s.b)("esri/images/basemap/topo.jpg")},title:"Topographic",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Topographic:Base",title:"World Topographic Map"}]},"arcgis-oceans":{get thumbnailUrl(){return Object(s.b)("esri/images/basemap/oceans.jpg")},title:"Oceans",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Ocean Base",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Oceans:Labels",title:"World Ocean Reference",isReference:!0}]},"osm-standard":{title:"OpenStreetMap",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:Standard",title:"OpenStreetMap"}]},"osm-standard-relief":{title:"OpenStreetMap (with relief)",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:StandardRelief:Base",layerType:"VectorTileLayer",title:"OpenStreetMap Relief Base"}]},"osm-streets":{title:"OpenStreetMap (Streets)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:Streets",title:"OpenStreetMap (Streets)"}]},"osm-streets-relief":{title:"OpenStreetMap (Streets with relief)",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:StreetsRelief:Base",layerType:"VectorTileLayer",title:"OpenStreetMap Relief Base"}]},"osm-light-gray":{title:"OpenStreetMap (Light Gray Canvas)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:LightGray:Base",title:"OSM (Light Gray Base)"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:LightGray:Labels",title:"OSM (Light Gray Reference)",isReference:!0}]},"osm-dark-gray":{title:"OpenStreetMap (Dark Gray Canvas)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:DarkGray:Base",title:"OSM (Dark Gray Base)"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:DarkGray:Labels",title:"OSM (Dark Gray Reference)",isReference:!0}]},"arcgis-terrain":{title:"Terrain with Labels",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Terrain:Base",title:"World Terrain Base"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Terrain:Detail",title:"World Terrain Reference",isReference:!0}]},"arcgis-community":{title:"Community",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Community",title:"Community"}]},"arcgis-charted-territory":{title:"Charted Territory",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:ChartedTerritory:Base",title:"Charted Territory"}]},"arcgis-colored-pencil":{title:"Colored Pencil",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:ColoredPencil",title:"Colored Pencil"}]},"arcgis-nova":{title:"Nova",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Nova",title:"Nova"}]},"arcgis-modern-antique":{title:"Modern Antique",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:ModernAntique:Base",title:"Modern Antique"}]},"arcgis-midcentury":{title:"Mid-Century",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Midcentury",title:"Mid-Century"}]},"arcgis-newspaper":{title:"Newspaper",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Newspaper",title:"Newspaper"}]},"arcgis-hillshade-light":{title:"Hillshade",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"}]},"arcgis-hillshade-dark":{title:"Hillshade (Dark)",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade (Dark)",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade_Dark/MapServer"}]},"arcgis-human-geography":{title:"Human Geography",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:HumanGeography:Base",title:"Human Geography Base"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:HumanGeography:Detail",title:"Human Geography Detail",isReference:!0},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:HumanGeography:Label",title:"Human Geography Label",isReference:!0}]},"arcgis-human-geography-dark":{title:"Human Geography (Dark)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:HumanGeographyDark:Base",title:"Human Geography Dark Base"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:HumanGeographyDark:Detail",title:"Human Geography Dark Detail",isReference:!0},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:HumanGeographyDark:Label",title:"Human Geography Dark Label",isReference:!0}]}}},782:function(e,t,r){"use strict"
r.r(t),r.d(t,"default",(function(){return M}))
var s,i=r(968),a=r(993),n=r(1179),o=r(1095),l=r(972),c=r(234),p=r(1046),u=r(1329),d=r(233),h=r(23),b=r(973),y=r(374),m=r(970),g=(r(971),r(969)),f=r(974),v=r(769),O=r(1028),j=r(1154),w=r(780),_=r(1518)
let L=0
const S="esri.Basemap"
let T=s=class extends(Object(l.b)(p.a)){constructor(e){super(e),this.id=null,this.portalItem=null,this.spatialReference=null,this.thumbnailUrl=null,this.title="Basemap",this.id=Date.now().toString(16)+"-basemap-"+L++,this.baseLayers=new a.a,this.referenceLayers=new a.a
const t=e=>{e.parent&&e.parent!==this&&"remove"in e.parent&&e.parent.remove(e),e.parent=this,"elevation"===e.type&&d.a.getLogger(this.declaredClass).error(`Layer '${e.title}, id:${e.id}' of type '${e.type}' is not supported as a basemap layer and will therefore be ignored.`)},r=e=>{e.parent=null}
this.baseLayers.on("after-add",e=>t(e.item)),this.referenceLayers.on("after-add",e=>t(e.item)),this.baseLayers.on("after-remove",e=>r(e.item)),this.referenceLayers.on("after-remove",e=>r(e.item))}initialize(){this.when().catch(e=>{d.a.getLogger(this.declaredClass).error("#load()",`Failed to load basemap (title: '${this.title}', id: '${this.id}')`,e)}),this.resourceInfo&&this.read(this.resourceInfo.data,this.resourceInfo.context)}destroy(){var e
const t=this.baseLayers.removeAll()
for(const e of t)e.destroy()
const r=this.referenceLayers.removeAll()
for(const e of r)e.destroy()
this.baseLayers.destroy(),this.referenceLayers.destroy(),null!=(e=this.portalItem)&&e.destroy(),this.portalItem=null}normalizeCtorArgs(e){return e&&"resourceInfo"in e&&(this._set("resourceInfo",e.resourceInfo),delete(e={...e}).resourceInfo),e}set baseLayers(e){this._set("baseLayers",Object(n.b)(e,this._get("baseLayers")))}_writeBaseLayers(e,t,r){const s=[]
e?(r={...r,layerContainerType:"basemap"},this.baseLayers.forEach(e=>{const t=Object(_.a)(e,r.webmap?r.webmap.getLayerJSONFromResourceInfo(e):null,r)
Object(h.l)(t)&&s.push(t)}),this.referenceLayers.forEach(e=>{const t=Object(_.a)(e,r.webmap?r.webmap.getLayerJSONFromResourceInfo(e):null,r)
Object(h.l)(t)&&("scene"!==e.type&&(t.isReference=!0),s.push(t))}),t.baseMapLayers=s):t.baseMapLayers=s}set referenceLayers(e){this._set("referenceLayers",Object(n.b)(e,this._get("referenceLayers")))}writeTitle(e,t){t.title=e||"Basemap"}load(e){return this.addResolvingPromise(this._loadFromSource(e)),Promise.resolve(this)}loadAll(){return Object(u.a)(this,e=>{e(this.baseLayers,this.referenceLayers)})}clone(){const e={id:this.id,title:this.title,portalItem:this.portalItem,baseLayers:this.baseLayers.slice(),referenceLayers:this.referenceLayers.slice()}
return this.loaded&&(e.loadStatus="loaded"),new s({resourceInfo:this.resourceInfo}).set(e)}read(e,t){this.resourceInfo||this._set("resourceInfo",{data:e,context:t}),super.read(e,t)}write(e,t){return e=e||{},t&&t.origin||(t={origin:"web-map",...t}),super.write(e,t),!this.loaded&&this.resourceInfo&&this.resourceInfo.data.baseMapLayers&&(e.baseMapLayers=this.resourceInfo.data.baseMapLayers.map(e=>{const t=Object(c.a)(e)
return t.url&&Object(y.B)(t.url)&&(t.url="https:"+t.url),t.templateUrl&&Object(y.B)(t.templateUrl)&&(t.templateUrl="https:"+t.templateUrl),t})),e}async _loadFromSource(e){const{resourceInfo:t,portalItem:r}=this
Object(b.q)(e)
const s=[]
if(t){const r=t.context?t.context.url:null
if(s.push(this._loadLayersFromJSON(t.data,r,e)),t.data.id&&!t.data.title){const e=t.data.id
s.push(Object(w.getBasemapTitle)(e).then(e=>{e&&this.read({title:e},t.context)}))}}else r&&s.push(this._loadFromItem(r,e))
await Promise.all(s)}async _loadLayersFromJSON(e,t,s){const i=this.resourceInfo&&this.resourceInfo.context,a=this.portalItem&&this.portalItem.portal||i&&i.portal||null,n=i&&"web-scene"===i.origin?"web-scene":"web-map",{populateOperationalLayers:o}=await Promise.all([r.e(1),r.e(30),r.e(251)]).then(r.bind(null,1781)),l=[]
if(Object(b.q)(s),e.baseMapLayers&&Array.isArray(e.baseMapLayers)){const r={context:{origin:n,url:t,portal:a,layerContainerType:"basemap"},defaultLayerType:"DefaultTileLayer"},s=e=>"web-scene"===n&&"ArcGISSceneServiceLayer"===e.layerType||e.isReference,i=o(this.baseLayers,e.baseMapLayers.filter(e=>!s(e)),r)
l.push(i)
const c=o(this.referenceLayers,e.baseMapLayers.filter(s),r)
l.push(c)}await Object(b.g)(l)}async _loadFromItem(e,t){var r,s
const i=await e.load(t),a=await i.fetchData("json",t),n=Object(y.Q)(null!=(r=e.itemUrl)?r:"")
return this._set("resourceInfo",{data:null!=(s=a.baseMap)?s:{},context:{origin:"Web Scene"===e.type?"web-scene":"web-map",portal:e.portal||O.a.getDefault(),url:n}}),this.read(this.resourceInfo.data,this.resourceInfo.context),this.read({spatialReference:a.spatialReference},this.resourceInfo.context),this.read({title:e.title,thumbnailUrl:e.thumbnailUrl},{origin:"portal-item",portal:e.portal||O.a.getDefault(),url:n}),this._loadLayersFromJSON(this.resourceInfo.data,n,t)}static fromId(e){const t=w.esriBasemapDefinitions[e]
if(t){if(t.deprecated){let t=null
"dark-gray"===e?t="dark-gray-vector":"gray"===e?t="gray-vector":"streets"===e?t="streets-vector":"topo"===e&&(t="topo-vector"),Object(o.a)(d.a.getLogger(S),`The ${e} basemap has entered mature support and is no longer being updated.`,{replacement:t,see:"https://arcg.is/1iq8aD",warnOnce:!0})}return s.fromJSON(t)}return null}}
Object(i.a)([Object(m.b)({json:{write:{ignoreOrigin:!0,target:"baseMapLayers",writer(e,t,r,s){this._writeBaseLayers(e,t,s)}},origins:{"web-scene":{write:{ignoreOrigin:!0,target:{baseMapLayers:{type:a.a}},writer(e,t,r,s){this._writeBaseLayers(e,t,s)}}}}}})],T.prototype,"baseLayers",null),Object(i.a)([Object(m.b)({type:String,json:{origins:{"web-scene":{write:!0}}}})],T.prototype,"id",void 0),Object(i.a)([Object(m.b)({type:j.default})],T.prototype,"portalItem",void 0),Object(i.a)([Object(m.b)()],T.prototype,"referenceLayers",null),Object(i.a)([Object(m.b)({readOnly:!0})],T.prototype,"resourceInfo",void 0),Object(i.a)([Object(m.b)({type:v.default})],T.prototype,"spatialReference",void 0),Object(i.a)([Object(m.b)()],T.prototype,"thumbnailUrl",void 0),Object(i.a)([Object(m.b)({type:String,json:{origins:{"web-scene":{write:{isRequired:!0}}}}})],T.prototype,"title",void 0),Object(i.a)([Object(f.a)("title")],T.prototype,"writeTitle",null),T=s=Object(i.a)([Object(g.a)(S)],T)
const M=T},993:function(e,t,r){"use strict"
r.d(t,"a",(function(){return k}))
var s,i=r(968),a=r(1117),n=r(1002),o=r(234),l=r(23),c=r(1049),p=r(1114),u=r(1024),d=r(970),h=r(971),b=r(1082),y=r(969),m=r(1060),g=r(1087)
const f=new c.a(class{constructor(){this.target=null,this.cancellable=!1,this.defaultPrevented=!1,this.item=void 0,this.type=void 0}preventDefault(){this.cancellable&&(this.defaultPrevented=!0)}reset(e){this.defaultPrevented=!1,this.item=e}},void 0,e=>{e.item=null,e.target=null,e.defaultPrevented=!1,e.cancellable=!1}),v=()=>{}
function O(e){return e?e instanceof I?e.toArray():e.length?Array.prototype.slice.apply(e):[]:[]}function j(e){if(e&&e.length)return e[0]}function w(e,t,r,s){const i=Math.min(e.length-r,t.length-s)
let a=0
for(;a<i&&e[r+a]===t[s+a];)a++
return a}const _=new Set,L=new Set,S=new Set,T=new Map
let M=0,I=s=class extends n.a.EventedAccessor{static isCollection(e){return null!=e&&e instanceof s}constructor(e){super(e),this._chgListeners=[],this._notifications=null,this._timer=null,this._observable=new g.a,this.length=0,this._items=[],Object.defineProperty(this,"uid",{value:M++})}normalizeCtorArgs(e){return e?Array.isArray(e)||e instanceof s?{items:e}:e:{}}destroy(){this.removeAll()}*[Symbol.iterator](){yield*this.items}get items(){return Object(m.d)(this._observable),this._items}set items(e){this._emitBeforeChanges(p.a.ADD)||(this._splice(0,this.length,O(e)),this._emitAfterChanges(p.a.ADD))}hasEventListener(e){return"change"===e?this._chgListeners.length>0:this._emitter.hasEventListener(e)}on(e,t){if("change"===e){const e=this._chgListeners,r={removed:!1,callback:t}
return e.push(r),this._notifications&&this._notifications.push({listeners:e.slice(),items:this._items.slice(),changes:[]}),{remove(){this.remove=v,r.removed=!0,e.splice(e.indexOf(r),1)}}}return this._emitter.on(e,t)}once(e,t){const r=this.on(e,t)
return{remove(){r.remove()}}}add(e,t){if(Object(m.d)(this._observable),this._emitBeforeChanges(p.a.ADD))return this
const r=this.getNextIndex(null!=t?t:null)
return this._splice(r,0,[e]),this._emitAfterChanges(p.a.ADD),this}addMany(e,t=this._items.length){if(Object(m.d)(this._observable),!e||!e.length)return this
if(this._emitBeforeChanges(p.a.ADD))return this
const r=this.getNextIndex(t)
return this._splice(r,0,O(e)),this._emitAfterChanges(p.a.ADD),this}at(e){if(Object(m.d)(this._observable),(e=Math.trunc(e)||0)<0&&(e+=this.length),!(e<0||e>=this.length))return this._items[e]}removeAll(){if(Object(m.d)(this._observable),!this.length||this._emitBeforeChanges(p.a.REMOVE))return[]
const e=this._splice(0,this.length)||[]
return this._emitAfterChanges(p.a.REMOVE),e}clone(){return Object(m.d)(this._observable),this._createNewInstance({items:this._items.map(o.a)})}concat(...e){Object(m.d)(this._observable)
const t=e.map(O)
return this._createNewInstance({items:this._items.concat(...t)})}drain(e,t){if(Object(m.d)(this._observable),!this.length||this._emitBeforeChanges(p.a.REMOVE))return
const r=Object(l.d)(this._splice(0,this.length)),s=r.length
for(let i=0;i<s;i++)e.call(t,r[i],i,r)
this._emitAfterChanges(p.a.REMOVE)}every(e,t){return Object(m.d)(this._observable),this._items.every(e,t)}filter(e,t){let r
return Object(m.d)(this._observable),r=2===arguments.length?this._items.filter(e,t):this._items.filter(e),this._createNewInstance({items:r})}find(e,t){return Object(m.d)(this._observable),this._items.find(e,t)}findIndex(e,t){return Object(m.d)(this._observable),this._items.findIndex(e,t)}flatten(e,t){Object(m.d)(this._observable)
const r=[]
return function e(t,r,s,i){r&&r.forEach((r,a,n)=>{t.push(r),e(t,s.call(i,r,a,n),s,i)})}(r,this,e,t),new s(r)}forEach(e,t){return Object(m.d)(this._observable),this._items.forEach(e,t)}getItemAt(e){return Object(m.d)(this._observable),this._items[e]}getNextIndex(e){var t
Object(m.d)(this._observable)
const r=this.length
return(e=null!=(t=e)?t:r)<0?e=0:e>r&&(e=r),e}includes(e,t=0){return Object(m.d)(this._observable),this._items.includes(e,t)}indexOf(e,t=0){return Object(m.d)(this._observable),this._items.indexOf(e,t)}join(e=","){return Object(m.d)(this._observable),this._items.join(e)}lastIndexOf(e,t=this.length-1){return Object(m.d)(this._observable),this._items.lastIndexOf(e,t)}map(e,t){Object(m.d)(this._observable)
const r=this._items.map(e,t)
return new s({items:r})}reorder(e,t=this.length-1){Object(m.d)(this._observable)
const r=this.indexOf(e)
if(-1!==r){if(t<0?t=0:t>=this.length&&(t=this.length-1),r!==t){if(this._emitBeforeChanges(p.a.MOVE))return e
this._splice(r,1),this._splice(t,0,[e]),this._emitAfterChanges(p.a.MOVE)}return e}}pop(){if(Object(m.d)(this._observable),!this.length||this._emitBeforeChanges(p.a.REMOVE))return
const e=j(this._splice(this.length-1,1))
return this._emitAfterChanges(p.a.REMOVE),e}push(...e){return Object(m.d)(this._observable),this._emitBeforeChanges(p.a.ADD)||(this._splice(this.length,0,e),this._emitAfterChanges(p.a.ADD)),this.length}reduce(e,t){Object(m.d)(this._observable)
const r=this._items
return 2===arguments.length?r.reduce(e,t):r.reduce(e)}reduceRight(e,t){Object(m.d)(this._observable)
const r=this._items
return 2===arguments.length?r.reduceRight(e,t):r.reduceRight(e)}remove(e){return Object(m.d)(this._observable),this.removeAt(this.indexOf(e))}removeAt(e){if(Object(m.d)(this._observable),e<0||e>=this.length||this._emitBeforeChanges(p.a.REMOVE))return
const t=j(this._splice(e,1))
return this._emitAfterChanges(p.a.REMOVE),t}removeMany(e){if(Object(m.d)(this._observable),!e||!e.length||this._emitBeforeChanges(p.a.REMOVE))return[]
const t=e instanceof s?e.toArray():e,r=this._items,i=[],a=t.length
for(let e=0;e<a;e++){const s=t[e],a=r.indexOf(s)
if(a>-1){const s=1+w(t,r,e+1,a+1),n=this._splice(a,s)
n&&n.length>0&&i.push.apply(i,n),e+=s-1}}return this._emitAfterChanges(p.a.REMOVE),i}reverse(){if(Object(m.d)(this._observable),this._emitBeforeChanges(p.a.MOVE))return this
const e=this._splice(0,this.length)
return e&&(e.reverse(),this._splice(0,0,e)),this._emitAfterChanges(p.a.MOVE),this}shift(){if(Object(m.d)(this._observable),!this.length||this._emitBeforeChanges(p.a.REMOVE))return
const e=j(this._splice(0,1))
return this._emitAfterChanges(p.a.REMOVE),e}slice(e=0,t=this.length){return Object(m.d)(this._observable),this._createNewInstance({items:this._items.slice(e,t)})}some(e,t){return Object(m.d)(this._observable),this._items.some(e,t)}sort(e){if(Object(m.d)(this._observable),!this.length||this._emitBeforeChanges(p.a.MOVE))return this
const t=Object(l.d)(this._splice(0,this.length))
return arguments.length?t.sort(e):t.sort(),this._splice(0,0,t),this._emitAfterChanges(p.a.MOVE),this}splice(e,t,...r){Object(m.d)(this._observable)
const s=(t?p.a.REMOVE:0)|(r.length?p.a.ADD:0)
if(this._emitBeforeChanges(s))return[]
const i=this._splice(e,t,r)||[]
return this._emitAfterChanges(s),i}toArray(){return Object(m.d)(this._observable),this._items.slice()}toJSON(){return Object(m.d)(this._observable),this.toArray()}toLocaleString(){return Object(m.d)(this._observable),this._items.toLocaleString()}toString(){return Object(m.d)(this._observable),this._items.toString()}unshift(...e){return Object(m.d)(this._observable),!e.length||this._emitBeforeChanges(p.a.ADD)||(this._splice(0,0,e),this._emitAfterChanges(p.a.ADD)),this.length}_createNewInstance(e){return new this.constructor(e)}_splice(e,t,r){const s=this._items,i=this.itemType
let a,n
if(!this._notifications&&this.hasEventListener("change")&&(this._notifications=[{listeners:this._chgListeners.slice(),items:this._items.slice(),changes:[]}],this._timer&&this._timer.remove(),this._timer=Object(u.b)(()=>this._dispatchChange())),t){if(n=s.splice(e,t),this.hasEventListener("before-remove")){const t=f.acquire()
t.target=this,t.cancellable=!0
for(let r=0,i=n.length;r<i;r++)a=n[r],t.reset(a),this.emit("before-remove",t),t.defaultPrevented&&(n.splice(r,1),s.splice(e,0,a),e+=1,r-=1,i-=1)
f.release(t)}if(this.length=this._items.length,this.hasEventListener("after-remove")){const e=f.acquire()
e.target=this,e.cancellable=!1
const t=n.length
for(let r=0;r<t;r++)e.reset(n[r]),this.emit("after-remove",e)
f.release(e)}}if(r&&r.length){if(i){const e=[]
for(const t of r){const r=i.ensureType(t)
null==r&&null!=t||e.push(r)}r=e}const t=this.hasEventListener("before-add"),a=this.hasEventListener("after-add"),n=e===this.length
if(t||a){const i=f.acquire()
i.target=this,i.cancellable=!0
const o=f.acquire()
o.target=this,o.cancellable=!1
for(const l of r)t?(i.reset(l),this.emit("before-add",i),i.defaultPrevented||(n?s.push(l):s.splice(e++,0,l),this._set("length",s.length),a&&(o.reset(l),this.emit("after-add",o)))):(n?s.push(l):s.splice(e++,0,l),this._set("length",s.length),o.reset(l),this.emit("after-add",o))
f.release(o),f.release(i)}else{if(n)for(const e of r)s.push(e)
else s.splice(e,0,...r)
this._set("length",s.length)}}return(r&&r.length||n&&n.length)&&this._notifyChangeEvent(r,n),n}_emitBeforeChanges(e){let t=!1
if(this.hasEventListener("before-changes")){const r=f.acquire()
r.target=this,r.cancellable=!0,r.type=e,this.emit("before-changes",r),t=r.defaultPrevented,f.release(r)}return t}_emitAfterChanges(e){if(this.hasEventListener("after-changes")){const t=f.acquire()
t.target=this,t.cancellable=!1,t.type=e,this.emit("after-changes",t),f.release(t)}this._observable.notify()}_notifyChangeEvent(e,t){this.hasEventListener("change")&&this._notifications&&this._notifications[this._notifications.length-1].changes.push({added:e,removed:t})}_dispatchChange(){if(this._timer&&(this._timer.remove(),this._timer=null),!this._notifications)return
const e=this._notifications
this._notifications=null
for(const t of e){const e=t.changes
_.clear(),L.clear(),S.clear()
for(const{added:t,removed:r}of e){if(t)if(0===S.size&&0===L.size)for(const e of t)_.add(e)
else for(const e of t)L.has(e)?(S.add(e),L.delete(e)):S.has(e)||_.add(e)
if(r)if(0===S.size&&0===_.size)for(const e of r)L.add(e)
else for(const e of r)_.has(e)?_.delete(e):(S.delete(e),L.add(e))}const r=a.a.acquire()
_.forEach(e=>{r.push(e)})
const s=a.a.acquire()
L.forEach(e=>{s.push(e)})
const i=this._items,n=t.items,o=a.a.acquire()
if(S.forEach(e=>{n.indexOf(e)!==i.indexOf(e)&&o.push(e)}),t.listeners&&(r.length||s.length||o.length)){const e={target:this,added:r,removed:s,moved:o},i=t.listeners.length
for(let r=0;r<i;r++){const s=t.listeners[r]
s.removed||s.callback.call(this,e)}}a.a.release(r),a.a.release(s),a.a.release(o)}_.clear(),L.clear(),S.clear()}}
I.ofType=e=>{if(!e)return s
if(T.has(e))return T.get(e)
let t=null
if("function"==typeof e)t=e.prototype.declaredClass
else if(e.base)t=e.base.prototype.declaredClass
else for(const r in e.typeMap){const s=e.typeMap[r].prototype.declaredClass
t?t+=" | "+s:t=s}let r=class extends s{}
return Object(i.a)([Object(b.a)({Type:e,ensureType:"function"==typeof e?Object(h.m)(e):Object(h.k)(e)})],r.prototype,"itemType",void 0),r=Object(i.a)([Object(y.a)(`esri.core.Collection<${t}>`)],r),T.set(e,r),r},Object(i.a)([Object(d.b)()],I.prototype,"length",void 0),Object(i.a)([Object(d.b)()],I.prototype,"items",null),I=s=Object(i.a)([Object(y.a)("esri.core.Collection")],I)
const k=I}}])
