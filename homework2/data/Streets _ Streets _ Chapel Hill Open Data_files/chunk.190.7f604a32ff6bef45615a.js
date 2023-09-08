(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[190,20,22,24,30,193,310,320,326,461,763],{1002:function(t,e,n){"use strict"
n.d(e,"a",(function(){return u}))
var r=n(968),i=n(975),o=n(1017),s=n(969)
class a{constructor(){this._emitter=new a.EventEmitter(this)}emit(t,e){return this._emitter.emit(t,e)}on(t,e){return this._emitter.on(t,e)}once(t,e){return this._emitter.once(t,e)}hasEventListener(t){return this._emitter.hasEventListener(t)}}!function(t){class e{constructor(t=null){this._target=t,this._listenersMap=null}clear(){this._listenersMap&&this._listenersMap.clear(),this._listenersMap=null}emit(t,e){const n=this._listenersMap&&this._listenersMap.get(t)
if(!n)return!1
const r=this._target||this
return[...n].forEach(t=>{t.call(r,e)}),n.length>0}on(t,e){if(Array.isArray(t)){const n=t.map(t=>this.on(t,e))
return Object(o.b)(n)}if(t.includes(","))throw new TypeError("Evented.on() with a comma delimited string of event types is not supported")
this._listenersMap||(this._listenersMap=new Map)
const n=this._listenersMap.get(t)||[]
return n.push(e),this._listenersMap.set(t,n),{remove:()=>{const n=this._listenersMap&&this._listenersMap.get(t)||[],r=n.indexOf(e)
r>=0&&n.splice(r,1)}}}once(t,e){const n=this.on(t,t=>{n.remove(),e.call(null,t)})
return n}hasEventListener(t){const e=this._listenersMap&&this._listenersMap.get(t)
return null!=e&&e.length>0}}t.EventEmitter=e,t.EventedMixin=t=>{let n=class extends t{constructor(){super(...arguments),this._emitter=new e}destroy(){this._emitter.clear()}emit(t,e){return this._emitter.emit(t,e)}on(t,e){return this._emitter.on(t,e)}once(t,e){return this._emitter.once(t,e)}hasEventListener(t){return this._emitter.hasEventListener(t)}}
return n=Object(r.a)([Object(s.a)("esri.core.Evented")],n),n}
let n=class extends i.a{constructor(){super(...arguments),this._emitter=new a.EventEmitter(this)}destroy(){this._emitter.clear()}emit(t,e){return this._emitter.emit(t,e)}on(t,e){return this._emitter.on(t,e)}once(t,e){return this._emitter.once(t,e)}hasEventListener(t){return this._emitter.hasEventListener(t)}}
n=Object(r.a)([Object(s.a)("esri.core.Evented")],n),t.EventedAccessor=n}(a||(a={}))
const u=a},1004:function(t,e,n){"use strict"
n.d(e,"a",(function(){return l}))
var r=n(968),i=n(972),o=n(970),s=(n(971),n(445),n(977)),a=n(969),u=n(769)
let c=class extends i.a{constructor(...t){super(...t),this.type=null,this.hasM=!1,this.hasZ=!1,this.spatialReference=u.default.WGS84}get cache(){return this.commitProperty("spatialReference"),{}}get extent(){return null}readSpatialReference(t,e){if(t instanceof u.default)return t
if(null!=t){const n=new u.default
return n.read(t,e),n}return t}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}clearCache(){this.notifyChange("cache")}getCacheValue(t){return this.cache[t]}setCacheValue(t,e){this.cache[t]=e}}
Object(r.a)([Object(o.b)()],c.prototype,"type",void 0),Object(r.a)([Object(o.b)({readOnly:!0})],c.prototype,"cache",null),Object(r.a)([Object(o.b)({readOnly:!0})],c.prototype,"extent",null),Object(r.a)([Object(o.b)({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],c.prototype,"hasM",void 0),Object(r.a)([Object(o.b)({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],c.prototype,"hasZ",void 0),Object(r.a)([Object(o.b)({type:u.default,json:{write:!0},value:u.default.WGS84})],c.prototype,"spatialReference",void 0),Object(r.a)([Object(s.a)("spatialReference")],c.prototype,"readSpatialReference",null),c=Object(r.a)([Object(a.a)("esri.geometry.Geometry")],c)
const l=c},1010:function(t,e,n){"use strict"
n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return h})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return f})),n.d(e,"e",(function(){return c})),n(982)
var r=n(446),i=n(233),o=n(23),s=n(769)
const a=i.a.getLogger("esri.support.arcadeOnDemand")
let u
function c(){return u||(u=(async()=>{const t=await Promise.all([n.e(2),n.e(33),n.e(52),n.e(226)]).then(n.bind(null,1319))
return{arcade:t.arcade,arcadeUtils:t,Dictionary:t.Dictionary,Feature:t.arcadeFeature}})()),u}const l=(t,e,n)=>d.create(t,e,n,null,["$feature"]),f=(t,e,n)=>d.create(t,e,n,null,["$feature","$view"]),h=(t,e,n,r)=>d.create(t,e,n,r,["$feature","$view"])
class d{constructor(t,e,n,r,i,o,s){this.script=t,this.evaluate=r
const a=Array.isArray(o)?o:o.fields
this.fields=a,this._syntaxTree=n,this._arcade=e,this._arcadeFeature=i,this._spatialReference=s,this._referencesGeometry=e.scriptTouchesGeometry(this._syntaxTree),this._referencesScale=this._arcade.referencesMember(this._syntaxTree,"scale")}static async create(t,e,n,i,u,l){const{arcade:f,Feature:h,Dictionary:m}=await c(),p=s.default.fromJSON(e)
let b
try{b=f.parseScript(t,l)}catch(e){return a.error(new r.a("arcade-bad-expression","Failed to parse arcade script",{script:t,error:e})),null}const y=u.reduce((t,e)=>({...t,[e]:null}),{})
let g=null
Object(o.l)(i)&&(g=new m(i),g.immutable=!0,y.$config=null)
const O=f.scriptUsesGeometryEngine(b),j=O&&f.enableGeometrySupport(),v=f.scriptUsesFeatureSet(b)&&f.enableFeatureSetSupport(),x=f.scriptIsAsync(b),M=x&&f.enableAsyncSupport(),_={vars:y,spatialReference:p,useAsync:!!M}
await Promise.all([j,v,M])
const w=new Set
await f.loadDependentModules(w,b,null,x,O)
const S=new m
S.immutable=!1,S.setField("scale",0)
const E=f.compileScript(b,_)
return new d(t,f,b,t=>("$view"in t&&t.$view&&(S.setField("scale","object"==typeof t.$view?t.$view.scale:void 0),t.$view=S),g&&(t.$config=g),E({vars:t,spatialReference:p})),new h,n,p)}repurposeFeature(t){return t.geometry&&!t.geometry.spatialReference&&(t.geometry.spatialReference=this._spatialReference),this._arcadeFeature.repurposeFromGraphicLikeObject(t.geometry,t.attributes,{fields:this.fields}),this._arcadeFeature}referencesGeometry(){return this._referencesGeometry}referencesScale(){return this._referencesScale}}},1012:function(t,e,n){"use strict"
n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return b})),n.d(e,"e",(function(){return d})),n.d(e,"f",(function(){return m})),n.d(e,"g",(function(){return O})),n.d(e,"h",(function(){return j})),n.d(e,"i",(function(){return h})),n.d(e,"j",(function(){return y})),n.d(e,"k",(function(){return p})),n.d(e,"l",(function(){return o})),n.d(e,"m",(function(){return g})),n.d(e,"n",(function(){return A}))
var r=n(1016)
function i(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function o(t,e,n,r,i){return t[0]=e,t[1]=n,t[2]=r,t[3]=i,t}function s(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t[3]=e[3]+n[3],t}function a(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t[3]=e[3]-n[3],t}function u(t,e,n){return t[0]=e[0]*n[0],t[1]=e[1]*n[1],t[2]=e[2]*n[2],t[3]=e[3]*n[3],t}function c(t,e,n){return t[0]=e[0]/n[0],t[1]=e[1]/n[1],t[2]=e[2]/n[2],t[3]=e[3]/n[3],t}function l(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t}function f(t,e){const n=e[0]-t[0],r=e[1]-t[1],i=e[2]-t[2],o=e[3]-t[3]
return Math.sqrt(n*n+r*r+i*i+o*o)}function h(t,e){const n=e[0]-t[0],r=e[1]-t[1],i=e[2]-t[2],o=e[3]-t[3]
return n*n+r*r+i*i+o*o}function d(t){const e=t[0],n=t[1],r=t[2],i=t[3]
return Math.sqrt(e*e+n*n+r*r+i*i)}function m(t){const e=t[0],n=t[1],r=t[2],i=t[3]
return e*e+n*n+r*r+i*i}function p(t,e){const n=e[0],r=e[1],i=e[2],o=e[3]
let s=n*n+r*r+i*i+o*o
return s>0&&(s=1/Math.sqrt(s),t[0]=n*s,t[1]=r*s,t[2]=i*s,t[3]=o*s),t}function b(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]}function y(t,e,n,r){const i=e[0],o=e[1],s=e[2],a=e[3]
return t[0]=i+r*(n[0]-i),t[1]=o+r*(n[1]-o),t[2]=s+r*(n[2]-s),t[3]=a+r*(n[3]-a),t}function g(t,e,n){const r=e[0],i=e[1],o=e[2],s=e[3]
return t[0]=n[0]*r+n[4]*i+n[8]*o+n[12]*s,t[1]=n[1]*r+n[5]*i+n[9]*o+n[13]*s,t[2]=n[2]*r+n[6]*i+n[10]*o+n[14]*s,t[3]=n[3]*r+n[7]*i+n[11]*o+n[15]*s,t}function O(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]}function j(t,e){const n=t[0],i=t[1],o=t[2],s=t[3],a=e[0],u=e[1],c=e[2],l=e[3],f=Object(r.c)()
return Math.abs(n-a)<=f*Math.max(1,Math.abs(n),Math.abs(a))&&Math.abs(i-u)<=f*Math.max(1,Math.abs(i),Math.abs(u))&&Math.abs(o-c)<=f*Math.max(1,Math.abs(o),Math.abs(c))&&Math.abs(s-l)<=f*Math.max(1,Math.abs(s),Math.abs(l))}const v=a,x=u,M=c,_=f,w=h,S=d,E=m,A=Object.freeze(Object.defineProperty({__proto__:null,add:s,ceil:function(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t[2]=Math.ceil(e[2]),t[3]=Math.ceil(e[3]),t},copy:i,dist:_,distance:f,div:M,divide:c,dot:b,equals:j,exactEquals:O,floor:function(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t[2]=Math.floor(e[2]),t[3]=Math.floor(e[3]),t},inverse:function(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t[3]=1/e[3],t},len:S,length:d,lerp:y,max:function(t,e,n){return t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t[2]=Math.max(e[2],n[2]),t[3]=Math.max(e[3],n[3]),t},min:function(t,e,n){return t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t[2]=Math.min(e[2],n[2]),t[3]=Math.min(e[3],n[3]),t},mul:x,multiply:u,negate:function(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t},normalize:p,random:function(t,e){const n=r.a
let i,o,s,a,u,c
e=e||1
do{i=2*n()-1,o=2*n()-1,u=i*i+o*o}while(u>=1)
do{s=2*n()-1,a=2*n()-1,c=s*s+a*a}while(c>=1)
const l=Math.sqrt((1-u)/c)
return t[0]=e*i,t[1]=e*o,t[2]=e*s*l,t[3]=e*a*l,t},round:function(t,e){return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t[2]=Math.round(e[2]),t[3]=Math.round(e[3]),t},scale:l,scaleAndAdd:function(t,e,n,r){return t[0]=e[0]+n[0]*r,t[1]=e[1]+n[1]*r,t[2]=e[2]+n[2]*r,t[3]=e[3]+n[3]*r,t},set:o,sqrDist:w,sqrLen:E,squaredDistance:h,squaredLength:m,str:function(t){return"vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},sub:v,subtract:a,transformMat4:g,transformQuat:function(t,e,n){const r=e[0],i=e[1],o=e[2],s=n[0],a=n[1],u=n[2],c=n[3],l=c*r+a*o-u*i,f=c*i+u*r-s*o,h=c*o+s*i-a*r,d=-s*r-a*i-u*o
return t[0]=l*c+d*-s+f*-u-h*-a,t[1]=f*c+d*-a+h*-s-l*-u,t[2]=h*c+d*-u+l*-a-f*-s,t[3]=e[3],t}},Symbol.toStringTag,{value:"Module"}))},1016:function(t,e,n){"use strict"
n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return u}))
let r=1e-6
function i(){return r}const o=Math.random,s=Math.PI/180,a=180/Math.PI
function u(t){return t*s}function c(t){return t*a}Object.freeze(Object.defineProperty({__proto__:null,RANDOM:o,equals:function(t,e){return Math.abs(t-e)<=r*Math.max(1,Math.abs(t),Math.abs(e))},getEpsilon:i,setEpsilon:function(t){r=t},toDegree:c,toRadian:u},Symbol.toStringTag,{value:"Module"}))},1021:function(t,e,n){"use strict"
n.d(e,"a",(function(){return b}))
var r,i=n(968),o=n(234),s=n(970),a=(n(971),n(969)),u=n(974),c=n(770),l=n(1004),f=n(992),h=n(769),d=n(1157),m=n(1105)
let p=r=class extends l.a{constructor(...t){super(...t),this.paths=[],this.type="polyline"}normalizeCtorArgs(t,e){let n,r,i=null,o=null
return t&&!Array.isArray(t)?(i=t.paths?t.paths:null,e||(t.spatialReference?e=t.spatialReference:t.paths||(e=t)),n=t.hasZ,r=t.hasM):i=t,i=i||[],e=e||h.default.WGS84,i.length&&i[0]&&null!=i[0][0]&&"number"==typeof i[0][0]&&(i=[i]),o=i[0]&&i[0][0],o&&(void 0===n&&void 0===r?(n=o.length>2,r=!1):void 0===n?n=!r&&o.length>3:void 0===r&&(r=!n&&o.length>3)),{paths:i,spatialReference:e,hasZ:n,hasM:r}}get cache(){return this.commitProperty("paths"),this.commitProperty("hasZ"),this.commitProperty("hasM"),this.commitProperty("spatialReference"),{}}get extent(){const{spatialReference:t}=this,e=Object(d.c)(this)
if(!e)return null
const n=new c.default(e)
return n.spatialReference=t,n}writePaths(t,e){e.paths=Object(o.a)(this.paths)}addPath(t){if(!t)return
const e=this.paths,n=e.length
if(function(t){return!Array.isArray(t[0])}(t)){const r=[]
for(let e=0,n=t.length;e<n;e++)r[e]=t[e].toArray()
e[n]=r}else e[n]=t.concat()
return this.notifyChange("paths"),this}clone(){const t=new r
return t.spatialReference=this.spatialReference,t.paths=Object(o.a)(this.paths),t.hasZ=this.hasZ,t.hasM=this.hasM,t}getPoint(t,e){if(!this._validateInputs(t,e))return null
const n=this.paths[t][e],r=this.hasZ,i=this.hasM
return r&&!i?new f.a(n[0],n[1],n[2],void 0,this.spatialReference):i&&!r?new f.a(n[0],n[1],void 0,n[2],this.spatialReference):r&&i?new f.a(n[0],n[1],n[2],n[3],this.spatialReference):new f.a(n[0],n[1],this.spatialReference)}insertPoint(t,e,n){return this._validateInputs(t,e,!0)?(Object(m.a)(this,n),Array.isArray(n)||(n=n.toArray()),this.paths[t].splice(e,0,n),this.notifyChange("paths"),this):this}removePath(t){if(!this._validateInputs(t,null))return null
const e=this.paths.splice(t,1)[0],n=this.spatialReference,r=e.map(t=>new f.a(t,n))
return this.notifyChange("paths"),r}removePoint(t,e){if(!this._validateInputs(t,e))return null
const n=new f.a(this.paths[t].splice(e,1)[0],this.spatialReference)
return this.notifyChange("paths"),n}setPoint(t,e,n){return this._validateInputs(t,e)?(Object(m.a)(this,n),Array.isArray(n)||(n=n.toArray()),this.paths[t][e]=n,this.notifyChange("paths"),this):this}_validateInputs(t,e,n=!1){if(null==t||t<0||t>=this.paths.length)return!1
if(null!=e){const r=this.paths[t]
if(n&&(e<0||e>r.length))return!1
if(!n&&(e<0||e>=r.length))return!1}return!0}toJSON(t){return this.write({},t)}}
Object(i.a)([Object(s.b)({readOnly:!0})],p.prototype,"cache",null),Object(i.a)([Object(s.b)({readOnly:!0})],p.prototype,"extent",null),Object(i.a)([Object(s.b)({type:[[[Number]]],json:{write:{isRequired:!0}}})],p.prototype,"paths",void 0),Object(i.a)([Object(u.a)("paths")],p.prototype,"writePaths",null),p=r=Object(i.a)([Object(a.a)("esri.geometry.Polyline")],p),p.prototype.toJSON.isDefaultToJSON=!0
const b=p},1025:function(t,e,n){"use strict"
n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return c}))
var r=n(968),i=n(975),o=n(1007),s=n(970),a=n(969),u=n(1138)
const c=t=>{let e=class extends t{destroy(){var t,e
this.destroyed||(null!=(t=this._get("handles"))&&t.destroy(),null==(e=this._get("updatingHandles"))||e.destroy())}get handles(){return this._get("handles")||new o.a}get updatingHandles(){return this._get("updatingHandles")||new u.a}}
return Object(r.a)([Object(s.b)({readOnly:!0})],e.prototype,"handles",null),Object(r.a)([Object(s.b)({readOnly:!0})],e.prototype,"updatingHandles",null),e=Object(r.a)([Object(a.a)("esri.core.HandleOwner")],e),e}
let l=class extends(c(i.a)){}
l=Object(r.a)([Object(a.a)("esri.core.HandleOwner")],l)},1029:function(t,e,n){"use strict"
n.d(e,"a",(function(){return v})),n.d(e,"b",(function(){return w})),n.d(e,"c",(function(){return O})),n.d(e,"d",(function(){return A})),n.d(e,"e",(function(){return l})),n.d(e,"f",(function(){return x})),n.d(e,"g",(function(){return o})),n.d(e,"h",(function(){return j})),n.d(e,"i",(function(){return m})),n.d(e,"j",(function(){return g})),n.d(e,"k",(function(){return E})),n.d(e,"l",(function(){return N})),n.d(e,"m",(function(){return a})),n.d(e,"n",(function(){return C})),n.d(e,"o",(function(){return d})),n.d(e,"p",(function(){return S})),n.d(e,"q",(function(){return f})),n.d(e,"r",(function(){return b})),n.d(e,"s",(function(){return y})),n.d(e,"t",(function(){return c})),n.d(e,"u",(function(){return R})),n.d(e,"v",(function(){return p})),n.d(e,"w",(function(){return s})),n.d(e,"x",(function(){return u})),n.d(e,"y",(function(){return T})),n.d(e,"z",(function(){return I})),n.d(e,"A",(function(){return h})),n.d(e,"B",(function(){return P})),n.d(e,"C",(function(){return q})),n.d(e,"D",(function(){return D}))
var r=n(981),i=n(1016)
function o(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function s(t,e,n,r,i,o,s,a,u,c,l,f,h,d,m,p,b){return t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=o,t[5]=s,t[6]=a,t[7]=u,t[8]=c,t[9]=l,t[10]=f,t[11]=h,t[12]=d,t[13]=m,t[14]=p,t[15]=b,t}function a(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function u(t,e){if(t===e){const n=e[1],r=e[2],i=e[3],o=e[6],s=e[7],a=e[11]
t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=n,t[6]=e[9],t[7]=e[13],t[8]=r,t[9]=o,t[11]=e[14],t[12]=i,t[13]=s,t[14]=a}else t[0]=e[0],t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=e[1],t[5]=e[5],t[6]=e[9],t[7]=e[13],t[8]=e[2],t[9]=e[6],t[10]=e[10],t[11]=e[14],t[12]=e[3],t[13]=e[7],t[14]=e[11],t[15]=e[15]
return t}function c(t,e){return l(t,e)||a(t),t}function l(t,e){const n=e[0],r=e[1],i=e[2],o=e[3],s=e[4],a=e[5],u=e[6],c=e[7],l=e[8],f=e[9],h=e[10],d=e[11],m=e[12],p=e[13],b=e[14],y=e[15],g=n*a-r*s,O=n*u-i*s,j=n*c-o*s,v=r*u-i*a,x=r*c-o*a,M=i*c-o*u,_=l*p-f*m,w=l*b-h*m,S=l*y-d*m,E=f*b-h*p,A=f*y-d*p,R=h*y-d*b
let P=g*R-O*A+j*E+v*S-x*w+M*_
return P?(P=1/P,t[0]=(a*R-u*A+c*E)*P,t[1]=(i*A-r*R-o*E)*P,t[2]=(p*M-b*x+y*v)*P,t[3]=(h*x-f*M-d*v)*P,t[4]=(u*S-s*R-c*w)*P,t[5]=(n*R-i*S+o*w)*P,t[6]=(b*j-m*M-y*O)*P,t[7]=(l*M-h*j+d*O)*P,t[8]=(s*A-a*S+c*_)*P,t[9]=(r*S-n*A-o*_)*P,t[10]=(m*x-p*j+y*g)*P,t[11]=(f*j-l*x-d*g)*P,t[12]=(a*w-s*E-u*_)*P,t[13]=(n*E-r*w+i*_)*P,t[14]=(p*O-m*v-b*g)*P,t[15]=(l*v-f*O+h*g)*P,t):null}function f(t,e,n){const r=e[0],i=e[1],o=e[2],s=e[3],a=e[4],u=e[5],c=e[6],l=e[7],f=e[8],h=e[9],d=e[10],m=e[11],p=e[12],b=e[13],y=e[14],g=e[15]
let O=n[0],j=n[1],v=n[2],x=n[3]
return t[0]=O*r+j*a+v*f+x*p,t[1]=O*i+j*u+v*h+x*b,t[2]=O*o+j*c+v*d+x*y,t[3]=O*s+j*l+v*m+x*g,O=n[4],j=n[5],v=n[6],x=n[7],t[4]=O*r+j*a+v*f+x*p,t[5]=O*i+j*u+v*h+x*b,t[6]=O*o+j*c+v*d+x*y,t[7]=O*s+j*l+v*m+x*g,O=n[8],j=n[9],v=n[10],x=n[11],t[8]=O*r+j*a+v*f+x*p,t[9]=O*i+j*u+v*h+x*b,t[10]=O*o+j*c+v*d+x*y,t[11]=O*s+j*l+v*m+x*g,O=n[12],j=n[13],v=n[14],x=n[15],t[12]=O*r+j*a+v*f+x*p,t[13]=O*i+j*u+v*h+x*b,t[14]=O*o+j*c+v*d+x*y,t[15]=O*s+j*l+v*m+x*g,t}function h(t,e,n){const r=n[0],i=n[1],o=n[2]
if(e===t)t[12]=e[0]*r+e[4]*i+e[8]*o+e[12],t[13]=e[1]*r+e[5]*i+e[9]*o+e[13],t[14]=e[2]*r+e[6]*i+e[10]*o+e[14],t[15]=e[3]*r+e[7]*i+e[11]*o+e[15]
else{const n=e[0],s=e[1],a=e[2],u=e[3],c=e[4],l=e[5],f=e[6],h=e[7],d=e[8],m=e[9],p=e[10],b=e[11]
t[0]=n,t[1]=s,t[2]=a,t[3]=u,t[4]=c,t[5]=l,t[6]=f,t[7]=h,t[8]=d,t[9]=m,t[10]=p,t[11]=b,t[12]=n*r+c*i+d*o+e[12],t[13]=s*r+l*i+m*o+e[13],t[14]=a*r+f*i+p*o+e[14],t[15]=u*r+h*i+b*o+e[15]}return t}function d(t,e,n){const r=n[0],i=n[1],o=n[2]
return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t[4]=e[4]*i,t[5]=e[5]*i,t[6]=e[6]*i,t[7]=e[7]*i,t[8]=e[8]*o,t[9]=e[9]*o,t[10]=e[10]*o,t[11]=e[11]*o,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function m(t,e,n,r){let o,s,a,u,c,l,f,h,d,m,p,b,y,g,O,j,v,x,M,_,w,S,E,A,R=r[0],P=r[1],T=r[2],I=Math.sqrt(R*R+P*P+T*T)
return I<Object(i.c)()?null:(I=1/I,R*=I,P*=I,T*=I,o=Math.sin(n),s=Math.cos(n),a=1-s,u=e[0],c=e[1],l=e[2],f=e[3],h=e[4],d=e[5],m=e[6],p=e[7],b=e[8],y=e[9],g=e[10],O=e[11],j=R*R*a+s,v=P*R*a+T*o,x=T*R*a-P*o,M=R*P*a-T*o,_=P*P*a+s,w=T*P*a+R*o,S=R*T*a+P*o,E=P*T*a-R*o,A=T*T*a+s,t[0]=u*j+h*v+b*x,t[1]=c*j+d*v+y*x,t[2]=l*j+m*v+g*x,t[3]=f*j+p*v+O*x,t[4]=u*M+h*_+b*w,t[5]=c*M+d*_+y*w,t[6]=l*M+m*_+g*w,t[7]=f*M+p*_+O*w,t[8]=u*S+h*E+b*A,t[9]=c*S+d*E+y*A,t[10]=l*S+m*E+g*A,t[11]=f*S+p*E+O*A,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)}function p(t,e,n){const r=Math.sin(n),i=Math.cos(n),o=e[4],s=e[5],a=e[6],u=e[7],c=e[8],l=e[9],f=e[10],h=e[11]
return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=o*i+c*r,t[5]=s*i+l*r,t[6]=a*i+f*r,t[7]=u*i+h*r,t[8]=c*i-o*r,t[9]=l*i-s*r,t[10]=f*i-a*r,t[11]=h*i-u*r,t}function b(t,e,n){const r=Math.sin(n),i=Math.cos(n),o=e[0],s=e[1],a=e[2],u=e[3],c=e[8],l=e[9],f=e[10],h=e[11]
return e!==t&&(t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=o*i-c*r,t[1]=s*i-l*r,t[2]=a*i-f*r,t[3]=u*i-h*r,t[8]=o*r+c*i,t[9]=s*r+l*i,t[10]=a*r+f*i,t[11]=u*r+h*i,t}function y(t,e,n){const r=Math.sin(n),i=Math.cos(n),o=e[0],s=e[1],a=e[2],u=e[3],c=e[4],l=e[5],f=e[6],h=e[7]
return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=o*i+c*r,t[1]=s*i+l*r,t[2]=a*i+f*r,t[3]=u*i+h*r,t[4]=c*i-o*r,t[5]=l*i-s*r,t[6]=f*i-a*r,t[7]=h*i-u*r,t}function g(t,e){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t}function O(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function j(t,e,n){if(0===e)return a(t)
let r,o,s,u=n[0],c=n[1],l=n[2],f=Math.sqrt(u*u+c*c+l*l)
return f<Object(i.c)()?null:(f=1/f,u*=f,c*=f,l*=f,r=Math.sin(e),o=Math.cos(e),s=1-o,t[0]=u*u*s+o,t[1]=c*u*s+l*r,t[2]=l*u*s-c*r,t[3]=0,t[4]=u*c*s-l*r,t[5]=c*c*s+o,t[6]=l*c*s+u*r,t[7]=0,t[8]=u*l*s+c*r,t[9]=c*l*s-u*r,t[10]=l*l*s+o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)}function v(t,e){const n=Math.sin(e),r=Math.cos(e)
return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=n,t[7]=0,t[8]=0,t[9]=-n,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function x(t,e){const n=Math.sin(e),r=Math.cos(e)
return t[0]=r,t[1]=n,t[2]=0,t[3]=0,t[4]=-n,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function M(t,e,n){const r=e[0],i=e[1],o=e[2],s=e[3],a=r+r,u=i+i,c=o+o,l=r*a,f=r*u,h=r*c,d=i*u,m=i*c,p=o*c,b=s*a,y=s*u,g=s*c
return t[0]=1-(d+p),t[1]=f+g,t[2]=h-y,t[3]=0,t[4]=f-g,t[5]=1-(l+p),t[6]=m+b,t[7]=0,t[8]=h+y,t[9]=m-b,t[10]=1-(l+d),t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t}const _=Object(r.f)()
function w(t,e){return t[0]=e[12],t[1]=e[13],t[2]=e[14],t}function S(t,e){const n=e[0],r=e[1],i=e[2],o=e[4],s=e[5],a=e[6],u=e[8],c=e[9],l=e[10]
return t[0]=Math.sqrt(n*n+r*r+i*i),t[1]=Math.sqrt(o*o+s*s+a*a),t[2]=Math.sqrt(u*u+c*c+l*l),t}function E(t,e,n,r){const i=e[0],o=e[1],s=e[2],a=e[3],u=i+i,c=o+o,l=s+s,f=i*u,h=i*c,d=i*l,m=o*c,p=o*l,b=s*l,y=a*u,g=a*c,O=a*l,j=r[0],v=r[1],x=r[2]
return t[0]=(1-(m+b))*j,t[1]=(h+O)*j,t[2]=(d-g)*j,t[3]=0,t[4]=(h-O)*v,t[5]=(1-(f+b))*v,t[6]=(p+y)*v,t[7]=0,t[8]=(d+g)*x,t[9]=(p-y)*x,t[10]=(1-(f+m))*x,t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t}function A(t,e){const n=e[0],r=e[1],i=e[2],o=e[3],s=n+n,a=r+r,u=i+i,c=n*s,l=r*s,f=r*a,h=i*s,d=i*a,m=i*u,p=o*s,b=o*a,y=o*u
return t[0]=1-f-m,t[1]=l+y,t[2]=h-b,t[3]=0,t[4]=l-y,t[5]=1-c-m,t[6]=d+p,t[7]=0,t[8]=h+b,t[9]=d-p,t[10]=1-c-f,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function R(t,e,n,r,i,o,s){const a=1/(n-e),u=1/(i-r),c=1/(o-s)
return t[0]=2*o*a,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*o*u,t[6]=0,t[7]=0,t[8]=(n+e)*a,t[9]=(i+r)*u,t[10]=(s+o)*c,t[11]=-1,t[12]=0,t[13]=0,t[14]=s*o*2*c,t[15]=0,t}function P(t,e,n,r,i,o,s){const a=1/(e-n),u=1/(r-i),c=1/(o-s)
return t[0]=-2*a,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*u,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*c,t[11]=0,t[12]=(e+n)*a,t[13]=(i+r)*u,t[14]=(s+o)*c,t[15]=1,t}function T(t,e,n,r){let o,s,u,c,l,f,h,d,m,p
const b=e[0],y=e[1],g=e[2],O=r[0],j=r[1],v=r[2],x=n[0],M=n[1],_=n[2],w=Object(i.c)()
return Math.abs(b-x)<w&&Math.abs(y-M)<w&&Math.abs(g-_)<w?a(t):(h=b-x,d=y-M,m=g-_,p=1/Math.sqrt(h*h+d*d+m*m),h*=p,d*=p,m*=p,o=j*m-v*d,s=v*h-O*m,u=O*d-j*h,p=Math.sqrt(o*o+s*s+u*u),p?(p=1/p,o*=p,s*=p,u*=p):(o=0,s=0,u=0),c=d*u-m*s,l=m*o-h*u,f=h*s-d*o,p=Math.sqrt(c*c+l*l+f*f),p?(p=1/p,c*=p,l*=p,f*=p):(c=0,l=0,f=0),t[0]=o,t[1]=c,t[2]=h,t[3]=0,t[4]=s,t[5]=l,t[6]=d,t[7]=0,t[8]=u,t[9]=f,t[10]=m,t[11]=0,t[12]=-(o*b+s*y+u*g),t[13]=-(c*b+l*y+f*g),t[14]=-(h*b+d*y+m*g),t[15]=1,t)}function I(t,e,n,r){const i=e[0],o=e[1],s=e[2],a=r[0],u=r[1],c=r[2]
let l=i-n[0],f=o-n[1],h=s-n[2],d=l*l+f*f+h*h
d>0&&(d=1/Math.sqrt(d),l*=d,f*=d,h*=d)
let m=u*h-c*f,p=c*l-a*h,b=a*f-u*l
return d=m*m+p*p+b*b,d>0&&(d=1/Math.sqrt(d),m*=d,p*=d,b*=d),t[0]=m,t[1]=p,t[2]=b,t[3]=0,t[4]=f*b-h*p,t[5]=h*m-l*b,t[6]=l*p-f*m,t[7]=0,t[8]=l,t[9]=f,t[10]=h,t[11]=0,t[12]=i,t[13]=o,t[14]=s,t[15]=1,t}function k(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t[3]=e[3]-n[3],t[4]=e[4]-n[4],t[5]=e[5]-n[5],t[6]=e[6]-n[6],t[7]=e[7]-n[7],t[8]=e[8]-n[8],t[9]=e[9]-n[9],t[10]=e[10]-n[10],t[11]=e[11]-n[11],t[12]=e[12]-n[12],t[13]=e[13]-n[13],t[14]=e[14]-n[14],t[15]=e[15]-n[15],t}function C(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]&&t[4]===e[4]&&t[5]===e[5]&&t[6]===e[6]&&t[7]===e[7]&&t[8]===e[8]&&t[9]===e[9]&&t[10]===e[10]&&t[11]===e[11]&&t[12]===e[12]&&t[13]===e[13]&&t[14]===e[14]&&t[15]===e[15]}function N(t,e){if(t===e)return!0
const n=t[0],r=t[1],o=t[2],s=t[3],a=t[4],u=t[5],c=t[6],l=t[7],f=t[8],h=t[9],d=t[10],m=t[11],p=t[12],b=t[13],y=t[14],g=t[15],O=e[0],j=e[1],v=e[2],x=e[3],M=e[4],_=e[5],w=e[6],S=e[7],E=e[8],A=e[9],R=e[10],P=e[11],T=e[12],I=e[13],k=e[14],C=e[15],N=Object(i.c)()
return Math.abs(n-O)<=N*Math.max(1,Math.abs(n),Math.abs(O))&&Math.abs(r-j)<=N*Math.max(1,Math.abs(r),Math.abs(j))&&Math.abs(o-v)<=N*Math.max(1,Math.abs(o),Math.abs(v))&&Math.abs(s-x)<=N*Math.max(1,Math.abs(s),Math.abs(x))&&Math.abs(a-M)<=N*Math.max(1,Math.abs(a),Math.abs(M))&&Math.abs(u-_)<=N*Math.max(1,Math.abs(u),Math.abs(_))&&Math.abs(c-w)<=N*Math.max(1,Math.abs(c),Math.abs(w))&&Math.abs(l-S)<=N*Math.max(1,Math.abs(l),Math.abs(S))&&Math.abs(f-E)<=N*Math.max(1,Math.abs(f),Math.abs(E))&&Math.abs(h-A)<=N*Math.max(1,Math.abs(h),Math.abs(A))&&Math.abs(d-R)<=N*Math.max(1,Math.abs(d),Math.abs(R))&&Math.abs(m-P)<=N*Math.max(1,Math.abs(m),Math.abs(P))&&Math.abs(p-T)<=N*Math.max(1,Math.abs(p),Math.abs(T))&&Math.abs(b-I)<=N*Math.max(1,Math.abs(b),Math.abs(I))&&Math.abs(y-k)<=N*Math.max(1,Math.abs(y),Math.abs(k))&&Math.abs(g-C)<=N*Math.max(1,Math.abs(g),Math.abs(C))}function D(t){const e=Object(i.c)(),n=t[0],r=t[1],o=t[2],s=t[4],a=t[5],u=t[6],c=t[8],l=t[9],f=t[10]
return Math.abs(1-(n*n+s*s+c*c))<=e&&Math.abs(1-(r*r+a*a+l*l))<=e&&Math.abs(1-(o*o+u*u+f*f))<=e}function q(t){return 1===t[0]&&0===t[1]&&0===t[2]&&0===t[4]&&1===t[5]&&0===t[6]&&0===t[8]&&0===t[9]&&1===t[10]}const z=f,G=k
Object.freeze(Object.defineProperty({__proto__:null,add:function(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t[3]=e[3]+n[3],t[4]=e[4]+n[4],t[5]=e[5]+n[5],t[6]=e[6]+n[6],t[7]=e[7]+n[7],t[8]=e[8]+n[8],t[9]=e[9]+n[9],t[10]=e[10]+n[10],t[11]=e[11]+n[11],t[12]=e[12]+n[12],t[13]=e[13]+n[13],t[14]=e[14]+n[14],t[15]=e[15]+n[15],t},adjoint:function(t,e){const n=e[0],r=e[1],i=e[2],o=e[3],s=e[4],a=e[5],u=e[6],c=e[7],l=e[8],f=e[9],h=e[10],d=e[11],m=e[12],p=e[13],b=e[14],y=e[15]
return t[0]=a*(h*y-d*b)-f*(u*y-c*b)+p*(u*d-c*h),t[1]=-(r*(h*y-d*b)-f*(i*y-o*b)+p*(i*d-o*h)),t[2]=r*(u*y-c*b)-a*(i*y-o*b)+p*(i*c-o*u),t[3]=-(r*(u*d-c*h)-a*(i*d-o*h)+f*(i*c-o*u)),t[4]=-(s*(h*y-d*b)-l*(u*y-c*b)+m*(u*d-c*h)),t[5]=n*(h*y-d*b)-l*(i*y-o*b)+m*(i*d-o*h),t[6]=-(n*(u*y-c*b)-s*(i*y-o*b)+m*(i*c-o*u)),t[7]=n*(u*d-c*h)-s*(i*d-o*h)+l*(i*c-o*u),t[8]=s*(f*y-d*p)-l*(a*y-c*p)+m*(a*d-c*f),t[9]=-(n*(f*y-d*p)-l*(r*y-o*p)+m*(r*d-o*f)),t[10]=n*(a*y-c*p)-s*(r*y-o*p)+m*(r*c-o*a),t[11]=-(n*(a*d-c*f)-s*(r*d-o*f)+l*(r*c-o*a)),t[12]=-(s*(f*b-h*p)-l*(a*b-u*p)+m*(a*h-u*f)),t[13]=n*(f*b-h*p)-l*(r*b-i*p)+m*(r*h-i*f),t[14]=-(n*(a*b-u*p)-s*(r*b-i*p)+m*(r*u-i*a)),t[15]=n*(a*h-u*f)-s*(r*h-i*f)+l*(r*u-i*a),t},copy:o,determinant:function(t){const e=t[0],n=t[1],r=t[2],i=t[3],o=t[4],s=t[5],a=t[6],u=t[7],c=t[8],l=t[9],f=t[10],h=t[11],d=t[12],m=t[13],p=t[14],b=t[15]
return(e*s-n*o)*(f*b-h*p)-(e*a-r*o)*(l*b-h*m)+(e*u-i*o)*(l*p-f*m)+(n*a-r*s)*(c*b-h*d)-(n*u-i*s)*(c*p-f*d)+(r*u-i*a)*(c*m-l*d)},equals:N,exactEquals:C,frob:function(t){return Math.sqrt(t[0]**2+t[1]**2+t[2]**2+t[3]**2+t[4]**2+t[5]**2+t[6]**2+t[7]**2+t[8]**2+t[9]**2+t[10]**2+t[11]**2+t[12]**2+t[13]**2+t[14]**2+t[15]**2)},fromQuat:A,fromQuat2:function(t,e){const n=_,r=-e[0],i=-e[1],o=-e[2],s=e[3],a=e[4],u=e[5],c=e[6],l=e[7],f=r*r+i*i+o*o+s*s
return f>0?(n[0]=2*(a*s+l*r+u*o-c*i)/f,n[1]=2*(u*s+l*i+c*r-a*o)/f,n[2]=2*(c*s+l*o+a*i-u*r)/f):(n[0]=2*(a*s+l*r+u*o-c*i),n[1]=2*(u*s+l*i+c*r-a*o),n[2]=2*(c*s+l*o+a*i-u*r)),M(t,e,n),t},fromRotation:j,fromRotationTranslation:M,fromRotationTranslationScale:E,fromRotationTranslationScaleOrigin:function(t,e,n,r,i){const o=e[0],s=e[1],a=e[2],u=e[3],c=o+o,l=s+s,f=a+a,h=o*c,d=o*l,m=o*f,p=s*l,b=s*f,y=a*f,g=u*c,O=u*l,j=u*f,v=r[0],x=r[1],M=r[2],_=i[0],w=i[1],S=i[2],E=(1-(p+y))*v,A=(d+j)*v,R=(m-O)*v,P=(d-j)*x,T=(1-(h+y))*x,I=(b+g)*x,k=(m+O)*M,C=(b-g)*M,N=(1-(h+p))*M
return t[0]=E,t[1]=A,t[2]=R,t[3]=0,t[4]=P,t[5]=T,t[6]=I,t[7]=0,t[8]=k,t[9]=C,t[10]=N,t[11]=0,t[12]=n[0]+_-(E*_+P*w+k*S),t[13]=n[1]+w-(A*_+T*w+C*S),t[14]=n[2]+S-(R*_+I*w+N*S),t[15]=1,t},fromScaling:O,fromTranslation:g,fromXRotation:v,fromYRotation:function(t,e){const n=Math.sin(e),r=Math.cos(e)
return t[0]=r,t[1]=0,t[2]=-n,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=n,t[9]=0,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},fromZRotation:x,frustum:R,getRotation:function(t,e){const n=e[0]+e[5]+e[10]
let r=0
return n>0?(r=2*Math.sqrt(n+1),t[3]=.25*r,t[0]=(e[6]-e[9])/r,t[1]=(e[8]-e[2])/r,t[2]=(e[1]-e[4])/r):e[0]>e[5]&&e[0]>e[10]?(r=2*Math.sqrt(1+e[0]-e[5]-e[10]),t[3]=(e[6]-e[9])/r,t[0]=.25*r,t[1]=(e[1]+e[4])/r,t[2]=(e[8]+e[2])/r):e[5]>e[10]?(r=2*Math.sqrt(1+e[5]-e[0]-e[10]),t[3]=(e[8]-e[2])/r,t[0]=(e[1]+e[4])/r,t[1]=.25*r,t[2]=(e[6]+e[9])/r):(r=2*Math.sqrt(1+e[10]-e[0]-e[5]),t[3]=(e[1]-e[4])/r,t[0]=(e[8]+e[2])/r,t[1]=(e[6]+e[9])/r,t[2]=.25*r),t},getScaling:S,getTranslation:w,hasIdentityRotation:q,identity:a,invert:l,invertOrIdentity:c,isOrthoNormal:D,lookAt:T,mul:z,multiply:f,multiplyScalar:function(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t[4]=e[4]*n,t[5]=e[5]*n,t[6]=e[6]*n,t[7]=e[7]*n,t[8]=e[8]*n,t[9]=e[9]*n,t[10]=e[10]*n,t[11]=e[11]*n,t[12]=e[12]*n,t[13]=e[13]*n,t[14]=e[14]*n,t[15]=e[15]*n,t},multiplyScalarAndAdd:function(t,e,n,r){return t[0]=e[0]+n[0]*r,t[1]=e[1]+n[1]*r,t[2]=e[2]+n[2]*r,t[3]=e[3]+n[3]*r,t[4]=e[4]+n[4]*r,t[5]=e[5]+n[5]*r,t[6]=e[6]+n[6]*r,t[7]=e[7]+n[7]*r,t[8]=e[8]+n[8]*r,t[9]=e[9]+n[9]*r,t[10]=e[10]+n[10]*r,t[11]=e[11]+n[11]*r,t[12]=e[12]+n[12]*r,t[13]=e[13]+n[13]*r,t[14]=e[14]+n[14]*r,t[15]=e[15]+n[15]*r,t},ortho:P,perspective:function(t,e,n,r,i){const o=1/Math.tan(e/2)
let s
return t[0]=o/n,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=i&&i!==1/0?(s=1/(r-i),t[10]=(i+r)*s,t[14]=2*i*r*s):(t[10]=-1,t[14]=-2*r),t},perspectiveFromFieldOfView:function(t,e,n,r){const i=Math.tan(e.upDegrees*Math.PI/180),o=Math.tan(e.downDegrees*Math.PI/180),s=Math.tan(e.leftDegrees*Math.PI/180),a=Math.tan(e.rightDegrees*Math.PI/180),u=2/(s+a),c=2/(i+o)
return t[0]=u,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=c,t[6]=0,t[7]=0,t[8]=-(s-a)*u*.5,t[9]=(i-o)*c*.5,t[10]=r/(n-r),t[11]=-1,t[12]=0,t[13]=0,t[14]=r*n/(n-r),t[15]=0,t},rotate:m,rotateX:p,rotateY:b,rotateZ:y,scale:d,set:s,str:function(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"},sub:G,subtract:k,targetTo:I,translate:h,transpose:u},Symbol.toStringTag,{value:"Module"}))},1036:function(t,e,n){"use strict"
n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}))
var r=n(976)
const i=Object(r.b)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon"}),o=Object(r.b)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh"})},1038:function(t,e,n){"use strict"
n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return c}))
var r=n(23),i=n(1005)
const o={ar:"ar-u-nu-latn"}
let s=new WeakMap,a={}
function u(t={}){const e={}
return null!=t.digitSeparator&&(e.useGrouping=t.digitSeparator),null!=t.places&&(e.minimumFractionDigits=e.maximumFractionDigits=t.places),e}function c(t,e){return-0===t&&(t=0),function(t){const e=t||a
if(!s.has(e)){const n=Object(i.b)(),r=o[Object(i.b)()]||n
s.set(e,new Intl.NumberFormat(r,t))}return Object(r.d)(s.get(e))}(e).format(t)}Object(i.a)(()=>{s=new WeakMap,a={}})},1039:function(t,e,n){"use strict"
n.d(e,"a",(function(){return b})),n.d(e,"b",(function(){return y}))
var r=n(976),i=n(1005)
const o={year:"numeric",month:"numeric",day:"numeric"},s={year:"numeric",month:"long",day:"numeric"},a={year:"numeric",month:"short",day:"numeric"},u={year:"numeric",month:"long",weekday:"long",day:"numeric"},c={hour:"numeric",minute:"numeric"},l={...c,second:"numeric"},f={"short-date":o,"short-date-short-time":{...o,...c},"short-date-short-time-24":{...o,...c,hour12:!1},"short-date-long-time":{...o,...l},"short-date-long-time-24":{...o,...l,hour12:!1},"short-date-le":o,"short-date-le-short-time":{...o,...c},"short-date-le-short-time-24":{...o,...c,hour12:!1},"short-date-le-long-time":{...o,...l},"short-date-le-long-time-24":{...o,...l,hour12:!1},"long-month-day-year":s,"long-month-day-year-short-time":{...s,...c},"long-month-day-year-short-time-24":{...s,...c,hour12:!1},"long-month-day-year-long-time":{...s,...l},"long-month-day-year-long-time-24":{...s,...l,hour12:!1},"day-short-month-year":a,"day-short-month-year-short-time":{...a,...c},"day-short-month-year-short-time-24":{...a,...c,hour12:!1},"day-short-month-year-long-time":{...a,...l},"day-short-month-year-long-time-24":{...a,...l,hour12:!1},"long-date":u,"long-date-short-time":{...u,...c},"long-date-short-time-24":{...u,...c,hour12:!1},"long-date-long-time":{...u,...l},"long-date-long-time-24":{...u,...l,hour12:!1},"long-month-year":{month:"long",year:"numeric"},"short-month-year":{month:"short",year:"numeric"},year:{year:"numeric"},"short-time":c,"long-time":l},h=Object(r.b)()({shortDate:"short-date",shortDateShortTime:"short-date-short-time",shortDateShortTime24:"short-date-short-time-24",shortDateLongTime:"short-date-long-time",shortDateLongTime24:"short-date-long-time-24",shortDateLE:"short-date-le",shortDateLEShortTime:"short-date-le-short-time",shortDateLEShortTime24:"short-date-le-short-time-24",shortDateLELongTime:"short-date-le-long-time",shortDateLELongTime24:"short-date-le-long-time-24",longMonthDayYear:"long-month-day-year",longMonthDayYearShortTime:"long-month-day-year-short-time",longMonthDayYearShortTime24:"long-month-day-year-short-time-24",longMonthDayYearLongTime:"long-month-day-year-long-time",longMonthDayYearLongTime24:"long-month-day-year-long-time-24",dayShortMonthYear:"day-short-month-year",dayShortMonthYearShortTime:"day-short-month-year-short-time",dayShortMonthYearShortTime24:"day-short-month-year-short-time-24",dayShortMonthYearLongTime:"day-short-month-year-long-time",dayShortMonthYearLongTime24:"day-short-month-year-long-time-24",longDate:"long-date",longDateShortTime:"long-date-short-time",longDateShortTime24:"long-date-short-time-24",longDateLongTime:"long-date-long-time",longDateLongTime24:"long-date-long-time-24",longMonthYear:"long-month-year",shortMonthYear:"short-month-year",year:"year"}),d=(h.apiValues,h.toJSON.bind(h),h.fromJSON.bind(h),{ar:"ar-u-nu-latn-ca-gregory"})
let m=new WeakMap,p=f["short-date-short-time"]
function b(t){return t?f[t]:null}function y(t,e){return function(t){const e=t||p
let n=m.get(e)
if(!n){const t=Object(i.b)(),r=d[Object(i.b)()]||t
n=new Intl.DateTimeFormat(r,e),m.set(e,n)}return n}(e).format(t)}Object(i.a)(()=>{m=new WeakMap,p=f["short-date-short-time"]})},1041:function(t,e,n){"use strict"
n.d(e,"a",(function(){return L})),n.d(e,"b",(function(){return G})),n.d(e,"c",(function(){return U})),n.d(e,"d",(function(){return m})),n.d(e,"e",(function(){return O})),n.d(e,"f",(function(){return x})),n.d(e,"g",(function(){return v})),n.d(e,"h",(function(){return s})),n.d(e,"i",(function(){return b})),n.d(e,"j",(function(){return g})),n.d(e,"k",(function(){return T})),n.d(e,"l",(function(){return q})),n.d(e,"m",(function(){return c})),n.d(e,"n",(function(){return h})),n.d(e,"o",(function(){return d})),n.d(e,"p",(function(){return l})),n.d(e,"q",(function(){return f})),n.d(e,"r",(function(){return k})),n.d(e,"s",(function(){return C})),n.d(e,"t",(function(){return a})),n.d(e,"u",(function(){return E})),n.d(e,"v",(function(){return y})),n.d(e,"w",(function(){return M})),n.d(e,"x",(function(){return _})),n.d(e,"y",(function(){return N})),n.d(e,"z",(function(){return D})),n.d(e,"A",(function(){return w})),n.d(e,"B",(function(){return S})),n.d(e,"C",(function(){return P})),n.d(e,"D",(function(){return R})),n.d(e,"E",(function(){return A})),n.d(e,"F",(function(){return j})),n.d(e,"G",(function(){return u})),n.d(e,"H",(function(){return I})),n.d(e,"I",(function(){return p})),n.d(e,"J",(function(){return z}))
var r=n(23),i=n(770),o=n(996)
function s(t=U){return[t[0],t[1],t[2],t[3],t[4],t[5]]}function a(t,e,n,r,i,o,a=s()){return a[0]=t,a[1]=e,a[2]=n,a[3]=r,a[4]=i,a[5]=o,a}function u(t,e){const n=isFinite(t[2])||isFinite(t[5])
return new i.default(n?{xmin:t[0],xmax:t[3],ymin:t[1],ymax:t[4],zmin:t[2],zmax:t[5],spatialReference:e}:{xmin:t[0],xmax:t[3],ymin:t[1],ymax:t[4],spatialReference:e})}function c(t,e){t[0]=Math.min(t[0],e[0]),t[1]=Math.min(t[1],e[1]),t[2]=Math.min(t[2],e[2]),t[3]=Math.max(t[3],e[3]),t[4]=Math.max(t[4],e[4]),t[5]=Math.max(t[5],e[5])}function l(t,e){t[0]=Math.min(t[0],e[0]),t[1]=Math.min(t[1],e[1]),t[3]=Math.max(t[3],e[2]),t[4]=Math.max(t[4],e[3])}function f(t,e){t[0]=Math.min(t[0],e[0]),t[1]=Math.min(t[1],e[1]),t[2]=Math.min(t[2],e[2]),t[3]=Math.max(t[3],e[0]),t[4]=Math.max(t[4],e[1]),t[5]=Math.max(t[5],e[2])}function h(t,e,n=0,r=e.length/3){let i=t[0],o=t[1],s=t[2],a=t[3],u=t[4],c=t[5]
for(let t=0;t<r;t++)i=Math.min(i,e[n+3*t]),o=Math.min(o,e[n+3*t+1]),s=Math.min(s,e[n+3*t+2]),a=Math.max(a,e[n+3*t]),u=Math.max(u,e[n+3*t+1]),c=Math.max(c,e[n+3*t+2])
t[0]=i,t[1]=o,t[2]=s,t[3]=a,t[4]=u,t[5]=c}function d(t,e,n){const r=e.length
let i=t[0],o=t[1],s=t[2],a=t[3],u=t[4],c=t[5]
if(n)for(let t=0;t<r;t++){const n=e[t]
i=Math.min(i,n[0]),o=Math.min(o,n[1]),s=Math.min(s,n[2]),a=Math.max(a,n[0]),u=Math.max(u,n[1]),c=Math.max(c,n[2])}else for(let t=0;t<r;t++){const n=e[t]
i=Math.min(i,n[0]),o=Math.min(o,n[1]),a=Math.max(a,n[0]),u=Math.max(u,n[1])}t[0]=i,t[1]=o,t[2]=s,t[3]=a,t[4]=u,t[5]=c}function m(t){for(let e=0;e<6;e++)if(!isFinite(t[e]))return!1
return!0}function p(t){return t[0]>=t[3]?0:t[3]-t[0]}function b(t){return t[1]>=t[4]?0:t[4]-t[1]}function y(t){return t[2]>=t[5]?0:t[5]-t[2]}function g(t){const e=p(t),n=y(t),r=b(t)
return Math.sqrt(e*e+n*n+r*r)}function O(t,e=[0,0,0]){return e[0]=t[0]+p(t)/2,e[1]=t[1]+b(t)/2,e[2]=t[2]+y(t)/2,e}function j(t,e=[0,0,0]){return e[0]=p(t),e[1]=b(t),e[2]=y(t),e}function v(t,e){return e[0]>=t[0]&&e[1]>=t[1]&&e[2]>=t[2]&&e[0]<=t[3]&&e[1]<=t[4]&&e[2]<=t[5]}function x(t,e){return e[0]>=t[0]&&e[1]>=t[1]&&e[2]>=t[2]&&e[3]<=t[3]&&e[4]<=t[4]&&e[5]<=t[5]}function M(t,e){return Math.max(e[0],t[0])<=Math.min(e[3],t[3])&&Math.max(e[1],t[1])<=Math.min(e[4],t[4])&&Math.max(e[2],t[2])<=Math.min(e[5],t[5])}function _(t,e){return!!Object(r.k)(e)||M(t,e)}function w(t,e,n,r,i=t){return i[0]=t[0]+e,i[1]=t[1]+n,i[2]=t[2]+r,i[3]=t[3]+e,i[4]=t[4]+n,i[5]=t[5]+r,i}function S(t,e,n=t){const r=t[0]+p(t)/2,i=t[1]+b(t)/2,o=t[2]+y(t)/2
return n[0]=r+(t[0]-r)*e,n[1]=i+(t[1]-i)*e,n[2]=o+(t[2]-o)*e,n[3]=r+(t[3]-r)*e,n[4]=i+(t[4]-i)*e,n[5]=o+(t[5]-o)*e,n}function E(t,e){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function A(t,e,n=t){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n!==t&&(n[3]=t[3],n[4]=t[4],n[5]=t[5]),n}function R(t,e,n=t){return n[3]=e[0],n[4]=e[1],n[5]=e[2],n!==t&&(n[0]=t[0],n[1]=t[1],n[2]=t[2]),t}function P(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t}function T(t){return t?P(t,L):s(L)}function I(t,e){return e||(e=Object(o.m)()),e[0]=t[0],e[1]=t[1],e[2]=t[3],e[3]=t[4],e}function k(t,e){return t[0]=e[0],t[1]=e[1],t[2]=Number.NEGATIVE_INFINITY,t[3]=e[2],t[4]=e[3],t[5]=Number.POSITIVE_INFINITY,t}function C(t,e,n,r,i){return t[0]=e,t[1]=n,t[2]=Number.NEGATIVE_INFINITY,t[3]=r,t[4]=i,t[5]=Number.POSITIVE_INFINITY,t}function N(t){return 6===t.length}function D(t){return 0===p(t)&&0===b(t)&&0===y(t)}function q(t,e,n){if(Object(r.k)(t)||Object(r.k)(e))return t===e
if(!N(t)||!N(e))return!1
if(n){for(let r=0;r<t.length;r++)if(!n(t[r],e[r]))return!1}else for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1
return!0}function z(t,e,n,r,i,o){return a(t,e,n,r,i,o,F)}const G=[-1/0,-1/0,-1/0,1/0,1/0,1/0],L=[1/0,1/0,1/0,-1/0,-1/0,-1/0],U=[0,0,0,0,0,0],F=s()},1043:function(t,e,n){"use strict"
function r(t){return t&&("function"==typeof t.on||"function"==typeof t.addEventListener)}function i(t,e,n){if(!r(t))throw new TypeError("target is not a Evented or EventTarget object")
if("on"in t)return t.on(e,n)
if(Array.isArray(e)){const r=e.slice()
for(const e of r)t.addEventListener(e,n)
return{remove(){for(const e of r)t.removeEventListener(e,n)}}}return t.addEventListener(e,n),{remove(){t.removeEventListener(e,n)}}}function o(t,e,n){if(!r(t))throw new TypeError("target is not a Evented or EventTarget object")
if("once"in t)return t.once(e,n)
const o=i(t,e,e=>{o.remove(),n.call(t,e)})
return{remove(){o.remove()}}}n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return o}))
const s={Win:"Meta",Scroll:"ScrollLock",Spacebar:" ",Down:"ArrowDown",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Del:"Delete",Apps:"ContextMenu",Esc:"Escape",Multiply:"*",Add:"+",Subtract:"-",Decimal:".",Divide:"/"}
function a({key:t}){return s[t]||t}},1046:function(t,e,n){"use strict"
n.d(e,"a",(function(){return m}))
var r=n(968),i=n(446),o=n(1058),s=n(973),a=n(1044),u=n(970),c=n(969)
const l="loaded",f=t=>{let e=class extends t{constructor(...t){super(...t),this._loadController=null,this.loadError=null,this.loadStatus="not-loaded",this._set("loadWarnings",[]),this.addResolvingPromise(new Promise(t=>{const e=this.load.bind(this)
this.load=n=>{const r=new Promise((t,e)=>{const r=Object(s.o)(n,e)
this.destroyed&&e(new i.a("load:instance-destroyed",`Instance of '${this.declaredClass||this.constructor.name}' is already destroyed`,{instance:this})),this._promiseProps.when(t,e).finally(()=>{r&&r.remove()})})
if("not-loaded"===this.loadStatus){this._set("loadStatus","loading")
const t=this._loadController=new AbortController
e({signal:t.signal}),Object(s.n)(t.signal,()=>{this._promiseProps.abort()})}return t(),r}})),this.when(()=>{this._set("loadStatus",l),this._loadController=null},t=>{this._set("loadStatus","failed"),this._set("loadError",t),this._loadController=null})}get loaded(){return this.loadStatus===l}get loadWarnings(){return this._get("loadWarnings")}load(){return null}cancelLoad(){var t
return this.isFulfilled()||(this._set("loadError",new i.a("load:cancelled","Cancelled")),null!=(t=this._loadController)&&t.abort()),this}}
return Object(r.a)([Object(u.b)({readOnly:!0})],e.prototype,"loaded",null),Object(r.a)([Object(u.b)({readOnly:!0})],e.prototype,"loadError",void 0),Object(r.a)([Object(u.b)({clonable:!1})],e.prototype,"loadStatus",void 0),Object(r.a)([Object(u.b)({type:[a.a],readOnly:!0})],e.prototype,"loadWarnings",null),e=Object(r.a)([Object(c.a)("esri.core.Loadable")],e),e}
let h=class extends(f(o.a)){}
var d
h=Object(r.a)([Object(c.a)("esri.core.Loadable")],h),(d=h||(h={})).LoadableMixin=f,d.isLoadable=function(t){return!(!t||!t.load)}
const m=h},1052:function(t,e,n){"use strict"
n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s}))
class r{constructor(t,e,n,r){this.semiMajorAxis=t,this.flattening=e,this.outerAtmosphereRimWidth=n
const i=1-this.flattening
this.semiMinorAxis=this.semiMajorAxis*i,this.halfSemiMajorAxis=this.semiMajorAxis/2,this.halfCircumference=Math.PI*this.semiMajorAxis,this.metersPerDegree=this.halfCircumference/180,this.inverseFlattening=1/(1-this.flattening)-1,this.eccentricitySquared=r||2*this.flattening-this.flattening*this.flattening,this.meanRadiusSemiAxes=(2*this.semiMajorAxis+this.semiMinorAxis)/3}get radius(){return this.semiMajorAxis}}const i=new r(6378137,1/298.257223563,3e5,.006694379990137799),o=new r(3396190,1/169.8944472236118,23e4),s=new r(1737400,0,0)},1054:function(t,e,n){"use strict"
n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return y})),n.d(e,"c",(function(){return d})),n.d(e,"d",(function(){return o})),n.d(e,"e",(function(){return f})),n.d(e,"f",(function(){return h})),n.d(e,"g",(function(){return a})),n.d(e,"h",(function(){return s})),n.d(e,"i",(function(){return u}))
var r=n(23),i=n(374)
function o(t,e){const n=e&&e.url&&e.url.path
if(t&&n&&(t=Object(i.F)(t,n,{preserveProtocolRelative:!0}),e.portalItem&&e.readResourcePaths)){const n=Object(i.H)(t,e.portalItem.itemUrl)
null!=n&&l.test(n)&&e.readResourcePaths.push(e.portalItem.resourceFromPath(n).path)}return m(t,e&&e.portal)}function s(t,e,n=p.YES){if(null==t)return t
!Object(i.x)(t)&&e&&e.blockedRelativeUrls&&e.blockedRelativeUrls.push(t)
let r=Object(i.F)(t)
if(e){const n=e.verifyItemRelativeUrls&&e.verifyItemRelativeUrls.rootPath||e.url&&e.url.path
if(n){const o=m(n,e.portal),s=m(r,e.portal)
r=Object(i.H)(s,o,o),null!=r&&r!==s&&r!==t&&e.verifyItemRelativeUrls&&e.verifyItemRelativeUrls.writtenUrls.push(r)}}return r=d(r,null==e?void 0:e.portal),Object(i.x)(r)&&(r=Object(i.I)(r)),null!=e&&e.resources&&null!=e&&e.portalItem&&!Object(i.x)(r)&&!Object(i.z)(r)&&n===p.YES&&e.resources.toKeep.push({resource:e.portalItem.resourceFromPath(r),compress:!1}),r}function a(t,e,n){return o(t,n)}function u(t,e,n,r){const i=s(t,r)
void 0!==i&&(e[n]=i)}const c=/\/items\/([^\/]+)\/resources\/(.*)/,l=/^\.\/resources\//
function f(t){var e,n,r
return null!=(e=null==(n=null!=(r=null==t?void 0:t.match(c))?r:null)?void 0:n[1])?e:null}function h(t){var e
const n=null!=(e=null==t?void 0:t.match(c))?e:null
if(null==n)return null
const o=n[2],s=o.lastIndexOf("/")
if(-1===s){const{path:t,extension:e}=Object(i.O)(o)
return{prefix:null,filename:t,extension:Object(r.u)(e)}}const{path:a,extension:u}=Object(i.O)(o.slice(s+1))
return{prefix:o.slice(0,s),filename:a,extension:Object(r.u)(u)}}function d(t,e){return e&&!e.isPortal&&e.urlKey&&e.customBaseUrl?Object(i.g)(t,`${e.urlKey}.${e.customBaseUrl}`,e.portalHostname):t}function m(t,e){if(!e||e.isPortal||!e.urlKey||!e.customBaseUrl)return t
const n=`${e.urlKey}.${e.customBaseUrl}`,r=Object(i.m)()
return Object(i.v)(r,`${r.scheme}://${n}`)?Object(i.g)(t,e.portalHostname,n):Object(i.g)(t,n,e.portalHostname)}var p,b;(b=p||(p={}))[b.YES=0]="YES",b[b.NO=1]="NO"
const y=Object.freeze(Object.defineProperty({__proto__:null,get MarkKeep(){return p},ensureMainOnlineDomain:d,fromJSON:o,itemIdFromResourceUrl:f,prefixAndFilenameFromResourceUrl:h,read:a,toJSON:s,write:u},Symbol.toStringTag,{value:"Module"}))},1055:function(t,e,n){"use strict"
n.d(e,"a",(function(){return p}))
var r,i=n(968),o=n(234),s=n(970),a=(n(971),n(969)),u=n(974),c=n(770),l=n(1004),f=n(992),h=n(1105)
function d(t){return(e,n)=>null==e?n:null==n?e:t(e,n)}let m=r=class extends l.a{constructor(...t){super(...t),this.points=[],this.type="multipoint"}normalizeCtorArgs(t,e){if(!t&&!e)return{}
const n={}
Array.isArray(t)?(n.points=t,n.spatialReference=e):function(t){return t&&("esri.geometry.SpatialReference"===t.declaredClass||null!=t.wkid)}(t)?n.spatialReference=t:(t.points&&(n.points=t.points),t.spatialReference&&(n.spatialReference=t.spatialReference),t.hasZ&&(n.hasZ=t.hasZ),t.hasM&&(n.hasM=t.hasM))
const r=n.points&&n.points[0]
return r&&(void 0===n.hasZ&&void 0===n.hasM?(n.hasZ=r.length>2,n.hasM=!1):void 0===n.hasZ?n.hasZ=r.length>3:void 0===n.hasM&&(n.hasM=r.length>3)),n}get cache(){return this.commitProperty("points"),this.commitProperty("hasZ"),this.commitProperty("hasM"),this.commitProperty("spatialReference"),{}}get extent(){const t=this.points
if(!t.length)return null
const e=new c.default,n=this.hasZ,r=this.hasM,i=n?3:2,o=t[0],s=d(Math.min),a=d(Math.max)
let u,l,f,h,[m,p]=o,[b,y]=o
for(let e=0,o=t.length;e<o;e++){const o=t[e],[c,d]=o
if(m=s(m,c),p=s(p,d),b=a(b,c),y=a(y,d),n&&o.length>2){const t=o[2]
u=s(u,t),f=a(f,t)}if(r&&o.length>i){const t=o[i]
l=s(l,t),h=a(h,t)}}return e.xmin=m,e.ymin=p,e.xmax=b,e.ymax=y,e.spatialReference=this.spatialReference,n?(e.zmin=u,e.zmax=f):(e.zmin=void 0,e.zmax=void 0),r?(e.mmin=l,e.mmax=h):(e.mmin=void 0,e.mmax=void 0),e}writePoints(t,e){e.points=Object(o.a)(this.points)}addPoint(t){return Object(h.a)(this,t),Array.isArray(t)?this.points.push(t):this.points.push(t.toArray()),this.notifyChange("points"),this}clone(){const t={points:Object(o.a)(this.points),spatialReference:this.spatialReference}
return this.hasZ&&(t.hasZ=!0),this.hasM&&(t.hasM=!0),new r(t)}getPoint(t){if(!this._validateInputs(t))return null
const e=this.points[t],n={x:e[0],y:e[1],spatialReference:this.spatialReference}
let r=2
return this.hasZ&&(n.z=e[2],r=3),this.hasM&&(n.m=e[r]),new f.a(n)}removePoint(t){if(!this._validateInputs(t))return null
const e=new f.a(this.points.splice(t,1)[0],this.spatialReference)
return this.notifyChange("points"),e}setPoint(t,e){return this._validateInputs(t)?(Object(h.a)(this,e),Array.isArray(e)||(e=e.toArray()),this.points[t]=e,this.notifyChange("points"),this):this}toJSON(t){return this.write({},t)}_validateInputs(t){return null!=t&&t>=0&&t<this.points.length}}
Object(i.a)([Object(s.b)({readOnly:!0})],m.prototype,"cache",null),Object(i.a)([Object(s.b)()],m.prototype,"extent",null),Object(i.a)([Object(s.b)({type:[[Number]],json:{write:{isRequired:!0}}})],m.prototype,"points",void 0),Object(i.a)([Object(u.a)("points")],m.prototype,"writePoints",null),m=r=Object(i.a)([Object(a.a)("esri.geometry.Multipoint")],m),m.prototype.toJSON.isDefaultToJSON=!0
const p=m},1058:function(t,e,n){"use strict"
n.d(e,"a",(function(){return h})),n.d(e,"b",(function(){return f}))
var r,i,o=n(968),s=n(975),a=n(23),u=n(973),c=n(969);(i=r||(r={}))[i.PENDING=0]="PENDING",i[i.RESOLVED=1]="RESOLVED",i[i.REJECTED=2]="REJECTED"
class l{constructor(t){this.instance=t,this._resolver=Object(u.d)(),this._status=r.PENDING,this._resolvingPromises=[],this._resolver.promise.then(()=>{this._status=r.RESOLVED,this._cleanUp()},()=>{this._status=r.REJECTED,this._cleanUp()})}addResolvingPromise(t){this._resolvingPromises.push(t),this._tryResolve()}isResolved(){return this._status===r.RESOLVED}isRejected(){return this._status===r.REJECTED}isFulfilled(){return this._status!==r.PENDING}abort(){this._resolver.reject(Object(u.c)())}when(t,e){return this._resolver.promise.then(t,e)}_cleanUp(){this._allPromise=this._resolvingPromises=this._allPromise=null}_tryResolve(){if(this.isFulfilled())return
const t=Object(u.d)(),e=[...this._resolvingPromises,Object(a.d)(t.promise)],n=this._allPromise=Promise.all(e)
n.then(()=>{this.isFulfilled()||this._allPromise!==n||this._resolver.resolve(this.instance)},t=>{this.isFulfilled()||this._allPromise!==n||Object(u.j)(t)||this._resolver.reject(t)}),t.resolve()}}const f=t=>{let e=class extends t{constructor(...t){super(...t),this._promiseProps=new l(this),this.addResolvingPromise(Promise.resolve())}isResolved(){return this._promiseProps.isResolved()}isRejected(){return this._promiseProps.isRejected()}isFulfilled(){return this._promiseProps.isFulfilled()}when(t,e){return new Promise((t,e)=>{this._promiseProps.when(t,e)}).then(t,e)}catch(t){return this.when(null,t)}addResolvingPromise(t){t&&!this._promiseProps.isFulfilled()&&this._promiseProps.addResolvingPromise("_promiseProps"in t?t.when():t)}}
return e=Object(o.a)([Object(c.a)("esri.core.Promise")],e),e}
let h=class extends(f(s.a)){}
h=Object(o.a)([Object(c.a)("esri.core.Promise")],h)},1063:function(t,e,n){"use strict"
n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return a}))
var r=n(968),i=n(969)
let o=0
const s=t=>{let e=class extends t{constructor(...t){super(...t),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:Date.now().toString(16)+"-object-"+o++})}}
return e=Object(r.a)([Object(i.a)("esri.core.Identifiable")],e),e},a=t=>{let e=class extends t{constructor(...t){super(...t),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:o++})}}
return e=Object(r.a)([Object(i.a)("esri.core.NumericIdentifiable")],e),e}
let u=class extends(s(class{})){}
u=Object(r.a)([Object(i.a)("esri.core.Identifiable")],u)},1066:function(t,e,n){"use strict"
n.d(e,"a",(function(){return y})),n.d(e,"b",(function(){return b})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return o})),n.d(e,"e",(function(){return s})),n.d(e,"f",(function(){return f})),n.d(e,"g",(function(){return h})),n.d(e,"h",(function(){return d})),n.d(e,"i",(function(){return v})),n.d(e,"j",(function(){return x})),n.d(e,"k",(function(){return m})),n.d(e,"l",(function(){return u})),n.d(e,"m",(function(){return g})),n.d(e,"n",(function(){return O}))
var r=n(445),i=n(988)
function o(t){if(!t)return null
if(Array.isArray(t))return t
const e=t.hasZ,n=t.hasM
if("point"===t.type)return n&&e?[t.x,t.y,t.z,t.m]:e?[t.x,t.y,t.z]:n?[t.x,t.y,t.m]:[t.x,t.y]
if("polygon"===t.type)return t.rings.slice(0)
if("polyline"===t.type)return t.paths.slice(0)
if("multipoint"===t.type)return t.points.slice(0)
if("extent"===t.type){const e=t.clone().normalize()
if(!e)return null
let n=!1,r=!1
return e.forEach(t=>{t.hasZ&&(n=!0),t.hasM&&(r=!0)}),e.map(t=>{const e=[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]
if(n&&t.hasZ){const n=.5*(t.zmax-t.zmin)
for(let t=0;t<e.length;t++)e[t].push(n)}if(r&&t.hasM){const n=.5*(t.mmax-t.mmin)
for(let t=0;t<e.length;t++)e[t].push(n)}return e})}return null}function s(t,e){const n=e[0]-t[0],r=e[1]-t[1]
if(t.length>2&&e.length>2){const i=t[2]-e[2]
return Math.sqrt(n*n+r*r+i*i)}return Math.sqrt(n*n+r*r)}function a(t,e,n){const r=t[0]+n*(e[0]-t[0]),i=t[1]+n*(e[1]-t[1])
return t.length>2&&e.length>2?[r,i,t[2]+n*(e[2]-t[2])]:[r,i]}function u(t,e,n,r){const[i,o]=e,[s,a]=n[r],[u,c]=n[r+1],l=u-s,f=c-a,h=l*l+f*f,d=(i-s)*l+(o-a)*f,m=Math.min(1,Math.max(0,d/h))
return t[0]=s+l*m,t[1]=a+f*m,t}function c(t,e,n){const r=n.rings
let i,o,s=!1,a=1/0
for(let n=0;n<r.length;n++){const u=r[n]
for(let n=0,r=u.length-1;n<u.length;r=n++)i=u[n],o=u[r],i[1]>e!=o[1]>e&&t<(o[0]-i[0])*(e-i[1])/(o[1]-i[1])+i[0]&&(s=!s),a=Math.min(a,l(t,e,i,o))}return 0===a?0:(s?1:-1)*Math.sqrt(a)}function l(t,e,n,r){let i=n[0],o=n[1],s=r[0]-i,a=r[1]-o
if(0!==s||0!==a){const n=((t-i)*s+(e-o)*a)/(s*s+a*a)
n>1?(i=r[0],o=r[1]):n>0&&(i+=s*n,o+=a*n)}return s=t-i,a=e-o,s*s+a*a}function f(t,e){return a(t,e,.5)}function h(t){const e=t.length
let n=0
for(let r=0;r<e-1;++r)n+=s(t[r],t[r+1])
return n}function d(t,e){if(e<=0)return t[0]
const n=t.length
let r=0
for(let i=0;i<n-1;++i){const n=s(t[i],t[i+1])
if(e-r<n){const o=(e-r)/n
return a(t[i],t[i+1],o)}r+=n}return t[n-1]}function m(t,e,n){const r=t.length
let i=0,o=0,s=0
for(let a=0;a<r;a++){const u=t[a],c=t[(a+1)%r]
let l=2
i+=u[0]*c[1]-c[0]*u[1],u.length>2&&c.length>2&&n&&(o+=u[0]*c[2]-c[0]*u[2],l=3),u.length>l&&c.length>l&&e&&(s+=u[0]*c[l]-c[0]*u[l])}return i<=0&&o<=0&&s<=0}function p(t){const e=t.length
return e>2&&Object(r.e)(t[0],t[e-1])}function b(t){var e,n
if("rings"in t&&(y(t),t.rings.length>0&&!m(t.rings[0],null!=(e=t.hasM)&&e,null!=(n=t.hasZ)&&n)))for(const e of t.rings)e.reverse()}function y(t){if("rings"in t)for(const e of t.rings)p(e)||e.push(e[0].slice())}function g(t){return"polygon"!==t.type&&"polyline"!==t.type||O("polygon"===t.type?t.rings:t.paths,t.spatialReference),t}function O(t,e){const n=Object(i.e)(e)
if(!n)return
const r=n.valid[0],o=n.valid[1],s=o-r
for(const e of t){let t=1/0,n=-1/0
for(const i of e){const e=j(i[0],r,o)
t=Math.min(t,e),n=Math.max(n,e),i[0]=e}const i=n-t
s-i<i&&e.forEach(t=>{t[0]<0&&(t[0]+=s)})}}function j(t,e,n){const r=n-e
return t<e?n-(e-t)%r:t>n?e+(t-e)%r:t}function v(t){if(!t||t.length<3)return 0
let e=0
const n=t.length-1
for(let r=0;r<n;r++)e+=(t[r][0]-t[r+1][0])*(t[r][1]+t[r+1][1])
return e+=(t[n][0]-t[0][0])*(t[n][1]+t[0][1]),-.5*e}function x(t,e){if(t===e)return!0
if(t.type!==e.type)return!1
if("point"===t.type||"extent"===t.type)return!0
if("multipoint"===t.type)return t.points.length===e.points.length
const[n,r]="polyline"===t.type?[t.paths,e.paths]:[t.rings,e.rings]
return n.length===r.length&&n.every((t,e)=>t.length===r[e].length)}},1079:function(t,e,n){"use strict"
function r(t){return void 0!==t.xmin&&void 0!==t.ymin&&void 0!==t.xmax&&void 0!==t.ymax}function i(t){return void 0!==t.points}function o(t){return void 0!==t.x&&void 0!==t.y}function s(t){return void 0!==t.paths}function a(t){return void 0!==t.rings}function u(t){return function(e,n){return null==e?n:null==n?e:t(e,n)}}n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return h})),n.d(e,"c",(function(){return p})),n.d(e,"d",(function(){return d}))
const c=u(Math.min),l=u(Math.max)
function f(t,e){return s(e)?d(t,e.paths,!1,!1):a(e)?d(t,e.rings,!1,!1):i(e)?p(t,e.points,!1,!1,!1,!1):r(e)?m(t,e):(o(e)&&(t[0]=e.x,t[1]=e.y,t[2]=e.x,t[3]=e.y),t)}function h(t,e){return s(e)?d(t,e.paths,!0,!1):a(e)?d(t,e.rings,!0,!1):i(e)?p(t,e.points,!0,!1,!0,!1):r(e)?m(t,e,!0,!1,!0,!1):(o(e)&&(t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.x,t[4]=e.y,t[5]=e.z),t)}function d(t,e,n,r){const i=n?3:2
if(!e.length||!e[0].length)return null
let o,s,a,u,[f,h]=e[0][0],[d,m]=e[0][0]
for(let t=0;t<e.length;t++){const p=e[t]
for(let t=0;t<p.length;t++){const e=p[t],[b,y]=e
if(f=c(f,b),h=c(h,y),d=l(d,b),m=l(m,y),n&&e.length>2){const t=e[2]
o=c(o,t),s=l(s,t)}if(r&&e.length>i){const t=e[i]
a=c(o,t),u=l(s,t)}}}return n?r?(t[0]=f,t[1]=h,t[2]=o,t[3]=a,t[4]=d,t[5]=m,t[6]=s,t[7]=u,t.length=8,t):(t[0]=f,t[1]=h,t[2]=o,t[3]=d,t[4]=m,t[5]=s,t.length=6,t):r?(t[0]=f,t[1]=h,t[2]=a,t[3]=d,t[4]=m,t[5]=u,t.length=6,t):(t[0]=f,t[1]=h,t[2]=d,t[3]=m,t.length=4,t)}function m(t,e,n,r,i,o){const s=e.xmin,a=e.xmax,u=e.ymin,c=e.ymax
let l=e.zmin,f=e.zmax,h=e.mmin,d=e.mmax
return i?(l=l||0,f=f||0,o?(h=h||0,d=d||0,t[0]=s,t[1]=u,t[2]=l,t[3]=h,t[4]=a,t[5]=c,t[6]=f,t[7]=d,t):(t[0]=s,t[1]=u,t[2]=l,t[3]=a,t[4]=c,t[5]=f,t)):o?(h=h||0,d=d||0,t[0]=s,t[1]=u,t[2]=h,t[3]=a,t[4]=c,t[5]=d,t):(t[0]=s,t[1]=u,t[2]=a,t[3]=c,t)}function p(t,e,n,r,i,o){const s=n?3:2,a=r&&o,u=n&&i
if(!e.length||!e[0].length)return null
let f,h,d,m,[p,b]=e[0],[y,g]=e[0]
for(let t=0;t<e.length;t++){const n=e[t],[r,i]=n
if(p=c(p,r),b=c(b,i),y=l(y,r),g=l(g,i),u&&n.length>2){const t=n[2]
f=c(f,t),h=l(h,t)}if(a&&n.length>s){const t=n[s]
d=c(f,t),m=l(h,t)}}return i?(f=f||0,h=h||0,o?(d=d||0,m=m||0,t[0]=p,t[1]=b,t[2]=f,t[3]=d,t[4]=y,t[5]=g,t[6]=h,t[7]=m,t):(t[0]=p,t[1]=b,t[2]=f,t[3]=y,t[4]=g,t[5]=h,t)):o?(d=d||0,m=m||0,t[0]=p,t[1]=b,t[2]=d,t[3]=y,t[4]=g,t[5]=m,t):(t[0]=p,t[1]=b,t[2]=y,t[3]=g,t)}},1082:function(t,e,n){"use strict"
function r(t){return(e,n)=>{e[n]=t}}n.d(e,"a",(function(){return r}))},1085:function(t,e,n){"use strict"
n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return s})),n.d(e,"e",(function(){return o})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return f})),n.d(e,"h",(function(){return h}))
var r=n(23)
const i=[0,0]
function o(t,e){return!!Object(r.l)(e)&&l(t,e.x,e.y,e.z)}function s(t,e){if(!e.points||e.points.length)return!1
for(const n of e.points)if(!u(t,n))return!1
return!0}function a(t,e){const{xmin:n,ymin:r,zmin:i,xmax:o,ymax:s,zmax:a}=e
return t.hasZ&&e.hasZ?l(t,n,r,i)&&l(t,n,s,i)&&l(t,o,s,i)&&l(t,o,r,i)&&l(t,n,r,a)&&l(t,n,s,a)&&l(t,o,s,a)&&l(t,o,r,a):l(t,n,r)&&l(t,n,s)&&l(t,o,s)&&l(t,o,r)}function u(t,e){return l(t,e[0],e[1])}function c(t,e){return l(t,e[0],e[1],e[2])}function l(t,e,n,r){return e>=t.xmin&&e<=t.xmax&&n>=t.ymin&&n<=t.ymax&&(null==r||!t.hasZ||r>=t.zmin&&r<=t.zmax)}function f(t,e){return i[1]=e.y,i[0]=e.x,function(t,e){return h(t.rings,e)}(t,i)}function h(t,e){if(!t)return!1
if(function(t){return!Array.isArray(t[0][0])}(t))return d(!1,t,e)
let n=!1
for(let r=0,i=t.length;r<i;r++)n=d(n,t[r],e)
return n}function d(t,e,n){const[r,i]=n
let o=t,s=0
for(let t=0,n=e.length;t<n;t++){s++,s===n&&(s=0)
const[a,u]=e[t],[c,l]=e[s];(u<i&&l>=i||l<i&&u>=i)&&a+(i-u)/(l-u)*(c-a)<r&&(o=!o)}return o}},1087:function(t,e,n){"use strict"
n.d(e,"a",(function(){return i}))
var r=n(1165)
class i extends r.a{notify(){const t=this._observers
if(t&&t.length>0){const e=t.slice()
for(const t of e)t.onInvalidated(),t.onCommitted()}}}},1089:function(t,e,n){"use strict"
n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return l})),n.d(e,"e",(function(){return f})),n.d(e,"f",(function(){return h}))
var r=n(23),i=n(1052),o=n(988)
function s(t){return{wkt:`GEOCCS["Spherical geocentric",\n    DATUM["Not specified",\n      SPHEROID["Sphere",${t.radius},0]],\n    PRIMEM["Greenwich",0.0,\n      AUTHORITY["EPSG","8901"]],\n    UNIT["m",1.0],\n    AXIS["Geocentric X",OTHER],\n    AXIS["Geocentric Y",EAST],\n    AXIS["Geocentric Z",NORTH]\n  ]`}}const a=s(i.a),u=s(i.b),c=s(i.c),l={wkt:`GEOCCS["WGS 84",\n  DATUM["WGS_1984",\n    SPHEROID["WGS 84",${i.a.radius},298.257223563,\n      AUTHORITY["EPSG","7030"]],\n    AUTHORITY["EPSG","6326"]],\n  PRIMEM["Greenwich",0,\n    AUTHORITY["EPSG","8901"]],\n  UNIT["m",1.0,\n    AUTHORITY["EPSG","9001"]],\n  AXIS["Geocentric X",OTHER],\n  AXIS["Geocentric Y",OTHER],\n  AXIS["Geocentric Z",NORTH],\n  AUTHORITY["EPSG","4978"]\n]`}
function f(t){return Object(r.l)(t)&&(Object(o.i)(t)||Object(o.d)(t,u))?i.b:Object(r.l)(t)&&(Object(o.j)(t)||Object(o.d)(t,c))?i.c:i.a}function h(t){return Object(o.n)(t)?i.b:Object(o.o)(t)?i.c:i.a}},1091:function(t,e,n){"use strict"
n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return f}))
var r=n(1128),i=n(999),o=n(1176)
function s(t,e,n){if(!t||!t.read||!1===t.read.enabled||!t.read.source)return!1
const i=t.read.source
if("string"==typeof i){if(i===e)return!0
if(i.includes(".")&&0===i.indexOf(e)&&Object(r.a)(i,n))return!0}else for(const t of i){if(t===e)return!0
if(t.includes(".")&&0===t.indexOf(e)&&Object(r.a)(t,n))return!0}return!1}function a(t,e,n,r,i){let a=Object(o.b)(e[n],i);(function(t){return t&&(!t.read||!1!==t.read.enabled&&!t.read.source)})(a)&&(t[n]=!0)
for(const u of Object.getOwnPropertyNames(e))a=Object(o.b)(e[u],i),s(a,n,r)&&(t[u]=!0)}function u(t,e,n,r){const i=n.metadatas,s=Object(o.a)(i[e],"any",r),a=s&&s.default
if(void 0===a)return
const u="function"==typeof a?a.call(t,e,r):a
void 0!==u&&n.set(e,u)}const c={origin:"service"}
function l(t,e,n=c){if(!e||"object"!=typeof e)return
const s=Object(i.a)(t),l=s.metadatas,f={}
for(const t of Object.getOwnPropertyNames(e))a(f,l,t,e,n)
s.setDefaultOrigin(n.origin)
for(const i of Object.getOwnPropertyNames(f)){const a=Object(o.b)(l[i],n).read,u=a&&a.source
let c
c=u&&"string"==typeof u?Object(r.c)(e,u):e[i],a&&a.reader&&(c=a.reader.call(t,c,e,n)),void 0!==c&&s.set(i,c)}if(!n||!n.ignoreDefaults){s.setDefaultOrigin("defaults")
for(const e of Object.getOwnPropertyNames(l))f[e]||u(t,e,s,n)}s.setDefaultOrigin("user")}function f(t,e,n,r=c){var i
const o={...r,messages:[]}
n(o),null==(i=o.messages)||i.forEach(e=>{"warning"!==e.type||t.loaded?r&&r.messages&&r.messages.push(e):t.loadWarnings.push(e)})}},1093:function(t,e,n){"use strict"
n.d(e,"a",(function(){return o}))
var r=n(997),i=n(1052)
const o={inches:Object(r.e)(1,"meters","inches"),feet:Object(r.e)(1,"meters","feet"),"us-feet":Object(r.e)(1,"meters","us-feet"),yards:Object(r.e)(1,"meters","yards"),miles:Object(r.e)(1,"meters","miles"),"nautical-miles":Object(r.e)(1,"meters","nautical-miles"),millimeters:Object(r.e)(1,"meters","millimeters"),centimeters:Object(r.e)(1,"meters","centimeters"),decimeters:Object(r.e)(1,"meters","decimeters"),meters:Object(r.e)(1,"meters","meters"),kilometers:Object(r.e)(1,"meters","kilometers"),"decimal-degrees":1/Object(r.m)(1,"meters",i.a.radius)}},1095:function(t,e,n){"use strict"
n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return u}))
var r=n(235)
const i=new Set
function o(t,e,n=!1){n&&i.has(e)||(n&&i.add(e),t.warn("🛑 DEPRECATED - "+e))}function s(t,e,n={}){Object(r.a)("esri-deprecation-warnings")&&c(t,"Module: "+e,n)}function a(t,e,n={}){if(Object(r.a)("esri-deprecation-warnings")){const{moduleName:r}=n
c(t,"Function: "+(r?r+"::":"")+e+"()",n)}}function u(t,e,n={}){if(Object(r.a)("esri-deprecation-warnings")){const{moduleName:r}=n
c(t,"Property: "+(r?r+"::":"")+e,n)}}function c(t,e,n={}){if(Object(r.a)("esri-deprecation-warnings")){const{replacement:r,version:i,see:s,warnOnce:a}=n
let u=e
r&&(u+="\n\t🛠️ Replacement: "+r),i&&(u+="\n\t⚙️ Version: "+i),s&&(u+=`\n\t🔗 See ${s} for more details.`),o(t,u,a)}}},1096:function(t,e,n){"use strict"
n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return h}))
var r=n(445),i=n(446),o=n(233),s=n(1006),a=n(999),u=n(1176)
function c(t,e,n,r,i){var o,s
const a={}
return null!=(o=e.write)&&null!=(s=o.writer)&&s.call(t,r,a,n,i),a}function l(t,e,n,a,u,c){if(!a||!a.write)return!1
const l=t.get(n)
if(!u&&a.write.overridePolicy){const e=a.write.overridePolicy.call(t,l,n,c)
void 0!==e&&(u=e)}if(u||(u=a.write),!u||!1===u.enabled)return!1
if((null===l&&!u.allowNull&&!u.writerEnsuresNonNull||void 0===l)&&u.isRequired){const e=new i.a("web-document-write:property-required",`Missing value for required property '${n}' on '${t.declaredClass}'`,{propertyName:n,target:t})
return e&&c&&c.messages?c.messages.push(e):e&&!c&&o.a.getLogger("esri.core.accessorSupport.write").error(e.name,e.message),!1}return!(void 0===l||null===l&&!u.allowNull&&!u.writerEnsuresNonNull||(!e.store.multipleOriginsSupported||e.store.originOf(n)===s.a.DEFAULTS)&&function(t,e,n,i,o){const s=i.default
if(void 0===s)return!1
if(null!=i.defaultEquals)return i.defaultEquals(o)
if("function"==typeof s){if(Array.isArray(o)){const i=s.call(t,e,n)
return Object(r.e)(i,o)}return!1}return s===o}(t,n,c,a,l)||!u.ignoreOrigin&&c&&c.origin&&e.store.multipleOriginsSupported&&e.store.originOf(n)<Object(s.e)(c.origin))}function f(t,e,n,r){const i=Object(a.a)(t),o=i.metadatas,s=Object(u.c)(o[e],r)
return!!s&&l(t,i,e,s,n,r)}function h(t,e,n){if(t&&"function"==typeof t.toJSON&&(!t.toJSON.isDefaultToJSON||!t.write))return Object(a.c)(e,t.toJSON(n))
const r=Object(a.a)(t),i=r.metadatas
for(const h in i){var o,f
const d=Object(u.c)(i[h],n)
if(!l(t,r,h,d,void 0,n))continue
const m=t.get(h),p=c(t,d,d.write&&"string"==typeof d.write.target?d.write.target:h,m,n)
Object.keys(p).length>0&&(e=Object(a.c)(e,p),null!=n&&null!=(o=n.resources)&&null!=(f=o.pendingOperations)&&f.length&&n.resources.pendingOperations.push(Promise.all(n.resources.pendingOperations).then(()=>Object(a.c)(e,p,()=>"replace-arrays"))),n&&n.writtenProperties&&n.writtenProperties.push({target:t,propName:h,oldOrigin:Object(s.d)(r.store.originOf(h)),newOrigin:n.origin}))}return e}},1105:function(t,e,n){"use strict"
function r(t,e,n=!1){let{hasM:r,hasZ:i}=t
Array.isArray(e)?4!==e.length||r||i?3===e.length&&n&&!r?(i=!0,r=!1):3===e.length&&r&&i&&(r=!1,i=!1):(r=!0,i=!0):(i=!i&&e.hasZ&&(!r||e.hasM),r=!r&&e.hasM&&(!i||e.hasZ)),t.hasZ=i,t.hasM=r}n.d(e,"a",(function(){return r}))},1111:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i}))
var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{}
function i(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}}).call(this,n(50))},1114:function(t,e,n){"use strict"
var r
n.d(e,"a",(function(){return r})),function(t){t[t.ADD=1]="ADD",t[t.REMOVE=2]="REMOVE",t[t.MOVE=4]="MOVE"}(r||(r={}))},1118:function(t,e,n){"use strict"
n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return O})),n.d(e,"d",(function(){return b})),n.d(e,"e",(function(){return g}))
var r=n(1085)
function i(t,e){return Object(r.e)(t,e)}function o(t,e){const n=t.hasZ&&e.hasZ
let r,i,o
if(t.xmin<=e.xmin){if(r=e.xmin,t.xmax<r)return!1}else if(r=t.xmin,e.xmax<r)return!1
if(t.ymin<=e.ymin){if(i=e.ymin,t.ymax<i)return!1}else if(i=t.ymin,e.ymax<i)return!1
if(n&&e.hasZ)if(t.zmin<=e.zmin){if(o=e.zmin,t.zmax<o)return!1}else if(o=t.zmin,e.zmax<o)return!1
return!0}function s(t,e){const{points:n,hasZ:i}=e,o=i?r.b:r.a
for(const e of n)if(o(t,e))return!0
return!1}const a=[0,0],u=[0,0],c=[0,0],l=[0,0],f=[a,u,c,l],h=[[c,a],[a,u],[u,l],[l,c]]
function d(t,e){return function(t,e){a[0]=t.xmin,a[1]=t.ymax,u[0]=t.xmax,u[1]=t.ymax,c[0]=t.xmin,c[1]=t.ymin,l[0]=t.xmax,l[1]=t.ymin
for(const t of f)if(Object(r.h)(e,t))return!0
for(const n of e){if(!n.length)continue
let e=n[0]
if(Object(r.a)(t,e))return!0
for(let i=1;i<n.length;i++){const o=n[i]
if(Object(r.a)(t,o)||y(e,o,h))return!0
e=o}}return!1}(t,e.rings)}function m(t,e){a[0]=t.xmin,a[1]=t.ymax,u[0]=t.xmax,u[1]=t.ymax,c[0]=t.xmin,c[1]=t.ymin,l[0]=t.xmax,l[1]=t.ymin
const n=e.paths
for(const e of n){if(!n.length)continue
let i=e[0]
if(Object(r.a)(t,i))return!0
for(let n=1;n<e.length;n++){const o=e[n]
if(Object(r.a)(t,o)||y(i,o,h))return!0
i=o}}return!1}const p=[0,0]
function b(t){for(let e=0;e<t.length;e++){const n=t[e]
for(let r=0;r<n.length-1;r++){const i=n[r],o=n[r+1]
for(let n=e+1;n<t.length;n++)for(let e=0;e<t[n].length-1;e++){const r=t[n][e],s=t[n][e+1]
if(g(i,o,r,s,p)&&!(p[0]===i[0]&&p[1]===i[1]||p[0]===r[0]&&p[1]===r[1]||p[0]===o[0]&&p[1]===o[1]||p[0]===s[0]&&p[1]===s[1]))return!0}}const r=n.length
if(!(r<=4))for(let t=0;t<r-3;t++){let e=r-1
0===t&&(e=r-2)
const i=n[t],o=n[t+1]
for(let r=t+2;r<e;r++){const t=n[r],e=n[r+1]
if(g(i,o,t,e,p)&&!(p[0]===i[0]&&p[1]===i[1]||p[0]===t[0]&&p[1]===t[1]||p[0]===o[0]&&p[1]===o[1]||p[0]===e[0]&&p[1]===e[1]))return!0}}}return!1}function y(t,e,n){for(let r=0;r<n.length;r++)if(g(t,e,n[r][0],n[r][1]))return!0
return!1}function g(t,e,n,r,i){const[o,s]=t,[a,u]=e,[c,l]=n,[f,h]=r,d=f-c,m=o-c,p=a-o,b=h-l,y=s-l,g=u-s,O=b*p-d*g
if(0===O)return!1
const j=(d*y-b*m)/O,v=(p*y-g*m)/O
return j>=0&&j<=1&&v>=0&&v<=1&&(i&&(i[0]=o+j*(a-o),i[1]=s+j*(u-s)),!0)}function O(t){switch(t){case"esriGeometryEnvelope":case"extent":return o
case"esriGeometryMultipoint":case"multipoint":return s
case"esriGeometryPoint":case"point":return i
case"esriGeometryPolygon":case"polygon":return d
case"esriGeometryPolyline":case"polyline":return m}}},1122:function(t,e,n){"use strict"
n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return o}))
var r=n(1131)
function i(t,e){const n=t.length>e.length?t:e
return(t.length>e.length?e:t).every((t,e)=>t.type===n[e].type)}function o(t,e){const n=t.length>e.length?t:e,i=t.length>e.length?e:t
for(let t=i.length;t<n.length;t++)i.push(Object(r.g)(n[t]))}function s(t){const e=t[0]
return!!e&&"type"in e}},1131:function(t,e,n){"use strict"
n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return l})),n.d(e,"e",(function(){return f})),n.d(e,"f",(function(){return h})),n.d(e,"g",(function(){return p}))
var r=n(1162),i=n(980),o=n(1213),s=n(1029)
class a{constructor(t,e,n){this.strength=t,this.radius=e,this.threshold=n,this.type="bloom"}interpolate(t,e,n){this.strength=d(t.strength,e.strength,n),this.radius=d(t.radius,e.radius,n),this.threshold=d(t.threshold,e.threshold,n)}clone(){return new a(this.strength,this.radius,this.threshold)}toJSON(){return{type:"bloom",radius:m(this.radius),strength:this.strength,threshold:this.threshold}}}class u{constructor(t){this.radius=t,this.type="blur"}interpolate(t,e,n){this.radius=Math.round(d(t.radius,e.radius,n))}clone(){return new u(this.radius)}toJSON(){return{type:"blur",radius:m(this.radius)}}}class c{constructor(t,e){this.type=t,this.amount=e,"invert"!==this.type&&"grayscale"!==this.type&&"sepia"!==this.type||(this.amount=Math.min(this.amount,1))}get colorMatrix(){return this._colorMatrix||this._updateMatrix(),this._colorMatrix}interpolate(t,e,n){this.amount=d(t.amount,e.amount,n),this._updateMatrix()}clone(){return new c(this.type,this.amount)}toJSON(){return{type:this.type,amount:this.amount}}_updateMatrix(){const t=this._colorMatrix||Object(o.a)()
switch(this.type){case"brightness":this._colorMatrix=((t,e)=>{const n=Object(s.w)(t,e,0,0,0,0,e,0,0,0,0,e,0,0,0,0,1)
return Object(s.x)(n,n)})(t,this.amount)
break
case"contrast":this._colorMatrix=((t,e)=>{const n=Object(s.w)(t,e,0,0,.5-.5*e,0,e,0,.5-.5*e,0,0,e,.5-.5*e,0,0,0,1)
return Object(s.x)(n,n)})(t,this.amount)
break
case"grayscale":this._colorMatrix=((t,e)=>{const n=1-e,r=Object(s.w)(t,.2126+.7874*n,.7152-.7152*n,.0722-.0722*n,0,.2126-.2126*n,.7152+.2848*n,.0722-.0722*n,0,.2126-.2126*n,.7152-.7152*n,.0722+.9278*n,0,0,0,0,1)
return Object(s.x)(r,r)})(t,this.amount)
break
case"invert":this._colorMatrix=((t,e)=>{const n=1-2*e,r=Object(s.w)(t,n,0,0,e,0,n,0,e,0,0,n,e,0,0,0,1)
return Object(s.x)(r,r)})(t,this.amount)
break
case"saturate":this._colorMatrix=((t,e)=>{const n=Object(s.w)(t,.213+.787*e,.715-.715*e,.072-.072*e,0,.213-.213*e,.715+.285*e,.072-.072*e,0,.213-.213*e,.715-.715*e,.072+.928*e,0,0,0,0,1)
return Object(s.x)(n,n)})(t,this.amount)
break
case"sepia":this._colorMatrix=((t,e)=>{const n=1-e,r=Object(s.w)(t,.393+.607*n,.769-.769*n,.189-.189*n,0,.349-.349*n,.686+.314*n,.168-.168*n,0,.272-.272*n,.534-.534*n,.131+.869*n,0,0,0,0,1)
return Object(s.x)(r,r)})(t,this.amount)}}}class l{constructor(t,e,n,r){this.offsetX=t,this.offsetY=e,this.blurRadius=n,this.color=r,this.type="drop-shadow"}interpolate(t,e,n){this.offsetX=d(t.offsetX,e.offsetX,n),this.offsetY=d(t.offsetY,e.offsetY,n),this.blurRadius=d(t.blurRadius,e.blurRadius,n),this.color[0]=Math.round(d(t.color[0],e.color[0],n)),this.color[1]=Math.round(d(t.color[1],e.color[1],n)),this.color[2]=Math.round(d(t.color[2],e.color[2],n)),this.color[3]=d(t.color[3],e.color[3],n)}clone(){return new l(this.offsetX,this.offsetY,this.blurRadius,[...this.color])}toJSON(){const t=[...this.color]
return t[3]*=255,{type:"drop-shadow",xoffset:m(this.offsetX),yoffset:m(this.offsetY),blurRadius:m(this.blurRadius),color:t}}}class f{constructor(t){this.angle=t,this.type="hue-rotate"}get colorMatrix(){return this._colorMatrix||this._updateMatrix(),this._colorMatrix}interpolate(t,e,n){this.angle=d(t.angle,e.angle,n),this._updateMatrix()}clone(){return new f(this.angle)}toJSON(){return{type:"hue-rotate",angle:this.angle}}_updateMatrix(){const t=this._colorMatrix||Object(o.a)()
this._colorMatrix=((t,e)=>{const n=Math.sin(e*Math.PI/180),r=Math.cos(e*Math.PI/180),i=Object(s.w)(t,.213+.787*r-.213*n,.715-.715*r-.715*n,.072-.072*r+.928*n,0,.213-.213*r+.143*n,.715+.285*r+.14*n,.072-.072*r-.283*n,0,.213-.213*r-.787*n,.715-.715*r+.715*n,.072+.928*r+.072*n,0,0,0,0,1)
return Object(s.x)(i,i)})(t,this.angle)}}class h{constructor(t){this.amount=t,this.type="opacity",this.amount=Math.min(this.amount,1)}interpolate(t,e,n){this.amount=d(t.amount,e.amount,n)}clone(){return new h(this.amount)}toJSON(){return{type:"opacity",amount:this.amount}}}function d(t,e,n){return t+(e-t)*n}function m(t){return Math.round(1e3*Object(i.i)(t))/1e3}function p(t){switch(t.type){case"grayscale":case"sepia":case"invert":return new c(t.type,0)
case"saturate":case"brightness":case"contrast":return new c(t.type,1)
case"opacity":return new h(1)
case"hue-rotate":return new f(0)
case"blur":return new u(0)
case"drop-shadow":return new l(0,0,0,[...Object(r.a)("transparent")])
case"bloom":return new a(0,0,1)}}},1134:function(t,e,n){"use strict"
n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return u}))
var r=n(446),i=n(146),o=n(1212),s=n(1122)
function a(t,e,n){try{return function(t){if(!t||0===t.length)return null
if(function(t){const e=t[0]
return!!e&&"scale"in e}(t)){const e=[]
for(const n of t)e.push({scale:n.scale,value:c(n.value)})
return e}return c(t)}(t)}catch(t){var r
null==n||null==(r=n.messages)||r.push(t)}return null}function u(t,e,n,r){try{const r=function(t){const e=Object(o.a)(t)
return e?Object(s.b)(e)?e.map(t=>t.toJSON()):e.map(({scale:t,effects:e})=>({scale:t,value:e.map(t=>t.toJSON())})):null}(t)
Object(i.c)(n,r,e)}catch(t){r.messages&&r.messages.push(t)}}function c(t){if(!t||!t.length)return""
const e=[]
for(const n of t){let t=[]
switch(n.type){case"grayscale":case"sepia":case"saturate":case"invert":case"brightness":case"contrast":case"opacity":t=[l(n,"amount")]
break
case"blur":t=[l(n,"radius","pt")]
break
case"hue-rotate":t=[l(n,"angle","deg")]
break
case"drop-shadow":t=[l(n,"xoffset","pt"),l(n,"yoffset","pt"),l(n,"blurRadius","pt"),f(n,"color")]
break
case"bloom":t=[l(n,"strength"),l(n,"radius","pt"),l(n,"threshold")]}const r=`${n.type}(${t.filter(Boolean).join(" ")})`
Object(o.a)(r),e.push(r)}return e.join(" ")}function l(t,e,n){if(null==t[e])throw new r.a("effect:missing-parameter",`Missing parameter '${e}' in ${t.type} effect`,{effect:t})
return n?t[e]+n:""+t[e]}function f(t,e){if(null==t[e])throw new r.a("effect:missing-parameter",`Missing parameter '${e}' in ${t.type} effect`,{effect:t})
const n=t[e]
return`rgba(${n[0]||0}, ${n[1]||0}, ${n[2]||0}, ${n[3]/255||0})`}},1138:function(t,e,n){"use strict"
n.d(e,"a",(function(){return f}))
var r=n(968),i=n(975),o=n(1007),s=n(23),a=n(978),u=n(1024),c=n(970),l=n(969)
let f=class extends i.a{constructor(){super(...arguments),this.updating=!1,this._handleId=0,this._handles=new o.a,this._scheduleHandleId=0,this._pendingPromises=new Set}destroy(){this.removeAll(),this._handles.destroy()}add(t,e,n={}){return this._installWatch(t,e,n,a.f)}addWhen(t,e,n={}){return this._installWatch(t,e,n,a.g)}addOnCollectionChange(t,e,{initial:n=!1,final:r=!1}={}){const i=++this._handleId
return this._handles.add([Object(a.b)(t,"after-changes",this._createSyncUpdatingCallback(),a.d),Object(a.b)(t,"change",e,{onListenerAdd:n?t=>e({added:t.toArray(),removed:[]}):void 0,onListenerRemove:r?t=>e({added:[],removed:t.toArray()}):void 0})],i),{remove:()=>this._handles.remove(i)}}addPromise(t){if(Object(s.k)(t))return t
const e=++this._handleId
this._handles.add({remove:()=>{this._pendingPromises.delete(t)&&(0!==this._pendingPromises.size||this._handles.has(h)||this._set("updating",!1))}},e),this._pendingPromises.add(t),this._set("updating",!0)
const n=()=>this._handles.remove(e)
return t.then(n,n),t}removeAll(){this._pendingPromises.clear(),this._handles.removeAll(),this._set("updating",!1)}_installWatch(t,e,n={},r){const i=++this._handleId
n.sync||this._installSyncUpdatingWatch(t,i)
const o=r(t,e,n)
return this._handles.add(o,i),{remove:()=>this._handles.remove(i)}}_installSyncUpdatingWatch(t,e){const n=this._createSyncUpdatingCallback(),r=Object(a.f)(t,n,{sync:!0,equals:()=>!1})
return this._handles.add(r,e),r}_createSyncUpdatingCallback(){return()=>{this._handles.remove(h),++this._scheduleHandleId
const t=this._scheduleHandleId
this._get("updating")||this._set("updating",!0),this._handles.add(Object(u.b)(()=>{t===this._scheduleHandleId&&(this._set("updating",this._pendingPromises.size>0),this._handles.remove(h))}),h)}}}
Object(r.a)([Object(c.b)({readOnly:!0})],f.prototype,"updating",void 0),f=Object(r.a)([Object(l.a)("esri.core.support.WatchUpdatingTracking")],f)
const h=-42},1142:function(t,e,n){"use strict"
n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return s})),n.d(e,"e",(function(){return u}))
var r=n(1066)
function i(t){return t?t.hasZ?[t.xmax-t.xmin/2,t.ymax-t.ymin/2,t.zmax-t.zmin/2]:[t.xmax-t.xmin/2,t.ymax-t.ymin/2]:null}function o(t){var e
return t?s(t.rings,null!=(e=t.hasZ)&&e):null}function s(t,e){if(!t||!t.length)return null
const n=[],i=[],o=e?[1/0,-1/0,1/0,-1/0,1/0,-1/0]:[1/0,-1/0,1/0,-1/0]
for(let n=0,r=t.length;n<r;n++){const r=a(t[n],e,o)
r&&i.push(r)}if(i.sort((t,n)=>{let r=t[2]-n[2]
return 0===r&&e&&(r=t[4]-n[4]),r}),i.length&&(n[0]=i[0][0],n[1]=i[0][1],e&&(n[2]=i[0][3]),(n[0]<o[0]||n[0]>o[1]||n[1]<o[2]||n[1]>o[3]||e&&(n[2]<o[4]||n[2]>o[5]))&&(n.length=0)),!n.length){const i=t[0]&&t[0].length?function(t,e){const n=e?[0,0,0]:[0,0],i=e?[0,0,0]:[0,0]
let o=0,s=0,a=0,u=0
for(let c=0,l=t.length;c<l-1;c++){const l=t[c],f=t[c+1]
if(l&&f){n[0]=l[0],n[1]=l[1],i[0]=f[0],i[1]=f[1],e&&l.length>2&&f.length>2&&(n[2]=l[2],i[2]=f[2])
const t=Object(r.e)(n,i)
if(t){o+=t
const n=Object(r.f)(l,f)
s+=t*n[0],a+=t*n[1],e&&n.length>2&&(u+=t*n[2])}}}return o>0?e?[s/o,a/o,u/o]:[s/o,a/o]:t.length?t[0]:null}(t[0],e):null
if(!i)return null
n[0]=i[0],n[1]=i[1],e&&i.length>2&&(n[2]=i[2])}return n}function a(t,e,n){let r=0,i=0,o=0,s=0,a=0
const u=t.length?t[0][0]:0,c=t.length?t[0][1]:0,l=t.length&&e?t[0][2]:0
for(let f=0;f<t.length;f++){const h=t[f],d=t[(f+1)%t.length],[m,p,b]=h,y=m-u,g=p-c,[O,j,v]=d,x=O-u,M=j-c,_=y*M-x*g
if(s+=_,r+=(y+x)*_,i+=(g+M)*_,e&&h.length>2&&d.length>2){const t=b-l,e=v-l,n=y*e-x*t
o+=(t+e)*n,a+=n}m<n[0]&&(n[0]=m),m>n[1]&&(n[1]=m),p<n[2]&&(n[2]=p),p>n[3]&&(n[3]=p),e&&(b<n[4]&&(n[4]=b),b>n[5]&&(n[5]=b))}if(s>0&&(s*=-1),a>0&&(a*=-1),!s)return null
s*=.5,a*=.5
const f=[r/(6*s)+u,i/(6*s)+c,s]
return e&&(n[4]===n[5]||0===a?(f[3]=(n[4]+n[5])/2,f[4]=0):(f[3]=o/(6*a)+l,f[4]=a)),f}function u(t){if(!t||!t.rings)return null
const{rings:e}=t
let n=0
for(let t=0;t<e.length;t++)n+=Object(r.i)(e[t])
if(n<1e-6)return s(e,!1)
const i=[0,0],o=e[0][0]
for(let t=0;t<e.length;t++)c(i,o,e[t])
return i[0]*=1/n,i[1]*=1/n,i[0]+=o[0],i[1]+=o[1],i}function c(t,e,n){if(!t||!n||n.length<3)return null
const i=n[0],o=[0,0],s=[n[1][0]-i[0],n[1][1]-i[1]]
let a
for(let e=2;e<n.length;e++)o[0]=n[e][0]-i[0],o[1]=n[e][1]-i[1],a=1/3*.5*(o[0]*s[1]-o[1]*s[0]),t[0]+=a*(s[0]+o[0]),t[1]+=a*(s[1]+o[1]),s[0]=o[0],s[1]=o[1]
const u=Object(r.i)(n),c=[i[0],i[1]]
return c[0]-=e[0],c[1]-=e[1],c[0]*=u,c[1]*=u,t[0]+=c[0],t[1]+=c[1],t}},1144:function(t,e,n){"use strict"
n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return i}))
var r=n(1093)
function i(t){return!!t&&null!=r.a[t]}function o(t){return 1/(r.a[t]||1)}const s=function(){const t=Object.keys(r.a)
return t.sort(),t}()},1146:function(t,e,n){"use strict"
n.d(e,"a",(function(){return o}))
var r=n(374)
const i=["elevation3d.arcgis.com","js.arcgis.com","jsdev.arcgis.com","jsqa.arcgis.com","static.arcgis.com"]
function o(t){const e=Object(r.p)(t,!0)
return!!e&&e.endsWith(".arcgis.com")&&!i.includes(e)&&!t.endsWith("/sharing/rest/generateToken")}},1157:function(t,e,n){"use strict"
n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"c",(function(){return h}))
var r=n(1079)
const i=[]
function o(t,e,n,r){return{xmin:t,ymin:e,xmax:n,ymax:r}}function s(t,e,n,r,i,o){return{xmin:t,ymin:e,zmin:n,xmax:r,ymax:i,zmax:o}}function a(t,e,n,r,i,o){return{xmin:t,ymin:e,mmin:n,xmax:r,ymax:i,mmax:o}}function u(t,e,n,r,i,o,s,a){return{xmin:t,ymin:e,zmin:n,mmin:r,xmax:i,ymax:o,zmax:s,mmax:a}}function c(t,e=!1,n=!1){return e?n?u(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7]):s(t[0],t[1],t[2],t[3],t[4],t[5]):n?a(t[0],t[1],t[2],t[3],t[4],t[5]):o(t[0],t[1],t[2],t[3])}function l(t){return t?function(t){return void 0!==t.xmin&&void 0!==t.ymin&&void 0!==t.xmax&&void 0!==t.ymax}(t)?t:function(t){return void 0!==t.x&&void 0!==t.y}(t)?function(t){const{x:e,y:n,z:r,m:i}=t,c=null!=i
return null!=r?c?u(e,n,r,i,e,n,r,i):s(e,n,r,e,n,r):c?a(e,n,i,e,n,i):o(e,n,e,n)}(t):function(t){return void 0!==t.rings}(t)?f(t):function(t){return void 0!==t.paths}(t)?h(t):function(t){return void 0!==t.points}(t)?function(t){const{hasZ:e,hasM:n,points:o}=t
return c(Object(r.c)(i,o,null!=e&&e,null!=n&&n),e,n)}(t):null:null}function f(t){const{hasZ:e,hasM:n,rings:o}=t,s=Object(r.d)(i,o,null!=e&&e,null!=n&&n)
return s?c(s,e,n):null}function h(t){const{hasZ:e,hasM:n,paths:o}=t,s=Object(r.d)(i,o,null!=e&&e,null!=n&&n)
return s?c(s,e,n):null}},1166:function(t,e,n){"use strict"
n.d(e,"a",(function(){return r}))
const r=function(t){return{setTimeout:(e,n)=>{const r=t.setTimeout(e,n)
return{remove:()=>t.clearTimeout(r)}}}}(globalThis)},1168:function(t,e,n){"use strict"
n.d(e,"a",(function(){return j}))
var r,i=n(968),o=n(976),s=n(972),a=n(23),u=n(970),c=(n(971),n(445),n(977)),l=n(969),f=n(974),h=n(989)
let d=r=class extends s.a{constructor(t){super(t)}async collectRequiredFields(t,e){return Object(h.a)(t,e,this.expression)}clone(){return new r({expression:this.expression,title:this.title})}equals(t){return this.expression===t.expression&&this.title===t.title}}
Object(i.a)([Object(u.b)({type:String,json:{write:!0}})],d.prototype,"expression",void 0),Object(i.a)([Object(u.b)({type:String,json:{write:!0}})],d.prototype,"title",void 0),d=r=Object(i.a)([Object(l.a)("esri.layers.support.FeatureExpressionInfo")],d)
const m=d
var p,b=n(1144)
const y=Object(o.b)()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),g=new o.a({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"})
let O=p=class extends s.a{constructor(t){super(t),this.offset=null}readFeatureExpressionInfo(t,e){return null!=t?t:e.featureExpression&&0===e.featureExpression.value?{expression:"0"}:void 0}writeFeatureExpressionInfo(t,e,n,r){e[n]=t.write({},r),"0"===t.expression&&(e.featureExpression={value:0})}get mode(){const{offset:t,featureExpressionInfo:e}=this
return this._isOverridden("mode")?this._get("mode"):Object(a.l)(t)||e?"relative-to-ground":"on-the-ground"}set mode(t){this._override("mode",t)}set unit(t){this._set("unit",t)}write(t,e){return this.offset||this.mode||this.featureExpressionInfo||this.unit?super.write(t,e):null}clone(){return new p({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})}equals(t){return this.mode===t.mode&&this.offset===t.offset&&this.unit===t.unit&&Object(a.g)(this.featureExpressionInfo,t.featureExpressionInfo)}}
Object(i.a)([Object(u.b)({type:m,json:{write:!0}})],O.prototype,"featureExpressionInfo",void 0),Object(i.a)([Object(c.a)("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],O.prototype,"readFeatureExpressionInfo",null),Object(i.a)([Object(f.a)("featureExpressionInfo",{featureExpressionInfo:{type:m},"featureExpression.value":{type:[0]}})],O.prototype,"writeFeatureExpressionInfo",null),Object(i.a)([Object(u.b)({type:y.apiValues,nonNullable:!0,json:{type:y.jsonValues,read:y.read,write:{writer:y.write,isRequired:!0}}})],O.prototype,"mode",null),Object(i.a)([Object(u.b)({type:Number,json:{write:!0}})],O.prototype,"offset",void 0),Object(i.a)([Object(u.b)({type:b.b,json:{type:String,read:g.read,write:g.write}})],O.prototype,"unit",null),O=p=Object(i.a)([Object(l.a)("esri.layers.support.ElevationInfo")],O)
const j=O},1178:function(t,e,n){"use strict"
n.d(e,"a",(function(){return i}))
var r=n(1006)
function i(t,e,n){e.keys().forEach(t=>{n.set(t,e.get(t),r.a.DEFAULTS)})
const i=t.metadatas
Object.keys(i).forEach(e=>{t.internalGet(e)&&n.set(e,t.internalGet(e),r.a.DEFAULTS)})}},1188:function(t,e,n){"use strict"
let r
n.d(e,"a",(function(){return i}))
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
for(r=112e3;r<=112101;r++)i[r]=0},1201:function(t,e,n){"use strict"
n.d(e,"a",(function(){return s}))
var r=n(968),i=n(970),o=(n(971),n(445),n(969))
const s=t=>{let e=class extends t{constructor(){super(...arguments),this.minScale=0,this.maxScale=0}get effectiveScaleRange(){const t={minScale:this.minScale,maxScale:this.maxScale},e=this.parent
e&&"effectiveScaleRange"in e&&function(t,e){t.minScale=t.minScale>0?e.minScale>0?Math.min(t.minScale,e.minScale):t.minScale:e.minScale,t.maxScale=t.maxScale>0?e.maxScale>0?Math.max(t.maxScale,e.maxScale):t.maxScale:e.maxScale}(t,e.effectiveScaleRange)
const n=this._get("effectiveScaleRange")
return n&&n.minScale===t.minScale&&n.maxScale===t.maxScale?n:t}}
return Object(r.a)([Object(i.b)({type:Number,nonNullable:!0,json:{write:!0}})],e.prototype,"minScale",void 0),Object(r.a)([Object(i.b)({type:Number,nonNullable:!0,json:{write:!0}})],e.prototype,"maxScale",void 0),Object(r.a)([Object(i.b)({readOnly:!0})],e.prototype,"effectiveScaleRange",null),e=Object(r.a)([Object(o.a)("esri.layers.mixins.ScaleRangeLayer")],e),e}},1212:function(t,e,n){"use strict"
n.d(e,"a",(function(){return l}))
var r,i,o=n(1162),s=n(446),a=n(1131),u=(n(1111),n(1122)),c={}
function l(t){if(!t||0===t.length)return null
if("string"==typeof t){const e=f(t)
return e&&0!==e.length?e:null}const e=t.map(t=>{if(!Number.isFinite(t.scale)||t.scale<=0)throw new s.a("effect:invalid-scale","scale must be finite and greater than 0",{stop:t})
return{scale:t.scale,effects:f(t.value)}})
e.sort((t,e)=>e.effects.length-t.effects.length)
for(let t=0;t<e.length-1;t++){if(!Object(u.a)(e[t].effects,e[t+1].effects))throw new s.a("effect:interpolation-impossible","Cannot interpolate by scale between 2 lists of mixed effects",{a:e[t].effects,b:e[t+1].effects})
Object(u.c)(e[t].effects,e[t+1].effects)}return e.sort((t,e)=>e.scale-t.scale),e}function f(t){let e
if(!t)return[]
try{e=c.parse(t)}catch(e){throw new s.a("effect:invalid-syntax","Invalid effect syntax",{value:t,error:e})}return e.map(t=>function(t){try{switch(t.name){case"grayscale":case"sepia":case"saturate":case"invert":case"brightness":case"contrast":return function(t){let e=1
return h(t.parameters,1),1===t.parameters.length&&(e=y(t.parameters[0])),new a.c(t.name,e)}(t)
case"opacity":return function(t){let e=1
return h(t.parameters,1),1===t.parameters.length&&(e=y(t.parameters[0])),new a.f(e)}(t)
case"hue-rotate":return function(t){let e=0
return h(t.parameters,1),1===t.parameters.length&&(e=function(t){return function(t){if("quantity"!==t.type||!(0===t.value&&null===t.unit||t.unit&&null!=p[t.unit]))throw new s.a("effect:type-error","Expected <angle>, Actual: "+d(t),{term:t})}(t),t.value*p[t.unit]||0}(t.parameters[0])),new a.e(e)}(t)
case"blur":return function(t){let e=0
return h(t.parameters,1),1===t.parameters.length&&(e=g(t.parameters[0]),m(e,t.parameters[0])),new a.b(e)}(t)
case"drop-shadow":return function(t){const e=[]
let n=null
for(const r of t.parameters)if("color"===r.type){if(e.length&&Object.freeze(e),n)throw new s.a("effect:type-error","Accepts only one color",{})
n=O(r)}else{const t=g(r)
if(Object.isFrozen(e))throw new s.a("effect:type-error","<length> parameters not consecutive",{lengths:e})
e.push(t),3===e.length&&m(t,r)}if(e.length<2||e.length>3)throw new s.a("effect:type-error",`Expected <length>{2,3}, Actual: <length>{${e.length}}`,{lengths:e})
return new a.d(e[0],e[1],e[2]||0,n||j("black"))}(t)
case"bloom":return function(t){let e=1,n=0,r=0
return h(t.parameters,3),t.parameters[0]&&(e=y(t.parameters[0])),t.parameters[1]&&(n=g(t.parameters[1]),m(n,t.parameters[1])),t.parameters[2]&&(r=y(t.parameters[2])),new a.a(e,n,r)}(t)}}catch(e){throw e.details.filter=t,e}throw new s.a("effect:unknown-effect",`Effect '${t.name}' is not supported`,{effect:t})}(t))}function h(t,e){if(t.length>e)throw new s.a("effect:type-error",`Function supports up to ${e} parameters, Actual: ${t.length}`,{parameters:t})}function d(t){if("color"===t.type)return"<color>"
if(t.unit){if(b[t.unit])return"<length>"
if(p[t.unit])return"<angle>"
if("%"===t.unit)return"<percentage>"}return"<double>"}function m(t,e){if(t<0)throw new s.a("effect:type-error","Negative values are not allowed, Actual: "+t,{term:e})}i=function(){function t(e,n,r,i){var o=Error.call(this,e)
return Object.setPrototypeOf&&Object.setPrototypeOf(o,t.prototype),o.expected=n,o.found=r,o.location=i,o.name="SyntaxError",o}function e(t,e,n){return n=n||" ",t.length>e?t:(e-=t.length,t+(n+=n.repeat(e)).slice(0,e))}return function(t,e){function n(){this.constructor=t}n.prototype=e.prototype,t.prototype=new n}(t,Error),t.prototype.format=function(t){var n="Error: "+this.message
if(this.location){var r,i=null
for(r=0;r<t.length;r++)if(t[r].source===this.location.source){i=t[r].text.split(/\r\n|\n|\r/g)
break}var o=this.location.start,s=this.location.source+":"+o.line+":"+o.column
if(i){var a=this.location.end,u=e("",o.line.toString().length," "),c=i[o.line-1],l=(o.line===a.line?a.column:c.length+1)-o.column||1
n+="\n --\x3e "+s+"\n"+u+" |\n"+o.line+" | "+c+"\n"+u+" | "+e("",o.column-1," ")+e("",l,"^")}else n+="\n at "+s}return n},t.buildMessage=function(t,e){var n={literal:function(t){return'"'+i(t.text)+'"'},class:function(t){var e=t.parts.map((function(t){return Array.isArray(t)?o(t[0])+"-"+o(t[1]):o(t)}))
return"["+(t.inverted?"^":"")+e.join("")+"]"},any:function(){return"any character"},end:function(){return"end of input"},other:function(t){return t.description}}
function r(t){return t.charCodeAt(0).toString(16).toUpperCase()}function i(t){return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(t){return"\\x0"+r(t)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(t){return"\\x"+r(t)}))}function o(t){return t.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(t){return"\\x0"+r(t)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(t){return"\\x"+r(t)}))}function s(t){return n[t.type](t)}return"Expected "+function(t){var e,n,r=t.map(s)
if(r.sort(),r.length>0){for(e=1,n=1;e<r.length;e++)r[e-1]!==r[e]&&(r[n]=r[e],n++)
r.length=n}switch(r.length){case 1:return r[0]
case 2:return r[0]+" or "+r[1]
default:return r.slice(0,-1).join(", ")+", or "+r[r.length-1]}}(t)+" but "+function(t){return t?'"'+i(t)+'"':"end of input"}(e)+" found."},{SyntaxError:t,parse:function(e,n){var r,i={},o=(n=void 0!==n?n:{}).grammarSource,s={start:at},a=at,u="none",c="grad",l="turn",f=/^[ \t\n\r]/,h=/^[a-z\-]/,d=/^[0-9a-fA-F]/,m=/^[+\-]/,p=/^[0-9]/,b=rt("none"),y=et("none",!1),g=et(")",!1),O=et(",",!1),j=rt("whitespace"),v=nt([" ","\t","\n","\r"],!1,!1),x=rt("function"),M=et("(",!1),_=rt("identifier"),w=nt([["a","z"],"-"],!1,!1),S=rt("percentage"),E=et("%",!1),A=rt("length"),R=et("px",!1),P=et("cm",!1),T=et("mm",!1),I=et("in",!1),k=et("pt",!1),C=et("pc",!1),N=rt("angle"),D=et("deg",!1),q=et("rad",!1),z=et("grad",!1),G=et("turn",!1),L=rt("number"),U=rt("color"),F=et("#",!1),W=nt([["0","9"],["a","f"],["A","F"]],!1,!1),B=nt(["+","-"],!1,!1),J=nt([["0","9"]],!1,!1),V=et(".",!1),Z=et("e",!1),$=0,Y=0,H=[{line:1,column:1}],X=0,K=[],Q=0
if("startRule"in n){if(!(n.startRule in s))throw new Error("Can't start parsing from rule \""+n.startRule+'".')
a=s[n.startRule]}function tt(){return e.substring(Y,$)}function et(t,e){return{type:"literal",text:t,ignoreCase:e}}function nt(t,e,n){return{type:"class",parts:t,inverted:e,ignoreCase:n}}function rt(t){return{type:"other",description:t}}function it(t){var n,r=H[t]
if(r)return r
for(n=t-1;!H[n];)n--
for(r={line:(r=H[n]).line,column:r.column};n<t;)10===e.charCodeAt(n)?(r.line++,r.column=1):r.column++,n++
return H[t]=r,r}function ot(t,e){var n=it(t),r=it(e)
return{source:o,start:{offset:t,line:n.line,column:n.column},end:{offset:e,line:r.line,column:r.column}}}function st(t){$<X||($>X&&(X=$,K=[]),K.push(t))}function at(){var t
return(t=function(){var t,n
return Q++,t=$,lt(),e.substr($,4)===u?(n=u,$+=4):(n=i,0===Q&&st(y)),n!==i?(lt(),Y=t,t=[]):($=t,t=i),Q--,t===i&&0===Q&&st(b),t}())===i&&(t=function(){var t,e
if(t=[],(e=ut())!==i)for(;e!==i;)t.push(e),e=ut()
else t=i
return t}()),t}function ut(){var t,n,r,o
return t=$,lt(),(n=function(){var t,n,r
return Q++,t=$,(n=ft())!==i?(40===e.charCodeAt($)?(r="(",$++):(r=i,0===Q&&st(M)),r!==i?(Y=t,t=n):($=t,t=i)):($=t,t=i),Q--,t===i&&(n=i,0===Q&&st(x)),t}())!==i?(lt(),(r=function(){var t,n,r,o,s,a,u,c
if(t=$,(n=ct())!==i){for(r=[],o=$,s=lt(),44===e.charCodeAt($)?(a=",",$++):(a=i,0===Q&&st(O)),a===i&&(a=null),u=lt(),(c=ct())!==i?o=s=[s,a,u,c]:($=o,o=i);o!==i;)r.push(o),o=$,s=lt(),44===e.charCodeAt($)?(a=",",$++):(a=i,0===Q&&st(O)),a===i&&(a=null),u=lt(),(c=ct())!==i?o=s=[s,a,u,c]:($=o,o=i)
Y=t,t=function(t,e){return e.length>0?function(t,e,n){return[t].concat(function(t,e){return t.map((function(t){return t[3]}))}(e))}(t,e):[t]}(n,r)}else $=t,t=i
return t}())===i&&(r=null),lt(),41===e.charCodeAt($)?(o=")",$++):(o=i,0===Q&&st(g)),o!==i?(lt(),Y=t,t=function(t,e){return{type:"function",name:t,parameters:e||[]}}(n,r)):($=t,t=i)):($=t,t=i),t}function ct(){var t,e
return t=$,(e=ht())===i&&(e=dt())===i&&(e=mt())===i&&(e=function(){var t,e
return Q++,t=$,lt(),(e=bt())!==i?(Y=t,t=function(t){return{value:t,unit:null}}(e)):($=t,t=i),Q--,t===i&&0===Q&&st(L),t}()),e!==i&&(Y=t,e=function(t){return{type:"quantity",value:t.value,unit:t.unit}}(e)),(t=e)===i&&(t=$,(e=pt())!==i&&(Y=t,e=function(t){return{type:"color",colorType:t.type,value:t.value}}(e)),t=e),t}function lt(){var t,n
for(Q++,t=[],f.test(e.charAt($))?(n=e.charAt($),$++):(n=i,0===Q&&st(v));n!==i;)t.push(n),f.test(e.charAt($))?(n=e.charAt($),$++):(n=i,0===Q&&st(v))
return Q--,n=i,0===Q&&st(j),t}function ft(){var t,n,r
if(Q++,t=$,n=[],h.test(e.charAt($))?(r=e.charAt($),$++):(r=i,0===Q&&st(w)),r!==i)for(;r!==i;)n.push(r),h.test(e.charAt($))?(r=e.charAt($),$++):(r=i,0===Q&&st(w))
else n=i
return n!==i&&(Y=t,n=tt()),Q--,(t=n)===i&&(n=i,0===Q&&st(_)),t}function ht(){var t,n,r
return Q++,t=$,lt(),(n=bt())!==i?(37===e.charCodeAt($)?(r="%",$++):(r=i,0===Q&&st(E)),r!==i?(Y=t,t=function(t){return{value:t,unit:"%"}}(n)):($=t,t=i)):($=t,t=i),Q--,t===i&&0===Q&&st(S),t}function dt(){var t,n,r
return Q++,t=$,lt(),(n=bt())!==i?("px"===e.substr($,2)?(r="px",$+=2):(r=i,0===Q&&st(R)),r!==i?(Y=t,t=function(t){return{value:t,unit:"px"}}(n)):($=t,t=i)):($=t,t=i),t===i&&(t=$,lt(),(n=bt())!==i?("cm"===e.substr($,2)?(r="cm",$+=2):(r=i,0===Q&&st(P)),r!==i?(Y=t,t=function(t){return{value:t,unit:"cm"}}(n)):($=t,t=i)):($=t,t=i),t===i&&(t=$,lt(),(n=bt())!==i?("mm"===e.substr($,2)?(r="mm",$+=2):(r=i,0===Q&&st(T)),r!==i?(Y=t,t=function(t){return{value:t,unit:"mm"}}(n)):($=t,t=i)):($=t,t=i),t===i&&(t=$,lt(),(n=bt())!==i?("in"===e.substr($,2)?(r="in",$+=2):(r=i,0===Q&&st(I)),r!==i?(Y=t,t=function(t){return{value:t,unit:"in"}}(n)):($=t,t=i)):($=t,t=i),t===i&&(t=$,lt(),(n=bt())!==i?("pt"===e.substr($,2)?(r="pt",$+=2):(r=i,0===Q&&st(k)),r!==i?(Y=t,t=function(t){return{value:t,unit:"pt"}}(n)):($=t,t=i)):($=t,t=i),t===i&&(t=$,lt(),(n=bt())!==i?("pc"===e.substr($,2)?(r="pc",$+=2):(r=i,0===Q&&st(C)),r!==i?(Y=t,t=function(t){return{value:t,unit:"pc"}}(n)):($=t,t=i)):($=t,t=i)))))),Q--,t===i&&0===Q&&st(A),t}function mt(){var t,n,r
return Q++,t=$,(n=bt())!==i?("deg"===e.substr($,3)?(r="deg",$+=3):(r=i,0===Q&&st(D)),r!==i?(Y=t,t=function(t){return{value:t,unit:"deg"}}(n)):($=t,t=i)):($=t,t=i),t===i&&(t=$,(n=bt())!==i?("rad"===e.substr($,3)?(r="rad",$+=3):(r=i,0===Q&&st(q)),r!==i?(Y=t,t=function(t){return{value:t,unit:"rad"}}(n)):($=t,t=i)):($=t,t=i),t===i&&(t=$,(n=bt())!==i?(e.substr($,4)===c?(r=c,$+=4):(r=i,0===Q&&st(z)),r!==i?(Y=t,t=function(t){return{value:t,unit:"grad"}}(n)):($=t,t=i)):($=t,t=i),t===i&&(t=$,(n=bt())!==i?(e.substr($,4)===l?(r=l,$+=4):(r=i,0===Q&&st(G)),r!==i?(Y=t,t=function(t){return{value:t,unit:"turn"}}(n)):($=t,t=i)):($=t,t=i)))),Q--,t===i&&(n=i,0===Q&&st(N)),t}function pt(){var t,n,r,o
if(Q++,t=$,35===e.charCodeAt($)?(n="#",$++):(n=i,0===Q&&st(F)),n!==i){if(r=[],d.test(e.charAt($))?(o=e.charAt($),$++):(o=i,0===Q&&st(W)),o!==i)for(;o!==i;)r.push(o),d.test(e.charAt($))?(o=e.charAt($),$++):(o=i,0===Q&&st(W))
else r=i
r!==i?(Y=t,t={type:"hex",value:tt()}):($=t,t=i)}else $=t,t=i
return t===i&&(t=$,(n=ut())!==i&&(Y=t,n=function(t){return{type:"function",value:t}}(n)),(t=n)===i&&(t=$,(n=ft())!==i&&(Y=t,n={type:"named",value:tt()}),t=n)),Q--,t===i&&(n=i,0===Q&&st(U)),t}function bt(){var t,n,r,o,s,a,u
for(t=$,m.test(e.charAt($))?(e.charAt($),$++):0===Q&&st(B),n=$,r=[],p.test(e.charAt($))?(o=e.charAt($),$++):(o=i,0===Q&&st(J));o!==i;)r.push(o),p.test(e.charAt($))?(o=e.charAt($),$++):(o=i,0===Q&&st(J))
if(46===e.charCodeAt($)?(o=".",$++):(o=i,0===Q&&st(V)),o!==i){if(s=[],p.test(e.charAt($))?(a=e.charAt($),$++):(a=i,0===Q&&st(J)),a!==i)for(;a!==i;)s.push(a),p.test(e.charAt($))?(a=e.charAt($),$++):(a=i,0===Q&&st(J))
else s=i
s!==i?n=r=[r,o,s]:($=n,n=i)}else $=n,n=i
if(n===i)if(n=[],p.test(e.charAt($))?(r=e.charAt($),$++):(r=i,0===Q&&st(J)),r!==i)for(;r!==i;)n.push(r),p.test(e.charAt($))?(r=e.charAt($),$++):(r=i,0===Q&&st(J))
else n=i
if(n!==i){if(r=$,101===e.charCodeAt($)?(o="e",$++):(o=i,0===Q&&st(Z)),o!==i){if(m.test(e.charAt($))?(s=e.charAt($),$++):(s=i,0===Q&&st(B)),s===i&&(s=null),a=[],p.test(e.charAt($))?(u=e.charAt($),$++):(u=i,0===Q&&st(J)),u!==i)for(;u!==i;)a.push(u),p.test(e.charAt($))?(u=e.charAt($),$++):(u=i,0===Q&&st(J))
else a=i
a!==i?r=o=[o,s,a]:($=r,r=i)}else $=r,r=i
r===i&&(r=null),Y=t,t=parseFloat(tt())}else $=t,t=i
return t}if((r=a())!==i&&$===e.length)return r
throw r!==i&&$<e.length&&st({type:"end"}),function(e,n,r){return new t(t.buildMessage(e,n),e,n,r)}(K,X<e.length?e.charAt(X):null,X<e.length?ot(X,X+1):ot(X,X))}}},(r={get exports(){return c},set exports(t){c=t}}).exports&&(r.exports=i())
const p={deg:1,grad:.9,rad:180/Math.PI,turn:360},b={px:1,cm:96/2.54,mm:96/2.54/10,in:96,pc:16,pt:96/72}
function y(t){!function(t){if("quantity"!==t.type||null!==t.unit&&"%"!==t.unit)throw new s.a("effect:type-error","Expected <double> or <percentage>, Actual: "+d(t),{term:t})}(t)
const e=t.value
return m(e,t),"%"===t.unit?.01*e:e}function g(t){return function(t){if("quantity"!==t.type||!(0===t.value&&null===t.unit||t.unit&&null!=b[t.unit]))throw new s.a("effect:type-error","Expected <length>, Actual: "+d(t),{term:t})}(t),t.value*b[t.unit]||0}function O(t){switch(t.colorType){case"hex":return Object(o.c)(t.value)
case"named":return j(t.value)
case"function":return function(t){if(h(t.parameters,4),v.test(t.name))return[y(t.parameters[0]),y(t.parameters[1]),y(t.parameters[2]),t.parameters[3]?y(t.parameters[3]):1]
if(x.test(t.name))return Object(o.d)(function(t){return function(t){if("quantity"!==t.type||null!==t.unit)throw new s.a("effect:type-error","Expected <double>, Actual: "+d(t),{term:t})}(t),m(t.value,t),t.value}(t.parameters[0]),y(t.parameters[1]),y(t.parameters[2]),t.parameters[3]?y(t.parameters[3]):1)
throw new s.a("effect:syntax-error",`Invalid color function '${t.name}'`,{colorFunction:t})}(t.value)}}function j(t){if(!Object(o.e)(t))throw new s.a("effect:unknown-color",`color '${t}' isn't valid`,{namedColor:t})
return Object(o.b)(t)}const v=/^rgba?/i,x=/^hsla?/i},1213:function(t,e,n){"use strict"
function r(){const t=new Float32Array(16)
return t[0]=1,t[5]=1,t[10]=1,t[15]=1,t}n.d(e,"a",(function(){return r}))
const i=r()
Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:i,clone:function(t){const e=new Float32Array(16)
return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e},create:r,createView:function(t,e){return new Float32Array(t,e,16)},fromValues:function(t,e,n,r,i,o,s,a,u,c,l,f,h,d,m,p){const b=new Float32Array(16)
return b[0]=t,b[1]=e,b[2]=n,b[3]=r,b[4]=i,b[5]=o,b[6]=s,b[7]=a,b[8]=u,b[9]=c,b[10]=l,b[11]=f,b[12]=h,b[13]=d,b[14]=m,b[15]=p,b}},Symbol.toStringTag,{value:"Module"}))},1221:function(t,e,n){"use strict"
n.d(e,"a",(function(){return u}))
var r=n(968),i=n(970),o=(n(971),n(445),n(969)),s=n(1134)
const a={read:{reader:s.b},write:{allowNull:!0,writer:s.c}},u=t=>{let e=class extends t{constructor(){super(...arguments),this.blendMode="normal",this.effect=null}}
return Object(r.a)([Object(i.b)({type:["average","color-burn","color-dodge","color","darken","destination-atop","destination-in","destination-out","destination-over","difference","exclusion","hard-light","hue","invert","lighten","lighter","luminosity","minus","multiply","normal","overlay","plus","reflect","saturation","screen","soft-light","source-atop","source-in","source-out","vivid-light","xor"],nonNullable:!0,json:{read:!1,write:!1,origins:{"web-map":{read:!0,write:!0},"portal-item":{read:!0,write:!0}}}})],e.prototype,"blendMode",void 0),Object(r.a)([Object(i.b)({json:{read:!1,write:!1,origins:{"web-map":a,"portal-item":a}}})],e.prototype,"effect",void 0),e=Object(r.a)([Object(o.a)("esri.layers.mixins.BlendLayer")],e),e}},1229:function(t,e,n){"use strict"
n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return h}))
var r=n(110),i=n(235),o=n(23),s=n(973),a=n(374)
function u(t,e,n=!1,r){return new Promise((a,u)=>{if(Object(s.k)(r))return void u(c())
let l=()=>{d(),u(new Error("Unable to load "+e))},f=()=>{const e=t
d(),a(e)},h=()=>{if(!t)return
const e=t
d(),e.src="",u(c())}
const d=()=>{Object(i.a)("esri-image-decode")||(t.removeEventListener("error",l),t.removeEventListener("load",f)),l=null,f=null,t=null,Object(o.l)(r)&&r.removeEventListener("abort",h),h=null,n&&URL.revokeObjectURL(e)}
Object(o.l)(r)&&r.addEventListener("abort",h),Object(i.a)("esri-image-decode")?t.decode().then(f,l):(t.addEventListener("error",l),t.addEventListener("load",f))})}function c(){try{return new DOMException("Aborted","AbortError")}catch{const t=new Error
return t.name="AbortError",t}}function l(t){r.default.request.crossOriginNoCorsDomains||(r.default.request.crossOriginNoCorsDomains={})
const e=r.default.request.crossOriginNoCorsDomains
for(let r of t){var n,i,o
r=r.toLowerCase(),/^https?:\/\//.test(r)?e[null!=(n=Object(a.p)(r))?n:""]=0:(e[null!=(i=Object(a.p)("http://"+r))?i:""]=0,e[null!=(o=Object(a.p)("https://"+r))?o:""]=0)}}function f(t){const e=r.default.request.crossOriginNoCorsDomains
if(e){let n=Object(a.p)(t)
if(n)return n=n.toLowerCase(),!Object(a.v)(n,Object(a.m)())&&e[n]<Date.now()-36e5}return!1}async function h(t){var e
const n=r.default.request.crossOriginNoCorsDomains,i=Object(a.p)(t)
n&&i&&(n[i.toLowerCase()]=Date.now())
const o=Object(a.Q)(t)
t=o.path,"json"===(null==(e=o.query)?void 0:e.f)&&(t+="?f=json")
try{await fetch(t,{mode:"no-cors",credentials:"include"})}catch{}}},1289:function(t,e,n){"use strict"
var r
n.d(e,"a",(function(){return r})),function(t){t[t.CGCS2000=4490]="CGCS2000",t[t.GCSMARS2000=104971]="GCSMARS2000",t[t.GCSMARS2000_SPHERE=104905]="GCSMARS2000_SPHERE",t[t.GCSMOON2000=104903]="GCSMOON2000"}(r||(r={}))},1365:function(t,e,n){"use strict"
n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return f}))
var r=n(968),i=n(993),o=n(1179),s=n(1025),a=(n(235),n(233),n(23)),u=n(970),c=(n(971),n(445),n(969))
let l=class extends(Object(s.b)(i.a)){constructor(t){super(t),this.handles.add([this.on("before-add",t=>{Object(a.k)(t.item)&&t.preventDefault()}),this.on("after-add",t=>this._own(t.item)),this.on("after-remove",t=>this._release(t.item))])}get owner(){return this._get("owner")}set owner(t){t!==this._get("owner")&&(this._releaseAll(),this._set("owner",t),this._ownAll())}_ownAll(){for(const t of this.items)this._own(t)}_releaseAll(){for(const t of this.items)this._release(t)}_createNewInstance(t){return this.itemType?new(i.a.ofType(this.itemType.Type))(t):new i.a(t)}}
function f(t,e){return{type:t,cast:o.a,set(n){const r=Object(o.b)(n,this._get(e),t)
r.owner=this,this._set(e,r)}}}Object(r.a)([Object(u.b)()],l.prototype,"owner",null),l=Object(r.a)([Object(c.a)("esri.core.support.OwningCollection")],l)},1551:function(t,e,n){"use strict"
n.d(e,"a",(function(){return c}))
var r=n(968),i=n(772),o=(n(233),n(971)),s=(n(445),n(446),n(235),n(1082)),a=n(969),u=n(1365)
let c=class extends u.a{_own(t){t.layer&&"remove"in t.layer&&t.layer!==this.owner&&t.layer.remove(t),t.layer=this.owner}_release(t){t.layer===this.owner&&(t.layer=null)}}
Object(r.a)([Object(s.a)({Type:i.default,ensureType:Object(o.m)(i.default)})],c.prototype,"itemType",void 0),c=Object(r.a)([Object(a.a)("esri.support.GraphicsCollection")],c)},769:function(t,e,n){"use strict"
n.r(e),n.d(e,"default",(function(){return m}))
var r,i=n(968),o=n(972),s=n(234),a=n(997),u=n(971),c=n(970),l=n(969),f=n(974),h=n(988)
let d=r=class extends o.a{static fromJSON(t){if(!t)return null
if(t.wkid){if(102100===t.wkid)return r.WebMercator
if(4326===t.wkid)return r.WGS84}const e=new r
return e.read(t),e}constructor(t){super(t),this.latestWkid=null,this.wkid=null,this.wkt=null,this.vcsWkid=null,this.latestVcsWkid=null,this.imageCoordinateSystem=null}normalizeCtorArgs(t){return t&&"object"==typeof t?t:{["string"==typeof t?"wkt":"wkid"]:t}}get isWGS84(){return Object(h.m)(this)}get isWebMercator(){return Object(h.p)(this)}get isGeographic(){return Object(h.h)(this)}get isWrappable(){return Object(h.q)(this)}get metersPerUnit(){return Object(a.g)(this)}get unit(){return Object(a.i)(this)||(this.isGeographic?"degrees":null)}writeWkt(t,e){this.wkid||(e.wkt=t)}clone(){if(this===r.WGS84)return r.WGS84
if(this===r.WebMercator)return r.WebMercator
const t=new r
return null!=this.wkid?(t.wkid=this.wkid,null!=this.latestWkid&&(t.latestWkid=this.latestWkid),null!=this.vcsWkid&&(t.vcsWkid=this.vcsWkid),null!=this.latestVcsWkid&&(t.latestVcsWkid=this.latestVcsWkid)):null!=this.wkt&&(t.wkt=this.wkt),this.imageCoordinateSystem&&(t.imageCoordinateSystem=Object(s.a)(this.imageCoordinateSystem)),t}equals(t){if(null==t)return!1
if(this.imageCoordinateSystem||t.imageCoordinateSystem){if(null==this.imageCoordinateSystem||null==t.imageCoordinateSystem)return!1
const{id:e,referenceServiceName:n}=t.imageCoordinateSystem,{geodataXform:r}=t.imageCoordinateSystem,i=this.imageCoordinateSystem
return null==e||r?JSON.stringify(i)===JSON.stringify(t.imageCoordinateSystem):n?i.id===e&&i.referenceServiceName===n:i.id===e}return Object(h.d)(this,t)}toJSON(t){return this.write(void 0,t)}}
d.GCS_NAD_1927=null,d.WGS84=null,d.WebMercator=null,d.PlateCarree=null,Object(i.a)([Object(c.b)({readOnly:!0})],d.prototype,"isWGS84",null),Object(i.a)([Object(c.b)({readOnly:!0})],d.prototype,"isWebMercator",null),Object(i.a)([Object(c.b)({readOnly:!0})],d.prototype,"isGeographic",null),Object(i.a)([Object(c.b)({readOnly:!0})],d.prototype,"isWrappable",null),Object(i.a)([Object(c.b)({type:u.a,json:{write:!0}})],d.prototype,"latestWkid",void 0),Object(i.a)([Object(c.b)({readOnly:!0})],d.prototype,"metersPerUnit",null),Object(i.a)([Object(c.b)({readOnly:!0})],d.prototype,"unit",null),Object(i.a)([Object(c.b)({type:u.a,json:{write:!0,origins:{"web-scene":{write:{overridePolicy(){return{isRequired:null===this.wkt}}}}}}})],d.prototype,"wkid",void 0),Object(i.a)([Object(c.b)({type:String,json:{origins:{"web-scene":{write:{overridePolicy(){return{isRequired:null===this.wkid}}}}}}})],d.prototype,"wkt",void 0),Object(i.a)([Object(f.a)("wkt"),Object(f.a)("web-scene","wkt")],d.prototype,"writeWkt",null),Object(i.a)([Object(c.b)({type:u.a,json:{write:!0}})],d.prototype,"vcsWkid",void 0),Object(i.a)([Object(c.b)({type:u.a,json:{write:!0}})],d.prototype,"latestVcsWkid",void 0),Object(i.a)([Object(c.b)()],d.prototype,"imageCoordinateSystem",void 0),d=r=Object(i.a)([Object(l.a)("esri.geometry.SpatialReference")],d),d.prototype.toJSON.isDefaultToJSON=!0,d.GCS_NAD_1927=new d({wkid:4267,wkt:'GEOGCS["GCS_North_American_1927",DATUM["D_North_American_1927",SPHEROID["Clarke_1866",6378206.4,294.9786982]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]]'}),d.WGS84=new d(h.b),d.WebMercator=new d(h.c),d.PlateCarree=new d(h.a),Object.freeze&&(Object.freeze(d.GCS_NAD_1927),Object.freeze(d.WGS84),Object.freeze(d.WebMercator))
const m=d},770:function(t,e,n){"use strict"
n.r(e),n.d(e,"default",(function(){return g}))
var r,i=n(968),o=n(23),s=n(447),a=n(970),u=(n(971),n(445),n(969)),c=n(1004),l=n(992),f=n(769),h=n(1085),d=n(1118),m=n(988),p=n(774)
function b(t,e,n){return null==e?n:null==n?e:t(e,n)}let y=r=class extends c.a{constructor(...t){super(...t),this.type="extent",this.xmin=0,this.ymin=0,this.mmin=void 0,this.zmin=void 0,this.xmax=0,this.ymax=0,this.mmax=void 0,this.zmax=void 0}normalizeCtorArgs(t,e,n,r,i){return function(t){return t&&("esri.geometry.SpatialReference"===t.declaredClass||null!=t.wkid)}(t)?{spatialReference:t,xmin:0,ymin:0,xmax:0,ymax:0}:"object"==typeof t?(t.spatialReference=null==t.spatialReference?f.default.WGS84:t.spatialReference,t):{xmin:t,ymin:e,xmax:n,ymax:r,spatialReference:null!=i?i:f.default.WGS84}}static fromBounds(t,e){return new r({xmin:t[0],ymin:t[1],xmax:t[2],ymax:t[3],spatialReference:e})}static fromPoint(t){return new r({xmin:t.x,ymin:t.y,zmin:t.z,xmax:t.x,ymax:t.y,zmax:t.z,spatialReference:t.spatialReference})}get cache(){return this.commitProperty("xmin"),this.commitProperty("ymin"),this.commitProperty("zmin"),this.commitProperty("mmin"),this.commitProperty("xmax"),this.commitProperty("ymax"),this.commitProperty("zmax"),this.commitProperty("mmax"),this.commitProperty("spatialReference"),{}}get center(){const t=new l.a({x:.5*(this.xmin+this.xmax),y:.5*(this.ymin+this.ymax),spatialReference:this.spatialReference})
return this.hasZ&&(t.z=.5*(this.zmin+this.zmax)),this.hasM&&(t.m=.5*(this.mmin+this.mmax)),t}get extent(){return this.clone()}get hasM(){return null!=this.mmin&&null!=this.mmax}get hasZ(){return null!=this.zmin&&null!=this.zmax}get height(){return Math.abs(this.ymax-this.ymin)}get width(){return Math.abs(this.xmax-this.xmin)}centerAt(t){const e=this.center
return null!=t.z&&this.hasZ?this.offset(t.x-e.x,t.y-e.y,t.z-e.z):this.offset(t.x-e.x,t.y-e.y)}clone(){const t=new r
return t.xmin=this.xmin,t.ymin=this.ymin,t.xmax=this.xmax,t.ymax=this.ymax,t.spatialReference=this.spatialReference,null!=this.zmin&&(t.zmin=this.zmin,t.zmax=this.zmax),null!=this.mmin&&(t.mmin=this.mmin,t.mmax=this.mmax),t}contains(t){if(!t)return!1
const e=this.spatialReference,n=t.spatialReference
return e&&n&&!e.equals(n)&&Object(p.canProject)(e,n)&&(t=e.isWebMercator?Object(p.geographicToWebMercator)(t):Object(p.webMercatorToGeographic)(t,!0)),"point"===t.type?Object(h.e)(this,t):"extent"===t.type&&Object(h.c)(this,t)}equals(t){if(this===t)return!0
if(Object(o.k)(t))return!1
const e=this.spatialReference,n=t.spatialReference
return e&&n&&!e.equals(n)&&Object(p.canProject)(e,n)&&(t=e.isWebMercator?Object(p.geographicToWebMercator)(t):Object(p.webMercatorToGeographic)(t,!0)),this.xmin===t.xmin&&this.ymin===t.ymin&&this.zmin===t.zmin&&this.mmin===t.mmin&&this.xmax===t.xmax&&this.ymax===t.ymax&&this.zmax===t.zmax&&this.mmax===t.mmax}expand(t){const e=.5*(1-t),n=this.width*e,r=this.height*e
if(this.xmin+=n,this.ymin+=r,this.xmax-=n,this.ymax-=r,this.hasZ){const t=(this.zmax-this.zmin)*e
this.zmin+=t,this.zmax-=t}if(this.hasM){const t=(this.mmax-this.mmin)*e
this.mmin+=t,this.mmax-=t}return this}intersects(t){if(Object(o.k)(t))return!1
"mesh"===t.type&&(t=t.extent)
const e=this.spatialReference,n=t.spatialReference
return e&&n&&!Object(m.d)(e,n)&&Object(p.canProject)(e,n)&&(t=e.isWebMercator?Object(p.geographicToWebMercator)(t):Object(p.webMercatorToGeographic)(t,!0)),Object(d.c)(t.type)(this,t)}normalize(){const t=this._normalize(!1,!0)
return Array.isArray(t)?t:[t]}offset(t,e,n){return this.xmin+=t,this.ymin+=e,this.xmax+=t,this.ymax+=e,null!=n&&(this.zmin+=n,this.zmax+=n),this}shiftCentralMeridian(){return this._normalize(!0)}union(t){return this===t||(this.xmin=Math.min(this.xmin,t.xmin),this.ymin=Math.min(this.ymin,t.ymin),this.xmax=Math.max(this.xmax,t.xmax),this.ymax=Math.max(this.ymax,t.ymax),(this.hasZ||t.hasZ)&&(this.zmin=b(Math.min,this.zmin,t.zmin),this.zmax=b(Math.max,this.zmax,t.zmax)),(this.hasM||t.hasM)&&(this.mmin=b(Math.min,this.mmin,t.mmin),this.mmax=b(Math.max,this.mmax,t.mmax))),this}intersection(t){return this===t?this:Object(o.k)(t)||!this.intersects(t)?null:(this.xmin=Math.max(this.xmin,t.xmin),this.ymin=Math.max(this.ymin,t.ymin),this.xmax=Math.min(this.xmax,t.xmax),this.ymax=Math.min(this.ymax,t.ymax),(this.hasZ||t.hasZ)&&(this.zmin=b(Math.max,this.zmin,t.zmin),this.zmax=b(Math.min,this.zmax,t.zmax)),(this.hasM||t.hasM)&&(this.mmin=b(Math.max,this.mmin,t.mmin),this.mmax=b(Math.min,this.mmax,t.mmax)),this)}toJSON(t){return this.write({},t)}_shiftCM(t=Object(m.e)(this.spatialReference)){if(!t||!this.spatialReference)return this
const e=this.spatialReference,n=this._getCM(t)
if(n){var r
const i=e.isWebMercator?Object(p.webMercatorToGeographic)(n):n
this.xmin-=n.x,this.xmax-=n.x,e.isWebMercator||(i.x=this._normalizeX(i.x,t).x),this.spatialReference=new f.default(Object(s.c)(null!=(r=e.isWGS84?t.altTemplate:null)?r:t.wkTemplate,{Central_Meridian:i.x}))}return this}_getCM(t){let e=null
const[n,r]=t.valid,i=this.xmin,o=this.xmax
return i>=n&&i<=r&&o>=n&&o<=r||(e=this.center),e}_normalize(t,e,n){const r=this.spatialReference
if(!r)return this
const i=null!=n?n:Object(m.e)(r)
if(null==i)return this
const o=this._getParts(i).map(t=>t.extent)
if(o.length<2)return o[0]||this
if(o.length>2)return t?this._shiftCM(i):this.set({xmin:i.valid[0],xmax:i.valid[1]})
if(t)return this._shiftCM(i)
if(e)return o
let s=!0,a=!0
return o.forEach(t=>{t.hasZ||(s=!1),t.hasM||(a=!1)}),{rings:o.map(t=>{const e=[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]
if(s){const n=(t.zmax-t.zmin)/2
for(let t=0;t<e.length;t++)e[t].push(n)}if(a){const n=(t.mmax-t.mmin)/2
for(let t=0;t<e.length;t++)e[t].push(n)}return e}),hasZ:s,hasM:a,spatialReference:r}}_getParts(t){let e=this.cache._parts
if(!e){e=[]
const{ymin:n,ymax:i,spatialReference:o}=this,s=this.width,a=this.xmin,u=this.xmax
let c
t=t||Object(m.e)(o)
const[l,f]=t.valid
c=this._normalizeX(this.xmin,t)
const h=c.x,d=c.frameId
c=this._normalizeX(this.xmax,t)
const p=c.x,b=c.frameId,y=h===p&&s>0
if(s>2*f){const t=new r(a<u?h:p,n,f,i,o),s=new r(l,n,a<u?p:h,i,o),c=new r(0,n,f,i,o),m=new r(l,n,0,i,o),y=[],g=[]
t.contains(c)&&y.push(d),t.contains(m)&&g.push(d),s.contains(c)&&y.push(b),s.contains(m)&&g.push(b)
for(let t=d+1;t<b;t++)y.push(t),g.push(t)
e.push({extent:t,frameIds:[d]},{extent:s,frameIds:[b]},{extent:c,frameIds:y},{extent:m,frameIds:g})}else h>p||y?e.push({extent:new r(h,n,f,i,o),frameIds:[d]},{extent:new r(l,n,p,i,o),frameIds:[b]}):e.push({extent:new r(h,n,p,i,o),frameIds:[d]})
this.cache._parts=e}const n=this.hasZ,i=this.hasM
if(n||i){const t={}
n&&(t.zmin=this.zmin,t.zmax=this.zmax),i&&(t.mmin=this.mmin,t.mmax=this.mmax)
for(let n=0;n<e.length;n++)e[n].extent.set(t)}return e}_normalizeX(t,e){const[n,r]=e.valid,i=2*r
let o,s=0
return t>r?(o=Math.ceil(Math.abs(t-r)/i),t-=o*i,s=o):t<n&&(o=Math.ceil(Math.abs(t-n)/i),t+=o*i,s=-o),{x:t,frameId:s}}}
Object(i.a)([Object(a.b)({readOnly:!0})],y.prototype,"cache",null),Object(i.a)([Object(a.b)({readOnly:!0})],y.prototype,"center",null),Object(i.a)([Object(a.b)({readOnly:!0})],y.prototype,"extent",null),Object(i.a)([Object(a.b)({readOnly:!0,json:{write:{enabled:!1,overridePolicy:null}}})],y.prototype,"hasM",null),Object(i.a)([Object(a.b)({readOnly:!0,json:{write:{enabled:!1,overridePolicy:null}}})],y.prototype,"hasZ",null),Object(i.a)([Object(a.b)({readOnly:!0})],y.prototype,"height",null),Object(i.a)([Object(a.b)({readOnly:!0})],y.prototype,"width",null),Object(i.a)([Object(a.b)({type:Number,json:{type:[Number,String],write:{enabled:!0,allowNull:!0}}})],y.prototype,"xmin",void 0),Object(i.a)([Object(a.b)({type:Number,json:{write:!0}})],y.prototype,"ymin",void 0),Object(i.a)([Object(a.b)({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasM}}}}})],y.prototype,"mmin",void 0),Object(i.a)([Object(a.b)({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasZ}}}}})],y.prototype,"zmin",void 0),Object(i.a)([Object(a.b)({type:Number,json:{write:!0}})],y.prototype,"xmax",void 0),Object(i.a)([Object(a.b)({type:Number,json:{write:!0}})],y.prototype,"ymax",void 0),Object(i.a)([Object(a.b)({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasM}}}}})],y.prototype,"mmax",void 0),Object(i.a)([Object(a.b)({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasZ}}}}})],y.prototype,"zmax",void 0),y=r=Object(i.a)([Object(u.a)("esri.geometry.Extent")],y),y.prototype.toJSON.isDefaultToJSON=!0
const g=y},771:function(t,e,n){"use strict"
n.r(e),n.d(e,"default",(function(){return m}))
var r=n(110),i=n(196),o=n(446),s=n(235),a=n(234),u=n(23),c=n(973),l=n(374),f=n(198),h=n(1146),d=n(1229)
async function m(t,e){var a
const f=Object(l.z)(t),g=Object(l.y)(t)
g||f||(t=Object(l.I)(t))
const O={url:t,requestOptions:{...Object(u.u)(e)}}
let j=Object(l.o)(t)
if(j){const t=await async function(t,e){if(null!=t.responseData)return t.responseData
if(t.headers&&(e.requestOptions.headers={...e.requestOptions.headers,...t.headers}),t.query&&(e.requestOptions.query={...e.requestOptions.query,...t.query}),t.before){let n,r
try{r=await t.before(e)}catch(t){n=_("request:interceptor",t,e)}if((r instanceof Error||r instanceof o.a)&&(n=_("request:interceptor",r,e)),n)throw t.error&&t.error(n),n
return r}}(j,O)
if(null!=t)return{data:t,getHeader:v,httpStatus:200,requestOptions:O.requestOptions,url:O.url}
j.after||j.error||(j=null)}if(t=O.url,"image"===(e=O.requestOptions).responseType){if(Object(s.a)("host-webworker")||Object(s.a)("host-node"))throw _("request:invalid-parameters",new Error("responseType 'image' is not supported in Web Workers or Node environment"),O)}else if(f)throw _("request:invalid-parameters",new Error("Data URLs are not supported for responseType = "+e.responseType),O)
if("head"===e.method){if(e.body)throw _("request:invalid-parameters",new Error("body parameter cannot be set when method is 'head'"),O)
if(f||g)throw _("request:invalid-parameters",new Error("data and blob URLs are not supported for method 'head'"),O)}if(await async function(){Object(s.a)("host-webworker")?p||(p=await n.e(760).then(n.bind(null,1482))):m._abortableFetch||(m._abortableFetch=globalThis.fetch.bind(globalThis))}(),p)return p.execute(t,e)
const x=new AbortController
Object(c.n)(e,()=>x.abort())
const M={controller:x,credential:void 0,credentialToken:void 0,fetchOptions:void 0,hasToken:!1,interceptor:j,params:O,redoRequest:!1,useIdentity:b.useIdentity,useProxy:!1,useSSL:!1,withCredentials:!1},A=await async function(t){var e,n
let o,s
await async function(t){var e,n
const o=t.params.url,s=t.params.requestOptions,a=t.controller.signal,u=s.body
let l=null,f=null
if(y&&"HTMLFormElement"in globalThis&&(u instanceof FormData?l=u:u instanceof HTMLFormElement&&(l=new FormData(u))),"string"==typeof u&&(f=u),t.fetchOptions={cache:s.cacheBust&&!m._abortableFetch.polyfill?"no-cache":"default",credentials:"same-origin",headers:s.headers||{},method:"head"===s.method?"HEAD":"GET",mode:"cors",priority:b.priority,redirect:"follow",signal:a},(l||f)&&(t.fetchOptions.body=l||f),"anonymous"===s.authMode&&(t.useIdentity=!1),t.hasToken=!!(/token=/i.test(o)||null!=(e=s.query)&&e.token||null!=(n=l)&&n.get("token")),!t.hasToken&&r.default.apiKey&&Object(h.a)(o)&&(s.query||(s.query={}),s.query.token=r.default.apiKey,t.hasToken=!0),t.useIdentity&&!t.hasToken&&!t.credentialToken&&!S(o)&&!Object(c.k)(a)){let e
"immediate"===s.authMode?(await w(),e=await i.b.getCredential(o,{signal:a}),t.credential=e):"no-prompt"===s.authMode?(await w(),e=await i.b.getCredential(o,{prompt:!1,signal:a}).catch(()=>{}),t.credential=e):i.b&&(e=i.b.findCredential(o)),e&&(t.credentialToken=e.token,t.useSSL=!!e.ssl)}}(t)
try{do{[o,s]=await E(t)}while(!await R(t,o,s))}catch(e){const n=_("request:server",e,t.params,o)
throw n.details.ssl=t.useSSL,t.interceptor&&t.interceptor.error&&t.interceptor.error(n),n}const a=t.params.url
if(s&&/\/sharing\/rest\/(accounts|portals)\/self/i.test(a)){var u
if(!t.hasToken&&!t.credentialToken&&null!=(u=s.user)&&u.username&&!Object(l.D)(a)){const t=Object(l.p)(a,!0)
t&&b.trustedServers.push(t)}Array.isArray(s.authorizedCrossOriginNoCorsDomains)&&Object(d.c)(s.authorizedCrossOriginNoCorsDomains)}const f=t.credential
if(f&&i.b){const t=i.b.findServerInfo(f.server)
let e=t&&t.owningSystemUrl
if(e){e=e.replace(/\/?$/,"/sharing")
const t=i.b.findCredential(e,f.userId)
t&&-1===i.b._getIdenticalSvcIdx(e,t)&&t.resources.unshift(e)}}return{data:s,getHeader:o?t=>{var e
return null==(e=o)?void 0:e.headers.get(t)}:v,httpStatus:null!=(e=null==(n=o)?void 0:n.status)?e:200,requestOptions:t.params.requestOptions,ssl:t.useSSL,url:t.params.url}}(M)
return null!=(a=j)&&null!=a.after&&a.after(A),A}let p
const b=r.default.request,y="FormData"in globalThis,g=[499,498,403,401],O=["COM_0056","COM_0057","SB_0008"],j=[/\/arcgis\/tokens/i,/\/sharing(\/rest)?\/generatetoken/i,/\/rest\/info/i],v=()=>null,x=Symbol()
function M(t){const e=Object(l.p)(t)
return!e||e.endsWith(".arcgis.com")||m._corsServers.includes(e)||Object(l.D)(e)}function _(t,e,n,r){let i="Error"
const s={url:n.url,requestOptions:n.requestOptions,getHeader:v,ssl:!1}
if(e instanceof o.a)return e.details?(e.details=Object(a.a)(e.details),e.details.url=n.url,e.details.requestOptions=n.requestOptions):e.details=s,e
if(e){const t=r&&(t=>r.headers.get(t)),n=r&&r.status,o=e.message
o&&(i=o),t&&(s.getHeader=t),s.httpStatus=(null!=e.httpCode?e.httpCode:e.code)||n||0,s.subCode=e.subcode,s.messageCode=e.messageCode,"string"==typeof e.details?s.messages=[e.details]:s.messages=e.details,s.raw=x in e?e[x]:e}return Object(c.j)(e)?Object(c.c)():new o.a(t,i,s)}async function w(){i.b||await Promise.all([n.e(5),n.e(18),n.e(59),n.e(475)]).then(n.bind(null,784))}function S(t){return j.some(e=>e.test(t))}async function E(t){var e
let n=t.params.url
const r=t.params.requestOptions,o=null!=(e=t.fetchOptions)?e:{},a=Object(l.y)(n)||Object(l.z)(n),u=r.responseType||"json",h=a?0:null!=r.timeout?r.timeout:b.timeout
let p=!1
if(!a){t.useSSL&&(n=Object(l.P)(n)),r.cacheBust&&"default"===o.cache&&(n=Object(l.d)(n,"request.preventCache",Date.now()))
let e={...r.query}
t.credentialToken&&(e.token=t.credentialToken)
let a=Object(l.J)(e)
Object(s.a)("esri-url-encodes-apostrophe")&&(a=a.replace(/'/g,"%27"))
const u=n.length+1+a.length
let c
p="delete"===r.method||"post"===r.method||"put"===r.method||!!r.body||u>b.maxUrlLength
const h=r.useProxy||!!Object(l.r)(n)
if(h){const t=Object(l.s)(n)
c=t.path,!p&&c.length+1+u>b.maxUrlLength&&(p=!0),t.query&&(e={...t.query,...e})}if("HEAD"===o.method&&(p||h)){if(p){if(u>b.maxUrlLength)throw _("request:invalid-parameters",new Error("URL exceeds maximum length"),t.params)
throw _("request:invalid-parameters",new Error("cannot use POST request when method is 'head'"),t.params)}if(h)throw _("request:invalid-parameters",new Error("cannot use proxy when method is 'head'"),t.params)}if(p?(o.method="delete"===r.method?"DELETE":"put"===r.method?"PUT":"POST",r.body?n=Object(l.e)(n,e):(o.body=Object(l.J)(e),o.headers||(o.headers={}),o.headers["Content-Type"]="application/x-www-form-urlencoded")):n=Object(l.e)(n,e),h&&(t.useProxy=!0,n=`${c}?${n}`),e.token&&y&&o.body instanceof FormData&&!Object(f.a)(n)&&o.body.set("token",e.token),r.hasOwnProperty("withCredentials"))t.withCredentials=r.withCredentials
else if(!Object(l.v)(n,Object(l.m)()))if(Object(l.D)(n))t.withCredentials=!0
else if(i.b){const e=i.b.findServerInfo(n)
e&&e.webTierAuth&&(t.withCredentials=!0)}t.withCredentials&&(o.credentials="include",Object(d.a)(n)&&await Object(d.d)(p?Object(l.e)(n,e):n))}let g,O,j=0,v=!1
h>0&&(j=setTimeout(()=>{v=!0,t.controller.abort()},h))
try{if("native-request-init"===r.responseType)O=o,O.url=n
else if("image"!==r.responseType||"default"!==o.cache||"GET"!==o.method||p||function(t){if(t)for(const e of Object.getOwnPropertyNames(t))if(t[e])return!0
return!1}(r.headers)||!a&&!t.useProxy&&b.proxyUrl&&!M(n)){if(g=await m._abortableFetch(n,o),t.useProxy||function(t){const e=Object(l.p)(t)
e&&!m._corsServers.includes(e)&&m._corsServers.push(e)}(n),"native"===r.responseType)O=g
else if("HEAD"!==o.method)if(g.ok){switch(u){case"array-buffer":O=await g.arrayBuffer()
break
case"blob":case"image":O=await g.blob()
break
default:O=await g.text()}if(j&&(clearTimeout(j),j=0),"json"===u||"xml"===u||"document"===u)if(O)switch(u){case"json":O=JSON.parse(O)
break
case"xml":O=A(O,"application/xml")
break
case"document":O=A(O,"text/html")}else O=null
if(O){if("array-buffer"===u||"blob"===u){const t=g.headers.get("Content-Type")
if(t&&/application\/json|text\/plain/i.test(t)&&O["blob"===u?"size":"byteLength"]<=750)try{const t=await new Response(O).json()
t.error&&(O=t)}catch{}}"image"===u&&O instanceof Blob&&(O=await P(URL.createObjectURL(O),t,!0))}}else O=await g.text()}else O=await P(n,t)}catch(e){var x
if("AbortError"===e.name){if(v)throw new Error("Timeout exceeded")
throw Object(c.c)("Request canceled")}if(!(!g&&e instanceof TypeError&&b.proxyUrl)||r.body||"delete"===r.method||"head"===r.method||"post"===r.method||"put"===r.method||t.useProxy||M(n))throw e
t.redoRequest=!0,Object(l.c)({proxyUrl:b.proxyUrl,urlPrefix:null!=(x=Object(l.p)(n))?x:""})}finally{j&&clearTimeout(j)}return[g,O]}function A(t,e){let n
try{n=(new DOMParser).parseFromString(t,e)}catch{}if(!n||n.getElementsByTagName("parsererror").length)throw new SyntaxError("XML Parse error")
return n}async function R(t,e,n){if(t.redoRequest)return t.redoRequest=!1,!1
const r=t.params.requestOptions
if(!e||"native"===r.responseType||"native-request-init"===r.responseType)return!0
let o,s
if(!e.ok)throw o=new Error(`Unable to load ${e.url} status: ${e.status}`),o[x]=n,o
n&&(n.error?o=n.error:"error"===n.status&&Array.isArray(n.messages)&&(o={...n},o[x]=n,o.details=n.messages))
let a,u=null
o&&(s=Number(o.code),u=o.hasOwnProperty("subcode")?Number(o.subcode):null,a=o.messageCode,a=a&&a.toUpperCase())
const c=r.authMode
if(403===s&&(4===u||o.message&&o.message.toLowerCase().includes("ssl")&&!o.message.toLowerCase().includes("permission"))){if(!t.useSSL)return t.useSSL=!0,!1}else if(!t.hasToken&&t.useIdentity&&("no-prompt"!==c||498===s)&&void 0!==s&&g.includes(s)&&!S(t.params.url)&&(403!==s||a&&!O.includes(a)&&(null==u||2===u&&t.credentialToken))){await w()
try{const e=await i.b.getCredential(t.params.url,{error:_("request:server",o,t.params),prompt:"no-prompt"!==c,signal:t.controller.signal,token:t.credentialToken})
return t.credential=e,t.credentialToken=e.token,t.useSSL=t.useSSL||e.ssl,!1}catch(e){if("no-prompt"===c)return t.credential=void 0,t.credentialToken=void 0,!1
o=e}}if(o)throw o
return!0}function P(t,e,n=!1){const r=e.controller.signal,i=new Image
return e.withCredentials?i.crossOrigin="use-credentials":i.crossOrigin="anonymous",i.alt="",i.fetchPriority=b.priority,i.src=t,Object(d.b)(i,t,n,r)}m._abortableFetch=null,m._corsServers=["https://server.arcgisonline.com","https://services.arcgisonline.com"]},772:function(t,e,n){"use strict"
n.r(e),n.d(e,"default",(function(){return b}))
var r=n(968),i=n(982),o=n(775),s=n(995),a=n(986),u=n(972),c=n(23),l=n(1156),f=n(970),h=(n(971),n(445),n(969)),d=n(983)
function m(t){if(!Object(c.l)(t))return null
const e={}
for(const n in t){const r=t[n]
r&&(e[n]=r.toJSON())}return 0!==Object.keys(e).length?e:null}let p=class extends(Object(a.b)(u.a)){constructor(...t){super(...t),this.isAggregate=!1,this.layer=null,this.popupTemplate=null,this.sourceLayer=null,Object.defineProperty(this,"uid",{value:Object(l.b)(),configurable:!0})}normalizeCtorArgs(t,e,n,r){return t&&!t.declaredClass?t:{geometry:t,symbol:e,attributes:n,popupTemplate:r}}set aggregateGeometries(t){const e=this._get("aggregateGeometries")
JSON.stringify(e)!==JSON.stringify(t)&&this._set("aggregateGeometries",t)}set attributes(t){const e=this._get("attributes")
e!==t&&(this._set("attributes",t),this._notifyLayer("attributes",e,t))}set geometry(t){const e=this._get("geometry")
e!==t&&(this._set("geometry",t),this._notifyLayer("geometry",e,t))}set symbol(t){const e=this._get("symbol")
e!==t&&(this._set("symbol",t),this._notifyLayer("symbol",e,t))}set visible(t){const e=this._get("visible")
e!==t&&(this._set("visible",t),this._notifyLayer("visible",e,t))}getEffectivePopupTemplate(t=!1){if(this.popupTemplate)return this.popupTemplate
for(const e of[this.sourceLayer,this.layer])if(e){if("popupTemplate"in e&&e.popupTemplate)return e.popupTemplate
if(t&&"defaultPopupTemplate"in e&&Object(c.l)(e.defaultPopupTemplate))return e.defaultPopupTemplate}return null}getAttribute(t){var e
return null==(e=this.attributes)?void 0:e[t]}setAttribute(t,e){if(this.attributes){const n=this.getAttribute(t)
this.attributes[t]=e,this._notifyLayer("attributes",n,e,t)}else this.attributes={[t]:e},this._notifyLayer("attributes",void 0,e,t)}getObjectId(){return this.sourceLayer&&"objectIdField"in this.sourceLayer&&this.sourceLayer.objectIdField?this.getAttribute(this.sourceLayer.objectIdField):null}toJSON(){return{aggregateGeometries:m(this.aggregateGeometries),geometry:Object(c.l)(this.geometry)?this.geometry.toJSON():null,symbol:Object(c.l)(this.symbol)?this.symbol.toJSON():null,attributes:{...this.attributes},popupTemplate:this.popupTemplate&&this.popupTemplate.toJSON()}}notifyGeometryChanged(){this._notifyLayer("geometry",this.geometry,this.geometry)}notifyMeshTransformChanged(){Object(c.l)(this.geometry)&&"mesh"===this.geometry.type&&this._notifyLayer("transform",this.geometry.transform,this.geometry.transform)}_notifyLayer(t,e,n,r){if(!this.layer||!("graphicChanged"in this.layer))return
const i={graphic:this,property:t,oldValue:e,newValue:n}
"attributes"===t&&(i.attributeName=r),this.layer.graphicChanged(i)}}
Object(r.a)([Object(f.b)({value:null,json:{read:function(t){if(!t)return null
const e={}
for(const n in t){const r=Object(d.a)(t[n])
r&&(e[n]=r)}return 0!==Object.keys(e).length?e:null}}})],p.prototype,"aggregateGeometries",null),Object(r.a)([Object(f.b)({value:null})],p.prototype,"attributes",null),Object(r.a)([Object(f.b)({value:null,types:i.c,json:{read:d.a}})],p.prototype,"geometry",null),Object(r.a)([Object(f.b)({type:Boolean})],p.prototype,"isAggregate",void 0),Object(r.a)([Object(f.b)({clonable:"reference"})],p.prototype,"layer",void 0),Object(r.a)([Object(f.b)({type:o.default})],p.prototype,"popupTemplate",void 0),Object(r.a)([Object(f.b)({clonable:"reference"})],p.prototype,"sourceLayer",void 0),Object(r.a)([Object(f.b)({value:null,types:s.e})],p.prototype,"symbol",null),Object(r.a)([Object(f.b)({type:Boolean,value:!0})],p.prototype,"visible",null),p=Object(r.a)([Object(h.a)("esri.Graphic")],p),(p||(p={})).generateUID=l.b
const b=p},773:function(t,e,n){"use strict"
n.r(e),n.d(e,"default",(function(){return _}))
var r,i=n(968),o=n(445),s=n(234),a=n(23),u=n(970),c=(n(971),n(969)),l=n(974),f=n(770),h=n(1004),d=n(992),m=n(769),p=n(1142),b=n(1085),y=n(1066),g=n(1157),O=n(1118),j=n(774),v=n(1105)
function x(t){return!Array.isArray(t[0])}let M=r=class extends h.a{static fromExtent(t){const e=t.clone().normalize(),n=t.spatialReference
let i=!1,o=!1
for(const t of e)t.hasZ&&(i=!0),t.hasM&&(o=!0)
const s={rings:e.map(t=>{const e=[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]
if(i&&t.hasZ){const n=t.zmin+.5*(t.zmax-t.zmin)
for(let t=0;t<e.length;t++)e[t].push(n)}if(o&&t.hasM){const n=t.mmin+.5*(t.mmax-t.mmin)
for(let t=0;t<e.length;t++)e[t].push(n)}return e}),spatialReference:n}
return i&&(s.hasZ=!0),o&&(s.hasM=!0),new r(s)}constructor(...t){super(...t),this.rings=[],this.type="polygon"}normalizeCtorArgs(t,e){let n,r,i=null,o=null
return t&&!Array.isArray(t)?(i=t.rings?t.rings:null,e||(t.spatialReference?e=t.spatialReference:t.rings||(e=t)),n=t.hasZ,r=t.hasM):i=t,i=i||[],e=e||m.default.WGS84,i.length&&i[0]&&null!=i[0][0]&&"number"==typeof i[0][0]&&(i=[i]),o=i[0]&&i[0][0],o&&(void 0===n&&void 0===r?(n=o.length>2,r=o.length>3):void 0===n?n=r?o.length>3:o.length>2:void 0===r&&(r=n?o.length>3:o.length>2)),{rings:i,spatialReference:e,hasZ:n,hasM:r}}get cache(){return this.commitProperty("rings"),this.commitProperty("hasZ"),this.commitProperty("hasM"),this.commitProperty("spatialReference"),{}}get centroid(){const t=Object(p.b)(this)
if(!t||isNaN(t[0])||isNaN(t[1])||this.hasZ&&isNaN(t[2]))return null
const e=new d.a
return e.x=t[0],e.y=t[1],e.spatialReference=this.spatialReference,this.hasZ&&(e.z=t[2]),e}get extent(){const{spatialReference:t}=this,e=Object(g.b)(this)
if(!e)return null
const n=new f.default(e)
return n.spatialReference=t,n}get isSelfIntersecting(){return Object(O.d)(this.rings)}writeRings(t,e){e.rings=Object(s.a)(this.rings)}addRing(t){if(!t)return
const e=this.rings,n=e.length
if(x(t)){const r=[]
for(let e=0,n=t.length;e<n;e++)r[e]=t[e].toArray()
e[n]=r}else e[n]=t.concat()
return this.notifyChange("rings"),this}clone(){const t=new r
return t.spatialReference=this.spatialReference,t.rings=Object(s.a)(this.rings),t.hasZ=this.hasZ,t.hasM=this.hasM,t}equals(t){if(this===t)return!0
if(Object(a.k)(t))return!1
const e=this.spatialReference,n=t.spatialReference
if(Object(a.l)(e)!==Object(a.l)(n))return!1
if(Object(a.l)(e)&&Object(a.l)(n)&&!e.equals(n))return!1
if(this.rings.length!==t.rings.length)return!1
const r=([t,e,n,r],[i,o,s,a])=>t===i&&e===o&&(null==n&&null==s||n===s)&&(null==r&&null==a||r===a)
for(let e=0;e<this.rings.length;e++){const n=this.rings[e],i=t.rings[e]
if(!Object(o.e)(n,i,r))return!1}return!0}contains(t){if(!t)return!1
const e=Object(j.project)(t,this.spatialReference)
return Object(b.g)(this,Object(a.l)(e)?e:t)}isClockwise(t){let e
return e=x(t)?t.map(t=>this.hasZ?this.hasM?[t.x,t.y,t.z,t.m]:[t.x,t.y,t.z]:[t.x,t.y]):t,Object(y.k)(e,this.hasM,this.hasZ)}getPoint(t,e){if(!this._validateInputs(t,e))return null
const n=this.rings[t][e],r=this.hasZ,i=this.hasM
return r&&!i?new d.a(n[0],n[1],n[2],void 0,this.spatialReference):i&&!r?new d.a(n[0],n[1],void 0,n[2],this.spatialReference):r&&i?new d.a(n[0],n[1],n[2],n[3],this.spatialReference):new d.a(n[0],n[1],this.spatialReference)}insertPoint(t,e,n){return this._validateInputs(t,e,!0)?(Object(v.a)(this,n),Array.isArray(n)||(n=n.toArray()),this.rings[t].splice(e,0,n),this.notifyChange("rings"),this):this}removePoint(t,e){if(!this._validateInputs(t,e))return null
const n=new d.a(this.rings[t].splice(e,1)[0],this.spatialReference)
return this.notifyChange("rings"),n}removeRing(t){if(!this._validateInputs(t,null))return null
const e=this.rings.splice(t,1)[0],n=this.spatialReference,r=e.map(t=>new d.a(t,n))
return this.notifyChange("rings"),r}setPoint(t,e,n){return this._validateInputs(t,e)?(Object(v.a)(this,n),Array.isArray(n)||(n=n.toArray()),this.rings[t][e]=n,this.notifyChange("rings"),this):this}_validateInputs(t,e,n=!1){if(null==t||t<0||t>=this.rings.length)return!1
if(null!=e){const r=this.rings[t]
if(n&&(e<0||e>r.length))return!1
if(!n&&(e<0||e>=r.length))return!1}return!0}toJSON(t){return this.write({},t)}}
Object(i.a)([Object(u.b)({readOnly:!0})],M.prototype,"cache",null),Object(i.a)([Object(u.b)({readOnly:!0})],M.prototype,"centroid",null),Object(i.a)([Object(u.b)({readOnly:!0})],M.prototype,"extent",null),Object(i.a)([Object(u.b)({readOnly:!0})],M.prototype,"isSelfIntersecting",null),Object(i.a)([Object(u.b)({type:[[[Number]]],json:{write:{isRequired:!0}}})],M.prototype,"rings",void 0),Object(i.a)([Object(l.a)("rings")],M.prototype,"writeRings",null),M=r=Object(i.a)([Object(c.a)("esri.geometry.Polygon")],M),M.prototype.toJSON.isDefaultToJSON=!0
const _=M},774:function(t,e,n){"use strict"
n.r(e),n.d(e,"canProject",(function(){return p})),n.d(e,"geographicToWebMercator",(function(){return O})),n.d(e,"lngLatToXY",(function(){return y})),n.d(e,"project",(function(){return b})),n.d(e,"webMercatorToGeographic",(function(){return j})),n.d(e,"x2lon",(function(){return l})),n.d(e,"xyToLngLat",(function(){return g})),n.d(e,"y2lat",(function(){return f}))
var r=n(234),i=n(23),o=n(769),s=n(1052),a=n(988)
function u(t){return 57.29577951308232*t}function c(t){return.017453292519943*t}function l(t){return t/s.a.radius}function f(t){return Math.PI/2-2*Math.atan(Math.exp(-t/s.a.radius))}function h(t){return null!=t.wkid||null!=t.wkt}const d=[0,0]
function m(t,e,n,r,i){const o=t,s=i
if(s.spatialReference=n,"x"in o&&"x"in s)[s.x,s.y]=e(o.x,o.y,d,r)
else if("xmin"in o&&"xmin"in s)[s.xmin,s.ymin]=e(o.xmin,o.ymin,d,r),[s.xmax,s.ymax]=e(o.xmax,o.ymax,d,r)
else if("paths"in o&&"paths"in s||"rings"in o&&"rings"in s){const t="paths"in o?o.paths:o.rings,n=[]
let i
for(let o=0;o<t.length;o++){const s=t[o]
i=[],n.push(i)
for(let t=0;t<s.length;t++)i.push(e(s[t][0],s[t][1],[0,0],r)),s[t].length>2&&i[t].push(s[t][2]),s[t].length>3&&i[t].push(s[t][3])}"paths"in s?s.paths=n:s.rings=n}else if("points"in o&&"points"in s){const t=o.points,n=[]
for(let i=0;i<t.length;i++)n[i]=e(t[i][0],t[i][1],[0,0],r),t[i].length>2&&n[i].push(t[i][2]),t[i].length>3&&n[i].push(t[i][3])
s.points=n}return i}function p(t,e){const n=t&&(h(t)?t:t.spatialReference),r=e&&(h(e)?e:e.spatialReference)
return!(t&&"type"in t&&"mesh"===t.type||e&&"type"in e&&"mesh"===e.type||!n||!r)&&(!!Object(a.d)(r,n)||Object(a.p)(r)&&Object(a.m)(n)||Object(a.p)(n)&&Object(a.m)(r))}function b(t,e){if(Object(i.k)(t))return null
const n=t.spatialReference,s=e&&(h(e)?e:e.spatialReference)
return p(n,s)?Object(a.d)(n,s)?Object(r.a)(t):Object(a.p)(s)?m(t,y,o.default.WebMercator,!1,Object(r.a)(t)):Object(a.m)(s)?m(t,g,o.default.WGS84,!1,Object(r.a)(t)):null:null}function y(t,e,n=[0,0]){e>89.99999?e=89.99999:e<-89.99999&&(e=-89.99999)
const r=c(e)
return n[0]=c(t)*s.a.radius,n[1]=s.a.halfSemiMajorAxis*Math.log((1+Math.sin(r))/(1-Math.sin(r))),n}function g(t,e,n=[0,0],r=!1){const i=u(t/s.a.radius)
return n[0]=r?i:i-360*Math.floor((i+180)/360),n[1]=u(Math.PI/2-2*Math.atan(Math.exp(-e/s.a.radius))),n}function O(t,e=!1,n=Object(r.a)(t)){return m(t,y,o.default.WebMercator,e,n)}function j(t,e=!1,n=Object(r.a)(t)){return m(t,g,o.default.WGS84,e,n)}},777:function(t,e,n){"use strict"
n.r(e),n.d(e,"default",(function(){return O}))
var r=n(968),i=(n(982),n(771)),o=n(446),s=n(1002),a=n(1063),u=n(1046),c=n(233),l=n(973),f=n(374),h=n(970),d=(n(971),n(445),n(969)),m=n(110),p=n(770),b=n(769)
let y=0,g=class extends(s.a.EventedMixin(Object(a.b)(u.a))){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new p.default(-180,-90,180,90,b.default.WGS84),this.id=Date.now().toString(16)+"-layer-"+y++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=b.default.WGS84,this.title=null,this.type=null,this.url=null,this.visible=!0}static async fromArcGISServerUrl(t){const e="string"==typeof t?{url:t}:t
return(await n.e(319).then(n.bind(null,2926))).fromUrl(e)}static fromPortalItem(t){return async function(t){const e="portalItem"in t?t:{portalItem:t},r=await Promise.all([n.e(1),n.e(2),n.e(246)]).then(n.bind(null,2192))
try{return await r.fromItem(e)}catch(t){const n=e&&e.portalItem,r=n&&n.id||"unset",i=n&&n.portal&&n.portal.url||m.default.portalUrl
throw c.a.getLogger("esri.layers.support.fromPortalItem").error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+i+"', id: '"+r+"')",t),t}}(t)}initialize(){this.when().catch(t=>{var e,n
Object(l.j)(t)||c.a.getLogger(this.declaredClass).error("#load()",`Failed to load layer (title: '${null!=(e=this.title)?e:"no title"}', id: '${null!=(n=this.id)?n:"no id"}')`,{error:t})})}destroy(){if(this.parent){const t=this,e=this.parent
"layers"in e&&e.layers.includes(t)?e.layers.remove(t):"tables"in e&&e.tables.includes(t)?e.tables.remove(t):"baseLayers"in e&&e.baseLayers.includes(t)?e.baseLayers.remove(t):"baseLayers"in e&&e.referenceLayers.includes(t)&&e.referenceLayers.remove(t)}}get hasAttributionData(){return null!=this.attributionDataUrl}get parsedUrl(){return Object(f.Q)(this.url)}async fetchAttributionData(){const t=this.attributionDataUrl
if(this.hasAttributionData&&t)return(await Object(i.default)(t,{query:{f:"json"},responseType:"json"})).data
throw new o.a("layer:no-attribution-data","Layer does not have attribution data")}}
Object(r.a)([Object(h.b)({type:String})],g.prototype,"attributionDataUrl",void 0),Object(r.a)([Object(h.b)({type:p.default})],g.prototype,"fullExtent",void 0),Object(r.a)([Object(h.b)({readOnly:!0})],g.prototype,"hasAttributionData",null),Object(r.a)([Object(h.b)({type:String,clonable:!1})],g.prototype,"id",void 0),Object(r.a)([Object(h.b)({type:Boolean,nonNullable:!0})],g.prototype,"legendEnabled",void 0),Object(r.a)([Object(h.b)({type:["show","hide","hide-children"]})],g.prototype,"listMode",void 0),Object(r.a)([Object(h.b)({type:Number,range:{min:0,max:1},nonNullable:!0})],g.prototype,"opacity",void 0),Object(r.a)([Object(h.b)({clonable:!1})],g.prototype,"parent",void 0),Object(r.a)([Object(h.b)({readOnly:!0})],g.prototype,"parsedUrl",null),Object(r.a)([Object(h.b)({type:Boolean})],g.prototype,"popupEnabled",void 0),Object(r.a)([Object(h.b)({type:Boolean})],g.prototype,"attributionVisible",void 0),Object(r.a)([Object(h.b)({type:b.default})],g.prototype,"spatialReference",void 0),Object(r.a)([Object(h.b)({type:String})],g.prototype,"title",void 0),Object(r.a)([Object(h.b)({readOnly:!0,json:{read:!1}})],g.prototype,"type",void 0),Object(r.a)([Object(h.b)()],g.prototype,"url",void 0),Object(r.a)([Object(h.b)({type:Boolean,nonNullable:!0})],g.prototype,"visible",void 0),g=Object(r.a)([Object(d.a)("esri.layers.Layer")],g)
const O=g},789:function(t,e,n){"use strict"
n.r(e),n.d(e,"default",(function(){return d}))
var r=n(968),i=n(970),o=(n(971),n(445),n(969)),s=n(1365),a=n(777),u=n(1221),c=n(1201),l=n(1551),f=n(1168)
let h=class extends(Object(u.a)(Object(c.a)(a.default))){constructor(t){super(t),this.elevationInfo=null,this.graphics=new l.a,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(t){return this.graphics.add(t),this}addMany(t){return this.graphics.addMany(t),this}removeAll(){return this.graphics.removeAll(),this}remove(t){this.graphics.remove(t)}removeMany(t){this.graphics.removeMany(t)}on(t,e){return super.on(t,e)}graphicChanged(t){this.emit("graphic-update",t)}}
Object(r.a)([Object(i.b)({type:f.a})],h.prototype,"elevationInfo",void 0),Object(r.a)([Object(i.b)(Object(s.b)(l.a,"graphics"))],h.prototype,"graphics",void 0),Object(r.a)([Object(i.b)({type:["show","hide"]})],h.prototype,"listMode",void 0),Object(r.a)([Object(i.b)()],h.prototype,"screenSizePerspectiveEnabled",void 0),Object(r.a)([Object(i.b)({readOnly:!0})],h.prototype,"type",void 0),Object(r.a)([Object(i.b)({constructOnly:!0})],h.prototype,"internal",void 0),h=Object(r.a)([Object(o.a)("esri.layers.GraphicsLayer")],h)
const d=h},972:function(t,e,n){"use strict"
n.d(e,"a",(function(){return y})),n.d(e,"b",(function(){return p}))
var r=n(968),i=n(975),o=n(23),s=n(234),a=n(1006)
class u{constructor(){this._values=new Map,this.multipleOriginsSupported=!1}clone(t){const e=new u
return this._values.forEach((n,r)=>{t&&t.has(r)||e.set(r,Object(s.a)(n.value),n.origin)}),e}get(t,e){e=this._normalizeOrigin(e)
const n=this._values.get(t)
return null==e||(null==n?void 0:n.origin)===e?null==n?void 0:n.value:void 0}originOf(t){var e,n
return null!=(e=null==(n=this._values.get(t))?void 0:n.origin)?e:a.a.USER}keys(t){t=this._normalizeOrigin(t)
const e=[...this._values.keys()]
return null==t?e:e.filter(e=>{var n
return(null==(n=this._values.get(e))?void 0:n.origin)===t})}set(t,e,n){if((n=this._normalizeOrigin(n))===a.a.DEFAULTS){const e=this._values.get(t)
if(e&&null!=e.origin&&e.origin>n)return}this._values.set(t,new c(e,n))}delete(t,e){var n
null!=(e=this._normalizeOrigin(e))&&(null==(n=this._values.get(t))?void 0:n.origin)!==e||this._values.delete(t)}has(t,e){var n
return null!=(e=this._normalizeOrigin(e))?(null==(n=this._values.get(t))?void 0:n.origin)===e:this._values.has(t)}forEach(t){this._values.forEach(({value:e},n)=>t(e,n))}_normalizeOrigin(t){if(null!=t)return t===a.a.DEFAULTS?t:a.a.USER}}class c{constructor(t,e){this.value=t,this.origin=e}}var l=n(1178),f=n(1091),h=n(999),d=n(1096),m=n(969)
const p=t=>{let e=class extends t{constructor(...t){super(...t)
const e=Object(o.d)(Object(h.a)(this)),n=e.store,r=new u
e.store=r,Object(l.a)(e,n,r)}read(t,e){Object(f.a)(this,t,e)}write(t={},e){return Object(d.b)(this,t,e)}toJSON(t){return this.write({},t)}static fromJSON(t,e){return b.call(this,t,e)}}
return e=Object(r.a)([Object(m.a)("esri.core.JSONSupport")],e),e.prototype.toJSON.isDefaultToJSON=!0,e}
function b(t,e){if(!t)return null
if(t.declaredClass)throw new Error("JSON object is already hydrated")
const n=new this
return n.read(t,e),n}let y=class extends(p(i.a)){}
y=Object(r.a)([Object(m.a)("esri.core.JSONSupport")],y)},973:function(t,e,n){"use strict"
n.d(e,"a",(function(){return M})),n.d(e,"b",(function(){return R})),n.d(e,"c",(function(){return u})),n.d(e,"d",(function(){return j})),n.d(e,"e",(function(){return A})),n.d(e,"f",(function(){return E})),n.d(e,"g",(function(){return v})),n.d(e,"h",(function(){return x})),n.d(e,"i",(function(){return g})),n.d(e,"j",(function(){return y})),n.d(e,"k",(function(){return f})),n.d(e,"l",(function(){return w})),n.d(e,"m",(function(){return O})),n.d(e,"n",(function(){return m})),n.d(e,"o",(function(){return p})),n.d(e,"p",(function(){return h})),n.d(e,"q",(function(){return c})),n.d(e,"r",(function(){return d})),n.d(e,"s",(function(){return _})),n.d(e,"t",(function(){return P})),n.d(e,"u",(function(){return S})),n.d(e,"v",(function(){return b}))
var r=n(1166),i=(n(1095),n(446)),o=n(1043),s=n(233),a=n(23)
function u(t="Aborted"){return new i.a("AbortError",t)}function c(t,e="Aborted"){if(f(t))throw u(e)}function l(t){return Object(a.l)(t)?"aborted"in t?t:t.signal:t}function f(t){const e=l(t)
return Object(a.l)(e)&&e.aborted}function h(t){if(y(t))throw t}function d(t){if(!y(t))throw t}function m(t,e){const n=l(t)
if(!Object(a.k)(n)){if(!n.aborted)return Object(o.d)(n,"abort",()=>e())
e()}}function p(t,e){const n=l(t)
if(!Object(a.k)(n))return c(n),Object(o.d)(n,"abort",()=>e(u()))}function b(t,e){const n=l(e)
return Object(a.k)(n)?t:new Promise((n,r)=>{let i=m(e,()=>r(u()))
const o=()=>i=Object(a.s)(i)
t.then(o,o),t.then(n,r)})}function y(t){return"AbortError"===(null==t?void 0:t.name)}async function g(t){try{return await t}catch(t){if(!y(t))throw t
return}}async function O(t,e=s.a.getLogger("esri")){try{return await t}catch(t){y(t)||e.error(t)}}function j(){let t=null
const e=new Promise((e,n)=>{t={promise:void 0,resolve:e,reject:n}})
return t.promise=e,t}async function v(t){if(!t)return
if("function"!=typeof t.forEach){const e=Object.keys(t),n=e.map(e=>t[e]),r=await v(n),i={}
return e.map((t,e)=>i[t]=r[e]),i}const e=t
return new Promise(t=>{const n=[]
let r=e.length
0===r&&t(n),e.forEach(e=>{const i={promise:e||Promise.resolve(e)}
n.push(i),i.promise.then(t=>{i.value=t}).catch(t=>{i.error=t}).then(()=>{--r,0===r&&t(n)})})})}async function x(t){return(await v(t)).filter(t=>!!t.value).map(t=>t.value)}function M(t,e,n){const r=new AbortController
return m(n,()=>r.abort()),new Promise((n,i)=>{let o=setTimeout(()=>{o=0,n(e)},t)
m(r,()=>{o&&(clearTimeout(o),i(u()))})})}function _(t,e,n,r){const o=n&&"abort"in n?n:null
null!=r||o||(r=n)
let s=setTimeout(()=>{s=0,o&&o.abort()},e)
const a=()=>r||new i.a("promiseUtils:timeout","The wrapped promise did not resolve within "+e+" ms")
return t.then(t=>{if(0===s)throw a()
return clearTimeout(s),t},t=>{throw clearTimeout(s),0===s?a():t})}function w(t){return t&&"function"==typeof t.then}function S(t){return w(t)?t:Promise.resolve(t)}function E(t,e=-1){let n,r,i,o,s=null
const c=(...l)=>{if(n){r=l,o&&o.reject(u()),o=j()
const t=Object(a.d)(o.promise)
if(s){const t=s
s=null,t.abort()}return t}if(i=o||j(),o=null,e>0){const r=new AbortController
n=S(t(...l,r.signal))
const i=n
M(e).then(()=>{n===i&&(o?r.abort():s=r)})}else n=1,n=S(t(...l))
const f=()=>{const t=r
r=i=n=s=null,null!=t&&c(...t)},h=n,d=i
return h.then(f,f),h.then(d.resolve,d.reject),Object(a.d)(d.promise)}
return c}function A(){let t,e
const n=new Promise((n,r)=>{t=n,e=r}),i=e=>{t(e)}
return i.resolve=e=>t(e),i.reject=t=>e(t),i.timeout=(t,e)=>r.a.setTimeout(()=>i.reject(e),t),i.promise=n,i}function R(t,e){return t.then(e,e)}async function P(t){await Promise.resolve(),c(t)}},974:function(t,e,n){"use strict"
n.d(e,"a",(function(){return i}))
var r=n(970)
function i(t,e,n){let i,o
return void 0===e?(o=t,i=[void 0]):"string"!=typeof e?(o=t,i=[void 0],n=e):(o=e,i=Array.isArray(t)?t:[t]),(t,e)=>{const s=t.constructor.prototype
for(const a of i){const i=Object(r.c)(t,a,o)
i.write&&"object"==typeof i.write||(i.write={}),n&&(i.write.target=n),i.write.writer=s[e]}}}},976:function(t,e,n){"use strict"
n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}))
var r=n(146)
class i{constructor(t,e={ignoreUnknown:!1,useNumericKeys:!1}){this._jsonToAPI=t,this._options=e,this.apiValues=[],this.jsonValues=[],this._apiToJSON=this._invertMap(t),this.apiValues=this._getKeysSorted(this._apiToJSON),this.jsonValues=this._getKeysSorted(this._jsonToAPI),this.read=t=>this.fromJSON(t),this.write=(t,e,n)=>{const i=this.toJSON(t)
void 0!==i&&Object(r.c)(n,i,e)},this.write.isJSONMapWriter=!0}toJSON(t){if(null==t)return null
if(this._apiToJSON.hasOwnProperty(t)){const e=this._apiToJSON[t]
return this._options.useNumericKeys?+e:e}return this._options.ignoreUnknown?void 0:t}fromJSON(t){return null!=t&&this._jsonToAPI.hasOwnProperty(t)?this._jsonToAPI[t]:this._options.ignoreUnknown?void 0:t}_invertMap(t){const e={}
for(const n in t)e[t[n]]=n
return e}_getKeysSorted(t){const e=[]
for(const n in t)e.push(n)
return e.sort(),e}}function o(){return function(t,e){return new i(t,{ignoreUnknown:!0,...e})}}},977:function(t,e,n){"use strict"
n.d(e,"a",(function(){return i}))
var r=n(970)
function i(t,e,n){let i,o
return void 0===e||Array.isArray(e)?(o=t,n=e,i=[void 0]):(o=e,i=Array.isArray(t)?t:[t]),(t,e)=>{const s=t.constructor.prototype
i.forEach(i=>{const a=Object(r.c)(t,i,o)
a.read&&"object"==typeof a.read||(a.read={}),a.read.reader=s[e],n&&(a.read.source=(a.read.source||[]).concat(n))})}}},978:function(t,e,n){"use strict"
n.d(e,"a",(function(){return y})),n.d(e,"b",(function(){return f})),n.d(e,"c",(function(){return p})),n.d(e,"d",(function(){return b})),n.d(e,"e",(function(){return g})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return c})),n.d(e,"h",(function(){return h}))
var r=n(1043),i=n(1017),o=n(23),s=n(973),a=n(1076)
function u(t,e,n={}){return l(t,e,n,d)}function c(t,e,n={}){return l(t,e,n,m)}function l(t,e,n={},r){let i=null
const s=n.once?(t,n)=>{r(t)&&(Object(o.s)(i),e(t,n))}:(t,n)=>{r(t)&&e(t,n)}
if(i=Object(a.e)(t,s,n.sync,n.equals),n.initial){const e=t()
s(e,e)}return i}function f(t,e,n,s={}){let a=null,c=null,l=null
function f(){a&&c&&(c.remove(),null!=s.onListenerRemove&&s.onListenerRemove(a),a=null,c=null)}function h(t){s.once&&s.once&&Object(o.s)(l),n(t)}const d=u(t,(t,n)=>{f(),Object(r.b)(t)&&(a=t,c=Object(r.c)(t,e,h),null==s.onListenerAdd||s.onListenerAdd(t))},{sync:s.sync,initial:!0})
return l=Object(i.c)(()=>{d.remove(),f()}),l}function h(t,e){return function(t,e,n){if(Object(s.k)(n))return Promise.reject(Object(s.c)())
const r=t()
if(null!=e&&e(r))return Promise.resolve(r)
let a=null
function u(){a=Object(o.s)(a)}return new Promise((r,o)=>{a=Object(i.b)([Object(s.n)(n,()=>{u(),o(Object(s.c)())}),l(t,t=>{u(),r(t)},{sync:!1,once:!0},null!=e?e:d)])})}(t,m,e)}function d(t){return!0}function m(t){return!!t}function p(t,e,n={}){let r=!1
const i=u(t,(t,n)=>{r||e(t,n)},n)
return{remove(){i.remove()},pause(){r=!0},resume(){r=!1}}}n(1048)
const b={sync:!0},y={initial:!0},g={sync:!0,initial:!0}},979:function(t,e,n){"use strict"
n.d(e,"a",(function(){return o}))
var r=n(976),i=n(970)
function o(t,e={}){var n
const o=t instanceof r.a?t:new r.a(t,e),s={type:null==(n=null==e?void 0:e.ignoreUnknown)||n?o.apiValues:String,json:{type:o.jsonValues,read:!(null!=e&&e.readOnly)&&{reader:o.read},write:{writer:o.write}}}
return void 0!==(null==e?void 0:e.readOnly)&&(s.readOnly=!!e.readOnly),void 0!==(null==e?void 0:e.default)&&(s.json.default=e.default),void 0!==(null==e?void 0:e.name)&&(s.json.name=e.name),void 0!==(null==e?void 0:e.nonNullable)&&(s.nonNullable=e.nonNullable),Object(i.b)(s)}},980:function(t,e,n){"use strict"
n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return h})),n.d(e,"c",(function(){return d})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return l})),n.d(e,"f",(function(){return a})),n.d(e,"g",(function(){return u})),n.d(e,"h",(function(){return i})),n.d(e,"i",(function(){return o})),n.d(e,"j",(function(){return m})),n.d(e,"k",(function(){return s}))
const r=/^-?(\d+(\.\d+)?)\s*((px)|(pt))?$/i
function i(t){return t?t/72*96:0}function o(t){return t?72*t/96:0}function s(t){if("string"==typeof t){const e=t.match(r)
if(e){const n=Number(e[1]),r=e[3]&&e[3].toLowerCase(),i="-"===t.charAt(0),s="px"===r?o(n):n
return i?-s:s}return console.warn("screenUtils.toPt: input not recognized!"),null}return t}function a(t=0,e=0){return{x:t,y:e}}function u(t=0,e=0){return[t,e]}function c(t=0,e=0){return[t,e]}function l(t=0,e=0,n=0){return[t,e,n]}function f(t){return t}function h(t){return t}function d(t){return t}function m(t,e){return e?(e[0]=t.x,e[1]=t.y,e.length>2&&(e[2]=0),e):[t.x,t.y]}},981:function(t,e,n){"use strict"
function r(){return[0,0,0]}function i(t){return[t[0],t[1],t[2]]}function o(t,e,n){return[t,e,n]}function s(t){const e=[0,0,0],n=Math.min(3,t.length)
for(let r=0;r<n;++r)e[r]=t[r]
return e}function a(t,e){return new Float64Array(t,e,3)}function u(){return o(1,1,1)}function c(){return o(1,0,0)}function l(){return o(0,1,0)}function f(){return o(0,0,1)}n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return b})),n.d(e,"c",(function(){return h})),n.d(e,"d",(function(){return i})),n.d(e,"e",(function(){return a})),n.d(e,"f",(function(){return r})),n.d(e,"g",(function(){return s})),n.d(e,"h",(function(){return o})),n.d(e,"i",(function(){return f}))
const h=[0,0,0],d=u(),m=c(),p=l(),b=f()
Object.freeze(Object.defineProperty({__proto__:null,ONES:d,UNIT_X:m,UNIT_Y:p,UNIT_Z:b,ZEROS:h,clone:i,create:r,createView:a,fromArray:s,fromValues:o,ones:u,unitX:c,unitY:l,unitZ:f,zeros:function(){return[0,0,0]}},Symbol.toStringTag,{value:"Module"}))},982:function(t,e,n){"use strict"
n.d(e,"c",(function(){return l}))
var r=n(971),i=n(770)
n.d(e,"a",(function(){return i.default}))
var o=n(1004),s=n(1055),a=n(992)
n.d(e,"b",(function(){return a.a}))
var u=n(773),c=n(1021)
n(769),n(1036),n(983)
const l={base:o.a,key:"type",typeMap:{extent:i.default,multipoint:s.a,point:a.a,polyline:c.a,polygon:u.default}}
Object(r.k)(l)},983:function(t,e,n){"use strict"
n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return g})),n.d(e,"c",(function(){return b})),n.d(e,"d",(function(){return l})),n.d(e,"e",(function(){return f})),n.d(e,"f",(function(){return h})),n.d(e,"g",(function(){return m})),n.d(e,"h",(function(){return d}))
var r=n(23),i=n(770),o=n(1004),s=n(1055),a=n(992),u=n(773),c=n(1021)
function l(t){return void 0!==t.xmin&&void 0!==t.ymin&&void 0!==t.xmax&&void 0!==t.ymax}function f(t){return void 0!==t.points}function h(t){return void 0!==t.x&&void 0!==t.y}function d(t){return void 0!==t.paths}function m(t){return void 0!==t.rings}function p(t){return Object(r.k)(t)?null:t instanceof o.a?t:h(t)?a.a.fromJSON(t):d(t)?c.a.fromJSON(t):m(t)?u.default.fromJSON(t):f(t)?s.a.fromJSON(t):l(t)?i.default.fromJSON(t):null}function b(t){return t?h(t)?"esriGeometryPoint":d(t)?"esriGeometryPolyline":m(t)?"esriGeometryPolygon":l(t)?"esriGeometryEnvelope":f(t)?"esriGeometryMultipoint":null:null}const y={esriGeometryPoint:a.a,esriGeometryPolyline:c.a,esriGeometryPolygon:u.default,esriGeometryEnvelope:i.default,esriGeometryMultipoint:s.a}
function g(t){return t&&y[t]||null}},985:function(t,e,n){"use strict"
n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return F})),n.d(e,"e",(function(){return L})),n.d(e,"f",(function(){return C})),n.d(e,"g",(function(){return W})),n.d(e,"h",(function(){return h})),n.d(e,"i",(function(){return R})),n.d(e,"j",(function(){return u})),n.d(e,"k",(function(){return c})),n.d(e,"l",(function(){return s})),n.d(e,"m",(function(){return O})),n.d(e,"n",(function(){return M})),n.d(e,"o",(function(){return _})),n.d(e,"p",(function(){return b})),n.d(e,"q",(function(){return w})),n.d(e,"r",(function(){return g})),n.d(e,"s",(function(){return G})),n.d(e,"t",(function(){return k})),n.d(e,"u",(function(){return o})),n.d(e,"v",(function(){return S})),n.d(e,"w",(function(){return x})),n.d(e,"x",(function(){return v})),n.d(e,"y",(function(){return j})),n.d(e,"z",(function(){return A})),n.d(e,"A",(function(){return N})),n.d(e,"B",(function(){return a})),n.d(e,"C",(function(){return E})),n.d(e,"D",(function(){return U})),n.d(e,"E",(function(){return P})),n.d(e,"F",(function(){return D})),n.d(e,"G",(function(){return d})),n.d(e,"H",(function(){return p})),n.d(e,"I",(function(){return y}))
var r=n(981),i=n(1016)
function o(t){const e=t[0],n=t[1],r=t[2]
return Math.sqrt(e*e+n*n+r*r)}function s(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function a(t,e,n,r){return t[0]=e,t[1]=n,t[2]=r,t}function u(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t}function c(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t}function l(t,e,n){return t[0]=e[0]*n[0],t[1]=e[1]*n[1],t[2]=e[2]*n[2],t}function f(t,e,n){return t[0]=e[0]/n[0],t[1]=e[1]/n[1],t[2]=e[2]/n[2],t}function h(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t[2]=Math.floor(e[2]),t}function d(t,e){return t[0]=Math.abs(e[0]),t[1]=Math.abs(e[1]),t[2]=Math.abs(e[2]),t}function m(t,e){return t[0]=Math.sign(e[0]),t[1]=Math.sign(e[1]),t[2]=Math.sign(e[2]),t}function p(t,e,n){return t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t[2]=Math.min(e[2],n[2]),t}function b(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t}function y(t,e,n,r){return t[0]=e[0]+n[0]*r,t[1]=e[1]+n[1]*r,t[2]=e[2]+n[2]*r,t}function g(t,e){const n=e[0]-t[0],r=e[1]-t[1],i=e[2]-t[2]
return Math.sqrt(n*n+r*r+i*i)}function O(t,e){const n=e[0]-t[0],r=e[1]-t[1],i=e[2]-t[2]
return n*n+r*r+i*i}function j(t){const e=t[0],n=t[1],r=t[2]
return e*e+n*n+r*r}function v(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}function x(t,e){const n=e[0],r=e[1],i=e[2]
let o=n*n+r*r+i*i
return o>0&&(o=1/Math.sqrt(o),t[0]=e[0]*o,t[1]=e[1]*o,t[2]=e[2]*o),t}function M(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function _(t,e,n){const r=e[0],i=e[1],o=e[2],s=n[0],a=n[1],u=n[2]
return t[0]=i*u-o*a,t[1]=o*s-r*u,t[2]=r*a-i*s,t}function w(t,e,n,r){const i=e[0],o=e[1],s=e[2]
return t[0]=i+r*(n[0]-i),t[1]=o+r*(n[1]-o),t[2]=s+r*(n[2]-s),t}function S(t,e,n){const r=e[0],i=e[1],o=e[2]
return t[0]=n[0]*r+n[4]*i+n[8]*o+n[12],t[1]=n[1]*r+n[5]*i+n[9]*o+n[13],t[2]=n[2]*r+n[6]*i+n[10]*o+n[14],t}function E(t,e,n){const r=e[0],i=e[1],o=e[2]
return t[0]=r*n[0]+i*n[3]+o*n[6],t[1]=r*n[1]+i*n[4]+o*n[7],t[2]=r*n[2]+i*n[5]+o*n[8],t}function A(t,e,n){const r=n[0],i=n[1],o=n[2],s=n[3],a=e[0],u=e[1],c=e[2]
let l=i*c-o*u,f=o*a-r*c,h=r*u-i*a,d=i*h-o*f,m=o*l-r*h,p=r*f-i*l
const b=2*s
return l*=b,f*=b,h*=b,d*=2,m*=2,p*=2,t[0]=a+l+d,t[1]=u+f+m,t[2]=c+h+p,t}function R(t,e,n,r){const i=[],o=[]
return i[0]=e[0]-n[0],i[1]=e[1]-n[1],i[2]=e[2]-n[2],o[0]=i[0]*Math.cos(r)-i[1]*Math.sin(r),o[1]=i[0]*Math.sin(r)+i[1]*Math.cos(r),o[2]=i[2],t[0]=o[0]+n[0],t[1]=o[1]+n[1],t[2]=o[2]+n[2],t}function P(t,e){s(T,t),s(I,e),x(T,T),x(I,I)
const n=M(T,I)
return n>1?0:n<-1?Math.PI:Math.acos(n)}const T=Object(r.f)(),I=Object(r.f)()
function k(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}function C(t,e){if(t===e)return!0
const n=t[0],r=t[1],o=t[2],s=e[0],a=e[1],u=e[2],c=Object(i.c)()
return Math.abs(n-s)<=c*Math.max(1,Math.abs(n),Math.abs(s))&&Math.abs(r-a)<=c*Math.max(1,Math.abs(r),Math.abs(a))&&Math.abs(o-u)<=c*Math.max(1,Math.abs(o),Math.abs(u))}function N(t,e,n){const r=n[0]-e[0],i=n[1]-e[1],o=n[2]-e[2]
let s=r*r+i*i+o*o
return s>0?(s=1/Math.sqrt(s),t[0]=r*s,t[1]=i*s,t[2]=o*s,t):(t[0]=0,t[1]=0,t[2]=0,t)}const D=c,q=l,z=f,G=g,L=O,U=o,F=j,W=Object.freeze(Object.defineProperty({__proto__:null,abs:d,add:u,angle:P,bezier:function(t,e,n,r,i,o){const s=1-o,a=s*s,u=o*o,c=a*s,l=3*o*a,f=3*u*s,h=u*o
return t[0]=e[0]*c+n[0]*l+r[0]*f+i[0]*h,t[1]=e[1]*c+n[1]*l+r[1]*f+i[1]*h,t[2]=e[2]*c+n[2]*l+r[2]*f+i[2]*h,t},ceil:function(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t[2]=Math.ceil(e[2]),t},copy:s,cross:_,direction:N,dist:G,distance:g,div:z,divide:f,dot:M,equals:C,exactEquals:k,floor:h,hermite:function(t,e,n,r,i,o){const s=o*o,a=s*(2*o-3)+1,u=s*(o-2)+o,c=s*(o-1),l=s*(3-2*o)
return t[0]=e[0]*a+n[0]*u+r[0]*c+i[0]*l,t[1]=e[1]*a+n[1]*u+r[1]*c+i[1]*l,t[2]=e[2]*a+n[2]*u+r[2]*c+i[2]*l,t},inverse:function(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t},len:U,length:o,lerp:w,max:function(t,e,n){return t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t[2]=Math.max(e[2],n[2]),t},min:p,mul:q,multiply:l,negate:v,normalize:x,random:function(t,e){e=e||1
const n=i.a,r=2*n()*Math.PI,o=2*n()-1,s=Math.sqrt(1-o*o)*e
return t[0]=Math.cos(r)*s,t[1]=Math.sin(r)*s,t[2]=o*e,t},rotateX:function(t,e,n,r){const i=[],o=[]
return i[0]=e[0]-n[0],i[1]=e[1]-n[1],i[2]=e[2]-n[2],o[0]=i[0],o[1]=i[1]*Math.cos(r)-i[2]*Math.sin(r),o[2]=i[1]*Math.sin(r)+i[2]*Math.cos(r),t[0]=o[0]+n[0],t[1]=o[1]+n[1],t[2]=o[2]+n[2],t},rotateY:function(t,e,n,r){const i=[],o=[]
return i[0]=e[0]-n[0],i[1]=e[1]-n[1],i[2]=e[2]-n[2],o[0]=i[2]*Math.sin(r)+i[0]*Math.cos(r),o[1]=i[1],o[2]=i[2]*Math.cos(r)-i[0]*Math.sin(r),t[0]=o[0]+n[0],t[1]=o[1]+n[1],t[2]=o[2]+n[2],t},rotateZ:R,round:function(t,e){return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t[2]=Math.round(e[2]),t},scale:b,scaleAndAdd:y,set:a,sign:m,sqrDist:L,sqrLen:F,squaredDistance:O,squaredLength:j,str:function(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"},sub:D,subtract:c,transformMat3:E,transformMat4:S,transformQuat:A},Symbol.toStringTag,{value:"Module"}))},986:function(t,e,n){"use strict"
n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return l}))
var r=n(968),i=n(975),o=(n(235),n(234)),s=(n(233),n(23)),a=n(1006),u=n(999),c=n(969)
const l=t=>{let e=class extends t{clone(){const t=Object(s.w)(Object(u.a)(this),"unable to clone instance of non-accessor class"),e=t.metadatas,n=t.store,r={},i=new Map
for(const t in e){const s=e[t],u=null==n?void 0:n.originOf(t),c=s.clonable
if(s.readOnly||!1===c||u!==a.a.USER&&u!==a.a.DEFAULTS&&u!==a.a.WEB_MAP&&u!==a.a.WEB_SCENE)continue
const l=this[t]
let f=null
f="function"==typeof c?c(l):"reference"===c?l:Object(o.e)(l),null!=l&&null==f||(u===a.a.DEFAULTS?i.set(t,f):r[t]=f)}const c=new(0,Object.getPrototypeOf(this).constructor)(r)
if(i.size){var l
const t=null==(l=Object(u.a)(c))?void 0:l.store
if(t)for(const[e,n]of i)t.set(e,n,a.a.DEFAULTS)}return c}}
return e=Object(r.a)([Object(c.a)("esri.core.Clonable")],e),e}
let f=class extends(l(i.a)){}
f=Object(r.a)([Object(c.a)("esri.core.Clonable")],f)},987:function(t,e,n){"use strict"
n.d(e,"a",(function(){return u}))
var r=n(971),i=n(1112)
const o=Object.prototype.toString
function s(t){const e="__accessorMetadata__"in t?Object(r.m)(t):t
return function(...t){if(t.push(e),"number"==typeof t[2])throw new Error("Using @cast has parameter decorator is not supported since 4.16")
return a.apply(this,t)}}function a(t,e,n,r){Object(i.b)(t,e).cast=r}function u(...t){if(3!==t.length||"string"!=typeof t[1])return 1===t.length&&"[object Function]"===o.call(t[0])?s(t[0]):1===t.length&&"string"==typeof t[0]?function(t){return(e,n)=>{Object(i.b)(e,t).cast=e[n]}}(t[0]):void 0}},988:function(t,e,n){"use strict"
n.d(e,"a",(function(){return R})),n.d(e,"b",(function(){return E})),n.d(e,"c",(function(){return A})),n.d(e,"d",(function(){return d})),n.d(e,"e",(function(){return m})),n.d(e,"f",(function(){return g})),n.d(e,"g",(function(){return b})),n.d(e,"h",(function(){return p})),n.d(e,"i",(function(){return x})),n.d(e,"j",(function(){return _})),n.d(e,"k",(function(){return j})),n.d(e,"l",(function(){return S})),n.d(e,"m",(function(){return y})),n.d(e,"n",(function(){return v})),n.d(e,"o",(function(){return M})),n.d(e,"p",(function(){return O})),n.d(e,"q",(function(){return w}))
var r=n(23),i=n(447),o=n(1289),s=n(1188)
const a={102113:!0,102100:!0,3857:!0,3785:!0},u={4326:!0,3785:!0,3857:!0,102113:!0,102100:!0,104905:!0,104971:!0},c='PROJCS["WGS_1984_Web_Mercator_Auxiliary_Sphere",GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator_Auxiliary_Sphere"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],PARAMETER["Standard_Parallel_1",0.0],PARAMETER["Auxiliary_Sphere_Type",0.0],UNIT["Meter",1.0]]',l=[-20037508.342788905,20037508.342788905],f=[-20037508.342787,20037508.342787],h={102113:{wkTemplate:'PROJCS["WGS_1984_Web_Mercator",GEOGCS["GCS_WGS_1984_Major_Auxiliary_Sphere",DATUM["D_WGS_1984_Major_Auxiliary_Sphere",SPHEROID["WGS_1984_Major_Auxiliary_Sphere",6378137.0,0.0]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],PARAMETER["Standard_Parallel_1",0.0],UNIT["Meter",1.0]]',valid:l,origin:f,dx:1e-5},102100:{wkTemplate:c,valid:l,origin:f,dx:1e-5},3785:{wkTemplate:'PROJCS["WGS_1984_Web_Mercator",GEOGCS["GCS_WGS_1984_Major_Auxiliary_Sphere",DATUM["D_WGS_1984_Major_Auxiliary_Sphere",SPHEROID["WGS_1984_Major_Auxiliary_Sphere",6378137.0,0.0]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],PARAMETER["Standard_Parallel_1",0.0],UNIT["Meter",1.0]]',valid:l,origin:f,dx:1e-5},3857:{wkTemplate:c,valid:l,origin:f,dx:1e-5},4326:{wkTemplate:'GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",{Central_Meridian}],UNIT["Degree",0.0174532925199433]]',altTemplate:'PROJCS["WGS_1984_Plate_Carree",GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Plate_Carree"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],UNIT["Degrees",111319.491]]',valid:[-180,180],origin:[-180,90],dx:1e-5},104971:{wkTemplate:'GEOGCS["Mars_2000_(Sphere)",DATUM["Mars_2000_(Sphere)",SPHEROID["Mars_2000_(Sphere)",3396190.0,0.0]],PRIMEM["Reference_Meridian",0.0],UNIT["Degree",0.0174532925199433]]',valid:[-180,180],origin:[-180,90],dx:1e-5},104905:{wkTemplate:'GEOGCS["GCS_Mars_2000",DATUM["D_Mars_2000",SPHEROID["Mars_2000_IAU_IAG",3396190.0,169.8944472236118]],PRIMEM["Reference_Meridian",0.0],UNIT["Degree",0.0174532925199433]]',valid:[-180,180],origin:[-180,90],dx:1e-5}}
function d(t,e){return t===e||!Object(r.k)(t)&&!Object(r.k)(e)&&(null!=t.wkid||null!=e.wkid?t.wkid===e.wkid||O(t)&&O(e)||null!=e.latestWkid&&t.wkid===e.latestWkid||null!=t.latestWkid&&e.wkid===t.latestWkid:!(!t.wkt||!e.wkt)&&t.wkt.toUpperCase()===e.wkt.toUpperCase())}function m(t){return S(t)&&t.wkid&&h[t.wkid]||null}function p(t){return!!S(t)&&(t.wkid?null==s.a[t.wkid]:!!t.wkt&&!!/^\s*GEOGCS/i.test(t.wkt))}function b(t){return!(x(t)||_(t))}function y(t){return S(t)&&4326===t.wkid}function g(t){return S(t)&&t.wkid===o.a.CGCS2000}function O(t){return S(t)&&null!=t.wkid&&!0===a[t.wkid]}function j(t){return S(t)&&32662===t.wkid}function v(t){return t===o.a.GCSMARS2000||t===o.a.GCSMARS2000_SPHERE}function x(t){return S(t)&&null!=t.wkid&&v(t.wkid)}function M(t){return t===o.a.GCSMOON2000}function _(t){return S(t)&&null!=t.wkid&&M(t.wkid)}function w(t){return S(t)&&null!=t.wkid&&!0===u[t.wkid]}function S(t){return Object(r.l)(t)&&(null!=t.wkid&&t.wkid>=2e3||null!=t.wkt)}const E={wkid:4326,wkt:Object(i.c)(h[4326].wkTemplate,{Central_Meridian:"0.0"})},A={wkid:102100,latestWkid:3857},R={wkid:32662}},989:function(t,e,n){"use strict"
n.d(e,"a",(function(){return w})),n.d(e,"b",(function(){return R})),n.d(e,"c",(function(){return P})),n.d(e,"d",(function(){return M})),n.d(e,"e",(function(){return x})),n.d(e,"f",(function(){return T})),n.d(e,"g",(function(){return C})),n.d(e,"h",(function(){return I})),n.d(e,"i",(function(){return ot})),n.d(e,"j",(function(){return v})),n.d(e,"k",(function(){return y})),n.d(e,"l",(function(){return O})),n.d(e,"m",(function(){return E})),n.d(e,"n",(function(){return k})),n.d(e,"o",(function(){return N})),n.d(e,"p",(function(){return $})),n.d(e,"q",(function(){return V})),n.d(e,"r",(function(){return at})),n.d(e,"s",(function(){return Z})),n.d(e,"t",(function(){return m})),n.d(e,"u",(function(){return B})),n.d(e,"v",(function(){return st})),n.d(e,"w",(function(){return X})),n.d(e,"x",(function(){return _})),n.d(e,"y",(function(){return K})),n.d(e,"z",(function(){return it}))
var r,i,o=n(446),s=n(23),a=n(146);(i=r||(r={})).VALUE_OUT_OF_RANGE="domain-validation-error::value-out-of-range",i.INVALID_CODED_VALUE="domain-validation-error::invalid-coded-value"
var u=n(1010)
const c=/^([0-9])/,l=/[^a-z0-9_\u0080-\uffff]/gi,f=/_{2,}/g,h=/^_/,d=/_$/
function m(t){return null==t?null:t.trim().replace(l,"_").replace(f,"_").replace(h,"").replace(d,"").replace(c,"F$1")||null}const p=["field","field2","field3","normalizationField","rotationInfo.field","proportionalSymbolInfo.field","proportionalSymbolInfo.normalizationField","colorInfo.field","colorInfo.normalizationField"],b=["field","normalizationField"]
function y(t,e){if(null!=t&&null!=e)for(const n of Array.isArray(t)?t:[t])if(g(p,n,e),"visualVariables"in n&&n.visualVariables)for(const t of n.visualVariables)g(b,t,e)}function g(t,e,n){if(t)for(const r of t){const t=Object(a.b)(r,e),i=t&&"function"!=typeof t&&n.get(t)
i&&Object(a.c)(r,i.name,e)}}function O(t,e){var n
if(null!=t&&null!=e&&null!=(n=e.fields)&&n.length)if("startField"in t){var r,i
const n=e.get(t.startField),o=e.get(t.endField)
t.startField=null!=(r=null==n?void 0:n.name)?r:null,t.endField=null!=(i=null==o?void 0:o.name)?i:null}else{var o,s
const n=e.get(t.startTimeField),r=e.get(t.endTimeField)
t.startTimeField=null!=(o=null==n?void 0:n.name)?o:null,t.endTimeField=null!=(s=null==r?void 0:r.name)?s:null}}const j=new Set
function v(t,e){return t&&e?(j.clear(),x(j,t,e),Array.from(j).sort()):[]}function x(t,e,n){var r
if(n)if(null!=e&&null!=(r=e.fields)&&r.length)if(n.includes("*"))for(const{name:n}of e.fields)t.add(n)
else for(const r of n)M(t,e,r)
else{if(n.includes("*"))return t.clear(),void t.add("*")
for(const e of n)null!=e&&t.add(e)}}function M(t,e,n){if("string"==typeof n)if(e){const r=e.get(n)
r&&t.add(r.name)}else t.add(n)}function _(t,e){var n
return Object(s.k)(e)||Object(s.k)(t)?[]:e.includes("*")?(null!=(n=t.fields)?n:[]).map(t=>t.name):e}async function w(t,e,n){var r
if(!n)return
const{arcadeUtils:i}=await Object(u.e)(),o=i.extractFieldNames(n,null==e||null==(r=e.fields)?void 0:r.map(t=>t.name))
for(const n of o)M(t,e,n)}async function S(t,e,r){if(r&&"1=1"!==r){const i=(await Promise.all([n.e(9),n.e(33),n.e(417)]).then(n.bind(null,1363))).WhereClause.create(r,e)
if(!i.isStandardized)throw new o.a("fieldUtils:collectFilterFields","Where clause is not standardized",{where:r})
x(t,e,i.fieldNames)}}function E({displayField:t,fields:e}){return t||(e&&e.length?A(e,"name-or-title")||A(e,"unique-identifier")||A(e,"type-or-category")||function(t){for(const e of t){if(!e||!e.name)continue
const t=e.name.toLowerCase()
if(t.includes("name")||t.includes("title"))return e.name}return null}(e):null)}function A(t,e){for(const n of t)if(n&&n.valueType&&n.valueType===e)return n.name
return null}async function R(t,e){var n
if(!e)return
const r=null==(n=e.elevationInfo)?void 0:n.featureExpressionInfo
return r?r.collectRequiredFields(t,e.fieldsIndex):void 0}async function P(t,e,n){if(!e||!n||!("fields"in n))return
const r=[],i=n.popupTemplate
r.push(async function(t,e,n){const r=[];(null==n?void 0:n.expressionInfos)&&r.push(...n.expressionInfos.map(n=>w(t,e.fieldsIndex,n.expression)))
const i=null==n?void 0:n.content
if(Array.isArray(i))for(const n of i)"expression"===n.type&&n.expressionInfo&&r.push(w(t,e.fieldsIndex,n.expressionInfo.expression))
await Promise.all(r)}(t,e,i)),n.fields&&r.push(...n.fields.map(async n=>function(t,e,n){n.onStatisticExpression?w(t,e,n.onStatisticExpression.expression):t.add(n.onStatisticField)}(t,e.fieldsIndex,n))),await Promise.all(r)}async function T(t,e,n){e&&(e.timeInfo&&Object(s.l)(n)&&n.timeExtent&&x(t,e.fieldsIndex,[e.timeInfo.startField,e.timeInfo.endField]),e.floorInfo&&x(t,e.fieldsIndex,[e.floorInfo.floorField]),Object(s.l)(n)&&Object(s.l)(n.where)&&await S(t,e.fieldsIndex,n.where))}async function I(t,e,n){e&&n&&await Promise.all(n.map(n=>async function(t,e,n){e&&n&&(n.valueExpression?await w(t,e.fieldsIndex,n.valueExpression):n.field&&M(t,e.fieldsIndex,n.field))}(t,e,n)))}function k(t){if(!t)return[]
const e="editFieldsInfo"in t&&t.editFieldsInfo
return e?v(t.fieldsIndex,[e&&e.creatorField,e&&e.creationDateField,e&&e.editorField,e&&e.editDateField]):[]}async function C(t,e){const{labelingInfo:n,fieldsIndex:r}=e
n&&n.length&&await Promise.all(n.map(e=>async function(t,e,n){if(!n)return
const r=n.getLabelExpression(),i=n.where
if("arcade"===r.type)await w(t,e,r.expression)
else{const n=r.expression.match(/{[^}]*}/g)
n&&n.forEach(n=>{M(t,e,n.slice(1,-1))})}await S(t,e,i)}(t,r,e)))}function N(t){const e=t.defaultValue
return void 0!==e&&W(t,e)?e:t.nullable?null:void 0}function D(t){return"number"==typeof t&&!isNaN(t)&&isFinite(t)}function q(t){return null===t||D(t)}const z="isInteger"in Number?Number.isInteger:t=>"number"==typeof t&&isFinite(t)&&Math.floor(t)===t
function G(t){return null===t||z(t)}function L(t){return null!=t&&"string"==typeof t}function U(t){return null===t||L(t)}function F(){return!0}function W(t,e){let n
switch(t.type){case"date":case"integer":case"long":case"small-integer":case"esriFieldTypeDate":case"esriFieldTypeInteger":case"esriFieldTypeLong":case"esriFieldTypeSmallInteger":n=t.nullable?G:z
break
case"double":case"single":case"esriFieldTypeSingle":case"esriFieldTypeDouble":n=t.nullable?q:D
break
case"string":case"esriFieldTypeString":n=t.nullable?U:L
break
default:n=F}return 1===arguments.length?n:n(e)}const B=["integer","small-integer","single","double"],J=new Set([...B,"esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"])
function V(t){return null!=t&&J.has(t.type)}function Z(t){return null!=t&&("string"===t.type||"esriFieldTypeString"===t.type)}function $(t){return null!=t&&("date"===t.type||"esriFieldTypeDate"===t.type)}var Y,H
function X(t){return null==t||"number"==typeof t&&isNaN(t)?null:t}function K(t,e){return null==t||t.nullable&&null===e?null:V(t)&&!function(t,e){const n="string"==typeof t?Q(t):t
if(!n)return!1
const r=n.min,i=n.max
return n.isInteger?z(e)&&e>=r&&e<=i:e>=r&&e<=i}(t.type,Number(e))?Y.OUT_OF_RANGE:W(t,e)?t.domain?function(t,e){switch(t.type){case"range":{const n="range"in t?t.range[0]:t.minValue,i="range"in t?t.range[1]:t.maxValue
if(null!=n&&+e<n||null!=i&&+e>i)return r.VALUE_OUT_OF_RANGE
break}case"coded-value":case"codedValue":if(null==t.codedValues||t.codedValues.every(t=>null==t||t.code!==e))return r.INVALID_CODED_VALUE}return null}(t.domain,e):null:H.INVALID_TYPE}function Q(t){switch(t){case"esriFieldTypeSmallInteger":case"small-integer":return tt
case"esriFieldTypeInteger":case"integer":return et
case"esriFieldTypeSingle":case"single":return nt
case"esriFieldTypeDouble":case"double":return rt}}!function(t){t.OUT_OF_RANGE="numeric-range-validation-error::out-of-range"}(Y||(Y={})),function(t){t.INVALID_TYPE="type-validation-error::invalid-type"}(H||(H={}))
const tt={min:-32768,max:32767,isInteger:!0},et={min:-2147483648,max:2147483647,isInteger:!0},nt={min:-34e37,max:12e37,isInteger:!1},rt={min:-Number.MAX_VALUE,max:Number.MAX_VALUE,isInteger:!1}
function it(t,e,n){switch(t){case r.INVALID_CODED_VALUE:return`Value ${n} is not in the coded domain - field: ${e.name}, domain: ${JSON.stringify(e.domain)}`
case r.VALUE_OUT_OF_RANGE:return`Value ${n} is out of the range of valid values - field: ${e.name}, domain: ${JSON.stringify(e.domain)}`
case H.INVALID_TYPE:return`Value ${n} is not a valid value for the field type - field: ${e.name}, type: ${e.type}, nullable: ${e.nullable}`
case Y.OUT_OF_RANGE:{const{min:t,max:r}=Q(e.type)
return`Value ${n} is out of range for the number type - field: ${e.name}, type: ${e.type}, value range is ${t} to ${r}`}}}function ot(t,e){return!st(t,e,null)}function st(t,e,n){if(!e||!e.attributes||!t){if(Object(s.l)(n))for(const e of null!=t?t:[])n.add(e)
return!0}const r=e.attributes
let i=!1
for(const e of t)if(!(e in r)){if(i=!0,!Object(s.l)(n))break
n.add(e)}return i}function at(t){return!!t&&["raster.itempixelvalue","raster.servicepixelvalue"].some(e=>t.toLowerCase().startsWith(e))}},991:function(t,e,n){"use strict"
n.d(e,"a",(function(){return E})),n.d(e,"b",(function(){return p})),n.d(e,"c",(function(){return w})),n.d(e,"d",(function(){return b})),n.d(e,"e",(function(){return _})),n.d(e,"f",(function(){return a})),n.d(e,"g",(function(){return v})),n.d(e,"h",(function(){return h})),n.d(e,"i",(function(){return y})),n.d(e,"j",(function(){return j})),n.d(e,"k",(function(){return S})),n.d(e,"l",(function(){return u})),n.d(e,"m",(function(){return f})),n.d(e,"n",(function(){return l})),n.d(e,"o",(function(){return s})),n.d(e,"p",(function(){return c})),n.d(e,"q",(function(){return d})),n.d(e,"r",(function(){return m})),n.d(e,"s",(function(){return M})),n(23)
var r=n(985),i=n(1012)
const o=new Float32Array(1)
function s(t){--t
for(let e=1;e<32;e<<=1)t|=t>>e
return t+1}function a(t,e,n){return Math.min(Math.max(t,e),n)}function u(t){return 0==(t&t-1)}function c(t){return t--,t|=t>>1,t|=t>>2,t|=t>>4,t|=t>>8,t|=t>>16,++t}function l(t){return 10**Math.ceil(Math.LOG10E*Math.log(t))}function f(t,e,n){return t+(e-t)*n}function h(t){return t*Math.PI/180}function d(t){return 180*t/Math.PI}function m(t,e=1e-6){return(t<0?-1:1)/Math.max(Math.abs(t),e)}function p(t){return Math.acos(a(t,-1,1))}function b(t){return Math.asin(a(t,-1,1))}function y(t,e,n=1e-6){return t===e||!(!Number.isFinite(t)||!Number.isFinite(e))&&(t>e?t-e:e-t)<=n}const g=new DataView(new ArrayBuffer(Float64Array.BYTES_PER_ELEMENT))
const O=BigInt("1000000")
function j(t,e,n=1e-6){if(t===e)return!0
if(!Number.isFinite(t)||!Number.isFinite(e))return!1
const r=Math.abs(t-e),i=Math.abs(t),o=Math.abs(e)
if(0===t||0===e||i<1e-12&&o<1e-12){if(r>.01*n)return!1}else if(r/(i+o)>n)return!1
return!0}function v(t){return x(Math.max(-E,Math.min(t,E)))}function x(t){return o[0]=t,o[0]}function M(t,e,n){const r=a((n-t)/(e-t),0,1)
return r*r*(3-2*r)}function _(t,e){const n=Object(r.u)(t),i=b(t[2]/n),o=Math.atan2(t[1]/n,t[0]/n)
return Object(r.B)(e,n,i,o),e}function w(t,e,n){return Object(i.l)(t,e[0],e[1],e[2],e[3]*n)}function S(t){const e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[3]*t[3]+t[4]*t[4]+t[5]*t[5],r=t[6]*t[6]+t[7]*t[7]+t[8]*t[8]
return!(y(e,1)&&y(n,1)&&y(r,1))}(function(t){const e=function(t){return g.setFloat64(0,t),g.getBigInt64(0)}(t=Math.abs(t)),n=function(t){return g.setBigInt64(0,t),g.getFloat64(0)}(e<=O?O:e-O)
Math.abs(t-n)})(1)
const E=x(34028234663852886e22)},992:function(t,e,n){"use strict"
n.d(e,"a",(function(){return j}))
var r,i=n(968),o=n(233),s=n(23),a=n(970),u=n(987),c=(n(445),n(977)),l=n(969),f=n(974),h=n(971),d=n(1004),m=n(769),p=n(988),b=n(774)
const y=[0,0]
function g(t){return t&&("esri.geometry.SpatialReference"===t.declaredClass||null!=t.wkid)}let O=r=class extends d.a{static copy(t,e){e._set("x",t._get("x")),e._set("y",t._get("y")),e._set("z",t._get("z")),e._set("m",t._get("m"))
const n=t._get("spatialReference")
e._set("spatialReference",Object.isFrozen(n)?n:n.clone())}constructor(...t){super(...t),this.x=0,this.y=0,this.z=void 0,this.m=void 0,this.type="point"}normalizeCtorArgs(t,e,n,r,i){let s
if(Array.isArray(t))s=t,i=e,t=s[0],e=s[1],n=s[2],r=s[3]
else if(t&&"object"==typeof t){if(s=t,t=null!=s.x?s.x:s.longitude,e=null!=s.y?s.y:s.latitude,n=s.z,r=s.m,(i=s.spatialReference)&&"esri.geometry.SpatialReference"!==i.declaredClass&&(i=new m.default(i)),null!=s.longitude||null!=s.latitude)if(null==s.longitude)o.a.getLogger(this.declaredClass).warn(".longitude=","Latitude was defined without longitude")
else if(null==s.latitude)o.a.getLogger(this.declaredClass).warn(".latitude=","Longitude was defined without latitude")
else if(!s.declaredClass&&i&&i.isWebMercator){const n=Object(b.lngLatToXY)(s.longitude,s.latitude,y)
t=n[0],e=n[1]}}else g(n)?(i=n,n=null):g(r)&&(i=r,r=null)
const a={x:t,y:e}
return null==a.x&&null!=a.y?o.a.getLogger(this.declaredClass).warn(".y=","Y coordinate was defined without an X coordinate"):null==a.y&&null!=a.x&&o.a.getLogger(this.declaredClass).warn(".x=","X coordinate was defined without a Y coordinate"),null!=i&&(a.spatialReference=i),null!=n&&(a.z=n),null!=r&&(a.m=r),a}get cache(){return this.commitProperty("x"),this.commitProperty("y"),this.commitProperty("z"),this.commitProperty("m"),this.commitProperty("spatialReference"),{}}get hasM(){return void 0!==this.m}set hasM(t){t!==(void 0!==this._get("m"))&&(this._set("m",t?0:void 0),this._set("hasM",t))}get hasZ(){return void 0!==this.z}set hasZ(t){t!==(void 0!==this._get("z"))&&(this._set("z",t?0:void 0),this._set("hasZ",t))}get latitude(){const{spatialReference:t,x:e,y:n}=this
if(t){if(t.isWebMercator)return Object(b.xyToLngLat)(e,n,y)[1]
if(t.isGeographic)return n}return null}set latitude(t){const{spatialReference:e,x:n}=this
null!=t&&e&&(e.isWebMercator?this._set("y",Object(b.lngLatToXY)(n,t,y)[1]):e.isGeographic&&this._set("y",t),this._set("latitude",t))}get longitude(){const{x:t,y:e,spatialReference:n}=this
if(n){if(n.isWebMercator)return Object(b.xyToLngLat)(t,e,y)[0]
if(n.isGeographic)return t}return null}set longitude(t){const{y:e,spatialReference:n}=this
null!=t&&n&&(n.isWebMercator?this._set("x",Object(b.lngLatToXY)(t,e,y)[0]):n.isGeographic&&this._set("x",t),this._set("longitude",t))}writeX(t,e,n){e[n]=isNaN(t)?"NaN":t}readX(t){return"string"==typeof t?NaN:t}clone(){const t=new r
return t.x=this.x,t.y=this.y,t.z=this.z,t.m=this.m,t.spatialReference=this.spatialReference,t}copy(t){return r.copy(t,this),this}equals(t){if(Object(s.k)(t))return!1
const{x:e,y:n,z:r,m:i,spatialReference:o}=this,{z:a,m:u}=t
let{x:c,y:l,spatialReference:f}=t
if(!o.equals(f))if(o.isWebMercator&&f.isWGS84)[c,l]=Object(b.lngLatToXY)(c,l),f=o
else{if(!o.isWGS84||!f.isWebMercator)return!1;[c,l]=Object(b.xyToLngLat)(c,l),f=o}return e===c&&n===l&&r===a&&i===u&&o.wkid===f.wkid}offset(t,e,n){var r
return this.x+=t,this.y+=e,null!=n&&(this.z=(null!=(r=this.z)?r:0)+n),this}normalize(){if(!this.spatialReference)return this
const t=Object(p.e)(this.spatialReference)
if(!t)return this
let e=this.x
const[n,r]=t.valid,i=2*r
let o
return e>r?(o=Math.ceil(Math.abs(e-r)/i),e-=o*i):e<n&&(o=Math.ceil(Math.abs(e-n)/i),e+=o*i),this._set("x",e),this}distance(t){return function(t,e){const n=t.x-e.x,r=t.y-e.y,i=t.hasZ&&e.hasZ?t.z-e.z:0
return Math.sqrt(n*n+r*r+i*i)}(this,t)}toArray(){const t=this.hasZ,e=this.hasM
return t&&e?[this.x,this.y,this.z,this.m]:t?[this.x,this.y,this.z]:e?[this.x,this.y,this.m]:[this.x,this.y]}toJSON(t){return this.write({},t)}}
Object(i.a)([Object(a.b)({readOnly:!0})],O.prototype,"cache",null),Object(i.a)([Object(a.b)({type:Boolean,json:{read:!1,write:{enabled:!1,overridePolicy:null}}})],O.prototype,"hasM",null),Object(i.a)([Object(a.b)({type:Boolean,json:{read:!1,write:{enabled:!1,overridePolicy:null}}})],O.prototype,"hasZ",null),Object(i.a)([Object(a.b)({type:Number})],O.prototype,"latitude",null),Object(i.a)([Object(a.b)({type:Number})],O.prototype,"longitude",null),Object(i.a)([Object(a.b)({type:Number,json:{type:[Number,String],write:{isRequired:!0,allowNull:!0}}}),Object(u.a)(t=>isNaN(t)?t:Object(h.i)(t))],O.prototype,"x",void 0),Object(i.a)([Object(f.a)("x")],O.prototype,"writeX",null),Object(i.a)([Object(c.a)("x")],O.prototype,"readX",null),Object(i.a)([Object(a.b)({type:Number,json:{write:!0}})],O.prototype,"y",void 0),Object(i.a)([Object(a.b)({type:Number,json:{write:{overridePolicy(){return{enabled:this.hasZ}}}}})],O.prototype,"z",void 0),Object(i.a)([Object(a.b)({type:Number,json:{write:{overridePolicy(){return{enabled:this.hasM}}}}})],O.prototype,"m",void 0),O=r=Object(i.a)([Object(l.a)("esri.geometry.Point")],O),O.prototype.toJSON.isDefaultToJSON=!0
const j=O},993:function(t,e,n){"use strict"
n.d(e,"a",(function(){return R}))
var r,i=n(968),o=n(1117),s=n(1002),a=n(234),u=n(23),c=n(1049),l=n(1114),f=n(1024),h=n(970),d=n(971),m=n(1082),p=n(969),b=n(1060),y=n(1087)
const g=new c.a(class{constructor(){this.target=null,this.cancellable=!1,this.defaultPrevented=!1,this.item=void 0,this.type=void 0}preventDefault(){this.cancellable&&(this.defaultPrevented=!0)}reset(t){this.defaultPrevented=!1,this.item=t}},void 0,t=>{t.item=null,t.target=null,t.defaultPrevented=!1,t.cancellable=!1}),O=()=>{}
function j(t){return t?t instanceof A?t.toArray():t.length?Array.prototype.slice.apply(t):[]:[]}function v(t){if(t&&t.length)return t[0]}function x(t,e,n,r){const i=Math.min(t.length-n,e.length-r)
let o=0
for(;o<i&&t[n+o]===e[r+o];)o++
return o}const M=new Set,_=new Set,w=new Set,S=new Map
let E=0,A=r=class extends s.a.EventedAccessor{static isCollection(t){return null!=t&&t instanceof r}constructor(t){super(t),this._chgListeners=[],this._notifications=null,this._timer=null,this._observable=new y.a,this.length=0,this._items=[],Object.defineProperty(this,"uid",{value:E++})}normalizeCtorArgs(t){return t?Array.isArray(t)||t instanceof r?{items:t}:t:{}}destroy(){this.removeAll()}*[Symbol.iterator](){yield*this.items}get items(){return Object(b.d)(this._observable),this._items}set items(t){this._emitBeforeChanges(l.a.ADD)||(this._splice(0,this.length,j(t)),this._emitAfterChanges(l.a.ADD))}hasEventListener(t){return"change"===t?this._chgListeners.length>0:this._emitter.hasEventListener(t)}on(t,e){if("change"===t){const t=this._chgListeners,n={removed:!1,callback:e}
return t.push(n),this._notifications&&this._notifications.push({listeners:t.slice(),items:this._items.slice(),changes:[]}),{remove(){this.remove=O,n.removed=!0,t.splice(t.indexOf(n),1)}}}return this._emitter.on(t,e)}once(t,e){const n=this.on(t,e)
return{remove(){n.remove()}}}add(t,e){if(Object(b.d)(this._observable),this._emitBeforeChanges(l.a.ADD))return this
const n=this.getNextIndex(null!=e?e:null)
return this._splice(n,0,[t]),this._emitAfterChanges(l.a.ADD),this}addMany(t,e=this._items.length){if(Object(b.d)(this._observable),!t||!t.length)return this
if(this._emitBeforeChanges(l.a.ADD))return this
const n=this.getNextIndex(e)
return this._splice(n,0,j(t)),this._emitAfterChanges(l.a.ADD),this}at(t){if(Object(b.d)(this._observable),(t=Math.trunc(t)||0)<0&&(t+=this.length),!(t<0||t>=this.length))return this._items[t]}removeAll(){if(Object(b.d)(this._observable),!this.length||this._emitBeforeChanges(l.a.REMOVE))return[]
const t=this._splice(0,this.length)||[]
return this._emitAfterChanges(l.a.REMOVE),t}clone(){return Object(b.d)(this._observable),this._createNewInstance({items:this._items.map(a.a)})}concat(...t){Object(b.d)(this._observable)
const e=t.map(j)
return this._createNewInstance({items:this._items.concat(...e)})}drain(t,e){if(Object(b.d)(this._observable),!this.length||this._emitBeforeChanges(l.a.REMOVE))return
const n=Object(u.d)(this._splice(0,this.length)),r=n.length
for(let i=0;i<r;i++)t.call(e,n[i],i,n)
this._emitAfterChanges(l.a.REMOVE)}every(t,e){return Object(b.d)(this._observable),this._items.every(t,e)}filter(t,e){let n
return Object(b.d)(this._observable),n=2===arguments.length?this._items.filter(t,e):this._items.filter(t),this._createNewInstance({items:n})}find(t,e){return Object(b.d)(this._observable),this._items.find(t,e)}findIndex(t,e){return Object(b.d)(this._observable),this._items.findIndex(t,e)}flatten(t,e){Object(b.d)(this._observable)
const n=[]
return function t(e,n,r,i){n&&n.forEach((n,o,s)=>{e.push(n),t(e,r.call(i,n,o,s),r,i)})}(n,this,t,e),new r(n)}forEach(t,e){return Object(b.d)(this._observable),this._items.forEach(t,e)}getItemAt(t){return Object(b.d)(this._observable),this._items[t]}getNextIndex(t){var e
Object(b.d)(this._observable)
const n=this.length
return(t=null!=(e=t)?e:n)<0?t=0:t>n&&(t=n),t}includes(t,e=0){return Object(b.d)(this._observable),this._items.includes(t,e)}indexOf(t,e=0){return Object(b.d)(this._observable),this._items.indexOf(t,e)}join(t=","){return Object(b.d)(this._observable),this._items.join(t)}lastIndexOf(t,e=this.length-1){return Object(b.d)(this._observable),this._items.lastIndexOf(t,e)}map(t,e){Object(b.d)(this._observable)
const n=this._items.map(t,e)
return new r({items:n})}reorder(t,e=this.length-1){Object(b.d)(this._observable)
const n=this.indexOf(t)
if(-1!==n){if(e<0?e=0:e>=this.length&&(e=this.length-1),n!==e){if(this._emitBeforeChanges(l.a.MOVE))return t
this._splice(n,1),this._splice(e,0,[t]),this._emitAfterChanges(l.a.MOVE)}return t}}pop(){if(Object(b.d)(this._observable),!this.length||this._emitBeforeChanges(l.a.REMOVE))return
const t=v(this._splice(this.length-1,1))
return this._emitAfterChanges(l.a.REMOVE),t}push(...t){return Object(b.d)(this._observable),this._emitBeforeChanges(l.a.ADD)||(this._splice(this.length,0,t),this._emitAfterChanges(l.a.ADD)),this.length}reduce(t,e){Object(b.d)(this._observable)
const n=this._items
return 2===arguments.length?n.reduce(t,e):n.reduce(t)}reduceRight(t,e){Object(b.d)(this._observable)
const n=this._items
return 2===arguments.length?n.reduceRight(t,e):n.reduceRight(t)}remove(t){return Object(b.d)(this._observable),this.removeAt(this.indexOf(t))}removeAt(t){if(Object(b.d)(this._observable),t<0||t>=this.length||this._emitBeforeChanges(l.a.REMOVE))return
const e=v(this._splice(t,1))
return this._emitAfterChanges(l.a.REMOVE),e}removeMany(t){if(Object(b.d)(this._observable),!t||!t.length||this._emitBeforeChanges(l.a.REMOVE))return[]
const e=t instanceof r?t.toArray():t,n=this._items,i=[],o=e.length
for(let t=0;t<o;t++){const r=e[t],o=n.indexOf(r)
if(o>-1){const r=1+x(e,n,t+1,o+1),s=this._splice(o,r)
s&&s.length>0&&i.push.apply(i,s),t+=r-1}}return this._emitAfterChanges(l.a.REMOVE),i}reverse(){if(Object(b.d)(this._observable),this._emitBeforeChanges(l.a.MOVE))return this
const t=this._splice(0,this.length)
return t&&(t.reverse(),this._splice(0,0,t)),this._emitAfterChanges(l.a.MOVE),this}shift(){if(Object(b.d)(this._observable),!this.length||this._emitBeforeChanges(l.a.REMOVE))return
const t=v(this._splice(0,1))
return this._emitAfterChanges(l.a.REMOVE),t}slice(t=0,e=this.length){return Object(b.d)(this._observable),this._createNewInstance({items:this._items.slice(t,e)})}some(t,e){return Object(b.d)(this._observable),this._items.some(t,e)}sort(t){if(Object(b.d)(this._observable),!this.length||this._emitBeforeChanges(l.a.MOVE))return this
const e=Object(u.d)(this._splice(0,this.length))
return arguments.length?e.sort(t):e.sort(),this._splice(0,0,e),this._emitAfterChanges(l.a.MOVE),this}splice(t,e,...n){Object(b.d)(this._observable)
const r=(e?l.a.REMOVE:0)|(n.length?l.a.ADD:0)
if(this._emitBeforeChanges(r))return[]
const i=this._splice(t,e,n)||[]
return this._emitAfterChanges(r),i}toArray(){return Object(b.d)(this._observable),this._items.slice()}toJSON(){return Object(b.d)(this._observable),this.toArray()}toLocaleString(){return Object(b.d)(this._observable),this._items.toLocaleString()}toString(){return Object(b.d)(this._observable),this._items.toString()}unshift(...t){return Object(b.d)(this._observable),!t.length||this._emitBeforeChanges(l.a.ADD)||(this._splice(0,0,t),this._emitAfterChanges(l.a.ADD)),this.length}_createNewInstance(t){return new this.constructor(t)}_splice(t,e,n){const r=this._items,i=this.itemType
let o,s
if(!this._notifications&&this.hasEventListener("change")&&(this._notifications=[{listeners:this._chgListeners.slice(),items:this._items.slice(),changes:[]}],this._timer&&this._timer.remove(),this._timer=Object(f.b)(()=>this._dispatchChange())),e){if(s=r.splice(t,e),this.hasEventListener("before-remove")){const e=g.acquire()
e.target=this,e.cancellable=!0
for(let n=0,i=s.length;n<i;n++)o=s[n],e.reset(o),this.emit("before-remove",e),e.defaultPrevented&&(s.splice(n,1),r.splice(t,0,o),t+=1,n-=1,i-=1)
g.release(e)}if(this.length=this._items.length,this.hasEventListener("after-remove")){const t=g.acquire()
t.target=this,t.cancellable=!1
const e=s.length
for(let n=0;n<e;n++)t.reset(s[n]),this.emit("after-remove",t)
g.release(t)}}if(n&&n.length){if(i){const t=[]
for(const e of n){const n=i.ensureType(e)
null==n&&null!=e||t.push(n)}n=t}const e=this.hasEventListener("before-add"),o=this.hasEventListener("after-add"),s=t===this.length
if(e||o){const i=g.acquire()
i.target=this,i.cancellable=!0
const a=g.acquire()
a.target=this,a.cancellable=!1
for(const u of n)e?(i.reset(u),this.emit("before-add",i),i.defaultPrevented||(s?r.push(u):r.splice(t++,0,u),this._set("length",r.length),o&&(a.reset(u),this.emit("after-add",a)))):(s?r.push(u):r.splice(t++,0,u),this._set("length",r.length),a.reset(u),this.emit("after-add",a))
g.release(a),g.release(i)}else{if(s)for(const t of n)r.push(t)
else r.splice(t,0,...n)
this._set("length",r.length)}}return(n&&n.length||s&&s.length)&&this._notifyChangeEvent(n,s),s}_emitBeforeChanges(t){let e=!1
if(this.hasEventListener("before-changes")){const n=g.acquire()
n.target=this,n.cancellable=!0,n.type=t,this.emit("before-changes",n),e=n.defaultPrevented,g.release(n)}return e}_emitAfterChanges(t){if(this.hasEventListener("after-changes")){const e=g.acquire()
e.target=this,e.cancellable=!1,e.type=t,this.emit("after-changes",e),g.release(e)}this._observable.notify()}_notifyChangeEvent(t,e){this.hasEventListener("change")&&this._notifications&&this._notifications[this._notifications.length-1].changes.push({added:t,removed:e})}_dispatchChange(){if(this._timer&&(this._timer.remove(),this._timer=null),!this._notifications)return
const t=this._notifications
this._notifications=null
for(const e of t){const t=e.changes
M.clear(),_.clear(),w.clear()
for(const{added:e,removed:n}of t){if(e)if(0===w.size&&0===_.size)for(const t of e)M.add(t)
else for(const t of e)_.has(t)?(w.add(t),_.delete(t)):w.has(t)||M.add(t)
if(n)if(0===w.size&&0===M.size)for(const t of n)_.add(t)
else for(const t of n)M.has(t)?M.delete(t):(w.delete(t),_.add(t))}const n=o.a.acquire()
M.forEach(t=>{n.push(t)})
const r=o.a.acquire()
_.forEach(t=>{r.push(t)})
const i=this._items,s=e.items,a=o.a.acquire()
if(w.forEach(t=>{s.indexOf(t)!==i.indexOf(t)&&a.push(t)}),e.listeners&&(n.length||r.length||a.length)){const t={target:this,added:n,removed:r,moved:a},i=e.listeners.length
for(let n=0;n<i;n++){const r=e.listeners[n]
r.removed||r.callback.call(this,t)}}o.a.release(n),o.a.release(r),o.a.release(a)}M.clear(),_.clear(),w.clear()}}
A.ofType=t=>{if(!t)return r
if(S.has(t))return S.get(t)
let e=null
if("function"==typeof t)e=t.prototype.declaredClass
else if(t.base)e=t.base.prototype.declaredClass
else for(const n in t.typeMap){const r=t.typeMap[n].prototype.declaredClass
e?e+=" | "+r:e=r}let n=class extends r{}
return Object(i.a)([Object(m.a)({Type:t,ensureType:"function"==typeof t?Object(d.m)(t):Object(d.k)(t)})],n.prototype,"itemType",void 0),n=Object(i.a)([Object(p.a)(`esri.core.Collection<${e}>`)],n),S.set(t,n),n},Object(i.a)([Object(h.b)()],A.prototype,"length",void 0),Object(i.a)([Object(h.b)()],A.prototype,"items",null),A=r=Object(i.a)([Object(p.a)("esri.core.Collection")],A)
const R=A},996:function(t,e,n){"use strict"
n.d(e,"a",(function(){return D})),n.d(e,"b",(function(){return N})),n.d(e,"c",(function(){return p})),n.d(e,"d",(function(){return g})),n.d(e,"e",(function(){return O})),n.d(e,"f",(function(){return a})),n.d(e,"g",(function(){return E})),n.d(e,"h",(function(){return j})),n.d(e,"i",(function(){return M})),n.d(e,"j",(function(){return w})),n.d(e,"k",(function(){return _})),n.d(e,"l",(function(){return u})),n.d(e,"m",(function(){return s})),n.d(e,"n",(function(){return R})),n.d(e,"o",(function(){return T})),n.d(e,"p",(function(){return C})),n.d(e,"q",(function(){return d})),n.d(e,"r",(function(){return h})),n.d(e,"s",(function(){return m})),n.d(e,"t",(function(){return l})),n.d(e,"u",(function(){return c})),n.d(e,"v",(function(){return y})),n.d(e,"w",(function(){return A})),n.d(e,"x",(function(){return S})),n.d(e,"y",(function(){return x})),n.d(e,"z",(function(){return v})),n.d(e,"A",(function(){return k})),n.d(e,"B",(function(){return P})),n.d(e,"C",(function(){return f})),n.d(e,"D",(function(){return b}))
n(235)
var r=n(991),i=n(23),o=n(770)
function s(t=q){return[t[0],t[1],t[2],t[3]]}function a(t){return[t[0],t[1],t[2],t[3]]}function u(t,e){return t!==e&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3]),t}function c(t,e,n,r,i=s()){return i[0]=t,i[1]=e,i[2]=n,i[3]=r,i}function l(t,e=s()){return e[0]=t.xmin,e[1]=t.ymin,e[2]=t.xmax,e[3]=t.ymax,e}function f(t,e){return new o.default({xmin:t[0],ymin:t[1],xmax:t[2],ymax:t[3],spatialReference:e})}function h(t,e){e[0]<t[0]&&(t[0]=e[0]),e[0]>t[2]&&(t[2]=e[0]),e[1]<t[1]&&(t[1]=e[1]),e[1]>t[3]&&(t[3]=e[1])}function d(t,e,n){if(Object(i.k)(e))u(n,t)
else if("length"in e)I(e)?(n[0]=Math.min(t[0],e[0]),n[1]=Math.min(t[1],e[1]),n[2]=Math.max(t[2],e[2]),n[3]=Math.max(t[3],e[3])):2!==e.length&&3!==e.length||(n[0]=Math.min(t[0],e[0]),n[1]=Math.min(t[1],e[1]),n[2]=Math.max(t[2],e[0]),n[3]=Math.max(t[3],e[1]))
else switch(e.type){case"extent":n[0]=Math.min(t[0],e.xmin),n[1]=Math.min(t[1],e.ymin),n[2]=Math.max(t[2],e.xmax),n[3]=Math.max(t[3],e.ymax)
break
case"point":n[0]=Math.min(t[0],e.x),n[1]=Math.min(t[1],e.y),n[2]=Math.max(t[2],e.x),n[3]=Math.max(t[3],e.y)}}function m(t,e,n=t){const r=e.length
let i=t[0],o=t[1],s=t[2],a=t[3]
for(let t=0;t<r;t++){const n=e[t]
i=Math.min(i,n[0]),o=Math.min(o,n[1]),s=Math.max(s,n[0]),a=Math.max(a,n[1])}return n[0]=i,n[1]=o,n[2]=s,n[3]=a,n}function p(t){for(let e=0;e<4;e++)if(!isFinite(t[e]))return!1
return!0}function b(t){return Object(i.k)(t)||t[0]>=t[2]?0:t[2]-t[0]}function y(t){return t[1]>=t[3]?0:t[3]-t[1]}function g(t){return b(t)*y(t)}function O(t,e=[0,0]){return e[0]=(t[0]+t[2])/2,e[1]=(t[1]+t[3])/2,e}function j(t,e){return _(t,e[0],e[1])}function v(t,e){const n=e[3],r=.5*(t[0]+t[2]),i=Math.abs(e[0]-r),o=.5*(t[2]-t[0])
if(i>n+o)return!1
const s=.5*(t[1]+t[3]),a=.5*(t[3]-t[1]),u=Math.abs(e[1]-s)
if(u>n+a)return!1
if(i<o||u<a)return!0
const c=i-o,l=u-a
return c*c+l*l<=n*n}function x(t,e,n){const r=t[0],i=t[1],o=t[2],s=t[3],{x:a,y:u}=e,{x:c,y:l}=n,f=(t,e)=>(l-u)*t+(a-c)*e+(c*u-a*l)<0,h=f(r,s),d=f(o,s),m=f(o,i),p=f(r,i)
return!(h===d&&d===m&&m===p&&p===h||a<r&&c<r||a>o&&c>o||u>s&&l>s||u<i&&l<i)}function M(t,e){return _(t,e.x,e.y)}function _(t,e,n){return e>=t[0]&&n>=t[1]&&e<=t[2]&&n<=t[3]}function w(t,e,n){return e[0]>=t[0]-n&&e[1]>=t[1]-n&&e[0]<=t[2]+n&&e[1]<=t[3]+n}function S(t,e){return Math.max(e[0],t[0])<=Math.min(e[2],t[2])&&Math.max(e[1],t[1])<=Math.min(e[3],t[3])}function E(t,e){return e[0]>=t[0]&&e[2]<=t[2]&&e[1]>=t[1]&&e[3]<=t[3]}function A(t,e,n){if(Object(i.k)(e))return u(n,t)
const o=e[0],s=e[1],a=e[2],c=e[3]
return n[0]=Object(r.f)(t[0],o,a),n[1]=Object(r.f)(t[1],s,c),n[2]=Object(r.f)(t[2],o,a),n[3]=Object(r.f)(t[3],s,c),n}function R(t,e){const n=(t[0]+t[2])/2,r=(t[1]+t[3])/2,i=Math.max(Math.abs(e[0]-n)-b(t)/2,0),o=Math.max(Math.abs(e[1]-r)-y(t)/2,0)
return Math.sqrt(i*i+o*o)}function P(t,e,n,r=t){return r[0]=t[0]+e,r[1]=t[1]+n,r[2]=t[2]+e,r[3]=t[3]+n,r}function T(t){return t?u(t,D):s(D)}function I(t){return null!=t&&4===t.length}function k(t){return!(0!==b(t)&&isFinite(t[0])||0!==y(t)&&isFinite(t[1]))}function C(t,e){return I(t)&&I(e)?t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]:t===e}const N=[-1/0,-1/0,1/0,1/0],D=[1/0,1/0,-1/0,-1/0],q=[0,0,0,0]},997:function(t,e,n){"use strict"
n.d(e,"a",(function(){return H})),n.d(e,"b",(function(){return B})),n.d(e,"c",(function(){return $})),n.d(e,"d",(function(){return M})),n.d(e,"e",(function(){return w})),n.d(e,"f",(function(){return Z})),n.d(e,"g",(function(){return z})),n.d(e,"h",(function(){return D})),n.d(e,"i",(function(){return U})),n.d(e,"j",(function(){return q})),n.d(e,"k",(function(){return c})),n.d(e,"l",(function(){return _})),n.d(e,"m",(function(){return C})),n.d(e,"n",(function(){return F})),n.d(e,"o",(function(){return Y})),n.d(e,"p",(function(){return k})),n.d(e,"q",(function(){return P})),n.d(e,"r",(function(){return T})),n.d(e,"s",(function(){return S})),n.d(e,"t",(function(){return I})),n.d(e,"u",(function(){return A})),n.d(e,"v",(function(){return R})),n.d(e,"w",(function(){return E})),n.d(e,"x",(function(){return N})),n.d(e,"y",(function(){return x})),n.d(e,"z",(function(){return W})),n(235)
var r=n(976),i=n(23),o=n(1089),s=n(1052),a=n(988),u=n(1188)
const c=39.37,l=s.a.radius*Math.PI/200,f=/UNIT\[([^\]]+)\]\]$/i,h=u.a,d=/UNIT\[([^\]]+)\]/i,m=new Set([4261,4305,4807,4810,4811,4812,4816,4819,4821,4901,4902,37225,104139,104140]),p=Object(r.b)()({meter:"meters",foot:"feet",foot_us:"us-feet",foot_clarke:"clarke-feet",yard_clarke:"clarke-yards",link_clarke:"clarke-links",yard_sears:"sears-yards",foot_sears:"sears-feet",chain_sears:"sears-chains",chain_benoit_1895_b:"benoit-1895-b-chains",yard_indian:"indian-yards",yard_indian_1937:"indian-1937-yards",foot_gold_coast:"gold-coast-feet",chain_sears_1922_truncated:"sears-1922-truncated-chains","50_kilometers":"50-kilometers","150_kilometers":"150-kilometers"}),b=t=>t*t,y=t=>t*t*t,g={length:{baseUnit:"meters",units:{millimeters:{inBaseUnits:.001},centimeters:{inBaseUnits:.01},decimeters:{inBaseUnits:.1},meters:{inBaseUnits:1},kilometers:{inBaseUnits:1e3},inches:{inBaseUnits:.0254},feet:{inBaseUnits:.3048},yards:{inBaseUnits:.9144},miles:{inBaseUnits:1609.344},"nautical-miles":{inBaseUnits:1852},"us-feet":{inBaseUnits:1200/3937}}},area:{baseUnit:"square-meters",units:{"square-millimeters":{inBaseUnits:b(.001)},"square-centimeters":{inBaseUnits:b(.01)},"square-decimeters":{inBaseUnits:b(.1)},"square-meters":{inBaseUnits:1},"square-kilometers":{inBaseUnits:b(1e3)},"square-inches":{inBaseUnits:b(.0254)},"square-feet":{inBaseUnits:b(.3048)},"square-yards":{inBaseUnits:b(.9144)},"square-miles":{inBaseUnits:b(1609.344)},"square-us-feet":{inBaseUnits:b(1200/3937)},acres:{inBaseUnits:.0015625*b(1609.344)},ares:{inBaseUnits:100},hectares:{inBaseUnits:1e4}}},volume:{baseUnit:"liters",units:{liters:{inBaseUnits:1},"cubic-millimeters":{inBaseUnits:1e3*y(.001)},"cubic-centimeters":{inBaseUnits:1e3*y(.01)},"cubic-decimeters":{inBaseUnits:1e3*y(.1)},"cubic-meters":{inBaseUnits:1e3},"cubic-kilometers":{inBaseUnits:1e3*y(1e3)},"cubic-inches":{inBaseUnits:1e3*y(.0254)},"cubic-feet":{inBaseUnits:1e3*y(.3048)},"cubic-yards":{inBaseUnits:1e3*y(.9144)},"cubic-miles":{inBaseUnits:1e3*y(1609.344)}}},angle:{baseUnit:"radians",units:{radians:{inBaseUnits:1},degrees:{inBaseUnits:Math.PI/180}}}},O=(()=>{const t={}
for(const e in g)for(const n in g[e].units)t[n]=e
return t})(),j=["metric","imperial","inches","feet","yards","miles","nautical-miles","us-feet","meters","kilometers"],v=new Map([["meters","square-meters"],["feet","square-feet"],["us-feet","square-us-feet"]])
function x(t){const e=O[t]
if(!e)throw new Error("unknown type")
return e}function M(t){return function(t){return g[t].baseUnit}(x(t))}function _(t,e=null){return e=e||x(t),g[e].baseUnit===t}function w(t,e,n){if(e===n)return t
const r=x(e)
if(r!==x(n))throw new Error("incompatible units")
const i=_(e,r)?t:function(t,e,n){return t*g[n].units[e].inBaseUnits}(t,e,r)
return _(n,r)?i:function(t,e,n){return t/g[n].units[e].inBaseUnits}(i,n,r)}function S(t,e,n){switch(n){case"metric":return A(t,e)
case"imperial":return P(t,e)
default:return n}}function E(t,e,n){switch(n){case"metric":return R(t,e)
case"imperial":return T(t,e)
default:return n}}function A(t,e){const n=w(t,e,"meters")
return Math.abs(n)<3e3?"meters":"kilometers"}function R(t,e){const n=w(t,e,"meters")
return Math.abs(n)<1e5?"meters":"kilometers"}function P(t,e){const n=w(t,e,"feet")
return Math.abs(n)<1e3?"feet":"miles"}function T(t,e){const n=w(t,e,"feet")
return Math.abs(n)<1e5?"feet":"miles"}function I(t,e){const n=w(t,e,"square-meters")
return Math.abs(n)<3e6?"square-meters":"square-kilometers"}function k(t,e){const n=w(t,e,"square-feet")
return Math.abs(n)<1e6?"square-feet":"square-miles"}function C(t,e,n){return w(t,e,"meters")/(n*Math.PI/180)}function N(t){return p.fromJSON(t.toLowerCase())||null}function D(t){if(Object(i.l)(t)&&!Object(a.g)(t))return 1
const e=z(t)
return e>1e5?1:e}function q(t){return z(t)>=Object(o.e)(t).metersPerDegree?"meters":U(t)}function z(t,e=s.a.metersPerDegree){return Object(i.v)(function(t,e=!1){const n=Object(i.l)(t)?t.wkid:null,r=Object(i.l)(t)?t.wkt:null
let o=null
if(n){if(Object(a.n)(n))return s.b.metersPerDegree
if(Object(a.o)(n))return s.c.metersPerDegree
o=h.values[h[n]],!o&&e&&m.has(n)&&(o=l)}else r&&(V(r)?o=G(f.exec(r),o):J(r)&&(o=G(d.exec(r),o)))
return o}(t,!0),e)}function G(t,e){return t&&t[1]?L(t[1]):e}function L(t){return parseFloat(t.split(",")[1])}function U(t){const e=Object(i.l)(t)?t.wkid:null,n=Object(i.l)(t)?t.wkt:null
let r=null
if(e)r=h.units[h[e]]
else if(n){const t=V(n)?f:J(n)?d:null
if(t){const e=t.exec(n)
e&&e[1]&&(r=function(t){const e=/[\\"\\']{1}([^\\"\\']+)/.exec(t)
let n=e&&e[1]
if(!n||!h.units.includes(n)){const e=L(t)
n=null
const r=h.values
for(let t=0;t<r.length;++t)if(Math.abs(e-r[t])<1e-7){n=h.units[t]
break}}return n}(e[1]))}}return Object(i.l)(r)?N(r):null}function F(t){const e=U(t)
return Object(i.k)(e)||!j.includes(e)?null:e}function W(t){const e=q(t)
return Object(i.k)(e)||!j.includes(e)?null:e}function B(t){const e=U(t)
return Object(i.k)(e)?null:v.get(e)}function J(t){return/^GEOCCS/i.test(t)}function V(t){return/^PROJCS/i.test(t)}function Z(t){const e=U(t)
if(Object(i.k)(e))return null
switch(e){case"feet":case"us-feet":case"clarke-feet":case"clarke-yards":case"clarke-links":case"sears-yards":case"sears-feet":case"sears-chains":case"benoit-1895-b-chains":case"indian-yards":case"indian-1937-yards":case"gold-coast-feet":case"sears-1922-truncated-chains":return"imperial"
case"50-kilometers":case"150-kilometers":case"meters":return"metric"}return null}const $=Object(r.b)()({esriAcres:"acres",esriAres:"ares",esriHectares:"hectares",esriSquareCentimeters:"square-centimeters",esriSquareDecimeters:"square-decimeters",esriSquareFeet:"square-feet",esriSquareInches:"square-inches",esriSquareKilometers:"square-kilometers",esriSquareMeters:"square-meters",esriSquareMiles:"square-miles",esriSquareMillimeters:"square-millimeters",esriSquareUsFeet:"square-us-feet",esriSquareYards:"square-yards"}),Y=Object(r.b)()({esriCentimeters:"centimeters",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriYards:"yards"}),H=Object(r.b)()({esriDUDecimalDegrees:"degrees",esriDURadians:"radians"})}}])
