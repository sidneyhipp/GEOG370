(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[148,0,7,18,20,22,30,149,193,276,303,320,321,326,459,461,474,475,476,763],{1001:function(e,t,n){"use strict"
n.d(t,"a",(function(){return d}))
var r=n(968),i=n(976),a=n(972),o=n(970),s=(n(971),n(445),n(969)),l=n(1113)
const c=new i.a({simple:"simple",uniqueValue:"unique-value",classBreaks:"class-breaks",heatmap:"heatmap",dotDensity:"dot-density",dictionary:"dictionary",pieChart:"pie-chart"},{ignoreUnknown:!0})
let u=class extends a.a{constructor(e){super(e),this.authoringInfo=null,this.type=null}async getRequiredFields(e){if(!this.collectRequiredFields)return[]
const t=new Set
return await this.collectRequiredFields(t,e),Array.from(t).sort()}getSymbol(e,t){}async getSymbolAsync(e,t){}getSymbols(){return[]}getAttributeHash(){return JSON.stringify(this)}getMeshHash(){return JSON.stringify(this)}}
Object(r.a)([Object(o.b)({type:l.a,json:{write:!0}})],u.prototype,"authoringInfo",void 0),Object(r.a)([Object(o.b)({type:c.apiValues,readOnly:!0,json:{type:c.jsonValues,read:!1,write:{writer:c.write,ignoreOrigin:!0}}})],u.prototype,"type",void 0),u=Object(r.a)([Object(s.a)("esri.renderers.Renderer")],u)
const d=u},1002:function(e,t,n){"use strict"
n.d(t,"a",(function(){return l}))
var r=n(968),i=n(975),a=n(1017),o=n(969)
class s{constructor(){this._emitter=new s.EventEmitter(this)}emit(e,t){return this._emitter.emit(e,t)}on(e,t){return this._emitter.on(e,t)}once(e,t){return this._emitter.once(e,t)}hasEventListener(e){return this._emitter.hasEventListener(e)}}!function(e){class t{constructor(e=null){this._target=e,this._listenersMap=null}clear(){this._listenersMap&&this._listenersMap.clear(),this._listenersMap=null}emit(e,t){const n=this._listenersMap&&this._listenersMap.get(e)
if(!n)return!1
const r=this._target||this
return[...n].forEach(e=>{e.call(r,t)}),n.length>0}on(e,t){if(Array.isArray(e)){const n=e.map(e=>this.on(e,t))
return Object(a.b)(n)}if(e.includes(","))throw new TypeError("Evented.on() with a comma delimited string of event types is not supported")
this._listenersMap||(this._listenersMap=new Map)
const n=this._listenersMap.get(e)||[]
return n.push(t),this._listenersMap.set(e,n),{remove:()=>{const n=this._listenersMap&&this._listenersMap.get(e)||[],r=n.indexOf(t)
r>=0&&n.splice(r,1)}}}once(e,t){const n=this.on(e,e=>{n.remove(),t.call(null,e)})
return n}hasEventListener(e){const t=this._listenersMap&&this._listenersMap.get(e)
return null!=t&&t.length>0}}e.EventEmitter=t,e.EventedMixin=e=>{let n=class extends e{constructor(){super(...arguments),this._emitter=new t}destroy(){this._emitter.clear()}emit(e,t){return this._emitter.emit(e,t)}on(e,t){return this._emitter.on(e,t)}once(e,t){return this._emitter.once(e,t)}hasEventListener(e){return this._emitter.hasEventListener(e)}}
return n=Object(r.a)([Object(o.a)("esri.core.Evented")],n),n}
let n=class extends i.a{constructor(){super(...arguments),this._emitter=new s.EventEmitter(this)}destroy(){this._emitter.clear()}emit(e,t){return this._emitter.emit(e,t)}on(e,t){return this._emitter.on(e,t)}once(e,t){return this._emitter.once(e,t)}hasEventListener(e){return this._emitter.hasEventListener(e)}}
n=Object(r.a)([Object(o.a)("esri.core.Evented")],n),e.EventedAccessor=n}(s||(s={}))
const l=s},1004:function(e,t,n){"use strict"
n.d(t,"a",(function(){return u}))
var r=n(968),i=n(972),a=n(970),o=(n(971),n(445),n(977)),s=n(969),l=n(769)
let c=class extends i.a{constructor(...e){super(...e),this.type=null,this.hasM=!1,this.hasZ=!1,this.spatialReference=l.default.WGS84}get cache(){return this.commitProperty("spatialReference"),{}}get extent(){return null}readSpatialReference(e,t){if(e instanceof l.default)return e
if(null!=e){const n=new l.default
return n.read(e,t),n}return e}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}clearCache(){this.notifyChange("cache")}getCacheValue(e){return this.cache[e]}setCacheValue(e,t){this.cache[e]=t}}
Object(r.a)([Object(a.b)()],c.prototype,"type",void 0),Object(r.a)([Object(a.b)({readOnly:!0})],c.prototype,"cache",null),Object(r.a)([Object(a.b)({readOnly:!0})],c.prototype,"extent",null),Object(r.a)([Object(a.b)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],c.prototype,"hasM",void 0),Object(r.a)([Object(a.b)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],c.prototype,"hasZ",void 0),Object(r.a)([Object(a.b)({type:l.default,json:{write:!0},value:l.default.WGS84})],c.prototype,"spatialReference",void 0),Object(r.a)([Object(o.a)("spatialReference")],c.prototype,"readSpatialReference",null),c=Object(r.a)([Object(s.a)("esri.geometry.Geometry")],c)
const u=c},1009:function(e,t,n){"use strict"
n.d(t,"a",(function(){return b}))
var r,i=n(968),a=n(972),o=n(23),s=n(1059),l=n(970),c=(n(971),n(445),n(977)),u=n(969),d=n(974)
let f=r=class extends a.a{static get allTime(){return h}static get empty(){return p}constructor(e){super(e),this.end=null,this.start=null}readEnd(e,t){return null!=t.end?new Date(t.end):null}writeEnd(e,t){t.end=e?e.getTime():null}get isAllTime(){return this.equals(r.allTime)}get isEmpty(){return this.equals(r.empty)}readStart(e,t){return null!=t.start?new Date(t.start):null}writeStart(e,t){t.start=e?e.getTime():null}clone(){return new r({end:this.end,start:this.start})}equals(e){if(!e)return!1
const t=Object(o.l)(this.start)?this.start.getTime():this.start,n=Object(o.l)(this.end)?this.end.getTime():this.end,r=Object(o.l)(e.start)?e.start.getTime():e.start,i=Object(o.l)(e.end)?e.end.getTime():e.end
return t===r&&n===i}expandTo(e){if(this.isEmpty||this.isAllTime)return this.clone()
const t=Object(o.b)(this.start,t=>Object(s.c)(t,e)),n=Object(o.b)(this.end,t=>{const n=Object(s.c)(t,e)
return t.getTime()===n.getTime()?n:Object(s.b)(n,1,e)})
return new r({start:t,end:n})}intersection(e){if(!e)return this.clone()
if(this.isEmpty||e.isEmpty)return r.empty
if(this.isAllTime)return e.clone()
if(e.isAllTime)return this.clone()
const t=Object(o.n)(this.start,-1/0,e=>e.getTime()),n=Object(o.n)(this.end,1/0,e=>e.getTime()),i=Object(o.n)(e.start,-1/0,e=>e.getTime()),a=Object(o.n)(e.end,1/0,e=>e.getTime())
let s,l
if(i>=t&&i<=n?s=i:t>=i&&t<=a&&(s=t),n>=i&&n<=a?l=n:a>=t&&a<=n&&(l=a),null!=s&&null!=l&&!isNaN(s)&&!isNaN(l)){const e=new r
return e.start=s===-1/0?null:new Date(s),e.end=l===1/0?null:new Date(l),e}return r.empty}offset(e,t){if(this.isEmpty||this.isAllTime)return this.clone()
const n=new r,{start:i,end:a}=this
return Object(o.l)(i)&&(n.start=Object(s.b)(i,e,t)),Object(o.l)(a)&&(n.end=Object(s.b)(a,e,t)),n}union(e){if(!e||e.isEmpty)return this.clone()
if(this.isEmpty)return e.clone()
if(this.isAllTime||e.isAllTime)return h.clone()
const t=Object(o.l)(this.start)&&Object(o.l)(e.start)?new Date(Math.min(this.start.getTime(),e.start.getTime())):null,n=Object(o.l)(this.end)&&Object(o.l)(e.end)?new Date(Math.max(this.end.getTime(),e.end.getTime())):null
return new r({start:t,end:n})}}
Object(i.a)([Object(l.b)({type:Date,json:{write:{allowNull:!0}}})],f.prototype,"end",void 0),Object(i.a)([Object(c.a)("end")],f.prototype,"readEnd",null),Object(i.a)([Object(d.a)("end")],f.prototype,"writeEnd",null),Object(i.a)([Object(l.b)({readOnly:!0,json:{read:!1}})],f.prototype,"isAllTime",null),Object(i.a)([Object(l.b)({readOnly:!0,json:{read:!1}})],f.prototype,"isEmpty",null),Object(i.a)([Object(l.b)({type:Date,json:{write:{allowNull:!0}}})],f.prototype,"start",void 0),Object(i.a)([Object(c.a)("start")],f.prototype,"readStart",null),Object(i.a)([Object(d.a)("start")],f.prototype,"writeStart",null),f=r=Object(i.a)([Object(u.a)("esri.TimeExtent")],f)
const h=new f,p=new f({start:void 0,end:void 0}),b=f},1010:function(e,t,n){"use strict"
n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return c})),n(982)
var r=n(446),i=n(233),a=n(23),o=n(769)
const s=i.a.getLogger("esri.support.arcadeOnDemand")
let l
function c(){return l||(l=(async()=>{const e=await Promise.all([n.e(2),n.e(33),n.e(52),n.e(226)]).then(n.bind(null,1319))
return{arcade:e.arcade,arcadeUtils:e,Dictionary:e.Dictionary,Feature:e.arcadeFeature}})()),l}const u=(e,t,n)=>h.create(e,t,n,null,["$feature"]),d=(e,t,n)=>h.create(e,t,n,null,["$feature","$view"]),f=(e,t,n,r)=>h.create(e,t,n,r,["$feature","$view"])
class h{constructor(e,t,n,r,i,a,o){this.script=e,this.evaluate=r
const s=Array.isArray(a)?a:a.fields
this.fields=s,this._syntaxTree=n,this._arcade=t,this._arcadeFeature=i,this._spatialReference=o,this._referencesGeometry=t.scriptTouchesGeometry(this._syntaxTree),this._referencesScale=this._arcade.referencesMember(this._syntaxTree,"scale")}static async create(e,t,n,i,l,u){const{arcade:d,Feature:f,Dictionary:p}=await c(),b=o.default.fromJSON(t)
let m
try{m=d.parseScript(e,u)}catch(t){return s.error(new r.a("arcade-bad-expression","Failed to parse arcade script",{script:e,error:t})),null}const y=l.reduce((e,t)=>({...e,[t]:null}),{})
let g=null
Object(a.l)(i)&&(g=new p(i),g.immutable=!0,y.$config=null)
const v=d.scriptUsesGeometryEngine(m),O=v&&d.enableGeometrySupport(),w=d.scriptUsesFeatureSet(m)&&d.enableFeatureSetSupport(),j=d.scriptIsAsync(m),_=j&&d.enableAsyncSupport(),S={vars:y,spatialReference:b,useAsync:!!_}
await Promise.all([O,w,_])
const E=new Set
await d.loadDependentModules(E,m,null,j,v)
const x=new p
x.immutable=!1,x.setField("scale",0)
const I=d.compileScript(m,S)
return new h(e,d,m,e=>("$view"in e&&e.$view&&(x.setField("scale","object"==typeof e.$view?e.$view.scale:void 0),e.$view=x),g&&(e.$config=g),I({vars:e,spatialReference:b})),new f,n,b)}repurposeFeature(e){return e.geometry&&!e.geometry.spatialReference&&(e.geometry.spatialReference=this._spatialReference),this._arcadeFeature.repurposeFromGraphicLikeObject(e.geometry,e.attributes,{fields:this.fields}),this._arcadeFeature}referencesGeometry(){return this._referencesGeometry}referencesScale(){return this._referencesScale}}},1011:function(e,t,n){"use strict"
function r(){return[0,0,0,0]}function i(e){return[e[0],e[1],e[2],e[3]]}function a(e,t,n,r){return[e,t,n,r]}function o(e){const t=[0,0,0,0],n=Math.min(4,e.length)
for(let r=0;r<n;++r)t[r]=e[r]
return t}function s(e,t){return new Float64Array(e,t,4)}function l(){return a(1,1,1,1)}function c(){return a(1,0,0,0)}function u(){return a(0,1,0,0)}function d(){return a(0,0,1,0)}function f(){return a(0,0,0,1)}n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return r})),n.d(t,"f",(function(){return i})),n.d(t,"g",(function(){return a}))
const h=[0,0,0,0],p=l(),b=c(),m=u(),y=d(),g=f()
Object.freeze(Object.defineProperty({__proto__:null,ONES:p,UNIT_W:g,UNIT_X:b,UNIT_Y:m,UNIT_Z:y,ZEROS:h,clone:i,create:r,createView:s,fromArray:o,fromValues:a,ones:l,unitW:f,unitX:c,unitY:u,unitZ:d,zeros:function(){return[0,0,0,0]}},Symbol.toStringTag,{value:"Module"}))},1012:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return h})),n.d(t,"f",(function(){return p})),n.d(t,"g",(function(){return v})),n.d(t,"h",(function(){return O})),n.d(t,"i",(function(){return f})),n.d(t,"j",(function(){return y})),n.d(t,"k",(function(){return b})),n.d(t,"l",(function(){return a})),n.d(t,"m",(function(){return g})),n.d(t,"n",(function(){return C}))
var r=n(1016)
function i(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function a(e,t,n,r,i){return e[0]=t,e[1]=n,e[2]=r,e[3]=i,e}function o(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e}function s(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e[3]=t[3]-n[3],e}function l(e,t,n){return e[0]=t[0]*n[0],e[1]=t[1]*n[1],e[2]=t[2]*n[2],e[3]=t[3]*n[3],e}function c(e,t,n){return e[0]=t[0]/n[0],e[1]=t[1]/n[1],e[2]=t[2]/n[2],e[3]=t[3]/n[3],e}function u(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e}function d(e,t){const n=t[0]-e[0],r=t[1]-e[1],i=t[2]-e[2],a=t[3]-e[3]
return Math.sqrt(n*n+r*r+i*i+a*a)}function f(e,t){const n=t[0]-e[0],r=t[1]-e[1],i=t[2]-e[2],a=t[3]-e[3]
return n*n+r*r+i*i+a*a}function h(e){const t=e[0],n=e[1],r=e[2],i=e[3]
return Math.sqrt(t*t+n*n+r*r+i*i)}function p(e){const t=e[0],n=e[1],r=e[2],i=e[3]
return t*t+n*n+r*r+i*i}function b(e,t){const n=t[0],r=t[1],i=t[2],a=t[3]
let o=n*n+r*r+i*i+a*a
return o>0&&(o=1/Math.sqrt(o),e[0]=n*o,e[1]=r*o,e[2]=i*o,e[3]=a*o),e}function m(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]}function y(e,t,n,r){const i=t[0],a=t[1],o=t[2],s=t[3]
return e[0]=i+r*(n[0]-i),e[1]=a+r*(n[1]-a),e[2]=o+r*(n[2]-o),e[3]=s+r*(n[3]-s),e}function g(e,t,n){const r=t[0],i=t[1],a=t[2],o=t[3]
return e[0]=n[0]*r+n[4]*i+n[8]*a+n[12]*o,e[1]=n[1]*r+n[5]*i+n[9]*a+n[13]*o,e[2]=n[2]*r+n[6]*i+n[10]*a+n[14]*o,e[3]=n[3]*r+n[7]*i+n[11]*a+n[15]*o,e}function v(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]}function O(e,t){const n=e[0],i=e[1],a=e[2],o=e[3],s=t[0],l=t[1],c=t[2],u=t[3],d=Object(r.c)()
return Math.abs(n-s)<=d*Math.max(1,Math.abs(n),Math.abs(s))&&Math.abs(i-l)<=d*Math.max(1,Math.abs(i),Math.abs(l))&&Math.abs(a-c)<=d*Math.max(1,Math.abs(a),Math.abs(c))&&Math.abs(o-u)<=d*Math.max(1,Math.abs(o),Math.abs(u))}const w=s,j=l,_=c,S=d,E=f,x=h,I=p,C=Object.freeze(Object.defineProperty({__proto__:null,add:o,ceil:function(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e[3]=Math.ceil(t[3]),e},copy:i,dist:S,distance:d,div:_,divide:c,dot:m,equals:O,exactEquals:v,floor:function(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e[3]=Math.floor(t[3]),e},inverse:function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e[3]=1/t[3],e},len:x,length:h,lerp:y,max:function(e,t,n){return e[0]=Math.max(t[0],n[0]),e[1]=Math.max(t[1],n[1]),e[2]=Math.max(t[2],n[2]),e[3]=Math.max(t[3],n[3]),e},min:function(e,t,n){return e[0]=Math.min(t[0],n[0]),e[1]=Math.min(t[1],n[1]),e[2]=Math.min(t[2],n[2]),e[3]=Math.min(t[3],n[3]),e},mul:j,multiply:l,negate:function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e},normalize:b,random:function(e,t){const n=r.a
let i,a,o,s,l,c
t=t||1
do{i=2*n()-1,a=2*n()-1,l=i*i+a*a}while(l>=1)
do{o=2*n()-1,s=2*n()-1,c=o*o+s*s}while(c>=1)
const u=Math.sqrt((1-l)/c)
return e[0]=t*i,e[1]=t*a,e[2]=t*o*u,e[3]=t*s*u,e},round:function(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e[3]=Math.round(t[3]),e},scale:u,scaleAndAdd:function(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e[3]=t[3]+n[3]*r,e},set:a,sqrDist:E,sqrLen:I,squaredDistance:f,squaredLength:p,str:function(e){return"vec4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},sub:w,subtract:s,transformMat4:g,transformQuat:function(e,t,n){const r=t[0],i=t[1],a=t[2],o=n[0],s=n[1],l=n[2],c=n[3],u=c*r+s*a-l*i,d=c*i+l*r-o*a,f=c*a+o*i-s*r,h=-o*r-s*i-l*a
return e[0]=u*c+h*-o+d*-l-f*-s,e[1]=d*c+h*-s+f*-o-u*-l,e[2]=f*c+h*-l+u*-s-d*-o,e[3]=t[3],e}},Symbol.toStringTag,{value:"Module"}))},1016:function(e,t,n){"use strict"
n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return l}))
let r=1e-6
function i(){return r}const a=Math.random,o=Math.PI/180,s=180/Math.PI
function l(e){return e*o}function c(e){return e*s}Object.freeze(Object.defineProperty({__proto__:null,RANDOM:a,equals:function(e,t){return Math.abs(e-t)<=r*Math.max(1,Math.abs(e),Math.abs(t))},getEpsilon:i,setEpsilon:function(e){r=e},toDegree:c,toRadian:l},Symbol.toStringTag,{value:"Module"}))},1018:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o}))
var r=n(1434),i=function(e){return{vnodeSelector:"",properties:void 0,children:void 0,text:e.toString(),domNode:null}},a=function(e,t){for(var n=0,r=e.length;n<r;n++){var o=e[n]
Array.isArray(o)?a(o,t):null!=o&&!1!==o&&(o.hasOwnProperty("vnodeSelector")||(o=i(o)),t.push(o))}}
function o(e,t,...n){return"function"!=typeof e||Object(r.a)(e)?function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r]
if(1===n.length&&"string"==typeof n[0])return{vnodeSelector:e,properties:t||void 0,children:void 0,text:n[0],domNode:null}
var i=[]
return a(n,i),{vnodeSelector:e,properties:t||void 0,children:i,text:void 0,domNode:null}}(e,t,...n):e(t,...n)}},1019:function(e,t,n){"use strict"
n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u}))
var r=n(110),i=n(771),a=n(446),o=n(233),s=n(374)
const l=o.a.getLogger("esri.assets")
function c(e,t){return Object(i.default)(u(e),t)}function u(e){if(!r.default.assetsPath)throw l.errorOnce("The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50"),new a.a("assets:path-not-set","config.assetsPath is not set")
return Object(s.E)(r.default.assetsPath,e)}},1020:function(e,t,n){"use strict"
n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return u}))
var r=n(995),i=n(1045),a=n(1147),o=n(1394),s=n(1218)
const l={types:r.i,json:{write:{writer:a.b},origins:{"web-scene":{types:r.j,write:{writer:a.b},read:{reader:Object(i.b)({types:r.j})}}}}},c={types:{base:o.a,key:"type",typeMap:{"simple-fill":r.e.typeMap["simple-fill"],"picture-fill":r.e.typeMap["picture-fill"],"polygon-3d":r.e.typeMap["polygon-3d"]}},json:{write:{writer:a.b},origins:{"web-scene":{type:s.a,write:{writer:a.b}}}}},u={cast:e=>null==e||"string"==typeof e||"number"==typeof e?e:""+e,json:{type:String,write:{writer:(e,t)=>{t.value=null==e?void 0:e.toString()}}}}},1021:function(e,t,n){"use strict"
n.d(t,"a",(function(){return m}))
var r,i=n(968),a=n(234),o=n(970),s=(n(971),n(969)),l=n(974),c=n(770),u=n(1004),d=n(992),f=n(769),h=n(1157),p=n(1105)
let b=r=class extends u.a{constructor(...e){super(...e),this.paths=[],this.type="polyline"}normalizeCtorArgs(e,t){let n,r,i=null,a=null
return e&&!Array.isArray(e)?(i=e.paths?e.paths:null,t||(e.spatialReference?t=e.spatialReference:e.paths||(t=e)),n=e.hasZ,r=e.hasM):i=e,i=i||[],t=t||f.default.WGS84,i.length&&i[0]&&null!=i[0][0]&&"number"==typeof i[0][0]&&(i=[i]),a=i[0]&&i[0][0],a&&(void 0===n&&void 0===r?(n=a.length>2,r=!1):void 0===n?n=!r&&a.length>3:void 0===r&&(r=!n&&a.length>3)),{paths:i,spatialReference:t,hasZ:n,hasM:r}}get cache(){return this.commitProperty("paths"),this.commitProperty("hasZ"),this.commitProperty("hasM"),this.commitProperty("spatialReference"),{}}get extent(){const{spatialReference:e}=this,t=Object(h.c)(this)
if(!t)return null
const n=new c.default(t)
return n.spatialReference=e,n}writePaths(e,t){t.paths=Object(a.a)(this.paths)}addPath(e){if(!e)return
const t=this.paths,n=t.length
if(function(e){return!Array.isArray(e[0])}(e)){const r=[]
for(let t=0,n=e.length;t<n;t++)r[t]=e[t].toArray()
t[n]=r}else t[n]=e.concat()
return this.notifyChange("paths"),this}clone(){const e=new r
return e.spatialReference=this.spatialReference,e.paths=Object(a.a)(this.paths),e.hasZ=this.hasZ,e.hasM=this.hasM,e}getPoint(e,t){if(!this._validateInputs(e,t))return null
const n=this.paths[e][t],r=this.hasZ,i=this.hasM
return r&&!i?new d.a(n[0],n[1],n[2],void 0,this.spatialReference):i&&!r?new d.a(n[0],n[1],void 0,n[2],this.spatialReference):r&&i?new d.a(n[0],n[1],n[2],n[3],this.spatialReference):new d.a(n[0],n[1],this.spatialReference)}insertPoint(e,t,n){return this._validateInputs(e,t,!0)?(Object(p.a)(this,n),Array.isArray(n)||(n=n.toArray()),this.paths[e].splice(t,0,n),this.notifyChange("paths"),this):this}removePath(e){if(!this._validateInputs(e,null))return null
const t=this.paths.splice(e,1)[0],n=this.spatialReference,r=t.map(e=>new d.a(e,n))
return this.notifyChange("paths"),r}removePoint(e,t){if(!this._validateInputs(e,t))return null
const n=new d.a(this.paths[e].splice(t,1)[0],this.spatialReference)
return this.notifyChange("paths"),n}setPoint(e,t,n){return this._validateInputs(e,t)?(Object(p.a)(this,n),Array.isArray(n)||(n=n.toArray()),this.paths[e][t]=n,this.notifyChange("paths"),this):this}_validateInputs(e,t,n=!1){if(null==e||e<0||e>=this.paths.length)return!1
if(null!=t){const r=this.paths[e]
if(n&&(t<0||t>r.length))return!1
if(!n&&(t<0||t>=r.length))return!1}return!0}toJSON(e){return this.write({},e)}}
Object(i.a)([Object(o.b)({readOnly:!0})],b.prototype,"cache",null),Object(i.a)([Object(o.b)({readOnly:!0})],b.prototype,"extent",null),Object(i.a)([Object(o.b)({type:[[[Number]]],json:{write:{isRequired:!0}}})],b.prototype,"paths",void 0),Object(i.a)([Object(l.a)("paths")],b.prototype,"writePaths",null),b=r=Object(i.a)([Object(s.a)("esri.geometry.Polyline")],b),b.prototype.toJSON.isDefaultToJSON=!0
const m=b},1025:function(e,t,n){"use strict"
n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return c}))
var r=n(968),i=n(975),a=n(1007),o=n(970),s=n(969),l=n(1138)
const c=e=>{let t=class extends e{destroy(){var e,t
this.destroyed||(null!=(e=this._get("handles"))&&e.destroy(),null==(t=this._get("updatingHandles"))||t.destroy())}get handles(){return this._get("handles")||new a.a}get updatingHandles(){return this._get("updatingHandles")||new l.a}}
return Object(r.a)([Object(o.b)({readOnly:!0})],t.prototype,"handles",null),Object(r.a)([Object(o.b)({readOnly:!0})],t.prototype,"updatingHandles",null),t=Object(r.a)([Object(s.a)("esri.core.HandleOwner")],t),t}
let u=class extends(c(i.a)){}
u=Object(r.a)([Object(s.a)("esri.core.HandleOwner")],u)},1027:function(e,t,n){"use strict"
n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return f}))
var r=n(446),i=n(973),a=n(1005)
const o=/^([a-z]{2})(?:[-_]([A-Za-z]{2}))?$/,s={ar:!0,bg:!0,bs:!0,ca:!0,cs:!0,da:!0,de:!0,el:!0,en:!0,es:!0,et:!0,fi:!0,fr:!0,he:!0,hr:!0,hu:!0,id:!0,it:!0,ja:!0,ko:!0,lt:!0,lv:!0,nb:!0,nl:!0,pl:!0,"pt-BR":!0,"pt-PT":!0,ro:!0,ru:!0,sk:!0,sl:!0,sr:!0,sv:!0,th:!0,tr:!0,uk:!0,vi:!0,"zh-CN":!0,"zh-HK":!0,"zh-TW":!0}
function l(e){var t
return null!=(t=s[e])&&t}const c=[],u=new Map
function d(e){for(const t of u.keys())b(e.pattern,t)&&u.delete(t)}function f(e){return c.includes(e)||(d(e),c.unshift(e)),{remove(){const t=c.indexOf(e)
t>-1&&(c.splice(t,1),d(e))}}}async function h(e){const t=Object(a.b)()
u.has(e)||u.set(e,async function(e,t){const n=[]
for(const r of c)if(b(r.pattern,e))try{return await r.fetchMessageBundle(e,t)}catch(e){n.push(e)}if(n.length)throw new r.a("intl:message-bundle-error",`Errors occurred while loading "${e}"`,{errors:n})
throw new r.a("intl:no-message-bundle-loader",`No loader found for message bundle "${e}"`)}(e,t))
const n=u.get(e)
return n&&await m.add(n),n}function p(e){if(!o.test(e))return null
const t=o.exec(e)
if(null===t)return null
const[,n,r]=t,i=n+(r?"-"+r.toUpperCase():"")
return l(i)?i:l(n)?n:null}function b(e,t){return"string"==typeof e?t.startsWith(e):e.test(t)}Object(a.a)(()=>{u.clear()})
const m=new class{constructor(){this._numLoading=0,this._dfd=null}async waitForAll(){this._dfd&&await this._dfd.promise}add(e){return this._increase(),e.then(()=>this._decrease(),()=>this._decrease()),this.waitForAll()}_increase(){this._numLoading++,this._dfd||(this._dfd=Object(i.d)())}_decrease(){this._numLoading=Math.max(this._numLoading-1,0),this._dfd&&0===this._numLoading&&(this._dfd.resolve(),this._dfd=null)}}},1029:function(e,t,n){"use strict"
n.d(t,"a",(function(){return w})),n.d(t,"b",(function(){return E})),n.d(t,"c",(function(){return v})),n.d(t,"d",(function(){return C})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return j})),n.d(t,"g",(function(){return a})),n.d(t,"h",(function(){return O})),n.d(t,"i",(function(){return p})),n.d(t,"j",(function(){return g})),n.d(t,"k",(function(){return I})),n.d(t,"l",(function(){return P})),n.d(t,"m",(function(){return s})),n.d(t,"n",(function(){return k})),n.d(t,"o",(function(){return h})),n.d(t,"p",(function(){return x})),n.d(t,"q",(function(){return d})),n.d(t,"r",(function(){return m})),n.d(t,"s",(function(){return y})),n.d(t,"t",(function(){return c})),n.d(t,"u",(function(){return L})),n.d(t,"v",(function(){return b})),n.d(t,"w",(function(){return o})),n.d(t,"x",(function(){return l})),n.d(t,"y",(function(){return A})),n.d(t,"z",(function(){return T})),n.d(t,"A",(function(){return f})),n.d(t,"B",(function(){return M})),n.d(t,"C",(function(){return D})),n.d(t,"D",(function(){return N}))
var r=n(981),i=n(1016)
function a(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function o(e,t,n,r,i,a,o,s,l,c,u,d,f,h,p,b,m){return e[0]=t,e[1]=n,e[2]=r,e[3]=i,e[4]=a,e[5]=o,e[6]=s,e[7]=l,e[8]=c,e[9]=u,e[10]=d,e[11]=f,e[12]=h,e[13]=p,e[14]=b,e[15]=m,e}function s(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function l(e,t){if(e===t){const n=t[1],r=t[2],i=t[3],a=t[6],o=t[7],s=t[11]
e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=n,e[6]=t[9],e[7]=t[13],e[8]=r,e[9]=a,e[11]=t[14],e[12]=i,e[13]=o,e[14]=s}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15]
return e}function c(e,t){return u(e,t)||s(e),e}function u(e,t){const n=t[0],r=t[1],i=t[2],a=t[3],o=t[4],s=t[5],l=t[6],c=t[7],u=t[8],d=t[9],f=t[10],h=t[11],p=t[12],b=t[13],m=t[14],y=t[15],g=n*s-r*o,v=n*l-i*o,O=n*c-a*o,w=r*l-i*s,j=r*c-a*s,_=i*c-a*l,S=u*b-d*p,E=u*m-f*p,x=u*y-h*p,I=d*m-f*b,C=d*y-h*b,L=f*y-h*m
let M=g*L-v*C+O*I+w*x-j*E+_*S
return M?(M=1/M,e[0]=(s*L-l*C+c*I)*M,e[1]=(i*C-r*L-a*I)*M,e[2]=(b*_-m*j+y*w)*M,e[3]=(f*j-d*_-h*w)*M,e[4]=(l*x-o*L-c*E)*M,e[5]=(n*L-i*x+a*E)*M,e[6]=(m*O-p*_-y*v)*M,e[7]=(u*_-f*O+h*v)*M,e[8]=(o*C-s*x+c*S)*M,e[9]=(r*x-n*C-a*S)*M,e[10]=(p*j-b*O+y*g)*M,e[11]=(d*O-u*j-h*g)*M,e[12]=(s*E-o*I-l*S)*M,e[13]=(n*I-r*E+i*S)*M,e[14]=(b*v-p*w-m*g)*M,e[15]=(u*w-d*v+f*g)*M,e):null}function d(e,t,n){const r=t[0],i=t[1],a=t[2],o=t[3],s=t[4],l=t[5],c=t[6],u=t[7],d=t[8],f=t[9],h=t[10],p=t[11],b=t[12],m=t[13],y=t[14],g=t[15]
let v=n[0],O=n[1],w=n[2],j=n[3]
return e[0]=v*r+O*s+w*d+j*b,e[1]=v*i+O*l+w*f+j*m,e[2]=v*a+O*c+w*h+j*y,e[3]=v*o+O*u+w*p+j*g,v=n[4],O=n[5],w=n[6],j=n[7],e[4]=v*r+O*s+w*d+j*b,e[5]=v*i+O*l+w*f+j*m,e[6]=v*a+O*c+w*h+j*y,e[7]=v*o+O*u+w*p+j*g,v=n[8],O=n[9],w=n[10],j=n[11],e[8]=v*r+O*s+w*d+j*b,e[9]=v*i+O*l+w*f+j*m,e[10]=v*a+O*c+w*h+j*y,e[11]=v*o+O*u+w*p+j*g,v=n[12],O=n[13],w=n[14],j=n[15],e[12]=v*r+O*s+w*d+j*b,e[13]=v*i+O*l+w*f+j*m,e[14]=v*a+O*c+w*h+j*y,e[15]=v*o+O*u+w*p+j*g,e}function f(e,t,n){const r=n[0],i=n[1],a=n[2]
if(t===e)e[12]=t[0]*r+t[4]*i+t[8]*a+t[12],e[13]=t[1]*r+t[5]*i+t[9]*a+t[13],e[14]=t[2]*r+t[6]*i+t[10]*a+t[14],e[15]=t[3]*r+t[7]*i+t[11]*a+t[15]
else{const n=t[0],o=t[1],s=t[2],l=t[3],c=t[4],u=t[5],d=t[6],f=t[7],h=t[8],p=t[9],b=t[10],m=t[11]
e[0]=n,e[1]=o,e[2]=s,e[3]=l,e[4]=c,e[5]=u,e[6]=d,e[7]=f,e[8]=h,e[9]=p,e[10]=b,e[11]=m,e[12]=n*r+c*i+h*a+t[12],e[13]=o*r+u*i+p*a+t[13],e[14]=s*r+d*i+b*a+t[14],e[15]=l*r+f*i+m*a+t[15]}return e}function h(e,t,n){const r=n[0],i=n[1],a=n[2]
return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e[4]=t[4]*i,e[5]=t[5]*i,e[6]=t[6]*i,e[7]=t[7]*i,e[8]=t[8]*a,e[9]=t[9]*a,e[10]=t[10]*a,e[11]=t[11]*a,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function p(e,t,n,r){let a,o,s,l,c,u,d,f,h,p,b,m,y,g,v,O,w,j,_,S,E,x,I,C,L=r[0],M=r[1],A=r[2],T=Math.sqrt(L*L+M*M+A*A)
return T<Object(i.c)()?null:(T=1/T,L*=T,M*=T,A*=T,a=Math.sin(n),o=Math.cos(n),s=1-o,l=t[0],c=t[1],u=t[2],d=t[3],f=t[4],h=t[5],p=t[6],b=t[7],m=t[8],y=t[9],g=t[10],v=t[11],O=L*L*s+o,w=M*L*s+A*a,j=A*L*s-M*a,_=L*M*s-A*a,S=M*M*s+o,E=A*M*s+L*a,x=L*A*s+M*a,I=M*A*s-L*a,C=A*A*s+o,e[0]=l*O+f*w+m*j,e[1]=c*O+h*w+y*j,e[2]=u*O+p*w+g*j,e[3]=d*O+b*w+v*j,e[4]=l*_+f*S+m*E,e[5]=c*_+h*S+y*E,e[6]=u*_+p*S+g*E,e[7]=d*_+b*S+v*E,e[8]=l*x+f*I+m*C,e[9]=c*x+h*I+y*C,e[10]=u*x+p*I+g*C,e[11]=d*x+b*I+v*C,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}function b(e,t,n){const r=Math.sin(n),i=Math.cos(n),a=t[4],o=t[5],s=t[6],l=t[7],c=t[8],u=t[9],d=t[10],f=t[11]
return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=a*i+c*r,e[5]=o*i+u*r,e[6]=s*i+d*r,e[7]=l*i+f*r,e[8]=c*i-a*r,e[9]=u*i-o*r,e[10]=d*i-s*r,e[11]=f*i-l*r,e}function m(e,t,n){const r=Math.sin(n),i=Math.cos(n),a=t[0],o=t[1],s=t[2],l=t[3],c=t[8],u=t[9],d=t[10],f=t[11]
return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*i-c*r,e[1]=o*i-u*r,e[2]=s*i-d*r,e[3]=l*i-f*r,e[8]=a*r+c*i,e[9]=o*r+u*i,e[10]=s*r+d*i,e[11]=l*r+f*i,e}function y(e,t,n){const r=Math.sin(n),i=Math.cos(n),a=t[0],o=t[1],s=t[2],l=t[3],c=t[4],u=t[5],d=t[6],f=t[7]
return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*i+c*r,e[1]=o*i+u*r,e[2]=s*i+d*r,e[3]=l*i+f*r,e[4]=c*i-a*r,e[5]=u*i-o*r,e[6]=d*i-s*r,e[7]=f*i-l*r,e}function g(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}function v(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function O(e,t,n){if(0===t)return s(e)
let r,a,o,l=n[0],c=n[1],u=n[2],d=Math.sqrt(l*l+c*c+u*u)
return d<Object(i.c)()?null:(d=1/d,l*=d,c*=d,u*=d,r=Math.sin(t),a=Math.cos(t),o=1-a,e[0]=l*l*o+a,e[1]=c*l*o+u*r,e[2]=u*l*o-c*r,e[3]=0,e[4]=l*c*o-u*r,e[5]=c*c*o+a,e[6]=u*c*o+l*r,e[7]=0,e[8]=l*u*o+c*r,e[9]=c*u*o-l*r,e[10]=u*u*o+a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e)}function w(e,t){const n=Math.sin(t),r=Math.cos(t)
return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=r,e[6]=n,e[7]=0,e[8]=0,e[9]=-n,e[10]=r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function j(e,t){const n=Math.sin(t),r=Math.cos(t)
return e[0]=r,e[1]=n,e[2]=0,e[3]=0,e[4]=-n,e[5]=r,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function _(e,t,n){const r=t[0],i=t[1],a=t[2],o=t[3],s=r+r,l=i+i,c=a+a,u=r*s,d=r*l,f=r*c,h=i*l,p=i*c,b=a*c,m=o*s,y=o*l,g=o*c
return e[0]=1-(h+b),e[1]=d+g,e[2]=f-y,e[3]=0,e[4]=d-g,e[5]=1-(u+b),e[6]=p+m,e[7]=0,e[8]=f+y,e[9]=p-m,e[10]=1-(u+h),e[11]=0,e[12]=n[0],e[13]=n[1],e[14]=n[2],e[15]=1,e}const S=Object(r.f)()
function E(e,t){return e[0]=t[12],e[1]=t[13],e[2]=t[14],e}function x(e,t){const n=t[0],r=t[1],i=t[2],a=t[4],o=t[5],s=t[6],l=t[8],c=t[9],u=t[10]
return e[0]=Math.sqrt(n*n+r*r+i*i),e[1]=Math.sqrt(a*a+o*o+s*s),e[2]=Math.sqrt(l*l+c*c+u*u),e}function I(e,t,n,r){const i=t[0],a=t[1],o=t[2],s=t[3],l=i+i,c=a+a,u=o+o,d=i*l,f=i*c,h=i*u,p=a*c,b=a*u,m=o*u,y=s*l,g=s*c,v=s*u,O=r[0],w=r[1],j=r[2]
return e[0]=(1-(p+m))*O,e[1]=(f+v)*O,e[2]=(h-g)*O,e[3]=0,e[4]=(f-v)*w,e[5]=(1-(d+m))*w,e[6]=(b+y)*w,e[7]=0,e[8]=(h+g)*j,e[9]=(b-y)*j,e[10]=(1-(d+p))*j,e[11]=0,e[12]=n[0],e[13]=n[1],e[14]=n[2],e[15]=1,e}function C(e,t){const n=t[0],r=t[1],i=t[2],a=t[3],o=n+n,s=r+r,l=i+i,c=n*o,u=r*o,d=r*s,f=i*o,h=i*s,p=i*l,b=a*o,m=a*s,y=a*l
return e[0]=1-d-p,e[1]=u+y,e[2]=f-m,e[3]=0,e[4]=u-y,e[5]=1-c-p,e[6]=h+b,e[7]=0,e[8]=f+m,e[9]=h-b,e[10]=1-c-d,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function L(e,t,n,r,i,a,o){const s=1/(n-t),l=1/(i-r),c=1/(a-o)
return e[0]=2*a*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=2*a*l,e[6]=0,e[7]=0,e[8]=(n+t)*s,e[9]=(i+r)*l,e[10]=(o+a)*c,e[11]=-1,e[12]=0,e[13]=0,e[14]=o*a*2*c,e[15]=0,e}function M(e,t,n,r,i,a,o){const s=1/(t-n),l=1/(r-i),c=1/(a-o)
return e[0]=-2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*l,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*c,e[11]=0,e[12]=(t+n)*s,e[13]=(i+r)*l,e[14]=(o+a)*c,e[15]=1,e}function A(e,t,n,r){let a,o,l,c,u,d,f,h,p,b
const m=t[0],y=t[1],g=t[2],v=r[0],O=r[1],w=r[2],j=n[0],_=n[1],S=n[2],E=Object(i.c)()
return Math.abs(m-j)<E&&Math.abs(y-_)<E&&Math.abs(g-S)<E?s(e):(f=m-j,h=y-_,p=g-S,b=1/Math.sqrt(f*f+h*h+p*p),f*=b,h*=b,p*=b,a=O*p-w*h,o=w*f-v*p,l=v*h-O*f,b=Math.sqrt(a*a+o*o+l*l),b?(b=1/b,a*=b,o*=b,l*=b):(a=0,o=0,l=0),c=h*l-p*o,u=p*a-f*l,d=f*o-h*a,b=Math.sqrt(c*c+u*u+d*d),b?(b=1/b,c*=b,u*=b,d*=b):(c=0,u=0,d=0),e[0]=a,e[1]=c,e[2]=f,e[3]=0,e[4]=o,e[5]=u,e[6]=h,e[7]=0,e[8]=l,e[9]=d,e[10]=p,e[11]=0,e[12]=-(a*m+o*y+l*g),e[13]=-(c*m+u*y+d*g),e[14]=-(f*m+h*y+p*g),e[15]=1,e)}function T(e,t,n,r){const i=t[0],a=t[1],o=t[2],s=r[0],l=r[1],c=r[2]
let u=i-n[0],d=a-n[1],f=o-n[2],h=u*u+d*d+f*f
h>0&&(h=1/Math.sqrt(h),u*=h,d*=h,f*=h)
let p=l*f-c*d,b=c*u-s*f,m=s*d-l*u
return h=p*p+b*b+m*m,h>0&&(h=1/Math.sqrt(h),p*=h,b*=h,m*=h),e[0]=p,e[1]=b,e[2]=m,e[3]=0,e[4]=d*m-f*b,e[5]=f*p-u*m,e[6]=u*b-d*p,e[7]=0,e[8]=u,e[9]=d,e[10]=f,e[11]=0,e[12]=i,e[13]=a,e[14]=o,e[15]=1,e}function R(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e[3]=t[3]-n[3],e[4]=t[4]-n[4],e[5]=t[5]-n[5],e[6]=t[6]-n[6],e[7]=t[7]-n[7],e[8]=t[8]-n[8],e[9]=t[9]-n[9],e[10]=t[10]-n[10],e[11]=t[11]-n[11],e[12]=t[12]-n[12],e[13]=t[13]-n[13],e[14]=t[14]-n[14],e[15]=t[15]-n[15],e}function k(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[7]===t[7]&&e[8]===t[8]&&e[9]===t[9]&&e[10]===t[10]&&e[11]===t[11]&&e[12]===t[12]&&e[13]===t[13]&&e[14]===t[14]&&e[15]===t[15]}function P(e,t){if(e===t)return!0
const n=e[0],r=e[1],a=e[2],o=e[3],s=e[4],l=e[5],c=e[6],u=e[7],d=e[8],f=e[9],h=e[10],p=e[11],b=e[12],m=e[13],y=e[14],g=e[15],v=t[0],O=t[1],w=t[2],j=t[3],_=t[4],S=t[5],E=t[6],x=t[7],I=t[8],C=t[9],L=t[10],M=t[11],A=t[12],T=t[13],R=t[14],k=t[15],P=Object(i.c)()
return Math.abs(n-v)<=P*Math.max(1,Math.abs(n),Math.abs(v))&&Math.abs(r-O)<=P*Math.max(1,Math.abs(r),Math.abs(O))&&Math.abs(a-w)<=P*Math.max(1,Math.abs(a),Math.abs(w))&&Math.abs(o-j)<=P*Math.max(1,Math.abs(o),Math.abs(j))&&Math.abs(s-_)<=P*Math.max(1,Math.abs(s),Math.abs(_))&&Math.abs(l-S)<=P*Math.max(1,Math.abs(l),Math.abs(S))&&Math.abs(c-E)<=P*Math.max(1,Math.abs(c),Math.abs(E))&&Math.abs(u-x)<=P*Math.max(1,Math.abs(u),Math.abs(x))&&Math.abs(d-I)<=P*Math.max(1,Math.abs(d),Math.abs(I))&&Math.abs(f-C)<=P*Math.max(1,Math.abs(f),Math.abs(C))&&Math.abs(h-L)<=P*Math.max(1,Math.abs(h),Math.abs(L))&&Math.abs(p-M)<=P*Math.max(1,Math.abs(p),Math.abs(M))&&Math.abs(b-A)<=P*Math.max(1,Math.abs(b),Math.abs(A))&&Math.abs(m-T)<=P*Math.max(1,Math.abs(m),Math.abs(T))&&Math.abs(y-R)<=P*Math.max(1,Math.abs(y),Math.abs(R))&&Math.abs(g-k)<=P*Math.max(1,Math.abs(g),Math.abs(k))}function N(e){const t=Object(i.c)(),n=e[0],r=e[1],a=e[2],o=e[4],s=e[5],l=e[6],c=e[8],u=e[9],d=e[10]
return Math.abs(1-(n*n+o*o+c*c))<=t&&Math.abs(1-(r*r+s*s+u*u))<=t&&Math.abs(1-(a*a+l*l+d*d))<=t}function D(e){return 1===e[0]&&0===e[1]&&0===e[2]&&0===e[4]&&1===e[5]&&0===e[6]&&0===e[8]&&0===e[9]&&1===e[10]}const V=d,F=R
Object.freeze(Object.defineProperty({__proto__:null,add:function(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e[4]=t[4]+n[4],e[5]=t[5]+n[5],e[6]=t[6]+n[6],e[7]=t[7]+n[7],e[8]=t[8]+n[8],e[9]=t[9]+n[9],e[10]=t[10]+n[10],e[11]=t[11]+n[11],e[12]=t[12]+n[12],e[13]=t[13]+n[13],e[14]=t[14]+n[14],e[15]=t[15]+n[15],e},adjoint:function(e,t){const n=t[0],r=t[1],i=t[2],a=t[3],o=t[4],s=t[5],l=t[6],c=t[7],u=t[8],d=t[9],f=t[10],h=t[11],p=t[12],b=t[13],m=t[14],y=t[15]
return e[0]=s*(f*y-h*m)-d*(l*y-c*m)+b*(l*h-c*f),e[1]=-(r*(f*y-h*m)-d*(i*y-a*m)+b*(i*h-a*f)),e[2]=r*(l*y-c*m)-s*(i*y-a*m)+b*(i*c-a*l),e[3]=-(r*(l*h-c*f)-s*(i*h-a*f)+d*(i*c-a*l)),e[4]=-(o*(f*y-h*m)-u*(l*y-c*m)+p*(l*h-c*f)),e[5]=n*(f*y-h*m)-u*(i*y-a*m)+p*(i*h-a*f),e[6]=-(n*(l*y-c*m)-o*(i*y-a*m)+p*(i*c-a*l)),e[7]=n*(l*h-c*f)-o*(i*h-a*f)+u*(i*c-a*l),e[8]=o*(d*y-h*b)-u*(s*y-c*b)+p*(s*h-c*d),e[9]=-(n*(d*y-h*b)-u*(r*y-a*b)+p*(r*h-a*d)),e[10]=n*(s*y-c*b)-o*(r*y-a*b)+p*(r*c-a*s),e[11]=-(n*(s*h-c*d)-o*(r*h-a*d)+u*(r*c-a*s)),e[12]=-(o*(d*m-f*b)-u*(s*m-l*b)+p*(s*f-l*d)),e[13]=n*(d*m-f*b)-u*(r*m-i*b)+p*(r*f-i*d),e[14]=-(n*(s*m-l*b)-o*(r*m-i*b)+p*(r*l-i*s)),e[15]=n*(s*f-l*d)-o*(r*f-i*d)+u*(r*l-i*s),e},copy:a,determinant:function(e){const t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],l=e[7],c=e[8],u=e[9],d=e[10],f=e[11],h=e[12],p=e[13],b=e[14],m=e[15]
return(t*o-n*a)*(d*m-f*b)-(t*s-r*a)*(u*m-f*p)+(t*l-i*a)*(u*b-d*p)+(n*s-r*o)*(c*m-f*h)-(n*l-i*o)*(c*b-d*h)+(r*l-i*s)*(c*p-u*h)},equals:P,exactEquals:k,frob:function(e){return Math.sqrt(e[0]**2+e[1]**2+e[2]**2+e[3]**2+e[4]**2+e[5]**2+e[6]**2+e[7]**2+e[8]**2+e[9]**2+e[10]**2+e[11]**2+e[12]**2+e[13]**2+e[14]**2+e[15]**2)},fromQuat:C,fromQuat2:function(e,t){const n=S,r=-t[0],i=-t[1],a=-t[2],o=t[3],s=t[4],l=t[5],c=t[6],u=t[7],d=r*r+i*i+a*a+o*o
return d>0?(n[0]=2*(s*o+u*r+l*a-c*i)/d,n[1]=2*(l*o+u*i+c*r-s*a)/d,n[2]=2*(c*o+u*a+s*i-l*r)/d):(n[0]=2*(s*o+u*r+l*a-c*i),n[1]=2*(l*o+u*i+c*r-s*a),n[2]=2*(c*o+u*a+s*i-l*r)),_(e,t,n),e},fromRotation:O,fromRotationTranslation:_,fromRotationTranslationScale:I,fromRotationTranslationScaleOrigin:function(e,t,n,r,i){const a=t[0],o=t[1],s=t[2],l=t[3],c=a+a,u=o+o,d=s+s,f=a*c,h=a*u,p=a*d,b=o*u,m=o*d,y=s*d,g=l*c,v=l*u,O=l*d,w=r[0],j=r[1],_=r[2],S=i[0],E=i[1],x=i[2],I=(1-(b+y))*w,C=(h+O)*w,L=(p-v)*w,M=(h-O)*j,A=(1-(f+y))*j,T=(m+g)*j,R=(p+v)*_,k=(m-g)*_,P=(1-(f+b))*_
return e[0]=I,e[1]=C,e[2]=L,e[3]=0,e[4]=M,e[5]=A,e[6]=T,e[7]=0,e[8]=R,e[9]=k,e[10]=P,e[11]=0,e[12]=n[0]+S-(I*S+M*E+R*x),e[13]=n[1]+E-(C*S+A*E+k*x),e[14]=n[2]+x-(L*S+T*E+P*x),e[15]=1,e},fromScaling:v,fromTranslation:g,fromXRotation:w,fromYRotation:function(e,t){const n=Math.sin(t),r=Math.cos(t)
return e[0]=r,e[1]=0,e[2]=-n,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=n,e[9]=0,e[10]=r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e},fromZRotation:j,frustum:L,getRotation:function(e,t){const n=t[0]+t[5]+t[10]
let r=0
return n>0?(r=2*Math.sqrt(n+1),e[3]=.25*r,e[0]=(t[6]-t[9])/r,e[1]=(t[8]-t[2])/r,e[2]=(t[1]-t[4])/r):t[0]>t[5]&&t[0]>t[10]?(r=2*Math.sqrt(1+t[0]-t[5]-t[10]),e[3]=(t[6]-t[9])/r,e[0]=.25*r,e[1]=(t[1]+t[4])/r,e[2]=(t[8]+t[2])/r):t[5]>t[10]?(r=2*Math.sqrt(1+t[5]-t[0]-t[10]),e[3]=(t[8]-t[2])/r,e[0]=(t[1]+t[4])/r,e[1]=.25*r,e[2]=(t[6]+t[9])/r):(r=2*Math.sqrt(1+t[10]-t[0]-t[5]),e[3]=(t[1]-t[4])/r,e[0]=(t[8]+t[2])/r,e[1]=(t[6]+t[9])/r,e[2]=.25*r),e},getScaling:x,getTranslation:E,hasIdentityRotation:D,identity:s,invert:u,invertOrIdentity:c,isOrthoNormal:N,lookAt:A,mul:V,multiply:d,multiplyScalar:function(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*n,e[5]=t[5]*n,e[6]=t[6]*n,e[7]=t[7]*n,e[8]=t[8]*n,e[9]=t[9]*n,e[10]=t[10]*n,e[11]=t[11]*n,e[12]=t[12]*n,e[13]=t[13]*n,e[14]=t[14]*n,e[15]=t[15]*n,e},multiplyScalarAndAdd:function(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e[3]=t[3]+n[3]*r,e[4]=t[4]+n[4]*r,e[5]=t[5]+n[5]*r,e[6]=t[6]+n[6]*r,e[7]=t[7]+n[7]*r,e[8]=t[8]+n[8]*r,e[9]=t[9]+n[9]*r,e[10]=t[10]+n[10]*r,e[11]=t[11]+n[11]*r,e[12]=t[12]+n[12]*r,e[13]=t[13]+n[13]*r,e[14]=t[14]+n[14]*r,e[15]=t[15]+n[15]*r,e},ortho:M,perspective:function(e,t,n,r,i){const a=1/Math.tan(t/2)
let o
return e[0]=a/n,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,null!=i&&i!==1/0?(o=1/(r-i),e[10]=(i+r)*o,e[14]=2*i*r*o):(e[10]=-1,e[14]=-2*r),e},perspectiveFromFieldOfView:function(e,t,n,r){const i=Math.tan(t.upDegrees*Math.PI/180),a=Math.tan(t.downDegrees*Math.PI/180),o=Math.tan(t.leftDegrees*Math.PI/180),s=Math.tan(t.rightDegrees*Math.PI/180),l=2/(o+s),c=2/(i+a)
return e[0]=l,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=c,e[6]=0,e[7]=0,e[8]=-(o-s)*l*.5,e[9]=(i-a)*c*.5,e[10]=r/(n-r),e[11]=-1,e[12]=0,e[13]=0,e[14]=r*n/(n-r),e[15]=0,e},rotate:p,rotateX:b,rotateY:m,rotateZ:y,scale:h,set:o,str:function(e){return"mat4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+", "+e[9]+", "+e[10]+", "+e[11]+", "+e[12]+", "+e[13]+", "+e[14]+", "+e[15]+")"},sub:F,subtract:R,targetTo:T,translate:f,transpose:l},Symbol.toStringTag,{value:"Module"}))},1032:function(e,t,n){"use strict"
n.d(t,"a",(function(){return D}))
var r,i=n(968),a=n(23),o=n(970),s=n(971),l=(n(445),n(977)),c=n(969),u=n(974),d=n(989),f=n(1240),h=n(1040),p=n(1210)
let b=r=class extends h.a{constructor(e){super(e),this.type="color",this.normalizationField=null}get cache(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:null}}set stops(e){e&&Array.isArray(e)&&(e=e.filter(e=>!!e)).sort((e,t)=>e.value-t.value),this._set("stops",e)}clone(){return new r({field:this.field,normalizationField:this.normalizationField,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,stops:this.stops&&this.stops.map(e=>e.clone()),legendOptions:this.legendOptions&&this.legendOptions.clone()})}getAttributeHash(){return`${super.getAttributeHash()}-${this.normalizationField}`}_interpolateData(){return this.stops&&this.stops.map(e=>e.value||0)}}
Object(i.a)([Object(o.b)({readOnly:!0})],b.prototype,"cache",null),Object(i.a)([Object(o.b)({type:["color"],json:{type:["colorInfo"]}})],b.prototype,"type",void 0),Object(i.a)([Object(o.b)({type:String,json:{write:!0}})],b.prototype,"normalizationField",void 0),Object(i.a)([Object(o.b)({type:[p.a],json:{write:!0}})],b.prototype,"stops",null),b=r=Object(i.a)([Object(c.a)("esri.renderers.visualVariables.ColorVariable")],b)
const m=b
var y,g=n(972),v=n(1119)
let O=y=class extends g.a{constructor(e){super(e),this.label=null,this.opacity=null,this.value=null}readOpacity(e,t){return Object(v.b)(t.transparency)}writeOpacity(e,t,n){t[n]=Object(v.a)(e)}clone(){return new y({label:this.label,opacity:this.opacity,value:this.value})}}
Object(i.a)([Object(o.b)({type:String,json:{write:!0}})],O.prototype,"label",void 0),Object(i.a)([Object(o.b)({type:Number,json:{type:s.a,write:{target:"transparency"}}})],O.prototype,"opacity",void 0),Object(i.a)([Object(l.a)("opacity",["transparency"])],O.prototype,"readOpacity",null),Object(i.a)([Object(u.a)("opacity")],O.prototype,"writeOpacity",null),Object(i.a)([Object(o.b)({type:Number,json:{write:!0}})],O.prototype,"value",void 0),O=y=Object(i.a)([Object(c.a)("esri.renderers.visualVariables.support.OpacityStop")],O)
const w=O
var j
let _=j=class extends h.a{constructor(e){super(e),this.type="opacity",this.normalizationField=null}get cache(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:null}}set stops(e){e&&Array.isArray(e)&&(e=e.filter(e=>!!e)).sort((e,t)=>e.value-t.value),this._set("stops",e)}clone(){return new j({field:this.field,normalizationField:this.normalizationField,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,stops:this.stops&&this.stops.map(e=>e.clone()),legendOptions:this.legendOptions&&this.legendOptions.clone()})}getAttributeHash(){return`${super.getAttributeHash()}-${this.normalizationField}`}_interpolateData(){return this.stops&&this.stops.map(e=>e.value||0)}}
Object(i.a)([Object(o.b)({readOnly:!0})],_.prototype,"cache",null),Object(i.a)([Object(o.b)({type:["opacity"],json:{type:["transparencyInfo"]}})],_.prototype,"type",void 0),Object(i.a)([Object(o.b)({type:String,json:{write:!0}})],_.prototype,"normalizationField",void 0),Object(i.a)([Object(o.b)({type:[w],json:{write:!0}})],_.prototype,"stops",null),_=j=Object(i.a)([Object(c.a)("esri.renderers.visualVariables.OpacityVariable")],_)
const S=_
var E=n(1169),x=n(1070),I=n(975),C=n(976),L=n(233),M=n(1044)
const A={color:m,size:x.a,opacity:S,rotation:E.a},T=new C.a({colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation",sizeInfo:"size"}),R=/^\[([^\]]+)\]$/i
let k=class extends I.a{constructor(){super(...arguments),this.colorVariables=null,this.opacityVariables=null,this.rotationVariables=null,this.sizeVariables=null}set visualVariables(e){if(this._resetVariables(),(e=e&&e.filter(e=>!!e))&&e.length){for(const t of e)switch(t.type){case"color":this.colorVariables.push(t)
break
case"opacity":this.opacityVariables.push(t)
break
case"rotation":this.rotationVariables.push(t)
break
case"size":this.sizeVariables.push(t)}this.sizeVariables.length&&this.sizeVariables.some(e=>!!e.target)&&e.sort((e,t)=>{let n=null
return n=e.target===t.target?0:e.target?1:-1,n})
for(let t=0;t<e.length;t++)e[t].index=t
this._set("visualVariables",e)}else this._set("visualVariables",e)}readVariables(e,t,n){const{rotationExpression:r,rotationType:i}=t,a=r&&r.match(R),o=a&&a[1]
if(o&&(e||(e=[]),e.push({type:"rotationInfo",rotationType:i,field:o})),e)return e.map(e=>{const t=T.read(e.type),r=A[t]
r||(L.a.getLogger(this.declaredClass).warn("Unknown variable type: "+t),n&&n.messages&&n.messages.push(new M.a("visual-variable:unsupported",`visualVariable of type '${t}' is not supported`,{definition:e,context:n})))
const i=new r
return i.read(e,n),i})}writeVariables(e,t){const n=[]
for(const r of e){const e=r.toJSON(t)
e&&n.push(e)}return n}_resetVariables(){this.colorVariables=[],this.opacityVariables=[],this.rotationVariables=[],this.sizeVariables=[]}}
Object(i.a)([Object(o.b)()],k.prototype,"visualVariables",null),k=Object(i.a)([Object(c.a)("esri.renderers.visualVariables.VisualVariableFactory")],k)
const P=k,N={base:h.a,key:"type",typeMap:{opacity:S,color:m,rotation:E.a,size:x.a}},D=e=>{let t=class extends e{constructor(){super(...arguments),this._vvFactory=new P}set visualVariables(e){this._vvFactory.visualVariables=e,this._set("visualVariables",this._vvFactory.visualVariables)}readVisualVariables(e,t,n){return this._vvFactory.readVariables(e,t,n)}writeVisualVariables(e,t,n,r){t[n]=this._vvFactory.writeVariables(e,r)}get arcadeRequiredForVisualVariables(){if(!this.visualVariables)return!1
for(const e of this.visualVariables)if(e.arcadeRequired)return!0
return!1}hasVisualVariables(e,t){return e?this.getVisualVariablesForType(e,t).length>0:this.getVisualVariablesForType("size",t).length>0||this.getVisualVariablesForType("color",t).length>0||this.getVisualVariablesForType("opacity",t).length>0||this.getVisualVariablesForType("rotation",t).length>0}getVisualVariablesForType(e,t){const n=this.visualVariables
return n?n.filter(n=>n.type===e&&("string"==typeof t?n.target===t:!1!==t||!n.target)):[]}async collectVVRequiredFields(e,t){let n=[]
this.visualVariables&&(n=n.concat(this.visualVariables))
for(const r of n)r&&(r.field&&Object(d.d)(e,t,r.field),r.normalizationField&&Object(d.d)(e,t,r.normalizationField),r.valueExpression&&(V(r.valueExpression,e,t)||await Object(d.a)(e,t,r.valueExpression)))}}
return Object(i.a)([Object(o.b)({types:[N],value:null,json:{write:!0}})],t.prototype,"visualVariables",null),Object(i.a)([Object(l.a)("visualVariables",["visualVariables","rotationType","rotationExpression"])],t.prototype,"readVisualVariables",null),Object(i.a)([Object(u.a)("visualVariables")],t.prototype,"writeVisualVariables",null),t=Object(i.a)([Object(c.a)("esri.renderers.mixins.VisualVariablesMixin")],t),t}
function V(e,t,n){const r=Object(f.a)(e)
return!!Object(a.l)(r)&&(Object(d.d)(t,n,r),!0)}},1034:function(e,t,n){"use strict"
n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return h})),n.d(t,"f",(function(){return p}))
var r=n(968),i=n(975),a=n(23),o=n(973),s=n(970),l=(n(971),n(445),n(969))
function c(e,t,n){return Object(o.g)(e.map((e,r)=>t.apply(n,[e,r])))}async function u(e,t,n){return(await Object(o.g)(e.map((e,r)=>t.apply(n,[e,r])))).map(e=>e.value)}function d(e){return{ok:!0,value:e}}function f(e){return{ok:!1,error:e}}async function h(e){if(Object(a.k)(e))return{ok:!1,error:new Error("no promise provided")}
try{return d(await e)}catch(e){return f(e)}}async function p(e){try{return d(await e)}catch(e){return Object(o.p)(e),f(e)}}function b(e){if(!0===e.ok)return e.value
throw e.error}function m(e,t){return new y(e,t)}let y=class extends i.a{get value(){return e=this._result,Object(a.l)(e)&&!0===e.ok?e.value:null
var e}get error(){return e=this._result,Object(a.l)(e)&&!1===e.ok?e.error:null
var e}get finished(){return Object(a.l)(this._result)}constructor(e,t){super({}),this._result=null,this._abortHandle=null,this.abort=()=>{this._abortController=Object(a.a)(this._abortController)},this.remove=this.abort,this._abortController=new AbortController
const{signal:n}=this._abortController
this.promise=e(n),this.promise.then(e=>{this._result=d(e),this._cleanup()},e=>{this._result=f(e),this._cleanup()}),this._abortHandle=Object(o.n)(t,this.abort)}normalizeCtorArgs(){return{}}destroy(){this.abort()}_cleanup(){this._abortHandle=Object(a.s)(this._abortHandle),this._abortController=null}}
Object(r.a)([Object(s.b)()],y.prototype,"value",null),Object(r.a)([Object(s.b)()],y.prototype,"error",null),Object(r.a)([Object(s.b)()],y.prototype,"finished",null),Object(r.a)([Object(s.b)()],y.prototype,"promise",void 0),Object(r.a)([Object(s.b)()],y.prototype,"_result",void 0),y=Object(r.a)([Object(l.a)("esri.core.asyncUtils.ReactiveTask")],y)},1035:function(e,t,n){"use strict"
n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return j})),n.d(t,"d",(function(){return f})),n.d(t,"e",(function(){return p})),n.d(t,"f",(function(){return E})),n.d(t,"g",(function(){return S})),n.d(t,"h",(function(){return _})),n.d(t,"i",(function(){return g})),n.d(t,"j",(function(){return v})),n.d(t,"k",(function(){return d})),n.d(t,"l",(function(){return m})),n.d(t,"m",(function(){return w})),n.d(t,"n",(function(){return u})),n.d(t,"o",(function(){return h}))
var r=n(1009),i=n(770),a=n(769),o=n(1054),s=n(778),l=n(1168),c=n(1119)
const u={type:Boolean,value:!0,json:{origins:{service:{read:!1,write:!1},"web-map":{read:!1,write:!1}},name:"screenSizePerspective",write:!0}},d={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:(e,t)=>!t.disablePopup},write:{enabled:!0,writer(e,t,n){t[n]=!e}}}},f={type:Boolean,value:!0,nonNullable:!0,json:{name:"showLabels",write:!0}},h={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:o.i}}},p={type:Boolean,value:!0,nonNullable:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:!0}},b={value:null,type:l.a,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:!0}}
function m(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}const y={write:!0,read:!0},g={type:Number,json:{origins:{"web-document":y,"portal-item":{write:!0}}}},v={...g,json:{...g.json,origins:{"web-document":{...y,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}}},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:(e,t,n)=>n&&"service"!==n.origin||!t.drawingInfo||void 0===t.drawingInfo.transparency?t.layerDefinition&&t.layerDefinition.drawingInfo&&void 0!==t.layerDefinition.drawingInfo.transparency?Object(c.b)(t.layerDefinition.drawingInfo.transparency):void 0:Object(c.b)(t.drawingInfo.transparency)}}},O={type:r.a,readOnly:!0,get(){var e,t
if(null==(e=this.layer)||!e.timeInfo)return null
const{datesInUnknownTimezone:n,timeOffset:r,useViewTime:i}=this.layer,a=null==(t=this.view)?void 0:t.timeExtent
let o=this.layer.timeExtent
n&&(o=Object(s.toLocalTimeExtent)(o))
let l=i?a&&o?a.intersection(o):a||o:o
if(!l||l.isEmpty||l.isAllTime)return l
r&&(l=l.offset(-r.value,r.unit)),n&&(l=Object(s.toUTCTimeExtent)(l))
const c=this._get("timeExtent")
return l.equals(c)?c:l}},w={type:i.default,readOnly:!0,json:{origins:{service:{read:{source:["fullExtent","spatialReference"],reader:(e,t)=>{const n=i.default.fromJSON(e)
return null!=t.spatialReference&&"object"==typeof t.spatialReference&&(n.spatialReference=a.default.fromJSON(t.spatialReference)),n}}}},read:!1}},j={type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}}}},_={type:Number,json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.minScale"},write:{target:"layerDefinition.minScale"}}},S={type:Number,json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.maxScale"},write:{target:"layerDefinition.maxScale"}}},E={json:{write:{ignoreOrigin:!0},origins:{"web-map":{read:!1,write:!1}}}}},1036:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return a}))
var r=n(976)
const i=Object(r.b)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon"}),a=Object(r.b)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh"})},1037:function(e,t,n){"use strict"
n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return y})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return b})),n.d(t,"e",(function(){return f})),n.d(t,"f",(function(){return h})),n.d(t,"g",(function(){return p})),n.d(t,"h",(function(){return s})),n.d(t,"i",(function(){return d})),n.d(t,"j",(function(){return c})),n.d(t,"k",(function(){return o})),n.d(t,"l",(function(){return u})),n.d(t,"m",(function(){return l}))
var r=n(196),i=n(771),a=n(23)
function o(e){const t=null==e?void 0:e.type
return"base-tile"===t||"tile"===t||"elevation"===t||"imagery-tile"===t||"base-elevation"===t||"open-street-map"===t||"wcs"===t||"web-tile"===t||"wmts"===t||"vector-tile"===t}function s(e){return null!=e&&"type"in e&&"group"===e.type}const l={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"}
function c(e){const t=null==e?void 0:e.type
return"building-scene"===t||"integrated-mesh"===t||"point-cloud"===t||"scene"===t}function u(e){return"voxel"===(null==e?void 0:e.type)}function d(e){return"imagery-tile"===(null==e?void 0:e.type)}function f(e){return null!=e&&null!=e.parent&&"declaredClass"in e.parent&&"esri.Basemap"===e.parent.declaredClass&&e.parent.baseLayers.includes(e)}function h(e){var t
return"feature"===(null==e?void 0:e.type)&&!e.url&&"memory"===(null==(t=e.source)?void 0:t.type)}function p(e){var t
return"feature"===(null==e?void 0:e.type)&&"feature-layer"===(null==(t=e.source)?void 0:t.type)}function b(e){if(e.activeLayer){const t=e.activeLayer.tileMatrixSet
if(t)return t
const n=e.activeLayer.tileMatrixSets
if(n)return n}return null}async function m(e,t){const n=null==r.b?void 0:r.b.findServerInfo(e)
if(null!=(null==n?void 0:n.currentVersion))return n.owningSystemUrl||null
const o=e.toLowerCase().indexOf("/rest/services")
if(-1===o)return null
const s=e.substring(0,o)+"/rest/info",l=Object(a.l)(t)?t.signal:null,{data:c}=await Object(i.default)(s,{query:{f:"json"},responseType:"json",signal:l})
return(null==c?void 0:c.owningSystemUrl)||null}function y(e){return function(e){if(!("capabilities"in e))return!1
switch(e.type){case"csv":case"feature":case"geojson":case"imagery":case"knowledge-graph-sublayer":case"ogc-feature":case"oriented-imagery":case"scene":case"subtype-group":case"subtype-sublayer":case"wfs":return!0
default:return!1}}(e)?"effectiveCapabilities"in e?e.effectiveCapabilities:e.capabilities:null}function g(e){return!!function(e){if(!("editingEnabled"in e))return!1
switch(e.type){case"csv":case"feature":case"geojson":case"oriented-imagery":case"scene":case"subtype-group":case"subtype-sublayer":return!0
default:return!1}}(e)&&("effectiveEditingEnabled"in e?e.effectiveEditingEnabled:e.editingEnabled)}},1038:function(e,t,n){"use strict"
n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return c}))
var r=n(23),i=n(1005)
const a={ar:"ar-u-nu-latn"}
let o=new WeakMap,s={}
function l(e={}){const t={}
return null!=e.digitSeparator&&(t.useGrouping=e.digitSeparator),null!=e.places&&(t.minimumFractionDigits=t.maximumFractionDigits=e.places),t}function c(e,t){return-0===e&&(e=0),function(e){const t=e||s
if(!o.has(t)){const n=Object(i.b)(),r=a[Object(i.b)()]||n
o.set(t,new Intl.NumberFormat(r,e))}return Object(r.d)(o.get(t))}(t).format(e)}Object(i.a)(()=>{o=new WeakMap,s={}})},1039:function(e,t,n){"use strict"
n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return y}))
var r=n(976),i=n(1005)
const a={year:"numeric",month:"numeric",day:"numeric"},o={year:"numeric",month:"long",day:"numeric"},s={year:"numeric",month:"short",day:"numeric"},l={year:"numeric",month:"long",weekday:"long",day:"numeric"},c={hour:"numeric",minute:"numeric"},u={...c,second:"numeric"},d={"short-date":a,"short-date-short-time":{...a,...c},"short-date-short-time-24":{...a,...c,hour12:!1},"short-date-long-time":{...a,...u},"short-date-long-time-24":{...a,...u,hour12:!1},"short-date-le":a,"short-date-le-short-time":{...a,...c},"short-date-le-short-time-24":{...a,...c,hour12:!1},"short-date-le-long-time":{...a,...u},"short-date-le-long-time-24":{...a,...u,hour12:!1},"long-month-day-year":o,"long-month-day-year-short-time":{...o,...c},"long-month-day-year-short-time-24":{...o,...c,hour12:!1},"long-month-day-year-long-time":{...o,...u},"long-month-day-year-long-time-24":{...o,...u,hour12:!1},"day-short-month-year":s,"day-short-month-year-short-time":{...s,...c},"day-short-month-year-short-time-24":{...s,...c,hour12:!1},"day-short-month-year-long-time":{...s,...u},"day-short-month-year-long-time-24":{...s,...u,hour12:!1},"long-date":l,"long-date-short-time":{...l,...c},"long-date-short-time-24":{...l,...c,hour12:!1},"long-date-long-time":{...l,...u},"long-date-long-time-24":{...l,...u,hour12:!1},"long-month-year":{month:"long",year:"numeric"},"short-month-year":{month:"short",year:"numeric"},year:{year:"numeric"},"short-time":c,"long-time":u},f=Object(r.b)()({shortDate:"short-date",shortDateShortTime:"short-date-short-time",shortDateShortTime24:"short-date-short-time-24",shortDateLongTime:"short-date-long-time",shortDateLongTime24:"short-date-long-time-24",shortDateLE:"short-date-le",shortDateLEShortTime:"short-date-le-short-time",shortDateLEShortTime24:"short-date-le-short-time-24",shortDateLELongTime:"short-date-le-long-time",shortDateLELongTime24:"short-date-le-long-time-24",longMonthDayYear:"long-month-day-year",longMonthDayYearShortTime:"long-month-day-year-short-time",longMonthDayYearShortTime24:"long-month-day-year-short-time-24",longMonthDayYearLongTime:"long-month-day-year-long-time",longMonthDayYearLongTime24:"long-month-day-year-long-time-24",dayShortMonthYear:"day-short-month-year",dayShortMonthYearShortTime:"day-short-month-year-short-time",dayShortMonthYearShortTime24:"day-short-month-year-short-time-24",dayShortMonthYearLongTime:"day-short-month-year-long-time",dayShortMonthYearLongTime24:"day-short-month-year-long-time-24",longDate:"long-date",longDateShortTime:"long-date-short-time",longDateShortTime24:"long-date-short-time-24",longDateLongTime:"long-date-long-time",longDateLongTime24:"long-date-long-time-24",longMonthYear:"long-month-year",shortMonthYear:"short-month-year",year:"year"}),h=(f.apiValues,f.toJSON.bind(f),f.fromJSON.bind(f),{ar:"ar-u-nu-latn-ca-gregory"})
let p=new WeakMap,b=d["short-date-short-time"]
function m(e){return e?d[e]:null}function y(e,t){return function(e){const t=e||b
let n=p.get(t)
if(!n){const e=Object(i.b)(),r=h[Object(i.b)()]||e
n=new Intl.DateTimeFormat(r,t),p.set(t,n)}return n}(t).format(e)}Object(i.a)(()=>{p=new WeakMap,b=d["short-date-short-time"]})},1040:function(e,t,n){"use strict"
n.d(t,"a",(function(){return p}))
var r=n(968),i=n(976),a=n(972),o=n(233),s=n(970),l=n(987),c=n(969),u=n(971),d=n(1159)
const f=new i.a({colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation",sizeInfo:"size"})
let h=class extends a.a{constructor(e){super(e),this.index=null,this.type=null,this.field=null,this.valueExpression=null,this.valueExpressionTitle=null,this.legendOptions=null}castField(e){return null==e?e:"function"==typeof e?(o.a.getLogger(this.declaredClass).error(".field: field must be a string value"),null):Object(u.l)(e)}get arcadeRequired(){return!!this.valueExpression}clone(){}getAttributeHash(){return`${this.type}-${this.field}-${this.valueExpression}`}}
Object(r.a)([Object(s.b)()],h.prototype,"index",void 0),Object(r.a)([Object(s.b)({type:f.apiValues,readOnly:!0,json:{read:f.read,write:f.write}})],h.prototype,"type",void 0),Object(r.a)([Object(s.b)({type:String,json:{write:!0}})],h.prototype,"field",void 0),Object(r.a)([Object(l.a)("field")],h.prototype,"castField",null),Object(r.a)([Object(s.b)({type:String,json:{write:!0}})],h.prototype,"valueExpression",void 0),Object(r.a)([Object(s.b)({type:String,json:{write:!0}})],h.prototype,"valueExpressionTitle",void 0),Object(r.a)([Object(s.b)({readOnly:!0})],h.prototype,"arcadeRequired",null),Object(r.a)([Object(s.b)({type:d.a,json:{write:!0}})],h.prototype,"legendOptions",void 0),h=Object(r.a)([Object(c.a)("esri.renderers.visualVariables.VisualVariable")],h)
const p=h},1041:function(e,t,n){"use strict"
n.d(t,"a",(function(){return z})),n.d(t,"b",(function(){return F})),n.d(t,"c",(function(){return U})),n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return v})),n.d(t,"f",(function(){return j})),n.d(t,"g",(function(){return w})),n.d(t,"h",(function(){return o})),n.d(t,"i",(function(){return m})),n.d(t,"j",(function(){return g})),n.d(t,"k",(function(){return A})),n.d(t,"l",(function(){return D})),n.d(t,"m",(function(){return c})),n.d(t,"n",(function(){return f})),n.d(t,"o",(function(){return h})),n.d(t,"p",(function(){return u})),n.d(t,"q",(function(){return d})),n.d(t,"r",(function(){return R})),n.d(t,"s",(function(){return k})),n.d(t,"t",(function(){return s})),n.d(t,"u",(function(){return I})),n.d(t,"v",(function(){return y})),n.d(t,"w",(function(){return _})),n.d(t,"x",(function(){return S})),n.d(t,"y",(function(){return P})),n.d(t,"z",(function(){return N})),n.d(t,"A",(function(){return E})),n.d(t,"B",(function(){return x})),n.d(t,"C",(function(){return M})),n.d(t,"D",(function(){return L})),n.d(t,"E",(function(){return C})),n.d(t,"F",(function(){return O})),n.d(t,"G",(function(){return l})),n.d(t,"H",(function(){return T})),n.d(t,"I",(function(){return b})),n.d(t,"J",(function(){return V}))
var r=n(23),i=n(770),a=n(996)
function o(e=U){return[e[0],e[1],e[2],e[3],e[4],e[5]]}function s(e,t,n,r,i,a,s=o()){return s[0]=e,s[1]=t,s[2]=n,s[3]=r,s[4]=i,s[5]=a,s}function l(e,t){const n=isFinite(e[2])||isFinite(e[5])
return new i.default(n?{xmin:e[0],xmax:e[3],ymin:e[1],ymax:e[4],zmin:e[2],zmax:e[5],spatialReference:t}:{xmin:e[0],xmax:e[3],ymin:e[1],ymax:e[4],spatialReference:t})}function c(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.min(e[2],t[2]),e[3]=Math.max(e[3],t[3]),e[4]=Math.max(e[4],t[4]),e[5]=Math.max(e[5],t[5])}function u(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[3]=Math.max(e[3],t[2]),e[4]=Math.max(e[4],t[3])}function d(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.min(e[2],t[2]),e[3]=Math.max(e[3],t[0]),e[4]=Math.max(e[4],t[1]),e[5]=Math.max(e[5],t[2])}function f(e,t,n=0,r=t.length/3){let i=e[0],a=e[1],o=e[2],s=e[3],l=e[4],c=e[5]
for(let e=0;e<r;e++)i=Math.min(i,t[n+3*e]),a=Math.min(a,t[n+3*e+1]),o=Math.min(o,t[n+3*e+2]),s=Math.max(s,t[n+3*e]),l=Math.max(l,t[n+3*e+1]),c=Math.max(c,t[n+3*e+2])
e[0]=i,e[1]=a,e[2]=o,e[3]=s,e[4]=l,e[5]=c}function h(e,t,n){const r=t.length
let i=e[0],a=e[1],o=e[2],s=e[3],l=e[4],c=e[5]
if(n)for(let e=0;e<r;e++){const n=t[e]
i=Math.min(i,n[0]),a=Math.min(a,n[1]),o=Math.min(o,n[2]),s=Math.max(s,n[0]),l=Math.max(l,n[1]),c=Math.max(c,n[2])}else for(let e=0;e<r;e++){const n=t[e]
i=Math.min(i,n[0]),a=Math.min(a,n[1]),s=Math.max(s,n[0]),l=Math.max(l,n[1])}e[0]=i,e[1]=a,e[2]=o,e[3]=s,e[4]=l,e[5]=c}function p(e){for(let t=0;t<6;t++)if(!isFinite(e[t]))return!1
return!0}function b(e){return e[0]>=e[3]?0:e[3]-e[0]}function m(e){return e[1]>=e[4]?0:e[4]-e[1]}function y(e){return e[2]>=e[5]?0:e[5]-e[2]}function g(e){const t=b(e),n=y(e),r=m(e)
return Math.sqrt(t*t+n*n+r*r)}function v(e,t=[0,0,0]){return t[0]=e[0]+b(e)/2,t[1]=e[1]+m(e)/2,t[2]=e[2]+y(e)/2,t}function O(e,t=[0,0,0]){return t[0]=b(e),t[1]=m(e),t[2]=y(e),t}function w(e,t){return t[0]>=e[0]&&t[1]>=e[1]&&t[2]>=e[2]&&t[0]<=e[3]&&t[1]<=e[4]&&t[2]<=e[5]}function j(e,t){return t[0]>=e[0]&&t[1]>=e[1]&&t[2]>=e[2]&&t[3]<=e[3]&&t[4]<=e[4]&&t[5]<=e[5]}function _(e,t){return Math.max(t[0],e[0])<=Math.min(t[3],e[3])&&Math.max(t[1],e[1])<=Math.min(t[4],e[4])&&Math.max(t[2],e[2])<=Math.min(t[5],e[5])}function S(e,t){return!!Object(r.k)(t)||_(e,t)}function E(e,t,n,r,i=e){return i[0]=e[0]+t,i[1]=e[1]+n,i[2]=e[2]+r,i[3]=e[3]+t,i[4]=e[4]+n,i[5]=e[5]+r,i}function x(e,t,n=e){const r=e[0]+b(e)/2,i=e[1]+m(e)/2,a=e[2]+y(e)/2
return n[0]=r+(e[0]-r)*t,n[1]=i+(e[1]-i)*t,n[2]=a+(e[2]-a)*t,n[3]=r+(e[3]-r)*t,n[4]=i+(e[4]-i)*t,n[5]=a+(e[5]-a)*t,n}function I(e,t){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function C(e,t,n=e){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n!==e&&(n[3]=e[3],n[4]=e[4],n[5]=e[5]),n}function L(e,t,n=e){return n[3]=t[0],n[4]=t[1],n[5]=t[2],n!==e&&(n[0]=e[0],n[1]=e[1],n[2]=e[2]),e}function M(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e}function A(e){return e?M(e,z):o(z)}function T(e,t){return t||(t=Object(a.m)()),t[0]=e[0],t[1]=e[1],t[2]=e[3],t[3]=e[4],t}function R(e,t){return e[0]=t[0],e[1]=t[1],e[2]=Number.NEGATIVE_INFINITY,e[3]=t[2],e[4]=t[3],e[5]=Number.POSITIVE_INFINITY,e}function k(e,t,n,r,i){return e[0]=t,e[1]=n,e[2]=Number.NEGATIVE_INFINITY,e[3]=r,e[4]=i,e[5]=Number.POSITIVE_INFINITY,e}function P(e){return 6===e.length}function N(e){return 0===b(e)&&0===m(e)&&0===y(e)}function D(e,t,n){if(Object(r.k)(e)||Object(r.k)(t))return e===t
if(!P(e)||!P(t))return!1
if(n){for(let r=0;r<e.length;r++)if(!n(e[r],t[r]))return!1}else for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1
return!0}function V(e,t,n,r,i,a){return s(e,t,n,r,i,a,$)}const F=[-1/0,-1/0,-1/0,1/0,1/0,1/0],z=[1/0,1/0,1/0,-1/0,-1/0,-1/0],U=[0,0,0,0,0,0],$=o()},1043:function(e,t,n){"use strict"
function r(e){return e&&("function"==typeof e.on||"function"==typeof e.addEventListener)}function i(e,t,n){if(!r(e))throw new TypeError("target is not a Evented or EventTarget object")
if("on"in e)return e.on(t,n)
if(Array.isArray(t)){const r=t.slice()
for(const t of r)e.addEventListener(t,n)
return{remove(){for(const t of r)e.removeEventListener(t,n)}}}return e.addEventListener(t,n),{remove(){e.removeEventListener(t,n)}}}function a(e,t,n){if(!r(e))throw new TypeError("target is not a Evented or EventTarget object")
if("once"in e)return e.once(t,n)
const a=i(e,t,t=>{a.remove(),n.call(e,t)})
return{remove(){a.remove()}}}n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return a}))
const o={Win:"Meta",Scroll:"ScrollLock",Spacebar:" ",Down:"ArrowDown",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Del:"Delete",Apps:"ContextMenu",Esc:"Escape",Multiply:"*",Add:"+",Subtract:"-",Decimal:".",Divide:"/"}
function s({key:e}){return o[e]||e}},1046:function(e,t,n){"use strict"
n.d(t,"a",(function(){return p}))
var r=n(968),i=n(446),a=n(1058),o=n(973),s=n(1044),l=n(970),c=n(969)
const u="loaded",d=e=>{let t=class extends e{constructor(...e){super(...e),this._loadController=null,this.loadError=null,this.loadStatus="not-loaded",this._set("loadWarnings",[]),this.addResolvingPromise(new Promise(e=>{const t=this.load.bind(this)
this.load=n=>{const r=new Promise((e,t)=>{const r=Object(o.o)(n,t)
this.destroyed&&t(new i.a("load:instance-destroyed",`Instance of '${this.declaredClass||this.constructor.name}' is already destroyed`,{instance:this})),this._promiseProps.when(e,t).finally(()=>{r&&r.remove()})})
if("not-loaded"===this.loadStatus){this._set("loadStatus","loading")
const e=this._loadController=new AbortController
t({signal:e.signal}),Object(o.n)(e.signal,()=>{this._promiseProps.abort()})}return e(),r}})),this.when(()=>{this._set("loadStatus",u),this._loadController=null},e=>{this._set("loadStatus","failed"),this._set("loadError",e),this._loadController=null})}get loaded(){return this.loadStatus===u}get loadWarnings(){return this._get("loadWarnings")}load(){return null}cancelLoad(){var e
return this.isFulfilled()||(this._set("loadError",new i.a("load:cancelled","Cancelled")),null!=(e=this._loadController)&&e.abort()),this}}
return Object(r.a)([Object(l.b)({readOnly:!0})],t.prototype,"loaded",null),Object(r.a)([Object(l.b)({readOnly:!0})],t.prototype,"loadError",void 0),Object(r.a)([Object(l.b)({clonable:!1})],t.prototype,"loadStatus",void 0),Object(r.a)([Object(l.b)({type:[s.a],readOnly:!0})],t.prototype,"loadWarnings",null),t=Object(r.a)([Object(c.a)("esri.core.Loadable")],t),t}
let f=class extends(d(a.a)){}
var h
f=Object(r.a)([Object(c.a)("esri.core.Loadable")],f),(h=f||(f={})).LoadableMixin=d,h.isLoadable=function(e){return!(!e||!e.load)}
const p=f},1052:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o}))
class r{constructor(e,t,n,r){this.semiMajorAxis=e,this.flattening=t,this.outerAtmosphereRimWidth=n
const i=1-this.flattening
this.semiMinorAxis=this.semiMajorAxis*i,this.halfSemiMajorAxis=this.semiMajorAxis/2,this.halfCircumference=Math.PI*this.semiMajorAxis,this.metersPerDegree=this.halfCircumference/180,this.inverseFlattening=1/(1-this.flattening)-1,this.eccentricitySquared=r||2*this.flattening-this.flattening*this.flattening,this.meanRadiusSemiAxes=(2*this.semiMajorAxis+this.semiMinorAxis)/3}get radius(){return this.semiMajorAxis}}const i=new r(6378137,1/298.257223563,3e5,.006694379990137799),a=new r(3396190,1/169.8944472236118,23e4),o=new r(1737400,0,0)},1054:function(e,t,n){"use strict"
n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return y})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return d})),n.d(t,"f",(function(){return f})),n.d(t,"g",(function(){return s})),n.d(t,"h",(function(){return o})),n.d(t,"i",(function(){return l}))
var r=n(23),i=n(374)
function a(e,t){const n=t&&t.url&&t.url.path
if(e&&n&&(e=Object(i.F)(e,n,{preserveProtocolRelative:!0}),t.portalItem&&t.readResourcePaths)){const n=Object(i.H)(e,t.portalItem.itemUrl)
null!=n&&u.test(n)&&t.readResourcePaths.push(t.portalItem.resourceFromPath(n).path)}return p(e,t&&t.portal)}function o(e,t,n=b.YES){if(null==e)return e
!Object(i.x)(e)&&t&&t.blockedRelativeUrls&&t.blockedRelativeUrls.push(e)
let r=Object(i.F)(e)
if(t){const n=t.verifyItemRelativeUrls&&t.verifyItemRelativeUrls.rootPath||t.url&&t.url.path
if(n){const a=p(n,t.portal),o=p(r,t.portal)
r=Object(i.H)(o,a,a),null!=r&&r!==o&&r!==e&&t.verifyItemRelativeUrls&&t.verifyItemRelativeUrls.writtenUrls.push(r)}}return r=h(r,null==t?void 0:t.portal),Object(i.x)(r)&&(r=Object(i.I)(r)),null!=t&&t.resources&&null!=t&&t.portalItem&&!Object(i.x)(r)&&!Object(i.z)(r)&&n===b.YES&&t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(r),compress:!1}),r}function s(e,t,n){return a(e,n)}function l(e,t,n,r){const i=o(e,r)
void 0!==i&&(t[n]=i)}const c=/\/items\/([^\/]+)\/resources\/(.*)/,u=/^\.\/resources\//
function d(e){var t,n,r
return null!=(t=null==(n=null!=(r=null==e?void 0:e.match(c))?r:null)?void 0:n[1])?t:null}function f(e){var t
const n=null!=(t=null==e?void 0:e.match(c))?t:null
if(null==n)return null
const a=n[2],o=a.lastIndexOf("/")
if(-1===o){const{path:e,extension:t}=Object(i.O)(a)
return{prefix:null,filename:e,extension:Object(r.u)(t)}}const{path:s,extension:l}=Object(i.O)(a.slice(o+1))
return{prefix:a.slice(0,o),filename:s,extension:Object(r.u)(l)}}function h(e,t){return t&&!t.isPortal&&t.urlKey&&t.customBaseUrl?Object(i.g)(e,`${t.urlKey}.${t.customBaseUrl}`,t.portalHostname):e}function p(e,t){if(!t||t.isPortal||!t.urlKey||!t.customBaseUrl)return e
const n=`${t.urlKey}.${t.customBaseUrl}`,r=Object(i.m)()
return Object(i.v)(r,`${r.scheme}://${n}`)?Object(i.g)(e,t.portalHostname,n):Object(i.g)(e,n,t.portalHostname)}var b,m;(m=b||(b={}))[m.YES=0]="YES",m[m.NO=1]="NO"
const y=Object.freeze(Object.defineProperty({__proto__:null,get MarkKeep(){return b},ensureMainOnlineDomain:h,fromJSON:a,itemIdFromResourceUrl:d,prefixAndFilenameFromResourceUrl:f,read:s,toJSON:o,write:l},Symbol.toStringTag,{value:"Module"}))},1055:function(e,t,n){"use strict"
n.d(t,"a",(function(){return b}))
var r,i=n(968),a=n(234),o=n(970),s=(n(971),n(969)),l=n(974),c=n(770),u=n(1004),d=n(992),f=n(1105)
function h(e){return(t,n)=>null==t?n:null==n?t:e(t,n)}let p=r=class extends u.a{constructor(...e){super(...e),this.points=[],this.type="multipoint"}normalizeCtorArgs(e,t){if(!e&&!t)return{}
const n={}
Array.isArray(e)?(n.points=e,n.spatialReference=t):function(e){return e&&("esri.geometry.SpatialReference"===e.declaredClass||null!=e.wkid)}(e)?n.spatialReference=e:(e.points&&(n.points=e.points),e.spatialReference&&(n.spatialReference=e.spatialReference),e.hasZ&&(n.hasZ=e.hasZ),e.hasM&&(n.hasM=e.hasM))
const r=n.points&&n.points[0]
return r&&(void 0===n.hasZ&&void 0===n.hasM?(n.hasZ=r.length>2,n.hasM=!1):void 0===n.hasZ?n.hasZ=r.length>3:void 0===n.hasM&&(n.hasM=r.length>3)),n}get cache(){return this.commitProperty("points"),this.commitProperty("hasZ"),this.commitProperty("hasM"),this.commitProperty("spatialReference"),{}}get extent(){const e=this.points
if(!e.length)return null
const t=new c.default,n=this.hasZ,r=this.hasM,i=n?3:2,a=e[0],o=h(Math.min),s=h(Math.max)
let l,u,d,f,[p,b]=a,[m,y]=a
for(let t=0,a=e.length;t<a;t++){const a=e[t],[c,h]=a
if(p=o(p,c),b=o(b,h),m=s(m,c),y=s(y,h),n&&a.length>2){const e=a[2]
l=o(l,e),d=s(d,e)}if(r&&a.length>i){const e=a[i]
u=o(u,e),f=s(f,e)}}return t.xmin=p,t.ymin=b,t.xmax=m,t.ymax=y,t.spatialReference=this.spatialReference,n?(t.zmin=l,t.zmax=d):(t.zmin=void 0,t.zmax=void 0),r?(t.mmin=u,t.mmax=f):(t.mmin=void 0,t.mmax=void 0),t}writePoints(e,t){t.points=Object(a.a)(this.points)}addPoint(e){return Object(f.a)(this,e),Array.isArray(e)?this.points.push(e):this.points.push(e.toArray()),this.notifyChange("points"),this}clone(){const e={points:Object(a.a)(this.points),spatialReference:this.spatialReference}
return this.hasZ&&(e.hasZ=!0),this.hasM&&(e.hasM=!0),new r(e)}getPoint(e){if(!this._validateInputs(e))return null
const t=this.points[e],n={x:t[0],y:t[1],spatialReference:this.spatialReference}
let r=2
return this.hasZ&&(n.z=t[2],r=3),this.hasM&&(n.m=t[r]),new d.a(n)}removePoint(e){if(!this._validateInputs(e))return null
const t=new d.a(this.points.splice(e,1)[0],this.spatialReference)
return this.notifyChange("points"),t}setPoint(e,t){return this._validateInputs(e)?(Object(f.a)(this,t),Array.isArray(t)||(t=t.toArray()),this.points[e]=t,this.notifyChange("points"),this):this}toJSON(e){return this.write({},e)}_validateInputs(e){return null!=e&&e>=0&&e<this.points.length}}
Object(i.a)([Object(o.b)({readOnly:!0})],p.prototype,"cache",null),Object(i.a)([Object(o.b)()],p.prototype,"extent",null),Object(i.a)([Object(o.b)({type:[[Number]],json:{write:{isRequired:!0}}})],p.prototype,"points",void 0),Object(i.a)([Object(l.a)("points")],p.prototype,"writePoints",null),p=r=Object(i.a)([Object(s.a)("esri.geometry.Multipoint")],p),p.prototype.toJSON.isDefaultToJSON=!0
const b=p},1058:function(e,t,n){"use strict"
n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return d}))
var r,i,a=n(968),o=n(975),s=n(23),l=n(973),c=n(969);(i=r||(r={}))[i.PENDING=0]="PENDING",i[i.RESOLVED=1]="RESOLVED",i[i.REJECTED=2]="REJECTED"
class u{constructor(e){this.instance=e,this._resolver=Object(l.d)(),this._status=r.PENDING,this._resolvingPromises=[],this._resolver.promise.then(()=>{this._status=r.RESOLVED,this._cleanUp()},()=>{this._status=r.REJECTED,this._cleanUp()})}addResolvingPromise(e){this._resolvingPromises.push(e),this._tryResolve()}isResolved(){return this._status===r.RESOLVED}isRejected(){return this._status===r.REJECTED}isFulfilled(){return this._status!==r.PENDING}abort(){this._resolver.reject(Object(l.c)())}when(e,t){return this._resolver.promise.then(e,t)}_cleanUp(){this._allPromise=this._resolvingPromises=this._allPromise=null}_tryResolve(){if(this.isFulfilled())return
const e=Object(l.d)(),t=[...this._resolvingPromises,Object(s.d)(e.promise)],n=this._allPromise=Promise.all(t)
n.then(()=>{this.isFulfilled()||this._allPromise!==n||this._resolver.resolve(this.instance)},e=>{this.isFulfilled()||this._allPromise!==n||Object(l.j)(e)||this._resolver.reject(e)}),e.resolve()}}const d=e=>{let t=class extends e{constructor(...e){super(...e),this._promiseProps=new u(this),this.addResolvingPromise(Promise.resolve())}isResolved(){return this._promiseProps.isResolved()}isRejected(){return this._promiseProps.isRejected()}isFulfilled(){return this._promiseProps.isFulfilled()}when(e,t){return new Promise((e,t)=>{this._promiseProps.when(e,t)}).then(e,t)}catch(e){return this.when(null,e)}addResolvingPromise(e){e&&!this._promiseProps.isFulfilled()&&this._promiseProps.addResolvingPromise("_promiseProps"in e?e.when():e)}}
return t=Object(a.a)([Object(c.a)("esri.core.Promise")],t),t}
let f=class extends(d(o.a)){}
f=Object(a.a)([Object(c.a)("esri.core.Promise")],f)},1059:function(e,t,n){"use strict"
n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n(235)
const r={milliseconds:1,seconds:1e3,minutes:6e4,hours:36e5,days:864e5,weeks:6048e5,months:26784e5,years:31536e6,decades:31536e7,centuries:31536e8},i={milliseconds:{getter:"getMilliseconds",setter:"setMilliseconds",multiplier:1},seconds:{getter:"getSeconds",setter:"setSeconds",multiplier:1},minutes:{getter:"getMinutes",setter:"setMinutes",multiplier:1},hours:{getter:"getHours",setter:"setHours",multiplier:1},days:{getter:"getDate",setter:"setDate",multiplier:1},weeks:{getter:"getDate",setter:"setDate",multiplier:7},months:{getter:"getMonth",setter:"setMonth",multiplier:1},years:{getter:"getFullYear",setter:"setFullYear",multiplier:1},decades:{getter:"getFullYear",setter:"setFullYear",multiplier:10},centuries:{getter:"getFullYear",setter:"setFullYear",multiplier:100}}
function a(e,t,n){const r=new Date(e.getTime())
if(t&&n){const e=i[n],{getter:a,setter:o,multiplier:s}=e
if("months"===n){const e=function(e,t){const n=new Date(e,t+1,1)
return n.setDate(0),n.getDate()}(r.getFullYear(),r.getMonth()+t)
r.getDate()>e&&r.setDate(e)}r[o](r[a]()+t*s)}return r}function o(e,t){switch(t){case"milliseconds":return new Date(e.getTime())
case"seconds":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds())
case"minutes":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes())
case"hours":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours())
case"days":return new Date(e.getFullYear(),e.getMonth(),e.getDate())
case"weeks":return new Date(e.getFullYear(),e.getMonth(),e.getDate()-e.getDay())
case"months":return new Date(e.getFullYear(),e.getMonth(),1)
case"years":return new Date(e.getFullYear(),0,1)
case"decades":return new Date(e.getFullYear()-e.getFullYear()%10,0,1)
case"centuries":return new Date(e.getFullYear()-e.getFullYear()%100,0,1)
default:return new Date}}function s(e,t,n){return 0===e?0:e*r[t]/r[n]}},1061:function(e,t,n){"use strict"
n.d(t,"a",(function(){return $}))
var r=n(968),i=(n(1083),n(1337)),a=n(1002),o=n(1043),s=n(1007),l=(n(235),n(234)),c=n(233),u=n(23),d=n(1058),f=n(973),h=n(978),p=n(1346),b=n(970),m=n(987),y=n(969),g=n(1060),v=n(1368),O=n(1432)
n(1347)
const w={handleInterceptedEvent:(e,t,n,r)=>(e.scheduleRender(),t.properties["on"+r.type].apply(t.properties.bind||n,[r]))},j={namespace:void 0,performanceLogger:()=>{},eventHandlerInterceptor:void 0,styleApplyer:(e,t,n)=>{e.style[t]=n}},_=(e,t,n=!1)=>{let r=e
return t.forEach((e,i)=>{var a
const o=null!=(a=r)&&a.children?((e,t)=>e.find(t))(r.children,t=>t.domNode===e):void 0
n&&!o&&i!==t.length-1||(r=o)}),r}
var S=n(1217),E=n(1407)
function x(){const{classList:e}=document.body,t=window.matchMedia("(prefers-color-scheme: dark)").matches,n=()=>e.contains(E.f)||e.contains(E.c)&&t?"dark":"light",r=e=>document.body.dispatchEvent(new CustomEvent("calciteModeChange",{bubbles:!0,detail:{mode:e}})),i=e=>{a!==e&&r(e),a=e}
let a=n()
r(a),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e=>i(e.matches?"dark":"light")),new MutationObserver(()=>i(n())).observe(document.body,{attributes:!0,attributeFilter:["class"]})}"undefined"!=typeof window&&"undefined"!=typeof location&&"undefined"!=typeof document&&window.location===location&&window.document===document&&("interactive"===document.readyState?x():document.addEventListener("DOMContentLoaded",()=>x(),{once:!0}))
var I=n(1019),C=n(374)
let L
L="components/assets"
var M=n(1434),A=n(1435)
const T=new Set
var R,k=n(1433),P=n(998),N=n(1005),D=n(1027)
let V=0
const F=(e=>{let t
const n={...w,...e},r=(a=n,{...j,...a}),i=r.performanceLogger
var a
let o,s=!0,l=!1
const c=[],u=[],d=(e,a,o)=>{let s
r.eventHandlerInterceptor=(e,r,a,o)=>function(e){let r
i("domEvent",e)
const a=((e,t)=>{const n=[]
for(;e&&e!==t;)n.push(e),e=e.parentNode
return n})(e.currentTarget,s.domNode),o=a.some(e=>{var t
return customElements.get(null==e||null==(t=e.tagName)?void 0:t.toLowerCase())})
if(e.eventPhase!==Event.CAPTURING_PHASE&&o){const t=e.composedPath(),n=t.slice(t.indexOf(e.currentTarget),t.indexOf(s.domNode)).filter(e=>e.getRootNode()===e.ownerDocument).reverse()
r=_(s.getLastRender(),n,!0)}else a.reverse(),r=_(s.getLastRender(),a)
let l
return r&&(l=n.handleInterceptedEvent(t,r,this,e)),i("domEventProcessed",e),l},null==n.postProcessProjectionOptions||n.postProcessProjectionOptions(r)
const l=o()
s=e(a,l,r),c.push(s),u.push(o),n.afterFirstVNodeRendered&&n.afterFirstVNodeRendered(s,l)}
let f=()=>{if(o=void 0,s){s=!1,i("renderStart",void 0)
for(let e=0;e<c.length;e++){const t=u[e]()
i("rendered",void 0),c[e].update(t),i("patched",void 0)}i("renderDone",void 0),s=!0}}
return n.modifyDoRenderImplementation&&(f=n.modifyDoRenderImplementation(f,c,u)),t={renderNow:f,scheduleRender:()=>{o||l||(o=requestAnimationFrame(f))},stop:()=>{o&&(cancelAnimationFrame(o),o=void 0),l=!0},resume:()=>{l=!1,s=!0,t.scheduleRender()},append:(e,t)=>{d(O.b.append,e,t)},insertBefore:(e,t)=>{d(O.b.insertBefore,e,t)},merge:(e,t)=>{d(O.b.merge,e,t)},replace:(e,t)=>{d(O.b.replace,e,t)},detach:e=>{for(let t=0;t<u.length;t++)if(u[t]===e)return u.splice(t,1),c.splice(t,1)[0]
throw new Error("renderFunction was not found")}},t})({postProcessProjectionOptions(e){const t=e.eventHandlerInterceptor,n=/capture$/i
e.eventHandlerInterceptor=(e,r,i,a)=>{const o=null==t?void 0:t(e,r,i,a),s=n.test(e)
if(!((e=e.replace(n,"")).toLowerCase()in i)||s){const t=e[2].toLowerCase()+e.slice(3),n=e=>null==o?void 0:o.call(i,e)
i.addEventListener(t,n,s)
const r=()=>i.removeEventListener(t,n,s),l=a.afterRemoved
a.afterRemoved=e=>{null!=l&&l(e),r()}}return o}},handleInterceptedEvent(e,t,n,r){const{eventPhase:i,type:a}=r,o=i===Event.CAPTURING_PHASE
let s=`on${a}${o?"capture":""}`
const l=t.properties;(l&&s in l||(s=`on${a[0].toUpperCase()}${a.slice(1)}${o?"Capture":""}`,l&&s in l))&&(Object(k.a)(),e.scheduleRender(),l[s].call(l.bind||n,r))}})
let z=!1,U=class extends(Object(d.b)(a.a.EventedAccessor)){constructor(e,t){super(e,t),this._attached=!1,this._internalHandles=new s.a,this._projector=F,this._readyForTrueRender=!1,this.iconClass="esri-icon-checkbox-unchecked",this.key=this,this._loadLocale=Object(f.f)(async()=>{if(this._messageBundleProps&&this._messageBundleProps.length){const e=await Object(f.g)(this._messageBundleProps.map(async({bundlePath:e,propertyName:t})=>{let n=await Object(D.a)(e)
this.uiStrings&&Object.keys(this.uiStrings)&&(n=function e(t,n){for(const r in n)null!=t[r]&&("object"==typeof t[r]&&"object"==typeof n[r]?e(t[r],null==n?void 0:n[r]):t[r]=n[r])
return t}(Object(l.a)(n),this.uiStrings)),this[t]=n}))
for(const t of e)t.error&&c.a.getLogger(this.declaredClass).error("widget-intl:locale-error",this.declaredClass,t.error)}await this.loadLocale()}),Object(S.k)(Object(C.F)(Object(I.b)("components/assets")))
const n="esri-widget-uid-"+Object(p.a)(),r=this.render.bind(this)
this._trackingTarget=new v.a(()=>this.scheduleRender())
const i=()=>{var e
if(!this._readyForTrueRender||this.destroyed)return null
if(!this.visible)return{vnodeSelector:"div",properties:{key:n,class:"",styles:{display:"none"}},domNode:null,children:void 0,text:void 0}
const t=r()
let{properties:i}=t
i||(t.properties=i={})
let{key:a,styles:o}=i
a||(i.key=n),o||(i.styles=o={}),o.display||(o.display="")
let s=0
return null!=(e=t.children)&&e.forEach(e=>{if(Object(M.a)(e.vnodeSelector))return
let{properties:t}=e
t||(e.properties=t={}),t.key||(t.key=`${this.id}--${s++}`)}),Object(M.b)(this,t)}
var a
this.render=()=>{var e
if(z)return i()
let t=null!=(e=Object(k.c)(this))?e:null
if(t)return t
this._trackingTarget.clear(),z=!0
try{t=Object(g.b)(this._trackingTarget,i)}catch(e){throw console.error(e),e}finally{z=!1}return t&&Object(k.d)(this,t),t},this.addResolvingPromise(this._resourcesFetch=this.beforeFirstRender().then(()=>{this._readyForTrueRender=!0,this._postInitialize()})),a=this._resourcesFetch,T.add(a),a.finally(()=>T.delete(a))}normalizeCtorArgs(e,t){const n={...e}
return t&&(n.container=t),n}postInitialize(){}beforeFirstRender(){return Promise.all([this.loadDependencies(),this._loadLocale()]).then(()=>{}).catch(f.r)}async loadDependencies(){}async loadLocale(){}destroy(){this.destroyed||(Object(u.e)(this._trackingTarget),Object(u.e)(this.viewModel),this._detach(this.container),this._set("container",null),this._internalHandles.destroy(),this._emitter.clear(),this.render=()=>null,this._projector=null,Object(k.b)(this))}set container(e){this._get("container")||this._set("container",e)}castContainer(e){return Object(i.a)(e)}get domNode(){return this.container}set domNode(e){this.container=e}get id(){return this._get("id")||this.get("container.id")||Date.now().toString(16)+"-widget-"+V++}set id(e){e&&this._set("id",e)}get label(){return this.declaredClass.split(".").pop()}set label(e){this._overrideIfSome("label",e)}get renderable(){return this._resourcesFetch}get visible(){return this._get("visible")}set visible(e){this._set("visible",e)}get[(R=A.a,A.b)](){return{projector:this._projector}}render(){throw new Error("not implemented")}scheduleRender(){this.destroyed||(Object(k.b)(this),this._projector.scheduleRender())}classes(...e){return P.a.apply(this,e)}renderNow(){Object(k.b)(this),this._projector.renderNow()}_postInitialize(){var e
if(this.destroyed)return
this.scheduleRender(),null!=(e=this._delegatedEventNames)&&e.length&&this._internalHandles.add(Object(h.f)(()=>this.viewModel,(e,t)=>{t&&this._internalHandles.remove("delegated-events"),e&&Object(o.b)(e)&&this._internalHandles.add(this._delegatedEventNames.map(t=>Object(o.c)(e,t,e=>{this.emit(t,e)})),"delegated-events")},h.a)),this.postInitialize()
const t=async()=>{await this._loadLocale().catch(f.r),this.scheduleRender()}
this._internalHandles.add([Object(N.c)(t),Object(h.f)(()=>this.uiStrings,t),Object(h.g)(()=>this.container,e=>{this.destroyed||this._attach(e)},{initial:!0,once:!0})])}_attach(e){e&&(this._projector.merge(e,this.render),this._attached=!0)}_detach(e){var t
this._attached&&(this._projector.detach(this.render),this._attached=!1),null==e||null==(t=e.parentNode)||t.removeChild(e)}}
U[R]=!0,Object(r.a)([Object(b.b)()],U.prototype,"_readyForTrueRender",void 0),Object(r.a)([Object(b.b)({value:null})],U.prototype,"container",null),Object(r.a)([Object(m.a)("container")],U.prototype,"castContainer",null),Object(r.a)([Object(b.b)()],U.prototype,"iconClass",void 0),Object(r.a)([Object(b.b)()],U.prototype,"id",null),Object(r.a)([Object(b.b)()],U.prototype,"label",null),Object(r.a)([Object(b.b)()],U.prototype,"renderable",null),Object(r.a)([Object(b.b)()],U.prototype,"uiStrings",void 0),Object(r.a)([Object(b.b)()],U.prototype,"viewModel",void 0),Object(r.a)([Object(b.b)({value:!0})],U.prototype,"visible",null),Object(r.a)([Object(b.b)()],U.prototype,"key",void 0),Object(r.a)([Object(b.b)()],U.prototype,"children",void 0),Object(r.a)([Object(b.b)()],U.prototype,"afterCreate",void 0),Object(r.a)([Object(b.b)()],U.prototype,"afterUpdate",void 0),Object(r.a)([Object(b.b)()],U.prototype,"afterRemoved",void 0),U=Object(r.a)([Object(y.a)("esri.widgets.Widget")],U)
const $=U},1063:function(e,t,n){"use strict"
n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s}))
var r=n(968),i=n(969)
let a=0
const o=e=>{let t=class extends e{constructor(...e){super(...e),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:Date.now().toString(16)+"-object-"+a++})}}
return t=Object(r.a)([Object(i.a)("esri.core.Identifiable")],t),t},s=e=>{let t=class extends e{constructor(...e){super(...e),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:a++})}}
return t=Object(r.a)([Object(i.a)("esri.core.NumericIdentifiable")],t),t}
let l=class extends(o(class{})){}
l=Object(r.a)([Object(i.a)("esri.core.Identifiable")],l)},1066:function(e,t,n){"use strict"
n.d(t,"a",(function(){return y})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return o})),n.d(t,"f",(function(){return d})),n.d(t,"g",(function(){return f})),n.d(t,"h",(function(){return h})),n.d(t,"i",(function(){return w})),n.d(t,"j",(function(){return j})),n.d(t,"k",(function(){return p})),n.d(t,"l",(function(){return l})),n.d(t,"m",(function(){return g})),n.d(t,"n",(function(){return v}))
var r=n(445),i=n(988)
function a(e){if(!e)return null
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
for(let e=0;e<t.length;e++)t[e].push(n)}return t})}return null}function o(e,t){const n=t[0]-e[0],r=t[1]-e[1]
if(e.length>2&&t.length>2){const i=e[2]-t[2]
return Math.sqrt(n*n+r*r+i*i)}return Math.sqrt(n*n+r*r)}function s(e,t,n){const r=e[0]+n*(t[0]-e[0]),i=e[1]+n*(t[1]-e[1])
return e.length>2&&t.length>2?[r,i,e[2]+n*(t[2]-e[2])]:[r,i]}function l(e,t,n,r){const[i,a]=t,[o,s]=n[r],[l,c]=n[r+1],u=l-o,d=c-s,f=u*u+d*d,h=(i-o)*u+(a-s)*d,p=Math.min(1,Math.max(0,h/f))
return e[0]=o+u*p,e[1]=s+d*p,e}function c(e,t,n){const r=n.rings
let i,a,o=!1,s=1/0
for(let n=0;n<r.length;n++){const l=r[n]
for(let n=0,r=l.length-1;n<l.length;r=n++)i=l[n],a=l[r],i[1]>t!=a[1]>t&&e<(a[0]-i[0])*(t-i[1])/(a[1]-i[1])+i[0]&&(o=!o),s=Math.min(s,u(e,t,i,a))}return 0===s?0:(o?1:-1)*Math.sqrt(s)}function u(e,t,n,r){let i=n[0],a=n[1],o=r[0]-i,s=r[1]-a
if(0!==o||0!==s){const n=((e-i)*o+(t-a)*s)/(o*o+s*s)
n>1?(i=r[0],a=r[1]):n>0&&(i+=o*n,a+=s*n)}return o=e-i,s=t-a,o*o+s*s}function d(e,t){return s(e,t,.5)}function f(e){const t=e.length
let n=0
for(let r=0;r<t-1;++r)n+=o(e[r],e[r+1])
return n}function h(e,t){if(t<=0)return e[0]
const n=e.length
let r=0
for(let i=0;i<n-1;++i){const n=o(e[i],e[i+1])
if(t-r<n){const a=(t-r)/n
return s(e[i],e[i+1],a)}r+=n}return e[n-1]}function p(e,t,n){const r=e.length
let i=0,a=0,o=0
for(let s=0;s<r;s++){const l=e[s],c=e[(s+1)%r]
let u=2
i+=l[0]*c[1]-c[0]*l[1],l.length>2&&c.length>2&&n&&(a+=l[0]*c[2]-c[0]*l[2],u=3),l.length>u&&c.length>u&&t&&(o+=l[0]*c[u]-c[0]*l[u])}return i<=0&&a<=0&&o<=0}function b(e){const t=e.length
return t>2&&Object(r.e)(e[0],e[t-1])}function m(e){var t,n
if("rings"in e&&(y(e),e.rings.length>0&&!p(e.rings[0],null!=(t=e.hasM)&&t,null!=(n=e.hasZ)&&n)))for(const t of e.rings)t.reverse()}function y(e){if("rings"in e)for(const t of e.rings)b(t)||t.push(t[0].slice())}function g(e){return"polygon"!==e.type&&"polyline"!==e.type||v("polygon"===e.type?e.rings:e.paths,e.spatialReference),e}function v(e,t){const n=Object(i.e)(t)
if(!n)return
const r=n.valid[0],a=n.valid[1],o=a-r
for(const t of e){let e=1/0,n=-1/0
for(const i of t){const t=O(i[0],r,a)
e=Math.min(e,t),n=Math.max(n,t),i[0]=t}const i=n-e
o-i<i&&t.forEach(e=>{e[0]<0&&(e[0]+=o)})}}function O(e,t,n){const r=n-t
return e<t?n-(t-e)%r:e>n?t+(e-t)%r:e}function w(e){if(!e||e.length<3)return 0
let t=0
const n=e.length-1
for(let r=0;r<n;r++)t+=(e[r][0]-e[r+1][0])*(e[r][1]+e[r+1][1])
return t+=(e[n][0]-e[0][0])*(e[n][1]+e[0][1]),-.5*t}function j(e,t){if(e===t)return!0
if(e.type!==t.type)return!1
if("point"===e.type||"extent"===e.type)return!0
if("multipoint"===e.type)return e.points.length===t.points.length
const[n,r]="polyline"===e.type?[e.paths,t.paths]:[e.rings,t.rings]
return n.length===r.length&&n.every((e,t)=>e.length===r[t].length)}},1070:function(e,t,n){"use strict"
n.d(t,"a",(function(){return S}))
var r,i=n(968),a=n(446),o=n(976),s=n(233),l=n(980),c=n(970),u=n(987),d=n(977),f=n(969),h=n(974),p=n(1040),b=n(1183),m=n(1257),y=n(1108),g=n(1107)
const v=new o.a({width:"width",depth:"depth",height:"height",widthAndDepth:"width-and-depth",all:"all"}),O=new o.a({unknown:"unknown",inch:"inches",foot:"feet",yard:"yards",mile:"miles","nautical-mile":"nautical-miles",millimeter:"millimeters",centimeter:"centimeters",decimeter:"decimeters",meter:"meters",kilometer:"kilometers","decimal-degree":"decimal-degrees"})
function w(e){if(null!=e)return"string"==typeof e||"number"==typeof e?Object(l.k)(e):"size"===e.type?Object(y.e)(e)?e:(delete(e={...e}).type,new _(e)):void 0}function j(e,t,n){if("object"!=typeof e)return e
const r=new _
return r.read(e,n),r}let _=r=class extends p.a{constructor(e){super(e),this.axis=null,this.legendOptions=null,this.normalizationField=null,this.scaleBy=null,this.target=null,this.type="size",this.useSymbolValue=null,this.valueExpression=null,this.valueRepresentation=null,this.valueUnit=null}get cache(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:null,isScaleDriven:null!=this.valueExpression&&g.viewScaleRE.test(this.valueExpression)}}set expression(e){s.a.getLogger(this.declaredClass).warn("'expression' is deprecated since version 4.2. Use 'valueExpression' instead. The only supported expression is 'view.scale'."),"view.scale"===e?(this.valueExpression="$view.scale",this._set("expression",e)):this._set("expression",null)}set index(e){Object(y.e)(this.maxSize)&&(this.maxSize.index=`visualVariables[${e}].maxSize`),Object(y.e)(this.minSize)&&(this.minSize.index=`visualVariables[${e}].minSize`),this._set("index",e)}get inputValueType(){return Object(y.c)(this)}set maxDataValue(e){e&&this.stops&&(s.a.getLogger(this.declaredClass).warn("cannot set maxDataValue when stops is not null."),e=null),this._set("maxDataValue",e)}set maxSize(e){e&&this.stops&&(s.a.getLogger(this.declaredClass).warn("cannot set maxSize when stops is not null."),e=null),this._set("maxSize",e)}castMaxSize(e){return w(e)}readMaxSize(e,t,n){return j(e,0,n)}set minDataValue(e){e&&this.stops&&(s.a.getLogger(this.declaredClass).warn("cannot set minDataValue when stops is not null."),e=null),this._set("minDataValue",e)}set minSize(e){e&&this.stops&&(s.a.getLogger(this.declaredClass).warn("cannot set minSize when stops is not null."),e=null),this._set("minSize",e)}castMinSize(e){return w(e)}readMinSize(e,t,n){return j(e,0,n)}get arcadeRequired(){return!!this.valueExpression||null!=this.minSize&&"object"==typeof this.minSize&&this.minSize.arcadeRequired||null!=this.maxSize&&"object"==typeof this.maxSize&&this.maxSize.arcadeRequired}set stops(e){null==this.minDataValue&&null==this.maxDataValue&&null==this.minSize&&null==this.maxSize?e&&Array.isArray(e)&&(e=e.filter(e=>!!e)).sort((e,t)=>e.value-t.value):e&&(s.a.getLogger(this.declaredClass).warn("cannot set stops when one of minDataValue, maxDataValue, minSize or maxSize is not null."),e=null),this._set("stops",e)}get transformationType(){return Object(y.d)(this,this.inputValueType)}readValueExpression(e,t){return e||t.expression&&"$view.scale"}writeValueExpressionWebScene(e,t,n,r){if("$view.scale"===e){if(r&&r.messages){const e=this.index,t="string"==typeof e?e:`visualVariables[${e}]`
r.messages.push(new a.a("property:unsupported",this.type+"VisualVariable.valueExpression = '$view.scale' is not supported in Web Scene. Please remove this property to save the Web Scene.",{instance:this,propertyName:t+".valueExpression",context:r}))}}else t[n]=e}readValueUnit(e){return e?O.read(e):null}clone(){return new r({axis:this.axis,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,maxDataValue:this.maxDataValue,maxSize:Object(y.e)(this.maxSize)?this.maxSize.clone():this.maxSize,minDataValue:this.minDataValue,minSize:Object(y.e)(this.minSize)?this.minSize.clone():this.minSize,normalizationField:this.normalizationField,stops:this.stops&&this.stops.map(e=>e.clone()),target:this.target,useSymbolValue:this.useSymbolValue,valueRepresentation:this.valueRepresentation,valueUnit:this.valueUnit,legendOptions:this.legendOptions&&this.legendOptions.clone()})}flipSizes(){if(this.transformationType===y.b.ClampedLinear){const{minSize:e,maxSize:t}=this
return this.minSize=t,this.maxSize=e,this}if(this.transformationType===y.b.Stops){const e=this.stops
if(!e)return this
const t=e.map(e=>e.size).reverse(),n=e.length
for(let r=0;r<n;r++)e[r].size=t[r]
return this}return this}getAttributeHash(){return`${super.getAttributeHash()}-${this.target}-${this.normalizationField}`}_interpolateData(){return this.stops&&this.stops.map(e=>e.value||0)}}
Object(i.a)([Object(c.b)({readOnly:!0})],_.prototype,"cache",null),Object(i.a)([Object(c.b)({type:v.apiValues,json:{type:v.jsonValues,origins:{"web-map":{read:!1}},read:v.read,write:v.write}})],_.prototype,"axis",void 0),Object(i.a)([Object(c.b)({type:String,value:null,json:{read:!1}})],_.prototype,"expression",null),Object(i.a)([Object(c.b)()],_.prototype,"index",null),Object(i.a)([Object(c.b)({type:String,readOnly:!0})],_.prototype,"inputValueType",null),Object(i.a)([Object(c.b)({type:m.a,json:{write:!0}})],_.prototype,"legendOptions",void 0),Object(i.a)([Object(c.b)({type:Number,value:null,json:{write:!0}})],_.prototype,"maxDataValue",null),Object(i.a)([Object(c.b)({type:Number,value:null,json:{write:!0}})],_.prototype,"maxSize",null),Object(i.a)([Object(u.a)("maxSize")],_.prototype,"castMaxSize",null),Object(i.a)([Object(d.a)("maxSize")],_.prototype,"readMaxSize",null),Object(i.a)([Object(c.b)({type:Number,value:null,json:{write:!0}})],_.prototype,"minDataValue",null),Object(i.a)([Object(c.b)({type:Number,value:null,json:{write:!0}})],_.prototype,"minSize",null),Object(i.a)([Object(u.a)("minSize")],_.prototype,"castMinSize",null),Object(i.a)([Object(d.a)("minSize")],_.prototype,"readMinSize",null),Object(i.a)([Object(c.b)({type:String,json:{write:!0}})],_.prototype,"normalizationField",void 0),Object(i.a)([Object(c.b)({readOnly:!0})],_.prototype,"arcadeRequired",null),Object(i.a)([Object(c.b)({type:String})],_.prototype,"scaleBy",void 0),Object(i.a)([Object(c.b)({type:[b.a],value:null,json:{write:!0}})],_.prototype,"stops",null),Object(i.a)([Object(c.b)({type:["outline"],json:{write:!0}})],_.prototype,"target",void 0),Object(i.a)([Object(c.b)({type:String,readOnly:!0})],_.prototype,"transformationType",null),Object(i.a)([Object(c.b)({type:["size"],json:{type:["sizeInfo"]}})],_.prototype,"type",void 0),Object(i.a)([Object(c.b)({type:Boolean,json:{write:!0,origins:{"web-map":{read:!1}}}})],_.prototype,"useSymbolValue",void 0),Object(i.a)([Object(c.b)({type:String,json:{write:!0}})],_.prototype,"valueExpression",void 0),Object(i.a)([Object(d.a)("valueExpression",["valueExpression","expression"])],_.prototype,"readValueExpression",null),Object(i.a)([Object(h.a)("web-scene","valueExpression")],_.prototype,"writeValueExpressionWebScene",null),Object(i.a)([Object(c.b)({type:["radius","diameter","area","width","distance"],json:{write:!0}})],_.prototype,"valueRepresentation",void 0),Object(i.a)([Object(c.b)({type:O.apiValues,json:{write:O.write,origins:{"web-map":{read:!1},"web-scene":{write:!0},"portal-item":{write:!0}}}})],_.prototype,"valueUnit",void 0),Object(i.a)([Object(d.a)("valueUnit")],_.prototype,"readValueUnit",null),_=r=Object(i.a)([Object(f.a)("esri.renderers.visualVariables.SizeVariable")],_)
const S=_},1079:function(e,t,n){"use strict"
function r(e){return void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax}function i(e){return void 0!==e.points}function a(e){return void 0!==e.x&&void 0!==e.y}function o(e){return void 0!==e.paths}function s(e){return void 0!==e.rings}function l(e){return function(t,n){return null==t?n:null==n?t:e(t,n)}}n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return h}))
const c=l(Math.min),u=l(Math.max)
function d(e,t){return o(t)?h(e,t.paths,!1,!1):s(t)?h(e,t.rings,!1,!1):i(t)?b(e,t.points,!1,!1,!1,!1):r(t)?p(e,t):(a(t)&&(e[0]=t.x,e[1]=t.y,e[2]=t.x,e[3]=t.y),e)}function f(e,t){return o(t)?h(e,t.paths,!0,!1):s(t)?h(e,t.rings,!0,!1):i(t)?b(e,t.points,!0,!1,!0,!1):r(t)?p(e,t,!0,!1,!0,!1):(a(t)&&(e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.x,e[4]=t.y,e[5]=t.z),e)}function h(e,t,n,r){const i=n?3:2
if(!t.length||!t[0].length)return null
let a,o,s,l,[d,f]=t[0][0],[h,p]=t[0][0]
for(let e=0;e<t.length;e++){const b=t[e]
for(let e=0;e<b.length;e++){const t=b[e],[m,y]=t
if(d=c(d,m),f=c(f,y),h=u(h,m),p=u(p,y),n&&t.length>2){const e=t[2]
a=c(a,e),o=u(o,e)}if(r&&t.length>i){const e=t[i]
s=c(a,e),l=u(o,e)}}}return n?r?(e[0]=d,e[1]=f,e[2]=a,e[3]=s,e[4]=h,e[5]=p,e[6]=o,e[7]=l,e.length=8,e):(e[0]=d,e[1]=f,e[2]=a,e[3]=h,e[4]=p,e[5]=o,e.length=6,e):r?(e[0]=d,e[1]=f,e[2]=s,e[3]=h,e[4]=p,e[5]=l,e.length=6,e):(e[0]=d,e[1]=f,e[2]=h,e[3]=p,e.length=4,e)}function p(e,t,n,r,i,a){const o=t.xmin,s=t.xmax,l=t.ymin,c=t.ymax
let u=t.zmin,d=t.zmax,f=t.mmin,h=t.mmax
return i?(u=u||0,d=d||0,a?(f=f||0,h=h||0,e[0]=o,e[1]=l,e[2]=u,e[3]=f,e[4]=s,e[5]=c,e[6]=d,e[7]=h,e):(e[0]=o,e[1]=l,e[2]=u,e[3]=s,e[4]=c,e[5]=d,e)):a?(f=f||0,h=h||0,e[0]=o,e[1]=l,e[2]=f,e[3]=s,e[4]=c,e[5]=h,e):(e[0]=o,e[1]=l,e[2]=s,e[3]=c,e)}function b(e,t,n,r,i,a){const o=n?3:2,s=r&&a,l=n&&i
if(!t.length||!t[0].length)return null
let d,f,h,p,[b,m]=t[0],[y,g]=t[0]
for(let e=0;e<t.length;e++){const n=t[e],[r,i]=n
if(b=c(b,r),m=c(m,i),y=u(y,r),g=u(g,i),l&&n.length>2){const e=n[2]
d=c(d,e),f=u(f,e)}if(s&&n.length>o){const e=n[o]
h=c(d,e),p=u(f,e)}}return i?(d=d||0,f=f||0,a?(h=h||0,p=p||0,e[0]=b,e[1]=m,e[2]=d,e[3]=h,e[4]=y,e[5]=g,e[6]=f,e[7]=p,e):(e[0]=b,e[1]=m,e[2]=d,e[3]=y,e[4]=g,e[5]=f,e)):a?(h=h||0,p=p||0,e[0]=b,e[1]=m,e[2]=h,e[3]=y,e[4]=g,e[5]=p,e):(e[0]=b,e[1]=m,e[2]=y,e[3]=g,e)}},1081:function(e,t,n){"use strict"
n.d(t,"a",(function(){return L}))
var r,i=n(968),a=n(995),o=n(976),s=n(234),l=n(233),c=n(23),u=n(970),d=n(987),f=n(979),h=n(977),p=n(969),b=n(974),m=n(971),y=n(989),g=n(1001),v=n(1032),O=n(1258),w=n(1020),j=n(1086),_=n(1010)
const S="percent-of-total",E="field",x=new o.a({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:S,esriNormalizeByField:E}),I=Object(m.m)(O.a)
let C=r=class extends(Object(v.a)(g.a)){constructor(e){super(e),this._compiledValueExpression={valueExpression:null,compiledFunction:null},this.backgroundFillSymbol=null,this.classBreakInfos=null,this.defaultLabel=null,this.defaultSymbol=null,this.field=null,this.isMaxInclusive=!0,this.legendOptions=null,this.normalizationField=null,this.normalizationTotal=null,this.type="class-breaks",this.valueExpression=null,this.valueExpressionTitle=null,this._set("classBreakInfos",[])}readClassBreakInfos(e,t,n){if(!Array.isArray(e))return
let r=t.minValue
return e.map(e=>{const t=new O.a
return t.read(e,n),null==t.minValue&&(t.minValue=r),null==t.maxValue&&(t.maxValue=t.minValue),r=t.maxValue,t})}writeClassBreakInfos(e,t,n,r){const i=e.map(e=>e.write({},r))
this._areClassBreaksConsecutive()&&i.forEach(e=>delete e.classMinValue),t[n]=i}castField(e){return null==e?e:"function"==typeof e?(l.a.getLogger(this.declaredClass).error(".field: field must be a string value"),null):Object(m.l)(e)}get minValue(){return this.classBreakInfos&&this.classBreakInfos[0]&&this.classBreakInfos[0].minValue||0}get normalizationType(){let e=this._get("normalizationType")
const t=!!this.normalizationField,n=null!=this.normalizationTotal
return t||n?(e=(t?E:n&&S)||null,t&&n&&l.a.getLogger(this.declaredClass).warn("warning: both normalizationField and normalizationTotal are set!")):e!==E&&e!==S||(e=null),e}set normalizationType(e){this._set("normalizationType",e)}addClassBreakInfo(e,t,n){let r=null
r="number"==typeof e?new O.a({minValue:e,maxValue:t,symbol:Object(a.a)(n)}):I(Object(s.a)(e)),this.classBreakInfos.push(r),1===this.classBreakInfos.length&&this.notifyChange("minValue")}removeClassBreakInfo(e,t){const n=this.classBreakInfos.length
for(let r=0;r<n;r++){const n=[this.classBreakInfos[r].minValue,this.classBreakInfos[r].maxValue]
if(n[0]===e&&n[1]===t){this.classBreakInfos.splice(r,1)
break}}}getBreakIndex(e,t){return this.valueExpression&&(Object(c.k)(t)||Object(c.k)(t.arcade))&&l.a.getLogger(this.declaredClass).warn(""),this.valueExpression?this._getBreakIndexForExpression(e,t):this._getBreakIndexForField(e)}async getClassBreakInfo(e,t){let n=t
this.valueExpression&&(Object(c.k)(t)||Object(c.k)(t.arcade))&&(n={...n,arcade:await Object(_.e)()})
const r=this.getBreakIndex(e,n)
return-1!==r?this.classBreakInfos[r]:null}getSymbol(e,t){if(this.valueExpression&&(Object(c.k)(t)||Object(c.k)(t.arcade)))return void l.a.getLogger(this.declaredClass).error("#getSymbol()","Please use getSymbolAsync if valueExpression is used")
const n=this.getBreakIndex(e,t)
return n>-1?this.classBreakInfos[n].symbol:this.defaultSymbol}async getSymbolAsync(e,t){let n=t
if(this.valueExpression&&(Object(c.k)(t)||Object(c.k)(t.arcade))){const e=await Object(_.e)(),{arcadeUtils:t}=e
t.hasGeometryOperations(this.valueExpression)&&await t.enableGeometryOperations(),n={...n,arcade:e}}const r=this.getBreakIndex(e,n)
return r>-1?this.classBreakInfos[r].symbol:this.defaultSymbol}getSymbols(){const e=[]
return this.classBreakInfos.forEach(t=>{t.symbol&&e.push(t.symbol)}),this.defaultSymbol&&e.push(this.defaultSymbol),e}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce((e,t)=>e+t.getAttributeHash(),"")}getMeshHash(){const e=JSON.stringify(this.backgroundFillSymbol),t=JSON.stringify(this.defaultSymbol),n=`${this.normalizationField}.${this.normalizationType}.${this.normalizationTotal}`
return`${e}.${t}.${this.classBreakInfos.reduce((e,t)=>e+t.getMeshHash(),"")}.${n}.${this.field}.${this.valueExpression}`}get arcadeRequired(){return this.arcadeRequiredForVisualVariables||!!this.valueExpression}clone(){return new r({field:this.field,backgroundFillSymbol:this.backgroundFillSymbol&&this.backgroundFillSymbol.clone(),defaultLabel:this.defaultLabel,defaultSymbol:this.defaultSymbol&&this.defaultSymbol.clone(),valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,classBreakInfos:Object(s.a)(this.classBreakInfos),isMaxInclusive:this.isMaxInclusive,normalizationField:this.normalizationField,normalizationTotal:this.normalizationTotal,normalizationType:this.normalizationType,visualVariables:Object(s.a)(this.visualVariables),legendOptions:Object(s.a)(this.legendOptions),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}async collectRequiredFields(e,t){const n=[this.collectVVRequiredFields(e,t),this.collectSymbolFields(e,t)]
await Promise.all(n)}async collectSymbolFields(e,t){const n=[...this.getSymbols().map(n=>n.collectRequiredFields(e,t)),Object(y.a)(e,t,this.valueExpression)]
Object(y.d)(e,t,this.field),Object(y.d)(e,t,this.normalizationField),await Promise.all(n)}_getBreakIndexForExpression(e,t){const{viewingMode:n,scale:r,spatialReference:i,arcade:a}=Object(c.v)(t,{}),{valueExpression:o}=this
let s=this._compiledValueExpression.valueExpression===o?this._compiledValueExpression.compiledFunction:null
const l=Object(c.u)(a).arcadeUtils
if(!s){const e=l.createSyntaxTree(o)
s=l.createFunction(e),this._compiledValueExpression.compiledFunction=s}this._compiledValueExpression.valueExpression=o
const u=l.executeFunction(s,l.createExecContext(e,l.getViewInfo({viewingMode:n,scale:r,spatialReference:i})))
return this._getBreakIndexfromInfos(u)}_getBreakIndexForField(e){const t=this.field,n=e.attributes,r=this.normalizationType
let i=parseFloat(n[t])
if(r){const e=this.normalizationTotal,t=parseFloat(this.normalizationField?n[this.normalizationField]:void 0)
if("log"===r)i=Math.log(i)*Math.LOG10E
else if(r!==S||null==e||isNaN(e)){if(r===E&&!isNaN(t)){if(isNaN(i)||isNaN(t))return-1
i/=t}}else i=i/e*100}return this._getBreakIndexfromInfos(i)}_getBreakIndexfromInfos(e){const t=this.isMaxInclusive
if(null!=e&&"number"==typeof e&&!isNaN(e))for(let n=0;n<this.classBreakInfos.length;n++){const r=[this.classBreakInfos[n].minValue,this.classBreakInfos[n].maxValue]
if(r[0]<=e&&(t?e<=r[1]:e<r[1]))return n}return-1}_areClassBreaksConsecutive(){const e=this.classBreakInfos,t=e.length
for(let n=1;n<t;n++)if(e[n-1].maxValue!==e[n].minValue)return!1
return!0}}
Object(i.a)([Object(u.b)(w.a)],C.prototype,"backgroundFillSymbol",void 0),Object(i.a)([Object(u.b)({type:[O.a]})],C.prototype,"classBreakInfos",void 0),Object(i.a)([Object(h.a)("classBreakInfos")],C.prototype,"readClassBreakInfos",null),Object(i.a)([Object(b.a)("classBreakInfos")],C.prototype,"writeClassBreakInfos",null),Object(i.a)([Object(u.b)({type:String,json:{write:!0}})],C.prototype,"defaultLabel",void 0),Object(i.a)([Object(u.b)(w.b)],C.prototype,"defaultSymbol",void 0),Object(i.a)([Object(u.b)({type:String,json:{write:!0}})],C.prototype,"field",void 0),Object(i.a)([Object(d.a)("field")],C.prototype,"castField",null),Object(i.a)([Object(u.b)({type:Boolean})],C.prototype,"isMaxInclusive",void 0),Object(i.a)([Object(u.b)({type:j.a,json:{write:!0}})],C.prototype,"legendOptions",void 0),Object(i.a)([Object(u.b)({type:Number,readOnly:!0,value:null,json:{read:!1,write:{overridePolicy(){return 0!==this.classBreakInfos.length&&this._areClassBreaksConsecutive()?{enabled:!0}:{enabled:!1}}}}})],C.prototype,"minValue",null),Object(i.a)([Object(u.b)({type:String,json:{write:!0}})],C.prototype,"normalizationField",void 0),Object(i.a)([Object(u.b)({type:Number,cast:e=>Object(m.i)(e),json:{write:!0}})],C.prototype,"normalizationTotal",void 0),Object(i.a)([Object(u.b)({type:x.apiValues,value:null,json:{type:x.jsonValues,read:x.read,write:x.write}})],C.prototype,"normalizationType",null),Object(i.a)([Object(f.a)({classBreaks:"class-breaks"})],C.prototype,"type",void 0),Object(i.a)([Object(u.b)({type:String,json:{write:!0}})],C.prototype,"valueExpression",void 0),Object(i.a)([Object(u.b)({type:String,json:{write:!0}})],C.prototype,"valueExpressionTitle",void 0),C=r=Object(i.a)([Object(p.a)("esri.renderers.ClassBreaksRenderer")],C)
const L=C},1082:function(e,t,n){"use strict"
function r(e){return(t,n)=>{t[n]=e}}n.d(t,"a",(function(){return r}))},1083:function(e,t,n){"use strict"
n(1039),n(1038),n(1115),n(1005)
var r=n(1027),i=n(771),a=n(446),o=n(23)
async function s(e){if(Object(o.l)(l.fetchBundleAsset))return l.fetchBundleAsset(e)
const t=await Object(i.default)(e,{responseType:"text"})
return JSON.parse(t.data)}const l={}
var c,u=n(1019)
Object(r.c)((c={pattern:"esri/",location:u.b},new class{constructor({base:e="",pattern:t,location:n=new URL(window.location.href)}){let r
r="string"==typeof n?e=>new URL(e,new URL(n,window.location.href)).href:n instanceof URL?e=>new URL(e,n).href:n,this.pattern="string"==typeof t?new RegExp("^"+t):t,this.getAssetUrl=r,e=e?e.endsWith("/")?e:e+"/":"",this.matcher=new RegExp(`^${e}(?:(.*)/)?(.*)$`)}fetchMessageBundle(e,t){return async function(e,t,n,i){const o=t.exec(n)
if(!o)throw new a.a("esri-intl:invalid-bundle",`Bundle id "${n}" is not compatible with the pattern "${t}"`)
const l=o[1]?o[1]+"/":"",c=o[2],u=Object(r.b)(i),d=`${l}${c}.json`,f=u?`${l}${c}_${u}.json`:d
let h
try{h=await s(e(f))}catch(t){if(f===d)throw new a.a("intl:unknown-bundle",`Bundle "${n}" cannot be loaded`,{error:t})
try{h=await s(e(d))}catch(e){throw new a.a("intl:unknown-bundle",`Bundle "${n}" cannot be loaded`,{error:e})}}return h}(this.getAssetUrl,this.matcher,e,t)}}(c)))},1084:function(e,t,n){"use strict"
n.d(t,"a",(function(){return B}))
var r=n(968),i=n(995),a=n(446),o=n(234),s=n(233),l=n(23),c=n(146),u=n(978),d=n(970),f=n(987),h=n(979),p=n(977),b=n(969),m=n(974),y=n(1143),g=n(971),v=n(989),O=n(1028),w=n(1001),j=n(1032),_=n(1020),S=n(1086),E=n(986),x=n(972)
n(445)
let I=class extends(Object(E.b)(x.a)){constructor(e){super(e),this.value=null,this.value2=null,this.value3=null}}
Object(r.a)([Object(d.b)(_.c)],I.prototype,"value",void 0),Object(r.a)([Object(d.b)(_.c)],I.prototype,"value2",void 0),Object(r.a)([Object(d.b)(_.c)],I.prototype,"value3",void 0),I=Object(r.a)([Object(b.a)("esri.renderers.support.UniqueValue")],I)
const C=I
let L=class extends(Object(E.b)(x.a)){constructor(e){super(e),this.description=null,this.label=null,this.symbol=null,this.values=null}castValues(e){if(null==e)return null
const t=typeof(e=Array.isArray(e)?e:[e])[0]
return"string"===t||"number"===t?e.map(e=>new C({value:e})):"object"===t?e[0]instanceof C?e:e.map(e=>new C(e)):null}}
Object(r.a)([Object(d.b)({type:String,json:{write:!0}})],L.prototype,"description",void 0),Object(r.a)([Object(d.b)({type:String,json:{write:!0}})],L.prototype,"label",void 0),Object(r.a)([Object(d.b)(_.b)],L.prototype,"symbol",void 0),Object(r.a)([Object(d.b)({type:[C],json:{type:[[String]],read:{reader:e=>e?e.map(e=>new C({value:e[0],value2:e[1],value3:e[2]})):null},write:{writer:(e,t)=>{const n=[]
for(const t of e){const e=[t.value,t.value2,t.value3].filter(l.l).map(e=>e.toString())
n.push(e)}t.values=n}}}})],L.prototype,"values",void 0),Object(r.a)([Object(f.a)("values")],L.prototype,"castValues",null),L=Object(r.a)([Object(b.a)("esri.renderers.support.UniqueValueClass")],L)
const M=L
let A=class extends(Object(E.b)(x.a)){constructor(e){super(e),this.heading=null,this.classes=null}}
Object(r.a)([Object(d.b)({type:String,json:{write:!0}})],A.prototype,"heading",void 0),Object(r.a)([Object(d.b)({type:[M],json:{write:!0}})],A.prototype,"classes",void 0),A=Object(r.a)([Object(b.a)("esri.renderers.support.UniqueValueGroup")],A)
const T=A
var R,k=n(1264),P=n(1010),N=n(1054),D=n(1181),V=n(1145)
const F="esri.renderers.UniqueValueRenderer",z=s.a.getLogger(F),U="uvInfos-watcher",$="uvGroups-watcher",G=Object(g.m)(k.a)
let q=R=class extends(Object(j.a)(w.a)){constructor(e){super(e),this._valueInfoMap={},this._isDefaultSymbolDerived=!1,this._isInfosSource=null,this.type="unique-value",this.backgroundFillSymbol=null,this.orderByClassesEnabled=!1,this.valueExpressionTitle=null,this.legendOptions=null,this.defaultLabel=null,this.portal=null,this.styleOrigin=null,this.diff={uniqueValueInfos(e,t){if(!e&&!t)return
if(!e||!t)return{type:"complete",oldValue:e,newValue:t}
let n=!1
const r={type:"collection",added:[],removed:[],changed:[],unchanged:[]}
for(let i=0;i<t.length;i++){const a=e.find(e=>e.value===t[i].value)
a?Object(y.a)(a,t[i])?(r.changed.push({type:"complete",oldValue:a,newValue:t[i]}),n=!0):r.unchanged.push({oldValue:a,newValue:t[i]}):(r.added.push(t[i]),n=!0)}for(let i=0;i<e.length;i++)t.find(t=>t.value===e[i].value)||(r.removed.push(e[i]),n=!0)
return n?r:void 0}},this._set("uniqueValueInfos",[]),this._set("uniqueValueGroups",[])}get _cache(){return{compiledFunc:null}}set field(e){this._set("field",e),this._updateFieldDelimiter(),this._updateUniqueValues()}castField(e){return null==e||"function"==typeof e?e:Object(g.l)(e)}writeField(e,t,n,r){"string"==typeof e?t[n]=e:r&&r.messages?r.messages.push(new a.a("property:unsupported","UniqueValueRenderer.field set to a function cannot be written to JSON")):z.error(".field: cannot write field to JSON since it's not a string value")}set field2(e){this._set("field2",e),this._updateFieldDelimiter(),this._updateUniqueValues()}set field3(e){this._set("field3",e),this._updateUniqueValues()}set valueExpression(e){this._set("valueExpression",e),this._updateUniqueValues()}set defaultSymbol(e){this._isDefaultSymbolDerived=!1,this._set("defaultSymbol",e)}set fieldDelimiter(e){this._set("fieldDelimiter",e),this._updateUniqueValues()}readPortal(e,t,n){return n.portal||O.a.getDefault()}readStyleOrigin(e,t,n){if(t.styleName)return Object.freeze({styleName:t.styleName})
if(t.styleUrl){const e=Object(N.d)(t.styleUrl,n)
return Object.freeze({styleUrl:e})}}writeStyleOrigin(e,t,n,r){e.styleName?t.styleName=e.styleName:e.styleUrl&&(t.styleUrl=Object(N.h)(e.styleUrl,r))}set uniqueValueGroups(e){this.styleOrigin?z.error("#uniqueValueGroups=","Cannot modify unique value groups of a UniqueValueRenderer created from a web style"):(this._set("uniqueValueGroups",e),this._updateInfosFromGroups(),this._isInfosSource=!1,this._watchUniqueValueGroups())}set uniqueValueInfos(e){this.styleOrigin?z.error("#uniqueValueInfos=","Cannot modify unique value infos of a UniqueValueRenderer created from a web style"):(this._set("uniqueValueInfos",e),this._updateValueInfoMap(),this._updateGroupsFromInfos(),this._isInfosSource=!0,this._watchUniqueValueInfos())}addUniqueValueInfo(e,t){var n
if(this.styleOrigin)return void z.error("#addUniqueValueInfo()","Cannot modify unique value infos of a UniqueValueRenderer created from a web style")
let r
r="object"==typeof e?G(e):new k.a({value:e,symbol:Object(i.a)(t)}),null!=(n=this.uniqueValueInfos)&&n.push(r),this._valueInfoMap[r.value]=r,this._updateGroupsFromInfos(),this._isInfosSource=!0,this._watchUniqueValueInfos()}removeUniqueValueInfo(e){if(this.styleOrigin)return void z.error("#removeUniqueValueInfo()","Cannot modify unique value infos of a UniqueValueRenderer created from a web style")
const t=this.uniqueValueInfos
if(t)for(let n=0;n<t.length;n++)if(t[n].value===e+""){delete this._valueInfoMap[e],t.splice(n,1)
break}this._updateGroupsFromInfos(),this._isInfosSource=!0,this._watchUniqueValueInfos()}async getUniqueValueInfo(e,t){let n=t
return this.valueExpression&&(Object(l.k)(t)||Object(l.k)(t.arcade))&&(n={...n,arcade:await Object(P.e)()}),this._getUniqueValueInfo(e,n)}getSymbol(e,t){if(this.valueExpression&&(Object(l.k)(t)||Object(l.k)(t.arcade)))return void z.error("#getSymbol()","Please use getSymbolAsync if valueExpression is used")
const n=this._getUniqueValueInfo(e,t)
return n&&n.symbol||this.defaultSymbol}async getSymbolAsync(e,t){let n=t
if(this.valueExpression&&(Object(l.k)(n)||Object(l.k)(n.arcade))){const e=await Object(P.e)(),{arcadeUtils:t}=e
t.hasGeometryOperations(this.valueExpression)&&await t.enableGeometryOperations(),n={...n,arcade:e}}const r=this._getUniqueValueInfo(e,n)
return r&&r.symbol||this.defaultSymbol}getSymbols(){const e=[]
for(const n of null!=(t=this.uniqueValueInfos)?t:[]){var t
n.symbol&&e.push(n.symbol)}return this.defaultSymbol&&e.push(this.defaultSymbol),e}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce((e,t)=>e+t.getAttributeHash(),"")}getMeshHash(){var e
const t=JSON.stringify(this.backgroundFillSymbol),n=JSON.stringify(this.defaultSymbol),r=null==(e=this.uniqueValueInfos)?void 0:e.reduce((e,t)=>e+t.getMeshHash(),"")
return`${t}.${n}.${r}.${this.field}.${this.field2}.${this.field3}.${this.fieldDelimiter}.${this.valueExpression}`}clone(){const e=new R({field:this.field,field2:this.field2,field3:this.field3,defaultLabel:this.defaultLabel,defaultSymbol:Object(o.a)(this.defaultSymbol),orderByClassesEnabled:this.orderByClassesEnabled,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,fieldDelimiter:this.fieldDelimiter,visualVariables:Object(o.a)(this.visualVariables),legendOptions:Object(o.a)(this.legendOptions),authoringInfo:this.authoringInfo&&this.authoringInfo.clone(),backgroundFillSymbol:Object(o.a)(this.backgroundFillSymbol)})
this._isDefaultSymbolDerived&&(e._isDefaultSymbolDerived=!0),e._set("portal",this.portal)
const t=Object(o.a)(this.uniqueValueInfos),n=Object(o.a)(this.uniqueValueGroups)
return this.styleOrigin&&(e._set("styleOrigin",Object.freeze(Object(o.a)(this.styleOrigin))),Object.freeze(t),Object.freeze(n)),e._set("uniqueValueInfos",t),e._updateValueInfoMap(),e._set("uniqueValueGroups",n),e._isInfosSource=this._isInfosSource,e._watchUniqueValueInfosAndGroups(),e}get arcadeRequired(){return this.arcadeRequiredForVisualVariables||!!this.valueExpression}async collectRequiredFields(e,t){const n=[this.collectVVRequiredFields(e,t),this.collectSymbolFields(e,t)]
await Promise.all(n)}async collectSymbolFields(e,t){const n=[...this.getSymbols().map(n=>n.collectRequiredFields(e,t)),Object(v.a)(e,t,this.valueExpression)]
Object(v.d)(e,t,this.field),Object(v.d)(e,t,this.field2),Object(v.d)(e,t,this.field3),await Promise.all(n)}populateFromStyle(){return Object(D.b)(this.styleOrigin,{portal:this.portal}).then(e=>{var t
const n=[]
return this._valueInfoMap={},e&&e.data&&Array.isArray(e.data.items)&&e.data.items.forEach(t=>{const r=new V.a({styleUrl:e.styleUrl,styleName:e.styleName,portal:this.portal,name:t.name})
this.defaultSymbol||t.name!==e.data.defaultItem||(this.defaultSymbol=r,this._isDefaultSymbolDerived=!0)
const i=new k.a({value:t.name,symbol:r})
n.push(i),this._valueInfoMap[t.name]=i}),this._set("uniqueValueInfos",Object.freeze(n)),this._updateGroupsFromInfos(!0),this._isInfosSource=null,this._watchUniqueValueInfos(),!this.defaultSymbol&&null!=(t=this.uniqueValueInfos)&&t.length&&(this.defaultSymbol=this.uniqueValueInfos[0].symbol,this._isDefaultSymbolDerived=!0),this})}_updateFieldDelimiter(){this.field&&this.field2&&!this.fieldDelimiter&&this._set("fieldDelimiter",",")}_updateUniqueValues(){null!=this._isInfosSource&&(this._isInfosSource?this._updateGroupsFromInfos():this._updateInfosFromGroups())}_updateValueInfoMap(){this._valueInfoMap={}
const{uniqueValueInfos:e}=this
if(e)for(const t of e)this._valueInfoMap[t.value+""]=t}_watchUniqueValueInfosAndGroups(){this._watchUniqueValueInfos(),this._watchUniqueValueGroups()}_watchUniqueValueInfos(){this.removeHandles(U)
const{uniqueValueInfos:e}=this
if(e){const t=[]
for(const n of e)t.push(Object(u.f)(()=>({symbol:n.symbol,value:n.value,label:n.label,description:n.description}),(e,t)=>{e!==t&&(this._updateGroupsFromInfos(),this._isInfosSource=!0)},{sync:!0}))
this.addHandles(t,U)}}_watchUniqueValueGroups(){this.removeHandles($)
const{uniqueValueGroups:e}=this
if(e){const n=[]
for(const r of e){n.push(Object(u.f)(()=>({classes:r.classes}),(e,t)=>{e!==t&&(this._updateInfosFromGroups(),this._isInfosSource=!1)},{sync:!0}))
for(const e of null!=(t=r.classes)?t:[]){var t
n.push(Object(u.f)(()=>({symbol:e.symbol,values:e.values,label:e.label,description:e.description}),(e,t)=>{e!==t&&(this._updateInfosFromGroups(),this._isInfosSource=!1)},{sync:!0}))}}this.addHandles(n,$)}}_updateInfosFromGroups(){if(!this.uniqueValueGroups)return this._set("uniqueValueInfos",null),this._updateValueInfoMap(),void this._watchUniqueValueInfos()
const e=[],{field:t,field2:n,field3:r,fieldDelimiter:i,uniqueValueGroups:a,valueExpression:o}=this
if(!t&&!o)return this._set("uniqueValueInfos",e),this._updateValueInfoMap(),void this._watchUniqueValueInfos()
const s=!(!t||!n)
for(const t of a)for(const a of null!=(l=t.classes)?l:[]){var l
const{symbol:t,label:o,values:c,description:u}=a
for(const a of null!=c?c:[]){const{value:l,value2:c,value3:d}=a,f=[l]
n&&f.push(c),r&&f.push(d)
const h=s?f.join(i||""):f[0]
e.push(new k.a({symbol:t,label:o,value:h,description:u}))}}this._set("uniqueValueInfos",e),this._updateValueInfoMap(),this._watchUniqueValueInfos()}_updateGroupsFromInfos(e=!1){if(!this.uniqueValueInfos)return this._set("uniqueValueGroups",null),void this._watchUniqueValueGroups()
const{field:t,field2:n,valueExpression:r,fieldDelimiter:i,uniqueValueInfos:a}=this
if(!t&&!r||!a.length)return this._set("uniqueValueGroups",[]),void this._watchUniqueValueGroups()
const o=!(!t||!n),s=a.map(e=>{var t
const{symbol:n,label:r,value:a,description:s}=e,[l,c,u]=o?(null==a||null==(t=a.toString())?void 0:t.split(i||""))||[]:[a]
return new M({symbol:n,label:r,description:s,values:[new C({value:l,value2:c,value3:u})]})}),l=[new T({classes:s})]
e&&Object.freeze(l),this._set("uniqueValueGroups",l),this._watchUniqueValueGroups()}_getUniqueValueInfo(e,t){return this.valueExpression?this._getUnqiueValueInfoForExpression(e,t):this._getUnqiueValueInfoForFields(e)}_getUnqiueValueInfoForExpression(e,t){const{viewingMode:n,scale:r,spatialReference:i,arcade:a}=Object(l.v)(t,{})
let o=this._cache.compiledFunc
const s=Object(l.u)(a).arcadeUtils
if(!o){const e=s.createSyntaxTree(this.valueExpression)
o=s.createFunction(e),this._cache.compiledFunc=o}const c=s.executeFunction(o,s.createExecContext(e,s.getViewInfo({viewingMode:n,scale:r,spatialReference:i})))
return this._valueInfoMap[c+""]}_getUnqiueValueInfoForFields(e){const t=this.field,n=e.attributes
let r
if("function"!=typeof t&&this.field2){const e=this.field2,i=this.field3,a=[]
t&&a.push(n[t]),e&&a.push(n[e]),i&&a.push(n[i]),r=a.join(this.fieldDelimiter||"")}else"function"==typeof t?r=t(e):t&&(r=n[t])
return this._valueInfoMap[r+""]}static fromPortalStyle(e,t){const n=new R(t&&t.properties)
n._set("styleOrigin",Object.freeze({styleName:e})),n._set("portal",t&&t.portal||O.a.getDefault())
const r=n.populateFromStyle()
return r.catch(t=>{z.error(`#fromPortalStyle('${e}'[, ...])`,"Failed to create unique value renderer from style name",t)}),r}static fromStyleUrl(e,t){const n=new R(t&&t.properties)
n._set("styleOrigin",Object.freeze({styleUrl:e}))
const r=n.populateFromStyle()
return r.catch(t=>{z.error(`#fromStyleUrl('${e}'[, ...])`,"Failed to create unique value renderer from style URL",t)}),r}}
Object(r.a)([Object(d.b)({readOnly:!0})],q.prototype,"_cache",null),Object(r.a)([Object(h.a)({uniqueValue:"unique-value"})],q.prototype,"type",void 0),Object(r.a)([Object(d.b)(_.a)],q.prototype,"backgroundFillSymbol",void 0),Object(r.a)([Object(d.b)({value:null,json:{type:String,read:{source:"field1"},write:{target:"field1"}}})],q.prototype,"field",null),Object(r.a)([Object(f.a)("field")],q.prototype,"castField",null),Object(r.a)([Object(m.a)("field")],q.prototype,"writeField",null),Object(r.a)([Object(d.b)({type:String,value:null,json:{write:!0}})],q.prototype,"field2",null),Object(r.a)([Object(d.b)({type:String,value:null,json:{write:!0}})],q.prototype,"field3",null),Object(r.a)([Object(d.b)({type:Boolean,json:{name:"drawInClassOrder",default:!1,write:!0,origins:{"web-scene":{write:!1}}}})],q.prototype,"orderByClassesEnabled",void 0),Object(r.a)([Object(d.b)({type:String,value:null,json:{write:!0}})],q.prototype,"valueExpression",null),Object(r.a)([Object(d.b)({type:String,json:{write:!0}})],q.prototype,"valueExpressionTitle",void 0),Object(r.a)([Object(d.b)({type:S.a,json:{write:!0}})],q.prototype,"legendOptions",void 0),Object(r.a)([Object(d.b)({type:String,json:{write:!0}})],q.prototype,"defaultLabel",void 0),Object(r.a)([Object(d.b)(Object(c.a)({..._.b},{json:{write:{overridePolicy(){return{enabled:!this._isDefaultSymbolDerived}}},origins:{"web-scene":{write:{overridePolicy(){return{enabled:!this._isDefaultSymbolDerived}}}}}}}))],q.prototype,"defaultSymbol",null),Object(r.a)([Object(d.b)({type:String,value:null,json:{write:!0}})],q.prototype,"fieldDelimiter",null),Object(r.a)([Object(d.b)({type:O.a,readOnly:!0})],q.prototype,"portal",void 0),Object(r.a)([Object(p.a)("portal",["styleName"])],q.prototype,"readPortal",null),Object(r.a)([Object(d.b)({readOnly:!0,json:{write:{enabled:!1,overridePolicy:()=>({enabled:!0})}}})],q.prototype,"styleOrigin",void 0),Object(r.a)([Object(p.a)("styleOrigin",["styleName","styleUrl"])],q.prototype,"readStyleOrigin",null),Object(r.a)([Object(m.a)("styleOrigin",{styleName:{type:String},styleUrl:{type:String}})],q.prototype,"writeStyleOrigin",null),Object(r.a)([Object(d.b)({type:[T],json:{read:{source:["uniqueValueGroups","uniqueValueInfos"],reader:(e,t,n)=>(t.uniqueValueGroups||function(e){const{field1:t,field2:n,field3:r,fieldDelimiter:i,uniqueValueInfos:a,valueExpression:o}=e,s=!(!t||!n)
return[{classes:(null!=a?a:[]).map(e=>{var a
const{symbol:l,label:c,value:u,description:d}=e,[f,h,p]=s?(null==u||null==(a=u.toString())?void 0:a.split(i||""))||[]:[u],b=[]
return(t||o)&&b.push(f),n&&b.push(h),r&&b.push(p),{symbol:l,label:c,values:[b],description:d}})}]}(t)).map(e=>T.fromJSON(e,n))},write:{overridePolicy(){return this.styleOrigin?{enabled:!1}:{enabled:!0}}}}})],q.prototype,"uniqueValueGroups",null),Object(r.a)([Object(d.b)({type:[k.a],json:{read:!1,write:{overridePolicy(){return this.styleOrigin?{enabled:!1}:{enabled:!0}}}}})],q.prototype,"uniqueValueInfos",null),q=R=Object(r.a)([Object(b.a)(F)],q)
const B=q},1085:function(e,t,n){"use strict"
n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return a})),n.d(t,"f",(function(){return u})),n.d(t,"g",(function(){return d})),n.d(t,"h",(function(){return f}))
var r=n(23)
const i=[0,0]
function a(e,t){return!!Object(r.l)(t)&&u(e,t.x,t.y,t.z)}function o(e,t){if(!t.points||t.points.length)return!1
for(const n of t.points)if(!l(e,n))return!1
return!0}function s(e,t){const{xmin:n,ymin:r,zmin:i,xmax:a,ymax:o,zmax:s}=t
return e.hasZ&&t.hasZ?u(e,n,r,i)&&u(e,n,o,i)&&u(e,a,o,i)&&u(e,a,r,i)&&u(e,n,r,s)&&u(e,n,o,s)&&u(e,a,o,s)&&u(e,a,r,s):u(e,n,r)&&u(e,n,o)&&u(e,a,o)&&u(e,a,r)}function l(e,t){return u(e,t[0],t[1])}function c(e,t){return u(e,t[0],t[1],t[2])}function u(e,t,n,r){return t>=e.xmin&&t<=e.xmax&&n>=e.ymin&&n<=e.ymax&&(null==r||!e.hasZ||r>=e.zmin&&r<=e.zmax)}function d(e,t){return i[1]=t.y,i[0]=t.x,function(e,t){return f(e.rings,t)}(e,i)}function f(e,t){if(!e)return!1
if(function(e){return!Array.isArray(e[0][0])}(e))return h(!1,e,t)
let n=!1
for(let r=0,i=e.length;r<i;r++)n=h(n,e[r],t)
return n}function h(e,t,n){const[r,i]=n
let a=e,o=0
for(let e=0,n=t.length;e<n;e++){o++,o===n&&(o=0)
const[s,l]=t[e],[c,u]=t[o];(l<i&&u>=i||u<i&&l>=i)&&s+(i-l)/(u-l)*(c-s)<r&&(a=!a)}return a}},1086:function(e,t,n){"use strict"
n.d(t,"a",(function(){return l}))
var r,i=n(968),a=n(972),o=n(970),s=(n(971),n(445),n(969))
let l=r=class extends a.a{constructor(){super(...arguments),this.title=null}clone(){return new r({title:this.title})}}
Object(i.a)([Object(o.b)({type:String,json:{write:!0}})],l.prototype,"title",void 0),l=r=Object(i.a)([Object(s.a)("esri.renderers.support.LegendOptions")],l)},1087:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
var r=n(1165)
class i extends r.a{notify(){const e=this._observers
if(e&&e.length>0){const t=e.slice()
for(const e of t)e.onInvalidated(),e.onCommitted()}}}},1089:function(e,t,n){"use strict"
n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return d})),n.d(t,"f",(function(){return f}))
var r=n(23),i=n(1052),a=n(988)
function o(e){return{wkt:`GEOCCS["Spherical geocentric",\n    DATUM["Not specified",\n      SPHEROID["Sphere",${e.radius},0]],\n    PRIMEM["Greenwich",0.0,\n      AUTHORITY["EPSG","8901"]],\n    UNIT["m",1.0],\n    AXIS["Geocentric X",OTHER],\n    AXIS["Geocentric Y",EAST],\n    AXIS["Geocentric Z",NORTH]\n  ]`}}const s=o(i.a),l=o(i.b),c=o(i.c),u={wkt:`GEOCCS["WGS 84",\n  DATUM["WGS_1984",\n    SPHEROID["WGS 84",${i.a.radius},298.257223563,\n      AUTHORITY["EPSG","7030"]],\n    AUTHORITY["EPSG","6326"]],\n  PRIMEM["Greenwich",0,\n    AUTHORITY["EPSG","8901"]],\n  UNIT["m",1.0,\n    AUTHORITY["EPSG","9001"]],\n  AXIS["Geocentric X",OTHER],\n  AXIS["Geocentric Y",OTHER],\n  AXIS["Geocentric Z",NORTH],\n  AUTHORITY["EPSG","4978"]\n]`}
function d(e){return Object(r.l)(e)&&(Object(a.i)(e)||Object(a.d)(e,l))?i.b:Object(r.l)(e)&&(Object(a.j)(e)||Object(a.d)(e,c))?i.c:i.a}function f(e){return Object(a.n)(e)?i.b:Object(a.o)(e)?i.c:i.a}},1090:function(e,t,n){"use strict"
function r(e){}function i(e){return()=>e}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i})),n(235)},1091:function(e,t,n){"use strict"
n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}))
var r=n(1128),i=n(999),a=n(1176)
function o(e,t,n){if(!e||!e.read||!1===e.read.enabled||!e.read.source)return!1
const i=e.read.source
if("string"==typeof i){if(i===t)return!0
if(i.includes(".")&&0===i.indexOf(t)&&Object(r.a)(i,n))return!0}else for(const e of i){if(e===t)return!0
if(e.includes(".")&&0===e.indexOf(t)&&Object(r.a)(e,n))return!0}return!1}function s(e,t,n,r,i){let s=Object(a.b)(t[n],i);(function(e){return e&&(!e.read||!1!==e.read.enabled&&!e.read.source)})(s)&&(e[n]=!0)
for(const l of Object.getOwnPropertyNames(t))s=Object(a.b)(t[l],i),o(s,n,r)&&(e[l]=!0)}function l(e,t,n,r){const i=n.metadatas,o=Object(a.a)(i[t],"any",r),s=o&&o.default
if(void 0===s)return
const l="function"==typeof s?s.call(e,t,r):s
void 0!==l&&n.set(t,l)}const c={origin:"service"}
function u(e,t,n=c){if(!t||"object"!=typeof t)return
const o=Object(i.a)(e),u=o.metadatas,d={}
for(const e of Object.getOwnPropertyNames(t))s(d,u,e,t,n)
o.setDefaultOrigin(n.origin)
for(const i of Object.getOwnPropertyNames(d)){const s=Object(a.b)(u[i],n).read,l=s&&s.source
let c
c=l&&"string"==typeof l?Object(r.c)(t,l):t[i],s&&s.reader&&(c=s.reader.call(e,c,t,n)),void 0!==c&&o.set(i,c)}if(!n||!n.ignoreDefaults){o.setDefaultOrigin("defaults")
for(const t of Object.getOwnPropertyNames(u))d[t]||l(e,t,o,n)}o.setDefaultOrigin("user")}function d(e,t,n,r=c){var i
const a={...r,messages:[]}
n(a),null==(i=a.messages)||i.forEach(t=>{"warning"!==t.type||e.loaded?r&&r.messages&&r.messages.push(t):e.loadWarnings.push(t)})}},1092:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l}))
var r=n(1044),i=n(1045),a=n(1103)
function o(e,t){return l(e,null,t)}const s=Object(i.b)({types:a.a})
function l(e,t,n){return e?e&&(e.styleName||e.styleUrl)&&"uniqueValue"!==e.type?(n&&n.messages&&n.messages.push(new r.a("renderer:unsupported","Only UniqueValueRenderer can be referenced from a web style, but found '"+e.type+"'",{definition:e,context:n})),null):s(e,t,n):null}},1093:function(e,t,n){"use strict"
n.d(t,"a",(function(){return a}))
var r=n(997),i=n(1052)
const a={inches:Object(r.e)(1,"meters","inches"),feet:Object(r.e)(1,"meters","feet"),"us-feet":Object(r.e)(1,"meters","us-feet"),yards:Object(r.e)(1,"meters","yards"),miles:Object(r.e)(1,"meters","miles"),"nautical-miles":Object(r.e)(1,"meters","nautical-miles"),millimeters:Object(r.e)(1,"meters","millimeters"),centimeters:Object(r.e)(1,"meters","centimeters"),decimeters:Object(r.e)(1,"meters","decimeters"),meters:Object(r.e)(1,"meters","meters"),kilometers:Object(r.e)(1,"meters","kilometers"),"decimal-degrees":1/Object(r.m)(1,"meters",i.a.radius)}},1094:function(e,t,n){"use strict"
n.d(t,"a",(function(){return l}))
var r=n(968),i=n(972),a=n(970),o=(n(971),n(445),n(969))
let s=class extends i.a{constructor(e){super(e),this.type=null}}
Object(r.a)([Object(a.b)({readOnly:!0,json:{read:!1,write:!0}})],s.prototype,"type",void 0),s=Object(r.a)([Object(o.a)("esri.rest.support.ColorRamp")],s)
const l=s},1095:function(e,t,n){"use strict"
n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return l}))
var r=n(235)
const i=new Set
function a(e,t,n=!1){n&&i.has(t)||(n&&i.add(t),e.warn("🛑 DEPRECATED - "+t))}function o(e,t,n={}){Object(r.a)("esri-deprecation-warnings")&&c(e,"Module: "+t,n)}function s(e,t,n={}){if(Object(r.a)("esri-deprecation-warnings")){const{moduleName:r}=n
c(e,"Function: "+(r?r+"::":"")+t+"()",n)}}function l(e,t,n={}){if(Object(r.a)("esri-deprecation-warnings")){const{moduleName:r}=n
c(e,"Property: "+(r?r+"::":"")+t,n)}}function c(e,t,n={}){if(Object(r.a)("esri-deprecation-warnings")){const{replacement:r,version:i,see:o,warnOnce:s}=n
let l=t
r&&(l+="\n\t🛠️ Replacement: "+r),i&&(l+="\n\t⚙️ Version: "+i),o&&(l+=`\n\t🔗 See ${o} for more details.`),a(e,l,s)}}},1096:function(e,t,n){"use strict"
n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}))
var r=n(445),i=n(446),a=n(233),o=n(1006),s=n(999),l=n(1176)
function c(e,t,n,r,i){var a,o
const s={}
return null!=(a=t.write)&&null!=(o=a.writer)&&o.call(e,r,s,n,i),s}function u(e,t,n,s,l,c){if(!s||!s.write)return!1
const u=e.get(n)
if(!l&&s.write.overridePolicy){const t=s.write.overridePolicy.call(e,u,n,c)
void 0!==t&&(l=t)}if(l||(l=s.write),!l||!1===l.enabled)return!1
if((null===u&&!l.allowNull&&!l.writerEnsuresNonNull||void 0===u)&&l.isRequired){const t=new i.a("web-document-write:property-required",`Missing value for required property '${n}' on '${e.declaredClass}'`,{propertyName:n,target:e})
return t&&c&&c.messages?c.messages.push(t):t&&!c&&a.a.getLogger("esri.core.accessorSupport.write").error(t.name,t.message),!1}return!(void 0===u||null===u&&!l.allowNull&&!l.writerEnsuresNonNull||(!t.store.multipleOriginsSupported||t.store.originOf(n)===o.a.DEFAULTS)&&function(e,t,n,i,a){const o=i.default
if(void 0===o)return!1
if(null!=i.defaultEquals)return i.defaultEquals(a)
if("function"==typeof o){if(Array.isArray(a)){const i=o.call(e,t,n)
return Object(r.e)(i,a)}return!1}return o===a}(e,n,c,s,u)||!l.ignoreOrigin&&c&&c.origin&&t.store.multipleOriginsSupported&&t.store.originOf(n)<Object(o.e)(c.origin))}function d(e,t,n,r){const i=Object(s.a)(e),a=i.metadatas,o=Object(l.c)(a[t],r)
return!!o&&u(e,i,t,o,n,r)}function f(e,t,n){if(e&&"function"==typeof e.toJSON&&(!e.toJSON.isDefaultToJSON||!e.write))return Object(s.c)(t,e.toJSON(n))
const r=Object(s.a)(e),i=r.metadatas
for(const f in i){var a,d
const h=Object(l.c)(i[f],n)
if(!u(e,r,f,h,void 0,n))continue
const p=e.get(f),b=c(e,h,h.write&&"string"==typeof h.write.target?h.write.target:f,p,n)
Object.keys(b).length>0&&(t=Object(s.c)(t,b),null!=n&&null!=(a=n.resources)&&null!=(d=a.pendingOperations)&&d.length&&n.resources.pendingOperations.push(Promise.all(n.resources.pendingOperations).then(()=>Object(s.c)(t,b,()=>"replace-arrays"))),n&&n.writtenProperties&&n.writtenProperties.push({target:e,propName:f,oldOrigin:Object(o.d)(r.store.originOf(f)),newOrigin:n.origin}))}return t}},1097:function(e,t,n){"use strict"
n.d(t,"a",(function(){return h}))
var r,i=n(968),a=n(234),o=n(970),s=(n(971),n(979)),l=n(969),c=n(1001),u=n(1032),d=n(1020)
let f=r=class extends(Object(u.a)(c.a)){constructor(e){super(e),this.description=null,this.label=null,this.symbol=null,this.type="simple"}async collectRequiredFields(e,t){await Promise.all([this.collectSymbolFields(e,t),this.collectVVRequiredFields(e,t)])}async collectSymbolFields(e,t){await Promise.all(this.getSymbols().map(n=>n.collectRequiredFields(e,t)))}getSymbol(e,t){return this.symbol}async getSymbolAsync(e,t){return this.symbol}getSymbols(){return this.symbol?[this.symbol]:[]}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce((e,t)=>e+t.getAttributeHash(),"")}getMeshHash(){return this.getSymbols().reduce((e,t)=>e+JSON.stringify(t),"")}get arcadeRequired(){return this.arcadeRequiredForVisualVariables}clone(){return new r({description:this.description,label:this.label,symbol:this.symbol&&this.symbol.clone(),visualVariables:Object(a.a)(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}}
Object(i.a)([Object(o.b)({type:String,json:{write:!0}})],f.prototype,"description",void 0),Object(i.a)([Object(o.b)({type:String,json:{write:!0}})],f.prototype,"label",void 0),Object(i.a)([Object(o.b)(d.b)],f.prototype,"symbol",void 0),Object(i.a)([Object(s.a)({simple:"simple"})],f.prototype,"type",void 0),f=r=Object(i.a)([Object(l.a)("esri.renderers.SimpleRenderer")],f)
const h=f},1098:function(e,t,n){"use strict"
n.d(t,"a",(function(){return p}))
var r,i=n(968),a=n(234),o=n(970),s=(n(971),n(969)),l=n(974),c=n(989),u=n(1001),d=n(1032),f=n(1254)
let h=r=class extends(Object(d.a)(u.a)){constructor(e){super(e),this.config=null,this.fieldMap=null,this.scaleExpression=null,this.scaleExpressionTitle=null,this.url=null,this.type="dictionary"}get _loader(){return new f.DictionaryLoader(this.url,this.config,this.fieldMap)}writeData(e,t){e&&(t.scalingExpressionInfo={expression:e,returnType:"number"})}writeVisualVariables(e,t,n,r){(null==r?void 0:r.origin)||super.writeVisualVariables(e,t,n,r)}clone(){return new r({config:Object(a.a)(this.config),scaleExpression:this.scaleExpression,scaleExpressionTitle:this.scaleExpressionTitle,fieldMap:Object(a.a)(this.fieldMap),url:Object(a.a)(this.url),visualVariables:Object(a.a)(this.visualVariables)})}async getSymbolAsync(e,t){return this._loader.getSymbolAsync(e,t)}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t),this.scaleExpression&&await Object(c.a)(e,t,this.scaleExpression)
for(const n in this.fieldMap){const r=this.fieldMap[n]
t.has(r)&&e.add(r)}}get arcadeRequired(){return!0}getSymbol(){return null}getSymbols(){return[]}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce((e,t)=>e+t.getAttributeHash(),"")}getMeshHash(){return`${this.url}-${JSON.stringify(this.fieldMap)}`}getSymbolFields(){return this._loader.getSymbolFields()}}
Object(i.a)([Object(o.b)({type:f.DictionaryLoader})],h.prototype,"_loader",null),Object(i.a)([Object(o.b)({type:Object,json:{read:{source:"configuration"},write:{target:"configuration"}}})],h.prototype,"config",void 0),Object(i.a)([Object(o.b)({type:Object,json:{write:!0}})],h.prototype,"fieldMap",void 0),Object(i.a)([Object(o.b)({type:String,json:{read:{source:"scalingExpressionInfo.expression"},write:!0}})],h.prototype,"scaleExpression",void 0),Object(i.a)([Object(l.a)("scaleExpression")],h.prototype,"writeData",null),Object(i.a)([Object(o.b)({type:String,json:{read:{source:"scalingExpressionInfo.title"},write:{target:"scalingExpressionInfo.title",overridePolicy(e){return{enabled:!!e&&!!this.scaleExpression}}}}})],h.prototype,"scaleExpressionTitle",void 0),Object(i.a)([Object(o.b)({type:String,json:{write:!0}})],h.prototype,"url",void 0),Object(i.a)([Object(l.a)("visualVariables")],h.prototype,"writeVisualVariables",null),h=r=Object(i.a)([Object(s.a)("esri.renderers.DictionaryRenderer")],h)
const p=h},1099:function(e,t,n){"use strict"
function r(e){return(t,n)=>{t.hasOwnProperty("_messageBundleProps")||(t._messageBundleProps=t._messageBundleProps?t._messageBundleProps.slice():[]),t._messageBundleProps.push({bundlePath:e,propertyName:n})}}n.d(t,"a",(function(){return r}))},1100:function(e,t,n){"use strict"
n.d(t,"a",(function(){return j}))
var r=n(968),i=n(990),a=(n(995),n(986)),o=n(23),s=n(980),l=n(970),c=(n(971),n(445),n(979)),u=n(969),d=n(989),f=n(1001),h=n(1032),p=n(1180),b=n(972)
let m=class extends(Object(a.b)(b.a)){constructor(){super(...arguments),this.color=new i.a([0,0,0,0]),this.label=null,this.threshold=0}}
Object(r.a)([Object(l.b)({type:i.a,json:{write:!0}})],m.prototype,"color",void 0),Object(r.a)([Object(l.b)({type:String,json:{write:!0}})],m.prototype,"label",void 0),Object(r.a)([Object(l.b)({type:Number,range:{min:0,max:1},json:{write:!0}})],m.prototype,"threshold",void 0),m=Object(r.a)([Object(u.a)("esri.renderers.support.OthersCategory")],m)
let y=class extends(Object(a.b)(b.a)){constructor(){super(...arguments),this.title=null}}
Object(r.a)([Object(l.b)({type:String,json:{write:!0}})],y.prototype,"title",void 0),y=Object(r.a)([Object(u.a)("esri.renderers.support.PieChartLegendOptions")],y)
var g=n(1078),v=n(1073),O=n(1065)
let w=class extends(Object(h.a)(Object(a.b)(f.a))){constructor(e){super(e),this.attributes=null,this.backgroundFillSymbol=null,this.defaultColor=new i.a([0,0,0,0]),this.defaultLabel=null,this.holePercentage=0,this.othersCategory=new m,this.legendOptions=null,this.outline=null,this.size=12,this.type="pie-chart"}getSymbol(){var e
return new g.a({size:this.size?this.size/2+((null==(e=this.outline)?void 0:e.width)||0):0})}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol(),this.backgroundFillSymbol].filter(o.l)}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce((e,t)=>e+t.getAttributeHash(),"")}getMeshHash(){return this.getSymbols().reduce((e,t)=>e+JSON.stringify(t),"")}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t)
for(const n of this.attributes)n.valueExpression&&await Object(d.a)(e,t,n.valueExpression),n.field&&e.add(n.field)}}
Object(r.a)([Object(l.b)({type:[p.a],json:{write:!0}})],w.prototype,"attributes",void 0),Object(r.a)([Object(l.b)({type:v.a,json:{default:null,write:!0}})],w.prototype,"backgroundFillSymbol",void 0),Object(r.a)([Object(l.b)({type:i.a,json:{write:!0}})],w.prototype,"defaultColor",void 0),Object(r.a)([Object(l.b)({type:String,json:{write:!0}})],w.prototype,"defaultLabel",void 0),Object(r.a)([Object(l.b)({type:Number,range:{min:0,max:1},json:{write:!0}})],w.prototype,"holePercentage",void 0),Object(r.a)([Object(l.b)({type:m,json:{write:!0}})],w.prototype,"othersCategory",void 0),Object(r.a)([Object(l.b)({type:y,json:{write:!0}})],w.prototype,"legendOptions",void 0),Object(r.a)([Object(l.b)({type:O.a,json:{default:null,write:!0}})],w.prototype,"outline",void 0),Object(r.a)([Object(l.b)({type:Number,cast:s.k,json:{write:!0}})],w.prototype,"size",void 0),Object(r.a)([Object(c.a)({pieChart:"pie-chart"})],w.prototype,"type",void 0),w=Object(r.a)([Object(u.a)("esri.renderers.PieChartRenderer")],w)
const j=w},1101:function(e,t,n){"use strict"
n.d(t,"a",(function(){return w}))
var r,i=n(968),a=n(990),o=n(234),s=n(970),l=(n(971),n(979)),c=n(969),u=n(989),d=n(1001),f=n(1032),h=n(1180),p=n(972)
n(445)
let b=r=class extends p.a{constructor(){super(...arguments),this.unit=null}clone(){return new r({unit:this.unit})}}
Object(i.a)([Object(s.b)({type:String,json:{write:!0}})],b.prototype,"unit",void 0),b=r=Object(i.a)([Object(c.a)("esri.renderers.support.DotDensityLegendOptions")],b)
const m=b
var y,g=n(1073),v=n(1065)
let O=y=class extends(Object(f.a)(d.a)){constructor(e){super(e),this.attributes=null,this.backgroundColor=new a.a([0,0,0,0]),this.dotBlendingEnabled=!0,this.dotShape="square",this.dotSize=1,this.legendOptions=null,this.outline=new v.a,this.dotValue=null,this.referenceScale=null,this.seed=1,this.type="dot-density"}calculateDotValue(e){if(null==this.referenceScale)return this.dotValue
const t=e/this.referenceScale*this.dotValue
return t<1?1:t}getSymbol(){return new g.a({outline:this.outline})}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol()]}getAttributeHash(){var e,t
return null!=(e=null==(t=this.attributes)?void 0:t.reduce((e,t)=>e+t.getAttributeHash(),""))?e:""}getMeshHash(){return JSON.stringify(this.outline)}clone(){return new y({attributes:Object(o.a)(this.attributes),backgroundColor:Object(o.a)(this.backgroundColor),dotBlendingEnabled:Object(o.a)(this.dotBlendingEnabled),dotShape:Object(o.a)(this.dotShape),dotSize:Object(o.a)(this.dotSize),dotValue:Object(o.a)(this.dotValue),legendOptions:Object(o.a)(this.legendOptions),outline:Object(o.a)(this.outline),referenceScale:Object(o.a)(this.referenceScale),visualVariables:Object(o.a)(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}getControllerHash(){var e
return`${null==(e=this.attributes)?void 0:e.map(e=>e.field||e.valueExpression||"")}-${this.outline&&JSON.stringify(this.outline.toJSON())||""}`}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t)
for(const r of null!=(n=this.attributes)?n:[]){var n
r.valueExpression&&await Object(u.a)(e,t,r.valueExpression),r.field&&e.add(r.field)}}}
Object(i.a)([Object(s.b)({type:[h.a],json:{write:!0}})],O.prototype,"attributes",void 0),Object(i.a)([Object(s.b)({type:a.a,json:{write:!0}})],O.prototype,"backgroundColor",void 0),Object(i.a)([Object(s.b)({type:Boolean,json:{write:!0}})],O.prototype,"dotBlendingEnabled",void 0),Object(i.a)([Object(s.b)({type:String,json:{write:!1}})],O.prototype,"dotShape",void 0),Object(i.a)([Object(s.b)({type:Number,json:{write:!0}})],O.prototype,"dotSize",void 0),Object(i.a)([Object(s.b)({type:m,json:{write:!0}})],O.prototype,"legendOptions",void 0),Object(i.a)([Object(s.b)({type:v.a,json:{default:null,write:!0}})],O.prototype,"outline",void 0),Object(i.a)([Object(s.b)({type:Number,json:{write:!0}})],O.prototype,"dotValue",void 0),Object(i.a)([Object(s.b)({type:Number,json:{write:!0}})],O.prototype,"referenceScale",void 0),Object(i.a)([Object(s.b)({type:Number,json:{write:!0}})],O.prototype,"seed",void 0),Object(i.a)([Object(l.a)({dotDensity:"dot-density"})],O.prototype,"type",void 0),O=y=Object(i.a)([Object(c.a)("esri.renderers.DotDensityRenderer")],O)
const w=O},1102:function(e,t,n){"use strict"
n.d(t,"a",(function(){return C}))
var r=n(968),i=n(990),a=(n(995),n(1095)),o=n(234),s=n(233),l=n(1024),c=n(980),u=n(970),d=(n(971),n(999)),f=n(979),h=n(969),p=n(989),b=n(1001),m=n(1113),y=n(1245),g=n(986),v=n(972)
n(445)
let O=class extends(Object(g.b)(v.a)){constructor(){super(...arguments),this.minLabel=null,this.maxLabel=null,this.title=null}}
Object(r.a)([Object(u.b)({type:String,json:{write:!0}})],O.prototype,"minLabel",void 0),Object(r.a)([Object(u.b)({type:String,json:{write:!0}})],O.prototype,"maxLabel",void 0),Object(r.a)([Object(u.b)({type:String,json:{write:!0}})],O.prototype,"title",void 0),O=Object(r.a)([Object(h.a)("esri.renderers.support.HeatmapLegendOptions")],O)
var w,j=n(1203),_=n(1078)
const S="esri.renderers.HeatmapRenderer",E=s.a.getLogger(S)
function x(e){if(null!=e){const{maxDensity:t,minDensity:n,radius:r}=e
if(null!=t||null!=n||null!=r){const{blurRadius:t,maxPixelIntensity:n,minPixelIntensity:r,...i}=e
return i}}return e}let I=w=class extends b.a{constructor(e){super(e),this.authoringInfo=null,this.colorStops=[new y.a({ratio:0,color:new i.a("rgba(255, 140, 0, 0)")}),new y.a({ratio:.75,color:new i.a("rgba(255, 140, 0, 1)")}),new y.a({ratio:.9,color:new i.a("rgba(255, 0,   0, 1)")})],this.field=null,this.fieldOffset=0,this.legendOptions=null,this.maxDensity=.04,this.minDensity=0,this.radius=18,this.referenceScale=0,this.type="heatmap",this.valueExpression=null,this.valueExpressionTitle=null,this._warnedProps={blurRadius:!1,maxPixelIntensity:!1,minPixelIntensity:!1}}normalizeCtorArgs(e){return x(e)}get blurRadius(){return Object(j.h)(this.radius)}set blurRadius(e){const t=this.maxPixelIntensity,n=this.minPixelIntensity
this._set("radius",Object(j.f)(e)),this._warnAboutDeprecatedGaussianBlurProp("blurRadius","radius"),this._set("maxDensity",t*this._pixelIntensityToDensity),this._set("minDensity",n*this._pixelIntensityToDensity)}get maxPixelIntensity(){return this.maxDensity/this._pixelIntensityToDensity}set maxPixelIntensity(e){this._set("maxDensity",e*this._pixelIntensityToDensity),this._warnAboutDeprecatedGaussianBlurProp("maxPixelIntensity","maxDensity")}get minPixelIntensity(){return this.minDensity/this._pixelIntensityToDensity}set minPixelIntensity(e){this._set("minDensity",e*this._pixelIntensityToDensity),this._warnAboutDeprecatedGaussianBlurProp("minPixelIntensity","minDensity")}get _pixelIntensityToDensity(){return 24/(j.a**2*this.blurRadius**4)}_warnAboutDeprecatedGaussianBlurProp(e,t){this._warnedProps[e]||"user"===Object(d.a)(this).getDefaultOrigin()&&(this._warnedProps[e]=!0,Object(l.b)(()=>{Object(a.d)(E,e,{replacement:`${String(t)} (suggested value: ${this._get(t)})`,version:"4.24"})}))}read(e,t){e=x(e),super.read(e,t)}getSymbol(){return new _.a}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol()]}async collectRequiredFields(e,t){const n=this.field,r=this.valueExpression
n&&"string"==typeof n&&await Object(p.d)(e,t,n),r&&"string"==typeof r&&await Object(p.a)(e,t,r)}getAttributeHash(){return null}getMeshHash(){return`${JSON.stringify(this.colorStops)}.${this.blurRadius}.${this.field}`}clone(){return new w({authoringInfo:this.authoringInfo&&this.authoringInfo.clone(),colorStops:Object(o.a)(this.colorStops),field:this.field,legendOptions:Object(o.a)(this.legendOptions),maxDensity:this.maxDensity,minDensity:this.minDensity,radius:this.radius,referenceScale:this.referenceScale,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}}
Object(r.a)([Object(u.b)({type:m.a,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],I.prototype,"authoringInfo",void 0),Object(r.a)([Object(u.b)({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],I.prototype,"blurRadius",null),Object(r.a)([Object(u.b)({type:[y.a],json:{write:!0}})],I.prototype,"colorStops",void 0),Object(r.a)([Object(u.b)({type:String,json:{write:!0}})],I.prototype,"field",void 0),Object(r.a)([Object(u.b)({type:Number,json:{write:{overridePolicy:(e,t,n)=>({enabled:null==n})},origins:{"web-scene":{write:!1}}}})],I.prototype,"fieldOffset",void 0),Object(r.a)([Object(u.b)({type:O,json:{write:!0}})],I.prototype,"legendOptions",void 0),Object(r.a)([Object(u.b)({type:Number,json:{write:!0}})],I.prototype,"maxDensity",void 0),Object(r.a)([Object(u.b)({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],I.prototype,"maxPixelIntensity",null),Object(r.a)([Object(u.b)({type:Number,json:{write:!0}})],I.prototype,"minDensity",void 0),Object(r.a)([Object(u.b)({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],I.prototype,"minPixelIntensity",null),Object(r.a)([Object(u.b)({type:Number,cast:c.k,json:{write:!0}})],I.prototype,"radius",void 0),Object(r.a)([Object(u.b)({type:Number,range:{min:0},json:{default:0,write:!0}})],I.prototype,"referenceScale",void 0),Object(r.a)([Object(f.a)({heatmap:"heatmap"})],I.prototype,"type",void 0),Object(r.a)([Object(u.b)({type:String,json:{write:!0,origins:{"web-document":{write:!1},"portal-item":{write:!1}}}})],I.prototype,"valueExpression",void 0),Object(r.a)([Object(u.b)({type:String})],I.prototype,"valueExpressionTitle",void 0),Object(r.a)([Object(u.b)({readOnly:!0})],I.prototype,"_pixelIntensityToDensity",null),I=w=Object(r.a)([Object(h.a)(S)],I)
const C=I},1103:function(e,t,n){"use strict"
n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}))
var r=n(1081),i=n(1098),a=n(1101),o=n(1102),s=n(1100),l=n(1001),c=n(1097),u=n(1084)
const d={key:"type",base:l.a,typeMap:{heatmap:o.a,simple:c.a,"unique-value":u.a,"class-breaks":r.a,"dot-density":a.a,dictionary:i.a,"pie-chart":s.a},errorContext:"renderer"},f={key:"type",base:l.a,typeMap:{simple:c.a,"unique-value":u.a,"class-breaks":r.a,heatmap:o.a},errorContext:"renderer"}},1105:function(e,t,n){"use strict"
function r(e,t,n=!1){let{hasM:r,hasZ:i}=e
Array.isArray(t)?4!==t.length||r||i?3===t.length&&n&&!r?(i=!0,r=!1):3===t.length&&r&&i&&(r=!1,i=!1):(r=!0,i=!0):(i=!i&&t.hasZ&&(!r||t.hasM),r=!r&&t.hasM&&(!i||t.hasZ)),e.hasZ=i,e.hasM=r}n.d(t,"a",(function(){return r}))},1107:function(e,t,n){"use strict"
n.r(t),n.d(t,"getAllSizes",(function(){return S})),n.d(t,"getColor",(function(){return p})),n.d(t,"getOpacity",(function(){return b})),n.d(t,"getRotationAngle",(function(){return m})),n.d(t,"getSize",(function(){return y})),n.d(t,"getSizeForValue",(function(){return O})),n.d(t,"getSizeFromNumberOrVariable",(function(){return g})),n.d(t,"getSizeRangeAtScale",(function(){return w})),n.d(t,"getVisualVariableValues",(function(){return j})),n.d(t,"viewScaleRE",(function(){return h}))
var r=n(990),i=n(772),a=n(1090),o=n(233),s=n(23),l=n(1093),c=n(1108)
const u=o.a.getLogger("esri.renderers.visualVariables.support.visualVariableUtils"),d=new i.default,f=Math.PI,h=/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i
function p(e,t,n){const i="visualVariables"in e&&e.visualVariables?e.visualVariables.find(e=>"color"===e.type):e
if(!i)return
if("esri.renderers.visualVariables.ColorVariable"!==i.declaredClass)return void u.warn("The visualVariable should be an instance of esri.renderers.visualVariables.ColorVariable")
const a="number"==typeof t,o=a?null:t,l=o&&o.attributes
let c=a?t:null
const d=i.field,{ipData:f,hasExpression:h}=i.cache
let p=i.cache.compiledFunc
if(!d&&!h){const e=i.stops
return e&&e[0]&&e[0].color}if("number"!=typeof c)if(h){if(Object(s.k)(n)||Object(s.k)(n.arcade))return void u.error("Use of arcade expressions requires an arcade context")
const e={viewingMode:n.viewingMode,scale:n.scale,spatialReference:n.spatialReference},t=n.arcade.arcadeUtils,r=t.getViewInfo(e),a=t.createExecContext(o,r)
if(!p){const e=t.createSyntaxTree(i.valueExpression)
p=t.createFunction(e),i.cache.compiledFunc=p}c=t.executeFunction(p,a)}else l&&(c=l[d])
const b=i.normalizationField,m=null!=l&&null!=b?parseFloat(l[b]):void 0
if(null!=c&&(!b||a||!isNaN(m)&&0!==m)){isNaN(m)||a||(c/=m)
const e=_(c,f)
if(e){const t=e[0],a=e[1],o=t===a?i.stops[t].color:r.a.blendColors(i.stops[t].color,i.stops[a].color,e[2],Object(s.l)(n)?n.color:void 0)
return new r.a(o)}}}function b(e,t,n){const r="visualVariables"in e&&e.visualVariables?e.visualVariables.find(e=>"opacity"===e.type):e
if(!r)return
if("esri.renderers.visualVariables.OpacityVariable"!==r.declaredClass)return void u.warn("The visualVariable should be an instance of esri.renderers.visualVariables.OpacityVariable")
const i="number"==typeof t,a=i?null:t,o=a&&a.attributes
let l=i?t:null
const c=r.field,{ipData:d,hasExpression:f}=r.cache
let h=r.cache.compiledFunc
if(!c&&!f){const e=r.stops
return e&&e[0]&&e[0].opacity}if("number"!=typeof l)if(f){if(Object(s.k)(n)||Object(s.k)(n.arcade))return void u.error("Use of arcade expressions requires an arcade context")
const e={viewingMode:n.viewingMode,scale:n.scale,spatialReference:n.spatialReference},t=n.arcade.arcadeUtils,i=t.getViewInfo(e),o=t.createExecContext(a,i)
if(!h){const e=t.createSyntaxTree(r.valueExpression)
h=t.createFunction(e),r.cache.compiledFunc=h}l=t.executeFunction(h,o)}else o&&(l=o[c])
const p=r.normalizationField,b=null!=o&&null!=p?parseFloat(o[p]):void 0
if(null!=l&&(!p||i||!isNaN(b)&&0!==b)){isNaN(b)||i||(l/=b)
const e=_(l,d)
if(e){const t=e[0],n=e[1]
if(t===n)return r.stops[t].opacity
{const i=r.stops[t].opacity
return i+(r.stops[n].opacity-i)*e[2]}}}}function m(e,t,n){const r="visualVariables"in e&&e.visualVariables?e.visualVariables.find(e=>"rotation"===e.type):e
if(!r)return
if("esri.renderers.visualVariables.RotationVariable"!==r.declaredClass)return void u.warn("The visualVariable should be an instance of esri.renderers.visualVariables.RotationVariable")
const i=r.axis||"heading",a="heading"===i&&"arithmetic"===r.rotationType?90:0,o="heading"===i&&"arithmetic"===r.rotationType?-1:1,l="number"==typeof t?null:t,c=l&&l.attributes,d=r.field,{hasExpression:f}=r.cache
let h=r.cache.compiledFunc,p=0
if(!d&&!f)return p
if(f){if(Object(s.k)(n)||Object(s.k)(n.arcade))return void u.error("Use of arcade expressions requires an arcade context")
const e={viewingMode:n.viewingMode,scale:n.scale,spatialReference:n.spatialReference},t=n.arcade.arcadeUtils,i=t.getViewInfo(e),a=t.createExecContext(l,i)
if(!h){const e=t.createSyntaxTree(r.valueExpression)
h=t.createFunction(e),r.cache.compiledFunc=h}p=t.executeFunction(h,a)}else c&&(p=c[d]||0)
return p="number"!=typeof p||isNaN(p)?null:a+o*p,p}function y(e,t,n){const r="visualVariables"in e&&e.visualVariables?e.visualVariables.find(e=>"size"===e.type):e
if(!r)return
if("esri.renderers.visualVariables.SizeVariable"!==r.declaredClass)return void u.warn("The visualVariable should be an instance of esri.renderers.visualVariables.SizeVariable")
const i=O(function(e,t,n){const r="number"==typeof t,i=r?null:t,a=i&&i.attributes
let o=r?t:null
const{isScaleDriven:l}=e.cache
let d=e.cache.compiledFunc
if(l){const t=Object(s.l)(n)?n.scale:void 0,r=Object(s.l)(n)?n.view:void 0
o=null==t||"3d"===r?function(e){let t=null,n=null
const r=e.stops
return r?(t=r[0].value,n=r[r.length-1].value):(t=e.minDataValue||0,n=e.maxDataValue||0),(t+n)/2}(e):t}else if(!r)switch(e.inputValueType){case c.a.Expression:{if(Object(s.k)(n)||Object(s.k)(n.arcade))return void u.error("Use of arcade expressions requires an arcade context")
const t={viewingMode:n.viewingMode,scale:n.scale,spatialReference:n.spatialReference},r=n.arcade.arcadeUtils,a=r.getViewInfo(t),l=r.createExecContext(i,a)
if(!d){const t=r.createSyntaxTree(e.valueExpression)
d=r.createFunction(t),e.cache.compiledFunc=d}o=r.executeFunction(d,l)
break}case c.a.Field:a&&(o=a[e.field])
break
case c.a.Unknown:o=null}if(!Object(c.f)(o))return null
if(r||!e.normalizationField)return o
const f=a?parseFloat(a[e.normalizationField]):null
return Object(c.f)(f)&&0!==f?o/f:null}(r,t,n),r,t,n,r.cache.ipData)
return null==i||isNaN(i)?0:i}function g(e,t,n){return null==e?null:Object(c.e)(e)?y(e,t,n):Object(c.f)(e)?e:null}function v(e,t,n){return Object(c.f)(n)&&e>n?n:Object(c.f)(t)&&e<t?t:e}function O(e,t,n,r,i){switch(t.transformationType){case c.b.Additive:return function(e,t,n,r){var i
return e+(null!=(i=g(t.minSize,n,r)||t.minDataValue)?i:0)}(e,t,n,r)
case c.b.Constant:return function(e,t,n){const r=e.stops
let i=r&&r.length&&r[0].size
return null==i&&(i=e.minSize),g(i,t,n)}(t,n,r)
case c.b.ClampedLinear:return function(e,t,n,r){const i=(e-t.minDataValue)/(t.maxDataValue-t.minDataValue),a=g(t.minSize,n,r),o=g(t.maxSize,n,r),l=Object(s.l)(r)?r.shape:void 0
if(e<=t.minDataValue)return a
if(e>=t.maxDataValue)return o
if(null==a||null==o)return null
if("area"===t.scaleBy&&l){const e="circle"===l,t=e?f*(a/2)**2:a*a,n=t+i*((e?f*(o/2)**2:o*o)-t)
return e?2*Math.sqrt(n/f):Math.sqrt(n)}return a+i*(o-a)}(e,t,n,r)
case c.b.Proportional:return function(e,t,n,r){const i=Object(s.l)(r)?r.shape:void 0,a=e/t.minDataValue,o=g(t.minSize,n,r),l=g(t.maxSize,n,r)
let c=null
return c="circle"===i?2*Math.sqrt(a*(o/2)**2):"square"===i||"diamond"===i||"image"===i?Math.sqrt(a*o**2):a*o,v(c,o,l)}(e,t,n,r)
case c.b.Stops:return function(e,t,n,r,i){var a
const[o,s,l]=_(e,i)
if(o===s)return g(null==(a=t.stops)?void 0:a[o].size,n,r)
{var c,u
const e=g(null==(c=t.stops)?void 0:c[o].size,n,r)
return e+(g(null==(u=t.stops)?void 0:u[s].size,n,r)-e)*l}}(e,t,n,r,i)
case c.b.RealWorldSize:return function(e,t,n,r){const i=(Object(s.l)(r)&&r.resolution?r.resolution:1)*l.a[t.valueUnit],a=g(t.minSize,n,r),o=g(t.maxSize,n,r),{valueRepresentation:c}=t
let u=null
return u="area"===c?2*Math.sqrt(e/f)/i:"radius"===c||"distance"===c?2*e/i:e/i,v(u,a,o)}(e,t,n,r)
case c.b.Identity:return e
case c.b.Unknown:return null}}function w(e,t,n){const{isScaleDriven:r}=e.cache
if(!(r&&"3d"===n||t))return null
const i={scale:t,view:n}
let a=g(e.minSize,d,i),o=g(e.maxSize,d,i)
if(null!=a||null!=o){if(a>o){const e=o
o=a,a=e}return{minSize:a,maxSize:o}}}function j(e,t,n){if(!e.visualVariables)return
const r=[],i=[],a=[],o=[],s=[]
for(const t of e.visualVariables)switch(t.type){case"color":i.push(t)
break
case"opacity":a.push(t)
break
case"rotation":s.push(t)
break
case"size":o.push(t)}return i.forEach(e=>{const i=p(e,t,n)
r.push({variable:e,value:i})}),a.forEach(e=>{const i=b(e,t,n)
r.push({variable:e,value:i})}),s.forEach(e=>{const i=m(e,t,n)
r.push({variable:e,value:i})}),o.forEach(e=>{const i=y(e,t,n)
r.push({variable:e,value:i})}),r.filter(e=>null!=e.value)}function _(e,t){if(!t)return
let n=0,r=t.length-1
return t.some((t,i)=>e<t?(r=i,!0):(n=i,!1)),[n,r,(e-t[n])/(t[r]-t[n])]}function S(e,t,n){const r=["proportional","proportional","proportional"]
for(const i of e){const e=i.useSymbolValue?"symbol-value":y(i,t,n)
switch(i.axis){case"width":r[0]=e
break
case"depth":r[1]=e
break
case"height":r[2]=e
break
case"width-and-depth":r[0]=e,r[1]=e
break
case"all":case void 0:case null:r[0]=e,r[1]=e,r[2]=e
break
default:Object(a.a)(i.axis)}}return r}},1108:function(e,t,n){"use strict"
var r,i
function a(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}function o(e){return null!=e&&!isNaN(e)&&isFinite(e)}function s(e){return e.valueExpression?r.Expression:e.field&&"string"==typeof e.field?r.Field:r.Unknown}function l(e,t){const n=t||s(e),a=e.valueUnit||"unknown"
return n===r.Unknown?i.Constant:e.stops?i.Stops:null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?i.ClampedLinear:"unknown"===a?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?i.Proportional:i.Additive:i.Identity:i.RealWorldSize}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return a})),n.d(t,"f",(function(){return o})),function(e){e.Unknown="unknown",e.Expression="expression",e.Field="field"}(r||(r={})),function(e){e.Unknown="unknown",e.Stops="stops",e.ClampedLinear="clamped-linear",e.Proportional="proportional",e.Additive="additive",e.Constant="constant",e.Identity="identity",e.RealWorldSize="real-world-size"}(i||(i={}))},1111:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}))
var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{}
function i(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}}).call(this,n(50))},1113:function(e,t,n){"use strict"
n.d(t,"a",(function(){return T}))
var r,i=n(968),a=n(976),o=n(972),s=n(234),l=n(970),c=n(971),u=n(977),d=n(969)
n(445)
let f=r=class extends o.a{constructor(e){super(e),this.minValue=0,this.maxValue=0}clone(){return new r({minValue:this.minValue,maxValue:this.maxValue})}}
var h
Object(i.a)([Object(l.b)({type:Number,json:{write:!0}})],f.prototype,"minValue",void 0),Object(i.a)([Object(l.b)({type:Number,json:{write:!0}})],f.prototype,"maxValue",void 0),f=r=Object(i.a)([Object(d.a)("esri.renderer.support.AuthoringInfoClassBreakInfo")],f)
let p=h=class extends o.a{constructor(e){super(e),this.field="",this.normalizationField="",this.label="",this.classBreakInfos=[]}clone(){return new h({field:this.field,normalizationField:this.normalizationField,label:this.label,classBreakInfos:Object(s.a)(this.classBreakInfos)})}}
Object(i.a)([Object(l.b)({type:String,json:{write:!0}})],p.prototype,"field",void 0),Object(i.a)([Object(l.b)({type:String,json:{write:!0}})],p.prototype,"normalizationField",void 0),Object(i.a)([Object(l.b)({type:String,json:{write:!0}})],p.prototype,"label",void 0),Object(i.a)([Object(l.b)({type:[f],json:{write:!0}})],p.prototype,"classBreakInfos",void 0),p=h=Object(i.a)([Object(d.a)("esri.renderers.support.AuthoringInfoFieldInfo")],p)
var b,m=n(987)
const y=new a.a({percentTotal:"percent-of-total",ratio:"ratio",percent:"percent"}),g=new a.a({sizeInfo:"size",colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation"}),v={key:e=>"number"==typeof e?"number":"string",typeMap:{number:Number,string:String},base:null},O=["high-to-low","above-and-below","centered-on","extremes"],w=[...new Set(["high-to-low","above-and-below","centered-on","extremes","90-10","above","below","high-to-low","above-and-below","90-10","above","below"])],j=["seconds","minutes","hours","days","months","years"]
let _=b=class extends o.a{constructor(e){super(e),this.endTime=null,this.field=null,this.maxSliderValue=null,this.minSliderValue=null,this.startTime=null,this.type=null,this.units=null}castEndTime(e){return"string"==typeof e||"number"==typeof e?e:null}castStartTime(e){return"string"==typeof e||"number"==typeof e?e:null}get style(){return"color"===this.type?this._get("style"):null}set style(e){this._set("style",e)}get theme(){return"color"===this.type||"size"===this.type?this._get("theme")||"high-to-low":null}set theme(e){this._set("theme",e)}clone(){return new b({endTime:this.endTime,field:this.field,maxSliderValue:this.maxSliderValue,minSliderValue:this.minSliderValue,startTime:this.startTime,style:this.style,theme:this.theme,type:this.type,units:this.units})}}
Object(i.a)([Object(l.b)({types:v,json:{write:!0}})],_.prototype,"endTime",void 0),Object(i.a)([Object(m.a)("endTime")],_.prototype,"castEndTime",null),Object(i.a)([Object(l.b)({type:String,json:{write:!0}})],_.prototype,"field",void 0),Object(i.a)([Object(l.b)({type:Number,json:{write:!0}})],_.prototype,"maxSliderValue",void 0),Object(i.a)([Object(l.b)({type:Number,json:{write:!0}})],_.prototype,"minSliderValue",void 0),Object(i.a)([Object(l.b)({types:v,json:{write:!0}})],_.prototype,"startTime",void 0),Object(i.a)([Object(m.a)("startTime")],_.prototype,"castStartTime",null),Object(i.a)([Object(l.b)({type:y.apiValues,value:null,json:{type:y.jsonValues,read:y.read,write:y.write}})],_.prototype,"style",null),Object(i.a)([Object(l.b)({type:w,value:null,json:{type:w,origins:{"web-scene":{type:O,write:{writer:(e,t)=>{O.includes(e)&&(t.theme=e)}}}},write:!0}})],_.prototype,"theme",null),Object(i.a)([Object(l.b)({type:g.apiValues,json:{type:g.jsonValues,read:g.read,write:g.write}})],_.prototype,"type",void 0),Object(i.a)([Object(l.b)({type:j,json:{type:j,write:!0}})],_.prototype,"units",void 0),_=b=Object(i.a)([Object(d.a)("esri.renderers.support.AuthoringInfoVisualVariable")],_)
const S=_
var E,x=n(1236)
const I=new a.a({esriClassifyDefinedInterval:"defined-interval",esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation"}),C=new a.a({pieChart:"pie-chart",classedSize:"class-breaks-size",classedColor:"class-breaks-color",univariateColorSize:"univariate-color-size",relationship:"relationship",predominance:"predominance",dotDensity:"dot-density",flow:"flow"}),L=new a.a({classedSize:"class-breaks-size",classedColor:"class-breaks-color",univariateColorSize:"univariate-color-size",relationship:"relationship",predominance:"predominance",dotDensity:"dot-density"}),M=["inches","feet","yards","miles","nautical-miles","millimeters","centimeters","decimeters","meters","kilometers","decimal-degrees"]
let A=E=class extends o.a{constructor(e){super(e),this.colorRamp=null,this.fadeRatio=null,this.isAutoGenerated=!1,this.lengthUnit=null,this.maxSliderValue=null,this.minSliderValue=null,this.visualVariables=null}get classificationMethod(){const e=this._get("classificationMethod"),t=this.type
return t&&"relationship"!==t?"class-breaks-size"===t||"class-breaks-color"===t?e||"manual":null:e}set classificationMethod(e){this._set("classificationMethod",e)}readColorRamp(e){return e?Object(x.a)(e):void 0}get fields(){return this.type&&"predominance"!==this.type?null:this._get("fields")}set fields(e){this._set("fields",e)}get field1(){return this.type&&"relationship"!==this.type?null:this._get("field1")}set field1(e){this._set("field1",e)}get field2(){return this.type&&"relationship"!==this.type?null:this._get("field2")}set field2(e){this._set("field2",e)}get flowTheme(){return"flow"===this.type?this._get("flowTheme"):null}set flowTheme(e){this._set("flowTheme",e)}get focus(){return this.type&&"relationship"!==this.type?null:this._get("focus")}set focus(e){this._set("focus",e)}get numClasses(){return this.type&&"relationship"!==this.type?null:this._get("numClasses")}set numClasses(e){this._set("numClasses",e)}get statistics(){return"univariate-color-size"===this.type&&"above-and-below"===this.univariateTheme?this._get("statistics"):null}set statistics(e){this._set("statistics",e)}get standardDeviationInterval(){const e=this.type
return e&&"relationship"!==e&&"class-breaks-size"!==e&&"class-breaks-color"!==e||this.classificationMethod&&"standard-deviation"!==this.classificationMethod?null:this._get("standardDeviationInterval")}set standardDeviationInterval(e){this._set("standardDeviationInterval",e)}get type(){return this._get("type")}set type(e){let t=e
"classed-size"===e?t="class-breaks-size":"classed-color"===e&&(t="class-breaks-color"),this._set("type",t)}get univariateSymbolStyle(){return"univariate-color-size"===this.type&&"above-and-below"===this.univariateTheme?this._get("univariateSymbolStyle"):null}set univariateSymbolStyle(e){this._set("univariateSymbolStyle",e)}get univariateTheme(){return"univariate-color-size"===this.type?this._get("univariateTheme"):null}set univariateTheme(e){this._set("univariateTheme",e)}clone(){return new E({classificationMethod:this.classificationMethod,colorRamp:Object(s.a)(this.colorRamp),fadeRatio:Object(s.a)(this.fadeRatio),fields:this.fields&&this.fields.slice(0),field1:Object(s.a)(this.field1),field2:Object(s.a)(this.field2),isAutoGenerated:this.isAutoGenerated,focus:this.focus,numClasses:this.numClasses,maxSliderValue:this.maxSliderValue,minSliderValue:this.minSliderValue,lengthUnit:this.lengthUnit,statistics:this.statistics,standardDeviationInterval:this.standardDeviationInterval,type:this.type,visualVariables:this.visualVariables&&this.visualVariables.map(e=>e.clone()),univariateSymbolStyle:this.univariateSymbolStyle,univariateTheme:this.univariateTheme,flowTheme:this.flowTheme})}}
Object(i.a)([Object(l.b)({type:I.apiValues,value:null,json:{type:I.jsonValues,read:I.read,write:I.write,origins:{"web-document":{default:"manual",type:I.jsonValues,read:I.read,write:I.write}}}})],A.prototype,"classificationMethod",null),Object(i.a)([Object(l.b)({types:x.b,json:{write:!0}})],A.prototype,"colorRamp",void 0),Object(i.a)([Object(u.a)("colorRamp")],A.prototype,"readColorRamp",null),Object(i.a)([Object(l.b)({json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],A.prototype,"fadeRatio",void 0),Object(i.a)([Object(l.b)({type:[String],value:null,json:{write:!0}})],A.prototype,"fields",null),Object(i.a)([Object(l.b)({type:p,value:null,json:{write:!0}})],A.prototype,"field1",null),Object(i.a)([Object(l.b)({type:p,value:null,json:{write:!0}})],A.prototype,"field2",null),Object(i.a)([Object(l.b)({type:["flow-line","wave-front"],value:null,json:{write:!0,origins:{"web-scene":{write:!1}}}})],A.prototype,"flowTheme",null),Object(i.a)([Object(l.b)({type:["HH","HL","LH","LL"],value:null,json:{write:!0}})],A.prototype,"focus",null),Object(i.a)([Object(l.b)({type:Boolean,json:{write:!0,default:!1,origins:{"web-scene":{write:!1}}}})],A.prototype,"isAutoGenerated",void 0),Object(i.a)([Object(l.b)({type:Number,value:null,json:{type:c.a,write:!0}})],A.prototype,"numClasses",null),Object(i.a)([Object(l.b)({type:M,json:{type:M,read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],A.prototype,"lengthUnit",void 0),Object(i.a)([Object(l.b)({type:Number,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],A.prototype,"maxSliderValue",void 0),Object(i.a)([Object(l.b)({type:Number,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],A.prototype,"minSliderValue",void 0),Object(i.a)([Object(l.b)({type:Object,value:null,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],A.prototype,"statistics",null),Object(i.a)([Object(l.b)({type:[.25,.33,.5,1],value:null,json:{type:[.25,.33,.5,1],write:!0}})],A.prototype,"standardDeviationInterval",null),Object(i.a)([Object(l.b)({type:C.apiValues,value:null,json:{type:C.jsonValues,read:C.read,write:C.write,origins:{"web-scene":{type:L.jsonValues,write:{writer:L.write,overridePolicy:e=>({enabled:"flow"!==e})}}}}})],A.prototype,"type",null),Object(i.a)([Object(l.b)({type:[S],json:{write:!0}})],A.prototype,"visualVariables",void 0),Object(i.a)([Object(l.b)({type:["caret","circle-caret","arrow","circle-arrow","plus-minus","circle-plus-minus","square","circle","triangle","happy-sad","thumb","custom"],value:null,json:{write:!0,origins:{"web-scene":{write:!1}}}})],A.prototype,"univariateSymbolStyle",null),Object(i.a)([Object(l.b)({type:["high-to-low","above-and-below","above","below","90-10"],value:null,json:{write:!0,origins:{"web-scene":{write:!1}}}})],A.prototype,"univariateTheme",null),A=E=Object(i.a)([Object(d.a)("esri.renderers.support.AuthoringInfo")],A)
const T=A},1114:function(e,t,n){"use strict"
var r
n.d(t,"a",(function(){return r})),function(e){e[e.ADD=1]="ADD",e[e.REMOVE=2]="REMOVE",e[e.MOVE=4]="MOVE"}(r||(r={}))},1115:function(e,t,n){"use strict"
n.d(t,"a",(function(){return c}))
var r=n(233),i=n(146),a=n(447),o=n(1039),s=n(1038)
const l=r.a.getLogger("esri.intl.substitute")
function c(e,t,n={}){const{format:r={}}=n
return Object(a.c)(e,e=>function(e,t,n){var r
let a,o
const s=e.indexOf(":")
if(-1===s?a=e.trim():(a=e.slice(0,s).trim(),o=e.slice(s+1).trim()),!a)return""
const l=Object(i.b)(a,t)
if(null==l)return""
const c=null!=(r=o?null==n?void 0:n[o]:null)?r:null==n?void 0:n[a]
return c?u(l,c):o?d(l,o):f(l)}(e,t,r))}function u(e,t){switch(t.type){case"date":return Object(o.b)(e,t.intlOptions)
case"number":return Object(s.b)(e,t.intlOptions)
default:return l.warn("missing format descriptor for key {key}"),f(e)}}function d(e,t){switch(t.toLowerCase()){case"dateformat":return Object(o.b)(e)
case"numberformat":return Object(s.b)(e)
default:return l.warn("inline format is unsupported since 4.12: "+t),/^(dateformat|datestring)/i.test(t)?Object(o.b)(e):/^numberformat/i.test(t)?Object(s.b)(e):f(e)}}function f(e){switch(typeof e){case"string":return e
case"number":return Object(s.b)(e)
case"boolean":return""+e
default:return e instanceof Date?Object(o.b)(e):""}}},1118:function(e,t,n){"use strict"
n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return v})),n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return g}))
var r=n(1085)
function i(e,t){return Object(r.e)(e,t)}function a(e,t){const n=e.hasZ&&t.hasZ
let r,i,a
if(e.xmin<=t.xmin){if(r=t.xmin,e.xmax<r)return!1}else if(r=e.xmin,t.xmax<r)return!1
if(e.ymin<=t.ymin){if(i=t.ymin,e.ymax<i)return!1}else if(i=e.ymin,t.ymax<i)return!1
if(n&&t.hasZ)if(e.zmin<=t.zmin){if(a=t.zmin,e.zmax<a)return!1}else if(a=e.zmin,t.zmax<a)return!1
return!0}function o(e,t){const{points:n,hasZ:i}=t,a=i?r.b:r.a
for(const t of n)if(a(e,t))return!0
return!1}const s=[0,0],l=[0,0],c=[0,0],u=[0,0],d=[s,l,c,u],f=[[c,s],[s,l],[l,u],[u,c]]
function h(e,t){return function(e,t){s[0]=e.xmin,s[1]=e.ymax,l[0]=e.xmax,l[1]=e.ymax,c[0]=e.xmin,c[1]=e.ymin,u[0]=e.xmax,u[1]=e.ymin
for(const e of d)if(Object(r.h)(t,e))return!0
for(const n of t){if(!n.length)continue
let t=n[0]
if(Object(r.a)(e,t))return!0
for(let i=1;i<n.length;i++){const a=n[i]
if(Object(r.a)(e,a)||y(t,a,f))return!0
t=a}}return!1}(e,t.rings)}function p(e,t){s[0]=e.xmin,s[1]=e.ymax,l[0]=e.xmax,l[1]=e.ymax,c[0]=e.xmin,c[1]=e.ymin,u[0]=e.xmax,u[1]=e.ymin
const n=t.paths
for(const t of n){if(!n.length)continue
let i=t[0]
if(Object(r.a)(e,i))return!0
for(let n=1;n<t.length;n++){const a=t[n]
if(Object(r.a)(e,a)||y(i,a,f))return!0
i=a}}return!1}const b=[0,0]
function m(e){for(let t=0;t<e.length;t++){const n=e[t]
for(let r=0;r<n.length-1;r++){const i=n[r],a=n[r+1]
for(let n=t+1;n<e.length;n++)for(let t=0;t<e[n].length-1;t++){const r=e[n][t],o=e[n][t+1]
if(g(i,a,r,o,b)&&!(b[0]===i[0]&&b[1]===i[1]||b[0]===r[0]&&b[1]===r[1]||b[0]===a[0]&&b[1]===a[1]||b[0]===o[0]&&b[1]===o[1]))return!0}}const r=n.length
if(!(r<=4))for(let e=0;e<r-3;e++){let t=r-1
0===e&&(t=r-2)
const i=n[e],a=n[e+1]
for(let r=e+2;r<t;r++){const e=n[r],t=n[r+1]
if(g(i,a,e,t,b)&&!(b[0]===i[0]&&b[1]===i[1]||b[0]===e[0]&&b[1]===e[1]||b[0]===a[0]&&b[1]===a[1]||b[0]===t[0]&&b[1]===t[1]))return!0}}}return!1}function y(e,t,n){for(let r=0;r<n.length;r++)if(g(e,t,n[r][0],n[r][1]))return!0
return!1}function g(e,t,n,r,i){const[a,o]=e,[s,l]=t,[c,u]=n,[d,f]=r,h=d-c,p=a-c,b=s-a,m=f-u,y=o-u,g=l-o,v=m*b-h*g
if(0===v)return!1
const O=(h*y-m*p)/v,w=(b*y-g*p)/v
return O>=0&&O<=1&&w>=0&&w<=1&&(i&&(i[0]=a+O*(s-a),i[1]=o+O*(l-o)),!0)}function v(e){switch(e){case"esriGeometryEnvelope":case"extent":return a
case"esriGeometryMultipoint":case"multipoint":return o
case"esriGeometryPoint":case"point":return i
case"esriGeometryPolygon":case"polygon":return h
case"esriGeometryPolyline":case"polyline":return p}}},1122:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a}))
var r=n(1131)
function i(e,t){const n=e.length>t.length?e:t
return(e.length>t.length?t:e).every((e,t)=>e.type===n[t].type)}function a(e,t){const n=e.length>t.length?e:t,i=e.length>t.length?t:e
for(let e=i.length;e<n.length;e++)i.push(Object(r.g)(n[e]))}function o(e){const t=e[0]
return!!t&&"type"in t}},1124:function(e,t,n){"use strict"
n.d(t,"a",(function(){return r}))
const r=(e,...t)=>{t.forEach(t=>{if("function"!=typeof e[t])throw new Error(`Cannot bind context. ${t} must be a function`)
e[t]=e[t].bind(e)})}},1131:function(e,t,n){"use strict"
n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return d})),n.d(t,"f",(function(){return f})),n.d(t,"g",(function(){return b}))
var r=n(1162),i=n(980),a=n(1213),o=n(1029)
class s{constructor(e,t,n){this.strength=e,this.radius=t,this.threshold=n,this.type="bloom"}interpolate(e,t,n){this.strength=h(e.strength,t.strength,n),this.radius=h(e.radius,t.radius,n),this.threshold=h(e.threshold,t.threshold,n)}clone(){return new s(this.strength,this.radius,this.threshold)}toJSON(){return{type:"bloom",radius:p(this.radius),strength:this.strength,threshold:this.threshold}}}class l{constructor(e){this.radius=e,this.type="blur"}interpolate(e,t,n){this.radius=Math.round(h(e.radius,t.radius,n))}clone(){return new l(this.radius)}toJSON(){return{type:"blur",radius:p(this.radius)}}}class c{constructor(e,t){this.type=e,this.amount=t,"invert"!==this.type&&"grayscale"!==this.type&&"sepia"!==this.type||(this.amount=Math.min(this.amount,1))}get colorMatrix(){return this._colorMatrix||this._updateMatrix(),this._colorMatrix}interpolate(e,t,n){this.amount=h(e.amount,t.amount,n),this._updateMatrix()}clone(){return new c(this.type,this.amount)}toJSON(){return{type:this.type,amount:this.amount}}_updateMatrix(){const e=this._colorMatrix||Object(a.a)()
switch(this.type){case"brightness":this._colorMatrix=((e,t)=>{const n=Object(o.w)(e,t,0,0,0,0,t,0,0,0,0,t,0,0,0,0,1)
return Object(o.x)(n,n)})(e,this.amount)
break
case"contrast":this._colorMatrix=((e,t)=>{const n=Object(o.w)(e,t,0,0,.5-.5*t,0,t,0,.5-.5*t,0,0,t,.5-.5*t,0,0,0,1)
return Object(o.x)(n,n)})(e,this.amount)
break
case"grayscale":this._colorMatrix=((e,t)=>{const n=1-t,r=Object(o.w)(e,.2126+.7874*n,.7152-.7152*n,.0722-.0722*n,0,.2126-.2126*n,.7152+.2848*n,.0722-.0722*n,0,.2126-.2126*n,.7152-.7152*n,.0722+.9278*n,0,0,0,0,1)
return Object(o.x)(r,r)})(e,this.amount)
break
case"invert":this._colorMatrix=((e,t)=>{const n=1-2*t,r=Object(o.w)(e,n,0,0,t,0,n,0,t,0,0,n,t,0,0,0,1)
return Object(o.x)(r,r)})(e,this.amount)
break
case"saturate":this._colorMatrix=((e,t)=>{const n=Object(o.w)(e,.213+.787*t,.715-.715*t,.072-.072*t,0,.213-.213*t,.715+.285*t,.072-.072*t,0,.213-.213*t,.715-.715*t,.072+.928*t,0,0,0,0,1)
return Object(o.x)(n,n)})(e,this.amount)
break
case"sepia":this._colorMatrix=((e,t)=>{const n=1-t,r=Object(o.w)(e,.393+.607*n,.769-.769*n,.189-.189*n,0,.349-.349*n,.686+.314*n,.168-.168*n,0,.272-.272*n,.534-.534*n,.131+.869*n,0,0,0,0,1)
return Object(o.x)(r,r)})(e,this.amount)}}}class u{constructor(e,t,n,r){this.offsetX=e,this.offsetY=t,this.blurRadius=n,this.color=r,this.type="drop-shadow"}interpolate(e,t,n){this.offsetX=h(e.offsetX,t.offsetX,n),this.offsetY=h(e.offsetY,t.offsetY,n),this.blurRadius=h(e.blurRadius,t.blurRadius,n),this.color[0]=Math.round(h(e.color[0],t.color[0],n)),this.color[1]=Math.round(h(e.color[1],t.color[1],n)),this.color[2]=Math.round(h(e.color[2],t.color[2],n)),this.color[3]=h(e.color[3],t.color[3],n)}clone(){return new u(this.offsetX,this.offsetY,this.blurRadius,[...this.color])}toJSON(){const e=[...this.color]
return e[3]*=255,{type:"drop-shadow",xoffset:p(this.offsetX),yoffset:p(this.offsetY),blurRadius:p(this.blurRadius),color:e}}}class d{constructor(e){this.angle=e,this.type="hue-rotate"}get colorMatrix(){return this._colorMatrix||this._updateMatrix(),this._colorMatrix}interpolate(e,t,n){this.angle=h(e.angle,t.angle,n),this._updateMatrix()}clone(){return new d(this.angle)}toJSON(){return{type:"hue-rotate",angle:this.angle}}_updateMatrix(){const e=this._colorMatrix||Object(a.a)()
this._colorMatrix=((e,t)=>{const n=Math.sin(t*Math.PI/180),r=Math.cos(t*Math.PI/180),i=Object(o.w)(e,.213+.787*r-.213*n,.715-.715*r-.715*n,.072-.072*r+.928*n,0,.213-.213*r+.143*n,.715+.285*r+.14*n,.072-.072*r-.283*n,0,.213-.213*r-.787*n,.715-.715*r+.715*n,.072+.928*r+.072*n,0,0,0,0,1)
return Object(o.x)(i,i)})(e,this.angle)}}class f{constructor(e){this.amount=e,this.type="opacity",this.amount=Math.min(this.amount,1)}interpolate(e,t,n){this.amount=h(e.amount,t.amount,n)}clone(){return new f(this.amount)}toJSON(){return{type:"opacity",amount:this.amount}}}function h(e,t,n){return e+(t-e)*n}function p(e){return Math.round(1e3*Object(i.i)(e))/1e3}function b(e){switch(e.type){case"grayscale":case"sepia":case"invert":return new c(e.type,0)
case"saturate":case"brightness":case"contrast":return new c(e.type,1)
case"opacity":return new f(1)
case"hue-rotate":return new d(0)
case"blur":return new l(0)
case"drop-shadow":return new u(0,0,0,[...Object(r.a)("transparent")])
case"bloom":return new s(0,0,1)}}},1134:function(e,t,n){"use strict"
n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return l}))
var r=n(446),i=n(146),a=n(1212),o=n(1122)
function s(e,t,n){try{return function(e){if(!e||0===e.length)return null
if(function(e){const t=e[0]
return!!t&&"scale"in t}(e)){const t=[]
for(const n of e)t.push({scale:n.scale,value:c(n.value)})
return t}return c(e)}(e)}catch(e){var r
null==n||null==(r=n.messages)||r.push(e)}return null}function l(e,t,n,r){try{const r=function(e){const t=Object(a.a)(e)
return t?Object(o.b)(t)?t.map(e=>e.toJSON()):t.map(({scale:e,effects:t})=>({scale:e,value:t.map(e=>e.toJSON())})):null}(e)
Object(i.c)(n,r,t)}catch(e){r.messages&&r.messages.push(e)}}function c(e){if(!e||!e.length)return""
const t=[]
for(const n of e){let e=[]
switch(n.type){case"grayscale":case"sepia":case"saturate":case"invert":case"brightness":case"contrast":case"opacity":e=[u(n,"amount")]
break
case"blur":e=[u(n,"radius","pt")]
break
case"hue-rotate":e=[u(n,"angle","deg")]
break
case"drop-shadow":e=[u(n,"xoffset","pt"),u(n,"yoffset","pt"),u(n,"blurRadius","pt"),d(n,"color")]
break
case"bloom":e=[u(n,"strength"),u(n,"radius","pt"),u(n,"threshold")]}const r=`${n.type}(${e.filter(Boolean).join(" ")})`
Object(a.a)(r),t.push(r)}return t.join(" ")}function u(e,t,n){if(null==e[t])throw new r.a("effect:missing-parameter",`Missing parameter '${t}' in ${e.type} effect`,{effect:e})
return n?e[t]+n:""+e[t]}function d(e,t){if(null==e[t])throw new r.a("effect:missing-parameter",`Missing parameter '${t}' in ${e.type} effect`,{effect:e})
const n=e[t]
return`rgba(${n[0]||0}, ${n[1]||0}, ${n[2]||0}, ${n[3]/255||0})`}},1138:function(e,t,n){"use strict"
n.d(t,"a",(function(){return d}))
var r=n(968),i=n(975),a=n(1007),o=n(23),s=n(978),l=n(1024),c=n(970),u=n(969)
let d=class extends i.a{constructor(){super(...arguments),this.updating=!1,this._handleId=0,this._handles=new a.a,this._scheduleHandleId=0,this._pendingPromises=new Set}destroy(){this.removeAll(),this._handles.destroy()}add(e,t,n={}){return this._installWatch(e,t,n,s.f)}addWhen(e,t,n={}){return this._installWatch(e,t,n,s.g)}addOnCollectionChange(e,t,{initial:n=!1,final:r=!1}={}){const i=++this._handleId
return this._handles.add([Object(s.b)(e,"after-changes",this._createSyncUpdatingCallback(),s.d),Object(s.b)(e,"change",t,{onListenerAdd:n?e=>t({added:e.toArray(),removed:[]}):void 0,onListenerRemove:r?e=>t({added:[],removed:e.toArray()}):void 0})],i),{remove:()=>this._handles.remove(i)}}addPromise(e){if(Object(o.k)(e))return e
const t=++this._handleId
this._handles.add({remove:()=>{this._pendingPromises.delete(e)&&(0!==this._pendingPromises.size||this._handles.has(f)||this._set("updating",!1))}},t),this._pendingPromises.add(e),this._set("updating",!0)
const n=()=>this._handles.remove(t)
return e.then(n,n),e}removeAll(){this._pendingPromises.clear(),this._handles.removeAll(),this._set("updating",!1)}_installWatch(e,t,n={},r){const i=++this._handleId
n.sync||this._installSyncUpdatingWatch(e,i)
const a=r(e,t,n)
return this._handles.add(a,i),{remove:()=>this._handles.remove(i)}}_installSyncUpdatingWatch(e,t){const n=this._createSyncUpdatingCallback(),r=Object(s.f)(e,n,{sync:!0,equals:()=>!1})
return this._handles.add(r,t),r}_createSyncUpdatingCallback(){return()=>{this._handles.remove(f),++this._scheduleHandleId
const e=this._scheduleHandleId
this._get("updating")||this._set("updating",!0),this._handles.add(Object(l.b)(()=>{e===this._scheduleHandleId&&(this._set("updating",this._pendingPromises.size>0),this._handles.remove(f))}),f)}}}
Object(r.a)([Object(c.b)({readOnly:!0})],d.prototype,"updating",void 0),d=Object(r.a)([Object(u.a)("esri.core.support.WatchUpdatingTracking")],d)
const f=-42},1141:function(e,t,n){"use strict"
n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return o}))
var r=n(23),i=n(1056)
const a=-3
var o,s;(s=o||(o={}))[s.ALL=0]="ALL",s[s.SOME=1]="SOME"
class l{constructor(e,t,n){this._namespace=e,this._storage=t,this._removeFunc=!1,this._hit=0,this._miss=0,this._storage.register(this),this._namespace+=":",n&&(this._storage.registerRemoveFunc(this._namespace,n),this._removeFunc=!0)}destroy(){this._storage.clear(this._namespace),this._removeFunc&&this._storage.deregisterRemoveFunc(this._namespace),this._storage.deregister(this),this._storage=null}get namespace(){return this._namespace.slice(0,-1)}get hitRate(){return this._hit/(this._hit+this._miss)}get size(){return this._storage.size}get maxSize(){return this._storage.maxSize}resetHitRate(){this._hit=this._miss=0}put(e,t,n,r=0){this._storage.put(this._namespace+e,t,n,r)}get(e){const t=this._storage.get(this._namespace+e)
return void 0===t?++this._miss:++this._hit,t}pop(e){const t=this._storage.pop(this._namespace+e)
return void 0===t?++this._miss:++this._hit,t}updateSize(e,t,n){this._storage.updateSize(this._namespace+e,t,n)}clear(){this._storage.clear(this._namespace)}clearAll(){this._storage.clearAll()}getStats(){return this._storage.getStats()}resetStats(){this._storage.resetStats()}}class c{constructor(e=10485760){this._maxSize=e,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=new i.a,this._users=new i.a}destroy(){this.clearAll(),this._removeFuncs.clear(),this._users.clear(),this._db=null}register(e){this._users.push(e)}deregister(e){this._users.removeUnordered(e)}registerRemoveFunc(e,t){this._removeFuncs.push([e,t])}deregisterRemoveFunc(e){this._removeFuncs.filterInPlace(t=>t[0]!==e)}get size(){return this._size}get maxSize(){return this._maxSize}set maxSize(e){this._maxSize=Math.max(e,0),this._checkSizeLimit()}put(e,t,n,r){const i=this._db.get(e)
if(i&&(this._size-=i.size,this._db.delete(e),i.entry!==t&&this._notifyRemove(e,i.entry,o.ALL)),n>this._maxSize)return void this._notifyRemove(e,t,o.ALL)
if(void 0===t)return void console.warn("Refusing to cache undefined entry ")
if(!n||n<0)return void console.warn("Refusing to cache entry with invalid size "+n)
const s=1+Math.max(r,a)-a
this._db.set(e,{entry:t,size:n,lifetime:s,lives:s}),this._size+=n,this._checkSizeLimit()}updateSize(e,t,n){const i=this._db.get(e)
if(i&&i.entry===t){for(this._size-=i.size;n>this._maxSize;){const i=this._notifyRemove(e,t,o.SOME)
if(!(Object(r.l)(i)&&i>0))return void this._db.delete(e)
n=i}i.size=n,this._size+=n,this._checkSizeLimit()}}pop(e){const t=this._db.get(e)
if(t)return this._size-=t.size,this._db.delete(e),++this._hit,t.entry;++this._miss}get(e){const t=this._db.get(e)
if(void 0!==t)return this._db.delete(e),t.lives=t.lifetime,this._db.set(e,t),++this._hit,t.entry;++this._miss}getStats(){const e={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},t={},n=new Array
this._db.forEach((e,r)=>{const i=e.lifetime
n[i]=(n[i]||0)+e.size,this._users.forAll(n=>{const i=n.namespace
if(r.startsWith(i)){const n=t[i]||0
t[i]=n+e.size}})})
const r={}
this._users.forAll(e=>{const n=e.namespace
if(!isNaN(e.hitRate)&&e.hitRate>0){const i=t[n]||0
t[n]=i,r[n]=Math.round(100*e.hitRate)+"%"}else r[n]="0%"})
const i=Object.keys(t)
i.sort((e,n)=>t[n]-t[e]),i.forEach(n=>e[n]=Math.round(t[n]/2**20)+"MB / "+r[n])
for(let t=n.length-1;t>=0;--t){const r=n[t]
r&&(e["Priority "+(t+a-1)]=Math.round(r/this.size*100)+"%")}return e}resetStats(){this._hit=this._miss=0,this._users.forAll(e=>e.resetHitRate())}clear(e){this._db.forEach((t,n)=>{n.startsWith(e)&&(this._size-=t.size,this._db.delete(n),this._notifyRemove(n,t.entry,o.ALL))})}clearAll(){this._db.forEach((e,t)=>this._notifyRemove(t,e.entry,o.ALL)),this._size=0,this._db.clear()}_getHitRate(){return this._hit/(this._hit+this._miss)}_notifyRemove(e,t,n){let r
return this._removeFuncs.some(i=>{if(e.startsWith(i[0])){const e=i[1](t,n)
return"number"==typeof e&&(r=e),!0}return!1}),r}_checkSizeLimit(){if(!(this._size<=this._maxSize))for(const[e,t]of this._db){if(this._db.delete(e),t.lives<=1){this._size-=t.size
const n=this._notifyRemove(e,t.entry,o.SOME)
Object(r.l)(n)&&n>0&&(this._size+=n,t.lives=t.lifetime,t.size=n,this._db.set(e,t))}else--t.lives,this._db.set(e,t)
if(this._size<=.9*this.maxSize)return}}}},1142:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return l}))
var r=n(1066)
function i(e){return e?e.hasZ?[e.xmax-e.xmin/2,e.ymax-e.ymin/2,e.zmax-e.zmin/2]:[e.xmax-e.xmin/2,e.ymax-e.ymin/2]:null}function a(e){var t
return e?o(e.rings,null!=(t=e.hasZ)&&t):null}function o(e,t){if(!e||!e.length)return null
const n=[],i=[],a=t?[1/0,-1/0,1/0,-1/0,1/0,-1/0]:[1/0,-1/0,1/0,-1/0]
for(let n=0,r=e.length;n<r;n++){const r=s(e[n],t,a)
r&&i.push(r)}if(i.sort((e,n)=>{let r=e[2]-n[2]
return 0===r&&t&&(r=e[4]-n[4]),r}),i.length&&(n[0]=i[0][0],n[1]=i[0][1],t&&(n[2]=i[0][3]),(n[0]<a[0]||n[0]>a[1]||n[1]<a[2]||n[1]>a[3]||t&&(n[2]<a[4]||n[2]>a[5]))&&(n.length=0)),!n.length){const i=e[0]&&e[0].length?function(e,t){const n=t?[0,0,0]:[0,0],i=t?[0,0,0]:[0,0]
let a=0,o=0,s=0,l=0
for(let c=0,u=e.length;c<u-1;c++){const u=e[c],d=e[c+1]
if(u&&d){n[0]=u[0],n[1]=u[1],i[0]=d[0],i[1]=d[1],t&&u.length>2&&d.length>2&&(n[2]=u[2],i[2]=d[2])
const e=Object(r.e)(n,i)
if(e){a+=e
const n=Object(r.f)(u,d)
o+=e*n[0],s+=e*n[1],t&&n.length>2&&(l+=e*n[2])}}}return a>0?t?[o/a,s/a,l/a]:[o/a,s/a]:e.length?e[0]:null}(e[0],t):null
if(!i)return null
n[0]=i[0],n[1]=i[1],t&&i.length>2&&(n[2]=i[2])}return n}function s(e,t,n){let r=0,i=0,a=0,o=0,s=0
const l=e.length?e[0][0]:0,c=e.length?e[0][1]:0,u=e.length&&t?e[0][2]:0
for(let d=0;d<e.length;d++){const f=e[d],h=e[(d+1)%e.length],[p,b,m]=f,y=p-l,g=b-c,[v,O,w]=h,j=v-l,_=O-c,S=y*_-j*g
if(o+=S,r+=(y+j)*S,i+=(g+_)*S,t&&f.length>2&&h.length>2){const e=m-u,t=w-u,n=y*t-j*e
a+=(e+t)*n,s+=n}p<n[0]&&(n[0]=p),p>n[1]&&(n[1]=p),b<n[2]&&(n[2]=b),b>n[3]&&(n[3]=b),t&&(m<n[4]&&(n[4]=m),m>n[5]&&(n[5]=m))}if(o>0&&(o*=-1),s>0&&(s*=-1),!o)return null
o*=.5,s*=.5
const d=[r/(6*o)+l,i/(6*o)+c,o]
return t&&(n[4]===n[5]||0===s?(d[3]=(n[4]+n[5])/2,d[4]=0):(d[3]=a/(6*s)+u,d[4]=s)),d}function l(e){if(!e||!e.rings)return null
const{rings:t}=e
let n=0
for(let e=0;e<t.length;e++)n+=Object(r.i)(t[e])
if(n<1e-6)return o(t,!1)
const i=[0,0],a=t[0][0]
for(let e=0;e<t.length;e++)c(i,a,t[e])
return i[0]*=1/n,i[1]*=1/n,i[0]+=a[0],i[1]+=a[1],i}function c(e,t,n){if(!e||!n||n.length<3)return null
const i=n[0],a=[0,0],o=[n[1][0]-i[0],n[1][1]-i[1]]
let s
for(let t=2;t<n.length;t++)a[0]=n[t][0]-i[0],a[1]=n[t][1]-i[1],s=1/3*.5*(a[0]*o[1]-a[1]*o[0]),e[0]+=s*(o[0]+a[0]),e[1]+=s*(o[1]+a[1]),o[0]=a[0],o[1]=a[1]
const l=Object(r.i)(n),c=[i[0],i[1]]
return c[0]-=t[0],c[1]-=t[1],c[0]*=l,c[1]*=l,e[0]+=c[0],e[1]+=c[1],e}},1143:function(e,t,n){"use strict"
n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return b}))
var r=n(975),i=n(993),a=n(23),o=n(999)
const s=["esri.Color","esri.portal.Portal","esri.symbols.support.Symbol3DAnchorPosition2D","esri.symbols.support.Symbol3DAnchorPosition3D"]
function l(e){return e instanceof r.a}function c(e){return e instanceof i.a?Object.keys(e.items):l(e)?Object(o.a)(e).keys():e?Object.keys(e):[]}function u(e,t){return e instanceof i.a?e.items[t]:e[t]}function d(e){return e?e.declaredClass:null}function f(e,t){if(Object(a.k)(e))return!1
const n=t.split(".")
let r=e
for(const e of n){if("complete"===r.type)return!0
if("partial"!==r.type)return!1
{const t=r.diff[e]
if(!t)return!1
r=t}}return!0}function h(e,t){for(const n of t)if(f(e,n))return!0
return!1}function p(e,t){if(!("function"==typeof e||"function"==typeof t||Object(a.k)(e)&&Object(a.k)(t)))return Object(a.k)(e)||Object(a.k)(t)||"object"==typeof e&&"object"==typeof t&&d(e)!==d(t)?{type:"complete",oldValue:e,newValue:t}:function e(t,n){const r=t.diff
if(r&&"function"==typeof r)return r(t,n)
const i=c(t),o=c(n)
if(0===i.length&&0===o.length)return
if(!i.length||!o.length||function(e,t){return!(!Array.isArray(e)||!Array.isArray(t))&&e.length!==t.length}(t,n))return{type:"complete",oldValue:t,newValue:n}
const f=o.filter(e=>!i.includes(e)),h=i.filter(e=>!o.includes(e)),p=i.filter(e=>o.includes(e)&&u(t,e)!==u(n,e)).concat(f,h).sort(),b=d(t)
if(b&&s.includes(b)&&p.length)return{type:"complete",oldValue:t,newValue:n}
let m
const y=l(t)&&l(n)
for(const i of p){const o=u(t,i),s=u(n,i)
let l
if((y||"function"!=typeof o&&"function"!=typeof s)&&o!==s&&(null!=o||null!=s)){if(r&&r[i]&&"function"==typeof r[i])l=r[i](o,s)
else if(o instanceof Date&&s instanceof Date){if(o.getTime()===s.getTime())continue
l={type:"complete",oldValue:o,newValue:s}}else l="object"==typeof o&&"object"==typeof s&&d(o)===d(s)?e(o,s):{type:"complete",oldValue:o,newValue:s}
Object(a.l)(l)&&(Object(a.l)(m)?m.diff[i]=l:m={type:"partial",diff:{[i]:l}})}}return m}(e,t)}function b(e){if(Object(a.k)(e))return!0
switch(e.type){case"complete":return!1
case"collection":{const t=e
for(const e of t.added)if(!b(e))return!1
for(const e of t.removed)if(!b(e))return!1
for(const e of t.changed)if(!b(e))return!1
return!0}case"partial":for(const t in e.diff)if(!b(e.diff[t]))return!1
return!0}}},1144:function(e,t,n){"use strict"
n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i}))
var r=n(1093)
function i(e){return!!e&&null!=r.a[e]}function a(e){return 1/(r.a[e]||1)}const o=function(){const e=Object.keys(r.a)
return e.sort(),e}()},1146:function(e,t,n){"use strict"
n.d(t,"a",(function(){return a}))
var r=n(374)
const i=["elevation3d.arcgis.com","js.arcgis.com","jsdev.arcgis.com","jsqa.arcgis.com","static.arcgis.com"]
function a(e){const t=Object(r.p)(e,!0)
return!!t&&t.endsWith(".arcgis.com")&&!i.includes(t)&&!e.endsWith("/sharing/rest/generateToken")}},1147:function(e,t,n){"use strict"
n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return d}))
var r=n(995),i=n(446),a=n(23),o=n(1037),s=n(1401),l=n(1241),c=n(1145)
function u(e,t,n,r){const i=h(e,{},{context:r,isLabelSymbol:!1})
Object(a.l)(i)&&(t[n]=i)}function d(e,t,n,r){const i=h(e,{},{context:r,isLabelSymbol:!0})
Object(a.l)(i)&&(t[n]=i)}function f(e){return e instanceof s.a||e instanceof c.a}function h(e,t,n){if(Object(a.k)(e))return null
const{context:r,isLabelSymbol:s}=n,c=null==r?void 0:r.origin,u=null==r?void 0:r.messages
if("web-scene"===c&&!f(e)){const n=Object(l.b)(e,{retainCIM:!0,hasLabelingContext:s})
return Object(a.l)(n.symbol)?n.symbol.write(t,r):(null!=u&&u.push(new i.a("symbol:unsupported",`Symbols of type '${e.declaredClass}' are not supported in scenes. Use 3D symbology instead when working with WebScene and SceneView`,{symbol:e,context:r,error:n.error})),null)}return("web-map"===c||"portal-item"===c&&!Object(o.j)(null==r?void 0:r.layer))&&f(e)?(null!=u&&u.push(new i.a("symbol:unsupported",`Symbols of type '${e.declaredClass}' are not supported in web maps and portal items. Use 2D symbology and CIMSymbol instead when working with MapView`,{symbol:e,context:r})),null):e.write(t,r)}function p(e,t){return Object(r.d)(e,null,t)}},1157:function(e,t,n){"use strict"
n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return f}))
var r=n(1079)
const i=[]
function a(e,t,n,r){return{xmin:e,ymin:t,xmax:n,ymax:r}}function o(e,t,n,r,i,a){return{xmin:e,ymin:t,zmin:n,xmax:r,ymax:i,zmax:a}}function s(e,t,n,r,i,a){return{xmin:e,ymin:t,mmin:n,xmax:r,ymax:i,mmax:a}}function l(e,t,n,r,i,a,o,s){return{xmin:e,ymin:t,zmin:n,mmin:r,xmax:i,ymax:a,zmax:o,mmax:s}}function c(e,t=!1,n=!1){return t?n?l(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]):o(e[0],e[1],e[2],e[3],e[4],e[5]):n?s(e[0],e[1],e[2],e[3],e[4],e[5]):a(e[0],e[1],e[2],e[3])}function u(e){return e?function(e){return void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax}(e)?e:function(e){return void 0!==e.x&&void 0!==e.y}(e)?function(e){const{x:t,y:n,z:r,m:i}=e,c=null!=i
return null!=r?c?l(t,n,r,i,t,n,r,i):o(t,n,r,t,n,r):c?s(t,n,i,t,n,i):a(t,n,t,n)}(e):function(e){return void 0!==e.rings}(e)?d(e):function(e){return void 0!==e.paths}(e)?f(e):function(e){return void 0!==e.points}(e)?function(e){const{hasZ:t,hasM:n,points:a}=e
return c(Object(r.c)(i,a,null!=t&&t,null!=n&&n),t,n)}(e):null:null}function d(e){const{hasZ:t,hasM:n,rings:a}=e,o=Object(r.d)(i,a,null!=t&&t,null!=n&&n)
return o?c(o,t,n):null}function f(e){const{hasZ:t,hasM:n,paths:a}=e,o=Object(r.d)(i,a,null!=t&&t,null!=n&&n)
return o?c(o,t,n):null}},1158:function(e,t,n){"use strict"
n.d(t,"a",(function(){return h}))
var r,i=n(968),a=n(990),o=n(234),s=n(970),l=n(971),c=n(979),u=n(969),d=n(1094)
let f=r=class extends d.a{constructor(e){super(e),this.algorithm=null,this.fromColor=null,this.toColor=null,this.type="algorithmic"}clone(){return new r({fromColor:Object(o.a)(this.fromColor),toColor:Object(o.a)(this.toColor),algorithm:this.algorithm})}}
Object(i.a)([Object(c.a)({esriCIELabAlgorithm:"cie-lab",esriHSVAlgorithm:"hsv",esriLabLChAlgorithm:"lab-lch"})],f.prototype,"algorithm",void 0),Object(i.a)([Object(s.b)({type:a.a,json:{type:[l.a],write:!0}})],f.prototype,"fromColor",void 0),Object(i.a)([Object(s.b)({type:a.a,json:{type:[l.a],write:!0}})],f.prototype,"toColor",void 0),Object(i.a)([Object(s.b)({type:["algorithmic"]})],f.prototype,"type",void 0),f=r=Object(i.a)([Object(u.a)("esri.rest.support.AlgorithmicColorRamp")],f)
const h=f},1159:function(e,t,n){"use strict"
n.d(t,"a",(function(){return c}))
var r,i=n(968),a=n(970),o=(n(971),n(445),n(969)),s=n(1086)
let l=r=class extends s.a{constructor(){super(...arguments),this.showLegend=null}clone(){return new r({title:this.title,showLegend:this.showLegend})}}
Object(i.a)([Object(a.b)({type:Boolean,json:{write:!0}})],l.prototype,"showLegend",void 0),l=r=Object(i.a)([Object(o.a)("esri.renderers.visualVariables.support.VisualVariableLegendOptions")],l)
const c=l},1166:function(e,t,n){"use strict"
n.d(t,"a",(function(){return r}))
const r=function(e){return{setTimeout:(t,n)=>{const r=e.setTimeout(t,n)
return{remove:()=>e.clearTimeout(r)}}}}(globalThis)},1168:function(e,t,n){"use strict"
n.d(t,"a",(function(){return O}))
var r,i=n(968),a=n(976),o=n(972),s=n(23),l=n(970),c=(n(971),n(445),n(977)),u=n(969),d=n(974),f=n(989)
let h=r=class extends o.a{constructor(e){super(e)}async collectRequiredFields(e,t){return Object(f.a)(e,t,this.expression)}clone(){return new r({expression:this.expression,title:this.title})}equals(e){return this.expression===e.expression&&this.title===e.title}}
Object(i.a)([Object(l.b)({type:String,json:{write:!0}})],h.prototype,"expression",void 0),Object(i.a)([Object(l.b)({type:String,json:{write:!0}})],h.prototype,"title",void 0),h=r=Object(i.a)([Object(u.a)("esri.layers.support.FeatureExpressionInfo")],h)
const p=h
var b,m=n(1144)
const y=Object(a.b)()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),g=new a.a({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"})
let v=b=class extends o.a{constructor(e){super(e),this.offset=null}readFeatureExpressionInfo(e,t){return null!=e?e:t.featureExpression&&0===t.featureExpression.value?{expression:"0"}:void 0}writeFeatureExpressionInfo(e,t,n,r){t[n]=e.write({},r),"0"===e.expression&&(t.featureExpression={value:0})}get mode(){const{offset:e,featureExpressionInfo:t}=this
return this._isOverridden("mode")?this._get("mode"):Object(s.l)(e)||t?"relative-to-ground":"on-the-ground"}set mode(e){this._override("mode",e)}set unit(e){this._set("unit",e)}write(e,t){return this.offset||this.mode||this.featureExpressionInfo||this.unit?super.write(e,t):null}clone(){return new b({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})}equals(e){return this.mode===e.mode&&this.offset===e.offset&&this.unit===e.unit&&Object(s.g)(this.featureExpressionInfo,e.featureExpressionInfo)}}
Object(i.a)([Object(l.b)({type:p,json:{write:!0}})],v.prototype,"featureExpressionInfo",void 0),Object(i.a)([Object(c.a)("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],v.prototype,"readFeatureExpressionInfo",null),Object(i.a)([Object(d.a)("featureExpressionInfo",{featureExpressionInfo:{type:p},"featureExpression.value":{type:[0]}})],v.prototype,"writeFeatureExpressionInfo",null),Object(i.a)([Object(l.b)({type:y.apiValues,nonNullable:!0,json:{type:y.jsonValues,read:y.read,write:{writer:y.write,isRequired:!0}}})],v.prototype,"mode",null),Object(i.a)([Object(l.b)({type:Number,json:{write:!0}})],v.prototype,"offset",void 0),Object(i.a)([Object(l.b)({type:m.b,json:{type:String,read:g.read,write:g.write}})],v.prototype,"unit",null),v=b=Object(i.a)([Object(u.a)("esri.layers.support.ElevationInfo")],v)
const O=v},1169:function(e,t,n){"use strict"
n.d(t,"a",(function(){return d}))
var r,i=n(968),a=n(446),o=n(970),s=(n(971),n(445),n(969)),l=n(974),c=n(1040)
let u=r=class extends c.a{constructor(e){super(e),this.axis=null,this.type="rotation",this.rotationType="geographic",this.valueExpressionTitle=null}get cache(){return{hasExpression:!!this.valueExpression,compiledFunc:null}}writeValueExpressionTitleWebScene(e,t,n,r){if(r&&r.messages){const e=`visualVariables[${this.index}]`
r.messages.push(new a.a("property:unsupported",this.type+"VisualVariable.valueExpressionTitle is not supported in Web Scene. Please remove this property to save the Web Scene.",{instance:this,propertyName:e+".valueExpressionTitle",context:r}))}}clone(){return new r({axis:this.axis,rotationType:this.rotationType,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,legendOptions:this.legendOptions&&this.legendOptions.clone()})}}
Object(i.a)([Object(o.b)({readOnly:!0})],u.prototype,"cache",null),Object(i.a)([Object(o.b)({type:["heading","tilt","roll"],json:{origins:{"web-scene":{default:"heading",write:!0}}}})],u.prototype,"axis",void 0),Object(i.a)([Object(o.b)({type:["rotation"],json:{type:["rotationInfo"]}})],u.prototype,"type",void 0),Object(i.a)([Object(o.b)({type:["geographic","arithmetic"],json:{write:!0,origins:{"web-document":{write:!0,default:"geographic"}}}})],u.prototype,"rotationType",void 0),Object(i.a)([Object(o.b)({type:String,json:{write:!0}})],u.prototype,"valueExpressionTitle",void 0),Object(i.a)([Object(l.a)("web-scene","valueExpressionTitle")],u.prototype,"writeValueExpressionTitleWebScene",null),u=r=Object(i.a)([Object(s.a)("esri.renderers.visualVariables.RotationVariable")],u)
const d=u},1178:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
var r=n(1006)
function i(e,t,n){t.keys().forEach(e=>{n.set(e,t.get(e),r.a.DEFAULTS)})
const i=e.metadatas
Object.keys(i).forEach(t=>{e.internalGet(t)&&n.set(t,e.internalGet(t),r.a.DEFAULTS)})}},1180:function(e,t,n){"use strict"
n.d(t,"a",(function(){return h}))
var r,i=n(968),a=n(990),o=n(972),s=n(233),l=n(970),c=n(987),u=(n(445),n(969)),d=n(971)
let f=r=class extends o.a{constructor(e){super(e),this.color=null,this.field=null,this.label=null,this.valueExpression=null,this.valueExpressionTitle=null}castField(e){return null==e?e:"function"==typeof e?(s.a.getLogger(this.declaredClass).error(".field: field must be a string value"),null):Object(d.l)(e)}getAttributeHash(){return`${this.field}-${this.valueExpression}`}clone(){return new r({color:this.color&&this.color.clone(),field:this.field,label:this.label,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}}
Object(i.a)([Object(l.b)({type:a.a,json:{type:[Number],write:!0}})],f.prototype,"color",void 0),Object(i.a)([Object(l.b)({type:String,json:{write:!0}})],f.prototype,"field",void 0),Object(i.a)([Object(c.a)("field")],f.prototype,"castField",null),Object(i.a)([Object(l.b)({type:String,json:{write:!0}})],f.prototype,"label",void 0),Object(i.a)([Object(l.b)({type:String,json:{write:!0}})],f.prototype,"valueExpression",void 0),Object(i.a)([Object(l.b)({type:String,json:{write:!0}})],f.prototype,"valueExpressionTitle",void 0),f=r=Object(i.a)([Object(u.a)("esri.renderers.support.AttributeColorInfo")],f)
const h=f},1181:function(e,t,n){"use strict"
n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return b})),n.d(t,"e",(function(){return p}))
var r=n(771),i=n(446),a=n(23),o=n(973),s=n(374),l=n(1028),c=n(1466),u=n(1219)
let d={}
function f(e,t,n){return e&&Object(a.l)(e.styleUrl)?async function(e,t){try{return{data:(await b(e,t)).data,baseUrl:Object(s.L)(e),styleUrl:e}}catch(e){return Object(o.p)(e),null}}(e.styleUrl,n):e&&Object(a.l)(e.styleName)?function(e,t,n){const r=Object(a.l)(t.portal)?t.portal:l.a.getDefault()
let o
const s=`${r.url} - ${r.user&&r.user.username} - ${e}`
return d[s]||(d[s]=function(e,t,n){return t.load(n).then(()=>{const r=new c.a({disableExtraQuery:!0,query:`owner:${m} AND type:${y} AND typekeywords:"${e}"`})
return t.queryItems(r,n)}).then(({results:t})=>{let r=null
const a=e.toLowerCase()
if(t&&Array.isArray(t))for(const e of t){var o
if((null==(o=e.typeKeywords)?void 0:o.some(e=>e.toLowerCase()===a))&&e.type===y&&e.owner===m){r=e
break}}if(!r)throw new i.a("symbolstyleutils:style-not-found",`The style '${e}' could not be found`,{styleName:e})
return r.load(n)})}(e,r,n).then(e=>(o=e,e.fetchData())).then(t=>{var n
return{data:t,baseUrl:null!=(n=o.itemUrl)?n:"",styleName:e}})),d[s]}(e.styleName,t,n):Promise.reject(new i.a("symbolstyleutils:style-url-and-name-missing","Either styleUrl or styleName is required to resolve a style"))}function h(e){return null===e||"CIMSymbolReference"===e.type?e:{type:"CIMSymbolReference",symbol:e}}function p(e,t){if("cimRef"===t)return e.cimRef
if(e.formatInfos&&!Object(u.b)())for(const t of e.formatInfos)if("gltf"===t.type)return t.href
return e.webRef}function b(e,t){const n={responseType:"json",query:{f:"json"},...t}
return Object(r.default)(Object(s.I)(e),n)}const m="esri_en",y="Style",g="https://cdn.arcgis.com/sharing/rest/content/items/220936cc6ed342c9937abd8f180e7d1e/resources/styles/cim/{SymbolName}.json?f=json"},1183:function(e,t,n){"use strict"
n.d(t,"a",(function(){return u}))
var r,i=n(968),a=n(972),o=n(980),s=n(970),l=(n(971),n(445),n(969))
let c=r=class extends a.a{constructor(e){super(e),this.label=null,this.size=null,this.value=null}clone(){return new r({label:this.label,size:this.size,value:this.value})}}
Object(i.a)([Object(s.b)({type:String,json:{write:!0}})],c.prototype,"label",void 0),Object(i.a)([Object(s.b)({type:Number,cast:o.k,json:{write:!0}})],c.prototype,"size",void 0),Object(i.a)([Object(s.b)({type:Number,json:{write:!0}})],c.prototype,"value",void 0),c=r=Object(i.a)([Object(l.a)("esri.renderers.visualVariables.support.SizeStop")],c)
const u=c},1188:function(e,t,n){"use strict"
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
for(r=112e3;r<=112101;r++)i[r]=0},1189:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
var r=n(1141)
class i{constructor(e,t){this._storage=new r.c,this._storage.maxSize=e,t&&this._storage.registerRemoveFunc("",t)}put(e,t,n){this._storage.put(e,t,n,1)}pop(e){return this._storage.pop(e)}get(e){return this._storage.get(e)}clear(){this._storage.clearAll()}destroy(){this._storage.destroy()}get maxSize(){return this._storage.maxSize}set maxSize(e){this._storage.maxSize=e}}},1191:function(e,t,n){"use strict"
n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return y})),n.d(t,"c",(function(){return _})),n.d(t,"d",(function(){return j})),n.d(t,"e",(function(){return x})),n.d(t,"f",(function(){return S})),n.d(t,"g",(function(){return m})),n.d(t,"h",(function(){return b})),n.d(t,"i",(function(){return h})),n.d(t,"j",(function(){return p})),n.d(t,"k",(function(){return E}))
var r=n(990),i=n(995),a=n(1034),o=(n(235),n(23)),s=n(980),l=n(981),c=n(1134),u=n(1275),d=n(1666)
const f=new r.a("white")
function h(e){var t
if(!e)return 0
if(Object(i.c)(e)){const t=function(e){const t=e.symbolLayers&&e.symbolLayers.length
if(!t)return
const n=e.symbolLayers.getItemAt(t-1)
return"outline"in n?Object(o.j)(n,"outline","size"):void 0}(e)
return Object(o.l)(t)?t:0}return Object(s.i)(null==(t=Object(u.e)(e))?void 0:t.width)}function p(e){if(Object(o.k)(e)||!("symbolLayers"in e)||Object(o.k)(e.symbolLayers))return!1
switch(e.type){case"point-3d":return e.symbolLayers.some(e=>"object"===e.type)
case"line-3d":return e.symbolLayers.some(e=>"path"===e.type)
case"polygon-3d":return e.symbolLayers.some(e=>"object"===e.type||"extrude"===e.type)
default:return!1}}function b(e){return Object(o.w)(e.resource).href}function m(e,t){if(!e)return null
let n=null
return Object(i.c)(e)?n=function(e){const t=e.symbolLayers
if(!t)return null
let n=null
return t.forEach(e=>{var t
"object"===e.type&&null!=(null==(t=e.resource)?void 0:t.href)||(n="water"===e.type?Object(o.u)(e.color):Object(o.l)(e.material)?Object(o.u)(e.material.color):null)}),n?new r.a(n):null}(e):Object(i.b)(e)&&(n=e.color?new r.a(e.color):null),n?y(n,t):null}function y(e,t){if(null==t||null==e)return e
const n=e.toRgba()
return n[3]=n[3]*t,new r.a(n)}function g(e,t,n){var a,s,l,c
e&&(t||null!=n)&&(t&&(t=new r.a(t)),Object(i.c)(e)?function(e,t,n){const r=e.symbolLayers
if(!r)return
const i=e=>{var r,i
const a=Object(o.l)(e)?e:null
return y(t=null!=(r=null!=(i=t)?i:a)?r:null!=n?f:null,n)}
r.forEach(e=>{var r
if("object"!==e.type||null==(null==(r=e.resource)?void 0:r.href)||t)if("water"===e.type)e.color=i(e.color)
else{const t=Object(o.l)(e.material)?e.material.color:null,r=i(t)
Object(o.k)(e.material)?e.material=new d.a({color:r}):e.material.color=r,null!=n&&"outline"in e&&Object(o.l)(e.outline)&&Object(o.l)(e.outline.color)&&(e.outline.color=y(e.outline.color,n))}})}(e,t,n):Object(i.b)(e)&&(a=e,l=n,(s=null!=(c=s=t)?c:a.color)&&(a.color=y(s,l)),null!=l&&"outline"in a&&a.outline&&a.outline.color&&(a.outline.color=y(a.outline.color,l))))}function v(e){for(const t of e)if("number"==typeof t)return t
return null}function O(e,t,n){for(let r=0;r<3;r++){const i=e[r]
switch(i){case"symbol-value":{const e=n[r]
return null!=e?e/t[r]:1}case"proportional":break
default:if(i&&t[r])return i/t[r]}}return 1}function w(e,t,n,r){switch(e){case"proportional":return n*r
case"symbol-value":return null!=t?t:n
default:return e}}async function j(e,t){if(e&&t)return Object(i.c)(e)?async function(e,t){const r=e.symbolLayers
r&&await Object(a.c)(r,async e=>async function(e,t){switch(e.type){case"extrude":!function(e,t){e.size="number"==typeof t[2]?t[2]:0}(e,t)
break
case"icon":case"line":case"text":!function(e,t){const n=v(t)
Object(o.l)(n)&&(e.size=n)}(e,t)
break
case"path":!function(e,t){const n=O(t,l.a,[e.width,void 0,e.height])
e.width=w(t[0],e.width,1,n),e.height=w(t[2],e.height,1,n)}(e,t)
break
case"object":await async function(e,t){const{resourceSize:r,symbolSize:i}=await async function(e){const t=await n.e(771).then(n.bind(null,1802)),r=await t.computeObjectLayerResourceSize(e,10),{width:i,height:a,depth:o}=e,s=[i,o,a]
let l=1
for(let e=0;e<3;e++){const t=s[e]
if(null!=t){l=t/r[e]
break}}for(let e=0;e<3;e++)null==s[e]&&(s[e]=r[e]*l)
return{resourceSize:r,symbolSize:s}}(e),a=O(t,r,i)
e.width=w(t[0],i[0],r[0],a),e.depth=w(t[1],i[1],r[1],a),e.height=w(t[2],i[2],r[2],a)}(e,t)}}(e,t))}(e,t):void(Object(i.b)(e)&&function(e,t){const n=v(t)
if(!Object(o.k)(n))switch(e.type){case"simple-marker":e.size=n
break
case"picture-marker":{const t=e.width/e.height
t>1?(e.width=n,e.height=n*t):(e.width=n*t,e.height=n)
break}case"simple-line":e.width=n
break
case"text":e.font.size=n}}(e,t))}function _(e,t,n){if(e&&null!=t)if(Object(i.c)(e)){const r=e.symbolLayers
r&&r.forEach(e=>{if(e&&"object"===e.type)switch(n){case"tilt":e.tilt=t
break
case"roll":e.roll=t
break
default:e.heading=t}})}else Object(i.b)(e)&&("simple-marker"!==e.type&&"picture-marker"!==e.type&&"text"!==e.type||(e.angle=t))}function S(e){if(!e)return null
const t=e.effects.filter(e=>"bloom"!==e.type).map(e=>e.toJSON())
return Object(c.a)(t)}function E(e){return Object(o.l)(e)&&"polygon-3d"===e.type&&e.symbolLayers.some(e=>"extrude"===e.type)}async function x(e,t){return await e.fetchSymbol(t)||e.fetchCIMSymbol(t)}},1192:function(e,t,n){"use strict"
function r(){const e=new Float32Array(6)
return e[0]=1,e[3]=1,e}function i(e,t,n,r){const i=t[r],a=t[r+1]
e[r]=n[0]*i+n[2]*a+n[4],e[r+1]=n[1]*i+n[3]*a+n[5]}function a(e,t,n,r=0,a=0,o=2){const s=a||t.length/o
for(let a=r;a<s;a++)i(e,t,n,a*o)}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),Object.freeze(Object.defineProperty({__proto__:null,clone:function(e){const t=new Float32Array(6)
return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t},create:r,createView:function(e,t){return new Float32Array(e,t,6)},fromValues:function(e,t,n,r,i,a){const o=new Float32Array(6)
return o[0]=e,o[1]=t,o[2]=n,o[3]=r,o[4]=i,o[5]=a,o},transform:i,transformMany:a},Symbol.toStringTag,{value:"Module"}))},1198:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return a}))
var r=n(23)
async function i(e,t){const{WhereClause:r}=await Promise.all([n.e(9),n.e(33),n.e(750)]).then(n.bind(null,1363))
return r.create(e,t)}function a(e,t){return Object(r.l)(e)?Object(r.l)(t)?`(${e}) AND (${t})`:e:t}},1203:function(e,t,n){"use strict"
n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return p})),n.d(t,"f",(function(){return l})),n.d(t,"g",(function(){return d})),n.d(t,"h",(function(){return c}))
var r=n(991),i=n(980),a=n(1012),o=n(1011)
const s=2.4
function l(e){return Object(i.i)(e*s)}function c(e){return Object(i.h)(e)/s}function u(e,t,n,i){let{color:o,ratio:s}=t,{color:l,ratio:c}=n
if(c===s){const e=1e-6
1===c?s-=e:c+=e}const u=Object(r.f)((i-s)/(c-s),0,1)
Object(a.j)(e,o.toArray(),l.toArray(),u)}function d(e){const t=new Uint8ClampedArray(2048)
if((e=e.filter(({ratio:e})=>e>=0&&e<=1).sort((e,t)=>e.ratio-t.ratio).map(({color:e,ratio:t})=>({color:e,ratio:Math.max(t,.001)}))).length<1)return t
let n=e[0],r=e[0],i=1
const a=Object(o.e)()
for(let o=0;o<512;o++){const s=(o+.5)/512
for(;s>r.ratio&&i<e.length;)n=r,r=e[i++]
u(a,n,r,s),t.set(a,4*o)}return t}function f(e,t,n,r){const{radius:a,fieldOffset:o,field:s}=t,l=Math.round(Object(i.h)(a)),c=new Float64Array(n*r)
let u,d=Number.NEGATIVE_INFINITY
const f=function(e,t){return null!=e?"string"==typeof t?t=>-1*+t.readAttribute(e):n=>+n.readAttribute(e)+t:e=>1}(s,o),h=new Set
for(const t of e){const e=t.getCursor()
for(;e.next();){const t=e.getObjectId()
if(h.has(t))continue
h.add(t)
const i=e.readLegacyPointGeometry(),a=128
if(i.x<-a||i.x>=n+a||i.y<-a||i.y>r+a)continue
const o=+f(e),s=Math.max(0,Math.round(i.x)-l),b=Math.max(0,Math.round(i.y)-l),m=Math.min(r,Math.round(i.y)+l),y=Math.min(n,Math.round(i.x)+l)
for(let e=b;e<m;e++)for(let t=s;t<y;t++){const r=e*n+t,a=p(i.x-t,i.y-e,l)
u=c[r]+=a*o,u>d&&(d=u)}}}return{matrix:c.buffer,max:d}}function h(e,t,n,i,a,o){e.canvas.width=e.canvas.height=t,e.clearRect(0,0,t,t)
const s=e.getImageData(0,0,t,t)
n&&i&&s.data.set(new Uint8ClampedArray(function(e,t,n,i,a){const o=new Uint32Array(e*e),s="buffer"in t?t:new Float64Array(t),l="buffer"in n?new Uint32Array(n.buffer):new Uint32Array(new Uint8Array(n).buffer),c=l.length/(a-i)
for(let e=0;e<s.length;e++){const t=s[e],n=Math.floor((t-i)*c)
o[e]=l[Object(r.f)(n,0,l.length-1)]}return o.buffer}(t,n,i,a,o))),e.putImageData(s,0,0)}function p(e,t,n){const r=Math.sqrt(e**2+t**2)/n
return r>1?0:3/(Math.PI*n**2)*(1-r**2)**2}function b(e,t){return"function"==typeof e?e:e?"string"==typeof t?t=>-1*+t[e]:n=>+n[e]+t:()=>1}},1205:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
var r=n(998)
function i(){return function(e,t){if(!e[t])throw new TypeError(`Cannot auto bind undefined function '${t}'`)
return{value:a(e[t])}}}function a(e){return function(t,...n){!function(e){const t=null==e?void 0:e.type
return e instanceof KeyboardEvent||"keyup"===t||"keydown"===t||"keypress"===t}(t)?e.call(this,t,...n):Object(r.d)(t.key)&&(t.preventDefault(),t.stopPropagation(),t.target.click())}}},1210:function(e,t,n){"use strict"
n.d(t,"a",(function(){return f}))
var r,i=n(968),a=n(990),o=n(972),s=n(970),l=n(971),c=(n(445),n(969)),u=n(974)
let d=r=class extends o.a{constructor(e){super(e),this.color=null,this.label=null,this.value=null}writeValue(e,t,n){t[n]=null!=e?e:0}clone(){return new r({color:this.color&&this.color.clone(),label:this.label,value:this.value})}}
Object(i.a)([Object(s.b)({type:a.a,json:{type:[l.a],write:!0}})],d.prototype,"color",void 0),Object(i.a)([Object(s.b)({type:String,json:{write:!0}})],d.prototype,"label",void 0),Object(i.a)([Object(s.b)({type:Number,json:{write:{writerEnsuresNonNull:!0}}})],d.prototype,"value",void 0),Object(i.a)([Object(u.a)("value")],d.prototype,"writeValue",null),d=r=Object(i.a)([Object(c.a)("esri.renderers.visualVariables.support.ColorStop")],d)
const f=d},1211:function(e,t,n){"use strict"
n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o}))
const r="calcite-mode-"
function i(){return getComputedStyle(document.body).getPropertyValue("--esri-calcite-mode-name").replace(/\s|'|"/g,"").startsWith("dark")}function a(){return`${r}${i()?"dark":"light"}`}function o(e){(function(e){Array.from(e.classList).forEach(t=>{t.startsWith(r)&&e.classList.remove(t)})})(e),e.classList.add(a())}},1212:function(e,t,n){"use strict"
n.d(t,"a",(function(){return u}))
var r,i,a=n(1162),o=n(446),s=n(1131),l=(n(1111),n(1122)),c={}
function u(e){if(!e||0===e.length)return null
if("string"==typeof e){const t=d(e)
return t&&0!==t.length?t:null}const t=e.map(e=>{if(!Number.isFinite(e.scale)||e.scale<=0)throw new o.a("effect:invalid-scale","scale must be finite and greater than 0",{stop:e})
return{scale:e.scale,effects:d(e.value)}})
t.sort((e,t)=>t.effects.length-e.effects.length)
for(let e=0;e<t.length-1;e++){if(!Object(l.a)(t[e].effects,t[e+1].effects))throw new o.a("effect:interpolation-impossible","Cannot interpolate by scale between 2 lists of mixed effects",{a:t[e].effects,b:t[e+1].effects})
Object(l.c)(t[e].effects,t[e+1].effects)}return t.sort((e,t)=>t.scale-e.scale),t}function d(e){let t
if(!e)return[]
try{t=c.parse(e)}catch(t){throw new o.a("effect:invalid-syntax","Invalid effect syntax",{value:e,error:t})}return t.map(e=>function(e){try{switch(e.name){case"grayscale":case"sepia":case"saturate":case"invert":case"brightness":case"contrast":return function(e){let t=1
return f(e.parameters,1),1===e.parameters.length&&(t=y(e.parameters[0])),new s.c(e.name,t)}(e)
case"opacity":return function(e){let t=1
return f(e.parameters,1),1===e.parameters.length&&(t=y(e.parameters[0])),new s.f(t)}(e)
case"hue-rotate":return function(e){let t=0
return f(e.parameters,1),1===e.parameters.length&&(t=function(e){return function(e){if("quantity"!==e.type||!(0===e.value&&null===e.unit||e.unit&&null!=b[e.unit]))throw new o.a("effect:type-error","Expected <angle>, Actual: "+h(e),{term:e})}(e),e.value*b[e.unit]||0}(e.parameters[0])),new s.e(t)}(e)
case"blur":return function(e){let t=0
return f(e.parameters,1),1===e.parameters.length&&(t=g(e.parameters[0]),p(t,e.parameters[0])),new s.b(t)}(e)
case"drop-shadow":return function(e){const t=[]
let n=null
for(const r of e.parameters)if("color"===r.type){if(t.length&&Object.freeze(t),n)throw new o.a("effect:type-error","Accepts only one color",{})
n=v(r)}else{const e=g(r)
if(Object.isFrozen(t))throw new o.a("effect:type-error","<length> parameters not consecutive",{lengths:t})
t.push(e),3===t.length&&p(e,r)}if(t.length<2||t.length>3)throw new o.a("effect:type-error",`Expected <length>{2,3}, Actual: <length>{${t.length}}`,{lengths:t})
return new s.d(t[0],t[1],t[2]||0,n||O("black"))}(e)
case"bloom":return function(e){let t=1,n=0,r=0
return f(e.parameters,3),e.parameters[0]&&(t=y(e.parameters[0])),e.parameters[1]&&(n=g(e.parameters[1]),p(n,e.parameters[1])),e.parameters[2]&&(r=y(e.parameters[2])),new s.a(t,n,r)}(e)}}catch(t){throw t.details.filter=e,t}throw new o.a("effect:unknown-effect",`Effect '${e.name}' is not supported`,{effect:e})}(e))}function f(e,t){if(e.length>t)throw new o.a("effect:type-error",`Function supports up to ${t} parameters, Actual: ${e.length}`,{parameters:e})}function h(e){if("color"===e.type)return"<color>"
if(e.unit){if(m[e.unit])return"<length>"
if(b[e.unit])return"<angle>"
if("%"===e.unit)return"<percentage>"}return"<double>"}function p(e,t){if(e<0)throw new o.a("effect:type-error","Negative values are not allowed, Actual: "+e,{term:t})}i=function(){function e(t,n,r,i){var a=Error.call(this,t)
return Object.setPrototypeOf&&Object.setPrototypeOf(a,e.prototype),a.expected=n,a.found=r,a.location=i,a.name="SyntaxError",a}function t(e,t,n){return n=n||" ",e.length>t?e:(t-=e.length,e+(n+=n.repeat(t)).slice(0,t))}return function(e,t){function n(){this.constructor=e}n.prototype=t.prototype,e.prototype=new n}(e,Error),e.prototype.format=function(e){var n="Error: "+this.message
if(this.location){var r,i=null
for(r=0;r<e.length;r++)if(e[r].source===this.location.source){i=e[r].text.split(/\r\n|\n|\r/g)
break}var a=this.location.start,o=this.location.source+":"+a.line+":"+a.column
if(i){var s=this.location.end,l=t("",a.line.toString().length," "),c=i[a.line-1],u=(a.line===s.line?s.column:c.length+1)-a.column||1
n+="\n --\x3e "+o+"\n"+l+" |\n"+a.line+" | "+c+"\n"+l+" | "+t("",a.column-1," ")+t("",u,"^")}else n+="\n at "+o}return n},e.buildMessage=function(e,t){var n={literal:function(e){return'"'+i(e.text)+'"'},class:function(e){var t=e.parts.map((function(e){return Array.isArray(e)?a(e[0])+"-"+a(e[1]):a(e)}))
return"["+(e.inverted?"^":"")+t.join("")+"]"},any:function(){return"any character"},end:function(){return"end of input"},other:function(e){return e.description}}
function r(e){return e.charCodeAt(0).toString(16).toUpperCase()}function i(e){return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return"\\x0"+r(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return"\\x"+r(e)}))}function a(e){return e.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return"\\x0"+r(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return"\\x"+r(e)}))}function o(e){return n[e.type](e)}return"Expected "+function(e){var t,n,r=e.map(o)
if(r.sort(),r.length>0){for(t=1,n=1;t<r.length;t++)r[t-1]!==r[t]&&(r[n]=r[t],n++)
r.length=n}switch(r.length){case 1:return r[0]
case 2:return r[0]+" or "+r[1]
default:return r.slice(0,-1).join(", ")+", or "+r[r.length-1]}}(e)+" but "+function(e){return e?'"'+i(e)+'"':"end of input"}(t)+" found."},{SyntaxError:e,parse:function(t,n){var r,i={},a=(n=void 0!==n?n:{}).grammarSource,o={start:se},s=se,l="none",c="grad",u="turn",d=/^[ \t\n\r]/,f=/^[a-z\-]/,h=/^[0-9a-fA-F]/,p=/^[+\-]/,b=/^[0-9]/,m=re("none"),y=te("none",!1),g=te(")",!1),v=te(",",!1),O=re("whitespace"),w=ne([" ","\t","\n","\r"],!1,!1),j=re("function"),_=te("(",!1),S=re("identifier"),E=ne([["a","z"],"-"],!1,!1),x=re("percentage"),I=te("%",!1),C=re("length"),L=te("px",!1),M=te("cm",!1),A=te("mm",!1),T=te("in",!1),R=te("pt",!1),k=te("pc",!1),P=re("angle"),N=te("deg",!1),D=te("rad",!1),V=te("grad",!1),F=te("turn",!1),z=re("number"),U=re("color"),$=te("#",!1),G=ne([["0","9"],["a","f"],["A","F"]],!1,!1),q=ne(["+","-"],!1,!1),B=ne([["0","9"]],!1,!1),H=te(".",!1),W=te("e",!1),Z=0,Y=0,J=[{line:1,column:1}],X=0,K=[],Q=0
if("startRule"in n){if(!(n.startRule in o))throw new Error("Can't start parsing from rule \""+n.startRule+'".')
s=o[n.startRule]}function ee(){return t.substring(Y,Z)}function te(e,t){return{type:"literal",text:e,ignoreCase:t}}function ne(e,t,n){return{type:"class",parts:e,inverted:t,ignoreCase:n}}function re(e){return{type:"other",description:e}}function ie(e){var n,r=J[e]
if(r)return r
for(n=e-1;!J[n];)n--
for(r={line:(r=J[n]).line,column:r.column};n<e;)10===t.charCodeAt(n)?(r.line++,r.column=1):r.column++,n++
return J[e]=r,r}function ae(e,t){var n=ie(e),r=ie(t)
return{source:a,start:{offset:e,line:n.line,column:n.column},end:{offset:t,line:r.line,column:r.column}}}function oe(e){Z<X||(Z>X&&(X=Z,K=[]),K.push(e))}function se(){var e
return(e=function(){var e,n
return Q++,e=Z,ue(),t.substr(Z,4)===l?(n=l,Z+=4):(n=i,0===Q&&oe(y)),n!==i?(ue(),Y=e,e=[]):(Z=e,e=i),Q--,e===i&&0===Q&&oe(m),e}())===i&&(e=function(){var e,t
if(e=[],(t=le())!==i)for(;t!==i;)e.push(t),t=le()
else e=i
return e}()),e}function le(){var e,n,r,a
return e=Z,ue(),(n=function(){var e,n,r
return Q++,e=Z,(n=de())!==i?(40===t.charCodeAt(Z)?(r="(",Z++):(r=i,0===Q&&oe(_)),r!==i?(Y=e,e=n):(Z=e,e=i)):(Z=e,e=i),Q--,e===i&&(n=i,0===Q&&oe(j)),e}())!==i?(ue(),(r=function(){var e,n,r,a,o,s,l,c
if(e=Z,(n=ce())!==i){for(r=[],a=Z,o=ue(),44===t.charCodeAt(Z)?(s=",",Z++):(s=i,0===Q&&oe(v)),s===i&&(s=null),l=ue(),(c=ce())!==i?a=o=[o,s,l,c]:(Z=a,a=i);a!==i;)r.push(a),a=Z,o=ue(),44===t.charCodeAt(Z)?(s=",",Z++):(s=i,0===Q&&oe(v)),s===i&&(s=null),l=ue(),(c=ce())!==i?a=o=[o,s,l,c]:(Z=a,a=i)
Y=e,e=function(e,t){return t.length>0?function(e,t,n){return[e].concat(function(e,t){return e.map((function(e){return e[3]}))}(t))}(e,t):[e]}(n,r)}else Z=e,e=i
return e}())===i&&(r=null),ue(),41===t.charCodeAt(Z)?(a=")",Z++):(a=i,0===Q&&oe(g)),a!==i?(ue(),Y=e,e=function(e,t){return{type:"function",name:e,parameters:t||[]}}(n,r)):(Z=e,e=i)):(Z=e,e=i),e}function ce(){var e,t
return e=Z,(t=fe())===i&&(t=he())===i&&(t=pe())===i&&(t=function(){var e,t
return Q++,e=Z,ue(),(t=me())!==i?(Y=e,e=function(e){return{value:e,unit:null}}(t)):(Z=e,e=i),Q--,e===i&&0===Q&&oe(z),e}()),t!==i&&(Y=e,t=function(e){return{type:"quantity",value:e.value,unit:e.unit}}(t)),(e=t)===i&&(e=Z,(t=be())!==i&&(Y=e,t=function(e){return{type:"color",colorType:e.type,value:e.value}}(t)),e=t),e}function ue(){var e,n
for(Q++,e=[],d.test(t.charAt(Z))?(n=t.charAt(Z),Z++):(n=i,0===Q&&oe(w));n!==i;)e.push(n),d.test(t.charAt(Z))?(n=t.charAt(Z),Z++):(n=i,0===Q&&oe(w))
return Q--,n=i,0===Q&&oe(O),e}function de(){var e,n,r
if(Q++,e=Z,n=[],f.test(t.charAt(Z))?(r=t.charAt(Z),Z++):(r=i,0===Q&&oe(E)),r!==i)for(;r!==i;)n.push(r),f.test(t.charAt(Z))?(r=t.charAt(Z),Z++):(r=i,0===Q&&oe(E))
else n=i
return n!==i&&(Y=e,n=ee()),Q--,(e=n)===i&&(n=i,0===Q&&oe(S)),e}function fe(){var e,n,r
return Q++,e=Z,ue(),(n=me())!==i?(37===t.charCodeAt(Z)?(r="%",Z++):(r=i,0===Q&&oe(I)),r!==i?(Y=e,e=function(e){return{value:e,unit:"%"}}(n)):(Z=e,e=i)):(Z=e,e=i),Q--,e===i&&0===Q&&oe(x),e}function he(){var e,n,r
return Q++,e=Z,ue(),(n=me())!==i?("px"===t.substr(Z,2)?(r="px",Z+=2):(r=i,0===Q&&oe(L)),r!==i?(Y=e,e=function(e){return{value:e,unit:"px"}}(n)):(Z=e,e=i)):(Z=e,e=i),e===i&&(e=Z,ue(),(n=me())!==i?("cm"===t.substr(Z,2)?(r="cm",Z+=2):(r=i,0===Q&&oe(M)),r!==i?(Y=e,e=function(e){return{value:e,unit:"cm"}}(n)):(Z=e,e=i)):(Z=e,e=i),e===i&&(e=Z,ue(),(n=me())!==i?("mm"===t.substr(Z,2)?(r="mm",Z+=2):(r=i,0===Q&&oe(A)),r!==i?(Y=e,e=function(e){return{value:e,unit:"mm"}}(n)):(Z=e,e=i)):(Z=e,e=i),e===i&&(e=Z,ue(),(n=me())!==i?("in"===t.substr(Z,2)?(r="in",Z+=2):(r=i,0===Q&&oe(T)),r!==i?(Y=e,e=function(e){return{value:e,unit:"in"}}(n)):(Z=e,e=i)):(Z=e,e=i),e===i&&(e=Z,ue(),(n=me())!==i?("pt"===t.substr(Z,2)?(r="pt",Z+=2):(r=i,0===Q&&oe(R)),r!==i?(Y=e,e=function(e){return{value:e,unit:"pt"}}(n)):(Z=e,e=i)):(Z=e,e=i),e===i&&(e=Z,ue(),(n=me())!==i?("pc"===t.substr(Z,2)?(r="pc",Z+=2):(r=i,0===Q&&oe(k)),r!==i?(Y=e,e=function(e){return{value:e,unit:"pc"}}(n)):(Z=e,e=i)):(Z=e,e=i)))))),Q--,e===i&&0===Q&&oe(C),e}function pe(){var e,n,r
return Q++,e=Z,(n=me())!==i?("deg"===t.substr(Z,3)?(r="deg",Z+=3):(r=i,0===Q&&oe(N)),r!==i?(Y=e,e=function(e){return{value:e,unit:"deg"}}(n)):(Z=e,e=i)):(Z=e,e=i),e===i&&(e=Z,(n=me())!==i?("rad"===t.substr(Z,3)?(r="rad",Z+=3):(r=i,0===Q&&oe(D)),r!==i?(Y=e,e=function(e){return{value:e,unit:"rad"}}(n)):(Z=e,e=i)):(Z=e,e=i),e===i&&(e=Z,(n=me())!==i?(t.substr(Z,4)===c?(r=c,Z+=4):(r=i,0===Q&&oe(V)),r!==i?(Y=e,e=function(e){return{value:e,unit:"grad"}}(n)):(Z=e,e=i)):(Z=e,e=i),e===i&&(e=Z,(n=me())!==i?(t.substr(Z,4)===u?(r=u,Z+=4):(r=i,0===Q&&oe(F)),r!==i?(Y=e,e=function(e){return{value:e,unit:"turn"}}(n)):(Z=e,e=i)):(Z=e,e=i)))),Q--,e===i&&(n=i,0===Q&&oe(P)),e}function be(){var e,n,r,a
if(Q++,e=Z,35===t.charCodeAt(Z)?(n="#",Z++):(n=i,0===Q&&oe($)),n!==i){if(r=[],h.test(t.charAt(Z))?(a=t.charAt(Z),Z++):(a=i,0===Q&&oe(G)),a!==i)for(;a!==i;)r.push(a),h.test(t.charAt(Z))?(a=t.charAt(Z),Z++):(a=i,0===Q&&oe(G))
else r=i
r!==i?(Y=e,e={type:"hex",value:ee()}):(Z=e,e=i)}else Z=e,e=i
return e===i&&(e=Z,(n=le())!==i&&(Y=e,n=function(e){return{type:"function",value:e}}(n)),(e=n)===i&&(e=Z,(n=de())!==i&&(Y=e,n={type:"named",value:ee()}),e=n)),Q--,e===i&&(n=i,0===Q&&oe(U)),e}function me(){var e,n,r,a,o,s,l
for(e=Z,p.test(t.charAt(Z))?(t.charAt(Z),Z++):0===Q&&oe(q),n=Z,r=[],b.test(t.charAt(Z))?(a=t.charAt(Z),Z++):(a=i,0===Q&&oe(B));a!==i;)r.push(a),b.test(t.charAt(Z))?(a=t.charAt(Z),Z++):(a=i,0===Q&&oe(B))
if(46===t.charCodeAt(Z)?(a=".",Z++):(a=i,0===Q&&oe(H)),a!==i){if(o=[],b.test(t.charAt(Z))?(s=t.charAt(Z),Z++):(s=i,0===Q&&oe(B)),s!==i)for(;s!==i;)o.push(s),b.test(t.charAt(Z))?(s=t.charAt(Z),Z++):(s=i,0===Q&&oe(B))
else o=i
o!==i?n=r=[r,a,o]:(Z=n,n=i)}else Z=n,n=i
if(n===i)if(n=[],b.test(t.charAt(Z))?(r=t.charAt(Z),Z++):(r=i,0===Q&&oe(B)),r!==i)for(;r!==i;)n.push(r),b.test(t.charAt(Z))?(r=t.charAt(Z),Z++):(r=i,0===Q&&oe(B))
else n=i
if(n!==i){if(r=Z,101===t.charCodeAt(Z)?(a="e",Z++):(a=i,0===Q&&oe(W)),a!==i){if(p.test(t.charAt(Z))?(o=t.charAt(Z),Z++):(o=i,0===Q&&oe(q)),o===i&&(o=null),s=[],b.test(t.charAt(Z))?(l=t.charAt(Z),Z++):(l=i,0===Q&&oe(B)),l!==i)for(;l!==i;)s.push(l),b.test(t.charAt(Z))?(l=t.charAt(Z),Z++):(l=i,0===Q&&oe(B))
else s=i
s!==i?r=a=[a,o,s]:(Z=r,r=i)}else Z=r,r=i
r===i&&(r=null),Y=e,e=parseFloat(ee())}else Z=e,e=i
return e}if((r=s())!==i&&Z===t.length)return r
throw r!==i&&Z<t.length&&oe({type:"end"}),function(t,n,r){return new e(e.buildMessage(t,n),t,n,r)}(K,X<t.length?t.charAt(X):null,X<t.length?ae(X,X+1):ae(X,X))}}},(r={get exports(){return c},set exports(e){c=e}}).exports&&(r.exports=i())
const b={deg:1,grad:.9,rad:180/Math.PI,turn:360},m={px:1,cm:96/2.54,mm:96/2.54/10,in:96,pc:16,pt:96/72}
function y(e){!function(e){if("quantity"!==e.type||null!==e.unit&&"%"!==e.unit)throw new o.a("effect:type-error","Expected <double> or <percentage>, Actual: "+h(e),{term:e})}(e)
const t=e.value
return p(t,e),"%"===e.unit?.01*t:t}function g(e){return function(e){if("quantity"!==e.type||!(0===e.value&&null===e.unit||e.unit&&null!=m[e.unit]))throw new o.a("effect:type-error","Expected <length>, Actual: "+h(e),{term:e})}(e),e.value*m[e.unit]||0}function v(e){switch(e.colorType){case"hex":return Object(a.c)(e.value)
case"named":return O(e.value)
case"function":return function(e){if(f(e.parameters,4),w.test(e.name))return[y(e.parameters[0]),y(e.parameters[1]),y(e.parameters[2]),e.parameters[3]?y(e.parameters[3]):1]
if(j.test(e.name))return Object(a.d)(function(e){return function(e){if("quantity"!==e.type||null!==e.unit)throw new o.a("effect:type-error","Expected <double>, Actual: "+h(e),{term:e})}(e),p(e.value,e),e.value}(e.parameters[0]),y(e.parameters[1]),y(e.parameters[2]),e.parameters[3]?y(e.parameters[3]):1)
throw new o.a("effect:syntax-error",`Invalid color function '${e.name}'`,{colorFunction:e})}(e.value)}}function O(e){if(!Object(a.e)(e))throw new o.a("effect:unknown-color",`color '${e}' isn't valid`,{namedColor:e})
return Object(a.b)(e)}const w=/^rgba?/i,j=/^hsla?/i},1213:function(e,t,n){"use strict"
function r(){const e=new Float32Array(16)
return e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}n.d(t,"a",(function(){return r}))
const i=r()
Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:i,clone:function(e){const t=new Float32Array(16)
return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t},create:r,createView:function(e,t){return new Float32Array(e,t,16)},fromValues:function(e,t,n,r,i,a,o,s,l,c,u,d,f,h,p,b){const m=new Float32Array(16)
return m[0]=e,m[1]=t,m[2]=n,m[3]=r,m[4]=i,m[5]=a,m[6]=o,m[7]=s,m[8]=l,m[9]=c,m[10]=u,m[11]=d,m[12]=f,m[13]=h,m[14]=p,m[15]=b,m}},Symbol.toStringTag,{value:"Module"}))},1215:function(e,t,n){"use strict"
n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return f})),n.d(t,"f",(function(){return i})),n.d(t,"g",(function(){return s})),n.d(t,"h",(function(){return l})),n.d(t,"i",(function(){return c})),n.d(t,"j",(function(){return u}))
var r=n(1016)
function i(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e}function a(e,t,n,r,i,a,o){return e[0]=t,e[1]=n,e[2]=r,e[3]=i,e[4]=a,e[5]=o,e}function o(e,t){const n=t[0],r=t[1],i=t[2],a=t[3],o=t[4],s=t[5]
let l=n*a-r*i
return l?(l=1/l,e[0]=a*l,e[1]=-r*l,e[2]=-i*l,e[3]=n*l,e[4]=(i*s-a*o)*l,e[5]=(r*o-n*s)*l,e):null}function s(e,t,n){const r=t[0],i=t[1],a=t[2],o=t[3],s=t[4],l=t[5],c=n[0],u=n[1],d=n[2],f=n[3],h=n[4],p=n[5]
return e[0]=r*c+a*u,e[1]=i*c+o*u,e[2]=r*d+a*f,e[3]=i*d+o*f,e[4]=r*h+a*p+s,e[5]=i*h+o*p+l,e}function l(e,t,n){const r=t[0],i=t[1],a=t[2],o=t[3],s=t[4],l=t[5],c=Math.sin(n),u=Math.cos(n)
return e[0]=r*u+a*c,e[1]=i*u+o*c,e[2]=r*-c+a*u,e[3]=i*-c+o*u,e[4]=s,e[5]=l,e}function c(e,t,n){const r=t[0],i=t[1],a=t[2],o=t[3],s=t[4],l=t[5],c=n[0],u=n[1]
return e[0]=r*c,e[1]=i*c,e[2]=a*u,e[3]=o*u,e[4]=s,e[5]=l,e}function u(e,t,n){const r=t[0],i=t[1],a=t[2],o=t[3],s=t[4],l=t[5],c=n[0],u=n[1]
return e[0]=r,e[1]=i,e[2]=a,e[3]=o,e[4]=r*c+a*u+s,e[5]=i*c+o*u+l,e}function d(e,t){const n=Math.sin(t),r=Math.cos(t)
return e[0]=r,e[1]=n,e[2]=-n,e[3]=r,e[4]=0,e[5]=0,e}function f(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=t[1],e[4]=0,e[5]=0,e}function h(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=t[0],e[5]=t[1],e}function p(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e[3]=t[3]-n[3],e[4]=t[4]-n[4],e[5]=t[5]-n[5],e}const b=s,m=p
Object.freeze(Object.defineProperty({__proto__:null,add:function(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e[4]=t[4]+n[4],e[5]=t[5]+n[5],e},copy:function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e},determinant:function(e){return e[0]*e[3]-e[1]*e[2]},equals:function(e,t){const n=e[0],i=e[1],a=e[2],o=e[3],s=e[4],l=e[5],c=t[0],u=t[1],d=t[2],f=t[3],h=t[4],p=t[5],b=Object(r.c)()
return Math.abs(n-c)<=b*Math.max(1,Math.abs(n),Math.abs(c))&&Math.abs(i-u)<=b*Math.max(1,Math.abs(i),Math.abs(u))&&Math.abs(a-d)<=b*Math.max(1,Math.abs(a),Math.abs(d))&&Math.abs(o-f)<=b*Math.max(1,Math.abs(o),Math.abs(f))&&Math.abs(s-h)<=b*Math.max(1,Math.abs(s),Math.abs(h))&&Math.abs(l-p)<=b*Math.max(1,Math.abs(l),Math.abs(p))},exactEquals:function(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]},frob:function(e){return Math.sqrt(e[0]**2+e[1]**2+e[2]**2+e[3]**2+e[4]**2+e[5]**2+1)},fromRotation:d,fromScaling:f,fromTranslation:h,identity:i,invert:o,mul:b,multiply:s,multiplyScalar:function(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*n,e[5]=t[5]*n,e},multiplyScalarAndAdd:function(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e[3]=t[3]+n[3]*r,e[4]=t[4]+n[4]*r,e[5]=t[5]+n[5]*r,e},rotate:l,scale:c,set:a,str:function(e){return"mat2d("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+")"},sub:m,subtract:p,translate:u},Symbol.toStringTag,{value:"Module"}))},1217:function(e,t,n){"use strict"
n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return le})),n.d(t,"c",(function(){return je})),n.d(t,"d",(function(){return O})),n.d(t,"e",(function(){return E})),n.d(t,"f",(function(){return Q})),n.d(t,"g",(function(){return h})),n.d(t,"h",(function(){return g})),n.d(t,"i",(function(){return se})),n.d(t,"j",(function(){return Re})),n.d(t,"k",(function(){return p}))
let r,i,a,o=!1,s=!1,l=!1,c=!1,u=null,d=!1
const f={isDev:!1,isBrowser:!0,isServer:!1,isTesting:!1},h=e=>{const t=new URL(e,_e.$resourcesUrl$)
return t.origin!==Oe.location.origin?t.href:t.pathname},p=e=>_e.$resourcesUrl$=e,b="http://www.w3.org/1999/xlink",m={},y=e=>"object"==(e=typeof e)||"function"===e,g=(e,t,...n)=>{let r=null,i=null,a=null,o=!1,s=!1
const l=[],c=t=>{for(let n=0;n<t.length;n++)r=t[n],Array.isArray(r)?c(r):null!=r&&"boolean"!=typeof r&&((o="function"!=typeof e&&!y(r))&&(r=String(r)),o&&s?l[l.length-1].$text$+=r:l.push(o?v(null,r):r),s=o)}
if(c(n),t&&(t.key&&(i=t.key),t.name&&(a=t.name),1)){const e=t.className||t.class
e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}if("function"==typeof e)return e(null===t?{}:t,l,j)
const u=v(e,null)
return u.$attrs$=t,l.length>0&&(u.$children$=l),u.$key$=i,u.$name$=a,u},v=(e,t)=>{const n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null,$attrs$:null,$key$:null,$name$:null}
return n},O={},w=e=>e&&e.$tag$===O,j={forEach:(e,t)=>e.map(_).forEach(t),map:(e,t)=>e.map(_).map(t).map(S)},_=e=>({vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}),S=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs)
return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),g(e.vtag,t,...e.vchildren||[])}const t=v(e.vtag,e.vtext)
return t.$attrs$=e.vattrs,t.$children$=e.vchildren,t.$key$=e.vkey,t.$name$=e.vname,t},E=(e,t,n)=>{const r=e
return{emit:e=>x(r,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},x=(e,t,n)=>{const r=_e.ce(t,n)
return e.dispatchEvent(r),r},I=new WeakMap,C=(e,t,n,r)=>{let i=L(t,n)
const a=ge.get(i)
if(e=11===e.nodeType?e:we,a)if("string"==typeof a){e=e.head||e
let t,n=I.get(e)
n||I.set(e,n=new Set),n.has(i)||(t=we.createElement("style"),t.innerHTML=a,e.insertBefore(t,e.querySelector("link")),n&&n.add(i))}else!e.adoptedStyleSheets.includes(a)&&(e.adoptedStyleSheets=[...e.adoptedStyleSheets,a])
return i},L=(e,t)=>"sc-"+(t&&32&e.$flags$?e.$tagName$+"-"+t:e.$tagName$),M=(e,t,n,r,i,a)=>{if(n!==r){let o=me(e,t),s=t.toLowerCase()
if("class"===t){const t=e.classList,i=T(n),a=T(r)
t.remove(...i.filter(e=>e&&!a.includes(e))),t.add(...a.filter(e=>e&&!i.includes(e)))}else if("style"===t){for(const t in n)r&&null!=r[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="")
for(const t in r)n&&r[t]===n[t]||(t.includes("-")?e.style.setProperty(t,r[t]):e.style[t]=r[t])}else if("key"===t);else if("ref"===t)r&&r(e)
else if(e.__lookupSetter__(t)||"o"!==t[0]||"n"!==t[1]){const l=y(r)
if((o||l&&null!==r)&&!i)try{if(e.tagName.includes("-"))e[t]=r
else{const i=null==r?"":r
"list"===t?o=!1:null!=n&&e[t]==i||(e[t]=i)}}catch(e){}let c=!1
s!==(s=s.replace(/^xlink\:?/,""))&&(t=s,c=!0),null==r||!1===r?!1===r&&""!==e.getAttribute(t)||(c?e.removeAttributeNS(b,t):e.removeAttribute(t)):(!o||4&a||i)&&!l&&(r=!0===r?"":r,c?e.setAttributeNS(b,t,r):e.setAttribute(t,r))}else t="-"===t[2]?t.slice(3):me(Oe,s)?s.slice(2):s[2]+t.slice(3),n&&_e.rel(e,t,n,!1),r&&_e.ael(e,t,r,!1)}},A=/\s/,T=e=>e?e.split(A):[],R=(e,t,n,r)=>{const i=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,a=e&&e.$attrs$||m,o=t.$attrs$||m
for(r in a)r in o||M(i,r,a[r],void 0,n,t.$flags$)
for(r in o)M(i,r,a[r],o[r],n,t.$flags$)},k=(e,t,n,s)=>{const u=t.$children$[n]
let d,f,h,p=0
if(!o&&(l=!0,"slot"===u.$tag$&&(r&&s.classList.add(r+"-s"),u.$flags$|=u.$children$?2:1)),null!==u.$text$)d=u.$elm$=we.createTextNode(u.$text$)
else if(1&u.$flags$)d=u.$elm$=we.createTextNode("")
else{if(!c&&(c="svg"===u.$tag$),d=u.$elm$=we.createElementNS(c?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",2&u.$flags$?"slot-fb":u.$tag$),c&&"foreignObject"===u.$tag$&&(c=!1),R(null,u,c),null!=r&&d["s-si"]!==r&&d.classList.add(d["s-si"]=r),u.$children$)for(p=0;p<u.$children$.length;++p)f=k(e,u,p,d),f&&d.appendChild(f)
"svg"===u.$tag$?c=!1:"foreignObject"===d.tagName&&(c=!0)}return d["s-hn"]=a,3&u.$flags$&&(d["s-sr"]=!0,d["s-cr"]=i,d["s-sn"]=u.$name$||"",h=e&&e.$children$&&e.$children$[n],h&&h.$tag$===u.$tag$&&e.$elm$&&P(e.$elm$,!1)),d},P=(e,t)=>{_e.$flags$|=1
const n=e.childNodes
for(let e=n.length-1;e>=0;e--){const r=n[e]
r["s-hn"]!==a&&r["s-ol"]&&(z(r).insertBefore(r,F(r)),r["s-ol"].remove(),r["s-ol"]=void 0,l=!0),t&&P(r,t)}_e.$flags$&=-2},N=(e,t,n,r,i,o)=>{let s,l=e["s-cr"]&&e["s-cr"].parentNode||e
for(l.shadowRoot&&l.tagName===a&&(l=l.shadowRoot);i<=o;++i)r[i]&&(s=k(null,n,i,e),s&&(r[i].$elm$=s,l.insertBefore(s,F(t))))},D=(e,t,n,r,i)=>{for(;t<=n;++t)(r=e[t])&&(i=r.$elm$,H(r),s=!0,i["s-ol"]?i["s-ol"].remove():P(i,!0),i.remove())},V=(e,t)=>e.$tag$===t.$tag$&&("slot"===e.$tag$?e.$name$===t.$name$:e.$key$===t.$key$),F=e=>e&&e["s-ol"]||e,z=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,U=(e,t)=>{const n=t.$elm$=e.$elm$,r=e.$children$,i=t.$children$,a=t.$tag$,o=t.$text$
let s
null!==o?(s=n["s-cr"])?s.parentNode.textContent=o:e.$text$!==o&&(n.data=o):(c="svg"===a||"foreignObject"!==a&&c,"slot"===a||R(e,t,c),null!==r&&null!==i?((e,t,n,r)=>{let i,a,o=0,s=0,l=0,c=0,u=t.length-1,d=t[0],f=t[u],h=r.length-1,p=r[0],b=r[h]
for(;o<=u&&s<=h;)if(null==d)d=t[++o]
else if(null==f)f=t[--u]
else if(null==p)p=r[++s]
else if(null==b)b=r[--h]
else if(V(d,p))U(d,p),d=t[++o],p=r[++s]
else if(V(f,b))U(f,b),f=t[--u],b=r[--h]
else if(V(d,b))"slot"!==d.$tag$&&"slot"!==b.$tag$||P(d.$elm$.parentNode,!1),U(d,b),e.insertBefore(d.$elm$,f.$elm$.nextSibling),d=t[++o],b=r[--h]
else if(V(f,p))"slot"!==d.$tag$&&"slot"!==b.$tag$||P(f.$elm$.parentNode,!1),U(f,p),e.insertBefore(f.$elm$,d.$elm$),f=t[--u],p=r[++s]
else{for(l=-1,c=o;c<=u;++c)if(t[c]&&null!==t[c].$key$&&t[c].$key$===p.$key$){l=c
break}l>=0?(a=t[l],a.$tag$!==p.$tag$?i=k(t&&t[s],n,l,e):(U(a,p),t[l]=void 0,i=a.$elm$),p=r[++s]):(i=k(t&&t[s],n,s,e),p=r[++s]),i&&z(d.$elm$).insertBefore(i,F(d.$elm$))}o>u?N(e,null==r[h+1]?null:r[h+1].$elm$,n,r,s,h):s>h&&D(t,o,u)})(n,r,t,i):null!==i?(null!==e.$text$&&(n.textContent=""),N(n,null,t,i,0,i.length-1)):null!==r&&D(r,0,r.length-1),c&&"svg"===a&&(c=!1))},$=e=>{const t=e.childNodes
let n,r,i,a,o,s
for(r=0,i=t.length;r<i;r++)if(n=t[r],1===n.nodeType){if(n["s-sr"])for(o=n["s-sn"],n.hidden=!1,a=0;a<i;a++)if(s=t[a].nodeType,t[a]["s-hn"]!==n["s-hn"]||""!==o){if(1===s&&o===t[a].getAttribute("slot")){n.hidden=!0
break}}else if(1===s||3===s&&""!==t[a].textContent.trim()){n.hidden=!0
break}$(n)}},G=[],q=e=>{let t,n,r,i,a,o,l=0
const c=e.childNodes,u=c.length
for(;l<u;l++){if(t=c[l],t["s-sr"]&&(n=t["s-cr"])&&n.parentNode)for(r=n.parentNode.childNodes,i=t["s-sn"],o=r.length-1;o>=0;o--)n=r[o],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(B(n,i)?(a=G.find(e=>e.$nodeToRelocate$===n),s=!0,n["s-sn"]=n["s-sn"]||i,a?a.$slotRefNode$=t:G.push({$slotRefNode$:t,$nodeToRelocate$:n}),n["s-sr"]&&G.map(e=>{B(e.$nodeToRelocate$,n["s-sn"])&&(a=G.find(e=>e.$nodeToRelocate$===n),a&&!e.$slotRefNode$&&(e.$slotRefNode$=a.$slotRefNode$))})):G.some(e=>e.$nodeToRelocate$===n)||G.push({$nodeToRelocate$:n}))
1===t.nodeType&&q(t)}},B=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,H=e=>{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null),e.$children$&&e.$children$.map(H)},W=(e,t)=>{const n=e.$hostElement$,c=e.$cmpMeta$,u=e.$vnode$||v(null,null),d=w(t)?t:g(null,null,t)
if(a=n.tagName,c.$attrsToReflect$&&(d.$attrs$=d.$attrs$||{},c.$attrsToReflect$.map(([e,t])=>d.$attrs$[t]=n[e])),d.$tag$=null,d.$flags$|=4,e.$vnode$=d,d.$elm$=u.$elm$=n.shadowRoot||n,r=n["s-sc"],i=n["s-cr"],o=Se&&0!=(1&c.$flags$),s=!1,U(u,d),_e.$flags$|=1,l){let e,t,n,r,i,a
q(d.$elm$)
let o=0
for(;o<G.length;o++)e=G[o],t=e.$nodeToRelocate$,t["s-ol"]||(n=we.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t))
for(o=0;o<G.length;o++)if(e=G[o],t=e.$nodeToRelocate$,e.$slotRefNode$){for(r=e.$slotRefNode$.parentNode,i=e.$slotRefNode$.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(a=n["s-nr"],a&&a["s-sn"]===t["s-sn"]&&r===a.parentNode&&(a=a.nextSibling,!a||!a["s-nr"])){i=a
break}(!i&&r!==t.parentNode||t.nextSibling!==i)&&t!==i&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),r.insertBefore(t,i))}else 1===t.nodeType&&(t.hidden=!0)}s&&$(d.$elm$),_e.$flags$&=-2,G.length=0},Z=(e,t)=>{e.$flags$|=16,e.$ancestorComponent$
const n=()=>Y(e,t)
return ke(n)},Y=(e,t)=>{const n=e.$hostElement$,r=(e.$cmpMeta$.$tagName$,()=>{}),i=n
let a
return t?(ne(n,"componentWillLoad"),a=ee(i,"componentWillLoad")):(ne(n,"componentWillUpdate"),a=ee(i,"componentWillUpdate")),ne(n,"componentWillRender"),a=te(a,()=>ee(i,"componentWillRender")),r(),te(a,()=>J(e,i,t))},J=async(e,t,n)=>{const r=e.$hostElement$,i=(e.$cmpMeta$.$tagName$,()=>{})
r["s-rc"]
n&&(e=>{const t=e.$cmpMeta$,n=e.$hostElement$,r=t.$flags$,i=(t.$tagName$,()=>{}),a=C(Se&&n.shadowRoot?n.shadowRoot:n.getRootNode(),t,e.$modeName$)
10&r&&(n["s-sc"]=a,n.classList.add(a+"-h"),2&r&&n.classList.add(a+"-s")),i()})(e)
const a=(e.$cmpMeta$.$tagName$,()=>{})
X(e,t,r),a(),i(),K(e)},X=(e,t,n)=>{try{u=t,t=t.render&&t.render(),e.$flags$&=-17,e.$flags$|=2,W(e,t)}catch(t){ye(t,e.$hostElement$)}return u=null,null},K=e=>{e.$cmpMeta$.$tagName$
const t=e.$hostElement$,n=()=>{},r=t
e.$ancestorComponent$
ee(r,"componentDidRender"),ne(t,"componentDidRender"),64&e.$flags$?(ee(r,"componentDidUpdate"),ne(t,"componentDidUpdate"),n()):(e.$flags$|=64,ee(r,"componentDidLoad"),ne(t,"componentDidLoad"),n())},Q=e=>{{const t=pe(e),n=t.$hostElement$.isConnected
return n&&2==(18&t.$flags$)&&Z(t,!1),n}},ee=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){ye(e)}},te=(e,t)=>e&&e.then?e.then(t):t(),ne=(e,t)=>{},re=(e,t,n)=>{if(t.$members$){e.watchers&&(t.$watchers$=e.watchers)
const n=Object.entries(t.$members$),r=e.prototype
n.map(([e,[n]])=>{(31&n||32&n)&&Object.defineProperty(r,e,{get(){return t=e,pe(this).$instanceValues$.get(t)
var t},set(n){((e,t,n,r)=>{const i=pe(e),a=e,o=i.$instanceValues$.get(t),s=i.$flags$,l=a
var c,u
c=n,u=r.$members$[t][0],n=null==c||y(c)?c:4&u?"false"!==c&&(""===c||!!c):2&u?parseFloat(c):1&u?String(c):c
const d=Number.isNaN(o)&&Number.isNaN(n)
if(n!==o&&!d&&(i.$instanceValues$.set(t,n),1)){if(r.$watchers$&&128&s){const e=r.$watchers$[t]
e&&e.map(e=>{try{l[e](n,o,t)}catch(e){ye(e,a)}})}if(2==(18&s)){if(l.componentShouldUpdate&&!1===l.componentShouldUpdate(n,o,t))return
Z(i,!1)}}})(this,e,n,t)},configurable:!0,enumerable:!0})})
{const i=new Map
r.attributeChangedCallback=function(e,t,n){_e.jmp(()=>{const t=i.get(e)
if(this.hasOwnProperty(t))n=this[t],delete this[t]
else if(r.hasOwnProperty(t)&&"number"==typeof this[t]&&this[t]==n)return
this[t]=(null!==n||"boolean"!=typeof this[t])&&n})},e.observedAttributes=n.filter(([e,t])=>15&t[0]).map(([e,n])=>{const r=n[1]||e
return i.set(r,e),512&n[0]&&t.$attrsToReflect$.push([e,r]),r})}}return e},ie=async(e,t,n,r,i)=>{if(0==(32&t.$flags$)&&(i=e.constructor,t.$flags$|=32,customElements.whenDefined(n.$tagName$).then(()=>t.$flags$|=128),i.style)){let r=i.style
"string"!=typeof r&&(r=r[t.$modeName$=(e=>ve.map(t=>t(e)).find(e=>!!e))(e)])
const a=L(n,t.$modeName$)
if(!ge.has(a)){const e=(n.$tagName$,()=>{});((e,t,n)=>{let r=ge.get(e)
xe&&n?(r=r||new CSSStyleSheet,"string"==typeof r?r=t:r.replaceSync(t)):r=t,ge.set(e,r)})(a,r,!!(1&n.$flags$)),e()}}t.$ancestorComponent$
const a=()=>Z(t,!0)
a()},ae=e=>{},oe=e=>{const t=e["s-cr"]=we.createComment("")
t["s-cn"]=!0,e.insertBefore(t,e.firstChild)},se=(e,t)=>{const n={$flags$:t[0],$tagName$:t[1]}
n.$members$=t[2],n.$listeners$=t[3],n.$watchers$=e.$watchers$,n.$attrsToReflect$=[],!Se&&1&n.$flags$&&(n.$flags$|=8)
const r=e.prototype.connectedCallback,i=e.prototype.disconnectedCallback
return Object.assign(e.prototype,{__registerHost(){be(this,n)},connectedCallback(){(e=>{if(0==(1&_e.$flags$)){const t=pe(e),n=t.$cmpMeta$,r=(n.$tagName$,()=>{})
if(1&t.$flags$)ce(e,t,n.$listeners$,!1),ae(t.$lazyInstance$)
else{let r
t.$flags$|=1,0,!r&&12&n.$flags$&&oe(e),n.$members$&&Object.entries(n.$members$).map(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t]
delete e[t],e[t]=n}}),ie(e,t,n)}r()}})(this),r&&r.call(this)},disconnectedCallback(){(e=>{if(0==(1&_e.$flags$)){const t=pe(e)
t.$rmListeners$&&(t.$rmListeners$.map(e=>e()),t.$rmListeners$=void 0)}})(this),i&&i.call(this)},__attachShadow(){Se?this.attachShadow({mode:"open",delegatesFocus:!!(16&n.$flags$)}):this.shadowRoot=this}}),e.is=n.$tagName$,re(e,n)},le=(e,t)=>t,ce=(e,t,n,r)=>{n&&n.map(([n,r,i])=>{const a=de(e,n),o=ue(t,i),s=fe(n)
_e.ael(a,r,o,s),(t.$rmListeners$=t.$rmListeners$||[]).push(()=>_e.rel(a,r,o,s))})},ue=(e,t)=>n=>{try{e.$hostElement$[t](n)}catch(e){ye(e)}},de=(e,t)=>4&t?we:8&t?Oe:16&t?we.body:e,fe=e=>Ee?{passive:0!=(1&e),capture:0!=(2&e)}:0!=(2&e),he=new WeakMap,pe=e=>he.get(e),be=(e,t)=>{const n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map}
return ce(e,n,t.$listeners$,!1),he.set(e,n)},me=(e,t)=>t in e,ye=(e,t)=>(0,console.error)(e,t),ge=(new Map,new Map),ve=[],Oe="undefined"!=typeof window?window:{},we=Oe.document||{head:{}},je=Oe.HTMLElement||class{},_e={$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,r)=>e.addEventListener(t,n,r),rel:(e,t,n,r)=>e.removeEventListener(t,n,r),ce:(e,t)=>new CustomEvent(e,t)},Se=!0,Ee=(()=>{let e=!1
try{we.addEventListener("e",null,Object.defineProperty({},"passive",{get(){e=!0}}))}catch(e){}return e})(),xe=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(e){}return!1})(),Ie=[],Ce=[],Le=(e,t)=>n=>{e.push(n),d||(d=!0,t&&4&_e.$flags$?Te(Ae):_e.raf(Ae))},Me=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){ye(e)}e.length=0},Ae=()=>{Me(Ie),Me(Ce),(d=Ie.length>0)&&_e.raf(Ae)},Te=e=>Promise.resolve(void 0).then(e),Re=Le(Ie,!1),ke=Le(Ce,!0)},1219:function(e,t,n){"use strict"
n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o}))
var r=n(235)
const i=()=>!!Object(r.a)("enable-feature:force-wosr"),a=()=>!!Object(r.a)("enable-feature:direct-3d-object-feature-layer-display"),o=()=>!!Object(r.a)("enable-feature:SceneLayer-editing")},1224:function(e,t,n){"use strict"
n.d(t,"a",(function(){return mt}))
var r=n(96),i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)}
function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null")
function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var o,s,l,c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e}).apply(this,arguments)}
function u(e,t,n){if(n||2===arguments.length)for(var r,i=0,a=t.length;i<a;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i])
return e.concat(r||Array.prototype.slice.call(t))}function d(e){return e.type===s.literal}function f(e){return e.type===s.argument}function h(e){return e.type===s.number}function p(e){return e.type===s.date}function b(e){return e.type===s.time}function m(e){return e.type===s.select}function y(e){return e.type===s.plural}function g(e){return e.type===s.pound}function v(e){return e.type===s.tag}function O(e){return!(!e||"object"!=typeof e||e.type!==l.number)}function w(e){return!(!e||"object"!=typeof e||e.type!==l.dateTime)}!function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"}(o||(o={})),function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"}(s||(s={})),function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"}(l||(l={}))
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
case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""})),t}var E,x=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i,I=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,C=/^(@+)?(\+|#+)?[rs]?$/g,L=/(\*)(0+)|(#+)(0+)|(0+)/g,M=/^(0+)$/
function A(e){var t={}
return"r"===e[e.length-1]?t.roundingPriority="morePrecision":"s"===e[e.length-1]&&(t.roundingPriority="lessPrecision"),e.replace(C,(function(e,n,r){return"string"!=typeof r?(t.minimumSignificantDigits=n.length,t.maximumSignificantDigits=n.length):"+"===r?t.minimumSignificantDigits=n.length:"#"===n[0]?t.maximumSignificantDigits=n.length:(t.minimumSignificantDigits=n.length,t.maximumSignificantDigits=n.length+("string"==typeof r?r.length:0)),""})),t}function T(e){switch(e){case"sign-auto":return{signDisplay:"auto"}
case"sign-accounting":case"()":return{currencySign:"accounting"}
case"sign-always":case"+!":return{signDisplay:"always"}
case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"}
case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"}
case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"}
case"sign-never":case"+_":return{signDisplay:"never"}}}function R(e){var t
if("E"===e[0]&&"E"===e[1]?(t={notation:"engineering"},e=e.slice(2)):"E"===e[0]&&(t={notation:"scientific"},e=e.slice(1)),t){var n=e.slice(0,2)
if("+!"===n?(t.signDisplay="always",e=e.slice(2)):"+?"===n&&(t.signDisplay="exceptZero",e=e.slice(2)),!M.test(e))throw new Error("Malformed concise eng/scientific notation")
t.minimumIntegerDigits=e.length}return t}function k(e){var t=T(e)
return t||{}}function P(e){for(var t={},n=0,r=e;n<r.length;n++){var i=r[n]
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
case"scientific":t=c(c(c({},t),{notation:"scientific"}),i.options.reduce((function(e,t){return c(c({},e),k(t))}),{}))
continue
case"engineering":t=c(c(c({},t),{notation:"engineering"}),i.options.reduce((function(e,t){return c(c({},e),k(t))}),{}))
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
i.options[0].replace(L,(function(e,n,r,i,a,o){if(n)t.minimumIntegerDigits=r.length
else{if(i&&a)throw new Error("We currently do not support maximum integer digits")
if(o)throw new Error("We currently do not support exact integer digits")}return""}))
continue}if(M.test(i.stem))t.minimumIntegerDigits=i.stem.length
else if(I.test(i.stem)){if(i.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option")
i.stem.replace(I,(function(e,n,r,i,a,o){return"*"===r?t.minimumFractionDigits=n.length:i&&"#"===i[0]?t.maximumFractionDigits=i.length:a&&o?(t.minimumFractionDigits=a.length,t.maximumFractionDigits=a.length+o.length):(t.minimumFractionDigits=n.length,t.maximumFractionDigits=n.length),""}))
var a=i.options[0]
"w"===a?t=c(c({},t),{trailingZeroDisplay:"stripIfInteger"}):a&&(t=c(c({},t),A(a)))}else if(C.test(i.stem))t=c(c({},t),A(i.stem))
else{var o=T(i.stem)
o&&(t=c(c({},t),o))
var s=R(i.stem)
s&&(t=c(c({},t),s))}}return t}var N=new RegExp("^"+j.source+"*"),D=new RegExp(j.source+"*$")
function V(e,t){return{start:e,end:t}}var F=!!String.prototype.startsWith,z=!!String.fromCodePoint,U=!!Object.fromEntries,$=!!String.prototype.codePointAt,G=!!String.prototype.trimStart,q=!!String.prototype.trimEnd,B=Number.isSafeInteger?Number.isSafeInteger:function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},H=!0
try{H="a"===(null===(E=ee("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu").exec("a"))||void 0===E?void 0:E[0])}catch(e){H=!1}var W,Z=F?function(e,t,n){return e.startsWith(t,n)}:function(e,t,n){return e.slice(n,n+t.length)===t},Y=z?String.fromCodePoint:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var n,r="",i=e.length,a=0;i>a;){if((n=e[a++])>1114111)throw RangeError(n+" is not a valid code point")
r+=n<65536?String.fromCharCode(n):String.fromCharCode(55296+((n-=65536)>>10),n%1024+56320)}return r},J=U?Object.fromEntries:function(e){for(var t={},n=0,r=e;n<r.length;n++){var i=r[n],a=i[0],o=i[1]
t[a]=o}return t},X=$?function(e,t){return e.codePointAt(t)}:function(e,t){var n=e.length
if(!(t<0||t>=n)){var r,i=e.charCodeAt(t)
return i<55296||i>56319||t+1===n||(r=e.charCodeAt(t+1))<56320||r>57343?i:r-56320+(i-55296<<10)+65536}},K=G?function(e){return e.trimStart()}:function(e){return e.replace(N,"")},Q=q?function(e){return e.trimEnd()}:function(e){return e.replace(D,"")}
function ee(e,t){return new RegExp(e,t)}if(H){var te=ee("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu")
W=function(e,t){var n
return te.lastIndex=t,null!==(n=te.exec(e)[1])&&void 0!==n?n:""}}else W=function(e,t){for(var n=[];;){var r=X(e,t)
if(void 0===r||ie(r)||ae(r))break
n.push(r),t+=r>=65536?2:1}return Y.apply(void 0,n)}
var ne=function(){function e(e,t){void 0===t&&(t={}),this.message=e,this.position={offset:0,line:1,column:1},this.ignoreTag=!!t.ignoreTag,this.requiresOtherClause=!!t.requiresOtherClause,this.shouldParseSkeletons=!!t.shouldParseSkeletons}return e.prototype.parse=function(){if(0!==this.offset())throw Error("parser can only be used once")
return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(e,t,n){for(var r=[];!this.isEOF();){var i=this.char()
if(123===i){if((a=this.parseArgument(e,n)).err)return a
r.push(a.val)}else{if(125===i&&e>0)break
if(35!==i||"plural"!==t&&"selectordinal"!==t){if(60===i&&!this.ignoreTag&&47===this.peek()){if(n)break
return this.error(o.UNMATCHED_CLOSING_TAG,V(this.clonePosition(),this.clonePosition()))}if(60===i&&!this.ignoreTag&&re(this.peek()||0)){if((a=this.parseTag(e,t)).err)return a
r.push(a.val)}else{var a
if((a=this.parseLiteral(e,t)).err)return a
r.push(a.val)}}else{var l=this.clonePosition()
this.bump(),r.push({type:s.pound,location:V(l,this.clonePosition())})}}}return{val:r,err:null}},e.prototype.parseTag=function(e,t){var n=this.clonePosition()
this.bump()
var r=this.parseTagName()
if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:s.literal,value:"<"+r+"/>",location:V(n,this.clonePosition())},err:null}
if(this.bumpIf(">")){var i=this.parseMessage(e+1,t,!0)
if(i.err)return i
var a=i.val,l=this.clonePosition()
if(this.bumpIf("</")){if(this.isEOF()||!re(this.char()))return this.error(o.INVALID_TAG,V(l,this.clonePosition()))
var c=this.clonePosition()
return r!==this.parseTagName()?this.error(o.UNMATCHED_CLOSING_TAG,V(c,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:s.tag,value:r,children:a,location:V(n,this.clonePosition())},err:null}:this.error(o.INVALID_TAG,V(l,this.clonePosition())))}return this.error(o.UNCLOSED_TAG,V(n,this.clonePosition()))}return this.error(o.INVALID_TAG,V(n,this.clonePosition()))},e.prototype.parseTagName=function(){var e,t=this.offset()
for(this.bump();!this.isEOF()&&(45===(e=this.char())||46===e||e>=48&&e<=57||95===e||e>=97&&e<=122||e>=65&&e<=90||183==e||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039);)this.bump()
return this.message.slice(t,this.offset())},e.prototype.parseLiteral=function(e,t){for(var n=this.clonePosition(),r="";;){var i=this.tryParseQuote(t)
if(i)r+=i
else{var a=this.tryParseUnquoted(e,t)
if(a)r+=a
else{var o=this.tryParseLeftAngleBracket()
if(!o)break
r+=o}}}var l=V(n,this.clonePosition())
return{val:{type:s.literal,value:r,location:l},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return this.isEOF()||60!==this.char()||!this.ignoreTag&&(re(e=this.peek()||0)||47===e)?null:(this.bump(),"<")
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
this.bump()}return Y.apply(void 0,t)},e.prototype.tryParseUnquoted=function(e,t){if(this.isEOF())return null
var n=this.char()
return 60===n||123===n||35===n&&("plural"===t||"selectordinal"===t)||125===n&&e>0?null:(this.bump(),Y(n))},e.prototype.parseArgument=function(e,t){var n=this.clonePosition()
if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(o.EXPECT_ARGUMENT_CLOSING_BRACE,V(n,this.clonePosition()))
if(125===this.char())return this.bump(),this.error(o.EMPTY_ARGUMENT,V(n,this.clonePosition()))
var r=this.parseIdentifierIfPossible().value
if(!r)return this.error(o.MALFORMED_ARGUMENT,V(n,this.clonePosition()))
if(this.bumpSpace(),this.isEOF())return this.error(o.EXPECT_ARGUMENT_CLOSING_BRACE,V(n,this.clonePosition()))
switch(this.char()){case 125:return this.bump(),{val:{type:s.argument,value:r,location:V(n,this.clonePosition())},err:null}
case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(o.EXPECT_ARGUMENT_CLOSING_BRACE,V(n,this.clonePosition())):this.parseArgumentOptions(e,t,r,n)
default:return this.error(o.MALFORMED_ARGUMENT,V(n,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var e=this.clonePosition(),t=this.offset(),n=W(this.message,t),r=t+n.length
return this.bumpTo(r),{value:n,location:V(e,this.clonePosition())}},e.prototype.parseArgumentOptions=function(e,t,n,r){var i,a=this.clonePosition(),u=this.parseIdentifierIfPossible().value,d=this.clonePosition()
switch(u){case"":return this.error(o.EXPECT_ARGUMENT_TYPE,V(a,d))
case"number":case"date":case"time":this.bumpSpace()
var f=null
if(this.bumpIf(",")){this.bumpSpace()
var h=this.clonePosition()
if((O=this.parseSimpleArgStyleIfPossible()).err)return O
if(0===(m=Q(O.val)).length)return this.error(o.EXPECT_ARGUMENT_STYLE,V(this.clonePosition(),this.clonePosition()))
f={style:m,styleLocation:V(h,this.clonePosition())}}if((w=this.tryParseArgumentClose(r)).err)return w
var p=V(r,this.clonePosition())
if(f&&Z(null==f?void 0:f.style,"::",0)){var b=K(f.style.slice(2))
if("number"===u)return(O=this.parseNumberSkeletonFromString(b,f.styleLocation)).err?O:{val:{type:s.number,value:n,location:p,style:O.val},err:null}
if(0===b.length)return this.error(o.EXPECT_DATE_TIME_SKELETON,p)
var m={type:l.dateTime,pattern:b,location:f.styleLocation,parsedOptions:this.shouldParseSkeletons?S(b):{}}
return{val:{type:"date"===u?s.date:s.time,value:n,location:p,style:m},err:null}}return{val:{type:"number"===u?s.number:"date"===u?s.date:s.time,value:n,location:p,style:null!==(i=null==f?void 0:f.style)&&void 0!==i?i:null},err:null}
case"plural":case"selectordinal":case"select":var y=this.clonePosition()
if(this.bumpSpace(),!this.bumpIf(","))return this.error(o.EXPECT_SELECT_ARGUMENT_OPTIONS,V(y,c({},y)))
this.bumpSpace()
var g=this.parseIdentifierIfPossible(),v=0
if("select"!==u&&"offset"===g.value){if(!this.bumpIf(":"))return this.error(o.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,V(this.clonePosition(),this.clonePosition()))
var O
if(this.bumpSpace(),(O=this.tryParseDecimalInteger(o.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,o.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err)return O
this.bumpSpace(),g=this.parseIdentifierIfPossible(),v=O.val}var w,j=this.tryParsePluralOrSelectOptions(e,u,t,g)
if(j.err)return j
if((w=this.tryParseArgumentClose(r)).err)return w
var _=V(r,this.clonePosition())
return"select"===u?{val:{type:s.select,value:n,options:J(j.val),location:_},err:null}:{val:{type:s.plural,value:n,options:J(j.val),offset:v,pluralType:"plural"===u?"cardinal":"ordinal",location:_},err:null}
default:return this.error(o.INVALID_ARGUMENT_TYPE,V(a,d))}},e.prototype.tryParseArgumentClose=function(e){return this.isEOF()||125!==this.char()?this.error(o.EXPECT_ARGUMENT_CLOSING_BRACE,V(e,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var e=0,t=this.clonePosition();!this.isEOF();)switch(this.char()){case 39:this.bump()
var n=this.clonePosition()
if(!this.bumpUntil("'"))return this.error(o.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,V(n,this.clonePosition()))
this.bump()
break
case 123:e+=1,this.bump()
break
case 125:if(!(e>0))return{val:this.message.slice(t.offset,this.offset()),err:null}
e-=1
break
default:this.bump()}return{val:this.message.slice(t.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(e,t){var n=[]
try{n=function(e){if(0===e.length)throw new Error("Number skeleton cannot be empty")
for(var t=[],n=0,r=e.split(x).filter((function(e){return e.length>0}));n<r.length;n++){var i=r[n].split("/")
if(0===i.length)throw new Error("Invalid number skeleton")
for(var a=i[0],o=i.slice(1),s=0,l=o;s<l.length;s++)if(0===l[s].length)throw new Error("Invalid number skeleton")
t.push({stem:a,options:o})}return t}(e)}catch(e){return this.error(o.INVALID_NUMBER_SKELETON,t)}return{val:{type:l.number,tokens:n,location:t,parsedOptions:this.shouldParseSkeletons?P(n):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(e,t,n,r){for(var i,a=!1,s=[],l=new Set,c=r.value,u=r.location;;){if(0===c.length){var d=this.clonePosition()
if("select"===t||!this.bumpIf("="))break
var f=this.tryParseDecimalInteger(o.EXPECT_PLURAL_ARGUMENT_SELECTOR,o.INVALID_PLURAL_ARGUMENT_SELECTOR)
if(f.err)return f
u=V(d,this.clonePosition()),c=this.message.slice(d.offset,this.offset())}if(l.has(c))return this.error("select"===t?o.DUPLICATE_SELECT_ARGUMENT_SELECTOR:o.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,u)
"other"===c&&(a=!0),this.bumpSpace()
var h=this.clonePosition()
if(!this.bumpIf("{"))return this.error("select"===t?o.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:o.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,V(this.clonePosition(),this.clonePosition()))
var p=this.parseMessage(e+1,t,n)
if(p.err)return p
var b=this.tryParseArgumentClose(h)
if(b.err)return b
s.push([c,{value:p.val,location:V(h,this.clonePosition())}]),l.add(c),this.bumpSpace(),c=(i=this.parseIdentifierIfPossible()).value,u=i.location}return 0===s.length?this.error("select"===t?o.EXPECT_SELECT_ARGUMENT_SELECTOR:o.EXPECT_PLURAL_ARGUMENT_SELECTOR,V(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!a?this.error(o.MISSING_OTHER_CLAUSE,V(this.clonePosition(),this.clonePosition())):{val:s,err:null}},e.prototype.tryParseDecimalInteger=function(e,t){var n=1,r=this.clonePosition()
this.bumpIf("+")||this.bumpIf("-")&&(n=-1)
for(var i=!1,a=0;!this.isEOF();){var o=this.char()
if(!(o>=48&&o<=57))break
i=!0,a=10*a+(o-48),this.bump()}var s=V(r,this.clonePosition())
return i?B(a*=n)?{val:a,err:null}:this.error(t,s):this.error(e,s)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var e=this.position.offset
if(e>=this.message.length)throw Error("out of bound")
var t=X(this.message,e)
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
function re(e){return e>=97&&e<=122||e>=65&&e<=90}function ie(e){return e>=9&&e<=13||32===e||133===e||e>=8206&&e<=8207||8232===e||8233===e}function ae(e){return e>=33&&e<=35||36===e||e>=37&&e<=39||40===e||41===e||42===e||43===e||44===e||45===e||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||91===e||92===e||93===e||94===e||96===e||123===e||124===e||125===e||126===e||161===e||e>=162&&e<=165||166===e||167===e||169===e||171===e||172===e||174===e||176===e||177===e||182===e||187===e||191===e||215===e||247===e||e>=8208&&e<=8213||e>=8214&&e<=8215||8216===e||8217===e||8218===e||e>=8219&&e<=8220||8221===e||8222===e||8223===e||e>=8224&&e<=8231||e>=8240&&e<=8248||8249===e||8250===e||e>=8251&&e<=8254||e>=8257&&e<=8259||8260===e||8261===e||8262===e||e>=8263&&e<=8273||8274===e||8275===e||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||8608===e||e>=8609&&e<=8610||8611===e||e>=8612&&e<=8613||8614===e||e>=8615&&e<=8621||8622===e||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||8658===e||8659===e||8660===e||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||8968===e||8969===e||8970===e||8971===e||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||9001===e||9002===e||e>=9003&&e<=9083||9084===e||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||9655===e||e>=9656&&e<=9664||9665===e||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||9839===e||e>=9840&&e<=10087||10088===e||10089===e||10090===e||10091===e||10092===e||10093===e||10094===e||10095===e||10096===e||10097===e||10098===e||10099===e||10100===e||10101===e||e>=10132&&e<=10175||e>=10176&&e<=10180||10181===e||10182===e||e>=10183&&e<=10213||10214===e||10215===e||10216===e||10217===e||10218===e||10219===e||10220===e||10221===e||10222===e||10223===e||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||10627===e||10628===e||10629===e||10630===e||10631===e||10632===e||10633===e||10634===e||10635===e||10636===e||10637===e||10638===e||10639===e||10640===e||10641===e||10642===e||10643===e||10644===e||10645===e||10646===e||10647===e||10648===e||e>=10649&&e<=10711||10712===e||10713===e||10714===e||10715===e||e>=10716&&e<=10747||10748===e||10749===e||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||11158===e||e>=11159&&e<=11263||e>=11776&&e<=11777||11778===e||11779===e||11780===e||11781===e||e>=11782&&e<=11784||11785===e||11786===e||11787===e||11788===e||11789===e||e>=11790&&e<=11798||11799===e||e>=11800&&e<=11801||11802===e||11803===e||11804===e||11805===e||e>=11806&&e<=11807||11808===e||11809===e||11810===e||11811===e||11812===e||11813===e||11814===e||11815===e||11816===e||11817===e||e>=11818&&e<=11822||11823===e||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||11840===e||11841===e||11842===e||e>=11843&&e<=11855||e>=11856&&e<=11857||11858===e||e>=11859&&e<=11903||e>=12289&&e<=12291||12296===e||12297===e||12298===e||12299===e||12300===e||12301===e||12302===e||12303===e||12304===e||12305===e||e>=12306&&e<=12307||12308===e||12309===e||12310===e||12311===e||12312===e||12313===e||12314===e||12315===e||12316===e||12317===e||e>=12318&&e<=12319||12320===e||12336===e||64830===e||64831===e||e>=65093&&e<=65094}function oe(e,t){void 0===t&&(t={}),t=c({shouldParseSkeletons:!0,requiresOtherClause:!0},t)
var n=new ne(e,t).parse()
if(n.err){var r=SyntaxError(o[n.err.kind])
throw r.location=n.err.location,r.originalMessage=n.err.message,r}return(null==t?void 0:t.captureLocation)||function e(t){t.forEach((function(t){if(delete t.location,m(t)||y(t))for(var n in t.options)delete t.options[n].location,e(t.options[n].value)
else h(t)&&O(t.style)||(p(t)||b(t))&&w(t.style)?delete t.style.location:v(t)&&e(t.children)}))}(n.val),n.val}function se(e,t){var n=t&&t.cache?t.cache:be,r=t&&t.serializer?t.serializer:fe
return(t&&t.strategy?t.strategy:de)(e,{cache:n,serializer:r})}function le(e,t,n,r){var i,a=null==(i=r)||"number"==typeof i||"boolean"==typeof i?r:n(r),o=t.get(a)
return void 0===o&&(o=e.call(this,r),t.set(a,o)),o}function ce(e,t,n){var r=Array.prototype.slice.call(arguments,3),i=n(r),a=t.get(i)
return void 0===a&&(a=e.apply(this,r),t.set(i,a)),a}function ue(e,t,n,r,i){return n.bind(t,e,r,i)}function de(e,t){return ue(e,this,1===e.length?le:ce,t.cache.create(),t.serializer)}var fe=function(){return JSON.stringify(arguments)}
function he(){this.cache=Object.create(null)}he.prototype.get=function(e){return this.cache[e]},he.prototype.set=function(e,t){this.cache[e]=t}
var pe,be={create:function(){return new he}},me={variadic:function(e,t){return ue(e,this,ce,t.cache.create(),t.serializer)},monadic:function(e,t){return ue(e,this,le,t.cache.create(),t.serializer)}}
!function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"}(pe||(pe={}))
var ye,ge=function(e){function t(t,n,r){var i=e.call(this,t)||this
return i.code=n,i.originalMessage=r,i}return a(t,e),t.prototype.toString=function(){return"[formatjs Error: "+this.code+"] "+this.message},t}(Error),ve=function(e){function t(t,n,r,i){return e.call(this,'Invalid values for "'+t+'": "'+n+'". Options are "'+Object.keys(r).join('", "')+'"',pe.INVALID_VALUE,i)||this}return a(t,e),t}(ge),Oe=function(e){function t(t,n,r){return e.call(this,'Value for "'+t+'" must be of type '+n,pe.INVALID_VALUE,r)||this}return a(t,e),t}(ge),we=function(e){function t(t,n){return e.call(this,'The intl string context variable "'+t+'" was not provided to the string "'+n+'"',pe.MISSING_VALUE,n)||this}return a(t,e),t}(ge)
function je(e){return"function"==typeof e}function _e(e){return{create:function(){return{get:function(t){return e[t]},set:function(t,n){e[t]=n}}}}}!function(e){e[e.literal=0]="literal",e[e.object=1]="object"}(ye||(ye={}))
var Se,Ee=function(){function e(t,n,r,i){var a,o=this
if(void 0===n&&(n=e.defaultLocale),this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(e){var t=o.formatToParts(e)
if(1===t.length)return t[0].value
var n=t.reduce((function(e,t){return e.length&&t.type===ye.literal&&"string"==typeof e[e.length-1]?e[e.length-1]+=t.value:e.push(t.value),e}),[])
return n.length<=1?n[0]||"":n},this.formatToParts=function(e){return function e(t,n,r,i,a,o,s){if(1===t.length&&d(t[0]))return[{type:ye.literal,value:t[0].value}]
for(var l=[],c=0,u=t;c<u.length;c++){var j=u[c]
if(d(j))l.push({type:ye.literal,value:j.value})
else if(g(j))"number"==typeof o&&l.push({type:ye.literal,value:r.getNumberFormat(n).format(o)})
else{var _=j.value
if(!a||!(_ in a))throw new we(_,s)
var S=a[_]
if(f(j))S&&"string"!=typeof S&&"number"!=typeof S||(S="string"==typeof S||"number"==typeof S?String(S):""),l.push({type:"string"==typeof S?ye.literal:ye.object,value:S})
else if(p(j)){var E="string"==typeof j.style?i.date[j.style]:w(j.style)?j.style.parsedOptions:void 0
l.push({type:ye.literal,value:r.getDateTimeFormat(n,E).format(S)})}else if(b(j))E="string"==typeof j.style?i.time[j.style]:w(j.style)?j.style.parsedOptions:void 0,l.push({type:ye.literal,value:r.getDateTimeFormat(n,E).format(S)})
else if(h(j))(E="string"==typeof j.style?i.number[j.style]:O(j.style)?j.style.parsedOptions:void 0)&&E.scale&&(S*=E.scale||1),l.push({type:ye.literal,value:r.getNumberFormat(n,E).format(S)})
else{if(v(j)){var x=j.children,I=j.value,C=a[I]
if(!je(C))throw new Oe(I,"function",s)
var L=C(e(x,n,r,i,a,o).map((function(e){return e.value})))
Array.isArray(L)||(L=[L]),l.push.apply(l,L.map((function(e){return{type:"string"==typeof e?ye.literal:ye.object,value:e}})))}if(m(j)){if(!(M=j.options[S]||j.options.other))throw new ve(j.value,S,Object.keys(j.options),s)
l.push.apply(l,e(M.value,n,r,i,a))}else if(y(j)){var M
if(!(M=j.options["="+S])){if(!Intl.PluralRules)throw new ge('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',pe.MISSING_INTL_API,s)
var A=r.getPluralRules(n,{type:j.pluralType}).select(S-(j.offset||0))
M=j.options[A]||j.options.other}if(!M)throw new ve(j.value,S,Object.keys(j.options),s)
l.push.apply(l,e(M.value,n,r,i,a,S-(j.offset||0)))}}}}return function(e){return e.length<2?e:e.reduce((function(e,t){var n=e[e.length-1]
return n&&n.type===ye.literal&&t.type===ye.literal?n.value+=t.value:e.push(t),e}),[])}(l)}(o.ast,o.locales,o.formatters,o.formats,e,void 0,o.message)},this.resolvedOptions=function(){return{locale:Intl.NumberFormat.supportedLocalesOf(o.locales)[0]}},this.getAst=function(){return o.ast},"string"==typeof t){if(this.message=t,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`")
this.ast=e.__parse(t,{ignoreTag:null==i?void 0:i.ignoreTag})}else this.ast=t
if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.")
this.formats=function(e,t){return t?Object.keys(e).reduce((function(n,r){var i,a
return n[r]=(i=e[r],(a=t[r])?c(c(c({},i||{}),a||{}),Object.keys(i).reduce((function(e,t){return e[t]=c(c({},i[t]),a[t]||{}),e}),{})):i),n}),c({},e)):e}(e.formats,r),this.locales=n,this.formatters=i&&i.formatters||(void 0===(a=this.formatterCache)&&(a={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:se((function(){for(var e,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
return new((e=Intl.NumberFormat).bind.apply(e,u([void 0],t,!1)))}),{cache:_e(a.number),strategy:me.variadic}),getDateTimeFormat:se((function(){for(var e,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
return new((e=Intl.DateTimeFormat).bind.apply(e,u([void 0],t,!1)))}),{cache:_e(a.dateTime),strategy:me.variadic}),getPluralRules:se((function(){for(var e,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
return new((e=Intl.PluralRules).bind.apply(e,u([void 0],t,!1)))}),{cache:_e(a.pluralRules),strategy:me.variadic})})}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=(new Intl.NumberFormat).resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.__parse=oe,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}()
!function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"}(Se||(Se={}))
var xe=function(e){function t(n,r,i){var a=this,o=i?i instanceof Error?i:new Error(String(i)):void 0
return(a=e.call(this,"[@formatjs/intl Error "+n+"] "+r+" \n"+(o?"\n"+o.message+"\n"+o.stack:""))||this).code=n,"function"==typeof Error.captureStackTrace&&Error.captureStackTrace(a,t),a}return a(t,e),t}(Error),Ie=function(e){function t(t,n){return e.call(this,Se.UNSUPPORTED_FORMATTER,t,n)||this}return a(t,e),t}(xe),Ce=function(e){function t(t,n){return e.call(this,Se.INVALID_CONFIG,t,n)||this}return a(t,e),t}(xe),Le=function(e){function t(t,n){return e.call(this,Se.MISSING_DATA,t,n)||this}return a(t,e),t}(xe),Me=function(e){function t(t,n,r){return e.call(this,Se.FORMAT_ERROR,t+" \nLocale: "+n+"\n",r)||this}return a(t,e),t}(xe),Ae=function(e){function t(t,n,r,i){var a=e.call(this,t+" \nMessageID: "+(null==r?void 0:r.id)+"\nDefault Message: "+(null==r?void 0:r.defaultMessage)+"\nDescription: "+(null==r?void 0:r.description)+" \n",n,i)||this
return a.descriptor=r,a}return a(t,e),t}(Me),Te=function(e){function t(t,n){var r=e.call(this,Se.MISSING_TRANSLATION,'Missing message: "'+t.id+'" for locale "'+n+'", using '+(t.defaultMessage?"default message":"id")+" as fallback.")||this
return r.descriptor=t,r}return a(t,e),t}(xe)
function Re(e,t,n){return void 0===n&&(n={}),t.reduce((function(t,r){return r in e?t[r]=e[r]:r in n&&(t[r]=n[r]),t}),{})}var ke={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:function(e){}}
function Pe(e){return{create:function(){return{get:function(t){return e[t]},set:function(t,n){e[t]=n}}}}}function Ne(e,t,n,r){var i,a=e&&e[t]
if(a&&(i=a[n]),i)return i
r(new Ie("No "+t+" format named: "+n))}function De(e,t){return Object.keys(e).reduce((function(n,r){return n[r]=c({timeZone:t},e[r]),n}),{})}function Ve(e,t){return Object.keys(c(c({},e),t)).reduce((function(n,r){return n[r]=c(c({},e[r]||{}),t[r]||{}),n}),{})}function Fe(e,t){if(!t)return e
var n=Ee.formats
return c(c(c({},n),e),{date:Ve(De(n.date,t),De(e.date||{},t)),time:Ve(De(n.time,t),De(e.time||{},t))})}function ze(e,t,n,r,i){var a=e.locale,o=e.formats,l=e.messages,u=e.defaultLocale,d=e.defaultFormats,f=e.fallbackOnEmptyString,h=e.onError,p=e.timeZone,b=e.defaultRichTextElements
void 0===n&&(n={id:""})
var m=n.id,y=n.defaultMessage
!function(e,t,n){if(void 0===n&&(n=Error),!e)throw new n("[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue")}(!!m)
var g=String(m),v=l&&Object.prototype.hasOwnProperty.call(l,g)&&l[g]
if(Array.isArray(v)&&1===v.length&&v[0].type===s.literal)return v[0].value
if(!r&&v&&"string"==typeof v&&!b)return v.replace(/'\{(.*?)\}'/gi,"{$1}")
if(r=c(c({},b),r||{}),o=Fe(o,p),d=Fe(d,p),!v){if(!1===f&&""===v)return v
if((!y||a&&a.toLowerCase()!==u.toLowerCase())&&h(new Te(n,a)),y)try{return t.getMessageFormat(y,u,d,i).format(r)}catch(e){return h(new Ae('Error formatting default message for: "'+g+'", rendering default message verbatim',a,n,e)),"string"==typeof y?y:g}return g}try{return t.getMessageFormat(v,a,o,c({formatters:t},i||{})).format(r)}catch(e){h(new Ae('Error formatting message: "'+g+'", using '+(y?"default message":"id")+" as fallback.",a,n,e))}if(y)try{return t.getMessageFormat(y,u,d,i).format(r)}catch(e){h(new Ae('Error formatting the default message for: "'+g+'", rendering message verbatim',a,n,e))}return"string"==typeof v?v:"string"==typeof y?y:g}var Ue=["localeMatcher","formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem"]
function $e(e,t,n,r){var i=e.locale,a=e.formats,o=e.onError,s=e.timeZone
void 0===r&&(r={})
var l=r.format,u=c(c({},s&&{timeZone:s}),l&&Ne(a,t,l,o)),d=Re(r,Ue,u)
return"time"!==t||d.hour||d.minute||d.second||d.timeStyle||d.dateStyle||(d=c(c({},d),{hour:"numeric",minute:"numeric"})),n(i,d)}function Ge(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r]
var i=n[0],a=n[1],o=void 0===a?{}:a,s="string"==typeof i?new Date(i||0):i
try{return $e(e,"date",t,o).format(s)}catch(t){e.onError(new xe(Se.FORMAT_ERROR,"Error formatting date.",t))}return String(s)}function qe(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r]
var i=n[0],a=n[1],o=void 0===a?{}:a,s="string"==typeof i?new Date(i||0):i
try{return $e(e,"time",t,o).format(s)}catch(t){e.onError(new xe(Se.FORMAT_ERROR,"Error formatting time.",t))}return String(s)}function Be(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r]
var i=n[0],a=n[1],o=n[2],s=void 0===o?{}:o,l=e.timeZone,c=e.locale,u=e.onError,d=Re(s,Ue,l?{timeZone:l}:{})
try{return t(c,d).formatRange(i,a)}catch(e){u(new xe(Se.FORMAT_ERROR,"Error formatting date time range.",e))}return String(i)}function He(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r]
var i=n[0],a=n[1],o=void 0===a?{}:a,s="string"==typeof i?new Date(i||0):i
try{return $e(e,"date",t,o).formatToParts(s)}catch(t){e.onError(new xe(Se.FORMAT_ERROR,"Error formatting date.",t))}return[]}function We(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r]
var i=n[0],a=n[1],o=void 0===a?{}:a,s="string"==typeof i?new Date(i||0):i
try{return $e(e,"time",t,o).formatToParts(s)}catch(t){e.onError(new xe(Se.FORMAT_ERROR,"Error formatting time.",t))}return[]}var Ze=["localeMatcher","style","type","fallback"]
function Ye(e,t,n,r){var i=e.locale,a=e.onError
Intl.DisplayNames||a(new ge('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n',pe.MISSING_INTL_API))
var o=Re(r,Ze)
try{return t(i,o).of(n)}catch(e){a(new xe(Se.FORMAT_ERROR,"Error formatting display name.",e))}}var Je=["localeMatcher","type","style"],Xe=Date.now()
function Ke(e,t,n,r){void 0===r&&(r={})
var i=Qe(e,t,n,r).reduce((function(e,t){var n=t.value
return"string"!=typeof n?e.push(n):"string"==typeof e[e.length-1]?e[e.length-1]+=n:e.push(n),e}),[])
return 1===i.length?i[0]:i}function Qe(e,t,n,r){var i=e.locale,a=e.onError
void 0===r&&(r={}),Intl.ListFormat||a(new ge('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n',pe.MISSING_INTL_API))
var o=Re(r,Je)
try{var s={},l=n.map((function(e,t){if("object"==typeof e){var n=function(e){return Xe+"_"+e+"_"+Xe}(t)
return s[n]=e,n}return String(e)}))
return t(i,o).formatToParts(l).map((function(e){return"literal"===e.type?e:c(c({},e),{value:s[e.value]||e.value})}))}catch(e){a(new xe(Se.FORMAT_ERROR,"Error formatting list.",e))}return n}var et=["localeMatcher","type"]
function tt(e,t,n,r){var i=e.locale,a=e.onError
void 0===r&&(r={}),Intl.PluralRules||a(new ge('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',pe.MISSING_INTL_API))
var o=Re(r,et)
try{return t(i,o).select(n)}catch(e){a(new Me("Error formatting plural.",i,e))}return"other"}var nt=["numeric","style"]
function rt(e,t,n,r,i){void 0===i&&(i={}),r||(r="second"),Intl.RelativeTimeFormat||e.onError(new ge('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n',pe.MISSING_INTL_API))
try{return function(e,t,n){var r=e.locale,i=e.formats,a=e.onError
void 0===n&&(n={})
var o=n.format,s=!!o&&Ne(i,"relative",o,a)||{}
return t(r,Re(n,nt,s))}(e,t,i).format(n,r)}catch(t){e.onError(new Me("Error formatting relative time.",e.locale,t))}return String(n)}var it=["localeMatcher","style","currency","currencyDisplay","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem"]
function at(e,t,n){var r=e.locale,i=e.formats,a=e.onError
void 0===n&&(n={})
var o=n.format,s=o&&Ne(i,"number",o,a)||{}
return t(r,Re(n,it,s))}function ot(e,t,n,r){void 0===r&&(r={})
try{return at(e,t,r).format(n)}catch(t){e.onError(new xe(Se.FORMAT_ERROR,"Error formatting number.",t))}return String(n)}function st(e,t,n,r){void 0===r&&(r={})
try{return at(e,t,r).formatToParts(n)}catch(t){e.onError(new xe(Se.FORMAT_ERROR,"Error formatting number.",t))}return[]}function lt(e,t){var n=function(e){void 0===e&&(e={dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}})
var t=Intl.RelativeTimeFormat,n=Intl.ListFormat,r=Intl.DisplayNames,i=se((function(){for(var e,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
return new((e=Intl.DateTimeFormat).bind.apply(e,u([void 0],t,!1)))}),{cache:Pe(e.dateTime),strategy:me.variadic}),a=se((function(){for(var e,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
return new((e=Intl.NumberFormat).bind.apply(e,u([void 0],t,!1)))}),{cache:Pe(e.number),strategy:me.variadic}),o=se((function(){for(var e,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
return new((e=Intl.PluralRules).bind.apply(e,u([void 0],t,!1)))}),{cache:Pe(e.pluralRules),strategy:me.variadic})
return{getDateTimeFormat:i,getNumberFormat:a,getMessageFormat:se((function(e,t,n,r){return new Ee(e,t,n,c({formatters:{getNumberFormat:a,getDateTimeFormat:i,getPluralRules:o}},r||{}))}),{cache:Pe(e.message),strategy:me.variadic}),getRelativeTimeFormat:se((function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]
return new(t.bind.apply(t,u([void 0],e,!1)))}),{cache:Pe(e.relativeTime),strategy:me.variadic}),getPluralRules:o,getListFormat:se((function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
return new(n.bind.apply(n,u([void 0],e,!1)))}),{cache:Pe(e.list),strategy:me.variadic}),getDisplayNames:se((function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
return new(r.bind.apply(r,u([void 0],e,!1)))}),{cache:Pe(e.displayNames),strategy:me.variadic})}}(t),r=c(c({},ke),e),i=r.locale,a=r.defaultLocale,o=r.onError
return i?!Intl.NumberFormat.supportedLocalesOf(i).length&&o?o(new Le('Missing locale data for locale: "'+i+'" in Intl.NumberFormat. Using default locale: "'+a+'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details')):!Intl.DateTimeFormat.supportedLocalesOf(i).length&&o&&o(new Le('Missing locale data for locale: "'+i+'" in Intl.DateTimeFormat. Using default locale: "'+a+'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details')):(o&&o(new Ce('"locale" was not configured, using "'+a+'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details')),r.locale=r.defaultLocale||"en"),function(e){var t
e.defaultRichTextElements&&"string"==typeof((t=e.messages||{})?t[Object.keys(t)[0]]:void 0)&&console.warn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution')}(r),c(c({},r),{formatters:n,formatNumber:ot.bind(null,r,n.getNumberFormat),formatNumberToParts:st.bind(null,r,n.getNumberFormat),formatRelativeTime:rt.bind(null,r,n.getRelativeTimeFormat),formatDate:Ge.bind(null,r,n.getDateTimeFormat),formatDateToParts:He.bind(null,r,n.getDateTimeFormat),formatTime:qe.bind(null,r,n.getDateTimeFormat),formatDateTimeRange:Be.bind(null,r,n.getDateTimeFormat),formatTimeToParts:We.bind(null,r,n.getDateTimeFormat),formatPlural:tt.bind(null,r,n.getPluralRules),formatMessage:ze.bind(null,r,n),formatList:Ke.bind(null,r,n.getListFormat),formatListToParts:Qe.bind(null,r,n.getListFormat),formatDisplayName:Ye.bind(null,r,n.getDisplayNames)})}const ct={Arabic:"ar",Bulgarian:"bg",Bosnian:"bs",Catalan:"ca",Czech:"cs",Danish:"da",German:"de",Greek:"el",English:"en",Spanish:"es",Estonian:"et",Finnish:"fi",French:"fr",Hebrew:"he",Croatian:"hr",Hungarian:"hu",Indonesian:"id",Italian:"it",Japanese:"ja",Korean:"ko",Lithuanian:"lt",Latvian:"lv",NorwegianBokml:"nb",Dutch:"nl",Polish:"pl",PortugueseBrazil:"pt-BR",PortuguesePortugal:"pt-PT",Romanian:"ro",Russian:"ru",Serbian:"sr",Slovenian:"sl",Slovak:"sk",Swedish:"sv",Thai:"th",Turkish:"tr",Ukrainian:"uk",Vietnamese:"vi",ChineseChina:"zh-CN",ChineseHongKong:"zh-HK",ChineseTaiwan:"zh-TW"},ut=[...Object.values(ct),"en-AU","en-GB","es-ES","es-MX","de-CH","de-DE","it-CH","it-IT"],dt=[ct.Arabic,ct.Hebrew],ft=(e,t)=>{const n=e=>e&&"object"==typeof e
return n(e)&&n(t)?(Object.keys(t).forEach(r=>{const i=e[r],a=t[r]
Array.isArray(i)&&Array.isArray(a)?e[r]=i.concat(a):n(i)&&n(a)?e[r]=ft(Object.assign({},i),a):e[r]=a}),e):t},ht=ct.English
function pt(e=document.documentElement){var t
const n=("[lang]",function e(t){let n
return n=void 0===t||t===document||t===window?null:t.closest("[lang]")||e(t.getRootNode().host),n}(e))
const r=null!==(t=null==n?void 0:n.lang)&&void 0!==t?t:window.navigator.language,i=function(e){let t=ht
if(void 0!==e){const n=Object.values(ct),r=n.filter(e=>-1!==e.indexOf("-"))
if(-1!==e.indexOf("-")){const[t,n]=e.split("-")
e=`${t}-${n.toUpperCase()}`}if(!0===r.includes(e))t=e
else{const r=function(e){const t=null==e?void 0:e.match(/^([a-z]{2})-([A-Z]{2})$/)
let n=ht
return null!=t&&(null==t?void 0:t.length)>1?n=t[1]:2===(null==e?void 0:e.length)&&e.toLowerCase()===e&&(n=e),n}(e)
!0===n.includes(r)&&(t=r)}}return t}(r),a=function(e){let t=ut.find(t=>t===e)
if(void 0===t&&(t=e),void 0!==t&&-1!==t.indexOf("-")){const[e,n]=t.split("-")
t=`${e}-${n.toUpperCase()}`}return t}(r),o=dt.includes(i)
let s=e.getAttribute("dir")
return"ltr"!==s&&"rtl"!==s&&(s=!0===o?"rtl":"ltr"),{locale:i,rtl:o,formatLocale:a,direction:s}}class bt{constructor(e,t,n){this._componentName=e,this._intl=t,this.direction=n}get locale(){return this._intl.locale}t(e,t,n){const r=`${this._componentName}.${e}`
let i=this._intl.formatMessage({id:r},t,n)
return void 0!==(null==n?void 0:n.fallback)&&i===r&&(i=n.fallback),i}formatRelativeTime(e,t,n){return this._intl.formatRelativeTime(e,t,n)}formatDisplayName(e,t){return this._intl.formatDisplayName(e,t)}formatDate(e,t){return this._intl.formatDate(e,t)}formatNumber(e,t){return this._intl.formatNumber(e,t)}}const mt=new class{constructor(e={}){this._intls={}
const{assetPath:t="t9n",fileNamePattern:n="{tagName}.t9n.{locale}.json"}=e
this.assetPath=t,this.fileNamePattern=n}getIntlForComponent(e){const{locale:t,direction:n}=pt(e),r=e.tagName.toLowerCase(),i=lt({locale:t,messages:{}})
return this._intls[t]=i,new bt(r,i,n)}async loadIntlForComponent(e,t){const{locale:n,direction:i}=pt(e),{fileNamePattern:a,assetPath:o}=this,{strings:s}=await async function(e,t,n){const r=e.tagName.toLowerCase(),{locale:i}=pt(e)
return{strings:await async function(e){const{path:t,locale:n,baseURL:r,fileNamePattern:i="{tagName}.t9n.{locale}.json"}=e,a=e=>i.replace("{tagName}",t).replace("{locale}",e),o=await fetch(`${r}/${a(ht)}`),s=await o.json()
let l={}
if(n!==ht)try{const e=await fetch(`${r}/${a(n)}`)
l=await e.json()}catch(e){console.warn(`Unable to fetch locale file for ${t} component for locale ${n}`)}return ft(s,l)}({path:r,locale:i,baseURL:t,fileNamePattern:n})}}(e,t||Object(r.f)(o),a),l=e.tagName.toLowerCase()
let c=this._intls[n]
return c=lt({locale:n,messages:this.parseStrings(s,l,c?c.messages:{})},{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}),this._intls[n]=c,new bt(l,c,i)}parseStrings(e,t,n){return Object.entries(e).reduce((e,[n,r])=>("string"==typeof r?e[`${t}.${n}`]=r:this.parseStrings(r,`${t}.${n}`,e),e),n)}}({assetPath:"locales",fileNamePattern:"{tagName}.i18n.{locale}.json"})},1229:function(e,t,n){"use strict"
n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return f}))
var r=n(110),i=n(235),a=n(23),o=n(973),s=n(374)
function l(e,t,n=!1,r){return new Promise((s,l)=>{if(Object(o.k)(r))return void l(c())
let u=()=>{h(),l(new Error("Unable to load "+t))},d=()=>{const t=e
h(),s(t)},f=()=>{if(!e)return
const t=e
h(),t.src="",l(c())}
const h=()=>{Object(i.a)("esri-image-decode")||(e.removeEventListener("error",u),e.removeEventListener("load",d)),u=null,d=null,e=null,Object(a.l)(r)&&r.removeEventListener("abort",f),f=null,n&&URL.revokeObjectURL(t)}
Object(a.l)(r)&&r.addEventListener("abort",f),Object(i.a)("esri-image-decode")?e.decode().then(d,u):(e.addEventListener("error",u),e.addEventListener("load",d))})}function c(){try{return new DOMException("Aborted","AbortError")}catch{const e=new Error
return e.name="AbortError",e}}function u(e){r.default.request.crossOriginNoCorsDomains||(r.default.request.crossOriginNoCorsDomains={})
const t=r.default.request.crossOriginNoCorsDomains
for(let r of e){var n,i,a
r=r.toLowerCase(),/^https?:\/\//.test(r)?t[null!=(n=Object(s.p)(r))?n:""]=0:(t[null!=(i=Object(s.p)("http://"+r))?i:""]=0,t[null!=(a=Object(s.p)("https://"+r))?a:""]=0)}}function d(e){const t=r.default.request.crossOriginNoCorsDomains
if(t){let n=Object(s.p)(e)
if(n)return n=n.toLowerCase(),!Object(s.v)(n,Object(s.m)())&&t[n]<Date.now()-36e5}return!1}async function f(e){var t
const n=r.default.request.crossOriginNoCorsDomains,i=Object(s.p)(e)
n&&i&&(n[i.toLowerCase()]=Date.now())
const a=Object(s.Q)(e)
e=a.path,"json"===(null==(t=a.query)?void 0:t.f)&&(e+="?f=json")
try{await fetch(e,{mode:"no-cors",credentials:"include"})}catch{}}},1230:function(e,t,n){"use strict"
function r(e,t,n,r){return function(e){return"function"==typeof e}(e)?e(t,n,r):e}function i(e){return[e.r,e.g,e.b,e.a]}function a(e){let t=e.length
for(;t--;)if(!" /-,\n".includes(e.charAt(t)))return!1
return!0}function o(e,t){const n=[]
let r=0,i=-1
do{if(i=e.indexOf("[",r),i>=r){if(i>r){const t=e.substr(r,i-r)
n.push([t,null,a(t)])}if(r=i+1,i=e.indexOf("]",r),i>=r){if(i>r){const a=t[e.substr(r,i-r)]
a&&n.push([null,a,!1])}r=i+1}}}while(-1!==i)
if(r<e.length-1){const t=e.substr(r)
n.push([t,null,a(t)])}return n}function s(e,t,n){let r="",i=null
for(const n of t){const[t,a,o]=n
if(t)o?i=t:(i&&(r+=i,i=null),r+=t)
else{const t=e.attributes[a]
t&&(i&&(r+=i,i=null),r+=t)}}return c(r,n)}function l(e,t,n){const r=o(t,e)
return e=>s(e,r,n)}function c(e,t){switch("string"!=typeof e&&(e=String(e)),t){case"LowerCase":return e.toLowerCase()
case"Allcaps":return e.toUpperCase()
default:return e}}function u(e,t,n,r,i,a,o=!0){const s=t/i,l=n/a,c=Math.ceil(s/2),u=Math.ceil(l/2)
for(let n=0;n<a;n++)for(let d=0;d<i;d++){const f=4*(d+(o?a-n-1:n)*i)
let h=0,p=0,b=0,m=0,y=0,g=0,v=0
const O=(n+.5)*l
for(let r=Math.floor(n*l);r<(n+1)*l;r++){const n=Math.abs(O-(r+.5))/u,i=(d+.5)*s,a=n*n
for(let n=Math.floor(d*s);n<(d+1)*s;n++){let o=Math.abs(i-(n+.5))/c
const s=Math.sqrt(a+o*o)
s>=-1&&s<=1&&(h=2*s*s*s-3*s*s+1,h>0&&(o=4*(n+r*t),v+=h*e[o+3],b+=h,e[o+3]<255&&(h=h*e[o+3]/250),m+=h*e[o],y+=h*e[o+1],g+=h*e[o+2],p+=h))}}r[f]=m/p,r[f+1]=y/p,r[f+2]=g/p,r[f+3]=v/b}}function d(e){return e?{r:e[0],g:e[1],b:e[2],a:e[3]/255}:{r:0,g:0,b:0,a:0}}function f(e){var t,n
return null!=(t=null==(n=e.data)?void 0:n.symbol)?t:null}function h(e){return"CIMVectorMarker"===e.type||"CIMPictureMarker"===e.type||"CIMBarChartMarker"===e.type||"CIMCharacterMarker"===e.type||"CIMPieChartMarker"===e.type||"CIMStackedBarChartMarker"===e.type}function p(e){return"CIMGradientStroke"===e.type||"CIMPictureStroke"===e.type||"CIMSolidStroke"===e.type}function b(e){return null!=e&&("CIMGradientFill"===e.type||"CIMHatchFill"===e.type||"CIMPictureFill"===e.type||"CIMSolidFill"===e.type||"CIMWaterFill"===e.type)}function m(e){return null!=e&&("CIMMarkerPlacementAlongLineRandomSize"===e.type||"CIMMarkerPlacementAlongLineSameSize"===e.type||"CIMMarkerPlacementAlongLineVariableSize"===e.type||"CIMMarkerPlacementAtExtremities"===e.type||"CIMMarkerPlacementAtMeasuredUnits"===e.type||"CIMMarkerPlacementAtRatioPositions"===e.type||"CIMMarkerPlacementOnLine"===e.type||"CIMMarkerPlacementOnVertices"===e.type)}n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return M})),n.d(t,"e",(function(){return i})),n.d(t,"f",(function(){return l})),n.d(t,"g",(function(){return r})),n.d(t,"h",(function(){return d})),n.d(t,"i",(function(){return S})),n.d(t,"j",(function(){return _})),n.d(t,"k",(function(){return C})),n.d(t,"l",(function(){return L})),n.d(t,"m",(function(){return E})),n.d(t,"n",(function(){return w})),n.d(t,"o",(function(){return j})),n.d(t,"p",(function(){return x})),n.d(t,"q",(function(){return I})),n.d(t,"r",(function(){return g})),n.d(t,"s",(function(){return y})),n.d(t,"t",(function(){return O})),n.d(t,"u",(function(){return b})),n.d(t,"v",(function(){return h})),n.d(t,"w",(function(){return m})),n.d(t,"x",(function(){return p})),n.d(t,"y",(function(){return v})),n.d(t,"z",(function(){return A})),n.d(t,"A",(function(){return T})),n.d(t,"B",(function(){return u})),n.d(t,"C",(function(){return f}))
const y=(e,t=0)=>null==e||isNaN(e)?t:e,g=e=>e.tintColor?d(e.tintColor):{r:255,g:255,b:255,a:1},v=e=>{if(!e)return!1
for(const t of e)switch(t.type){case"CIMGeometricEffectBuffer":case"CIMGeometricEffectOffset":case"CIMGeometricEffectDonut":return!0}return!1}
function O(){return Promise.all([n.e(11),n.e(373)]).then(n.bind(null,1632))}function w(e){if(!e)return"normal"
switch(e.toLowerCase()){case"italic":return"italic"
case"oblique":return"oblique"
default:return"normal"}}function j(e){if(!e)return"normal"
switch(e.toLowerCase()){case"bold":return"bold"
case"bolder":return"bolder"
case"lighter":return"lighter"
default:return"normal"}}function _(e){let t="",n=""
if(e){const r=e.toLowerCase()
r.includes("italic")?t="italic":r.includes("oblique")&&(t="oblique"),r.includes("bold")?n="bold":r.includes("light")&&(n="lighter")}return{style:t,weight:n}}function S(e){return e.underline?"underline":e.strikethrough?"line-through":"none"}function E(e){if(!e)return null
switch(e.type){case"CIMPolygonSymbol":if(e.symbolLayers)for(const t of e.symbolLayers){const e=E(t)
if(null!=e)return e}break
case"CIMTextSymbol":return E(e.symbol)
case"CIMSolidFill":return e.color}}function x(e){if(e)switch(e.type){case"CIMPolygonSymbol":case"CIMLineSymbol":{const t=e.symbolLayers
if(t)for(const e of t){const t=x(e)
if(null!=t)return t}break}case"CIMTextSymbol":return x(e.symbol)
case"CIMSolidStroke":case"CIMSolidFill":return e.color}}function I(e){if(e)switch(e.type){case"CIMPolygonSymbol":case"CIMLineSymbol":if(e.symbolLayers)for(const t of e.symbolLayers){const e=I(t)
if(void 0!==e)return e}break
case"CIMTextSymbol":return I(e.symbol)
case"CIMSolidStroke":case"CIMGradientStroke":case"CIMPictureStroke":return e.width}}function C(e){switch(e){case"Left":default:return"left"
case"Right":return"right"
case"Center":case"Justify":return"center"}}function L(e){switch(e){case"Top":default:return"top"
case"Center":return"middle"
case"Baseline":return"baseline"
case"Bottom":return"bottom"}}function M(e){return(e?Object.keys(e):[]).map(t=>({name:t,alias:t,type:"string"==typeof e[t]?"esriFieldTypeString":"esriFieldTypeDouble"}))}const A=e=>e.includes("data:image/svg+xml")
function T(e){if(!e)return null
switch(e.type){case"CIMPointSymbol":case"CIMTextSymbol":return"esriGeometryPoint"
case"CIMLineSymbol":return"esriGeometryPolyline"
case"CIMPolygonSymbol":return"esriGeometryPolygon"
default:return null}}},1236:function(e,t,n){"use strict"
n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return o}))
var r=n(1158),i=n(1094),a=n(1253)
const o={key:"type",base:i.a,typeMap:{algorithmic:r.a,multipart:a.a}}
function s(e){return e&&e.type?"algorithmic"===e.type?r.a.fromJSON(e):"multipart"===e.type?a.a.fromJSON(e):null:null}},1240:function(e,t,n){"use strict"
function r(e){var t,n,r
return null!=(t=null==(n=e.match(i))||null==(r=n[1])?void 0:r.replace(/\\'/g,"'"))?t:null}n.d(t,"a",(function(){return r}))
const i=/^hash\(\$feature\['((\\'|[^'])+)'\]\) \* 8\.381e-8$/},1241:function(e,t,n){"use strict"
n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return y}))
var r=n(995),i=n(446),a=n(1145),o=n(1336),s=n(1065),l=n(1455),c=n(1078),u=n(1402),d=n(1073),f=n(1456),h=n(1218),p=n(1239),b=n(1454)
const m={retainId:!1,ignoreDrivers:!1,hasLabelingContext:!0}
function y(e,t=m){if(!e)return{symbol:null}
const{retainId:n=m.retainId,ignoreDrivers:y=m.ignoreDrivers,hasLabelingContext:g=m.hasLabelingContext,retainCIM:v=m.retainCIM}=t
let O=null
if(Object(r.c)(e)||e instanceof a.a)O=e.clone()
else if("cim"===e.type){var w,j
const t=null==(w=e.data)||null==(j=w.symbol)?void 0:j.type
if("CIMPointSymbol"!==t)return{error:new i.a("symbol-conversion:unsupported-cim-symbol",`CIM symbol of type '${t||"unknown"}' is unsupported in 3D`,{symbol:e})}
O=v?e.clone():o.a.fromCIMSymbol(e)}else if(e instanceof s.a)O=l.a.fromSimpleLineSymbol(e)
else if(e instanceof c.a)O=o.a.fromSimpleMarkerSymbol(e)
else if(e instanceof u.a)O=o.a.fromPictureMarkerSymbol(e)
else if(e instanceof d.a)O=t.geometryType&&"mesh"===t.geometryType?f.a.fromSimpleFillSymbol(e):h.a.fromSimpleFillSymbol(e)
else{if(!(e instanceof p.a))return{error:new i.a("symbol-conversion:unsupported-2d-symbol",`2D symbol of type '${e.type||e.declaredClass}' is unsupported in 3D`,{symbol:e})}
O=g?b.a.fromTextSymbol(e):o.a.fromTextSymbol(e)}if(n&&O&&"cim"!==O.type&&(O.id=e.id),y&&Object(r.c)(O))for(let e=0;e<O.symbolLayers.length;++e)O.symbolLayers.getItemAt(e)._ignoreDrivers=!0
return{symbol:O}}},1245:function(e,t,n){"use strict"
n.d(t,"a",(function(){return d}))
var r,i=n(968),a=n(990),o=n(972),s=n(970),l=n(971),c=(n(445),n(969))
let u=r=class extends o.a{constructor(e){super(e),this.color=null,this.ratio=null}clone(){return new r({color:this.color,ratio:this.ratio})}}
Object(i.a)([Object(s.b)({type:a.a,json:{type:[l.a],default:null,write:!0}})],u.prototype,"color",void 0),Object(i.a)([Object(s.b)({type:Number,json:{write:!0}})],u.prototype,"ratio",void 0),u=r=Object(i.a)([Object(c.a)("esri.renderers.support.HeatmapColorStop")],u)
const d=u},1253:function(e,t,n){"use strict"
n.d(t,"a",(function(){return d}))
var r,i=n(968),a=n(234),o=n(970),s=(n(971),n(969)),l=n(1158),c=n(1094)
let u=r=class extends c.a{constructor(e){super(e),this.colorRamps=null,this.type="multipart"}clone(){return new r({colorRamps:Object(a.a)(this.colorRamps)})}}
Object(i.a)([Object(o.b)({type:[l.a],json:{write:!0}})],u.prototype,"colorRamps",void 0),Object(i.a)([Object(o.b)({type:["multipart"]})],u.prototype,"type",void 0),u=r=Object(i.a)([Object(s.a)("esri.rest.support.MultipartColorRamp")],u)
const d=u},1254:function(e,t,n){"use strict"
n.r(t),n.d(t,"DictionaryLoader",(function(){return b}))
var r=n(990),i=n(771),a=n(446),o=n(233),s=n(1189),l=n(23),c=n(973),u=n(447),d=n(1010),f=n(781)
const h="esri.renderers.support.DictionaryLoader",p={type:"CIMSimpleLineCallout",lineSymbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",width:.5,color:[0,0,0,255]}]}}
class b{constructor(e,t,n){this.config=null,this.fieldMap=null,this.url=null,this._ongoingRequests=new Map,this._symbolCache=new s.a(100),this._dictionaryPromise=null,this.url=e,this.config=t,this.fieldMap=n}getSymbolFields(){return this._symbolFields}async getSymbolAsync(e,t){let n
this._dictionaryPromise||(this._dictionaryPromise=this.fetchResources(t))
try{n=await this._dictionaryPromise}catch(e){if(Object(c.j)(e))return this._dictionaryPromise=null,null}const i={}
if(this.fieldMap)for(const t of this._symbolFields){const n=this.fieldMap[t]
if(n&&null!=e.attributes[n]){const r=""+e.attributes[n]
i[t]=r}else i[t]=""}const a=null==n?void 0:n(i,t)
if(!a||"string"!=typeof a)return null
const o=Object(u.b)(a).toString(),s=this._symbolCache.get(o)
if(s)return s.catch(()=>{this._symbolCache.pop(o)}),s
const d=a.split(";"),f=[],h=[]
for(const e of d)if(e)if(e.includes("po:")){const t=e.substr(3).split("|")
if(3===t.length){const e=t[0],n=t[1]
let i=t[2]
if("DashTemplate"===n)i=i.split(" ").map(e=>Number(e))
else if("Color"===n){const e=new r.a(i).toRgba()
i=[e[0],e[1],e[2],255*e[3]]}else i=Number(i)
h.push({primitiveName:e,propertyName:n,value:i})}}else if(e.includes("|")){for(const t of e.split("|"))if(this._itemNames.has(t)){f.push(t)
break}}else this._itemNames.has(e)&&f.push(e)
const p=!Object(l.l)(e.geometry)||!e.geometry.hasZ&&"point"===e.geometry.type,b=this._cimPartsToCIMSymbol(f,h,p,t)
return this._symbolCache.put(o,b,1),b}async fetchResources(e){if(this._dictionaryPromise)return this._dictionaryPromise
if(!this.url)return void o.a.getLogger(h).error("no valid URL!")
const t=Object(i.default)(this.url+"/resources/styles/dictionary-info.json",{responseType:"json",query:{f:"json"},signal:Object(l.l)(e)?e.signal:null}),[{data:n}]=await Promise.all([t,Object(d.e)()])
if(!n)throw this._dictionaryPromise=null,new a.a("esri.renderers.DictionaryRenderer","Bad dictionary data!")
const r=n.expression,s=n.authoringInfo
this._refSymbolUrlTemplate=this.url+"/"+n.cimRefTemplateUrl,this._itemNames=new Set(n.itemsNames),this._symbolFields=s.symbol
const c={}
if(this.config){const e=this.config
for(const t in e)c[t]=e[t]}if(s.configuration)for(const e of s.configuration)c.hasOwnProperty(e.name)||(c[e.name]=e.value)
const u=[]
if(Object(l.l)(e)&&e.fields&&this.fieldMap)for(const t of this._symbolFields){const n=this.fieldMap[t],r=e.fields.filter(e=>e.name===n)
r.length>0&&u.push({...r[0],name:t})}const f=Object(d.b)(r,Object(l.l)(e)?e.spatialReference:null,u,c).then(e=>{const t={scale:0}
return(n,r)=>{var i
if(Object(l.k)(e))return null
const a=e.repurposeFeature({geometry:null,attributes:n})
return t.scale=Object(l.l)(r)&&null!=(i=r.scale)?i:void 0,e.evaluate({$feature:a,$view:t})}}).catch(e=>(o.a.getLogger(h).error("Creating dictinoary expression failed:",e),null))
return this._dictionaryPromise=f,f}async _cimPartsToCIMSymbol(e,t,n,r){const i=new Array(e.length)
for(let t=0;t<e.length;t++)i[t]=this._getSymbolPart(e[t],r)
const a=await Promise.all(i),o=this.fieldMap
if(o)for(const e of a)m(e,o)
return new f.default({data:this._combineSymbolParts(a,t,n)})}async _getSymbolPart(e,t){if(this._ongoingRequests.has(e))return this._ongoingRequests.get(e).then(e=>e.data)
const n=this._refSymbolUrlTemplate.replace(/\{itemName\}/gi,e),r=Object(i.default)(n,{responseType:"json",query:{f:"json"},...t})
this._ongoingRequests.set(e,r)
try{return(await r).data}catch(t){throw this._ongoingRequests.delete(e),t}}_combineSymbolParts(e,t,n){if(!e||0===e.length)return null
const r={...e[0]}
if(e.length>1){r.symbolLayers=[]
for(const t of e){const e=t
r.symbolLayers.unshift(...e.symbolLayers)}}return n&&(r.callout=p),{type:"CIMSymbolReference",symbol:r,primitiveOverrides:t}}}function m(e,t){if(!e)return
const n=e.symbolLayers
if(!n)return
let r=n.length
for(;r--;){const e=n[r]
e&&!1!==e.enable&&"CIMVectorMarker"===e.type&&y(e,t)}}function y(e,t){const n=e.markerGraphics
if(n)for(const e of n){if(!e)continue
const n=e.symbol
if(n)switch(n.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":m(n,t)
break
case"CIMTextSymbol":n.fieldMap=t}}}},1257:function(e,t,n){"use strict"
n.d(t,"a",(function(){return c}))
var r,i=n(968),a=n(970),o=(n(971),n(445),n(969)),s=n(1159)
let l=r=class extends s.a{constructor(){super(...arguments),this.customValues=null}clone(){return new r({title:this.title,showLegend:this.showLegend,customValues:this.customValues&&this.customValues.slice(0)})}}
Object(i.a)([Object(a.b)({type:[Number],json:{write:!0}})],l.prototype,"customValues",void 0),l=r=Object(i.a)([Object(o.a)("esri.renderers.visualVariables.support.SizeVariableLegendOptions")],l)
const c=l},1258:function(e,t,n){"use strict"
n.d(t,"a",(function(){return u}))
var r,i=n(968),a=n(972),o=n(970),s=(n(971),n(445),n(969)),l=n(1020)
let c=r=class extends a.a{constructor(e){super(e),this.description=null,this.label=null,this.minValue=null,this.maxValue=0,this.symbol=null}clone(){return new r({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,symbol:this.symbol?this.symbol.clone():null})}getMeshHash(){const e=JSON.stringify(this.symbol)
return`${this.minValue}.${this.maxValue}.${e}`}}
Object(i.a)([Object(o.b)({type:String,json:{write:!0}})],c.prototype,"description",void 0),Object(i.a)([Object(o.b)({type:String,json:{write:!0}})],c.prototype,"label",void 0),Object(i.a)([Object(o.b)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],c.prototype,"minValue",void 0),Object(i.a)([Object(o.b)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],c.prototype,"maxValue",void 0),Object(i.a)([Object(o.b)(l.b)],c.prototype,"symbol",void 0),c=r=Object(i.a)([Object(s.a)("esri.renderers.support.ClassBreakInfo")],c)
const u=c},1264:function(e,t,n){"use strict"
n.d(t,"a",(function(){return u}))
var r,i=n(968),a=n(972),o=n(970),s=(n(971),n(445),n(969)),l=n(1020)
let c=r=class extends a.a{constructor(e){super(e),this.description=null,this.label=null,this.symbol=null,this.value=null}clone(){return new r({value:this.value,description:this.description,label:this.label,symbol:this.symbol?this.symbol.clone():null})}getMeshHash(){const e=JSON.stringify(this.symbol&&this.symbol.toJSON())
return`${this.value}.${e}`}}
Object(i.a)([Object(o.b)({type:String,json:{write:!0}})],c.prototype,"description",void 0),Object(i.a)([Object(o.b)({type:String,json:{write:!0}})],c.prototype,"label",void 0),Object(i.a)([Object(o.b)(l.b)],c.prototype,"symbol",void 0),Object(i.a)([Object(o.b)(l.c)],c.prototype,"value",void 0),c=r=Object(i.a)([Object(s.a)("esri.renderers.support.UniqueValueInfo")],c)
const u=c},1275:function(e,t,n){"use strict"
n.d(t,"a",(function(){return y})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return b}))
var r=n(1019),i=n(990),a=n(771),o=n(1446),s=n(980),l=n(1467)
const c="picture-fill",u="simple-fill",d="simple-marker",f=new o.a(1e3)
function h(e){const t=e.style
let n=null
if(e)switch(e.type){case d:"cross"!==t&&"x"!==t&&(n=e.color)
break
case u:"solid"===t?n=e.color:"none"!==t&&(n={type:"pattern",x:0,y:0,src:Object(r.b)(`esri/symbols/patterns/${t}.png`),width:5,height:5})
break
case c:n={type:"pattern",src:e.url,width:Object(s.h)(e.width)*e.xscale,height:Object(s.h)(e.height)*e.yscale,x:Object(s.h)(e.xoffset),y:Object(s.h)(e.yoffset)}
break
case"text":n=e.color
break
case"cim":n=Object(l.b)(e)}return n}function p(e,t){const n=e+"-"+t
return void 0!==f.get(n)?Promise.resolve(f.get(n)):Object(a.default)(e,{responseType:"image"}).then(e=>{const r=e.data,i=r.naturalWidth,a=r.naturalHeight,o=document.createElement("canvas")
o.width=i,o.height=a
const s=o.getContext("2d")
s.fillStyle=t,s.fillRect(0,0,i,a),s.globalCompositeOperation="destination-in",s.drawImage(r,0,0)
const l=o.toDataURL()
return f.put(n,l),l})}function b(e){if(!e)return null
let t=null
switch(e.type){case u:case c:case d:t=b(e.outline)
break
case"simple-line":{const n=Object(s.h)(e.width)
null!=e.style&&"none"!==e.style&&0!==n&&(t={color:e.color,style:m(e.style),width:n,cap:e.cap,join:"miter"===e.join?Object(s.h)(e.miterLimit):e.join})
break}default:t=null}return t}const m=(()=>{const e={}
return t=>{if(e[t])return e[t]
const n=t.replace(/-/g,"")
return e[t]=n,n}})(),y=new i.a([128,128,128])},1289:function(e,t,n){"use strict"
var r
n.d(t,"a",(function(){return r})),function(e){e[e.CGCS2000=4490]="CGCS2000",e[e.GCSMARS2000=104971]="GCSMARS2000",e[e.GCSMARS2000_SPHERE=104905]="GCSMARS2000_SPHERE",e[e.GCSMOON2000=104903]="GCSMOON2000"}(r||(r={}))},1337:function(e,t,n){"use strict"
function r(e){return"string"==typeof e?document.getElementById(e):null!=e?e:null}function i(e){for(;e.hasChildNodes();)e.removeChild(e.firstChild)}function a(e,t){const n=t.parentNode
n&&n.insertBefore(e,t)}function o(e,t){for(;;){const n=e.firstChild
if(!n)break
t.appendChild(n)}}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return o})),(()=>{if("function"==typeof Element.prototype.closest)return(e,t)=>e.closest(t)
Element.prototype.matches||Element.prototype.msMatchesSelector})()},1344:function(e,t,n){"use strict"
n.d(t,"a",(function(){return S})),n.d(t,"b",(function(){return I})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return _}))
var r=n(998)
const i="http://www.w3.org/",a=i+"2000/svg",o=i+"1999/xlink"
let s=[],l=(e,t)=>{let n={}
return Object.keys(e).forEach(t=>{n[t]=e[t]}),t&&Object.keys(t).forEach(e=>{n[e]=t[e]}),n},c=(e,t)=>e.vnodeSelector===t.vnodeSelector&&(e.properties&&t.properties?e.properties.key===t.properties.key&&e.properties.bind===t.properties.bind:!e.properties&&!t.properties),u=e=>{if("string"!=typeof e)throw new Error("Style values must be strings")},d=(e,t,n)=>{if(""!==t.vnodeSelector)for(let r=n;r<e.length;r++)if(c(e[r],t))return r
return-1},f=(e,t,n,r)=>{let i=e[t]
if(""===i.vnodeSelector)return
let a=i.properties
if(!(a?void 0===a.key?a.bind:a.key:void 0))for(let a=0;a<e.length;a++)if(a!==t){let t=e[a]
if(c(t,i))throw new Error(`${n.vnodeSelector} had a ${i.vnodeSelector} child ${"added"===r?r:"removed"}, but there is now more than one. You must add unique key properties to make them distinguishable.`)}},h=e=>{if(e.properties){let t=e.properties.enterAnimation
t&&t(e.domNode,e.properties)}},p=[],b=!1,m=e=>{(e.children||[]).forEach(m),e.properties&&e.properties.afterRemoved&&e.properties.afterRemoved.apply(e.properties.bind||e.properties,[e.domNode])},y=()=>{b=!1,p.forEach(m),p.length=0},g=e=>{p.push(e),b||(b=!0,"undefined"!=typeof window&&"requestIdleCallback"in window?window.requestIdleCallback(y,{timeout:16}):setTimeout(y,16))},v=e=>{let t=e.domNode
if(e.properties){let n=e.properties.exitAnimation
if(n){t.style.pointerEvents="none"
let r=()=>{t.parentNode&&(t.parentNode.removeChild(t),g(e))}
return void n(t,r,e.properties)}}t.parentNode&&(t.parentNode.removeChild(t),g(e))},O=(e,t,n)=>{if(!t)return
let i=n.eventHandlerInterceptor,s=Object.keys(t),l=s.length
for(let c=0;c<l;c++){let l=s[c],d=t[l]
if("className"===l)throw new Error('Property "className" is not supported, use "class".')
if("class"===l)E(e,d,!0)
else if("classes"===l){let t=Object.keys(d),n=t.length
for(let r=0;r<n;r++){let n=t[r]
d[n]&&e.classList.add(n)}}else if("styles"===l){let t=Object.keys(d),r=t.length
for(let i=0;i<r;i++){let r=t[i],a=d[r]
a&&(u(a),n.styleApplyer(e,r,a))}}else if("key"!==l&&null!=d){let s=typeof d
"function"===s?(0===l.lastIndexOf("on",0)&&(i&&(d=i(l,d,e,t)),"oninput"===l&&function(){let e=d
d=function(t){e.apply(this,[t]),t.target["oninput-value"]=t.target.value}}()),e[l]=d):n.namespace===a?"href"===l?e.setAttributeNS(o,l,d):e.setAttribute(l,d):"string"===s&&"value"!==l?"innerHTML"===l?e[l]=r.h.sanitize(d):w(e)&&l in e?e[l]=d:e.setAttribute(l,d):e[l]=d}}}
function w(e){if(!(e instanceof Element&&e.tagName.includes("-")))return!1
const t=window.customElements.get(e.tagName.toLowerCase())
return!!t&&e instanceof t}let j,_=(e,t,n)=>{((e,t,n)=>{if(t)for(let r of t)S(r,e,void 0,n)})(e,t.children,n),t.text&&(e.textContent=t.text),O(e,t.properties,n),t.properties&&t.properties.afterCreate&&t.properties.afterCreate.apply(t.properties.bind||t.properties,[e,n,t.vnodeSelector,t.properties,t.children])},S=(e,t,n,r)=>{let i,o=0,s=e.vnodeSelector,c=t.ownerDocument
if(""===s)i=e.domNode=c.createTextNode(e.text),void 0!==n?t.insertBefore(i,n):t.appendChild(i)
else{for(let u=0;u<=s.length;++u){let d=s.charAt(u)
if(u===s.length||"."===d||"#"===d){let d=s.charAt(o-1),f=s.slice(o,u)
"."===d?i.classList.add(f):"#"===d?i.id=f:("svg"===f&&(r=l(r,{namespace:a})),void 0!==r.namespace?i=e.domNode=c.createElementNS(r.namespace,f):(i=e.domNode=e.domNode||c.createElement(f),"input"===f&&e.properties&&void 0!==e.properties.type&&i.setAttribute("type",e.properties.type)),void 0!==n?t.insertBefore(i,n):i.parentNode!==t&&t.appendChild(i)),o=u+1}}_(i,e,r)}},E=(e,t,n)=>{t&&t.split(" ").forEach(t=>{t&&e.classList.toggle(t,n)})},x=(e,t,n,i)=>{if(!n)return
let s=!1,l=Object.keys(n),c=l.length
for(let d=0;d<c;d++){let c=l[d],f=n[c],h=t[c]
if("class"===c)h!==f&&(E(e,h,!1),E(e,f,!0))
else if("classes"===c){let t=e.classList,n=Object.keys(f),r=n.length
for(let e=0;e<r;e++){let r=n[e],i=!!f[r]
i!==!!h[r]&&(s=!0,i?t.add(r):t.remove(r))}}else if("styles"===c){let t=Object.keys(f),n=t.length
for(let r=0;r<n;r++){let n=t[r],a=f[n]
a!==h[n]&&(s=!0,a?(u(a),i.styleApplyer(e,n,a)):i.styleApplyer(e,n,""))}}else if(f||"string"!=typeof h||(f=""),"value"===c){let t=e[c]
t!==f&&(e["oninput-value"]?t===e["oninput-value"]:f!==h)&&(e[c]=f,e["oninput-value"]=void 0),f!==h&&(s=!0)}else if(f!==h){let t=typeof f
"function"===t&&i.eventHandlerInterceptor||(i.namespace===a?"href"===c?e.setAttributeNS(o,c,f):e.setAttribute(c,f):"string"===t?"innerHTML"===c?e[c]=r.h.sanitize(f):"role"===c&&""===f?e.removeAttribute(c):w(e)&&c in e?e[c]=f:e.setAttribute(c,f):e[c]!==f&&(e[c]=f),s=!0)}}return s}
j=(e,t,n)=>{let r=e.domNode,i=!1
if(e===t)return!1
let o=!1
if(""===t.vnodeSelector){if(t.text!==e.text){let e=r.ownerDocument.createTextNode(t.text)
return r.parentNode.replaceChild(e,r),t.domNode=e,i=!0,i}t.domNode=r}else 0===t.vnodeSelector.lastIndexOf("svg",0)&&(n=l(n,{namespace:a})),e.text!==t.text&&(o=!0,void 0===t.text?r.removeChild(r.firstChild):r.textContent=t.text),t.domNode=r,o=((e,t,n,r,i)=>{if(n===r)return!1
r=r||s
let a,o=(n=n||s).length,l=r.length,u=0,p=0,b=!1
for(;p<l;){let s=u<o?n[u]:void 0,l=r[p]
if(void 0!==s&&c(s,l))b=j(s,l,i)||b,u++
else{let s=d(n,l,u+1)
if(s>=0){for(a=u;a<s;a++)v(n[a]),f(n,a,e,"removed")
b=j(n[s],l,i)||b,u=s+1}else S(l,t,u<o?n[u].domNode:void 0,i),h(l),f(r,p,e,"added")}p++}if(o>u)for(a=u;a<o;a++)v(n[a]),f(n,a,e,"removed")
return b})(t,r,e.children,t.children,n)||o,o=x(r,e.properties,t.properties,n)||o,t.properties&&t.properties.afterUpdate&&t.properties.afterUpdate.apply(t.properties.bind||t.properties,[r,n,t.vnodeSelector,t.properties,t.children])
return o&&t.properties&&t.properties.updateAnimation&&t.properties.updateAnimation(r,t.properties,e.properties),i}
let I=(e,t)=>({getLastRender:()=>e,update:n=>{if(e.vnodeSelector!==n.vnodeSelector)throw new Error("The selector for the root VNode may not be changed. (consider using dom.merge and add one extra level to the virtual DOM)")
let r=e
e=n,j(r,n,t)},domNode:e.domNode})},1346:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
const r="randomUUID"in crypto
function i(){if(r)return crypto.randomUUID()
const e=crypto.getRandomValues(new Uint16Array(8))
e[3]=4095&e[3]|16384,e[4]=16383&e[4]|32768
const t=t=>e[t].toString(16).padStart(4,"0")
return t(0)+t(1)+"-"+t(2)+"-"+t(3)+"-"+t(4)+"-"+t(5)+t(6)+t(7)}},1347:function(e,t,n){"use strict"
n.d(t,"a",(function(){return l}))
var r=n(1432)
let i,a=(e,t)=>{let n=[]
for(;e&&e!==t;)n.push(e),e=e.parentNode
return n}
i=Array.prototype.find?(e,t)=>e.find(t):(e,t)=>e.filter(t)[0]
let o=(e,t)=>{let n=e
return t.forEach(e=>{n=n&&n.children?i(n.children,t=>t.domNode===e):void 0}),n},s=(e,t,n)=>{let r=function(r){n("domEvent",r)
let i=t(),s=a(r.currentTarget,i.domNode)
s.reverse()
let l,c=o(i.getLastRender(),s)
return e.scheduleRender(),c&&(l=c.properties["on"+r.type].apply(c.properties.bind||this,arguments)),n("domEventProcessed",r),l}
return(e,t,n,i)=>r},l=e=>{let t,n,i=Object(r.a)(e),a=i.performanceLogger,o=!0,l=!1,c=[],u=[],d=(e,n,r)=>{let o
i.eventHandlerInterceptor=s(t,()=>o,a),o=e(n,r(),i),c.push(o),u.push(r)},f=()=>{if(n=void 0,o){o=!1,a("renderStart",void 0)
for(let e=0;e<c.length;e++){let t=u[e]()
a("rendered",void 0),c[e].update(t),a("patched",void 0)}a("renderDone",void 0),o=!0}}
return t={renderNow:f,scheduleRender:()=>{n||l||(n=requestAnimationFrame(f))},stop:()=>{n&&(cancelAnimationFrame(n),n=void 0),l=!0},resume:()=>{l=!1,o=!0,t.scheduleRender()},append:(e,t)=>{d(r.b.append,e,t)},insertBefore:(e,t)=>{d(r.b.insertBefore,e,t)},merge:(e,t)=>{d(r.b.merge,e,t)},replace:(e,t)=>{d(r.b.replace,e,t)},detach:e=>{for(let t=0;t<u.length;t++)if(u[t]===e)return u.splice(t,1),c.splice(t,1)[0]
throw new Error("renderFunction was not found")}},t}},1348:function(e,t,n){"use strict"
function r(e){return"h"in e&&"s"in e&&"v"in e}function i(e){return"l"in e&&"a"in e&&"b"in e}function a(e){return"l"in e&&"c"in e&&"h"in e}n.d(t,"a",(function(){return v})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return y})),n.d(t,"d",(function(){return g})),n.d(t,"e",(function(){return b}))
const o=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],s=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]]
function l(e,t){const n=[]
let r,i
if(e[0].length!==t.length)throw new Error("dimensions do not match")
const a=e.length,o=e[0].length
let s=0
for(r=0;r<a;r++){for(s=0,i=0;i<o;i++)s+=e[r][i]*t[i]
n.push(s)}return n}function c(e){const t=[e.r/255,e.g/255,e.b/255].map(e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4),n=l(o,t)
return{x:100*n[0],y:100*n[1],z:100*n[2]}}function u(e){const t=l(s,[e.x/100,e.y/100,e.z/100]).map(e=>{const t=e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055
return Math.min(1,Math.max(t,0))})
return{r:Math.round(255*t[0]),g:Math.round(255*t[1]),b:Math.round(255*t[2])}}function d(e){const t=[e.x/95.047,e.y/100,e.z/108.883].map(e=>e>(6/29)**3?e**(1/3):1/3*(29/6)**2*e+4/29)
return{l:116*t[1]-16,a:500*(t[0]-t[1]),b:200*(t[1]-t[2])}}function f(e){const t=e.l,n=[(t+16)/116+e.a/500,(t+16)/116,(t+16)/116-e.b/200].map(e=>e>6/29?e**3:3*(6/29)**2*(e-4/29))
return{x:95.047*n[0],y:100*n[1],z:108.883*n[2]}}function h(e){return d(c(e))}function p(e){return u(f(e))}function b(e){return function(e){return"r"in e&&"g"in e&&"b"in e}(e)?e:a(e)?function(e){return u(f(function(e){const t=e.l,n=e.c,r=e.h
return{l:t,a:n*Math.cos(r),b:n*Math.sin(r)}}(e)))}(e):i(e)?p(e):function(e){return"x"in e&&"y"in e&&"z"in e}(e)?u(e):r(e)?function(e){const t=(e.h+360)%360/60,n=e.s/100,r=e.v/100*255,i=r*n,a=i*(1-Math.abs(t%2-1))
let o
switch(Math.floor(t)){case 0:o={r:i,g:a,b:0}
break
case 1:o={r:a,g:i,b:0}
break
case 2:o={r:0,g:i,b:a}
break
case 3:o={r:0,g:a,b:i}
break
case 4:o={r:a,g:0,b:i}
break
case 5:case 6:o={r:i,g:0,b:a}
break
default:o={r:0,g:0,b:0}}return o.r=Math.round(o.r+r-i),o.g=Math.round(o.g+r-i),o.b=Math.round(o.b+r-i),o}(e):e}function m(e){return r(e)?e:function(e){const t=e.r,n=e.g,r=e.b,i=Math.max(t,n,r),a=i-Math.min(t,n,r)
let o=i,s=0===a?0:i===t?(n-r)/a%6:i===n?(r-t)/a+2:(t-n)/a+4,l=0===a?0:a/o
return s<0&&(s+=6),s*=60,l*=100,o*=100/255,{h:s,s:l,v:o}}(b(e))}function y(e){return i(e)?e:h(b(e))}function g(e){return a(e)?e:function(e){return function(e){const t=e.l,n=e.a,r=e.b,i=Math.sqrt(n*n+r*r)
let a=Math.atan2(r,n)
return a=a>0?a:a+2*Math.PI,{l:t,c:i,h:a}}(d(c(e)))}(b(e))}function v(e,t){const n=h(e)
return n.l*=1-t,p(n)}},1383:function(e,t,n){"use strict"
function r(e){var t
const n=e.layer
return"floorInfo"in n&&null!=(t=n.floorInfo)&&t.floorField&&"floors"in e.view?a(e.view.floors,n.floorInfo.floorField):null}function i(e,t){var n
return"floorInfo"in t&&null!=(n=t.floorInfo)&&n.floorField?a(e,t.floorInfo.floorField):null}function a(e,t){if(null==e||!e.length)return null
const n=e.filter(e=>""!==e).map(e=>`'${e}'`)
return n.push("''"),`${t} IN (${n.join(",")}) OR ${t} IS NULL`}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}))},1407:function(e,t,n){"use strict"
n.d(t,"a",(function(){return E})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return P})),n.d(t,"e",(function(){return x})),n.d(t,"f",(function(){return i})),n.d(t,"g",(function(){return D})),n.d(t,"h",(function(){return I})),n.d(t,"i",(function(){return R})),n.d(t,"j",(function(){return z})),n.d(t,"k",(function(){return k})),n.d(t,"l",(function(){return A})),n.d(t,"m",(function(){return F})),n.d(t,"n",(function(){return V})),n.d(t,"o",(function(){return M})),n.d(t,"p",(function(){return T})),n.d(t,"q",(function(){return O})),n.d(t,"r",(function(){return w})),n.d(t,"s",(function(){return j})),n.d(t,"t",(function(){return S})),n(1529)
const r="calcite-mode-auto",i="calcite-mode-dark",a={autoMode:r,darkMode:i,lightMode:"calcite-mode-light",rtl:"calcite--rtl"}
var o=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],s=o.join(","),l="undefined"==typeof Element,c=l?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,u=!l&&Element.prototype.getRootNode?function(e){return e.getRootNode()}:function(e){return e.ownerDocument},d=function(e,t,n){var r=Array.prototype.slice.apply(e.querySelectorAll(s))
return t&&c.call(e,s)&&r.unshift(e),r.filter(n)},f=function e(t,n,r){for(var i=[],a=Array.from(t);a.length;){var o=a.shift()
if("SLOT"===o.tagName){var l=o.assignedElements(),u=e(l.length?l:o.children,!0,r)
r.flatten?i.push.apply(i,u):i.push({scopeParent:o,candidates:u})}else{c.call(o,s)&&r.filter(o)&&(n||!t.includes(o))&&i.push(o)
var d=o.shadowRoot||"function"==typeof r.getShadowRoot&&r.getShadowRoot(o),f=!r.shadowRootFilter||r.shadowRootFilter(o)
if(d&&f){var h=e(!0===d?o.children:d.children,!0,r)
r.flatten?i.push.apply(i,h):i.push({scopeParent:o,candidates:h})}else a.unshift.apply(a,o.children)}}return i},h=function(e,t){return e.tabIndex<0&&(t||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||e.isContentEditable)&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},p=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},b=function(e){return"INPUT"===e.tagName},m=function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height
return 0===n&&0===r},y=function(e,t){return!(t.disabled||function(e){return b(e)&&"hidden"===e.type}(t)||function(e,t){var n=t.displayCheck,r=t.getShadowRoot
if("hidden"===getComputedStyle(e).visibility)return!0
var i=c.call(e,"details>summary:first-of-type")?e.parentElement:e
if(c.call(i,"details:not([open]) *"))return!0
if(n&&"full"!==n&&"legacy-full"!==n){if("non-zero-area"===n)return m(e)}else{if("function"==typeof r){for(var a=e;e;){var o=e.parentElement,s=u(e)
if(o&&!o.shadowRoot&&!0===r(o))return m(e)
e=e.assignedSlot?e.assignedSlot:o||s===e.ownerDocument?o:s.host}e=a}if(function(e){for(var t,n=u(e).host,r=!!(null!==(t=n)&&void 0!==t&&t.ownerDocument.contains(n)||e.ownerDocument.contains(e));!r&&n;){var i
r=!(null===(i=n=u(n).host)||void 0===i||!i.ownerDocument.contains(n))}return r}(e))return!e.getClientRects().length
if("legacy-full"!==n)return!0}return!1}(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n)
if("LEGEND"===r.tagName)return!!c.call(t,"fieldset[disabled] *")||!r.contains(e)}return!0}t=t.parentElement}return!1}(t))},g=function(e,t){return!(function(e){return function(e){return b(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0
var t,n=e.form||u(e),r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')}
if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name))
else try{t=r(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var i=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form)
return!i||i===e}(e)}(t)||h(t)<0||!y(e,t))},v=function(e){var t=parseInt(e.getAttribute("tabindex"),10)
return!!(isNaN(t)||t>=0)},O=function(e,t){return function e(t){var n=[],r=[]
return t.forEach((function(t,i){var a=!!t.scopeParent,o=a?t.scopeParent:t,s=h(o,a),l=a?e(t.candidates):o
0===s?a?n.push.apply(n,l):n.push(o):r.push({documentOrder:i,tabIndex:s,item:t,isScope:a,content:l})})),r.sort(p).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(n)}((t=t||{}).getShadowRoot?f([e],t.includeContainer,{filter:g.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:v}):d(e,t.includeContainer,g.bind(null,t)))},w=function(e,t){return(t=t||{}).getShadowRoot?f([e],t.includeContainer,{filter:y.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):d(e,t.includeContainer,y.bind(null,t))},j=function(e,t){if(t=t||{},!e)throw new Error("No node provided")
return!1!==c.call(e,s)&&g(t,e)},_=o.concat("iframe").join(","),S=function(e,t){if(t=t||{},!e)throw new Error("No node provided")
return!1!==c.call(e,_)&&y(t,e)}
const E={getShadowRoot:!0}
function x(e){const t=A(e,"[dir]")
return t?t.getAttribute("dir"):"ltr"}function I(e,t,n){const r=`[${t}]`,i=e.closest(r)
return i?i.getAttribute(t):n}function C(e){return e.getRootNode()}function L(e){return e.host||null}function M(e,{selector:t,id:n}){return function e(r){if(!r)return null
r.assignedSlot&&(r=r.assignedSlot)
const i=C(r),a=n?"getElementById"in i?i.getElementById(n):null:t?i.querySelector(t):null,o=L(i)
return a||(o?e(o):null)}(e)}function A(e,t){return function e(n){return n?n.closest(t)||e(L(C(n))):null}(e)}function T(e,t){return!!function(e,t){return function e(t,n){if(!t)return
const r=n(t)
if(void 0!==r)return r
const{parentNode:i}=t
return e(i instanceof ShadowRoot?i.host:i,n)}(e,t)}(t,t=>t===e||void 0)}async function R(e){if(e)return function(e){return"function"==typeof(null==e?void 0:e.setFocus)}(e)?e.setFocus():e.focus()}function k(e){(O(e,E)[0]||e).focus()}function P(e,t,n){var r
t&&!Array.isArray(t)&&"string"!=typeof t&&(n=t,t=null)
const i=t?Array.isArray(t)?t.map(e=>`[slot="${e}"]`).join(","):`[slot="${t}"]`:":not([slot])"
return null!=(r=n)&&r.all?function(e,t,n){let r=":not([slot])"===t?N(e,":not([slot])"):Array.from(e.querySelectorAll(t))
r=n&&!1===n.direct?r:r.filter(t=>t.parentElement===e),r=null!=n&&n.matches?r.filter(e=>null==e?void 0:e.matches(n.matches)):r
const i=null==n?void 0:n.selector
return i?r.map(e=>Array.from(e.querySelectorAll(i))).reduce((e,t)=>[...e,...t],[]).filter(e=>!!e):r}(e,i,n):function(e,t,n){var r,i,a
let o=":not([slot])"===t?N(e,":not([slot])")[0]||null:e.querySelector(t)
o=n&&!1===n.direct||(null==(r=o)?void 0:r.parentElement)===e?o:null,o=null!=n&&n.matches?null!=(i=o)&&i.matches(n.matches)?o:null:o
const s=null==n?void 0:n.selector
return s?null==(a=o)?void 0:a.querySelector(s):o}(e,i,n)}function N(e,t){return e?Array.from(e.children||[]).filter(e=>null==e?void 0:e.matches(t)):[]}function D(e,t,n){return"string"==typeof t&&""!==t?t:""===t?e[n]:void 0}function V(e){return Boolean(e).toString()}function F(e){return!!function(e){return e.target.assignedElements({flatten:!0})}(e).length}function z(e){return!(!e.isPrimary||0!==e.button)}},1432:function(e,t,n){"use strict"
n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}))
var r=n(1344)
const i={namespace:void 0,performanceLogger:()=>{},eventHandlerInterceptor:void 0,styleApplyer:(e,t,n)=>{"-"===t.charAt(0)?e.style.setProperty(t,n):e.style[t]=n}}
let a=e=>Object(r.c)(i,e),o={create:(e,t)=>(t=a(t),Object(r.a)(e,document.createElement("div"),void 0,t),Object(r.b)(e,t)),append:(e,t,n)=>(n=a(n),Object(r.a)(t,e,void 0,n),Object(r.b)(t,n)),insertBefore:(e,t,n)=>(n=a(n),Object(r.a)(t,e.parentNode,e,n),Object(r.b)(t,n)),merge:(e,t,n)=>(n=a(n),t.domNode=e,Object(r.d)(e,t,n),Object(r.b)(t,n)),replace:(e,t,n)=>(n=a(n),Object(r.a)(t,e.parentNode,e,n),e.parentNode.removeChild(e),Object(r.b)(t,n))}},1433:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return o}))
const r=new Map
function i(){r.clear()}function a(e){return r.get(e)}function o(e,t){r.set(e,t)}function s(e){r.delete(e)}},1434:function(e,t,n){"use strict"
n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return l}))
var r=n(1017),i=n(1435)
const a=[],o={},s=new WeakMap
function l(e,t){let n=t.children
if(n&&n.length)for(let t=0;t<n.length;++t)n[t]=l(e,n[t])
else n=a
const r=t.vnodeSelector
if(f(r)){const i=t.properties||o,a=i.key||r
return{vnodeSelector:"div",properties:{key:a,afterCreate:c,afterUpdate:u,afterRemoved:d,parentWidget:e,widgetConstructor:r,widgetProperties:{...i,key:a,children:n}},children:void 0,text:void 0,domNode:null}}return t}function c(e,t,n,{parentWidget:i,widgetConstructor:a,widgetProperties:o}){const l=new a(o)
l.container=e,s.set(e,l),null!=l.afterCreate&&l.afterCreate(l,e),i._internalHandles.add(Object(r.c)(()=>d(e)))}function u(e,t,n,{widgetProperties:r}){const i=s.get(e)
i&&(i.set(r),null==i.afterUpdate||i.afterUpdate(i,e))}function d(e){const t=s.get(e)
t&&(null!=t.afterRemoved&&t.afterRemoved(t,e),t.destroy(),s.delete(e))}function f(e){return"function"==typeof e&&e[i.a]}},1435:function(e,t,n){"use strict"
n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}))
const r=Symbol("widget"),i=Symbol("widget-test-data")},1436:function(e,t,n){"use strict"
function r(e){return e=e||globalThis.location.hostname,c.some(t=>{var n
return null!=(null==(n=e)?void 0:n.match(t))})}function i(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(a)||null!=t.match(s)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(o)||null!=t.match(l)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r}))
const a=/^devext.arcgis.com$/,o=/^qaext.arcgis.com$/,s=/^[\w-]*\.mapsdevext.arcgis.com$/,l=/^[\w-]*\.mapsqa.arcgis.com$/,c=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,a,o,/^jsapps.esri.com$/,s,l]},1446:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
var r=n(1141)
class i{constructor(e,t){this._storage=new r.c,this._storage.maxSize=e,t&&this._storage.registerRemoveFunc("",t)}put(e,t){this._storage.put(e,t,1,1)}pop(e){return this._storage.pop(e)}get(e){return this._storage.get(e)}clear(){this._storage.clearAll()}destroy(){this._storage.destroy()}}},1449:function(e,t,n){"use strict"
n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return y})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return f})),n.d(t,"e",(function(){return h})),n.d(t,"f",(function(){return b})),n(235)
var r=n(23),i=n(1010),a=n(1275),o=n(1485),s=n(1490),l=n(1191)
n(1612),n(1655)
let c=null
const u=[255,255,255]
function d(e,t){return Math.floor(Math.random()*(t-e+1)+e)}function f(e,t,n){const{backgroundColor:r,outline:i,dotSize:a}=e,s=n&&n.swatchSize||o.a.size,l=Math.round(s*s/a**2*.8),u=window.devicePixelRatio,f=document.createElement("canvas"),h=s*u
f.width=h,f.height=h,f.style.width=f.width/u+"px",f.style.height=f.height/u+"px"
const p=f.getContext("2d")
if(r&&(p.fillStyle=r.toCss(!0),p.fillRect(0,0,h,h),p.fill()),p.fillStyle=t.toCss(!0),c&&c.length/2===l)for(let e=0;e<2*l;e+=2){const t=c[e],n=c[e+1]
p.fillRect(t,n,a*u,a*u),p.fill()}else{c=[]
for(let e=0;e<2*l;e+=2){const e=d(0,h),t=d(0,h)
c.push(e,t),p.fillRect(e,t,a*u,a*u),p.fill()}}i&&(i.color&&(p.strokeStyle=i.color.toCss(!0)),p.lineWidth=i.width,p.strokeRect(0,0,h,h))
const b=new Image(s,s)
return b.src=f.toDataURL(),b}function h(e,t={}){const n=t.radius||40,r=2*Math.PI*n,i=e.length,o=r/i,l=[],c=Object(a.e)(t.outline)
null!=(null==c?void 0:c.width)&&(c.width*=2),(c||t.backgroundColor)&&l.push({shape:{type:"circle",cx:n,cy:n,r:n},fill:t.backgroundColor,stroke:c,offset:[0,0]})
const d=t.values,f=d&&d.length===i&&100===d.reduce((e,t)=>e+t,0),h=[0]
for(let t=0;t<i;t++){var p
let i=null
f&&(i=d[t]*r/100,h.push(i+h[t])),l.push({shape:{type:"circle",cx:n,cy:n,r:n/2},fill:[0,0,0,0],stroke:{width:n,dashArray:`${(null!=(p=i)?p:o)/2} ${r}`,dashoffset:"-"+(f?h[t]/2:t*(o/2)),color:e[t]},offset:[0,0]})}let b=null
const m=2*n+((null==c?void 0:c.width)||0),y=t.holePercentage
if(y){c&&l.push({shape:{type:"circle",cx:n,cy:n,r:n*y},fill:null,stroke:c,offset:[0,0]})
const e=m/2
b=[[{shape:{type:"circle",cx:e,cy:e,r:e},fill:u,stroke:c?{...c,color:u}:null,offset:[0,0]},{shape:{type:"circle",cx:e,cy:e,r:n*y},fill:[0,0,0],stroke:null,offset:[0,0]}]]}return Object(s.b)([l],[m,m],{effectView:t.effectList,ignoreStrokeWidth:!0,masking:b,rotation:-90})}function p(e,t={}){const n="horizontal"===t.align,r=n?75:24,i=n?24:75,{width:a=r,height:o=i,gradient:s=!0}=t,c=window.devicePixelRatio,u=a*c,d=o*c,f=document.createElement("canvas")
f.width=u,f.height=d,f.style.width=a+"px",f.style.height=o+"px"
const h=f.getContext("2d"),p=n?u:0,b=n?0:d
if(s){const t=h.createLinearGradient(0,0,p,b),n=e.length,r=1===n?0:1/(n-1)
e.forEach((e,n)=>t.addColorStop(n*r,e.toString())),h.fillStyle=t,h.fillRect(0,0,u,d)}else{const t=n?u/e.length:u,r=n?d:d/e.length
let i=0,a=0
for(const o of e)h.fillStyle=o.toString(),h.fillRect(i,a,t,r),i=n?i+t:0,a=n?0:a+r}const m=document.createElement("div")
return m.style.width=a+"px",m.style.height=o+"px",function(e,t){if(!t)return
e.style.filter=Object(l.f)(t)
const n=t.effects
if(n)for(const t of n)if("drop-shadow"===(null==t?void 0:t.type)){t.offsetX<0?e.style.marginLeft=Math.abs(t.offsetX)+"px":e.style.marginRight=t.offsetX+"px"
break}}(m,null==t?void 0:t.effectList),m.appendChild(f),m}async function b(e,t){switch(e.type){case"web-style":{const{previewWebStyleSymbol:r}=await n.e(770).then(n.bind(null,1939))
return r(e,b,t)}case"label-3d":case"line-3d":case"mesh-3d":case"point-3d":case"polygon-3d":{const{previewSymbol3D:r}=await Promise.resolve().then(n.bind(null,1520))
return r(e,t)}case"simple-marker":case"simple-line":case"simple-fill":case"picture-marker":case"picture-fill":case"text":{const{previewSymbol2D:r}=await n.e(377).then(n.bind(null,1940))
return r(e,t)}case"cim":{const{previewCIMSymbol:r}=await Promise.all([n.e(25),n.e(26),n.e(65),n.e(325)]).then(n.bind(null,1941))
return r(e,t)}default:return}}function m(e){return e&&"opacity"in e?e.opacity*m(e.parent):1}async function y(e,t){var a,o
if(!e)return
const s=e.sourceLayer,c=null!=(a=Object(r.l)(t)&&t.useSourceLayer?s:e.layer)?a:s,u=m(c)
if(Object(r.l)(e.symbol)&&(!Object(r.l)(t)||!0!==t.ignoreGraphicSymbol)){const n="web-style"===e.symbol.type?await Object(l.e)(e.symbol,{...t,cache:Object(r.l)(t)?t.webStyleCache:null}):e.symbol.clone()
return Object(l.a)(n,null,u),n}const d=null!=(o=Object(r.l)(t)?t.renderer:null)?o:c&&"renderer"in c?c.renderer:null
let f=d&&"getSymbolAsync"in d?await d.getSymbolAsync(e,t):null
if(!f)return
if(f="web-style"===f.type?await f.fetchSymbol({...t,cache:Object(r.l)(t)?t.webStyleCache:null}):f.clone(),!(d&&"visualVariables"in d&&d.visualVariables&&d.visualVariables.length))return Object(l.a)(f,null,u),f
if("arcadeRequiredForVisualVariables"in d&&d.arcadeRequiredForVisualVariables&&(Object(r.k)(t)||Object(r.k)(t.arcade))){const e={...Object(r.u)(t)}
e.arcade=await Object(i.e)(),t=e}const h=await Promise.resolve().then(n.bind(null,1107)),p=[],b=[],y=[],g=[]
for(const e of d.visualVariables)switch(e.type){case"color":p.push(e)
break
case"opacity":b.push(e)
break
case"rotation":g.push(e)
break
case"size":e.target||y.push(e)}const v=!!p.length&&p[p.length-1],O=v?h.getColor(v,e,t):null,w=!!b.length&&b[b.length-1]
let j=w?h.getOpacity(w,e,t):null
if(null!=u&&(j=null!=j?j*u:u),Object(l.a)(f,O,j),y.length){const n=h.getAllSizes(y,e,t)
await Object(l.d)(f,n)}for(const n of g)Object(l.c)(f,h.getRotationAngle(n,e,t),n.axis)
return f}async function g(e,t){var a
if(!e)return
const o=m(e.layer||e.sourceLayer)
if(Object(r.l)(e.symbol)&&(!Object(r.l)(t)||!0!==t.ignoreGraphicSymbol)){const n="web-style"===e.symbol.type?await Object(l.e)(e.symbol,t):e.symbol.clone()
return Object(l.g)(n,o)}const s=Object(r.l)(t)&&t.renderer||e.get("layer.renderer")||e.get("sourceLayer.renderer")
let c=await s.getSymbolAsync(e,t)
if(!c)return
c="web-style"===c.type?await Object(l.e)(c,t):c.clone()
const u=Object(l.g)(c,o)
if(!("visualVariables"in s)||"visualVariables"in s&&!s.visualVariables||"visualVariables"in s&&(null==(a=s.visualVariables)||!a.length))return u
if(s.arcadeRequiredForVisualVariables&&(Object(r.k)(t)||Object(r.k)(t.arcade))){const e={...Object(r.u)(t)}
e.arcade=await Object(i.e)(),t=e}const d=await Promise.resolve().then(n.bind(null,1107)),f=[],h=[]
for(const e of s.visualVariables)switch(e.type){case"color":f.push(e)
break
case"opacity":h.push(e)}const p=f.length>0?f[f.length-1]:null,b=p?d.getColor(p,e,t):u,y=h.length>0?h[h.length-1]:null
let g=y?d.getOpacity(y,e,t):null
return null!=o&&(g=null!=g?g*o:o),b?Object(l.b)(b,g):null}},1458:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l}))
var r=n(991),i=n(998),a=n(1018)
function o({level:e,class:t,...n},r){const o=s(e)
return Object(a.a)("h"+o,{...n,class:Object(i.a)("esri-widget__heading",t),role:"heading","aria-level":String(o)},r)}function s(e){return Object(r.f)(Math.ceil(e),1,6)}function l(e,t=1){return s(e+t)}},1461:function(e,t,n){"use strict"
n.d(t,"a",(function(){return u}))
var r=n(131)
const i={category:{content:{action:{delete:{category:"Content",action:"Delete",label:{location:{details:{point:{category:"Content",action:"Delete",label:"Location",details:"Point"},line:{category:"Content",action:"Delete",label:"Location",details:"Line"},polygon:{category:"Content",action:"Delete",label:"Location",details:"Polygon"}}},reaction:{details:{smilingFace:{category:"Content",action:"Delete",label:"Reaction",details:"Smiling face"},confusedFace:{category:"Content",action:"Delete",label:"Reaction",details:"Confused face"},grinningFace:{category:"Content",action:"Delete",label:"Reaction",details:"Grinning face"},laughingFace:{category:"Content",action:"Delete",label:"Reaction",details:"Laughing face"},faceWithTearsOfJoy:{category:"Content",action:"Delete",label:"Reaction",details:"Face with tears of joy"},thinkingFace:{category:"Content",action:"Delete",label:"Reaction",details:"Thinking face"},winkingFace:{category:"Content",action:"Delete",label:"Reaction",details:"Winking face"},partyingFace:{category:"Content",action:"Delete",label:"Reaction",details:"Partying face"},sadFace:{category:"Content",action:"Delete",label:"Reaction",details:"Sad face"},shockedFace:{category:"Content",action:"Delete",label:"Reaction",details:"Shocked face"},thumbsUp:{category:"Content",action:"Delete",label:"Reaction",details:"Thumbs up"},thumbsDown:{category:"Content",action:"Delete",label:"Reaction",details:"Thumbs down"},clappingHands:{category:"Content",action:"Delete",label:"Reaction",details:"Clapping hands"},raisingHands:{category:"Content",action:"Delete",label:"Reaction",details:"Raising hands"},wavingHand:{category:"Content",action:"Delete",label:"Reaction",details:"Waving hand"},redHeart:{category:"Content",action:"Delete",label:"Reaction",details:"Red heart"},hundredPoints:{category:"Content",action:"Delete",label:"Reaction",details:"Hundred points"},fire:{category:"Content",action:"Delete",label:"Reaction",details:"Fire"},partyPopper:{category:"Content",action:"Delete",label:"Reaction",details:"Party popper"},rocket:{category:"Content",action:"Delete",label:"Reaction",details:"Rocket"},upArrow:{category:"Content",action:"Delete",label:"Reaction",details:"Up arrow"},downArrow:{category:"Content",action:"Delete",label:"Reaction",details:"Down arrow"},eyes:{category:"Content",action:"Delete",label:"Reaction",details:"Eyes"},trophy:{category:"Content",action:"Delete",label:"Reaction",details:"Trophy"},worldMap:{category:"Content",action:"Delete",label:"Reaction",details:"World map"}}},modal:{category:"Content",action:"Delete",label:"Modal"},site:{category:"Content",action:"Delete",label:"Site"},page:{category:"Content",action:"Delete",label:"Page"}},details:{allPosts:{category:"Content",action:"Delete",details:"All Posts"}}},create:{category:"Content",action:"Create",label:{upload:{category:"Content",action:"Create",label:"Upload"},url:{category:"Content",action:"Create",label:"URL"},location:{details:{point:{category:"Content",action:"Create",label:"Location",details:"Point"},line:{category:"Content",action:"Create",label:"Location",details:"Line"},polygon:{category:"Content",action:"Create",label:"Location",details:"Polygon"}}},reaction:{details:{smilingFace:{category:"Content",action:"Create",label:"Reaction",details:"Smiling face"},confusedFace:{category:"Content",action:"Create",label:"Reaction",details:"Confused face"},grinningFace:{category:"Content",action:"Create",label:"Reaction",details:"Grinning face"},laughingFace:{category:"Content",action:"Create",label:"Reaction",details:"Laughing face"},faceWithTearsOfJoy:{category:"Content",action:"Create",label:"Reaction",details:"Face with tears of joy"},thinkingFace:{category:"Content",action:"Create",label:"Reaction",details:"Thinking face"},winkingFace:{category:"Content",action:"Create",label:"Reaction",details:"Winking face"},partyingFace:{category:"Content",action:"Create",label:"Reaction",details:"Partying face"},sadFace:{category:"Content",action:"Create",label:"Reaction",details:"Sad face"},shockedFace:{category:"Content",action:"Create",label:"Reaction",details:"Shocked face"},thumbsUp:{category:"Content",action:"Create",label:"Reaction",details:"Thumbs up"},thumbsDown:{category:"Content",action:"Create",label:"Reaction",details:"Thumbs down"},clappingHands:{category:"Content",action:"Create",label:"Reaction",details:"Clapping hands"},raisingHands:{category:"Content",action:"Create",label:"Reaction",details:"Raising hands"},wavingHand:{category:"Content",action:"Create",label:"Reaction",details:"Waving hand"},redHeart:{category:"Content",action:"Create",label:"Reaction",details:"Red heart"},hundredPoints:{category:"Content",action:"Create",label:"Reaction",details:"Hundred points"},fire:{category:"Content",action:"Create",label:"Reaction",details:"Fire"},partyPopper:{category:"Content",action:"Create",label:"Reaction",details:"Party popper"},rocket:{category:"Content",action:"Create",label:"Reaction",details:"Rocket"},upArrow:{category:"Content",action:"Create",label:"Reaction",details:"Up arrow"},downArrow:{category:"Content",action:"Create",label:"Reaction",details:"Down arrow"},eyes:{category:"Content",action:"Create",label:"Reaction",details:"Eyes"},trophy:{category:"Content",action:"Create",label:"Reaction",details:"Trophy"},worldMap:{category:"Content",action:"Create",label:"Reaction",details:"World map"}}},post:{category:"Content",action:"Create",label:"Post"},reply:{category:"Content",action:"Create",label:"Reply"},site:{details:{clone:{category:"Content",action:"Create",label:"Site",details:"Clone"}}},template:{details:{site:{category:"Content",action:"Create",label:"Template",details:"Site"}}}}},update:{category:"Content",action:"Update",label:{groups:{category:"Content",action:"Update",label:"Groups",details:{removeEditGroups:{category:"Content",action:"Update",label:"Groups",details:"Remove Edit Groups"},removeViewGroups:{category:"Content",action:"Update",label:"Groups",details:"Remove View Groups"},addViewGroups:{category:"Content",action:"Update",label:"Groups",details:"Add View Groups"},addEditGroups:{category:"Content",action:"Update",label:"Groups",details:"Add Edit Groups"},addCatalogGroups:{category:"Content",action:"Update",label:"Groups",details:"Add Catalog Groups"},removeCatalogGroups:{category:"Content",action:"Update",label:"Groups",details:"Remove Catalog Groups"}}},location:{details:{point:{category:"Content",action:"Update",label:"Location",details:"Point"},line:{category:"Content",action:"Update",label:"Location",details:"Line"},polygon:{category:"Content",action:"Update",label:"Location",details:"Polygon"},featuresPoints:{category:"Content",action:"Update",label:"Location",details:"Features: points"},featuresLines:{category:"Content",action:"Update",label:"Location",details:"Features: lines"},featuresPolygons:{category:"Content",action:"Update",label:"Location",details:"Features: polygons"},pointsPoints:{category:"Content",action:"Update",label:"Location",details:"Points: points"},pointsLines:{category:"Content",action:"Update",label:"Location",details:"Points: lines"},pointsPolygons:{category:"Content",action:"Update",label:"Location",details:"Points: polygons"}}},settings:{details:{allowDiscussions:{category:"Content",action:"Update",label:"Settings",details:"Allow Discussions"},blockDiscussions:{category:"Content",action:"Update",label:"Settings",details:"Block Discussions"}}},status:{details:{hide:{category:"Content",action:"Update",label:"Status",details:"Hide "},show:{category:"Content",action:"Update",label:"Status",details:"Show"}},category:"Content",action:"Update",label:"Status"},post:{category:"Content",action:"Update",label:"Post"},reply:{category:"Content",action:"Update",label:"Reply"},description:{category:"Content",action:"Update",label:"Description"},summary:{category:"Content",action:"Update",label:"Summary"},image:{details:{complete:{category:"Content",action:"Update",label:"Image",details:"Complete"},empty:{category:"Content",action:"Update",label:"Image",details:"Empty"}}},timeline:{details:{steps:{category:"Content",action:"Update",label:"Timeline",details:"Steps"}}},featuredContent:{category:"Content",action:"Update",label:"Featured Content"},access:{details:{public:{category:"Content",action:"Update",label:"Access",details:"Public"},org:{category:"Content",action:"Update",label:"Access",details:"Org"},shared:{category:"Content",action:"Update",label:"Access",details:"Shared"},private:{category:"Content",action:"Update",label:"Access",details:"Private"}}},layout:{details:{draft:{category:"Content",action:"Update",label:"Layout",details:"Draft"},publish:{category:"Content",action:"Update",label:"Layout",details:"Publish"}}}}}}},interaction:{action:{open:{label:{popover:{details:{share:{category:"Interaction",action:"Open",label:"Popover",details:"Share"},details:{category:"Interaction",action:"Open",label:"Popover",details:"Details"},options:{category:"Interaction",action:"Open",label:"Popover",details:"Options"},help:{category:"Interaction",action:"Open",label:"Popover",details:"Help"},smilingFace:{category:"Interaction",action:"Open",label:"Popover",details:"Smiling face"},confusedFace:{category:"Interaction",action:"Open",label:"Popover",details:"Confused face"},grinningFace:{category:"Interaction",action:"Open",label:"Popover",details:"Grinning face"},laughingFace:{category:"Interaction",action:"Open",label:"Popover",details:"Laughing face"},faceWithTearsOfJoy:{category:"Interaction",action:"Open",label:"Popover",details:"Face with tears of joy"},thinkingFace:{category:"Interaction",action:"Open",label:"Popover",details:"Thinking face"},winkingFace:{category:"Interaction",action:"Open",label:"Popover",details:"Winking face"},partyingFace:{category:"Interaction",action:"Open",label:"Popover",details:"Partying face"},sadFace:{category:"Interaction",action:"Open",label:"Popover",details:"Sad face"},shockedFace:{category:"Interaction",action:"Open",label:"Popover",details:"Shocked face"},thumbsUp:{category:"Interaction",action:"Open",label:"Popover",details:"Thumbs up"},thumbsDown:{category:"Interaction",action:"Open",label:"Popover",details:"Thumbs down"},clappingHands:{category:"Interaction",action:"Open",label:"Popover",details:"Clapping hands"},raisingHands:{category:"Interaction",action:"Open",label:"Popover",details:"Raising hands"},wavingHand:{category:"Interaction",action:"Open",label:"Popover",details:"Waving hand"},redHeart:{category:"Interaction",action:"Open",label:"Popover",details:"Red heart"},hundredPoints:{category:"Interaction",action:"Open",label:"Popover",details:"Hundred points"},fire:{category:"Interaction",action:"Open",label:"Popover",details:"Fire"},partyPopper:{category:"Interaction",action:"Open",label:"Popover",details:"Party popper"},rocket:{category:"Interaction",action:"Open",label:"Popover",details:"Rocket"},upArrow:{category:"Interaction",action:"Open",label:"Popover",details:"Up arrow"},downArrow:{category:"Interaction",action:"Open",label:"Popover",details:"Down arrow"},eyes:{category:"Interaction",action:"Open",label:"Popover",details:"Eyes"},trophy:{category:"Interaction",action:"Open",label:"Popover",details:"Trophy"},worldMap:{category:"Interaction",action:"Open",label:"Popover",details:"World map"},reactionOverflow:{category:"Interaction",action:"Open",label:"Popover",details:"Reaction overflow"},addReaction:{category:"Interaction",action:"Open",label:"Popover",details:"Add reaction"},activityEnabled:{category:"Interaction",action:"Open",label:"Popover",details:"Activity Enabled"},activityDisabled:{category:"Interaction",action:"Open",label:"Popover",details:"Activity Disabled"},site:{category:"Interaction",action:"Open",label:"Popover",details:"Site"}}},postList:{category:"Interaction",action:"Open",label:"Post List"},panel:{details:{legend:{category:"Interaction",action:"Open",label:"Panel",details:"Legend"},discussionOptions:{category:"Interaction",action:"Open",label:"Panel",details:"Discussion Options"}}},search:{category:"Interaction",action:"Open",label:"Search"},thread:{category:"Interaction",action:"Open",label:"Thread",details:{bodyAction:{category:"Interaction",action:"Open",label:"Thread",details:"Body Action"},location:{category:"Interaction",action:"Open",label:"Thread",details:"Location"},post:{category:"Interaction",action:"Open",label:"Thread",details:"Post"}}},editor:{category:"Interaction",action:"Open",label:"Editor",details:{reply:{category:"Interaction",action:"Open",label:"Editor",details:"Reply"}}},table:{category:"Interaction",action:"Open",label:"Table"},modal:{details:{newContent:{category:"Interaction",action:"Open",label:"Modal",details:"New Content"},addExistingContent:{category:"Interaction",action:"Open",label:"Modal",details:"Add Existing Content"},addContent:{category:"Interaction",action:"Open",label:"Modal",details:"Add Content"},createProject:{category:"Interaction",action:"Open",label:"Modal",details:"Create Project"},feeds:{category:"Interaction",action:"Open",label:"Modal",details:"Feeds"},addGroups:{category:"Interaction",action:"Open",label:"Modal",details:"Add Groups"},addUsers:{category:"Interaction",action:"Open",label:"Modal",details:"Add Users"},share:{category:"Interaction",action:"Open",label:"Modal",details:"Share"},deleteContent:{category:"Interaction",action:"Open",label:"Modal",details:"Delete Content"}}},locations:{category:"Interaction",action:"Open",label:"Locations"},stepper:{category:"Interaction",action:"Open",label:"Stepper",details:{emailNotifications:{category:"Interaction",action:"Open",label:"Stepper",details:"Email Notifications"},postActivity:{category:"Interaction",action:"Open",label:"Stepper",details:"Post Activity"}}},popUp:{details:{post:{category:"Interaction",action:"Open",label:"Pop-Up",details:"Post"}}},accordion:{details:{attribute:{category:"Interaction",action:"Open",label:"Accordion",details:"Attribute"}}},tooltip:{details:{chipComponentWithStringHidden:{category:"Interaction",action:"Open",label:"Tooltip",details:"Chip Component with string Hidden"}}},timeline:{category:"Interaction",action:"Open",label:"Timeline"},dropdown:{category:"Interaction",action:"Open",label:"Dropdown"},menu:{details:{view:{category:"Interaction",action:"Open",label:"Menu",details:"View"},options:{category:"Interaction",action:"Open",label:"Menu",details:"Options"},user:{category:"Interaction",action:"Open",label:"Menu",details:"User"}}},sidePanel:{details:{sharing:{category:"Interaction",action:"Open",label:"Side Panel",details:"Sharing"}}}}},download:{category:"Interaction",action:"Download",details:{cache:{category:"Interaction",action:"Download",details:"Cache"},export:{category:"Interaction",action:"Download",details:"Export"}}},share:{label:{link:{category:"Interaction",action:"Share",label:"Link"}}},zoom:{label:{in:{category:"Interaction",action:"Zoom",label:"In"},out:{category:"Interaction",action:"Zoom",label:"Out"},to:{category:"Interaction",action:"Zoom",label:"To"}}},close:{label:{postList:{category:"Interaction",action:"Close",label:"Post List"},thread:{category:"Interaction",action:"Close",label:"Thread"},panel:{details:{legend:{category:"Interaction",action:"Close",label:"Panel",details:"Legend"}}},search:{category:"Interaction",action:"Close",label:"Search"},editor:{category:"Interaction",action:"Close",label:"Editor",details:{addPost:{category:"Interaction",action:"Close",label:"Editor",details:"Add Post"}}},table:{category:"Interaction",action:"Close",label:"Table"},modal:{details:{addContent:{category:"Interaction",action:"Close",label:"Modal",details:"Add Content"},newContent:{category:"Interaction",action:"Close",label:"Modal",details:"New Content"},addExistingContent:{category:"Interaction",action:"Close",label:"Modal",details:"Add Existing Content"},createProject:{category:"Interaction",action:"Close",label:"Modal",details:"Create Project"},managePreferences:{category:"Interaction",action:"Close",label:"Modal",details:"Manage Preferences"},discussionOptions:{category:"Interaction",action:"Close",label:"Modal",details:"Discussion Options"},addGroups:{category:"Interaction",action:"Close",label:"Modal",details:"Add Groups"},addUsers:{category:"Interaction",action:"Close",label:"Modal",details:"Add Users"},deleteContent:{category:"Interaction",action:"Close",label:"Modal",details:"Delete Content"},share:{category:"Interaction",action:"Close",label:"Modal",details:"Share"}}},locations:{category:"Interaction",action:"Close",label:"Locations"},popover:{details:{options:{category:"Interaction",action:"Close",label:"Popover",details:"Options"},help:{category:"Interaction",action:"Close",label:"Popover",details:"Help"}}},popUp:{details:{post:{category:"Interaction",action:"Close",label:"Pop Up",details:"Post"}}},accordion:{details:{attribute:{category:"Interaction",action:"Close",label:"Accordion",details:"Attribute"}}},alert:{details:{projectWorkspaceIntroNotice:{category:"Interaction",action:"Close",label:"Alert",details:"Project Workspace Intro Notice"}},category:"Interaction",action:"Close",label:"Alert"},timeline:{category:"Interaction",action:"Close",label:"Timeline"}},details:{deleteContent:{category:"Interaction",action:"Close",details:"Delete Content"}}},search:{label:{query:{category:"Interaction",action:"Search",label:"Query",details:{focus:{category:"Interaction",action:"Search",label:"Query",details:"Focus"},loseFocus:{category:"Interaction",action:"Search",label:"Query",details:"Lose Focus"}}},filter:{category:"Interaction",action:"Search",label:"Filter",details:{clear:{category:"Interaction",action:"Search",label:"Filter",details:"Clear"}}},click:{category:"Interaction",action:"Search",label:"Click"},loadMore:{category:"Interaction",action:"Search",label:"Load More",details:{attributes:{category:"Interaction",action:"Search",label:"Load More",details:"Attributes"}}},backToTop:{category:"Interaction",action:"Search",label:"Back to Top"},view:{category:"Interaction",action:"Search",label:"View"},whatsNew:{category:"Interaction",action:"Search",label:"Whats New",details:{switchToClassicView:{category:"Interaction",action:"Search",label:"Whats New",details:"Switch to classic view"},bannerDismiss:{category:"Interaction",action:"Search",label:"Whats New",details:"Banner dismiss"},enableForAllUsers:{category:"Interaction",action:"Search",label:"Whats New",details:"Enable for all users"}}},action:{details:{overflow:{category:"Interaction",action:"Search",label:"Action",details:"Overflow"},exportCatalog:{category:"Interaction",action:"Search",label:"Action",details:"Export catalog"},exportSearchResults:{category:"Interaction",action:"Search",label:"Action",details:"Export search results"}}}}},update:{label:{categoryCard:{category:"Interaction",action:"Update",label:"Category Card"}}},viewed:{label:{recents:{category:"Interaction",action:"Viewed",label:"Recents"},empty:{category:"Interaction",action:"Viewed",label:"Empty"},post:{details:{thread:{category:"Interaction",action:"Viewed",label:"Post",details:"Thread"},postList:{category:"Interaction",action:"Viewed",label:"Post",details:"Post List"}}},filters:{details:{hostedDownloadsDisabled:{category:"Interaction",action:"Viewed",label:"Filters",details:"Hosted Downloads Disabled"},hostedDownloadsEnabled:{category:"Interaction",action:"Viewed",label:"Filters",details:"Hosted Downloads Enabled"}}},alert:{category:"Interaction",action:"Viewed",label:"Alert"}}},enable:{label:{draw:{category:"Interaction",action:"Enable",label:"Draw",details:{update:{category:"Interaction",action:"Enable",label:"Draw",details:"Update"}}},select:{category:"Interaction",action:"Enable",label:"Select"},addLocation:{category:"Interaction",action:"Enable",label:"Add Location"},collapse:{details:{timeline:{category:"Interaction",action:"Enable",label:"Collapse",details:"Timeline"}}},notifications:{details:{weekly:{category:"Interaction",action:"Enable",label:"Notifications",details:"Weekly"}}},content:{details:{hubFeeds:{category:"Interaction",action:"Enable",label:"Content",details:"Hub feeds"}}}}},disable:{label:{draw:{category:"Interaction",action:"Disable",label:"Draw",details:{update:{category:"Interaction",action:"Disable",label:"Draw",details:"Update"}}},select:{category:"Interaction",action:"Disable",label:"Select"},addLocation:{category:"Interaction",action:"Disable",label:"Add Location"},collapse:{details:{timeline:{category:"Interaction",action:"Disable",label:"Collapse",details:"Timeline"}}},notifications:{details:{weekly:{category:"Interaction",action:"Disable",label:"Notifications",details:"Weekly"}}},content:{details:{hubFeeds:{category:"Interaction",action:"Disable",label:"Content",details:"Hub feeds"}}}}},select:{label:{content:{category:"Interaction",action:"Select",label:"Content",details:{selectTool:{category:"Interaction",action:"Select",label:"Content",details:"Select Tool"}}},groups:{category:"Interaction",action:"Select",label:"Groups",details:{recents:{category:"Interaction",action:"Select",label:"Groups",details:"Recents"}}},collapse:{details:{timeline:{category:"Interaction",action:"Select",label:"Collapse",details:"Timeline"}}}},category:"Interaction",action:"Select"},draw:{label:{start:{details:{polygon:{category:"Interaction",action:"Draw",label:"Start",details:"Polygon"},polyline:{category:"Interaction",action:"Draw",label:"Start",details:"Polyline"},point:{category:"Interaction",action:"Draw",label:"Start",details:"Point"}}},complete:{details:{polygon:{category:"Interaction",action:"Draw",label:"Complete",details:"Polygon"},polyline:{category:"Interaction",action:"Draw",label:"Complete",details:"Polyline"},point:{category:"Interaction",action:"Draw",label:"Complete",details:"Point"}}},delete:{details:{polygon:{category:"Interaction",action:"Draw",label:"Delete",details:"Polygon"},polyline:{category:"Interaction",action:"Draw",label:"Delete",details:"Polyline"},point:{category:"Interaction",action:"Draw",label:"Delete",details:"Point"}}},update:{details:{polygon:{category:"Interaction",action:"Draw",label:"Update",details:"Polygon"},polyline:{category:"Interaction",action:"Draw",label:"Update",details:"Polyline"},point:{category:"Interaction",action:"Draw",label:"Update",details:"Point"}}}}},deselect:{label:{groups:{category:"Interaction",action:"Deselect",label:"Groups"},content:{category:"Interaction",action:"Deselect",label:"Content"},collapse:{details:{timeline:{category:"Interaction",action:"Deselect",label:"Collapse",details:"Timeline"}}}},category:"Interaction",action:"Deselect"},alert:{label:{warning:{details:{discussionsBlocked:{category:"Interaction",action:"Alert",label:"Warning",details:"Discussions Blocked"}}}}},subscribe:{label:{newsletter:{category:"Interaction",action:"Subscribe",label:"Newsletter"}}},add:{label:{image:{category:"Interaction",action:"Add",label:"Image"},content:{category:"Interaction",action:"Add",label:"Content"},groups:{category:"Interaction",action:"Add",label:"Groups"},users:{category:"Interaction",action:"Add",label:"Users"},step:{details:{timeline:{category:"Interaction",action:"Add",label:"Step",details:"Timeline"}}}}},remove:{label:{image:{category:"Interaction",action:"Remove",label:"Image"},content:{category:"Interaction",action:"Remove",label:"Content"},groups:{category:"Interaction",action:"Remove",label:"Groups"},users:{category:"Interaction",action:"Remove",label:"Users"},step:{details:{timeline:{category:"Interaction",action:"Remove",label:"Step",details:"Timeline"}}},location:{details:{clearAll:{category:"Interaction",action:"Remove",label:"Location",details:"Clear All"}}}}},authenticate:{label:{signout:{category:"Interaction",action:"Authenticate",label:"Signout"}}}}},groups:{action:{update:{label:{settings:{details:{allowDiscussions:{category:"Groups",action:"Update",label:"Settings",details:"Allow Discussions"},blockDiscussions:{category:"Groups",action:"Update",label:"Settings",details:"Block Discussions"}}}}}}},navigation:{action:{view:{label:{content:{details:{dcat:{category:"Navigation",action:"View",label:"Content",details:"DCAT"},dcatUs11:{category:"Navigation",action:"View",label:"Content",details:"DCAT-US-1.1"},dcatAp201:{category:"Navigation",action:"View",label:"Content",details:"DCAT-AP-2.0.1"},rss2:{category:"Navigation",action:"View",label:"Content",details:"RSS-2.0"},about:{category:"Navigation",action:"View",label:"Content",details:"About"},library:{category:"Navigation",action:"View",label:"Content",details:"Library"},hubSiteOgcApiLandingPage:{category:"Navigation",action:"View",label:"Content",details:"Hub Site OGC API Landing Page"},layoutEditor:{category:"Navigation",action:"View",label:"Content",details:"Layout Editor"},workspace:{category:"Navigation",action:"View",label:"Content",details:"Workspace"},publishedDraft:{category:"Navigation",action:"View",label:"Content",details:"Published Draft"},previewDraft:{category:"Navigation",action:"View",label:"Content",details:"Preview Draft"},site:{category:"Navigation",action:"View",label:"Content",details:"Site"}}},users:{details:{profile:{category:"Navigation",action:"View",label:"Users",details:"Profile"}}},groups:{details:{profile:{category:"Navigation",action:"View",label:"Groups",details:"Profile"},about:{category:"Navigation",action:"View",label:"Groups",details:"About"}}},search:{details:{sourceProjectSearch:{category:"Navigation",action:"View",label:"Search",details:"Source: Project Search"},sourceSearch:{category:"Navigation",action:"View",label:"Search",details:"Source: Search"},searchApiExplorer:{category:"Navigation",action:"View",label:"Search",details:"Search API Explorer"}}},feeds:{details:{feedsApiExplorer:{category:"Navigation",action:"View",label:"Feeds",details:"Feeds API Explorer"}}},orgs:{details:{overview:{category:"Navigation",action:"View",label:"Orgs",details:"Overview"}}}}},external:{label:{hubStatus:{category:"Navigation",action:"External",label:"Hub Status"},itemDetails:{category:"Navigation",action:"External",label:"Item Details"},link:{category:"Navigation",action:"External",label:"Link"},webHelp:{category:"Navigation",action:"External",label:"Web Help",details:{projectWorkspaceIntroNotice:{category:"Navigation",action:"External",label:"Web Help",details:"Project Workspace Intro Notice"},learnMoreAboutHubProjects:{category:"Navigation",action:"External",label:"Web Help",details:"Learn more about Hub Projects"},enableOrDisableHubActivityTracking:{category:"Navigation",action:"External",label:"Web Help",details:"Enable or Disable Hub Activity Tracking"}}},changelog:{category:"Navigation",action:"External",label:"Changelog"},arcGisBlog:{category:"Navigation",action:"External",label:"ArcGIS Blog"},customerFeedback:{details:{hubProjectFeedbackSurvey:{category:"Navigation",action:"External",label:"Customer Feedback",details:"Hub Project Feedback Survey"}}},arcGisOnline:{details:{organization:{category:"Navigation",action:"External",label:"ArcGIS Online",details:"Organization"}}}},category:"Navigation",action:"External"},edit:{label:{profile:{category:"Navigation",action:"Edit",label:"Profile"},thumbnail:{category:"Navigation",action:"Edit",label:"Thumbnail"},bio:{category:"Navigation",action:"Edit",label:"Bio"},content:{details:{site:{category:"Navigation",action:"Edit",label:"Content",details:"Site"},hubFeeds:{category:"Navigation",action:"Edit",label:"Content",details:"Hub feeds"}}}}},onPage:{label:{overview:{category:"Navigation",action:"On Page",label:"Overview"},teams:{category:"Navigation",action:"On Page",label:"Teams"},content:{category:"Navigation",action:"On Page",label:"Content"},favorites:{category:"Navigation",action:"On Page",label:"Favorites"},chart:{category:"Navigation",action:"On Page",label:"Chart"},table:{category:"Navigation",action:"On Page",label:"Table"}}},new:{label:{content:{category:"Navigation",action:"New",label:"Content",details:{app:{category:"Navigation",action:"New",label:"Content",details:"App"},feedback:{category:"Navigation",action:"New",label:"Content",details:"Feedback"},template:{category:"Navigation",action:"New",label:"Content",details:"Template"},event:{category:"Navigation",action:"New",label:"Content",details:"Event"}}},groups:{category:"Navigation",action:"New",label:"Groups"}}},home:{category:"Navigation",action:"Home",label:{hubOverview:{category:"Navigation",action:"Home",label:"Hub Overview"}}},manage:{category:"Navigation",action:"Manage",label:{catalogConfiguration:{category:"Navigation",action:"Manage",label:"Catalog Configuration",details:{configureEmptyCatalog:{category:"Navigation",action:"Manage",label:"Catalog Configuration",details:"Configure empty catalog"}}}}}}},users:{action:{update:{label:{notifications:{details:{enabled:{category:"Users",action:"Update",label:"Notifications",details:"Enabled"},disabled:{category:"Users",action:"Update",label:"Notifications",details:"Disabled"}}}}}}},org:{}}},a={category:{CONTENT:"Content",INTERACTION:"Interaction",GROUPS:"Groups",NAVIGATION:"Navigation",USERS:"Users",ORG:"Org"},action:{DOWNLOAD:"Download",VIEW:"View",OPEN:"Open",SHARE:"Share",ZOOM:"Zoom",CLOSE:"Close",SEARCH:"Search",UPDATE:"Update",EXTERNAL:"External",DELETE:"Delete",VIEWED:"Viewed",CREATE:"Create",ENABLE:"Enable",DISABLE:"Disable",SELECT:"Select",DRAW:"Draw",DESELECT:"Deselect",EDIT:"Edit",ON_PAGE:"On-Page",NEW:"New",ALERT:"Alert",SUBSCRIBE:"Subscribe",HOME:"Home",ADD:"Add",REMOVE:"Remove",MANAGE:"Manage",AUTHENTICATE:"Authenticate"},label:{CONTENT:"Content",POPOVER:"Popover",LINK:"Link",IN:"In",OUT:"Out",POST_LIST:"Post List",THREAD:"Thread",PANEL:"Panel",QUERY:"Query",CATEGORY_CARD:"Category Card",SEARCH:"Search",TO:"To",HUB_STATUS:"Hub Status",RECENTS:"Recents",EMPTY:"Empty",EDITOR:"Editor",POST:"Post",TABLE:"Table",USERS:"Users",GROUPS:"Groups",DRAW:"Draw",SELECT:"Select",START:"Start",COMPLETE:"Complete",DELETE:"Delete",FILTER:"Filter",UPDATE:"Update",MODAL:"Modal",ITEM_DETAILS:"Item Details",UPLOAD:"Upload",URL:"URL",FILTERS:"Filters",PROFILE:"Profile",THUMBNAIL:"Thumbnail",OVERVIEW:"Overview",TEAMS:"Teams",FAVORITES:"Favorites",BIO:"Bio",CLICK:"Click",LOAD_MORE:"Load More",LOCATIONS:"Locations",ABOUT:"About",EXPLORE:"Explore",BACK_TO_TOP:"Back to Top",ADD_LOCATION:"Add Location",LOCATION:"Location",STEPPER:"Stepper",NOTIFICATIONS:"Notifications",VIEW:"View",SETTINGS:"Settings",WARNING:"Warning",POP_UP:"Pop-Up",WEB_HELP:"Web Help",ACCORDION:"Accordion",CHART:"Chart",WHATS_NEW:"Whats New",TOOLTIP:"Tooltip",STATUS:"Status",REACTION:"Reaction",REPLY:"Reply",NEWSLETTER:"Newsletter",CHANGELOG:"Changelog",ARC_GIS_BLOG:"ArcGIS Blog",HUB_OVERVIEW:"Hub Overview",IMAGE:"Image",STEP:"Step",COLLAPSE:"Collapse",DESCRIPTION:"Description",SUMMARY:"Summary",TIMELINE:"Timeline",FEATURED_CONTENT:"Featured Content",ACCESS:"Access",ALERT:"Alert",CUSTOMER_FEEDBACK:"Customer Feedback",ARC_GIS_ONLINE:"ArcGIS Online",DROPDOWN:"Dropdown",ACTION:"Action",FEEDS:"Feeds",ORGS:"Orgs",MENU:"Menu",SIDE_PANEL:"Side Panel",SIGNOUT:"Signout",LAYOUT:"Layout",SITE:"Site",TEMPLATE:"Template",CATALOG_CONFIGURATION:"Catalog Configuration",PAGE:"Page"},details:{DCAT:"DCAT",DCAT_US_1_1:"DCAT-US-1.1",DCAT_AP_2_0_1:"DCAT-AP-2.0.1",SHARE:"Share",CACHE:"Cache",EXPORT:"Export",LEGEND:"Legend",FOCUS:"Focus",LOSE_FOCUS:"Lose Focus",THREAD:"Thread",POST_LIST:"Post List",DETAILS:"Details",PROFILE:"Profile",OPTIONS:"Options",SELECT_TOOL:"Select Tool",POLYGON:"Polygon",POLYLINE:"Polyline",POINT:"Point",CLEAR:"Clear",UPDATE:"Update",HELP:"Help",RECENTS:"Recents",ADD_POST:"Add Post",ADD_CONTENT:"Add Content",NEW_CONTENT:"New Content",ADD_EXISTING_CONTENT:"Add Existing Content",ABOUT:"About",HOSTED_DOWNLOADS_DISABLED:"Hosted Downloads Disabled",HOSTED_DOWNLOADS_ENABLED:"Hosted Downloads Enabled",LIBRARY:"Library",SOURCE_PROJECT_SEARCH:"Source: Project Search",APP:"App",FEEDBACK:"Feedback",TEMPLATE:"Template",EVENT:"Event",MORE:"More",LESS:"Less",RESET:"Reset",DATE_UPDATED:"Date Updated",CREATE_PROJECT:"Create Project",REPLY:"Reply",BODY_ACTION:"Body Action",SOURCE_SEARCH:"Source: Search",SEARCH_API_EXPLORER:"Search API Explorer",HUB_SITE_OGC_API_LANDING_PAGE:"Hub Site OGC API Landing Page",LINE:"Line",MANAGE_PREFERENCES:"Manage Preferences",ENABLED:"Enabled",DISABLED:"Disabled",ALL_POSTS:"All Posts",EMAIL_NOTIFICATIONS:"Email Notifications",POST_ACTIVITY:"Post Activity",DISCUSSION_OPTIONS:"Discussion Options",ALLOW_DISCUSSIONS:"Allow Discussions",BLOCK_DISCUSSIONS:"Block Discussions",DISCUSSIONS_BLOCKED:"Discussions Blocked",FEEDS:"Feeds",POST:"Post",LOCATION:"Location",ATTRIBUTES:"Attributes",ATTRIBUTE:"Attribute",EXIT_MODAL:"Exit modal",ACCEPT_MODAL:"Accept modal",OPEN_MODAL:"Open modal",CHIP_COMPONENT_WITH_STRING_HIDDEN:"Chip Component with string Hidden",HIDE:"Hide",SHOW:"Show",SMILING_FACE:"Smiling face",CONFUSED_FACE:"Confused face",GRINNING_FACE:"Grinning face",LAUGHING_FACE:"Laughing face",FACE_WITH_TEARS_OF_JOY:"Face with tears of joy",THINKING_FACE:"Thinking face",WINKING_FACE:"Winking face",PARTYING_FACE:"Partying face",SAD_FACE:"Sad face",SHOCKED_FACE:"Shocked face",THUMBS_UP:"Thumbs up",THUMBS_DOWN:"Thumbs down",CLAPPING_HANDS:"Clapping hands",RAISING_HANDS:"Raising hands",WAVING_HAND:"Waving hand",RED_HEART:"Red heart",HUNDRED_POINTS:"Hundred points",FIRE:"Fire",PARTY_POPPER:"Party popper",ROCKET:"Rocket",UP_ARROW:"Up arrow",DOWN_ARROW:"Down arrow",EYES:"Eyes",TROPHY:"Trophy",WORLD_MAP:"World map",REACTION_OVERFLOW:"Reaction overflow",ADD_REACTION:"Add reaction",SWITCH_TO_CLASSIC_VIEW:"Switch to classic view",BANNER_DISMISS:"Banner dismiss",ENABLE_WEEKLY_REPORT:"Enable Weekly Report",DISABLE_WEEKLY_REPORT:"Disable Weekly Report",SITE:"Site",ADD_GROUPS:"Add Groups",ADD_USERS:"Add Users",FEATURES_POINTS:"Features: points",FEATURES_LINES:"Features: lines",FEATURES_POLYGONS:"Features: polygons",POINTS_POINTS:"Points: points",POINTS_LINES:"Points: lines",POINTS_POLYGONS:"Points: polygons",COMPLETE:"Complete",EMPTY:"Empty",STEPS:"Steps",TIMELINE:"Timeline",PUBLIC:"Public",ORG:"Org",SHARED:"Shared",PRIVATE:"Private",PROJECT_WORKSPACE_INTRO_NOTICE:"Project Workspace Intro Notice",LEARN_MORE_ABOUT_HUB_PROJECTS:"Learn more about Hub Projects",HUB_PROJECT_FEEDBACK_SURVEY:"Hub Project Feedback Survey",REMOVE_EDIT_GROUPS:"Remove Edit Groups",REMOVE_VIEW_GROUPS:"Remove View Groups",ORGANIZATION:"Organization",ADD_VIEW_GROUPS:"Add View Groups",ADD_EDIT_GROUPS:"Add Edit Groups",DELETE_CONTENT:"Delete Content",ENABLE_FOR_ALL_USERS:"Enable for all users",ENABLE_BETA_VIEW:"Enable beta view",DISABLE_BETA_VIEW:"Disable beta view",CLEAR_ALL:"Clear all",ACTIVITY_ENABLED:"Activity Enabled",ACTIVITY_DISABLED:"Activity Disabled",ENABLE_OR_DISABLE_HUB_ACTIVITY_TRACKING:"Enable or Disable Hub Activity Tracking",OVERFLOW:"Overflow",EXPORT_CATALOG:"Export catalog",EXPORT_SEARCH_RESULTS:"Export search results",WEEKLY:"Weekly",HUB_FEEDS:"Hub feeds",FEEDS_API_EXPLORER:"Feeds API Explorer",LAYOUT_EDITOR:"Layout Editor",WORKSPACE:"Workspace",PUBLISHED_DRAFT:"Published Draft",PREVIEW_DRAFT:"Preview Draft",OVERVIEW:"Overview",VIEW:"View",USER:"User",SHARING:"Sharing",DRAFT:"Draft",CLONE:"Clone",ADD_CATALOG_GROUPS:"Add Catalog Groups",REMOVE_CATALOG_GROUPS:"Remove Catalog Groups",PUBLISH:"Publish",CONFIGURE_EMPTY_CATALOG:"Configure empty catalog"},element:{ACTIONS_MENU:"Actions Menu",CONTENT_HERO:"Content Hero",DOWNLOAD_CARD:"Download Card",EXPLORE_ALL_CONTENT:"Explore All Content",RESULTS_LIST:"Results List",ON_PAGE:"On-Page",RESET_FILTERS:"Reset Filters",CHIPS:"Chips",EXPLORE_SITE:"Explore Site",BACK_TO_TOP:"Back to Top",VIEW_BUTTON:"View Button",X_BUTTON:"x button",OKAY_BUTTON:"okay button",INFO_BUTTON:"info button",NEWSLETTER_REPORTS_NOTICE:"newsletter reports notice"},response:{SUCCESS:"Success",FAILURE:"Failure"}}
var o=Object(r.c)((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.defaultDimensions=void 0,t.defaultDimensions={CATEGORY:"category",ACTION:"action",LABEL:"label"}})),s=Object(r.c)((function(e,t){var n=r.a&&r.a.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=r.a&&r.a.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)}
Object.defineProperty(t,"__esModule",{value:!0}),i(o,t)})),l=Object(r.c)((function(e,t){var n,i=r.a&&r.a.__assign||function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e}).apply(this,arguments)},a=r.a&&r.a.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,i=0,a=t.length;i<a;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i])
return e.concat(r||Array.prototype.slice.call(t))}
Object.defineProperty(t,"__esModule",{value:!0}),t.customDimensionsConfig=t.constantDimensions=t.dictionaryDimensions=t.dimensions=void 0,t.dimensions=i(i({},s.defaultDimensions),{DETAILS:"details",USER_TYPE:"userType",ID:"id",TYPE:"type",ORGANIZATION_ID:"organizationId",GROUP_ID:"groupId",GROUP_ACCESS:"groupAccess",GROUP_TYPE:"groupType",SEARCH:"search",GROUP_ORG_ID:"groupOrgId",SITE_ID:"siteId",ACCESS:"access",CONTENT_ORG_ID:"contentOrgId",ELEMENT:"element",RESPONSE:"response",POST_ID:"postId",PARENT_ID:"parentId",CHANNEL_ID:"channelId",CHANNEL_ACCESS:"channelAccess"}),t.dictionaryDimensions=[t.dimensions.CATEGORY,t.dimensions.ACTION,t.dimensions.LABEL,t.dimensions.DETAILS],t.constantDimensions=a(a([],t.dictionaryDimensions,!0),[t.dimensions.ELEMENT,t.dimensions.RESPONSE],!1),t.customDimensionsConfig=((n={})[t.dimensions.DETAILS]=1,n[t.dimensions.USER_TYPE]=2,n[t.dimensions.ID]=3,n[t.dimensions.TYPE]=4,n[t.dimensions.ORGANIZATION_ID]=5,n[t.dimensions.GROUP_ID]=6,n[t.dimensions.GROUP_ACCESS]=7,n[t.dimensions.GROUP_TYPE]=8,n[t.dimensions.SEARCH]=9,n[t.dimensions.GROUP_ORG_ID]=10,n[t.dimensions.SITE_ID]=11,n[t.dimensions.ACCESS]=12,n[t.dimensions.CONTENT_ORG_ID]=13,n[t.dimensions.ELEMENT]=14,n[t.dimensions.RESPONSE]=15,n[t.dimensions.POST_ID]=16,n[t.dimensions.PARENT_ID]=17,n[t.dimensions.CHANNEL_ID]=18,n[t.dimensions.CHANNEL_ACCESS]=19,n)})),c=Object(r.c)((function(e,t){var n
Object.defineProperty(t,"__esModule",{value:!0}),t.customMetricsConfig=t.metrics=void 0,t.metrics={POSITION:"position",SIZE:"size",DURATION:"duration",COUNT:"count"},t.customMetricsConfig=((n={})[t.metrics.POSITION]=1,n[t.metrics.SIZE]=2,n[t.metrics.DURATION]=3,n[t.metrics.COUNT]=4,n)})),u=Object(r.c)((function(e,t){var n=r.a&&r.a.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.constants=t.dictionary=t.customMetricsConfig=t.customDimensionsConfig=void 0
var o=n(i),s=n(a)
Object.defineProperty(t,"customDimensionsConfig",{enumerable:!0,get:function(){return l.customDimensionsConfig}}),Object.defineProperty(t,"customMetricsConfig",{enumerable:!0,get:function(){return c.customMetricsConfig}}),t.dictionary=o.default,t.constants=s.default}))},1467:function(e,t,n){"use strict"
n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return o}))
var r=n(990),i=n(1230)
function a(e,t,n,r){if(e)if("CIMTextSymbol"!==e.type){if(n&&e.effects)for(const n of e.effects)s(n,t)
if(e.symbolLayers)for(const n of e.symbolLayers)switch(n.type){case"CIMPictureMarker":case"CIMVectorMarker":o(n,t,r)
break
case"CIMPictureStroke":case"CIMSolidStroke":(null==r||!r.preserveOutlineWidth)&&n.width&&(n.width*=t)
break
case"CIMPictureFill":n.height&&(n.height*=t),n.offsetX&&(n.offsetX*=t),n.offsetY&&(n.offsetY*=t)
break
case"CIMHatchFill":a(n.lineSymbol,t,!0,{...r,preserveOutlineWidth:!1}),n.offsetX&&(n.offsetX*=t),n.offsetY&&(n.offsetY*=t),n.separation&&(n.separation*=t)}}else null!=e.height&&(e.height*=t)}function o(e,t,n){if(e&&(e.markerPlacement&&function(e,t){switch(Object(i.w)(e)&&e.offset&&(e.offset*=t),e.type){case"CIMMarkerPlacementAlongLineRandomSize":case"CIMMarkerPlacementAlongLineSameSize":if(e.customEndingOffset&&(e.customEndingOffset*=t),e.offsetAlongLine&&(e.offsetAlongLine*=t),e.placementTemplate&&e.placementTemplate.length){const n=e.placementTemplate.map(e=>e*t)
e.placementTemplate=n}break
case"CIMMarkerPlacementAlongLineVariableSize":if(e.maxRandomOffset&&(e.maxRandomOffset*=t),e.placementTemplate&&e.placementTemplate.length){const n=e.placementTemplate.map(e=>e*t)
e.placementTemplate=n}break
case"CIMMarkerPlacementOnLine":e.startPointOffset&&(e.startPointOffset*=t)
break
case"CIMMarkerPlacementAtExtremities":e.offsetAlongLine&&(e.offsetAlongLine*=t)
break
case"CIMMarkerPlacementAtMeasuredUnits":case"CIMMarkerPlacementOnVertices":break
case"CIMMarkerPlacementAtRatioPositions":e.beginPosition&&(e.beginPosition*=t),e.endPosition&&(e.endPosition*=t)
break
case"CIMMarkerPlacementPolygonCenter":e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t)
break
case"CIMMarkerPlacementInsidePolygon":e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t),e.stepX&&(e.stepX*=t),e.stepY&&(e.stepY*=t)}}(e.markerPlacement,t),e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t),e.anchorPoint&&"Absolute"===e.anchorPointUnits&&(e.anchorPoint={x:e.anchorPoint.x*t,y:e.anchorPoint.y*t}),e.size=null!=e.size?e.size*t:0,"CIMVectorMarker"===e.type&&e.markerGraphics))for(const r of e.markerGraphics)e.scaleSymbolsProportionally||a(r.symbol,t,!0,n)}function s(e,t){switch(e.type){case"CIMGeometricEffectArrow":case"CIMGeometricEffectDonut":e.width&&(e.width*=t)
break
case"CIMGeometricEffectBuffer":e.size&&(e.size*=t)
break
case"CIMGeometricEffectCut":e.beginCut&&(e.beginCut*=t),e.endCut&&(e.endCut*=t),e.middleCut&&(e.middleCut*=t)
break
case"CIMGeometricEffectDashes":if(e.customEndingOffset&&(e.customEndingOffset*=t),e.offsetAlongLine&&(e.offsetAlongLine*=t),e.dashTemplate&&e.dashTemplate.length){const n=e.dashTemplate.map(e=>e*t)
e.dashTemplate=n}break
case"CIMGeometricEffectExtension":case"CIMGeometricEffectJog":case"CIMGeometricEffectRadial":e.length&&(e.length*=t)
break
case"CIMGeometricEffectMove":e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t)
break
case"CIMGeometricEffectOffset":case"CIMGeometricEffectOffsetTangent":e.offset&&(e.offset*=t)
break
case"CIMGeometricEffectRegularPolygon":e.radius&&(e.radius*=t)
break
case"CIMGeometricEffectTaperedPolygon":e.fromWidth&&(e.fromWidth*=t),e.length&&(e.length*=t),e.toWidth&&(e.toWidth*=t)
break
case"CIMGeometricEffectWave":e.amplitude&&(e.amplitude*=t),e.period&&(e.period*=t)}}function l(e){const t=[]
return function e(t,n){var r,a
if(!t)return
let o
o="CIMTextSymbol"===t.type?t.symbol:t
const s="CIMPolygonSymbol"===t.type
if(null!=(r=o)&&r.symbolLayers)for(const t of o.symbolLayers)if(!(t.colorLocked||s&&(Object(i.x)(t)||Object(i.v)(t)&&t.markerPlacement&&Object(i.w)(t.markerPlacement))))switch(t.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":t.tintColor&&c(n,t.tintColor)
break
case"CIMVectorMarker":null==(a=t.markerGraphics)||a.forEach(t=>{e(t.symbol,n)})
break
case"CIMSolidStroke":case"CIMSolidFill":c(n,t.color)
break
case"CIMHatchFill":e(t.lineSymbol,n)}}(Object(i.C)(e),t),t.length?new r.a(Object(i.h)(t[0])):null}function c(e,t){for(const n of e)if(n.join(".")===t.join("."))return
e.push(t)}function u(e,t,n){t instanceof r.a||(t=new r.a(t))
const a=Object(i.C)(e)
a&&function e(t,n,r){var a,o,s
if(!t)return
let l
l="CIMTextSymbol"===t.type?t.symbol:t
const c="CIMPolygonSymbol"===(null==(a=l)?void 0:a.type)
if(null!=(o=l)&&o.symbolLayers)for(const t of l.symbolLayers){if(t.colorLocked)continue
if(c)if(r){const{layersToColor:e}=r
if((Object(i.x)(t)||Object(i.v)(t)&&t.markerPlacement&&Object(i.w)(t.markerPlacement))&&"fill"===e||Object(i.u)(t)&&"outline"===e)continue}else if(Object(i.x)(t)||Object(i.v)(t)&&t.markerPlacement&&Object(i.w)(t.markerPlacement))continue
const a=n.toArray()
switch(t.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":t.tintColor=a
break
case"CIMVectorMarker":null==(s=t.markerGraphics)||s.forEach(t=>{e(t.symbol,n,r)})
break
case"CIMSolidStroke":case"CIMSolidFill":t.color=a
break
case"CIMHatchFill":e(t.lineSymbol,n,r)}}}(a,t,n)}},1485:function(e,t,n){"use strict"
n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return y})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return f})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return d})),n.d(t,"g",(function(){return p})),n.d(t,"h",(function(){return l})),n.d(t,"i",(function(){return h})),n.d(t,"j",(function(){return s})),n.d(t,"k",(function(){return b})),n.d(t,"l",(function(){return c})),n.d(t,"m",(function(){return o}))
var r,i,a=n(990);(i=r||(r={}))[i.size=22]="size",i[i.lineWidth=50]="lineWidth",i[i.maxSize=120]="maxSize",i[i.maxOutlineSize=80]="maxOutlineSize",i[i.tallSymbolWidth=20]="tallSymbolWidth"
const o={fill:[{type:"path",path:"M -10,-10 L 10,0 L 10,10 L -10,10 L -10,-10 Z"}],squareFill:[{type:"path",path:"M -10,-10 L 10,-10 L 10,10 L -10,10 L -10,-10 Z"}],pathSymbol3DLayer:[{type:"path",path:"M 3,12 L 12,0 L 11,-2 L -4,5 L -1,5 L 1,7 L 3,10 L 3,12 Z"},{type:"circle",cx:-2,cy:10,r:5}],extrudeSymbol3DLayer:[{type:"path",path:"M -7,-5 L -2,0 L -2,7 L -7,3 L -7,-5 Z"},{type:"path",path:"M -2,0 L -2,7 L 10,-3 L 10,-10 L -2,0 Z"},{type:"path",path:"M -7,-5 L -2,0 L 10,-10 L -2,-10 L -7,-5 Z"}],cone:[{type:"path",path:"M 0,-10 L -8,5 L -4,6.5 L 0,7 L 4,6.5 L 8,5 Z"}],tallCone:[{type:"path",path:"M 0,-9 L -3.5,7 L -1.5,7.8 L 0,8 L 1.5,7.8 L 3.5,7 L 0,-9 Z"}],invertedCone:[{type:"path",path:"M 0,7 L -8,-8 L 8,-8 Z"},{type:"path",path:"M -8,-8 L -4,-9.5 L 0,-10 L 4,-9.5 L 8,-8 L 4,-6.5 L 0,-6 L -4,-6.5 Z"}],cube:[{type:"path",path:"M -10,-7 L 0,-12 L 10,-7 L 0,-2 L -10,-7 Z"},{type:"path",path:"M -10,-7 L 0,-2 L 0,12 L -10,7 L -10,-7 Z"},{type:"path",path:"M 0,-2 L 10,-7 L 10,7 L 0,12 L 0,-2 Z"}],tallCube:[{type:"path",path:"M -3.5,-8.5 L 0,-9.5 L 3.5,-8.5 L 0,-7.5 L -3.5,-8.5 Z"},{type:"path",path:"M -3.5,-8.5 L 0,-7.5 L 0,9 L -3.5,8 L -3.5,-8.5 Z"},{type:"path",path:"M 0,-7.5 L 3.5,-8.5 L 3.5,8 L 0,9 L 0,-7.5 Z"}],cylinder:[{type:"path",path:"M -8,-9 L -8,7 L -4,8.5 L 0,9 L 4,8.5 L 8,7 L 8,-9 Z"},{type:"ellipse",cx:0,cy:-9,rx:8,ry:2}],tallCylinder:[{type:"path",path:"M -3.5,-9 L -3.5,7 L -1.5,7.8 L 0,8 L 1.5,7.8 L 3.5,7 L 3.5,-9 Z"},{type:"ellipse",cx:0,cy:-9,rx:3.5,ry:1}],diamond:[{type:"path",path:"M 0,-10 L 10,-1 L -1,1 L 0,-10 Z"},{type:"path",path:"M 0,-10 L -1,1 L -8,-1 L 0,-10 Z"},{type:"path",path:"M -1,1 L 0,10 L -8,-1 L -1,1 Z"},{type:"path",path:"M -1,0 L 0,10 L 10,-1 L -1,1 Z"}],tetrahedron:[{type:"path",path:"M 0,-10 L 10,7 L 0,0 L 0,-10 Z"},{type:"path",path:"M 0,-10 L 0,0 L -8,7 L 0,-10 Z"},{type:"path",path:"M 10,7 L 0,0 L -8,7 L 10,7 Z"}]}
function s(e,t,n){const i=r.size
let a=i,o=i
e<1?a*=.75:e>1&&(o*=1.25)
let s=i,l=i
return t&&n&&(a=o=s=l=0),[{type:"path",path:[{command:"M",values:[s,0]},{command:"L",values:[n?s:.875*s,0]},{command:"L",values:[n?a-.5*s:0,o-.5*l]},{command:"L",values:[a-.5*s,o-.5*l]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[s,0]},{command:"L",values:[s,t?0:.125*l]},{command:"L",values:[a-.5*s,t?o-.5*l:l]},{command:"L",values:[a-.5*s,o-.5*l]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[a-.5*s,o-.5*l]},{command:"L",values:[n?a-.5*s:0,o-.5*l]},{command:"L",values:[n?a-.5*s:0,t?o-.5*l:l]},{command:"L",values:[a-.5*s,t?o-.5*l:l]},{command:"Z",values:[]}]}]}function l(e){const t=r.size,n=.5*e
return[{type:"path",path:[{command:"M",values:[0,.7*t*.5]},{command:"L",values:[.3*t,.7*t]},{command:"L",values:[.3*t,.7*t+n]},{command:"L",values:[0,.7*t+n-.7*t*.5]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.3*t,.7*t]},{command:"L",values:[.3*t,.7*t+n]},{command:"L",values:[t,n]},{command:"L",values:[t,0]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.3*t,0]},{command:"L",values:[t,0]},{command:"L",values:[.3*t,.7*t]},{command:"L",values:[0,.7*t*.5]},{command:"Z",values:[]}]}]}function c(){return[{type:"path",path:"M80,80.2v-27c-1.5,0.7-2.8,1.6-3.9,2.8c-1.8,2.1-4.4,3.3-7.1,3.5c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.4,3.6c-1.8,2.1-4.4,3.3-7.2,3.4C8.3,59.3,5.7,58,3.9,56c-1.1-1.2-2.4-2.1-3.9-2.8v27"},{type:"path",path:"M11,59.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.4-3.6s5.1,1.3,7.4,3.6c1.8,2,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.3-3.6s5.1,1.3,7.4,3.6c1.8,2.1,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c1.1-1.2,2.4-2.1,3.9-2.8v-24c-1.5,0.7-2.8,1.6-3.9,2.8c-1.8,2.1-4.4,3.3-7.1,3.5c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.4,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.7-0.1-5.3-1.4-7.1-3.4c-1.1-1.2-2.4-2.1-3.9-2.8v24c1.5,0.7,2.8,1.6,3.9,2.8C5.7,58,8.3,59.3,11,59.4z"},{type:"path",path:"M11,35.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.4-3.6s5.1,1.3,7.4,3.6c1.8,2,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.3-3.6s5.1,1.3,7.4,3.6c1.8,2.1,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c1.1-1.2,2.4-2.1,3.9-2.8V3.6c-1.5,0.7-2.8,1.6-3.9,2.8c-2.2,2.1-4.6,3.4-7.1,3.4s-5-1.3-7.1-3.4s-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6S42.5,9.9,40,9.9s-5-1.3-7.1-3.4s-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.5,0-5-1.3-7.1-3.4C2.8,5.3,1.4,4.3,0,3.6v25.6c1.5,0.7,2.8,1.6,3.9,2.8C5.7,34.1,8.3,35.3,11,35.4z"}]}function u(e,t){let n=t?r.tallSymbolWidth:e
const i=e,a=t?4:6
n<=r.size?n-=.5*a:n-=a
const o=t?.35*n:.5*n
return[{type:"path",path:[{command:"M",values:[.5*n,0]},{command:"L",values:[n,.5*o]},{command:"L",values:[.5*n,o]},{command:"L",values:[0,.5*o]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[0,.5*o]},{command:"L",values:[.5*n,o]},{command:"L",values:[.5*n,i]},{command:"L",values:[0,i-.5*o]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.5*n,o]},{command:"L",values:[.5*n,i]},{command:"L",values:[n,i-.5*o]},{command:"L",values:[n,.5*o]},{command:"Z",values:[]}]}]}function d(e,t){let n=t?r.tallSymbolWidth:e
const i=e,a=t?4:6
n<=r.size?n-=.5*a:n-=a
const o=.5*n,s=.15*n,l=i-s
return[{type:"ellipse",cx:.5*n,cy:l,rx:o,ry:s},{type:"path",path:[{command:"M",values:[0,s]},{command:"L",values:[0,l]},{command:"L",values:[n,l]},{command:"L",values:[n,s]},{command:"Z",values:[]}]},{type:"ellipse",cx:.5*n,cy:s,rx:o,ry:s}]}function f(e,t){let n=t?r.tallSymbolWidth:e
const i=e,a=t?4:6
n<=r.size?n-=.5*a:n-=a
const o=.15*n,s=i-o
return[{type:"ellipse",cx:.5*n,cy:s,rx:.5*n,ry:o},{type:"path",path:[{command:"M",values:[.5*n,0]},{command:"L",values:[n,s]},{command:"L",values:[0,s]},{command:"Z",values:[]}]}]}function h(e){let t=e
const n=e
t<r.size?t-=3:t-=6
const i=.15*t
return[{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[t,0]},{command:"L",values:[.5*t,n-i]},{command:"Z",values:[]}]},{type:"ellipse",cx:.5*t,cy:0,rx:.5*t,ry:i}]}function p(e){let t=e
const n=e
t<r.size?t-=2:t-=4
const i=t,a=n,o=Math.floor(e/10)-1||1
return[{type:"path",path:[{command:"M",values:[.45*i,0]},{command:"L",values:[i,.5*a-o]},{command:"L",values:[.45*i-o,.5*a+o]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.45*i,0]},{command:"L",values:[.45*i-o,.5*a+o]},{command:"L",values:[0,.5*a-o]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[0,.5*a-o]},{command:"L",values:[.45*i-o,.5*a+o]},{command:"L",values:[.45*i,n]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.45*i,n]},{command:"L",values:[i,.5*a-o]},{command:"L",values:[.45*i-o,.5*a+o]},{command:"Z",values:[]}]}]}function b(e){const t=e
let n=e
return n<r.size?n-=1:n-=2,[{type:"path",path:[{command:"M",values:[.45*t,0]},{command:"L",values:[t,n]},{command:"L",values:[.45*t,.6*n]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.45*t,0]},{command:"L",values:[.45*t,.6*n]},{command:"L",values:[0,n]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[0,n]},{command:"L",values:[.45*t,.6*n]},{command:"L",values:[t,n]},{command:"Z",values:[]}]}]}function m(e,t){return Math.round(Math.min(Math.max(e+255*t*.75,0),255))}function y(e,t){if(null==e)return new a.a
if("type"in e&&("linear"===e.type||"pattern"===e.type))return e
const n=new a.a(e)
return new a.a([m(n.r,t),m(n.g,t),m(n.b,t),n.a])}},1490:function(e,t,n){"use strict"
n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return b}))
var r=n(196),i=n(771),a=n(1348),o=n(446),s=n(235),l=(n(1344),n(1347)),c=n(1507),u=n(1191)
const d=Object(l.a)()
function f(e,t){d.append(e,t),d.detach(t)}function h(e,t,n){const r=Math.ceil(t[0]),i=Math.ceil(t[1])
if(!e.some(e=>!!e.length))return null
const a=n&&n.node||document.createElement("div")
return null!=n.opacity&&(a.style.opacity=n.opacity.toString()),null!=n.effectView&&(a.style.filter=Object(u.f)(n.effectView)),f(a,()=>Object(c.g)(e,r,i,n)),a}function p(e,t,n,r,i){switch(i){case"multiply":e[t+0]*=n[0],e[t+1]*=n[1],e[t+2]*=n[2],e[t+3]*=n[3]
break
default:{const i=Object(a.b)({r:e[t+0],g:e[t+1],b:e[t+2]})
i.h=r.h,i.s=r.s,i.v=i.v/100*r.v
const o=Object(a.e)(i)
e[t+0]=o.r,e[t+1]=o.g,e[t+2]=o.b,e[t+3]*=n[3]
break}}}function b(e,t,n,l,c){return function(e,t,n){return e?Object(i.default)(e,{responseType:"image"}).then(e=>{const r=e.data,i=r.width,a=r.height,o=i/a
let s=t
if(n){const e=Math.max(i,a)
s=Math.min(s,e)}return{image:r,width:o<=1?Math.ceil(s*o):s,height:o<=1?s:Math.ceil(s/o)}}):Promise.reject(new o.a("renderUtils: imageDataSize","href not provided."))}(e,t,c).then(i=>{const o=i.width?i.width:t,c=i.height?i.height:t
if(i.image&&function(e,t){return!(!e||"ignore"===t||"multiply"===t&&255===e.r&&255===e.g&&255===e.b&&1===e.a)}(n,l)){let t=i.image.width,r=i.image.height
Object(s.a)("edge")&&/\.svg$/i.test(e)&&(t-=1,r-=1)
const u=function(e,t){e=Math.ceil(e),t=Math.ceil(t)
const n=document.createElement("canvas")
n.width=e,n.height=t,n.style.width=e+"px",n.style.height=t+"px"
const r=n.getContext("2d")
return r.clearRect(0,0,e,t),r}(o,c)
u.drawImage(i.image,0,0,t,r,0,0,o,c)
const d=u.getImageData(0,0,o,c),f=[n.r/255,n.g/255,n.b/255,n.a],h=Object(a.b)(n)
for(let e=0;e<d.data.length;e+=4)p(d.data,e,f,h,l)
u.putImageData(d,0,0),e=u.canvas.toDataURL("image/png")}else{const t=r.b&&r.b.findCredential(e)
if(t&&t.token){const n=e.includes("?")?"&":"?"
e=`${e}${n}token=${t.token}`}}return{url:e,width:o,height:c}}).catch(()=>({url:e,width:t,height:t}))}},1499:function(e,t,n){"use strict"
n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}))
const r={u1:[0,1],u2:[0,3],u4:[0,15],u8:[0,255],s8:[-128,127],u16:[0,65535],s16:[-32768,32767],u32:[0,4294967295],s32:[-2147483648,2147483647],f32:[-34028234663852886e22,34028234663852886e22],f64:[-Number.MAX_VALUE,Number.MAX_VALUE]}
function i(e){var t
return null!=(t=r[e])?t:[-34028234663852886e22,34028234663852886e22]}function a(e,t,n){var r,a
if(e.depthCount&&e.depthCount>1)return
const{pixels:o,statistics:s,pixelType:l}=e,c=o[0].length,u=null!=(r=e.bandMasks)?r:[],d=null!=(a=e.mask)?a:new Uint8Array(c).fill(255),f="f32"===l||"f64"===l,h=i(l)
let p=!1
for(let e=0;e<o.length;e++){var b,m
const r="number"==typeof t?t:t[e]
if(null==r)continue
const i=null!=(b=null==s?void 0:s[e].minValue)?b:h[0],a=null!=(m=null==s?void 0:s[e].maxValue)?m:h[1]
if(i>r+Number.EPSILON||a<r-Number.EPSILON)continue
const y=u[e]||new Uint8Array(c).fill(255),g=o[e],v=null==n?void 0:n.customFloatTolerance
if(f&&0!==v){let e=v
e||(e=Math.abs(r)>=9999999e31?2e-7*Math.abs(r):"f32"===l?2**-23:Number.EPSILON)
for(let t=0;t<g.length;t++)y[t]&&Math.abs(g[t]-r)<e&&(g[t]=0,y[t]=0,d[t]=0,p=!0)}else for(let e=0;e<g.length;e++)y[e]&&g[e]===r&&(g[e]=0,y[e]=0,d[e]=0,p=!0)
u[e]=y}p&&(e.bandMasks=u,e.mask=d),p&&"updateStatistics"in e&&e.updateStatistics()}},1506:function(e,t,n){"use strict"
n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return u})),n(1083)
var r=n(1038)
const i=/^-?(\d+)(\.(\d+))?$/i
function a(e,t){return e-t}function o(e,t){let n,r
return n=Number(e.toFixed(t)),n<e?r=n+1/10**t:(r=n,n-=1/10**t),n=Number(n.toFixed(t)),r=Number(r.toFixed(t)),[n,r]}function s(e,t,n,r,i){const a=c(e,t,n,r),o=null==a.previous||a.previous<=i,s=null==a.next||a.next<=i
return o&&s||a.previous+a.next<=2*i}function l(e){const t=String(e),n=t.match(i)
if(n&&n[1])return{integer:n[1].split("").length,fractional:n[3]?n[3].split("").length:0}
if(t.toLowerCase().includes("e")){const e=t.split("e"),n=e[0],r=e[1]
if(n&&r){const e=Number(n)
let t=Number(r)
const i=t>0
i||(t=Math.abs(t))
const a=l(e)
return i?(a.integer+=t,t>a.fractional?a.fractional=0:a.fractional-=t):(a.fractional+=t,t>a.integer?a.integer=1:a.integer-=t),a}}return{integer:0,fractional:0}}function c(e,t,n,r){const i={previous:null,next:null}
if(null!=n){const r=e-n,a=t-n-r
i.previous=Math.floor(Math.abs(100*a/r))}if(null!=r){const n=r-e,a=r-t-n
i.next=Math.floor(Math.abs(100*a/n))}return i}function u(e,t={}){const n=e.slice(0),{tolerance:r=2,strictBounds:i=!1,indexes:c=n.map((e,t)=>t)}=t
c.sort(a)
for(let e=0;e<c.length;e++){const t=c[e],a=n[t],u=0===t?null:n[t-1],d=t===n.length-1?null:n[t+1],f=l(a).fractional
if(f){let l,c=0,h=!1
for(;c<=f&&!h;){const t=o(a,c)
l=i&&0===e?t[1]:t[0],h=s(a,l,u,d,r),c++}h&&(n[t]=l)}}return n}const d={maximumFractionDigits:20}
function f(e){return Object(r.b)(e,d)}},1507:function(e,t,n){"use strict"
n.d(t,"a",(function(){return k})),n.d(t,"b",(function(){return _})),n.d(t,"c",(function(){return S})),n.d(t,"d",(function(){return R})),n.d(t,"e",(function(){return P})),n.d(t,"f",(function(){return x})),n.d(t,"g",(function(){return N})),n.d(t,"h",(function(){return j}))
var r=n(990),i=n(235),a=n(23),o=n(1192),s=n(1215),l=(n(998),n(1018))
let c=0,u=0
const d=Object(i.a)("android"),f=Object(i.a)("chrome")||d&&d>=4?"auto":"optimizeLegibility",h={m:2,l:2,h:1,v:1,c:6,s:4,q:4,t:2,a:7,z:0},p=/([A-DF-Za-df-z])|([-+]?\d*[.]?\d+(?:[eE][-+]?\d+)?)/g
let b={},m={}
const y={solid:"none",shortdash:[4,1],shortdot:[1,1],shortdashdot:[4,1,1,1],shortdashdotdot:[4,1,1,1,1,1],dot:[1,3],dash:[4,3],longdash:[8,3],dashdot:[4,3,1,3],longdashdot:[8,3,1,3],longdashdotdot:[8,3,1,3,1,3]},g=Math.PI
let v=1
function O(e,t){const n=e*(g/180)
return Math.abs(t*Math.sin(n))+Math.abs(t*Math.cos(n))}function w(e){return e.map(e=>`${e.command} ${e.values.join(" ")}`).join(" ").trim()}function j(e,t,n,r){if(e){if("circle"===e.type)return Object(l.a)("circle",{fill:t,"fill-rule":"evenodd",stroke:n.color,"stroke-width":n.width,"stroke-linecap":n.cap,"stroke-linejoin":n.join,"stroke-dasharray":n.dashArray,"stroke-dashoffset":n.dashOffset,"stroke-miterlimit":"4",cx:e.cx,cy:e.cy,r:e.r})
if("ellipse"===e.type)return Object(l.a)("ellipse",{fill:t,"fill-rule":"evenodd",stroke:n.color,"stroke-width":n.width,"stroke-linecap":n.cap,"stroke-linejoin":n.join,"stroke-dasharray":n.dashArray,"stroke-miterlimit":"4",cx:e.cx,cy:e.cy,rx:e.rx,ry:e.ry})
if("rect"===e.type)return Object(l.a)("rect",{fill:t,"fill-rule":"evenodd",stroke:n.color,"stroke-width":n.width,"stroke-linecap":n.cap,"stroke-linejoin":n.join,"stroke-dasharray":n.dashArray,"stroke-miterlimit":"4",x:e.x,y:e.y,width:e.width,height:e.height})
if("image"===e.type)return Object(l.a)("image",{href:e.src,x:e.x,y:e.y,width:e.width,height:e.height,preserveAspectRatio:"none"})
if("path"===e.type){const r="string"!=typeof e.path?w(e.path):e.path
return Object(l.a)("path",{fill:t,"fill-rule":"evenodd",stroke:n.color,"stroke-width":n.width,"stroke-linecap":n.cap,"stroke-linejoin":n.join,"stroke-dasharray":n.dashArray,"stroke-miterlimit":"4",d:r})}if("text"===e.type)return Object(a.c)(r),Object(l.a)("text",{"dominant-baseline":r.dominantBaseline,fill:t,"fill-rule":"evenodd",stroke:n.color,"stroke-width":n.width,"stroke-linecap":n.cap,"stroke-linejoin":n.join,"stroke-dasharray":n.dashArray,"stroke-miterlimit":"4","text-anchor":r.align,"text-decoration":r.decoration,kerning:r.kerning,rotate:r.rotate,"text-rendering":f,"font-style":r.font.style,"font-variant":r.font.variant,"font-weight":r.font.weight,"font-size":r.font.size,"font-family":r.font.family,x:e.x,y:e.y},e.text)}return null}function _(e){const t={fill:"none",pattern:null,linearGradient:null}
if(e)if("type"in e&&"pattern"===e.type){const n="patternId-"+ ++c
t.fill=`url(#${n})`,t.pattern={id:n,x:e.x,y:e.y,width:e.width,height:e.height,image:{x:0,y:0,width:e.width,height:e.height,href:e.src}}}else if("type"in e&&"linear"===e.type){const n="linearGradientId-"+ ++u
t.fill=`url(#${n})`,t.linearGradient={id:n,x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2,stops:e.colors.map(e=>({offset:e.offset,color:e.color&&new r.a(e.color).toString()}))}}else if(e){const n=new r.a(e)
t.fill=n.toString()}return t}function S(e){const t={color:"none",width:1,cap:"butt",join:"4",dashArray:"none",dashOffset:"0"}
if(e&&(null!=e.width&&(t.width=e.width),e.cap&&(t.cap=e.cap),e.join&&(t.join=e.join.toString()),e.color&&(t.color=new r.a(e.color).toString()),e.dashArray&&(t.dashArray=e.dashArray),e.dashArray&&(t.dashOffset=e.dashoffset),e.style)){let r=null
if(e.style in y&&(r=y[e.style]),Array.isArray(r)){var n
r=r.slice(0)
const t=null!=(n=e.width)?n:0
for(let e=0;e<r.length;++e)r[e]*=t
if("butt"!==e.cap){for(let e=0;e<r.length;e+=2)r[e]-=t,r[e]<1&&(r[e]=1)
for(let e=1;e<r.length;e+=2)r[e]+=t}r=r.join(",")}t.dashArray=r}return t}function E(e,t){const n={align:null,decoration:null,kerning:null,rotate:null,font:{style:null,variant:null,weight:null,size:null,family:null}}
if(e){const r=e.alignBaseline,i="baseline"===r?"auto":"top"===r?"text-top":"bottom"===r?"hanging":r
n.align=e.align,n.dominantBaseline=i,n.decoration=e.decoration,n.kerning=e.kerning?"auto":"0",n.rotate=e.rotated?"90":"0",Object(a.c)(t),n.font.style=t.style||"normal",n.font.variant=t.variant||"normal",n.font.weight=t.weight||"normal",n.font.size=t.size&&t.size.toString()||"10pt",n.font.family=t.family||"serif"}return n}function x(e){const{pattern:t,linearGradient:n}=e
if(t)return Object(l.a)("pattern",{id:t.id,patternUnits:"userSpaceOnUse",x:t.x,y:t.y,width:t.width,height:t.height},Object(l.a)("image",{x:t.image.x,y:t.image.y,width:t.image.width,height:t.image.height,href:t.image.href}))
if(n){const e=n.stops.map((e,t)=>Object(l.a)("stop",{key:t+"-stop",offset:e.offset,"stop-color":e.color}))
return Object(l.a)("linearGradient",{id:n.id,gradientUnits:"userSpaceOnUse",x1:n.x1,y1:n.y1,x2:n.x2,y2:n.y2},e)}return null}function I(e,t){if(!e)return null
const n=[]
for(const t of e){const{shape:e,fill:r,stroke:i,font:a}=t,o=_(r),s=S(i),l="text"===e.type?E(e,a):null,c=j(e,o.fill,s,l)
c&&n.push(c)}return Object(l.a)("mask",{id:t,maskUnits:"userSpaceOnUse"},Object(l.a)("g",null,n))}function C(e,t,n){return Object(s.j)(e,Object(s.f)(e),[t,n])}function L(e,t,n,r,i){return Object(s.i)(e,Object(s.f)(e),[t,n]),e[4]=e[4]*t-r*t+r,e[5]=e[5]*n-i*n+i,e}function M(e,t){b&&"left"in b?(null!=b.left&&b.left>e&&(b.left=e),(null==b.right||b.right<e)&&(b.right=e),(null==b.top||b.top>t)&&(b.top=t),(null==b.bottom||b.bottom<t)&&(b.bottom=t)):b={left:e,bottom:t,right:e,top:t}}function A(e){const t=e.args,n=t.length
let r
switch(e.action){case"M":case"L":case"C":case"S":case"Q":case"T":for(r=0;r<n;r+=2)M(t[r],t[r+1])
m.x=t[n-2],m.y=t[n-1]
break
case"H":for(r=0;r<n;++r)M(t[r],m.y)
m.x=t[n-1]
break
case"V":for(r=0;r<n;++r)M(m.x,t[r])
m.y=t[n-1]
break
case"m":{let e=0
"x"in m||(M(m.x=t[0],m.y=t[1]),e=2)
for(r=e;r<n;r+=2)M(m.x+=t[r],m.y+=t[r+1])
break}case"l":case"t":for(r=0;r<n;r+=2)M(m.x+=t[r],m.y+=t[r+1])
break
case"h":for(r=0;r<n;++r)M(m.x+=t[r],m.y)
break
case"v":for(r=0;r<n;++r)M(m.x,m.y+=t[r])
break
case"c":for(r=0;r<n;r+=6)M(m.x+t[r],m.y+t[r+1]),M(m.x+t[r+2],m.y+t[r+3]),M(m.x+=t[r+4],m.y+=t[r+5])
break
case"s":case"q":for(r=0;r<n;r+=4)M(m.x+t[r],m.y+t[r+1]),M(m.x+=t[r+2],m.y+=t[r+3])
break
case"A":for(r=0;r<n;r+=7)M(t[r+5],t[r+6])
m.x=t[n-2],m.y=t[n-1]
break
case"a":for(r=0;r<n;r+=7)M(m.x+=t[r+5],m.y+=t[r+6])}}function T(e,t,n){const r=h[e.toLowerCase()]
let i
"number"==typeof r&&(r?t.length>=r&&(i={action:e,args:t.slice(0,t.length-t.length%r)},n.push(i),A(i)):(i={action:e,args:[]},n.push(i),A(i)))}function R(e){const t={x:0,y:0,width:0,height:0}
if("circle"===e.type)t.x=e.cx-e.r,t.y=e.cy-e.r,t.width=2*e.r,t.height=2*e.r
else if("ellipse"===e.type)t.x=e.cx-e.rx,t.y=e.cy-e.ry,t.width=2*e.rx,t.height=2*e.ry
else if("image"===e.type||"rect"===e.type)t.x=e.x,t.y=e.y,t.width=e.width,t.height=e.height
else if("path"===e.type){const n=Object(a.w)(function(e){const t=("string"!=typeof e.path?w(e.path):e.path).match(p),n=[]
if(b={},m={},!t)return null
let r="",i=[]
const a=t.length
for(let e=0;e<a;++e){const a=t[e],o=parseFloat(a)
isNaN(o)?(r&&T(r,i,n),i=[],r=a):i.push(o)}T(r,i,n)
const o={x:0,y:0,width:0,height:0}
return b&&"left"in b&&(o.x=b.left,o.y=b.top,o.width=b.right-b.left,o.height=b.bottom-b.top),o}(e))
t.x=n.x,t.y=n.y,t.width=n.width,t.height=n.height}return t}function k(e){const t={x:0,y:0,width:0,height:0}
let n=null,r=Number.NEGATIVE_INFINITY,i=Number.NEGATIVE_INFINITY
for(const a of e)n?(n.x=Math.min(n.x,a.x),n.y=Math.min(n.y,a.y),r=Math.max(r,a.x+a.width),i=Math.max(i,a.y+a.height)):(n=t,n.x=a.x,n.y=a.y,r=a.x+a.width,i=a.y+a.height)
return n&&(n.width=r-n.x,n.height=i-n.y),n}function P(e,t,n,r,i,a,l,c,u){let d=(l&&a?O(a,t):t)/2,f=(l&&a?O(a,n):n)/2
if(u){const e=u[0],t=u[1]
d=(l&&a?O(a,e):e)/2,f=(l&&a?O(a,t):t)/2}const h=e.width+r,p=e.height+r,b=Object(o.a)(),m=Object(o.a)()
let y=!1
if(i&&0!==h&&0!==p){const e=t!==n?t/n:h/p,r=t>n?t:n
let i=1,a=1
isNaN(r)||(e>1?(i=r/h,a=r/e/p):(a=r/p,i=r*e/h)),Object(s.g)(m,m,L(b,i,a,d,f)),y=!0}const g=e.x+(h-r)/2,v=e.y+(p-r)/2
if(Object(s.g)(m,m,C(b,d-g,f-v)),!y&&(h>t||p>n)){const e=h/t>p/n,r=(e?t:n)/(e?h:p)
Object(s.g)(m,m,L(b,r,r,g,v))}return a&&Object(s.g)(m,m,function(e,t,n,r){const i=t%360*Math.PI/180
Object(s.h)(e,Object(s.f)(e),i)
const a=Math.cos(i),o=Math.sin(i),l=e[4],c=e[5]
return e[4]=l*a-c*o+r*o-n*a+n,e[5]=c*a+l*o-n*o-r*a+r,e}(b,a,g,v)),c&&Object(s.g)(m,m,C(b,c[0],c[1])),`matrix(${m[0]},${m[1]},${m[2]},${m[3]},${m[4]},${m[5]})`}function N(e,t,n,r={}){const i=[],o=[],s=++v,c=function(e,t,n){const r=null==e?void 0:e.effects.find(e=>"bloom"===e.type)
if(!r)return null
const{strength:i,radius:a}=r,o=i>0?a:0,s=(i+o)*t,c=4*i+1
return Object(l.a)("filter",{id:"bloom"+n,x:"-100%",y:"-100%",width:"300%",height:"300%",filterUnits:"userSpaceOnUse"},Object(l.a)("feMorphology",{operator:"dilate",radius:(i+.5*o)*(5**(t/100)*(.4+t/100)),in:"SourceGraphic",result:"dilate"}),Object(l.a)("feGaussianBlur",{in:"dilate",stdDeviation:s/25,result:"blur"}),Object(l.a)("feGaussianBlur",{in:"blur",stdDeviation:s/50,result:"intensityBlur"}),Object(l.a)("feComponentTransfer",{in:"SourceGraphic",result:"intensityBrightness"},Object(l.a)("feFuncR",{type:"linear",slope:c}),Object(l.a)("feFuncG",{type:"linear",slope:c}),Object(l.a)("feFuncB",{type:"linear",slope:c})),Object(l.a)("feMerge",null,Object(l.a)("feMergeNode",{in:"intensityBlur"}),Object(l.a)("feMergeNode",{in:"intensityBrightness"}),Object(l.a)("feGaussianBlur",{stdDeviation:i/10})))}(r.effectView,t,s)
let u=null
if(c){var d
const e=null==(d=r.effectView)?void 0:d.effects.find(e=>"bloom"===e.type),i=(e.strength?e.strength+e.radius/2:0)/3,a=t+t*i,o=n+n*i
u=[Math.max(a,10),Math.max(o,10)]}for(let s=0;s<e.length;s++){var f,h
const c=e[s],d=[],p=[]
let b=0,m=0,y=0
for(const e of c){const{shape:t,fill:n,stroke:a,font:o,offset:s}=e
r.ignoreStrokeWidth||(b+=a&&a.width||0)
const l=_(n),c=S(a),u="text"===t.type?E(t,o):null
i.push(x(l)),d.push(j(t,l.fill,c,u)),p.push(R(t)),s&&(m+=s[0],y+=s[1])}const g=P(Object(a.w)(k(p)),t,n,b,null!=(f=r.scale)&&f,r.rotation,null!=(h=r.useRotationSize)&&h,[m,y],u)
let v=null
if(r.masking){const e="mask-"+s,t=r.masking[s]
i.push(I(t,e)),v=`url(#${e})`}o.push(v?Object(l.a)("g",{mask:v},Object(l.a)("g",{transform:g},d)):Object(l.a)("g",{transform:g},d))}return r.useRotationSize&&r.rotation&&(t=O(r.rotation,t),n=O(r.rotation,n)),c&&(Object(a.c)(u),t=u[0],n=u[1]),Object(l.a)("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:n,style:"display: block;"},c,Object(l.a)("defs",null,i),c?Object(l.a)("g",{filter:`url(#bloom${s})`},o):o)}},1519:function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'")
throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=1519},1520:function(e,t,n){"use strict"
n.r(t),n.d(t,"getPatternDescriptor",(function(){return x})),n.d(t,"getSizeFromOptions",(function(){return A})),n.d(t,"getSymbolLayerFill",(function(){return E})),n.d(t,"previewSymbol3D",(function(){return T}))
var r=n(1019),i=n(1348),a=(n(235),n(446)),o=n(233),s=n(23),l=n(973),c=n(980),u=n(1275),d=n(1839),f=n(1785),h=n(1485),p=n(1490),b=n(1191),m=n(1656)
const y=h.a.size,g=h.a.maxSize,v=h.a.maxOutlineSize,O=h.a.lineWidth,w=h.a.tallSymbolWidth
function j(e){const t=e.outline,n=Object(s.l)(e.material)?e.material.color:null,r=Object(s.l)(n)?n.toHex():null
if(Object(s.k)(t)||"pattern"in t&&Object(s.l)(t.pattern)&&"style"===t.pattern.type&&"none"===t.pattern.style)return"fill"===e.type&&"#ffffff"===r?{color:"#bdc3c7",width:.75}:null
const i=Object(c.h)(t.size)||0
return{color:"rgba("+(Object(s.l)(t.color)?t.color.toRgba():"255,255,255,1")+")",width:Math.min(i,v),style:"pattern"in t&&Object(s.l)(t.pattern)&&"style"===t.pattern.type?Object(u.b)(t.pattern.style):null,join:"butt",cap:"patternCap"in t?t.patternCap:"butt"}}function _(e,t=1){const n=e.a,r=Object(i.b)(e),a=r.h,o=r.s/t,s=100-(100-r.v)/t,{r:l,g:c,b:u}=Object(i.e)({h:a,s:o,v:s})
return[l,c,u,n]}function S(e){return"water"===e.type?Object(s.k)(e.color)?null:e.color:Object(s.k)(e.material)||Object(s.k)(e.material.color)?null:e.material.color}function E(e,t=0){const n=S(e)
if(!n){if("fill"===e.type)return null
const n=u.a.r,r=Object(h.c)(n,t)
return[r,r,r,100]}const r=n.toRgba()
for(let e=0;e<3;e++)r[e]=Object(h.c)(r[e],t)
return r}async function x(e,t){const n=e.style
return"none"===n?null:{type:"pattern",x:0,y:0,src:await Object(u.d)(Object(r.b)(`esri/symbols/patterns/${n}.png`),t.toCss(!0)),width:5,height:5}}function I(e){return e.outline?j(e):{color:"rgba(0, 0, 0, 1)",width:1.5}}function C(e,t){const n=S(e)
if(!n)return null
let r="rgba("
return r+=Object(h.c)(n.r,t)+",",r+=Object(h.c)(n.g,t)+",",r+=Object(h.c)(n.b,t)+",",r+n.a+");"}function L(e,t){const n=C(e,t)
return n?"pattern"in e&&Object(s.l)(e.pattern)&&"style"===e.pattern.type&&"none"===e.pattern.style?null:{color:n,width:Math.min(e.size?Object(c.h)(e.size):.75,v),style:"pattern"in e&&Object(s.l)(e.pattern)&&"style"===e.pattern.type?Object(u.b)(e.pattern.style):null,cap:"cap"in e?e.cap:null,join:"join"in e?"miter"===e.join?Object(c.h)(2):e.join:null}:{}}function M(e,t,n){const r=null!=n?.75*n:0
return{type:"linear",x1:r?.25*r:0,y1:r?.5*r:0,x2:r||4,y2:r?.5*r:4,colors:[{color:e,offset:0},{color:t,offset:1}]}}function A(e){const t="number"==typeof(null==e?void 0:e.size)?null==e?void 0:e.size:null
return t?Object(c.h)(t):null}function T(e,t){if(0===e.symbolLayers.length)return Promise.reject(new a.a("symbolPreview: renderPreviewHTML3D","No symbolLayers in the symbol."))
switch(e.type){case"point-3d":return function(e,t){var n
const i=A(t),a=null!=t&&t.maxSize?Object(c.h)(t.maxSize):null,s=null!=(n=null==t?void 0:t.disableUpsampling)&&n,u=e.symbolLayers,v=[]
let O=0,_=0
const S=u.getItemAt(u.length-1)
let x
return S&&"icon"===S.type&&(x=S.size&&Object(c.h)(S.size)),u.forEach(n=>{if("icon"!==n.type&&"object"!==n.type)return
const o="icon"===n.type?n.size&&Object(c.h)(n.size):0,l=i||o?Math.ceil(Math.min(i||o,a||g)):y
if(n&&n.resource&&n.resource.href){const t=function(e,t){const n=t&&t.resource,i=n&&n.href
if(e.thumbnail&&e.thumbnail.url)return Promise.resolve(e.thumbnail.url)
if(i&&"object"!==t.type)return Promise.resolve(Object(b.h)(t))
const a=Object(r.b)("esri/images/Legend/legend3dsymboldefault.png")
return e.styleOrigin&&(e.styleOrigin.styleName||e.styleOrigin.styleUrl)?Object(m.resolveWebStyleSymbol)(e.styleOrigin,{portal:e.styleOrigin.portal},"webRef").catch(e=>e).then(e=>{var t
return(null==e||null==(t=e.thumbnail)?void 0:t.url)||a}):Promise.resolve(a)}(e,n).then(e=>{const t=n.get("material.color"),r=function(e){return"icon"===e.type?"multiply":"tint"}(n)
return Object(p.c)(e,l,t,r,s)}).then(e=>{const t=e.width,n=e.height
return O=Math.max(O,t),_=Math.max(_,n),[{shape:{type:"image",x:0,y:0,width:t,height:n,src:e.url},fill:null,stroke:null}]})
v.push(t)}else{var u
let e=l
"icon"===n.type&&x&&i&&(e=l*(o/x))
const r="tall"===(null==t?void 0:t.symbolConfig)||(null==t||null==(u=t.symbolConfig)?void 0:u.isTall)||"object"===n.type&&function(e){const t=e.depth,n=e.height,r=e.width
return 0!==r&&0!==t&&0!==n&&r===t&&null!=r&&null!=n&&r<n}(n)
O=Math.max(O,r?w:e),_=Math.max(_,e),v.push(Promise.resolve(function(e,t,n){const r=[]
if(!e)return r
switch(e.type){case"icon":{const n=0,i=0,a=t,o=t
switch(e.resource&&e.resource.primitive||d.b){case"circle":r.push({shape:{type:"circle",cx:0,cy:0,r:.5*t},fill:E(e,0),stroke:j(e)})
break
case"square":r.push({shape:{type:"path",path:[{command:"M",values:[n,o]},{command:"L",values:[n,i]},{command:"L",values:[a,i]},{command:"L",values:[a,o]},{command:"Z",values:[]}]},fill:E(e,0),stroke:j(e)})
break
case"triangle":r.push({shape:{type:"path",path:[{command:"M",values:[n,o]},{command:"L",values:[.5*a,i]},{command:"L",values:[a,o]},{command:"Z",values:[]}]},fill:E(e,0),stroke:j(e)})
break
case"cross":r.push({shape:{type:"path",path:[{command:"M",values:[.5*a,i]},{command:"L",values:[.5*a,o]},{command:"M",values:[n,.5*o]},{command:"L",values:[a,.5*o]}]},stroke:I(e)})
break
case"x":r.push({shape:{type:"path",path:[{command:"M",values:[n,i]},{command:"L",values:[a,o]},{command:"M",values:[a,i]},{command:"L",values:[n,o]}]},stroke:I(e)})
break
case"kite":r.push({shape:{type:"path",path:[{command:"M",values:[n,.5*o]},{command:"L",values:[.5*a,i]},{command:"L",values:[a,.5*o]},{command:"L",values:[.5*a,o]},{command:"Z",values:[]}]},fill:E(e,0),stroke:j(e)})}break}case"object":switch(e.resource&&e.resource.primitive||f.b){case"cone":{const i=M(E(e,0),E(e,-.6),n?w:t),a=Object(h.d)(t,n)
r.push({shape:a[0],fill:i}),r.push({shape:a[1],fill:i})
break}case"inverted-cone":{const n=E(e,0),i=M(n,E(e,-.6),t),a=Object(h.i)(t)
r.push({shape:a[0],fill:i}),r.push({shape:a[1],fill:n})
break}case"cube":{const i=Object(h.e)(t,n)
r.push({shape:i[0],fill:E(e,0)}),r.push({shape:i[1],fill:E(e,-.3)}),r.push({shape:i[2],fill:E(e,-.5)})
break}case"cylinder":{const i=M(E(e,0),E(e,-.6),n?w:t),a=Object(h.f)(t,n)
r.push({shape:a[0],fill:i}),r.push({shape:a[1],fill:i}),r.push({shape:a[2],fill:E(e,0)})
break}case"diamond":{const n=Object(h.g)(t)
r.push({shape:n[0],fill:E(e,-.3)}),r.push({shape:n[1],fill:E(e,0)}),r.push({shape:n[2],fill:E(e,-.3)}),r.push({shape:n[3],fill:E(e,-.7)})
break}case"sphere":{const n=M(E(e,0),E(e,-.6))
n.x1=0,n.y1=0,n.x2=.25*t,n.y2=.25*t,r.push({shape:{type:"circle",cx:0,cy:0,r:.5*t},fill:n})
break}case"tetrahedron":{const n=Object(h.k)(t)
r.push({shape:n[0],fill:E(e,-.3)}),r.push({shape:n[1],fill:E(e,0)}),r.push({shape:n[2],fill:E(e,-.6)})
break}}}return r}(n,e,r)))}}),Object(l.g)(v).then(e=>{const n=[]
return e.forEach(e=>{e.value?n.push(e.value):e.error&&o.a.getLogger("esri.symbols.support.previewSymbol3D").warn("error while building swatchInfo!",e.error)}),Object(p.b)(n,[O,_],{node:t&&t.node,scale:!1,opacity:t&&t.opacity})})}(e,t)
case"line-3d":return function(e,t){const n=e.symbolLayers,r=[],i=Object(b.j)(e),a=A(t),o=(t&&t.maxSize?Object(c.h)(t.maxSize):null)||v
let l,u=0,d=0
return n.forEach((e,t)=>{if(!e)return
if("line"!==e.type&&"path"!==e.type)return
const n=[]
switch(e.type){case"line":{const r=L(e,0)
if(Object(s.k)(r))break
const i=r&&r.width||0
0===t&&(l=i)
const c=Math.min(a||i,o),f=0===t?c:a?c*(i/l):c,h=f>O/2?2*f:O
d=Math.max(d,f),u=Math.max(u,h),r.width=f,n.push({shape:{type:"path",path:[{command:"M",values:[0,.5*d]},{command:"L",values:[u,.5*d]}]},stroke:r})
break}case"path":{const t=Math.min(a||y,o),r=E(e,0),i=E(e,-.2),s=C(e,-.4),l=s?{color:s,width:1}:{}
if("quad"===e.profile){const t=e.width,a=e.height,o=Object(h.j)(t&&a?t/a:1,0===a,0===t),s={...l,join:"bevel"}
n.push({shape:o[0],fill:i,stroke:s}),n.push({shape:o[1],fill:i,stroke:s}),n.push({shape:o[2],fill:r,stroke:s})}else n.push({shape:h.m.pathSymbol3DLayer[0],fill:i,stroke:l}),n.push({shape:h.m.pathSymbol3DLayer[1],fill:r,stroke:l})
d=Math.max(d,t),u=d}}r.push(n)}),Promise.resolve(Object(p.b)(r,[u,d],{node:t&&t.node,scale:i,opacity:t&&t.opacity}))}(e,t)
case"polygon-3d":case"mesh-3d":return async function(e,t){const n="mesh-3d"===e.type,r=e.symbolLayers,i=A(t),a=t&&t.maxSize?Object(c.h)(t.maxSize):null,o=i||y,l=[]
let u=0,d=0,f=!1
for(let e=0;e<r.length;e++){const t=r.getItemAt(e),i=[]
if(n&&"fill"!==t.type)continue
const c=h.m.fill[0]
switch(t.type){case"fill":{const e=j(t),r=Math.min(o,a||g)
u=Math.max(u,r),d=Math.max(d,r),f=!0
let l=E(t,0)
const h="pattern"in t?t.pattern:null,p=S(t)
!n&&Object(s.l)(h)&&"style"===h.type&&"solid"!==h.style&&p&&(l=await x(h,p)),i.push({shape:c,fill:l,stroke:e})
break}case"line":{const e=L(t,0)
if(Object(s.k)(e))break
const n={stroke:e,shape:c}
u=Math.max(u,y),d=Math.max(d,y),i.push(n)
break}case"extrude":{const e={join:"round",width:1,...L(t,-.4)},n=E(t,0),r=E(t,-.2),s=Math.min(o,a||g),l=Object(h.h)(s)
e.width=1,i.push({shape:l[0],fill:r,stroke:e}),i.push({shape:l[1],fill:r,stroke:e}),i.push({shape:l[2],fill:n,stroke:e})
const c=y,f=.7*y+.5*s
u=Math.max(u,c),d=Math.max(d,f)
break}case"water":{const e=Object(s.w)(S(t)),n=_(e),r=_(e,2),l=_(e,3),c=Object(h.l)()
f=!0,i.push({shape:c[0],fill:n}),i.push({shape:c[1],fill:r}),i.push({shape:c[2],fill:l})
const p=Math.min(o,a||g)
u=Math.max(u,p),d=Math.max(d,p)
break}}l.push(i)}return Object(p.b)(l,[u,d],{node:t&&t.node,scale:f,opacity:t&&t.opacity})}(e,t)}return Promise.reject(new a.a("symbolPreview: swatchInfo3D","symbol not supported."))}},1529:function(e,t,n){"use strict"
n.d(t,"a",(function(){return r}))
const r=()=>[2,1,1,1,3].map(e=>{let t=""
for(let n=0;n<e;n++)t+=(65536*(1+Math.random())|0).toString(16).substring(1)
return t}).join("-")},1611:function(e,t,n){"use strict"
n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return d})),n.d(t,"f",(function(){return f})),n(995)
var r=n(1039),i=n(1506),a=n(1065)
const o="<",s=">",l=Object(r.a)("short-date")
function c(e,t,n,a){let c=""
0===t?c=o+" ":t===n&&(c=s+" ")
let u=null
return u=a?Object(r.b)(e,l):Object(i.a)(e),c+u}const u=["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAAAAAAAAAHqZRakAAAANUlEQVQ4jWPMy8v7z0BFwMLAwMAwcdIkqhiWn5fHwEQVk5DAqIGjBo4aOGrgqIEQwEjtKgAATl0Hu6JrzFUAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAAAAAAAAAHqZRakAAAANUlEQVQ4jWPMy8v7z0BFwMLAwMAwaeIkqhiWl5/HwEQVk5DAqIGjBo4aOGrgqIEQwEjtKgAATl0Hu6sKxboAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAAAAAAAAAHqZRakAAAANUlEQVQ4jWPMy8v7z0BFwMLAwMAwadJEqhiWl5fPwEQVk5DAqIGjBo4aOGrgqIEQwEjtKgAATl0Hu75+IUcAAAAASUVORK5CYII="]
async function d(e){var t
if(!("visualVariables"in e)||!e.visualVariables)return null
const r=e.visualVariables.find(e=>"color"===e.type)
if(!r)return null
let i=null,a=null
if(r.stops){if(1===r.stops.length)return r.stops[0].color
i=r.stops[0].value,a=r.stops[r.stops.length-1].value}const o=null!=i&&null!=a?i+(a-i)/2:0,{getColor:s}=await Promise.resolve().then(n.bind(null,1107))
return null!=(t=s(r,o))?t:null}async function f(e,t){const n=e.trailCap,r=e.trailWidth||1,i=t||await d(e)||e.color
return new a.a({cap:n,color:i,width:r})}},1612:function(e,t,n){"use strict"
n.d(t,"a",(function(){return d}))
var r=n(1507),i=n(1191),a=n(998),o=n(1018)
const s="esri-relationship-ramp",l=s+"--diamond",c=s+"--square",u={diamondContainer:l+"__container",diamondLeftCol:l+"__left-column",diamondRightCol:l+"__right-column",diamondMidCol:l+"__middle-column",diamondMidColLabel:l+"__middle-column--label",diamondMidColRamp:l+"__middle-column--ramp",squareTable:c+"__table",squareTableRow:c+"__table-row",squareTableCell:c+"__table-cell",squareTableLabel:c+"__table-label",squareTableLabelLeftBottom:c+"__table-label--left-bottom",squareTableLabelRightBottom:c+"__table-label--right-bottom",squareTableLabelLeftTop:c+"__table-label--left-top",squareTableLabelRightTop:c+"__table-label--right-top"}
function d(e,t,n,s){const{focus:l,labels:c}=e,d=!!l,h=function(e,t,n,a,s=60){const{focus:l,numClasses:c,colors:d,rotation:h}=e,p=!!l,b=Math.sqrt(s**2+s**2)+(p?0:5),m=[],y=[],g=[],v=(s||75)/c
for(let e=0;e<c;e++){const t=e*v
for(let n=0;n<c;n++){const i=n*v,a=Object(r.b)(d[e][n]),o=Object(r.c)(null),s={type:"rect",x:i,y:t,width:v,height:v},l=Object(r.f)(a)
l&&m.push(l)
const c=Object(r.h)(s,a.fill,o,null)
c&&y.push(c),g.push(Object(r.d)(s))}}let O=null
p||(O="margin: -15px -15px -18px -15px")
const w=f("left",l,t),j=f("right",l,t),_=Object(r.a)(g),S=Object(r.e)(_,b,b,0,!1,h,!1),E=Object(r.e)(_,b,b,0,!1,p?-45:null,!1),x={filter:Object(i.f)(a),opacity:null==n?"":""+n}
return Object(o.a)("div",{styles:x,class:p?u.diamondMidColRamp:u.squareTableCell},Object(o.a)("svg",{xmlns:"http://www.w3.org/2000/svg",width:b,height:b,style:O},Object(o.a)("defs",null,Object(o.a)("marker",{id:t+"_arrowStart",markerWidth:"10",markerHeight:"10",refX:"5",refY:"5",markerUnits:"strokeWidth",orient:"auto"},Object(o.a)("polyline",{points:"0,0 5,5 0,10",fill:"none",stroke:"#555555","stroke-width":"1"})),Object(o.a)("marker",{id:t+"_arrowEnd",markerWidth:"10",markerHeight:"10",refX:"0",refY:"5",markerUnits:"strokeWidth",orient:"auto"},Object(o.a)("polyline",{points:"5,0 0,5 5,10",fill:"none",stroke:"#555555","stroke-width":"1"})),m),Object(o.a)("g",{transform:S},y),Object(o.a)("g",{transform:E},Object(o.a)("line",{fill:"none",stroke:"#555555","stroke-width":"1","marker-start":w.markerStart,"marker-end":w.markerEnd,x1:-10,y1:s-15,x2:-10,y2:15}),Object(o.a)("line",{fill:"none",stroke:"#555555","stroke-width":"1","marker-start":j.markerStart,"marker-end":j.markerEnd,x1:15,y1:s+10,x2:s-15,y2:s+10}))))}(e,t,n,s),p=Object(a.e)()
return d?Object(o.a)("div",{class:u.diamondContainer,styles:{justifyContent:"center"}},Object(o.a)("div",{class:u.diamondLeftCol},p?c.right:c.left),Object(o.a)("div",{class:u.diamondMidCol},Object(o.a)("div",{class:u.diamondMidColLabel},c.top),h,Object(o.a)("div",{class:u.diamondMidColLabel},c.bottom)),Object(o.a)("div",{class:u.diamondRightCol},p?c.left:c.right)):Object(o.a)("div",{class:u.squareTable},Object(o.a)("div",{class:u.squareTableRow},Object(o.a)("div",{class:Object(a.a)(u.squareTableCell,u.squareTableLabel,u.squareTableLabelRightBottom)},p?c.top:c.left),Object(o.a)("div",{class:u.squareTableCell}),Object(o.a)("div",{class:Object(a.a)(u.squareTableCell,u.squareTableLabel,u.squareTableLabelLeftBottom)},p?c.left:c.top)),Object(o.a)("div",{class:u.squareTableRow},Object(o.a)("div",{class:u.squareTableCell}),h,Object(o.a)("div",{class:u.squareTableCell})),Object(o.a)("div",{class:u.squareTableRow},Object(o.a)("div",{class:Object(a.a)(u.squareTableCell,u.squareTableLabel,u.squareTableLabelRightTop)},p?c.right:c.bottom),Object(o.a)("div",{class:u.squareTableCell}),Object(o.a)("div",{class:Object(a.a)(u.squareTableCell,u.squareTableLabel,u.squareTableLabelLeftTop)},p?c.bottom:c.right)))}function f(e,t,n){const r=n+"_arrowStart",i=n+"_arrowEnd",a="left"===e,o={markerStart:null,markerEnd:null}
switch(t){case"HL":a?o.markerStart=`url(#${i})`:o.markerEnd=`url(#${r})`
break
case"LL":o.markerStart=`url(#${i})`
break
case"LH":a?o.markerEnd=`url(#${r})`:o.markerStart=`url(#${i})`
break
default:o.markerEnd=`url(#${r})`}return o}},1652:function(e,t,n){"use strict"
n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return d}))
var r=n(990),i=n(1611)
const a=new r.a([64,64,64])
function o(e,t){const n=[],r=e.length-1
return 5===e.length?n.push(0,2,4):n.push(0,r),e.map((e,a)=>n.includes(a)?Object(i.d)(e,a,r,t):null)}async function s(e,t,r){let i=!1,a=[],s=[]
if(e.stops){const t=e.stops
a=t.map(e=>e.value),i=t.some(e=>!!e.label),i&&(s=t.map(e=>e.label))}const c=a[0],u=a[a.length-1]
if(null==c&&null==u)return null
const d=i?null:o(a,null!=r&&r)
return(await Promise.all(a.map(async(r,a)=>{var o
return{value:r,color:"opacity"===e.type?await l(r,e,t):(await Promise.resolve().then(n.bind(null,1107))).getColor(e,r),label:i?s[a]:null!=(o=null==d?void 0:d[a])?o:""}}))).reverse()}async function l(e,t,i=a){const o=new r.a(i),s=(await Promise.resolve().then(n.bind(null,1107))).getOpacity(t,e)
return null!=s&&(o.a=s),o}function c(e){let t=!1,n=[],r=[]
n=e.map(e=>e.value),t=e.some(e=>!!e.label),t&&(r=e.map(e=>{var t
return null!=(t=e.label)?t:""}))
const i=n[0],a=n[n.length-1]
if(null==i&&null==a)return null
const s=t?null:o(n,!1)
return n.map((n,i)=>{var a
return{value:n,color:u(n,e),label:t?r[i]:null!=(a=null==s?void 0:s[i])?a:""}}).reverse()}function u(e,t){const{startIndex:n,endIndex:i,weight:a}=function(e,t){let n=0,r=t.length-1
return t.some((t,i)=>e<t.value?(r=i,!0):(n=i,!1)),{startIndex:n,endIndex:r,weight:(e-t[n].value)/(t[r].value-t[n].value)}}(e,t)
if(n===i)return t[n].color
const o=r.a.blendColors(t[n].color,t[i].color,a)
return new r.a(o)}function d(e,t){let n=[]
if(e&&"multipart"===e.type)e.colorRamps.reverse().forEach((i,a)=>{0===a?n.push({value:t.max,color:new r.a(i.toColor),label:"high"}):n.push({value:null,color:new r.a(i.toColor),label:""}),a===e.colorRamps.length-1?n.push({value:t.min,color:new r.a(i.fromColor),label:"low"}):n.push({value:null,color:new r.a(i.fromColor),label:""})})
else{let i,a
e&&"algorithmic"===e.type?(i=e.fromColor,a=e.toColor):(i=[0,0,0,1],a=[255,255,255,1]),n=[{value:t.max,color:new r.a(a),label:"high"},{value:t.min,color:new r.a(i),label:"low"}]}return n}},1653:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
var r=n(1245)
function i(e){if(!e.colorStops)return[]
const t=[...e.colorStops].filter(e=>{var t
return(null==(t=e.color)?void 0:t.a)>0})
let n=t.length-1
if(t&&t[0]){const e=t[n]
e&&1!==e.ratio&&(t.push(new r.a({ratio:1,color:e.color})),n++)}return t.map((t,r)=>{var i,a
let o=""
return 0===r?o=(null==(i=e.legendOptions)?void 0:i.minLabel)||"low":r===n&&(o=(null==(a=e.legendOptions)?void 0:a.maxLabel)||"high"),{color:t.color,label:o,ratio:t.ratio}}).reverse()}},1655:function(e,t,n){"use strict"
n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u})),n(234)
var r=n(1275),i=n(1520)
const a={HH:315,HL:45,LL:135,LH:225},o={2:[["HL","HH"],["LL","LH"]],3:[["HL","HM","HH"],["ML","MM","MH"],["LL","LM","LH"]],4:[["HL","HM1","HM2","HH"],["M2L","M2M1","M2M2","M2H"],["M1L","M1M1","M1M2","M1H"],["LL","LM1","LM2","LH"]]}
function s(e){if(!e)return
const{type:t}=e
if(t.includes("3d"))return Object(i.getSymbolLayerFill)(e.symbolLayers.getItemAt(0))
if("simple-line"===t){const t=Object(r.e)(e)
return t&&t.color}if("simple-marker"===e.type&&("x"===e.style||"cross"===e.style)){const t=Object(r.e)(e)
return t&&t.color}return Object(r.c)(e)}function l(e,t){const n=t.HH.label,r=t.LL.label,i=t.HL.label,a=t.LH.label
switch(e){case"HH":default:return{top:n,bottom:r,left:i,right:a}
case"HL":return{top:i,bottom:a,left:r,right:n}
case"LL":return{top:r,bottom:n,left:a,right:i}
case"LH":return{top:a,bottom:i,left:n,right:r}}}function c(e){const{focus:t,infos:n,numClasses:r}=e,i=o[r],a={}
n.forEach(e=>{a[e.value]={label:e.label,fill:s(e.symbol)}})
const c=[]
for(let e=0;e<r;e++){const t=[]
for(let n=0;n<r;n++){const r=a[i[e][n]]
t.push(r.fill)}c.push(t)}return{type:"relationship-ramp",numClasses:r,focus:t,colors:c,labels:l(t,a),rotation:u(t)}}function u(e){let t=a[e]
return e&&null==t&&(t=a.HH),t||0}},1656:function(e,t,n){"use strict"
n.r(t),n.d(t,"fetchSymbolFromStyle",(function(){return b})),n.d(t,"resolveWebStyleSymbol",(function(){return p}))
var r=n(995),i=n(1436),a=n(446),o=n(23),s=n(374),l=n(1028),c=n(1054),u=n(1147),d=n(1870),f=n(1181),h=n(1853)
function p(e,t,n,r){return e.name?e.styleName&&"Esri2DPointSymbolsStyle"===e.styleName?function(e,t,n){const r=f.a.replace(/\{SymbolName\}/gi,e.name),i=Object(o.l)(t.portal)?t.portal:l.a.getDefault()
return Object(f.d)(r,n).then(e=>{const t=Object(f.c)(e.data)
return Object(u.a)(t,{portal:i,url:Object(s.Q)(Object(s.L)(r)),origin:"portal-item"})})}(e,t,r):Object(f.b)(e,t,r).then(i=>b(Object(o.w)(i),e.name,t,n,r)):Promise.reject(new a.a("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function b(e,t,n,p,b){var m,y,g
const v=e.data,O=n&&Object(o.l)(n.portal)?n.portal:l.a.getDefault(),w={portal:O,url:Object(s.Q)(e.baseUrl),origin:"portal-item"},j=v.items.find(e=>e.name===t)
if(!j){const e=`The symbol name '${t}' could not be found`
return Promise.reject(new a.a("symbolstyleutils:symbol-name-not-found",e,{symbolName:t}))}let _=Object(c.d)(Object(f.e)(j,p),w),S=null!=(m=null==(y=j.thumbnail)?void 0:y.href)?m:null
const E=j.thumbnail&&j.thumbnail.imageData
Object(i.b)()&&(_=null!=(g=Object(i.a)(_))?g:"",S=Object(i.a)(S))
const x={portal:O,url:Object(s.Q)(Object(s.L)(_)),origin:"portal-item"}
return Object(f.d)(_,b).then(i=>{const a="cimRef"===p?Object(f.c)(i.data):i.data,o=Object(u.a)(a,x)
if(o&&Object(r.c)(o)){if(S){const e=Object(c.d)(S,w)
o.thumbnail=new h.a({url:e})}else E&&(o.thumbnail=new h.a({url:"data:image/png;base64,"+E}))
e.styleUrl?o.styleOrigin=new d.a({portal:n.portal,styleUrl:e.styleUrl,name:t}):e.styleName&&(o.styleOrigin=new d.a({portal:n.portal,styleName:e.styleName,name:t}))}return o})}},1679:function(e,t,n){"use strict"
n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return u}))
var r=n(445),i=n(233),a=n(1110),o=(n(23),n(1039)),s=(n(1506),n(1210),n(1191)),l=n(1652),c=n(1653)
i.a.getLogger("esri.renderers.support.utils")
const u=Object(o.a)("short-date")
async function d(e,t,n){Object(a.b)(e,t,()=>[]).push(...n)}async function f(e){var t
const n=new Map
if(!e)return n
if("visualVariables"in e&&e.visualVariables){const t=e.visualVariables.filter(e=>"color"===e.type)
for(const e of t){var i
const t=(null!=(i=await Object(l.b)(e))?i:[]).map(e=>e.color)
await d(n,e.field||e.valueExpression,t)}}if("heatmap"===e.type){const t=Object(c.a)(e).map(e=>e.color)
await d(n,e.field||e.valueExpression,t)}else if("pie-chart"===e.type){var a
for(const t of e.attributes)await d(n,t.field||t.valueExpression,[t.color])
await d(n,"default",[null==e||null==(a=e.othersCategory)?void 0:a.color,Object(s.g)(e.backgroundFillSymbol,null)])}else if("dot-density"===e.type){for(const t of e.attributes)await d(n,t.field||t.valueExpression,[t.color])
await d(n,"default",[e.backgroundColor])}else if("unique-value"===e.type)if("predominance"===(null==(t=e.authoringInfo)?void 0:t.type))for(const t of null!=(o=e.uniqueValueInfos)?o:[]){var o
await d(n,t.value.toString(),[Object(s.g)(t.symbol,null)])}else{var u
const t=(null!=(u=e.uniqueValueInfos)?u:[]).map(e=>Object(s.g)(e.symbol,null)),{field:r,field2:i,field3:a,valueExpression:o}=e;(r||o)&&await d(n,r||o,t),i&&await d(n,i,t),a&&await d(n,a,t)}else if("class-breaks"===e.type){const t=e.classBreakInfos.map(e=>Object(s.g)(e.symbol,null)),{field:r,valueExpression:i}=e
await d(n,null!=r?r:i,t)}else"simple"===e.type&&await d(n,"default",[Object(s.g)(e.symbol,null)])
return"defaultSymbol"in e&&e.defaultSymbol&&await d(n,"default",[Object(s.g)(e.defaultSymbol,null)]),n.forEach((e,t)=>{const i=Object(r.q)(e.filter(Boolean),(e,t)=>JSON.stringify(e)===JSON.stringify(t))
n.set(t,i)}),n}},1700:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return a}))
var r=n(23),i=n(1006)
function a(e,t,n){return t.flatten(({sublayers:e})=>e).length!==e.length||!!e.some(e=>e.originIdOf("minScale")>n||e.originIdOf("maxScale")>n||e.originIdOf("renderer")>n||e.originIdOf("labelingInfo")>n||e.originIdOf("opacity")>n||e.originIdOf("labelsVisible")>n||e.originIdOf("source")>n)||!s(e,t)}function o(e,t,n){return!!e.some(e=>{const t=e.source
return!(!t||"map-layer"===t.type&&t.mapLayerId===e.id&&(Object(r.k)(t.gdbVersion)||t.gdbVersion===n))||e.originIdOf("renderer")>i.a.SERVICE||e.originIdOf("labelingInfo")>i.a.SERVICE||e.originIdOf("opacity")>i.a.SERVICE||e.originIdOf("labelsVisible")>i.a.SERVICE})||!s(e,t)}function s(e,t){if(!e||!e.length||Object(r.k)(t))return!0
const n=t.slice().reverse().flatten(({sublayers:e})=>e&&e.toArray().reverse()).map(e=>e.id).toArray()
if(e.length>n.length)return!1
let i=0
const a=n.length
for(const{id:t}of e){for(;i<a&&n[i]!==t;)i++
if(i>=a)return!1}return!0}function l(e){return!!e&&e.some(e=>null!=e.minScale||e.layerDefinition&&null!=e.layerDefinition.minScale)}},1910:function(e,t,n){"use strict"
n.d(t,"a",(function(){return f}))
var r=n(968),i=n(975),a=n(235),o=n(234),s=n(233),l=n(970),c=(n(971),n(969)),u=n(1212),d=n(1122)
let f=class extends i.a{constructor(e){super(e),this._from=null,this._to=null,this._final=null,this._current=[],this._time=0,this.duration=Object(a.a)("mapview-transitions-duration"),this.effects=[]}set effect(e){if(this._get("effect")!==(e=e||"")){this._set("effect",e)
try{this._transitionTo(h(e))}catch(t){this._transitionTo([]),s.a.getLogger(this.declaredClass).warn("Invalid Effect",{effect:e,error:t})}}}get hasEffects(){return this.transitioning||!!this.effects.length}set scale(e){this._updateForScale(e)}get transitioning(){return null!==this._to}canTransitionTo(e){try{return this.scale>0&&p(this._current,h(e),this.scale)}catch{return!1}}transitionStep(e,t){this._applyTimeTransition(e),this._updateForScale(t)}endTransitions(){this._applyTimeTransition(this.duration)}_transitionTo(e){this.scale>0&&p(this._current,e,this.scale)?(this._final=e,this._to=Object(o.a)(e),function(e,t,n){var r,i
const a=e.length>t.length?e:t,o=e.length>t.length?t:e,s=o[o.length-1],l=null!=(r=null==s?void 0:s.scale)?r:n,c=null!=(i=null==s?void 0:s.effects)?i:[]
for(let e=o.length;e<a.length;e++)o.push({scale:l,effects:[...c]})
for(let e=0;e<a.length;e++)o[e].scale=-1===o[e].scale?n:o[e].scale,a[e].scale=-1===a[e].scale?n:a[e].scale,Object(d.c)(o[e].effects,a[e].effects)}(this._current,this._to,this.scale),this._from=Object(o.a)(this._current),this._time=0):(this._from=this._to=this._final=null,this._current=e),this._set("effects",this._current[0]?Object(o.a)(this._current[0].effects):[])}_applyTimeTransition(e){if(!(this._to&&this._from&&this._current&&this._final))return
this._time+=e
const t=Math.min(1,this._time/this.duration)
for(let e=0;e<this._current.length;e++){const n=this._current[e],r=this._from[e],i=this._to[e]
n.scale=b(r.scale,i.scale,t)
for(let e=0;e<n.effects.length;e++){const a=n.effects[e],o=r.effects[e],s=i.effects[e]
a.interpolate(o,s,t)}}1===t&&(this._current=this._final,this._set("effects",this._current[0]?Object(o.a)(this._current[0].effects):[]),this._from=this._to=this._final=null)}_updateForScale(e){if(this._set("scale",e),0===this._current.length)return
const t=this._current,n=this._current.length-1
let r,i,a=1
if(1===t.length||e>=t[0].scale)i=r=t[0].effects
else if(e<=t[n].scale)i=r=t[n].effects
else for(let o=0;o<n;o++){const n=t[o],s=t[o+1]
if(n.scale>=e&&s.scale<=e){a=(e-n.scale)/(s.scale-n.scale),r=n.effects,i=s.effects
break}}for(let e=0;e<this.effects.length;e++)this.effects[e].interpolate(r[e],i[e],a)}}
function h(e){const t=Object(u.a)(e)||[]
return function(e){const t=e[0]
return!!t&&"type"in t}(t)?[{scale:-1,effects:t}]:t}function p(e,t,n){var r,i,a,o
return null==(r=e[0])||!r.effects||null==(i=t[0])||!i.effects||!((-1===(null==(a=e[0])?void 0:a.scale)||-1===(null==(o=t[0])?void 0:o.scale))&&(e.length>1||t.length>1)&&n<=0)&&Object(d.a)(e[0].effects,t[0].effects)}function b(e,t,n){return e+(t-e)*n}Object(r.a)([Object(l.b)()],f.prototype,"_to",void 0),Object(r.a)([Object(l.b)()],f.prototype,"duration",void 0),Object(r.a)([Object(l.b)({value:""})],f.prototype,"effect",null),Object(r.a)([Object(l.b)({readOnly:!0})],f.prototype,"effects",void 0),Object(r.a)([Object(l.b)({readOnly:!0})],f.prototype,"hasEffects",null),Object(r.a)([Object(l.b)({value:0})],f.prototype,"scale",null),Object(r.a)([Object(l.b)({readOnly:!0})],f.prototype,"transitioning",null),f=Object(r.a)([Object(c.a)("esri.layers.effects.EffectView")],f)},2029:function(e,t,n){"use strict"
n.d(t,"a",(function(){return p}))
var r=n(968),i=n(975),a=n(1025),o=n(23),s=n(1198),l=n(970),c=(n(971),n(445),n(969)),u=n(1035),d=n(1383),f=n(1700)
const h={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"}
let p=class extends(Object(a.b)(i.a)){constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null
const e=this.visibleSublayers.map(e=>{const t=Object(d.b)(this.floors,e)
return e.toExportImageJSON(t)})
return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&Object(f.a)(this.visibleSublayers,this.layer.serviceSublayers,this.layer.gdbVersion)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",()=>this.notifyChange("visibleSublayers")),e.on("sublayer-update",e=>this.notifyChange(h[e.propertyName]))],"layer"))}get layers(){const e=this.visibleSublayers
return e?e.length?"show:"+e.map(e=>e.id).join(","):"show:-1":null}get layerDefs(){var e
const t=!(null==(e=this.floors)||!e.length),n=this.visibleSublayers.filter(e=>null!=e.definitionExpression||t&&null!=e.floorInfo)
return n.length?JSON.stringify(n.reduce((e,t)=>{const n=Object(d.b)(this.floors,t),r=Object(s.b)(n,t.definitionExpression)
return Object(o.l)(r)&&(e[t.id]=r),e},{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent")
const e=this.layer
return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[]
if(!this.layer)return e
const t=this.layer.sublayers,n=t=>{const r=this.scale,i=0===r,a=0===t.minScale||r<=t.minScale,o=0===t.maxScale||r>=t.maxScale
t.visible&&(i||a&&o)&&(t.sublayers?t.sublayers.forEach(n):e.unshift(t))}
t&&t.forEach(n)
const r=this._get("visibleSublayers")
return!r||r.length!==e.length||r.some((t,n)=>e[n]!==t)?e:r}toJSON(){const e=this.layer
let t={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null}
return this.hasDynamicLayers&&this.dynamicLayers?t.dynamicLayers=this.dynamicLayers:t={...t,layers:this.layers,layerDefs:this.layerDefs},t}}
Object(r.a)([Object(l.b)({readOnly:!0})],p.prototype,"dynamicLayers",null),Object(r.a)([Object(l.b)()],p.prototype,"floors",void 0),Object(r.a)([Object(l.b)({readOnly:!0})],p.prototype,"hasDynamicLayers",null),Object(r.a)([Object(l.b)()],p.prototype,"layer",null),Object(r.a)([Object(l.b)({readOnly:!0})],p.prototype,"layers",null),Object(r.a)([Object(l.b)({readOnly:!0})],p.prototype,"layerDefs",null),Object(r.a)([Object(l.b)({type:Number})],p.prototype,"scale",void 0),Object(r.a)([Object(l.b)(u.a)],p.prototype,"timeExtent",void 0),Object(r.a)([Object(l.b)({readOnly:!0})],p.prototype,"version",null),Object(r.a)([Object(l.b)({readOnly:!0})],p.prototype,"visibleSublayers",null),p=Object(r.a)([Object(c.a)("esri.layers.mixins.ExportImageParameters")],p)},2127:function(e,t,n){"use strict"
n.d(t,"a",(function(){return a}))
var r=n(1095),i=(n(1043),n(234),n(233))
function a(e,t,n,r){return e.watch(t,n,r)}n(973),Object(r.c)(i.a.getLogger("esri.core.watchUtils"),"esri/core/watchUtils",{see:"https://arcg.is/1LTnuf",replacement:"esri/core/reactiveUtils",warnOnce:!0,version:"4.24"})},2544:function(e,t,n){"use strict"
n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return c})),n(990)
var r=n(23),i=n(1039),a=n(1038),o=n(1679)
function s(e){return Object(i.b)(new Date(e),o.b)}function l(e){const t=Math.floor(Math.log10(Math.abs(e)))+1,n=t<4||t>6?4:t,r=Math.abs(e)>=1e6?"compact":"standard"
return Object(a.b)(e,{notation:r,minimumSignificantDigits:2,maximumSignificantDigits:n})}function c(e,t,n){if(Object(r.k)(t)||Object(r.k)(e))return[]
const i=[]
for(let r=-1*n;r<=n;r++)0!==r&&i.push(t+r*e)
return i}n(1070)},2627:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s})),n(235)
var r=n(446),i=n(23),a=n(1241)
function o(e){return Object(i.k)(e)||"simple"===e.type||"unique-value"===e.type||"class-breaks"===e.type||"dictionary"===e.type||"heatmap"===e.type}function s(e,t){if(Object(i.k)(e))return null
if(!o(e))return new r.a("renderer-conversion-3d:unsupported-renderer",`Unsupported renderer of type '${e.type||e.declaredClass}'`,{renderer:e})
switch(e.type){case"simple":return l(n=e,Object(a.b)(n.symbol).error)
case"unique-value":return function(e,t){var n
const r={...a.a,...t},o=null==(n=e.uniqueValueInfos)?void 0:n.map(e=>Object(a.b)(e.symbol,r).error).filter(i.l),s=Object(a.b)(e.defaultSymbol,r)
return s.error&&null!=o&&o.unshift(s.error),l(e,o)}(e,t)
case"class-breaks":return function(e){const t=e.classBreakInfos.map(e=>Object(a.b)(e.symbol).error).filter(i.l),n=Object(a.b)(e.defaultSymbol)
return n.error&&t.unshift(n.error),l(e,t)}(e)
case"dictionary":case"heatmap":return null}var n
return null}function l(e,t){if(!t)return null
let n
if(n=Array.isArray(t)?t:[t],n.length>0){const t=n.map(e=>e.details.symbol.type||e.details.symbol.declaredClass).filter(e=>!!e)
t.sort()
const i=[]
return t.forEach((e,n)=>{0!==n&&e===t[n-1]||i.push(e)}),new r.a("renderer-conversion-3d:unsupported-symbols",`Renderer contains symbols (${i.join(", ")}) which are not supported in 3D`,{renderer:e,symbolErrors:n})}return null}},769:function(e,t,n){"use strict"
n.r(t),n.d(t,"default",(function(){return p}))
var r,i=n(968),a=n(972),o=n(234),s=n(997),l=n(971),c=n(970),u=n(969),d=n(974),f=n(988)
let h=r=class extends a.a{static fromJSON(e){if(!e)return null
if(e.wkid){if(102100===e.wkid)return r.WebMercator
if(4326===e.wkid)return r.WGS84}const t=new r
return t.read(e),t}constructor(e){super(e),this.latestWkid=null,this.wkid=null,this.wkt=null,this.vcsWkid=null,this.latestVcsWkid=null,this.imageCoordinateSystem=null}normalizeCtorArgs(e){return e&&"object"==typeof e?e:{["string"==typeof e?"wkt":"wkid"]:e}}get isWGS84(){return Object(f.m)(this)}get isWebMercator(){return Object(f.p)(this)}get isGeographic(){return Object(f.h)(this)}get isWrappable(){return Object(f.q)(this)}get metersPerUnit(){return Object(s.g)(this)}get unit(){return Object(s.i)(this)||(this.isGeographic?"degrees":null)}writeWkt(e,t){this.wkid||(t.wkt=e)}clone(){if(this===r.WGS84)return r.WGS84
if(this===r.WebMercator)return r.WebMercator
const e=new r
return null!=this.wkid?(e.wkid=this.wkid,null!=this.latestWkid&&(e.latestWkid=this.latestWkid),null!=this.vcsWkid&&(e.vcsWkid=this.vcsWkid),null!=this.latestVcsWkid&&(e.latestVcsWkid=this.latestVcsWkid)):null!=this.wkt&&(e.wkt=this.wkt),this.imageCoordinateSystem&&(e.imageCoordinateSystem=Object(o.a)(this.imageCoordinateSystem)),e}equals(e){if(null==e)return!1
if(this.imageCoordinateSystem||e.imageCoordinateSystem){if(null==this.imageCoordinateSystem||null==e.imageCoordinateSystem)return!1
const{id:t,referenceServiceName:n}=e.imageCoordinateSystem,{geodataXform:r}=e.imageCoordinateSystem,i=this.imageCoordinateSystem
return null==t||r?JSON.stringify(i)===JSON.stringify(e.imageCoordinateSystem):n?i.id===t&&i.referenceServiceName===n:i.id===t}return Object(f.d)(this,e)}toJSON(e){return this.write(void 0,e)}}
h.GCS_NAD_1927=null,h.WGS84=null,h.WebMercator=null,h.PlateCarree=null,Object(i.a)([Object(c.b)({readOnly:!0})],h.prototype,"isWGS84",null),Object(i.a)([Object(c.b)({readOnly:!0})],h.prototype,"isWebMercator",null),Object(i.a)([Object(c.b)({readOnly:!0})],h.prototype,"isGeographic",null),Object(i.a)([Object(c.b)({readOnly:!0})],h.prototype,"isWrappable",null),Object(i.a)([Object(c.b)({type:l.a,json:{write:!0}})],h.prototype,"latestWkid",void 0),Object(i.a)([Object(c.b)({readOnly:!0})],h.prototype,"metersPerUnit",null),Object(i.a)([Object(c.b)({readOnly:!0})],h.prototype,"unit",null),Object(i.a)([Object(c.b)({type:l.a,json:{write:!0,origins:{"web-scene":{write:{overridePolicy(){return{isRequired:null===this.wkt}}}}}}})],h.prototype,"wkid",void 0),Object(i.a)([Object(c.b)({type:String,json:{origins:{"web-scene":{write:{overridePolicy(){return{isRequired:null===this.wkid}}}}}}})],h.prototype,"wkt",void 0),Object(i.a)([Object(d.a)("wkt"),Object(d.a)("web-scene","wkt")],h.prototype,"writeWkt",null),Object(i.a)([Object(c.b)({type:l.a,json:{write:!0}})],h.prototype,"vcsWkid",void 0),Object(i.a)([Object(c.b)({type:l.a,json:{write:!0}})],h.prototype,"latestVcsWkid",void 0),Object(i.a)([Object(c.b)()],h.prototype,"imageCoordinateSystem",void 0),h=r=Object(i.a)([Object(u.a)("esri.geometry.SpatialReference")],h),h.prototype.toJSON.isDefaultToJSON=!0,h.GCS_NAD_1927=new h({wkid:4267,wkt:'GEOGCS["GCS_North_American_1927",DATUM["D_North_American_1927",SPHEROID["Clarke_1866",6378206.4,294.9786982]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]]'}),h.WGS84=new h(f.b),h.WebMercator=new h(f.c),h.PlateCarree=new h(f.a),Object.freeze&&(Object.freeze(h.GCS_NAD_1927),Object.freeze(h.WGS84),Object.freeze(h.WebMercator))
const p=h},770:function(e,t,n){"use strict"
n.r(t),n.d(t,"default",(function(){return g}))
var r,i=n(968),a=n(23),o=n(447),s=n(970),l=(n(971),n(445),n(969)),c=n(1004),u=n(992),d=n(769),f=n(1085),h=n(1118),p=n(988),b=n(774)
function m(e,t,n){return null==t?n:null==n?t:e(t,n)}let y=r=class extends c.a{constructor(...e){super(...e),this.type="extent",this.xmin=0,this.ymin=0,this.mmin=void 0,this.zmin=void 0,this.xmax=0,this.ymax=0,this.mmax=void 0,this.zmax=void 0}normalizeCtorArgs(e,t,n,r,i){return function(e){return e&&("esri.geometry.SpatialReference"===e.declaredClass||null!=e.wkid)}(e)?{spatialReference:e,xmin:0,ymin:0,xmax:0,ymax:0}:"object"==typeof e?(e.spatialReference=null==e.spatialReference?d.default.WGS84:e.spatialReference,e):{xmin:e,ymin:t,xmax:n,ymax:r,spatialReference:null!=i?i:d.default.WGS84}}static fromBounds(e,t){return new r({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:t})}static fromPoint(e){return new r({xmin:e.x,ymin:e.y,zmin:e.z,xmax:e.x,ymax:e.y,zmax:e.z,spatialReference:e.spatialReference})}get cache(){return this.commitProperty("xmin"),this.commitProperty("ymin"),this.commitProperty("zmin"),this.commitProperty("mmin"),this.commitProperty("xmax"),this.commitProperty("ymax"),this.commitProperty("zmax"),this.commitProperty("mmax"),this.commitProperty("spatialReference"),{}}get center(){const e=new u.a({x:.5*(this.xmin+this.xmax),y:.5*(this.ymin+this.ymax),spatialReference:this.spatialReference})
return this.hasZ&&(e.z=.5*(this.zmin+this.zmax)),this.hasM&&(e.m=.5*(this.mmin+this.mmax)),e}get extent(){return this.clone()}get hasM(){return null!=this.mmin&&null!=this.mmax}get hasZ(){return null!=this.zmin&&null!=this.zmax}get height(){return Math.abs(this.ymax-this.ymin)}get width(){return Math.abs(this.xmax-this.xmin)}centerAt(e){const t=this.center
return null!=e.z&&this.hasZ?this.offset(e.x-t.x,e.y-t.y,e.z-t.z):this.offset(e.x-t.x,e.y-t.y)}clone(){const e=new r
return e.xmin=this.xmin,e.ymin=this.ymin,e.xmax=this.xmax,e.ymax=this.ymax,e.spatialReference=this.spatialReference,null!=this.zmin&&(e.zmin=this.zmin,e.zmax=this.zmax),null!=this.mmin&&(e.mmin=this.mmin,e.mmax=this.mmax),e}contains(e){if(!e)return!1
const t=this.spatialReference,n=e.spatialReference
return t&&n&&!t.equals(n)&&Object(b.canProject)(t,n)&&(e=t.isWebMercator?Object(b.geographicToWebMercator)(e):Object(b.webMercatorToGeographic)(e,!0)),"point"===e.type?Object(f.e)(this,e):"extent"===e.type&&Object(f.c)(this,e)}equals(e){if(this===e)return!0
if(Object(a.k)(e))return!1
const t=this.spatialReference,n=e.spatialReference
return t&&n&&!t.equals(n)&&Object(b.canProject)(t,n)&&(e=t.isWebMercator?Object(b.geographicToWebMercator)(e):Object(b.webMercatorToGeographic)(e,!0)),this.xmin===e.xmin&&this.ymin===e.ymin&&this.zmin===e.zmin&&this.mmin===e.mmin&&this.xmax===e.xmax&&this.ymax===e.ymax&&this.zmax===e.zmax&&this.mmax===e.mmax}expand(e){const t=.5*(1-e),n=this.width*t,r=this.height*t
if(this.xmin+=n,this.ymin+=r,this.xmax-=n,this.ymax-=r,this.hasZ){const e=(this.zmax-this.zmin)*t
this.zmin+=e,this.zmax-=e}if(this.hasM){const e=(this.mmax-this.mmin)*t
this.mmin+=e,this.mmax-=e}return this}intersects(e){if(Object(a.k)(e))return!1
"mesh"===e.type&&(e=e.extent)
const t=this.spatialReference,n=e.spatialReference
return t&&n&&!Object(p.d)(t,n)&&Object(b.canProject)(t,n)&&(e=t.isWebMercator?Object(b.geographicToWebMercator)(e):Object(b.webMercatorToGeographic)(e,!0)),Object(h.c)(e.type)(this,e)}normalize(){const e=this._normalize(!1,!0)
return Array.isArray(e)?e:[e]}offset(e,t,n){return this.xmin+=e,this.ymin+=t,this.xmax+=e,this.ymax+=t,null!=n&&(this.zmin+=n,this.zmax+=n),this}shiftCentralMeridian(){return this._normalize(!0)}union(e){return this===e||(this.xmin=Math.min(this.xmin,e.xmin),this.ymin=Math.min(this.ymin,e.ymin),this.xmax=Math.max(this.xmax,e.xmax),this.ymax=Math.max(this.ymax,e.ymax),(this.hasZ||e.hasZ)&&(this.zmin=m(Math.min,this.zmin,e.zmin),this.zmax=m(Math.max,this.zmax,e.zmax)),(this.hasM||e.hasM)&&(this.mmin=m(Math.min,this.mmin,e.mmin),this.mmax=m(Math.max,this.mmax,e.mmax))),this}intersection(e){return this===e?this:Object(a.k)(e)||!this.intersects(e)?null:(this.xmin=Math.max(this.xmin,e.xmin),this.ymin=Math.max(this.ymin,e.ymin),this.xmax=Math.min(this.xmax,e.xmax),this.ymax=Math.min(this.ymax,e.ymax),(this.hasZ||e.hasZ)&&(this.zmin=m(Math.max,this.zmin,e.zmin),this.zmax=m(Math.min,this.zmax,e.zmax)),(this.hasM||e.hasM)&&(this.mmin=m(Math.max,this.mmin,e.mmin),this.mmax=m(Math.min,this.mmax,e.mmax)),this)}toJSON(e){return this.write({},e)}_shiftCM(e=Object(p.e)(this.spatialReference)){if(!e||!this.spatialReference)return this
const t=this.spatialReference,n=this._getCM(e)
if(n){var r
const i=t.isWebMercator?Object(b.webMercatorToGeographic)(n):n
this.xmin-=n.x,this.xmax-=n.x,t.isWebMercator||(i.x=this._normalizeX(i.x,e).x),this.spatialReference=new d.default(Object(o.c)(null!=(r=t.isWGS84?e.altTemplate:null)?r:e.wkTemplate,{Central_Meridian:i.x}))}return this}_getCM(e){let t=null
const[n,r]=e.valid,i=this.xmin,a=this.xmax
return i>=n&&i<=r&&a>=n&&a<=r||(t=this.center),t}_normalize(e,t,n){const r=this.spatialReference
if(!r)return this
const i=null!=n?n:Object(p.e)(r)
if(null==i)return this
const a=this._getParts(i).map(e=>e.extent)
if(a.length<2)return a[0]||this
if(a.length>2)return e?this._shiftCM(i):this.set({xmin:i.valid[0],xmax:i.valid[1]})
if(e)return this._shiftCM(i)
if(t)return a
let o=!0,s=!0
return a.forEach(e=>{e.hasZ||(o=!1),e.hasM||(s=!1)}),{rings:a.map(e=>{const t=[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]
if(o){const n=(e.zmax-e.zmin)/2
for(let e=0;e<t.length;e++)t[e].push(n)}if(s){const n=(e.mmax-e.mmin)/2
for(let e=0;e<t.length;e++)t[e].push(n)}return t}),hasZ:o,hasM:s,spatialReference:r}}_getParts(e){let t=this.cache._parts
if(!t){t=[]
const{ymin:n,ymax:i,spatialReference:a}=this,o=this.width,s=this.xmin,l=this.xmax
let c
e=e||Object(p.e)(a)
const[u,d]=e.valid
c=this._normalizeX(this.xmin,e)
const f=c.x,h=c.frameId
c=this._normalizeX(this.xmax,e)
const b=c.x,m=c.frameId,y=f===b&&o>0
if(o>2*d){const e=new r(s<l?f:b,n,d,i,a),o=new r(u,n,s<l?b:f,i,a),c=new r(0,n,d,i,a),p=new r(u,n,0,i,a),y=[],g=[]
e.contains(c)&&y.push(h),e.contains(p)&&g.push(h),o.contains(c)&&y.push(m),o.contains(p)&&g.push(m)
for(let e=h+1;e<m;e++)y.push(e),g.push(e)
t.push({extent:e,frameIds:[h]},{extent:o,frameIds:[m]},{extent:c,frameIds:y},{extent:p,frameIds:g})}else f>b||y?t.push({extent:new r(f,n,d,i,a),frameIds:[h]},{extent:new r(u,n,b,i,a),frameIds:[m]}):t.push({extent:new r(f,n,b,i,a),frameIds:[h]})
this.cache._parts=t}const n=this.hasZ,i=this.hasM
if(n||i){const e={}
n&&(e.zmin=this.zmin,e.zmax=this.zmax),i&&(e.mmin=this.mmin,e.mmax=this.mmax)
for(let n=0;n<t.length;n++)t[n].extent.set(e)}return t}_normalizeX(e,t){const[n,r]=t.valid,i=2*r
let a,o=0
return e>r?(a=Math.ceil(Math.abs(e-r)/i),e-=a*i,o=a):e<n&&(a=Math.ceil(Math.abs(e-n)/i),e+=a*i,o=-a),{x:e,frameId:o}}}
Object(i.a)([Object(s.b)({readOnly:!0})],y.prototype,"cache",null),Object(i.a)([Object(s.b)({readOnly:!0})],y.prototype,"center",null),Object(i.a)([Object(s.b)({readOnly:!0})],y.prototype,"extent",null),Object(i.a)([Object(s.b)({readOnly:!0,json:{write:{enabled:!1,overridePolicy:null}}})],y.prototype,"hasM",null),Object(i.a)([Object(s.b)({readOnly:!0,json:{write:{enabled:!1,overridePolicy:null}}})],y.prototype,"hasZ",null),Object(i.a)([Object(s.b)({readOnly:!0})],y.prototype,"height",null),Object(i.a)([Object(s.b)({readOnly:!0})],y.prototype,"width",null),Object(i.a)([Object(s.b)({type:Number,json:{type:[Number,String],write:{enabled:!0,allowNull:!0}}})],y.prototype,"xmin",void 0),Object(i.a)([Object(s.b)({type:Number,json:{write:!0}})],y.prototype,"ymin",void 0),Object(i.a)([Object(s.b)({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasM}}}}})],y.prototype,"mmin",void 0),Object(i.a)([Object(s.b)({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasZ}}}}})],y.prototype,"zmin",void 0),Object(i.a)([Object(s.b)({type:Number,json:{write:!0}})],y.prototype,"xmax",void 0),Object(i.a)([Object(s.b)({type:Number,json:{write:!0}})],y.prototype,"ymax",void 0),Object(i.a)([Object(s.b)({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasM}}}}})],y.prototype,"mmax",void 0),Object(i.a)([Object(s.b)({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasZ}}}}})],y.prototype,"zmax",void 0),y=r=Object(i.a)([Object(l.a)("esri.geometry.Extent")],y),y.prototype.toJSON.isDefaultToJSON=!0
const g=y},771:function(e,t,n){"use strict"
n.r(t),n.d(t,"default",(function(){return p}))
var r=n(110),i=n(196),a=n(446),o=n(235),s=n(234),l=n(23),c=n(973),u=n(374),d=n(198),f=n(1146),h=n(1229)
async function p(e,t){var s
const d=Object(u.z)(e),g=Object(u.y)(e)
g||d||(e=Object(u.I)(e))
const v={url:e,requestOptions:{...Object(l.u)(t)}}
let O=Object(u.o)(e)
if(O){const e=await async function(e,t){if(null!=e.responseData)return e.responseData
if(e.headers&&(t.requestOptions.headers={...t.requestOptions.headers,...e.headers}),e.query&&(t.requestOptions.query={...t.requestOptions.query,...e.query}),e.before){let n,r
try{r=await e.before(t)}catch(e){n=S("request:interceptor",e,t)}if((r instanceof Error||r instanceof a.a)&&(n=S("request:interceptor",r,t)),n)throw e.error&&e.error(n),n
return r}}(O,v)
if(null!=e)return{data:e,getHeader:w,httpStatus:200,requestOptions:v.requestOptions,url:v.url}
O.after||O.error||(O=null)}if(e=v.url,"image"===(t=v.requestOptions).responseType){if(Object(o.a)("host-webworker")||Object(o.a)("host-node"))throw S("request:invalid-parameters",new Error("responseType 'image' is not supported in Web Workers or Node environment"),v)}else if(d)throw S("request:invalid-parameters",new Error("Data URLs are not supported for responseType = "+t.responseType),v)
if("head"===t.method){if(t.body)throw S("request:invalid-parameters",new Error("body parameter cannot be set when method is 'head'"),v)
if(d||g)throw S("request:invalid-parameters",new Error("data and blob URLs are not supported for method 'head'"),v)}if(await async function(){Object(o.a)("host-webworker")?b||(b=await n.e(760).then(n.bind(null,1482))):p._abortableFetch||(p._abortableFetch=globalThis.fetch.bind(globalThis))}(),b)return b.execute(e,t)
const j=new AbortController
Object(c.n)(t,()=>j.abort())
const _={controller:j,credential:void 0,credentialToken:void 0,fetchOptions:void 0,hasToken:!1,interceptor:O,params:v,redoRequest:!1,useIdentity:m.useIdentity,useProxy:!1,useSSL:!1,withCredentials:!1},C=await async function(e){var t,n
let a,o
await async function(e){var t,n
const a=e.params.url,o=e.params.requestOptions,s=e.controller.signal,l=o.body
let u=null,d=null
if(y&&"HTMLFormElement"in globalThis&&(l instanceof FormData?u=l:l instanceof HTMLFormElement&&(u=new FormData(l))),"string"==typeof l&&(d=l),e.fetchOptions={cache:o.cacheBust&&!p._abortableFetch.polyfill?"no-cache":"default",credentials:"same-origin",headers:o.headers||{},method:"head"===o.method?"HEAD":"GET",mode:"cors",priority:m.priority,redirect:"follow",signal:s},(u||d)&&(e.fetchOptions.body=u||d),"anonymous"===o.authMode&&(e.useIdentity=!1),e.hasToken=!!(/token=/i.test(a)||null!=(t=o.query)&&t.token||null!=(n=u)&&n.get("token")),!e.hasToken&&r.default.apiKey&&Object(f.a)(a)&&(o.query||(o.query={}),o.query.token=r.default.apiKey,e.hasToken=!0),e.useIdentity&&!e.hasToken&&!e.credentialToken&&!x(a)&&!Object(c.k)(s)){let t
"immediate"===o.authMode?(await E(),t=await i.b.getCredential(a,{signal:s}),e.credential=t):"no-prompt"===o.authMode?(await E(),t=await i.b.getCredential(a,{prompt:!1,signal:s}).catch(()=>{}),e.credential=t):i.b&&(t=i.b.findCredential(a)),t&&(e.credentialToken=t.token,e.useSSL=!!t.ssl)}}(e)
try{do{[a,o]=await I(e)}while(!await L(e,a,o))}catch(t){const n=S("request:server",t,e.params,a)
throw n.details.ssl=e.useSSL,e.interceptor&&e.interceptor.error&&e.interceptor.error(n),n}const s=e.params.url
if(o&&/\/sharing\/rest\/(accounts|portals)\/self/i.test(s)){var l
if(!e.hasToken&&!e.credentialToken&&null!=(l=o.user)&&l.username&&!Object(u.D)(s)){const e=Object(u.p)(s,!0)
e&&m.trustedServers.push(e)}Array.isArray(o.authorizedCrossOriginNoCorsDomains)&&Object(h.c)(o.authorizedCrossOriginNoCorsDomains)}const d=e.credential
if(d&&i.b){const e=i.b.findServerInfo(d.server)
let t=e&&e.owningSystemUrl
if(t){t=t.replace(/\/?$/,"/sharing")
const e=i.b.findCredential(t,d.userId)
e&&-1===i.b._getIdenticalSvcIdx(t,e)&&e.resources.unshift(t)}}return{data:o,getHeader:a?e=>{var t
return null==(t=a)?void 0:t.headers.get(e)}:w,httpStatus:null!=(t=null==(n=a)?void 0:n.status)?t:200,requestOptions:e.params.requestOptions,ssl:e.useSSL,url:e.params.url}}(_)
return null!=(s=O)&&null!=s.after&&s.after(C),C}let b
const m=r.default.request,y="FormData"in globalThis,g=[499,498,403,401],v=["COM_0056","COM_0057","SB_0008"],O=[/\/arcgis\/tokens/i,/\/sharing(\/rest)?\/generatetoken/i,/\/rest\/info/i],w=()=>null,j=Symbol()
function _(e){const t=Object(u.p)(e)
return!t||t.endsWith(".arcgis.com")||p._corsServers.includes(t)||Object(u.D)(t)}function S(e,t,n,r){let i="Error"
const o={url:n.url,requestOptions:n.requestOptions,getHeader:w,ssl:!1}
if(t instanceof a.a)return t.details?(t.details=Object(s.a)(t.details),t.details.url=n.url,t.details.requestOptions=n.requestOptions):t.details=o,t
if(t){const e=r&&(e=>r.headers.get(e)),n=r&&r.status,a=t.message
a&&(i=a),e&&(o.getHeader=e),o.httpStatus=(null!=t.httpCode?t.httpCode:t.code)||n||0,o.subCode=t.subcode,o.messageCode=t.messageCode,"string"==typeof t.details?o.messages=[t.details]:o.messages=t.details,o.raw=j in t?t[j]:t}return Object(c.j)(t)?Object(c.c)():new a.a(e,i,o)}async function E(){i.b||await Promise.all([n.e(5),n.e(18),n.e(59),n.e(475)]).then(n.bind(null,784))}function x(e){return O.some(t=>t.test(e))}async function I(e){var t
let n=e.params.url
const r=e.params.requestOptions,a=null!=(t=e.fetchOptions)?t:{},s=Object(u.y)(n)||Object(u.z)(n),l=r.responseType||"json",f=s?0:null!=r.timeout?r.timeout:m.timeout
let b=!1
if(!s){e.useSSL&&(n=Object(u.P)(n)),r.cacheBust&&"default"===a.cache&&(n=Object(u.d)(n,"request.preventCache",Date.now()))
let t={...r.query}
e.credentialToken&&(t.token=e.credentialToken)
let s=Object(u.J)(t)
Object(o.a)("esri-url-encodes-apostrophe")&&(s=s.replace(/'/g,"%27"))
const l=n.length+1+s.length
let c
b="delete"===r.method||"post"===r.method||"put"===r.method||!!r.body||l>m.maxUrlLength
const f=r.useProxy||!!Object(u.r)(n)
if(f){const e=Object(u.s)(n)
c=e.path,!b&&c.length+1+l>m.maxUrlLength&&(b=!0),e.query&&(t={...e.query,...t})}if("HEAD"===a.method&&(b||f)){if(b){if(l>m.maxUrlLength)throw S("request:invalid-parameters",new Error("URL exceeds maximum length"),e.params)
throw S("request:invalid-parameters",new Error("cannot use POST request when method is 'head'"),e.params)}if(f)throw S("request:invalid-parameters",new Error("cannot use proxy when method is 'head'"),e.params)}if(b?(a.method="delete"===r.method?"DELETE":"put"===r.method?"PUT":"POST",r.body?n=Object(u.e)(n,t):(a.body=Object(u.J)(t),a.headers||(a.headers={}),a.headers["Content-Type"]="application/x-www-form-urlencoded")):n=Object(u.e)(n,t),f&&(e.useProxy=!0,n=`${c}?${n}`),t.token&&y&&a.body instanceof FormData&&!Object(d.a)(n)&&a.body.set("token",t.token),r.hasOwnProperty("withCredentials"))e.withCredentials=r.withCredentials
else if(!Object(u.v)(n,Object(u.m)()))if(Object(u.D)(n))e.withCredentials=!0
else if(i.b){const t=i.b.findServerInfo(n)
t&&t.webTierAuth&&(e.withCredentials=!0)}e.withCredentials&&(a.credentials="include",Object(h.a)(n)&&await Object(h.d)(b?Object(u.e)(n,t):n))}let g,v,O=0,w=!1
f>0&&(O=setTimeout(()=>{w=!0,e.controller.abort()},f))
try{if("native-request-init"===r.responseType)v=a,v.url=n
else if("image"!==r.responseType||"default"!==a.cache||"GET"!==a.method||b||function(e){if(e)for(const t of Object.getOwnPropertyNames(e))if(e[t])return!0
return!1}(r.headers)||!s&&!e.useProxy&&m.proxyUrl&&!_(n)){if(g=await p._abortableFetch(n,a),e.useProxy||function(e){const t=Object(u.p)(e)
t&&!p._corsServers.includes(t)&&p._corsServers.push(t)}(n),"native"===r.responseType)v=g
else if("HEAD"!==a.method)if(g.ok){switch(l){case"array-buffer":v=await g.arrayBuffer()
break
case"blob":case"image":v=await g.blob()
break
default:v=await g.text()}if(O&&(clearTimeout(O),O=0),"json"===l||"xml"===l||"document"===l)if(v)switch(l){case"json":v=JSON.parse(v)
break
case"xml":v=C(v,"application/xml")
break
case"document":v=C(v,"text/html")}else v=null
if(v){if("array-buffer"===l||"blob"===l){const e=g.headers.get("Content-Type")
if(e&&/application\/json|text\/plain/i.test(e)&&v["blob"===l?"size":"byteLength"]<=750)try{const e=await new Response(v).json()
e.error&&(v=e)}catch{}}"image"===l&&v instanceof Blob&&(v=await M(URL.createObjectURL(v),e,!0))}}else v=await g.text()}else v=await M(n,e)}catch(t){var j
if("AbortError"===t.name){if(w)throw new Error("Timeout exceeded")
throw Object(c.c)("Request canceled")}if(!(!g&&t instanceof TypeError&&m.proxyUrl)||r.body||"delete"===r.method||"head"===r.method||"post"===r.method||"put"===r.method||e.useProxy||_(n))throw t
e.redoRequest=!0,Object(u.c)({proxyUrl:m.proxyUrl,urlPrefix:null!=(j=Object(u.p)(n))?j:""})}finally{O&&clearTimeout(O)}return[g,v]}function C(e,t){let n
try{n=(new DOMParser).parseFromString(e,t)}catch{}if(!n||n.getElementsByTagName("parsererror").length)throw new SyntaxError("XML Parse error")
return n}async function L(e,t,n){if(e.redoRequest)return e.redoRequest=!1,!1
const r=e.params.requestOptions
if(!t||"native"===r.responseType||"native-request-init"===r.responseType)return!0
let a,o
if(!t.ok)throw a=new Error(`Unable to load ${t.url} status: ${t.status}`),a[j]=n,a
n&&(n.error?a=n.error:"error"===n.status&&Array.isArray(n.messages)&&(a={...n},a[j]=n,a.details=n.messages))
let s,l=null
a&&(o=Number(a.code),l=a.hasOwnProperty("subcode")?Number(a.subcode):null,s=a.messageCode,s=s&&s.toUpperCase())
const c=r.authMode
if(403===o&&(4===l||a.message&&a.message.toLowerCase().includes("ssl")&&!a.message.toLowerCase().includes("permission"))){if(!e.useSSL)return e.useSSL=!0,!1}else if(!e.hasToken&&e.useIdentity&&("no-prompt"!==c||498===o)&&void 0!==o&&g.includes(o)&&!x(e.params.url)&&(403!==o||s&&!v.includes(s)&&(null==l||2===l&&e.credentialToken))){await E()
try{const t=await i.b.getCredential(e.params.url,{error:S("request:server",a,e.params),prompt:"no-prompt"!==c,signal:e.controller.signal,token:e.credentialToken})
return e.credential=t,e.credentialToken=t.token,e.useSSL=e.useSSL||t.ssl,!1}catch(t){if("no-prompt"===c)return e.credential=void 0,e.credentialToken=void 0,!1
a=t}}if(a)throw a
return!0}function M(e,t,n=!1){const r=t.controller.signal,i=new Image
return t.withCredentials?i.crossOrigin="use-credentials":i.crossOrigin="anonymous",i.alt="",i.fetchPriority=m.priority,i.src=e,Object(h.b)(i,e,n,r)}p._abortableFetch=null,p._corsServers=["https://server.arcgisonline.com","https://services.arcgisonline.com"]},772:function(e,t,n){"use strict"
n.r(t),n.d(t,"default",(function(){return m}))
var r=n(968),i=n(982),a=n(775),o=n(995),s=n(986),l=n(972),c=n(23),u=n(1156),d=n(970),f=(n(971),n(445),n(969)),h=n(983)
function p(e){if(!Object(c.l)(e))return null
const t={}
for(const n in e){const r=e[n]
r&&(t[n]=r.toJSON())}return 0!==Object.keys(t).length?t:null}let b=class extends(Object(s.b)(l.a)){constructor(...e){super(...e),this.isAggregate=!1,this.layer=null,this.popupTemplate=null,this.sourceLayer=null,Object.defineProperty(this,"uid",{value:Object(u.b)(),configurable:!0})}normalizeCtorArgs(e,t,n,r){return e&&!e.declaredClass?e:{geometry:e,symbol:t,attributes:n,popupTemplate:r}}set aggregateGeometries(e){const t=this._get("aggregateGeometries")
JSON.stringify(t)!==JSON.stringify(e)&&this._set("aggregateGeometries",e)}set attributes(e){const t=this._get("attributes")
t!==e&&(this._set("attributes",e),this._notifyLayer("attributes",t,e))}set geometry(e){const t=this._get("geometry")
t!==e&&(this._set("geometry",e),this._notifyLayer("geometry",t,e))}set symbol(e){const t=this._get("symbol")
t!==e&&(this._set("symbol",e),this._notifyLayer("symbol",t,e))}set visible(e){const t=this._get("visible")
t!==e&&(this._set("visible",e),this._notifyLayer("visible",t,e))}getEffectivePopupTemplate(e=!1){if(this.popupTemplate)return this.popupTemplate
for(const t of[this.sourceLayer,this.layer])if(t){if("popupTemplate"in t&&t.popupTemplate)return t.popupTemplate
if(e&&"defaultPopupTemplate"in t&&Object(c.l)(t.defaultPopupTemplate))return t.defaultPopupTemplate}return null}getAttribute(e){var t
return null==(t=this.attributes)?void 0:t[e]}setAttribute(e,t){if(this.attributes){const n=this.getAttribute(e)
this.attributes[e]=t,this._notifyLayer("attributes",n,t,e)}else this.attributes={[e]:t},this._notifyLayer("attributes",void 0,t,e)}getObjectId(){return this.sourceLayer&&"objectIdField"in this.sourceLayer&&this.sourceLayer.objectIdField?this.getAttribute(this.sourceLayer.objectIdField):null}toJSON(){return{aggregateGeometries:p(this.aggregateGeometries),geometry:Object(c.l)(this.geometry)?this.geometry.toJSON():null,symbol:Object(c.l)(this.symbol)?this.symbol.toJSON():null,attributes:{...this.attributes},popupTemplate:this.popupTemplate&&this.popupTemplate.toJSON()}}notifyGeometryChanged(){this._notifyLayer("geometry",this.geometry,this.geometry)}notifyMeshTransformChanged(){Object(c.l)(this.geometry)&&"mesh"===this.geometry.type&&this._notifyLayer("transform",this.geometry.transform,this.geometry.transform)}_notifyLayer(e,t,n,r){if(!this.layer||!("graphicChanged"in this.layer))return
const i={graphic:this,property:e,oldValue:t,newValue:n}
"attributes"===e&&(i.attributeName=r),this.layer.graphicChanged(i)}}
Object(r.a)([Object(d.b)({value:null,json:{read:function(e){if(!e)return null
const t={}
for(const n in e){const r=Object(h.a)(e[n])
r&&(t[n]=r)}return 0!==Object.keys(t).length?t:null}}})],b.prototype,"aggregateGeometries",null),Object(r.a)([Object(d.b)({value:null})],b.prototype,"attributes",null),Object(r.a)([Object(d.b)({value:null,types:i.c,json:{read:h.a}})],b.prototype,"geometry",null),Object(r.a)([Object(d.b)({type:Boolean})],b.prototype,"isAggregate",void 0),Object(r.a)([Object(d.b)({clonable:"reference"})],b.prototype,"layer",void 0),Object(r.a)([Object(d.b)({type:a.default})],b.prototype,"popupTemplate",void 0),Object(r.a)([Object(d.b)({clonable:"reference"})],b.prototype,"sourceLayer",void 0),Object(r.a)([Object(d.b)({value:null,types:o.e})],b.prototype,"symbol",null),Object(r.a)([Object(d.b)({type:Boolean,value:!0})],b.prototype,"visible",null),b=Object(r.a)([Object(f.a)("esri.Graphic")],b),(b||(b={})).generateUID=u.b
const m=b},773:function(e,t,n){"use strict"
n.r(t),n.d(t,"default",(function(){return S}))
var r,i=n(968),a=n(445),o=n(234),s=n(23),l=n(970),c=(n(971),n(969)),u=n(974),d=n(770),f=n(1004),h=n(992),p=n(769),b=n(1142),m=n(1085),y=n(1066),g=n(1157),v=n(1118),O=n(774),w=n(1105)
function j(e){return!Array.isArray(e[0])}let _=r=class extends f.a{static fromExtent(e){const t=e.clone().normalize(),n=e.spatialReference
let i=!1,a=!1
for(const e of t)e.hasZ&&(i=!0),e.hasM&&(a=!0)
const o={rings:t.map(e=>{const t=[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]
if(i&&e.hasZ){const n=e.zmin+.5*(e.zmax-e.zmin)
for(let e=0;e<t.length;e++)t[e].push(n)}if(a&&e.hasM){const n=e.mmin+.5*(e.mmax-e.mmin)
for(let e=0;e<t.length;e++)t[e].push(n)}return t}),spatialReference:n}
return i&&(o.hasZ=!0),a&&(o.hasM=!0),new r(o)}constructor(...e){super(...e),this.rings=[],this.type="polygon"}normalizeCtorArgs(e,t){let n,r,i=null,a=null
return e&&!Array.isArray(e)?(i=e.rings?e.rings:null,t||(e.spatialReference?t=e.spatialReference:e.rings||(t=e)),n=e.hasZ,r=e.hasM):i=e,i=i||[],t=t||p.default.WGS84,i.length&&i[0]&&null!=i[0][0]&&"number"==typeof i[0][0]&&(i=[i]),a=i[0]&&i[0][0],a&&(void 0===n&&void 0===r?(n=a.length>2,r=a.length>3):void 0===n?n=r?a.length>3:a.length>2:void 0===r&&(r=n?a.length>3:a.length>2)),{rings:i,spatialReference:t,hasZ:n,hasM:r}}get cache(){return this.commitProperty("rings"),this.commitProperty("hasZ"),this.commitProperty("hasM"),this.commitProperty("spatialReference"),{}}get centroid(){const e=Object(b.b)(this)
if(!e||isNaN(e[0])||isNaN(e[1])||this.hasZ&&isNaN(e[2]))return null
const t=new h.a
return t.x=e[0],t.y=e[1],t.spatialReference=this.spatialReference,this.hasZ&&(t.z=e[2]),t}get extent(){const{spatialReference:e}=this,t=Object(g.b)(this)
if(!t)return null
const n=new d.default(t)
return n.spatialReference=e,n}get isSelfIntersecting(){return Object(v.d)(this.rings)}writeRings(e,t){t.rings=Object(o.a)(this.rings)}addRing(e){if(!e)return
const t=this.rings,n=t.length
if(j(e)){const r=[]
for(let t=0,n=e.length;t<n;t++)r[t]=e[t].toArray()
t[n]=r}else t[n]=e.concat()
return this.notifyChange("rings"),this}clone(){const e=new r
return e.spatialReference=this.spatialReference,e.rings=Object(o.a)(this.rings),e.hasZ=this.hasZ,e.hasM=this.hasM,e}equals(e){if(this===e)return!0
if(Object(s.k)(e))return!1
const t=this.spatialReference,n=e.spatialReference
if(Object(s.l)(t)!==Object(s.l)(n))return!1
if(Object(s.l)(t)&&Object(s.l)(n)&&!t.equals(n))return!1
if(this.rings.length!==e.rings.length)return!1
const r=([e,t,n,r],[i,a,o,s])=>e===i&&t===a&&(null==n&&null==o||n===o)&&(null==r&&null==s||r===s)
for(let t=0;t<this.rings.length;t++){const n=this.rings[t],i=e.rings[t]
if(!Object(a.e)(n,i,r))return!1}return!0}contains(e){if(!e)return!1
const t=Object(O.project)(e,this.spatialReference)
return Object(m.g)(this,Object(s.l)(t)?t:e)}isClockwise(e){let t
return t=j(e)?e.map(e=>this.hasZ?this.hasM?[e.x,e.y,e.z,e.m]:[e.x,e.y,e.z]:[e.x,e.y]):e,Object(y.k)(t,this.hasM,this.hasZ)}getPoint(e,t){if(!this._validateInputs(e,t))return null
const n=this.rings[e][t],r=this.hasZ,i=this.hasM
return r&&!i?new h.a(n[0],n[1],n[2],void 0,this.spatialReference):i&&!r?new h.a(n[0],n[1],void 0,n[2],this.spatialReference):r&&i?new h.a(n[0],n[1],n[2],n[3],this.spatialReference):new h.a(n[0],n[1],this.spatialReference)}insertPoint(e,t,n){return this._validateInputs(e,t,!0)?(Object(w.a)(this,n),Array.isArray(n)||(n=n.toArray()),this.rings[e].splice(t,0,n),this.notifyChange("rings"),this):this}removePoint(e,t){if(!this._validateInputs(e,t))return null
const n=new h.a(this.rings[e].splice(t,1)[0],this.spatialReference)
return this.notifyChange("rings"),n}removeRing(e){if(!this._validateInputs(e,null))return null
const t=this.rings.splice(e,1)[0],n=this.spatialReference,r=t.map(e=>new h.a(e,n))
return this.notifyChange("rings"),r}setPoint(e,t,n){return this._validateInputs(e,t)?(Object(w.a)(this,n),Array.isArray(n)||(n=n.toArray()),this.rings[e][t]=n,this.notifyChange("rings"),this):this}_validateInputs(e,t,n=!1){if(null==e||e<0||e>=this.rings.length)return!1
if(null!=t){const r=this.rings[e]
if(n&&(t<0||t>r.length))return!1
if(!n&&(t<0||t>=r.length))return!1}return!0}toJSON(e){return this.write({},e)}}
Object(i.a)([Object(l.b)({readOnly:!0})],_.prototype,"cache",null),Object(i.a)([Object(l.b)({readOnly:!0})],_.prototype,"centroid",null),Object(i.a)([Object(l.b)({readOnly:!0})],_.prototype,"extent",null),Object(i.a)([Object(l.b)({readOnly:!0})],_.prototype,"isSelfIntersecting",null),Object(i.a)([Object(l.b)({type:[[[Number]]],json:{write:{isRequired:!0}}})],_.prototype,"rings",void 0),Object(i.a)([Object(u.a)("rings")],_.prototype,"writeRings",null),_=r=Object(i.a)([Object(c.a)("esri.geometry.Polygon")],_),_.prototype.toJSON.isDefaultToJSON=!0
const S=_},774:function(e,t,n){"use strict"
n.r(t),n.d(t,"canProject",(function(){return b})),n.d(t,"geographicToWebMercator",(function(){return v})),n.d(t,"lngLatToXY",(function(){return y})),n.d(t,"project",(function(){return m})),n.d(t,"webMercatorToGeographic",(function(){return O})),n.d(t,"x2lon",(function(){return u})),n.d(t,"xyToLngLat",(function(){return g})),n.d(t,"y2lat",(function(){return d}))
var r=n(234),i=n(23),a=n(769),o=n(1052),s=n(988)
function l(e){return 57.29577951308232*e}function c(e){return.017453292519943*e}function u(e){return e/o.a.radius}function d(e){return Math.PI/2-2*Math.atan(Math.exp(-e/o.a.radius))}function f(e){return null!=e.wkid||null!=e.wkt}const h=[0,0]
function p(e,t,n,r,i){const a=e,o=i
if(o.spatialReference=n,"x"in a&&"x"in o)[o.x,o.y]=t(a.x,a.y,h,r)
else if("xmin"in a&&"xmin"in o)[o.xmin,o.ymin]=t(a.xmin,a.ymin,h,r),[o.xmax,o.ymax]=t(a.xmax,a.ymax,h,r)
else if("paths"in a&&"paths"in o||"rings"in a&&"rings"in o){const e="paths"in a?a.paths:a.rings,n=[]
let i
for(let a=0;a<e.length;a++){const o=e[a]
i=[],n.push(i)
for(let e=0;e<o.length;e++)i.push(t(o[e][0],o[e][1],[0,0],r)),o[e].length>2&&i[e].push(o[e][2]),o[e].length>3&&i[e].push(o[e][3])}"paths"in o?o.paths=n:o.rings=n}else if("points"in a&&"points"in o){const e=a.points,n=[]
for(let i=0;i<e.length;i++)n[i]=t(e[i][0],e[i][1],[0,0],r),e[i].length>2&&n[i].push(e[i][2]),e[i].length>3&&n[i].push(e[i][3])
o.points=n}return i}function b(e,t){const n=e&&(f(e)?e:e.spatialReference),r=t&&(f(t)?t:t.spatialReference)
return!(e&&"type"in e&&"mesh"===e.type||t&&"type"in t&&"mesh"===t.type||!n||!r)&&(!!Object(s.d)(r,n)||Object(s.p)(r)&&Object(s.m)(n)||Object(s.p)(n)&&Object(s.m)(r))}function m(e,t){if(Object(i.k)(e))return null
const n=e.spatialReference,o=t&&(f(t)?t:t.spatialReference)
return b(n,o)?Object(s.d)(n,o)?Object(r.a)(e):Object(s.p)(o)?p(e,y,a.default.WebMercator,!1,Object(r.a)(e)):Object(s.m)(o)?p(e,g,a.default.WGS84,!1,Object(r.a)(e)):null:null}function y(e,t,n=[0,0]){t>89.99999?t=89.99999:t<-89.99999&&(t=-89.99999)
const r=c(t)
return n[0]=c(e)*o.a.radius,n[1]=o.a.halfSemiMajorAxis*Math.log((1+Math.sin(r))/(1-Math.sin(r))),n}function g(e,t,n=[0,0],r=!1){const i=l(e/o.a.radius)
return n[0]=r?i:i-360*Math.floor((i+180)/360),n[1]=l(Math.PI/2-2*Math.atan(Math.exp(-t/o.a.radius))),n}function v(e,t=!1,n=Object(r.a)(e)){return p(e,y,a.default.WebMercator,t,n)}function O(e,t=!1,n=Object(r.a)(e)){return p(e,g,a.default.WGS84,t,n)}},778:function(e,t,n){"use strict"
n.r(t),n.d(t,"getTimeExtentFromLayers",(function(){return l})),n.d(t,"toLocalTimeExtent",(function(){return u})),n.d(t,"toUTCTimeExtent",(function(){return c}))
var r=n(1009),i=n(23),a=n(973),o=n(1059)
function s(e){return void 0!==e.timeInfo}async function l(e,t){if(0===e.length)return r.a.allTime
const n=e.filter(s)
await Promise.all(n.map(e=>e.load({signal:t})))
const o=[],l=[]
for(const e of n){var c
"feature"!==(null==e?void 0:e.type)&&"map-image"!==(null==e?void 0:e.type)||null==(c=e.timeInfo)||!c.hasLiveData?l.push(e):o.push(e)}const u=e=>Object(i.k)(e)||e.isAllTime,d=l.map(e=>{var t
return null==(t=e.timeInfo)?void 0:t.fullTimeExtent})
if(d.some(u))return r.a.allTime
const f=o.map(async e=>{var n
const{timeExtent:r}=await e.fetchRecomputedExtents({signal:t})
return r||Object(i.u)(null==(n=e.timeInfo)?void 0:n.fullTimeExtent)}),h=(await Object(a.g)(f)).map(e=>e.value)
return h.some(u)?r.a.allTime:[...h,...d].filter(i.l).reduce((e,t)=>e.union(t))}function c(e){if(!e)return e
const{start:t,end:n}=e
return new r.a({start:Object(i.l)(t)?Object(o.b)(t,-t.getTimezoneOffset(),"minutes"):t,end:Object(i.l)(n)?Object(o.b)(n,-n.getTimezoneOffset(),"minutes"):n})}function u(e){if(!e)return e
const{start:t,end:n}=e
return new r.a({start:Object(i.l)(t)?Object(o.b)(t,t.getTimezoneOffset(),"minutes"):t,end:Object(i.l)(n)?Object(o.b)(n,n.getTimezoneOffset(),"minutes"):n})}},798:function(e,t,n){"use strict"
n.r(t),n.d(t,"default",(function(){return St}))
var r=n(968),i=n(1007),a=n(23),o=n(978),s=n(970),l=n(987),c=(n(445),n(969)),u=n(1061),d=(n(1083),n(975)),f=n(993),h=(n(971),n(990)),p=n(196),b=n(771),m=n(995),y=n(976),g=n(233),v=n(973),O=n(980),w=n(374),j=n(1006),_=n(1910),S=n(1134),E=n(2029),x=n(989),I=n(1499),C=n(1092),L=n(2627),M=n(1257),A=n(1467),T=n(1485),R=n(1490),k=n(1449),P=n(1191),N=n(1070),D=n(1652),V=n(1653),F=n(1655),z=n(1506),U=n(1611),$=n(998),G=n(1211),q=n(1078),B=n(1065)
const H=[255,255,255],W=[200,200,200],Z=[128,128,128]
async function Y(e,t,r,i,a,o,s){var l,c
const u=t.legendOptions,d=u&&u.customValues,f=s||await async function(e,t){var n
if("flow"===e.type)return Object(U.f)(e,t)
if("pie-chart"===e.type)return new q.a({color:null,outline:null!=(n=e.outline)&&n.width?e.outline:new B.a})
let r=null,i=null
if("simple"===e.type)r=e.symbol
else if("class-breaks"===e.type){const t=e.classBreakInfos
r=t&&t[0]&&t[0].symbol,i=t.length>1}else if("unique-value"===e.type){const t=e.uniqueValueInfos
r=t&&t[0]&&t[0].symbol,i=t.length>1}return!r||function(e){return!!e&&(Object(m.c)(e)?!!e.symbolLayers&&e.symbolLayers.some(e=>e&&"fill"===e.type):e.type.includes("fill"))}(r)?null:(r=r.clone(),(t||i)&&(r.type.includes("3d")?X(r):K(r)),r)}(e,r),h=!!f,p=!!d,b=null!=t.minSize&&null!=t.maxSize,y=t.stops&&t.stops.length>1,g=!!t.target
if(!h||!p&&!(b||y&&!g))return
const v=Object(P.j)(f)
let O=null,w=null,j=null
w=v&&!y?Object(z.d)([t.minDataValue,t.maxDataValue]):d||await async function(e,t,r,i){const a=(await Promise.resolve().then(n.bind(null,1107))).getSizeRangeAtScale(e,r,i),o=a&&Q(a)
if(!a&&!o)return
let s=o.map(t=>function(e,t,n){const r=n.minSize,i=n.maxSize,a=t.minDataValue,o=t.maxDataValue
let s=null
return s=e<=r?a:e>=i?o:(e-r)/(i-r)*(o-a)+a,s}(t,e,a))
s=Object(z.d)(s)
for(let n=1;n<s.length-1;n++){const a=await ee(e,t,s[n],s[n-1],r,i)
a&&(s[n]=a[0],o[n]=a[1])}return s}(t,f,i,a)
const _=null==e?void 0:e.authoringInfo,S="univariate-color-size"===(null==_?void 0:_.type),E=S&&"above-and-below"===(null==_?void 0:_.univariateTheme)
if(!w&&y&&(w=t.stops.map(e=>e.value),O=t.stops.some(e=>!!e.label),"flow"===e.type&&(w=Object(z.d)(w)),O&&(j=t.stops.map(e=>e.label))),v&&(null==(l=w)?void 0:l.length)>2&&!E&&(w=[w[0],w[w.length-1]]),!w)return null
S&&5!==(null==(c=w)?void 0:c.length)&&(w=Q({minSize:w[0],maxSize:w[w.length-1]}))
const x=v?function(e,t){const n=null==e?void 0:e.authoringInfo,r="univariate-color-size"===(null==n?void 0:n.type)
let i=[12,30]
if(r){const e=t[0],n=t[t.length-1],r=12,a=30
i=t.map(t=>r+(t-e)/(n-e)*(a-r))}return r&&"below"===(null==n?void 0:n.univariateTheme)&&i.reverse(),i}(e,w):null,I=Object(P.i)(f),C=O?null:function(e,t){const n=e.length-1
return e.map((e,r)=>Object(U.d)(e,r,n,t))}(w,o)
return(await Promise.all(w.map(async(n,r)=>{const o=v?x[r]:await te(t,f,n,i,a)
return{value:n,symbol:ne(E&&"class-breaks"===e.type?J(e,r):f,o),label:O?j[r]:C[r],size:o,outlineSize:I}}))).reverse()}function J(e,t){const n=e.classBreakInfos,r=n.length,i=r<2||!(t>=2)?n[0].symbol.clone():n[r-1].symbol.clone()
return e.visualVariables.some(e=>"color"===e.type)&&(i.type.includes("3d")?X(i):K(i)),i}function X(e){"line-3d"===e.type?e.symbolLayers.forEach(e=>{e.material={color:Z}}):e.symbolLayers.forEach(e=>{"icon"!==e.type||e.resource&&e.resource.href?e.material={color:W}:(e.material={color:H},e.outline={color:Z,size:1.5})})}function K(e){const t=Object(G.b)()
if("cim"===e.type)Object(A.a)(e,new h.a(W))
else if(e.type.includes("line"))e.color=Z
else if(e.color=t?Z:H,"simple-marker"===e.type)if(e.outline){var n,r
"#ffffff"===(null==(n=e.outline)||null==(r=n.color)?void 0:r.toHex())&&(e.outline.color=Z)}else e.outline={color:Z,width:1.5}}function Q(e){const t=e.minSize,n=(e.maxSize-t)/4,r=[]
for(let e=0;e<5;e++)r.push(t+n*e)
return r}async function ee(e,t,n,r,i,a){const o=await te(e,t,n,i,a),s=await te(e,t,r,i,a),l=Object(z.b)(n),c=l.fractional
let u=l.integer,d=null,f=null
n>0&&n<1&&(d=10**c,u=Object(z.b)(n*=d).integer)
for(let r=u-1;r>=0;r--){const l=10**r
let c=Math.floor(n/l)*l,u=Math.ceil(n/l)*l
null!=d&&(c/=d,u/=d)
let h=(c+u)/2;[,h]=Object(z.d)([c,h,u],{indexes:[1]})
const p=await te(e,t,c,i,a),b=await te(e,t,u,i,a),m=await te(e,t,h,i,a),y=Object(z.c)(o,p,s,null),g=Object(z.c)(o,b,s,null),v=Object(z.c)(o,m,s,null)
let O=y.previous<=20,w=g.previous<=20
if(O&&w&&(y.previous<=g.previous?(O=!0,w=!1):(w=!0,O=!1)),O?f=[c,p]:w?f=[u,b]:v.previous<=20&&(f=[h,m]),f)break}return f}async function te(e,t,r,i,a){const{getSize:o}=await Promise.resolve().then(n.bind(null,1107))
return o(e,r,{scale:i,view:a,shape:"simple-marker"===t.type?t.style:null})}function ne(e,t){const n=e.clone()
if(Object(m.c)(n))Object(P.j)(n)||n.symbolLayers.forEach(e=>{"fill"!==e.type&&(e.size=t)})
else if(function(e){return"esri.symbols.SimpleMarkerSymbol"===e.declaredClass}(n))n.size=t
else if(function(e){return"esri.symbols.PictureMarkerSymbol"===e.declaredClass}(n)){const e=n.width,r=n.height
n.height=t,n.width=t*(e/r)}else!function(e){return"esri.symbols.SimpleLineSymbol"===e.declaredClass}(n)?function(e){return"esri.symbols.TextSymbol"===e.declaredClass}(n)&&n.font&&(n.font.size=t):n.width=t
return n}var re=n(2544),ie=n(1073)
const ae=/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i,oe=new y.a({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch"}),se=new q.a({size:6,outline:{color:[128,128,128,.5],width:.5}}),le=new ie.a({style:"solid"})
function ce(e){return"flow"===e.type}function ue(e){return"vector-field"===e.type}function de(e){return"raster-colormap"===e.type}function fe(e){return"raster-stretch"===e.type}function he(e){return"raster-shaded-relief"===e.type}function pe(e){return"esri.renderers.SimpleRenderer"===e.declaredClass}function be(e){return"esri.renderers.ClassBreaksRenderer"===e.declaredClass}function me(e){return"esri.renderers.UniqueValueRenderer"===e.declaredClass}function ye(e){return"esri.renderers.HeatmapRenderer"===e.declaredClass}function ge(e){return"esri.renderers.PointCloudClassBreaksRenderer"===e.declaredClass}function ve(e){return"esri.renderers.PointCloudStretchRenderer"===e.declaredClass}function Oe(e){return"esri.renderers.PointCloudUniqueValueRenderer"===e.declaredClass}function we(e){return"esri.renderers.DotDensityRenderer"===e.declaredClass}function je(e){return"esri.renderers.PieChartRenderer"===e.declaredClass}function _e(e){return"esri.layers.SubtypeGroupLayer"===e.declaredClass}function Se(e){return"esri.layers.MapImageLayer"===e.declaredClass}function Ee(e){return"esri.layers.ImageryLayer"===e.declaredClass}function xe(e){return"esri.layers.ImageryTileLayer"===e.declaredClass}const Ie=new q.a({style:"path",path:"M10,5 L5,0 0,5 M5,0 L5,15",size:15,outline:{width:1,color:[85,85,85,1]}})
let Ce={},Le=class extends d.a{constructor(e){super(e),this._handles=new i.a,this._hasColorRamp=!1,this._hasOpacityRamp=!1,this._hasSizeRamp=!1,this._webStyleSymbolCache=new Map,this._dotDensityUrlCache=new Map,this._scaleDrivenSizeVariable=null,this._hasClusterSizeVariable=!1,this.children=new f.a,this.layerView=null,this.layer=null,this.legendElements=[],this.parent=null,this.hideLayersNotInCurrentView=!1,this.keepCacheOnDestroy=!1,this.respectLayerVisibility=!0,this.sublayerIds=[],this.title=null,this.view=null}initialize(){const e=()=>this.notifyChange("ready")
this._handles.add([Object(o.b)(()=>this.children,"change",t=>{const{added:n,removed:r}=t,i=this._handles
n.forEach(t=>{const n="activeLayerInfo-ready-watcher-"+t.layer.uid
i.add(Object(o.f)(()=>t.ready,e,o.a),n)}),r.forEach(e=>i.remove(e.layer.uid)),e()})]),this.keepCacheOnDestroy||(Ce={})}destroy(){this._handles.destroy(),this._handles=null,this._webStyleSymbolCache=null,this._dotDensityUrlCache=null,this._scaleDrivenSizeVariable=null,this.keepCacheOnDestroy||(Ce=null)}get effectList(){const e=this.layer
let t=null
return"effect"in e&&e.effect&&(t=new _.a,t.effect=e.effect,t.endTransitions(),t.scale=this.scale),t}get opacity(){var e
const t=this.layer.opacity,n=null==(e=this.parent)?void 0:e.opacity,r=this.layer.parent,i=r&&"uid"in r?this._getParentLayerOpacity(r):null
return null!=n?n*t:null!=i?i*t:t}get ready(){return null===this.layer||(this.children.length>0?this._isGroupActive():this.legendElements.length>0)}get scale(){return this.view&&this.view.scale}get isScaleDriven(){const e=this.layer
if(null===e)return!1
if("effect"in e&&e.effect&&Array.isArray(e.effect))return!0
if("featureReduction"in e&&e.featureReduction){if("cluster"===e.featureReduction.type)return!0
if("binning"===e.featureReduction.type&&"renderer"in e.featureReduction&&e.featureReduction.renderer)return this._isRendererScaleDriven(e.featureReduction.renderer)}return"renderer"in e&&e.renderer?this._isRendererScaleDriven(e.renderer):this._isLayerScaleDriven(this.layer)}get version(){return this._get("version")+1}async buildLegendElementsForFeatureCollections(e){if(this.hideLayersNotInCurrentView&&!await this._isLayerInCurrentView())return this.legendElements=[],void this.notifyChange("ready")
const t=Array.from(e,e=>{if(function(e){return"esri.layers.FeatureLayer"===e.declaredClass}(e))return this._getRendererLegendElements(e.renderer,{title:e.title})
if(e.featureSet&&e.featureSet.features.length){const t=e.layerDefinition,n=t&&t.drawingInfo,r=n&&Object(C.a)(n.renderer),i=oe.read(t.geometryType)
return r?this._getRendererLegendElements(r,{title:e.name,geometryType:i}):(g.a.getLogger(this.declaredClass).warn("drawingInfo not available!"),null)}return null})
try{const e=[]
await Object(v.g)(t).then(t=>{t.forEach(({value:t})=>t&&e.push(...t))}),this.legendElements=e,this.notifyChange("ready")}catch(e){g.a.getLogger(this.declaredClass).warn("error while building legend for layer!",e)}}async buildLegendElementsForRenderer(e){try{const t=!this.hideLayersNotInCurrentView||await this._isLayerInCurrentView()
this.legendElements=t?await this._getRendererLegendElements(e):[],this.notifyChange("ready")}catch(e){g.a.getLogger(this.declaredClass).warn("error while building legend for layer!",e)}}async buildLegendElementsForFeatureReduction(e){try{const t=!this.hideLayersNotInCurrentView||await this._isLayerInCurrentView()
this.legendElements=t?await this._getLegendElementsForFeatureReduction(e):[],this.notifyChange("ready")}catch(e){g.a.getLogger(this.declaredClass).warn("error while building legend for layer!",e)}}async buildLegendElementsForTools(){const e=this.layer
if(function(e){return"esri.layers.VoxelLayer"===e.declaredClass}(e))this._constructLegendElementsForVoxellayer()
else if(function(e){return"esri.layers.WMTSLayer"===e.declaredClass}(e))this._constructLegendElementsForWMTSlayer()
else if(function(e){return"esri.layers.WMSLayer"===e.declaredClass}(e))await this._constructLegendElementsForWMSSublayers()
else if(function(e){return"esri.layers.BuildingSceneLayer"===e.declaredClass}(e))await this._constructLegendElementsForBuildingSceneLayer()
else if(Se(e)||function(e){return"esri.layers.TileLayer"===e.declaredClass}(e)||_e(e))await this._constructLegendElementsForSublayers()
else{this._handles.remove("imageryLayers-watcher")
let r="default"
var t,n
Ee(e)&&(r=((null==e||null==(t=e.renderingRule)?void 0:t.functionName)||"default")+"_"+(null!=(n=e.bandIds)&&n.length?e.bandIds.join(""):"###")),await this._getLegendLayers(`${e.uid}-${r}`).then(async t=>{this.legendElements=[],this.notifyChange("ready")
const n=t.map(async t=>{if(Ee(e)||xe(e)){const t=Object(o.f)(()=>["renderingRule"in e&&e.renderingRule,e.bandIds],()=>Object(v.f)(async()=>{Ce.default=null,e.renderer?await this.buildLegendElementsForRenderer(e.renderer):await this.buildLegendElementsForTools()})())
this._handles.add(t,"imageryLayers-watcher")}const n=this._generateSymbolTableElementForLegendLayer(t)
n&&n.infos.length&&(Ee(e)&&(n.title=e.title),this.legendElements.push(n)),this.notifyChange("ready")})
await Object(v.g)(n)}).catch(e=>{g.a.getLogger(this.declaredClass).warn("Request to server for legend has failed!",e)})}}async _isLayerInCurrentView(){const e=this.layer,t=this.layerView,n=t&&"createQuery"in t&&"queryFeatureCount"in t
if(!(n||t&&"createQuery"in e&&"queryFeatureCount"in e))return!0
await Object(o.h)(()=>!t.updating)
const r=n?"createQuery"in t&&t.createQuery():"createQuery"in e&&e.createQuery()
return r.geometry=this.view.extent,0!==(n?"queryFeatureCount"in t&&await t.queryFeatureCount(r):"queryFeatureCount"in e&&await e.queryFeatureCount(r))}_getParentLayerOpacity(e){let t=1
const n=e.parent
return n&&"uid"in n&&(t=this._getParentLayerOpacity(n)),e.opacity*t}_isGroupActive(){const e=this.children
return!!e.length&&e.some(e=>e.ready)}_isRendererScaleDriven(e){if("dot-density"===e.type)return!0
const t="valueExpression"in e&&e.valueExpression
if(ae.test(t))return!0
const n="visualVariables"in e&&e.visualVariables
return!!n&&n.some(e=>this._isScaleDrivenSizeVariable(e))}_isScaleDrivenSizeVariable(e){if(e&&"size"!==e.type)return!1
const t=e,n=t.minSize,r=t.maxSize
return"object"==typeof n&&n?this._isScaleDrivenSizeVariable(n):"object"==typeof r&&r?this._isScaleDrivenSizeVariable(r):!!t.expression||ae.test(t.valueExpression)}_isLayerScaleDriven(e){if("minScale"in e&&e.minScale>0||"maxScale"in e&&e.maxScale>0)return!0
if("sublayers"in e&&e.sublayers)return e.sublayers.some(e=>this._isLayerScaleDriven(e))
const t=e.parent
if(!1===e.loaded&&t&&Se(t)&&"source"in e&&e.source&&"map-layer"===e.source.type)for(const n of t.sourceJSON.layers)if(n.id===e.source.mapLayerId&&(n.minScale>0||n.maxScale>0))return!0
return!1}async _constructLegendElementsForVoxellayer(){var e
this.legendElements=[],this._handles.remove("voxel-style-watcher"),this._handles.remove("voxel-current-variable")
const t=this.layer
this._handles.add(Object(o.f)(()=>t.currentVariableId,()=>this._constructLegendElementsForVoxellayer()),"voxel-current-variable"),this._handles.add(Object(o.f)(()=>t.getVariableStyles(),()=>this._constructLegendElementsForVoxellayer()),"voxel-style-watcher")
const n=Object(a.u)(t.getVariableStyle(null)),r=[]
if(n)if(null!=(e=n.uniqueValues)&&e.length){const e=[]
n.uniqueValues.forEach(t=>{t.enabled&&e.push({label:t.label||""+t.value,value:t.value,symbol:new ie.a({color:t.color,outline:null})})}),e.length&&r.push({type:"symbol-table",title:n.label,infos:e})}else if(n.transferFunction){const{colorStops:e,stretchRange:t}=n.transferFunction,i=e.toArray().reverse(),a=t.map((e,t)=>`${0===t?U.c:U.b} ${Object(re.b)(e)}`).reverse(),o=i.map(e=>({color:e.color,value:null,label:null}))
o[0].label=a[0],o[o.length-1].label=a[1],r.push({type:"color-ramp",title:n.label,infos:o,preview:Object(k.c)(i.map(e=>e.color))})}const i=t.opacity,s=r.reduce((e,t)=>e.concat(this._getAllInfos(t)),[]).filter(e=>!(null==e||!e.symbol)).map(e=>this._getSymbolPreview(e,i))
await Object(v.g)(s),this.legendElements=r,this.notifyChange("ready")}_constructLegendElementsForWMTSlayer(){this.legendElements=[],this._handles.remove("wmts-activeLayer-watcher")
const e=this.layer.activeLayer
if(this._handles.add(Object(o.f)(()=>{const{layer:e}=this
return e&&"activeLayer"in e&&e.activeLayer},()=>this._constructLegendElementsForWMTSlayer()),"wmts-activeLayer-watcher"),e.styleId&&e.styles){let t=null
e.styles.some(n=>e.styleId===n.id&&(t=n.legendUrl,!0)),t&&(this.legendElements=[{type:"symbol-table",title:e.title,infos:[{src:t,opacity:this.opacity}]}])}this.notifyChange("ready")}async _constructLegendElementsForWMSSublayers(){this.legendElements=[],this._handles.remove("wms-sublayers-watcher")
const e=this.layer
let t=null;(e.customParameters||e.customLayerParameters)&&(t={...e.customParameters,...e.customLayerParameters}),this._handles.add(Object(o.f)(()=>{const{layer:e}=this
return e&&"sublayers"in e&&e.sublayers},()=>this._constructLegendElementsForWMSSublayers()),"wms-sublayers-watcher"),this.legendElements=await this._generateLegendElementsForWMSSublayers(e.sublayers,t),this.notifyChange("ready")}async _generateLegendElementsForWMSSublayers(e,t){const n=[]
this._handles.add(e.on("change",()=>this._constructLegendElementsForWMSSublayers()),"wms-sublayers-watcher")
const r=e.toArray()
for(const e of r){const r=Object(o.f)(()=>[e.title,e.visible,e.legendEnabled],()=>this._constructLegendElementsForWMSSublayers())
if(this._handles.add(r,"wms-sublayers-watcher"),!this.respectLayerVisibility||e.visible&&e.legendEnabled){const r=await this._generateSymbolTableElementForWMSSublayer(e,t)
r&&r.infos.length&&n.unshift(r)}}return n}async _generateSymbolTableElementForWMSSublayer(e,t){if(!e.legendUrl&&e.sublayers){const n=(await this._generateLegendElementsForWMSSublayers(e.sublayers,t)).filter(e=>e)
return{type:"symbol-table",title:e.title,infos:n}}return this._generateSymbolTableElementForLegendUrl(e,t)}async _generateSymbolTableElementForLegendUrl(e,t){var n
let r=e.legendUrl
if(!r)return
const i={type:"symbol-table",title:e.title||e.name||e.id&&e.id+"",infos:[]}
t&&(r=Object(w.e)(r,t))
let a=null
const o=null==(n=e.layer)?void 0:n.opacity
try{a=(await Object(b.default)(r,{responseType:"image"})).data,a&&(a.style.opacity=o)}catch{}return i.infos.push({src:r,preview:a,opacity:o}),i}_getLegendLayers(e,t){const n=Ce&&Ce[e]
return n?Promise.resolve(n):this._legendRequest(t).then(t=>{const n=t.layers
return Ce[e]=n,n})}_legendRequest(e){const t=this.layer
let n={f:"json",dynamicLayers:e}
if(Ee(t)){const e=t.exportImageServiceParameters.renderingRule
if(e&&(n.renderingRule=JSON.stringify(e.rasterFunctionDefinition||e.toJSON())),t.bandIds&&(n.bandIds=t.bandIds.join()),t.raster||t.viewId||t.customParameters){const{raster:e,viewId:r,customParameters:i}=t
n={raster:e,viewId:r,...n,...i}}}let r=t.url.replace(/(\/)+$/,"")
if("version"in t&&t.version>=10.01){const e=r.indexOf("?")
e>-1?r=r.substring(0,e)+"/legend"+r.substring(e):r+="/legend"}else{const e=r.toLowerCase().indexOf("/rest/"),t=r.substring(0,e)+r.substring(e+5,r.length)
r="https://utility.arcgis.com/sharing/tools/legend?soapUrl="+encodeURI(t)+"&returnbytes=true"}return Object(b.default)(r,{query:n}).then(e=>e.data)}async _constructLegendElementsForBuildingSceneLayer(){this.legendElements=[],this._handles.remove("sublayers-watcher")
const e=this.layer
this._handles.add(Object(o.f)(()=>e.sublayers,()=>this._constructLegendElementsForBuildingSceneLayer()),"sublayers-watcher")
try{this.legendElements=await this._generateLegendElementsForBuildingSublayers(e.sublayers,this.opacity),this.notifyChange("ready")}catch(e){g.a.getLogger(this.declaredClass).warn("Request to server for legend has failed!",e)}}async _generateLegendElementsForBuildingSublayers(e,t){let n=[]
this._handles.add(e.on("change",()=>this._constructLegendElementsForBuildingSceneLayer()),"sublayers-watcher")
const r=e.toArray()
for(const e of r){const r=Object(o.f)(()=>["renderer"in e&&e.renderer,e.opacity,e.title,e.visible],()=>this._constructLegendElementsForBuildingSceneLayer())
if(this._handles.add(r,"sublayers-watcher"),!this.respectLayerVisibility||e.visible){const r=e&&null!=e.opacity?e.opacity:null,i=null!=r?r*t:t
if("building-group"===e.type){const t={type:"symbol-table",title:e.title,infos:[]},r=await this._generateLegendElementsForBuildingSublayers(e.sublayers,i)
t.infos.push(...r),n=[t,...n]}else e.renderer&&(n=[...await this._getRendererLegendElements(e.renderer,{title:e.title,opacity:i,sublayer:e}),...n])}}return n.filter(e=>!!e&&(!("infos"in e)||e.infos.length>0))}async _constructLegendElementsForSublayers(){this.legendElements=[],this._handles.remove("sublayers-watcher")
const e=this.layer
this._handles.add(Object(o.f)(()=>e.sublayers,()=>this._constructLegendElementsForSublayers),"sublayers-watcher")
try{this.legendElements=await this._generateLegendElementsForSublayers(e.sublayers,this.opacity),this.notifyChange("ready")}catch(e){g.a.getLogger(this.declaredClass).warn("Request to server for legend has failed!",e)}}async _generateLegendElementsForSublayers(e,t,n){const r=this.layer
let i=[]
this._handles.add(e.on("change",()=>this._constructLegendElementsForSublayers()),"sublayers-watcher")
let a=e.toArray()
!n&&this.sublayerIds&&this.sublayerIds.length&&(a=this.sublayerIds.map(e=>r.findSublayerById(e)).filter(Boolean))
for(const e of a){const a=Object(o.f)(()=>[e.renderer,e.opacity,e.title,e.visible,e.legendEnabled],()=>this._constructLegendElementsForSublayers())
if(this._handles.add(a,"sublayers-watcher"),!this.respectLayerVisibility||e.visible&&e.legendEnabled&&this._isSublayerInScale(e)){const a=e&&null!=e.opacity?e.opacity:null,o=null!=a?a*t:t,s=!!_e(r)||e.originIdOf("renderer")>j.a.SERVICE
if(e.renderer&&!e.sublayers&&s)await e.load(),i=[...await this._getRendererLegendElements(e.renderer,{title:e.title,opacity:o,sublayer:e}),...i]
else{const t=await this._generateSymbolTableElementForSublayer(e,o,n)
t&&i.unshift(t)}}}return i.filter(e=>!!e&&(!("infos"in e)||e.infos.length>0))}async _generateSymbolTableElementForSublayer(e,t,n){if(!n){n=new Map
const t=this.layer,r=e.source
let i=null
if(r&&("map-layer"!==r.type||r.mapLayerId!==e.id||r.gdbVersion&&r.gdbVersion!==("gdbVersion"in t&&t.gdbVersion))||e.originIdOf("renderer")>j.a.SERVICE||e.originIdOf("labelingInfo")>j.a.SERVICE||e.originIdOf("labelsVisible")>j.a.SERVICE){const e=new E.a({layer:this.layer})
i=e.hasDynamicLayers?e.dynamicLayers:null,e.destroy()}const a=i||t.uid+"-default";(await this._getLegendLayers(a,i)).forEach(e=>n.set(e.layerId,e))}const r=n.get(e.id)
if((!r||null!=r&&r.subLayerIds&&r.defaultVisibility)&&e.sublayers){const r=await this._generateLegendElementsForSublayers(e.sublayers,t,n)
return{type:"symbol-table",title:e.title,infos:r}}return this._generateSymbolTableElementForLegendLayer(r,e,t)}_generateSymbolTableElementForLegendLayer(e,t,n){var r
if(!e||!e.legend||this.respectLayerVisibility&&!this._isLegendLayerInScale(e,t))return null
const i=null==t?void 0:t.renderer
let a=(null==t?void 0:t.title)||e.layerName
if(i&&(!t||(null==t?void 0:t.originIdOf("renderer"))>j.a.SERVICE)){const e=(null==t?void 0:t.title)||this._getRendererTitle(i,t)
e&&(a&&"string"!=typeof e&&"title"in e&&(e.title=a),a=e)}const o={type:"symbol-table",title:a,legendType:e.legendType?e.legendType:null,infos:[]},s=t?this._sanitizeLegendForSublayer(e.legend.slice(),t):e.legend
return(null==(r=e.legendGroups)?void 0:r.length)>0?e.legendGroups.forEach(t=>{var r
const i={type:"symbol-table",title:t.heading,legendType:e.legendType?e.legendType:null,infos:this._generateSymbolTableElementInfosForLegendLayer(s.filter(e=>e.groupId===t.id),e.layerId,n)};(null==(r=i.infos)?void 0:r.length)>0&&o.infos.push(i)}):o.infos=this._generateSymbolTableElementInfosForLegendLayer(s,e.layerId,n),o.infos.length>0?o:null}_generateSymbolTableElementInfosForLegendLayer(e,t,n){return e.map(e=>{let r=e.url
if(e.imageData&&e.imageData.length>0)r="data:image/png;base64,"+e.imageData
else{if(0===r.indexOf("http"))return null
r=Object(p.a)(`${this.layer.url}/${t}/images/${r}`)}return{label:e.label,src:r,opacity:null!=n?n:this.opacity,width:e.width,height:e.height}}).filter(e=>!!e)}_isSublayerInScale(e){const t=e.minScale||0,n=e.maxScale||0
return!(t>0&&t<this.scale||n>this.scale)}_isLegendLayerInScale(e,t){const n=t||this.layer
let r=null,i=null,a=!0
return!n.minScale&&0!==n.minScale||!n.maxScale&&0!==n.maxScale?(0===e.minScale&&n.tileInfo&&(r=n.tileInfo.lods[0].scale),0===e.maxScale&&n.tileInfo&&(i=n.tileInfo.lods[n.tileInfo.lods.length-1].scale)):(r=Math.min(n.minScale,e.minScale)||n.minScale||e.minScale,i=Math.max(n.maxScale,e.maxScale)),(r>0&&r<this.scale||i>this.scale)&&(a=!1),a}_sanitizeLegendForSublayer(e,t){if("version"in this.layer&&this.layer.version<10.1||0===e.length)return e
const n=t.renderer,r=e.some(e=>e.values)
let i=null,a=null
return r&&e.some((e,t)=>(e.values||(i=t,a=e,a.label||(a.label="others")),null!=a)),n?"unique-value"===n.type?a&&(e.splice(i,1),e.push(a)):"class-breaks"===n.type&&(a&&e.splice(i,1),e.reverse(),a&&e.push(a)):a&&(e.splice(i,1),e.push(a)),e}async _getRendererLegendElements(e,t={}){if(!function(e,t){return pe(e)||be(e)||me(e)||ye(e)||we(e)||je(e)?"2d"===t.type||Object(L.a)(e):fe(e)||de(e)||he(e)||ge(e)||ve(e)||Oe(e)||ue(e)||ce(e)}(e,this.view))return g.a.getLogger(this.declaredClass).warn(`Renderer of type '${e.type}' not supported!`),[]
if(function(e){return ge(e)||ve(e)||Oe(e)||function(e){return"esri.renderers.PointCloudRGBRenderer"===e.declaredClass}(e)}(e))return this._constructPointCloudRendererLegendElements(e,t)
if(we(e))return this._constructDotDensityRendererLegendElements(e)
const n=await this._loadRenderer(e)
return je(n)?this._constructPieChartRendererLegendElements(n):this._constructRendererLegendElements(n,t)}async _getLegendElementsForFeatureReduction(e){let t=null
return"binning"===e.type?t=e.renderer:"cluster"===e.type&&(t=this._getClusterRenderer(e)),t?this._getRendererLegendElements(t):[]}_getPointCloudRendererTitle(e){return e.legendOptions&&e.legendOptions.title||e.field}_constructPointCloudRendererLegendElements(e,t={}){const n=t.title,r=[]
let i=null,a=null
if(ge(e))i={type:"symbol-table",title:n||this._getPointCloudRendererTitle(e),infos:[]},e.colorClassBreakInfos.forEach(e=>{i.infos.unshift({label:e.label||e.minValue+" - "+e.maxValue,value:[e.minValue,e.maxValue],symbol:this._getAppliedCloneSymbol(se,e.color)})})
else if(ve(e)){const t=e.stops
let r=null
if(t.length&&(1===t.length&&(r=t[0].color),!r)){const e=t[0].value,n=t[t.length-1].value
null!=e&&null!=n&&(r=Object(D.a)(e+(n-e)/2,t))}i={type:"symbol-table",title:null,infos:[{label:null,value:null,symbol:this._getAppliedCloneSymbol(se,r||se.color)}]}
const o=Object(D.c)(e.stops)
a={type:"color-ramp",title:n||this._getPointCloudRendererTitle(e),infos:o,preview:Object(k.c)(o.map(e=>e.color))}}else Oe(e)&&(i={type:"symbol-table",title:n||this._getPointCloudRendererTitle(e),infos:[]},e.colorUniqueValueInfos.forEach(e=>{i.infos.push({label:e.label||e.values.join(", "),value:e.values.join(", "),symbol:this._getAppliedCloneSymbol(se,e.color)})}))
i&&i.infos.length&&r.push(i),a&&a.infos.length&&r.push(a)
const o=r.reduce((e,t)=>e.concat(t.infos),[]).filter(e=>!!e.symbol).map(t=>this._getSymbolPreview(t,this.opacity,{symbolConfig:{applyColorModulation:!!e.colorModulation}}))
return Object(v.g)(o).then(()=>r)}_getElementInfoForDotDensity(e,t){var n
const{backgroundColor:r,outline:i,dotSize:a}=e,o=null==(n=this.effectList)?void 0:n.effects.map(e=>e.toJSON()),s=Object(S.a)(o),l=a+"-"+t+"-"+r+"-"+(i&&JSON.stringify(i.toJSON()))+"-"+s,c=this._dotDensityUrlCache,u=c.has(l)?c.get(l):Object(k.d)(e,t)
c.set(l,u)
const d={shape:{type:"image",x:0,y:0,width:u.width,height:u.height,src:u.src},fill:null,stroke:null,offset:[0,0]},f=Object(R.b)([[d]],[u.width,u.height],{effectView:this.effectList})
return{opacity:1,src:u.src,preview:f,width:u.width,height:u.height}}_constructDotDensityRendererLegendElements(e){const t=e.calculateDotValue(this.view.scale),n=e.legendOptions&&e.legendOptions.unit,r={type:"symbol-table",title:{value:t&&Math.round(t),unit:n||""},infos:[]}
return e.attributes.forEach(t=>{const n=this._getElementInfoForDotDensity(e,t.color)
n.label=t.label||t.valueExpressionTitle||t.field,r.infos.push(n)}),Promise.resolve([r])}async _constructPieChartRendererLegendElements(e){var t,n,r
const i=this.layer.opacity,a=[]
let o=null
const s=e.outline
e.attributes.forEach(e=>{const t=new q.a({color:e.color,outline:s}),n=e.label||e.valueExpressionTitle||e.field
a.push({label:n,symbol:t})})
const l=a.length?[...a]:[]
if(null!=(t=e.othersCategory)&&t.color&&0!==(null==(n=e.othersCategory)?void 0:n.threshold)){const t=new q.a({color:e.othersCategory.color,outline:s})
o=e.othersCategory.label||"Other",a.push({label:o,symbol:t})}if(null!=(r=e.defaultColor)&&r.a){const t=new q.a({color:e.defaultColor,outline:s})
a.push({label:e.defaultLabel,symbol:t})}const c=await this._getVisualVariableLegendElements(e,this.layer)||[]
if(a.length){var u
c.unshift({type:"symbol-table",title:null,infos:a})
const t=l.filter(e=>e.label!==o).map(e=>e.symbol.color).filter(Boolean),n=Object(k.e)(t,{holePercentage:e.holePercentage,backgroundColor:null==(u=e.backgroundFillSymbol)?void 0:u.color,effectList:this.effectList,outline:s})
c.unshift({type:"pie-chart-ramp",title:this._getRendererTitle(e,this.layer),infos:a,preview:n})}const d=c.reduce((e,t)=>e.concat(this._getAllInfos(t)),[]).filter(e=>!(null==e||!e.symbol||null!=e&&e.preview)).map(e=>this._getSymbolPreview(e,i,{effectList:this.effectList}))
return await Object(v.g)(d),c}async _constructRendererLegendElements(e,t={}){const{title:n,sublayer:r}=t,i=r||this.layer
this._hasColorRamp=!1,this._hasOpacityRamp=!1,this._hasSizeRamp=!1,this._scaleDrivenSizeVariable=null
const o=await this._getVisualVariableLegendElements(e,i)||[],s={type:"symbol-table",title:n||this._getRendererTitle(e,i),infos:[]}
let l=null,c=!1
const u=new Set
if(ce(e)&&!this._hasSizeRamp){const t=await Object(U.f)(e)
s.infos.push({label:null,symbol:t})}else if(function(e){var t
return"univariate-color-size"===(null==(t="authoringInfo"in e&&(null==e?void 0:e.authoringInfo))?void 0:t.type)}(e)){let t=n
const r=function(e){const t="authoringInfo"in e&&(null==e?void 0:e.authoringInfo)
return"univariate-color-size"===(null==t?void 0:t.type)&&"above-and-below"===(null==t?void 0:t.univariateTheme)}(e)?"univariate-above-and-below-ramp":"univariate-color-size-ramp",i=o.findIndex(e=>"color-ramp"===e.type),a=-1!==i?o.splice(i,1)[0]:null,s=o.findIndex(e=>"size-ramp"===e.type),l=-1!==s?o.splice(s,1)[0]:null,c=[]
a&&(t=a.title,c.push(a)),l&&(t=l.title,c.push(l)),c.length>0&&o.push({type:r,title:t,infos:c})}else if(ye(e)){const t=Object(V.a)(e)
o.push({type:"heatmap-ramp",title:n||this._getRendererTitle(e,i),infos:t,preview:Object(k.c)(t.map(e=>e.color),{effectList:this.effectList})})}else if(me(e)){const t=e&&e.authoringInfo
if(t&&"relationship"===t.type){const{focus:n,numClasses:r,field1:a,field2:l}=t
if(r&&a&&l){const t=[a,l]
let c=Object(F.b)(n)||0
for(const e of t){const{field:t,normalizationField:n,label:r}=e,a=r||{field:this._getFieldAlias(t,i),normField:n&&this._getFieldAlias(n,i)},o=Ie.clone()
o.angle=c,s.infos.push({label:a,symbol:o}),u.add(o),c+=90}const d=Object(F.a)({focus:n,numClasses:r,infos:e.uniqueValueInfos})
o.unshift(d)}}else if(Ee(this.layer)||xe(this.layer))e.uniqueValueInfos.forEach(e=>{e.symbol&&s.infos.push({label:e.label||e.value,value:e.value,symbol:e.symbol})})
else{const{field:t,field2:r,field3:a,fieldDelimiter:o,valueExpression:l,defaultSymbol:u}=e,d=!(!t&&!l||!r&&!a),f=[]
if(e.uniqueValueGroups.forEach(e=>{const n={type:"symbol-table",title:e.heading,infos:[]}
e.classes.forEach(e=>{const{symbol:s,values:c}=e
if(s){const u=[],f=[]
for(const e of c){const{value:n,value2:s,value3:c}=e,h=[],p=[];(t||l)&&(h.push(n),p.push(this._getDomainName(t,n,i))),r&&(h.push(s),p.push(this._getDomainName(r,s,i))),a&&(h.push(c),p.push(this._getDomainName(a,c,i))),u.push(d?h.join(o||""):h[0]),f.push(p.join(" - "))}const h=u.join(", ")
let p=e.label
if(!p){const e=f.filter(Boolean)
p=e.length?e.join(", "):h}n.infos.push({label:p,value:h,symbol:s})}}),n.infos.length&&f.push(n)}),f.length){const t=f[0]
1===f.length&&"title"in t&&!t.title?s.infos.push(...t.infos):(u&&(f.push({type:"symbol-table",infos:[{label:e.defaultLabel||"others",symbol:u}]}),c=!0),s.infos.push(...f)),n||e.legendOptions&&e.legendOptions.title||e.valueExpressionTitle||(s.title=null)}}e.defaultSymbol&&!c&&(s.infos.push({label:e.defaultLabel||"others",symbol:e.defaultSymbol}),c=!0)}else if(be(e))l=this._isUnclassedRenderer(e),(!l||!this._hasSizeRamp)&&(e.classBreakInfos.forEach(e=>{e.symbol&&s.infos.unshift({label:e.label||(l?null:e.minValue+" - "+e.maxValue),value:[e.minValue,e.maxValue],symbol:e.symbol})}),l&&(s.title=null),this._updateInfosforClassedSizeRenderer(e,s.infos)),e.defaultSymbol&&!l&&(s.infos.push({label:e.defaultLabel||"others",symbol:e.defaultSymbol}),c=!0)
else if(fe(e))if(xe(this.layer)||function(e){return"esri.layers.WCSLayer"===e.declaredClass}(this.layer)){const t=this._constructTileImageryStretchRendererElements(e)
!function(e){return"stretch-ramp"===e.type}(t)?s.infos=t:o.push(t)}else{const t=this.layer
let n,r
e.statistics&&e.statistics.length&&(n=null!=e.statistics[0].min?e.statistics[0].min:e.statistics[0][0],r=null!=e.statistics[0].max?e.statistics[0].max:e.statistics[0][1])
let i=[]
const l=Object(a.u)(t.renderingRule?await t.generateRasterInfo(t.renderingRule):t.serviceRasterInfo),c=l.keyProperties.BandProperties,u=Object(I.b)(l.pixelType)
if(1===l.bandCount){var d
const i=(null==(d=t.bandIds)?void 0:d[0])||0
n=null!=n?n:l.statistics?l.statistics[i].min:u[0],r=null!=r?r:l.statistics?l.statistics[i].max:u[1],n||r?o.push(this._getStretchLegendElements(e,{min:n,max:r})):this._getServerSideLegend()}else t.bandIds&&1===t.bandIds.length?(n=null!=n?n:l.statistics?l.statistics[t.bandIds[0]].min:u[0],r=null!=r?r:l.statistics?l.statistics[t.bandIds[0]].max:u[1],n||r?o.push(this._getStretchLegendElements(e,{min:n,max:r})):this._getServerSideLegend()):l.bandCount>=3?c&&c.length>=l.bandCount?t.bandIds&&3===t.bandIds.length?(i=t.bandIds.map(e=>c[e].BandName),s.infos=this._createSymbolTableElementMultiBand(i)):"lerc"===t.format?(i=[0,1,2].map(e=>c[e].BandName),s.infos=this._createSymbolTableElementMultiBand(i)):this._getServerSideLegend():"lerc"===t.format?(i=["band1","band2","band3"],s.infos=this._createSymbolTableElementMultiBand(i)):this._getServerSideLegend():this._getServerSideLegend()}else if(de(e))e.colormapInfos.forEach(e=>{s.infos.push({label:e.label,value:e.value,symbol:this._getAppliedCloneSymbol(le,e.color)})})
else if(pe(e)){let n=e.symbol
switch(t.geometryType){case"point":n="pointSymbol"in i&&i.pointSymbol
break
case"polyline":n="lineSymbol"in i&&i.lineSymbol
break
case"polygon":n="polygonSymbol"in i&&i.polygonSymbol}const r=this._hasClusterSizeVariable&&this._getClusterSymbol()||!this._hasSizeRamp
e.symbol&&r&&s.infos.push({label:e.label,symbol:n})}else if(ue(e)){e.outputUnit&&(this.title="("+e.toJSON().outputUnit+")"),s.title=e.attributeField
const t=e.getClassBreakInfos()
null!=t&&t.length?t.forEach(e=>{s.infos.push({label:e.minValue+" - "+e.maxValue,symbol:e.symbol})}):s.infos.push({label:e.attributeField,symbol:e.getDefaultSymbol()})}else he(e)&&o.push(this._getStretchLegendElements(e,{min:0,max:255}))
const f=e.defaultSymbol
!f||c||pe(e)||l&&!this._hasColorRamp&&!this._hasSizeRamp&&!this._hasOpacityRamp||o.push({type:"symbol-table",infos:[{label:e.defaultLabel||"others",symbol:f}]}),s.infos.length&&o.unshift(s)
const h=null==t.opacity?this.opacity:t.opacity,p=this._isTallSymbol("visualVariables"in e&&e.visualVariables),b=Ee(this.layer)||xe(this.layer),m=o.reduce((e,t)=>e.concat(this._getAllInfos(t)),[]).filter(e=>!(null==e||!e.symbol)).map(e=>this._getSymbolPreview(e,h,{isDefault:e.symbol===f,applyScaleDrivenSize:!u.has(e.symbol),symbolConfig:{isTall:p,isSquareFill:b},effectList:u.has(e.symbol)?null:this.effectList}))
return e=null,await Object(v.g)(m),o}_getServerSideLegend(){setTimeout(()=>this.buildLegendElementsForTools(),0)}_getAllInfos(e){const t=null==e?void 0:e.infos
return t?t.reduce((e,t)=>e.concat(this._getAllInfos(t)),[]):[e]}_constructTileImageryStretchRendererElements(e){var t,n
const r=this.layer,{rasterInfo:i}=r.raster,a=i.bandCount||e.statistics.length
let o,s,l=[]
const c=i.keyProperties&&i.keyProperties.BandProperties,u=null!=e&&null!=(t=e.statistics)&&t.length?e.statistics:null==i?void 0:i.statistics
if(u)o=void 0!==u[0].min?u[0].min:u[0][0],s=u[0].max||u[0][1]
else{const e=Object(I.b)(i.pixelType)
o=e[0],s=e[1]}if(r.hasStandardTime()&&(o=r.getStandardTimeValue(o),s=r.getStandardTimeValue(s)),1===i.bandCount||1===(null==(n=r.bandIds)?void 0:n.length))return this._getStretchLegendElements(e,{min:o,max:s})
function d(e){var t
const n=(null!=r&&null!=(t=r.bandIds)&&t.length?r.bandIds:Array.from(Array(Math.min(i.bandCount,3)).keys())).map(t=>e&&e[t]&&e[t].BandName||"band"+(t+1))
return n.length<3?n.push(n[1]):n.length>3&&n.splice(3),n}return l=c&&c.length>=a?d(c):d(),this._createSymbolTableElementMultiBand(l)}_getStretchLegendElements(e,t){const n=e.colorRamp,r=Object(D.d)(n,t)
return{type:"stretch-ramp",title:"",infos:r,preview:Object(k.c)(r.map(e=>e.color))}}_getClusterSymbol(){var e
const t=this.layer,n="featureReduction"in t&&t.featureReduction,r=n&&"symbol"in n&&n.renderer
return r&&!0!==(null==r||null==(e=r.authoringInfo)?void 0:e.isAutoGenerated)?null:n&&"symbol"in n&&n.symbol}async _getSizeLegendElement(e,t,n,r){return{type:"size-ramp",title:this._hasClusterSizeVariable?this._getClusterTitle(t):e,infos:await Y(n,t,await Object(U.e)(n),this.scale,this.view.type,r,this._hasClusterSizeVariable?this._getClusterSymbol():null)}}_createSymbolTableElementMultiBand(e){const t=[],n=["red","green","blue"]
return e.forEach((e,r)=>{var i
t.push({label:{colorName:n[r],bandName:e},src:U.a[r],opacity:null!=(i=this.opacity)?i:1})}),t}_updateInfosforClassedSizeRenderer(e,t){const n=e.authoringInfo&&"class-breaks-size"===e.authoringInfo.type,r=e.classBreakInfos.some(e=>Object(P.j)(e.symbol))
if(n&&r){const n=30,r=12,i=e.classBreakInfos.length,a=(n-r)/(i>1?i-1:i)
t.forEach((e,t)=>{e.size=n-a*t})}}_isTallSymbol(e){let t=!1,n=!1
if(e)for(let r=0;r<e.length&&(!t||!n);r++){const i=e[r]
"size"===i.type&&("height"===i.axis&&(t=!0),"width-and-depth"===i.axis&&(n=!0))}return t&&n}async _getSymbolPreview(e,t,r){let i=null!=r&&r.isDefault||null!=e.size||!this._hasSizeRamp?e.size:Object(O.i)(T.a.size)
if(this._scaleDrivenSizeVariable&&null!=r&&r.applyScaleDrivenSize){const{getSize:t}=await Promise.resolve().then(n.bind(null,1107))
i=t(this._scaleDrivenSizeVariable,null,{view:this.view.type,scale:this.scale,shape:"simple-marker"===e.symbol.type?e.symbol.style:null})}return Object(k.f)(e.symbol,{size:i,opacity:t,scale:!1,symbolConfig:null==r?void 0:r.symbolConfig,effectView:null==r?void 0:r.effectList}).then(t=>(e.preview=t,e)).catch(()=>(e.preview=null,e))}_getClusterRenderer(e){var t
this._hasClusterSizeVariable=!1
const n="renderer"in this.layer&&this.layer.renderer,r=(null==(t=e.renderer)?void 0:t.clone())||(null==n?void 0:n.clone()),i=Object(a.u)(function(e,t){if(!e||!("visualVariables"in e)||!e.visualVariables)return null
const n=e.visualVariables.find(e=>"size"===e.type),r=((e,t)=>{const n=e.featuresTilingScheme.getClosestInfoForScale(e.scale).level
return null!=t&&t.levels?t.levels[n]:null})(t,n)
return r?new N.a({field:n.field,minSize:r[2].size,minDataValue:r[2].value,maxSize:r[3].size,maxDataValue:r[3].value}):null}(this.layerView._effectiveRenderer,this.view))
var o
if(i&&"visualVariables"in r&&!(null==(o=r.visualVariables)?void 0:o.some(e=>"size"===e.type&&"outline"!==e.target&&!ae.test(e.valueExpression)))){if("clusterMinSize"in e&&"clusterMaxSize"in e){const{clusterMinSize:t,clusterMaxSize:n}=e
i.legendOptions=new M.a({showLegend:t!==n})}const t=r.visualVariables||[]
r.visualVariables=t.concat([i]),this._hasClusterSizeVariable=!0}return r}async _loadRenderer(e){const t=[],n=e.clone(),r=await Object(U.e)(n)
if(be(n)||me(n)){const e=(n.classBreakInfos||n.uniqueValueInfos).map(e=>this._fetchSymbol(e.symbol,r).then(t=>{e.symbol=t}).catch(()=>{e.symbol=null}))
Array.prototype.push.apply(t,e)}return t.push(this._fetchSymbol(n.symbol||n.defaultSymbol,n.defaultSymbol?null:r).then(e=>{this._applySymbolToRenderer(n,e,pe(n))}).catch(()=>{this._applySymbolToRenderer(n,null,pe(n))})),Object(v.g)(t).then(()=>n)}_applySymbolToRenderer(e,t,n){n?e.symbol=t:e.defaultSymbol=t}async _fetchSymbol(e,t){if(!e)throw new Error
if("web-style"===e.type){const n=this._webStyleSymbolCache
try{const r=await("2d"===this.view.type?e.fetchCIMSymbol({cache:n}):e.fetchSymbol({cache:n}))
return this._getAppliedCloneSymbol(r,t)}catch{throw g.a.getLogger(this.declaredClass).warn("Fetching web-style failed!"),new Error}}return this._getAppliedCloneSymbol(e,t)}_getAppliedCloneSymbol(e,t){if(!e||!t)return e
const n=e.clone(),r=t&&t.toRgba()
return n.type.includes("3d")?this._applyColorTo3dSymbol(n,r):"cim"===n.type?Object(A.a)(n,t):n.color&&(n.color=new h.a(r||n.color)),n}_applyColorTo3dSymbol(e,t){t&&e.symbolLayers.forEach(e=>{e&&(e.material||(e.material={}),e.material.color=new h.a(t))})}async _getVisualVariableLegendElements(e,t){if(!("visualVariables"in e)||!e.visualVariables||"vector-field"===e.type)return null
const n=e.visualVariables,r=[],i=[],o=[]
for(const e of n)"color"===e.type?r.push(e):"size"===e.type?i.push(e):"opacity"===e.type&&o.push(e)
const s=[...r,...i,...o]
let l,c
if(0===r.length&&be(e)&&e.classBreakInfos&&1===e.classBreakInfos.length){const t=e.classBreakInfos[0]
l=t&&t.symbol}if(0===r.length&&pe(e)&&(l=e.symbol),l)if(l.type.includes("3d")){const e=l.symbolLayers.getItemAt(0)
"water"===e.type?Object(a.l)(e.color)&&(c=e.color):Object(a.l)(e.material)&&Object(a.l)(e.material.color)&&(c=e.material.color)}else l.url||(c=l.color)
const u=this.effectList
return(await Promise.all(s.map(async n=>{if(!n.legendOptions||!1!==n.legendOptions.showLegend){const r=ce(e)?n.field:this._getRampTitle(n,t)
let i=null
const a="getField"in t&&t.getField&&t.getField(n.field),o=a&&Object(x.p)(a)
if("color"===n.type){const e=await Object(D.b)(n,null,o)
i={type:"color-ramp",title:r,infos:e,preview:Object(k.c)(e.map(e=>e.color),{effectList:u})},this._hasColorRamp||(this._hasColorRamp=!(null==i.infos||!i.infos.length))}else if("size"===n.type&&"outline"!==n.target)ae.test(n.valueExpression)?this._hasClusterSizeVariable||(this._scaleDrivenSizeVariable=n):(i=await this._getSizeLegendElement(r,n,e,o),this._hasSizeRamp||(this._hasSizeRamp=!(null==i.infos||!i.infos.length)))
else if("opacity"===n.type){const e=await Object(D.b)(n,c,o)
i={type:"opacity-ramp",title:r,infos:e,preview:Object(k.c)(e.map(e=>e.color),{effectList:u})},this._hasOpacityRamp||(this._hasOpacityRamp=!(null==i.infos||!i.infos.length))}return i&&i.infos?i:null}}))).filter(e=>!!e)}_getDomainName(e,t,n){if(e&&"function"!=typeof e){const r="getField"in n&&n.getField&&n.getField(e),i=r&&"getFieldDomain"in n&&n.getFieldDomain?n.getFieldDomain(r.name):null
return i&&"coded-value"===i.type?i.getName(t):null}return null}_getClusterTitle(e){const t=this.layer,n=e.field
if("featureReduction"in t&&t.featureReduction&&"cluster"===t.featureReduction.type){const e=t.featureReduction,r="popupTemplate"in e&&e.popupTemplate,i=r&&r.fieldInfos
if(i)for(const e of i)if(e.fieldName===n)return"cluster_count"===n?e.label||{showCount:!0}:e.label}return{showCount:!0}}_getRampTitle(e,t){let n=e.field,r=e.normalizationField,i=!1,a=!1,o=!1,s=null
n="function"==typeof n?null:n,r="function"==typeof r?null:r
const l=e.legendOptions&&e.legendOptions.title
if(null!=l)s=l
else if(e.valueExpressionTitle)s=e.valueExpressionTitle
else{if("renderer"in t&&t.renderer&&"authoringInfo"in t.renderer&&t.renderer.authoringInfo&&t.renderer.authoringInfo.visualVariables){const e=t.renderer.authoringInfo.visualVariables
for(let t=0;t<e.length;t++){const n=e[t]
if("color"===n.type){if("ratio"===n.style){i=!0
break}if("percent"===n.style){a=!0
break}if("percent-of-total"===n.style){o=!0
break}}}}s={field:n&&this._getFieldAlias(n,t),normField:r&&this._getFieldAlias(r,t),ratio:i,ratioPercent:a,ratioPercentTotal:o}}return s}_getRendererTitle(e,t){const n=e
if(n.legendOptions&&n.legendOptions.title)return n.legendOptions.title
if(n.valueExpressionTitle)return n.valueExpressionTitle
let r=n.field,i=null,a=null
if(be(n)&&(i=n.normalizationField,a="percent-of-total"===n.normalizationType),r="function"==typeof r?null:r,i="function"==typeof i?null:i,me(n)){const{field2:e,field3:i,fieldDelimiter:a}=n
let o=r&&this._getFieldAlias(r,t)
return e&&(o=`<${o}>${a}<${this._getFieldAlias(e,t)}>`,i&&(o=`${o}${a}<${this._getFieldAlias(i,t)}>`)),o}let o=null
return(r||i)&&(o={field:r&&this._getFieldAlias(r,t),normField:i&&this._getFieldAlias(i,t),normByPct:a}),o}_getFieldAlias(e,t){var n,r,i
const a="popupTemplate"in t&&t.popupTemplate,o=a&&a.fieldInfos
let s=null
o&&o.some(t=>e===t.fieldName&&(s=t,!0))
let l=null
"getField"in t&&t.getField?l=t.getField(e):"fieldsIndex"in t&&t.fieldsIndex&&(l=t.fieldsIndex.get(e))
let c=null
const u="featureReduction"in t&&t.featureReduction
u&&(!s&&"popupTemplate"in u&&u.popupTemplate&&u.popupTemplate.fieldInfos&&u.popupTemplate.fieldInfos.some(t=>{var n
return(null==e?void 0:e.toLowerCase())===(null==(n=t.fieldName)?void 0:n.toLowerCase())&&(s=t,!0)}),"fields"in u&&u.fields&&(c=u.fields.find(t=>{var n
return(null==(n=t.name)?void 0:n.toLowerCase())===(null==e?void 0:e.toLowerCase())})))
const d=s||l||c
let f=null
return d&&(f=(null==(n=s)?void 0:n.label)||(null==(r=l)?void 0:r.alias)||(null==(i=c)?void 0:i.alias)||"name"in d&&d.name||"fieldName"in d&&d.fieldName),f}_isUnclassedRenderer(e){const t=e.visualVariables
let n=!1
return be(e)&&e.classBreakInfos&&1===e.classBreakInfos.length&&t&&(n=e.field?t.some(t=>!(!t||e.field!==t.field||(e.normalizationField||t.normalizationField)&&e.normalizationField!==t.normalizationField)):!!t.length),n}}
Object(r.a)([Object(s.b)()],Le.prototype,"children",void 0),Object(r.a)([Object(s.b)({readOnly:!0})],Le.prototype,"effectList",null),Object(r.a)([Object(s.b)()],Le.prototype,"layerView",void 0),Object(r.a)([Object(s.b)()],Le.prototype,"layer",void 0),Object(r.a)([Object(s.b)()],Le.prototype,"legendElements",void 0),Object(r.a)([Object(s.b)({readOnly:!0})],Le.prototype,"opacity",null),Object(r.a)([Object(s.b)()],Le.prototype,"parent",void 0),Object(r.a)([Object(s.b)({readOnly:!0,dependsOn:[]})],Le.prototype,"ready",null),Object(r.a)([Object(s.b)()],Le.prototype,"hideLayersNotInCurrentView",void 0),Object(r.a)([Object(s.b)()],Le.prototype,"keepCacheOnDestroy",void 0),Object(r.a)([Object(s.b)()],Le.prototype,"respectLayerVisibility",void 0),Object(r.a)([Object(s.b)({readOnly:!0})],Le.prototype,"scale",null),Object(r.a)([Object(s.b)()],Le.prototype,"sublayerIds",void 0),Object(r.a)([Object(s.b)({readOnly:!0})],Le.prototype,"isScaleDriven",null),Object(r.a)([Object(s.b)()],Le.prototype,"title",void 0),Object(r.a)([Object(s.b)({readOnly:!0,dependsOn:["ready"],value:0})],Le.prototype,"version",null),Object(r.a)([Object(s.b)()],Le.prototype,"view",void 0),Le=Object(r.a)([Object(c.a)("esri.widgets.Legend.support.ActiveLayerInfo")],Le)
const Me=Le
var Ae=n(1005)
const Te="all-layer-views",Re="legend-properties",ke=f.a.ofType(Me),Pe=["esri.layers.BuildingSceneLayer","esri.layers.CSVLayer","esri.layers.FeatureLayer","esri.layers.GeoJSONLayer","esri.layers.GeoRSSLayer","esri.layers.GroupLayer","esri.layers.HeatmapLayer","esri.layers.ImageryLayer","esri.layers.ImageryTileLayer","esri.layers.MapImageLayer","esri.layers.OGCFeatureLayer","esri.layers.PointCloudLayer","esri.layers.StreamLayer","esri.layers.SceneLayer","esri.layers.SubtypeGroupLayer","esri.layers.TileLayer","esri.layers.VoxelLayer","esri.layers.WFSLayer","esri.layers.WMSLayer","esri.layers.WMTSLayer","esri.layers.WCSLayer","esri.layers.LinkChartLayer","esri.layers.knowledgeGraph.KnowledgeGraphSubLayer"],Ne=["view.basemapView.baseLayerViews","view.groundView.layerViews","view.layerViews","view.basemapView.referenceLayerViews"]
let De=class extends d.a{constructor(e){super(e),this._handles=new i.a,this._layerViewByLayerId={},this._layerInfosByLayerViewId={},this._activeLayerInfosByLayerViewId={},this._activeLayerInfosWithNoParent=new f.a,this.activeLayerInfos=new ke,this.basemapLegendVisible=!1,this.groundLegendVisible=!1,this.hideLayersNotInCurrentView=!1,this.keepCacheOnDestroy=!1,this.respectLayerVisibility=!0,this.layerInfos=[],this.view=null}initialize(){this._handles.add(Object(o.f)(()=>this.view,()=>this._viewHandles(),o.a),"view"),this._handles.add(Object(Ae.c)(()=>this._refresh()))}destroy(){this._destroyViewActiveLayerInfos(),this._handles.destroy(),this._handles=null,this.view=null}get state(){return this.get("view.ready")?"ready":"disabled"}_viewHandles(){this._handles.remove("state"),this.view&&this._handles.add(Object(o.f)(()=>this.state,()=>this._stateHandles(),o.a),"state")}_stateHandles(){this._resetAll(),"ready"===this.state&&this._watchPropertiesAndAllLayerViews()}_resetAll(){this._handles.remove([Te,Re]),this._destroyViewActiveLayerInfos(),this.activeLayerInfos.removeAll()}_destroyViewActiveLayerInfos(){Object.keys(this._activeLayerInfosByLayerViewId).forEach(this._destroyViewActiveLayerInfo,this)}_destroyViewActiveLayerInfo(e){this._handles.remove(e)
const t=this._activeLayerInfosByLayerViewId[e]
delete this._activeLayerInfosByLayerViewId[e],t&&t.parent&&t.parent.children.remove(t)}_watchPropertiesAndAllLayerViews(){const{allLayerViews:e}=this.view
e.length&&this._refresh(),this._handles.add(e.on("change",e=>this._allLayerViewsChangeHandle(e)),Te),this._handles.add(Object(o.f)(()=>[this.layerInfos,this.basemapLegendVisible,this.groundLegendVisible],()=>this._propertiesChangeHandle()),Re)}_allLayerViewsChangeHandle(e){e.removed.forEach(e=>this._destroyViewActiveLayerInfo(e.uid)),this._refresh()}_propertiesChangeHandle(){this._destroyViewActiveLayerInfos(),this._refresh()}_refresh(){this._layerInfosByLayerViewId={},this.activeLayerInfos.removeAll(),this._generateLayerViews().filter(this._filterLayerViewsByLayerInfos,this).filter(this._isLayerViewSupported,this).forEach(this._generateActiveLayerInfo,this),this._sortActiveLayerInfos(this.activeLayerInfos)}_sortActiveLayerInfos(e){if(e.length<2)return
const t=[]
e.forEach(n=>{if(!n.parent){const r=n.layer.parent,i=r&&"uid"in r&&this._layerViewByLayerId[r.uid],a=i&&this._activeLayerInfosByLayerViewId[i.uid]
a&&e.includes(a)&&(t.push(n),n.parent=a,a.children.add(n),this._sortActiveLayerInfos(a.children))}}),e.removeMany(t)
const n={}
this.view.allLayerViews.forEach((e,t)=>n[e.layer.uid]=t),e.sort((e,t)=>{const r=n[e.layer.uid]||0
return(n[t.layer.uid]||0)-r})}_generateLayerViews(){const e=[]
return Ne.filter(this._filterLayerViews,this).map(this.get,this).filter(e=>null!=e).forEach(this._collectLayerViews("layerViews",e)),e}_filterLayerViews(e){const t=!this.basemapLegendVisible&&("view.basemapView.baseLayerViews"===e||"view.basemapView.referenceLayerViews"===e),n=!this.groundLegendVisible&&"view.groundView.layerViews"===e
return!t&&!n}_collectLayerViews(e,t){const n=r=>(r&&r.forEach(r=>{t.push(r),n(r[e])}),t)
return n}_filterLayerViewsByLayerInfos(e){const t=this.layerInfos
return!t||!t.length||t.some(t=>this._hasLayerInfo(t,e))}_hasLayerInfo(e,t){const n=this._isLayerUIDMatching(e.layer,t.layer.uid)
return n&&(this._layerInfosByLayerViewId[t.uid]=e),n}_isLayerUIDMatching(e,t){return e&&(e.uid===t||this._hasLayerUID(e.layers,t))}_hasLayerUID(e,t){return e&&e.some(e=>this._isLayerUIDMatching(e,t))}_isLayerViewSupported(e){return!!Pe.includes(e.layer.declaredClass)&&(this._layerViewByLayerId[e.layer.uid]=e,!0)}_generateActiveLayerInfo(e){this._isLayerActive(e)?this._buildActiveLayerInfo(e):(this._handles.remove(e.uid),this._handles.add(Object(o.f)(()=>{var t
return[e.legendEnabled,null==(t=e.layer)?void 0:t.legendEnabled]},()=>this._layerActiveHandle(e)),e.uid))}_layerActiveHandle(e){this._isLayerActive(e)&&(this._handles.remove(e.uid),this._buildActiveLayerInfo(e))}_isLayerActive(e){return!this.respectLayerVisibility||e.legendEnabled&&e.get("layer.legendEnabled")}_buildActiveLayerInfo(e){var t
const n=e.layer,r=e.uid,i=this._layerInfosByLayerViewId[r]
let a=this._activeLayerInfosByLayerViewId[r]
if(!a){const t=i&&void 0!==i.title&&i.layer.uid===n.uid
a=new Me({layer:n,layerView:e,title:t?i.title:n.title,view:this.view,respectLayerVisibility:this.respectLayerVisibility,hideLayersNotInCurrentView:this.hideLayersNotInCurrentView,keepCacheOnDestroy:this.keepCacheOnDestroy,sublayerIds:i&&i.sublayerIds||[]}),this._activeLayerInfosByLayerViewId[r]=a}const s=n.parent&&"uid"in n.parent&&this._layerViewByLayerId[null==(t=n.parent)?void 0:t.uid]
if(a.parent=this._activeLayerInfosByLayerViewId[null==s?void 0:s.uid],!this._handles.has(r)){const t=[Object(o.f)(()=>n.title,e=>this._titleHandle(e,a)),Object(o.f)(()=>[n.opacity,"renderer"in n&&n.renderer,"pointSymbol"in n&&n.pointSymbol,"lineSymbol"in n&&n.lineSymbol,"polygonSymbol"in n&&n.polygonSymbol],()=>this._constructLegendElements(a)),Object(o.g)(()=>{var e
return!0===(null==(e=this.view)?void 0:e.stationary)},()=>this._scaleHandle(a),o.a),Object(o.f)(()=>e._effectiveRenderer,()=>this._constructLegendElements(a)),Object(o.f)(()=>"effect"in n&&n.effect,()=>this._constructLegendElements(a))]
if(this.respectLayerVisibility){const r=Object(o.f)(()=>e.legendEnabled,e=>this._legendEnabledHandle(e,a)),i=Object(o.f)(()=>n.legendEnabled,e=>this._legendEnabledHandle(e,a))
t.push(r,i)}this._handles.add(t,r)}a.isScaleDriven||this._constructLegendElements(a),this._addActiveLayerInfo(a)}_titleHandle(e,t){t.title=e,this._constructLegendElements(t)}_legendEnabledHandle(e,t){e?this._addActiveLayerInfo(t):this._removeActiveLayerInfo(t)}_scaleHandle(e){(e.isScaleDriven||e.hideLayersNotInCurrentView)&&this._constructLegendElements(e)}_addActiveLayerInfo(e){const{layerView:t,layer:n}=e
if(this._isLayerActive(t)&&!this.activeLayerInfos.includes(e)){const t=e.parent
if(t)t.children.includes(e)||t.children.push(e),this._sortActiveLayerInfos(t.children)
else{var r
const t=null==(r=this.layerInfos)?void 0:r.some(e=>e.layer.uid===n.uid)
n.parent&&"uid"in n.parent&&!t?this._activeLayerInfosWithNoParent.add(e):(this.activeLayerInfos.add(e),this._sortActiveLayerInfos(this.activeLayerInfos))}if(this._activeLayerInfosWithNoParent.length){const e=[]
this._activeLayerInfosWithNoParent.forEach(t=>{const n=t.layer.parent,r=n&&"uid"in n&&this._layerViewByLayerId[null==n?void 0:n.uid],i=this._activeLayerInfosByLayerViewId[null==r?void 0:r.uid]
i&&(e.push(t),t.parent=i)}),e.length&&(this._activeLayerInfosWithNoParent.removeMany(e),e.forEach(e=>this._addActiveLayerInfo(e)))}}}_removeActiveLayerInfo(e){const t=e.parent
t?t.children.remove(e):this.activeLayerInfos.remove(e)}_constructLegendElements(e){const t=e.layer
"featureCollections"in t&&t.featureCollections?e.buildLegendElementsForFeatureCollections(t.featureCollections):"featureReduction"in t&&t.featureReduction&&"renderer"in t.featureReduction&&("binning"===t.featureReduction.type||"cluster"===t.featureReduction.type)?e.buildLegendElementsForFeatureReduction(t.featureReduction):"renderer"in t&&t.renderer&&!("sublayers"in t)?e.buildLegendElementsForRenderer(t.renderer):"url"in t&&t.url?e.buildLegendElementsForTools():e.children.forEach(e=>this._constructLegendElements(e))}}
Object(r.a)([Object(s.b)({type:ke})],De.prototype,"activeLayerInfos",void 0),Object(r.a)([Object(s.b)()],De.prototype,"basemapLegendVisible",void 0),Object(r.a)([Object(s.b)()],De.prototype,"groundLegendVisible",void 0),Object(r.a)([Object(s.b)()],De.prototype,"hideLayersNotInCurrentView",void 0),Object(r.a)([Object(s.b)()],De.prototype,"keepCacheOnDestroy",void 0),Object(r.a)([Object(s.b)()],De.prototype,"respectLayerVisibility",void 0),Object(r.a)([Object(s.b)()],De.prototype,"layerInfos",void 0),Object(r.a)([Object(s.b)({readOnly:!0})],De.prototype,"state",null),Object(r.a)([Object(s.b)()],De.prototype,"view",void 0),De=Object(r.a)([Object(c.a)("esri.widgets.Legend.LegendViewModel")],De)
const Ve=De
var Fe=n(1507)
const ze="esri-legend--card",Ue={activated:ze+"__carousel-indicator--activated",base:ze,stacked:"esri-legend--stacked",carouselTitle:ze+"__carousel-title",indicator:ze+"__carousel-indicator",intervalSeparator:ze+"__interval-separator",imageryLayerStretchedImage:ze+"__imagery-layer-image--stretched",imageLabel:ze+"__image-label",layerCaption:ze+"__layer-caption",labelElement:ze+"__label-element",layerRow:ze+"__layer-row",labelCell:ze+"__label-cell",message:ze+"__message",rampLabel:ze+"__ramp-label",section:ze+"__section",relationshipSection:ze+"__relationship-section",serviceCaptionText:ze+"__service-caption-text",serviceContent:ze+"__service-content",service:ze+"__service",groupLayer:ze+"__group-layer",groupLayerChild:ze+"__group-layer-child",symbol:ze+"__symbol",sizeRampRow:ze+"__size-ramp-row",symbolRow:ze+"__symbol-row",symbolCell:ze+"__symbol-cell",indicatorContainer:ze+"__carousel-indicator-container",intervalSeparatorsContainer:ze+"__interval-separators-container",relationshipLabelContainer:ze+"__relationship-label-container",labelContainer:ze+"__label-container",serviceCaptionContainer:ze+"__service-caption-container",symbolContainer:ze+"__symbol-container",sizeRampContainer:ze+"__size-ramp-container",sizeRampPreview:ze+"__size-ramp-preview",pieChartRampPreview:ze+"__pie-chart-ramp-preview",rampContainer:"esri-legend__ramps",sizeRampHorizontal:"esri-legend__size-ramp--horizontal",rampLabelsContainer:"esri-legend__ramp-labels",layerInfo:"esri-legend__layer-cell esri-legend__layer-cell--info",univariateAboveAndBelowColorRamp:"esri-univariate-above-and-below-ramp__color--card",hidden:"esri-hidden"}
var $e=n(1612),Ge=(n(1344),n(1347)),qe=n(1018)
const Be=Object(Ge.a)(),He="esri-univariate-above-and-below-ramp__symbol"
function We(e="vertical"){const t="stroke:rgb(200, 200, 200);stroke-width:1"
return"vertical"===e?Object(qe.a)("svg",{height:"4",width:"10"},Object(qe.a)("line",{x1:"0",y1:"2",x2:"10",y2:"2",style:t})):Object(qe.a)("svg",{height:"10",width:"10"},Object(qe.a)("line",{x1:"5",y1:"0",x2:"5",y2:"10",style:t}))}function Ze(e,t="vertical"){const n=document.createElement("div")
return n.style.height="20px",n.className=He,null!=e&&(n.style.opacity=e.toString()),Be.append(n,We.bind(null,t)),n}function Ye(e,t,n="vertical",r){e.infos.forEach((e,i)=>{if(r&&2===i)e.preview=Ze(t,n)
else{const t=Object(O.h)(e.size)+("horizontal"===n?20:10),r="div"===e.preview.tagName.toLowerCase(),i=r?e.preview:document.createElement("div")
i.className=He,"horizontal"===n?i.style.width=t+"px":i.style.height=t+"px",r||i.appendChild(e.preview),e.preview=i}})}function Je(e,t="classic"){const n=e.infos
return"classic"===t?(Object(O.h)(n[0].size)+10)/2:(Object(O.h)(n[0].size)-Object(O.h)(n[n.length-1].size))/2}function Xe(e,t){if(!e)return null
const n=e.infos.map(e=>e.color),r=Object(k.c)("full"===t.type?n:"above"===t.type?n.slice(0,3):n.slice(2,5),{width:t.width,height:t.height,align:t.rampAlignment,effectList:t.effectList})
return r.className="esri-legend__color-ramp",null!=t.opacity&&(r.style.opacity=t.opacity.toString()),r}function Ke(e,t,n,r="vertical"){let i=0
const a=e.infos,o=Math.floor(a.length/2),s="full"===t||"above"===t?0:o,l="full"===t||"below"===t?a.length-1:o
for(let e=s;e<=l;e++)i+=n&&e===o?"horizontal"===r?10:20:Object(O.h)(a[e].size)+("horizontal"===r?20:10)
return Math.round(i)}function Qe(e,t,n,r="vertical"){const i=Ke(e,t,n,r),a=e.infos,o=Math.floor(a.length/2),s="full"===t||"above"===t?0:o,l="full"===t||"below"===t?a.length-1:o,c="full"===t?a[s].size+a[l].size:"above"===t?a[s].size:a[l].size,u=n?"vertical"===r?20:10:0,d="vertical"===r?10*("full"===t?2:1):20*("full"===t?2:1)
return Math.round(i-(Object(O.h)(c)/2+u/2+d/2))}function et(e,t,n="vertical"){var r,i
const a=e.infos
let o=a.find(({type:e})=>"size-ramp"===e),s=a.find(({type:e})=>"color-ramp"===e)
return o&&(o={...o},o.infos=[...o.infos],Ye(o,t,n,!0)),s&&(s={...s},s.infos=[...s.infos]),"horizontal"===n&&(null!=(r=o)&&r.infos.reverse(),null!=(i=s)&&i.infos.reverse()),{sizeRampElement:o,colorRampElement:s}}function tt(e,t="vertical"){var n,r
const i=e.infos
let a=i.find(({type:e})=>"size-ramp"===e),o=i.find(({type:e})=>"color-ramp"===e)
return a&&(a={...a},a.infos=[...a.infos],Ye(a,null,t,!1)),o&&(o={...o},o.infos=[...o.infos]),"horizontal"===t&&(null!=(n=a)&&n.infos.reverse(),null!=(r=o)&&r.infos.reverse()),{sizeRampElement:a,colorRampElement:o}}var nt=n(1115)
function rt(e){e.appendChild(this)}function it(e,t,n){if(!t)return
if("string"==typeof t||"number"==typeof t)return t
if("value"in t||"unit"in t)return Object(nt.a)(e.dotValue,t)
if("colorName"in t&&"bandName"in t)return e[t.colorName]+": "+(e[t.bandName]||t.bandName)
if("showCount"in t)return t.showCount?e.clusterCountTitle:null
let r=null
return n?r=t.ratioPercentTotal?"showRatioPercentTotal":t.ratioPercent?"showRatioPercent":t.ratio?"showRatio":t.normField?"showNormField":t.field?"showField":null:at(t,n)&&(r=t.normField?"showNormField":t.normByPct?"showNormPct":t.field?"showField":null),r?Object(nt.a)("showField"===r?"{field}":e[r],{field:t.field,normField:t.normField}):null}function at(e,t){return!t}function ot(e,t){return!!(t&&"Stretched"===t&&e.version>=10.3&&"esri.layers.ImageryLayer"===e.declaredClass)}var st,lt,ct=n(1458),ut=n(1205),dt=n(1099);(lt=st||(st={})).Auto="auto",lt.Stack="stack",lt.SideBySide="side-by-side"
const ft=window.devicePixelRatio
let ht=class extends u.a{constructor(e,t){super(e,t),this._handles=new i.a,this._hasIndicators=!1,this._selectedSectionName=null,this._sectionNames=[],this._sectionMap=new Map,this.activeLayerInfos=null,this.headingLevel=3,this.layout=st.Stack,this.messages=null,this.messagesCommon=null,this.type="card",this.view=null}initialize(){this.addHandles(Object(o.f)(()=>this.activeLayerInfos,e=>{this._handles.removeAll(),this._watchForSectionChanges(e)}))}destroy(){this._handles.destroy(),this._handles=null}render(){this._hasIndicators=this.layout===st.Auto&&this.view.container.clientWidth<=768||this.layout===st.Stack
const e=this.activeLayerInfos,t=e&&e.toArray().map(e=>this._renderLegendForLayer(e)).filter(e=>!!e)
this._hasIndicators?this._selectedSectionName&&this._sectionNames.includes(this._selectedSectionName)||(this._selectedSectionName=this._sectionNames&&this._sectionNames[0]):this._selectedSectionName=null
const n=this._sectionNames.length,r=this._sectionNames.map((e,t)=>{const r=Object(nt.a)(this.messagesCommon.pagination.pageText,{index:t+1,total:n})
return Object(qe.a)("div",{key:e,role:"tab",id:e,"aria-label":r,"aria-controls":e+"-panel","aria-selected":(this._selectedSectionName===e).toString(),tabIndex:this._selectedSectionName===e?0:-1,title:r,onclick:this._selectSection,onkeydown:this._focusSection,bind:this,class:this.classes(Ue.indicator,{[Ue.activated]:this._selectedSectionName===e}),"data-section-name":e})}),i=this._hasIndicators&&n>1?Object(qe.a)("div",{class:Ue.indicatorContainer,key:"carousel-navigation",role:"tablist"},r):null,a=this._hasIndicators?this._sectionMap.get(this._selectedSectionName):t&&t.length?t:null,o={[Ue.stacked]:this._hasIndicators}
return Object(qe.a)("div",{class:this.classes(Ue.base,o)},a||Object(qe.a)("div",{class:Ue.message},this.messages.noLegend),i)}_selectSection(e){const t=e.target.getAttribute("data-section-name")
t&&(this._selectedSectionName=t)}_focusSection(e){switch(e.key){case"ArrowLeft":case"ArrowRight":this._switchSectionOnArrowPress(e)
break
case"Enter":case" ":this._selectSection(e)}}_switchSectionOnArrowPress(e){const t=e.key,n="ArrowLeft"===t?-1:1,r=e.target.getAttribute("data-section-name"),i=this._sectionNames.indexOf(r),a=this._sectionNames
let o=null;-1!==i&&(a[i+n]?o=document.getElementById(a[i+n]):"ArrowLeft"===t?o=document.getElementById(a[a.length-1]):"ArrowRight"===t&&(o=document.getElementById(a[0])),o&&o.focus())}_watchForSectionChanges(e){if(this._generateSectionNames(),e){e.forEach(e=>{const t=`activeLayerInfo-${e.layer.uid}-version-change`
this._handles.remove(t),this._watchForSectionChanges(e.children),this._handles.add(Object(o.f)(()=>e.version,()=>this._generateSectionNames()),t)})
const t="activeLayerInfos-collection-change"
this._handles.remove(t),this._handles.add(e.on("change",()=>this._watchForSectionChanges(e)),t)}}_generateSectionNames(){this._sectionNames.length=0,this._selectedSectionName=null,this.activeLayerInfos&&this.activeLayerInfos.forEach(this._generateSectionNamesForActiveLayerInfo,this)}_getSectionName(e,t,n){return`${this.id}${e.uid}-type-${t.type}-${n}`}_generateSectionNamesForActiveLayerInfo(e){e.children.forEach(this._generateSectionNamesForActiveLayerInfo,this),e.legendElements&&e.legendElements.forEach((t,n)=>{this._sectionNames.push(this._getSectionName(e.layer,t,n))})}_renderLegendForLayer(e){if(!e.ready)return null
if(e.children.length){const t=e.children.map(e=>this._renderLegendForLayer(e)).toArray()
return Object(qe.a)("div",{key:e.layer.uid,class:this.classes(Ue.service,Ue.groupLayer)},Object(qe.a)("div",{class:Ue.serviceCaptionContainer},e.title),t)}{const t=e.legendElements
if(t&&!t.length)return null
const n=t.some(e=>"relationship-ramp"===e.type),r=t.map((t,r)=>this._renderLegendForElement(t,e,r,n)).filter(e=>!!e)
if(!r.length)return null
const i={[Ue.groupLayerChild]:!!e.parent}
return Object(qe.a)("div",{key:e.layer.uid,class:this.classes(Ue.service,i)},Object(qe.a)("div",{class:Ue.serviceCaptionContainer},Object(qe.a)("div",{class:Ue.serviceCaptionText},e.title)),Object(qe.a)("div",{class:Ue.serviceContent},r))}}_renderLegendForElement(e,t,n,r=!1,i=!1){const a="color-ramp"===e.type,o="opacity-ramp"===e.type,s="size-ramp"===e.type,l=t.layer
let c=null
if("string"==typeof e.title)c=e.title
else if(e.title){const t=e.title,n=it(this.messages,t,a||o)
c=t.title?`${t.title} (${n})`:n}const u=this._getSectionName(l,e,n),d=this._hasIndicators&&!i?Object(qe.a)("div",null,Object(qe.a)(ct.a,{level:this.headingLevel,class:Ue.carouselTitle},t.title),Object(qe.a)(ct.a,{level:Object(ct.b)(this.headingLevel),class:Ue.layerCaption},c)):c?Object(qe.a)(ct.a,{level:this.headingLevel,class:Ue.layerCaption},c):null,f=t.effectList
let h=null
if("symbol-table"===e.type){const n=e.infos.map((n,r)=>this._renderLegendForElementInfo(n,t,e.legendType,r)).filter(e=>!!e)
if(n.length){const e=n[0].properties.classes&&n[0].properties.classes[Ue.symbolRow],t={[Ue.labelContainer]:!e&&!r,[Ue.relationshipLabelContainer]:r}
h=Object(qe.a)("div",{class:this.classes(t)},n)}}else"color-ramp"===e.type||"opacity-ramp"===e.type||"heatmap-ramp"===e.type?h=this._renderLegendForRamp(e,l.opacity,f):s?h=this._renderSizeRamp(e,l.opacity):"pie-chart-ramp"===e.type?h=this._renderPieChartRamp(e):"relationship-ramp"===e.type?h=Object($e.a)(e,this.id,l.opacity,f):"univariate-above-and-below-ramp"===e.type?h=this._renderUnivariateAboveAndBelowRamp(e,l.opacity,f):"univariate-color-size-ramp"===e.type&&(h=this._renderUnivariateColorSizeRamp(e,l.opacity,f))
if(!h)return null
const p=Object(qe.a)("div",{key:u,class:Ue.section,id:u+"-panel",role:"tabpanel","aria-labelledby":u,tabIndex:0},[d,h])
return i||this._sectionMap.set(u,p),p}_renderPieChartRamp(e){return Object(qe.a)("div",{class:Ue.pieChartRampPreview,bind:e.preview,afterCreate:rt})}_renderUnivariateAboveAndBelowRamp(e,t,n){const{sizeRampElement:r,colorRampElement:i}=et(e,t,"horizontal")
if(!r)return null
const a=Ke(r,"full",!0,"horizontal"),o=Qe(r,"above",!0,"horizontal"),s=Qe(r,"below",!0,"horizontal"),l=Xe(i,{width:o,height:12,rampAlignment:"horizontal",opacity:t,type:"above",effectList:n}),c=Xe(i,{width:s,height:12,rampAlignment:"horizontal",opacity:t,type:"below",effectList:n}),u=Je(r,"card"),d=r.infos.map(e=>e.label),f=d.length-1,h=d.map((e,t)=>0===t||t===f?Object(qe.a)("div",{key:t},e):null),p={marginTop:"3px",display:"flex"}
Object($.e)(this.container)?p.marginRight=u+"px":p.marginLeft=u+"px"
const b={width:a+"px",display:"flex",flexDirection:"row",justifyContent:"space-between"}
return Object(qe.a)("div",{class:Ue.layerRow,key:"size-ramp-preview",styles:{display:"flex",flexDirection:"column"}},Object(qe.a)("div",{class:this.classes(Ue.symbolContainer,Ue.sizeRampHorizontal),styles:{display:"flex",flexDirection:"row"}},r.infos.map((e,t)=>Object(qe.a)("div",{key:t,class:Ue.symbol,bind:e.preview,afterCreate:rt}))),l?Object(qe.a)("div",{class:Ue.univariateAboveAndBelowColorRamp,styles:p,key:"color-ramp-preview"},Object(qe.a)("div",{bind:l,afterCreate:rt}),Object(qe.a)("div",{bind:c,afterCreate:rt})):null,Object(qe.a)("div",{class:Ue.layerInfo},Object(qe.a)("div",{class:Ue.rampLabelsContainer,styles:b},h)))}_renderUnivariateColorSizeRamp(e,t,n){const{sizeRampElement:r,colorRampElement:i}=tt(e,"horizontal")
if(!r)return null
const a=Ke(r,"full",!1,"horizontal"),o=Xe(i,{width:Qe(r,"full",!1,"horizontal"),height:12,rampAlignment:"horizontal",opacity:t,type:"full",effectList:n}),s=Je(r,"card"),l=r.infos.length-1,c=r.infos.map((e,t)=>0===t||t===l?Object(qe.a)("div",{key:t},e.label):null),u={marginTop:"3px",display:"flex"}
Object($.e)(this.container)?u.marginRight=s+"px":u.marginLeft=s+"px"
const d={width:a+"px",display:"flex",flexDirection:"row",justifyContent:"space-between"}
return Object(qe.a)("div",{class:Ue.layerRow,key:"size-ramp-preview",styles:{display:"flex",flexDirection:"column"}},Object(qe.a)("div",{class:this.classes(Ue.symbolContainer,Ue.sizeRampHorizontal),styles:{display:"flex",flexDirection:"row"}},r.infos.map((e,t)=>Object(qe.a)("div",{key:t,class:Ue.symbol,bind:e.preview,afterCreate:rt}))),Object(qe.a)("div",{class:Ue.univariateAboveAndBelowColorRamp,styles:u,key:"color-ramp-preview"},Object(qe.a)("div",{bind:o,afterCreate:rt})),Object(qe.a)("div",{class:Ue.layerInfo},Object(qe.a)("div",{class:Ue.rampLabelsContainer,styles:d},c)))}_renderLegendForElementInfo(e,t,n,r){const i=t.layer
if(e.type)return this._renderLegendForElement(e,t,r,!1,!0)
const a=ot(i,n)
if(e.preview){var o,s
if(!e.symbol||!e.symbol.type.includes("simple-fill")){if(!e.label)return Object(qe.a)("div",{key:r,bind:e.preview,afterCreate:rt})
const t={[Ue.symbolCell]:this._hasIndicators}
return Object(qe.a)("div",{key:r,class:this.classes(Ue.layerRow,{[Ue.symbolRow]:this._hasIndicators})},Object(qe.a)("div",{class:this.classes(t),bind:e.preview,afterCreate:rt}),Object(qe.a)("div",{class:this.classes(Ue.imageLabel,{[Ue.labelCell]:this._hasIndicators})},it(this.messages,e.label,!1)||""))}let n=255,a=255,l=255,c=0,u=255,d=255,f=255,h=0
const p=e.symbol.color&&e.symbol.color.a,b=e.symbol.outline&&e.symbol.outline.color&&e.symbol.outline.color.a
p&&(n=e.symbol.color.r,a=e.symbol.color.g,l=e.symbol.color.b,c=e.symbol.color.a*i.opacity),b&&(u=e.symbol.outline.color.r,d=e.symbol.outline.color.g,f=e.symbol.outline.color.b,h=e.symbol.outline.color.a*i.opacity)
const m=null==(o=null==(s=e.symbol.color)?void 0:s.isBright)||o,y=m?"rgba(255, 255, 255, .6)":"rgba(0, 0, 0, .6)",g={background:p?`rgba(${n}, ${a}, ${l}, ${c})`:"none",color:m?"black":"white",textShadow:`-1px -1px 0 ${y},\n                                              1px -1px 0 ${y},\n                                              -1px 1px 0 ${y},\n                                              1px 1px 0 ${y}`,border:b?`1px solid rgba(${u}, ${d}, ${f}, ${h})`:"none",filter:Object(P.f)(t.effectList)}
return Object(qe.a)("div",{key:r,class:Ue.layerRow},Object(qe.a)("div",{class:Ue.labelElement,styles:g}," ",e.label," "))}if(e.src){const t=this._renderImage(e,i,a)
return Object(qe.a)("div",{key:r,class:Ue.layerRow},t,Object(qe.a)("div",{class:Ue.imageLabel},e.label||""))}}_renderImage(e,t,n){const{label:r,src:i,opacity:a}=e,o={[Ue.imageryLayerStretchedImage]:n,[Ue.symbol]:!n},s={opacity:""+(null!=a?a:t.opacity)}
return Object(qe.a)("img",{alt:it(this.messages,r,!1),src:i,border:0,width:e.width,height:e.height,class:this.classes(o),styles:s})}_renderSizeRampLines(e){const t=e.infos,n=t[0],r=t[t.length-1],i=n.symbol,a=this._hasIndicators,o=Object(O.h)(n.size+n.outlineSize)*ft,s=Object(O.h)(r.size+r.outlineSize)*ft,l=a?o:o+50*ft,c=a?o/2+50*ft:o,u=function(e){if(e){if(e.type.includes("3d")){const t=e.symbolLayers&&e.symbolLayers.length
if(!t)return
const n=e.symbolLayers.getItemAt(t-1).get("resource.primitive")
return"triangle"===n||"cone"===n||"tetrahedron"===n}return"triangle"===e.style}}(i),d=function(e){if(e){if(e.type.includes("3d")){const t=e.symbolLayers&&e.symbolLayers.length
if(!t)return
const n=e.symbolLayers.getItemAt(t-1),r=n.resource&&n.resource.primitive
return"circle"===r||"cross"===r||"kite"===r||"sphere"===r||"cube"===r||"diamond"===r}{const t=e.style
return"circle"===t||"diamond"===t||"cross"===t}}}(i),f=document.createElement("canvas")
f.width=l,f.height=c,f.style.width=f.width/ft+"px",f.style.height=f.height/ft+"px"
const h=f.getContext("2d")
if(a){h.beginPath()
const e=0,t=0,n=l/2-s/2,r=c
h.moveTo(e,t),h.lineTo(n,r)
const i=l,a=0,o=l/2+s/2,u=c
h.moveTo(i,a),h.lineTo(o,u)}else{h.beginPath()
const e=0,t=c/2-s/2,n=l,r=0
h.moveTo(e,t),h.lineTo(n,r)
const i=0,a=c/2+s/2,o=l,u=c
h.moveTo(i,a),h.lineTo(o,u)}return h.strokeStyle="#ddd",h.stroke(),Object(qe.a)("div",{bind:f,afterCreate:rt,styles:a?{display:"flex",marginTop:`-${u?0:d?o/2:0}px`,marginBottom:`-${u?s:d?s/2:0}px`}:{display:"flex",marginRight:`-${u?0:d?o/2:0}px`,marginLeft:`-${u?0:d?s/2:0}px`}})}_renderSizeRamp(e,t){const n=e.infos,r=n[0].label,i=n[n.length-1].label
let a=n[0].preview,o=n[n.length-1].preview
const s=this._hasIndicators,l={"flex-direction":s?"column":"row-reverse"}
a&&(a=a.cloneNode(!0),a.style.display="flex"),o&&(o=o.cloneNode(!0),o.style.display="flex")
const c={opacity:null!=t?""+t:""}
return Object(qe.a)("div",{class:this.classes(Ue.layerRow,{[Ue.sizeRampRow]:s})},Object(qe.a)("div",{class:Ue.rampLabel},s?r:i),Object(qe.a)("div",{class:Ue.sizeRampContainer,styles:l},Object(qe.a)("div",{bind:a,afterCreate:rt,class:Ue.sizeRampPreview,styles:c}),this._renderSizeRampLines(e),Object(qe.a)("div",{bind:o,afterCreate:rt,class:Ue.sizeRampContainer,styles:c})),Object(qe.a)("div",{class:Ue.rampLabel},s?i:r))}_renderLegendForRamp(e,t,n){const r=e.infos,i="heatmap-ramp"===e.type,a=r.length-1,o=a>2&&!i?25*a:100,s=o+20,l=r.slice(0).reverse()
l.forEach((e,t)=>{e.offset=i?e.ratio:t/a})
const c=l.length-1,u=l.length%2!=0&&l[l.length/2|0],d=u&&Object(qe.a)("div",{class:Ue.intervalSeparatorsContainer},Object(qe.a)("div",{class:Ue.intervalSeparator},"|"),Object(qe.a)("div",{class:Ue.rampLabel},u.label)),f=r[r.length-1].label,h=r[0].label,p=[[{shape:{type:"path",path:"M0 12.5 L10 0 L10 25 Z"},fill:l[0].color,stroke:{width:0}},{shape:{type:"rect",x:10,y:0,width:o,height:25},fill:{type:"linear",x1:10,y1:0,x2:o+10,y2:0,colors:l},stroke:{width:0}},{shape:{type:"path",path:`M${o+10} 0 L${s} 12.5 L${o+10} 25 Z`},fill:l[c].color,stroke:{width:0}}]],b=Object(Fe.g)(p,s,25),{messages:m}=this,y={filter:Object(P.f)(n),opacity:null==t?null:""+t}
return Object(qe.a)("div",{class:Ue.layerRow,styles:{justifyContent:"center"}},Object(qe.a)("div",{class:Ue.rampLabel},i?m[f]:f),Object(qe.a)("div",{class:Ue.symbolContainer},Object(qe.a)("div",{styles:y},b),d),Object(qe.a)("div",{class:Ue.rampLabel},i?m[h]:h))}}
Object(r.a)([Object(s.b)()],ht.prototype,"activeLayerInfos",void 0),Object(r.a)([Object(s.b)()],ht.prototype,"headingLevel",void 0),Object(r.a)([Object(s.b)()],ht.prototype,"layout",void 0),Object(r.a)([Object(s.b)(),Object(dt.a)("esri/widgets/Legend/t9n/Legend")],ht.prototype,"messages",void 0),Object(r.a)([Object(s.b)(),Object(dt.a)("esri/t9n/common")],ht.prototype,"messagesCommon",void 0),Object(r.a)([Object(s.b)({readOnly:!0})],ht.prototype,"type",void 0),Object(r.a)([Object(s.b)()],ht.prototype,"view",void 0),Object(r.a)([Object(ut.a)()],ht.prototype,"_selectSection",null),ht=Object(r.a)([Object(c.a)("esri.widgets.Legend.styles.Card")],ht)
const pt=ht,bt="esri-legend",mt={service:bt+"__service",label:bt+"__service-label",layer:bt+"__layer",groupLayer:bt+"__group-layer",groupLayerChild:bt+"__group-layer-child",layerTable:bt+"__layer-table",layerTableSizeRamp:bt+"__layer-table--size-ramp",layerChildTable:bt+"__layer-child-table",layerCaption:bt+"__layer-caption",layerBody:bt+"__layer-body",layerRow:bt+"__layer-row",layerCell:bt+"__layer-cell",layerInfo:`${bt}__layer-cell ${bt}__layer-cell--info`,imageryLayerStretchedImage:bt+"__imagery-layer-image--stretched",imageryLayerCellStretched:bt+"__imagery-layer-cell--stretched",imageryLayerInfoStretched:bt+"__imagery-layer-info--stretched",symbolContainer:bt+"__layer-cell esri-legend__layer-cell--symbols",symbol:bt+"__symbol",rampContainer:bt+"__ramps",sizeRamp:bt+"__size-ramp",colorRamp:bt+"__color-ramp",opacityRamp:bt+"__opacity-ramp",borderlessRamp:bt+"__borderless-ramp",rampTick:bt+"__ramp-tick",rampFirstTick:bt+"__ramp-tick-first",rampLastTick:bt+"__ramp-tick-last",rampLabelsContainer:bt+"__ramp-labels",rampLabel:bt+"__ramp-label",univariateAboveAndBelowSymbol:"esri-univariate-above-and-below-ramp__symbol",univariateAboveAndBelowLabel:"esri-univariate-above-and-below-ramp__label",message:bt+"__message",header:"esri-widget__heading",hidden:"esri-hidden"}
var yt=n(1038)
const gt={display:"flex",alignItems:"flex-start"},vt={marginLeft:"3px"},Ot={display:"table-cell",verticalAlign:"middle"}
let wt=class extends u.a{constructor(e,t){super(e,t),this.activeLayerInfos=null,this.headingLevel=3,this.messages=null,this.type="classic"}render(){const e=this.activeLayerInfos,t=e&&e.toArray().map(e=>this._renderLegendForLayer(e)).filter(e=>!!e)
return Object(qe.a)("div",null,t&&t.length?t:Object(qe.a)("div",{class:mt.message},this.messages.noLegend))}_renderLegendForLayer(e){if(!e.ready)return null
const t=!!e.children.length,n=`esri-legend__${e.layer.uid}-version-${e.version}`,r=e.title?Object(ct.a)({level:this.headingLevel,class:this.classes(mt.header,mt.label)},e.title):null
if(t){const t=e.children.map(e=>this._renderLegendForLayer(e)).toArray()
return Object(qe.a)("div",{key:n,class:this.classes(mt.service,mt.groupLayer)},r,t)}{const t=e.legendElements
if(t&&!t.length)return null
const i=t.map(t=>this._renderLegendForElement(t,e.layer,e.effectList)).filter(e=>!!e)
if(!i.length)return null
const a={[mt.groupLayerChild]:!!e.parent}
return Object(qe.a)("div",{key:n,class:this.classes(mt.service,a),tabIndex:0},r,Object(qe.a)("div",{class:mt.layer},i))}}_renderLegendForElement(e,t,n,r){const i="color-ramp"===e.type,a="opacity-ramp"===e.type,o="size-ramp"===e.type
let s=null
if("symbol-table"===e.type||o){const r=e.infos.map(r=>this._renderLegendForElementInfo(r,t,n,o,e.legendType)).filter(e=>!!e)
r.length&&(s=Object(qe.a)("div",{class:mt.layerBody},r))}else"color-ramp"===e.type||"opacity-ramp"===e.type||"heatmap-ramp"===e.type||"stretch-ramp"===e.type?s=this._renderLegendForRamp(e,t.opacity):"relationship-ramp"===e.type?s=Object($e.a)(e,this.id,t.opacity,n):"pie-chart-ramp"===e.type?s=this._renderPieChartRamp(e):"univariate-above-and-below-ramp"===e.type?s=this._renderUnivariateAboveAndBelowRamp(e,t.opacity,n):"univariate-color-size-ramp"===e.type&&(s=this._renderUnivariateColorSizeRamp(e,t.opacity,n))
if(!s)return null
const l=e.title
let c=null
if("string"==typeof l)c=l
else if(l){const e=it(this.messages,l,i||a)
c=at(0,i||a)&&l.title?`${l.title} (${e})`:e}const u=r?mt.layerChildTable:mt.layerTable,d=c?Object(qe.a)("div",{class:mt.layerCaption},c):null,f={[mt.layerTableSizeRamp]:o||!r}
return Object(qe.a)("div",{class:this.classes(u,f)},d,s)}_renderPieChartRamp(e){return Object(qe.a)("div",{bind:e.preview,afterCreate:rt})}_renderUnivariateAboveAndBelowRamp(e,t,n){const{sizeRampElement:r,colorRampElement:i}=et(e,t)
if(!r)return null
const a=Qe(r,"above",!0),o=Qe(r,"below",!0),s=Xe(i,{width:12,height:a,rampAlignment:"vertical",opacity:t,type:"above",effectList:n}),l=Xe(i,{width:12,height:o,rampAlignment:"vertical",opacity:t,type:"below",effectList:n}),c=Je(r),u=r.infos.map(e=>e.label),d=u.map((e,t)=>{const n=2===t
return 0===t?Object(qe.a)("div",{key:t,class:e?s?mt.univariateAboveAndBelowLabel:mt.rampLabel:null},e):n?Object(qe.a)("div",null):null}),f=u.length-1,h=Math.floor(u.length/2),p=u.map((e,t)=>t===h||t===f?Object(qe.a)("div",{key:t,class:e?s?mt.univariateAboveAndBelowLabel:mt.rampLabel:null},e):null),b={display:"table-cell",verticalAlign:"middle"},m={marginTop:c+"px"},y={height:a+"px"},g={height:o+"px"}
return Object(qe.a)("div",{key:"univariate-above-and-below-ramp-preview",styles:gt},Object(qe.a)("div",{class:mt.layerBody},r.infos.map((e,t)=>Object(qe.a)("div",{class:this.classes(mt.layerRow,mt.sizeRamp)},Object(qe.a)("div",{class:mt.symbol,styles:b,bind:e.preview,afterCreate:rt}),s||t%2!=0?null:Object(qe.a)("div",{class:mt.layerInfo},u[t])))),s?Object(qe.a)("div",{styles:m,key:"color-ramp-preview"},Object(qe.a)("div",{styles:vt},Object(qe.a)("div",{styles:Ot},Object(qe.a)("div",{class:mt.rampContainer,bind:s,afterCreate:rt})),Object(qe.a)("div",{styles:Ot},Object(qe.a)("div",{class:mt.rampLabelsContainer,styles:y},d))),Object(qe.a)("div",{styles:vt},Object(qe.a)("div",{styles:Ot},Object(qe.a)("div",{class:mt.rampContainer,bind:l,afterCreate:rt})),Object(qe.a)("div",{styles:Ot},Object(qe.a)("div",{class:mt.rampLabelsContainer,styles:g},p)))):null)}_renderUnivariateColorSizeRamp(e,t,n){const{sizeRampElement:r,colorRampElement:i}=tt(e)
if(!r)return null
const a=Je(r),o=Qe(r,"full",!1),s=Xe(i,{width:12,height:o,rampAlignment:"vertical",opacity:t,type:"full",effectList:n}),l=r.infos.length-1,c=r.infos.map((e,t)=>0===t||t===l?Object(qe.a)("div",{key:t,class:e.label?i?mt.univariateAboveAndBelowLabel:mt.rampLabel:null},e.label):null),u={display:"table-cell",verticalAlign:"middle"},d={marginTop:a+"px"},f={height:o+"px"}
return Object(qe.a)("div",{key:"univariate-above-and-below-ramp-preview",styles:gt},Object(qe.a)("div",{class:mt.layerBody},r.infos.map(e=>Object(qe.a)("div",{class:this.classes(mt.layerRow,mt.sizeRamp)},Object(qe.a)("div",{class:mt.symbol,styles:u,bind:e.preview,afterCreate:rt})))),Object(qe.a)("div",{styles:d,key:"color-ramp-preview"},Object(qe.a)("div",{styles:vt},Object(qe.a)("div",{styles:Ot},Object(qe.a)("div",{class:mt.rampContainer,bind:s,afterCreate:rt})),Object(qe.a)("div",{styles:Ot},Object(qe.a)("div",{class:mt.rampLabelsContainer,styles:f},c)))))}_renderLegendForRamp(e,t){const n=e.infos,r="opacity-ramp"===e.type,i="heatmap-ramp"===e.type,a="stretch-ramp"===e.type,o=e.preview,s=r?mt.opacityRamp:""
o.className=`${mt.colorRamp} ${s}`,null!=t&&(o.style.opacity=t.toString())
const l=n.map(e=>Object(qe.a)("div",{class:e.label?mt.rampLabel:null},i?this.messages[e.label]||e.label:a?this._getStretchStopLabel(e):e.label)),c={height:o.style.height}
return Object(qe.a)("div",{class:mt.layerRow},Object(qe.a)("div",{class:mt.symbolContainer,styles:{width:"24px"}},Object(qe.a)("div",{class:mt.rampContainer,bind:o,afterCreate:rt})),Object(qe.a)("div",{class:mt.layerInfo},Object(qe.a)("div",{class:mt.rampLabelsContainer,styles:c},l)))}_getStretchStopLabel(e){return e.label?this.messages[e.label]+": "+("string"==typeof e.value?e.value:Object(yt.b)(e.value,{style:"decimal",notation:e.value.toString().includes("e")?"scientific":"standard"})):""}_renderLegendForElementInfo(e,t,n,r,i){if(e.type)return this._renderLegendForElement(e,t,n,!0)
let a=null
const o=ot(t,i)
if(e.preview?a=Object(qe.a)("div",{class:mt.symbol,bind:e.preview,afterCreate:rt}):e.src&&(a=this._renderImage(e,t,o)),!a)return null
const s={[mt.imageryLayerInfoStretched]:o},l={[mt.imageryLayerInfoStretched]:o,[mt.sizeRamp]:!o&&r}
return Object(qe.a)("div",{class:mt.layerRow},Object(qe.a)("div",{class:this.classes(mt.symbolContainer,l)},a),Object(qe.a)("div",{class:this.classes(mt.layerInfo,s)},it(this.messages,e.label,!1)||""))}_renderImage(e,t,n){const{label:r,src:i,opacity:a}=e,o={[mt.imageryLayerStretchedImage]:n,[mt.symbol]:!n},s={opacity:""+(null!=a?a:t.opacity)}
return Object(qe.a)("img",{alt:it(this.messages,r,!1),src:i,border:0,width:e.width,height:e.height,class:this.classes(o),styles:s})}}
Object(r.a)([Object(s.b)()],wt.prototype,"activeLayerInfos",void 0),Object(r.a)([Object(s.b)()],wt.prototype,"headingLevel",void 0),Object(r.a)([Object(s.b)(),Object(dt.a)("esri/widgets/Legend/t9n/Legend")],wt.prototype,"messages",void 0),Object(r.a)([Object(s.b)({readOnly:!0})],wt.prototype,"type",void 0),wt=Object(r.a)([Object(c.a)("esri.widgets.Legend.styles.Classic")],wt)
const jt=wt
let _t=class extends u.a{constructor(e,t){super(e,t),this._handles=new i.a,this.headingLevel=3,this.iconClass="esri-icon-layer-list",this.messages=null,this.style=new jt,this.viewModel=new Ve}initialize(){this.addHandles([Object(o.b)(()=>this.view,"resize",()=>this.scheduleRender()),Object(o.b)(()=>this.activeLayerInfos,"change",()=>this._refreshActiveLayerInfos(this.activeLayerInfos)),Object(o.f)(()=>this.headingLevel,e=>{const{style:t}=this
t&&(t.headingLevel=e)}),Object(o.f)(()=>this.style,(e,t)=>{t&&e!==t&&t.destroy(),e&&(e.activeLayerInfos=this.activeLayerInfos,"card"===e.type&&(e.view=this.view),e.headingLevel=this.headingLevel)},o.a)])}destroy(){this._handles=Object(a.e)(this._handles)}get activeLayerInfos(){return this.viewModel.activeLayerInfos}set activeLayerInfos(e){this.viewModel.activeLayerInfos=e}get basemapLegendVisible(){return this.viewModel.basemapLegendVisible}set basemapLegendVisible(e){this.viewModel.basemapLegendVisible=e}get groundLegendVisible(){return this.viewModel.groundLegendVisible}set groundLegendVisible(e){this.viewModel.groundLegendVisible=e}get hideLayersNotInCurrentView(){return this.viewModel.hideLayersNotInCurrentView}set hideLayersNotInCurrentView(e){this.viewModel.hideLayersNotInCurrentView=e}get keepCacheOnDestroy(){return this.viewModel.keepCacheOnDestroy}set keepCacheOnDestroy(e){this.viewModel.keepCacheOnDestroy=e}get respectLayerVisibility(){return this.viewModel.respectLayerVisibility}set respectLayerVisibility(e){this.viewModel.respectLayerVisibility=e}get label(){var e,t
return null!=(e=null==(t=this.messages)?void 0:t.widgetLabel)?e:""}set label(e){this._overrideIfSome("label",e)}get layerInfos(){return this.viewModel.layerInfos}set layerInfos(e){this.viewModel.layerInfos=e}castStyle(e){if(e instanceof pt||e instanceof jt)return e
if("string"==typeof e)return"card"===e?new pt:new jt
if(e&&"string"==typeof e.type){const t={...e}
return delete t.type,new("card"===e.type?pt:jt)(t)}return new jt}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}render(){return Object(qe.a)("div",{class:this.classes("esri-legend","esri-widget",this.style instanceof jt?"esri-widget--panel":null)},this.style.render())}_refreshActiveLayerInfos(e){this._handles.removeAll(),e.forEach(e=>this._renderOnActiveLayerInfoChange(e)),this.scheduleRender()}_renderOnActiveLayerInfoChange(e){const t=Object(o.f)(()=>e.version,()=>this.scheduleRender())
this._handles.add(t,"version_"+e.layer.uid)
const n=Object(o.b)(()=>e.children,"change",()=>e.children.forEach(e=>this._renderOnActiveLayerInfoChange(e)),o.a)
this._handles.add(n,"children_"+e.layer.uid),e.children.forEach(e=>this._renderOnActiveLayerInfoChange(e))}}
Object(r.a)([Object(s.b)()],_t.prototype,"activeLayerInfos",null),Object(r.a)([Object(s.b)()],_t.prototype,"basemapLegendVisible",null),Object(r.a)([Object(s.b)()],_t.prototype,"groundLegendVisible",null),Object(r.a)([Object(s.b)()],_t.prototype,"headingLevel",void 0),Object(r.a)([Object(s.b)()],_t.prototype,"hideLayersNotInCurrentView",null),Object(r.a)([Object(s.b)()],_t.prototype,"keepCacheOnDestroy",null),Object(r.a)([Object(s.b)()],_t.prototype,"respectLayerVisibility",null),Object(r.a)([Object(s.b)()],_t.prototype,"iconClass",void 0),Object(r.a)([Object(s.b)()],_t.prototype,"label",null),Object(r.a)([Object(s.b)()],_t.prototype,"layerInfos",null),Object(r.a)([Object(s.b)(),Object(dt.a)("esri/widgets/Legend/t9n/Legend")],_t.prototype,"messages",void 0),Object(r.a)([Object(s.b)()],_t.prototype,"style",void 0),Object(r.a)([Object(l.a)("style")],_t.prototype,"castStyle",null),Object(r.a)([Object(s.b)()],_t.prototype,"view",null),Object(r.a)([Object(s.b)()],_t.prototype,"viewModel",void 0),_t=Object(r.a)([Object(c.a)("esri.widgets.Legend")],_t)
const St=_t},886:function(e,t,n){"use strict"
n.r(t),n.d(t,"arcgis_hub_map_widget_legend",(function(){return u}))
var r=n(96),i=n(1124),a=n(1224),o=n(1461),s=n(2127),l=n(798),c=n(385)
n(131),n(384),n(196)
const u=class{constructor(e){Object(r.k)(this,e),this.arcgisHubWidgetPanelToggled=Object(r.e)(this,"arcgisHubWidgetPanelToggled",7),this.hubTelemetry=Object(r.e)(this,"hubTelemetry",7),this.scale="m",this.view=void 0,this.active=void 0,this.bottomOffset=0,this.topOffset=0,this.closed=!0,this.viewHeight=void 0,this.viewHeightWithOffset=void 0,this.viewWidth=void 0,Object(i.a)(this,"toggleClosed","setPanelHeight","handleSetPanelRef","handleSetWidgetRef")}async componentWillLoad(){const{el:e}=this,t=e&&e.closest("arcgis-hub-map-widget-container")
this.viewPosition=null==t?void 0:t.viewPosition,this.intl=await a.a.loadIntlForComponent(e)}async componentDidLoad(){const{view:e}=this
e&&this.addWidget(),Object(c.b)()}addWidgetToView(e,t){e&&e!==t&&this.addWidget()}updateViewHeightWhenOpen(){const{closed:e}=this
this.active=!e,this.active&&this.setPanelHeight()}emitEventOnActiveChange(e){const t=e?o.a.dictionary.category.interaction.action.open.label.panel.details.legend:o.a.dictionary.category.interaction.action.close.label.panel.details.legend
this.hubTelemetry.emit(t)}handleCalcitePanelDismissedChange(e){e.stopPropagation()
const t=e.target.closed
this.arcgisHubWidgetPanelToggled.emit(t)}handlePanelToggled(e){const{target:t,detail:n}=e,{el:r}=this
t===r?this.closed=n:n||(this.closed=!0)}handleSetPanelRef(e){e&&(this.panelEl=e)}handleSetWidgetRef(e){e&&(this.legendEl=e)}toggleClosed(){this.closed=!this.closed}setPanelHeight(){const{legendEl:e,view:{size:t,container:n}}=this,[r,i]=t
this.viewHeight=i,this.viewWidth=r
const{top:a,bottom:o}=n.getBoundingClientRect(),{top:s,bottom:l}=e.getBoundingClientRect()
this.topOffset=s-a,this.viewPosition.includes("top")?this.viewHeightWithOffset=i-this.topOffset:(this.bottomOffset=o-l,this.viewHeightWithOffset=i-this.bottomOffset)}async addWidget(){const{legend:e,view:t,panelEl:n}=this
t&&n&&!e&&(await t.when(),this.legend=new l.default({view:t,container:n}),Object(s.a)(t,"size",this.setPanelHeight))}get positionClass(){const{viewPosition:e}=this
if(e)return"hub-widget-legend "+e.split("-").join(" ")}get styles(){const{viewHeight:e,viewWidth:t,viewHeightWithOffset:n,bottomOffset:r,topOffset:i,active:a}=this
let o=640
return o>e&&(o=e),{"--panel-height":n+"px","--panel-height-mobile":o+"px","--view-width":t+"px","--bottom-offset":r+"px","--top-offset":i+"px","--mobile-display":a?"flex":"none"}}get _messageOverrides(){return{close:this.intl.t("textClose")}}render(){const{styles:e,positionClass:t,closed:n,active:i,scale:a}=this,o=this.intl.t("heading"),s=this.intl.t("textOpen"),l=this.intl.t("textClose")
return Object(r.i)(r.b,{"data-element":"map-widget-legend",style:e},Object(r.i)("calcite-panel",{class:t,closable:!0,closed:n,heading:o,messageOverrides:this._messageOverrides,ref:this.handleSetPanelRef}),Object(r.i)("arcgis-hub-map-widget-generic",{active:i,icon:"legend",onClick:this.toggleClosed,ref:this.handleSetWidgetRef,scale:a,text:i?l:s}))}static get assetsDirs(){return["locales"]}get el(){return Object(r.c)(this)}static get watchers(){return{view:["addWidgetToView"],closed:["updateViewHeightWhenOpen"],active:["emitEventOnActiveChange"]}}}
u.style=":host{display:block}calcite-panel{height:inherit}calcite-panel div{background-color:var(--calcite-ui-foreground-1)}.esri-legend__service,.esri-legend__service>.esri-widget__heading{color:var(--calcite-ui-text-1)}.hub-widget-legend{min-width:none !important;max-width:none !important;padding:0px}calcite-panel[closed]{display:none}@media only screen and (min-width: 640px){.hub-widget-legend.top{position:absolute}.hub-widget-legend.top{width:25rem}.hub-widget-legend.top{padding:0px}.hub-widget-legend.top{max-height:calc(var(--panel-height) - 2rem)}.hub-widget-legend.bottom{position:absolute}.hub-widget-legend.bottom{width:25rem}.hub-widget-legend.bottom{padding:0px}.hub-widget-legend.bottom{bottom:calc(var(--bottom-offset) - 2rem);max-height:calc(var(--panel-height) - 1rem)}.hub-widget-legend.right{right:100%}.hub-widget-legend.right{margin-right:1rem}.hub-widget-legend.left{left:100%}.hub-widget-legend.left{margin-left:1rem}.hub-widget-legend.bottom.left{margin-left:0.5rem}.hub-widget-legend.bottom.right{margin-right:0.5rem}}@media only screen and (max-width: 640px){.hub-widget-legend.top{position:absolute}.hub-widget-legend.top{z-index:50}.hub-widget-legend.top{padding:0px}.hub-widget-legend.top{top:calc(var(--panel-height) - var(--panel-height-mobile) + var(--top-offset) - 1rem);width:calc(var(--view-width) + 1px);display:var(--mobile-display);height:var(--panel-height-mobile)}.hub-widget-legend.bottom{position:absolute}.hub-widget-legend.bottom{z-index:50}.hub-widget-legend.bottom{padding:0px}.hub-widget-legend.bottom{bottom:calc(var(--panel-height-mobile) - var(--panel-height) - var(--bottom-offset) - 1rem);width:calc(var(--view-width) + 1px);display:var(--mobile-display);height:var(--panel-height-mobile)}.hub-widget-legend.right{right:-1rem}.hub-widget-legend.left{left:-1rem}}"},972:function(e,t,n){"use strict"
n.d(t,"a",(function(){return y})),n.d(t,"b",(function(){return b}))
var r=n(968),i=n(975),a=n(23),o=n(234),s=n(1006)
class l{constructor(){this._values=new Map,this.multipleOriginsSupported=!1}clone(e){const t=new l
return this._values.forEach((n,r)=>{e&&e.has(r)||t.set(r,Object(o.a)(n.value),n.origin)}),t}get(e,t){t=this._normalizeOrigin(t)
const n=this._values.get(e)
return null==t||(null==n?void 0:n.origin)===t?null==n?void 0:n.value:void 0}originOf(e){var t,n
return null!=(t=null==(n=this._values.get(e))?void 0:n.origin)?t:s.a.USER}keys(e){e=this._normalizeOrigin(e)
const t=[...this._values.keys()]
return null==e?t:t.filter(t=>{var n
return(null==(n=this._values.get(t))?void 0:n.origin)===e})}set(e,t,n){if((n=this._normalizeOrigin(n))===s.a.DEFAULTS){const t=this._values.get(e)
if(t&&null!=t.origin&&t.origin>n)return}this._values.set(e,new c(t,n))}delete(e,t){var n
null!=(t=this._normalizeOrigin(t))&&(null==(n=this._values.get(e))?void 0:n.origin)!==t||this._values.delete(e)}has(e,t){var n
return null!=(t=this._normalizeOrigin(t))?(null==(n=this._values.get(e))?void 0:n.origin)===t:this._values.has(e)}forEach(e){this._values.forEach(({value:t},n)=>e(t,n))}_normalizeOrigin(e){if(null!=e)return e===s.a.DEFAULTS?e:s.a.USER}}class c{constructor(e,t){this.value=e,this.origin=t}}var u=n(1178),d=n(1091),f=n(999),h=n(1096),p=n(969)
const b=e=>{let t=class extends e{constructor(...e){super(...e)
const t=Object(a.d)(Object(f.a)(this)),n=t.store,r=new l
t.store=r,Object(u.a)(t,n,r)}read(e,t){Object(d.a)(this,e,t)}write(e={},t){return Object(h.b)(this,e,t)}toJSON(e){return this.write({},e)}static fromJSON(e,t){return m.call(this,e,t)}}
return t=Object(r.a)([Object(p.a)("esri.core.JSONSupport")],t),t.prototype.toJSON.isDefaultToJSON=!0,t}
function m(e,t){if(!e)return null
if(e.declaredClass)throw new Error("JSON object is already hydrated")
const n=new this
return n.read(e,t),n}let y=class extends(b(i.a)){}
y=Object(r.a)([Object(p.a)("esri.core.JSONSupport")],y)},973:function(e,t,n){"use strict"
n.d(t,"a",(function(){return _})),n.d(t,"b",(function(){return L})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return O})),n.d(t,"e",(function(){return C})),n.d(t,"f",(function(){return I})),n.d(t,"g",(function(){return w})),n.d(t,"h",(function(){return j})),n.d(t,"i",(function(){return g})),n.d(t,"j",(function(){return y})),n.d(t,"k",(function(){return d})),n.d(t,"l",(function(){return E})),n.d(t,"m",(function(){return v})),n.d(t,"n",(function(){return p})),n.d(t,"o",(function(){return b})),n.d(t,"p",(function(){return f})),n.d(t,"q",(function(){return c})),n.d(t,"r",(function(){return h})),n.d(t,"s",(function(){return S})),n.d(t,"t",(function(){return M})),n.d(t,"u",(function(){return x})),n.d(t,"v",(function(){return m}))
var r=n(1166),i=(n(1095),n(446)),a=n(1043),o=n(233),s=n(23)
function l(e="Aborted"){return new i.a("AbortError",e)}function c(e,t="Aborted"){if(d(e))throw l(t)}function u(e){return Object(s.l)(e)?"aborted"in e?e:e.signal:e}function d(e){const t=u(e)
return Object(s.l)(t)&&t.aborted}function f(e){if(y(e))throw e}function h(e){if(!y(e))throw e}function p(e,t){const n=u(e)
if(!Object(s.k)(n)){if(!n.aborted)return Object(a.d)(n,"abort",()=>t())
t()}}function b(e,t){const n=u(e)
if(!Object(s.k)(n))return c(n),Object(a.d)(n,"abort",()=>t(l()))}function m(e,t){const n=u(t)
return Object(s.k)(n)?e:new Promise((n,r)=>{let i=p(t,()=>r(l()))
const a=()=>i=Object(s.s)(i)
e.then(a,a),e.then(n,r)})}function y(e){return"AbortError"===(null==e?void 0:e.name)}async function g(e){try{return await e}catch(e){if(!y(e))throw e
return}}async function v(e,t=o.a.getLogger("esri")){try{return await e}catch(e){y(e)||t.error(e)}}function O(){let e=null
const t=new Promise((t,n)=>{e={promise:void 0,resolve:t,reject:n}})
return e.promise=t,e}async function w(e){if(!e)return
if("function"!=typeof e.forEach){const t=Object.keys(e),n=t.map(t=>e[t]),r=await w(n),i={}
return t.map((e,t)=>i[e]=r[t]),i}const t=e
return new Promise(e=>{const n=[]
let r=t.length
0===r&&e(n),t.forEach(t=>{const i={promise:t||Promise.resolve(t)}
n.push(i),i.promise.then(e=>{i.value=e}).catch(e=>{i.error=e}).then(()=>{--r,0===r&&e(n)})})})}async function j(e){return(await w(e)).filter(e=>!!e.value).map(e=>e.value)}function _(e,t,n){const r=new AbortController
return p(n,()=>r.abort()),new Promise((n,i)=>{let a=setTimeout(()=>{a=0,n(t)},e)
p(r,()=>{a&&(clearTimeout(a),i(l()))})})}function S(e,t,n,r){const a=n&&"abort"in n?n:null
null!=r||a||(r=n)
let o=setTimeout(()=>{o=0,a&&a.abort()},t)
const s=()=>r||new i.a("promiseUtils:timeout","The wrapped promise did not resolve within "+t+" ms")
return e.then(e=>{if(0===o)throw s()
return clearTimeout(o),e},e=>{throw clearTimeout(o),0===o?s():e})}function E(e){return e&&"function"==typeof e.then}function x(e){return E(e)?e:Promise.resolve(e)}function I(e,t=-1){let n,r,i,a,o=null
const c=(...u)=>{if(n){r=u,a&&a.reject(l()),a=O()
const e=Object(s.d)(a.promise)
if(o){const e=o
o=null,e.abort()}return e}if(i=a||O(),a=null,t>0){const r=new AbortController
n=x(e(...u,r.signal))
const i=n
_(t).then(()=>{n===i&&(a?r.abort():o=r)})}else n=1,n=x(e(...u))
const d=()=>{const e=r
r=i=n=o=null,null!=e&&c(...e)},f=n,h=i
return f.then(d,d),f.then(h.resolve,h.reject),Object(s.d)(h.promise)}
return c}function C(){let e,t
const n=new Promise((n,r)=>{e=n,t=r}),i=t=>{e(t)}
return i.resolve=t=>e(t),i.reject=e=>t(e),i.timeout=(e,t)=>r.a.setTimeout(()=>i.reject(t),e),i.promise=n,i}function L(e,t){return e.then(t,t)}async function M(e){await Promise.resolve(),c(e)}},974:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
var r=n(970)
function i(e,t,n){let i,a
return void 0===t?(a=e,i=[void 0]):"string"!=typeof t?(a=e,i=[void 0],n=t):(a=t,i=Array.isArray(e)?e:[e]),(e,t)=>{const o=e.constructor.prototype
for(const s of i){const i=Object(r.c)(e,s,a)
i.write&&"object"==typeof i.write||(i.write={}),n&&(i.write.target=n),i.write.writer=o[t]}}}},976:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return a}))
var r=n(146)
class i{constructor(e,t={ignoreUnknown:!1,useNumericKeys:!1}){this._jsonToAPI=e,this._options=t,this.apiValues=[],this.jsonValues=[],this._apiToJSON=this._invertMap(e),this.apiValues=this._getKeysSorted(this._apiToJSON),this.jsonValues=this._getKeysSorted(this._jsonToAPI),this.read=e=>this.fromJSON(e),this.write=(e,t,n)=>{const i=this.toJSON(e)
void 0!==i&&Object(r.c)(n,i,t)},this.write.isJSONMapWriter=!0}toJSON(e){if(null==e)return null
if(this._apiToJSON.hasOwnProperty(e)){const t=this._apiToJSON[e]
return this._options.useNumericKeys?+t:t}return this._options.ignoreUnknown?void 0:e}fromJSON(e){return null!=e&&this._jsonToAPI.hasOwnProperty(e)?this._jsonToAPI[e]:this._options.ignoreUnknown?void 0:e}_invertMap(e){const t={}
for(const n in e)t[e[n]]=n
return t}_getKeysSorted(e){const t=[]
for(const n in e)t.push(n)
return t.sort(),t}}function a(){return function(e,t){return new i(e,{ignoreUnknown:!0,...t})}}},977:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
var r=n(970)
function i(e,t,n){let i,a
return void 0===t||Array.isArray(t)?(a=e,n=t,i=[void 0]):(a=t,i=Array.isArray(e)?e:[e]),(e,t)=>{const o=e.constructor.prototype
i.forEach(i=>{const s=Object(r.c)(e,i,a)
s.read&&"object"==typeof s.read||(s.read={}),s.read.reader=o[t],n&&(s.read.source=(s.read.source||[]).concat(n))})}}},978:function(e,t,n){"use strict"
n.d(t,"a",(function(){return y})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return g})),n.d(t,"f",(function(){return l})),n.d(t,"g",(function(){return c})),n.d(t,"h",(function(){return f}))
var r=n(1043),i=n(1017),a=n(23),o=n(973),s=n(1076)
function l(e,t,n={}){return u(e,t,n,h)}function c(e,t,n={}){return u(e,t,n,p)}function u(e,t,n={},r){let i=null
const o=n.once?(e,n)=>{r(e)&&(Object(a.s)(i),t(e,n))}:(e,n)=>{r(e)&&t(e,n)}
if(i=Object(s.e)(e,o,n.sync,n.equals),n.initial){const t=e()
o(t,t)}return i}function d(e,t,n,o={}){let s=null,c=null,u=null
function d(){s&&c&&(c.remove(),null!=o.onListenerRemove&&o.onListenerRemove(s),s=null,c=null)}function f(e){o.once&&o.once&&Object(a.s)(u),n(e)}const h=l(e,(e,n)=>{d(),Object(r.b)(e)&&(s=e,c=Object(r.c)(e,t,f),null==o.onListenerAdd||o.onListenerAdd(e))},{sync:o.sync,initial:!0})
return u=Object(i.c)(()=>{h.remove(),d()}),u}function f(e,t){return function(e,t,n){if(Object(o.k)(n))return Promise.reject(Object(o.c)())
const r=e()
if(null!=t&&t(r))return Promise.resolve(r)
let s=null
function l(){s=Object(a.s)(s)}return new Promise((r,a)=>{s=Object(i.b)([Object(o.n)(n,()=>{l(),a(Object(o.c)())}),u(e,e=>{l(),r(e)},{sync:!1,once:!0},null!=t?t:h)])})}(e,p,t)}function h(e){return!0}function p(e){return!!e}function b(e,t,n={}){let r=!1
const i=l(e,(e,n)=>{r||t(e,n)},n)
return{remove(){i.remove()},pause(){r=!0},resume(){r=!1}}}n(1048)
const m={sync:!0},y={initial:!0},g={sync:!0,initial:!0}},979:function(e,t,n){"use strict"
n.d(t,"a",(function(){return a}))
var r=n(976),i=n(970)
function a(e,t={}){var n
const a=e instanceof r.a?e:new r.a(e,t),o={type:null==(n=null==t?void 0:t.ignoreUnknown)||n?a.apiValues:String,json:{type:a.jsonValues,read:!(null!=t&&t.readOnly)&&{reader:a.read},write:{writer:a.write}}}
return void 0!==(null==t?void 0:t.readOnly)&&(o.readOnly=!!t.readOnly),void 0!==(null==t?void 0:t.default)&&(o.json.default=t.default),void 0!==(null==t?void 0:t.name)&&(o.json.name=t.name),void 0!==(null==t?void 0:t.nonNullable)&&(o.nonNullable=t.nonNullable),Object(i.b)(o)}},980:function(e,t,n){"use strict"
n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return l})),n.d(t,"h",(function(){return i})),n.d(t,"i",(function(){return a})),n.d(t,"j",(function(){return p})),n.d(t,"k",(function(){return o}))
const r=/^-?(\d+(\.\d+)?)\s*((px)|(pt))?$/i
function i(e){return e?e/72*96:0}function a(e){return e?72*e/96:0}function o(e){if("string"==typeof e){const t=e.match(r)
if(t){const n=Number(t[1]),r=t[3]&&t[3].toLowerCase(),i="-"===e.charAt(0),o="px"===r?a(n):n
return i?-o:o}return console.warn("screenUtils.toPt: input not recognized!"),null}return e}function s(e=0,t=0){return{x:e,y:t}}function l(e=0,t=0){return[e,t]}function c(e=0,t=0){return[e,t]}function u(e=0,t=0,n=0){return[e,t,n]}function d(e){return e}function f(e){return e}function h(e){return e}function p(e,t){return t?(t[0]=e.x,t[1]=e.y,t.length>2&&(t[2]=0),t):[e.x,e.y]}},981:function(e,t,n){"use strict"
function r(){return[0,0,0]}function i(e){return[e[0],e[1],e[2]]}function a(e,t,n){return[e,t,n]}function o(e){const t=[0,0,0],n=Math.min(3,e.length)
for(let r=0;r<n;++r)t[r]=e[r]
return t}function s(e,t){return new Float64Array(e,t,3)}function l(){return a(1,1,1)}function c(){return a(1,0,0)}function u(){return a(0,1,0)}function d(){return a(0,0,1)}n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return s})),n.d(t,"f",(function(){return r})),n.d(t,"g",(function(){return o})),n.d(t,"h",(function(){return a})),n.d(t,"i",(function(){return d}))
const f=[0,0,0],h=l(),p=c(),b=u(),m=d()
Object.freeze(Object.defineProperty({__proto__:null,ONES:h,UNIT_X:p,UNIT_Y:b,UNIT_Z:m,ZEROS:f,clone:i,create:r,createView:s,fromArray:o,fromValues:a,ones:l,unitX:c,unitY:u,unitZ:d,zeros:function(){return[0,0,0]}},Symbol.toStringTag,{value:"Module"}))},982:function(e,t,n){"use strict"
n.d(t,"c",(function(){return u}))
var r=n(971),i=n(770)
n.d(t,"a",(function(){return i.default}))
var a=n(1004),o=n(1055),s=n(992)
n.d(t,"b",(function(){return s.a}))
var l=n(773),c=n(1021)
n(769),n(1036),n(983)
const u={base:a.a,key:"type",typeMap:{extent:i.default,multipoint:o.a,point:s.a,polyline:c.a,polygon:l.default}}
Object(r.k)(u)},983:function(e,t,n){"use strict"
n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return g})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return d})),n.d(t,"f",(function(){return f})),n.d(t,"g",(function(){return p})),n.d(t,"h",(function(){return h}))
var r=n(23),i=n(770),a=n(1004),o=n(1055),s=n(992),l=n(773),c=n(1021)
function u(e){return void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax}function d(e){return void 0!==e.points}function f(e){return void 0!==e.x&&void 0!==e.y}function h(e){return void 0!==e.paths}function p(e){return void 0!==e.rings}function b(e){return Object(r.k)(e)?null:e instanceof a.a?e:f(e)?s.a.fromJSON(e):h(e)?c.a.fromJSON(e):p(e)?l.default.fromJSON(e):d(e)?o.a.fromJSON(e):u(e)?i.default.fromJSON(e):null}function m(e){return e?f(e)?"esriGeometryPoint":h(e)?"esriGeometryPolyline":p(e)?"esriGeometryPolygon":u(e)?"esriGeometryEnvelope":d(e)?"esriGeometryMultipoint":null:null}const y={esriGeometryPoint:s.a,esriGeometryPolyline:c.a,esriGeometryPolygon:l.default,esriGeometryEnvelope:i.default,esriGeometryMultipoint:o.a}
function g(e){return e&&y[e]||null}},985:function(e,t,n){"use strict"
n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return $})),n.d(t,"e",(function(){return z})),n.d(t,"f",(function(){return k})),n.d(t,"g",(function(){return G})),n.d(t,"h",(function(){return f})),n.d(t,"i",(function(){return L})),n.d(t,"j",(function(){return l})),n.d(t,"k",(function(){return c})),n.d(t,"l",(function(){return o})),n.d(t,"m",(function(){return v})),n.d(t,"n",(function(){return _})),n.d(t,"o",(function(){return S})),n.d(t,"p",(function(){return m})),n.d(t,"q",(function(){return E})),n.d(t,"r",(function(){return g})),n.d(t,"s",(function(){return F})),n.d(t,"t",(function(){return R})),n.d(t,"u",(function(){return a})),n.d(t,"v",(function(){return x})),n.d(t,"w",(function(){return j})),n.d(t,"x",(function(){return w})),n.d(t,"y",(function(){return O})),n.d(t,"z",(function(){return C})),n.d(t,"A",(function(){return P})),n.d(t,"B",(function(){return s})),n.d(t,"C",(function(){return I})),n.d(t,"D",(function(){return U})),n.d(t,"E",(function(){return M})),n.d(t,"F",(function(){return N})),n.d(t,"G",(function(){return h})),n.d(t,"H",(function(){return b})),n.d(t,"I",(function(){return y}))
var r=n(981),i=n(1016)
function a(e){const t=e[0],n=e[1],r=e[2]
return Math.sqrt(t*t+n*n+r*r)}function o(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function s(e,t,n,r){return e[0]=t,e[1]=n,e[2]=r,e}function l(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e}function c(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e}function u(e,t,n){return e[0]=t[0]*n[0],e[1]=t[1]*n[1],e[2]=t[2]*n[2],e}function d(e,t,n){return e[0]=t[0]/n[0],e[1]=t[1]/n[1],e[2]=t[2]/n[2],e}function f(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e}function h(e,t){return e[0]=Math.abs(t[0]),e[1]=Math.abs(t[1]),e[2]=Math.abs(t[2]),e}function p(e,t){return e[0]=Math.sign(t[0]),e[1]=Math.sign(t[1]),e[2]=Math.sign(t[2]),e}function b(e,t,n){return e[0]=Math.min(t[0],n[0]),e[1]=Math.min(t[1],n[1]),e[2]=Math.min(t[2],n[2]),e}function m(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e}function y(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e}function g(e,t){const n=t[0]-e[0],r=t[1]-e[1],i=t[2]-e[2]
return Math.sqrt(n*n+r*r+i*i)}function v(e,t){const n=t[0]-e[0],r=t[1]-e[1],i=t[2]-e[2]
return n*n+r*r+i*i}function O(e){const t=e[0],n=e[1],r=e[2]
return t*t+n*n+r*r}function w(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}function j(e,t){const n=t[0],r=t[1],i=t[2]
let a=n*n+r*r+i*i
return a>0&&(a=1/Math.sqrt(a),e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a),e}function _(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function S(e,t,n){const r=t[0],i=t[1],a=t[2],o=n[0],s=n[1],l=n[2]
return e[0]=i*l-a*s,e[1]=a*o-r*l,e[2]=r*s-i*o,e}function E(e,t,n,r){const i=t[0],a=t[1],o=t[2]
return e[0]=i+r*(n[0]-i),e[1]=a+r*(n[1]-a),e[2]=o+r*(n[2]-o),e}function x(e,t,n){const r=t[0],i=t[1],a=t[2]
return e[0]=n[0]*r+n[4]*i+n[8]*a+n[12],e[1]=n[1]*r+n[5]*i+n[9]*a+n[13],e[2]=n[2]*r+n[6]*i+n[10]*a+n[14],e}function I(e,t,n){const r=t[0],i=t[1],a=t[2]
return e[0]=r*n[0]+i*n[3]+a*n[6],e[1]=r*n[1]+i*n[4]+a*n[7],e[2]=r*n[2]+i*n[5]+a*n[8],e}function C(e,t,n){const r=n[0],i=n[1],a=n[2],o=n[3],s=t[0],l=t[1],c=t[2]
let u=i*c-a*l,d=a*s-r*c,f=r*l-i*s,h=i*f-a*d,p=a*u-r*f,b=r*d-i*u
const m=2*o
return u*=m,d*=m,f*=m,h*=2,p*=2,b*=2,e[0]=s+u+h,e[1]=l+d+p,e[2]=c+f+b,e}function L(e,t,n,r){const i=[],a=[]
return i[0]=t[0]-n[0],i[1]=t[1]-n[1],i[2]=t[2]-n[2],a[0]=i[0]*Math.cos(r)-i[1]*Math.sin(r),a[1]=i[0]*Math.sin(r)+i[1]*Math.cos(r),a[2]=i[2],e[0]=a[0]+n[0],e[1]=a[1]+n[1],e[2]=a[2]+n[2],e}function M(e,t){o(A,e),o(T,t),j(A,A),j(T,T)
const n=_(A,T)
return n>1?0:n<-1?Math.PI:Math.acos(n)}const A=Object(r.f)(),T=Object(r.f)()
function R(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}function k(e,t){if(e===t)return!0
const n=e[0],r=e[1],a=e[2],o=t[0],s=t[1],l=t[2],c=Object(i.c)()
return Math.abs(n-o)<=c*Math.max(1,Math.abs(n),Math.abs(o))&&Math.abs(r-s)<=c*Math.max(1,Math.abs(r),Math.abs(s))&&Math.abs(a-l)<=c*Math.max(1,Math.abs(a),Math.abs(l))}function P(e,t,n){const r=n[0]-t[0],i=n[1]-t[1],a=n[2]-t[2]
let o=r*r+i*i+a*a
return o>0?(o=1/Math.sqrt(o),e[0]=r*o,e[1]=i*o,e[2]=a*o,e):(e[0]=0,e[1]=0,e[2]=0,e)}const N=c,D=u,V=d,F=g,z=v,U=a,$=O,G=Object.freeze(Object.defineProperty({__proto__:null,abs:h,add:l,angle:M,bezier:function(e,t,n,r,i,a){const o=1-a,s=o*o,l=a*a,c=s*o,u=3*a*s,d=3*l*o,f=l*a
return e[0]=t[0]*c+n[0]*u+r[0]*d+i[0]*f,e[1]=t[1]*c+n[1]*u+r[1]*d+i[1]*f,e[2]=t[2]*c+n[2]*u+r[2]*d+i[2]*f,e},ceil:function(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e},copy:o,cross:S,direction:P,dist:F,distance:g,div:V,divide:d,dot:_,equals:k,exactEquals:R,floor:f,hermite:function(e,t,n,r,i,a){const o=a*a,s=o*(2*a-3)+1,l=o*(a-2)+a,c=o*(a-1),u=o*(3-2*a)
return e[0]=t[0]*s+n[0]*l+r[0]*c+i[0]*u,e[1]=t[1]*s+n[1]*l+r[1]*c+i[1]*u,e[2]=t[2]*s+n[2]*l+r[2]*c+i[2]*u,e},inverse:function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e},len:U,length:a,lerp:E,max:function(e,t,n){return e[0]=Math.max(t[0],n[0]),e[1]=Math.max(t[1],n[1]),e[2]=Math.max(t[2],n[2]),e},min:b,mul:D,multiply:u,negate:w,normalize:j,random:function(e,t){t=t||1
const n=i.a,r=2*n()*Math.PI,a=2*n()-1,o=Math.sqrt(1-a*a)*t
return e[0]=Math.cos(r)*o,e[1]=Math.sin(r)*o,e[2]=a*t,e},rotateX:function(e,t,n,r){const i=[],a=[]
return i[0]=t[0]-n[0],i[1]=t[1]-n[1],i[2]=t[2]-n[2],a[0]=i[0],a[1]=i[1]*Math.cos(r)-i[2]*Math.sin(r),a[2]=i[1]*Math.sin(r)+i[2]*Math.cos(r),e[0]=a[0]+n[0],e[1]=a[1]+n[1],e[2]=a[2]+n[2],e},rotateY:function(e,t,n,r){const i=[],a=[]
return i[0]=t[0]-n[0],i[1]=t[1]-n[1],i[2]=t[2]-n[2],a[0]=i[2]*Math.sin(r)+i[0]*Math.cos(r),a[1]=i[1],a[2]=i[2]*Math.cos(r)-i[0]*Math.sin(r),e[0]=a[0]+n[0],e[1]=a[1]+n[1],e[2]=a[2]+n[2],e},rotateZ:L,round:function(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e},scale:m,scaleAndAdd:y,set:s,sign:p,sqrDist:z,sqrLen:$,squaredDistance:v,squaredLength:O,str:function(e){return"vec3("+e[0]+", "+e[1]+", "+e[2]+")"},sub:N,subtract:c,transformMat3:I,transformMat4:x,transformQuat:C},Symbol.toStringTag,{value:"Module"}))},986:function(e,t,n){"use strict"
n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}))
var r=n(968),i=n(975),a=(n(235),n(234)),o=(n(233),n(23)),s=n(1006),l=n(999),c=n(969)
const u=e=>{let t=class extends e{clone(){const e=Object(o.w)(Object(l.a)(this),"unable to clone instance of non-accessor class"),t=e.metadatas,n=e.store,r={},i=new Map
for(const e in t){const o=t[e],l=null==n?void 0:n.originOf(e),c=o.clonable
if(o.readOnly||!1===c||l!==s.a.USER&&l!==s.a.DEFAULTS&&l!==s.a.WEB_MAP&&l!==s.a.WEB_SCENE)continue
const u=this[e]
let d=null
d="function"==typeof c?c(u):"reference"===c?u:Object(a.e)(u),null!=u&&null==d||(l===s.a.DEFAULTS?i.set(e,d):r[e]=d)}const c=new(0,Object.getPrototypeOf(this).constructor)(r)
if(i.size){var u
const e=null==(u=Object(l.a)(c))?void 0:u.store
if(e)for(const[t,n]of i)e.set(t,n,s.a.DEFAULTS)}return c}}
return t=Object(r.a)([Object(c.a)("esri.core.Clonable")],t),t}
let d=class extends(u(i.a)){}
d=Object(r.a)([Object(c.a)("esri.core.Clonable")],d)},987:function(e,t,n){"use strict"
n.d(t,"a",(function(){return l}))
var r=n(971),i=n(1112)
const a=Object.prototype.toString
function o(e){const t="__accessorMetadata__"in e?Object(r.m)(e):e
return function(...e){if(e.push(t),"number"==typeof e[2])throw new Error("Using @cast has parameter decorator is not supported since 4.16")
return s.apply(this,e)}}function s(e,t,n,r){Object(i.b)(e,t).cast=r}function l(...e){if(3!==e.length||"string"!=typeof e[1])return 1===e.length&&"[object Function]"===a.call(e[0])?o(e[0]):1===e.length&&"string"==typeof e[0]?function(e){return(t,n)=>{Object(i.b)(t,e).cast=t[n]}}(e[0]):void 0}},988:function(e,t,n){"use strict"
n.d(t,"a",(function(){return L})),n.d(t,"b",(function(){return I})),n.d(t,"c",(function(){return C})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return p})),n.d(t,"f",(function(){return g})),n.d(t,"g",(function(){return m})),n.d(t,"h",(function(){return b})),n.d(t,"i",(function(){return j})),n.d(t,"j",(function(){return S})),n.d(t,"k",(function(){return O})),n.d(t,"l",(function(){return x})),n.d(t,"m",(function(){return y})),n.d(t,"n",(function(){return w})),n.d(t,"o",(function(){return _})),n.d(t,"p",(function(){return v})),n.d(t,"q",(function(){return E}))
var r=n(23),i=n(447),a=n(1289),o=n(1188)
const s={102113:!0,102100:!0,3857:!0,3785:!0},l={4326:!0,3785:!0,3857:!0,102113:!0,102100:!0,104905:!0,104971:!0},c='PROJCS["WGS_1984_Web_Mercator_Auxiliary_Sphere",GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator_Auxiliary_Sphere"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],PARAMETER["Standard_Parallel_1",0.0],PARAMETER["Auxiliary_Sphere_Type",0.0],UNIT["Meter",1.0]]',u=[-20037508.342788905,20037508.342788905],d=[-20037508.342787,20037508.342787],f={102113:{wkTemplate:'PROJCS["WGS_1984_Web_Mercator",GEOGCS["GCS_WGS_1984_Major_Auxiliary_Sphere",DATUM["D_WGS_1984_Major_Auxiliary_Sphere",SPHEROID["WGS_1984_Major_Auxiliary_Sphere",6378137.0,0.0]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],PARAMETER["Standard_Parallel_1",0.0],UNIT["Meter",1.0]]',valid:u,origin:d,dx:1e-5},102100:{wkTemplate:c,valid:u,origin:d,dx:1e-5},3785:{wkTemplate:'PROJCS["WGS_1984_Web_Mercator",GEOGCS["GCS_WGS_1984_Major_Auxiliary_Sphere",DATUM["D_WGS_1984_Major_Auxiliary_Sphere",SPHEROID["WGS_1984_Major_Auxiliary_Sphere",6378137.0,0.0]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],PARAMETER["Standard_Parallel_1",0.0],UNIT["Meter",1.0]]',valid:u,origin:d,dx:1e-5},3857:{wkTemplate:c,valid:u,origin:d,dx:1e-5},4326:{wkTemplate:'GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",{Central_Meridian}],UNIT["Degree",0.0174532925199433]]',altTemplate:'PROJCS["WGS_1984_Plate_Carree",GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Plate_Carree"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],UNIT["Degrees",111319.491]]',valid:[-180,180],origin:[-180,90],dx:1e-5},104971:{wkTemplate:'GEOGCS["Mars_2000_(Sphere)",DATUM["Mars_2000_(Sphere)",SPHEROID["Mars_2000_(Sphere)",3396190.0,0.0]],PRIMEM["Reference_Meridian",0.0],UNIT["Degree",0.0174532925199433]]',valid:[-180,180],origin:[-180,90],dx:1e-5},104905:{wkTemplate:'GEOGCS["GCS_Mars_2000",DATUM["D_Mars_2000",SPHEROID["Mars_2000_IAU_IAG",3396190.0,169.8944472236118]],PRIMEM["Reference_Meridian",0.0],UNIT["Degree",0.0174532925199433]]',valid:[-180,180],origin:[-180,90],dx:1e-5}}
function h(e,t){return e===t||!Object(r.k)(e)&&!Object(r.k)(t)&&(null!=e.wkid||null!=t.wkid?e.wkid===t.wkid||v(e)&&v(t)||null!=t.latestWkid&&e.wkid===t.latestWkid||null!=e.latestWkid&&t.wkid===e.latestWkid:!(!e.wkt||!t.wkt)&&e.wkt.toUpperCase()===t.wkt.toUpperCase())}function p(e){return x(e)&&e.wkid&&f[e.wkid]||null}function b(e){return!!x(e)&&(e.wkid?null==o.a[e.wkid]:!!e.wkt&&!!/^\s*GEOGCS/i.test(e.wkt))}function m(e){return!(j(e)||S(e))}function y(e){return x(e)&&4326===e.wkid}function g(e){return x(e)&&e.wkid===a.a.CGCS2000}function v(e){return x(e)&&null!=e.wkid&&!0===s[e.wkid]}function O(e){return x(e)&&32662===e.wkid}function w(e){return e===a.a.GCSMARS2000||e===a.a.GCSMARS2000_SPHERE}function j(e){return x(e)&&null!=e.wkid&&w(e.wkid)}function _(e){return e===a.a.GCSMOON2000}function S(e){return x(e)&&null!=e.wkid&&_(e.wkid)}function E(e){return x(e)&&null!=e.wkid&&!0===l[e.wkid]}function x(e){return Object(r.l)(e)&&(null!=e.wkid&&e.wkid>=2e3||null!=e.wkt)}const I={wkid:4326,wkt:Object(i.c)(f[4326].wkTemplate,{Central_Meridian:"0.0"})},C={wkid:102100,latestWkid:3857},L={wkid:32662}},989:function(e,t,n){"use strict"
n.d(t,"a",(function(){return E})),n.d(t,"b",(function(){return L})),n.d(t,"c",(function(){return M})),n.d(t,"d",(function(){return _})),n.d(t,"e",(function(){return j})),n.d(t,"f",(function(){return A})),n.d(t,"g",(function(){return k})),n.d(t,"h",(function(){return T})),n.d(t,"i",(function(){return ae})),n.d(t,"j",(function(){return w})),n.d(t,"k",(function(){return y})),n.d(t,"l",(function(){return v})),n.d(t,"m",(function(){return I})),n.d(t,"n",(function(){return R})),n.d(t,"o",(function(){return P})),n.d(t,"p",(function(){return Z})),n.d(t,"q",(function(){return H})),n.d(t,"r",(function(){return se})),n.d(t,"s",(function(){return W})),n.d(t,"t",(function(){return p})),n.d(t,"u",(function(){return q})),n.d(t,"v",(function(){return oe})),n.d(t,"w",(function(){return X})),n.d(t,"x",(function(){return S})),n.d(t,"y",(function(){return K})),n.d(t,"z",(function(){return ie}))
var r,i,a=n(446),o=n(23),s=n(146);(i=r||(r={})).VALUE_OUT_OF_RANGE="domain-validation-error::value-out-of-range",i.INVALID_CODED_VALUE="domain-validation-error::invalid-coded-value"
var l=n(1010)
const c=/^([0-9])/,u=/[^a-z0-9_\u0080-\uffff]/gi,d=/_{2,}/g,f=/^_/,h=/_$/
function p(e){return null==e?null:e.trim().replace(u,"_").replace(d,"_").replace(f,"").replace(h,"").replace(c,"F$1")||null}const b=["field","field2","field3","normalizationField","rotationInfo.field","proportionalSymbolInfo.field","proportionalSymbolInfo.normalizationField","colorInfo.field","colorInfo.normalizationField"],m=["field","normalizationField"]
function y(e,t){if(null!=e&&null!=t)for(const n of Array.isArray(e)?e:[e])if(g(b,n,t),"visualVariables"in n&&n.visualVariables)for(const e of n.visualVariables)g(m,e,t)}function g(e,t,n){if(e)for(const r of e){const e=Object(s.b)(r,t),i=e&&"function"!=typeof e&&n.get(e)
i&&Object(s.c)(r,i.name,t)}}function v(e,t){var n
if(null!=e&&null!=t&&null!=(n=t.fields)&&n.length)if("startField"in e){var r,i
const n=t.get(e.startField),a=t.get(e.endField)
e.startField=null!=(r=null==n?void 0:n.name)?r:null,e.endField=null!=(i=null==a?void 0:a.name)?i:null}else{var a,o
const n=t.get(e.startTimeField),r=t.get(e.endTimeField)
e.startTimeField=null!=(a=null==n?void 0:n.name)?a:null,e.endTimeField=null!=(o=null==r?void 0:r.name)?o:null}}const O=new Set
function w(e,t){return e&&t?(O.clear(),j(O,e,t),Array.from(O).sort()):[]}function j(e,t,n){var r
if(n)if(null!=t&&null!=(r=t.fields)&&r.length)if(n.includes("*"))for(const{name:n}of t.fields)e.add(n)
else for(const r of n)_(e,t,r)
else{if(n.includes("*"))return e.clear(),void e.add("*")
for(const t of n)null!=t&&e.add(t)}}function _(e,t,n){if("string"==typeof n)if(t){const r=t.get(n)
r&&e.add(r.name)}else e.add(n)}function S(e,t){var n
return Object(o.k)(t)||Object(o.k)(e)?[]:t.includes("*")?(null!=(n=e.fields)?n:[]).map(e=>e.name):t}async function E(e,t,n){var r
if(!n)return
const{arcadeUtils:i}=await Object(l.e)(),a=i.extractFieldNames(n,null==t||null==(r=t.fields)?void 0:r.map(e=>e.name))
for(const n of a)_(e,t,n)}async function x(e,t,r){if(r&&"1=1"!==r){const i=(await Promise.all([n.e(9),n.e(33),n.e(417)]).then(n.bind(null,1363))).WhereClause.create(r,t)
if(!i.isStandardized)throw new a.a("fieldUtils:collectFilterFields","Where clause is not standardized",{where:r})
j(e,t,i.fieldNames)}}function I({displayField:e,fields:t}){return e||(t&&t.length?C(t,"name-or-title")||C(t,"unique-identifier")||C(t,"type-or-category")||function(e){for(const t of e){if(!t||!t.name)continue
const e=t.name.toLowerCase()
if(e.includes("name")||e.includes("title"))return t.name}return null}(t):null)}function C(e,t){for(const n of e)if(n&&n.valueType&&n.valueType===t)return n.name
return null}async function L(e,t){var n
if(!t)return
const r=null==(n=t.elevationInfo)?void 0:n.featureExpressionInfo
return r?r.collectRequiredFields(e,t.fieldsIndex):void 0}async function M(e,t,n){if(!t||!n||!("fields"in n))return
const r=[],i=n.popupTemplate
r.push(async function(e,t,n){const r=[];(null==n?void 0:n.expressionInfos)&&r.push(...n.expressionInfos.map(n=>E(e,t.fieldsIndex,n.expression)))
const i=null==n?void 0:n.content
if(Array.isArray(i))for(const n of i)"expression"===n.type&&n.expressionInfo&&r.push(E(e,t.fieldsIndex,n.expressionInfo.expression))
await Promise.all(r)}(e,t,i)),n.fields&&r.push(...n.fields.map(async n=>function(e,t,n){n.onStatisticExpression?E(e,t,n.onStatisticExpression.expression):e.add(n.onStatisticField)}(e,t.fieldsIndex,n))),await Promise.all(r)}async function A(e,t,n){t&&(t.timeInfo&&Object(o.l)(n)&&n.timeExtent&&j(e,t.fieldsIndex,[t.timeInfo.startField,t.timeInfo.endField]),t.floorInfo&&j(e,t.fieldsIndex,[t.floorInfo.floorField]),Object(o.l)(n)&&Object(o.l)(n.where)&&await x(e,t.fieldsIndex,n.where))}async function T(e,t,n){t&&n&&await Promise.all(n.map(n=>async function(e,t,n){t&&n&&(n.valueExpression?await E(e,t.fieldsIndex,n.valueExpression):n.field&&_(e,t.fieldsIndex,n.field))}(e,t,n)))}function R(e){if(!e)return[]
const t="editFieldsInfo"in e&&e.editFieldsInfo
return t?w(e.fieldsIndex,[t&&t.creatorField,t&&t.creationDateField,t&&t.editorField,t&&t.editDateField]):[]}async function k(e,t){const{labelingInfo:n,fieldsIndex:r}=t
n&&n.length&&await Promise.all(n.map(t=>async function(e,t,n){if(!n)return
const r=n.getLabelExpression(),i=n.where
if("arcade"===r.type)await E(e,t,r.expression)
else{const n=r.expression.match(/{[^}]*}/g)
n&&n.forEach(n=>{_(e,t,n.slice(1,-1))})}await x(e,t,i)}(e,r,t)))}function P(e){const t=e.defaultValue
return void 0!==t&&G(e,t)?t:e.nullable?null:void 0}function N(e){return"number"==typeof e&&!isNaN(e)&&isFinite(e)}function D(e){return null===e||N(e)}const V="isInteger"in Number?Number.isInteger:e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e
function F(e){return null===e||V(e)}function z(e){return null!=e&&"string"==typeof e}function U(e){return null===e||z(e)}function $(){return!0}function G(e,t){let n
switch(e.type){case"date":case"integer":case"long":case"small-integer":case"esriFieldTypeDate":case"esriFieldTypeInteger":case"esriFieldTypeLong":case"esriFieldTypeSmallInteger":n=e.nullable?F:V
break
case"double":case"single":case"esriFieldTypeSingle":case"esriFieldTypeDouble":n=e.nullable?D:N
break
case"string":case"esriFieldTypeString":n=e.nullable?U:z
break
default:n=$}return 1===arguments.length?n:n(t)}const q=["integer","small-integer","single","double"],B=new Set([...q,"esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"])
function H(e){return null!=e&&B.has(e.type)}function W(e){return null!=e&&("string"===e.type||"esriFieldTypeString"===e.type)}function Z(e){return null!=e&&("date"===e.type||"esriFieldTypeDate"===e.type)}var Y,J
function X(e){return null==e||"number"==typeof e&&isNaN(e)?null:e}function K(e,t){return null==e||e.nullable&&null===t?null:H(e)&&!function(e,t){const n="string"==typeof e?Q(e):e
if(!n)return!1
const r=n.min,i=n.max
return n.isInteger?V(t)&&t>=r&&t<=i:t>=r&&t<=i}(e.type,Number(t))?Y.OUT_OF_RANGE:G(e,t)?e.domain?function(e,t){switch(e.type){case"range":{const n="range"in e?e.range[0]:e.minValue,i="range"in e?e.range[1]:e.maxValue
if(null!=n&&+t<n||null!=i&&+t>i)return r.VALUE_OUT_OF_RANGE
break}case"coded-value":case"codedValue":if(null==e.codedValues||e.codedValues.every(e=>null==e||e.code!==t))return r.INVALID_CODED_VALUE}return null}(e.domain,t):null:J.INVALID_TYPE}function Q(e){switch(e){case"esriFieldTypeSmallInteger":case"small-integer":return ee
case"esriFieldTypeInteger":case"integer":return te
case"esriFieldTypeSingle":case"single":return ne
case"esriFieldTypeDouble":case"double":return re}}!function(e){e.OUT_OF_RANGE="numeric-range-validation-error::out-of-range"}(Y||(Y={})),function(e){e.INVALID_TYPE="type-validation-error::invalid-type"}(J||(J={}))
const ee={min:-32768,max:32767,isInteger:!0},te={min:-2147483648,max:2147483647,isInteger:!0},ne={min:-34e37,max:12e37,isInteger:!1},re={min:-Number.MAX_VALUE,max:Number.MAX_VALUE,isInteger:!1}
function ie(e,t,n){switch(e){case r.INVALID_CODED_VALUE:return`Value ${n} is not in the coded domain - field: ${t.name}, domain: ${JSON.stringify(t.domain)}`
case r.VALUE_OUT_OF_RANGE:return`Value ${n} is out of the range of valid values - field: ${t.name}, domain: ${JSON.stringify(t.domain)}`
case J.INVALID_TYPE:return`Value ${n} is not a valid value for the field type - field: ${t.name}, type: ${t.type}, nullable: ${t.nullable}`
case Y.OUT_OF_RANGE:{const{min:e,max:r}=Q(t.type)
return`Value ${n} is out of range for the number type - field: ${t.name}, type: ${t.type}, value range is ${e} to ${r}`}}}function ae(e,t){return!oe(e,t,null)}function oe(e,t,n){if(!t||!t.attributes||!e){if(Object(o.l)(n))for(const t of null!=e?e:[])n.add(t)
return!0}const r=t.attributes
let i=!1
for(const t of e)if(!(t in r)){if(i=!0,!Object(o.l)(n))break
n.add(t)}return i}function se(e){return!!e&&["raster.itempixelvalue","raster.servicepixelvalue"].some(t=>e.toLowerCase().startsWith(t))}},991:function(e,t,n){"use strict"
n.d(t,"a",(function(){return I})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return E})),n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return S})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return w})),n.d(t,"h",(function(){return f})),n.d(t,"i",(function(){return y})),n.d(t,"j",(function(){return O})),n.d(t,"k",(function(){return x})),n.d(t,"l",(function(){return l})),n.d(t,"m",(function(){return d})),n.d(t,"n",(function(){return u})),n.d(t,"o",(function(){return o})),n.d(t,"p",(function(){return c})),n.d(t,"q",(function(){return h})),n.d(t,"r",(function(){return p})),n.d(t,"s",(function(){return _})),n(23)
var r=n(985),i=n(1012)
const a=new Float32Array(1)
function o(e){--e
for(let t=1;t<32;t<<=1)e|=e>>t
return e+1}function s(e,t,n){return Math.min(Math.max(e,t),n)}function l(e){return 0==(e&e-1)}function c(e){return e--,e|=e>>1,e|=e>>2,e|=e>>4,e|=e>>8,e|=e>>16,++e}function u(e){return 10**Math.ceil(Math.LOG10E*Math.log(e))}function d(e,t,n){return e+(t-e)*n}function f(e){return e*Math.PI/180}function h(e){return 180*e/Math.PI}function p(e,t=1e-6){return(e<0?-1:1)/Math.max(Math.abs(e),t)}function b(e){return Math.acos(s(e,-1,1))}function m(e){return Math.asin(s(e,-1,1))}function y(e,t,n=1e-6){return e===t||!(!Number.isFinite(e)||!Number.isFinite(t))&&(e>t?e-t:t-e)<=n}const g=new DataView(new ArrayBuffer(Float64Array.BYTES_PER_ELEMENT))
const v=BigInt("1000000")
function O(e,t,n=1e-6){if(e===t)return!0
if(!Number.isFinite(e)||!Number.isFinite(t))return!1
const r=Math.abs(e-t),i=Math.abs(e),a=Math.abs(t)
if(0===e||0===t||i<1e-12&&a<1e-12){if(r>.01*n)return!1}else if(r/(i+a)>n)return!1
return!0}function w(e){return j(Math.max(-I,Math.min(e,I)))}function j(e){return a[0]=e,a[0]}function _(e,t,n){const r=s((n-e)/(t-e),0,1)
return r*r*(3-2*r)}function S(e,t){const n=Object(r.u)(e),i=m(e[2]/n),a=Math.atan2(e[1]/n,e[0]/n)
return Object(r.B)(t,n,i,a),t}function E(e,t,n){return Object(i.l)(e,t[0],t[1],t[2],t[3]*n)}function x(e){const t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[3]*e[3]+e[4]*e[4]+e[5]*e[5],r=e[6]*e[6]+e[7]*e[7]+e[8]*e[8]
return!(y(t,1)&&y(n,1)&&y(r,1))}(function(e){const t=function(e){return g.setFloat64(0,e),g.getBigInt64(0)}(e=Math.abs(e)),n=function(e){return g.setBigInt64(0,e),g.getFloat64(0)}(t<=v?v:t-v)
Math.abs(e-n)})(1)
const I=j(34028234663852886e22)},992:function(e,t,n){"use strict"
n.d(t,"a",(function(){return O}))
var r,i=n(968),a=n(233),o=n(23),s=n(970),l=n(987),c=(n(445),n(977)),u=n(969),d=n(974),f=n(971),h=n(1004),p=n(769),b=n(988),m=n(774)
const y=[0,0]
function g(e){return e&&("esri.geometry.SpatialReference"===e.declaredClass||null!=e.wkid)}let v=r=class extends h.a{static copy(e,t){t._set("x",e._get("x")),t._set("y",e._get("y")),t._set("z",e._get("z")),t._set("m",e._get("m"))
const n=e._get("spatialReference")
t._set("spatialReference",Object.isFrozen(n)?n:n.clone())}constructor(...e){super(...e),this.x=0,this.y=0,this.z=void 0,this.m=void 0,this.type="point"}normalizeCtorArgs(e,t,n,r,i){let o
if(Array.isArray(e))o=e,i=t,e=o[0],t=o[1],n=o[2],r=o[3]
else if(e&&"object"==typeof e){if(o=e,e=null!=o.x?o.x:o.longitude,t=null!=o.y?o.y:o.latitude,n=o.z,r=o.m,(i=o.spatialReference)&&"esri.geometry.SpatialReference"!==i.declaredClass&&(i=new p.default(i)),null!=o.longitude||null!=o.latitude)if(null==o.longitude)a.a.getLogger(this.declaredClass).warn(".longitude=","Latitude was defined without longitude")
else if(null==o.latitude)a.a.getLogger(this.declaredClass).warn(".latitude=","Longitude was defined without latitude")
else if(!o.declaredClass&&i&&i.isWebMercator){const n=Object(m.lngLatToXY)(o.longitude,o.latitude,y)
e=n[0],t=n[1]}}else g(n)?(i=n,n=null):g(r)&&(i=r,r=null)
const s={x:e,y:t}
return null==s.x&&null!=s.y?a.a.getLogger(this.declaredClass).warn(".y=","Y coordinate was defined without an X coordinate"):null==s.y&&null!=s.x&&a.a.getLogger(this.declaredClass).warn(".x=","X coordinate was defined without a Y coordinate"),null!=i&&(s.spatialReference=i),null!=n&&(s.z=n),null!=r&&(s.m=r),s}get cache(){return this.commitProperty("x"),this.commitProperty("y"),this.commitProperty("z"),this.commitProperty("m"),this.commitProperty("spatialReference"),{}}get hasM(){return void 0!==this.m}set hasM(e){e!==(void 0!==this._get("m"))&&(this._set("m",e?0:void 0),this._set("hasM",e))}get hasZ(){return void 0!==this.z}set hasZ(e){e!==(void 0!==this._get("z"))&&(this._set("z",e?0:void 0),this._set("hasZ",e))}get latitude(){const{spatialReference:e,x:t,y:n}=this
if(e){if(e.isWebMercator)return Object(m.xyToLngLat)(t,n,y)[1]
if(e.isGeographic)return n}return null}set latitude(e){const{spatialReference:t,x:n}=this
null!=e&&t&&(t.isWebMercator?this._set("y",Object(m.lngLatToXY)(n,e,y)[1]):t.isGeographic&&this._set("y",e),this._set("latitude",e))}get longitude(){const{x:e,y:t,spatialReference:n}=this
if(n){if(n.isWebMercator)return Object(m.xyToLngLat)(e,t,y)[0]
if(n.isGeographic)return e}return null}set longitude(e){const{y:t,spatialReference:n}=this
null!=e&&n&&(n.isWebMercator?this._set("x",Object(m.lngLatToXY)(e,t,y)[0]):n.isGeographic&&this._set("x",e),this._set("longitude",e))}writeX(e,t,n){t[n]=isNaN(e)?"NaN":e}readX(e){return"string"==typeof e?NaN:e}clone(){const e=new r
return e.x=this.x,e.y=this.y,e.z=this.z,e.m=this.m,e.spatialReference=this.spatialReference,e}copy(e){return r.copy(e,this),this}equals(e){if(Object(o.k)(e))return!1
const{x:t,y:n,z:r,m:i,spatialReference:a}=this,{z:s,m:l}=e
let{x:c,y:u,spatialReference:d}=e
if(!a.equals(d))if(a.isWebMercator&&d.isWGS84)[c,u]=Object(m.lngLatToXY)(c,u),d=a
else{if(!a.isWGS84||!d.isWebMercator)return!1;[c,u]=Object(m.xyToLngLat)(c,u),d=a}return t===c&&n===u&&r===s&&i===l&&a.wkid===d.wkid}offset(e,t,n){var r
return this.x+=e,this.y+=t,null!=n&&(this.z=(null!=(r=this.z)?r:0)+n),this}normalize(){if(!this.spatialReference)return this
const e=Object(b.e)(this.spatialReference)
if(!e)return this
let t=this.x
const[n,r]=e.valid,i=2*r
let a
return t>r?(a=Math.ceil(Math.abs(t-r)/i),t-=a*i):t<n&&(a=Math.ceil(Math.abs(t-n)/i),t+=a*i),this._set("x",t),this}distance(e){return function(e,t){const n=e.x-t.x,r=e.y-t.y,i=e.hasZ&&t.hasZ?e.z-t.z:0
return Math.sqrt(n*n+r*r+i*i)}(this,e)}toArray(){const e=this.hasZ,t=this.hasM
return e&&t?[this.x,this.y,this.z,this.m]:e?[this.x,this.y,this.z]:t?[this.x,this.y,this.m]:[this.x,this.y]}toJSON(e){return this.write({},e)}}
Object(i.a)([Object(s.b)({readOnly:!0})],v.prototype,"cache",null),Object(i.a)([Object(s.b)({type:Boolean,json:{read:!1,write:{enabled:!1,overridePolicy:null}}})],v.prototype,"hasM",null),Object(i.a)([Object(s.b)({type:Boolean,json:{read:!1,write:{enabled:!1,overridePolicy:null}}})],v.prototype,"hasZ",null),Object(i.a)([Object(s.b)({type:Number})],v.prototype,"latitude",null),Object(i.a)([Object(s.b)({type:Number})],v.prototype,"longitude",null),Object(i.a)([Object(s.b)({type:Number,json:{type:[Number,String],write:{isRequired:!0,allowNull:!0}}}),Object(l.a)(e=>isNaN(e)?e:Object(f.i)(e))],v.prototype,"x",void 0),Object(i.a)([Object(d.a)("x")],v.prototype,"writeX",null),Object(i.a)([Object(c.a)("x")],v.prototype,"readX",null),Object(i.a)([Object(s.b)({type:Number,json:{write:!0}})],v.prototype,"y",void 0),Object(i.a)([Object(s.b)({type:Number,json:{write:{overridePolicy(){return{enabled:this.hasZ}}}}})],v.prototype,"z",void 0),Object(i.a)([Object(s.b)({type:Number,json:{write:{overridePolicy(){return{enabled:this.hasM}}}}})],v.prototype,"m",void 0),v=r=Object(i.a)([Object(u.a)("esri.geometry.Point")],v),v.prototype.toJSON.isDefaultToJSON=!0
const O=v},993:function(e,t,n){"use strict"
n.d(t,"a",(function(){return L}))
var r,i=n(968),a=n(1117),o=n(1002),s=n(234),l=n(23),c=n(1049),u=n(1114),d=n(1024),f=n(970),h=n(971),p=n(1082),b=n(969),m=n(1060),y=n(1087)
const g=new c.a(class{constructor(){this.target=null,this.cancellable=!1,this.defaultPrevented=!1,this.item=void 0,this.type=void 0}preventDefault(){this.cancellable&&(this.defaultPrevented=!0)}reset(e){this.defaultPrevented=!1,this.item=e}},void 0,e=>{e.item=null,e.target=null,e.defaultPrevented=!1,e.cancellable=!1}),v=()=>{}
function O(e){return e?e instanceof C?e.toArray():e.length?Array.prototype.slice.apply(e):[]:[]}function w(e){if(e&&e.length)return e[0]}function j(e,t,n,r){const i=Math.min(e.length-n,t.length-r)
let a=0
for(;a<i&&e[n+a]===t[r+a];)a++
return a}const _=new Set,S=new Set,E=new Set,x=new Map
let I=0,C=r=class extends o.a.EventedAccessor{static isCollection(e){return null!=e&&e instanceof r}constructor(e){super(e),this._chgListeners=[],this._notifications=null,this._timer=null,this._observable=new y.a,this.length=0,this._items=[],Object.defineProperty(this,"uid",{value:I++})}normalizeCtorArgs(e){return e?Array.isArray(e)||e instanceof r?{items:e}:e:{}}destroy(){this.removeAll()}*[Symbol.iterator](){yield*this.items}get items(){return Object(m.d)(this._observable),this._items}set items(e){this._emitBeforeChanges(u.a.ADD)||(this._splice(0,this.length,O(e)),this._emitAfterChanges(u.a.ADD))}hasEventListener(e){return"change"===e?this._chgListeners.length>0:this._emitter.hasEventListener(e)}on(e,t){if("change"===e){const e=this._chgListeners,n={removed:!1,callback:t}
return e.push(n),this._notifications&&this._notifications.push({listeners:e.slice(),items:this._items.slice(),changes:[]}),{remove(){this.remove=v,n.removed=!0,e.splice(e.indexOf(n),1)}}}return this._emitter.on(e,t)}once(e,t){const n=this.on(e,t)
return{remove(){n.remove()}}}add(e,t){if(Object(m.d)(this._observable),this._emitBeforeChanges(u.a.ADD))return this
const n=this.getNextIndex(null!=t?t:null)
return this._splice(n,0,[e]),this._emitAfterChanges(u.a.ADD),this}addMany(e,t=this._items.length){if(Object(m.d)(this._observable),!e||!e.length)return this
if(this._emitBeforeChanges(u.a.ADD))return this
const n=this.getNextIndex(t)
return this._splice(n,0,O(e)),this._emitAfterChanges(u.a.ADD),this}at(e){if(Object(m.d)(this._observable),(e=Math.trunc(e)||0)<0&&(e+=this.length),!(e<0||e>=this.length))return this._items[e]}removeAll(){if(Object(m.d)(this._observable),!this.length||this._emitBeforeChanges(u.a.REMOVE))return[]
const e=this._splice(0,this.length)||[]
return this._emitAfterChanges(u.a.REMOVE),e}clone(){return Object(m.d)(this._observable),this._createNewInstance({items:this._items.map(s.a)})}concat(...e){Object(m.d)(this._observable)
const t=e.map(O)
return this._createNewInstance({items:this._items.concat(...t)})}drain(e,t){if(Object(m.d)(this._observable),!this.length||this._emitBeforeChanges(u.a.REMOVE))return
const n=Object(l.d)(this._splice(0,this.length)),r=n.length
for(let i=0;i<r;i++)e.call(t,n[i],i,n)
this._emitAfterChanges(u.a.REMOVE)}every(e,t){return Object(m.d)(this._observable),this._items.every(e,t)}filter(e,t){let n
return Object(m.d)(this._observable),n=2===arguments.length?this._items.filter(e,t):this._items.filter(e),this._createNewInstance({items:n})}find(e,t){return Object(m.d)(this._observable),this._items.find(e,t)}findIndex(e,t){return Object(m.d)(this._observable),this._items.findIndex(e,t)}flatten(e,t){Object(m.d)(this._observable)
const n=[]
return function e(t,n,r,i){n&&n.forEach((n,a,o)=>{t.push(n),e(t,r.call(i,n,a,o),r,i)})}(n,this,e,t),new r(n)}forEach(e,t){return Object(m.d)(this._observable),this._items.forEach(e,t)}getItemAt(e){return Object(m.d)(this._observable),this._items[e]}getNextIndex(e){var t
Object(m.d)(this._observable)
const n=this.length
return(e=null!=(t=e)?t:n)<0?e=0:e>n&&(e=n),e}includes(e,t=0){return Object(m.d)(this._observable),this._items.includes(e,t)}indexOf(e,t=0){return Object(m.d)(this._observable),this._items.indexOf(e,t)}join(e=","){return Object(m.d)(this._observable),this._items.join(e)}lastIndexOf(e,t=this.length-1){return Object(m.d)(this._observable),this._items.lastIndexOf(e,t)}map(e,t){Object(m.d)(this._observable)
const n=this._items.map(e,t)
return new r({items:n})}reorder(e,t=this.length-1){Object(m.d)(this._observable)
const n=this.indexOf(e)
if(-1!==n){if(t<0?t=0:t>=this.length&&(t=this.length-1),n!==t){if(this._emitBeforeChanges(u.a.MOVE))return e
this._splice(n,1),this._splice(t,0,[e]),this._emitAfterChanges(u.a.MOVE)}return e}}pop(){if(Object(m.d)(this._observable),!this.length||this._emitBeforeChanges(u.a.REMOVE))return
const e=w(this._splice(this.length-1,1))
return this._emitAfterChanges(u.a.REMOVE),e}push(...e){return Object(m.d)(this._observable),this._emitBeforeChanges(u.a.ADD)||(this._splice(this.length,0,e),this._emitAfterChanges(u.a.ADD)),this.length}reduce(e,t){Object(m.d)(this._observable)
const n=this._items
return 2===arguments.length?n.reduce(e,t):n.reduce(e)}reduceRight(e,t){Object(m.d)(this._observable)
const n=this._items
return 2===arguments.length?n.reduceRight(e,t):n.reduceRight(e)}remove(e){return Object(m.d)(this._observable),this.removeAt(this.indexOf(e))}removeAt(e){if(Object(m.d)(this._observable),e<0||e>=this.length||this._emitBeforeChanges(u.a.REMOVE))return
const t=w(this._splice(e,1))
return this._emitAfterChanges(u.a.REMOVE),t}removeMany(e){if(Object(m.d)(this._observable),!e||!e.length||this._emitBeforeChanges(u.a.REMOVE))return[]
const t=e instanceof r?e.toArray():e,n=this._items,i=[],a=t.length
for(let e=0;e<a;e++){const r=t[e],a=n.indexOf(r)
if(a>-1){const r=1+j(t,n,e+1,a+1),o=this._splice(a,r)
o&&o.length>0&&i.push.apply(i,o),e+=r-1}}return this._emitAfterChanges(u.a.REMOVE),i}reverse(){if(Object(m.d)(this._observable),this._emitBeforeChanges(u.a.MOVE))return this
const e=this._splice(0,this.length)
return e&&(e.reverse(),this._splice(0,0,e)),this._emitAfterChanges(u.a.MOVE),this}shift(){if(Object(m.d)(this._observable),!this.length||this._emitBeforeChanges(u.a.REMOVE))return
const e=w(this._splice(0,1))
return this._emitAfterChanges(u.a.REMOVE),e}slice(e=0,t=this.length){return Object(m.d)(this._observable),this._createNewInstance({items:this._items.slice(e,t)})}some(e,t){return Object(m.d)(this._observable),this._items.some(e,t)}sort(e){if(Object(m.d)(this._observable),!this.length||this._emitBeforeChanges(u.a.MOVE))return this
const t=Object(l.d)(this._splice(0,this.length))
return arguments.length?t.sort(e):t.sort(),this._splice(0,0,t),this._emitAfterChanges(u.a.MOVE),this}splice(e,t,...n){Object(m.d)(this._observable)
const r=(t?u.a.REMOVE:0)|(n.length?u.a.ADD:0)
if(this._emitBeforeChanges(r))return[]
const i=this._splice(e,t,n)||[]
return this._emitAfterChanges(r),i}toArray(){return Object(m.d)(this._observable),this._items.slice()}toJSON(){return Object(m.d)(this._observable),this.toArray()}toLocaleString(){return Object(m.d)(this._observable),this._items.toLocaleString()}toString(){return Object(m.d)(this._observable),this._items.toString()}unshift(...e){return Object(m.d)(this._observable),!e.length||this._emitBeforeChanges(u.a.ADD)||(this._splice(0,0,e),this._emitAfterChanges(u.a.ADD)),this.length}_createNewInstance(e){return new this.constructor(e)}_splice(e,t,n){const r=this._items,i=this.itemType
let a,o
if(!this._notifications&&this.hasEventListener("change")&&(this._notifications=[{listeners:this._chgListeners.slice(),items:this._items.slice(),changes:[]}],this._timer&&this._timer.remove(),this._timer=Object(d.b)(()=>this._dispatchChange())),t){if(o=r.splice(e,t),this.hasEventListener("before-remove")){const t=g.acquire()
t.target=this,t.cancellable=!0
for(let n=0,i=o.length;n<i;n++)a=o[n],t.reset(a),this.emit("before-remove",t),t.defaultPrevented&&(o.splice(n,1),r.splice(e,0,a),e+=1,n-=1,i-=1)
g.release(t)}if(this.length=this._items.length,this.hasEventListener("after-remove")){const e=g.acquire()
e.target=this,e.cancellable=!1
const t=o.length
for(let n=0;n<t;n++)e.reset(o[n]),this.emit("after-remove",e)
g.release(e)}}if(n&&n.length){if(i){const e=[]
for(const t of n){const n=i.ensureType(t)
null==n&&null!=t||e.push(n)}n=e}const t=this.hasEventListener("before-add"),a=this.hasEventListener("after-add"),o=e===this.length
if(t||a){const i=g.acquire()
i.target=this,i.cancellable=!0
const s=g.acquire()
s.target=this,s.cancellable=!1
for(const l of n)t?(i.reset(l),this.emit("before-add",i),i.defaultPrevented||(o?r.push(l):r.splice(e++,0,l),this._set("length",r.length),a&&(s.reset(l),this.emit("after-add",s)))):(o?r.push(l):r.splice(e++,0,l),this._set("length",r.length),s.reset(l),this.emit("after-add",s))
g.release(s),g.release(i)}else{if(o)for(const e of n)r.push(e)
else r.splice(e,0,...n)
this._set("length",r.length)}}return(n&&n.length||o&&o.length)&&this._notifyChangeEvent(n,o),o}_emitBeforeChanges(e){let t=!1
if(this.hasEventListener("before-changes")){const n=g.acquire()
n.target=this,n.cancellable=!0,n.type=e,this.emit("before-changes",n),t=n.defaultPrevented,g.release(n)}return t}_emitAfterChanges(e){if(this.hasEventListener("after-changes")){const t=g.acquire()
t.target=this,t.cancellable=!1,t.type=e,this.emit("after-changes",t),g.release(t)}this._observable.notify()}_notifyChangeEvent(e,t){this.hasEventListener("change")&&this._notifications&&this._notifications[this._notifications.length-1].changes.push({added:e,removed:t})}_dispatchChange(){if(this._timer&&(this._timer.remove(),this._timer=null),!this._notifications)return
const e=this._notifications
this._notifications=null
for(const t of e){const e=t.changes
_.clear(),S.clear(),E.clear()
for(const{added:t,removed:n}of e){if(t)if(0===E.size&&0===S.size)for(const e of t)_.add(e)
else for(const e of t)S.has(e)?(E.add(e),S.delete(e)):E.has(e)||_.add(e)
if(n)if(0===E.size&&0===_.size)for(const e of n)S.add(e)
else for(const e of n)_.has(e)?_.delete(e):(E.delete(e),S.add(e))}const n=a.a.acquire()
_.forEach(e=>{n.push(e)})
const r=a.a.acquire()
S.forEach(e=>{r.push(e)})
const i=this._items,o=t.items,s=a.a.acquire()
if(E.forEach(e=>{o.indexOf(e)!==i.indexOf(e)&&s.push(e)}),t.listeners&&(n.length||r.length||s.length)){const e={target:this,added:n,removed:r,moved:s},i=t.listeners.length
for(let n=0;n<i;n++){const r=t.listeners[n]
r.removed||r.callback.call(this,e)}}a.a.release(n),a.a.release(r),a.a.release(s)}_.clear(),S.clear(),E.clear()}}
C.ofType=e=>{if(!e)return r
if(x.has(e))return x.get(e)
let t=null
if("function"==typeof e)t=e.prototype.declaredClass
else if(e.base)t=e.base.prototype.declaredClass
else for(const n in e.typeMap){const r=e.typeMap[n].prototype.declaredClass
t?t+=" | "+r:t=r}let n=class extends r{}
return Object(i.a)([Object(p.a)({Type:e,ensureType:"function"==typeof e?Object(h.m)(e):Object(h.k)(e)})],n.prototype,"itemType",void 0),n=Object(i.a)([Object(b.a)(`esri.core.Collection<${t}>`)],n),x.set(e,n),n},Object(i.a)([Object(f.b)()],C.prototype,"length",void 0),Object(i.a)([Object(f.b)()],C.prototype,"items",null),C=r=Object(i.a)([Object(b.a)("esri.core.Collection")],C)
const L=C},996:function(e,t,n){"use strict"
n.d(t,"a",(function(){return N})),n.d(t,"b",(function(){return P})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return g})),n.d(t,"e",(function(){return v})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return I})),n.d(t,"h",(function(){return O})),n.d(t,"i",(function(){return _})),n.d(t,"j",(function(){return E})),n.d(t,"k",(function(){return S})),n.d(t,"l",(function(){return l})),n.d(t,"m",(function(){return o})),n.d(t,"n",(function(){return L})),n.d(t,"o",(function(){return A})),n.d(t,"p",(function(){return k})),n.d(t,"q",(function(){return h})),n.d(t,"r",(function(){return f})),n.d(t,"s",(function(){return p})),n.d(t,"t",(function(){return u})),n.d(t,"u",(function(){return c})),n.d(t,"v",(function(){return y})),n.d(t,"w",(function(){return C})),n.d(t,"x",(function(){return x})),n.d(t,"y",(function(){return j})),n.d(t,"z",(function(){return w})),n.d(t,"A",(function(){return R})),n.d(t,"B",(function(){return M})),n.d(t,"C",(function(){return d})),n.d(t,"D",(function(){return m}))
n(235)
var r=n(991),i=n(23),a=n(770)
function o(e=D){return[e[0],e[1],e[2],e[3]]}function s(e){return[e[0],e[1],e[2],e[3]]}function l(e,t){return e!==t&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3]),e}function c(e,t,n,r,i=o()){return i[0]=e,i[1]=t,i[2]=n,i[3]=r,i}function u(e,t=o()){return t[0]=e.xmin,t[1]=e.ymin,t[2]=e.xmax,t[3]=e.ymax,t}function d(e,t){return new a.default({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:t})}function f(e,t){t[0]<e[0]&&(e[0]=t[0]),t[0]>e[2]&&(e[2]=t[0]),t[1]<e[1]&&(e[1]=t[1]),t[1]>e[3]&&(e[3]=t[1])}function h(e,t,n){if(Object(i.k)(t))l(n,e)
else if("length"in t)T(t)?(n[0]=Math.min(e[0],t[0]),n[1]=Math.min(e[1],t[1]),n[2]=Math.max(e[2],t[2]),n[3]=Math.max(e[3],t[3])):2!==t.length&&3!==t.length||(n[0]=Math.min(e[0],t[0]),n[1]=Math.min(e[1],t[1]),n[2]=Math.max(e[2],t[0]),n[3]=Math.max(e[3],t[1]))
else switch(t.type){case"extent":n[0]=Math.min(e[0],t.xmin),n[1]=Math.min(e[1],t.ymin),n[2]=Math.max(e[2],t.xmax),n[3]=Math.max(e[3],t.ymax)
break
case"point":n[0]=Math.min(e[0],t.x),n[1]=Math.min(e[1],t.y),n[2]=Math.max(e[2],t.x),n[3]=Math.max(e[3],t.y)}}function p(e,t,n=e){const r=t.length
let i=e[0],a=e[1],o=e[2],s=e[3]
for(let e=0;e<r;e++){const n=t[e]
i=Math.min(i,n[0]),a=Math.min(a,n[1]),o=Math.max(o,n[0]),s=Math.max(s,n[1])}return n[0]=i,n[1]=a,n[2]=o,n[3]=s,n}function b(e){for(let t=0;t<4;t++)if(!isFinite(e[t]))return!1
return!0}function m(e){return Object(i.k)(e)||e[0]>=e[2]?0:e[2]-e[0]}function y(e){return e[1]>=e[3]?0:e[3]-e[1]}function g(e){return m(e)*y(e)}function v(e,t=[0,0]){return t[0]=(e[0]+e[2])/2,t[1]=(e[1]+e[3])/2,t}function O(e,t){return S(e,t[0],t[1])}function w(e,t){const n=t[3],r=.5*(e[0]+e[2]),i=Math.abs(t[0]-r),a=.5*(e[2]-e[0])
if(i>n+a)return!1
const o=.5*(e[1]+e[3]),s=.5*(e[3]-e[1]),l=Math.abs(t[1]-o)
if(l>n+s)return!1
if(i<a||l<s)return!0
const c=i-a,u=l-s
return c*c+u*u<=n*n}function j(e,t,n){const r=e[0],i=e[1],a=e[2],o=e[3],{x:s,y:l}=t,{x:c,y:u}=n,d=(e,t)=>(u-l)*e+(s-c)*t+(c*l-s*u)<0,f=d(r,o),h=d(a,o),p=d(a,i),b=d(r,i)
return!(f===h&&h===p&&p===b&&b===f||s<r&&c<r||s>a&&c>a||l>o&&u>o||l<i&&u<i)}function _(e,t){return S(e,t.x,t.y)}function S(e,t,n){return t>=e[0]&&n>=e[1]&&t<=e[2]&&n<=e[3]}function E(e,t,n){return t[0]>=e[0]-n&&t[1]>=e[1]-n&&t[0]<=e[2]+n&&t[1]<=e[3]+n}function x(e,t){return Math.max(t[0],e[0])<=Math.min(t[2],e[2])&&Math.max(t[1],e[1])<=Math.min(t[3],e[3])}function I(e,t){return t[0]>=e[0]&&t[2]<=e[2]&&t[1]>=e[1]&&t[3]<=e[3]}function C(e,t,n){if(Object(i.k)(t))return l(n,e)
const a=t[0],o=t[1],s=t[2],c=t[3]
return n[0]=Object(r.f)(e[0],a,s),n[1]=Object(r.f)(e[1],o,c),n[2]=Object(r.f)(e[2],a,s),n[3]=Object(r.f)(e[3],o,c),n}function L(e,t){const n=(e[0]+e[2])/2,r=(e[1]+e[3])/2,i=Math.max(Math.abs(t[0]-n)-m(e)/2,0),a=Math.max(Math.abs(t[1]-r)-y(e)/2,0)
return Math.sqrt(i*i+a*a)}function M(e,t,n,r=e){return r[0]=e[0]+t,r[1]=e[1]+n,r[2]=e[2]+t,r[3]=e[3]+n,r}function A(e){return e?l(e,N):o(N)}function T(e){return null!=e&&4===e.length}function R(e){return!(0!==m(e)&&isFinite(e[0])||0!==y(e)&&isFinite(e[1]))}function k(e,t){return T(e)&&T(t)?e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]:e===t}const P=[-1/0,-1/0,1/0,1/0],N=[1/0,1/0,-1/0,-1/0],D=[0,0,0,0]},997:function(e,t,n){"use strict"
n.d(t,"a",(function(){return J})),n.d(t,"b",(function(){return q})),n.d(t,"c",(function(){return Z})),n.d(t,"d",(function(){return _})),n.d(t,"e",(function(){return E})),n.d(t,"f",(function(){return W})),n.d(t,"g",(function(){return V})),n.d(t,"h",(function(){return N})),n.d(t,"i",(function(){return U})),n.d(t,"j",(function(){return D})),n.d(t,"k",(function(){return c})),n.d(t,"l",(function(){return S})),n.d(t,"m",(function(){return k})),n.d(t,"n",(function(){return $})),n.d(t,"o",(function(){return Y})),n.d(t,"p",(function(){return R})),n.d(t,"q",(function(){return M})),n.d(t,"r",(function(){return A})),n.d(t,"s",(function(){return x})),n.d(t,"t",(function(){return T})),n.d(t,"u",(function(){return C})),n.d(t,"v",(function(){return L})),n.d(t,"w",(function(){return I})),n.d(t,"x",(function(){return P})),n.d(t,"y",(function(){return j})),n.d(t,"z",(function(){return G})),n(235)
var r=n(976),i=n(23),a=n(1089),o=n(1052),s=n(988),l=n(1188)
const c=39.37,u=o.a.radius*Math.PI/200,d=/UNIT\[([^\]]+)\]\]$/i,f=l.a,h=/UNIT\[([^\]]+)\]/i,p=new Set([4261,4305,4807,4810,4811,4812,4816,4819,4821,4901,4902,37225,104139,104140]),b=Object(r.b)()({meter:"meters",foot:"feet",foot_us:"us-feet",foot_clarke:"clarke-feet",yard_clarke:"clarke-yards",link_clarke:"clarke-links",yard_sears:"sears-yards",foot_sears:"sears-feet",chain_sears:"sears-chains",chain_benoit_1895_b:"benoit-1895-b-chains",yard_indian:"indian-yards",yard_indian_1937:"indian-1937-yards",foot_gold_coast:"gold-coast-feet",chain_sears_1922_truncated:"sears-1922-truncated-chains","50_kilometers":"50-kilometers","150_kilometers":"150-kilometers"}),m=e=>e*e,y=e=>e*e*e,g={length:{baseUnit:"meters",units:{millimeters:{inBaseUnits:.001},centimeters:{inBaseUnits:.01},decimeters:{inBaseUnits:.1},meters:{inBaseUnits:1},kilometers:{inBaseUnits:1e3},inches:{inBaseUnits:.0254},feet:{inBaseUnits:.3048},yards:{inBaseUnits:.9144},miles:{inBaseUnits:1609.344},"nautical-miles":{inBaseUnits:1852},"us-feet":{inBaseUnits:1200/3937}}},area:{baseUnit:"square-meters",units:{"square-millimeters":{inBaseUnits:m(.001)},"square-centimeters":{inBaseUnits:m(.01)},"square-decimeters":{inBaseUnits:m(.1)},"square-meters":{inBaseUnits:1},"square-kilometers":{inBaseUnits:m(1e3)},"square-inches":{inBaseUnits:m(.0254)},"square-feet":{inBaseUnits:m(.3048)},"square-yards":{inBaseUnits:m(.9144)},"square-miles":{inBaseUnits:m(1609.344)},"square-us-feet":{inBaseUnits:m(1200/3937)},acres:{inBaseUnits:.0015625*m(1609.344)},ares:{inBaseUnits:100},hectares:{inBaseUnits:1e4}}},volume:{baseUnit:"liters",units:{liters:{inBaseUnits:1},"cubic-millimeters":{inBaseUnits:1e3*y(.001)},"cubic-centimeters":{inBaseUnits:1e3*y(.01)},"cubic-decimeters":{inBaseUnits:1e3*y(.1)},"cubic-meters":{inBaseUnits:1e3},"cubic-kilometers":{inBaseUnits:1e3*y(1e3)},"cubic-inches":{inBaseUnits:1e3*y(.0254)},"cubic-feet":{inBaseUnits:1e3*y(.3048)},"cubic-yards":{inBaseUnits:1e3*y(.9144)},"cubic-miles":{inBaseUnits:1e3*y(1609.344)}}},angle:{baseUnit:"radians",units:{radians:{inBaseUnits:1},degrees:{inBaseUnits:Math.PI/180}}}},v=(()=>{const e={}
for(const t in g)for(const n in g[t].units)e[n]=t
return e})(),O=["metric","imperial","inches","feet","yards","miles","nautical-miles","us-feet","meters","kilometers"],w=new Map([["meters","square-meters"],["feet","square-feet"],["us-feet","square-us-feet"]])
function j(e){const t=v[e]
if(!t)throw new Error("unknown type")
return t}function _(e){return function(e){return g[e].baseUnit}(j(e))}function S(e,t=null){return t=t||j(e),g[t].baseUnit===e}function E(e,t,n){if(t===n)return e
const r=j(t)
if(r!==j(n))throw new Error("incompatible units")
const i=S(t,r)?e:function(e,t,n){return e*g[n].units[t].inBaseUnits}(e,t,r)
return S(n,r)?i:function(e,t,n){return e/g[n].units[t].inBaseUnits}(i,n,r)}function x(e,t,n){switch(n){case"metric":return C(e,t)
case"imperial":return M(e,t)
default:return n}}function I(e,t,n){switch(n){case"metric":return L(e,t)
case"imperial":return A(e,t)
default:return n}}function C(e,t){const n=E(e,t,"meters")
return Math.abs(n)<3e3?"meters":"kilometers"}function L(e,t){const n=E(e,t,"meters")
return Math.abs(n)<1e5?"meters":"kilometers"}function M(e,t){const n=E(e,t,"feet")
return Math.abs(n)<1e3?"feet":"miles"}function A(e,t){const n=E(e,t,"feet")
return Math.abs(n)<1e5?"feet":"miles"}function T(e,t){const n=E(e,t,"square-meters")
return Math.abs(n)<3e6?"square-meters":"square-kilometers"}function R(e,t){const n=E(e,t,"square-feet")
return Math.abs(n)<1e6?"square-feet":"square-miles"}function k(e,t,n){return E(e,t,"meters")/(n*Math.PI/180)}function P(e){return b.fromJSON(e.toLowerCase())||null}function N(e){if(Object(i.l)(e)&&!Object(s.g)(e))return 1
const t=V(e)
return t>1e5?1:t}function D(e){return V(e)>=Object(a.e)(e).metersPerDegree?"meters":U(e)}function V(e,t=o.a.metersPerDegree){return Object(i.v)(function(e,t=!1){const n=Object(i.l)(e)?e.wkid:null,r=Object(i.l)(e)?e.wkt:null
let a=null
if(n){if(Object(s.n)(n))return o.b.metersPerDegree
if(Object(s.o)(n))return o.c.metersPerDegree
a=f.values[f[n]],!a&&t&&p.has(n)&&(a=u)}else r&&(H(r)?a=F(d.exec(r),a):B(r)&&(a=F(h.exec(r),a)))
return a}(e,!0),t)}function F(e,t){return e&&e[1]?z(e[1]):t}function z(e){return parseFloat(e.split(",")[1])}function U(e){const t=Object(i.l)(e)?e.wkid:null,n=Object(i.l)(e)?e.wkt:null
let r=null
if(t)r=f.units[f[t]]
else if(n){const e=H(n)?d:B(n)?h:null
if(e){const t=e.exec(n)
t&&t[1]&&(r=function(e){const t=/[\\"\\']{1}([^\\"\\']+)/.exec(e)
let n=t&&t[1]
if(!n||!f.units.includes(n)){const t=z(e)
n=null
const r=f.values
for(let e=0;e<r.length;++e)if(Math.abs(t-r[e])<1e-7){n=f.units[e]
break}}return n}(t[1]))}}return Object(i.l)(r)?P(r):null}function $(e){const t=U(e)
return Object(i.k)(t)||!O.includes(t)?null:t}function G(e){const t=D(e)
return Object(i.k)(t)||!O.includes(t)?null:t}function q(e){const t=U(e)
return Object(i.k)(t)?null:w.get(t)}function B(e){return/^GEOCCS/i.test(e)}function H(e){return/^PROJCS/i.test(e)}function W(e){const t=U(e)
if(Object(i.k)(t))return null
switch(t){case"feet":case"us-feet":case"clarke-feet":case"clarke-yards":case"clarke-links":case"sears-yards":case"sears-feet":case"sears-chains":case"benoit-1895-b-chains":case"indian-yards":case"indian-1937-yards":case"gold-coast-feet":case"sears-1922-truncated-chains":return"imperial"
case"50-kilometers":case"150-kilometers":case"meters":return"metric"}return null}const Z=Object(r.b)()({esriAcres:"acres",esriAres:"ares",esriHectares:"hectares",esriSquareCentimeters:"square-centimeters",esriSquareDecimeters:"square-decimeters",esriSquareFeet:"square-feet",esriSquareInches:"square-inches",esriSquareKilometers:"square-kilometers",esriSquareMeters:"square-meters",esriSquareMiles:"square-miles",esriSquareMillimeters:"square-millimeters",esriSquareUsFeet:"square-us-feet",esriSquareYards:"square-yards"}),Y=Object(r.b)()({esriCentimeters:"centimeters",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriYards:"yards"}),J=Object(r.b)()({esriDUDecimalDegrees:"degrees",esriDURadians:"radians"})},998:function(e,t,n){"use strict"
n.d(t,"a",(function(){return he})),n.d(t,"b",(function(){return ge})),n.d(t,"c",(function(){return me})),n.d(t,"d",(function(){return _e})),n.d(t,"e",(function(){return be})),n.d(t,"f",(function(){return je})),n.d(t,"g",(function(){return pe})),n.d(t,"h",(function(){return we})),n.d(t,"i",(function(){return ye}))
var r={exports:{}},i={},a={exports:{}},o={}
function s(){return{"align-content":!1,"align-items":!1,"align-self":!1,"alignment-adjust":!1,"alignment-baseline":!1,all:!1,"anchor-point":!1,animation:!1,"animation-delay":!1,"animation-direction":!1,"animation-duration":!1,"animation-fill-mode":!1,"animation-iteration-count":!1,"animation-name":!1,"animation-play-state":!1,"animation-timing-function":!1,azimuth:!1,"backface-visibility":!1,background:!0,"background-attachment":!0,"background-clip":!0,"background-color":!0,"background-image":!0,"background-origin":!0,"background-position":!0,"background-repeat":!0,"background-size":!0,"baseline-shift":!1,binding:!1,bleed:!1,"bookmark-label":!1,"bookmark-level":!1,"bookmark-state":!1,border:!0,"border-bottom":!0,"border-bottom-color":!0,"border-bottom-left-radius":!0,"border-bottom-right-radius":!0,"border-bottom-style":!0,"border-bottom-width":!0,"border-collapse":!0,"border-color":!0,"border-image":!0,"border-image-outset":!0,"border-image-repeat":!0,"border-image-slice":!0,"border-image-source":!0,"border-image-width":!0,"border-left":!0,"border-left-color":!0,"border-left-style":!0,"border-left-width":!0,"border-radius":!0,"border-right":!0,"border-right-color":!0,"border-right-style":!0,"border-right-width":!0,"border-spacing":!0,"border-style":!0,"border-top":!0,"border-top-color":!0,"border-top-left-radius":!0,"border-top-right-radius":!0,"border-top-style":!0,"border-top-width":!0,"border-width":!0,bottom:!1,"box-decoration-break":!0,"box-shadow":!0,"box-sizing":!0,"box-snap":!0,"box-suppress":!0,"break-after":!0,"break-before":!0,"break-inside":!0,"caption-side":!1,chains:!1,clear:!0,clip:!1,"clip-path":!1,"clip-rule":!1,color:!0,"color-interpolation-filters":!0,"column-count":!1,"column-fill":!1,"column-gap":!1,"column-rule":!1,"column-rule-color":!1,"column-rule-style":!1,"column-rule-width":!1,"column-span":!1,"column-width":!1,columns:!1,contain:!1,content:!1,"counter-increment":!1,"counter-reset":!1,"counter-set":!1,crop:!1,cue:!1,"cue-after":!1,"cue-before":!1,cursor:!1,direction:!1,display:!0,"display-inside":!0,"display-list":!0,"display-outside":!0,"dominant-baseline":!1,elevation:!1,"empty-cells":!1,filter:!1,flex:!1,"flex-basis":!1,"flex-direction":!1,"flex-flow":!1,"flex-grow":!1,"flex-shrink":!1,"flex-wrap":!1,float:!1,"float-offset":!1,"flood-color":!1,"flood-opacity":!1,"flow-from":!1,"flow-into":!1,font:!0,"font-family":!0,"font-feature-settings":!0,"font-kerning":!0,"font-language-override":!0,"font-size":!0,"font-size-adjust":!0,"font-stretch":!0,"font-style":!0,"font-synthesis":!0,"font-variant":!0,"font-variant-alternates":!0,"font-variant-caps":!0,"font-variant-east-asian":!0,"font-variant-ligatures":!0,"font-variant-numeric":!0,"font-variant-position":!0,"font-weight":!0,grid:!1,"grid-area":!1,"grid-auto-columns":!1,"grid-auto-flow":!1,"grid-auto-rows":!1,"grid-column":!1,"grid-column-end":!1,"grid-column-start":!1,"grid-row":!1,"grid-row-end":!1,"grid-row-start":!1,"grid-template":!1,"grid-template-areas":!1,"grid-template-columns":!1,"grid-template-rows":!1,"hanging-punctuation":!1,height:!0,hyphens:!1,icon:!1,"image-orientation":!1,"image-resolution":!1,"ime-mode":!1,"initial-letters":!1,"inline-box-align":!1,"justify-content":!1,"justify-items":!1,"justify-self":!1,left:!1,"letter-spacing":!0,"lighting-color":!0,"line-box-contain":!1,"line-break":!1,"line-grid":!1,"line-height":!1,"line-snap":!1,"line-stacking":!1,"line-stacking-ruby":!1,"line-stacking-shift":!1,"line-stacking-strategy":!1,"list-style":!0,"list-style-image":!0,"list-style-position":!0,"list-style-type":!0,margin:!0,"margin-bottom":!0,"margin-left":!0,"margin-right":!0,"margin-top":!0,"marker-offset":!1,"marker-side":!1,marks:!1,mask:!1,"mask-box":!1,"mask-box-outset":!1,"mask-box-repeat":!1,"mask-box-slice":!1,"mask-box-source":!1,"mask-box-width":!1,"mask-clip":!1,"mask-image":!1,"mask-origin":!1,"mask-position":!1,"mask-repeat":!1,"mask-size":!1,"mask-source-type":!1,"mask-type":!1,"max-height":!0,"max-lines":!1,"max-width":!0,"min-height":!0,"min-width":!0,"move-to":!1,"nav-down":!1,"nav-index":!1,"nav-left":!1,"nav-right":!1,"nav-up":!1,"object-fit":!1,"object-position":!1,opacity:!1,order:!1,orphans:!1,outline:!1,"outline-color":!1,"outline-offset":!1,"outline-style":!1,"outline-width":!1,overflow:!1,"overflow-wrap":!1,"overflow-x":!1,"overflow-y":!1,padding:!0,"padding-bottom":!0,"padding-left":!0,"padding-right":!0,"padding-top":!0,page:!1,"page-break-after":!1,"page-break-before":!1,"page-break-inside":!1,"page-policy":!1,pause:!1,"pause-after":!1,"pause-before":!1,perspective:!1,"perspective-origin":!1,pitch:!1,"pitch-range":!1,"play-during":!1,position:!1,"presentation-level":!1,quotes:!1,"region-fragment":!1,resize:!1,rest:!1,"rest-after":!1,"rest-before":!1,richness:!1,right:!1,rotation:!1,"rotation-point":!1,"ruby-align":!1,"ruby-merge":!1,"ruby-position":!1,"shape-image-threshold":!1,"shape-outside":!1,"shape-margin":!1,size:!1,speak:!1,"speak-as":!1,"speak-header":!1,"speak-numeral":!1,"speak-punctuation":!1,"speech-rate":!1,stress:!1,"string-set":!1,"tab-size":!1,"table-layout":!1,"text-align":!0,"text-align-last":!0,"text-combine-upright":!0,"text-decoration":!0,"text-decoration-color":!0,"text-decoration-line":!0,"text-decoration-skip":!0,"text-decoration-style":!0,"text-emphasis":!0,"text-emphasis-color":!0,"text-emphasis-position":!0,"text-emphasis-style":!0,"text-height":!0,"text-indent":!0,"text-justify":!0,"text-orientation":!0,"text-overflow":!0,"text-shadow":!0,"text-space-collapse":!0,"text-transform":!0,"text-underline-position":!0,"text-wrap":!0,top:!1,transform:!1,"transform-origin":!1,"transform-style":!1,transition:!1,"transition-delay":!1,"transition-duration":!1,"transition-property":!1,"transition-timing-function":!1,"unicode-bidi":!1,"vertical-align":!1,visibility:!1,"voice-balance":!1,"voice-duration":!1,"voice-family":!1,"voice-pitch":!1,"voice-range":!1,"voice-rate":!1,"voice-stress":!1,"voice-volume":!1,volume:!1,"white-space":!1,widows:!1,width:!0,"will-change":!1,"word-break":!0,"word-spacing":!0,"word-wrap":!0,"wrap-flow":!1,"wrap-through":!1,"writing-mode":!1,"z-index":!1}}var l=/javascript\s*\:/gim
o.whiteList={"align-content":!1,"align-items":!1,"align-self":!1,"alignment-adjust":!1,"alignment-baseline":!1,all:!1,"anchor-point":!1,animation:!1,"animation-delay":!1,"animation-direction":!1,"animation-duration":!1,"animation-fill-mode":!1,"animation-iteration-count":!1,"animation-name":!1,"animation-play-state":!1,"animation-timing-function":!1,azimuth:!1,"backface-visibility":!1,background:!0,"background-attachment":!0,"background-clip":!0,"background-color":!0,"background-image":!0,"background-origin":!0,"background-position":!0,"background-repeat":!0,"background-size":!0,"baseline-shift":!1,binding:!1,bleed:!1,"bookmark-label":!1,"bookmark-level":!1,"bookmark-state":!1,border:!0,"border-bottom":!0,"border-bottom-color":!0,"border-bottom-left-radius":!0,"border-bottom-right-radius":!0,"border-bottom-style":!0,"border-bottom-width":!0,"border-collapse":!0,"border-color":!0,"border-image":!0,"border-image-outset":!0,"border-image-repeat":!0,"border-image-slice":!0,"border-image-source":!0,"border-image-width":!0,"border-left":!0,"border-left-color":!0,"border-left-style":!0,"border-left-width":!0,"border-radius":!0,"border-right":!0,"border-right-color":!0,"border-right-style":!0,"border-right-width":!0,"border-spacing":!0,"border-style":!0,"border-top":!0,"border-top-color":!0,"border-top-left-radius":!0,"border-top-right-radius":!0,"border-top-style":!0,"border-top-width":!0,"border-width":!0,bottom:!1,"box-decoration-break":!0,"box-shadow":!0,"box-sizing":!0,"box-snap":!0,"box-suppress":!0,"break-after":!0,"break-before":!0,"break-inside":!0,"caption-side":!1,chains:!1,clear:!0,clip:!1,"clip-path":!1,"clip-rule":!1,color:!0,"color-interpolation-filters":!0,"column-count":!1,"column-fill":!1,"column-gap":!1,"column-rule":!1,"column-rule-color":!1,"column-rule-style":!1,"column-rule-width":!1,"column-span":!1,"column-width":!1,columns:!1,contain:!1,content:!1,"counter-increment":!1,"counter-reset":!1,"counter-set":!1,crop:!1,cue:!1,"cue-after":!1,"cue-before":!1,cursor:!1,direction:!1,display:!0,"display-inside":!0,"display-list":!0,"display-outside":!0,"dominant-baseline":!1,elevation:!1,"empty-cells":!1,filter:!1,flex:!1,"flex-basis":!1,"flex-direction":!1,"flex-flow":!1,"flex-grow":!1,"flex-shrink":!1,"flex-wrap":!1,float:!1,"float-offset":!1,"flood-color":!1,"flood-opacity":!1,"flow-from":!1,"flow-into":!1,font:!0,"font-family":!0,"font-feature-settings":!0,"font-kerning":!0,"font-language-override":!0,"font-size":!0,"font-size-adjust":!0,"font-stretch":!0,"font-style":!0,"font-synthesis":!0,"font-variant":!0,"font-variant-alternates":!0,"font-variant-caps":!0,"font-variant-east-asian":!0,"font-variant-ligatures":!0,"font-variant-numeric":!0,"font-variant-position":!0,"font-weight":!0,grid:!1,"grid-area":!1,"grid-auto-columns":!1,"grid-auto-flow":!1,"grid-auto-rows":!1,"grid-column":!1,"grid-column-end":!1,"grid-column-start":!1,"grid-row":!1,"grid-row-end":!1,"grid-row-start":!1,"grid-template":!1,"grid-template-areas":!1,"grid-template-columns":!1,"grid-template-rows":!1,"hanging-punctuation":!1,height:!0,hyphens:!1,icon:!1,"image-orientation":!1,"image-resolution":!1,"ime-mode":!1,"initial-letters":!1,"inline-box-align":!1,"justify-content":!1,"justify-items":!1,"justify-self":!1,left:!1,"letter-spacing":!0,"lighting-color":!0,"line-box-contain":!1,"line-break":!1,"line-grid":!1,"line-height":!1,"line-snap":!1,"line-stacking":!1,"line-stacking-ruby":!1,"line-stacking-shift":!1,"line-stacking-strategy":!1,"list-style":!0,"list-style-image":!0,"list-style-position":!0,"list-style-type":!0,margin:!0,"margin-bottom":!0,"margin-left":!0,"margin-right":!0,"margin-top":!0,"marker-offset":!1,"marker-side":!1,marks:!1,mask:!1,"mask-box":!1,"mask-box-outset":!1,"mask-box-repeat":!1,"mask-box-slice":!1,"mask-box-source":!1,"mask-box-width":!1,"mask-clip":!1,"mask-image":!1,"mask-origin":!1,"mask-position":!1,"mask-repeat":!1,"mask-size":!1,"mask-source-type":!1,"mask-type":!1,"max-height":!0,"max-lines":!1,"max-width":!0,"min-height":!0,"min-width":!0,"move-to":!1,"nav-down":!1,"nav-index":!1,"nav-left":!1,"nav-right":!1,"nav-up":!1,"object-fit":!1,"object-position":!1,opacity:!1,order:!1,orphans:!1,outline:!1,"outline-color":!1,"outline-offset":!1,"outline-style":!1,"outline-width":!1,overflow:!1,"overflow-wrap":!1,"overflow-x":!1,"overflow-y":!1,padding:!0,"padding-bottom":!0,"padding-left":!0,"padding-right":!0,"padding-top":!0,page:!1,"page-break-after":!1,"page-break-before":!1,"page-break-inside":!1,"page-policy":!1,pause:!1,"pause-after":!1,"pause-before":!1,perspective:!1,"perspective-origin":!1,pitch:!1,"pitch-range":!1,"play-during":!1,position:!1,"presentation-level":!1,quotes:!1,"region-fragment":!1,resize:!1,rest:!1,"rest-after":!1,"rest-before":!1,richness:!1,right:!1,rotation:!1,"rotation-point":!1,"ruby-align":!1,"ruby-merge":!1,"ruby-position":!1,"shape-image-threshold":!1,"shape-outside":!1,"shape-margin":!1,size:!1,speak:!1,"speak-as":!1,"speak-header":!1,"speak-numeral":!1,"speak-punctuation":!1,"speech-rate":!1,stress:!1,"string-set":!1,"tab-size":!1,"table-layout":!1,"text-align":!0,"text-align-last":!0,"text-combine-upright":!0,"text-decoration":!0,"text-decoration-color":!0,"text-decoration-line":!0,"text-decoration-skip":!0,"text-decoration-style":!0,"text-emphasis":!0,"text-emphasis-color":!0,"text-emphasis-position":!0,"text-emphasis-style":!0,"text-height":!0,"text-indent":!0,"text-justify":!0,"text-orientation":!0,"text-overflow":!0,"text-shadow":!0,"text-space-collapse":!0,"text-transform":!0,"text-underline-position":!0,"text-wrap":!0,top:!1,transform:!1,"transform-origin":!1,"transform-style":!1,transition:!1,"transition-delay":!1,"transition-duration":!1,"transition-property":!1,"transition-timing-function":!1,"unicode-bidi":!1,"vertical-align":!1,visibility:!1,"voice-balance":!1,"voice-duration":!1,"voice-family":!1,"voice-pitch":!1,"voice-range":!1,"voice-rate":!1,"voice-stress":!1,"voice-volume":!1,volume:!1,"white-space":!1,widows:!1,width:!0,"will-change":!1,"word-break":!0,"word-spacing":!0,"word-wrap":!0,"wrap-flow":!1,"wrap-through":!1,"writing-mode":!1,"z-index":!1},o.getDefaultWhiteList=s,o.onAttr=function(e,t,n){},o.onIgnoreAttr=function(e,t,n){},o.safeAttrValue=function(e,t){return l.test(t)?"":t}
var c=function(e){return String.prototype.trim?e.trim():e.replace(/(^\s*)|(\s*$)/g,"")},u=function(e){return String.prototype.trimRight?e.trimRight():e.replace(/(\s*$)/g,"")},d=o
function f(e){return null==e}function h(e){(e=function(e){var t={}
for(var n in e)t[n]=e[n]
return t}(e||{})).whiteList=e.whiteList||d.whiteList,e.onAttr=e.onAttr||d.onAttr,e.onIgnoreAttr=e.onIgnoreAttr||d.onIgnoreAttr,e.safeAttrValue=e.safeAttrValue||d.safeAttrValue,this.options=e}h.prototype.process=function(e){if(!(e=(e=e||"").toString()))return""
var t=this.options,n=t.whiteList,r=t.onAttr,i=t.onIgnoreAttr,a=t.safeAttrValue
return function(e,t){";"!==(e=u(e))[e.length-1]&&(e+=";")
var n=e.length,r=!1,i=0,a=0,o=""
function s(){if(!r){var n=c(e.slice(i,a)),s=n.indexOf(":")
if(-1!==s){var l=c(n.slice(0,s)),u=c(n.slice(s+1))
if(l){var d=t(i,o.length,l,u,n)
d&&(o+=d+"; ")}}}i=a+1}for(;a<n;a++){var l=e[a]
if("/"===l&&"*"===e[a+1]){var d=e.indexOf("*/",a+2)
if(-1===d)break
i=(a=d+1)+1,r=!1}else"("===l?r=!0:")"===l?r=!1:";"===l?r||s():"\n"===l&&s()}return c(o)}(e,(function(e,t,o,s,l){var c=n[o],u=!1
if(!0===c?u=c:"function"==typeof c?u=c(s):c instanceof RegExp&&(u=c.test(s)),!0!==u&&(u=!1),s=a(o,s)){var d,h={position:t,sourcePosition:e,source:l,isWhite:u}
return u?f(d=r(o,s,h))?o+":"+s:d:f(d=i(o,s,h))?void 0:d}}))}
var p=h
!function(e,t){var n=o,r=p
for(var i in(t=e.exports=function(e,t){return new r(t).process(e)}).FilterCSS=r,n)t[i]=n[i]}(a,a.exports)
var b={indexOf:function(e,t){var n,r
if(Array.prototype.indexOf)return e.indexOf(t)
for(n=0,r=e.length;n<r;n++)if(e[n]===t)return n
return-1},forEach:function(e,t,n){var r,i
if(Array.prototype.forEach)return e.forEach(t,n)
for(r=0,i=e.length;r<i;r++)t.call(n,e[r],r,e)},trim:function(e){return String.prototype.trim?e.trim():e.replace(/(^\s*)|(\s*$)/g,"")},spaceIndex:function(e){var t=/\s|\n|\t/.exec(e)
return t?t.index:-1}},m=a.exports.FilterCSS,y=a.exports.getDefaultWhiteList,g=b
var v=new m
function O(e){return e.replace(w,"&lt;").replace(j,"&gt;")}var w=/</g,j=/>/g,_=/"/g,S=/&quot;/g,E=/&#([a-zA-Z0-9]*);?/gim,x=/&colon;?/gim,I=/&newline;?/gim,C=/((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi,L=/e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,M=/u\s*r\s*l\s*\(.*/gi
function A(e){return e.replace(_,"&quot;")}function T(e){return e.replace(S,'"')}function R(e){return e.replace(E,(function(e,t){return"x"===t[0]||"X"===t[0]?String.fromCharCode(parseInt(t.substr(1),16)):String.fromCharCode(parseInt(t,10))}))}function k(e){return e.replace(x,":").replace(I," ")}function P(e){for(var t="",n=0,r=e.length;n<r;n++)t+=e.charCodeAt(n)<32?" ":e.charAt(n)
return g.trim(t)}function N(e){return P(e=k(e=R(e=T(e))))}function D(e){return O(e=A(e))}i.whiteList={a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","crossorigin","loop","muted","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],figcaption:[],figure:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],summary:[],sup:[],strong:[],strike:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","crossorigin","loop","muted","playsinline","poster","preload","src","height","width"]},i.getDefaultWhiteList=function(){return{a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","crossorigin","loop","muted","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],figcaption:[],figure:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],summary:[],sup:[],strong:[],strike:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","crossorigin","loop","muted","playsinline","poster","preload","src","height","width"]}},i.onTag=function(e,t,n){},i.onIgnoreTag=function(e,t,n){},i.onTagAttr=function(e,t,n){},i.onIgnoreTagAttr=function(e,t,n){},i.safeAttrValue=function(e,t,n,r){if(n=N(n),"href"===t||"src"===t){if("#"===(n=g.trim(n)))return"#"
if("http://"!==n.substr(0,7)&&"https://"!==n.substr(0,8)&&"mailto:"!==n.substr(0,7)&&"tel:"!==n.substr(0,4)&&"data:image/"!==n.substr(0,11)&&"ftp://"!==n.substr(0,6)&&"./"!==n.substr(0,2)&&"../"!==n.substr(0,3)&&"#"!==n[0]&&"/"!==n[0])return""}else if("background"===t){if(C.lastIndex=0,C.test(n))return""}else if("style"===t){if(L.lastIndex=0,L.test(n))return""
if(M.lastIndex=0,M.test(n)&&(C.lastIndex=0,C.test(n)))return""
!1!==r&&(n=(r=r||v).process(n))}return D(n)},i.escapeHtml=O,i.escapeQuote=A,i.unescapeQuote=T,i.escapeHtmlEntities=R,i.escapeDangerHtml5Entities=k,i.clearNonPrintableCharacter=P,i.friendlyAttrValue=N,i.escapeAttrValue=D,i.onIgnoreTagStripAll=function(){return""},i.StripTagBody=function(e,t){"function"!=typeof t&&(t=function(){})
var n=!Array.isArray(e),r=[],i=!1
return{onIgnoreTag:function(a,o,s){if(function(t){return!!n||-1!==g.indexOf(e,t)}(a)){if(s.isClosing){var l="[/removed]",c=s.position+l.length
return r.push([!1!==i?i:s.position,c]),i=!1,l}return i||(i=s.position),"[removed]"}return t(a,o,s)},remove:function(e){var t="",n=0
return g.forEach(r,(function(r){t+=e.slice(n,r[0]),n=r[1]})),t+=e.slice(n)}}},i.stripCommentTag=function(e){for(var t="",n=0;n<e.length;){var r=e.indexOf("\x3c!--",n)
if(-1===r){t+=e.slice(n)
break}t+=e.slice(n,r)
var i=e.indexOf("--\x3e",r)
if(-1===i)break
n=i+3}return t},i.stripBlankChar=function(e){var t=e.split("")
return(t=t.filter((function(e){var t=e.charCodeAt(0)
return!(127===t||t<=31&&10!==t&&13!==t)}))).join("")},i.cssFilter=v,i.getDefaultCSSWhiteList=y
var V={},F=b
function z(e){var t,n=F.spaceIndex(e)
return t=-1===n?e.slice(1,-1):e.slice(1,n+1),"/"===(t=F.trim(t).toLowerCase()).slice(0,1)&&(t=t.slice(1)),"/"===t.slice(-1)&&(t=t.slice(0,-1)),t}function U(e){return"</"===e.slice(0,2)}var $=/[^a-zA-Z0-9\\_:.-]/gim
function G(e,t){for(;t<e.length;t++){var n=e[t]
if(" "!==n)return"="===n?t:-1}}function q(e,t){for(;t<e.length;t++){var n=e[t]
if(" "!==n)return"'"===n||'"'===n?t:-1}}function B(e,t){for(;t>0;t--){var n=e[t]
if(" "!==n)return"="===n?t:-1}}function H(e){return function(e){return'"'===e[0]&&'"'===e[e.length-1]||"'"===e[0]&&"'"===e[e.length-1]}(e)?e.substr(1,e.length-2):e}V.parseTag=function(e,t,n){var r="",i=0,a=!1,o=!1,s=0,l=e.length,c="",u=""
e:for(s=0;s<l;s++){var d=e.charAt(s)
if(!1===a){if("<"===d){a=s
continue}}else if(!1===o){if("<"===d){r+=n(e.slice(i,s)),a=s,i=s
continue}if(">"===d){r+=n(e.slice(i,a)),c=z(u=e.slice(a,s+1)),r+=t(a,r.length,c,u,U(u)),i=s+1,a=!1
continue}if('"'===d||"'"===d)for(var f=1,h=e.charAt(s-f);""===h.trim()||"="===h;){if("="===h){o=d
continue e}h=e.charAt(s-++f)}}else if(d===o){o=!1
continue}}return i<e.length&&(r+=n(e.substr(i))),r},V.parseAttr=function(e,t){var n=0,r=0,i=[],a=!1,o=e.length
function s(e,n){if(!((e=(e=F.trim(e)).replace($,"").toLowerCase()).length<1)){var r=t(e,n||"")
r&&i.push(r)}}for(var l=0;l<o;l++){var c,u=e.charAt(l)
if(!1!==a||"="!==u)if(!1===a||l!==r){if(/\s|\n|\t/.test(u)){if(e=e.replace(/\s|\n|\t/g," "),!1===a){if(-1===(c=G(e,l))){s(F.trim(e.slice(n,l))),a=!1,n=l+1
continue}l=c-1
continue}if(-1===(c=B(e,l-1))){s(a,H(F.trim(e.slice(n,l)))),a=!1,n=l+1
continue}}}else{if(-1===(c=e.indexOf(u,l+1)))break
s(a,F.trim(e.slice(r+1,c))),a=!1,n=(l=c)+1}else a=e.slice(n,l),n=l+1,r='"'===e.charAt(n)||"'"===e.charAt(n)?n:q(e,l+1)}return n<e.length&&(!1===a?s(e.slice(n)):s(a,H(F.trim(e.slice(n))))),F.trim(i.join(" "))}
var W=a.exports.FilterCSS,Z=i,Y=V,J=Y.parseTag,X=Y.parseAttr,K=b
function Q(e){return null==e}function ee(e){(e=function(e){var t={}
for(var n in e)t[n]=e[n]
return t}(e||{})).stripIgnoreTag&&(e.onIgnoreTag&&console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'),e.onIgnoreTag=Z.onIgnoreTagStripAll),e.whiteList||e.allowList?e.whiteList=function(e){var t={}
for(var n in e)Array.isArray(e[n])?t[n.toLowerCase()]=e[n].map((function(e){return e.toLowerCase()})):t[n.toLowerCase()]=e[n]
return t}(e.whiteList||e.allowList):e.whiteList=Z.whiteList,e.onTag=e.onTag||Z.onTag,e.onTagAttr=e.onTagAttr||Z.onTagAttr,e.onIgnoreTag=e.onIgnoreTag||Z.onIgnoreTag,e.onIgnoreTagAttr=e.onIgnoreTagAttr||Z.onIgnoreTagAttr,e.safeAttrValue=e.safeAttrValue||Z.safeAttrValue,e.escapeHtml=e.escapeHtml||Z.escapeHtml,this.options=e,!1===e.css?this.cssFilter=!1:(e.css=e.css||{},this.cssFilter=new W(e.css))}ee.prototype.process=function(e){if(!(e=(e=e||"").toString()))return""
var t=this.options,n=t.whiteList,r=t.onTag,i=t.onIgnoreTag,a=t.onTagAttr,o=t.onIgnoreTagAttr,s=t.safeAttrValue,l=t.escapeHtml,c=this.cssFilter
t.stripBlankChar&&(e=Z.stripBlankChar(e)),t.allowCommentTag||(e=Z.stripCommentTag(e))
var u=!1
t.stripIgnoreTagBody&&(u=Z.StripTagBody(t.stripIgnoreTagBody,i),i=u.onIgnoreTag)
var d=J(e,(function(e,t,u,d,f){var h={sourcePosition:e,position:t,isClosing:f,isWhite:Object.prototype.hasOwnProperty.call(n,u)},p=r(u,d,h)
if(!Q(p))return p
if(h.isWhite){if(h.isClosing)return"</"+u+">"
var b=function(e){var t=K.spaceIndex(e)
if(-1===t)return{html:"",closing:"/"===e[e.length-2]}
var n="/"===(e=K.trim(e.slice(t+1,-1)))[e.length-1]
return n&&(e=K.trim(e.slice(0,-1))),{html:e,closing:n}}(d),m=n[u],y=X(b.html,(function(e,t){var n=-1!==K.indexOf(m,e),r=a(u,e,t,n)
return Q(r)?n?(t=s(u,e,t,c))?e+'="'+t+'"':e:Q(r=o(u,e,t,n))?void 0:r:r}))
return d="<"+u,y&&(d+=" "+y),b.closing&&(d+=" /"),d+">"}return Q(p=i(u,d,h))?l(d):p}),l)
return u&&(d=u.remove(d)),d}
var te=ee
!function(e,t){var n=i,r=V,a=te
function o(e,t){return new a(t).process(e)}(t=e.exports=o).filterXSS=o,t.FilterXSS=a,function(){for(var e in n)t[e]=n[e]
for(var i in r)t[i]=r[i]}(),"undefined"!=typeof self&&"undefined"!=typeof DedicatedWorkerGlobalScope&&self instanceof DedicatedWorkerGlobalScope&&(self.filterXSS=e.exports)}(r,r.exports)
var ne,re,ie=function(){function e(e,t){var n,i=this
this.arcgisWhiteList={a:["href","style","target"],abbr:["title"],audio:["autoplay","controls","loop","muted","preload"],b:[],br:[],dd:["style"],div:["align","style"],dl:["style"],dt:["style"],em:[],figcaption:["style"],figure:["style"],font:["color","face","size","style"],h1:["style"],h2:["style"],h3:["style"],h4:["style"],h5:["style"],h6:["style"],hr:[],i:[],img:["alt","border","height","src","style","width"],li:[],ol:[],p:["style"],source:["media","src","type"],span:["style"],strong:[],sub:["style"],sup:["style"],table:["border","cellpadding","cellspacing","height","style","width"],tbody:[],tr:["align","height","style","valign"],td:["align","colspan","height","nowrap","rowspan","style","valign","width"],th:["align","colspan","height","nowrap","rowspan","style","valign","width"],u:[],ul:[],video:["autoplay","controls","height","loop","muted","poster","preload","width"]},this.allowedProtocols=["http","https","mailto","iform","tel","flow","lfmobile","arcgis-navigator","arcgis-appstudio-player","arcgis-survey123","arcgis-collector","arcgis-workforce","arcgis-explorer","arcgis-trek2there","arcgis-quickcapture","mspbi","comgooglemaps","pdfefile","pdfehttp","pdfehttps","boxapp","boxemm","awb","awbs","gropen","radarscope"],this.arcgisFilterOptions={allowCommentTag:!0,safeAttrValue:function(e,t,n,a){return"a"===e&&"href"===t||("img"===e||"source"===e)&&"src"===t?i.sanitizeUrl(n):r.exports.safeAttrValue(e,t,n,a)}},this._entityMap={"&":"&#x38;","<":"&#x3C;",">":"&#x3E;",'"':"&#x22;","'":"&#x27;","/":"&#x2F;"},e&&!t?n=e:e&&t?(n=Object.create(this.arcgisFilterOptions),Object.keys(e).forEach((function(t){"whiteList"===t?n.whiteList=i._extendObjectOfArrays([i.arcgisWhiteList,e.whiteList||{}]):n[t]=e[t]}))):(n=Object.create(this.arcgisFilterOptions)).whiteList=this.arcgisWhiteList,this.xssFilterOptions=n,this._xssFilter=new r.exports.FilterXSS(n)}return e.prototype.sanitize=function(e,t){switch(void 0===t&&(t={}),typeof e){case"number":return isNaN(e)||!isFinite(e)?null:e
case"boolean":return e
case"string":return this._xssFilter.process(e)
case"object":return this._iterateOverObject(e,t)
default:if(t.allowUndefined&&void 0===e)return
return null}},e.prototype.sanitizeUrl=function(e,t){var n=(null!=t?t:{}).isProtocolRequired,i=void 0===n||n,a=this._trim(e.substring(0,e.indexOf(":"))),o="/"===e,s=/^#/.test(e),l=a&&this.allowedProtocols.indexOf(a.toLowerCase())>-1
return o||s||l?r.exports.escapeAttrValue(e):a||i?"":r.exports.escapeAttrValue("https://".concat(e))},e.prototype.sanitizeHTMLAttribute=function(e,t,n,i){return"function"==typeof this.xssFilterOptions.safeAttrValue?this.xssFilterOptions.safeAttrValue(e,t,n,i):r.exports.safeAttrValue(e,t,n,i)},e.prototype.validate=function(e,t){void 0===t&&(t={})
var n=this.sanitize(e,t)
return{isValid:e===n,sanitized:n}},e.prototype.encodeHTML=function(e){var t=this
return String(e).replace(/[&<>"'\/]/g,(function(e){return t._entityMap[e]}))},e.prototype.encodeAttrValue=function(e){var t=/^[a-zA-Z0-9]$/
return String(e).replace(/[\x00-\xFF]/g,(function(n,r){return t.test(n)?n:"&#x".concat(Number(e.charCodeAt(r)).toString(16),";")}))},e.prototype._extendObjectOfArrays=function(e){var t={}
return e.forEach((function(e){Object.keys(e).forEach((function(n){Array.isArray(e[n])&&Array.isArray(t[n])?t[n]=t[n].concat(e[n]):t[n]=e[n]}))})),t},e.prototype._iterateOverObject=function(e,t){var n=this
void 0===t&&(t={})
try{var r=!1,i=void 0
if(Array.isArray(e))i=e.reduce((function(e,i){var a=n.validate(i,t)
return a.isValid?e.concat([i]):(r=!0,e.concat([a.sanitized]))}),[])
else{if(!function(e){if("object"!=typeof e||null===e)return!1
if("[object Object]"!==Object.prototype.toString.call(e))return!1
var t=Object.getPrototypeOf(e)
if(null===t)return!0
for(;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t)
return Object.getPrototypeOf(e)===t}(e)){if(t.allowUndefined&&void 0===e)return
return null}i=Object.keys(e).reduce((function(i,a){var o=e[a],s=n.validate(o,t)
return s.isValid?i[a]=o:(r=!0,i[a]=s.sanitized),i}),{})}return r?i:e}catch(e){return null}},e.prototype._trim=function(e){return String.prototype.trim?e.trim():e.replace(/(^\s*)|(\s*$)/g,"")},e}(),ae=n(1117),oe=n(1017),se=(n(235),n(233)),le=n(1433),ce=function(e){ne||function(e){if("WebkitTransition"in e.style)ne="webkitTransitionEnd",re="webkitAnimationEnd"
else{if(!("transition"in e.style))throw new Error("Your browser is not supported!")
ne="transitionend",re="animationend"}}(e)},ue=function(e,t){return void 0===t&&(t=e+"-active"),function(n){ce(n)
var r=!1,i=function(a){r||(r=!0,n.removeEventListener(ne,i),n.removeEventListener(re,i),n.classList.remove(e),n.classList.remove(t))}
n.classList.add(e),n.addEventListener(ne,i),n.addEventListener(re,i),requestAnimationFrame((function(){n.classList.add(t)}))}},de=function(e,t){return void 0===t&&(t=e+"-active"),function(n,r){ce(n)
var i=!1,a=function(e){i||(i=!0,n.removeEventListener(ne,a),n.removeEventListener(re,a),r())}
n.classList.add(e),n.addEventListener(ne,a),n.addEventListener(re,a),requestAnimationFrame((function(){n.classList.add(t)}))}}
const fe=se.a.getLogger("esri.widgets.support.widgetUtils")
function he(e){const t=ae.a.acquire()
for(let e=0;e<arguments.length;e++){const n=arguments[e],r=typeof n
if("string"===r)t.push(n)
else if(Array.isArray(n))t.push.apply(t,n)
else if("object"===r)for(const e in n)n[e]&&t.push(e)}const n=t.join(" ")
return ae.a.release(t),n}const pe=(()=>{const e=new Map,t=new ResizeObserver(t=>{Object(le.a)()
for(const r of t){var n
null==(n=e.get(r.target))||n(r)}})
return(n,r,i)=>(e.has(n)&&fe.error("Already observing element",n),e.set(n,r),t.observe(n,i),Object(oe.c)(()=>{t.unobserve(n),e.delete(n)}))})()
function be(e){const t=null==e?void 0:e.closest("[dir]")
return null!==t&&t instanceof HTMLElement&&"rtl"===t.dir||"rtl"===document.dir}function me(e){this[e.getAttribute("data-node-ref")]=null}function ye(e){this[e.getAttribute("data-node-ref")]=e}function ge(e,t){return("enter"===e?ue:de)(t)}const ve=["dd","dl","dt","h1","h2","h3","h4","h5","h6","sub","sup","animate","animatetransform","circle","clippath","defs","ellipse","g","image","line","lineargradient","marker","mask","path","pattern","polygon","polyline","radialgradient","rect","stop","svg","switch","symbol","text","textpath","tspan","use"].reduce((e,t)=>(e[t]=[],e),{}),Oe=["align","alink","alt","bgcolor","border","cellpadding","cellspacing","class","color","cols","colspan","coords","d","dir","face","height","hspace","ismap","lang","marginheight","marginwidth","multiple","nohref","noresize","noshade","nowrap","ref","rel","rev","rows","rowspan","scrolling","shape","span","summary","tabindex","title","usemap","valign","value","vlink","vspace","width"],we=new ie({whiteList:ve,onTagAttr:(e,t,n)=>{const r=`${t}="${n}"`
if(Oe.includes(t))return r},stripIgnoreTag:!0,stripIgnoreTagBody:["script","style"]},!0)
function je(e,t){const n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=n.top+n.height,a=r.top+r.height,o=n.top,s=r.top;(i>a||o<s)&&e.scrollIntoView({block:"end"})}function _e(e){return"Enter"===e||" "===e}}}])
