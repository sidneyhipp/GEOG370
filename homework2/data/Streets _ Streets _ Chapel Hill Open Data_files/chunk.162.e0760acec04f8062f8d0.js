(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[162,16,24,40,87,461],{1001:function(e,t,r){"use strict"
r.d(t,"a",(function(){return p}))
var n=r(968),i=r(976),s=r(972),o=r(970),a=(r(971),r(445),r(969)),l=r(1113)
const c=new i.a({simple:"simple",uniqueValue:"unique-value",classBreaks:"class-breaks",heatmap:"heatmap",dotDensity:"dot-density",dictionary:"dictionary",pieChart:"pie-chart"},{ignoreUnknown:!0})
let u=class extends s.a{constructor(e){super(e),this.authoringInfo=null,this.type=null}async getRequiredFields(e){if(!this.collectRequiredFields)return[]
const t=new Set
return await this.collectRequiredFields(t,e),Array.from(t).sort()}getSymbol(e,t){}async getSymbolAsync(e,t){}getSymbols(){return[]}getAttributeHash(){return JSON.stringify(this)}getMeshHash(){return JSON.stringify(this)}}
Object(n.a)([Object(o.b)({type:l.a,json:{write:!0}})],u.prototype,"authoringInfo",void 0),Object(n.a)([Object(o.b)({type:c.apiValues,readOnly:!0,json:{type:c.jsonValues,read:!1,write:{writer:c.write,ignoreOrigin:!0}}})],u.prototype,"type",void 0),u=Object(n.a)([Object(a.a)("esri.renderers.Renderer")],u)
const p=u},1009:function(e,t,r){"use strict"
r.d(t,"a",(function(){return f}))
var n,i=r(968),s=r(972),o=r(23),a=r(1059),l=r(970),c=(r(971),r(445),r(977)),u=r(969),p=r(974)
let d=n=class extends s.a{static get allTime(){return h}static get empty(){return b}constructor(e){super(e),this.end=null,this.start=null}readEnd(e,t){return null!=t.end?new Date(t.end):null}writeEnd(e,t){t.end=e?e.getTime():null}get isAllTime(){return this.equals(n.allTime)}get isEmpty(){return this.equals(n.empty)}readStart(e,t){return null!=t.start?new Date(t.start):null}writeStart(e,t){t.start=e?e.getTime():null}clone(){return new n({end:this.end,start:this.start})}equals(e){if(!e)return!1
const t=Object(o.l)(this.start)?this.start.getTime():this.start,r=Object(o.l)(this.end)?this.end.getTime():this.end,n=Object(o.l)(e.start)?e.start.getTime():e.start,i=Object(o.l)(e.end)?e.end.getTime():e.end
return t===n&&r===i}expandTo(e){if(this.isEmpty||this.isAllTime)return this.clone()
const t=Object(o.b)(this.start,t=>Object(a.c)(t,e)),r=Object(o.b)(this.end,t=>{const r=Object(a.c)(t,e)
return t.getTime()===r.getTime()?r:Object(a.b)(r,1,e)})
return new n({start:t,end:r})}intersection(e){if(!e)return this.clone()
if(this.isEmpty||e.isEmpty)return n.empty
if(this.isAllTime)return e.clone()
if(e.isAllTime)return this.clone()
const t=Object(o.n)(this.start,-1/0,e=>e.getTime()),r=Object(o.n)(this.end,1/0,e=>e.getTime()),i=Object(o.n)(e.start,-1/0,e=>e.getTime()),s=Object(o.n)(e.end,1/0,e=>e.getTime())
let a,l
if(i>=t&&i<=r?a=i:t>=i&&t<=s&&(a=t),r>=i&&r<=s?l=r:s>=t&&s<=r&&(l=s),null!=a&&null!=l&&!isNaN(a)&&!isNaN(l)){const e=new n
return e.start=a===-1/0?null:new Date(a),e.end=l===1/0?null:new Date(l),e}return n.empty}offset(e,t){if(this.isEmpty||this.isAllTime)return this.clone()
const r=new n,{start:i,end:s}=this
return Object(o.l)(i)&&(r.start=Object(a.b)(i,e,t)),Object(o.l)(s)&&(r.end=Object(a.b)(s,e,t)),r}union(e){if(!e||e.isEmpty)return this.clone()
if(this.isEmpty)return e.clone()
if(this.isAllTime||e.isAllTime)return h.clone()
const t=Object(o.l)(this.start)&&Object(o.l)(e.start)?new Date(Math.min(this.start.getTime(),e.start.getTime())):null,r=Object(o.l)(this.end)&&Object(o.l)(e.end)?new Date(Math.max(this.end.getTime(),e.end.getTime())):null
return new n({start:t,end:r})}}
Object(i.a)([Object(l.b)({type:Date,json:{write:{allowNull:!0}}})],d.prototype,"end",void 0),Object(i.a)([Object(c.a)("end")],d.prototype,"readEnd",null),Object(i.a)([Object(p.a)("end")],d.prototype,"writeEnd",null),Object(i.a)([Object(l.b)({readOnly:!0,json:{read:!1}})],d.prototype,"isAllTime",null),Object(i.a)([Object(l.b)({readOnly:!0,json:{read:!1}})],d.prototype,"isEmpty",null),Object(i.a)([Object(l.b)({type:Date,json:{write:{allowNull:!0}}})],d.prototype,"start",void 0),Object(i.a)([Object(c.a)("start")],d.prototype,"readStart",null),Object(i.a)([Object(p.a)("start")],d.prototype,"writeStart",null),d=n=Object(i.a)([Object(u.a)("esri.TimeExtent")],d)
const h=new d,b=new d({start:void 0,end:void 0}),f=d},1010:function(e,t,r){"use strict"
r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return u})),r.d(t,"d",(function(){return p})),r.d(t,"e",(function(){return c})),r(982)
var n=r(446),i=r(233),s=r(23),o=r(769)
const a=i.a.getLogger("esri.support.arcadeOnDemand")
let l
function c(){return l||(l=(async()=>{const e=await Promise.all([r.e(2),r.e(33),r.e(52),r.e(226)]).then(r.bind(null,1319))
return{arcade:e.arcade,arcadeUtils:e,Dictionary:e.Dictionary,Feature:e.arcadeFeature}})()),l}const u=(e,t,r)=>h.create(e,t,r,null,["$feature"]),p=(e,t,r)=>h.create(e,t,r,null,["$feature","$view"]),d=(e,t,r,n)=>h.create(e,t,r,n,["$feature","$view"])
class h{constructor(e,t,r,n,i,s,o){this.script=e,this.evaluate=n
const a=Array.isArray(s)?s:s.fields
this.fields=a,this._syntaxTree=r,this._arcade=t,this._arcadeFeature=i,this._spatialReference=o,this._referencesGeometry=t.scriptTouchesGeometry(this._syntaxTree),this._referencesScale=this._arcade.referencesMember(this._syntaxTree,"scale")}static async create(e,t,r,i,l,u){const{arcade:p,Feature:d,Dictionary:b}=await c(),f=o.default.fromJSON(t)
let y
try{y=p.parseScript(e,u)}catch(t){return a.error(new n.a("arcade-bad-expression","Failed to parse arcade script",{script:e,error:t})),null}const m=l.reduce((e,t)=>({...e,[t]:null}),{})
let g=null
Object(s.l)(i)&&(g=new b(i),g.immutable=!0,m.$config=null)
const O=p.scriptUsesGeometryEngine(y),j=O&&p.enableGeometrySupport(),v=p.scriptUsesFeatureSet(y)&&p.enableFeatureSetSupport(),w=p.scriptIsAsync(y),S=w&&p.enableAsyncSupport(),x={vars:m,spatialReference:f,useAsync:!!S}
await Promise.all([j,v,S])
const _=new Set
await p.loadDependentModules(_,y,null,w,O)
const I=new b
I.immutable=!1,I.setField("scale",0)
const T=p.compileScript(y,x)
return new h(e,p,y,e=>("$view"in e&&e.$view&&(I.setField("scale","object"==typeof e.$view?e.$view.scale:void 0),e.$view=I),g&&(e.$config=g),T({vars:e,spatialReference:f})),new d,r,f)}repurposeFeature(e){return e.geometry&&!e.geometry.spatialReference&&(e.geometry.spatialReference=this._spatialReference),this._arcadeFeature.repurposeFromGraphicLikeObject(e.geometry,e.attributes,{fields:this.fields}),this._arcadeFeature}referencesGeometry(){return this._referencesGeometry}referencesScale(){return this._referencesScale}}},1011:function(e,t,r){"use strict"
function n(){return[0,0,0,0]}function i(e){return[e[0],e[1],e[2],e[3]]}function s(e,t,r,n){return[e,t,r,n]}function o(e){const t=[0,0,0,0],r=Math.min(4,e.length)
for(let n=0;n<r;++n)t[n]=e[n]
return t}function a(e,t){return new Float64Array(e,t,4)}function l(){return s(1,1,1,1)}function c(){return s(1,0,0,0)}function u(){return s(0,1,0,0)}function p(){return s(0,0,1,0)}function d(){return s(0,0,0,1)}r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return h})),r.d(t,"c",(function(){return a})),r.d(t,"d",(function(){return o})),r.d(t,"e",(function(){return n})),r.d(t,"f",(function(){return i})),r.d(t,"g",(function(){return s}))
const h=[0,0,0,0],b=l(),f=c(),y=u(),m=p(),g=d()
Object.freeze(Object.defineProperty({__proto__:null,ONES:b,UNIT_W:g,UNIT_X:f,UNIT_Y:y,UNIT_Z:m,ZEROS:h,clone:i,create:n,createView:a,fromArray:o,fromValues:s,ones:l,unitW:d,unitX:c,unitY:u,unitZ:p,zeros:function(){return[0,0,0,0]}},Symbol.toStringTag,{value:"Module"}))},1012:function(e,t,r){"use strict"
r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return i})),r.d(t,"d",(function(){return y})),r.d(t,"e",(function(){return h})),r.d(t,"f",(function(){return b})),r.d(t,"g",(function(){return O})),r.d(t,"h",(function(){return j})),r.d(t,"i",(function(){return d})),r.d(t,"j",(function(){return m})),r.d(t,"k",(function(){return f})),r.d(t,"l",(function(){return s})),r.d(t,"m",(function(){return g})),r.d(t,"n",(function(){return M}))
var n=r(1016)
function i(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function s(e,t,r,n,i){return e[0]=t,e[1]=r,e[2]=n,e[3]=i,e}function o(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e[3]=t[3]+r[3],e}function a(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e[3]=t[3]-r[3],e}function l(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e[3]=t[3]*r[3],e}function c(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e[3]=t[3]/r[3],e}function u(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e}function p(e,t){const r=t[0]-e[0],n=t[1]-e[1],i=t[2]-e[2],s=t[3]-e[3]
return Math.sqrt(r*r+n*n+i*i+s*s)}function d(e,t){const r=t[0]-e[0],n=t[1]-e[1],i=t[2]-e[2],s=t[3]-e[3]
return r*r+n*n+i*i+s*s}function h(e){const t=e[0],r=e[1],n=e[2],i=e[3]
return Math.sqrt(t*t+r*r+n*n+i*i)}function b(e){const t=e[0],r=e[1],n=e[2],i=e[3]
return t*t+r*r+n*n+i*i}function f(e,t){const r=t[0],n=t[1],i=t[2],s=t[3]
let o=r*r+n*n+i*i+s*s
return o>0&&(o=1/Math.sqrt(o),e[0]=r*o,e[1]=n*o,e[2]=i*o,e[3]=s*o),e}function y(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]}function m(e,t,r,n){const i=t[0],s=t[1],o=t[2],a=t[3]
return e[0]=i+n*(r[0]-i),e[1]=s+n*(r[1]-s),e[2]=o+n*(r[2]-o),e[3]=a+n*(r[3]-a),e}function g(e,t,r){const n=t[0],i=t[1],s=t[2],o=t[3]
return e[0]=r[0]*n+r[4]*i+r[8]*s+r[12]*o,e[1]=r[1]*n+r[5]*i+r[9]*s+r[13]*o,e[2]=r[2]*n+r[6]*i+r[10]*s+r[14]*o,e[3]=r[3]*n+r[7]*i+r[11]*s+r[15]*o,e}function O(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]}function j(e,t){const r=e[0],i=e[1],s=e[2],o=e[3],a=t[0],l=t[1],c=t[2],u=t[3],p=Object(n.c)()
return Math.abs(r-a)<=p*Math.max(1,Math.abs(r),Math.abs(a))&&Math.abs(i-l)<=p*Math.max(1,Math.abs(i),Math.abs(l))&&Math.abs(s-c)<=p*Math.max(1,Math.abs(s),Math.abs(c))&&Math.abs(o-u)<=p*Math.max(1,Math.abs(o),Math.abs(u))}const v=a,w=l,S=c,x=p,_=d,I=h,T=b,M=Object.freeze(Object.defineProperty({__proto__:null,add:o,ceil:function(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e[3]=Math.ceil(t[3]),e},copy:i,dist:x,distance:p,div:S,divide:c,dot:y,equals:j,exactEquals:O,floor:function(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e[3]=Math.floor(t[3]),e},inverse:function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e[3]=1/t[3],e},len:I,length:h,lerp:m,max:function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e[3]=Math.max(t[3],r[3]),e},min:function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e[3]=Math.min(t[3],r[3]),e},mul:w,multiply:l,negate:function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e},normalize:f,random:function(e,t){const r=n.a
let i,s,o,a,l,c
t=t||1
do{i=2*r()-1,s=2*r()-1,l=i*i+s*s}while(l>=1)
do{o=2*r()-1,a=2*r()-1,c=o*o+a*a}while(c>=1)
const u=Math.sqrt((1-l)/c)
return e[0]=t*i,e[1]=t*s,e[2]=t*o*u,e[3]=t*a*u,e},round:function(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e[3]=Math.round(t[3]),e},scale:u,scaleAndAdd:function(e,t,r,n){return e[0]=t[0]+r[0]*n,e[1]=t[1]+r[1]*n,e[2]=t[2]+r[2]*n,e[3]=t[3]+r[3]*n,e},set:s,sqrDist:_,sqrLen:T,squaredDistance:d,squaredLength:b,str:function(e){return"vec4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},sub:v,subtract:a,transformMat4:g,transformQuat:function(e,t,r){const n=t[0],i=t[1],s=t[2],o=r[0],a=r[1],l=r[2],c=r[3],u=c*n+a*s-l*i,p=c*i+l*n-o*s,d=c*s+o*i-a*n,h=-o*n-a*i-l*s
return e[0]=u*c+h*-o+p*-l-d*-a,e[1]=p*c+h*-a+d*-o-u*-l,e[2]=d*c+h*-l+u*-a-p*-o,e[3]=t[3],e}},Symbol.toStringTag,{value:"Module"}))},1014:function(e,t,r){"use strict"
r.d(t,"a",(function(){return T}))
var n,i=r(968),s=r(982),o=r(1009),a=r(976),l=r(972),c=r(234),u=r(23),p=r(970),d=r(987),h=r(979),b=r(969),f=r(974),y=r(971),m=r(983),g=r(1106),O=r(1273),j=r(1197),v=r(1123),w=r(769),S=r(992)
const x=new a.a({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),_=new a.a({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"})
let I=n=class extends l.a{static from(e){return Object(y.d)(n,e)}constructor(e){super(e),this.aggregateIds=null,this.cacheHint=void 0,this.compactGeometryEnabled=!1,this.datumTransformation=null,this.defaultSpatialReferenceEnabled=!1,this.distance=void 0,this.dynamicDataSource=void 0,this.formatOf3DObjects=null,this.fullText=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=void 0,this.groupByFieldsForStatistics=null,this.having=null,this.historicMoment=null,this.maxAllowableOffset=void 0,this.maxRecordCountFactor=1,this.multipatchOption=null,this.num=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.outStatistics=null,this.parameterValues=null,this.pixelSize=null,this.quantizationParameters=null,this.rangeValues=null,this.relationParameter=null,this.resultType=null,this.returnCentroid=!1,this.returnDistinctValues=!1,this.returnExceededLimitFeatures=!0,this.returnGeometry=!1,this.returnQueryGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.sourceSpatialReference=null,this.spatialRelationship="intersects",this.start=void 0,this.sqlFormat=null,this.text=null,this.timeExtent=null,this.timeReferenceUnknownClient=!1,this.units=null,this.where=null}castDatumTransformation(e){return"number"==typeof e||"object"==typeof e?e:null}writeHistoricMoment(e,t){t.historicMoment=e&&e.getTime()}writeParameterValues(e,t){if(e){const r={}
for(const t in e){const n=e[t]
Array.isArray(n)?r[t]=n.map(e=>e instanceof Date?e.getTime():e):n instanceof Date?r[t]=n.getTime():r[t]=n}t.parameterValues=r}}writeStart(e,t){t.resultOffset=this.start,t.resultRecordCount=this.num||10,t.where="1=1"}writeWhere(e,t){t.where=e||"1=1"}clone(){return new n(Object(c.a)({aggregateIds:this.aggregateIds,cacheHint:this.cacheHint,compactGeometryEnabled:this.compactGeometryEnabled,datumTransformation:this.datumTransformation,defaultSpatialReferenceEnabled:this.defaultSpatialReferenceEnabled,distance:this.distance,fullText:this.fullText,gdbVersion:this.gdbVersion,geometry:this.geometry,geometryPrecision:this.geometryPrecision,groupByFieldsForStatistics:this.groupByFieldsForStatistics,having:this.having,historicMoment:Object(u.l)(this.historicMoment)?new Date(this.historicMoment.getTime()):null,maxAllowableOffset:this.maxAllowableOffset,maxRecordCountFactor:this.maxRecordCountFactor,multipatchOption:this.multipatchOption,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,outStatistics:this.outStatistics,parameterValues:this.parameterValues,pixelSize:this.pixelSize,quantizationParameters:this.quantizationParameters,rangeValues:this.rangeValues,relationParameter:this.relationParameter,resultType:this.resultType,returnDistinctValues:this.returnDistinctValues,returnGeometry:this.returnGeometry,returnCentroid:this.returnCentroid,returnExceededLimitFeatures:this.returnExceededLimitFeatures,returnQueryGeometry:this.returnQueryGeometry,returnM:this.returnM,returnZ:this.returnZ,dynamicDataSource:this.dynamicDataSource,sourceSpatialReference:this.sourceSpatialReference,spatialRelationship:this.spatialRelationship,start:this.start,sqlFormat:this.sqlFormat,text:this.text,timeExtent:this.timeExtent,timeReferenceUnknownClient:this.timeReferenceUnknownClient,units:this.units,where:this.where}))}}
I.MAX_MAX_RECORD_COUNT_FACTOR=5,Object(i.a)([Object(p.b)({json:{write:!0}})],I.prototype,"aggregateIds",void 0),Object(i.a)([Object(p.b)({type:Boolean,json:{write:!0}})],I.prototype,"cacheHint",void 0),Object(i.a)([Object(p.b)({type:Boolean,json:{default:!1,write:!0}})],I.prototype,"compactGeometryEnabled",void 0),Object(i.a)([Object(p.b)({json:{write:!0}})],I.prototype,"datumTransformation",void 0),Object(i.a)([Object(d.a)("datumTransformation")],I.prototype,"castDatumTransformation",null),Object(i.a)([Object(p.b)({type:Boolean,json:{default:!1,write:!0}})],I.prototype,"defaultSpatialReferenceEnabled",void 0),Object(i.a)([Object(p.b)({type:Number,json:{write:{overridePolicy:e=>({enabled:e>0})}}})],I.prototype,"distance",void 0),Object(i.a)([Object(p.b)({type:g.a,json:{write:!0}})],I.prototype,"dynamicDataSource",void 0),Object(i.a)([Object(p.b)({type:String,json:{write:!0}})],I.prototype,"formatOf3DObjects",void 0),Object(i.a)([Object(p.b)({type:[O.a],json:{write:{enabled:!0,overridePolicy(){return{enabled:Object(u.l)(this.fullText)&&this.fullText.length>0}}}}})],I.prototype,"fullText",void 0),Object(i.a)([Object(p.b)({type:String,json:{write:!0}})],I.prototype,"gdbVersion",void 0),Object(i.a)([Object(p.b)({types:s.c,json:{read:m.a,write:!0}})],I.prototype,"geometry",void 0),Object(i.a)([Object(p.b)({type:Number,json:{write:!0}})],I.prototype,"geometryPrecision",void 0),Object(i.a)([Object(p.b)({type:[String],json:{write:!0}})],I.prototype,"groupByFieldsForStatistics",void 0),Object(i.a)([Object(p.b)({type:String,json:{write:!0}})],I.prototype,"having",void 0),Object(i.a)([Object(p.b)({type:Date})],I.prototype,"historicMoment",void 0),Object(i.a)([Object(f.a)("historicMoment")],I.prototype,"writeHistoricMoment",null),Object(i.a)([Object(p.b)({type:Number,json:{write:!0}})],I.prototype,"maxAllowableOffset",void 0),Object(i.a)([Object(p.b)({type:Number,cast:e=>e<1?1:e>n.MAX_MAX_RECORD_COUNT_FACTOR?n.MAX_MAX_RECORD_COUNT_FACTOR:e,json:{write:{overridePolicy:e=>({enabled:e>1})}}})],I.prototype,"maxRecordCountFactor",void 0),Object(i.a)([Object(p.b)({type:["xyFootprint"],json:{write:!0}})],I.prototype,"multipatchOption",void 0),Object(i.a)([Object(p.b)({type:Number,json:{read:{source:"resultRecordCount"}}})],I.prototype,"num",void 0),Object(i.a)([Object(p.b)({json:{write:!0}})],I.prototype,"objectIds",void 0),Object(i.a)([Object(p.b)({type:[String],json:{write:!0}})],I.prototype,"orderByFields",void 0),Object(i.a)([Object(p.b)({type:[String],json:{write:!0}})],I.prototype,"outFields",void 0),Object(i.a)([Object(p.b)({type:w.default,json:{name:"outSR",write:!0}})],I.prototype,"outSpatialReference",void 0),Object(i.a)([Object(p.b)({type:[v.a],json:{write:{enabled:!0,overridePolicy(){return{enabled:Object(u.l)(this.outStatistics)&&this.outStatistics.length>0}}}}})],I.prototype,"outStatistics",void 0),Object(i.a)([Object(p.b)({json:{write:!0}})],I.prototype,"parameterValues",void 0),Object(i.a)([Object(f.a)("parameterValues")],I.prototype,"writeParameterValues",null),Object(i.a)([Object(p.b)({type:S.a,json:{write:!0}})],I.prototype,"pixelSize",void 0),Object(i.a)([Object(p.b)({type:j.a,json:{write:!0}})],I.prototype,"quantizationParameters",void 0),Object(i.a)([Object(p.b)({type:[Object],json:{write:!0}})],I.prototype,"rangeValues",void 0),Object(i.a)([Object(p.b)({type:String,json:{read:{source:"relationParam"},write:{target:"relationParam",overridePolicy(){return{enabled:"relation"===this.spatialRelationship}}}}})],I.prototype,"relationParameter",void 0),Object(i.a)([Object(p.b)({type:String,json:{write:!0}})],I.prototype,"resultType",void 0),Object(i.a)([Object(p.b)({type:Boolean,json:{default:!1,write:!0}})],I.prototype,"returnCentroid",void 0),Object(i.a)([Object(p.b)({type:Boolean,json:{default:!1,write:!0}})],I.prototype,"returnDistinctValues",void 0),Object(i.a)([Object(p.b)({type:Boolean,json:{default:!0,write:!0}})],I.prototype,"returnExceededLimitFeatures",void 0),Object(i.a)([Object(p.b)({type:Boolean,json:{write:!0}})],I.prototype,"returnGeometry",void 0),Object(i.a)([Object(p.b)({type:Boolean,json:{default:!1,write:!0}})],I.prototype,"returnQueryGeometry",void 0),Object(i.a)([Object(p.b)({type:Boolean,json:{default:!1,write:!0}})],I.prototype,"returnM",void 0),Object(i.a)([Object(p.b)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],I.prototype,"returnZ",void 0),Object(i.a)([Object(p.b)({type:w.default,json:{write:!0}})],I.prototype,"sourceSpatialReference",void 0),Object(i.a)([Object(h.a)(x,{ignoreUnknown:!1,name:"spatialRel"})],I.prototype,"spatialRelationship",void 0),Object(i.a)([Object(p.b)({type:Number,json:{read:{source:"resultOffset"}}})],I.prototype,"start",void 0),Object(i.a)([Object(f.a)("start"),Object(f.a)("num")],I.prototype,"writeStart",null),Object(i.a)([Object(p.b)({type:String,json:{write:!0}})],I.prototype,"sqlFormat",void 0),Object(i.a)([Object(p.b)({type:String,json:{write:!0}})],I.prototype,"text",void 0),Object(i.a)([Object(p.b)({type:o.a,json:{write:!0}})],I.prototype,"timeExtent",void 0),Object(i.a)([Object(p.b)({type:Boolean,json:{default:!1,write:!0}})],I.prototype,"timeReferenceUnknownClient",void 0),Object(i.a)([Object(h.a)(_,{ignoreUnknown:!1}),Object(p.b)({json:{write:{overridePolicy(e){return{enabled:!!e&&null!=this.distance&&this.distance>0}}}}})],I.prototype,"units",void 0),Object(i.a)([Object(p.b)({type:String,json:{write:{overridePolicy(e){return{enabled:null!=e||null!=this.start&&this.start>0}}}}})],I.prototype,"where",void 0),Object(i.a)([Object(f.a)("where")],I.prototype,"writeWhere",null),I=n=Object(i.a)([Object(b.a)("esri.rest.support.Query")],I)
const T=I},1016:function(e,t,r){"use strict"
r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return i})),r.d(t,"d",(function(){return l}))
let n=1e-6
function i(){return n}const s=Math.random,o=Math.PI/180,a=180/Math.PI
function l(e){return e*o}function c(e){return e*a}Object.freeze(Object.defineProperty({__proto__:null,RANDOM:s,equals:function(e,t){return Math.abs(e-t)<=n*Math.max(1,Math.abs(e),Math.abs(t))},getEpsilon:i,setEpsilon:function(e){n=e},toDegree:c,toRadian:l},Symbol.toStringTag,{value:"Module"}))},1019:function(e,t,r){"use strict"
r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return u}))
var n=r(110),i=r(771),s=r(446),o=r(233),a=r(374)
const l=o.a.getLogger("esri.assets")
function c(e,t){return Object(i.default)(u(e),t)}function u(e){if(!n.default.assetsPath)throw l.errorOnce("The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50"),new s.a("assets:path-not-set","config.assetsPath is not set")
return Object(a.E)(n.default.assetsPath,e)}},1020:function(e,t,r){"use strict"
r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return u}))
var n=r(995),i=r(1045),s=r(1147),o=r(1394),a=r(1218)
const l={types:n.i,json:{write:{writer:s.b},origins:{"web-scene":{types:n.j,write:{writer:s.b},read:{reader:Object(i.b)({types:n.j})}}}}},c={types:{base:o.a,key:"type",typeMap:{"simple-fill":n.e.typeMap["simple-fill"],"picture-fill":n.e.typeMap["picture-fill"],"polygon-3d":n.e.typeMap["polygon-3d"]}},json:{write:{writer:s.b},origins:{"web-scene":{type:a.a,write:{writer:s.b}}}}},u={cast:e=>null==e||"string"==typeof e||"number"==typeof e?e:""+e,json:{type:String,write:{writer:(e,t)=>{t.value=null==e?void 0:e.toString()}}}}},1025:function(e,t,r){"use strict"
r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return c}))
var n=r(968),i=r(975),s=r(1007),o=r(970),a=r(969),l=r(1138)
const c=e=>{let t=class extends e{destroy(){var e,t
this.destroyed||(null!=(e=this._get("handles"))&&e.destroy(),null==(t=this._get("updatingHandles"))||t.destroy())}get handles(){return this._get("handles")||new s.a}get updatingHandles(){return this._get("updatingHandles")||new l.a}}
return Object(n.a)([Object(o.b)({readOnly:!0})],t.prototype,"handles",null),Object(n.a)([Object(o.b)({readOnly:!0})],t.prototype,"updatingHandles",null),t=Object(n.a)([Object(a.a)("esri.core.HandleOwner")],t),t}
let u=class extends(c(i.a)){}
u=Object(n.a)([Object(a.a)("esri.core.HandleOwner")],u)},1032:function(e,t,r){"use strict"
r.d(t,"a",(function(){return C}))
var n,i=r(968),s=r(23),o=r(970),a=r(971),l=(r(445),r(977)),c=r(969),u=r(974),p=r(989),d=r(1240),h=r(1040),b=r(1210)
let f=n=class extends h.a{constructor(e){super(e),this.type="color",this.normalizationField=null}get cache(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:null}}set stops(e){e&&Array.isArray(e)&&(e=e.filter(e=>!!e)).sort((e,t)=>e.value-t.value),this._set("stops",e)}clone(){return new n({field:this.field,normalizationField:this.normalizationField,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,stops:this.stops&&this.stops.map(e=>e.clone()),legendOptions:this.legendOptions&&this.legendOptions.clone()})}getAttributeHash(){return`${super.getAttributeHash()}-${this.normalizationField}`}_interpolateData(){return this.stops&&this.stops.map(e=>e.value||0)}}
Object(i.a)([Object(o.b)({readOnly:!0})],f.prototype,"cache",null),Object(i.a)([Object(o.b)({type:["color"],json:{type:["colorInfo"]}})],f.prototype,"type",void 0),Object(i.a)([Object(o.b)({type:String,json:{write:!0}})],f.prototype,"normalizationField",void 0),Object(i.a)([Object(o.b)({type:[b.a],json:{write:!0}})],f.prototype,"stops",null),f=n=Object(i.a)([Object(c.a)("esri.renderers.visualVariables.ColorVariable")],f)
const y=f
var m,g=r(972),O=r(1119)
let j=m=class extends g.a{constructor(e){super(e),this.label=null,this.opacity=null,this.value=null}readOpacity(e,t){return Object(O.b)(t.transparency)}writeOpacity(e,t,r){t[r]=Object(O.a)(e)}clone(){return new m({label:this.label,opacity:this.opacity,value:this.value})}}
Object(i.a)([Object(o.b)({type:String,json:{write:!0}})],j.prototype,"label",void 0),Object(i.a)([Object(o.b)({type:Number,json:{type:a.a,write:{target:"transparency"}}})],j.prototype,"opacity",void 0),Object(i.a)([Object(l.a)("opacity",["transparency"])],j.prototype,"readOpacity",null),Object(i.a)([Object(u.a)("opacity")],j.prototype,"writeOpacity",null),Object(i.a)([Object(o.b)({type:Number,json:{write:!0}})],j.prototype,"value",void 0),j=m=Object(i.a)([Object(c.a)("esri.renderers.visualVariables.support.OpacityStop")],j)
const v=j
var w
let S=w=class extends h.a{constructor(e){super(e),this.type="opacity",this.normalizationField=null}get cache(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:null}}set stops(e){e&&Array.isArray(e)&&(e=e.filter(e=>!!e)).sort((e,t)=>e.value-t.value),this._set("stops",e)}clone(){return new w({field:this.field,normalizationField:this.normalizationField,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,stops:this.stops&&this.stops.map(e=>e.clone()),legendOptions:this.legendOptions&&this.legendOptions.clone()})}getAttributeHash(){return`${super.getAttributeHash()}-${this.normalizationField}`}_interpolateData(){return this.stops&&this.stops.map(e=>e.value||0)}}
Object(i.a)([Object(o.b)({readOnly:!0})],S.prototype,"cache",null),Object(i.a)([Object(o.b)({type:["opacity"],json:{type:["transparencyInfo"]}})],S.prototype,"type",void 0),Object(i.a)([Object(o.b)({type:String,json:{write:!0}})],S.prototype,"normalizationField",void 0),Object(i.a)([Object(o.b)({type:[v],json:{write:!0}})],S.prototype,"stops",null),S=w=Object(i.a)([Object(c.a)("esri.renderers.visualVariables.OpacityVariable")],S)
const x=S
var _=r(1169),I=r(1070),T=r(975),M=r(976),F=r(233),E=r(1044)
const V={color:y,size:I.a,opacity:x,rotation:_.a},L=new M.a({colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation",sizeInfo:"size"}),k=/^\[([^\]]+)\]$/i
let A=class extends T.a{constructor(){super(...arguments),this.colorVariables=null,this.opacityVariables=null,this.rotationVariables=null,this.sizeVariables=null}set visualVariables(e){if(this._resetVariables(),(e=e&&e.filter(e=>!!e))&&e.length){for(const t of e)switch(t.type){case"color":this.colorVariables.push(t)
break
case"opacity":this.opacityVariables.push(t)
break
case"rotation":this.rotationVariables.push(t)
break
case"size":this.sizeVariables.push(t)}this.sizeVariables.length&&this.sizeVariables.some(e=>!!e.target)&&e.sort((e,t)=>{let r=null
return r=e.target===t.target?0:e.target?1:-1,r})
for(let t=0;t<e.length;t++)e[t].index=t
this._set("visualVariables",e)}else this._set("visualVariables",e)}readVariables(e,t,r){const{rotationExpression:n,rotationType:i}=t,s=n&&n.match(k),o=s&&s[1]
if(o&&(e||(e=[]),e.push({type:"rotationInfo",rotationType:i,field:o})),e)return e.map(e=>{const t=L.read(e.type),n=V[t]
n||(F.a.getLogger(this.declaredClass).warn("Unknown variable type: "+t),r&&r.messages&&r.messages.push(new E.a("visual-variable:unsupported",`visualVariable of type '${t}' is not supported`,{definition:e,context:r})))
const i=new n
return i.read(e,r),i})}writeVariables(e,t){const r=[]
for(const n of e){const e=n.toJSON(t)
e&&r.push(e)}return r}_resetVariables(){this.colorVariables=[],this.opacityVariables=[],this.rotationVariables=[],this.sizeVariables=[]}}
Object(i.a)([Object(o.b)()],A.prototype,"visualVariables",null),A=Object(i.a)([Object(c.a)("esri.renderers.visualVariables.VisualVariableFactory")],A)
const D=A,R={base:h.a,key:"type",typeMap:{opacity:x,color:y,rotation:_.a,size:I.a}},C=e=>{let t=class extends e{constructor(){super(...arguments),this._vvFactory=new D}set visualVariables(e){this._vvFactory.visualVariables=e,this._set("visualVariables",this._vvFactory.visualVariables)}readVisualVariables(e,t,r){return this._vvFactory.readVariables(e,t,r)}writeVisualVariables(e,t,r,n){t[r]=this._vvFactory.writeVariables(e,n)}get arcadeRequiredForVisualVariables(){if(!this.visualVariables)return!1
for(const e of this.visualVariables)if(e.arcadeRequired)return!0
return!1}hasVisualVariables(e,t){return e?this.getVisualVariablesForType(e,t).length>0:this.getVisualVariablesForType("size",t).length>0||this.getVisualVariablesForType("color",t).length>0||this.getVisualVariablesForType("opacity",t).length>0||this.getVisualVariablesForType("rotation",t).length>0}getVisualVariablesForType(e,t){const r=this.visualVariables
return r?r.filter(r=>r.type===e&&("string"==typeof t?r.target===t:!1!==t||!r.target)):[]}async collectVVRequiredFields(e,t){let r=[]
this.visualVariables&&(r=r.concat(this.visualVariables))
for(const n of r)n&&(n.field&&Object(p.d)(e,t,n.field),n.normalizationField&&Object(p.d)(e,t,n.normalizationField),n.valueExpression&&(P(n.valueExpression,e,t)||await Object(p.a)(e,t,n.valueExpression)))}}
return Object(i.a)([Object(o.b)({types:[R],value:null,json:{write:!0}})],t.prototype,"visualVariables",null),Object(i.a)([Object(l.a)("visualVariables",["visualVariables","rotationType","rotationExpression"])],t.prototype,"readVisualVariables",null),Object(i.a)([Object(u.a)("visualVariables")],t.prototype,"writeVisualVariables",null),t=Object(i.a)([Object(c.a)("esri.renderers.mixins.VisualVariablesMixin")],t),t}
function P(e,t,r){const n=Object(d.a)(e)
return!!Object(s.l)(n)&&(Object(p.d)(t,r,n),!0)}},1033:function(e,t,r){"use strict"
r.d(t,"a",(function(){return p}))
var n=r(968),i=r(976),s=r(972),o=r(970),a=(r(971),r(445),r(979)),l=r(969)
const c=new i.a({inherited:"inherited",codedValue:"coded-value",range:"range"})
let u=class extends s.a{constructor(e){super(e),this.name=null,this.type=null}}
Object(n.a)([Object(o.b)({type:String,json:{write:!0}})],u.prototype,"name",void 0),Object(n.a)([Object(a.a)(c)],u.prototype,"type",void 0),u=Object(n.a)([Object(l.a)("esri.layers.support.Domain")],u)
const p=u},1034:function(e,t,r){"use strict"
r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return y})),r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return u})),r.d(t,"e",(function(){return h})),r.d(t,"f",(function(){return b}))
var n=r(968),i=r(975),s=r(23),o=r(973),a=r(970),l=(r(971),r(445),r(969))
function c(e,t,r){return Object(o.g)(e.map((e,n)=>t.apply(r,[e,n])))}async function u(e,t,r){return(await Object(o.g)(e.map((e,n)=>t.apply(r,[e,n])))).map(e=>e.value)}function p(e){return{ok:!0,value:e}}function d(e){return{ok:!1,error:e}}async function h(e){if(Object(s.k)(e))return{ok:!1,error:new Error("no promise provided")}
try{return p(await e)}catch(e){return d(e)}}async function b(e){try{return p(await e)}catch(e){return Object(o.p)(e),d(e)}}function f(e){if(!0===e.ok)return e.value
throw e.error}function y(e,t){return new m(e,t)}let m=class extends i.a{get value(){return e=this._result,Object(s.l)(e)&&!0===e.ok?e.value:null
var e}get error(){return e=this._result,Object(s.l)(e)&&!1===e.ok?e.error:null
var e}get finished(){return Object(s.l)(this._result)}constructor(e,t){super({}),this._result=null,this._abortHandle=null,this.abort=()=>{this._abortController=Object(s.a)(this._abortController)},this.remove=this.abort,this._abortController=new AbortController
const{signal:r}=this._abortController
this.promise=e(r),this.promise.then(e=>{this._result=p(e),this._cleanup()},e=>{this._result=d(e),this._cleanup()}),this._abortHandle=Object(o.n)(t,this.abort)}normalizeCtorArgs(){return{}}destroy(){this.abort()}_cleanup(){this._abortHandle=Object(s.s)(this._abortHandle),this._abortController=null}}
Object(n.a)([Object(a.b)()],m.prototype,"value",null),Object(n.a)([Object(a.b)()],m.prototype,"error",null),Object(n.a)([Object(a.b)()],m.prototype,"finished",null),Object(n.a)([Object(a.b)()],m.prototype,"promise",void 0),Object(n.a)([Object(a.b)()],m.prototype,"_result",void 0),m=Object(n.a)([Object(l.a)("esri.core.asyncUtils.ReactiveTask")],m)},1035:function(e,t,r){"use strict"
r.d(t,"a",(function(){return j})),r.d(t,"b",(function(){return f})),r.d(t,"c",(function(){return w})),r.d(t,"d",(function(){return d})),r.d(t,"e",(function(){return b})),r.d(t,"f",(function(){return _})),r.d(t,"g",(function(){return x})),r.d(t,"h",(function(){return S})),r.d(t,"i",(function(){return g})),r.d(t,"j",(function(){return O})),r.d(t,"k",(function(){return p})),r.d(t,"l",(function(){return y})),r.d(t,"m",(function(){return v})),r.d(t,"n",(function(){return u})),r.d(t,"o",(function(){return h}))
var n=r(1009),i=r(770),s=r(769),o=r(1054),a=r(778),l=r(1168),c=r(1119)
const u={type:Boolean,value:!0,json:{origins:{service:{read:!1,write:!1},"web-map":{read:!1,write:!1}},name:"screenSizePerspective",write:!0}},p={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:(e,t)=>!t.disablePopup},write:{enabled:!0,writer(e,t,r){t[r]=!e}}}},d={type:Boolean,value:!0,nonNullable:!0,json:{name:"showLabels",write:!0}},h={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:o.i}}},b={type:Boolean,value:!0,nonNullable:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:!0}},f={value:null,type:l.a,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:!0}}
function y(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}const m={write:!0,read:!0},g={type:Number,json:{origins:{"web-document":m,"portal-item":{write:!0}}}},O={...g,json:{...g.json,origins:{"web-document":{...m,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}}},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:(e,t,r)=>r&&"service"!==r.origin||!t.drawingInfo||void 0===t.drawingInfo.transparency?t.layerDefinition&&t.layerDefinition.drawingInfo&&void 0!==t.layerDefinition.drawingInfo.transparency?Object(c.b)(t.layerDefinition.drawingInfo.transparency):void 0:Object(c.b)(t.drawingInfo.transparency)}}},j={type:n.a,readOnly:!0,get(){var e,t
if(null==(e=this.layer)||!e.timeInfo)return null
const{datesInUnknownTimezone:r,timeOffset:n,useViewTime:i}=this.layer,s=null==(t=this.view)?void 0:t.timeExtent
let o=this.layer.timeExtent
r&&(o=Object(a.toLocalTimeExtent)(o))
let l=i?s&&o?s.intersection(o):s||o:o
if(!l||l.isEmpty||l.isAllTime)return l
n&&(l=l.offset(-n.value,n.unit)),r&&(l=Object(a.toUTCTimeExtent)(l))
const c=this._get("timeExtent")
return l.equals(c)?c:l}},v={type:i.default,readOnly:!0,json:{origins:{service:{read:{source:["fullExtent","spatialReference"],reader:(e,t)=>{const r=i.default.fromJSON(e)
return null!=t.spatialReference&&"object"==typeof t.spatialReference&&(r.spatialReference=s.default.fromJSON(t.spatialReference)),r}}}},read:!1}},w={type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}}}},S={type:Number,json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.minScale"},write:{target:"layerDefinition.minScale"}}},x={type:Number,json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.maxScale"},write:{target:"layerDefinition.maxScale"}}},_={json:{write:{ignoreOrigin:!0},origins:{"web-map":{read:!1,write:!1}}}}},1038:function(e,t,r){"use strict"
r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return c}))
var n=r(23),i=r(1005)
const s={ar:"ar-u-nu-latn"}
let o=new WeakMap,a={}
function l(e={}){const t={}
return null!=e.digitSeparator&&(t.useGrouping=e.digitSeparator),null!=e.places&&(t.minimumFractionDigits=t.maximumFractionDigits=e.places),t}function c(e,t){return-0===e&&(e=0),function(e){const t=e||a
if(!o.has(t)){const r=Object(i.b)(),n=s[Object(i.b)()]||r
o.set(t,new Intl.NumberFormat(n,e))}return Object(n.d)(o.get(t))}(t).format(e)}Object(i.a)(()=>{o=new WeakMap,a={}})},1039:function(e,t,r){"use strict"
r.d(t,"a",(function(){return y})),r.d(t,"b",(function(){return m}))
var n=r(976),i=r(1005)
const s={year:"numeric",month:"numeric",day:"numeric"},o={year:"numeric",month:"long",day:"numeric"},a={year:"numeric",month:"short",day:"numeric"},l={year:"numeric",month:"long",weekday:"long",day:"numeric"},c={hour:"numeric",minute:"numeric"},u={...c,second:"numeric"},p={"short-date":s,"short-date-short-time":{...s,...c},"short-date-short-time-24":{...s,...c,hour12:!1},"short-date-long-time":{...s,...u},"short-date-long-time-24":{...s,...u,hour12:!1},"short-date-le":s,"short-date-le-short-time":{...s,...c},"short-date-le-short-time-24":{...s,...c,hour12:!1},"short-date-le-long-time":{...s,...u},"short-date-le-long-time-24":{...s,...u,hour12:!1},"long-month-day-year":o,"long-month-day-year-short-time":{...o,...c},"long-month-day-year-short-time-24":{...o,...c,hour12:!1},"long-month-day-year-long-time":{...o,...u},"long-month-day-year-long-time-24":{...o,...u,hour12:!1},"day-short-month-year":a,"day-short-month-year-short-time":{...a,...c},"day-short-month-year-short-time-24":{...a,...c,hour12:!1},"day-short-month-year-long-time":{...a,...u},"day-short-month-year-long-time-24":{...a,...u,hour12:!1},"long-date":l,"long-date-short-time":{...l,...c},"long-date-short-time-24":{...l,...c,hour12:!1},"long-date-long-time":{...l,...u},"long-date-long-time-24":{...l,...u,hour12:!1},"long-month-year":{month:"long",year:"numeric"},"short-month-year":{month:"short",year:"numeric"},year:{year:"numeric"},"short-time":c,"long-time":u},d=Object(n.b)()({shortDate:"short-date",shortDateShortTime:"short-date-short-time",shortDateShortTime24:"short-date-short-time-24",shortDateLongTime:"short-date-long-time",shortDateLongTime24:"short-date-long-time-24",shortDateLE:"short-date-le",shortDateLEShortTime:"short-date-le-short-time",shortDateLEShortTime24:"short-date-le-short-time-24",shortDateLELongTime:"short-date-le-long-time",shortDateLELongTime24:"short-date-le-long-time-24",longMonthDayYear:"long-month-day-year",longMonthDayYearShortTime:"long-month-day-year-short-time",longMonthDayYearShortTime24:"long-month-day-year-short-time-24",longMonthDayYearLongTime:"long-month-day-year-long-time",longMonthDayYearLongTime24:"long-month-day-year-long-time-24",dayShortMonthYear:"day-short-month-year",dayShortMonthYearShortTime:"day-short-month-year-short-time",dayShortMonthYearShortTime24:"day-short-month-year-short-time-24",dayShortMonthYearLongTime:"day-short-month-year-long-time",dayShortMonthYearLongTime24:"day-short-month-year-long-time-24",longDate:"long-date",longDateShortTime:"long-date-short-time",longDateShortTime24:"long-date-short-time-24",longDateLongTime:"long-date-long-time",longDateLongTime24:"long-date-long-time-24",longMonthYear:"long-month-year",shortMonthYear:"short-month-year",year:"year"}),h=(d.apiValues,d.toJSON.bind(d),d.fromJSON.bind(d),{ar:"ar-u-nu-latn-ca-gregory"})
let b=new WeakMap,f=p["short-date-short-time"]
function y(e){return e?p[e]:null}function m(e,t){return function(e){const t=e||f
let r=b.get(t)
if(!r){const e=Object(i.b)(),n=h[Object(i.b)()]||e
r=new Intl.DateTimeFormat(n,t),b.set(t,r)}return r}(t).format(e)}Object(i.a)(()=>{b=new WeakMap,f=p["short-date-short-time"]})},1040:function(e,t,r){"use strict"
r.d(t,"a",(function(){return b}))
var n=r(968),i=r(976),s=r(972),o=r(233),a=r(970),l=r(987),c=r(969),u=r(971),p=r(1159)
const d=new i.a({colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation",sizeInfo:"size"})
let h=class extends s.a{constructor(e){super(e),this.index=null,this.type=null,this.field=null,this.valueExpression=null,this.valueExpressionTitle=null,this.legendOptions=null}castField(e){return null==e?e:"function"==typeof e?(o.a.getLogger(this.declaredClass).error(".field: field must be a string value"),null):Object(u.l)(e)}get arcadeRequired(){return!!this.valueExpression}clone(){}getAttributeHash(){return`${this.type}-${this.field}-${this.valueExpression}`}}
Object(n.a)([Object(a.b)()],h.prototype,"index",void 0),Object(n.a)([Object(a.b)({type:d.apiValues,readOnly:!0,json:{read:d.read,write:d.write}})],h.prototype,"type",void 0),Object(n.a)([Object(a.b)({type:String,json:{write:!0}})],h.prototype,"field",void 0),Object(n.a)([Object(l.a)("field")],h.prototype,"castField",null),Object(n.a)([Object(a.b)({type:String,json:{write:!0}})],h.prototype,"valueExpression",void 0),Object(n.a)([Object(a.b)({type:String,json:{write:!0}})],h.prototype,"valueExpressionTitle",void 0),Object(n.a)([Object(a.b)({readOnly:!0})],h.prototype,"arcadeRequired",null),Object(n.a)([Object(a.b)({type:p.a,json:{write:!0}})],h.prototype,"legendOptions",void 0),h=Object(n.a)([Object(c.a)("esri.renderers.visualVariables.VisualVariable")],h)
const b=h},1041:function(e,t,r){"use strict"
r.d(t,"a",(function(){return q})),r.d(t,"b",(function(){return N})),r.d(t,"c",(function(){return z})),r.d(t,"d",(function(){return b})),r.d(t,"e",(function(){return O})),r.d(t,"f",(function(){return w})),r.d(t,"g",(function(){return v})),r.d(t,"h",(function(){return o})),r.d(t,"i",(function(){return y})),r.d(t,"j",(function(){return g})),r.d(t,"k",(function(){return V})),r.d(t,"l",(function(){return C})),r.d(t,"m",(function(){return c})),r.d(t,"n",(function(){return d})),r.d(t,"o",(function(){return h})),r.d(t,"p",(function(){return u})),r.d(t,"q",(function(){return p})),r.d(t,"r",(function(){return k})),r.d(t,"s",(function(){return A})),r.d(t,"t",(function(){return a})),r.d(t,"u",(function(){return T})),r.d(t,"v",(function(){return m})),r.d(t,"w",(function(){return S})),r.d(t,"x",(function(){return x})),r.d(t,"y",(function(){return D})),r.d(t,"z",(function(){return R})),r.d(t,"A",(function(){return _})),r.d(t,"B",(function(){return I})),r.d(t,"C",(function(){return E})),r.d(t,"D",(function(){return F})),r.d(t,"E",(function(){return M})),r.d(t,"F",(function(){return j})),r.d(t,"G",(function(){return l})),r.d(t,"H",(function(){return L})),r.d(t,"I",(function(){return f})),r.d(t,"J",(function(){return P}))
var n=r(23),i=r(770),s=r(996)
function o(e=z){return[e[0],e[1],e[2],e[3],e[4],e[5]]}function a(e,t,r,n,i,s,a=o()){return a[0]=e,a[1]=t,a[2]=r,a[3]=n,a[4]=i,a[5]=s,a}function l(e,t){const r=isFinite(e[2])||isFinite(e[5])
return new i.default(r?{xmin:e[0],xmax:e[3],ymin:e[1],ymax:e[4],zmin:e[2],zmax:e[5],spatialReference:t}:{xmin:e[0],xmax:e[3],ymin:e[1],ymax:e[4],spatialReference:t})}function c(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.min(e[2],t[2]),e[3]=Math.max(e[3],t[3]),e[4]=Math.max(e[4],t[4]),e[5]=Math.max(e[5],t[5])}function u(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[3]=Math.max(e[3],t[2]),e[4]=Math.max(e[4],t[3])}function p(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.min(e[2],t[2]),e[3]=Math.max(e[3],t[0]),e[4]=Math.max(e[4],t[1]),e[5]=Math.max(e[5],t[2])}function d(e,t,r=0,n=t.length/3){let i=e[0],s=e[1],o=e[2],a=e[3],l=e[4],c=e[5]
for(let e=0;e<n;e++)i=Math.min(i,t[r+3*e]),s=Math.min(s,t[r+3*e+1]),o=Math.min(o,t[r+3*e+2]),a=Math.max(a,t[r+3*e]),l=Math.max(l,t[r+3*e+1]),c=Math.max(c,t[r+3*e+2])
e[0]=i,e[1]=s,e[2]=o,e[3]=a,e[4]=l,e[5]=c}function h(e,t,r){const n=t.length
let i=e[0],s=e[1],o=e[2],a=e[3],l=e[4],c=e[5]
if(r)for(let e=0;e<n;e++){const r=t[e]
i=Math.min(i,r[0]),s=Math.min(s,r[1]),o=Math.min(o,r[2]),a=Math.max(a,r[0]),l=Math.max(l,r[1]),c=Math.max(c,r[2])}else for(let e=0;e<n;e++){const r=t[e]
i=Math.min(i,r[0]),s=Math.min(s,r[1]),a=Math.max(a,r[0]),l=Math.max(l,r[1])}e[0]=i,e[1]=s,e[2]=o,e[3]=a,e[4]=l,e[5]=c}function b(e){for(let t=0;t<6;t++)if(!isFinite(e[t]))return!1
return!0}function f(e){return e[0]>=e[3]?0:e[3]-e[0]}function y(e){return e[1]>=e[4]?0:e[4]-e[1]}function m(e){return e[2]>=e[5]?0:e[5]-e[2]}function g(e){const t=f(e),r=m(e),n=y(e)
return Math.sqrt(t*t+r*r+n*n)}function O(e,t=[0,0,0]){return t[0]=e[0]+f(e)/2,t[1]=e[1]+y(e)/2,t[2]=e[2]+m(e)/2,t}function j(e,t=[0,0,0]){return t[0]=f(e),t[1]=y(e),t[2]=m(e),t}function v(e,t){return t[0]>=e[0]&&t[1]>=e[1]&&t[2]>=e[2]&&t[0]<=e[3]&&t[1]<=e[4]&&t[2]<=e[5]}function w(e,t){return t[0]>=e[0]&&t[1]>=e[1]&&t[2]>=e[2]&&t[3]<=e[3]&&t[4]<=e[4]&&t[5]<=e[5]}function S(e,t){return Math.max(t[0],e[0])<=Math.min(t[3],e[3])&&Math.max(t[1],e[1])<=Math.min(t[4],e[4])&&Math.max(t[2],e[2])<=Math.min(t[5],e[5])}function x(e,t){return!!Object(n.k)(t)||S(e,t)}function _(e,t,r,n,i=e){return i[0]=e[0]+t,i[1]=e[1]+r,i[2]=e[2]+n,i[3]=e[3]+t,i[4]=e[4]+r,i[5]=e[5]+n,i}function I(e,t,r=e){const n=e[0]+f(e)/2,i=e[1]+y(e)/2,s=e[2]+m(e)/2
return r[0]=n+(e[0]-n)*t,r[1]=i+(e[1]-i)*t,r[2]=s+(e[2]-s)*t,r[3]=n+(e[3]-n)*t,r[4]=i+(e[4]-i)*t,r[5]=s+(e[5]-s)*t,r}function T(e,t){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function M(e,t,r=e){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r!==e&&(r[3]=e[3],r[4]=e[4],r[5]=e[5]),r}function F(e,t,r=e){return r[3]=t[0],r[4]=t[1],r[5]=t[2],r!==e&&(r[0]=e[0],r[1]=e[1],r[2]=e[2]),e}function E(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e}function V(e){return e?E(e,q):o(q)}function L(e,t){return t||(t=Object(s.m)()),t[0]=e[0],t[1]=e[1],t[2]=e[3],t[3]=e[4],t}function k(e,t){return e[0]=t[0],e[1]=t[1],e[2]=Number.NEGATIVE_INFINITY,e[3]=t[2],e[4]=t[3],e[5]=Number.POSITIVE_INFINITY,e}function A(e,t,r,n,i){return e[0]=t,e[1]=r,e[2]=Number.NEGATIVE_INFINITY,e[3]=n,e[4]=i,e[5]=Number.POSITIVE_INFINITY,e}function D(e){return 6===e.length}function R(e){return 0===f(e)&&0===y(e)&&0===m(e)}function C(e,t,r){if(Object(n.k)(e)||Object(n.k)(t))return e===t
if(!D(e)||!D(t))return!1
if(r){for(let n=0;n<e.length;n++)if(!r(e[n],t[n]))return!1}else for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1
return!0}function P(e,t,r,n,i,s){return a(e,t,r,n,i,s,U)}const N=[-1/0,-1/0,-1/0,1/0,1/0,1/0],q=[1/0,1/0,1/0,-1/0,-1/0,-1/0],z=[0,0,0,0,0,0],U=o()},1047:function(e,t,r){"use strict"
r.d(t,"a",(function(){return j}))
var n,i=r(968),s=r(982),o=r(772),a=r(976),l=r(972),c=r(234),u=r(23),p=r(970),d=(r(971),r(977)),h=r(969),b=r(974),f=r(769),y=r(983),m=r(1050)
const g=new a.a({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null})
let O=n=class extends l.a{constructor(e){super(e),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(e,t){const r=f.default.fromJSON(t.spatialReference),n=[]
for(let t=0;t<e.length;t++){const s=e[t],a=o.default.fromJSON(s),l=s.geometry&&s.geometry.spatialReference
Object(u.l)(a.geometry)&&!l&&(a.geometry.spatialReference=r)
const c=s.aggregateGeometries,p=a.aggregateGeometries
if(c&&Object(u.l)(p))for(const e in p){var i
const t=p[e],n=null==(i=c[e])?void 0:i.spatialReference
Object(u.l)(t)&&!n&&(t.spatialReference=r)}n.push(a)}return n}writeGeometryType(e,t,r,n){if(e)return void g.write(e,t,r,n)
const{features:i}=this
if(i)for(const e of i)if(e&&Object(u.l)(e.geometry))return void g.write(e.geometry.type,t,r,n)}readQueryGeometry(e,t){if(!e)return null
const r=!!e.spatialReference,n=Object(y.a)(e)
return n&&!r&&t.spatialReference&&(n.spatialReference=f.default.fromJSON(t.spatialReference)),n}writeSpatialReference(e,t){if(e)return void(t.spatialReference=e.toJSON())
const{features:r}=this
if(r)for(const e of r)if(e&&Object(u.l)(e.geometry)&&e.geometry.spatialReference)return void(t.spatialReference=e.geometry.spatialReference.toJSON())}clone(){return new n(this.cloneProperties())}cloneProperties(){return Object(c.a)({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})}toJSON(e){const t=this.write()
if(t.features&&Array.isArray(e)&&e.length>0)for(let r=0;r<t.features.length;r++){const n=t.features[r]
if(n.geometry){const t=e&&e[r]
n.geometry=t&&t.toJSON()||n.geometry}}return t}quantize(e){const{scale:[t,r],translate:[n,i]}=e,s=this.features,o=this._getQuantizationFunction(this.geometryType,e=>Math.round((e-n)/t),e=>Math.round((i-e)/r))
for(let e=0,t=s.length;e<t;e++)(null==o?void 0:o(Object(u.u)(s[e].geometry)))||(s.splice(e,1),e--,t--)
return this.transform=e,this}unquantize(){const{geometryType:e,features:t,transform:r}=this
if(!r)return this
const{translate:[n,i],scale:[s,o]}=r,a=this._getHydrationFunction(e,e=>e*s+n,e=>i-e*o)
for(const{geometry:e}of t)Object(u.l)(e)&&a&&a(e)
return this.transform=null,this}_quantizePoints(e,t,r){let n,i
const s=[]
for(let o=0,a=e.length;o<a;o++){const a=e[o]
if(o>0){const e=t(a[0]),o=r(a[1])
e===n&&o===i||(s.push([e-n,o-i]),n=e,i=o)}else n=t(a[0]),i=r(a[1]),s.push([n,i])}return s.length>0?s:null}_getQuantizationFunction(e,t,r){return"point"===e?e=>(e.x=t(e.x),e.y=r(e.y),e):"polyline"===e||"polygon"===e?e=>{const n=Object(y.g)(e)?e.rings:e.paths,i=[]
for(let e=0,s=n.length;e<s;e++){const s=n[e],o=this._quantizePoints(s,t,r)
o&&i.push(o)}return i.length>0?(Object(y.g)(e)?e.rings=i:e.paths=i,e):null}:"multipoint"===e?e=>{const n=this._quantizePoints(e.points,t,r)
return n&&n.length>0?(e.points=n,e):null}:"extent"===e?e=>e:null}_getHydrationFunction(e,t,r){return"point"===e?e=>{e.x=t(e.x),e.y=r(e.y)}:"polyline"===e||"polygon"===e?e=>{const n=Object(y.g)(e)?e.rings:e.paths
let i,s
for(let e=0,o=n.length;e<o;e++){const o=n[e]
for(let e=0,n=o.length;e<n;e++){const n=o[e]
e>0?(i+=n[0],s+=n[1]):(i=n[0],s=n[1]),n[0]=t(i),n[1]=r(s)}}}:"extent"===e?e=>{e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax)}:"multipoint"===e?e=>{const n=e.points
let i,s
for(let e=0,o=n.length;e<o;e++){const o=n[e]
e>0?(i+=o[0],s+=o[1]):(i=o[0],s=o[1]),o[0]=t(i),o[1]=r(s)}}:null}}
Object(i.a)([Object(p.b)({type:String,json:{write:!0}})],O.prototype,"displayFieldName",void 0),Object(i.a)([Object(p.b)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],O.prototype,"exceededTransferLimit",void 0),Object(i.a)([Object(p.b)({type:[o.default],json:{write:!0}})],O.prototype,"features",void 0),Object(i.a)([Object(d.a)("features")],O.prototype,"readFeatures",null),Object(i.a)([Object(p.b)({type:[m.a],json:{write:!0}})],O.prototype,"fields",void 0),Object(i.a)([Object(p.b)({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:g.read}}})],O.prototype,"geometryType",void 0),Object(i.a)([Object(b.a)("geometryType")],O.prototype,"writeGeometryType",null),Object(i.a)([Object(p.b)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],O.prototype,"hasM",void 0),Object(i.a)([Object(p.b)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],O.prototype,"hasZ",void 0),Object(i.a)([Object(p.b)({types:s.c,json:{write:!0}})],O.prototype,"queryGeometry",void 0),Object(i.a)([Object(d.a)("queryGeometry")],O.prototype,"readQueryGeometry",null),Object(i.a)([Object(p.b)({type:f.default,json:{write:!0}})],O.prototype,"spatialReference",void 0),Object(i.a)([Object(b.a)("spatialReference")],O.prototype,"writeSpatialReference",null),Object(i.a)([Object(p.b)({json:{write:!0}})],O.prototype,"transform",void 0),O=n=Object(i.a)([Object(h.a)("esri.rest.support.FeatureSet")],O),O.prototype.toJSON.isDefaultToJSON=!0
const j=O},1050:function(e,t,r){"use strict"
r.d(t,"a",(function(){return y}))
var n,i=r(968),s=r(976),o=r(972),a=r(970),l=r(971),c=(r(445),r(979)),u=r(977),p=r(969),d=r(1132),h=r(1149)
const b=new s.a({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"})
let f=n=class extends o.a{constructor(e){super(e),this.alias=null,this.defaultValue=void 0,this.description=null,this.domain=null,this.editable=!0,this.length=-1,this.name=null,this.nullable=!0,this.type=null,this.valueType=null,this.visible=!0}readDescription(e,{description:t}){var r,n
let i=null
try{i=t?JSON.parse(t):null}catch(e){}return null!=(r=null==(n=i)?void 0:n.value)?r:null}readValueType(e,{description:t}){let r=null
try{r=t?JSON.parse(t):null}catch(e){}return r?b.fromJSON(r.fieldValueType):null}clone(){return new n({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType,visible:this.visible})}}
Object(i.a)([Object(a.b)({type:String,json:{write:!0}})],f.prototype,"alias",void 0),Object(i.a)([Object(a.b)({type:[String,Number],json:{write:{allowNull:!0}}})],f.prototype,"defaultValue",void 0),Object(i.a)([Object(a.b)()],f.prototype,"description",void 0),Object(i.a)([Object(u.a)("description")],f.prototype,"readDescription",null),Object(i.a)([Object(a.b)({types:d.b,json:{read:{reader:d.a},write:!0}})],f.prototype,"domain",void 0),Object(i.a)([Object(a.b)({type:Boolean,json:{write:!0}})],f.prototype,"editable",void 0),Object(i.a)([Object(a.b)({type:l.a,json:{write:!0}})],f.prototype,"length",void 0),Object(i.a)([Object(a.b)({type:String,json:{write:!0}})],f.prototype,"name",void 0),Object(i.a)([Object(a.b)({type:Boolean,json:{write:!0}})],f.prototype,"nullable",void 0),Object(i.a)([Object(c.a)(h.a)],f.prototype,"type",void 0),Object(i.a)([Object(a.b)()],f.prototype,"valueType",void 0),Object(i.a)([Object(u.a)("valueType",["description"])],f.prototype,"readValueType",null),Object(i.a)([Object(a.b)({type:Boolean,json:{read:!1}})],f.prototype,"visible",void 0),f=n=Object(i.a)([Object(p.a)("esri.layers.support.Field")],f)
const y=f},1057:function(e,t,r){"use strict"
r.d(t,"a",(function(){return H})),r.d(t,"b",(function(){return te})),r.d(t,"c",(function(){return W})),r.d(t,"d",(function(){return Z})),r.d(t,"e",(function(){return Q})),r.d(t,"f",(function(){return B})),r.d(t,"g",(function(){return A})),r.d(t,"h",(function(){return G})),r.d(t,"i",(function(){return q})),r.d(t,"j",(function(){return Y})),r.d(t,"k",(function(){return ee})),r.d(t,"l",(function(){return K})),r.d(t,"m",(function(){return D})),r.d(t,"n",(function(){return S})),r.d(t,"o",(function(){return z})),r.d(t,"p",(function(){return P})),r.d(t,"q",(function(){return he})),r.d(t,"r",(function(){return se})),r.d(t,"s",(function(){return le})),r.d(t,"t",(function(){return de})),r.d(t,"u",(function(){return ne})),r.d(t,"v",(function(){return ie})),r.d(t,"w",(function(){return j})),r.d(t,"x",(function(){return v})),r.d(t,"y",(function(){return ue})),r.d(t,"z",(function(){return re})),r.d(t,"A",(function(){return ce}))
var n=r(446),i=r(233),s=r(23),o=r(1041),a=r(996),l=r(983),c=r(1153),u=r(1237),p=r(1062)
function d(e,t){return e?t?4:3:t?3:2}const h=i.a.getLogger("esri.layers.graphics.featureConversionUtils"),b={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0},f=(e,t,r,n,i,s)=>{e[r]=i,e[r+1]=s},y=(e,t,r,n,i,s)=>{e[r]=i,e[r+1]=s,e[r+2]=t[n+2]},m=(e,t,r,n,i,s)=>{e[r]=i,e[r+1]=s,e[r+2]=t[n+3]},g=(e,t,r,n,i,s)=>{e[r]=i,e[r+1]=s,e[r+2]=t[n+2],e[r+3]=t[n+3]}
function O(e,t,r,n){if(e){if(r)return t&&n?g:y
if(t&&n)return m}else if(t&&n)return y
return f}function j({scale:e,translate:t},r){return Math.round((r-t[0])/e[0])}function v({scale:e,translate:t},r){return Math.round((t[1]-r)/e[1])}function w({scale:e,translate:t},r,n){return r*e[n]+t[n]}function S(e,t,r){return e?t?r?E(e):I(e):r?M(e):x(e):null}function x(e){const t=e.coords
return{x:t[0],y:t[1]}}function _(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e}function I(e){const t=e.coords
return{x:t[0],y:t[1],z:t[2]}}function T(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.z,e}function M(e){const t=e.coords
return{x:t[0],y:t[1],m:t[2]}}function F(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.m,e}function E(e){const t=e.coords
return{x:t[0],y:t[1],z:t[2],m:t[3]}}function V(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.z,e.coords[3]=t.m,e}function L(e,t){return e&&t?V:e?T:t?F:_}function k(e,t,r,n,i){const o=L(r,n)
for(const{geometry:r,attributes:n}of t){const t=Object(s.l)(r)?o(new p.a,r):null
e.push(new c.a(t,n,null,i?n[i]:void 0))}return e}function A(e,t,r=L(null!=t.z,null!=t.m)){return r(e,t)}function D(e,t,r){if(Object(s.k)(e))return null
const n=d(t,r),i=[]
for(let t=0;t<e.coords.length;t+=n){const r=[]
for(let i=0;i<n;i++)r.push(e.coords[t+i])
i.push(r)}return t?r?{points:i,hasZ:t,hasM:r}:{points:i,hasZ:t}:r?{points:i,hasM:r}:{points:i}}function R(e,t,r,n,i){const o=d(r,n)
for(const{geometry:r,attributes:n}of t){const t=Object(s.l)(r)?C(new p.a,r,o):null
e.push(new c.a(t,n,null,i?n[i]:void 0))}return e}function C(e,t,r=d(t.hasZ,t.hasM)){e.lengths[0]=t.points.length
const n=e.coords
let i=0
for(const e of t.points)for(let t=0;t<r;t++)n[i++]=e[t]
return e}function P(e,t,r){if(!e)return null
const n=d(t,r),{coords:i,lengths:s}=e,o=[]
let a=0
for(const e of s){const t=[]
for(let r=0;r<e;r++){const e=[]
for(let t=0;t<n;t++)e.push(i[a++])
t.push(e)}o.push(t)}return t?r?{paths:o,hasZ:t,hasM:r}:{paths:o,hasZ:t}:r?{paths:o,hasM:r}:{paths:o}}function N(e,t,r,n,i){const o=d(r,n)
for(const{geometry:r,attributes:n}of t){const t=Object(s.l)(r)?q(new p.a,r,o):null
e.push(new c.a(t,n,null,i?n[i]:void 0))}return e}function q(e,t,r=d(t.hasZ,t.hasM)){const{lengths:n,coords:i}=e
let s=0
for(const e of t.paths){for(const t of e)for(let e=0;e<r;e++)i[s++]=t[e]
n.push(e.length)}return e}function z(e,t,r){if(!e)return null
const n=d(t,r),{coords:i,lengths:s}=e,o=[]
let a=0
for(const e of s){const t=[]
for(let r=0;r<e;r++){const e=[]
for(let t=0;t<n;t++)e.push(i[a++])
t.push(e)}o.push(t)}return t?r?{rings:o,hasZ:t,hasM:r}:{rings:o,hasZ:t}:r?{rings:o,hasM:r}:{rings:o}}function U(e,t,r,n,i){for(const{geometry:o,centroid:a,attributes:l}of t){const t=Object(s.l)(o)?G(new p.a,o,r,n):null,u=i?l[i]:void 0
Object(s.l)(a)?e.push(new c.a(t,l,_(new p.a,a),u)):e.push(new c.a(t,l,null,u))}return e}function G(e,t,r=t.hasZ,n=t.hasM){return B(e,t.rings,r,n),e}function B(e,t,r,n){const i=d(r,n),{lengths:s,coords:o}=e
let a=0
be(e)
for(const e of t){for(const t of e)for(let e=0;e<i;e++)o[a++]=t[e]
s.push(e.length)}return e}const $=[],J=[]
function H(e,t,r,n,i){$[0]=e
const[s]=W(J,$,t,r,n,i)
return fe($),fe(J),s}function W(e,t,r,i,s,o){if(fe(e),!r){for(const r of t){const t=o?r.attributes[o]:void 0
e.push(new c.a(null,r.attributes,null,t))}return e}switch(r){case"esriGeometryPoint":return k(e,t,i,s,o)
case"esriGeometryMultipoint":return R(e,t,i,s,o)
case"esriGeometryPolyline":return N(e,t,i,s,o)
case"esriGeometryPolygon":return U(e,t,i,s,o)
default:h.error("convertToFeatureSet:unknown-geometry",new n.a(`Unable to parse unknown geometry type '${r}'`)),fe(e)}return e}function Q(e,t,r,i,s,o){const a=e.length
switch(r){case"esriGeometryPoint":k(e,t,i,s,o)
break
case"esriGeometryMultipoint":R(e,t,i,s,o)
break
case"esriGeometryPolyline":N(e,t,i,s,o)
break
case"esriGeometryPolygon":U(e,t,i,s,o)
break
default:h.error("convertToFeatureSet:unknown-geometry",new n.a(`Unable to parse unknown geometry type '${r}'`))}for(let n=0;n<t.length;n++)e[n+a].geometryType=r,e[n+a].insertAfter=t[n].insertAfter,e[n+a].groupId=t[n].groupId
return e}function Y(e,t,r,n){J[0]=e,X($,J,t,r,n)
const i=$[0]
return fe($),fe(J),i}function Z(e,t,r){if(Object(s.k)(e))return null
const i=new p.a
return"hasZ"in e&&null==t&&(t=e.hasZ),"hasM"in e&&null==r&&(r=e.hasM),Object(l.f)(e)?L(null!=t?t:null!=e.z,null!=r?r:null!=e.m)(i,e):Object(l.g)(e)?G(i,e,t,r):Object(l.h)(e)?q(i,e,d(t,r)):Object(l.e)(e)?C(i,e,d(t,r)):void h.error("convertFromGeometry:unknown-geometry",new n.a(`Unable to parse unknown geometry type '${e}'`))}function K(e,t,r,i){const o=e&&("coords"in e?e:e.geometry)
if(Object(s.k)(o))return null
switch(t){case"esriGeometryPoint":{let e=x
return r&&i?e=E:r?e=I:i&&(e=M),e(o)}case"esriGeometryMultipoint":return D(o,r,i)
case"esriGeometryPolyline":return P(o,r,i)
case"esriGeometryPolygon":return z(o,r,i)
default:return h.error("convertToGeometry:unknown-geometry",new n.a(`Unable to parse unknown geometry type '${t}'`)),null}}function X(e,t,r,i,o){if(fe(e),Object(s.k)(r))return function(e,t){for(const r of t)e.push({attributes:r.attributes})
return e}(e,t)
switch(r){case"esriGeometryPoint":return function(e,t,r,n){let i=x
r&&n?i=E:r?i=I:n&&(i=M)
for(const r of t){const{geometry:t,attributes:n}=r,o=Object(s.l)(t)?i(t):null
e.push({attributes:n,geometry:o})}return e}(e,t,i,o)
case"esriGeometryMultipoint":return function(e,t,r,n){for(const{geometry:i,attributes:o}of t)e.push({attributes:o,geometry:Object(s.l)(i)?D(i,r,n):null})
return e}(e,t,i,o)
case"esriGeometryPolyline":return function(e,t,r,n){for(const{geometry:i,attributes:o}of t)e.push({attributes:o,geometry:Object(s.l)(i)?P(i,r,n):null})
return e}(e,t,i,o)
case"esriGeometryPolygon":return function(e,t,r,n){for(const{geometry:i,attributes:o,centroid:a}of t){const t=Object(s.l)(i)?z(i,r,n):null
if(Object(s.l)(a)){const r=x(a)
e.push({attributes:o,centroid:r,geometry:t})}else e.push({attributes:o,geometry:t})}return e}(e,t,i,o)
default:h.error("convertToFeatureSet:unknown-geometry",new n.a(`Unable to parse unknown geometry type '${r}'`))}return e}function ee(e){const{objectIdFieldName:t,spatialReference:r,transform:n,fields:i,hasM:s,hasZ:o,features:a,geometryType:l,exceededTransferLimit:c,uniqueIdField:u,queryGeometry:p,queryGeometryType:d}=e,h={features:X([],a,l,o,s),fields:i,geometryType:l,objectIdFieldName:t,spatialReference:r,uniqueIdField:u,queryGeometry:K(p,d,!1,!1)}
return n&&(h.transform=n),c&&(h.exceededTransferLimit=c),s&&(h.hasM=s),o&&(h.hasZ=o),h}function te(e,t){var r
const i=new u.a,{hasM:s,hasZ:o,features:a,objectIdFieldName:l,spatialReference:c,geometryType:p,exceededTransferLimit:d,transform:b,fields:f}=e
return f&&(i.fields=f),i.geometryType=null!=p?p:null,i.objectIdFieldName=null!=(r=null!=l?l:t)?r:null,i.spatialReference=null!=c?c:null,i.objectIdFieldName?(a&&W(i.features,a,p,o,s,i.objectIdFieldName),d&&(i.exceededTransferLimit=d),s&&(i.hasM=s),o&&(i.hasZ=o),b&&(i.transform=b),i):(h.error(new n.a("optimized-features:invalid-objectIdFieldName","objectIdFieldName is missing")),i)}function re(e){const{transform:t,features:r,hasM:n,hasZ:i}=e
if(!t)return e
for(const e of r)Object(s.l)(e.geometry)&&ce(e.geometry,e.geometry,n,i,t),Object(s.l)(e.centroid)&&ce(e.centroid,e.centroid,n,i,t)
return e.transform=null,e}function ne(e,t){const{geometryType:r,features:n,hasM:i,hasZ:s}=t
if(!e)return t
for(let t=0;t<n.length;t++){const o=n[t],a=o.weakClone()
a.geometry=new p.a,ie(a.geometry,o.geometry,i,s,r,e),o.centroid&&(a.centroid=new p.a,ie(a.centroid,o.centroid,i,s,"esriGeometryPoint",e)),n[t]=a}return t.transform=e,t}function ie(e,t,r,n,i,o,a=r,l=n){if(be(e),Object(s.k)(t)||!t.coords.length)return null
const c=b[i],{coords:u,lengths:p}=t,h=d(r,n),f=d(r&&a,n&&l),y=O(r,n,a,l)
if(!p.length)return y(e.coords,u,0,0,j(o,u[0]),v(o,u[1])),be(e,h,0),e
let m,g,w,S,x=0,_=0,I=_
for(const t of p){if(t<c)continue
let r=0
_=I,w=m=j(o,u[x]),S=g=v(o,u[x+1]),y(e.coords,u,_,x,w,S),r++,x+=h,_+=f
for(let n=1;n<t;n++,x+=h)w=j(o,u[x]),S=v(o,u[x+1]),w===m&&S===g||(y(e.coords,u,_,x,w-m,S-g),_+=f,r++,m=w,g=S)
r>=c&&(e.lengths.push(r),I=_)}return fe(e.coords,I),e.coords.length?e:null}function se(e,t,r,n,i,s,o=r,a=n){if(be(e),!t||!t.coords.length)return null
const l=b[i],{coords:c,lengths:u}=t,p=d(r,n),h=d(r&&o,n&&a),f=O(r,n,o,a)
if(!u.length)return f(e.coords,c,0,0,c[0],c[1]),be(e,p,0),e
let y=0
const m=s*s
for(const t of u){if(t<l){y+=t*p
continue}const r=e.coords.length/h,n=y,i=y+(t-1)*p
f(e.coords,c,e.coords.length,n,c[n],c[n+1]),ae(e.coords,c,p,m,f,n,i),f(e.coords,c,e.coords.length,i,c[i],c[i+1])
const s=e.coords.length/h-r
s>=l?e.lengths.push(s):fe(e.coords,r*h),y+=t*p}return e.coords.length?e:null}function oe(e,t,r,n){const i=e[t],s=e[t+1],o=e[r],a=e[r+1],l=e[n],c=e[n+1]
let u=o,p=a,d=l-u,h=c-p
if(0!==d||0!==h){const e=((i-u)*d+(s-p)*h)/(d*d+h*h)
e>1?(u=l,p=c):e>0&&(u+=d*e,p+=h*e)}return d=i-u,h=s-p,d*d+h*h}function ae(e,t,r,n,i,s,o){let a,l=n,c=0
for(let e=s+r;e<o;e+=r)a=oe(t,e,s,o),a>l&&(c=e,l=a)
l>n&&(c-s>r&&ae(e,t,r,n,i,s,c),i(e,t,e.length,c,t[c],t[c+1]),o-c>r&&ae(e,t,r,n,i,c,o))}function le(e,t,r,n){if(Object(s.k)(t)||!t.coords||!t.coords.length)return null
const i=d(r,n)
let l=Number.POSITIVE_INFINITY,c=Number.POSITIVE_INFINITY,u=Number.NEGATIVE_INFINITY,p=Number.NEGATIVE_INFINITY
if(t&&t.coords){const e=t.coords
for(let t=0;t<e.length;t+=i){const r=e[t],n=e[t+1]
l=Math.min(l,r),u=Math.max(u,r),c=Math.min(c,n),p=Math.max(p,n)}}return Object(o.y)(e)?Object(o.s)(e,l,c,u,p):Object(a.u)(l,c,u,p,e),e}function ce(e,t,r,n,i){var o,a,l,c,u,p,h,b
const{coords:f,lengths:y}=t,m=d(r,n)
if(!f.length)return e!==t&&be(e),e
Object(s.c)(i)
const{originPosition:g,scale:O,translate:j}=i,v=ye
v.originPosition=g
const S=v.scale
S[0]=null!=(o=O[0])?o:1,S[1]=-(null!=(a=O[1])?a:1),S[2]=null!=(l=O[2])?l:1,S[3]=null!=(c=O[3])?c:1
const x=v.translate
if(x[0]=null!=(u=j[0])?u:0,x[1]=null!=(p=j[1])?p:0,x[2]=null!=(h=j[2])?h:0,x[3]=null!=(b=j[3])?b:0,!y.length){for(let t=0;t<m;++t)e.coords[t]=w(v,f[t],t)
return e!==t&&be(e,m,0),e}let _=0
for(let t=0;t<y.length;t++){const r=y[t]
e.lengths[t]=r
for(let t=0;t<m;++t)e.coords[_+t]=w(v,f[_+t],t)
let n=e.coords[_],i=e.coords[_+1]
_+=m
for(let t=1;t<r;t++,_+=m){n+=f[_]*S[0],i+=f[_+1]*S[1],e.coords[_]=n,e.coords[_+1]=i
for(let t=2;t<m;++t)e.coords[_+t]=w(v,f[_+t],t)}}return e!==t&&be(e,f.length,y.length),e}function ue(e,t,r,n,i,s){if(be(e),e.lengths.push(...t.lengths),r===i&&n===s)for(let r=0;r<t.coords.length;r++)e.coords.push(t.coords[r])
else{const o=d(r,n),a=O(r,n,i,s),l=t.coords
for(let t=0;t<l.length;t+=o)a(e.coords,l,e.coords.length,t,l[t],l[t+1])}return e}function pe(e,t,r,n){let i=0,s=e[n*t],o=e[n*(t+1)]
for(let a=1;a<r;a++){const r=s+e[n*(t+a)],l=o+e[n*(t+a)+1],c=(r-s)*(l+o)
s=r,o=l,i+=c}return.5*i}function de(e,t){const{coords:r,lengths:n}=e
let i=0,s=0
for(let e=0;e<n.length;e++){const o=n[e]
s+=pe(r,i,o,t),i+=o}return Math.abs(s)}function he(e,t){if(Object(s.k)(e))return null
const r=e.clone(),n=e.coords,i=e.lengths
let o=0
for(let e=0;e<i.length;e++){const s=i[e]
let a=n[t*o],l=n[t*o+1]
for(let e=1;e<s;e++){const i=a+n[t*(o+e)],s=l+n[t*(o+e)+1]
r.coords[t*(o+e)]=i,r.coords[t*(o+e)+1]=s,a=i,l=s}o+=s}return r}function be(e,t=0,r=0){fe(e.lengths,r),fe(e.coords,t)}function fe(e,t=0){e.length!==t&&(e.length=t)}const ye={originPosition:"lowerLeft",scale:[1,1,1,1],translate:[0,0,0,0]}},1059:function(e,t,r){"use strict"
r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return o})),r(235)
const n={milliseconds:1,seconds:1e3,minutes:6e4,hours:36e5,days:864e5,weeks:6048e5,months:26784e5,years:31536e6,decades:31536e7,centuries:31536e8},i={milliseconds:{getter:"getMilliseconds",setter:"setMilliseconds",multiplier:1},seconds:{getter:"getSeconds",setter:"setSeconds",multiplier:1},minutes:{getter:"getMinutes",setter:"setMinutes",multiplier:1},hours:{getter:"getHours",setter:"setHours",multiplier:1},days:{getter:"getDate",setter:"setDate",multiplier:1},weeks:{getter:"getDate",setter:"setDate",multiplier:7},months:{getter:"getMonth",setter:"setMonth",multiplier:1},years:{getter:"getFullYear",setter:"setFullYear",multiplier:1},decades:{getter:"getFullYear",setter:"setFullYear",multiplier:10},centuries:{getter:"getFullYear",setter:"setFullYear",multiplier:100}}
function s(e,t,r){const n=new Date(e.getTime())
if(t&&r){const e=i[r],{getter:s,setter:o,multiplier:a}=e
if("months"===r){const e=function(e,t){const r=new Date(e,t+1,1)
return r.setDate(0),r.getDate()}(n.getFullYear(),n.getMonth()+t)
n.getDate()>e&&n.setDate(e)}n[o](n[s]()+t*a)}return n}function o(e,t){switch(t){case"milliseconds":return new Date(e.getTime())
case"seconds":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds())
case"minutes":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes())
case"hours":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours())
case"days":return new Date(e.getFullYear(),e.getMonth(),e.getDate())
case"weeks":return new Date(e.getFullYear(),e.getMonth(),e.getDate()-e.getDay())
case"months":return new Date(e.getFullYear(),e.getMonth(),1)
case"years":return new Date(e.getFullYear(),0,1)
case"decades":return new Date(e.getFullYear()-e.getFullYear()%10,0,1)
case"centuries":return new Date(e.getFullYear()-e.getFullYear()%100,0,1)
default:return new Date}}function a(e,t,r){return 0===e?0:e*n[t]/n[r]}},1062:function(e,t,r){"use strict"
r.d(t,"a",(function(){return n}))
class n{constructor(e=[],t=[],r=!1){this.lengths=null!=e?e:[],this.coords=null!=t?t:[],this.hasIndeterminateRingOrder=r}static fromRect(e){const[t,r,i,s]=e,o=i-t,a=s-r
return new n([5],[t,r,o,0,0,a,-o,0,0,-a])}get isPoint(){return 0===this.lengths.length}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce((e,t)=>e+t)}forEachVertex(e){let t=0
this.lengths.length||e(this.coords[0],this.coords[1])
for(let r=0;r<this.lengths.length;r++){const n=this.lengths[r]
for(let r=0;r<n;r++)e(this.coords[2*(r+t)],this.coords[2*(r+t)+1])
t+=n}}clone(e){return e?(e.set(this.coords),new n(this.lengths.slice(),e,this.hasIndeterminateRingOrder)):new n(this.lengths.slice(),this.coords.slice(),this.hasIndeterminateRingOrder)}}},1070:function(e,t,r){"use strict"
r.d(t,"a",(function(){return x}))
var n,i=r(968),s=r(446),o=r(976),a=r(233),l=r(980),c=r(970),u=r(987),p=r(977),d=r(969),h=r(974),b=r(1040),f=r(1183),y=r(1257),m=r(1108),g=r(1107)
const O=new o.a({width:"width",depth:"depth",height:"height",widthAndDepth:"width-and-depth",all:"all"}),j=new o.a({unknown:"unknown",inch:"inches",foot:"feet",yard:"yards",mile:"miles","nautical-mile":"nautical-miles",millimeter:"millimeters",centimeter:"centimeters",decimeter:"decimeters",meter:"meters",kilometer:"kilometers","decimal-degree":"decimal-degrees"})
function v(e){if(null!=e)return"string"==typeof e||"number"==typeof e?Object(l.k)(e):"size"===e.type?Object(m.e)(e)?e:(delete(e={...e}).type,new S(e)):void 0}function w(e,t,r){if("object"!=typeof e)return e
const n=new S
return n.read(e,r),n}let S=n=class extends b.a{constructor(e){super(e),this.axis=null,this.legendOptions=null,this.normalizationField=null,this.scaleBy=null,this.target=null,this.type="size",this.useSymbolValue=null,this.valueExpression=null,this.valueRepresentation=null,this.valueUnit=null}get cache(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:null,isScaleDriven:null!=this.valueExpression&&g.viewScaleRE.test(this.valueExpression)}}set expression(e){a.a.getLogger(this.declaredClass).warn("'expression' is deprecated since version 4.2. Use 'valueExpression' instead. The only supported expression is 'view.scale'."),"view.scale"===e?(this.valueExpression="$view.scale",this._set("expression",e)):this._set("expression",null)}set index(e){Object(m.e)(this.maxSize)&&(this.maxSize.index=`visualVariables[${e}].maxSize`),Object(m.e)(this.minSize)&&(this.minSize.index=`visualVariables[${e}].minSize`),this._set("index",e)}get inputValueType(){return Object(m.c)(this)}set maxDataValue(e){e&&this.stops&&(a.a.getLogger(this.declaredClass).warn("cannot set maxDataValue when stops is not null."),e=null),this._set("maxDataValue",e)}set maxSize(e){e&&this.stops&&(a.a.getLogger(this.declaredClass).warn("cannot set maxSize when stops is not null."),e=null),this._set("maxSize",e)}castMaxSize(e){return v(e)}readMaxSize(e,t,r){return w(e,0,r)}set minDataValue(e){e&&this.stops&&(a.a.getLogger(this.declaredClass).warn("cannot set minDataValue when stops is not null."),e=null),this._set("minDataValue",e)}set minSize(e){e&&this.stops&&(a.a.getLogger(this.declaredClass).warn("cannot set minSize when stops is not null."),e=null),this._set("minSize",e)}castMinSize(e){return v(e)}readMinSize(e,t,r){return w(e,0,r)}get arcadeRequired(){return!!this.valueExpression||null!=this.minSize&&"object"==typeof this.minSize&&this.minSize.arcadeRequired||null!=this.maxSize&&"object"==typeof this.maxSize&&this.maxSize.arcadeRequired}set stops(e){null==this.minDataValue&&null==this.maxDataValue&&null==this.minSize&&null==this.maxSize?e&&Array.isArray(e)&&(e=e.filter(e=>!!e)).sort((e,t)=>e.value-t.value):e&&(a.a.getLogger(this.declaredClass).warn("cannot set stops when one of minDataValue, maxDataValue, minSize or maxSize is not null."),e=null),this._set("stops",e)}get transformationType(){return Object(m.d)(this,this.inputValueType)}readValueExpression(e,t){return e||t.expression&&"$view.scale"}writeValueExpressionWebScene(e,t,r,n){if("$view.scale"===e){if(n&&n.messages){const e=this.index,t="string"==typeof e?e:`visualVariables[${e}]`
n.messages.push(new s.a("property:unsupported",this.type+"VisualVariable.valueExpression = '$view.scale' is not supported in Web Scene. Please remove this property to save the Web Scene.",{instance:this,propertyName:t+".valueExpression",context:n}))}}else t[r]=e}readValueUnit(e){return e?j.read(e):null}clone(){return new n({axis:this.axis,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,maxDataValue:this.maxDataValue,maxSize:Object(m.e)(this.maxSize)?this.maxSize.clone():this.maxSize,minDataValue:this.minDataValue,minSize:Object(m.e)(this.minSize)?this.minSize.clone():this.minSize,normalizationField:this.normalizationField,stops:this.stops&&this.stops.map(e=>e.clone()),target:this.target,useSymbolValue:this.useSymbolValue,valueRepresentation:this.valueRepresentation,valueUnit:this.valueUnit,legendOptions:this.legendOptions&&this.legendOptions.clone()})}flipSizes(){if(this.transformationType===m.b.ClampedLinear){const{minSize:e,maxSize:t}=this
return this.minSize=t,this.maxSize=e,this}if(this.transformationType===m.b.Stops){const e=this.stops
if(!e)return this
const t=e.map(e=>e.size).reverse(),r=e.length
for(let n=0;n<r;n++)e[n].size=t[n]
return this}return this}getAttributeHash(){return`${super.getAttributeHash()}-${this.target}-${this.normalizationField}`}_interpolateData(){return this.stops&&this.stops.map(e=>e.value||0)}}
Object(i.a)([Object(c.b)({readOnly:!0})],S.prototype,"cache",null),Object(i.a)([Object(c.b)({type:O.apiValues,json:{type:O.jsonValues,origins:{"web-map":{read:!1}},read:O.read,write:O.write}})],S.prototype,"axis",void 0),Object(i.a)([Object(c.b)({type:String,value:null,json:{read:!1}})],S.prototype,"expression",null),Object(i.a)([Object(c.b)()],S.prototype,"index",null),Object(i.a)([Object(c.b)({type:String,readOnly:!0})],S.prototype,"inputValueType",null),Object(i.a)([Object(c.b)({type:y.a,json:{write:!0}})],S.prototype,"legendOptions",void 0),Object(i.a)([Object(c.b)({type:Number,value:null,json:{write:!0}})],S.prototype,"maxDataValue",null),Object(i.a)([Object(c.b)({type:Number,value:null,json:{write:!0}})],S.prototype,"maxSize",null),Object(i.a)([Object(u.a)("maxSize")],S.prototype,"castMaxSize",null),Object(i.a)([Object(p.a)("maxSize")],S.prototype,"readMaxSize",null),Object(i.a)([Object(c.b)({type:Number,value:null,json:{write:!0}})],S.prototype,"minDataValue",null),Object(i.a)([Object(c.b)({type:Number,value:null,json:{write:!0}})],S.prototype,"minSize",null),Object(i.a)([Object(u.a)("minSize")],S.prototype,"castMinSize",null),Object(i.a)([Object(p.a)("minSize")],S.prototype,"readMinSize",null),Object(i.a)([Object(c.b)({type:String,json:{write:!0}})],S.prototype,"normalizationField",void 0),Object(i.a)([Object(c.b)({readOnly:!0})],S.prototype,"arcadeRequired",null),Object(i.a)([Object(c.b)({type:String})],S.prototype,"scaleBy",void 0),Object(i.a)([Object(c.b)({type:[f.a],value:null,json:{write:!0}})],S.prototype,"stops",null),Object(i.a)([Object(c.b)({type:["outline"],json:{write:!0}})],S.prototype,"target",void 0),Object(i.a)([Object(c.b)({type:String,readOnly:!0})],S.prototype,"transformationType",null),Object(i.a)([Object(c.b)({type:["size"],json:{type:["sizeInfo"]}})],S.prototype,"type",void 0),Object(i.a)([Object(c.b)({type:Boolean,json:{write:!0,origins:{"web-map":{read:!1}}}})],S.prototype,"useSymbolValue",void 0),Object(i.a)([Object(c.b)({type:String,json:{write:!0}})],S.prototype,"valueExpression",void 0),Object(i.a)([Object(p.a)("valueExpression",["valueExpression","expression"])],S.prototype,"readValueExpression",null),Object(i.a)([Object(h.a)("web-scene","valueExpression")],S.prototype,"writeValueExpressionWebScene",null),Object(i.a)([Object(c.b)({type:["radius","diameter","area","width","distance"],json:{write:!0}})],S.prototype,"valueRepresentation",void 0),Object(i.a)([Object(c.b)({type:j.apiValues,json:{write:j.write,origins:{"web-map":{read:!1},"web-scene":{write:!0},"portal-item":{write:!0}}}})],S.prototype,"valueUnit",void 0),Object(i.a)([Object(p.a)("valueUnit")],S.prototype,"readValueUnit",null),S=n=Object(i.a)([Object(d.a)("esri.renderers.visualVariables.SizeVariable")],S)
const x=S},1074:function(e,t,r){"use strict"
r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return o})),r(110),r(196)
var n=r(234),i=r(374)
function s(e,t){return t?{...t,query:{...null!=e?e:{},...t.query}}:{query:e}}function o(e){return"string"==typeof e?Object(i.Q)(e):Object(n.a)(e)}function a(e,t,r){const n={}
for(const i in e){if("declaredClass"===i)continue
const s=e[i]
if(null!=s&&"function"!=typeof s)if(Array.isArray(s)){n[i]=[]
for(let e=0;e<s.length;e++)n[i][e]=a(s[e])}else if("object"==typeof s)if(s.toJSON){const e=s.toJSON(r&&r[i])
n[i]=t?e:JSON.stringify(e)}else n[i]=t?s:JSON.stringify(s)
else n[i]=s}return n}r(1146)},1081:function(e,t,r){"use strict"
r.d(t,"a",(function(){return F}))
var n,i=r(968),s=r(995),o=r(976),a=r(234),l=r(233),c=r(23),u=r(970),p=r(987),d=r(979),h=r(977),b=r(969),f=r(974),y=r(971),m=r(989),g=r(1001),O=r(1032),j=r(1258),v=r(1020),w=r(1086),S=r(1010)
const x="percent-of-total",_="field",I=new o.a({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:x,esriNormalizeByField:_}),T=Object(y.m)(j.a)
let M=n=class extends(Object(O.a)(g.a)){constructor(e){super(e),this._compiledValueExpression={valueExpression:null,compiledFunction:null},this.backgroundFillSymbol=null,this.classBreakInfos=null,this.defaultLabel=null,this.defaultSymbol=null,this.field=null,this.isMaxInclusive=!0,this.legendOptions=null,this.normalizationField=null,this.normalizationTotal=null,this.type="class-breaks",this.valueExpression=null,this.valueExpressionTitle=null,this._set("classBreakInfos",[])}readClassBreakInfos(e,t,r){if(!Array.isArray(e))return
let n=t.minValue
return e.map(e=>{const t=new j.a
return t.read(e,r),null==t.minValue&&(t.minValue=n),null==t.maxValue&&(t.maxValue=t.minValue),n=t.maxValue,t})}writeClassBreakInfos(e,t,r,n){const i=e.map(e=>e.write({},n))
this._areClassBreaksConsecutive()&&i.forEach(e=>delete e.classMinValue),t[r]=i}castField(e){return null==e?e:"function"==typeof e?(l.a.getLogger(this.declaredClass).error(".field: field must be a string value"),null):Object(y.l)(e)}get minValue(){return this.classBreakInfos&&this.classBreakInfos[0]&&this.classBreakInfos[0].minValue||0}get normalizationType(){let e=this._get("normalizationType")
const t=!!this.normalizationField,r=null!=this.normalizationTotal
return t||r?(e=(t?_:r&&x)||null,t&&r&&l.a.getLogger(this.declaredClass).warn("warning: both normalizationField and normalizationTotal are set!")):e!==_&&e!==x||(e=null),e}set normalizationType(e){this._set("normalizationType",e)}addClassBreakInfo(e,t,r){let n=null
n="number"==typeof e?new j.a({minValue:e,maxValue:t,symbol:Object(s.a)(r)}):T(Object(a.a)(e)),this.classBreakInfos.push(n),1===this.classBreakInfos.length&&this.notifyChange("minValue")}removeClassBreakInfo(e,t){const r=this.classBreakInfos.length
for(let n=0;n<r;n++){const r=[this.classBreakInfos[n].minValue,this.classBreakInfos[n].maxValue]
if(r[0]===e&&r[1]===t){this.classBreakInfos.splice(n,1)
break}}}getBreakIndex(e,t){return this.valueExpression&&(Object(c.k)(t)||Object(c.k)(t.arcade))&&l.a.getLogger(this.declaredClass).warn(""),this.valueExpression?this._getBreakIndexForExpression(e,t):this._getBreakIndexForField(e)}async getClassBreakInfo(e,t){let r=t
this.valueExpression&&(Object(c.k)(t)||Object(c.k)(t.arcade))&&(r={...r,arcade:await Object(S.e)()})
const n=this.getBreakIndex(e,r)
return-1!==n?this.classBreakInfos[n]:null}getSymbol(e,t){if(this.valueExpression&&(Object(c.k)(t)||Object(c.k)(t.arcade)))return void l.a.getLogger(this.declaredClass).error("#getSymbol()","Please use getSymbolAsync if valueExpression is used")
const r=this.getBreakIndex(e,t)
return r>-1?this.classBreakInfos[r].symbol:this.defaultSymbol}async getSymbolAsync(e,t){let r=t
if(this.valueExpression&&(Object(c.k)(t)||Object(c.k)(t.arcade))){const e=await Object(S.e)(),{arcadeUtils:t}=e
t.hasGeometryOperations(this.valueExpression)&&await t.enableGeometryOperations(),r={...r,arcade:e}}const n=this.getBreakIndex(e,r)
return n>-1?this.classBreakInfos[n].symbol:this.defaultSymbol}getSymbols(){const e=[]
return this.classBreakInfos.forEach(t=>{t.symbol&&e.push(t.symbol)}),this.defaultSymbol&&e.push(this.defaultSymbol),e}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce((e,t)=>e+t.getAttributeHash(),"")}getMeshHash(){const e=JSON.stringify(this.backgroundFillSymbol),t=JSON.stringify(this.defaultSymbol),r=`${this.normalizationField}.${this.normalizationType}.${this.normalizationTotal}`
return`${e}.${t}.${this.classBreakInfos.reduce((e,t)=>e+t.getMeshHash(),"")}.${r}.${this.field}.${this.valueExpression}`}get arcadeRequired(){return this.arcadeRequiredForVisualVariables||!!this.valueExpression}clone(){return new n({field:this.field,backgroundFillSymbol:this.backgroundFillSymbol&&this.backgroundFillSymbol.clone(),defaultLabel:this.defaultLabel,defaultSymbol:this.defaultSymbol&&this.defaultSymbol.clone(),valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,classBreakInfos:Object(a.a)(this.classBreakInfos),isMaxInclusive:this.isMaxInclusive,normalizationField:this.normalizationField,normalizationTotal:this.normalizationTotal,normalizationType:this.normalizationType,visualVariables:Object(a.a)(this.visualVariables),legendOptions:Object(a.a)(this.legendOptions),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}async collectRequiredFields(e,t){const r=[this.collectVVRequiredFields(e,t),this.collectSymbolFields(e,t)]
await Promise.all(r)}async collectSymbolFields(e,t){const r=[...this.getSymbols().map(r=>r.collectRequiredFields(e,t)),Object(m.a)(e,t,this.valueExpression)]
Object(m.d)(e,t,this.field),Object(m.d)(e,t,this.normalizationField),await Promise.all(r)}_getBreakIndexForExpression(e,t){const{viewingMode:r,scale:n,spatialReference:i,arcade:s}=Object(c.v)(t,{}),{valueExpression:o}=this
let a=this._compiledValueExpression.valueExpression===o?this._compiledValueExpression.compiledFunction:null
const l=Object(c.u)(s).arcadeUtils
if(!a){const e=l.createSyntaxTree(o)
a=l.createFunction(e),this._compiledValueExpression.compiledFunction=a}this._compiledValueExpression.valueExpression=o
const u=l.executeFunction(a,l.createExecContext(e,l.getViewInfo({viewingMode:r,scale:n,spatialReference:i})))
return this._getBreakIndexfromInfos(u)}_getBreakIndexForField(e){const t=this.field,r=e.attributes,n=this.normalizationType
let i=parseFloat(r[t])
if(n){const e=this.normalizationTotal,t=parseFloat(this.normalizationField?r[this.normalizationField]:void 0)
if("log"===n)i=Math.log(i)*Math.LOG10E
else if(n!==x||null==e||isNaN(e)){if(n===_&&!isNaN(t)){if(isNaN(i)||isNaN(t))return-1
i/=t}}else i=i/e*100}return this._getBreakIndexfromInfos(i)}_getBreakIndexfromInfos(e){const t=this.isMaxInclusive
if(null!=e&&"number"==typeof e&&!isNaN(e))for(let r=0;r<this.classBreakInfos.length;r++){const n=[this.classBreakInfos[r].minValue,this.classBreakInfos[r].maxValue]
if(n[0]<=e&&(t?e<=n[1]:e<n[1]))return r}return-1}_areClassBreaksConsecutive(){const e=this.classBreakInfos,t=e.length
for(let r=1;r<t;r++)if(e[r-1].maxValue!==e[r].minValue)return!1
return!0}}
Object(i.a)([Object(u.b)(v.a)],M.prototype,"backgroundFillSymbol",void 0),Object(i.a)([Object(u.b)({type:[j.a]})],M.prototype,"classBreakInfos",void 0),Object(i.a)([Object(h.a)("classBreakInfos")],M.prototype,"readClassBreakInfos",null),Object(i.a)([Object(f.a)("classBreakInfos")],M.prototype,"writeClassBreakInfos",null),Object(i.a)([Object(u.b)({type:String,json:{write:!0}})],M.prototype,"defaultLabel",void 0),Object(i.a)([Object(u.b)(v.b)],M.prototype,"defaultSymbol",void 0),Object(i.a)([Object(u.b)({type:String,json:{write:!0}})],M.prototype,"field",void 0),Object(i.a)([Object(p.a)("field")],M.prototype,"castField",null),Object(i.a)([Object(u.b)({type:Boolean})],M.prototype,"isMaxInclusive",void 0),Object(i.a)([Object(u.b)({type:w.a,json:{write:!0}})],M.prototype,"legendOptions",void 0),Object(i.a)([Object(u.b)({type:Number,readOnly:!0,value:null,json:{read:!1,write:{overridePolicy(){return 0!==this.classBreakInfos.length&&this._areClassBreaksConsecutive()?{enabled:!0}:{enabled:!1}}}}})],M.prototype,"minValue",null),Object(i.a)([Object(u.b)({type:String,json:{write:!0}})],M.prototype,"normalizationField",void 0),Object(i.a)([Object(u.b)({type:Number,cast:e=>Object(y.i)(e),json:{write:!0}})],M.prototype,"normalizationTotal",void 0),Object(i.a)([Object(u.b)({type:I.apiValues,value:null,json:{type:I.jsonValues,read:I.read,write:I.write}})],M.prototype,"normalizationType",null),Object(i.a)([Object(d.a)({classBreaks:"class-breaks"})],M.prototype,"type",void 0),Object(i.a)([Object(u.b)({type:String,json:{write:!0}})],M.prototype,"valueExpression",void 0),Object(i.a)([Object(u.b)({type:String,json:{write:!0}})],M.prototype,"valueExpressionTitle",void 0),M=n=Object(i.a)([Object(b.a)("esri.renderers.ClassBreaksRenderer")],M)
const F=M},1082:function(e,t,r){"use strict"
function n(e){return(t,r)=>{t[r]=e}}r.d(t,"a",(function(){return n}))},1084:function(e,t,r){"use strict"
r.d(t,"a",(function(){return $}))
var n=r(968),i=r(995),s=r(446),o=r(234),a=r(233),l=r(23),c=r(146),u=r(978),p=r(970),d=r(987),h=r(979),b=r(977),f=r(969),y=r(974),m=r(1143),g=r(971),O=r(989),j=r(1028),v=r(1001),w=r(1032),S=r(1020),x=r(1086),_=r(986),I=r(972)
r(445)
let T=class extends(Object(_.b)(I.a)){constructor(e){super(e),this.value=null,this.value2=null,this.value3=null}}
Object(n.a)([Object(p.b)(S.c)],T.prototype,"value",void 0),Object(n.a)([Object(p.b)(S.c)],T.prototype,"value2",void 0),Object(n.a)([Object(p.b)(S.c)],T.prototype,"value3",void 0),T=Object(n.a)([Object(f.a)("esri.renderers.support.UniqueValue")],T)
const M=T
let F=class extends(Object(_.b)(I.a)){constructor(e){super(e),this.description=null,this.label=null,this.symbol=null,this.values=null}castValues(e){if(null==e)return null
const t=typeof(e=Array.isArray(e)?e:[e])[0]
return"string"===t||"number"===t?e.map(e=>new M({value:e})):"object"===t?e[0]instanceof M?e:e.map(e=>new M(e)):null}}
Object(n.a)([Object(p.b)({type:String,json:{write:!0}})],F.prototype,"description",void 0),Object(n.a)([Object(p.b)({type:String,json:{write:!0}})],F.prototype,"label",void 0),Object(n.a)([Object(p.b)(S.b)],F.prototype,"symbol",void 0),Object(n.a)([Object(p.b)({type:[M],json:{type:[[String]],read:{reader:e=>e?e.map(e=>new M({value:e[0],value2:e[1],value3:e[2]})):null},write:{writer:(e,t)=>{const r=[]
for(const t of e){const e=[t.value,t.value2,t.value3].filter(l.l).map(e=>e.toString())
r.push(e)}t.values=r}}}})],F.prototype,"values",void 0),Object(n.a)([Object(d.a)("values")],F.prototype,"castValues",null),F=Object(n.a)([Object(f.a)("esri.renderers.support.UniqueValueClass")],F)
const E=F
let V=class extends(Object(_.b)(I.a)){constructor(e){super(e),this.heading=null,this.classes=null}}
Object(n.a)([Object(p.b)({type:String,json:{write:!0}})],V.prototype,"heading",void 0),Object(n.a)([Object(p.b)({type:[E],json:{write:!0}})],V.prototype,"classes",void 0),V=Object(n.a)([Object(f.a)("esri.renderers.support.UniqueValueGroup")],V)
const L=V
var k,A=r(1264),D=r(1010),R=r(1054),C=r(1181),P=r(1145)
const N="esri.renderers.UniqueValueRenderer",q=a.a.getLogger(N),z="uvInfos-watcher",U="uvGroups-watcher",G=Object(g.m)(A.a)
let B=k=class extends(Object(w.a)(v.a)){constructor(e){super(e),this._valueInfoMap={},this._isDefaultSymbolDerived=!1,this._isInfosSource=null,this.type="unique-value",this.backgroundFillSymbol=null,this.orderByClassesEnabled=!1,this.valueExpressionTitle=null,this.legendOptions=null,this.defaultLabel=null,this.portal=null,this.styleOrigin=null,this.diff={uniqueValueInfos(e,t){if(!e&&!t)return
if(!e||!t)return{type:"complete",oldValue:e,newValue:t}
let r=!1
const n={type:"collection",added:[],removed:[],changed:[],unchanged:[]}
for(let i=0;i<t.length;i++){const s=e.find(e=>e.value===t[i].value)
s?Object(m.a)(s,t[i])?(n.changed.push({type:"complete",oldValue:s,newValue:t[i]}),r=!0):n.unchanged.push({oldValue:s,newValue:t[i]}):(n.added.push(t[i]),r=!0)}for(let i=0;i<e.length;i++)t.find(t=>t.value===e[i].value)||(n.removed.push(e[i]),r=!0)
return r?n:void 0}},this._set("uniqueValueInfos",[]),this._set("uniqueValueGroups",[])}get _cache(){return{compiledFunc:null}}set field(e){this._set("field",e),this._updateFieldDelimiter(),this._updateUniqueValues()}castField(e){return null==e||"function"==typeof e?e:Object(g.l)(e)}writeField(e,t,r,n){"string"==typeof e?t[r]=e:n&&n.messages?n.messages.push(new s.a("property:unsupported","UniqueValueRenderer.field set to a function cannot be written to JSON")):q.error(".field: cannot write field to JSON since it's not a string value")}set field2(e){this._set("field2",e),this._updateFieldDelimiter(),this._updateUniqueValues()}set field3(e){this._set("field3",e),this._updateUniqueValues()}set valueExpression(e){this._set("valueExpression",e),this._updateUniqueValues()}set defaultSymbol(e){this._isDefaultSymbolDerived=!1,this._set("defaultSymbol",e)}set fieldDelimiter(e){this._set("fieldDelimiter",e),this._updateUniqueValues()}readPortal(e,t,r){return r.portal||j.a.getDefault()}readStyleOrigin(e,t,r){if(t.styleName)return Object.freeze({styleName:t.styleName})
if(t.styleUrl){const e=Object(R.d)(t.styleUrl,r)
return Object.freeze({styleUrl:e})}}writeStyleOrigin(e,t,r,n){e.styleName?t.styleName=e.styleName:e.styleUrl&&(t.styleUrl=Object(R.h)(e.styleUrl,n))}set uniqueValueGroups(e){this.styleOrigin?q.error("#uniqueValueGroups=","Cannot modify unique value groups of a UniqueValueRenderer created from a web style"):(this._set("uniqueValueGroups",e),this._updateInfosFromGroups(),this._isInfosSource=!1,this._watchUniqueValueGroups())}set uniqueValueInfos(e){this.styleOrigin?q.error("#uniqueValueInfos=","Cannot modify unique value infos of a UniqueValueRenderer created from a web style"):(this._set("uniqueValueInfos",e),this._updateValueInfoMap(),this._updateGroupsFromInfos(),this._isInfosSource=!0,this._watchUniqueValueInfos())}addUniqueValueInfo(e,t){var r
if(this.styleOrigin)return void q.error("#addUniqueValueInfo()","Cannot modify unique value infos of a UniqueValueRenderer created from a web style")
let n
n="object"==typeof e?G(e):new A.a({value:e,symbol:Object(i.a)(t)}),null!=(r=this.uniqueValueInfos)&&r.push(n),this._valueInfoMap[n.value]=n,this._updateGroupsFromInfos(),this._isInfosSource=!0,this._watchUniqueValueInfos()}removeUniqueValueInfo(e){if(this.styleOrigin)return void q.error("#removeUniqueValueInfo()","Cannot modify unique value infos of a UniqueValueRenderer created from a web style")
const t=this.uniqueValueInfos
if(t)for(let r=0;r<t.length;r++)if(t[r].value===e+""){delete this._valueInfoMap[e],t.splice(r,1)
break}this._updateGroupsFromInfos(),this._isInfosSource=!0,this._watchUniqueValueInfos()}async getUniqueValueInfo(e,t){let r=t
return this.valueExpression&&(Object(l.k)(t)||Object(l.k)(t.arcade))&&(r={...r,arcade:await Object(D.e)()}),this._getUniqueValueInfo(e,r)}getSymbol(e,t){if(this.valueExpression&&(Object(l.k)(t)||Object(l.k)(t.arcade)))return void q.error("#getSymbol()","Please use getSymbolAsync if valueExpression is used")
const r=this._getUniqueValueInfo(e,t)
return r&&r.symbol||this.defaultSymbol}async getSymbolAsync(e,t){let r=t
if(this.valueExpression&&(Object(l.k)(r)||Object(l.k)(r.arcade))){const e=await Object(D.e)(),{arcadeUtils:t}=e
t.hasGeometryOperations(this.valueExpression)&&await t.enableGeometryOperations(),r={...r,arcade:e}}const n=this._getUniqueValueInfo(e,r)
return n&&n.symbol||this.defaultSymbol}getSymbols(){const e=[]
for(const r of null!=(t=this.uniqueValueInfos)?t:[]){var t
r.symbol&&e.push(r.symbol)}return this.defaultSymbol&&e.push(this.defaultSymbol),e}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce((e,t)=>e+t.getAttributeHash(),"")}getMeshHash(){var e
const t=JSON.stringify(this.backgroundFillSymbol),r=JSON.stringify(this.defaultSymbol),n=null==(e=this.uniqueValueInfos)?void 0:e.reduce((e,t)=>e+t.getMeshHash(),"")
return`${t}.${r}.${n}.${this.field}.${this.field2}.${this.field3}.${this.fieldDelimiter}.${this.valueExpression}`}clone(){const e=new k({field:this.field,field2:this.field2,field3:this.field3,defaultLabel:this.defaultLabel,defaultSymbol:Object(o.a)(this.defaultSymbol),orderByClassesEnabled:this.orderByClassesEnabled,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,fieldDelimiter:this.fieldDelimiter,visualVariables:Object(o.a)(this.visualVariables),legendOptions:Object(o.a)(this.legendOptions),authoringInfo:this.authoringInfo&&this.authoringInfo.clone(),backgroundFillSymbol:Object(o.a)(this.backgroundFillSymbol)})
this._isDefaultSymbolDerived&&(e._isDefaultSymbolDerived=!0),e._set("portal",this.portal)
const t=Object(o.a)(this.uniqueValueInfos),r=Object(o.a)(this.uniqueValueGroups)
return this.styleOrigin&&(e._set("styleOrigin",Object.freeze(Object(o.a)(this.styleOrigin))),Object.freeze(t),Object.freeze(r)),e._set("uniqueValueInfos",t),e._updateValueInfoMap(),e._set("uniqueValueGroups",r),e._isInfosSource=this._isInfosSource,e._watchUniqueValueInfosAndGroups(),e}get arcadeRequired(){return this.arcadeRequiredForVisualVariables||!!this.valueExpression}async collectRequiredFields(e,t){const r=[this.collectVVRequiredFields(e,t),this.collectSymbolFields(e,t)]
await Promise.all(r)}async collectSymbolFields(e,t){const r=[...this.getSymbols().map(r=>r.collectRequiredFields(e,t)),Object(O.a)(e,t,this.valueExpression)]
Object(O.d)(e,t,this.field),Object(O.d)(e,t,this.field2),Object(O.d)(e,t,this.field3),await Promise.all(r)}populateFromStyle(){return Object(C.b)(this.styleOrigin,{portal:this.portal}).then(e=>{var t
const r=[]
return this._valueInfoMap={},e&&e.data&&Array.isArray(e.data.items)&&e.data.items.forEach(t=>{const n=new P.a({styleUrl:e.styleUrl,styleName:e.styleName,portal:this.portal,name:t.name})
this.defaultSymbol||t.name!==e.data.defaultItem||(this.defaultSymbol=n,this._isDefaultSymbolDerived=!0)
const i=new A.a({value:t.name,symbol:n})
r.push(i),this._valueInfoMap[t.name]=i}),this._set("uniqueValueInfos",Object.freeze(r)),this._updateGroupsFromInfos(!0),this._isInfosSource=null,this._watchUniqueValueInfos(),!this.defaultSymbol&&null!=(t=this.uniqueValueInfos)&&t.length&&(this.defaultSymbol=this.uniqueValueInfos[0].symbol,this._isDefaultSymbolDerived=!0),this})}_updateFieldDelimiter(){this.field&&this.field2&&!this.fieldDelimiter&&this._set("fieldDelimiter",",")}_updateUniqueValues(){null!=this._isInfosSource&&(this._isInfosSource?this._updateGroupsFromInfos():this._updateInfosFromGroups())}_updateValueInfoMap(){this._valueInfoMap={}
const{uniqueValueInfos:e}=this
if(e)for(const t of e)this._valueInfoMap[t.value+""]=t}_watchUniqueValueInfosAndGroups(){this._watchUniqueValueInfos(),this._watchUniqueValueGroups()}_watchUniqueValueInfos(){this.removeHandles(z)
const{uniqueValueInfos:e}=this
if(e){const t=[]
for(const r of e)t.push(Object(u.f)(()=>({symbol:r.symbol,value:r.value,label:r.label,description:r.description}),(e,t)=>{e!==t&&(this._updateGroupsFromInfos(),this._isInfosSource=!0)},{sync:!0}))
this.addHandles(t,z)}}_watchUniqueValueGroups(){this.removeHandles(U)
const{uniqueValueGroups:e}=this
if(e){const r=[]
for(const n of e){r.push(Object(u.f)(()=>({classes:n.classes}),(e,t)=>{e!==t&&(this._updateInfosFromGroups(),this._isInfosSource=!1)},{sync:!0}))
for(const e of null!=(t=n.classes)?t:[]){var t
r.push(Object(u.f)(()=>({symbol:e.symbol,values:e.values,label:e.label,description:e.description}),(e,t)=>{e!==t&&(this._updateInfosFromGroups(),this._isInfosSource=!1)},{sync:!0}))}}this.addHandles(r,U)}}_updateInfosFromGroups(){if(!this.uniqueValueGroups)return this._set("uniqueValueInfos",null),this._updateValueInfoMap(),void this._watchUniqueValueInfos()
const e=[],{field:t,field2:r,field3:n,fieldDelimiter:i,uniqueValueGroups:s,valueExpression:o}=this
if(!t&&!o)return this._set("uniqueValueInfos",e),this._updateValueInfoMap(),void this._watchUniqueValueInfos()
const a=!(!t||!r)
for(const t of s)for(const s of null!=(l=t.classes)?l:[]){var l
const{symbol:t,label:o,values:c,description:u}=s
for(const s of null!=c?c:[]){const{value:l,value2:c,value3:p}=s,d=[l]
r&&d.push(c),n&&d.push(p)
const h=a?d.join(i||""):d[0]
e.push(new A.a({symbol:t,label:o,value:h,description:u}))}}this._set("uniqueValueInfos",e),this._updateValueInfoMap(),this._watchUniqueValueInfos()}_updateGroupsFromInfos(e=!1){if(!this.uniqueValueInfos)return this._set("uniqueValueGroups",null),void this._watchUniqueValueGroups()
const{field:t,field2:r,valueExpression:n,fieldDelimiter:i,uniqueValueInfos:s}=this
if(!t&&!n||!s.length)return this._set("uniqueValueGroups",[]),void this._watchUniqueValueGroups()
const o=!(!t||!r),a=s.map(e=>{var t
const{symbol:r,label:n,value:s,description:a}=e,[l,c,u]=o?(null==s||null==(t=s.toString())?void 0:t.split(i||""))||[]:[s]
return new E({symbol:r,label:n,description:a,values:[new M({value:l,value2:c,value3:u})]})}),l=[new L({classes:a})]
e&&Object.freeze(l),this._set("uniqueValueGroups",l),this._watchUniqueValueGroups()}_getUniqueValueInfo(e,t){return this.valueExpression?this._getUnqiueValueInfoForExpression(e,t):this._getUnqiueValueInfoForFields(e)}_getUnqiueValueInfoForExpression(e,t){const{viewingMode:r,scale:n,spatialReference:i,arcade:s}=Object(l.v)(t,{})
let o=this._cache.compiledFunc
const a=Object(l.u)(s).arcadeUtils
if(!o){const e=a.createSyntaxTree(this.valueExpression)
o=a.createFunction(e),this._cache.compiledFunc=o}const c=a.executeFunction(o,a.createExecContext(e,a.getViewInfo({viewingMode:r,scale:n,spatialReference:i})))
return this._valueInfoMap[c+""]}_getUnqiueValueInfoForFields(e){const t=this.field,r=e.attributes
let n
if("function"!=typeof t&&this.field2){const e=this.field2,i=this.field3,s=[]
t&&s.push(r[t]),e&&s.push(r[e]),i&&s.push(r[i]),n=s.join(this.fieldDelimiter||"")}else"function"==typeof t?n=t(e):t&&(n=r[t])
return this._valueInfoMap[n+""]}static fromPortalStyle(e,t){const r=new k(t&&t.properties)
r._set("styleOrigin",Object.freeze({styleName:e})),r._set("portal",t&&t.portal||j.a.getDefault())
const n=r.populateFromStyle()
return n.catch(t=>{q.error(`#fromPortalStyle('${e}'[, ...])`,"Failed to create unique value renderer from style name",t)}),n}static fromStyleUrl(e,t){const r=new k(t&&t.properties)
r._set("styleOrigin",Object.freeze({styleUrl:e}))
const n=r.populateFromStyle()
return n.catch(t=>{q.error(`#fromStyleUrl('${e}'[, ...])`,"Failed to create unique value renderer from style URL",t)}),n}}
Object(n.a)([Object(p.b)({readOnly:!0})],B.prototype,"_cache",null),Object(n.a)([Object(h.a)({uniqueValue:"unique-value"})],B.prototype,"type",void 0),Object(n.a)([Object(p.b)(S.a)],B.prototype,"backgroundFillSymbol",void 0),Object(n.a)([Object(p.b)({value:null,json:{type:String,read:{source:"field1"},write:{target:"field1"}}})],B.prototype,"field",null),Object(n.a)([Object(d.a)("field")],B.prototype,"castField",null),Object(n.a)([Object(y.a)("field")],B.prototype,"writeField",null),Object(n.a)([Object(p.b)({type:String,value:null,json:{write:!0}})],B.prototype,"field2",null),Object(n.a)([Object(p.b)({type:String,value:null,json:{write:!0}})],B.prototype,"field3",null),Object(n.a)([Object(p.b)({type:Boolean,json:{name:"drawInClassOrder",default:!1,write:!0,origins:{"web-scene":{write:!1}}}})],B.prototype,"orderByClassesEnabled",void 0),Object(n.a)([Object(p.b)({type:String,value:null,json:{write:!0}})],B.prototype,"valueExpression",null),Object(n.a)([Object(p.b)({type:String,json:{write:!0}})],B.prototype,"valueExpressionTitle",void 0),Object(n.a)([Object(p.b)({type:x.a,json:{write:!0}})],B.prototype,"legendOptions",void 0),Object(n.a)([Object(p.b)({type:String,json:{write:!0}})],B.prototype,"defaultLabel",void 0),Object(n.a)([Object(p.b)(Object(c.a)({...S.b},{json:{write:{overridePolicy(){return{enabled:!this._isDefaultSymbolDerived}}},origins:{"web-scene":{write:{overridePolicy(){return{enabled:!this._isDefaultSymbolDerived}}}}}}}))],B.prototype,"defaultSymbol",null),Object(n.a)([Object(p.b)({type:String,value:null,json:{write:!0}})],B.prototype,"fieldDelimiter",null),Object(n.a)([Object(p.b)({type:j.a,readOnly:!0})],B.prototype,"portal",void 0),Object(n.a)([Object(b.a)("portal",["styleName"])],B.prototype,"readPortal",null),Object(n.a)([Object(p.b)({readOnly:!0,json:{write:{enabled:!1,overridePolicy:()=>({enabled:!0})}}})],B.prototype,"styleOrigin",void 0),Object(n.a)([Object(b.a)("styleOrigin",["styleName","styleUrl"])],B.prototype,"readStyleOrigin",null),Object(n.a)([Object(y.a)("styleOrigin",{styleName:{type:String},styleUrl:{type:String}})],B.prototype,"writeStyleOrigin",null),Object(n.a)([Object(p.b)({type:[L],json:{read:{source:["uniqueValueGroups","uniqueValueInfos"],reader:(e,t,r)=>(t.uniqueValueGroups||function(e){const{field1:t,field2:r,field3:n,fieldDelimiter:i,uniqueValueInfos:s,valueExpression:o}=e,a=!(!t||!r)
return[{classes:(null!=s?s:[]).map(e=>{var s
const{symbol:l,label:c,value:u,description:p}=e,[d,h,b]=a?(null==u||null==(s=u.toString())?void 0:s.split(i||""))||[]:[u],f=[]
return(t||o)&&f.push(d),r&&f.push(h),n&&f.push(b),{symbol:l,label:c,values:[f],description:p}})}]}(t)).map(e=>L.fromJSON(e,r))},write:{overridePolicy(){return this.styleOrigin?{enabled:!1}:{enabled:!0}}}}})],B.prototype,"uniqueValueGroups",null),Object(n.a)([Object(p.b)({type:[A.a],json:{read:!1,write:{overridePolicy(){return this.styleOrigin?{enabled:!1}:{enabled:!0}}}}})],B.prototype,"uniqueValueInfos",null),B=k=Object(n.a)([Object(f.a)(N)],B)
const $=B},1086:function(e,t,r){"use strict"
r.d(t,"a",(function(){return l}))
var n,i=r(968),s=r(972),o=r(970),a=(r(971),r(445),r(969))
let l=n=class extends s.a{constructor(){super(...arguments),this.title=null}clone(){return new n({title:this.title})}}
Object(i.a)([Object(o.b)({type:String,json:{write:!0}})],l.prototype,"title",void 0),l=n=Object(i.a)([Object(a.a)("esri.renderers.support.LegendOptions")],l)},1087:function(e,t,r){"use strict"
r.d(t,"a",(function(){return i}))
var n=r(1165)
class i extends n.a{notify(){const e=this._observers
if(e&&e.length>0){const t=e.slice()
for(const e of t)e.onInvalidated(),e.onCommitted()}}}},1090:function(e,t,r){"use strict"
function n(e){}function i(e){return()=>e}r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return i})),r(235)},1092:function(e,t,r){"use strict"
r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return l}))
var n=r(1044),i=r(1045),s=r(1103)
function o(e,t){return l(e,null,t)}const a=Object(i.b)({types:s.a})
function l(e,t,r){return e?e&&(e.styleName||e.styleUrl)&&"uniqueValue"!==e.type?(r&&r.messages&&r.messages.push(new n.a("renderer:unsupported","Only UniqueValueRenderer can be referenced from a web style, but found '"+e.type+"'",{definition:e,context:r})),null):a(e,t,r):null}},1093:function(e,t,r){"use strict"
r.d(t,"a",(function(){return s}))
var n=r(997),i=r(1052)
const s={inches:Object(n.e)(1,"meters","inches"),feet:Object(n.e)(1,"meters","feet"),"us-feet":Object(n.e)(1,"meters","us-feet"),yards:Object(n.e)(1,"meters","yards"),miles:Object(n.e)(1,"meters","miles"),"nautical-miles":Object(n.e)(1,"meters","nautical-miles"),millimeters:Object(n.e)(1,"meters","millimeters"),centimeters:Object(n.e)(1,"meters","centimeters"),decimeters:Object(n.e)(1,"meters","decimeters"),meters:Object(n.e)(1,"meters","meters"),kilometers:Object(n.e)(1,"meters","kilometers"),"decimal-degrees":1/Object(n.m)(1,"meters",i.a.radius)}},1094:function(e,t,r){"use strict"
r.d(t,"a",(function(){return l}))
var n=r(968),i=r(972),s=r(970),o=(r(971),r(445),r(969))
let a=class extends i.a{constructor(e){super(e),this.type=null}}
Object(n.a)([Object(s.b)({readOnly:!0,json:{read:!1,write:!0}})],a.prototype,"type",void 0),a=Object(n.a)([Object(o.a)("esri.rest.support.ColorRamp")],a)
const l=a},1097:function(e,t,r){"use strict"
r.d(t,"a",(function(){return h}))
var n,i=r(968),s=r(234),o=r(970),a=(r(971),r(979)),l=r(969),c=r(1001),u=r(1032),p=r(1020)
let d=n=class extends(Object(u.a)(c.a)){constructor(e){super(e),this.description=null,this.label=null,this.symbol=null,this.type="simple"}async collectRequiredFields(e,t){await Promise.all([this.collectSymbolFields(e,t),this.collectVVRequiredFields(e,t)])}async collectSymbolFields(e,t){await Promise.all(this.getSymbols().map(r=>r.collectRequiredFields(e,t)))}getSymbol(e,t){return this.symbol}async getSymbolAsync(e,t){return this.symbol}getSymbols(){return this.symbol?[this.symbol]:[]}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce((e,t)=>e+t.getAttributeHash(),"")}getMeshHash(){return this.getSymbols().reduce((e,t)=>e+JSON.stringify(t),"")}get arcadeRequired(){return this.arcadeRequiredForVisualVariables}clone(){return new n({description:this.description,label:this.label,symbol:this.symbol&&this.symbol.clone(),visualVariables:Object(s.a)(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}}
Object(i.a)([Object(o.b)({type:String,json:{write:!0}})],d.prototype,"description",void 0),Object(i.a)([Object(o.b)({type:String,json:{write:!0}})],d.prototype,"label",void 0),Object(i.a)([Object(o.b)(p.b)],d.prototype,"symbol",void 0),Object(i.a)([Object(a.a)({simple:"simple"})],d.prototype,"type",void 0),d=n=Object(i.a)([Object(l.a)("esri.renderers.SimpleRenderer")],d)
const h=d},1098:function(e,t,r){"use strict"
r.d(t,"a",(function(){return b}))
var n,i=r(968),s=r(234),o=r(970),a=(r(971),r(969)),l=r(974),c=r(989),u=r(1001),p=r(1032),d=r(1254)
let h=n=class extends(Object(p.a)(u.a)){constructor(e){super(e),this.config=null,this.fieldMap=null,this.scaleExpression=null,this.scaleExpressionTitle=null,this.url=null,this.type="dictionary"}get _loader(){return new d.DictionaryLoader(this.url,this.config,this.fieldMap)}writeData(e,t){e&&(t.scalingExpressionInfo={expression:e,returnType:"number"})}writeVisualVariables(e,t,r,n){(null==n?void 0:n.origin)||super.writeVisualVariables(e,t,r,n)}clone(){return new n({config:Object(s.a)(this.config),scaleExpression:this.scaleExpression,scaleExpressionTitle:this.scaleExpressionTitle,fieldMap:Object(s.a)(this.fieldMap),url:Object(s.a)(this.url),visualVariables:Object(s.a)(this.visualVariables)})}async getSymbolAsync(e,t){return this._loader.getSymbolAsync(e,t)}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t),this.scaleExpression&&await Object(c.a)(e,t,this.scaleExpression)
for(const r in this.fieldMap){const n=this.fieldMap[r]
t.has(n)&&e.add(n)}}get arcadeRequired(){return!0}getSymbol(){return null}getSymbols(){return[]}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce((e,t)=>e+t.getAttributeHash(),"")}getMeshHash(){return`${this.url}-${JSON.stringify(this.fieldMap)}`}getSymbolFields(){return this._loader.getSymbolFields()}}
Object(i.a)([Object(o.b)({type:d.DictionaryLoader})],h.prototype,"_loader",null),Object(i.a)([Object(o.b)({type:Object,json:{read:{source:"configuration"},write:{target:"configuration"}}})],h.prototype,"config",void 0),Object(i.a)([Object(o.b)({type:Object,json:{write:!0}})],h.prototype,"fieldMap",void 0),Object(i.a)([Object(o.b)({type:String,json:{read:{source:"scalingExpressionInfo.expression"},write:!0}})],h.prototype,"scaleExpression",void 0),Object(i.a)([Object(l.a)("scaleExpression")],h.prototype,"writeData",null),Object(i.a)([Object(o.b)({type:String,json:{read:{source:"scalingExpressionInfo.title"},write:{target:"scalingExpressionInfo.title",overridePolicy(e){return{enabled:!!e&&!!this.scaleExpression}}}}})],h.prototype,"scaleExpressionTitle",void 0),Object(i.a)([Object(o.b)({type:String,json:{write:!0}})],h.prototype,"url",void 0),Object(i.a)([Object(l.a)("visualVariables")],h.prototype,"writeVisualVariables",null),h=n=Object(i.a)([Object(a.a)("esri.renderers.DictionaryRenderer")],h)
const b=h},1100:function(e,t,r){"use strict"
r.d(t,"a",(function(){return w}))
var n=r(968),i=r(990),s=(r(995),r(986)),o=r(23),a=r(980),l=r(970),c=(r(971),r(445),r(979)),u=r(969),p=r(989),d=r(1001),h=r(1032),b=r(1180),f=r(972)
let y=class extends(Object(s.b)(f.a)){constructor(){super(...arguments),this.color=new i.a([0,0,0,0]),this.label=null,this.threshold=0}}
Object(n.a)([Object(l.b)({type:i.a,json:{write:!0}})],y.prototype,"color",void 0),Object(n.a)([Object(l.b)({type:String,json:{write:!0}})],y.prototype,"label",void 0),Object(n.a)([Object(l.b)({type:Number,range:{min:0,max:1},json:{write:!0}})],y.prototype,"threshold",void 0),y=Object(n.a)([Object(u.a)("esri.renderers.support.OthersCategory")],y)
let m=class extends(Object(s.b)(f.a)){constructor(){super(...arguments),this.title=null}}
Object(n.a)([Object(l.b)({type:String,json:{write:!0}})],m.prototype,"title",void 0),m=Object(n.a)([Object(u.a)("esri.renderers.support.PieChartLegendOptions")],m)
var g=r(1078),O=r(1073),j=r(1065)
let v=class extends(Object(h.a)(Object(s.b)(d.a))){constructor(e){super(e),this.attributes=null,this.backgroundFillSymbol=null,this.defaultColor=new i.a([0,0,0,0]),this.defaultLabel=null,this.holePercentage=0,this.othersCategory=new y,this.legendOptions=null,this.outline=null,this.size=12,this.type="pie-chart"}getSymbol(){var e
return new g.a({size:this.size?this.size/2+((null==(e=this.outline)?void 0:e.width)||0):0})}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol(),this.backgroundFillSymbol].filter(o.l)}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce((e,t)=>e+t.getAttributeHash(),"")}getMeshHash(){return this.getSymbols().reduce((e,t)=>e+JSON.stringify(t),"")}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t)
for(const r of this.attributes)r.valueExpression&&await Object(p.a)(e,t,r.valueExpression),r.field&&e.add(r.field)}}
Object(n.a)([Object(l.b)({type:[b.a],json:{write:!0}})],v.prototype,"attributes",void 0),Object(n.a)([Object(l.b)({type:O.a,json:{default:null,write:!0}})],v.prototype,"backgroundFillSymbol",void 0),Object(n.a)([Object(l.b)({type:i.a,json:{write:!0}})],v.prototype,"defaultColor",void 0),Object(n.a)([Object(l.b)({type:String,json:{write:!0}})],v.prototype,"defaultLabel",void 0),Object(n.a)([Object(l.b)({type:Number,range:{min:0,max:1},json:{write:!0}})],v.prototype,"holePercentage",void 0),Object(n.a)([Object(l.b)({type:y,json:{write:!0}})],v.prototype,"othersCategory",void 0),Object(n.a)([Object(l.b)({type:m,json:{write:!0}})],v.prototype,"legendOptions",void 0),Object(n.a)([Object(l.b)({type:j.a,json:{default:null,write:!0}})],v.prototype,"outline",void 0),Object(n.a)([Object(l.b)({type:Number,cast:a.k,json:{write:!0}})],v.prototype,"size",void 0),Object(n.a)([Object(c.a)({pieChart:"pie-chart"})],v.prototype,"type",void 0),v=Object(n.a)([Object(u.a)("esri.renderers.PieChartRenderer")],v)
const w=v},1101:function(e,t,r){"use strict"
r.d(t,"a",(function(){return v}))
var n,i=r(968),s=r(990),o=r(234),a=r(970),l=(r(971),r(979)),c=r(969),u=r(989),p=r(1001),d=r(1032),h=r(1180),b=r(972)
r(445)
let f=n=class extends b.a{constructor(){super(...arguments),this.unit=null}clone(){return new n({unit:this.unit})}}
Object(i.a)([Object(a.b)({type:String,json:{write:!0}})],f.prototype,"unit",void 0),f=n=Object(i.a)([Object(c.a)("esri.renderers.support.DotDensityLegendOptions")],f)
const y=f
var m,g=r(1073),O=r(1065)
let j=m=class extends(Object(d.a)(p.a)){constructor(e){super(e),this.attributes=null,this.backgroundColor=new s.a([0,0,0,0]),this.dotBlendingEnabled=!0,this.dotShape="square",this.dotSize=1,this.legendOptions=null,this.outline=new O.a,this.dotValue=null,this.referenceScale=null,this.seed=1,this.type="dot-density"}calculateDotValue(e){if(null==this.referenceScale)return this.dotValue
const t=e/this.referenceScale*this.dotValue
return t<1?1:t}getSymbol(){return new g.a({outline:this.outline})}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol()]}getAttributeHash(){var e,t
return null!=(e=null==(t=this.attributes)?void 0:t.reduce((e,t)=>e+t.getAttributeHash(),""))?e:""}getMeshHash(){return JSON.stringify(this.outline)}clone(){return new m({attributes:Object(o.a)(this.attributes),backgroundColor:Object(o.a)(this.backgroundColor),dotBlendingEnabled:Object(o.a)(this.dotBlendingEnabled),dotShape:Object(o.a)(this.dotShape),dotSize:Object(o.a)(this.dotSize),dotValue:Object(o.a)(this.dotValue),legendOptions:Object(o.a)(this.legendOptions),outline:Object(o.a)(this.outline),referenceScale:Object(o.a)(this.referenceScale),visualVariables:Object(o.a)(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}getControllerHash(){var e
return`${null==(e=this.attributes)?void 0:e.map(e=>e.field||e.valueExpression||"")}-${this.outline&&JSON.stringify(this.outline.toJSON())||""}`}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t)
for(const n of null!=(r=this.attributes)?r:[]){var r
n.valueExpression&&await Object(u.a)(e,t,n.valueExpression),n.field&&e.add(n.field)}}}
Object(i.a)([Object(a.b)({type:[h.a],json:{write:!0}})],j.prototype,"attributes",void 0),Object(i.a)([Object(a.b)({type:s.a,json:{write:!0}})],j.prototype,"backgroundColor",void 0),Object(i.a)([Object(a.b)({type:Boolean,json:{write:!0}})],j.prototype,"dotBlendingEnabled",void 0),Object(i.a)([Object(a.b)({type:String,json:{write:!1}})],j.prototype,"dotShape",void 0),Object(i.a)([Object(a.b)({type:Number,json:{write:!0}})],j.prototype,"dotSize",void 0),Object(i.a)([Object(a.b)({type:y,json:{write:!0}})],j.prototype,"legendOptions",void 0),Object(i.a)([Object(a.b)({type:O.a,json:{default:null,write:!0}})],j.prototype,"outline",void 0),Object(i.a)([Object(a.b)({type:Number,json:{write:!0}})],j.prototype,"dotValue",void 0),Object(i.a)([Object(a.b)({type:Number,json:{write:!0}})],j.prototype,"referenceScale",void 0),Object(i.a)([Object(a.b)({type:Number,json:{write:!0}})],j.prototype,"seed",void 0),Object(i.a)([Object(l.a)({dotDensity:"dot-density"})],j.prototype,"type",void 0),j=m=Object(i.a)([Object(c.a)("esri.renderers.DotDensityRenderer")],j)
const v=j},1102:function(e,t,r){"use strict"
r.d(t,"a",(function(){return M}))
var n=r(968),i=r(990),s=(r(995),r(1095)),o=r(234),a=r(233),l=r(1024),c=r(980),u=r(970),p=(r(971),r(999)),d=r(979),h=r(969),b=r(989),f=r(1001),y=r(1113),m=r(1245),g=r(986),O=r(972)
r(445)
let j=class extends(Object(g.b)(O.a)){constructor(){super(...arguments),this.minLabel=null,this.maxLabel=null,this.title=null}}
Object(n.a)([Object(u.b)({type:String,json:{write:!0}})],j.prototype,"minLabel",void 0),Object(n.a)([Object(u.b)({type:String,json:{write:!0}})],j.prototype,"maxLabel",void 0),Object(n.a)([Object(u.b)({type:String,json:{write:!0}})],j.prototype,"title",void 0),j=Object(n.a)([Object(h.a)("esri.renderers.support.HeatmapLegendOptions")],j)
var v,w=r(1203),S=r(1078)
const x="esri.renderers.HeatmapRenderer",_=a.a.getLogger(x)
function I(e){if(null!=e){const{maxDensity:t,minDensity:r,radius:n}=e
if(null!=t||null!=r||null!=n){const{blurRadius:t,maxPixelIntensity:r,minPixelIntensity:n,...i}=e
return i}}return e}let T=v=class extends f.a{constructor(e){super(e),this.authoringInfo=null,this.colorStops=[new m.a({ratio:0,color:new i.a("rgba(255, 140, 0, 0)")}),new m.a({ratio:.75,color:new i.a("rgba(255, 140, 0, 1)")}),new m.a({ratio:.9,color:new i.a("rgba(255, 0,   0, 1)")})],this.field=null,this.fieldOffset=0,this.legendOptions=null,this.maxDensity=.04,this.minDensity=0,this.radius=18,this.referenceScale=0,this.type="heatmap",this.valueExpression=null,this.valueExpressionTitle=null,this._warnedProps={blurRadius:!1,maxPixelIntensity:!1,minPixelIntensity:!1}}normalizeCtorArgs(e){return I(e)}get blurRadius(){return Object(w.h)(this.radius)}set blurRadius(e){const t=this.maxPixelIntensity,r=this.minPixelIntensity
this._set("radius",Object(w.f)(e)),this._warnAboutDeprecatedGaussianBlurProp("blurRadius","radius"),this._set("maxDensity",t*this._pixelIntensityToDensity),this._set("minDensity",r*this._pixelIntensityToDensity)}get maxPixelIntensity(){return this.maxDensity/this._pixelIntensityToDensity}set maxPixelIntensity(e){this._set("maxDensity",e*this._pixelIntensityToDensity),this._warnAboutDeprecatedGaussianBlurProp("maxPixelIntensity","maxDensity")}get minPixelIntensity(){return this.minDensity/this._pixelIntensityToDensity}set minPixelIntensity(e){this._set("minDensity",e*this._pixelIntensityToDensity),this._warnAboutDeprecatedGaussianBlurProp("minPixelIntensity","minDensity")}get _pixelIntensityToDensity(){return 24/(w.a**2*this.blurRadius**4)}_warnAboutDeprecatedGaussianBlurProp(e,t){this._warnedProps[e]||"user"===Object(p.a)(this).getDefaultOrigin()&&(this._warnedProps[e]=!0,Object(l.b)(()=>{Object(s.d)(_,e,{replacement:`${String(t)} (suggested value: ${this._get(t)})`,version:"4.24"})}))}read(e,t){e=I(e),super.read(e,t)}getSymbol(){return new S.a}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol()]}async collectRequiredFields(e,t){const r=this.field,n=this.valueExpression
r&&"string"==typeof r&&await Object(b.d)(e,t,r),n&&"string"==typeof n&&await Object(b.a)(e,t,n)}getAttributeHash(){return null}getMeshHash(){return`${JSON.stringify(this.colorStops)}.${this.blurRadius}.${this.field}`}clone(){return new v({authoringInfo:this.authoringInfo&&this.authoringInfo.clone(),colorStops:Object(o.a)(this.colorStops),field:this.field,legendOptions:Object(o.a)(this.legendOptions),maxDensity:this.maxDensity,minDensity:this.minDensity,radius:this.radius,referenceScale:this.referenceScale,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}}
Object(n.a)([Object(u.b)({type:y.a,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],T.prototype,"authoringInfo",void 0),Object(n.a)([Object(u.b)({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],T.prototype,"blurRadius",null),Object(n.a)([Object(u.b)({type:[m.a],json:{write:!0}})],T.prototype,"colorStops",void 0),Object(n.a)([Object(u.b)({type:String,json:{write:!0}})],T.prototype,"field",void 0),Object(n.a)([Object(u.b)({type:Number,json:{write:{overridePolicy:(e,t,r)=>({enabled:null==r})},origins:{"web-scene":{write:!1}}}})],T.prototype,"fieldOffset",void 0),Object(n.a)([Object(u.b)({type:j,json:{write:!0}})],T.prototype,"legendOptions",void 0),Object(n.a)([Object(u.b)({type:Number,json:{write:!0}})],T.prototype,"maxDensity",void 0),Object(n.a)([Object(u.b)({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],T.prototype,"maxPixelIntensity",null),Object(n.a)([Object(u.b)({type:Number,json:{write:!0}})],T.prototype,"minDensity",void 0),Object(n.a)([Object(u.b)({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],T.prototype,"minPixelIntensity",null),Object(n.a)([Object(u.b)({type:Number,cast:c.k,json:{write:!0}})],T.prototype,"radius",void 0),Object(n.a)([Object(u.b)({type:Number,range:{min:0},json:{default:0,write:!0}})],T.prototype,"referenceScale",void 0),Object(n.a)([Object(d.a)({heatmap:"heatmap"})],T.prototype,"type",void 0),Object(n.a)([Object(u.b)({type:String,json:{write:!0,origins:{"web-document":{write:!1},"portal-item":{write:!1}}}})],T.prototype,"valueExpression",void 0),Object(n.a)([Object(u.b)({type:String})],T.prototype,"valueExpressionTitle",void 0),Object(n.a)([Object(u.b)({readOnly:!0})],T.prototype,"_pixelIntensityToDensity",null),T=v=Object(n.a)([Object(h.a)(x)],T)
const M=T},1103:function(e,t,r){"use strict"
r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}))
var n=r(1081),i=r(1098),s=r(1101),o=r(1102),a=r(1100),l=r(1001),c=r(1097),u=r(1084)
const p={key:"type",base:l.a,typeMap:{heatmap:o.a,simple:c.a,"unique-value":u.a,"class-breaks":n.a,"dot-density":s.a,dictionary:i.a,"pie-chart":a.a},errorContext:"renderer"},d={key:"type",base:l.a,typeMap:{simple:c.a,"unique-value":u.a,"class-breaks":n.a,heatmap:o.a},errorContext:"renderer"}},1106:function(e,t,r){"use strict"
r.d(t,"a",(function(){return L}))
var n,i=r(968),s=r(976),o=r(972),a=r(970),l=r(987),c=r(979),u=r(977),p=r(969),d=r(971),h=r(1045),b=r(1050),f=r(1278),y=(r(982),r(445),r(769)),m=r(1036)
let g=n=class extends o.a{constructor(e){super(e),this.type="query-table"}clone(){var e
const{workspaceId:t,query:r,oidFields:i,spatialReference:s,geometryType:o}=this,a={workspaceId:t,query:r,oidFields:i,spatialReference:null!=(e=null==s?void 0:s.clone())?e:void 0,geometryType:o}
return new n(a)}}
var O
Object(i.a)([Object(c.a)({queryTable:"query-table"})],g.prototype,"type",void 0),Object(i.a)([Object(a.b)({type:String,json:{write:!0}})],g.prototype,"workspaceId",void 0),Object(i.a)([Object(a.b)({type:String,json:{write:!0}})],g.prototype,"query",void 0),Object(i.a)([Object(a.b)({type:String,json:{write:!0}})],g.prototype,"oidFields",void 0),Object(i.a)([Object(a.b)({type:y.default,json:{write:!0}})],g.prototype,"spatialReference",void 0),Object(i.a)([Object(c.a)(m.a)],g.prototype,"geometryType",void 0),g=n=Object(i.a)([Object(p.a)("esri.layers.support.source.QueryTableDataSource")],g)
let j=O=class extends o.a{constructor(e){super(e),this.type="raster"}clone(){const{workspaceId:e,dataSourceName:t}=this
return new O({workspaceId:e,dataSourceName:t})}}
var v
Object(i.a)([Object(c.a)({raster:"raster"})],j.prototype,"type",void 0),Object(i.a)([Object(a.b)({type:String,json:{write:!0}})],j.prototype,"dataSourceName",void 0),Object(i.a)([Object(a.b)({type:String,json:{write:!0}})],j.prototype,"workspaceId",void 0),j=O=Object(i.a)([Object(p.a)("esri.layers.support.source.RasterDataSource")],j)
let w=v=class extends o.a{constructor(e){super(e),this.type="table"}clone(){const{workspaceId:e,gdbVersion:t,dataSourceName:r}=this
return new v({workspaceId:e,gdbVersion:t,dataSourceName:r})}}
var S,x
Object(i.a)([Object(c.a)({table:"table"})],w.prototype,"type",void 0),Object(i.a)([Object(a.b)({type:String,json:{write:!0}})],w.prototype,"workspaceId",void 0),Object(i.a)([Object(a.b)({type:String,json:{write:!0}})],w.prototype,"gdbVersion",void 0),Object(i.a)([Object(a.b)({type:String,json:{write:!0}})],w.prototype,"dataSourceName",void 0),w=v=Object(i.a)([Object(p.a)("esri.layers.support.source.TableDataSource")],w)
const _=Object(s.b)()({esriLeftInnerJoin:"left-inner-join",esriLeftOuterJoin:"left-outer-join"})
let I=S=class extends o.a{constructor(e){super(e),this.type="join-table"}readLeftTableSource(e,t,r){return M()(e,t,r)}castLeftTableSource(e){return Object(d.k)(E(),e)}readRightTableSource(e,t,r){return M()(e,t,r)}castRightTableSource(e){return Object(d.k)(E(),e)}clone(){var e,t
const{leftTableKey:r,rightTableKey:n,leftTableSource:i,rightTableSource:s,joinType:o}=this,a={leftTableKey:r,rightTableKey:n,leftTableSource:null!=(e=null==i?void 0:i.clone())?e:void 0,rightTableSource:null!=(t=null==s?void 0:s.clone())?t:void 0,joinType:o}
return new S(a)}}
Object(i.a)([Object(c.a)({joinTable:"join-table"})],I.prototype,"type",void 0),Object(i.a)([Object(a.b)({type:String,json:{write:!0}})],I.prototype,"leftTableKey",void 0),Object(i.a)([Object(a.b)({type:String,json:{write:!0}})],I.prototype,"rightTableKey",void 0),Object(i.a)([Object(a.b)({json:{write:!0}})],I.prototype,"leftTableSource",void 0),Object(i.a)([Object(u.a)("leftTableSource")],I.prototype,"readLeftTableSource",null),Object(i.a)([Object(l.a)("leftTableSource")],I.prototype,"castLeftTableSource",null),Object(i.a)([Object(a.b)({json:{write:!0}})],I.prototype,"rightTableSource",void 0),Object(i.a)([Object(u.a)("rightTableSource")],I.prototype,"readRightTableSource",null),Object(i.a)([Object(l.a)("rightTableSource")],I.prototype,"castRightTableSource",null),Object(i.a)([Object(c.a)(_)],I.prototype,"joinType",void 0),I=S=Object(i.a)([Object(p.a)("esri.layers.support.source.JoinTableDataSource")],I)
let T=null
function M(){return T||(T=Object(h.b)({types:E()})),T}let F=null
function E(){return F||(F={key:"type",base:null,typeMap:{"data-layer":L,"map-layer":f.a}}),F}const V={key:"type",base:null,typeMap:{"join-table":I,"query-table":g,raster:j,table:w}}
let L=x=class extends o.a{constructor(e){super(e),this.type="data-layer"}clone(){const{fields:e,dataSource:t}=this
return new x({fields:e,dataSource:t})}}
Object(i.a)([Object(c.a)({dataLayer:"data-layer"})],L.prototype,"type",void 0),Object(i.a)([Object(a.b)({type:[b.a],json:{write:!0}})],L.prototype,"fields",void 0),Object(i.a)([Object(a.b)({types:V,json:{write:!0}})],L.prototype,"dataSource",void 0),L=x=Object(i.a)([Object(p.a)("esri.layers.support.source.DataLayerSource")],L),L.from=Object(d.m)(L)},1107:function(e,t,r){"use strict"
r.r(t),r.d(t,"getAllSizes",(function(){return x})),r.d(t,"getColor",(function(){return b})),r.d(t,"getOpacity",(function(){return f})),r.d(t,"getRotationAngle",(function(){return y})),r.d(t,"getSize",(function(){return m})),r.d(t,"getSizeForValue",(function(){return j})),r.d(t,"getSizeFromNumberOrVariable",(function(){return g})),r.d(t,"getSizeRangeAtScale",(function(){return v})),r.d(t,"getVisualVariableValues",(function(){return w})),r.d(t,"viewScaleRE",(function(){return h}))
var n=r(990),i=r(772),s=r(1090),o=r(233),a=r(23),l=r(1093),c=r(1108)
const u=o.a.getLogger("esri.renderers.visualVariables.support.visualVariableUtils"),p=new i.default,d=Math.PI,h=/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i
function b(e,t,r){const i="visualVariables"in e&&e.visualVariables?e.visualVariables.find(e=>"color"===e.type):e
if(!i)return
if("esri.renderers.visualVariables.ColorVariable"!==i.declaredClass)return void u.warn("The visualVariable should be an instance of esri.renderers.visualVariables.ColorVariable")
const s="number"==typeof t,o=s?null:t,l=o&&o.attributes
let c=s?t:null
const p=i.field,{ipData:d,hasExpression:h}=i.cache
let b=i.cache.compiledFunc
if(!p&&!h){const e=i.stops
return e&&e[0]&&e[0].color}if("number"!=typeof c)if(h){if(Object(a.k)(r)||Object(a.k)(r.arcade))return void u.error("Use of arcade expressions requires an arcade context")
const e={viewingMode:r.viewingMode,scale:r.scale,spatialReference:r.spatialReference},t=r.arcade.arcadeUtils,n=t.getViewInfo(e),s=t.createExecContext(o,n)
if(!b){const e=t.createSyntaxTree(i.valueExpression)
b=t.createFunction(e),i.cache.compiledFunc=b}c=t.executeFunction(b,s)}else l&&(c=l[p])
const f=i.normalizationField,y=null!=l&&null!=f?parseFloat(l[f]):void 0
if(null!=c&&(!f||s||!isNaN(y)&&0!==y)){isNaN(y)||s||(c/=y)
const e=S(c,d)
if(e){const t=e[0],s=e[1],o=t===s?i.stops[t].color:n.a.blendColors(i.stops[t].color,i.stops[s].color,e[2],Object(a.l)(r)?r.color:void 0)
return new n.a(o)}}}function f(e,t,r){const n="visualVariables"in e&&e.visualVariables?e.visualVariables.find(e=>"opacity"===e.type):e
if(!n)return
if("esri.renderers.visualVariables.OpacityVariable"!==n.declaredClass)return void u.warn("The visualVariable should be an instance of esri.renderers.visualVariables.OpacityVariable")
const i="number"==typeof t,s=i?null:t,o=s&&s.attributes
let l=i?t:null
const c=n.field,{ipData:p,hasExpression:d}=n.cache
let h=n.cache.compiledFunc
if(!c&&!d){const e=n.stops
return e&&e[0]&&e[0].opacity}if("number"!=typeof l)if(d){if(Object(a.k)(r)||Object(a.k)(r.arcade))return void u.error("Use of arcade expressions requires an arcade context")
const e={viewingMode:r.viewingMode,scale:r.scale,spatialReference:r.spatialReference},t=r.arcade.arcadeUtils,i=t.getViewInfo(e),o=t.createExecContext(s,i)
if(!h){const e=t.createSyntaxTree(n.valueExpression)
h=t.createFunction(e),n.cache.compiledFunc=h}l=t.executeFunction(h,o)}else o&&(l=o[c])
const b=n.normalizationField,f=null!=o&&null!=b?parseFloat(o[b]):void 0
if(null!=l&&(!b||i||!isNaN(f)&&0!==f)){isNaN(f)||i||(l/=f)
const e=S(l,p)
if(e){const t=e[0],r=e[1]
if(t===r)return n.stops[t].opacity
{const i=n.stops[t].opacity
return i+(n.stops[r].opacity-i)*e[2]}}}}function y(e,t,r){const n="visualVariables"in e&&e.visualVariables?e.visualVariables.find(e=>"rotation"===e.type):e
if(!n)return
if("esri.renderers.visualVariables.RotationVariable"!==n.declaredClass)return void u.warn("The visualVariable should be an instance of esri.renderers.visualVariables.RotationVariable")
const i=n.axis||"heading",s="heading"===i&&"arithmetic"===n.rotationType?90:0,o="heading"===i&&"arithmetic"===n.rotationType?-1:1,l="number"==typeof t?null:t,c=l&&l.attributes,p=n.field,{hasExpression:d}=n.cache
let h=n.cache.compiledFunc,b=0
if(!p&&!d)return b
if(d){if(Object(a.k)(r)||Object(a.k)(r.arcade))return void u.error("Use of arcade expressions requires an arcade context")
const e={viewingMode:r.viewingMode,scale:r.scale,spatialReference:r.spatialReference},t=r.arcade.arcadeUtils,i=t.getViewInfo(e),s=t.createExecContext(l,i)
if(!h){const e=t.createSyntaxTree(n.valueExpression)
h=t.createFunction(e),n.cache.compiledFunc=h}b=t.executeFunction(h,s)}else c&&(b=c[p]||0)
return b="number"!=typeof b||isNaN(b)?null:s+o*b,b}function m(e,t,r){const n="visualVariables"in e&&e.visualVariables?e.visualVariables.find(e=>"size"===e.type):e
if(!n)return
if("esri.renderers.visualVariables.SizeVariable"!==n.declaredClass)return void u.warn("The visualVariable should be an instance of esri.renderers.visualVariables.SizeVariable")
const i=j(function(e,t,r){const n="number"==typeof t,i=n?null:t,s=i&&i.attributes
let o=n?t:null
const{isScaleDriven:l}=e.cache
let p=e.cache.compiledFunc
if(l){const t=Object(a.l)(r)?r.scale:void 0,n=Object(a.l)(r)?r.view:void 0
o=null==t||"3d"===n?function(e){let t=null,r=null
const n=e.stops
return n?(t=n[0].value,r=n[n.length-1].value):(t=e.minDataValue||0,r=e.maxDataValue||0),(t+r)/2}(e):t}else if(!n)switch(e.inputValueType){case c.a.Expression:{if(Object(a.k)(r)||Object(a.k)(r.arcade))return void u.error("Use of arcade expressions requires an arcade context")
const t={viewingMode:r.viewingMode,scale:r.scale,spatialReference:r.spatialReference},n=r.arcade.arcadeUtils,s=n.getViewInfo(t),l=n.createExecContext(i,s)
if(!p){const t=n.createSyntaxTree(e.valueExpression)
p=n.createFunction(t),e.cache.compiledFunc=p}o=n.executeFunction(p,l)
break}case c.a.Field:s&&(o=s[e.field])
break
case c.a.Unknown:o=null}if(!Object(c.f)(o))return null
if(n||!e.normalizationField)return o
const d=s?parseFloat(s[e.normalizationField]):null
return Object(c.f)(d)&&0!==d?o/d:null}(n,t,r),n,t,r,n.cache.ipData)
return null==i||isNaN(i)?0:i}function g(e,t,r){return null==e?null:Object(c.e)(e)?m(e,t,r):Object(c.f)(e)?e:null}function O(e,t,r){return Object(c.f)(r)&&e>r?r:Object(c.f)(t)&&e<t?t:e}function j(e,t,r,n,i){switch(t.transformationType){case c.b.Additive:return function(e,t,r,n){var i
return e+(null!=(i=g(t.minSize,r,n)||t.minDataValue)?i:0)}(e,t,r,n)
case c.b.Constant:return function(e,t,r){const n=e.stops
let i=n&&n.length&&n[0].size
return null==i&&(i=e.minSize),g(i,t,r)}(t,r,n)
case c.b.ClampedLinear:return function(e,t,r,n){const i=(e-t.minDataValue)/(t.maxDataValue-t.minDataValue),s=g(t.minSize,r,n),o=g(t.maxSize,r,n),l=Object(a.l)(n)?n.shape:void 0
if(e<=t.minDataValue)return s
if(e>=t.maxDataValue)return o
if(null==s||null==o)return null
if("area"===t.scaleBy&&l){const e="circle"===l,t=e?d*(s/2)**2:s*s,r=t+i*((e?d*(o/2)**2:o*o)-t)
return e?2*Math.sqrt(r/d):Math.sqrt(r)}return s+i*(o-s)}(e,t,r,n)
case c.b.Proportional:return function(e,t,r,n){const i=Object(a.l)(n)?n.shape:void 0,s=e/t.minDataValue,o=g(t.minSize,r,n),l=g(t.maxSize,r,n)
let c=null
return c="circle"===i?2*Math.sqrt(s*(o/2)**2):"square"===i||"diamond"===i||"image"===i?Math.sqrt(s*o**2):s*o,O(c,o,l)}(e,t,r,n)
case c.b.Stops:return function(e,t,r,n,i){var s
const[o,a,l]=S(e,i)
if(o===a)return g(null==(s=t.stops)?void 0:s[o].size,r,n)
{var c,u
const e=g(null==(c=t.stops)?void 0:c[o].size,r,n)
return e+(g(null==(u=t.stops)?void 0:u[a].size,r,n)-e)*l}}(e,t,r,n,i)
case c.b.RealWorldSize:return function(e,t,r,n){const i=(Object(a.l)(n)&&n.resolution?n.resolution:1)*l.a[t.valueUnit],s=g(t.minSize,r,n),o=g(t.maxSize,r,n),{valueRepresentation:c}=t
let u=null
return u="area"===c?2*Math.sqrt(e/d)/i:"radius"===c||"distance"===c?2*e/i:e/i,O(u,s,o)}(e,t,r,n)
case c.b.Identity:return e
case c.b.Unknown:return null}}function v(e,t,r){const{isScaleDriven:n}=e.cache
if(!(n&&"3d"===r||t))return null
const i={scale:t,view:r}
let s=g(e.minSize,p,i),o=g(e.maxSize,p,i)
if(null!=s||null!=o){if(s>o){const e=o
o=s,s=e}return{minSize:s,maxSize:o}}}function w(e,t,r){if(!e.visualVariables)return
const n=[],i=[],s=[],o=[],a=[]
for(const t of e.visualVariables)switch(t.type){case"color":i.push(t)
break
case"opacity":s.push(t)
break
case"rotation":a.push(t)
break
case"size":o.push(t)}return i.forEach(e=>{const i=b(e,t,r)
n.push({variable:e,value:i})}),s.forEach(e=>{const i=f(e,t,r)
n.push({variable:e,value:i})}),a.forEach(e=>{const i=y(e,t,r)
n.push({variable:e,value:i})}),o.forEach(e=>{const i=m(e,t,r)
n.push({variable:e,value:i})}),n.filter(e=>null!=e.value)}function S(e,t){if(!t)return
let r=0,n=t.length-1
return t.some((t,i)=>e<t?(n=i,!0):(r=i,!1)),[r,n,(e-t[r])/(t[n]-t[r])]}function x(e,t,r){const n=["proportional","proportional","proportional"]
for(const i of e){const e=i.useSymbolValue?"symbol-value":m(i,t,r)
switch(i.axis){case"width":n[0]=e
break
case"depth":n[1]=e
break
case"height":n[2]=e
break
case"width-and-depth":n[0]=e,n[1]=e
break
case"all":case void 0:case null:n[0]=e,n[1]=e,n[2]=e
break
default:Object(s.a)(i.axis)}}return n}},1108:function(e,t,r){"use strict"
var n,i
function s(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}function o(e){return null!=e&&!isNaN(e)&&isFinite(e)}function a(e){return e.valueExpression?n.Expression:e.field&&"string"==typeof e.field?n.Field:n.Unknown}function l(e,t){const r=t||a(e),s=e.valueUnit||"unknown"
return r===n.Unknown?i.Constant:e.stops?i.Stops:null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?i.ClampedLinear:"unknown"===s?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?i.Proportional:i.Additive:i.Identity:i.RealWorldSize}r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return a})),r.d(t,"d",(function(){return l})),r.d(t,"e",(function(){return s})),r.d(t,"f",(function(){return o})),function(e){e.Unknown="unknown",e.Expression="expression",e.Field="field"}(n||(n={})),function(e){e.Unknown="unknown",e.Stops="stops",e.ClampedLinear="clamped-linear",e.Proportional="proportional",e.Additive="additive",e.Constant="constant",e.Identity="identity",e.RealWorldSize="real-world-size"}(i||(i={}))},1111:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return i}))
var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{}
function i(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}}).call(this,r(50))},1113:function(e,t,r){"use strict"
r.d(t,"a",(function(){return L}))
var n,i=r(968),s=r(976),o=r(972),a=r(234),l=r(970),c=r(971),u=r(977),p=r(969)
r(445)
let d=n=class extends o.a{constructor(e){super(e),this.minValue=0,this.maxValue=0}clone(){return new n({minValue:this.minValue,maxValue:this.maxValue})}}
var h
Object(i.a)([Object(l.b)({type:Number,json:{write:!0}})],d.prototype,"minValue",void 0),Object(i.a)([Object(l.b)({type:Number,json:{write:!0}})],d.prototype,"maxValue",void 0),d=n=Object(i.a)([Object(p.a)("esri.renderer.support.AuthoringInfoClassBreakInfo")],d)
let b=h=class extends o.a{constructor(e){super(e),this.field="",this.normalizationField="",this.label="",this.classBreakInfos=[]}clone(){return new h({field:this.field,normalizationField:this.normalizationField,label:this.label,classBreakInfos:Object(a.a)(this.classBreakInfos)})}}
Object(i.a)([Object(l.b)({type:String,json:{write:!0}})],b.prototype,"field",void 0),Object(i.a)([Object(l.b)({type:String,json:{write:!0}})],b.prototype,"normalizationField",void 0),Object(i.a)([Object(l.b)({type:String,json:{write:!0}})],b.prototype,"label",void 0),Object(i.a)([Object(l.b)({type:[d],json:{write:!0}})],b.prototype,"classBreakInfos",void 0),b=h=Object(i.a)([Object(p.a)("esri.renderers.support.AuthoringInfoFieldInfo")],b)
var f,y=r(987)
const m=new s.a({percentTotal:"percent-of-total",ratio:"ratio",percent:"percent"}),g=new s.a({sizeInfo:"size",colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation"}),O={key:e=>"number"==typeof e?"number":"string",typeMap:{number:Number,string:String},base:null},j=["high-to-low","above-and-below","centered-on","extremes"],v=[...new Set(["high-to-low","above-and-below","centered-on","extremes","90-10","above","below","high-to-low","above-and-below","90-10","above","below"])],w=["seconds","minutes","hours","days","months","years"]
let S=f=class extends o.a{constructor(e){super(e),this.endTime=null,this.field=null,this.maxSliderValue=null,this.minSliderValue=null,this.startTime=null,this.type=null,this.units=null}castEndTime(e){return"string"==typeof e||"number"==typeof e?e:null}castStartTime(e){return"string"==typeof e||"number"==typeof e?e:null}get style(){return"color"===this.type?this._get("style"):null}set style(e){this._set("style",e)}get theme(){return"color"===this.type||"size"===this.type?this._get("theme")||"high-to-low":null}set theme(e){this._set("theme",e)}clone(){return new f({endTime:this.endTime,field:this.field,maxSliderValue:this.maxSliderValue,minSliderValue:this.minSliderValue,startTime:this.startTime,style:this.style,theme:this.theme,type:this.type,units:this.units})}}
Object(i.a)([Object(l.b)({types:O,json:{write:!0}})],S.prototype,"endTime",void 0),Object(i.a)([Object(y.a)("endTime")],S.prototype,"castEndTime",null),Object(i.a)([Object(l.b)({type:String,json:{write:!0}})],S.prototype,"field",void 0),Object(i.a)([Object(l.b)({type:Number,json:{write:!0}})],S.prototype,"maxSliderValue",void 0),Object(i.a)([Object(l.b)({type:Number,json:{write:!0}})],S.prototype,"minSliderValue",void 0),Object(i.a)([Object(l.b)({types:O,json:{write:!0}})],S.prototype,"startTime",void 0),Object(i.a)([Object(y.a)("startTime")],S.prototype,"castStartTime",null),Object(i.a)([Object(l.b)({type:m.apiValues,value:null,json:{type:m.jsonValues,read:m.read,write:m.write}})],S.prototype,"style",null),Object(i.a)([Object(l.b)({type:v,value:null,json:{type:v,origins:{"web-scene":{type:j,write:{writer:(e,t)=>{j.includes(e)&&(t.theme=e)}}}},write:!0}})],S.prototype,"theme",null),Object(i.a)([Object(l.b)({type:g.apiValues,json:{type:g.jsonValues,read:g.read,write:g.write}})],S.prototype,"type",void 0),Object(i.a)([Object(l.b)({type:w,json:{type:w,write:!0}})],S.prototype,"units",void 0),S=f=Object(i.a)([Object(p.a)("esri.renderers.support.AuthoringInfoVisualVariable")],S)
const x=S
var _,I=r(1236)
const T=new s.a({esriClassifyDefinedInterval:"defined-interval",esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation"}),M=new s.a({pieChart:"pie-chart",classedSize:"class-breaks-size",classedColor:"class-breaks-color",univariateColorSize:"univariate-color-size",relationship:"relationship",predominance:"predominance",dotDensity:"dot-density",flow:"flow"}),F=new s.a({classedSize:"class-breaks-size",classedColor:"class-breaks-color",univariateColorSize:"univariate-color-size",relationship:"relationship",predominance:"predominance",dotDensity:"dot-density"}),E=["inches","feet","yards","miles","nautical-miles","millimeters","centimeters","decimeters","meters","kilometers","decimal-degrees"]
let V=_=class extends o.a{constructor(e){super(e),this.colorRamp=null,this.fadeRatio=null,this.isAutoGenerated=!1,this.lengthUnit=null,this.maxSliderValue=null,this.minSliderValue=null,this.visualVariables=null}get classificationMethod(){const e=this._get("classificationMethod"),t=this.type
return t&&"relationship"!==t?"class-breaks-size"===t||"class-breaks-color"===t?e||"manual":null:e}set classificationMethod(e){this._set("classificationMethod",e)}readColorRamp(e){return e?Object(I.a)(e):void 0}get fields(){return this.type&&"predominance"!==this.type?null:this._get("fields")}set fields(e){this._set("fields",e)}get field1(){return this.type&&"relationship"!==this.type?null:this._get("field1")}set field1(e){this._set("field1",e)}get field2(){return this.type&&"relationship"!==this.type?null:this._get("field2")}set field2(e){this._set("field2",e)}get flowTheme(){return"flow"===this.type?this._get("flowTheme"):null}set flowTheme(e){this._set("flowTheme",e)}get focus(){return this.type&&"relationship"!==this.type?null:this._get("focus")}set focus(e){this._set("focus",e)}get numClasses(){return this.type&&"relationship"!==this.type?null:this._get("numClasses")}set numClasses(e){this._set("numClasses",e)}get statistics(){return"univariate-color-size"===this.type&&"above-and-below"===this.univariateTheme?this._get("statistics"):null}set statistics(e){this._set("statistics",e)}get standardDeviationInterval(){const e=this.type
return e&&"relationship"!==e&&"class-breaks-size"!==e&&"class-breaks-color"!==e||this.classificationMethod&&"standard-deviation"!==this.classificationMethod?null:this._get("standardDeviationInterval")}set standardDeviationInterval(e){this._set("standardDeviationInterval",e)}get type(){return this._get("type")}set type(e){let t=e
"classed-size"===e?t="class-breaks-size":"classed-color"===e&&(t="class-breaks-color"),this._set("type",t)}get univariateSymbolStyle(){return"univariate-color-size"===this.type&&"above-and-below"===this.univariateTheme?this._get("univariateSymbolStyle"):null}set univariateSymbolStyle(e){this._set("univariateSymbolStyle",e)}get univariateTheme(){return"univariate-color-size"===this.type?this._get("univariateTheme"):null}set univariateTheme(e){this._set("univariateTheme",e)}clone(){return new _({classificationMethod:this.classificationMethod,colorRamp:Object(a.a)(this.colorRamp),fadeRatio:Object(a.a)(this.fadeRatio),fields:this.fields&&this.fields.slice(0),field1:Object(a.a)(this.field1),field2:Object(a.a)(this.field2),isAutoGenerated:this.isAutoGenerated,focus:this.focus,numClasses:this.numClasses,maxSliderValue:this.maxSliderValue,minSliderValue:this.minSliderValue,lengthUnit:this.lengthUnit,statistics:this.statistics,standardDeviationInterval:this.standardDeviationInterval,type:this.type,visualVariables:this.visualVariables&&this.visualVariables.map(e=>e.clone()),univariateSymbolStyle:this.univariateSymbolStyle,univariateTheme:this.univariateTheme,flowTheme:this.flowTheme})}}
Object(i.a)([Object(l.b)({type:T.apiValues,value:null,json:{type:T.jsonValues,read:T.read,write:T.write,origins:{"web-document":{default:"manual",type:T.jsonValues,read:T.read,write:T.write}}}})],V.prototype,"classificationMethod",null),Object(i.a)([Object(l.b)({types:I.b,json:{write:!0}})],V.prototype,"colorRamp",void 0),Object(i.a)([Object(u.a)("colorRamp")],V.prototype,"readColorRamp",null),Object(i.a)([Object(l.b)({json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],V.prototype,"fadeRatio",void 0),Object(i.a)([Object(l.b)({type:[String],value:null,json:{write:!0}})],V.prototype,"fields",null),Object(i.a)([Object(l.b)({type:b,value:null,json:{write:!0}})],V.prototype,"field1",null),Object(i.a)([Object(l.b)({type:b,value:null,json:{write:!0}})],V.prototype,"field2",null),Object(i.a)([Object(l.b)({type:["flow-line","wave-front"],value:null,json:{write:!0,origins:{"web-scene":{write:!1}}}})],V.prototype,"flowTheme",null),Object(i.a)([Object(l.b)({type:["HH","HL","LH","LL"],value:null,json:{write:!0}})],V.prototype,"focus",null),Object(i.a)([Object(l.b)({type:Boolean,json:{write:!0,default:!1,origins:{"web-scene":{write:!1}}}})],V.prototype,"isAutoGenerated",void 0),Object(i.a)([Object(l.b)({type:Number,value:null,json:{type:c.a,write:!0}})],V.prototype,"numClasses",null),Object(i.a)([Object(l.b)({type:E,json:{type:E,read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],V.prototype,"lengthUnit",void 0),Object(i.a)([Object(l.b)({type:Number,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],V.prototype,"maxSliderValue",void 0),Object(i.a)([Object(l.b)({type:Number,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],V.prototype,"minSliderValue",void 0),Object(i.a)([Object(l.b)({type:Object,value:null,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],V.prototype,"statistics",null),Object(i.a)([Object(l.b)({type:[.25,.33,.5,1],value:null,json:{type:[.25,.33,.5,1],write:!0}})],V.prototype,"standardDeviationInterval",null),Object(i.a)([Object(l.b)({type:M.apiValues,value:null,json:{type:M.jsonValues,read:M.read,write:M.write,origins:{"web-scene":{type:F.jsonValues,write:{writer:F.write,overridePolicy:e=>({enabled:"flow"!==e})}}}}})],V.prototype,"type",null),Object(i.a)([Object(l.b)({type:[x],json:{write:!0}})],V.prototype,"visualVariables",void 0),Object(i.a)([Object(l.b)({type:["caret","circle-caret","arrow","circle-arrow","plus-minus","circle-plus-minus","square","circle","triangle","happy-sad","thumb","custom"],value:null,json:{write:!0,origins:{"web-scene":{write:!1}}}})],V.prototype,"univariateSymbolStyle",null),Object(i.a)([Object(l.b)({type:["high-to-low","above-and-below","above","below","90-10"],value:null,json:{write:!0,origins:{"web-scene":{write:!1}}}})],V.prototype,"univariateTheme",null),V=_=Object(i.a)([Object(p.a)("esri.renderers.support.AuthoringInfo")],V)
const L=V},1114:function(e,t,r){"use strict"
var n
r.d(t,"a",(function(){return n})),function(e){e[e.ADD=1]="ADD",e[e.REMOVE=2]="REMOVE",e[e.MOVE=4]="MOVE"}(n||(n={}))},1122:function(e,t,r){"use strict"
r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return s}))
var n=r(1131)
function i(e,t){const r=e.length>t.length?e:t
return(e.length>t.length?t:e).every((e,t)=>e.type===r[t].type)}function s(e,t){const r=e.length>t.length?e:t,i=e.length>t.length?t:e
for(let e=i.length;e<r.length;e++)i.push(Object(n.g)(r[e]))}function o(e){const t=e[0]
return!!t&&"type"in t}},1123:function(e,t,r){"use strict"
r.d(t,"a",(function(){return h}))
var n,i=r(968),s=r(976),o=r(972),a=r(234),l=r(970),c=(r(971),r(969)),u=r(974)
const p=new s.a({count:"count",sum:"sum",min:"min",max:"max",avg:"avg",stddev:"stddev",var:"var",exceedslimit:"exceedslimit",percentile_cont:"percentile-continuous",percentile_disc:"percentile-discrete",EnvelopeAggregate:"envelope-aggregate",CentroidAggregate:"centroid-aggregate",ConvexHullAggregate:"convex-hull-aggregate"})
let d=n=class extends o.a{constructor(e){super(e),this.maxPointCount=void 0,this.maxRecordCount=void 0,this.maxVertexCount=void 0,this.onStatisticField=null,this.outStatisticFieldName=null,this.statisticType=null,this.statisticParameters=null}writeStatisticParameters(e,t){"percentile-continuous"!==this.statisticType&&"percentile-discrete"!==this.statisticType||(t.statisticParameters=Object(a.a)(e))}clone(){return new n({maxPointCount:this.maxPointCount,maxRecordCount:this.maxRecordCount,maxVertexCount:this.maxVertexCount,onStatisticField:this.onStatisticField,outStatisticFieldName:this.outStatisticFieldName,statisticType:this.statisticType,statisticParameters:Object(a.a)(this.statisticParameters)})}}
Object(i.a)([Object(l.b)({type:Number,json:{write:!0}})],d.prototype,"maxPointCount",void 0),Object(i.a)([Object(l.b)({type:Number,json:{write:!0}})],d.prototype,"maxRecordCount",void 0),Object(i.a)([Object(l.b)({type:Number,json:{write:!0}})],d.prototype,"maxVertexCount",void 0),Object(i.a)([Object(l.b)({type:String,json:{write:!0}})],d.prototype,"onStatisticField",void 0),Object(i.a)([Object(l.b)({type:String,json:{write:!0}})],d.prototype,"outStatisticFieldName",void 0),Object(i.a)([Object(l.b)({type:String,json:{read:{source:"statisticType",reader:p.read},write:{target:"statisticType",writer:p.write}}})],d.prototype,"statisticType",void 0),Object(i.a)([Object(l.b)({type:Object})],d.prototype,"statisticParameters",void 0),Object(i.a)([Object(u.a)("statisticParameters")],d.prototype,"writeStatisticParameters",null),d=n=Object(i.a)([Object(c.a)("esri.rest.support.StatisticDefinition")],d)
const h=d},1125:function(e,t,r){"use strict"
r.d(t,"a",(function(){return d}))
var n,i=r(968),s=r(234),o=r(970),a=(r(971),r(979)),l=r(969),c=r(1246),u=r(1033)
let p=n=class extends u.a{constructor(e){super(e),this.codedValues=null,this.type="coded-value"}getName(e){let t=null
if(this.codedValues){const r=String(e)
this.codedValues.some(e=>(String(e.code)===r&&(t=e.name),!!t))}return t}clone(){return new n({codedValues:Object(s.a)(this.codedValues),name:this.name})}}
Object(i.a)([Object(o.b)({type:[c.a],json:{write:!0}})],p.prototype,"codedValues",void 0),Object(i.a)([Object(a.a)({codedValue:"coded-value"})],p.prototype,"type",void 0),p=n=Object(i.a)([Object(l.a)("esri.layers.support.CodedValueDomain")],p)
const d=p},1126:function(e,t,r){"use strict"
r.d(t,"a",(function(){return c}))
var n,i=r(968),s=(r(233),r(971),r(445),r(446),r(235),r(979)),o=r(969),a=r(1033)
let l=n=class extends a.a{constructor(e){super(e),this.type="inherited"}clone(){return new n}}
Object(i.a)([Object(s.a)({inherited:"inherited"})],l.prototype,"type",void 0),l=n=Object(i.a)([Object(o.a)("esri.layers.support.InheritedDomain")],l)
const c=l},1127:function(e,t,r){"use strict"
r.d(t,"a",(function(){return u}))
var n,i=r(968),s=r(970),o=(r(971),r(445),r(979)),a=r(969),l=r(1033)
let c=n=class extends l.a{constructor(e){super(e),this.maxValue=null,this.minValue=null,this.type="range"}clone(){return new n({maxValue:this.maxValue,minValue:this.minValue,name:this.name})}}
Object(i.a)([Object(s.b)({type:Number,json:{type:[Number],read:{source:"range",reader:(e,t)=>t.range&&t.range[1]},write:{enabled:!1,overridePolicy(){return{enabled:null!=this.maxValue&&null==this.minValue}},target:"range",writer(e,t,r){t[r]=[this.minValue||0,e]}}}})],c.prototype,"maxValue",void 0),Object(i.a)([Object(s.b)({type:Number,json:{type:[Number],read:{source:"range",reader:(e,t)=>t.range&&t.range[0]},write:{target:"range",writer(e,t,r){t[r]=[e,this.maxValue||0]}}}})],c.prototype,"minValue",void 0),Object(i.a)([Object(o.a)({range:"range"})],c.prototype,"type",void 0),c=n=Object(i.a)([Object(a.a)("esri.layers.support.RangeDomain")],c)
const u=c},1131:function(e,t,r){"use strict"
r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return u})),r.d(t,"e",(function(){return p})),r.d(t,"f",(function(){return d})),r.d(t,"g",(function(){return f}))
var n=r(1162),i=r(980),s=r(1213),o=r(1029)
class a{constructor(e,t,r){this.strength=e,this.radius=t,this.threshold=r,this.type="bloom"}interpolate(e,t,r){this.strength=h(e.strength,t.strength,r),this.radius=h(e.radius,t.radius,r),this.threshold=h(e.threshold,t.threshold,r)}clone(){return new a(this.strength,this.radius,this.threshold)}toJSON(){return{type:"bloom",radius:b(this.radius),strength:this.strength,threshold:this.threshold}}}class l{constructor(e){this.radius=e,this.type="blur"}interpolate(e,t,r){this.radius=Math.round(h(e.radius,t.radius,r))}clone(){return new l(this.radius)}toJSON(){return{type:"blur",radius:b(this.radius)}}}class c{constructor(e,t){this.type=e,this.amount=t,"invert"!==this.type&&"grayscale"!==this.type&&"sepia"!==this.type||(this.amount=Math.min(this.amount,1))}get colorMatrix(){return this._colorMatrix||this._updateMatrix(),this._colorMatrix}interpolate(e,t,r){this.amount=h(e.amount,t.amount,r),this._updateMatrix()}clone(){return new c(this.type,this.amount)}toJSON(){return{type:this.type,amount:this.amount}}_updateMatrix(){const e=this._colorMatrix||Object(s.a)()
switch(this.type){case"brightness":this._colorMatrix=((e,t)=>{const r=Object(o.w)(e,t,0,0,0,0,t,0,0,0,0,t,0,0,0,0,1)
return Object(o.x)(r,r)})(e,this.amount)
break
case"contrast":this._colorMatrix=((e,t)=>{const r=Object(o.w)(e,t,0,0,.5-.5*t,0,t,0,.5-.5*t,0,0,t,.5-.5*t,0,0,0,1)
return Object(o.x)(r,r)})(e,this.amount)
break
case"grayscale":this._colorMatrix=((e,t)=>{const r=1-t,n=Object(o.w)(e,.2126+.7874*r,.7152-.7152*r,.0722-.0722*r,0,.2126-.2126*r,.7152+.2848*r,.0722-.0722*r,0,.2126-.2126*r,.7152-.7152*r,.0722+.9278*r,0,0,0,0,1)
return Object(o.x)(n,n)})(e,this.amount)
break
case"invert":this._colorMatrix=((e,t)=>{const r=1-2*t,n=Object(o.w)(e,r,0,0,t,0,r,0,t,0,0,r,t,0,0,0,1)
return Object(o.x)(n,n)})(e,this.amount)
break
case"saturate":this._colorMatrix=((e,t)=>{const r=Object(o.w)(e,.213+.787*t,.715-.715*t,.072-.072*t,0,.213-.213*t,.715+.285*t,.072-.072*t,0,.213-.213*t,.715-.715*t,.072+.928*t,0,0,0,0,1)
return Object(o.x)(r,r)})(e,this.amount)
break
case"sepia":this._colorMatrix=((e,t)=>{const r=1-t,n=Object(o.w)(e,.393+.607*r,.769-.769*r,.189-.189*r,0,.349-.349*r,.686+.314*r,.168-.168*r,0,.272-.272*r,.534-.534*r,.131+.869*r,0,0,0,0,1)
return Object(o.x)(n,n)})(e,this.amount)}}}class u{constructor(e,t,r,n){this.offsetX=e,this.offsetY=t,this.blurRadius=r,this.color=n,this.type="drop-shadow"}interpolate(e,t,r){this.offsetX=h(e.offsetX,t.offsetX,r),this.offsetY=h(e.offsetY,t.offsetY,r),this.blurRadius=h(e.blurRadius,t.blurRadius,r),this.color[0]=Math.round(h(e.color[0],t.color[0],r)),this.color[1]=Math.round(h(e.color[1],t.color[1],r)),this.color[2]=Math.round(h(e.color[2],t.color[2],r)),this.color[3]=h(e.color[3],t.color[3],r)}clone(){return new u(this.offsetX,this.offsetY,this.blurRadius,[...this.color])}toJSON(){const e=[...this.color]
return e[3]*=255,{type:"drop-shadow",xoffset:b(this.offsetX),yoffset:b(this.offsetY),blurRadius:b(this.blurRadius),color:e}}}class p{constructor(e){this.angle=e,this.type="hue-rotate"}get colorMatrix(){return this._colorMatrix||this._updateMatrix(),this._colorMatrix}interpolate(e,t,r){this.angle=h(e.angle,t.angle,r),this._updateMatrix()}clone(){return new p(this.angle)}toJSON(){return{type:"hue-rotate",angle:this.angle}}_updateMatrix(){const e=this._colorMatrix||Object(s.a)()
this._colorMatrix=((e,t)=>{const r=Math.sin(t*Math.PI/180),n=Math.cos(t*Math.PI/180),i=Object(o.w)(e,.213+.787*n-.213*r,.715-.715*n-.715*r,.072-.072*n+.928*r,0,.213-.213*n+.143*r,.715+.285*n+.14*r,.072-.072*n-.283*r,0,.213-.213*n-.787*r,.715-.715*n+.715*r,.072+.928*n+.072*r,0,0,0,0,1)
return Object(o.x)(i,i)})(e,this.angle)}}class d{constructor(e){this.amount=e,this.type="opacity",this.amount=Math.min(this.amount,1)}interpolate(e,t,r){this.amount=h(e.amount,t.amount,r)}clone(){return new d(this.amount)}toJSON(){return{type:"opacity",amount:this.amount}}}function h(e,t,r){return e+(t-e)*r}function b(e){return Math.round(1e3*Object(i.i)(e))/1e3}function f(e){switch(e.type){case"grayscale":case"sepia":case"invert":return new c(e.type,0)
case"saturate":case"brightness":case"contrast":return new c(e.type,1)
case"opacity":return new d(1)
case"hue-rotate":return new p(0)
case"blur":return new l(0)
case"drop-shadow":return new u(0,0,0,[...Object(n.a)("transparent")])
case"bloom":return new a(0,0,1)}}},1132:function(e,t,r){"use strict"
r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return a})),r(235)
var n=r(1125),i=r(1033),s=r(1126),o=r(1127)
const a={key:"type",base:i.a,typeMap:{range:o.a,"coded-value":n.a,inherited:s.a}}
function l(e){if(!e||!e.type)return null
switch(e.type){case"range":return o.a.fromJSON(e)
case"codedValue":return n.a.fromJSON(e)
case"inherited":return s.a.fromJSON(e)}return null}},1134:function(e,t,r){"use strict"
r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return l}))
var n=r(446),i=r(146),s=r(1212),o=r(1122)
function a(e,t,r){try{return function(e){if(!e||0===e.length)return null
if(function(e){const t=e[0]
return!!t&&"scale"in t}(e)){const t=[]
for(const r of e)t.push({scale:r.scale,value:c(r.value)})
return t}return c(e)}(e)}catch(e){var n
null==r||null==(n=r.messages)||n.push(e)}return null}function l(e,t,r,n){try{const n=function(e){const t=Object(s.a)(e)
return t?Object(o.b)(t)?t.map(e=>e.toJSON()):t.map(({scale:e,effects:t})=>({scale:e,value:t.map(e=>e.toJSON())})):null}(e)
Object(i.c)(r,n,t)}catch(e){n.messages&&n.messages.push(e)}}function c(e){if(!e||!e.length)return""
const t=[]
for(const r of e){let e=[]
switch(r.type){case"grayscale":case"sepia":case"saturate":case"invert":case"brightness":case"contrast":case"opacity":e=[u(r,"amount")]
break
case"blur":e=[u(r,"radius","pt")]
break
case"hue-rotate":e=[u(r,"angle","deg")]
break
case"drop-shadow":e=[u(r,"xoffset","pt"),u(r,"yoffset","pt"),u(r,"blurRadius","pt"),p(r,"color")]
break
case"bloom":e=[u(r,"strength"),u(r,"radius","pt"),u(r,"threshold")]}const n=`${r.type}(${e.filter(Boolean).join(" ")})`
Object(s.a)(n),t.push(n)}return t.join(" ")}function u(e,t,r){if(null==e[t])throw new n.a("effect:missing-parameter",`Missing parameter '${t}' in ${e.type} effect`,{effect:e})
return r?e[t]+r:""+e[t]}function p(e,t){if(null==e[t])throw new n.a("effect:missing-parameter",`Missing parameter '${t}' in ${e.type} effect`,{effect:e})
const r=e[t]
return`rgba(${r[0]||0}, ${r[1]||0}, ${r[2]||0}, ${r[3]/255||0})`}},1138:function(e,t,r){"use strict"
r.d(t,"a",(function(){return p}))
var n=r(968),i=r(975),s=r(1007),o=r(23),a=r(978),l=r(1024),c=r(970),u=r(969)
let p=class extends i.a{constructor(){super(...arguments),this.updating=!1,this._handleId=0,this._handles=new s.a,this._scheduleHandleId=0,this._pendingPromises=new Set}destroy(){this.removeAll(),this._handles.destroy()}add(e,t,r={}){return this._installWatch(e,t,r,a.f)}addWhen(e,t,r={}){return this._installWatch(e,t,r,a.g)}addOnCollectionChange(e,t,{initial:r=!1,final:n=!1}={}){const i=++this._handleId
return this._handles.add([Object(a.b)(e,"after-changes",this._createSyncUpdatingCallback(),a.d),Object(a.b)(e,"change",t,{onListenerAdd:r?e=>t({added:e.toArray(),removed:[]}):void 0,onListenerRemove:n?e=>t({added:[],removed:e.toArray()}):void 0})],i),{remove:()=>this._handles.remove(i)}}addPromise(e){if(Object(o.k)(e))return e
const t=++this._handleId
this._handles.add({remove:()=>{this._pendingPromises.delete(e)&&(0!==this._pendingPromises.size||this._handles.has(d)||this._set("updating",!1))}},t),this._pendingPromises.add(e),this._set("updating",!0)
const r=()=>this._handles.remove(t)
return e.then(r,r),e}removeAll(){this._pendingPromises.clear(),this._handles.removeAll(),this._set("updating",!1)}_installWatch(e,t,r={},n){const i=++this._handleId
r.sync||this._installSyncUpdatingWatch(e,i)
const s=n(e,t,r)
return this._handles.add(s,i),{remove:()=>this._handles.remove(i)}}_installSyncUpdatingWatch(e,t){const r=this._createSyncUpdatingCallback(),n=Object(a.f)(e,r,{sync:!0,equals:()=>!1})
return this._handles.add(n,t),n}_createSyncUpdatingCallback(){return()=>{this._handles.remove(d),++this._scheduleHandleId
const e=this._scheduleHandleId
this._get("updating")||this._set("updating",!0),this._handles.add(Object(l.b)(()=>{e===this._scheduleHandleId&&(this._set("updating",this._pendingPromises.size>0),this._handles.remove(d))}),d)}}}
Object(n.a)([Object(c.b)({readOnly:!0})],p.prototype,"updating",void 0),p=Object(n.a)([Object(u.a)("esri.core.support.WatchUpdatingTracking")],p)
const d=-42},1141:function(e,t,r){"use strict"
r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return o}))
var n=r(23),i=r(1056)
const s=-3
var o,a;(a=o||(o={}))[a.ALL=0]="ALL",a[a.SOME=1]="SOME"
class l{constructor(e,t,r){this._namespace=e,this._storage=t,this._removeFunc=!1,this._hit=0,this._miss=0,this._storage.register(this),this._namespace+=":",r&&(this._storage.registerRemoveFunc(this._namespace,r),this._removeFunc=!0)}destroy(){this._storage.clear(this._namespace),this._removeFunc&&this._storage.deregisterRemoveFunc(this._namespace),this._storage.deregister(this),this._storage=null}get namespace(){return this._namespace.slice(0,-1)}get hitRate(){return this._hit/(this._hit+this._miss)}get size(){return this._storage.size}get maxSize(){return this._storage.maxSize}resetHitRate(){this._hit=this._miss=0}put(e,t,r,n=0){this._storage.put(this._namespace+e,t,r,n)}get(e){const t=this._storage.get(this._namespace+e)
return void 0===t?++this._miss:++this._hit,t}pop(e){const t=this._storage.pop(this._namespace+e)
return void 0===t?++this._miss:++this._hit,t}updateSize(e,t,r){this._storage.updateSize(this._namespace+e,t,r)}clear(){this._storage.clear(this._namespace)}clearAll(){this._storage.clearAll()}getStats(){return this._storage.getStats()}resetStats(){this._storage.resetStats()}}class c{constructor(e=10485760){this._maxSize=e,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=new i.a,this._users=new i.a}destroy(){this.clearAll(),this._removeFuncs.clear(),this._users.clear(),this._db=null}register(e){this._users.push(e)}deregister(e){this._users.removeUnordered(e)}registerRemoveFunc(e,t){this._removeFuncs.push([e,t])}deregisterRemoveFunc(e){this._removeFuncs.filterInPlace(t=>t[0]!==e)}get size(){return this._size}get maxSize(){return this._maxSize}set maxSize(e){this._maxSize=Math.max(e,0),this._checkSizeLimit()}put(e,t,r,n){const i=this._db.get(e)
if(i&&(this._size-=i.size,this._db.delete(e),i.entry!==t&&this._notifyRemove(e,i.entry,o.ALL)),r>this._maxSize)return void this._notifyRemove(e,t,o.ALL)
if(void 0===t)return void console.warn("Refusing to cache undefined entry ")
if(!r||r<0)return void console.warn("Refusing to cache entry with invalid size "+r)
const a=1+Math.max(n,s)-s
this._db.set(e,{entry:t,size:r,lifetime:a,lives:a}),this._size+=r,this._checkSizeLimit()}updateSize(e,t,r){const i=this._db.get(e)
if(i&&i.entry===t){for(this._size-=i.size;r>this._maxSize;){const i=this._notifyRemove(e,t,o.SOME)
if(!(Object(n.l)(i)&&i>0))return void this._db.delete(e)
r=i}i.size=r,this._size+=r,this._checkSizeLimit()}}pop(e){const t=this._db.get(e)
if(t)return this._size-=t.size,this._db.delete(e),++this._hit,t.entry;++this._miss}get(e){const t=this._db.get(e)
if(void 0!==t)return this._db.delete(e),t.lives=t.lifetime,this._db.set(e,t),++this._hit,t.entry;++this._miss}getStats(){const e={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},t={},r=new Array
this._db.forEach((e,n)=>{const i=e.lifetime
r[i]=(r[i]||0)+e.size,this._users.forAll(r=>{const i=r.namespace
if(n.startsWith(i)){const r=t[i]||0
t[i]=r+e.size}})})
const n={}
this._users.forAll(e=>{const r=e.namespace
if(!isNaN(e.hitRate)&&e.hitRate>0){const i=t[r]||0
t[r]=i,n[r]=Math.round(100*e.hitRate)+"%"}else n[r]="0%"})
const i=Object.keys(t)
i.sort((e,r)=>t[r]-t[e]),i.forEach(r=>e[r]=Math.round(t[r]/2**20)+"MB / "+n[r])
for(let t=r.length-1;t>=0;--t){const n=r[t]
n&&(e["Priority "+(t+s-1)]=Math.round(n/this.size*100)+"%")}return e}resetStats(){this._hit=this._miss=0,this._users.forAll(e=>e.resetHitRate())}clear(e){this._db.forEach((t,r)=>{r.startsWith(e)&&(this._size-=t.size,this._db.delete(r),this._notifyRemove(r,t.entry,o.ALL))})}clearAll(){this._db.forEach((e,t)=>this._notifyRemove(t,e.entry,o.ALL)),this._size=0,this._db.clear()}_getHitRate(){return this._hit/(this._hit+this._miss)}_notifyRemove(e,t,r){let n
return this._removeFuncs.some(i=>{if(e.startsWith(i[0])){const e=i[1](t,r)
return"number"==typeof e&&(n=e),!0}return!1}),n}_checkSizeLimit(){if(!(this._size<=this._maxSize))for(const[e,t]of this._db){if(this._db.delete(e),t.lives<=1){this._size-=t.size
const r=this._notifyRemove(e,t.entry,o.SOME)
Object(n.l)(r)&&r>0&&(this._size+=r,t.lives=t.lifetime,t.size=r,this._db.set(e,t))}else--t.lives,this._db.set(e,t)
if(this._size<=.9*this.maxSize)return}}}},1143:function(e,t,r){"use strict"
r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return h})),r.d(t,"d",(function(){return f}))
var n=r(975),i=r(993),s=r(23),o=r(999)
const a=["esri.Color","esri.portal.Portal","esri.symbols.support.Symbol3DAnchorPosition2D","esri.symbols.support.Symbol3DAnchorPosition3D"]
function l(e){return e instanceof n.a}function c(e){return e instanceof i.a?Object.keys(e.items):l(e)?Object(o.a)(e).keys():e?Object.keys(e):[]}function u(e,t){return e instanceof i.a?e.items[t]:e[t]}function p(e){return e?e.declaredClass:null}function d(e,t){if(Object(s.k)(e))return!1
const r=t.split(".")
let n=e
for(const e of r){if("complete"===n.type)return!0
if("partial"!==n.type)return!1
{const t=n.diff[e]
if(!t)return!1
n=t}}return!0}function h(e,t){for(const r of t)if(d(e,r))return!0
return!1}function b(e,t){if(!("function"==typeof e||"function"==typeof t||Object(s.k)(e)&&Object(s.k)(t)))return Object(s.k)(e)||Object(s.k)(t)||"object"==typeof e&&"object"==typeof t&&p(e)!==p(t)?{type:"complete",oldValue:e,newValue:t}:function e(t,r){const n=t.diff
if(n&&"function"==typeof n)return n(t,r)
const i=c(t),o=c(r)
if(0===i.length&&0===o.length)return
if(!i.length||!o.length||function(e,t){return!(!Array.isArray(e)||!Array.isArray(t))&&e.length!==t.length}(t,r))return{type:"complete",oldValue:t,newValue:r}
const d=o.filter(e=>!i.includes(e)),h=i.filter(e=>!o.includes(e)),b=i.filter(e=>o.includes(e)&&u(t,e)!==u(r,e)).concat(d,h).sort(),f=p(t)
if(f&&a.includes(f)&&b.length)return{type:"complete",oldValue:t,newValue:r}
let y
const m=l(t)&&l(r)
for(const i of b){const o=u(t,i),a=u(r,i)
let l
if((m||"function"!=typeof o&&"function"!=typeof a)&&o!==a&&(null!=o||null!=a)){if(n&&n[i]&&"function"==typeof n[i])l=n[i](o,a)
else if(o instanceof Date&&a instanceof Date){if(o.getTime()===a.getTime())continue
l={type:"complete",oldValue:o,newValue:a}}else l="object"==typeof o&&"object"==typeof a&&p(o)===p(a)?e(o,a):{type:"complete",oldValue:o,newValue:a}
Object(s.l)(l)&&(Object(s.l)(y)?y.diff[i]=l:y={type:"partial",diff:{[i]:l}})}}return y}(e,t)}function f(e){if(Object(s.k)(e))return!0
switch(e.type){case"complete":return!1
case"collection":{const t=e
for(const e of t.added)if(!f(e))return!1
for(const e of t.removed)if(!f(e))return!1
for(const e of t.changed)if(!f(e))return!1
return!0}case"partial":for(const t in e.diff)if(!f(e.diff[t]))return!1
return!0}}},1144:function(e,t,r){"use strict"
r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return i}))
var n=r(1093)
function i(e){return!!e&&null!=n.a[e]}function s(e){return 1/(n.a[e]||1)}const o=function(){const e=Object.keys(n.a)
return e.sort(),e}()},1147:function(e,t,r){"use strict"
r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return p}))
var n=r(995),i=r(446),s=r(23),o=r(1037),a=r(1401),l=r(1241),c=r(1145)
function u(e,t,r,n){const i=h(e,{},{context:n,isLabelSymbol:!1})
Object(s.l)(i)&&(t[r]=i)}function p(e,t,r,n){const i=h(e,{},{context:n,isLabelSymbol:!0})
Object(s.l)(i)&&(t[r]=i)}function d(e){return e instanceof a.a||e instanceof c.a}function h(e,t,r){if(Object(s.k)(e))return null
const{context:n,isLabelSymbol:a}=r,c=null==n?void 0:n.origin,u=null==n?void 0:n.messages
if("web-scene"===c&&!d(e)){const r=Object(l.b)(e,{retainCIM:!0,hasLabelingContext:a})
return Object(s.l)(r.symbol)?r.symbol.write(t,n):(null!=u&&u.push(new i.a("symbol:unsupported",`Symbols of type '${e.declaredClass}' are not supported in scenes. Use 3D symbology instead when working with WebScene and SceneView`,{symbol:e,context:n,error:r.error})),null)}return("web-map"===c||"portal-item"===c&&!Object(o.j)(null==n?void 0:n.layer))&&d(e)?(null!=u&&u.push(new i.a("symbol:unsupported",`Symbols of type '${e.declaredClass}' are not supported in web maps and portal items. Use 2D symbology and CIMSymbol instead when working with MapView`,{symbol:e,context:n})),null):e.write(t,n)}function b(e,t){return Object(n.d)(e,null,t)}},1149:function(e,t,r){"use strict"
r.d(t,"a",(function(){return n}))
const n=new(r(976).a)({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml"})},1153:function(e,t,r){"use strict"
r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return s}))
var n=r(23)
class i{constructor(e=null,t={},r,n){this.geometry=e,this.attributes=t,this.centroid=r,this.objectId=n,this.displayId=0,this.geohashX=0,this.geohashY=0}weakClone(){const e=new i(this.geometry,this.attributes,this.centroid,this.objectId)
return e.displayId=this.displayId,e.geohashX=this.geohashX,e.geohashY=this.geohashY,e}}function s(e){return!(Object(n.k)(e.geometry)||!e.geometry.coords||!e.geometry.coords.length)}class o extends i{}},1154:function(e,t,r){"use strict"
r.r(t),r.d(t,"default",(function(){return M}))
var n=r(968),i=r(1019),s=r(446),o=r(972),a=r(234),l=r(1046),c=r(23),u=r(374),p=r(970),d=r(971),h=r(977),b=r(969),f=r(770),y=r(1028),m=r(975),g=r(233),O=r(987)
r(445)
let j=class extends m.a{constructor(e){super(e),this.portalItem=null}normalizeCtorArgs(e){return e&&e.portalItem&&e.path?{...e,path:this._normalizePath(e.path,e.portalItem)}:e}set path(e){Object(c.l)(e)&&Object(u.x)(e)?g.a.getLogger(this.declaredClass).error("portalitemresource:invalid-path","A portal item resource path must be relative"):this._set("path",e)}_castPath(e){return this._normalizePath(e,this.portalItem)}get url(){return this.portalItem&&this.path?`${this.portalItem.itemUrl}/resources/${this.path}`:null}get itemRelativeUrl(){return this.portalItem&&this.path?"./resources/"+this.path:null}fetch(e="json",t){const r=this.url
if(Object(c.k)(r))throw new s.a("portal-item-resource:fetch","Portal item resource does not refer to a valid item or path")
return this.portalItem.portal.request(r,{responseType:e,query:{token:this.portalItem.apiKey},signal:Object(c.j)(t,"signal")})}async update(e,t){return(await r.e(34).then(r.bind(null,1935))).addOrUpdateResource(this,"update",e,t)}hasPath(){return Object(c.l)(this.path)}_normalizePath(e,t){var r
return Object(c.k)(e)?e:(e=e.replace(/^\/+/,""),Object(c.l)(t)&&Object(u.x)(e)&&(e=Object(u.H)(e,t.itemUrl)),null==(r=e)?void 0:r.replace(/^\/+/,"").replace(/^(\.\/)?resources\//,""))}}
Object(n.a)([Object(p.b)()],j.prototype,"portalItem",void 0),Object(n.a)([Object(p.b)({type:String,value:null})],j.prototype,"path",null),Object(n.a)([Object(O.a)("path")],j.prototype,"_castPath",null),Object(n.a)([Object(p.b)({type:String,readOnly:!0})],j.prototype,"url",null),Object(n.a)([Object(p.b)({type:String,readOnly:!0})],j.prototype,"itemRelativeUrl",null),j=Object(n.a)([Object(b.a)("esri.portal.PortalItemResource")],j)
const v=j
let w=class extends m.a{constructor(e){super(e),this.created=null,this.rating=null}}
Object(n.a)([Object(p.b)()],w.prototype,"created",void 0),Object(n.a)([Object(p.b)()],w.prototype,"rating",void 0),w=Object(n.a)([Object(b.a)("esri.portal.PortalRating")],w)
const S=w
var x
const _=new Set(["Map Service","Feature Service","Feature Collection","Scene Service","Image Service","Stream Service","Vector Tile Service","GeoJson","CSV","KML","WFS","WMTS","WMS","Feed"]),I=new Set(["KML","GeoJson","CSV"])
let T=x=class extends(Object(o.b)(l.a)){static from(e){return Object(d.d)(x,e)}constructor(e){super(e),this.access=null,this.accessInformation=null,this.apiKey=null,this.applicationProxies=null,this.avgRating=null,this.categories=null,this.created=null,this.culture=null,this.description=null,this.extent=null,this.groupCategories=null,this.id=null,this.isOrgItem=!1,this.itemControl=null,this.licenseInfo=null,this.modified=null,this.name=null,this.numComments=null,this.numRatings=null,this.numViews=null,this.owner=null,this.ownerFolder=null,this.portal=null,this.screenshots=null,this.size=null,this.snippet=null,this.sourceJSON=null,this.sourceUrl=null,this.spatialReference=null,this.tags=null,this.title=null,this.type=null,this.typeKeywords=null,this.url=null}destroy(){this.portal=null}get displayName(){const e=this.type,t=this.typeKeywords||[]
let r=e
return"Feature Service"===e||"Feature Collection"===e?r=t.includes("Table")?"Table":t.includes("Route Layer")?"Route Layer":t.includes("Markup")?"Markup":"Feature Layer":"Image Service"===e?r=t.includes("Elevation 3D Layer")?"Elevation Layer":t.includes("Tiled Imagery")?"Tiled Imagery Layer":"Imagery Layer":"Scene Service"===e?r="Scene Layer":"Video Service"===e?r="Video Layer":"Scene Package"===e?r="Scene Layer Package":"Stream Service"===e?r="Feature Layer":"Geoprocessing Service"===e&&this.portal&&this.portal.isPortal?r=t.includes("Web Tool")?"Tool":"Geoprocessing Service":"Geocoding Service"===e?r="Locator":"Geoenrichment Service"===e?r="GeoEnrichment Service":"Microsoft Powerpoint"===e?r="Microsoft PowerPoint":"GeoJson"===e?r="GeoJSON":"Globe Service"===e?r="Globe Layer":"Vector Tile Service"===e?r="Tile Layer":"netCDF"===e?r="NetCDF":"Map Service"===e?r=t.includes("Spatiotemporal")||!t.includes("Hosted Service")&&!t.includes("Tiled")||t.includes("Relational")?"Map Image Layer":"Tile Layer":e&&e.toLowerCase().includes("add in")?r=e.replace(/(add in)/gi,"Add-In"):"datastore catalog service"===e?r="Big Data File Share":"Compact Tile Package"===e?r="Tile Package (tpkx)":"OGCFeatureServer"===e?r="OGC Feature Layer":"web mapping application"===e&&t.includes("configurableApp")?r="Instant App":"Insights Page"===e&&(r="Insights Report"),r}readExtent(e){return e&&e.length?new f.default(e[0][0],e[0][1],e[1][0],e[1][1]):null}get iconUrl(){const e=this.type&&this.type.toLowerCase()||"",t=this.typeKeywords||[]
let r,n=!1,s=!1,o=!1,a=!1,l=!1,c=!1
return e.indexOf("service")>0||"feature collection"===e||"kml"===e||"wms"===e||"wmts"===e||"wfs"===e?(n=t.includes("Hosted Service"),"feature service"===e||"feature collection"===e||"kml"===e||"wfs"===e?(s=t.includes("Table"),o=t.includes("Route Layer"),a=t.includes("Markup"),l=t.includes("Spatiotemporal"),c=t.includes("UtilityNetwork"),r=l&&s?"spatiotemporaltable":s?"table":o?"routelayer":a?"markup":l?"spatiotemporal":n?"featureshosted":c?"utilitynetwork":"features"):r="map service"===e||"wms"===e||"wmts"===e?n||t.includes("Tiled")||"wmts"===e?"maptiles":"mapimages":"scene service"===e?t.includes("Line")?"sceneweblayerline":t.includes("3DObject")?"sceneweblayermultipatch":t.includes("Point")?"sceneweblayerpoint":t.includes("IntegratedMesh")?"sceneweblayermesh":t.includes("PointCloud")?"sceneweblayerpointcloud":t.includes("Polygon")?"sceneweblayerpolygon":t.includes("Building")?"sceneweblayerbuilding":t.includes("Voxel")?"sceneweblayervoxel":"sceneweblayer":"image service"===e?t.includes("Elevation 3D Layer")?"elevationlayer":t.includes("Tiled Imagery")?"tiledimagerylayer":"imagery":"stream service"===e?"streamlayer":"video service"===e?"mediaservice":"vector tile service"===e?"vectortile":"datastore catalog service"===e?"datastorecollection":"geocoding service"===e?"geocodeservice":"geoprocessing service"===e?t.includes("Web Tool")&&this.portal&&this.portal.isPortal?"tool":"layers":"geodata service"===e?"geodataservice":"layers"):r="web map"===e||"cityengine web scene"===e?"maps":"web scene"===e?t.includes("ViewingMode-Local")?"webscenelocal":"websceneglobal":"web mapping application"===e&&t.includes("configurableApp")?"instantapps":"web mapping application"===e||"mobile application"===e||"application"===e||"operation view"===e||"desktop application"===e?"apps":"map document"===e||"map package"===e||"published map"===e||"scene document"===e||"globe document"===e||"basemap package"===e||"mobile basemap package"===e||"mobile map package"===e||"project package"===e||"project template"===e||"pro map"===e||"layout"===e||"layer"===e&&t.includes("ArcGIS Pro")||"explorer map"===e&&t.indexOf("Explorer Document")?"mapsgray":"service definition"===e||"csv"===e||"shapefile"===e||"cad drawing"===e||"geojson"===e||"360 vr experience"===e||"netcdf"===e||"administrative report"===e?"datafiles":"explorer add in"===e||"desktop add in"===e||"windows viewer add in"===e||"windows viewer configuration"===e?"appsgray":"arcgis pro add in"===e||"arcgis pro configuration"===e?"addindesktop":"rule package"===e||"file geodatabase"===e||"sqlite geodatabase"===e||"csv collection"===e||"kml collection"===e||"windows mobile package"===e||"map template"===e||"desktop application template"===e||"gml"===e||"arcpad package"===e||"code sample"===e||"form"===e||"document link"===e||"earth configuration"===e||"operations dashboard add in"===e||"rules package"===e||"image"===e||"workflow manager package"===e||"explorer map"===e&&t.includes("Explorer Mapping Application")||t.includes("Document")?"datafilesgray":"network analysis service"===e||"geoprocessing service"===e||"geodata service"===e||"geometry service"===e||"geoprocessing package"===e||"locator package"===e||"geoprocessing sample"===e||"workflow manager service"===e?"toolsgray":"layer"===e||"layer package"===e||"explorer layer"===e?"layersgray":"scene package"===e?"scenepackage":"mobile scene package"===e?"mobilescenepackage":"tile package"===e||"compact tile package"===e?"tilepackage":"task file"===e?"taskfile":"report template"===e?"report-template":"statistical data collection"===e?"statisticaldatacollection":"insights workbook"===e?"workbook":"insights model"===e?"insightsmodel":"insights page"===e?"insightspage":"insights theme"===e?"insightstheme":"hub initiative"===e?"hubinitiative":"hubpage"===e?"hubpage":"hub event"===e?"hubevent":"hub site application"===e?"hubsite":"hub project"===e?"hubproject":"relational database connection"===e?"relationaldatabaseconnection":"big data file share"===e?"datastorecollection":"image collection"===e?"imagecollection":"style"===e?"style":"desktop style"===e?"desktopstyle":"dashboard"===e?"dashboard":"raster function template"===e?"rasterprocessingtemplate":"vector tile package"===e?"vectortilepackage":"ortho mapping project"===e?"orthomappingproject":"ortho mapping template"===e?"orthomappingtemplate":"solution"===e?"solutions":"geopackage"===e?"geopackage":"deep learning package"===e?"deeplearningpackage":"real time analytic"===e?"realtimeanalytics":"big data analytic"===e?"bigdataanalytics":"feed"===e?"feed":"excalibur imagery project"===e?"excaliburimageryproject":"notebook"===e?"notebook":"storymap"===e?"storymap":"survey123 add in"===e?"survey123addin":"mission"===e?"mission":"mission report"===e?"missionreport":"quickcapture project"===e?"quickcaptureproject":"pro report"===e?"proreport":"pro report template"===e?"proreporttemplate":"urban model"===e?"urbanmodel":"web experience"===e?"experiencebuilder":"web experience template"===e?"webexperiencetemplate":"experience builder widget"===e?"experiencebuilderwidget":"experience builder widget package"===e?"experiencebuilderwidgetpackage":"workflow"===e?"workflow":"insights script"===e?"insightsscript":"kernel gateway connection"===e?"kernelgatewayconnection":"hub initiative template"===e?"hubinitiativetemplate":"storymap theme"===e?"storymaptheme":"knowledge graph"===e?"knowledgegraph":"native application"===e?"nativeapp":"native application installer"===e?"nativeappinstaller":"link chart"===e?"linkchart":"investigation"===e?"investigation":"ogcfeatureserver"===e?"features":"pro project"===e?"proproject":"insights workbook package"===e?"insightsworkbookpackage":"apache parquet"===e?"apacheparquet":"notebook code snippets"===e||"notebook code snippet library"===e?"notebookcodesnippets":"suitability model"===e?"suitabilitymodel":"esri classifier definition"===e?"classifierdefinition":"esri classification schema"===e?"classificationschema":"insights data engineering workbook"===e?"dataengineeringworkbook":"insights data engineering model"===e?"dataengineeringmodel":"deep learning studio project"===e?"deeplearningproject":"discussion"===e?"discussion":"allsource project"===e?"allsourceproject":"api key"===e?"apikey":"maps",r?Object(i.b)("esri/images/portal/"+r+"16.png"):null}get isLayer(){return null!=this.type&&_.has(this.type)}get itemPageUrl(){var e
const t=null==(e=this.portal)?void 0:e.itemPageUrl
return t&&this.id?`${t}?id=${this.id}`:null}get itemUrl(){var e
const t=null==(e=this.portal)?void 0:e.restUrl
return t&&this.id?`${t}/content/items/${this.id}`:null}get thumbnailUrl(){var e,t
const r=this.itemUrl,n=this.thumbnail
return r&&n&&null!=(e=null==(t=this.portal)?void 0:t.normalizeUrl(`${r}/info/${n}?f=json`))?e:null}get userItemUrl(){const e=this.get("portal.restUrl")
if(!e)return null
const t=this.owner||this.get("portal.user.username")
return t?`${e}/content/users/${this.ownerFolder?`${t}/${this.ownerFolder}`:t}/items/${this.id}`:null}load(e){var t
const r=null!=(t=this.portal)?t:this.portal=y.a.getDefault(),n=r.load(e).then(()=>this.sourceJSON?this.sourceJSON:this.id&&this.itemUrl?r.request(this.itemUrl,{signal:Object(c.l)(e)?e.signal:null,query:{token:this.apiKey}}):{}).then(e=>{this.sourceJSON=e,this.read(e)})
return this.addResolvingPromise(n),Promise.resolve(this)}async addRating(e){const t={method:"post",query:{}}
return e instanceof S&&(e=e.rating),null==e||isNaN(e)||"number"!=typeof e||(t.query.rating=e),this.portal?(await this.portal.request(this.itemUrl+"/addRating",t),new S({rating:e,created:new Date})):null}clone(){const e={access:this.access,accessInformation:this.accessInformation,applicationProxies:Object(a.a)(this.applicationProxies),avgRating:this.avgRating,categories:Object(a.a)(this.categories),created:Object(a.a)(this.created),culture:this.culture,description:this.description,extent:Object(a.a)(this.extent),groupCategories:Object(a.a)(this.groupCategories),id:this.id,itemControl:this.itemControl,licenseInfo:this.licenseInfo,modified:Object(a.a)(this.modified),name:this.name,numComments:this.numComments,numRatings:this.numRatings,numViews:this.numViews,owner:this.owner,ownerFolder:this.ownerFolder,portal:this.portal,screenshots:Object(a.a)(this.screenshots),size:this.size,snippet:this.snippet,sourceUrl:this.sourceUrl,spatialReference:this.spatialReference,tags:Object(a.a)(this.tags),thumbnail:this.thumbnail,title:this.title,type:this.type,typeKeywords:Object(a.a)(this.typeKeywords),url:this.url}
this.loaded&&(e.loadStatus="loaded")
const t=new x({sourceJSON:this.sourceJSON}).set(e)
return t._set("isOrgItem",this.isOrgItem),t}createPostQuery(){const e=this.toJSON()
for(const t of["tags","typeKeywords","categories"])e[t]&&(e[t]=e[t].join(", "))
const{extent:t}=e
return t&&(e.extent=JSON.stringify(t)),e}async deleteRating(){await Object(c.w)(this.portal).request(this.itemUrl+"/deleteRating",{method:"post"})}fetchData(e="json",t){return Object(c.w)(this.portal).request(this.itemUrl+"/data",{responseType:e,...t,query:{token:this.apiKey}})}async fetchRating(e){const t=await Object(c.w)(this.portal).request(this.itemUrl+"/rating",{query:{token:this.apiKey},...e})
return null!=t.rating?(t.created=new Date(t.created),new S(t)):null}fetchRelatedItems(e,t){return Object(c.w)(this.portal).requestToTypedArray(this.itemUrl+"/relatedItems",{query:{...e,token:this.apiKey},...t},x)}getThumbnailUrl(e){let t=this.thumbnailUrl
return t&&e&&(t+="&w="+e),t}reload(){var e
return Object(c.w)(this.portal).request(null!=(e=this.itemUrl)?e:"",{cacheBust:!0,query:{token:this.apiKey}}).then(e=>(this.sourceJSON=e,this.read(e),this))}update(e){return this.id?this.load().then(()=>Object(c.w)(this.portal).signIn()).then(()=>{const t=e&&e.data,r={method:"post"}
r.query=this.createPostQuery()
for(const e in r.query)null===r.query[e]&&(r.query[e]="")
return r.query.clearEmptyFields=!0,null!=t&&("string"==typeof t?r.query.text=t:"object"==typeof t&&(r.query.text=JSON.stringify(t))),this.portal.request(this.userItemUrl+"/update",r).then(()=>this.reload())}):Promise.reject(new s.a("portal:item-does-not-exist","The item does not exist yet and cannot be updated"))}async copy(e){if(!this.id)throw new s.a("portal:item-does-not-exist","The item does not exist yet")
await this.load()
const{portal:t,itemUrl:r}=this
await Object(c.w)(t).signIn()
const{copyResources:n,folder:i,tags:o,title:a}=e||{},l={method:"post",query:{copyPrivateResources:"all"===n,folder:"string"==typeof i?i:null==i?void 0:i.id,includeResources:!!n,tags:null==o?void 0:o.join(","),title:a}},{itemId:u}=await t.request(r+"/copy",l)
return new x({id:u,portal:t})}updateThumbnail(e){return this.id?this.load().then(()=>this.portal.signIn()).then(()=>{const t=e.thumbnail,r=e.filename,n={method:"post"}
if("string"==typeof t)Object(u.z)(t)?n.query={data:t}:n.query={url:Object(u.F)(t)},Object(c.l)(r)&&(n.query.filename=r)
else{const e=new FormData
Object(c.l)(r)?e.append("file",t,r):e.append("file",t),n.body=e}return this.portal.request(this.userItemUrl+"/updateThumbnail",n).then(()=>this.reload())}):Promise.reject(new s.a("portal:item-does-not-exist","The item does not exist yet and cannot be updated"))}async fetchResources(e={},t){return(await r.e(34).then(r.bind(null,1935))).fetchResources(this,e,t)}async addResource(e,t,n){const i=await r.e(34).then(r.bind(null,1935))
return e.portalItem=this,i.addOrUpdateResource(e,"add",t,n)}async removeResource(e,t){const n=await r.e(34).then(r.bind(null,1935))
if(e.portalItem&&e.portalItem.itemUrl!==this.itemUrl)throw new s.a("removeresource:portal-item-mismatch","The portal item associated with the provided resource does not match the item")
return n.removeResource(this,e,t)}async removeAllResources(e){return(await r.e(34).then(r.bind(null,1935))).removeAllResources(this,e)}resourceFromPath(e){return new v({portalItem:this,path:e})}toJSON(){const e=this.extent,t={accessInformation:this.accessInformation,categories:Object(a.a)(this.categories),created:this.created&&this.created.getTime(),description:this.description,extent:e&&[[e.xmin,e.ymin],[e.xmax,e.ymax]],id:this.id,isOrgItem:this.isOrgItem,licenseInfo:this.licenseInfo,modified:this.modified&&this.modified.getTime(),name:this.name,owner:this.owner,ownerFolder:this.ownerFolder,snippet:this.snippet,sourceUrl:this.sourceUrl,spatialReference:this.spatialReference,tags:Object(a.a)(this.tags),thumbnail:this.thumbnail,title:this.title,type:this.type,typeKeywords:Object(a.a)(this.typeKeywords),url:this.url}
return Object(a.d)(t)}static fromJSON(e){if(!e)return null
if(e.declaredClass)throw new Error("JSON object is already hydrated")
return new x({sourceJSON:e})}_getPostQuery(){const e=this.toJSON()
for(const t in e)"tags"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"typeKeywords"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"extent"===t&&e[t]&&(e[t]=JSON.stringify(e[t]))
return e}}
Object(n.a)([Object(p.b)({type:["private","shared","org","public"]})],T.prototype,"access",void 0),Object(n.a)([Object(p.b)()],T.prototype,"accessInformation",void 0),Object(n.a)([Object(p.b)({type:String})],T.prototype,"apiKey",void 0),Object(n.a)([Object(p.b)({json:{read:{source:"appProxies"}}})],T.prototype,"applicationProxies",void 0),Object(n.a)([Object(p.b)()],T.prototype,"avgRating",void 0),Object(n.a)([Object(p.b)()],T.prototype,"categories",void 0),Object(n.a)([Object(p.b)({type:Date})],T.prototype,"created",void 0),Object(n.a)([Object(p.b)()],T.prototype,"culture",void 0),Object(n.a)([Object(p.b)()],T.prototype,"description",void 0),Object(n.a)([Object(p.b)({readOnly:!0})],T.prototype,"displayName",null),Object(n.a)([Object(p.b)({type:f.default})],T.prototype,"extent",void 0),Object(n.a)([Object(h.a)("extent")],T.prototype,"readExtent",null),Object(n.a)([Object(p.b)()],T.prototype,"groupCategories",void 0),Object(n.a)([Object(p.b)({readOnly:!0})],T.prototype,"iconUrl",null),Object(n.a)([Object(p.b)()],T.prototype,"id",void 0),Object(n.a)([Object(p.b)({readOnly:!0})],T.prototype,"isLayer",null),Object(n.a)([Object(p.b)({type:Boolean,readOnly:!0})],T.prototype,"isOrgItem",void 0),Object(n.a)([Object(p.b)()],T.prototype,"itemControl",void 0),Object(n.a)([Object(p.b)({readOnly:!0})],T.prototype,"itemPageUrl",null),Object(n.a)([Object(p.b)({readOnly:!0})],T.prototype,"itemUrl",null),Object(n.a)([Object(p.b)()],T.prototype,"licenseInfo",void 0),Object(n.a)([Object(p.b)({type:Date})],T.prototype,"modified",void 0),Object(n.a)([Object(p.b)()],T.prototype,"name",void 0),Object(n.a)([Object(p.b)()],T.prototype,"numComments",void 0),Object(n.a)([Object(p.b)()],T.prototype,"numRatings",void 0),Object(n.a)([Object(p.b)()],T.prototype,"numViews",void 0),Object(n.a)([Object(p.b)()],T.prototype,"owner",void 0),Object(n.a)([Object(p.b)()],T.prototype,"ownerFolder",void 0),Object(n.a)([Object(p.b)({type:y.a})],T.prototype,"portal",void 0),Object(n.a)([Object(p.b)()],T.prototype,"screenshots",void 0),Object(n.a)([Object(p.b)()],T.prototype,"size",void 0),Object(n.a)([Object(p.b)()],T.prototype,"snippet",void 0),Object(n.a)([Object(p.b)()],T.prototype,"sourceJSON",void 0),Object(n.a)([Object(p.b)({type:String})],T.prototype,"sourceUrl",void 0),Object(n.a)([Object(p.b)({type:String})],T.prototype,"spatialReference",void 0),Object(n.a)([Object(p.b)()],T.prototype,"tags",void 0),Object(n.a)([Object(p.b)()],T.prototype,"thumbnail",void 0),Object(n.a)([Object(p.b)({readOnly:!0})],T.prototype,"thumbnailUrl",null),Object(n.a)([Object(p.b)()],T.prototype,"title",void 0),Object(n.a)([Object(p.b)()],T.prototype,"type",void 0),Object(n.a)([Object(p.b)()],T.prototype,"typeKeywords",void 0),Object(n.a)([Object(p.b)({type:String,json:{read(e,t){if(I.has(t.type)){var r
const t=null==(r=this.portal)?void 0:r.restUrl
e||(e=t&&this.id?`${t}/content/items/${this.id}/data`:null)}return e}}})],T.prototype,"url",void 0),Object(n.a)([Object(p.b)({readOnly:!0})],T.prototype,"userItemUrl",null),T=x=Object(n.a)([Object(b.a)("esri.portal.PortalItem")],T)
const M=T},1155:function(e,t,r){"use strict"
r.d(t,"a",(function(){return w})),r.d(t,"b",(function(){return S}))
var n=r(110),i=r(446),s=r(233),o=r(23),a=r(773),l=r(1021),c=r(1255),u=r(988),p=r(774),d=(r(982),r(771)),h=r(983),b=r(1074),f=r(374),y=r(1259)
const m=s.a.getLogger("esri.geometry.support.normalizeUtils")
function g(e){return"polygon"===e[0].type}function O(e){return"polyline"===e[0].type}function j(e,t,r){if(t){const t=function(e,t){if(!(e instanceof l.a||e instanceof a.default)){const e="straightLineDensify: the input geometry is neither polyline nor polygon"
throw m.error(e),new i.a(e)}const r=Object(c.b)(e),n=[]
for(const e of r){const r=[]
n.push(r),r.push([e[0][0],e[0][1]])
for(let n=0;n<e.length-1;n++){const i=e[n][0],s=e[n][1],o=e[n+1][0],a=e[n+1][1],l=Math.sqrt((o-i)*(o-i)+(a-s)*(a-s)),c=(a-s)/l,u=(o-i)/l,p=l/t
if(p>1){for(let e=1;e<=p-1;e++){const n=e*t,o=u*n+i,a=c*n+s
r.push([o,a])}const e=(l+Math.floor(p-1)*t)/2,n=u*e+i,o=c*e+s
r.push([n,o])}r.push([o,a])}}return function(e){return"polygon"===e.type}(e)?new a.default({rings:n,spatialReference:e.spatialReference}):new l.a({paths:n,spatialReference:e.spatialReference})}(e,1e6)
e=Object(p.webMercatorToGeographic)(t,!0)}return r&&(e=Object(c.d)(e,r)),e}function v(e,t,r){if(Array.isArray(e)){const n=e[0]
if(n>t){const r=Object(c.c)(n,t)
e[0]=n+r*(-2*t)}else if(n<r){const t=Object(c.c)(n,r)
e[0]=n+t*(-2*r)}}else{const n=e.x
if(n>t){const r=Object(c.c)(n,t)
e=e.clone().offset(r*(-2*t),0)}else if(n<r){const t=Object(c.c)(n,r)
e=e.clone().offset(t*(-2*r),0)}}return e}async function w(e,t,r){var i
if(!Array.isArray(e))return w([e],t)
t&&"string"!=typeof t&&m.warn("normalizeCentralMeridian()","The url object is deprecated, use the url string instead")
const s="string"==typeof t?t:null!=(i=null==t?void 0:t.url)?i:n.default.geometryServiceUrl
let S,x,_,I,T,M,F,E,V=0
const L=[],k=[]
for(const t of e)if(Object(o.k)(t))k.push(t)
else if(S||(S=t.spatialReference,x=Object(u.e)(S),_=S.isWebMercator,M=_?102100:4326,I=c.a[M].maxX,T=c.a[M].minX,F=c.a[M].plus180Line,E=c.a[M].minus180Line),x)if("mesh"===t.type)k.push(t)
else if("point"===t.type)k.push(v(t.clone(),I,T))
else if("multipoint"===t.type){const e=t.clone()
e.points=e.points.map(e=>v(e,I,T)),k.push(e)}else if("extent"===t.type){const e=t.clone()._normalize(!1,!1,x)
k.push(e.rings?new a.default(e):e)}else if(t.extent){const e=t.extent,r=Object(c.c)(e.xmin,T)*(2*I)
let n=0===r?t.clone():Object(c.d)(t.clone(),r)
e.offset(r,0),e.intersects(F)&&e.xmax!==I?(V=e.xmax>V?e.xmax:V,n=j(n,_),L.push(n),k.push("cut")):e.intersects(E)&&e.xmin!==T?(V=e.xmax*(2*I)>V?e.xmax*(2*I):V,n=j(n,_,360),L.push(n),k.push("cut")):k.push(n)}else k.push(t.clone())
else k.push(t)
let A=Object(c.c)(V,I),D=-90
const R=A,C=new l.a
for(;A>0;){const e=360*A-180
C.addPath([[e,D],[e,-1*D]]),D*=-1,A--}if(L.length>0&&R>0){const t=function(e,t){let r=-1
for(let n=0;n<t.cutIndexes.length;n++){const i=t.cutIndexes[n],s=t.geometries[n],o=Object(c.b)(s)
for(let e=0;e<o.length;e++){const t=o[e]
t.some(r=>{if(r[0]<180)return!0
{let r=0
for(let e=0;e<t.length;e++){const n=t[e][0]
r=n>r?n:r}r=Number(r.toFixed(9))
const n=-360*Object(c.c)(r,180)
for(let r=0;r<t.length;r++){const t=s.getPoint(e,r)
s.setPoint(e,r,t.clone().offset(n,0))}return!0}})}if(i===r){if(g(e))for(const t of Object(c.b)(s))e[i]=e[i].addRing(t)
else if(O(e))for(const t of Object(c.b)(s))e[i]=e[i].addPath(t)}else r=i,e[i]=s}return e}(L,await async function(e,t,r,n){const i=Object(b.c)(e),s=t[0].spatialReference,o={...n,query:{...i.query,f:"json",sr:JSON.stringify(s),target:JSON.stringify({geometryType:Object(h.c)(t[0]),geometries:t}),cutter:JSON.stringify(r)}},a=await Object(d.default)(i.path+"/cut",o),{cutIndexes:l,geometries:c=[]}=a.data
return{cutIndexes:l,geometries:c.map(e=>{const t=Object(h.a)(e)
return t.spatialReference=s,t})}}(s,L,C,r)),n=[],i=[]
for(let r=0;r<k.length;r++){const s=k[r]
if("cut"!==s)i.push(s)
else{const s=t.shift(),a=e[r]
Object(o.l)(a)&&"polygon"===a.type&&a.rings&&a.rings.length>1&&s.rings.length>=a.rings.length?(n.push(s),i.push("simplify")):i.push(_?Object(p.geographicToWebMercator)(s):s)}}if(!n.length)return i
const a=await async function(e,t,r){const n="string"==typeof e?Object(f.Q)(e):e,i=t[0].spatialReference,s=Object(h.c)(t[0]),o={...r,query:{...n.query,f:"json",sr:i.wkid?i.wkid:JSON.stringify(i),geometries:JSON.stringify(Object(y.b)(t))}},{data:a}=await Object(d.default)(n.path+"/simplify",o)
return Object(y.a)(a.geometries,s,i)}(s,n,r),l=[]
for(let e=0;e<i.length;e++){const t=i[e]
"simplify"!==t?l.push(t):l.push(_?Object(p.geographicToWebMercator)(a.shift()):a.shift())}return l}const P=[]
for(let e=0;e<k.length;e++){const t=k[e]
if("cut"!==t)P.push(t)
else{const e=L.shift()
P.push(!0===_?Object(p.geographicToWebMercator)(e):e)}}return P}function S(e,t){const r=Object(u.e)(t)
if(r){const[t,n]=r.valid,i=n-t
if(e<t)for(;e<t;)e+=i
if(e>n)for(;e>n;)e-=i}return e}},1158:function(e,t,r){"use strict"
r.d(t,"a",(function(){return h}))
var n,i=r(968),s=r(990),o=r(234),a=r(970),l=r(971),c=r(979),u=r(969),p=r(1094)
let d=n=class extends p.a{constructor(e){super(e),this.algorithm=null,this.fromColor=null,this.toColor=null,this.type="algorithmic"}clone(){return new n({fromColor:Object(o.a)(this.fromColor),toColor:Object(o.a)(this.toColor),algorithm:this.algorithm})}}
Object(i.a)([Object(c.a)({esriCIELabAlgorithm:"cie-lab",esriHSVAlgorithm:"hsv",esriLabLChAlgorithm:"lab-lch"})],d.prototype,"algorithm",void 0),Object(i.a)([Object(a.b)({type:s.a,json:{type:[l.a],write:!0}})],d.prototype,"fromColor",void 0),Object(i.a)([Object(a.b)({type:s.a,json:{type:[l.a],write:!0}})],d.prototype,"toColor",void 0),Object(i.a)([Object(a.b)({type:["algorithmic"]})],d.prototype,"type",void 0),d=n=Object(i.a)([Object(u.a)("esri.rest.support.AlgorithmicColorRamp")],d)
const h=d},1159:function(e,t,r){"use strict"
r.d(t,"a",(function(){return c}))
var n,i=r(968),s=r(970),o=(r(971),r(445),r(969)),a=r(1086)
let l=n=class extends a.a{constructor(){super(...arguments),this.showLegend=null}clone(){return new n({title:this.title,showLegend:this.showLegend})}}
Object(i.a)([Object(s.b)({type:Boolean,json:{write:!0}})],l.prototype,"showLegend",void 0),l=n=Object(i.a)([Object(o.a)("esri.renderers.visualVariables.support.VisualVariableLegendOptions")],l)
const c=l},1163:function(e,t,r){"use strict"
r.d(t,"a",(function(){return o}))
var n=r(23),i=r(997),s=r(988)
function o(e,t,r){if(Object(n.k)(t)||Object(n.k)(r)||r.vcsWkid||Object(s.d)(t,r))return null
const o=Object(i.h)(t)/Object(i.h)(r)
if(1===o)return null
switch(e){case"point":case"esriGeometryPoint":return e=>function(e,t){e&&null!=e.z&&(e.z*=t)}(e,o)
case"polyline":case"esriGeometryPolyline":return e=>function(e,t){if(e)for(const r of e.paths)for(const e of r)e.length>2&&(e[2]*=t)}(e,o)
case"polygon":case"esriGeometryPolygon":return e=>function(e,t){if(e)for(const r of e.rings)for(const e of r)e.length>2&&(e[2]*=t)}(e,o)
case"multipoint":case"esriGeometryMultipoint":return e=>function(e,t){if(e)for(const r of e.points)r.length>2&&(r[2]*=t)}(e,o)
case"extent":case"esriGeometryExtent":return e=>function(e,t){e&&null!=e.zmin&&null!=e.zmax&&(e.zmin*=t,e.zmax*=t)}(e,o)
default:return null}}},1168:function(e,t,r){"use strict"
r.d(t,"a",(function(){return j}))
var n,i=r(968),s=r(976),o=r(972),a=r(23),l=r(970),c=(r(971),r(445),r(977)),u=r(969),p=r(974),d=r(989)
let h=n=class extends o.a{constructor(e){super(e)}async collectRequiredFields(e,t){return Object(d.a)(e,t,this.expression)}clone(){return new n({expression:this.expression,title:this.title})}equals(e){return this.expression===e.expression&&this.title===e.title}}
Object(i.a)([Object(l.b)({type:String,json:{write:!0}})],h.prototype,"expression",void 0),Object(i.a)([Object(l.b)({type:String,json:{write:!0}})],h.prototype,"title",void 0),h=n=Object(i.a)([Object(u.a)("esri.layers.support.FeatureExpressionInfo")],h)
const b=h
var f,y=r(1144)
const m=Object(s.b)()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),g=new s.a({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"})
let O=f=class extends o.a{constructor(e){super(e),this.offset=null}readFeatureExpressionInfo(e,t){return null!=e?e:t.featureExpression&&0===t.featureExpression.value?{expression:"0"}:void 0}writeFeatureExpressionInfo(e,t,r,n){t[r]=e.write({},n),"0"===e.expression&&(t.featureExpression={value:0})}get mode(){const{offset:e,featureExpressionInfo:t}=this
return this._isOverridden("mode")?this._get("mode"):Object(a.l)(e)||t?"relative-to-ground":"on-the-ground"}set mode(e){this._override("mode",e)}set unit(e){this._set("unit",e)}write(e,t){return this.offset||this.mode||this.featureExpressionInfo||this.unit?super.write(e,t):null}clone(){return new f({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})}equals(e){return this.mode===e.mode&&this.offset===e.offset&&this.unit===e.unit&&Object(a.g)(this.featureExpressionInfo,e.featureExpressionInfo)}}
Object(i.a)([Object(l.b)({type:b,json:{write:!0}})],O.prototype,"featureExpressionInfo",void 0),Object(i.a)([Object(c.a)("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],O.prototype,"readFeatureExpressionInfo",null),Object(i.a)([Object(p.a)("featureExpressionInfo",{featureExpressionInfo:{type:b},"featureExpression.value":{type:[0]}})],O.prototype,"writeFeatureExpressionInfo",null),Object(i.a)([Object(l.b)({type:m.apiValues,nonNullable:!0,json:{type:m.jsonValues,read:m.read,write:{writer:m.write,isRequired:!0}}})],O.prototype,"mode",null),Object(i.a)([Object(l.b)({type:Number,json:{write:!0}})],O.prototype,"offset",void 0),Object(i.a)([Object(l.b)({type:y.b,json:{type:String,read:g.read,write:g.write}})],O.prototype,"unit",null),O=f=Object(i.a)([Object(u.a)("esri.layers.support.ElevationInfo")],O)
const j=O},1169:function(e,t,r){"use strict"
r.d(t,"a",(function(){return p}))
var n,i=r(968),s=r(446),o=r(970),a=(r(971),r(445),r(969)),l=r(974),c=r(1040)
let u=n=class extends c.a{constructor(e){super(e),this.axis=null,this.type="rotation",this.rotationType="geographic",this.valueExpressionTitle=null}get cache(){return{hasExpression:!!this.valueExpression,compiledFunc:null}}writeValueExpressionTitleWebScene(e,t,r,n){if(n&&n.messages){const e=`visualVariables[${this.index}]`
n.messages.push(new s.a("property:unsupported",this.type+"VisualVariable.valueExpressionTitle is not supported in Web Scene. Please remove this property to save the Web Scene.",{instance:this,propertyName:e+".valueExpressionTitle",context:n}))}}clone(){return new n({axis:this.axis,rotationType:this.rotationType,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,legendOptions:this.legendOptions&&this.legendOptions.clone()})}}
Object(i.a)([Object(o.b)({readOnly:!0})],u.prototype,"cache",null),Object(i.a)([Object(o.b)({type:["heading","tilt","roll"],json:{origins:{"web-scene":{default:"heading",write:!0}}}})],u.prototype,"axis",void 0),Object(i.a)([Object(o.b)({type:["rotation"],json:{type:["rotationInfo"]}})],u.prototype,"type",void 0),Object(i.a)([Object(o.b)({type:["geographic","arithmetic"],json:{write:!0,origins:{"web-document":{write:!0,default:"geographic"}}}})],u.prototype,"rotationType",void 0),Object(i.a)([Object(o.b)({type:String,json:{write:!0}})],u.prototype,"valueExpressionTitle",void 0),Object(i.a)([Object(l.a)("web-scene","valueExpressionTitle")],u.prototype,"writeValueExpressionTitleWebScene",null),u=n=Object(i.a)([Object(a.a)("esri.renderers.visualVariables.RotationVariable")],u)
const p=u},1180:function(e,t,r){"use strict"
r.d(t,"a",(function(){return h}))
var n,i=r(968),s=r(990),o=r(972),a=r(233),l=r(970),c=r(987),u=(r(445),r(969)),p=r(971)
let d=n=class extends o.a{constructor(e){super(e),this.color=null,this.field=null,this.label=null,this.valueExpression=null,this.valueExpressionTitle=null}castField(e){return null==e?e:"function"==typeof e?(a.a.getLogger(this.declaredClass).error(".field: field must be a string value"),null):Object(p.l)(e)}getAttributeHash(){return`${this.field}-${this.valueExpression}`}clone(){return new n({color:this.color&&this.color.clone(),field:this.field,label:this.label,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}}
Object(i.a)([Object(l.b)({type:s.a,json:{type:[Number],write:!0}})],d.prototype,"color",void 0),Object(i.a)([Object(l.b)({type:String,json:{write:!0}})],d.prototype,"field",void 0),Object(i.a)([Object(c.a)("field")],d.prototype,"castField",null),Object(i.a)([Object(l.b)({type:String,json:{write:!0}})],d.prototype,"label",void 0),Object(i.a)([Object(l.b)({type:String,json:{write:!0}})],d.prototype,"valueExpression",void 0),Object(i.a)([Object(l.b)({type:String,json:{write:!0}})],d.prototype,"valueExpressionTitle",void 0),d=n=Object(i.a)([Object(u.a)("esri.renderers.support.AttributeColorInfo")],d)
const h=d},1181:function(e,t,r){"use strict"
r.d(t,"a",(function(){return g})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return h})),r.d(t,"d",(function(){return f})),r.d(t,"e",(function(){return b}))
var n=r(771),i=r(446),s=r(23),o=r(973),a=r(374),l=r(1028),c=r(1466),u=r(1219)
let p={}
function d(e,t,r){return e&&Object(s.l)(e.styleUrl)?async function(e,t){try{return{data:(await f(e,t)).data,baseUrl:Object(a.L)(e),styleUrl:e}}catch(e){return Object(o.p)(e),null}}(e.styleUrl,r):e&&Object(s.l)(e.styleName)?function(e,t,r){const n=Object(s.l)(t.portal)?t.portal:l.a.getDefault()
let o
const a=`${n.url} - ${n.user&&n.user.username} - ${e}`
return p[a]||(p[a]=function(e,t,r){return t.load(r).then(()=>{const n=new c.a({disableExtraQuery:!0,query:`owner:${y} AND type:${m} AND typekeywords:"${e}"`})
return t.queryItems(n,r)}).then(({results:t})=>{let n=null
const s=e.toLowerCase()
if(t&&Array.isArray(t))for(const e of t){var o
if((null==(o=e.typeKeywords)?void 0:o.some(e=>e.toLowerCase()===s))&&e.type===m&&e.owner===y){n=e
break}}if(!n)throw new i.a("symbolstyleutils:style-not-found",`The style '${e}' could not be found`,{styleName:e})
return n.load(r)})}(e,n,r).then(e=>(o=e,e.fetchData())).then(t=>{var r
return{data:t,baseUrl:null!=(r=o.itemUrl)?r:"",styleName:e}})),p[a]}(e.styleName,t,r):Promise.reject(new i.a("symbolstyleutils:style-url-and-name-missing","Either styleUrl or styleName is required to resolve a style"))}function h(e){return null===e||"CIMSymbolReference"===e.type?e:{type:"CIMSymbolReference",symbol:e}}function b(e,t){if("cimRef"===t)return e.cimRef
if(e.formatInfos&&!Object(u.b)())for(const t of e.formatInfos)if("gltf"===t.type)return t.href
return e.webRef}function f(e,t){const r={responseType:"json",query:{f:"json"},...t}
return Object(n.default)(Object(a.I)(e),r)}const y="esri_en",m="Style",g="https://cdn.arcgis.com/sharing/rest/content/items/220936cc6ed342c9937abd8f180e7d1e/resources/styles/cim/{SymbolName}.json?f=json"},1183:function(e,t,r){"use strict"
r.d(t,"a",(function(){return u}))
var n,i=r(968),s=r(972),o=r(980),a=r(970),l=(r(971),r(445),r(969))
let c=n=class extends s.a{constructor(e){super(e),this.label=null,this.size=null,this.value=null}clone(){return new n({label:this.label,size:this.size,value:this.value})}}
Object(i.a)([Object(a.b)({type:String,json:{write:!0}})],c.prototype,"label",void 0),Object(i.a)([Object(a.b)({type:Number,cast:o.k,json:{write:!0}})],c.prototype,"size",void 0),Object(i.a)([Object(a.b)({type:Number,json:{write:!0}})],c.prototype,"value",void 0),c=n=Object(i.a)([Object(l.a)("esri.renderers.visualVariables.support.SizeStop")],c)
const u=c},1184:function(e,t,r){"use strict"
r.d(t,"a",(function(){return o}))
var n=r(989)
function i(e){return"oid"===e.type||"esriFieldTypeOID"===e.type}function s(e){return"global-id"===e.type||"esriFieldTypeGlobalID"===e.type}class o{constructor(e=[]){if(this.fields=[],this._fieldsMap=new Map,this._normalizedFieldsMap=new Map,this._dateFieldsSet=new Set,this._numericFieldsSet=new Set,this.dateFields=[],this.numericFields=[],this._requiredFields=null,!e)return
this.fields=e
const t=[]
for(const o of e){const e=null==o?void 0:o.name,c=l(null==o?void 0:o.name)
if(e&&c){const l=a(e)
this._fieldsMap.set(e,o),this._fieldsMap.set(l,o),this._normalizedFieldsMap.set(c,o),t.push(l),"date"===(r=o).type||"esriFieldTypeDate"===r.type?(this.dateFields.push(o),this._dateFieldsSet.add(o)):Object(n.q)(o)&&(this._numericFieldsSet.add(o),this.numericFields.push(o)),i(o)||s(o)||(o.editable=null==o.editable||!!o.editable,o.nullable=null==o.nullable||!!o.nullable)}}var r
t.sort(),this.uid=t.join(",")}destroy(){this._fieldsMap.clear()}get requiredFields(){if(!this._requiredFields){this._requiredFields=[]
for(const e of this.fields)i(e)||s(e)||e.nullable||void 0!==Object(n.o)(e)||this._requiredFields.push(e)}return this._requiredFields}has(e){return null!=this.get(e)}get(e){var t
if(!e)return
let r=this._fieldsMap.get(e)
return r||(r=null!=(t=this._fieldsMap.get(a(e)))?t:this._normalizedFieldsMap.get(l(e)),r&&this._fieldsMap.set(e,r),r)}isDateField(e){return this._dateFieldsSet.has(this.get(e))}isNumericField(e){return this._numericFieldsSet.has(this.get(e))}normalizeFieldName(e){var t
const r=this.get(e)
if(r)return null!=(t=r.name)?t:void 0}}function a(e){return e.trim().toLowerCase()}function l(e){var t,r
return null!=(t=null==(r=Object(n.t)(e))?void 0:r.toLowerCase())?t:""}},1186:function(e,t,r){"use strict"
r.d(t,"a",(function(){return O})),r.d(t,"b",(function(){return j}))
var n=r(968),i=r(975),s=r(23),o=r(1178),a=r(234),l=r(1006)
class c{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(l.b),this._values=new Map,this.multipleOriginsSupported=!0}clone(e){const t=new c,r=this._originStores[l.a.DEFAULTS]
r&&r.forEach((e,r)=>{t.set(r,Object(a.a)(e),l.a.DEFAULTS)})
for(let r=l.a.SERVICE;r<l.b;r++){const n=this._originStores[r]
n&&n.forEach((n,i)=>{e&&e.has(i)||t.set(i,Object(a.a)(n),r)})}return t}get(e,t){const r=void 0===t?this._values:this._originStores[t]
return r?r.get(e):void 0}keys(e){const t=null==e?this._values:this._originStores[e]
return t?[...t.keys()]:[]}set(e,t,r=l.a.USER){let n=this._originStores[r]
if(n||(n=new Map,this._originStores[r]=n),n.set(e,t),!this._values.has(e)||Object(s.d)(this._propertyOriginMap.get(e))<=r){const n=this._values.get(e)
return this._values.set(e,t),this._propertyOriginMap.set(e,r),n!==t}return!1}delete(e,t=l.a.USER){const r=this._originStores[t]
if(!r)return
const n=r.get(e)
if(r.delete(e),this._values.has(e)&&this._propertyOriginMap.get(e)===t){this._values.delete(e)
for(let r=t-1;r>=0;r--){const t=this._originStores[r]
if(t&&t.has(e)){this._values.set(e,t.get(e)),this._propertyOriginMap.set(e,r)
break}}}return n}has(e,t){const r=void 0===t?this._values:this._originStores[t]
return!!r&&r.has(e)}revert(e,t){for(;t>0&&!this.has(e,t);)--t
const r=this._originStores[t],n=r&&r.get(e),i=this._values.get(e)
return this._values.set(e,n),this._propertyOriginMap.set(e,t),i!==n}originOf(e){return this._propertyOriginMap.get(e)||l.a.DEFAULTS}forEach(e){this._values.forEach(e)}}var u=r(1091),p=r(999),d=r(969)
const h=e=>{let t=class extends e{constructor(...e){super(...e)
const t=Object(s.d)(Object(p.a)(this)),r=t.store,n=new c
t.store=n,Object(o.a)(t,r,n)}read(e,t){Object(u.a)(this,e,t)}getAtOrigin(e,t){const r=b(this),n=Object(l.e)(t)
if("string"==typeof e)return r.get(e,n)
const i={}
return e.forEach(e=>{i[e]=r.get(e,n)}),i}originOf(e){return Object(l.c)(this.originIdOf(e))}originIdOf(e){return b(this).originOf(e)}revert(e,t){const r=b(this),n=Object(l.e)(t),i=Object(p.a)(this)
let s
s="string"==typeof e?"*"===e?r.keys(n):[e]:e,s.forEach(e=>{i.invalidate(e),r.revert(e,n),i.commit(e)})}}
return t=Object(n.a)([Object(d.a)("esri.core.ReadOnlyMultiOriginJSONSupport")],t),t}
function b(e){return Object(p.a)(e).store}let f=class extends(h(i.a)){}
f=Object(n.a)([Object(d.a)("esri.core.ReadOnlyMultiOriginJSONSupport")],f)
var y=r(1096)
const m=e=>{let t=class extends e{constructor(...e){super(...e)}clear(e,t="user"){return g(this).delete(e,Object(l.e)(t))}write(e={},t){return Object(y.b)(this,e=e||{},t),e}setAtOrigin(e,t,r){Object(p.a)(this).setAtOrigin(e,t,Object(l.e)(r))}removeOrigin(e){const t=g(this),r=Object(l.e)(e),n=t.keys(r)
for(const e of n)t.originOf(e)===r&&t.set(e,t.get(e,r),l.a.USER)}updateOrigin(e,t){const r=g(this),n=Object(l.e)(t),i=this.get(e)
for(let t=n+1;t<l.b;++t)r.delete(e,t)
r.set(e,i,n)}toJSON(e){return this.write({},e)}}
return t=Object(n.a)([Object(d.a)("esri.core.WriteableMultiOriginJSONSupport")],t),t.prototype.toJSON.isDefaultToJSON=!0,t}
function g(e){return Object(p.a)(e).store}const O=e=>{let t=class extends(m(h(e))){constructor(...e){super(...e)}}
return t=Object(n.a)([Object(d.a)("esri.core.MultiOriginJSONSupport")],t),t}
let j=class extends(O(i.a)){}
j=Object(n.a)([Object(d.a)("esri.core.MultiOriginJSONSupport")],j)},1189:function(e,t,r){"use strict"
r.d(t,"a",(function(){return i}))
var n=r(1141)
class i{constructor(e,t){this._storage=new n.c,this._storage.maxSize=e,t&&this._storage.registerRemoveFunc("",t)}put(e,t,r){this._storage.put(e,t,r,1)}pop(e){return this._storage.pop(e)}get(e){return this._storage.get(e)}clear(){this._storage.clearAll()}destroy(){this._storage.destroy()}get maxSize(){return this._storage.maxSize}set maxSize(e){this._storage.maxSize=e}}},1193:function(e,t,r){"use strict"
r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return b}))
var n=r(968),i=r(446),s=r(374),o=r(970),a=(r(971),r(445),r(969)),l=r(974),c=r(1091),u=r(1096)
const p={"web-scene/operational-layers":{ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledElevationServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BuildingSceneLayer:!0,GroupLayer:!0,IntegratedMeshLayer:!0,OGCFeatureLayer:!0,PointCloudLayer:!0,WebTiledLayer:!0,CSV:!0,GeoJSON:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,KML:!0,RasterDataLayer:!0,Voxel:!0,LineOfSightLayer:!0},"web-scene/basemap":{ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,WebTiledLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,ArcGISImageServiceLayer:!0,WMS:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0},"web-scene/ground":{ArcGISTiledElevationServiceLayer:!0,RasterDataElevationLayer:!0},"web-map/operational-layers":{ArcGISAnnotationLayer:!0,ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BingMapsAerial:!0,BingMapsHybrid:!0,BingMapsRoad:!0,CSV:!0,GeoRSS:!0,GeoJSON:!0,GroupLayer:!0,KML:!0,MediaLayer:!0,OGCFeatureLayer:!0,OrientedImageryLayer:!0,SubtypeGroupLayer:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,WebTiledLayer:!0},"web-map/basemap":{ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0,BingMapsAerial:!0,BingMapsRoad:!0,BingMapsHybrid:!0},"web-map/tables":{ArcGISFeatureLayer:!0},"portal-item/operational-layers":{ArcGISFeatureLayer:!0,ArcGISSceneServiceLayer:!0,PointCloudLayer:!0,BuildingSceneLayer:!0,IntegratedMeshLayer:!0,OrientedImageryLayer:!0}}
var d=r(1035)
const h=e=>{let t=class extends e{constructor(){super(...arguments),this.title=null}writeListMode(e,t,r,n){(n&&"ground"===n.layerContainerType||e&&Object(u.a)(this,r,{},n))&&(t[r]=e)}writeOperationalLayerType(e,t,r,n){!e||n&&"tables"===n.layerContainerType||(t.layerType=e)}writeTitle(e,t){t.title=null!=e?e:"Layer"}read(e,t){t&&(t.layer=this),Object(c.b)(this,e,t=>super.read(e,t),t)}write(e,t){var r
if(null!=t&&t.origin){var n
const e=`${t.origin}/${t.layerContainerType||"operational-layers"}`,r=p[e]
let s=r&&r[this.operationalLayerType]
if("ArcGISTiledElevationServiceLayer"===this.operationalLayerType&&"web-scene/operational-layers"===e&&(s=!1),"ArcGISDimensionLayer"===this.operationalLayerType&&"web-map/operational-layers"===e&&(s=!1),!s)return null!=(n=t.messages)&&n.push(new i.a("layer:unsupported",`Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${e}'`,{layer:this})),null}const o=super.write(e,{...t,layer:this}),a=!!t&&!!t.messages&&!!t.messages.filter(e=>e instanceof i.a&&"web-document-write:property-required"===e.name).length
return Object(s.y)(null==o?void 0:o.url)?(null!=t&&null!=(r=t.messages)&&r.push(new i.a("layer:invalid-url",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using a Blob URL cannot be written to web scenes and web maps`,{layer:this})),null):!this.url&&a?null:o}beforeSave(){}}
return Object(n.a)([Object(o.b)({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],t.prototype,"id",void 0),Object(n.a)([Object(o.b)(d.f)],t.prototype,"listMode",void 0),Object(n.a)([Object(l.a)("listMode")],t.prototype,"writeListMode",null),Object(n.a)([Object(o.b)({type:String,readOnly:!0,json:{read:!1,write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1}}}})],t.prototype,"operationalLayerType",void 0),Object(n.a)([Object(l.a)("operationalLayerType")],t.prototype,"writeOperationalLayerType",null),Object(n.a)([Object(o.b)(d.i)],t.prototype,"opacity",void 0),Object(n.a)([Object(o.b)({type:String,json:{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}},"portal-item":{write:!1}}},value:"Layer"})],t.prototype,"title",void 0),Object(n.a)([Object(l.a)("title"),Object(l.a)(["web-scene"],"title")],t.prototype,"writeTitle",null),Object(n.a)([Object(o.b)({type:Boolean,json:{name:"visibility"}})],t.prototype,"visible",void 0),t=Object(n.a)([Object(a.a)("esri.layers.mixins.OperationalLayer")],t),t}
function b(e){return"operationalLayerType"in e}},1197:function(e,t,r){"use strict"
r.d(t,"a",(function(){return h}))
var n,i=r(968),s=(r(982),r(976)),o=r(972),a=r(234),l=r(970),c=(r(971),r(969)),u=r(770)
const p=new s.a({upperLeft:"upper-left",lowerLeft:"lower-left"})
let d=n=class extends o.a{constructor(e){super(e),this.extent=null,this.mode="view",this.originPosition="upper-left",this.tolerance=1}clone(){return new n(Object(a.a)({extent:this.extent,mode:this.mode,originPosition:this.originPosition,tolerance:this.tolerance}))}}
Object(i.a)([Object(l.b)({type:u.default,json:{write:{overridePolicy(){return{enabled:"view"===this.mode}}}}})],d.prototype,"extent",void 0),Object(i.a)([Object(l.b)({type:["view","edit"],json:{write:!0}})],d.prototype,"mode",void 0),Object(i.a)([Object(l.b)({type:String,json:{read:p.read,write:p.write}})],d.prototype,"originPosition",void 0),Object(i.a)([Object(l.b)({type:Number,json:{write:{overridePolicy(){return{enabled:"view"===this.mode}}}}})],d.prototype,"tolerance",void 0),d=n=Object(i.a)([Object(c.a)("esri.rest.support.QuantizationParameters")],d)
const h=d},1198:function(e,t,r){"use strict"
r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return s}))
var n=r(23)
async function i(e,t){const{WhereClause:n}=await Promise.all([r.e(9),r.e(33),r.e(750)]).then(r.bind(null,1363))
return n.create(e,t)}function s(e,t){return Object(n.l)(e)?Object(n.l)(t)?`(${e}) AND (${t})`:e:t}},1201:function(e,t,r){"use strict"
r.d(t,"a",(function(){return o}))
var n=r(968),i=r(970),s=(r(971),r(445),r(969))
const o=e=>{let t=class extends e{constructor(){super(...arguments),this.minScale=0,this.maxScale=0}get effectiveScaleRange(){const e={minScale:this.minScale,maxScale:this.maxScale},t=this.parent
t&&"effectiveScaleRange"in t&&function(e,t){e.minScale=e.minScale>0?t.minScale>0?Math.min(e.minScale,t.minScale):e.minScale:t.minScale,e.maxScale=e.maxScale>0?t.maxScale>0?Math.max(e.maxScale,t.maxScale):e.maxScale:t.maxScale}(e,t.effectiveScaleRange)
const r=this._get("effectiveScaleRange")
return r&&r.minScale===e.minScale&&r.maxScale===e.maxScale?r:e}}
return Object(n.a)([Object(i.b)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"minScale",void 0),Object(n.a)([Object(i.b)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"maxScale",void 0),Object(n.a)([Object(i.b)({readOnly:!0})],t.prototype,"effectiveScaleRange",null),t=Object(n.a)([Object(s.a)("esri.layers.mixins.ScaleRangeLayer")],t),t}},1203:function(e,t,r){"use strict"
r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return f})),r.d(t,"d",(function(){return h})),r.d(t,"e",(function(){return b})),r.d(t,"f",(function(){return l})),r.d(t,"g",(function(){return p})),r.d(t,"h",(function(){return c}))
var n=r(991),i=r(980),s=r(1012),o=r(1011)
const a=2.4
function l(e){return Object(i.i)(e*a)}function c(e){return Object(i.h)(e)/a}function u(e,t,r,i){let{color:o,ratio:a}=t,{color:l,ratio:c}=r
if(c===a){const e=1e-6
1===c?a-=e:c+=e}const u=Object(n.f)((i-a)/(c-a),0,1)
Object(s.j)(e,o.toArray(),l.toArray(),u)}function p(e){const t=new Uint8ClampedArray(2048)
if((e=e.filter(({ratio:e})=>e>=0&&e<=1).sort((e,t)=>e.ratio-t.ratio).map(({color:e,ratio:t})=>({color:e,ratio:Math.max(t,.001)}))).length<1)return t
let r=e[0],n=e[0],i=1
const s=Object(o.e)()
for(let o=0;o<512;o++){const a=(o+.5)/512
for(;a>n.ratio&&i<e.length;)r=n,n=e[i++]
u(s,r,n,a),t.set(s,4*o)}return t}function d(e,t,r,n){const{radius:s,fieldOffset:o,field:a}=t,l=Math.round(Object(i.h)(s)),c=new Float64Array(r*n)
let u,p=Number.NEGATIVE_INFINITY
const d=function(e,t){return null!=e?"string"==typeof t?t=>-1*+t.readAttribute(e):r=>+r.readAttribute(e)+t:e=>1}(a,o),h=new Set
for(const t of e){const e=t.getCursor()
for(;e.next();){const t=e.getObjectId()
if(h.has(t))continue
h.add(t)
const i=e.readLegacyPointGeometry(),s=128
if(i.x<-s||i.x>=r+s||i.y<-s||i.y>n+s)continue
const o=+d(e),a=Math.max(0,Math.round(i.x)-l),f=Math.max(0,Math.round(i.y)-l),y=Math.min(n,Math.round(i.y)+l),m=Math.min(r,Math.round(i.x)+l)
for(let e=f;e<y;e++)for(let t=a;t<m;t++){const n=e*r+t,s=b(i.x-t,i.y-e,l)
u=c[n]+=s*o,u>p&&(p=u)}}}return{matrix:c.buffer,max:p}}function h(e,t,r,i,s,o){e.canvas.width=e.canvas.height=t,e.clearRect(0,0,t,t)
const a=e.getImageData(0,0,t,t)
r&&i&&a.data.set(new Uint8ClampedArray(function(e,t,r,i,s){const o=new Uint32Array(e*e),a="buffer"in t?t:new Float64Array(t),l="buffer"in r?new Uint32Array(r.buffer):new Uint32Array(new Uint8Array(r).buffer),c=l.length/(s-i)
for(let e=0;e<a.length;e++){const t=a[e],r=Math.floor((t-i)*c)
o[e]=l[Object(n.f)(r,0,l.length-1)]}return o.buffer}(t,r,i,s,o))),e.putImageData(a,0,0)}function b(e,t,r){const n=Math.sqrt(e**2+t**2)/r
return n>1?0:3/(Math.PI*r**2)*(1-n**2)**2}function f(e,t){return"function"==typeof e?e:e?"string"==typeof t?t=>-1*+t[e]:r=>+r[e]+t:()=>1}},1207:function(e,t,r){"use strict"
function n(e){return 32+e.length}function i(e){return 16}function s(e){if(!e)return 0
let t=c
for(const r in e)if(e.hasOwnProperty(r)){const i=e[r]
switch(typeof i){case"string":t+=n(i)
break
case"number":t+=16
break
case"boolean":t+=4}}return t}function o(e){if(!e)return 0
if(Array.isArray(e))return function(e){const t=e.length
if(0===t||"number"==typeof e[0])return 32+8*t
let r=u
for(let n=0;n<t;n++)r+=a(e[n])
return r}(e)
let t=c
for(const r in e)e.hasOwnProperty(r)&&(t+=a(e[r]))
return t}function a(e){switch(typeof e){case"object":return o(e)
case"string":return n(e)
case"number":return 16
case"boolean":return 4
default:return 8}}function l(e,t){return u+e.length*t}r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return l})),r.d(t,"d",(function(){return o})),r.d(t,"e",(function(){return i})),r.d(t,"f",(function(){return n}))
const c=32,u=32
var p
!function(e){e[e.KILOBYTES=1024]="KILOBYTES",e[e.MEGABYTES=1048576]="MEGABYTES",e[e.GIGABYTES=1073741824]="GIGABYTES"}(p||(p={}))},1209:function(e,t,r){"use strict"
r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return p})),r.d(t,"c",(function(){return d})),r.d(t,"d",(function(){return h})),r.d(t,"e",(function(){return O})),r.d(t,"f",(function(){return u}))
var n=r(447)
const i="__begin__",s="__end__",o=new RegExp(i,"ig"),a=new RegExp(s,"ig"),l=new RegExp("^"+i,"i"),c=new RegExp(s+"$","i")
function u(e){return e.replace(new RegExp("\\{","g"),"[").replace(new RegExp("\\}","g"),"]")}function p(e){const t={expression:"",type:"none"}
return e.labelExpressionInfo?e.labelExpressionInfo.value?(t.expression=e.labelExpressionInfo.value,t.type="conventional"):e.labelExpressionInfo.expression&&(t.expression=e.labelExpressionInfo.expression,t.type="arcade"):null!=e.labelExpression&&(t.expression=function(e){return e.replace(new RegExp("\\[","g"),"{").replace(new RegExp("\\]","g"),"}")}(e.labelExpression),t.type="conventional"),t}function d(e){const t=p(e)
if(!t)return null
switch(t.type){case"conventional":return b(t.expression)
case"arcade":return t.expression}return null}function h(e){const t=p(e)
if(!t)return null
switch(t.type){case"conventional":return function(e){const t=null==e?void 0:e.match(f)
return t&&t[1].trim()||null}(t.expression)
case"arcade":return O(t.expression)}return null}function b(e){let t
return e?(t=Object(n.c)(e,e=>i+'$feature["'+e+'"]'+s),t=l.test(t)?t.replace(l,""):'"'+t,t=c.test(t)?t.replace(c,""):t+'"',t=t.replace(o,'" + ').replace(a,' + "')):t='""',t}const f=/^\s*\{([^}]+)\}\s*$/i,y=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*$/i,m=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(\1|\3)(\5)\s*\));?\s*$/i,g=/^\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])([\w\s]+)(\1)\s*\));?\s*$/i
function O(e){if(!e)return null
let t=y.exec(e)||m.exec(e)
return t?t[1]||t[3]:(t=g.exec(e),t?t[2]:null)}},1210:function(e,t,r){"use strict"
r.d(t,"a",(function(){return d}))
var n,i=r(968),s=r(990),o=r(972),a=r(970),l=r(971),c=(r(445),r(969)),u=r(974)
let p=n=class extends o.a{constructor(e){super(e),this.color=null,this.label=null,this.value=null}writeValue(e,t,r){t[r]=null!=e?e:0}clone(){return new n({color:this.color&&this.color.clone(),label:this.label,value:this.value})}}
Object(i.a)([Object(a.b)({type:s.a,json:{type:[l.a],write:!0}})],p.prototype,"color",void 0),Object(i.a)([Object(a.b)({type:String,json:{write:!0}})],p.prototype,"label",void 0),Object(i.a)([Object(a.b)({type:Number,json:{write:{writerEnsuresNonNull:!0}}})],p.prototype,"value",void 0),Object(i.a)([Object(u.a)("value")],p.prototype,"writeValue",null),p=n=Object(i.a)([Object(c.a)("esri.renderers.visualVariables.support.ColorStop")],p)
const d=p},1212:function(e,t,r){"use strict"
r.d(t,"a",(function(){return u}))
var n,i,s=r(1162),o=r(446),a=r(1131),l=(r(1111),r(1122)),c={}
function u(e){if(!e||0===e.length)return null
if("string"==typeof e){const t=p(e)
return t&&0!==t.length?t:null}const t=e.map(e=>{if(!Number.isFinite(e.scale)||e.scale<=0)throw new o.a("effect:invalid-scale","scale must be finite and greater than 0",{stop:e})
return{scale:e.scale,effects:p(e.value)}})
t.sort((e,t)=>t.effects.length-e.effects.length)
for(let e=0;e<t.length-1;e++){if(!Object(l.a)(t[e].effects,t[e+1].effects))throw new o.a("effect:interpolation-impossible","Cannot interpolate by scale between 2 lists of mixed effects",{a:t[e].effects,b:t[e+1].effects})
Object(l.c)(t[e].effects,t[e+1].effects)}return t.sort((e,t)=>t.scale-e.scale),t}function p(e){let t
if(!e)return[]
try{t=c.parse(e)}catch(t){throw new o.a("effect:invalid-syntax","Invalid effect syntax",{value:e,error:t})}return t.map(e=>function(e){try{switch(e.name){case"grayscale":case"sepia":case"saturate":case"invert":case"brightness":case"contrast":return function(e){let t=1
return d(e.parameters,1),1===e.parameters.length&&(t=m(e.parameters[0])),new a.c(e.name,t)}(e)
case"opacity":return function(e){let t=1
return d(e.parameters,1),1===e.parameters.length&&(t=m(e.parameters[0])),new a.f(t)}(e)
case"hue-rotate":return function(e){let t=0
return d(e.parameters,1),1===e.parameters.length&&(t=function(e){return function(e){if("quantity"!==e.type||!(0===e.value&&null===e.unit||e.unit&&null!=f[e.unit]))throw new o.a("effect:type-error","Expected <angle>, Actual: "+h(e),{term:e})}(e),e.value*f[e.unit]||0}(e.parameters[0])),new a.e(t)}(e)
case"blur":return function(e){let t=0
return d(e.parameters,1),1===e.parameters.length&&(t=g(e.parameters[0]),b(t,e.parameters[0])),new a.b(t)}(e)
case"drop-shadow":return function(e){const t=[]
let r=null
for(const n of e.parameters)if("color"===n.type){if(t.length&&Object.freeze(t),r)throw new o.a("effect:type-error","Accepts only one color",{})
r=O(n)}else{const e=g(n)
if(Object.isFrozen(t))throw new o.a("effect:type-error","<length> parameters not consecutive",{lengths:t})
t.push(e),3===t.length&&b(e,n)}if(t.length<2||t.length>3)throw new o.a("effect:type-error",`Expected <length>{2,3}, Actual: <length>{${t.length}}`,{lengths:t})
return new a.d(t[0],t[1],t[2]||0,r||j("black"))}(e)
case"bloom":return function(e){let t=1,r=0,n=0
return d(e.parameters,3),e.parameters[0]&&(t=m(e.parameters[0])),e.parameters[1]&&(r=g(e.parameters[1]),b(r,e.parameters[1])),e.parameters[2]&&(n=m(e.parameters[2])),new a.a(t,r,n)}(e)}}catch(t){throw t.details.filter=e,t}throw new o.a("effect:unknown-effect",`Effect '${e.name}' is not supported`,{effect:e})}(e))}function d(e,t){if(e.length>t)throw new o.a("effect:type-error",`Function supports up to ${t} parameters, Actual: ${e.length}`,{parameters:e})}function h(e){if("color"===e.type)return"<color>"
if(e.unit){if(y[e.unit])return"<length>"
if(f[e.unit])return"<angle>"
if("%"===e.unit)return"<percentage>"}return"<double>"}function b(e,t){if(e<0)throw new o.a("effect:type-error","Negative values are not allowed, Actual: "+e,{term:t})}i=function(){function e(t,r,n,i){var s=Error.call(this,t)
return Object.setPrototypeOf&&Object.setPrototypeOf(s,e.prototype),s.expected=r,s.found=n,s.location=i,s.name="SyntaxError",s}function t(e,t,r){return r=r||" ",e.length>t?e:(t-=e.length,e+(r+=r.repeat(t)).slice(0,t))}return function(e,t){function r(){this.constructor=e}r.prototype=t.prototype,e.prototype=new r}(e,Error),e.prototype.format=function(e){var r="Error: "+this.message
if(this.location){var n,i=null
for(n=0;n<e.length;n++)if(e[n].source===this.location.source){i=e[n].text.split(/\r\n|\n|\r/g)
break}var s=this.location.start,o=this.location.source+":"+s.line+":"+s.column
if(i){var a=this.location.end,l=t("",s.line.toString().length," "),c=i[s.line-1],u=(s.line===a.line?a.column:c.length+1)-s.column||1
r+="\n --\x3e "+o+"\n"+l+" |\n"+s.line+" | "+c+"\n"+l+" | "+t("",s.column-1," ")+t("",u,"^")}else r+="\n at "+o}return r},e.buildMessage=function(e,t){var r={literal:function(e){return'"'+i(e.text)+'"'},class:function(e){var t=e.parts.map((function(e){return Array.isArray(e)?s(e[0])+"-"+s(e[1]):s(e)}))
return"["+(e.inverted?"^":"")+t.join("")+"]"},any:function(){return"any character"},end:function(){return"end of input"},other:function(e){return e.description}}
function n(e){return e.charCodeAt(0).toString(16).toUpperCase()}function i(e){return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return"\\x0"+n(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return"\\x"+n(e)}))}function s(e){return e.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return"\\x0"+n(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return"\\x"+n(e)}))}function o(e){return r[e.type](e)}return"Expected "+function(e){var t,r,n=e.map(o)
if(n.sort(),n.length>0){for(t=1,r=1;t<n.length;t++)n[t-1]!==n[t]&&(n[r]=n[t],r++)
n.length=r}switch(n.length){case 1:return n[0]
case 2:return n[0]+" or "+n[1]
default:return n.slice(0,-1).join(", ")+", or "+n[n.length-1]}}(e)+" but "+function(e){return e?'"'+i(e)+'"':"end of input"}(t)+" found."},{SyntaxError:e,parse:function(t,r){var n,i={},s=(r=void 0!==r?r:{}).grammarSource,o={start:ae},a=ae,l="none",c="grad",u="turn",p=/^[ \t\n\r]/,d=/^[a-z\-]/,h=/^[0-9a-fA-F]/,b=/^[+\-]/,f=/^[0-9]/,y=ne("none"),m=te("none",!1),g=te(")",!1),O=te(",",!1),j=ne("whitespace"),v=re([" ","\t","\n","\r"],!1,!1),w=ne("function"),S=te("(",!1),x=ne("identifier"),_=re([["a","z"],"-"],!1,!1),I=ne("percentage"),T=te("%",!1),M=ne("length"),F=te("px",!1),E=te("cm",!1),V=te("mm",!1),L=te("in",!1),k=te("pt",!1),A=te("pc",!1),D=ne("angle"),R=te("deg",!1),C=te("rad",!1),P=te("grad",!1),N=te("turn",!1),q=ne("number"),z=ne("color"),U=te("#",!1),G=re([["0","9"],["a","f"],["A","F"]],!1,!1),B=re(["+","-"],!1,!1),$=re([["0","9"]],!1,!1),J=te(".",!1),H=te("e",!1),W=0,Q=0,Y=[{line:1,column:1}],Z=0,K=[],X=0
if("startRule"in r){if(!(r.startRule in o))throw new Error("Can't start parsing from rule \""+r.startRule+'".')
a=o[r.startRule]}function ee(){return t.substring(Q,W)}function te(e,t){return{type:"literal",text:e,ignoreCase:t}}function re(e,t,r){return{type:"class",parts:e,inverted:t,ignoreCase:r}}function ne(e){return{type:"other",description:e}}function ie(e){var r,n=Y[e]
if(n)return n
for(r=e-1;!Y[r];)r--
for(n={line:(n=Y[r]).line,column:n.column};r<e;)10===t.charCodeAt(r)?(n.line++,n.column=1):n.column++,r++
return Y[e]=n,n}function se(e,t){var r=ie(e),n=ie(t)
return{source:s,start:{offset:e,line:r.line,column:r.column},end:{offset:t,line:n.line,column:n.column}}}function oe(e){W<Z||(W>Z&&(Z=W,K=[]),K.push(e))}function ae(){var e
return(e=function(){var e,r
return X++,e=W,ue(),t.substr(W,4)===l?(r=l,W+=4):(r=i,0===X&&oe(m)),r!==i?(ue(),Q=e,e=[]):(W=e,e=i),X--,e===i&&0===X&&oe(y),e}())===i&&(e=function(){var e,t
if(e=[],(t=le())!==i)for(;t!==i;)e.push(t),t=le()
else e=i
return e}()),e}function le(){var e,r,n,s
return e=W,ue(),(r=function(){var e,r,n
return X++,e=W,(r=pe())!==i?(40===t.charCodeAt(W)?(n="(",W++):(n=i,0===X&&oe(S)),n!==i?(Q=e,e=r):(W=e,e=i)):(W=e,e=i),X--,e===i&&(r=i,0===X&&oe(w)),e}())!==i?(ue(),(n=function(){var e,r,n,s,o,a,l,c
if(e=W,(r=ce())!==i){for(n=[],s=W,o=ue(),44===t.charCodeAt(W)?(a=",",W++):(a=i,0===X&&oe(O)),a===i&&(a=null),l=ue(),(c=ce())!==i?s=o=[o,a,l,c]:(W=s,s=i);s!==i;)n.push(s),s=W,o=ue(),44===t.charCodeAt(W)?(a=",",W++):(a=i,0===X&&oe(O)),a===i&&(a=null),l=ue(),(c=ce())!==i?s=o=[o,a,l,c]:(W=s,s=i)
Q=e,e=function(e,t){return t.length>0?function(e,t,r){return[e].concat(function(e,t){return e.map((function(e){return e[3]}))}(t))}(e,t):[e]}(r,n)}else W=e,e=i
return e}())===i&&(n=null),ue(),41===t.charCodeAt(W)?(s=")",W++):(s=i,0===X&&oe(g)),s!==i?(ue(),Q=e,e=function(e,t){return{type:"function",name:e,parameters:t||[]}}(r,n)):(W=e,e=i)):(W=e,e=i),e}function ce(){var e,t
return e=W,(t=de())===i&&(t=he())===i&&(t=be())===i&&(t=function(){var e,t
return X++,e=W,ue(),(t=ye())!==i?(Q=e,e=function(e){return{value:e,unit:null}}(t)):(W=e,e=i),X--,e===i&&0===X&&oe(q),e}()),t!==i&&(Q=e,t=function(e){return{type:"quantity",value:e.value,unit:e.unit}}(t)),(e=t)===i&&(e=W,(t=fe())!==i&&(Q=e,t=function(e){return{type:"color",colorType:e.type,value:e.value}}(t)),e=t),e}function ue(){var e,r
for(X++,e=[],p.test(t.charAt(W))?(r=t.charAt(W),W++):(r=i,0===X&&oe(v));r!==i;)e.push(r),p.test(t.charAt(W))?(r=t.charAt(W),W++):(r=i,0===X&&oe(v))
return X--,r=i,0===X&&oe(j),e}function pe(){var e,r,n
if(X++,e=W,r=[],d.test(t.charAt(W))?(n=t.charAt(W),W++):(n=i,0===X&&oe(_)),n!==i)for(;n!==i;)r.push(n),d.test(t.charAt(W))?(n=t.charAt(W),W++):(n=i,0===X&&oe(_))
else r=i
return r!==i&&(Q=e,r=ee()),X--,(e=r)===i&&(r=i,0===X&&oe(x)),e}function de(){var e,r,n
return X++,e=W,ue(),(r=ye())!==i?(37===t.charCodeAt(W)?(n="%",W++):(n=i,0===X&&oe(T)),n!==i?(Q=e,e=function(e){return{value:e,unit:"%"}}(r)):(W=e,e=i)):(W=e,e=i),X--,e===i&&0===X&&oe(I),e}function he(){var e,r,n
return X++,e=W,ue(),(r=ye())!==i?("px"===t.substr(W,2)?(n="px",W+=2):(n=i,0===X&&oe(F)),n!==i?(Q=e,e=function(e){return{value:e,unit:"px"}}(r)):(W=e,e=i)):(W=e,e=i),e===i&&(e=W,ue(),(r=ye())!==i?("cm"===t.substr(W,2)?(n="cm",W+=2):(n=i,0===X&&oe(E)),n!==i?(Q=e,e=function(e){return{value:e,unit:"cm"}}(r)):(W=e,e=i)):(W=e,e=i),e===i&&(e=W,ue(),(r=ye())!==i?("mm"===t.substr(W,2)?(n="mm",W+=2):(n=i,0===X&&oe(V)),n!==i?(Q=e,e=function(e){return{value:e,unit:"mm"}}(r)):(W=e,e=i)):(W=e,e=i),e===i&&(e=W,ue(),(r=ye())!==i?("in"===t.substr(W,2)?(n="in",W+=2):(n=i,0===X&&oe(L)),n!==i?(Q=e,e=function(e){return{value:e,unit:"in"}}(r)):(W=e,e=i)):(W=e,e=i),e===i&&(e=W,ue(),(r=ye())!==i?("pt"===t.substr(W,2)?(n="pt",W+=2):(n=i,0===X&&oe(k)),n!==i?(Q=e,e=function(e){return{value:e,unit:"pt"}}(r)):(W=e,e=i)):(W=e,e=i),e===i&&(e=W,ue(),(r=ye())!==i?("pc"===t.substr(W,2)?(n="pc",W+=2):(n=i,0===X&&oe(A)),n!==i?(Q=e,e=function(e){return{value:e,unit:"pc"}}(r)):(W=e,e=i)):(W=e,e=i)))))),X--,e===i&&0===X&&oe(M),e}function be(){var e,r,n
return X++,e=W,(r=ye())!==i?("deg"===t.substr(W,3)?(n="deg",W+=3):(n=i,0===X&&oe(R)),n!==i?(Q=e,e=function(e){return{value:e,unit:"deg"}}(r)):(W=e,e=i)):(W=e,e=i),e===i&&(e=W,(r=ye())!==i?("rad"===t.substr(W,3)?(n="rad",W+=3):(n=i,0===X&&oe(C)),n!==i?(Q=e,e=function(e){return{value:e,unit:"rad"}}(r)):(W=e,e=i)):(W=e,e=i),e===i&&(e=W,(r=ye())!==i?(t.substr(W,4)===c?(n=c,W+=4):(n=i,0===X&&oe(P)),n!==i?(Q=e,e=function(e){return{value:e,unit:"grad"}}(r)):(W=e,e=i)):(W=e,e=i),e===i&&(e=W,(r=ye())!==i?(t.substr(W,4)===u?(n=u,W+=4):(n=i,0===X&&oe(N)),n!==i?(Q=e,e=function(e){return{value:e,unit:"turn"}}(r)):(W=e,e=i)):(W=e,e=i)))),X--,e===i&&(r=i,0===X&&oe(D)),e}function fe(){var e,r,n,s
if(X++,e=W,35===t.charCodeAt(W)?(r="#",W++):(r=i,0===X&&oe(U)),r!==i){if(n=[],h.test(t.charAt(W))?(s=t.charAt(W),W++):(s=i,0===X&&oe(G)),s!==i)for(;s!==i;)n.push(s),h.test(t.charAt(W))?(s=t.charAt(W),W++):(s=i,0===X&&oe(G))
else n=i
n!==i?(Q=e,e={type:"hex",value:ee()}):(W=e,e=i)}else W=e,e=i
return e===i&&(e=W,(r=le())!==i&&(Q=e,r=function(e){return{type:"function",value:e}}(r)),(e=r)===i&&(e=W,(r=pe())!==i&&(Q=e,r={type:"named",value:ee()}),e=r)),X--,e===i&&(r=i,0===X&&oe(z)),e}function ye(){var e,r,n,s,o,a,l
for(e=W,b.test(t.charAt(W))?(t.charAt(W),W++):0===X&&oe(B),r=W,n=[],f.test(t.charAt(W))?(s=t.charAt(W),W++):(s=i,0===X&&oe($));s!==i;)n.push(s),f.test(t.charAt(W))?(s=t.charAt(W),W++):(s=i,0===X&&oe($))
if(46===t.charCodeAt(W)?(s=".",W++):(s=i,0===X&&oe(J)),s!==i){if(o=[],f.test(t.charAt(W))?(a=t.charAt(W),W++):(a=i,0===X&&oe($)),a!==i)for(;a!==i;)o.push(a),f.test(t.charAt(W))?(a=t.charAt(W),W++):(a=i,0===X&&oe($))
else o=i
o!==i?r=n=[n,s,o]:(W=r,r=i)}else W=r,r=i
if(r===i)if(r=[],f.test(t.charAt(W))?(n=t.charAt(W),W++):(n=i,0===X&&oe($)),n!==i)for(;n!==i;)r.push(n),f.test(t.charAt(W))?(n=t.charAt(W),W++):(n=i,0===X&&oe($))
else r=i
if(r!==i){if(n=W,101===t.charCodeAt(W)?(s="e",W++):(s=i,0===X&&oe(H)),s!==i){if(b.test(t.charAt(W))?(o=t.charAt(W),W++):(o=i,0===X&&oe(B)),o===i&&(o=null),a=[],f.test(t.charAt(W))?(l=t.charAt(W),W++):(l=i,0===X&&oe($)),l!==i)for(;l!==i;)a.push(l),f.test(t.charAt(W))?(l=t.charAt(W),W++):(l=i,0===X&&oe($))
else a=i
a!==i?n=s=[s,o,a]:(W=n,n=i)}else W=n,n=i
n===i&&(n=null),Q=e,e=parseFloat(ee())}else W=e,e=i
return e}if((n=a())!==i&&W===t.length)return n
throw n!==i&&W<t.length&&oe({type:"end"}),function(t,r,n){return new e(e.buildMessage(t,r),t,r,n)}(K,Z<t.length?t.charAt(Z):null,Z<t.length?se(Z,Z+1):se(Z,Z))}}},(n={get exports(){return c},set exports(e){c=e}}).exports&&(n.exports=i())
const f={deg:1,grad:.9,rad:180/Math.PI,turn:360},y={px:1,cm:96/2.54,mm:96/2.54/10,in:96,pc:16,pt:96/72}
function m(e){!function(e){if("quantity"!==e.type||null!==e.unit&&"%"!==e.unit)throw new o.a("effect:type-error","Expected <double> or <percentage>, Actual: "+h(e),{term:e})}(e)
const t=e.value
return b(t,e),"%"===e.unit?.01*t:t}function g(e){return function(e){if("quantity"!==e.type||!(0===e.value&&null===e.unit||e.unit&&null!=y[e.unit]))throw new o.a("effect:type-error","Expected <length>, Actual: "+h(e),{term:e})}(e),e.value*y[e.unit]||0}function O(e){switch(e.colorType){case"hex":return Object(s.c)(e.value)
case"named":return j(e.value)
case"function":return function(e){if(d(e.parameters,4),v.test(e.name))return[m(e.parameters[0]),m(e.parameters[1]),m(e.parameters[2]),e.parameters[3]?m(e.parameters[3]):1]
if(w.test(e.name))return Object(s.d)(function(e){return function(e){if("quantity"!==e.type||null!==e.unit)throw new o.a("effect:type-error","Expected <double>, Actual: "+h(e),{term:e})}(e),b(e.value,e),e.value}(e.parameters[0]),m(e.parameters[1]),m(e.parameters[2]),e.parameters[3]?m(e.parameters[3]):1)
throw new o.a("effect:syntax-error",`Invalid color function '${e.name}'`,{colorFunction:e})}(e.value)}}function j(e){if(!Object(s.e)(e))throw new o.a("effect:unknown-color",`color '${e}' isn't valid`,{namedColor:e})
return Object(s.b)(e)}const v=/^rgba?/i,w=/^hsla?/i},1213:function(e,t,r){"use strict"
function n(){const e=new Float32Array(16)
return e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}r.d(t,"a",(function(){return n}))
const i=n()
Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:i,clone:function(e){const t=new Float32Array(16)
return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t},create:n,createView:function(e,t){return new Float32Array(e,t,16)},fromValues:function(e,t,r,n,i,s,o,a,l,c,u,p,d,h,b,f){const y=new Float32Array(16)
return y[0]=e,y[1]=t,y[2]=r,y[3]=n,y[4]=i,y[5]=s,y[6]=o,y[7]=a,y[8]=l,y[9]=c,y[10]=u,y[11]=p,y[12]=d,y[13]=h,y[14]=b,y[15]=f,y}},Symbol.toStringTag,{value:"Module"}))},1219:function(e,t,r){"use strict"
r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return o}))
var n=r(235)
const i=()=>!!Object(n.a)("enable-feature:force-wosr"),s=()=>!!Object(n.a)("enable-feature:direct-3d-object-feature-layer-display"),o=()=>!!Object(n.a)("enable-feature:SceneLayer-editing")},1220:function(e,t,r){"use strict"
r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return m})),r.d(t,"c",(function(){return g})),r.d(t,"d",(function(){return y})),r.d(t,"e",(function(){return b})),r.d(t,"f",(function(){return f})),r.d(t,"g",(function(){return O}))
var n=r(771),i=r(23),s=r(374),o=r(983),a=r(1155),l=r(1406),c=r(1445),u=r(1267)
const p="Layer does not support extent calculation."
function d(e,t){const r=e.geometry,n=e.toJSON()
delete n.compactGeometryEnabled,delete n.defaultSpatialReferenceEnabled
const s=n
let a,l,c
if(Object(i.l)(r)&&(l=r.spatialReference,c=r.spatialReference.wkid||JSON.stringify(r.spatialReference),s.geometryType=Object(o.c)(r),s.geometry=function(e,t){if(t&&"extent"===e.type)return`${e.xmin},${e.ymin},${e.xmax},${e.ymax}`
if(t&&"point"===e.type)return`${e.x},${e.y}`
const r=e.toJSON()
return delete r.spatialReference,JSON.stringify(r)}(r,e.compactGeometryEnabled),s.inSR=c),n.groupByFieldsForStatistics&&(s.groupByFieldsForStatistics=n.groupByFieldsForStatistics.join(",")),n.objectIds&&(s.objectIds=n.objectIds.join(",")),n.orderByFields&&(s.orderByFields=n.orderByFields.join(",")),!n.outFields||!n.returnDistinctValues&&(null!=t&&t.returnCountOnly||null!=t&&t.returnExtentOnly||null!=t&&t.returnIdsOnly)?delete s.outFields:n.outFields.includes("*")?s.outFields="*":s.outFields=n.outFields.join(","),n.outSR?(s.outSR=n.outSR.wkid||JSON.stringify(n.outSR),a=e.outSpatialReference):r&&(n.returnGeometry||n.returnCentroid)&&(s.outSR=s.inSR,a=l),n.returnGeometry&&delete n.returnGeometry,n.outStatistics&&(s.outStatistics=JSON.stringify(n.outStatistics)),n.fullText&&(s.fullText=JSON.stringify(n.fullText)),n.pixelSize&&(s.pixelSize=JSON.stringify(n.pixelSize)),n.quantizationParameters&&(e.defaultSpatialReferenceEnabled&&Object(i.l)(l)&&Object(i.l)(e.quantizationParameters)&&Object(i.l)(e.quantizationParameters.extent)&&l.equals(e.quantizationParameters.extent.spatialReference)&&delete n.quantizationParameters.extent.spatialReference,s.quantizationParameters=JSON.stringify(n.quantizationParameters)),n.parameterValues&&(s.parameterValues=JSON.stringify(n.parameterValues)),n.rangeValues&&(s.rangeValues=JSON.stringify(n.rangeValues)),n.dynamicDataSource&&(s.layer=JSON.stringify({source:n.dynamicDataSource}),delete n.dynamicDataSource),n.timeExtent){const e=n.timeExtent,{start:t,end:r}=e
null==t&&null==r||(s.time=t===r?t:`${null!=t?t:"null"},${null!=r?r:"null"}`),delete n.timeExtent}return e.defaultSpatialReferenceEnabled&&Object(i.l)(l)&&Object(i.l)(a)&&l.equals(a)&&(s.defaultSR=s.inSR,delete s.inSR,delete s.outSR),s}async function h(e,t,r,n){const s=Object(i.l)(t.timeExtent)&&t.timeExtent.isEmpty?{data:{features:[]}}:await O(e,t,"json",n)
return Object(u.a)(t,r,s.data),s}async function b(e,t,r,n){if(Object(i.l)(t.timeExtent)&&t.timeExtent.isEmpty)return{data:r.createFeatureResult()}
const s=await f(e,t,n),o=s
return o.data=Object(c.a)(s.data,r),o}function f(e,t,r){return O(e,t,"pbf",r)}function y(e,t,r){return Object(i.l)(t.timeExtent)&&t.timeExtent.isEmpty?Promise.resolve({data:{objectIds:[]}}):O(e,t,"json",r,{returnIdsOnly:!0})}function m(e,t,r){return Object(i.l)(t.timeExtent)&&t.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):O(e,t,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}function g(e,t,r){return Object(i.l)(t.timeExtent)&&t.timeExtent.isEmpty?Promise.resolve({data:{count:0,extent:null}}):O(e,t,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then(e=>{const t=e.data
if(t.hasOwnProperty("extent"))return e
if(t.features)throw new Error(p)
if(t.hasOwnProperty("count"))throw new Error(p)
return e})}function O(e,t,r,o={},c={}){const u="string"==typeof e?Object(s.Q)(e):e,p=t.geometry?[t.geometry]:[]
return o.responseType="pbf"===r?"array-buffer":"json",Object(a.a)(p,null,o).then(e=>{const a=e&&e[0]
Object(i.l)(a)&&((t=t.clone()).geometry=a)
const p=Object(l.a)({...u.query,f:r,...c,...d(t,c)})
return Object(n.default)(Object(s.E)(u.path,"query"),{...o,query:{...p,...o.query}})})}},1221:function(e,t,r){"use strict"
r.d(t,"a",(function(){return l}))
var n=r(968),i=r(970),s=(r(971),r(445),r(969)),o=r(1134)
const a={read:{reader:o.b},write:{allowNull:!0,writer:o.c}},l=e=>{let t=class extends e{constructor(){super(...arguments),this.blendMode="normal",this.effect=null}}
return Object(n.a)([Object(i.b)({type:["average","color-burn","color-dodge","color","darken","destination-atop","destination-in","destination-out","destination-over","difference","exclusion","hard-light","hue","invert","lighten","lighter","luminosity","minus","multiply","normal","overlay","plus","reflect","saturation","screen","soft-light","source-atop","source-in","source-out","vivid-light","xor"],nonNullable:!0,json:{read:!1,write:!1,origins:{"web-map":{read:!0,write:!0},"portal-item":{read:!0,write:!0}}}})],t.prototype,"blendMode",void 0),Object(n.a)([Object(i.b)({json:{read:!1,write:!1,origins:{"web-map":a,"portal-item":a}}})],t.prototype,"effect",void 0),t=Object(n.a)([Object(s.a)("esri.layers.mixins.BlendLayer")],t),t}},1223:function(e,t,r){"use strict"
r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return s})),r.d(t,"d",(function(){return a})),r.d(t,"e",(function(){return o})),r.d(t,"f",(function(){return l})),r.d(t,"g",(function(){return c})),r.d(t,"h",(function(){return p})),r.d(t,"i",(function(){return u}))
const n=[252,146,31,255],i=[153,153,153,255],s={type:"esriSMS",style:"esriSMSCircle",size:6,color:n,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},o={type:"esriSLS",style:"esriSLSSolid",width:.75,color:n},a={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},l={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},c={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},u={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},p={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}},1233:function(e,t,r){"use strict"
r.d(t,"a",(function(){return d}))
var n,i=r(968),s=r(972),o=r(234),a=r(970),l=r(971),c=r(969),u=r(974)
let p=n=class extends s.a{constructor(e){super(e),this.attachmentTypes=null,this.attachmentsWhere=null,this.cacheHint=void 0,this.keywords=null,this.globalIds=null,this.name=null,this.num=null,this.objectIds=null,this.returnMetadata=!1,this.size=null,this.start=null,this.where=null}writeStart(e,t){t.resultOffset=this.start,t.resultRecordCount=this.num||10}clone(){return new n(Object(o.a)({attachmentTypes:this.attachmentTypes,attachmentsWhere:this.attachmentsWhere,cacheHint:this.cacheHint,keywords:this.keywords,where:this.where,globalIds:this.globalIds,name:this.name,num:this.num,objectIds:this.objectIds,returnMetadata:this.returnMetadata,size:this.size,start:this.start}))}}
Object(i.a)([Object(a.b)({type:[String],json:{write:!0}})],p.prototype,"attachmentTypes",void 0),Object(i.a)([Object(a.b)({type:String,json:{read:{source:"attachmentsDefinitionExpression"},write:{target:"attachmentsDefinitionExpression"}}})],p.prototype,"attachmentsWhere",void 0),Object(i.a)([Object(a.b)({type:Boolean,json:{write:!0}})],p.prototype,"cacheHint",void 0),Object(i.a)([Object(a.b)({type:[String],json:{write:!0}})],p.prototype,"keywords",void 0),Object(i.a)([Object(a.b)({type:[Number],json:{write:!0}})],p.prototype,"globalIds",void 0),Object(i.a)([Object(a.b)({json:{write:!0}})],p.prototype,"name",void 0),Object(i.a)([Object(a.b)({type:Number,json:{read:{source:"resultRecordCount"}}})],p.prototype,"num",void 0),Object(i.a)([Object(a.b)({type:[Number],json:{write:!0}})],p.prototype,"objectIds",void 0),Object(i.a)([Object(a.b)({type:Boolean,json:{default:!1,write:!0}})],p.prototype,"returnMetadata",void 0),Object(i.a)([Object(a.b)({type:[Number],json:{write:!0}})],p.prototype,"size",void 0),Object(i.a)([Object(a.b)({type:Number,json:{read:{source:"resultOffset"}}})],p.prototype,"start",void 0),Object(i.a)([Object(u.a)("start"),Object(u.a)("num")],p.prototype,"writeStart",null),Object(i.a)([Object(a.b)({type:String,json:{read:{source:"definitionExpression"},write:{target:"definitionExpression"}}})],p.prototype,"where",void 0),p=n=Object(i.a)([Object(c.a)("esri.rest.support.AttachmentQuery")],p),p.from=Object(l.m)(p)
const d=p},1236:function(e,t,r){"use strict"
r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return o}))
var n=r(1158),i=r(1094),s=r(1253)
const o={key:"type",base:i.a,typeMap:{algorithmic:n.a,multipart:s.a}}
function a(e){return e&&e.type?"algorithmic"===e.type?n.a.fromJSON(e):"multipart"===e.type?s.a.fromJSON(e):null:null}},1237:function(e,t,r){"use strict"
r.d(t,"a",(function(){return n}))
class n{constructor(){this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1,this.uniqueIdField=null,this.queryGeometryType=null,this.queryGeometry=null}weakClone(){const e=new n
return e.objectIdFieldName=this.objectIdFieldName,e.globalIdFieldName=this.globalIdFieldName,e.geohashFieldName=this.geohashFieldName,e.geometryProperties=this.geometryProperties,e.geometryType=this.geometryType,e.spatialReference=this.spatialReference,e.hasZ=this.hasZ,e.hasM=this.hasM,e.features=this.features,e.fields=this.fields,e.transform=this.transform,e.exceededTransferLimit=this.exceededTransferLimit,e.uniqueIdField=this.uniqueIdField,e.queryGeometry=this.queryGeometry,e.queryGeometryType=this.queryGeometryType,e}}},1240:function(e,t,r){"use strict"
function n(e){var t,r,n
return null!=(t=null==(r=e.match(i))||null==(n=r[1])?void 0:n.replace(/\\'/g,"'"))?t:null}r.d(t,"a",(function(){return n}))
const i=/^hash\(\$feature\['((\\'|[^'])+)'\]\) \* 8\.381e-8$/},1241:function(e,t,r){"use strict"
r.d(t,"a",(function(){return y})),r.d(t,"b",(function(){return m}))
var n=r(995),i=r(446),s=r(1145),o=r(1336),a=r(1065),l=r(1455),c=r(1078),u=r(1402),p=r(1073),d=r(1456),h=r(1218),b=r(1239),f=r(1454)
const y={retainId:!1,ignoreDrivers:!1,hasLabelingContext:!0}
function m(e,t=y){if(!e)return{symbol:null}
const{retainId:r=y.retainId,ignoreDrivers:m=y.ignoreDrivers,hasLabelingContext:g=y.hasLabelingContext,retainCIM:O=y.retainCIM}=t
let j=null
if(Object(n.c)(e)||e instanceof s.a)j=e.clone()
else if("cim"===e.type){var v,w
const t=null==(v=e.data)||null==(w=v.symbol)?void 0:w.type
if("CIMPointSymbol"!==t)return{error:new i.a("symbol-conversion:unsupported-cim-symbol",`CIM symbol of type '${t||"unknown"}' is unsupported in 3D`,{symbol:e})}
j=O?e.clone():o.a.fromCIMSymbol(e)}else if(e instanceof a.a)j=l.a.fromSimpleLineSymbol(e)
else if(e instanceof c.a)j=o.a.fromSimpleMarkerSymbol(e)
else if(e instanceof u.a)j=o.a.fromPictureMarkerSymbol(e)
else if(e instanceof p.a)j=t.geometryType&&"mesh"===t.geometryType?d.a.fromSimpleFillSymbol(e):h.a.fromSimpleFillSymbol(e)
else{if(!(e instanceof b.a))return{error:new i.a("symbol-conversion:unsupported-2d-symbol",`2D symbol of type '${e.type||e.declaredClass}' is unsupported in 3D`,{symbol:e})}
j=g?f.a.fromTextSymbol(e):o.a.fromTextSymbol(e)}if(r&&j&&"cim"!==j.type&&(j.id=e.id),m&&Object(n.c)(j))for(let e=0;e<j.symbolLayers.length;++e)j.symbolLayers.getItemAt(e)._ignoreDrivers=!0
return{symbol:j}}},1245:function(e,t,r){"use strict"
r.d(t,"a",(function(){return p}))
var n,i=r(968),s=r(990),o=r(972),a=r(970),l=r(971),c=(r(445),r(969))
let u=n=class extends o.a{constructor(e){super(e),this.color=null,this.ratio=null}clone(){return new n({color:this.color,ratio:this.ratio})}}
Object(i.a)([Object(a.b)({type:s.a,json:{type:[l.a],default:null,write:!0}})],u.prototype,"color",void 0),Object(i.a)([Object(a.b)({type:Number,json:{write:!0}})],u.prototype,"ratio",void 0),u=n=Object(i.a)([Object(c.a)("esri.renderers.support.HeatmapColorStop")],u)
const p=u},1246:function(e,t,r){"use strict"
r.d(t,"a",(function(){return l}))
var n,i=r(968),s=r(972),o=r(970),a=(r(971),r(445),r(969))
let l=n=class extends s.a{constructor(e){super(e),this.name=null,this.code=null}clone(){return new n({name:this.name,code:this.code})}}
Object(i.a)([Object(o.b)({type:String,json:{write:!0}})],l.prototype,"name",void 0),Object(i.a)([Object(o.b)({type:[String,Number],json:{write:!0}})],l.prototype,"code",void 0),l=n=Object(i.a)([Object(a.a)("esri.layers.support.CodedValue")],l)},1247:function(e,t,r){"use strict"
r.d(t,"a",(function(){return w}))
var n=r(968),i=r(110),s=r(196),o=r(771),a=r(1034),l=r(446),c=r(233),u=r(23),p=r(973),d=r(374),h=r(970),b=(r(971),r(445),r(977)),f=r(969),y=r(974),m=r(1037),g=r(1028),O=r(1154),j=r(1542),v=r(1248)
const w=e=>{let t=class extends e{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0,this.userHasFullEditingPrivileges=!1,this.userHasUpdateItemPrivileges=!1}destroy(){this.portalItem=Object(u.e)(this.portalItem)}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,r){if(t.itemId)return new O.default({id:t.itemId,portal:r&&r.portal})}writePortalItem(e,t){e&&e.id&&(t.itemId=e.id)}async loadFromPortal(e,t){if(this.portalItem&&this.portalItem.id)try{const n=await r.e(336).then(r.bind(null,1478))
return Object(p.q)(t),await n.load({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData,layerModuleTypeMap:e.layerModuleTypeMap},t)}catch(e){throw Object(p.j)(e)||c.a.getLogger(this.declaredClass).warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${e}`),e}}async finishLoadEditablePortalLayer(e){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(e).catch(e=>(Object(p.p)(e),!0)))}async _setUserPrivileges(e,t){if(!i.default.userPrivilegesApplied)return this.finishLoadEditablePortalLayer(t)
if(this.url)try{const{features:{edit:r,fullEdit:n},content:{updateItem:i}}=await this._fetchUserPrivileges(e,t)
this._set("userHasEditingPrivileges",r),this._set("userHasFullEditingPrivileges",n),this._set("userHasUpdateItemPrivileges",i)}catch(e){Object(p.p)(e)}}async _fetchUserPrivileges(e,t){let r=this.portalItem
if(!e||!r||!r.loaded||r.sourceUrl)return this._fetchFallbackUserPrivileges(t)
const n=e===r.id
if(n&&r.portal.user)return Object(v.c)(r)
let i,o
if(n)i=r.portal.url
else try{i=await Object(m.c)(this.url,t)}catch(e){Object(p.p)(e)}if(!i||!Object(d.u)(i,r.portal.url))return this._fetchFallbackUserPrivileges(t)
try{const e=Object(u.l)(t)?t.signal:null
o=await(null==s.b?void 0:s.b.getCredential(i+"/sharing",{prompt:!1,signal:e}))}catch(e){Object(p.p)(e)}if(!o)return{features:{edit:!0,fullEdit:!1},content:{updateItem:!1}}
try{if(n?await r.reload():(r=new O.default({id:e,portal:{url:i}}),await r.load(t)),r.portal.user)return Object(v.c)(r)}catch(e){Object(p.p)(e)}return{features:{edit:!0,fullEdit:!1},content:{updateItem:!1}}}async _fetchFallbackUserPrivileges(e){let t=!0
try{t=await this._fetchUserHasEditingPrivileges(e)}catch(e){Object(p.p)(e)}return{features:{edit:t,fullEdit:!1},content:{updateItem:!1}}}async _fetchUserHasEditingPrivileges(e){const t=this.url?null==s.b?void 0:s.b.findCredential(this.url):null
if(!t)return!0
const r=S.credential===t?S.user:await this._fetchEditingUser(e)
return S.credential=t,S.user=r,Object(u.k)(r)||null==r.privileges||r.privileges.includes("features:user:edit")}async _fetchEditingUser(e){var t,r,n
const i=null==(t=this.portalItem)||null==(r=t.portal)?void 0:r.user
if(i)return i
const l=s.b.findServerInfo(null!=(n=this.url)?n:"")
if(null==l||!l.owningSystemUrl)return null
const c=l.owningSystemUrl+"/sharing/rest",p=g.a.getDefault()
if(p&&p.loaded&&Object(d.I)(p.restUrl)===Object(d.I)(c))return p.user
const h=c+"/community/self",b=Object(u.l)(e)?e.signal:null,f=await Object(a.e)(Object(o.default)(h,{authMode:"no-prompt",query:{f:"json"},signal:b}))
return f.ok?j.default.fromJSON(f.value.data):null}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){const r=t&&t.portal,n=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||g.a.getDefault())
return r&&n&&!Object(d.w)(n.restUrl,r.restUrl)?(t.messages&&t.messages.push(new l.a("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(e,{...t,layer:this})}}
return Object(n.a)([Object(h.b)({type:O.default})],t.prototype,"portalItem",null),Object(n.a)([Object(b.a)("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),Object(n.a)([Object(y.a)("web-document","portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),Object(n.a)([Object(h.b)({clonable:!1})],t.prototype,"resourceReferences",void 0),Object(n.a)([Object(h.b)({type:Boolean,readOnly:!0})],t.prototype,"userHasEditingPrivileges",void 0),Object(n.a)([Object(h.b)({type:Boolean,readOnly:!0})],t.prototype,"userHasFullEditingPrivileges",void 0),Object(n.a)([Object(h.b)({type:Boolean,readOnly:!0})],t.prototype,"userHasUpdateItemPrivileges",void 0),t=Object(n.a)([Object(f.a)("esri.layers.mixins.PortalLayer")],t),t},S={credential:null,user:null}},1248:function(e,t,r){"use strict"
r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return p})),r.d(t,"d",(function(){return c})),r.d(t,"e",(function(){return a})),r.d(t,"f",(function(){return l}))
var n=r(1015),i=r(769),s=r(774)
function o(e,t){if(!a(e,t)){const r=e.typeKeywords
r?r.push(t):e.typeKeywords=[t]}}function a(e,t){var r
return!(null==(r=e.typeKeywords)||!r.includes(t))}function l(e,t){const r=e.typeKeywords
if(r){const e=r.indexOf(t)
e>-1&&r.splice(e,1)}}async function c(e){const t=e.clone().normalize()
let r
if(t.length>1)for(const e of t)r?e.width>r.width&&(r=e):r=e
else r=t[0]
return async function(e){const t=e.spatialReference
if(t.isWGS84)return e.clone()
if(t.isWebMercator)return Object(s.webMercatorToGeographic)(e)
const r=i.default.WGS84
return await Object(n.g)(t,r),Object(n.m)(e,r)}(r)}const u={DEVELOPER_BASEMAP:"DeveloperBasemap",JSAPI:"ArcGIS API for JavaScript",METADATA:"Metadata",MULTI_LAYER:"Multilayer",SINGLE_LAYER:"Singlelayer",TABLE:"Table"}
function p(e){var t
const{portal:r,isOrgItem:n,itemControl:i}=e,s=null==(t=r.user)?void 0:t.privileges
let o=!s||s.includes("features:user:edit"),a=!!n&&!(null==s||!s.includes("features:user:fullEdit"))
const l="update"===i||"admin"===i
return l?a=o=!0:a&&(o=!0),{features:{edit:o,fullEdit:a},content:{updateItem:l}}}},1253:function(e,t,r){"use strict"
r.d(t,"a",(function(){return p}))
var n,i=r(968),s=r(234),o=r(970),a=(r(971),r(969)),l=r(1158),c=r(1094)
let u=n=class extends c.a{constructor(e){super(e),this.colorRamps=null,this.type="multipart"}clone(){return new n({colorRamps:Object(s.a)(this.colorRamps)})}}
Object(i.a)([Object(o.b)({type:[l.a],json:{write:!0}})],u.prototype,"colorRamps",void 0),Object(i.a)([Object(o.b)({type:["multipart"]})],u.prototype,"type",void 0),u=n=Object(i.a)([Object(a.a)("esri.rest.support.MultipartColorRamp")],u)
const p=u},1254:function(e,t,r){"use strict"
r.r(t),r.d(t,"DictionaryLoader",(function(){return f}))
var n=r(990),i=r(771),s=r(446),o=r(233),a=r(1189),l=r(23),c=r(973),u=r(447),p=r(1010),d=r(781)
const h="esri.renderers.support.DictionaryLoader",b={type:"CIMSimpleLineCallout",lineSymbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",width:.5,color:[0,0,0,255]}]}}
class f{constructor(e,t,r){this.config=null,this.fieldMap=null,this.url=null,this._ongoingRequests=new Map,this._symbolCache=new a.a(100),this._dictionaryPromise=null,this.url=e,this.config=t,this.fieldMap=r}getSymbolFields(){return this._symbolFields}async getSymbolAsync(e,t){let r
this._dictionaryPromise||(this._dictionaryPromise=this.fetchResources(t))
try{r=await this._dictionaryPromise}catch(e){if(Object(c.j)(e))return this._dictionaryPromise=null,null}const i={}
if(this.fieldMap)for(const t of this._symbolFields){const r=this.fieldMap[t]
if(r&&null!=e.attributes[r]){const n=""+e.attributes[r]
i[t]=n}else i[t]=""}const s=null==r?void 0:r(i,t)
if(!s||"string"!=typeof s)return null
const o=Object(u.b)(s).toString(),a=this._symbolCache.get(o)
if(a)return a.catch(()=>{this._symbolCache.pop(o)}),a
const p=s.split(";"),d=[],h=[]
for(const e of p)if(e)if(e.includes("po:")){const t=e.substr(3).split("|")
if(3===t.length){const e=t[0],r=t[1]
let i=t[2]
if("DashTemplate"===r)i=i.split(" ").map(e=>Number(e))
else if("Color"===r){const e=new n.a(i).toRgba()
i=[e[0],e[1],e[2],255*e[3]]}else i=Number(i)
h.push({primitiveName:e,propertyName:r,value:i})}}else if(e.includes("|")){for(const t of e.split("|"))if(this._itemNames.has(t)){d.push(t)
break}}else this._itemNames.has(e)&&d.push(e)
const b=!Object(l.l)(e.geometry)||!e.geometry.hasZ&&"point"===e.geometry.type,f=this._cimPartsToCIMSymbol(d,h,b,t)
return this._symbolCache.put(o,f,1),f}async fetchResources(e){if(this._dictionaryPromise)return this._dictionaryPromise
if(!this.url)return void o.a.getLogger(h).error("no valid URL!")
const t=Object(i.default)(this.url+"/resources/styles/dictionary-info.json",{responseType:"json",query:{f:"json"},signal:Object(l.l)(e)?e.signal:null}),[{data:r}]=await Promise.all([t,Object(p.e)()])
if(!r)throw this._dictionaryPromise=null,new s.a("esri.renderers.DictionaryRenderer","Bad dictionary data!")
const n=r.expression,a=r.authoringInfo
this._refSymbolUrlTemplate=this.url+"/"+r.cimRefTemplateUrl,this._itemNames=new Set(r.itemsNames),this._symbolFields=a.symbol
const c={}
if(this.config){const e=this.config
for(const t in e)c[t]=e[t]}if(a.configuration)for(const e of a.configuration)c.hasOwnProperty(e.name)||(c[e.name]=e.value)
const u=[]
if(Object(l.l)(e)&&e.fields&&this.fieldMap)for(const t of this._symbolFields){const r=this.fieldMap[t],n=e.fields.filter(e=>e.name===r)
n.length>0&&u.push({...n[0],name:t})}const d=Object(p.b)(n,Object(l.l)(e)?e.spatialReference:null,u,c).then(e=>{const t={scale:0}
return(r,n)=>{var i
if(Object(l.k)(e))return null
const s=e.repurposeFeature({geometry:null,attributes:r})
return t.scale=Object(l.l)(n)&&null!=(i=n.scale)?i:void 0,e.evaluate({$feature:s,$view:t})}}).catch(e=>(o.a.getLogger(h).error("Creating dictinoary expression failed:",e),null))
return this._dictionaryPromise=d,d}async _cimPartsToCIMSymbol(e,t,r,n){const i=new Array(e.length)
for(let t=0;t<e.length;t++)i[t]=this._getSymbolPart(e[t],n)
const s=await Promise.all(i),o=this.fieldMap
if(o)for(const e of s)y(e,o)
return new d.default({data:this._combineSymbolParts(s,t,r)})}async _getSymbolPart(e,t){if(this._ongoingRequests.has(e))return this._ongoingRequests.get(e).then(e=>e.data)
const r=this._refSymbolUrlTemplate.replace(/\{itemName\}/gi,e),n=Object(i.default)(r,{responseType:"json",query:{f:"json"},...t})
this._ongoingRequests.set(e,n)
try{return(await n).data}catch(t){throw this._ongoingRequests.delete(e),t}}_combineSymbolParts(e,t,r){if(!e||0===e.length)return null
const n={...e[0]}
if(e.length>1){n.symbolLayers=[]
for(const t of e){const e=t
n.symbolLayers.unshift(...e.symbolLayers)}}return r&&(n.callout=b),{type:"CIMSymbolReference",symbol:n,primitiveOverrides:t}}}function y(e,t){if(!e)return
const r=e.symbolLayers
if(!r)return
let n=r.length
for(;n--;){const e=r[n]
e&&!1!==e.enable&&"CIMVectorMarker"===e.type&&m(e,t)}}function m(e,t){const r=e.markerGraphics
if(r)for(const e of r){if(!e)continue
const r=e.symbol
if(r)switch(r.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":y(r,t)
break
case"CIMTextSymbol":r.fieldMap=t}}}},1255:function(e,t,r){"use strict"
r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return a})),r.d(t,"d",(function(){return l}))
var n=r(1021),i=r(769),s=r(983)
const o={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new n.a({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:i.default.WebMercator}),minus180Line:new n.a({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:i.default.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new n.a({paths:[[[180,-180],[180,180]]],spatialReference:i.default.WGS84}),minus180Line:new n.a({paths:[[[-180,-180],[-180,180]]],spatialReference:i.default.WGS84})}}
function a(e,t){return Math.ceil((e-t)/(2*t))}function l(e,t){const r=c(e)
for(const e of r)for(const r of e)r[0]+=t
return e}function c(e){return Object(s.g)(e)?e.rings:e.paths}},1257:function(e,t,r){"use strict"
r.d(t,"a",(function(){return c}))
var n,i=r(968),s=r(970),o=(r(971),r(445),r(969)),a=r(1159)
let l=n=class extends a.a{constructor(){super(...arguments),this.customValues=null}clone(){return new n({title:this.title,showLegend:this.showLegend,customValues:this.customValues&&this.customValues.slice(0)})}}
Object(i.a)([Object(s.b)({type:[Number],json:{write:!0}})],l.prototype,"customValues",void 0),l=n=Object(i.a)([Object(o.a)("esri.renderers.visualVariables.support.SizeVariableLegendOptions")],l)
const c=l},1258:function(e,t,r){"use strict"
r.d(t,"a",(function(){return u}))
var n,i=r(968),s=r(972),o=r(970),a=(r(971),r(445),r(969)),l=r(1020)
let c=n=class extends s.a{constructor(e){super(e),this.description=null,this.label=null,this.minValue=null,this.maxValue=0,this.symbol=null}clone(){return new n({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,symbol:this.symbol?this.symbol.clone():null})}getMeshHash(){const e=JSON.stringify(this.symbol)
return`${this.minValue}.${this.maxValue}.${e}`}}
Object(i.a)([Object(o.b)({type:String,json:{write:!0}})],c.prototype,"description",void 0),Object(i.a)([Object(o.b)({type:String,json:{write:!0}})],c.prototype,"label",void 0),Object(i.a)([Object(o.b)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],c.prototype,"minValue",void 0),Object(i.a)([Object(o.b)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],c.prototype,"maxValue",void 0),Object(i.a)([Object(o.b)(l.b)],c.prototype,"symbol",void 0),c=n=Object(i.a)([Object(a.a)("esri.renderers.support.ClassBreakInfo")],c)
const u=c},1259:function(e,t,r){"use strict"
r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return i}))
var n=r(983)
function i(e){return{geometryType:Object(n.c)(e[0]),geometries:e.map(e=>e.toJSON())}}function s(e,t,r){const i=Object(n.b)(t)
return e.map(e=>{const t=i.fromJSON(e)
return t.spatialReference=r,t})}},1264:function(e,t,r){"use strict"
r.d(t,"a",(function(){return u}))
var n,i=r(968),s=r(972),o=r(970),a=(r(971),r(445),r(969)),l=r(1020)
let c=n=class extends s.a{constructor(e){super(e),this.description=null,this.label=null,this.symbol=null,this.value=null}clone(){return new n({value:this.value,description:this.description,label:this.label,symbol:this.symbol?this.symbol.clone():null})}getMeshHash(){const e=JSON.stringify(this.symbol&&this.symbol.toJSON())
return`${this.value}.${e}`}}
Object(i.a)([Object(o.b)({type:String,json:{write:!0}})],c.prototype,"description",void 0),Object(i.a)([Object(o.b)({type:String,json:{write:!0}})],c.prototype,"label",void 0),Object(i.a)([Object(o.b)(l.b)],c.prototype,"symbol",void 0),Object(i.a)([Object(o.b)(l.c)],c.prototype,"value",void 0),c=n=Object(i.a)([Object(a.a)("esri.renderers.support.UniqueValueInfo")],c)
const u=c},1267:function(e,t,r){"use strict"
r.d(t,"a",(function(){return s}))
var n=r(23),i=r(1163)
function s(e,t,r){if(!r||!r.features||!r.hasZ)return
const s=Object(i.a)(r.geometryType,t,e.outSpatialReference)
if(!Object(n.k)(s))for(const e of r.features)s(e.geometry)}},1268:function(e,t,r){"use strict"
r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return p})),r.d(t,"c",(function(){return u})),r.d(t,"d",(function(){return d})),r.d(t,"e",(function(){return b})),r.d(t,"f",(function(){return y})),r.d(t,"g",(function(){return f})),r.d(t,"h",(function(){return h})),r(235)
var n=r(23),i=r(1073),s=r(1065),o=r(1078),a=r(1239),l=r(1223)
const c=o.a.fromJSON(l.c),u=s.a.fromJSON(l.e),p=i.a.fromJSON(l.d),d=a.a.fromJSON(l.f)
function h(e){if(Object(n.k)(e))return null
switch(e.type){case"mesh":return null
case"point":case"multipoint":return c
case"polyline":return u
case"polygon":case"extent":return p}return null}const b=o.a.fromJSON(l.g),f=s.a.fromJSON(l.i),y=i.a.fromJSON(l.h)},1270:function(e,t,r){"use strict"
r.d(t,"a",(function(){return g})),r.d(t,"b",(function(){return m}))
var n=r(968),i=r(233),s=r(973),o=r(970),a=(r(971),r(445),r(969)),l=r(993),c=(r(235),r(446),r(1076),r(1048))
const u=new l.a,p=new WeakMap
function d(e){return null!=e&&"object"==typeof e&&"refreshInterval"in e&&"refresh"in e}function h(e,t){return Number.isFinite(e)&&Number.isFinite(t)?t<=0?e:h(t,e%t):0}let b=0,f=0
function y(){const e=Date.now()
for(const r of u)if(r.refreshInterval){var t
e-(null!=(t=p.get(r))?t:0)+5>=6e4*r.refreshInterval&&(p.set(r,e),r.refresh(e))}}function m(e){return null!=e&&"object"==typeof e&&"refreshTimestamp"in e&&"refresh"in e}Object(c.a)(()=>{const e=Date.now()
let t=0
for(const r of u)t=h(Math.round(6e4*r.refreshInterval),t),r.refreshInterval?p.get(r)||p.set(r,e):p.delete(r)
if(t!==f){if(f=t,clearInterval(b),0===f)return void(b=0)
b=setInterval(y,f)}})
const g=e=>{let t=class extends e{constructor(...e){super(...e),this.refreshInterval=0,this.refreshTimestamp=0,this._debounceHasDataChanged=Object(s.f)(()=>this.hasDataChanged()),this.when().then(()=>{!function(e){d(e)&&u.push(e)}(this)},()=>{})}destroy(){d(this)&&u.includes(this)&&u.remove(this)}get refreshParameters(){return{_ts:this.refreshTimestamp||null}}refresh(e=Date.now()){Object(s.i)(this._debounceHasDataChanged()).then(t=>{t&&this._set("refreshTimestamp",e),this.emit("refresh",{dataChanged:t})},e=>{i.a.getLogger(this.declaredClass).error(e),this.emit("refresh",{dataChanged:!1,error:e})})}async hasDataChanged(){return!0}}
return Object(n.a)([Object(o.b)({type:Number,cast:e=>e>=.1?e:e<=0?0:.1,json:{write:!0}})],t.prototype,"refreshInterval",void 0),Object(n.a)([Object(o.b)({readOnly:!0})],t.prototype,"refreshTimestamp",void 0),Object(n.a)([Object(o.b)()],t.prototype,"refreshParameters",null),t=Object(n.a)([Object(a.a)("esri.layers.mixins.RefreshableLayer")],t),t}},1273:function(e,t,r){"use strict"
r.d(t,"a",(function(){return u}))
var n=r(968),i=r(986),s=r(972),o=r(23),a=r(970),l=(r(971),r(445),r(969))
let c=class extends(Object(i.b)(s.a)){constructor(e){super(e),this.onFields=null,this.operator=null,this.searchTerm=null,this.searchType=null}}
Object(n.a)([Object(a.b)({type:[String],json:{write:{enabled:!0,overridePolicy(){return{enabled:Object(o.l)(this.onFields)&&this.onFields.length>0}}}}})],c.prototype,"onFields",void 0),Object(n.a)([Object(a.b)({type:String,json:{write:!0}})],c.prototype,"operator",void 0),Object(n.a)([Object(a.b)({type:String,json:{write:!0}})],c.prototype,"searchTerm",void 0),Object(n.a)([Object(a.b)({type:String,json:{write:!0}})],c.prototype,"searchType",void 0),c=Object(n.a)([Object(l.a)("esri.rest.support.FullTextSearch")],c)
const u=c},1274:function(e,t,r){"use strict"
r.d(t,"a",(function(){return p}))
var n=r(968),i=r(986),s=r(976),o=r(972),a=r(970),l=(r(971),r(445),r(969))
const c=new s.a({esriFeatureEditToolAutoCompletePolygon:"auto-complete-polygon",esriFeatureEditToolCircle:"circle",esriFeatureEditToolEllipse:"ellipse",esriFeatureEditToolFreehand:"freehand",esriFeatureEditToolLine:"line",esriFeatureEditToolNone:"none",esriFeatureEditToolPoint:"point",esriFeatureEditToolPolygon:"polygon",esriFeatureEditToolRectangle:"rectangle",esriFeatureEditToolArrow:"arrow",esriFeatureEditToolTriangle:"triangle",esriFeatureEditToolLeftArrow:"left-arrow",esriFeatureEditToolRightArrow:"right-arrow",esriFeatureEditToolUpArrow:"up-arrow",esriFeatureEditToolDownArrow:"down-arrow"})
let u=class extends(Object(i.b)(o.a)){constructor(e){super(e),this.name=null,this.description=null,this.drawingTool=null,this.prototype=null,this.thumbnail=null}}
Object(n.a)([Object(a.b)({json:{write:!0}})],u.prototype,"name",void 0),Object(n.a)([Object(a.b)({json:{write:!0}})],u.prototype,"description",void 0),Object(n.a)([Object(a.b)({json:{read:c.read,write:c.write}})],u.prototype,"drawingTool",void 0),Object(n.a)([Object(a.b)({json:{write:!0}})],u.prototype,"prototype",void 0),Object(n.a)([Object(a.b)({json:{write:!0}})],u.prototype,"thumbnail",void 0),u=Object(n.a)([Object(l.a)("esri.layers.support.FeatureTemplate")],u)
const p=u},1278:function(e,t,r){"use strict"
r.d(t,"a",(function(){return u}))
var n,i=r(968),s=r(972),o=r(970),a=r(971),l=(r(445),r(979)),c=r(969)
let u=n=class extends s.a{constructor(e){super(e),this.type="map-layer"}clone(){const{mapLayerId:e,gdbVersion:t}=this
return new n({mapLayerId:e,gdbVersion:t})}}
Object(i.a)([Object(l.a)({mapLayer:"map-layer"})],u.prototype,"type",void 0),Object(i.a)([Object(o.b)({type:a.a,json:{write:!0}})],u.prototype,"mapLayerId",void 0),Object(i.a)([Object(o.b)({type:String,json:{write:!0}})],u.prototype,"gdbVersion",void 0),u=n=Object(i.a)([Object(c.a)("esri.layers.support.source.MapLayerSource")],u)},1279:function(e,t,r){"use strict"
r.d(t,"a",(function(){return u}))
var n=r(968),i=r(993),s=r(23),o=(r(235),r(446),r(233),r(1076),r(1048)),a=r(970),l=(r(971),r(445),r(969))
let c=class extends i.a{constructor(e){super(e),this.getCollections=null}initialize(){this.own(Object(o.a)(()=>this._refresh()))}destroy(){this.getCollections=null}_refresh(){const e=Object(s.l)(this.getCollections)?this.getCollections():null
if(Object(s.k)(e))return void this.removeAll()
let t=0
for(const r of e)Object(s.l)(r)&&(t=this._processCollection(t,r))
this.splice(t,this.length)}_createNewInstance(e){return new i.a(e)}_processCollection(e,t){if(!t)return e
const r=this.itemFilterFunction?this.itemFilterFunction:e=>!!e
for(const n of t)if(n){if(r(n)){const t=this.indexOf(n,e)
t>=0?t!==e&&this.reorder(n,e):this.add(n,e),++e}if(this.getChildrenFunction){const t=this.getChildrenFunction(n)
if(Array.isArray(t))for(const r of t)e=this._processCollection(e,r)
else e=this._processCollection(e,t)}}return e}}
Object(n.a)([Object(a.b)()],c.prototype,"getCollections",void 0),Object(n.a)([Object(a.b)()],c.prototype,"getChildrenFunction",void 0),Object(n.a)([Object(a.b)()],c.prototype,"itemFilterFunction",void 0),c=Object(n.a)([Object(l.a)("esri.core.CollectionFlattener")],c)
const u=c},1282:function(e,t,r){"use strict"
r.d(t,"a",(function(){return u}))
var n,i,s=r(235),o=r(1049);(i=n||(n={}))[i.varint=0]="varint",i[i.fixed64=1]="fixed64",i[i.delimited=2]="delimited",i[i.fixed32=5]="fixed32",i[i.unknown=99]="unknown"
const a=4294967296,l=new TextDecoder("utf-8"),c=Object(s.a)("safari")||Object(s.a)("ios")?6:Object(s.a)("ff")?12:32
class u{constructor(e,t,r=0,i=(e?e.byteLength:0)){this._tag=0,this._dataType=n.unknown,this._init(e,t,r,i)}_init(e,t,r,n){this._data=e,this._dataView=t,this._pos=r,this._end=n}asUnsafe(){return this}clone(){return new u(this._data,this._dataView,this._pos,this._end)}pos(){return this._pos}move(e){this._pos=e}nextTag(e){for(;;){if(this._pos===this._end)return!1
const t=this._decodeVarint()
if(this._tag=t>>3,this._dataType=7&t,!e||e===this._tag)break
this.skip()}return!0}next(){if(this._pos===this._end)return!1
const e=this._decodeVarint()
return this._tag=e>>3,this._dataType=7&e,!0}empty(){return this._pos>=this._end}tag(){return this._tag}getInt32(){return this._decodeVarint()}getInt64(){return this._decodeVarint()}getUInt32(){let e=4294967295
return e=(127&this._data[this._pos])>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<7)>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<14)>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<21)>>>0,this._data[this._pos++]<128?e:(e=(e|(15&this._data[this._pos])<<28)>>>0,this._data[this._pos++]<128?e:void 0))))}getUInt64(){return this._decodeVarint()}getSInt32(){const e=this.getUInt32()
if(void 0!==e)return e>>>1^-(1&e)|0}getSInt64(){return this._decodeSVarint()}getBool(){const e=0!==this._data[this._pos]
return this._skip(1),e}getEnum(){return this._decodeVarint()}getFixed64(){const e=this._dataView,t=this._pos,r=e.getUint32(t,!0)+e.getUint32(t+4,!0)*a
return this._skip(8),r}getSFixed64(){const e=this._dataView,t=this._pos,r=e.getUint32(t,!0)+e.getInt32(t+4,!0)*a
return this._skip(8),r}getDouble(){const e=this._dataView.getFloat64(this._pos,!0)
return this._skip(8),e}getFixed32(){const e=this._dataView.getUint32(this._pos,!0)
return this._skip(4),e}getSFixed32(){const e=this._dataView.getInt32(this._pos,!0)
return this._skip(4),e}getFloat(){const e=this._dataView.getFloat32(this._pos,!0)
return this._skip(4),e}getString(){const e=this._getLength(),t=this._pos,r=this._toString(this._data,t,t+e)
return this._skip(e),r}getBytes(){const e=this._getLength(),t=this._pos,r=this._toBytes(this._data,t,t+e)
return this._skip(e),r}getLength(){return this._getLengthUnsafe()}processMessageWithArgs(e,t,r,n){const i=this.getMessage(),s=e(i,t,r,n)
return i.release(),s}processMessage(e){const t=this.getMessage(),r=e(t)
return t.release(),r}getMessage(){const e=this._getLength(),t=u.pool.acquire()
return t._init(this._data,this._dataView,this._pos,this._pos+e),this._skip(e),t}release(){u.pool.release(this)}dataType(){return this._dataType}skip(){switch(this._dataType){case n.varint:this._decodeVarint()
break
case n.fixed64:this._skip(8)
break
case n.delimited:this._skip(this._getLength())
break
case n.fixed32:this._skip(4)
break
default:throw new Error("Invalid data type!")}}skipLen(e){this._skip(e)}_skip(e){if(this._pos+e>this._end)throw new Error("Attempt to skip past the end of buffer!")
this._pos+=e}_decodeVarint(){const e=this._data
let t=this._pos,r=0,n=0
if(this._end-t>=10)do{if(n=e[t++],r|=127&n,0==(128&n))break
if(n=e[t++],r|=(127&n)<<7,0==(128&n))break
if(n=e[t++],r|=(127&n)<<14,0==(128&n))break
if(n=e[t++],r|=(127&n)<<21,0==(128&n))break
if(n=e[t++],r+=268435456*(127&n),0==(128&n))break
if(n=e[t++],r+=34359738368*(127&n),0==(128&n))break
if(n=e[t++],r+=4398046511104*(127&n),0==(128&n))break
if(n=e[t++],r+=562949953421312*(127&n),0==(128&n))break
if(n=e[t++],r+=72057594037927940*(127&n),0==(128&n))break
if(n=e[t++],r+=0x8000000000000000*(127&n),0==(128&n))break
throw new Error("Varint too long!")}while(0)
else{let i=1
for(;t!==this._end&&(n=e[t],0!=(128&n));)++t,r+=(127&n)*i,i*=128
if(t===this._end)throw new Error("Varint overrun!");++t,r+=n*i}return this._pos=t,r}_decodeSVarint(){const e=this._data
let t=this._pos,r=0,n=0
const i=1&e[t]
if(this._end-t>=10)do{if(n=e[t++],r|=127&n,0==(128&n))break
if(n=e[t++],r|=(127&n)<<7,0==(128&n))break
if(n=e[t++],r|=(127&n)<<14,0==(128&n))break
if(n=e[t++],r|=(127&n)<<21,0==(128&n))break
if(n=e[t++],r+=268435456*(127&n),0==(128&n))break
if(n=e[t++],r+=34359738368*(127&n),0==(128&n))break
if(n=e[t++],r+=4398046511104*(127&n),0==(128&n))break
if(n=e[t++],r+=562949953421312*(127&n),0==(128&n))break
if(n=e[t++],r+=72057594037927940*(127&n),0==(128&n))break
if(n=e[t++],r+=0x8000000000000000*(127&n),0==(128&n))break
throw new Error("Varint too long!")}while(0)
else{let i=1
for(;t!==this._end&&(n=e[t],0!=(128&n));)++t,r+=(127&n)*i,i*=128
if(t===this._end)throw new Error("Varint overrun!");++t,r+=n*i}return this._pos=t,i?-(r+1)/2:r/2}_getLength(){if(this._dataType!==n.delimited)throw new Error("Not a delimited data type!")
return this._decodeVarint()}_getLengthUnsafe(){return this.getUInt32()}_toString(e,t,r){if((r=Math.min(this._end,r))-t>c){const n=e.subarray(t,r)
return l.decode(n)}let n="",i=""
for(let s=t;s<r;++s){const t=e[s]
128&t?i+="%"+t.toString(16):(n+=decodeURIComponent(i)+String.fromCharCode(t),i="")}return i.length&&(n+=decodeURIComponent(i)),n}_toBytes(e,t,r){return r=Math.min(this._end,r),new Uint8Array(e.buffer,t,r-t)}}u.pool=new o.a(u,void 0,e=>{e._data=null,e._dataView=null})},1285:function(e,t,r){"use strict"
r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return p}))
var n=r(446),i=r(234),s=r(233),o=r(776)
const a=s.a.getLogger("esri.layers.support.labelingInfo"),l=/\[([^\[\]]+)\]/gi
function c(e,t,r){return e?e.map(e=>{const n=new o.default
if(n.read(e,r),n.labelExpression){const e=t.fields||t.layerDefinition&&t.layerDefinition.fields||this.fields
n.labelExpression=n.labelExpression.replace(l,(t,r)=>`[${function(e,t){if(!t)return e
const r=e.toLowerCase()
for(let e=0;e<t.length;e++){const n=t[e].name
if(n.toLowerCase()===r)return n}return e}(r,e)}]`)}return n}):null}const u={esriGeometryPoint:["above-right","above-center","above-left","center-center","center-left","center-right","below-center","below-left","below-right"],esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along"],esriGeometryMultipoint:null}
function p(e,t){const r=Object(i.a)(e)
return r.some(e=>function(e,t){const r=e.labelPlacement,i=u[t]
if(!e.symbol)return a.warn("No ILabelClass symbol specified."),!0
if(!i)return a.error(new n.a("labeling:unsupported-geometry-type",`Unable to create labels for layer, geometry type '${t}' is not supported`)),!0
if(!i.includes(r)){const n=i[0]
r&&a.warn(`Found invalid label placement type ${r} for ${t}. Defaulting to ${n}`),e.labelPlacement=n}return!1}(e,t))?[]:r}},1290:function(e,t,r){"use strict"
r.d(t,"a",(function(){return c}))
var n=r(968),i=r(233),s=r(23),o=r(970),a=(r(971),r(445),r(969)),l=r(1051)
const c=e=>{let t=class extends e{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title")
if(this.url){const e=Object(l.f)(this.url)
if(Object(s.l)(e)&&e.title)return e.title}return this._get("title")||""}set title(e){this._set("title",e)}set url(e){this._set("url",Object(l.h)(e,i.a.getLogger(this.declaredClass)))}}
return Object(n.a)([Object(o.b)()],t.prototype,"title",null),Object(n.a)([Object(o.b)({type:String})],t.prototype,"url",null),t=Object(n.a)([Object(a.a)("esri.layers.mixins.ArcGISService")],t),t}},1291:function(e,t,r){"use strict"
r.d(t,"a",(function(){return p}))
var n=r(235),i=r(23),s=r(1051)
const o={name:"supportsName",size:"supportsSize",contentType:"supportsContentType",keywords:"supportsKeywords",exifInfo:"supportsExifInfo"}
function a(e,t,r){return!!(e&&e.hasOwnProperty(t)?e[t]:r)}function l(e,t,r){return e&&e.hasOwnProperty(t)?e[t]:r}function c(e){var t
const r=null==e||null==(t=e.supportedSpatialAggregationStatistics)?void 0:t.map(e=>e.toLowerCase())
return{envelope:!(null==r||!r.includes("envelopeaggregate")),centroid:!(null==r||!r.includes("centroidaggregate")),convexHull:!(null==r||!r.includes("convexhullaggregate"))}}function u(e,t){var r
const n=null==e||null==(r=e.supportedOperationsWithCacheHint)?void 0:r.map(e=>e.toLowerCase())
return!(null==n||!n.includes(t.toLowerCase()))}function p(e,t){return{analytics:d(e),attachment:h(e),data:b(e),metadata:f(e),operations:y(e.capabilities,e,t),query:m(e,t),queryRelated:g(e),queryTopFeatures:O(e),editing:j(e)}}function d(e){return{supportsCacheHint:u(e.advancedQueryCapabilities,"queryAnalytics")}}function h(e){const t=e.attachmentProperties,r={supportsName:!1,supportsSize:!1,supportsContentType:!1,supportsKeywords:!1,supportsExifInfo:!1,supportsCacheHint:u(e.advancedQueryCapabilities,"queryAttachments"),supportsResize:a(e,"supportsAttachmentsResizing",!1)}
return t&&Array.isArray(t)&&t.forEach(e=>{const t=o[e.name]
t&&(r[t]=!!e.isEnabled)}),r}function b(e){return{isVersioned:a(e,"isDataVersioned",!1),supportsAttachment:a(e,"hasAttachments",!1),supportsM:a(e,"hasM",!1),supportsZ:a(e,"hasZ",!1)}}function f(e){return{supportsAdvancedFieldProperties:a(e,"supportsFieldDescriptionProperty",!1)}}function y(e,t,r){const n=e?e.toLowerCase().split(",").map(e=>e.trim()):[],o=r?Object(s.f)(r):null,l=n.includes(Object(i.l)(o)&&"MapServer"===o.serverType?"data":"query"),c=n.includes("editing")&&!t.datesInUnknownTimezone
let u=c&&n.includes("create"),p=c&&n.includes("delete"),d=c&&n.includes("update")
const h=n.includes("changetracking"),b=t.advancedQueryCapabilities
return c&&!(u||p||d)&&(u=p=d=!0),{supportsCalculate:a(t,"supportsCalculate",!1),supportsTruncate:a(t,"supportsTruncate",!1),supportsValidateSql:a(t,"supportsValidateSql",!1),supportsAdd:u,supportsDelete:p,supportsEditing:c,supportsChangeTracking:h,supportsQuery:l,supportsQueryAnalytics:a(b,"supportsQueryAnalytic",!1),supportsQueryAttachments:a(b,"supportsQueryAttachments",!1),supportsQueryTopFeatures:a(b,"supportsTopFeaturesQuery",!1),supportsResizeAttachments:a(t,"supportsAttachmentsResizing",!1),supportsSync:n.includes("sync"),supportsUpdate:d,supportsExceedsLimitStatistics:a(t,"supportsExceedsLimitStatistics",!1)}}function m(e,t){var r
const i=e.advancedQueryCapabilities,o=e.ownershipBasedAccessControlForFeatures,p=e.archivingInfo,d=e.currentVersion,h=!(null==t?void 0:t.includes("MapServer"))||d>=Object(n.a)("mapserver-pbf-version-support"),b=Object(s.c)(t),f=new Set((null!=(r=e.supportedQueryFormats)?r:"").split(",").map(e=>e.toLowerCase().trim()))
return{supportsStatistics:a(i,"supportsStatistics",e.supportsStatistics),supportsPercentileStatistics:a(i,"supportsPercentileStatistics",!1),supportsSpatialAggregationStatistics:a(i,"supportsSpatialAggregationStatistics",!1),supportedSpatialAggregationStatistics:c(i),supportsCentroid:a(i,"supportsReturningGeometryCentroid",!1),supportsDistance:a(i,"supportsQueryWithDistance",!1),supportsDistinct:a(i,"supportsDistinct",e.supportsAdvancedQueries),supportsExtent:a(i,"supportsReturningQueryExtent",!1),supportsGeometryProperties:a(i,"supportsReturningGeometryProperties",!1),supportsHavingClause:a(i,"supportsHavingClause",!1),supportsOrderBy:a(i,"supportsOrderBy",e.supportsAdvancedQueries),supportsPagination:a(i,"supportsPagination",!1),supportsQuantization:a(e,"supportsCoordinatesQuantization",!1),supportsQuantizationEditMode:a(e,"supportsQuantizationEditMode",!1),supportsQueryGeometry:a(e,"supportsReturningQueryGeometry",!1),supportsResultType:a(i,"supportsQueryWithResultType",!1),supportsMaxRecordCountFactor:a(i,"supportsMaxRecordCountFactor",!1),supportsSqlExpression:a(i,"supportsSqlExpression",!1),supportsStandardizedQueriesOnly:a(e,"useStandardizedQueries",!1),supportsTopFeaturesQuery:a(i,"supportsTopFeaturesQuery",!1),supportsQueryByOthers:a(o,"allowOthersToQuery",!0),supportsHistoricMoment:a(p,"supportsQueryWithHistoricMoment",!1),supportsFormatPBF:h&&f.has("pbf"),supportsDisjointSpatialRelationship:a(i,"supportsDisjointSpatialRel",!1),supportsCacheHint:a(i,"supportsQueryWithCacheHint",!1)||u(i,"query"),supportsDefaultSpatialReference:a(i,"supportsDefaultSR",!1),supportsCompactGeometry:b,supportsFullTextSearch:a(i,"supportsFullTextSearch",!1),maxRecordCountFactor:l(e,"maxRecordCountFactor",void 0),maxRecordCount:l(e,"maxRecordCount",void 0),standardMaxRecordCount:l(e,"standardMaxRecordCount",void 0),tileMaxRecordCount:l(e,"tileMaxRecordCount",void 0)}}function g(e){const t=e.advancedQueryCapabilities,r=a(t,"supportsAdvancedQueryRelated",!1)
return{supportsPagination:a(t,"supportsQueryRelatedPagination",!1),supportsCount:r,supportsOrderBy:r,supportsCacheHint:u(t,"queryRelated")}}function O(e){return{supportsCacheHint:u(e.advancedQueryCapabilities,"queryTopFilter")}}function j(e){const t=e.ownershipBasedAccessControlForFeatures
return{supportsGeometryUpdate:a(e,"allowGeometryUpdates",!0),supportsGlobalId:a(e,"supportsApplyEditsWithGlobalIds",!1),supportsReturnServiceEditsInSourceSpatialReference:a(e,"supportsReturnServiceEditsInSourceSR",!1),supportsRollbackOnFailure:a(e,"supportsRollbackOnFailureParameter",!1),supportsUpdateWithoutM:a(e,"allowUpdateWithoutMValues",!1),supportsUploadWithItemId:a(e,"supportsAttachmentsByUploadId",!1),supportsDeleteByAnonymous:a(t,"allowAnonymousToDelete",!0),supportsDeleteByOthers:a(t,"allowOthersToDelete",!0),supportsUpdateByAnonymous:a(t,"allowAnonymousToUpdate",!0),supportsUpdateByOthers:a(t,"allowOthersToUpdate",!0)}}},1297:function(e,t,r){"use strict"
r.d(t,"a",(function(){return p}))
var n=r(775),i=r(989),s=r(1439),o=(r(1386),r(1440),r(1441),r(1442)),a=(r(1443),r(1444),r(1369),r(1374)),l=r(1465)
const c=["oid","global-id"],u=["oid","global-id","guid"]
function p({displayField:e,editFieldsInfo:t,fields:r,objectIdField:a,title:l},c){if(!r)return null
const u=m({editFieldsInfo:t,fields:r,objectIdField:a},c)
if(!u.length)return null
const p=function(e){const t=Object(i.m)(e),{titleBase:r}=e
return t?`${r}: {${t.trim()}}`:null!=r?r:""}({titleBase:l,fields:r,displayField:e}),d=[new o.a,new s.a]
return new n.default({title:p,content:d,fieldInfos:u})}const d=[/^fnode_$/i,/^tnode_$/i,/^lpoly_$/i,/^rpoly_$/i,/^poly_$/i,/^subclass$/i,/^subclass_$/i,/^rings_ok$/i,/^rings_nok$/i,/shape/i,/perimeter/i,/objectid/i,/_i$/i],h=(e,{editFieldsInfo:t,objectIdField:r,visibleFieldNames:n})=>n?n.has(e.name):!(f(e.name,t)||r&&e.name===r||c.includes(e.type)||d.some(t=>t.test(e.name)))
function b(e,t){return"oid"===e.type?-1:"oid"===t.type?1:O(e)?-1:O(t)?1:(e.alias||e.name).toLocaleLowerCase().localeCompare((t.alias||t.name).toLocaleLowerCase())}function f(e,t){if(!e||!t)return!1
const{creationDateField:r,creatorField:n,editDateField:i,editorField:s}=t
return[r&&r.toLowerCase(),n&&n.toLowerCase(),i&&i.toLowerCase(),s&&s.toLowerCase()].includes(e.toLowerCase())}function y(e,t){return e.editable&&!u.includes(e.type)&&!f(e.name,t)}function m({editFieldsInfo:e,fields:t,objectIdField:r},n){return function(e,t){const r=e
return t&&(e=e.filter(e=>!t.includes(e.type))),e===r&&(e=e.slice()),e.sort(b),e}(null!=t?t:[],(null==n?void 0:n.ignoreFieldTypes)||j).map(t=>new a.a({fieldName:t.name,isEditable:y(t,e),label:t.alias,format:g(t),visible:h(t,{editFieldsInfo:e,objectIdField:r,visibleFieldNames:null==n?void 0:n.visibleFieldNames})}))}function g(e){switch(e.type){case"small-integer":case"integer":case"single":return new l.a({digitSeparator:!0,places:0})
case"double":return new l.a({digitSeparator:!0,places:2})
case"date":return new l.a({dateFormat:"long-month-day-year"})
default:return"string"===e.type&&Object(i.r)(e.name)?new l.a({digitSeparator:!0,places:0}):null}}function O(e){return"name"===(e.name&&e.name.toLowerCase())||"name"===(e.alias&&e.alias.toLowerCase())}const j=["geometry","blob","raster","guid","xml"]},1313:function(e,t,r){"use strict"
r.d(t,"a",(function(){return o}))
var n=r(968),i=r(970),s=(r(971),r(445),r(969))
const o=e=>{let t=class extends e{constructor(){super(...arguments),this.customParameters=null}}
return Object(n.a)([Object(i.b)({type:Object,json:{write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0)})}}})],t.prototype,"customParameters",void 0),t=Object(n.a)([Object(s.a)("esri.layers.mixins.CustomParametersMixin")],t),t}},1317:function(e,t,r){"use strict"
r.d(t,"a",(function(){return u}))
var n,i=r(968),s=r(972),o=r(970),a=r(971),l=(r(445),r(969))
let c=n=class extends s.a{constructor(e){super(e),this.cols=null,this.level=0,this.levelValue=null,this.origin=null,this.resolution=0,this.rows=null,this.scale=0}clone(){return new n({cols:this.cols,level:this.level,levelValue:this.levelValue,resolution:this.resolution,rows:this.rows,scale:this.scale})}}
Object(i.a)([Object(o.b)({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],c.prototype,"cols",void 0),Object(i.a)([Object(o.b)({type:a.a,json:{write:!0}})],c.prototype,"level",void 0),Object(i.a)([Object(o.b)({type:String,json:{write:!0}})],c.prototype,"levelValue",void 0),Object(i.a)([Object(o.b)({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],c.prototype,"origin",void 0),Object(i.a)([Object(o.b)({type:Number,json:{write:!0}})],c.prototype,"resolution",void 0),Object(i.a)([Object(o.b)({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],c.prototype,"rows",void 0),Object(i.a)([Object(o.b)({type:Number,json:{write:!0}})],c.prototype,"scale",void 0),c=n=Object(i.a)([Object(l.a)("esri.layers.support.LOD")],c)
const u=c},1322:function(e,t,r){"use strict"
r.d(t,"a",(function(){return _}))
var n,i=r(968),s=r(976),o=r(972),a=r(23),l=r(997),c=r(970),u=r(971),p=(r(445),r(977)),d=r(969),h=r(974),b=r(992),f=r(769),y=r(996),m=r(988),g=r(774),O=r(1317),j=r(1358)
const v=new s.a({PNG:"png",PNG8:"png8",PNG24:"png24",PNG32:"png32",JPEG:"jpg",JPG:"jpg",DIB:"dib",TIFF:"tiff",EMF:"emf",PS:"ps",PDF:"pdf",GIF:"gif",SVG:"svg",SVGZ:"svgz",Mixed:"mixed",MIXED:"mixed",LERC:"lerc",LERC2D:"lerc2d",RAW:"raw",pbf:"pbf"})
let w=n=class extends o.a{static create(e={}){const{resolutionFactor:t=1,scales:r,size:i=256,spatialReference:s=f.default.WebMercator,numLODs:o=24}=e
if(!Object(m.l)(s)){const e=[]
if(r)for(let t=0;t<r.length;t++){const n=r[t]
e.push(new O.a({level:t,scale:n,resolution:n}))}else{let t=5e-4
for(let r=o-1;r>=0;r--)e.unshift(new O.a({level:r,scale:t,resolution:t})),t*=2}return new n({dpi:96,lods:e,origin:new b.a(0,0,s),size:[i,i],spatialReference:s})}const a=Object(m.e)(s),c=e.origin?new b.a({x:e.origin.x,y:e.origin.y,spatialReference:s}):new b.a(a?{x:a.origin[0],y:a.origin[1],spatialReference:s}:{x:0,y:0,spatialReference:s}),u=1/(39.37*Object(l.g)(s)*96),p=[]
if(r)for(let e=0;e<r.length;e++){const t=r[e],n=t*u
p.push(new O.a({level:e,scale:t,resolution:n}))}else{let e=Object(m.h)(s)?512/i*591657527.5917094:256/i*591657527.591555
const r=Math.ceil(o/t)
p.push(new O.a({level:0,scale:e,resolution:e*u}))
for(let n=1;n<r;n++){const r=e/2**t,i=r*u
p.push(new O.a({level:n,scale:r,resolution:i})),e=r}}return new n({dpi:96,lods:p,origin:c,size:[i,i],spatialReference:s})}constructor(e){super(e),this.dpi=96,this.format=null,this.origin=null,this.minScale=0,this.maxScale=0,this.size=null,this.spatialReference=null}get isWrappable(){const{spatialReference:e,origin:t}=this
if(e&&t){const r=Object(m.e)(e)
return e.isWrappable&&!!r&&Math.abs(r.origin[0]-t.x)<=r.dx}return!1}readOrigin(e,t){return b.a.fromJSON({spatialReference:t.spatialReference,...e})}set lods(e){let t=0,r=0
const n=[],i=this._levelToLOD={}
e&&(t=-1/0,r=1/0,e.forEach(e=>{n.push(e.scale),t=e.scale>t?e.scale:t,r=e.scale<r?e.scale:r,i[e.level]=e})),this._set("scales",n),this._set("minScale",t),this._set("maxScale",r),this._set("lods",e),this._initializeUpsampleLevels()}readSize(e,t){return[t.cols,t.rows]}writeSize(e,t){t.cols=e[0],t.rows=e[1]}zoomToScale(e){const t=this.scales
if(e<=0)return t[0]
if(e>=t.length-1)return t[t.length-1]
const r=Math.floor(e),n=r+1
return t[r]/(t[r]/t[n])**(e-r)}scaleToZoom(e){const t=this.scales,r=t.length-1
let n=0
for(;n<r;n++){const r=t[n],i=t[n+1]
if(r<=e)return n
if(i===e)return n+1
if(r>e&&i<e)return n+Math.log(r/e)/Math.log(r/i)}return n}snapScale(e,t=.95){const r=this.scaleToZoom(e)
return r%Math.floor(r)>=t?this.zoomToScale(Math.ceil(r)):this.zoomToScale(Math.floor(r))}tileAt(e,t,r,n){const i=this.lodAt(e)
if(!i)return null
let s,o
if("number"==typeof t)s=t,o=r
else if(Object(m.d)(t.spatialReference,this.spatialReference))s=t.x,o=t.y,n=r
else{const e=Object(g.project)(t,this.spatialReference)
if(Object(a.k)(e))return null
s=e.x,o=e.y,n=r}const l=i.resolution*this.size[0],c=i.resolution*this.size[1]
return n||(n=new j.a(null,0,0,0,Object(y.m)())),n.level=e,n.row=Math.floor((this.origin.y-o)/c+.001),n.col=Math.floor((s-this.origin.x)/l+.001),this.updateTileInfo(n),n}updateTileInfo(e,t=n.ExtrapolateOptions.NONE){let r=this.lodAt(e.level)
if(!r&&t===n.ExtrapolateOptions.POWER_OF_TWO){const t=this.lods[this.lods.length-1]
t.level<e.level&&(r=t)}if(!r)return
const i=e.level-r.level,s=r.resolution*this.size[0]/2**i,o=r.resolution*this.size[1]/2**i
e.id=`${e.level}/${e.row}/${e.col}`,e.extent||(e.extent=Object(y.m)()),e.extent[0]=this.origin.x+e.col*s,e.extent[1]=this.origin.y-(e.row+1)*o,e.extent[2]=e.extent[0]+s,e.extent[3]=e.extent[1]+o}upsampleTile(e){const t=this._upsampleLevels[e.level]
return!(!t||-1===t.parentLevel||(e.level=t.parentLevel,e.row=Math.floor(e.row/t.factor+.001),e.col=Math.floor(e.col/t.factor+.001),this.updateTileInfo(e),0))}getTileBounds(e,t){const r=this.lodAt(t.level)
if(null==r)return null
const{resolution:n}=r,i=n*this.size[0],s=n*this.size[1]
return e[0]=this.origin.x+t.col*i,e[1]=this.origin.y-(t.row+1)*s,e[2]=e[0]+i,e[3]=e[1]+s,e}lodAt(e){var t,r
return null!=(t=null==(r=this._levelToLOD)?void 0:r[e])?t:null}clone(){return n.fromJSON(this.write({}))}getOrCreateCompatible(e,t){if(256===this.size[0]&&256===this.size[1])return 256===e?this:null
const r=[],i=this.lods.length
for(let e=0;e<i;e++){const n=this.lods[e],i=n.resolution*t
r.push(new O.a({level:n.level,scale:n.scale,resolution:i}))}return new n({size:[e,e],dpi:this.dpi,format:this.format,compressionQuality:this.compressionQuality,origin:this.origin,spatialReference:this.spatialReference,lods:r})}_initializeUpsampleLevels(){const e=this.lods
this._upsampleLevels=[]
let t=null
for(let r=0;r<e.length;r++){const n=e[r]
this._upsampleLevels[n.level]={parentLevel:t?t.level:-1,factor:t?t.resolution/n.resolution:0},t=n}}}
var S,x
Object(i.a)([Object(c.b)({type:Number,json:{write:!0}})],w.prototype,"compressionQuality",void 0),Object(i.a)([Object(c.b)({type:Number,json:{write:!0}})],w.prototype,"dpi",void 0),Object(i.a)([Object(c.b)({type:String,json:{read:v.read,write:v.write,origins:{"web-scene":{read:!1,write:!1}}}})],w.prototype,"format",void 0),Object(i.a)([Object(c.b)({readOnly:!0})],w.prototype,"isWrappable",null),Object(i.a)([Object(c.b)({type:b.a,json:{write:!0}})],w.prototype,"origin",void 0),Object(i.a)([Object(p.a)("origin")],w.prototype,"readOrigin",null),Object(i.a)([Object(c.b)({type:[O.a],value:null,json:{write:!0}})],w.prototype,"lods",null),Object(i.a)([Object(c.b)({readOnly:!0})],w.prototype,"minScale",void 0),Object(i.a)([Object(c.b)({readOnly:!0})],w.prototype,"maxScale",void 0),Object(i.a)([Object(c.b)({readOnly:!0})],w.prototype,"scales",void 0),Object(i.a)([Object(c.b)({cast:e=>Array.isArray(e)?e:"number"==typeof e?[e,e]:[256,256]})],w.prototype,"size",void 0),Object(i.a)([Object(p.a)("size",["rows","cols"])],w.prototype,"readSize",null),Object(i.a)([Object(h.a)("size",{cols:{type:u.a},rows:{type:u.a}})],w.prototype,"writeSize",null),Object(i.a)([Object(c.b)({type:f.default,json:{write:!0}})],w.prototype,"spatialReference",void 0),w=n=Object(i.a)([Object(d.a)("esri.layers.support.TileInfo")],w),S=w||(w={}),(x=S.ExtrapolateOptions||(S.ExtrapolateOptions={}))[x.NONE=0]="NONE",x[x.POWER_OF_TWO=1]="POWER_OF_TWO"
const _=w},1329:function(e,t,r){"use strict"
r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return l}))
var n=r(1034),i=r(993),s=r(1046),o=r(23)
async function a(e,t){return await e.load(),l(e,t)}async function l(e,t){const r=[],a=(...e)=>{for(const t of e)Object(o.k)(t)||(Array.isArray(t)?a(...t):i.a.isCollection(t)?t.forEach(e=>a(e)):s.a.isLoadable(t)&&r.push(t))}
t(a)
let l=null
if(await Object(n.d)(r,async e=>{const t=await Object(n.e)(function(e){return"loadAll"in e&&"function"==typeof e.loadAll}(e)?e.loadAll():e.load())
!1!==t.ok||l||(l=t)}),l)throw l.error
return e}},1330:function(e,t,r){"use strict"
r.d(t,"a",(function(){return o}))
var n=r(968),i=r(970),s=(r(971),r(445),r(969))
const o=e=>{let t=class extends e{get apiKey(){var e
return this._isOverridden("apiKey")?this._get("apiKey"):"portalItem"in this?null==(e=this.portalItem)?void 0:e.apiKey:null}set apiKey(e){null!=e?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}}
return Object(n.a)([Object(i.b)({type:String})],t.prototype,"apiKey",null),t=Object(n.a)([Object(s.a)("esri.layers.mixins.APIKeyMixin")],t),t}},1358:function(e,t,r){"use strict"
r.d(t,"a",(function(){return n}))
class n{constructor(e,t,r,n,i){this.id=e,this.level=t,this.row=r,this.col=n,this.extent=i}}},1380:function(e,t,r){"use strict"
r.d(t,"a",(function(){return h}))
var n=r(968),i=r(986),s=r(972),o=r(970),a=(r(971),r(445),r(977)),l=r(969),c=r(974),u=r(1132),p=r(1274)
let d=class extends(Object(i.b)(s.a)){constructor(e){super(e),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(e){const t={}
for(const r of Object.keys(e))t[r]=Object(u.a)(e[r])
return t}writeDomains(e,t){const r={}
for(const t of Object.keys(e)){var n
e[t]&&(r[t]=null==(n=e[t])?void 0:n.toJSON())}t.domains=r}}
Object(n.a)([Object(o.b)({json:{write:!0}})],d.prototype,"id",void 0),Object(n.a)([Object(o.b)({json:{write:!0}})],d.prototype,"name",void 0),Object(n.a)([Object(o.b)({json:{write:!0}})],d.prototype,"domains",void 0),Object(n.a)([Object(a.a)("domains")],d.prototype,"readDomains",null),Object(n.a)([Object(c.a)("domains")],d.prototype,"writeDomains",null),Object(n.a)([Object(o.b)({type:[p.a],json:{write:!0}})],d.prototype,"templates",void 0),d=Object(n.a)([Object(l.a)("esri.layers.support.FeatureType")],d)
const h=d},1396:function(e,t,r){"use strict"
r.d(t,"a",(function(){return u}))
var n,i=r(968),s=r(993),o=r(972),a=r(970),l=(r(971),r(445),r(969))
let c=n=class extends o.a{constructor(e){super(e),this.floorField=null,this.viewAllMode=!1,this.viewAllLevelIds=new s.a}clone(){return new n({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}}
Object(i.a)([Object(a.b)({type:String,json:{write:!0}})],c.prototype,"floorField",void 0),Object(i.a)([Object(a.b)({json:{read:!1,write:!1}})],c.prototype,"viewAllMode",void 0),Object(i.a)([Object(a.b)({json:{read:!1,write:!1}})],c.prototype,"viewAllLevelIds",void 0),c=n=Object(i.a)([Object(l.a)("esri.layers.support.LayerFloorInfo")],c)
const u=c},1406:function(e,t,r){"use strict"
function n(e){const t={}
for(const r in e){if("declaredClass"===r)continue
const i=e[r]
if(null!=i&&"function"!=typeof i)if(Array.isArray(i)){t[r]=[]
for(let e=0;e<i.length;e++)t[r][e]=n(i[e])}else"object"==typeof i?i.toJSON&&(t[r]=JSON.stringify(i)):t[r]=i}return t}r.d(t,"a",(function(){return n}))},1416:function(e,t,r){"use strict"
r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return c}))
var n=r(997),i=r(988),s=r(1153),o=r(1237),a=r(1062)
const l=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"]
class c{constructor(e){this._options=e,this.geometryTypes=l,this._coordinatePtr=0,this._vertexDimension=0}createFeatureResult(){return new o.a}prepareFeatures(e){this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&this._vertexDimension++}finishFeatureResult(e){if(!e||!e.features||!e.hasZ||!this._options.sourceSpatialReference||!e.spatialReference||Object(i.d)(e.spatialReference,this._options.sourceSpatialReference)||e.spatialReference.vcsWkid)return
const t=Object(n.h)(this._options.sourceSpatialReference)/Object(n.h)(e.spatialReference)
if(1!==t)for(const r of e.features){if(!Object(s.c)(r))continue
const e=r.geometry.coords
for(let r=2;r<e.length;r+=3)e[r]*=t}}addFeature(e,t){e.features.push(t)}createFeature(){return new s.a}createSpatialReference(){return{wkid:0}}createGeometry(){return new a.a}addField(e,t){e.fields.push(t)}allocateCoordinates(e){e.coords.length=e.lengths.reduce((e,t)=>e+t,0)*this._vertexDimension,this._coordinatePtr=0}addCoordinate(e,t){e.coords[this._coordinatePtr++]=t}addCoordinatePoint(e,t){e.coords.push(t)}addLength(e,t){e.lengths.push(t)}addQueryGeometry(e,t){e.queryGeometry=t.queryGeometry,e.queryGeometryType=t.queryGeometryType}createPointGeometry(){return new a.a}}},1430:function(e,t,r){"use strict"
r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return l}))
var n=r(1074),i=r(1220),s=r(1047),o=r(1014)
async function a(e,t,r){const n=await l(e,t,r)
return s.a.fromJSON(n)}async function l(e,t,r){const s=Object(n.c)(e),a={...r},l=o.a.from(t),{data:c}=await Object(i.a)(s,l,l.sourceSpatialReference,a)
return c}},1431:function(e,t,r){"use strict"
r.d(t,"a",(function(){return F})),r.d(t,"b",(function(){return p})),r.d(t,"c",(function(){return x}))
var n=r(446),i=r(23),s=r(1282),o=r(1062),a=r(1416)
const l=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString","esriFieldTypeDate","esriFieldTypeOID","esriFieldTypeGeometry","esriFieldTypeBlob","esriFieldTypeRaster","esriFieldTypeGUID","esriFieldTypeGlobalID","esriFieldTypeXML"],c=["sqlTypeBigInt","sqlTypeBinary","sqlTypeBit","sqlTypeChar","sqlTypeDate","sqlTypeDecimal","sqlTypeDouble","sqlTypeFloat","sqlTypeGeometry","sqlTypeGUID","sqlTypeInteger","sqlTypeLongNVarchar","sqlTypeLongVarbinary","sqlTypeLongVarchar","sqlTypeNChar","sqlTypeNVarchar","sqlTypeOther","sqlTypeReal","sqlTypeSmallInt","sqlTypeSqlXml","sqlTypeTime","sqlTypeTimestamp","sqlTypeTimestamp2","sqlTypeTinyInt","sqlTypeVarbinary","sqlTypeVarchar"],u=["upperLeft","lowerLeft"]
function p(e){return e>=l.length?null:l[e]}function d(e){return e>=c.length?null:c[e]}function h(e){return e>=u.length?null:u[e]}function b(e,t){return t>=e.geometryTypes.length?null:e.geometryTypes[t]}function f(e,t,r){const n=e.asUnsafe(),i=t.createPointGeometry(r)
for(;n.next();)switch(n.tag()){case 3:{const e=n.getUInt32(),r=n.pos()+e
let s=0
for(;n.pos()<r;)t.addCoordinatePoint(i,n.getSInt64(),s++)
break}default:n.skip()}return i}function y(e,t,r){const n=e.asUnsafe(),i=t.createGeometry(r),s=2+(r.hasZ?1:0)+(r.hasM?1:0)
for(;n.next();)switch(n.tag()){case 2:{const e=n.getUInt32(),r=n.pos()+e
let s=0
for(;n.pos()<r;)t.addLength(i,n.getUInt32(),s++)
break}case 3:{const e=n.getUInt32(),r=n.pos()+e
let o=0
for(t.allocateCoordinates(i);n.pos()<r;)t.addCoordinate(i,n.getSInt64(),o),o++,o===s&&(o=0)
break}default:n.skip()}return i}function m(e){const t=e.asUnsafe(),r=new o.a
let n="esriGeometryPoint"
for(;t.next();)switch(t.tag()){case 2:{const e=t.getUInt32(),n=t.pos()+e
for(;t.pos()<n;)r.lengths.push(t.getUInt32())
break}case 3:{const e=t.getUInt32(),n=t.pos()+e
for(;t.pos()<n;)r.coords.push(t.getSInt64())
break}case 1:n=a.a[t.getEnum()]
break
default:t.skip()}return{queryGeometry:r,queryGeometryType:n}}function g(e){const t=e.asUnsafe()
for(;t.next();)switch(t.tag()){case 1:return t.getString()
case 2:return t.getFloat()
case 3:return t.getDouble()
case 4:return t.getSInt32()
case 5:return t.getUInt32()
case 6:return t.getInt64()
case 7:return t.getUInt64()
case 8:return t.getSInt64()
case 9:return t.getBool()
default:return t.skip(),null}return null}function O(e){const t=e.asUnsafe(),r={type:p(0)}
for(;t.next();)switch(t.tag()){case 1:r.name=t.getString()
break
case 2:r.type=p(t.getEnum())
break
case 3:r.alias=t.getString()
break
case 4:r.sqlType=d(t.getEnum())
break
case 5:t.skip()
break
case 6:r.defaultValue=t.getString()
break
default:t.skip()}return r}function j(e){const t={},r=e.asUnsafe()
for(;r.next();)switch(r.tag()){case 1:t.name=r.getString()
break
case 2:t.isSystemMaintained=r.getBool()
break
default:r.skip()}return t}function v(e,t,r,n){const i=t.createFeature(r)
let s=0
for(;e.next();)switch(e.tag()){case 1:{const t=n[s++].name
i.attributes[t]=e.processMessage(g)
break}case 2:i.geometry=e.processMessageWithArgs(y,t,r)
break
case 4:i.centroid=e.processMessageWithArgs(f,t,r)
break
default:e.skip()}return i}function w(e){const t=[1,1,1,1],r=e.asUnsafe()
for(;r.next();)switch(r.tag()){case 1:t[0]=r.getDouble()
break
case 2:t[1]=r.getDouble()
break
case 4:t[2]=r.getDouble()
break
case 3:t[3]=r.getDouble()
break
default:r.skip()}return t}function S(e){const t=[0,0,0,0],r=e.asUnsafe()
for(;r.next();)switch(r.tag()){case 1:t[0]=r.getDouble()
break
case 2:t[1]=r.getDouble()
break
case 4:t[2]=r.getDouble()
break
case 3:t[3]=r.getDouble()
break
default:r.skip()}return t}function x(e){const t={originPosition:h(0)},r=e.asUnsafe()
for(;r.next();)switch(r.tag()){case 1:t.originPosition=h(r.getEnum())
break
case 2:t.scale=r.processMessage(w)
break
case 3:t.translate=r.processMessage(S)
break
default:r.skip()}return t}function _(e){const t={},r=e.asUnsafe()
for(;r.next();)switch(r.tag()){case 1:t.shapeAreaFieldName=r.getString()
break
case 2:t.shapeLengthFieldName=r.getString()
break
case 3:t.units=r.getString()
break
default:r.skip()}return t}function I(e,t){const r=t.createSpatialReference()
for(;e.next();)switch(e.tag()){case 1:r.wkid=e.getUInt32()
break
case 5:r.wkt=e.getString()
break
case 2:r.latestWkid=e.getUInt32()
break
case 3:r.vcsWkid=e.getUInt32()
break
case 4:r.latestVcsWkid=e.getUInt32()
break
default:e.skip()}return r}function T(e,t){const r=t.createFeatureResult(),n=e.asUnsafe()
r.geometryType=b(t,0)
let i=!1
for(;n.next();)switch(n.tag()){case 1:r.objectIdFieldName=n.getString()
break
case 3:r.globalIdFieldName=n.getString()
break
case 4:r.geohashFieldName=n.getString()
break
case 5:r.geometryProperties=n.processMessage(_)
break
case 7:r.geometryType=b(t,n.getEnum())
break
case 8:r.spatialReference=n.processMessageWithArgs(I,t)
break
case 10:r.hasZ=n.getBool()
break
case 11:r.hasM=n.getBool()
break
case 12:r.transform=n.processMessage(x)
break
case 9:{const e=n.getBool()
r.exceededTransferLimit=e
break}case 13:t.addField(r,n.processMessage(O))
break
case 15:i||(t.prepareFeatures(r),i=!0),t.addFeature(r,n.processMessageWithArgs(v,t,r,r.fields))
break
case 2:r.uniqueIdField=n.processMessage(j)
break
default:n.skip()}return t.finishFeatureResult(r),r}function M(e,t){const r={}
let n=null
for(;e.next();)switch(e.tag()){case 4:n=e.processMessageWithArgs(m)
break
case 1:r.featureResult=e.processMessageWithArgs(T,t)
break
default:e.skip()}return Object(i.l)(n)&&r.featureResult&&t.addQueryGeometry(r,n),r}function F(e,t){try{const r=2,n=new s.a(new Uint8Array(e),new DataView(e)),i={}
for(;n.next();)n.tag()===r?i.queryResult=n.processMessageWithArgs(M,t):n.skip()
return i}catch(e){throw new n.a("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:e})}}},1445:function(e,t,r){"use strict"
r.d(t,"a",(function(){return i}))
var n=r(1431)
function i(e,t){const r=Object(n.a)(e,t),i=r.queryResult.featureResult,s=r.queryResult.queryGeometry,o=r.queryResult.queryGeometryType
if(i&&i.features&&i.features.length&&i.objectIdFieldName){const e=i.objectIdFieldName
for(const t of i.features)t.attributes&&(t.objectId=t.attributes[e])}return i&&(i.queryGeometry=s,i.queryGeometryType=o),i}},1665:function(e,t,r){"use strict"
r.d(t,"a",(function(){return y}))
var n=r(1074),i=r(23),s=r(1163),o=r(1057)
function a(e,t){return t}function l(e,t,r,n){switch(r){case 0:return d(e,t+n,0)
case 1:return"lowerLeft"===e.originPosition?d(e,t+n,1):function({translate:e,scale:t},r,n){return e[n]-r*t[n]}(e,t+n,1)}}function c(e,t,r,n){return 2===r?d(e,t,2):l(e,t,r,n)}function u(e,t,r,n){return 2===r?d(e,t,3):l(e,t,r,n)}function p(e,t,r,n){return 3===r?d(e,t,3):c(e,t,r,n)}function d({translate:e,scale:t},r,n){return e[n]+r*t[n]}class h{constructor(e){this._options=e,this.geometryTypes=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"],this._previousCoordinate=[0,0],this._transform=null,this._applyTransform=a,this._lengths=[],this._currentLengthIndex=0,this._toAddInCurrentPath=0,this._vertexDimension=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,this._attributesConstructor=class{}}createFeatureResult(){return{fields:[],features:[]}}finishFeatureResult(e){if(this._options.applyTransform&&(e.transform=null),this._attributesConstructor=class{},this._coordinateBuffer=null,this._lengths.length=0,!e.hasZ)return
const t=Object(s.a)(e.geometryType,this._options.sourceSpatialReference,e.spatialReference)
if(!Object(i.k)(t))for(const r of e.features)t(r.geometry)}createSpatialReference(){return{}}addField(e,t){const r=e.fields
Object(i.c)(r),r.push(t)
const n=r.map(e=>e.name)
this._attributesConstructor=function(){for(const e of n)this[e]=null}}addFeature(e,t){e.features.push(t)}prepareFeatures(e){switch(this._transform=e.transform,this._options.applyTransform&&e.transform&&(this._applyTransform=this._deriveApplyTransform(e)),this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&this._vertexDimension++,e.geometryType){case"esriGeometryPoint":this.addCoordinate=(e,t,r)=>this.addCoordinatePoint(e,t,r),this.createGeometry=e=>this.createPointGeometry(e)
break
case"esriGeometryPolygon":this.addCoordinate=(e,t,r)=>this._addCoordinatePolygon(e,t,r),this.createGeometry=e=>this._createPolygonGeometry(e)
break
case"esriGeometryPolyline":this.addCoordinate=(e,t,r)=>this._addCoordinatePolyline(e,t,r),this.createGeometry=e=>this._createPolylineGeometry(e)
break
case"esriGeometryMultipoint":this.addCoordinate=(e,t,r)=>this._addCoordinateMultipoint(e,t,r),this.createGeometry=e=>this._createMultipointGeometry(e)}}createFeature(){return this._lengths.length=0,this._currentLengthIndex=0,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,{attributes:new this._attributesConstructor}}allocateCoordinates(){}addLength(e,t,r){0===this._lengths.length&&(this._toAddInCurrentPath=t),this._lengths.push(t)}addQueryGeometry(e,t){const{queryGeometry:r,queryGeometryType:n}=t,i=Object(o.A)(r.clone(),r,!1,!1,this._transform),s=Object(o.l)(i,n,!1,!1)
e.queryGeometryType=n,e.queryGeometry={...s}}createPointGeometry(e){const t={x:0,y:0,spatialReference:e.spatialReference}
return e.hasZ&&(t.z=0),e.hasM&&(t.m=0),t}addCoordinatePoint(e,t,r){const n=Object(i.w)(this._transform,"transform")
switch(t=this._applyTransform(n,t,r,0),r){case 0:e.x=t
break
case 1:e.y=t
break
case 2:"z"in e?e.z=t:e.m=t
break
case 3:e.m=t}}_transformPathLikeValue(e,t){let r=0
t<=1&&(r=this._previousCoordinate[t],this._previousCoordinate[t]+=e)
const n=Object(i.w)(this._transform,"transform")
return this._applyTransform(n,e,t,r)}_addCoordinatePolyline(e,t,r){this._dehydratedAddPointsCoordinate(e.paths,t,r)}_addCoordinatePolygon(e,t,r){this._dehydratedAddPointsCoordinate(e.rings,t,r)}_addCoordinateMultipoint(e,t,r){0===r&&e.points.push([])
const n=this._transformPathLikeValue(t,r)
e.points[e.points.length-1].push(n)}_createPolygonGeometry(e){return{rings:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_createPolylineGeometry(e){return{paths:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_createMultipointGeometry(e){return{points:[],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_dehydratedAddPointsCoordinate(e,t,r){0===r&&0==this._toAddInCurrentPath--&&(e.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0)
const n=this._transformPathLikeValue(t,r),i=e[e.length-1]
0===r&&(this._coordinateBufferPtr=0,this._coordinateBuffer=new Array(this._vertexDimension),i.push(this._coordinateBuffer)),this._coordinateBuffer[this._coordinateBufferPtr++]=n}_deriveApplyTransform(e){const{hasZ:t,hasM:r}=e
return t&&r?p:t?c:r?u:l}}var b=r(1220),f=(r(1047),r(1014))
async function y(e,t,r){const i=Object(n.c)(e),s={...r},o=f.a.from(t),a=!o.quantizationParameters,{data:l}=await Object(b.e)(i,o,new h({sourceSpatialReference:o.sourceSpatialReference,applyTransform:a}),s)
return l}},1700:function(e,t,r){"use strict"
r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return s}))
var n=r(23),i=r(1006)
function s(e,t,r){return t.flatten(({sublayers:e})=>e).length!==e.length||!!e.some(e=>e.originIdOf("minScale")>r||e.originIdOf("maxScale")>r||e.originIdOf("renderer")>r||e.originIdOf("labelingInfo")>r||e.originIdOf("opacity")>r||e.originIdOf("labelsVisible")>r||e.originIdOf("source")>r)||!a(e,t)}function o(e,t,r){return!!e.some(e=>{const t=e.source
return!(!t||"map-layer"===t.type&&t.mapLayerId===e.id&&(Object(n.k)(t.gdbVersion)||t.gdbVersion===r))||e.originIdOf("renderer")>i.a.SERVICE||e.originIdOf("labelingInfo")>i.a.SERVICE||e.originIdOf("opacity")>i.a.SERVICE||e.originIdOf("labelsVisible")>i.a.SERVICE})||!a(e,t)}function a(e,t){if(!e||!e.length||Object(n.k)(t))return!0
const r=t.slice().reverse().flatten(({sublayers:e})=>e&&e.toArray().reverse()).map(e=>e.id).toArray()
if(e.length>r.length)return!1
let i=0
const s=r.length
for(const{id:t}of e){for(;i<s&&r[i]!==t;)i++
if(i>=s)return!1}return!0}function l(e){return!!e&&e.some(e=>null!=e.minScale||e.layerDefinition&&null!=e.layerDefinition.minScale)}},1717:function(e,t,r){"use strict"
r.d(t,"a",(function(){return i}))
var n=r(446)
let i=class{constructor(e,t,r=""){this.major=e,this.minor=t,this._context=r}lessThan(e,t){return this.major<e||e===this.major&&this.minor<t}since(e,t){return!this.lessThan(e,t)}validate(e){if(this.major!==e.major){const t=this._context&&this._context+":",r=this._context&&this._context+" "
throw new n.a(t+"unsupported-version",`Required major ${r}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:e})}}clone(){return new i(this.major,this.minor,this._context)}static parse(e,t=""){const[r,s]=e.split("."),o=/^\s*\d+\s*$/
if(!r||!r.match||!r.match(o))throw new n.a((t&&t+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:e})
if(!s||!s.match||!s.match(o))throw new n.a((t&&t+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:e})
const a=parseInt(r,10),l=parseInt(s,10)
return new i(a,l,t)}}},1759:function(e,t,r){"use strict"
r.d(t,"a",(function(){return i}))
var n=r(446)
async function i(e,t){try{return await createImageBitmap(e)}catch(e){throw new n.a("request:server","Unable to load "+t,{url:t,error:e})}}},1855:function(e,t,r){"use strict"
r.d(t,"a",(function(){return o}))
var n=r(1074),i=r(1220),s=r(1014)
async function o(e,t,r){const o=Object(n.c)(e)
return Object(i.b)(o,s.a.from(t),{...r}).then(e=>e.data.count)}},1856:function(e,t,r){"use strict"
r.d(t,"a",(function(){return o}))
var n=r(1074),i=r(1220),s=r(1014)
async function o(e,t,r){const o=Object(n.c)(e)
return Object(i.d)(o,s.a.from(t),{...r}).then(e=>e.data.objectIds)}},1895:function(e,t,r){"use strict"
r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return i}))
var n=r(1322)
const i={type:n.a,json:{origins:{service:{read:{source:["tileInfo","minScale","maxScale","minLOD","maxLOD"],reader:s}}}}}
function s(e,t,r,i){if(!e)return null
const{minScale:s,maxScale:o,minLOD:a,maxLOD:l}=t
if(null!=a&&null!=l)return i&&i.ignoreMinMaxLOD?n.a.fromJSON(e):n.a.fromJSON({...e,lods:e.lods.filter(({level:e})=>null!=e&&e>=a&&e<=l)})
if(0!==s&&0!==o){const t=e=>Math.round(1e4*e)/1e4,r=s?t(s):1/0,i=o?t(o):-1/0
return n.a.fromJSON({...e,lods:e.lods.filter(e=>{const n=t(e.scale)
return n<=r&&n>=i})})}return n.a.fromJSON(e)}},1920:function(e,t,r){"use strict"
r.d(t,"a",(function(){return _}))
var n,i=r(968),s=r(771),o=r(975),a=r(1207),l=r(446),c=r(1025),u=r(233),p=r(1189),d=r(1056),h=r(973),b=r(978),f=r(1024),y=r(374),m=r(970),g=r(987),O=r(445),j=r(969),v=r(1358),w=r(234)
class S{constructor(){this.location={left:0,top:0,width:0,height:0},this._allAvailability="unknown",this.byteSize=40}getAvailability(e,t){if("unknown"!==this._allAvailability)return this._allAvailability
const r=(e-this.location.top)*this.location.width+(t-this.location.left),n=r%8,i=r>>3,s=this._tileAvailabilityBitSet
return i<0||i>s.length?"unknown":s[i]&1<<n?"available":"unavailable"}_updateFromData(e){const t=this.location.width,r=this.location.height
let n=!0,i=!0
const s=Math.ceil(t*r/8),o=new Uint8Array(s)
let a=0
for(let t=0;t<e.length;t++){const r=t%8
e[t]?(i=!1,o[a]|=1<<r):n=!1,7===r&&++a}i?this._allAvailability="unavailable":n?this._allAvailability="available":(this._allAvailability="unknown",this._tileAvailabilityBitSet=o,this.byteSize+=o.length)}static fromDefinition(e,t){const r=e.service.request||s.default,{row:n,col:i,width:o,height:a}=e,c={query:{f:"json"}}
return t=t?{...c,...t}:c,r(function(e){let t
if("vector-tile"===e.service.type)t=`${e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`
else{const r=e.service.tileServers
t=`${r&&r.length?r[e.row%r.length]:e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}const r=e.service.query
return r&&(t=`${t}?${r}`),t}(e),t).then(e=>e.data).catch(e=>{if(e&&e.details&&422===e.details.httpStatus)return{location:{top:n,left:i,width:o,height:a},valid:!0,data:Object(O.c)(o*a,0)}
throw e}).then(e=>{if(e.location&&(e.location.top!==n||e.location.left!==i||e.location.width!==o||e.location.height!==a))throw new l.a("tilemap:location-mismatch","Tilemap response for different location than requested",{response:e,definition:{top:n,left:i,width:o,height:a}})
return S.fromJSON(e)})}static fromJSON(e){S._validateJSON(e)
const t=new S
return t.location=Object.freeze(Object(w.a)(e.location)),t._updateFromData(e.data),Object.freeze(t)}static _validateJSON(e){if(!e||!e.location)throw new l.a("tilemap:missing-location","Location missing from tilemap response")
if(!1===e.valid)throw new l.a("tilemap:invalid","Tilemap response was marked as invalid")
if(!e.data)throw new l.a("tilemap:missing-data","Data missing from tilemap response")
if(!Array.isArray(e.data))throw new l.a("tilemap:data-mismatch","Data must be an array of numbers")
if(e.data.length!==e.location.width*e.location.height)throw new l.a("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}function x(e){return`${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}let _=n=class extends(Object(c.b)(o.a)){constructor(e){super(e),this._pendingTilemapRequests={},this._availableLevels={},this.levels=5,this.cacheByteSize=2*a.a.MEGABYTES,this.request=s.default,this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new p.a(this.cacheByteSize),this.addHandles([Object(b.f)(()=>{const{layer:e}=this
return[null==e?void 0:e.parsedUrl,null==e?void 0:e.tileServers,null==e?void 0:e.apiKey,null==e?void 0:e.customParameters]},()=>this._initializeTilemapDefinition()),Object(b.f)(()=>{var e,t
return null==(e=this.layer)||null==(t=e.tileInfo)?void 0:t.lods},e=>this._initializeAvailableLevels(e),b.e)]),this._initializeTilemapDefinition()}castLevels(e){return e<=2?(u.a.getLogger(this.declaredClass).error("Minimum levels for Tilemap is 3, but got ",e),3):e}get size(){return 1<<this.levels}fetchTilemap(e,t,r,n){if(!this._availableLevels[e])return Promise.reject(new l.a("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`))
const i=this._tmpTilemapDefinition,s=this._tilemapFromCache(e,t,r,i)
if(s)return Promise.resolve(s)
const o=n&&n.signal
return n={...n,signal:null},new Promise((e,t)=>{Object(h.n)(o,()=>t(Object(h.c)()))
const r=x(i)
let s=this._pendingTilemapRequests[r]
if(!s){s=S.fromDefinition(i,n).then(e=>(this._tilemapCache.put(r,e,e.byteSize),e))
const e=()=>delete this._pendingTilemapRequests[r]
this._pendingTilemapRequests[r]=s,s.then(e,e)}s.then(e,t)})}getAvailability(e,t,r){if(!this._availableLevels[e])return"unavailable"
const n=this._tilemapFromCache(e,t,r,this._tmpTilemapDefinition)
return n?n.getAvailability(t,r):"unknown"}fetchAvailability(e,t,r,n){return this._availableLevels[e]?this.fetchTilemap(e,t,r,n).catch(e=>e).then(n=>{if(n instanceof S){const i=n.getAvailability(t,r)
if("unavailable"===i)throw new l.a("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:r})
return i}if(Object(h.j)(n))throw n
return"unknown"}):Promise.reject(new l.a("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`))}fetchAvailabilityUpsample(e,t,r,n,i){n.level=e,n.row=t,n.col=r
const s=this.layer.tileInfo
s.updateTileInfo(n)
const o=this.fetchAvailability(e,t,r,i).catch(e=>{if(Object(h.j)(e))throw e
if(s.upsampleTile(n))return this.fetchAvailabilityUpsample(n.level,n.row,n.col,n)
throw e})
return this._fetchAvailabilityUpsamplePrefetch(n.id,e,t,r,i,o),o}async _fetchAvailabilityUpsamplePrefetch(e,t,r,i,s,o){if(!this._prefetchingEnabled||null==e)return
const a="prefetch-"+e
if(this.handles.has(a))return
const l=new AbortController
o.then(()=>l.abort(),()=>l.abort())
let c=!1
const u={remove(){c||(c=!0,l.abort())}}
if(this.handles.add(u,a),await Object(f.d)(10,l.signal).catch(()=>{}),c||(c=!0,this.handles.remove(a)),Object(h.k)(l))return
const p=new v.a(e,t,r,i),d={...s,signal:l.signal},b=this.layer.tileInfo
for(let e=0;n._prefetches.length<n._maxPrefetch&&b.upsampleTile(p);++e){const e=this.fetchAvailability(p.level,p.row,p.col,d)
n._prefetches.push(e)
const t=()=>{n._prefetches.removeUnordered(e)}
e.then(t,t)}}_initializeTilemapDefinition(){var e
if(!this.layer.parsedUrl)return
const{parsedUrl:t,apiKey:r,customParameters:n}=this.layer
this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:t.path,query:Object(y.J)({...t.query,...n,token:null!=r?r:null==(e=t.query)?void 0:e.token}),tileServers:this.layer.tileServers,request:this.request,type:this.layer.type},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,t,r,n){n.level=e,n.row=t-t%this.size,n.col=r-r%this.size
const i=x(n)
return this._tilemapCache.get(i)}_initializeAvailableLevels(e){this._availableLevels={},e&&e.forEach(e=>this._availableLevels[e.level]=!0)}get test(){const e=this
return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:(t,r,n)=>!!e._tilemapFromCache(t,r,n,e._tmpTilemapDefinition)}}}
_._maxPrefetch=4,_._prefetches=new d.a({initialSize:n._maxPrefetch}),Object(i.a)([Object(m.b)({constructOnly:!0,type:Number})],_.prototype,"levels",void 0),Object(i.a)([Object(g.a)("levels")],_.prototype,"castLevels",null),Object(i.a)([Object(m.b)({readOnly:!0,type:Number})],_.prototype,"size",null),Object(i.a)([Object(m.b)({constructOnly:!0,type:Number})],_.prototype,"cacheByteSize",void 0),Object(i.a)([Object(m.b)({constructOnly:!0})],_.prototype,"layer",void 0),Object(i.a)([Object(m.b)({constructOnly:!0})],_.prototype,"request",void 0),_=n=Object(i.a)([Object(j.a)("esri.layers.support.TilemapCache")],_)},2028:function(e,t,r){"use strict"
r.d(t,"a",(function(){return K}))
var n,i=r(968),s=(r(982),r(775)),o=(r(1081),r(1098),r(1101),r(1102),r(1100),r(1001),r(1097),r(1084),r(1092),r(1103)),a=r(771),l=r(995),c=r(993),u=r(446),p=r(1025),d=r(235),h=r(1063),b=r(234),f=r(1046),y=r(233),m=r(23),g=r(1186),O=r(1198),j=r(374),v=r(970),w=r(987),S=r(977),x=r(969),_=r(974),I=r(971),T=r(1006),M=r(999),F=r(2147),E=r(1380),V=r(1050),L=r(1184),k=r(776),A=r(1285),D=r(1396),R=r(1291),C=r(1106),P=r(1278),N=r(1233),q=r(1014),z=r(1297),U=r(770),G=r(1036)
function B(e){return null!=e&&"esriSMS"===e.type}function $(e,t,r){var n
const i=this.originIdOf(t)>=Object(T.e)(r.origin)
return{ignoreOrigin:!0,allowNull:i,enabled:!!r&&"map-image"===(null==(n=r.layer)?void 0:n.type)&&(r.writeSublayerStructure||i)}}function J(e,t,r){var n
return{enabled:!!r&&"tile"===(null==(n=r.layer)?void 0:n.type)&&this._isOverridden(t)}}function H(e,t,r){return{ignoreOrigin:!0,enabled:r&&r.writeSublayerStructure||!1}}function W(e,t,r){return{ignoreOrigin:!0,enabled:!!r&&(r.writeSublayerStructure||this.originIdOf(t)>=Object(T.e)(r.origin))}}let Q=0
const Y=new Set
Y.add("layer"),Y.add("parent"),Y.add("loaded"),Y.add("loadStatus"),Y.add("loadError"),Y.add("loadWarnings")
let Z=n=class extends(Object(p.b)(Object(g.a)(Object(h.b)(f.a)))){constructor(e){super(e),this.capabilities=void 0,this.fields=null,this.fullExtent=null,this.geometryType=null,this.globalIdField=null,this.legendEnabled=!0,this.objectIdField=null,this.popupEnabled=!0,this.popupTemplate=null,this.sourceJSON=null,this.title=null,this.typeIdField=null,this.types=null,this._lastParsedUrl=null}async load(e){return this.addResolvingPromise((async()=>{const{layer:t,source:r,url:n}=this
if(!t&&!n)throw new u.a("sublayer:missing-layer","Sublayer can't be loaded without being part of a layer",{sublayer:this})
let i=null
if(!t||this.originIdOf("url")>T.a.SERVICE||"data-layer"===(null==r?void 0:r.type))i=(await Object(a.default)(n,{responseType:"json",query:{f:"json"},...e})).data
else{let n=this.id
"map-layer"===(null==r?void 0:r.type)&&(n=r.mapLayerId),i=await t.fetchSublayerInfo(n,e)}i&&(this.sourceJSON=i,this.read({layerDefinition:i},{origin:"service"}))})()),this}readCapabilities(e,t){t=t.layerDefinition||t
const{operations:{supportsQuery:r,supportsQueryAttachments:n},query:{supportsFormatPBF:i},data:{supportsAttachment:s}}=Object(R.a)(t,this.url)
return{exportMap:{supportsModification:!!t.canModifyLayer},operations:{supportsQuery:r,supportsQueryAttachments:n},data:{supportsAttachment:s},query:{supportsFormatPBF:i}}}get defaultPopupTemplate(){return this.createPopupTemplate()}set definitionExpression(e){this._setAndNotifyLayer("definitionExpression",e)}get fieldsIndex(){return new L.a(this.fields||[])}set floorInfo(e){this._setAndNotifyLayer("floorInfo",e)}readGlobalIdFieldFromService(e,t){if((t=t.layerDefinition||t).globalIdField)return t.globalIdField
if(t.fields)for(const e of t.fields)if("esriFieldTypeGlobalID"===e.type)return e.name}get id(){const e=this._get("id")
return null!=e?e:Q++}set id(e){var t,r,n
this._get("id")!==e&&(!1!==(null==(t=this.layer)||null==(r=t.capabilities)||null==(n=r.exportMap)?void 0:n.supportsDynamicLayers)?this._set("id",e):this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"))}set labelingInfo(e){this._setAndNotifyLayer("labelingInfo",e)}writeLabelingInfo(e,t,r,n){e&&e.length&&(t.layerDefinition={drawingInfo:{labelingInfo:e.map(e=>e.write({},n))}})}set labelsVisible(e){this._setAndNotifyLayer("labelsVisible",e)}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach(t=>t.layer=e)}set listMode(e){this._set("listMode",e)}set minScale(e){this._setAndNotifyLayer("minScale",e)}readMinScale(e,t){return t.minScale||t.layerDefinition&&t.layerDefinition.minScale||0}set maxScale(e){this._setAndNotifyLayer("maxScale",e)}readMaxScale(e,t){return t.maxScale||t.layerDefinition&&t.layerDefinition.maxScale||0}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this
return{minScale:e,maxScale:t}}readObjectIdFieldFromService(e,t){if((t=t.layerDefinition||t).objectIdField)return t.objectIdField
if(t.fields)for(const e of t.fields)if("esriFieldTypeOID"===e.type)return e.name}set opacity(e){this._setAndNotifyLayer("opacity",e)}readOpacity(e,t){var r,n
const i=t.layerDefinition
return 1-.01*(null!=(r=null!=(null==i?void 0:i.transparency)?i.transparency:null==i||null==(n=i.drawingInfo)?void 0:n.transparency)?r:0)}writeOpacity(e,t,r,n){t.layerDefinition={drawingInfo:{transparency:100-100*e}}}writeParent(e,t){this.parent&&this.parent!==this.layer?t.parentLayerId=Object(I.e)(this.parent.id):t.parentLayerId=-1}get queryTask(){var e,t
if(!this.layer)return null
const{spatialReference:r}=this.layer,n="gdbVersion"in this.layer?this.layer.gdbVersion:void 0,{capabilities:i,fieldsIndex:s}=this,o=Object(d.a)("featurelayer-pbf")&&(null==i?void 0:i.query.supportsFormatPBF),a=null!=(e=null==i||null==(t=i.operations)?void 0:t.supportsQueryAttachments)&&e
return new F.a({url:this.url,pbfSupported:o,fieldsIndex:s,gdbVersion:n,sourceSpatialReference:r,queryAttachmentsSupported:a})}set renderer(e){if(e)for(const t of e.getSymbols())if(Object(l.c)(t)){y.a.getLogger(this.declaredClass).warn("Sublayer renderer should use 2D symbols")
break}this._setAndNotifyLayer("renderer",e)}get source(){return this._get("source")||new P.a({mapLayerId:this.id})}set source(e){this._setAndNotifyLayer("source",e)}set sublayers(e){this._handleSublayersChange(e,this._get("sublayers")),this._set("sublayers",e)}castSublayers(e){return Object(I.m)(c.a.ofType(n),e)}writeSublayers(e,t,r){var n;(null==(n=this.sublayers)?void 0:n.length)&&(t[r]=this.sublayers.map(e=>e.id).toArray().reverse())}readTypeIdField(e,t){let r=(t=t.layerDefinition||t).typeIdField
if(r&&t.fields){r=r.toLowerCase()
const e=t.fields.find(e=>e.name.toLowerCase()===r)
e&&(r=e.name)}return r}get url(){var e,t
const r=null!=(e=null==(t=this.layer)?void 0:t.parsedUrl)?e:this._lastParsedUrl,n=this.source
if(!r)return null
if(this._lastParsedUrl=r,"map-layer"===(null==n?void 0:n.type))return`${r.path}/${n.mapLayerId}`
const i={layer:JSON.stringify({source:this.source})}
return`${r.path}/dynamicLayer?${Object(j.J)(i)}`}set url(e){this._overrideIfSome("url",e)}set visible(e){this._setAndNotifyLayer("visible",e)}writeVisible(e,t,r,n){t[r]=this.getAtOrigin("defaultVisibility","service")||e}clone(){const{store:e}=Object(M.a)(this),t=new n
return Object(M.a)(t).store=e.clone(Y),this.commitProperty("url"),t._lastParsedUrl=this._lastParsedUrl,t}createPopupTemplate(e){return Object(z.a)(this,e)}createQuery(){return new q.a({returnGeometry:!0,where:this.definitionExpression||"1=1"})}async createFeatureLayer(){var e
if(this.hasOwnProperty("sublayers"))return null
const{layer:t}=this,n=null==t?void 0:t.parsedUrl,i=new(0,(await Promise.all([r.e(23),r.e(33),r.e(229),r.e(467)]).then(r.bind(null,779))).default)({url:null==n?void 0:n.path})
return n&&this.source&&("map-layer"===this.source.type?i.layerId=this.source.mapLayerId:i.dynamicDataSource=this.source),null!=(null==t?void 0:t.refreshInterval)&&(i.refreshInterval=t.refreshInterval),this.definitionExpression&&(i.definitionExpression=this.definitionExpression),this.floorInfo&&(i.floorInfo=Object(b.a)(this.floorInfo)),this.originIdOf("labelingInfo")>T.a.SERVICE&&(i.labelingInfo=Object(b.a)(this.labelingInfo)),this.originIdOf("labelsVisible")>T.a.DEFAULTS&&(i.labelsVisible=this.labelsVisible),this.originIdOf("legendEnabled")>T.a.DEFAULTS&&(i.legendEnabled=this.legendEnabled),this.originIdOf("visible")>T.a.DEFAULTS&&(i.visible=this.visible),this.originIdOf("minScale")>T.a.DEFAULTS&&(i.minScale=this.minScale),this.originIdOf("maxScale")>T.a.DEFAULTS&&(i.maxScale=this.maxScale),this.originIdOf("opacity")>T.a.DEFAULTS&&(i.opacity=this.opacity),this.originIdOf("popupTemplate")>T.a.DEFAULTS&&(i.popupTemplate=Object(b.a)(this.popupTemplate)),this.originIdOf("renderer")>T.a.SERVICE&&(i.renderer=Object(b.a)(this.renderer)),"data-layer"===(null==(e=this.source)?void 0:e.type)&&(i.dynamicDataSource=this.source.clone()),this.originIdOf("title")>T.a.DEFAULTS&&(i.title=this.title),"map-image"===(null==t?void 0:t.type)&&t.originIdOf("customParameters")>T.a.DEFAULTS&&(i.customParameters=t.customParameters),"tile"===(null==t?void 0:t.type)&&t.originIdOf("customParameters")>T.a.DEFAULTS&&(i.customParameters=t.customParameters),i}getField(e){return this.fieldsIndex.get(e)}getFeatureType(e){const{typeIdField:t,types:r}=this
if(!t||!e)return null
const n=e.attributes?e.attributes[t]:void 0
if(null==n)return null
let i=null
return null!=r&&r.some(e=>{const{id:t}=e
return null!=t&&(t.toString()===n.toString()&&(i=e),!!i)}),i}getFieldDomain(e,t){const r=t&&t.feature,n=this.getFeatureType(r)
if(n){const t=n.domains&&n.domains[e]
if(t&&"inherited"!==t.type)return t}return this._getLayerDomain(e)}async queryAttachments(e,t){var r,n
await this.load(),e=N.a.from(e)
const i=this.capabilities
if(null==i||null==(r=i.data)||!r.supportsAttachment)throw new u.a("queryAttachments:not-supported","this layer doesn't support attachments")
const{attachmentTypes:s,objectIds:o,globalIds:a,num:l,size:c,start:p,where:d}=e
if((null==i||null==(n=i.operations)||!n.supportsQueryAttachments)&&((null==s?void 0:s.length)>0||(null==a?void 0:a.length)>0||(null==c?void 0:c.length)>0||l||p||d))throw new u.a("queryAttachments:option-not-supported","when 'capabilities.operations.supportsQueryAttachments' is false, only objectIds is supported",e)
if(!(null!=o&&o.length||null!=a&&a.length||d))throw new u.a("queryAttachments:invalid-query","'objectIds', 'globalIds', or 'where' are required to perform attachment query",e)
return this.queryTask.executeAttachmentQuery(e,t)}async queryFeatures(e=this.createQuery(),t){var r,n
if(await this.load(),!this.capabilities.operations.supportsQuery)throw new u.a("queryFeatures:not-supported","this layer doesn't support queries.")
if(!this.url)throw new u.a("queryFeatures:not-supported","this layer has no url.")
const i=await this.queryTask.execute(e,{...t,query:{...null==(r=this.layer)?void 0:r.customParameters,token:null==(n=this.layer)?void 0:n.apiKey}})
if(null!=i&&i.features)for(const e of i.features)e.sourceLayer=this
return i}toExportImageJSON(e){var t
const r={id:this.id,source:(null==(t=this.source)?void 0:t.toJSON())||{mapLayerId:this.id,type:"mapLayer"}},n=Object(O.b)(e,this.definitionExpression)
Object(m.l)(n)&&(r.definitionExpression=n)
const i=["renderer","labelingInfo","opacity","labelsVisible"].reduce((e,t)=>(e[t]=this.originIdOf(t),e),{})
if(Object.keys(i).some(e=>i[e]>T.a.SERVICE)){const e=r.drawingInfo={}
if(i.renderer>T.a.SERVICE&&(e.renderer=this.renderer?this.renderer.toJSON():null),i.labelsVisible>T.a.SERVICE&&(e.showLabels=this.labelsVisible),this.labelsVisible&&i.labelingInfo>T.a.SERVICE){!this.loaded&&this.labelingInfo.some(e=>!e.labelPlacement)&&y.a.getLogger(this.declaredClass).warnOnce(`A Sublayer (title: ${this.title}, id: ${this.id}) has an undefined 'labelPlacement' and so labels cannot be displayed. Either define a valid 'labelPlacement' or call Sublayer.load() to use a default value based on geometry type.`,{sublayer:this})
let t=this.labelingInfo
Object(m.l)(this.geometryType)&&(t=Object(A.b)(this.labelingInfo,G.a.toJSON(this.geometryType))),e.labelingInfo=t.filter(e=>e.labelPlacement).map(e=>e.toJSON({origin:"service",layer:this.layer})),e.showLabels=!0}i.opacity>T.a.SERVICE&&(e.transparency=100-100*this.opacity),this._assignDefaultSymbolColors(e.renderer)}return r}_assignDefaultSymbolColors(e){this._forEachSimpleMarkerSymbols(e,e=>{e.color||"esriSMSX"!==e.style&&"esriSMSCross"!==e.style||(e.outline&&e.outline.color?e.color=e.outline.color:e.color=[0,0,0,0])})}_forEachSimpleMarkerSymbols(e,t){if(e){var r
const n=null!=(r="uniqueValueInfos"in e?e.uniqueValueInfos:"classBreakInfos"in e?e.classBreakInfos:null)?r:[]
for(const e of n)B(e.symbol)&&t(e.symbol)
"symbol"in e&&B(e.symbol)&&t(e.symbol),"defaultSymbol"in e&&B(e.defaultSymbol)&&t(e.defaultSymbol)}}_setAndNotifyLayer(e,t){const r=this.layer,n=this._get(e)
let i,s
switch(e){case"definitionExpression":case"floorInfo":i="supportsSublayerDefinitionExpression"
break
case"minScale":case"maxScale":case"visible":i="supportsSublayerVisibility"
break
case"labelingInfo":case"labelsVisible":case"opacity":case"renderer":case"source":i="supportsDynamicLayers",s="supportsModification"}const o=Object(M.a)(this).getDefaultOrigin()
if("service"!==o){var a,l,c,u
if(i&&!1===(null==(a=this.layer)||null==(l=a.capabilities)||null==(c=l.exportMap)?void 0:c[i]))return void this._logLockedError(e,`capability not available 'layer.capabilities.exportMap.${i}'`)
if(s&&!1===(null==(u=this.capabilities)?void 0:u.exportMap[s]))return void this._logLockedError(e,`capability not available 'capabilities.exportMap.${s}'`)}"source"!==e||"not-loaded"===this.loadStatus?(this._set(e,t),"service"!==o&&n!==t&&r&&r.emit&&r.emit("sublayer-update",{propertyName:e,target:this})):this._logLockedError(e,"'source' can't be changed after calling sublayer.load()")}_handleSublayersChange(e,t){t&&(t.forEach(e=>{e.parent=null,e.layer=null}),this.handles.removeAll()),e&&(e.forEach(e=>{e.parent=this,e.layer=this.layer}),this.handles.add([e.on("after-add",({item:e})=>{e.parent=this,e.layer=this.layer}),e.on("after-remove",({item:e})=>{e.parent=null,e.layer=null}),e.on("before-changes",e=>{var t,r,n
const i=null==(t=this.layer)||null==(r=t.capabilities)||null==(n=r.exportMap)?void 0:n.supportsSublayersChanges
null==i||i||(y.a.getLogger(this.declaredClass).error(new u.a("sublayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:this,layer:this.layer})),e.preventDefault())})]))}_logLockedError(e,t){const{layer:r,declaredClass:n}=this
y.a.getLogger(n).error(new u.a("sublayer:locked",`Property '${String(e)}' can't be changed on Sublayer from the layer '${null==r?void 0:r.id}'`,{reason:t,sublayer:this,layer:r}))}_getLayerDomain(e){const t=this.fieldsIndex.get(e)
return t?t.domain:null}}
Z.test={isMapImageLayerOverridePolicy:e=>e===H||e===$,isTileImageLayerOverridePolicy:e=>e===J},Object(i.a)([Object(v.b)({readOnly:!0})],Z.prototype,"capabilities",void 0),Object(i.a)([Object(S.a)("service","capabilities",["layerDefinition.canModifyLayer","layerDefinition.capabilities"])],Z.prototype,"readCapabilities",null),Object(i.a)([Object(v.b)()],Z.prototype,"defaultPopupTemplate",null),Object(i.a)([Object(v.b)({type:String,value:null,json:{name:"layerDefinition.definitionExpression",write:{allowNull:!0,overridePolicy:$}}})],Z.prototype,"definitionExpression",null),Object(i.a)([Object(v.b)({type:[V.a],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],Z.prototype,"fields",void 0),Object(i.a)([Object(v.b)({readOnly:!0})],Z.prototype,"fieldsIndex",null),Object(i.a)([Object(v.b)({type:D.a,value:null,json:{name:"layerDefinition.floorInfo",read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo",overridePolicy:$},origins:{"web-scene":{read:!1,write:!1}}}})],Z.prototype,"floorInfo",null),Object(i.a)([Object(v.b)({type:U.default,json:{read:{source:"layerDefinition.extent"}}})],Z.prototype,"fullExtent",void 0),Object(i.a)([Object(v.b)({type:G.a.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:G.a.read}}}}})],Z.prototype,"geometryType",void 0),Object(i.a)([Object(v.b)({type:String})],Z.prototype,"globalIdField",void 0),Object(i.a)([Object(S.a)("service","globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],Z.prototype,"readGlobalIdFieldFromService",null),Object(i.a)([Object(v.b)({type:I.a,json:{write:{ignoreOrigin:!0}}})],Z.prototype,"id",null),Object(i.a)([Object(v.b)({value:null,type:[k.default],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:H}}})],Z.prototype,"labelingInfo",null),Object(i.a)([Object(_.a)("labelingInfo")],Z.prototype,"writeLabelingInfo",null),Object(i.a)([Object(v.b)({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:H}}})],Z.prototype,"labelsVisible",null),Object(i.a)([Object(v.b)({value:null})],Z.prototype,"layer",null),Object(i.a)([Object(v.b)({type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:W}}})],Z.prototype,"legendEnabled",void 0),Object(i.a)([Object(v.b)({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],Z.prototype,"listMode",null),Object(i.a)([Object(v.b)({type:Number,value:0,json:{write:{overridePolicy:H}}})],Z.prototype,"minScale",null),Object(i.a)([Object(S.a)("minScale",["minScale","layerDefinition.minScale"])],Z.prototype,"readMinScale",null),Object(i.a)([Object(v.b)({type:Number,value:0,json:{write:{overridePolicy:H}}})],Z.prototype,"maxScale",null),Object(i.a)([Object(S.a)("maxScale",["maxScale","layerDefinition.maxScale"])],Z.prototype,"readMaxScale",null),Object(i.a)([Object(v.b)({readOnly:!0})],Z.prototype,"effectiveScaleRange",null),Object(i.a)([Object(v.b)({type:String})],Z.prototype,"objectIdField",void 0),Object(i.a)([Object(S.a)("service","objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],Z.prototype,"readObjectIdFieldFromService",null),Object(i.a)([Object(v.b)({type:Number,value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:H}}})],Z.prototype,"opacity",null),Object(i.a)([Object(S.a)("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],Z.prototype,"readOpacity",null),Object(i.a)([Object(_.a)("opacity")],Z.prototype,"writeOpacity",null),Object(i.a)([Object(v.b)({json:{type:I.a,write:{target:"parentLayerId",writerEnsuresNonNull:!0,overridePolicy:H}}})],Z.prototype,"parent",void 0),Object(i.a)([Object(_.a)("parent")],Z.prototype,"writeParent",null),Object(i.a)([Object(v.b)({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:(e,t)=>!t.disablePopup},write:{target:"disablePopup",overridePolicy:W,writer(e,t,r){t[r]=!e}}}})],Z.prototype,"popupEnabled",void 0),Object(i.a)([Object(v.b)({type:s.default,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:W}}})],Z.prototype,"popupTemplate",void 0),Object(i.a)([Object(v.b)({readOnly:!0})],Z.prototype,"queryTask",null),Object(i.a)([Object(v.b)({types:o.a,value:null,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:H},origins:{"web-scene":{types:o.b,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:H}}}}})],Z.prototype,"renderer",null),Object(i.a)([Object(v.b)({types:{key:"type",base:null,typeMap:{"data-layer":C.a,"map-layer":P.a}},cast(e){if(e){if("mapLayerId"in e)return Object(I.d)(P.a,e)
if("dataSource"in e)return Object(I.d)(C.a,e)}return e},json:{name:"layerDefinition.source",write:{overridePolicy:H}}})],Z.prototype,"source",null),Object(i.a)([Object(v.b)()],Z.prototype,"sourceJSON",void 0),Object(i.a)([Object(v.b)({value:null,json:{type:[I.a],write:{target:"subLayerIds",allowNull:!0,overridePolicy:H}}})],Z.prototype,"sublayers",null),Object(i.a)([Object(w.a)("sublayers")],Z.prototype,"castSublayers",null),Object(i.a)([Object(_.a)("sublayers")],Z.prototype,"writeSublayers",null),Object(i.a)([Object(v.b)({type:String,json:{name:"name",write:{overridePolicy:W}}})],Z.prototype,"title",void 0),Object(i.a)([Object(v.b)({type:String})],Z.prototype,"typeIdField",void 0),Object(i.a)([Object(S.a)("typeIdField",["layerDefinition.typeIdField"])],Z.prototype,"readTypeIdField",null),Object(i.a)([Object(v.b)({type:[E.a],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],Z.prototype,"types",void 0),Object(i.a)([Object(v.b)({type:String,json:{read:{source:"layerUrl"},write:{target:"layerUrl",overridePolicy:J}}})],Z.prototype,"url",null),Object(i.a)([Object(v.b)({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:H}}})],Z.prototype,"visible",null),Object(i.a)([Object(_.a)("visible")],Z.prototype,"writeVisible",null),Z=n=Object(i.a)([Object(x.a)("esri.layers.support.Sublayer")],Z)
const K=Z},2030:function(e,t,r){"use strict"
r.d(t,"a",(function(){return u}))
var n=r(968),i=(r(982),r(970)),s=(r(971),r(445),r(977)),o=r(969),a=r(1895),l=r(1920),c=r(769)
const u=e=>{let t=class extends e{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}readMinScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}readMaxScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(e,t){return t.capabilities&&t.capabilities.includes("Tilemap")?new l.a({layer:this}):null}}
return Object(n.a)([Object(i.b)({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),Object(n.a)([Object(i.b)()],t.prototype,"minScale",void 0),Object(n.a)([Object(s.a)("service","minScale")],t.prototype,"readMinScale",null),Object(n.a)([Object(i.b)()],t.prototype,"maxScale",void 0),Object(n.a)([Object(s.a)("service","maxScale")],t.prototype,"readMaxScale",null),Object(n.a)([Object(i.b)({type:c.default})],t.prototype,"spatialReference",void 0),Object(n.a)([Object(i.b)({readOnly:!0})],t.prototype,"supportsBlankTile",null),Object(n.a)([Object(i.b)(a.b)],t.prototype,"tileInfo",void 0),Object(n.a)([Object(i.b)()],t.prototype,"tilemapCache",void 0),Object(n.a)([Object(s.a)("service","tilemapCache",["capabilities"])],t.prototype,"readTilemapCache",null),Object(n.a)([Object(i.b)()],t.prototype,"version",void 0),t=Object(n.a)([Object(o.a)("esri.layers.mixins.ArcGISCachedService")],t),t}},2147:function(e,t,r){"use strict"
r.d(t,"a",(function(){return S}))
var n=r(968),i=r(975),s=r(446),o=r(235),a=r(23),l=r(973),c=r(374),u=r(970),p=(r(971),r(445),r(969)),d=r(1106),h=r(1074),b=r(1855),f=(r(982),r(1220)),y=r(1014),m=r(770),g=r(1856),O=r(1430),j=r(1665),v=r(1047)
let w=class extends i.a{constructor(e){super(e),this.dynamicDataSource=null,this.fieldsIndex=null,this.gdbVersion=null,this.infoFor3D=null,this.pbfSupported=!1,this.queryAttachmentsSupported=!1,this.sourceSpatialReference=null,this.url=null}get parsedUrl(){return Object(c.Q)(this.url)}async execute(e,t){const r=await this.executeJSON(e,t)
return this.featureSetFromJSON(e,r,t)}async executeJSON(e,t){var r
const n=this._normalizeQuery(e),i=null!=(null==(r=e.outStatistics)?void 0:r[0]),s=Object(o.a)("featurelayer-pbf-statistics"),a=!i||s
let l
if(this.pbfSupported&&a)try{l=await Object(j.a)(this.url,n,t)}catch(e){if("query:parsing-pbf"!==e.name)throw e
this.pbfSupported=!1}return this.pbfSupported&&a||(l=await Object(O.b)(this.url,n,t)),this._normalizeFields(l.fields),l}async featureSetFromJSON(e,t,n){if(!this._queryIs3DObjectFormat(e)||Object(a.k)(this.infoFor3D)||!t.assetMaps||!t.features||!t.features.length)return v.a.fromJSON(t)
const{meshFeatureSetFromJSON:i}=await Object(l.v)(Promise.all([r.e(31),r.e(58)]).then(r.bind(null,3086)),n)
return i(e,this.infoFor3D,t)}executeForCount(e,t){return Object(b.a)(this.url,this._normalizeQuery(e),t)}executeForExtent(e,t){return async function(e,t,r){const n=Object(h.c)(e)
return Object(f.c)(n,y.a.from(t),{...r}).then(e=>({count:e.data.count,extent:m.default.fromJSON(e.data.extent)}))}(this.url,this._normalizeQuery(e),t)}executeForIds(e,t){return Object(g.a)(this.url,this._normalizeQuery(e),t)}async executeRelationshipQuery(e,t){const[{default:n},{executeRelationshipQuery:i}]=await Object(l.v)(Promise.all([r.e(116).then(r.bind(null,1242)),r.e(91).then(r.bind(null,3103))]),t)
return e=n.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),i(this.url,e,t)}async executeRelationshipQueryForCount(e,t){const[{default:n},{executeRelationshipQueryForCount:i}]=await Object(l.v)(Promise.all([r.e(116).then(r.bind(null,1242)),r.e(91).then(r.bind(null,3103))]),t)
return e=n.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),i(this.url,e,t)}async executeAttachmentQuery(e,t){const{executeAttachmentQuery:n,fetchAttachments:i,processAttachmentQueryResult:s}=await Object(l.v)(r.e(465).then(r.bind(null,2927)),t),o=Object(h.c)(this.url)
return s(o,await(this.queryAttachmentsSupported?n(o,e,t):i(o,e,t)))}async executeTopFeaturesQuery(e,t){const{executeTopFeaturesQuery:n}=await Object(l.v)(r.e(385).then(r.bind(null,2928)),t)
return n(this.parsedUrl,e,this.sourceSpatialReference,t)}async executeForTopIds(e,t){const{executeForTopIds:n}=await Object(l.v)(r.e(384).then(r.bind(null,2929)),t)
return n(this.parsedUrl,e,t)}async executeForTopExtents(e,t){const{executeForTopExtents:n}=await Object(l.v)(r.e(383).then(r.bind(null,2930)),t)
return n(this.parsedUrl,e,t)}async executeForTopCount(e,t){const{executeForTopCount:n}=await Object(l.v)(r.e(382).then(r.bind(null,2931)),t)
return n(this.parsedUrl,e,t)}_normalizeQuery(e){let t=y.a.from(e)
if(t.sourceSpatialReference=t.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(t=t===e?t.clone():t,t.gdbVersion=e.gdbVersion||this.gdbVersion,t.dynamicDataSource=e.dynamicDataSource?d.a.from(e.dynamicDataSource):this.dynamicDataSource),Object(a.l)(this.infoFor3D)&&this._queryIs3DObjectFormat(e)){t=t===e?t.clone():t,t.formatOf3DObjects=null
for(const e of this.infoFor3D.queryFormats){if("3D_glb"===e){t.formatOf3DObjects=e
break}"3D_gltf"!==e||t.formatOf3DObjects||(t.formatOf3DObjects=e)}if(!t.formatOf3DObjects)throw new s.a("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf")
if(Object(a.k)(t.outFields)||!t.outFields.includes("*")){t=t===e?t.clone():t,Object(a.k)(t.outFields)&&(t.outFields=[])
const{originX:r,originY:n,originZ:i,translationX:s,translationY:o,translationZ:l,scaleX:c,scaleY:u,scaleZ:p,rotationX:d,rotationY:h,rotationZ:b,rotationDeg:f}=this.infoFor3D.transformFieldRoles
t.outFields.push(r,n,i,s,o,l,c,u,p,d,h,b,f)}}return t}_normalizeFields(e){if(Object(a.l)(this.fieldsIndex)&&Object(a.l)(e))for(const t of e){const e=this.fieldsIndex.get(t.name)
e&&Object.assign(t,e.toJSON())}}_queryIs3DObjectFormat(e){return Object(a.l)(this.infoFor3D)&&!0===e.returnGeometry&&"xyFootprint"!==e.multipatchOption&&!e.outStatistics}}
Object(n.a)([Object(u.b)({type:d.a})],w.prototype,"dynamicDataSource",void 0),Object(n.a)([Object(u.b)()],w.prototype,"fieldsIndex",void 0),Object(n.a)([Object(u.b)()],w.prototype,"gdbVersion",void 0),Object(n.a)([Object(u.b)()],w.prototype,"infoFor3D",void 0),Object(n.a)([Object(u.b)({readOnly:!0})],w.prototype,"parsedUrl",null),Object(n.a)([Object(u.b)()],w.prototype,"pbfSupported",void 0),Object(n.a)([Object(u.b)()],w.prototype,"queryAttachmentsSupported",void 0),Object(n.a)([Object(u.b)()],w.prototype,"sourceSpatialReference",void 0),Object(n.a)([Object(u.b)({type:String})],w.prototype,"url",void 0),w=Object(n.a)([Object(p.a)("esri.tasks.QueryTask")],w)
const S=w},2253:function(e,t,r){"use strict"
r.d(t,"a",(function(){return b}))
var n=r(968),i=r(771),s=r(973),o=r(374),a=r(1717),l=r(970),c=(r(971),r(445),r(977)),u=r(969),p=r(770),d=r(769),h=r(1035)
const b=e=>{let t=class extends e{constructor(){super(...arguments),this.capabilities=void 0,this.copyright=null,this.fullExtent=null,this.legendEnabled=!0,this.spatialReference=null,this.version=void 0,this._allLayersAndTablesPromise=null,this._allLayersAndTablesMap=null}readCapabilities(e,t){var r,n
const i=t.capabilities&&t.capabilities.split(",").map(e=>e.toLowerCase().trim())
if(!i)return{operations:{supportsExportMap:!1,supportsExportTiles:!1,supportsIdentify:!1,supportsQuery:!1,supportsTileMap:!1},exportMap:null,exportTiles:null}
const s=this.type,o="tile"!==s&&!!t.supportsDynamicLayers,l=i.includes("query"),c=i.includes("map"),u=!!t.exportTilesAllowed,p=i.includes("tilemap"),d=i.includes("data"),h="tile"!==s&&(!t.tileInfo||o),b="tile"!==s&&(!t.tileInfo||o),f="tile"!==s,y=t.cimVersion&&a.a.parse(t.cimVersion),m=null!=(r=null==y?void 0:y.since(1,4))&&r,g=null!=(n=null==y?void 0:y.since(2,0))&&n
return{operations:{supportsExportMap:c,supportsExportTiles:u,supportsIdentify:l,supportsQuery:d,supportsTileMap:p},exportMap:c?{supportsArcadeExpressionForLabeling:m,supportsSublayersChanges:f,supportsDynamicLayers:o,supportsSublayerVisibility:h,supportsSublayerDefinitionExpression:b,supportsCIMSymbols:g}:null,exportTiles:u?{maxExportTilesCount:+t.maxExportTilesCount}:null}}readVersion(e,t){let r=t.currentVersion
return r||(r=t.hasOwnProperty("capabilities")||t.hasOwnProperty("tables")?10:t.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),r}async fetchSublayerInfo(e,t){try{var r
return await this.fetchAllLayersAndTables(t),null==(r=this._allLayersAndTablesMap)?void 0:r.get(e)}catch{return}}async fetchAllLayersAndTables(e){await this.load(e),this._allLayersAndTablesPromise||(this._allLayersAndTablesPromise=Object(i.default)(Object(o.Q)(this.url).path+"/layers",{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey}}).then(e=>{this._allLayersAndTablesMap=new Map
for(const t of e.data.layers)this._allLayersAndTablesMap.set(t.id,t)
return{result:e.data}},e=>({error:e})))
const t=await this._allLayersAndTablesPromise
if(Object(s.q)(e),"result"in t)return t.result
throw t.error}}
return Object(n.a)([Object(l.b)({readOnly:!0})],t.prototype,"capabilities",void 0),Object(n.a)([Object(c.a)("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],t.prototype,"readCapabilities",null),Object(n.a)([Object(l.b)({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),Object(n.a)([Object(l.b)({type:p.default})],t.prototype,"fullExtent",void 0),Object(n.a)([Object(l.b)(h.c)],t.prototype,"id",void 0),Object(n.a)([Object(l.b)({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],t.prototype,"legendEnabled",void 0),Object(n.a)([Object(l.b)(h.k)],t.prototype,"popupEnabled",void 0),Object(n.a)([Object(l.b)({type:d.default})],t.prototype,"spatialReference",void 0),Object(n.a)([Object(l.b)({readOnly:!0})],t.prototype,"version",void 0),Object(n.a)([Object(c.a)("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],t.prototype,"readVersion",null),t=Object(n.a)([Object(u.a)("esri.layers.mixins.ArcGISMapService")],t),t}},2254:function(e,t,r){"use strict"
r.d(t,"a",(function(){return m}))
var n=r(968),i=r(993),s=r(1279),o=r(446),a=r(233),l=r(978),c=r(970),u=(r(971),r(445),r(999)),p=r(969),d=r(1006),h=r(2028),b=r(1700)
const f=a.a.getLogger("esri.layers.TileLayer"),y=i.a.ofType(h.a),m=e=>{let t=class extends e{constructor(...e){super(...e),this.allSublayers=new s.a({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.sublayersSourceJSON={[d.a.SERVICE]:{},[d.a.PORTAL_ITEM]:{},[d.a.WEB_SCENE]:{},[d.a.WEB_MAP]:{}},this.addHandles(Object(l.f)(()=>this.sublayers,(e,t)=>this._handleSublayersChange(e,t),l.d))}readSublayers(e,t){if(!t||!e)return
const{sublayersSourceJSON:r}=this,n=Object(d.e)(t.origin)
if(n<d.a.SERVICE)return
if(r[n]={context:t,visibleLayers:e.visibleLayers||r[n].visibleLayers,layers:e.layers||r[n].layers},n>d.a.SERVICE)return
this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers)
const{sublayers:i,origin:s}=this.createSublayersForOrigin("web-document"),o=Object(u.a)(this)
o.setDefaultOrigin(s),this._set("sublayers",new y(i)),o.setDefaultOrigin("user")}findSublayerById(e){return this.allSublayers.find(t=>t.id===e)}createServiceSublayers(){return this.createSublayersForOrigin("service").sublayers}createSublayersForOrigin(e){var t
const r=Object(d.e)("web-document"===e?"web-map":e)
let n=d.a.SERVICE,i=this.sublayersSourceJSON[d.a.SERVICE].layers,s=this.sublayersSourceJSON[d.a.SERVICE].context,o=null
const a=[d.a.PORTAL_ITEM,d.a.WEB_SCENE,d.a.WEB_MAP].filter(e=>e<=r)
for(const e of a){const t=this.sublayersSourceJSON[e]
Object(b.b)(t.layers)&&(n=e,i=t.layers,s=t.context,t.visibleLayers&&(o={visibleLayers:t.visibleLayers,context:t.context}))}const l=[d.a.PORTAL_ITEM,d.a.WEB_SCENE,d.a.WEB_MAP].filter(e=>e>n&&e<=r)
let c=null
for(const e of l){const{layers:t,visibleLayers:r,context:n}=this.sublayersSourceJSON[e]
t&&(c={layers:t,context:n}),r&&(o={visibleLayers:r,context:n})}const u=function(e,t){const r=[],n={}
return e?(e.forEach(e=>{const i=new h.a
if(i.read(e,t),n[i.id]=i,null!=e.parentLayerId&&-1!==e.parentLayerId){const t=n[e.parentLayerId]
t.sublayers||(t.sublayers=[]),t.sublayers.unshift(i)}else r.unshift(i)}),r):r}(i,s),p=new Map,f=new Set
if(c)for(const e of c.layers)p.set(e.id,e)
if(null!=(t=o)&&t.visibleLayers)for(const e of o.visibleLayers)f.add(e)
return function e(t,r){t&&t.forEach(t=>{r(t),t.sublayers&&t.sublayers.length&&e(t.sublayers,r)})}(u,e=>{c&&e.read(p.get(e.id),c.context),o&&e.read({defaultVisibility:f.has(e.id)},o.context)}),{origin:Object(d.c)(n),sublayers:new y({items:u})}}read(e,t){super.read(e,t),this.readSublayers(e,t)}_handleSublayersChange(e,t){t&&(t.forEach(e=>{e.parent=null,e.layer=null}),this.handles.remove("sublayers-owner")),e&&(e.forEach(e=>{e.parent=this,e.layer=this}),this.handles.add([e.on("after-add",({item:e})=>{e.parent=this,e.layer=this}),e.on("after-remove",({item:e})=>{e.parent=null,e.layer=null})],"sublayers-owner"),"tile"===this.type&&this.handles.add(e.on("before-changes",e=>{f.error(new o.a("tilelayer:sublayers-non-modifiable","ISublayer can't be added, moved, or removed from the layer's sublayers",{layer:this})),e.preventDefault()}),"sublayers-owner"))}}
return Object(n.a)([Object(c.b)({readOnly:!0})],t.prototype,"allSublayers",void 0),Object(n.a)([Object(c.b)({readOnly:!0,type:i.a.ofType(h.a)})],t.prototype,"serviceSublayers",void 0),Object(n.a)([Object(c.b)({value:null,type:y,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],t.prototype,"sublayers",void 0),Object(n.a)([Object(c.b)({readOnly:!0})],t.prototype,"sublayersSourceJSON",void 0),t=Object(n.a)([Object(p.a)("esri.layers.mixins.SublayersOwner")],t),t}},772:function(e,t,r){"use strict"
r.r(t),r.d(t,"default",(function(){return y}))
var n=r(968),i=r(982),s=r(775),o=r(995),a=r(986),l=r(972),c=r(23),u=r(1156),p=r(970),d=(r(971),r(445),r(969)),h=r(983)
function b(e){if(!Object(c.l)(e))return null
const t={}
for(const r in e){const n=e[r]
n&&(t[r]=n.toJSON())}return 0!==Object.keys(t).length?t:null}let f=class extends(Object(a.b)(l.a)){constructor(...e){super(...e),this.isAggregate=!1,this.layer=null,this.popupTemplate=null,this.sourceLayer=null,Object.defineProperty(this,"uid",{value:Object(u.b)(),configurable:!0})}normalizeCtorArgs(e,t,r,n){return e&&!e.declaredClass?e:{geometry:e,symbol:t,attributes:r,popupTemplate:n}}set aggregateGeometries(e){const t=this._get("aggregateGeometries")
JSON.stringify(t)!==JSON.stringify(e)&&this._set("aggregateGeometries",e)}set attributes(e){const t=this._get("attributes")
t!==e&&(this._set("attributes",e),this._notifyLayer("attributes",t,e))}set geometry(e){const t=this._get("geometry")
t!==e&&(this._set("geometry",e),this._notifyLayer("geometry",t,e))}set symbol(e){const t=this._get("symbol")
t!==e&&(this._set("symbol",e),this._notifyLayer("symbol",t,e))}set visible(e){const t=this._get("visible")
t!==e&&(this._set("visible",e),this._notifyLayer("visible",t,e))}getEffectivePopupTemplate(e=!1){if(this.popupTemplate)return this.popupTemplate
for(const t of[this.sourceLayer,this.layer])if(t){if("popupTemplate"in t&&t.popupTemplate)return t.popupTemplate
if(e&&"defaultPopupTemplate"in t&&Object(c.l)(t.defaultPopupTemplate))return t.defaultPopupTemplate}return null}getAttribute(e){var t
return null==(t=this.attributes)?void 0:t[e]}setAttribute(e,t){if(this.attributes){const r=this.getAttribute(e)
this.attributes[e]=t,this._notifyLayer("attributes",r,t,e)}else this.attributes={[e]:t},this._notifyLayer("attributes",void 0,t,e)}getObjectId(){return this.sourceLayer&&"objectIdField"in this.sourceLayer&&this.sourceLayer.objectIdField?this.getAttribute(this.sourceLayer.objectIdField):null}toJSON(){return{aggregateGeometries:b(this.aggregateGeometries),geometry:Object(c.l)(this.geometry)?this.geometry.toJSON():null,symbol:Object(c.l)(this.symbol)?this.symbol.toJSON():null,attributes:{...this.attributes},popupTemplate:this.popupTemplate&&this.popupTemplate.toJSON()}}notifyGeometryChanged(){this._notifyLayer("geometry",this.geometry,this.geometry)}notifyMeshTransformChanged(){Object(c.l)(this.geometry)&&"mesh"===this.geometry.type&&this._notifyLayer("transform",this.geometry.transform,this.geometry.transform)}_notifyLayer(e,t,r,n){if(!this.layer||!("graphicChanged"in this.layer))return
const i={graphic:this,property:e,oldValue:t,newValue:r}
"attributes"===e&&(i.attributeName=n),this.layer.graphicChanged(i)}}
Object(n.a)([Object(p.b)({value:null,json:{read:function(e){if(!e)return null
const t={}
for(const r in e){const n=Object(h.a)(e[r])
n&&(t[r]=n)}return 0!==Object.keys(t).length?t:null}}})],f.prototype,"aggregateGeometries",null),Object(n.a)([Object(p.b)({value:null})],f.prototype,"attributes",null),Object(n.a)([Object(p.b)({value:null,types:i.c,json:{read:h.a}})],f.prototype,"geometry",null),Object(n.a)([Object(p.b)({type:Boolean})],f.prototype,"isAggregate",void 0),Object(n.a)([Object(p.b)({clonable:"reference"})],f.prototype,"layer",void 0),Object(n.a)([Object(p.b)({type:s.default})],f.prototype,"popupTemplate",void 0),Object(n.a)([Object(p.b)({clonable:"reference"})],f.prototype,"sourceLayer",void 0),Object(n.a)([Object(p.b)({value:null,types:o.e})],f.prototype,"symbol",null),Object(n.a)([Object(p.b)({type:Boolean,value:!0})],f.prototype,"visible",null),f=Object(n.a)([Object(d.a)("esri.Graphic")],f),(f||(f={})).generateUID=u.b
const y=f},776:function(e,t,r){"use strict"
r.r(t),r.d(t,"default",(function(){return I}))
var n,i=r(968),s=r(995),o=r(976),a=r(972),l=r(234),c=r(980),u=r(970),p=(r(971),r(977)),d=r(969),h=r(974),b=(r(445),r(1209))
let f=n=class extends a.a{constructor(){super(...arguments),this.expression=null,this.title=null,this.value=null}readExpression(e,t){return t.value?Object(b.a)(t.value):e}writeExpression(e,t,r){null!=this.value&&(e=Object(b.a)(this.value)),null!=e&&(t[r]=e)}clone(){return new n({expression:this.expression,title:this.title,value:this.value})}}
Object(i.a)([Object(u.b)({type:String,json:{write:{writerEnsuresNonNull:!0}}})],f.prototype,"expression",void 0),Object(i.a)([Object(p.a)("expression",["expression","value"])],f.prototype,"readExpression",null),Object(i.a)([Object(h.a)("expression")],f.prototype,"writeExpression",null),Object(i.a)([Object(u.b)({type:String,json:{write:!0,origins:{"web-scene":{write:!1}}}})],f.prototype,"title",void 0),Object(i.a)([Object(u.b)({json:{read:!1,write:!1}})],f.prototype,"value",void 0),f=n=Object(i.a)([Object(d.a)("esri.layers.support.LabelExpressionInfo")],f)
const y=f
var m,g=r(1037),O=r(1268),j=r(1147)
const v=new o.a({esriServerPointLabelPlacementAboveCenter:"above-center",esriServerPointLabelPlacementAboveLeft:"above-left",esriServerPointLabelPlacementAboveRight:"above-right",esriServerPointLabelPlacementBelowCenter:"below-center",esriServerPointLabelPlacementBelowLeft:"below-left",esriServerPointLabelPlacementBelowRight:"below-right",esriServerPointLabelPlacementCenterCenter:"center-center",esriServerPointLabelPlacementCenterLeft:"center-left",esriServerPointLabelPlacementCenterRight:"center-right",esriServerLinePlacementAboveAfter:"above-after",esriServerLinePlacementAboveAlong:"above-along",esriServerLinePlacementAboveBefore:"above-before",esriServerLinePlacementAboveStart:"above-start",esriServerLinePlacementAboveEnd:"above-end",esriServerLinePlacementBelowAfter:"below-after",esriServerLinePlacementBelowAlong:"below-along",esriServerLinePlacementBelowBefore:"below-before",esriServerLinePlacementBelowStart:"below-start",esriServerLinePlacementBelowEnd:"below-end",esriServerLinePlacementCenterAfter:"center-after",esriServerLinePlacementCenterAlong:"center-along",esriServerLinePlacementCenterBefore:"center-before",esriServerLinePlacementCenterStart:"center-start",esriServerLinePlacementCenterEnd:"center-end",esriServerPolygonPlacementAlwaysHorizontal:"always-horizontal"},{ignoreUnknown:!0})
function w(e,t,r){return{enabled:!Object(g.j)(null==r?void 0:r.layer)}}function S(e){var t
return!e||"service"!==e.origin&&!("map-image"===(null==(t=e.layer)?void 0:t.type))}function x(e){var t,r
return!!function(e){return"map-image"===(null==e?void 0:e.type)}(e)&&!(null==(t=e.capabilities)||null==(r=t.exportMap)||!r.supportsArcadeExpressionForLabeling)}let _=m=class extends a.a{static evaluateWhere(e,t){const r=(e,t,r)=>{switch(t){case"=":return e==r
case"<>":return e!=r
case">":return e>r
case">=":return e>=r
case"<":return e<r
case"<=":return e<=r}return!1}
try{if(null==e)return!0
const n=e.split(" ")
if(3===n.length)return r(t[n[0]],n[1],n[2])
if(7===n.length){const e=r(t[n[0]],n[1],n[2]),i=n[3],s=r(t[n[4]],n[5],n[6])
switch(i){case"AND":return e&&s
case"OR":return e||s}}return!1}catch(t){console.log("Error.: can't parse = "+e)}}constructor(e){super(e),this.type="label",this.name=null,this.allowOverrun=!1,this.deconflictionStrategy="static",this.labelExpression=null,this.labelExpressionInfo=null,this.labelPlacement=null,this.labelPosition="curved",this.maxScale=0,this.minScale=0,this.repeatLabel=!0,this.repeatLabelDistance=null,this.symbol=O.d,this.useCodedValues=void 0,this.where=null}readLabelExpression(e,t){const r=t.labelExpressionInfo
if(!r||!r.value&&!r.expression)return e}writeLabelExpression(e,t,r){if(this.labelExpressionInfo)if(null!=this.labelExpressionInfo.value)e=Object(b.f)(this.labelExpressionInfo.value)
else if(null!=this.labelExpressionInfo.expression){const t=Object(b.e)(this.labelExpressionInfo.expression)
t&&(e="["+t+"]")}null!=e&&(t[r]=e)}writeLabelExpressionInfo(e,t,r,n){if(null==e&&null!=this.labelExpression&&S(n))e=new y({expression:this.getLabelExpressionArcade()})
else if(!e)return
const i=e.toJSON(n)
i.expression&&(t[r]=i)}writeMaxScale(e,t){(e||this.minScale)&&(t.maxScale=e)}writeMinScale(e,t){(e||this.maxScale)&&(t.minScale=e)}getLabelExpression(){return Object(b.b)(this)}getLabelExpressionArcade(){return Object(b.c)(this)}getLabelExpressionSingleField(){return Object(b.d)(this)}hash(){return JSON.stringify(this)}clone(){return new m({allowOverrun:this.allowOverrun,deconflictionStrategy:this.deconflictionStrategy,labelExpression:this.labelExpression,labelExpressionInfo:Object(l.a)(this.labelExpressionInfo),labelPosition:this.labelPosition,labelPlacement:this.labelPlacement,maxScale:this.maxScale,minScale:this.minScale,name:this.name,repeatLabel:this.repeatLabel,repeatLabelDistance:this.repeatLabelDistance,symbol:Object(l.a)(this.symbol),where:this.where,useCodedValues:this.useCodedValues})}}
Object(i.a)([Object(u.b)({type:String,json:{write:!0}})],_.prototype,"name",void 0),Object(i.a)([Object(u.b)({type:Boolean,json:{write:!0,default:!1,origins:{"web-scene":{write:!1},"portal-item":{default:!1,write:{overridePolicy:w}}}}})],_.prototype,"allowOverrun",void 0),Object(i.a)([Object(u.b)({type:String,json:{write:!0,default:"static",origins:{"web-scene":{write:!1},"portal-item":{default:"static",write:{overridePolicy:w}}}}})],_.prototype,"deconflictionStrategy",void 0),Object(i.a)([Object(u.b)({type:String,json:{write:{overridePolicy(e,t,r){return this.labelExpressionInfo&&"service"===(null==r?void 0:r.origin)&&x(r.layer)?{enabled:!1}:{allowNull:!0}}}}})],_.prototype,"labelExpression",void 0),Object(i.a)([Object(p.a)("labelExpression")],_.prototype,"readLabelExpression",null),Object(i.a)([Object(h.a)("labelExpression")],_.prototype,"writeLabelExpression",null),Object(i.a)([Object(u.b)({type:y,json:{write:{overridePolicy:(e,t,r)=>function(e){return S(e)||x(null==e?void 0:e.layer)}(r)?{allowNull:!0}:{enabled:!1}}}})],_.prototype,"labelExpressionInfo",void 0),Object(i.a)([Object(h.a)("labelExpressionInfo")],_.prototype,"writeLabelExpressionInfo",null),Object(i.a)([Object(u.b)({type:v.apiValues,json:{type:v.jsonValues,read:v.read,write:v.write}})],_.prototype,"labelPlacement",void 0),Object(i.a)([Object(u.b)({type:["curved","parallel"],json:{write:!0,origins:{"web-map":{write:!1},"web-scene":{write:!1},"portal-item":{write:!1}}}})],_.prototype,"labelPosition",void 0),Object(i.a)([Object(u.b)({type:Number})],_.prototype,"maxScale",void 0),Object(i.a)([Object(h.a)("maxScale")],_.prototype,"writeMaxScale",null),Object(i.a)([Object(u.b)({type:Number})],_.prototype,"minScale",void 0),Object(i.a)([Object(h.a)("minScale")],_.prototype,"writeMinScale",null),Object(i.a)([Object(u.b)({type:Boolean,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:{overridePolicy:w}}}}})],_.prototype,"repeatLabel",void 0),Object(i.a)([Object(u.b)({type:Number,cast:c.k,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:{overridePolicy:w}}}}})],_.prototype,"repeatLabelDistance",void 0),Object(i.a)([Object(u.b)({types:s.g,json:{origins:{"web-scene":{types:s.h,write:j.c,default:null}},write:j.c,default:null}})],_.prototype,"symbol",void 0),Object(i.a)([Object(u.b)({type:Boolean,json:{write:!0}})],_.prototype,"useCodedValues",void 0),Object(i.a)([Object(u.b)({type:String,json:{write:!0}})],_.prototype,"where",void 0),_=m=Object(i.a)([Object(d.a)("esri.layers.support.LabelClass")],_)
const I=_},778:function(e,t,r){"use strict"
r.r(t),r.d(t,"getTimeExtentFromLayers",(function(){return l})),r.d(t,"toLocalTimeExtent",(function(){return u})),r.d(t,"toUTCTimeExtent",(function(){return c}))
var n=r(1009),i=r(23),s=r(973),o=r(1059)
function a(e){return void 0!==e.timeInfo}async function l(e,t){if(0===e.length)return n.a.allTime
const r=e.filter(a)
await Promise.all(r.map(e=>e.load({signal:t})))
const o=[],l=[]
for(const e of r){var c
"feature"!==(null==e?void 0:e.type)&&"map-image"!==(null==e?void 0:e.type)||null==(c=e.timeInfo)||!c.hasLiveData?l.push(e):o.push(e)}const u=e=>Object(i.k)(e)||e.isAllTime,p=l.map(e=>{var t
return null==(t=e.timeInfo)?void 0:t.fullTimeExtent})
if(p.some(u))return n.a.allTime
const d=o.map(async e=>{var r
const{timeExtent:n}=await e.fetchRecomputedExtents({signal:t})
return n||Object(i.u)(null==(r=e.timeInfo)?void 0:r.fullTimeExtent)}),h=(await Object(s.g)(d)).map(e=>e.value)
return h.some(u)?n.a.allTime:[...h,...p].filter(i.l).reduce((e,t)=>e.union(t))}function c(e){if(!e)return e
const{start:t,end:r}=e
return new n.a({start:Object(i.l)(t)?Object(o.b)(t,-t.getTimezoneOffset(),"minutes"):t,end:Object(i.l)(r)?Object(o.b)(r,-r.getTimezoneOffset(),"minutes"):r})}function u(e){if(!e)return e
const{start:t,end:r}=e
return new n.a({start:Object(i.l)(t)?Object(o.b)(t,t.getTimezoneOffset(),"minutes"):t,end:Object(i.l)(r)?Object(o.b)(r,r.getTimezoneOffset(),"minutes"):r})}},791:function(e,t,r){"use strict"
r.r(t),r.d(t,"default",(function(){return R}))
var n=r(968),i=r(771),s=r(446),o=r(1025),a=r(1329),l=r(23),c=r(1186),u=r(973),p=r(374),d=r(970),h=r(987),b=(r(445),r(977)),f=r(969),y=r(974),m=r(769),g=r(777),O=r(1330),j=r(2030),v=r(2253),w=r(1290),S=r(1221),x=r(1313),_=r(1193),I=r(1247),T=r(1270),M=r(1201),F=r(2254),E=r(1051),V=r(1035),L=r(1759),k=r(2028)
const A=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"]
let D=class extends(Object(S.a)(Object(F.a)(Object(M.a)(Object(_.a)(Object(I.a)(Object(j.a)(Object(v.a)(Object(w.a)(Object(c.a)(Object(o.b)(Object(T.a)(Object(O.a)(Object(x.a)(g.default)))))))))))))){constructor(...e){super(...e),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=Object(l.l)(e)?e.signal:null
return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(u.p).then(()=>this._fetchService(t))),Promise.resolve(this)}get attributionDataUrl(){var e
const t=null==(e=this.parsedUrl)?void 0:e.path.toLowerCase()
return t?this._getDefaultAttribution(this._getMapName(t)):null}readSpatialReference(e,t){return(e=e||t.tileInfo&&t.tileInfo.spatialReference)&&m.default.fromJSON(e)}writeSublayers(e,t,r,n){if(!this.loaded||!e)return
const i=e.slice().reverse().flatten(({sublayers:e})=>e&&e.toArray().reverse()).toArray(),s=[],o={writeSublayerStructure:!1,...n}
i.forEach(e=>{const t=e.write({},o)
s.push(t)}),s.some(e=>Object.keys(e).length>1)&&(t.layers=s)}get tileServers(){var e
return this._getDefaultTileServers(null==(e=this.parsedUrl)?void 0:e.path)}castTileServers(e){return Array.isArray(e)?e.map(e=>Object(p.Q)(e).path):null}fetchTile(e,t,r,n={}){const{signal:s}=n,o=this.getTileUrl(e,t,r),a={responseType:"image",signal:s,query:{...this.refreshParameters}}
return Object(i.default)(o,a).then(e=>e.data)}async fetchImageBitmapTile(e,t,r,n={}){const{signal:s}=n,o=this.getTileUrl(e,t,r),a={responseType:"blob",signal:s,query:{...this.refreshParameters}},{data:l}=await Object(i.default)(o,a)
return Object(L.a)(l,o)}getTileUrl(e,t,r){var n,i
const s=!this.tilemapCache&&this.supportsBlankTile,o=Object(p.J)({...null==(n=this.parsedUrl)?void 0:n.query,blankTile:!s&&null,...this.customParameters,token:this.apiKey}),a=this.tileServers
return`${a&&a.length?a[t%a.length]:null==(i=this.parsedUrl)?void 0:i.path}/tile/${e}/${t}/${r}${o?"?"+o:""}`}loadAll(){return Object(a.a)(this,e=>{e(this.allSublayers)})}_fetchService(e){return new Promise((t,r)=>{if(this.sourceJSON){if(null!=this.sourceJSON.bandCount&&null!=this.sourceJSON.pixelSizeX)throw new s.a("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service")
return void t({data:this.sourceJSON})}if(!this.parsedUrl)throw new s.a("tile-layer:undefined-url","layer's url is not defined")
const n=Object(E.f)(this.parsedUrl.path)
if(Object(l.l)(n)&&"ImageServer"===n.serverType)throw new s.a("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service")
Object(i.default)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(t,r)}).then(t=>{let r=this.url
if(t.ssl&&(r=this.url=r.replace(/^http:/i,"https:")),this.sourceJSON=t.data,this.read(t.data,{origin:"service",url:this.parsedUrl}),10.1===this.version&&!Object(E.c)(r))return this._fetchServerVersion(r,e).then(e=>{this.read({currentVersion:e})}).catch(()=>{})})}_fetchServerVersion(e,t){if(!Object(E.b)(e))return Promise.reject()
const r=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info"
return Object(i.default)(r,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:t}).then(e=>{if(e.data&&e.data.currentVersion)return e.data.currentVersion
throw new s.a("tile-layer:version-not-available")})}_getMapName(e){const t=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i)
return t?t[2]:void 0}_getDefaultAttribution(e){if(null==e)return null
let t
e=e.toLowerCase()
for(let r=0,n=A.length;r<n;r++)if(t=A[r],t.toLowerCase().includes(e))return Object(p.F)("//static.arcgis.com/attribution/"+t)
return null}_getDefaultTileServers(e){if(null==e)return[]
const t=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),r=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i)
return t||r?[e,e.replace(t?/server\.arcgisonline/i:/services\.arcgisonline/i,t?"services.arcgisonline":"server.arcgisonline")]:[]}get hasOverriddenFetchTile(){return!this.fetchTile.__isDefault__}}
Object(n.a)([Object(d.b)({readOnly:!0})],D.prototype,"attributionDataUrl",null),Object(n.a)([Object(d.b)({type:["show","hide","hide-children"]})],D.prototype,"listMode",void 0),Object(n.a)([Object(d.b)({json:{read:!0,write:!0}})],D.prototype,"blendMode",void 0),Object(n.a)([Object(d.b)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],D.prototype,"isReference",void 0),Object(n.a)([Object(d.b)({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],D.prototype,"operationalLayerType",void 0),Object(n.a)([Object(d.b)({type:Boolean})],D.prototype,"resampling",void 0),Object(n.a)([Object(d.b)()],D.prototype,"sourceJSON",void 0),Object(n.a)([Object(d.b)({type:m.default})],D.prototype,"spatialReference",void 0),Object(n.a)([Object(b.a)("spatialReference",["spatialReference","tileInfo"])],D.prototype,"readSpatialReference",null),Object(n.a)([Object(d.b)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],D.prototype,"path",void 0),Object(n.a)([Object(d.b)({readOnly:!0})],D.prototype,"sublayers",void 0),Object(n.a)([Object(y.a)("sublayers",{layers:{type:[k.a]}})],D.prototype,"writeSublayers",null),Object(n.a)([Object(d.b)({json:{read:!1,write:!1}})],D.prototype,"popupEnabled",void 0),Object(n.a)([Object(d.b)()],D.prototype,"tileServers",null),Object(n.a)([Object(h.a)("tileServers")],D.prototype,"castTileServers",null),Object(n.a)([Object(d.b)({readOnly:!0,json:{read:!1}})],D.prototype,"type",void 0),Object(n.a)([Object(d.b)(V.o)],D.prototype,"url",void 0),D=Object(n.a)([Object(f.a)("esri.layers.TileLayer")],D),D.prototype.fetchTile.__isDefault__=!0
const R=D},978:function(e,t,r){"use strict"
r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return p})),r.d(t,"c",(function(){return f})),r.d(t,"d",(function(){return y})),r.d(t,"e",(function(){return g})),r.d(t,"f",(function(){return l})),r.d(t,"g",(function(){return c})),r.d(t,"h",(function(){return d}))
var n=r(1043),i=r(1017),s=r(23),o=r(973),a=r(1076)
function l(e,t,r={}){return u(e,t,r,h)}function c(e,t,r={}){return u(e,t,r,b)}function u(e,t,r={},n){let i=null
const o=r.once?(e,r)=>{n(e)&&(Object(s.s)(i),t(e,r))}:(e,r)=>{n(e)&&t(e,r)}
if(i=Object(a.e)(e,o,r.sync,r.equals),r.initial){const t=e()
o(t,t)}return i}function p(e,t,r,o={}){let a=null,c=null,u=null
function p(){a&&c&&(c.remove(),null!=o.onListenerRemove&&o.onListenerRemove(a),a=null,c=null)}function d(e){o.once&&o.once&&Object(s.s)(u),r(e)}const h=l(e,(e,r)=>{p(),Object(n.b)(e)&&(a=e,c=Object(n.c)(e,t,d),null==o.onListenerAdd||o.onListenerAdd(e))},{sync:o.sync,initial:!0})
return u=Object(i.c)(()=>{h.remove(),p()}),u}function d(e,t){return function(e,t,r){if(Object(o.k)(r))return Promise.reject(Object(o.c)())
const n=e()
if(null!=t&&t(n))return Promise.resolve(n)
let a=null
function l(){a=Object(s.s)(a)}return new Promise((n,s)=>{a=Object(i.b)([Object(o.n)(r,()=>{l(),s(Object(o.c)())}),u(e,e=>{l(),n(e)},{sync:!1,once:!0},null!=t?t:h)])})}(e,b,t)}function h(e){return!0}function b(e){return!!e}function f(e,t,r={}){let n=!1
const i=l(e,(e,r)=>{n||t(e,r)},r)
return{remove(){i.remove()},pause(){n=!0},resume(){n=!1}}}r(1048)
const y={sync:!0},m={initial:!0},g={sync:!0,initial:!0}},979:function(e,t,r){"use strict"
r.d(t,"a",(function(){return s}))
var n=r(976),i=r(970)
function s(e,t={}){var r
const s=e instanceof n.a?e:new n.a(e,t),o={type:null==(r=null==t?void 0:t.ignoreUnknown)||r?s.apiValues:String,json:{type:s.jsonValues,read:!(null!=t&&t.readOnly)&&{reader:s.read},write:{writer:s.write}}}
return void 0!==(null==t?void 0:t.readOnly)&&(o.readOnly=!!t.readOnly),void 0!==(null==t?void 0:t.default)&&(o.json.default=t.default),void 0!==(null==t?void 0:t.name)&&(o.json.name=t.name),void 0!==(null==t?void 0:t.nonNullable)&&(o.nonNullable=t.nonNullable),Object(i.b)(o)}},980:function(e,t,r){"use strict"
r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return h})),r.d(t,"d",(function(){return c})),r.d(t,"e",(function(){return u})),r.d(t,"f",(function(){return a})),r.d(t,"g",(function(){return l})),r.d(t,"h",(function(){return i})),r.d(t,"i",(function(){return s})),r.d(t,"j",(function(){return b})),r.d(t,"k",(function(){return o}))
const n=/^-?(\d+(\.\d+)?)\s*((px)|(pt))?$/i
function i(e){return e?e/72*96:0}function s(e){return e?72*e/96:0}function o(e){if("string"==typeof e){const t=e.match(n)
if(t){const r=Number(t[1]),n=t[3]&&t[3].toLowerCase(),i="-"===e.charAt(0),o="px"===n?s(r):r
return i?-o:o}return console.warn("screenUtils.toPt: input not recognized!"),null}return e}function a(e=0,t=0){return{x:e,y:t}}function l(e=0,t=0){return[e,t]}function c(e=0,t=0){return[e,t]}function u(e=0,t=0,r=0){return[e,t,r]}function p(e){return e}function d(e){return e}function h(e){return e}function b(e,t){return t?(t[0]=e.x,t[1]=e.y,t.length>2&&(t[2]=0),t):[e.x,e.y]}},981:function(e,t,r){"use strict"
function n(){return[0,0,0]}function i(e){return[e[0],e[1],e[2]]}function s(e,t,r){return[e,t,r]}function o(e){const t=[0,0,0],r=Math.min(3,e.length)
for(let n=0;n<r;++n)t[n]=e[n]
return t}function a(e,t){return new Float64Array(e,t,3)}function l(){return s(1,1,1)}function c(){return s(1,0,0)}function u(){return s(0,1,0)}function p(){return s(0,0,1)}r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return y})),r.d(t,"c",(function(){return d})),r.d(t,"d",(function(){return i})),r.d(t,"e",(function(){return a})),r.d(t,"f",(function(){return n})),r.d(t,"g",(function(){return o})),r.d(t,"h",(function(){return s})),r.d(t,"i",(function(){return p}))
const d=[0,0,0],h=l(),b=c(),f=u(),y=p()
Object.freeze(Object.defineProperty({__proto__:null,ONES:h,UNIT_X:b,UNIT_Y:f,UNIT_Z:y,ZEROS:d,clone:i,create:n,createView:a,fromArray:o,fromValues:s,ones:l,unitX:c,unitY:u,unitZ:p,zeros:function(){return[0,0,0]}},Symbol.toStringTag,{value:"Module"}))},985:function(e,t,r){"use strict"
r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return p})),r.d(t,"d",(function(){return U})),r.d(t,"e",(function(){return q})),r.d(t,"f",(function(){return A})),r.d(t,"g",(function(){return G})),r.d(t,"h",(function(){return d})),r.d(t,"i",(function(){return F})),r.d(t,"j",(function(){return l})),r.d(t,"k",(function(){return c})),r.d(t,"l",(function(){return o})),r.d(t,"m",(function(){return O})),r.d(t,"n",(function(){return S})),r.d(t,"o",(function(){return x})),r.d(t,"p",(function(){return y})),r.d(t,"q",(function(){return _})),r.d(t,"r",(function(){return g})),r.d(t,"s",(function(){return N})),r.d(t,"t",(function(){return k})),r.d(t,"u",(function(){return s})),r.d(t,"v",(function(){return I})),r.d(t,"w",(function(){return w})),r.d(t,"x",(function(){return v})),r.d(t,"y",(function(){return j})),r.d(t,"z",(function(){return M})),r.d(t,"A",(function(){return D})),r.d(t,"B",(function(){return a})),r.d(t,"C",(function(){return T})),r.d(t,"D",(function(){return z})),r.d(t,"E",(function(){return E})),r.d(t,"F",(function(){return R})),r.d(t,"G",(function(){return h})),r.d(t,"H",(function(){return f})),r.d(t,"I",(function(){return m}))
var n=r(981),i=r(1016)
function s(e){const t=e[0],r=e[1],n=e[2]
return Math.sqrt(t*t+r*r+n*n)}function o(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function a(e,t,r,n){return e[0]=t,e[1]=r,e[2]=n,e}function l(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e}function c(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e}function u(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e}function p(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e}function d(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e}function h(e,t){return e[0]=Math.abs(t[0]),e[1]=Math.abs(t[1]),e[2]=Math.abs(t[2]),e}function b(e,t){return e[0]=Math.sign(t[0]),e[1]=Math.sign(t[1]),e[2]=Math.sign(t[2]),e}function f(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e}function y(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e}function m(e,t,r,n){return e[0]=t[0]+r[0]*n,e[1]=t[1]+r[1]*n,e[2]=t[2]+r[2]*n,e}function g(e,t){const r=t[0]-e[0],n=t[1]-e[1],i=t[2]-e[2]
return Math.sqrt(r*r+n*n+i*i)}function O(e,t){const r=t[0]-e[0],n=t[1]-e[1],i=t[2]-e[2]
return r*r+n*n+i*i}function j(e){const t=e[0],r=e[1],n=e[2]
return t*t+r*r+n*n}function v(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}function w(e,t){const r=t[0],n=t[1],i=t[2]
let s=r*r+n*n+i*i
return s>0&&(s=1/Math.sqrt(s),e[0]=t[0]*s,e[1]=t[1]*s,e[2]=t[2]*s),e}function S(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function x(e,t,r){const n=t[0],i=t[1],s=t[2],o=r[0],a=r[1],l=r[2]
return e[0]=i*l-s*a,e[1]=s*o-n*l,e[2]=n*a-i*o,e}function _(e,t,r,n){const i=t[0],s=t[1],o=t[2]
return e[0]=i+n*(r[0]-i),e[1]=s+n*(r[1]-s),e[2]=o+n*(r[2]-o),e}function I(e,t,r){const n=t[0],i=t[1],s=t[2]
return e[0]=r[0]*n+r[4]*i+r[8]*s+r[12],e[1]=r[1]*n+r[5]*i+r[9]*s+r[13],e[2]=r[2]*n+r[6]*i+r[10]*s+r[14],e}function T(e,t,r){const n=t[0],i=t[1],s=t[2]
return e[0]=n*r[0]+i*r[3]+s*r[6],e[1]=n*r[1]+i*r[4]+s*r[7],e[2]=n*r[2]+i*r[5]+s*r[8],e}function M(e,t,r){const n=r[0],i=r[1],s=r[2],o=r[3],a=t[0],l=t[1],c=t[2]
let u=i*c-s*l,p=s*a-n*c,d=n*l-i*a,h=i*d-s*p,b=s*u-n*d,f=n*p-i*u
const y=2*o
return u*=y,p*=y,d*=y,h*=2,b*=2,f*=2,e[0]=a+u+h,e[1]=l+p+b,e[2]=c+d+f,e}function F(e,t,r,n){const i=[],s=[]
return i[0]=t[0]-r[0],i[1]=t[1]-r[1],i[2]=t[2]-r[2],s[0]=i[0]*Math.cos(n)-i[1]*Math.sin(n),s[1]=i[0]*Math.sin(n)+i[1]*Math.cos(n),s[2]=i[2],e[0]=s[0]+r[0],e[1]=s[1]+r[1],e[2]=s[2]+r[2],e}function E(e,t){o(V,e),o(L,t),w(V,V),w(L,L)
const r=S(V,L)
return r>1?0:r<-1?Math.PI:Math.acos(r)}const V=Object(n.f)(),L=Object(n.f)()
function k(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}function A(e,t){if(e===t)return!0
const r=e[0],n=e[1],s=e[2],o=t[0],a=t[1],l=t[2],c=Object(i.c)()
return Math.abs(r-o)<=c*Math.max(1,Math.abs(r),Math.abs(o))&&Math.abs(n-a)<=c*Math.max(1,Math.abs(n),Math.abs(a))&&Math.abs(s-l)<=c*Math.max(1,Math.abs(s),Math.abs(l))}function D(e,t,r){const n=r[0]-t[0],i=r[1]-t[1],s=r[2]-t[2]
let o=n*n+i*i+s*s
return o>0?(o=1/Math.sqrt(o),e[0]=n*o,e[1]=i*o,e[2]=s*o,e):(e[0]=0,e[1]=0,e[2]=0,e)}const R=c,C=u,P=p,N=g,q=O,z=s,U=j,G=Object.freeze(Object.defineProperty({__proto__:null,abs:h,add:l,angle:E,bezier:function(e,t,r,n,i,s){const o=1-s,a=o*o,l=s*s,c=a*o,u=3*s*a,p=3*l*o,d=l*s
return e[0]=t[0]*c+r[0]*u+n[0]*p+i[0]*d,e[1]=t[1]*c+r[1]*u+n[1]*p+i[1]*d,e[2]=t[2]*c+r[2]*u+n[2]*p+i[2]*d,e},ceil:function(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e},copy:o,cross:x,direction:D,dist:N,distance:g,div:P,divide:p,dot:S,equals:A,exactEquals:k,floor:d,hermite:function(e,t,r,n,i,s){const o=s*s,a=o*(2*s-3)+1,l=o*(s-2)+s,c=o*(s-1),u=o*(3-2*s)
return e[0]=t[0]*a+r[0]*l+n[0]*c+i[0]*u,e[1]=t[1]*a+r[1]*l+n[1]*c+i[1]*u,e[2]=t[2]*a+r[2]*l+n[2]*c+i[2]*u,e},inverse:function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e},len:z,length:s,lerp:_,max:function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e},min:f,mul:C,multiply:u,negate:v,normalize:w,random:function(e,t){t=t||1
const r=i.a,n=2*r()*Math.PI,s=2*r()-1,o=Math.sqrt(1-s*s)*t
return e[0]=Math.cos(n)*o,e[1]=Math.sin(n)*o,e[2]=s*t,e},rotateX:function(e,t,r,n){const i=[],s=[]
return i[0]=t[0]-r[0],i[1]=t[1]-r[1],i[2]=t[2]-r[2],s[0]=i[0],s[1]=i[1]*Math.cos(n)-i[2]*Math.sin(n),s[2]=i[1]*Math.sin(n)+i[2]*Math.cos(n),e[0]=s[0]+r[0],e[1]=s[1]+r[1],e[2]=s[2]+r[2],e},rotateY:function(e,t,r,n){const i=[],s=[]
return i[0]=t[0]-r[0],i[1]=t[1]-r[1],i[2]=t[2]-r[2],s[0]=i[2]*Math.sin(n)+i[0]*Math.cos(n),s[1]=i[1],s[2]=i[2]*Math.cos(n)-i[0]*Math.sin(n),e[0]=s[0]+r[0],e[1]=s[1]+r[1],e[2]=s[2]+r[2],e},rotateZ:F,round:function(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e},scale:y,scaleAndAdd:m,set:a,sign:b,sqrDist:q,sqrLen:U,squaredDistance:O,squaredLength:j,str:function(e){return"vec3("+e[0]+", "+e[1]+", "+e[2]+")"},sub:R,subtract:c,transformMat3:T,transformMat4:I,transformQuat:M},Symbol.toStringTag,{value:"Module"}))},986:function(e,t,r){"use strict"
r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return u}))
var n=r(968),i=r(975),s=(r(235),r(234)),o=(r(233),r(23)),a=r(1006),l=r(999),c=r(969)
const u=e=>{let t=class extends e{clone(){const e=Object(o.w)(Object(l.a)(this),"unable to clone instance of non-accessor class"),t=e.metadatas,r=e.store,n={},i=new Map
for(const e in t){const o=t[e],l=null==r?void 0:r.originOf(e),c=o.clonable
if(o.readOnly||!1===c||l!==a.a.USER&&l!==a.a.DEFAULTS&&l!==a.a.WEB_MAP&&l!==a.a.WEB_SCENE)continue
const u=this[e]
let p=null
p="function"==typeof c?c(u):"reference"===c?u:Object(s.e)(u),null!=u&&null==p||(l===a.a.DEFAULTS?i.set(e,p):n[e]=p)}const c=new(0,Object.getPrototypeOf(this).constructor)(n)
if(i.size){var u
const e=null==(u=Object(l.a)(c))?void 0:u.store
if(e)for(const[t,r]of i)e.set(t,r,a.a.DEFAULTS)}return c}}
return t=Object(n.a)([Object(c.a)("esri.core.Clonable")],t),t}
let p=class extends(u(i.a)){}
p=Object(n.a)([Object(c.a)("esri.core.Clonable")],p)},989:function(e,t,r){"use strict"
r.d(t,"a",(function(){return _})),r.d(t,"b",(function(){return F})),r.d(t,"c",(function(){return E})),r.d(t,"d",(function(){return S})),r.d(t,"e",(function(){return w})),r.d(t,"f",(function(){return V})),r.d(t,"g",(function(){return A})),r.d(t,"h",(function(){return L})),r.d(t,"i",(function(){return se})),r.d(t,"j",(function(){return v})),r.d(t,"k",(function(){return m})),r.d(t,"l",(function(){return O})),r.d(t,"m",(function(){return T})),r.d(t,"n",(function(){return k})),r.d(t,"o",(function(){return D})),r.d(t,"p",(function(){return W})),r.d(t,"q",(function(){return J})),r.d(t,"r",(function(){return ae})),r.d(t,"s",(function(){return H})),r.d(t,"t",(function(){return b})),r.d(t,"u",(function(){return B})),r.d(t,"v",(function(){return oe})),r.d(t,"w",(function(){return Z})),r.d(t,"x",(function(){return x})),r.d(t,"y",(function(){return K})),r.d(t,"z",(function(){return ie}))
var n,i,s=r(446),o=r(23),a=r(146);(i=n||(n={})).VALUE_OUT_OF_RANGE="domain-validation-error::value-out-of-range",i.INVALID_CODED_VALUE="domain-validation-error::invalid-coded-value"
var l=r(1010)
const c=/^([0-9])/,u=/[^a-z0-9_\u0080-\uffff]/gi,p=/_{2,}/g,d=/^_/,h=/_$/
function b(e){return null==e?null:e.trim().replace(u,"_").replace(p,"_").replace(d,"").replace(h,"").replace(c,"F$1")||null}const f=["field","field2","field3","normalizationField","rotationInfo.field","proportionalSymbolInfo.field","proportionalSymbolInfo.normalizationField","colorInfo.field","colorInfo.normalizationField"],y=["field","normalizationField"]
function m(e,t){if(null!=e&&null!=t)for(const r of Array.isArray(e)?e:[e])if(g(f,r,t),"visualVariables"in r&&r.visualVariables)for(const e of r.visualVariables)g(y,e,t)}function g(e,t,r){if(e)for(const n of e){const e=Object(a.b)(n,t),i=e&&"function"!=typeof e&&r.get(e)
i&&Object(a.c)(n,i.name,t)}}function O(e,t){var r
if(null!=e&&null!=t&&null!=(r=t.fields)&&r.length)if("startField"in e){var n,i
const r=t.get(e.startField),s=t.get(e.endField)
e.startField=null!=(n=null==r?void 0:r.name)?n:null,e.endField=null!=(i=null==s?void 0:s.name)?i:null}else{var s,o
const r=t.get(e.startTimeField),n=t.get(e.endTimeField)
e.startTimeField=null!=(s=null==r?void 0:r.name)?s:null,e.endTimeField=null!=(o=null==n?void 0:n.name)?o:null}}const j=new Set
function v(e,t){return e&&t?(j.clear(),w(j,e,t),Array.from(j).sort()):[]}function w(e,t,r){var n
if(r)if(null!=t&&null!=(n=t.fields)&&n.length)if(r.includes("*"))for(const{name:r}of t.fields)e.add(r)
else for(const n of r)S(e,t,n)
else{if(r.includes("*"))return e.clear(),void e.add("*")
for(const t of r)null!=t&&e.add(t)}}function S(e,t,r){if("string"==typeof r)if(t){const n=t.get(r)
n&&e.add(n.name)}else e.add(r)}function x(e,t){var r
return Object(o.k)(t)||Object(o.k)(e)?[]:t.includes("*")?(null!=(r=e.fields)?r:[]).map(e=>e.name):t}async function _(e,t,r){var n
if(!r)return
const{arcadeUtils:i}=await Object(l.e)(),s=i.extractFieldNames(r,null==t||null==(n=t.fields)?void 0:n.map(e=>e.name))
for(const r of s)S(e,t,r)}async function I(e,t,n){if(n&&"1=1"!==n){const i=(await Promise.all([r.e(9),r.e(33),r.e(417)]).then(r.bind(null,1363))).WhereClause.create(n,t)
if(!i.isStandardized)throw new s.a("fieldUtils:collectFilterFields","Where clause is not standardized",{where:n})
w(e,t,i.fieldNames)}}function T({displayField:e,fields:t}){return e||(t&&t.length?M(t,"name-or-title")||M(t,"unique-identifier")||M(t,"type-or-category")||function(e){for(const t of e){if(!t||!t.name)continue
const e=t.name.toLowerCase()
if(e.includes("name")||e.includes("title"))return t.name}return null}(t):null)}function M(e,t){for(const r of e)if(r&&r.valueType&&r.valueType===t)return r.name
return null}async function F(e,t){var r
if(!t)return
const n=null==(r=t.elevationInfo)?void 0:r.featureExpressionInfo
return n?n.collectRequiredFields(e,t.fieldsIndex):void 0}async function E(e,t,r){if(!t||!r||!("fields"in r))return
const n=[],i=r.popupTemplate
n.push(async function(e,t,r){const n=[];(null==r?void 0:r.expressionInfos)&&n.push(...r.expressionInfos.map(r=>_(e,t.fieldsIndex,r.expression)))
const i=null==r?void 0:r.content
if(Array.isArray(i))for(const r of i)"expression"===r.type&&r.expressionInfo&&n.push(_(e,t.fieldsIndex,r.expressionInfo.expression))
await Promise.all(n)}(e,t,i)),r.fields&&n.push(...r.fields.map(async r=>function(e,t,r){r.onStatisticExpression?_(e,t,r.onStatisticExpression.expression):e.add(r.onStatisticField)}(e,t.fieldsIndex,r))),await Promise.all(n)}async function V(e,t,r){t&&(t.timeInfo&&Object(o.l)(r)&&r.timeExtent&&w(e,t.fieldsIndex,[t.timeInfo.startField,t.timeInfo.endField]),t.floorInfo&&w(e,t.fieldsIndex,[t.floorInfo.floorField]),Object(o.l)(r)&&Object(o.l)(r.where)&&await I(e,t.fieldsIndex,r.where))}async function L(e,t,r){t&&r&&await Promise.all(r.map(r=>async function(e,t,r){t&&r&&(r.valueExpression?await _(e,t.fieldsIndex,r.valueExpression):r.field&&S(e,t.fieldsIndex,r.field))}(e,t,r)))}function k(e){if(!e)return[]
const t="editFieldsInfo"in e&&e.editFieldsInfo
return t?v(e.fieldsIndex,[t&&t.creatorField,t&&t.creationDateField,t&&t.editorField,t&&t.editDateField]):[]}async function A(e,t){const{labelingInfo:r,fieldsIndex:n}=t
r&&r.length&&await Promise.all(r.map(t=>async function(e,t,r){if(!r)return
const n=r.getLabelExpression(),i=r.where
if("arcade"===n.type)await _(e,t,n.expression)
else{const r=n.expression.match(/{[^}]*}/g)
r&&r.forEach(r=>{S(e,t,r.slice(1,-1))})}await I(e,t,i)}(e,n,t)))}function D(e){const t=e.defaultValue
return void 0!==t&&G(e,t)?t:e.nullable?null:void 0}function R(e){return"number"==typeof e&&!isNaN(e)&&isFinite(e)}function C(e){return null===e||R(e)}const P="isInteger"in Number?Number.isInteger:e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e
function N(e){return null===e||P(e)}function q(e){return null!=e&&"string"==typeof e}function z(e){return null===e||q(e)}function U(){return!0}function G(e,t){let r
switch(e.type){case"date":case"integer":case"long":case"small-integer":case"esriFieldTypeDate":case"esriFieldTypeInteger":case"esriFieldTypeLong":case"esriFieldTypeSmallInteger":r=e.nullable?N:P
break
case"double":case"single":case"esriFieldTypeSingle":case"esriFieldTypeDouble":r=e.nullable?C:R
break
case"string":case"esriFieldTypeString":r=e.nullable?z:q
break
default:r=U}return 1===arguments.length?r:r(t)}const B=["integer","small-integer","single","double"],$=new Set([...B,"esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"])
function J(e){return null!=e&&$.has(e.type)}function H(e){return null!=e&&("string"===e.type||"esriFieldTypeString"===e.type)}function W(e){return null!=e&&("date"===e.type||"esriFieldTypeDate"===e.type)}var Q,Y
function Z(e){return null==e||"number"==typeof e&&isNaN(e)?null:e}function K(e,t){return null==e||e.nullable&&null===t?null:J(e)&&!function(e,t){const r="string"==typeof e?X(e):e
if(!r)return!1
const n=r.min,i=r.max
return r.isInteger?P(t)&&t>=n&&t<=i:t>=n&&t<=i}(e.type,Number(t))?Q.OUT_OF_RANGE:G(e,t)?e.domain?function(e,t){switch(e.type){case"range":{const r="range"in e?e.range[0]:e.minValue,i="range"in e?e.range[1]:e.maxValue
if(null!=r&&+t<r||null!=i&&+t>i)return n.VALUE_OUT_OF_RANGE
break}case"coded-value":case"codedValue":if(null==e.codedValues||e.codedValues.every(e=>null==e||e.code!==t))return n.INVALID_CODED_VALUE}return null}(e.domain,t):null:Y.INVALID_TYPE}function X(e){switch(e){case"esriFieldTypeSmallInteger":case"small-integer":return ee
case"esriFieldTypeInteger":case"integer":return te
case"esriFieldTypeSingle":case"single":return re
case"esriFieldTypeDouble":case"double":return ne}}!function(e){e.OUT_OF_RANGE="numeric-range-validation-error::out-of-range"}(Q||(Q={})),function(e){e.INVALID_TYPE="type-validation-error::invalid-type"}(Y||(Y={}))
const ee={min:-32768,max:32767,isInteger:!0},te={min:-2147483648,max:2147483647,isInteger:!0},re={min:-34e37,max:12e37,isInteger:!1},ne={min:-Number.MAX_VALUE,max:Number.MAX_VALUE,isInteger:!1}
function ie(e,t,r){switch(e){case n.INVALID_CODED_VALUE:return`Value ${r} is not in the coded domain - field: ${t.name}, domain: ${JSON.stringify(t.domain)}`
case n.VALUE_OUT_OF_RANGE:return`Value ${r} is out of the range of valid values - field: ${t.name}, domain: ${JSON.stringify(t.domain)}`
case Y.INVALID_TYPE:return`Value ${r} is not a valid value for the field type - field: ${t.name}, type: ${t.type}, nullable: ${t.nullable}`
case Q.OUT_OF_RANGE:{const{min:e,max:n}=X(t.type)
return`Value ${r} is out of range for the number type - field: ${t.name}, type: ${t.type}, value range is ${e} to ${n}`}}}function se(e,t){return!oe(e,t,null)}function oe(e,t,r){if(!t||!t.attributes||!e){if(Object(o.l)(r))for(const t of null!=e?e:[])r.add(t)
return!0}const n=t.attributes
let i=!1
for(const t of e)if(!(t in n)){if(i=!0,!Object(o.l)(r))break
r.add(t)}return i}function ae(e){return!!e&&["raster.itempixelvalue","raster.servicepixelvalue"].some(t=>e.toLowerCase().startsWith(t))}},991:function(e,t,r){"use strict"
r.d(t,"a",(function(){return T})),r.d(t,"b",(function(){return f})),r.d(t,"c",(function(){return _})),r.d(t,"d",(function(){return y})),r.d(t,"e",(function(){return x})),r.d(t,"f",(function(){return a})),r.d(t,"g",(function(){return v})),r.d(t,"h",(function(){return d})),r.d(t,"i",(function(){return m})),r.d(t,"j",(function(){return j})),r.d(t,"k",(function(){return I})),r.d(t,"l",(function(){return l})),r.d(t,"m",(function(){return p})),r.d(t,"n",(function(){return u})),r.d(t,"o",(function(){return o})),r.d(t,"p",(function(){return c})),r.d(t,"q",(function(){return h})),r.d(t,"r",(function(){return b})),r.d(t,"s",(function(){return S})),r(23)
var n=r(985),i=r(1012)
const s=new Float32Array(1)
function o(e){--e
for(let t=1;t<32;t<<=1)e|=e>>t
return e+1}function a(e,t,r){return Math.min(Math.max(e,t),r)}function l(e){return 0==(e&e-1)}function c(e){return e--,e|=e>>1,e|=e>>2,e|=e>>4,e|=e>>8,e|=e>>16,++e}function u(e){return 10**Math.ceil(Math.LOG10E*Math.log(e))}function p(e,t,r){return e+(t-e)*r}function d(e){return e*Math.PI/180}function h(e){return 180*e/Math.PI}function b(e,t=1e-6){return(e<0?-1:1)/Math.max(Math.abs(e),t)}function f(e){return Math.acos(a(e,-1,1))}function y(e){return Math.asin(a(e,-1,1))}function m(e,t,r=1e-6){return e===t||!(!Number.isFinite(e)||!Number.isFinite(t))&&(e>t?e-t:t-e)<=r}const g=new DataView(new ArrayBuffer(Float64Array.BYTES_PER_ELEMENT))
const O=BigInt("1000000")
function j(e,t,r=1e-6){if(e===t)return!0
if(!Number.isFinite(e)||!Number.isFinite(t))return!1
const n=Math.abs(e-t),i=Math.abs(e),s=Math.abs(t)
if(0===e||0===t||i<1e-12&&s<1e-12){if(n>.01*r)return!1}else if(n/(i+s)>r)return!1
return!0}function v(e){return w(Math.max(-T,Math.min(e,T)))}function w(e){return s[0]=e,s[0]}function S(e,t,r){const n=a((r-e)/(t-e),0,1)
return n*n*(3-2*n)}function x(e,t){const r=Object(n.u)(e),i=y(e[2]/r),s=Math.atan2(e[1]/r,e[0]/r)
return Object(n.B)(t,r,i,s),t}function _(e,t,r){return Object(i.l)(e,t[0],t[1],t[2],t[3]*r)}function I(e){const t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[3]*e[3]+e[4]*e[4]+e[5]*e[5],n=e[6]*e[6]+e[7]*e[7]+e[8]*e[8]
return!(m(t,1)&&m(r,1)&&m(n,1))}(function(e){const t=function(e){return g.setFloat64(0,e),g.getBigInt64(0)}(e=Math.abs(e)),r=function(e){return g.setBigInt64(0,e),g.getFloat64(0)}(t<=O?O:t-O)
Math.abs(e-r)})(1)
const T=w(34028234663852886e22)},993:function(e,t,r){"use strict"
r.d(t,"a",(function(){return F}))
var n,i=r(968),s=r(1117),o=r(1002),a=r(234),l=r(23),c=r(1049),u=r(1114),p=r(1024),d=r(970),h=r(971),b=r(1082),f=r(969),y=r(1060),m=r(1087)
const g=new c.a(class{constructor(){this.target=null,this.cancellable=!1,this.defaultPrevented=!1,this.item=void 0,this.type=void 0}preventDefault(){this.cancellable&&(this.defaultPrevented=!0)}reset(e){this.defaultPrevented=!1,this.item=e}},void 0,e=>{e.item=null,e.target=null,e.defaultPrevented=!1,e.cancellable=!1}),O=()=>{}
function j(e){return e?e instanceof M?e.toArray():e.length?Array.prototype.slice.apply(e):[]:[]}function v(e){if(e&&e.length)return e[0]}function w(e,t,r,n){const i=Math.min(e.length-r,t.length-n)
let s=0
for(;s<i&&e[r+s]===t[n+s];)s++
return s}const S=new Set,x=new Set,_=new Set,I=new Map
let T=0,M=n=class extends o.a.EventedAccessor{static isCollection(e){return null!=e&&e instanceof n}constructor(e){super(e),this._chgListeners=[],this._notifications=null,this._timer=null,this._observable=new m.a,this.length=0,this._items=[],Object.defineProperty(this,"uid",{value:T++})}normalizeCtorArgs(e){return e?Array.isArray(e)||e instanceof n?{items:e}:e:{}}destroy(){this.removeAll()}*[Symbol.iterator](){yield*this.items}get items(){return Object(y.d)(this._observable),this._items}set items(e){this._emitBeforeChanges(u.a.ADD)||(this._splice(0,this.length,j(e)),this._emitAfterChanges(u.a.ADD))}hasEventListener(e){return"change"===e?this._chgListeners.length>0:this._emitter.hasEventListener(e)}on(e,t){if("change"===e){const e=this._chgListeners,r={removed:!1,callback:t}
return e.push(r),this._notifications&&this._notifications.push({listeners:e.slice(),items:this._items.slice(),changes:[]}),{remove(){this.remove=O,r.removed=!0,e.splice(e.indexOf(r),1)}}}return this._emitter.on(e,t)}once(e,t){const r=this.on(e,t)
return{remove(){r.remove()}}}add(e,t){if(Object(y.d)(this._observable),this._emitBeforeChanges(u.a.ADD))return this
const r=this.getNextIndex(null!=t?t:null)
return this._splice(r,0,[e]),this._emitAfterChanges(u.a.ADD),this}addMany(e,t=this._items.length){if(Object(y.d)(this._observable),!e||!e.length)return this
if(this._emitBeforeChanges(u.a.ADD))return this
const r=this.getNextIndex(t)
return this._splice(r,0,j(e)),this._emitAfterChanges(u.a.ADD),this}at(e){if(Object(y.d)(this._observable),(e=Math.trunc(e)||0)<0&&(e+=this.length),!(e<0||e>=this.length))return this._items[e]}removeAll(){if(Object(y.d)(this._observable),!this.length||this._emitBeforeChanges(u.a.REMOVE))return[]
const e=this._splice(0,this.length)||[]
return this._emitAfterChanges(u.a.REMOVE),e}clone(){return Object(y.d)(this._observable),this._createNewInstance({items:this._items.map(a.a)})}concat(...e){Object(y.d)(this._observable)
const t=e.map(j)
return this._createNewInstance({items:this._items.concat(...t)})}drain(e,t){if(Object(y.d)(this._observable),!this.length||this._emitBeforeChanges(u.a.REMOVE))return
const r=Object(l.d)(this._splice(0,this.length)),n=r.length
for(let i=0;i<n;i++)e.call(t,r[i],i,r)
this._emitAfterChanges(u.a.REMOVE)}every(e,t){return Object(y.d)(this._observable),this._items.every(e,t)}filter(e,t){let r
return Object(y.d)(this._observable),r=2===arguments.length?this._items.filter(e,t):this._items.filter(e),this._createNewInstance({items:r})}find(e,t){return Object(y.d)(this._observable),this._items.find(e,t)}findIndex(e,t){return Object(y.d)(this._observable),this._items.findIndex(e,t)}flatten(e,t){Object(y.d)(this._observable)
const r=[]
return function e(t,r,n,i){r&&r.forEach((r,s,o)=>{t.push(r),e(t,n.call(i,r,s,o),n,i)})}(r,this,e,t),new n(r)}forEach(e,t){return Object(y.d)(this._observable),this._items.forEach(e,t)}getItemAt(e){return Object(y.d)(this._observable),this._items[e]}getNextIndex(e){var t
Object(y.d)(this._observable)
const r=this.length
return(e=null!=(t=e)?t:r)<0?e=0:e>r&&(e=r),e}includes(e,t=0){return Object(y.d)(this._observable),this._items.includes(e,t)}indexOf(e,t=0){return Object(y.d)(this._observable),this._items.indexOf(e,t)}join(e=","){return Object(y.d)(this._observable),this._items.join(e)}lastIndexOf(e,t=this.length-1){return Object(y.d)(this._observable),this._items.lastIndexOf(e,t)}map(e,t){Object(y.d)(this._observable)
const r=this._items.map(e,t)
return new n({items:r})}reorder(e,t=this.length-1){Object(y.d)(this._observable)
const r=this.indexOf(e)
if(-1!==r){if(t<0?t=0:t>=this.length&&(t=this.length-1),r!==t){if(this._emitBeforeChanges(u.a.MOVE))return e
this._splice(r,1),this._splice(t,0,[e]),this._emitAfterChanges(u.a.MOVE)}return e}}pop(){if(Object(y.d)(this._observable),!this.length||this._emitBeforeChanges(u.a.REMOVE))return
const e=v(this._splice(this.length-1,1))
return this._emitAfterChanges(u.a.REMOVE),e}push(...e){return Object(y.d)(this._observable),this._emitBeforeChanges(u.a.ADD)||(this._splice(this.length,0,e),this._emitAfterChanges(u.a.ADD)),this.length}reduce(e,t){Object(y.d)(this._observable)
const r=this._items
return 2===arguments.length?r.reduce(e,t):r.reduce(e)}reduceRight(e,t){Object(y.d)(this._observable)
const r=this._items
return 2===arguments.length?r.reduceRight(e,t):r.reduceRight(e)}remove(e){return Object(y.d)(this._observable),this.removeAt(this.indexOf(e))}removeAt(e){if(Object(y.d)(this._observable),e<0||e>=this.length||this._emitBeforeChanges(u.a.REMOVE))return
const t=v(this._splice(e,1))
return this._emitAfterChanges(u.a.REMOVE),t}removeMany(e){if(Object(y.d)(this._observable),!e||!e.length||this._emitBeforeChanges(u.a.REMOVE))return[]
const t=e instanceof n?e.toArray():e,r=this._items,i=[],s=t.length
for(let e=0;e<s;e++){const n=t[e],s=r.indexOf(n)
if(s>-1){const n=1+w(t,r,e+1,s+1),o=this._splice(s,n)
o&&o.length>0&&i.push.apply(i,o),e+=n-1}}return this._emitAfterChanges(u.a.REMOVE),i}reverse(){if(Object(y.d)(this._observable),this._emitBeforeChanges(u.a.MOVE))return this
const e=this._splice(0,this.length)
return e&&(e.reverse(),this._splice(0,0,e)),this._emitAfterChanges(u.a.MOVE),this}shift(){if(Object(y.d)(this._observable),!this.length||this._emitBeforeChanges(u.a.REMOVE))return
const e=v(this._splice(0,1))
return this._emitAfterChanges(u.a.REMOVE),e}slice(e=0,t=this.length){return Object(y.d)(this._observable),this._createNewInstance({items:this._items.slice(e,t)})}some(e,t){return Object(y.d)(this._observable),this._items.some(e,t)}sort(e){if(Object(y.d)(this._observable),!this.length||this._emitBeforeChanges(u.a.MOVE))return this
const t=Object(l.d)(this._splice(0,this.length))
return arguments.length?t.sort(e):t.sort(),this._splice(0,0,t),this._emitAfterChanges(u.a.MOVE),this}splice(e,t,...r){Object(y.d)(this._observable)
const n=(t?u.a.REMOVE:0)|(r.length?u.a.ADD:0)
if(this._emitBeforeChanges(n))return[]
const i=this._splice(e,t,r)||[]
return this._emitAfterChanges(n),i}toArray(){return Object(y.d)(this._observable),this._items.slice()}toJSON(){return Object(y.d)(this._observable),this.toArray()}toLocaleString(){return Object(y.d)(this._observable),this._items.toLocaleString()}toString(){return Object(y.d)(this._observable),this._items.toString()}unshift(...e){return Object(y.d)(this._observable),!e.length||this._emitBeforeChanges(u.a.ADD)||(this._splice(0,0,e),this._emitAfterChanges(u.a.ADD)),this.length}_createNewInstance(e){return new this.constructor(e)}_splice(e,t,r){const n=this._items,i=this.itemType
let s,o
if(!this._notifications&&this.hasEventListener("change")&&(this._notifications=[{listeners:this._chgListeners.slice(),items:this._items.slice(),changes:[]}],this._timer&&this._timer.remove(),this._timer=Object(p.b)(()=>this._dispatchChange())),t){if(o=n.splice(e,t),this.hasEventListener("before-remove")){const t=g.acquire()
t.target=this,t.cancellable=!0
for(let r=0,i=o.length;r<i;r++)s=o[r],t.reset(s),this.emit("before-remove",t),t.defaultPrevented&&(o.splice(r,1),n.splice(e,0,s),e+=1,r-=1,i-=1)
g.release(t)}if(this.length=this._items.length,this.hasEventListener("after-remove")){const e=g.acquire()
e.target=this,e.cancellable=!1
const t=o.length
for(let r=0;r<t;r++)e.reset(o[r]),this.emit("after-remove",e)
g.release(e)}}if(r&&r.length){if(i){const e=[]
for(const t of r){const r=i.ensureType(t)
null==r&&null!=t||e.push(r)}r=e}const t=this.hasEventListener("before-add"),s=this.hasEventListener("after-add"),o=e===this.length
if(t||s){const i=g.acquire()
i.target=this,i.cancellable=!0
const a=g.acquire()
a.target=this,a.cancellable=!1
for(const l of r)t?(i.reset(l),this.emit("before-add",i),i.defaultPrevented||(o?n.push(l):n.splice(e++,0,l),this._set("length",n.length),s&&(a.reset(l),this.emit("after-add",a)))):(o?n.push(l):n.splice(e++,0,l),this._set("length",n.length),a.reset(l),this.emit("after-add",a))
g.release(a),g.release(i)}else{if(o)for(const e of r)n.push(e)
else n.splice(e,0,...r)
this._set("length",n.length)}}return(r&&r.length||o&&o.length)&&this._notifyChangeEvent(r,o),o}_emitBeforeChanges(e){let t=!1
if(this.hasEventListener("before-changes")){const r=g.acquire()
r.target=this,r.cancellable=!0,r.type=e,this.emit("before-changes",r),t=r.defaultPrevented,g.release(r)}return t}_emitAfterChanges(e){if(this.hasEventListener("after-changes")){const t=g.acquire()
t.target=this,t.cancellable=!1,t.type=e,this.emit("after-changes",t),g.release(t)}this._observable.notify()}_notifyChangeEvent(e,t){this.hasEventListener("change")&&this._notifications&&this._notifications[this._notifications.length-1].changes.push({added:e,removed:t})}_dispatchChange(){if(this._timer&&(this._timer.remove(),this._timer=null),!this._notifications)return
const e=this._notifications
this._notifications=null
for(const t of e){const e=t.changes
S.clear(),x.clear(),_.clear()
for(const{added:t,removed:r}of e){if(t)if(0===_.size&&0===x.size)for(const e of t)S.add(e)
else for(const e of t)x.has(e)?(_.add(e),x.delete(e)):_.has(e)||S.add(e)
if(r)if(0===_.size&&0===S.size)for(const e of r)x.add(e)
else for(const e of r)S.has(e)?S.delete(e):(_.delete(e),x.add(e))}const r=s.a.acquire()
S.forEach(e=>{r.push(e)})
const n=s.a.acquire()
x.forEach(e=>{n.push(e)})
const i=this._items,o=t.items,a=s.a.acquire()
if(_.forEach(e=>{o.indexOf(e)!==i.indexOf(e)&&a.push(e)}),t.listeners&&(r.length||n.length||a.length)){const e={target:this,added:r,removed:n,moved:a},i=t.listeners.length
for(let r=0;r<i;r++){const n=t.listeners[r]
n.removed||n.callback.call(this,e)}}s.a.release(r),s.a.release(n),s.a.release(a)}S.clear(),x.clear(),_.clear()}}
M.ofType=e=>{if(!e)return n
if(I.has(e))return I.get(e)
let t=null
if("function"==typeof e)t=e.prototype.declaredClass
else if(e.base)t=e.base.prototype.declaredClass
else for(const r in e.typeMap){const n=e.typeMap[r].prototype.declaredClass
t?t+=" | "+n:t=n}let r=class extends n{}
return Object(i.a)([Object(b.a)({Type:e,ensureType:"function"==typeof e?Object(h.m)(e):Object(h.k)(e)})],r.prototype,"itemType",void 0),r=Object(i.a)([Object(f.a)(`esri.core.Collection<${t}>`)],r),I.set(e,r),r},Object(i.a)([Object(d.b)()],M.prototype,"length",void 0),Object(i.a)([Object(d.b)()],M.prototype,"items",null),M=n=Object(i.a)([Object(f.a)("esri.core.Collection")],M)
const F=M},996:function(e,t,r){"use strict"
r.d(t,"a",(function(){return R})),r.d(t,"b",(function(){return D})),r.d(t,"c",(function(){return f})),r.d(t,"d",(function(){return g})),r.d(t,"e",(function(){return O})),r.d(t,"f",(function(){return a})),r.d(t,"g",(function(){return T})),r.d(t,"h",(function(){return j})),r.d(t,"i",(function(){return S})),r.d(t,"j",(function(){return _})),r.d(t,"k",(function(){return x})),r.d(t,"l",(function(){return l})),r.d(t,"m",(function(){return o})),r.d(t,"n",(function(){return F})),r.d(t,"o",(function(){return V})),r.d(t,"p",(function(){return A})),r.d(t,"q",(function(){return h})),r.d(t,"r",(function(){return d})),r.d(t,"s",(function(){return b})),r.d(t,"t",(function(){return u})),r.d(t,"u",(function(){return c})),r.d(t,"v",(function(){return m})),r.d(t,"w",(function(){return M})),r.d(t,"x",(function(){return I})),r.d(t,"y",(function(){return w})),r.d(t,"z",(function(){return v})),r.d(t,"A",(function(){return k})),r.d(t,"B",(function(){return E})),r.d(t,"C",(function(){return p})),r.d(t,"D",(function(){return y}))
r(235)
var n=r(991),i=r(23),s=r(770)
function o(e=C){return[e[0],e[1],e[2],e[3]]}function a(e){return[e[0],e[1],e[2],e[3]]}function l(e,t){return e!==t&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3]),e}function c(e,t,r,n,i=o()){return i[0]=e,i[1]=t,i[2]=r,i[3]=n,i}function u(e,t=o()){return t[0]=e.xmin,t[1]=e.ymin,t[2]=e.xmax,t[3]=e.ymax,t}function p(e,t){return new s.default({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:t})}function d(e,t){t[0]<e[0]&&(e[0]=t[0]),t[0]>e[2]&&(e[2]=t[0]),t[1]<e[1]&&(e[1]=t[1]),t[1]>e[3]&&(e[3]=t[1])}function h(e,t,r){if(Object(i.k)(t))l(r,e)
else if("length"in t)L(t)?(r[0]=Math.min(e[0],t[0]),r[1]=Math.min(e[1],t[1]),r[2]=Math.max(e[2],t[2]),r[3]=Math.max(e[3],t[3])):2!==t.length&&3!==t.length||(r[0]=Math.min(e[0],t[0]),r[1]=Math.min(e[1],t[1]),r[2]=Math.max(e[2],t[0]),r[3]=Math.max(e[3],t[1]))
else switch(t.type){case"extent":r[0]=Math.min(e[0],t.xmin),r[1]=Math.min(e[1],t.ymin),r[2]=Math.max(e[2],t.xmax),r[3]=Math.max(e[3],t.ymax)
break
case"point":r[0]=Math.min(e[0],t.x),r[1]=Math.min(e[1],t.y),r[2]=Math.max(e[2],t.x),r[3]=Math.max(e[3],t.y)}}function b(e,t,r=e){const n=t.length
let i=e[0],s=e[1],o=e[2],a=e[3]
for(let e=0;e<n;e++){const r=t[e]
i=Math.min(i,r[0]),s=Math.min(s,r[1]),o=Math.max(o,r[0]),a=Math.max(a,r[1])}return r[0]=i,r[1]=s,r[2]=o,r[3]=a,r}function f(e){for(let t=0;t<4;t++)if(!isFinite(e[t]))return!1
return!0}function y(e){return Object(i.k)(e)||e[0]>=e[2]?0:e[2]-e[0]}function m(e){return e[1]>=e[3]?0:e[3]-e[1]}function g(e){return y(e)*m(e)}function O(e,t=[0,0]){return t[0]=(e[0]+e[2])/2,t[1]=(e[1]+e[3])/2,t}function j(e,t){return x(e,t[0],t[1])}function v(e,t){const r=t[3],n=.5*(e[0]+e[2]),i=Math.abs(t[0]-n),s=.5*(e[2]-e[0])
if(i>r+s)return!1
const o=.5*(e[1]+e[3]),a=.5*(e[3]-e[1]),l=Math.abs(t[1]-o)
if(l>r+a)return!1
if(i<s||l<a)return!0
const c=i-s,u=l-a
return c*c+u*u<=r*r}function w(e,t,r){const n=e[0],i=e[1],s=e[2],o=e[3],{x:a,y:l}=t,{x:c,y:u}=r,p=(e,t)=>(u-l)*e+(a-c)*t+(c*l-a*u)<0,d=p(n,o),h=p(s,o),b=p(s,i),f=p(n,i)
return!(d===h&&h===b&&b===f&&f===d||a<n&&c<n||a>s&&c>s||l>o&&u>o||l<i&&u<i)}function S(e,t){return x(e,t.x,t.y)}function x(e,t,r){return t>=e[0]&&r>=e[1]&&t<=e[2]&&r<=e[3]}function _(e,t,r){return t[0]>=e[0]-r&&t[1]>=e[1]-r&&t[0]<=e[2]+r&&t[1]<=e[3]+r}function I(e,t){return Math.max(t[0],e[0])<=Math.min(t[2],e[2])&&Math.max(t[1],e[1])<=Math.min(t[3],e[3])}function T(e,t){return t[0]>=e[0]&&t[2]<=e[2]&&t[1]>=e[1]&&t[3]<=e[3]}function M(e,t,r){if(Object(i.k)(t))return l(r,e)
const s=t[0],o=t[1],a=t[2],c=t[3]
return r[0]=Object(n.f)(e[0],s,a),r[1]=Object(n.f)(e[1],o,c),r[2]=Object(n.f)(e[2],s,a),r[3]=Object(n.f)(e[3],o,c),r}function F(e,t){const r=(e[0]+e[2])/2,n=(e[1]+e[3])/2,i=Math.max(Math.abs(t[0]-r)-y(e)/2,0),s=Math.max(Math.abs(t[1]-n)-m(e)/2,0)
return Math.sqrt(i*i+s*s)}function E(e,t,r,n=e){return n[0]=e[0]+t,n[1]=e[1]+r,n[2]=e[2]+t,n[3]=e[3]+r,n}function V(e){return e?l(e,R):o(R)}function L(e){return null!=e&&4===e.length}function k(e){return!(0!==y(e)&&isFinite(e[0])||0!==m(e)&&isFinite(e[1]))}function A(e,t){return L(e)&&L(t)?e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]:e===t}const D=[-1/0,-1/0,1/0,1/0],R=[1/0,1/0,-1/0,-1/0],C=[0,0,0,0]}}])
