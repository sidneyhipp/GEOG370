(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[286],{1269:function(t,e,s){"use strict"
s.d(e,"a",(function(){return i})),s.d(e,"b",(function(){return a})),s.d(e,"c",(function(){return n})),s.d(e,"d",(function(){return l})),s.d(e,"e",(function(){return u})),s.d(e,"f",(function(){return h})),s.d(e,"g",(function(){return o})),s.d(e,"h",(function(){return d}))
const i=8388607,r=8388608,n=0,a=1,o=t=>(t&r)>>>23,h=t=>t&i,u=t=>o(t)===a?254:255
function d(t){return o(t)===a}function l(t,e){return((e?r:0)|t)>>>0}},1572:function(t,e,s){"use strict"
s.d(e,"a",(function(){return r})),s.d(e,"b",(function(){return i}))
const i=(t,e)=>t&&((...t)=>e.warn("DEBUG:",...t))||(()=>null),r=!1},1706:function(t,e,s){"use strict"
s.d(e,"a",(function(){return _})),s.d(e,"b",(function(){return u}))
var i=s(23),r=s(980),n=s(1174),a=s(1e3),o=s(1003),h=s(1512)
function u(t,e){if(!t||!e)return t
switch(e){case"radius":case"distance":return 2*t
case"diameter":case"width":return t
case"area":return Math.sqrt(t)}return t}function d(t){return(null!=t?t:[]).map(t=>function(t){return{value:t.value,size:Object(r.k)(t.size)}}(t))}function l(t){if("string"==typeof t||"number"==typeof t)return Object(r.k)(t)
const e=t
return{type:"size",expression:e.expression,stops:d(e.stops)}}const c=t=>{const e=[],s=[],i=d(t),n=i.length
for(let t=0;t<6;t++){const o=i[Math.min(t,n-1)]
e.push(o.value),s.push(null==o.size?a.B:Object(r.h)(o.size))}return{values:new Float32Array(e),sizes:new Float32Array(s)}}
function _(t){var e
const s=t&&t.length>0?{}:null,i=s?{}:null
if(!s||!i)return{vvFields:s,vvRanges:i}
for(const r of t)if(r.field&&(s[r.type]=r.field),"size"===r.type){i.size||(i.size={})
const t=r
switch(Object(h.a)(t)){case o.f.SIZE_MINMAX_VALUE:i.size.minMaxValue={minDataValue:t.minDataValue,maxDataValue:t.maxDataValue,minSize:l(t.minSize),maxSize:l(t.maxSize)}
break
case o.f.SIZE_SCALE_STOPS:i.size.scaleStops={stops:d(t.stops)}
break
case o.f.SIZE_FIELD_STOPS:if(t.levels){const e={}
for(const s in t.levels)e[s]=c(t.levels[s])
i.size.fieldStops={type:"level-dependent",levels:e}}else i.size.fieldStops={type:"static",...c(t.stops)}
break
case o.f.SIZE_UNIT_VALUE:i.size.unitValue={unit:t.valueUnit,valueRepresentation:null!=(e=t.valueRepresentation)?e:void 0}}}else if("color"===r.type)i.color=b(r)
else if("opacity"===r.type)i.opacity=f(r)
else if("rotation"===r.type){const t=r
i.rotation={type:t.rotationType}}return{vvFields:s,vvRanges:i}}function f(t){const e={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]}
if("string"==typeof t.field){if(!t.stops)return null
{if(t.stops.length>8)return null
const s=t.stops
for(let t=0;t<8;++t){const i=s[Math.min(t,s.length-1)]
e.values[t]=i.value,e.opacities[t]=i.opacity}}}else{if(!(t.stops&&t.stops.length>=0))return null
{const s=t.stops&&t.stops.length>=0?t.stops[0].opacity:0
for(let t=0;t<8;t++)e.values[t]=1/0,e.opacities[t]=s}}return e}function p(t,e,s){t[4*e+0]=s.r/255,t[4*e+1]=s.g/255,t[4*e+2]=s.b/255,t[4*e+3]=s.a}function b(t){if(Object(i.k)(t))return null
if(t.normalizationField)return null
const e={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
if("string"==typeof t.field){if(!t.stops)return null
{if(t.stops.length>8)return null
e.field=t.field
const s=t.stops
for(let t=0;t<8;++t){const i=s[Math.min(t,s.length-1)]
e.values[t]=i.value,p(e.colors,t,i.color)}}}else{if(!(t.stops&&t.stops.length>=0))return null
{const s=t.stops&&t.stops.length>=0&&t.stops[0].color
for(let t=0;t<8;t++)e.values[t]=1/0,p(e.colors,t,s)}}for(let t=0;t<32;t+=4)Object(n.a)(e.colors,t,!0)
return e}},1726:function(t,e,s){"use strict"
s.d(e,"a",(function(){return x}))
var i=s(446),r=s(235),n=s(233),a=s(23),o=s(973),h=s(1e3),u=s(1269),d=s(1022),l=s(1572),c=s(984),_=s(1171),f=s(1072)
const p=n.a.getLogger("esri.views.2d.engine.webgl.AttributeStoreView"),b=Object(l.b)(l.a,p)
class g{constructor(t,e,s){this._texture=null,this._lastTexture=null,this._fbos={},this.texelSize=4
const{buffer:i,pixelType:r,textureOnly:n}=t,o=Object(d.l)(r)
this.shared=s,this.pixelType=r,this.size=e,this.textureOnly=n,n||(this.data=new o(Object(a.u)(i))),this._resetRange()}destroy(){Object(a.b)(this._texture,t=>t.dispose())
for(const t in this._fbos)Object(a.b)(this._fbos[t],e=>{"0"===t&&e.detachColorTexture(),e.dispose()}),this._fbos[t]=null
this._texture=null}get _textureDesc(){return{target:c.A.TEXTURE_2D,wrapMode:c.B.CLAMP_TO_EDGE,pixelFormat:c.p.RGBA,dataType:this.pixelType,samplingMode:c.z.NEAREST,width:this.size,height:this.size}}setData(t,e,s){const i=Object(u.f)(t),r=Object(a.u)(this.data),n=i*this.texelSize+e
!r||n>=r.length||(r[n]=s,this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,i))}getData(t,e){if(Object(a.k)(this.data))return null
const s=Object(u.f)(t)*this.texelSize+e
return!this.data||s>=this.data.length?null:this.data[s]}getTexture(t){return Object(a.v)(this._texture,()=>this._initTexture(t))}getFBO(t,e=0){if(Object(a.k)(this._fbos[e])){const s={colorTarget:c.y.TEXTURE,depthStencilTarget:c.m.NONE},i=0===e?this.getTexture(t):this._textureDesc
this._fbos[e]=new _.a(t,s,i)}return this._fbos[e]}get locked(){return!(this.pixelType!==c.q.UNSIGNED_BYTE||!this.shared||this.textureOnly||!Object(r.a)("esri-atomics")||!this.data)&&1===Atomics.load(this.data,0)}get hasDirty(){const t=this.dirtyStart
return this.dirtyEnd>=t}updateTexture(t,e){if(!this.locked){try{const e=this.dirtyStart,s=this.dirtyEnd
if(!this.hasDirty)return
this._resetRange()
const r=Object(a.u)(this.data).buffer,n=this.getTexture(t),o=4,h=(e-e%this.size)/this.size,u=(s-s%this.size)/this.size,l=h,c=this.size,_=u,f=h*this.size*o,b=(c+_*this.size)*o-f,g=Object(d.l)(this.pixelType),x=new g(r,f*g.BYTES_PER_ELEMENT,b),y=this.size,m=_-l+1
if(m>this.size)return void p.error(new i.a("mapview-webgl","Out-of-bounds index when updating AttributeData"))
n.updateData(0,0,l,y,m,x)}catch(t){}e()}}update(t){const{data:e,start:s,end:i}=t
if(Object(a.l)(e)&&Object(a.l)(this.data)){const i=this.data,r=s*this.texelSize
for(let s=0;s<e.length;s++){const n=1<<s%this.texelSize
t.layout&n&&(i[r+s]=e[s])}}this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,i)}resize(t,e){const s=this.size
if(this.size=e,this.textureOnly)return void(s!==this.size&&(this._lastTexture=this._texture,this._texture=null))
const i=Object(d.l)(this.pixelType)
this.destroy(),this.data=new i(Object(a.u)(t.buffer))}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}_initTexture(t){const e=new f.a(t,this._textureDesc,Object(a.v)(this.data,void 0))
if(Object(a.l)(this._lastTexture)&&this._fbos[0]){const s=this._lastTexture.descriptor.width,i=this._lastTexture.descriptor.height,r=this._lastTexture.descriptor.dataType,n=this._lastTexture.descriptor.pixelFormat,a=this.getFBO(t),o=Object(d.m)(r),h=new(Object(d.l)(r))(new ArrayBuffer(s*i*o*this.texelSize)),u=t.getBoundFramebufferObject(),{x:l,y:c,width:_,height:f}=t.getViewport()
t.bindFramebuffer(a),a.readPixels(0,0,s,i,n,r,h),e.updateData(0,0,0,2*s,i/2,h),t.setViewport(l,c,_,f),t.bindFramebuffer(u)}return this.destroy(),this._texture=e,this._texture}}class x{constructor(t){this._onUpdate=t,this._initialized=!1,this._forceNextUpload=!1,this._locked=!1}initialize(t){const{blocks:e,shared:s,size:i}=t
if(this.shared=s,this.size=i,b("Initializing AttributeStoreView",t),Object(a.k)(this._data))this._data=Object(a.m)(e,t=>new g(t,i,s))
else for(let t=0;t<this._data.length;t++){const r=this._data[t],n=e[t]
Object(a.l)(n)&&(Object(a.k)(r)?this._data[t]=new g(n,i,s):r.resize(n,i))}this._initialized=!0}destroy(){Object(a.b)(this._data,t=>Object(a.m)(t,t=>t.destroy())),Object(a.b)(this._defaultTexture,t=>t.dispose())}isEmpty(){const t=this._data
return Object(a.k)(t)}isUpdating(){const t=Object(a.l)(this._pendingAttributeUpdate),e=t
return Object(r.a)("esri-2d-log-updating")&&console.log(`Updating AttributeStoreView ${e}\n  -> hasPendingUpdate ${t}`),e}getBlock(t){return Object(a.k)(this._data)?null:this._data[t]}setLabelMinZoom(t,e){this.setData(t,0,1,e)}getLabelMinZoom(t){return this.getData(t,0,1,255)}getFilterFlags(t){return this.getData(t,0,0,0)}getVVSize(t){return this.getData(t,h.e,0,0)}getData(t,e,s,i){if(!this._data)return 0
const r=Object(a.u)(this._data)[e]
if(Object(a.k)(r))return 0
const n=r.getData(t,s)
return Object(a.l)(n)?n:i}setData(t,e,s,i){const r=Object(a.u)(this._data)[e]
Object(a.u)(r).setData(t,s,i)}lockTextureUpload(){this._locked=!0}unlockTextureUpload(){this._locked=!1}forceTextureUpload(){this._forceNextUpload=!0}async requestUpdate(t){if(this._pendingAttributeUpdate)return void p.error(new i.a("mapview-webgl","Tried to update attribute data with a pending update"))
const e=Object(o.e)()
return b("AttributeStoreView Update Requested",t),this._pendingAttributeUpdate={data:t,resolver:e},this._onUpdate(),e.promise}update(){if(this._initialized&&Object(a.l)(this._pendingAttributeUpdate)){Object(r.a)("esri-2d-update-debug")&&console.debug("AttributeStoreView::update")
const{data:t,resolver:e}=this._pendingAttributeUpdate,s=Object(a.u)(this._data)
for(let e=0;e<t.blocks.length;e++){const i=t.blocks[e],r=s[e]
Object(a.b)(r,t=>Object(a.b)(i,s=>{b("Updating block "+e,s),t.update(s)}))}this._pendingAttributeUpdate=null,e(),this._onUpdate()}}bindTextures(t,e=!0){const s=this._getDefaultTexture(t)
if(!this._initialized)return t.bindTexture(s,h.H),void(e&&(t.bindTexture(s,h.I),t.bindTexture(s,h.J),t.bindTexture(s,h.K),t.bindTexture(s,h.L),t.bindTexture(s,h.M),t.bindTexture(s,h.P)))
const i=Object(a.u)(this._data)
this._locked&&!this._forceNextUpload||(Object(a.i)(i,e=>e.updateTexture(t,()=>this._onUpdate())),this._forceNextUpload=!1),t.bindTexture(Object(a.n)(i[h.c],s,e=>e.getTexture(t)),h.H),e&&(t.bindTexture(Object(a.n)(i[h.d],s,e=>e.getTexture(t)),h.P),t.bindTexture(Object(a.n)(i[h.a],s,e=>e.getTexture(t)),h.I),t.bindTexture(Object(a.n)(i[h.e],s,e=>e.getTexture(t)),h.J),t.bindTexture(Object(a.n)(i[h.b],s,e=>e.getTexture(t)),h.K),t.bindTexture(Object(a.n)(i[h.L],s,e=>e.getTexture(t)),h.L),t.bindTexture(Object(a.n)(i[h.M],s,e=>e.getTexture(t)),h.M))}_getDefaultTexture(t){if(Object(a.k)(this._defaultTexture)){const e={wrapMode:c.B.CLAMP_TO_EDGE,pixelFormat:c.p.RGBA,dataType:c.q.UNSIGNED_BYTE,samplingMode:c.z.NEAREST,width:1,height:1}
this._defaultTexture=new f.a(t,e,new Uint8Array(4))}return this._defaultTexture}}},1744:function(t,e,s){"use strict"
s.d(e,"a",(function(){return u}))
var i=s(1215),r=s(1192),n=s(1109),a=s(1151),o=s(1e3),h=s(1554)
class u extends h.a{constructor(t,e,s,i){super(t,e,s,i,o.Z,o.Z)}destroy(){super.destroy(),this._transforms&&u.TransformCache.release(this.key.hash)}setTransform(t){const e=this.resolution/t.resolution,s=this.transforms.tileMat3,[a,o]=t.toScreenNoRotation([0,0],[this.x,this.y]),h=this.width/this.rangeX*e,u=this.height/this.rangeY*e
Object(n.o)(s,h,0,0,0,u,0,a,o,1),Object(n.l)(this.transforms.dvs,t.displayViewMat3,s)
const d=this.transforms.labelMat2d,l=window.devicePixelRatio,c=Object(i.d)(Object(r.a)(),h*l,0,0,u*l,a*l,o*l)
Object(i.g)(d,t.viewMat2d,c)}_createTransforms(){return u.TransformCache.acquire(this.key.hash)}}u.TransformCache=new class{acquire(t){return{refCount:1,version:-1,labelMat2d:Object(r.a)(),tileMat3:Object(a.b)(),dvs:Object(a.b)()}}release(t){}}},1745:function(t,e,s){"use strict"
s.d(e,"a",(function(){return a}))
var i=s(23),r=s(1e3)
const n=2147483647
class a{constructor(t){this._head=t,this._cursor=t}static from(t,e=0,s=t.byteLength/o.BYTES_PER_RECORD-e){const i=new o(new Int32Array(t,e*o.BYTES_PER_RECORD,s*o.ELEMENTS_PER_RECORD))
return new a(i)}size(){let t=this._cursor,e=0
for(;t;)e+=t.size(),t=t._link
return e}get id(){return this._cursor.id}set id(t){this._cursor.id=t}get materialKey(){return this._cursor.materialKey}set materialKey(t){this._cursor.materialKey=t}get insertAfter(){return this._cursor.insertAfter}get indexFrom(){return this._cursor.indexFrom}set indexFrom(t){this._cursor.indexFrom=t}get indexCount(){return this._cursor.indexCount}set indexCount(t){this._cursor.indexCount=t}get vertexFrom(){return this._cursor.vertexFrom}set vertexFrom(t){this._cursor.vertexFrom=t}get vertexCount(){return this._cursor.vertexCount}set vertexCount(t){this._cursor.vertexCount=t}get sortKey(){return this._cursor.sortKey}set sortKey(t){this._cursor.sortKey=t}get index(){return this._cursor._indexStart+this._cursor._index}seekIndex(t){let e=t
for(this._cursor=this._head;this._cursor;){const t=this._cursor.size()
if(e<t)return this._cursor._index=e,!0
e-=t,this._cursor=this._cursor._link}return!1}forEach(t){const e=this.getCursor()
for(;e.next();)t(e)}link(t){if(!this._head)return void(this._head=t._head)
let e=this._head
for(;e._link;)e=e._link
e._link=t._head,e._link._indexStart=e._indexStart+e.size()}getCursor(){return this.copy()}lookup(t){for(this._cursor=this._head;this._cursor&&!this._cursor.lookup(t);){if(!this._cursor._link)return!1
this._cursor=this._cursor._link}return!!this._cursor}copy(){var t
const e=new a(null==(t=this._head)?void 0:t.copy())
if(!e._head)return e
let s=e._head,i=e._head._link
for(;i;)s._link=i.copy(),s=i,i=s._link
return e}next(){return!!this._cursor&&(!!this._cursor.next()||!!this._cursor._link&&(this._cursor=this._cursor._link,this.next()))}peekId(){var t
return null!=(t=this._cursor.peekId())?t:this._cursor._link.peekId()}delete(t){let e=this._head,s=null
for(;e;){if(e.delete(t))return e.isEmpty()&&(Object(i.l)(s)&&(s._link=e._link),e===this._head&&(this._head=e._link),e===this._cursor&&(this._cursor=e._link)),!0
s=e,e=e._link}return!1}}a.ELEMENTS_PER_RECORD=r.r,a.BYTES_PER_RECORD=a.ELEMENTS_PER_RECORD*Int32Array.BYTES_PER_ELEMENT
class o{constructor(t){this._link=null,this._index=-1,this._indexStart=0,this._packedRecordsF32=null,this._deletedCount=0,this._offsets={instance:null},this._packedRecords=t}static from(t,e=0,s=t.byteLength/this.BYTES_PER_RECORD-e){return new o(new Int32Array(t,e*this.BYTES_PER_RECORD,s*this.ELEMENTS_PER_RECORD))}delete(t){const e=this._index,s=this.lookup(t)
if(s)for(this.id=n,++this._deletedCount;this.next()&&this.id===t;)this.id=n,++this._deletedCount
return this._index=e,s}isEmpty(){return this._deletedCount===this.size()}link(t){this._link?this._link.link(t):this._link=t}lookup(t){if(Object(i.k)(this._offsets.instance)){this._offsets.instance=new Map
const t=this.copy()
t._index=-1
let e=0
for(;t.next();)t.id!==e&&(this._offsets.instance.set(t.id,t._index),e=t.id)}if(!this._offsets.instance.has(t))return!1
const e=this._index
return this._index=this._offsets.instance.get(t),this.id!==n||(this._index=e,!1)}get id(){return this._packedRecords[this._index*o.ELEMENTS_PER_RECORD]}set id(t){this._packedRecords[this._index*o.ELEMENTS_PER_RECORD]=t}get materialKey(){return this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+1]}set materialKey(t){this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+1]=t}get insertAfter(){return this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+2]}get indexFrom(){return this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+3]}set indexFrom(t){this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+3]=t}get indexCount(){return this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+4]}set indexCount(t){this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+4]=t}get vertexFrom(){return this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+5]}set vertexFrom(t){this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+5]=t}get vertexCount(){return this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+6]}set vertexCount(t){this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+6]=t}get sortKey(){return this._packedRecordsF32||(this._packedRecordsF32=new Float32Array(this._packedRecords.buffer)),this._packedRecordsF32[this._index*o.ELEMENTS_PER_RECORD+7]}set sortKey(t){this._packedRecordsF32||(this._packedRecordsF32=new Float32Array(this._packedRecords.buffer)),this._packedRecordsF32[this._index*o.ELEMENTS_PER_RECORD+7]=t}get index(){return this._index}size(){return this._packedRecords.length/o.ELEMENTS_PER_RECORD}next(){for(;++this._index<this.size()&&this.id===n;);return this._index<this.size()}peekId(){const t=(this._index+1)*o.ELEMENTS_PER_RECORD
return t>=this._packedRecords.length?0:this._packedRecords[t]}getCursor(){return this.copy()}copy(){const t=new o(this._packedRecords)
return t._indexStart=this._indexStart,t._link=this._link,t._index=this._index,t._offsets=this._offsets,t._deletedCount=this._deletedCount,t}}o.ELEMENTS_PER_RECORD=r.r,o.BYTES_PER_RECORD=o.ELEMENTS_PER_RECORD*Int32Array.BYTES_PER_ELEMENT},1808:function(t,e,s){"use strict"
s.d(e,"a",(function(){return g}))
var i=s(973),r=s(1208),n=s(1726),a=s(1644),o=s(23),h=s(980),u=s(997),d=s(1093),l=s(1022),c=s(1773),_=s(1187),f=s(1333)
function p(t,e){const s=e.length
if(t<e[0].value||1===s)return e[0].size
for(let i=1;i<s;i++)if(t<e[i].value){const s=(t-e[i-1].value)/(e[i].value-e[i-1].value)
return e[i-1].size+s*(e[i].size-e[i-1].size)}return e[s-1].size}class b{constructor(){this.symbolLevels=[],this.vvColorValues=new Float32Array(8),this.vvColors=new Float32Array(32),this.vvOpacityValues=new Float32Array(8),this.vvOpacities=new Float32Array(8),this.vvSizeMinMaxValue=new Float32Array(4),this.outsideLabelsVisible=!1,this._vvMaterialParameters={vvSizeEnabled:!1,vvColorEnabled:!1,vvRotationEnabled:!1,vvRotationType:"geographic",vvOpacityEnabled:!1},this._technique=c.a}getSizeVVFieldStops(t){const e=this._vvSizeFieldStops
if(e)switch(e.type){case"static":return e
case"level-dependent":return Object(o.v)(e.levels[t],()=>{let s=1/0,i=0
for(const r in e.levels){const e=parseFloat(r),n=Math.abs(t-e)
n<s&&(s=n,i=e)}if(s===1/0)return{sizes:new Float32Array([0,0,0,0,0,0]),values:new Float32Array([0,0,0,0,0,0])}
const r=2**((t-i)/2),n=Object(o.u)(e.levels[i]),a=new Float32Array(n.values)
return a[2]*=r,a[3]*=r,{sizes:Object(o.u)(n.sizes),values:a}})
default:return}}get vvMaterialParameters(){return this._vvMaterialParameters}update(t){Object(o.l)(this._vvInfo)&&this._updateVisualVariables(this._vvInfo.vvRanges,t)}setInfo(t,e,s){this._updateEffects(s),this._vvInfo=e,this._technique=Object(_.c)(t),this.rendererSchema=this._technique.createOrUpdateRendererSchema(this.rendererSchema,t)}getVariation(){return{...this._technique.getVariation(this.rendererSchema),outsideLabelsVisible:this.outsideLabelsVisible,supportsTextureFloat:Object(f.a)("2d").supportsTextureFloat}}getVariationHash(){return this._technique.getVariationHash(this.rendererSchema)<<1|(this.outsideLabelsVisible?1:0)}_updateEffects(t){Object(o.l)(t)?this.outsideLabelsVisible=t.excludedLabelsVisible:this.outsideLabelsVisible=!1}_updateVisualVariables(t,e){const s=this._vvMaterialParameters
if(s.vvOpacityEnabled=!1,s.vvSizeEnabled=!1,s.vvColorEnabled=!1,s.vvRotationEnabled=!1,!t)return
const i=t.size
if(i){if(s.vvSizeEnabled=!0,i.minMaxValue){const t=i.minMaxValue
let s,r
if(Object(l.r)(t.minSize)&&Object(l.r)(t.maxSize))if(Object(l.v)(t.minSize)&&Object(l.v)(t.maxSize))s=Object(h.h)(t.minSize),r=Object(h.h)(t.maxSize)
else{const i=e.scale
s=Object(h.h)(p(i,t.minSize.stops)),r=Object(h.h)(p(i,t.maxSize.stops))}this.vvSizeMinMaxValue.set([t.minDataValue,t.maxDataValue,s,r])}if(i.scaleStops&&(this.vvSizeScaleStopsValue=Object(h.h)(p(e.scale,i.scaleStops.stops))),i.unitValue){const t=Object(u.g)(e.spatialReference)/d.a[i.unitValue.unit]
this.vvSizeUnitValueToPixelsRatio=t/e.resolution}i.fieldStops&&(this._vvSizeFieldStops=i.fieldStops)}const r=t.color
r&&(s.vvColorEnabled=!0,this.vvColorValues.set(r.values),this.vvColors.set(r.colors))
const n=t.opacity
n&&(s.vvOpacityEnabled=!0,this.vvOpacityValues.set(n.values),this.vvOpacities.set(n.opacities))
const a=t.rotation
a&&(s.vvRotationEnabled=!0,s.vvRotationType=a.type)}}class g extends a.a{constructor(t){super(t),this._rendererInfo=new b,this._materialItemsRequestQueue=new r.a,this.attributeView=new n.a(()=>this.onAttributeStoreUpdate())}destroy(){this.children.forEach(t=>t.destroy()),this.removeAllChildren(),this.attributeView.destroy(),this._materialItemsRequestQueue.clear()}setRendererInfo(t,e,s){this._rendererInfo.setInfo(t,e,s),this.requestRender()}async getMaterialItems(t,e){if(!t||0===t.length)return[]
const s=Object(i.e)()
return this._materialItemsRequestQueue.push({items:t,abortOptions:e,resolver:s}),this.requestRender(),s.promise}doRender(t){if(t.context.capabilities.enable("textureFloat"),t.context.capabilities.enable("vao"),this._materialItemsRequestQueue.length>0){let e=this._materialItemsRequestQueue.pop()
for(;e;)this._processMaterialItemRequest(t,e),e=this._materialItemsRequestQueue.pop()}super.doRender(t)}renderChildren(t){for(const e of this.children)e.commit(t)
this._rendererInfo.update(t.state),super.renderChildren(t)}updateTransforms(t){if(this.children.some(t=>t.hasData))for(const e of this.children)e.setTransform(t)}createRenderParams(t){const e=super.createRenderParams(t)
return e.rendererInfo=this._rendererInfo,e.attributeView=this.attributeView,e}onAttributeStoreUpdate(){}_processMaterialItemRequest(t,{items:e,abortOptions:s,resolver:i}){const{painter:r,pixelRatio:n}=t,a=e.map(t=>r.textureManager.rasterizeItem(t.symbol,n,t.glyphIds,s))
Promise.all(a).then(t=>{if(!this.stage)return void i.reject()
const s=t.map((t,s)=>({id:e[s].id,mosaicItem:t}))
i.resolve(s)},i.reject)}}},1886:function(t,e,s){"use strict"
s.d(e,"a",(function(){return r}))
var i=s(23)
class r{constructor(t){this.size=0,this._start=0,this.maxSize=t,this._buffer=new Array(t)}get entries(){return this._buffer}enqueue(t){if(this.size===this.maxSize){const e=this._buffer[this._start]
return this._buffer[this._start]=t,this._start=(this._start+1)%this.maxSize,e}return this._buffer[(this._start+this.size++)%this.maxSize]=t,null}dequeue(){if(0===this.size)return null
const t=this._buffer[this._start]
return this._buffer[this._start]=null,this.size--,this._start=(this._start+1)%this.maxSize,t}peek(){return 0===this.size?null:this._buffer[this._start]}find(t){if(0===this.size)return null
for(const e of this._buffer)if(Object(i.l)(e)&&t(e))return e
return null}clear(t){let e=this.dequeue()
for(;Object(i.l)(e);)t&&t(e),e=this.dequeue()}}},2130:function(t,e,s){"use strict"
s.d(e,"a",(function(){return n})),s.d(e,"b",(function(){return r}))
var i=s(23)
class r{constructor(t){if(this.next=null,!Array.isArray(t))return void(this.data=t)
this.data=t[0]
let e=this
for(let s=1;s<t.length;s++)e.next=new r([t[s]]),e=e.next}*values(){let t=this
for(;t;)yield t.data,t=t.next}forEach(t){let e=this
for(;e;)t(e.data),e=e.next}find(t){var e
return t(this.data)?this:null==(e=this.next)?void 0:e.find(t)}max(t,e=this){const s=t(this.data)>t(e.data)?this:e
return this.next?this.next.max(t,s):s}remove(t,e=null){var s,i
return this===t?e?(e.next=this.next,e):this.next:null!=(s=null==(i=this.next)?void 0:i.remove(t,this))?s:null}get last(){return this.next?this.next.last:this}}class n{constructor(t){this._head=null,Object(i.k)(t)||(this._head=new r(t))}get head(){return this._head}maxAvailableSpace(){if(Object(i.k)(this._head))return 0
const t=this._head.max(t=>t.end-t.start)
return t.data.end-t.data.start}firstFit(t){if(Object(i.k)(this._head))return null
let e=null,s=this._head
for(;s;){const i=s.data.end-s.data.start
if(i===t)return e?e.next=s.next:this._head=s.next,s.data.start
if(i>t){const e=s.data.start
return s.data.start+=t,e}e=s,s=s.next}return null}free(t,e){const s=t+e
if(Object(i.k)(this._head)){const e=new r({start:t,end:s})
return void(this._head=e)}if(s<=this._head.data.start){if(s===this._head.data.start)return void(this._head.data.start-=e)
const i=new r({start:t,end:s})
return i.next=this._head,void(this._head=i)}let n=this._head,a=n.next
for(;a;){if(a.data.start>=s){if(n.data.end===t){if(n.data.end+=e,n.data.end===a.data.start){const t=a.data.end-a.data.start
return n.data.end+=t,void(n.next=a.next)}return}if(a.data.start===s)return void(a.data.start-=e)
const i=new r({start:t,end:s})
return i.next=n.next,void(n.next=i)}n=a,a=a.next}if(t===n.data.end)return void(n.data.end+=e)
const o=new r({start:t,end:s})
n.next=o}}},2297:function(t,e,s){"use strict"
s.d(e,"a",(function(){return u})),s.d(e,"b",(function(){return o}))
var i=s(235),r=s(23),n=s(2130)
const a=Object(i.a)("esri-2d-log-allocations")
class o{constructor(t,e){this._array=t,this._pool=e}get array(){return this._array}get length(){return this._array.length}static create(t,e){const s=e.acquire(t)
return new o(s,e)}expand(t){const e=this._pool.acquire(t)
e.set(this._array),this._pool.release(this._array),this._array=e}destroy(){this._pool.release(this._array)}set(t,e){this._array.set(t._array,e)}slice(){const t=this._pool.acquire(this._array.byteLength)
return t.set(this._array),new o(t,this._pool)}}class h{constructor(){this._data=new ArrayBuffer(h.BYTE_LENGTH),this._freeList=new n.a({start:0,end:this._data.byteLength})}static get BYTE_LENGTH(){return 64e6}get buffer(){return this._data}allocate(t){const e=this._freeList.firstFit(t)
return Object(r.k)(e)?null:new Uint32Array(this._data,e,t/Uint32Array.BYTES_PER_ELEMENT)}free(t){this._freeList.free(t.byteOffset,t.byteLength)}}class u{constructor(){this._bytesAllocated=0,this._pages=[],this._pagesByBuffer=new Map,this._addPage()}destroy(){this._pages=[],this._pagesByBuffer=null}get _bytesTotal(){return this._pages.length*h.BYTE_LENGTH}acquire(t){if(this._bytesAllocated+=t,a&&console.log(`Allocating ${t}, (${this._bytesAllocated} / ${this._bytesTotal})`),t>h.BYTE_LENGTH)return new Uint32Array(t/Uint32Array.BYTES_PER_ELEMENT)
for(const e of this._pages){const s=e.allocate(t)
if(Object(r.l)(s))return s}return Object(r.w)(this._addPage().allocate(t),"Expected to allocate page")}release(t){this._bytesAllocated-=t.byteLength,a&&console.log(`Freeing ${t.byteLength}, (${this._bytesAllocated} / ${this._bytesTotal})`)
const e=this._pagesByBuffer.get(t.buffer)
e&&e.free(t)}_addPage(){const t=new h
return this._pages.push(t),this._pagesByBuffer.set(t.buffer,t),t}}},3088:function(t,e,s){"use strict"
s.r(e),s.d(e,"default",(function(){return B}))
var i=s(968),r=s(235),n=s(23),a=s(973),o=(s(233),s(971),s(445),s(446),s(969)),h=s(996),u=s(1886),d=s(1192),l=s(1003),c=s(1022),_=s(1744)
class f{constructor(t){this._savedCursor=null,this._savedOffset=null,this._head=t,this._cursor=t}static from(t){const e=p.from(new Float32Array(t))
return new f(e)}get id(){return this._cursor.id}get baseZoom(){return this._cursor.baseZoom}get anchorX(){return this._cursor.anchorX}get anchorY(){return this._cursor.anchorY}get directionX(){return this._cursor.directionX}get directionY(){return this._cursor.directionY}get size(){return this._cursor.size}get materialKey(){return this._cursor.materialKey}get boundsCount(){return this._cursor.boundsCount}computedMinZoom(){return this._cursor.computedMinZoom()}setComputedMinZoom(t){return this._cursor.setComputedMinZoom(t)}boundsComputedAnchorX(t){return this._cursor.boundsComputedAnchorX(t)}boundsComputedAnchorY(t){return this._cursor.boundsComputedAnchorY(t)}setBoundsComputedAnchorX(t,e){return this._cursor.setBoundsComputedAnchorX(t,e)}setBoundsComputedAnchorY(t,e){return this._cursor.setBoundsComputedAnchorY(t,e)}boundsX(t){return this._cursor.boundsX(t)}boundsY(t){return this._cursor.boundsY(t)}boundsWidth(t){return this._cursor.boundsWidth(t)}boundsHeight(t){return this._cursor.boundsHeight(t)}link(t){if(Object(n.l)(t._head))return this._cursor.link(t._head)}getCursor(){return this.copy()}copy(){var t
const e=new f(null==(t=this._head)?void 0:t.copy())
if(!e._head)return e
let s=e._head,i=e._head._link
for(;i;)s._link=i.copy(),s=i,i=s._link
return e}peekId(){var t
return null!=(t=this._cursor.peekId())?t:this._cursor._link.peekId()}nextId(){const t=this.id
for(;t===this.id;)if(!this.next())return!1
return!0}save(){this._savedCursor=this._cursor,this._savedOffset=this._cursor._offset}restore(){this._savedCursor&&(this._cursor=this._savedCursor),null!=this._savedOffset&&(this._cursor._offset=this._savedOffset)}next(){if(!this._cursor)return!1
if(!this._cursor.next()){if(!this._cursor._link)return!1
this._cursor=this._cursor._link,this._cursor._offset=0}return!0}lookup(t){for(this._cursor=this._head;this._cursor&&!this._cursor.lookup(t);){if(!this._cursor._link)return!1
this._cursor=this._cursor._link}return!!this._cursor}delete(t){let e=this._head,s=null
for(;e;){if(e.delete(t))return e.isEmpty()&&Object(n.l)(s)&&(s._link=e._link),!0
s=e,e=e._link}return!1}}class p{constructor(t){this._offset=-1,this._link=null,this._count=0,this._deletedCount=0,this._offsets={instance:null},this._buffer=t}static from(t){return new p(new Float32Array(t))}isEmpty(){return this._deletedCount===this.count}get count(){return this._count||(this._count=this._computeCount()),this._count}get id(){return this._buffer[this._offset+0]}set id(t){this._buffer[this._offset+0]=t}get baseZoom(){return this._buffer[this._offset+1]}get anchorX(){return this._buffer[this._offset+2]}get anchorY(){return this._buffer[this._offset+3]}get directionX(){return this._buffer[this._offset+4]}get directionY(){return this._buffer[this._offset+5]}get size(){return this._buffer[this._offset+6]}get materialKey(){return this._buffer[this._offset+7]}computedMinZoom(){return this._buffer[this._offset+8]}setComputedMinZoom(t){this._buffer[this._offset+8]=t}get boundsCount(){return this._buffer[this._offset+9]}boundsComputedAnchorX(t){return this._buffer[this._offset+10+6*t+0]}boundsComputedAnchorY(t){return this._buffer[this._offset+10+6*t+1]}setBoundsComputedAnchorX(t,e){this._buffer[this._offset+10+6*t+0]=e}setBoundsComputedAnchorY(t,e){this._buffer[this._offset+10+6*t+1]=e}boundsX(t){return this._buffer[this._offset+10+6*t+2]}boundsY(t){return this._buffer[this._offset+10+6*t+3]}boundsWidth(t){return this._buffer[this._offset+10+6*t+4]}boundsHeight(t){return this._buffer[this._offset+10+6*t+5]}link(t){let e=this
for(;e._link;)e=e._link
e._link=t}getCursor(){return this.copy()}copy(){const t=new p(this._buffer)
return t._link=this._link,t._offset=this._offset,t._deletedCount=this._deletedCount,t._offsets=this._offsets,t._count=this._count,t}peekId(){const t=this._offset+10+6*this.boundsCount+0
return t>=this._buffer.length?0:this._buffer[t]}next(){let t=0
for(;this._offset<this._buffer.length&&t++<100&&(-1===this._offset?this._offset=0:this._offset+=10+6*this.boundsCount,4294967296===this.id););return 4294967296!==this.id&&this._offset<this._buffer.length}delete(t){const e=this._offset,s=this.lookup(t)
if(s)for(this.id=4294967295,++this._deletedCount;this.next()&&this.id===t;)this.id=4294967295,++this._deletedCount
return this._offset=e,s}lookup(t){const e=this._offset
if(Object(n.k)(this._offsets.instance)){this._offsets.instance=new Map
const t=this.copy()
t._offset=-1
let e=0
for(;t.next();)t.id!==e&&(this._offsets.instance.set(t.id,t._offset),e=t.id)}return!!this._offsets.instance.has(t)&&(this._offset=this._offsets.instance.get(t),4294967296!==this.id||(this._offset=e,!1))}_computeCount(){const t=this._offset
let e=0
for(this._offset=-1;this.next();)e++
return this._offset=t,e}}var b=s(2130)
class g{constructor(t,e,s,i,r){this.target=t,this.geometryType=e,this.materialKey=s,this.indexFrom=i,this.indexCount=r}get indexEnd(){return this.indexFrom+this.indexCount}extend(t){this.indexCount+=t}}class x{constructor(t,e){this.geometryType=0,this._target=t,this.geometryType=e}static from(t,e,s,i){const r=new x(t,e)
if(Object(n.l)(i))for(const t of i)s.seekIndex(t),r.addRecord(s)
else for(;s.next();)r.addRecord(s)
return r}addRecord(t){const e=this._target,s=this.geometryType,i=t.materialKey
let r=t.indexFrom,a=t.indexCount
const o=t.vertexFrom,h=t.vertexCount
if(a||(r=o,a=h),Object(n.k)(this._head)){const t=new g(e,s,i,r,a)
return void(this._head=new b.b(t))}let u=null,d=this._head
for(;d;){if(r<d.data.indexFrom)return this._insert(i,r,a,u,d)
u=d,d=d.next}this._insert(i,r,a,u,null)}forEach(t){Object(n.l)(this._head)&&this._head.forEach(t)}*infos(){if(Object(n.l)(this._head))for(const t of this._head.values())yield t}_insert(t,e,s,i,r){if(Object(n.k)(i)&&Object(n.k)(r)){const i=new g(this._target,this.geometryType,t,e,s)
this._head=new b.b(i)}return Object(n.k)(i)&&Object(n.l)(r)?this._insertAtHead(t,e,s,r):Object(n.l)(i)&&Object(n.k)(r)?this._insertAtEnd(t,e,s,i):Object(n.l)(i)&&Object(n.l)(r)?this._insertAtMiddle(t,e,s,i,r):void 0}_insertAtHead(t,e,s,i){const r=e+s
if(t===i.data.materialKey&&r===i.data.indexFrom)i.data.indexFrom=e,i.data.indexCount+=s
else{const r=new g(this._target,this.geometryType,t,e,s)
this._head=new b.b(r),this._head.next=i}}_insertAtEnd(t,e,s,i){if(i.data.materialKey===t&&i.data.indexEnd===e)i.data.indexCount+=s
else{const r=new g(this._target,this.geometryType,t,e,s),n=new b.b(r)
i.next=n}}_insertAtMiddle(t,e,s,i,r){const n=e+s
if(i.data.materialKey===t&&i.data.indexEnd===e)i.data.indexCount+=s,i.data.materialKey===r.data.materialKey&&i.data.indexEnd===r.data.indexFrom&&(i.data.indexCount+=r.data.indexCount,i.next=r.next)
else if(t===r.data.materialKey&&n===r.data.indexFrom)r.data.indexFrom=e,r.data.indexCount+=s
else{const n=new g(this._target,this.geometryType,t,e,s),a=new b.b(n)
i.next=a,a.next=r}}}var y=s(2297),m=s(1068),v=s(984)
class E{constructor(t,e,s,i){const r=y.b.create(e*s*Uint32Array.BYTES_PER_ELEMENT,i)
this.size=e,this.strideInt=s,this.bufferType=t,this.dirty={start:1/0,end:0},this._gpu=null,this._cpu=r,this.clear()}get elementSize(){return this._cpu.length/this.strideInt}get invalidated(){return this.bufferSize>0&&!this._gpu}get invalidatedComputeBuffer(){return this.bufferSize>0&&!this._gpuComputeTriangles}invalidate(){this._invalidateTriangleBuffer(),Object(n.b)(this._gpu,t=>t.dispose()),this._gpu=null}_invalidateTriangleBuffer(){Object(n.b)(this._gpuComputeTriangles,t=>t.dispose()),this._gpuComputeTriangles=null}destroy(){Object(n.b)(this._gpu,t=>t.dispose()),Object(n.b)(this._gpuComputeTriangles,t=>t.dispose()),Object(n.b)(this._cpu,t=>t.destroy()),Object(n.b)(this._cpu2,t=>t.destroy())}clear(){this.dirty.start=1/0,this.dirty.end=0,this.freeList=new b.a({start:0,end:this._cpu.length/this.strideInt}),this.fillPointer=0}ensure(t){if(!(this.maxAvailableSpace()>=t)&&t*this.strideInt>this._cpu.length-this.fillPointer){this.invalidate()
const e=this._cpu.length/this.strideInt,s=Math.round(1.25*(e+t)),i=s*this.strideInt
this._cpu.expand(i*Uint32Array.BYTES_PER_ELEMENT),this.freeList.free(e,s-e)}}set(t,e){this._cpu.array[t]!==e&&(this._cpu.array[t]=e,this.dirty.start=Math.min(t,this.dirty.start),this.dirty.end=Math.max(t,this.dirty.end))}getGPUBuffer(t,e=!1){if(!this.bufferSize)return null
if(e){if("index"!==this.bufferType)throw new Error("Tired to get triangle buffer, but target is not an index buffer")
return Object(n.k)(this._gpuComputeTriangles)&&(this._gpuComputeTriangles=this._createComputeBuffer(t)),this._gpuComputeTriangles}return Object(n.k)(this._gpu)&&(this._gpu=this._createBuffer(t)),this._gpu}getCPUBuffer(){if(!this._cpu2){const t=this._cpu.slice()
this._cpu2=t}return this._cpu2.length!==this._cpu.length&&this._cpu2.expand(this._cpu.length*this._cpu.array.BYTES_PER_ELEMENT),this._cpu2.set(this._cpu),this._cpu2}get bufferSize(){return this._cpu.length/this.strideInt}maxAvailableSpace(){return this.freeList.maxAvailableSpace()}insert(t,e,s,i){const r=s*this.strideInt
if(!r)return 0
const a=e*this.strideInt*Uint32Array.BYTES_PER_ELEMENT,o=new Uint32Array(t,a,r),h=Object(n.w)(this.freeList.firstFit(s),"First fit region must be defined")*this.strideInt,u=r,d=h/this.strideInt-e
if(0!==i)for(let t=0;t<o.length;t++)o[t]+=i
return this._cpu.array.set(o,h),this.dirty.start=Math.min(this.dirty.start,h),this.dirty.end=Math.max(this.dirty.end,h+u),this.fillPointer=Math.max(this.fillPointer,h+u),d}free(t,e,s){const i=t*this.strideInt,r=(t+e)*this.strideInt
if(!0===s)for(let s=t;s!==t+e;s++)this._cpu.array[s*this.strideInt]=2147450879
this.dirty.start=Math.min(this.dirty.start,i),this.dirty.end=Math.max(this.dirty.end,r),this.freeList.free(t,e)}upload(){if(this.dirty.end){if(this._invalidateTriangleBuffer(),Object(n.k)(this._gpu))return this.dirty.start=1/0,void(this.dirty.end=0)
this._gpu.setSubData(this._cpu.array,this.dirty.start,this.dirty.start,this.dirty.end),this.dirty.start=1/0,this.dirty.end=0}}_createBuffer(t){const e=v.D.DYNAMIC_DRAW
return"index"===this.bufferType?m.a.createIndex(t,e,this._cpu.array):m.a.createVertex(t,e,this._cpu.array)}_createComputeBuffer(t){const e=v.D.DYNAMIC_DRAW,s=new Uint32Array(this.fillPointer/3)
for(let t=0;t<this.fillPointer;t+=3)s[t/3]=this._cpu.array[t]
return m.a.createIndex(t,e,s)}}var O=s(1745),w=s(1116)
class R{constructor(t,e){this._vaos=new Map,this._indicesInvalid=!1,this.geometryType=t,this._stage=e}destroy(){for(const[t,e]of this._vaos)Object(n.l)(e)&&e.dispose(!1)
this._indexBuffer=Object(n.e)(this._indexBuffer),this._vertexBuffer=Object(n.e)(this._vertexBuffer)}insert(t,e,s){if(!t.records.byteLength)return
const i=t.stride
if(this._vertexBuffer&&this._indexBuffer){const s=t.indices.byteLength/4,r=t.vertices.byteLength/i
this._indexBuffer.ensure(s),this._vertexBuffer.ensure(r)
const{vertices:a,indices:o}=t,h=O.a.from(t.records),u=this._vertexBuffer.insert(a,0,a.byteLength/i,0),d=this._indexBuffer.insert(o,0,o.byteLength/4,u)
if(h.forEach(t=>{t.indexFrom+=d,t.vertexFrom+=u}),Object(n.w)(this._records,"Expected records to be defined").link(h),e)this._indicesInvalid=!0
else if(this._displayList){const t=h.getCursor()
for(;t.next();)this._displayList.addRecord(t)}}else{const s=t.indices.byteLength/4,r=t.vertices.byteLength/i,n=i/Uint32Array.BYTES_PER_ELEMENT,a=this._stage.bufferPool
this._records=O.a.from(t.records),this._indexBuffer=new E("index",s,1,a),this._vertexBuffer=new E("vertex",r,n,a),this._indexBuffer.insert(t.indices,0,t.indices.byteLength/4,0),this._vertexBuffer.insert(t.vertices,0,t.vertices.byteLength/i,0),e&&(this._indicesInvalid=!0)}}remove(t){if(!Object(n.k)(this._records))for(const e of t){const t=this._records.getCursor()
if(!t.lookup(e))continue
const s=t.indexFrom,i=t.vertexFrom
let r=t.indexCount,n=t.vertexCount
for(;t.next()&&t.id===e;)r+=t.indexCount,n+=t.vertexCount
this._indexBuffer.free(s,r),this._vertexBuffer.free(i,n,!0),this._records.delete(e)}}getVAO(t,e,s,i){if(!this._vertexBuffer||!this._indexBuffer||Object(n.k)(this._records)||!this._vertexBuffer.bufferSize)return null
const r=i?1:0
let a=this._vaos.get(r);(this._vertexBuffer.invalidated||this._indexBuffer.invalidated||i&&this._indexBuffer.invalidatedComputeBuffer)&&(Object(n.b)(a,t=>t.dispose(!1)),a=null),this._vertexBuffer.upload(),this._indexBuffer.upload()
const o=this._indexBuffer.getGPUBuffer(t,1===r),h=this._vertexBuffer.getGPUBuffer(t)
return a||(a=new w.a(t,s,e,{geometry:h},o),this._vaos.set(r,a)),a}forEachCommand(t){if(!Object(n.k)(this._records)){if(this._sortIndices(this._records),!this._displayList){const t=this._cursorIndexOrder
this._displayList=x.from(this,this.geometryType,this._records.getCursor(),t)}this._displayList.forEach(t)}}_sortIndices(t){const e=!!this._indexBuffer.bufferSize
if(!this._indicesInvalid)return
this._indicesInvalid=!1
let s=0
const i=t.getCursor(),r=[],n=[],a=[]
for(;i.next();)n.push(i.index),a.push(i.sortKey),r.push(i.id)
n.sort((t,e)=>{const s=a[e],i=a[t]
return i===s?r[e]-r[t]:s-i})
const o=t.getCursor(),h=e?this._indexBuffer.getCPUBuffer():this._vertexBuffer.getCPUBuffer()
for(const t of n){if(!o.seekIndex(t))throw new Error("Expected to find index")
if(e){const{indexFrom:t,indexCount:e}=o
o.indexFrom=s
for(let i=0;i<e;i++)this._indexBuffer.set(s++,h.array[t+i])}else{const{vertexFrom:t,vertexCount:e}=o,i=this._vertexBuffer.strideInt,r=t*i,n=r+e*i
o.vertexFrom=s/i
for(let t=r;t<n;t++)this._vertexBuffer.set(s++,h.array[t])}}this._cursorIndexOrder=n,this._displayList=null}}let T=0
class S extends _.a{constructor(t,e,s,i,r,n){super(t,e,s,i),this.instanceId=T++,this.patchCount=0,this._renderState={current:{geometry:new Map,metrics:null},next:null,swap:!1,swapFrames:0,locked:!1},this._patches=new u.a(100),this._bufferPatches=new u.a(100),this._lastCommitTime=0,this.transforms.labelMat2d=Object(d.a)(),this._store=r,this._requestLabelUpdate=n}destroy(){super.destroy(),this._renderState.current.geometry.forEach(t=>t.destroy()),Object(n.l)(this._renderState.next)&&this._renderState.next.geometry.forEach(t=>t.destroy()),this._renderState.current=null,this._renderState.next=null}get labelMetrics(){return this._renderState.current.metrics}get hasData(){return!!this._renderState.current.geometry.size}getGeometry(t){return this._renderState.current.geometry.get(t)}patch(t,e){this.patchCount++,t.clear&&this._patches.size>=50&&this._dropPatches()
const s=t,i=s.addOrUpdate&&this.key.id!==s.addOrUpdate.tileKeyOrigin
e&&i?this._bufferPatches.enqueue(s):(s.sort=s.sort&&!e,this._patches.enqueue(s)),this.requestRender()}commit(t){if(this._lastCommitTime!==t.time){this._lastCommitTime=t.time
for(let t=0;t<4;t++)this._updateMesh(),this.isReady&&this._updateBufferMesh()
this._renderState.swap&&(this._swapRenderStates(),this.requestRender())}}lock(){this._renderState.locked=!0}unlock(){this._renderState.locked=!1,this._flushUpdates(),this._swap()}_swapRenderStates(){if(this._renderState.next){if(this._renderState.locked)return this._renderState.swap=!0,void this.requestRender()
this._renderState.swap=!0,this._swap()}}_swap(){this._renderState.swap&&(this._renderState.swap=!1,Object(n.l)(this._renderState.next)&&(this._renderState.current.geometry.forEach(t=>t.destroy()),this._renderState.current=this._renderState.next,this._renderState.next=null,this._requestLabelUpdate()))}_flushUpdates(){let t=this._patches.maxSize
for(;this._patches.size&&t--;)this._updateMesh(),this._swap()}_updateBufferMesh(){const t=this._bufferPatches.peek()
if(!Object(n.l)(t)||!t.clear||null===this._renderState.next)for(;this._bufferPatches.size;){const t=this._bufferPatches.dequeue()
Object(n.l)(t)&&this._patchBuffer(t)}}_updateMesh(){const t=this._patches.dequeue()
if(Object(n.l)(t)){if(Object(r.a)("esri-2d-update-debug")){var e
const r=t,n=null==(e=r.addOrUpdate)?void 0:e.tileKeyOrigin,o=this.key.id===n?"SELF":n
let h=""
for(let t=0;t<5;t++){var s,i,a
h+=null!=(s=r.addOrUpdate)&&null!=(i=s.data[t])&&null!=(a=i.records)&&a.byteLength?1:0}console.debug(this.key.id,"FeatureTile:patch",`[clear: ${r.clear} origin: ${o}, end:${r.end} data:${h}]`)}!0===t.clear&&(Object(n.l)(this._renderState.next)&&(this._renderState.next.geometry.forEach(t=>t.destroy()),this._renderState.next=null),this._renderState.next={geometry:new Map,metrics:null},Object(r.a)("esri-2d-update-debug")&&console.debug(this.key.id,"FeatureTile:_updateMesh - Creating new renderState")),this.requestRender(),this._patch(t),t.end&&(Object(r.a)("esri-2d-update-debug")&&console.debug(this.key.id,"FeatureTile:_updateMesh - Encountered end message"),this.ready(),this._swapRenderStates())}}_patch(t){Object(c.h)(e=>{this._remove(e,t.remove),this._insert(e,t,!1)})}_patchBuffer(t){Object(c.h)(e=>{this._insert(e,t,!0)})}_insert(t,e,s){try{var i,a
const o=Object(n.v)(this._renderState.next,this._renderState.current),h=null==(i=e.addOrUpdate)?void 0:i.data[t],u=o.geometry
if(Object(n.k)(h))return
u.has(t)||(Object(r.a)("esri-2d-update-debug")&&console.debug(this.key.id,"FeatureTile:_insert - Creating geometry buffer "+t),u.set(t,new R(t,this.stage))),Object(r.a)("esri-2d-update-debug")&&console.debug(this.key.id,`FeatureTile:_insert - Inserting into ${t}, version=${null==(a=e.addOrUpdate)?void 0:a.version} stride=${h.stride}`),u.get(t).insert(h,e.sort,s),t===l.d.LABEL&&this._insertLabelMetrics(e.type,h.metrics,e.clear)}catch(t){}}_insertLabelMetrics(t,e,s){const i=Object(n.v)(this._renderState.next,this._renderState.current)
if(Object(n.k)(e))return
const r=f.from(e)
if(Object(n.k)(i.metrics))i.metrics=r
else{if("update"===t){const t=r.getCursor()
for(;t.next();)i.metrics.delete(t.id)}i.metrics.link(r)}}_remove(t,e){const s=Object(n.v)(this._renderState.next,this._renderState.current).geometry.get(t)
e&&e.length&&s&&(s.remove(e),this._removeLabelMetrics(e))}_removeLabelMetrics(t){const{metrics:e}=Object(n.v)(this._renderState.next,this._renderState.current)
if(!Object(n.k)(e)&&t.length)for(const s of t)for(;e.delete(s););}_dropPatches(){const t=new Array
let e=!1
for(;this._patches.size;){const s=this._patches.dequeue()
if(Object(n.k)(s))break
if(s.clear){if(e)break
e=!0}t.push(s)}this._patches.clear(),t.forEach(t=>this._patches.enqueue(t))}}var k=s(1594),j=s(2893),C=s(1706),z=s(1488),M=s(1808)
const V=Object(r.a)("featurelayer-order-by-server-enabled")
class A extends M.a{constructor(t,e,s,i){super(t),this._hitTestsRequests=[],this._layer=s,this._layerView=e,this._onUpdate=i}renderChildren(t){this.attributeView.update(),this.hasAnimation&&t.painter.effects.integrate.draw(t,t.attributeView),super.renderChildren(t)}hasEmptyAttributeView(){return this.attributeView.isEmpty()}isUpdating(){return this.attributeView.isUpdating()}hitTest(t){let e=this._hitTestsRequests.find(({x:e,y:s})=>e===t.x&&s===t.y)
const s=Object(a.e)()
return e?e.resolvers.push(s):(e={x:t.x,y:t.y,resolvers:[s]},this._hitTestsRequests.push(e)),this.requestRender(),s.promise}onTileData(t,e){const s=V&&"orderBy"in this._layer&&this._layer.orderBy,i=s&&(null==s?void 0:s.length)&&!s[0].valueExpression&&s[0].field,r=!!s&&this._layerView.orderByFields===i
t.patch(e,r),this.contains(t)||this.addChild(t),this.requestRender()}onTileError(t){this.contains(t)||this.addChild(t)}updateTransitionProperties(t,e){super.updateTransitionProperties(t,e),this._layerView.featureEffectView.transitionStep(t,e),this._layerView.featureEffectView.transitioning&&this.requestRender()}doRender(t){const{minScale:e,maxScale:s}=this._layer.effectiveScaleRange,i=t.state.scale
i<=(e||1/0)&&i>=s&&super.doRender(t)}afterRender(t){super.afterRender(t),this._hitTestsRequests.length&&this.requestRender()}onAttributeStoreUpdate(){this.hasLabels&&this._layerView.view.labelManager.requestUpdate(),this._onUpdate()}get hasAnimation(){return this.hasLabels}setStencilReference(t){const{rendererSchema:e}=t.rendererInfo
if("dot-density"===(null==e?void 0:e.type)&&(null==e?void 0:e.dotSize)>1||"heatmap"===(null==e?void 0:e.type)){const t=1
for(const e of this.children)e.stencilRef=e.key.level+t}else super.setStencilReference(t)}get hasLabels(){if("sublayers"in this._layer)return this._layer.sublayers.some(t=>{var e
return!(null==(e=t.labelingInfo)||!e.length)&&t.labelsVisible})
const t=this._layer.featureReduction,e=t&&"labelingInfo"in t&&t.labelsVisible&&t.labelingInfo&&t.labelingInfo.length
return this._layer.labelingInfo&&this._layer.labelingInfo.length&&this._layer.labelsVisible||!!e}prepareRenderPasses(t){const e=t.registerRenderPass({name:"label",brushes:[z.a.label],target:()=>this.hasLabels?this.children:null,drawPhase:l.c.LABEL|l.c.LABEL_ALPHA}),s=t.registerRenderPass({name:"geometry",brushes:[z.a.fill,z.a.dotDensity,z.a.line,z.a.marker,z.a.heatmap,z.a.pieChart,z.a.text],target:()=>this.children,enableDefaultDraw:()=>!this._layerView.featureEffectView.hasEffects,effects:[{apply:t.effects.outsideEffect,enable:()=>this._layerView.featureEffectView.hasEffects,args:()=>this._layerView.featureEffectView.excludedEffects},{apply:t.effects.insideEffect,enable:()=>this._layerView.featureEffectView.hasEffects,args:()=>this._layerView.featureEffectView.includedEffects},{apply:t.effects.hittest,enable:()=>!!this._hitTestsRequests.length,args:()=>this._hitTestsRequests}]}),i=t.registerRenderPass({name:"highlight",brushes:[z.a.fill,z.a.dotDensity,z.a.line,z.a.marker,z.a.pieChart,z.a.text],target:()=>this.children,drawPhase:l.c.HIGHLIGHT,enableDefaultDraw:()=>!1,effects:[{apply:t.effects.highlight,enable:()=>!!this._layerView.hasHighlight()}]})
return[...super.prepareRenderPasses(t),s,i,e]}}let L=class extends j.a{constructor(){super(...arguments),this.type="symbol"}install(t){const e=new A(this.tileInfoView,this.layerView,this.layer,()=>this.notifyChange("updating"))
this.featuresView=e,t.addChild(e)}uninstall(t){t.removeChild(this.featuresView),this.featuresView=Object(n.e)(this.featuresView)}fetchResource(t,e){const{url:s}=t,i=this.featuresView.stage
try{return i.resourceManager.fetchResource(s,{signal:e.signal})}catch(t){return Object(a.j)(t)?Promise.resolve({width:0,height:0}):Promise.reject(t)}}isUpdating(){var t
const e=super.isUpdating(),s=!this.featuresView||this.featuresView.isUpdating(),i=null==(t=this.featuresView)?void 0:t.hasEmptyAttributeView(),n=e||s||e&&i
return Object(r.a)("esri-2d-log-updating")&&console.log(`Updating SymbolTileRenderer ${n}\n  -> updatingTiles ${e}\n  -> hasFeaturesView ${!!this.featuresView}\n  -> updatingFeaturesView ${s}`),n}hitTest(t){return this.featuresView.hitTest(t)}supportsRenderer(t){return null!=t&&["simple","class-breaks","unique-value","dot-density","dictionary","heatmap","pie-chart"].includes(t.type)}onConfigUpdate(t){let e=null
if(t&&"visualVariables"in t){const s=(Object(k.c)(t).visualVariables||[]).map(t=>{const e=t.clone()
return"normalizationField"in t&&(e.normalizationField=null),t.valueExpression&&"$view.scale"!==t.valueExpression&&(e.valueExpression=null,e.field="nop"),e})
e=Object(C.a)(s)}this.featuresView.setRendererInfo(t,e,this.layerView.featureEffect)}onTileData(t){const e=this.tiles.get(t.tileKey)
e&&t.data&&this.featuresView.onTileData(e,t.data),this.layerView.view.labelManager.requestUpdate()}onTileError(t){const e=this.tiles.get(t.tileKey)
e&&this.featuresView.onTileError(e)}forceAttributeTextureUpload(){this.featuresView.attributeView.forceTextureUpload()}lockGPUUploads(){this.featuresView.attributeView.lockTextureUpload(),this.tiles.forEach(t=>t.lock())}unlockGPUUploads(){this.featuresView.attributeView.unlockTextureUpload(),this.tiles.forEach(t=>t.unlock())}async getMaterialItems(t){return this.featuresView.getMaterialItems(t)}invalidateLabels(){this.featuresView.hasLabels&&this.layerView.view.labelManager.requestUpdate()}createTile(t){const e=this.tileInfoView.getTileBounds(Object(h.m)(),t),s=this.tileInfoView.getTileResolution(t.level),i=this.featuresView.attributeView
return new S(t,s,e[0],e[3],i,()=>this.layerView.view.labelManager.requestUpdate())}disposeTile(t){this.featuresView.removeChild(t),t.destroy(),this.layerView.view.labelManager.requestUpdate()}}
L=Object(i.a)([Object(o.a)("esri.views.2d.layers.features.tileRenderers.SymbolTileRenderer")],L)
const B=L}}])
