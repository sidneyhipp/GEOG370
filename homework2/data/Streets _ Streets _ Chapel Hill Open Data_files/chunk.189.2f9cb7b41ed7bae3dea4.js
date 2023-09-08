(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[189,0,7,20,22,30,193,320,326,763],{1002:function(e,t,n){"use strict"
n.d(t,"a",(function(){return c}))
var r=n(968),i=n(975),o=n(1017),a=n(969)
class s{constructor(){this._emitter=new s.EventEmitter(this)}emit(e,t){return this._emitter.emit(e,t)}on(e,t){return this._emitter.on(e,t)}once(e,t){return this._emitter.once(e,t)}hasEventListener(e){return this._emitter.hasEventListener(e)}}!function(e){class t{constructor(e=null){this._target=e,this._listenersMap=null}clear(){this._listenersMap&&this._listenersMap.clear(),this._listenersMap=null}emit(e,t){const n=this._listenersMap&&this._listenersMap.get(e)
if(!n)return!1
const r=this._target||this
return[...n].forEach(e=>{e.call(r,t)}),n.length>0}on(e,t){if(Array.isArray(e)){const n=e.map(e=>this.on(e,t))
return Object(o.b)(n)}if(e.includes(","))throw new TypeError("Evented.on() with a comma delimited string of event types is not supported")
this._listenersMap||(this._listenersMap=new Map)
const n=this._listenersMap.get(e)||[]
return n.push(t),this._listenersMap.set(e,n),{remove:()=>{const n=this._listenersMap&&this._listenersMap.get(e)||[],r=n.indexOf(t)
r>=0&&n.splice(r,1)}}}once(e,t){const n=this.on(e,e=>{n.remove(),t.call(null,e)})
return n}hasEventListener(e){const t=this._listenersMap&&this._listenersMap.get(e)
return null!=t&&t.length>0}}e.EventEmitter=t,e.EventedMixin=e=>{let n=class extends e{constructor(){super(...arguments),this._emitter=new t}destroy(){this._emitter.clear()}emit(e,t){return this._emitter.emit(e,t)}on(e,t){return this._emitter.on(e,t)}once(e,t){return this._emitter.once(e,t)}hasEventListener(e){return this._emitter.hasEventListener(e)}}
return n=Object(r.a)([Object(a.a)("esri.core.Evented")],n),n}
let n=class extends i.a{constructor(){super(...arguments),this._emitter=new s.EventEmitter(this)}destroy(){this._emitter.clear()}emit(e,t){return this._emitter.emit(e,t)}on(e,t){return this._emitter.on(e,t)}once(e,t){return this._emitter.once(e,t)}hasEventListener(e){return this._emitter.hasEventListener(e)}}
n=Object(r.a)([Object(a.a)("esri.core.Evented")],n),e.EventedAccessor=n}(s||(s={}))
const c=s},1004:function(e,t,n){"use strict"
n.d(t,"a",(function(){return u}))
var r=n(968),i=n(972),o=n(970),a=(n(971),n(445),n(977)),s=n(969),c=n(769)
let l=class extends i.a{constructor(...e){super(...e),this.type=null,this.hasM=!1,this.hasZ=!1,this.spatialReference=c.default.WGS84}get cache(){return this.commitProperty("spatialReference"),{}}get extent(){return null}readSpatialReference(e,t){if(e instanceof c.default)return e
if(null!=e){const n=new c.default
return n.read(e,t),n}return e}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}clearCache(){this.notifyChange("cache")}getCacheValue(e){return this.cache[e]}setCacheValue(e,t){this.cache[e]=t}}
Object(r.a)([Object(o.b)()],l.prototype,"type",void 0),Object(r.a)([Object(o.b)({readOnly:!0})],l.prototype,"cache",null),Object(r.a)([Object(o.b)({readOnly:!0})],l.prototype,"extent",null),Object(r.a)([Object(o.b)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],l.prototype,"hasM",void 0),Object(r.a)([Object(o.b)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],l.prototype,"hasZ",void 0),Object(r.a)([Object(o.b)({type:c.default,json:{write:!0},value:c.default.WGS84})],l.prototype,"spatialReference",void 0),Object(r.a)([Object(a.a)("spatialReference")],l.prototype,"readSpatialReference",null),l=Object(r.a)([Object(s.a)("esri.geometry.Geometry")],l)
const u=l},1010:function(e,t,n){"use strict"
n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return l})),n(982)
var r=n(446),i=n(233),o=n(23),a=n(769)
const s=i.a.getLogger("esri.support.arcadeOnDemand")
let c
function l(){return c||(c=(async()=>{const e=await Promise.all([n.e(2),n.e(33),n.e(52),n.e(226)]).then(n.bind(null,1319))
return{arcade:e.arcade,arcadeUtils:e,Dictionary:e.Dictionary,Feature:e.arcadeFeature}})()),c}const u=(e,t,n)=>h.create(e,t,n,null,["$feature"]),d=(e,t,n)=>h.create(e,t,n,null,["$feature","$view"]),f=(e,t,n,r)=>h.create(e,t,n,r,["$feature","$view"])
class h{constructor(e,t,n,r,i,o,a){this.script=e,this.evaluate=r
const s=Array.isArray(o)?o:o.fields
this.fields=s,this._syntaxTree=n,this._arcade=t,this._arcadeFeature=i,this._spatialReference=a,this._referencesGeometry=t.scriptTouchesGeometry(this._syntaxTree),this._referencesScale=this._arcade.referencesMember(this._syntaxTree,"scale")}static async create(e,t,n,i,c,u){const{arcade:d,Feature:f,Dictionary:p}=await l(),m=a.default.fromJSON(t)
let g
try{g=d.parseScript(e,u)}catch(t){return s.error(new r.a("arcade-bad-expression","Failed to parse arcade script",{script:e,error:t})),null}const b=c.reduce((e,t)=>({...e,[t]:null}),{})
let y=null
Object(o.l)(i)&&(y=new p(i),y.immutable=!0,b.$config=null)
const O=d.scriptUsesGeometryEngine(g),v=O&&d.enableGeometrySupport(),E=d.scriptUsesFeatureSet(g)&&d.enableFeatureSetSupport(),j=d.scriptIsAsync(g),_=j&&d.enableAsyncSupport(),S={vars:b,spatialReference:m,useAsync:!!_}
await Promise.all([v,E,_])
const w=new Set
await d.loadDependentModules(w,g,null,j,O)
const T=new p
T.immutable=!1,T.setField("scale",0)
const x=d.compileScript(g,S)
return new h(e,d,g,e=>("$view"in e&&e.$view&&(T.setField("scale","object"==typeof e.$view?e.$view.scale:void 0),e.$view=T),y&&(e.$config=y),x({vars:e,spatialReference:m})),new f,n,m)}repurposeFeature(e){return e.geometry&&!e.geometry.spatialReference&&(e.geometry.spatialReference=this._spatialReference),this._arcadeFeature.repurposeFromGraphicLikeObject(e.geometry,e.attributes,{fields:this.fields}),this._arcadeFeature}referencesGeometry(){return this._referencesGeometry}referencesScale(){return this._referencesScale}}},1012:function(e,t,n){"use strict"
n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return g})),n.d(t,"e",(function(){return h})),n.d(t,"f",(function(){return p})),n.d(t,"g",(function(){return O})),n.d(t,"h",(function(){return v})),n.d(t,"i",(function(){return f})),n.d(t,"j",(function(){return b})),n.d(t,"k",(function(){return m})),n.d(t,"l",(function(){return o})),n.d(t,"m",(function(){return y})),n.d(t,"n",(function(){return C}))
var r=n(1016)
function i(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function o(e,t,n,r,i){return e[0]=t,e[1]=n,e[2]=r,e[3]=i,e}function a(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e}function s(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e[3]=t[3]-n[3],e}function c(e,t,n){return e[0]=t[0]*n[0],e[1]=t[1]*n[1],e[2]=t[2]*n[2],e[3]=t[3]*n[3],e}function l(e,t,n){return e[0]=t[0]/n[0],e[1]=t[1]/n[1],e[2]=t[2]/n[2],e[3]=t[3]/n[3],e}function u(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e}function d(e,t){const n=t[0]-e[0],r=t[1]-e[1],i=t[2]-e[2],o=t[3]-e[3]
return Math.sqrt(n*n+r*r+i*i+o*o)}function f(e,t){const n=t[0]-e[0],r=t[1]-e[1],i=t[2]-e[2],o=t[3]-e[3]
return n*n+r*r+i*i+o*o}function h(e){const t=e[0],n=e[1],r=e[2],i=e[3]
return Math.sqrt(t*t+n*n+r*r+i*i)}function p(e){const t=e[0],n=e[1],r=e[2],i=e[3]
return t*t+n*n+r*r+i*i}function m(e,t){const n=t[0],r=t[1],i=t[2],o=t[3]
let a=n*n+r*r+i*i+o*o
return a>0&&(a=1/Math.sqrt(a),e[0]=n*a,e[1]=r*a,e[2]=i*a,e[3]=o*a),e}function g(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]}function b(e,t,n,r){const i=t[0],o=t[1],a=t[2],s=t[3]
return e[0]=i+r*(n[0]-i),e[1]=o+r*(n[1]-o),e[2]=a+r*(n[2]-a),e[3]=s+r*(n[3]-s),e}function y(e,t,n){const r=t[0],i=t[1],o=t[2],a=t[3]
return e[0]=n[0]*r+n[4]*i+n[8]*o+n[12]*a,e[1]=n[1]*r+n[5]*i+n[9]*o+n[13]*a,e[2]=n[2]*r+n[6]*i+n[10]*o+n[14]*a,e[3]=n[3]*r+n[7]*i+n[11]*o+n[15]*a,e}function O(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]}function v(e,t){const n=e[0],i=e[1],o=e[2],a=e[3],s=t[0],c=t[1],l=t[2],u=t[3],d=Object(r.c)()
return Math.abs(n-s)<=d*Math.max(1,Math.abs(n),Math.abs(s))&&Math.abs(i-c)<=d*Math.max(1,Math.abs(i),Math.abs(c))&&Math.abs(o-l)<=d*Math.max(1,Math.abs(o),Math.abs(l))&&Math.abs(a-u)<=d*Math.max(1,Math.abs(a),Math.abs(u))}const E=s,j=c,_=l,S=d,w=f,T=h,x=p,C=Object.freeze(Object.defineProperty({__proto__:null,add:a,ceil:function(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e[3]=Math.ceil(t[3]),e},copy:i,dist:S,distance:d,div:_,divide:l,dot:g,equals:v,exactEquals:O,floor:function(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e[3]=Math.floor(t[3]),e},inverse:function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e[3]=1/t[3],e},len:T,length:h,lerp:b,max:function(e,t,n){return e[0]=Math.max(t[0],n[0]),e[1]=Math.max(t[1],n[1]),e[2]=Math.max(t[2],n[2]),e[3]=Math.max(t[3],n[3]),e},min:function(e,t,n){return e[0]=Math.min(t[0],n[0]),e[1]=Math.min(t[1],n[1]),e[2]=Math.min(t[2],n[2]),e[3]=Math.min(t[3],n[3]),e},mul:j,multiply:c,negate:function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e},normalize:m,random:function(e,t){const n=r.a
let i,o,a,s,c,l
t=t||1
do{i=2*n()-1,o=2*n()-1,c=i*i+o*o}while(c>=1)
do{a=2*n()-1,s=2*n()-1,l=a*a+s*s}while(l>=1)
const u=Math.sqrt((1-c)/l)
return e[0]=t*i,e[1]=t*o,e[2]=t*a*u,e[3]=t*s*u,e},round:function(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e[3]=Math.round(t[3]),e},scale:u,scaleAndAdd:function(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e[3]=t[3]+n[3]*r,e},set:o,sqrDist:w,sqrLen:x,squaredDistance:f,squaredLength:p,str:function(e){return"vec4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},sub:E,subtract:s,transformMat4:y,transformQuat:function(e,t,n){const r=t[0],i=t[1],o=t[2],a=n[0],s=n[1],c=n[2],l=n[3],u=l*r+s*o-c*i,d=l*i+c*r-a*o,f=l*o+a*i-s*r,h=-a*r-s*i-c*o
return e[0]=u*l+h*-a+d*-c-f*-s,e[1]=d*l+h*-s+f*-a-u*-c,e[2]=f*l+h*-c+u*-s-d*-a,e[3]=t[3],e}},Symbol.toStringTag,{value:"Module"}))},1016:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return c}))
let r=1e-6
function i(){return r}const o=Math.random,a=Math.PI/180,s=180/Math.PI
function c(e){return e*a}function l(e){return e*s}Object.freeze(Object.defineProperty({__proto__:null,RANDOM:o,equals:function(e,t){return Math.abs(e-t)<=r*Math.max(1,Math.abs(e),Math.abs(t))},getEpsilon:i,setEpsilon:function(e){r=e},toDegree:l,toRadian:c},Symbol.toStringTag,{value:"Module"}))},1019:function(e,t,n){"use strict"
n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}))
var r=n(110),i=n(771),o=n(446),a=n(233),s=n(374)
const c=a.a.getLogger("esri.assets")
function l(e,t){return Object(i.default)(u(e),t)}function u(e){if(!r.default.assetsPath)throw c.errorOnce("The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50"),new o.a("assets:path-not-set","config.assetsPath is not set")
return Object(s.E)(r.default.assetsPath,e)}},1021:function(e,t,n){"use strict"
n.d(t,"a",(function(){return g}))
var r,i=n(968),o=n(234),a=n(970),s=(n(971),n(969)),c=n(974),l=n(770),u=n(1004),d=n(992),f=n(769),h=n(1157),p=n(1105)
let m=r=class extends u.a{constructor(...e){super(...e),this.paths=[],this.type="polyline"}normalizeCtorArgs(e,t){let n,r,i=null,o=null
return e&&!Array.isArray(e)?(i=e.paths?e.paths:null,t||(e.spatialReference?t=e.spatialReference:e.paths||(t=e)),n=e.hasZ,r=e.hasM):i=e,i=i||[],t=t||f.default.WGS84,i.length&&i[0]&&null!=i[0][0]&&"number"==typeof i[0][0]&&(i=[i]),o=i[0]&&i[0][0],o&&(void 0===n&&void 0===r?(n=o.length>2,r=!1):void 0===n?n=!r&&o.length>3:void 0===r&&(r=!n&&o.length>3)),{paths:i,spatialReference:t,hasZ:n,hasM:r}}get cache(){return this.commitProperty("paths"),this.commitProperty("hasZ"),this.commitProperty("hasM"),this.commitProperty("spatialReference"),{}}get extent(){const{spatialReference:e}=this,t=Object(h.c)(this)
if(!t)return null
const n=new l.default(t)
return n.spatialReference=e,n}writePaths(e,t){t.paths=Object(o.a)(this.paths)}addPath(e){if(!e)return
const t=this.paths,n=t.length
if(function(e){return!Array.isArray(e[0])}(e)){const r=[]
for(let t=0,n=e.length;t<n;t++)r[t]=e[t].toArray()
t[n]=r}else t[n]=e.concat()
return this.notifyChange("paths"),this}clone(){const e=new r
return e.spatialReference=this.spatialReference,e.paths=Object(o.a)(this.paths),e.hasZ=this.hasZ,e.hasM=this.hasM,e}getPoint(e,t){if(!this._validateInputs(e,t))return null
const n=this.paths[e][t],r=this.hasZ,i=this.hasM
return r&&!i?new d.a(n[0],n[1],n[2],void 0,this.spatialReference):i&&!r?new d.a(n[0],n[1],void 0,n[2],this.spatialReference):r&&i?new d.a(n[0],n[1],n[2],n[3],this.spatialReference):new d.a(n[0],n[1],this.spatialReference)}insertPoint(e,t,n){return this._validateInputs(e,t,!0)?(Object(p.a)(this,n),Array.isArray(n)||(n=n.toArray()),this.paths[e].splice(t,0,n),this.notifyChange("paths"),this):this}removePath(e){if(!this._validateInputs(e,null))return null
const t=this.paths.splice(e,1)[0],n=this.spatialReference,r=t.map(e=>new d.a(e,n))
return this.notifyChange("paths"),r}removePoint(e,t){if(!this._validateInputs(e,t))return null
const n=new d.a(this.paths[e].splice(t,1)[0],this.spatialReference)
return this.notifyChange("paths"),n}setPoint(e,t,n){return this._validateInputs(e,t)?(Object(p.a)(this,n),Array.isArray(n)||(n=n.toArray()),this.paths[e][t]=n,this.notifyChange("paths"),this):this}_validateInputs(e,t,n=!1){if(null==e||e<0||e>=this.paths.length)return!1
if(null!=t){const r=this.paths[e]
if(n&&(t<0||t>r.length))return!1
if(!n&&(t<0||t>=r.length))return!1}return!0}toJSON(e){return this.write({},e)}}
Object(i.a)([Object(a.b)({readOnly:!0})],m.prototype,"cache",null),Object(i.a)([Object(a.b)({readOnly:!0})],m.prototype,"extent",null),Object(i.a)([Object(a.b)({type:[[[Number]]],json:{write:{isRequired:!0}}})],m.prototype,"paths",void 0),Object(i.a)([Object(c.a)("paths")],m.prototype,"writePaths",null),m=r=Object(i.a)([Object(s.a)("esri.geometry.Polyline")],m),m.prototype.toJSON.isDefaultToJSON=!0
const g=m},1027:function(e,t,n){"use strict"
n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return f}))
var r=n(446),i=n(973),o=n(1005)
const a=/^([a-z]{2})(?:[-_]([A-Za-z]{2}))?$/,s={ar:!0,bg:!0,bs:!0,ca:!0,cs:!0,da:!0,de:!0,el:!0,en:!0,es:!0,et:!0,fi:!0,fr:!0,he:!0,hr:!0,hu:!0,id:!0,it:!0,ja:!0,ko:!0,lt:!0,lv:!0,nb:!0,nl:!0,pl:!0,"pt-BR":!0,"pt-PT":!0,ro:!0,ru:!0,sk:!0,sl:!0,sr:!0,sv:!0,th:!0,tr:!0,uk:!0,vi:!0,"zh-CN":!0,"zh-HK":!0,"zh-TW":!0}
function c(e){var t
return null!=(t=s[e])&&t}const l=[],u=new Map
function d(e){for(const t of u.keys())m(e.pattern,t)&&u.delete(t)}function f(e){return l.includes(e)||(d(e),l.unshift(e)),{remove(){const t=l.indexOf(e)
t>-1&&(l.splice(t,1),d(e))}}}async function h(e){const t=Object(o.b)()
u.has(e)||u.set(e,async function(e,t){const n=[]
for(const r of l)if(m(r.pattern,e))try{return await r.fetchMessageBundle(e,t)}catch(e){n.push(e)}if(n.length)throw new r.a("intl:message-bundle-error",`Errors occurred while loading "${e}"`,{errors:n})
throw new r.a("intl:no-message-bundle-loader",`No loader found for message bundle "${e}"`)}(e,t))
const n=u.get(e)
return n&&await g.add(n),n}function p(e){if(!a.test(e))return null
const t=a.exec(e)
if(null===t)return null
const[,n,r]=t,i=n+(r?"-"+r.toUpperCase():"")
return c(i)?i:c(n)?n:null}function m(e,t){return"string"==typeof e?t.startsWith(e):e.test(t)}Object(o.a)(()=>{u.clear()})
const g=new class{constructor(){this._numLoading=0,this._dfd=null}async waitForAll(){this._dfd&&await this._dfd.promise}add(e){return this._increase(),e.then(()=>this._decrease(),()=>this._decrease()),this.waitForAll()}_increase(){this._numLoading++,this._dfd||(this._dfd=Object(i.d)())}_decrease(){this._numLoading=Math.max(this._numLoading-1,0),this._dfd&&0===this._numLoading&&(this._dfd.resolve(),this._dfd=null)}}},1036:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o}))
var r=n(976)
const i=Object(r.b)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon"}),o=Object(r.b)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh"})},1038:function(e,t,n){"use strict"
n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l}))
var r=n(23),i=n(1005)
const o={ar:"ar-u-nu-latn"}
let a=new WeakMap,s={}
function c(e={}){const t={}
return null!=e.digitSeparator&&(t.useGrouping=e.digitSeparator),null!=e.places&&(t.minimumFractionDigits=t.maximumFractionDigits=e.places),t}function l(e,t){return-0===e&&(e=0),function(e){const t=e||s
if(!a.has(t)){const n=Object(i.b)(),r=o[Object(i.b)()]||n
a.set(t,new Intl.NumberFormat(r,e))}return Object(r.d)(a.get(t))}(t).format(e)}Object(i.a)(()=>{a=new WeakMap,s={}})},1039:function(e,t,n){"use strict"
n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return b}))
var r=n(976),i=n(1005)
const o={year:"numeric",month:"numeric",day:"numeric"},a={year:"numeric",month:"long",day:"numeric"},s={year:"numeric",month:"short",day:"numeric"},c={year:"numeric",month:"long",weekday:"long",day:"numeric"},l={hour:"numeric",minute:"numeric"},u={...l,second:"numeric"},d={"short-date":o,"short-date-short-time":{...o,...l},"short-date-short-time-24":{...o,...l,hour12:!1},"short-date-long-time":{...o,...u},"short-date-long-time-24":{...o,...u,hour12:!1},"short-date-le":o,"short-date-le-short-time":{...o,...l},"short-date-le-short-time-24":{...o,...l,hour12:!1},"short-date-le-long-time":{...o,...u},"short-date-le-long-time-24":{...o,...u,hour12:!1},"long-month-day-year":a,"long-month-day-year-short-time":{...a,...l},"long-month-day-year-short-time-24":{...a,...l,hour12:!1},"long-month-day-year-long-time":{...a,...u},"long-month-day-year-long-time-24":{...a,...u,hour12:!1},"day-short-month-year":s,"day-short-month-year-short-time":{...s,...l},"day-short-month-year-short-time-24":{...s,...l,hour12:!1},"day-short-month-year-long-time":{...s,...u},"day-short-month-year-long-time-24":{...s,...u,hour12:!1},"long-date":c,"long-date-short-time":{...c,...l},"long-date-short-time-24":{...c,...l,hour12:!1},"long-date-long-time":{...c,...u},"long-date-long-time-24":{...c,...u,hour12:!1},"long-month-year":{month:"long",year:"numeric"},"short-month-year":{month:"short",year:"numeric"},year:{year:"numeric"},"short-time":l,"long-time":u},f=Object(r.b)()({shortDate:"short-date",shortDateShortTime:"short-date-short-time",shortDateShortTime24:"short-date-short-time-24",shortDateLongTime:"short-date-long-time",shortDateLongTime24:"short-date-long-time-24",shortDateLE:"short-date-le",shortDateLEShortTime:"short-date-le-short-time",shortDateLEShortTime24:"short-date-le-short-time-24",shortDateLELongTime:"short-date-le-long-time",shortDateLELongTime24:"short-date-le-long-time-24",longMonthDayYear:"long-month-day-year",longMonthDayYearShortTime:"long-month-day-year-short-time",longMonthDayYearShortTime24:"long-month-day-year-short-time-24",longMonthDayYearLongTime:"long-month-day-year-long-time",longMonthDayYearLongTime24:"long-month-day-year-long-time-24",dayShortMonthYear:"day-short-month-year",dayShortMonthYearShortTime:"day-short-month-year-short-time",dayShortMonthYearShortTime24:"day-short-month-year-short-time-24",dayShortMonthYearLongTime:"day-short-month-year-long-time",dayShortMonthYearLongTime24:"day-short-month-year-long-time-24",longDate:"long-date",longDateShortTime:"long-date-short-time",longDateShortTime24:"long-date-short-time-24",longDateLongTime:"long-date-long-time",longDateLongTime24:"long-date-long-time-24",longMonthYear:"long-month-year",shortMonthYear:"short-month-year",year:"year"}),h=(f.apiValues,f.toJSON.bind(f),f.fromJSON.bind(f),{ar:"ar-u-nu-latn-ca-gregory"})
let p=new WeakMap,m=d["short-date-short-time"]
function g(e){return e?d[e]:null}function b(e,t){return function(e){const t=e||m
let n=p.get(t)
if(!n){const e=Object(i.b)(),r=h[Object(i.b)()]||e
n=new Intl.DateTimeFormat(r,t),p.set(t,n)}return n}(t).format(e)}Object(i.a)(()=>{p=new WeakMap,m=d["short-date-short-time"]})},1041:function(e,t,n){"use strict"
n.d(t,"a",(function(){return k})),n.d(t,"b",(function(){return G})),n.d(t,"c",(function(){return W})),n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return O})),n.d(t,"f",(function(){return j})),n.d(t,"g",(function(){return E})),n.d(t,"h",(function(){return a})),n.d(t,"i",(function(){return g})),n.d(t,"j",(function(){return y})),n.d(t,"k",(function(){return A})),n.d(t,"l",(function(){return F})),n.d(t,"m",(function(){return l})),n.d(t,"n",(function(){return f})),n.d(t,"o",(function(){return h})),n.d(t,"p",(function(){return u})),n.d(t,"q",(function(){return d})),n.d(t,"r",(function(){return M})),n.d(t,"s",(function(){return N})),n.d(t,"t",(function(){return s})),n.d(t,"u",(function(){return x})),n.d(t,"v",(function(){return b})),n.d(t,"w",(function(){return _})),n.d(t,"x",(function(){return S})),n.d(t,"y",(function(){return D})),n.d(t,"z",(function(){return L})),n.d(t,"A",(function(){return w})),n.d(t,"B",(function(){return T})),n.d(t,"C",(function(){return R})),n.d(t,"D",(function(){return I})),n.d(t,"E",(function(){return C})),n.d(t,"F",(function(){return v})),n.d(t,"G",(function(){return c})),n.d(t,"H",(function(){return P})),n.d(t,"I",(function(){return m})),n.d(t,"J",(function(){return U}))
var r=n(23),i=n(770),o=n(996)
function a(e=W){return[e[0],e[1],e[2],e[3],e[4],e[5]]}function s(e,t,n,r,i,o,s=a()){return s[0]=e,s[1]=t,s[2]=n,s[3]=r,s[4]=i,s[5]=o,s}function c(e,t){const n=isFinite(e[2])||isFinite(e[5])
return new i.default(n?{xmin:e[0],xmax:e[3],ymin:e[1],ymax:e[4],zmin:e[2],zmax:e[5],spatialReference:t}:{xmin:e[0],xmax:e[3],ymin:e[1],ymax:e[4],spatialReference:t})}function l(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.min(e[2],t[2]),e[3]=Math.max(e[3],t[3]),e[4]=Math.max(e[4],t[4]),e[5]=Math.max(e[5],t[5])}function u(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[3]=Math.max(e[3],t[2]),e[4]=Math.max(e[4],t[3])}function d(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.min(e[2],t[2]),e[3]=Math.max(e[3],t[0]),e[4]=Math.max(e[4],t[1]),e[5]=Math.max(e[5],t[2])}function f(e,t,n=0,r=t.length/3){let i=e[0],o=e[1],a=e[2],s=e[3],c=e[4],l=e[5]
for(let e=0;e<r;e++)i=Math.min(i,t[n+3*e]),o=Math.min(o,t[n+3*e+1]),a=Math.min(a,t[n+3*e+2]),s=Math.max(s,t[n+3*e]),c=Math.max(c,t[n+3*e+1]),l=Math.max(l,t[n+3*e+2])
e[0]=i,e[1]=o,e[2]=a,e[3]=s,e[4]=c,e[5]=l}function h(e,t,n){const r=t.length
let i=e[0],o=e[1],a=e[2],s=e[3],c=e[4],l=e[5]
if(n)for(let e=0;e<r;e++){const n=t[e]
i=Math.min(i,n[0]),o=Math.min(o,n[1]),a=Math.min(a,n[2]),s=Math.max(s,n[0]),c=Math.max(c,n[1]),l=Math.max(l,n[2])}else for(let e=0;e<r;e++){const n=t[e]
i=Math.min(i,n[0]),o=Math.min(o,n[1]),s=Math.max(s,n[0]),c=Math.max(c,n[1])}e[0]=i,e[1]=o,e[2]=a,e[3]=s,e[4]=c,e[5]=l}function p(e){for(let t=0;t<6;t++)if(!isFinite(e[t]))return!1
return!0}function m(e){return e[0]>=e[3]?0:e[3]-e[0]}function g(e){return e[1]>=e[4]?0:e[4]-e[1]}function b(e){return e[2]>=e[5]?0:e[5]-e[2]}function y(e){const t=m(e),n=b(e),r=g(e)
return Math.sqrt(t*t+n*n+r*r)}function O(e,t=[0,0,0]){return t[0]=e[0]+m(e)/2,t[1]=e[1]+g(e)/2,t[2]=e[2]+b(e)/2,t}function v(e,t=[0,0,0]){return t[0]=m(e),t[1]=g(e),t[2]=b(e),t}function E(e,t){return t[0]>=e[0]&&t[1]>=e[1]&&t[2]>=e[2]&&t[0]<=e[3]&&t[1]<=e[4]&&t[2]<=e[5]}function j(e,t){return t[0]>=e[0]&&t[1]>=e[1]&&t[2]>=e[2]&&t[3]<=e[3]&&t[4]<=e[4]&&t[5]<=e[5]}function _(e,t){return Math.max(t[0],e[0])<=Math.min(t[3],e[3])&&Math.max(t[1],e[1])<=Math.min(t[4],e[4])&&Math.max(t[2],e[2])<=Math.min(t[5],e[5])}function S(e,t){return!!Object(r.k)(t)||_(e,t)}function w(e,t,n,r,i=e){return i[0]=e[0]+t,i[1]=e[1]+n,i[2]=e[2]+r,i[3]=e[3]+t,i[4]=e[4]+n,i[5]=e[5]+r,i}function T(e,t,n=e){const r=e[0]+m(e)/2,i=e[1]+g(e)/2,o=e[2]+b(e)/2
return n[0]=r+(e[0]-r)*t,n[1]=i+(e[1]-i)*t,n[2]=o+(e[2]-o)*t,n[3]=r+(e[3]-r)*t,n[4]=i+(e[4]-i)*t,n[5]=o+(e[5]-o)*t,n}function x(e,t){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function C(e,t,n=e){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n!==e&&(n[3]=e[3],n[4]=e[4],n[5]=e[5]),n}function I(e,t,n=e){return n[3]=t[0],n[4]=t[1],n[5]=t[2],n!==e&&(n[0]=e[0],n[1]=e[1],n[2]=e[2]),e}function R(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e}function A(e){return e?R(e,k):a(k)}function P(e,t){return t||(t=Object(o.m)()),t[0]=e[0],t[1]=e[1],t[2]=e[3],t[3]=e[4],t}function M(e,t){return e[0]=t[0],e[1]=t[1],e[2]=Number.NEGATIVE_INFINITY,e[3]=t[2],e[4]=t[3],e[5]=Number.POSITIVE_INFINITY,e}function N(e,t,n,r,i){return e[0]=t,e[1]=n,e[2]=Number.NEGATIVE_INFINITY,e[3]=r,e[4]=i,e[5]=Number.POSITIVE_INFINITY,e}function D(e){return 6===e.length}function L(e){return 0===m(e)&&0===g(e)&&0===b(e)}function F(e,t,n){if(Object(r.k)(e)||Object(r.k)(t))return e===t
if(!D(e)||!D(t))return!1
if(n){for(let r=0;r<e.length;r++)if(!n(e[r],t[r]))return!1}else for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1
return!0}function U(e,t,n,r,i,o){return s(e,t,n,r,i,o,z)}const G=[-1/0,-1/0,-1/0,1/0,1/0,1/0],k=[1/0,1/0,1/0,-1/0,-1/0,-1/0],W=[0,0,0,0,0,0],z=a()},1043:function(e,t,n){"use strict"
function r(e){return e&&("function"==typeof e.on||"function"==typeof e.addEventListener)}function i(e,t,n){if(!r(e))throw new TypeError("target is not a Evented or EventTarget object")
if("on"in e)return e.on(t,n)
if(Array.isArray(t)){const r=t.slice()
for(const t of r)e.addEventListener(t,n)
return{remove(){for(const t of r)e.removeEventListener(t,n)}}}return e.addEventListener(t,n),{remove(){e.removeEventListener(t,n)}}}function o(e,t,n){if(!r(e))throw new TypeError("target is not a Evented or EventTarget object")
if("once"in e)return e.once(t,n)
const o=i(e,t,t=>{o.remove(),n.call(e,t)})
return{remove(){o.remove()}}}n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return o}))
const a={Win:"Meta",Scroll:"ScrollLock",Spacebar:" ",Down:"ArrowDown",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Del:"Delete",Apps:"ContextMenu",Esc:"Escape",Multiply:"*",Add:"+",Subtract:"-",Decimal:".",Divide:"/"}
function s({key:e}){return a[e]||e}},1046:function(e,t,n){"use strict"
n.d(t,"a",(function(){return p}))
var r=n(968),i=n(446),o=n(1058),a=n(973),s=n(1044),c=n(970),l=n(969)
const u="loaded",d=e=>{let t=class extends e{constructor(...e){super(...e),this._loadController=null,this.loadError=null,this.loadStatus="not-loaded",this._set("loadWarnings",[]),this.addResolvingPromise(new Promise(e=>{const t=this.load.bind(this)
this.load=n=>{const r=new Promise((e,t)=>{const r=Object(a.o)(n,t)
this.destroyed&&t(new i.a("load:instance-destroyed",`Instance of '${this.declaredClass||this.constructor.name}' is already destroyed`,{instance:this})),this._promiseProps.when(e,t).finally(()=>{r&&r.remove()})})
if("not-loaded"===this.loadStatus){this._set("loadStatus","loading")
const e=this._loadController=new AbortController
t({signal:e.signal}),Object(a.n)(e.signal,()=>{this._promiseProps.abort()})}return e(),r}})),this.when(()=>{this._set("loadStatus",u),this._loadController=null},e=>{this._set("loadStatus","failed"),this._set("loadError",e),this._loadController=null})}get loaded(){return this.loadStatus===u}get loadWarnings(){return this._get("loadWarnings")}load(){return null}cancelLoad(){var e
return this.isFulfilled()||(this._set("loadError",new i.a("load:cancelled","Cancelled")),null!=(e=this._loadController)&&e.abort()),this}}
return Object(r.a)([Object(c.b)({readOnly:!0})],t.prototype,"loaded",null),Object(r.a)([Object(c.b)({readOnly:!0})],t.prototype,"loadError",void 0),Object(r.a)([Object(c.b)({clonable:!1})],t.prototype,"loadStatus",void 0),Object(r.a)([Object(c.b)({type:[s.a],readOnly:!0})],t.prototype,"loadWarnings",null),t=Object(r.a)([Object(l.a)("esri.core.Loadable")],t),t}
let f=class extends(d(o.a)){}
var h
f=Object(r.a)([Object(l.a)("esri.core.Loadable")],f),(h=f||(f={})).LoadableMixin=d,h.isLoadable=function(e){return!(!e||!e.load)}
const p=f},1052:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a}))
class r{constructor(e,t,n,r){this.semiMajorAxis=e,this.flattening=t,this.outerAtmosphereRimWidth=n
const i=1-this.flattening
this.semiMinorAxis=this.semiMajorAxis*i,this.halfSemiMajorAxis=this.semiMajorAxis/2,this.halfCircumference=Math.PI*this.semiMajorAxis,this.metersPerDegree=this.halfCircumference/180,this.inverseFlattening=1/(1-this.flattening)-1,this.eccentricitySquared=r||2*this.flattening-this.flattening*this.flattening,this.meanRadiusSemiAxes=(2*this.semiMajorAxis+this.semiMinorAxis)/3}get radius(){return this.semiMajorAxis}}const i=new r(6378137,1/298.257223563,3e5,.006694379990137799),o=new r(3396190,1/169.8944472236118,23e4),a=new r(1737400,0,0)},1054:function(e,t,n){"use strict"
n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return d})),n.d(t,"f",(function(){return f})),n.d(t,"g",(function(){return s})),n.d(t,"h",(function(){return a})),n.d(t,"i",(function(){return c}))
var r=n(23),i=n(374)
function o(e,t){const n=t&&t.url&&t.url.path
if(e&&n&&(e=Object(i.F)(e,n,{preserveProtocolRelative:!0}),t.portalItem&&t.readResourcePaths)){const n=Object(i.H)(e,t.portalItem.itemUrl)
null!=n&&u.test(n)&&t.readResourcePaths.push(t.portalItem.resourceFromPath(n).path)}return p(e,t&&t.portal)}function a(e,t,n=m.YES){if(null==e)return e
!Object(i.x)(e)&&t&&t.blockedRelativeUrls&&t.blockedRelativeUrls.push(e)
let r=Object(i.F)(e)
if(t){const n=t.verifyItemRelativeUrls&&t.verifyItemRelativeUrls.rootPath||t.url&&t.url.path
if(n){const o=p(n,t.portal),a=p(r,t.portal)
r=Object(i.H)(a,o,o),null!=r&&r!==a&&r!==e&&t.verifyItemRelativeUrls&&t.verifyItemRelativeUrls.writtenUrls.push(r)}}return r=h(r,null==t?void 0:t.portal),Object(i.x)(r)&&(r=Object(i.I)(r)),null!=t&&t.resources&&null!=t&&t.portalItem&&!Object(i.x)(r)&&!Object(i.z)(r)&&n===m.YES&&t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(r),compress:!1}),r}function s(e,t,n){return o(e,n)}function c(e,t,n,r){const i=a(e,r)
void 0!==i&&(t[n]=i)}const l=/\/items\/([^\/]+)\/resources\/(.*)/,u=/^\.\/resources\//
function d(e){var t,n,r
return null!=(t=null==(n=null!=(r=null==e?void 0:e.match(l))?r:null)?void 0:n[1])?t:null}function f(e){var t
const n=null!=(t=null==e?void 0:e.match(l))?t:null
if(null==n)return null
const o=n[2],a=o.lastIndexOf("/")
if(-1===a){const{path:e,extension:t}=Object(i.O)(o)
return{prefix:null,filename:e,extension:Object(r.u)(t)}}const{path:s,extension:c}=Object(i.O)(o.slice(a+1))
return{prefix:o.slice(0,a),filename:s,extension:Object(r.u)(c)}}function h(e,t){return t&&!t.isPortal&&t.urlKey&&t.customBaseUrl?Object(i.g)(e,`${t.urlKey}.${t.customBaseUrl}`,t.portalHostname):e}function p(e,t){if(!t||t.isPortal||!t.urlKey||!t.customBaseUrl)return e
const n=`${t.urlKey}.${t.customBaseUrl}`,r=Object(i.m)()
return Object(i.v)(r,`${r.scheme}://${n}`)?Object(i.g)(e,t.portalHostname,n):Object(i.g)(e,n,t.portalHostname)}var m,g;(g=m||(m={}))[g.YES=0]="YES",g[g.NO=1]="NO"
const b=Object.freeze(Object.defineProperty({__proto__:null,get MarkKeep(){return m},ensureMainOnlineDomain:h,fromJSON:o,itemIdFromResourceUrl:d,prefixAndFilenameFromResourceUrl:f,read:s,toJSON:a,write:c},Symbol.toStringTag,{value:"Module"}))},1055:function(e,t,n){"use strict"
n.d(t,"a",(function(){return m}))
var r,i=n(968),o=n(234),a=n(970),s=(n(971),n(969)),c=n(974),l=n(770),u=n(1004),d=n(992),f=n(1105)
function h(e){return(t,n)=>null==t?n:null==n?t:e(t,n)}let p=r=class extends u.a{constructor(...e){super(...e),this.points=[],this.type="multipoint"}normalizeCtorArgs(e,t){if(!e&&!t)return{}
const n={}
Array.isArray(e)?(n.points=e,n.spatialReference=t):function(e){return e&&("esri.geometry.SpatialReference"===e.declaredClass||null!=e.wkid)}(e)?n.spatialReference=e:(e.points&&(n.points=e.points),e.spatialReference&&(n.spatialReference=e.spatialReference),e.hasZ&&(n.hasZ=e.hasZ),e.hasM&&(n.hasM=e.hasM))
const r=n.points&&n.points[0]
return r&&(void 0===n.hasZ&&void 0===n.hasM?(n.hasZ=r.length>2,n.hasM=!1):void 0===n.hasZ?n.hasZ=r.length>3:void 0===n.hasM&&(n.hasM=r.length>3)),n}get cache(){return this.commitProperty("points"),this.commitProperty("hasZ"),this.commitProperty("hasM"),this.commitProperty("spatialReference"),{}}get extent(){const e=this.points
if(!e.length)return null
const t=new l.default,n=this.hasZ,r=this.hasM,i=n?3:2,o=e[0],a=h(Math.min),s=h(Math.max)
let c,u,d,f,[p,m]=o,[g,b]=o
for(let t=0,o=e.length;t<o;t++){const o=e[t],[l,h]=o
if(p=a(p,l),m=a(m,h),g=s(g,l),b=s(b,h),n&&o.length>2){const e=o[2]
c=a(c,e),d=s(d,e)}if(r&&o.length>i){const e=o[i]
u=a(u,e),f=s(f,e)}}return t.xmin=p,t.ymin=m,t.xmax=g,t.ymax=b,t.spatialReference=this.spatialReference,n?(t.zmin=c,t.zmax=d):(t.zmin=void 0,t.zmax=void 0),r?(t.mmin=u,t.mmax=f):(t.mmin=void 0,t.mmax=void 0),t}writePoints(e,t){t.points=Object(o.a)(this.points)}addPoint(e){return Object(f.a)(this,e),Array.isArray(e)?this.points.push(e):this.points.push(e.toArray()),this.notifyChange("points"),this}clone(){const e={points:Object(o.a)(this.points),spatialReference:this.spatialReference}
return this.hasZ&&(e.hasZ=!0),this.hasM&&(e.hasM=!0),new r(e)}getPoint(e){if(!this._validateInputs(e))return null
const t=this.points[e],n={x:t[0],y:t[1],spatialReference:this.spatialReference}
let r=2
return this.hasZ&&(n.z=t[2],r=3),this.hasM&&(n.m=t[r]),new d.a(n)}removePoint(e){if(!this._validateInputs(e))return null
const t=new d.a(this.points.splice(e,1)[0],this.spatialReference)
return this.notifyChange("points"),t}setPoint(e,t){return this._validateInputs(e)?(Object(f.a)(this,t),Array.isArray(t)||(t=t.toArray()),this.points[e]=t,this.notifyChange("points"),this):this}toJSON(e){return this.write({},e)}_validateInputs(e){return null!=e&&e>=0&&e<this.points.length}}
Object(i.a)([Object(a.b)({readOnly:!0})],p.prototype,"cache",null),Object(i.a)([Object(a.b)()],p.prototype,"extent",null),Object(i.a)([Object(a.b)({type:[[Number]],json:{write:{isRequired:!0}}})],p.prototype,"points",void 0),Object(i.a)([Object(c.a)("points")],p.prototype,"writePoints",null),p=r=Object(i.a)([Object(s.a)("esri.geometry.Multipoint")],p),p.prototype.toJSON.isDefaultToJSON=!0
const m=p},1058:function(e,t,n){"use strict"
n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return d}))
var r,i,o=n(968),a=n(975),s=n(23),c=n(973),l=n(969);(i=r||(r={}))[i.PENDING=0]="PENDING",i[i.RESOLVED=1]="RESOLVED",i[i.REJECTED=2]="REJECTED"
class u{constructor(e){this.instance=e,this._resolver=Object(c.d)(),this._status=r.PENDING,this._resolvingPromises=[],this._resolver.promise.then(()=>{this._status=r.RESOLVED,this._cleanUp()},()=>{this._status=r.REJECTED,this._cleanUp()})}addResolvingPromise(e){this._resolvingPromises.push(e),this._tryResolve()}isResolved(){return this._status===r.RESOLVED}isRejected(){return this._status===r.REJECTED}isFulfilled(){return this._status!==r.PENDING}abort(){this._resolver.reject(Object(c.c)())}when(e,t){return this._resolver.promise.then(e,t)}_cleanUp(){this._allPromise=this._resolvingPromises=this._allPromise=null}_tryResolve(){if(this.isFulfilled())return
const e=Object(c.d)(),t=[...this._resolvingPromises,Object(s.d)(e.promise)],n=this._allPromise=Promise.all(t)
n.then(()=>{this.isFulfilled()||this._allPromise!==n||this._resolver.resolve(this.instance)},e=>{this.isFulfilled()||this._allPromise!==n||Object(c.j)(e)||this._resolver.reject(e)}),e.resolve()}}const d=e=>{let t=class extends e{constructor(...e){super(...e),this._promiseProps=new u(this),this.addResolvingPromise(Promise.resolve())}isResolved(){return this._promiseProps.isResolved()}isRejected(){return this._promiseProps.isRejected()}isFulfilled(){return this._promiseProps.isFulfilled()}when(e,t){return new Promise((e,t)=>{this._promiseProps.when(e,t)}).then(e,t)}catch(e){return this.when(null,e)}addResolvingPromise(e){e&&!this._promiseProps.isFulfilled()&&this._promiseProps.addResolvingPromise("_promiseProps"in e?e.when():e)}}
return t=Object(o.a)([Object(l.a)("esri.core.Promise")],t),t}
let f=class extends(d(a.a)){}
f=Object(o.a)([Object(l.a)("esri.core.Promise")],f)},1063:function(e,t,n){"use strict"
n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return s}))
var r=n(968),i=n(969)
let o=0
const a=e=>{let t=class extends e{constructor(...e){super(...e),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:Date.now().toString(16)+"-object-"+o++})}}
return t=Object(r.a)([Object(i.a)("esri.core.Identifiable")],t),t},s=e=>{let t=class extends e{constructor(...e){super(...e),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:o++})}}
return t=Object(r.a)([Object(i.a)("esri.core.NumericIdentifiable")],t),t}
let c=class extends(a(class{})){}
c=Object(r.a)([Object(i.a)("esri.core.Identifiable")],c)},1066:function(e,t,n){"use strict"
n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return g})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return a})),n.d(t,"f",(function(){return d})),n.d(t,"g",(function(){return f})),n.d(t,"h",(function(){return h})),n.d(t,"i",(function(){return E})),n.d(t,"j",(function(){return j})),n.d(t,"k",(function(){return p})),n.d(t,"l",(function(){return c})),n.d(t,"m",(function(){return y})),n.d(t,"n",(function(){return O}))
var r=n(445),i=n(988)
function o(e){if(!e)return null
if(Array.isArray(e))return e
const t=e.hasZ,n=e.hasM
if("point"===e.type)return n&&t?[e.x,e.y,e.z,e.m]:t?[e.x,e.y,e.z]:n?[e.x,e.y,e.m]:[e.x,e.y]
if("polygon"===e.type)return e.rings.slice(0)
if("polyline"===e.type)return e.paths.slice(0)
if("multipoint"===e.type)return e.points.slice(0)
if("extent"===e.type){const t=e.clone().normalize()
if(!t)return null
let n=!1,r=!1
return t.forEach(e=>{e.hasZ&&(n=!0),e.hasM&&(r=!0)}),t.map(e=>{const t=[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]
if(n&&e.hasZ){const n=.5*(e.zmax-e.zmin)
for(let e=0;e<t.length;e++)t[e].push(n)}if(r&&e.hasM){const n=.5*(e.mmax-e.mmin)
for(let e=0;e<t.length;e++)t[e].push(n)}return t})}return null}function a(e,t){const n=t[0]-e[0],r=t[1]-e[1]
if(e.length>2&&t.length>2){const i=e[2]-t[2]
return Math.sqrt(n*n+r*r+i*i)}return Math.sqrt(n*n+r*r)}function s(e,t,n){const r=e[0]+n*(t[0]-e[0]),i=e[1]+n*(t[1]-e[1])
return e.length>2&&t.length>2?[r,i,e[2]+n*(t[2]-e[2])]:[r,i]}function c(e,t,n,r){const[i,o]=t,[a,s]=n[r],[c,l]=n[r+1],u=c-a,d=l-s,f=u*u+d*d,h=(i-a)*u+(o-s)*d,p=Math.min(1,Math.max(0,h/f))
return e[0]=a+u*p,e[1]=s+d*p,e}function l(e,t,n){const r=n.rings
let i,o,a=!1,s=1/0
for(let n=0;n<r.length;n++){const c=r[n]
for(let n=0,r=c.length-1;n<c.length;r=n++)i=c[n],o=c[r],i[1]>t!=o[1]>t&&e<(o[0]-i[0])*(t-i[1])/(o[1]-i[1])+i[0]&&(a=!a),s=Math.min(s,u(e,t,i,o))}return 0===s?0:(a?1:-1)*Math.sqrt(s)}function u(e,t,n,r){let i=n[0],o=n[1],a=r[0]-i,s=r[1]-o
if(0!==a||0!==s){const n=((e-i)*a+(t-o)*s)/(a*a+s*s)
n>1?(i=r[0],o=r[1]):n>0&&(i+=a*n,o+=s*n)}return a=e-i,s=t-o,a*a+s*s}function d(e,t){return s(e,t,.5)}function f(e){const t=e.length
let n=0
for(let r=0;r<t-1;++r)n+=a(e[r],e[r+1])
return n}function h(e,t){if(t<=0)return e[0]
const n=e.length
let r=0
for(let i=0;i<n-1;++i){const n=a(e[i],e[i+1])
if(t-r<n){const o=(t-r)/n
return s(e[i],e[i+1],o)}r+=n}return e[n-1]}function p(e,t,n){const r=e.length
let i=0,o=0,a=0
for(let s=0;s<r;s++){const c=e[s],l=e[(s+1)%r]
let u=2
i+=c[0]*l[1]-l[0]*c[1],c.length>2&&l.length>2&&n&&(o+=c[0]*l[2]-l[0]*c[2],u=3),c.length>u&&l.length>u&&t&&(a+=c[0]*l[u]-l[0]*c[u])}return i<=0&&o<=0&&a<=0}function m(e){const t=e.length
return t>2&&Object(r.e)(e[0],e[t-1])}function g(e){var t,n
if("rings"in e&&(b(e),e.rings.length>0&&!p(e.rings[0],null!=(t=e.hasM)&&t,null!=(n=e.hasZ)&&n)))for(const t of e.rings)t.reverse()}function b(e){if("rings"in e)for(const t of e.rings)m(t)||t.push(t[0].slice())}function y(e){return"polygon"!==e.type&&"polyline"!==e.type||O("polygon"===e.type?e.rings:e.paths,e.spatialReference),e}function O(e,t){const n=Object(i.e)(t)
if(!n)return
const r=n.valid[0],o=n.valid[1],a=o-r
for(const t of e){let e=1/0,n=-1/0
for(const i of t){const t=v(i[0],r,o)
e=Math.min(e,t),n=Math.max(n,t),i[0]=t}const i=n-e
a-i<i&&t.forEach(e=>{e[0]<0&&(e[0]+=a)})}}function v(e,t,n){const r=n-t
return e<t?n-(t-e)%r:e>n?t+(e-t)%r:e}function E(e){if(!e||e.length<3)return 0
let t=0
const n=e.length-1
for(let r=0;r<n;r++)t+=(e[r][0]-e[r+1][0])*(e[r][1]+e[r+1][1])
return t+=(e[n][0]-e[0][0])*(e[n][1]+e[0][1]),-.5*t}function j(e,t){if(e===t)return!0
if(e.type!==t.type)return!1
if("point"===e.type||"extent"===e.type)return!0
if("multipoint"===e.type)return e.points.length===t.points.length
const[n,r]="polyline"===e.type?[e.paths,t.paths]:[e.rings,t.rings]
return n.length===r.length&&n.every((e,t)=>e.length===r[t].length)}},1074:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return a})),n(110),n(196)
var r=n(234),i=n(374)
function o(e,t){return t?{...t,query:{...null!=e?e:{},...t.query}}:{query:e}}function a(e){return"string"==typeof e?Object(i.Q)(e):Object(r.a)(e)}function s(e,t,n){const r={}
for(const i in e){if("declaredClass"===i)continue
const o=e[i]
if(null!=o&&"function"!=typeof o)if(Array.isArray(o)){r[i]=[]
for(let e=0;e<o.length;e++)r[i][e]=s(o[e])}else if("object"==typeof o)if(o.toJSON){const e=o.toJSON(n&&n[i])
r[i]=t?e:JSON.stringify(e)}else r[i]=t?o:JSON.stringify(o)
else r[i]=o}return r}n(1146)},1079:function(e,t,n){"use strict"
function r(e){return void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax}function i(e){return void 0!==e.points}function o(e){return void 0!==e.x&&void 0!==e.y}function a(e){return void 0!==e.paths}function s(e){return void 0!==e.rings}function c(e){return function(t,n){return null==t?n:null==n?t:e(t,n)}}n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return h}))
const l=c(Math.min),u=c(Math.max)
function d(e,t){return a(t)?h(e,t.paths,!1,!1):s(t)?h(e,t.rings,!1,!1):i(t)?m(e,t.points,!1,!1,!1,!1):r(t)?p(e,t):(o(t)&&(e[0]=t.x,e[1]=t.y,e[2]=t.x,e[3]=t.y),e)}function f(e,t){return a(t)?h(e,t.paths,!0,!1):s(t)?h(e,t.rings,!0,!1):i(t)?m(e,t.points,!0,!1,!0,!1):r(t)?p(e,t,!0,!1,!0,!1):(o(t)&&(e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.x,e[4]=t.y,e[5]=t.z),e)}function h(e,t,n,r){const i=n?3:2
if(!t.length||!t[0].length)return null
let o,a,s,c,[d,f]=t[0][0],[h,p]=t[0][0]
for(let e=0;e<t.length;e++){const m=t[e]
for(let e=0;e<m.length;e++){const t=m[e],[g,b]=t
if(d=l(d,g),f=l(f,b),h=u(h,g),p=u(p,b),n&&t.length>2){const e=t[2]
o=l(o,e),a=u(a,e)}if(r&&t.length>i){const e=t[i]
s=l(o,e),c=u(a,e)}}}return n?r?(e[0]=d,e[1]=f,e[2]=o,e[3]=s,e[4]=h,e[5]=p,e[6]=a,e[7]=c,e.length=8,e):(e[0]=d,e[1]=f,e[2]=o,e[3]=h,e[4]=p,e[5]=a,e.length=6,e):r?(e[0]=d,e[1]=f,e[2]=s,e[3]=h,e[4]=p,e[5]=c,e.length=6,e):(e[0]=d,e[1]=f,e[2]=h,e[3]=p,e.length=4,e)}function p(e,t,n,r,i,o){const a=t.xmin,s=t.xmax,c=t.ymin,l=t.ymax
let u=t.zmin,d=t.zmax,f=t.mmin,h=t.mmax
return i?(u=u||0,d=d||0,o?(f=f||0,h=h||0,e[0]=a,e[1]=c,e[2]=u,e[3]=f,e[4]=s,e[5]=l,e[6]=d,e[7]=h,e):(e[0]=a,e[1]=c,e[2]=u,e[3]=s,e[4]=l,e[5]=d,e)):o?(f=f||0,h=h||0,e[0]=a,e[1]=c,e[2]=f,e[3]=s,e[4]=l,e[5]=h,e):(e[0]=a,e[1]=c,e[2]=s,e[3]=l,e)}function m(e,t,n,r,i,o){const a=n?3:2,s=r&&o,c=n&&i
if(!t.length||!t[0].length)return null
let d,f,h,p,[m,g]=t[0],[b,y]=t[0]
for(let e=0;e<t.length;e++){const n=t[e],[r,i]=n
if(m=l(m,r),g=l(g,i),b=u(b,r),y=u(y,i),c&&n.length>2){const e=n[2]
d=l(d,e),f=u(f,e)}if(s&&n.length>a){const e=n[a]
h=l(d,e),p=u(f,e)}}return i?(d=d||0,f=f||0,o?(h=h||0,p=p||0,e[0]=m,e[1]=g,e[2]=d,e[3]=h,e[4]=b,e[5]=y,e[6]=f,e[7]=p,e):(e[0]=m,e[1]=g,e[2]=d,e[3]=b,e[4]=y,e[5]=f,e)):o?(h=h||0,p=p||0,e[0]=m,e[1]=g,e[2]=h,e[3]=b,e[4]=y,e[5]=p,e):(e[0]=m,e[1]=g,e[2]=b,e[3]=y,e)}},1082:function(e,t,n){"use strict"
function r(e){return(t,n)=>{t[n]=e}}n.d(t,"a",(function(){return r}))},1083:function(e,t,n){"use strict"
n(1039),n(1038),n(1115),n(1005)
var r=n(1027),i=n(771),o=n(446),a=n(23)
async function s(e){if(Object(a.l)(c.fetchBundleAsset))return c.fetchBundleAsset(e)
const t=await Object(i.default)(e,{responseType:"text"})
return JSON.parse(t.data)}const c={}
var l,u=n(1019)
Object(r.c)((l={pattern:"esri/",location:u.b},new class{constructor({base:e="",pattern:t,location:n=new URL(window.location.href)}){let r
r="string"==typeof n?e=>new URL(e,new URL(n,window.location.href)).href:n instanceof URL?e=>new URL(e,n).href:n,this.pattern="string"==typeof t?new RegExp("^"+t):t,this.getAssetUrl=r,e=e?e.endsWith("/")?e:e+"/":"",this.matcher=new RegExp(`^${e}(?:(.*)/)?(.*)$`)}fetchMessageBundle(e,t){return async function(e,t,n,i){const a=t.exec(n)
if(!a)throw new o.a("esri-intl:invalid-bundle",`Bundle id "${n}" is not compatible with the pattern "${t}"`)
const c=a[1]?a[1]+"/":"",l=a[2],u=Object(r.b)(i),d=`${c}${l}.json`,f=u?`${c}${l}_${u}.json`:d
let h
try{h=await s(e(f))}catch(t){if(f===d)throw new o.a("intl:unknown-bundle",`Bundle "${n}" cannot be loaded`,{error:t})
try{h=await s(e(d))}catch(e){throw new o.a("intl:unknown-bundle",`Bundle "${n}" cannot be loaded`,{error:e})}}return h}(this.getAssetUrl,this.matcher,e,t)}}(l)))},1085:function(e,t,n){"use strict"
n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return o})),n.d(t,"f",(function(){return u})),n.d(t,"g",(function(){return d})),n.d(t,"h",(function(){return f}))
var r=n(23)
const i=[0,0]
function o(e,t){return!!Object(r.l)(t)&&u(e,t.x,t.y,t.z)}function a(e,t){if(!t.points||t.points.length)return!1
for(const n of t.points)if(!c(e,n))return!1
return!0}function s(e,t){const{xmin:n,ymin:r,zmin:i,xmax:o,ymax:a,zmax:s}=t
return e.hasZ&&t.hasZ?u(e,n,r,i)&&u(e,n,a,i)&&u(e,o,a,i)&&u(e,o,r,i)&&u(e,n,r,s)&&u(e,n,a,s)&&u(e,o,a,s)&&u(e,o,r,s):u(e,n,r)&&u(e,n,a)&&u(e,o,a)&&u(e,o,r)}function c(e,t){return u(e,t[0],t[1])}function l(e,t){return u(e,t[0],t[1],t[2])}function u(e,t,n,r){return t>=e.xmin&&t<=e.xmax&&n>=e.ymin&&n<=e.ymax&&(null==r||!e.hasZ||r>=e.zmin&&r<=e.zmax)}function d(e,t){return i[1]=t.y,i[0]=t.x,function(e,t){return f(e.rings,t)}(e,i)}function f(e,t){if(!e)return!1
if(function(e){return!Array.isArray(e[0][0])}(e))return h(!1,e,t)
let n=!1
for(let r=0,i=e.length;r<i;r++)n=h(n,e[r],t)
return n}function h(e,t,n){const[r,i]=n
let o=e,a=0
for(let e=0,n=t.length;e<n;e++){a++,a===n&&(a=0)
const[s,c]=t[e],[l,u]=t[a];(c<i&&u>=i||u<i&&c>=i)&&s+(i-c)/(u-c)*(l-s)<r&&(o=!o)}return o}},1087:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
var r=n(1165)
class i extends r.a{notify(){const e=this._observers
if(e&&e.length>0){const t=e.slice()
for(const e of t)e.onInvalidated(),e.onCommitted()}}}},1089:function(e,t,n){"use strict"
n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return d})),n.d(t,"f",(function(){return f}))
var r=n(23),i=n(1052),o=n(988)
function a(e){return{wkt:`GEOCCS["Spherical geocentric",\n    DATUM["Not specified",\n      SPHEROID["Sphere",${e.radius},0]],\n    PRIMEM["Greenwich",0.0,\n      AUTHORITY["EPSG","8901"]],\n    UNIT["m",1.0],\n    AXIS["Geocentric X",OTHER],\n    AXIS["Geocentric Y",EAST],\n    AXIS["Geocentric Z",NORTH]\n  ]`}}const s=a(i.a),c=a(i.b),l=a(i.c),u={wkt:`GEOCCS["WGS 84",\n  DATUM["WGS_1984",\n    SPHEROID["WGS 84",${i.a.radius},298.257223563,\n      AUTHORITY["EPSG","7030"]],\n    AUTHORITY["EPSG","6326"]],\n  PRIMEM["Greenwich",0,\n    AUTHORITY["EPSG","8901"]],\n  UNIT["m",1.0,\n    AUTHORITY["EPSG","9001"]],\n  AXIS["Geocentric X",OTHER],\n  AXIS["Geocentric Y",OTHER],\n  AXIS["Geocentric Z",NORTH],\n  AUTHORITY["EPSG","4978"]\n]`}
function d(e){return Object(r.l)(e)&&(Object(o.i)(e)||Object(o.d)(e,c))?i.b:Object(r.l)(e)&&(Object(o.j)(e)||Object(o.d)(e,l))?i.c:i.a}function f(e){return Object(o.n)(e)?i.b:Object(o.o)(e)?i.c:i.a}},1091:function(e,t,n){"use strict"
n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}))
var r=n(1128),i=n(999),o=n(1176)
function a(e,t,n){if(!e||!e.read||!1===e.read.enabled||!e.read.source)return!1
const i=e.read.source
if("string"==typeof i){if(i===t)return!0
if(i.includes(".")&&0===i.indexOf(t)&&Object(r.a)(i,n))return!0}else for(const e of i){if(e===t)return!0
if(e.includes(".")&&0===e.indexOf(t)&&Object(r.a)(e,n))return!0}return!1}function s(e,t,n,r,i){let s=Object(o.b)(t[n],i);(function(e){return e&&(!e.read||!1!==e.read.enabled&&!e.read.source)})(s)&&(e[n]=!0)
for(const c of Object.getOwnPropertyNames(t))s=Object(o.b)(t[c],i),a(s,n,r)&&(e[c]=!0)}function c(e,t,n,r){const i=n.metadatas,a=Object(o.a)(i[t],"any",r),s=a&&a.default
if(void 0===s)return
const c="function"==typeof s?s.call(e,t,r):s
void 0!==c&&n.set(t,c)}const l={origin:"service"}
function u(e,t,n=l){if(!t||"object"!=typeof t)return
const a=Object(i.a)(e),u=a.metadatas,d={}
for(const e of Object.getOwnPropertyNames(t))s(d,u,e,t,n)
a.setDefaultOrigin(n.origin)
for(const i of Object.getOwnPropertyNames(d)){const s=Object(o.b)(u[i],n).read,c=s&&s.source
let l
l=c&&"string"==typeof c?Object(r.c)(t,c):t[i],s&&s.reader&&(l=s.reader.call(e,l,t,n)),void 0!==l&&a.set(i,l)}if(!n||!n.ignoreDefaults){a.setDefaultOrigin("defaults")
for(const t of Object.getOwnPropertyNames(u))d[t]||c(e,t,a,n)}a.setDefaultOrigin("user")}function d(e,t,n,r=l){var i
const o={...r,messages:[]}
n(o),null==(i=o.messages)||i.forEach(t=>{"warning"!==t.type||e.loaded?r&&r.messages&&r.messages.push(t):e.loadWarnings.push(t)})}},1095:function(e,t,n){"use strict"
n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return c}))
var r=n(235)
const i=new Set
function o(e,t,n=!1){n&&i.has(t)||(n&&i.add(t),e.warn("🛑 DEPRECATED - "+t))}function a(e,t,n={}){Object(r.a)("esri-deprecation-warnings")&&l(e,"Module: "+t,n)}function s(e,t,n={}){if(Object(r.a)("esri-deprecation-warnings")){const{moduleName:r}=n
l(e,"Function: "+(r?r+"::":"")+t+"()",n)}}function c(e,t,n={}){if(Object(r.a)("esri-deprecation-warnings")){const{moduleName:r}=n
l(e,"Property: "+(r?r+"::":"")+t,n)}}function l(e,t,n={}){if(Object(r.a)("esri-deprecation-warnings")){const{replacement:r,version:i,see:a,warnOnce:s}=n
let c=t
r&&(c+="\n\t🛠️ Replacement: "+r),i&&(c+="\n\t⚙️ Version: "+i),a&&(c+=`\n\t🔗 See ${a} for more details.`),o(e,c,s)}}},1096:function(e,t,n){"use strict"
n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}))
var r=n(445),i=n(446),o=n(233),a=n(1006),s=n(999),c=n(1176)
function l(e,t,n,r,i){var o,a
const s={}
return null!=(o=t.write)&&null!=(a=o.writer)&&a.call(e,r,s,n,i),s}function u(e,t,n,s,c,l){if(!s||!s.write)return!1
const u=e.get(n)
if(!c&&s.write.overridePolicy){const t=s.write.overridePolicy.call(e,u,n,l)
void 0!==t&&(c=t)}if(c||(c=s.write),!c||!1===c.enabled)return!1
if((null===u&&!c.allowNull&&!c.writerEnsuresNonNull||void 0===u)&&c.isRequired){const t=new i.a("web-document-write:property-required",`Missing value for required property '${n}' on '${e.declaredClass}'`,{propertyName:n,target:e})
return t&&l&&l.messages?l.messages.push(t):t&&!l&&o.a.getLogger("esri.core.accessorSupport.write").error(t.name,t.message),!1}return!(void 0===u||null===u&&!c.allowNull&&!c.writerEnsuresNonNull||(!t.store.multipleOriginsSupported||t.store.originOf(n)===a.a.DEFAULTS)&&function(e,t,n,i,o){const a=i.default
if(void 0===a)return!1
if(null!=i.defaultEquals)return i.defaultEquals(o)
if("function"==typeof a){if(Array.isArray(o)){const i=a.call(e,t,n)
return Object(r.e)(i,o)}return!1}return a===o}(e,n,l,s,u)||!c.ignoreOrigin&&l&&l.origin&&t.store.multipleOriginsSupported&&t.store.originOf(n)<Object(a.e)(l.origin))}function d(e,t,n,r){const i=Object(s.a)(e),o=i.metadatas,a=Object(c.c)(o[t],r)
return!!a&&u(e,i,t,a,n,r)}function f(e,t,n){if(e&&"function"==typeof e.toJSON&&(!e.toJSON.isDefaultToJSON||!e.write))return Object(s.c)(t,e.toJSON(n))
const r=Object(s.a)(e),i=r.metadatas
for(const f in i){var o,d
const h=Object(c.c)(i[f],n)
if(!u(e,r,f,h,void 0,n))continue
const p=e.get(f),m=l(e,h,h.write&&"string"==typeof h.write.target?h.write.target:f,p,n)
Object.keys(m).length>0&&(t=Object(s.c)(t,m),null!=n&&null!=(o=n.resources)&&null!=(d=o.pendingOperations)&&d.length&&n.resources.pendingOperations.push(Promise.all(n.resources.pendingOperations).then(()=>Object(s.c)(t,m,()=>"replace-arrays"))),n&&n.writtenProperties&&n.writtenProperties.push({target:e,propName:f,oldOrigin:Object(a.d)(r.store.originOf(f)),newOrigin:n.origin}))}return t}},1105:function(e,t,n){"use strict"
function r(e,t,n=!1){let{hasM:r,hasZ:i}=e
Array.isArray(t)?4!==t.length||r||i?3===t.length&&n&&!r?(i=!0,r=!1):3===t.length&&r&&i&&(r=!1,i=!1):(r=!0,i=!0):(i=!i&&t.hasZ&&(!r||t.hasM),r=!r&&t.hasM&&(!i||t.hasZ)),e.hasZ=i,e.hasM=r}n.d(t,"a",(function(){return r}))},1114:function(e,t,n){"use strict"
var r
n.d(t,"a",(function(){return r})),function(e){e[e.ADD=1]="ADD",e[e.REMOVE=2]="REMOVE",e[e.MOVE=4]="MOVE"}(r||(r={}))},1115:function(e,t,n){"use strict"
n.d(t,"a",(function(){return l}))
var r=n(233),i=n(146),o=n(447),a=n(1039),s=n(1038)
const c=r.a.getLogger("esri.intl.substitute")
function l(e,t,n={}){const{format:r={}}=n
return Object(o.c)(e,e=>function(e,t,n){var r
let o,a
const s=e.indexOf(":")
if(-1===s?o=e.trim():(o=e.slice(0,s).trim(),a=e.slice(s+1).trim()),!o)return""
const c=Object(i.b)(o,t)
if(null==c)return""
const l=null!=(r=a?null==n?void 0:n[a]:null)?r:null==n?void 0:n[o]
return l?u(c,l):a?d(c,a):f(c)}(e,t,r))}function u(e,t){switch(t.type){case"date":return Object(a.b)(e,t.intlOptions)
case"number":return Object(s.b)(e,t.intlOptions)
default:return c.warn("missing format descriptor for key {key}"),f(e)}}function d(e,t){switch(t.toLowerCase()){case"dateformat":return Object(a.b)(e)
case"numberformat":return Object(s.b)(e)
default:return c.warn("inline format is unsupported since 4.12: "+t),/^(dateformat|datestring)/i.test(t)?Object(a.b)(e):/^numberformat/i.test(t)?Object(s.b)(e):f(e)}}function f(e){switch(typeof e){case"string":return e
case"number":return Object(s.b)(e)
case"boolean":return""+e
default:return e instanceof Date?Object(a.b)(e):""}}},1118:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return O})),n.d(t,"d",(function(){return g})),n.d(t,"e",(function(){return y}))
var r=n(1085)
function i(e,t){return Object(r.e)(e,t)}function o(e,t){const n=e.hasZ&&t.hasZ
let r,i,o
if(e.xmin<=t.xmin){if(r=t.xmin,e.xmax<r)return!1}else if(r=e.xmin,t.xmax<r)return!1
if(e.ymin<=t.ymin){if(i=t.ymin,e.ymax<i)return!1}else if(i=e.ymin,t.ymax<i)return!1
if(n&&t.hasZ)if(e.zmin<=t.zmin){if(o=t.zmin,e.zmax<o)return!1}else if(o=e.zmin,t.zmax<o)return!1
return!0}function a(e,t){const{points:n,hasZ:i}=t,o=i?r.b:r.a
for(const t of n)if(o(e,t))return!0
return!1}const s=[0,0],c=[0,0],l=[0,0],u=[0,0],d=[s,c,l,u],f=[[l,s],[s,c],[c,u],[u,l]]
function h(e,t){return function(e,t){s[0]=e.xmin,s[1]=e.ymax,c[0]=e.xmax,c[1]=e.ymax,l[0]=e.xmin,l[1]=e.ymin,u[0]=e.xmax,u[1]=e.ymin
for(const e of d)if(Object(r.h)(t,e))return!0
for(const n of t){if(!n.length)continue
let t=n[0]
if(Object(r.a)(e,t))return!0
for(let i=1;i<n.length;i++){const o=n[i]
if(Object(r.a)(e,o)||b(t,o,f))return!0
t=o}}return!1}(e,t.rings)}function p(e,t){s[0]=e.xmin,s[1]=e.ymax,c[0]=e.xmax,c[1]=e.ymax,l[0]=e.xmin,l[1]=e.ymin,u[0]=e.xmax,u[1]=e.ymin
const n=t.paths
for(const t of n){if(!n.length)continue
let i=t[0]
if(Object(r.a)(e,i))return!0
for(let n=1;n<t.length;n++){const o=t[n]
if(Object(r.a)(e,o)||b(i,o,f))return!0
i=o}}return!1}const m=[0,0]
function g(e){for(let t=0;t<e.length;t++){const n=e[t]
for(let r=0;r<n.length-1;r++){const i=n[r],o=n[r+1]
for(let n=t+1;n<e.length;n++)for(let t=0;t<e[n].length-1;t++){const r=e[n][t],a=e[n][t+1]
if(y(i,o,r,a,m)&&!(m[0]===i[0]&&m[1]===i[1]||m[0]===r[0]&&m[1]===r[1]||m[0]===o[0]&&m[1]===o[1]||m[0]===a[0]&&m[1]===a[1]))return!0}}const r=n.length
if(!(r<=4))for(let e=0;e<r-3;e++){let t=r-1
0===e&&(t=r-2)
const i=n[e],o=n[e+1]
for(let r=e+2;r<t;r++){const e=n[r],t=n[r+1]
if(y(i,o,e,t,m)&&!(m[0]===i[0]&&m[1]===i[1]||m[0]===e[0]&&m[1]===e[1]||m[0]===o[0]&&m[1]===o[1]||m[0]===t[0]&&m[1]===t[1]))return!0}}}return!1}function b(e,t,n){for(let r=0;r<n.length;r++)if(y(e,t,n[r][0],n[r][1]))return!0
return!1}function y(e,t,n,r,i){const[o,a]=e,[s,c]=t,[l,u]=n,[d,f]=r,h=d-l,p=o-l,m=s-o,g=f-u,b=a-u,y=c-a,O=g*m-h*y
if(0===O)return!1
const v=(h*b-g*p)/O,E=(m*b-y*p)/O
return v>=0&&v<=1&&E>=0&&E<=1&&(i&&(i[0]=o+v*(s-o),i[1]=a+v*(c-a)),!0)}function O(e){switch(e){case"esriGeometryEnvelope":case"extent":return o
case"esriGeometryMultipoint":case"multipoint":return a
case"esriGeometryPoint":case"point":return i
case"esriGeometryPolygon":case"polygon":return h
case"esriGeometryPolyline":case"polyline":return p}}},1124:function(e,t,n){"use strict"
n.d(t,"a",(function(){return r}))
const r=(e,...t)=>{t.forEach(t=>{if("function"!=typeof e[t])throw new Error(`Cannot bind context. ${t} must be a function`)
e[t]=e[t].bind(e)})}},1142:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return c}))
var r=n(1066)
function i(e){return e?e.hasZ?[e.xmax-e.xmin/2,e.ymax-e.ymin/2,e.zmax-e.zmin/2]:[e.xmax-e.xmin/2,e.ymax-e.ymin/2]:null}function o(e){var t
return e?a(e.rings,null!=(t=e.hasZ)&&t):null}function a(e,t){if(!e||!e.length)return null
const n=[],i=[],o=t?[1/0,-1/0,1/0,-1/0,1/0,-1/0]:[1/0,-1/0,1/0,-1/0]
for(let n=0,r=e.length;n<r;n++){const r=s(e[n],t,o)
r&&i.push(r)}if(i.sort((e,n)=>{let r=e[2]-n[2]
return 0===r&&t&&(r=e[4]-n[4]),r}),i.length&&(n[0]=i[0][0],n[1]=i[0][1],t&&(n[2]=i[0][3]),(n[0]<o[0]||n[0]>o[1]||n[1]<o[2]||n[1]>o[3]||t&&(n[2]<o[4]||n[2]>o[5]))&&(n.length=0)),!n.length){const i=e[0]&&e[0].length?function(e,t){const n=t?[0,0,0]:[0,0],i=t?[0,0,0]:[0,0]
let o=0,a=0,s=0,c=0
for(let l=0,u=e.length;l<u-1;l++){const u=e[l],d=e[l+1]
if(u&&d){n[0]=u[0],n[1]=u[1],i[0]=d[0],i[1]=d[1],t&&u.length>2&&d.length>2&&(n[2]=u[2],i[2]=d[2])
const e=Object(r.e)(n,i)
if(e){o+=e
const n=Object(r.f)(u,d)
a+=e*n[0],s+=e*n[1],t&&n.length>2&&(c+=e*n[2])}}}return o>0?t?[a/o,s/o,c/o]:[a/o,s/o]:e.length?e[0]:null}(e[0],t):null
if(!i)return null
n[0]=i[0],n[1]=i[1],t&&i.length>2&&(n[2]=i[2])}return n}function s(e,t,n){let r=0,i=0,o=0,a=0,s=0
const c=e.length?e[0][0]:0,l=e.length?e[0][1]:0,u=e.length&&t?e[0][2]:0
for(let d=0;d<e.length;d++){const f=e[d],h=e[(d+1)%e.length],[p,m,g]=f,b=p-c,y=m-l,[O,v,E]=h,j=O-c,_=v-l,S=b*_-j*y
if(a+=S,r+=(b+j)*S,i+=(y+_)*S,t&&f.length>2&&h.length>2){const e=g-u,t=E-u,n=b*t-j*e
o+=(e+t)*n,s+=n}p<n[0]&&(n[0]=p),p>n[1]&&(n[1]=p),m<n[2]&&(n[2]=m),m>n[3]&&(n[3]=m),t&&(g<n[4]&&(n[4]=g),g>n[5]&&(n[5]=g))}if(a>0&&(a*=-1),s>0&&(s*=-1),!a)return null
a*=.5,s*=.5
const d=[r/(6*a)+c,i/(6*a)+l,a]
return t&&(n[4]===n[5]||0===s?(d[3]=(n[4]+n[5])/2,d[4]=0):(d[3]=o/(6*s)+u,d[4]=s)),d}function c(e){if(!e||!e.rings)return null
const{rings:t}=e
let n=0
for(let e=0;e<t.length;e++)n+=Object(r.i)(t[e])
if(n<1e-6)return a(t,!1)
const i=[0,0],o=t[0][0]
for(let e=0;e<t.length;e++)l(i,o,t[e])
return i[0]*=1/n,i[1]*=1/n,i[0]+=o[0],i[1]+=o[1],i}function l(e,t,n){if(!e||!n||n.length<3)return null
const i=n[0],o=[0,0],a=[n[1][0]-i[0],n[1][1]-i[1]]
let s
for(let t=2;t<n.length;t++)o[0]=n[t][0]-i[0],o[1]=n[t][1]-i[1],s=1/3*.5*(o[0]*a[1]-o[1]*a[0]),e[0]+=s*(a[0]+o[0]),e[1]+=s*(a[1]+o[1]),a[0]=o[0],a[1]=o[1]
const c=Object(r.i)(n),l=[i[0],i[1]]
return l[0]-=t[0],l[1]-=t[1],l[0]*=c,l[1]*=c,e[0]+=l[0],e[1]+=l[1],e}},1146:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o}))
var r=n(374)
const i=["elevation3d.arcgis.com","js.arcgis.com","jsdev.arcgis.com","jsqa.arcgis.com","static.arcgis.com"]
function o(e){const t=Object(r.p)(e,!0)
return!!t&&t.endsWith(".arcgis.com")&&!i.includes(t)&&!e.endsWith("/sharing/rest/generateToken")}},1157:function(e,t,n){"use strict"
n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return f}))
var r=n(1079)
const i=[]
function o(e,t,n,r){return{xmin:e,ymin:t,xmax:n,ymax:r}}function a(e,t,n,r,i,o){return{xmin:e,ymin:t,zmin:n,xmax:r,ymax:i,zmax:o}}function s(e,t,n,r,i,o){return{xmin:e,ymin:t,mmin:n,xmax:r,ymax:i,mmax:o}}function c(e,t,n,r,i,o,a,s){return{xmin:e,ymin:t,zmin:n,mmin:r,xmax:i,ymax:o,zmax:a,mmax:s}}function l(e,t=!1,n=!1){return t?n?c(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]):a(e[0],e[1],e[2],e[3],e[4],e[5]):n?s(e[0],e[1],e[2],e[3],e[4],e[5]):o(e[0],e[1],e[2],e[3])}function u(e){return e?function(e){return void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax}(e)?e:function(e){return void 0!==e.x&&void 0!==e.y}(e)?function(e){const{x:t,y:n,z:r,m:i}=e,l=null!=i
return null!=r?l?c(t,n,r,i,t,n,r,i):a(t,n,r,t,n,r):l?s(t,n,i,t,n,i):o(t,n,t,n)}(e):function(e){return void 0!==e.rings}(e)?d(e):function(e){return void 0!==e.paths}(e)?f(e):function(e){return void 0!==e.points}(e)?function(e){const{hasZ:t,hasM:n,points:o}=e
return l(Object(r.c)(i,o,null!=t&&t,null!=n&&n),t,n)}(e):null:null}function d(e){const{hasZ:t,hasM:n,rings:o}=e,a=Object(r.d)(i,o,null!=t&&t,null!=n&&n)
return a?l(a,t,n):null}function f(e){const{hasZ:t,hasM:n,paths:o}=e,a=Object(r.d)(i,o,null!=t&&t,null!=n&&n)
return a?l(a,t,n):null}},1166:function(e,t,n){"use strict"
n.d(t,"a",(function(){return r}))
const r=function(e){return{setTimeout:(t,n)=>{const r=e.setTimeout(t,n)
return{remove:()=>e.clearTimeout(r)}}}}(globalThis)},1178:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
var r=n(1006)
function i(e,t,n){t.keys().forEach(e=>{n.set(e,t.get(e),r.a.DEFAULTS)})
const i=e.metadatas
Object.keys(i).forEach(t=>{e.internalGet(t)&&n.set(t,e.internalGet(t),r.a.DEFAULTS)})}},1188:function(e,t,n){"use strict"
let r
n.d(t,"a",(function(){return i}))
const i={values:[1,.3048,.3048006096012192,.3047972654,.9143917962,.201166195164,.9143984146160287,.3047994715386762,20.11676512155263,20.11678249437587,.9143985307444408,.91439523,.3047997101815088,20.1168,20.116756,5e4,15e4],units:["Meter","Foot","Foot_US","Foot_Clarke","Yard_Clarke","Link_Clarke","Yard_Sears","Foot_Sears","Chain_Sears","Chain_Benoit_1895_B","Yard_Indian","Yard_Indian_1937","Foot_Gold_Coast","Chain","Chain_Sears_1922_Truncated","50_Kilometers","150_Kilometers"],2066:5,2136:12,2155:2,2157:0,2158:0,2159:12,2160:12,2204:2,2219:0,2220:0,2254:2,2255:2,2256:1,2265:1,2266:1,2267:2,2268:2,2269:1,2270:1,2271:2,2272:2,2273:1,2294:0,2295:0,2314:3,2899:2,2900:2,2901:1,2909:1,2910:1,2911:2,2912:2,2913:1,2914:1,2992:1,2993:0,2994:1,3080:1,3089:2,3090:0,3091:2,3102:2,3141:0,3142:0,3167:14,3359:2,3360:0,3361:1,3362:0,3363:2,3364:0,3365:2,3366:3,3404:2,3405:0,3406:0,3407:3,3439:0,3440:0,3479:1,3480:0,3481:1,3482:0,3483:1,3484:0,3485:2,3486:0,3487:2,3488:0,3489:0,3490:2,3491:0,3492:2,3493:0,3494:2,3495:0,3496:2,3497:0,3498:2,3499:0,3500:2,3501:0,3502:2,3503:0,3504:2,3505:0,3506:2,3507:0,3508:2,3509:0,3510:2,3511:0,3512:2,3513:0,3514:0,3515:2,3516:0,3517:2,3518:0,3519:2,3520:0,3521:2,3522:0,3523:2,3524:0,3525:2,3526:0,3527:2,3528:0,3529:2,3530:0,3531:2,3532:0,3533:2,3534:0,3535:2,3536:0,3537:2,3538:0,3539:2,3540:0,3541:2,3542:0,3543:2,3544:0,3545:2,3546:0,3547:2,3548:0,3549:2,3550:0,3551:2,3552:0,3553:2,3582:2,3583:0,3584:2,3585:0,3586:2,3587:0,3588:1,3589:0,3590:1,3591:0,3592:0,3593:1,3598:2,3599:0,3600:2,3605:1,3606:0,3607:0,3608:2,3609:0,3610:2,3611:0,3612:2,3613:0,3614:2,3615:0,3616:2,3617:0,3618:2,3619:0,3620:2,3621:0,3622:2,3623:0,3624:2,3625:0,3626:2,3627:0,3628:2,3629:0,3630:2,3631:0,3632:2,3633:0,3634:1,3635:0,3636:1,3640:2,3641:0,3642:2,3643:0,3644:1,3645:0,3646:1,3647:0,3648:1,3649:0,3650:2,3651:0,3652:2,3653:0,3654:2,3655:0,3656:1,3657:0,3658:2,3659:0,3660:2,3661:0,3662:2,3663:0,3664:2,3668:2,3669:0,3670:2,3671:0,3672:2,3673:0,3674:2,3675:0,3676:1,3677:2,3678:0,3679:1,3680:2,3681:0,3682:1,3683:2,3684:0,3685:0,3686:2,3687:0,3688:2,3689:0,3690:2,3691:0,3692:2,3696:2,3697:0,3698:2,3699:0,3700:2,3793:0,3794:0,3812:0,3854:0,3857:0,3920:0,3978:0,3979:0,3991:2,3992:2,4026:0,4037:0,4038:0,4071:0,4082:0,4083:0,4087:0,4088:0,4217:2,4414:0,4415:0,4417:0,4434:0,4437:0,4438:2,4439:2,4462:0,4467:0,4471:0,4474:0,4559:0,4647:0,4822:0,4826:0,4839:0,5018:0,5041:0,5042:0,5048:0,5167:0,5168:0,5221:0,5223:0,5234:0,5235:0,5243:0,5247:0,5266:0,5316:0,5320:0,5321:0,5325:0,5337:0,5361:0,5362:0,5367:0,5382:0,5383:0,5396:0,5456:0,5457:0,5469:0,5472:4,5490:0,5513:0,5514:0,5523:0,5559:0,5588:1,5589:3,5596:0,5627:0,5629:0,5641:0,5643:0,5644:0,5646:2,5654:2,5655:2,5659:0,5700:0,5825:0,5836:0,5837:0,5839:0,5842:0,5844:0,5858:0,5879:0,5880:0,5887:0,5890:0,6128:1,6129:1,6141:1,6204:0,6210:0,6211:0,6307:0,6312:0,6316:0,6362:0,6391:1,6405:1,6406:0,6407:1,6408:0,6409:1,6410:0,6411:2,6412:0,6413:2,6414:0,6415:0,6416:2,6417:0,6418:2,6419:0,6420:2,6421:0,6422:2,6423:0,6424:2,6425:0,6426:2,6427:0,6428:2,6429:0,6430:2,6431:0,6432:2,6433:0,6434:2,6435:0,6436:2,6437:0,6438:2,6439:0,6440:0,6441:2,6442:0,6443:2,6444:0,6445:2,6446:0,6447:2,6448:0,6449:2,6450:0,6451:2,6452:0,6453:2,6454:0,6455:2,6456:0,6457:2,6458:0,6459:2,6460:0,6461:2,6462:0,6463:2,6464:0,6465:2,6466:0,6467:2,6468:0,6469:2,6470:0,6471:2,6472:0,6473:2,6474:0,6475:2,6476:0,6477:2,6478:0,6479:2,6484:2,6485:0,6486:2,6487:0,6488:2,6489:0,6490:2,6491:0,6492:2,6493:0,6494:1,6495:0,6496:1,6497:0,6498:0,6499:1,6500:0,6501:2,6502:0,6503:2,6504:0,6505:2,6506:0,6507:2,6508:0,6509:0,6510:2,6515:1,6516:0,6518:0,6519:2,6520:0,6521:2,6522:0,6523:2,6524:0,6525:2,6526:0,6527:2,6528:0,6529:2,6530:0,6531:2,6532:0,6533:2,6534:0,6535:2,6536:0,6537:2,6538:0,6539:2,6540:0,6541:2,6542:0,6543:2,6544:0,6545:1,6546:0,6547:1,6548:0,6549:2,6550:0,6551:2,6552:0,6553:2,6554:0,6555:2,6556:0,6557:1,6558:0,6559:1,6560:0,6561:1,6562:0,6563:2,6564:0,6565:2,6566:0,6567:0,6568:2,6569:0,6570:1,6571:0,6572:2,6573:0,6574:2,6575:0,6576:2,6577:0,6578:2,6582:2,6583:0,6584:2,6585:0,6586:2,6587:0,6588:2,6589:0,6590:2,6591:0,6592:0,6593:2,6594:0,6595:2,6596:0,6597:2,6598:0,6599:2,6600:0,6601:2,6602:0,6603:2,6605:2,6606:0,6607:2,6608:0,6609:2,6610:0,6611:0,6612:2,6613:0,6614:2,6615:0,6616:2,6617:0,6618:2,6633:2,6646:0,6703:0,6784:0,6785:1,6786:0,6787:1,6788:0,6789:1,6790:0,6791:1,6792:0,6793:1,6794:0,6795:1,6796:0,6797:1,6798:0,6799:1,6800:0,6801:1,6802:0,6803:1,6804:0,6805:1,6806:0,6807:1,6808:0,6809:1,6810:0,6811:1,6812:0,6813:1,6814:0,6815:1,6816:0,6817:1,6818:0,6819:1,6820:0,6821:1,6822:0,6823:1,6824:0,6825:1,6826:0,6827:1,6828:0,6829:1,6830:0,6831:1,6832:0,6833:1,6834:0,6835:1,6836:0,6837:1,6838:0,6839:1,6840:0,6841:1,6842:0,6843:1,6844:0,6845:1,6846:0,6847:1,6848:0,6849:1,6850:0,6851:1,6852:0,6853:1,6854:0,6855:1,6856:0,6857:1,6858:0,6859:1,6860:0,6861:1,6862:0,6863:1,6867:0,6868:1,6870:0,6875:0,6876:0,6879:0,6880:2,6884:0,6885:1,6886:0,6887:1,6915:0,6922:0,6923:2,6924:0,6925:2,6962:0,6984:0,6991:0,7128:2,7131:0,7132:2,7142:0,7257:0,7258:2,7259:0,7260:2,7261:0,7262:2,7263:0,7264:2,7265:0,7266:2,7267:0,7268:2,7269:0,7270:2,7271:0,7272:2,7273:0,7274:2,7275:0,7276:2,7277:0,7278:2,7279:0,7280:2,7281:0,7282:2,7283:0,7284:2,7285:0,7286:2,7287:0,7288:2,7289:0,7290:2,7291:0,7292:2,7293:0,7294:2,7295:0,7296:2,7297:0,7298:2,7299:0,7300:2,7301:0,7302:2,7303:0,7304:2,7305:0,7306:2,7307:0,7308:2,7309:0,7310:2,7311:0,7312:2,7313:0,7314:2,7315:0,7316:2,7317:0,7318:2,7319:0,7320:2,7321:0,7322:2,7323:0,7324:2,7325:0,7326:2,7327:0,7328:2,7329:0,7330:2,7331:0,7332:2,7333:0,7334:2,7335:0,7336:2,7337:0,7338:2,7339:0,7340:2,7341:0,7342:2,7343:0,7344:2,7345:0,7346:2,7347:0,7348:2,7349:0,7350:2,7351:0,7352:2,7353:0,7354:2,7355:0,7356:2,7357:0,7358:2,7359:0,7360:2,7361:0,7362:2,7363:0,7364:2,7365:0,7366:2,7367:0,7368:2,7369:0,7370:2,7877:0,7878:0,7882:0,7883:0,7887:0,7899:0,7991:0,7992:0,8035:2,8036:2,8058:0,8059:0,8082:0,8083:0,8088:0,8090:0,8091:2,8092:0,8093:2,8095:0,8096:2,8097:0,8098:2,8099:0,8100:2,8101:0,8102:2,8103:0,8104:2,8105:0,8106:2,8107:0,8108:2,8109:0,8110:2,8111:0,8112:2,8113:0,8114:2,8115:0,8116:2,8117:0,8118:2,8119:0,8120:2,8121:0,8122:2,8123:0,8124:2,8125:0,8126:2,8127:0,8128:2,8129:0,8130:2,8131:0,8132:2,8133:0,8134:2,8135:0,8136:2,8137:0,8138:2,8139:0,8140:2,8141:0,8142:2,8143:0,8144:2,8145:0,8146:2,8147:0,8148:2,8149:0,8150:2,8151:0,8152:2,8153:0,8154:2,8155:0,8156:2,8157:0,8158:2,8159:0,8160:2,8161:0,8162:2,8163:0,8164:2,8165:0,8166:2,8167:0,8168:2,8169:0,8170:2,8171:0,8172:2,8173:0,8177:2,8179:0,8180:2,8181:0,8182:2,8184:0,8185:2,8187:0,8189:2,8191:0,8193:2,8196:0,8197:2,8198:0,8200:2,8201:0,8202:2,8203:0,8204:2,8205:0,8206:2,8207:0,8208:2,8209:0,8210:2,8212:0,8213:2,8214:0,8216:2,8218:0,8220:2,8222:0,8224:2,8225:0,8226:2,8311:0,8312:1,8313:0,8314:1,8315:0,8316:1,8317:0,8318:1,8319:0,8320:1,8321:0,8322:1,8323:0,8324:1,8325:0,8326:1,8327:0,8328:1,8329:0,8330:1,8331:0,8332:1,8333:0,8334:1,8335:0,8336:1,8337:0,8338:1,8339:0,8340:1,8341:0,8342:1,8343:0,8344:1,8345:0,8346:1,8347:0,8348:1,8352:0,8353:0,8379:0,8380:2,8381:0,8382:2,8383:0,8384:2,8385:0,8387:2,8391:0,8395:0,8433:0,8441:0,8455:0,8456:0,8531:2,8682:0,8686:0,8687:0,8692:0,8693:0,8826:0,8903:0,8950:0,8951:0,9039:0,9040:0,9141:0,9149:0,9150:0,9191:0,9221:0,9222:0,9249:0,9250:0,9252:0,9254:0,9265:0,9284:0,9285:0,9300:0,9354:0,9367:0,9373:0,9377:0,9387:0,9391:0,9456:0,9473:0,9498:0,9674:0,9678:0,9680:0,9709:0,9712:0,9713:0,9716:0,9741:0,9748:2,9749:2,9761:0,9766:0,9793:0,9794:0,9869:0,9874:0,9875:0,9880:0,9943:0,9945:0,9947:0,9967:0,9972:0,9977:0,20042:0,20050:1,20499:0,20538:0,20539:0,20790:0,20791:0,21291:0,21292:0,21500:0,21817:0,21818:0,22032:0,22033:0,22091:0,22092:0,22239:0,22240:0,22332:0,22337:0,22338:0,22391:0,22392:0,22639:0,22700:0,22739:0,22770:0,22780:0,22832:0,23090:0,23095:0,23239:0,23240:0,23433:0,23700:0,24047:0,24048:0,24100:3,24200:0,24305:0,24306:0,24382:10,24383:0,24500:0,24547:0,24548:0,24571:9,24600:0,25e3:0,25231:0,25884:0,25932:0,26237:0,26331:0,26332:0,26432:0,26591:0,26592:0,26632:0,26692:0,27120:0,27200:0,27291:6,27292:6,27429:0,27492:0,27493:0,27500:0,27700:0,28232:0,28600:0,28991:0,28992:0,29100:0,29101:0,29220:0,29221:0,29333:0,29635:0,29636:0,29701:0,29738:0,29739:0,29849:0,29850:0,29871:8,29872:7,29873:0,29874:0,30200:5,30339:0,30340:0,30591:0,30592:0,30791:0,30792:0,30800:0,31028:0,31121:0,31154:0,31170:0,31171:0,31370:0,31528:0,31529:0,31600:0,31700:0,31838:0,31839:0,31900:0,31901:0,32061:0,32062:0,32098:0,32099:2,32100:0,32104:0,32161:0,32766:0,53048:0,53049:0,54090:0,54091:0,65061:2,65062:2,65161:0,65163:0,102041:2,102064:11,102068:15,102069:16,102118:2,102119:1,102120:2,102121:2,102217:2,102218:0,102219:2,102220:2,102378:1,102379:1,102380:0,102381:1,102589:2,102599:2,102600:2,102604:2,102647:0,102704:2,102705:2,102706:0,102731:0,102732:0,102759:1,102760:1,102761:2,102762:0,102763:2,102764:0,102765:0,102766:2,102970:1,102974:2,102993:0,102994:0,102995:2,102996:2,103015:0,103016:2,103017:0,103018:2,103025:0,103026:0,103027:2,103028:2,103035:0,103036:0,103037:2,103038:2,103039:0,103040:0,103041:2,103042:2,103043:0,103044:0,103045:2,103046:2,103047:0,103048:0,103049:2,103050:2,103051:0,103052:2,103053:0,103054:2,103055:0,103056:2,103057:0,103058:0,103059:2,103060:2,103061:0,103062:0,103063:2,103064:2,103069:2,103070:0,103071:0,103072:2,103073:2,103086:0,103087:0,103088:2,103089:2,103094:1,103095:0,103096:2,103103:0,103104:2,103105:0,103106:2,103121:0,103122:2,103123:0,103124:0,103125:1,103126:1,103127:0,103128:0,103129:2,103130:2,103131:0,103132:0,103133:2,103134:2,103135:0,103136:0,103137:1,103138:1,103139:0,103140:2,103141:0,103142:2,103143:0,103144:2,103145:0,103146:1,103147:0,103148:0,103149:2,103150:2,103151:0,103152:2,103172:0,103173:2,103174:0,103175:0,103176:2,103177:2,103178:0,103179:0,103180:2,103181:2,103182:0,103183:0,103184:2,103185:2,103228:0,103229:0,103230:2,103231:2,103250:0,103251:2,103252:0,103253:2,103260:0,103261:0,103262:2,103263:2,103270:0,103271:0,103272:2,103273:2,103274:0,103275:0,103276:2,103277:2,103278:0,103279:0,103280:2,103281:2,103282:0,103283:0,103284:2,103285:2,103286:0,103287:2,103288:0,103289:2,103290:0,103291:2,103292:0,103293:0,103294:2,103295:2,103296:0,103297:0,103298:2,103299:2,103376:2,103377:0,103378:0,103379:2,103380:2,103393:0,103394:0,103395:2,103396:2,103472:0,103473:1,103474:0,103475:2,103482:0,103483:2,103484:0,103485:2,103500:0,103501:2,103502:0,103503:0,103504:1,103505:1,103506:0,103507:0,103508:2,103509:2,103510:0,103511:0,103512:2,103513:2,103514:0,103515:2,103516:0,103517:2,103518:0,103519:2,103520:0,103521:1,103522:0,103523:0,103524:2,103525:2,103526:0,103527:2,103561:2,103562:2,103563:0,103564:0,103565:2,103566:2,103567:0,103568:0,103569:2,103570:2,103584:0,103585:2,103586:0,103587:2,103588:1,103589:0,103590:2,103591:1,103592:0,103593:2,103594:1,103695:2}
for(r=2e3;r<=2045;r++)i[r]=0
for(r=2056;r<=2065;r++)i[r]=0
for(r=2067;r<=2135;r++)i[r]=0
for(r=2137;r<=2154;r++)i[r]=0
for(r=2161;r<=2170;r++)i[r]=0
for(r=2172;r<=2193;r++)i[r]=0
for(r=2195;r<=2198;r++)i[r]=0
for(r=2200;r<=2203;r++)i[r]=0
for(r=2205;r<=2217;r++)i[r]=0
for(r=2222;r<=2224;r++)i[r]=1
for(r=2225;r<=2250;r++)i[r]=2
for(r=2251;r<=2253;r++)i[r]=1
for(r=2257;r<=2264;r++)i[r]=2
for(r=2274;r<=2279;r++)i[r]=2
for(r=2280;r<=2282;r++)i[r]=1
for(r=2283;r<=2289;r++)i[r]=2
for(r=2290;r<=2292;r++)i[r]=0
for(r=2308;r<=2313;r++)i[r]=0
for(r=2315;r<=2491;r++)i[r]=0
for(r=2494;r<=2866;r++)i[r]=0
for(r=2867;r<=2869;r++)i[r]=1
for(r=2870;r<=2888;r++)i[r]=2
for(r=2891;r<=2895;r++)i[r]=2
for(r=2896;r<=2898;r++)i[r]=1
for(r=2902;r<=2908;r++)i[r]=2
for(r=2915;r<=2920;r++)i[r]=2
for(r=2921;r<=2923;r++)i[r]=1
for(r=2924;r<=2930;r++)i[r]=2
for(r=2931;r<=2962;r++)i[r]=0
for(r=2964;r<=2968;r++)i[r]=2
for(r=2969;r<=2973;r++)i[r]=0
for(r=2975;r<=2991;r++)i[r]=0
for(r=2995;r<=3051;r++)i[r]=0
for(r=3054;r<=3079;r++)i[r]=0
for(r=3081;r<=3088;r++)i[r]=0
for(r=3092;r<=3101;r++)i[r]=0
for(r=3106;r<=3138;r++)i[r]=0
for(r=3146;r<=3151;r++)i[r]=0
for(r=3153;r<=3166;r++)i[r]=0
for(r=3168;r<=3172;r++)i[r]=0
for(r=3174;r<=3203;r++)i[r]=0
for(r=3294;r<=3358;r++)i[r]=0
for(r=3367;r<=3403;r++)i[r]=0
for(r=3408;r<=3416;r++)i[r]=0
for(r=3417;r<=3438;r++)i[r]=2
for(r=3441;r<=3446;r++)i[r]=2
for(r=3447;r<=3450;r++)i[r]=0
for(r=3451;r<=3459;r++)i[r]=2
for(r=3460;r<=3478;r++)i[r]=0
for(r=3554;r<=3559;r++)i[r]=0
for(r=3560;r<=3570;r++)i[r]=2
for(r=3571;r<=3581;r++)i[r]=0
for(r=3594;r<=3597;r++)i[r]=0
for(r=3601;r<=3604;r++)i[r]=0
for(r=3637;r<=3639;r++)i[r]=0
for(r=3665;r<=3667;r++)i[r]=0
for(r=3693;r<=3695;r++)i[r]=0
for(r=3701;r<=3727;r++)i[r]=0
for(r=3728;r<=3739;r++)i[r]=2
for(r=3740;r<=3751;r++)i[r]=0
for(r=3753;r<=3760;r++)i[r]=2
for(r=3761;r<=3773;r++)i[r]=0
for(r=3775;r<=3777;r++)i[r]=0
for(r=3779;r<=3781;r++)i[r]=0
for(r=3783;r<=3785;r++)i[r]=0
for(r=3788;r<=3791;r++)i[r]=0
for(r=3797;r<=3802;r++)i[r]=0
for(r=3814;r<=3816;r++)i[r]=0
for(r=3825;r<=3829;r++)i[r]=0
for(r=3832;r<=3841;r++)i[r]=0
for(r=3844;r<=3852;r++)i[r]=0
for(r=3873;r<=3885;r++)i[r]=0
for(r=3890;r<=3893;r++)i[r]=0
for(r=3907;r<=3912;r++)i[r]=0
for(r=3942;r<=3950;r++)i[r]=0
for(r=3968;r<=3970;r++)i[r]=0
for(r=3973;r<=3976;r++)i[r]=0
for(r=3986;r<=3989;r++)i[r]=0
for(r=3994;r<=3997;r++)i[r]=0
for(r=4048;r<=4051;r++)i[r]=0
for(r=4056;r<=4063;r++)i[r]=0
for(r=4093;r<=4096;r++)i[r]=0
for(r=4390;r<=4398;r++)i[r]=0
for(r=4399;r<=4413;r++)i[r]=2
for(r=4418;r<=4433;r++)i[r]=2
for(r=4455;r<=4457;r++)i[r]=2
for(r=4484;r<=4489;r++)i[r]=0
for(r=4491;r<=4554;r++)i[r]=0
for(r=4568;r<=4589;r++)i[r]=0
for(r=4652;r<=4656;r++)i[r]=0
for(r=4766;r<=4800;r++)i[r]=0
for(r=5014;r<=5016;r++)i[r]=0
for(r=5069;r<=5072;r++)i[r]=0
for(r=5105;r<=5130;r++)i[r]=0
for(r=5173;r<=5188;r++)i[r]=0
for(r=5253;r<=5259;r++)i[r]=0
for(r=5269;r<=5275;r++)i[r]=0
for(r=5292;r<=5311;r++)i[r]=0
for(r=5329;r<=5331;r++)i[r]=0
for(r=5343;r<=5349;r++)i[r]=0
for(r=5355;r<=5357;r++)i[r]=0
for(r=5387;r<=5389;r++)i[r]=0
for(r=5459;r<=5463;r++)i[r]=0
for(r=5479;r<=5482;r++)i[r]=0
for(r=5518;r<=5520;r++)i[r]=0
for(r=5530;r<=5539;r++)i[r]=0
for(r=5550;r<=5552;r++)i[r]=0
for(r=5562;r<=5583;r++)i[r]=0
for(r=5623;r<=5625;r++)i[r]=2
for(r=5631;r<=5639;r++)i[r]=0
for(r=5649;r<=5653;r++)i[r]=0
for(r=5663;r<=5680;r++)i[r]=0
for(r=5682;r<=5685;r++)i[r]=0
for(r=5875;r<=5877;r++)i[r]=0
for(r=5896;r<=5899;r++)i[r]=0
for(r=5921;r<=5940;r++)i[r]=0
for(r=6050;r<=6125;r++)i[r]=0
for(r=6244;r<=6275;r++)i[r]=0
for(r=6328;r<=6348;r++)i[r]=0
for(r=6350;r<=6356;r++)i[r]=0
for(r=6366;r<=6372;r++)i[r]=0
for(r=6381;r<=6387;r++)i[r]=0
for(r=6393;r<=6404;r++)i[r]=0
for(r=6480;r<=6483;r++)i[r]=0
for(r=6511;r<=6514;r++)i[r]=0
for(r=6579;r<=6581;r++)i[r]=0
for(r=6619;r<=6624;r++)i[r]=0
for(r=6625;r<=6627;r++)i[r]=2
for(r=6628;r<=6632;r++)i[r]=0
for(r=6634;r<=6637;r++)i[r]=0
for(r=6669;r<=6692;r++)i[r]=0
for(r=6707;r<=6709;r++)i[r]=0
for(r=6720;r<=6723;r++)i[r]=0
for(r=6732;r<=6738;r++)i[r]=0
for(r=6931;r<=6933;r++)i[r]=0
for(r=6956;r<=6959;r++)i[r]=0
for(r=7005;r<=7007;r++)i[r]=0
for(r=7057;r<=7070;r++)i[r]=2
for(r=7074;r<=7082;r++)i[r]=0
for(r=7109;r<=7118;r++)i[r]=0
for(r=7119;r<=7127;r++)i[r]=1
for(r=7374;r<=7376;r++)i[r]=0
for(r=7528;r<=7586;r++)i[r]=0
for(r=7587;r<=7645;r++)i[r]=2
for(r=7692;r<=7696;r++)i[r]=0
for(r=7755;r<=7787;r++)i[r]=0
for(r=7791;r<=7795;r++)i[r]=0
for(r=7799;r<=7801;r++)i[r]=0
for(r=7803;r<=7805;r++)i[r]=0
for(r=7825;r<=7831;r++)i[r]=0
for(r=7845;r<=7859;r++)i[r]=0
for(r=8013;r<=8032;r++)i[r]=0
for(r=8065;r<=8068;r++)i[r]=1
for(r=8518;r<=8529;r++)i[r]=2
for(r=8533;r<=8536;r++)i[r]=2
for(r=8538;r<=8540;r++)i[r]=2
for(r=8677;r<=8679;r++)i[r]=0
for(r=8836;r<=8840;r++)i[r]=0
for(r=8857;r<=8859;r++)i[r]=0
for(r=8908;r<=8910;r++)i[r]=0
for(r=9154;r<=9159;r++)i[r]=0
for(r=9205;r<=9218;r++)i[r]=0
for(r=9271;r<=9273;r++)i[r]=0
for(r=9295;r<=9297;r++)i[r]=0
for(r=9356;r<=9360;r++)i[r]=0
for(r=9404;r<=9407;r++)i[r]=0
for(r=9476;r<=9482;r++)i[r]=0
for(r=9487;r<=9494;r++)i[r]=0
for(r=9697;r<=9699;r++)i[r]=0
for(r=9821;r<=9865;r++)i[r]=0
for(r=20002;r<=20032;r++)i[r]=0
for(r=20047;r<=20049;r++)i[r]=0
for(r=20062;r<=20092;r++)i[r]=0
for(r=20135;r<=20138;r++)i[r]=0
for(r=20248;r<=20258;r++)i[r]=0
for(r=20348;r<=20358;r++)i[r]=0
for(r=20436;r<=20440;r++)i[r]=0
for(r=20822;r<=20824;r++)i[r]=0
for(r=20904;r<=20932;r++)i[r]=0
for(r=20934;r<=20936;r++)i[r]=0
for(r=21004;r<=21032;r++)i[r]=0
for(r=21035;r<=21037;r++)i[r]=0
for(r=21095;r<=21097;r++)i[r]=0
for(r=21148;r<=21150;r++)i[r]=0
for(r=21207;r<=21264;r++)i[r]=0
for(r=21307;r<=21364;r++)i[r]=0
for(r=21413;r<=21423;r++)i[r]=0
for(r=21453;r<=21463;r++)i[r]=0
for(r=21473;r<=21483;r++)i[r]=0
for(r=21780;r<=21782;r++)i[r]=0
for(r=21891;r<=21894;r++)i[r]=0
for(r=21896;r<=21899;r++)i[r]=0
for(r=22171;r<=22177;r++)i[r]=0
for(r=22181;r<=22187;r++)i[r]=0
for(r=22191;r<=22197;r++)i[r]=0
for(r=22207;r<=22222;r++)i[r]=0
for(r=22234;r<=22236;r++)i[r]=0
for(r=22243;r<=22250;r++)i[r]=0
for(r=22262;r<=22265;r++)i[r]=0
for(r=22307;r<=22322;r++)i[r]=0
for(r=22348;r<=22357;r++)i[r]=0
for(r=22407;r<=22422;r++)i[r]=0
for(r=22462;r<=22465;r++)i[r]=0
for(r=22521;r<=22525;r++)i[r]=0
for(r=22607;r<=22622;r++)i[r]=0
for(r=22641;r<=22646;r++)i[r]=0
for(r=22648;r<=22657;r++)i[r]=0
for(r=22707;r<=22722;r++)i[r]=0
for(r=22762;r<=22765;r++)i[r]=0
for(r=22991;r<=22994;r++)i[r]=0
for(r=23028;r<=23038;r++)i[r]=0
for(r=23830;r<=23853;r++)i[r]=0
for(r=23866;r<=23872;r++)i[r]=0
for(r=23877;r<=23884;r++)i[r]=0
for(r=23886;r<=23894;r++)i[r]=0
for(r=23946;r<=23948;r++)i[r]=0
for(r=24311;r<=24313;r++)i[r]=0
for(r=24342;r<=24347;r++)i[r]=0
for(r=24370;r<=24374;r++)i[r]=10
for(r=24375;r<=24381;r++)i[r]=0
for(r=24718;r<=24721;r++)i[r]=0
for(r=24817;r<=24821;r++)i[r]=0
for(r=24877;r<=24882;r++)i[r]=0
for(r=24891;r<=24893;r++)i[r]=0
for(r=25391;r<=25395;r++)i[r]=0
for(r=25828;r<=25838;r++)i[r]=0
for(r=26191;r<=26195;r++)i[r]=0
for(r=26391;r<=26393;r++)i[r]=0
for(r=26701;r<=26722;r++)i[r]=0
for(r=26729;r<=26799;r++)i[r]=2
for(r=26801;r<=26803;r++)i[r]=2
for(r=26811;r<=26813;r++)i[r]=2
for(r=26847;r<=26870;r++)i[r]=2
for(r=26891;r<=26899;r++)i[r]=0
for(r=26901;r<=26923;r++)i[r]=0
for(r=26929;r<=26946;r++)i[r]=0
for(r=26948;r<=26998;r++)i[r]=0
for(r=27037;r<=27040;r++)i[r]=0
for(r=27205;r<=27232;r++)i[r]=0
for(r=27258;r<=27260;r++)i[r]=0
for(r=27391;r<=27398;r++)i[r]=0
for(r=27561;r<=27564;r++)i[r]=0
for(r=27571;r<=27574;r++)i[r]=0
for(r=27581;r<=27584;r++)i[r]=0
for(r=27591;r<=27594;r++)i[r]=0
for(r=28191;r<=28193;r++)i[r]=0
for(r=28348;r<=28358;r++)i[r]=0
for(r=28402;r<=28432;r++)i[r]=0
for(r=28462;r<=28492;r++)i[r]=0
for(r=29118;r<=29122;r++)i[r]=0
for(r=29168;r<=29172;r++)i[r]=0
for(r=29177;r<=29185;r++)i[r]=0
for(r=29187;r<=29195;r++)i[r]=0
for(r=29900;r<=29903;r++)i[r]=0
for(r=30161;r<=30179;r++)i[r]=0
for(r=30491;r<=30494;r++)i[r]=0
for(r=30729;r<=30732;r++)i[r]=0
for(r=31251;r<=31259;r++)i[r]=0
for(r=31265;r<=31268;r++)i[r]=0
for(r=31275;r<=31279;r++)i[r]=0
for(r=31281;r<=31297;r++)i[r]=0
for(r=31461;r<=31469;r++)i[r]=0
for(r=31491;r<=31495;r++)i[r]=0
for(r=31917;r<=31922;r++)i[r]=0
for(r=31965;r<=32e3;r++)i[r]=0
for(r=32001;r<=32003;r++)i[r]=2
for(r=32005;r<=32031;r++)i[r]=2
for(r=32033;r<=32060;r++)i[r]=2
for(r=32064;r<=32067;r++)i[r]=2
for(r=32074;r<=32077;r++)i[r]=2
for(r=32081;r<=32086;r++)i[r]=0
for(r=32107;r<=32130;r++)i[r]=0
for(r=32133;r<=32159;r++)i[r]=0
for(r=32164;r<=32167;r++)i[r]=2
for(r=32180;r<=32199;r++)i[r]=0
for(r=32201;r<=32260;r++)i[r]=0
for(r=32301;r<=32360;r++)i[r]=0
for(r=32601;r<=32662;r++)i[r]=0
for(r=32664;r<=32667;r++)i[r]=2
for(r=32701;r<=32761;r++)i[r]=0
for(r=53001;r<=53004;r++)i[r]=0
for(r=53008;r<=53019;r++)i[r]=0
for(r=53021;r<=53032;r++)i[r]=0
for(r=53034;r<=53037;r++)i[r]=0
for(r=53042;r<=53046;r++)i[r]=0
for(r=53074;r<=53080;r++)i[r]=0
for(r=54001;r<=54004;r++)i[r]=0
for(r=54008;r<=54019;r++)i[r]=0
for(r=54021;r<=54032;r++)i[r]=0
for(r=54034;r<=54037;r++)i[r]=0
for(r=54042;r<=54046;r++)i[r]=0
for(r=54048;r<=54053;r++)i[r]=0
for(r=54074;r<=54080;r++)i[r]=0
for(r=54098;r<=54101;r++)i[r]=0
for(r=102001;r<=102040;r++)i[r]=0
for(r=102042;r<=102063;r++)i[r]=0
for(r=102065;r<=102067;r++)i[r]=0
for(r=102070;r<=102117;r++)i[r]=0
for(r=102122;r<=102216;r++)i[r]=0
for(r=102221;r<=102377;r++)i[r]=0
for(r=102382;r<=102388;r++)i[r]=0
for(r=102389;r<=102398;r++)i[r]=2
for(r=102399;r<=102444;r++)i[r]=0
for(r=102445;r<=102447;r++)i[r]=2
for(r=102448;r<=102458;r++)i[r]=0
for(r=102459;r<=102468;r++)i[r]=2
for(r=102469;r<=102499;r++)i[r]=0
for(r=102500;r<=102519;r++)i[r]=1
for(r=102520;r<=102524;r++)i[r]=0
for(r=102525;r<=102529;r++)i[r]=2
for(r=102530;r<=102588;r++)i[r]=0
for(r=102590;r<=102598;r++)i[r]=0
for(r=102601;r<=102603;r++)i[r]=0
for(r=102605;r<=102628;r++)i[r]=0
for(r=102629;r<=102646;r++)i[r]=2
for(r=102648;r<=102700;r++)i[r]=2
for(r=102701;r<=102703;r++)i[r]=0
for(r=102707;r<=102730;r++)i[r]=2
for(r=102733;r<=102758;r++)i[r]=2
for(r=102767;r<=102900;r++)i[r]=0
for(r=102901;r<=102933;r++)i[r]=2
for(r=102934;r<=102950;r++)i[r]=13
for(r=102951;r<=102955;r++)i[r]=0
for(r=102961;r<=102963;r++)i[r]=0
for(r=102965;r<=102969;r++)i[r]=0
for(r=102971;r<=102973;r++)i[r]=0
for(r=102975;r<=102989;r++)i[r]=0
for(r=102990;r<=102992;r++)i[r]=1
for(r=102997;r<=103002;r++)i[r]=0
for(r=103003;r<=103008;r++)i[r]=2
for(r=103009;r<=103011;r++)i[r]=0
for(r=103012;r<=103014;r++)i[r]=2
for(r=103019;r<=103021;r++)i[r]=0
for(r=103022;r<=103024;r++)i[r]=2
for(r=103029;r<=103031;r++)i[r]=0
for(r=103032;r<=103034;r++)i[r]=2
for(r=103065;r<=103068;r++)i[r]=0
for(r=103074;r<=103076;r++)i[r]=0
for(r=103077;r<=103079;r++)i[r]=1
for(r=103080;r<=103082;r++)i[r]=0
for(r=103083;r<=103085;r++)i[r]=2
for(r=103090;r<=103093;r++)i[r]=0
for(r=103097;r<=103099;r++)i[r]=0
for(r=103100;r<=103102;r++)i[r]=2
for(r=103107;r<=103109;r++)i[r]=0
for(r=103110;r<=103112;r++)i[r]=2
for(r=103113;r<=103116;r++)i[r]=0
for(r=103117;r<=103120;r++)i[r]=2
for(r=103153;r<=103157;r++)i[r]=0
for(r=103158;r<=103162;r++)i[r]=2
for(r=103163;r<=103165;r++)i[r]=0
for(r=103166;r<=103168;r++)i[r]=1
for(r=103169;r<=103171;r++)i[r]=2
for(r=103186;r<=103188;r++)i[r]=0
for(r=103189;r<=103191;r++)i[r]=2
for(r=103192;r<=103195;r++)i[r]=0
for(r=103196;r<=103199;r++)i[r]=2
for(r=103200;r<=103224;r++)i[r]=0
for(r=103225;r<=103227;r++)i[r]=1
for(r=103232;r<=103237;r++)i[r]=0
for(r=103238;r<=103243;r++)i[r]=2
for(r=103244;r<=103246;r++)i[r]=0
for(r=103247;r<=103249;r++)i[r]=2
for(r=103254;r<=103256;r++)i[r]=0
for(r=103257;r<=103259;r++)i[r]=2
for(r=103264;r<=103266;r++)i[r]=0
for(r=103267;r<=103269;r++)i[r]=2
for(r=103300;r<=103375;r++)i[r]=0
for(r=103381;r<=103383;r++)i[r]=0
for(r=103384;r<=103386;r++)i[r]=1
for(r=103387;r<=103389;r++)i[r]=0
for(r=103390;r<=103392;r++)i[r]=2
for(r=103397;r<=103399;r++)i[r]=0
for(r=103400;r<=103471;r++)i[r]=2
for(r=103476;r<=103478;r++)i[r]=0
for(r=103479;r<=103481;r++)i[r]=2
for(r=103486;r<=103488;r++)i[r]=0
for(r=103489;r<=103491;r++)i[r]=2
for(r=103492;r<=103495;r++)i[r]=0
for(r=103496;r<=103499;r++)i[r]=2
for(r=103528;r<=103543;r++)i[r]=0
for(r=103544;r<=103548;r++)i[r]=2
for(r=103549;r<=103551;r++)i[r]=0
for(r=103552;r<=103554;r++)i[r]=1
for(r=103555;r<=103557;r++)i[r]=2
for(r=103558;r<=103560;r++)i[r]=0
for(r=103571;r<=103573;r++)i[r]=0
for(r=103574;r<=103576;r++)i[r]=2
for(r=103577;r<=103580;r++)i[r]=0
for(r=103581;r<=103583;r++)i[r]=2
for(r=103595;r<=103694;r++)i[r]=0
for(r=103696;r<=103699;r++)i[r]=0
for(r=103700;r<=103793;r++)i[r]=2
for(r=103794;r<=103890;r++)i[r]=0
for(r=103891;r<=103896;r++)i[r]=2
for(r=103900;r<=103971;r++)i[r]=2
for(r=103972;r<=103977;r++)i[r]=0
for(r=112e3;r<=112101;r++)i[r]=0},1224:function(e,t,n){"use strict"
n.d(t,"a",(function(){return gt}))
var r=n(96),i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)}
function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null")
function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var a,s,c,l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e}).apply(this,arguments)}
function u(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i])
return e.concat(r||Array.prototype.slice.call(t))}function d(e){return e.type===s.literal}function f(e){return e.type===s.argument}function h(e){return e.type===s.number}function p(e){return e.type===s.date}function m(e){return e.type===s.time}function g(e){return e.type===s.select}function b(e){return e.type===s.plural}function y(e){return e.type===s.pound}function O(e){return e.type===s.tag}function v(e){return!(!e||"object"!=typeof e||e.type!==c.number)}function E(e){return!(!e||"object"!=typeof e||e.type!==c.dateTime)}!function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"}(a||(a={})),function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"}(s||(s={})),function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"}(c||(c={}))
var j=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,_=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g
function S(e){var t={}
return e.replace(_,(function(e){var n=e.length
switch(e[0]){case"G":t.era=4===n?"long":5===n?"narrow":"short"
break
case"y":t.year=2===n?"2-digit":"numeric"
break
case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead")
case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported")
case"M":case"L":t.month=["numeric","2-digit","short","long","narrow"][n-1]
break
case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported")
case"d":t.day=["numeric","2-digit"][n-1]
break
case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead")
case"E":t.weekday=4===n?"short":5===n?"narrow":"short"
break
case"e":if(n<4)throw new RangeError("`e..eee` (weekday) patterns are not supported")
t.weekday=["short","long","narrow","short"][n-4]
break
case"c":if(n<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported")
t.weekday=["short","long","narrow","short"][n-4]
break
case"a":t.hour12=!0
break
case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead")
case"h":t.hourCycle="h12",t.hour=["numeric","2-digit"][n-1]
break
case"H":t.hourCycle="h23",t.hour=["numeric","2-digit"][n-1]
break
case"K":t.hourCycle="h11",t.hour=["numeric","2-digit"][n-1]
break
case"k":t.hourCycle="h24",t.hour=["numeric","2-digit"][n-1]
break
case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead")
case"m":t.minute=["numeric","2-digit"][n-1]
break
case"s":t.second=["numeric","2-digit"][n-1]
break
case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead")
case"z":t.timeZoneName=n<4?"short":"long"
break
case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""})),t}var w,T=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i,x=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,C=/^(@+)?(\+|#+)?[rs]?$/g,I=/(\*)(0+)|(#+)(0+)|(0+)/g,R=/^(0+)$/
function A(e){var t={}
return"r"===e[e.length-1]?t.roundingPriority="morePrecision":"s"===e[e.length-1]&&(t.roundingPriority="lessPrecision"),e.replace(C,(function(e,n,r){return"string"!=typeof r?(t.minimumSignificantDigits=n.length,t.maximumSignificantDigits=n.length):"+"===r?t.minimumSignificantDigits=n.length:"#"===n[0]?t.maximumSignificantDigits=n.length:(t.minimumSignificantDigits=n.length,t.maximumSignificantDigits=n.length+("string"==typeof r?r.length:0)),""})),t}function P(e){switch(e){case"sign-auto":return{signDisplay:"auto"}
case"sign-accounting":case"()":return{currencySign:"accounting"}
case"sign-always":case"+!":return{signDisplay:"always"}
case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"}
case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"}
case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"}
case"sign-never":case"+_":return{signDisplay:"never"}}}function M(e){var t
if("E"===e[0]&&"E"===e[1]?(t={notation:"engineering"},e=e.slice(2)):"E"===e[0]&&(t={notation:"scientific"},e=e.slice(1)),t){var n=e.slice(0,2)
if("+!"===n?(t.signDisplay="always",e=e.slice(2)):"+?"===n&&(t.signDisplay="exceptZero",e=e.slice(2)),!R.test(e))throw new Error("Malformed concise eng/scientific notation")
t.minimumIntegerDigits=e.length}return t}function N(e){var t=P(e)
return t||{}}function D(e){for(var t={},n=0,r=e;n<r.length;n++){var i=r[n]
switch(i.stem){case"percent":case"%":t.style="percent"
continue
case"%x100":t.style="percent",t.scale=100
continue
case"currency":t.style="currency",t.currency=i.options[0]
continue
case"group-off":case",_":t.useGrouping=!1
continue
case"precision-integer":case".":t.maximumFractionDigits=0
continue
case"measure-unit":case"unit":t.style="unit",t.unit=i.options[0].replace(/^(.*?)-/,"")
continue
case"compact-short":case"K":t.notation="compact",t.compactDisplay="short"
continue
case"compact-long":case"KK":t.notation="compact",t.compactDisplay="long"
continue
case"scientific":t=l(l(l({},t),{notation:"scientific"}),i.options.reduce((function(e,t){return l(l({},e),N(t))}),{}))
continue
case"engineering":t=l(l(l({},t),{notation:"engineering"}),i.options.reduce((function(e,t){return l(l({},e),N(t))}),{}))
continue
case"notation-simple":t.notation="standard"
continue
case"unit-width-narrow":t.currencyDisplay="narrowSymbol",t.unitDisplay="narrow"
continue
case"unit-width-short":t.currencyDisplay="code",t.unitDisplay="short"
continue
case"unit-width-full-name":t.currencyDisplay="name",t.unitDisplay="long"
continue
case"unit-width-iso-code":t.currencyDisplay="symbol"
continue
case"scale":t.scale=parseFloat(i.options[0])
continue
case"integer-width":if(i.options.length>1)throw new RangeError("integer-width stems only accept a single optional option")
i.options[0].replace(I,(function(e,n,r,i,o,a){if(n)t.minimumIntegerDigits=r.length
else{if(i&&o)throw new Error("We currently do not support maximum integer digits")
if(a)throw new Error("We currently do not support exact integer digits")}return""}))
continue}if(R.test(i.stem))t.minimumIntegerDigits=i.stem.length
else if(x.test(i.stem)){if(i.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option")
i.stem.replace(x,(function(e,n,r,i,o,a){return"*"===r?t.minimumFractionDigits=n.length:i&&"#"===i[0]?t.maximumFractionDigits=i.length:o&&a?(t.minimumFractionDigits=o.length,t.maximumFractionDigits=o.length+a.length):(t.minimumFractionDigits=n.length,t.maximumFractionDigits=n.length),""}))
var o=i.options[0]
"w"===o?t=l(l({},t),{trailingZeroDisplay:"stripIfInteger"}):o&&(t=l(l({},t),A(o)))}else if(C.test(i.stem))t=l(l({},t),A(i.stem))
else{var a=P(i.stem)
a&&(t=l(l({},t),a))
var s=M(i.stem)
s&&(t=l(l({},t),s))}}return t}var L=new RegExp("^"+j.source+"*"),F=new RegExp(j.source+"*$")
function U(e,t){return{start:e,end:t}}var G=!!String.prototype.startsWith,k=!!String.fromCodePoint,W=!!Object.fromEntries,z=!!String.prototype.codePointAt,V=!!String.prototype.trimStart,B=!!String.prototype.trimEnd,q=Number.isSafeInteger?Number.isSafeInteger:function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},H=!0
try{H="a"===(null===(w=ee("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu").exec("a"))||void 0===w?void 0:w[0])}catch(e){H=!1}var J,Z=G?function(e,t,n){return e.startsWith(t,n)}:function(e,t,n){return e.slice(n,n+t.length)===t},$=k?String.fromCodePoint:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var n,r="",i=e.length,o=0;i>o;){if((n=e[o++])>1114111)throw RangeError(n+" is not a valid code point")
r+=n<65536?String.fromCharCode(n):String.fromCharCode(55296+((n-=65536)>>10),n%1024+56320)}return r},Y=W?Object.fromEntries:function(e){for(var t={},n=0,r=e;n<r.length;n++){var i=r[n],o=i[0],a=i[1]
t[o]=a}return t},K=z?function(e,t){return e.codePointAt(t)}:function(e,t){var n=e.length
if(!(t<0||t>=n)){var r,i=e.charCodeAt(t)
return i<55296||i>56319||t+1===n||(r=e.charCodeAt(t+1))<56320||r>57343?i:r-56320+(i-55296<<10)+65536}},X=V?function(e){return e.trimStart()}:function(e){return e.replace(L,"")},Q=B?function(e){return e.trimEnd()}:function(e){return e.replace(F,"")}
function ee(e,t){return new RegExp(e,t)}if(H){var te=ee("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu")
J=function(e,t){var n
return te.lastIndex=t,null!==(n=te.exec(e)[1])&&void 0!==n?n:""}}else J=function(e,t){for(var n=[];;){var r=K(e,t)
if(void 0===r||ie(r)||oe(r))break
n.push(r),t+=r>=65536?2:1}return $.apply(void 0,n)}
var ne=function(){function e(e,t){void 0===t&&(t={}),this.message=e,this.position={offset:0,line:1,column:1},this.ignoreTag=!!t.ignoreTag,this.requiresOtherClause=!!t.requiresOtherClause,this.shouldParseSkeletons=!!t.shouldParseSkeletons}return e.prototype.parse=function(){if(0!==this.offset())throw Error("parser can only be used once")
return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(e,t,n){for(var r=[];!this.isEOF();){var i=this.char()
if(123===i){if((o=this.parseArgument(e,n)).err)return o
r.push(o.val)}else{if(125===i&&e>0)break
if(35!==i||"plural"!==t&&"selectordinal"!==t){if(60===i&&!this.ignoreTag&&47===this.peek()){if(n)break
return this.error(a.UNMATCHED_CLOSING_TAG,U(this.clonePosition(),this.clonePosition()))}if(60===i&&!this.ignoreTag&&re(this.peek()||0)){if((o=this.parseTag(e,t)).err)return o
r.push(o.val)}else{var o
if((o=this.parseLiteral(e,t)).err)return o
r.push(o.val)}}else{var c=this.clonePosition()
this.bump(),r.push({type:s.pound,location:U(c,this.clonePosition())})}}}return{val:r,err:null}},e.prototype.parseTag=function(e,t){var n=this.clonePosition()
this.bump()
var r=this.parseTagName()
if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:s.literal,value:"<"+r+"/>",location:U(n,this.clonePosition())},err:null}
if(this.bumpIf(">")){var i=this.parseMessage(e+1,t,!0)
if(i.err)return i
var o=i.val,c=this.clonePosition()
if(this.bumpIf("</")){if(this.isEOF()||!re(this.char()))return this.error(a.INVALID_TAG,U(c,this.clonePosition()))
var l=this.clonePosition()
return r!==this.parseTagName()?this.error(a.UNMATCHED_CLOSING_TAG,U(l,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:s.tag,value:r,children:o,location:U(n,this.clonePosition())},err:null}:this.error(a.INVALID_TAG,U(c,this.clonePosition())))}return this.error(a.UNCLOSED_TAG,U(n,this.clonePosition()))}return this.error(a.INVALID_TAG,U(n,this.clonePosition()))},e.prototype.parseTagName=function(){var e,t=this.offset()
for(this.bump();!this.isEOF()&&(45===(e=this.char())||46===e||e>=48&&e<=57||95===e||e>=97&&e<=122||e>=65&&e<=90||183==e||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039);)this.bump()
return this.message.slice(t,this.offset())},e.prototype.parseLiteral=function(e,t){for(var n=this.clonePosition(),r="";;){var i=this.tryParseQuote(t)
if(i)r+=i
else{var o=this.tryParseUnquoted(e,t)
if(o)r+=o
else{var a=this.tryParseLeftAngleBracket()
if(!a)break
r+=a}}}var c=U(n,this.clonePosition())
return{val:{type:s.literal,value:r,location:c},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return this.isEOF()||60!==this.char()||!this.ignoreTag&&(re(e=this.peek()||0)||47===e)?null:(this.bump(),"<")
var e},e.prototype.tryParseQuote=function(e){if(this.isEOF()||39!==this.char())return null
switch(this.peek()){case 39:return this.bump(),this.bump(),"'"
case 123:case 60:case 62:case 125:break
case 35:if("plural"===e||"selectordinal"===e)break
return null
default:return null}this.bump()
var t=[this.char()]
for(this.bump();!this.isEOF();){var n=this.char()
if(39===n){if(39!==this.peek()){this.bump()
break}t.push(39),this.bump()}else t.push(n)
this.bump()}return $.apply(void 0,t)},e.prototype.tryParseUnquoted=function(e,t){if(this.isEOF())return null
var n=this.char()
return 60===n||123===n||35===n&&("plural"===t||"selectordinal"===t)||125===n&&e>0?null:(this.bump(),$(n))},e.prototype.parseArgument=function(e,t){var n=this.clonePosition()
if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(a.EXPECT_ARGUMENT_CLOSING_BRACE,U(n,this.clonePosition()))
if(125===this.char())return this.bump(),this.error(a.EMPTY_ARGUMENT,U(n,this.clonePosition()))
var r=this.parseIdentifierIfPossible().value
if(!r)return this.error(a.MALFORMED_ARGUMENT,U(n,this.clonePosition()))
if(this.bumpSpace(),this.isEOF())return this.error(a.EXPECT_ARGUMENT_CLOSING_BRACE,U(n,this.clonePosition()))
switch(this.char()){case 125:return this.bump(),{val:{type:s.argument,value:r,location:U(n,this.clonePosition())},err:null}
case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(a.EXPECT_ARGUMENT_CLOSING_BRACE,U(n,this.clonePosition())):this.parseArgumentOptions(e,t,r,n)
default:return this.error(a.MALFORMED_ARGUMENT,U(n,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var e=this.clonePosition(),t=this.offset(),n=J(this.message,t),r=t+n.length
return this.bumpTo(r),{value:n,location:U(e,this.clonePosition())}},e.prototype.parseArgumentOptions=function(e,t,n,r){var i,o=this.clonePosition(),u=this.parseIdentifierIfPossible().value,d=this.clonePosition()
switch(u){case"":return this.error(a.EXPECT_ARGUMENT_TYPE,U(o,d))
case"number":case"date":case"time":this.bumpSpace()
var f=null
if(this.bumpIf(",")){this.bumpSpace()
var h=this.clonePosition()
if((v=this.parseSimpleArgStyleIfPossible()).err)return v
if(0===(g=Q(v.val)).length)return this.error(a.EXPECT_ARGUMENT_STYLE,U(this.clonePosition(),this.clonePosition()))
f={style:g,styleLocation:U(h,this.clonePosition())}}if((E=this.tryParseArgumentClose(r)).err)return E
var p=U(r,this.clonePosition())
if(f&&Z(null==f?void 0:f.style,"::",0)){var m=X(f.style.slice(2))
if("number"===u)return(v=this.parseNumberSkeletonFromString(m,f.styleLocation)).err?v:{val:{type:s.number,value:n,location:p,style:v.val},err:null}
if(0===m.length)return this.error(a.EXPECT_DATE_TIME_SKELETON,p)
var g={type:c.dateTime,pattern:m,location:f.styleLocation,parsedOptions:this.shouldParseSkeletons?S(m):{}}
return{val:{type:"date"===u?s.date:s.time,value:n,location:p,style:g},err:null}}return{val:{type:"number"===u?s.number:"date"===u?s.date:s.time,value:n,location:p,style:null!==(i=null==f?void 0:f.style)&&void 0!==i?i:null},err:null}
case"plural":case"selectordinal":case"select":var b=this.clonePosition()
if(this.bumpSpace(),!this.bumpIf(","))return this.error(a.EXPECT_SELECT_ARGUMENT_OPTIONS,U(b,l({},b)))
this.bumpSpace()
var y=this.parseIdentifierIfPossible(),O=0
if("select"!==u&&"offset"===y.value){if(!this.bumpIf(":"))return this.error(a.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,U(this.clonePosition(),this.clonePosition()))
var v
if(this.bumpSpace(),(v=this.tryParseDecimalInteger(a.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,a.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err)return v
this.bumpSpace(),y=this.parseIdentifierIfPossible(),O=v.val}var E,j=this.tryParsePluralOrSelectOptions(e,u,t,y)
if(j.err)return j
if((E=this.tryParseArgumentClose(r)).err)return E
var _=U(r,this.clonePosition())
return"select"===u?{val:{type:s.select,value:n,options:Y(j.val),location:_},err:null}:{val:{type:s.plural,value:n,options:Y(j.val),offset:O,pluralType:"plural"===u?"cardinal":"ordinal",location:_},err:null}
default:return this.error(a.INVALID_ARGUMENT_TYPE,U(o,d))}},e.prototype.tryParseArgumentClose=function(e){return this.isEOF()||125!==this.char()?this.error(a.EXPECT_ARGUMENT_CLOSING_BRACE,U(e,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var e=0,t=this.clonePosition();!this.isEOF();)switch(this.char()){case 39:this.bump()
var n=this.clonePosition()
if(!this.bumpUntil("'"))return this.error(a.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,U(n,this.clonePosition()))
this.bump()
break
case 123:e+=1,this.bump()
break
case 125:if(!(e>0))return{val:this.message.slice(t.offset,this.offset()),err:null}
e-=1
break
default:this.bump()}return{val:this.message.slice(t.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(e,t){var n=[]
try{n=function(e){if(0===e.length)throw new Error("Number skeleton cannot be empty")
for(var t=[],n=0,r=e.split(T).filter((function(e){return e.length>0}));n<r.length;n++){var i=r[n].split("/")
if(0===i.length)throw new Error("Invalid number skeleton")
for(var o=i[0],a=i.slice(1),s=0,c=a;s<c.length;s++)if(0===c[s].length)throw new Error("Invalid number skeleton")
t.push({stem:o,options:a})}return t}(e)}catch(e){return this.error(a.INVALID_NUMBER_SKELETON,t)}return{val:{type:c.number,tokens:n,location:t,parsedOptions:this.shouldParseSkeletons?D(n):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(e,t,n,r){for(var i,o=!1,s=[],c=new Set,l=r.value,u=r.location;;){if(0===l.length){var d=this.clonePosition()
if("select"===t||!this.bumpIf("="))break
var f=this.tryParseDecimalInteger(a.EXPECT_PLURAL_ARGUMENT_SELECTOR,a.INVALID_PLURAL_ARGUMENT_SELECTOR)
if(f.err)return f
u=U(d,this.clonePosition()),l=this.message.slice(d.offset,this.offset())}if(c.has(l))return this.error("select"===t?a.DUPLICATE_SELECT_ARGUMENT_SELECTOR:a.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,u)
"other"===l&&(o=!0),this.bumpSpace()
var h=this.clonePosition()
if(!this.bumpIf("{"))return this.error("select"===t?a.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:a.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,U(this.clonePosition(),this.clonePosition()))
var p=this.parseMessage(e+1,t,n)
if(p.err)return p
var m=this.tryParseArgumentClose(h)
if(m.err)return m
s.push([l,{value:p.val,location:U(h,this.clonePosition())}]),c.add(l),this.bumpSpace(),l=(i=this.parseIdentifierIfPossible()).value,u=i.location}return 0===s.length?this.error("select"===t?a.EXPECT_SELECT_ARGUMENT_SELECTOR:a.EXPECT_PLURAL_ARGUMENT_SELECTOR,U(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!o?this.error(a.MISSING_OTHER_CLAUSE,U(this.clonePosition(),this.clonePosition())):{val:s,err:null}},e.prototype.tryParseDecimalInteger=function(e,t){var n=1,r=this.clonePosition()
this.bumpIf("+")||this.bumpIf("-")&&(n=-1)
for(var i=!1,o=0;!this.isEOF();){var a=this.char()
if(!(a>=48&&a<=57))break
i=!0,o=10*o+(a-48),this.bump()}var s=U(r,this.clonePosition())
return i?q(o*=n)?{val:o,err:null}:this.error(t,s):this.error(e,s)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var e=this.position.offset
if(e>=this.message.length)throw Error("out of bound")
var t=K(this.message,e)
if(void 0===t)throw Error("Offset "+e+" is at invalid UTF-16 code unit boundary")
return t},e.prototype.error=function(e,t){return{val:null,err:{kind:e,message:this.message,location:t}}},e.prototype.bump=function(){if(!this.isEOF()){var e=this.char()
10===e?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=e<65536?1:2)}},e.prototype.bumpIf=function(e){if(Z(this.message,e,this.offset())){for(var t=0;t<e.length;t++)this.bump()
return!0}return!1},e.prototype.bumpUntil=function(e){var t=this.offset(),n=this.message.indexOf(e,t)
return n>=0?(this.bumpTo(n),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(e){if(this.offset()>e)throw Error("targetOffset "+e+" must be greater than or equal to the current offset "+this.offset())
for(e=Math.min(e,this.message.length);;){var t=this.offset()
if(t===e)break
if(t>e)throw Error("targetOffset "+e+" is at invalid UTF-16 code unit boundary")
if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&ie(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null
var e=this.char(),t=this.offset(),n=this.message.charCodeAt(t+(e>=65536?2:1))
return null!=n?n:null},e}()
function re(e){return e>=97&&e<=122||e>=65&&e<=90}function ie(e){return e>=9&&e<=13||32===e||133===e||e>=8206&&e<=8207||8232===e||8233===e}function oe(e){return e>=33&&e<=35||36===e||e>=37&&e<=39||40===e||41===e||42===e||43===e||44===e||45===e||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||91===e||92===e||93===e||94===e||96===e||123===e||124===e||125===e||126===e||161===e||e>=162&&e<=165||166===e||167===e||169===e||171===e||172===e||174===e||176===e||177===e||182===e||187===e||191===e||215===e||247===e||e>=8208&&e<=8213||e>=8214&&e<=8215||8216===e||8217===e||8218===e||e>=8219&&e<=8220||8221===e||8222===e||8223===e||e>=8224&&e<=8231||e>=8240&&e<=8248||8249===e||8250===e||e>=8251&&e<=8254||e>=8257&&e<=8259||8260===e||8261===e||8262===e||e>=8263&&e<=8273||8274===e||8275===e||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||8608===e||e>=8609&&e<=8610||8611===e||e>=8612&&e<=8613||8614===e||e>=8615&&e<=8621||8622===e||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||8658===e||8659===e||8660===e||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||8968===e||8969===e||8970===e||8971===e||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||9001===e||9002===e||e>=9003&&e<=9083||9084===e||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||9655===e||e>=9656&&e<=9664||9665===e||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||9839===e||e>=9840&&e<=10087||10088===e||10089===e||10090===e||10091===e||10092===e||10093===e||10094===e||10095===e||10096===e||10097===e||10098===e||10099===e||10100===e||10101===e||e>=10132&&e<=10175||e>=10176&&e<=10180||10181===e||10182===e||e>=10183&&e<=10213||10214===e||10215===e||10216===e||10217===e||10218===e||10219===e||10220===e||10221===e||10222===e||10223===e||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||10627===e||10628===e||10629===e||10630===e||10631===e||10632===e||10633===e||10634===e||10635===e||10636===e||10637===e||10638===e||10639===e||10640===e||10641===e||10642===e||10643===e||10644===e||10645===e||10646===e||10647===e||10648===e||e>=10649&&e<=10711||10712===e||10713===e||10714===e||10715===e||e>=10716&&e<=10747||10748===e||10749===e||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||11158===e||e>=11159&&e<=11263||e>=11776&&e<=11777||11778===e||11779===e||11780===e||11781===e||e>=11782&&e<=11784||11785===e||11786===e||11787===e||11788===e||11789===e||e>=11790&&e<=11798||11799===e||e>=11800&&e<=11801||11802===e||11803===e||11804===e||11805===e||e>=11806&&e<=11807||11808===e||11809===e||11810===e||11811===e||11812===e||11813===e||11814===e||11815===e||11816===e||11817===e||e>=11818&&e<=11822||11823===e||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||11840===e||11841===e||11842===e||e>=11843&&e<=11855||e>=11856&&e<=11857||11858===e||e>=11859&&e<=11903||e>=12289&&e<=12291||12296===e||12297===e||12298===e||12299===e||12300===e||12301===e||12302===e||12303===e||12304===e||12305===e||e>=12306&&e<=12307||12308===e||12309===e||12310===e||12311===e||12312===e||12313===e||12314===e||12315===e||12316===e||12317===e||e>=12318&&e<=12319||12320===e||12336===e||64830===e||64831===e||e>=65093&&e<=65094}function ae(e,t){void 0===t&&(t={}),t=l({shouldParseSkeletons:!0,requiresOtherClause:!0},t)
var n=new ne(e,t).parse()
if(n.err){var r=SyntaxError(a[n.err.kind])
throw r.location=n.err.location,r.originalMessage=n.err.message,r}return(null==t?void 0:t.captureLocation)||function e(t){t.forEach((function(t){if(delete t.location,g(t)||b(t))for(var n in t.options)delete t.options[n].location,e(t.options[n].value)
else h(t)&&v(t.style)||(p(t)||m(t))&&E(t.style)?delete t.style.location:O(t)&&e(t.children)}))}(n.val),n.val}function se(e,t){var n=t&&t.cache?t.cache:me,r=t&&t.serializer?t.serializer:fe
return(t&&t.strategy?t.strategy:de)(e,{cache:n,serializer:r})}function ce(e,t,n,r){var i,o=null==(i=r)||"number"==typeof i||"boolean"==typeof i?r:n(r),a=t.get(o)
return void 0===a&&(a=e.call(this,r),t.set(o,a)),a}function le(e,t,n){var r=Array.prototype.slice.call(arguments,3),i=n(r),o=t.get(i)
return void 0===o&&(o=e.apply(this,r),t.set(i,o)),o}function ue(e,t,n,r,i){return n.bind(t,e,r,i)}function de(e,t){return ue(e,this,1===e.length?ce:le,t.cache.create(),t.serializer)}var fe=function(){return JSON.stringify(arguments)}
function he(){this.cache=Object.create(null)}he.prototype.get=function(e){return this.cache[e]},he.prototype.set=function(e,t){this.cache[e]=t}
var pe,me={create:function(){return new he}},ge={variadic:function(e,t){return ue(e,this,le,t.cache.create(),t.serializer)},monadic:function(e,t){return ue(e,this,ce,t.cache.create(),t.serializer)}}
!function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"}(pe||(pe={}))
var be,ye=function(e){function t(t,n,r){var i=e.call(this,t)||this
return i.code=n,i.originalMessage=r,i}return o(t,e),t.prototype.toString=function(){return"[formatjs Error: "+this.code+"] "+this.message},t}(Error),Oe=function(e){function t(t,n,r,i){return e.call(this,'Invalid values for "'+t+'": "'+n+'". Options are "'+Object.keys(r).join('", "')+'"',pe.INVALID_VALUE,i)||this}return o(t,e),t}(ye),ve=function(e){function t(t,n,r){return e.call(this,'Value for "'+t+'" must be of type '+n,pe.INVALID_VALUE,r)||this}return o(t,e),t}(ye),Ee=function(e){function t(t,n){return e.call(this,'The intl string context variable "'+t+'" was not provided to the string "'+n+'"',pe.MISSING_VALUE,n)||this}return o(t,e),t}(ye)
function je(e){return"function"==typeof e}function _e(e){return{create:function(){return{get:function(t){return e[t]},set:function(t,n){e[t]=n}}}}}!function(e){e[e.literal=0]="literal",e[e.object=1]="object"}(be||(be={}))
var Se,we=function(){function e(t,n,r,i){var o,a=this
if(void 0===n&&(n=e.defaultLocale),this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(e){var t=a.formatToParts(e)
if(1===t.length)return t[0].value
var n=t.reduce((function(e,t){return e.length&&t.type===be.literal&&"string"==typeof e[e.length-1]?e[e.length-1]+=t.value:e.push(t.value),e}),[])
return n.length<=1?n[0]||"":n},this.formatToParts=function(e){return function e(t,n,r,i,o,a,s){if(1===t.length&&d(t[0]))return[{type:be.literal,value:t[0].value}]
for(var c=[],l=0,u=t;l<u.length;l++){var j=u[l]
if(d(j))c.push({type:be.literal,value:j.value})
else if(y(j))"number"==typeof a&&c.push({type:be.literal,value:r.getNumberFormat(n).format(a)})
else{var _=j.value
if(!o||!(_ in o))throw new Ee(_,s)
var S=o[_]
if(f(j))S&&"string"!=typeof S&&"number"!=typeof S||(S="string"==typeof S||"number"==typeof S?String(S):""),c.push({type:"string"==typeof S?be.literal:be.object,value:S})
else if(p(j)){var w="string"==typeof j.style?i.date[j.style]:E(j.style)?j.style.parsedOptions:void 0
c.push({type:be.literal,value:r.getDateTimeFormat(n,w).format(S)})}else if(m(j))w="string"==typeof j.style?i.time[j.style]:E(j.style)?j.style.parsedOptions:void 0,c.push({type:be.literal,value:r.getDateTimeFormat(n,w).format(S)})
else if(h(j))(w="string"==typeof j.style?i.number[j.style]:v(j.style)?j.style.parsedOptions:void 0)&&w.scale&&(S*=w.scale||1),c.push({type:be.literal,value:r.getNumberFormat(n,w).format(S)})
else{if(O(j)){var T=j.children,x=j.value,C=o[x]
if(!je(C))throw new ve(x,"function",s)
var I=C(e(T,n,r,i,o,a).map((function(e){return e.value})))
Array.isArray(I)||(I=[I]),c.push.apply(c,I.map((function(e){return{type:"string"==typeof e?be.literal:be.object,value:e}})))}if(g(j)){if(!(R=j.options[S]||j.options.other))throw new Oe(j.value,S,Object.keys(j.options),s)
c.push.apply(c,e(R.value,n,r,i,o))}else if(b(j)){var R
if(!(R=j.options["="+S])){if(!Intl.PluralRules)throw new ye('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',pe.MISSING_INTL_API,s)
var A=r.getPluralRules(n,{type:j.pluralType}).select(S-(j.offset||0))
R=j.options[A]||j.options.other}if(!R)throw new Oe(j.value,S,Object.keys(j.options),s)
c.push.apply(c,e(R.value,n,r,i,o,S-(j.offset||0)))}}}}return function(e){return e.length<2?e:e.reduce((function(e,t){var n=e[e.length-1]
return n&&n.type===be.literal&&t.type===be.literal?n.value+=t.value:e.push(t),e}),[])}(c)}(a.ast,a.locales,a.formatters,a.formats,e,void 0,a.message)},this.resolvedOptions=function(){return{locale:Intl.NumberFormat.supportedLocalesOf(a.locales)[0]}},this.getAst=function(){return a.ast},"string"==typeof t){if(this.message=t,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`")
this.ast=e.__parse(t,{ignoreTag:null==i?void 0:i.ignoreTag})}else this.ast=t
if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.")
this.formats=function(e,t){return t?Object.keys(e).reduce((function(n,r){var i,o
return n[r]=(i=e[r],(o=t[r])?l(l(l({},i||{}),o||{}),Object.keys(i).reduce((function(e,t){return e[t]=l(l({},i[t]),o[t]||{}),e}),{})):i),n}),l({},e)):e}(e.formats,r),this.locales=n,this.formatters=i&&i.formatters||(void 0===(o=this.formatterCache)&&(o={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:se((function(){for(var e,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
return new((e=Intl.NumberFormat).bind.apply(e,u([void 0],t,!1)))}),{cache:_e(o.number),strategy:ge.variadic}),getDateTimeFormat:se((function(){for(var e,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
return new((e=Intl.DateTimeFormat).bind.apply(e,u([void 0],t,!1)))}),{cache:_e(o.dateTime),strategy:ge.variadic}),getPluralRules:se((function(){for(var e,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
return new((e=Intl.PluralRules).bind.apply(e,u([void 0],t,!1)))}),{cache:_e(o.pluralRules),strategy:ge.variadic})})}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=(new Intl.NumberFormat).resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.__parse=ae,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}()
!function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"}(Se||(Se={}))
var Te=function(e){function t(n,r,i){var o=this,a=i?i instanceof Error?i:new Error(String(i)):void 0
return(o=e.call(this,"[@formatjs/intl Error "+n+"] "+r+" \n"+(a?"\n"+a.message+"\n"+a.stack:""))||this).code=n,"function"==typeof Error.captureStackTrace&&Error.captureStackTrace(o,t),o}return o(t,e),t}(Error),xe=function(e){function t(t,n){return e.call(this,Se.UNSUPPORTED_FORMATTER,t,n)||this}return o(t,e),t}(Te),Ce=function(e){function t(t,n){return e.call(this,Se.INVALID_CONFIG,t,n)||this}return o(t,e),t}(Te),Ie=function(e){function t(t,n){return e.call(this,Se.MISSING_DATA,t,n)||this}return o(t,e),t}(Te),Re=function(e){function t(t,n,r){return e.call(this,Se.FORMAT_ERROR,t+" \nLocale: "+n+"\n",r)||this}return o(t,e),t}(Te),Ae=function(e){function t(t,n,r,i){var o=e.call(this,t+" \nMessageID: "+(null==r?void 0:r.id)+"\nDefault Message: "+(null==r?void 0:r.defaultMessage)+"\nDescription: "+(null==r?void 0:r.description)+" \n",n,i)||this
return o.descriptor=r,o}return o(t,e),t}(Re),Pe=function(e){function t(t,n){var r=e.call(this,Se.MISSING_TRANSLATION,'Missing message: "'+t.id+'" for locale "'+n+'", using '+(t.defaultMessage?"default message":"id")+" as fallback.")||this
return r.descriptor=t,r}return o(t,e),t}(Te)
function Me(e,t,n){return void 0===n&&(n={}),t.reduce((function(t,r){return r in e?t[r]=e[r]:r in n&&(t[r]=n[r]),t}),{})}var Ne={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:function(e){}}
function De(e){return{create:function(){return{get:function(t){return e[t]},set:function(t,n){e[t]=n}}}}}function Le(e,t,n,r){var i,o=e&&e[t]
if(o&&(i=o[n]),i)return i
r(new xe("No "+t+" format named: "+n))}function Fe(e,t){return Object.keys(e).reduce((function(n,r){return n[r]=l({timeZone:t},e[r]),n}),{})}function Ue(e,t){return Object.keys(l(l({},e),t)).reduce((function(n,r){return n[r]=l(l({},e[r]||{}),t[r]||{}),n}),{})}function Ge(e,t){if(!t)return e
var n=we.formats
return l(l(l({},n),e),{date:Ue(Fe(n.date,t),Fe(e.date||{},t)),time:Ue(Fe(n.time,t),Fe(e.time||{},t))})}function ke(e,t,n,r,i){var o=e.locale,a=e.formats,c=e.messages,u=e.defaultLocale,d=e.defaultFormats,f=e.fallbackOnEmptyString,h=e.onError,p=e.timeZone,m=e.defaultRichTextElements
void 0===n&&(n={id:""})
var g=n.id,b=n.defaultMessage
!function(e,t,n){if(void 0===n&&(n=Error),!e)throw new n("[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue")}(!!g)
var y=String(g),O=c&&Object.prototype.hasOwnProperty.call(c,y)&&c[y]
if(Array.isArray(O)&&1===O.length&&O[0].type===s.literal)return O[0].value
if(!r&&O&&"string"==typeof O&&!m)return O.replace(/'\{(.*?)\}'/gi,"{$1}")
if(r=l(l({},m),r||{}),a=Ge(a,p),d=Ge(d,p),!O){if(!1===f&&""===O)return O
if((!b||o&&o.toLowerCase()!==u.toLowerCase())&&h(new Pe(n,o)),b)try{return t.getMessageFormat(b,u,d,i).format(r)}catch(e){return h(new Ae('Error formatting default message for: "'+y+'", rendering default message verbatim',o,n,e)),"string"==typeof b?b:y}return y}try{return t.getMessageFormat(O,o,a,l({formatters:t},i||{})).format(r)}catch(e){h(new Ae('Error formatting message: "'+y+'", using '+(b?"default message":"id")+" as fallback.",o,n,e))}if(b)try{return t.getMessageFormat(b,u,d,i).format(r)}catch(e){h(new Ae('Error formatting the default message for: "'+y+'", rendering message verbatim',o,n,e))}return"string"==typeof O?O:"string"==typeof b?b:y}var We=["localeMatcher","formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem"]
function ze(e,t,n,r){var i=e.locale,o=e.formats,a=e.onError,s=e.timeZone
void 0===r&&(r={})
var c=r.format,u=l(l({},s&&{timeZone:s}),c&&Le(o,t,c,a)),d=Me(r,We,u)
return"time"!==t||d.hour||d.minute||d.second||d.timeStyle||d.dateStyle||(d=l(l({},d),{hour:"numeric",minute:"numeric"})),n(i,d)}function Ve(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r]
var i=n[0],o=n[1],a=void 0===o?{}:o,s="string"==typeof i?new Date(i||0):i
try{return ze(e,"date",t,a).format(s)}catch(t){e.onError(new Te(Se.FORMAT_ERROR,"Error formatting date.",t))}return String(s)}function Be(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r]
var i=n[0],o=n[1],a=void 0===o?{}:o,s="string"==typeof i?new Date(i||0):i
try{return ze(e,"time",t,a).format(s)}catch(t){e.onError(new Te(Se.FORMAT_ERROR,"Error formatting time.",t))}return String(s)}function qe(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r]
var i=n[0],o=n[1],a=n[2],s=void 0===a?{}:a,c=e.timeZone,l=e.locale,u=e.onError,d=Me(s,We,c?{timeZone:c}:{})
try{return t(l,d).formatRange(i,o)}catch(e){u(new Te(Se.FORMAT_ERROR,"Error formatting date time range.",e))}return String(i)}function He(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r]
var i=n[0],o=n[1],a=void 0===o?{}:o,s="string"==typeof i?new Date(i||0):i
try{return ze(e,"date",t,a).formatToParts(s)}catch(t){e.onError(new Te(Se.FORMAT_ERROR,"Error formatting date.",t))}return[]}function Je(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r]
var i=n[0],o=n[1],a=void 0===o?{}:o,s="string"==typeof i?new Date(i||0):i
try{return ze(e,"time",t,a).formatToParts(s)}catch(t){e.onError(new Te(Se.FORMAT_ERROR,"Error formatting time.",t))}return[]}var Ze=["localeMatcher","style","type","fallback"]
function $e(e,t,n,r){var i=e.locale,o=e.onError
Intl.DisplayNames||o(new ye('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n',pe.MISSING_INTL_API))
var a=Me(r,Ze)
try{return t(i,a).of(n)}catch(e){o(new Te(Se.FORMAT_ERROR,"Error formatting display name.",e))}}var Ye=["localeMatcher","type","style"],Ke=Date.now()
function Xe(e,t,n,r){void 0===r&&(r={})
var i=Qe(e,t,n,r).reduce((function(e,t){var n=t.value
return"string"!=typeof n?e.push(n):"string"==typeof e[e.length-1]?e[e.length-1]+=n:e.push(n),e}),[])
return 1===i.length?i[0]:i}function Qe(e,t,n,r){var i=e.locale,o=e.onError
void 0===r&&(r={}),Intl.ListFormat||o(new ye('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n',pe.MISSING_INTL_API))
var a=Me(r,Ye)
try{var s={},c=n.map((function(e,t){if("object"==typeof e){var n=function(e){return Ke+"_"+e+"_"+Ke}(t)
return s[n]=e,n}return String(e)}))
return t(i,a).formatToParts(c).map((function(e){return"literal"===e.type?e:l(l({},e),{value:s[e.value]||e.value})}))}catch(e){o(new Te(Se.FORMAT_ERROR,"Error formatting list.",e))}return n}var et=["localeMatcher","type"]
function tt(e,t,n,r){var i=e.locale,o=e.onError
void 0===r&&(r={}),Intl.PluralRules||o(new ye('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',pe.MISSING_INTL_API))
var a=Me(r,et)
try{return t(i,a).select(n)}catch(e){o(new Re("Error formatting plural.",i,e))}return"other"}var nt=["numeric","style"]
function rt(e,t,n,r,i){void 0===i&&(i={}),r||(r="second"),Intl.RelativeTimeFormat||e.onError(new ye('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n',pe.MISSING_INTL_API))
try{return function(e,t,n){var r=e.locale,i=e.formats,o=e.onError
void 0===n&&(n={})
var a=n.format,s=!!a&&Le(i,"relative",a,o)||{}
return t(r,Me(n,nt,s))}(e,t,i).format(n,r)}catch(t){e.onError(new Re("Error formatting relative time.",e.locale,t))}return String(n)}var it=["localeMatcher","style","currency","currencyDisplay","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem"]
function ot(e,t,n){var r=e.locale,i=e.formats,o=e.onError
void 0===n&&(n={})
var a=n.format,s=a&&Le(i,"number",a,o)||{}
return t(r,Me(n,it,s))}function at(e,t,n,r){void 0===r&&(r={})
try{return ot(e,t,r).format(n)}catch(t){e.onError(new Te(Se.FORMAT_ERROR,"Error formatting number.",t))}return String(n)}function st(e,t,n,r){void 0===r&&(r={})
try{return ot(e,t,r).formatToParts(n)}catch(t){e.onError(new Te(Se.FORMAT_ERROR,"Error formatting number.",t))}return[]}function ct(e,t){var n=function(e){void 0===e&&(e={dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}})
var t=Intl.RelativeTimeFormat,n=Intl.ListFormat,r=Intl.DisplayNames,i=se((function(){for(var e,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
return new((e=Intl.DateTimeFormat).bind.apply(e,u([void 0],t,!1)))}),{cache:De(e.dateTime),strategy:ge.variadic}),o=se((function(){for(var e,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
return new((e=Intl.NumberFormat).bind.apply(e,u([void 0],t,!1)))}),{cache:De(e.number),strategy:ge.variadic}),a=se((function(){for(var e,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
return new((e=Intl.PluralRules).bind.apply(e,u([void 0],t,!1)))}),{cache:De(e.pluralRules),strategy:ge.variadic})
return{getDateTimeFormat:i,getNumberFormat:o,getMessageFormat:se((function(e,t,n,r){return new we(e,t,n,l({formatters:{getNumberFormat:o,getDateTimeFormat:i,getPluralRules:a}},r||{}))}),{cache:De(e.message),strategy:ge.variadic}),getRelativeTimeFormat:se((function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]
return new(t.bind.apply(t,u([void 0],e,!1)))}),{cache:De(e.relativeTime),strategy:ge.variadic}),getPluralRules:a,getListFormat:se((function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
return new(n.bind.apply(n,u([void 0],e,!1)))}),{cache:De(e.list),strategy:ge.variadic}),getDisplayNames:se((function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
return new(r.bind.apply(r,u([void 0],e,!1)))}),{cache:De(e.displayNames),strategy:ge.variadic})}}(t),r=l(l({},Ne),e),i=r.locale,o=r.defaultLocale,a=r.onError
return i?!Intl.NumberFormat.supportedLocalesOf(i).length&&a?a(new Ie('Missing locale data for locale: "'+i+'" in Intl.NumberFormat. Using default locale: "'+o+'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details')):!Intl.DateTimeFormat.supportedLocalesOf(i).length&&a&&a(new Ie('Missing locale data for locale: "'+i+'" in Intl.DateTimeFormat. Using default locale: "'+o+'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details')):(a&&a(new Ce('"locale" was not configured, using "'+o+'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details')),r.locale=r.defaultLocale||"en"),function(e){var t
e.defaultRichTextElements&&"string"==typeof((t=e.messages||{})?t[Object.keys(t)[0]]:void 0)&&console.warn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution')}(r),l(l({},r),{formatters:n,formatNumber:at.bind(null,r,n.getNumberFormat),formatNumberToParts:st.bind(null,r,n.getNumberFormat),formatRelativeTime:rt.bind(null,r,n.getRelativeTimeFormat),formatDate:Ve.bind(null,r,n.getDateTimeFormat),formatDateToParts:He.bind(null,r,n.getDateTimeFormat),formatTime:Be.bind(null,r,n.getDateTimeFormat),formatDateTimeRange:qe.bind(null,r,n.getDateTimeFormat),formatTimeToParts:Je.bind(null,r,n.getDateTimeFormat),formatPlural:tt.bind(null,r,n.getPluralRules),formatMessage:ke.bind(null,r,n),formatList:Xe.bind(null,r,n.getListFormat),formatListToParts:Qe.bind(null,r,n.getListFormat),formatDisplayName:$e.bind(null,r,n.getDisplayNames)})}const lt={Arabic:"ar",Bulgarian:"bg",Bosnian:"bs",Catalan:"ca",Czech:"cs",Danish:"da",German:"de",Greek:"el",English:"en",Spanish:"es",Estonian:"et",Finnish:"fi",French:"fr",Hebrew:"he",Croatian:"hr",Hungarian:"hu",Indonesian:"id",Italian:"it",Japanese:"ja",Korean:"ko",Lithuanian:"lt",Latvian:"lv",NorwegianBokml:"nb",Dutch:"nl",Polish:"pl",PortugueseBrazil:"pt-BR",PortuguesePortugal:"pt-PT",Romanian:"ro",Russian:"ru",Serbian:"sr",Slovenian:"sl",Slovak:"sk",Swedish:"sv",Thai:"th",Turkish:"tr",Ukrainian:"uk",Vietnamese:"vi",ChineseChina:"zh-CN",ChineseHongKong:"zh-HK",ChineseTaiwan:"zh-TW"},ut=[...Object.values(lt),"en-AU","en-GB","es-ES","es-MX","de-CH","de-DE","it-CH","it-IT"],dt=[lt.Arabic,lt.Hebrew],ft=(e,t)=>{const n=e=>e&&"object"==typeof e
return n(e)&&n(t)?(Object.keys(t).forEach(r=>{const i=e[r],o=t[r]
Array.isArray(i)&&Array.isArray(o)?e[r]=i.concat(o):n(i)&&n(o)?e[r]=ft(Object.assign({},i),o):e[r]=o}),e):t},ht=lt.English
function pt(e=document.documentElement){var t
const n=("[lang]",function e(t){let n
return n=void 0===t||t===document||t===window?null:t.closest("[lang]")||e(t.getRootNode().host),n}(e))
const r=null!==(t=null==n?void 0:n.lang)&&void 0!==t?t:window.navigator.language,i=function(e){let t=ht
if(void 0!==e){const n=Object.values(lt),r=n.filter(e=>-1!==e.indexOf("-"))
if(-1!==e.indexOf("-")){const[t,n]=e.split("-")
e=`${t}-${n.toUpperCase()}`}if(!0===r.includes(e))t=e
else{const r=function(e){const t=null==e?void 0:e.match(/^([a-z]{2})-([A-Z]{2})$/)
let n=ht
return null!=t&&(null==t?void 0:t.length)>1?n=t[1]:2===(null==e?void 0:e.length)&&e.toLowerCase()===e&&(n=e),n}(e)
!0===n.includes(r)&&(t=r)}}return t}(r),o=function(e){let t=ut.find(t=>t===e)
if(void 0===t&&(t=e),void 0!==t&&-1!==t.indexOf("-")){const[e,n]=t.split("-")
t=`${e}-${n.toUpperCase()}`}return t}(r),a=dt.includes(i)
let s=e.getAttribute("dir")
return"ltr"!==s&&"rtl"!==s&&(s=!0===a?"rtl":"ltr"),{locale:i,rtl:a,formatLocale:o,direction:s}}class mt{constructor(e,t,n){this._componentName=e,this._intl=t,this.direction=n}get locale(){return this._intl.locale}t(e,t,n){const r=`${this._componentName}.${e}`
let i=this._intl.formatMessage({id:r},t,n)
return void 0!==(null==n?void 0:n.fallback)&&i===r&&(i=n.fallback),i}formatRelativeTime(e,t,n){return this._intl.formatRelativeTime(e,t,n)}formatDisplayName(e,t){return this._intl.formatDisplayName(e,t)}formatDate(e,t){return this._intl.formatDate(e,t)}formatNumber(e,t){return this._intl.formatNumber(e,t)}}const gt=new class{constructor(e={}){this._intls={}
const{assetPath:t="t9n",fileNamePattern:n="{tagName}.t9n.{locale}.json"}=e
this.assetPath=t,this.fileNamePattern=n}getIntlForComponent(e){const{locale:t,direction:n}=pt(e),r=e.tagName.toLowerCase(),i=ct({locale:t,messages:{}})
return this._intls[t]=i,new mt(r,i,n)}async loadIntlForComponent(e,t){const{locale:n,direction:i}=pt(e),{fileNamePattern:o,assetPath:a}=this,{strings:s}=await async function(e,t,n){const r=e.tagName.toLowerCase(),{locale:i}=pt(e)
return{strings:await async function(e){const{path:t,locale:n,baseURL:r,fileNamePattern:i="{tagName}.t9n.{locale}.json"}=e,o=e=>i.replace("{tagName}",t).replace("{locale}",e),a=await fetch(`${r}/${o(ht)}`),s=await a.json()
let c={}
if(n!==ht)try{const e=await fetch(`${r}/${o(n)}`)
c=await e.json()}catch(e){console.warn(`Unable to fetch locale file for ${t} component for locale ${n}`)}return ft(s,c)}({path:r,locale:i,baseURL:t,fileNamePattern:n})}}(e,t||Object(r.f)(a),o),c=e.tagName.toLowerCase()
let l=this._intls[n]
return l=ct({locale:n,messages:this.parseStrings(s,c,l?l.messages:{})},{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}),this._intls[n]=l,new mt(c,l,i)}parseStrings(e,t,n){return Object.entries(e).reduce((e,[n,r])=>("string"==typeof r?e[`${t}.${n}`]=r:this.parseStrings(r,`${t}.${n}`,e),e),n)}}({assetPath:"locales",fileNamePattern:"{tagName}.i18n.{locale}.json"})},1229:function(e,t,n){"use strict"
n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return f}))
var r=n(110),i=n(235),o=n(23),a=n(973),s=n(374)
function c(e,t,n=!1,r){return new Promise((s,c)=>{if(Object(a.k)(r))return void c(l())
let u=()=>{h(),c(new Error("Unable to load "+t))},d=()=>{const t=e
h(),s(t)},f=()=>{if(!e)return
const t=e
h(),t.src="",c(l())}
const h=()=>{Object(i.a)("esri-image-decode")||(e.removeEventListener("error",u),e.removeEventListener("load",d)),u=null,d=null,e=null,Object(o.l)(r)&&r.removeEventListener("abort",f),f=null,n&&URL.revokeObjectURL(t)}
Object(o.l)(r)&&r.addEventListener("abort",f),Object(i.a)("esri-image-decode")?e.decode().then(d,u):(e.addEventListener("error",u),e.addEventListener("load",d))})}function l(){try{return new DOMException("Aborted","AbortError")}catch{const e=new Error
return e.name="AbortError",e}}function u(e){r.default.request.crossOriginNoCorsDomains||(r.default.request.crossOriginNoCorsDomains={})
const t=r.default.request.crossOriginNoCorsDomains
for(let r of e){var n,i,o
r=r.toLowerCase(),/^https?:\/\//.test(r)?t[null!=(n=Object(s.p)(r))?n:""]=0:(t[null!=(i=Object(s.p)("http://"+r))?i:""]=0,t[null!=(o=Object(s.p)("https://"+r))?o:""]=0)}}function d(e){const t=r.default.request.crossOriginNoCorsDomains
if(t){let n=Object(s.p)(e)
if(n)return n=n.toLowerCase(),!Object(s.v)(n,Object(s.m)())&&t[n]<Date.now()-36e5}return!1}async function f(e){var t
const n=r.default.request.crossOriginNoCorsDomains,i=Object(s.p)(e)
n&&i&&(n[i.toLowerCase()]=Date.now())
const o=Object(s.Q)(e)
e=o.path,"json"===(null==(t=o.query)?void 0:t.f)&&(e+="?f=json")
try{await fetch(e,{mode:"no-cors",credentials:"include"})}catch{}}},1259:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}))
var r=n(983)
function i(e){return{geometryType:Object(r.c)(e[0]),geometries:e.map(e=>e.toJSON())}}function o(e,t,n){const i=Object(r.b)(t)
return e.map(e=>{const t=i.fromJSON(e)
return t.spatialReference=n,t})}},1273:function(e,t,n){"use strict"
n.d(t,"a",(function(){return u}))
var r=n(968),i=n(986),o=n(972),a=n(23),s=n(970),c=(n(971),n(445),n(969))
let l=class extends(Object(i.b)(o.a)){constructor(e){super(e),this.onFields=null,this.operator=null,this.searchTerm=null,this.searchType=null}}
Object(r.a)([Object(s.b)({type:[String],json:{write:{enabled:!0,overridePolicy(){return{enabled:Object(a.l)(this.onFields)&&this.onFields.length>0}}}}})],l.prototype,"onFields",void 0),Object(r.a)([Object(s.b)({type:String,json:{write:!0}})],l.prototype,"operator",void 0),Object(r.a)([Object(s.b)({type:String,json:{write:!0}})],l.prototype,"searchTerm",void 0),Object(r.a)([Object(s.b)({type:String,json:{write:!0}})],l.prototype,"searchType",void 0),l=Object(r.a)([Object(c.a)("esri.rest.support.FullTextSearch")],l)
const u=l},1289:function(e,t,n){"use strict"
var r
n.d(t,"a",(function(){return r})),function(e){e[e.CGCS2000=4490]="CGCS2000",e[e.GCSMARS2000=104971]="GCSMARS2000",e[e.GCSMARS2000_SPHERE=104905]="GCSMARS2000_SPHERE",e[e.GCSMOON2000=104903]="GCSMOON2000"}(r||(r={}))},1417:function(e,t,n){"use strict"
n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return a}))
var r=n(23)
function i(e){return e&&"function"==typeof e.highlight}function o(e){return e&&"function"==typeof e.maskOccludee}function a(e,t,n){return Object(r.k)(e)||e>n&&(0===t||e<t)}function s(e,t){return Object(r.l)(e)&&e>0||Object(r.l)(t)&&t>0}function c(e){var t,n
const r=e.effectiveScaleRange
return{minScale:null!=(t=null==r?void 0:r.minScale)?t:0,maxScale:null!=(n=null==r?void 0:r.maxScale)?n:0}}},1461:function(e,t,n){"use strict"
n.d(t,"a",(function(){return u}))
var r=n(131)
const i={category:{content:{action:{delete:{category:"Content",action:"Delete",label:{location:{details:{point:{category:"Content",action:"Delete",label:"Location",details:"Point"},line:{category:"Content",action:"Delete",label:"Location",details:"Line"},polygon:{category:"Content",action:"Delete",label:"Location",details:"Polygon"}}},reaction:{details:{smilingFace:{category:"Content",action:"Delete",label:"Reaction",details:"Smiling face"},confusedFace:{category:"Content",action:"Delete",label:"Reaction",details:"Confused face"},grinningFace:{category:"Content",action:"Delete",label:"Reaction",details:"Grinning face"},laughingFace:{category:"Content",action:"Delete",label:"Reaction",details:"Laughing face"},faceWithTearsOfJoy:{category:"Content",action:"Delete",label:"Reaction",details:"Face with tears of joy"},thinkingFace:{category:"Content",action:"Delete",label:"Reaction",details:"Thinking face"},winkingFace:{category:"Content",action:"Delete",label:"Reaction",details:"Winking face"},partyingFace:{category:"Content",action:"Delete",label:"Reaction",details:"Partying face"},sadFace:{category:"Content",action:"Delete",label:"Reaction",details:"Sad face"},shockedFace:{category:"Content",action:"Delete",label:"Reaction",details:"Shocked face"},thumbsUp:{category:"Content",action:"Delete",label:"Reaction",details:"Thumbs up"},thumbsDown:{category:"Content",action:"Delete",label:"Reaction",details:"Thumbs down"},clappingHands:{category:"Content",action:"Delete",label:"Reaction",details:"Clapping hands"},raisingHands:{category:"Content",action:"Delete",label:"Reaction",details:"Raising hands"},wavingHand:{category:"Content",action:"Delete",label:"Reaction",details:"Waving hand"},redHeart:{category:"Content",action:"Delete",label:"Reaction",details:"Red heart"},hundredPoints:{category:"Content",action:"Delete",label:"Reaction",details:"Hundred points"},fire:{category:"Content",action:"Delete",label:"Reaction",details:"Fire"},partyPopper:{category:"Content",action:"Delete",label:"Reaction",details:"Party popper"},rocket:{category:"Content",action:"Delete",label:"Reaction",details:"Rocket"},upArrow:{category:"Content",action:"Delete",label:"Reaction",details:"Up arrow"},downArrow:{category:"Content",action:"Delete",label:"Reaction",details:"Down arrow"},eyes:{category:"Content",action:"Delete",label:"Reaction",details:"Eyes"},trophy:{category:"Content",action:"Delete",label:"Reaction",details:"Trophy"},worldMap:{category:"Content",action:"Delete",label:"Reaction",details:"World map"}}},modal:{category:"Content",action:"Delete",label:"Modal"},site:{category:"Content",action:"Delete",label:"Site"},page:{category:"Content",action:"Delete",label:"Page"}},details:{allPosts:{category:"Content",action:"Delete",details:"All Posts"}}},create:{category:"Content",action:"Create",label:{upload:{category:"Content",action:"Create",label:"Upload"},url:{category:"Content",action:"Create",label:"URL"},location:{details:{point:{category:"Content",action:"Create",label:"Location",details:"Point"},line:{category:"Content",action:"Create",label:"Location",details:"Line"},polygon:{category:"Content",action:"Create",label:"Location",details:"Polygon"}}},reaction:{details:{smilingFace:{category:"Content",action:"Create",label:"Reaction",details:"Smiling face"},confusedFace:{category:"Content",action:"Create",label:"Reaction",details:"Confused face"},grinningFace:{category:"Content",action:"Create",label:"Reaction",details:"Grinning face"},laughingFace:{category:"Content",action:"Create",label:"Reaction",details:"Laughing face"},faceWithTearsOfJoy:{category:"Content",action:"Create",label:"Reaction",details:"Face with tears of joy"},thinkingFace:{category:"Content",action:"Create",label:"Reaction",details:"Thinking face"},winkingFace:{category:"Content",action:"Create",label:"Reaction",details:"Winking face"},partyingFace:{category:"Content",action:"Create",label:"Reaction",details:"Partying face"},sadFace:{category:"Content",action:"Create",label:"Reaction",details:"Sad face"},shockedFace:{category:"Content",action:"Create",label:"Reaction",details:"Shocked face"},thumbsUp:{category:"Content",action:"Create",label:"Reaction",details:"Thumbs up"},thumbsDown:{category:"Content",action:"Create",label:"Reaction",details:"Thumbs down"},clappingHands:{category:"Content",action:"Create",label:"Reaction",details:"Clapping hands"},raisingHands:{category:"Content",action:"Create",label:"Reaction",details:"Raising hands"},wavingHand:{category:"Content",action:"Create",label:"Reaction",details:"Waving hand"},redHeart:{category:"Content",action:"Create",label:"Reaction",details:"Red heart"},hundredPoints:{category:"Content",action:"Create",label:"Reaction",details:"Hundred points"},fire:{category:"Content",action:"Create",label:"Reaction",details:"Fire"},partyPopper:{category:"Content",action:"Create",label:"Reaction",details:"Party popper"},rocket:{category:"Content",action:"Create",label:"Reaction",details:"Rocket"},upArrow:{category:"Content",action:"Create",label:"Reaction",details:"Up arrow"},downArrow:{category:"Content",action:"Create",label:"Reaction",details:"Down arrow"},eyes:{category:"Content",action:"Create",label:"Reaction",details:"Eyes"},trophy:{category:"Content",action:"Create",label:"Reaction",details:"Trophy"},worldMap:{category:"Content",action:"Create",label:"Reaction",details:"World map"}}},post:{category:"Content",action:"Create",label:"Post"},reply:{category:"Content",action:"Create",label:"Reply"},site:{details:{clone:{category:"Content",action:"Create",label:"Site",details:"Clone"}}},template:{details:{site:{category:"Content",action:"Create",label:"Template",details:"Site"}}}}},update:{category:"Content",action:"Update",label:{groups:{category:"Content",action:"Update",label:"Groups",details:{removeEditGroups:{category:"Content",action:"Update",label:"Groups",details:"Remove Edit Groups"},removeViewGroups:{category:"Content",action:"Update",label:"Groups",details:"Remove View Groups"},addViewGroups:{category:"Content",action:"Update",label:"Groups",details:"Add View Groups"},addEditGroups:{category:"Content",action:"Update",label:"Groups",details:"Add Edit Groups"},addCatalogGroups:{category:"Content",action:"Update",label:"Groups",details:"Add Catalog Groups"},removeCatalogGroups:{category:"Content",action:"Update",label:"Groups",details:"Remove Catalog Groups"}}},location:{details:{point:{category:"Content",action:"Update",label:"Location",details:"Point"},line:{category:"Content",action:"Update",label:"Location",details:"Line"},polygon:{category:"Content",action:"Update",label:"Location",details:"Polygon"},featuresPoints:{category:"Content",action:"Update",label:"Location",details:"Features: points"},featuresLines:{category:"Content",action:"Update",label:"Location",details:"Features: lines"},featuresPolygons:{category:"Content",action:"Update",label:"Location",details:"Features: polygons"},pointsPoints:{category:"Content",action:"Update",label:"Location",details:"Points: points"},pointsLines:{category:"Content",action:"Update",label:"Location",details:"Points: lines"},pointsPolygons:{category:"Content",action:"Update",label:"Location",details:"Points: polygons"}}},settings:{details:{allowDiscussions:{category:"Content",action:"Update",label:"Settings",details:"Allow Discussions"},blockDiscussions:{category:"Content",action:"Update",label:"Settings",details:"Block Discussions"}}},status:{details:{hide:{category:"Content",action:"Update",label:"Status",details:"Hide "},show:{category:"Content",action:"Update",label:"Status",details:"Show"}},category:"Content",action:"Update",label:"Status"},post:{category:"Content",action:"Update",label:"Post"},reply:{category:"Content",action:"Update",label:"Reply"},description:{category:"Content",action:"Update",label:"Description"},summary:{category:"Content",action:"Update",label:"Summary"},image:{details:{complete:{category:"Content",action:"Update",label:"Image",details:"Complete"},empty:{category:"Content",action:"Update",label:"Image",details:"Empty"}}},timeline:{details:{steps:{category:"Content",action:"Update",label:"Timeline",details:"Steps"}}},featuredContent:{category:"Content",action:"Update",label:"Featured Content"},access:{details:{public:{category:"Content",action:"Update",label:"Access",details:"Public"},org:{category:"Content",action:"Update",label:"Access",details:"Org"},shared:{category:"Content",action:"Update",label:"Access",details:"Shared"},private:{category:"Content",action:"Update",label:"Access",details:"Private"}}},layout:{details:{draft:{category:"Content",action:"Update",label:"Layout",details:"Draft"},publish:{category:"Content",action:"Update",label:"Layout",details:"Publish"}}}}}}},interaction:{action:{open:{label:{popover:{details:{share:{category:"Interaction",action:"Open",label:"Popover",details:"Share"},details:{category:"Interaction",action:"Open",label:"Popover",details:"Details"},options:{category:"Interaction",action:"Open",label:"Popover",details:"Options"},help:{category:"Interaction",action:"Open",label:"Popover",details:"Help"},smilingFace:{category:"Interaction",action:"Open",label:"Popover",details:"Smiling face"},confusedFace:{category:"Interaction",action:"Open",label:"Popover",details:"Confused face"},grinningFace:{category:"Interaction",action:"Open",label:"Popover",details:"Grinning face"},laughingFace:{category:"Interaction",action:"Open",label:"Popover",details:"Laughing face"},faceWithTearsOfJoy:{category:"Interaction",action:"Open",label:"Popover",details:"Face with tears of joy"},thinkingFace:{category:"Interaction",action:"Open",label:"Popover",details:"Thinking face"},winkingFace:{category:"Interaction",action:"Open",label:"Popover",details:"Winking face"},partyingFace:{category:"Interaction",action:"Open",label:"Popover",details:"Partying face"},sadFace:{category:"Interaction",action:"Open",label:"Popover",details:"Sad face"},shockedFace:{category:"Interaction",action:"Open",label:"Popover",details:"Shocked face"},thumbsUp:{category:"Interaction",action:"Open",label:"Popover",details:"Thumbs up"},thumbsDown:{category:"Interaction",action:"Open",label:"Popover",details:"Thumbs down"},clappingHands:{category:"Interaction",action:"Open",label:"Popover",details:"Clapping hands"},raisingHands:{category:"Interaction",action:"Open",label:"Popover",details:"Raising hands"},wavingHand:{category:"Interaction",action:"Open",label:"Popover",details:"Waving hand"},redHeart:{category:"Interaction",action:"Open",label:"Popover",details:"Red heart"},hundredPoints:{category:"Interaction",action:"Open",label:"Popover",details:"Hundred points"},fire:{category:"Interaction",action:"Open",label:"Popover",details:"Fire"},partyPopper:{category:"Interaction",action:"Open",label:"Popover",details:"Party popper"},rocket:{category:"Interaction",action:"Open",label:"Popover",details:"Rocket"},upArrow:{category:"Interaction",action:"Open",label:"Popover",details:"Up arrow"},downArrow:{category:"Interaction",action:"Open",label:"Popover",details:"Down arrow"},eyes:{category:"Interaction",action:"Open",label:"Popover",details:"Eyes"},trophy:{category:"Interaction",action:"Open",label:"Popover",details:"Trophy"},worldMap:{category:"Interaction",action:"Open",label:"Popover",details:"World map"},reactionOverflow:{category:"Interaction",action:"Open",label:"Popover",details:"Reaction overflow"},addReaction:{category:"Interaction",action:"Open",label:"Popover",details:"Add reaction"},activityEnabled:{category:"Interaction",action:"Open",label:"Popover",details:"Activity Enabled"},activityDisabled:{category:"Interaction",action:"Open",label:"Popover",details:"Activity Disabled"},site:{category:"Interaction",action:"Open",label:"Popover",details:"Site"}}},postList:{category:"Interaction",action:"Open",label:"Post List"},panel:{details:{legend:{category:"Interaction",action:"Open",label:"Panel",details:"Legend"},discussionOptions:{category:"Interaction",action:"Open",label:"Panel",details:"Discussion Options"}}},search:{category:"Interaction",action:"Open",label:"Search"},thread:{category:"Interaction",action:"Open",label:"Thread",details:{bodyAction:{category:"Interaction",action:"Open",label:"Thread",details:"Body Action"},location:{category:"Interaction",action:"Open",label:"Thread",details:"Location"},post:{category:"Interaction",action:"Open",label:"Thread",details:"Post"}}},editor:{category:"Interaction",action:"Open",label:"Editor",details:{reply:{category:"Interaction",action:"Open",label:"Editor",details:"Reply"}}},table:{category:"Interaction",action:"Open",label:"Table"},modal:{details:{newContent:{category:"Interaction",action:"Open",label:"Modal",details:"New Content"},addExistingContent:{category:"Interaction",action:"Open",label:"Modal",details:"Add Existing Content"},addContent:{category:"Interaction",action:"Open",label:"Modal",details:"Add Content"},createProject:{category:"Interaction",action:"Open",label:"Modal",details:"Create Project"},feeds:{category:"Interaction",action:"Open",label:"Modal",details:"Feeds"},addGroups:{category:"Interaction",action:"Open",label:"Modal",details:"Add Groups"},addUsers:{category:"Interaction",action:"Open",label:"Modal",details:"Add Users"},share:{category:"Interaction",action:"Open",label:"Modal",details:"Share"},deleteContent:{category:"Interaction",action:"Open",label:"Modal",details:"Delete Content"}}},locations:{category:"Interaction",action:"Open",label:"Locations"},stepper:{category:"Interaction",action:"Open",label:"Stepper",details:{emailNotifications:{category:"Interaction",action:"Open",label:"Stepper",details:"Email Notifications"},postActivity:{category:"Interaction",action:"Open",label:"Stepper",details:"Post Activity"}}},popUp:{details:{post:{category:"Interaction",action:"Open",label:"Pop-Up",details:"Post"}}},accordion:{details:{attribute:{category:"Interaction",action:"Open",label:"Accordion",details:"Attribute"}}},tooltip:{details:{chipComponentWithStringHidden:{category:"Interaction",action:"Open",label:"Tooltip",details:"Chip Component with string Hidden"}}},timeline:{category:"Interaction",action:"Open",label:"Timeline"},dropdown:{category:"Interaction",action:"Open",label:"Dropdown"},menu:{details:{view:{category:"Interaction",action:"Open",label:"Menu",details:"View"},options:{category:"Interaction",action:"Open",label:"Menu",details:"Options"},user:{category:"Interaction",action:"Open",label:"Menu",details:"User"}}},sidePanel:{details:{sharing:{category:"Interaction",action:"Open",label:"Side Panel",details:"Sharing"}}}}},download:{category:"Interaction",action:"Download",details:{cache:{category:"Interaction",action:"Download",details:"Cache"},export:{category:"Interaction",action:"Download",details:"Export"}}},share:{label:{link:{category:"Interaction",action:"Share",label:"Link"}}},zoom:{label:{in:{category:"Interaction",action:"Zoom",label:"In"},out:{category:"Interaction",action:"Zoom",label:"Out"},to:{category:"Interaction",action:"Zoom",label:"To"}}},close:{label:{postList:{category:"Interaction",action:"Close",label:"Post List"},thread:{category:"Interaction",action:"Close",label:"Thread"},panel:{details:{legend:{category:"Interaction",action:"Close",label:"Panel",details:"Legend"}}},search:{category:"Interaction",action:"Close",label:"Search"},editor:{category:"Interaction",action:"Close",label:"Editor",details:{addPost:{category:"Interaction",action:"Close",label:"Editor",details:"Add Post"}}},table:{category:"Interaction",action:"Close",label:"Table"},modal:{details:{addContent:{category:"Interaction",action:"Close",label:"Modal",details:"Add Content"},newContent:{category:"Interaction",action:"Close",label:"Modal",details:"New Content"},addExistingContent:{category:"Interaction",action:"Close",label:"Modal",details:"Add Existing Content"},createProject:{category:"Interaction",action:"Close",label:"Modal",details:"Create Project"},managePreferences:{category:"Interaction",action:"Close",label:"Modal",details:"Manage Preferences"},discussionOptions:{category:"Interaction",action:"Close",label:"Modal",details:"Discussion Options"},addGroups:{category:"Interaction",action:"Close",label:"Modal",details:"Add Groups"},addUsers:{category:"Interaction",action:"Close",label:"Modal",details:"Add Users"},deleteContent:{category:"Interaction",action:"Close",label:"Modal",details:"Delete Content"},share:{category:"Interaction",action:"Close",label:"Modal",details:"Share"}}},locations:{category:"Interaction",action:"Close",label:"Locations"},popover:{details:{options:{category:"Interaction",action:"Close",label:"Popover",details:"Options"},help:{category:"Interaction",action:"Close",label:"Popover",details:"Help"}}},popUp:{details:{post:{category:"Interaction",action:"Close",label:"Pop Up",details:"Post"}}},accordion:{details:{attribute:{category:"Interaction",action:"Close",label:"Accordion",details:"Attribute"}}},alert:{details:{projectWorkspaceIntroNotice:{category:"Interaction",action:"Close",label:"Alert",details:"Project Workspace Intro Notice"}},category:"Interaction",action:"Close",label:"Alert"},timeline:{category:"Interaction",action:"Close",label:"Timeline"}},details:{deleteContent:{category:"Interaction",action:"Close",details:"Delete Content"}}},search:{label:{query:{category:"Interaction",action:"Search",label:"Query",details:{focus:{category:"Interaction",action:"Search",label:"Query",details:"Focus"},loseFocus:{category:"Interaction",action:"Search",label:"Query",details:"Lose Focus"}}},filter:{category:"Interaction",action:"Search",label:"Filter",details:{clear:{category:"Interaction",action:"Search",label:"Filter",details:"Clear"}}},click:{category:"Interaction",action:"Search",label:"Click"},loadMore:{category:"Interaction",action:"Search",label:"Load More",details:{attributes:{category:"Interaction",action:"Search",label:"Load More",details:"Attributes"}}},backToTop:{category:"Interaction",action:"Search",label:"Back to Top"},view:{category:"Interaction",action:"Search",label:"View"},whatsNew:{category:"Interaction",action:"Search",label:"Whats New",details:{switchToClassicView:{category:"Interaction",action:"Search",label:"Whats New",details:"Switch to classic view"},bannerDismiss:{category:"Interaction",action:"Search",label:"Whats New",details:"Banner dismiss"},enableForAllUsers:{category:"Interaction",action:"Search",label:"Whats New",details:"Enable for all users"}}},action:{details:{overflow:{category:"Interaction",action:"Search",label:"Action",details:"Overflow"},exportCatalog:{category:"Interaction",action:"Search",label:"Action",details:"Export catalog"},exportSearchResults:{category:"Interaction",action:"Search",label:"Action",details:"Export search results"}}}}},update:{label:{categoryCard:{category:"Interaction",action:"Update",label:"Category Card"}}},viewed:{label:{recents:{category:"Interaction",action:"Viewed",label:"Recents"},empty:{category:"Interaction",action:"Viewed",label:"Empty"},post:{details:{thread:{category:"Interaction",action:"Viewed",label:"Post",details:"Thread"},postList:{category:"Interaction",action:"Viewed",label:"Post",details:"Post List"}}},filters:{details:{hostedDownloadsDisabled:{category:"Interaction",action:"Viewed",label:"Filters",details:"Hosted Downloads Disabled"},hostedDownloadsEnabled:{category:"Interaction",action:"Viewed",label:"Filters",details:"Hosted Downloads Enabled"}}},alert:{category:"Interaction",action:"Viewed",label:"Alert"}}},enable:{label:{draw:{category:"Interaction",action:"Enable",label:"Draw",details:{update:{category:"Interaction",action:"Enable",label:"Draw",details:"Update"}}},select:{category:"Interaction",action:"Enable",label:"Select"},addLocation:{category:"Interaction",action:"Enable",label:"Add Location"},collapse:{details:{timeline:{category:"Interaction",action:"Enable",label:"Collapse",details:"Timeline"}}},notifications:{details:{weekly:{category:"Interaction",action:"Enable",label:"Notifications",details:"Weekly"}}},content:{details:{hubFeeds:{category:"Interaction",action:"Enable",label:"Content",details:"Hub feeds"}}}}},disable:{label:{draw:{category:"Interaction",action:"Disable",label:"Draw",details:{update:{category:"Interaction",action:"Disable",label:"Draw",details:"Update"}}},select:{category:"Interaction",action:"Disable",label:"Select"},addLocation:{category:"Interaction",action:"Disable",label:"Add Location"},collapse:{details:{timeline:{category:"Interaction",action:"Disable",label:"Collapse",details:"Timeline"}}},notifications:{details:{weekly:{category:"Interaction",action:"Disable",label:"Notifications",details:"Weekly"}}},content:{details:{hubFeeds:{category:"Interaction",action:"Disable",label:"Content",details:"Hub feeds"}}}}},select:{label:{content:{category:"Interaction",action:"Select",label:"Content",details:{selectTool:{category:"Interaction",action:"Select",label:"Content",details:"Select Tool"}}},groups:{category:"Interaction",action:"Select",label:"Groups",details:{recents:{category:"Interaction",action:"Select",label:"Groups",details:"Recents"}}},collapse:{details:{timeline:{category:"Interaction",action:"Select",label:"Collapse",details:"Timeline"}}}},category:"Interaction",action:"Select"},draw:{label:{start:{details:{polygon:{category:"Interaction",action:"Draw",label:"Start",details:"Polygon"},polyline:{category:"Interaction",action:"Draw",label:"Start",details:"Polyline"},point:{category:"Interaction",action:"Draw",label:"Start",details:"Point"}}},complete:{details:{polygon:{category:"Interaction",action:"Draw",label:"Complete",details:"Polygon"},polyline:{category:"Interaction",action:"Draw",label:"Complete",details:"Polyline"},point:{category:"Interaction",action:"Draw",label:"Complete",details:"Point"}}},delete:{details:{polygon:{category:"Interaction",action:"Draw",label:"Delete",details:"Polygon"},polyline:{category:"Interaction",action:"Draw",label:"Delete",details:"Polyline"},point:{category:"Interaction",action:"Draw",label:"Delete",details:"Point"}}},update:{details:{polygon:{category:"Interaction",action:"Draw",label:"Update",details:"Polygon"},polyline:{category:"Interaction",action:"Draw",label:"Update",details:"Polyline"},point:{category:"Interaction",action:"Draw",label:"Update",details:"Point"}}}}},deselect:{label:{groups:{category:"Interaction",action:"Deselect",label:"Groups"},content:{category:"Interaction",action:"Deselect",label:"Content"},collapse:{details:{timeline:{category:"Interaction",action:"Deselect",label:"Collapse",details:"Timeline"}}}},category:"Interaction",action:"Deselect"},alert:{label:{warning:{details:{discussionsBlocked:{category:"Interaction",action:"Alert",label:"Warning",details:"Discussions Blocked"}}}}},subscribe:{label:{newsletter:{category:"Interaction",action:"Subscribe",label:"Newsletter"}}},add:{label:{image:{category:"Interaction",action:"Add",label:"Image"},content:{category:"Interaction",action:"Add",label:"Content"},groups:{category:"Interaction",action:"Add",label:"Groups"},users:{category:"Interaction",action:"Add",label:"Users"},step:{details:{timeline:{category:"Interaction",action:"Add",label:"Step",details:"Timeline"}}}}},remove:{label:{image:{category:"Interaction",action:"Remove",label:"Image"},content:{category:"Interaction",action:"Remove",label:"Content"},groups:{category:"Interaction",action:"Remove",label:"Groups"},users:{category:"Interaction",action:"Remove",label:"Users"},step:{details:{timeline:{category:"Interaction",action:"Remove",label:"Step",details:"Timeline"}}},location:{details:{clearAll:{category:"Interaction",action:"Remove",label:"Location",details:"Clear All"}}}}},authenticate:{label:{signout:{category:"Interaction",action:"Authenticate",label:"Signout"}}}}},groups:{action:{update:{label:{settings:{details:{allowDiscussions:{category:"Groups",action:"Update",label:"Settings",details:"Allow Discussions"},blockDiscussions:{category:"Groups",action:"Update",label:"Settings",details:"Block Discussions"}}}}}}},navigation:{action:{view:{label:{content:{details:{dcat:{category:"Navigation",action:"View",label:"Content",details:"DCAT"},dcatUs11:{category:"Navigation",action:"View",label:"Content",details:"DCAT-US-1.1"},dcatAp201:{category:"Navigation",action:"View",label:"Content",details:"DCAT-AP-2.0.1"},rss2:{category:"Navigation",action:"View",label:"Content",details:"RSS-2.0"},about:{category:"Navigation",action:"View",label:"Content",details:"About"},library:{category:"Navigation",action:"View",label:"Content",details:"Library"},hubSiteOgcApiLandingPage:{category:"Navigation",action:"View",label:"Content",details:"Hub Site OGC API Landing Page"},layoutEditor:{category:"Navigation",action:"View",label:"Content",details:"Layout Editor"},workspace:{category:"Navigation",action:"View",label:"Content",details:"Workspace"},publishedDraft:{category:"Navigation",action:"View",label:"Content",details:"Published Draft"},previewDraft:{category:"Navigation",action:"View",label:"Content",details:"Preview Draft"},site:{category:"Navigation",action:"View",label:"Content",details:"Site"}}},users:{details:{profile:{category:"Navigation",action:"View",label:"Users",details:"Profile"}}},groups:{details:{profile:{category:"Navigation",action:"View",label:"Groups",details:"Profile"},about:{category:"Navigation",action:"View",label:"Groups",details:"About"}}},search:{details:{sourceProjectSearch:{category:"Navigation",action:"View",label:"Search",details:"Source: Project Search"},sourceSearch:{category:"Navigation",action:"View",label:"Search",details:"Source: Search"},searchApiExplorer:{category:"Navigation",action:"View",label:"Search",details:"Search API Explorer"}}},feeds:{details:{feedsApiExplorer:{category:"Navigation",action:"View",label:"Feeds",details:"Feeds API Explorer"}}},orgs:{details:{overview:{category:"Navigation",action:"View",label:"Orgs",details:"Overview"}}}}},external:{label:{hubStatus:{category:"Navigation",action:"External",label:"Hub Status"},itemDetails:{category:"Navigation",action:"External",label:"Item Details"},link:{category:"Navigation",action:"External",label:"Link"},webHelp:{category:"Navigation",action:"External",label:"Web Help",details:{projectWorkspaceIntroNotice:{category:"Navigation",action:"External",label:"Web Help",details:"Project Workspace Intro Notice"},learnMoreAboutHubProjects:{category:"Navigation",action:"External",label:"Web Help",details:"Learn more about Hub Projects"},enableOrDisableHubActivityTracking:{category:"Navigation",action:"External",label:"Web Help",details:"Enable or Disable Hub Activity Tracking"}}},changelog:{category:"Navigation",action:"External",label:"Changelog"},arcGisBlog:{category:"Navigation",action:"External",label:"ArcGIS Blog"},customerFeedback:{details:{hubProjectFeedbackSurvey:{category:"Navigation",action:"External",label:"Customer Feedback",details:"Hub Project Feedback Survey"}}},arcGisOnline:{details:{organization:{category:"Navigation",action:"External",label:"ArcGIS Online",details:"Organization"}}}},category:"Navigation",action:"External"},edit:{label:{profile:{category:"Navigation",action:"Edit",label:"Profile"},thumbnail:{category:"Navigation",action:"Edit",label:"Thumbnail"},bio:{category:"Navigation",action:"Edit",label:"Bio"},content:{details:{site:{category:"Navigation",action:"Edit",label:"Content",details:"Site"},hubFeeds:{category:"Navigation",action:"Edit",label:"Content",details:"Hub feeds"}}}}},onPage:{label:{overview:{category:"Navigation",action:"On Page",label:"Overview"},teams:{category:"Navigation",action:"On Page",label:"Teams"},content:{category:"Navigation",action:"On Page",label:"Content"},favorites:{category:"Navigation",action:"On Page",label:"Favorites"},chart:{category:"Navigation",action:"On Page",label:"Chart"},table:{category:"Navigation",action:"On Page",label:"Table"}}},new:{label:{content:{category:"Navigation",action:"New",label:"Content",details:{app:{category:"Navigation",action:"New",label:"Content",details:"App"},feedback:{category:"Navigation",action:"New",label:"Content",details:"Feedback"},template:{category:"Navigation",action:"New",label:"Content",details:"Template"},event:{category:"Navigation",action:"New",label:"Content",details:"Event"}}},groups:{category:"Navigation",action:"New",label:"Groups"}}},home:{category:"Navigation",action:"Home",label:{hubOverview:{category:"Navigation",action:"Home",label:"Hub Overview"}}},manage:{category:"Navigation",action:"Manage",label:{catalogConfiguration:{category:"Navigation",action:"Manage",label:"Catalog Configuration",details:{configureEmptyCatalog:{category:"Navigation",action:"Manage",label:"Catalog Configuration",details:"Configure empty catalog"}}}}}}},users:{action:{update:{label:{notifications:{details:{enabled:{category:"Users",action:"Update",label:"Notifications",details:"Enabled"},disabled:{category:"Users",action:"Update",label:"Notifications",details:"Disabled"}}}}}}},org:{}}},o={category:{CONTENT:"Content",INTERACTION:"Interaction",GROUPS:"Groups",NAVIGATION:"Navigation",USERS:"Users",ORG:"Org"},action:{DOWNLOAD:"Download",VIEW:"View",OPEN:"Open",SHARE:"Share",ZOOM:"Zoom",CLOSE:"Close",SEARCH:"Search",UPDATE:"Update",EXTERNAL:"External",DELETE:"Delete",VIEWED:"Viewed",CREATE:"Create",ENABLE:"Enable",DISABLE:"Disable",SELECT:"Select",DRAW:"Draw",DESELECT:"Deselect",EDIT:"Edit",ON_PAGE:"On-Page",NEW:"New",ALERT:"Alert",SUBSCRIBE:"Subscribe",HOME:"Home",ADD:"Add",REMOVE:"Remove",MANAGE:"Manage",AUTHENTICATE:"Authenticate"},label:{CONTENT:"Content",POPOVER:"Popover",LINK:"Link",IN:"In",OUT:"Out",POST_LIST:"Post List",THREAD:"Thread",PANEL:"Panel",QUERY:"Query",CATEGORY_CARD:"Category Card",SEARCH:"Search",TO:"To",HUB_STATUS:"Hub Status",RECENTS:"Recents",EMPTY:"Empty",EDITOR:"Editor",POST:"Post",TABLE:"Table",USERS:"Users",GROUPS:"Groups",DRAW:"Draw",SELECT:"Select",START:"Start",COMPLETE:"Complete",DELETE:"Delete",FILTER:"Filter",UPDATE:"Update",MODAL:"Modal",ITEM_DETAILS:"Item Details",UPLOAD:"Upload",URL:"URL",FILTERS:"Filters",PROFILE:"Profile",THUMBNAIL:"Thumbnail",OVERVIEW:"Overview",TEAMS:"Teams",FAVORITES:"Favorites",BIO:"Bio",CLICK:"Click",LOAD_MORE:"Load More",LOCATIONS:"Locations",ABOUT:"About",EXPLORE:"Explore",BACK_TO_TOP:"Back to Top",ADD_LOCATION:"Add Location",LOCATION:"Location",STEPPER:"Stepper",NOTIFICATIONS:"Notifications",VIEW:"View",SETTINGS:"Settings",WARNING:"Warning",POP_UP:"Pop-Up",WEB_HELP:"Web Help",ACCORDION:"Accordion",CHART:"Chart",WHATS_NEW:"Whats New",TOOLTIP:"Tooltip",STATUS:"Status",REACTION:"Reaction",REPLY:"Reply",NEWSLETTER:"Newsletter",CHANGELOG:"Changelog",ARC_GIS_BLOG:"ArcGIS Blog",HUB_OVERVIEW:"Hub Overview",IMAGE:"Image",STEP:"Step",COLLAPSE:"Collapse",DESCRIPTION:"Description",SUMMARY:"Summary",TIMELINE:"Timeline",FEATURED_CONTENT:"Featured Content",ACCESS:"Access",ALERT:"Alert",CUSTOMER_FEEDBACK:"Customer Feedback",ARC_GIS_ONLINE:"ArcGIS Online",DROPDOWN:"Dropdown",ACTION:"Action",FEEDS:"Feeds",ORGS:"Orgs",MENU:"Menu",SIDE_PANEL:"Side Panel",SIGNOUT:"Signout",LAYOUT:"Layout",SITE:"Site",TEMPLATE:"Template",CATALOG_CONFIGURATION:"Catalog Configuration",PAGE:"Page"},details:{DCAT:"DCAT",DCAT_US_1_1:"DCAT-US-1.1",DCAT_AP_2_0_1:"DCAT-AP-2.0.1",SHARE:"Share",CACHE:"Cache",EXPORT:"Export",LEGEND:"Legend",FOCUS:"Focus",LOSE_FOCUS:"Lose Focus",THREAD:"Thread",POST_LIST:"Post List",DETAILS:"Details",PROFILE:"Profile",OPTIONS:"Options",SELECT_TOOL:"Select Tool",POLYGON:"Polygon",POLYLINE:"Polyline",POINT:"Point",CLEAR:"Clear",UPDATE:"Update",HELP:"Help",RECENTS:"Recents",ADD_POST:"Add Post",ADD_CONTENT:"Add Content",NEW_CONTENT:"New Content",ADD_EXISTING_CONTENT:"Add Existing Content",ABOUT:"About",HOSTED_DOWNLOADS_DISABLED:"Hosted Downloads Disabled",HOSTED_DOWNLOADS_ENABLED:"Hosted Downloads Enabled",LIBRARY:"Library",SOURCE_PROJECT_SEARCH:"Source: Project Search",APP:"App",FEEDBACK:"Feedback",TEMPLATE:"Template",EVENT:"Event",MORE:"More",LESS:"Less",RESET:"Reset",DATE_UPDATED:"Date Updated",CREATE_PROJECT:"Create Project",REPLY:"Reply",BODY_ACTION:"Body Action",SOURCE_SEARCH:"Source: Search",SEARCH_API_EXPLORER:"Search API Explorer",HUB_SITE_OGC_API_LANDING_PAGE:"Hub Site OGC API Landing Page",LINE:"Line",MANAGE_PREFERENCES:"Manage Preferences",ENABLED:"Enabled",DISABLED:"Disabled",ALL_POSTS:"All Posts",EMAIL_NOTIFICATIONS:"Email Notifications",POST_ACTIVITY:"Post Activity",DISCUSSION_OPTIONS:"Discussion Options",ALLOW_DISCUSSIONS:"Allow Discussions",BLOCK_DISCUSSIONS:"Block Discussions",DISCUSSIONS_BLOCKED:"Discussions Blocked",FEEDS:"Feeds",POST:"Post",LOCATION:"Location",ATTRIBUTES:"Attributes",ATTRIBUTE:"Attribute",EXIT_MODAL:"Exit modal",ACCEPT_MODAL:"Accept modal",OPEN_MODAL:"Open modal",CHIP_COMPONENT_WITH_STRING_HIDDEN:"Chip Component with string Hidden",HIDE:"Hide",SHOW:"Show",SMILING_FACE:"Smiling face",CONFUSED_FACE:"Confused face",GRINNING_FACE:"Grinning face",LAUGHING_FACE:"Laughing face",FACE_WITH_TEARS_OF_JOY:"Face with tears of joy",THINKING_FACE:"Thinking face",WINKING_FACE:"Winking face",PARTYING_FACE:"Partying face",SAD_FACE:"Sad face",SHOCKED_FACE:"Shocked face",THUMBS_UP:"Thumbs up",THUMBS_DOWN:"Thumbs down",CLAPPING_HANDS:"Clapping hands",RAISING_HANDS:"Raising hands",WAVING_HAND:"Waving hand",RED_HEART:"Red heart",HUNDRED_POINTS:"Hundred points",FIRE:"Fire",PARTY_POPPER:"Party popper",ROCKET:"Rocket",UP_ARROW:"Up arrow",DOWN_ARROW:"Down arrow",EYES:"Eyes",TROPHY:"Trophy",WORLD_MAP:"World map",REACTION_OVERFLOW:"Reaction overflow",ADD_REACTION:"Add reaction",SWITCH_TO_CLASSIC_VIEW:"Switch to classic view",BANNER_DISMISS:"Banner dismiss",ENABLE_WEEKLY_REPORT:"Enable Weekly Report",DISABLE_WEEKLY_REPORT:"Disable Weekly Report",SITE:"Site",ADD_GROUPS:"Add Groups",ADD_USERS:"Add Users",FEATURES_POINTS:"Features: points",FEATURES_LINES:"Features: lines",FEATURES_POLYGONS:"Features: polygons",POINTS_POINTS:"Points: points",POINTS_LINES:"Points: lines",POINTS_POLYGONS:"Points: polygons",COMPLETE:"Complete",EMPTY:"Empty",STEPS:"Steps",TIMELINE:"Timeline",PUBLIC:"Public",ORG:"Org",SHARED:"Shared",PRIVATE:"Private",PROJECT_WORKSPACE_INTRO_NOTICE:"Project Workspace Intro Notice",LEARN_MORE_ABOUT_HUB_PROJECTS:"Learn more about Hub Projects",HUB_PROJECT_FEEDBACK_SURVEY:"Hub Project Feedback Survey",REMOVE_EDIT_GROUPS:"Remove Edit Groups",REMOVE_VIEW_GROUPS:"Remove View Groups",ORGANIZATION:"Organization",ADD_VIEW_GROUPS:"Add View Groups",ADD_EDIT_GROUPS:"Add Edit Groups",DELETE_CONTENT:"Delete Content",ENABLE_FOR_ALL_USERS:"Enable for all users",ENABLE_BETA_VIEW:"Enable beta view",DISABLE_BETA_VIEW:"Disable beta view",CLEAR_ALL:"Clear all",ACTIVITY_ENABLED:"Activity Enabled",ACTIVITY_DISABLED:"Activity Disabled",ENABLE_OR_DISABLE_HUB_ACTIVITY_TRACKING:"Enable or Disable Hub Activity Tracking",OVERFLOW:"Overflow",EXPORT_CATALOG:"Export catalog",EXPORT_SEARCH_RESULTS:"Export search results",WEEKLY:"Weekly",HUB_FEEDS:"Hub feeds",FEEDS_API_EXPLORER:"Feeds API Explorer",LAYOUT_EDITOR:"Layout Editor",WORKSPACE:"Workspace",PUBLISHED_DRAFT:"Published Draft",PREVIEW_DRAFT:"Preview Draft",OVERVIEW:"Overview",VIEW:"View",USER:"User",SHARING:"Sharing",DRAFT:"Draft",CLONE:"Clone",ADD_CATALOG_GROUPS:"Add Catalog Groups",REMOVE_CATALOG_GROUPS:"Remove Catalog Groups",PUBLISH:"Publish",CONFIGURE_EMPTY_CATALOG:"Configure empty catalog"},element:{ACTIONS_MENU:"Actions Menu",CONTENT_HERO:"Content Hero",DOWNLOAD_CARD:"Download Card",EXPLORE_ALL_CONTENT:"Explore All Content",RESULTS_LIST:"Results List",ON_PAGE:"On-Page",RESET_FILTERS:"Reset Filters",CHIPS:"Chips",EXPLORE_SITE:"Explore Site",BACK_TO_TOP:"Back to Top",VIEW_BUTTON:"View Button",X_BUTTON:"x button",OKAY_BUTTON:"okay button",INFO_BUTTON:"info button",NEWSLETTER_REPORTS_NOTICE:"newsletter reports notice"},response:{SUCCESS:"Success",FAILURE:"Failure"}}
var a=Object(r.c)((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.defaultDimensions=void 0,t.defaultDimensions={CATEGORY:"category",ACTION:"action",LABEL:"label"}})),s=Object(r.c)((function(e,t){var n=r.a&&r.a.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=r.a&&r.a.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)}
Object.defineProperty(t,"__esModule",{value:!0}),i(a,t)})),c=Object(r.c)((function(e,t){var n,i=r.a&&r.a.__assign||function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e}).apply(this,arguments)},o=r.a&&r.a.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i])
return e.concat(r||Array.prototype.slice.call(t))}
Object.defineProperty(t,"__esModule",{value:!0}),t.customDimensionsConfig=t.constantDimensions=t.dictionaryDimensions=t.dimensions=void 0,t.dimensions=i(i({},s.defaultDimensions),{DETAILS:"details",USER_TYPE:"userType",ID:"id",TYPE:"type",ORGANIZATION_ID:"organizationId",GROUP_ID:"groupId",GROUP_ACCESS:"groupAccess",GROUP_TYPE:"groupType",SEARCH:"search",GROUP_ORG_ID:"groupOrgId",SITE_ID:"siteId",ACCESS:"access",CONTENT_ORG_ID:"contentOrgId",ELEMENT:"element",RESPONSE:"response",POST_ID:"postId",PARENT_ID:"parentId",CHANNEL_ID:"channelId",CHANNEL_ACCESS:"channelAccess"}),t.dictionaryDimensions=[t.dimensions.CATEGORY,t.dimensions.ACTION,t.dimensions.LABEL,t.dimensions.DETAILS],t.constantDimensions=o(o([],t.dictionaryDimensions,!0),[t.dimensions.ELEMENT,t.dimensions.RESPONSE],!1),t.customDimensionsConfig=((n={})[t.dimensions.DETAILS]=1,n[t.dimensions.USER_TYPE]=2,n[t.dimensions.ID]=3,n[t.dimensions.TYPE]=4,n[t.dimensions.ORGANIZATION_ID]=5,n[t.dimensions.GROUP_ID]=6,n[t.dimensions.GROUP_ACCESS]=7,n[t.dimensions.GROUP_TYPE]=8,n[t.dimensions.SEARCH]=9,n[t.dimensions.GROUP_ORG_ID]=10,n[t.dimensions.SITE_ID]=11,n[t.dimensions.ACCESS]=12,n[t.dimensions.CONTENT_ORG_ID]=13,n[t.dimensions.ELEMENT]=14,n[t.dimensions.RESPONSE]=15,n[t.dimensions.POST_ID]=16,n[t.dimensions.PARENT_ID]=17,n[t.dimensions.CHANNEL_ID]=18,n[t.dimensions.CHANNEL_ACCESS]=19,n)})),l=Object(r.c)((function(e,t){var n
Object.defineProperty(t,"__esModule",{value:!0}),t.customMetricsConfig=t.metrics=void 0,t.metrics={POSITION:"position",SIZE:"size",DURATION:"duration",COUNT:"count"},t.customMetricsConfig=((n={})[t.metrics.POSITION]=1,n[t.metrics.SIZE]=2,n[t.metrics.DURATION]=3,n[t.metrics.COUNT]=4,n)})),u=Object(r.c)((function(e,t){var n=r.a&&r.a.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.constants=t.dictionary=t.customMetricsConfig=t.customDimensionsConfig=void 0
var a=n(i),s=n(o)
Object.defineProperty(t,"customDimensionsConfig",{enumerable:!0,get:function(){return c.customDimensionsConfig}}),Object.defineProperty(t,"customMetricsConfig",{enumerable:!0,get:function(){return l.customMetricsConfig}}),t.dictionary=a.default,t.constants=s.default}))},1521:function(e,t,n){"use strict"
n.d(t,"a",(function(){return s}))
var r=n(968),i=n(23),o=n(970),a=(n(971),n(445),n(969))
const s=e=>{let t=class extends e{constructor(...e){super(...e),this.goToOverride=null,this.view=null}callGoTo(e){const{view:t}=this
return Object(i.c)(t),this.goToOverride?this.goToOverride(t,e):t.goTo(e.target,e.options)}}
return Object(r.a)([Object(o.b)()],t.prototype,"goToOverride",void 0),Object(r.a)([Object(o.b)()],t.prototype,"view",void 0),t=Object(r.a)([Object(a.a)("esri.widgets.support.GoTo")],t),t}},1538:function(e,t,n){"use strict"
n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return i}))
var r=n(997)
function i(e,t){const n=t||e.extent,i=e.width,o=Object(r.g)(n&&n.spatialReference)
return n&&i?n.width/i*o*r.k*96:0}function o(e,t){return e/(Object(r.g)(t)*r.k*96)}function a(e){return e/(96*r.k)}function s(e,t){const n=e.extent,r=e.width-(e.padding?e.padding.left+e.padding.right:0),i=o(t,n.spatialReference)
return n.clone().expand(i*r/n.width)}},1642:function(e,t,n){"use strict"
n.d(t,"a",(function(){return l}))
var r=n(968),i=n(972),o=n(970),a=(n(971),n(445),n(969)),s=n(983)
let c=class extends i.a{constructor(e){super(e),this.geometries=[],this.outSpatialReference=null,this.transformation=null,this.transformForward=null}toJSON(){const e=this.geometries.map(e=>e.toJSON()),t=this.geometries[0],n={}
return n.outSR=this.outSpatialReference.wkid||JSON.stringify(this.outSpatialReference.toJSON()),n.inSR=t.spatialReference.wkid||JSON.stringify(t.spatialReference.toJSON()),n.geometries=JSON.stringify({geometryType:Object(s.c)(t),geometries:e}),this.transformation&&(n.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),null!=this.transformForward&&(n.transformForward=this.transformForward),n}}
Object(r.a)([Object(o.b)()],c.prototype,"geometries",void 0),Object(r.a)([Object(o.b)({json:{read:{source:"outSR"}}})],c.prototype,"outSpatialReference",void 0),Object(r.a)([Object(o.b)()],c.prototype,"transformation",void 0),Object(r.a)([Object(o.b)()],c.prototype,"transformForward",void 0),c=Object(r.a)([Object(a.a)("esri.rest.support.ProjectParameters")],c)
const l=c},1797:function(e,t,n){"use strict"
n.d(t,"a",(function(){return u}))
var r=n(771),i=n(971),o=n(983),a=n(1074),s=n(1259),c=n(1642)
const l=Object(i.m)(c.a)
async function u(e,t,n){t=l(t)
const i=Object(a.c)(e),c={...i.query,f:"json",...t.toJSON()},u=t.outSpatialReference,d=Object(o.c)(t.geometries[0]),f=Object(a.a)(c,n)
return Object(r.default)(i.path+"/project",f).then(({data:{geometries:e}})=>Object(s.a)(e,d,u))}},1863:function(e,t,n){"use strict"
function r(e,t=300){let n
return function(r,...i){clearTimeout(n),n=setTimeout(()=>e.apply(r,i),t)}}function i(e){return function(t,n,i){const{value:o}=i,a=n.toString()+"Debounced"
return Object.assign(Object.assign({},i),{value:function(...t){this[a]||Object.defineProperty(this,a,{value:r(o,e.timeout)}),this[a](this,...t)}})}}n.d(t,"a",(function(){return i}))},1969:function(e,t,n){"use strict"
n.d(t,"a",(function(){return r}))
const r={type:String,json:{read:{source:"token"},write:{target:"token"}}}},2242:function(e,t,n){"use strict"
n.d(t,"a",(function(){return I})),n.d(t,"b",(function(){return R})),n.d(t,"c",(function(){return C}))
var r=n(110),i=n(446),o=n(235),a=n(233),s=n(992),c=n(774),l=n(1028),u=(n(771),n(196),n(445),n(374),n(982),n(770),n(1004),n(1055),n(773),n(1021)),d=n(976)
new d.a({MGRS:"mgrs",USNG:"usng",UTM:"utm",GeoRef:"geo-ref",GARS:"gars",DMS:"dms",DDM:"ddm",DD:"dd"})
var f=n(983)
new d.a({109006:"centimeters",9102:"decimal-degrees",109005:"decimeters",9002:"feet",109009:"inches",9036:"kilometers",9001:"meters",9035:"miles",109007:"millimeters",109012:"nautical-miles",9096:"yards"})
var h=n(968),p=n(972),m=n(23),g=n(970),b=n(971),y=n(969)
let O=class extends p.a{constructor(e){super(e),this.deviationUnit=null,this.geometries=null,this.maxDeviation=null}}
Object(h.a)([Object(g.b)({type:String,json:{write:!0}})],O.prototype,"deviationUnit",void 0),Object(h.a)([Object(g.b)({json:{read:{reader:e=>e?e.map(e=>Object(f.a)(e)).filter(m.l):null},write:{writer:(e,t)=>{var n
t.geometries=null!=(n=null==e?void 0:e.map(e=>e.toJSON()))?n:null}}}})],O.prototype,"geometries",void 0),Object(h.a)([Object(g.b)({type:Number,json:{write:!0}})],O.prototype,"maxDeviation",void 0),O=Object(h.a)([Object(y.a)("esri.rest.support.GeneralizeParameters")],O),O.from=Object(b.m)(O),new d.a({preserveShape:"preserve-shape"})
let v=class extends p.a{constructor(e){super(e),this.calculationType=null,this.geodesic=null,this.lengthUnit=null,this.polylines=null}}
Object(h.a)([Object(g.b)({type:String,json:{write:!0}})],v.prototype,"calculationType",void 0),Object(h.a)([Object(g.b)({type:Boolean,json:{write:!0}})],v.prototype,"geodesic",void 0),Object(h.a)([Object(g.b)({json:{write:!0}})],v.prototype,"lengthUnit",void 0),Object(h.a)([Object(g.b)({type:[u.a],json:{read:{reader:e=>e?e.map(e=>Object(f.a)(e)):null},write:{writer:(e,t)=>{t.polylines=e.map(e=>e.toJSON())}}}})],v.prototype,"polylines",void 0),v=Object(h.a)([Object(y.a)("esri.rest.support.LengthsParameters")],v),v.from=Object(b.m)(v),new d.a({esriGeometryOffsetBevelled:"bevelled",esriGeometryOffsetMitered:"mitered",esriGeometryOffsetRounded:"rounded"}),new d.a({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"})
let E=class extends p.a{constructor(e){super(e),this.bevelRatio=null,this.geometries=null,this.offsetDistance=null,this.offsetHow=null,this.offsetUnit=null}}
Object(h.a)([Object(g.b)({type:Number,json:{write:!0}})],E.prototype,"bevelRatio",void 0),Object(h.a)([Object(g.b)({json:{read:{reader:e=>e?e.map(e=>Object(f.a)(e)).filter(m.l):null},write:{writer:(e,t)=>{var n
t.geometries=null!=(n=null==e?void 0:e.map(e=>e.toJSON()))?n:null}}}})],E.prototype,"geometries",void 0),Object(h.a)([Object(g.b)({type:Number,json:{write:!0}})],E.prototype,"offsetDistance",void 0),Object(h.a)([Object(g.b)({type:String,json:{write:!0}})],E.prototype,"offsetHow",void 0),Object(h.a)([Object(g.b)({type:String,json:{write:!0}})],E.prototype,"offsetUnit",void 0),E=Object(h.a)([Object(y.a)("esri.rest.support.OffsetParameters")],E),E.from=Object(b.m)(E)
var j=n(1797)
new d.a({esriGeometryRelationCross:"cross",esriGeometryRelationDisjoint:"disjoint",esriGeometryRelationIn:"in",esriGeometryRelationInteriorIntersection:"interior-intersection",esriGeometryRelationIntersection:"intersection",esriGeometryRelationLineCoincidence:"line-coincidence",esriGeometryRelationLineTouch:"line-touch",esriGeometryRelationOverlap:"overlap",esriGeometryRelationPointTouch:"point-touch",esriGeometryRelationTouch:"touch",esriGeometryRelationWithin:"within",esriGeometryRelationRelation:"relation"})
let _=class extends p.a{constructor(e){super(e),this.geometries1=null,this.geometries2=null,this.relation=null,this.relationParameter=null}}
Object(h.a)([Object(g.b)({json:{read:{reader:e=>e?e.map(e=>Object(f.a)(e)).filter(m.l):null},write:{writer:(e,t)=>{var n
t.geometries1=null!=(n=null==e?void 0:e.map(e=>e.toJSON()))?n:null}}}})],_.prototype,"geometries1",void 0),Object(h.a)([Object(g.b)({json:{read:{reader:e=>e?e.map(e=>Object(f.a)(e)).filter(m.l):null},write:{writer:(e,t)=>{var n
t.geometries2=null!=(n=null==e?void 0:e.map(e=>e.toJSON()))?n:null}}}})],_.prototype,"geometries2",void 0),Object(h.a)([Object(g.b)({type:String,json:{write:!0}})],_.prototype,"relation",void 0),Object(h.a)([Object(g.b)({type:String,json:{write:!0}})],_.prototype,"relationParameter",void 0),_=Object(h.a)([Object(y.a)("esri.rest.support.RelationParameters")],_),_.from=Object(b.m)(_),new d.a({0:"default-curve-extension",1:"relocate-ends",2:"keep-end-attributes",4:"no-end-attributes",8:"no-extend-at-from",16:"no-extend-at-to"})
let S=class extends p.a{constructor(e){super(e),this.extendHow="default-curve-extension",this.polylines=null,this.trimExtendTo=null}}
Object(h.a)([Object(g.b)({type:String,json:{write:!0}})],S.prototype,"extendHow",void 0),Object(h.a)([Object(g.b)({type:[u.a],json:{read:{reader:e=>e?e.map(e=>Object(f.a)(e)):null},write:{writer:(e,t)=>{t.polylines=e.map(e=>e.toJSON())}}}})],S.prototype,"polylines",void 0),Object(h.a)([Object(g.b)({json:{read:{reader:e=>e?Object(f.a)(e):null},write:{writer:(e,t)=>{t.trimExtendTo=e.toJSON()}}}})],S.prototype,"trimExtendTo",void 0),S=Object(h.a)([Object(y.a)("esri.rest.support.TrimExtendParameters")],S),S.from=Object(b.m)(S)
var w=n(1642)
const T=a.a.getLogger("esri.widgets.support.geolocationUtils"),x={maximumAge:0,timeout:15e3,enableHighAccuracy:!0}
function C(){return function(){const e=Object(o.a)("esri-geolocation")
return e||T.warn("geolocation-unsupported","Geolocation unsupported."),e}()&&function(){const e=window.isSecureContext
return e||T.warn("insecure-context","Geolocation requires a secure origin."),e}()}function I(e){return e||(e=x),new Promise((t,n)=>{setTimeout(()=>n(new i.a("geolocation:timeout","getting the current geolocation position timed out")),15e3),navigator.geolocation.getCurrentPosition(t,n,e)})}function R(e,t){var n
const{position:o,view:a}=e,u=null==(n=function(e){const t=e&&e.coords||{},n={accuracy:t.accuracy,altitude:t.altitude,altitudeAccuracy:t.altitudeAccuracy,heading:t.heading,latitude:t.latitude,longitude:t.longitude,speed:t.speed}
return e?{coords:n,timestamp:e.timestamp}:e}(o))?void 0:n.coords
if(!u)throw new i.a("geometry-service:no-coords","Geolocation has no coordinates")
return function(e,t,n){if(!t)return Promise.resolve(e)
const o=t.spatialReference
return o.isWGS84?Promise.resolve(e):o.isWebMercator?Promise.resolve(Object(c.geographicToWebMercator)(e)):function(e){if(r.default.geometryServiceUrl)return Promise.resolve(r.default.geometryServiceUrl)
const t=l.a.getDefault()
return t.load(e).catch(()=>{}).then(()=>t.get("helperServices.geometry.url"))}(n).then(t=>{if(!t)throw new i.a("geometry-service:missing-url","Geometry service URL is missing")
const r=new w.a({geometries:[e],outSpatialReference:o})
return Object(j.a)(t,r,n).then(e=>e[0])})}(function({longitude:e,latitude:t,altitude:n}){return new s.a({longitude:e,latitude:t,z:n||void 0,spatialReference:{wkid:4326}})}(u),a,t)}},2524:function(e,t,n){"use strict"
n.d(t,"a",(function(){return Ze}))
var r=n(968),i=n(1019),o=n(110),a=n(772),s=n(775),c=(n(995),n(975)),l=n(993),u=n(446),d=n(1002),f=n(1007),h=n(233),p=n(23),m=n(973),g=n(978),b=n(970),y=n(971),O=(n(445),n(969)),v=n(992),E=n(769),j=n(1005),_=n(1027),S=n(1028),w=n(1417),T=n(234),x=n(1063),C=n(972)
let I=class extends(Object(x.b)(C.a)){constructor(e){super(e),this.autoNavigate=null,this.filter=null,this.getResults=null,this.getSuggestions=null,this.maxResults=null,this.maxSuggestions=null,this.minSuggestCharacters=null,this.outFields=null,this.placeholder="",this.popupEnabled=null,this.popupTemplate=null,this.prefix="",this.resultGraphicEnabled=null,this.resultSymbol=null,this.suggestionsEnabled=null,this.suffix="",this.withinViewEnabled=!1,this.zoomScale=null}}
Object(r.a)([Object(b.b)()],I.prototype,"autoNavigate",void 0),Object(r.a)([Object(b.b)()],I.prototype,"filter",void 0),Object(r.a)([Object(b.b)()],I.prototype,"getResults",void 0),Object(r.a)([Object(b.b)()],I.prototype,"getSuggestions",void 0),Object(r.a)([Object(b.b)()],I.prototype,"maxResults",void 0),Object(r.a)([Object(b.b)()],I.prototype,"maxSuggestions",void 0),Object(r.a)([Object(b.b)()],I.prototype,"minSuggestCharacters",void 0),Object(r.a)([Object(b.b)()],I.prototype,"outFields",void 0),Object(r.a)([Object(b.b)()],I.prototype,"placeholder",void 0),Object(r.a)([Object(b.b)()],I.prototype,"popupEnabled",void 0),Object(r.a)([Object(b.b)()],I.prototype,"popupTemplate",void 0),Object(r.a)([Object(b.b)()],I.prototype,"prefix",void 0),Object(r.a)([Object(b.b)()],I.prototype,"resultGraphicEnabled",void 0),Object(r.a)([Object(b.b)()],I.prototype,"resultSymbol",void 0),Object(r.a)([Object(b.b)()],I.prototype,"suggestionsEnabled",void 0),Object(r.a)([Object(b.b)()],I.prototype,"suffix",void 0),Object(r.a)([Object(b.b)()],I.prototype,"withinViewEnabled",void 0),Object(r.a)([Object(b.b)()],I.prototype,"zoomScale",void 0),I=Object(r.a)([Object(O.a)("esri.widgets.Search.SearchSource")],I)
const R=I
n(1083)
var A=n(997),P=n(773),M=n(1273),N=(n(982),n(1538)),D=n(770)
const L=h.a.getLogger("esri.widgets.Search.support.geometryUtils")
function F(e,t){var n,r
if(!t)return L.error("missing-parameter: view is missing."),Promise.reject(new u.a("searchgeometryutils:missing-parameter","view is missing."))
if(!e)return L.error("missing-parameter: point is missing."),Promise.reject(new u.a("searchgeometryutils:missing-parameter","point is missing."))
if(e.hasZ||"2d"===t.type)return Promise.resolve(e)
const i=null==t||null==(n=t.map)?void 0:n.ground
return i&&i.layers.length?i.queryElevation(e,{cache:null==(r=t.basemapTerrain)?void 0:r.elevationQueryCache}).then(e=>e.geometry):Promise.resolve(e)}function U(e){if(Object(p.k)(e))return null
switch(e.type){case"point":return e
case"extent":return e.center
case"polygon":return e.centroid
case"multipoint":return e.getPoint(0)
case"polyline":return e.getPoint(0,0)}return null}function G(e,t,n){return Object(p.k)(e)?null:"extent"===e.type?e:"multipoint"===e.type||"polygon"===e.type||"polyline"===e.type?e.extent:"point"===e.type?W(e,t,n):void 0}function k(e,t,n){return Object(p.k)(e)||Object(p.k)(t)?null:W(e.center,t,n)}function W(e,t,n){const r=e.hasZ?e.z:void 0
return t&&t.map?(n?Object(N.a)(t,n):t.extent).clone().centerAt(e).set({zmax:r,zmin:r}):new D.default({xmin:e.x-.25,ymin:e.y-.25,xmax:e.x+.25,ymax:e.y+.25,spatialReference:e.spatialReference,zmin:r,zmax:r})}var z=n(1115),V=n(1039)
const B=/https?:\/\/services.*\.arcgis\.com/i,q=/(?:\{([^}]+)\})/g,H=h.a.getLogger("esri.widgets.Search.support.layerSearchUtils")
function J(e,t){const{filter:n,withinViewEnabled:r}=e,i=t&&t.extent
return n&&n.geometry||(r&&i?i:void 0)}function Z(e){return e&&e.includes("*")}async function $(e){e&&await e.load()}function Y(e){return!(!e.fullText&&!e.where)}function K(e,t){const n=null==e?void 0:e.indexes
return!(!n||null==t||!t.length)&&n.filter(e=>"FullText"===e.indexType).some(e=>{var n
const r=(null==(n=e.fields)?void 0:n.split(",").map(e=>e.trim().toLowerCase()))||[]
return t.every(e=>r.includes(e.toLowerCase()))})}function X({text:e,searchFields:t}){return e.trim().split(" ").filter(e=>!!e.trim()).map(e=>new M.a({onFields:t,searchTerm:e,searchType:"prefix"}))}function Q(e){var t,n,r
return null!=(t=null==e||null==(n=e.capabilities)||null==(r=n.query)?void 0:r.supportsFullTextSearch)&&t}function ee(e){var t,n,r
return null!=(t=null==e||null==(n=e.capabilities)||null==(r=n.query)?void 0:r.supportsPagination)&&t}function te(e){return e.displayField||e.layer.displayField||function(e){var t,n,r,i
return null!=(t=null==e||null==(n=e.fieldsIndex)||null==(r=n.fields)||null==(i=r.find(e=>"string"===e.type))?void 0:i.name)?t:""}(e.layer)}function ne(e,t){return!(!e||null==t||!t.length)&&t.every(t=>re(e,t))}function re(e,t){return!!e.getField(t)}function ie(e){return e.replace(/\'/g,"''")}function oe(e,t){const n=t&&t.where
return n?`(${e}) AND (${n})`:e}function ae({searchTerm:e,layer:t,searchFields:n,filter:r,exactMatch:i,query:o,type:a}){const{definitionExpression:s,url:c}=t
let l=""
return!o.fullText&&e&&n&&n.forEach(n=>{const o=t.getField(n),s="function"==typeof t.getFieldDomain&&t.getFieldDomain(n),u=(s&&"coded-value"===s.type?function(e,t,n){let r=null
const{codedValues:i}=e
return i&&i.some(e=>{const i=e.name,o=n?i:i.toLowerCase()
return(n?t:t.toLowerCase())===o&&(r=e.code.toString(),!0)}),r}(s,e,i):null)||e||null
if(null!==u){const e=function({currentTerm:e,field:t,filter:n,exactMatch:r,url:i,type:o}){const a=t.type,s=t.name
if("string"===a||"date"===a||"global-id"===a){const t=B.test(i),a=t&&function(e){for(let t=0;t<e.length;t++)if(e.charCodeAt(t)>255)return!0
return!1}(e)?"N":""
return oe(r&&"search"===o?`${s} = ${a}'${e}'`:t?`${s} LIKE ${a}'${e}%'`:`LOWER(${s}) LIKE ${a}'${e.toLowerCase()}%'`,n)}if("oid"===a||"small-integer"===a||"integer"===a||"single"===a||"double"===a){const t=Number(e)
return isNaN(t)?null:oe(`${s} = ${t}`,n)}return oe(`${s} = ${e}`,n)}({currentTerm:u,field:o,filter:r,exactMatch:i,url:c,type:a})
e&&(l+=function(e,t){return e?` OR (${t})`:`(${t})`}(l,e))}}),s&&l?`(${s}) AND (${l})`:s||l}function se(e,t,n){const r=e.sourceLayer,{attributes:i}=e,o="function"==typeof r.getFieldDomain&&r.getFieldDomain(n)
if(t)return Object(z.a)(t,i)
if(n&&i){const e=r.getField(n),t=function(e,t){return e[Object.keys(e).find(e=>e.toLowerCase()===t.toLowerCase())]}(i,n)
return null==t?"":o&&"coded-value"===o.type?function(e,t){let n=null
const{codedValues:r}=e
return r&&r.length&&r.some(e=>e.code===t&&(n=e.name,!0)),n}(o,t):"date"===(null==e?void 0:e.type)?Object(V.b)(new Date(t)):"number"==typeof t?t.toString():"string"!=typeof t?"":t.trim()}return""}var ce
let le=ce=class extends R{constructor(e){super(e),this.displayField=null,this.exactMatch=null,this.orderByFields=null,this.searchFields=null,this.searchTemplate=null,this.suggestionTemplate=null,this.getResults=(e,t)=>function(e,t){const{exactMatch:n=!1,location:r,maxResults:i,spatialReference:o,source:a,sourceIndex:s,suggestResult:c,view:l}=e,{layer:d,filter:f,zoomScale:h}=a,m=l&&l.scale,g=J(a,l),b=t&&t.signal
return $(d).then(()=>{const e=d.popupTemplate
return e?e.getRequiredFields(d.fieldsIndex):null}).then(e=>{var t,y,O
const{objectIdField:v,returnZ:E}=d,j=te(a)
if(!re(d,j))throw H.error("invalid-field: displayField is invalid."),new u.a("getResults():invalid-field","displayField is invalid.")
const _=e&&e.length?e:[j],S=a.outFields||_,w=Z(S)
if(S.includes(v)||w||S.push(v),(null==(t=d.floorInfo)?void 0:t.floorField)&&S.push(d.floorInfo.floorField),!w&&!ne(d,S))throw H.error("invalid-field: outField is invalid."),new u.a("getResults():invalid-field","outField is invalid.")
const x=d.createQuery(),{orderByFields:C}=a
if(C&&(x.orderByFields=C),o){x.outSpatialReference=o
const e=1/Object(A.g)(o)
e&&(x.maxAllowableOffset=e)}const I="mesh"===d.geometryType||"multipatch"===d.geometryType,R=(null==(y=d.capabilities)||null==(O=y.data)?void 0:O.supportsZ)&&!I
if(x.returnZ=R&&!1!==E,x.returnGeometry=!0,x.multipatchOption=I?"xyFootprint":null,S&&(x.outFields=S),r)x.geometry=r
else if(c.key)x.objectIds=[c.key]
else{const e=a.searchFields||[j]
if(!ne(d,e))throw H.error("invalid-field: search field is invalid."),new u.a("getResults():invalid-field","search field is invalid.")
if(ee(d)&&(x.num=i),g&&(x.geometry=g),!c.text.trim())return[]
const t=c.text,{prefix:r="",suffix:o=""}=a,s=ie(`${r}${t}${o}`)
Q(d)&&K(d,e)&&!n&&t&&(x.fullText=X({text:t,searchFields:e}))
const l=ae({searchTerm:s,layer:d,searchFields:e,filter:f,exactMatch:n,query:x,type:"search"})
if(x.where=l,!Y(x))return[]}return d.queryFeatures(x,{signal:b}).then(e=>function(e,t,n,r,i,o,a){return e.features.map(e=>function(e,t,n,r,i,o,a){const s=e.clone(),c=e.sourceLayer,l=c&&c.objectIdField,u=l&&e.attributes[l],d=se(e,n.searchTemplate,i),f=G(s.geometry,t,o),h="number"==typeof a?k(Object(T.a)(f),t,a):f,m=e.clone()
return Object(p.l)(h)&&(m.geometry=P.default.fromExtent(h)),{extent:h,target:m,feature:s,key:u,name:d,sourceIndex:r}}(e,t,n,r,i,o,a))}(e,l,a,s,j,m,h))})}({source:this,...e},t),this.getSuggestions=(e,t)=>function(e,t){const{source:n,spatialReference:r,view:i,suggestTerm:o,maxSuggestions:a,sourceIndex:s,exactMatch:c}=e,{layer:l,filter:d}=n,f=t&&t.signal,h=J(n,i)
return $(l).then(()=>{if(!ee(l))return[]
const e=te(n),t=n.searchFields||[e],i=[]
n.suggestionTemplate?n.suggestionTemplate.replace(q,(e,t)=>(i.push(t),e)):i.push(e)
const p=Z(i)
i.includes(l.objectIdField)||p||i.push(l.objectIdField)
const m=re(l,e),g=p||ne(l,i),b=ne(l,t)
if(!m)throw H.error("invalid-field: displayField is invalid."),new u.a("getSuggestions():invalid-field","displayField is invalid.")
if(!g)throw H.error("invalid-field: outField is invalid."),new u.a("getSuggestions():invalid-field","outField is invalid.")
if(!b)throw H.error("invalid-field: search field is invalid."),new u.a("getSuggestions():invalid-field","search field is invalid.")
const y=l.createQuery(),{orderByFields:O}=n
if(O&&(y.orderByFields=O),y.outSpatialReference=r,y.returnGeometry=!1,y.num=a,y.outFields=i,h&&(y.geometry=h),!o.trim())return[]
const{prefix:v="",suffix:E=""}=n,j=ie(`${v}${o}${E}`)
Q(l)&&K(l,t)&&!c&&o&&(y.fullText=X({text:o,searchFields:t}))
const _=ae({searchTerm:j,layer:l,searchFields:t,filter:d,exactMatch:c,query:y,type:"suggest"})
return y.where=_,Y(y)?l.queryFeatures(y,{signal:f}).then(t=>function(e,t,n,r){return e.features.map(e=>function(e,t,n,r){const i=e.sourceLayer,{attributes:o}=e,{objectIdField:a}=i,s=o[a]
return{text:se(e,t.suggestionTemplate,r),key:s,sourceIndex:n}}(e,t,n,r))}(t,n,s,e)):[]})}({source:this,...e},t)}set layer(e){this._set("layer",e),e&&e.load().catch(()=>{})}get name(){var e
return null!=(e=this._getLayerTitle())?e:""}set name(e){this._overrideIfSome("name",e)}clone(){return new ce({autoNavigate:this.autoNavigate,filter:this.filter,maxResults:this.maxResults,maxSuggestions:this.maxSuggestions,minSuggestCharacters:this.minSuggestCharacters,outFields:this.outFields?Object(T.a)(this.outFields):null,placeholder:this.placeholder,popupEnabled:this.popupEnabled,prefix:this.prefix,resultGraphicEnabled:this.resultGraphicEnabled,resultSymbol:this.resultSymbol?this.resultSymbol.clone():null,suggestionsEnabled:this.suggestionsEnabled,suffix:this.suffix,withinViewEnabled:this.withinViewEnabled,displayField:this.displayField,exactMatch:this.exactMatch,layer:this.layer,searchFields:this.searchFields?Object(T.a)(this.searchFields):null,suggestionTemplate:this.suggestionTemplate,zoomScale:this.zoomScale})}_getFirstStringField(){var e,t
return null!=(e=null==(t=this.layer.fieldsIndex.fields.find(e=>"string"===e.type))?void 0:t.name)?e:""}_getDisplayField(){return this.displayField||this.layer.displayField||this._getFirstStringField()}_getSearchFieldsString(){const{layer:e,searchFields:t}=this
return e.loaded?": "+(t||[this._getDisplayField()]).map(t=>{const n=e.getField(t)
return n&&n.alias||t}).join(", "):""}_getLayerTitle(){const{layer:e}=this
if(!e)return
const{title:t}=e
return t?`${t}${this._getSearchFieldsString()}`:void 0}}
Object(r.a)([Object(b.b)({json:{read:{source:"field.name"},write:{target:"field.name"}}})],le.prototype,"displayField",void 0),Object(r.a)([Object(b.b)({json:{read:{source:"field.exactMatch"},write:{target:"field.exactMatch"}}})],le.prototype,"exactMatch",void 0),Object(r.a)([Object(b.b)({value:null})],le.prototype,"layer",null),Object(r.a)([Object(b.b)()],le.prototype,"name",null),Object(r.a)([Object(b.b)({type:[String],json:{write:!0}})],le.prototype,"orderByFields",void 0),Object(r.a)([Object(b.b)()],le.prototype,"searchFields",void 0),Object(r.a)([Object(b.b)()],le.prototype,"searchTemplate",void 0),Object(r.a)([Object(b.b)()],le.prototype,"suggestionTemplate",void 0),le=ce=Object(r.a)([Object(O.a)("esri.widgets.Search.LayerSearchSource")],le)
const ue=le
var de=n(771),fe=n(1074)
let he=class extends C.a{constructor(e){super(e),this.address=null,this.attributes=null,this.extent=null,this.location=null,this.score=null}}
Object(r.a)([Object(b.b)({type:String,json:{write:!0}})],he.prototype,"address",void 0),Object(r.a)([Object(b.b)({type:Object,json:{write:!0}})],he.prototype,"attributes",void 0),Object(r.a)([Object(b.b)({type:D.default,json:{write:!0}})],he.prototype,"extent",void 0),Object(r.a)([Object(b.b)({type:v.a,json:{write:!0}})],he.prototype,"location",void 0),Object(r.a)([Object(b.b)({type:Number,json:{write:!0}})],he.prototype,"score",void 0),he=Object(r.a)([Object(O.a)("esri.rest.support.AddressCandidate")],he)
const pe=he
var me=n(1969)
let ge=class extends C.a{constructor(e){super(e),this.address=null,this.apiKey=null,this.categories=null,this.countryCode=null,this.forStorage=null,this.location=null,this.locationType=null,this.magicKey=null,this.maxLocations=null,this.outFields=null,this.outSpatialReference=null,this.searchExtent=null}}
Object(r.a)([Object(b.b)({type:Object,json:{write:!0}})],ge.prototype,"address",void 0),Object(r.a)([Object(b.b)(me.a)],ge.prototype,"apiKey",void 0),Object(r.a)([Object(b.b)({type:[String],json:{read:{source:"category",reader:e=>e?e.split(","):null},write:{target:"category",writer:(e,t)=>{t.category=e?e.join(","):null}}}})],ge.prototype,"categories",void 0),Object(r.a)([Object(b.b)({type:String,json:{write:!0}})],ge.prototype,"countryCode",void 0),Object(r.a)([Object(b.b)({type:Boolean,json:{write:!0}})],ge.prototype,"forStorage",void 0),Object(r.a)([Object(b.b)({type:v.a,json:{write:{writer:(e,t)=>{t.location=e?e.clone().normalize():null}}}})],ge.prototype,"location",void 0),Object(r.a)([Object(b.b)({type:String,json:{write:!0}})],ge.prototype,"locationType",void 0),Object(r.a)([Object(b.b)({type:String,json:{write:!0}})],ge.prototype,"magicKey",void 0),Object(r.a)([Object(b.b)({type:Number,json:{write:!0}})],ge.prototype,"maxLocations",void 0),Object(r.a)([Object(b.b)({type:[String],json:{write:{writer:(e,t)=>{t.outFields=e?e.join(","):null}}}})],ge.prototype,"outFields",void 0),Object(r.a)([Object(b.b)({type:E.default,json:{read:{source:"outSR"},write:{target:"outSR"}}})],ge.prototype,"outSpatialReference",void 0),Object(r.a)([Object(b.b)({type:D.default,json:{write:{writer:(e,t)=>{const n=e?e.shiftCentralMeridian():null
t.searchExtent=n}}}})],ge.prototype,"searchExtent",void 0),ge=Object(r.a)([Object(O.a)("esri.rest.support.AddressToLocationsParameters")],ge),ge.from=Object(y.m)(ge)
const be=ge
function ye({data:e}){if(!e)return[]
const{candidates:t,spatialReference:n}=e
return t?t.map(e=>{if(!e)return
const{extent:t,location:r}=e,i=!t||function(e){return e&&"number"==typeof e.xmin&&"number"==typeof e.ymin&&"number"==typeof e.xmax&&"number"==typeof e.ymax}(t)
return function(e){return!!e&&"number"==typeof e.x&&"number"==typeof e.y}(r)&&i?(t&&(t.spatialReference=n),r&&(r.spatialReference=n),pe.fromJSON(e)):void 0}):[]}let Oe=class extends C.a{constructor(e){super(e),this.apiKey=null,this.location=null,this.locationType=null,this.outSpatialReference=null}}
Object(r.a)([Object(b.b)(me.a)],Oe.prototype,"apiKey",void 0),Object(r.a)([Object(b.b)({type:v.a,json:{write:{writer:(e,t)=>{const n=e?e.clone().normalize():null,r=void 0!==n
t.location=r?n:null}}}})],Oe.prototype,"location",void 0),Object(r.a)([Object(b.b)({type:String,json:{write:!0}})],Oe.prototype,"locationType",void 0),Object(r.a)([Object(b.b)({type:E.default,json:{read:{source:"outSR"},write:{target:"outSR"}}})],Oe.prototype,"outSpatialReference",void 0),Oe=Object(r.a)([Object(O.a)("esri.rest.support.LocationToAddressParameters")],Oe),Oe.from=Object(y.m)(Oe)
const ve=Oe
function Ee({data:e}){if(!e)return
const{address:t,location:n}=e,r=t&&t.Match_addr||""
return pe.fromJSON({address:r,attributes:t||{},location:n,score:100})}let je=class extends C.a{constructor(e){super(e),this.isCollection=null,this.magicKey=null,this.text=null}}
Object(r.a)([Object(b.b)({type:Boolean,json:{write:!0}})],je.prototype,"isCollection",void 0),Object(r.a)([Object(b.b)({type:String,json:{write:!0}})],je.prototype,"magicKey",void 0),Object(r.a)([Object(b.b)({type:String,json:{write:!0}})],je.prototype,"text",void 0),je=Object(r.a)([Object(O.a)("esri.rest.support.SuggestionCandidate")],je)
const _e=je
let Se=class extends C.a{constructor(e){super(e),this.apiKey=null,this.categories=null,this.countryCode=null,this.location=null,this.maxSuggestions=null,this.outSpatialReference=null,this.searchExtent=null,this.text=null}}
Object(r.a)([Object(b.b)(me.a)],Se.prototype,"apiKey",void 0),Object(r.a)([Object(b.b)({type:[String],json:{read:{source:"category",reader:e=>e?e.split(","):null},write:{target:"category",writer:(e,t)=>{t.category=e?e.join(","):null}}}})],Se.prototype,"categories",void 0),Object(r.a)([Object(b.b)({type:String,json:{write:!0}})],Se.prototype,"countryCode",void 0),Object(r.a)([Object(b.b)({type:v.a,json:{write:{writer:(e,t)=>{t.location=e?e.clone().normalize():null}}}})],Se.prototype,"location",void 0),Object(r.a)([Object(b.b)({type:Number,json:{write:!0}})],Se.prototype,"maxSuggestions",void 0),Object(r.a)([Object(b.b)({type:E.default,json:{read:{source:"outSR"},write:{target:"outSR"}}})],Se.prototype,"outSpatialReference",void 0),Object(r.a)([Object(b.b)({type:D.default,json:{write:{writer:(e,t)=>{const n=e?e.shiftCentralMeridian():null
t.searchExtent=JSON.stringify(n)}}}})],Se.prototype,"searchExtent",void 0),Object(r.a)([Object(b.b)({type:String,json:{write:!0}})],Se.prototype,"text",void 0),Se=Object(r.a)([Object(O.a)("esri.rest.support.SuggestLocationsParameters")],Se),Se.from=Object(y.m)(Se)
const we=Se
function Te(e){const{data:t}=e
if(!t)return[]
const{suggestions:n}=t
return n?n.map(e=>new _e(e)):[]}function xe(e,t){if(t.localSearchDisabled)return null
const n=null==e?void 0:e.scale
return"number"==typeof n&&n<=3e5?e.get("extent.center"):null}function Ce(e){return!!e&&/(?:arcgis\.com\/arcgis\/rest\/services\/world\/geocodeserver).*/i.test(e)}function Ie(e,t){const{filter:n,withinViewEnabled:r}=e,i=t&&t.scale,o=t&&t.extent
return G(n&&n.geometry,t,i)||(r&&o?o:void 0)}function Re(e,t){return e.filter(Boolean).map(e=>function(e,t){const{key:n,scale:r,sourceIndex:i,view:o,zoomScale:s,defaultZoomScale:c}=t,{attributes:l,extent:u,location:d,address:f}=e,h=new a.default({geometry:d,attributes:l}),m=u||d,g=G(m,o,r),b="number"==typeof s?k(g,o,s):"number"==typeof c&&"point"===m.type?k(g,o,c):g,y=d?`${d.x},${d.y}`:"",O=f||y,v=h.clone()
return Object(p.l)(b)&&(v.geometry=P.default.fromExtent(b)),{extent:b,feature:h,target:v,key:n,name:O,sourceIndex:i}}(e,t))}var Ae
let Pe=Ae=class extends R{constructor(e){super(e),this.apiKey=null,this.categories=null,this.countryCode=null,this.defaultZoomScale=null,this.localSearchDisabled=!1,this.locationType=null,this.name="",this.placeholder="",this.searchTemplate="",this.singleLineFieldName=null,this.suggestionsEnabled=null,this.url=null,this.zoomScale=null,this.getResults=(e,t)=>function(e,t){return e.location?function(e,t){const{source:n,spatialReference:r,location:i,sourceIndex:o,view:a}=e,{apiKey:s,url:c,zoomScale:l,defaultZoomScale:u}=n,d=a&&a.scale,f=t&&t.signal,h=new ve
return h.location=i,s&&(h.apiKey=s),r&&(h.outSpatialReference=r),async function(e,t,n){t=ve.from(t)
const r=Object(fe.c)(e),i={...t.toJSON(),f:"json"},o=Object(fe.b)({...r.query,...i}),a=Object(fe.a)(o,n),s=r.path+"/reverseGeocode"
return Object(de.default)(s,a).then(Ee)}(c,h,{signal:f}).then(e=>Re([e],{sourceIndex:o,scale:d,view:a,zoomScale:l,defaultZoomScale:u})).catch(()=>[])}(e,t):function(e,t){const{source:n,suggestResult:r,spatialReference:i,view:o,maxResults:a,sourceIndex:s}=e,c=n&&n.zoomScale,l=n&&n.defaultZoomScale
if(!r.text.trim())return Promise.resolve(null)
const u=!r.key&&n.prefix?n.prefix:"",d=!r.key&&n.suffix?n.suffix:"",f=`${u}${r.text}${d}`,h=new be,{apiKey:m,url:g}=n,b=o&&o.scale,y=Ie(n,o),O=t&&t.signal
if(m&&(h.apiKey=m),!g)return Promise.resolve(null)
n.categories&&(h.categories=n.categories),n.locationType&&(h.locationType=n.locationType),i&&(h.outSpatialReference=i)
const v=xe(o,n)
v&&(h.location=v),h.maxLocations=a,y&&(h.searchExtent=Object(p.u)(y)),n.countryCode&&(h.countryCode=n.countryCode)
const{key:E}=r,j=""+E
return E&&(h.magicKey=j),h.address={},h.address[n.singleLineFieldName||"Single Line Input"]=f,n.outFields&&(h.outFields=n.outFields),async function(e,t,n){t=be.from(t)
const r=Object(fe.c)(e),{address:i,...o}=t.toJSON(),a={...i,...o,f:"json"},s=Object(fe.b)({...r.query,...a}),c=Object(fe.a)(s,n),l=r.path+"/findAddressCandidates"
return Object(de.default)(l,c).then(ye)}(g,h,{signal:O}).then(e=>Re(e,{key:j,scale:b,sourceIndex:s,view:o,zoomScale:c,defaultZoomScale:l}))}(e,t)}({source:this,...e},t),this.getSuggestions=(e,t)=>function(e,t){const{source:n,spatialReference:r,view:i,suggestTerm:o,maxSuggestions:a,sourceIndex:s}=e,c=new we,{apiKey:l,url:u}=n,d=Ie(n,i),f=t&&t.signal
if(!u)return Promise.resolve(null)
l&&(c.apiKey=l),n.categories&&(c.categories=n.categories),r&&(c.outSpatialReference=r)
const h=xe(i,n)
if(h&&(c.location=h),!o.trim())return Promise.resolve(null)
const{prefix:m="",suffix:g=""}=n,b=`${m}${o}${g}`
return c.text=b,d&&(c.searchExtent=Object(p.u)(d)),c.maxSuggestions=a,n.countryCode&&(c.countryCode=n.countryCode),async function(e,t,n){const r=Object(fe.c)(e),i={...(t=we.from(t)).toJSON(),f:"json"},o=Object(fe.b)({...r.query,...i}),a=Object(fe.a)(o,n),s=r.path+"/suggest"
return Object(de.default)(s,a).then(Te)}(u,c,{signal:f}).then(e=>function(e,t){return e.map(e=>function(e,t){return{text:e.text,key:e.magicKey,sourceIndex:t}}(e,t))}(e,s))}({source:this,...e},t)}clone(){return new Ae({apiKey:this.apiKey,autoNavigate:this.autoNavigate,filter:this.filter,maxResults:this.maxResults,maxSuggestions:this.maxSuggestions,minSuggestCharacters:this.minSuggestCharacters,outFields:this.outFields?Object(T.a)(this.outFields):null,placeholder:this.placeholder,popupEnabled:this.popupEnabled,prefix:this.prefix,resultGraphicEnabled:this.resultGraphicEnabled,resultSymbol:this.resultSymbol?this.resultSymbol.clone():null,suggestionsEnabled:this.suggestionsEnabled,suffix:this.suffix,withinViewEnabled:this.withinViewEnabled,categories:this.categories?Object(T.a)(this.categories):null,countryCode:this.countryCode,locationType:this.locationType,searchTemplate:this.searchTemplate,singleLineFieldName:this.singleLineFieldName,zoomScale:this.zoomScale})}}
Object(r.a)([Object(b.b)()],Pe.prototype,"apiKey",void 0),Object(r.a)([Object(b.b)()],Pe.prototype,"categories",void 0),Object(r.a)([Object(b.b)()],Pe.prototype,"countryCode",void 0),Object(r.a)([Object(b.b)({json:{write:!0}})],Pe.prototype,"defaultZoomScale",void 0),Object(r.a)([Object(b.b)()],Pe.prototype,"localSearchDisabled",void 0),Object(r.a)([Object(b.b)()],Pe.prototype,"locationType",void 0),Object(r.a)([Object(b.b)({json:{write:!0}})],Pe.prototype,"name",void 0),Object(r.a)([Object(b.b)({json:{write:!0}})],Pe.prototype,"placeholder",void 0),Object(r.a)([Object(b.b)()],Pe.prototype,"searchTemplate",void 0),Object(r.a)([Object(b.b)({json:{write:!0}})],Pe.prototype,"singleLineFieldName",void 0),Object(r.a)([Object(b.b)({json:{read:{source:"suggest"},write:{target:"suggest"}}})],Pe.prototype,"suggestionsEnabled",void 0),Object(r.a)([Object(b.b)({json:{write:!0}})],Pe.prototype,"url",void 0),Object(r.a)([Object(b.b)({json:{write:!0}})],Pe.prototype,"zoomScale",void 0),Pe=Ae=Object(r.a)([Object(O.a)("esri.widgets.Search.LocatorSearchSource")],Pe)
const Me=Pe
var Ne=n(2242),De=n(1521),Le=n(1402),Fe=n(1065),Ue=n(1073),Ge=n(1239)
function ke(e,t){return e.hasOwnProperty(t)&&null!=e[t]&&""!==e[t]}const We="esri.widgets.Search.SearchViewModel",ze=h.a.getLogger(We),Ve="highlight",Be=l.a.ofType({key:e=>e.layer?"layer":"locator",base:R,typeMap:{layer:ue,locator:Me}}),qe=E.default.WGS84,He=/<(?:.|\s)*?>/g
let Je=class extends(Object(De.a)(d.a.EventedMixin(c.a))){constructor(e){super(e),this._handles=new f.a,this._gotoController=null,this._searching=null,this._createdFeatureLayers=[],this.autoNavigate=!0,this.autoSelect=!0,this.defaultPopupTemplate=null,this.defaultSources=new Be,this.defaultSymbols={point:new Le.a({url:Object(i.b)("esri/images/search/search-symbol-32.png"),size:24,width:24,height:24}),polyline:new Fe.a({color:[130,130,130,1],width:2}),polygon:new Ue.a({color:[235,235,235,.4],outline:{color:[130,130,130,1],width:2}})},this.includeDefaultSources=!0,this.maxInputLength=128,this.maxResults=6,this.maxSuggestions=6,this.messages=null,this.minSuggestCharacters=3,this.popupEnabled=!0,this.popupTemplate=null,this.portal=S.a.getDefault(),this.resultCount=null,this.resultGraphicEnabled=!0,this.resultGraphic=null,this.results=null,this.selectedSuggestion=null,this.searchAllEnabled=!0,this.selectedResult=null,this.sources=new Be,this.suggestionDelay=350,this.suggestionCount=null,this.suggestions=null,this.suggestionsEnabled=!0,this.view=null}initialize(){const e=async()=>{const e=await Object(_.a)("esri/widgets/Search/t9n/Search")
this.messages=e,this.defaultPopupTemplate=new s.default({title:e.searchResult,content:"{Match_addr}"})}
e(),this._handles.add([Object(g.f)(()=>[this.includeDefaultSources,this.view,this.portal],()=>this._update(),g.a),Object(j.c)(e)])}destroy(){this._destroyFeatureLayers(),this._abortGoTo(),this.clearGraphics(),this._handles.destroy(),this._handles=null}get activeSource(){var e
return null!=(e=this.allSources.at(this.activeSourceIndex))?e:null}get activeSourceIndex(){return 1!==this.allSources.length&&this.searchAllEnabled?-1:0}set activeSourceIndex(e){this._overrideIfSome("activeSourceIndex",e)}get allPlaceholder(){var e
return null==(e=this.messages)?void 0:e.allPlaceholder}set allPlaceholder(e){this._overrideIfSome("allPlaceholder",e)}get allSources(){const{sources:e,defaultSources:t,includeDefaultSources:n}=this,r="function"==typeof n?n.call(null,{sources:e,defaultSources:t}):n?t.concat(e):e,i=this._get("allSources")||new Be
return i.removeAll(),i.addMany(r.filter(Boolean)),i}get locationEnabled(){return this._get("locationEnabled")||Object(Ne.c)()}set locationEnabled(e){if(void 0===e)return void this._clearOverride("locationEnabled")
const t=Object(Ne.c)()
if(e&&!t){const e=new u.a("locationEnabled:geolocation-unsupported","Geolocation API is unsupported.",{geolocation:navigator.geolocation})
ze.error(e)}this._override("locationEnabled",!!e&&t)}get placeholder(){const{allSources:e,activeSourceIndex:t,allPlaceholder:n}=this
if(-1===t)return n
const r=e.at(t)
return r?r.placeholder:""}set searchTerm(e){this._set("searchTerm",e||""),this.clearGraphics(),this.selectedSuggestion&&this.selectedSuggestion.text!==e&&this._set("selectedSuggestion",null),""===e&&this._clear()}get searchTerm(){return this._get("searchTerm")||""}get state(){return this._searching?"searching":this.updating?"loading":0===this.allSources.length?"disabled":"ready"}get updating(){return null!=this._updatingPromise}clear(){this.searchTerm=""}clearGraphics(){this._removeHighlight(),this._closePopup(),this.view&&this.view.graphics.remove(this.resultGraphic),this._set("resultGraphic",null)}search(e,t){this.emit("search-start"),this.clearGraphics()
const n=this._createSuggestionForSearch(e),r=this.when().then(()=>this._getResultsFromSources(n,t).then(e=>{var r
if(null!=(r=Object(p.u)(null==t?void 0:t.signal))&&r.aborted)return null
const i={activeSourceIndex:this.activeSourceIndex,searchTerm:n.text,numResults:0,numErrors:0,errors:[],results:[]}
this._formatResponse(i,e,n)
const o=this._getFirstResult(i.results),a=(n.location&&o?o.name:n.text).replace(He,"")
return this._set("searchTerm",a),(n.key&&"number"==typeof n.sourceIndex||n.location)&&this._set("selectedSuggestion",n),this._set("results",i.results),this._set("resultCount",i.results.reduce((e,t)=>e+t.results.length,0)),this.emit("search-complete",i),this._selectFirstResult(o).then(()=>i)})).then(e=>(this._clearSearching(),e),e=>{throw this._clearSearching(),e})
return this._searching=r,r}searchNearby(e){if(!this.locationEnabled){const e=new u.a("searchNearby:geolocation-unsupported","Geolocation API is unsupported.",{geolocation:navigator.geolocation})
return ze.error(e),Promise.reject(e)}const t=Object(Ne.a)().then(t=>Object(Ne.b)({position:t,view:this.view},e)).then(t=>this.search(t,e))
return this._searching=t,t.catch(()=>{}).then(()=>this._clearSearching()),t}select(e){if(this.clearGraphics(),!e){const t=new u.a("select:missing-parameter","Cannot select without a searchResult.",{searchResult:e})
return ze.error(t),Promise.reject(t)}const{view:t}=this,n=ke(e,"sourceIndex")?e.sourceIndex:this._getSourceIndexOfResult(e),r=this.allSources.at(n)
if(!r){const e=new u.a("select:missing-source","Cannot select without a source.",{source:r})
return ze.error(e),Promise.reject(e)}const i=r instanceof ue?this._getLayerSourcePopupTemplate(r):r.popupTemplate,o=r.resultSymbol||this._getDefaultSymbol(e),s=ke(r,"resultGraphicEnabled")?r.resultGraphicEnabled:this.resultGraphicEnabled,c=ke(r,"autoNavigate")?r.autoNavigate:this.autoNavigate,l=ke(r,"popupEnabled")?r.popupEnabled:this.popupEnabled,d=l?i||this.popupTemplate||this.defaultPopupTemplate:null,{feature:f}=e
if(!f){const e=new u.a("select:missing-feature","Cannot select without a feature.",{feature:f})
return ze.error(e),Promise.reject(e)}const{attributes:h,geometry:g,layer:b,sourceLayer:y}=f,O=U(g),v={layerViewQuery:this._getLayerView(f),elevationQuery:t&&Object(p.l)(O)?F(O,t).catch(()=>O):Promise.resolve(O)}
return Object(m.g)(v).then(i=>{const u=i.layerViewQuery.value,m=i.elevationQuery.value
o instanceof Ge.a&&(o.text=e.name)
const O=t&&c?e.target||e.extent:null
return(Object(p.l)(O)?this._goToSearchResult(O):Promise.resolve()).then(()=>{var i
const c=u?f:new a.default({geometry:g,symbol:o,attributes:h,layer:b,sourceLayer:y,popupTemplate:d}),p=l&&(null==(i=this.view)?void 0:i.popup),O=p&&c.getEffectivePopupTemplate(p.defaultPopupTemplateEnabled)
return O&&t.popup.open({features:[c],location:m}),u&&Object(w.b)(u)&&!O&&this._highlightFeature({graphic:c,layerView:u}),!u&&s&&t&&t.graphics.push(c),this._setResultFloor(e),this._set("selectedResult",e),this._set("resultGraphic",c),this.emit("select-result",{result:e,source:r,sourceIndex:n}),e})})}suggest(e,t,n){const r=e||this.searchTerm
return this.emit("suggest-start",{searchTerm:r}),this._suggestTimer(t,n).then(()=>this._suggestImmediate(r,n).then(e=>(this._set("suggestions",e.results),this._set("suggestionCount",e.results.reduce((e,t)=>e+t.results.length,0)),this.emit("suggest-complete",e),e)))}async when(){await Object(g.h)(()=>!this.updating)}async _update(){const{portal:e,view:t}=this
if(this.includeDefaultSources){const n=this._updatingPromise=Object(m.g)([null==e?void 0:e.load(),null==t?void 0:t.when()])
if(this.destroyed)return
if(await n,n!==this._updatingPromise)return}await Object(g.h)(()=>this.messages),this.destroyed||this._updateDefaultSources(),this._updatingPromise=null}_clearSearching(){this._searching=null}_convertHelperServices(){var e,t
const n=null==(e=this.portal)||null==(t=e.helperServices)?void 0:t.geocode
return n?n.map(e=>{if(!1===e.placefinding)return
const t=o.default.apiKey&&Ce(e.url)?{url:"https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer"}:null,n=Me.fromJSON({...e,...t}),r=n.url
if(Ce(r)||function(e){return!!e&&/(?:\/servers\/[\da-z\.-]+\/rest\/services\/world\/geocodeserver).*/i.test(e)}(r)||function(e){return!!e&&/(?:geocode\-api\.arcgis\.com\/arcgis\/rest\/services\/world\/geocodeserver).*/i.test(e)}(r)){const e=n.outFields||["Addr_type","Match_addr","StAddr","City"],t=n.placeholder||this.messages.placeholder,r="number"==typeof n.defaultZoomScale?n.defaultZoomScale:2500
n.set({singleLineFieldName:"SingleLine",outFields:e,placeholder:t,defaultZoomScale:r})}return n.singleLineFieldName?n:void 0}).filter(Boolean):[]}_destroyFeatureLayers(){this._createdFeatureLayers.forEach(e=>null==e?void 0:e.destroy()),this._createdFeatureLayers=[]}_getLayerSources(e,t){var n
const r=null==(n=this.view)?void 0:n.map
return e.map(e=>{const n=r.findLayerById(e.id)
if(!n)return
const i=this._getLayerJSON(e),o=ue.fromJSON(i)
return o.placeholder=t,this._getLayer(n,i).then(e=>{o.layer=e}),o}).filter(Boolean).toArray()}_getTableSources(e,t){var n
const r=null==(n=this.view)?void 0:n.map
return e.map(e=>{const n=r.findTableById(e.id)
if(!n)return
const i=this._getLayerJSON(e),o=ue.fromJSON(i)
return o.placeholder=t,this._getLayer(n,i).then(e=>{o.layer=e}),o}).filter(Boolean).toArray()}_convertApplicationProperties(){var e,t,n
const r=null==(e=this.view)?void 0:e.map,i=null==r||null==(t=r.applicationProperties)||null==(n=t.viewing)?void 0:n.search
if(!i)return[]
const{enabled:o,hintText:a,layers:s,tables:c}=i
return o?[...this._getLayerSources(s,a),...this._getTableSources(c,a)]:[]}async _getSubLayer(e,t){if(await e.load(),!e.allSublayers)throw new Error
const n=e.allSublayers.find(e=>e.id===t.subLayer)
if(!n)throw new Error
const r=await n.createFeatureLayer()
return this._createdFeatureLayers.push(r),r}async _getBuildingSubLayer(e,t){await e.load()
const n=e.allSublayers.find(e=>e.id===t.subLayer)
if("building-component"!==(null==n?void 0:n.type))throw new Error
if(await n.load(),null==n.associatedLayer)throw new Error
return await n.associatedLayer.load(),n}_getLayer(e,t){return"feature"===e.type||"scene"===e.type||"csv"===e.type||"geojson"===e.type||"ogc-feature"===e.type?Promise.resolve(e):"map-image"===e.type?this._getSubLayer(e,t).catch(()=>{const t=new u.a("search:create-featurelayer","Could not create a FeatureLayer from the MapImageLayer",{layer:e})
return ze.error(t),null}):"building-scene"===e.type?this._getBuildingSubLayer(e,t):Promise.resolve(null)}_getLayerJSON(e){return"function"==typeof e.toJSON?e.toJSON():e}_updateDefaultSources(){const{defaultSources:e,includeDefaultSources:t}=this
this._destroyFeatureLayers(),e.removeAll(),t&&e.addMany([...this._convertApplicationProperties(),...this._convertHelperServices()])}_abortGoTo(){this._gotoController&&this._gotoController.abort(),this._gotoController=null}_clear(){this._abortGoTo(),this._set("resultCount",null),this._set("results",null),this._set("suggestions",null),this._set("suggestionCount",null),this._set("selectedResult",null),this._set("selectedSuggestion",null),this.emit("search-clear")}_closePopup(){var e
const t=null==(e=this.view)?void 0:e.popup,{resultGraphic:n}=this
if(!t||!n)return
const{selectedFeature:r}=t
r&&r===n&&t.close()}_suggestTimer(e,t){const n=null!=e?e:this.suggestionDelay
return Object(m.a)(n,null,t&&t.signal)}_createLocationForSearch(e){return e instanceof a.default?U(e.geometry):e instanceof v.a?e:Array.isArray(e)&&2===e.length?new v.a({longitude:e[0],latitude:e[1]}):null}_createSuggestionForSearch(e){if(e&&ke(e,"key")&&ke(e,"text")&&ke(e,"sourceIndex"))return e
const t=this._createLocationForSearch(e),n="string"==typeof e?e:this.searchTerm,{selectedSuggestion:r,selectedResult:i}=this,o=!e&&r&&i,a=o&&r.key===i.key&&r.sourceIndex===i.sourceIndex,s=o&&r.location
return a||s?r:{location:Object(p.u)(t),text:t?"":n,sourceIndex:null,key:null}}_getFirstResult(e){let t=null
return e&&e.some(e=>{const{results:n}=e,r=n[0],i=!!r
return i&&(t=r),i}),t}_selectFirstResult(e){return this.autoSelect&&e?this.select(e):Promise.resolve(null)}_suggestImmediate(e,t){return this.when().then(()=>this._getSuggestionsFromSources(e,t)).then(n=>{var r
if(null!=(r=Object(p.u)(null==t?void 0:t.signal))&&r.aborted)return null
const i={activeSourceIndex:this.activeSourceIndex,searchTerm:e,numResults:0,numErrors:0,errors:[],results:[]}
return this._formatResponse(i,n),i})}_formatSourceResponse(e,t,n){const r=t&&t.value||[],i=t&&t.error,o=this.allSources.at(n)
if(i){const t={sourceIndex:n,source:o,error:i}
e.errors.push(t),ze.error(i),e.numErrors++}else{const t={sourceIndex:n,source:o,results:r}
e.results.push(t),e.numResults+=r.length}}_formatResponse(e,t,n){if(t)if(-1===e.activeSourceIndex){const r=n&&ke(n,"sourceIndex")&&-1!==n.sourceIndex?n.sourceIndex:void 0
t.forEach((t,n)=>{const i=void 0!==r?r:n
this._formatSourceResponse(e,t,i)})}else this._formatSourceResponse(e,t[0],e.activeSourceIndex)}_getResultsFromSources(e,t){const{allSources:n}=this,r=!e.location&&ke(e,"sourceIndex")?e.sourceIndex:this.activeSourceIndex,i=[]
if(!n.length){const e=new u.a("search:no-sources-defined","At least one source is required.",{allSources:n})
return ze.error(e),Promise.reject(e)}return-1===r?n.forEach((n,r)=>{i.push(this._getResultsFromSource(e,r,t))}):i.push(this._getResultsFromSource(e,r,t)),Object(m.g)(i)}_getSuggestionsFromSources(e,t){const{allSources:n,activeSourceIndex:r}=this,i=[]
if(!n.length){const e=new u.a("suggest:no-sources-defined","At least one source is required.",{allSources:n})
return ze.error(e),Promise.reject(e)}return-1===r?n.forEach((n,r)=>{i.push(this._getSuggestionsFromSource(e,r,t))}):i.push(this._getSuggestionsFromSource(e,r,t)),Object(m.g)(i)}_getResultsFromSource(e,t,n){var r
const i=this.allSources.at(t),{location:o=null}=e,a=(null==(r=this.view)?void 0:r.spatialReference)||qe,s=ke(i,"maxResults")?i.maxResults:this.maxResults,c=!!(i instanceof ue&&ke(i,"exactMatch"))&&i.exactMatch,{view:l}=this
return i.getResults({view:l,sourceIndex:t,location:o,suggestResult:e,spatialReference:a,exactMatch:c,maxResults:s},n)}_getSuggestionsFromSource(e,t,n){const r=this.allSources.at(t),i=ke(r,"suggestionsEnabled")?r.suggestionsEnabled:this.suggestionsEnabled,o=e.length,a=ke(r,"minSuggestCharacters")?r.minSuggestCharacters:this.minSuggestCharacters
if(i&&e.trim()&&o>=a){var s
const i=(null==(s=this.view)?void 0:s.spatialReference)||qe,o=ke(r,"maxSuggestions")?r.maxSuggestions:this.maxSuggestions,{view:a}=this,c=!!(r instanceof ue&&ke(r,"exactMatch"))&&r.exactMatch
return r.getSuggestions({view:a,sourceIndex:t,suggestTerm:e,spatialReference:i,maxSuggestions:o,exactMatch:c},n)}return Promise.resolve(null)}_getLayerSourcePopupTemplate(e){const{layer:t}=e
if(t)return ke(e,"popupTemplate")?e.popupTemplate:t.popupTemplate}_getSourceIndexOfResult(e){const t=this.results
let n=null
return t.some(t=>t.results.some(r=>r===e&&(n=t.sourceIndex,!0))),n}async _goToSearchResult(e){const t=!!e
this._abortGoTo()
const n=new AbortController
this._gotoController=n
const r={target:{target:e},options:{animate:t,signal:n.signal}}
await this.callGoTo(r),this._gotoController=null}_getDefaultSymbol(e){var t
const{defaultSymbols:n}=this,r=null==(t=e.feature)?void 0:t.geometry
if(Object(p.k)(r))return null
switch(r.type){case"point":case"multipoint":return n.point
case"polyline":return n.polyline
case"extent":case"polygon":return n.polygon
default:return null}}_removeHighlight(){this._handles.remove(Ve)}async _getLayerView(e){const{view:t}=this
if(!e||!t||"building-component"===e.layer.type||"subtype-sublayer"===e.layer.type)return null
const{layer:n}=e
return await t.when(),t.whenLayerView(n)}_highlightFeature(e){const{graphic:t,layerView:n}=e,{attributes:r,layer:i}=t,{objectIdField:o}=i,a=r&&r[o],s=n.highlight(a||t)
this._handles.add(s,Ve)}_setResultFloor(e){var t,n,r
const{view:i}=this,o=null==(t=e.feature)?void 0:t.attributes,a=null==(n=e.feature)?void 0:n.sourceLayer
if(a&&"floorInfo"in a&&null!=a&&null!=(r=a.floorInfo)&&r.floorField&&o){const e=o[a.floorInfo.floorField]
null==i||i.emit("select-result-floor",e)}}}
Je.ALL_INDEX=-1,Object(r.a)([Object(b.b)()],Je.prototype,"_searching",void 0),Object(r.a)([Object(b.b)()],Je.prototype,"_updatingPromise",void 0),Object(r.a)([Object(b.b)({readOnly:!0,value:null})],Je.prototype,"activeSource",null),Object(r.a)([Object(b.b)()],Je.prototype,"activeSourceIndex",null),Object(r.a)([Object(b.b)()],Je.prototype,"allPlaceholder",null),Object(r.a)([Object(b.b)({readOnly:!0})],Je.prototype,"allSources",null),Object(r.a)([Object(b.b)()],Je.prototype,"autoNavigate",void 0),Object(r.a)([Object(b.b)()],Je.prototype,"autoSelect",void 0),Object(r.a)([Object(b.b)()],Je.prototype,"defaultPopupTemplate",void 0),Object(r.a)([Object(b.b)({readOnly:!0})],Je.prototype,"defaultSources",void 0),Object(r.a)([Object(b.b)()],Je.prototype,"defaultSymbols",void 0),Object(r.a)([Object(b.b)()],Je.prototype,"includeDefaultSources",void 0),Object(r.a)([Object(b.b)()],Je.prototype,"locationEnabled",null),Object(r.a)([Object(b.b)()],Je.prototype,"maxInputLength",void 0),Object(r.a)([Object(b.b)()],Je.prototype,"maxResults",void 0),Object(r.a)([Object(b.b)()],Je.prototype,"maxSuggestions",void 0),Object(r.a)([Object(b.b)()],Je.prototype,"messages",void 0),Object(r.a)([Object(b.b)()],Je.prototype,"minSuggestCharacters",void 0),Object(r.a)([Object(b.b)({readOnly:!0})],Je.prototype,"placeholder",null),Object(r.a)([Object(b.b)()],Je.prototype,"popupEnabled",void 0),Object(r.a)([Object(b.b)({type:s.default})],Je.prototype,"popupTemplate",void 0),Object(r.a)([Object(b.b)({type:S.a})],Je.prototype,"portal",void 0),Object(r.a)([Object(b.b)()],Je.prototype,"resultCount",void 0),Object(r.a)([Object(b.b)()],Je.prototype,"resultGraphicEnabled",void 0),Object(r.a)([Object(b.b)({readOnly:!0})],Je.prototype,"resultGraphic",void 0),Object(r.a)([Object(b.b)({readOnly:!0})],Je.prototype,"results",void 0),Object(r.a)([Object(b.b)({readOnly:!0})],Je.prototype,"selectedSuggestion",void 0),Object(r.a)([Object(b.b)()],Je.prototype,"searchAllEnabled",void 0),Object(r.a)([Object(b.b)({readOnly:!0})],Je.prototype,"selectedResult",void 0),Object(r.a)([Object(b.b)()],Je.prototype,"searchTerm",null),Object(r.a)([Object(b.b)({type:Be})],Je.prototype,"sources",void 0),Object(r.a)([Object(b.b)({readOnly:!0})],Je.prototype,"state",null),Object(r.a)([Object(b.b)()],Je.prototype,"suggestionDelay",void 0),Object(r.a)([Object(b.b)()],Je.prototype,"suggestionCount",void 0),Object(r.a)([Object(b.b)({readOnly:!0})],Je.prototype,"suggestions",void 0),Object(r.a)([Object(b.b)()],Je.prototype,"suggestionsEnabled",void 0),Object(r.a)([Object(b.b)({readOnly:!0})],Je.prototype,"updating",null),Object(r.a)([Object(b.b)()],Je.prototype,"view",void 0),Object(r.a)([Object(b.b)()],Je.prototype,"clear",null),Je=Object(r.a)([Object(O.a)(We)],Je)
const Ze=Je},769:function(e,t,n){"use strict"
n.r(t),n.d(t,"default",(function(){return p}))
var r,i=n(968),o=n(972),a=n(234),s=n(997),c=n(971),l=n(970),u=n(969),d=n(974),f=n(988)
let h=r=class extends o.a{static fromJSON(e){if(!e)return null
if(e.wkid){if(102100===e.wkid)return r.WebMercator
if(4326===e.wkid)return r.WGS84}const t=new r
return t.read(e),t}constructor(e){super(e),this.latestWkid=null,this.wkid=null,this.wkt=null,this.vcsWkid=null,this.latestVcsWkid=null,this.imageCoordinateSystem=null}normalizeCtorArgs(e){return e&&"object"==typeof e?e:{["string"==typeof e?"wkt":"wkid"]:e}}get isWGS84(){return Object(f.m)(this)}get isWebMercator(){return Object(f.p)(this)}get isGeographic(){return Object(f.h)(this)}get isWrappable(){return Object(f.q)(this)}get metersPerUnit(){return Object(s.g)(this)}get unit(){return Object(s.i)(this)||(this.isGeographic?"degrees":null)}writeWkt(e,t){this.wkid||(t.wkt=e)}clone(){if(this===r.WGS84)return r.WGS84
if(this===r.WebMercator)return r.WebMercator
const e=new r
return null!=this.wkid?(e.wkid=this.wkid,null!=this.latestWkid&&(e.latestWkid=this.latestWkid),null!=this.vcsWkid&&(e.vcsWkid=this.vcsWkid),null!=this.latestVcsWkid&&(e.latestVcsWkid=this.latestVcsWkid)):null!=this.wkt&&(e.wkt=this.wkt),this.imageCoordinateSystem&&(e.imageCoordinateSystem=Object(a.a)(this.imageCoordinateSystem)),e}equals(e){if(null==e)return!1
if(this.imageCoordinateSystem||e.imageCoordinateSystem){if(null==this.imageCoordinateSystem||null==e.imageCoordinateSystem)return!1
const{id:t,referenceServiceName:n}=e.imageCoordinateSystem,{geodataXform:r}=e.imageCoordinateSystem,i=this.imageCoordinateSystem
return null==t||r?JSON.stringify(i)===JSON.stringify(e.imageCoordinateSystem):n?i.id===t&&i.referenceServiceName===n:i.id===t}return Object(f.d)(this,e)}toJSON(e){return this.write(void 0,e)}}
h.GCS_NAD_1927=null,h.WGS84=null,h.WebMercator=null,h.PlateCarree=null,Object(i.a)([Object(l.b)({readOnly:!0})],h.prototype,"isWGS84",null),Object(i.a)([Object(l.b)({readOnly:!0})],h.prototype,"isWebMercator",null),Object(i.a)([Object(l.b)({readOnly:!0})],h.prototype,"isGeographic",null),Object(i.a)([Object(l.b)({readOnly:!0})],h.prototype,"isWrappable",null),Object(i.a)([Object(l.b)({type:c.a,json:{write:!0}})],h.prototype,"latestWkid",void 0),Object(i.a)([Object(l.b)({readOnly:!0})],h.prototype,"metersPerUnit",null),Object(i.a)([Object(l.b)({readOnly:!0})],h.prototype,"unit",null),Object(i.a)([Object(l.b)({type:c.a,json:{write:!0,origins:{"web-scene":{write:{overridePolicy(){return{isRequired:null===this.wkt}}}}}}})],h.prototype,"wkid",void 0),Object(i.a)([Object(l.b)({type:String,json:{origins:{"web-scene":{write:{overridePolicy(){return{isRequired:null===this.wkid}}}}}}})],h.prototype,"wkt",void 0),Object(i.a)([Object(d.a)("wkt"),Object(d.a)("web-scene","wkt")],h.prototype,"writeWkt",null),Object(i.a)([Object(l.b)({type:c.a,json:{write:!0}})],h.prototype,"vcsWkid",void 0),Object(i.a)([Object(l.b)({type:c.a,json:{write:!0}})],h.prototype,"latestVcsWkid",void 0),Object(i.a)([Object(l.b)()],h.prototype,"imageCoordinateSystem",void 0),h=r=Object(i.a)([Object(u.a)("esri.geometry.SpatialReference")],h),h.prototype.toJSON.isDefaultToJSON=!0,h.GCS_NAD_1927=new h({wkid:4267,wkt:'GEOGCS["GCS_North_American_1927",DATUM["D_North_American_1927",SPHEROID["Clarke_1866",6378206.4,294.9786982]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]]'}),h.WGS84=new h(f.b),h.WebMercator=new h(f.c),h.PlateCarree=new h(f.a),Object.freeze&&(Object.freeze(h.GCS_NAD_1927),Object.freeze(h.WGS84),Object.freeze(h.WebMercator))
const p=h},770:function(e,t,n){"use strict"
n.r(t),n.d(t,"default",(function(){return y}))
var r,i=n(968),o=n(23),a=n(447),s=n(970),c=(n(971),n(445),n(969)),l=n(1004),u=n(992),d=n(769),f=n(1085),h=n(1118),p=n(988),m=n(774)
function g(e,t,n){return null==t?n:null==n?t:e(t,n)}let b=r=class extends l.a{constructor(...e){super(...e),this.type="extent",this.xmin=0,this.ymin=0,this.mmin=void 0,this.zmin=void 0,this.xmax=0,this.ymax=0,this.mmax=void 0,this.zmax=void 0}normalizeCtorArgs(e,t,n,r,i){return function(e){return e&&("esri.geometry.SpatialReference"===e.declaredClass||null!=e.wkid)}(e)?{spatialReference:e,xmin:0,ymin:0,xmax:0,ymax:0}:"object"==typeof e?(e.spatialReference=null==e.spatialReference?d.default.WGS84:e.spatialReference,e):{xmin:e,ymin:t,xmax:n,ymax:r,spatialReference:null!=i?i:d.default.WGS84}}static fromBounds(e,t){return new r({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:t})}static fromPoint(e){return new r({xmin:e.x,ymin:e.y,zmin:e.z,xmax:e.x,ymax:e.y,zmax:e.z,spatialReference:e.spatialReference})}get cache(){return this.commitProperty("xmin"),this.commitProperty("ymin"),this.commitProperty("zmin"),this.commitProperty("mmin"),this.commitProperty("xmax"),this.commitProperty("ymax"),this.commitProperty("zmax"),this.commitProperty("mmax"),this.commitProperty("spatialReference"),{}}get center(){const e=new u.a({x:.5*(this.xmin+this.xmax),y:.5*(this.ymin+this.ymax),spatialReference:this.spatialReference})
return this.hasZ&&(e.z=.5*(this.zmin+this.zmax)),this.hasM&&(e.m=.5*(this.mmin+this.mmax)),e}get extent(){return this.clone()}get hasM(){return null!=this.mmin&&null!=this.mmax}get hasZ(){return null!=this.zmin&&null!=this.zmax}get height(){return Math.abs(this.ymax-this.ymin)}get width(){return Math.abs(this.xmax-this.xmin)}centerAt(e){const t=this.center
return null!=e.z&&this.hasZ?this.offset(e.x-t.x,e.y-t.y,e.z-t.z):this.offset(e.x-t.x,e.y-t.y)}clone(){const e=new r
return e.xmin=this.xmin,e.ymin=this.ymin,e.xmax=this.xmax,e.ymax=this.ymax,e.spatialReference=this.spatialReference,null!=this.zmin&&(e.zmin=this.zmin,e.zmax=this.zmax),null!=this.mmin&&(e.mmin=this.mmin,e.mmax=this.mmax),e}contains(e){if(!e)return!1
const t=this.spatialReference,n=e.spatialReference
return t&&n&&!t.equals(n)&&Object(m.canProject)(t,n)&&(e=t.isWebMercator?Object(m.geographicToWebMercator)(e):Object(m.webMercatorToGeographic)(e,!0)),"point"===e.type?Object(f.e)(this,e):"extent"===e.type&&Object(f.c)(this,e)}equals(e){if(this===e)return!0
if(Object(o.k)(e))return!1
const t=this.spatialReference,n=e.spatialReference
return t&&n&&!t.equals(n)&&Object(m.canProject)(t,n)&&(e=t.isWebMercator?Object(m.geographicToWebMercator)(e):Object(m.webMercatorToGeographic)(e,!0)),this.xmin===e.xmin&&this.ymin===e.ymin&&this.zmin===e.zmin&&this.mmin===e.mmin&&this.xmax===e.xmax&&this.ymax===e.ymax&&this.zmax===e.zmax&&this.mmax===e.mmax}expand(e){const t=.5*(1-e),n=this.width*t,r=this.height*t
if(this.xmin+=n,this.ymin+=r,this.xmax-=n,this.ymax-=r,this.hasZ){const e=(this.zmax-this.zmin)*t
this.zmin+=e,this.zmax-=e}if(this.hasM){const e=(this.mmax-this.mmin)*t
this.mmin+=e,this.mmax-=e}return this}intersects(e){if(Object(o.k)(e))return!1
"mesh"===e.type&&(e=e.extent)
const t=this.spatialReference,n=e.spatialReference
return t&&n&&!Object(p.d)(t,n)&&Object(m.canProject)(t,n)&&(e=t.isWebMercator?Object(m.geographicToWebMercator)(e):Object(m.webMercatorToGeographic)(e,!0)),Object(h.c)(e.type)(this,e)}normalize(){const e=this._normalize(!1,!0)
return Array.isArray(e)?e:[e]}offset(e,t,n){return this.xmin+=e,this.ymin+=t,this.xmax+=e,this.ymax+=t,null!=n&&(this.zmin+=n,this.zmax+=n),this}shiftCentralMeridian(){return this._normalize(!0)}union(e){return this===e||(this.xmin=Math.min(this.xmin,e.xmin),this.ymin=Math.min(this.ymin,e.ymin),this.xmax=Math.max(this.xmax,e.xmax),this.ymax=Math.max(this.ymax,e.ymax),(this.hasZ||e.hasZ)&&(this.zmin=g(Math.min,this.zmin,e.zmin),this.zmax=g(Math.max,this.zmax,e.zmax)),(this.hasM||e.hasM)&&(this.mmin=g(Math.min,this.mmin,e.mmin),this.mmax=g(Math.max,this.mmax,e.mmax))),this}intersection(e){return this===e?this:Object(o.k)(e)||!this.intersects(e)?null:(this.xmin=Math.max(this.xmin,e.xmin),this.ymin=Math.max(this.ymin,e.ymin),this.xmax=Math.min(this.xmax,e.xmax),this.ymax=Math.min(this.ymax,e.ymax),(this.hasZ||e.hasZ)&&(this.zmin=g(Math.max,this.zmin,e.zmin),this.zmax=g(Math.min,this.zmax,e.zmax)),(this.hasM||e.hasM)&&(this.mmin=g(Math.max,this.mmin,e.mmin),this.mmax=g(Math.min,this.mmax,e.mmax)),this)}toJSON(e){return this.write({},e)}_shiftCM(e=Object(p.e)(this.spatialReference)){if(!e||!this.spatialReference)return this
const t=this.spatialReference,n=this._getCM(e)
if(n){var r
const i=t.isWebMercator?Object(m.webMercatorToGeographic)(n):n
this.xmin-=n.x,this.xmax-=n.x,t.isWebMercator||(i.x=this._normalizeX(i.x,e).x),this.spatialReference=new d.default(Object(a.c)(null!=(r=t.isWGS84?e.altTemplate:null)?r:e.wkTemplate,{Central_Meridian:i.x}))}return this}_getCM(e){let t=null
const[n,r]=e.valid,i=this.xmin,o=this.xmax
return i>=n&&i<=r&&o>=n&&o<=r||(t=this.center),t}_normalize(e,t,n){const r=this.spatialReference
if(!r)return this
const i=null!=n?n:Object(p.e)(r)
if(null==i)return this
const o=this._getParts(i).map(e=>e.extent)
if(o.length<2)return o[0]||this
if(o.length>2)return e?this._shiftCM(i):this.set({xmin:i.valid[0],xmax:i.valid[1]})
if(e)return this._shiftCM(i)
if(t)return o
let a=!0,s=!0
return o.forEach(e=>{e.hasZ||(a=!1),e.hasM||(s=!1)}),{rings:o.map(e=>{const t=[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]
if(a){const n=(e.zmax-e.zmin)/2
for(let e=0;e<t.length;e++)t[e].push(n)}if(s){const n=(e.mmax-e.mmin)/2
for(let e=0;e<t.length;e++)t[e].push(n)}return t}),hasZ:a,hasM:s,spatialReference:r}}_getParts(e){let t=this.cache._parts
if(!t){t=[]
const{ymin:n,ymax:i,spatialReference:o}=this,a=this.width,s=this.xmin,c=this.xmax
let l
e=e||Object(p.e)(o)
const[u,d]=e.valid
l=this._normalizeX(this.xmin,e)
const f=l.x,h=l.frameId
l=this._normalizeX(this.xmax,e)
const m=l.x,g=l.frameId,b=f===m&&a>0
if(a>2*d){const e=new r(s<c?f:m,n,d,i,o),a=new r(u,n,s<c?m:f,i,o),l=new r(0,n,d,i,o),p=new r(u,n,0,i,o),b=[],y=[]
e.contains(l)&&b.push(h),e.contains(p)&&y.push(h),a.contains(l)&&b.push(g),a.contains(p)&&y.push(g)
for(let e=h+1;e<g;e++)b.push(e),y.push(e)
t.push({extent:e,frameIds:[h]},{extent:a,frameIds:[g]},{extent:l,frameIds:b},{extent:p,frameIds:y})}else f>m||b?t.push({extent:new r(f,n,d,i,o),frameIds:[h]},{extent:new r(u,n,m,i,o),frameIds:[g]}):t.push({extent:new r(f,n,m,i,o),frameIds:[h]})
this.cache._parts=t}const n=this.hasZ,i=this.hasM
if(n||i){const e={}
n&&(e.zmin=this.zmin,e.zmax=this.zmax),i&&(e.mmin=this.mmin,e.mmax=this.mmax)
for(let n=0;n<t.length;n++)t[n].extent.set(e)}return t}_normalizeX(e,t){const[n,r]=t.valid,i=2*r
let o,a=0
return e>r?(o=Math.ceil(Math.abs(e-r)/i),e-=o*i,a=o):e<n&&(o=Math.ceil(Math.abs(e-n)/i),e+=o*i,a=-o),{x:e,frameId:a}}}
Object(i.a)([Object(s.b)({readOnly:!0})],b.prototype,"cache",null),Object(i.a)([Object(s.b)({readOnly:!0})],b.prototype,"center",null),Object(i.a)([Object(s.b)({readOnly:!0})],b.prototype,"extent",null),Object(i.a)([Object(s.b)({readOnly:!0,json:{write:{enabled:!1,overridePolicy:null}}})],b.prototype,"hasM",null),Object(i.a)([Object(s.b)({readOnly:!0,json:{write:{enabled:!1,overridePolicy:null}}})],b.prototype,"hasZ",null),Object(i.a)([Object(s.b)({readOnly:!0})],b.prototype,"height",null),Object(i.a)([Object(s.b)({readOnly:!0})],b.prototype,"width",null),Object(i.a)([Object(s.b)({type:Number,json:{type:[Number,String],write:{enabled:!0,allowNull:!0}}})],b.prototype,"xmin",void 0),Object(i.a)([Object(s.b)({type:Number,json:{write:!0}})],b.prototype,"ymin",void 0),Object(i.a)([Object(s.b)({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasM}}}}})],b.prototype,"mmin",void 0),Object(i.a)([Object(s.b)({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasZ}}}}})],b.prototype,"zmin",void 0),Object(i.a)([Object(s.b)({type:Number,json:{write:!0}})],b.prototype,"xmax",void 0),Object(i.a)([Object(s.b)({type:Number,json:{write:!0}})],b.prototype,"ymax",void 0),Object(i.a)([Object(s.b)({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasM}}}}})],b.prototype,"mmax",void 0),Object(i.a)([Object(s.b)({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasZ}}}}})],b.prototype,"zmax",void 0),b=r=Object(i.a)([Object(c.a)("esri.geometry.Extent")],b),b.prototype.toJSON.isDefaultToJSON=!0
const y=b},771:function(e,t,n){"use strict"
n.r(t),n.d(t,"default",(function(){return p}))
var r=n(110),i=n(196),o=n(446),a=n(235),s=n(234),c=n(23),l=n(973),u=n(374),d=n(198),f=n(1146),h=n(1229)
async function p(e,t){var s
const d=Object(u.z)(e),y=Object(u.y)(e)
y||d||(e=Object(u.I)(e))
const O={url:e,requestOptions:{...Object(c.u)(t)}}
let v=Object(u.o)(e)
if(v){const e=await async function(e,t){if(null!=e.responseData)return e.responseData
if(e.headers&&(t.requestOptions.headers={...t.requestOptions.headers,...e.headers}),e.query&&(t.requestOptions.query={...t.requestOptions.query,...e.query}),e.before){let n,r
try{r=await e.before(t)}catch(e){n=S("request:interceptor",e,t)}if((r instanceof Error||r instanceof o.a)&&(n=S("request:interceptor",r,t)),n)throw e.error&&e.error(n),n
return r}}(v,O)
if(null!=e)return{data:e,getHeader:E,httpStatus:200,requestOptions:O.requestOptions,url:O.url}
v.after||v.error||(v=null)}if(e=O.url,"image"===(t=O.requestOptions).responseType){if(Object(a.a)("host-webworker")||Object(a.a)("host-node"))throw S("request:invalid-parameters",new Error("responseType 'image' is not supported in Web Workers or Node environment"),O)}else if(d)throw S("request:invalid-parameters",new Error("Data URLs are not supported for responseType = "+t.responseType),O)
if("head"===t.method){if(t.body)throw S("request:invalid-parameters",new Error("body parameter cannot be set when method is 'head'"),O)
if(d||y)throw S("request:invalid-parameters",new Error("data and blob URLs are not supported for method 'head'"),O)}if(await async function(){Object(a.a)("host-webworker")?m||(m=await n.e(760).then(n.bind(null,1482))):p._abortableFetch||(p._abortableFetch=globalThis.fetch.bind(globalThis))}(),m)return m.execute(e,t)
const j=new AbortController
Object(l.n)(t,()=>j.abort())
const _={controller:j,credential:void 0,credentialToken:void 0,fetchOptions:void 0,hasToken:!1,interceptor:v,params:O,redoRequest:!1,useIdentity:g.useIdentity,useProxy:!1,useSSL:!1,withCredentials:!1},C=await async function(e){var t,n
let o,a
await async function(e){var t,n
const o=e.params.url,a=e.params.requestOptions,s=e.controller.signal,c=a.body
let u=null,d=null
if(b&&"HTMLFormElement"in globalThis&&(c instanceof FormData?u=c:c instanceof HTMLFormElement&&(u=new FormData(c))),"string"==typeof c&&(d=c),e.fetchOptions={cache:a.cacheBust&&!p._abortableFetch.polyfill?"no-cache":"default",credentials:"same-origin",headers:a.headers||{},method:"head"===a.method?"HEAD":"GET",mode:"cors",priority:g.priority,redirect:"follow",signal:s},(u||d)&&(e.fetchOptions.body=u||d),"anonymous"===a.authMode&&(e.useIdentity=!1),e.hasToken=!!(/token=/i.test(o)||null!=(t=a.query)&&t.token||null!=(n=u)&&n.get("token")),!e.hasToken&&r.default.apiKey&&Object(f.a)(o)&&(a.query||(a.query={}),a.query.token=r.default.apiKey,e.hasToken=!0),e.useIdentity&&!e.hasToken&&!e.credentialToken&&!T(o)&&!Object(l.k)(s)){let t
"immediate"===a.authMode?(await w(),t=await i.b.getCredential(o,{signal:s}),e.credential=t):"no-prompt"===a.authMode?(await w(),t=await i.b.getCredential(o,{prompt:!1,signal:s}).catch(()=>{}),e.credential=t):i.b&&(t=i.b.findCredential(o)),t&&(e.credentialToken=t.token,e.useSSL=!!t.ssl)}}(e)
try{do{[o,a]=await x(e)}while(!await I(e,o,a))}catch(t){const n=S("request:server",t,e.params,o)
throw n.details.ssl=e.useSSL,e.interceptor&&e.interceptor.error&&e.interceptor.error(n),n}const s=e.params.url
if(a&&/\/sharing\/rest\/(accounts|portals)\/self/i.test(s)){var c
if(!e.hasToken&&!e.credentialToken&&null!=(c=a.user)&&c.username&&!Object(u.D)(s)){const e=Object(u.p)(s,!0)
e&&g.trustedServers.push(e)}Array.isArray(a.authorizedCrossOriginNoCorsDomains)&&Object(h.c)(a.authorizedCrossOriginNoCorsDomains)}const d=e.credential
if(d&&i.b){const e=i.b.findServerInfo(d.server)
let t=e&&e.owningSystemUrl
if(t){t=t.replace(/\/?$/,"/sharing")
const e=i.b.findCredential(t,d.userId)
e&&-1===i.b._getIdenticalSvcIdx(t,e)&&e.resources.unshift(t)}}return{data:a,getHeader:o?e=>{var t
return null==(t=o)?void 0:t.headers.get(e)}:E,httpStatus:null!=(t=null==(n=o)?void 0:n.status)?t:200,requestOptions:e.params.requestOptions,ssl:e.useSSL,url:e.params.url}}(_)
return null!=(s=v)&&null!=s.after&&s.after(C),C}let m
const g=r.default.request,b="FormData"in globalThis,y=[499,498,403,401],O=["COM_0056","COM_0057","SB_0008"],v=[/\/arcgis\/tokens/i,/\/sharing(\/rest)?\/generatetoken/i,/\/rest\/info/i],E=()=>null,j=Symbol()
function _(e){const t=Object(u.p)(e)
return!t||t.endsWith(".arcgis.com")||p._corsServers.includes(t)||Object(u.D)(t)}function S(e,t,n,r){let i="Error"
const a={url:n.url,requestOptions:n.requestOptions,getHeader:E,ssl:!1}
if(t instanceof o.a)return t.details?(t.details=Object(s.a)(t.details),t.details.url=n.url,t.details.requestOptions=n.requestOptions):t.details=a,t
if(t){const e=r&&(e=>r.headers.get(e)),n=r&&r.status,o=t.message
o&&(i=o),e&&(a.getHeader=e),a.httpStatus=(null!=t.httpCode?t.httpCode:t.code)||n||0,a.subCode=t.subcode,a.messageCode=t.messageCode,"string"==typeof t.details?a.messages=[t.details]:a.messages=t.details,a.raw=j in t?t[j]:t}return Object(l.j)(t)?Object(l.c)():new o.a(e,i,a)}async function w(){i.b||await Promise.all([n.e(5),n.e(18),n.e(59),n.e(475)]).then(n.bind(null,784))}function T(e){return v.some(t=>t.test(e))}async function x(e){var t
let n=e.params.url
const r=e.params.requestOptions,o=null!=(t=e.fetchOptions)?t:{},s=Object(u.y)(n)||Object(u.z)(n),c=r.responseType||"json",f=s?0:null!=r.timeout?r.timeout:g.timeout
let m=!1
if(!s){e.useSSL&&(n=Object(u.P)(n)),r.cacheBust&&"default"===o.cache&&(n=Object(u.d)(n,"request.preventCache",Date.now()))
let t={...r.query}
e.credentialToken&&(t.token=e.credentialToken)
let s=Object(u.J)(t)
Object(a.a)("esri-url-encodes-apostrophe")&&(s=s.replace(/'/g,"%27"))
const c=n.length+1+s.length
let l
m="delete"===r.method||"post"===r.method||"put"===r.method||!!r.body||c>g.maxUrlLength
const f=r.useProxy||!!Object(u.r)(n)
if(f){const e=Object(u.s)(n)
l=e.path,!m&&l.length+1+c>g.maxUrlLength&&(m=!0),e.query&&(t={...e.query,...t})}if("HEAD"===o.method&&(m||f)){if(m){if(c>g.maxUrlLength)throw S("request:invalid-parameters",new Error("URL exceeds maximum length"),e.params)
throw S("request:invalid-parameters",new Error("cannot use POST request when method is 'head'"),e.params)}if(f)throw S("request:invalid-parameters",new Error("cannot use proxy when method is 'head'"),e.params)}if(m?(o.method="delete"===r.method?"DELETE":"put"===r.method?"PUT":"POST",r.body?n=Object(u.e)(n,t):(o.body=Object(u.J)(t),o.headers||(o.headers={}),o.headers["Content-Type"]="application/x-www-form-urlencoded")):n=Object(u.e)(n,t),f&&(e.useProxy=!0,n=`${l}?${n}`),t.token&&b&&o.body instanceof FormData&&!Object(d.a)(n)&&o.body.set("token",t.token),r.hasOwnProperty("withCredentials"))e.withCredentials=r.withCredentials
else if(!Object(u.v)(n,Object(u.m)()))if(Object(u.D)(n))e.withCredentials=!0
else if(i.b){const t=i.b.findServerInfo(n)
t&&t.webTierAuth&&(e.withCredentials=!0)}e.withCredentials&&(o.credentials="include",Object(h.a)(n)&&await Object(h.d)(m?Object(u.e)(n,t):n))}let y,O,v=0,E=!1
f>0&&(v=setTimeout(()=>{E=!0,e.controller.abort()},f))
try{if("native-request-init"===r.responseType)O=o,O.url=n
else if("image"!==r.responseType||"default"!==o.cache||"GET"!==o.method||m||function(e){if(e)for(const t of Object.getOwnPropertyNames(e))if(e[t])return!0
return!1}(r.headers)||!s&&!e.useProxy&&g.proxyUrl&&!_(n)){if(y=await p._abortableFetch(n,o),e.useProxy||function(e){const t=Object(u.p)(e)
t&&!p._corsServers.includes(t)&&p._corsServers.push(t)}(n),"native"===r.responseType)O=y
else if("HEAD"!==o.method)if(y.ok){switch(c){case"array-buffer":O=await y.arrayBuffer()
break
case"blob":case"image":O=await y.blob()
break
default:O=await y.text()}if(v&&(clearTimeout(v),v=0),"json"===c||"xml"===c||"document"===c)if(O)switch(c){case"json":O=JSON.parse(O)
break
case"xml":O=C(O,"application/xml")
break
case"document":O=C(O,"text/html")}else O=null
if(O){if("array-buffer"===c||"blob"===c){const e=y.headers.get("Content-Type")
if(e&&/application\/json|text\/plain/i.test(e)&&O["blob"===c?"size":"byteLength"]<=750)try{const e=await new Response(O).json()
e.error&&(O=e)}catch{}}"image"===c&&O instanceof Blob&&(O=await R(URL.createObjectURL(O),e,!0))}}else O=await y.text()}else O=await R(n,e)}catch(t){var j
if("AbortError"===t.name){if(E)throw new Error("Timeout exceeded")
throw Object(l.c)("Request canceled")}if(!(!y&&t instanceof TypeError&&g.proxyUrl)||r.body||"delete"===r.method||"head"===r.method||"post"===r.method||"put"===r.method||e.useProxy||_(n))throw t
e.redoRequest=!0,Object(u.c)({proxyUrl:g.proxyUrl,urlPrefix:null!=(j=Object(u.p)(n))?j:""})}finally{v&&clearTimeout(v)}return[y,O]}function C(e,t){let n
try{n=(new DOMParser).parseFromString(e,t)}catch{}if(!n||n.getElementsByTagName("parsererror").length)throw new SyntaxError("XML Parse error")
return n}async function I(e,t,n){if(e.redoRequest)return e.redoRequest=!1,!1
const r=e.params.requestOptions
if(!t||"native"===r.responseType||"native-request-init"===r.responseType)return!0
let o,a
if(!t.ok)throw o=new Error(`Unable to load ${t.url} status: ${t.status}`),o[j]=n,o
n&&(n.error?o=n.error:"error"===n.status&&Array.isArray(n.messages)&&(o={...n},o[j]=n,o.details=n.messages))
let s,c=null
o&&(a=Number(o.code),c=o.hasOwnProperty("subcode")?Number(o.subcode):null,s=o.messageCode,s=s&&s.toUpperCase())
const l=r.authMode
if(403===a&&(4===c||o.message&&o.message.toLowerCase().includes("ssl")&&!o.message.toLowerCase().includes("permission"))){if(!e.useSSL)return e.useSSL=!0,!1}else if(!e.hasToken&&e.useIdentity&&("no-prompt"!==l||498===a)&&void 0!==a&&y.includes(a)&&!T(e.params.url)&&(403!==a||s&&!O.includes(s)&&(null==c||2===c&&e.credentialToken))){await w()
try{const t=await i.b.getCredential(e.params.url,{error:S("request:server",o,e.params),prompt:"no-prompt"!==l,signal:e.controller.signal,token:e.credentialToken})
return e.credential=t,e.credentialToken=t.token,e.useSSL=e.useSSL||t.ssl,!1}catch(t){if("no-prompt"===l)return e.credential=void 0,e.credentialToken=void 0,!1
o=t}}if(o)throw o
return!0}function R(e,t,n=!1){const r=t.controller.signal,i=new Image
return t.withCredentials?i.crossOrigin="use-credentials":i.crossOrigin="anonymous",i.alt="",i.fetchPriority=g.priority,i.src=e,Object(h.b)(i,e,n,r)}p._abortableFetch=null,p._corsServers=["https://server.arcgisonline.com","https://services.arcgisonline.com"]},772:function(e,t,n){"use strict"
n.r(t),n.d(t,"default",(function(){return g}))
var r=n(968),i=n(982),o=n(775),a=n(995),s=n(986),c=n(972),l=n(23),u=n(1156),d=n(970),f=(n(971),n(445),n(969)),h=n(983)
function p(e){if(!Object(l.l)(e))return null
const t={}
for(const n in e){const r=e[n]
r&&(t[n]=r.toJSON())}return 0!==Object.keys(t).length?t:null}let m=class extends(Object(s.b)(c.a)){constructor(...e){super(...e),this.isAggregate=!1,this.layer=null,this.popupTemplate=null,this.sourceLayer=null,Object.defineProperty(this,"uid",{value:Object(u.b)(),configurable:!0})}normalizeCtorArgs(e,t,n,r){return e&&!e.declaredClass?e:{geometry:e,symbol:t,attributes:n,popupTemplate:r}}set aggregateGeometries(e){const t=this._get("aggregateGeometries")
JSON.stringify(t)!==JSON.stringify(e)&&this._set("aggregateGeometries",e)}set attributes(e){const t=this._get("attributes")
t!==e&&(this._set("attributes",e),this._notifyLayer("attributes",t,e))}set geometry(e){const t=this._get("geometry")
t!==e&&(this._set("geometry",e),this._notifyLayer("geometry",t,e))}set symbol(e){const t=this._get("symbol")
t!==e&&(this._set("symbol",e),this._notifyLayer("symbol",t,e))}set visible(e){const t=this._get("visible")
t!==e&&(this._set("visible",e),this._notifyLayer("visible",t,e))}getEffectivePopupTemplate(e=!1){if(this.popupTemplate)return this.popupTemplate
for(const t of[this.sourceLayer,this.layer])if(t){if("popupTemplate"in t&&t.popupTemplate)return t.popupTemplate
if(e&&"defaultPopupTemplate"in t&&Object(l.l)(t.defaultPopupTemplate))return t.defaultPopupTemplate}return null}getAttribute(e){var t
return null==(t=this.attributes)?void 0:t[e]}setAttribute(e,t){if(this.attributes){const n=this.getAttribute(e)
this.attributes[e]=t,this._notifyLayer("attributes",n,t,e)}else this.attributes={[e]:t},this._notifyLayer("attributes",void 0,t,e)}getObjectId(){return this.sourceLayer&&"objectIdField"in this.sourceLayer&&this.sourceLayer.objectIdField?this.getAttribute(this.sourceLayer.objectIdField):null}toJSON(){return{aggregateGeometries:p(this.aggregateGeometries),geometry:Object(l.l)(this.geometry)?this.geometry.toJSON():null,symbol:Object(l.l)(this.symbol)?this.symbol.toJSON():null,attributes:{...this.attributes},popupTemplate:this.popupTemplate&&this.popupTemplate.toJSON()}}notifyGeometryChanged(){this._notifyLayer("geometry",this.geometry,this.geometry)}notifyMeshTransformChanged(){Object(l.l)(this.geometry)&&"mesh"===this.geometry.type&&this._notifyLayer("transform",this.geometry.transform,this.geometry.transform)}_notifyLayer(e,t,n,r){if(!this.layer||!("graphicChanged"in this.layer))return
const i={graphic:this,property:e,oldValue:t,newValue:n}
"attributes"===e&&(i.attributeName=r),this.layer.graphicChanged(i)}}
Object(r.a)([Object(d.b)({value:null,json:{read:function(e){if(!e)return null
const t={}
for(const n in e){const r=Object(h.a)(e[n])
r&&(t[n]=r)}return 0!==Object.keys(t).length?t:null}}})],m.prototype,"aggregateGeometries",null),Object(r.a)([Object(d.b)({value:null})],m.prototype,"attributes",null),Object(r.a)([Object(d.b)({value:null,types:i.c,json:{read:h.a}})],m.prototype,"geometry",null),Object(r.a)([Object(d.b)({type:Boolean})],m.prototype,"isAggregate",void 0),Object(r.a)([Object(d.b)({clonable:"reference"})],m.prototype,"layer",void 0),Object(r.a)([Object(d.b)({type:o.default})],m.prototype,"popupTemplate",void 0),Object(r.a)([Object(d.b)({clonable:"reference"})],m.prototype,"sourceLayer",void 0),Object(r.a)([Object(d.b)({value:null,types:a.e})],m.prototype,"symbol",null),Object(r.a)([Object(d.b)({type:Boolean,value:!0})],m.prototype,"visible",null),m=Object(r.a)([Object(f.a)("esri.Graphic")],m),(m||(m={})).generateUID=u.b
const g=m},773:function(e,t,n){"use strict"
n.r(t),n.d(t,"default",(function(){return S}))
var r,i=n(968),o=n(445),a=n(234),s=n(23),c=n(970),l=(n(971),n(969)),u=n(974),d=n(770),f=n(1004),h=n(992),p=n(769),m=n(1142),g=n(1085),b=n(1066),y=n(1157),O=n(1118),v=n(774),E=n(1105)
function j(e){return!Array.isArray(e[0])}let _=r=class extends f.a{static fromExtent(e){const t=e.clone().normalize(),n=e.spatialReference
let i=!1,o=!1
for(const e of t)e.hasZ&&(i=!0),e.hasM&&(o=!0)
const a={rings:t.map(e=>{const t=[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]
if(i&&e.hasZ){const n=e.zmin+.5*(e.zmax-e.zmin)
for(let e=0;e<t.length;e++)t[e].push(n)}if(o&&e.hasM){const n=e.mmin+.5*(e.mmax-e.mmin)
for(let e=0;e<t.length;e++)t[e].push(n)}return t}),spatialReference:n}
return i&&(a.hasZ=!0),o&&(a.hasM=!0),new r(a)}constructor(...e){super(...e),this.rings=[],this.type="polygon"}normalizeCtorArgs(e,t){let n,r,i=null,o=null
return e&&!Array.isArray(e)?(i=e.rings?e.rings:null,t||(e.spatialReference?t=e.spatialReference:e.rings||(t=e)),n=e.hasZ,r=e.hasM):i=e,i=i||[],t=t||p.default.WGS84,i.length&&i[0]&&null!=i[0][0]&&"number"==typeof i[0][0]&&(i=[i]),o=i[0]&&i[0][0],o&&(void 0===n&&void 0===r?(n=o.length>2,r=o.length>3):void 0===n?n=r?o.length>3:o.length>2:void 0===r&&(r=n?o.length>3:o.length>2)),{rings:i,spatialReference:t,hasZ:n,hasM:r}}get cache(){return this.commitProperty("rings"),this.commitProperty("hasZ"),this.commitProperty("hasM"),this.commitProperty("spatialReference"),{}}get centroid(){const e=Object(m.b)(this)
if(!e||isNaN(e[0])||isNaN(e[1])||this.hasZ&&isNaN(e[2]))return null
const t=new h.a
return t.x=e[0],t.y=e[1],t.spatialReference=this.spatialReference,this.hasZ&&(t.z=e[2]),t}get extent(){const{spatialReference:e}=this,t=Object(y.b)(this)
if(!t)return null
const n=new d.default(t)
return n.spatialReference=e,n}get isSelfIntersecting(){return Object(O.d)(this.rings)}writeRings(e,t){t.rings=Object(a.a)(this.rings)}addRing(e){if(!e)return
const t=this.rings,n=t.length
if(j(e)){const r=[]
for(let t=0,n=e.length;t<n;t++)r[t]=e[t].toArray()
t[n]=r}else t[n]=e.concat()
return this.notifyChange("rings"),this}clone(){const e=new r
return e.spatialReference=this.spatialReference,e.rings=Object(a.a)(this.rings),e.hasZ=this.hasZ,e.hasM=this.hasM,e}equals(e){if(this===e)return!0
if(Object(s.k)(e))return!1
const t=this.spatialReference,n=e.spatialReference
if(Object(s.l)(t)!==Object(s.l)(n))return!1
if(Object(s.l)(t)&&Object(s.l)(n)&&!t.equals(n))return!1
if(this.rings.length!==e.rings.length)return!1
const r=([e,t,n,r],[i,o,a,s])=>e===i&&t===o&&(null==n&&null==a||n===a)&&(null==r&&null==s||r===s)
for(let t=0;t<this.rings.length;t++){const n=this.rings[t],i=e.rings[t]
if(!Object(o.e)(n,i,r))return!1}return!0}contains(e){if(!e)return!1
const t=Object(v.project)(e,this.spatialReference)
return Object(g.g)(this,Object(s.l)(t)?t:e)}isClockwise(e){let t
return t=j(e)?e.map(e=>this.hasZ?this.hasM?[e.x,e.y,e.z,e.m]:[e.x,e.y,e.z]:[e.x,e.y]):e,Object(b.k)(t,this.hasM,this.hasZ)}getPoint(e,t){if(!this._validateInputs(e,t))return null
const n=this.rings[e][t],r=this.hasZ,i=this.hasM
return r&&!i?new h.a(n[0],n[1],n[2],void 0,this.spatialReference):i&&!r?new h.a(n[0],n[1],void 0,n[2],this.spatialReference):r&&i?new h.a(n[0],n[1],n[2],n[3],this.spatialReference):new h.a(n[0],n[1],this.spatialReference)}insertPoint(e,t,n){return this._validateInputs(e,t,!0)?(Object(E.a)(this,n),Array.isArray(n)||(n=n.toArray()),this.rings[e].splice(t,0,n),this.notifyChange("rings"),this):this}removePoint(e,t){if(!this._validateInputs(e,t))return null
const n=new h.a(this.rings[e].splice(t,1)[0],this.spatialReference)
return this.notifyChange("rings"),n}removeRing(e){if(!this._validateInputs(e,null))return null
const t=this.rings.splice(e,1)[0],n=this.spatialReference,r=t.map(e=>new h.a(e,n))
return this.notifyChange("rings"),r}setPoint(e,t,n){return this._validateInputs(e,t)?(Object(E.a)(this,n),Array.isArray(n)||(n=n.toArray()),this.rings[e][t]=n,this.notifyChange("rings"),this):this}_validateInputs(e,t,n=!1){if(null==e||e<0||e>=this.rings.length)return!1
if(null!=t){const r=this.rings[e]
if(n&&(t<0||t>r.length))return!1
if(!n&&(t<0||t>=r.length))return!1}return!0}toJSON(e){return this.write({},e)}}
Object(i.a)([Object(c.b)({readOnly:!0})],_.prototype,"cache",null),Object(i.a)([Object(c.b)({readOnly:!0})],_.prototype,"centroid",null),Object(i.a)([Object(c.b)({readOnly:!0})],_.prototype,"extent",null),Object(i.a)([Object(c.b)({readOnly:!0})],_.prototype,"isSelfIntersecting",null),Object(i.a)([Object(c.b)({type:[[[Number]]],json:{write:{isRequired:!0}}})],_.prototype,"rings",void 0),Object(i.a)([Object(u.a)("rings")],_.prototype,"writeRings",null),_=r=Object(i.a)([Object(l.a)("esri.geometry.Polygon")],_),_.prototype.toJSON.isDefaultToJSON=!0
const S=_},774:function(e,t,n){"use strict"
n.r(t),n.d(t,"canProject",(function(){return m})),n.d(t,"geographicToWebMercator",(function(){return O})),n.d(t,"lngLatToXY",(function(){return b})),n.d(t,"project",(function(){return g})),n.d(t,"webMercatorToGeographic",(function(){return v})),n.d(t,"x2lon",(function(){return u})),n.d(t,"xyToLngLat",(function(){return y})),n.d(t,"y2lat",(function(){return d}))
var r=n(234),i=n(23),o=n(769),a=n(1052),s=n(988)
function c(e){return 57.29577951308232*e}function l(e){return.017453292519943*e}function u(e){return e/a.a.radius}function d(e){return Math.PI/2-2*Math.atan(Math.exp(-e/a.a.radius))}function f(e){return null!=e.wkid||null!=e.wkt}const h=[0,0]
function p(e,t,n,r,i){const o=e,a=i
if(a.spatialReference=n,"x"in o&&"x"in a)[a.x,a.y]=t(o.x,o.y,h,r)
else if("xmin"in o&&"xmin"in a)[a.xmin,a.ymin]=t(o.xmin,o.ymin,h,r),[a.xmax,a.ymax]=t(o.xmax,o.ymax,h,r)
else if("paths"in o&&"paths"in a||"rings"in o&&"rings"in a){const e="paths"in o?o.paths:o.rings,n=[]
let i
for(let o=0;o<e.length;o++){const a=e[o]
i=[],n.push(i)
for(let e=0;e<a.length;e++)i.push(t(a[e][0],a[e][1],[0,0],r)),a[e].length>2&&i[e].push(a[e][2]),a[e].length>3&&i[e].push(a[e][3])}"paths"in a?a.paths=n:a.rings=n}else if("points"in o&&"points"in a){const e=o.points,n=[]
for(let i=0;i<e.length;i++)n[i]=t(e[i][0],e[i][1],[0,0],r),e[i].length>2&&n[i].push(e[i][2]),e[i].length>3&&n[i].push(e[i][3])
a.points=n}return i}function m(e,t){const n=e&&(f(e)?e:e.spatialReference),r=t&&(f(t)?t:t.spatialReference)
return!(e&&"type"in e&&"mesh"===e.type||t&&"type"in t&&"mesh"===t.type||!n||!r)&&(!!Object(s.d)(r,n)||Object(s.p)(r)&&Object(s.m)(n)||Object(s.p)(n)&&Object(s.m)(r))}function g(e,t){if(Object(i.k)(e))return null
const n=e.spatialReference,a=t&&(f(t)?t:t.spatialReference)
return m(n,a)?Object(s.d)(n,a)?Object(r.a)(e):Object(s.p)(a)?p(e,b,o.default.WebMercator,!1,Object(r.a)(e)):Object(s.m)(a)?p(e,y,o.default.WGS84,!1,Object(r.a)(e)):null:null}function b(e,t,n=[0,0]){t>89.99999?t=89.99999:t<-89.99999&&(t=-89.99999)
const r=l(t)
return n[0]=l(e)*a.a.radius,n[1]=a.a.halfSemiMajorAxis*Math.log((1+Math.sin(r))/(1-Math.sin(r))),n}function y(e,t,n=[0,0],r=!1){const i=c(e/a.a.radius)
return n[0]=r?i:i-360*Math.floor((i+180)/360),n[1]=c(Math.PI/2-2*Math.atan(Math.exp(-t/a.a.radius))),n}function O(e,t=!1,n=Object(r.a)(e)){return p(e,b,o.default.WebMercator,t,n)}function v(e,t=!1,n=Object(r.a)(e)){return p(e,y,o.default.WGS84,t,n)}},887:function(e,t,n){"use strict"
n.r(t),n.d(t,"arcgis_hub_map_widget_search",(function(){return f}))
var r=n(96),i=n(1863),o=n(1124),a=n(1461),s=n(1224),c=n(978),l=n(2524),u=n(385)
n(131),n(384),n(196)
var d=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r
if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r)
else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a)
return o>3&&a&&Object.defineProperty(t,n,a),a}
const f=class{constructor(e){Object(r.k)(this,e),this.arcgisHubWidgetPanelToggled=Object(r.e)(this,"arcgisHubWidgetPanelToggled",7),this.hubTelemetry=Object(r.e)(this,"hubTelemetry",7),this.scale="m",this.view=void 0,this.searchViewModelProperties={},this.active=void 0,this.inputScale=void 0,this.loading=void 0,this.searchComplete=void 0,this.suggestions=[],this.value=void 0,this.width="25rem",Object(o.a)(this,"handleSetInputRef","handleSetDropdownRef","searchIfEnter","toggleActive","setInputWidth")}async componentWillLoad(){const{el:e}=this,t=e&&e.closest("arcgis-hub-map-widget-container")
this.viewPosition=null==t?void 0:t.viewPosition,this.intl=await s.a.loadIntlForComponent(e),await this.connectViewModel()}connectedCallback(){this.connectWatch()}disconnectedCallback(){this.removeWatch()}componentDidLoad(){this.setInputScale(),Object(u.b)()}componentDidRender(){const{active:e,inputEl:t}=this
e&&t&&(t.setFocus(),t.scale=this.inputScale)}handleViewChange(e,t){e&&e!==t&&(this.removeWatch(),this.connectViewModel().then(()=>{this.connectWatch()}))}handleSuggestionsChange(){const{dropdownEl:e,suggestions:t}=this
e.open=Boolean(t.length)}handleActiveChange(e){const{hubTelemetry:t}=this,n=e?a.a.dictionary.category.interaction.action.open.label.search:a.a.dictionary.category.interaction.action.close.label.search
t.emit(n),this.setInputWidth()}handleValueChange(){const{value:e,searchViewModel:t}=this
t&&""===e&&t.clear()}handlePanelToggled(e){const{target:t,detail:n}=e,{el:r}=this
t===r||n||(this.active=!1)}onCalciteDropdownSelect(){const{dropdownEl:e}=this
this.selectedKey=e.selectedItems[0].dataset.value,this.value=this.selected.text,this.search()}onCalciteInputChange(e){this.value=e.target.value}onCalciteInputInput(e){this.value=e.target.value,this.value&&this.getSuggestions()}handleSetDropdownRef(e){e&&(this.dropdownEl=e)}handleSetInputRef(e){e&&(this.inputEl=e)}async getSuggestions(){const{value:e,searchComplete:t,hubTelemetry:n,searchViewModel:r}=this
n.emit(Object.assign(Object.assign({},a.a.dictionary.category.interaction.action.search.label.query),{search:e}))
const{results:[i]}=await r.suggest(e)
t?this.searchComplete=!1:this.suggestions=(null==i?void 0:i.results)||[]}async search(){const{value:e,hubTelemetry:t,searchViewModel:n}=this
this.loading=!0
const r=this.selected||e,i=await n.search(r)
t.emit(Object.assign(Object.assign({},a.a.dictionary.category.interaction.action.zoom.label.to),{details:null==i?void 0:i.searchTerm})),this.loading=!1,this.selectedKey=null,this.suggestions=[],this.searchComplete=!0}searchIfEnter(e){const{key:t}=e
"Enter"===t&&this.search()}toggleActive(){const{active:e,arcgisHubWidgetPanelToggled:t}=this
this.active=!e,t.emit(e)}connectWatch(){const{view:e}=this
e&&(this.handle=Object(c.f)(()=>e.size,this.setInputWidth))}removeWatch(){const{handle:e}=this
e&&e.remove(),this.handle=void 0}async connectViewModel(){const{view:e,searchViewModel:t}=this
e&&!t&&(await e.when(),this.searchViewModel=new l.a(Object.assign({autoSelect:!0,suggestionsEnabled:!0,maxResults:1,maxSuggestions:5,minSuggestCharacters:3,view:e},this.searchViewModelProperties)))}setInputScale(){const{scale:e}=this
this.inputScale="s"===e?"m":"l"}setInputWidth(){const{inputEl:e,view:{size:t}}=this
if(!e)return
const[n]=t
this.width=n<600?.65*n+"px":"25rem"}get positionClass(){const{viewPosition:e}=this
if(e)return"hub-widget-search "+e.split("-").join(" ")}get selected(){const{suggestions:e,selectedKey:t}=this
return e.filter(({key:e})=>e===t).pop()}get styles(){const{width:e}=this
return{"--width":e}}render(){const{value:e,loading:t,scale:n,active:i,styles:o}=this,a=this.intl.t("textOpen"),s=this.intl.t("textClose"),c=this.intl.t("placeholder")
return Object(r.i)(r.b,{"data-element":"map-widget-search",style:o},this.active&&Object(r.i)("section",{class:this.positionClass},Object(r.i)("calcite-dropdown",{ref:this.handleSetDropdownRef,scale:n},Object(r.i)("calcite-input",{clearable:!0,icon:"search",loading:t,onKeyPress:this.searchIfEnter,placeholder:c,ref:this.handleSetInputRef,scale:this.inputScale,slot:"trigger",value:e}),Object(r.i)("calcite-dropdown-group",{selectionMode:"single"},this.suggestions.map(e=>Object(r.i)("calcite-dropdown-item",{"data-value":e.key,key:e.key},e.text))))),Object(r.i)("arcgis-hub-map-widget-generic",{active:i,icon:"search",onClick:this.toggleActive,scale:n,text:i?s:a}))}static get assetsDirs(){return["locales"]}get el(){return Object(r.c)(this)}static get watchers(){return{view:["handleViewChange"],suggestions:["handleSuggestionsChange"],active:["handleActiveChange"],value:["handleValueChange"]}}}
d([Object(i.a)({timeout:300})],f.prototype,"getSuggestions",null),d([Object(i.a)({timeout:25})],f.prototype,"setInputWidth",null),f.style=":host{display:block}calcite-dropdown{position:absolute}calcite-input{width:var(--width)}calcite-dropdown-group{width:var(--width)}.hub-widget-search.top{position:absolute;width:var(--width)}.hub-widget-search.right{right:100%;margin-right:1rem}.hub-widget-search.left{left:100%;margin-left:1rem}"},972:function(e,t,n){"use strict"
n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}))
var r=n(968),i=n(975),o=n(23),a=n(234),s=n(1006)
class c{constructor(){this._values=new Map,this.multipleOriginsSupported=!1}clone(e){const t=new c
return this._values.forEach((n,r)=>{e&&e.has(r)||t.set(r,Object(a.a)(n.value),n.origin)}),t}get(e,t){t=this._normalizeOrigin(t)
const n=this._values.get(e)
return null==t||(null==n?void 0:n.origin)===t?null==n?void 0:n.value:void 0}originOf(e){var t,n
return null!=(t=null==(n=this._values.get(e))?void 0:n.origin)?t:s.a.USER}keys(e){e=this._normalizeOrigin(e)
const t=[...this._values.keys()]
return null==e?t:t.filter(t=>{var n
return(null==(n=this._values.get(t))?void 0:n.origin)===e})}set(e,t,n){if((n=this._normalizeOrigin(n))===s.a.DEFAULTS){const t=this._values.get(e)
if(t&&null!=t.origin&&t.origin>n)return}this._values.set(e,new l(t,n))}delete(e,t){var n
null!=(t=this._normalizeOrigin(t))&&(null==(n=this._values.get(e))?void 0:n.origin)!==t||this._values.delete(e)}has(e,t){var n
return null!=(t=this._normalizeOrigin(t))?(null==(n=this._values.get(e))?void 0:n.origin)===t:this._values.has(e)}forEach(e){this._values.forEach(({value:t},n)=>e(t,n))}_normalizeOrigin(e){if(null!=e)return e===s.a.DEFAULTS?e:s.a.USER}}class l{constructor(e,t){this.value=e,this.origin=t}}var u=n(1178),d=n(1091),f=n(999),h=n(1096),p=n(969)
const m=e=>{let t=class extends e{constructor(...e){super(...e)
const t=Object(o.d)(Object(f.a)(this)),n=t.store,r=new c
t.store=r,Object(u.a)(t,n,r)}read(e,t){Object(d.a)(this,e,t)}write(e={},t){return Object(h.b)(this,e,t)}toJSON(e){return this.write({},e)}static fromJSON(e,t){return g.call(this,e,t)}}
return t=Object(r.a)([Object(p.a)("esri.core.JSONSupport")],t),t.prototype.toJSON.isDefaultToJSON=!0,t}
function g(e,t){if(!e)return null
if(e.declaredClass)throw new Error("JSON object is already hydrated")
const n=new this
return n.read(e,t),n}let b=class extends(m(i.a)){}
b=Object(r.a)([Object(p.a)("esri.core.JSONSupport")],b)},973:function(e,t,n){"use strict"
n.d(t,"a",(function(){return _})),n.d(t,"b",(function(){return I})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return v})),n.d(t,"e",(function(){return C})),n.d(t,"f",(function(){return x})),n.d(t,"g",(function(){return E})),n.d(t,"h",(function(){return j})),n.d(t,"i",(function(){return y})),n.d(t,"j",(function(){return b})),n.d(t,"k",(function(){return d})),n.d(t,"l",(function(){return w})),n.d(t,"m",(function(){return O})),n.d(t,"n",(function(){return p})),n.d(t,"o",(function(){return m})),n.d(t,"p",(function(){return f})),n.d(t,"q",(function(){return l})),n.d(t,"r",(function(){return h})),n.d(t,"s",(function(){return S})),n.d(t,"t",(function(){return R})),n.d(t,"u",(function(){return T})),n.d(t,"v",(function(){return g}))
var r=n(1166),i=(n(1095),n(446)),o=n(1043),a=n(233),s=n(23)
function c(e="Aborted"){return new i.a("AbortError",e)}function l(e,t="Aborted"){if(d(e))throw c(t)}function u(e){return Object(s.l)(e)?"aborted"in e?e:e.signal:e}function d(e){const t=u(e)
return Object(s.l)(t)&&t.aborted}function f(e){if(b(e))throw e}function h(e){if(!b(e))throw e}function p(e,t){const n=u(e)
if(!Object(s.k)(n)){if(!n.aborted)return Object(o.d)(n,"abort",()=>t())
t()}}function m(e,t){const n=u(e)
if(!Object(s.k)(n))return l(n),Object(o.d)(n,"abort",()=>t(c()))}function g(e,t){const n=u(t)
return Object(s.k)(n)?e:new Promise((n,r)=>{let i=p(t,()=>r(c()))
const o=()=>i=Object(s.s)(i)
e.then(o,o),e.then(n,r)})}function b(e){return"AbortError"===(null==e?void 0:e.name)}async function y(e){try{return await e}catch(e){if(!b(e))throw e
return}}async function O(e,t=a.a.getLogger("esri")){try{return await e}catch(e){b(e)||t.error(e)}}function v(){let e=null
const t=new Promise((t,n)=>{e={promise:void 0,resolve:t,reject:n}})
return e.promise=t,e}async function E(e){if(!e)return
if("function"!=typeof e.forEach){const t=Object.keys(e),n=t.map(t=>e[t]),r=await E(n),i={}
return t.map((e,t)=>i[e]=r[t]),i}const t=e
return new Promise(e=>{const n=[]
let r=t.length
0===r&&e(n),t.forEach(t=>{const i={promise:t||Promise.resolve(t)}
n.push(i),i.promise.then(e=>{i.value=e}).catch(e=>{i.error=e}).then(()=>{--r,0===r&&e(n)})})})}async function j(e){return(await E(e)).filter(e=>!!e.value).map(e=>e.value)}function _(e,t,n){const r=new AbortController
return p(n,()=>r.abort()),new Promise((n,i)=>{let o=setTimeout(()=>{o=0,n(t)},e)
p(r,()=>{o&&(clearTimeout(o),i(c()))})})}function S(e,t,n,r){const o=n&&"abort"in n?n:null
null!=r||o||(r=n)
let a=setTimeout(()=>{a=0,o&&o.abort()},t)
const s=()=>r||new i.a("promiseUtils:timeout","The wrapped promise did not resolve within "+t+" ms")
return e.then(e=>{if(0===a)throw s()
return clearTimeout(a),e},e=>{throw clearTimeout(a),0===a?s():e})}function w(e){return e&&"function"==typeof e.then}function T(e){return w(e)?e:Promise.resolve(e)}function x(e,t=-1){let n,r,i,o,a=null
const l=(...u)=>{if(n){r=u,o&&o.reject(c()),o=v()
const e=Object(s.d)(o.promise)
if(a){const e=a
a=null,e.abort()}return e}if(i=o||v(),o=null,t>0){const r=new AbortController
n=T(e(...u,r.signal))
const i=n
_(t).then(()=>{n===i&&(o?r.abort():a=r)})}else n=1,n=T(e(...u))
const d=()=>{const e=r
r=i=n=a=null,null!=e&&l(...e)},f=n,h=i
return f.then(d,d),f.then(h.resolve,h.reject),Object(s.d)(h.promise)}
return l}function C(){let e,t
const n=new Promise((n,r)=>{e=n,t=r}),i=t=>{e(t)}
return i.resolve=t=>e(t),i.reject=e=>t(e),i.timeout=(e,t)=>r.a.setTimeout(()=>i.reject(t),e),i.promise=n,i}function I(e,t){return e.then(t,t)}async function R(e){await Promise.resolve(),l(e)}},974:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
var r=n(970)
function i(e,t,n){let i,o
return void 0===t?(o=e,i=[void 0]):"string"!=typeof t?(o=e,i=[void 0],n=t):(o=t,i=Array.isArray(e)?e:[e]),(e,t)=>{const a=e.constructor.prototype
for(const s of i){const i=Object(r.c)(e,s,o)
i.write&&"object"==typeof i.write||(i.write={}),n&&(i.write.target=n),i.write.writer=a[t]}}}},976:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o}))
var r=n(146)
class i{constructor(e,t={ignoreUnknown:!1,useNumericKeys:!1}){this._jsonToAPI=e,this._options=t,this.apiValues=[],this.jsonValues=[],this._apiToJSON=this._invertMap(e),this.apiValues=this._getKeysSorted(this._apiToJSON),this.jsonValues=this._getKeysSorted(this._jsonToAPI),this.read=e=>this.fromJSON(e),this.write=(e,t,n)=>{const i=this.toJSON(e)
void 0!==i&&Object(r.c)(n,i,t)},this.write.isJSONMapWriter=!0}toJSON(e){if(null==e)return null
if(this._apiToJSON.hasOwnProperty(e)){const t=this._apiToJSON[e]
return this._options.useNumericKeys?+t:t}return this._options.ignoreUnknown?void 0:e}fromJSON(e){return null!=e&&this._jsonToAPI.hasOwnProperty(e)?this._jsonToAPI[e]:this._options.ignoreUnknown?void 0:e}_invertMap(e){const t={}
for(const n in e)t[e[n]]=n
return t}_getKeysSorted(e){const t=[]
for(const n in e)t.push(n)
return t.sort(),t}}function o(){return function(e,t){return new i(e,{ignoreUnknown:!0,...t})}}},977:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
var r=n(970)
function i(e,t,n){let i,o
return void 0===t||Array.isArray(t)?(o=e,n=t,i=[void 0]):(o=t,i=Array.isArray(e)?e:[e]),(e,t)=>{const a=e.constructor.prototype
i.forEach(i=>{const s=Object(r.c)(e,i,o)
s.read&&"object"==typeof s.read||(s.read={}),s.read.reader=a[t],n&&(s.read.source=(s.read.source||[]).concat(n))})}}},978:function(e,t,n){"use strict"
n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return g})),n.d(t,"e",(function(){return y})),n.d(t,"f",(function(){return c})),n.d(t,"g",(function(){return l})),n.d(t,"h",(function(){return f}))
var r=n(1043),i=n(1017),o=n(23),a=n(973),s=n(1076)
function c(e,t,n={}){return u(e,t,n,h)}function l(e,t,n={}){return u(e,t,n,p)}function u(e,t,n={},r){let i=null
const a=n.once?(e,n)=>{r(e)&&(Object(o.s)(i),t(e,n))}:(e,n)=>{r(e)&&t(e,n)}
if(i=Object(s.e)(e,a,n.sync,n.equals),n.initial){const t=e()
a(t,t)}return i}function d(e,t,n,a={}){let s=null,l=null,u=null
function d(){s&&l&&(l.remove(),null!=a.onListenerRemove&&a.onListenerRemove(s),s=null,l=null)}function f(e){a.once&&a.once&&Object(o.s)(u),n(e)}const h=c(e,(e,n)=>{d(),Object(r.b)(e)&&(s=e,l=Object(r.c)(e,t,f),null==a.onListenerAdd||a.onListenerAdd(e))},{sync:a.sync,initial:!0})
return u=Object(i.c)(()=>{h.remove(),d()}),u}function f(e,t){return function(e,t,n){if(Object(a.k)(n))return Promise.reject(Object(a.c)())
const r=e()
if(null!=t&&t(r))return Promise.resolve(r)
let s=null
function c(){s=Object(o.s)(s)}return new Promise((r,o)=>{s=Object(i.b)([Object(a.n)(n,()=>{c(),o(Object(a.c)())}),u(e,e=>{c(),r(e)},{sync:!1,once:!0},null!=t?t:h)])})}(e,p,t)}function h(e){return!0}function p(e){return!!e}function m(e,t,n={}){let r=!1
const i=c(e,(e,n)=>{r||t(e,n)},n)
return{remove(){i.remove()},pause(){r=!0},resume(){r=!1}}}n(1048)
const g={sync:!0},b={initial:!0},y={sync:!0,initial:!0}},979:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o}))
var r=n(976),i=n(970)
function o(e,t={}){var n
const o=e instanceof r.a?e:new r.a(e,t),a={type:null==(n=null==t?void 0:t.ignoreUnknown)||n?o.apiValues:String,json:{type:o.jsonValues,read:!(null!=t&&t.readOnly)&&{reader:o.read},write:{writer:o.write}}}
return void 0!==(null==t?void 0:t.readOnly)&&(a.readOnly=!!t.readOnly),void 0!==(null==t?void 0:t.default)&&(a.json.default=t.default),void 0!==(null==t?void 0:t.name)&&(a.json.name=t.name),void 0!==(null==t?void 0:t.nonNullable)&&(a.nonNullable=t.nonNullable),Object(i.b)(a)}},980:function(e,t,n){"use strict"
n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return c})),n.d(t,"h",(function(){return i})),n.d(t,"i",(function(){return o})),n.d(t,"j",(function(){return p})),n.d(t,"k",(function(){return a}))
const r=/^-?(\d+(\.\d+)?)\s*((px)|(pt))?$/i
function i(e){return e?e/72*96:0}function o(e){return e?72*e/96:0}function a(e){if("string"==typeof e){const t=e.match(r)
if(t){const n=Number(t[1]),r=t[3]&&t[3].toLowerCase(),i="-"===e.charAt(0),a="px"===r?o(n):n
return i?-a:a}return console.warn("screenUtils.toPt: input not recognized!"),null}return e}function s(e=0,t=0){return{x:e,y:t}}function c(e=0,t=0){return[e,t]}function l(e=0,t=0){return[e,t]}function u(e=0,t=0,n=0){return[e,t,n]}function d(e){return e}function f(e){return e}function h(e){return e}function p(e,t){return t?(t[0]=e.x,t[1]=e.y,t.length>2&&(t[2]=0),t):[e.x,e.y]}},981:function(e,t,n){"use strict"
function r(){return[0,0,0]}function i(e){return[e[0],e[1],e[2]]}function o(e,t,n){return[e,t,n]}function a(e){const t=[0,0,0],n=Math.min(3,e.length)
for(let r=0;r<n;++r)t[r]=e[r]
return t}function s(e,t){return new Float64Array(e,t,3)}function c(){return o(1,1,1)}function l(){return o(1,0,0)}function u(){return o(0,1,0)}function d(){return o(0,0,1)}n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return g})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return s})),n.d(t,"f",(function(){return r})),n.d(t,"g",(function(){return a})),n.d(t,"h",(function(){return o})),n.d(t,"i",(function(){return d}))
const f=[0,0,0],h=c(),p=l(),m=u(),g=d()
Object.freeze(Object.defineProperty({__proto__:null,ONES:h,UNIT_X:p,UNIT_Y:m,UNIT_Z:g,ZEROS:f,clone:i,create:r,createView:s,fromArray:a,fromValues:o,ones:c,unitX:l,unitY:u,unitZ:d,zeros:function(){return[0,0,0]}},Symbol.toStringTag,{value:"Module"}))},982:function(e,t,n){"use strict"
n.d(t,"c",(function(){return u}))
var r=n(971),i=n(770)
n.d(t,"a",(function(){return i.default}))
var o=n(1004),a=n(1055),s=n(992)
n.d(t,"b",(function(){return s.a}))
var c=n(773),l=n(1021)
n(769),n(1036),n(983)
const u={base:o.a,key:"type",typeMap:{extent:i.default,multipoint:a.a,point:s.a,polyline:l.a,polygon:c.default}}
Object(r.k)(u)},983:function(e,t,n){"use strict"
n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return y})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return d})),n.d(t,"f",(function(){return f})),n.d(t,"g",(function(){return p})),n.d(t,"h",(function(){return h}))
var r=n(23),i=n(770),o=n(1004),a=n(1055),s=n(992),c=n(773),l=n(1021)
function u(e){return void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax}function d(e){return void 0!==e.points}function f(e){return void 0!==e.x&&void 0!==e.y}function h(e){return void 0!==e.paths}function p(e){return void 0!==e.rings}function m(e){return Object(r.k)(e)?null:e instanceof o.a?e:f(e)?s.a.fromJSON(e):h(e)?l.a.fromJSON(e):p(e)?c.default.fromJSON(e):d(e)?a.a.fromJSON(e):u(e)?i.default.fromJSON(e):null}function g(e){return e?f(e)?"esriGeometryPoint":h(e)?"esriGeometryPolyline":p(e)?"esriGeometryPolygon":u(e)?"esriGeometryEnvelope":d(e)?"esriGeometryMultipoint":null:null}const b={esriGeometryPoint:s.a,esriGeometryPolyline:l.a,esriGeometryPolygon:c.default,esriGeometryEnvelope:i.default,esriGeometryMultipoint:a.a}
function y(e){return e&&b[e]||null}},985:function(e,t,n){"use strict"
n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return z})),n.d(t,"e",(function(){return k})),n.d(t,"f",(function(){return N})),n.d(t,"g",(function(){return V})),n.d(t,"h",(function(){return f})),n.d(t,"i",(function(){return I})),n.d(t,"j",(function(){return c})),n.d(t,"k",(function(){return l})),n.d(t,"l",(function(){return a})),n.d(t,"m",(function(){return O})),n.d(t,"n",(function(){return _})),n.d(t,"o",(function(){return S})),n.d(t,"p",(function(){return g})),n.d(t,"q",(function(){return w})),n.d(t,"r",(function(){return y})),n.d(t,"s",(function(){return G})),n.d(t,"t",(function(){return M})),n.d(t,"u",(function(){return o})),n.d(t,"v",(function(){return T})),n.d(t,"w",(function(){return j})),n.d(t,"x",(function(){return E})),n.d(t,"y",(function(){return v})),n.d(t,"z",(function(){return C})),n.d(t,"A",(function(){return D})),n.d(t,"B",(function(){return s})),n.d(t,"C",(function(){return x})),n.d(t,"D",(function(){return W})),n.d(t,"E",(function(){return R})),n.d(t,"F",(function(){return L})),n.d(t,"G",(function(){return h})),n.d(t,"H",(function(){return m})),n.d(t,"I",(function(){return b}))
var r=n(981),i=n(1016)
function o(e){const t=e[0],n=e[1],r=e[2]
return Math.sqrt(t*t+n*n+r*r)}function a(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function s(e,t,n,r){return e[0]=t,e[1]=n,e[2]=r,e}function c(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e}function l(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e}function u(e,t,n){return e[0]=t[0]*n[0],e[1]=t[1]*n[1],e[2]=t[2]*n[2],e}function d(e,t,n){return e[0]=t[0]/n[0],e[1]=t[1]/n[1],e[2]=t[2]/n[2],e}function f(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e}function h(e,t){return e[0]=Math.abs(t[0]),e[1]=Math.abs(t[1]),e[2]=Math.abs(t[2]),e}function p(e,t){return e[0]=Math.sign(t[0]),e[1]=Math.sign(t[1]),e[2]=Math.sign(t[2]),e}function m(e,t,n){return e[0]=Math.min(t[0],n[0]),e[1]=Math.min(t[1],n[1]),e[2]=Math.min(t[2],n[2]),e}function g(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e}function b(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e}function y(e,t){const n=t[0]-e[0],r=t[1]-e[1],i=t[2]-e[2]
return Math.sqrt(n*n+r*r+i*i)}function O(e,t){const n=t[0]-e[0],r=t[1]-e[1],i=t[2]-e[2]
return n*n+r*r+i*i}function v(e){const t=e[0],n=e[1],r=e[2]
return t*t+n*n+r*r}function E(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}function j(e,t){const n=t[0],r=t[1],i=t[2]
let o=n*n+r*r+i*i
return o>0&&(o=1/Math.sqrt(o),e[0]=t[0]*o,e[1]=t[1]*o,e[2]=t[2]*o),e}function _(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function S(e,t,n){const r=t[0],i=t[1],o=t[2],a=n[0],s=n[1],c=n[2]
return e[0]=i*c-o*s,e[1]=o*a-r*c,e[2]=r*s-i*a,e}function w(e,t,n,r){const i=t[0],o=t[1],a=t[2]
return e[0]=i+r*(n[0]-i),e[1]=o+r*(n[1]-o),e[2]=a+r*(n[2]-a),e}function T(e,t,n){const r=t[0],i=t[1],o=t[2]
return e[0]=n[0]*r+n[4]*i+n[8]*o+n[12],e[1]=n[1]*r+n[5]*i+n[9]*o+n[13],e[2]=n[2]*r+n[6]*i+n[10]*o+n[14],e}function x(e,t,n){const r=t[0],i=t[1],o=t[2]
return e[0]=r*n[0]+i*n[3]+o*n[6],e[1]=r*n[1]+i*n[4]+o*n[7],e[2]=r*n[2]+i*n[5]+o*n[8],e}function C(e,t,n){const r=n[0],i=n[1],o=n[2],a=n[3],s=t[0],c=t[1],l=t[2]
let u=i*l-o*c,d=o*s-r*l,f=r*c-i*s,h=i*f-o*d,p=o*u-r*f,m=r*d-i*u
const g=2*a
return u*=g,d*=g,f*=g,h*=2,p*=2,m*=2,e[0]=s+u+h,e[1]=c+d+p,e[2]=l+f+m,e}function I(e,t,n,r){const i=[],o=[]
return i[0]=t[0]-n[0],i[1]=t[1]-n[1],i[2]=t[2]-n[2],o[0]=i[0]*Math.cos(r)-i[1]*Math.sin(r),o[1]=i[0]*Math.sin(r)+i[1]*Math.cos(r),o[2]=i[2],e[0]=o[0]+n[0],e[1]=o[1]+n[1],e[2]=o[2]+n[2],e}function R(e,t){a(A,e),a(P,t),j(A,A),j(P,P)
const n=_(A,P)
return n>1?0:n<-1?Math.PI:Math.acos(n)}const A=Object(r.f)(),P=Object(r.f)()
function M(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}function N(e,t){if(e===t)return!0
const n=e[0],r=e[1],o=e[2],a=t[0],s=t[1],c=t[2],l=Object(i.c)()
return Math.abs(n-a)<=l*Math.max(1,Math.abs(n),Math.abs(a))&&Math.abs(r-s)<=l*Math.max(1,Math.abs(r),Math.abs(s))&&Math.abs(o-c)<=l*Math.max(1,Math.abs(o),Math.abs(c))}function D(e,t,n){const r=n[0]-t[0],i=n[1]-t[1],o=n[2]-t[2]
let a=r*r+i*i+o*o
return a>0?(a=1/Math.sqrt(a),e[0]=r*a,e[1]=i*a,e[2]=o*a,e):(e[0]=0,e[1]=0,e[2]=0,e)}const L=l,F=u,U=d,G=y,k=O,W=o,z=v,V=Object.freeze(Object.defineProperty({__proto__:null,abs:h,add:c,angle:R,bezier:function(e,t,n,r,i,o){const a=1-o,s=a*a,c=o*o,l=s*a,u=3*o*s,d=3*c*a,f=c*o
return e[0]=t[0]*l+n[0]*u+r[0]*d+i[0]*f,e[1]=t[1]*l+n[1]*u+r[1]*d+i[1]*f,e[2]=t[2]*l+n[2]*u+r[2]*d+i[2]*f,e},ceil:function(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e},copy:a,cross:S,direction:D,dist:G,distance:y,div:U,divide:d,dot:_,equals:N,exactEquals:M,floor:f,hermite:function(e,t,n,r,i,o){const a=o*o,s=a*(2*o-3)+1,c=a*(o-2)+o,l=a*(o-1),u=a*(3-2*o)
return e[0]=t[0]*s+n[0]*c+r[0]*l+i[0]*u,e[1]=t[1]*s+n[1]*c+r[1]*l+i[1]*u,e[2]=t[2]*s+n[2]*c+r[2]*l+i[2]*u,e},inverse:function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e},len:W,length:o,lerp:w,max:function(e,t,n){return e[0]=Math.max(t[0],n[0]),e[1]=Math.max(t[1],n[1]),e[2]=Math.max(t[2],n[2]),e},min:m,mul:F,multiply:u,negate:E,normalize:j,random:function(e,t){t=t||1
const n=i.a,r=2*n()*Math.PI,o=2*n()-1,a=Math.sqrt(1-o*o)*t
return e[0]=Math.cos(r)*a,e[1]=Math.sin(r)*a,e[2]=o*t,e},rotateX:function(e,t,n,r){const i=[],o=[]
return i[0]=t[0]-n[0],i[1]=t[1]-n[1],i[2]=t[2]-n[2],o[0]=i[0],o[1]=i[1]*Math.cos(r)-i[2]*Math.sin(r),o[2]=i[1]*Math.sin(r)+i[2]*Math.cos(r),e[0]=o[0]+n[0],e[1]=o[1]+n[1],e[2]=o[2]+n[2],e},rotateY:function(e,t,n,r){const i=[],o=[]
return i[0]=t[0]-n[0],i[1]=t[1]-n[1],i[2]=t[2]-n[2],o[0]=i[2]*Math.sin(r)+i[0]*Math.cos(r),o[1]=i[1],o[2]=i[2]*Math.cos(r)-i[0]*Math.sin(r),e[0]=o[0]+n[0],e[1]=o[1]+n[1],e[2]=o[2]+n[2],e},rotateZ:I,round:function(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e},scale:g,scaleAndAdd:b,set:s,sign:p,sqrDist:k,sqrLen:z,squaredDistance:O,squaredLength:v,str:function(e){return"vec3("+e[0]+", "+e[1]+", "+e[2]+")"},sub:L,subtract:l,transformMat3:x,transformMat4:T,transformQuat:C},Symbol.toStringTag,{value:"Module"}))},986:function(e,t,n){"use strict"
n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}))
var r=n(968),i=n(975),o=(n(235),n(234)),a=(n(233),n(23)),s=n(1006),c=n(999),l=n(969)
const u=e=>{let t=class extends e{clone(){const e=Object(a.w)(Object(c.a)(this),"unable to clone instance of non-accessor class"),t=e.metadatas,n=e.store,r={},i=new Map
for(const e in t){const a=t[e],c=null==n?void 0:n.originOf(e),l=a.clonable
if(a.readOnly||!1===l||c!==s.a.USER&&c!==s.a.DEFAULTS&&c!==s.a.WEB_MAP&&c!==s.a.WEB_SCENE)continue
const u=this[e]
let d=null
d="function"==typeof l?l(u):"reference"===l?u:Object(o.e)(u),null!=u&&null==d||(c===s.a.DEFAULTS?i.set(e,d):r[e]=d)}const l=new(0,Object.getPrototypeOf(this).constructor)(r)
if(i.size){var u
const e=null==(u=Object(c.a)(l))?void 0:u.store
if(e)for(const[t,n]of i)e.set(t,n,s.a.DEFAULTS)}return l}}
return t=Object(r.a)([Object(l.a)("esri.core.Clonable")],t),t}
let d=class extends(u(i.a)){}
d=Object(r.a)([Object(l.a)("esri.core.Clonable")],d)},987:function(e,t,n){"use strict"
n.d(t,"a",(function(){return c}))
var r=n(971),i=n(1112)
const o=Object.prototype.toString
function a(e){const t="__accessorMetadata__"in e?Object(r.m)(e):e
return function(...e){if(e.push(t),"number"==typeof e[2])throw new Error("Using @cast has parameter decorator is not supported since 4.16")
return s.apply(this,e)}}function s(e,t,n,r){Object(i.b)(e,t).cast=r}function c(...e){if(3!==e.length||"string"!=typeof e[1])return 1===e.length&&"[object Function]"===o.call(e[0])?a(e[0]):1===e.length&&"string"==typeof e[0]?function(e){return(t,n)=>{Object(i.b)(t,e).cast=t[n]}}(e[0]):void 0}},988:function(e,t,n){"use strict"
n.d(t,"a",(function(){return I})),n.d(t,"b",(function(){return x})),n.d(t,"c",(function(){return C})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return p})),n.d(t,"f",(function(){return y})),n.d(t,"g",(function(){return g})),n.d(t,"h",(function(){return m})),n.d(t,"i",(function(){return j})),n.d(t,"j",(function(){return S})),n.d(t,"k",(function(){return v})),n.d(t,"l",(function(){return T})),n.d(t,"m",(function(){return b})),n.d(t,"n",(function(){return E})),n.d(t,"o",(function(){return _})),n.d(t,"p",(function(){return O})),n.d(t,"q",(function(){return w}))
var r=n(23),i=n(447),o=n(1289),a=n(1188)
const s={102113:!0,102100:!0,3857:!0,3785:!0},c={4326:!0,3785:!0,3857:!0,102113:!0,102100:!0,104905:!0,104971:!0},l='PROJCS["WGS_1984_Web_Mercator_Auxiliary_Sphere",GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator_Auxiliary_Sphere"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],PARAMETER["Standard_Parallel_1",0.0],PARAMETER["Auxiliary_Sphere_Type",0.0],UNIT["Meter",1.0]]',u=[-20037508.342788905,20037508.342788905],d=[-20037508.342787,20037508.342787],f={102113:{wkTemplate:'PROJCS["WGS_1984_Web_Mercator",GEOGCS["GCS_WGS_1984_Major_Auxiliary_Sphere",DATUM["D_WGS_1984_Major_Auxiliary_Sphere",SPHEROID["WGS_1984_Major_Auxiliary_Sphere",6378137.0,0.0]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],PARAMETER["Standard_Parallel_1",0.0],UNIT["Meter",1.0]]',valid:u,origin:d,dx:1e-5},102100:{wkTemplate:l,valid:u,origin:d,dx:1e-5},3785:{wkTemplate:'PROJCS["WGS_1984_Web_Mercator",GEOGCS["GCS_WGS_1984_Major_Auxiliary_Sphere",DATUM["D_WGS_1984_Major_Auxiliary_Sphere",SPHEROID["WGS_1984_Major_Auxiliary_Sphere",6378137.0,0.0]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],PARAMETER["Standard_Parallel_1",0.0],UNIT["Meter",1.0]]',valid:u,origin:d,dx:1e-5},3857:{wkTemplate:l,valid:u,origin:d,dx:1e-5},4326:{wkTemplate:'GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",{Central_Meridian}],UNIT["Degree",0.0174532925199433]]',altTemplate:'PROJCS["WGS_1984_Plate_Carree",GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Plate_Carree"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],UNIT["Degrees",111319.491]]',valid:[-180,180],origin:[-180,90],dx:1e-5},104971:{wkTemplate:'GEOGCS["Mars_2000_(Sphere)",DATUM["Mars_2000_(Sphere)",SPHEROID["Mars_2000_(Sphere)",3396190.0,0.0]],PRIMEM["Reference_Meridian",0.0],UNIT["Degree",0.0174532925199433]]',valid:[-180,180],origin:[-180,90],dx:1e-5},104905:{wkTemplate:'GEOGCS["GCS_Mars_2000",DATUM["D_Mars_2000",SPHEROID["Mars_2000_IAU_IAG",3396190.0,169.8944472236118]],PRIMEM["Reference_Meridian",0.0],UNIT["Degree",0.0174532925199433]]',valid:[-180,180],origin:[-180,90],dx:1e-5}}
function h(e,t){return e===t||!Object(r.k)(e)&&!Object(r.k)(t)&&(null!=e.wkid||null!=t.wkid?e.wkid===t.wkid||O(e)&&O(t)||null!=t.latestWkid&&e.wkid===t.latestWkid||null!=e.latestWkid&&t.wkid===e.latestWkid:!(!e.wkt||!t.wkt)&&e.wkt.toUpperCase()===t.wkt.toUpperCase())}function p(e){return T(e)&&e.wkid&&f[e.wkid]||null}function m(e){return!!T(e)&&(e.wkid?null==a.a[e.wkid]:!!e.wkt&&!!/^\s*GEOGCS/i.test(e.wkt))}function g(e){return!(j(e)||S(e))}function b(e){return T(e)&&4326===e.wkid}function y(e){return T(e)&&e.wkid===o.a.CGCS2000}function O(e){return T(e)&&null!=e.wkid&&!0===s[e.wkid]}function v(e){return T(e)&&32662===e.wkid}function E(e){return e===o.a.GCSMARS2000||e===o.a.GCSMARS2000_SPHERE}function j(e){return T(e)&&null!=e.wkid&&E(e.wkid)}function _(e){return e===o.a.GCSMOON2000}function S(e){return T(e)&&null!=e.wkid&&_(e.wkid)}function w(e){return T(e)&&null!=e.wkid&&!0===c[e.wkid]}function T(e){return Object(r.l)(e)&&(null!=e.wkid&&e.wkid>=2e3||null!=e.wkt)}const x={wkid:4326,wkt:Object(i.c)(f[4326].wkTemplate,{Central_Meridian:"0.0"})},C={wkid:102100,latestWkid:3857},I={wkid:32662}},989:function(e,t,n){"use strict"
n.d(t,"a",(function(){return w})),n.d(t,"b",(function(){return I})),n.d(t,"c",(function(){return R})),n.d(t,"d",(function(){return _})),n.d(t,"e",(function(){return j})),n.d(t,"f",(function(){return A})),n.d(t,"g",(function(){return N})),n.d(t,"h",(function(){return P})),n.d(t,"i",(function(){return oe})),n.d(t,"j",(function(){return E})),n.d(t,"k",(function(){return b})),n.d(t,"l",(function(){return O})),n.d(t,"m",(function(){return x})),n.d(t,"n",(function(){return M})),n.d(t,"o",(function(){return D})),n.d(t,"p",(function(){return Z})),n.d(t,"q",(function(){return H})),n.d(t,"r",(function(){return se})),n.d(t,"s",(function(){return J})),n.d(t,"t",(function(){return p})),n.d(t,"u",(function(){return B})),n.d(t,"v",(function(){return ae})),n.d(t,"w",(function(){return K})),n.d(t,"x",(function(){return S})),n.d(t,"y",(function(){return X})),n.d(t,"z",(function(){return ie}))
var r,i,o=n(446),a=n(23),s=n(146);(i=r||(r={})).VALUE_OUT_OF_RANGE="domain-validation-error::value-out-of-range",i.INVALID_CODED_VALUE="domain-validation-error::invalid-coded-value"
var c=n(1010)
const l=/^([0-9])/,u=/[^a-z0-9_\u0080-\uffff]/gi,d=/_{2,}/g,f=/^_/,h=/_$/
function p(e){return null==e?null:e.trim().replace(u,"_").replace(d,"_").replace(f,"").replace(h,"").replace(l,"F$1")||null}const m=["field","field2","field3","normalizationField","rotationInfo.field","proportionalSymbolInfo.field","proportionalSymbolInfo.normalizationField","colorInfo.field","colorInfo.normalizationField"],g=["field","normalizationField"]
function b(e,t){if(null!=e&&null!=t)for(const n of Array.isArray(e)?e:[e])if(y(m,n,t),"visualVariables"in n&&n.visualVariables)for(const e of n.visualVariables)y(g,e,t)}function y(e,t,n){if(e)for(const r of e){const e=Object(s.b)(r,t),i=e&&"function"!=typeof e&&n.get(e)
i&&Object(s.c)(r,i.name,t)}}function O(e,t){var n
if(null!=e&&null!=t&&null!=(n=t.fields)&&n.length)if("startField"in e){var r,i
const n=t.get(e.startField),o=t.get(e.endField)
e.startField=null!=(r=null==n?void 0:n.name)?r:null,e.endField=null!=(i=null==o?void 0:o.name)?i:null}else{var o,a
const n=t.get(e.startTimeField),r=t.get(e.endTimeField)
e.startTimeField=null!=(o=null==n?void 0:n.name)?o:null,e.endTimeField=null!=(a=null==r?void 0:r.name)?a:null}}const v=new Set
function E(e,t){return e&&t?(v.clear(),j(v,e,t),Array.from(v).sort()):[]}function j(e,t,n){var r
if(n)if(null!=t&&null!=(r=t.fields)&&r.length)if(n.includes("*"))for(const{name:n}of t.fields)e.add(n)
else for(const r of n)_(e,t,r)
else{if(n.includes("*"))return e.clear(),void e.add("*")
for(const t of n)null!=t&&e.add(t)}}function _(e,t,n){if("string"==typeof n)if(t){const r=t.get(n)
r&&e.add(r.name)}else e.add(n)}function S(e,t){var n
return Object(a.k)(t)||Object(a.k)(e)?[]:t.includes("*")?(null!=(n=e.fields)?n:[]).map(e=>e.name):t}async function w(e,t,n){var r
if(!n)return
const{arcadeUtils:i}=await Object(c.e)(),o=i.extractFieldNames(n,null==t||null==(r=t.fields)?void 0:r.map(e=>e.name))
for(const n of o)_(e,t,n)}async function T(e,t,r){if(r&&"1=1"!==r){const i=(await Promise.all([n.e(9),n.e(33),n.e(417)]).then(n.bind(null,1363))).WhereClause.create(r,t)
if(!i.isStandardized)throw new o.a("fieldUtils:collectFilterFields","Where clause is not standardized",{where:r})
j(e,t,i.fieldNames)}}function x({displayField:e,fields:t}){return e||(t&&t.length?C(t,"name-or-title")||C(t,"unique-identifier")||C(t,"type-or-category")||function(e){for(const t of e){if(!t||!t.name)continue
const e=t.name.toLowerCase()
if(e.includes("name")||e.includes("title"))return t.name}return null}(t):null)}function C(e,t){for(const n of e)if(n&&n.valueType&&n.valueType===t)return n.name
return null}async function I(e,t){var n
if(!t)return
const r=null==(n=t.elevationInfo)?void 0:n.featureExpressionInfo
return r?r.collectRequiredFields(e,t.fieldsIndex):void 0}async function R(e,t,n){if(!t||!n||!("fields"in n))return
const r=[],i=n.popupTemplate
r.push(async function(e,t,n){const r=[];(null==n?void 0:n.expressionInfos)&&r.push(...n.expressionInfos.map(n=>w(e,t.fieldsIndex,n.expression)))
const i=null==n?void 0:n.content
if(Array.isArray(i))for(const n of i)"expression"===n.type&&n.expressionInfo&&r.push(w(e,t.fieldsIndex,n.expressionInfo.expression))
await Promise.all(r)}(e,t,i)),n.fields&&r.push(...n.fields.map(async n=>function(e,t,n){n.onStatisticExpression?w(e,t,n.onStatisticExpression.expression):e.add(n.onStatisticField)}(e,t.fieldsIndex,n))),await Promise.all(r)}async function A(e,t,n){t&&(t.timeInfo&&Object(a.l)(n)&&n.timeExtent&&j(e,t.fieldsIndex,[t.timeInfo.startField,t.timeInfo.endField]),t.floorInfo&&j(e,t.fieldsIndex,[t.floorInfo.floorField]),Object(a.l)(n)&&Object(a.l)(n.where)&&await T(e,t.fieldsIndex,n.where))}async function P(e,t,n){t&&n&&await Promise.all(n.map(n=>async function(e,t,n){t&&n&&(n.valueExpression?await w(e,t.fieldsIndex,n.valueExpression):n.field&&_(e,t.fieldsIndex,n.field))}(e,t,n)))}function M(e){if(!e)return[]
const t="editFieldsInfo"in e&&e.editFieldsInfo
return t?E(e.fieldsIndex,[t&&t.creatorField,t&&t.creationDateField,t&&t.editorField,t&&t.editDateField]):[]}async function N(e,t){const{labelingInfo:n,fieldsIndex:r}=t
n&&n.length&&await Promise.all(n.map(t=>async function(e,t,n){if(!n)return
const r=n.getLabelExpression(),i=n.where
if("arcade"===r.type)await w(e,t,r.expression)
else{const n=r.expression.match(/{[^}]*}/g)
n&&n.forEach(n=>{_(e,t,n.slice(1,-1))})}await T(e,t,i)}(e,r,t)))}function D(e){const t=e.defaultValue
return void 0!==t&&V(e,t)?t:e.nullable?null:void 0}function L(e){return"number"==typeof e&&!isNaN(e)&&isFinite(e)}function F(e){return null===e||L(e)}const U="isInteger"in Number?Number.isInteger:e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e
function G(e){return null===e||U(e)}function k(e){return null!=e&&"string"==typeof e}function W(e){return null===e||k(e)}function z(){return!0}function V(e,t){let n
switch(e.type){case"date":case"integer":case"long":case"small-integer":case"esriFieldTypeDate":case"esriFieldTypeInteger":case"esriFieldTypeLong":case"esriFieldTypeSmallInteger":n=e.nullable?G:U
break
case"double":case"single":case"esriFieldTypeSingle":case"esriFieldTypeDouble":n=e.nullable?F:L
break
case"string":case"esriFieldTypeString":n=e.nullable?W:k
break
default:n=z}return 1===arguments.length?n:n(t)}const B=["integer","small-integer","single","double"],q=new Set([...B,"esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"])
function H(e){return null!=e&&q.has(e.type)}function J(e){return null!=e&&("string"===e.type||"esriFieldTypeString"===e.type)}function Z(e){return null!=e&&("date"===e.type||"esriFieldTypeDate"===e.type)}var $,Y
function K(e){return null==e||"number"==typeof e&&isNaN(e)?null:e}function X(e,t){return null==e||e.nullable&&null===t?null:H(e)&&!function(e,t){const n="string"==typeof e?Q(e):e
if(!n)return!1
const r=n.min,i=n.max
return n.isInteger?U(t)&&t>=r&&t<=i:t>=r&&t<=i}(e.type,Number(t))?$.OUT_OF_RANGE:V(e,t)?e.domain?function(e,t){switch(e.type){case"range":{const n="range"in e?e.range[0]:e.minValue,i="range"in e?e.range[1]:e.maxValue
if(null!=n&&+t<n||null!=i&&+t>i)return r.VALUE_OUT_OF_RANGE
break}case"coded-value":case"codedValue":if(null==e.codedValues||e.codedValues.every(e=>null==e||e.code!==t))return r.INVALID_CODED_VALUE}return null}(e.domain,t):null:Y.INVALID_TYPE}function Q(e){switch(e){case"esriFieldTypeSmallInteger":case"small-integer":return ee
case"esriFieldTypeInteger":case"integer":return te
case"esriFieldTypeSingle":case"single":return ne
case"esriFieldTypeDouble":case"double":return re}}!function(e){e.OUT_OF_RANGE="numeric-range-validation-error::out-of-range"}($||($={})),function(e){e.INVALID_TYPE="type-validation-error::invalid-type"}(Y||(Y={}))
const ee={min:-32768,max:32767,isInteger:!0},te={min:-2147483648,max:2147483647,isInteger:!0},ne={min:-34e37,max:12e37,isInteger:!1},re={min:-Number.MAX_VALUE,max:Number.MAX_VALUE,isInteger:!1}
function ie(e,t,n){switch(e){case r.INVALID_CODED_VALUE:return`Value ${n} is not in the coded domain - field: ${t.name}, domain: ${JSON.stringify(t.domain)}`
case r.VALUE_OUT_OF_RANGE:return`Value ${n} is out of the range of valid values - field: ${t.name}, domain: ${JSON.stringify(t.domain)}`
case Y.INVALID_TYPE:return`Value ${n} is not a valid value for the field type - field: ${t.name}, type: ${t.type}, nullable: ${t.nullable}`
case $.OUT_OF_RANGE:{const{min:e,max:r}=Q(t.type)
return`Value ${n} is out of range for the number type - field: ${t.name}, type: ${t.type}, value range is ${e} to ${r}`}}}function oe(e,t){return!ae(e,t,null)}function ae(e,t,n){if(!t||!t.attributes||!e){if(Object(a.l)(n))for(const t of null!=e?e:[])n.add(t)
return!0}const r=t.attributes
let i=!1
for(const t of e)if(!(t in r)){if(i=!0,!Object(a.l)(n))break
n.add(t)}return i}function se(e){return!!e&&["raster.itempixelvalue","raster.servicepixelvalue"].some(t=>e.toLowerCase().startsWith(t))}},991:function(e,t,n){"use strict"
n.d(t,"a",(function(){return x})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return w})),n.d(t,"d",(function(){return g})),n.d(t,"e",(function(){return S})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return E})),n.d(t,"h",(function(){return f})),n.d(t,"i",(function(){return b})),n.d(t,"j",(function(){return v})),n.d(t,"k",(function(){return T})),n.d(t,"l",(function(){return c})),n.d(t,"m",(function(){return d})),n.d(t,"n",(function(){return u})),n.d(t,"o",(function(){return a})),n.d(t,"p",(function(){return l})),n.d(t,"q",(function(){return h})),n.d(t,"r",(function(){return p})),n.d(t,"s",(function(){return _})),n(23)
var r=n(985),i=n(1012)
const o=new Float32Array(1)
function a(e){--e
for(let t=1;t<32;t<<=1)e|=e>>t
return e+1}function s(e,t,n){return Math.min(Math.max(e,t),n)}function c(e){return 0==(e&e-1)}function l(e){return e--,e|=e>>1,e|=e>>2,e|=e>>4,e|=e>>8,e|=e>>16,++e}function u(e){return 10**Math.ceil(Math.LOG10E*Math.log(e))}function d(e,t,n){return e+(t-e)*n}function f(e){return e*Math.PI/180}function h(e){return 180*e/Math.PI}function p(e,t=1e-6){return(e<0?-1:1)/Math.max(Math.abs(e),t)}function m(e){return Math.acos(s(e,-1,1))}function g(e){return Math.asin(s(e,-1,1))}function b(e,t,n=1e-6){return e===t||!(!Number.isFinite(e)||!Number.isFinite(t))&&(e>t?e-t:t-e)<=n}const y=new DataView(new ArrayBuffer(Float64Array.BYTES_PER_ELEMENT))
const O=BigInt("1000000")
function v(e,t,n=1e-6){if(e===t)return!0
if(!Number.isFinite(e)||!Number.isFinite(t))return!1
const r=Math.abs(e-t),i=Math.abs(e),o=Math.abs(t)
if(0===e||0===t||i<1e-12&&o<1e-12){if(r>.01*n)return!1}else if(r/(i+o)>n)return!1
return!0}function E(e){return j(Math.max(-x,Math.min(e,x)))}function j(e){return o[0]=e,o[0]}function _(e,t,n){const r=s((n-e)/(t-e),0,1)
return r*r*(3-2*r)}function S(e,t){const n=Object(r.u)(e),i=g(e[2]/n),o=Math.atan2(e[1]/n,e[0]/n)
return Object(r.B)(t,n,i,o),t}function w(e,t,n){return Object(i.l)(e,t[0],t[1],t[2],t[3]*n)}function T(e){const t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[3]*e[3]+e[4]*e[4]+e[5]*e[5],r=e[6]*e[6]+e[7]*e[7]+e[8]*e[8]
return!(b(t,1)&&b(n,1)&&b(r,1))}(function(e){const t=function(e){return y.setFloat64(0,e),y.getBigInt64(0)}(e=Math.abs(e)),n=function(e){return y.setBigInt64(0,e),y.getFloat64(0)}(t<=O?O:t-O)
Math.abs(e-n)})(1)
const x=j(34028234663852886e22)},992:function(e,t,n){"use strict"
n.d(t,"a",(function(){return v}))
var r,i=n(968),o=n(233),a=n(23),s=n(970),c=n(987),l=(n(445),n(977)),u=n(969),d=n(974),f=n(971),h=n(1004),p=n(769),m=n(988),g=n(774)
const b=[0,0]
function y(e){return e&&("esri.geometry.SpatialReference"===e.declaredClass||null!=e.wkid)}let O=r=class extends h.a{static copy(e,t){t._set("x",e._get("x")),t._set("y",e._get("y")),t._set("z",e._get("z")),t._set("m",e._get("m"))
const n=e._get("spatialReference")
t._set("spatialReference",Object.isFrozen(n)?n:n.clone())}constructor(...e){super(...e),this.x=0,this.y=0,this.z=void 0,this.m=void 0,this.type="point"}normalizeCtorArgs(e,t,n,r,i){let a
if(Array.isArray(e))a=e,i=t,e=a[0],t=a[1],n=a[2],r=a[3]
else if(e&&"object"==typeof e){if(a=e,e=null!=a.x?a.x:a.longitude,t=null!=a.y?a.y:a.latitude,n=a.z,r=a.m,(i=a.spatialReference)&&"esri.geometry.SpatialReference"!==i.declaredClass&&(i=new p.default(i)),null!=a.longitude||null!=a.latitude)if(null==a.longitude)o.a.getLogger(this.declaredClass).warn(".longitude=","Latitude was defined without longitude")
else if(null==a.latitude)o.a.getLogger(this.declaredClass).warn(".latitude=","Longitude was defined without latitude")
else if(!a.declaredClass&&i&&i.isWebMercator){const n=Object(g.lngLatToXY)(a.longitude,a.latitude,b)
e=n[0],t=n[1]}}else y(n)?(i=n,n=null):y(r)&&(i=r,r=null)
const s={x:e,y:t}
return null==s.x&&null!=s.y?o.a.getLogger(this.declaredClass).warn(".y=","Y coordinate was defined without an X coordinate"):null==s.y&&null!=s.x&&o.a.getLogger(this.declaredClass).warn(".x=","X coordinate was defined without a Y coordinate"),null!=i&&(s.spatialReference=i),null!=n&&(s.z=n),null!=r&&(s.m=r),s}get cache(){return this.commitProperty("x"),this.commitProperty("y"),this.commitProperty("z"),this.commitProperty("m"),this.commitProperty("spatialReference"),{}}get hasM(){return void 0!==this.m}set hasM(e){e!==(void 0!==this._get("m"))&&(this._set("m",e?0:void 0),this._set("hasM",e))}get hasZ(){return void 0!==this.z}set hasZ(e){e!==(void 0!==this._get("z"))&&(this._set("z",e?0:void 0),this._set("hasZ",e))}get latitude(){const{spatialReference:e,x:t,y:n}=this
if(e){if(e.isWebMercator)return Object(g.xyToLngLat)(t,n,b)[1]
if(e.isGeographic)return n}return null}set latitude(e){const{spatialReference:t,x:n}=this
null!=e&&t&&(t.isWebMercator?this._set("y",Object(g.lngLatToXY)(n,e,b)[1]):t.isGeographic&&this._set("y",e),this._set("latitude",e))}get longitude(){const{x:e,y:t,spatialReference:n}=this
if(n){if(n.isWebMercator)return Object(g.xyToLngLat)(e,t,b)[0]
if(n.isGeographic)return e}return null}set longitude(e){const{y:t,spatialReference:n}=this
null!=e&&n&&(n.isWebMercator?this._set("x",Object(g.lngLatToXY)(e,t,b)[0]):n.isGeographic&&this._set("x",e),this._set("longitude",e))}writeX(e,t,n){t[n]=isNaN(e)?"NaN":e}readX(e){return"string"==typeof e?NaN:e}clone(){const e=new r
return e.x=this.x,e.y=this.y,e.z=this.z,e.m=this.m,e.spatialReference=this.spatialReference,e}copy(e){return r.copy(e,this),this}equals(e){if(Object(a.k)(e))return!1
const{x:t,y:n,z:r,m:i,spatialReference:o}=this,{z:s,m:c}=e
let{x:l,y:u,spatialReference:d}=e
if(!o.equals(d))if(o.isWebMercator&&d.isWGS84)[l,u]=Object(g.lngLatToXY)(l,u),d=o
else{if(!o.isWGS84||!d.isWebMercator)return!1;[l,u]=Object(g.xyToLngLat)(l,u),d=o}return t===l&&n===u&&r===s&&i===c&&o.wkid===d.wkid}offset(e,t,n){var r
return this.x+=e,this.y+=t,null!=n&&(this.z=(null!=(r=this.z)?r:0)+n),this}normalize(){if(!this.spatialReference)return this
const e=Object(m.e)(this.spatialReference)
if(!e)return this
let t=this.x
const[n,r]=e.valid,i=2*r
let o
return t>r?(o=Math.ceil(Math.abs(t-r)/i),t-=o*i):t<n&&(o=Math.ceil(Math.abs(t-n)/i),t+=o*i),this._set("x",t),this}distance(e){return function(e,t){const n=e.x-t.x,r=e.y-t.y,i=e.hasZ&&t.hasZ?e.z-t.z:0
return Math.sqrt(n*n+r*r+i*i)}(this,e)}toArray(){const e=this.hasZ,t=this.hasM
return e&&t?[this.x,this.y,this.z,this.m]:e?[this.x,this.y,this.z]:t?[this.x,this.y,this.m]:[this.x,this.y]}toJSON(e){return this.write({},e)}}
Object(i.a)([Object(s.b)({readOnly:!0})],O.prototype,"cache",null),Object(i.a)([Object(s.b)({type:Boolean,json:{read:!1,write:{enabled:!1,overridePolicy:null}}})],O.prototype,"hasM",null),Object(i.a)([Object(s.b)({type:Boolean,json:{read:!1,write:{enabled:!1,overridePolicy:null}}})],O.prototype,"hasZ",null),Object(i.a)([Object(s.b)({type:Number})],O.prototype,"latitude",null),Object(i.a)([Object(s.b)({type:Number})],O.prototype,"longitude",null),Object(i.a)([Object(s.b)({type:Number,json:{type:[Number,String],write:{isRequired:!0,allowNull:!0}}}),Object(c.a)(e=>isNaN(e)?e:Object(f.i)(e))],O.prototype,"x",void 0),Object(i.a)([Object(d.a)("x")],O.prototype,"writeX",null),Object(i.a)([Object(l.a)("x")],O.prototype,"readX",null),Object(i.a)([Object(s.b)({type:Number,json:{write:!0}})],O.prototype,"y",void 0),Object(i.a)([Object(s.b)({type:Number,json:{write:{overridePolicy(){return{enabled:this.hasZ}}}}})],O.prototype,"z",void 0),Object(i.a)([Object(s.b)({type:Number,json:{write:{overridePolicy(){return{enabled:this.hasM}}}}})],O.prototype,"m",void 0),O=r=Object(i.a)([Object(u.a)("esri.geometry.Point")],O),O.prototype.toJSON.isDefaultToJSON=!0
const v=O},993:function(e,t,n){"use strict"
n.d(t,"a",(function(){return I}))
var r,i=n(968),o=n(1117),a=n(1002),s=n(234),c=n(23),l=n(1049),u=n(1114),d=n(1024),f=n(970),h=n(971),p=n(1082),m=n(969),g=n(1060),b=n(1087)
const y=new l.a(class{constructor(){this.target=null,this.cancellable=!1,this.defaultPrevented=!1,this.item=void 0,this.type=void 0}preventDefault(){this.cancellable&&(this.defaultPrevented=!0)}reset(e){this.defaultPrevented=!1,this.item=e}},void 0,e=>{e.item=null,e.target=null,e.defaultPrevented=!1,e.cancellable=!1}),O=()=>{}
function v(e){return e?e instanceof C?e.toArray():e.length?Array.prototype.slice.apply(e):[]:[]}function E(e){if(e&&e.length)return e[0]}function j(e,t,n,r){const i=Math.min(e.length-n,t.length-r)
let o=0
for(;o<i&&e[n+o]===t[r+o];)o++
return o}const _=new Set,S=new Set,w=new Set,T=new Map
let x=0,C=r=class extends a.a.EventedAccessor{static isCollection(e){return null!=e&&e instanceof r}constructor(e){super(e),this._chgListeners=[],this._notifications=null,this._timer=null,this._observable=new b.a,this.length=0,this._items=[],Object.defineProperty(this,"uid",{value:x++})}normalizeCtorArgs(e){return e?Array.isArray(e)||e instanceof r?{items:e}:e:{}}destroy(){this.removeAll()}*[Symbol.iterator](){yield*this.items}get items(){return Object(g.d)(this._observable),this._items}set items(e){this._emitBeforeChanges(u.a.ADD)||(this._splice(0,this.length,v(e)),this._emitAfterChanges(u.a.ADD))}hasEventListener(e){return"change"===e?this._chgListeners.length>0:this._emitter.hasEventListener(e)}on(e,t){if("change"===e){const e=this._chgListeners,n={removed:!1,callback:t}
return e.push(n),this._notifications&&this._notifications.push({listeners:e.slice(),items:this._items.slice(),changes:[]}),{remove(){this.remove=O,n.removed=!0,e.splice(e.indexOf(n),1)}}}return this._emitter.on(e,t)}once(e,t){const n=this.on(e,t)
return{remove(){n.remove()}}}add(e,t){if(Object(g.d)(this._observable),this._emitBeforeChanges(u.a.ADD))return this
const n=this.getNextIndex(null!=t?t:null)
return this._splice(n,0,[e]),this._emitAfterChanges(u.a.ADD),this}addMany(e,t=this._items.length){if(Object(g.d)(this._observable),!e||!e.length)return this
if(this._emitBeforeChanges(u.a.ADD))return this
const n=this.getNextIndex(t)
return this._splice(n,0,v(e)),this._emitAfterChanges(u.a.ADD),this}at(e){if(Object(g.d)(this._observable),(e=Math.trunc(e)||0)<0&&(e+=this.length),!(e<0||e>=this.length))return this._items[e]}removeAll(){if(Object(g.d)(this._observable),!this.length||this._emitBeforeChanges(u.a.REMOVE))return[]
const e=this._splice(0,this.length)||[]
return this._emitAfterChanges(u.a.REMOVE),e}clone(){return Object(g.d)(this._observable),this._createNewInstance({items:this._items.map(s.a)})}concat(...e){Object(g.d)(this._observable)
const t=e.map(v)
return this._createNewInstance({items:this._items.concat(...t)})}drain(e,t){if(Object(g.d)(this._observable),!this.length||this._emitBeforeChanges(u.a.REMOVE))return
const n=Object(c.d)(this._splice(0,this.length)),r=n.length
for(let i=0;i<r;i++)e.call(t,n[i],i,n)
this._emitAfterChanges(u.a.REMOVE)}every(e,t){return Object(g.d)(this._observable),this._items.every(e,t)}filter(e,t){let n
return Object(g.d)(this._observable),n=2===arguments.length?this._items.filter(e,t):this._items.filter(e),this._createNewInstance({items:n})}find(e,t){return Object(g.d)(this._observable),this._items.find(e,t)}findIndex(e,t){return Object(g.d)(this._observable),this._items.findIndex(e,t)}flatten(e,t){Object(g.d)(this._observable)
const n=[]
return function e(t,n,r,i){n&&n.forEach((n,o,a)=>{t.push(n),e(t,r.call(i,n,o,a),r,i)})}(n,this,e,t),new r(n)}forEach(e,t){return Object(g.d)(this._observable),this._items.forEach(e,t)}getItemAt(e){return Object(g.d)(this._observable),this._items[e]}getNextIndex(e){var t
Object(g.d)(this._observable)
const n=this.length
return(e=null!=(t=e)?t:n)<0?e=0:e>n&&(e=n),e}includes(e,t=0){return Object(g.d)(this._observable),this._items.includes(e,t)}indexOf(e,t=0){return Object(g.d)(this._observable),this._items.indexOf(e,t)}join(e=","){return Object(g.d)(this._observable),this._items.join(e)}lastIndexOf(e,t=this.length-1){return Object(g.d)(this._observable),this._items.lastIndexOf(e,t)}map(e,t){Object(g.d)(this._observable)
const n=this._items.map(e,t)
return new r({items:n})}reorder(e,t=this.length-1){Object(g.d)(this._observable)
const n=this.indexOf(e)
if(-1!==n){if(t<0?t=0:t>=this.length&&(t=this.length-1),n!==t){if(this._emitBeforeChanges(u.a.MOVE))return e
this._splice(n,1),this._splice(t,0,[e]),this._emitAfterChanges(u.a.MOVE)}return e}}pop(){if(Object(g.d)(this._observable),!this.length||this._emitBeforeChanges(u.a.REMOVE))return
const e=E(this._splice(this.length-1,1))
return this._emitAfterChanges(u.a.REMOVE),e}push(...e){return Object(g.d)(this._observable),this._emitBeforeChanges(u.a.ADD)||(this._splice(this.length,0,e),this._emitAfterChanges(u.a.ADD)),this.length}reduce(e,t){Object(g.d)(this._observable)
const n=this._items
return 2===arguments.length?n.reduce(e,t):n.reduce(e)}reduceRight(e,t){Object(g.d)(this._observable)
const n=this._items
return 2===arguments.length?n.reduceRight(e,t):n.reduceRight(e)}remove(e){return Object(g.d)(this._observable),this.removeAt(this.indexOf(e))}removeAt(e){if(Object(g.d)(this._observable),e<0||e>=this.length||this._emitBeforeChanges(u.a.REMOVE))return
const t=E(this._splice(e,1))
return this._emitAfterChanges(u.a.REMOVE),t}removeMany(e){if(Object(g.d)(this._observable),!e||!e.length||this._emitBeforeChanges(u.a.REMOVE))return[]
const t=e instanceof r?e.toArray():e,n=this._items,i=[],o=t.length
for(let e=0;e<o;e++){const r=t[e],o=n.indexOf(r)
if(o>-1){const r=1+j(t,n,e+1,o+1),a=this._splice(o,r)
a&&a.length>0&&i.push.apply(i,a),e+=r-1}}return this._emitAfterChanges(u.a.REMOVE),i}reverse(){if(Object(g.d)(this._observable),this._emitBeforeChanges(u.a.MOVE))return this
const e=this._splice(0,this.length)
return e&&(e.reverse(),this._splice(0,0,e)),this._emitAfterChanges(u.a.MOVE),this}shift(){if(Object(g.d)(this._observable),!this.length||this._emitBeforeChanges(u.a.REMOVE))return
const e=E(this._splice(0,1))
return this._emitAfterChanges(u.a.REMOVE),e}slice(e=0,t=this.length){return Object(g.d)(this._observable),this._createNewInstance({items:this._items.slice(e,t)})}some(e,t){return Object(g.d)(this._observable),this._items.some(e,t)}sort(e){if(Object(g.d)(this._observable),!this.length||this._emitBeforeChanges(u.a.MOVE))return this
const t=Object(c.d)(this._splice(0,this.length))
return arguments.length?t.sort(e):t.sort(),this._splice(0,0,t),this._emitAfterChanges(u.a.MOVE),this}splice(e,t,...n){Object(g.d)(this._observable)
const r=(t?u.a.REMOVE:0)|(n.length?u.a.ADD:0)
if(this._emitBeforeChanges(r))return[]
const i=this._splice(e,t,n)||[]
return this._emitAfterChanges(r),i}toArray(){return Object(g.d)(this._observable),this._items.slice()}toJSON(){return Object(g.d)(this._observable),this.toArray()}toLocaleString(){return Object(g.d)(this._observable),this._items.toLocaleString()}toString(){return Object(g.d)(this._observable),this._items.toString()}unshift(...e){return Object(g.d)(this._observable),!e.length||this._emitBeforeChanges(u.a.ADD)||(this._splice(0,0,e),this._emitAfterChanges(u.a.ADD)),this.length}_createNewInstance(e){return new this.constructor(e)}_splice(e,t,n){const r=this._items,i=this.itemType
let o,a
if(!this._notifications&&this.hasEventListener("change")&&(this._notifications=[{listeners:this._chgListeners.slice(),items:this._items.slice(),changes:[]}],this._timer&&this._timer.remove(),this._timer=Object(d.b)(()=>this._dispatchChange())),t){if(a=r.splice(e,t),this.hasEventListener("before-remove")){const t=y.acquire()
t.target=this,t.cancellable=!0
for(let n=0,i=a.length;n<i;n++)o=a[n],t.reset(o),this.emit("before-remove",t),t.defaultPrevented&&(a.splice(n,1),r.splice(e,0,o),e+=1,n-=1,i-=1)
y.release(t)}if(this.length=this._items.length,this.hasEventListener("after-remove")){const e=y.acquire()
e.target=this,e.cancellable=!1
const t=a.length
for(let n=0;n<t;n++)e.reset(a[n]),this.emit("after-remove",e)
y.release(e)}}if(n&&n.length){if(i){const e=[]
for(const t of n){const n=i.ensureType(t)
null==n&&null!=t||e.push(n)}n=e}const t=this.hasEventListener("before-add"),o=this.hasEventListener("after-add"),a=e===this.length
if(t||o){const i=y.acquire()
i.target=this,i.cancellable=!0
const s=y.acquire()
s.target=this,s.cancellable=!1
for(const c of n)t?(i.reset(c),this.emit("before-add",i),i.defaultPrevented||(a?r.push(c):r.splice(e++,0,c),this._set("length",r.length),o&&(s.reset(c),this.emit("after-add",s)))):(a?r.push(c):r.splice(e++,0,c),this._set("length",r.length),s.reset(c),this.emit("after-add",s))
y.release(s),y.release(i)}else{if(a)for(const e of n)r.push(e)
else r.splice(e,0,...n)
this._set("length",r.length)}}return(n&&n.length||a&&a.length)&&this._notifyChangeEvent(n,a),a}_emitBeforeChanges(e){let t=!1
if(this.hasEventListener("before-changes")){const n=y.acquire()
n.target=this,n.cancellable=!0,n.type=e,this.emit("before-changes",n),t=n.defaultPrevented,y.release(n)}return t}_emitAfterChanges(e){if(this.hasEventListener("after-changes")){const t=y.acquire()
t.target=this,t.cancellable=!1,t.type=e,this.emit("after-changes",t),y.release(t)}this._observable.notify()}_notifyChangeEvent(e,t){this.hasEventListener("change")&&this._notifications&&this._notifications[this._notifications.length-1].changes.push({added:e,removed:t})}_dispatchChange(){if(this._timer&&(this._timer.remove(),this._timer=null),!this._notifications)return
const e=this._notifications
this._notifications=null
for(const t of e){const e=t.changes
_.clear(),S.clear(),w.clear()
for(const{added:t,removed:n}of e){if(t)if(0===w.size&&0===S.size)for(const e of t)_.add(e)
else for(const e of t)S.has(e)?(w.add(e),S.delete(e)):w.has(e)||_.add(e)
if(n)if(0===w.size&&0===_.size)for(const e of n)S.add(e)
else for(const e of n)_.has(e)?_.delete(e):(w.delete(e),S.add(e))}const n=o.a.acquire()
_.forEach(e=>{n.push(e)})
const r=o.a.acquire()
S.forEach(e=>{r.push(e)})
const i=this._items,a=t.items,s=o.a.acquire()
if(w.forEach(e=>{a.indexOf(e)!==i.indexOf(e)&&s.push(e)}),t.listeners&&(n.length||r.length||s.length)){const e={target:this,added:n,removed:r,moved:s},i=t.listeners.length
for(let n=0;n<i;n++){const r=t.listeners[n]
r.removed||r.callback.call(this,e)}}o.a.release(n),o.a.release(r),o.a.release(s)}_.clear(),S.clear(),w.clear()}}
C.ofType=e=>{if(!e)return r
if(T.has(e))return T.get(e)
let t=null
if("function"==typeof e)t=e.prototype.declaredClass
else if(e.base)t=e.base.prototype.declaredClass
else for(const n in e.typeMap){const r=e.typeMap[n].prototype.declaredClass
t?t+=" | "+r:t=r}let n=class extends r{}
return Object(i.a)([Object(p.a)({Type:e,ensureType:"function"==typeof e?Object(h.m)(e):Object(h.k)(e)})],n.prototype,"itemType",void 0),n=Object(i.a)([Object(m.a)(`esri.core.Collection<${t}>`)],n),T.set(e,n),n},Object(i.a)([Object(f.b)()],C.prototype,"length",void 0),Object(i.a)([Object(f.b)()],C.prototype,"items",null),C=r=Object(i.a)([Object(m.a)("esri.core.Collection")],C)
const I=C},996:function(e,t,n){"use strict"
n.d(t,"a",(function(){return L})),n.d(t,"b",(function(){return D})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return y})),n.d(t,"e",(function(){return O})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return x})),n.d(t,"h",(function(){return v})),n.d(t,"i",(function(){return _})),n.d(t,"j",(function(){return w})),n.d(t,"k",(function(){return S})),n.d(t,"l",(function(){return c})),n.d(t,"m",(function(){return a})),n.d(t,"n",(function(){return I})),n.d(t,"o",(function(){return A})),n.d(t,"p",(function(){return N})),n.d(t,"q",(function(){return h})),n.d(t,"r",(function(){return f})),n.d(t,"s",(function(){return p})),n.d(t,"t",(function(){return u})),n.d(t,"u",(function(){return l})),n.d(t,"v",(function(){return b})),n.d(t,"w",(function(){return C})),n.d(t,"x",(function(){return T})),n.d(t,"y",(function(){return j})),n.d(t,"z",(function(){return E})),n.d(t,"A",(function(){return M})),n.d(t,"B",(function(){return R})),n.d(t,"C",(function(){return d})),n.d(t,"D",(function(){return g}))
n(235)
var r=n(991),i=n(23),o=n(770)
function a(e=F){return[e[0],e[1],e[2],e[3]]}function s(e){return[e[0],e[1],e[2],e[3]]}function c(e,t){return e!==t&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3]),e}function l(e,t,n,r,i=a()){return i[0]=e,i[1]=t,i[2]=n,i[3]=r,i}function u(e,t=a()){return t[0]=e.xmin,t[1]=e.ymin,t[2]=e.xmax,t[3]=e.ymax,t}function d(e,t){return new o.default({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:t})}function f(e,t){t[0]<e[0]&&(e[0]=t[0]),t[0]>e[2]&&(e[2]=t[0]),t[1]<e[1]&&(e[1]=t[1]),t[1]>e[3]&&(e[3]=t[1])}function h(e,t,n){if(Object(i.k)(t))c(n,e)
else if("length"in t)P(t)?(n[0]=Math.min(e[0],t[0]),n[1]=Math.min(e[1],t[1]),n[2]=Math.max(e[2],t[2]),n[3]=Math.max(e[3],t[3])):2!==t.length&&3!==t.length||(n[0]=Math.min(e[0],t[0]),n[1]=Math.min(e[1],t[1]),n[2]=Math.max(e[2],t[0]),n[3]=Math.max(e[3],t[1]))
else switch(t.type){case"extent":n[0]=Math.min(e[0],t.xmin),n[1]=Math.min(e[1],t.ymin),n[2]=Math.max(e[2],t.xmax),n[3]=Math.max(e[3],t.ymax)
break
case"point":n[0]=Math.min(e[0],t.x),n[1]=Math.min(e[1],t.y),n[2]=Math.max(e[2],t.x),n[3]=Math.max(e[3],t.y)}}function p(e,t,n=e){const r=t.length
let i=e[0],o=e[1],a=e[2],s=e[3]
for(let e=0;e<r;e++){const n=t[e]
i=Math.min(i,n[0]),o=Math.min(o,n[1]),a=Math.max(a,n[0]),s=Math.max(s,n[1])}return n[0]=i,n[1]=o,n[2]=a,n[3]=s,n}function m(e){for(let t=0;t<4;t++)if(!isFinite(e[t]))return!1
return!0}function g(e){return Object(i.k)(e)||e[0]>=e[2]?0:e[2]-e[0]}function b(e){return e[1]>=e[3]?0:e[3]-e[1]}function y(e){return g(e)*b(e)}function O(e,t=[0,0]){return t[0]=(e[0]+e[2])/2,t[1]=(e[1]+e[3])/2,t}function v(e,t){return S(e,t[0],t[1])}function E(e,t){const n=t[3],r=.5*(e[0]+e[2]),i=Math.abs(t[0]-r),o=.5*(e[2]-e[0])
if(i>n+o)return!1
const a=.5*(e[1]+e[3]),s=.5*(e[3]-e[1]),c=Math.abs(t[1]-a)
if(c>n+s)return!1
if(i<o||c<s)return!0
const l=i-o,u=c-s
return l*l+u*u<=n*n}function j(e,t,n){const r=e[0],i=e[1],o=e[2],a=e[3],{x:s,y:c}=t,{x:l,y:u}=n,d=(e,t)=>(u-c)*e+(s-l)*t+(l*c-s*u)<0,f=d(r,a),h=d(o,a),p=d(o,i),m=d(r,i)
return!(f===h&&h===p&&p===m&&m===f||s<r&&l<r||s>o&&l>o||c>a&&u>a||c<i&&u<i)}function _(e,t){return S(e,t.x,t.y)}function S(e,t,n){return t>=e[0]&&n>=e[1]&&t<=e[2]&&n<=e[3]}function w(e,t,n){return t[0]>=e[0]-n&&t[1]>=e[1]-n&&t[0]<=e[2]+n&&t[1]<=e[3]+n}function T(e,t){return Math.max(t[0],e[0])<=Math.min(t[2],e[2])&&Math.max(t[1],e[1])<=Math.min(t[3],e[3])}function x(e,t){return t[0]>=e[0]&&t[2]<=e[2]&&t[1]>=e[1]&&t[3]<=e[3]}function C(e,t,n){if(Object(i.k)(t))return c(n,e)
const o=t[0],a=t[1],s=t[2],l=t[3]
return n[0]=Object(r.f)(e[0],o,s),n[1]=Object(r.f)(e[1],a,l),n[2]=Object(r.f)(e[2],o,s),n[3]=Object(r.f)(e[3],a,l),n}function I(e,t){const n=(e[0]+e[2])/2,r=(e[1]+e[3])/2,i=Math.max(Math.abs(t[0]-n)-g(e)/2,0),o=Math.max(Math.abs(t[1]-r)-b(e)/2,0)
return Math.sqrt(i*i+o*o)}function R(e,t,n,r=e){return r[0]=e[0]+t,r[1]=e[1]+n,r[2]=e[2]+t,r[3]=e[3]+n,r}function A(e){return e?c(e,L):a(L)}function P(e){return null!=e&&4===e.length}function M(e){return!(0!==g(e)&&isFinite(e[0])||0!==b(e)&&isFinite(e[1]))}function N(e,t){return P(e)&&P(t)?e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]:e===t}const D=[-1/0,-1/0,1/0,1/0],L=[1/0,1/0,-1/0,-1/0],F=[0,0,0,0]},997:function(e,t,n){"use strict"
n.d(t,"a",(function(){return Y})),n.d(t,"b",(function(){return B})),n.d(t,"c",(function(){return Z})),n.d(t,"d",(function(){return _})),n.d(t,"e",(function(){return w})),n.d(t,"f",(function(){return J})),n.d(t,"g",(function(){return U})),n.d(t,"h",(function(){return L})),n.d(t,"i",(function(){return W})),n.d(t,"j",(function(){return F})),n.d(t,"k",(function(){return l})),n.d(t,"l",(function(){return S})),n.d(t,"m",(function(){return N})),n.d(t,"n",(function(){return z})),n.d(t,"o",(function(){return $})),n.d(t,"p",(function(){return M})),n.d(t,"q",(function(){return R})),n.d(t,"r",(function(){return A})),n.d(t,"s",(function(){return T})),n.d(t,"t",(function(){return P})),n.d(t,"u",(function(){return C})),n.d(t,"v",(function(){return I})),n.d(t,"w",(function(){return x})),n.d(t,"x",(function(){return D})),n.d(t,"y",(function(){return j})),n.d(t,"z",(function(){return V})),n(235)
var r=n(976),i=n(23),o=n(1089),a=n(1052),s=n(988),c=n(1188)
const l=39.37,u=a.a.radius*Math.PI/200,d=/UNIT\[([^\]]+)\]\]$/i,f=c.a,h=/UNIT\[([^\]]+)\]/i,p=new Set([4261,4305,4807,4810,4811,4812,4816,4819,4821,4901,4902,37225,104139,104140]),m=Object(r.b)()({meter:"meters",foot:"feet",foot_us:"us-feet",foot_clarke:"clarke-feet",yard_clarke:"clarke-yards",link_clarke:"clarke-links",yard_sears:"sears-yards",foot_sears:"sears-feet",chain_sears:"sears-chains",chain_benoit_1895_b:"benoit-1895-b-chains",yard_indian:"indian-yards",yard_indian_1937:"indian-1937-yards",foot_gold_coast:"gold-coast-feet",chain_sears_1922_truncated:"sears-1922-truncated-chains","50_kilometers":"50-kilometers","150_kilometers":"150-kilometers"}),g=e=>e*e,b=e=>e*e*e,y={length:{baseUnit:"meters",units:{millimeters:{inBaseUnits:.001},centimeters:{inBaseUnits:.01},decimeters:{inBaseUnits:.1},meters:{inBaseUnits:1},kilometers:{inBaseUnits:1e3},inches:{inBaseUnits:.0254},feet:{inBaseUnits:.3048},yards:{inBaseUnits:.9144},miles:{inBaseUnits:1609.344},"nautical-miles":{inBaseUnits:1852},"us-feet":{inBaseUnits:1200/3937}}},area:{baseUnit:"square-meters",units:{"square-millimeters":{inBaseUnits:g(.001)},"square-centimeters":{inBaseUnits:g(.01)},"square-decimeters":{inBaseUnits:g(.1)},"square-meters":{inBaseUnits:1},"square-kilometers":{inBaseUnits:g(1e3)},"square-inches":{inBaseUnits:g(.0254)},"square-feet":{inBaseUnits:g(.3048)},"square-yards":{inBaseUnits:g(.9144)},"square-miles":{inBaseUnits:g(1609.344)},"square-us-feet":{inBaseUnits:g(1200/3937)},acres:{inBaseUnits:.0015625*g(1609.344)},ares:{inBaseUnits:100},hectares:{inBaseUnits:1e4}}},volume:{baseUnit:"liters",units:{liters:{inBaseUnits:1},"cubic-millimeters":{inBaseUnits:1e3*b(.001)},"cubic-centimeters":{inBaseUnits:1e3*b(.01)},"cubic-decimeters":{inBaseUnits:1e3*b(.1)},"cubic-meters":{inBaseUnits:1e3},"cubic-kilometers":{inBaseUnits:1e3*b(1e3)},"cubic-inches":{inBaseUnits:1e3*b(.0254)},"cubic-feet":{inBaseUnits:1e3*b(.3048)},"cubic-yards":{inBaseUnits:1e3*b(.9144)},"cubic-miles":{inBaseUnits:1e3*b(1609.344)}}},angle:{baseUnit:"radians",units:{radians:{inBaseUnits:1},degrees:{inBaseUnits:Math.PI/180}}}},O=(()=>{const e={}
for(const t in y)for(const n in y[t].units)e[n]=t
return e})(),v=["metric","imperial","inches","feet","yards","miles","nautical-miles","us-feet","meters","kilometers"],E=new Map([["meters","square-meters"],["feet","square-feet"],["us-feet","square-us-feet"]])
function j(e){const t=O[e]
if(!t)throw new Error("unknown type")
return t}function _(e){return function(e){return y[e].baseUnit}(j(e))}function S(e,t=null){return t=t||j(e),y[t].baseUnit===e}function w(e,t,n){if(t===n)return e
const r=j(t)
if(r!==j(n))throw new Error("incompatible units")
const i=S(t,r)?e:function(e,t,n){return e*y[n].units[t].inBaseUnits}(e,t,r)
return S(n,r)?i:function(e,t,n){return e/y[n].units[t].inBaseUnits}(i,n,r)}function T(e,t,n){switch(n){case"metric":return C(e,t)
case"imperial":return R(e,t)
default:return n}}function x(e,t,n){switch(n){case"metric":return I(e,t)
case"imperial":return A(e,t)
default:return n}}function C(e,t){const n=w(e,t,"meters")
return Math.abs(n)<3e3?"meters":"kilometers"}function I(e,t){const n=w(e,t,"meters")
return Math.abs(n)<1e5?"meters":"kilometers"}function R(e,t){const n=w(e,t,"feet")
return Math.abs(n)<1e3?"feet":"miles"}function A(e,t){const n=w(e,t,"feet")
return Math.abs(n)<1e5?"feet":"miles"}function P(e,t){const n=w(e,t,"square-meters")
return Math.abs(n)<3e6?"square-meters":"square-kilometers"}function M(e,t){const n=w(e,t,"square-feet")
return Math.abs(n)<1e6?"square-feet":"square-miles"}function N(e,t,n){return w(e,t,"meters")/(n*Math.PI/180)}function D(e){return m.fromJSON(e.toLowerCase())||null}function L(e){if(Object(i.l)(e)&&!Object(s.g)(e))return 1
const t=U(e)
return t>1e5?1:t}function F(e){return U(e)>=Object(o.e)(e).metersPerDegree?"meters":W(e)}function U(e,t=a.a.metersPerDegree){return Object(i.v)(function(e,t=!1){const n=Object(i.l)(e)?e.wkid:null,r=Object(i.l)(e)?e.wkt:null
let o=null
if(n){if(Object(s.n)(n))return a.b.metersPerDegree
if(Object(s.o)(n))return a.c.metersPerDegree
o=f.values[f[n]],!o&&t&&p.has(n)&&(o=u)}else r&&(H(r)?o=G(d.exec(r),o):q(r)&&(o=G(h.exec(r),o)))
return o}(e,!0),t)}function G(e,t){return e&&e[1]?k(e[1]):t}function k(e){return parseFloat(e.split(",")[1])}function W(e){const t=Object(i.l)(e)?e.wkid:null,n=Object(i.l)(e)?e.wkt:null
let r=null
if(t)r=f.units[f[t]]
else if(n){const e=H(n)?d:q(n)?h:null
if(e){const t=e.exec(n)
t&&t[1]&&(r=function(e){const t=/[\\"\\']{1}([^\\"\\']+)/.exec(e)
let n=t&&t[1]
if(!n||!f.units.includes(n)){const t=k(e)
n=null
const r=f.values
for(let e=0;e<r.length;++e)if(Math.abs(t-r[e])<1e-7){n=f.units[e]
break}}return n}(t[1]))}}return Object(i.l)(r)?D(r):null}function z(e){const t=W(e)
return Object(i.k)(t)||!v.includes(t)?null:t}function V(e){const t=F(e)
return Object(i.k)(t)||!v.includes(t)?null:t}function B(e){const t=W(e)
return Object(i.k)(t)?null:E.get(t)}function q(e){return/^GEOCCS/i.test(e)}function H(e){return/^PROJCS/i.test(e)}function J(e){const t=W(e)
if(Object(i.k)(t))return null
switch(t){case"feet":case"us-feet":case"clarke-feet":case"clarke-yards":case"clarke-links":case"sears-yards":case"sears-feet":case"sears-chains":case"benoit-1895-b-chains":case"indian-yards":case"indian-1937-yards":case"gold-coast-feet":case"sears-1922-truncated-chains":return"imperial"
case"50-kilometers":case"150-kilometers":case"meters":return"metric"}return null}const Z=Object(r.b)()({esriAcres:"acres",esriAres:"ares",esriHectares:"hectares",esriSquareCentimeters:"square-centimeters",esriSquareDecimeters:"square-decimeters",esriSquareFeet:"square-feet",esriSquareInches:"square-inches",esriSquareKilometers:"square-kilometers",esriSquareMeters:"square-meters",esriSquareMiles:"square-miles",esriSquareMillimeters:"square-millimeters",esriSquareUsFeet:"square-us-feet",esriSquareYards:"square-yards"}),$=Object(r.b)()({esriCentimeters:"centimeters",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriYards:"yards"}),Y=Object(r.b)()({esriDUDecimalDegrees:"degrees",esriDURadians:"radians"})}}])
