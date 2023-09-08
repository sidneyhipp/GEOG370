(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[46,25,26,750,751,772],{1069:function(e,t,i){"use strict"
var n,r,s,a,o,l,c,u,h,d,f
i.d(t,"a",(function(){return h})),i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return d})),i.d(t,"d",(function(){return r})),i.d(t,"e",(function(){return l})),i.d(t,"f",(function(){return c})),i.d(t,"g",(function(){return s})),i.d(t,"h",(function(){return a})),i.d(t,"i",(function(){return o})),i.d(t,"j",(function(){return f})),i.d(t,"k",(function(){return u})),function(e){e[e.None=0]="None",e[e.Front=1]="Front",e[e.Back=2]="Back",e[e.COUNT=3]="COUNT"}(n||(n={})),function(e){e[e.Less=0]="Less",e[e.Lequal=1]="Lequal",e[e.COUNT=2]="COUNT"}(r||(r={})),function(e){e[e.BACKGROUND=0]="BACKGROUND",e[e.UPDATE=1]="UPDATE"}(s||(s={})),function(e){e[e.NOT_LOADED=0]="NOT_LOADED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(a||(a={})),function(e){e[e.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",e[e.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(o||(o={})),function(e){e[e.Highlight=0]="Highlight",e[e.MaskOccludee=1]="MaskOccludee",e[e.COUNT=2]="COUNT"}(l||(l={})),function(e){e[e.STRETCH=1]="STRETCH",e[e.PAD=2]="PAD"}(c||(c={})),function(e){e[e.CHANGED=0]="CHANGED",e[e.UNCHANGED=1]="UNCHANGED"}(u||(u={})),function(e){e[e.Blend=0]="Blend",e[e.Opaque=1]="Opaque",e[e.Mask=2]="Mask",e[e.MaskBlend=3]="MaskBlend",e[e.COUNT=4]="COUNT"}(h||(h={})),function(e){e[e.OFF=0]="OFF",e[e.ON=1]="ON"}(d||(d={})),function(e){e.DDS_ENCODING="image/vnd-ms.dds",e.KTX2_ENCODING="image/ktx2",e.BASIS_ENCODING="image/x.basis"}(f||(f={}))},1080:function(e,t,i){"use strict"
i.d(t,"a",(function(){return O})),i.d(t,"b",(function(){return y})),i.d(t,"c",(function(){return a})),i.d(t,"d",(function(){return _})),i.d(t,"e",(function(){return g})),i.d(t,"f",(function(){return v})),i.d(t,"g",(function(){return b})),i.d(t,"h",(function(){return m})),i.d(t,"i",(function(){return p})),i.d(t,"j",(function(){return x}))
var n=i(234),r=i(983),s=i(1325)
function a(e){const t=Object(n.a)(e)
return(i=t)&&(Object(r.g)(i)?f(i.rings):Object(r.h)(i)?f(i.paths):Object(r.e)(i)&&d(i.points),o(i)),t
var i}function o(e){e&&(Object(r.f)(e)?e.y=-e.y:Object(r.g)(e)?c(e.rings):Object(r.h)(e)?c(e.paths):Object(r.e)(e)&&l(e.points))}function l(e){if(e){const t=e.length
for(let i=0;i<t;i++)e[i][1]=-e[i][1]}}function c(e){if(e)for(const t of e)l(t)}function u(e){if(e)for(let t=e.length-1;t>0;--t)e[t][0]-=e[t-1][0],e[t][1]-=e[t-1][1]}function h(e){if(e)for(const t of e)u(t)}function d(e){if(e){const t=e.length
for(let i=1;i<t;++i)e[i][0]+=e[i-1][0],e[i][1]+=e[i-1][1]}}function f(e){if(e)for(const t of e)d(t)}function _(e){e&&(o(e),Object(r.g)(e)?h(e.rings):Object(r.h)(e)?h(e.paths):Object(r.e)(e)&&u(e.points))}function m(e){if(e)for(const t of e)p(t)}function p(e){e&&e.reverse()}function g(e,t,i){return[e[0]+(t[0]-e[0])*i,e[1]+(t[1]-e[1])*i]}function b(e){return!(!e||0===e.length)&&e[0][0]===e[e.length-1][0]&&e[0][1]===e[e.length-1][1]}function v(e){return e[4]}function x(e,t){e[4]=t}class y{constructor(e,t,i,n=0){this.isClosed=!1,this.multiPath=null,this.acceptPolygon=t,this.acceptPolyline=i,this.geomUnitsPerPoint=n,this.pathCount=-1,this.pathIndex=-1,this.iteratePath=!1,e&&(Object(r.g)(e)?t&&(this.multiPath=e.rings,this.isClosed=!0):Object(r.h)(e)?i&&(this.multiPath=e.paths,this.isClosed=!1):Object(r.d)(e)&&t&&(this.multiPath=T(e).rings,this.isClosed=!0),this.multiPath&&(this.pathCount=this.multiPath.length)),this.internalPlacement=new s.a}next(){if(!this.multiPath)return null
for(;this.iteratePath||this.pathIndex<this.pathCount-1;){this.iteratePath||this.pathIndex++
const e=this.processPath(this.multiPath[this.pathIndex])
if(e)return e}return this.pathCount=-1,this.pathIndex=-1,this.multiPath=null,null}}class O{constructor(e,t,i,n=0){this.isClosed=!1,this.multiPath=null,this.inputGeometries=e,this.acceptPolygon=t,this.acceptPolyline=i,this.geomUnitsPerPoint=n,this.pathCount=-1,this.pathIndex=-1,this.iteratePath=!1}next(){for(;;){if(!this.multiPath){let e=this.inputGeometries.next()
for(;e;){if(Object(r.g)(e)?this.acceptPolygon&&(this.multiPath=e.rings,this.isClosed=!0):Object(r.h)(e)?this.acceptPolyline&&(this.multiPath=e.paths,this.isClosed=!1):Object(r.d)(e)&&this.acceptPolygon&&(this.multiPath=T(e).rings,this.isClosed=!0),this.multiPath){this.pathCount=this.multiPath.length,this.pathIndex=-1
break}e=this.inputGeometries.next()}if(!this.multiPath)return null}for(;this.iteratePath||this.pathIndex<this.pathCount-1;){this.iteratePath||this.pathIndex++
const e=this.processPath(this.multiPath[this.pathIndex])
if(e)return e}this.pathCount=-1,this.pathIndex=-1,this.multiPath=null}}}function T(e){return{rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]}}},1104:function(e,t,i){"use strict"
i.d(t,"a",(function(){return k})),i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return c})),i.d(t,"d",(function(){return h})),i.d(t,"e",(function(){return u})),i.d(t,"f",(function(){return l})),i.d(t,"g",(function(){return x})),i.d(t,"h",(function(){return a})),i.d(t,"i",(function(){return s}))
var n=i(1069),r=i(984)
function s(e,t,i=r.c.ADD,n=[0,0,0,0]){return{srcRgb:e,srcAlpha:e,dstRgb:t,dstAlpha:t,opRgb:i,opAlpha:i,color:{r:n[0],g:n[1],b:n[2],a:n[3]}}}function a(e,t,i,n,s=r.c.ADD,a=r.c.ADD,o=[0,0,0,0]){return{srcRgb:e,srcAlpha:t,dstRgb:i,dstAlpha:n,opRgb:s,opAlpha:a,color:{r:o[0],g:o[1],b:o[2],a:o[3]}}}const o={face:r.n.BACK,mode:r.j.CCW},l={face:r.n.FRONT,mode:r.j.CCW},c=e=>e===n.b.Back?o:e===n.b.Front?l:null,u={zNear:0,zFar:1},h={r:!0,g:!0,b:!0,a:!0}
function d(e){return T.intern(e)}function f(e){return w.intern(e)}function _(e){return M.intern(e)}function m(e){return I.intern(e)}function p(e){return A.intern(e)}function g(e){return F.intern(e)}function b(e){return D.intern(e)}function v(e){return B.intern(e)}function x(e){return N.intern(e)}class y{constructor(e,t){this._makeKey=e,this._makeRef=t,this._interns=new Map}intern(e){var t
if(!e)return null
const i=this._makeKey(e),n=this._interns
return n.has(i)||n.set(i,this._makeRef(e)),null!=(t=n.get(i))?t:null}}function O(e){return"["+e.join(",")+"]"}const T=new y(S,e=>({__tag:"Blending",...e}))
function S(e){return e?O([e.srcRgb,e.srcAlpha,e.dstRgb,e.dstAlpha,e.opRgb,e.opAlpha,e.color.r,e.color.g,e.color.b,e.color.a]):null}const w=new y(E,e=>({__tag:"Culling",...e}))
function E(e){return e?O([e.face,e.mode]):null}const M=new y(C,e=>({__tag:"PolygonOffset",...e}))
function C(e){return e?O([e.factor,e.units]):null}const I=new y(P,e=>({__tag:"DepthTest",...e}))
function P(e){return e?O([e.func]):null}const A=new y(R,e=>({__tag:"StencilTest",...e}))
function R(e){return e?O([e.function.func,e.function.ref,e.function.mask,e.operation.fail,e.operation.zFail,e.operation.zPass]):null}const F=new y(L,e=>({__tag:"DepthWrite",...e}))
function L(e){return e?O([e.zNear,e.zFar]):null}const D=new y(j,e=>({__tag:"ColorWrite",...e}))
function j(e){return e?O([e.r,e.g,e.b,e.a]):null}const B=new y(z,e=>({__tag:"StencilWrite",...e}))
function z(e){return e?O([e.mask]):null}const N=new y((function(e){return e?O([S(e.blending),E(e.culling),C(e.polygonOffset),P(e.depthTest),R(e.stencilTest),L(e.depthWrite),j(e.colorWrite),z(e.stencilWrite)]):null}),e=>({blending:d(e.blending),culling:f(e.culling),polygonOffset:_(e.polygonOffset),depthTest:m(e.depthTest),stencilTest:p(e.stencilTest),depthWrite:g(e.depthWrite),colorWrite:b(e.colorWrite),stencilWrite:v(e.stencilWrite)}))
class k{constructor(e){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._stateSetters=e}setPipeline(e){(this._pipelineInvalid||e!==this._pipeline)&&(this._setBlending(e.blending),this._setCulling(e.culling),this._setPolygonOffset(e.polygonOffset),this._setDepthTest(e.depthTest),this._setStencilTest(e.stencilTest),this._setDepthWrite(e.depthWrite),this._setColorWrite(e.colorWrite),this._setStencilWrite(e.stencilWrite),this._pipeline=e),this._pipelineInvalid=!1}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}_setBlending(e){this._blending=this._setSubState(e,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}_setCulling(e){this._culling=this._setSubState(e,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}_setPolygonOffset(e){this._polygonOffset=this._setSubState(e,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}_setDepthTest(e){this._depthTest=this._setSubState(e,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}_setStencilTest(e){this._stencilTest=this._setSubState(e,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}_setDepthWrite(e){this._depthWrite=this._setSubState(e,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}_setColorWrite(e){this._colorWrite=this._setSubState(e,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}_setStencilWrite(e){this._stencilWrite=this._setSubState(e,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}_setSubState(e,t,i,n){return(i||e!==t)&&(n(e),this._pipelineInvalid=!0),e}}},1129:function(e,t,i){"use strict"
var n
i.d(t,"a",(function(){return n})),function(e){e[e.Color=0]="Color",e[e.Alpha=1]="Alpha",e[e.FrontFace=2]="FrontFace",e[e.NONE=3]="NONE",e[e.COUNT=4]="COUNT"}(n||(n={}))},1182:function(e,t,i){"use strict"
i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return l})),i.d(t,"d",(function(){return u})),i.d(t,"e",(function(){return h})),i.d(t,"f",(function(){return c})),i.d(t,"g",(function(){return o})),i.d(t,"h",(function(){return s}))
const n=0,r=100
function s(e,t,i){return e[0]=t[0]-i[0],e[1]=t[1]-i[1],e}function a(e,t){return Math.sqrt(e*e+t*t)}function o(e){const t=a(e[0],e[1])
e[0]/=t,e[1]/=t}function l(e,t){return a(e[0]-t[0],e[1]-t[1])}function c(e){return"function"==typeof e}function u(e=2){return 1/Math.max(e,1)}function h(e,t){return[!(null==e||!e.minScale)&&t.scaleToZoom(e.minScale)||n,!(null==e||!e.maxScale)&&t.scaleToZoom(e.maxScale)||r]}},1204:function(e,t,i){"use strict"
i.d(t,"a",(function(){return l}))
var n=i(23),r=i(1e3),s=i(1177),a=i(1023),o=i(984)
class l extends s.a{constructor(){super(...arguments),this._computeDesc=new Map}prepareState({context:e},t){t&&t.includes("hittest")?e.setBlendFunctionSeparate(o.b.ONE,o.b.ONE,o.b.ONE,o.b.ONE):e.setBlendFunctionSeparate(o.b.ONE,o.b.ONE_MINUS_SRC_ALPHA,o.b.ONE,o.b.ONE_MINUS_SRC_ALPHA),e.setBlendingEnabled(!0),e.setColorMask(!0,!0,!0,!0),e.setStencilWriteMask(0),e.setStencilTestEnabled(!0)}draw(e,t,i){const r=this.getGeometryType()
t.commit(e)
const s=t.getGeometry(r)
Object(n.k)(s)||(e.timeline.begin(this.name),e.attributeView.bindTextures(e.context),e.context.setStencilFunction(o.h.EQUAL,t.stencilRef,255),s.forEachCommand(n=>{const r=a.e.load(n.materialKey).symbologyType
this.supportsSymbology(r)&&this.drawGeometry(e,t,n,i)}))}_setSharedUniforms(e,t,i){const{displayLevel:s,pixelRatio:a,state:o,passOptions:l}=t
Object(n.l)(l)&&"hittest"===l.type&&(e.setUniform2fv("u_hittestPos",l.position),e.setUniform1f("u_hittestDist",l.distance)),e.setUniform1f("u_pixelRatio",a),e.setUniformMatrix3fv("u_tileMat3",i.transforms.tileMat3),e.setUniformMatrix3fv("u_viewMat3",o.viewMat3),e.setUniformMatrix3fv("u_dvsMat3",i.transforms.dvs),e.setUniformMatrix3fv("u_displayViewMat3",o.displayViewMat3),e.setUniform1f("u_currentZoom",Math.round(s*r.A)),e.setUniform1i("u_attributeTextureSize",t.attributeView.size),e.setUniform1i("u_attributeData0",r.H),e.setUniform1i("u_attributeData1",r.I),e.setUniform1i("u_attributeData2",r.J),e.setUniform1i("u_attributeData3",r.K),e.setUniform1i("u_attributeData4",r.L),e.setUniform1i("u_attributeData5",r.M)}_setSizeVVUniforms(e,t,i,n){if(e.vvSizeMinMaxValue&&t.setUniform4fv("u_vvSizeMinMaxValue",i.vvSizeMinMaxValue),e.vvSizeScaleStops&&t.setUniform1f("u_vvSizeScaleStopsValue",i.vvSizeScaleStopsValue),e.vvSizeFieldStops){const e=i.getSizeVVFieldStops(n.key.level)
null!=e&&(t.setUniform1fv("u_vvSizeFieldStopsValues",e.values),t.setUniform1fv("u_vvSizeFieldStopsSizes",e.sizes))}e.vvSizeUnitValue&&t.setUniform1f("u_vvSizeUnitValueWorldToPixelsRatio",i.vvSizeUnitValueToPixelsRatio)}_setColorAndOpacityVVUniforms(e,t,i){e.vvColor&&(t.setUniform1fv("u_vvColorValues",i.vvColorValues),t.setUniform4fv("u_vvColors",i.vvColors)),e.vvOpacity&&(t.setUniform1fv("u_vvOpacityValues",i.vvOpacityValues),t.setUniform1fv("u_vvOpacities",i.vvOpacities))}_setRotationVVUniforms(e,t,i){e.vvRotation&&t.setUniform1f("u_vvRotationType","geographic"===i.vvMaterialParameters.vvRotationType?0:1)}_getTriangleDesc(e,t,i=["a_pos"]){const n=t.bufferLayouts.geometry,r=i.map(e=>n.findIndex(t=>t.name===e)),s=`${e}-${r.join("-")}`
let a=this._computeDesc.get(s)
if(!a){const e=t.strides,i=t.strides.geometry,o=new Map(t.attributes),l=n.map(e=>({...e})),c=Math.max(...t.attributes.values()),u={geometry:l}
let h=0
for(const e of r){const t=n[e]
u.geometry.push({count:t.count,name:t.name+"1",divisor:t.divisor,normalized:t.normalized,offset:i+t.offset,stride:i,type:t.type}),u.geometry.push({count:t.count,name:t.name+"2",divisor:t.divisor,normalized:t.normalized,offset:2*i+t.offset,stride:i,type:t.type}),o.set(t.name+"1",c+ ++h),o.set(t.name+"2",c+ ++h)}a={bufferLayouts:u,attributes:o,strides:e},this._computeDesc.set(s,a)}return a}}},1226:function(e,t,i){"use strict"
i.d(t,"a",(function(){return g})),i.d(t,"b",(function(){return p})),i.d(t,"c",(function(){return l})),i.d(t,"d",(function(){return b})),i.d(t,"e",(function(){return v})),i.d(t,"f",(function(){return x})),i.d(t,"g",(function(){return y}))
var n=i(23),r=i(983)
const s=(e,t,i)=>[t,i],a=(e,t,i)=>[t,i,e[2]],o=(e,t,i)=>[t,i,e[2],e[3]]
function l(e){return e?{originPosition:"upper-left"===e.originPosition?"upperLeft":"lower-left"===e.originPosition?"lowerLeft":e.originPosition,scale:e.tolerance?[e.tolerance,e.tolerance]:[1,1],translate:Object(n.l)(e.extent)?[e.extent.xmin,e.extent.ymax]:[0,0]}:null}function c({scale:e,translate:t},i){return Math.round((i-t[0])/e[0])}function u({scale:e,translate:t},i){return Math.round((t[1]-i)/e[1])}function h(e,t,i){const n=[]
let r,s,a,o
for(let l=0;l<i.length;l++){const h=i[l]
l>0?(a=c(e,h[0]),o=u(e,h[1]),a===r&&o===s||(n.push(t(h,a-r,o-s)),r=a,s=o)):(r=c(e,h[0]),s=u(e,h[1]),n.push(t(h,r,s)))}return n.length>0?n:null}function d({scale:e,translate:t},i){return i*e[0]+t[0]}function f({scale:e,translate:t},i){return t[1]-i*e[1]}function _(e,t,i){const n=new Array(i.length)
if(!i.length)return n
const[r,s]=e.scale
let a=d(e,i[0][0]),o=f(e,i[0][1])
n[0]=t(i[0],a,o)
for(let e=1;e<i.length;e++){const l=i[e]
a+=l[0]*r,o-=l[1]*s,n[e]=t(l,a,o)}return n}function m(e,t,i){const n=new Array(i.length)
for(let r=0;r<i.length;r++)n[r]=_(e,t,i[r])
return n}function p(e,t,i,n,r){return t.x=c(e,i.x),t.y=u(e,i.y),t!==i&&(n&&(t.z=i.z),r&&(t.m=i.m)),t}function g(e,t){return e&&t?Object(r.f)(t)?p(e,{},t,!1,!1):Object(r.h)(t)?function(e,t,i,n,r){const l=function(e,t,i,n){const r=[],l=i?n?o:a:n?a:s
for(let i=0;i<t.length;i++){const n=h(e,l,t[i])
n&&n.length>=2&&r.push(n)}return r.length?r:null}(e,i.paths,n,r)
return l?(t.paths=l,t):null}(e,{},t,!1,!1):Object(r.g)(t)?function(e,t,i,n,r){const l=function(e,t,i,n){const r=[],l=i?n?o:a:n?a:s
for(let i=0;i<t.length;i++){const n=h(e,l,t[i])
n&&n.length>=3&&r.push(n)}return r.length?r:null}(e,i.rings,n,r)
return l?(t.rings=l,t):null}(e,{},t,!1,!1):Object(r.e)(t)?function(e,t,i,n,r){var l
return t.points=null!=(l=function(e,t,i,n){return h(e,i?n?o:a:n?a:s,t)}(e,i.points,n,r))?l:[],t}(e,{},t,!1,!1):Object(r.d)(t)?function(e,t,i,n,r){return t.xmin=c(e,i.xmin),t.ymin=u(e,i.ymin),t.xmax=c(e,i.xmax),t.ymax=u(e,i.ymax),t}(e,{},t):null:null}function b(e,t,i,r,l){return Object(n.l)(i)&&(t.points=function(e,t,i,n){return _(e,i?n?o:a:n?a:s,t)}(e,i.points,r,l)),t}function v(e,t,i,r,s){return Object(n.k)(i)||(t.x=d(e,i.x),t.y=f(e,i.y),t!==i&&(r&&(t.z=i.z),s&&(t.m=i.m))),t}function x(e,t,i,r,l){return Object(n.l)(i)&&(t.rings=function(e,t,i,n){return m(e,i?n?o:a:n?a:s,t)}(e,i.rings,r,l)),t}function y(e,t,i,r,l){return Object(n.l)(i)&&(t.paths=function(e,t,i,n){return m(e,i?n?o:a:n?a:s,t)}(e,i.paths,r,l)),t}},1261:function(e,t,i){"use strict"
function n(){return new Float32Array(4)}function r(e){const t=new Float32Array(4)
return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function s(e,t,i,n){const r=new Float32Array(4)
return r[0]=e,r[1]=t,r[2]=i,r[3]=n,r}function a(){return n()}function o(){return s(1,1,1,1)}function l(){return s(1,0,0,0)}function c(){return s(0,1,0,0)}function u(){return s(0,0,1,0)}function h(){return s(0,0,0,1)}i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return s}))
const d=a(),f=o(),_=l(),m=c(),p=u(),g=h()
Object.freeze(Object.defineProperty({__proto__:null,ONES:f,UNIT_W:g,UNIT_X:_,UNIT_Y:m,UNIT_Z:p,ZEROS:d,clone:r,create:n,createView:function(e,t){return new Float32Array(e,t,4)},fromValues:s,ones:o,unitW:h,unitX:l,unitY:c,unitZ:u,zeros:a},Symbol.toStringTag,{value:"Module"}))},1269:function(e,t,i){"use strict"
i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return s})),i.d(t,"d",(function(){return h})),i.d(t,"e",(function(){return c})),i.d(t,"f",(function(){return l})),i.d(t,"g",(function(){return o})),i.d(t,"h",(function(){return u}))
const n=8388607,r=8388608,s=0,a=1,o=e=>(e&r)>>>23,l=e=>e&n,c=e=>o(e)===a?254:255
function u(e){return o(e)===a}function h(e,t){return((t?r:0)|e)>>>0}},1276:function(e,t,i){"use strict"
i.d(t,"a",(function(){return d})),i.d(t,"b",(function(){return h})),i.d(t,"c",(function(){return l})),i.d(t,"d",(function(){return a})),i.d(t,"e",(function(){return f})),i.d(t,"f",(function(){return c})),i.d(t,"g",(function(){return _})),i.d(t,"h",(function(){return u}))
var n=i(1129),r=i(984),s=i(1104)
const a=Object(s.h)(r.b.SRC_ALPHA,r.b.ONE,r.b.ONE_MINUS_SRC_ALPHA,r.b.ONE_MINUS_SRC_ALPHA),o=Object(s.i)(r.b.ONE,r.b.ONE),l=Object(s.i)(r.b.ZERO,r.b.ONE_MINUS_SRC_ALPHA)
function c(e){return e===n.a.FrontFace?null:e===n.a.Alpha?l:o}function u(e){return e===n.a.FrontFace?s.e:null}const h=5e5,d={factor:-1,units:-2}
function f(e){return e?d:null}function _(e,t=r.h.LESS){return e===n.a.NONE||e===n.a.FrontFace?t:r.h.LEQUAL}},1293:function(e,t,i){"use strict"
i.d(t,"a",(function(){return r}))
var n=i(1489)
function r(e,t,i=""){return new n.a(e,i+t.shaders.vertexShader,i+t.shaders.fragmentShader,t.attributes)}},1303:function(e,t,i){"use strict"
i.d(t,"a",(function(){return a}))
var n,r,s,a={}
n={get exports(){return a},set exports(e){a=e}},r=function(){function e(e,i,r){r=r||2
var s,a,o,c,u,h,d,f=i&&i.length,_=f?i[0]*r:e.length,m=t(e,0,_,r,!0),p=[]
if(!m||m.next===m.prev)return p
if(f&&(m=l(e,i,m,r)),e.length>80*r){s=o=e[0],a=c=e[1]
for(var g=r;g<_;g+=r)(u=e[g])<s&&(s=u),(h=e[g+1])<a&&(a=h),u>o&&(o=u),h>c&&(c=h)
d=0!==(d=Math.max(o-s,c-a))?1/d:0}return n(m,p,r,s,a,d),p}function t(e,t,i,n,r){var s,a
if(r===C(e,t,i,n)>0)for(s=t;s<i;s+=n)a=w(s,e[s],e[s+1],a)
else for(s=i-n;s>=t;s-=n)a=w(s,e[s],e[s+1],a)
if(a&&v(a,a.next)){var o=a.next
E(a),a=o}return a}function i(e,t){if(!e)return e
t||(t=e)
var i,n=e
do{if(i=!1,n.steiner||!v(n,n.next)&&0!==b(n.prev,n,n.next))n=n.next
else{var r=n.prev
if(E(n),(n=t=r)===n.next)break
i=!0}}while(i||n!==t)
return t}function n(e,t,l,c,u,h,d){if(e){!d&&h&&f(e,c,u,h)
for(var _,m,p=e;e.prev!==e.next;)if(_=e.prev,m=e.next,h?s(e,c,u,h):r(e))t.push(_.i/l),t.push(e.i/l),t.push(m.i/l),E(e),e=m.next,p=m.next
else if((e=m)===p){d?1===d?n(e=a(i(e),t,l),t,l,c,u,h,2):2===d&&o(e,t,l,c,u,h):n(i(e),t,l,c,u,h,1)
break}}}function r(e){var t=e.prev,i=e,n=e.next
if(b(t,i,n)>=0)return!1
for(var r=e.next.next;r!==e.prev;){if(p(t.x,t.y,i.x,i.y,n.x,n.y,r.x,r.y)&&b(r.prev,r,r.next)>=0)return!1
r=r.next}return!0}function s(e,t,i,n){var r=e.prev,s=e,a=e.next
if(b(r,s,a)>=0)return!1
for(var o=r.x<s.x?r.x<a.x?r.x:a.x:s.x<a.x?s.x:a.x,l=r.y<s.y?r.y<a.y?r.y:a.y:s.y<a.y?s.y:a.y,c=r.x>s.x?r.x>a.x?r.x:a.x:s.x>a.x?s.x:a.x,u=r.y>s.y?r.y>a.y?r.y:a.y:s.y>a.y?s.y:a.y,h=_(o,l,t,i,n),d=_(c,u,t,i,n),f=e.prevZ,m=e.nextZ;f&&f.z>=h&&m&&m.z<=d;){if(f!==e.prev&&f!==e.next&&p(r.x,r.y,s.x,s.y,a.x,a.y,f.x,f.y)&&b(f.prev,f,f.next)>=0)return!1
if(f=f.prevZ,m!==e.prev&&m!==e.next&&p(r.x,r.y,s.x,s.y,a.x,a.y,m.x,m.y)&&b(m.prev,m,m.next)>=0)return!1
m=m.nextZ}for(;f&&f.z>=h;){if(f!==e.prev&&f!==e.next&&p(r.x,r.y,s.x,s.y,a.x,a.y,f.x,f.y)&&b(f.prev,f,f.next)>=0)return!1
f=f.prevZ}for(;m&&m.z<=d;){if(m!==e.prev&&m!==e.next&&p(r.x,r.y,s.x,s.y,a.x,a.y,m.x,m.y)&&b(m.prev,m,m.next)>=0)return!1
m=m.nextZ}return!0}function a(e,t,n){var r=e
do{var s=r.prev,a=r.next.next
!v(s,a)&&x(s,r,r.next,a)&&T(s,a)&&T(a,s)&&(t.push(s.i/n),t.push(r.i/n),t.push(a.i/n),E(r),E(r.next),r=e=a),r=r.next}while(r!==e)
return i(r)}function o(e,t,r,s,a,o){var l=e
do{for(var c=l.next.next;c!==l.prev;){if(l.i!==c.i&&g(l,c)){var u=S(l,c)
return l=i(l,l.next),u=i(u,u.next),n(l,t,r,s,a,o),void n(u,t,r,s,a,o)}c=c.next}l=l.next}while(l!==e)}function l(e,n,r,s){var a,o,l,u=[]
for(a=0,o=n.length;a<o;a++)(l=t(e,n[a]*s,a<o-1?n[a+1]*s:e.length,s,!1))===l.next&&(l.steiner=!0),u.push(m(l))
for(u.sort(c),a=0;a<u.length;a++)r=i(r=h(u[a],r),r.next)
return r}function c(e,t){return e.x-t.x}function u(e){if(e.next.prev===e)return e
let t=e
for(;;){const i=t.next
if(i.prev===t||i===t||i===e)break
t=i}return t}function h(e,t){var n=function(e,t){var i,n=t,r=e.x,s=e.y,a=-1/0
do{if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){var o=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y)
if(o<=r&&o>a){if(a=o,o===r){if(s===n.y)return n
if(s===n.next.y)return n.next}i=n.x<n.next.x?n:n.next}}n=n.next}while(n!==t)
if(!i)return null
if(r===a)return i
var l,c=i,u=i.x,h=i.y,f=1/0
n=i
do{r>=n.x&&n.x>=u&&r!==n.x&&p(s<h?r:a,s,u,h,s<h?a:r,s,n.x,n.y)&&(l=Math.abs(s-n.y)/(r-n.x),T(n,e)&&(l<f||l===f&&(n.x>i.x||n.x===i.x&&d(i,n)))&&(i=n,f=l)),n=n.next}while(n!==c)
return i}(e,t)
if(!n)return t
var r=S(n,e),s=i(n,n.next)
let a=u(r)
return i(a,a.next),s=u(s),u(t===n?s:t)}function d(e,t){return b(e.prev,e,t.prev)<0&&b(t.next,e,e.next)<0}function f(e,t,i,n){var r=e
do{null===r.z&&(r.z=_(r.x,r.y,t,i,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next}while(r!==e)
r.prevZ.nextZ=null,r.prevZ=null,function(e){var t,i,n,r,s,a,o,l,c=1
do{for(i=e,e=null,s=null,a=0;i;){for(a++,n=i,o=0,t=0;t<c&&(o++,n=n.nextZ);t++);for(l=c;o>0||l>0&&n;)0!==o&&(0===l||!n||i.z<=n.z)?(r=i,i=i.nextZ,o--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:e=r,r.prevZ=s,s=r
i=n}s.nextZ=null,c*=2}while(a>1)}(r)}function _(e,t,i,n,r){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-i)*r)|e<<8))|e<<4))|e<<2))|e<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-n)*r)|t<<8))|t<<4))|t<<2))|t<<1))<<1}function m(e){var t=e,i=e
do{(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next}while(t!==e)
return i}function p(e,t,i,n,r,s,a,o){return(r-a)*(t-o)-(e-a)*(s-o)>=0&&(e-a)*(n-o)-(i-a)*(t-o)>=0&&(i-a)*(s-o)-(r-a)*(n-o)>=0}function g(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!function(e,t){var i=e
do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&x(i,i.next,e,t))return!0
i=i.next}while(i!==e)
return!1}(e,t)&&(T(e,t)&&T(t,e)&&function(e,t){var i=e,n=!1,r=(e.x+t.x)/2,s=(e.y+t.y)/2
do{i.y>s!=i.next.y>s&&i.next.y!==i.y&&r<(i.next.x-i.x)*(s-i.y)/(i.next.y-i.y)+i.x&&(n=!n),i=i.next}while(i!==e)
return n}(e,t)&&(b(e.prev,e,t.prev)||b(e,t.prev,t))||v(e,t)&&b(e.prev,e,e.next)>0&&b(t.prev,t,t.next)>0)}function b(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function v(e,t){return e.x===t.x&&e.y===t.y}function x(e,t,i,n){var r=O(b(e,t,i)),s=O(b(e,t,n)),a=O(b(i,n,e)),o=O(b(i,n,t))
return r!==s&&a!==o||!(0!==r||!y(e,i,t))||!(0!==s||!y(e,n,t))||!(0!==a||!y(i,e,n))||!(0!==o||!y(i,t,n))}function y(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function O(e){return e>0?1:e<0?-1:0}function T(e,t){return b(e.prev,e,e.next)<0?b(e,t,e.next)>=0&&b(e,e.prev,t)>=0:b(e,t,e.prev)<0||b(e,e.next,t)<0}function S(e,t){var i=new M(e.i,e.x,e.y),n=new M(t.i,t.x,t.y),r=e.next,s=t.prev
return e.next=t,t.prev=e,i.next=r,r.prev=i,n.next=i,i.prev=n,s.next=n,n.prev=s,n}function w(e,t,i,n){var r=new M(e,t,i)
return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function E(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function M(e,t,i){this.i=e,this.x=t,this.y=i,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function C(e,t,i,n){for(var r=0,s=t,a=i-n;s<i;s+=n)r+=(e[a]-e[s])*(e[s+1]+e[a+1]),a=s
return r}return e.deviation=function(e,t,i,n){var r=t&&t.length,s=r?t[0]*i:e.length,a=Math.abs(C(e,0,s,i))
if(r)for(var o=0,l=t.length;o<l;o++){var c=t[o]*i,u=o<l-1?t[o+1]*i:e.length
a-=Math.abs(C(e,c,u,i))}var h=0
for(o=0;o<n.length;o+=3){var d=n[o]*i,f=n[o+1]*i,_=n[o+2]*i
h+=Math.abs((e[d]-e[_])*(e[f+1]-e[d+1])-(e[d]-e[f])*(e[_+1]-e[d+1]))}return 0===a&&0===h?0:Math.abs((h-a)/a)},e.flatten=function(e){for(var t=e[0][0].length,i={vertices:[],holes:[],dimensions:t},n=0,r=0;r<e.length;r++){for(var s=0;s<e[r].length;s++)for(var a=0;a<t;a++)i.vertices.push(e[r][s][a])
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
var n=i(23),r=i(1003),s=i(1022),a=i(1204),o=i(1023),l=i(1187),c=i(984)
const u={shader:"materials/icon",vertexLayout:{geometry:[{location:0,name:"a_pos",count:2,type:c.k.SHORT},{location:1,name:"a_vertexOffset",count:2,type:c.k.SHORT},{location:2,name:"a_texCoords",count:2,type:c.k.UNSIGNED_SHORT},{location:3,name:"a_bitSetAndDistRatio",count:2,type:c.k.UNSIGNED_SHORT},{location:4,name:"a_id",count:4,type:c.k.UNSIGNED_BYTE},{location:5,name:"a_color",count:4,type:c.k.UNSIGNED_BYTE,normalized:!0},{location:6,name:"a_outlineColor",count:4,type:c.k.UNSIGNED_BYTE,normalized:!0},{location:7,name:"a_sizeAndOutlineWidth",count:4,type:c.k.UNSIGNED_BYTE},{location:8,name:"a_zoomRange",count:2,type:c.k.UNSIGNED_SHORT}]},hittestAttributes:["a_vertexOffset","a_texCoords"]}
class h extends a.a{dispose(){}getGeometryType(){return r.d.MARKER}supportsSymbology(e){return e!==r.e.HEATMAP&&e!==r.e.PIE_CHART}drawGeometry(e,t,i,r){const{context:a,painter:h,rendererInfo:d,state:f,passOptions:_,requestRender:m,allowDelayedRender:p}=e,g=o.d.load(i.materialKey),b=Object(l.b)(g.data),v=Object(n.l)(_)&&"hittest"===_.type,{shader:x,vertexLayout:y,hittestAttributes:O}=Object(n.v)(b.programSpec,u)
let T=c.r.TRIANGLES,S=Object(s.g)(g.data,y)
v&&(S=this._getTriangleDesc(i.materialKey,S,O),T=c.r.POINTS)
const{attributes:w,bufferLayouts:E}=S,M=h.materialManager.getMaterialProgram(e,g,x,w,r)
if(p&&Object(n.l)(m)&&!M.compiled)return void m()
a.useProgram(M),g.textureBinding&&h.textureManager.bindTextures(a,M,g,!0),this._setSharedUniforms(M,e,t)
const C=g.vvRotation?f.displayViewMat3:f.displayMat3
M.setUniformMatrix3fv("u_displayMat3",C),this._setSizeVVUniforms(g,M,d,t),this._setColorAndOpacityVVUniforms(g,M,d),this._setRotationVVUniforms(g,M,d)
const I=i.target.getVAO(a,E,w,v)
let P=i.indexCount,A=i.indexFrom*Uint32Array.BYTES_PER_ELEMENT
v&&(P/=3,A/=3),a.bindVAO(I),this._drawMarkers(e,t,M,T,P,A,v),a.bindVAO(null)}_drawMarkers(e,t,i,n,r,s,a){e.context.drawElements(n,r,c.k.UNSIGNED_INT,s)}}},1320:function(e,t,i){"use strict"
i.d(t,"a",(function(){return s}))
const n={background:{"background.frag":"uniform lowp vec4 u_color;\nvoid main() {\ngl_FragColor = u_color;\n}","background.vert":"attribute vec2 a_pos;\nuniform highp mat3 u_dvsMat3;\nuniform mediump vec2 u_coord_range;\nuniform mediump float u_depth;\nvoid main() {\nvec3 v_pos = u_dvsMat3 * vec3(u_coord_range * a_pos, 1.0);\ngl_Position = vec4(v_pos.xy, 0.0, 1.0);\n}"},bitBlit:{"bitBlit.frag":"uniform lowp sampler2D u_tex;\nuniform lowp float u_opacity;\nvarying mediump vec2 v_uv;\nvoid main() {\nlowp vec4 color = texture2D(u_tex, v_uv);\ngl_FragColor = color *  u_opacity;\n}","bitBlit.vert":"attribute vec2 a_pos;\nattribute vec2 a_tex;\nvarying mediump vec2 v_uv;\nvoid main(void) {\ngl_Position = vec4(a_pos, 0.0, 1.0);\nv_uv = a_tex;\n}"},blend:{"blend.frag":"precision mediump float;\nuniform sampler2D u_layerTexture;\nuniform lowp float u_opacity;\nuniform lowp float u_inFadeOpacity;\n#ifndef NORMAL\nuniform sampler2D u_backbufferTexture;\n#endif\nvarying mediump vec2 v_uv;\nfloat rgb2v(in vec3 c) {\nreturn max(c.x, max(c.y, c.z));\n}\nvec3 rgb2hsv(in vec3 c) {\nvec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\nvec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);\nvec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);\nfloat d = q.x - min(q.w, q.y);\nfloat e = 1.0e-10;\nreturn vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);\n}\nvec3 hsv2rgb(in vec3 c) {\nvec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\nvec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\nreturn c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n}\nvec3 tint(in vec3 Cb, in vec3 Cs) {\nfloat vIn = rgb2v(Cb);\nvec3 hsvTint = rgb2hsv(Cs);\nvec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);\nreturn hsv2rgb(hsvOut);\n}\nfloat overlay(in float Cb, in float Cs) {\nreturn (1.0 - step(0.5, Cs)) * (1.0 - 2.0 * (1.0 - Cs ) * (1.0 - Cb)) + step(0.5, Cs) * (2.0 * Cs * Cb);\n}\nfloat colorDodge(in float Cb, in float Cs) {\nreturn (Cb == 0.0) ? 0.0 : (Cs == 1.0) ? 1.0 : min(1.0, Cb / (1.0 - Cs));\n}\nfloat colorBurn(in float Cb, in float Cs) {\nreturn (Cb == 1.0) ? 1.0 : (Cs == 0.0) ? 0.0 : 1.0 - min(1.0, (1.0 - Cb) / Cs);\n}\nfloat hardLight(in float Cb, in float Cs) {\nreturn (1.0 - step(0.5, Cs)) * (2.0 * Cs * Cb) + step(0.5, Cs) * (1.0 - 2.0 * (1.0 - Cs) * (1.0 - Cb));\n}\nfloat reflectBlend(in float Cb, in float Cs) {\nreturn (Cs == 1.0) ? Cs : min(Cb * Cb / (1.0 - Cs), 1.0);\n}\nfloat softLight(in float Cb, in float Cs) {\nif (Cs <= 0.5) {\nreturn Cb - (1.0 - 2.0 * Cs) * Cb * (1.0 - Cb);\n}\nif (Cb <= 0.25) {\nreturn Cb + (2.0 * Cs - 1.0) * Cb * ((16.0 * Cb - 12.0) * Cb + 3.0);\n}\nreturn Cb + (2.0 * Cs - 1.0) * (sqrt(Cb) - Cb);\n}\nfloat vividLight(in float Cb, in float Cs) {\nreturn (1.0 - step(0.5, Cs)) * colorBurn(Cb, 2.0 * Cs) + step(0.5, Cs) * colorDodge(Cb, (2.0 * (Cs - 0.5)));\n}\nfloat minv3(in vec3 c) {\nreturn min(min(c.r, c.g), c.b);\n}\nfloat maxv3(in vec3 c) {\nreturn max(max(c.r, c.g), c.b);\n}\nfloat lumv3(in vec3 c) {\nreturn dot(c, vec3(0.3, 0.59, 0.11));\n}\nfloat satv3(vec3 c) {\nreturn maxv3(c) - minv3(c);\n}\nvec3 clipColor(vec3 color) {\nfloat lum = lumv3(color);\nfloat mincol = minv3(color);\nfloat maxcol = maxv3(color);\nif (mincol < 0.0) {\ncolor = lum + ((color - lum) * lum) / (lum - mincol);\n}\nif (maxcol > 1.0) {\ncolor = lum + ((color - lum) * (1.0 - lum)) / (maxcol - lum);\n}\nreturn color;\n}\nvec3 setLum(vec3 cbase, vec3 clum) {\nfloat lbase = lumv3(cbase);\nfloat llum = lumv3(clum);\nfloat ldiff = llum - lbase;\nvec3 color = cbase + vec3(ldiff);\nreturn clipColor(color);\n}\nvec3 setLumSat(vec3 cbase, vec3 csat, vec3 clum)\n{\nfloat minbase = minv3(cbase);\nfloat sbase = satv3(cbase);\nfloat ssat = satv3(csat);\nvec3 color;\nif (sbase > 0.0) {\ncolor = (cbase - minbase) * ssat / sbase;\n} else {\ncolor = vec3(0.0);\n}\nreturn setLum(color, clum);\n}\nvoid main() {\nvec4 src = texture2D(u_layerTexture, v_uv);\n#ifdef NORMAL\ngl_FragColor = src *  u_opacity;\n#else\nvec4 dst = texture2D(u_backbufferTexture, v_uv);\nvec3 Cs = src.a == 0.0 ? src.rgb : vec3(src.rgb / src.a);\nvec3 Cb = dst.a == 0.0 ? dst.rgb : vec3(dst.rgb / dst.a);\nfloat as = u_opacity * src.a;\nfloat ab = dst.a;\n#ifdef DESTINATION_OVER\ngl_FragColor = vec4(as * Cs * (1.0 - ab) + ab * Cb, as + ab - as * ab);\n#endif\n#ifdef SOURCE_IN\nvec4 color = vec4(as * Cs * ab, as * ab);\nvec4 fadeColor = (1.0 - u_opacity) * u_inFadeOpacity * vec4(ab * Cb, ab);\ngl_FragColor = color + fadeColor;\n#endif\n#ifdef DESTINATION_IN\nvec4 color = vec4(ab * Cb * as, ab * as);\nvec4 fadeColor = (1.0 - u_opacity) * u_inFadeOpacity * vec4(ab * Cb, ab);\ngl_FragColor = color + fadeColor;\n#endif\n#ifdef SOURCE_OUT\ngl_FragColor = vec4(as * Cs * (1.0 - ab), as * (1.0 - ab));\n#endif\n#ifdef DESTINATION_OUT\ngl_FragColor = vec4(ab * Cb * (1.0 - as), ab * (1.0 - as));\n#endif\n#ifdef SOURCE_ATOP\ngl_FragColor = vec4(as * Cs * ab + ab * Cb * (1.0 - as), ab);\n#endif\n#ifdef DESTINATION_ATOP\ngl_FragColor = vec4(as * Cs * (1.0 - ab) + ab * Cb * as, as);\n#endif\n#ifdef XOR\ngl_FragColor = vec4(as * Cs * (1.0 - ab) + ab * Cb * (1.0 - as),\nas * (1.0 - ab) + ab * (1.0 - as));\n#endif\n#ifdef MULTIPLY\ngl_FragColor = vec4(as * Cs * ab * Cb + (1.0 - ab) * as * Cs + (1.0 - as) * ab * Cb,\nas + ab * (1.0 - as));\n#endif\n#ifdef SCREEN\ngl_FragColor = vec4((Cs + Cb - Cs * Cb) * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef OVERLAY\nvec3 f = vec3(overlay(Cb.r, Cs.r), overlay(Cb.g, Cs.g), overlay(Cb.b, Cs.b));\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef DARKEN\ngl_FragColor = vec4(min(Cs, Cb) * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef LIGHTER\ngl_FragColor = vec4(as * Cs + ab * Cb, as + ab);\n#endif\n#ifdef LIGHTEN\ngl_FragColor = vec4(max(Cs, Cb) * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef COLOR_DODGE\nvec3 f = clamp(vec3(colorDodge(Cb.r, Cs.r), colorDodge(Cb.g, Cs.g), colorDodge(Cb.b, Cs.b)), vec3(0.0), vec3(1.0));\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef COLOR_BURN\nvec3 f = vec3(colorBurn(Cb.r, Cs.r), colorBurn(Cb.g, Cs.g), colorBurn(Cb.b, Cs.b));\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef HARD_LIGHT\nvec3 f = vec3(hardLight(Cb.r, Cs.r), hardLight(Cb.g, Cs.g), hardLight(Cb.b, Cs.b));\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef SOFT_LIGHT\nvec3 f = vec3(softLight(Cb.r, Cs.r), softLight(Cb.g, Cs.g), softLight(Cb.b, Cs.b));\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef DIFFERENCE\ngl_FragColor = vec4(abs(Cb - Cs) * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef EXCLUSION\nvec3 f = Cs + Cb - 2.0 * Cs * Cb;\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef INVERT\ngl_FragColor = vec4((1.0 - Cb) * as * ab + Cb * ab * (1.0 - as), ab);\n#endif\n#ifdef VIVID_LIGHT\nvec3 f = vec3(clamp(vividLight(Cb.r, Cs.r), 0.0, 1.0),\nclamp(vividLight(Cb.g, Cs.g), 0.0, 1.0),\nclamp(vividLight(Cb.b, Cs.b), 0.0, 1.0));\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef HUE\nvec3 f = setLumSat(Cs,Cb,Cb);\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef SATURATION\nvec3 f = setLumSat(Cb,Cs,Cb);\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef COLOR\nvec3 f = setLum(Cs,Cb);\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef LUMINOSITY\nvec3 f = setLum(Cb,Cs);\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef PLUS\ngl_FragColor = clamp(vec4(src.r + Cb.r, src.g + Cb.g, src.b + Cb.b, as + ab), 0.0, 1.0);\n#endif\n#ifdef MINUS\ngl_FragColor = vec4(clamp(vec3(Cb.r - src.r, Cb.g - src.g, Cb.b - src.b), 0.0, 1.0), ab * as);\n#endif\n#ifdef AVERAGE\nvec3 f = (Cb + Cs) / 2.0;\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef REFLECT\nvec3 f = clamp(vec3(reflectBlend(Cb.r, Cs.r),\nreflectBlend(Cb.g, Cs.g),\nreflectBlend(Cb.b, Cs.b)), vec3(0.0), vec3(1.0));\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#endif\n}","blend.vert":"attribute vec2 a_position;\nvarying mediump vec2 v_uv;\nvoid main(void) {\ngl_Position = vec4(a_position , 0.0, 1.0);\nv_uv = (a_position + 1.0) / 2.0;\n}"},debug:{overlay:{"overlay.frag":"precision mediump float;\nvarying vec4 v_color;\nvoid main(void) {\ngl_FragColor = v_color;\n}","overlay.vert":"attribute vec3 a_PositionAndFlags;\nuniform mat3 u_dvsMat3;\nuniform vec4 u_colors[4];\nuniform float u_opacities[4];\nvarying vec4 v_color;\nvoid main(void) {\nvec2 position = a_PositionAndFlags.xy;\nfloat flags = a_PositionAndFlags.z;\nint colorIndex = int(mod(flags, 4.0));\nvec4 color;\nfor (int i = 0; i < 4; i++) {\ncolor = u_colors[i];\nif (i == colorIndex) {\nbreak;\n}\n}\nint opacityIndex = int(mod(floor(flags / 4.0), 4.0));\nfloat opacity;\nfor (int i = 0; i < 4; i++) {\nopacity = u_opacities[i];\nif (i == opacityIndex) {\nbreak;\n}\n}\nv_color = color * opacity;\ngl_Position = vec4((u_dvsMat3 * vec3(position, 1.0)).xy, 0.0, 1.0);\n}"}},dot:{dot:{"dot.frag":"precision mediump float;\nvarying vec4 v_color;\nvarying float v_dotRatio;\nvarying float v_invEdgeRatio;\nuniform highp float u_tileZoomFactor;\nvoid main()\n{\nfloat dist = length(gl_PointCoord - vec2(.5, .5)) * 2.;\nfloat alpha = smoothstep(0., 1., v_invEdgeRatio * (dist - v_dotRatio) + 1.);\ngl_FragColor = v_color * alpha;\n}","dot.vert":"precision highp float;\nattribute vec2 a_pos;\nuniform sampler2D u_texture;\nuniform highp mat3 u_dvsMat3;\nuniform highp float u_tileZoomFactor;\nuniform highp float u_dotSize;\nuniform highp float u_pixelRatio;\nvarying vec2 v_pos;\nvarying vec4 v_color;\nvarying float v_dotRatio;\nvarying float v_invEdgeRatio;\nconst float EPSILON = 0.000001;\nvoid main()\n{\nmat3 tileToTileTexture = mat3(  1., 0., 0.,\n0., -1., 0.,\n0., 1., 1.  );\nvec3 texCoords = tileToTileTexture * vec3(a_pos.xy / 512., 1.);\nv_color = texture2D(u_texture, texCoords.xy);\nfloat smoothEdgeWidth = max(u_dotSize / 2., 1.) ;\nfloat z = 0.;\nz += 2.0 * step(v_color.a, EPSILON);\ngl_PointSize = (smoothEdgeWidth + u_dotSize);\ngl_Position = vec4((u_dvsMat3 * vec3(a_pos + .5, 1.)).xy, z, 1.);\nv_dotRatio = u_dotSize / gl_PointSize;\nv_invEdgeRatio = -1. / ( smoothEdgeWidth / gl_PointSize );\ngl_PointSize  *= (u_pixelRatio * u_tileZoomFactor);\n}"}},filtering:{"bicubic.glsl":"vec4 computeWeights(float v) {\nfloat b = 1.0 / 6.0;\nfloat v2 = v * v;\nfloat v3 = v2 * v;\nfloat w0 = b * (-v3 + 3.0 * v2 - 3.0 * v + 1.0);\nfloat w1 = b * (3.0 * v3  - 6.0 * v2 + 4.0);\nfloat w2 = b * (-3.0 * v3 + 3.0 * v2 + 3.0 * v + 1.0);\nfloat w3 = b * v3;\nreturn vec4(w0, w1, w2, w3);\n}\nvec4 bicubicOffsetsAndWeights(float v) {\nvec4 w = computeWeights(v);\nfloat g0 = w.x + w.y;\nfloat g1 = w.z + w.w;\nfloat h0 = 1.0 - (w.y / g0) + v;\nfloat h1 = 1.0 + (w.w / g1) - v;\nreturn vec4(h0, h1, g0, g1);\n}\nvec4 sampleBicubicBSpline(sampler2D sampler, vec2 coords, vec2 texSize) {\nvec2 eX = vec2(1.0 / texSize.x, 0.0);\nvec2 eY = vec2(0.0, 1.0 / texSize.y);\nvec2 texel = coords * texSize - 0.5;\nvec3 hgX = bicubicOffsetsAndWeights(fract(texel).x).xyz;\nvec3 hgY = bicubicOffsetsAndWeights(fract(texel).y).xyz;\nvec2 coords10 = coords + hgX.x * eX;\nvec2 coords00 = coords - hgX.y * eX;\nvec2 coords11 = coords10 + hgY.x * eY;\nvec2 coords01 = coords00 + hgY.x * eY;\ncoords10 = coords10 - hgY.y * eY;\ncoords00 = coords00 - hgY.y * eY;\nvec4 color00 = texture2D(sampler, coords00);\nvec4 color10 = texture2D(sampler, coords10);\nvec4 color01 = texture2D(sampler, coords01);\nvec4 color11 = texture2D(sampler, coords11);\ncolor00 = mix(color00, color01, hgY.z);\ncolor10 = mix(color10, color11, hgY.z);\ncolor00 = mix(color00, color10, hgX.z);\nreturn color00;\n}","bilinear.glsl":"vec4 sampleBilinear(sampler2D sampler, vec2 coords, vec2 texSize) {\nvec2 texelStart = floor(coords * texSize);\nvec2 coord0 = texelStart / texSize;\nvec2 coord1 = (texelStart +  vec2(1.0, 0.0)) / texSize;\nvec2 coord2 = (texelStart +  vec2(0.0, 1.0)) / texSize;\nvec2 coord3 = (texelStart +  vec2(1.0, 1.0)) / texSize;\nvec4 color0 = texture2D(sampler, coord0);\nvec4 color1 = texture2D(sampler, coord1);\nvec4 color2 = texture2D(sampler, coord2);\nvec4 color3 = texture2D(sampler, coord3);\nvec2 blend = fract(coords * texSize);\nvec4 color01 = mix(color0, color1, blend.x);\nvec4 color23 = mix(color2, color3, blend.x);\nvec4 color = mix(color01, color23, blend.y);\n#ifdef NNEDGE\nfloat alpha = floor(color0.a * color1.a * color2.a * color3.a + 0.5);\ncolor = color * alpha + (1.0 - alpha) * texture2D(sampler, coords);\n#endif\nreturn color;\n}","epx.glsl":"vec4 sampleEPX(sampler2D sampler, float size, vec2 coords, vec2 texSize) {\nvec2 invSize = 1.0 / texSize;\nvec2 texel = coords * texSize;\nvec2 texel_i = floor(texel);\nvec2 texel_frac = fract(texel);\nvec4 colorP = texture2D(sampler, texel_i * invSize);\nvec4 colorP1 = vec4(colorP);\nvec4 colorP2 = vec4(colorP);\nvec4 colorP3 = vec4(colorP);\nvec4 colorP4 = vec4(colorP);\nvec4 colorA = texture2D(sampler, (texel_i - vec2(0.0, 1.0)) * invSize);\nvec4 colorB = texture2D(sampler, (texel_i + vec2(1.0, 0.0)) * invSize);\nvec4 colorC = texture2D(sampler, (texel_i - vec2(1.0, 0.0)) * invSize);\nvec4 colorD = texture2D(sampler, (texel_i + vec2(0.0, 1.0)) * invSize);\nif (colorC == colorA && colorC != colorD && colorA != colorB) {\ncolorP1 = colorA;\n}\nif (colorA == colorB && colorA != colorC && colorB != colorD) {\ncolorP2 = colorB;\n}\nif (colorD == colorC && colorD != colorB && colorC != colorA) {\ncolorP3 = colorC;\n}\nif (colorB == colorD && colorB != colorA && colorD != colorC) {\ncolorP4 = colorD;\n}\nvec4 colorP12 = mix(colorP1, colorP2, texel_frac.x);\nvec4 colorP34 = mix(colorP1, colorP2, texel_frac.x);\nreturn mix(colorP12, colorP34, texel_frac.y);\n}"},fx:{integrate:{"integrate.frag":"precision mediump float;\nuniform lowp sampler2D u_sourceTexture;\nuniform lowp sampler2D u_maskTexture;\nuniform mediump float u_zoomLevel;\nuniform highp float u_timeDelta;\nuniform highp float u_animationTime;\nvarying highp vec2 v_texcoord;\n#include <materials/utils.glsl>\nvoid main()\n{\n#ifdef DELTA\nvec4 texel = texture2D(u_sourceTexture, v_texcoord);\nvec4 data0 = texture2D(u_maskTexture, v_texcoord);\nfloat flags = data0.r * 255.0;\nfloat groupMinZoom = data0.g * 255.0;\nfloat isVisible = getFilterBit(flags, 0);\nfloat wouldClip = step(groupMinZoom, u_zoomLevel);\nfloat direction = wouldClip * 1.0 + (1.0 - wouldClip) * -1.0;\nfloat dt = u_timeDelta / max(u_animationTime, 0.0001);\nvec4 nextState = vec4(texel + direction * dt);\ngl_FragColor =  vec4(nextState);\n#elif defined(UPDATE)\nvec4 texel = texture2D(u_sourceTexture, v_texcoord);\ngl_FragColor = texel;\n#endif\n}","integrate.vert":"precision mediump float;\nattribute vec2 a_pos;\nvarying highp vec2 v_texcoord;\nvoid main()\n{\nv_texcoord = a_pos;\ngl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n}"}},heatmap:{heatmapResolve:{"heatmapResolve.frag":"precision highp float;\n#ifdef HEATMAP_PRECISION_HALF_FLOAT\n#define COMPRESSION_FACTOR 4.0\n#else\n#define COMPRESSION_FACTOR 1.0\n#endif\nuniform sampler2D u_texture;\nuniform sampler2D u_gradient;\nuniform vec2 u_densityMinAndInvRange;\nuniform float u_densityNormalization;\nvarying vec2 v_uv;\nvoid main() {\nvec4 data = texture2D(u_texture, v_uv);\nfloat density = data.r * COMPRESSION_FACTOR;\ndensity *= u_densityNormalization;\ndensity = (density - u_densityMinAndInvRange.x) * u_densityMinAndInvRange.y;\nvec4 color = texture2D(u_gradient, vec2(density, 0.5));\ngl_FragColor = vec4(color.rgb * color.a, color.a);\n}","heatmapResolve.vert":"precision highp float;\nattribute vec2 a_pos;\nvarying vec2 v_uv;\nvoid main() {\nv_uv = a_pos;\ngl_Position = vec4(a_pos * 2.0 - 1.0, 1., 1.);\n}"}},highlight:{"blur.frag":"varying mediump vec2 v_texcoord;\nuniform mediump vec4 u_direction;\nuniform mediump mat4 u_channelSelector;\nuniform mediump float u_sigma;\nuniform sampler2D u_texture;\nmediump float gauss1(mediump vec2 dir) {\nreturn exp(-dot(dir, dir) / (2.0 * u_sigma * u_sigma));\n}\nmediump vec4 selectChannel(mediump vec4 sample) {\nreturn u_channelSelector * sample;\n}\nvoid accumGauss1(mediump float i, inout mediump float tot, inout mediump float weight) {\nmediump float w = gauss1(i * u_direction.xy);\ntot += selectChannel(texture2D(u_texture, v_texcoord + i * u_direction.zw))[3] * w;\nweight += w;\n}\nvoid main(void) {\nmediump float tot = 0.0;\nmediump float weight = 0.0;\naccumGauss1(-5.0, tot, weight);\naccumGauss1(-4.0, tot, weight);\naccumGauss1(-3.0, tot, weight);\naccumGauss1(-2.0, tot, weight);\naccumGauss1(-1.0, tot, weight);\naccumGauss1(0.0, tot, weight);\naccumGauss1(1.0, tot, weight);\naccumGauss1(2.0, tot, weight);\naccumGauss1(3.0, tot, weight);\naccumGauss1(4.0, tot, weight);\naccumGauss1(5.0, tot, weight);\ngl_FragColor = vec4(0.0, 0.0, 0.0, tot / weight);\n}","highlight.frag":"varying mediump vec2 v_texcoord;\nuniform sampler2D u_texture;\nuniform mediump float u_sigma;\nuniform sampler2D u_shade;\nuniform mediump vec2 u_minMaxDistance;\nmediump float estimateDistance() {\nmediump float y = texture2D(u_texture, v_texcoord)[3];\nconst mediump float y0 = 0.5;\nmediump float m0 = 1.0 / (sqrt(2.0 * 3.1415) * u_sigma);\nmediump float d = (y - y0) / m0;\nreturn d;\n}\nmediump vec4 shade(mediump float d) {\nmediump float mappedDistance = (d - u_minMaxDistance.x) / (u_minMaxDistance.y - u_minMaxDistance.x);\nmappedDistance = clamp(mappedDistance, 0.0, 1.0);\nreturn texture2D(u_shade, vec2(mappedDistance, 0.5));\n}\nvoid main(void) {\nmediump float d = estimateDistance();\ngl_FragColor = shade(d);\n}","textured.vert":"attribute mediump vec2 a_position;\nattribute mediump vec2 a_texcoord;\nvarying mediump vec2 v_texcoord;\nvoid main(void) {\ngl_Position = vec4(a_position, 0.0, 1.0);\nv_texcoord = a_texcoord;\n}"},magnifier:{"magnifier.frag":"uniform lowp vec4 u_background;\nuniform mediump sampler2D u_readbackTexture;\nuniform mediump sampler2D u_maskTexture;\nuniform mediump sampler2D u_overlayTexture;\nuniform bool u_maskEnabled;\nuniform bool u_overlayEnabled;\nvarying mediump vec2 v_texCoord;\nconst lowp float barrelFactor = 1.1;\nlowp vec2 barrel(lowp vec2 uv) {\nlowp vec2 uvn = uv * 2.0 - 1.0;\nif (uvn.x == 0.0 && uvn.y == 0.0) {\nreturn vec2(0.5, 0.5);\n}\nlowp float theta = atan(uvn.y, uvn.x);\nlowp float r = pow(length(uvn), barrelFactor);\nreturn r * vec2(cos(theta), sin(theta)) * 0.5 + 0.5;\n}\nvoid main(void)\n{\nlowp vec4 color = texture2D(u_readbackTexture, barrel(v_texCoord));\ncolor = (color + (1.0 - color.a) * u_background);\nlowp float mask = u_maskEnabled ? texture2D(u_maskTexture, v_texCoord).a : 1.0;\ncolor *= mask;\nlowp vec4 overlayColor = u_overlayEnabled ? texture2D(u_overlayTexture, v_texCoord) : vec4(0);\ngl_FragColor = overlayColor + (1.0 - overlayColor.a) * color;\n}","magnifier.vert":"precision mediump float;\nattribute mediump vec2 a_pos;\nuniform mediump vec4 u_drawPos;\nvarying mediump vec2 v_texCoord;\nvoid main(void)\n{\nv_texCoord = a_pos;\ngl_Position = vec4(u_drawPos.xy + vec2(a_pos - 0.5) * u_drawPos.zw, 0.0, 1.0);\n}"},materials:{"attributeData.glsl":"uniform highp sampler2D u_attributeData0;\nuniform highp sampler2D u_attributeData1;\nuniform highp sampler2D u_attributeData2;\nuniform highp sampler2D u_attributeData3;\nuniform highp sampler2D u_attributeData4;\nuniform highp sampler2D u_attributeData5;\nuniform highp int u_attributeTextureSize;\nhighp vec2 getAttributeDataCoords(in highp vec3 id) {\nhighp vec3  texel = unpackDisplayIdTexel(id);\nhighp float size = float(u_attributeTextureSize);\nhighp float u32 = float(int(texel.r) + int(texel.g) * 256 + int(texel.b) * 256 * 256);\nhighp float col = mod(u32, size);\nhighp float row = (u32 - col) / size;\nhighp float u = col / size;\nhighp float v = row / size;\nreturn vec2(u, v);\n}\nhighp vec2 getAttributeDataTextureCoords(in highp vec3 id) {\nreturn (getAttributeDataCoords(id) * 2.0) - 1.0 + (.5 / vec2(u_attributeTextureSize));\n}\nhighp vec4 getAttributeData0(in highp vec3 id) {\nvec2 coords = getAttributeDataCoords(id);\nreturn texture2D(u_attributeData0, coords);\n}\nhighp vec4 getAttributeData1(in highp vec3 id) {\nhighp vec2 coords = getAttributeDataCoords(id);\nreturn texture2D(u_attributeData1, coords);\n}\nhighp vec4 getAttributeData2(in highp vec3 id) {\nhighp vec2 coords = getAttributeDataCoords(id);\nreturn texture2D(u_attributeData2, coords);\n}\nhighp vec4 getAttributeData3(in highp vec3 id) {\nhighp vec2 coords = getAttributeDataCoords(id);\nreturn texture2D(u_attributeData3, coords);\n}\nhighp vec4 getAttributeData4(in highp vec3 id) {\nhighp vec2 coords = getAttributeDataCoords(id);\nreturn texture2D(u_attributeData4, coords);\n}\nhighp vec4 getAttributeData5(in highp vec3 id) {\nhighp vec2 coords = getAttributeDataCoords(id);\nreturn texture2D(u_attributeData5, coords);\n}\nfloat u88VVToFloat(in vec2 v) {\nbool isMagic = v.x == 255.0 && v.y == 255.0;\nif (isMagic) {\nreturn NAN_MAGIC_NUMBER;\n}\nreturn (v.x + v.y * float(0x100)) - 32768.0;\n}","barycentric.glsl":"float inTriangle(vec3 bary) {\nvec3 absBary = abs(bary);\nreturn step((absBary.x + absBary.y + absBary.z), 1.05);\n}\nvec3 xyToBarycentric(in vec2 pos, in vec2 v0,  in vec2 v1, in vec2 v2) {\nmat3 xyToBarycentricMat3 = mat3(\nv1.x * v2.y - v2.x * v1.y, v2.x * v0.y - v0.x * v2.y, v0.x * v1.y - v1.x * v0.y,\nv1.y - v2.y, v2.y - v0.y, v0.y - v1.y,\nv2.x - v1.x, v0.x - v2.x, v1.x - v0.x\n);\nfloat A2 = v0.x * (v1.y - v2.y) + v1.x * (v2.y - v0.y) + v2.x * (v0.y - v1.y);\nreturn (1. / A2) * xyToBarycentricMat3 * vec3(1., pos);\n}","constants.glsl":"const float C_DEG_TO_RAD = 3.14159265359 / 180.0;\nconst float C_256_TO_RAD = 3.14159265359 / 128.0;\nconst float C_RAD_TO_DEG = 180.0 / 3.141592654;\nconst float POSITION_PRECISION = 1.0 / 8.0;\nconst float FILL_POSITION_PRECISION = 1.0 / 1.0;\nconst float SOFT_EDGE_RATIO = 1.0;\nconst float THIN_LINE_WIDTH_FACTOR = 1.1;\nconst float THIN_LINE_HALF_WIDTH = 1.0;\nconst float EXTRUDE_SCALE_PLACEMENT_PADDING = 1.0 / 4.0;\nconst float OFFSET_PRECISION = 1.0 / 8.0;\nconst float OUTLINE_SCALE = 1.0 / 5.0;\nconst float SDF_FONT_SIZE = 24.0;\nconst float MAX_SDF_DISTANCE = 8.0;\nconst float PLACEMENT_PADDING = 8.0;\nconst float EPSILON = 0.00001;\nconst float EPSILON_HITTEST = 0.05;\nconst int MAX_FILTER_COUNT = 2;\nconst int ATTR_VV_SIZE = 0;\nconst int ATTR_VV_COLOR = 1;\nconst int ATTR_VV_OPACITY = 2;\nconst int ATTR_VV_ROTATION = 3;\nconst highp float NAN_MAGIC_NUMBER = 1e-30;\nconst int BITSET_GENERIC_LOCK_COLOR = 1;\nconst int BITSET_GENERIC_CONSIDER_ALPHA_ONLY = 4;\nconst int BITSET_MARKER_ALIGNMENT_MAP = 0;\nconst int BITSET_MARKER_OUTLINE_ALLOW_COLOR_OVERRIDE = 2;\nconst int BITSET_MARKER_SCALE_SYMBOLS_PROPORTIONALLY = 3;\nconst int BITSET_TYPE_FILL_OUTLINE = 0;\nconst int BITSET_FILL_RANDOM_PATTERN_OFFSET = 2;\nconst int BITSET_FILL_HAS_UNRESOLVED_REPLACEMENT_COLOR = 3;\nconst int BITSET_LINE_SCALE_DASH = 2;",fill:{"common.glsl":"#include <materials/symbologyTypeUtils.glsl>\n#ifdef PATTERN\nuniform mediump vec2 u_mosaicSize;\nvarying mediump float v_sampleAlphaOnly;\n#endif\n#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY\nuniform lowp vec4 u_isActive[ 2 ];\nuniform highp float u_dotValue;\nuniform highp float u_tileDotsOverArea;\nuniform highp float u_dotTextureDotCount;\nuniform mediump float u_tileZoomFactor;\n#endif\nvarying highp vec3 v_id;\nvarying lowp vec4 v_color;\nvarying lowp float v_opacity;\nvarying mediump vec4 v_aux1;\n#ifdef PATTERN\nvarying mediump vec2 v_tileTextureCoord;\n#endif\n#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\nvarying lowp float v_isOutline;\n#endif\n#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY\nvarying highp vec2 v_dotTextureCoords;\nvarying highp vec4 v_dotThresholds[ 2 ];\n#endif","fill.frag":"precision highp float;\n#include <materials/constants.glsl>\n#include <materials/utils.glsl>\n#include <materials/fill/common.glsl>\n#ifdef PATTERN\nuniform lowp sampler2D u_texture;\n#endif\n#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY\nuniform mediump mat4 u_dotColors[ 2 ];\nuniform sampler2D u_dotTextures[ 2 ];\nuniform vec4 u_dotBackgroundColor;\n#endif\n#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\n#include <materials/shared/line/common.glsl>\n#include <materials/shared/line/line.frag>\nlowp vec4 drawLine() {\nfloat v_lineWidth = v_aux1.x;\nvec2  v_normal    = v_aux1.yz;\nLineData inputs = LineData(\nv_color,\nv_normal,\nv_lineWidth,\nv_opacity,\nv_id\n);\nreturn shadeLine(inputs);\n}\n#endif\nlowp vec4 drawFill() {\nlowp vec4 out_color = vec4(0.);\n#ifdef HITTEST\nout_color = v_color;\n#elif defined(PATTERN)\nmediump vec4 v_tlbr = v_aux1;\nmediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);\nmediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);\nlowp vec4 color = texture2D(u_texture, samplePos);\nif (v_sampleAlphaOnly > 0.5) {\ncolor.rgb = vec3(color.a);\n}\nout_color = v_opacity * v_color * color;\n#elif SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY && !defined(HIGHLIGHT)\nvec4 textureThresholds0 = texture2D(u_dotTextures[0], v_dotTextureCoords);\nvec4 textureThresholds1 = texture2D(u_dotTextures[1], v_dotTextureCoords);\nvec4 difference0 = v_dotThresholds[0] - textureThresholds0;\nvec4 difference1 = v_dotThresholds[1] - textureThresholds1;\n#ifdef DD_DOT_BLENDING\nvec4 isPositive0 = step(0.0, difference0);\nvec4 isPositive1 = step(0.0, difference1);\nfloat weightSum = dot(isPositive0, difference0) + dot(isPositive1, difference1);\nfloat lessThanEqZero = step(weightSum, 0.0);\nfloat greaterThanZero = 1.0 - lessThanEqZero ;\nfloat divisor = (weightSum + lessThanEqZero);\nvec4 weights0 = difference0 * isPositive0 / divisor;\nvec4 weights1 = difference1 * isPositive1 / divisor;\nvec4 dotColor = u_dotColors[0] * weights0 + u_dotColors[1] * weights1;\nvec4 preEffectColor = greaterThanZero * dotColor + lessThanEqZero * u_dotBackgroundColor;\n#else\nfloat diffMax = max(max4(difference0), max4(difference1));\nfloat lessThanZero = step(diffMax, 0.0);\nfloat greaterOrEqZero = 1.0 - lessThanZero;\nvec4 isMax0 = step(diffMax, difference0);\nvec4 isMax1 = step(diffMax, difference1);\nvec4 dotColor = u_dotColors[0] * isMax0 + u_dotColors[1] * isMax1;\nvec4 preEffectColor = greaterOrEqZero * dotColor + lessThanZero * u_dotBackgroundColor;\n#endif\nout_color = preEffectColor;\n#else\nout_color = v_opacity * v_color;\n#endif\n#ifdef HIGHLIGHT\nout_color.a = 1.0;\n#endif\nreturn out_color;\n}\nvoid main() {\n#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\nif (v_isOutline > 0.5) {\ngl_FragColor = drawLine();\n} else {\ngl_FragColor = drawFill();\n}\n#else\ngl_FragColor = drawFill();\n#endif\n}","fill.vert":"#include <materials/symbologyTypeUtils.glsl>\n#define PACKED_LINE\nprecision highp float;\nattribute float a_bitset;\n#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY\nattribute float a_inverseArea;\nvec4 a_color = vec4(0.0, 0.0, 0.0, 1.0);\nvec2 a_zoomRange = vec2(0.0, 10000.0);\n#else\nattribute vec4 a_color;\nattribute vec4 a_aux2;\nattribute vec4 a_aux3;\n#ifndef SYMBOLOGY_TYPE_IS_SIMPLE_LIKE\nattribute vec4 a_aux1;\nattribute vec2 a_zoomRange;\n#else\nvec2 a_zoomRange = vec2(0.0, 10000.0);\n#endif\n#endif\nuniform vec2 u_tileOffset;\n#include <util/encoding.glsl>\n#include <materials/vcommon.glsl>\n#include <materials/fill/common.glsl>\n#include <materials/fill/hittest.glsl>\nconst float INV_SCALE_COMPRESSION_FACTOR = 1.0 / 128.0;\n#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY\nvec4 dotThreshold(vec4 featureAttrOverFeatureArea, float dotValue, float tileDotsOverArea) {\nreturn featureAttrOverFeatureArea * (1.0 / dotValue)  * (1.0 / tileDotsOverArea);\n}\n#endif\n#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\n#include <materials/shared/line/common.glsl>\n#include <materials/shared/line/line.vert>\nvoid drawLine(out lowp vec4 out_color, out highp vec3 out_pos) {\nLineData outputs = buildLine(\nout_pos,\na_id,\na_pos,\na_color,\n(a_aux3.xy - 128.) / 16.,\n(a_aux3.zw - 128.) / 16.,\n0.,\na_aux2.z / 16.,\na_bitset,\nvec4(0.),\nvec2(0.),\na_aux2.w / 16.\n);\nv_id      = outputs.id;\nv_opacity = outputs.opacity;\nv_aux1    = vec4(outputs.lineHalfWidth, outputs.normal, 0.);\nout_color = outputs.color;\n}\n#endif\nvoid drawFill(out lowp vec4 out_color, out highp vec3 out_pos) {\nfloat a_bitSet = a_bitset;\nout_color = getColor(a_color, a_bitSet, BITSET_GENERIC_LOCK_COLOR);\nv_opacity = getOpacity();\nv_id      = norm(a_id);\n#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY\nmat3 tileToTileNormalized = mat3(  2. / 512.,  0.,  0.,\n0., -2. / 512.,  0.,\n-1.,  1.,  1.  );\nout_pos   = tileToTileNormalized * vec3((a_pos * FILL_POSITION_PRECISION), 1.);\n#else\nout_pos   = u_dvsMat3 * vec3(a_pos * FILL_POSITION_PRECISION, 1.);\n#endif\n#ifdef PATTERN\nvec4  a_tlbr   = a_aux1;\nfloat a_width  = a_aux2.x;\nfloat a_height = a_aux2.y;\nvec2  a_offset = a_aux2.zw;\nvec2  a_scale  = a_aux3.xy;\nfloat a_angle  = a_aux3.z;\nvec2 scale = INV_SCALE_COMPRESSION_FACTOR * a_scale;\nfloat width = u_zoomFactor * a_width * scale.x;\nfloat height = u_zoomFactor * a_height * scale.y;\nfloat angle = C_256_TO_RAD * a_angle;\nfloat sinA = sin(angle);\nfloat cosA = cos(angle);\nfloat dx = 0.0;\nfloat dy = 0.0;\nif (getBit(a_bitset, BITSET_FILL_RANDOM_PATTERN_OFFSET) > 0.5) {\nfloat id = rgba2float(vec4(a_id, 0.0));\ndx = rand(vec2(id, 0.0));\ndy = rand(vec2(0.0, id));\n}\nmat3 patternMatrix = mat3(cosA / width, sinA / height, 0,\n-sinA / width, cosA / height, 0,\ndx,            dy,           1);\nvec2 tileOffset = vec2(u_tileOffset.x * cosA - u_tileOffset.y * sinA, u_tileOffset.x * sinA + u_tileOffset.y * cosA);\ntileOffset = mod(tileOffset, vec2(a_aux2.x, a_aux2.y));\nvec2 symbolOffset = (a_offset - tileOffset) / vec2(width, height);\nv_tileTextureCoord = (patternMatrix * vec3(a_pos * FILL_POSITION_PRECISION, 1.0)).xy - symbolOffset;\nv_aux1 = a_tlbr / u_mosaicSize.xyxy;\nv_sampleAlphaOnly = getBit(a_bitset, BITSET_GENERIC_CONSIDER_ALPHA_ONLY);\nif (getBit(a_bitSet, BITSET_FILL_HAS_UNRESOLVED_REPLACEMENT_COLOR) > 0.5) {\n#ifdef VV_COLOR\nv_sampleAlphaOnly *= 1.0 - getBit(a_bitSet, BITSET_GENERIC_LOCK_COLOR);\n#else\nv_sampleAlphaOnly = 0.0;\n#endif\n}\n#elif SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY\nvec4 ddAttributeData0 = getAttributeData2(a_id) * u_isActive[0] * a_inverseArea;\nvec4 ddAttributeData1 = getAttributeData3(a_id) * u_isActive[1] * a_inverseArea;\nfloat size = u_tileZoomFactor * 512.0 * 1.0 / u_pixelRatio;\nv_dotThresholds[0] = dotThreshold(ddAttributeData0, u_dotValue, u_tileDotsOverArea);\nv_dotThresholds[1] = dotThreshold(ddAttributeData1, u_dotValue, u_tileDotsOverArea);\nv_dotTextureCoords = (a_pos * FILL_POSITION_PRECISION + 0.5) / size;\n#endif\n}\n#ifdef HITTEST\nvoid draw(out lowp vec4 out_color, out highp vec3 out_pos) {\n#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\nif (getBit(a_bitset, BITSET_TYPE_FILL_OUTLINE) > 0.5) {\nout_pos = vec3(0., 0., 2.);\nreturn;\n}\n#endif\nhittestFill(out_color, out_pos);\ngl_PointSize = 1.0;\n}\n#elif defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE)\nvoid draw(out lowp vec4 out_color, out highp vec3 out_pos) {\nv_isOutline = getBit(a_bitset, BITSET_TYPE_FILL_OUTLINE);\nif (v_isOutline > 0.5) {\ndrawLine(out_color, out_pos);\n} else {\ndrawFill(out_color, out_pos);\n}\n}\n#else\n#define draw drawFill\n#endif\nvoid main()\n{\nINIT;\nhighp vec3 pos  = vec3(0.);\nhighp vec4 color  = vec4(0.);\ndraw(color, pos);\nv_color = color;\ngl_Position = vec4(clip(v_color, pos, getFilterFlags(), a_zoomRange), 1.0);\n}","hittest.glsl":"#ifdef HITTEST\n#include <materials/hittest/common.glsl>\nattribute vec2 a_pos1;\nattribute vec2 a_pos2;\nvoid hittestFill(\nout lowp vec4 out_color,\nout highp vec3 out_pos\n) {\nvec3 pos        = u_viewMat3 * u_tileMat3 * vec3(a_pos  * FILL_POSITION_PRECISION, 1.);\nvec3 pos1       = u_viewMat3 * u_tileMat3 * vec3(a_pos1 * FILL_POSITION_PRECISION, 1.);\nvec3 pos2       = u_viewMat3 * u_tileMat3 * vec3(a_pos2 * FILL_POSITION_PRECISION, 1.);\nfloat hittestDist = u_hittestDist;\nfloat dist = distPointTriangle(u_hittestPos, pos.xy, pos1.xy, pos2.xy);\nout_pos = vec3(getAttributeDataTextureCoords(a_id), 0.0);\nif (dist < 0. || dist >= hittestDist) {\nout_pos.z += 2.0;\n}\nout_color = vec4(1. / 255., 0, 0, dist == 0. ? (1. / 255.) : 0.);\n}\n#endif"},hittest:{"common.glsl":"#ifdef HITTEST\nuniform float u_hittestDist;\nuniform highp vec2 u_hittestPos;\nfloat projectScalar(vec2 a, vec2 b) {\nreturn dot(a, normalize(b));\n}\nfloat distPointSegment(vec2 p0, vec2 p1, vec2 p2) {\nvec2 L = p2 - p1;\nvec2 A = p0 - p1;\nfloat projAL = projectScalar(A, L);\nfloat t = clamp(projAL / length(L), 0., 1.);\nreturn distance(p0, p1 + t * (p2 - p1));\n}\nvoid hittestMarker(out lowp vec4 out_color, out highp vec3 out_pos, in highp vec3 pos, float size) {\nfloat dist = distance(pos, vec3(u_hittestPos, 1.));\nout_pos = vec3(getAttributeDataTextureCoords(a_id), 0.0);\nif ((dist - size) > u_hittestDist) {\nout_pos.z += 2.0;\n}\nout_color = vec4(1. / 255., 0, 0, (dist - size) < 0. ? (1. / 255.) : 0.);\n}\nfloat intersectPointTriangleBary(vec2 p, vec2 a, vec2 b, vec2 c) {\nreturn inTriangle(xyToBarycentric(p, a, b, c));\n}\nfloat distPointTriangle(vec2 p, vec2 a, vec2 b, vec2 c) {\nvec2 ba = b - a;\nvec2 ca = c - a;\nfloat crossProduct = ba.x * ca.y - ca.x * ba.y;\nbool isParallel = crossProduct < EPSILON_HITTEST && crossProduct > -EPSILON_HITTEST;\nif (isParallel) {\nreturn -1.;\n}\nif (intersectPointTriangleBary(p.xy, a, b, c) == 1.) {\nreturn 0.;\n}\nfloat distAB = distPointSegment(p, a, b);\nfloat distBC = distPointSegment(p, b, c);\nfloat distCA = distPointSegment(p, c, a);\nreturn min(min(distAB, distBC), distCA);\n}\n#endif"},icon:{"common.glsl":"#include <util/encoding.glsl>\nuniform lowp vec2 u_mosaicSize;\nvarying lowp vec4 v_color;\nvarying highp vec3 v_id;\nvarying highp vec4 v_sizeTex;\nvarying mediump vec3 v_pos;\nvarying lowp float v_opacity;\nuniform lowp sampler2D u_texture;\n#ifdef SDF\nvarying lowp vec4 v_outlineColor;\nvarying mediump float v_outlineWidth;\nvarying mediump float v_distRatio;\nvarying mediump float v_overridingOutlineColor;\nvarying mediump float v_isThin;\n#endif\n#ifdef SDF\nvec4 getColor(vec2 v_size, vec2 v_tex) {\nlowp vec4 fillPixelColor = v_color;\nfloat d = 0.5 - rgba2float(texture2D(u_texture, v_tex));\nfloat size = max(v_size.x, v_size.y);\nfloat dist = d * size * SOFT_EDGE_RATIO * v_distRatio;\nfillPixelColor *= clamp(0.5 - dist, 0.0, 1.0);\nfloat outlineWidth = v_outlineWidth;\n#ifdef HIGHLIGHT\noutlineWidth = max(outlineWidth, 4.0 * v_isThin);\n#endif\nif (outlineWidth > 0.25) {\nlowp vec4 outlinePixelColor = v_overridingOutlineColor * v_color + (1.0 - v_overridingOutlineColor) * v_outlineColor;\nfloat clampedOutlineSize = min(outlineWidth, size);\noutlinePixelColor *= clamp(0.5 - abs(dist) + clampedOutlineSize * 0.5, 0.0, 1.0);\nreturn v_opacity * ((1.0 - outlinePixelColor.a) * fillPixelColor + outlinePixelColor);\n}\nreturn v_opacity * fillPixelColor;\n}\n#else\nvec4 getColor(vec2 _v_size, vec2 v_tex) {\nlowp vec4 texColor = texture2D(u_texture, v_tex);\nreturn v_opacity * texColor * v_color;\n}\n#endif",heatmapAccumulate:{"common.glsl":"varying lowp vec4 v_hittestResult;\nvarying mediump vec2 v_offsetFromCenter;\nvarying highp float v_fieldValue;","heatmapAccumulate.frag":"precision mediump float;\n#include <materials/icon/heatmapAccumulate/common.glsl>\n#ifdef HEATMAP_PRECISION_HALF_FLOAT\n#define COMPRESSION_FACTOR 0.25\n#else\n#define COMPRESSION_FACTOR 1.0\n#endif\nuniform lowp sampler2D u_texture;\nvoid main() {\n#ifdef HITTEST\ngl_FragColor = v_hittestResult;\n#else\nfloat radius = length(v_offsetFromCenter);\nfloat shapeWeight = step(radius, 1.0);\nfloat oneMinusRadiusSquared = 1.0 - radius * radius;\nfloat kernelWeight = oneMinusRadiusSquared * oneMinusRadiusSquared;\ngl_FragColor = vec4(shapeWeight * kernelWeight * v_fieldValue * COMPRESSION_FACTOR);\n#endif\n}","heatmapAccumulate.vert":"precision highp float;\nattribute vec2 a_vertexOffset;\nvec4 a_color = vec4(0.0);\nvec2 a_zoomRange = vec2(0.0, 10000.0);\nuniform float u_radius;\nuniform float u_isFieldActive;\n#include <materials/vcommon.glsl>\n#include <materials/hittest/common.glsl>\n#include <materials/icon/heatmapAccumulate/common.glsl>\nvoid main() {\nfloat filterFlags = getFilterFlags();\n#ifdef HITTEST\nhighp vec4 out_hittestResult = vec4(0.);\nhighp vec3 out_pos = vec3(0.);\nvec3 pos = u_viewMat3 * u_tileMat3 * vec3(a_pos * POSITION_PRECISION, 1.0);\nhittestMarker(out_hittestResult, out_pos, pos, u_radius);\nv_hittestResult = out_hittestResult;\ngl_PointSize = 1.;\ngl_Position = vec4(clip(a_color, out_pos, filterFlags, a_zoomRange), 1.0);\n#else\nv_offsetFromCenter = sign(a_vertexOffset);\nv_fieldValue = getAttributeData2(a_id).x * u_isFieldActive + 1.0 - u_isFieldActive;\nvec3 centerPos = u_dvsMat3 * vec3(a_pos * POSITION_PRECISION, 1.0);\nvec3 vertexPos = centerPos + u_displayViewMat3 * vec3(v_offsetFromCenter, 0.0) * u_radius;\ngl_Position = vec4(clip(a_color, vertexPos, filterFlags, a_zoomRange), 1.0);\n#endif\n}"},"hittest.glsl":"#ifdef HITTEST\n#include <materials/hittest/common.glsl>\nattribute vec2 a_vertexOffset1;\nattribute vec2 a_vertexOffset2;\nattribute vec2 a_texCoords1;\nattribute vec2 a_texCoords2;\nvec2 getTextureCoords(in vec3 bary, in vec2 texCoords0, in vec2 texCoords1, in vec2 texCoords2) {\nreturn texCoords0 * bary.x + texCoords1 * bary.y + texCoords2 * bary.z;\n}\nvoid hittestIcon(\ninout lowp vec4 out_color,\nout highp vec3 out_pos,\nin vec3 pos,\nin vec3 offset,\nin vec2 size,\nin float scaleFactor,\nin float isMapAligned\n) {\nout_pos = vec3(getAttributeDataTextureCoords(a_id), 0.0);\nvec3 posBase = u_viewMat3 * u_tileMat3  * pos;\nvec3 offset1 = scaleFactor * vec3(a_vertexOffset1 / 16.0, 0.);\nvec3 offset2 = scaleFactor * vec3(a_vertexOffset2 / 16.0, 0.);\nvec2 pos0    = (posBase + getMatrixNoDisplay(isMapAligned) * offset).xy;\nvec2 pos1    = (posBase + getMatrixNoDisplay(isMapAligned) * offset1).xy;\nvec2 pos2    = (posBase + getMatrixNoDisplay(isMapAligned) * offset2).xy;\nvec3 bary0 = xyToBarycentric(u_hittestPos + vec2(-u_hittestDist, -u_hittestDist), pos0, pos1, pos2);\nvec3 bary1 = xyToBarycentric(u_hittestPos + vec2(0., -u_hittestDist), pos0, pos1, pos2);\nvec3 bary2 = xyToBarycentric(u_hittestPos + vec2(u_hittestDist, -u_hittestDist), pos0, pos1, pos2);\nvec3 bary3 = xyToBarycentric(u_hittestPos + vec2(-u_hittestDist, 0.), pos0, pos1, pos2);\nvec3 bary4 = xyToBarycentric(u_hittestPos, pos0, pos1, pos2);\nvec3 bary5 = xyToBarycentric(u_hittestPos + vec2(u_hittestDist, 0.), pos0, pos1, pos2);\nvec3 bary6 = xyToBarycentric(u_hittestPos + vec2(-u_hittestDist, u_hittestDist), pos0, pos1, pos2);\nvec3 bary7 = xyToBarycentric(u_hittestPos + vec2(0., u_hittestDist), pos0, pos1, pos2);\nvec3 bary8 = xyToBarycentric(u_hittestPos + vec2(u_hittestDist, u_hittestDist), pos0, pos1, pos2);\nvec2 tex0 = a_texCoords  / u_mosaicSize;\nvec2 tex1 = a_texCoords1 / u_mosaicSize;\nvec2 tex2 = a_texCoords2 / u_mosaicSize;\nfloat alphaSum = 0.;\nalphaSum += inTriangle(bary0) * getColor(size, getTextureCoords(bary0, tex0, tex1, tex2)).a;\nalphaSum += inTriangle(bary1) * getColor(size, getTextureCoords(bary1, tex0, tex1, tex2)).a;\nalphaSum += inTriangle(bary2) * getColor(size, getTextureCoords(bary2, tex0, tex1, tex2)).a;\nalphaSum += inTriangle(bary3) * getColor(size, getTextureCoords(bary3, tex0, tex1, tex2)).a;\nalphaSum += inTriangle(bary4) * getColor(size, getTextureCoords(bary4, tex0, tex1, tex2)).a;\nalphaSum += inTriangle(bary5) * getColor(size, getTextureCoords(bary5, tex0, tex1, tex2)).a;\nalphaSum += inTriangle(bary6) * getColor(size, getTextureCoords(bary6, tex0, tex1, tex2)).a;\nalphaSum += inTriangle(bary7) * getColor(size, getTextureCoords(bary7, tex0, tex1, tex2)).a;\nout_pos.z += step(alphaSum, .05) * 2.0;\nout_color = vec4(1. / 255., 0., 0., alphaSum / 255.);\n}\n#endif","icon.frag":"precision mediump float;\n#include <materials/constants.glsl>\n#include <materials/utils.glsl>\n#include <materials/icon/common.glsl>\nvoid main()\n{\n#ifdef HITTEST\nvec4 color = v_color;\n#else\nvec4 color = getColor(v_sizeTex.xy, v_sizeTex.zw);\n#endif\n#ifdef HIGHLIGHT\ncolor.a = step(1.0 / 255.0, color.a);\n#endif\ngl_FragColor = color;\n}","icon.vert":"precision highp float;\nattribute vec4 a_color;\nattribute vec4 a_outlineColor;\nattribute vec4 a_sizeAndOutlineWidth;\nattribute vec2 a_vertexOffset;\nattribute vec2 a_texCoords;\nattribute vec2 a_bitSetAndDistRatio;\nattribute vec2 a_zoomRange;\n#include <materials/vcommon.glsl>\n#include <materials/icon/common.glsl>\n#include <materials/icon/hittest.glsl>\nfloat getMarkerScaleFactor(inout vec2 size, in float referenceSize) {\n#ifdef VV_SIZE\nfloat f = getSize(size.y) / size.y;\nfloat sizeFactor = size.y / referenceSize;\nreturn getSize(referenceSize) / referenceSize;\n#else\nreturn 1.;\n#endif\n}\nvoid main()\n{\nINIT;\nfloat a_bitSet = a_bitSetAndDistRatio.x;\nvec3  pos           = vec3(a_pos * POSITION_PRECISION, 1.0);\nvec2  size          = a_sizeAndOutlineWidth.xy * a_sizeAndOutlineWidth.xy / 128.0;\nvec3  offset        = vec3(a_vertexOffset / 16.0, 0.);\nfloat outlineSize   = a_sizeAndOutlineWidth.z * a_sizeAndOutlineWidth.z / 128.0;\nfloat isMapAligned  = getBit(a_bitSet, BITSET_MARKER_ALIGNMENT_MAP);\nfloat referenceSize = a_sizeAndOutlineWidth.w * a_sizeAndOutlineWidth.w / 128.0;\nfloat scaleSymbolProportionally = getBit(a_bitSet, BITSET_MARKER_SCALE_SYMBOLS_PROPORTIONALLY);\nfloat scaleFactor               = getMarkerScaleFactor(size, referenceSize);\nsize.xy     *= scaleFactor;\noffset.xy   *= scaleFactor;\noutlineSize *= scaleSymbolProportionally * (scaleFactor - 1.0) + 1.0;\nvec2 v_tex   = a_texCoords / u_mosaicSize;\nfloat filterFlags = getFilterFlags();\nv_color    = getColor(a_color, a_bitSet, BITSET_GENERIC_LOCK_COLOR);\nv_opacity  = getOpacity();\nv_id       = norm(a_id);\nv_pos      = u_dvsMat3 * pos + getMatrix(isMapAligned) * getRotation()  * offset;\nv_sizeTex  = vec4(size.xy, v_tex.xy);\n#ifdef SDF\nv_isThin   = getBit(a_bitSet, BITSET_MARKER_OUTLINE_ALLOW_COLOR_OVERRIDE);\n#ifdef VV_COLOR\nv_overridingOutlineColor = v_isThin;\n#else\nv_overridingOutlineColor = 0.0;\n#endif\nv_outlineWidth = min(outlineSize, max(max(size.x, size.y) - 0.99, 0.0));\nv_outlineColor = a_outlineColor;\nv_distRatio = a_bitSetAndDistRatio.y / 126.0;\n#endif\n#ifdef HITTEST\nhighp vec4 out_color = vec4(0.);\nhighp vec3 out_pos   = vec3(0.);\nhittestIcon(out_color, out_pos, pos, offset, size, scaleFactor, isMapAligned);\nv_color = out_color;\ngl_PointSize = 1.;\ngl_Position = vec4(clip(v_color, out_pos, filterFlags, a_zoomRange), 1.0);\n#else\ngl_Position = vec4(clip(v_color, v_pos, filterFlags, a_zoomRange), 1.0);\n#endif\n}"},label:{"common.glsl":"uniform mediump float u_zoomLevel;\nuniform mediump float u_mapRotation;\nuniform mediump float u_mapAligned;\nuniform mediump vec2 u_mosaicSize;\nvarying mediump float v_antialiasingWidth;\nvarying mediump float v_edgeDistanceOffset;\nvarying mediump vec2 v_tex;\nvarying mediump vec4 v_color;\nvarying lowp vec4 v_animation;","label.frag":"#include <materials/text/text.frag>","label.vert":"precision highp float;\n#include <materials/vcommon.glsl>\n#include <materials/text/common.glsl>\nattribute vec4 a_color;\nattribute vec4 a_haloColor;\nattribute vec4 a_texAndSize;\nattribute vec4 a_refSymbolAndPlacementOffset;\nattribute vec4 a_glyphData;\nattribute vec2 a_vertexOffset;\nattribute vec2 a_texCoords;\nuniform float u_isHaloPass;\nuniform float u_isBackgroundPass;\nuniform float u_mapRotation;\nuniform float u_mapAligned;\nfloat getZ(in float minZoom, in float maxZoom, in float angle) {\nfloat glyphAngle = angle * 360.0 / 254.0;\nfloat mapAngle = u_mapRotation * 360.0 / 254.0;\nfloat diffAngle = min(360.0 - abs(mapAngle - glyphAngle), abs(mapAngle - glyphAngle));\nfloat z = 0.0;\nz += u_mapAligned * (2.0 * (1.0 - step(minZoom, u_currentZoom)));\nz += u_mapAligned * 2.0 * step(90.0, diffAngle);\nz += 2.0 * (1.0 - step(u_currentZoom, maxZoom));\nreturn z;\n}\nvoid main()\n{\nINIT;\nfloat groupMinZoom    = getMinZoom();\nfloat glyphMinZoom    = a_glyphData.x;\nfloat glyphMaxZoom    = a_glyphData.y;\nfloat glyphAngle      = a_glyphData.z;\nfloat a_isBackground  = a_glyphData.w;\nfloat a_minZoom          = max(groupMinZoom, glyphMinZoom);\nfloat a_placementPadding = a_refSymbolAndPlacementOffset.x * EXTRUDE_SCALE_PLACEMENT_PADDING;\nvec2  a_placementDir     = unpack_u8_nf32(a_refSymbolAndPlacementOffset.zw);\nfloat a_refSymbolSize    = a_refSymbolAndPlacementOffset.y;\nfloat fontSize           = a_texAndSize.z;\nfloat haloSize           = a_texAndSize.w * OUTLINE_SCALE;\nvec2  vertexOffset = a_vertexOffset * OFFSET_PRECISION;\nvec3  pos          = vec3(a_pos * POSITION_PRECISION, 1.0);\nfloat z            = getZ(a_minZoom, glyphMaxZoom, glyphAngle);\nfloat fontScale    = fontSize / SDF_FONT_SIZE;\nfloat halfSize     = getSize(a_refSymbolSize) / 2.0;\nfloat animation    = pow(getAnimationState(), vec4(2.0)).r;\nfloat isText = 1.0 - a_isBackground;\nfloat isBackground = u_isBackgroundPass * a_isBackground;\nvec4  nonHaloColor = (isBackground + isText) * a_color;\nv_color     = animation * ((1.0 - u_isHaloPass) * nonHaloColor + (u_isHaloPass * a_haloColor));\nv_opacity   = 1.0;\nv_tex       = a_texCoords / u_mosaicSize;\nv_edgeDistanceOffset = u_isHaloPass * haloSize / fontScale / MAX_SDF_DISTANCE;\nv_antialiasingWidth  = 0.105 * SDF_FONT_SIZE / fontSize / u_pixelRatio;\nvec2 placementOffset = a_placementDir * (halfSize + a_placementPadding);\nvec3 glyphOffset     = u_displayMat3 * vec3(vertexOffset + placementOffset, 0.0);\nvec3 v_pos           = vec3((u_dvsMat3 * pos + glyphOffset).xy, z);\nfloat isHidden = u_isBackgroundPass * isText + (1.0 - u_isBackgroundPass) * a_isBackground;\nv_pos.z += 2.0 * isHidden;\ngl_Position = vec4(v_pos, 1.0);\n#ifdef DEBUG\nv_color = vec4(a_color.rgb, z == 0.0 ? 1.0 : 0.645);\n#endif\n}"},line:{"common.glsl":"varying lowp vec4 v_color;\nvarying highp vec3 v_id;\nvarying mediump vec2 v_normal;\nvarying mediump float v_lineHalfWidth;\nvarying lowp float v_opacity;\n#ifdef PATTERN\nvarying mediump vec4 v_tlbr;\nvarying mediump vec2 v_patternSize;\n#endif\n#if defined(PATTERN) || defined(SDF)\nvarying highp float v_accumulatedDistance;\n#endif\n#ifdef SDF\nvarying mediump float v_lineWidthRatio;\n#endif","hittest.glsl":"#include <materials/hittest/common.glsl>\n#ifdef HITTEST\nattribute vec2 a_pos1;\nattribute vec2 a_pos2;\nvoid hittestLine(out lowp vec4 out_color, out highp vec3 out_pos, float halfWidth) {\nvec3 pos        = u_viewMat3 * u_tileMat3 * vec3(a_pos  * POSITION_PRECISION, 1.);\nvec3 pos1       = u_viewMat3 * u_tileMat3 * vec3(a_pos1 * POSITION_PRECISION, 1.);\nvec3 pos2       = u_viewMat3 * u_tileMat3 * vec3(a_pos2 * POSITION_PRECISION, 1.);\nvec3 outTextureCoords = vec3(getAttributeDataTextureCoords(a_id), 0.0);\nfloat dist = min(distPointSegment(u_hittestPos, pos.xy, pos1.xy),\ndistPointSegment(u_hittestPos, pos.xy, pos2.xy)) - halfWidth;\nout_pos = vec3(getAttributeDataTextureCoords(a_id), 0.0);\nif (dist >= u_hittestDist) {\nout_pos.z += 2.0;\n}\nout_color = vec4(1. / 255., 0, 0, dist <= 0. ? (1. / 255.) : 0.);\n}\n#endif","line.frag":"precision lowp float;\n#include <util/encoding.glsl>\n#include <materials/constants.glsl>\n#include <materials/symbologyTypeUtils.glsl>\n#include <materials/line/common.glsl>\n#include <materials/shared/line/common.glsl>\n#include <materials/shared/line/line.frag>\n#ifdef HITTEST\nvoid main() {\ngl_FragColor = v_color;\n}\n#else\nvoid main() {\nLineData inputs = LineData(\nv_color,\nv_normal,\nv_lineHalfWidth,\nv_opacity,\n#ifndef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\n#ifdef PATTERN\nv_tlbr,\nv_patternSize,\n#endif\n#ifdef SDF\nv_lineWidthRatio,\n#endif\n#if defined(PATTERN) || defined(SDF)\nv_accumulatedDistance,\n#endif\n#endif\nv_id\n);\ngl_FragColor = shadeLine(inputs);\n}\n#endif",
"line.vert":"precision highp float;\nattribute vec4 a_color;\nattribute vec4 a_offsetAndNormal;\nattribute vec2 a_accumulatedDistanceAndHalfWidth;\nattribute vec4 a_tlbr;\nattribute vec4 a_segmentDirection;\nattribute vec2 a_aux;\nattribute vec2 a_zoomRange;\n#include <materials/vcommon.glsl>\n#include <materials/symbologyTypeUtils.glsl>\n#include <materials/line/common.glsl>\n#include <materials/line/hittest.glsl>\n#include <materials/shared/line/common.glsl>\n#include <materials/shared/line/line.vert>\n#ifdef HITTEST\nvoid draw() {\nfloat aa        = 0.5 * u_antialiasing;\nfloat a_halfWidth = a_accumulatedDistanceAndHalfWidth.y / 16.;\nfloat a_cimHalfWidth = a_aux.x / 16. ;\nvec2  a_offset = a_offsetAndNormal.xy / 16.;\nfloat baseWidth = getBaseLineHalfWidth(a_halfWidth, a_cimHalfWidth);\nfloat halfWidth = getLineHalfWidth(baseWidth, aa);\nhighp vec3 pos  = vec3(0.);\nv_color = vec4(0.);\nhittestLine(v_color, pos, halfWidth);\ngl_PointSize = 1.;\ngl_Position = vec4(clip(v_color, pos, getFilterFlags(), a_zoomRange), 1.0);\n}\n#else\nvoid draw()\n{\nhighp vec3 pos = vec3(0.);\nLineData outputs = buildLine(\npos,\na_id,\na_pos,\na_color,\na_offsetAndNormal.xy / 16.,\na_offsetAndNormal.zw / 16.,\na_accumulatedDistanceAndHalfWidth.x,\na_accumulatedDistanceAndHalfWidth.y / 16.,\na_segmentDirection.w,\na_tlbr,\na_segmentDirection.xy / 16.,\na_aux.x / 16.\n);\nv_id              = outputs.id;\nv_color           = outputs.color;\nv_normal          = outputs.normal;\nv_lineHalfWidth   = outputs.lineHalfWidth;\nv_opacity         = outputs.opacity;\n#ifndef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\n#ifdef PATTERN\nv_tlbr          = outputs.tlbr;\nv_patternSize   = outputs.patternSize;\n#endif\n#ifdef SDF\nv_lineWidthRatio = outputs.lineWidthRatio;\n#endif\n#if defined(PATTERN) || defined(SDF)\nv_accumulatedDistance = outputs.accumulatedDistance;\n#endif\n#endif\ngl_Position = vec4(clip(outputs.color, pos, getFilterFlags(), a_zoomRange), 1.0);\n}\n#endif\nvoid main() {\nINIT;\ndraw();\n}"},pie:{"pie.frag":"precision mediump float;\n#include <util/atan2.glsl>\n#include <materials/constants.glsl>\n#include <materials/utils.glsl>\n#include <materials/icon/common.glsl>\nvarying float v_size;\nvarying vec2 v_offset;\nvarying vec2 v_filteredSectorToColorId[NUMBER_OF_FIELDS];\nvarying float v_numOfEntries;\nvarying float v_maxSectorAngle;\nuniform lowp vec4 u_colors[NUMBER_OF_FIELDS];\nuniform lowp vec4 u_defaultColor;\nuniform lowp vec4 u_othersColor;\nuniform lowp vec4 u_outlineColor;\nuniform float u_donutRatio;\nuniform float u_sectorThreshold;\nstruct FilteredChartInfo {\nfloat endSectorAngle;\nint colorId;\n};\nlowp vec4 getSectorColor(in int index, in vec2 filteredSectorToColorId[NUMBER_OF_FIELDS]) {\n#if __VERSION__ == 300\nmediump int colorIndex = int(filteredSectorToColorId[index].y);\nreturn u_colors[colorIndex];\n#else\nmediump int colorIndex;\nfor (int i = 0; i < NUMBER_OF_FIELDS; ++i) {\nif (i == index) {\ncolorIndex = int(filteredSectorToColorId[i].y);\n}\n}\nfor (int i = 0; i < NUMBER_OF_FIELDS; ++i) {\nif (i == colorIndex) {\nreturn u_colors[i];\n}\n}\nreturn u_colors[NUMBER_OF_FIELDS - 1];\n#endif\n}\nconst int OTHER_SECTOR_ID = 255;\n#ifdef HITTEST\nvec4 getColor() {\nreturn v_color;\n}\n#else\nvec4 getColor() {\nfloat angle = 90.0 - C_RAD_TO_DEG * atan2(v_offset.y, v_offset.x);\nif (angle < 0.0) {\nangle += 360.0;\n} else if (angle > 360.0) {\nangle = mod(angle, 360.0);\n}\nint numOfEntries = int(v_numOfEntries);\nfloat maxSectorAngle = v_maxSectorAngle;\nlowp vec4 fillColor = (maxSectorAngle > 0.0 || u_sectorThreshold > 0.0) ? u_othersColor : u_defaultColor;\nlowp vec4 prevColor = vec4(0.0);\nlowp vec4 nextColor = vec4(0.0);\nfloat startSectorAngle = 0.0;\nfloat endSectorAngle = 0.0;\nif (angle < maxSectorAngle) {\nfor (int index = 0; index < NUMBER_OF_FIELDS; ++index) {\nstartSectorAngle = endSectorAngle;\nendSectorAngle = v_filteredSectorToColorId[index].x;\nif (endSectorAngle > angle) {\nfillColor = getSectorColor(index, v_filteredSectorToColorId);\nprevColor = u_sectorThreshold != 0.0 && index == 0 && abs(360.0 - maxSectorAngle) < EPSILON ? u_othersColor :\ngetSectorColor(index > 0 ? index - 1 : numOfEntries - 1, v_filteredSectorToColorId);\nnextColor = u_sectorThreshold != 0.0 && abs(endSectorAngle - maxSectorAngle) < EPSILON ? u_othersColor :\ngetSectorColor(index < numOfEntries - 1 ? index + 1 : 0, v_filteredSectorToColorId);\nbreak;\n}\nif (index == numOfEntries - 1) {\nbreak;\n}\n}\n} else {\nprevColor = getSectorColor(numOfEntries - 1, v_filteredSectorToColorId);\nnextColor = getSectorColor(0, v_filteredSectorToColorId);\nstartSectorAngle = maxSectorAngle;\nendSectorAngle = 360.0;\n}\nlowp vec4 outlineColor = u_outlineColor;\nfloat offset = length(v_offset);\nfloat distanceSize = offset * v_size;\nif (startSectorAngle != 0.0 || endSectorAngle != 360.0) {\nfloat distanceToStartSector = (angle - startSectorAngle);\nfloat distanceToEndSector = (endSectorAngle - angle);\nfloat sectorThreshold = 0.6;\nfloat beginSectorAlpha = smoothstep(0.0, sectorThreshold, distanceToStartSector * offset);\nfloat endSectorAlpha = smoothstep(0.0, sectorThreshold, distanceToEndSector * offset);\nif (endSectorAlpha > 0.0) {\nfillColor = mix(nextColor, fillColor, endSectorAlpha);\n} else if (beginSectorAlpha > 0.0) {\nfillColor = mix(prevColor, fillColor, beginSectorAlpha);\n}\n}\nfloat donutSize = u_donutRatio * (v_size - v_outlineWidth);\nfloat endOfDonut = donutSize - v_outlineWidth;\nfloat aaThreshold = 0.75;\nfloat innerCircleAlpha = endOfDonut - aaThreshold > 0.0 ? smoothstep(endOfDonut - aaThreshold, endOfDonut + aaThreshold, distanceSize) : 1.0;\nfloat outerCircleAlpha = 1.0 - smoothstep(v_size - aaThreshold, v_size + aaThreshold , distanceSize);\nfloat circleAlpha = innerCircleAlpha * outerCircleAlpha;\nfloat startOfOutline = v_size - v_outlineWidth;\nif (startOfOutline > 0.0 && v_outlineWidth > 0.25) {\nfloat outlineFactor = smoothstep(startOfOutline - aaThreshold, startOfOutline + aaThreshold, distanceSize);\nfloat innerLineFactor = donutSize - aaThreshold > 0.0 ? 1.0 - smoothstep(donutSize - aaThreshold, donutSize + aaThreshold , distanceSize) : 0.0;\nfillColor = mix(fillColor, outlineColor, innerLineFactor + outlineFactor);\n}\nreturn v_opacity * circleAlpha * fillColor;\n}\n#endif\nvoid main()\n{\nvec4 color = getColor();\n#ifdef HIGHLIGHT\ncolor.a = step(1.0 / 255.0, color.a);\n#endif\ngl_FragColor = color;\n}","pie.vert":"precision highp float;\nattribute vec4 a_color;\nattribute vec4 a_outlineColor;\nattribute vec4 a_sizeAndOutlineWidth;\nattribute vec2 a_vertexOffset;\nattribute vec2 a_texCoords;\nattribute vec2 a_bitSetAndDistRatio;\nattribute vec2 a_zoomRange;\nuniform float u_outlineWidth;\nuniform mediump float u_sectorThreshold;\nvarying float v_size;\nvarying vec2 v_offset;\nvarying vec2 v_filteredSectorToColorId[NUMBER_OF_FIELDS];\nvarying float v_numOfEntries;\nvarying float v_maxSectorAngle;\nstruct FilteredChartInfo {\nfloat endSectorAngle;\nint colorId;\n};\nint filter(in float sectorAngle,\nin int currentIndex,\ninout FilteredChartInfo filteredInfo,\ninout vec2 filteredSectorToColorId[NUMBER_OF_FIELDS]) {\nif (sectorAngle > u_sectorThreshold * 360.0) {\nfilteredInfo.endSectorAngle += sectorAngle;\n#if __VERSION__ == 300\nfilteredSectorToColorId[filteredInfo.colorId] = vec2(filteredInfo.endSectorAngle, currentIndex);\n#else\nfor (int i = 0; i < NUMBER_OF_FIELDS; i++) {\nif (i == filteredInfo.colorId) {\nfilteredSectorToColorId[i] = vec2(filteredInfo.endSectorAngle, currentIndex);\n}\n}\n#endif\n++filteredInfo.colorId;\n}\nreturn 0;\n}\nint filterValues(inout vec2 filteredSectorToColorId[NUMBER_OF_FIELDS],\ninout FilteredChartInfo filteredInfo,\nin float sectorAngles[NUMBER_OF_FIELDS]) {\nfor (int index = 0; index < NUMBER_OF_FIELDS; ++index) {\nfloat sectorValue = sectorAngles[index];\nfilter(sectorValue, index, filteredInfo, filteredSectorToColorId);\n}\nreturn filteredInfo.colorId;\n}\n#include <materials/vcommon.glsl>\n#include <materials/icon/common.glsl>\n#include <materials/hittest/common.glsl>\nvec2 getMarkerSize(inout vec2 offset, inout vec2 baseSize, inout float outlineSize, in float referenceSize, in float bitSet) {\nvec2 outSize = baseSize;\n#ifdef VV_SIZE\nfloat r = 0.5 * getSize(referenceSize) / referenceSize;\noutSize.xy *= r;\noffset.xy *= r;\nfloat scaleSymbolProportionally = getBit(bitSet, BITSET_MARKER_SCALE_SYMBOLS_PROPORTIONALLY);\noutlineSize *= scaleSymbolProportionally * (r - 1.0) + 1.0;\n#endif\nreturn outSize;\n}\nvec3 getOffset(in vec2 in_offset, float a_bitSet) {\nfloat isMapAligned = getBit(a_bitSet, BITSET_MARKER_ALIGNMENT_MAP);\nvec3  offset       = vec3(in_offset, 0.0);\nreturn getMatrix(isMapAligned) * offset;\n}\nfloat filterNaNValues(in float value) {\nreturn value != NAN_MAGIC_NUMBER && value > 0.0 ? value : 0.0;\n}\nvoid main()\n{\nINIT;\nvec2  a_size   = a_sizeAndOutlineWidth.xy * a_sizeAndOutlineWidth.xy / 128.0;\nvec2  a_offset = a_vertexOffset / 16.0;\nfloat outlineSize = u_outlineWidth;\nfloat a_bitSet = a_bitSetAndDistRatio.x;\nvec2 size = getMarkerSize(a_offset, a_size, outlineSize, a_sizeAndOutlineWidth.w * a_sizeAndOutlineWidth.w / 128.0, a_bitSet);\nfloat filterFlags = getFilterFlags();\nvec3  pos         = vec3(a_pos * POSITION_PRECISION, 1.0);\nv_opacity      = getOpacity();\nv_id           = norm(a_id);\nv_pos          = u_dvsMat3 * pos + getOffset(a_offset, a_bitSet);\nv_offset       = sign(a_texCoords - 0.5);\nv_size         = max(size.x, size.y);\nv_outlineWidth = outlineSize;\nfloat attributeData[10];\nvec4 attributeData0 = getAttributeData3(a_id);\nattributeData[0] = filterNaNValues(attributeData0.x);\nattributeData[1] = filterNaNValues(attributeData0.y);\nattributeData[2] = filterNaNValues(attributeData0.z);\nattributeData[3] = filterNaNValues(attributeData0.w);\n#if (NUMBER_OF_FIELDS > 4)\nvec4 attributeData1 = getAttributeData4(a_id);\nattributeData[4] = filterNaNValues(attributeData1.x);\nattributeData[5] = filterNaNValues(attributeData1.y);\nattributeData[6] = filterNaNValues(attributeData1.z);\nattributeData[7] = filterNaNValues(attributeData1.w);\n#endif\n#if (NUMBER_OF_FIELDS > 8)\nvec4 attributeData2 = getAttributeData5(a_id);\nattributeData[8] = filterNaNValues(attributeData2.x);\nattributeData[9] = filterNaNValues(attributeData2.y);\n#endif\nfloat sum = 0.0;\nfor (int i = 0; i < NUMBER_OF_FIELDS; ++i) {\nsum += attributeData[i];\n}\nfloat sectorAngles[NUMBER_OF_FIELDS];\nfor (int i = 0; i < NUMBER_OF_FIELDS; ++i) {\nsectorAngles[i] = 360.0 * attributeData[i] / sum;\n}\nvec2 filteredSectorToColorId[NUMBER_OF_FIELDS];\nFilteredChartInfo filteredInfo = FilteredChartInfo(0.0, 0);\nint numOfEntries = filterValues(filteredSectorToColorId, filteredInfo, sectorAngles);\nv_numOfEntries = float(numOfEntries);\nv_maxSectorAngle = filteredInfo.endSectorAngle;\n#if __VERSION__ == 300\nv_filteredSectorToColorId = filteredSectorToColorId;\n#else\nfor (int i = 0; i < NUMBER_OF_FIELDS; ++i) {\nif (i == numOfEntries) {\nbreak;\n}\nv_filteredSectorToColorId[i] = filteredSectorToColorId[i];\n}\n#endif\n#ifdef HITTEST\nhighp vec3 out_pos = vec3(0.0);\nv_color            = vec4(0.0);\nhittestMarker(v_color, out_pos, u_viewMat3 * u_tileMat3 *  pos, v_size);\ngl_PointSize = 1.0;\ngl_Position = vec4(clip(v_color, out_pos, filterFlags, a_zoomRange), 1.0);\n#else\ngl_Position = vec4(clip(v_color, v_pos, filterFlags, a_zoomRange), 1.0);\n#endif\n}"},shared:{line:{"common.glsl":"#if !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE) && defined(PATTERN)\nuniform mediump vec2 u_mosaicSize;\nvarying mediump float v_sampleAlphaOnly;\n#endif\nstruct LineData {\nlowp vec4 color;\nmediump vec2 normal;\nmediump float lineHalfWidth;\nlowp float opacity;\n#ifndef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\n#ifdef PATTERN\nmediump vec4 tlbr;\nmediump vec2 patternSize;\n#endif\n#ifdef SDF\nmediump float lineWidthRatio;\n#endif\n#if defined(PATTERN) || defined(SDF)\nhighp float accumulatedDistance;\n#endif\n#endif\nhighp vec3 id;\n};","line.frag":"uniform lowp float u_blur;\n#if !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE) && !defined(HIGHLIGHT)\n#if defined(PATTERN) || defined(SDF)\nuniform sampler2D u_texture;\nuniform highp float u_pixelRatio;\n#endif\n#endif\n#if defined(SDF) && !defined(HIGHLIGHT) && !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE)\nlowp vec4 getLineColor(LineData line) {\nmediump float adjustedPatternWidth = line.patternSize.x * 2.0 * line.lineWidthRatio;\nmediump float relativeTexX = fract(line.accumulatedDistance / adjustedPatternWidth);\nmediump float relativeTexY = 0.5 + 0.25 * line.normal.y;\nmediump vec2 texCoord = mix(line.tlbr.xy, line.tlbr.zw, vec2(relativeTexX, relativeTexY));\nmediump float d = rgba2float(texture2D(u_texture, texCoord)) - 0.5;\nfloat dist = d * line.lineHalfWidth;\nreturn line.opacity * clamp(0.5 - dist, 0.0, 1.0) * line.color;\n}\n#elif defined(PATTERN) && !defined(HIGHLIGHT) && !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE)\nlowp vec4 getLineColor(LineData line) {\nmediump float lineHalfWidth = line.lineHalfWidth;\nmediump float adjustedPatternHeight = line.patternSize.y * 2.0 * lineHalfWidth / line.patternSize.x;\nmediump float relativeTexY = fract(line.accumulatedDistance / adjustedPatternHeight);\nmediump float relativeTexX = 0.5 + 0.5 * line.normal.y;\nmediump vec2 texCoord = mix(line.tlbr.xy, line.tlbr.zw, vec2(relativeTexX, relativeTexY));\nlowp vec4 color = texture2D(u_texture, texCoord);\n#ifdef VV_COLOR\nif (v_sampleAlphaOnly > 0.5) {\ncolor.rgb = vec3(color.a);\n}\n#endif\nreturn line.opacity * line.color * color;\n}\n#else\nlowp vec4 getLineColor(LineData line) {\nreturn line.opacity * line.color;\n}\n#endif\nvec4 shadeLine(LineData line)\n{\nmediump float thinLineFactor = max(THIN_LINE_WIDTH_FACTOR * step(line.lineHalfWidth, THIN_LINE_HALF_WIDTH), 1.0);\nmediump float fragDist = length(line.normal) * line.lineHalfWidth;\nlowp float alpha = clamp(thinLineFactor * (line.lineHalfWidth - fragDist) / (u_blur + thinLineFactor - 1.0), 0.0, 1.0);\nlowp vec4 out_color = getLineColor(line) * alpha;\n#ifdef HIGHLIGHT\nout_color.a = step(1.0 / 255.0, out_color.a);\n#endif\n#ifdef ID\nif (out_color.a < 1.0 / 255.0) {\ndiscard;\n}\nout_color = vec4(line.id, 0.0);\n#endif\nreturn out_color;\n}","line.vert":"float getBaseLineHalfWidth(in float lineHalfWidth, in float referenceHalfWidth) {\n#ifdef VV_SIZE\nfloat refLineWidth = 2.0 * referenceHalfWidth;\nreturn 0.5 * (lineHalfWidth / max(referenceHalfWidth, EPSILON)) * getSize(refLineWidth);\n#else\nreturn lineHalfWidth;\n#endif\n}\nfloat getLineHalfWidth(in float baseWidth, in float aa) {\nfloat halfWidth = max(baseWidth + aa, 0.45) + 0.1 * aa;\n#ifdef HIGHLIGHT\nhalfWidth = max(halfWidth, 2.0);\n#endif\nreturn halfWidth;\n}\nvec2 getDist(in vec2 offset, in float halfWidth) {\nfloat thinLineFactor = max(THIN_LINE_WIDTH_FACTOR * step(halfWidth, THIN_LINE_HALF_WIDTH), 1.0);\nreturn thinLineFactor * halfWidth * offset;\n}\nLineData buildLine(\nout vec3 out_pos,\nin vec3 in_id,\nin vec2 in_pos,\nin vec4 in_color,\nin vec2 in_offset,\nin vec2 in_normal,\nin float in_accumulatedDist,\nin float in_lineHalfWidth,\nin float in_bitSet,\nin vec4 in_tlbr,\nin vec2 in_segmentDirection,\nin float in_referenceHalfWidth\n)\n{\nfloat aa        = 0.5 * u_antialiasing;\nfloat baseWidth = getBaseLineHalfWidth(in_lineHalfWidth, in_referenceHalfWidth);\nfloat halfWidth = getLineHalfWidth(baseWidth, aa);\nfloat z         = 2.0 * step(baseWidth, 0.0);\nvec2  dist      = getDist(in_offset, halfWidth);\nvec3  offset    = u_displayViewMat3 * vec3(dist, 0.0);\nvec3  pos       = u_dvsMat3 * vec3(in_pos * POSITION_PRECISION, 1.0) + offset;\n#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\nvec4  color     = in_color;\nfloat opacity   = 1.0;\n#else\nvec4  color     = getColor(in_color, in_bitSet, BITSET_GENERIC_LOCK_COLOR);\nfloat opacity   = getOpacity();\n#ifdef SDF\nconst float SDF_PATTERN_HALF_WIDTH = 15.5;\nfloat scaleDash = getBit(in_bitSet, BITSET_LINE_SCALE_DASH);\nfloat lineWidthRatio = (scaleDash * max(halfWidth - 0.55 * u_antialiasing, 0.25) + (1.0 - scaleDash)) / SDF_PATTERN_HALF_WIDTH;\n#endif\n#endif\n#if !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE) && defined(PATTERN)\nv_sampleAlphaOnly = getBit(in_bitSet, BITSET_GENERIC_CONSIDER_ALPHA_ONLY);\n#endif\nout_pos = vec3(pos.xy, z);\nreturn LineData(\ncolor,\nin_normal,\nhalfWidth,\nopacity,\n#ifndef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\n#ifdef PATTERN\nin_tlbr / u_mosaicSize.xyxy,\nvec2(in_tlbr.z - in_tlbr.x, in_tlbr.w - in_tlbr.y),\n#endif\n#ifdef SDF\nlineWidthRatio,\n#endif\n#if defined(PATTERN) || defined(SDF)\nin_accumulatedDist * u_zoomFactor + dot(in_segmentDirection, dist),\n#endif\n#endif\nnorm(in_id)\n);\n}"}},"symbologyTypeUtils.glsl":"#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_OUTLINE_FILL || SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_OUTLINE_FILL_SIMPLE\n#define SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\n#endif\n#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_SIMPLE || SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_OUTLINE_FILL_SIMPLE\n#define SYMBOLOGY_TYPE_IS_SIMPLE_LIKE\n#endif",text:{"common.glsl":"uniform highp vec2 u_mosaicSize;\nvarying highp vec3 v_id;\nvarying mediump vec3 v_pos;\nvarying lowp float v_opacity;\nvarying lowp vec4 v_color;\nvarying highp vec2 v_tex;\nvarying mediump float v_antialiasingWidth;\nvarying mediump float v_edgeDistanceOffset;\nvarying lowp float v_transparency;","hittest.glsl":"#include <materials/hittest/common.glsl>","text.frag":"precision mediump float;\n#include <materials/text/common.glsl>\nuniform lowp sampler2D u_texture;\n#ifdef HITTEST\nvec4 getColor() {\nreturn v_color;\n}\n#else\nvec4 getColor()\n{\nfloat SDF_CUTOFF = (2.0 / 8.0);\nfloat SDF_BASE_EDGE_DIST = 1.0 - SDF_CUTOFF;\nlowp float dist = texture2D(u_texture, v_tex).a;\nmediump float edge = SDF_BASE_EDGE_DIST - v_edgeDistanceOffset;\n#ifdef HIGHLIGHT\nedge /= 2.0;\n#endif\nlowp float aa = v_antialiasingWidth;\nlowp float alpha = smoothstep(edge - aa, edge + aa, dist);\nreturn alpha * v_color * v_opacity;\n}\n#endif\nvoid main()\n{\ngl_FragColor = getColor();\n}","text.vert":"precision highp float;\n#include <materials/utils.glsl>\n#include <materials/vcommon.glsl>\n#include <materials/text/common.glsl>\n#include <materials/text/hittest.glsl>\nattribute vec4 a_color;\nattribute vec4 a_haloColor;\nattribute vec4 a_texFontSize;\nattribute vec4 a_aux;\nattribute vec2 a_zoomRange;\nattribute vec2 a_vertexOffset;\nattribute vec2 a_texCoords;\nuniform float u_isHaloPass;\nuniform float u_isBackgroundPass;\nfloat getTextSize(inout vec2 offset, inout float baseSize, in float referenceSize) {\n#ifdef VV_SIZE\nfloat r = getSize(referenceSize) / referenceSize;\nbaseSize *= r;\noffset.xy *= r;\nreturn baseSize;\n#endif\nreturn baseSize;\n}\nvoid main()\n{\nINIT;\nfloat a_isBackground  = a_aux.y;\nfloat a_referenceSize = a_aux.z * a_aux.z / 256.0;\nfloat a_bitSet        = a_aux.w;\nfloat a_fontSize      = a_texFontSize.z;\nvec2  a_offset        = a_vertexOffset * OFFSET_PRECISION;\nvec3  in_pos        = vec3(a_pos * POSITION_PRECISION, 1.0);\nfloat fontSize      = getTextSize(a_offset, a_fontSize, a_referenceSize);\nfloat fontScale     = fontSize / SDF_FONT_SIZE;\nvec3  offset        = getRotation() * vec3(a_offset, 0.0);\nmat3  extrudeMatrix = getBit(a_bitSet, 0) == 1.0 ? u_displayViewMat3 : u_displayMat3;\nfloat isText = 1.0 - a_isBackground;\nfloat isBackground = u_isBackgroundPass * a_isBackground;\nvec4  nonHaloColor  = (isBackground * a_color) + (isText * getColor(a_color, a_bitSet, 1));\nv_color   = u_isHaloPass * a_haloColor + (1.0 - u_isHaloPass) * nonHaloColor;\nv_opacity = getOpacity();\nv_id      = norm(a_id);\nv_tex     = a_texCoords / u_mosaicSize;\nv_pos     = u_dvsMat3 * in_pos + extrudeMatrix * offset;\nfloat isHidden = u_isBackgroundPass * isText + (1.0 - u_isBackgroundPass) * a_isBackground;\nv_pos.z += 2.0 * isHidden;\nv_edgeDistanceOffset = u_isHaloPass * OUTLINE_SCALE * a_texFontSize.w / fontScale / MAX_SDF_DISTANCE;\nv_antialiasingWidth  = 0.105 * SDF_FONT_SIZE / fontSize / u_pixelRatio;\n#ifdef HITTEST\nhighp vec3 out_pos  = vec3(0.);\nv_color = vec4(0.);\nhittestMarker(v_color, out_pos, u_viewMat3 * u_tileMat3 *  vec3(a_pos * POSITION_PRECISION, 1.0)\n+ u_tileMat3 * offset, fontSize / 2.);\ngl_PointSize = 1.;\ngl_Position = vec4(clip(v_color, out_pos, getFilterFlags(), a_zoomRange), 1.0);\n#else\ngl_Position =  vec4(clip(v_color, v_pos, getFilterFlags(), a_zoomRange), 1.0);\n#endif\n}"},"utils.glsl":"float rshift(in float u32, in int amount) {\nreturn floor(u32 / pow(2.0, float(amount)));\n}\nfloat getBit(in float bitset, in int bitIndex) {\nfloat offset = pow(2.0, float(bitIndex));\nreturn mod(floor(bitset / offset), 2.0);\n}\nfloat getFilterBit(in float bitset, in int bitIndex) {\nreturn getBit(bitset, bitIndex + 1);\n}\nfloat getHighlightBit(in float bitset) {\nreturn getBit(bitset, 0);\n}\nhighp vec3 unpackDisplayIdTexel(in highp vec3 bitset) {\nfloat isAggregate = getBit(bitset.b, 7);\nreturn (1.0 - isAggregate) * bitset + isAggregate * (vec3(bitset.rgb) - vec3(0.0, 0.0, float(0x80)));\n}\nvec4 unpack(in float u32) {\nfloat r = mod(rshift(u32, 0), 255.0);\nfloat g = mod(rshift(u32, 8), 255.0);\nfloat b = mod(rshift(u32, 16), 255.0);\nfloat a = mod(rshift(u32, 24), 255.0);\nreturn vec4(r, g, b, a);\n}\nvec3 norm(in vec3 v) {\nreturn v /= 255.0;\n}\nvec4 norm(in vec4 v) {\nreturn v /= 255.0;\n}\nfloat max4(vec4 target) {\nreturn max(max(max(target.x, target.y), target.z), target.w);\n}\nvec2 unpack_u8_nf32(vec2 bytes) {\nreturn (bytes - 127.0) / 127.0;\n}\nhighp float rand(in vec2 co) {\nhighp float a = 12.9898;\nhighp float b = 78.233;\nhighp float c = 43758.5453;\nhighp float dt = dot(co, vec2(a,b));\nhighp float sn = mod(dt, 3.14);\nreturn fract(sin(sn) * c);\n}","vcommon.glsl":"#include <materials/constants.glsl>\n#include <materials/utils.glsl>\n#include <materials/attributeData.glsl>\n#include <materials/vv.glsl>\n#include <materials/barycentric.glsl>\nattribute vec2 a_pos;\nattribute highp vec3 a_id;\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform highp mat3 u_displayViewMat3;\nuniform highp mat3 u_tileMat3;\nuniform highp mat3 u_viewMat3;\nuniform highp float u_pixelRatio;\nuniform mediump float u_zoomFactor;\nuniform mediump float u_antialiasing;\nuniform mediump float u_currentZoom;\nvec4 VV_ADATA = vec4(0.0);\nvoid loadVisualVariableData(inout vec4 target) {\n#ifdef SUPPORTS_TEXTURE_FLOAT\ntarget.rgba = getAttributeData2(a_id);\n#else\nvec4 data0 = getAttributeData2(a_id);\nvec4 data1 = getAttributeData3(a_id);\ntarget.r = u88VVToFloat(data0.rg * 255.0);\ntarget.g = u88VVToFloat(data0.ba * 255.0);\ntarget.b = u88VVToFloat(data1.rg * 255.0);\ntarget.a = u88VVToFloat(data1.ba * 255.0);\n#endif\n}\n#ifdef VV\n#define INIT loadVisualVariableData(VV_ADATA)\n#else\n#define INIT\n#endif\nvec4 getColor(in vec4 a_color, in float a_bitSet, int index) {\n#ifdef VV_COLOR\nfloat isColorLocked   = getBit(a_bitSet, index);\nreturn getVVColor(VV_ADATA[ATTR_VV_COLOR], a_color, isColorLocked);\n#else\nreturn a_color;\n#endif\n}\nfloat getOpacity() {\n#ifdef VV_OPACITY\nreturn getVVOpacity(VV_ADATA[ATTR_VV_OPACITY]);\n#else\nreturn 1.0;\n#endif\n}\nfloat getSize(in float in_size) {\n#ifdef VV_SIZE\nreturn getVVSize(in_size, VV_ADATA[ATTR_VV_SIZE]);\n#else\nreturn in_size;\n#endif\n}\nmat3 getRotation() {\n#ifdef VV_ROTATION\nreturn getVVRotationMat3(mod(VV_ADATA[ATTR_VV_ROTATION], 360.0));\n#else\nreturn mat3(1.0);\n#endif\n}\nfloat getFilterFlags() {\n#ifdef IGNORES_SAMPLER_PRECISION\nreturn ceil(getAttributeData0(a_id).x * 255.0);\n#else\nreturn getAttributeData0(a_id).x * 255.0;\n#endif\n}\nvec4 getAnimationState() {\nreturn getAttributeData1(a_id);\n}\nfloat getMinZoom() {\nvec4 data0 = getAttributeData0(a_id) * 255.0;\nreturn data0.g;\n}\nmat3 getMatrixNoDisplay(float isMapAligned) {\nreturn isMapAligned * u_viewMat3 * u_tileMat3 + (1.0 - isMapAligned) * u_tileMat3;\n}\nmat3 getMatrix(float isMapAligned) {\nreturn isMapAligned * u_displayViewMat3 + (1.0 - isMapAligned) * u_displayMat3;\n}\nvec3 clip(inout vec4 color, inout vec3 pos, in float filterFlags, in vec2 minMaxZoom) {\npos.z += 2.0 * (1.0 - getFilterBit(filterFlags, 0));\n#ifdef INSIDE\npos.z += 2.0 * (1.0 - getFilterBit(filterFlags, 1));\n#elif defined(OUTSIDE)\npos.z += 2.0 * getFilterBit(filterFlags, 1);\n#elif defined(HIGHLIGHT)\n#if !defined(HIGHLIGHT_ALL)\npos.z += 2.0 * (1.0 - getHighlightBit(filterFlags));\n#endif\n#endif\npos.z += 2.0 * (step(minMaxZoom.y, u_currentZoom) + (1.0 - step(minMaxZoom.x, u_currentZoom)));\nreturn pos;\n}","vv.glsl":"#if defined(VV_SIZE_MIN_MAX_VALUE) || defined(VV_SIZE_SCALE_STOPS) || defined(VV_SIZE_FIELD_STOPS) || defined(VV_SIZE_UNIT_VALUE)\n#define VV_SIZE\n#endif\n#if defined(VV_COLOR) || defined(VV_SIZE) || defined(VV_OPACITY) || defined(VV_ROTATION)\n#define VV\n#endif\n#ifdef VV_COLOR\nuniform highp float u_vvColorValues[8];\nuniform vec4 u_vvColors[8];\n#endif\n#ifdef VV_SIZE_MIN_MAX_VALUE\nuniform highp vec4 u_vvSizeMinMaxValue;\n#endif\n#ifdef VV_SIZE_SCALE_STOPS\nuniform highp float u_vvSizeScaleStopsValue;\n#endif\n#ifdef VV_SIZE_FIELD_STOPS\nuniform highp float u_vvSizeFieldStopsValues[6];\nuniform float u_vvSizeFieldStopsSizes[6];\n#endif\n#ifdef VV_SIZE_UNIT_VALUE\nuniform highp float u_vvSizeUnitValueWorldToPixelsRatio;\n#endif\n#ifdef VV_OPACITY\nuniform highp float u_vvOpacityValues[8];\nuniform float u_vvOpacities[8];\n#endif\n#ifdef VV_ROTATION\nuniform lowp float u_vvRotationType;\n#endif\nbool isNan(float val) {\nreturn (val == NAN_MAGIC_NUMBER);\n}\n#ifdef VV_SIZE_MIN_MAX_VALUE\nfloat getVVMinMaxSize(float sizeValue, float fallback) {\nif (isNan(sizeValue)) {\nreturn fallback;\n}\nfloat interpolationRatio = (sizeValue  - u_vvSizeMinMaxValue.x) / (u_vvSizeMinMaxValue.y - u_vvSizeMinMaxValue.x);\ninterpolationRatio = clamp(interpolationRatio, 0.0, 1.0);\nreturn u_vvSizeMinMaxValue.z + interpolationRatio * (u_vvSizeMinMaxValue.w - u_vvSizeMinMaxValue.z);\n}\n#endif\n#ifdef VV_SIZE_FIELD_STOPS\nconst int VV_SIZE_N = 6;\nfloat getVVStopsSize(float sizeValue, float fallback) {\nif (isNan(sizeValue)) {\nreturn fallback;\n}\nif (sizeValue <= u_vvSizeFieldStopsValues[0]) {\nreturn u_vvSizeFieldStopsSizes[0];\n}\nfor (int i = 1; i < VV_SIZE_N; ++i) {\nif (u_vvSizeFieldStopsValues[i] >= sizeValue) {\nfloat f = (sizeValue - u_vvSizeFieldStopsValues[i-1]) / (u_vvSizeFieldStopsValues[i] - u_vvSizeFieldStopsValues[i-1]);\nreturn mix(u_vvSizeFieldStopsSizes[i-1], u_vvSizeFieldStopsSizes[i], f);\n}\n}\nreturn u_vvSizeFieldStopsSizes[VV_SIZE_N - 1];\n}\n#endif\n#ifdef VV_SIZE_UNIT_VALUE\nfloat getVVUnitValue(float sizeValue, float fallback) {\nif (isNan(sizeValue)) {\nreturn fallback;\n}\nreturn u_vvSizeUnitValueWorldToPixelsRatio * sizeValue;\n}\n#endif\n#ifdef VV_OPACITY\nconst int VV_OPACITY_N = 8;\nfloat getVVOpacity(float opacityValue) {\nif (isNan(opacityValue)) {\nreturn 1.0;\n}\nif (opacityValue <= u_vvOpacityValues[0]) {\nreturn u_vvOpacities[0];\n}\nfor (int i = 1; i < VV_OPACITY_N; ++i) {\nif (u_vvOpacityValues[i] >= opacityValue) {\nfloat f = (opacityValue - u_vvOpacityValues[i-1]) / (u_vvOpacityValues[i] - u_vvOpacityValues[i-1]);\nreturn mix(u_vvOpacities[i-1], u_vvOpacities[i], f);\n}\n}\nreturn u_vvOpacities[VV_OPACITY_N - 1];\n}\n#endif\n#ifdef VV_ROTATION\nmat4 getVVRotation(float rotationValue) {\nif (isNan(rotationValue)) {\nreturn mat4(1, 0, 0, 0,\n0, 1, 0, 0,\n0, 0, 1, 0,\n0, 0, 0, 1);\n}\nfloat rotation = rotationValue;\nif (u_vvRotationType == 1.0) {\nrotation = 90.0 - rotation;\n}\nfloat angle = C_DEG_TO_RAD * rotation;\nfloat sinA = sin(angle);\nfloat cosA = cos(angle);\nreturn mat4(cosA, sinA, 0, 0,\n-sinA,  cosA, 0, 0,\n0,     0, 1, 0,\n0,     0, 0, 1);\n}\nmat3 getVVRotationMat3(float rotationValue) {\nif (isNan(rotationValue)) {\nreturn mat3(1, 0, 0,\n0, 1, 0,\n0, 0, 1);\n}\nfloat rotation = rotationValue;\nif (u_vvRotationType == 1.0) {\nrotation = 90.0 - rotation;\n}\nfloat angle = C_DEG_TO_RAD * -rotation;\nfloat sinA = sin(angle);\nfloat cosA = cos(angle);\nreturn mat3(cosA, -sinA, 0,\nsinA, cosA, 0,\n0,    0,    1);\n}\n#endif\n#ifdef VV_COLOR\nconst int VV_COLOR_N = 8;\nvec4 getVVColor(float colorValue, vec4 fallback, float isColorLocked) {\nif (isNan(colorValue) || isColorLocked == 1.0) {\nreturn fallback;\n}\nif (colorValue <= u_vvColorValues[0]) {\nreturn u_vvColors[0];\n}\nfor (int i = 1; i < VV_COLOR_N; ++i) {\nif (u_vvColorValues[i] >= colorValue) {\nfloat f = (colorValue - u_vvColorValues[i-1]) / (u_vvColorValues[i] - u_vvColorValues[i-1]);\nreturn mix(u_vvColors[i-1], u_vvColors[i], f);\n}\n}\nreturn u_vvColors[VV_COLOR_N - 1];\n}\n#endif\nfloat getVVSize(in float size, in float vvSize)  {\n#ifdef VV_SIZE_MIN_MAX_VALUE\nreturn getVVMinMaxSize(vvSize, size);\n#elif defined(VV_SIZE_SCALE_STOPS)\nreturn u_vvSizeScaleStopsValue;\n#elif defined(VV_SIZE_FIELD_STOPS)\nfloat outSize = getVVStopsSize(vvSize, size);\nreturn isNan(outSize) ? size : outSize;\n#elif defined(VV_SIZE_UNIT_VALUE)\nreturn getVVUnitValue(vvSize, size);\n#else\nreturn size;\n#endif\n}"},overlay:{overlay:{"overlay.frag":"precision lowp float;\nuniform lowp sampler2D u_texture;\nuniform lowp float u_opacity;\nvarying mediump vec2 v_uv;\nvoid main() {\nvec4 color = texture2D(u_texture, v_uv);\ngl_FragColor = color *  u_opacity;\n}","overlay.vert":"precision mediump float;\nattribute vec2 a_pos;\nattribute vec2 a_uv;\nuniform highp mat3 u_dvsMat3;\nuniform mediump vec2 u_perspective;\nvarying mediump vec2 v_uv;\nvoid main(void) {\nv_uv = a_uv;\nfloat w = 1.0 + dot(a_uv, u_perspective);\nvec3 pos = u_dvsMat3 * vec3(a_pos, 1.0);\ngl_Position = vec4(w * pos.xy, 0.0, w);\n}"}},"post-processing":{blit:{"blit.frag":"precision mediump float;\nuniform sampler2D u_texture;\nvarying vec2 v_uv;\nvoid main() {\ngl_FragColor = texture2D(u_texture, v_uv);\n}"},bloom:{composite:{"composite.frag":"precision mediump float;\nvarying vec2 v_uv;\nuniform sampler2D u_blurTexture1;\nuniform sampler2D u_blurTexture2;\nuniform sampler2D u_blurTexture3;\nuniform sampler2D u_blurTexture4;\nuniform sampler2D u_blurTexture5;\nuniform float u_bloomStrength;\nuniform float u_bloomRadius;\nuniform float u_bloomFactors[NUMMIPS];\nuniform vec3 u_bloomTintColors[NUMMIPS];\nfloat lerpBloomFactor(const in float factor) {\nfloat mirrorFactor = 1.2 - factor;\nreturn mix(factor, mirrorFactor, u_bloomRadius);\n}\nvoid main() {\nvec4 color = u_bloomStrength * (\nlerpBloomFactor(u_bloomFactors[0]) * vec4(u_bloomTintColors[0], 1.0) * texture2D(u_blurTexture1, v_uv) +\nlerpBloomFactor(u_bloomFactors[1]) * vec4(u_bloomTintColors[1], 1.0) * texture2D(u_blurTexture2, v_uv) +\nlerpBloomFactor(u_bloomFactors[2]) * vec4(u_bloomTintColors[2], 1.0) * texture2D(u_blurTexture3, v_uv) +\nlerpBloomFactor(u_bloomFactors[3]) * vec4(u_bloomTintColors[3], 1.0) * texture2D(u_blurTexture4, v_uv) +\nlerpBloomFactor(u_bloomFactors[4]) * vec4(u_bloomTintColors[4], 1.0) * texture2D(u_blurTexture5, v_uv)\n);\ngl_FragColor = clamp(color, 0.0, 1.0);\n}"},gaussianBlur:{"gaussianBlur.frag":"precision mediump float;\nuniform sampler2D u_colorTexture;\nuniform vec2 u_texSize;\nuniform vec2 u_direction;\nvarying vec2 v_uv;\n#define KERNEL_RADIUS RADIUS\n#define SIGMA RADIUS\nfloat gaussianPdf(in float x, in float sigma) {\nreturn 0.39894 * exp(-0.5 * x * x / ( sigma * sigma)) / sigma;\n}\nvoid main() {\nvec2 invSize = 1.0 / u_texSize;\nfloat fSigma = float(SIGMA);\nfloat weightSum = gaussianPdf(0.0, fSigma);\nvec4 pixelColorSum = texture2D(u_colorTexture, v_uv) * weightSum;\nfor (int i = 1; i < KERNEL_RADIUS; i ++) {\nfloat x = float(i);\nfloat w = gaussianPdf(x, fSigma);\nvec2 uvOffset = u_direction * invSize * x;\nvec4 sample1 = texture2D(u_colorTexture, v_uv + uvOffset);\nvec4 sample2 = texture2D(u_colorTexture, v_uv - uvOffset);\npixelColorSum += (sample1 + sample2) * w;\nweightSum += 2.0 * w;\n}\ngl_FragColor = pixelColorSum /weightSum;\n}"},luminosityHighPass:{"luminosityHighPass.frag":"precision mediump float;\nuniform sampler2D u_texture;\nuniform vec3 u_defaultColor;\nuniform float u_defaultOpacity;\nuniform float u_luminosityThreshold;\nuniform float u_smoothWidth;\nvarying vec2 v_uv;\nvoid main() {\nvec4 texel = texture2D(u_texture, v_uv);\nvec3 luma = vec3(0.299, 0.587, 0.114);\nfloat v = dot(texel.xyz, luma);\nvec4 outputColor = vec4(u_defaultColor.rgb, u_defaultOpacity);\nfloat alpha = smoothstep(u_luminosityThreshold, u_luminosityThreshold + u_smoothWidth, v);\ngl_FragColor = mix(outputColor, texel, alpha);\n}"}},blur:{gaussianBlur:{"gaussianBlur.frag":"precision mediump float;\nuniform sampler2D u_colorTexture;\nuniform vec2 u_texSize;\nuniform vec2 u_direction;\nuniform float u_sigma;\nvarying vec2 v_uv;\n#define KERNEL_RADIUS RADIUS\nfloat gaussianPdf(in float x, in float sigma) {\nreturn 0.39894 * exp(-0.5 * x * x / ( sigma * sigma)) / sigma;\n}\nvoid main() {\nvec2 invSize = 1.0 / u_texSize;\nfloat fSigma = u_sigma;\nfloat weightSum = gaussianPdf(0.0, fSigma);\nvec4 pixelColorSum = texture2D(u_colorTexture, v_uv) * weightSum;\nfor (int i = 1; i < KERNEL_RADIUS; i ++) {\nfloat x = float(i);\nfloat w = gaussianPdf(x, fSigma);\nvec2 uvOffset = u_direction * invSize * x;\nvec4 sample1 = texture2D(u_colorTexture, v_uv + uvOffset);\nvec4 sample2 = texture2D(u_colorTexture, v_uv - uvOffset);\npixelColorSum += (sample1 + sample2) * w;\nweightSum += 2.0 * w;\n}\ngl_FragColor = pixelColorSum /weightSum;\n}"},"radial-blur":{"radial-blur.frag":"precision mediump float;\nuniform sampler2D u_colorTexture;\nvarying vec2 v_uv;\nconst float sampleDist = 1.0;\nconst float sampleStrength = 2.2;\nvoid main(void) {\nfloat samples[10];\nsamples[0] = -0.08;\nsamples[1] = -0.05;\nsamples[2] = -0.03;\nsamples[3] = -0.02;\nsamples[4] = -0.01;\nsamples[5] =  0.01;\nsamples[6] =  0.02;\nsamples[7] =  0.03;\nsamples[8] =  0.05;\nsamples[9] =  0.08;\nvec2 dir = 0.5 - v_uv;\nfloat dist = sqrt(dir.x * dir.x + dir.y * dir.y);\ndir = dir / dist;\nvec4 color = texture2D(u_colorTexture,v_uv);\nvec4 sum = color;\nfor (int i = 0; i < 10; i++) {\nsum += texture2D(u_colorTexture, v_uv + dir * samples[i] * sampleDist);\n}\nsum *= 1.0 / 11.0;\nfloat t = dist * sampleStrength;\nt = clamp(t, 0.0, 1.0);\ngl_FragColor = mix(color, sum, t);\n}"}},dra:{"dra.frag":"precision mediump float;\nuniform sampler2D u_minColor;\nuniform sampler2D u_maxColor;\nuniform sampler2D u_texture;\nvarying vec2 v_uv;\nvoid main() {\nvec4 minColor = texture2D(u_minColor, vec2(0.5));\nvec4 maxColor = texture2D(u_maxColor, vec2(0.5));\nvec4 color = texture2D(u_texture, v_uv);\nvec3 minColorUnpremultiply = minColor.rgb / minColor.a;\nvec3 maxColorUnpremultiply = maxColor.rgb / maxColor.a;\nvec3 colorUnpremultiply = color.rgb / color.a;\nvec3 range = maxColorUnpremultiply - minColorUnpremultiply;\ngl_FragColor = vec4(color.a * (colorUnpremultiply - minColorUnpremultiply) / range, color.a);\n}","min-max":{"min-max.frag":"#extension GL_EXT_draw_buffers : require\nprecision mediump float;\n#define CELL_SIZE 2\nuniform sampler2D u_minTexture;\nuniform sampler2D u_maxTexture;\nuniform vec2 u_srcResolution;\nuniform vec2 u_dstResolution;\nvarying vec2 v_uv;\nvoid main() {\nvec2 srcPixel = floor(gl_FragCoord.xy) * float(CELL_SIZE);\nvec2 onePixel = vec2(1.0) / u_srcResolution;\nvec2 uv = (srcPixel + 0.5) / u_srcResolution;\nvec4 minColor = vec4(1.0);\nvec4 maxColor = vec4(0.0);\nfor (int y = 0; y < CELL_SIZE; ++y) {\nfor (int x = 0; x < CELL_SIZE; ++x) {\nvec2 offset = uv + vec2(x, y) * onePixel;\nminColor = min(minColor, texture2D(u_minTexture, offset));\nmaxColor = max(maxColor, texture2D(u_maxTexture, offset));\n}\n}\ngl_FragData[0] = minColor;\ngl_FragData[1] = maxColor;\n}"}},"drop-shadow":{composite:{"composite.frag":"precision mediump float;\nuniform sampler2D u_layerFBOTexture;\nuniform sampler2D u_blurTexture;\nuniform vec4 u_shadowColor;\nuniform vec2 u_shadowOffset;\nuniform highp mat3 u_displayViewMat3;\nvarying vec2 v_uv;\nvoid main() {\nvec3 offset = u_displayViewMat3 * vec3(u_shadowOffset, 0.0);\nvec4 layerColor = texture2D(u_layerFBOTexture, v_uv);\nvec4 blurColor = texture2D(u_blurTexture, v_uv - offset.xy / 2.0);\ngl_FragColor = ((1.0 - layerColor.a) * blurColor.a * u_shadowColor + layerColor);\n}"}},"edge-detect":{"frei-chen":{"frei-chen.frag":"precision mediump float;\nuniform sampler2D u_colorTexture;\nuniform vec2 u_texSize;\nvarying vec2 v_uv;\nvec2 texel = vec2(1.0 / u_texSize.x, 1.0 / u_texSize.y);\nmat3 G[9];\nconst mat3 g0 = mat3( 0.3535533845424652, 0, -0.3535533845424652, 0.5, 0, -0.5, 0.3535533845424652, 0, -0.3535533845424652 );\nconst mat3 g1 = mat3( 0.3535533845424652, 0.5, 0.3535533845424652, 0, 0, 0, -0.3535533845424652, -0.5, -0.3535533845424652 );\nconst mat3 g2 = mat3( 0, 0.3535533845424652, -0.5, -0.3535533845424652, 0, 0.3535533845424652, 0.5, -0.3535533845424652, 0 );\nconst mat3 g3 = mat3( 0.5, -0.3535533845424652, 0, -0.3535533845424652, 0, 0.3535533845424652, 0, 0.3535533845424652, -0.5 );\nconst mat3 g4 = mat3( 0, -0.5, 0, 0.5, 0, 0.5, 0, -0.5, 0 );\nconst mat3 g5 = mat3( -0.5, 0, 0.5, 0, 0, 0, 0.5, 0, -0.5 );\nconst mat3 g6 = mat3( 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.6666666865348816, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204 );\nconst mat3 g7 = mat3( -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, 0.6666666865348816, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408 );\nconst mat3 g8 = mat3( 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408 );\nvoid main() {\nG[0] = g0,\nG[1] = g1,\nG[2] = g2,\nG[3] = g3,\nG[4] = g4,\nG[5] = g5,\nG[6] = g6,\nG[7] = g7,\nG[8] = g8;\nmat3 I;\nfloat cnv[9];\nvec3 sample;\nfor (float i = 0.0; i < 3.0; i++) {\nfor (float j = 0.0; j < 3.0; j++) {\nsample = texture2D(u_colorTexture, v_uv + texel * vec2(i - 1.0,j - 1.0)).rgb;\nI[int(i)][int(j)] = length(sample);\n}\n}\nfor (int i = 0; i < 9; i++) {\nfloat dp3 = dot(G[i][0], I[0]) + dot(G[i][1], I[1]) + dot(G[i][2], I[2]);\ncnv[i] = dp3 * dp3;\n}\nfloat M = (cnv[0] + cnv[1]) + (cnv[2] + cnv[3]);\nfloat S = (cnv[4] + cnv[5]) + (cnv[6] + cnv[7]) + (cnv[8] + M);\ngl_FragColor = vec4(vec3(sqrt(M / S)), texture2D(u_colorTexture, v_uv).a);\n}"},sobel:{"sobel.frag":"precision mediump float;\nuniform sampler2D u_colorTexture;\nvarying vec2 v_uv;\nuniform vec2 u_texSize;\nvec2 texel = vec2(1.0 / u_texSize.x, 1.0 / u_texSize.y);\nmat3 G[2];\nconst mat3 g0 = mat3( 1.0, 2.0, 1.0, 0.0, 0.0, 0.0, -1.0, -2.0, -1.0 );\nconst mat3 g1 = mat3( 1.0, 0.0, -1.0, 2.0, 0.0, -2.0, 1.0, 0.0, -1.0 );\nvoid main() {\nmat3 I;\nfloat cnv[2];\nvec3 sample;\nG[0] = g0;\nG[1] = g1;\nfor (float i = 0.0; i < 3.0; i++) {\nfor (float j = 0.0; j < 3.0; j++) {\nsample = texture2D( u_colorTexture, v_uv + texel * vec2(i-1.0,j-1.0) ).rgb;\nI[int(i)][int(j)] = length(sample);\n}\n}\nfor (int i = 0; i < 2; i++) {\nfloat dp3 = dot(G[i][0], I[0]) + dot(G[i][1], I[1]) + dot(G[i][2], I[2]);\ncnv[i] = dp3 * dp3;\n}\ngl_FragColor = vec4(vec3(0.5 * sqrt(cnv[0] * cnv[0] + cnv[1] * cnv[1])), texture2D(u_colorTexture, v_uv).a);\n}"}},"edge-enhance":{"edge-enhance.frag":"precision mediump float;\nuniform sampler2D u_colorTexture;\nvarying vec2 v_uv;\nuniform vec2 u_texSize;\nvec2 texel = vec2(1.0 / u_texSize.x, 1.0 / u_texSize.y);\nmat3 G[2];\nconst mat3 g0 = mat3( 1.0, 0.0, -1.0, 1.0, 0.0, -1.0, 1.0, 0.0, -1.0 );\nconst mat3 g1 = mat3( 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, -1.0, -1.0, -1.0 );\nvoid main() {\nmat3 I;\nfloat cnv[2];\nvec3 sample;\nG[0] = g0;\nG[1] = g1;\nfor (float i = 0.0; i < 3.0; i++) {\nfor (float j = 0.0; j < 3.0; j++) {\nsample = texture2D( u_colorTexture, v_uv + texel * vec2(i-1.0,j-1.0) ).rgb;\nI[int(i)][int(j)] = length(sample);\n}\n}\nfor (int i = 0; i < 2; i++) {\nfloat dp3 = dot(G[i][0], I[0]) + dot(G[i][1], I[1]) + dot(G[i][2], I[2]);\ncnv[i] = dp3 * dp3;\n}\nvec4 color = texture2D(u_colorTexture, v_uv);\ngl_FragColor = vec4(0.5 * sqrt(cnv[0] * cnv[0] + cnv[1] * cnv[1]) * color);\n}"},filterEffect:{"filterEffect.frag":"precision mediump float;\nuniform sampler2D u_colorTexture;\nuniform mat4 u_coefficients;\nvarying vec2 v_uv;\nvoid main() {\nvec4 color = texture2D(u_colorTexture, v_uv);\nvec4 rgbw = u_coefficients * vec4(color.a > 0.0 ? color.rgb / color.a : vec3(0.0), 1.0);\nfloat a = color.a;\ngl_FragColor = vec4(a * rgbw.rgb, a);\n}"},pp:{"pp.vert":"precision mediump float;\nattribute vec2 a_position;\nvarying vec2 v_uv;\nvoid main() {\ngl_Position = vec4(a_position, 0.0, 1.0);\nv_uv = (a_position + 1.0) / 2.0;\n}"}},raster:{bitmap:{"bitmap.frag":"precision mediump float;\nvarying highp vec2 v_texcoord;\nuniform sampler2D u_texture;\nuniform highp vec2 u_coordScale;\nuniform lowp float u_opacity;\n#include <filtering/bicubic.glsl>\nvoid main() {\n#ifdef BICUBIC\nvec4 color = sampleBicubicBSpline(u_texture, v_texcoord, u_coordScale);\n#else\nvec4 color = texture2D(u_texture, v_texcoord);\n#endif\ngl_FragColor = vec4(color.rgb * u_opacity, color.a * u_opacity);\n}","bitmap.vert":"precision mediump float;\nattribute vec2 a_pos;\nuniform highp mat3 u_dvsMat3;\nuniform highp vec2 u_coordScale;\nvarying highp vec2 v_texcoord;\nvoid main()\n{\nv_texcoord = a_pos;\ngl_Position = vec4(u_dvsMat3 * vec3(a_pos * u_coordScale, 1.0), 1.0);\n}"},common:{"common.glsl":"uniform sampler2D u_image;\nuniform int u_bandCount;\nuniform bool u_flipY;\nuniform float u_opacity;\nuniform int u_resampling;\nuniform vec2 u_srcImageSize;\n#ifdef APPLY_PROJECTION\n#include <raster/common/projection.glsl>\n#endif\n#ifdef BICUBIC\n#include <filtering/bicubic.glsl>\n#endif\n#ifdef BILINEAR\n#include <filtering/bilinear.glsl>\n#endif\nvec2 getPixelLocation(vec2 coords) {\nvec2 targetLocation = u_flipY ? vec2(coords.s, 1.0 - coords.t) : coords;\n#ifdef APPLY_PROJECTION\ntargetLocation = projectPixelLocation(targetLocation);\n#endif\nreturn targetLocation;\n}\nbool isOutside(vec2 coords){\nif (coords.t>1.00001 ||coords.t<-0.00001 || coords.s>1.00001 ||coords.s<-0.00001) {\nreturn true;\n} else {\nreturn false;\n}\n}\nvec4 getPixel(vec2 pixelLocation) {\n#ifdef BICUBIC\nvec4 color = sampleBicubicBSpline(u_image, pixelLocation, u_srcImageSize);\n#elif defined(BILINEAR)\nvec4 color = sampleBilinear(u_image, pixelLocation, u_srcImageSize);\n#else\nvec4 color = texture2D(u_image, pixelLocation);\n#endif\nreturn color;\n}","common.vert":"precision mediump float;\nattribute vec2 a_pos;\nuniform highp mat3 u_dvsMat3;\nuniform highp vec2 u_coordScale;\nuniform highp float u_scale;\nuniform highp vec2 u_offset;\nvarying highp vec2 v_texcoord;\nvoid main()\n{\nv_texcoord = a_pos * u_scale + u_offset;\ngl_Position = vec4(u_dvsMat3 * vec3(a_pos * u_coordScale, 1.0), 1.0);\n}","contrastBrightness.glsl":"uniform float u_contrastOffset;\nuniform float u_brightnessOffset;\nvec4 adjustContrastBrightness(vec4 currentPixel, bool isFloat) {\nvec4 pixelValue = isFloat ? currentPixel * 255.0 : currentPixel;\nfloat maxI = 255.0;\nfloat mid = 128.0;\nfloat c = u_contrastOffset;\nfloat b = u_brightnessOffset;\nvec4 v;\nif (c > 0.0 && c < 100.0) {\nv = (200.0 * pixelValue - 100.0 * maxI + 2.0 * maxI * b) / (2.0 * (100.0 - c)) + mid;\n} else if (c <= 0.0 && c > -100.0) {\nv = (200.0 * pixelValue - 100.0 * maxI + 2.0 * maxI * b) * (100.0 + c) / 20000.0 + mid;\n} else if (c == 100.0) {\nv = (200.0 * pixelValue - 100.0 * maxI + (maxI + 1.0) * (100.0 - c) + 2.0 * maxI * b);\nv = (sign(v) + 1.0) / 2.0;\n} else if (c == -100.0) {\nv = vec4(mid, mid, mid, currentPixel.a);\n}\nreturn vec4(v.r / 255.0, v.g / 255.0, v.b / 255.0, currentPixel.a);\n}","inverse.glsl":"float invertValue(float value) {\nfloat s = sign(value);\nreturn (s * s) / (value + abs(s) - 1.0);\n}","mirror.glsl":"vec2 mirror(vec2 pos) {\nvec2 pos1 = abs(pos);\nreturn step(pos1, vec2(1.0, 1.0)) * pos1 + step(1.0, pos1) * (2.0 - pos1);\n}","projection.glsl":"uniform sampler2D u_transformGrid;\nuniform vec2 u_transformSpacing;\nuniform vec2 u_transformGridSize;\nuniform vec2 u_targetImageSize;\nvec2 projectPixelLocation(vec2 coords) {\n#ifdef LOOKUP_PROJECTION\nvec4 pv = texture2D(u_transformGrid, coords);\nreturn vec2(pv.r, pv.g);\n#endif\nvec2 index_image = floor(coords * u_targetImageSize);\nvec2 oneTransformPixel = vec2(0.25 / u_transformGridSize.s, 1.0 / u_transformGridSize.t);\nvec2 index_transform = floor(index_image / u_transformSpacing) / u_transformGridSize;\nvec2 pos = fract((index_image + vec2(0.5, 0.5)) / u_transformSpacing);\nvec2 srcLocation;\nvec2 transform_location = index_transform + oneTransformPixel * 0.5;\nif (pos.s <= pos.t) {\nvec4 ll_abc = texture2D(u_transformGrid, vec2(transform_location.s, transform_location.t));\nvec4 ll_def = texture2D(u_transformGrid, vec2(transform_location.s + oneTransformPixel.s, transform_location.t));\nsrcLocation.s = dot(ll_abc.rgb, vec3(pos, 1.0));\nsrcLocation.t = dot(ll_def.rgb, vec3(pos, 1.0));\n} else {\nvec4 ur_abc = texture2D(u_transformGrid, vec2(transform_location.s + 2.0 * oneTransformPixel.s, transform_location.t));\nvec4 ur_def = texture2D(u_transformGrid, vec2(transform_location.s + 3.0 * oneTransformPixel.s, transform_location.t));\nsrcLocation.s = dot(ur_abc.rgb, vec3(pos, 1.0));\nsrcLocation.t = dot(ur_def.rgb, vec3(pos, 1.0));\n}\nreturn srcLocation;\n}"},flow:{"getFadeOpacity.glsl":"uniform float u_decayRate;\nuniform float u_fadeToZero;\nfloat getFadeOpacity(float x) {\nfloat cutOff = mix(0.0, exp(-u_decayRate), u_fadeToZero);\nreturn (exp(-u_decayRate * x) - cutOff) / (1.0 - cutOff);\n}","getFragmentColor.glsl":"vec4 getFragmentColor(vec4 color, float dist, float size, float featheringSize) {\nfloat featheringStart = clamp(0.5 - featheringSize / size, 0.0, 0.5);\nif (dist > featheringStart) {\ncolor *= 1.0 - (dist - featheringStart) / (0.5 - featheringStart);\n}\nreturn color;\n}",imagery:{"imagery.frag":"precision highp float;\nvarying vec2 v_texcoord;\nuniform sampler2D u_texture;\nuniform float u_Min;\nuniform float u_Max;\nuniform float u_featheringSize;\n#include <raster/flow/vv.glsl>\nfloat getIntensity(float v) {\nreturn u_Min + v * (u_Max - u_Min);\n}\nvoid main(void) {\nvec4 sampled = texture2D(u_texture, v_texcoord);\nfloat intensity = getIntensity(sampled.r);\ngl_FragColor = getColor(intensity);\ngl_FragColor.a *= getOpacity(sampled.r);\ngl_FragColor.a *= sampled.a;\ngl_FragColor.rgb *= gl_FragColor.a;\n}","imagery.vert":"attribute vec2 a_position;\nattribute vec2 a_texcoord;\nuniform mat3 u_dvsMat3;\nvarying vec2 v_texcoord;\nvoid main(void) {\nvec2 xy = (u_dvsMat3 * vec3(a_position, 1.0)).xy;\ngl_Position = vec4(xy, 0.0, 1.0);\nv_texcoord = a_texcoord;\n}"},particles:{"particles.frag":"precision highp float;\nvarying vec4 v_color;\nvarying vec2 v_texcoord;\nvarying float v_size;\nuniform float u_featheringSize;\n#include <raster/flow/getFragmentColor.glsl>\nvoid main(void) {\ngl_FragColor = getFragmentColor(v_color, length(v_texcoord - 0.5), v_size, u_featheringSize);\n}",
"particles.vert":"attribute vec4 a_xyts0;\nattribute vec4 a_xyts1;\nattribute vec4 a_typeIdDurationSeed;\nattribute vec4 a_extrudeInfo;\nuniform mat3 u_dvsMat3;\nuniform mat3 u_displayViewMat3;\nuniform float u_time;\nuniform float u_trailLength;\nuniform float u_flowSpeed;\nvarying vec4 v_color;\nvarying vec2 v_texcoord;\nvarying float v_size;\nuniform float u_featheringSize;\nuniform float u_introFade;\n#include <raster/flow/vv.glsl>\n#include <raster/flow/getFadeOpacity.glsl>\nvoid main(void) {\nvec2 position0 = a_xyts0.xy;\nfloat t0 = a_xyts0.z;\nfloat speed0 = a_xyts0.w;\nvec2 position1 = a_xyts1.xy;\nfloat t1 = a_xyts1.z;\nfloat speed1 = a_xyts1.w;\nfloat type = a_typeIdDurationSeed.x;\nfloat id = a_typeIdDurationSeed.y;\nfloat duration = a_typeIdDurationSeed.z;\nfloat seed = a_typeIdDurationSeed.w;\nvec2 e0 = a_extrudeInfo.xy;\nvec2 e1 = a_extrudeInfo.zw;\nfloat animationPeriod = duration + u_trailLength;\nfloat scaledTime = u_time * u_flowSpeed;\nfloat randomizedTime = scaledTime + seed * animationPeriod;\nfloat t = mod(randomizedTime, animationPeriod);\nfloat fUnclamped = (t - t0) / (t1 - t0);\nfloat f = clamp(fUnclamped, 0.0, 1.0);\nfloat clampedTime = mix(t0, t1, f);\nfloat speed = mix(speed0, speed1, f);\nvec2 extrude;\nvec2 position;\nfloat fadeOpacity;\nfloat introOpacity;\nif (type == 2.0) {\nif (fUnclamped < 0.0 || (fUnclamped > 1.0 && t1 != duration)) {\ngl_Position = vec4(0.0, 0.0, -2.0, 1.0);\nreturn;\n}\nvec2 ortho = mix(e0, e1, f);\nvec2 parallel;\nparallel = normalize(position1 - position0) * 0.5;\nif (id == 1.0) {\nextrude = ortho;\nv_texcoord = vec2(0.5, 0.0);\n} else if (id == 2.0) {\nextrude = -ortho;\nv_texcoord = vec2(0.5, 1.0);\n} else if (id == 3.0) {\nextrude = ortho + parallel;\nv_texcoord = vec2(1.0, 0.0);\n} else if (id == 4.0) {\nextrude = -ortho + parallel;\nv_texcoord = vec2(1.0, 1.0);\n}\nfadeOpacity = getFadeOpacity((t - clampedTime) / u_trailLength);\nintroOpacity = 1.0 - exp(-clampedTime);\nv_size = getSize(speed);\nv_color = getColor(speed);\nv_color.a *= getOpacity(speed);\nposition = mix(position0, position1, f);\n} else {\nif (fUnclamped < 0.0) {\ngl_Position = vec4(0.0, 0.0, -2.0, 1.0);\nreturn;\n}\nif (id == 1.0) {\nextrude = e0;\nv_texcoord = vec2(0.5, 0.0);\nfadeOpacity = getFadeOpacity((t - t0) / u_trailLength);\nintroOpacity = 1.0 - exp(-t0);\nv_size = getSize(speed0);\nv_color = getColor(speed0);\nv_color.a *= getOpacity(speed0);\nposition = position0;\n} else if (id == 2.0) {\nextrude = -e0;\nv_texcoord = vec2(0.5, 1.0);\nfadeOpacity = getFadeOpacity((t - t0) / u_trailLength);\nintroOpacity = 1.0 - exp(-t0);\nv_size = getSize(speed0);\nv_color = getColor(speed0);\nv_color.a *= getOpacity(speed0);\nposition = position0;\n} else if (id == 3.0) {\nextrude = mix(e0, e1, f);\nv_texcoord = vec2(0.5, 0.0);\nfadeOpacity = getFadeOpacity((t - clampedTime) / u_trailLength);\nintroOpacity = 1.0 - exp(-clampedTime);\nv_size = getSize(speed);\nv_color = getColor(speed);\nv_color.a *= getOpacity(speed);\nposition = mix(position0, position1, f);\n} else if (id == 4.0) {\nextrude = -mix(e0, e1, f);\nv_texcoord = vec2(0.5, 1.0);\nfadeOpacity = getFadeOpacity((t - clampedTime) / u_trailLength);\nintroOpacity = 1.0 - exp(-clampedTime);\nv_size = getSize(speed);\nv_color = getColor(speed);\nv_color.a *= getOpacity(speed);\nposition = mix(position0, position1, f);\n}\n}\nvec2 xy = (u_dvsMat3 * vec3(position, 1.0) + u_displayViewMat3 * vec3(extrude * v_size, 0.0)).xy;\ngl_Position = vec4(xy, 0.0, 1.0);\nv_color.a *= fadeOpacity;\nv_color.a *= mix(1.0, introOpacity, u_introFade);\nv_color.rgb *= v_color.a;\n}"},streamlines:{"streamlines.frag":"precision highp float;\nvarying float v_side;\nvarying float v_time;\nvarying float v_totalTime;\nvarying float v_timeSeed;\nvarying vec4 v_color;\nvarying float v_size;\nuniform float u_time;\nuniform float u_trailLength;\nuniform float u_flowSpeed;\nuniform float u_featheringSize;\nuniform float u_introFade;\n#include <raster/flow/getFragmentColor.glsl>\n#include <raster/flow/getFadeOpacity.glsl>\nvoid main(void) {\nfloat t = mod(v_timeSeed * (v_totalTime + u_trailLength) + u_time * u_flowSpeed, v_totalTime + u_trailLength) - v_time;\nvec4 color = v_color * step(0.0, t) * getFadeOpacity(t / u_trailLength);\ncolor *= mix(1.0, 1.0 - exp(-v_time), u_introFade);\ngl_FragColor = getFragmentColor(color, length((v_side + 1.0) / 2.0 - 0.5), v_size, u_featheringSize);\n}","streamlines.vert":"attribute vec3 a_positionAndSide;\nattribute vec3 a_timeInfo;\nattribute vec2 a_extrude;\nattribute float a_speed;\nuniform mat3 u_dvsMat3;\nuniform mat3 u_displayViewMat3;\nvarying float v_time;\nvarying float v_totalTime;\nvarying float v_timeSeed;\nvarying vec4 v_color;\nvarying float v_side;\nvarying float v_size;\nuniform float u_featheringSize;\n#include <raster/flow/vv.glsl>\nvoid main(void) {\nvec4 lineColor = getColor(a_speed);\nfloat lineOpacity = getOpacity(a_speed);\nfloat lineSize = getSize(a_speed);\nvec2 position = a_positionAndSide.xy;\nv_side = a_positionAndSide.z;\nvec2 xy = (u_dvsMat3 * vec3(position, 1.0) + u_displayViewMat3 * vec3(a_extrude * lineSize, 0.0)).xy;\ngl_Position = vec4(xy, 0.0, 1.0);\nv_time = a_timeInfo.x;\nv_totalTime = a_timeInfo.y;\nv_timeSeed = a_timeInfo.z;\nv_color = lineColor;\nv_color.a *= lineOpacity;\nv_color.rgb *= v_color.a;\nv_size = lineSize;\n}"},"vv.glsl":"#define MAX_STOPS 8\n#ifdef VV_COLOR\nuniform float u_color_stops[MAX_STOPS];\nuniform vec4 u_color_values[MAX_STOPS];\nuniform int u_color_count;\n#else\nuniform vec4 u_color;\n#endif\n#ifdef VV_OPACITY\nuniform float u_opacity_stops[MAX_STOPS];\nuniform float u_opacity_values[MAX_STOPS];\nuniform int u_opacity_count;\n#else\nuniform float u_opacity;\n#endif\n#ifdef VV_SIZE\nuniform float u_size_stops[MAX_STOPS];\nuniform float u_size_values[MAX_STOPS];\nuniform int u_size_count;\n#else\nuniform float u_size;\n#endif\nuniform float u_featheringOffset;\nvec4 getColor(float x) {\n#ifdef VV_COLOR\nvec4 color = u_color_values[0];\n{\nfor (int i = 1; i < MAX_STOPS; i++) {\nif (i >= u_color_count) {\nbreak;\n}\nfloat x1 = u_color_stops[i - 1];\nif (x < x1) {\nbreak;\n}\nfloat x2 = u_color_stops[i];\nvec4 y2 = u_color_values[i];\nif (x < x2) {\nvec4 y1 = u_color_values[i - 1];\ncolor = y1 + (y2 - y1) * (x - x1) / (x2 - x1);\n} else {\ncolor = y2;\n}\n}\n}\n#else\nvec4 color = u_color;\n#endif\nreturn color;\n}\nfloat getOpacity(float x) {\n#ifdef VV_OPACITY\nfloat opacity = u_opacity_values[0];\n{\nfor (int i = 1; i < MAX_STOPS; i++) {\nif (i >= u_opacity_count) {\nbreak;\n}\nfloat x1 = u_opacity_stops[i - 1];\nif (x < x1) {\nbreak;\n}\nfloat x2 = u_opacity_stops[i];\nfloat y2 = u_opacity_values[i];\nif (x < x2) {\nfloat y1 = u_opacity_values[i - 1];\nopacity = y1 + (y2 - y1) * (x - x1) / (x2 - x1);\n} else {\nopacity = y2;\n}\n}\n}\n#else\nfloat opacity = u_opacity;\n#endif\nreturn opacity;\n}\nfloat getSize(float x) {\n#ifdef VV_SIZE\nfloat size = u_size_values[0];\n{\nfor (int i = 1; i < MAX_STOPS; i++) {\nif (i >= u_size_count) {\nbreak;\n}\nfloat x1 = u_size_stops[i - 1];\nif (x < x1) {\nbreak;\n}\nfloat x2 = u_size_stops[i];\nfloat y2 = u_size_values[i];\nif (x < x2) {\nfloat y1 = u_size_values[i - 1];\nsize = y1 + (y2 - y1) * (x - x1) / (x2 - x1);\n} else {\nsize = y2;\n}\n}\n}\n#else\nfloat size = u_size;\n#endif\nreturn size + 2.0 * u_featheringSize * u_featheringOffset;\n}"},hillshade:{"hillshade.frag":"precision mediump float;\nvarying highp vec2 v_texcoord;\n#include <raster/common/common.glsl>\nuniform int u_hillshadeType;\nuniform float u_sinZcosAs[6];\nuniform float u_sinZsinAs[6];\nuniform float u_cosZs[6];\nuniform float u_weights[6];\nuniform vec2 u_factor;\nuniform float u_minValue;\nuniform float u_maxValue;\n#include <raster/lut/colorize.glsl>\nfloat getNeighborHoodAlpha(float a, float b, float c, float d, float e, float f, float g, float h, float i){\nif (a == 0.0 || a == 0.0 || a==0.0 || a == 0.0 || a == 0.0 || a==0.0 || a == 0.0 || a == 0.0 || a==0.0) {\nreturn 0.0;\n}\nelse {\nreturn e;\n}\n}\nvec3 rgb2hsv(vec3 c) {\nvec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\nvec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);\nvec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);\nfloat d = q.x - min(q.w, q.y);\nfloat e = 1.0e-10;\nreturn vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);\n}\nvec3 hsv2rgb(vec3 c) {\nvec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\nvec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\nreturn c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n}\nvec4 overlay(float val, float minValue, float maxValue, float hillshade) {\nval = clamp((val - minValue) / (maxValue - minValue), 0.0, 1.0);\nvec4 rgb = colorize(vec4(val, val, val, 1.0), 255.0);\nvec3 hsv = rgb2hsv(rgb.xyz);\nhsv.z = hillshade;\nreturn vec4(hsv2rgb(hsv), 1.0) * rgb.a;\n}\nvoid main() {\nvec2 pixelLocation = getPixelLocation(v_texcoord);\nif (isOutside(pixelLocation)) {\ngl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\nreturn;\n}\nvec4 currentPixel = getPixel(pixelLocation);\nif (currentPixel.a == 0.0) {\ngl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\nreturn;\n}\nvec2 axy = vec2(-1.0, -1.0);\nvec2 bxy = vec2(0.0, -1.0);\nvec2 cxy = vec2(1.0, -1.0);\nvec2 dxy = vec2(-1.0, 0.0);\nvec2 fxy = vec2(1.0, 0.0);\nvec2 gxy = vec2(-1.0, 1.0);\nvec2 hxy = vec2(0.0, 1.0);\nvec2 ixy = vec2(1.0, 1.0);\nvec2 onePixel = 1.0 / u_srcImageSize;\nif (pixelLocation.s < onePixel.s) {\naxy[0] = 1.0;\ndxy[0] = 1.0;\ngxy[0] = 1.0;\n}\nif (pixelLocation.t < onePixel.t) {\naxy[1] = 1.0;\nbxy[1] = 1.0;\ncxy[1] = 1.0;\n}\nif (pixelLocation.s > 1.0 - onePixel.s) {\ncxy[0] = -1.0;\nfxy[0] = -1.0;\nixy[0] = -1.0;\n}\nif (pixelLocation.t > 1.0 - onePixel.t) {\ngxy[1] = -1.0;\nhxy[1] = -1.0;\nixy[1] = -1.0;\n}\nvec4 va = texture2D(u_image, pixelLocation + onePixel * axy);\nvec4 vb = texture2D(u_image, pixelLocation + onePixel * bxy);\nvec4 vc = texture2D(u_image, pixelLocation + onePixel * cxy);\nvec4 vd = texture2D(u_image, pixelLocation + onePixel * dxy);\nvec4 ve = texture2D(u_image, pixelLocation);\nvec4 vf = texture2D(u_image, pixelLocation + onePixel * fxy);\nvec4 vg = texture2D(u_image, pixelLocation + onePixel * gxy);\nvec4 vh = texture2D(u_image, pixelLocation + onePixel * hxy);\nvec4 vi = texture2D(u_image, pixelLocation + onePixel * ixy);\nfloat dzx = (vc + 2.0 * vf + vi - va - 2.0 * vd - vg).r * u_factor.s;\nfloat dzy = (vg + 2.0 * vh + vi - va - 2.0 * vb - vc).r * u_factor.t;\nfloat dzd = sqrt(1.0 + dzx * dzx + dzy * dzy);\nfloat hillshade = 0.0;\nif (u_hillshadeType == 0){\nfloat cosDelta = u_sinZsinAs[0] * dzy - u_sinZcosAs[0] * dzx;\nfloat z = (u_cosZs[0] + cosDelta) / dzd;\nif (z < 0.0)  z = 0.0;\nhillshade = z;\n} else {\nfor (int k = 0; k < 6; k++) {\nfloat cosDelta = u_sinZsinAs[k] * dzy - u_sinZcosAs[k] * dzx;\nfloat z = (u_cosZs[k] + cosDelta) / dzd;\nif (z < 0.0) z = 0.0;\nhillshade = hillshade + z * u_weights[k];\nif (k == 5) break;\n}\n}\nfloat alpha = getNeighborHoodAlpha(va.a, vb.a, vc.a, vd.a, ve.a, vf.a, vg.a, vh.a, vi.a);\n#ifdef APPLY_COLORMAP\ngl_FragColor = overlay(ve.r, u_minValue, u_maxValue, hillshade) * alpha * u_opacity;\n#else\ngl_FragColor = vec4(hillshade, hillshade, hillshade, 1.0) * alpha * u_opacity;\n#endif\n}"},lut:{"colorize.glsl":"uniform sampler2D u_colormap;\nuniform float u_colormapOffset;\nuniform float u_colormapMaxIndex;\nvec4 colorize(vec4 currentPixel, float scaleFactor) {\nfloat clrIndex = clamp(currentPixel.r * scaleFactor - u_colormapOffset, 0.0, u_colormapMaxIndex);\nvec2 clrPosition = vec2((clrIndex + 0.5) / (u_colormapMaxIndex + 1.0), 0.0);\nvec4 color = texture2D(u_colormap, clrPosition);\nvec4 result = vec4(color.rgb, color.a * currentPixel.a);\nreturn result;\n}","lut.frag":"precision mediump float;\nvarying highp vec2 v_texcoord;\n#include <raster/common/common.glsl>\n#include <raster/lut/colorize.glsl>\nvoid main() {\nvec2 pixelLocation = getPixelLocation(v_texcoord);\nif (isOutside(pixelLocation)) {\ngl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\nreturn;\n}\nvec4 currentPixel = getPixel(pixelLocation);\nvec4 result = colorize(currentPixel, 1.0);\ngl_FragColor = vec4(result.xyz, 1.0) * result.a * u_opacity;\n}"},magdir:{"magdir.frag":"precision mediump float;\nvarying vec4 v_color;\nuniform lowp float u_opacity;\nvoid main() {\ngl_FragColor = v_color * u_opacity;\n}","magdir.vert":"precision mediump float;\nattribute vec2 a_pos;\nattribute vec2 a_offset;\nattribute vec2 a_vv;\nuniform highp mat3 u_dvsMat3;\nuniform highp vec2 u_coordScale;\nuniform vec2 u_symbolSize;\nuniform vec2 u_symbolPercentRange;\nuniform vec2 u_dataRange;\nuniform float u_rotation;\nuniform vec4 u_colors[12];\nvarying vec4 v_color;\nvoid main()\n{\nfloat angle = a_offset.y + u_rotation;\n#ifndef ROTATION_GEOGRAPHIC\nangle = 3.14159265359 * 2.0 - angle - 3.14159265359 / 2.0;\n#endif\nvec2 offset = vec2(cos(angle), sin(angle)) * a_offset.x;\n#ifdef DATA_RANGE\nfloat valuePercentage = clamp((a_vv.y - u_dataRange.x) / (u_dataRange.y - u_dataRange.x), 0.0, 1.0);\nfloat sizeRatio = u_symbolPercentRange.x + valuePercentage * (u_symbolPercentRange.y - u_symbolPercentRange.x);\nfloat sizePercentage = clamp(sizeRatio, u_symbolPercentRange.x, u_symbolPercentRange.y);\n#else\nfloat sizePercentage = (u_symbolPercentRange.x + u_symbolPercentRange.y) / 2.0;\n#endif\nvec2 pos = a_pos + offset * sizePercentage * u_symbolSize;\nv_color = u_colors[int(a_vv.x)];\ngl_Position = vec4(u_dvsMat3 * vec3(pos * u_coordScale, 1.0), 1.0);\n}"},reproject:{"reproject.frag":"precision mediump float;\nvarying vec2 v_texcoord;\n#include <raster/common/common.glsl>\nvoid main() {\nvec2 pixelLocation = getPixelLocation(v_texcoord);\nif (isOutside(pixelLocation)) {\ngl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\nreturn;\n}\nvec4 currentPixel = getPixel(pixelLocation);\ngl_FragColor = vec4(currentPixel.rgb, 1.0) * currentPixel.a * u_opacity;\n}","reproject.vert":"precision mediump float;\nattribute vec2 a_position;\nvarying highp vec2 v_texcoord;\nvoid main()\n{\nv_texcoord = a_position;\ngl_Position = vec4(2.0 * (a_position - 0.5), 0.0, 1.0);\n}"},rfx:{aspect:{"aspect.frag":"precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texcoord;\nuniform vec2 u_cellSize;\nuniform vec2 u_srcImageSize;\n#include <raster/common/mirror.glsl>\nconst float pi = 3.14159265359;\nvoid main() {\nvec2 axy = vec2(-1.0, -1.0);\nvec2 bxy = vec2(0.0, -1.0);\nvec2 cxy = vec2(1.0, -1.0);\nvec2 dxy = vec2(-1.0, 0.0);\nvec2 fxy = vec2(1.0, 0.0);\nvec2 gxy = vec2(-1.0, 1.0);\nvec2 hxy = vec2(0.0, 1.0);\nvec2 ixy = vec2(1.0, 1.0);\nvec2 onePixel = 1.0 / u_srcImageSize;\nvec4 va = texture2D(u_image, mirror(v_texcoord + onePixel * axy));\nvec4 vb = texture2D(u_image, mirror(v_texcoord + onePixel * bxy));\nvec4 vc = texture2D(u_image, mirror(v_texcoord + onePixel * cxy));\nvec4 vd = texture2D(u_image, mirror(v_texcoord + onePixel * dxy));\nvec4 ve = texture2D(u_image, mirror(v_texcoord + onePixel * vec2(0, 0)));\nvec4 vf = texture2D(u_image, mirror(v_texcoord + onePixel * fxy));\nvec4 vg = texture2D(u_image, mirror(v_texcoord + onePixel * gxy));\nvec4 vh = texture2D(u_image, mirror(v_texcoord + onePixel * hxy));\nvec4 vi = texture2D(u_image, mirror(v_texcoord + onePixel * ixy));\nfloat dzx = (vc + 2.0 * vf + vi - va - 2.0 * vd - vg).r / (8.0 * u_cellSize[0]);\nfloat dzy = -(vg + 2.0 * vh + vi - va - 2.0 * vb - vc).r / (8.0 * u_cellSize[1]);\nfloat alpha = va.a * vb.a * vc.a * vd.a * ve.a * vf.a * vg.a * vh.a * vi.a * sign(abs(dzx) + abs(dzy));\nfloat aspect_rad = (dzx == 0.0) ? (step(0.0, dzy) * 0.5 * pi + step(dzy, 0.0) * 1.5 * pi) : mod((2.5 * pi + atan(dzy, -dzx)), 2.0 * pi);\nfloat aspect = aspect_rad * 180.0 / pi;\ngl_FragColor = vec4(aspect, aspect, aspect, 1.0) * alpha;\n}"},bandarithmetic:{"bandarithmetic.frag":"precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texcoord;\nuniform mediump mat3 u_bandIndexMat3;\nuniform float u_adjustments[3];\n#include <raster/common/inverse.glsl>\nvoid main() {\nvec4 pv = texture2D(u_image, v_texcoord);\nvec3 pv2 = u_bandIndexMat3 * pv.rgb;\nfloat nir = pv2.r;\nfloat red = pv2.g;\nfloat index;\n#ifdef NDXI\nindex = (nir - red) * invertValue(nir + red);\n#elif defined(SR)\nindex = nir * invertValue(red);\n#elif defined(CI)\nindex = nir * invertValue(red) - 1.0;\n#elif defined(SAVI)\nindex = (nir - red) * invertValue(nir + red + u_adjustments[0]) * (1.0 + u_adjustments[0]);\n#elif defined(TSAVI)\nfloat s = u_adjustments[0];\nfloat a = u_adjustments[1];\nfloat x = u_adjustments[2];\nfloat y = -a * s + x * (1.0 + s * s);\nindex = (s * (nir - s * red - a)) * invertValue(a * nir + red + y);\n#elif defined(MAVI)\nindex = 0.5 * (2.0 * (nir + 1.0) - sqrt(pow((2.0 * nir + 1.0), 2.0) - 8.0 * (nir - red)));\n#elif defined(GEMI)\nfloat eta = (2.0 * (nir * nir - red * red) + 1.5 * nir + 0.5 * red) * invertValue(nir + red + 0.5);\nindex = eta * (1.0 - 0.25 * eta) - (red - 0.125) * invertValue(1.0 - red);\n#elif defined(PVI)\nfloat a = u_adjustments[0];\nfloat b = u_adjustments[1];\nfloat y = sqrt(1.0 + a * a);\nindex = (nir - a * red - b) * invertValue(y);\n#elif defined(VARI)\nindex = (pv2.g - pv2.r) * invertValue(pv2.g + pv2.r - pv2.b);\n#elif defined(MTVI2)\nfloat green = pv2.b;\nfloat v = pow(sqrt((2.0 * nir + 1.0), 2.0) - 6.0 * nir - 5.0 * sqrt(red) - 0.5);\nindex = 1.5 * (1.2 * (nir - green) - 2.5 * (red - green)) * v;\n#elif defined(RTVICORE)\nfloat green = pv2.b;\nindex = 100.0 * (nir - red) - 10.0 * (nir - green);\n#elif defined(EVI)\nfloat blue = pv2.b;\nfloat denom = nir + 6.0 * red - 7.5 * blue + 1.0;\nindex =  (2.5 * (nir - red)) * invertValue(denom);\n#elif defined(WNDWI)\nfloat g = pv2.r;\nfloat n = pv2.g;\nfloat s = pv2.s;\nfloat a = u_adjustments[0];\nfloat denom = g + a * n + (1.0 - a) * s;\nindex = (g - a * n - (1 - a) * s) * invertValue(denom);\n#elif defined(BAI)\nindex = invertValue(pow((0.1 - red), 2.0) + pow((0.06 - nir), 2.0));\n#else\ngl_FragColor = pv;\nreturn;\n#endif\ngl_FragColor = vec4(index, index, index, pv.a);\n}"},compositeband:{"compositeband.frag":"precision mediump float;\nuniform sampler2D u_image;\nuniform sampler2D u_image1;\nuniform sampler2D u_image2;\nvarying vec2 v_texcoord;\nvoid main() {\nvec4 p0 = texture2D(u_image, v_texcoord);\nvec4 p1 = texture2D(u_image1, v_texcoord);\nvec4 p2 = texture2D(u_image2, v_texcoord);\ngl_FragColor = vec4(p0.r, p1.r, p2.r, p0.a * p1.a * p2.a);\n}"},convolution:{"convolution.frag":"precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texcoord;\nuniform vec2 u_srcImageSize;\n#define KERNEL_SIZE_ROWS ROWS\n#define KERNEL_SIZE_COLS COLS\nuniform vec2 u_clampRange;\nuniform float u_kernel[25];\n#include <raster/common/mirror.glsl>\nvoid main() {\nvec3 rgb = vec3(0.0, 0.0, 0.0);\nvec2 resolution = 1.0 / u_srcImageSize;\nfloat rowOffset = -float(floor(float(KERNEL_SIZE_ROWS) / 2.0));\nfloat colOffset = -float(floor(float(KERNEL_SIZE_COLS) / 2.0));\nfloat alpha = 1.0;\nfor (int row = 0; row < KERNEL_SIZE_ROWS; row++) {\nfloat pos_row = rowOffset + float(row);\nfor (int col = 0; col < KERNEL_SIZE_COLS; col++) {\nvec2 pos = v_texcoord + vec2(colOffset + float(col), pos_row) * resolution;\nvec4 pv = texture2D(u_image, mirror(pos));\nrgb += pv.rgb * u_kernel[row * KERNEL_SIZE_COLS + col];\nalpha *= pv.a;\n}\n}\nrgb = clamp(rgb, u_clampRange.s, u_clampRange.t);\ngl_FragColor = vec4(rgb * alpha, alpha);\n}"},extractband:{"extractband.frag":"precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texcoord;\nuniform mediump mat3 u_bandIndexMat3;\nvoid main() {\nvec4 pv = texture2D(u_image, v_texcoord);\nvec3 pv2 = u_bandIndexMat3 * pv.rgb;\ngl_FragColor = vec4(pv2, pv.a);\n}"},local:{"local.frag":"precision mediump float;\nuniform sampler2D u_image;\nuniform sampler2D u_image1;\n#ifdef ONE_CONSTANT\nuniform float u_image1Const;\n#ifdef TWO_CONSTANT\nuniform float u_image2Const;\n#endif\nuniform mat3 u_imageSwap;\n#endif\nvarying vec2 v_texcoord;\nuniform vec2 u_domainRange;\n#include <raster/common/inverse.glsl>\nvoid main() {\nvec4 pv0 = texture2D(u_image, v_texcoord);\nfloat a = pv0.r;\n#ifdef TWO_IMAGES\n#ifdef ONE_CONSTANT\nfloat b = u_image1Const;\nvec3 abc = u_imageSwap * vec3(a, b, 0);\na = abc.s;\nb = abc.t;\n#else\nvec4 pv1 = texture2D(u_image1, v_texcoord);\nfloat b = pv1.r;\n#endif\n#elif defined(CONDITIONAL)\n#ifdef TWO_CONSTANT\nfloat b = u_image1Const;\nfloat c = u_image2Const;\nvec3 abc = u_imageSwap * vec3(a, b, c);\na = abc.s;\nb = abc.t;\nc = abc.p;\n#elif defined(ONE_CONSTANT)\nvec4 pv1 = texture2D(u_image1, v_texcoord);\nfloat b = pv1.r;\nfloat c = u_image1Const;\nvec3 abc = u_imageSwap * vec3(a, b, c);\na = abc.s;\nb = abc.t;\nc = abc.p;\n#else\nvec4 pv1 = texture2D(u_image1, v_texcoord);\nvec4 pv2 = texture2D(u_image2, v_texcoord);\nfloat b = pv1.r;\nfloat c = pv2.r;\n#endif\n#endif\nfloat result = a;\nfloat alpha = pv0.a;\n#ifdef PLUS\nresult = a + b;\n#elif defined(MINUS)\nresult = a - b;\n#elif defined(TIMES)\nresult = a * b;\n#elif defined(DIVIDE)\nresult = a * invertValue(b);\nalpha *= float(abs(sign(b)));\n#elif defined(FLOATDIVIDE)\nresult = a * invertValue(b);\nalpha *= float(abs(sign(b)));\n#elif defined(FLOORDIVIDE)\nresult = floor(a * invertValue(b));\nalpha *= float(abs(sign(b)));\n#elif defined(SQUARE)\nresult = a * a;\n#elif defined(SQRT)\nresult = sqrt(a);\n#elif defined(POWER)\nresult = pow(a, b);\n#elif defined(LN)\nresult = a <= 0.0 ? 0.0: log(a);\nalpha *= float(a > 0.0);\n#elif defined(LOG_1_0)\nresult = a <= 0.0 ? 0.0: log2(a) * invertValue(log2(10.0));\nalpha *= float(a > 0.0);\n#elif defined(LOG_2)\nresult = a <= 0.0 ? 0.0: log2(a);\nalpha *= float(a > 0.0);\n#elif defined(EXP)\nresult = exp(a);\n#elif defined(EXP_1_0)\nresult = pow(10.0, a);\n#elif defined(EXP_2)\nresult = pow(2.0, a);\n#elif defined(ROUNDDOWN)\nresult = floor(a);\n#elif defined(ROUNDUP)\nresult = ceil(a);\n#elif defined(INT)\nresult = float(sign(a)) * floor(abs(a));\n#elif defined(MOD)\nresult = mod(a, b);\n#elif defined(NEGATE)\nresult = -a;\n#elif defined(ABS)\nresult = abs(a);\n#elif defined(ACOS)\nresult = abs(a) > 1.0 ? 0.0: acos(a);\nalpha *= step(abs(a), 1.00001);\n#elif defined(ACOSH)\nresult = acosh(a);\n#elif defined(POLYFILLACOSH)\nresult = log(a + sqrt(a * a - 1.0));\n#elif defined(ASIN)\nresult = abs(a) > 1.0 ? 0.0: asin(a);\nalpha *= step(abs(a), 1.00001);\n#elif defined(ASINH)\nresult = asinh(a);\n#elif defined(POLYFILLASINH)\nresult = log(a + sqrt(a * a + 1.0));\n#elif defined(ATAN)\nresult = atan(a);\n#elif defined(ATANH)\nresult = abs(a) > 1.0 ? 0.0: atanh(a);\nalpha *= step(abs(a), 1.0);\n#elif defined(POLYFILLATANH)\nresult = a == 1.0 ? 0.0 : 0.5 * log((1.0 + a)/(1.0 -a));\n#elif defined(ATAN_2)\nresult = atan(a, b);\n#elif defined(COS)\nresult = cos(a);\n#elif defined(COSH)\nresult = cosh(a);\n#elif defined(POLYFILLCOSH)\nfloat halfexp = exp(a) / 2.0;\nresult = halfexp + 1.0 / halfexp;\n#elif defined(SIN)\nresult = sin(a);\n#elif defined(SINH)\nresult = sinh(a);\n#elif defined(POLYFILLSINH)\nfloat halfexp = exp(a) / 2.0;\nresult = halfexp - 1.0 / halfexp;\n#elif defined(TAN)\nresult = tan(a);\n#elif defined(TANH)\nresult = tanh(a);\n#elif defined(POLYFILLTANH)\nfloat expx = exp(a);\nresult = (expx - 1.0 / expx) / (expx + 1.0 / expx);\n#elif defined(BITWISEAND)\nresult = a & b;\n#elif defined(BITWISEOR)\nresult = a | b;\n#elif defined(BITWISELEFTSHIFT)\nresult = a << b;\n#elif defined(BITWISERIGHTSHIFT)\nresult = a >> b;\n#elif defined(BITWISENOT)\nresult = ~a;\n#elif defined(BITWISEXOR)\nresult = a ^ b;\n#elif defined(BOOLEANAND)\nresult = float((a != 0.0) && (b != 0.0));\n#elif defined(BOOLEANNOT)\nresult = float(a == 0.0);\n#elif defined(BOOLEANOR)\nresult = float((a != 0.0) || (b != 0.0));\n#elif defined(BOOLEANXOR)\nresult = float((a != 0.0) ^^ (b != 0.0));\n#elif defined(GREATERTHAN)\nresult = float(a > b);\n#elif defined(GREATERTHANEQUAL)\nresult = float(a >= b);\n#elif defined(LESSTHAN)\nresult = float(a < b);\n#elif defined(LESSTHANEQUAL)\nresult = float(a <= b);\n#elif defined(EQUALTO)\nresult = float(a == b);\n#elif defined(NOTEQUAL)\nresult = float(a != b);\n#elif defined(ISNULL)\nresult = float(alpha == 0.0);\nalpha = 1.0;\n#elif defined(SETNULL)\nfloat maskValue = float(a == 0.0);\nresult = maskValue * b;\nalpha *= maskValue;\n#elif defined(CONDITIONAL)\nfloat weight = float(abs(sign(a)));\nresult = weight * b + (1.0 - weight) * c;\n#endif\nbool isInvalid = result < u_domainRange.s || result > u_domainRange.t;\nresult = isInvalid ? 0.0 : result;\nalpha *= float(!isInvalid);\n#ifdef ROUND_OUTPUT\nresult = floor(result + 0.5);\n#endif\ngl_FragColor = vec4(result, result, result, alpha);\n}"},mask:{"mask.frag":"precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texcoord;\n#define LEN_INCLUDED_RANGES 6\n#define LEN_NODATA_VALUES 6\nuniform highp float u_includedRanges[6];\nuniform highp float u_noDataValues[6];\nfloat maskFactor(float bandValue, float fromValue, float to) {\nfloat factor = 1.0;\nfor (int i = 0; i < LEN_NODATA_VALUES; i++) {\nfactor *= float(u_noDataValues[i] != bandValue);\n}\nfactor *= step(fromValue, bandValue) * step(bandValue, to);\nreturn factor;\n}\nvoid main() {\nvec4 pv = texture2D(u_image, v_texcoord);\nfloat redFactor = maskFactor(pv.r, u_includedRanges[0], u_includedRanges[1]);\n#ifdef MULTI_BAND\nfloat greenFactor = maskFactor(pv.g, u_includedRanges[2], u_includedRanges[3]);\nfloat blueFactor = maskFactor(pv.b, u_includedRanges[4], u_includedRanges[5]);\nfloat maskFactor = redFactor * greenFactor * blueFactor;\ngl_FragColor = pv * maskFactor;\n#else\ngl_FragColor = pv * redFactor;\n#endif\n}"},ndvi:{"ndvi.frag":"precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texcoord;\nuniform mediump mat3 u_bandIndexMat3;\n#include <raster/common/inverse.glsl>\nvoid main() {\nvec4 pv = texture2D(u_image, v_texcoord);\nvec3 pv2 = u_bandIndexMat3 * pv.rgb;\nfloat nir = pv2.r;\nfloat red = pv2.g;\nfloat index = (nir - red) * invertValue(nir + red);\n#ifdef SCALED\nindex = floor((index + 1.0) * 100.0 + 0.5);\n#endif\ngl_FragColor = vec4(index, index, index, pv.a);\n}"},remap:{"remap.frag":"precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texcoord;\n#define LEN_REMAP_RANGES 18\n#define LEN_NODATA_RANGES 12\nuniform highp float u_rangeMaps[18];\nuniform highp float u_noDataRanges[12];\nuniform highp float u_unmatchMask;\nuniform vec2 u_clampRange;\nvoid main() {\nvec4 pv = texture2D(u_image, v_texcoord);\nfloat factor = 1.0;\nfloat bandValue = pv.r;\nfor (int i = 0; i < LEN_NODATA_RANGES; i+=2) {\nfloat inside = 1.0 - step(u_noDataRanges[i], bandValue) * step(bandValue, u_noDataRanges[i+1]);\nfactor *= inside;\n}\nfloat mapValue = 0.0;\nfloat includeMask = 0.0;\nfor (int i = 0; i < LEN_REMAP_RANGES; i+=3) {\nfloat stepMask = step(u_rangeMaps[i], bandValue) * step(bandValue, u_rangeMaps[i+1]);\nincludeMask = (1.0 - stepMask) * includeMask + stepMask;\nmapValue = (1.0 - stepMask) * mapValue + stepMask * u_rangeMaps[i+2];\n}\nbandValue = factor * (mapValue + (1.0 - includeMask) * u_unmatchMask * pv.r);\nfloat bandMask = factor * max(u_unmatchMask, includeMask);\nbandValue = clamp(bandValue, u_clampRange.s, u_clampRange.t);\ngl_FragColor = vec4(bandValue, bandValue, bandValue, bandMask * pv.a);\n}"},slope:{"slope.frag":"precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texcoord;\nuniform vec2 u_cellSize;\nuniform float u_zFactor;\nuniform vec2 u_srcImageSize;\nuniform float u_pixelSizePower;\nuniform float u_pixelSizeFactor;\n#include <raster/common/mirror.glsl>\nvoid main() {\nvec2 axy = vec2(-1.0, -1.0);\nvec2 bxy = vec2(0.0, -1.0);\nvec2 cxy = vec2(1.0, -1.0);\nvec2 dxy = vec2(-1.0, 0.0);\nvec2 fxy = vec2(1.0, 0.0);\nvec2 gxy = vec2(-1.0, 1.0);\nvec2 hxy = vec2(0.0, 1.0);\nvec2 ixy = vec2(1.0, 1.0);\nvec2 onePixel = 1.0 / u_srcImageSize;\nvec4 va = texture2D(u_image, mirror(v_texcoord + onePixel * axy));\nvec4 vb = texture2D(u_image, mirror(v_texcoord + onePixel * bxy));\nvec4 vc = texture2D(u_image, mirror(v_texcoord + onePixel * cxy));\nvec4 vd = texture2D(u_image, mirror(v_texcoord + onePixel * dxy));\nvec4 ve = texture2D(u_image, mirror(v_texcoord + onePixel * vec2(0, 0)));\nvec4 vf = texture2D(u_image, mirror(v_texcoord + onePixel * fxy));\nvec4 vg = texture2D(u_image, mirror(v_texcoord + onePixel * gxy));\nvec4 vh = texture2D(u_image, mirror(v_texcoord + onePixel * hxy));\nvec4 vi = texture2D(u_image, mirror(v_texcoord + onePixel * ixy));\nfloat xf = (u_zFactor + pow(u_cellSize[0], u_pixelSizePower) * u_pixelSizeFactor) / (8.0 * u_cellSize[0]);\nfloat yf = (u_zFactor + pow(u_cellSize[1], u_pixelSizePower) * u_pixelSizeFactor) / (8.0 * u_cellSize[1]);\nfloat dzx = (vc + 2.0 * vf + vi - va - 2.0 * vd - vg).r * xf;\nfloat dzy = -(vg + 2.0 * vh + vi - va - 2.0 * vb - vc).r * yf;\nfloat alpha = va.a * vb.a * vc.a * vd.a * ve.a * vf.a * vg.a * vh.a * vi.a;\nfloat rise2run = sqrt(dzx * dzx + dzy * dzy);\n#ifdef PERCENT_RISE\nfloat percentRise = rise2run * 100.0;\ngl_FragColor = vec4(percentRise, percentRise, percentRise, alpha);\n#else\nfloat degree = atan(rise2run) * 57.2957795;\ngl_FragColor = vec4(degree, degree, degree, alpha);\n#endif\n}"},stretch:{"stretch.frag":"precision mediump float;\nuniform sampler2D u_image;\nvarying highp vec2 v_texcoord;\nuniform float u_minCutOff[3];\nuniform float u_maxCutOff[3];\nuniform float u_minOutput;\nuniform float u_maxOutput;\nuniform float u_factor[3];\nuniform float u_gamma[3];\nuniform float u_gammaCorrection[3];\nfloat stretchOneValue(float val, float minCutOff, float maxCutOff, float minOutput, float maxOutput, float factor, float gamma, float gammaCorrection) {\nval = clamp(val, minCutOff, maxCutOff);\nfloat stretchedVal;\n#ifdef USE_GAMMA\nfloat tempf = 1.0;\nfloat outRange = maxOutput - minOutput;\nfloat relativeVal = (val - minCutOff) / (maxCutOff - minCutOff);\ntempf -= step(1.0, gamma) * sign(gamma - 1.0) * pow(1.0 / outRange, relativeVal * gammaCorrection);\nstretchedVal = tempf * outRange * pow(relativeVal, 1.0 / gamma) + minOutput;\nstretchedVal = clamp(stretchedVal, minOutput, maxOutput);\n#else\nstretchedVal = minOutput + (val - minCutOff) * factor;\n#endif\n#ifdef ROUND_OUTPUT\nstretchedVal = floor(stretchedVal + 0.5);\n#endif\nreturn stretchedVal;\n}\nvoid main() {\nvec4 currentPixel = texture2D(u_image, v_texcoord);\nfloat redVal = stretchOneValue(currentPixel.r, u_minCutOff[0], u_maxCutOff[0], u_minOutput, u_maxOutput, u_factor[0], u_gamma[0], u_gammaCorrection[0]);\n#ifdef MULTI_BAND\nfloat greenVal = stretchOneValue(currentPixel.g, u_minCutOff[1], u_maxCutOff[1], u_minOutput, u_maxOutput, u_factor[1], u_gamma[1], u_gammaCorrection[1]);\nfloat blueVal = stretchOneValue(currentPixel.b, u_minCutOff[2], u_maxCutOff[2], u_minOutput, u_maxOutput, u_factor[2], u_gamma[2], u_gammaCorrection[2]);\ngl_FragColor = vec4(redVal, greenVal, blueVal, currentPixel.a);\n#else\ngl_FragColor = vec4(redVal, redVal, redVal, currentPixel.a);\n#endif\n}"},vs:{"vs.vert":"precision mediump float;\nattribute vec2 a_pos;\nuniform highp mat3 u_dvsMat3;\nuniform highp vec2 u_coordScale;\nvarying highp vec2 v_texcoord;\nvoid main()\n{\nv_texcoord = a_pos;\ngl_Position = vec4(u_dvsMat3 * vec3(a_pos * u_coordScale, 1.0), 1.0);\n}"}},scalar:{"scalar.frag":"precision mediump float;\nuniform lowp float u_opacity;\nvarying vec2 v_pos;\nconst vec4 outlineColor = vec4(0.2, 0.2, 0.2, 1.0);\nconst float outlineSize = 0.02;\nconst float innerRadius = 0.25;\nconst float outerRadius = 0.42;\nconst float innerSquareLength = 0.15;\nvoid main() {\nmediump float dist = length(v_pos);\nmediump float fillalpha1 = smoothstep(outerRadius, outerRadius + outlineSize, dist);\nfillalpha1 *= (1.0-smoothstep(outerRadius + outlineSize, outerRadius + 0.1 + outlineSize, dist));\n#ifdef INNER_CIRCLE\nmediump float fillalpha2 = smoothstep(innerRadius, innerRadius + outlineSize, dist);\nfillalpha2 *= (1.0-smoothstep(innerRadius + outlineSize, innerRadius + 0.1 + outlineSize, dist));\n#else\nmediump float fillalpha2 = (abs(v_pos.x) < innerSquareLength ? 1.0 : 0.0) * (abs(v_pos.y) < innerSquareLength ? 1.0 : 0.0);\n#endif\ngl_FragColor = (fillalpha2 + fillalpha1) * outlineColor * u_opacity;\n}","scalar.vert":"precision mediump float;\nattribute vec2 a_pos;\nattribute vec2 a_offset;\nattribute vec2 a_vv;\nuniform highp mat3 u_dvsMat3;\nuniform highp vec2 u_coordScale;\nuniform vec2 u_symbolSize;\nuniform vec2 u_symbolPercentRange;\nuniform vec2 u_dataRange;\nvarying vec2 v_pos;\nvoid main()\n{\n#ifdef DATA_RANGE\nfloat valuePercentage = clamp((a_vv.y - u_dataRange.x) / (u_dataRange.y - u_dataRange.x), 0.0, 1.0);\nfloat sizeRatio = u_symbolPercentRange.x + valuePercentage * (u_symbolPercentRange.y - u_symbolPercentRange.x);\nfloat sizePercentage = clamp(sizeRatio, u_symbolPercentRange.x, u_symbolPercentRange.y);\n#else\nfloat sizePercentage = (u_symbolPercentRange.x + u_symbolPercentRange.y) / 2.0;\n#endif\nvec2 size = u_symbolSize * sizePercentage;\nvec2 pos = a_pos + a_offset * size;\nv_pos = a_offset;\ngl_Position = vec4(u_dvsMat3 * vec3(pos * u_coordScale, 1.0), 1.0);\n}"},stretch:{"stretch.frag":"precision mediump float;\nvarying highp vec2 v_texcoord;\n#include <raster/common/common.glsl>\nuniform float u_minCutOff[3];\nuniform float u_maxCutOff[3];\nuniform float u_minOutput;\nuniform float u_maxOutput;\nuniform float u_factor[3];\nuniform bool u_useGamma;\nuniform float u_gamma[3];\nuniform float u_gammaCorrection[3];\n#include <raster/lut/colorize.glsl>\nfloat stretchOneValue(float val, float minCutOff, float maxCutOff, float minOutput, float maxOutput, float factor, bool useGamma, float gamma, float gammaCorrection) {\nif (val >= maxCutOff) {\nreturn maxOutput;\n} else if (val <= minCutOff) {\nreturn minOutput;\n}\nfloat stretchedVal;\nif (useGamma) {\nfloat tempf = 1.0;\nfloat outRange = maxOutput - minOutput;\nfloat relativeVal = (val - minCutOff) / (maxCutOff - minCutOff);\nif (gamma > 1.0) {\ntempf -= pow(1.0 / outRange, relativeVal * gammaCorrection);\n}\nstretchedVal = (tempf * outRange * pow(relativeVal, 1.0 / gamma) + minOutput) / 255.0;\n} else {\nstretchedVal = minOutput + (val - minCutOff) * factor;\n}\nreturn stretchedVal;\n}\nvoid main() {\nvec2 pixelLocation = getPixelLocation(v_texcoord);\nif (isOutside(pixelLocation)) {\ngl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\nreturn;\n}\nvec4 currentPixel = getPixel(pixelLocation);\n#ifdef NOOP\ngl_FragColor = vec4(currentPixel.rgb, 1.0) * currentPixel.a * u_opacity;\nreturn;\n#endif\nif (u_bandCount == 1) {\nfloat grayVal = stretchOneValue(currentPixel.r, u_minCutOff[0], u_maxCutOff[0], u_minOutput, u_maxOutput, u_factor[0], u_useGamma, u_gamma[0], u_gammaCorrection[0]);\n#ifdef APPLY_COLORMAP\nvec4 result = colorize(vec4(grayVal, grayVal, grayVal, 1.0), u_useGamma ? 255.0 : 1.0);\ngl_FragColor = vec4(result.xyz, 1.0) * result.a * currentPixel.a * u_opacity;\n#else\ngl_FragColor = vec4(grayVal, grayVal, grayVal, 1.0) * currentPixel.a * u_opacity;\n#endif\n} else {\nfloat redVal = stretchOneValue(currentPixel.r, u_minCutOff[0], u_maxCutOff[0], u_minOutput, u_maxOutput, u_factor[0], u_useGamma, u_gamma[0], u_gammaCorrection[0]);\nfloat greenVal = stretchOneValue(currentPixel.g, u_minCutOff[1], u_maxCutOff[1], u_minOutput, u_maxOutput, u_factor[1], u_useGamma, u_gamma[1], u_gammaCorrection[1]);\nfloat blueVal = stretchOneValue(currentPixel.b, u_minCutOff[2], u_maxCutOff[2], u_minOutput, u_maxOutput, u_factor[2], u_useGamma, u_gamma[2], u_gammaCorrection[2]);\ngl_FragColor = vec4(redVal, greenVal, blueVal, 1.0) * currentPixel.a * u_opacity;\n}\n}"}},stencil:{"stencil.frag":"void main() {\ngl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n}","stencil.vert":"attribute vec2 a_pos;\nuniform mat3 u_worldExtent;\nvoid main() {\ngl_Position = vec4(u_worldExtent * vec3(a_pos, 1.0), 1.0);\n}"},tileInfo:{"tileInfo.frag":"uniform mediump sampler2D u_texture;\nvarying mediump vec2 v_tex;\nvoid main(void) {\nlowp vec4 color = texture2D(u_texture, v_tex);\ngl_FragColor = 0.75 * color;\n}","tileInfo.vert":"attribute vec2 a_pos;\nuniform highp mat3 u_dvsMat3;\nuniform mediump float u_depth;\nuniform mediump vec2 u_coord_ratio;\nuniform mediump vec2 u_delta;\nuniform mediump vec2 u_dimensions;\nvarying mediump vec2 v_tex;\nvoid main() {\nmediump vec2 offset = u_coord_ratio * vec2(u_delta + a_pos * u_dimensions);\nvec3 v_pos = u_dvsMat3 * vec3(offset, 1.0);\ngl_Position = vec4(v_pos.xy, 0.0, 1.0);\nv_tex = a_pos;\n}"},util:{"atan2.glsl":"float atan2(in float y, in float x) {\nfloat t0, t1, t2, t3, t4;\nt3 = abs(x);\nt1 = abs(y);\nt0 = max(t3, t1);\nt1 = min(t3, t1);\nt3 = 1.0 / t0;\nt3 = t1 * t3;\nt4 = t3 * t3;\nt0 =         - 0.013480470;\nt0 = t0 * t4 + 0.057477314;\nt0 = t0 * t4 - 0.121239071;\nt0 = t0 * t4 + 0.195635925;\nt0 = t0 * t4 - 0.332994597;\nt0 = t0 * t4 + 0.999995630;\nt3 = t0 * t3;\nt3 = (abs(y) > abs(x)) ? 1.570796327 - t3 : t3;\nt3 = x < 0.0 ?  3.141592654 - t3 : t3;\nt3 = y < 0.0 ? -t3 : t3;\nreturn t3;\n}","encoding.glsl":"const vec4 rgba2float_factors = vec4(\n255.0 / (256.0),\n255.0 / (256.0 * 256.0),\n255.0 / (256.0 * 256.0 * 256.0),\n255.0 / (256.0 * 256.0 * 256.0 * 256.0)\n);\nfloat rgba2float(vec4 rgba) {\nreturn dot(rgba, rgba2float_factors);\n}"}},r=new(i(1695).a)((function(e){let t=n
return e.split("/").forEach(e=>{t&&(t=t[e])}),t}))
function s(e){return r.resolveIncludes(e)}},1325:function(e,t,i){"use strict"
i.d(t,"a",(function(){return n}))
class n{constructor(){this.setIdentity()}getAngle(){return(null==this.rz||0===this.rz&&1!==this.rzCos&&0!==this.rzSin)&&(this.rz=Math.atan2(this.rzSin,this.rzCos)),this.rz}setIdentity(){this.tx=0,this.ty=0,this.tz=0,this.s=1,this.rx=0,this.ry=0,this.rz=0,this.rzCos=1,this.rzSin=0}setTranslate(e,t){this.tx=e,this.ty=t}setTranslateZ(e){this.tz=e}setRotateCS(e,t){this.rz=void 0,this.rzCos=e,this.rzSin=t}setRotate(e){this.rz=e,this.rzCos=void 0,this.rzSin=void 0}setRotateY(e){this.ry=e}setScale(e){this.s=e}setMeasure(e){this.m=e}}},1326:function(e,t,i){"use strict"
i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i(234)
var n=i(1468)
let r
class s{constructor(e){this._geometry=e}next(){const e=this._geometry
return this._geometry=null,e}}function a(e,t){let i,s
r||(r=new n.d(0,0,0,1)),r.reset(n.a.Polygon),r.setPixelMargin(t+1),r.setExtent(512)
for(const t of e.rings)if(t&&!(t.length<3)){i=t[0][0],s=-t[0][1],r.moveTo(i,s)
for(let e=1;e<t.length;e++)i=t[e][0],s=-t[e][1],r.lineTo(i,s)
r.close()}const a=r.result(!1)
if(a){const e=[]
for(const t of a){const i=[]
e.push(i)
for(const e of t)i.push([e.x,-e.y])}return{rings:e}}return{rings:[]}}function o(e,t){let i,s
r||(r=new n.d(0,0,0,1)),r.reset(n.a.LineString),r.setPixelMargin(t+1),r.setExtent(512)
for(const t of e.paths)if(t&&!(t.length<2)){i=t[0][0],s=-t[0][1],r.moveTo(i,s)
for(let e=1;e<t.length;e++)i=t[e][0],s=-t[e][1],r.lineTo(i,s)}const a=r.result(!1)
if(a){const e=[]
for(const t of a){const i=[]
e.push(i)
for(const e of t)i.push([e.x,-e.y])}return{paths:e}}return{paths:[]}}},1327:function(e,t,i){"use strict"
i.d(t,"a",(function(){return s}))
var n=i(23),r=i(1582)
class s{constructor(){this._materialKey=null}bindFeature(e,t,i){}write(e,t,i,s){var a
if(Object(n.k)(this._effects)||0===(null==(a=this._effects)?void 0:a.length))return this._write(e,t,s)
const o=r.a.executeEffects(this._effects,t.readLegacyGeometryForDisplay(),e.tileKey,s.geometryEngine)
let l=r.a.next(o)
for(;l;)this._write(e,t,s,l),l=r.a.next(o)}_write(e,t,i,n){}}},1340:function(e,t,i){"use strict"
i.r(t),i.d(t,"createSymbolSchema",(function(){return o}))
var n=i(1003),r=i(1023)
function s(e){var t
return"line-marker"===e.type?{type:"line-marker",color:null==(t=e.color)?void 0:t.toJSON(),placement:e.placement,style:e.style}:e.constructor.fromJSON(e.toJSON()).toJSON()}function a(e){return Object(r.j)(e)}function o(e,t,i=!1){if(!e)return null
switch(e.type){case"simple-fill":case"picture-fill":return function(e,t,i){const o=Object(r.g)(n.d.FILL,t),l=i?a(o):o,c=e.clone(),u=c.outline,h=Object(r.k)(t.symbologyType)
h||(c.outline=null)
const d={materialKey:l,hash:c.hash(),...s(c)}
if(h)return d
const f=[]
if(f.push(d),u){const e=Object(r.g)(n.d.LINE,{...t,isOutline:!0}),o={materialKey:i?a(e):e,hash:u.hash(),...s(u)}
f.push(o)}return{type:"composite-symbol",layers:f,hash:f.reduce((e,t)=>t.hash+e,"")}}(e,t,i)
case"simple-marker":case"picture-marker":return function(e,t,i){const o=Object(r.g)(n.d.MARKER,t),l=i?a(o):o,c=s(e)
return{materialKey:l,hash:e.hash(),...c,angle:e.angle,maxVVSize:t.maxVVSize}}(e,t,i)
case"simple-line":return function(e,t,i){const o=Object(r.k)(t.symbologyType)?n.e.DEFAULT:t.symbologyType,l=Object(r.g)(n.d.LINE,{...t,symbologyType:o}),c=i?a(l):l,u=e.clone(),h=u.marker
u.marker=null
const d=[]
if(d.push({materialKey:c,hash:u.hash(),...s(u)}),h){var f
const e=Object(r.g)(n.d.MARKER,t),o=i?a(e):e
h.color=null!=(f=h.color)?f:u.color,d.push({materialKey:o,hash:h.hash(),lineWidth:u.width,...s(h)})}return{type:"composite-symbol",layers:d,hash:d.reduce((e,t)=>t.hash+e,"")}}(e,t,i)
case"text":return function(e,t,i){const o=Object(r.g)(n.d.TEXT,t),l=i?a(o):o,c=s(e)
return{materialKey:l,hash:e.hash(),...c,angle:e.angle,maxVVSize:t.maxVVSize}}(e,t,i)
case"label":return function(e,t,i){const s=e.toJSON(),o=Object(r.g)(n.d.LABEL,{...t,placement:s.labelPlacement})
return{materialKey:i?a(o):o,hash:e.hash(),...s,labelPlacement:s.labelPlacement}}(e,t,i)
case"cim":return{type:"cim",rendererKey:t.vvFlags,data:e.data,maxVVSize:t.maxVVSize}
case"CIMSymbolReference":return{type:"cim",rendererKey:t.vvFlags,data:e,maxVVSize:t.maxVVSize}
case"web-style":return{...s(e),type:"web-style",hash:e.hash(),rendererKey:t.vvFlags,maxVVSize:t.maxVVSize}
default:throw new Error("symbol not supported "+e.type)}}},1350:function(e,t,i){"use strict"
i.d(t,"a",(function(){return R})),i.d(t,"b",(function(){return A})),i.d(t,"c",(function(){return F})),i.d(t,"d",(function(){return V})),i.d(t,"e",(function(){return E}))
var n=i(990),r=i(1304),s=i(234),a=i(233),o=i(23),l=i(448),c=i(980),u=i(996),h=i(1079),d=i(1010),f=i(1325),_=i(1589),m=i(1030),p=i(1230),g=i(1391),b=i(1543),v=i(1e3),x=i(1373)
const y=Math.PI,O=y/2,T=96/72,S=Math.PI/180,w=a.a.getLogger("esri.symbols.cim.CIMSymbolHelper")
function E(e){if(!e||!e.type)return null
let t
switch(e.type){case"cim":return e.data
case"web-style":return e
case"simple-marker":{const i=R.fromSimpleMarker(e)
if(!i)return null
t=i
break}case"picture-marker":t=R.fromPictureMarker(e)
break
case"simple-line":t=R.fromSimpleLineSymbol(e)
break
case"simple-fill":t=R.fromSimpleFillSymbol(e)
break
case"picture-fill":t=R.fromPictureFillSymbol(e)
break
case"text":t=R.fromTextSymbol(e)}return{type:"CIMSymbolReference",symbol:t}}function M(e,t,i){switch(t.type){case"CIMSymbolReference":return M(e,t.symbol,i)
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
break}}return e.envelope()}function C(e){if(!e)return 0
switch(e.type){case"CIMMarkerPlacementAlongLineSameSize":case"CIMMarkerPlacementAlongLineRandomSize":case"CIMMarkerPlacementAtExtremities":case"CIMMarkerPlacementAtMeasuredUnits":case"CIMMarkerPlacementAtRatioPositions":case"CIMMarkerPlacementOnLine":case"CIMMarkerPlacementOnVertices":return Math.abs(e.offset)
default:return 0}}function I(e){if(!e)return 0
switch(e.type){case"CIMGeometricEffectArrow":return Math.abs(.5*e.width)
case"CIMGeometricEffectBuffer":return Math.abs(e.size)
case"CIMGeometricEffectExtension":case"CIMGeometricEffectRadial":return Math.abs(e.length)
case"CIMGeometricEffectJog":return Math.abs(.5*e.length)
case"CIMGeometricEffectMove":return Math.max(Math.abs(Object(p.s)(e.offsetX)),Math.abs(Object(p.s)(e.offsetY)))
case"CIMGeometricEffectOffset":case"CIMGeometricEffectOffsetTangent":return Math.abs(e.offset)
case"CIMGeometricEffectRegularPolygon":return Math.abs(e.radius)
case"CIMGeometricEffectRotate":case"CIMGeometricEffectScale":default:return 0
case"CIMGeometricEffectTaperedPolygon":return.5*Math.max(Math.abs(e.fromWidth),Math.abs(e.toWidth))
case"CIMGeometricEffectWave":return Math.abs(e.amplitude)}}function P(e){if(!e)return 0
let t=0
for(const i of e)t+=I(i)
return t}class A{getSymbolInflateSize(e,t,i,n,r){return e||(e=[0,0,0,0]),t?this._getInflateSize(e,t,i,n,r):e}static safeSize(e){const t=Math.max(Math.abs(e[0]),Math.abs(e[2])),i=Math.max(Math.abs(e[1]),Math.abs(e[3]))
return Math.sqrt(t*t+i*i)}_vectorMarkerBounds(e,t,i,n){let r=!0
const s=Object(u.m)()
if(t&&t.markerGraphics)for(const a of t.markerGraphics){const t=[0,0,0,0]
a.geometry&&(Object(h.a)(s,a.geometry),t[0]=0,t[1]=0,t[2]=0,t[3]=0,this.getSymbolInflateSize(t,a.symbol,i,0,n),s[0]+=t[0],s[1]+=t[1],s[2]+=t[2],s[3]+=t[3],r?(e[0]=s[0],e[1]=s[1],e[2]=s[2],e[3]=s[3],r=!1):(e[0]=Math.min(e[0],s[0]),e[1]=Math.min(e[1],s[1]),e[2]=Math.max(e[2],s[2]),e[3]=Math.max(e[3],s[3])))}return e}_getInflateSize(e,t,i,n,r){if(function(e){return void 0!==e.symbolLayers}(t)){const s=this._getLayersInflateSize(e,t.symbolLayers,i,n,r),a=P(t.effects)
return a>0&&(s[0]-=a,s[1]-=a,s[2]+=a,s[3]+=a),s}return this._getTextInflatedSize(e,t,r)}_getLayersInflateSize(e,t,i,n,r){let s=!0
if(!t)return e
for(const a of t){if(!a)continue
let t=[0,0,0,0]
switch(a.type){case"CIMSolidFill":case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":break
case"CIMSolidStroke":case"CIMPictureStroke":case"CIMGradientStroke":{const e=a
let i=e.width
null!=i&&(e.capStyle===m.q.Square||e.joinStyle===m.s.Miter?i/=1.4142135623730951:i/=2,t[0]=-i,t[1]=-i,t[2]=i,t[3]=i)
break}case"CIMCharacterMarker":case"CIMVectorMarker":case"CIMPictureMarker":{const e=a
if("CIMVectorMarker"===a.type){const e=a
if(t=this._vectorMarkerBounds(t,e,i,r),e.frame){const i=(e.frame.xmin+e.frame.xmax)/2,n=(e.frame.ymin+e.frame.ymax)/2
if(t[0]-=i,t[1]-=n,t[2]-=i,t[3]-=n,null!=e.size){const i=e.size/(e.frame.ymax-e.frame.ymin)
t[0]*=i,t[1]*=i,t[2]*=i,t[3]*=i}}}else if("CIMPictureMarker"===a.type){const n=a,r=i.getResource(n.url)
let s=1
if(Object(o.l)(r)&&r.height&&(s=r.width/r.height),null!=e.size){const i=e.size/2,r=e.size*s*n.scaleX/2
t=[-r,-i,r,i]}}else if(null!=e.size){const i=e.size/2
t=[-i,-i,i,i]}if(e.anchorPoint){let i,n
"Absolute"===e.anchorPointUnits?(i=e.anchorPoint.x,n=e.anchorPoint.y):(i=e.anchorPoint.x*(t[2]-t[0]),n=e.anchorPoint.y*(t[3]-t[1])),t[0]-=i,t[1]-=n,t[2]-=i,t[3]-=n}let s=Object(p.s)(e.rotation)
if(e.rotateClockwise&&(s=-s),n&&(s-=n),s){const e=S*s,i=Math.cos(e),n=Math.sin(e),r=Object(u.m)([b.c,b.c,-b.c,-b.c])
Object(u.r)(r,[t[0]*i-t[1]*n,t[0]*n+t[1]*i]),Object(u.r)(r,[t[0]*i-t[3]*n,t[0]*n+t[3]*i]),Object(u.r)(r,[t[2]*i-t[1]*n,t[2]*n+t[1]*i]),Object(u.r)(r,[t[2]*i-t[3]*n,t[2]*n+t[3]*i]),t=r}let l=Object(p.s)(e.offsetX),c=Object(p.s)(e.offsetY)
if(n){const e=S*n,t=Math.cos(e),i=Math.sin(e),r=l*i+c*t
l=l*t-c*i,c=r}t[0]+=l,t[1]+=c,t[2]+=l,t[3]+=c
const h=C(e.markerPlacement)
h>0&&(t[0]-=h,t[1]-=h,t[2]+=h,t[3]+=h)
break}}const l=P(a.effects)
l>0&&(t[0]-=l,t[1]-=l,t[2]+=l,t[3]+=l),s?(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],s=!1):(e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.max(e[2],t[2]),e[3]=Math.max(e[3],t[3]))}return e}_getTextInflatedSize(e,t,i){var n,s,a
const o=null!=(n=t.height)?n:10
if(e[0]=-o/2,e[1]=-o/2,e[2]=o/2,e[3]=o/2,!i)return e
const l=i.get(t)
if(!l)return e
const{text:c,mosaicItem:u}=l
if(null==u||null==(s=u.glyphMosaicItems)||!s.length)return e
const{lineGapType:h,lineGap:d}=t,f=h?Object(_.f)(h,null!=d?d:0,o):0,m=Object(r.a)(c)[1],g=u.glyphMosaicItems,b="CIMBackgroundCallout"===(null==(a=t.callout)?void 0:a.type),y=Object(x.a)(g,m,{scale:o/v.v,angle:Object(p.s)(t.angle),xOffset:Object(p.s)(t.offsetX),yOffset:Object(p.s)(t.offsetY),hAlign:Object(_.e)(t.horizontalAlignment),vAlign:Object(_.g)(t.verticalAlignment),maxLineWidth:512,lineHeight:v.y*Math.max(.25,Math.min(f||1,4)),decoration:t.font.decoration||"none",isCIM:!0,hasBackground:b}).boundsT
return e[0]=y.x-y.halfWidth,e[1]=-y.y-y.halfHeight,e[2]=y.x+y.halfWidth,e[3]=-y.y+y.halfHeight,e}}class R{static getEnvelope(e,t,i){if(!e)return null
const n=new _.b(i)
if(Array.isArray(e)){let i
for(const r of e)i?i.union(M(n,r,t)):i=M(n,r,t)
return i}return M(n,e,t)}static getTextureAnchor(e,t){const i=this.getEnvelope(e,null,t)
if(!i)return[0,0,0]
const n=(i.x+.5*i.width)*T,r=(i.y+.5*i.height)*T,s=i.width*T+2,a=i.height*T+2
return[-n/s,-r/a,a]}static rasterize(e,t,i,n,r=!0){const s=i||this.getEnvelope(t,null,n)
if(!s)return[null,0,0,0,0]
const a=(s.x+.5*s.width)*T,o=(s.y+.5*s.height)*T
e.width=s.width*T,e.height=s.height*T,i||(e.width+=2,e.height+=2)
const l=e.getContext("2d"),c=_.d.createScale(T,-T)
c.translate(.5*e.width-a,.5*e.height+o)
const u=new _.a(l,n,c)
switch(t.type){case"CIMPointSymbol":{const e={type:"point",x:0,y:0}
u.drawSymbol(t,e)
break}case"CIMVectorMarker":{const e=new f.a
u.drawMarker(t,e)
break}}const h=l.getImageData(0,0,e.width,e.height),d=new Uint8Array(h.data)
if(r){let e
for(let t=0;t<d.length;t+=4)e=d[t+3]/255,d[t]=d[t]*e,d[t+1]=d[t+1]*e,d[t+2]=d[t+2]*e}return[d,e.width,e.height,-a/e.width,-o/e.height]}static fromTextSymbol(e){const{angle:t,color:i,font:n,haloColor:s,haloSize:a,horizontalAlignment:o,kerning:l,text:c,verticalAlignment:u,xoffset:h,yoffset:d,backgroundColor:f,borderLineColor:_,borderLineSize:g}=e
let b,v,x,y,O,T
n&&(b=n.family,v=n.style,x=n.weight,y=n.size,O=n.decoration)
let S=!1
return c&&(S=Object(r.a)(c)[1]),(f||g)&&(T={type:"CIMBackgroundCallout",margin:null,backgroundSymbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",color:z(f)},{type:"CIMSolidStroke",color:z(_),width:g}]},accentBarSymbol:null,gap:null,leaderLineSymbol:null,lineStyle:null}),{type:"CIMPointSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPointUnits:"Relative",dominantSizeAxis3D:"Y",size:10,billboardMode3D:"FaceNearPlane",frame:{xmin:-5,ymin:-5,xmax:5,ymax:5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{x:0,y:0},symbol:{type:"CIMTextSymbol",angle:t,blockProgression:m.d.BTT,depth3D:1,extrapolateBaselines:!0,fontEffects:m.g.Normal,fontEncoding:m.h.Unicode,fontFamilyName:b||"Arial",fontStyleName:N(v,x),fontType:m.i.Unspecified,haloSize:a,height:y,hinting:m.o.Default,horizontalAlignment:j(null!=o?o:"center"),kerning:l,letterWidth:100,ligatures:!0,lineGapType:"Multiple",offsetX:Object(p.s)(h),offsetY:Object(p.s)(d),strikethrough:"line-through"===O,underline:"underline"===O,symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:z(i)}]},haloSymbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:z(s)}]},shadowColor:[0,0,0,255],shadowOffsetX:1,shadowOffsetY:1,textCase:"Normal",textDirection:S?m.x.RTL:m.x.LTR,verticalAlignment:B(null!=u?u:"baseline"),verticalGlyphOrientation:m.z.Right,wordSpacing:100,billboardMode3D:m.c.FaceNearPlane,callout:T},textString:c}],scaleSymbolsProportionally:!0,respectFrame:!0}],scaleX:1,angleAlignment:"Display"}}static fromPictureFillSymbol(e){var t
const{height:i,outline:n,width:r,xoffset:s,xscale:a,yoffset:o,yscale:l}=e,c=[],u={type:"CIMPolygonSymbol",symbolLayers:c}
if(n){const{cap:e,join:t,miterLimit:i,width:r}=n
c.push({type:"CIMSolidStroke",color:z(n.color),capStyle:L(e),joinStyle:D(t),miterLimit:i,width:r})}let h=e.url
"esriPFS"===e.type&&e.imageData&&(h=e.imageData)
const d="angle"in e&&null!=(t=e.angle)?t:0,f=(null!=r?r:0)*(a||1),_=(null!=i?i:0)*(l||1)
return c.push({type:"CIMPictureFill",invertBackfaceTexture:!1,scaleX:1,textureFilter:m.y.Picture,tintColor:null,url:h,height:_,width:f,offsetX:Object(p.s)(s),offsetY:Object(p.s)(o),rotation:Object(p.s)(-d),colorSubstitutions:null}),u}static fromSimpleFillSymbol(e){const{color:t,style:i,outline:n}=e,r=[],a={type:"CIMPolygonSymbol",symbolLayers:r}
let o=null
if(n){const{cap:e,join:t,style:i}=n
"solid"!==i&&"none"!==i&&"esriSLSSolid"!==i&&"esriSLSNull"!==i&&(o=[{type:"CIMGeometricEffectDashes",dashTemplate:V(i,e),lineDashEnding:"NoConstraint",scaleDash:!0,offsetAlongLine:null}]),r.push({type:"CIMSolidStroke",color:z(n.color),capStyle:L(e),joinStyle:D(t),miterLimit:n.miterLimit,width:n.width,effects:o})}if(i&&"solid"!==i&&"none"!==i&&"esriSFSSolid"!==i&&"esriSFSNull"!==i){const e={type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",color:z(t),capStyle:m.q.Butt,joinStyle:m.s.Miter,width:.75}]}
let n=0
const a=Object(c.i)(W(i)?8:10)
switch(i){case"vertical":case"esriSFSVertical":n=90
break
case"forward-diagonal":case"esriSFSForwardDiagonal":case"diagonal-cross":case"esriSFSDiagonalCross":n=-45
break
case"backward-diagonal":case"esriSFSBackwardDiagonal":n=45
break
case"cross":case"esriSFSCross":n=0}r.push({type:"CIMHatchFill",lineSymbol:e,offsetX:0,offsetY:0,rotation:n,separation:a}),"cross"===i||"esriSFSCross"===i?r.push({type:"CIMHatchFill",lineSymbol:Object(s.a)(e),offsetX:0,offsetY:0,rotation:90,separation:a}):"diagonal-cross"!==i&&"esriSFSDiagonalCross"!==i||r.push({type:"CIMHatchFill",lineSymbol:Object(s.a)(e),offsetX:0,offsetY:0,rotation:45,separation:a})}else!i||"solid"!==i&&"esriSFSSolid"!==i||r.push({type:"CIMSolidFill",enable:!0,color:z(t)})
return a}static fromSimpleLineSymbol(e){const{cap:t,color:i,join:n,marker:r,miterLimit:s,style:a,width:o}=e
let l=null
"solid"!==a&&"none"!==a&&"esriSLSSolid"!==a&&"esriSLSNull"!==a&&(l=[{type:"CIMGeometricEffectDashes",dashTemplate:V(a,t),lineDashEnding:"NoConstraint",scaleDash:!0,offsetAlongLine:null}])
const c=[]
if(r){let e
switch(r.placement){case"begin-end":e=m.f.Both
break
case"begin":e=m.f.JustBegin
break
case"end":e=m.f.JustEnd
break
default:e=m.f.None}const t=R.fromSimpleMarker(r,o,i).symbolLayers[0]
t.markerPlacement={type:"CIMMarkerPlacementAtExtremities",angleToLine:!0,offset:0,extremityPlacement:e,offsetAlongLine:0},c.push(t)}return"none"!==a&&"esriSLSNull"!==a&&c.push({type:"CIMSolidStroke",color:z(i),capStyle:L(t),joinStyle:D(n),miterLimit:s,width:o,effects:l}),{type:"CIMLineSymbol",symbolLayers:c}}static fromPictureMarker(e){const{angle:t,height:i,width:n,xoffset:r,yoffset:s}=e
let a=e.url
return"esriPMS"===e.type&&e.imageData&&(a=e.imageData),{type:"CIMPointSymbol",symbolLayers:[{type:"CIMPictureMarker",invertBackfaceTexture:!1,scaleX:1,textureFilter:m.y.Picture,tintColor:null,url:a,size:i,width:n,offsetX:Object(p.s)(r),offsetY:Object(p.s)(s),rotation:Object(p.s)(-t)}]}}static fromSimpleMarker(e,t,i){var n
const{style:r}=e,s=null!=(n=e.color)?n:i
if("path"===r){const t=[]
if("outline"in e&&e.outline){const i=e.outline
t.push({type:"CIMSolidStroke",enable:!0,width:Object(c.h)(Math.round(Object(c.i)(i.width))),color:z(i.color)})}t.push({type:"CIMSolidFill",enable:!0,color:z(s),path:e.path})
const[i,n]=G("square")
return{type:"CIMPointSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,rotation:Object(p.s)(-e.angle),size:Object(p.s)(e.size||6),offsetX:Object(p.s)(e.xoffset),offsetY:Object(p.s)(e.yoffset),frame:i,markerGraphics:[{type:"CIMMarkerGraphic",geometry:n,symbol:{type:"CIMPolygonSymbol",symbolLayers:t}}]}]}}const[a,o]=G(r)
let l
if(o&&a){const i=[]
if("outline"in e&&e.outline){const t=e.outline
i.push({type:"CIMSolidStroke",enable:!0,width:null!=t.width&&t.width>.667?Object(c.h)(Math.round(Object(c.i)(t.width))):t.width,color:z(t.color)})}else!t||"line-marker"!==e.type||"cross"!==e.style&&"x"!==e.style||i.push({type:"CIMSolidStroke",enable:!0,width:t,color:z(s)})
i.push({type:"CIMSolidFill",enable:!0,color:z(s)})
const n={type:"CIMPolygonSymbol",symbolLayers:i}
l={type:"CIMPointSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,rotation:Object(p.s)(-e.angle),size:Object(p.s)(e.size||6*t),offsetX:Object(p.s)(e.xoffset),offsetY:Object(p.s)(e.yoffset),frame:a,markerGraphics:[{type:"CIMMarkerGraphic",geometry:o,symbol:n}]}]}}return l}static fromCIMHatchFill(e,t){var i,n
const r=t*(null!=(i=e.separation)?i:4),a=r/2,o=Object(s.a)(e.lineSymbol)
null==(n=o.symbolLayers)||n.forEach(e=>{var i
switch(e.type){case"CIMSolidStroke":null!=e.width&&(e.width*=t),null==(i=e.effects)||i.forEach(e=>{"CIMGeometricEffectDashes"===e.type&&(e.dashTemplate=e.dashTemplate.map(e=>e*t))})
break
case"CIMVectorMarker":{null!=e.size&&(e.size*=t)
const i=e.markerPlacement
null!=i&&"placementTemplate"in i&&(i.placementTemplate=i.placementTemplate.map(e=>e*t))
break}}})
let l=this._getLineSymbolPeriod(o)||4
for(;l<4;)l*=2
const c=l/2
return{type:"CIMVectorMarker",frame:{xmin:-c,xmax:c,ymin:-a,ymax:a},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{paths:[[[-c,0],[c,0]]]},symbol:o}],size:r}}static fetchResources(e,t,i){if(e&&t)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":{const n=e.symbolLayers
if(!n)return
for(const e of n)switch(Y(e,t,i),e.type){case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMCharacterMarker":case"CIMPictureMarker":"url"in e&&e.url&&i.push(t.fetchResource(e.url,null))
break
case"CIMVectorMarker":{const n=e.markerGraphics
if(!n)continue
for(const e of n)if(e){const n=e.symbol
n&&R.fetchResources(n,t,i)}}}}}}static _getLineSymbolPeriod(e){if(e){const t=this._getEffectsRepeat(e.effects)
if(t)return t
if(e.symbolLayers)for(const t of e.symbolLayers)if(t){const e=this._getEffectsRepeat(t.effects)
if(e)return e
switch(t.type){case"CIMCharacterMarker":case"CIMPictureMarker":case"CIMVectorMarker":case"CIMObjectMarker3D":case"CIMglTFMarker3D":{const e=this._getPlacementRepeat(t.markerPlacement)
if(e)return e}}}}return 0}static _getEffectsRepeat(e){if(e)for(const t of e)if(t)switch(t.type){case"CIMGeometricEffectDashes":{const e=t.dashTemplate
if(e&&e.length){let t=0
for(const i of e)t+=i
return 1&e.length&&(t*=2),t}break}case"CIMGeometricEffectWave":return t.period
default:w.error("unsupported geometric effect type "+t.type)}return 0}static _getPlacementRepeat(e){if(e)switch(e.type){case"CIMMarkerPlacementAlongLineSameSize":case"CIMMarkerPlacementAlongLineRandomSize":case"CIMMarkerPlacementAlongLineVariableSize":{const t=e.placementTemplate
if(t&&t.length){let e=0
for(const i of t)e+=+i
return 1&t.length&&(e*=2),e}break}}return 0}static fromCIMInsidePolygon(e){var t
const i=e.markerPlacement,n={...e}
n.markerPlacement=null,n.anchorPoint=null
const r=Math.abs(i.stepX),s=Math.abs(i.stepY),a=(null!=(t=i.randomness)?t:100)/100
let o,u,h,d
if("Random"===i.gridType){const e=Object(c.i)(v.F),t=Math.max(Math.floor(e/r),1),n=Math.max(Math.floor(e/s),1)
o=t*r/2,u=n*s/2,h=2*u
const f=new l.a(i.seed),_=a*r/1.5,m=a*s/1.5
d=[]
for(let e=0;e<t;e++)for(let t=0;t<n;t++){const i=e*r-o+_*(.5-f.getFloat()),n=t*s-u+m*(.5-f.getFloat())
d.push({x:i,y:n}),0===e&&d.push({x:i+2*o,y:n}),0===t&&d.push({x:i,y:n+2*u})}}else!0===i.shiftOddRows?(o=r/2,u=s,h=2*s,d=[{x:-o,y:0},{x:o,y:0},{x:0,y:u},{x:0,y:-u}]):(o=r/2,u=s/2,h=s,d=[{x:-r,y:0},{x:0,y:-s},{x:-r,y:-s},{x:0,y:0},{x:r,y:0},{x:0,y:s},{x:r,y:s},{x:-r,y:s},{x:r,y:-s}])
return{type:"CIMVectorMarker",frame:{xmin:-o,xmax:o,ymin:-u,ymax:u},markerGraphics:d.map(e=>({type:"CIMMarkerGraphic",geometry:e,symbol:{type:"CIMPointSymbol",symbolLayers:[n]}})),size:h}}static getSize(e){if(e)switch(e.type){case"CIMTextSymbol":return e.height
case"CIMPointSymbol":{let t=0
if(e.symbolLayers)for(const i of e.symbolLayers)if(i)switch(i.type){case"CIMCharacterMarker":case"CIMPictureMarker":case"CIMVectorMarker":case"CIMObjectMarker3D":case"CIMglTFMarker3D":{const e=i.size
null!=e&&e>t&&(t=e)
break}}return t}case"CIMLineSymbol":case"CIMPolygonSymbol":{let t=0
if(e.symbolLayers)for(const i of e.symbolLayers)if(i)switch(i.type){case"CIMSolidStroke":case"CIMPictureStroke":case"CIMGradientStroke":{const e=i.width
null!=e&&e>t&&(t=e)
break}case"CIMCharacterMarker":case"CIMPictureMarker":case"CIMVectorMarker":case"CIMObjectMarker3D":case"CIMglTFMarker3D":if(i.markerPlacement&&Object(p.w)(i.markerPlacement)){const e=i.size
null!=e&&e>t&&(t=e)}}return t}}}static getMarkerScaleRatio(e){if(e&&"CIMVectorMarker"===e.type&&!1!==e.scaleSymbolsProportionally&&e.frame&&null!=e.size){const t=e.frame.ymax-e.frame.ymin
return e.size/t}return 1}}class F{static findApplicableOverrides(e,t,i){if(e&&t){if(e.primitiveName){let n=!1
for(const t of i)if(t.primitiveName===e.primitiveName){n=!0
break}if(!n)for(const n of t)n.primitiveName===e.primitiveName&&i.push(n)}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(const n of e.effects)F.findApplicableOverrides(n,t,i)
if(e.symbolLayers)for(const n of e.symbolLayers)F.findApplicableOverrides(n,t,i)
break
case"CIMTextSymbol":break
case"CIMSolidStroke":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMSolidFill":case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMVectorMarker":case"CIMCharacterMarker":case"CIMPictureMarker":if(e.effects)for(const n of e.effects)F.findApplicableOverrides(n,t,i)
if(e.markerPlacement&&F.findApplicableOverrides(e.markerPlacement,t,i),"CIMVectorMarker"===e.type){if(e.markerGraphics)for(const n of e.markerGraphics)F.findApplicableOverrides(n,t,i),F.findApplicableOverrides(n.symbol,t,i)}else"CIMCharacterMarker"===e.type?F.findApplicableOverrides(e.symbol,t,i):"CIMHatchFill"===e.type?F.findApplicableOverrides(e.lineSymbol,t,i):"CIMPictureMarker"===e.type&&F.findApplicableOverrides(e.animatedSymbolProperties,t,i)}}}static findEffectOverrides(e,t,i){if(!t||!e)return
const n=e.length
for(let s=0;s<n;s++){var r
const n=null==(r=e[s])?void 0:r.primitiveName
if(n){let e=!1
for(const t of i)if(t.primitiveName===n){e=!0
break}if(!e)for(const e of t)e.primitiveName===n&&i.push(e)}}}static async resolveSymbolOverrides(e,t,i,n,r,a,o){if(!e||!e.symbol)return null
let{symbol:l,primitiveOverrides:c}=e
const u=!!c
if(!u&&!n)return l
l=Object(s.a)(l)
let h=!0
if(t||(t={attributes:{}},h=!1),u){if(h||(c=c.filter(e=>{var t
return!(null!=(t=e.valueExpressionInfo)&&t.expression.includes("$feature"))})),o||(c=c.filter(e=>{var t
return!(null!=(t=e.valueExpressionInfo)&&t.expression.includes("$view"))})),c.length>0){const e=Object(p.d)(t.attributes)
await F.evaluateOverrides(c,t,{spatialReference:i,fields:e,geometryType:r},a,o)}F.applyOverrides(l,c)}return n&&F.applyDictionaryTextOverrides(l,t,n),l}static async evaluateOverrides(e,t,i,n,r){if(!t)return
let s
for(const a of e){const e=a.valueExpressionInfo
if(e&&i&&i.geometryType){s||(s=[]),a.value=void 0
const o=Object(d.d)(e.expression,i.spatialReference,i.fields).then(e=>{a.value=Object(g.a)(e,t,{$view:r},i.geometryType,n)})
s.push(o)}}void 0!==s&&s.length>0&&await Promise.all(s)}static applyDictionaryTextOverrides(e,t,i,n="Normal"){if(e&&e.type)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":case"CIMTextSymbol":{const r=e.symbolLayers
if(!r)return
for(const s of r)s&&"CIMVectorMarker"===s.type&&F.applyDictionaryTextOverrides(s,t,i,"CIMTextSymbol"===e.type?e.textCase:n)}break
case"CIMVectorMarker":{const n=e.markerGraphics
if(!n)return
for(const e of n)e&&F.applyDictionaryTextOverrides(e,t,i)}break
case"CIMMarkerGraphic":{const r=e.textString
if(r&&r.includes("[")){const s=Object(p.b)(r,i)
e.textString=Object(p.c)(t,s,n)}}}}static applyOverrides(e,t,i,n){if(e.primitiveName)for(const r of t)if(r.primitiveName===e.primitiveName){const t=H(r.propertyName)
if(n&&n.push({cim:e,nocapPropertyName:t,value:e[t]}),r.expression&&(r.value=F.toValue(r.propertyName,r.expression)),i){let t=!1
for(const n of i)n.primitiveName===e.primitiveName&&(t=!0)
t||i.push(r)}Object(o.l)(r.value)&&(e[t]=r.value)}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(const r of e.effects)F.applyOverrides(r,t,i,n)
if(e.symbolLayers)for(const r of e.symbolLayers)F.applyOverrides(r,t,i,n)
break
case"CIMTextSymbol":break
case"CIMSolidStroke":case"CIMSolidFill":case"CIMVectorMarker":if(e.effects)for(const r of e.effects)F.applyOverrides(r,t,i,n)
if("CIMVectorMarker"===e.type&&e.markerGraphics)for(const r of e.markerGraphics)F.applyOverrides(r,t,i,n),F.applyOverrides(r.symbol,t,i,n)}}static restoreOverrides(e){for(const t of e)t.cim[t.nocapPropertyName]=t.value}static buildOverrideKey(e){let t=""
for(const i of e)void 0!==i.value&&(t+=`${i.primitiveName}${i.propertyName}${JSON.stringify(i.value)}`)
return t}static toValue(e,t){if("DashTemplate"===e)return t.split(" ").map(e=>Number(e))
if("Color"===e){const e=new n.a(t).toRgba()
return e[3]*=255,e}return t}}const L=e=>{if(!e)return m.q.Butt
switch(e){case"butt":return m.q.Butt
case"square":return m.q.Square
case"round":return m.q.Round}},D=e=>{if(!e)return m.s.Miter
switch(e){case"miter":return m.s.Miter
case"round":return m.s.Round
case"bevel":return m.s.Bevel}},j=e=>{if(Object(o.k)(e))return"Center"
switch(e){case"left":return"Left"
case"right":return"Right"
case"center":return"Center"}},B=e=>{if(Object(o.k)(e))return"Center"
switch(e){case"baseline":return"Baseline"
case"top":return"Top"
case"middle":return"Center"
case"bottom":return"Bottom"}},z=e=>{if(!e)return[0,0,0,0]
const{r:t,g:i,b:n,a:r}=e
return[t,i,n,255*r]},N=(e,t)=>{const i=k(t),n=U(e)
return i&&n?`${i}-${n}`:`${i}${n}`},k=e=>{if(!e)return""
switch(e.toLowerCase()){case"bold":case"bolder":return"bold"}return""},U=e=>{if(!e)return""
switch(e.toLowerCase()){case"italic":case"oblique":return"italic"}return""},V=(e,t)=>{const i="butt"===t
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
case"solid":case"esriSLSSolid":case"none":return w.error("Unexpected: style does not require rasterization"),[0,0]
default:return w.error(`Tried to rasterize SLS, but found an unexpected style: ${e}!`),[0,0]}},G=e=>{const t=50
let i,n
const r=e
if("circle"===r||"esriSMSCircle"===r){const e=.25
let r=Math.acos(1-e/t),s=Math.ceil(y/r/4)
0===s&&(s=1),r=O/s,s*=4
const a=[]
a.push([t,0])
for(let e=1;e<s;e++)a.push([t*Math.cos(e*r),-50*Math.sin(e*r)])
a.push([t,0]),i={rings:[a]},n={xmin:-50,ymin:-50,xmax:t,ymax:t}}else if("cross"===r||"esriSMSCross"===r){const e=0
i={rings:[[[e,t],[e,e],[t,e],[t,-e],[e,-e],[e,-50],[-e,-50],[-e,-e],[-50,-e],[-50,e],[-e,e],[-e,t],[e,t]]]},n={xmin:-50,ymin:-50,xmax:t,ymax:t}}else if("diamond"===r||"esriSMSDiamond"===r)i={rings:[[[-50,0],[0,t],[t,0],[0,-50],[-50,0]]]},n={xmin:-50,ymin:-50,xmax:t,ymax:t}
else if("square"===r||"esriSMSSquare"===r)i={rings:[[[-50,-50],[-50,t],[t,t],[t,-50],[-50,-50]]]},n={xmin:-50,ymin:-50,xmax:t,ymax:t}
else if("x"===r||"esriSMSX"===r){const e=0
i={rings:[[[0,e],[t-e,t],[t,t-e],[e,0],[t,e-t],[t-e,-50],[0,-e],[e-t,-50],[-50,e-t],[-e,0],[-50,t-e],[e-t,t],[0,e]]]},n={xmin:-50,ymin:-50,xmax:t,ymax:t}}else if("triangle"===r||"esriSMSTriangle"===r){const e=57.735026918962575,t=-e,r=2/3*100,s=r-100
i={rings:[[[t,s],[0,r],[e,s],[t,s]]]},n={xmin:t,ymin:s,xmax:e,ymax:r}}else"arrow"===r&&(i={rings:[[[-50,50],[50,0],[-50,-50],[-33,-20],[-33,20],[-50,50]]]},n={xmin:-50,ymin:-50,xmax:t,ymax:t})
return[n,i]},W=e=>"vertical"===e||"horizontal"===e||"cross"===e||"esriSFSCross"===e||"esriSFSVertical"===e||"esriSFSHorizontal"===e,H=e=>e?e.charAt(0).toLowerCase()+e.substr(1):e
function Y(e,t,i){e.effects&&!Object(o.l)(t.geometryEngine)&&(t.geometryEnginePromise?i.push(t.geometryEnginePromise):Object(p.y)(e.effects)&&(t.geometryEnginePromise=Object(p.t)(),i.push(t.geometryEnginePromise),t.geometryEnginePromise.then(e=>t.geometryEngine=e)))}},1356:function(e,t,i){"use strict"
i.d(t,"a",(function(){return v})),i.d(t,"b",(function(){return b}))
var n=i(1537),r=i(1003),s=i(1023)
const a={marker:r.d.MARKER,fill:r.d.FILL,line:r.d.LINE,text:r.d.TEXT}
class o{constructor(e,t,i,n){const o={minScale:null==t?void 0:t.minScale,maxScale:null==t?void 0:t.maxScale},l=function(e){return e.minScale||e.maxScale?e.minScale+"-"+e.maxScale:""}(o)
this.layers=e,this.data=t,this.hash=this._createHash()+l,this.rendererKey=i
const c={isOutline:!1,placement:null,symbologyType:r.e.DEFAULT,vvFlags:i}
for(const t of e){const e=a[t.type]
c.isOutline="line"===t.type&&t.isOutline,t.materialKey=Object(s.g)(e,c),t.maxVVSize=n,t.scaleInfo=o,t.templateHash+=l}}get type(){return"expanded-cim"}_createHash(){let e=""
for(const t of this.layers)e+=t.templateHash
return e}}var l=i(1436),c=i(446),u=i(23),h=i(973),d=i(374),f=i(1028),_=i(1054),m=i(1181)
async function p(e,t,i){if(!e.name)throw new c.a("style-symbol-reference-name-missing","Missing name in style symbol reference")
if(e.styleName&&"Esri2DPointSymbolsStyle"===e.styleName)return async function(e,t){const i=m.a.replace(/\{SymbolName\}/gi,e.name)
try{const e=await Object(m.d)(i,t)
return Object(m.c)(e.data)}catch(e){return Object(h.q)(e),null}}(e,i)
try{return async function(e,t,i,n){const r=e.data,s={portal:i&&Object(u.l)(i.portal)?i.portal:f.a.getDefault(),url:Object(d.Q)(e.baseUrl),origin:"portal-item"},a=r.items.find(e=>e.name===t)
if(!a)throw new c.a("symbolstyleutils:symbol-name-not-found",`The symbol name '${t}' could not be found`,{symbolName:t})
let o=Object(_.d)(Object(m.e)(a,"cimRef"),s)
Object(l.b)()&&(o=Object(l.a)(o))
try{const e=await Object(m.d)(o,n)
return Object(m.c)(e.data)}catch(e){return Object(h.q)(e),null}}(await Object(m.b)(e,t,i),e.name,t,i)}catch(e){return Object(h.q)(e),null}}const g=async(e,t,i)=>new o(await Object(n.b)(e.data,t,i),e.data,e.rendererKey,e.maxVVSize)
async function b(e,t,i,n){if(!e)return null
if("cim"===e.type)return g(e,t,i)
if("web-style"===e.type){var r
const s={type:"cim",data:null!=(r=await p(e,null,n))?r:void 0,rendererKey:e.rendererKey,maxVVSize:e.maxVVSize}
return g(s,t,i)}return e}function v(e){if(!e)return null
const{avoidSDFRasterization:t,type:i,cim:n,url:r,materialHash:s}=e,a={cim:n,type:i,mosaicHash:s,url:r,size:null,dashTemplate:null,path:null,text:null,fontName:null,animatedSymbolProperties:null,avoidSDFRasterization:t}
switch(i){case"marker":a.size=e.size,a.path=e.path,a.animatedSymbolProperties=e.animatedSymbolProperties
break
case"line":a.dashTemplate=e.dashTemplate
break
case"text":a.text=e.text,a.fontName=e.fontName}return a}},1360:function(e,t,i){"use strict"
function n(){return new Float32Array(3)}function r(e){const t=new Float32Array(3)
return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function s(e,t,i){const n=new Float32Array(3)
return n[0]=e,n[1]=t,n[2]=i,n}function a(e,t){return new Float32Array(e,t,3)}function o(){return n()}function l(){return s(1,1,1)}function c(){return s(1,0,0)}function u(){return s(0,1,0)}function h(){return s(0,0,1)}i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return n})),i.d(t,"d",(function(){return s})),i.d(t,"e",(function(){return o}))
const d=o(),f=l(),_=c(),m=u(),p=h()
Object.freeze(Object.defineProperty({__proto__:null,ONES:f,UNIT_X:_,UNIT_Y:m,UNIT_Z:p,ZEROS:d,clone:r,create:n,createView:a,fromValues:s,ones:l,unitX:c,unitY:u,unitZ:h,zeros:o},Symbol.toStringTag,{value:"Module"}))},1362:function(e,t,i){"use strict"
i.d(t,"a",(function(){return o}))
var n=i(1068),r=i(984),s=i(1116),a=i(1202)
class o{constructor(e,t){this._rctx=e,this._vertexBuffer=n.a.createVertex(e,r.D.STATIC_DRAW,new Uint16Array(t)),this._vao=new s.a(e,new Map([["a_position",0]]),{geometry:[new a.a("a_position",2,r.k.SHORT,0,4)]},{geometry:this._vertexBuffer}),this._count=t.length/2}bind(){this._rctx.bindVAO(this._vao)}unbind(){this._rctx.bindVAO(null)}dispose(){this._vao.dispose(!1),this._vertexBuffer.dispose()}draw(){this._rctx.bindVAO(this._vao),this._rctx.drawArrays(r.r.TRIANGLE_STRIP,0,this._count)}}},1367:function(e,t,i){"use strict"
i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return a}))
var n=i(984),r=i(1202)
const s={geometry:[new r.a("a_pos",2,n.k.BYTE,0,2)]},a={geometry:[new r.a("a_pos",2,n.k.BYTE,0,4),new r.a("a_tex",2,n.k.BYTE,2,4)]},o={geometry:[new r.a("a_pos",2,n.k.UNSIGNED_SHORT,0,4)]}},1370:function(e,t,i){"use strict"
i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return s}))
var n=i(991)
function r(e,t,i=0){const r=Object(n.f)(e,0,l)
for(let e=0;e<4;e++)t[i+e]=Math.floor(256*c(r*a[e]))}function s(e,t=0){let i=0
for(let n=0;n<4;n++)i+=e[t+n]*o[n]
return i}const a=[1,256,65536,16777216],o=[1/256,1/65536,1/16777216,1/4294967296],l=s(new Uint8ClampedArray([255,255,255,255]))
function c(e){return e-Math.floor(e)}},1371:function(e,t,i){"use strict"
i.d(t,"a",(function(){return r}))
var n=i(446)
function r(e,t){if(e&&"name"in e){const i=e
return t&&t.error(new n.a(i.name,i.message,i.details)),!1}return!0}},1373:function(e,t,i){"use strict"
i.d(t,"a",(function(){return x}))
var n=i(980),r=i(1215),s=i(1192),a=i(1013),o=i(1173),l=i(1287),c=i(1064),u=i(1527)
class h{constructor(e,t,i,n){this.center=Object(o.d)(e,t),this.centerT=Object(o.c)(),this.halfWidth=i/2,this.halfHeight=n/2,this.width=i,this.height=n}get x(){return this.center[0]}get y(){return this.center[1]}get blX(){return this.center[0]+this.halfWidth}get blY(){return this.center[1]+this.halfHeight}get trX(){return this.center[0]-this.halfWidth}get trY(){return this.center[1]-this.halfHeight}get xmin(){return this.x-this.halfWidth}get xmax(){return this.x+this.halfWidth}get ymin(){return this.y-this.halfHeight}get ymax(){return this.y+this.halfHeight}set x(e){this.center[0]=e}set y(e){this.center[1]=e}clone(){return new h(this.x,this.y,this.width,this.height)}serialize(e){return e.writeF32(this.center[0]),e.writeF32(this.center[1]),e.push(this.width),e.push(this.height),e}findCollisionDelta(e,t=4){const i=Math.abs(e.centerT[0]-this.centerT[0]),n=Math.abs(e.centerT[1]-this.centerT[1]),r=(e.halfWidth+this.halfWidth+t)/i,s=(e.halfHeight+this.halfHeight+t)/n,a=Math.min(r,s)
return Math.log2(a)}extend(e){const t=Math.min(this.xmin,e.xmin),i=Math.min(this.ymin,e.ymin),n=Math.max(this.xmax,e.xmax)-t,r=Math.max(this.ymax,e.ymax)-i,s=t+n/2,a=i+r/2
this.width=n,this.height=r,this.halfWidth=n/2,this.halfHeight=r/2,this.x=s,this.y=a}static deserialize(e){const t=e.readF32(),i=e.readF32(),n=e.readInt32(),r=e.readInt32()
return new h(t,i,n,r)}}const d=Math.PI/180
class f{constructor(e,t,i,n){this._rotationT=Object(s.a)(),this._xBounds=0,this._yBounds=0,this.minZoom=0,this.maxZoom=255,this._bounds=null
const r=i.rect,a=new Float32Array(8)
e*=n,t*=n
const o=i.code?r.width*n:i.metrics.width,l=i.code?r.height*n:i.metrics.height
this.width=o,this.height=l,a[0]=e,a[1]=t,a[2]=e+o,a[3]=t,a[4]=e,a[5]=t+l,a[6]=e+o,a[7]=t+l,this._data=a,this._setTextureCoords(r),this._scale=n,this._mosaic=i,this.x=e,this.y=t,this.maxOffset=Math.max(e+o,t+l)}get mosaic(){return this._mosaic}set angle(e){this._angle=e,Object(r.b)(this._rotationT,-e),this._setOffsets(this._data)}get angle(){return this._angle}get xTopLeft(){return this._data[0]}get yTopLeft(){return this._data[1]}get xBottomRight(){return this._data[6]}get yBottomRight(){return this._data[7]}get texcoords(){return this._texcoords}get textureBinding(){return this._mosaic.textureBinding}get offsets(){return this._offsets||this._setOffsets(this._data),this._offsets}get char(){return String.fromCharCode(this._mosaic.code)}get code(){return this._mosaic.code}get bounds(){if(!this._bounds){const{height:e,width:t}=this._mosaic.metrics,i=t*this._scale,n=Math.abs(e)*this._scale,a=new Float32Array(8)
a[0]=this.x,a[1]=this.y,a[2]=this.x+i,a[3]=this.y,a[4]=this.x,a[5]=this.y+n,a[6]=this.x+i,a[7]=this.y+n
const o=Object(r.g)(Object(s.a)(),this._rotationT,this._transform)
Object(s.b)(a,a,o)
let l=1/0,c=1/0,u=0,d=0
for(let e=0;e<4;e++){const t=a[2*e],i=a[2*e+1]
l=Math.min(l,t),c=Math.min(c,i),u=Math.max(u,t),d=Math.max(d,i)}const f=u-l,_=d-c,m=l+f/2,p=c+_/2
this._bounds=new h(m,p,f,_)}return this._bounds}setTransform(e){this._transform=e,this._offsets=null}_setOffsets(e){this._offsets||(this._offsets={upperLeft:0,upperRight:0,lowerLeft:0,lowerRight:0})
const t=this._offsets,i=new Float32Array(8),n=Object(r.g)(Object(s.a)(),this._rotationT,this._transform)
Object(s.b)(i,e,n),t.upperLeft=Object(c.a)(8*i[0],8*i[1]),t.upperRight=Object(c.a)(8*i[2],8*i[3]),t.lowerLeft=Object(c.a)(8*i[4],8*i[5]),t.lowerRight=Object(c.a)(8*i[6],8*i[7])}_setTextureCoords({x:e,y:t,width:i,height:n}){this._texcoords={upperLeft:Object(c.a)(e,t),upperRight:Object(c.a)(e+i,t),lowerLeft:Object(c.a)(e,t+n),lowerRight:Object(c.a)(e+i,t+n)}}}const _=(e,t)=>({code:0,page:0,sdf:!0,rect:new u.a(0,0,11,8),textureBinding:t,metrics:{advance:0,height:4,width:e,left:0,top:0}})
function m(e,t){return e.forEach(e=>Object(a.t)(e,e,t)),{upperLeft:Object(c.a)(8*e[0][0],8*e[0][1]),upperRight:Object(c.a)(8*e[1][0],8*e[1][1]),lowerLeft:Object(c.a)(8*e[2][0],8*e[2][1]),lowerRight:Object(c.a)(8*e[3][0],8*e[3][1])}}class p{constructor(e,t,i){this._rotation=0,this._decorate(e,t,i),this.glyphs=e,this.bounds=this._createBounds(e),this.isMultiline=t.length>1,this._hasRotation=0!==i.angle,this._transform=this._createGlyphTransform(this.bounds,i),this._borderLineSize=i.borderLineSize,(i.borderLineSize||i.hasBackground)&&([this.bounds,this.background]=this.shapeBackground(this._transform))
for(const t of e)t.setTransform(this._transform)}setRotation(e){if(0===e&&0===this._rotation)return
this._rotation=e
const t=this._transform,i=Object(r.b)(Object(s.a)(),e)
Object(r.g)(t,i,t)
for(const e of this.glyphs)e.setTransform(this._transform)}_decorate(e,t,i){if(!i.decoration||"none"===i.decoration||!e.length)return
const n=i.scale,r="underline"===i.decoration?30:20,s=e[0].textureBinding
for(const i of t){const t=i.startX*n,a=i.startY*n,o=(i.width+i.glyphWidthEnd)*n
e.push(new f(t,a+r*n,_(o,s),1))}}shapeBackground(e){const t=(1.5+Object(n.h)(this._borderLineSize||0))/2,i=this._borderLineSize?t:0,{xmin:r,ymin:s,xmax:a,ymax:o,x:l,y:c,width:u,height:d}=this.bounds,f=[r-8,s-8],_=[a+8,s-8],p=[r-8,o+8],g=[a+8,o+8],b=m([[f[0]-t,f[1]-t],[_[0]+t,_[1]-t],[f[0]+i,f[1]+i],[_[0]-i,_[1]+i]],e),v=m([[p[0]+i,p[1]-i],[g[0]-i,g[1]-i],[p[0]-t,p[1]+t],[g[0]+t,g[1]+t]],e),x=m([[f[0]-t,f[1]-t],[f[0]+i,f[1]+i],[p[0]-t,p[1]+t],[p[0]+i,p[1]-i]],e),y=m([[_[0]-i,_[1]+i],[_[0]+t,_[1]-t],[g[0]-i,g[1]-i],[g[0]+t,g[1]+t]],e),O={main:m([f,_,p,g],e),top:b,bot:v,left:x,right:y}
return[new h(l,c,u+2*t,d+2*t),O]}get boundsT(){const e=this.bounds,t=Object(a.s)(Object(o.c)(),e.x,e.y)
if(Object(a.t)(t,t,this._transform),this._hasRotation){const i=Math.max(e.width,e.height)
return new h(t[0],t[1],i,i)}return new h(t[0],t[1],e.width,e.height)}_createBounds(e){let t=1/0,i=1/0,n=0,r=0
for(const s of e)t=Math.min(t,s.xTopLeft),i=Math.min(i,s.yTopLeft),n=Math.max(n,s.xBottomRight),r=Math.max(r,s.yBottomRight)
const s=n-t,a=r-i
return new h(t+s/2,i+a/2,s,a)}_createGlyphTransform(e,t){const i=d*t.angle,n=Object(s.a)(),l=Object(o.c)()
return Object(r.j)(n,n,Object(a.s)(l,t.xOffset,-t.yOffset)),t.isCIM?Object(r.h)(n,n,i):(Object(r.j)(n,n,Object(a.s)(l,e.x,e.y)),Object(r.h)(n,n,i),Object(r.j)(n,n,Object(a.s)(l,-e.x,-e.y))),n}}class g{constructor(e,t,i,n,r,s){this.glyphWidthEnd=0,this.startX=0,this.startY=0,this.start=Math.max(0,Math.min(t,i)),this.end=Math.max(0,Math.max(t,i)),this.end<e.length&&(this.glyphWidthEnd=e[this.end].metrics.width),this.width=n,this.yMin=r,this.yMax=s}}const b=e=>10===e,v=e=>32===e
function x(e,t,i){const n=i.scale,r=new Array,s=function(e,t,i){const n=new Array,r=1/i.scale,s=i.maxLineWidth*r,a=t?e.length-1:0,o=t?-1:e.length,l=t?-1:1
let c=a,u=0,h=0,d=c,f=d,_=0,m=1/0,p=0
for(;c!==o;){const{code:t,metrics:i}=e[c],r=Math.abs(i.top)
if(b(t)||v(t)||(m=Math.min(m,r),p=Math.max(p,r+i.height)),b(t))c!==a&&(n.push(new g(e,d,c-l,u,m,p)),m=1/0,p=0),u=0,d=c+l,f=c+l,h=0
else if(v(t))f=c+l,h=0,_=i.advance,u+=i.advance
else if(u>s){if(f!==d){const t=f-2*l
u-=_,n.push(new g(e,d,t,u-h,m,p)),m=1/0,p=0,d=f,u=h}else n.push(new g(e,d,c-l,u,m,p)),m=1/0,p=0,d=c,f=c,u=0
u+=i.advance,h+=i.advance}else u+=i.advance,h+=i.advance
c+=l}const x=new g(e,d,c-l,u,m,p)
return x.start>=0&&x.end<e.length&&n.push(x),n}(e,t,i),a=function(e,t){let i=0
for(let t=0;t<e.length;t++){const{width:n}=e[t]
i=Math.max(n,i)}const n="underline"===t.decoration?4:0,r=e[0].yMin
return{x:0,y:r,height:e[e.length-1].yMax+t.lineHeight*(e.length-1)+n-r,width:i}}(s,i),{vAlign:o,hAlign:c}=i,u=o===l.b.Baseline?1:0,h=u?0:o-1,d=(1-u)*-a.y+h*(a.height/2)+-26*(u?1:0)
for(let t=0;t<s.length;t++){const{start:a,end:o,width:l}=s[t]
let u=-1*(c+1)*(l/2)-3
const h=t*i.lineHeight+d-3
s[t].startX=u,s[t].startY=h
for(let t=a;t<=o;t++){const i=e[t]
if(b(i.code))continue
const s=new f(u+i.metrics.left,h-i.metrics.top,i,n)
u+=i.metrics.advance,r.push(s)}}return new p(r,s,i)}},1391:function(e,t,i){"use strict"
i.d(t,"a",(function(){return o}))
var n=i(446),r=i(233),s=i(23),a=i(1226)
function o(e,t,i,n,a){if(Object(s.k)(e))return null
const o=e.referencesGeometry()&&a?c(t,n,a):t,l=e.repurposeFeature(o)
try{return e.evaluate({...i,$feature:l})}catch(e){return r.a.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",e),null}}const l=new Map
function c(e,t,i){const{transform:s,hasZ:o,hasM:c}=i
l.has(t)||l.set(t,function(e){const t={}
switch(e){case"esriGeometryPoint":return(e,i,n,r)=>Object(a.e)(i,t,e,n,r)
case"esriGeometryPolygon":return(e,i,n,r)=>Object(a.f)(i,t,e,n,r)
case"esriGeometryPolyline":return(e,i,n,r)=>Object(a.g)(i,t,e,n,r)
case"esriGeometryMultipoint":return(e,i,n,r)=>Object(a.d)(i,t,e,n,r)
default:return r.a.getLogger("esri.views.2d.support.arcadeOnDemand").error(new n.a("mapview-arcade","Unable to handle geometryType: "+e)),e=>e}}(t))
const u=l.get(t)(e.geometry,s,o,c)
return{...e,geometry:u}}},1412:function(e,t,i){"use strict"
i.d(t,"a",(function(){return a}))
var n=i(446),r=i(23),s=i(984)
function a(e,t){const{textureFloat:i,colorBufferFloat:a}=e.capabilities,o=null==i?void 0:i.textureFloat,l=null==i?void 0:i.textureFloatLinear,c=null==i?void 0:i.textureHalfFloat,u=null==i?void 0:i.textureHalfFloatLinear,h=null==i?void 0:i.HALF_FLOAT,d=null==a?void 0:a.textureFloat,f=null==a?void 0:a.textureHalfFloat,_=null==a?void 0:a.floatBlend,m=Object(r.w)(e.driverTest).floatBufferBlend.result
if(!o&&!c)throw new n.a("heatmap:missing-texture-float","HeatmapRenderer requires WebGL2 or the WebGL1 extension OES_texture_float or OES_texture_half_float.")
if(!d&&!f)throw new n.a("heatmap:missing-color-buffer-float","HeatmapRenderer requires the WebGL extension EXT_color_buffer_float or EXT_color_buffer_half_float or WEBGL_color_buffer_float.")
if(!(_&&m||f))throw new n.a("heatmap:missing-float-blend","HeatmapRenderer requires the WebGL extension EXT_float_blend or EXT_color_buffer_half_float."+(m?"":" This device claims support for EXT_float_blend, but does not actually support it."))
const p=o&&d&&_&&m,g=c&&f,b=l,v=u,x=!(null==a||!a.R32F),y=!(null==a||!a.R16F)
if(p&&(b||!v))return b||t.warnOnce("Missing WebGL extension OES_texture_float_linear. Heatmap quality may be reduced."),{dataType:s.q.FLOAT,samplingMode:b?s.z.LINEAR:s.z.NEAREST,pixelFormat:x?s.p.RED:s.p.RGBA,internalFormat:x?s.v.R32F:s.p.RGBA}
if(g)return v||t.warnOnce("Missing WebGL extension OES_texture_half_float_linear. Heatmap quality may be reduced."),{dataType:h,samplingMode:v?s.z.LINEAR:s.z.NEAREST,pixelFormat:y?s.p.RED:s.p.RGBA,internalFormat:y?s.v.R16F:s.p.RGBA}
throw new n.a("heatmap:missing-hardware-support","HeatmapRenderer requires WebGL extensions that allow it to render and blend to float or half float textures.")}},1422:function(e,t,i){"use strict"
i.d(t,"a",(function(){return n}))
class n{constructor(e=0,t=0,i=0,n=0){this.x=e,this.y=t,this.width=i,this.height=n}get isEmpty(){return this.width<=0||this.height<=0}union(e){this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.width=Math.max(this.width,e.width),this.height=Math.max(this.height,e.height)}}},1426:function(e,t,i){"use strict"
var n
i.d(t,"a",(function(){return c})),i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return u})),i.d(t,"d",(function(){return n})),i.d(t,"e",(function(){return m})),i.d(t,"f",(function(){return f})),i.d(t,"g",(function(){return h})),i.d(t,"h",(function(){return d})),function(e){e.AsyncNotEnabled="AsyncNotEnabled",e.ModulesNotSupported="ModulesNotSupported",e.CircularModules="CircularModules",e.NeverReach="NeverReach",e.UnsupportedHashType="UnsupportedHashType",e.InvalidParameter="InvalidParameter",e.UnexpectedToken="UnexpectedToken",e.Unrecognised="Unrecognised",e.UnrecognisedType="UnrecognisedType",e.MaximumCallDepth="MaximumCallDepth",e.BooleanConditionRequired="BooleanConditionRequired",e.TypeNotAllowedInFeature="TypeNotAllowedInFeature",e.KeyMustBeString="KeyMustBeString",e.WrongNumberOfParameters="WrongNumberOfParameters",e.CallNonFunction="CallNonFunction",e.NoFunctionInTemplateLiteral="NoFunctionInTemplateLiteral",e.NoFunctionInDictionary="NoFunctionInDictionary",e.NoFunctionInArray="NoFunctionInArray",e.AssignModuleFunction="AssignModuleFunction",e.LogicExpressionOrAnd="LogicExpressionOrAnd",e.LogicalExpressionOnlyBoolean="LogicalExpressionOnlyBoolean",e.FuncionNotFound="FunctionNotFound",e.InvalidMemberAccessKey="InvalidMemberAccessKey",e.UnsupportedUnaryOperator="UnsupportUnaryOperator",e.InvalidIdentifier="InvalidIdentifier",e.MemberOfNull="MemberOfNull",e.UnsupportedOperator="UnsupportedOperator",e.Cancelled="Cancelled",e.ModuleAccessorMustBeString="ModuleAccessorMustBeString",e.ModuleExportNotFound="ModuleExportNotFound",e.Immutable="Immutable",e.OutOfBounds="OutOfBounds",e.IllegalResult="IllegalResult",e.FieldNotFound="FieldNotFound",e.PortalRequired="PortalRequired",e.LogicError="LogicError",e.ArrayAccessorMustBeNumber="ArrayAccessMustBeNumber",e.KeyAccessorMustBeString="KeyAccessorMustBeString",e.WrongSpatialReference="WrongSpatialReference"}(n||(n={}))
const r={[n.TypeNotAllowedInFeature]:"Feature attributes only support dates, numbers, strings, guids.",[n.LogicError]:"Logic error - {reason}",[n.NeverReach]:"Encountered unreachable logic",[n.AsyncNotEnabled]:"Async Arcade must be enabled for this script",[n.ModuleAccessorMustBeString]:"Module accessor must be a string",[n.ModuleExportNotFound]:"Module has no export with provided identifier",[n.ModulesNotSupported]:"Current profile does not support modules",[n.ArrayAccessorMustBeNumber]:"Array accessor must be a number",[n.FuncionNotFound]:"Function not found",[n.FieldNotFound]:"Key not found - {key}",[n.CircularModules]:"Circular module dependencies are not allowed",[n.Cancelled]:"Execution cancelled",[n.UnsupportedHashType]:"Type not supported in hash function",[n.IllegalResult]:"Value is not a supported return type",[n.PortalRequired]:"Portal is required",[n.InvalidParameter]:"Invalid parameter",[n.WrongNumberOfParameters]:"Call with wrong number of parameters",[n.Unrecognised]:"Unrecognised code structure",[n.UnrecognisedType]:"Unrecognised type",[n.WrongSpatialReference]:"Cannot work with geometry in this spatial reference. It is different to the execution spatial reference",[n.BooleanConditionRequired]:"Conditions must use booleans",[n.NoFunctionInDictionary]:"Dictionaries cannot contain functions.",[n.NoFunctionInArray]:"Arrays cannot contain functions.",[n.NoFunctionInTemplateLiteral]:"Template Literals do not expect functions by value.",[n.KeyAccessorMustBeString]:"Accessor must be a string",[n.KeyMustBeString]:"Object keys must be a string",[n.Immutable]:"Object is immutable",[n.InvalidParameter]:"Invalid parameter",[n.UnexpectedToken]:"Unexpected token",[n.MemberOfNull]:"Cannot access property of null object",[n.MaximumCallDepth]:"Exceeded maximum function depth",[n.OutOfBounds]:"Out of bounds",[n.InvalidIdentifier]:"Identifier not recognised",[n.FuncionNotFound]:"Function not found",[n.CallNonFunction]:"Expression is not a function",[n.InvalidMemberAccessKey]:"Cannot access value using a key of this type",[n.AssignModuleFunction]:"Cannot assign function to module variable",[n.UnsupportedUnaryOperator]:"Unsupported unary operator",[n.UnsupportedOperator]:"Unsupported operator",[n.LogicalExpressionOnlyBoolean]:"Logical expressions must be boolean",[n.LogicExpressionOrAnd]:"Logical expression can only be combined with || or &&"}
class s extends Error{constructor(...e){super(...e)}}class a extends s{constructor(e,t){super(l(t)+e.message,{cause:e}),this.loc=null,Error.captureStackTrace&&Error.captureStackTrace(this,a),t&&t.loc&&(this.loc=t.loc)}}class o extends Error{constructor(e,t,i,n){super("Execution error - "+l(i)+h(r[t],n)),this.loc=null,this.declaredRootClass="esri.arcade.arcadeexecutionerror",Error.captureStackTrace&&Error.captureStackTrace(this,o),i&&i.loc&&(this.loc=i.loc)}}function l(e){var t,i
return e&&e.loc?`Line : ${null==(t=e.loc.start)?void 0:t.line}, ${null==(i=e.loc.start)?void 0:i.column}: `:""}class c extends Error{constructor(e,t,i,n){super("Compilation error - "+l(i)+h(r[t],n)),this.loc=null,this.declaredRootClass="esri.arcade.arcadecompilationerror",Error.captureStackTrace&&Error.captureStackTrace(this,c),i&&i.loc&&(this.loc=i.loc)}}class u extends Error{constructor(){super("Uncompilable code structures"),this.declaredRootClass="esri.arcade.arcadeuncompilableerror",Error.captureStackTrace&&Error.captureStackTrace(this,u)}}function h(e,t){try{if(!t)return e
for(const i in t){let n=t[i]
n||(n=""),e=e.replace("{"+i+"}",t[i])}}catch(e){}return e}function d(e,t,i){return"esri.arcade.arcadeexecutionerror"===i.declaredRootClass||"esri.arcade.arcadecompilationerror"===i.declaredRootClass?null===i.loc&&t&&t.loc?new a(i,{cause:i}):i:("esri.arcade.featureset.support.featureseterror"===i.declaredRootClass||"esri.arcade.featureset.support.sqlerror"===i.declaredRootClass||i.declaredRootClass,t&&t.loc?new a(i,{cause:i}):i)}var f
!function(e){e.UnrecognisedUri="UnrecognisedUri",e.UnsupportedUriProtocol="UnsupportedUriProtocol"}(f||(f={}))
const _={[f.UnrecognisedUri]:"Unrecognised uri - {uri}",[f.UnsupportedUriProtocol]:"Unrecognised uri protocol"}
class m extends Error{constructor(e,t){super(h(_[e],t)),this.declaredRootClass="esri.arcade.arcademoduleerror",Error.captureStackTrace&&Error.captureStackTrace(this,m)}}},1447:function(e,t,i){"use strict"
i.d(t,"a",(function(){return f})),i.d(t,"b",(function(){return d})),i.d(t,"c",(function(){return b})),i.d(t,"d",(function(){return g})),i.d(t,"e",(function(){return _})),i.d(t,"f",(function(){return p})),i.d(t,"g",(function(){return m})),i.d(t,"h",(function(){return v}))
var n=i(1304),r=i(23),s=i(980),a=i(773),o=i(996),l=i(988),c=i(1287),u=i(1e3),h=i(1373)
const d=512,f=50
function _(e,t){const i=Object(l.e)(t)
if(!i)return null
const[n,r]=i.valid
return e[2]>r?[Object(o.m)([e[0],e[1],r,e[3]]),Object(o.m)([n,e[1],n+e[2]-r,e[3]])]:e[0]<n?[Object(o.m)([n,e[1],e[2],e[3]]),Object(o.m)([r-(n-e[0]),e[1],r,e[3]])]:null}function m(e){return"text"===e||"esriTS"===e}function p(e){return"simple-marker"===e||"picture-marker"===e||"esriSMS"===e||"esriPMS"===e}function g(e){switch(Object(r.u)(e.geometry).type){case"point":case"multipoint":return 0
case"polyline":return 1
case"polygon":case"extent":return 2}return 0}function b(e,t,i){var r,a,o,l
if(null==i||null==(r=i.glyphMosaicItems)||!r.length)return e
const d=Object(n.a)(t.text)[1],f=i.glyphMosaicItems,_=Object(h.a)(f,d,{scale:Object(s.h)(t.font.size)/u.v,angle:null!=(a=t.angle)?a:0,xOffset:null!=(o=t.xoffset)?o:0,yOffset:null!=(l=t.yoffset)?l:0,hAlign:Object(c.e)(t.horizontalAlignment||"center"),vAlign:Object(c.g)(t.verticalAlignment||"baseline"),maxLineWidth:Math.max(32,Math.min(t.lineWidth||512,512)),lineHeight:u.y*Math.max(.25,Math.min(t.lineHeight||1,4)),decoration:t.font.decoration||"none",isCIM:!1,hasBackground:!!t.backgroundColor,borderLineSize:t.borderLineSize}).bounds
return e[0]=Object(s.h)(_.x-_.halfWidth),e[1]=Object(s.h)(_.y-_.halfHeight),e[2]=Object(s.h)(_.width),e[3]=Object(s.h)(_.height),e}function v(e){if(!e)return null
const{xmin:t,ymin:i,xmax:n,ymax:r,spatialReference:s}=e
return new a.default({rings:[[[t,i],[t,r],[n,r],[n,i],[t,i]]],spatialReference:s})}},1459:function(e,t,i){"use strict"
i.d(t,"a",(function(){return _}))
var n=i(23),r=i(1261),s=i(1367),a=i(1177),o=i(1315),l=i(1557),c=i(1068),u=i(984),h=i(1293),d=i(1072),f=i(1116)
class _ extends a.a{constructor(){super(...arguments),this._color=Object(r.b)(1,0,0,1)}dispose(){var e,t,i,n
null!=(e=this._outlineProgram)&&e.dispose(),this._outlineProgram=null,null!=(t=this._tileInfoProgram)&&t.dispose(),this._tileInfoProgram=null,null!=(i=this._outlineVertexArrayObject)&&i.dispose(),this._outlineVertexArrayObject=null,null!=(n=this._tileInfoVertexArrayObject)&&n.dispose(),this._tileInfoVertexArrayObject=null,this._canvas=null}prepareState({context:e}){e.setBlendingEnabled(!0),e.setBlendFunctionSeparate(u.b.ONE,u.b.ONE_MINUS_SRC_ALPHA,u.b.ONE,u.b.ONE_MINUS_SRC_ALPHA),e.setColorMask(!0,!0,!0,!0),e.setStencilWriteMask(0),e.setStencilTestEnabled(!1)}draw(e,t){const{context:i,requestRender:r,allowDelayedRender:s}=e
if(!t.isReady)return
if(this._loadWGLResources(i),s&&Object(n.l)(r)&&(!this._outlineProgram.compiled||!this._tileInfoProgram.compiled))return void r()
i.bindVAO(this._outlineVertexArrayObject),i.useProgram(this._outlineProgram),this._outlineProgram.setUniformMatrix3fv("u_dvsMat3",t.transforms.dvs),this._outlineProgram.setUniform2f("u_coord_range",t.rangeX,t.rangeY),this._outlineProgram.setUniform1f("u_depth",0),this._outlineProgram.setUniform4fv("u_color",this._color),i.drawArrays(u.r.LINE_STRIP,0,4)
const a=this._getTexture(i,t)
a?(i.bindVAO(this._tileInfoVertexArrayObject),i.useProgram(this._tileInfoProgram),i.bindTexture(a,0),this._tileInfoProgram.setUniformMatrix3fv("u_dvsMat3",t.transforms.dvs),this._tileInfoProgram.setUniform1f("u_depth",0),this._tileInfoProgram.setUniform2f("u_coord_ratio",t.rangeX/t.width,t.rangeY/t.height),this._tileInfoProgram.setUniform2f("u_delta",8,8),this._tileInfoProgram.setUniform2f("u_dimensions",a.descriptor.width,a.descriptor.height),i.drawArrays(u.r.TRIANGLE_STRIP,0,4),i.bindVAO()):i.bindVAO()}_loadWGLResources(e){if(this._outlineProgram&&this._tileInfoProgram)return
const t=Object(h.a)(e,o.a),i=Object(h.a)(e,l.a),n=new Int8Array([0,0,1,0,1,1,0,1]),r=c.a.createVertex(e,u.D.STATIC_DRAW,n),a=new f.a(e,o.a.attributes,s.a,{geometry:r}),d=new Int8Array([0,0,1,0,0,1,1,1]),_=c.a.createVertex(e,u.D.STATIC_DRAW,d),m=new f.a(e,l.a.attributes,s.a,{geometry:_})
this._outlineProgram=t,this._tileInfoProgram=i,this._outlineVertexArrayObject=a,this._tileInfoVertexArrayObject=m}_getTexture(e,t){if(t.texture&&t.triangleCountReportedInDebug===t.triangleCount)return t.texture
t.triangleCountReportedInDebug=t.triangleCount,this._canvas||(this._canvas=document.createElement("canvas"),this._canvas.setAttribute("id","canvas2d"),this._canvas.setAttribute("width","300"),this._canvas.setAttribute("height","32"),this._canvas.setAttribute("style","display:none"))
const i=t.triangleCount
let n=t.key.id
t.triangleCount>0&&(n+=", "+i)
const r=this._canvas,s=r.getContext("2d")
return s.font="24px sans-serif",s.textAlign="left",s.textBaseline="top",s.clearRect(0,0,300,32),i>1e5?(s.fillStyle="red",s.fillRect(0,0,300,32),s.fillStyle="black"):(s.clearRect(0,0,300,32),s.fillStyle="blue"),s.fillText(n,0,0),t.texture=new d.a(e,{target:u.A.TEXTURE_2D,pixelFormat:u.p.RGBA,dataType:u.q.UNSIGNED_BYTE,samplingMode:u.z.NEAREST,wrapMode:u.B.CLAMP_TO_EDGE},r),t.texture}}},1460:function(e,t,i){"use strict"
i.d(t,"a",(function(){return d}))
var n=i(23),r=i(1261),s=i(1367),a=i(1177),o=i(1315),l=i(1068),c=i(984),u=i(1293),h=i(1116)
class d extends a.a{constructor(){super(...arguments),this._color=Object(r.b)(1,0,0,1),this._initialized=!1}dispose(){this._solidProgram&&(this._solidProgram.dispose(),this._solidProgram=null),this._solidVertexArrayObject&&(this._solidVertexArrayObject.dispose(),this._solidVertexArrayObject=null)}prepareState({context:e}){e.setDepthWriteEnabled(!1),e.setDepthTestEnabled(!1),e.setStencilTestEnabled(!0),e.setBlendingEnabled(!1),e.setColorMask(!1,!1,!1,!1),e.setStencilOp(c.w.KEEP,c.w.KEEP,c.w.REPLACE),e.setStencilWriteMask(255)}draw(e,t){const{context:i,requestRender:r,allowDelayedRender:s}=e
this._initialized||this._initialize(i),s&&Object(n.l)(r)&&!this._solidProgram.compiled?r():(i.setStencilFunctionSeparate(c.n.FRONT_AND_BACK,c.h.GREATER,t.stencilRef,255),i.bindVAO(this._solidVertexArrayObject),i.useProgram(this._solidProgram),this._solidProgram.setUniformMatrix3fv("u_dvsMat3",t.transforms.dvs),this._solidProgram.setUniform2fv("u_coord_range",[t.rangeX,t.rangeY]),this._solidProgram.setUniform1f("u_depth",0),this._solidProgram.setUniform4fv("u_color",this._color),i.drawArrays(c.r.TRIANGLE_STRIP,0,4),i.bindVAO())}_initialize(e){if(this._initialized)return!0
const t=Object(u.a)(e,o.a)
if(!t)return!1
const i=new Int8Array([0,0,1,0,0,1,1,1]),n=l.a.createVertex(e,c.D.STATIC_DRAW,i),r=new h.a(e,o.a.attributes,s.a,{geometry:n})
return this._solidProgram=t,this._solidVertexArrayObject=r,this._initialized=!0,!0}}},1468:function(e,t,i){"use strict"
var n,r
i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return s})),i.d(t,"c",(function(){return l})),i.d(t,"d",(function(){return o})),function(e){e[e.Unknown=0]="Unknown",e[e.Point=1]="Point",e[e.LineString=2]="LineString",e[e.Polygon=3]="Polygon"}(n||(n={}))
class s{constructor(e,t){this.x=e,this.y=t}clone(){return new s(this.x,this.y)}equals(e,t){return e===this.x&&t===this.y}isEqual(e){return e.x===this.x&&e.y===this.y}setCoords(e,t){this.x=e,this.y=t}normalize(){const e=this.x,t=this.y,i=Math.sqrt(e*e+t*t)
this.x/=i,this.y/=i}rightPerpendicular(){const e=this.x
this.x=this.y,this.y=-e}move(e,t){this.x+=e,this.y+=t}assign(e){this.x=e.x,this.y=e.y}assignAdd(e,t){this.x=e.x+t.x,this.y=e.y+t.y}assignSub(e,t){this.x=e.x-t.x,this.y=e.y-t.y}rotate(e,t){const i=this.x,n=this.y
this.x=i*e-n*t,this.y=i*t+n*e}scale(e){this.x*=e,this.y*=e}length(){const e=this.x,t=this.y
return Math.sqrt(e*e+t*t)}static distance(e,t){const i=t.x-e.x,n=t.y-e.y
return Math.sqrt(i*i+n*n)}static add(e,t){return new s(e.x+t.x,e.y+t.y)}static sub(e,t){return new s(e.x-t.x,e.y-t.y)}}class a{constructor(e,t,i){this.ratio=e,this.x=t,this.y=i}}class o{constructor(e,t,i,n=8,r=8){this._lines=[],this._starts=[],this.validateTessellation=!0,this._pixelRatio=n,this._pixelMargin=r,this._tileSize=512*n,this._dz=e,this._yPos=t,this._xPos=i}setPixelMargin(e){e!==this._pixelMargin&&(this._pixelMargin=e,this.setExtent(this._extent))}setExtent(e){this._extent=e,this._finalRatio=this._tileSize/e*(1<<this._dz)
let t=this._pixelRatio*this._pixelMargin
t/=this._finalRatio
const i=e>>this._dz
t>i&&(t=i),this._margin=t,this._xmin=i*this._xPos-t,this._ymin=i*this._yPos-t,this._xmax=this._xmin+i+2*t,this._ymax=this._ymin+i+2*t}reset(e){this._type=e,this._lines=[],this._starts=[],this._line=null,this._start=0}moveTo(e,t){this._pushLine(),this._prevIsIn=this._isIn(e,t),this._moveTo(e,t,this._prevIsIn),this._prevPt=new s(e,t),this._firstPt=new s(e,t),this._dist=0}lineTo(e,t){const i=this._isIn(e,t),n=new s(e,t),r=s.distance(this._prevPt,n)
let o,l,c,u,h,d,f,_
if(i)this._prevIsIn?this._lineTo(e,t,!0):(o=this._prevPt,l=n,c=this._intersect(l,o),this._start=this._dist+r*(1-this._r),this._lineTo(c.x,c.y,!0),this._lineTo(l.x,l.y,!0))
else if(this._prevIsIn)l=this._prevPt,o=n,c=this._intersect(l,o),this._lineTo(c.x,c.y,!0),this._lineTo(o.x,o.y,!1)
else{const e=this._prevPt,t=n
if(e.x<=this._xmin&&t.x<=this._xmin||e.x>=this._xmax&&t.x>=this._xmax||e.y<=this._ymin&&t.y<=this._ymin||e.y>=this._ymax&&t.y>=this._ymax)this._lineTo(t.x,t.y,!1)
else{const i=[]
if((e.x<this._xmin&&t.x>this._xmin||e.x>this._xmin&&t.x<this._xmin)&&(u=(this._xmin-e.x)/(t.x-e.x),_=e.y+u*(t.y-e.y),_<=this._ymin?d=!1:_>=this._ymax?d=!0:i.push(new a(u,this._xmin,_))),(e.x<this._xmax&&t.x>this._xmax||e.x>this._xmax&&t.x<this._xmax)&&(u=(this._xmax-e.x)/(t.x-e.x),_=e.y+u*(t.y-e.y),_<=this._ymin?d=!1:_>=this._ymax?d=!0:i.push(new a(u,this._xmax,_))),(e.y<this._ymin&&t.y>this._ymin||e.y>this._ymin&&t.y<this._ymin)&&(u=(this._ymin-e.y)/(t.y-e.y),f=e.x+u*(t.x-e.x),f<=this._xmin?h=!1:f>=this._xmax?h=!0:i.push(new a(u,f,this._ymin))),(e.y<this._ymax&&t.y>this._ymax||e.y>this._ymax&&t.y<this._ymax)&&(u=(this._ymax-e.y)/(t.y-e.y),f=e.x+u*(t.x-e.x),f<=this._xmin?h=!1:f>=this._xmax?h=!0:i.push(new a(u,f,this._ymax))),0===i.length)h?d?this._lineTo(this._xmax,this._ymax,!0):this._lineTo(this._xmax,this._ymin,!0):d?this._lineTo(this._xmin,this._ymax,!0):this._lineTo(this._xmin,this._ymin,!0)
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
const s=(i-e.x)/(t.x-e.x),a=(n-e.y)/(t.y-e.y)
s<a?(r=s,n=e.y+s*(t.y-e.y)):(r=a,i=e.x+a*(t.x-e.x))}return this._r=r,new s(i,n)}_pushLine(){this._line&&(this._type===n.Point?this._line.length>0&&(this._lines.push(this._line),this._starts.push(this._start)):this._type===n.LineString?this._line.length>1&&(this._lines.push(this._line),this._starts.push(this._start)):this._type===n.Polygon&&this._line.length>3&&(this._lines.push(this._line),this._starts.push(this._start))),this._line=[],this._start=0}_moveTo(e,t,i){this._type!==n.Polygon?i&&(e=Math.round((e-(this._xmin+this._margin))*this._finalRatio),t=Math.round((t-(this._ymin+this._margin))*this._finalRatio),this._line.push(new s(e,t))):(i||(e<this._xmin&&(e=this._xmin),e>this._xmax&&(e=this._xmax),t<this._ymin&&(t=this._ymin),t>this._ymax&&(t=this._ymax)),e=Math.round((e-(this._xmin+this._margin))*this._finalRatio),t=Math.round((t-(this._ymin+this._margin))*this._finalRatio),this._line.push(new s(e,t)),this._isH=!1,this._isV=!1)}_lineTo(e,t,i){let r,a
if(this._type!==n.Polygon)if(i){if(e=Math.round((e-(this._xmin+this._margin))*this._finalRatio),t=Math.round((t-(this._ymin+this._margin))*this._finalRatio),this._line.length>0&&(r=this._line[this._line.length-1],r.equals(e,t)))return
this._line.push(new s(e,t))}else this._line&&this._line.length>0&&this._pushLine()
else if(i||(e<this._xmin&&(e=this._xmin),e>this._xmax&&(e=this._xmax),t<this._ymin&&(t=this._ymin),t>this._ymax&&(t=this._ymax)),e=Math.round((e-(this._xmin+this._margin))*this._finalRatio),t=Math.round((t-(this._ymin+this._margin))*this._finalRatio),this._line&&this._line.length>0){r=this._line[this._line.length-1]
const i=r.x===e,n=r.y===t
if(i&&n)return
this._isH&&i||this._isV&&n?(r.x=e,r.y=t,a=this._line[this._line.length-2],a.x===e&&a.y===t?(this._line.pop(),this._line.length<=1?(this._isH=!1,this._isV=!1):(a=this._line[this._line.length-2],this._isH=a.x===e,this._isV=a.y===t)):(this._isH=a.x===e,this._isV=a.y===t)):(this._line.push(new s(e,t)),this._isH=i,this._isV=n)}else this._line.push(new s(e,t))}}class l{setExtent(e){this._ratio=4096===e?1:4096/e}get validateTessellation(){return this._ratio<1}reset(e){this._lines=[],this._line=null}moveTo(e,t){this._line&&this._lines.push(this._line),this._line=[]
const i=this._ratio
this._line.push(new s(e*i,t*i))}lineTo(e,t){const i=this._ratio
this._line.push(new s(e*i,t*i))}close(){const e=this._line
e&&!e[0].isEqual(e[e.length-1])&&e.push(e[0])}result(){return this._line&&this._lines.push(this._line),0===this._lines.length?null:this._lines}}!function(e){e[e.sideLeft=0]="sideLeft",e[e.sideRight=1]="sideRight",e[e.sideTop=2]="sideTop",e[e.sideBottom=3]="sideBottom"}(r||(r={}))
class c{static simplify(e,t,i){if(!i)return
const n=-t,s=e+t,a=-t,o=e+t,l=[],u=[],h=i.length
for(let e=0;e<h;++e){const t=i[e]
if(!t||t.length<2)continue
let c,h=t[0]
const d=t.length
for(let i=1;i<d;++i)c=t[i],h.x===c.x&&(h.x<=n&&(h.y>c.y?(l.push(e),l.push(i),l.push(r.sideLeft),l.push(-1)):(u.push(e),u.push(i),u.push(r.sideLeft),u.push(-1))),h.x>=s&&(h.y<c.y?(l.push(e),l.push(i),l.push(r.sideRight),l.push(-1)):(u.push(e),u.push(i),u.push(r.sideRight),u.push(-1)))),h.y===c.y&&(h.y<=a&&(h.x<c.x?(l.push(e),l.push(i),l.push(r.sideTop),l.push(-1)):(u.push(e),u.push(i),u.push(r.sideTop),u.push(-1))),h.y>=o&&(h.x>c.x?(l.push(e),l.push(i),l.push(r.sideBottom),l.push(-1)):(u.push(e),u.push(i),u.push(r.sideBottom),u.push(-1)))),h=c}if(0===l.length||0===u.length)return
c.fillParent(i,u,l),c.fillParent(i,l,u)
const d=[]
c.calcDeltas(d,u,l),c.calcDeltas(d,l,u),c.addDeltas(d,i)}static fillParent(e,t,i){const n=i.length,s=t.length
for(let a=0;a<s;a+=4){const s=t[a],o=t[a+1],l=t[a+2],c=e[s][o-1],h=e[s][o]
let d=8092,f=-1
for(let t=0;t<n;t+=4){if(i[t+2]!==l)continue
const n=i[t],s=i[t+1],a=e[n][s-1],o=e[n][s]
switch(l){case r.sideLeft:case r.sideRight:if(u(c.y,a.y,o.y)&&u(h.y,a.y,o.y)){const e=Math.abs(o.y-a.y)
e<d&&(d=e,f=t)}break
case r.sideTop:case r.sideBottom:if(u(c.x,a.x,o.x)&&u(h.x,a.x,o.x)){const e=Math.abs(o.x-a.x)
e<d&&(d=e,f=t)}}}t[a+3]=f}}static calcDeltas(e,t,i){const n=t.length
for(let r=0;r<n;r+=4){const n=[],s=c.calcDelta(r,t,i,n)
e.push(t[r]),e.push(t[r+1]),e.push(t[r+2]),e.push(s)}}static calcDelta(e,t,i,n){const r=t[e+3]
if(-1===r)return 0
const s=n.length
return s>1&&n[s-2]===r?0:(n.push(r),c.calcDelta(r,i,t,n)+1)}static addDeltas(e,t){const i=e.length
let n=0
for(let t=0;t<i;t+=4){const i=e[t+3]
i>n&&(n=i)}for(let s=0;s<i;s+=4){const i=t[e[s]],a=e[s+1],o=n-e[s+3]
switch(e[s+2]){case r.sideLeft:i[a-1].x-=o,i[a].x-=o,1===a&&(i[i.length-1].x-=o),a===i.length-1&&(i[0].x-=o)
break
case r.sideRight:i[a-1].x+=o,i[a].x+=o,1===a&&(i[i.length-1].x+=o),a===i.length-1&&(i[0].x+=o)
break
case r.sideTop:i[a-1].y-=o,i[a].y-=o,1===a&&(i[i.length-1].y-=o),a===i.length-1&&(i[0].y-=o)
break
case r.sideBottom:i[a-1].y+=o,i[a].y+=o,1===a&&(i[i.length-1].y+=o),a===i.length-1&&(i[0].y+=o)}}}}const u=(e,t,i)=>e>=t&&e<=i||e>=i&&e<=t},1475:function(e,t,i){"use strict"
i.d(t,"a",(function(){return c})),i.d(t,"b",(function(){return l})),i.d(t,"c",(function(){return n})),i.d(t,"d",(function(){return a})),i.d(t,"e",(function(){return u}))
var n,r=i(1426),s=i(1200)
class a{}a.instance=new s.IANAZone("Etc/UTC"),(n||(n={})).TimeZoneNotRecognised="TimeZoneNotRecognised"
const o={[n.TimeZoneNotRecognised]:"Timezone identifier has not been recognised."}
class l extends Error{constructor(e,t){super(Object(r.g)(o[e],t)),this.declaredRootClass="esri.arcade.arcadedate.dateerror",Error.captureStackTrace&&Error.captureStackTrace(this,l)}}class c{constructor(e){this._date=e,this.declaredRootClass="esri.arcade.arcadedate"}static fromParts(e=0,t=1,i=1,n=0,r=0,a=0,o=0,l){if(isNaN(e)||isNaN(t)||isNaN(i)||isNaN(n)||isNaN(r)||isNaN(a)||isNaN(o))return null
let h=0
const d=s.DateTime.local(e,t).daysInMonth
i<1&&(h=i-1,i=1),i>d&&(h=i-d,i=d)
let f=0
t>12?(f=t-12,t=12):t<1&&(f=t-1,t=1)
let _=0
r>59?(_=r-59,r=59):r<0&&(_=r,r=0)
let m=0
a>59?(m=a-59,a=59):a<0&&(m=a,a=0)
let p=0
o>999?(p=o-999,o=999):o<0&&(p=o,o=0)
let g=s.DateTime.fromObject({day:i,year:e,month:t,hour:n,minute:r,second:a,millisecond:o},{zone:u(l)})
return 0!==f&&(g=g.plus({months:f})),0!==h&&(g=g.plus({days:h})),0!==_&&(g=g.plus({minutes:_})),0!==m&&(g=g.plus({seconds:m})),0!==p&&(g=g.plus({milliseconds:p})),new c(g)}static get systemTimeZoneCanonicalName(){var e
return null!=(e=Intl.DateTimeFormat().resolvedOptions().timeZone)?e:"system"}static arcadeDateAndZoneToArcadeDate(e,t){const i=u(t)
return e.isUnknownTimeZone||i===a.instance?c.fromParts(e.year,e.monthJS+1,e.day,e.hour,e.minute,e.second,e.millisecond,i):new c(e._date.setZone(t))}static dateJSToArcadeDate(e){return new c(s.DateTime.fromJSDate(e,{zone:"system"}))}static dateJSAndZoneToArcadeDate(e,t="system"){return new c(s.DateTime.fromJSDate(e,{zone:t}))}static unknownEpochToArcadeDate(e){return new c(s.DateTime.fromMillis(e,{zone:a.instance}))}static unknownDateJSToArcadeDate(e){return new c(s.DateTime.fromMillis(e.getTime(),{zone:a.instance}))}static epochToArcadeDate(e,t="system"){return new c(s.DateTime.fromMillis(e,{zone:t}))}static dateTimeToArcadeDate(e){return new c(e)}changeTimeZone(e){const t=u(e)
return c.dateTimeToArcadeDate(this._date.setZone(t))}static dateTimeAndZoneToArcadeDate(e,t){const i=u(t)
return e.zone===a.instance||i===a.instance?c.fromParts(e.year,e.month,e.day,e.hour,e.minute,e.second,e.millisecond,i):new c(e.setZone(i))}static nowToArcadeDate(e){return new c(s.DateTime.fromJSDate(new Date,{zone:e}))}static nowUTCToArcadeDate(){return new c(s.DateTime.utc())}get isSystem(){return"system"===this.timeZone||this.timeZone===c.systemTimeZoneCanonicalName}equals(e){return this.isSystem&&e.isSystem?this.toNumber()===e.toNumber():this.isUnknownTimeZone===e.isUnknownTimeZone&&this._date.equals(e._date)}get isUnknownTimeZone(){return this._date.zone===a.instance}get isValid(){return this._date.isValid}get hour(){return this._date.hour}get second(){return this._date.second}get day(){return this._date.day}get dayOfWeekISO(){return this._date.weekday}get dayOfWeekJS(){let e=this._date.weekday
return e>6&&(e=0),e}get millisecond(){return this._date.millisecond}get monthISO(){return this._date.month}get weekISO(){return this._date.weekNumber}get yearISO(){return this._date.weekYear}get monthJS(){return this._date.month-1}get year(){return this._date.year}get minute(){return this._date.minute}get zone(){return this._date.zone}get timeZoneOffset(){return this.isUnknownTimeZone?0:this._date.offset}get timeZone(){if(this.isUnknownTimeZone)return"unknown"
if("system"===this._date.zone.type)return"system"
const e=this.zone
return"fixed"===e.type?0===e.fixed?"utc":e.formatOffset(0,"short"):e.name}stringify(){return JSON.stringify(this.toJSDate())}plus(e){return new c(this._date.plus(e))}diff(e,t="milliseconds"){return this._date.diff(e._date,t)[t]}toISOString(e){return e?this._date.toISO({suppressMilliseconds:!0,includeOffset:!this.isUnknownTimeZone}):this._date.toISO({includeOffset:!this.isUnknownTimeZone})}toFormat(e,t){return this._date.toFormat(e,t)}toJSDate(){return this._date.toJSDate()}toSQLString(){return"timestamp '"+this._date.toFormat("yyyy-LL-dd HH:mm:ss")+"'"}toDateTime(){return this._date}toNumber(){return this._date.toMillis()}getTime(){return this._date.toMillis()}toUTC(){return new c(this._date.toUTC())}toLocal(){return new c(this._date.toLocal())}toString(){return this.toISOString(!0)}}function u(e){if(e instanceof s.Zone)return e
if("system"===e.toLowerCase())return"system"
if("utc"===e.toLowerCase())return"utc"
if("unknown"===e.toLowerCase())return a.instance
if(/^[\+\-]?[0-9]{1,2}([:][0-9]{2})?$/.test(e)){const t=s.FixedOffsetZone.parseSpecifier("UTC"+(e.startsWith("+")||e.startsWith("-")?"":"+")+e)
if(t)return t}const t=s.IANAZone.create(e)
if(!t.isValid)throw new l(n.TimeZoneNotRecognised)
return t}},1484:function(e,t,i){"use strict"
i.d(t,"a",(function(){return Ie})),i.d(t,"b",(function(){return Pe}))
var n=i(234),r=i(983),s=i(1080)
class a{static local(){return null===a.instance&&(a.instance=new a),a.instance}execute(e,t,i,n,r){return new o(e,t,i)}}a.instance=null
class o{constructor(e,t,i){this._inputGeometries=e,this._angleTolerance=void 0!==t.angleTolerance?t.angleTolerance:120,this._maxCosAngle=Math.cos((1-Math.abs(this._angleTolerance)/180)*Math.PI)}next(){let e=this._inputGeometries.next()
for(;e;){if(Object(r.g)(e)){this._isClosed=!0
const t=Object(n.a)(e)
return this._processMultipath(t.rings),t}if(Object(r.h)(e)){this._isClosed=!1
const t=Object(n.a)(e)
return this._processMultipath(t.paths),t}if(Object(r.d)(e)){if(this._maxCosAngle)return e
this._isClosed=!0
const t=[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]
return this._processPath(t),{rings:[t]}}e=this._inputGeometries.next()}return null}_processMultipath(e){if(e)for(const t of e)this._processPath(t)}_processPath(e){if(e){let t,i,n,r,a,o,l=e.length,c=e[0]
this._isClosed&&++l
for(let u=1;u<l;++u){let h
h=this._isClosed&&u===l-1?e[0]:e[u]
const d=h[0]-c[0],f=h[1]-c[1],_=Math.sqrt(d*d+f*f)
u>1&&_>0&&n>0&&(t*d+i*f)/_/n<=this._maxCosAngle&&Object(s.j)(c,1),1===u&&(r=d,a=f,o=_),_>0&&(c=h,t=d,i=f,n=_)}this._isClosed&&n>0&&o>0&&(t*r+i*a)/o/n<=this._maxCosAngle&&Object(s.j)(e[0],1)}}}var l=i(1030)
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
let s=0,a=!0,o=0
for(;o<r;){const r=this.calculateSegLength(t,o)
if(0!==r){if(a){if(s+r>i){const l=(i-s)/r
let c=1,u=!1
s+r>=n&&(c=(n-s)/r,u=!0)
const h=this.cut(t,o,l,c)
if(h&&this.addSegment(e,h,a),u)break
a=!1}}else{if(s+r>n){const i=this.cut(t,o,0,(n-s)/r)
i&&this.addSegment(e,i,a)
break}this.addSegment(e,[t[o],t[o+1]],a)}s+=r,++o}else++o}return!0}getCIMPointAlong(e,t){const i=e?e.length-1:0
let n=0,r=-1
for(;r<i;){++r
const i=this.calculateSegLength(e,r)
if(0!==i){if(n+i>t){const s=(t-n)/i
return this.getCoord2D(e[r],e[r+1],s)}n+=i}}return null}isEmpty(e,t){if(!e||e.length<=1)return!0
const i=e?e.length-1:0
let n=-1
for(;n<i;){if(++n,e[n+1][0]!==e[n][0]||e[n+1][1]!==e[n][1])return!1
if(t&&e[n+1][2]!==e[n][2])return!1}return!0}offset(e,t,i,n,r){if(!e||e.length<2)return null
let s=0,a=e[s++],o=s
for(;s<e.length;){const t=e[s]
t[0]===a[0]&&t[1]===a[1]||(s!==o&&(e[o]=e[s]),a=e[o++]),s++}const c=e[0][0]===e[o-1][0]&&e[0][1]===e[o-1][1]
if(c&&--o,o<(c?3:2))return null
const u=[]
a=c?e[o-1]:null
let h=e[0]
for(let r=0;r<o;r++){const s=r===o-1?c?e[0]:null:e[r+1]
if(a)if(s){const e=[s[0]-h[0],s[1]-h[1]]
this.normalize(e)
const r=[h[0]-a[0],h[1]-a[1]]
this.normalize(r)
const o=r[0]*e[1]-r[1]*e[0],c=r[0]*e[0]+r[1]*e[1]
if(0===o&&1===c){h=s
continue}if(o>=0==t<=0){if(c<1){const i=[e[0]-r[0],e[1]-r[1]]
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
for(let a=1;a<i;a++,s+=n){const i=[r[1]*(1-s)+e[1]*s,-r[0]*(1-s)-e[0]*s]
this.normalize(i),u.push([h[0]+i[0]*t,h[1]+i[1]*t])}}u.push([h[0]+e[1]*t,h[1]-e[0]*t])}break
case l.m.Square:default:if(o<0)u.push([h[0]+(r[1]+r[0])*t,h[1]+(r[1]-r[0])*t]),u.push([h[0]+(e[1]-e[0])*t,h[1]-(e[0]+e[1])*t])
else{const i=Math.sqrt((1+Math.abs(c))/2),n=[e[0]-r[0],e[1]-r[1]]
this.normalize(n)
const s=t/i
u.push([h[0]-n[0]*s,h[1]-n[1]*s])}}}else{const e=[h[0]-a[0],h[1]-a[1]]
this.normalize(e),u.push([h[0]+e[1]*t,h[1]-e[0]*t])}else{const e=[s[0]-h[0],s[1]-h[1]]
this.normalize(e),u.push([h[0]+e[1]*t,h[1]-e[0]*t])}a=h,h=s}return u.length<(c?3:2)?null:(c&&u.push([u[0][0],u[0][1]]),u)}}const h=l.j.OpenEnded
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
const a=this._constructOffset(r,-s)
if(!a)return null
const o=this._constructOffset(r,s)
if(!o)return null
const l=this._constructArrowBasePoint(a,-s/2)
if(!l)return null
const u=this._constructArrowBasePoint(o,s/2)
if(!u)return null
const h=e[e.length-1]
t||(this._makeControlPoint(o,!0),this._makeControlPoint(a,!0))
const d=new c
return d.addPath(o,!0),d.lineTo(u),this._makeControlPoint(d.path()),d.lineTo(h),this._makeControlPoint(d.path()),d.lineTo(l),this._makeControlPoint(d.path()),d.addPath(a,!1),t?{paths:[d.path()]}:(d.close(),{rings:[d.path()]})}_constructCrossedArrow(e){const t=this._curveHelper.calculatePathLength(e)
let i=this._width
t<3.732050807568877*i&&(i=t/3.732050807568877)
const n=this._curveHelper.getSubCurve(e,0,t-2.732050807568877*i)
if(!n)return null
const r=i/2
if(this._curveHelper.isEmpty(n,!1))return null
const s=this._constructOffset(n,r)
if(!s)return null
const a=this._constructOffset(n,-r)
if(!a)return null
const o=this._curveHelper.getSubCurve(e,0,t-i)
if(!o)return null
if(this._curveHelper.isEmpty(o,!1))return null
const l=this._constructOffset(o,r)
if(!l)return null
const u=this._constructOffset(o,-r)
if(!u)return null
const h=l[l.length-1],d=this._constructArrowBasePoint(l,r/2)
if(!d)return null
const f=u[u.length-1],_=this._constructArrowBasePoint(u,-r/2)
if(!_)return null
const m=e[e.length-1]
this._makeControlPoint(s,!1),this._makeControlPoint(a,!1)
const p=new c
return p.addPath(s,!0),this._makeControlPoint(p.path()),p.lineTo(f),p.lineTo(_),this._makeControlPoint(p.path()),p.lineTo(m),this._makeControlPoint(p.path()),p.lineTo(d),this._makeControlPoint(p.path()),p.lineTo(h),this._makeControlPoint(p.path()),p.addPath(a,!1),{paths:[p.path()]}}_constructOffset(e,t){return this._curveHelper.offset(e,t,l.m.Rounded,4,this._offsetFlattenError)}_constructArrowBasePoint(e,t){if(!e||e.length<2)return null
const i=e[e.length-2],n=e[e.length-1],r=[n[0]-i[0],n[1]-i[1]]
return this._curveHelper.normalize(r),[n[0]+r[1]*t,n[1]-r[0]*t]}_makeControlPoint(e,t=!1){Object(s.j)(t?e[0]:e[e.length-1],1)}}i(982)
var _,m,p=i(23),g=i(1326),b=i(769)
class v{static local(){return null===v.instance&&(v.instance=new v),v.instance}execute(e,t,i,n,r){return new x(e,t,i,n,r)}}v.instance=null
class x{constructor(e,t,i,n,r){this._inputGeometries=e,this._tileKey=n,this._geometryEngine=r,this._curveHelper=new u,this._size=(void 0!==t.size?t.size:1)*i,this._offsetFlattenError=.03*i}next(){let e
for(;e=this._inputGeometries.next();){if(0===this._size)return e
if(Object(r.d)(e))if(this._size>0){const t=[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]],i=this._curveHelper.offset(t,this._size,l.m.Rounded,4,this._offsetFlattenError)
if(i)return{rings:[i]}}else if(this._size<0&&Math.min(e.xmax-e.xmin,e.ymax-e.ymin)+2*this._size>0)return{xmin:e.xmin-this._size,xmax:e.xmax+this._size,ymin:e.ymin-this._size,ymax:e.ymax+this._size}
const t=this._geometryEngine
if(Object(p.k)(t))return null
let i=e
if((!Object(r.g)(e)||!this._tileKey||(i=Object(g.b)(e,Math.abs(this._size)+1),i&&i.rings&&0!==i.rings.length))&&(!Object(r.h)(e)||!this._tileKey||(i=Object(g.c)(e,Math.abs(this._size)+1),i&&i.paths&&0!==i.paths.length)))return t.buffer(b.default.WebMercator,i,this._size,1)}return null}}class y{static local(){return null===y.instance&&(y.instance=new y),y.instance}execute(e,t,i,n,r){return new O(e,t,i)}}y.instance=null
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
let a
a=s>0?this._rightPerp(r):this._leftPerp(r)
const o=Math.abs(s)/2,l=[]
l.push([t[0]+(a[0]-r[0])*o,t[1]+(a[1]-r[1])*o]),l.push(t),l.push(i),l.push([i[0]+(a[0]+r[0])*o,i[1]+(a[1]+r[1])*o]),e.push(l)}_addBezier2(e,t,i,n,r){if(0==r--)return void e.push(n)
const s=this._mid(t,i),a=this._mid(i,n),o=this._mid(s,a)
this._addBezier2(e,t,s,o,r),this._addBezier2(e,o,a,n,r)}_addBezier3(e,t,i,n,r,s){if(0==s--)return void e.push(r)
const a=this._mid(t,i),o=this._mid(i,n),l=this._mid(n,r),c=this._mid(a,o),u=this._mid(o,l),h=this._mid(c,u)
this._addBezier3(e,t,a,c,h,s),this._addBezier3(e,h,u,l,r,s)}_add90DegArc(e,t,i,n,r){const s=null!=r?r:this._crossProduct(this._sub(i,t),this._sub(n,t))>0,a=this._mid(t,i),o=this._sub(a,t)
s?this._leftPerpendicular(o):this._rightPerpendicular(o),a[0]+=o[0],a[1]+=o[1],this._addBezier3(e,t,this._mix(t,.33333,a,.66667),this._mix(i,.33333,a,.66667),i,4)}_addArrow(e,t,i){const n=t[0],r=t[1],s=t[t.length-1],a=this._sub(n,r)
this._normalize(a)
const o=this._crossProduct(a,this._sub(s,r)),l=.5*o,c=this._leftPerp(a),u=[s[0]-c[0]*o,s[1]-c[1]*o],h=t.length-1,d=[]
d.push(i?[-c[0],-c[1]]:c)
let f=[-a[0],-a[1]]
for(let e=1;e<h-1;e++){const i=this._sub(t[e+1],t[e])
this._normalize(i)
const n=this._dotProduct(i,f),r=this._crossProduct(i,f),s=Math.sqrt((1+n)/2),a=this._sub(i,f)
this._normalize(a),a[0]/=s,a[1]/=s,d.push(r<0?[-a[0],-a[1]]:a),f=i}d.push(this._rightPerp(f))
for(let i=d.length-1;i>0;i--)e.push([t[i][0]+d[i][0]*l,t[i][1]+d[i][1]*l])
e.push([u[0]+d[0][0]*l,u[1]+d[0][1]*l]),e.push([u[0]+d[0][0]*o,u[1]+d[0][1]*o]),e.push(n),e.push([u[0]-d[0][0]*o,u[1]-d[0][1]*o]),e.push([u[0]-d[0][0]*l,u[1]-d[0][1]*l])
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
let a
a=this._crossProduct(s,this._sub(n,e))>0?this._rightPerp(a):this._leftPerp(s)
const o=[]
o.push([e[0]+(a[0]-s[0])/3,e[1]+(a[1]-s[1])/3]),o.push(e),o.push(r),o.push([r[0]+(a[0]+s[0])/3,r[1]+(a[1]+s[1])/3]),t.push(o)
break}case l.k.DoublePerpendicular:{const e=this._cp2(i,0,-1),r=this._cp3(i,e,.5,3),s=this._mid(n,e),a=this._sub(s,r)
this._normalize(a)
const o=this._crossProduct(a,this._sub(n,r))
this._leftPerpendicular(a)
const l=[]
l.push(n),l.push([r[0]+a[0]*o,r[1]+a[1]*o]),t.push(l)
const c=[]
c.push([r[0]-a[0]*o,r[1]-a[1]*o]),c.push(e),t.push(c)
break}case l.k.OppositeToFirstSegment:{const e=this._cp2(i,0,-1),r=this._cp3(i,e,.5,3),s=this._mid(n,e),a=this._sub(s,r)
this._normalize(a)
const o=this._crossProduct(a,this._sub(n,r))
this._leftPerpendicular(a)
const l=[]
l.push([r[0]+a[0]*o,r[1]+a[1]*o]),l.push([r[0]-a[0]*o,r[1]-a[1]*o]),t.push(l)
break}case l.k.TriplePerpendicular:{const e=this._cp2(i,0,-1),r=this._cp3(i,e,.5,4),s=this._mid(n,e),a=this._sub(s,r)
this._normalize(a)
const o=this._crossProduct(a,this._sub(n,r))
this._leftPerpendicular(a)
const l=[]
l.push([r[0]+a[0]*o*.8,r[1]+a[1]*o*.8]),l.push([s[0]+.8*(n[0]-s[0]),s[1]+.8*(n[1]-s[1])]),t.push(l),t.push([r,s])
const c=[]
c.push([r[0]-a[0]*o*.8,r[1]-a[1]*o*.8]),c.push([s[0]+.8*(e[0]-s[0]),s[1]+.8*(e[1]-s[1])]),t.push(c)
break}case l.k.HalfCircleFirstSegment:{const e=this._cp2(i,0,-1),r=this._cp3(i,e,.5,4),s=this._mid(n,e)
let a=this._sub(e,n)
const o=Math.cos(Math.PI/18),l=Math.sin(Math.PI/18),c=Math.sqrt((1+o)/2),u=Math.sqrt((1-o)/2),h=[]
let d
this._crossProduct(a,this._sub(r,n))>0?(h.push(n),a=this._sub(n,s),d=e):(h.push(e),a=this._sub(e,s),d=n),this._rotateDirect(a,c,u),a[0]/=c,a[1]/=c
for(let e=1;e<=18;e++)h.push(this._add(s,a)),this._rotateDirect(a,o,l)
h.push(d),t.push(h)
break}case l.k.HalfCircleSecondSegment:{const e=this._cp2(i,0,-1),r=this._cp3(i,e,1,-1)
let s=this._sub(n,e)
this._normalize(s)
const a=this._crossProduct(s,this._sub(r,e))/2
this._leftPerpendicular(s)
const o=[e[0]+s[0]*a,e[1]+s[1]*a]
s=this._sub(e,o)
const l=Math.cos(Math.PI/18)
let c=Math.sin(Math.PI/18)
a>0&&(c=-c)
const u=[e]
for(let e=1;e<=18;e++)this._rotateDirect(s,l,c),u.push(this._add(o,s))
t.push(u)
break}case l.k.HalfCircleExtended:{const r=this._cp2(i,0,-2),s=this._cp3(i,r,1,-1)
let a
if(e>=4)a=i[3]
else{const e=this._sub(n,r)
a=this._add(s,e)}const o=this._dist(r,s)/2/.75,l=this._sub(r,n)
this._normalize(l,o)
const c=this._sub(s,a)
this._normalize(c,o)
const u=[a,s]
t.push(u)
const h=[this._clone(s)]
this._addBezier3(h,s,this._add(s,c),this._add(r,l),r,4),h.push(n),t.push(h)
break}case l.k.OpenCircle:{const e=this._cp2(i,-2,0),r=this._sub(e,n),s=Math.cos(Math.PI/18),a=-Math.sin(Math.PI/18),o=[e]
for(let e=1;e<=33;e++)this._rotateDirect(r,s,a),o.push(this._add(n,r))
t.push(o)
break}case l.k.CoverageEdgesWithTicks:{const r=this._cp2(i,0,-1)
let s,a
if(e>=3)s=i[2]
else{const e=this._sub(r,n),t=this._leftPerp(e)
s=[n[0]+t[0]-.25*e[0],n[1]+t[1]-.25*e[1]]}if(e>=4)a=i[3]
else{const e=this._mid(n,r),t=this._sub(n,r)
this._normalize(t),this._leftPerpendicular(t)
const i=this._crossProduct(t,this._sub(s,e))
this._rightPerpendicular(t),a=[s[0]+t[0]*i*2,s[1]+t[1]*i*2]}const o=this._sub(r,n)
let l,c
l=this._crossProduct(o,this._sub(s,n))>0?this._rightPerp(o):this._leftPerp(o),c=[],c.push(s),c.push(n),c.push([n[0]+(l[0]-o[0])/3,n[1]+(l[1]-o[1])/3]),t.push(c),l=this._crossProduct(o,this._sub(a,r))>0?this._rightPerp(l):this._leftPerp(o),c=[],c.push([r[0]+(l[0]+o[0])/3,r[1]+(l[1]+o[1])/3]),c.push(r),c.push(a),t.push(c)
break}case l.k.GapExtentWithDoubleTicks:{const r=this._cp2(i,0,2),s=this._cp3(i,r,0,1)
let a
if(e>=4)a=i[3]
else{const e=this._sub(r,n)
a=this._add(s,e)}this._addAngledTicks(t,n,r,this._mid(s,a)),this._addAngledTicks(t,s,a,this._mid(n,r))
break}case l.k.GapExtentMidline:{const r=this._cp2(i,2,0),s=this._cp3(i,r,0,1)
let a
if(e>=4)a=i[3]
else{const e=this._sub(r,n)
a=this._add(s,e)}const o=[]
o.push(this._mid(n,s)),o.push(this._mid(r,a)),t.push(o)
break}case l.k.Chevron:{const r=this._cp2(i,-1,-1)
let s
if(e>=3)s=i[2]
else{const e=this._sub(r,n)
this._leftPerpendicular(e),s=this._add(n,e)}t.push([r,this._makeCtrlPt(n),s])
break}case l.k.PerpendicularWithArc:{const e=this._cp2(i,0,-2),r=this._cp3(i,e,.5,-1)
let s=this._sub(e,n)
const a=this._norm(s)
s[0]/=a,s[1]/=a
const o=this._crossProduct(s,this._sub(r,n))
let l=this._dotProduct(s,this._sub(r,n))
l<.05*a?l=.05*a:l>.95*a&&(l=.95*a)
const c=[n[0]+s[0]*l,n[1]+s[1]*l]
this._leftPerpendicular(s)
let u=[]
u.push([c[0]-s[0]*o,c[1]-s[1]*o]),u.push([c[0]+s[0]*o,c[1]+s[1]*o]),t.push(u)
const h=[e[0]+s[0]*o,e[1]+s[1]*o]
s=this._sub(e,h)
const d=Math.cos(Math.PI/18)
let f=Math.sin(Math.PI/18)
o<0&&(f=-f),u=[n,e]
for(let e=1;e<=9;e++)this._rotateDirect(s,d,f),u.push(this._add(h,s))
t.push(u)
break}case l.k.ClosedHalfCircle:{const e=this._cp2(i,2,0),r=this._mid(n,e),s=this._sub(e,r),a=Math.cos(Math.PI/18),o=Math.sin(Math.PI/18),l=[n,e]
for(let e=1;e<=18;e++)this._rotateDirect(s,a,o),l.push(this._add(r,s))
t.push(l)
break}case l.k.TripleParallelExtended:{const e=this._cp2(i,0,-2),r=this._cp3(i,e,1,-2),a=this._mid(n,e),o=this._sub(r,e)
this._normalize(o)
const l=Math.abs(this._crossProduct(o,this._sub(a,e)))/2,c=this._dist(e,r),u=[e,n]
u.push([n[0]+o[0]*c*.5,n[1]+o[1]*c*.5]),t.push(u)
const h=[]
h.push([a[0]-o[0]*l,a[1]-o[1]*l]),h.push([a[0]+o[0]*c*.375,a[1]+o[1]*c*.375]),Object(s.j)(h[h.length-1],1),h.push([a[0]+o[0]*c*.75,a[1]+o[1]*c*.75]),t.push(h)
const d=[e,r]
t.push(d)
break}case l.k.ParallelWithTicks:{const e=this._cp2(i,3,0),r=this._cp3(i,e,.5,-1),s=this._sub(r,e)
this._normalize(s)
const a=this._crossProduct(s,this._sub(r,n))
this._leftPerpendicular(s),this._addAngledTicks(t,n,e,r),this._addAngledTicks(t,this._mix(n,1,s,a),this._mix(e,1,s,a),this._mid(n,e))
break}case l.k.Parallel:{const e=this._cp2(i,3,0),r=this._cp3(i,e,.5,-1),s=this._sub(e,n)
this._normalize(s)
const a=this._leftPerp(s),o=this._crossProduct(s,this._sub(r,n))
let l=[n,e]
t.push(l),l=[],l.push([n[0]+a[0]*o,n[1]+a[1]*o]),l.push([e[0]+a[0]*o,e[1]+a[1]*o]),t.push(l)
break}case l.k.PerpendicularToFirstSegment:{const e=this._cp2(i,3,0),r=this._cp3(i,e,.5,-1),s=this._mid(n,e),a=this._sub(e,n)
this._normalize(a)
const o=this._crossProduct(a,this._sub(r,n))
this._leftPerpendicular(a)
const l=[]
l.push([s[0]-a[0]*o*.25,s[1]-a[1]*o*.25]),l.push([s[0]+a[0]*o*1.25,s[1]+a[1]*o*1.25]),t.push(l)
break}case l.k.ParallelOffset:{const e=this._cp2(i,3,0),r=this._cp3(i,e,.5,-1),s=this._sub(e,n)
this._normalize(s)
const a=this._crossProduct(s,this._sub(r,n))
this._leftPerpendicular(s)
const o=[]
o.push([n[0]-s[0]*a,n[1]-s[1]*a]),o.push([e[0]-s[0]*a,e[1]-s[1]*a]),t.push(o)
const l=[]
l.push([n[0]+s[0]*a,n[1]+s[1]*a]),l.push([e[0]+s[0]*a,e[1]+s[1]*a]),t.push(l)
break}case l.k.OffsetOpposite:{const e=this._cp2(i,3,0),r=this._cp3(i,e,.5,-1),s=this._sub(e,n)
this._normalize(s)
const a=this._crossProduct(s,this._sub(r,n))
this._leftPerpendicular(s)
const o=[]
o.push([n[0]-s[0]*a,n[1]-s[1]*a]),o.push([e[0]-s[0]*a,e[1]-s[1]*a]),t.push(o)
break}case l.k.OffsetSame:{const e=this._cp2(i,3,0),r=this._cp3(i,e,.5,-1),s=this._sub(e,n)
this._normalize(s)
const a=this._crossProduct(s,this._sub(r,n))
this._leftPerpendicular(s)
const o=[]
o.push([n[0]+s[0]*a,n[1]+s[1]*a]),o.push([e[0]+s[0]*a,e[1]+s[1]*a]),t.push(o)
break}case l.k.CircleWithArc:{let r=this._cp2(i,3,0)
const a=this._cp3(i,r,.5,-1)
let o,l
if(e>=4)o=i[3],l=this._crossProduct(this._sub(o,r),this._sub(a,r))>0
else{o=r,l=this._crossProduct(this._sub(o,n),this._sub(a,n))>0
const e=24*this._geomUnitsPerPoint,t=this._sub(o,n)
this._normalize(t,e)
const i=Math.sqrt(2)/2
this._rotateDirect(t,i,l?i:-i),r=this._add(n,t)}const c=this._sub(r,n),u=Math.cos(Math.PI/18),h=Math.sin(Math.PI/18),d=[r]
for(let e=1;e<=36;e++)this._rotateDirect(c,u,h),d.push(this._add(n,c))
this._add90DegArc(d,r,o,a,l),Object(s.j)(d[d.length-8],1),t.push(d)
break}case l.k.DoubleJog:{let r,s,a=this._cp2(i,-3,1)
if(r=e>=3?i[2]:this._add(n,this._sub(n,a)),e>=4)s=i[3]
else{const e=n
n=a,s=r
const t=this._dist(n,e),i=this._dist(s,e)
let o=30*this._geomUnitsPerPoint;.5*t<o&&(o=.5*t),.5*i<o&&(o=.5*i),a=this._mix(n,o/t,e,(t-o)/t),r=this._mix(s,o/i,e,(i-o)/i)}const o=this._mid(n,a),l=this._mid(s,r),c=this._dist(n,a),u=this._dist(r,s)
let h=Math.min(c,u)/8
h=Math.min(h,24*this._geomUnitsPerPoint)
const d=Math.cos(Math.PI/4)
let f=this._sub(n,a)
this._normalize(f,h),this._crossProduct(f,this._sub(s,a))>0?this._rotateDirect(f,d,-d):this._rotateDirect(f,d,d)
let _=[]
_.push(a),_.push(this._add(o,f)),_.push(this._sub(o,f)),_.push(n),t.push(_),f=this._sub(s,r),this._normalize(f,h),this._crossProduct(f,this._sub(n,r))<0?this._rotateDirect(f,d,d):this._rotateDirect(f,d,-d),_=[],_.push(r),_.push(this._add(l,f)),_.push(this._sub(l,f)),_.push(s),t.push(_)
break}case l.k.PerpendicularOffset:{const e=this._cp2(i,-4,1),r=this._cp3(i,e,.882353,-1.94),s=this._sub(r,e)
this._crossProduct(s,this._sub(n,e))>0?this._rightPerpendicular(s):this._leftPerpendicular(s)
const a=[s[0]/8,s[1]/8],o=this._sub(this._mid(e,r),a)
t.push([o,n])
break}case l.k.LineExcludingLastSegment:{const e=this._arrowPath(i),n=[]
let r=e.length-2
for(;r--;)n.push(e[r])
t.push(n)
break}case l.k.MultivertexArrow:{const e=this._arrowPath(i),n=[]
this._addArrow(n,e,!1),t.push(n)
break}case l.k.CrossedArrow:{const e=this._arrowPath(i),n=[]
this._addArrow(n,e,!0),t.push(n)
break}case l.k.ChevronArrow:{const[e,r]=this._arrowLastSeg(i),s=10*this._geomUnitsPerPoint,a=this._sub(n,e)
this._normalize(a)
const o=this._crossProduct(a,this._sub(r,e)),l=this._leftPerp(a),c=[r[0]-l[0]*o*2,r[1]-l[1]*o*2],u=[]
u.push([r[0]+a[0]*s,r[1]+a[1]*s]),u.push(n),u.push([c[0]+a[0]*s,c[1]+a[1]*s]),t.push(u)
break}case l.k.ChevronArrowOffset:{const[e,r]=this._arrowLastSeg(i),s=this._sub(n,e)
this._normalize(s)
const a=this._crossProduct(s,this._sub(r,e))
this._leftPerpendicular(s)
const o=[r[0]-s[0]*a,r[1]-s[1]*a],l=[]
l.push([o[0]+s[0]*a*.5,o[1]+s[1]*a*.5]),l.push(this._mid(o,n)),l.push([o[0]-s[0]*a*.5,o[1]-s[1]*a*.5]),t.push(l)
break}case l.k.PartialFirstSegment:{const[e,r]=this._arrowLastSeg(i),s=this._sub(n,e)
this._normalize(s)
const a=this._crossProduct(s,this._sub(r,e))
this._leftPerpendicular(s)
const o=[r[0]-s[0]*a,r[1]-s[1]*a]
t.push([e,o])
break}case l.k.Arch:{const e=this._cp2(i,0,-1),r=this._cp3(i,e,.5,1),s=this._sub(n,e),a=this._mix(r,1,s,.55),o=this._mix(r,1,s,-.55),l=[n]
this._addBezier2(l,n,a,r,4),this._addBezier2(l,r,o,e,4),t.push(l)
break}case l.k.CurvedParallelTicks:{const e=this._cp2(i,-4,1),r=this._cp3(i,e,.882353,-1.94),s=this._sub(r,e)
this._crossProduct(s,this._sub(n,e))>0?this._rightPerpendicular(s):this._leftPerpendicular(s)
const a=[s[0]/8,s[1]/8],o=this._sub(this._mid(e,r),a),l=this._sub(this._mix(e,.75,r,.25),a),c=this._sub(this._mix(e,.25,r,.75),a),u=[e]
this._addBezier2(u,e,l,o,3),this._addBezier2(u,o,c,r,3),t.push(u)
for(let e=0;e<8;e++){const i=u[2*e+1],n=[this._clone(i)]
n.push(this._add(i,[s[0]/4,s[1]/4])),t.push(n)}break}case l.k.Arc90Degrees:{const e=this._cp2(i,0,-1),r=this._cp3(i,e,.5,1),s=[e]
this._add90DegArc(s,e,n,r),t.push(s)
break}case l.k.FullGeometry:default:t.push(i)}}return t}}class T{static local(){return null===T.instance&&(T.instance=new T),T.instance}execute(e,t,i,n,r){return new S(e,t,i)}}T.instance=null
class S extends s.a{constructor(e,t,i){super(e,!0,!0),this._curveHelper=new u,this._beginCut=(void 0!==t.beginCut?t.beginCut:1)*i,this._endCut=(void 0!==t.endCut?t.endCut:1)*i,this._middleCut=(void 0!==t.middleCut?t.middleCut:0)*i,this._invert=void 0!==t.invert&&t.invert,this._beginCut<0&&(this._beginCut=0),this._endCut<0&&(this._endCut=0),this._middleCut<0&&(this._middleCut=0)}processPath(e){const t=this._beginCut,i=this._endCut,n=this._middleCut,r=this._curveHelper.calculatePathLength(e),s=[]
if(this._invert)if(0===t&&0===i&&0===n);else if(t+i+n>=r)s.push(e)
else{let a=this._curveHelper.getSubCurve(e,0,t)
a&&s.push(a),a=this._curveHelper.getSubCurve(e,.5*(r-n),.5*(r+n)),a&&s.push(a),a=this._curveHelper.getSubCurve(e,r-i,i),a&&s.push(a)}else if(0===t&&0===i&&0===n)s.push(e)
else if(t+i+n>=r);else if(0===n){const n=this._curveHelper.getSubCurve(e,t,r-i)
n&&s.push(n)}else{let a=this._curveHelper.getSubCurve(e,t,.5*(r-n))
a&&s.push(a),a=this._curveHelper.getSubCurve(e,.5*(r+n),r-i),a&&s.push(a)}return 0===s.length?null:{paths:s}}}class w{constructor(){this._values=[],this.extPtGap=0,this.ctrlPtGap=0,this._length=0,this._currentValue=0}isEmpty(){return 0===this._values.length}size(){return this._values.length}init(e,t,i=!0){if(this._setEmpty(),!e||0===e.length)return!1
for(let t=0;t<e.length;t++){let n=Math.abs(e[t])
i&&n<1e-7&&(n=1e-7),this._values.push(n),this._length+=n}return t&&1&e.length&&(this._length*=2),0!==this._length&&(this.ctrlPtGap=this.extPtGap=0,this._currentValue=-1,!0)}scale(e){const t=this._values?this._values.length:0
for(let i=0;i<t;++i)this._values[i]*=e
this._length*=e,this.extPtGap*=e,this.ctrlPtGap*=e}addValue(e){this._length+=e,this._values.push(e)}firstValue(){return this._values[0]}lastValue(){return this._values[this._values.length-1]}nextValue(){return this._currentValue++,this._currentValue===this._values.length&&(this._currentValue=0),this._values[this._currentValue]}reset(){this._currentValue=-1}length(){return this._length}_setEmpty(){this.extPtGap=this.ctrlPtGap=this._length=0,this._currentValue=-1,this._values.length=0}}class E{constructor(){this.pt=null,this.ca=0,this.sa=0}}(m=_||(_={}))[m.FAIL=0]="FAIL",m[m.END=1]="END",m[m.CONTINUE=2]="CONTINUE"
class M{constructor(){this.reset()}reset(){this.segment=-1,this.segmentLength=0,this.abscissa=0,this.isPathEnd=!1,this.isPartEnd=!1}isValid(){return-1!==this.segment}copyTo(e){e.segment=this.segment,e.segmentLength=this.segmentLength,e.abscissa=this.abscissa,e.isPathEnd=this.isPathEnd,e.isPartEnd=this.isPartEnd}}class C extends u{constructor(e=0,t=!1){super(e,t),this._tolerance=.03,this._currentPosition=new M}updateTolerance(e){this._tolerance=.03*e}init(e,t,i=!0){return i?(this._patternLength=t.length(),this._partExtPtGap=t.extPtGap,this._partCtrlPtGap=t.ctrlPtGap):(this._patternLength=0,this._partExtPtGap=0,this._partCtrlPtGap=0),this._currentPosition.reset(),this._partSegCount=0,this._path=e,this._seg=-1,this._setPosAtNextPart()}curPositionIsValid(){return this._currentPosition.isValid()}nextPosition(e,t=_.FAIL){const i=new M
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
return!0}_hasNextSegment(){return this._seg<this._path.length-2}_previousSegment(){return--this._seg}_nextSegment(){return++this._seg}_getStartPointIndex(){return this._seg}_getEndPointIndex(){return this._seg+1}}class I{static local(){return null===I.instance&&(I.instance=new I),I.instance}execute(e,t,i,n,r){return new P(e,t,i)}}I.instance=null
class P extends s.a{constructor(e,t,i){var n,r
super(e,!0,!0),this._firstCurve=null,this._walker=new C,this._walker.updateTolerance(i),this._endings=t.lineDashEnding,this._customDashPos=-(null!=(n=t.offsetAlongLine)?n:0)*i,this._offsetAtEnd=(null!=(r=t.customEndingOffset)?r:0)*i,this._pattern=new w,this._pattern.init(t.dashTemplate,!0),this._pattern.scale(i)}processPath(e){if(0===this._pattern.length())return this.iteratePath=!1,{paths:[e]}
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
return i?this._walker.isPathEnd()?(this.iteratePath=!1,this._firstCurve&&(this._firstCurve.splice(0,1),c.mergePath(i,this._firstCurve),this._firstCurve=null)):(t=this._pattern.nextValue(),!this._walker.nextPosition(t)||this._walker.isPathEnd()?(this.iteratePath=!1,this._firstCurve&&(i=this._firstCurve,this._firstCurve=null)):this.iteratePath=!0):(this.iteratePath=!1,i=this._firstCurve,this._firstCurve=null),{paths:[i]}}}class A{static local(){return null===A.instance&&(A.instance=new A),A.instance}execute(e,t,i,n,r){return new R(e,t,i,n,r)}}A.instance=null
class R{constructor(e,t,i,n,r){switch(this._inputGeometries=e,this._tileKey=n,this._geometryEngine=r,this._width=(void 0!==t.width?t.width:2)*i,t.method){case l.l.Mitered:case l.l.Bevelled:case l.l.Rounded:case l.l.TrueBuffer:case l.l.Square:}this._option=t.option}next(){let e
for(;e=this._inputGeometries.next();){if(Object(r.d)(e)&&this._width>0){if(Math.min(e.xmax-e.xmin,e.ymax-e.ymin)-2*this._width<0)return e
const t=[]
return t.push([[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]),t.push([[e.xmin+this._width,e.ymin+this._width],[e.xmax-this._width,e.ymin+this._width],[e.xmax-this._width,e.ymax-this._width],[e.xmin+this._width,e.ymax-this._width],[e.xmin+this._width,e.ymin+this._width]]),{rings:t}}if(Object(r.g)(e)){let t=null
const i=this._geometryEngine
let n=e
if(this._tileKey&&(n=Object(g.b)(e,Math.abs(this._width)+1),!n||!n.rings||0===n.rings.length))continue
if(Object(p.l)(i)&&(t=i.buffer(b.default.WebMercator,n,-this._width,1)),this._width>0){const i=[]
for(const t of e.rings)t&&i.push(t)
if(t)for(const e of t.rings)e&&i.push(e.reverse())
if(i.length)return{rings:i}}}}return null}}class F{static local(){return null===F.instance&&(F.instance=new F),F.instance}execute(e,t,i,n,r){return new L(e,t,i)}}F.instance=null
class L extends s.a{constructor(e,t,i){super(e,!1,!0),this._curveHelper=new u,this._length=(void 0!==t.length?t.length:20)*i,this._angle=void 0!==t.angle?t.angle:225,this._position=void 0!==t.position?t.position:50,this._length<0&&(this._length=-this._length),this._position<20&&(this._position=20),this._position>80&&(this._position=80),this._mirror=!1}processPath(e){if(this._curveHelper.isEmpty(e,!1))return null
const t=e[0],i=e[e.length-1],n=[i[0]-t[0],i[1]-t[1]]
this._curveHelper.normalize(n)
const r=[t[0]+(i[0]-t[0])*this._position/100,t[1]+(i[1]-t[1])*this._position/100],s=Math.cos((90-this._angle)/180*Math.PI)
let a=Math.sin((90-this._angle)/180*Math.PI)
return this._mirror&&(a=-a),this._mirror=!this._mirror,{paths:[[t,[r[0]-this._length/2*s,r[1]-this._length/2*a],[r[0]+this._length/2*s,r[1]+this._length/2*a],i]]}}}class D{static local(){return null===D.instance&&(D.instance=new D),D.instance}execute(e,t,i,n,r){return new j(e,t,i)}}D.instance=null
class j{constructor(e,t,i){this._inputGeometries=e,this._offsetX=void 0!==t.offsetX?t.offsetX*i:0,this._offsetY=void 0!==t.offsetY?-t.offsetY*i:0}next(){let e=this._inputGeometries.next()
for(;e;){if(Object(r.d)(e))return{xmin:e.xmin+this._offsetX,xmax:e.xmax+this._offsetX,ymin:e.ymin+this._offsetY,ymax:e.ymax+this._offsetY}
if(Object(r.g)(e)){const t=Object(n.a)(e)
return this._moveMultipath(t.rings,this._offsetX,this._offsetY),t}if(Object(r.h)(e)){const t=Object(n.a)(e)
return this._moveMultipath(t.paths,this._offsetX,this._offsetY),t}if(Object(r.e)(e)){const t=Object(n.a)(e)
return this._movePath(t.points,this._offsetX,this._offsetY),t}if(Object(r.f)(e))return{x:e.x+this._offsetX,y:e.y+this._offsetY}
e=this._inputGeometries.next()}return null}_moveMultipath(e,t,i){if(e)for(const n of e)this._movePath(n,t,i)}_movePath(e,t,i){if(e)for(const n of e)n[0]+=t,n[1]+=i}}class B{static local(){return null===B.instance&&(B.instance=new B),B.instance}execute(e,t,i,n,r){return new z(e,t,i,n,r)}}B.instance=null
class z{constructor(e,t,i,n,r){var s
this._inputGeometries=e,this._tileKey=n,this._geometryEngine=r,this._curveHelper=new u,this._offset=(null!=(s=t.offset)?s:1)*i,this._method=t.method,this._option=t.option,this._offsetFlattenError=.03*i}next(){let e
for(;e=this._inputGeometries.next();){if(0===this._offset)return e
if(Object(r.d)(e)){if(this._method===l.m.Rounded&&this._offset>0){const t=[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]],i=this._curveHelper.offset(t,-this._offset,this._method,4,this._offsetFlattenError)
return i?{rings:[i]}:null}if(Math.min(e.xmax-e.xmin,e.ymax-e.ymin)+2*this._offset>0)return{xmin:e.xmin-this._offset,xmax:e.xmax+this._offset,ymin:e.ymin-this._offset,ymax:e.ymax+this._offset}}const t=this._geometryEngine
if(Object(p.k)(t))return null
let i=e
if(Object(r.g)(e)){if(this._tileKey&&(i=Object(g.b)(e,Math.abs(this._offset)+1),!i||!i.rings||0===i.rings.length))continue}else if(Object(r.h)(e)&&this._tileKey&&(i=Object(g.c)(e,Math.abs(this._offset)+1),!i||!i.paths||0===i.paths.length))continue
return t.offset(b.default.WebMercator,i,-this._offset,1,this._method,4,this._offsetFlattenError)}return null}}class N{static local(){return null===N.instance&&(N.instance=new N),N.instance}execute(e,t,i,n,r){return new k(e,t,i)}}N.instance=null
class k{constructor(e,t,i){this._inputGeometries=e,this._reverse=void 0===t.reverse||t.reverse}next(){let e=this._inputGeometries.next()
for(;e;){if(!this._reverse)return e
if(Object(r.h)(e)){const t=Object(n.a)(e)
return Object(s.h)(t.paths),t}e=this._inputGeometries.next()}return null}}var U=i(996),V=i(1079)
class G{static local(){return null===G.instance&&(G.instance=new G),G.instance}execute(e,t,i,n,r){return new W(e,t,i)}}G.instance=null
class W{constructor(e,t,i){this._inputGeometries=e,this._rotateAngle=void 0!==t.angle?t.angle*Math.PI/180:0}next(){let e=this._inputGeometries.next()
for(;e;){if(0===this._rotateAngle)return e
const t=Object(U.m)()
Object(V.a)(t,e)
const i=(t[2]+t[0])/2,s=(t[3]+t[1])/2
if(Object(r.d)(e)){const t={rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]}
return this._rotateMultipath(t.rings,i,s),t}if(Object(r.g)(e)){const t=Object(n.a)(e)
return this._rotateMultipath(t.rings,i,s),t}if(Object(r.h)(e)){const t=Object(n.a)(e)
return this._rotateMultipath(t.paths,i,s),t}if(Object(r.e)(e)){const t=Object(n.a)(e)
return this._rotatePath(t.points,i,s),t}if(Object(r.f)(e))return e
e=this._inputGeometries.next()}return null}_rotateMultipath(e,t,i){if(e)for(const n of e)this._rotatePath(n,t,i)}_rotatePath(e,t,i){if(e){const n=Math.cos(this._rotateAngle),r=Math.sin(this._rotateAngle)
for(const s of e){const e=s[0]-t,a=s[1]-i
s[0]=t+e*n-a*r,s[1]=i+e*r+a*n}}}}class H{static local(){return null===H.instance&&(H.instance=new H),H.instance}execute(e,t,i,n,r){return new Y(e,t,i)}}H.instance=null
class Y{constructor(e,t,i){this._inputGeometries=e,this._xFactor=void 0!==t.xScaleFactor?t.xScaleFactor:1.15,this._yFactor=void 0!==t.yScaleFactor?t.yScaleFactor:1.15}next(){let e=this._inputGeometries.next()
for(;e;){if(1===this._xFactor&&1===this._yFactor)return e
const t=Object(U.m)()
Object(V.a)(t,e)
const i=(t[2]+t[0])/2,s=(t[3]+t[1])/2
if(Object(r.d)(e)){const t={rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]}
return this._scaleMultipath(t.rings,i,s),t}if(Object(r.g)(e)){const t=Object(n.a)(e)
return this._scaleMultipath(t.rings,i,s),t}if(Object(r.h)(e)){const t=Object(n.a)(e)
return this._scaleMultipath(t.paths,i,s),t}if(Object(r.e)(e)){const t=Object(n.a)(e)
return this._scalePath(t.points,i,s),t}if(Object(r.f)(e))return e
e=this._inputGeometries.next()}return null}_scaleMultipath(e,t,i){if(e)for(const n of e)this._scalePath(n,t,i)}_scalePath(e,t,i){if(e)for(const n of e){const e=(n[0]-t)*this._xFactor,r=(n[1]-i)*this._yFactor
n[0]=t+e,n[1]=i+r}}}class X{static local(){return null===X.instance&&(X.instance=new X),X.instance}execute(e,t,i,n,r){return new q(e,t,i)}}X.instance=null
class q{constructor(e,t,i){this._inputGeometries=e,this._height=(void 0!==t.amplitude?t.amplitude:2)*i,this._period=(void 0!==t.period?t.period:3)*i,this._style=t.waveform,this._height<=0&&(this._height=Math.abs(this._height)),this._period<=0&&(this._period=Math.abs(this._period)),this._pattern=new w,this._pattern.addValue(this._period),this._pattern.addValue(this._period),this._walker=new C,this._walker.updateTolerance(i)}next(){let e=this._inputGeometries.next()
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
const s=16*r+1,a=n/r,o=this._period/16,l=1/s,u=2*Math.PI*n/a,h=2*Math.PI*Math.random(),d=2*Math.PI*Math.random(),f=2*Math.PI*Math.random(),_=.75-Math.random()/2,m=.75-Math.random()/2,p=new E
this._walker.curPointAndAngle(p),i.startPath(p.pt)
let g=0
for(;;){if(!this._walker.nextPointAndAngle(o,p)){i.lineTo(e[e.length-1])
break}{const e=g
let n
if(g+=l,t){const t=this._height/2*(1+.3*Math.sin(_*u*e+h))
n=t*Math.sin(u*e+d),n+=t*Math.sin(m*u*e+f),n/=2}else n=.5*this._height*Math.sin(.5*u*e)
i.lineTo([p.pt[0]-n*p.sa,p.pt[1]+n*p.ca])}}return i.path()}_constructSquare(e){const t=new c,i=this._walker.calculatePathLength(e)
Math.round(i/this._period)
let n=!0
for(;;){let e=!1
if(this._walker.curPositionIsValid()){const i=new E
this._walker.curPointAndAngle(i)
const r=new E
if(this._walker.nextPointAndAngle(this._period,r)){const s=new E
this._walker.nextPointAndAngle(this._period,s)&&(n?(t.startPath(i.pt),n=!1):t.lineTo(i.pt),t.lineTo([i.pt[0]-this._height/2*i.sa,i.pt[1]+this._height/2*i.ca]),t.lineTo([r.pt[0]-this._height/2*r.sa,r.pt[1]+this._height/2*r.ca]),t.lineTo([r.pt[0]+this._height/2*r.sa,r.pt[1]-this._height/2*r.ca]),t.lineTo([s.pt[0]+this._height/2*s.sa,s.pt[1]-this._height/2*s.ca]),e=!0)}}if(!e){t.lineTo(this._walker.getPathEnd())
break}}return t.path()}_constructTriangle(e){const t=new c,i=this._walker.calculatePathLength(e)
Math.round(i/this._period)
let n=!0
for(;;){let e=!1
if(this._walker.curPositionIsValid()){const i=new E
this._walker.curPointAndAngle(i)
const r=new E
if(this._walker.nextPointAndAngle(this._period/2,r)){const s=new E
this._walker.nextPointAndAngle(this._period,s)&&(this._walker.nextPosition(this._period/2)&&(n?(t.startPath(i.pt),n=!1):t.lineTo(i.pt),t.lineTo([r.pt[0]-this._height/2*r.sa,r.pt[1]+this._height/2*r.ca]),t.lineTo([s.pt[0]+this._height/2*s.sa,s.pt[1]-this._height/2*s.ca])),e=!0)}}if(!e){t.lineTo(this._walker.getPathEnd())
break}}return t.path()}}class Z{static local(){return null===Z.instance&&(Z.instance=new Z),Z.instance}execute(e,t,i,n,r){return new K(e,t,i)}}Z.instance=null
class K extends s.b{constructor(e,t,i){var n
super(e,!0,!0),this._geometryWalker=new C,this._geometryWalker.updateTolerance(i),this._angleToLine=null==(n=t.angleToLine)||n,this._offset=(t.offset?t.offset:0)*i,this._originalEndings=t.endings,this._offsetAtEnd=(t.customEndingOffset?t.customEndingOffset:0)*i,this._position=-(t.offsetAlongLine?t.offsetAlongLine:0)*i,this._pattern=new w,this._pattern.init(t.placementTemplate,!1),this._pattern.scale(i),this._endings=this._originalEndings}processPath(e){if(this._pattern.isEmpty())return null
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
r-=i,t=r,this.iteratePath=!0}const i=new E
return this._geometryWalker.nextPointAndAngle(t,i)?this._endings===l.t.WithFullGap&&this._geometryWalker.isPathEnd()?(this.iteratePath=!1,null):this._endings===l.t.WithMarkers&&this._geometryWalker.isPathEnd()&&(this.iteratePath=!1,this.isClosed)?null:(this.internalPlacement.setTranslate(i.pt[0]-this._offset*i.sa,i.pt[1]+this._offset*i.ca),this._angleToLine&&this.internalPlacement.setRotateCS(i.ca,i.sa),this.internalPlacement):(this.iteratePath=!1,null)}_adjustPosition(e){let t=e/this._pattern.length()
return t-=Math.floor(t),t*this._pattern.length()}}class ${static local(){return null===$.instance&&($.instance=new $),$.instance}execute(e,t,i,n,r){return new J(e,t,i)}}$.instance=null
class J extends s.b{constructor(e,t,i){super(e,!1,!0),this._curveHelper=new u,this._angleToLine=void 0===t.angleToLine||t.angleToLine,this._offset=void 0!==t.offset?t.offset*i:0,this._type=t.extremityPlacement,this._position=void 0!==t.offsetAlongLine?t.offsetAlongLine*i:0,this._beginProcessed=!1}processPath(e){let t
switch(this._type){case l.f.Both:default:this._beginProcessed?(t=this._atExtremities(e,this._position,!1),this._beginProcessed=!1,this.iteratePath=!1):(t=this._atExtremities(e,this._position,!0),this._beginProcessed=!0,this.iteratePath=!0)
break
case l.f.JustBegin:t=this._atExtremities(e,this._position,!0)
break
case l.f.JustEnd:t=this._atExtremities(e,this._position,!1)
case l.f.None:}return t}_atExtremities(e,t,i){const n=e.length
if(n<2)return null
const r=i?1:n-2,a=i?n:-1,o=i?1:-1
let l,c=0,u=i?e[0]:e[n-1]
for(let i=r;i!==a;i+=o){l=u,u=e[i]
const n=this._curveHelper.calculateLength(l,u)
if(c+n>t){const e=(t-c)/n,[i,r]=this._curveHelper.getAngleCS(l,u,e),a=Object(s.e)(l,u,e)
return this.internalPlacement.setTranslate(a[0]-this._offset*r,a[1]+this._offset*i),this._angleToLine&&this.internalPlacement.setRotateCS(-i,-r),this.internalPlacement}c+=n}return null}}class Q{static local(){return null===Q.instance&&(Q.instance=new Q),Q.instance}execute(e,t,i,n,r){return new ee(e,t,i)}}Q.instance=null
class ee extends s.b{constructor(e,t,i){super(e,!0,!0),this._walker=new C,this._walker.updateTolerance(i),this._angleToLine=void 0===t.angleToLine||t.angleToLine,this._offset=void 0!==t.offset?t.offset*i:0,this._beginGap=void 0!==t.beginPosition?t.beginPosition*i:0,this._endGap=void 0!==t.endPosition?t.endPosition*i:0,this._flipFirst=void 0===t.flipFirst||t.flipFirst,this._pattern=new w,this._pattern.init(t.positionArray,!1,!1),this._subPathLen=0,this._posCount=this._pattern.size(),this._isFirst=!0,this._prevPos=0}processPath(e){if(this._pattern.isEmpty())return null
let t
if(this.iteratePath){const e=this._pattern.nextValue()*this._subPathLen,i=this._beginGap+e
t=i-this._prevPos,this._prevPos=i}else{if(this._posCount=this._pattern.size(),this._isFirst=!0,this._prevPos=0,this._subPathLen=this._walker.calculatePathLength(e)-this._beginGap-this._endGap,this._subPathLen<0)return this.iteratePath=!1,null
if(!this._walker.init(e,this._pattern,!1))return null
this._pattern.reset()
const i=this._pattern.nextValue()*this._subPathLen,n=this._beginGap+i
t=n-this._prevPos,this._prevPos=n,this.iteratePath=!0}const i=new E
if(!this._walker.nextPointAndAngle(t,i,_.END))return this.iteratePath=!1,null
this.internalPlacement.setTranslate(i.pt[0]-this._offset*i.sa,i.pt[1]+this._offset*i.ca)
const n=this._isFirst&&this._flipFirst
let r,s
return this._angleToLine?(r=i.ca,s=i.sa):(r=1,s=0),n&&(r=-r,s=-s),this.internalPlacement.setRotateCS(r,s),this._isFirst=!1,this._posCount--,0===this._posCount&&(this.iteratePath=!1),this.internalPlacement}}var te=i(448),ie=i(1325)
class ne{static local(){return null===ne.instance&&(ne.instance=new ne),ne.instance}execute(e,t,i,n,r){return new re(e,t,i,n,r)}}ne.instance=null
class re{constructor(e,t,i,n,r){var s,a
if(this._xMin=0,this._xMax=0,this._yMin=0,this._yMax=0,this._currentX=0,this._currentY=0,this._accelerationMap=null,this._testInsidePolygon=!1,this._verticalSubdivision=!0,this._stepX=Math.abs(null!=(s=t.stepX)?s:16)*i,this._stepY=Math.abs(null!=(a=t.stepY)?a:16)*i,0!==this._stepX&&0!==this._stepY&&e&&function(e){return void 0!==e.rings}(e)&&e.rings){var o
if(this._gridType=null!=(o=t.gridType)?o:l.u.Fixed,this._gridType===l.u.Random){var c,u
const e=null!=(c=t.seed)?c:13,i=1
this._randomLCG=new te.a(e*i),this._randomness=(null!=(u=t.randomness)?u:100)/100,this._gridAngle=0,this._shiftOddRows=!1,this._cosAngle=1,this._sinAngle=0,this._offsetX=0,this._offsetY=0,this._buildRandomValues()}else{var h,d,f,_
if(this._randomness=0,this._gridAngle=null!=(h=t.gridAngle)?h:0,this._shiftOddRows=null!=(d=t.shiftOddRows)&&d,this._offsetX=(null!=(f=t.offsetX)?f:0)*i,this._offsetY=(null!=(_=t.offsetY)?_:0)*i,this._cosAngle=Math.cos(this._gridAngle/180*Math.PI),this._sinAngle=-Math.sin(this._gridAngle/180*Math.PI),this._stepX)if(this._offsetX<0)for(;this._offsetX<-.5*this._stepX;)this._offsetX+=this._stepX
else for(;this._offsetX>=.5*this._stepX;)this._offsetX-=this._stepX
if(this._stepY)if(this._offsetY<0)for(;this._offsetY<-.5*this._stepY;)this._offsetY+=this._stepY
else for(;this._offsetY>=.5*this._stepY;)this._offsetY-=this._stepY}if(this._graphicOriginX=0,this._graphicOriginY=0,null!=n){const[e,t,i]=n.split("/"),r=parseFloat(t),s=parseFloat(i)
this._graphicOriginX=512*-s,this._graphicOriginY=512*r,this._testInsidePolygon=!0}this._internalPlacement=new ie.a,this._calculateMinMax(e),this._geometry=e}}next(){return this._geometry?this._nextInside():null}_buildRandomValues(){if(!re._randValues){re._randValues=[]
for(let e=0;e<24;e++)for(let e=0;e<24;e++)re._randValues.push(this._randomLCG.getFloat()),re._randValues.push(this._randomLCG.getFloat())}}_calculateMinMax(e){let t,i,n,r,s,a,o,l,c,u,h,d,f,_
this._xMin=0,this._xMax=0,this._yMin=0,this._yMax=0,o=l=f=h=Number.MAX_VALUE,c=u=_=d=-Number.MAX_VALUE
const m=1!==this._cosAngle
let p=0
for(const g of e.rings){const e=g?g.length:0
for(let b=0;b<e;b++)a=g[b][0],s=g[b][1],t=a-this._graphicOriginX-this._offsetX,i=s-this._graphicOriginY-this._offsetY,m?(n=this._cosAngle*t-this._sinAngle*i,r=this._sinAngle*t+this._cosAngle*i):(n=t,r=i),o=Math.min(o,n),c=Math.max(c,n),l=Math.min(l,r),u=Math.max(u,r),h=Math.min(h,s),d=Math.max(d,s),f=Math.min(f,a),_=Math.max(_,a),p++}h=h!==Number.MAX_VALUE?h:-512-this._stepY,d=d!==-Number.MAX_VALUE?d:this._stepY,f=f!==Number.MAX_VALUE?f:-this._stepX,_=_!==-Number.MAX_VALUE?_:512+this._stepX
const g=d-h,b=_-f
if(this._verticalSubdivision=g>=b,this._polygonMin=this._verticalSubdivision?h:f,this._testInsidePolygon){let e=0-this._graphicOriginX-this._offsetX-this._stepX,t=512-this._graphicOriginX-this._offsetX+this._stepX,i=-512-this._graphicOriginY-this._offsetY-this._stepY,n=0-this._graphicOriginY-this._offsetY+this._stepY
if(m){const r=[[e,i],[e,n],[t,i],[t,n]]
e=i=Number.MAX_VALUE,t=n=-Number.MAX_VALUE
for(const s of r){const r=this._cosAngle*s[0]-this._sinAngle*s[1],a=this._sinAngle*s[0]+this._cosAngle*s[1]
e=Math.min(e,r),t=Math.max(t,r),i=Math.min(i,a),n=Math.max(n,a)}}o=o!==Number.MAX_VALUE?Math.max(o,e):e,l=l!==Number.MAX_VALUE?Math.max(l,i):i,c=c!==-Number.MAX_VALUE?Math.min(c,t):t,u=u!==-Number.MAX_VALUE?Math.min(u,n):n}this._xMin=Math.round(o/this._stepX),this._xMax=Math.round(c/this._stepX),this._yMin=Math.round(l/this._stepY),this._yMax=Math.round(u/this._stepY),this._currentX=this._xMax+1,this._currentY=this._yMin-1,this._testInsidePolygon&&p>12&&(g>25||b>25)&&this._buildAccelerationMap(e,f,_,h,d)}_buildAccelerationMap(e,t,i,n,r){const{rings:s}=e,a=new Map,o=this._verticalSubdivision,l=o?r-n:i-t
let c=Math.ceil(l/10)
if(c<=1)return
const u=Math.floor(l/c)
let h,d,f,_,m,p,g,b,v,x
c++,this._delta=u,o?(b=-512-this._stepY,v=this._stepY,x=n):(b=-this._stepX,v=512+this._stepX,x=t)
for(let e=0;e<s.length;e++)if(h=s[e],!(h.length<2))for(let t=1;t<h.length;t++){if(d=h[t-1],f=h[t],o){if(d[1]===f[1]||d[1]<b&&f[1]<b||d[1]>v&&f[1]>v)continue
_=Math.min(d[1],f[1]),m=Math.max(d[1],f[1])}else{if(d[0]===f[0]||d[0]<b&&f[0]<b||d[0]>v&&f[0]>v)continue
_=Math.min(d[0],f[0]),m=Math.max(d[0],f[0])}for(;_<m;)p=Math.floor((_-x)/u),se(p,e,t,a),_+=u
g=Math.floor((m-x)/u),g>p&&se(g,e,t,a)}this._accelerationMap=a}_nextInside(){for(;;){if(this._currentX>this._xMax){if(this._currentY++,this._currentY>this._yMax)return null
this._currentX=this._xMin,this._shiftOddRows&&this._currentY%2&&this._currentX--}let e=this._currentX*this._stepX+this._offsetX
this._shiftOddRows&&this._currentY%2&&(e+=.5*this._stepX)
const t=this._currentY*this._stepY+this._offsetY
let i,n
if(this._currentX++,this._gridType===l.u.Random){const r=(this._currentX%24+24)%24,s=(this._currentY%24+24)%24
i=this._graphicOriginX+e+this._stepX*this._randomness*(.5-re._randValues[24*s+r])*2/3,n=this._graphicOriginY+t+this._stepY*this._randomness*(.5-re._randValues[24*s+r+1])*2/3}else i=this._graphicOriginX+this._cosAngle*e+this._sinAngle*t,n=this._graphicOriginY-this._sinAngle*e+this._cosAngle*t
if(!this._testInsidePolygon||this._isInsidePolygon(i,n,this._geometry))return this._internalPlacement.setTranslate(i,n),this._internalPlacement}}_isInsidePolygon(e,t,i){const{rings:n}=i
if(Object(p.k)(this._accelerationMap))return function(e,t,i){const{rings:n}=i
let r,s,a,o=0
for(const i of n){r=i.length
for(let n=1;n<r;++n)s=i[n-1],a=i[n],s[1]>t!=a[1]>t&&((a[0]-s[0])*(t-s[1])-(a[1]-s[1])*(e-s[0])>0?o++:o--)}return 0!==o}(e,t,i)
const r=this._verticalSubdivision,s=r?t:e,a=Math.floor((s-this._polygonMin)/this._delta),o=this._accelerationMap.get(a)
if(!o)return!1
let l,c,u,h,d,f=0
for(const i of o){d=i[0]
const s=n[d]
if(h=i[1],l=s[h-1],c=s[h],r){if(l[1]>t==c[1]>t)continue
u=(c[0]-l[0])*(t-l[1])-(c[1]-l[1])*(e-l[0])}else{if(l[0]>e==c[0]>e)continue
u=(c[1]-l[1])*(e-l[0])-(c[0]-l[0])*(t-l[1])}u>0?f++:f--}return 0!==f}}function se(e,t,i,n){let r=n.get(e)
r||(r=[],n.set(e,r)),r.push([t,i])}class ae{static local(){return null===ae.instance&&(ae.instance=new ae),ae.instance}execute(e,t,i,n,r){return new oe(e,t,i)}}ae.instance=null
class oe extends s.b{constructor(e,t,i){super(e,!0,!0),this._curveHelper=new u,this._angleToLine=void 0===t.angleToLine||t.angleToLine,this._offset=void 0!==t.offset?t.offset*i:0,this._relativeTo=t.relativeTo,this._position=void 0!==t.startPointOffset?t.startPointOffset*i:0,this._epsilon=.001*i}processPath(e){const t=this._position
if(this._relativeTo===l.v.SegmentMidpoint){for(this.iteratePath||(this._segmentCount=e.length,this._curSegment=1,this.iteratePath=!0);this._curSegment<this._segmentCount;){const t=this._curSegment
this._curSegment++
const i=e[t-1],n=e[t],r=this._curveHelper.calculateLength(i,n)
if(r<this._epsilon)continue
const a=.5+this._position/r,[o,l]=this._curveHelper.getAngleCS(i,n,a),c=Object(s.e)(i,n,a)
return this.internalPlacement.setTranslate(c[0]-this._offset*l,c[1]+this._offset*o),this._angleToLine&&this.internalPlacement.setRotateCS(o,l),this.internalPlacement}return this.iteratePath=!1,null}this._relativeTo===l.v.LineEnd&&Object(s.i)(e)
const i=this.onLine(e,t)
return this._relativeTo===l.v.LineEnd&&Object(s.i)(e),i}onLine(e,t){let i,n=!1
switch(this._relativeTo){case l.v.LineMiddle:default:i=this._curveHelper.calculatePathLength(e)/2+t
break
case l.v.LineBeginning:i=t
break
case l.v.LineEnd:i=t,n=!0}const r=e.length
let a,o=0,c=e[0]
for(let t=1;t<r;++t){a=c,c=e[t]
const r=this._curveHelper.calculateLength(a,c)
if(o+r>i){const e=(i-o)/r,[t,l]=this._curveHelper.getAngleCS(a,c,e),u=Object(s.e)(a,c,e),h=n?-this._offset:this._offset
return this.internalPlacement.setTranslate(u[0]-h*l,u[1]+h*t),this._angleToLine&&(n?this.internalPlacement.setRotateCS(-t,-l):this.internalPlacement.setRotateCS(t,l)),this.internalPlacement}o+=r}return null}}class le{static local(){return null===le.instance&&(le.instance=new le),le.instance}execute(e,t,i,n,r){return new ce(e,t,i)}}le.instance=null
class ce extends s.b{constructor(e,t,i){super(e,!0,!0),this._curveHelper=new u,this._angleToLine=void 0===t.angleToLine||t.angleToLine,this._offset=void 0!==t.offset?t.offset*i:0,this._endPoints=void 0===t.placeOnEndPoints||t.placeOnEndPoints,this._controlPoints=void 0===t.placeOnControlPoints||t.placeOnControlPoints,this._regularVertices=void 0===t.placeOnRegularVertices||t.placeOnRegularVertices,this._tags=[],this._tagIterator=0}processPath(e){if(this.iteratePath||(this._preparePath(e),this.iteratePath=!0),this._tagIterator>=this._tags.length)return this._tags.length=0,this._tagIterator=0,this.iteratePath=!1,null
const t=this._tags[this._tagIterator]
this._angleToLine&&this.internalPlacement.setRotate(t[2])
let i=t[0],n=t[1]
if(0!==this._offset){const e=Math.cos(t[2]),r=Math.sin(t[2])
i-=this._offset*r,n+=this._offset*e}return this.internalPlacement.setTranslate(i,n),this._tagIterator++,this.internalPlacement}_preparePath(e){this._tags.length=0,this._tagIterator=0
const t=Object(s.g)(e),i=e.length-1
let n,r,a=0,o=0,l=0,c=0,u=0
for(;a<i;){a++,n=e[a-1],r=e[a]
const h=Object(s.f)(n),d=Object(s.f)(r);(this._angleToLine||0!==this._offset)&&(c=this._curveHelper.getAngle(n,r,0)),1===a?t?(o=c,l=h):(this._endPoints||this._controlPoints&&1===h)&&this._tags.push([n[0],n[1],c]):1===h?this._controlPoints&&this._tags.push([n[0],n[1],ue(u,c)]):this._regularVertices&&this._tags.push([n[0],n[1],ue(u,c)]),(this._angleToLine||0!==this._offset)&&(u=this._curveHelper.getAngle(n,r,1)),a===i&&(t?1===d||1===l?this._controlPoints&&this._tags.push([r[0],r[1],ue(u,o)]):this._regularVertices&&this._tags.push([r[0],r[1],ue(u,o)]):(this._endPoints||this._controlPoints&&1===d)&&this._tags.push([r[0],r[1],u]))}this._tagIterator=0}}function ue(e,t){const i=Math.PI
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
const s=e.length,a=e[0]
let o,l,c=null
for(;;){const i=2*r+1,n=2*r+2
if(c=null,i<s&&(o=e[i],t(o,a)>0&&(c=i)),n<s&&(l=e[n],(null===c&&t(l,a)<=0||null!==c&&t(l,o)<=0)&&(c=n)),null===c)break
e[r]=e[c],e[c]=a,r=c}return i}}const _e=(e,t)=>e<t?-1:e>t?1:0
var me=i(1066),pe=i(1118)
function ge(e,t){const{rings:i}=t
let n=0
for(const t of i){const i=t.length
for(let r=1;r<i;++r){const i=t[r-1],s=t[r]
i[1]>e[1]!=s[1]>e[1]&&((s[0]-i[0])*(e[1]-i[1])-(s[1]-i[1])*(e[0]-i[0])>0?n++:n--)}}return 0!==n}function be(e,t,i){if(i&&ge(e,t))return{coord:e,distance:0}
let n=1/0,r=0,s=0
const a=[0,0],{rings:o}=t
for(const t of o)if(!(t.length<2))for(let i=0;i<t.length-1;i++){Object(me.l)(a,e,t,i)
const o=Se(e,a)
o<n&&(n=o,r=a[0],s=a[1])}return{coord:[r,s],distance:Math.sqrt(n)}}function ve(e,t,i,n){const r=[t,0]
let s=1/0,a=1/0,o=!1,l=!1
const c=[[t,n[1]-1],[t,n[3]+1]],u=[0,0],h=[0,0],d=[0,0],f=[[0,0],[0,0]],_=Object(U.m)(),{rings:m}=e
for(const e of m)if(!(e.length<2))for(let t=1;t<e.length;t++){if(f[0][0]=e[t-1][0],f[0][1]=e[t-1][1],f[1][0]=e[t][0],f[1][1]=e[t][1],null===xe(_,f))continue
if(h[0]=c[0][0],h[1]=c[0][1],d[0]=c[1][0],d[1]=c[1][1],0===ye(_,h,d))continue
if(!Object(pe.e)(c[0],c[1],f[0],f[1],u))continue
const i=u[1]
s>a?i<s&&(s=i,o=!0):i<a&&(a=i,l=!0)}return o&&l?r[1]=(s+a)/2:r[0]=r[1]=NaN,r}function xe(e,t){if(t.length<2)return null
e||(e=Object(U.m)())
const[i,n]=t[0],[r,s]=t[1]
return e[0]=Math.min(i,r),e[1]=Math.min(n,s),e[2]=Math.max(i,r),e[3]=Math.max(n,s),e}function ye(e,t,i){let n=Oe(t,e),r=Oe(i,e)
const s=e[0],a=e[1],o=e[2],l=e[3]
if(n&r)return 0
if(!(n|r))return 4
const c=(n?1:0)|(r?2:0)
do{const c=i[0]-t[0],u=i[1]-t[1]
if(c>u)3&n?(1&n?(t[1]+=u*(s-t[0])/c,t[0]=s):(t[1]+=u*(o-t[0])/c,t[0]=o),n=Oe(t,e)):3&r?(1&r?(i[1]+=u*(s-i[0])/c,i[0]=s):(i[1]+=u*(o-i[0])/c,i[0]=o),r=Oe(i,e)):n?(4&n?(t[0]+=c*(a-t[1])/u,t[1]=a):(t[0]+=c*(l-t[1])/u,t[1]=l),n=Oe(t,e)):(4&r?(i[0]+=c*(a-i[1])/u,i[1]=a):(i[0]+=c*(l-i[1])/u,i[1]=l),r=Oe(i,e))
else if(12&n?(4&n?(t[0]+=c*(a-t[1])/u,t[1]=a):(t[0]+=c*(l-t[1])/u,t[1]=l),n=Oe(t,e)):12&r?(4&r?(i[0]+=c*(a-i[1])/u,i[1]=a):(i[0]+=c*(l-i[1])/u,i[1]=l),r=Oe(i,e)):n?(1&n?(t[1]+=u*(s-t[0])/c,t[0]=s):(t[1]+=u*(o-t[0])/c,t[0]=o),n=Oe(t,e)):(1&r?(i[1]+=u*(s-i[0])/c,i[0]=s):(i[1]+=u*(o-i[0])/c,i[0]=o),r=Oe(i,e)),n&r)return 0}while(n|r)
return c}function Oe(e,t){return(e[0]<t[0]?1:0)|(e[0]>t[2]?1:0)<<1|(e[1]<t[1]?1:0)<<2|(e[1]>t[3]?1:0)<<3}function Te(e,t,i){return e+(t-e)*i}function Se(e,t){return(e[0]-t[0])*(e[0]-t[0])+(e[1]-t[1])*(e[1]-t[1])}function we(e,t){if(e<t)return-1
if(e>t)return 1
if(e===t)return 0
const i=isNaN(e),n=isNaN(t)
return i<n?-1:i>n?1:0}class Ee{constructor(e,t,i,n){this.x=e,this.y=t,this.cellSize=i,this.distancefromCellCenter=Object(me.c)(e,t,n),this.maxDistanceToPolygon=this.distancefromCellCenter+this.cellSize*Math.SQRT2}}class Me{static local(){return null===Me.instance&&(Me.instance=new Me),Me.instance}execute(e,t,i,n,r){return new Ce(e,t,i)}}Me.instance=null
class Ce{constructor(e,t,i){this._geometry=e,this._offsetX=void 0!==t.offsetX?t.offsetX*i:0,this._offsetY=void 0!==t.offsetY?t.offsetY*i:0,this._method=void 0!==t.method?t.method:l.w.OnPolygon,this._internalPlacement=new ie.a}next(){const e=this._geometry
return this._geometry=null,e&&function(e){return void 0!==e.rings}(e)?this._polygonCenter(e):null}_polygonCenter(e){let t=!1
switch(this._method){case l.w.CenterOfMass:{const i=Object(de.e)(e)
i&&(this._internalPlacement.setTranslate(i[0]+this._offsetX,i[1]+this._offsetY),t=!0)}break
case l.w.BoundingBoxCenter:{const i=Object(U.m)()
Object(V.a)(i,e),i&&(this._internalPlacement.setTranslate((i[2]+i[0])/2+this._offsetX,(i[3]+i[1])/2+this._offsetY),t=!0)}break
case l.w.OnPolygon:default:{let i
i=Object(he.a)("polylabel-placement-enabled")?function(e){if(!e||!e.rings||0===e.rings.length)return null
const t=Object(V.c)(Object(U.m)(),e.rings[0])
if(!t)return null
const i=t[2]-t[0],n=t[3]-t[1]
if(0===i||0===n)return[t[0]+i/2,t[1]+n/2]
const r=Math.max(Math.min(i,n)/100,1),s=new fe((e,t)=>t.maxDistanceToPolygon-e.maxDistanceToPolygon),a=Math.min(i,n)
let o=a/2,l=0,c=0
for(l=t[0];l<t[2];l+=a)for(c=t[1];c<t[3];c+=a)s.enqueue(new Ee(l+o,c+o,o,e))
const u=Object(de.d)(e.rings,!1)
if(null===u)return null
let h,d=new Ee(u[0],u[1],0,e)
for(;s.size>0;)h=Object(p.u)(s.dequeue()),h.distancefromCellCenter>d.distancefromCellCenter&&(d=h),h.maxDistanceToPolygon-d.distancefromCellCenter<=r||(o=h.cellSize/2,s.enqueue(new Ee(h.x-o,h.y-o,o,e)),s.enqueue(new Ee(h.x+o,h.y-o,o,e)),s.enqueue(new Ee(h.x-o,h.y+o,o,e)),s.enqueue(new Ee(h.x+o,h.y+o,o,e)))
return[d.x,d.y]}(e):function(e){const{rings:t}=e
if(!t||0===t.length)return null
const i=Object(V.a)(Object(U.m)(),e)
if(!i)return null
const n=4*(Math.abs(i[0])+Math.abs(i[2])+Math.abs(i[1])+Math.abs(i[3])+1)*222045e-19
let r=0,s=0
for(let e=0;e<t.length;e++){const i=Object(me.i)(t[e])
i>s&&(s=i,r=e)}if(Math.abs(s)<=2*n*n){const e=Object(V.c)(Object(U.m)(),t[r])
return[(e[0]+e[2])/2,(e[1]+e[3])/2]}const a=Object(de.c)(t[r],!1,Object(U.m)())
if(null===a)return null
if(1===t.length&&t[0].length<4)return a
const o=[[NaN,NaN],[NaN,NaN],[NaN,NaN],[NaN,NaN]],l=[NaN,NaN,NaN,NaN],c=[NaN,NaN,NaN,NaN]
let u=!1,h=be(a,e,!0)
0===h.distance&&(u=!0,o[0][0]=a[0],o[0][1]=a[1],h=be(a,e,!1)),l[0]=h.distance,c[0]=0
const d=[NaN,NaN]
let f=!1,_=.25,m=-1
const p=Object(V.c)(Object(U.m)(),t[r])
let g=NaN
do{if(g=NaN,o[1]=ve(e,Te(p[0],p[2],_),0,i),isNaN(o[1][0])||isNaN(o[1][1])||(h=be(o[1],e,!1),g=h.distance),!isNaN(g)&&g>n&&ge(o[1],e))f=!0,l[1]=g,c[1]=Se(o[1],a)
else if(!isNaN(g)&&g>m&&(m=g,d[0]=o[1][0],d[1]=o[1][1]),_-=.01,_<.1){if(!(m>=0))break
f=!0,l[1]=m,o[1][0]=d[0],o[1][1]=d[1],c[1]=Se(o[1],a)}}while(!f)
f=!1,_=.5,m=-1
let b=.01,v=1
do{if(g=NaN,o[2]=ve(e,Te(p[0],p[2],_),0,i),isNaN(o[2][0])||isNaN(o[2][1])||(h=be(o[2],e,!1),g=h.distance),!isNaN(g)&&g>n&&ge(o[2],e))f=!0,l[2]=g,c[2]=Se(o[2],a)
else if(!isNaN(g)&&g>m)m=g,d[0]=o[2][0],d[1]=o[2][1]
else if(g>m&&(m=g,d[0]=o[2][0],d[1]=o[2][1]),_=.5+b*v,b+=.01,v*=-1,_<.3||_>.7){if(!(m>=0))break
f=!0,l[2]=m,o[2][0]=d[0],o[2][1]=d[1],c[2]=Se(o[2],a)}}while(!f)
f=!1,_=.75,m=-1
do{if(g=NaN,o[3]=ve(e,Te(p[0],p[2],_),0,i),isNaN(o[3][0])||isNaN(o[3][1])||(h=be(o[3],e,!1),g=h.distance),!isNaN(g)&&g>n&&ge(o[3],e))f=!0,l[3]=g,c[3]=Se(o[3],a)
else if(g>m&&(m=g,d[0]=o[3][0],d[1]=o[3][1]),_+=.01,_>.9){if(!(m>=0))break
f=!0,l[3]=m,o[3][0]=d[0],o[3][1]=d[1],c[3]=Se(o[3],a)}}while(!f)
const x=[0,1,2,3],y=u?0:1
let O
for(let e=y;e<4;e++)for(let e=y;e<3;e++){const t=c[e],i=c[e+1]
we(t,i)>0&&(O=x[e],x[e]=x[e+1],x[e+1]=O,c[e]=i,c[e+1]=t)}let T=y,S=0,w=0
for(let e=y;e<4;e++){switch(e){case 0:w=2*l[x[e]]
break
case 1:w=1.66666666*l[x[e]]
break
case 2:w=1.33333333*l[x[e]]
break
case 3:w=l[x[e]]}w>S&&(S=w,T=x[e])}return o[T]}(e),null!==i&&(this._internalPlacement.setTranslate(i[0]+this._offsetX,i[1]+this._offsetY),t=!0)}}return t?this._internalPlacement:null}}function Ie(e){if(!e)return null
switch(e.type){case"CIMGeometricEffectAddControlPoints":return a.local()
case"CIMGeometricEffectArrow":return d.local()
case"CIMGeometricEffectBuffer":return v.local()
case"CIMGeometricEffectControlMeasureLine":return y.local()
case"CIMGeometricEffectCut":return T.local()
case"CIMGeometricEffectDashes":return I.local()
case"CIMGeometricEffectDonut":return A.local()
case"CIMGeometricEffectJog":return F.local()
case"CIMGeometricEffectMove":return D.local()
case"CIMGeometricEffectOffset":return B.local()
case"CIMGeometricEffectReverse":return N.local()
case"CIMGeometricEffectRotate":return G.local()
case"CIMGeometricEffectScale":return H.local()
case"CIMGeometricEffectWave":return X.local()}return null}function Pe(e){if(!e)return null
switch(e.type){case"CIMMarkerPlacementAlongLineSameSize":return Z.local()
case"CIMMarkerPlacementAtExtremities":return $.local()
case"CIMMarkerPlacementAtRatioPositions":return Q.local()
case"CIMMarkerPlacementInsidePolygon":return ne.local()
case"CIMMarkerPlacementOnLine":return ae.local()
case"CIMMarkerPlacementOnVertices":return le.local()
case"CIMMarkerPlacementPolygonCenter":return Me.local()}return null}},1488:function(e,t,i){"use strict"
i.d(t,"a",(function(){return z}))
var n=i(1555),r=i(23),s=i(1261),a=i(1022),o=i(1177),l=i(1315),c=i(984),u=i(1293)
class h extends o.a{constructor(){super(...arguments),this._color=Object(s.b)(0,1,0,1)}dispose(){this._program&&this._program.dispose()}prepareState({context:e}){e.setStencilTestEnabled(!0),e.setBlendingEnabled(!1),e.setFaceCullingEnabled(!1),e.setColorMask(!1,!1,!1,!1),e.setStencilOp(c.w.KEEP,c.w.KEEP,c.w.REPLACE),e.setStencilWriteMask(255),e.setStencilFunction(c.h.ALWAYS,0,255)}draw(e,t){const{context:i,state:n,requestRender:s,allowDelayedRender:o}=e,h=Object(a.g)("clip",{geometry:[{location:0,name:"a_pos",count:2,type:c.k.SHORT}]}),d=t.getVAO(i,n,h.attributes,h.bufferLayouts)
Object(r.k)(d.indexBuffer)||(this._program||(this._program=Object(u.a)(i,l.a)),o&&Object(r.l)(s)&&!this._program.compiled?s():(i.useProgram(this._program),this._program.setUniform2fv("u_coord_range",[1,1]),this._program.setUniform4fv("u_color",this._color),this._program.setUniformMatrix3fv("u_dvsMat3",n.displayMat3),i.bindVAO(d),i.drawElements(c.r.TRIANGLES,d.indexBuffer.size,c.k.UNSIGNED_INT,0),i.bindVAO()))}}var d=i(1e3)
class f extends o.a{constructor(){super(...arguments),this._desc={vsPath:"overlay/overlay",fsPath:"overlay/overlay",attributes:new Map([["a_pos",0],["a_uv",1]])}}dispose(){}prepareState({context:e}){e.setBlendingEnabled(!0),e.setColorMask(!0,!0,!0,!0),e.setBlendFunctionSeparate(c.b.ONE,c.b.ONE_MINUS_SRC_ALPHA,c.b.ONE,c.b.ONE_MINUS_SRC_ALPHA),e.setStencilWriteMask(0),e.setStencilTestEnabled(!0),e.setStencilFunction(c.h.GREATER,255,255)}draw(e,t){const{context:i,painter:n,requestRender:s,allowDelayedRender:o}=e
if(!t.isReady)return
const{computedOpacity:l,dvsMat3:u,isWrapAround:h,perspectiveTransform:f,texture:_}=t
e.timeline.begin(this.name)
const m=n.materialManager.getProgram(this._desc)
if(o&&Object(r.l)(s)&&!m.compiled)return void s()
const p=Object(a.g)("overlay",{geometry:[{location:0,name:"a_pos",count:2,type:c.k.FLOAT}],tex:[{location:1,name:"a_uv",count:2,type:c.k.UNSIGNED_SHORT}]}),g=t.getVAO(i,p.bufferLayouts,p.attributes)
if(!g)return
i.bindVAO(g),i.useProgram(m),i.bindTexture(_,d.N),m.setUniformMatrix3fv("u_dvsMat3",u),m.setUniform1i("u_texture",d.N),m.setUniform1f("u_opacity",l),m.setUniform2fv("u_perspective",f)
const b=h?10:4
i.drawArrays(c.r.TRIANGLE_STRIP,0,b),i.bindVAO(),e.timeline.end(this.name)}}var _=i(448),m=i(1003),p=i(1204),g=i(1023),b=i(1187)
class v extends p.a{dispose(){}getGeometryType(){return m.d.FILL}supportsSymbology(e){return e!==m.e.DOT_DENSITY}drawGeometry(e,t,i,n){const{context:s,painter:o,rendererInfo:l,requiredLevel:u,passOptions:h,requestRender:d,allowDelayedRender:f}=e,_=g.a.load(i.materialKey),p=Object(b.b)(_.data),v=Object(r.l)(h)&&"hittest"===h.type,x=o.materialManager,{shader:y,vertexLayout:O,hittestAttributes:T}=Object(r.v)(p.programSpec,function(e){const t={geometry:[{location:0,name:"a_pos",count:2,type:c.k.SHORT},{location:1,name:"a_id",count:3,type:c.k.UNSIGNED_BYTE},{location:2,name:"a_bitset",count:1,type:c.k.UNSIGNED_BYTE},{location:3,name:"a_color",count:4,type:c.k.UNSIGNED_BYTE,normalized:!0},{location:4,name:"a_aux1",count:4,type:c.k.UNSIGNED_SHORT},{location:5,name:"a_aux2",count:4,type:c.k.SHORT},{location:6,name:"a_aux3",count:4,type:c.k.UNSIGNED_BYTE},{location:7,name:"a_zoomRange",count:2,type:c.k.UNSIGNED_SHORT}]}
switch(e.symbologyType){case m.e.SIMPLE:case m.e.OUTLINE_FILL_SIMPLE:t.geometry.splice(7,1),t.geometry.splice(4,1)}return{shader:"materials/fill",vertexLayout:t}}(_))
let S=c.r.TRIANGLES,w=Object(a.g)(_.data,O)
v&&(w=this._getTriangleDesc(i.materialKey,w,T),S=c.r.POINTS)
const{attributes:E,bufferLayouts:M}=w,C=x.getMaterialProgram(e,_,y,E,n)
if(f&&Object(r.l)(d)&&!C.compiled)return void d()
if(s.useProgram(C),this._setSharedUniforms(C,e,t),C.setUniform2f("u_tileOffset",512*t.key.col,512*t.key.row),_.textureBinding){o.textureManager.bindTextures(s,C,_)
const e=1/2**(u-t.key.level)
C.setUniform1f("u_zoomFactor",e)}const I=1/e.pixelRatio
C.setUniform1f("u_blur",I),C.setUniform1f("u_antialiasing",I),this._setSizeVVUniforms(_,C,l,t),this._setColorAndOpacityVVUniforms(_,C,l)
const P=i.target.getVAO(s,M,E,v)
let A=i.indexCount,R=i.indexFrom*Uint32Array.BYTES_PER_ELEMENT
v&&(A/=3,R/=3),s.bindVAO(P),this._drawFills(e,t,C,S,A,R)}_drawFills(e,t,i,n,r,s){e.context.drawElements(n,r,c.k.UNSIGNED_INT,s)}}var x=i(1068),y=i(1171),O=i(1474),T=i(1072),S=i(1116),w=i(1556),E=i(1459),M=i(1316)
class C extends M.a{supportsSymbology(e){return e===m.e.PIE_CHART}_drawMarkers(e,t,i,n,r,s,a){const{context:o}=e,{rendererInfo:l}=e,{rendererSchema:u}=l
Object(b.a)(u,"pie-chart"),i.setUniform4fv("u_colors",u.colors),i.setUniform4fv("u_defaultColor",u.defaultColor),i.setUniform4fv("u_othersColor",u.othersColor),i.setUniform4fv("u_outlineColor",u.outlineColor),i.setUniform1f("u_donutRatio",u.holePercentage),i.setUniform1f("u_sectorThreshold",u.sectorThreshold),i.setUniform1f("u_outlineWidth",u.outlineWidth),o.drawElements(n,r,c.k.UNSIGNED_INT,s)}}var I=i(1460),P=i(1814),A=i(1815),R=i(1816),F=i(1817),L=i(1818)
class D extends p.a{dispose(){}getGeometryType(){return m.d.LABEL}supportsSymbology(e){return!0}drawGeometry(e,t,i,n){const{context:s,painter:o,state:l,rendererInfo:u,requestRender:h,allowDelayedRender:d}=e,f=g.b.load(i.materialKey),_=f.mapAligned?1:0
if(!_&&Math.abs(t.key.level-Math.round(100*e.displayLevel)/100)>=1)return
const{bufferLayouts:m,attributes:p}=(v=f,Object(a.g)(v.data,{geometry:[{location:0,name:"a_pos",count:2,type:c.k.SHORT},{location:1,name:"a_id",count:4,type:c.k.UNSIGNED_BYTE},{location:2,name:"a_color",count:4,type:c.k.UNSIGNED_BYTE,normalized:!0},{location:3,name:"a_haloColor",count:4,type:c.k.UNSIGNED_BYTE,normalized:!0},{location:4,name:"a_texAndSize",count:4,type:c.k.UNSIGNED_BYTE},{location:5,name:"a_refSymbolAndPlacementOffset",count:4,type:c.k.UNSIGNED_BYTE},{location:6,name:"a_glyphData",count:4,type:c.k.UNSIGNED_BYTE},{location:7,name:"a_vertexOffset",count:2,type:c.k.SHORT},{location:8,name:"a_texCoords",count:2,type:c.k.UNSIGNED_SHORT}]})),b=o.materialManager.getMaterialProgram(e,f,"materials/label",p,n)
var v
if(d&&Object(r.l)(h)&&!b.compiled)return void h()
e.context.setStencilFunction(c.h.EQUAL,0,255),s.useProgram(b),this._setSharedUniforms(b,e,t),o.textureManager.bindTextures(s,b,f)
const x=1===_?l.displayViewMat3:l.displayMat3
this._setSizeVVUniforms(f,b,u,t),b.setUniform1f("u_mapRotation",Math.floor(l.rotation/360*254)),b.setUniform1f("u_mapAligned",_),b.setUniformMatrix3fv("u_displayMat3",x),b.setUniform1f("u_opacity",1),b.setUniform2fv("u_screenSize",e.state.size)
const y=i.target.getVAO(s,m,p),O=i.indexFrom*Uint32Array.BYTES_PER_ELEMENT
s.bindVAO(y),b.setUniform1f("u_isHaloPass",0),b.setUniform1f("u_isBackgroundPass",1),s.drawElements(c.r.TRIANGLES,i.indexCount,c.k.UNSIGNED_INT,O),b.setUniform1f("u_isHaloPass",1),b.setUniform1f("u_isBackgroundPass",0),s.drawElements(c.r.TRIANGLES,i.indexCount,c.k.UNSIGNED_INT,O),b.setUniform1f("u_isHaloPass",0),b.setUniform1f("u_isBackgroundPass",0),s.drawElements(c.r.TRIANGLES,i.indexCount,c.k.UNSIGNED_INT,O),s.setStencilTestEnabled(!0),s.setBlendingEnabled(!0)}}class j extends p.a{dispose(){}getGeometryType(){return m.d.LINE}supportsSymbology(e){return!0}drawGeometry(e,t,i,n){const{context:s,painter:o,rendererInfo:l,displayLevel:u,passOptions:h,requestRender:d,allowDelayedRender:f}=e,_=g.c.load(i.materialKey),m=Object(r.l)(h)&&"hittest"===h.type
let p=(v=_,Object(a.g)(v.data,{geometry:[{location:0,name:"a_pos",count:2,type:c.k.SHORT},{location:1,name:"a_id",count:4,type:c.k.UNSIGNED_BYTE},{location:2,name:"a_color",count:4,type:c.k.UNSIGNED_BYTE,normalized:!0},{location:3,name:"a_offsetAndNormal",count:4,type:c.k.BYTE},{location:4,name:"a_accumulatedDistanceAndHalfWidth",count:2,type:c.k.UNSIGNED_SHORT},{location:5,name:"a_tlbr",count:4,type:c.k.UNSIGNED_SHORT},{location:6,name:"a_segmentDirection",count:4,type:c.k.BYTE},{location:7,name:"a_aux",count:2,type:c.k.UNSIGNED_SHORT},{location:8,name:"a_zoomRange",count:2,type:c.k.UNSIGNED_SHORT}]})),b=c.r.TRIANGLES
var v
m&&(p=this._getTriangleDesc(i.materialKey,p),b=c.r.POINTS)
const{attributes:x,bufferLayouts:y}=p,O=o.materialManager.getMaterialProgram(e,_,"materials/line",x,n)
if(f&&Object(r.l)(d)&&!O.compiled)return void d()
const T=1/e.pixelRatio
s.useProgram(O),this._setSharedUniforms(O,e,t),_.textureBinding&&o.textureManager.bindTextures(s,O,_)
const S=2**(u-t.key.level)
O.setUniform1f("u_zoomFactor",S),O.setUniform1f("u_blur",0+T),O.setUniform1f("u_antialiasing",T),this._setSizeVVUniforms(_,O,l,t),this._setColorAndOpacityVVUniforms(_,O,l),s.setFaceCullingEnabled(!1)
const w=i.target.getVAO(s,y,x,m)
let E=i.indexCount,M=i.indexFrom*Uint32Array.BYTES_PER_ELEMENT
m&&(E/=3,M/=3),s.bindVAO(w),s.drawElements(b,E,c.k.UNSIGNED_INT,M)}}class B extends p.a{dispose(){}getGeometryType(){return m.d.TEXT}supportsSymbology(e){return!0}drawGeometry(e,t,i,n){const{context:s,painter:o,rendererInfo:l,state:u,passOptions:h,requestRender:d,allowDelayedRender:f}=e,_=g.f.load(i.materialKey),m=Object(r.l)(h)&&"hittest"===h.type,{bufferLayouts:p,attributes:b}=(x=_,Object(a.g)(x.data,{geometry:[{location:0,name:"a_pos",count:2,type:c.k.SHORT},{location:1,name:"a_id",count:4,type:c.k.UNSIGNED_BYTE},{location:2,name:"a_color",count:4,type:c.k.UNSIGNED_BYTE,normalized:!0},{location:3,name:"a_haloColor",count:4,type:c.k.UNSIGNED_BYTE,normalized:!0},{location:4,name:"a_texFontSize",count:4,type:c.k.UNSIGNED_BYTE},{location:5,name:"a_aux",count:4,type:c.k.BYTE},{location:6,name:"a_zoomRange",count:2,type:c.k.UNSIGNED_SHORT},{location:7,name:"a_vertexOffset",count:2,type:c.k.SHORT},{location:8,name:"a_texCoords",count:2,type:c.k.UNSIGNED_SHORT}]})),v=o.materialManager.getMaterialProgram(e,_,"materials/text",b,n)
var x
if(f&&Object(r.l)(d)&&!v.compiled)return void d()
s.useProgram(v)
let y=c.r.TRIANGLES
m&&(y=c.r.POINTS),this._setSharedUniforms(v,e,t),o.textureManager.bindTextures(s,v,_),v.setUniformMatrix3fv("u_displayMat3",u.displayMat3),v.setUniformMatrix3fv("u_displayViewMat3",u.displayViewMat3),this._setSizeVVUniforms(_,v,l,t),this._setColorAndOpacityVVUniforms(_,v,l),this._setRotationVVUniforms(_,v,l)
const O=i.target.getVAO(s,p,b),T=i.indexFrom*Uint32Array.BYTES_PER_ELEMENT
v.setUniform1f("u_isHaloPass",0),v.setUniform1f("u_isBackgroundPass",1),s.bindVAO(O),s.drawElements(y,i.indexCount,c.k.UNSIGNED_INT,T),v.setUniform1f("u_isHaloPass",1),v.setUniform1f("u_isBackgroundPass",0),s.drawElements(c.r.TRIANGLES,i.indexCount,c.k.UNSIGNED_INT,T),v.setUniform1f("u_isHaloPass",0),v.setUniform1f("u_isBackgroundPass",0),s.drawElements(y,i.indexCount,c.k.UNSIGNED_INT,T)}}const z={marker:M.a,line:j,fill:v,text:B,label:D,clip:h,stencil:I.a,bitmap:n.a,overlay:f,tileInfo:E.a,vtlBackground:P.a,vtlFill:R.a,vtlLine:F.a,vtlCircle:A.a,vtlSymbol:L.a,dotDensity:class extends v{constructor(){super(...arguments),this._dotTextureSize=0,this._dotTextures=null,this._dotSamplers=new Int32Array([d.S,d.T]),this._dotVAO=null,this._dotDesc={vsPath:"dot/dot",fsPath:"dot/dot",attributes:new Map([["a_pos",0]])}}dispose(){super.dispose(),this._disposeTextures(),this._dotFBO=Object(r.f)(this._dotFBO),this._dotVAO=Object(r.f)(this._dotVAO)}getGeometryType(){return m.d.FILL}supportsSymbology(e){return e===m.e.DOT_DENSITY}_drawFills(e,t,i,n,s,a){const{passOptions:o}=e
if(Object(r.l)(o)&&"hittest"===o.type)super._drawFills(e,t,i,n,s,a)
else{const n=this._drawDotLocations(e,t,i,s,a)
this._drawDotDensity(e,t,n)}}_drawDotDensity(e,t,i){const{context:n,painter:s,rendererInfo:a,requestRender:o,allowDelayedRender:l}=e,u=s.materialManager.getProgram(this._dotDesc)
if(l&&Object(r.l)(o)&&!u.compiled)return void o()
const{rendererSchema:h}=a
Object(b.a)(h,"dot-density")
const d=this._createDotDensityMesh(n,this._dotDesc.attributes,{geometry:[{name:"a_pos",count:2,type:c.k.SHORT,divisor:0,normalized:!1,offset:0,stride:4}]})
n.setStencilTestEnabled(!0),n.useProgram(u),u.setUniform1f("u_tileZoomFactor",1),u.setUniform1i("u_texture",this._dotSamplers[0]),u.setUniform1f("u_dotSize",Math.max(h.dotSize,1)),u.setUniform1f("u_pixelRatio",window.devicePixelRatio),this._setSharedUniforms(u,e,t),n.bindTexture(i,this._dotSamplers[0]),n.bindVAO(d),n.drawArrays(c.r.POINTS,0,262144)}_drawDotLocations(e,t,i,n,r){const{context:s,rendererInfo:a,requiredLevel:o}=e,l=s.getViewport(),{rendererSchema:u}=a
Object(b.a)(u,"dot-density")
const{dotScale:h,colors:f,activeDots:_,backgroundColor:m,dotValue:p}=u
s.setViewport(0,0,512,512)
const g=s.getBoundFramebufferObject(),v=this._createFBO(s)
s.bindFramebuffer(v),s.setClearColor(0,0,0,0),s.clear(s.gl.COLOR_BUFFER_BIT|s.gl.STENCIL_BUFFER_BIT),s.setStencilTestEnabled(!1)
const x=1/2**(o-t.key.level),y=d.Z,O=y*window.devicePixelRatio*y*window.devicePixelRatio,T=1/x*(1/x),S=h?e.state.scale/h:1
return i.setUniform1f("u_tileZoomFactor",x),i.setUniform1f("u_tileDotsOverArea",O/(d.Z*window.devicePixelRatio*d.Z*window.devicePixelRatio)),i.setUniformMatrix4fv("u_dotColors",f),i.setUniform4fv("u_isActive",_),i.setUniform4fv("u_dotBackgroundColor",m),i.setUniform1f("u_dotValue",Math.max(1,p*S*T)),this._bindDotDensityTextures(s,i,a,y),s.drawElements(c.r.TRIANGLES,n,c.k.UNSIGNED_INT,r),s.setViewport(l.x,l.y,l.width,l.height),s.bindFramebuffer(g),v.colorTexture}_createFBO(e){if(Object(r.k)(this._dotFBO)){const t=512,i=512,n={target:c.A.TEXTURE_2D,pixelFormat:c.p.RGBA,dataType:c.q.UNSIGNED_BYTE,samplingMode:c.z.NEAREST,wrapMode:c.B.CLAMP_TO_EDGE,width:t,height:i},r={colorTarget:c.y.TEXTURE,depthStencilTarget:c.m.DEPTH_STENCIL_RENDER_BUFFER},s=new O.a(e,{width:t,height:i,internalFormat:c.s.DEPTH_STENCIL})
this._dotFBO=new y.a(e,r,n,s)}return this._dotFBO}_disposeTextures(){if(this._dotTextures){for(let e=0;e<this._dotTextures.length;e++)this._dotTextures[e].dispose()
this._dotTextures=null}}_bindDotDensityTextures(e,t,i,n){const{rendererSchema:r}=i
Object(b.a)(r,"dot-density")
const s=this._createDotDensityTextures(e,n,r.seed)
t.setUniform1iv("u_dotTextures",this._dotSamplers)
for(let t=0;t<s.length;t++)e.bindTexture(s[t],this._dotSamplers[t])}_createDotDensityMesh(e,t,i){if(Object(r.k)(this._dotVAO)){const n=2,r=new Int16Array(262144*n)
for(let e=0;e<512;e++)for(let t=0;t<512;t++)r[n*(t+512*e)]=t,r[n*(t+512*e)+1]=e
const s=x.a.createVertex(e,c.D.STATIC_DRAW,r)
this._dotVAO=new S.a(e,t,i,{geometry:s},null)}return this._dotVAO}_createDotDensityTextures(e,t,i){if(this._dotTextureSize===t&&this._seed===i||(this._disposeTextures(),this._dotTextureSize=t,this._seed=i),null===this._dotTextures){const n=new _.a(i)
this._dotTextures=[this._allocDotDensityTexture(e,t,n),this._allocDotDensityTexture(e,t,n)]}return this._dotTextures}_allocDotDensityTexture(e,t,i){const n=new Float32Array(t*t*4)
for(let e=0;e<n.length;e++)n[e]=i.getFloat()
return new T.a(e,{wrapMode:c.B.REPEAT,pixelFormat:c.p.RGBA,dataType:c.q.FLOAT,samplingMode:c.z.NEAREST,width:t,height:t},n)}},heatmap:w.a,pieChart:C}},1489:function(e,t,i){"use strict"
i.d(t,"a",(function(){return x}))
var n=i(445),r=(i(235),i(23)),s=i(1473),a=i(1088),o=i(984)
const l=["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uint","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"]
var c=i(1501),u=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"]
function h(e){return function(e){var t=function(){var e,t,i,n=0,r=0,s=999,a=[],o=[],l=1,h=0,d=0,f=!1,_=!1,m=""
return function(e){return o=[],null!==e?g(e.replace?e.replace(/\r\n/g,"\n"):e):(a.length&&p(a.join("")),s=10,p("(eof)"),o)}
function p(e){e.length&&o.push({type:u[s],data:e,position:d,line:l,column:h})}function g(t){var a
for(n=0,i=(m+=t).length;e=m[n],n<i;){switch(a=n,s){case 0:n=y()
break
case 1:case 2:n=x()
break
case 3:n=O()
break
case 4:n=w()
break
case 11:n=S()
break
case 5:n=E()
break
case 9999:n=M()
break
case 9:n=v()
break
case 999:n=b()}a!==n&&("\n"===m[a]?(h=0,++l):++h)}return r+=n,m=m.slice(n),o}function b(){return a=a.length?[]:a,"/"===t&&"*"===e?(d=r+n-1,s=0,t=e,n+1):"/"===t&&"/"===e?(d=r+n-1,s=1,t=e,n+1):"#"===e?(s=2,d=r+n,n):/\s/.test(e)?(s=9,d=r+n,n):(f=/\d/.test(e),_=/[^\w_]/.test(e),d=r+n,s=f?4:_?3:9999,n)}function v(){return/[^\s]/g.test(e)?(p(a.join("")),s=999,n):(a.push(e),t=e,n+1)}function x(){return"\r"!==e&&"\n"!==e||"\\"===t?(a.push(e),t=e,n+1):(p(a.join("")),s=999,n)}function y(){return"/"===e&&"*"===t?(a.push(e),p(a.join("")),s=999,n+1):(a.push(e),t=e,n+1)}function O(){if("."===t&&/\d/.test(e))return s=5,n
if("/"===t&&"*"===e)return s=0,n
if("/"===t&&"/"===e)return s=1,n
if("."===e&&a.length){for(;T(a););return s=5,n}if(";"===e||")"===e||"("===e){if(a.length)for(;T(a););return p(e),s=999,n+1}var i=2===a.length&&"="!==e
if(/[\w_\d\s]/.test(e)||i){for(;T(a););return s=999,n}return a.push(e),t=e,n+1}function T(e){for(var t,i,n=0;;){if(t=c.c.indexOf(e.slice(0,e.length+n).join("")),i=c.c[t],-1===t){if(n--+e.length>0)continue
i=e.slice(0,1).join("")}return p(i),d+=i.length,(a=a.slice(i.length)).length}}function S(){return/[^a-fA-F0-9]/.test(e)?(p(a.join("")),s=999,n):(a.push(e),t=e,n+1)}function w(){return"."===e||/[eE]/.test(e)?(a.push(e),s=5,t=e,n+1):"x"===e&&1===a.length&&"0"===a[0]?(s=11,a.push(e),t=e,n+1):/[^\d]/.test(e)?(p(a.join("")),s=999,n):(a.push(e),t=e,n+1)}function E(){return"f"===e&&(a.push(e),t=e,n+=1),/[eE]/.test(e)||"-"===e&&/[eE]/.test(t)?(a.push(e),t=e,n+1):/[^\d]/.test(e)?(p(a.join("")),s=999,n):(a.push(e),t=e,n+1)}function M(){if(/[^\d\w_]/.test(e)){var i=a.join("")
return s=c.b.indexOf(i)>-1?8:c.a.indexOf(i)>-1?7:6,p(a.join("")),s=999,n}return a.push(e),t=e,n+1}}(),i=[]
return(i=i.concat(t(e))).concat(t(null))}(e)}const d=["GL_OES_standard_derivatives","GL_EXT_frag_depth","GL_EXT_draw_buffers","GL_EXT_shader_texture_lod"]
function f(e,t){for(let i=t-1;i>=0;i--){const t=e[i]
if("whitespace"!==t.type&&"block-comment"!==t.type){if("keyword"!==t.type)break
if("attribute"===t.data||"in"===t.data)return!0}}return!1}function _(e,t,i,n){n=n||i
for(const r of e)if("ident"===r.type&&r.data===i)return n in t?t[n]++:t[n]=0,_(e,t,n+"_"+t[n],n)
return i}function m(e,t,i="afterVersion"){function n(e,t){for(let i=t;i<e.length;i++){const t=e[i]
if("operator"===t.type&&";"===t.data)return i}return null}const r={data:"\n",type:"whitespace"},s=t=>t<e.length&&/[^\r\n]$/.test(e[t].data)
let a=function(e){let t=-1,r=0,s=-1
for(let a=0;a<e.length;a++){const o=e[a]
if("preprocessor"===o.type&&(o.data.match(/\#(if|ifdef|ifndef)\s+.+/)?++r:o.data.match(/\#endif\s*.*/)&&--r),"afterVersion"!==i&&"afterPrecision"!==i||"preprocessor"===o.type&&/^#version/.test(o.data)&&(s=Math.max(s,a)),"afterPrecision"===i&&"keyword"===o.type&&"precision"===o.data){const t=n(e,a)
if(null===t)throw new Error("precision statement not followed by any semicolons!")
s=Math.max(s,t)}t<s&&0===r&&(t=a)}return t+1}(e)
s(a-1)&&e.splice(a++,0,r)
for(const i of t)e.splice(a++,0,i)
s(a-1)&&s(a)&&e.splice(a,0,r)}function p(e,t,i,n="lowp"){m(e,[{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:n},{type:"whitespace",data:" "},{type:"keyword",data:i},{type:"whitespace",data:" "},{type:"ident",data:t},{type:"operator",data:";"}],"afterPrecision")}function g(e,t,i,n,r="lowp"){m(e,[{type:"keyword",data:"layout"},{type:"operator",data:"("},{type:"keyword",data:"location"},{type:"whitespace",data:" "},{type:"operator",data:"="},{type:"whitespace",data:" "},{type:"integer",data:n.toString()},{type:"operator",data:")"},{type:"whitespace",data:" "},{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"keyword",data:i},{type:"whitespace",data:" "},{type:"ident",data:t},{type:"operator",data:";"}],"afterPrecision")}function b(e,t){let i,n,r=-1
for(let s=t;s<e.length;s++){const t=e[s]
if("operator"===t.type&&("["===t.data&&(i=s),"]"===t.data)){n=s
break}"integer"===t.type&&(r=parseInt(t.data,10))}return i&&n&&e.splice(i,n-i+1),r}function v(e,t){const i=(e,null)
if(Object(r.l)(i))return i
const n=h(e)
if("300 es"===function(e,t="100",i="300 es"){const n=/^\s*\#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/
for(const r of e)if("preprocessor"===r.type){const e=n.exec(r.data)
if(e){const n=e[1].replace(/\s\s+/g," ")
if(n===i)return n
if(n===t)return r.data="#version "+i,t
throw new Error("unknown glsl version: "+n)}}return e.splice(0,0,{type:"preprocessor",data:"#version "+i},{type:"whitespace",data:"\n"}),null}(n,"100","300 es"))return e
let s=null,a=null
const c={},u={}
for(let e=0;e<n.length;++e){const i=n[e]
switch(i.type){case"keyword":t===o.u.VERTEX_SHADER&&"attribute"===i.data?i.data="in":"varying"===i.data&&(i.data=t===o.u.VERTEX_SHADER?"out":"in")
break
case"builtin":if(/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(i.data.trim())&&(i.data=i.data.replace(/(2D|Cube|EXT)/g,"")),t===o.u.FRAGMENT_SHADER&&"gl_FragColor"===i.data&&(s||(s=_(n,c,"fragColor"),p(n,s,"vec4")),i.data=s),t===o.u.FRAGMENT_SHADER&&"gl_FragData"===i.data){const t=b(n,e+1),r=_(n,c,"fragData")
g(n,r,"vec4",t,"mediump"),i.data=r}else t===o.u.FRAGMENT_SHADER&&"gl_FragDepthEXT"===i.data&&(a||(a=_(n,c,"gl_FragDepth")),i.data=a)
break
case"ident":if(l.includes(i.data)){if(t===o.u.VERTEX_SHADER&&f(n,e))throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es")
i.data in u||(u[i.data]=_(n,c,i.data)),i.data=u[i.data]}}}for(let e=n.length-1;e>=0;--e){const t=n[e]
if("preprocessor"===t.type){const i=t.data.match(/\#extension\s+(.*)\:/)
if(i&&i[1]&&d.includes(i[1].trim())){const t=n[e+1]
n.splice(e,t&&"whitespace"===t.type?2:1)}const r=t.data.match(/\#ifdef\s+(.*)/)
r&&r[1]&&d.includes(r[1].trim())&&(t.data="#if 1")
const s=t.data.match(/\#ifndef\s+(.*)/)
s&&s[1]&&d.includes(s[1].trim())&&(t.data="#if 0")}}return function(e,t){return t}(0,function(e){return e.map(e=>"eof"!==e.type?e.data:"").join("")}(n))}new Map
class x{constructor(e,t,i,n,r=new Map){this._context=e,this._locations=n,this._uniformBlockBindings=r,this._refCount=1,this._compiled=!1,this._nameToUniformLocation={},this._nameToUniform1={},this._nameToUniform1v=new Map,this._nameToUniform2=new Map,this._nameToUniform3=new Map,this._nameToUniform4=new Map,this._nameToUniformMatrix3=new Map,this._nameToUniformMatrix4=new Map,e||console.error("RenderingContext isn't initialized!"),0===t.length&&console.error("Shaders source should not be empty!"),this._context.type===a.a.WEBGL2&&(t=v(t,o.u.VERTEX_SHADER),i=v(i,o.u.FRAGMENT_SHADER)),this._vShader=y(this._context,o.u.VERTEX_SHADER,t),this._fShader=y(this._context,o.u.FRAGMENT_SHADER,i),this._vShader&&this._fShader||console.error("Error loading shaders!"),this._context.instanceCounter.increment(o.t.Shader,this),Object(s.c)()&&(this.vertexShader=t,this.fragmentShader=i)
const l=this._context.gl,c=l.createProgram()
if(l.attachShader(c,this._vShader),l.attachShader(c,this._fShader),this._locations.forEach((e,t)=>l.bindAttribLocation(c,e,t)),l.linkProgram(c),Object(s.c)()&&!l.getProgramParameter(c,l.LINK_STATUS)&&console.error(`Could not link shader\nvalidated: ${l.getProgramParameter(c,l.VALIDATE_STATUS)}, gl error ${l.getError()}, vertex: ${l.getShaderParameter(this._vShader,l.COMPILE_STATUS)}, fragment: ${l.getShaderParameter(this._fShader,l.COMPILE_STATUS)}, info log: ${l.getProgramInfoLog(c)}, vertex source: ${this.vertexShader}, fragment source: ${this.fragmentShader}`),this._context.type===a.a.WEBGL2){const e=l
for(const[t,i]of this._uniformBlockBindings){const n=e.getUniformBlockIndex(c,t)
n<4294967295&&e.uniformBlockBinding(c,n,i)}}this._glName=c,this._context.instanceCounter.increment(o.t.Program,this)}get glName(){return this._glName}get hasGLName(){return Object(r.l)(this._glName)}get compiled(){if(this._compiled)return!0
const e=this._context.gl.getExtension("KHR_parallel_shader_compile")
return null==e||Object(r.k)(this.glName)?(this._compiled=!0,!0):(this._compiled=!!this._context.gl.getProgramParameter(this.glName,e.COMPLETION_STATUS_KHR),this._compiled)}dispose(){if(--this._refCount>0)return
const e=this._context.gl
this._vShader&&(e.deleteShader(this._vShader),this._vShader=null,this._context.instanceCounter.decrement(o.t.Shader,this)),this._fShader&&(e.deleteShader(this._fShader),this._fShader=null),this._glName&&(e.deleteProgram(this._glName),this._glName=null,this._context.instanceCounter.decrement(o.t.Program,this))}ref(){++this._refCount}_getUniformLocation(e){return void 0===this._nameToUniformLocation[e]&&Object(r.l)(this.glName)&&(++T.numUniforms,this._nameToUniformLocation[e]=this._context.gl.getUniformLocation(this.glName,e)),this._nameToUniformLocation[e]}hasUniform(e){return null!==this._getUniformLocation(e)}setUniform1i(e,t){const i=this._nameToUniform1[e]
void 0!==i&&t===i||(this._context.gl.uniform1i(this._getUniformLocation(e),t),this._nameToUniform1[e]=t)}setUniform1iv(e,t){O(this._nameToUniform1v,e,t)&&this._context.gl.uniform1iv(this._getUniformLocation(e),t)}setUniform2iv(e,t){O(this._nameToUniform2,e,t)&&this._context.gl.uniform2iv(this._getUniformLocation(e),t)}setUniform3iv(e,t){O(this._nameToUniform3,e,t)&&this._context.gl.uniform3iv(this._getUniformLocation(e),t)}setUniform4iv(e,t){O(this._nameToUniform4,e,t)&&this._context.gl.uniform4iv(this._getUniformLocation(e),t)}setUniform1f(e,t){const i=this._nameToUniform1[e]
void 0!==i&&t===i||(this._context.gl.uniform1f(this._getUniformLocation(e),t),this._nameToUniform1[e]=t)}setUniform1fv(e,t){O(this._nameToUniform1v,e,t)&&this._context.gl.uniform1fv(this._getUniformLocation(e),t)}setUniform2f(e,t,i){const n=this._nameToUniform2.get(e)
void 0===n?(this._context.gl.uniform2f(this._getUniformLocation(e),t,i),this._nameToUniform2.set(e,[t,i])):t===n[0]&&i===n[1]||(this._context.gl.uniform2f(this._getUniformLocation(e),t,i),n[0]=t,n[1]=i)}setUniform2fv(e,t){O(this._nameToUniform2,e,t)&&this._context.gl.uniform2fv(this._getUniformLocation(e),t)}setUniform3f(e,t,i,n){const r=this._nameToUniform3.get(e)
void 0===r?(this._context.gl.uniform3f(this._getUniformLocation(e),t,i,n),this._nameToUniform3[e]=[t,i,n]):t===r[0]&&i===r[1]&&n===r[2]||(this._context.gl.uniform3f(this._getUniformLocation(e),t,i,n),r[0]=t,r[1]=i,r[2]=n)}setUniform3fv(e,t){O(this._nameToUniform3,e,t)&&this._context.gl.uniform3fv(this._getUniformLocation(e),t)}setUniform4f(e,t,i,n,r){const s=this._nameToUniform4.get(e)
void 0===s?(this._context.gl.uniform4f(this._getUniformLocation(e),t,i,n,r),this._nameToUniform4.set(e,[t,i,n,r])):void 0!==s&&t===s[0]&&i===s[1]&&n===s[2]&&r===s[3]||(this._context.gl.uniform4f(this._getUniformLocation(e),t,i,n,r),s[0]=t,s[1]=i,s[2]=n,s[3]=r)}setUniform4fv(e,t){O(this._nameToUniform4,e,t)&&this._context.gl.uniform4fv(this._getUniformLocation(e),t)}setUniformMatrix3fv(e,t,i=!1){O(this._nameToUniformMatrix3,e,t)&&this._context.gl.uniformMatrix3fv(this._getUniformLocation(e),i,t)}setUniformMatrix4fv(e,t,i=!1){O(this._nameToUniformMatrix4,e,t)&&this._context.gl.uniformMatrix4fv(this._getUniformLocation(e),i,t)}stop(){}}function y(e,t,i){const n=e.gl,r=n.createShader(t)
return n.shaderSource(r,i),n.compileShader(r),Object(s.c)()&&!n.getShaderParameter(r,n.COMPILE_STATUS)&&(console.error("Compile error in ".concat(t===o.u.VERTEX_SHADER?"vertex":"fragment"," shader")),console.error(n.getShaderInfoLog(r)),console.error(function(e){let t=2
return e.replace(/\n/g,()=>"\n"+function(e){return e>=1e3?e.toString():("  "+e).slice(-3)}(t++)+":")}(i))),T.enabled&&(T.compiledLOC+=i.match(/\n/g).length+1),r}function O(e,t,i){const r=e.get(t)
return r?Object(n.r)(r,i):(e.set(t,Array.from(i)),!0)}const T={compiledLOC:0,numUniforms:0,enabled:!1}},1493:function(e,t,i){"use strict"
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
i.d(t,"a",(function(){return h})),i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return c}))
var n,r={},s={get exports(){return r},set exports(e){r=e}}
void 0!==(n=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"])&&(s.exports=n)
const a=r
var o,l={}
o={get exports(){return l},set exports(e){l=e}},function(e){var t=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"]
void 0!==t&&(o.exports=t)}()
const c=l
var u={}
!function(e){!function(t){var i=["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT","textureSize","texelFetch"]
void 0!==i&&(e.exports=i)}()}({get exports(){return u},set exports(e){u=e}})
const h=u},1512:function(e,t,i){"use strict"
i.d(t,"a",(function(){return o}))
var n=i(446),r=i(233),s=i(1003),a=i(1022)
function o(e){return Object(a.v)(e.minDataValue)&&Object(a.v)(e.maxDataValue)&&null!=e.minSize&&null!=e.maxSize?s.f.SIZE_MINMAX_VALUE:(e.expression&&"view.scale"===e.expression||e.valueExpression&&"$view.scale"===e.valueExpression)&&Array.isArray(e.stops)?s.f.SIZE_SCALE_STOPS:(null!=e.field||e.expression&&"view.scale"!==e.expression||e.valueExpression&&"$view.scale"!==e.valueExpression)&&(Array.isArray(e.stops)||"levels"in e&&e.levels)?s.f.SIZE_FIELD_STOPS:(null!=e.field||e.expression&&"view.scale"!==e.expression||e.valueExpression&&"$view.scale"!==e.valueExpression)&&null!=e.valueUnit?s.f.SIZE_UNIT_VALUE:(r.a.getLogger("esri.views.2d.engine.webgl").error(new n.a("mapview-bad-type","Found invalid size VisualVariable",e)),s.f.NONE)}},1516:function(e,t,i){"use strict"
i.d(t,"a",(function(){return E})),i(235)
var n=i(23),r=i(1151),s=i(1488),a=i(1502),o=i(446),l=i(233),c=i(978),u=i(1331),h=i(1303),d=i(1013),f=i(1026),_=i(1057),m=i(1062),p=i(1064),g=i(1068),b=i(984)
const v=(e,t,i,n)=>{let r=0
for(let n=1;n<i;n++){const i=e[2*(t+n-1)],s=e[2*(t+n-1)+1]
r+=(e[2*(t+n)]-i)*(e[2*(t+n)+1]+s)}return n?r>0:r<0},x=({coords:e,lengths:t},i)=>{const n=[]
for(let r=0,s=0;r<t.length;s+=t[r],r+=1){const a=s,o=[]
for(;r<t.length-1&&v(e,s+t[r],t[r+1],i);r+=1,s+=t[r])o.push(s+t[r]-a)
const l=e.slice(2*a,2*(s+t[r])),c=Object(h.a)(l,o,2)
for(const e of c)n.push(e+a)}return n}
class y{constructor(e,t,i,n=!1){this._cache={},this.vertices=e,this.indices=t,this.primitiveType=i,this.isMapSpace=n}static fromRect({x:e,y:t,width:i,height:n}){const r=e,s=t,a=r+i,o=s+n
return y.fromScreenExtent({xmin:r,ymin:s,xmax:a,ymax:o})}static fromPath(e){const t=Object(_.f)(new m.a,e.path,!1,!1),i=t.coords,n=new Uint32Array(x(t,!0)),r=new Uint32Array(i.length/2)
for(let e=0;e<r.length;e++)r[e]=Object(p.a)(Math.floor(i[2*e]),Math.floor(i[2*e+1]))
return new y({geometry:r},n,b.r.TRIANGLES)}static fromGeometry(e,t){var i
const n=null==(i=t.geometry)?void 0:i.type
switch(n){case"polygon":return y.fromPolygon(e,t.geometry)
case"extent":return y.fromMapExtent(e,t.geometry)
default:return l.a.getLogger("esri.views.2d.engine.webgl.Mesh2D").error(new o.a("mapview-bad-type","Unable to create a mesh from type "+n,t)),y.fromRect({x:0,y:0,width:1,height:1})}}static fromPolygon(e,t){const i=Object(_.h)(new m.a,t,!1,!1),n=i.coords,r=new Uint32Array(x(i,!1)),s=new Uint32Array(n.length/2),a=Object(f.d)(),o=Object(f.d)()
for(let t=0;t<s.length;t++)Object(d.s)(a,n[2*t],n[2*t+1]),e.toScreen(o,a),s[t]=Object(p.a)(Math.floor(o[0]),Math.floor(o[1]))
return new y({geometry:s},r,b.r.TRIANGLES,!0)}static fromScreenExtent({xmin:e,xmax:t,ymin:i,ymax:n}){const r={geometry:new Uint32Array([Object(p.a)(e,i),Object(p.a)(t,i),Object(p.a)(e,n),Object(p.a)(e,n),Object(p.a)(t,i),Object(p.a)(t,n)])},s=new Uint32Array([0,1,2,3,4,5])
return new y(r,s,b.r.TRIANGLES)}static fromMapExtent(e,t){const[i,n]=e.toScreen([0,0],[t.xmin,t.ymin]),[r,s]=e.toScreen([0,0],[t.xmax,t.ymax]),a={geometry:new Uint32Array([Object(p.a)(i,n),Object(p.a)(r,n),Object(p.a)(i,s),Object(p.a)(i,s),Object(p.a)(r,n),Object(p.a)(r,s)])},o=new Uint32Array([0,1,2,3,4,5])
return new y(a,o,b.r.TRIANGLES)}destroy(){Object(n.l)(this._cache.indexBuffer)&&this._cache.indexBuffer.dispose()
for(const e in this._cache.vertexBuffers)Object(n.l)(this._cache.vertexBuffers[e])&&this._cache.vertexBuffers[e].dispose()}get elementType(){return(e=>{switch(e.BYTES_PER_ELEMENT){case 1:return b.k.UNSIGNED_BYTE
case 2:return b.k.UNSIGNED_SHORT
case 4:return b.k.UNSIGNED_INT
default:throw new o.a("Cannot get DataType of array")}})(this.indices)}getIndexBuffer(e,t=b.D.STATIC_DRAW){return this._cache.indexBuffer||(this._cache.indexBuffer=g.a.createIndex(e,t,this.indices)),this._cache.indexBuffer}getVertexBuffers(e,t=b.D.STATIC_DRAW){return this._cache.vertexBuffers||(this._cache.vertexBuffers=Object.keys(this.vertices).reduce((i,n)=>({...i,[n]:g.a.createVertex(e,t,this.vertices[n])}),{})),this._cache.vertexBuffers}}var O=i(1116)
const T=e=>parseFloat(e)/100
class S extends u.a{constructor(e,t){super(),this._clip=t,this._cache={},this.stage=e,this._handle=Object(c.f)(()=>t.version,()=>this._invalidate()),this.ready()}static fromClipArea(e,t){return new S(e,t)}_destroyGL(){Object(n.l)(this._cache.mesh)&&(this._cache.mesh.destroy(),this._cache.mesh=null),Object(n.l)(this._cache.vao)&&(this._cache.vao.dispose(),this._cache.vao=null)}destroy(){this._destroyGL(),this._handle.remove()}getVAO(e,t,i,r){const[s,a]=t.size
if("geometry"!==this._clip.type&&this._lastWidth===s&&this._lastHeight===a||(this._lastWidth=s,this._lastHeight=a,this._destroyGL()),Object(n.k)(this._cache.vao)){const n=this._createMesh(t,this._clip),s=n.getIndexBuffer(e),a=n.getVertexBuffers(e)
this._cache.mesh=n,this._cache.vao=new O.a(e,i,r,a,s)}return this._cache.vao}_createTransforms(){return{dvs:Object(r.b)()}}_invalidate(){this._destroyGL(),this.requestRender()}_createScreenRect(e,t){const[i,n]=e.size,r="string"==typeof t.left?T(t.left)*i:t.left,s="string"==typeof t.right?T(t.right)*i:t.right,a="string"==typeof t.top?T(t.top)*n:t.top,o="string"==typeof t.bottom?T(t.bottom)*n:t.bottom,l=r,c=a
return{x:l,y:c,width:Math.max(i-s-l,0),height:Math.max(n-o-c,0)}}_createMesh(e,t){switch(t.type){case"rect":return y.fromRect(this._createScreenRect(e,t))
case"path":return y.fromPath(t)
case"geometry":return y.fromGeometry(e,t)
default:return l.a.getLogger("esri.views.2d.engine.webgl.ClippingInfo").error(new o.a("mapview-bad-type","Unable to create ClippingInfo mesh from clip of type: ${clip.type}")),y.fromRect({x:0,y:0,width:1,height:1})}}}var w=i(1003)
class E extends a.a{constructor(){super(...arguments),this.name=this.constructor.name}set clips(e){this._clips=e,this.children.forEach(t=>t.clips=e),this._updateClippingInfo()}beforeRender(e){super.beforeRender(e),this.updateTransforms(e.state)}_createTransforms(){return{dvs:Object(r.b)()}}doRender(e){const t=this.createRenderParams(e),{painter:i,globalOpacity:n,profiler:r,drawPhase:s}=t,a=s===w.c.LABEL||s===w.c.HIGHLIGHT?1:n*this.computedOpacity
r.recordContainerStart(this.name),i.beforeRenderLayer(t,this._clippingInfos?255:0,a),this.renderChildren(t),i.compositeLayer(t,a),r.recordContainerEnd()}renderChildren(e){Object(n.k)(this._renderPasses)&&(this._renderPasses=this.prepareRenderPasses(e.painter))
for(const t of this._renderPasses)try{t.render(e)}catch(e){}}createRenderParams(e){return e.requireFBO=this.requiresDedicatedFBO,e}prepareRenderPasses(e){return[e.registerRenderPass({name:"clip",brushes:[s.a.clip],target:()=>this._clippingInfos,drawPhase:w.c.MAP|w.c.LABEL|w.c.LABEL_ALPHA|w.c.DEBUG|w.c.HIGHLIGHT})]}updateTransforms(e){for(const t of this.children)t.setTransform(e)}onAttach(){super.onAttach(),this._updateClippingInfo()}onDetach(){super.onDetach(),this._updateClippingInfo()}_updateClippingInfo(){Object(n.l)(this._clippingInfos)&&(this._clippingInfos.forEach(e=>e.destroy()),this._clippingInfos=null)
const e=this.stage
if(!e)return
const t=this._clips
Object(n.l)(t)&&t.length&&(this._clippingInfos=t.items.map(t=>S.fromClipArea(e,t))),this.requestRender()}}},1525:function(e,t,i){"use strict"
i.d(t,"a",(function(){return d})),i.d(t,"b",(function(){return m})),i.d(t,"c",(function(){return g}))
var n=i(23),r=i(1015),s=i(1578),a=i(988),o=i(774)
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
await Object(r.g)(i.map(e=>({source:e,dest:t})))}const f=c.bind(null,o.lngLatToXY),_=c.bind(null,o.xyToLngLat)
function m(e,t,i,n){if(!e)return e
if(i||(i=t,t=e.spatialReference),!Object(a.l)(t)||!Object(a.l)(i)||Object(a.d)(t,i))return e
if(Object(o.canProject)(t,i)){const t=Object(a.p)(i)?f(e):_(e)
return t.spatialReference=i,t}return Object(r.r)(s.a,[e],t,i,null,n)[0]}const p=new class{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(e,t,i){if(!e||!e.length||!t||!i||Object(a.d)(t,i))return e
const n={geometries:e,inSpatialReference:t,outSpatialReference:i,resolve:null}
return this._jobs.push(n),new Promise(e=>{n.resolve=e,null===this._timer&&(this._timer=setTimeout(this._process,10))})}_process(){this._timer=null
const e=this._jobs.shift()
if(!e)return
const{geometries:t,inSpatialReference:i,outSpatialReference:n,resolve:l}=e
Object(o.canProject)(i,n)?Object(a.p)(n)?l(t.map(f)):l(t.map(_)):l(Object(r.r)(s.a,t,i,n,null,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}}
function g(e,t,i){return p.push(e,t,i)}},1527:function(e,t,i){"use strict"
i.d(t,"a",(function(){return n}))
class n{constructor(e=0,t=0,i=0,n=0){this.x=e,this.y=t,this.width=i,this.height=n}get isEmpty(){return this.width<=0||this.height<=0}union(e){this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.width=Math.max(this.width,e.width),this.height=Math.max(this.height,e.height)}}},1534:function(e,t,i){"use strict"
i.d(t,"a",(function(){return n}))
class n{constructor(){this.name=this.constructor.name}createOptions(e,t){return null}}},1535:function(e,t,i){"use strict"
i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return s}))
var n=i(110)
const r=new Map
async function s(e){const t=o(e)
let i=r.get(t)
if(i)return i
const s=new FontFace(e.family,`url('${n.default.fontsUrl}/woff2/${t}.woff2') format('woff2')`),a=document.fonts
return a.has(s)&&"loading"===s.status?s.loaded:(i=s.load(),r.set(t,i),a.add(s),i)}function a(e){if(!e)return"arial-unicode-ms"
const t=e.toLowerCase().split(" ").join("-")
switch(t){case"serif":return"noto-serif"
case"sans-serif":return"arial-unicode-ms"
case"monospace":return"ubuntu-mono"
case"fantasy":return"cabin-sketch"
case"cursive":return"redressed"
default:return t}}function o(e){const t=function(e){if(!e.weight)return""
switch(e.weight.toLowerCase()){case"bold":case"bolder":return"-bold"}return""}(e)+function(e){if(!e.style)return""
switch(e.style.toLowerCase()){case"italic":case"oblique":return"-italic"}return""}(e)
return a(e.family)+(t.length>0?t:"-regular")}},1537:function(e,t,i){"use strict"
i.d(t,"a",(function(){return X})),i.d(t,"b",(function(){return E}))
var n=i(990),r=i(1535),s=i(234),a=i(233),o=i(23),l=i(980),c=i(447),u=i(1010),h=i(1350),d=i(1030)
const f=new Set(["StartTimeOffset","Duration","RepeatDelay"])
function _(e,t){return f.has(t)?(i=e,.05*Math.max(Math.round(i/.05),1)):e
var i}var m=i(1684),p=i(1230),g=i(1582),b=i(1391),v=i(1e3),x=i(1696)
const y=a.a.getLogger("esri.symbols.cim.cimAnalyzer")
function O(e){switch(e){case"Butt":return d.e.BUTT
case"Square":return d.e.SQUARE
default:return d.e.ROUND}}function T(e){switch(e){case"Bevel":return d.p.BEVEL
case"Miter":return d.p.MITER
default:return d.p.ROUND}}function S(e,t,i,n){let r
e[t]?r=e[t]:(r={},e[t]=r),r[i]=n}function w(e){const t=e.markerPlacement
return t&&t.angleToLine?d.a.MAP:d.a.SCREEN}async function E(e,t,i,n,r){var s
const a=null!=n?n:[]
if(!e)return a
let l,c
const f={}
if("CIMSymbolReference"!==e.type)return y.error("Expect cim type to be 'CIMSymbolReference'"),a
if(l=e.symbol,c=e.primitiveOverrides,c){const e=[]
for(const i of c){const n=i.valueExpressionInfo
if(n&&t){const r=n.expression,s=Object(u.d)(r,t.spatialReference,t.fields).then(e=>{Object(o.k)(e)||S(f,i.primitiveName,i.propertyName,e)})
e.push(s)}else null!=i.value&&S(f,i.primitiveName,i.propertyName,i.value)}e.length>0&&await Promise.all(e)}const _=[]
switch(h.a.fetchResources(l,i,_),_.length>0&&await Promise.all(_),null==(s=l)?void 0:s.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":!function(e,t,i,n,r,s,a){var o
if(!e)return
const l=e.symbolLayers
if(!l)return
const c=e.effects
let u=d.a.SCREEN
const f=null!=(o=h.a.getSize(e))?o:0
"CIMPointSymbol"===e.type&&"Map"===e.angleAlignment&&(u=d.a.MAP)
let _=l.length
for(;_--;){const o=l[_]
if(!o||!1===o.enable)continue
let d
c&&c.length&&(d=[...c])
const m=o.effects
m&&m.length&&(c?d.push(...m):d=[...m])
const p=[]
let g
h.c.findEffectOverrides(d,t,p),g=p.length>0?W(d,p,i,n):d
const b=[]
switch(h.c.findApplicableOverrides(o,t,b),o.type){case"CIMSolidFill":M(o,g,i,b,n,r)
break
case"CIMPictureFill":C(o,g,i,b,n,s,r)
break
case"CIMHatchFill":I(o,g,i,b,n,r)
break
case"CIMGradientFill":P(o,g,i,b,n,r)
break
case"CIMSolidStroke":A(o,g,i,b,n,r,"CIMPolygonSymbol"===e.type,f)
break
case"CIMPictureStroke":R(o,g,i,b,n,r,"CIMPolygonSymbol"===e.type,f)
break
case"CIMGradientStroke":F(o,g,i,b,n,r,"CIMPolygonSymbol"===e.type,f)
break
case"CIMCharacterMarker":if(L(o,g,i,b,n,r))break
break
case"CIMPictureMarker":if(L(o,g,i,b,n,r))break
"CIMLineSymbol"===e.type&&(u=w(o)),D(o,g,i,b,n,s,r,u,f)
break
case"CIMVectorMarker":if(L(o,g,i,b,n,r))break
"CIMLineSymbol"===e.type&&(u=w(o)),j(o,g,i,b,n,r,s,u,f,a)
break
default:y.error("Cannot analyze CIM layer",o.type)}}}(l,c,f,t,a,i,!!r)}return a}function M(e,t,i,n,r,s){const a=e.primitiveName,o=Object(p.h)(e.color),[l,u]=q(n,a,t,null,null),h=Object(c.b)(JSON.stringify(e)+u).toString()
s.push({type:"fill",templateHash:h,materialHash:l?()=>h:h,cim:e,materialOverrides:null,colorLocked:!!e.colorLocked,color:V(a,i,"Color",r,o,U),height:0,angle:0,offsetX:0,offsetY:0,scaleX:1,effects:t,applyRandomOffset:!1,sampleAlphaOnly:!0})}function C(e,t,i,n,r,s,a){const l=e.primitiveName,u=Object(p.r)(e),[h,d]=q(n,l,t,null,null),f=Object(c.b)(JSON.stringify(e)+d).toString(),_=Object(c.b)(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString()
let m=Object(p.s)(e.scaleX)
if("width"in e&&"number"==typeof e.width){const t=e.width
let i=1
const n=s.getResource(e.url)
Object(o.l)(n)&&(i=n.width/n.height),m/=i*(e.height/t)}a.push({type:"fill",templateHash:f,materialHash:h?()=>_:_,cim:e,materialOverrides:null,colorLocked:!!e.colorLocked,effects:t,color:V(l,i,"TintColor",r,u,U),height:V(l,i,"Height",r,e.height),scaleX:V(l,i,"ScaleX",r,m),angle:V(l,i,"Rotation",r,Object(p.s)(e.rotation)),offsetX:V(l,i,"OffsetX",r,Object(p.s)(e.offsetX)),offsetY:V(l,i,"OffsetY",r,Object(p.s)(e.offsetY)),url:e.url,applyRandomOffset:!1,sampleAlphaOnly:!1})}function I(e,t,i,n,r,s){var a,o
const l=["Rotation","OffsetX","OffsetY"],u=n.filter(t=>t.primitiveName!==e.primitiveName||!l.includes(t.propertyName)),h=e.primitiveName
let[d,f]=q(n,h,t,null,null)
const _=Object(c.b)(JSON.stringify(e)+f).toString(),m=Object(c.b)(`${e.separation}${JSON.stringify(e.lineSymbol)}`).toString()
let g={r:255,g:255,b:255,a:1},b=!1
const v=null==(a=e.lineSymbol)||null==(o=a.symbolLayers)?void 0:o.find(e=>{var t
return"CIMSolidStroke"===e.type&&null!=(null==(t=i[e.primitiveName])?void 0:t.Color)})
if(v){g=Object(p.h)(v.color),g=V(v.primitiveName,i,"Color",r,g,U)
const e="function"==typeof g
d=d||e,b=null!=v.color||e}s.push({type:"fill",templateHash:_,materialHash:d?Y(m,i,u,r):m,cim:e,materialOverrides:u,colorLocked:!!e.colorLocked,effects:t,color:g,height:V(h,i,"Separation",r,e.separation),scaleX:1,angle:V(h,i,"Rotation",r,Object(p.s)(e.rotation)),offsetX:V(h,i,"OffsetX",r,Object(p.s)(e.offsetX)),offsetY:V(h,i,"OffsetY",r,Object(p.s)(e.offsetY)),applyRandomOffset:!1,sampleAlphaOnly:!0,hasUnresolvedReplacementColor:!b})}function P(e,t,i,n,r,s){const a=e.primitiveName,[o,l]=q(n,a,t,null,null),u=Object(c.b)(JSON.stringify(e)+l).toString()
s.push({type:"fill",templateHash:u,materialHash:o?Y(u,i,n,r):u,cim:e,materialOverrides:null,colorLocked:!!e.colorLocked,effects:t,color:{r:128,g:128,b:128,a:1},height:0,angle:0,offsetX:0,offsetY:0,scaleX:1,applyRandomOffset:!1,sampleAlphaOnly:!1})}function A(e,t,i,n,r,s,a,o){const l=e.primitiveName,u=Object(p.h)(e.color),h=null!=e.width?e.width:4,d=O(e.capStyle),f=T(e.joinStyle),_=e.miterLimit,[m,g]=q(n,l,t,null,null),b=Object(c.b)(JSON.stringify(e)+g).toString()
let v,x
if(t&&t instanceof Array&&t.length>0){const e=t[t.length-1]
if("CIMGeometricEffectDashes"===e.type&&"NoConstraint"===e.lineDashEnding&&null===e.offsetAlongLine){const e=(t=[...t]).pop()
v=e.dashTemplate,x=e.scaleDash}}s.push({type:"line",templateHash:b,materialHash:m?()=>b:b,cim:e,materialOverrides:null,isOutline:a,colorLocked:!!e.colorLocked,effects:t,color:V(l,i,"Color",r,u,U),width:V(l,i,"Width",r,h),cap:V(l,i,"CapStyle",r,d),join:V(l,i,"JoinStyle",r,f),miterLimit:_&&V(l,i,"MiterLimit",r,_),referenceWidth:o,zOrder:k(e.name),dashTemplate:v,scaleDash:x,sampleAlphaOnly:!0})}function R(e,t,i,n,r,s,a,o){const l=Object(c.b)(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString(),u=e.primitiveName,h=Object(p.r)(e),d=null!=e.width?e.width:4,f=O(e.capStyle),_=T(e.joinStyle),m=e.miterLimit,[g,b]=q(n,u,t,null,null),v=Object(c.b)(JSON.stringify(e)+b).toString()
s.push({type:"line",templateHash:v,materialHash:g?()=>l:l,cim:e,materialOverrides:null,isOutline:a,colorLocked:!!e.colorLocked,effects:t,color:V(u,i,"TintColor",r,h,U),width:V(u,i,"Width",r,d),cap:V(u,i,"CapStyle",r,f),join:V(u,i,"JoinStyle",r,_),miterLimit:m&&V(u,i,"MiterLimit",r,m),referenceWidth:o,zOrder:k(e.name),dashTemplate:null,scaleDash:!1,url:e.url,sampleAlphaOnly:!1})}function F(e,t,i,n,r,s,a,o){const l=e.primitiveName,u=null!=e.width?e.width:4,h=O(e.capStyle),d=T(e.joinStyle),f=e.miterLimit,[_,m]=q(n,l,t,null,null),p=Object(c.b)(JSON.stringify(e)+m).toString()
s.push({type:"line",templateHash:p,materialHash:_?Y(p,i,n,r):p,cim:e,materialOverrides:null,isOutline:a,colorLocked:!!e.colorLocked,effects:t,color:{r:128,g:128,b:128,a:1},width:V(l,i,"Width",r,u),cap:V(l,i,"CapStyle",r,h),join:V(l,i,"JoinStyle",r,d),miterLimit:f&&V(l,i,"MiterLimit",r,f),referenceWidth:o,zOrder:k(e.name),dashTemplate:null,scaleDash:!1,sampleAlphaOnly:!1})}function L(e,t,i,n,r,s){const{markerPlacement:a,type:o}=e
if(!a||"CIMMarkerPlacementInsidePolygon"!==a.type)return!1
if("CIMVectorMarker"===o||"CIMPictureMarker"===o){const i=e.primitiveName
if(i){const[e,r]=q(n,i,t,null,null)
if(e)return!1}const r=a.primitiveName
if(r){const[e,i]=q(n,r,t,null,null)
if(e)return!1}if("CIMVectorMarker"===o){const{markerGraphics:t}=e
if(t)for(const e of t){const{symbol:t}=e
if("CIMPolygonSymbol"===(null==t?void 0:t.type)&&t.symbolLayers){const{symbolLayers:e}=t
for(const t of e)if("CIMSolidStroke"===t.type)return!1}}}else{const{animatedSymbolProperties:t}=e
if(t)return!1}}const u=a,h=Math.abs(u.stepX),d=Math.abs(u.stepY)
if(0===h||0===d)return!0
const f=["Rotation","OffsetX","OffsetY"],_=n.filter(t=>t.primitiveName!==e.primitiveName||!f.includes(t.propertyName)),m="url"in e&&"string"==typeof e.url?e.url:void 0,[g,b]=q(n,u.primitiveName,t,null,null),x=Object(c.b)(JSON.stringify(e)+b).toString()
let y,O,T=null
if("Random"===a.gridType){const e=Object(l.i)(v.F),t=Math.max(Math.floor(e/h),1),i=Math.max(Math.floor(e/d),1)
y=d*i,T=e=>e?e*i:0,O=t*h/y}else a.shiftOddRows?(y=2*d,T=e=>e?2*e:0,O=h/d*.5):(y=d,T=null,O=h/d)
const S=Object(p.r)(e)
return s.push({type:"fill",templateHash:x,materialHash:g?Y(x,i,_,r):x,cim:e,materialOverrides:_,colorLocked:!!e.colorLocked,effects:t,color:V(u.primitiveName,i,"TintColor",r,S,U),height:V(u.primitiveName,i,"StepY",r,y,T),scaleX:O,angle:V(u.primitiveName,i,"GridAngle",r,u.gridAngle),offsetX:V(u.primitiveName,i,"OffsetX",r,Object(p.s)(u.offsetX)),offsetY:V(u.primitiveName,i,"OffsetY",r,Object(p.s)(u.offsetY)),url:m,applyRandomOffset:"Random"===a.gridType,sampleAlphaOnly:!m,hasUnresolvedReplacementColor:!0}),!0}function D(e,t,i,n,r,a,l,d,f){var m
const g=e.primitiveName,v=Object(p.s)(e.size)
let y=Object(p.s)(e.scaleX,1)
const O=Object(p.s)(e.rotation),T=Object(p.s)(e.offsetX),S=Object(p.s)(e.offsetY),w=Object(p.r)(e),E=Object(c.b)(`${e.url}${JSON.stringify(e.colorSubstitutions)}${JSON.stringify(e.animatedSymbolProperties)}`).toString(),M=H(e.markerPlacement,n,i,r),C=function(e,t,i,n){const r=[]
if(h.c.findApplicableOverrides(e,t,r),null==e||0===r.length)return e
for(const e of r)if(e.valueExpressionInfo&&null!=n&&n.geometryType){const t=i[e.primitiveName]&&i[e.primitiveName][e.propertyName]
t instanceof u.a&&(e.fn=(e,i,r)=>Object(b.a)(t,e,{$view:r},n.geometryType,i))}return(t,i,n)=>{for(const e of r)e.fn&&(e.value=e.fn(t,i,n))
const a=Object(s.a)(e),o=e.primitiveName
for(const e of r)if(e.primitiveName===o){const t=G(e.propertyName)
if(null!=e.value){const i=_(e.value,e.propertyName)
i!==a[t]&&(a[t]=i)}}return a}}(e.animatedSymbolProperties,n,i,r),[I,P]=q(n,g,t,M,C),A=Object(c.b)(JSON.stringify(e)+P).toString(),R=null!=(m=e.anchorPoint)?m:{x:0,y:0}
if("width"in e&&"number"==typeof e.width){const t=e.width
let i=1
const n=a.getResource(e.url)
Object(o.l)(n)&&(i=n.width/n.height),y/=i*(v/t)}function F(e,t){return Object(o.l)(C)?Object(p.g)(C,e,t):null}const L=e.animatedSymbolProperties&&!0===e.animatedSymbolProperties.randomizeStartTime?(e,t,i,n)=>{const r=Object(x.a)(null!=n?n:0),s=F(e,t)
return E+`-MATERIALGROUP(${r})`+`-ASP(${JSON.stringify(s)})`}:I?(e,t)=>{const i=F(e,t)
return E+`-ASP(${JSON.stringify(i)})`}:E
l.push({type:"marker",templateHash:A,materialHash:L,cim:e,materialOverrides:null,colorLocked:!!e.colorLocked,effects:t,scaleSymbolsProportionally:!1,alignment:d,size:V(g,i,"Size",r,v),scaleX:V(g,i,"ScaleX",r,y),rotation:V(g,i,"Rotation",r,O),offsetX:V(g,i,"OffsetX",r,T),offsetY:V(g,i,"OffsetY",r,S),color:V(g,i,"TintColor",r,w,U),anchorPoint:{x:R.x,y:-R.y},isAbsoluteAnchorPoint:"Relative"!==e.anchorPointUnits,outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,frameHeight:0,rotateClockwise:!!e.rotateClockwise,referenceSize:f,sizeRatio:1,markerPlacement:M,url:e.url,animatedSymbolProperties:C})}function j(e,t,i,n,r,s,a,o,l,c){const u=e.markerGraphics
if(!u)return
let h=0
if(e.scaleSymbolsProportionally){const t=e.frame
t&&(h=t.ymax-t.ymin)}const d=H(e.markerPlacement,n,i,r)
for(const f of u)if(f){const u=f.symbol
if(!u)continue
switch(u.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":z(e,t,d,null,f,n,i,r,s,a,o,l,h,!!c)
break
case"CIMTextSymbol":B(e,t,d,f,i,n,r,s,o,l,h)}}}function B(e,t,i,n,s,a,o,l,u,d,f){var _,m
h.c.findApplicableOverrides(n,a,[])
const g=n.geometry
if(!("x"in g)||!("y"in g))return
const b=n.symbol,v=Object(p.i)(b),x=Object(p.j)(b.fontStyleName),y=Object(r.a)(b.fontFamilyName)
b.font={family:y,decoration:v,...x}
const O=e.frame,T=g.x-.5*(O.xmin+O.xmax),S=g.y-.5*(O.ymin+O.ymax),w=e.size/f,E=e.primitiveName,M=Object(p.s)(b.height)*w,C=Object(p.s)(b.angle),I=Object(p.s)(e.offsetX)+(Object(p.s)(b.offsetX)+T)*w,P=Object(p.s)(e.offsetY)+(Object(p.s)(b.offsetY)+S)*w,A=Object(p.h)(Object(p.m)(b))
let R=Object(p.h)(Object(p.p)(b)),F=null!=(_=Object(p.q)(b))?_:0
F||(R=Object(p.h)(Object(p.m)(b.haloSymbol)),b.haloSize&&(F=b.haloSize*w))
let L=null,D=null,j=0
if(b.callout&&"CIMBackgroundCallout"===b.callout.type){const e=b.callout
if(e.backgroundSymbol){const t=e.backgroundSymbol.symbolLayers
if(t)for(const e of t)"CIMSolidFill"===e.type?L=Object(p.h)(e.color):"CIMSolidStroke"===e.type&&(D=Object(p.h)(e.color),j=Object(p.s)(e.width))}}const[B,z]=q(a,E,t,i,null),N=JSON.stringify(e.effects)+Number(e.colorLocked).toString()+JSON.stringify(e.anchorPoint)+e.anchorPointUnits+JSON.stringify(e.markerPlacement)+e.size.toString(),k=Object(c.b)(JSON.stringify(n)+N+z).toString()
let U=V(n.primitiveName,s,"TextString",o,null!=(m=n.textString)?m:"",p.a,b.textCase)
if(null==U)return
const{fontStyleName:G}=b,W=y+(G?"-"+G.toLowerCase():"-regular"),H=W
"string"==typeof U&&U.includes("[")&&b.fieldMap&&(U=Object(p.f)(b.fieldMap,U,b.textCase)),l.push({type:"text",templateHash:k,materialHash:B||"function"==typeof U||U.match(/\[(.*?)\]/)?(e,t,i)=>H+"-"+Object(p.g)(U,e,t,i):H+"-"+Object(c.b)(U),cim:b,materialOverrides:null,colorLocked:!!e.colorLocked,effects:t,alignment:u,anchorPoint:{x:e.anchorPoint?e.anchorPoint.x:0,y:e.anchorPoint?e.anchorPoint.y:0},isAbsoluteAnchorPoint:"Relative"!==e.anchorPointUnits,fontName:W,decoration:v,weight:V(E,s,"Weight",o,x.weight),style:V(E,s,"Size",o,x.style),size:V(E,s,"Size",o,M),angle:V(E,s,"Rotation",o,C),offsetX:V(E,s,"OffsetX",o,I),offsetY:V(E,s,"OffsetY",o,P),horizontalAlignment:Object(p.k)(b.horizontalAlignment),verticalAlignment:Object(p.l)(b.verticalAlignment),text:U,color:A,outlineColor:R,outlineSize:F,backgroundColor:L,borderLineColor:D,borderLineWidth:j,referenceSize:d,sizeRatio:1,markerPlacement:i})}function z(e,t,i,n,r,s,a,l,u,h,d,f,_,b){const v=r.symbol,x=v.symbolLayers
if(!x)return
if(b)return void N(e,t,i,n,r,a,s,l,u,h,d,f,_)
let y=x.length
if(Z(x))return void function(e,t,i,n,r,s,a,l,u,h,d,f,_){var g
const b=r.geometry,v=s[0],x=s[1],y=Object(m.b)(b)
if(!y)return
const O="Relative"!==e.anchorPointUnits,[T,S,w]=Object(m.d)(y,e.frame,e.size,e.anchorPoint,O),E={type:"sdf",geom:b,asFill:!0},M=e.primitiveName,C=Object(p.s)(e.size),I=Object(p.s)(e.rotation),P=Object(p.s)(e.offsetX),A=Object(p.s)(e.offsetY),R=x.path,F=x.primitiveName,L=v.primitiveName,D=Object(p.h)(Object(p.m)(x)),j=Object(p.h)(Object(p.p)(v)),B=null!=(g=Object(p.q)(v))?g:0
let z=!1,N=""
for(const e of a)e.primitiveName!==F&&e.primitiveName!==L&&e.primitiveName!==M||(void 0!==e.value?N+=`-${e.primitiveName}-${e.propertyName}-${JSON.stringify(e.value)}`:e.valueExpressionInfo&&(z=!0))
Object(o.l)(i)&&"function"==typeof i&&(z=!0)
const k=JSON.stringify({...e,markerGraphics:null}),G=Object(c.b)(JSON.stringify(E)+R).toString(),W={type:"marker",templateHash:Object(c.b)(JSON.stringify(r)+JSON.stringify(x)+JSON.stringify(v)+k+N).toString(),materialHash:z?()=>G:G,cim:E,materialOverrides:null,colorLocked:!!e.colorLocked,effects:t,scaleSymbolsProportionally:!!e.scaleSymbolsProportionally,alignment:d,anchorPoint:{x:S,y:w},isAbsoluteAnchorPoint:O,size:V(e.primitiveName,l,"Size",u,C),rotation:V(e.primitiveName,l,"Rotation",u,I),offsetX:V(e.primitiveName,l,"OffsetX",u,P),offsetY:V(e.primitiveName,l,"OffsetY",u,A),scaleX:1,frameHeight:_,rotateClockwise:!!e.rotateClockwise,referenceSize:f,sizeRatio:T,color:V(F,l,"Color",u,D,U),outlineColor:V(L,l,"Color",u,j,U),outlineWidth:V(L,l,"Width",u,B),markerPlacement:i,path:R,animatedSymbolProperties:n}
h.push(W)}(e,t,i,n,r,x,s,a,l,u,d,f,_)
const O=g.a.applyEffects(v.effects,r.geometry,h.geometryEngine)
if(O)for(;y--;){const b=x[y]
if(b&&!1!==b.enable)switch(b.type){case"CIMSolidFill":case"CIMSolidStroke":{var T,S
const v=g.a.applyEffects(b.effects,O,h.geometryEngine),x=Object(m.b)(v)
if(!x)continue
const y="Relative"!==e.anchorPointUnits,[w,E,M]=Object(m.d)(x,e.frame,e.size,e.anchorPoint,y),C="CIMSolidFill"===b.type,I={type:"sdf",geom:v,asFill:C},P=e.primitiveName,A=null!=(T=Object(p.s)(e.size))?T:10,R=Object(p.s)(e.rotation),F=Object(p.s)(e.offsetX),L=Object(p.s)(e.offsetY),D=b.path,j=b.primitiveName,B=Object(p.h)(C?Object(p.m)(b):Object(p.p)(b)),z=C?{r:0,g:0,b:0,a:0}:Object(p.h)(Object(p.p)(b)),N=null!=(S=Object(p.q)(b))?S:0
if(!C&&!N)break
let k=!1,G=""
for(const e of s)e.primitiveName!==j&&e.primitiveName!==P||(void 0!==e.value?G+=`-${e.primitiveName}-${e.propertyName}-${JSON.stringify(e.value)}`:e.valueExpressionInfo&&(k=!0));(Object(o.l)(t)&&"function"==typeof t||Object(o.l)(i)&&"function"==typeof i)&&(k=!0)
const W=JSON.stringify({...e,markerGraphics:null}),H=Object(c.b)(JSON.stringify(I)+D).toString(),Y={type:"marker",templateHash:Object(c.b)(JSON.stringify(r)+JSON.stringify(b)+W+G).toString(),materialHash:k?()=>H:H,cim:I,materialOverrides:null,colorLocked:!!e.colorLocked,effects:t,scaleSymbolsProportionally:!!e.scaleSymbolsProportionally,alignment:d,anchorPoint:{x:E,y:M},isAbsoluteAnchorPoint:y,size:V(e.primitiveName,a,"Size",l,A),rotation:V(e.primitiveName,a,"Rotation",l,R),offsetX:V(e.primitiveName,a,"OffsetX",l,F),offsetY:V(e.primitiveName,a,"OffsetY",l,L),scaleX:1,frameHeight:_,rotateClockwise:!!e.rotateClockwise,referenceSize:f,sizeRatio:w,color:V(j,a,"Color",l,B,U),outlineColor:V(j,a,"Color",l,z,U),outlineWidth:V(j,a,"Width",l,N),markerPlacement:i,animatedSymbolProperties:n,path:D}
u.push(Y)
break}default:N(e,t,i,n,r,a,s,l,u,h,d,f,_)}}}function N(e,t,i,n,r,s,a,u,d,f,_,m,g){const b=function(e,t){return{type:e.type,enable:!0,name:e.name,colorLocked:e.colorLocked,primitiveName:e.primitiveName,anchorPoint:e.anchorPoint,anchorPointUnits:e.anchorPointUnits,offsetX:0,offsetY:0,rotateClockwise:e.rotateClockwise,rotation:0,size:e.size,billboardMode3D:e.billboardMode3D,depth3D:e.depth3D,frame:e.frame,markerGraphics:[t],scaleSymbolsProportionally:e.scaleSymbolsProportionally,respectFrame:e.respectFrame,clippingPath:e.clippingPath}}(e,r),v=["Rotation","OffsetX","OffsetY"],x=a.filter(t=>t.primitiveName!==e.primitiveName||!v.includes(t.propertyName))
let y=""
for(const e of a)void 0!==e.value&&(y+=`-${e.primitiveName}-${e.propertyName}-${JSON.stringify(e.value)}`)
const[O,T,S]=h.a.getTextureAnchor(b,f),w=e.primitiveName,E=Object(p.s)(e.rotation),M=Object(p.s)(e.offsetX),C=Object(p.s)(e.offsetY),I=Object(c.b)(JSON.stringify(b)+y).toString(),P={type:"marker",templateHash:I,materialHash:x.length>0||Object(o.l)(t)&&"function"==typeof t?Y(I,s,x,u):I,cim:b,materialOverrides:x,colorLocked:!!e.colorLocked,effects:t,scaleSymbolsProportionally:!!e.scaleSymbolsProportionally,alignment:_,anchorPoint:{x:O,y:T},isAbsoluteAnchorPoint:!1,size:Object(p.s)(e.size),rotation:V(w,s,"Rotation",u,E),offsetX:V(w,s,"OffsetX",u,M),offsetY:V(w,s,"OffsetY",u,C),color:{r:255,g:255,b:255,a:1},outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,scaleX:1,frameHeight:g,rotateClockwise:!!e.rotateClockwise,referenceSize:m,sizeRatio:S/Object(l.h)(e.size),markerPlacement:i,animatedSymbolProperties:n,avoidSDFRasterization:!0}
d.push(P)}function k(e){if(e&&0===e.indexOf("Level_")){const t=parseInt(e.substr(6),10)
if(!isNaN(t))return t}return 0}function U(e){if(!e||0===e.length)return null
const t=new n.a(e).toRgba()
return{r:t[0],g:t[1],b:t[2],a:t[3]}}function V(e,t,i,n,r,s,a){if(null==e)return r
const o=t[e]
if(o){const e=o[i]
if("string"==typeof e||"number"==typeof e||e instanceof Array)return s?s.call(null,e,a):e
if(null!=e&&e instanceof u.a&&null!=n&&n.geometryType)return(t,i,o)=>{let l=Object(b.a)(e,t,{$view:o},n.geometryType,i)
return null!==l&&s&&(l=s.call(null,l,a)),null!==l?l:r}}return r}function G(e){return e?e.charAt(0).toLowerCase()+e.substr(1):e}function W(e,t,i,n){for(const e of t)if(e.valueExpressionInfo&&null!=n&&n.geometryType){const t=i[e.primitiveName]&&i[e.primitiveName][e.propertyName]
t instanceof u.a&&(e.fn=(e,i,r)=>Object(b.a)(t,e,{$view:r},n.geometryType,i))}return(i,n,r)=>{for(const e of t)e.fn&&(e.value=e.fn(i,n,r))
const a=[]
for(let i of e){var o
const e=null==(o=i)?void 0:o.primitiveName
if(e){let n=!1
for(const r of t)if(r.primitiveName===e){const e=G(r.propertyName)
null!=r.value&&r.value!==i[e]&&(n||(i=Object(s.a)(i),n=!0),i[e]=r.value)}}a.push(i)}return a}}function H(e,t,i,n){const r=[]
if(h.c.findApplicableOverrides(e,t,r),null==e||0===r.length)return e
for(const e of r)if(e.valueExpressionInfo&&null!=n&&n.geometryType){const t=i[e.primitiveName]&&i[e.primitiveName][e.propertyName]
t instanceof u.a&&(e.fn=(e,i,r)=>Object(b.a)(t,e,{$view:r},n.geometryType,i))}return(t,i,n)=>{for(const e of r)e.fn&&(e.value=e.fn(t,i,n))
const a=Object(s.a)(e),o=e.primitiveName
for(const e of r)if(e.primitiveName===o){const t=G(e.propertyName)
null!=e.value&&e.value!==a[t]&&(a[t]=e.value)}return a}}function Y(e,t,i,n){for(const e of i)if(e.valueExpressionInfo&&null!=n&&n.geometryType){const i=t[e.primitiveName]&&t[e.primitiveName][e.propertyName]
i instanceof u.a&&(e.fn=(e,t,r)=>Object(b.a)(i,e,{$view:r},n.geometryType,t))}return(t,n,r)=>{for(const e of i)e.fn&&(e.value=e.fn(t,n,r))
return Object(c.b)(e+h.c.buildOverrideKey(i)).toString()}}function X(e,t){if(!t||0===t.length)return e
const i=Object(s.a)(e)
return h.c.applyOverrides(i,t),i}function q(e,t,i,n,r){let s=!1,a=""
for(const i of e)i.primitiveName===t&&(void 0!==i.value?a+=`-${i.primitiveName}-${i.propertyName}-${JSON.stringify(i.value)}`:i.valueExpressionInfo&&(s=!0))
return Object(o.l)(i)&&"function"==typeof i&&(s=!0),Object(o.l)(n)&&"function"==typeof n&&(s=!0),Object(o.l)(r)&&"function"==typeof r&&(s=!0),[s,a]}const Z=e=>e&&2===e.length&&e[0].enable&&e[1].enable&&"CIMSolidStroke"===e[0].type&&"CIMSolidFill"===e[1].type&&!e[0].effects&&!e[1].effects},1543:function(e,t,i){"use strict"
i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return n})),i.d(t,"d",(function(){return r})),i.d(t,"e",(function(){return d})),i.d(t,"f",(function(){return h})),i.d(t,"g",(function(){return c})),i.d(t,"h",(function(){return u}))
const n=Number.POSITIVE_INFINITY,r=Math.PI,s=2*r,a=128/r,o=r/180,l=1/Math.LN2
function c(e,t){return(e%=t)>=0?e:e+t}function u(e){return c(e*a,256)}function h(e){return Math.log(e)*l}function d(e,t,i){return e*(1-i)+t*i}},1548:function(e,t,i){"use strict"
i.d(t,"a",(function(){return o})),i.d(t,"b",(function(){return l}))
var n=i(1019),r=i(235)
let s=null,a=null
async function o(){return s||(s=async function(){const e=Object(r.a)("esri-csp-restrictions")?await Promise.all([i.e(756),i.e(473)]).then(i.bind(null,1978)).then(e=>e.l):await i.e(376).then(i.bind(null,1979)).then(e=>e.l)
a=await e.load({locateFile:e=>Object(n.b)("esri/core/libs/libtess/"+e)})}()),s}function l(e,t){const i=Math.max(e.length,128e3)
return a.triangulate(e,t,i)}},1549:function(e,t,i){"use strict"
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
i.d(t,"a",(function(){return a}))
var n=i(1109),r=i(1331),s=i(1150)
class a extends r.a{constructor(e,t,i,n,r,a,o=r,l=a){super(),this.triangleCountReportedInDebug=0,this.triangleCount=0,this.texture=null,this.key=new s.a(e),this.resolution=t,this.x=i,this.y=n,this.width=r,this.height=a,this.rangeX=o,this.rangeY=l}destroy(){this.texture&&(this.texture.dispose(),this.texture=null)}setTransform(e){const t=this.resolution/(e.resolution*e.pixelRatio),i=this.transforms.tileMat3,[r,s]=e.toScreenNoRotation([0,0],[this.x,this.y]),a=this.width/this.rangeX*t,o=this.height/this.rangeY*t
Object(n.o)(i,a,0,0,0,o,0,r,s,1),Object(n.l)(this.transforms.dvs,e.displayViewMat3,i)}}},1555:function(e,t,i){"use strict"
i.d(t,"a",(function(){return u}))
var n=i(23),r=i(1e3),s=i(1362),a=i(1177),o=i(984)
const l={nearest:{defines:[],samplingMode:o.z.NEAREST,mips:!1},bilinear:{defines:[],samplingMode:o.z.LINEAR,mips:!1},bicubic:{defines:["bicubic"],samplingMode:o.z.LINEAR,mips:!1},trilinear:{defines:[],samplingMode:o.z.LINEAR_MIPMAP_LINEAR,mips:!0}},c=(e,t,i)=>{if("dynamic"===i.samplingMode){const{state:i}=e,n=t.resolution/t.pixelRatio/i.resolution,r=Math.round(e.pixelRatio)!==e.pixelRatio,s=n>1.05||n<.95
return i.rotation||s||r||t.isSourceScaled||t.rotation?l.bilinear:l.nearest}return l[i.samplingMode]}
class u extends a.a{constructor(){super(...arguments),this._desc={vsPath:"raster/bitmap",fsPath:"raster/bitmap",attributes:new Map([["a_pos",0]])}}dispose(){this._quad&&this._quad.dispose()}prepareState({context:e}){e.setBlendingEnabled(!0),e.setColorMask(!0,!0,!0,!0),e.setStencilWriteMask(0),e.setStencilTestEnabled(!0)}draw(e,t){const{context:i,renderingOptions:a,painter:l,requestRender:u,allowDelayedRender:h}=e
if(!t.source||!t.isReady)return
const d=c(e,t,a),f=l.materialManager.getProgram(this._desc,d.defines)
if(h&&Object(n.l)(u)&&!f.compiled)return void u()
e.timeline.begin(this.name),"additive"===t.blendFunction?i.setBlendFunctionSeparate(o.b.ONE,o.b.ONE,o.b.ONE,o.b.ONE):i.setBlendFunctionSeparate(o.b.ONE,o.b.ONE_MINUS_SRC_ALPHA,o.b.ONE,o.b.ONE_MINUS_SRC_ALPHA),i.setStencilFunction(o.h.EQUAL,t.stencilRef,255),this._quad||(this._quad=new s.a(i,[0,0,1,0,0,1,1,1]))
const{coordScale:_,computedOpacity:m,transforms:p}=t
t.setSamplingProfile(d),t.bind(e.context,r.N),i.useProgram(f),f.setUniformMatrix3fv("u_dvsMat3",p.dvs),f.setUniform1i("u_texture",r.N),f.setUniform2fv("u_coordScale",_),f.setUniform1f("u_opacity",m),this._quad.draw(),e.timeline.end(this.name)}}},1556:function(e,t,i){"use strict"
i.d(t,"a",(function(){return b}))
var n=i(233),r=i(23),s=i(1003),a=i(1362),o=i(1316),l=i(1534),c=i(1187),u=i(1088),h=i(984),d=i(1171),f=i(1412),_=i(1474),m=i(1072)
const p=n.a.getLogger("esri.views.2d.engine.webgl.brushes.WGLBrushHeatmap")
function g(e){return"heatmap"===e.type}class b extends o.a{constructor(){super(...arguments),this.brushEffect=new x}supportsSymbology(e){return e===s.e.HEATMAP}dispose(){super.dispose(),this.brushEffect.dispose(),this.brushEffect=null}prepareState(){}drawGeometry(e,t,i,n){const{defines:r}=this.brushEffect.loadQualityProfile(e.context)
super.drawGeometry(e,t,i,n?[...n,...r]:r)}_drawMarkers(e,t,i,n,r,s,a){const{context:o,rendererInfo:l,state:u}=e,{rendererSchema:d}=l
Object(c.a)(d,"heatmap")
const{referenceScale:f,radius:_,isFieldActive:m}=d,p=_*(0!==f?f/u.scale:1)
i.setUniform1f("u_radius",p),a||(i.setUniform1f("u_isFieldActive",m),o.setStencilFunction(h.h.GEQUAL,t.stencilRef,255)),o.drawElements(n,r,h.k.UNSIGNED_INT,s)}}const v={vsPath:"heatmap/heatmapResolve",fsPath:"heatmap/heatmapResolve",attributes:new Map([["a_position",0]])}
class x extends l.a{constructor(){super(...arguments),this.name=this.constructor.name}createOptions({passOptions:e}){return e}dispose(){this._prevFBO=null,this._accumulateOutputTexture=Object(r.f)(this._accumulateOutputTexture),Object(r.l)(this._accumulateFramebuffer)&&this._accumulateFramebuffer.detachDepthStencilBuffer(),this._accumulateOutputStencilBuffer=Object(r.f)(this._accumulateOutputStencilBuffer),this._accumulateFramebuffer=Object(r.f)(this._accumulateFramebuffer),this._resolveGradientTexture=Object(r.f)(this._resolveGradientTexture),this._tileQuad=Object(r.f)(this._tileQuad)}bind(e){const{context:t,rendererInfo:i,passOptions:n}=e,{rendererSchema:s}=i;(!Object(r.l)(n)||"hittest"!==n.type)&&g(s)&&(this._prevFBO=t.getBoundFramebufferObject(),this._prevViewport=t.getViewport(),Object(c.a)(s,"heatmap"),this._loadResources(e),this._updateResources(t,s),t.bindFramebuffer(this._accumulateFramebuffer),t.setViewport(0,0,this._accumulateFramebuffer.width,this._accumulateFramebuffer.height),t.setStencilTestEnabled(!0),t.setBlendingEnabled(!0),t.setBlendFunction(h.b.ONE,h.b.ONE),t.setClearColor(0,0,0,0),t.clear(h.e.COLOR_BUFFER_BIT))}unbind(){this._prevFBO=null,this._prevViewport=null}draw(e){const{context:t,painter:i,rendererInfo:n,passOptions:s}=e,{rendererSchema:a}=n
if(Object(r.l)(s)&&"hittest"===s.type||!g(a))return
const{defines:o}=this.loadQualityProfile(t),l=i.materialManager.getProgram(v,o)
t.useProgram(l),t.bindFramebuffer(this._prevFBO),t.setViewport(0,0,this._prevViewport.width,this._prevViewport.height),t.setBlendFunction(h.b.ONE,h.b.ONE_MINUS_SRC_ALPHA),t.setStencilTestEnabled(!1)
const{radius:c,minDensity:u,densityRange:d}=a
t.bindTexture(this._accumulateOutputTexture,8),t.bindTexture(this._resolveGradientTexture,9),l.setUniform1i("u_texture",8),l.setUniform1i("u_gradient",9),l.setUniform2f("u_densityMinAndInvRange",u,1/d),l.setUniform1f("u_densityNormalization",3/(c*c*Math.PI)),this._tileQuad.draw()}_loadResources({context:e,painter:t}){const{dataType:i,samplingMode:n,pixelFormat:r,internalFormat:s,shadingRate:o,requiresSharedStencilBuffer:l}=this.loadQualityProfile(e),{width:c,height:u}=this._prevViewport,f=c*o,p=u*o
null!=this._accumulateOutputTexture||(this._accumulateOutputTexture=new m.a(e,{target:h.A.TEXTURE_2D,pixelFormat:r,internalFormat:s,dataType:i,samplingMode:n,wrapMode:h.B.CLAMP_TO_EDGE,width:f,height:p})),l||null!=this._accumulateOutputStencilBuffer||(this._accumulateOutputStencilBuffer=new _.a(e,{width:f,height:p,internalFormat:h.s.DEPTH_STENCIL})),null!=this._accumulateFramebuffer||(this._accumulateFramebuffer=new d.a(e,{},this._accumulateOutputTexture,l?t.getSharedStencilBuffer():this._accumulateOutputStencilBuffer)),null!=this._resolveGradientTexture||(this._resolveGradientTexture=new m.a(e,{target:h.A.TEXTURE_2D,pixelFormat:h.p.RGBA,dataType:h.q.UNSIGNED_BYTE,samplingMode:h.z.LINEAR,wrapMode:h.B.CLAMP_TO_EDGE})),null!=this._tileQuad||(this._tileQuad=new a.a(e,[0,0,1,0,0,1,1,1]))}_updateResources(e,t){const{gradientHash:i,gradient:n}=t
this._prevGradientHash!==i&&(this._resolveGradientTexture.resize(n.length/4,1),this._resolveGradientTexture.setData(n),this._prevGradientHash=i)
const{shadingRate:s,requiresSharedStencilBuffer:a}=this.loadQualityProfile(e),{width:o,height:l}=this._prevViewport,c=o*s,u=l*s,{width:d,height:f}=this._accumulateFramebuffer
if(d!==c||f!==u){const e=this._accumulateFramebuffer.depthStencilAttachment
if(a&&Object(r.l)(e)){const{width:t,height:i}=e.descriptor
t===c&&i===u||(p.errorOnce("Attempted to resize shared stencil buffer! Detaching instead."),this._accumulateFramebuffer.detachDepthStencilBuffer())}this._accumulateFramebuffer.resize(c,u)}a||e.blitFramebuffer(this._prevFBO,this._accumulateFramebuffer,0,0,this._prevFBO.width,this._prevFBO.height,0,0,this._accumulateFramebuffer.width,this._accumulateFramebuffer.height,h.e.STENCIL_BUFFER_BIT,h.z.NEAREST)}loadQualityProfile(e){if(Object(r.k)(this._qualityProfile)){const t=Object(f.a)(e,p),i=e.type===u.a.WEBGL1
this._qualityProfile={...t,requiresSharedStencilBuffer:i,shadingRate:i?1:.25,defines:t.dataType!==h.q.FLOAT?["heatmapPrecisionHalfFloat"]:[]}}return this._qualityProfile}}},1557:function(e,t,i){"use strict"
i.d(t,"a",(function(){return r}))
var n=i(1320)
const r={shaders:{vertexShader:Object(n.a)("tileInfo/tileInfo.vert"),fragmentShader:Object(n.a)("tileInfo/tileInfo.frag")},attributes:new Map([["a_pos",0]])}},1558:function(e,t,i){"use strict"
i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return r}))
const n=new(i(976).a)({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch",mesh:"mesh"})
function r(e){return n.toJSON(e)}function s(e){const{bandCount:t,attributeTable:i,colormap:n,pixelType:r}=e.raster.rasterInfo
return 1===t&&(null!=i||null!=n||"u8"===r||"s8"===r)}},1559:function(e,t,i){"use strict"
i.d(t,"a",(function(){return M})),i(982)
var n,r,s,a=i(1475),o=i(1617),l=i(235),c=i(23),u=i(1574),h=i(1057),d=i(1062),f=i(1549),_=i(983)
let m=0
const p=null!=(n=Object(l.a)("featurelayer-simplify-thresholds"))?n:[.5,.5,.5,.5],g=p[0],b=p[1],v=p[2],x=p[3],y=null!=(r=Object(l.a)("featurelayer-simplify-payload-size-factors"))?r:[1,2,4],O=y[0],T=y[1],S=y[2],w=null!=(s=Object(l.a)("featurelayer-simplify-mobile-factor"))?s:2,E=Object(l.a)("esri-mobile")
class M{constructor(e,t){this.type="FeatureSetReader",this.arcadeDeclaredClass="esri.arcade.Feature",this.seen=!1,this.instance=0,this._tx=0,this._ty=0,this._sx=1,this._sy=1,this._deleted=null,this._joined=[],this._objectIdToIndex=null,this._level=0,this._datetimeMetadata=null,this.contextTimeReference=null,this.instance=e,this._layerSchema=t}static createInstance(){return m++,m=m>65535?0:m,m}get isEmpty(){return Object(c.l)(this._deleted)&&this._deleted.countSet()===this.getSize()}set level(e){this._level=e}getAreaSimplificationThreshold(e,t){let i=1
const n=E?w:1
t>4e6?i=S*n:t>1e6?i=T*n:t>5e5?i=O*n:t>1e5&&(i=n)
let r=0
e>4e3?r=x*i:e>2e3?r=v*i:e>100?r=b:e>15&&(r=g)
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
return i&&(i.spatialReference=this._arcadeSpatialReference),i}get dateTimeReferenceFieldIndex(){return this._datetimeMetadata||(this._datetimeMetadata=o.a.create(this._layerSchema.fields,this._layerSchema)),this._datetimeMetadata}autocastArcadeDate(e,t){var i,n
return t&&t instanceof Date?this.isUnknownDateTimeField(e)?a.a.unknownDateJSToArcadeDate(t):a.a.dateJSAndZoneToArcadeDate(t,null!=(i=null==(n=this.contextTimeReference)?void 0:n.timeZone)?i:"system"):t}isUnknownDateTimeField(e){var t
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
for(const e of f){const t=a(d,_,p,e,i,s,c)
t&&h.push(t),p+=e*m}if(h.sort((e,t)=>{let n=c*e[2]-c*t[2]
return 0===n&&i&&(n=e[4]-t[4]),n}),h.length){let e=6*h[0][2]
u[0]=h[0][0]/e,u[1]=h[0][1]/e,i&&(e=6*h[0][4],u[2]=0!==e?h[0][3]/e:0),(u[0]<d[0]||u[0]>d[1]||u[1]<d[2]||u[1]>d[3]||i&&(u[2]<d[4]||u[2]>d[5]))&&(u.length=0)}if(!u.length){const e=t.lengths[0]?o(_,0,f[0],i,s):null
if(!e)return null
u[0]=e[0],u[1]=e[1],i&&e.length>2&&(u[2]=e[2])}return e}function a(e,t,i,n,s,a,o=1){const l=r(s,a)
let c=i,u=i+l,h=0,d=0,f=0,_=0,m=0
for(let i=0,r=n-1;i<r;i++,c+=l,u+=l){const i=t[c],n=t[c+1],r=t[c+2],a=t[u],o=t[u+1],l=t[u+2]
let p=i*o-a*n
_+=p,h+=(i+a)*p,d+=(n+o)*p,s&&(p=i*l-a*r,f+=(r+l)*p,m+=p),i<e[0]&&(e[0]=i),i>e[1]&&(e[1]=i),n<e[2]&&(e[2]=n),n>e[3]&&(e[3]=n),s&&(r<e[4]&&(e[4]=r),r>e[5]&&(e[5]=r))}if(_*o>0&&(_*=-1),m*o>0&&(m*=-1),!_)return null
const p=[h,d,.5*_]
return s&&(p[3]=f,p[4]=.5*m),p}function o(e,t,i,n,s){const a=r(n,s)
let o=t,d=t+a,f=0,_=0,m=0,p=0
for(let t=0,r=i-1;t<r;t++,o+=a,d+=a){const t=e[o],i=e[o+1],r=e[o+2],s=e[d],a=e[d+1],g=e[d+2],b=n?c(t,i,r,s,a,g):l(t,i,s,a)
if(b)if(f+=b,n){const e=h(t,i,r,s,a,g)
_+=b*e[0],m+=b*e[1],p+=b*e[2]}else{const e=u(t,i,s,a)
_+=b*e[0],m+=b*e[1]}}return f>0?n?[_/f,m/f,p/f]:[_/f,m/f]:i>0?n?[e[t],e[t+1],e[t+2]]:[e[t],e[t+1]]:null}function l(e,t,i,n){const r=i-e,s=n-t
return Math.sqrt(r*r+s*s)}function c(e,t,i,n,r,s){const a=n-e,o=r-t,l=s-i
return Math.sqrt(a*a+o*o+l*l)}function u(e,t,i,n){return[e+.5*(i-e),t+.5*(n-t)]}function h(e,t,i,n,r,s){return[e+.5*(n-e),t+.5*(r-t),i+.5*(s-i)]}},1578:function(e,t,i){"use strict"
i.d(t,"a",(function(){return n}))
const n={convertToGEGeometry:function(e,t){return null==t?null:e.convertJSONToGeometry(t)},exportPoint:function(e,t,i){const n=new r(e.getPointX(t),e.getPointY(t),i),s=e.hasZ(t),a=e.hasM(t)
return s&&(n.z=e.getPointZ(t)),a&&(n.m=e.getPointM(t)),n},exportPolygon:function(e,t,i){return new s(e.exportPaths(t),i,e.hasZ(t),e.hasM(t))},exportPolyline:function(e,t,i){return new a(e.exportPaths(t),i,e.hasZ(t),e.hasM(t))},exportMultipoint:function(e,t,i){return new o(e.exportPoints(t),i,e.hasZ(t),e.hasM(t))},exportExtent:function(e,t,i){const n=e.hasZ(t),r=e.hasM(t),s=new l(e.getXMin(t),e.getYMin(t),e.getXMax(t),e.getYMax(t),i)
if(n){const i=e.getZExtent(t)
s.zmin=i.vmin,s.zmax=i.vmax}if(r){const i=e.getMExtent(t)
s.mmin=i.vmin,s.mmax=i.vmax}return s}}
class r{constructor(e,t,i){this.x=e,this.y=t,this.spatialReference=i,this.z=void 0,this.m=void 0}}class s{constructor(e,t,i,n){this.rings=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,i&&(this.hasZ=i),n&&(this.hasM=n)}}class a{constructor(e,t,i,n){this.paths=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,i&&(this.hasZ=i),n&&(this.hasM=n)}}class o{constructor(e,t,i,n){this.points=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,i&&(this.hasZ=i),n&&(this.hasM=n)}}class l{constructor(e,t,i,n,r){this.xmin=e,this.ymin=t,this.xmax=i,this.ymax=n,this.spatialReference=r,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}},1579:function(e,t,i){"use strict"
i.d(t,"a",(function(){return _}))
var n=i(1304),r=i(980),s=i(1030),a=i(1287),o=i(1174),l=i(1e3),c=i(1064),u=i(1023),h=i(1182),d=i(1580),f=i(1327)
class _ extends(Object(d.a)(f.a)){constructor(e,t,i,n,o,h,d,f,_,m,p,g,b,v,x,y,O,T,S,w,E,M,C,I){super(),this._xOffset=Object(r.h)(b),this._yOffset=Object(r.h)(v),this._decoration=m||"none",this._backgroundColor=M,this._borderLineColor=C,this._borderLineSize=I,this._color=o,this._haloColor=h,this._haloSize=Math.min(Math.floor(5*Object(r.h)(Object(r.k)(i))),127),this._size=Math.min(Math.round(Object(r.h)(t)),127)
const P=Math.min(Math.round(Object(r.h)(n||t)),127)
this._referenceSize=Math.round(Math.sqrt(256*P)),this._scale=this._size/l.v,this._angle=g,this._justify=Object(a.d)(d||"center"),this._xAlignD=Object(a.e)(d||"center"),this._yAlignD=Object(a.g)(f||"baseline"),this._baseline="baseline"===(f||"baseline"),this._bitset=(_===s.a.MAP?1:0)|(p?1:0)<<1
const A=u.e.load(e)
A.sdf=!0,this._materialKey=A.data,this._lineWidth=Object(r.h)(x)||512,this._lineHeight=y||1,this._textPlacement=O,this._effects=T,this._isCIM=null!=S&&S,this._minMaxZoom=Object(c.a)(Math.round(w*l.A),Math.round(E*l.A))}static fromText(e,t){var i,r
const a=null==(i=e.font)?void 0:i.size,l=new _(e.materialKey,a,e.haloSize||0,a,e.color&&Object(o.c)(e.color)||0,e.haloColor&&Object(o.c)(e.haloColor)||0,e.horizontalAlignment,e.verticalAlignment,s.a.SCREEN,null==(r=e.font)?void 0:r.decoration,!1,e.angle||0,e.xoffset||0,e.yoffset||0,e.lineWidth||0,e.lineHeight||0,null,null,!1,h.b,h.a,e.backgroundColor&&Object(o.c)(e.backgroundColor),e.borderLineColor&&Object(o.c)(e.borderLineColor),e.borderLineSize),[,c]=Object(n.a)(e.text)
return l.bindTextInfo(null!=t?t:[],c),l._vertexBoundsScale=e.maxVVSize&&a?e.maxVVSize/a:1,l}static fromCIMText(e,t,i){var r
const s=e.scaleFactor||1,a=e.size*e.sizeRatio*s,[l,c]=Object(h.e)(e.scaleInfo,i),u=new _(e.materialKey,a,e.outlineSize*e.sizeRatio,e.referenceSize,Object(o.b)(e.color),Object(o.b)(e.outlineColor),e.horizontalAlignment,e.verticalAlignment,e.alignment,e.decoration,null!=(r=e.colorLocked)&&r,e.angle,e.offsetX*e.sizeRatio*s,e.offsetY*e.sizeRatio*s,512,1,e.markerPlacement,e.effects,!0,l,c,e.backgroundColor?Object(o.b)(e.backgroundColor):void 0,e.borderLineColor?Object(o.b)(e.borderLineColor):void 0,e.borderLineWidth),[,d]=Object(n.a)(e.text)
return u.bindTextInfo(t,d),u._vertexBoundsScale=e.maxVVSize?e.maxVVSize/a:1,u}}},1580:function(e,t,i){"use strict"
i.d(t,"a",(function(){return y}))
var n=i(23),r=i(980),s=i(1057),a=i(1581),o=i(1e3),l=i(1003),c=i(1064),u=i(1023),h=i(1373)
const d=Object(c.a)(4,4),f=Object(c.a)(4,2),_=Object(c.a)(4,6),m=[f,f,_,_],p=[f,_,f,_],g=[_,_,d,d],b=[d,d,_,_],v=[_,d,_,d],x=[d,_,d,_],y=e=>class extends e{constructor(...e){super(...e),this._isCIM=!1,this._vertexBoundsScale=1,this.geometryType=l.d.TEXT,this._aux=Object(c.b)(0,0,this._referenceSize,this._bitset)}bindTextInfo(e,t){e&&e.length?this._shapingInfo=Object(n.b)(e,e=>Object(h.a)(e,t,{scale:this._scale,angle:this._angle,xOffset:this._xOffset,yOffset:this._yOffset,hAlign:this._xAlignD,vAlign:this._yAlignD,maxLineWidth:Math.max(32,Math.min(this._lineWidth,512)),lineHeight:o.y*Math.max(.25,Math.min(this._lineHeight,4)),decoration:this._decoration,isCIM:this._isCIM,hasBackground:!!this._backgroundColor,borderLineSize:this._borderLineSize})):this._shapingInfo=null}_write(e,t,i,n){const r=t.getDisplayId()
this._writeGeometry(e,t,r,i,n)}_writeGeometry(e,t,i,r,a){const o=this._shapingInfo
if(Object(n.k)(o))return
if(Object(n.l)(this._textPlacement)){const n=null!=a?a:t.readLegacyGeometryForDisplay()
return this._writePlacedText(e,i,n,o,r)}const l=a?Object(s.q)(Object(s.d)(a),2):"esriGeometryPolygon"===t.geometryType?t.readCentroid():t.readGeometryForDisplay()
if(!Object(n.k)(l)){if(l.isPoint){const[t,n]=l.coords
if(!e.hasAggregates&&e.hasPixelBufferEnabled&&(t<0||t>=512||n<0||n>=512))return
return this._writeGlyphs(e,i,{x:t,y:n},o)}l.forEachVertex((t,n)=>this._writeGlyphs(e,i,{x:t,y:n},o))}}_writePlacedText(e,t,i,s,o){const l=Object(n.u)(this._textPlacement),c=a.a.getPlacement(i,l,Object(r.h)(1),e.tileKey,o.geometryEngine)
if(!c)return
let u=c.next()
for(;null!=u;){const i=-u.getAngle()
s.setRotation(i)
const n=u.tx,r=-u.ty
n<0||n>=512||r<0||r>=512||(this._writeGlyphs(e,t,{x:n,y:r},s),s.setRotation(-i)),u=c.next()}}_writeGlyphs(e,t,i,n){const r=u.e.load(this._materialKey),s=Object(c.a)(Math.round(8*i.x),Math.round(8*i.y)),a=this._vertexBoundsScale,{bounds:o,background:l,glyphs:h}=n
h.length>0&&(this._borderLineColor||this._backgroundColor)&&(r.textureBinding=h[0].textureBinding,e.recordStart(t,r.data,this.geometryType,!0),this._writeBackgroundGeometry(e,t,i,o,l),e.recordEnd())
const d=2*Math.max(o.width,o.height)
for(const l of n.glyphs)r.textureBinding=l.textureBinding,e.recordStart(t,r.data,this.geometryType,!0),e.vertexBounds(i.x+o.x+this._xOffset,i.y+o.y-this._yOffset,d*a,d*a),this._writeVertices(e,t,s,l),e.recordEnd()}_writeGlyph(e,t,i,n,r){const s=u.e.load(this._materialKey),a=Object(c.a)(Math.round(8*i),Math.round(8*n))
s.textureBinding=r.textureBinding,e.recordStart(t,s.data,this.geometryType,!0)
const o=r.bounds,l=this._vertexBoundsScale
e.vertexBounds(i+o.x*l,n+o.y*l,o.width*l,o.height*l),this._writeVertices(e,t,a,r),e.recordEnd()}_writeVertices(e,t,i,n){const r=e.vertexCount()
this._writeVertexCommon(e,t,i,n),e.vertexWrite(n.offsets.upperLeft),e.vertexWrite(n.texcoords.upperLeft),e.vertexEnd(),this._writeVertexCommon(e,t,i,n),e.vertexWrite(n.offsets.upperRight),e.vertexWrite(n.texcoords.upperRight),e.vertexEnd(),this._writeVertexCommon(e,t,i,n),e.vertexWrite(n.offsets.lowerLeft),e.vertexWrite(n.texcoords.lowerLeft),e.vertexEnd(),this._writeVertexCommon(e,t,i,n),e.vertexWrite(n.offsets.lowerRight),e.vertexWrite(n.texcoords.lowerRight),e.vertexEnd(),e.indexWrite(r+0),e.indexWrite(r+1),e.indexWrite(r+2),e.indexWrite(r+1),e.indexWrite(r+3),e.indexWrite(r+2)}_writeVertexCommon(e,t,i,n){const r=this._color,s=this._haloColor,a=Object(c.b)(0,0,this._referenceSize,this._bitset),o=Object(c.b)(0,0,this._size,this._haloSize)
e.vertexWrite(i),e.vertexWrite(t),e.vertexWrite(r),e.vertexWrite(s),e.vertexWrite(o),e.vertexWrite(a),e.vertexWrite(this._minMaxZoom)}_writeBackgroundVertex(e,t,i,n,r,s){const a=Object(c.b)(0,1,this._referenceSize,this._bitset),o=Object(c.b)(0,0,this._size,this._haloSize),l=Object(c.b)(0,0,0,0)
e.vertexWrite(i),e.vertexWrite(t),e.vertexWrite(n),e.vertexWrite(l),e.vertexWrite(o),e.vertexWrite(a),e.vertexWrite(this._minMaxZoom),e.vertexWrite(r),e.vertexWrite(s),e.vertexEnd()}_writeBackgroundQuad(e,t,i,n,r,s){const a=e.vertexCount()
this._writeBackgroundVertex(e,t,i,n,r.upperLeft,s[0]),this._writeBackgroundVertex(e,t,i,n,r.upperRight,s[1]),this._writeBackgroundVertex(e,t,i,n,r.lowerLeft,s[2]),this._writeBackgroundVertex(e,t,i,n,r.lowerRight,s[3]),e.indexWrite(a+0),e.indexWrite(a+1),e.indexWrite(a+2),e.indexWrite(a+1),e.indexWrite(a+3),e.indexWrite(a+2)}_writeBackgroundGeometry(e,t,i,n,r){const s=Object(c.a)(Math.round(8*i.x),Math.round(8*i.y)),{x:a,y:o,width:l,height:u}=n,h=2*Math.max(l,u)
if(e.vertexBounds(i.x+a+this._xOffset,i.y+o-this._yOffset,h*this._vertexBoundsScale,h*this._vertexBoundsScale),this._backgroundColor){const i=[d,d,d,d]
this._writeBackgroundQuad(e,t,s,this._backgroundColor,r.main,i)}if(this._borderLineColor||this._backgroundColor){const i=!!this._borderLineColor&&!!this._borderLineSize&&this._borderLineSize>0,[n,a,o,l,c]=i?[m,m,p,p,this._borderLineColor]:[g,b,v,x,this._backgroundColor]
this._writeBackgroundQuad(e,t,s,c,r.top,n),this._writeBackgroundQuad(e,t,s,c,r.bot,a),this._writeBackgroundQuad(e,t,s,c,r.left,o),this._writeBackgroundQuad(e,t,s,c,r.right,l)}}}},1581:function(e,t,i){"use strict"
i.d(t,"a",(function(){return s}))
var n=i(1080),r=i(1484)
class s{static getPlacement(e,t,i,s,a){const o=Object(r.b)(t)
if(!o)return null
const l=Object(n.c)(e)
return o.execute(l,t,i,s,a)}}},1582:function(e,t,i){"use strict"
i.d(t,"a",(function(){return o}))
var n=i(983),r=i(1080),s=i(1326),a=i(1484)
class o{static executeEffects(e,t,i,n){const o=Object(r.c)(t)
let l=new s.a(o)
for(const t of e){const e=Object(a.a)(t)
e&&(l=e.execute(l,t,96/72,i,n))}return l}static next(e){const t=e.next()
return Object(r.d)(t),t}static applyEffects(e,t,i){if(!e)return t
let r=new s.a(t)
for(const t of e){const e=Object(a.a)(t)
e&&(r=e.execute(r,t,1,null,i))}let o,l=null
for(;o=r.next();)l?Object(n.h)(l)?Object(n.h)(o)&&l.paths.push(...o.paths):Object(n.g)(l)&&Object(n.g)(o)&&l.rings.push(...o.rings):l=o
return l}}},1583:function(e,t,i){"use strict"
i.d(t,"a",(function(){return p}))
var n=i(23),r=i(980),s=i(1192),a=i(1173),o=i(1030),l=i(1174),c=i(1e3),u=i(1003),h=i(1064),d=i(1023),f=i(1182),_=i(1584),m=i(1327)
class p extends(Object(_.a)(m.a)){constructor(e,t,i,n,r,l,f,_,m,p,g,b,v,x,y,O,T,S,w,E,M,C,I){super(),this.angle=n,this.height=f,this.width=l,this.xOffset=t*w,this.yOffset=i*w,this._markerPlacement=E,this._effects=M,this._anchorX=O,this._anchorY=T,this._minMaxZoom=Object(h.a)(Math.round(C*c.A),Math.round(I*c.A))
const P=(x===o.a.MAP?c.l:c.m)|(g?c.j:0)|(v?c.n:0)|(b?c.o:0),A=y&&y.sdf,R=d.d.load(e)
R.sdf=A,R.pattern=!0,R.textureBinding=y.textureBinding,this._materialKey=R.data,this._fillColor=r,this._outlineColor=m,this._sizeOutlineWidth=Object(h.b)(Math.round(Math.min(Math.sqrt(128*l),255)),Math.round(Math.min(Math.sqrt(128*f),255)),Math.round(Math.min(Math.sqrt(128*p),255)),Math.round(Math.min(Math.sqrt(128*_),255)))
const F=y.rect.x+c.G,L=y.rect.y+c.G,D=F+y.width,j=L+y.height
this._offsets.xUpperLeft=F,this._offsets.yUpperLeft=L,this._offsets.xUpperRight=D,this._offsets.yUpperRight=L,this._offsets.xBottomLeft=F,this._offsets.yBottomLeft=j,this._offsets.xBottomRight=D,this._offsets.yBottomRight=j,R.symbologyType===u.e.PIE_CHART?(this._texUpperLeft=Object(h.a)(0,1),this._texUpperRight=Object(h.a)(1,1),this._texBottomLeft=Object(h.a)(0,0),this._texBottomRight=Object(h.a)(1,0)):(this._texUpperLeft=Object(h.a)(F,L),this._texUpperRight=Object(h.a)(D,L),this._texBottomLeft=Object(h.a)(F,j),this._texBottomRight=Object(h.a)(D,j)),l*=S,f*=S,l*=w,f*=w
const B=Math.round(64*S)
this._bitestAndDistRatio=Object(h.a)(P,B),this._computedWidth=l,this._computedHeight=f
const z=Object(a.c)(),N=Object(s.a)()
this._applyTransformation(N,z)}static fromCIMMarker(e,t,i){const s=t&&t.width||1,a=t&&t.height||1,c=e.size,u=s/a*e.scaleX,h=e.scaleSymbolsProportionally&&e.frameHeight?c/e.frameHeight:1,d=Object(l.b)(e.color),_=Object(l.b)(e.outlineColor),m=Object(r.h)(c),g=m*u,b=Object(r.h)(e.offsetX||0),v=Object(r.h)(e.offsetY||0),x=Object(r.h)(e.outlineWidth||0)*h,y=e.alignment||o.a.SCREEN,O=Object(r.h)(e.referenceSize),[T,S]=Object(f.e)(e.scaleInfo,i)
let w=e.rotation||0
e.rotateClockwise||(w=-w)
let E=0,M=0
const C=e.anchorPoint
C&&(e.isAbsoluteAnchorPoint?c&&(E=C.x/(c*u),M=C.y/c):(E=C.x,M=C.y))
const I=new p(e.materialKey,b,v,w,d,g,m,O,_,x,e.colorLocked,e.scaleSymbolsProportionally,!1,y,t,E,M,e.sizeRatio,Object(n.v)(e.scaleFactor,1),e.markerPlacement,e.effects,T,S)
return I._vertexBoundsScaleX=e.maxVVSize?e.maxVVSize/g:1,I._vertexBoundsScaleY=e.maxVVSize?e.maxVVSize/m:1,I}static fromPictureMarker(e,t){const i=Math.round(Object(r.h)(e.width)),n=Math.round(Object(r.h)(e.height)),s=c.E,a=Math.round(Object(r.h)(e.xoffset||0)),l=Math.round(Object(r.h)(e.yoffset||0)),u=new p(e.materialKey,a,l,e.angle,s,i,n,n,0,0,!1,!1,!1,o.a.SCREEN,t,0,0,1,1,null,null,f.b,f.a)
return u._vertexBoundsScaleX=e.maxVVSize?e.maxVVSize/e.width:1,u._vertexBoundsScaleY=e.maxVVSize?e.maxVVSize/e.height:1,u}static fromSimpleMarker(e,t){const i=Object(l.c)(e.color),n=Math.round(Object(r.h)(e.size)),s=n,a=Math.round(Object(r.h)(e.xoffset||0)),c=Math.round(Object(r.h)(e.yoffset||0)),u=e.style,h=e.outline,d=0|((null==h?void 0:h.color)&&Object(l.c)(h.color)),_=0|((null==h?void 0:h.width)&&Math.round(Object(r.h)(h.width))),m=new p(e.materialKey,a,c,e.angle,i,n,s,s,d,_,!1,!1,"esriSMSCross"===u||"esriSMSX"===u,o.a.SCREEN,t,0,0,126/64,1,null,null,f.b,f.a)
return m.boundsType="esriSMSCircle"===u?"circle":"square",m._vertexBoundsScaleX=e.maxVVSize?e.maxVVSize/e.size:1,m._vertexBoundsScaleY=e.maxVVSize?e.maxVVSize/e.size:1,m}static fromLineSymbolMarker(e,t){const i=Object(l.c)(e.color),n=Math.round(Object(r.h)(6*e.lineWidth)),s=n,a="cross"===e.style||"x"===e.style
let c
switch(e.placement){case"begin-end":c=o.f.Both
break
case"begin":c=o.f.JustBegin
break
case"end":c=o.f.JustEnd
break
default:c=o.f.None}const u={type:"CIMMarkerPlacementAtExtremities",angleToLine:!0,offset:0,extremityPlacement:c,offsetAlongLine:0},h=new p(e.materialKey,0,0,0,i,n,s,s/6,i,a?Math.round(Object(r.h)(e.lineWidth)):0,!1,!1,a,o.a.MAP,t,0,0,126/64,1,u,null,f.b,f.a)
return h.boundsType="circle"===e.style?"circle":"square",h}}},1584:function(e,t,i){"use strict"
i.d(t,"a",(function(){return p}))
var n=i(23),r=i(980),s=i(1215),a=i(1192),o=i(1013),l=i(1173),c=i(1057),u=i(1581),h=i(1e3),d=i(1003),f=i(1064),_=i(1023)
const m=3.14159265359/180,p=e=>class extends e{constructor(...e){super(...e),this.angle=0,this.xOffset=0,this.yOffset=0,this.width=0,this.height=0,this.boundsType="square",this._anchorX=0,this._anchorY=0,this._computedWidth=0,this._computedHeight=0,this._allowBorrowing=!0,this._vertexBoundsScaleX=1,this._vertexBoundsScaleY=1,this._offsets={xUpperLeft:0,yUpperLeft:0,xUpperRight:0,yUpperRight:0,xBottomLeft:0,yBottomLeft:0,xBottomRight:0,yBottomRight:0},this.geometryType=d.d.MARKER}_write(e,t,i,n){const r=t.getDisplayId()
e.recordStart(r,this._materialKey,this.geometryType,!0),this._writeGeometry(e,t,r,i,n),e.recordEnd()}_writeGeometry(e,t,i,r,s){if(Object(n.l)(this._markerPlacement))return this._writePlacedMarkers(e,t,r,s)
if(this._allowBorrowing=!0,!s&&"esriGeometryPoint"===t.geometryType){const n=t.getX(),r=t.getY()
if(!e.hasAggregates&&e.hasPixelBufferEnabled&&(n<0||n>=513||r<0||r>=513))return
return this._writeVertices(e,i,this._getPos(n,r),n,r)}const a=s?Object(c.q)(Object(c.d)(s),2):"esriGeometryPolygon"===t.geometryType?t.readCentroid():t.readGeometryForDisplay()
if(!Object(n.k)(a)){if(a.isPoint){const[t,n]=a.coords
if(!e.hasAggregates&&e.hasPixelBufferEnabled&&(t<0||t>=512||n<0||n>=512))return
return this._writeVertices(e,i,this._getPos(t,n),t,n)}a.forEachVertex((t,n)=>{const r=2*h.Z
t<-r||t>=r||n<-r||n>=r||this._writeVertices(e,i,this._getPos(t,n),t,n)})}}_writePlacedMarkers(e,t,i,s){const o=null!=s?s:t.readLegacyGeometryForDisplay(),c=u.a.getPlacement(o,Object(n.u)(this._markerPlacement),Object(r.h)(1),e.tileKey,i.geometryEngine)
if(!c)return
this._allowBorrowing="esriGeometryPolygon"!==t.geometryType
const h=t.getDisplayId(),d=Object(l.c)(),f=Object(a.a)()
let _=c.next()
for(;null!=_;){const t=_.tx,i=-_.ty
t>=-128&&t<=640&&i>=-128&&i<=640&&(this._applyTransformation(f,d,-_.getAngle()/m),this._writeVertices(e,h,this._getPos(t,i),t,i)),_=c.next()}}_writeVertices(e,t,i,n,r){const s=_.d.load(this._materialKey)
return s.symbologyType===d.e.HEATMAP?this._writeHeatmapVertices(e,t,i):this._writeMarkerVertices(e,t,s,i,n,r)}_writeMarkerVertices(e,t,i,n,r,s){const a=i.vvRotation,o=e.vertexCount()
let l=this._computedWidth*this._vertexBoundsScaleX,c=this._computedHeight*this._vertexBoundsScaleY
if(this.angle){const e=Math.max(l,c)
l=e,c=e}if(a){const e=Math.max(this.xOffset,this.yOffset)
l+=e,c+=e}this._allowBorrowing&&e.vertexBounds(r+this.xOffset,s-this.yOffset,l,c),e.vertexWrite(n),e.vertexWrite(this._offsetUpperLeft),e.vertexWrite(this._texUpperLeft),e.vertexWrite(this._bitestAndDistRatio),e.vertexWrite(t),e.vertexWrite(this._fillColor),e.vertexWrite(this._outlineColor),e.vertexWrite(this._sizeOutlineWidth),e.vertexWrite(this._minMaxZoom),e.vertexEnd(),e.vertexWrite(n),e.vertexWrite(this._offsetUpperRight),e.vertexWrite(this._texUpperRight),e.vertexWrite(this._bitestAndDistRatio),e.vertexWrite(t),e.vertexWrite(this._fillColor),e.vertexWrite(this._outlineColor),e.vertexWrite(this._sizeOutlineWidth),e.vertexWrite(this._minMaxZoom),e.vertexEnd(),e.vertexWrite(n),e.vertexWrite(this._offsetBottomLeft),e.vertexWrite(this._texBottomLeft),e.vertexWrite(this._bitestAndDistRatio),e.vertexWrite(t),e.vertexWrite(this._fillColor),e.vertexWrite(this._outlineColor),e.vertexWrite(this._sizeOutlineWidth),e.vertexWrite(this._minMaxZoom),e.vertexEnd(),e.vertexWrite(n),e.vertexWrite(this._offsetBottomRight),e.vertexWrite(this._texBottomRight),e.vertexWrite(this._bitestAndDistRatio),e.vertexWrite(t),e.vertexWrite(this._fillColor),e.vertexWrite(this._outlineColor),e.vertexWrite(this._sizeOutlineWidth),e.vertexWrite(this._minMaxZoom),e.vertexEnd(),this._writeIndices(e,o)}_writeHeatmapVertices(e,t,i){const n=e.vertexCount()
e.vertexWrite(i),e.vertexWrite(this._offsetUpperLeft),e.vertexWrite(t),e.vertexEnd(),e.vertexWrite(i),e.vertexWrite(this._offsetUpperRight),e.vertexWrite(t),e.vertexEnd(),e.vertexWrite(i),e.vertexWrite(this._offsetBottomLeft),e.vertexWrite(t),e.vertexEnd(),e.vertexWrite(i),e.vertexWrite(this._offsetBottomRight),e.vertexWrite(t),e.vertexEnd(),this._writeIndices(e,n)}_writeIndices(e,t){e.indexWrite(t+0),e.indexWrite(t+1),e.indexWrite(t+2),e.indexWrite(t+1),e.indexWrite(t+3),e.indexWrite(t+2)}_applyTransformation(e,t,i=0){Object(s.a)(e,Object(l.d)(this.xOffset,-this.yOffset)),null!=this.angle&&this.angle+i!==0&&Object(s.h)(e,e,m*(this.angle+i))
const n=this._computedWidth,r=this._computedHeight,a=-(.5+this._anchorX)*n,c=-(.5-this._anchorY)*r
Object(o.s)(t,a,c),Object(o.t)(t,t,e),this._offsetUpperLeft=Object(f.a)(16*t[0],16*t[1]),this._offsets.xUpperLeft=t[0],this._offsets.yUpperLeft=t[1],Object(o.s)(t,a+n,c),Object(o.t)(t,t,e),this._offsetUpperRight=Object(f.a)(16*t[0],16*t[1]),this._offsets.xUpperRight=t[0],this._offsets.yUpperRight=t[1],Object(o.s)(t,a,c+r),Object(o.t)(t,t,e),this._offsetBottomLeft=Object(f.a)(16*t[0],16*t[1]),this._offsets.xBottomLeft=t[0],this._offsets.yBottomLeft=t[1],Object(o.s)(t,a+n,c+r),Object(o.t)(t,t,e),this._offsetBottomRight=Object(f.a)(16*t[0],16*t[1]),this._offsets.xBottomRight=t[0],this._offsets.yBottomRight=t[1]}_getPos(e,t){return Object(f.a)(Math.round(8*e),Math.round(8*t))}}},1587:function(e,t,i){"use strict"
i.d(t,"a",(function(){return Le})),i.d(t,"b",(function(){return Fe}))
var n=i(446),r=i(233),s=i(973),a=i(1223),o=i(1003),l=i(1023),c=i(23),u=i(980),h=i(1174),d=i(1e3),f=i(1616),_=i(1064),m=i(1182),p=i(1057),g=i(1022),b=(i(1303),i(1548)),v=i(1468),x=i(1062)
function y(e,t,i,n,r,s,a){W=0
const o=(n-i)*s,l=r&&r.length,c=l?(r[0]-i)*s:o
let u,h,d,f,_,m=O(t,i,n,0,c,s,!0)
if(m&&m.next!==m.prev){if(l&&(m=function(e,t,i,n,r,s){const a=new Array
for(let r=0,o=n.length;r<o;r++){const l=O(e,t,i,n[r]*s,r<o-1?n[r+1]*s:i*s,s,!1)
l===l.next&&(l.steiner=!0),a.push(I(l))}a.sort(B)
for(const e of a)r=P(e,r)
return r}(t,i,n,r,m,s)),o>80*s){u=d=t[0+i*s],h=f=t[1+i*s]
for(let e=s;e<c;e+=s){const n=t[e+i*s],r=t[e+1+i*s]
u=Math.min(u,n),h=Math.min(h,r),d=Math.max(d,n),f=Math.max(f,r)}_=Math.max(d-u,f-h),_=0!==_?1/_:0}S(m,e,s,u,h,_,a,0)}}function O(e,t,i,n,r,s,a){let o
if(a===function(e,t,i,n,r,s){let a=0
for(let i=n,o=r-s;i<r;i+=s)a+=(e[o+t*s]-e[i+t*s])*(e[i+1+t*s]+e[o+1+t*s]),o=i
return a}(e,t,0,n,r,s)>0)for(let i=n;i<r;i+=s)o=M(i+t*s,e[i+t*s],e[i+1+t*s],o)
else for(let i=r-s;i>=n;i-=s)o=M(i+t*s,e[i+t*s],e[i+1+t*s],o)
return o&&j(o,o.next)&&(C(o),o=o.next),o}function T(e,t=e){if(!e)return e
let i,n=e
do{if(i=!1,n.steiner||!j(n,n.next)&&0!==A(n.prev,n,n.next))n=n.next
else{if(C(n),n=t=n.prev,n===n.next)break
i=!0}}while(i||n!==t)
return t}function S(e,t,i,n,r,s,a,o){if(!e)return
!o&&s&&(e=function e(t,i,n,r){let s
for(;s!==t;s=s.next){if(s=s||t,null===s.z&&(s.z=D(s.x,s.y,i,n,r)),s.prev.next!==s||s.next.prev!==s)return s.prev.next=s,s.next.prev=s,e(t,i,n,r)
s.prevZ=s.prev,s.nextZ=s.next}return t.prevZ.nextZ=null,t.prevZ=null,function(e){let t,i=1
for(;;){let n,r=e
e=null,t=null
let s=0
for(;r;){s++,n=r
let a=0
for(;a<i&&n;a++)n=n.nextZ
let o=i
for(;a>0||o>0&&n;){let i
0===a?(i=n,n=n.nextZ,o--):0!==o&&n?r.z<=n.z?(i=r,r=r.nextZ,a--):(i=n,n=n.nextZ,o--):(i=r,r=r.nextZ,a--),t?t.nextZ=i:e=i,i.prevZ=t,t=i}r=n}if(t.nextZ=null,i*=2,s<2)return e}}(t)}(e,n,r,s))
let l=e
for(;e.prev!==e.next;){const c=e.prev,u=e.next
if(s?E(e,n,r,s):w(e))t.push(c.index/i+a),t.push(e.index/i+a),t.push(u.index/i+a),C(e),e=u.next,l=u.next
else if((e=u)===l){o?1===o?S(e=z(e,t,i,a),t,i,n,r,s,a,2):2===o&&N(e,t,i,n,r,s,a):S(T(e),t,i,n,r,s,a,1)
break}}}function w(e){const t=e.prev,i=e,n=e.next
if(A(t,i,n)>=0)return!1
let r=e.next.next
const s=r
let a=0
for(;r!==e.prev&&(0===a||r!==s);){if(a++,F(t.x,t.y,i.x,i.y,n.x,n.y,r.x,r.y)&&A(r.prev,r,r.next)>=0)return!1
r=r.next}return!0}function E(e,t,i,n){const r=e.prev,s=e,a=e.next
if(A(r,s,a)>=0)return!1
const o=r.x<s.x?r.x<a.x?r.x:a.x:s.x<a.x?s.x:a.x,l=r.y<s.y?r.y<a.y?r.y:a.y:s.y<a.y?s.y:a.y,c=r.x>s.x?r.x>a.x?r.x:a.x:s.x>a.x?s.x:a.x,u=r.y>s.y?r.y>a.y?r.y:a.y:s.y>a.y?s.y:a.y,h=D(o,l,t,i,n),d=D(c,u,t,i,n)
let f=e.prevZ,_=e.nextZ
for(;f&&f.z>=h&&_&&_.z<=d;){if(f!==e.prev&&f!==e.next&&F(r.x,r.y,s.x,s.y,a.x,a.y,f.x,f.y)&&A(f.prev,f,f.next)>=0)return!1
if(f=f.prevZ,_!==e.prev&&_!==e.next&&F(r.x,r.y,s.x,s.y,a.x,a.y,_.x,_.y)&&A(_.prev,_,_.next)>=0)return!1
_=_.nextZ}for(;f&&f.z>=h;){if(f!==e.prev&&f!==e.next&&F(r.x,r.y,s.x,s.y,a.x,a.y,f.x,f.y)&&A(f.prev,f,f.next)>=0)return!1
f=f.prevZ}for(;_&&_.z<=d;){if(_!==e.prev&&_!==e.next&&F(r.x,r.y,s.x,s.y,a.x,a.y,_.x,_.y)&&A(_.prev,_,_.next)>=0)return!1
_=_.nextZ}return!0}function M(e,t,i,n){const r=V.create(e,t,i)
return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function C(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function I(e){let t=e,i=e
do{(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next}while(t!==e)
return i}function P(e,t){const i=function(e,t){let i=t
const n=e.x,r=e.y
let s,a=-1/0
do{if(r<=i.y&&r>=i.next.y&&i.next.y!==i.y){const e=i.x+(r-i.y)*(i.next.x-i.x)/(i.next.y-i.y)
if(e<=n&&e>a){if(a=e,e===n){if(r===i.y)return i
if(r===i.next.y)return i.next}s=i.x<i.next.x?i:i.next}}i=i.next}while(i!==t)
if(!s)return null
if(n===a)return s.prev
const o=s,l=s.x,c=s.y
let u,h=1/0
for(i=s.next;i!==o;)n>=i.x&&i.x>=l&&n!==i.x&&F(r<c?n:a,r,l,c,r<c?a:n,r,i.x,i.y)&&(u=Math.abs(r-i.y)/(n-i.x),(u<h||u===h&&i.x>s.x)&&L(i,e)&&(s=i,h=u)),i=i.next
return s}(e,t)
if(!i)return t
const n=U(i,e)
return T(n,n.next),T(i,i.next)}function A(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function R(e,t,i,n){return!!(j(e,t)&&j(i,n)||j(e,n)&&j(i,t))||A(e,t,i)>0!=A(e,t,n)>0&&A(i,n,e)>0!=A(i,n,t)>0}function F(e,t,i,n,r,s,a,o){return(r-a)*(t-o)-(e-a)*(s-o)>=0&&(e-a)*(n-o)-(i-a)*(t-o)>=0&&(i-a)*(s-o)-(r-a)*(n-o)>=0}function L(e,t){return A(e.prev,e,e.next)<0?A(e,t,e.next)>=0&&A(e,e.prev,t)>=0:A(e,t,e.prev)<0||A(e,e.next,t)<0}function D(e,t,i,n,r){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-i)*r)|e<<8))|e<<4))|e<<2))|e<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-n)*r)|t<<8))|t<<4))|t<<2))|t<<1))<<1}function j(e,t){return e.x===t.x&&e.y===t.y}function B(e,t){return e.x-t.x}function z(e,t,i,n){let r=e
do{const s=r.prev,a=r.next.next
!j(s,a)&&R(s,r,r.next,a)&&L(s,a)&&L(a,s)&&(t.push(s.index/i+n),t.push(r.index/i+n),t.push(a.index/i+n),C(r),C(r.next),r=e=a),r=r.next}while(r!==e)
return r}function N(e,t,i,n,r,s,a){let o=e
do{let e=o.next.next
for(;e!==o.prev;){if(o.index!==e.index&&k(o,e)){let l=U(o,e)
return o=T(o,o.next),l=T(l,l.next),S(o,t,i,n,r,s,a,0),void S(l,t,i,n,r,s,a,0)}e=e.next}o=o.next}while(o!==e)}function k(e,t){return e.next.index!==t.index&&e.prev.index!==t.index&&!function(e,t){let i=e
do{if(i.index!==e.index&&i.next.index!==e.index&&i.index!==t.index&&i.next.index!==t.index&&R(i,i.next,e,t))return!0
i=i.next}while(i!==e)
return!1}(e,t)&&L(e,t)&&L(t,e)&&function(e,t){let i=e,n=!1
const r=(e.x+t.x)/2,s=(e.y+t.y)/2
do{i.y>s!=i.next.y>s&&i.next.y!==i.y&&r<(i.next.x-i.x)*(s-i.y)/(i.next.y-i.y)+i.x&&(n=!n),i=i.next}while(i!==e)
return n}(e,t)}function U(e,t){const i=V.create(e.index,e.x,e.y),n=V.create(t.index,t.x,t.y),r=e.next,s=t.prev
return e.next=t,t.prev=e,i.next=r,r.prev=i,n.next=i,i.prev=n,s.next=n,n.prev=s,n}class V{constructor(){this.index=0,this.x=0,this.y=0,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}static create(e,t,i){const n=W<G.length?G[W++]:new V
return n.index=e,n.x=t,n.y=i,n.prev=null,n.next=null,n.z=null,n.prevZ=null,n.nextZ=null,n.steiner=!1,n}}const G=new Array
let W=0
for(let e=0;e<8096;e++)G.push(new V)
const H=new v.d(0,0,0,1,0),Y=new v.d(0,0,0,1,0)
function X(e,t,i){let n=0
for(let r=1;r<i;r++){const i=e[2*(t+r-1)],s=e[2*(t+r-1)+1]
n+=(e[2*(t+r)]-i)*(e[2*(t+r)+1]+s)}return n}function q(e,t,i,n,r){let s=0
for(let a=i;a<n;a+=3){const i=2*(e[a]-r),n=2*(e[a+1]-r),o=2*(e[a+2]-r)
s+=Math.abs((t[i]-t[o])*(t[n+1]-t[i+1])-(t[i]-t[n])*(t[o+1]-t[i+1]))}return s}H.setExtent(d.Z),Y.setExtent(d.Z)
var Z=i(1030),K=i(1705)
const $=e=>class extends e{constructor(...e){super(...e),this.tessellationProperties={},this._tessellationOptions={halfWidth:0,pixelCoordRatio:1,offset:0},this.geometryType=o.d.LINE}writeGeometry(e,t,i,n){this._writeGeometry(e,t,i,n)}_initializeTessellator(e){const t=l.c.load(this._materialKey),i=l.a.load(this._materialKey),n=this._tessellationOptions,r=t.vvSizeFieldStops||t.vvSizeMinMaxValue||t.vvSizeScaleStops||t.vvSizeUnitValue,s=this.tessellationProperties._halfWidth<d.Y&&!e&&!r
this.tessellationProperties.minMaxZoom=this._minMaxZoom,n.wrapDistance=65535,n.textured=this._isDashed||this._hasPattern,n.offset=this.tessellationProperties.offset,n.halfWidth=this.tessellationProperties._halfWidth
const a=s?0:1,o=Object(l.h)(i)?Q:J
this._lineTessellator=new K.a(o(this.tessellationProperties,a,a),ee(this.tessellationProperties),s)}_write(e,t,i,n){const r="esriGeometryPoint"===t.geometryType
e.recordStart(t.getDisplayId(),this._materialKey,this.geometryType,r),this._writeGeometry(e,t,n,r),e.recordEnd()}_writeGeometry(e,t,i,n){const r=null!=i?i:t.readLegacyGeometryForDisplay(),s=this._getLines(r,n)
Object(c.k)(s)||this._writeVertices(e,t,s)}_getLines(e,t){if(Object(c.k)(e))return null
const i=e.paths||e.rings
return Object(c.k)(i)?null:function(e,t){Y.setPixelMargin(t)
const i=Y,n=-t,r=d.Z+t
let s=[],a=!1,o=0
for(;o<e.length;){const t=[],l=e[o]
if(!l)return null
i.reset(v.a.LineString)
let[c,u]=l[0]
if(a)i.moveTo(c,u)
else{if(c<n||c>r||u<n||u>r){a=!0
continue}t.push({x:c,y:u})}let h=!1
const d=l.length
for(let e=1;e<d;++e)if(c+=l[e][0],u+=l[e][1],a)i.lineTo(c,u)
else{if(c<n||c>r||u<n||u>r){h=!0
break}t.push({x:c,y:u})}if(h)a=!0
else{if(a){const e=i.resultWithStarts()
if(e)for(const t of e)s.push(t)}else s.push({line:t,start:0})
o++,a=!1}}return s=s.filter(e=>e.line.length>1),0===s.length?null:s}(i,t?256:16)}_writeVertices(e,t,i){const n=t.getDisplayId(),r=e.vertexCount(),s=this.tessellationProperties,a=this._tessellationOptions
s.out=e,s.id=n,s.indexCount=0,s.vertexCount=0,s.offset=r,a.capType=this._capType,a.joinType=this._joinType
const o=l.a.load(this._materialKey)
this.tessellationProperties.key=Object(l.h)(o)?o:l.c.load(this._materialKey)
for(const{line:e,start:t}of i)a.initialDistance=t%65535,this._lineTessellator.tessellate(e,a)}},J=(e,t,i)=>(n,r,s,a,o,l,c,u,h,d,f)=>{const m=Object(_.a)(f,Math.ceil(16*e._halfWidth)),p=Object(_.b)(Math.round(16*c),Math.round(16*u),Math.round(16*h),Math.round(16*d)),g=Object(_.b)(16*o,16*l,0,e._bitset),b=e.out
return b.vertexBounds(n,r,t,i),b.vertexWrite(Object(_.a)(8*n,8*r)),b.vertexWrite(e.id),b.vertexWrite(e._fillColor),b.vertexWrite(p),b.vertexWrite(m),b.vertexWrite(e._tl),b.vertexWrite(e._br),b.vertexWrite(g),b.vertexWrite(Object(_.a)(Math.ceil(16*e._halfReferenceWidth),0)),b.vertexWrite(e.minMaxZoom),b.vertexEnd(),e.offset+e.vertexCount++},Q=(e,t,i)=>(n,r,s,a,o,c,u,h,d,f,m)=>{const p=Object(_.a)(16*e._halfWidth,16*e._halfReferenceWidth),g=Object(_.b)(16*u+128,16*h+128,16*d+128,16*f+128),b=e.out,v=e._bitset<<24|e.id
b.vertexBounds(n,r,t,i),b.vertexWrite(Object(_.a)(8*n,8*r)),b.vertexWrite(v),b.vertexWrite(e._fillColor)
const x=Object(l.i)(e.key)
return x||(b.vertexWrite(0),b.vertexWrite(0)),b.vertexWrite(0),b.vertexWrite(p),b.vertexWrite(g),x||b.vertexWrite(e.minMaxZoom),b.vertexEnd(),e.offset+e.vertexCount++},ee=e=>(t,i,n)=>{const r=e.out
r.indexWrite(t),r.indexWrite(i),r.indexWrite(n),e.indexCount+=3}
var te=i(1327)
class ie extends($(te.a)){constructor(e,t,i,n,r,s,a,o,c,u,h,f,p,g,b,v,x,y,O,T){super()
const S=l.c.load(e)
t&&(S.sdf=t.sdf,S.pattern=!0,S.textureBinding=t.textureBinding),this._capType=n,this._joinType=r,this._miterLimitCosine=Object(m.d)(s),this.tessellationProperties._fillColor=a,this.tessellationProperties._tl=o,this.tessellationProperties._br=c,this._hasPattern=u,this._isDashed=h,this._zOrder=x,this._effects=y,this._minMaxZoom=Object(_.a)(Math.round(O*d.A),Math.round(T*d.A)),this._materialKey=S.data
const w=(p?d.j:0)|(g?d.p:0)|(f?d.k:0)|(b?d.i:0)
this.tessellationProperties._bitset=w,this.tessellationProperties._halfWidth=.5*i,this.tessellationProperties._halfReferenceWidth=.5*v,this.tessellationProperties.offset=0,this._initializeTessellator(!1)}static fromCIMLine(e,t,i){var n,r,s,a
const o=e.color,l=e.scaleFactor||1,c=!!e.dashTemplate
let f=e.cap
c&&f===Z.e.ROUND&&(f=Z.e.SQUARE)
const p=e.join,g=Object(u.h)(e.width)*l,b=Object(u.h)(e.referenceWidth),v=Object(u.h)(e.miterLimit),x=o&&Object(h.b)(o)||0,[y,O]=Object(m.e)(e.scaleInfo,i)
if(!t)return new ie(e.materialKey,t,g,f,p,v,x,0,0,!1,c,null!=(n=e.scaleDash)&&n,null!=(r=e.colorLocked)&&r,!1,e.sampleAlphaOnly,b,e.zOrder,e.effects,y,O)
const{rect:T,width:S,height:w}=t,E=T.x+d.G,M=T.y+d.G,C=E+S,I=M+w,P=Object(_.a)(E,M),A=Object(_.a)(C,I)
return new ie(e.materialKey,t,g,f,p,v,x,P,A,!0,c,null!=(s=e.scaleDash)&&s,null!=(a=e.colorLocked)&&a,!1,e.sampleAlphaOnly,b,e.zOrder,e.effects,y,O)}static fromFillOutline(e){var t
const i=l.a.load(e.materialKey)
return Object(l.h)(i)&&e.outline&&"esriSLSSolid"===(null==(t=e.outline)?void 0:t.style)?ie.fromSimpleLine({hash:"",materialKey:e.materialKey,...e.outline},null,!0):null}static fromSimpleLine(e,t,i=!1){const{color:n}=e,r="esriSLSSolid"!==e.style&&"esriSLSNull"!==e.style,s=Object(g.i)(e.cap||"round"),a=Object(g.j)(e.join||"round")
let o=n&&"esriSLSNull"!==e.style&&Object(h.c)(n)||0
"esriSLSNull"===e.style&&(o=0)
const l=Object(u.h)(e.width),c=e.miterLimit
if(!t)return new ie(e.materialKey,t,l,s,a,c,o,0,0,!1,r,!0,!1,i,!1,l,0,null,m.b,m.a)
const{rect:f,width:p,height:b}=t,v=f.x+d.G,x=f.y+d.G,y=v+p,O=x+b,T=Object(_.a)(v,x),S=Object(_.a)(y,O)
return new ie(e.materialKey,t,l,s,a,c,o,T,S,!0,r,!0,!1,i,!1,l,0,null,m.b,m.a)}static fromPictureLineSymbol(e,t,i,n){return r.a.getLogger("esri.views.2d.engine.webgl.WGLLineTemplate").error("PictureLineSymbol support does not exist!"),null}}const ne=e=>class extends e{constructor(...e){super(...e),this.forceLibtess=!1,this._bitset=0,this._lineTemplate=null,this.geometryType=o.d.FILL}_maybeAddLineTemplate(e){this._lineTemplate=ie.fromFillOutline(e)}_write(e,t,i,n){const r="esriGeometryPoint"===t.geometryType,s=l.a.load(this._materialKey)
e.recordStart(t.getDisplayId(),this._materialKey,this.geometryType,r),this._writeGeometry(e,t,s,n,r),Object(l.h)(s)&&Object(c.l)(this._lineTemplate)&&this._lineTemplate.writeGeometry(e,t,n,r),e.recordEnd()}_writeGeometry(e,t,i,n,r){const s=this._getGeometry(t,n,r)
if(Object(c.k)(s))return
const a=[]
if(!(s.maxLength>100)&&!this.forceLibtess&&function(e,t){const{coords:i,lengths:n,hasIndeterminateRingOrder:r}=t,s=e
if(r)return!1
let a=0
for(let e=0;e<n.length;){let t=e,r=n[e],o=X(i,a,r)
const l=[]
for(;++t<n.length;){const e=n[t],s=X(i,a+r,e)
if(!(s>0))break
o+=s,l.push(a+r),r+=e}const c=s.length
y(s,i,a,a+r,l,2,0)
const u=q(s,i,c,s.length,0),h=Math.abs(o)
if(Math.abs((u-h)/Math.max(1e-7,h))>1e-5)return s.length=0,!1
e=t,a+=r}return!0}(a,s))return void(a.length&&this._writeVertices(e,t,s.coords,s.lengths,i,a))
const o=function(e){const{coords:t,lengths:i}=e,{buffer:n}=Object(b.b)(t,i)
return n}(s)
this._writeVertices(e,t,o,[o.length/2],i)}_writeVertex(e,t,i,n,r,s){const a=Object(_.a)(1*n,1*r)
if(e.vertexBounds(n,r,0,0),e.vertexWrite(a),e.vertexWrite(t),i.symbologyType===o.e.DOT_DENSITY)e.vertexWriteF32(1/Math.abs(s.readGeometryArea()))
else{e.vertexWrite(this.fillColor)
const t=Object(l.i)(i)
t||(e.vertexWrite(this.tl),e.vertexWrite(this.br)),e.vertexWrite(this.aux21),e.vertexWrite(this.aux22),e.vertexWrite(this.aux3),t||e.vertexWrite(this._minMaxZoom)}}_writeVertices(e,t,i,n,r,s){const a=t.getDisplayId(),o=this._bitset<<24|a,l=n.reduce((e,t)=>e+t),c=Object(g.n)(r.geometryType,r.symbologyType).geometry/4,u=e.vertexCount()
e.vertexEnsureSize(c*l)
let h=0
if(s)for(const n of s){const s=i[2*n],a=i[2*n+1]
this._writeVertex(e,o,r,s,a,t),h++}else for(let n=0;n<i.length;n+=2){const s=Math.round(i[n]),a=Math.round(i[n+1])
this._writeVertex(e,o,r,s,a,t),h++}e.indexEnsureSize(h)
for(let t=0;t<h;t++)e.indexWrite(t+u)}_getGeometry(e,t,i){const n=t?Object(p.q)(Object(p.d)(t),2):e.readGeometryForDisplay()
return n?function(e,t){if(Object(c.k)(e))return null
if(!function(e,t,i){let n=0
for(let t=0;t<e.lengths.length;t++){const r=e.lengths[t]
for(let t=0;t<r;t++){const r=e.coords[2*(t+n)],s=e.coords[2*(t+n)+1]
if(r<-128||r>i||s<-128||s>i)return!0}n+=r}return!1}(e,0,d.Z+128))return e
H.setPixelMargin(t),H.reset(v.a.Polygon)
let i=0
for(let t=0;t<e.lengths.length;t++){const n=e.lengths[t]
let r=e.coords[2*(0+i)],s=e.coords[2*(0+i)+1]
H.moveTo(r,s)
for(let t=1;t<n;t++)r=e.coords[2*(t+i)],s=e.coords[2*(t+i)+1],H.lineTo(r,s)
H.close(),i+=n}const n=H.result(!1)
if(!n)return null
const r=[],s=[]
for(const e of n){let t=0
for(const i of e)s.push(i.x),s.push(i.y),t++
r.push(t)}return new x.a(r,s)}(n,i?256:8):null}}
var re=i(1537),se=i(1230)
const ae=r.a.getLogger("esri.views.2d.engine.webgl.WGLDynamicMeshTemplate")
class oe extends te.a{constructor(e){super(),this._ongoingMaterialRequestMap=new Map,this._materialCache=new Map,this._dynamicPropertyMap=new Map,this._cimLayer=e}analyze(e,t,i,n,r){if(r&&0===r.length)return null
const s=r&&r.length>0,a=t.readLegacyFeature(),o=t.getObjectId(),l=this._materialCache,c=this._cimLayer.materialHash
if(!c)return ae.error("A Dynamic mesh template must have a material hash value or function!"),Promise.reject(null)
const u="function"==typeof c?c(a,i,n,o):c,h=l.get(u)
if(null!=h)return Promise.resolve(h)
const d=this._ongoingMaterialRequestMap.get(u)
if(d)return d
const f=this._cimLayer,_=Object(re.a)(f.cim,this._cimLayer.materialOverrides)
_.mosaicHash=u
const{type:m,url:p}=f,g={cim:_,type:m,mosaicHash:u,url:p,size:null,dashTemplate:null,text:null,fontName:null,objectId:o,animatedSymbolProperties:null}
switch(m){case"marker":g.size=Object(se.g)(f.size,a,i,n),g.animatedSymbolProperties=Object(se.g)(f.animatedSymbolProperties,a,i,n)
break
case"line":g.dashTemplate=f.dashTemplate
break
case"text":g.text=Object(se.g)(f.text,a,i,n),g.fontName=Object(se.g)(f.fontName,a,i,n)}const b=e.getMosaicItem(g,r).then(e=>(s||(this._ongoingMaterialRequestMap.delete(u),l.set(u,e)),e)).catch(e=>(this._ongoingMaterialRequestMap.delete(u),ae.error(".analyze()",e.message),null))
return s||this._ongoingMaterialRequestMap.set(u,b),b}}var le=i(1371)
class ce extends(ne(oe)){constructor(e,t,i){var n
if(super(e),this._minMaxZoom=Object(_.a)(Math.round(t*d.A),Math.round(i*d.A)),Object(m.f)(e.color)){const t=(t,i,n)=>{const r=e.color(t,i,n)
return r&&Object(h.b)(r)||0}
this._dynamicPropertyMap.set("fillColor",t)}else{const t=e.color
this.fillColor=t&&Object(h.b)(t)||0}const r="CIMMarkerPlacementInsidePolygon"===(null==(n=e.cim.placement)?void 0:n.type)&&e.cim.placement.shiftOddRows?2:1,s=e.height
if(Object(m.f)(s)){const e=(e,t,i)=>s(e,t,i)*r
this._dynamicPropertyMap.set("_height",e)}else this._height=(s||0)*r
const a=e.offsetX
if(Object(m.f)(a)){const e=(e,t,i)=>Object(u.h)(a(e,t,i))
this._dynamicPropertyMap.set("_offsetX",e)}else this._offsetX=Object(u.h)(a||0)
const o=e.offsetY
if(Object(m.f)(o)){const e=(e,t,i)=>Object(u.h)(-o(e,t,i))
this._dynamicPropertyMap.set("_offsetY",e)}else this._offsetY=Object(u.h)(-o||0)
const l=e.scaleX
Object(m.f)(l)?this._dynamicPropertyMap.set("_scaleX",l):this._scaleX=l||1
const p=e.angle
if(Object(m.f)(p)){const e=(e,t,i)=>Object(f.a)(p(e,t,i))
this._dynamicPropertyMap.set("_angle",e)}else this._angle=Object(f.a)(p)||0
if(Object(c.l)(e.effects)){const t=e.effects
Object(m.f)(t)?this._dynamicPropertyMap.set("_effects",t):this._effects=t}this._cimFillLayer=e,this._bitset=(e.colorLocked?d.j:0)|(e.applyRandomOffset?d.h:0)|(e.sampleAlphaOnly?d.i:0)|(e.hasUnresolvedReplacementColor?d.g:0),this._fillMaterialKey=e.materialKey}static fromCIMFill(e,t){const[i,n]=Object(m.e)(e.scaleInfo,t)
return new ce(e,i,n)}bindFeature(e,t,i){const n=e.readLegacyFeature()
this._dynamicPropertyMap.forEach((e,r)=>{this[r]=e(n,t,i)})
const r=l.a.load(this._fillMaterialKey),s=this._materialCache,a=(0,this._cimFillLayer.materialHash)(n,t,i),o=s.get(a)
let c=null
if(o&&Object(le.a)(o.spriteMosaicItem)&&(c=o.spriteMosaicItem),c){const{rect:e,width:t,height:i}=c,n=e.x+d.G,s=e.y+d.G,a=n+t,o=s+i
let l=Math.round(Object(u.h)(this._height))
l<=0&&(l=o-s)
let h=Math.round(Object(u.h)(this._height/i*t||0))
h<=0&&(h=a-n)
const f=this._scaleX,m=1
this.tl=Object(_.a)(n,s),this.br=Object(_.a)(a,o),this.aux21=Object(_.a)(h,l),this.aux22=Object(_.a)(this._offsetX,this._offsetY),this.aux3=Object(_.b)(128*f,128*m,this._angle,0),r.sdf=c.sdf,r.pattern=!0,r.textureBinding=c.textureBinding}else this.tl=0,this.br=0,this.aux21=0,this.aux22=0,this.aux3=0,r.sdf=!1,r.pattern=!1,r.textureBinding=0
this._materialKey=r.data}}class ue extends($(oe)){constructor(e,t,i){super(e),this._minMaxZoom=Object(_.a)(Math.round(t*d.A),Math.round(i*d.A)),this._cimLineLayer=e
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
const a=e.colorLocked?d.j:0,o=e.scaleDash?d.k:0,l=e.sampleAlphaOnly?d.i:0
this.tessellationProperties._bitset=a|o|l,this._materialKey=e.materialKey,this._initializeTessellator(!0)}static fromCIMLine(e,t){const[i,n]=Object(m.e)(e.scaleInfo,t)
return new ue(e,i,n)}bindFeature(e,t,i){const n=e.readLegacyFeature()
this._dynamicPropertyMap.forEach((e,r)=>{this[r]=e(n,t,i)}),this._halfWidth*=this._scaleFactor
const r=this._materialCache,s=(0,this._cimLineLayer.materialHash)(n,t,i),a=r.get(s)
let o=null
if(a&&Object(le.a)(a.spriteMosaicItem)&&(o=a.spriteMosaicItem),o){this._hasPattern=!0
const{rect:e,width:t,height:i}=o,n=e.x+d.G,r=e.y+d.G,s=n+t,a=r+i
this.tessellationProperties._tl=Object(_.a)(n,r),this.tessellationProperties._br=Object(_.a)(s,a)}else this._hasPattern=!1,this.tessellationProperties._tl=0,this.tessellationProperties._br=0
this.tessellationProperties._fillColor=this._fillColor,this.tessellationProperties._halfWidth=this._halfWidth,this.tessellationProperties.offset=0,this.tessellationProperties._halfReferenceWidth=this.tessellationProperties._halfWidth
const c=l.c.load(this._materialKey)
o&&(c.sdf=o.sdf,c.pattern=!0,c.textureBinding=o.textureBinding),this._materialKey=c.data}}var he=i(1192),de=i(1173),fe=i(1584)
const _e=Object(de.c)(),me=Object(he.a)()
class pe extends(Object(fe.a)(oe)){constructor(e,t,i){super(e),this._cimMarkerLayer=e,this._minMaxZoom=Object(_.a)(Math.round(t*d.A),Math.round(i*d.A))
const n=e.color
if(Object(m.f)(n)){const e=(e,t,i)=>Object(h.b)(n(e,t,i))
this._dynamicPropertyMap.set("_fillColor",e)}else this._fillColor=Object(h.b)(n)
const r=e.outlineColor
if(Object(m.f)(r)){const e=(e,t,i)=>Object(h.b)(r(e,t,i))
this._dynamicPropertyMap.set("_outlineColor",e)}else this._outlineColor=Object(h.b)(r)
const s=e.size
if(Object(m.f)(s)){const e=(e,t,i)=>Object(u.h)(s(e,t,i))
this._dynamicPropertyMap.set("_size",e)}else this._size=Object(u.h)(s)||0
const a=e.scaleX
Object(m.f)(a)?this._dynamicPropertyMap.set("_scaleX",a):this._scaleX=a
const o=e.offsetX
if(Object(m.f)(o)){const e=(e,t,i)=>Object(u.h)(o(e,t,i))
this._dynamicPropertyMap.set("xOffset",e)}else this.xOffset=Object(u.h)(o)||0
const l=e.offsetY
if(Object(m.f)(l)){const e=(e,t,i)=>Object(u.h)(l(e,t,i))
this._dynamicPropertyMap.set("yOffset",e)}else this.yOffset=Object(u.h)(l)||0
const f=e.outlineWidth
if(Object(m.f)(f)){const e=(e,t,i)=>Object(u.h)(f(e,t,i))
this._dynamicPropertyMap.set("_outlineWidth",e)}else this._outlineWidth=Object(u.h)(f)||0
const p=e.rotation
if(Object(m.f)(p)?this._dynamicPropertyMap.set("_angle",p):this._angle=p||0,Object(c.l)(e.effects)){const t=e.effects
Object(m.f)(t)?this._dynamicPropertyMap.set("_effects",t):this._effects=t}if(Object(c.l)(e.markerPlacement)){const t=e.markerPlacement
Object(m.f)(t)?this._dynamicPropertyMap.set("_markerPlacement",t):this._markerPlacement=t}this._scaleFactor=Object(c.v)(e.scaleFactor,1),this._bitSet=(e.alignment===Z.a.MAP?1:0)|(e.colorLocked?1:0)<<1|(e.scaleSymbolsProportionally?1:0)<<3,this._materialKey=e.materialKey}static fromCIMMarker(e,t){const[i,n]=Object(m.e)(e.scaleInfo,t)
return new pe(e,i,n)}bindFeature(e,t,i){const s=e.readLegacyFeature(),a=e.getObjectId()
this._dynamicPropertyMap.forEach((e,n)=>{this[n]=e(s,t,i)})
const o=this._cimMarkerLayer.materialHash,c="function"==typeof o?o(s,t,i,a):o,h=this._materialCache.get(c)
if(!h||!Object(le.a)(h.spriteMosaicItem)||!h.spriteMosaicItem)return void r.a.getLogger("esri.views.2d.engine.webgl.WGLDynamicMarkerTemplate").error(new n.a("mapview-cim","Encountered an error when binding feature"))
const f=h.spriteMosaicItem,m=this._cimMarkerLayer.sizeRatio,p=f.width/f.height*this._scaleX,g=this._cimMarkerLayer.rotateClockwise?this._angle:-this._angle
let b=this._size,v=b*p
const x=this.xOffset,y=this.yOffset
this.xOffset*=this._scaleFactor,this.yOffset*=this._scaleFactor
const O=this._cimMarkerLayer.scaleSymbolsProportionally&&this._cimMarkerLayer.frameHeight?this._size/Object(u.h)(this._cimMarkerLayer.frameHeight):1,T=this._outlineWidth*O,S=Object(u.h)(this._cimMarkerLayer.referenceSize)
let w=0,E=0
const M=this._cimMarkerLayer.anchorPoint
M&&(this._cimMarkerLayer.isAbsoluteAnchorPoint?this._size&&(w=Object(u.h)(M.x)/(this._size*p),E=Object(u.h)(M.y)/this._size):(w=M.x,E=M.y)),this._anchorX=w,this._anchorY=E,this._sizeOutlineWidth=Object(_.b)(Math.round(Math.min(Math.sqrt(128*v),255)),Math.round(Math.min(Math.sqrt(128*b),255)),Math.round(Math.min(Math.sqrt(128*T),255)),Math.round(Math.min(Math.sqrt(128*S),255))),this.angle=g
const C=Math.round(64*m)
this._bitestAndDistRatio=Object(_.a)(this._bitSet,C)
const I=f.rect.x+d.G,P=f.rect.y+d.G,A=I+f.width,R=P+f.height
this._texUpperLeft=Object(_.a)(I,P),this._texUpperRight=Object(_.a)(A,P),this._texBottomLeft=Object(_.a)(I,R),this._texBottomRight=Object(_.a)(A,R)
const F=l.d.load(this._materialKey)
F.sdf=f.sdf,F.pattern=!0,F.textureBinding=f.textureBinding,this._materialKey=F.data,v*=m,b*=m,v*=this._scaleFactor,b*=this._scaleFactor,v*=f.rect.width/f.width,b*=f.rect.height/f.height,this._computedWidth=v,this._computedHeight=b,this._applyTransformation(me,_e),this.xOffset=x,this.yOffset=y}}var ge=i(1287),be=i(1580),ve=i(1573)
class xe extends(Object(be.a)(oe)){constructor(e,t,i){super(e),this._horizontalAlignment="center",this._verticalAlignment="middle",this._textToGlyphs=new Map,this._minMaxZoom=Object(_.a)(Math.round(t*d.A),Math.round(i*d.A))
const n=e.scaleFactor||1
this._cimTextLayer=e
const r=e.color
if(Object(m.f)(r)){const e=(e,t,i)=>Object(h.b)(r(e,t,i))
this._dynamicPropertyMap.set("_color",e)}else this._color=Object(h.b)(r)
const s=e.outlineColor
if(Object(m.f)(s)){const e=(e,t,i)=>Object(h.b)(s(e,t,i))
this._dynamicPropertyMap.set("_haloColor",e)}else this._haloColor=Object(h.b)(s)
let a,o,f
if(Object(m.f)(e.size)||(a=Math.min(Math.round(Object(u.h)(e.size*e.sizeRatio)),127)),this._dynamicPropertyMap.set("_size",(t,i,n)=>Object(m.f)(e.size)?Math.min(Math.round(Object(u.h)(e.size(t,i,n)*e.sizeRatio)),127):a),Object(m.f)(e.outlineSize)){const t=(t,i,n)=>Math.min(Math.floor(5*Object(u.h)(e.outlineSize(t,i,n)*e.sizeRatio)),127)
this._dynamicPropertyMap.set("_haloSize",t)}else this._haloSize=Math.min(Math.floor(5*Object(u.h)(e.outlineSize*e.sizeRatio)),127)
if(Object(m.f)(e.offsetX)||(o=Math.round(Object(u.h)(e.offsetX*e.sizeRatio))),this._dynamicPropertyMap.set("_xOffset",(t,i,n)=>Object(m.f)(e.offsetX)?Math.round(Object(u.h)(e.offsetX(t,i,n)*e.sizeRatio)):o),Object(m.f)(e.offsetY)||(f=Math.round(Object(u.h)(e.offsetY*e.sizeRatio))),this._dynamicPropertyMap.set("_yOffset",(t,i,n)=>Object(m.f)(e.offsetY)?Math.round(Object(u.h)(e.offsetY(t,i,n)*e.sizeRatio)):f),Object(m.f)(e.angle)?this._dynamicPropertyMap.set("_angle",e.angle):this._angle=e.angle,Object(m.f)(e.horizontalAlignment)?this._dynamicPropertyMap.set("_horizontalAlignment",e.horizontalAlignment):this._horizontalAlignment=e.horizontalAlignment,Object(m.f)(e.verticalAlignment)?this._dynamicPropertyMap.set("_verticalAlignment",e.verticalAlignment):this._verticalAlignment=e.verticalAlignment,Object(c.l)(e.effects)){const t=e.effects
Object(m.f)(t)?this._dynamicPropertyMap.set("_effects",t):this._effects=t}if(Object(c.l)(e.markerPlacement)){const t=e.markerPlacement
Object(m.f)(t)?this._dynamicPropertyMap.set("_markerPlacement",t):this._textPlacement=t}Object(m.f)(e.text)?this._dynamicPropertyMap.set("_text",e.text):this._text=e.text,this._backgroundColor=e.backgroundColor&&Object(h.b)(e.backgroundColor),this._borderLineColor=e.borderLineColor&&Object(h.b)(e.borderLineColor),this._borderLineSize=e.borderLineWidth,this._scaleFactor=n
const p=Math.min(Math.round(Object(u.h)(e.referenceSize*e.sizeRatio)),127)
this._referenceSize=Math.round(Math.sqrt(256*p)),this._materialKey=e.materialKey
const g=l.f.load(this._materialKey)
g.sdf=!0,this._bitset=(e.alignment===Z.a.MAP?1:0)|(e.colorLocked?1:0)<<1,this._materialKey=g.data,this._decoration="none",this._lineHeight=1,this._lineWidth=512,this._isCIM=!0}static fromCIMText(e,t){const[i,n]=Object(m.e)(e.scaleInfo,t)
return new xe(e,i,n)}async analyze(e,t,i,n){const r=t.readLegacyFeature(),s=function(e,t,i,n){var r
return"string"==typeof e.text?e.text:"function"==typeof e.text&&null!=(r=e.text(t,i,n))?r:""}(this._cimTextLayer,r,i,n),a=await super.analyze(e,t,i,n,Object(ve.a)(s))
return a&&a.glyphMosaicItems&&this._textToGlyphs.set(s,a.glyphMosaicItems),a}bindFeature(e,t,i){var n
const r=e.readLegacyFeature()
if(this._dynamicPropertyMap.forEach((e,n)=>{this[n]=e(r,t,i)}),!this._text||0===this._text.length)return void(this._shapingInfo=null)
this._size*=this._scaleFactor,this._scale=this._size/d.v,this._xOffset*=this._scaleFactor,this._yOffset*=this._scaleFactor,this._xAlignD=Object(ge.e)(Object(c.v)(this._horizontalAlignment,"center")),this._yAlignD=Object(ge.g)(Object(c.v)(this._verticalAlignment,"baseline"))
const s=null!=(n=this._textToGlyphs.get(this._text))?n:[]
this.bindTextInfo(s,!1)}}class ye extends(ne(te.a)){constructor(e,t,i,n,r,s,a,o,c,u,h,f,m,p,g,b){super(),this._effects=p
const v=l.a.load(e)
t&&(v.sdf=t.sdf,v.pattern=!0,v.textureBinding=t.textureBinding),this.fillColor=i,this.tl=n,this.br=r,this.aux21=Object(_.a)(s,a),this.aux22=Object(_.a)(o,c),this.aux3=Object(_.b)(u,h,f,0),this._bitset=m,this._minMaxZoom=Object(_.a)(Math.round(g*d.A),Math.round(b*d.A)),this._materialKey=v.data}static fromCIMFill(e,t,i){const n=e.color,r=n&&Object(h.b)(n)||0,s=e.materialKey,[a,o]=Object(m.e)(e.scaleInfo,i),l=(e.colorLocked?d.j:0)|(e.applyRandomOffset?d.h:0)|(e.sampleAlphaOnly?d.i:0)|(e.hasUnresolvedReplacementColor?d.g:0)
if(!t)return new ye(s,null,r,0,0,0,0,0,0,0,0,0,l,e.effects,a,o)
const{rect:c,width:p,height:g}=t,b=e.scaleX||1,v=c.x+d.G,x=c.y+d.G,y=v+p,O=x+g,T=Object(u.h)(e.height)
let S=b*T
"CIMHatchFill"===e.cim.type&&(S*=p/g)
let w=Math.round(T)
w<=0&&(w=O-x)
let E=Math.round(S)
E<=0&&(E=y-v)
const M=Object(u.h)(e.offsetX||0),C=Object(u.h)(-e.offsetY||0),I=Object(_.a)(v,x),P=Object(_.a)(y,O)
return new ye(s,t,r,I,P,E,w,M,C,128,128,Object(f.a)(e.angle),l,e.effects,a,o)}static fromSimpleFill(e,t,i=!1){const{color:n}=e,r=n&&"esriSFSNull"!==e.style&&Object(h.c)(n)||0,s=i?d.j:0,a=e.materialKey
let o
if(t){const{rect:e,width:i,height:n,pixelRatio:l}=t,c=e.x+d.G,u=e.y+d.G,h=c+i,f=u+n,p=Object(_.a)(c,u),g=Object(_.a)(h,f)
o=new ye(a,t,r,p,g,i/l,n/l,0,0,128,128,0,s,null,m.b,m.a)}else o=new ye(a,null,r,0,0,0,0,0,0,0,0,0,s,null,m.b,m.a)
return o._maybeAddLineTemplate(e),o}static fromPictureFill(e,t,i=!1){const n=d.E,{rect:r,width:s,height:a}=t,o=r.x+d.G,l=r.y+d.G,c=o+s,h=l+a,f=Object(_.a)(o,l),p=Object(_.a)(c,h),g=Math.round(Object(u.h)(e.width)),b=Math.round(Object(u.h)(e.height)),v=Object(u.h)(e.xoffset),x=Object(u.h)(-e.yoffset),y=e.materialKey,O=i?d.j:0,T=new ye(y,t,n,f,p,g,b,v,x,128*e.xscale,128*e.yscale,0,O,null,m.b,m.a)
return T._maybeAddLineTemplate(e),T}}var Oe=i(1583),Te=i(1579)
class Se{constructor(){this._resolver=null}isHeld(){return!!this._resolver}async acquire(){this._resolver?(await this._resolver.promise,await this.acquire()):this._resolver=Object(s.e)()}release(){const e=this._resolver
this._resolver=null,null==e||e.resolve()}}var we=i(1356)
const Ee=r.a.getLogger("esri.views.2d.engine.webgl.mesh.templates.WGLTemplateStore"),Me={sortKey:null,templates:new Array},Ce={isOutline:!1,placement:null,symbologyType:o.e.DEFAULT,vvFlags:0},Ie={...a.g,hash:JSON.stringify(a.g),materialKey:Object(l.g)(o.d.MARKER,Ce)},Pe={...a.i,hash:JSON.stringify(a.i),materialKey:Object(l.g)(o.d.LINE,Ce)},Ae={...a.h,hash:JSON.stringify(a.h),materialKey:Object(l.g)(o.d.FILL,Ce)}
function Re(e,t){const i=e.length
return e.push(null),t.then(t=>e[i]=t),e}function Fe(e){return null!=e&&!!(1&e)}class Le{constructor(e,t){this._idCounter=1,this._templateIdCounter=1,this._idToTemplateGroup=new Map,this._symbolToTemplate=new Map,this._fetchQueue=[],this._idToResolver=new Map,this._cimTemplateCache=new Map,this._cimAnalyses=[],this._lock=new Se,this._fetchResource=e,this._tileInfo=t}get _markerError(){return this._errorTemplates.marker[0]}get _fillError(){return this._errorTemplates.fill[0]}get _lineError(){return this._errorTemplates.line[0]}get _textError(){return this._errorTemplates.line[0]}createTemplateGroup(e,t,i=null){this._initErrorTemplates()
const n=e.hash,r=this._symbolToTemplate.get(n)
if(null!=r)return r
const s=new Array,a={sortKey:i,templates:s}
t&&this._createMeshTemplates(s,t,!0),this._createMeshTemplates(s,e,!1)
const o=this._createGroupId("expanded-cim"===e.type&&De(e))
return this._idToTemplateGroup.set(o,a),this._symbolToTemplate.set(n,o),o}getTemplateGroup(e){var t
return null!=(t=this._idToTemplateGroup.get(e))?t:Me}getDynamicTemplateGroup(e){return this._idToTemplateGroup.has(e)?(Fe(e)||Ee.error("mapview-template-store",`Id ${e} does not refer to a dynamic template`),this._idToTemplateGroup.get(e)):Me}getMosaicItem(e,t){const i=this._createTemplateId(),n=new Promise(e=>this._idToResolver.set(i,e))
return this._fetchQueue.push({symbol:e,id:i,glyphIds:t}),n}finalize(e){return this._fetchQueue.length||this._lock.isHeld()?async function(e,t,i){try{await e.acquire(),await t(i),e.release()}catch(t){throw e.release(),t}}(this._lock,this._fetchAllQueuedResources.bind(this),e):Promise.resolve()}_initErrorTemplates(){this._errorTemplates||(this._errorTemplates={fill:this._createMeshTemplates([],Ae,!1),marker:this._createMeshTemplates([],Ie,!1),line:this._createMeshTemplates([],Pe,!1)})}_fetchAllQueuedResources(e){if(!this._fetchQueue.length)return Promise.resolve()
const t=this._fetchQueue,i=this._cimAnalyses
return this._fetchQueue=[],this._cimAnalyses=[],Promise.all(i).then(()=>this._fetchResource(t,e).then(e=>{for(const{id:t,mosaicItem:i}of e)this._idToResolver.get(t)(i),this._idToResolver.delete(t)})).catch(e=>{Object(s.j)(e)?this._fetchQueue=this._fetchQueue.concat(t):"worker:port-closed"===e.name||Ee.error(new n.a("mapview-template-store","Unable to fetch requested texture resources",e))})}_createGroupId(e){return this._idCounter++<<1|(e?1:0)}_createTemplateId(){return this._templateIdCounter++}async _createSMS(e){const{spriteMosaicItem:t}=await this.getMosaicItem(e)
return Object(le.a)(t,Ee)?Oe.a.fromSimpleMarker(e,t):this._markerError}async _createPMS(e){const{spriteMosaicItem:t}=await this.getMosaicItem(e)
return Object(le.a)(t,Ee)?Oe.a.fromPictureMarker(e,t):this._markerError}async _createSFS(e,t){const{spriteMosaicItem:i}=await this.getMosaicItem(e)
return Object(le.a)(i,Ee)?ye.fromSimpleFill(e,i,t):this._fillError}async _createPFS(e,t){const{spriteMosaicItem:i}=await this.getMosaicItem(e)
return Object(le.a)(i,Ee)?ye.fromPictureFill(e,i,t):this._fillError}async _createSLS(e,t){const{spriteMosaicItem:i}=await this.getMosaicItem(e)
return Object(le.a)(i,Ee)?ie.fromSimpleLine(e,i):this._lineError}async _createLMS(e){const{spriteMosaicItem:t}=await this.getMosaicItem(e)
return Object(le.a)(t,Ee)?Oe.a.fromLineSymbolMarker(e,t):this._markerError}async _createTS(e){const{glyphMosaicItems:t}=await this.getMosaicItem(e)
return Te.a.fromText(e,null!=t?t:[])}async _createCIMText(e){const{glyphMosaicItems:t}=await this.getMosaicItem(Object(we.a)(e),Object(ve.a)(e.text))
return Object(le.a)(t,Ee)?Te.a.fromCIMText(e,t,this._tileInfo):this._textError}async _createCIMFill(e){const{spriteMosaicItem:t}=await this.getMosaicItem(Object(we.a)(e))
return Object(le.a)(t,Ee)?ye.fromCIMFill(e,t,this._tileInfo):this._fillError}async _createCIMLine(e){const{spriteMosaicItem:t}=await this.getMosaicItem(Object(we.a)(e))
return Object(le.a)(t,Ee)?ie.fromCIMLine(e,t,this._tileInfo):this._lineError}async _createCIMMarker(e){const{spriteMosaicItem:t}=await this.getMosaicItem(Object(we.a)(e))
return Object(le.a)(t,Ee)?Oe.a.fromCIMMarker(e,t,this._tileInfo):this._markerError}async _createCIM(e){const t=e.templateHash
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
case"text":i=xe.fromCIMText(e,this._tileInfo)}return this._cimTemplateCache.set(t,i),i}_createPrimitiveMeshTemplates(e,t,i){switch(t.type){case"esriSMS":return Re(e,this._createSMS(t))
case"esriPMS":return Re(e,this._createPMS(t))
case"esriSFS":return Re(e,this._createSFS(t,i))
case"line-marker":return Re(e,this._createLMS(t))
case"esriPFS":return Re(e,this._createPFS(t,i))
case"esriSLS":return Re(e,this._createSLS(t,!1))
case"esriTS":return Re(e,this._createTS(t))
default:return Ee.error("Unable to create mesh template for unknown symbol type {: $ }{symbol.type}"),e}}_createMeshTemplates(e,t,i){if(t.type.includes("3d"))return Ee.error("3D symbols are not supported with MapView"),e
if("expanded-cim"===t.type){for(const i of t.layers)"function"==typeof i.materialHash?Re(e,this._createDynamicCIM(i)):Re(e,this._createCIM(i))
return e}if("composite-symbol"===t.type){for(const n of t.layers)this._createPrimitiveMeshTemplates(e,n,i)
return e}return"cim"===t.type||"label"===t.type||"web-style"===t.type?e:this._createPrimitiveMeshTemplates(e,t,i)}}const De=e=>{if(!e.layers)return!1
for(const t of e.layers)if("function"==typeof t.materialHash)return!0
return!1}},1589:function(e,t,i){"use strict"
i.d(t,"a",(function(){return R})),i.d(t,"b",(function(){return P})),i.d(t,"c",(function(){return A})),i.d(t,"d",(function(){return C})),i.d(t,"e",(function(){return D})),i.d(t,"f",(function(){return B})),i.d(t,"g",(function(){return j}))
var n=i(1304),r=i(1535),s=i(234),a=i(233),o=i(23),l=i(1049),c=i(980),u=i(996),h=i(1079),d=i(1142),f=i(983),_=i(1326)
class m{applyColorSubstituition(e,t){if(!t)return e
this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas"))
const{width:i,height:n}=e,r=this._rasterizationCanvas,s=r.getContext("2d")
e!==r&&(r.width=i,r.height=n,s.drawImage(e,0,0,i,n))
const a=s.getImageData(0,0,i,n).data
if(t)for(const e of t)if(e&&e.oldColor&&4===e.oldColor.length&&e.newColor&&4===e.newColor.length){const[t,i,n,r]=e.oldColor,[s,o,l,c]=e.newColor
if(t===s&&i===o&&n===l&&r===c)continue
for(let e=0;e<a.length;e+=4)t===a[e]&&i===a[e+1]&&n===a[e+2]&&r===a[e+3]&&(a[e]=s,a[e+1]=o,a[e+2]=l,a[e+3]=c)}const o=new ImageData(a,i,n)
return s.putImageData(o,0,0),r}tintImageData(e,t){if(!t||t.length<4)return e
this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas"))
const{width:i,height:n}=e,r=this._rasterizationCanvas,s=r.getContext("2d")
e!==r&&(r.width=i,r.height=n,s.drawImage(e,0,0,i,n))
const a=s.getImageData(0,0,i,n),o=new Uint8Array(a.data),l=[t[0]/255,t[1]/255,t[2]/255,t[3]/255]
for(let e=0;e<o.length;e+=4)o[e+0]*=l[0],o[e+1]*=l[1],o[e+2]*=l[2],o[e+3]*=l[3]
const c=new ImageData(new Uint8ClampedArray(o.buffer),i,n)
return s.putImageData(c,0,0),r}}var p=i(1484),g=i(1325),b=i(1030)
function v(e){const t=e.getFrame(0)
if(t instanceof HTMLImageElement||t instanceof HTMLCanvasElement)return t
const i=document.createElement("canvas")
i.width=e.width,i.height=e.height
const n=i.getContext("2d")
return t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0),i}var x=i(1422),y=i(1727),O=i(1230),T=i(1287),S=i(1e3),w=i(1373)
const E=Math.PI/180,M=a.a.getLogger("esri.symbols.cim.CIMSymbolDrawHelper")
class C{constructor(e){this._t=e}static createIdentity(){return new C([1,0,0,0,1,0])}clone(){const e=this._t
return new C(e.slice())}transform(e){const t=this._t
return[t[0]*e[0]+t[1]*e[1]+t[2],t[3]*e[0]+t[4]*e[1]+t[5]]}static createScale(e,t){return new C([e,0,0,0,t,0])}scale(e,t){const i=this._t
return i[0]*=e,i[1]*=e,i[2]*=e,i[3]*=t,i[4]*=t,i[5]*=t,this}scaleRatio(){return Math.sqrt(this._t[0]*this._t[0]+this._t[1]*this._t[1])}static createTranslate(e,t){return new C([0,0,e,0,0,t])}translate(e,t){const i=this._t
return i[2]+=e,i[5]+=t,this}static createRotate(e){const t=Math.cos(e),i=Math.sin(e)
return new C([t,-i,0,i,t,0])}rotate(e){return C.multiply(this,C.createRotate(e),this)}angle(){const e=this._t[0],t=this._t[3],i=Math.sqrt(e*e+t*t)
return[e/i,t/i]}static multiply(e,t,i){const n=e._t,r=t._t,s=n[0]*r[0]+n[3]*r[1],a=n[1]*r[0]+n[4]*r[1],o=n[2]*r[0]+n[5]*r[1]+r[2],l=n[0]*r[3]+n[3]*r[4],c=n[1]*r[3]+n[4]*r[4],u=n[2]*r[3]+n[5]*r[4]+r[5],h=i._t
return h[0]=s,h[1]=a,h[2]=o,h[3]=l,h[4]=c,h[5]=u,i}invert(){const e=this._t
let t=e[0]*e[4]-e[1]*e[3]
if(0===t)return new C([0,0,0,0,0,0])
t=1/t
const i=(e[1]*e[5]-e[2]*e[4])*t,n=(e[2]*e[3]-e[0]*e[5])*t,r=e[4]*t,s=-e[1]*t,a=-e[3]*t,o=e[0]*t
return new C([r,s,i,a,o,n])}}class I{constructor(e,t){this._resourceManager=e,this._transfos=[],this._sizeTransfos=[],this._geomUnitsPerPoint=1,this._placementPool=new l.a(g.a,void 0,void 0,100),this._earlyReturn=!1,this._mapRotation=0,this._transfos.push(t||C.createIdentity()),this._sizeTransfos.push(t?t.scaleRatio():1)}setTransform(e,t){this._transfos=[e||C.createIdentity()],this._sizeTransfos=[t||(e?e.scaleRatio():1)]}setGeomUnitsPerPoint(e){this._geomUnitsPerPoint=e}transformPt(e){return this._transfos[this._transfos.length-1].transform(e)}transformSize(e){return e*this._sizeTransfos[this._sizeTransfos.length-1]}reverseTransformPt(e){return this._transfos[this._transfos.length-1].invert().transform(e)}reverseTransformSize(e){return e/this._sizeTransfos[this._sizeTransfos.length-1]}getTransformAngle(){return this._transfos[this._transfos.length-1].angle()}geomUnitsPerPoint(){return this.isEmbedded()?1:this._geomUnitsPerPoint}isEmbedded(){return this._transfos.length>1}back(){return this._transfos[this._transfos.length-1]}push(e,t){const i=t?e.scaleRatio():1
C.multiply(e,this.back(),e),this._transfos.push(e),this._sizeTransfos.push(this._sizeTransfos[this._sizeTransfos.length-1]*i)}pop(){this._transfos.splice(-1,1),this._sizeTransfos.splice(-1,1)}drawSymbol(e,t,i){if(e)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":this.drawMultiLayerSymbol(e,t)
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
case"CIMVectorMarker":this.drawVectorMarker(e,t)}}drawPictureMarker(e,t){var i,n,r,s,a
if(!e)return
const l=this._resourceManager.getResource(e.url),c=null!=(i=e.size)?i:10
if(Object(o.k)(l)||c<=0)return
const u=l.width,h=l.height
if(!u||!h)return
const d=u/h,f=null!=(n=e.scaleX)?n:1,_=C.createIdentity(),m=e.anchorPoint
if(m){let t=m.x,i=m.y
"Absolute"!==e.anchorPointUnits&&(t*=c*d*f,i*=c),_.translate(-t,-i)}let p=null!=(r=e.rotation)?r:0
e.rotateClockwise&&(p=-p),this._mapRotation&&(p+=this._mapRotation),p&&_.rotate(p*E)
let g=null!=(s=e.offsetX)?s:0,b=null!=(a=e.offsetY)?a:0
if(g||b){if(this._mapRotation){const e=E*this._mapRotation,t=Math.cos(e),i=Math.sin(e),n=g*i+b*t
g=g*t-b*i,b=n}_.translate(g,b)}const v=this.geomUnitsPerPoint()
1!==v&&_.scale(v,v)
const x=t.getAngle()
x&&_.rotate(x),_.translate(t.tx,t.ty),this.push(_,!1),this.drawImage(e,c),this.pop()}drawVectorMarker(e,t){var i,n,r,s
if(!e)return
const a=e.markerGraphics
if(!a)return
const o=null!=(i=e.size)?i:10,l=e.frame,c=l?l.ymax-l.ymin:0,u=o&&c?o/c:1,h=C.createIdentity()
l&&h.translate(.5*-(l.xmax+l.xmin),.5*-(l.ymax+l.ymin))
const d=e.anchorPoint
if(d){let t=d.x,i=d.y
"Absolute"!==e.anchorPointUnits?l&&(t*=l.xmax-l.xmin,i*=l.ymax-l.ymin):(t/=u,i/=u),h.translate(-t,-i)}1!==u&&h.scale(u,u)
let f=null!=(n=e.rotation)?n:0
e.rotateClockwise&&(f=-f),this._mapRotation&&(f+=this._mapRotation),f&&h.rotate(f*E)
let _=null!=(r=e.offsetX)?r:0,m=null!=(s=e.offsetY)?s:0
if(_||m){if(this._mapRotation){const e=E*this._mapRotation,t=Math.cos(e),i=Math.sin(e),n=_*i+m*t
_=_*t-m*i,m=n}h.translate(_,m)}const p=this.geomUnitsPerPoint()
1!==p&&h.scale(p,p)
const g=t.getAngle()
g&&h.rotate(g),h.translate(t.tx,t.ty),this.push(h,e.scaleSymbolsProportionally)
for(const e of a)if(e&&e.symbol&&e.geometry||M.error("Invalid marker graphic",e),this.drawSymbol(e.symbol,e.geometry,e.textString),this._earlyReturn)break
this.pop()}drawTextSymbol(e,t,i){var n,r,s,a
if(!e)return
if(!Object(f.f)(t))return
if((null!=(n=e.height)?n:10)<=0)return
const o=C.createIdentity()
let l=null!=(r=e.angle)?r:0
l=-l,l&&o.rotate(l*E)
const c=null!=(s=e.offsetX)?s:0,u=null!=(a=e.offsetY)?a:0;(c||u)&&o.translate(c,u)
const h=this.geomUnitsPerPoint()
1!==h&&o.scale(h,h),o.translate(t.x,t.y),this.push(o,!1),this.drawText(e,i),this.pop()}_buildHatchPolyline(e,t,i){let n=(void 0!==e.separation?e.separation:4)*i,r=void 0!==e.rotation?e.rotation:0
if(0===n)return null
n<0&&(n=-n)
let s=0
const a=.5*n
for(;s>a;)s-=n
for(;s<-a;)s+=n
const o=Object(u.m)()
Object(h.a)(o,t),o[0]-=a,o[1]-=a,o[2]+=a,o[3]+=a
const l=[[o[0],o[1]],[o[0],o[3]],[o[2],o[3]],[o[2],o[1]]]
for(;r>180;)r-=180
for(;r<0;)r+=180
const c=Math.cos(r*E),d=Math.sin(r*E),f=-n*d,_=n*c
let m,p,g,b
s=(void 0!==e.offsetX?e.offsetX*i:0)*d-(void 0!==e.offsetY?e.offsetY*i:0)*c,m=g=Number.MAX_VALUE,p=b=-Number.MAX_VALUE
for(const e of l){const t=e[0],i=e[1],n=c*t+d*i,r=-d*t+c*i
m=Math.min(m,n),g=Math.min(g,r),p=Math.max(p,n),b=Math.max(b,r)}g=Math.floor(g/n)*n
let v=c*m-d*g-f*s/n,x=d*m+c*g-_*s/n,y=c*p-d*g-f*s/n,O=d*p+c*g-_*s/n
const T=1+Math.round((b-g)/n),S=[]
for(let e=0;e<T;e++)v+=f,x+=_,y+=f,O+=_,S.push([[v,x],[y,O]])
return{paths:S}}}class P extends I{constructor(e,t){super(e,t),this.reset()}reset(){this._xmin=this._ymin=1/0,this._xmax=this._ymax=-1/0,this._clipCount=0}envelope(){return new x.a(this._xmin,this._ymin,this._xmax-this._xmin,this._ymax-this._ymin)}bounds(){return Object(u.u)(this._xmin,this._ymin,this._xmax,this._ymax)}drawSolidFill(e){if(e&&!(this._clipCount>0))if(Object(f.g)(e))this._processPath(e.rings,0)
else if(Object(f.h)(e))this._processPath(e.paths,0)
else if(Object(f.d)(e)){const t=L(e)
t&&this._processPath(t.rings,0)}else console.error("drawSolidFill Unexpected geometry type!")}drawSolidStroke(e,t,i){if(!e||this._clipCount>0)return
const n=.5*this.transformSize(null!=i?i:0)
if(Object(f.g)(e))this._processPath(e.rings,n)
else if(Object(f.h)(e))this._processPath(e.paths,n)
else if(Object(f.d)(e)){const t=L(e)
t&&this._processPath(t.rings,n)}else console.error("drawSolidStroke unexpected geometry type!")}drawMarkerLayer(e,t){Object(f.g)(t)&&e.markerPlacement&&("CIMMarkerPlacementInsidePolygon"===e.markerPlacement.type||"CIMMarkerPlacementPolygonCenter"===e.markerPlacement.type&&e.markerPlacement.clipAtBoundary)?this._processPath(t.rings,0):super.drawMarkerLayer(e,t)}drawHatchFill(e,t){this.drawSolidFill(e)}drawPictureFill(e,t){this.drawSolidFill(e)}drawGradientFill(e,t){this.drawSolidFill(e)}drawPictureStroke(e,t){this.drawSolidStroke(e,null,t.width)}drawGradientStroke(e,t){this.drawSolidStroke(e,null,t.width)}pushClipPath(e){this.drawSolidFill(e),this._clipCount++}popClipPath(){this._clipCount--}drawImage(e,t){var i
const{url:n}=e,r=null!=(i=e.scaleX)?i:1
let s=r*t,a=t
const l=this._resourceManager.getResource(n)
!t&&Object(o.l)(l)&&(s=r*l.width,a=l.height),this._merge(this.transformPt([-s/2,-a/2]),0),this._merge(this.transformPt([-s/2,a/2]),0),this._merge(this.transformPt([s/2,-a/2]),0),this._merge(this.transformPt([s/2,a/2]),0)}drawText(e,t){if(!t||0===t.length)return
this._textRasterizer||(this._textRasterizer=new y.a)
const i=z(e),[n,r]=this._textRasterizer.computeTextSize(t,i)
let s=0
switch(e.horizontalAlignment){case"Left":s=n/2
break
case"Right":s=-n/2}let a=0
switch(e.verticalAlignment){case"Bottom":a=r/2
break
case"Top":a=-r/2
break
case"Baseline":a=r/6}this._merge(this.transformPt([-n/2+s,-r/2+a]),0),this._merge(this.transformPt([-n/2+s,r/2+a]),0),this._merge(this.transformPt([n/2+s,-r/2+a]),0),this._merge(this.transformPt([n/2+s,r/2+a]),0)}_processPath(e,t){if(e)for(const i of e){const e=i?i.length:0
if(e>1){this._merge(this.transformPt(i[0]),t)
for(let n=1;n<e;n++)this._merge(this.transformPt(i[n]),t)}}}_merge(e,t){e[0]-t<this._xmin&&(this._xmin=e[0]-t),e[0]+t>this._xmax&&(this._xmax=e[0]+t),e[1]-t<this._ymin&&(this._ymin=e[1]-t),e[1]+t>this._ymax&&(this._ymax=e[1]+t)}}class A extends I{constructor(){super(...arguments),this._searchPoint=[0,0],this._searchDistPoint=0,this._textInfo=null}hitTest(e,t,i,n,r,s){const a=s*Object(c.h)(1)
this.setTransform(),this.setGeomUnitsPerPoint(a),this._searchPoint=[(e[0]+e[2])/2,(e[1]+e[3])/2],this._searchDistPoint=(e[2]-e[0])/2/a,this._textInfo=n
const o=t&&("CIMPointSymbol"===t.type&&"Map"!==t.angleAlignment||"CIMTextSymbol"===t.type)
return this._mapRotation=o?r:0,this._earlyReturn=!1,this.drawSymbol(t,i),this._earlyReturn}drawSolidFill(e,t){this._hitTestFill(e)}drawHatchFill(e,t){this._hitTestFill(e)}drawPictureFill(e,t){this._hitTestFill(e)}drawGradientFill(e,t){this._hitTestFill(e)}drawSolidStroke(e,t,i,n,r,s){this._hitTestStroke(e,i)}drawPictureStroke(e,t){this._hitTestStroke(e,t.width)}drawGradientStroke(e,t){this._hitTestStroke(e,t.width)}drawMarkerLayer(e,t){e.markerPlacement&&("CIMMarkerPlacementInsidePolygon"===e.markerPlacement.type||"CIMMarkerPlacementPolygonCenter"===e.markerPlacement.type&&e.markerPlacement.clipAtBoundary)?this._hitTestFill(t):super.drawMarkerLayer(e,t)}pushClipPath(e){}popClipPath(){}drawImage(e,t){var i
const{url:n}=e,r=null!=(i=e.scaleX)?i:1,s=this._resourceManager.getResource(n)
if(Object(o.k)(s)||0===s.height||0===t)return
const a=t*this.geomUnitsPerPoint(),l=a*r*(s.width/s.height),c=this.reverseTransformPt(this._searchPoint),u=this._searchDistPoint
Math.abs(c[0])<l/2+u&&Math.abs(c[1])<a/2+u&&(this._earlyReturn=!0)}drawText(e,t){var i,r,s
const a=this._textInfo
if(!a)return
const o=a.get(e)
if(!o)return
const{text:l,mosaicItem:c}=o
if(null==c||null==(i=c.glyphMosaicItems)||!i.length)return
const u=null!=(r=e.height)?r:10,{lineGapType:h,lineGap:d}=e,f=h?B(h,null!=d?d:0,u):0,_=Object(n.a)(l)[1],m=c.glyphMosaicItems,p="CIMBackgroundCallout"===(null==(s=e.callout)?void 0:s.type),g=Object(w.a)(m,_,{scale:u/S.v,angle:0,xOffset:0,yOffset:0,hAlign:D(e.horizontalAlignment),vAlign:j(e.verticalAlignment),maxLineWidth:512,lineHeight:S.y*Math.max(.25,Math.min(f||1,4)),decoration:e.font.decoration||"none",isCIM:!0,hasBackground:p}),b=this.reverseTransformPt(this._searchPoint),v=b[0],x=b[1]
for(const e of g.glyphs)if(v>e.xTopLeft&&v<e.xBottomRight&&x>-e.yBottomRight&&x<-e.yTopLeft){this._earlyReturn=!0
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
let a=(s[0]-t[0])*(s[0]-t[0])+(s[1]-t[1])*(s[1]-t[1])
if(0===a)continue
a=Math.sqrt(a)
const o=((s[0]-t[0])*(e[1]-t[1])-(s[1]-t[1])*(e[0]-t[0]))/a
if(Math.abs(o)<i){const n=((s[0]-t[0])*(e[0]-t[0])+(s[1]-t[1])*(e[1]-t[1]))/a
if(n>-i&&n<a+i)return!0}}}return!1}}class R extends I{constructor(e,t,i,n){super(t,i),this._applyAdditionalRenderProps=n,this._colorSubstitutionHelper=new m,this._ctx=e}drawSolidFill(e,t){var i
if(!e)return
if(Object(f.g)(e))this._buildPath(e.rings,!0)
else if(Object(f.h)(e))this._buildPath(e.paths,!0)
else if(Object(f.d)(e))this._buildPath(L(e).rings,!0)
else{if(!Object(f.e)(e))return
console.log("CanvasDrawHelper.drawSolidFill - No implementation!")}const n=this._ctx
n.fillStyle="string"==typeof t?t:"rgba("+Math.round(t[0])+","+Math.round(t[1])+","+Math.round(t[2])+","+(null!=(i=t[3])?i:255)/255+")",n.fill("evenodd")}drawSolidStroke(e,t,i,n,r,s){var a
if(!e||!t||0===i)return
if(Object(f.g)(e))this._buildPath(e.rings,!0)
else if(Object(f.h)(e))this._buildPath(e.paths,!1)
else{if(!Object(f.d)(e))return void console.log("CanvasDrawHelper.drawSolidStroke isn't implemented!")
this._buildPath(L(e).rings,!0)}const o=this._ctx
o.strokeStyle="string"==typeof t?t:"rgba("+Math.round(t[0])+","+Math.round(t[1])+","+Math.round(t[2])+","+(null!=(a=t[3])?a:255)/255+")",o.lineWidth=Math.max(this.transformSize(i),.5),this._setCapStyle(n),this._setJoinStyle(r),o.miterLimit=s,o.stroke()}pushClipPath(e){if(this._ctx.save(),Object(f.g)(e))this._buildPath(e.rings,!0)
else if(Object(f.h)(e))this._buildPath(e.paths,!0)
else{if(!Object(f.d)(e))return
this._buildPath(L(e).rings,!0)}this._ctx.clip("evenodd")}popClipPath(){this._ctx.restore()}drawImage(e,t){var i
const{colorSubstitutions:n,url:r,tintColor:s}=e,a=null!=(i=e.scaleX)?i:1,l=this._resourceManager.getResource(r)
if(Object(o.k)(l))return
let c=t*(l.width/l.height),u=t
t||(c=l.width,u=l.height)
const h=Object(O.z)(r)||"src"in l&&Object(O.z)(l.src)
let d="getFrame"in l?v(l):l
n&&(d=this._colorSubstitutionHelper.applyColorSubstituition(d,n)),this._applyAdditionalRenderProps&&!h&&s&&(d=this._colorSubstitutionHelper.tintImageData(d,s))
const f=this.transformPt([0,0]),[_,m]=this.getTransformAngle(),p=this.transformSize(1),g=this._ctx
g.save(),g.setTransform({m11:a*p*_,m12:a*p*m,m21:-p*m,m22:p*_,m41:f[0],m42:f[1]}),g.drawImage(d,-c/2,-u/2,c,u),g.restore()}drawText(e,t){if(!t||0===t.length)return
this._textRasterizer||(this._textRasterizer=new y.a)
const i=z(e)
i.size*=this.transformSize(Object(c.i)(1))
const n=this._textRasterizer.rasterizeText(t,i)
if(!n)return
const{size:r,anchorX:s,anchorY:a,canvas:o}=n,l=r[0]*(s+.5),u=r[1]*(a-.5),h=this._ctx,d=this.transformPt([0,0]),[f,_]=this.getTransformAngle()
h.save(),h.setTransform({m11:1*f,m12:1*_,m21:-1*_,m22:1*f,m41:d[0]-1*l,m42:d[1]+1*u}),h.drawImage(o,0,0),h.restore()}drawPictureFill(e,t){if(!e)return
let{colorSubstitutions:i,height:n,offsetX:r,offsetY:s,rotation:a,scaleX:l,tintColor:c,url:u}=t
const h=this._resourceManager.getResource(u)
if(Object(o.k)(h))return
if(Object(f.g)(e))this._buildPath(e.rings,!0)
else if(Object(f.h)(e))this._buildPath(e.paths,!0)
else if(Object(f.d)(e))this._buildPath(L(e).rings,!0)
else{if(!Object(f.e)(e))return
console.log("CanvasDrawHelper.drawPictureFill - No implementation!")}const d=this._ctx,_=Object(O.z)(u)||"src"in h&&Object(O.z)(h.src)
let m,p="getFrame"in h?v(h):h
if(i&&(p=this._colorSubstitutionHelper.applyColorSubstituition(p,i)),this._applyAdditionalRenderProps){_||c&&(p=this._colorSubstitutionHelper.tintImageData(p,c)),m=d.createPattern(p,"repeat")
const e=this.transformSize(1)
a||(a=0),r?r*=e:r=0,s?s*=e:s=0,n&&(n*=e)
const t=n?n/h.height:1,i=l&&n?l*n/h.width:1
if(0!==a||1!==t||1!==i||0!==r||0!==s){const e=new DOMMatrix
e.rotateSelf(0,0,-a).translateSelf(r,s).scaleSelf(i,t,1),m.setTransform(e)}}else m=d.createPattern(p,"repeat")
d.save(),d.fillStyle=m,d.fill("evenodd"),d.restore()}drawPictureStroke(e,t){if(!e)return
let{colorSubstitutions:i,capStyle:n,joinStyle:r,miterLimit:a,tintColor:l,url:u,width:h}=t
const d=this._resourceManager.getResource(u)
if(Object(o.k)(d))return
let _
if(Object(f.g)(e))_=e.rings
else if(Object(f.h)(e))_=e.paths
else{if(!Object(f.d)(e))return Object(f.e)(e)?void console.log("CanvasDrawHelper.drawPictureStroke - No implementation!"):void 0
_=L(e).rings}h||(h=d.width)
const m=Object(O.z)(u)||"src"in d&&Object(O.z)(d.src)
let p="getFrame"in d?v(d):d
i&&(p=this._colorSubstitutionHelper.applyColorSubstituition(p,i)),this._applyAdditionalRenderProps&&(m||l&&(p=this._colorSubstitutionHelper.tintImageData(p,l)))
const g=Math.max(this.transformSize(Object(c.h)(h)),.5),b=g/p.width,x=this._ctx,y=x.createPattern(p,"repeat-y")
let T,S
x.save(),this._setCapStyle(n),this._setJoinStyle(r),void 0!==a&&(x.miterLimit=a),x.lineWidth=g
for(let e of _)if(e=Object(s.a)(e),N(e),e&&!(e.length<=1)){T=this.transformPt(e[0])
for(let t=1;t<e.length;t++){S=this.transformPt(e[t])
const i=F(T,S),n=new DOMMatrix
n.translateSelf(0,T[1]-g/2).scaleSelf(b,b,1).rotateSelf(0,0,90-i),y.setTransform(n),x.strokeStyle=y,x.beginPath(),x.moveTo(T[0],T[1]),x.lineTo(S[0],S[1]),x.stroke(),T=S}}x.restore()}_buildPath(e,t){const i=this._ctx
if(i.beginPath(),e)for(const n of e){const e=n?n.length:0
if(e>1){let r=this.transformPt(n[0])
i.moveTo(r[0],r[1])
for(let t=1;t<e;t++)r=this.transformPt(n[t]),i.lineTo(r[0],r[1])
t&&i.closePath()}}}_setCapStyle(e){switch(e){case b.q.Butt:this._ctx.lineCap="butt"
break
case b.q.Round:this._ctx.lineCap="round"
break
case b.q.Square:this._ctx.lineCap="square"}}_setJoinStyle(e){switch(e){case b.s.Bevel:this._ctx.lineJoin="bevel"
break
case b.s.Round:this._ctx.lineJoin="round"
break
case b.s.Miter:this._ctx.lineJoin="miter"}}}function F(e,t){const i=t[0]-e[0],n=t[1]-e[1]
return 180/Math.PI*Math.atan2(n,i)}const L=e=>e?{spatialReference:e.spatialReference,rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]}:null,D=e=>{switch(e){case"Left":return T.a.Left
case"Right":return T.a.Right
case"Center":return T.a.Center
case"Justify":return M.warnOnce("Horizontal alignment 'justify' is not implemented. Falling back to 'center'."),T.a.Center}},j=e=>{switch(e){case"Top":return T.b.Top
case"Center":return T.b.Center
case"Bottom":return T.b.Bottom
case"Baseline":return T.b.Baseline}},B=(e,t,i)=>{switch(e){case"ExtraLeading":return 1+t/i
case"Multiple":return t
case"Exact":return t/i}}
function z(e,t=1){const i=Object(O.i)(e),n=Object(O.j)(e.fontStyleName),s=Object(r.a)(e.fontFamilyName),{weight:a,style:o}=n,l=t*(e.height||5),c=Object(O.k)(e.horizontalAlignment),u=Object(O.l)(e.verticalAlignment),h=Object(O.m)(e),d=Object(O.p)(e.haloSymbol),f=d?t*(0|e.haloSize):0
return{color:h,size:l,horizontalAlignment:c,verticalAlignment:u,font:{family:s,style:Object(O.n)(o),weight:Object(O.o)(a),decoration:i},halo:{size:f||0,color:d,style:o},pixelRatio:1,premultiplyColors:!0}}function N(e){let t,i,n,r,s,a=e[0],o=1
for(;o<e.length;)t=e[o][0]-a[0],i=e[o][1]-a[1],r=0!==t?i/t:Math.PI/2,void 0!==n&&r-n<=1e-4?(e.splice(o-1,1),a=s):(s=a,a=e[o],o++),n=r}},1594:function(e,t,i){"use strict"
i.d(t,"a",(function(){return _})),i.d(t,"b",(function(){return m})),i.d(t,"c",(function(){return c})),i.d(t,"d",(function(){return u}))
var n=i(446),r=i(235),s=i(233),a=i(980),o=i(1333)
const l=s.a.getLogger("esri.views.2d.layers.features.support.rendererUtils"),c=e=>{if(!("visualVariables"in e)||!e.visualVariables||!e.visualVariables.length)return e
const t=e.clone(),i=t.visualVariables.map(e=>h(e)?d(e):e)
return t.visualVariables=i,t}
function u(e){return e.map(e=>h(e)?d(e.clone()):e)}function h(e){return("size"===e.type||"color"===e.type||"opacity"===e.type)&&null!=e.stops}function d(e){var t
return e.stops=function(e,t){return t.length<=8?t:(l.warn(`Found ${t.length} Visual Variable stops, but MapView only supports 8. Displayed stops will be simplified.`),t.length>16?function(e,t){const[i,...n]=t,r=n.pop(),s=n[0].value,o=n[n.length-1].value,l=(o-s)/6,c=[]
for(let i=s;i<o;i+=l){let r=0
for(;i>=n[r].value;)r++
const s=n[r],o=t[r-1],l=i-o.value,u=s.value===o.value?1:l/(s.value-o.value)
if("color"===e){const e=n[r],s=t[r-1],a=e.color.clone()
a.r=f(s.color.r,a.r,u),a.g=f(s.color.g,a.g,u),a.b=f(s.color.b,a.b,u),a.a=f(s.color.a,a.a,u),c.push({value:i,color:a,label:e.label})}else if("size"===e){const e=n[r],s=t[r-1],o=Object(a.k)(e.size),l=f(Object(a.k)(s.size),o,u)
c.push({value:i,size:l,label:e.label})}else{const e=n[r],s=f(t[r-1].opacity,e.opacity,u)
c.push({value:i,opacity:s,label:e.label})}}return[i,...c,r]}(e,t):function(e){const[t,...i]=e,n=i.pop()
for(;i.length>6;){let e=0,t=0
for(let n=1;n<i.length;n++){const r=i[n-1],s=i[n],a=Math.abs(s.value-r.value)
a>t&&(t=a,e=n)}i.splice(e,1)}return[t,...i,n]}(t))}(e.type,null!=(t=e.stops)?t:[]),e}function f(e,t,i){return(1-i)*e+i*t}function _(){if(Object(r.a)("heatmap-force-raster"))return"raster"
const{supportsTextureFloat:e,supportsTextureHalfFloat:t,supportsColorBufferFloat:i,supportsColorBufferFloatBlend:n,supportsColorBufferHalfFloat:s}=Object(o.a)("2d")
return e&&i&&n||t&&s?"symbol":Object(r.a)("heatmap-allow-raster-fallback")?"raster":"none"}function m(e){if(!e)return!0
switch(e.type){case"dot-density":if(!Object(o.a)("2d").supportsTextureFloat)return l.error(new n.a("webgl-missing-extension","Missing WebGL extension OES_Texture_Float which is required for DotDensity")),!1
break
case"heatmap":{const e=_()
if("none"===e||"raster"===e&&!Object(r.a)("heatmap-force-raster")){const t=Object(o.a)("2d"),i=["supportsTextureFloat","supportsTextureHalfFloat","supportsColorBufferFloat","supportsColorBufferFloatBlend","supportsColorBufferHalfFloat"].filter(e=>!t[e]).join(", ")
if("none"===e)return l.errorOnce(new n.a("webgl-missing-extension",`Missing WebGL${t.type} requirements for Heatmap: ${i}`)),!1
"raster"===e&&l.warnOnce(`Missing WebGL${t.type} requirements for accelerated Heatmap: ${i}. Feature support may be limited.`)}break}}return!0}},1610:function(e,t,i){"use strict"
var n,r,s
i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return s})),function(e){e[e.FILL=1]="FILL",e[e.LINE=2]="LINE",e[e.SYMBOL=3]="SYMBOL",e[e.CIRCLE=4]="CIRCLE"}(n||(n={})),function(e){e[e.BACKGROUND=0]="BACKGROUND",e[e.FILL=1]="FILL",e[e.OUTLINE=2]="OUTLINE",e[e.LINE=3]="LINE",e[e.ICON=4]="ICON",e[e.CIRCLE=5]="CIRCLE",e[e.TEXT=6]="TEXT",e[e.TILEINFO=7]="TILEINFO"}(r||(r={})),function(e){e[e.PAINTER_CHANGED=0]="PAINTER_CHANGED",e[e.LAYOUT_CHANGED=1]="LAYOUT_CHANGED",e[e.LAYER_CHANGED=2]="LAYER_CHANGED",e[e.LAYER_REMOVED=3]="LAYER_REMOVED",e[e.SPRITES_CHANGED=4]="SPRITES_CHANGED"}(s||(s={}))},1614:function(e,t,i){"use strict"
i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return s})),i.d(t,"c",(function(){return n})),i.d(t,"d",(function(){return a}))
const n=!0,r=32,s=1.5,a=200},1615:function(e,t,i){"use strict"
function n(e){return window.WebGL2RenderingContext&&e instanceof window.WebGL2RenderingContext}i.d(t,"a",(function(){return n}))},1617:function(e,t,i){"use strict"
i.d(t,"a",(function(){return u})),i.d(t,"b",(function(){return l}))
var n=i(1475),r=i(1184),s=i(1135),a=i(1200),o=i(1283)
function l(e){if(!e)return null
if(e instanceof s.a&&(e=c(e.toJSON())),e instanceof a.Zone)return e
if("unknown"===e.toLowerCase())return n.d.instance
if("system"===e.toLowerCase())return a.SystemZone.instance
if("utc"===e.toLowerCase())return a.FixedOffsetZone.utcInstance
if(/^[\+\-]?[0-9]{1,2}([:][0-9]{2})?$/.test(e)){const t=a.FixedOffsetZone.parseSpecifier("UTC"+(e.startsWith("+")||e.startsWith("-")?"":"+")+e)
if(t)return t}const t=a.IANAZone.create(e)
if(!t.isValid)throw new n.b(n.c.TimeZoneNotRecognised)
return t}function c(e){return null!=e&&e.timeZoneIANA?null==e?void 0:e.timeZoneIANA:null!=e&&e.timeZone?Object(o.a)(e,""):""}class u{constructor(){this.dateTimeReferenceMetaData=null,this._fieldTimeZoneIndex={},this._fieldIndex=null,this._ianaPreferred=null,this._ianaTimeInfo=null,this._ianaEditFields=null,this._ianaLayerDateFields=null}static create(e,t){const i=new u
return i.dateTimeReferenceMetaData=t,i._fieldIndex=e instanceof r.a?e:new r.a(e),i}static createFromLayer(e){var t,i,n,r,s,a,o,l
if(!e)return null
if(!e.fieldsIndex)return!e.declaredClass&&e.fields?u.create(e.fields,e):null
const c=new u
return c._fieldIndex=e.fieldsIndex,c.dateTimeReferenceMetaData={timeInfo:null!=(t=null==e||null==(i=e.timeInfo)?void 0:i.toJSON())?t:null,editFieldsInfo:null!=(n=null==e||null==(r=e.editFieldsInfo)?void 0:r.toJSON())?n:null,dateFieldsTimeReference:null!=(s=null==e||null==(a=e.dateFieldsTimeReference)?void 0:a.toJSON())?s:null,preferredTimeReference:null!=(o=null==e||null==(l=e.preferredTimeReference)?void 0:l.toJSON())?o:null,datesInUnknownTimezone:!0===(null==e?void 0:e.datesInUnknownTimezone)},c}fieldTimeZone(e){var t,i,n,r,s,a,o,l,c,u,h,d,f,_,m,p,g,b,v,x,y,O,T
const S=null==(t=this._fieldIndex)?void 0:t.get(e)
if(!S)return null
if("date"!==S.type&&"esriFieldTypeDate"!==S.type)return null
const w=this._fieldTimeZoneIndex[S.name]
if(void 0!==w)return w
const E=[{field:null==(i=this.dateTimeReferenceMetaData)||null==(n=i.editFieldsInfo)?void 0:n.creationDateField,timeReference:null==(r=this.dateTimeReferenceMetaData)||null==(s=r.editFieldsInfo)?void 0:s.dateFieldsTimeReference,isunknown:!0===(null==(a=this.dateTimeReferenceMetaData)?void 0:a.datesInUnknownTimezone)},{field:null==(o=this.dateTimeReferenceMetaData)||null==(l=o.editFieldsInfo)?void 0:l.editDateField,timeReference:null==(c=this.dateTimeReferenceMetaData)||null==(u=c.editFieldsInfo)?void 0:u.dateFieldsTimeReference,isunknown:!0===(null==(h=this.dateTimeReferenceMetaData)?void 0:h.datesInUnknownTimezone)},{field:null==(d=this.dateTimeReferenceMetaData)||null==(f=d.timeInfo)?void 0:f.startTimeField,timeReference:null==(_=this.dateTimeReferenceMetaData)||null==(m=_.timeInfo)?void 0:m.timeReference,isunknown:!0===(null==(p=this.dateTimeReferenceMetaData)?void 0:p.datesInUnknownTimezone)},{field:null==(g=this.dateTimeReferenceMetaData)||null==(b=g.timeInfo)?void 0:b.endTimeField,timeReference:null==(v=this.dateTimeReferenceMetaData)||null==(x=v.timeInfo)?void 0:x.timeReference,isunknown:!0===(null==(y=this.dateTimeReferenceMetaData)?void 0:y.datesInUnknownTimezone)}]
for(const e of E)if(e.field===S.name){const t=this.convertToIANA(e.timeReference,e.isunknown)
return this._fieldTimeZoneIndex[S.name]=t,t}const M=this.convertToIANA(null==(O=this.dateTimeReferenceMetaData)?void 0:O.dateFieldsTimeReference,null==(T=this.dateTimeReferenceMetaData)?void 0:T.datesInUnknownTimezone)
return this._fieldTimeZoneIndex[S.name]=M,M}convertToIANA(e,t){return t?"unknown":c(e)}get layerPreferredTimeZone(){var e,t
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
return this._ianaLayerDateFields=this.convertToIANA(i,!0===(null==(t=this.dateTimeReferenceMetaData)?void 0:t.datesInUnknownTimezone)),this._ianaLayerDateFields}}},1639:function(e,t,i){"use strict"
i.d(t,"a",(function(){return n}))
class n{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(e,t){var i
return null==(i=this._outer.get(e))?void 0:i.get(t)}set(e,t,i){const n=this._outer.get(e)
n?n.set(t,i):this._outer.set(e,new Map([[t,i]]))}delete(e,t){const i=this._outer.get(e)
i&&(i.delete(t),0===i.size&&this._outer.delete(e))}forEach(e){this._outer.forEach((t,i)=>e(t,i))}}},1644:function(e,t,i){"use strict"
i.d(t,"a",(function(){return c}))
var n=i(235),r=i(1003),s=i(1516),a=i(1459),o=i(1460)
const l=(e,t)=>e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col
class c extends s.a{constructor(e){super(),this._tileInfoView=e}get requiresDedicatedFBO(){return!1}renderChildren(e){this.sortChildren(l),this.setStencilReference(e),super.renderChildren(e)}createRenderParams(e){const{state:t}=e,i=super.createRenderParams(e)
return i.requiredLevel=this._tileInfoView.getClosestInfoForScale(t.scale).level,i.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(t.scale),i}prepareRenderPasses(e){const t=super.prepareRenderPasses(e)
return t.push(e.registerRenderPass({name:"stencil",brushes:[o.a],drawPhase:r.c.DEBUG|r.c.MAP|r.c.HIGHLIGHT,target:()=>this.getStencilTarget()})),Object(n.a)("esri-tiles-debug")&&t.push(e.registerRenderPass({name:"tileInfo",brushes:[a.a],drawPhase:r.c.DEBUG,target:()=>this.children})),t}getStencilTarget(){return this.children}setStencilReference(e){let t=1
for(const e of this.children)e.stencilRef=t++}}},1659:function(e,t,i){"use strict"
i.d(t,"a",(function(){return o}))
var n=i(23),r=i(1057),s=i(1153),a=i(1559)
class o extends a.a{static fromFeatures(e,t){const{objectIdField:i,geometryType:n}=t,s=Object(r.c)([],e,n,!1,!1,i)
for(let t=0;t<s.length;t++)s[t].displayId=e[t].displayId
return o.fromOptimizedFeatures(s,t)}static fromFeatureSet(e,t){const i=Object(r.b)(e,t.objectIdField)
return o.fromOptimizedFeatureSet(i,t)}static fromOptimizedFeatureSet(e,t){const{features:i}=e,n=o.fromOptimizedFeatures(i,t)
n._exceededTransferLimit=e.exceededTransferLimit,n._transform=e.transform
for(const t of e.fields)"esriFieldTypeDate"===t.type&&n._dateFields.add(t.name)
return n}static fromOptimizedFeatures(e,t,i){const n=a.a.createInstance(),r=new o(n,e,t)
return r._transform=i,r}constructor(e,t,i){super(e,i),this._exceededTransferLimit=!1,this._featureIndex=-1,this._dateFields=new Set,this._geometryType=null==i?void 0:i.geometryType,this._features=t}get _current(){return this._features[this._featureIndex]}get geometryType(){return this._geometryType}get hasFeatures(){return!!this._features.length}get hasNext(){return this._featureIndex+1<this._features.length}get exceededTransferLimit(){return this._exceededTransferLimit}get hasZ(){return!1}get hasM(){return!1}removeIds(e){const t=new Set(e)
this._features=this._features.filter(e=>!(e.objectId&&t.has(e.objectId)))}append(e){for(const t of e)this._features.push(t)}getSize(){return this._features.length}getCursor(){return this.copy()}getQuantizationTransform(){return this._transform}getAttributeHash(){let e=""
for(const t in this._current.attributes)e+=this._current.attributes[t]
return e}getIndex(){return this._featureIndex}setIndex(e){this._featureIndex=e}getObjectId(){var e
return null==(e=this._current)?void 0:e.objectId}getDisplayId(){return this._current.displayId}setDisplayId(e){this._current.displayId=e}getGroupId(){return this._current.groupId}setGroupId(e){this._current.groupId=e}copy(){const e=new o(this.instance,this._features,this.fullSchema())
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
i.d(t,"a",(function(){return B})),i.d(t,"b",(function(){return M})),i.d(t,"c",(function(){return w}))
var n=i(446),r=i(235),s=i(233),a=i(23),o=i(980),l=i(1198),c=i(1143),u=i(1285),h=i(1003),d=i(1022),f=i(1187),_=i(1512)
function m(e){if(!e)return h.f.NONE
let t=0
for(const i of e)if("size"===i.type){const e=Object(_.a)(i)
t|=e,"outline"===i.target&&(t|=e<<4)}else"color"===i.type?t|=h.f.COLOR:"opacity"===i.type?t|=h.f.OPACITY:"rotation"===i.type&&(t|=h.f.ROTATION)
return t}var p=i(1340),g=(i(1350),i(1422)),b=i(1e3)
function v(e,t){return Math.max(e,t)}i(1447),i(1356),b.f.metrics,new g.a(0,0,24,24)
var x=i(1594),y=i(1312),O=i(1558)
const T=s.a.getLogger("esri.views.2d.layers.features.schemaUtils"),S="ValidationError"
function w(e,t){let i=0,n=0,r=h.e.DEFAULT
if(Object(a.l)(e)){if(n=function(e,t){if(!("visualVariables"in e))return 0
if(!e.hasVisualVariables("size"))return 0
const i=e.getVisualVariablesForType("size")
if(!i[0])return 0
const n=i[0]
if(t&&"cluster_count"===n.field&&"cluster"===t.type)return t.clusterMaxSize
if("outline"===n.target)return 0
if("stops"===n.transformationType)return n.stops.map(e=>e.size).reduce(v,0)
if("clamped-linear"===n.transformationType){let e=-1/0,t=-1/0
return e="number"==typeof n.maxSize?n.maxSize:n.maxSize.stops.map(e=>e.size).reduce(v,0),t="number"==typeof n.minSize?n.minSize:n.minSize.stops.map(e=>e.size).reduce(v,0),Math.max(e,t)}return"real-world-size"===n.transformationType?30:void 0}(e,t),"visualVariables"in e&&(i=m(e.visualVariables||[]),"dot-density"===e.type&&(r=h.e.DOT_DENSITY)),"heatmap"===e.type&&(r=h.e.HEATMAP),"dictionary"===e.type)return{maxVVSize:n,vvFlags:i,symbologyType:h.e.DEFAULT}
if("pie-chart"===e.type)return{maxVVSize:n,vvFlags:i,symbologyType:h.e.PIE_CHART}
if(r!==h.e.DOT_DENSITY&&r!==h.e.HEATMAP){const t=e.getSymbols()
"backgroundFillSymbol"in e&&e.backgroundFillSymbol&&t.push(e.backgroundFillSymbol)
let i=!0,n=!0
for(const e of t)if("cim"===e.type&&(n=!1),"simple-fill"===e.type||"picture-fill"===e.type){const t=e.outline,r=t&&"none"!==t.style&&"solid"!==t.style,s="simple-fill"===e.type&&"none"!==e.style&&"solid"!==e.style
r&&(i=!1),("picture-fill"===e.type||s||r)&&(n=!1)}i?r=n?h.e.OUTLINE_FILL_SIMPLE:h.e.OUTLINE_FILL:n&&(r=h.e.SIMPLE)}}return{vvFlags:i,maxVVSize:n,symbologyType:r}}let E=null
function M(e){if(Object(r.a)("esri-2d-update-debug")){const t=C(e,!0)
console.debug("Created new schema",t),console.debug("Schema diff",Object(c.a)(E,t)),E=t}return C(e)}function C(e,t=!1){try{var i,r
const s=function(e,t=!1){const i=new Array
return i.push(function(e,t,i=!1){var r,s,o
const l={indexCount:0,fields:{}},c="featureReduction"in e&&null!=(r=e.featureReduction)?r:void 0,d=c?"aggregate":"feature"
if("sublayers"in e){const t={type:"subtype",subtypeField:e.subtypeField,renderers:{},symbologyType:h.e.DEFAULT},r={type:"subtype",mapping:{},target:"feature",subtypeField:e.subtypeField},s={type:"subtype",classes:{}},o={type:"symbol",target:"feature",aggregateFields:[],attributes:l,storage:r,mesh:{matcher:t,aggregateMatcher:null,labels:s,sortKey:null}},c=new Set
let u=0
for(const{renderer:o,subtypeCode:f,labelingInfo:_,labelsVisible:p}of e.sublayers){let e=0
"visualVariables"in o&&o.visualVariables&&(o.visualVariables.some(e=>"rotation"!==e.type)&&T.warnOnce("SubtypeGroupLayer currently only supports rotation visualVariables. All other visualVariable types will be ignored."),e=m(o.visualVariables.filter(e=>"size"!==e.type)))
const g={symbologyType:h.e.DEFAULT,vvFlags:e,maxVVSize:0},b=B(l,d,o,g,i),v=j(l,d,o),x=p&&_
if("dictionary"===b.type)throw new n.a(S,"Dictionary renderer is not supported in subtype layers")
if("subtype"===b.type)throw new n.a(S,"Nested subtype renderers is not supported")
if(Object(a.l)(v)&&"subtype"===v.type)throw new n.a(S,"Nested subtype storage is not supported")
if(Object(a.l)(v)&&Object(a.l)(v.attributeMapping))throw new n.a(S,"Non-visual-variable attributes are not supported in subtype layers")
if("heatmap"===b.type)throw new n.a(S,"Heatmaps are not supported in subtype layers")
if("pie-chart"===b.type)throw new n.a(S,"Pie-charts are not supported in subtype layers")
if(c.has(f))throw new n.a(S,"Subtype codes for sublayers must be unique")
c.add(f),t.renderers[f]=b,r.mapping[f]=v,x&&(s.classes[f]=x.map(e=>D(l,e,"feature",u++,g,i)))}return o}if("heatmap"===(null==(s=e.renderer)?void 0:s.type)&&"raster"===Object(x.a)()){const{radius:t,fieldOffset:i,field:n}=e.renderer
return{type:"heatmap",aggregateFields:[],attributes:l,target:d,storage:null,mesh:{radius:t,fieldOffset:i,field:F(l,{target:d,field:n,resultType:"numeric"}).field}}}const f=function(e,t,i){var r,s
const a="featureReduction"in t&&t.featureReduction
if(!a)return{fields:[],labels:[],matcher:void 0,rendererOverride:void 0}
const o=[]
let l=null,c=Object(O.b)(t.geometryType),h=[],d=null
if(a)switch(a.type){case"selection":return T.error(new n.a(S,"Mapview does not support `selection` reduction type",a)),{fields:[],labels:[],matcher:void 0,rendererOverride:void 0}
case"cluster":case"binning":if(o.push(...null!=(r=a.fields)?r:[]),"cluster"===a.type?c="esriGeometryPoint":"binning"===a.type&&(c="esriGeometryPolygon"),!a.renderer||null!=(s=a.renderer.authoringInfo)&&s.isAutoGenerated){if("cluster"===a.type){if(d=Object(y.b)(o,t.renderer,a,null,!0),a.symbol){const e=w(d,a)
l={type:"simple",symbol:Object(p.createSymbolSchema)(a.symbol,e,i),symbologyType:e.symbologyType}}h=a&&a.labelsVisible&&a.labelingInfo||[]}}else{if("cluster"===a.type){const{renderer:e}=Object(y.d)(a.renderer,a,null)
d=e}else d=a.renderer
const t=w(a.renderer,a)
l=B(e,"aggregate",a.renderer,t,i),h=a&&a.labelsVisible&&a.labelingInfo||[]}}return function(e,t){const i={mesh:!0,storage:!0}
for(const n of t){const{name:t,onStatisticField:r,onStatisticExpression:s,statisticType:a}=n
let o,l
const c="numeric",u="feature"
s?l=L(e,{type:"expression",target:u,valueExpression:s.expression,resultType:c}).fieldIndex:o=L(e,{type:"field",target:u,field:r,resultType:c}).field,L(e,{type:"statistic",target:"aggregate",name:t,context:i,inField:o,inFieldIndex:l,statisticType:a})}}(e,o),{labels:Object(u.b)(h,"binning"===a.type?"esriGeometryPolygon":c),matcher:l,fields:o,rendererOverride:d}}(l,e,i),_=Object(O.b)(e.geometryType),g=null!=(o=f.rendererOverride)?o:e.renderer,b=w(g,c),v=B(l,d,g,b,i),E=j(l,d,g),M=function(e,t,i,r){if(Object(a.l)(r))return null
if(Object(a.l)(t)&&t.length){t.length>1&&T.warn(`Layer rendering currently only supports ordering by 1 orderByInfo, but found ${t.length}. All but the first will be discarded`)
const i=t[0],r="ascending"===i.order?"asc":"desc"
return i.field?{field:i.field,order:r}:i.valueExpression?{fieldIndex:L(e,{type:"expression",target:"feature",valueExpression:i.valueExpression,resultType:"numeric"}).fieldIndex,order:r}:(T.error(new n.a(S,"Expected to find a field or valueExpression for OrderByInfo",i)),null)}return Object(a.l)(i)&&"unique-value"===i.type&&i.orderByClassesEnabled?{byRenderer:!0,order:"asc"}:null}(l,e.orderBy,e.renderer,c),C=e.labelsVisible&&e.labelingInfo||[],I=Object(u.b)(C,_)
let P=0
const A=[...I.map(e=>D(l,e,"feature",P++,b,i)),...f.labels.map(e=>D(l,e,"aggregate",P++,b,i))]
return{type:"symbol",target:d,attributes:l,aggregateFields:f.fields,storage:E,mesh:{matcher:v,labels:{type:"simple",classes:A},aggregateMatcher:f.matcher,sortKey:M}}}(e)),i}(e,t),c=function(e){var t
return"heatmap"===(null==(t=e.renderer)?void 0:t.type)&&"raster"===Object(x.a)()?{type:"heatmap"}:{type:"symbol"}}(e),d={}
s.map(t=>function(e,t,i){switch(i.target){case"feature":return void A(e,P(t),i)
case"aggregate":{if(!("featureReduction"in t))return
const r=t.featureReduction
switch(null==r?void 0:r.type){case"selection":throw new n.a(S,"Mapview does not support `selection` reduction type",r)
case"binning":return A(e,P(t),i),void function(e,t,i,n){var r
e.aggregate||(e.aggregate={name:"aggregate",type:"bin",filters:null,input:"feature",params:{fixedBinLevel:t.fixedBinLevel,fields:(null!=(r=t.fields)?r:[]).map(e=>({...e.toJSON(),type:R(e,i)}))},attributes:{}}),I(e.aggregate,n.attributes.fields)}(e,r,t.fields.map(e=>e.toJSON()),i)
case"cluster":return A(e,P(t),i),void function(e,t,i,n){var r,s
e.aggregate||(e.aggregate={name:"aggregate",type:"cluster",input:"feature",filters:null,attributes:{},params:{clusterRadius:Object(o.h)(t.clusterRadius/2),clusterPixelBuffer:64*Math.ceil(Object(o.h)(t.clusterMaxSize)/64),fields:null==(r=null!=(s=t.fields)?s:[])?void 0:r.map(e=>({...e.toJSON(),type:R(e,i)}))}}),I(e.aggregate,n.attributes.fields)}(e,r,t.fields.map(e=>e.toJSON()),i)}}}}(d,e,t))
const f=Object(a.l)(e.subtypeCode)?`${e.subtypeField} = ${e.subtypeCode}`:null
return{source:{definitionExpression:Object(a.u)(Object(l.b)(e.definitionExpression,f)),fields:e.fields.map(e=>e.toJSON()),gdbVersion:e.gdbVersion,historicMoment:null==(i=e.historicMoment)?void 0:i.getTime(),outFields:e.availableFields,pixelBuffer:e.pixelBuffer,spatialReference:e.spatialReference.toJSON(),timeExtent:null==(r=e.timeExtent)?void 0:r.toJSON(),customParameters:e.customParameters},attributes:{fields:{},indexCount:0},processors:s,tileRenderer:c,targets:d}}catch(e){if(e.fieldName===S)return T.error(e),null
throw e}}function I(e,t){for(const r in t){const s=t[r]
if(s.target!==e.name)continue
const a=e.attributes[r]
if(null!=a&&a.context){var i,n
const e=a.context
e.mesh=e.mesh||(null==(i=s.context)?void 0:i.mesh),e.storage=e.storage||(null==(n=s.context)?void 0:n.storage)}else e.attributes[r]=s}return e}function P(e){var t,i,n,r,s
return[null!=(t=null==(i=Object(a.u)(e.filter))?void 0:i.toJSON())?t:null,null!=(n=null==(r=Object(a.u)(null==(s=Object(a.u)(e.featureEffect))?void 0:s.filter))?void 0:r.toJSON())?n:null]}function A(e,t,i){return e.feature||(e.feature={name:"feature",input:"source",filters:t,attributes:{}}),I(e.feature,i.attributes.fields),e}function R(e,t){const{onStatisticExpression:i,onStatisticField:r,statisticType:s}=e
switch(s){case"min":case"max":case"avg":case"avg_angle":case"sum":case"count":return"esriFieldTypeDouble"
case"mode":{if(i){const{returnType:t}=i
return t?"string"===t?"esriFieldTypeString":"esriFieldTypeDouble":(T.error(new n.a(S,"Unable to infer type of aggregateField with onStatisticExpression. ReturnType is not defined",e)),"esriFieldTypeString")}const s=t.find(e=>e.name===r)
return s?s.type:(T.error(new n.a(S,"Unable to infer type of aggregateField with onStatisticExpression. ReturnType is not defined",e)),"esriFieldTypeString")}}}function F(e,t){return t.field?L(e,{...t,type:"field",field:t.field}):t.valueExpression?L(e,{...t,type:"expression",valueExpression:t.valueExpression}):{field:void 0,fieldIndex:void 0}}function L(e,t){switch(t.type){case"expression":{const i=t.valueExpression
if(!e.fields[i]){const n=e.indexCount++
e.fields[i]={...t,name:i,fieldIndex:n}}return{fieldIndex:e.fields[i].fieldIndex}}case"label-expression":{const i=JSON.stringify(t.label)
if(!e.fields[i]){const n=e.indexCount++
e.fields[i]={...t,name:i,fieldIndex:n}}return{fieldIndex:e.fields[i].fieldIndex}}case"field":{const i=t.field
return"aggregate"===t.target&&e.fields[i]||(e.fields[i]={...t,name:i}),{field:i}}case"statistic":return e.fields[t.name]={...t},{field:t.name}}}function D(e,t,i,n,r,s=!1){const a=L(e,{type:"label-expression",target:i,context:{mesh:!0},resultType:"string",label:{labelExpression:t.labelExpression,labelExpressionInfo:t.labelExpressionInfo?{expression:t.labelExpressionInfo.expression}:null,symbol:!!t.symbol,where:t.where}}),{fieldIndex:o}=a
return{...Object(p.createSymbolSchema)(t,r,s),fieldIndex:o,target:i,index:n}}function j(e,t,i){let n
switch(i.type){case"simple":case"class-breaks":case"unique-value":case"dictionary":n={visualVariables:!0,attributes:null}
break
default:n=Object(f.c)(i).getStorageSpec(i)}return function(e,t,i,n){if(Object(a.k)(i))return null
const{visualVariables:r,attributes:s}=i
let o=null
r&&"visualVariables"in n&&(o=function(e,t,i){if(!i||!i.length)return[]
const n={storage:!0},r="numeric"
return Object(x.d)(i).map(i=>{var s
const a=Object(d.p)(i.type),{field:o,fieldIndex:l}=F(e,{target:t,valueExpression:i.valueExpression,field:i.field,context:n,resultType:r})
switch(i.type){case"size":return"$view.scale"===i.valueExpression?null:{type:"size",binding:a,field:o,fieldIndex:l,normalizationField:F(e,{target:t,field:i.normalizationField,context:n,resultType:r}).field,valueRepresentation:null!=(s=i.valueRepresentation)?s:null}
case"color":return{type:"color",binding:a,field:o,fieldIndex:l,normalizationField:F(e,{target:t,field:i.normalizationField,context:n,resultType:r}).field}
case"opacity":return{type:"opacity",binding:a,field:o,fieldIndex:l,normalizationField:F(e,{target:t,field:i.normalizationField,context:n,resultType:r}).field}
case"rotation":return{type:"rotation",binding:a,field:o,fieldIndex:l}}}).filter(a.l)}(e,t,n.visualVariables))
const l=Object(a.l)(o)?4:0
let c=null
return Object(a.l)(s)&&(c=s.map((i,n)=>{const{field:r,fieldIndex:s}=F(e,{valueExpression:i.valueExpression,field:i.field,resultType:"numeric",target:t})
return{binding:n+l,field:r,fieldIndex:s}})),{type:"simple",target:t,attributeMapping:c,vvMapping:o}}(e,t,n,i)}function B(e,t,i,r,s=!1){const o=Object(a.v)(e,{indexCount:0,fields:{}})
switch(i.type){case"simple":case"dot-density":return function(e,t,i,n=!1){const r=t.getSymbols(),s=r.length?r[0]:null
return{type:"simple",symbol:Object(p.createSymbolSchema)(s,i,n),symbologyType:i.symbologyType}}(0,i,r,s)
case"class-breaks":return function(e,t,i,n,r=!1){const s=i.backgroundFillSymbol,{field:a,fieldIndex:o}=F(e,{target:t,field:i.field,valueExpression:i.valueExpression,resultType:"numeric",context:{mesh:!0,use:"renderer.field"}}),l=i.normalizationType,c="log"===l?"esriNormalizeByLog":"percent-of-total"===l?"esriNormalizeByPercentOfTotal":"field"===l?"esriNormalizeByField":null,u=i.classBreakInfos.map(e=>({symbol:Object(p.createSymbolSchema)(e.symbol,n,r),min:e.minValue,max:e.maxValue})).sort((e,t)=>e.min-t.min)
return{type:"interval",attributes:e.fields,field:a,fieldIndex:o,backgroundFillSymbol:Object(p.createSymbolSchema)(s,n,r),defaultSymbol:Object(p.createSymbolSchema)(i.defaultSymbol,n,r),intervals:u,normalizationField:i.normalizationField,normalizationTotal:i.normalizationTotal,normalizationType:c,isMaxInclusive:i.isMaxInclusive,symbologyType:n.symbologyType}}(o,t,i,r,s)
case"unique-value":return function(e,t,i,r,s=!1){var a
const o=[],l=i.backgroundFillSymbol,c={target:t,context:{mesh:!0},resultType:"string"}
if(i.field&&"string"!=typeof i.field)throw new n.a(S,"Expected renderer.field to be a string",i)
const{field:u,fieldIndex:h}=F(e,{...c,field:i.field,valueExpression:i.valueExpression})
for(const e of null!=(d=i.uniqueValueInfos)?d:[]){var d
o.push({value:""+e.value,symbol:Object(p.createSymbolSchema)(e.symbol,r,s)})}return{type:"map",attributes:e.fields,field:u,fieldIndex:h,field2:F(e,{...c,field:i.field2}).field,field3:F(e,{...c,field:i.field3}).field,fieldDelimiter:null!=(a=i.fieldDelimiter)?a:void 0,backgroundFillSymbol:Object(p.createSymbolSchema)(l,r),defaultSymbol:Object(p.createSymbolSchema)(i.defaultSymbol,r),map:o,symbologyType:r.symbologyType}}(o,t,i,r,s)
case"dictionary":return function(e,t,i,n=!1){return{type:"dictionary",config:t.config,fieldMap:t.fieldMap,scaleExpression:t.scaleExpression,url:t.url,symbolOptions:i,symbologyType:i.symbologyType}}(0,i,r,s)
case"heatmap":return function(e,t,i,n=!1){const r=t.getSymbols(),s=r.length?r[0]:null
return{type:"heatmap",symbol:Object(p.createSymbolSchema)(s,i,n),symbologyType:i.symbologyType}}(0,i,r,s)
case"pie-chart":return function(e,t,i,n=!1){const r=t.getSymbols(),s=r[0],a=r.length>1?r[1]:null
return{type:"pie-chart",markerSymbol:Object(p.createSymbolSchema)(s,i,n),fillSymbol:Object(p.createSymbolSchema)(a,i,n),symbologyType:i.symbologyType}}(0,i,r,s)}}},1671:function(e,t,i){"use strict"
i.d(t,"a",(function(){return h})),i.d(t,"b",(function(){return u}))
var n=i(23),r=i(996),s=i(1079),a=i(1066),o=i(983),l=i(1255),c=i(988)
function u(e){return d(e,!0)}function h(e){return d(e,!1)}function d(e,t){if(Object(n.k)(e))return null
const i=e.spatialReference,r=Object(c.e)(i),a="toJSON"in e?e.toJSON():e
if(!r)return a
const u=Object(c.p)(i)?102100:4326,h=l.a[u].maxX,d=l.a[u].minX
if(Object(o.f)(a))return f(a,h,d)
if(Object(o.e)(a))return a.points=a.points.map(e=>f(e,h,d)),a
if(Object(o.d)(a))return function(e,t){if(!t)return e
const i=function(e,t){const i=[],{ymin:n,ymax:r,xmin:s,xmax:a}=e,o=e.xmax-e.xmin,[l,c]=t.valid,{x:u,frameId:h}=_(e.xmin,t),{x:d,frameId:f}=_(e.xmax,t),p=u===d&&o>0
if(o>2*c){const e={xmin:s<a?u:d,ymin:n,xmax:c,ymax:r},t={xmin:l,ymin:n,xmax:s<a?d:u,ymax:r},o={xmin:0,ymin:n,xmax:c,ymax:r},_={xmin:l,ymin:n,xmax:0,ymax:r},p=[],g=[]
m(e,o)&&p.push(h),m(e,_)&&g.push(h),m(t,o)&&p.push(f),m(t,_)&&g.push(f)
for(let e=h+1;e<f;e++)p.push(e),g.push(e)
i.push(new b(e,[h]),new b(t,[f]),new b(o,p),new b(_,g))}else u>d||p?i.push(new b({xmin:u,ymin:n,xmax:c,ymax:r},[h]),new b({xmin:l,ymin:n,xmax:d,ymax:r},[f])):i.push(new b({xmin:u,ymin:n,xmax:d,ymax:r},[h]))
return i}(e,t).map(e=>e.extent)
return i.length<2?i[0]||e:i.length>2?(e.xmin=t.valid[0],e.xmax=t.valid[1],e):{rings:i.map(e=>[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]])}}(a,r)
if(Object(o.g)(a)||Object(o.h)(a)){const e=Object(s.a)(v,a),i={xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3]},n=Object(l.c)(i.xmin,d)*(2*h),r=0===n?a:Object(l.d)(a,n)
return i.xmin+=n,i.xmax+=n,i.xmax>h?g(r,h,t):i.xmin<d?g(r,d,t):r}return a}function f(e,t,i){if(Array.isArray(e)){const n=e[0]
if(n>t){const i=Object(l.c)(n,t)
e[0]=n+i*(-2*t)}else if(n<i){const t=Object(l.c)(n,i)
e[0]=n+t*(-2*i)}}else{const n=e.x
if(n>t){const i=Object(l.c)(n,t)
e.x+=i*(-2*t)}else if(n<i){const t=Object(l.c)(n,i)
e.x+=t*(-2*i)}}return e}function _(e,t){const[i,n]=t.valid,r=2*n
let s,a=0
return e>n?(s=Math.ceil(Math.abs(e-n)/r),e-=s*r,a=s):e<i&&(s=Math.ceil(Math.abs(e-i)/r),e+=s*r,a=-s),{x:e,frameId:a}}function m(e,t){const{xmin:i,ymin:n,xmax:r,ymax:s}=t
return p(e,i,n)&&p(e,i,s)&&p(e,r,s)&&p(e,r,n)}function p(e,t,i){return t>=e.xmin&&t<=e.xmax&&i>=e.ymin&&i<=e.ymax}function g(e,t,i=!0){const n=!Object(o.h)(e)
if(n&&Object(a.a)(e),i)return(new x).cut(e,t)
const r=n?e.rings:e.paths,s=n?4:2,l=r.length,c=-2*t
for(let e=0;e<l;e++){const t=r[e]
if(t&&t.length>=s){const e=[]
for(const i of t)e.push([i[0]+c,i[1]])
r.push(e)}}return n?e.rings=r:e.paths=r,e}class b{constructor(e,t){this.extent=e,this.frameIds=t}}const v=Object(r.m)()
class x{constructor(){this._linesIn=[],this._linesOut=[]}cut(e,t){let i
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
i.d(t,"a",(function(){return u})),i.d(t,"b",(function(){return l})),i.d(t,"c",(function(){return a})),i.d(t,"d",(function(){return c}))
var n=i(1370),r=i(983),s=i(1422)
function a(e){if(!e)return null
switch(e.type){case"CIMPointSymbol":{const t=e.symbolLayers
return t&&1===t.length?a(t[0]):null}case"CIMVectorMarker":{var t
const i=e.markerGraphics
if(!i||1!==i.length)return null
const n=i[0]
if(!n)return null
const r=n.geometry
if(!r)return null
const s=n.symbol
return!s||"CIMPolygonSymbol"!==s.type&&"CIMLineSymbol"!==s.type||null!=(t=s.symbolLayers)&&t.some(e=>!!e.effects)?null:{geom:r,asFill:"CIMPolygonSymbol"===s.type}}case"sdf":return{geom:e.geom,asFill:e.asFill}}return null}function o(e){let t=1/0,i=-1/0,n=1/0,r=-1/0
for(const s of e)for(const e of s)e[0]<t&&(t=e[0]),e[0]>i&&(i=e[0]),e[1]<n&&(n=e[1]),e[1]>r&&(r=e[1])
return[t,n,i,r]}function l(e){return e?e.rings?o(e.rings):e.paths?o(e.paths):Object(r.d)(e)?[e.xmin,e.ymin,e.xmax,e.ymax]:null:null}function c(e,t,i,n,r){const[s,a,o,l]=e
if(o<s||l<a)return[0,0,0]
const c=o-s,u=l-a,h=Math.floor(31.5),d=(128-2*(h+1))/Math.max(c,u),f=Math.round(c*d)+2*h,_=Math.round(u*d)+2*h
let m=1
t&&(m=_/d/(t.ymax-t.ymin))
let p=0,g=0,b=1
n&&(r?t&&i&&t.ymax-t.ymin>0&&(b=(t.xmax-t.xmin)/(t.ymax-t.ymin),p=n.x/(i*b),g=n.y/i):(p=n.x,g=n.y)),t&&(p=.5*(t.xmax+t.xmin)+p*(t.xmax-t.xmin),g=.5*(t.ymax+t.ymin)+g*(t.ymax-t.ymin)),p-=s,g-=a,p*=d,g*=d,p+=h,g+=h
let v=p/f-.5,x=g/_-.5
return r&&i&&(v*=i*b,x*=i),[m,v,x]}function u(e){const t=function(e){return e?e.rings?e.rings:e.paths?e.paths:void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax?[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]:null:null}(e.geom),i=function(e){let t=1/0,i=-1/0,n=1/0,r=-1/0
for(const s of e)for(const e of s)e[0]<t&&(t=e[0]),e[0]>i&&(i=e[0]),e[1]<n&&(n=e[1]),e[1]>r&&(r=e[1])
return new s.a(t,n,i-t,r-n)}(t),n=Math.floor(31.5),r=(128-2*(n+1))/Math.max(i.width,i.height),a=Math.round(i.width*r)+2*n,o=Math.round(i.height*r)+2*n,l=[]
for(const s of t)if(s&&s.length>1){const t=[]
for(const a of s){let[s,o]=a
s-=i.x,o-=i.y,s*=r,o*=r,s+=n-.5,o+=n-.5,e.asFill?t.push([s,o]):t.push([Math.round(s),Math.round(o)])}if(e.asFill){const e=t.length-1
t[0][0]===t[e][0]&&t[0][1]===t[e][1]||t.push(t[0])}l.push(t)}const c=function(e,t,i,n){const r=t*i,s=new Array(r),a=n*n+1
for(let e=0;e<r;++e)s[e]=a
for(const r of e){const e=r.length
for(let a=1;a<e;++a){const e=r[a-1],o=r[a]
let l,c,u,h
e[0]<o[0]?(l=e[0],c=o[0]):(l=o[0],c=e[0]),e[1]<o[1]?(u=e[1],h=o[1]):(u=o[1],h=e[1])
let d=Math.floor(l)-n,f=Math.floor(c)+n,_=Math.floor(u)-n,m=Math.floor(h)+n
d<0&&(d=0),f>t&&(f=t),_<0&&(_=0),m>i&&(m=i)
const p=o[0]-e[0],g=o[1]-e[1],b=p*p+g*g
for(let n=d;n<f;n++)for(let r=_;r<m;r++){let a,l,c=(n-e[0])*p+(r-e[1])*g
c<0?(a=e[0],l=e[1]):c>b?(a=o[0],l=o[1]):(c/=b,a=e[0]+c*p,l=e[1]+c*g)
const u=(n-a)*(n-a)+(r-l)*(r-l),h=(i-r-1)*t+n
u<s[h]&&(s[h]=u)}}}for(let e=0;e<r;++e)s[e]=Math.sqrt(s[e])
return s}(l,a,o,n)
return e.asFill&&function(e,t,i,n,r){for(const s of e){const e=s.length
for(let a=1;a<e;++a){const e=s[a-1],o=s[a]
let l,c,u,h
e[0]<o[0]?(l=e[0],c=o[0]):(l=o[0],c=e[0]),e[1]<o[1]?(u=e[1],h=o[1]):(u=o[1],h=e[1])
let d=Math.floor(l),f=Math.floor(c)+1,_=Math.floor(u),m=Math.floor(h)+1
d<n&&(d=n),f>t-n&&(f=t-n),_<n&&(_=n),m>i-n&&(m=i-n)
for(let s=_;s<m;++s){if(e[1]>s==o[1]>s)continue
const a=(i-s-1)*t
for(let t=d;t<f;++t)t<(o[0]-e[0])*(s-e[1])/(o[1]-e[1])+e[0]&&(r[a+t]=-r[a+t])
for(let e=n;e<d;++e)r[a+e]=-r[a+e]}}}}(l,a,o,n,c),[h(c,n),a,o]}function h(e,t){const i=2*t,r=e.length,s=new Uint8Array(4*r)
for(let t=0;t<r;++t){const r=.5-e[t]/i
Object(n.a)(r,s,4*t)}return s}},1696:function(e,t,i){"use strict"
i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return r}))
var n=i(447)
function r(e,t){let i
if("string"==typeof e)i=Object(n.b)(e+`-seed(${t})`)
else{let n=12
i=e^t
do{i=107*(i>>8^i)+n|0}while(0!=--n)}return(1+i/(1<<31))/2}function s(e){return Math.floor(r(e,a)*o)}const a=53290320,o=10},1704:function(e,t,i){"use strict"
function n(e,t,i,n){const r=e.clone(),s=1<<r.level,a=r.col+t,o=r.row+i
return n&&a<0?(r.col=a+s,r.world-=1):a>=s?(r.col=a-s,r.world+=1):r.col=a,r.row=o,r}i.d(t,"a",(function(){return n}))},1705:function(e,t,i){"use strict"
i.d(t,"a",(function(){return f}))
var n=i(1030),r=i(1e3)
function s(e,t){return e.x===t.x&&e.y===t.y}function a(e,t){return e.x=t.y,e.y=-t.x,e}function o(e,t){return e.x=-t.y,e.y=t.x,e}function l(e,t){return e.x=t.x,e.y=t.y,e}function c(e,t){return e.x=-t.x,e.y=-t.y,e}function u(e){return Math.sqrt(e.x*e.x+e.y*e.y)}function h(e,t){return e.x*t.x+e.y*t.y}function d(e,t,i,n){return e.x=t.x*i+t.y*n,e.y=t.x*n-t.y*i,e}class f{constructor(e,t,i){this._writeVertex=e,this._writeTriangle=t,this._canUseThinTessellation=i,this._prevNormal={x:void 0,y:void 0},this._nextNormal={x:void 0,y:void 0},this._textureNormalLeft={x:0,y:1},this._textureNormalRight={x:0,y:-1},this._textureNormal={x:void 0,y:void 0},this._joinNormal={x:void 0,y:void 0},this._inner={x:void 0,y:void 0},this._outer={x:void 0,y:void 0},this._roundStart={x:void 0,y:void 0},this._roundEnd={x:void 0,y:void 0},this._startBreak={x:void 0,y:void 0},this._endBreak={x:void 0,y:void 0},this._innerPrev={x:void 0,y:void 0},this._innerNext={x:void 0,y:void 0},this._bevelStart={x:void 0,y:void 0},this._bevelEnd={x:void 0,y:void 0},this._bevelMiddle={x:void 0,y:void 0}}tessellate(e,t){(function(e){if(!e)return
const t=e.length
if(t<=1)return
let i=0
for(let n=1;n<t;n++)s(e[n],e[i])||++i===n||(e[i]=e[n])
e.length=i+1})(e),this._canUseThinTessellation&&t.halfWidth<r.Y&&!t.offset?this._tessellateThin(e,t):this._tessellate(e,t)}_tessellateThin(e,t){if(e.length<2)return
const i=t.wrapDistance||65535
let n=t.initialDistance||0,r=!1,s=e[0].x,a=e[0].y
const o=e.length
for(let t=1;t<o;++t){r&&(r=!1,n=0)
let o=e[t].x,l=e[t].y,c=o-s,u=l-a,h=Math.sqrt(c*c+u*u)
if(c/=h,u/=h,n+h>i){r=!0
const e=(i-n)/h
h=i-n,o=(1-e)*s+e*o,l=(1-e)*a+e*l,--t}const d=this._writeVertex(s,a,0,0,c,u,u,-c,0,-1,n),f=this._writeVertex(s,a,0,0,c,u,-u,c,0,1,n)
n+=h
const _=this._writeVertex(o,l,0,0,c,u,u,-c,0,-1,n),m=this._writeVertex(o,l,0,0,c,u,-u,c,0,1,n)
this._writeTriangle(d,f,_),this._writeTriangle(f,_,m),s=o,a=l}}_tessellate(e,t){const i=e[0],r=e[e.length-1],f=s(i,r),_=f?3:2
if(e.length<_)return
const m=t.pixelCoordRatio,p=null!=t.capType?t.capType:n.e.BUTT,g=null!=t.joinType?t.joinType:n.p.MITER,b=null!=t.miterLimit?Math.min(t.miterLimit,4):2,v=null!=t.roundLimit?Math.min(t.roundLimit,1.05):1.05,x=null!=t.halfWidth?t.halfWidth:2,y=!!t.textured
let O,T,S,w=null
const E=this._prevNormal,M=this._nextNormal
let C=-1,I=-1
const P=this._joinNormal
let A,R
const F=this._textureNormalLeft,L=this._textureNormalRight,D=this._textureNormal
let j=-1,B=-1
const z=t.wrapDistance||65535
let N=t.initialDistance||0
const k=this._writeVertex,U=this._writeTriangle,V=(e,t,i,n,r,s)=>{const a=k(T,S,A,R,i,n,e,t,r,s,N)
return j>=0&&B>=0&&a>=0&&U(j,B,a),j=B,B=a,a}
f&&(O=e[e.length-2],M.x=r.x-O.x,M.y=r.y-O.y,I=u(M),M.x/=I,M.y/=I)
let G=!1
for(let t=0;t<e.length;++t){if(G&&(G=!1,N=0),O&&(E.x=-M.x,E.y=-M.y,C=I,N+C>z&&(G=!0)),G){const i=(z-N)/C
C=z-N,O={x:(1-i)*O.x+i*e[t].x,y:(1-i)*O.y+i*e[t].y},--t}else O=e[t]
T=O.x,S=O.y
const i=t<=0&&!G,r=t===e.length-1
if(i||(N+=C),w=r?f?e[1]:null:e[t+1],w?(M.x=w.x-T,M.y=w.y-S,I=u(M),M.x/=I,M.y/=I):(M.x=void 0,M.y=void 0),!f){if(i){o(P,M),A=P.x,R=P.y,p===n.e.SQUARE&&(V(-M.y-M.x,M.x-M.y,M.x,M.y,0,-1),V(M.y-M.x,-M.x-M.y,M.x,M.y,0,1)),p===n.e.ROUND&&(V(-M.y-M.x,M.x-M.y,M.x,M.y,-1,-1),V(M.y-M.x,-M.x-M.y,M.x,M.y,-1,1)),p!==n.e.ROUND&&p!==n.e.BUTT||(V(-M.y,M.x,M.x,M.y,0,-1),V(M.y,-M.x,M.x,M.y,0,1))
continue}if(r){a(P,E),A=P.x,R=P.y,p!==n.e.ROUND&&p!==n.e.BUTT||(V(E.y,-E.x,-E.x,-E.y,0,-1),V(-E.y,E.x,-E.x,-E.y,0,1)),p===n.e.SQUARE&&(V(E.y-E.x,-E.x-E.y,-E.x,-E.y,0,-1),V(-E.y-E.x,E.x-E.y,-E.x,-E.y,0,1)),p===n.e.ROUND&&(V(E.y-E.x,-E.x-E.y,-E.x,-E.y,1,-1),V(-E.y-E.x,E.x-E.y,-E.x,-E.y,1,1))
continue}}let s,_,k=(H=M,-((W=E).x*H.y-W.y*H.x))
if(Math.abs(k)<.01)h(E,M)>0?(P.x=E.x,P.y=E.y,k=1,s=Number.MAX_VALUE,_=!0):(o(P,M),k=1,s=1,_=!1)
else{P.x=(E.x+M.x)/k,P.y=(E.y+M.y)/k,s=u(P)
const e=(s-1)*x*m
_=s>4||e>C&&e>I}A=P.x,R=P.y
let U=g
switch(g){case n.p.BEVEL:s<1.05&&(U=n.p.MITER)
break
case n.p.ROUND:s<v&&(U=n.p.MITER)
break
case n.p.MITER:s>b&&(U=n.p.BEVEL)}switch(U){case n.p.MITER:if(V(P.x,P.y,-E.x,-E.y,0,-1),V(-P.x,-P.y,-E.x,-E.y,0,1),r)break
if(y){const e=G?0:N
j=this._writeVertex(T,S,A,R,M.x,M.y,P.x,P.y,0,-1,e),B=this._writeVertex(T,S,A,R,M.x,M.y,-P.x,-P.y,0,1,e)}break
case n.p.BEVEL:{const e=k<0
let t,i,n,s
if(e){const e=j
j=B,B=e,t=F,i=L}else t=L,i=F
if(_)n=e?o(this._innerPrev,E):a(this._innerPrev,E),s=e?a(this._innerNext,M):o(this._innerNext,M)
else{const t=e?c(this._inner,P):l(this._inner,P)
n=t,s=t}const u=e?a(this._bevelStart,E):o(this._bevelStart,E)
V(n.x,n.y,-E.x,-E.y,t.x,t.y)
const h=V(u.x,u.y,-E.x,-E.y,i.x,i.y)
if(r)break
const f=e?o(this._bevelEnd,M):a(this._bevelEnd,M)
if(_){const e=this._writeVertex(T,S,A,R,-E.x,-E.y,0,0,0,0,N)
j=this._writeVertex(T,S,A,R,M.x,M.y,s.x,s.y,t.x,t.y,N),B=this._writeVertex(T,S,A,R,M.x,M.y,f.x,f.y,i.x,i.y,N),this._writeTriangle(h,e,B)}else{if(y){const e=this._bevelMiddle
e.x=(u.x+f.x)/2,e.y=(u.y+f.y)/2,d(D,e,-E.x,-E.y),V(e.x,e.y,-E.x,-E.y,D.x,D.y),d(D,e,M.x,M.y),j=this._writeVertex(T,S,A,R,M.x,M.y,e.x,e.y,D.x,D.y,N),B=this._writeVertex(T,S,A,R,M.x,M.y,s.x,s.y,t.x,t.y,N)}else{const e=j
j=B,B=e}V(f.x,f.y,M.x,M.y,i.x,i.y)}if(e){const e=j
j=B,B=e}break}case n.p.ROUND:{const e=k<0
let t,i
if(e){const e=j
j=B,B=e,t=F,i=L}else t=L,i=F
const n=e?c(this._inner,P):l(this._inner,P)
let u,f
_?(u=e?o(this._innerPrev,E):a(this._innerPrev,E),f=e?a(this._innerNext,M):o(this._innerNext,M)):(u=n,f=n)
const m=e?a(this._roundStart,E):o(this._roundStart,E),p=e?o(this._roundEnd,M):a(this._roundEnd,M),g=V(u.x,u.y,-E.x,-E.y,t.x,t.y),b=V(m.x,m.y,-E.x,-E.y,i.x,i.y)
if(r)break
const v=this._writeVertex(T,S,A,R,-E.x,-E.y,0,0,0,0,N)
_||this._writeTriangle(j,B,v)
const x=c(this._outer,n),O=this._writeVertex(T,S,A,R,M.x,M.y,p.x,p.y,i.x,i.y,N)
let w,C
const I=s>2
if(I){let t
s!==Number.MAX_VALUE?(x.x/=s,x.y/=s,t=h(E,x),t=(s*(t*t-1)+1)/t):t=-1,w=e?a(this._startBreak,E):o(this._startBreak,E),w.x+=E.x*t,w.y+=E.y*t,C=e?o(this._endBreak,M):a(this._endBreak,M),C.x+=M.x*t,C.y+=M.y*t}d(D,x,-E.x,-E.y)
const z=this._writeVertex(T,S,A,R,-E.x,-E.y,x.x,x.y,D.x,D.y,N)
d(D,x,M.x,M.y)
const U=y?this._writeVertex(T,S,A,R,M.x,M.y,x.x,x.y,D.x,D.y,N):z,G=v,W=y?this._writeVertex(T,S,A,R,M.x,M.y,0,0,0,0,N):v
let H=-1,Y=-1
if(I&&(d(D,w,-E.x,-E.y),H=this._writeVertex(T,S,A,R,-E.x,-E.y,w.x,w.y,D.x,D.y,N),d(D,C,M.x,M.y),Y=this._writeVertex(T,S,A,R,M.x,M.y,C.x,C.y,D.x,D.y,N)),y?I?(this._writeTriangle(G,b,H),this._writeTriangle(G,H,z),this._writeTriangle(W,U,Y),this._writeTriangle(W,Y,O)):(this._writeTriangle(G,b,z),this._writeTriangle(W,U,O)):I?(this._writeTriangle(v,b,H),this._writeTriangle(v,H,Y),this._writeTriangle(v,Y,O)):(this._writeTriangle(v,b,z),this._writeTriangle(v,U,O)),_?(j=this._writeVertex(T,S,A,R,M.x,M.y,f.x,f.y,t.x,t.y,N),B=O):(j=y?this._writeVertex(T,S,A,R,M.x,M.y,f.x,f.y,t.x,t.y,N):g,this._writeTriangle(j,W,O),B=O),e){const e=j
j=B,B=e}break}}}var W,H}}},1706:function(e,t,i){"use strict"
i.d(t,"a",(function(){return f})),i.d(t,"b",(function(){return c}))
var n=i(23),r=i(980),s=i(1174),a=i(1e3),o=i(1003),l=i(1512)
function c(e,t){if(!e||!t)return e
switch(t){case"radius":case"distance":return 2*e
case"diameter":case"width":return e
case"area":return Math.sqrt(e)}return e}function u(e){return(null!=e?e:[]).map(e=>function(e){return{value:e.value,size:Object(r.k)(e.size)}}(e))}function h(e){if("string"==typeof e||"number"==typeof e)return Object(r.k)(e)
const t=e
return{type:"size",expression:t.expression,stops:u(t.stops)}}const d=e=>{const t=[],i=[],n=u(e),s=n.length
for(let e=0;e<6;e++){const o=n[Math.min(e,s-1)]
t.push(o.value),i.push(null==o.size?a.B:Object(r.h)(o.size))}return{values:new Float32Array(t),sizes:new Float32Array(i)}}
function f(e){var t
const i=e&&e.length>0?{}:null,n=i?{}:null
if(!i||!n)return{vvFields:i,vvRanges:n}
for(const r of e)if(r.field&&(i[r.type]=r.field),"size"===r.type){n.size||(n.size={})
const e=r
switch(Object(l.a)(e)){case o.f.SIZE_MINMAX_VALUE:n.size.minMaxValue={minDataValue:e.minDataValue,maxDataValue:e.maxDataValue,minSize:h(e.minSize),maxSize:h(e.maxSize)}
break
case o.f.SIZE_SCALE_STOPS:n.size.scaleStops={stops:u(e.stops)}
break
case o.f.SIZE_FIELD_STOPS:if(e.levels){const t={}
for(const i in e.levels)t[i]=d(e.levels[i])
n.size.fieldStops={type:"level-dependent",levels:t}}else n.size.fieldStops={type:"static",...d(e.stops)}
break
case o.f.SIZE_UNIT_VALUE:n.size.unitValue={unit:e.valueUnit,valueRepresentation:null!=(t=e.valueRepresentation)?t:void 0}}}else if("color"===r.type)n.color=p(r)
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
i.d(t,"a",(function(){return b}))
var n=i(446),r=i(235),s=i(233),a=i(23),o=i(973),l=i(1e3),c=i(1269),u=i(1022),h=i(1572),d=i(984),f=i(1171),_=i(1072)
const m=s.a.getLogger("esri.views.2d.engine.webgl.AttributeStoreView"),p=Object(h.b)(h.a,m)
class g{constructor(e,t,i){this._texture=null,this._lastTexture=null,this._fbos={},this.texelSize=4
const{buffer:n,pixelType:r,textureOnly:s}=e,o=Object(u.l)(r)
this.shared=i,this.pixelType=r,this.size=t,this.textureOnly=s,s||(this.data=new o(Object(a.u)(n))),this._resetRange()}destroy(){Object(a.b)(this._texture,e=>e.dispose())
for(const e in this._fbos)Object(a.b)(this._fbos[e],t=>{"0"===e&&t.detachColorTexture(),t.dispose()}),this._fbos[e]=null
this._texture=null}get _textureDesc(){return{target:d.A.TEXTURE_2D,wrapMode:d.B.CLAMP_TO_EDGE,pixelFormat:d.p.RGBA,dataType:this.pixelType,samplingMode:d.z.NEAREST,width:this.size,height:this.size}}setData(e,t,i){const n=Object(c.f)(e),r=Object(a.u)(this.data),s=n*this.texelSize+t
!r||s>=r.length||(r[s]=i,this.dirtyStart=Math.min(this.dirtyStart,n),this.dirtyEnd=Math.max(this.dirtyEnd,n))}getData(e,t){if(Object(a.k)(this.data))return null
const i=Object(c.f)(e)*this.texelSize+t
return!this.data||i>=this.data.length?null:this.data[i]}getTexture(e){return Object(a.v)(this._texture,()=>this._initTexture(e))}getFBO(e,t=0){if(Object(a.k)(this._fbos[t])){const i={colorTarget:d.y.TEXTURE,depthStencilTarget:d.m.NONE},n=0===t?this.getTexture(e):this._textureDesc
this._fbos[t]=new f.a(e,i,n)}return this._fbos[t]}get locked(){return!(this.pixelType!==d.q.UNSIGNED_BYTE||!this.shared||this.textureOnly||!Object(r.a)("esri-atomics")||!this.data)&&1===Atomics.load(this.data,0)}get hasDirty(){const e=this.dirtyStart
return this.dirtyEnd>=e}updateTexture(e,t){if(!this.locked){try{const t=this.dirtyStart,i=this.dirtyEnd
if(!this.hasDirty)return
this._resetRange()
const r=Object(a.u)(this.data).buffer,s=this.getTexture(e),o=4,l=(t-t%this.size)/this.size,c=(i-i%this.size)/this.size,h=l,d=this.size,f=c,_=l*this.size*o,p=(d+f*this.size)*o-_,g=Object(u.l)(this.pixelType),b=new g(r,_*g.BYTES_PER_ELEMENT,p),v=this.size,x=f-h+1
if(x>this.size)return void m.error(new n.a("mapview-webgl","Out-of-bounds index when updating AttributeData"))
s.updateData(0,0,h,v,x,b)}catch(e){}t()}}update(e){const{data:t,start:i,end:n}=e
if(Object(a.l)(t)&&Object(a.l)(this.data)){const n=this.data,r=i*this.texelSize
for(let i=0;i<t.length;i++){const s=1<<i%this.texelSize
e.layout&s&&(n[r+i]=t[i])}}this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,n)}resize(e,t){const i=this.size
if(this.size=t,this.textureOnly)return void(i!==this.size&&(this._lastTexture=this._texture,this._texture=null))
const n=Object(u.l)(this.pixelType)
this.destroy(),this.data=new n(Object(a.u)(e.buffer))}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}_initTexture(e){const t=new _.a(e,this._textureDesc,Object(a.v)(this.data,void 0))
if(Object(a.l)(this._lastTexture)&&this._fbos[0]){const i=this._lastTexture.descriptor.width,n=this._lastTexture.descriptor.height,r=this._lastTexture.descriptor.dataType,s=this._lastTexture.descriptor.pixelFormat,a=this.getFBO(e),o=Object(u.m)(r),l=new(Object(u.l)(r))(new ArrayBuffer(i*n*o*this.texelSize)),c=e.getBoundFramebufferObject(),{x:h,y:d,width:f,height:_}=e.getViewport()
e.bindFramebuffer(a),a.readPixels(0,0,i,n,s,r,l),t.updateData(0,0,0,2*i,n/2,l),e.setViewport(h,d,f,_),e.bindFramebuffer(c)}return this.destroy(),this._texture=t,this._texture}}class b{constructor(e){this._onUpdate=e,this._initialized=!1,this._forceNextUpload=!1,this._locked=!1}initialize(e){const{blocks:t,shared:i,size:n}=e
if(this.shared=i,this.size=n,p("Initializing AttributeStoreView",e),Object(a.k)(this._data))this._data=Object(a.m)(t,e=>new g(e,n,i))
else for(let e=0;e<this._data.length;e++){const r=this._data[e],s=t[e]
Object(a.l)(s)&&(Object(a.k)(r)?this._data[e]=new g(s,n,i):r.resize(s,n))}this._initialized=!0}destroy(){Object(a.b)(this._data,e=>Object(a.m)(e,e=>e.destroy())),Object(a.b)(this._defaultTexture,e=>e.dispose())}isEmpty(){const e=this._data
return Object(a.k)(e)}isUpdating(){const e=Object(a.l)(this._pendingAttributeUpdate),t=e
return Object(r.a)("esri-2d-log-updating")&&console.log(`Updating AttributeStoreView ${t}\n  -> hasPendingUpdate ${e}`),t}getBlock(e){return Object(a.k)(this._data)?null:this._data[e]}setLabelMinZoom(e,t){this.setData(e,0,1,t)}getLabelMinZoom(e){return this.getData(e,0,1,255)}getFilterFlags(e){return this.getData(e,0,0,0)}getVVSize(e){return this.getData(e,l.e,0,0)}getData(e,t,i,n){if(!this._data)return 0
const r=Object(a.u)(this._data)[t]
if(Object(a.k)(r))return 0
const s=r.getData(e,i)
return Object(a.l)(s)?s:n}setData(e,t,i,n){const r=Object(a.u)(this._data)[t]
Object(a.u)(r).setData(e,i,n)}lockTextureUpload(){this._locked=!0}unlockTextureUpload(){this._locked=!1}forceTextureUpload(){this._forceNextUpload=!0}async requestUpdate(e){if(this._pendingAttributeUpdate)return void m.error(new n.a("mapview-webgl","Tried to update attribute data with a pending update"))
const t=Object(o.e)()
return p("AttributeStoreView Update Requested",e),this._pendingAttributeUpdate={data:e,resolver:t},this._onUpdate(),t.promise}update(){if(this._initialized&&Object(a.l)(this._pendingAttributeUpdate)){Object(r.a)("esri-2d-update-debug")&&console.debug("AttributeStoreView::update")
const{data:e,resolver:t}=this._pendingAttributeUpdate,i=Object(a.u)(this._data)
for(let t=0;t<e.blocks.length;t++){const n=e.blocks[t],r=i[t]
Object(a.b)(r,e=>Object(a.b)(n,i=>{p("Updating block "+t,i),e.update(i)}))}this._pendingAttributeUpdate=null,t(),this._onUpdate()}}bindTextures(e,t=!0){const i=this._getDefaultTexture(e)
if(!this._initialized)return e.bindTexture(i,l.H),void(t&&(e.bindTexture(i,l.I),e.bindTexture(i,l.J),e.bindTexture(i,l.K),e.bindTexture(i,l.L),e.bindTexture(i,l.M),e.bindTexture(i,l.P)))
const n=Object(a.u)(this._data)
this._locked&&!this._forceNextUpload||(Object(a.i)(n,t=>t.updateTexture(e,()=>this._onUpdate())),this._forceNextUpload=!1),e.bindTexture(Object(a.n)(n[l.c],i,t=>t.getTexture(e)),l.H),t&&(e.bindTexture(Object(a.n)(n[l.d],i,t=>t.getTexture(e)),l.P),e.bindTexture(Object(a.n)(n[l.a],i,t=>t.getTexture(e)),l.I),e.bindTexture(Object(a.n)(n[l.e],i,t=>t.getTexture(e)),l.J),e.bindTexture(Object(a.n)(n[l.b],i,t=>t.getTexture(e)),l.K),e.bindTexture(Object(a.n)(n[l.L],i,t=>t.getTexture(e)),l.L),e.bindTexture(Object(a.n)(n[l.M],i,t=>t.getTexture(e)),l.M))}_getDefaultTexture(e){if(Object(a.k)(this._defaultTexture)){const t={wrapMode:d.B.CLAMP_TO_EDGE,pixelFormat:d.p.RGBA,dataType:d.q.UNSIGNED_BYTE,samplingMode:d.z.NEAREST,width:1,height:1}
this._defaultTexture=new _.a(e,t,new Uint8Array(4))}return this._defaultTexture}}},1727:function(e,t,i){"use strict"
i.d(t,"a",(function(){return r}))
var n=i(980)
class r{constructor(e){e&&(this._textRasterizationCanvas=e)}rasterizeText(e,t){var i
this._textRasterizationCanvas||(this._textRasterizationCanvas=document.createElement("canvas"))
const n=this._textRasterizationCanvas,r=n.getContext("2d")
this._setFontProperties(r,t),this._parameters=t,this._textLines=e.split(/\r?\n/),this._lineHeight=this._computeLineHeight()
const s=this._computeTextWidth(r,t),{decoration:a,weight:o}=t.font
this._lineThroughWidthOffset=a&&"line-through"===a?.1*this._lineHeight:0
const l=this._lineHeight*this._textLines.length
n.width=s+2*this._lineThroughWidthOffset,n.height=l,this._renderedLineHeight=Math.round(this._lineHeight*t.pixelRatio),this._renderedHaloSize=t.halo.size*t.pixelRatio,this._renderedWidth=s*t.pixelRatio,this._renderedHeight=l*t.pixelRatio,this._lineThroughWidthOffset*=t.pixelRatio
const c=null!=(i=t.color)?i:[0,0,0,0],u=t.halo&&t.halo.color?t.halo.color:[0,0,0,0]
this._fillStyle=function(e){return`rgba(${e.slice(0,3).toString()},${e[3]})`}(c),this._haloStyle=function(e){return`rgb(${e.slice(0,3).toString()})`}(u)
const h=this._renderedLineHeight,d=this._renderedHaloSize
r.save(),r.clearRect(0,0,n.width,n.height),this._setFontProperties(r,t)
const f=function(e,t){return"center"===e?.5*t:"right"===e?t:0}(r.textAlign,this._renderedWidth)+d,_=d,m=d>0
let p=this._lineThroughWidthOffset,g=0
m&&this._renderHalo(r,f,_,p,g,t),g+=_,p+=f
for(const e of this._textLines)m?(r.globalCompositeOperation="destination-out",r.fillStyle="rgb(0, 0, 0)",r.fillText(e,p,g),r.globalCompositeOperation="source-over",r.fillStyle=this._fillStyle,r.fillText(e,p,g)):(r.fillStyle=this._fillStyle,r.fillText(e,p,g)),a&&"none"!==a&&this._renderDecoration(r,p,g,a,o),g+=h
r.restore()
const b=this._renderedWidth+2*this._lineThroughWidthOffset,v=this._renderedHeight,x=r.getImageData(0,0,b,v),y=new Uint8Array(x.data)
if(t.premultiplyColors){let e
for(let t=0;t<y.length;t+=4)e=y[t+3]/255,y[t]=y[t]*e,y[t+1]=y[t+1]*e,y[t+2]=y[t+2]*e}let O,T
switch(t.horizontalAlignment){case"left":O=-.5
break
case"right":O=.5
break
default:O=0}switch(t.verticalAlignment){case"bottom":T=-.5
break
case"top":T=.5
break
default:T=0}return{size:[b,v],image:new Uint32Array(y.buffer),sdf:!1,simplePattern:!1,anchorX:O,anchorY:T,canvas:n}}_renderHalo(e,t,i,n,r,s){const a=this._renderedWidth,o=this._renderedHeight
this._haloRasterizationCanvas||(this._haloRasterizationCanvas=document.createElement("canvas")),this._haloRasterizationCanvas.width=a,this._haloRasterizationCanvas.height=o
const l=this._haloRasterizationCanvas,c=l.getContext("2d")
c.clearRect(0,0,a,o),this._setFontProperties(c,s)
const{decoration:u,weight:h}=s.font
c.fillStyle=this._haloStyle,c.strokeStyle=this._haloStyle,c.lineJoin="round",this._renderHaloNative(c,t,i,u,h),e.globalAlpha=this._parameters.halo.color[3],e.drawImage(l,0,0,a,o,n,r,a,o),e.globalAlpha=1}_renderHaloNative(e,t,i,n,r){const s=this._renderedLineHeight,a=this._renderedHaloSize
for(const o of this._textLines){const l=2*a,c=5,u=.1
for(let s=0;s<c;s++){const a=(1-(c-1)*u+s*u)*l
e.lineWidth=a,e.strokeText(o,t,i),n&&"none"!==n&&this._renderDecoration(e,t,i,n,r,a)}i+=s}}_setFontProperties(e,t){const i=Math.max(t.size,.5),r=t.font,s=`${r.style} ${r.weight} ${Object(n.h)(i*t.pixelRatio).toFixed(1)}px ${r.family}, sans-serif`
let a
switch(e.font=s,e.textBaseline="top",t.horizontalAlignment){case"left":default:a="left"
break
case"right":a="right"
break
case"center":a="center"}e.textAlign=a}computeTextSize(e,t){this._textRasterizationCanvas||(this._textRasterizationCanvas=document.createElement("canvas"))
const i=this._textRasterizationCanvas,n=i.getContext("2d")
this._setFontProperties(n,t),this._parameters=t,this._textLines=e.split(/\r?\n/),this._lineHeight=this._computeLineHeight()
const r=this._computeTextWidth(n,t),s=this._lineHeight*this._textLines.length
return i.width=r,i.height=s,[r*t.pixelRatio,s*t.pixelRatio]}_computeTextWidth(e,t){let i=0
for(const t of this._textLines)i=Math.max(i,e.measureText(t).width)
const n=t.font
return("italic"===n.style||"oblique"===n.style||"string"==typeof n.weight&&("bold"===n.weight||"bolder"===n.weight)||"number"==typeof n.weight&&n.weight>600)&&(i+=.3*e.measureText("w").width),i+=2*this._parameters.halo.size,Math.round(i)}_computeLineHeight(){let e=1.275*this._parameters.size
const t=this._parameters.font.decoration
return t&&"underline"===t&&(e*=1.3),Math.round(e+2*this._parameters.halo.size)}_renderDecoration(e,t,i,n,r,s){const a=.9*this._lineHeight,o="bold"===r?.06:"bolder"===r?.09:.04
switch(e.textAlign){case"center":t-=this._renderedWidth/2
break
case"right":t-=this._renderedWidth}const l=e.textBaseline
if("underline"===n)switch(l){case"top":i+=a
break
case"middle":i+=a/2}else if("line-through"===n)switch(l){case"top":i+=a/1.5
break
case"middle":i+=a/3}const c=s?1.5*s:Math.ceil(a*o)
e.save(),e.beginPath(),e.strokeStyle=e.fillStyle,e.lineWidth=c,e.moveTo(t-this._lineThroughWidthOffset,i),e.lineTo(t+this._renderedWidth+2*this._lineThroughWidthOffset,i),e.stroke(),e.restore()}}},1731:function(e,t,i){"use strict"
i.d(t,"a",(function(){return S}))
const n=[["(",")"],[")","("],["<",">"],[">","<"],["[","]"],["]","["],["{","}"],["}","{"],["«","»"],["»","«"],["‹","›"],["›","‹"],["⁽","⁾"],["⁾","⁽"],["₍","₎"],["₎","₍"],["≤","≥"],["≥","≤"],["〈","〉"],["〉","〈"],["﹙","﹚"],["﹚","﹙"],["﹛","﹜"],["﹜","﹛"],["﹝","﹞"],["﹞","﹝"],["﹤","﹥"],["﹥","﹤"]],r=["آ","أ","إ","ا"],s=["ﻵ","ﻷ","ﻹ","ﻻ"],a=["ﻶ","ﻸ","ﻺ","ﻼ"],o=["ا","ب","ت","ث","ج","ح","خ","د","ذ","ر","ز","س","ش","ص","ض","ط","ظ","ع","غ","ف","ق","ك","ل","م","ن","ه","و","ي","إ","أ","آ","ة","ى","ل","م","ن","ه","و","ي","إ","أ","آ","ة","ى","ی","ئ","ؤ"],l=["ﺍ","ﺏ","ﺕ","ﺙ","ﺝ","ﺡ","ﺥ","ﺩ","ﺫ","ﺭ","ﺯ","ﺱ","ﺵ","ﺹ","ﺽ","ﻁ","ﻅ","ﻉ","ﻍ","ﻑ","ﻕ","ﻙ","ﻝ","ﻡ","ﻥ","ﻩ","ﻭ","ﻱ","ﺇ","ﺃ","ﺁ","ﺓ","ﻯ","ﯼ","ﺉ","ﺅ","ﹰ","ﹲ","ﹴ","ﹶ","ﹸ","ﹺ","ﹼ","ﹾ","ﺀ","ﺉ","ﺅ"],c=["ﺎ","ﺐ","ﺖ","ﺚ","ﺞ","ﺢ","ﺦ","ﺪ","ﺬ","ﺮ","ﺰ","ﺲ","ﺶ","ﺺ","ﺾ","ﻂ","ﻆ","ﻊ","ﻎ","ﻒ","ﻖ","ﻚ","ﻞ","ﻢ","ﻦ","ﻪ","ﻮ","ﻲ","ﺈ","ﺄ","ﺂ","ﺔ","ﻰ","ﯽ","ﺊ","ﺆ","ﹰ","ﹲ","ﹴ","ﹶ","ﹸ","ﹺ","ﹼ","ﹾ","ﺀ","ﺊ","ﺆ"],u=["ﺎ","ﺒ","ﺘ","ﺜ","ﺠ","ﺤ","ﺨ","ﺪ","ﺬ","ﺮ","ﺰ","ﺴ","ﺸ","ﺼ","ﻀ","ﻄ","ﻈ","ﻌ","ﻐ","ﻔ","ﻘ","ﻜ","ﻠ","ﻤ","ﻨ","ﻬ","ﻮ","ﻴ","ﺈ","ﺄ","ﺂ","ﺔ","ﻰ","ﯿ","ﺌ","ﺆ","ﹱ","ﹲ","ﹴ","ﹷ","ﹹ","ﹻ","ﹽ","ﹿ","ﺀ","ﺌ","ﺆ"],h=["ﺍ","ﺑ","ﺗ","ﺛ","ﺟ","ﺣ","ﺧ","ﺩ","ﺫ","ﺭ","ﺯ","ﺳ","ﺷ","ﺻ","ﺿ","ﻃ","ﻇ","ﻋ","ﻏ","ﻓ","ﻗ","ﻛ","ﻟ","ﻣ","ﻧ","ﻫ","ﻭ","ﻳ","ﺇ","ﺃ","ﺁ","ﺓ","ﻯ","ﯾ","ﺋ","ﺅ","ﹰ","ﹲ","ﹴ","ﹶ","ﹸ","ﹺ","ﹼ","ﹾ","ﺀ","ﺋ","ﺅ"],d=["ء","آ","أ","ؤ","إ","ا","ة","د","ذ","ر","ز","و","ى"],f=["ً","ً","ٌ","؟","ٍ","؟","َ","َ","ُ","ُ","ِ","ِ","ّ","ّ","ْ","ْ","ء","آ","آ","أ","أ","ؤ","ؤ","إ","إ","ئ","ئ","ئ","ئ","ا","ا","ب","ب","ب","ب","ة","ة","ت","ت","ت","ت","ث","ث","ث","ث","ج","ج","ج","ج","ح","ح","ح","ح","خ","خ","خ","خ","د","د","ذ","ذ","ر","ر","ز","ز","س","س","س","س","ش","ش","ش","ش","ص","ص","ص","ص","ض","ض","ض","ض","ط","ط","ط","ط","ظ","ظ","ظ","ظ","ع","ع","ع","ع","غ","غ","غ","غ","ف","ف","ف","ف","ق","ق","ق","ق","ك","ك","ك","ك","ل","ل","ل","ل","م","م","م","م","ن","ن","ن","ن","ه","ه","ه","ه","و","و","ى","ى","ي","ي","ي","ي","ﻵ","ﻶ","ﻷ","ﻸ","ﻹ","ﻺ","ﻻ","ﻼ","؟","؟","؟"],_=["ء","ف"],m=["غ","ي"],p=[[0,3,0,1,0,0,0],[0,3,0,1,2,2,0],[0,3,0,17,2,0,1],[0,3,5,5,4,1,0],[0,3,21,21,4,0,1],[0,3,5,5,4,2,0]],g=[[2,0,1,1,0,1,0],[2,0,1,1,0,2,0],[2,0,2,1,3,2,0],[2,0,2,33,3,1,1]],b=10,v=12,x=18,y=["UBAT_L","UBAT_R","UBAT_EN","UBAT_AN","UBAT_ON","UBAT_B","UBAT_S","UBAT_AL","UBAT_WS","UBAT_CS","UBAT_ES","UBAT_ET","UBAT_NSM","UBAT_LRE","UBAT_RLE","UBAT_PDF","UBAT_LRO","UBAT_RLO","UBAT_BN"],O=[100,0,0,0,0,101,102,103,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,104,4,4,4,0,4,0,4,0,4,4,4,0,0,4,4,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,4,4,0,0,4,4,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0,105,7,7,106,107],T=[[x,x,x,x,x,x,x,x,x,6,5,6,8,5,x,x,x,x,x,x,x,x,x,x,x,x,x,x,5,5,5,6,8,4,4,11,11,11,4,4,4,4,4,b,9,b,9,9,2,2,2,2,2,2,2,2,2,2,9,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,x,x,x,x,x,x,5,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,9,4,11,11,11,11,4,4,4,4,0,4,4,x,4,4,11,11,2,2,4,0,4,4,4,2,0,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,4,4,4,4,4,4,4,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,1,v,1,v,v,1,v,v,1,v,4,4,4,4,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,1,1,1,1,1,4,4,4,4,4,4,4,4,4,4,4],[3,3,3,3,4,4,4,4,7,11,11,7,9,7,4,4,v,v,v,v,v,v,v,v,v,v,v,7,4,4,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,3,3,3,3,3,3,3,3,3,3,11,3,3,7,7,7,v,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,v,v,v,v,v,v,v,3,4,v,v,v,v,v,v,7,7,v,v,4,v,v,v,v,7,7,2,2,2,2,2,2,2,2,2,2,7,7,7,7,7,7],[7,7,7,7,7,7,7,7,7,7,7,7,7,7,4,7,7,v,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,4,4,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,v,v,v,v,v,v,v,v,v,v,v,7,4,4,4,4,4,4,4,4,4,4,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,v,v,v,v,v,v,v,v,v,1,1,4,4,4,4,1,4,4,4,4,4],[8,8,8,8,8,8,8,8,8,8,8,x,x,x,0,1,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,8,5,13,14,15,16,17,9,11,11,11,11,11,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,9,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,8,x,x,x,x,x,4,4,4,4,4,x,x,x,x,x,x,2,0,4,4,2,2,2,2,2,2,b,b,4,4,4,0,2,2,2,2,2,2,2,2,2,2,b,b,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],[0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,4,4,4,4,4,1,v,1,1,1,1,1,1,1,1,1,1,b,1,1,1,1,1,1,1,1,1,1,1,1,1,4,1,1,1,1,1,4,1,4,1,1,4,1,1,4,1,1,1,1,1,1,1,1,1,1,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],[v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,v,v,v,v,v,v,v,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,9,4,9,4,4,9,4,4,4,4,4,4,4,4,4,11,4,4,b,b,4,4,4,4,4,11,11,4,4,4,4,4,7,7,7,7,7,4,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,4,4,x],[4,4,4,11,11,11,4,4,4,4,4,b,9,b,9,9,2,2,2,2,2,2,2,2,2,2,9,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,0,0,0,0,0,0,4,4,0,0,0,0,0,0,4,4,0,0,0,0,0,0,4,4,0,0,0,4,4,4,11,11,4,4,4,11,11,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]]
class S{constructor(){this.inputFormat="ILYNN",this.outputFormat="VLNNN",this.sourceToTarget=[],this.targetToSource=[],this.levels=[]}bidiTransform(e,t,i){if(this.sourceToTarget=[],this.targetToSource=[],!e)return""
if(function(e,t,i){H=[],X=[]
for(let n=0;n<i;n++)e[n]=n,t[n]=n,H[n]=n}(this.sourceToTarget,this.targetToSource,e.length),!this.checkParameters(t,i))return e
t=this.inputFormat,i=this.outputFormat
let n=e
const o=q,u=U(t.charAt(1)),d=U(i.charAt(1)),_=("I"===t.charAt(0)?"L":t.charAt(0))+u,m=("I"===i.charAt(0)?"L":i.charAt(0))+d,p=t.charAt(2)+i.charAt(2)
o.defInFormat=_,o.defOutFormat=m,o.defSwap=p
const g=function e(t,i,n,r,s){const a=function(e,t,i){if(void 0===t.inFormat&&(t.inFormat=i.defInFormat),void 0===t.outFormat&&(t.outFormat=i.defOutFormat),void 0===t.swap&&(t.swap=i.defSwap),t.inFormat===t.outFormat)return t
const n=t.inFormat.substring(0,1),r=t.outFormat.substring(0,1)
let s,a=t.inFormat.substring(1,4),o=t.outFormat.substring(1,4)
return"C"===a.charAt(0)&&(s=w(e),a="ltr"===s||"rtl"===s?s.toUpperCase():"L"===t.inFormat.charAt(2)?"LTR":"RTL",t.inFormat=n+a),"C"===o.charAt(0)&&(s=w(e),"rtl"===s?o="RTL":"ltr"===s?(s=function(e){const t=e.split("")
return t.reverse(),w(t.join(""))}(e),o=s.toUpperCase()):o="L"===t.outFormat.charAt(2)?"LTR":"RTL",t.outFormat=r+o),t}(t,{inFormat:i,outFormat:n,swap:r},s)
if(a.inFormat===a.outFormat)return t
i=a.inFormat,n=a.outFormat,r=a.swap
const o=i.substring(0,1),l=i.substring(1,4),c=n.substring(0,1),u=n.substring(1,4)
if(s.inFormat=i,s.outFormat=n,s.swap=r,"L"===o&&"VLTR"===n){if("LTR"===l)return s.dir=$,E(t,s)
if("RTL"===l)return s.dir=J,E(t,s)}if("V"===o&&"V"===c)return s.dir="RTL"===l?J:$,I(t,s)
if("L"===o&&"VRTL"===n)return"LTR"===l?(s.dir=$,t=E(t,s)):(s.dir=J,t=E(t,s)),I(t)
if("VLTR"===i&&"LLTR"===n)return s.dir=$,E(t,s)
if("V"===o&&"L"===c&&l!==u)return t=I(t),"RTL"===l?e(t,"LLTR","VLTR",r,s):e(t,"LRTL","VRTL",r,s)
if("VRTL"===i&&"LRTL"===n)return e(t,"LRTL","VRTL",r,s)
if("L"===o&&"L"===c){const i=s.swap
return s.swap=i.substr(0,1)+"N","RTL"===l?(s.dir=J,t=E(t,s),s.swap="N"+i.substr(1,2),s.dir=$,t=E(t,s)):(s.dir=$,t=E(t,s),s.swap="N"+i.substr(1,2),t=e(t,"VLTR","LRTL",s.swap,s)),t}return t}(e,_,m,p,o)
let b=!1
return"R"===i.charAt(1)?b=!0:"C"!==i.charAt(1)&&"D"!==i.charAt(1)||(b="rtl"===this.checkContextual(g)),this.sourceToTarget=H,this.targetToSource=function(e){const t=new Array(e.length)
for(let i=0;i<e.length;i++)t[e[i]]=i
return t}(this.sourceToTarget),Y=this.targetToSource,n=t.charAt(3)===i.charAt(3)?g:"S"===i.charAt(3)?function(e,t,i){if(0===t.length)return""
void 0===e&&(e=!0),void 0===i&&(i=!0)
const n=(t=String(t)).split("")
let r=0,o=1,u=n.length
e||(r=n.length-1,o=-1,u=1)
const d=function(e,t,i,n,r){let o=0
const u=[]
let d=0
for(let f=t;f*i<n;f+=i)if(A(e[f])||k(e[f])){if("ل"===e[f]&&F(e,f+i,i,n)){e[f]=G(e[f+i],0===o?s:a),f+=i,V(e,f,i,n),r&&(u[d]=f,d++),o=0
continue}const t=e[f]
1===o?e[f]=R(e,f+i,i,n)?z(e[f]):N(e[f],c):!0===R(e,f+i,i,n)?e[f]=N(e[f],h):e[f]=N(e[f],l),k(t)||(o=1),!0===B(t)&&(o=0)}else o=0
return u}(n,r,o,u,i)
let f=""
for(let t=0;t<n.length;t++)i&&P(d,d.length,t)>-1?(W(Y,t,!e,-1),H.splice(t,1)):f+=n[t]
return f}(b,g,!0):function(e,t,i){if(0===e.length)return""
void 0===i&&(i=!0),void 0===t&&(t=!0)
let n=""
const s=(e=String(e)).split("")
for(let a=0;a<e.length;a++){let o=!1
if(s[a]>="ﹰ"&&s[a]<"\ufeff"){const l=e.charCodeAt(a)
s[a]>="ﻵ"&&s[a]<="ﻼ"?(t?(a>0&&i&&" "===s[a-1]?n=n.substring(0,n.length-1)+"ل":(n+="ل",o=!0),n+=r[(l-65269)/2]):(n+=r[(l-65269)/2],n+="ل",a+1<e.length&&i&&" "===s[a+1]?a++:o=!0),o&&(W(Y,a,!0,1),H.splice(a,0,H[a]))):n+=f[l-65136]}else n+=s[a]}return n}(g,b,!0),this.sourceToTarget=H,this.targetToSource=Y,this.levels=X,n}_inputFormatSetter(e){if(!Q.test(e))throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!")
this.inputFormat=e}_outputFormatSetter(e){if(!Q.test(e))throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!")
this.outputFormat=e}checkParameters(e,t){return e?this._inputFormatSetter(e):e=this.inputFormat,t?this._outputFormatSetter(t):t=this.outputFormat,e!==t}checkContextual(e){let t=w(e)
if("ltr"!==t&&"rtl"!==t){try{t=document.dir.toLowerCase()}catch(e){}"ltr"!==t&&"rtl"!==t&&(t="ltr")}return t}hasBidiChar(e){return ee.test(e)}}function w(e){const t=/[A-Za-z\u05d0-\u065f\u066a-\u06ef\u06fa-\u07ff\ufb1d-\ufdff\ufe70-\ufefc]/.exec(e)
return t?t[0]<="z"?"ltr":"rtl":""}function E(e,t){const i=e.split(""),n=[]
return M(i,n,t),function(e,t,i){if(0!==i.hiLevel&&i.swap.substr(0,1)!==i.swap.substr(1,2))for(let i=0;i<e.length;i++)1===t[i]&&(e[i]=j(e[i]))}(i,n,t),L(2,i,n,t),L(1,i,n,t),X=n,i.join("")}function M(e,t,i){const n=e.length,r=i.dir?g:p
let s=0,a=-1
const o=[],l=[]
i.hiLevel=i.dir,i.lastArabic=!1,i.hasUbatAl=!1,i.hasUbatB=!1,i.hasUbatS=!1
for(let t=0;t<n;t++)o[t]=C(e[t])
for(let c=0;c<n;c++){const n=s,u=D(e,o,l,c,i)
l[c]=u,s=r[n][u]
const h=240&s
s&=15
const d=r[s][Z]
if(t[c]=d,h>0)if(16===h){for(let e=a;e<c;e++)t[e]=1
a=-1}else a=-1
if(r[s][K])-1===a&&(a=c)
else if(a>-1){for(let e=a;e<c;e++)t[e]=d
a=-1}5===o[c]&&(t[c]=0),i.hiLevel|=d}i.hasUbatS&&function(e,t,i,n){for(let r=0;r<i;r++)if(6===e[r]){t[r]=n.dir
for(let i=r-1;i>=0&&8===e[i];i--)t[i]=n.dir}}(o,t,n,i)}function C(e){const t=e.charCodeAt(0),i=O[t>>8]
return i<100?i:T[i-100][255&t]}function I(e,t){const i=e.split("")
if(t){const e=[]
M(i,e,t),X=e}return i.reverse(),H.reverse(),i.join("")}function P(e,t,i){for(let n=0;n<t;n++)if(e[n]===i)return n
return-1}function A(e){for(let t=0;t<_.length;t++)if(e>=_[t]&&e<=m[t])return!0
return!1}function R(e,t,i,n){for(;t*i<n&&k(e[t]);)t+=i
return!!(t*i<n&&A(e[t]))}function F(e,t,i,n){for(;t*i<n&&k(e[t]);)t+=i
let s=" "
if(!(t*i<n))return!1
s=e[t]
for(let e=0;e<r.length;e++)if(r[e]===s)return!0
return!1}function L(e,t,i,n){if(n.hiLevel<e)return
if(1===e&&n.dir===J&&!n.hasUbatB)return t.reverse(),void H.reverse()
const r=t.length
let s,a,o,l,c,u=0
for(;u<r;){if(i[u]>=e){for(s=u+1;s<r&&i[s]>=e;)s++
for(a=u,o=s-1;a<o;a++,o--)l=t[a],t[a]=t[o],t[o]=l,c=H[a],H[a]=H[o],H[o]=c
u=s}u++}}function D(e,t,i,n,r){const s=t[n]
return{UBAT_L:()=>(r.lastArabic=!1,0),UBAT_R:()=>(r.lastArabic=!1,1),UBAT_ON:()=>4,UBAT_AN:()=>3,UBAT_EN:()=>r.lastArabic?3:2,UBAT_AL:()=>(r.lastArabic=!0,r.hasUbatAl=!0,1),UBAT_WS:()=>4,UBAT_CS:()=>{let e,s
return n<1||n+1>=t.length||2!==(e=i[n-1])&&3!==e||2!==(s=t[n+1])&&3!==s?4:(r.lastArabic&&(s=3),s===e?s:4)},UBAT_ES:()=>2===(n>0?i[n-1]:5)&&n+1<t.length&&2===t[n+1]?2:4,UBAT_ET:()=>{if(n>0&&2===i[n-1])return 2
if(r.lastArabic)return 4
let e=n+1
const s=t.length
for(;e<s&&11===t[e];)e++
return e<s&&2===t[e]?2:4},UBAT_NSM:()=>{if("VLTR"===r.inFormat){const i=t.length
let r=n+1
for(;r<i&&t[r]===v;)r++
if(r<i){const i=e[n].charCodeAt[0],s=i>=1425&&i<=2303||64286===i,a=t[r]
if(s&&(1===a||7===a))return 1}}return n<1||5===t[n-1]?4:i[n-1]},UBAT_B:()=>(r.lastArabic=!0,r.hasUbatB=!0,r.dir),UBAT_S:()=>(r.hasUbatS=!0,4),UBAT_LRE:()=>(r.lastArabic=!1,4),UBAT_RLE:()=>(r.lastArabic=!1,4),UBAT_LRO:()=>(r.lastArabic=!1,4),UBAT_RLO:()=>(r.lastArabic=!1,4),UBAT_PDF:()=>(r.lastArabic=!1,4),UBAT_BN:()=>4}[y[s]]()}function j(e){let t,i=0,r=n.length-1
for(;i<=r;)if(t=Math.floor((i+r)/2),e<n[t][0])r=t-1
else{if(!(e>n[t][0]))return n[t][1]
i=t+1}return e}function B(e){for(let t=0;t<d.length;t++)if(d[t]===e)return!0
return!1}function z(e){for(let t=0;t<o.length;t++)if(e===o[t])return u[t]
return e}function N(e,t){for(let i=0;i<o.length;i++)if(e===o[i])return t[i]
return e}function k(e){return e>="ً"&&e<="ٕ"}function U(e){return"L"===e?"LTR":"R"===e?"RTL":"C"===e?"CLR":"D"===e?"CRL":""}function V(e,t,i,n){for(;t*i<n&&k(e[t]);)t+=i
return t*i<n&&(e[t]=" ",!0)}function G(e,t){for(let i=0;i<r.length;i++)if(e===r[i])return t[i]
return e}function W(e,t,i,n){for(let r=0;r<e.length;r++)(e[r]>t||!i&&e[r]===t)&&(e[r]+=n)}let H=[],Y=[],X=[]
const q={dir:0,defInFormat:"LLTR",defoutFormat:"VLTR",defSwap:"YN",inFormat:"LLTR",outFormat:"VLTR",swap:"YN",hiLevel:0,lastArabic:!1,hasUbatAl:!1,hasBlockSep:!1,hasSegSep:!1,defOutFormat:""},Z=5,K=6,$=0,J=1,Q=/^[(I|V)][(L|R|C|D)][(Y|N)][(S|N)][N]$/,ee=/[\u0591-\u06ff\ufb1d-\ufefc]/},1738:function(e,t,i){"use strict"
i.d(t,"a",(function(){return r}))
var n=i(771)
async function r(e,t){const{data:i}=await Object(n.default)(e,{responseType:"image",...t})
return i}},1744:function(e,t,i){"use strict"
i.d(t,"a",(function(){return c}))
var n=i(1215),r=i(1192),s=i(1109),a=i(1151),o=i(1e3),l=i(1554)
class c extends l.a{constructor(e,t,i,n){super(e,t,i,n,o.Z,o.Z)}destroy(){super.destroy(),this._transforms&&c.TransformCache.release(this.key.hash)}setTransform(e){const t=this.resolution/e.resolution,i=this.transforms.tileMat3,[a,o]=e.toScreenNoRotation([0,0],[this.x,this.y]),l=this.width/this.rangeX*t,c=this.height/this.rangeY*t
Object(s.o)(i,l,0,0,0,c,0,a,o,1),Object(s.l)(this.transforms.dvs,e.displayViewMat3,i)
const u=this.transforms.labelMat2d,h=window.devicePixelRatio,d=Object(n.d)(Object(r.a)(),l*h,0,0,c*h,a*h,o*h)
Object(n.g)(u,e.viewMat2d,d)}_createTransforms(){return c.TransformCache.acquire(this.key.hash)}}c.TransformCache=new class{acquire(e){return{refCount:1,version:-1,labelMat2d:Object(r.a)(),tileMat3:Object(a.b)(),dvs:Object(a.b)()}}release(e){}}},1745:function(e,t,i){"use strict"
i.d(t,"a",(function(){return a}))
var n=i(23),r=i(1e3)
const s=2147483647
class a{constructor(e){this._head=e,this._cursor=e}static from(e,t=0,i=e.byteLength/o.BYTES_PER_RECORD-t){const n=new o(new Int32Array(e,t*o.BYTES_PER_RECORD,i*o.ELEMENTS_PER_RECORD))
return new a(n)}size(){let e=this._cursor,t=0
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
const t=new a(null==(e=this._head)?void 0:e.copy())
if(!t._head)return t
let i=t._head,n=t._head._link
for(;n;)i._link=n.copy(),i=n,n=i._link
return t}next(){return!!this._cursor&&(!!this._cursor.next()||!!this._cursor._link&&(this._cursor=this._cursor._link,this.next()))}peekId(){var e
return null!=(e=this._cursor.peekId())?e:this._cursor._link.peekId()}delete(e){let t=this._head,i=null
for(;t;){if(t.delete(e))return t.isEmpty()&&(Object(n.l)(i)&&(i._link=t._link),t===this._head&&(this._head=t._link),t===this._cursor&&(this._cursor=t._link)),!0
i=t,t=t._link}return!1}}a.ELEMENTS_PER_RECORD=r.r,a.BYTES_PER_RECORD=a.ELEMENTS_PER_RECORD*Int32Array.BYTES_PER_ELEMENT
class o{constructor(e){this._link=null,this._index=-1,this._indexStart=0,this._packedRecordsF32=null,this._deletedCount=0,this._offsets={instance:null},this._packedRecords=e}static from(e,t=0,i=e.byteLength/this.BYTES_PER_RECORD-t){return new o(new Int32Array(e,t*this.BYTES_PER_RECORD,i*this.ELEMENTS_PER_RECORD))}delete(e){const t=this._index,i=this.lookup(e)
if(i)for(this.id=s,++this._deletedCount;this.next()&&this.id===e;)this.id=s,++this._deletedCount
return this._index=t,i}isEmpty(){return this._deletedCount===this.size()}link(e){this._link?this._link.link(e):this._link=e}lookup(e){if(Object(n.k)(this._offsets.instance)){this._offsets.instance=new Map
const e=this.copy()
e._index=-1
let t=0
for(;e.next();)e.id!==t&&(this._offsets.instance.set(e.id,e._index),t=e.id)}if(!this._offsets.instance.has(e))return!1
const t=this._index
return this._index=this._offsets.instance.get(e),this.id!==s||(this._index=t,!1)}get id(){return this._packedRecords[this._index*o.ELEMENTS_PER_RECORD]}set id(e){this._packedRecords[this._index*o.ELEMENTS_PER_RECORD]=e}get materialKey(){return this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+1]}set materialKey(e){this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+1]=e}get insertAfter(){return this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+2]}get indexFrom(){return this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+3]}set indexFrom(e){this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+3]=e}get indexCount(){return this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+4]}set indexCount(e){this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+4]=e}get vertexFrom(){return this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+5]}set vertexFrom(e){this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+5]=e}get vertexCount(){return this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+6]}set vertexCount(e){this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+6]=e}get sortKey(){return this._packedRecordsF32||(this._packedRecordsF32=new Float32Array(this._packedRecords.buffer)),this._packedRecordsF32[this._index*o.ELEMENTS_PER_RECORD+7]}set sortKey(e){this._packedRecordsF32||(this._packedRecordsF32=new Float32Array(this._packedRecords.buffer)),this._packedRecordsF32[this._index*o.ELEMENTS_PER_RECORD+7]=e}get index(){return this._index}size(){return this._packedRecords.length/o.ELEMENTS_PER_RECORD}next(){for(;++this._index<this.size()&&this.id===s;);return this._index<this.size()}peekId(){const e=(this._index+1)*o.ELEMENTS_PER_RECORD
return e>=this._packedRecords.length?0:this._packedRecords[e]}getCursor(){return this.copy()}copy(){const e=new o(this._packedRecords)
return e._indexStart=this._indexStart,e._link=this._link,e._index=this._index,e._offsets=this._offsets,e._deletedCount=this._deletedCount,e}}o.ELEMENTS_PER_RECORD=r.r,o.BYTES_PER_RECORD=o.ELEMENTS_PER_RECORD*Int32Array.BYTES_PER_ELEMENT},1746:function(e,t,i){"use strict"
i.d(t,"a",(function(){return h}))
var n=i(446),r=i(233),s=i(1189),a=i(23),o=i(1010),l=i(1391),c=i(1356)
const u=r.a.getLogger("esri/views/2d/engine/webgl/util/Matcher")
async function h(e,t,i,n){switch(e.type){case"simple":case"heatmap":return d.fromBasicRenderer(e,t,i,n)
case"map":return m.fromUVRenderer(e,t,i,n)
case"interval":return _.fromCBRenderer(e,t,i,n)
case"dictionary":return b.fromDictionaryRenderer(e,t,i,n)
case"pie-chart":return f.fromPieChartRenderer(e,t,i,n)
case"subtype":return f.fromSubtypes(e,t,i,n)}}class d{constructor(){this.type="feature",this._defaultResult=null}static async fromBasicRenderer(e,t,i,n){const r=new d
if(e.symbol){const s=await Object(c.b)(e.symbol,i,n),a=t.createTemplateGroup(s,null)
r.setDefault(a)}return r}static async fromPieChartRenderer(e,t,i,n){const r=new d
if(e.markerSymbol){const s=await Object(c.b)(e.markerSymbol,i,n)
let a
e.fillSymbol&&(a=await Object(c.b)(e.fillSymbol,i,n))
const o=t.createTemplateGroup(s,a)
r.setDefault(o)}return r}size(){return 1}getDefault(){return this._defaultResult}setDefault(e){this._defaultResult=e}match(e,t,i,n,r){return this.getDefault()}async analyze(e,t,i,n,r,s){return null}}class f extends d{constructor(e,t){super(),this._subMatchers=e,this._subtypeField=t}static async fromSubtypes(e,t,i,n){const r=new Map,s=[]
for(const a in e.renderers){const o=parseInt(a,10),l=h(e.renderers[a],t,i,n).then(e=>r.set(o,e))
s.push(l)}return await Promise.all(s),new f(r,e.subtypeField)}match(e,t,i,n,r){const s=t.readAttribute(this._subtypeField),a=this._subMatchers.get(s)
return a?a.match(e,t,i,n,r):null}}class _ extends d{constructor(e,t,i,n){super(),this.type="interval",this._intervals=[],this._isMaxInclusive=t,this._fieldIndex=n,this._field=e,this._normalizationInfo=i}static async fromCBRenderer(e,t,i,n){const{isMaxInclusive:r,normalizationField:s,normalizationTotal:a,normalizationType:o}=e,l=e.field,u=new _(l,r,{normalizationField:s,normalizationTotal:a,normalizationType:o},e.fieldIndex),h=await Object(c.b)(e.backgroundFillSymbol,i,n)
await Promise.all(e.intervals.map(async e=>{const r=await Object(c.b)(e.symbol,i,n),s=await t.createTemplateGroup(r,h),a={min:e.min,max:e.max}
u.add(a,s)}))
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
const{normalizationField:n,normalizationTotal:r,normalizationType:s}=this._normalizationInfo,a=null!=(t=e.readAttribute(n))?t:1
if(s)switch(s){case"esriNormalizeByField":return a?i/a:void 0
case"esriNormalizeByLog":return Math.log(i)*Math.LOG10E
case"esriNormalizeByPercentOfTotal":return i/r*100
default:return void u.error("Found unknown normalization type: "+s)}else u.error("Normalization is required, but no type was set!")}}class m extends d{constructor(e,t,i){super(),this.type="map",this._nullResult=null,this._resultsMap=new Map,this._fields=[],this._fieldsIndex=i,this._fields=e,this._seperator=t||""}static async fromUVRenderer(e,t,i,n){const r=e.fieldDelimiter,s=[e.field]
e.field2&&s.push(e.field2),e.field3&&s.push(e.field3)
const a=await Object(c.b)(e.backgroundFillSymbol,i,n),o=new m(s,r,e.fieldIndex)
await Promise.all(e.map.map(async(e,r)=>{const s=await Object(c.b)(e.symbol,i,n),l=r+1,u=await t.createTemplateGroup(s,a,l)
"<Null>"===e.value?o.setNullResult(u):o.add(e.value,u)}))
const l=await Object(c.b)(e.defaultSymbol,i,n)
if(l){const e=Number.MAX_SAFE_INTEGER,i=await t.createTemplateGroup(l,a,e)
o.setDefault(i)}return o}setNullResult(e){this._nullResult=e}add(e,t){this._resultsMap.set(e.toString(),t)}size(){return super.size()+this._resultsMap.size}match(e,t,i,n,r){if(null==this._fieldsIndex&&!this._fields)return this.getDefault()
const s=null!=this._fieldsIndex?t.getComputedStringAtIndex(this._fieldsIndex):this._getValueFromFields(t)
if(null!==this._nullResult&&(null==s||""===s||"<Null>"===s))return this._nullResult
if(null==s)return this.getDefault()
const a=s.toString()
return this._resultsMap.has(a)?this._resultsMap.get(a):this.getDefault()}_getValueFromFields(e){const t=[]
for(const i of this._fields){const n=e.readAttribute(i)
null==n||""===n?t.push("<Null>"):t.push(n)}return t.join(this._seperator)}}let p
async function g(){return p||(p=i.e(772).then(i.bind(null,1340))),p}class b extends d{constructor(e,t,i,n,r,a){super(),this.type="dictionary",this._groupIdCache=new s.a(100),this._loader=e,this._fieldMap=e.fieldMap,this._symbolFields=e.getSymbolFields(),this._templates=t,this._info=i,this._scaleFn=n,this._schemaUtilsModule=r,this._symbolOptions=a}static async fromDictionaryRenderer(e,t,n,r){const[{DictionaryLoader:s},a]=await Promise.all([i.e(381).then(i.bind(null,1254)),g()]),c=new s(e.url,e.config,e.fieldMap)
await c.fetchResources({spatialReference:n.spatialReference,fields:n.fields})
const u=await async function(e,t){const i=e||1
if("number"==typeof i)return(e,t,n)=>i
const n=await Object(o.d)(i,t.spatialReference,t.fields)
return(e,i,r)=>Object(l.a)(n,e,{$view:r},t.geometryType,i)||1}(e.scaleExpression,n)
return new b(c,t,n,u,a,e.symbolOptions)}async _analyzeFeature(e,t,i,r,s){const a=e.readLegacyFeature(),o=this._scaleFn(a,i,r),l=this._attributeHash(a)+"-"+o,h=this._groupIdCache.get(l)
if(h)return h
const d={...r,spatialReference:this._info.spatialReference,abortOptions:s,fields:this._info.fields},f=await this._loader.getSymbolAsync(a,d),_=this._schemaUtilsModule.createSymbolSchema(f,this._symbolOptions),m=Object(c.b)(_,this._info,t,s).then(e=>{if("expanded-cim"!==(null==e?void 0:e.type))return u.error(new n.a("mapview-bad-type",`Found unexpected type ${null==e?void 0:e.type} in dictionary response`)),null
e.hash+="-"+o
for(const t of e.layers)t.scaleFactor=o,t.templateHash+="-"+o
return this._templates.createTemplateGroup(e,null)})
return this._groupIdCache.put(l,m,1),m}async analyze(e,t,i,n,r,s){const o=t.getCursor(),l=[]
for(;o.next();)l.push(this._analyzeFeature(o,i,n,r,s))
return Promise.all(l).then(e=>e.filter(a.l))}match(e,t,i,n,r){return null}_attributeHash(e){let t=""
for(const n of this._symbolFields){var i
const r=null==(i=this._fieldMap)?void 0:i[n]
r&&(t+=e.attributes[r]+"-")}return t}}},1747:function(e,t,i){"use strict"
i.d(t,"a",(function(){return O}))
var n=i(446),r=i(235),s=i(233),a=i(991),o=i(23),l=i(973),c=i(1143),u=i(1184),h=i(1e3),d=i(1269),f=i(1022),_=i(1572),m=i(1706),p=i(984)
const g=s.a.getLogger("esri.views.layers.2d.features.support.AttributeStore"),b=Object(_.b)(_.a,g),v={sharedArrayBuffer:Object(r.a)("esri-shared-array-buffer"),atomics:Object(r.a)("esri-atomics")}
function x(e,t){return i=>t(e(i))}class y{constructor(e,t,i,n){this.size=0,this.texelSize=4,this.dirtyStart=0,this.dirtyEnd=0
const{pixelType:r,layout:s,textureOnly:a}=n
this.textureOnly=a||!1,this.pixelType=r,this._ctype=t,this.layout=s,this._resetRange(),this._shared=e,this.size=i,a||(this.data=this._initData(r,i,e,t))}get buffer(){return Object(o.b)(this.data,e=>e.buffer)}unsetComponentAllTexels(e,t){const i=Object(o.u)(this.data)
for(let n=0;n<this.size*this.size;n++)i[n*this.texelSize+e]&=~t
this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1}setComponentAllTexels(e,t){const i=Object(o.u)(this.data)
for(let n=0;n<this.size*this.size;n++)i[n*this.texelSize+e]|=255&t
this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1}setComponent(e,t,i){const n=Object(o.u)(this.data)
for(const r of i)n[r*this.texelSize+e]|=t,this.dirtyStart=Math.min(this.dirtyStart,r),this.dirtyEnd=Math.max(this.dirtyEnd,r)}setComponentTexel(e,t,i){Object(o.u)(this.data)[i*this.texelSize+e]|=t,this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,i)}unsetComponentTexel(e,t,i){Object(o.u)(this.data)[i*this.texelSize+e]&=~t,this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,i)}getData(e,t){const i=Object(d.f)(e)
return Object(o.u)(this.data)[i*this.texelSize+t]}setData(e,t,i){const n=Object(d.f)(e),r=1<<t
0!=(this.layout&r)?Object(o.k)(this.data)||(this.data[n*this.texelSize+t]=i,this.dirtyStart=Math.min(this.dirtyStart,n),this.dirtyEnd=Math.max(this.dirtyEnd,n)):g.error("mapview-attributes-store","Tried to set a value for a texel's readonly component")}lock(){this.pixelType===p.q.UNSIGNED_BYTE&&this._shared&&v.atomics&&"local"!==this._ctype&&Atomics.store(this.data,0,1)}unlock(){this.pixelType===p.q.UNSIGNED_BYTE&&this._shared&&v.atomics&&"local"!==this._ctype&&Atomics.store(this.data,0,0)}expand(e){if(this.size=e,!this.textureOnly){const t=this._initData(this.pixelType,e,this._shared,this._ctype),i=Object(o.u)(this.data)
t.set(i),this.data=t}}toMessage(){const e=this.dirtyStart,t=this.dirtyEnd,i=this.texelSize
if(e>t)return null
this._resetRange()
const n=!(this._shared||"local"===this._ctype),r=this.pixelType,s=this.layout,a=Object(o.u)(this.data)
return{start:e,end:t,data:n&&a.slice(e*i,(t+1)*i)||null,pixelType:r,layout:s}}_initData(e,t,i,n){const r=i&&"local"!==n?SharedArrayBuffer:ArrayBuffer,s=Object(f.l)(e),a=new s(new r(t*t*4*s.BYTES_PER_ELEMENT))
for(let e=0;e<a.length;e+=4)a[e+1]=255
return a}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}}class O{constructor(e,t,i=(()=>{})){this._client=e,this.config=t,this._notifyChange=i,this._blocks=new Array,this._filters=new Array(h.z),this._attributeComputeInfo=null,this._targetType=0,this._abortController=new AbortController,this._hasScaleExpr=!1,this._size=32,this._nextUpdate=null,this._currUpdate=null,this._idsToHighlight=new Set
const n=t.supportsTextureFloat?p.q.FLOAT:p.q.UNSIGNED_BYTE
b(`Creating AttributeStore ${v.sharedArrayBuffer?"with":"without"} shared memory`),this._blockDescriptors=[{pixelType:p.q.UNSIGNED_BYTE,layout:1},{pixelType:p.q.UNSIGNED_BYTE,layout:15,textureOnly:!0},{pixelType:p.q.UNSIGNED_BYTE,layout:15,textureOnly:!0},{pixelType:n,layout:15},{pixelType:n,layout:15},{pixelType:n,layout:15},{pixelType:n,layout:15}],this._blocks=this._blockDescriptors.map(()=>null)}destroy(){this._abortController.abort()}get hasScaleExpr(){return this._hasScaleExpr}get _signal(){return this._abortController.signal}get hasHighlight(){return this._idsToHighlight.size>0}isUpdating(){return!!this._currUpdate||!!this._nextUpdate}update(e,t){this.config=t
const i=t.schema.processors[0].storage,n=Object(c.a)(this._schema,i)
if((e.targets.feature||e.targets.aggregate)&&(e.storage.data=!0),n&&(Object(r.a)("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:",n),e.storage.data=!0,this._schema=i,this._attributeComputeInfo=null,!Object(o.k)(i))){switch(i.target){case"feature":this._targetType=d.c
break
case"aggregate":this._targetType=d.b}if("subtype"===i.type){this._attributeComputeInfo={isSubtype:!0,subtypeField:i.subtypeField,map:new Map}
for(const e in i.mapping){const t=i.mapping[e]
if(Object(o.l)(t)&&Object(o.l)(t.vvMapping))for(const i of t.vvMapping)this._bindAttribute(i,parseInt(e,10))}}else{if(this._attributeComputeInfo={isSubtype:!1,map:new Map},Object(o.l)(i.vvMapping))for(const e of i.vvMapping)this._bindAttribute(e)
if(Object(o.l)(i.attributeMapping))for(const e of i.attributeMapping)this._bindAttribute(e)}}}onTileData(e,t){if(Object(o.k)(t.addOrUpdate))return
const i=t.addOrUpdate.getCursor()
for(;i.next();){const e=i.getDisplayId()
this.setAttributeData(e,i)}}async setHighlight(e,t){const i=this._getBlock(0),n=t.map(e=>Object(d.f)(e))
i.lock(),i.unsetComponentAllTexels(0,1),i.setComponent(0,1,n),i.unlock(),this._idsToHighlight.clear()
for(const t of e)this._idsToHighlight.add(t)
await this.sendUpdates()}async updateFilters(e,t,i){const{service:n,spatialReference:s}=i,{filters:a}=t,o=a.map((e,t)=>this._updateFilter(e,t,n,s));(await Promise.all(o)).some(e=>e)&&(e.storage.filters=!0,Object(r.a)("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:","Filters changed"))}setData(e,t,i,n){const r=Object(d.f)(e)
this._ensureSizeForTexel(r),this._getBlock(t).setData(e,i,n)}getData(e,t,i){return this._getBlock(t).getData(e,i)}getHighlightFlag(e){return this._idsToHighlight.has(e)?h.w:0}unsetAttributeData(e){const t=Object(d.f)(e)
this._getBlock(0).setData(t,0,0)}setAttributeData(e,t){const i=Object(d.f)(e)
if(this._ensureSizeForTexel(i),this._getBlock(0).setData(i,0,this.getFilterFlags(t)),this._targetType!==Object(d.g)(e))return
const n=this._attributeComputeInfo,r=this.config.supportsTextureFloat?1:2
let s=null
n&&(s=n.isSubtype?n.map.get(t.readAttribute(n.subtypeField)):n.map,s&&s.size&&s.forEach((e,n)=>{const s=n*r%4,o=Math.floor(n*r/4),l=this._getBlock(o+h.e),c=e(t)
if(this.config.supportsTextureFloat)l.setData(i,s,c)
else if(c===h.B)l.setData(i,s,255),l.setData(i,s+1,255)
else{const e=Object(a.f)(Math.round(c),-32767,32766)+32768,t=255&e,n=(65280&e)>>8
l.setData(i,s,t),l.setData(i,s+1,n)}}))}sendUpdates(){if(Object(r.a)("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate"),this._notifyChange(),this._nextUpdate)return this._nextUpdate.promise
if(this._currUpdate)return this._nextUpdate=Object(l.e)(),this._nextUpdate.promise
const e={blocks:this._blocks.map(e=>Object(o.l)(e)?e.toMessage():null)}
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
n&&(i=x(i,e=>Object(m.b)(e,n)))
const r=e=>null===e||isNaN(e)||e===1/0||e===-1/0?h.B:e,s=this._attributeComputeInfo
if(s.isSubtype){var a
const n=null!=(a=s.map.get(t))?a:new Map
n.set(e.binding,x(i,r)),s.map.set(t,n)}else s.map.set(e.binding,x(i,r))}_createResources(){if(Object(o.l)(this._createResourcesPromise))return this._createResourcesPromise
this._getBlock(h.a),this._getBlock(h.d),b("Initializing AttributeStore")
const e={shared:v.sharedArrayBuffer&&!("local"===this._client.type),size:this._size,blocks:Object(o.m)(this._blocks,e=>({textureOnly:e.textureOnly,buffer:e.buffer,pixelType:e.pixelType}))},t=this._client.initialize(e,this._signal).catch(e=>{Object(l.j)(e)?this._createResourcesPromise=null:g.error(new n.a("mapview-attribute-store","Encountered an error during client initialization",e))})
return this._createResourcesPromise=t,t.then(()=>Object(o.k)(this._createResourcesPromise)?this._createResources():void 0),t}_getBlock(e){const t=this._blocks[e]
if(Object(o.l)(t))return t
b("Initializing AttributeBlock at index "+e)
const i=v.sharedArrayBuffer,n=this._client.type,r=new y(i,n,this._size,this._blockDescriptors[e])
return this._blocks[e]=r,this._createResourcesPromise=null,r}_expand(){if(this._size<this.config.maxTextureSize){const e=this._size<<=1
return b("Expanding block size to",e,this._blocks),Object(o.i)(this._blocks,t=>t.expand(e)),this._createResourcesPromise=null,this._size=e,0}return g.error(new n.a("mapview-limitations","Maximum number of onscreen features exceeded.")),-1}async _updateFilter(e,t,i,n){const r=this._filters[t],s=Object(o.l)(r)&&r.hash
if(!r&&!e)return!1
if(s===JSON.stringify(e))return!1
if(Object(o.k)(e)){if(!r)return!1
const e=1<<t+1,i=this._getBlock(0)
return this._filters[t]=null,i.setComponentAllTexels(0,e),this.sendUpdates(),!0}const a=await this._getFilter(t,i)
return await a.update(e,n),!0}async _getFilter(e,t){const n=this._filters[e]
if(Object(o.l)(n))return n
const{default:r}=await i.e(241).then(i.bind(null,2017)),s=new r({geometryType:t.geometryType,hasM:!1,hasZ:!1,timeInfo:t.timeInfo,fieldsIndex:new u.a(t.fields)})
return this._filters[e]=s,s}isVisible(e){return!!(2&this._getBlock(0).getData(e,0))}getFilterFlags(e){let t=0
const i=Object(d.e)(e.getDisplayId())
for(let n=0;n<this._filters.length;n++){const r=!!(i&1<<n),s=this._filters[n]
t|=(!r||Object(o.k)(s)||s.check(e)?1:0)<<n}let n=0
if(this._idsToHighlight.size){const t=e.getObjectId()
n=this.getHighlightFlag(t)}return t<<1|n}}},1748:function(e,t,i){"use strict"
i.d(t,"a",(function(){return o}))
var n=i(968),r=i(1063),s=i(970),a=(i(971),i(445),i(969))
const o=e=>{let t=class extends(Object(r.b)(e)){constructor(){super(...arguments),this.graphics=null,this.renderer=null}}
return Object(n.a)([Object(s.b)()],t.prototype,"graphics",void 0),Object(n.a)([Object(s.b)()],t.prototype,"renderer",void 0),Object(n.a)([Object(s.b)()],t.prototype,"updating",void 0),Object(n.a)([Object(s.b)()],t.prototype,"view",void 0),t=Object(n.a)([Object(a.a)("esri.views.layers.GraphicsView")],t),t}},1753:function(e,t,i){"use strict"
i.d(t,"a",(function(){return Ge}))
var n=i(968),r=i(975),s=i(1304),a=i(1025),o=i(235),l=i(23),c=i(973),u=i(978),h=i(970),d=(i(971),i(445),i(969)),f=i(769),_=i(996),m=i(1066),p=i(983),g=i(1671),b=i(988),v=i(1525),x=i(1350),y=i(1268),O=i(1e3),T=i(1003)
class S{constructor(){this._dirties=[{vertexFrom:-1,vertexCount:-1,indexFrom:-1,indexCount:-1,allDirty:!1},{vertexFrom:-1,vertexCount:-1,indexFrom:-1,indexCount:-1,allDirty:!1},{vertexFrom:-1,vertexCount:-1,indexFrom:-1,indexCount:-1,allDirty:!1},{vertexFrom:-1,vertexCount:-1,indexFrom:-1,indexCount:-1,allDirty:!1},{vertexFrom:-1,vertexCount:-1,indexFrom:-1,indexCount:-1,allDirty:!1}]}hasDirty(){return this._dirties.some(e=>-1!==e.indexCount||e.allDirty)}markAllClean(){for(const e of this._dirties)e.indexFrom=-1,e.indexCount=-1,e.vertexFrom=-1,e.vertexCount=-1,e.allDirty=!1}markAllDirty(){for(const e of this._dirties)e.allDirty=!0}forEach(e){for(let t=0;t<this._dirties.length;++t){const{indexCount:i,indexFrom:n,vertexCount:r,vertexFrom:s,allDirty:a}=this._dirties[t],o={}
let l,c=!1;(a||-1!==s&&r>0)&&(o.geometry={count:r,from:s,allDirty:a},c=!0),(a||-1!==n&&i>0)&&(l={count:i,from:n,allDirty:a},c=!0),c&&e({indices:l,vertices:o},t)}}markDirtyIndices(e,t,i){const n=this._dirties[e],r=t,s=i
if(!n.allDirty)if(-1!==n.indexCount){const e=Math.min(n.indexFrom,r),t=Math.max(n.indexFrom+n.indexCount,r+s)-e
n.indexFrom=e,n.indexCount=t}else n.indexFrom=r,n.indexCount=s}markDirtyVertices(e,t,i,n){const r=this._dirties[e],s=i,a=n
if(!r.allDirty)if(-1!==r.vertexCount){const e=Math.min(r.vertexFrom,s),t=Math.max(r.vertexFrom+r.vertexCount,s+a)-e
r.vertexFrom=e,r.vertexCount=t}else r.vertexFrom=s,r.vertexCount=a}}class w{get largestRange(){return this._largestRange}constructor(e){this._largestRange=null,this._parent=e,this._updateLargestRange()}rangeCreated(e){(!this._largestRange||e.count>this._largestRange.count)&&(this._largestRange=e)}rangeResized(e,t){e===this._largestRange?e.count<t&&this._updateLargestRange():(!this._largestRange||e.count>this._largestRange.count)&&(this._largestRange=e)}findBestRange(e){let t=this._parent._freeHead,i=null
for(;null!==t;)t.count>=e&&(!i||t.count-e<i.count-e)&&(i=t),t=t.next
return i}findAdjacentRanges(e,t){let i=!0,n=!1,r=null,s=this._parent._freeHead
for(;i&&!n;){const a=null!==r?r.from+r.count:0,o=null!==s?s.from:this._parent._size
e>=a&&e+t<=o?(i=!1,n=!0):null!==s?(r=s,s=s.next):i=!1}return[r,s]}_updateLargestRange(){let e=null,t=this._parent._freeHead
for(;null!==t;)(!e||t.count>e.count)&&(e=t),t=t.next
this._largestRange=e}}class E{constructor(e,t){this._allocated=0,this._size=e,this._freeHead=e>0?{from:0,count:e,prev:null,next:null}:null,this._bookKeeper=t||new w(this),this._freeHead&&this._bookKeeper.rangeCreated(this._freeHead)}allocate(e){const t=this._bookKeeper.findBestRange(e)
if(null==t)return-1
const i=t.from,n=t.count
if(t.from+=e,t.count-=e,this._bookKeeper.rangeResized(t,i,n),this._allocated+=e,0===t.count){const e=null!==t.prev?this._freeHead:t.next
E._removeRange(t),this._freeHead=e}return i}free(e,t){const[i,n]=this._bookKeeper.findAdjacentRanges(e,t),r={from:e,count:t,prev:null!=i?i:null,next:null!=n?n:null}
if(null!=i&&(i.next=r),null!=n&&(n.prev=r),this._bookKeeper.rangeCreated(r),this._allocated-=t,null!=n&&r.from+r.count===n.from){const e=r.from,t=r.count
E._fuse(r,n),E._removeRange(n),this._bookKeeper.rangeResized(r,e,t),this._bookKeeper.rangeResized(n,void 0,0)}if(null!=i&&i.from+i.count===r.from){const e=i.from,t=i.count
E._fuse(i,r),E._removeRange(r),this._bookKeeper.rangeResized(i,e,t),this._bookKeeper.rangeResized(r,void 0,0)}this._freeHead=null!==r.prev?this._freeHead:r}get fragmentation(){const e=this._size-this._allocated
return 0===e?0:1-this._bookKeeper.largestRange.count/e}static _removeRange(e){null!==e.prev?null!==e.next?(e.prev.next=e.next,e.next.prev=e.prev):e.prev.next=null:null!==e.next&&(e.next.prev=null)}static _fuse(e,t){e.count+=t.count,e.next=t.next,t.from+=t.count,t.count=0,null!==t.next&&(t.next.prev=e)}}var M=i(1022)
const C=["FILL","LINE","MARKER","TEXT","LABEL"]
class I{constructor(e,t,i,n){this._strides=e,this._displayList=t,this._freeListsAndStorage={},this._dirtyMap=null,this._dirtyMap=i
for(const t in e){this._freeListsAndStorage[t]={vtxFreeList:n?new E(n):null,idxFreeList:n?new E(n):null,vertexBuffers:{},indexBuffer:n?new Uint32Array(n):null}
for(const i in e[t])this._freeListsAndStorage[t].vertexBuffers[i]={data:n?Object(M.b)(n,e[t][i]):null,stride:e[t][i]}}}static fromTileData(e,t){var i,n
const r=function(e){const t=e.getStrides(),i={}
for(let e=0;e<t.length;e++)i[C[e]]=t[e]
return i}(e),s=[0,0,0,0,0],a=[0,0,0,0,0]
for(const t of e.tileDisplayData.displayObjects)for(const e of t.displayRecords)s[e.geometryType]=Math.max(s[e.geometryType],e.vertexFrom+e.vertexCount),a[e.geometryType]=Math.max(a[e.geometryType],e.indexFrom+e.indexCount)
const o=new I(r,e.tileDisplayData.displayList,t,void 0),l=null!=(i=null==(n=e.tileBufferData)?void 0:n.geometries)?i:[]
for(let e=0;e<l.length;++e){const t=s[e],i=a[e],n=l[e],r=C[e],c=o._storageFor(r),u=l[e].indexBuffer
c.indexBuffer=u,c.idxFreeList=new E(u.length),c.idxFreeList.allocate(i)
let h=0
for(const t in n.vertexBuffer){const i=l[e].vertexBuffer[t]
c.vertexBuffers[t].data=i.data,c.vertexBuffers[t].stride=i.stride
const n=Object(M.B)(i.stride),r=i.data.length*n/i.stride
h||(h=r)}c.vtxFreeList=new E(h),c.vtxFreeList.allocate(t)}return o}delete(e){const t=C[e.geometryType]
this._freeVertices(t,e.vertexFrom,e.vertexCount),this._freeIndices(t,e.indexFrom,e.indexCount),this._displayList.removeFromList(e),e.vertexFrom=void 0,e.indexFrom=void 0}setMeshData(e,t,i,n,r){const s=C[e.geometryType]
let a,o
e.meshData=null,void 0===e.vertexFrom?(o=t.vertexCount,a=this._allocateVertices(s,o)):t.vertexCount>e.vertexCount?(this._freeVertices(s,e.vertexFrom,e.vertexCount),o=t.vertexCount,a=this._allocateVertices(s,o)):t.vertexCount===e.vertexCount?(a=e.vertexFrom,o=e.vertexCount):(this._freeVertices(s,e.vertexFrom+t.vertexCount,e.vertexCount-t.vertexCount),a=e.vertexFrom,o=t.vertexCount)
let l,c,u,h=!0
if(void 0===e.indexFrom?(l=r,u=t.indexCount,c=this._allocateIndices(s,u)):t.indexCount>e.indexCount?(l=this._displayList.removeFromList(e),this._freeIndices(s,e.indexFrom,e.indexCount),u=t.indexCount,c=this._allocateIndices(s,u)):t.indexCount===e.indexCount?(h=!1,c=e.indexFrom,u=e.indexCount):(l=this._displayList.removeFromList(e),this._freeIndices(s,e.indexFrom+t.indexCount,e.indexCount-t.indexCount),c=e.indexFrom,u=t.indexCount),-1!==a&&-1!==c){const r=this._storageFor(s)
if(Object(M.e)(a,c,r.vertexBuffers,r.indexBuffer,t,i,n),e.vertexFrom=a,e.indexFrom=c,e.vertexCount=t.vertexCount,e.indexCount=t.indexCount,this._dirtyMap){this._dirtyMap.markDirtyIndices(e.geometryType,e.indexFrom,e.indexCount)
for(const t in i)this._dirtyMap.markDirtyVertices(e.geometryType,t,e.vertexFrom,e.vertexCount)}return h&&this._displayList.addToList(e,l),!0}return-1!==a&&this._freeVertices(s,a,o),-1!==c&&this._freeIndices(s,c,u),e.setMeshDataFromBuffers(t,i,n),e.vertexFrom=void 0,e.vertexCount=0,e.indexFrom=void 0,e.indexCount=0,!1}tryAddMeshData(e,t){const i=t.vertexBuffer,n=t.indexBuffer,r=C[e.geometryType],s=this._allocateVertices(r,e.vertexCount)
if(-1===s)return this._freeVertices(r,s,e.vertexCount),!1
const a=this._allocateIndices(r,e.indexCount)
if(-1===a)return this._freeVertices(r,s,e.vertexCount),this._freeIndices(r,a,e.indexCount),!1
const o=this._storageFor(r)
if(Object(M.e)(s,a,o.vertexBuffers,o.indexBuffer,e,i,n),e.vertexFrom=s,e.indexFrom=a,this._dirtyMap){this._dirtyMap.markDirtyIndices(e.geometryType,e.indexFrom,e.indexCount)
for(const t in i)this._dirtyMap.markDirtyVertices(e.geometryType,t,s,e.vertexCount)}return this._displayList.addToList(e),!0}_allocateVertices(e,t){var i,n
const r=this._storageFor(e),s=null==(i=r.vtxFreeList)?void 0:i.allocate(t)
if(null==s||-1===s)return-1
const a=null==(n=r.vtxFreeList)?void 0:n.fragmentation
return null==a||a>.5?-1:s}_freeVertices(e,t,i){var n
null==(n=this._storageFor(e).vtxFreeList)||n.free(t,i)}_freeIndices(e,t,i){var n
null==(n=this._storageFor(e).idxFreeList)||n.free(t,i)}_allocateIndices(e,t){var i,n
const r=this._storageFor(e),s=null==(i=r.idxFreeList)?void 0:i.allocate(t)
if(null==s||-1===s)return-1
const a=null==(n=r.idxFreeList)?void 0:n.fragmentation
return null==a||a>.5?-1:s}_storageFor(e){return this._freeListsAndStorage[e]}_stridesFor(e,t){return this._strides[e][t]}}var P=i(1068),A=i(984),R=i(1116)
class F{constructor(e){this.geometryMap=Object(M.f)(()=>({indexBuffer:P.a.createIndex(e,A.D.STATIC_DRAW),vao:null}),(t,i)=>({vertexBuffer:P.a.createVertex(e,M.a[i])}))}dispose(){for(let e=0;e<5;e++){const t=this.geometryMap[e]
if(t){t.data.vao&&t.data.vao.dispose(!1),t.data.indexBuffer&&t.data.indexBuffer.dispose()
for(const e in t.buffers)t.buffers[e]&&t.buffers[e].data.vertexBuffer.dispose()}}}get(e){const t=this.geometryMap[e]
return{getVAO(e,i,n){if(!t.data.vao){const r={}
for(const e in t.buffers)r[e]=t.buffers[e].data.vertexBuffer
t.data.vao=new R.a(e,n,i,r,t.data.indexBuffer)}return t.data.vao}}}has(e){return null!=this.geometryMap[e]}upload(e,t){t.forEach((t,i)=>{this._upload(t,i,e)})}_upload(e,t,i){if(e.indices&&(e.indices.allDirty?this._uploadIndices(i,t):null!=e.indices.from&&null!=e.indices.count&&this._uploadIndices(i,t,e.indices.from,e.indices.count)),e.vertices){const n=e.vertices
for(const e in n){const r=n[e]
r.allDirty?this._uploadVertices(i,t,e):null!=r.from&&null!=r.count&&this._uploadVertices(i,t,e,r.from,r.count)}}}_uploadVertices(e,t,i,n,r){const s=this.geometryMap[t]
if(!s)return
const a=e.geometries[t].vertexBuffer[i]
if(!a)return
const{data:o,stride:l}=a
if(s.buffers[i]&&o.length>0){const e=l/o.BYTES_PER_ELEMENT
null!=n&&null!=r?s.buffers[i].data.vertexBuffer.setSubData(o,n*e,n*e,(n+r)*e):s.buffers[i].data.vertexBuffer.setData(o)}}_uploadIndices(e,t,i,n){const r=this.geometryMap[t]
if(!r)return
const s=e.geometries[t].indexBuffer
r.data.indexBuffer&&s.length>0&&(null!=i&&null!=n?r.data.indexBuffer.setSubData(s,i,i,i+n):r.data.indexBuffer.setData(s))}}var L=i(1744)
class D extends L.a{constructor(){super(...arguments),this._data=null,this._displayList=null,this._lastCommitTime=0,this._hasData=!1,this._invalidated=!1,this._wglBuffers=null,this._dirtyMap=new S}destroy(){super.destroy(),this.clear()}get hasData(){return!!this._hasData}get displayObjects(){var e
return null!=(e=this._displayObjects)?e:[]}getGeometry(e){return this._wglBuffers&&this._wglBuffers.has(e)?this._wglBuffers.get(e):null}getDisplayList(){return this._displayList}patch(e){var t,i
if(!0===e.clear)return this.clear(),void(this._hasData=!1)
const n=e.addOrUpdate,r=e.remove
!this._data&&n&&null!=(t=n.tileDisplayData)&&t.displayObjects.length?(n.tileDisplayData.computeDisplayList(),this._dirtyMap=new S,this._dispRecStore=I.fromTileData(n,this._dirtyMap),this._data=n,this._dirtyMap.markAllDirty(),this._hasData=!0,e.end&&this.ready()):this._data&&(n&&null!=(i=n.tileDisplayData)&&i.displayObjects.length||r.length)?this._doPatchData(e):e.end&&this.ready(),e.end&&!this._data&&this.clear(),this.requestRender(),this.emit("change")}commit(e){e.time&&e.time===this._lastCommitTime||(this._lastCommitTime=e.time,this.visible&&this._data&&(this._wglBuffers||(this._wglBuffers=new F(e.context)),(this._dirtyMap.hasDirty()||this._invalidated)&&(this._invalidated=!1,this._wglBuffers.upload(this._data.tileBufferData,this._dirtyMap),this._displayList=this._data.tileDisplayData.displayList.clone(),this._displayObjects=this._data.tileDisplayData.displayObjects.slice(),this._dirtyMap.markAllClean())))}clear(){this._data=null,this._displayList=null,this._dispRecStore=null,this._wglBuffers&&(this._wglBuffers.dispose(),this._wglBuffers=null)}_doPatchData(e){this._invalidated=!0,this._patchData(e)||(this._dirtyMap.markAllDirty(),this._data.reshuffle(),this._dispRecStore=I.fromTileData(this._data,this._dirtyMap)),this.requestRender()}_patchData(e){var t
let i=!0
const n=e.addOrUpdate&&e.addOrUpdate.tileDisplayData&&e.addOrUpdate.tileDisplayData.displayObjects||[],r=(e.remove||[]).slice()
for(const e of n)null!=e.insertAfter&&r.push(e.id)
let s
r.length>0&&(s=new Set(r))
const a=this._data.tileDisplayData
for(const e of r){const t=a.displayObjectRegistry.get(e)
if(t){a.displayList.removeFromList(t.displayRecords)
for(const e of t.displayRecords)this._dispRecStore.delete(e)
a.displayObjectRegistry.delete(e)}}(null==(t=s)?void 0:t.size)&&(a.displayObjects=a.displayObjects.filter(e=>!s.has(e.id)))
for(const t of n){let n,r=a.displayObjectRegistry.get(t.id)
if(r){const e=r.displayRecords
r.set(t),r.displayRecords=e
const i=r.displayRecords.length
for(let e=0;e<i;++e){const i=r.displayRecords[e],n=t.displayRecords[e];(e>=t.displayRecords.length||i.geometryType!==n.geometryType||i.symbolLevel!==n.symbolLevel||i.zOrder!==n.zOrder||i.materialKey!==n.materialKey)&&(this._dispRecStore.delete(r.displayRecords[e]),e<t.displayRecords.length&&(r.displayRecords[e]=void 0))}r.displayRecords.length=t.displayRecords.length}else{let e
r=t.copy(),r.displayRecords=[],a.displayObjectRegistry.set(t.id,r)
const i=a.displayObjects
if(null!=r.insertAfter)if(n={},r.insertAfter>=0){const t=a.displayObjectRegistry.get(r.insertAfter)
t?(e=i.indexOf(t)+1,e<i.length?i.splice(e,0,r):(i.push(r),e=i.length)):(i.push(r),e=i.length)}else i.unshift(r),e=0
else i.push(r),e=i.length
if(n){const r=t.displayRecords.length>0?1:0
let s=0
for(let t=e-1;t>=0&&s<r;--t)for(let e=i[t].displayRecords.length-1;e>=0&&s<r;--e){const r=i[t].displayRecords[e],o=a.displayList.getDPInfoType()
n[o]||(n[o]=r,++s)}}}const s=t.displayRecords.length
for(let o=0;o<s;++o){const s=t.displayRecords[o]
let l=r.displayRecords[o]
l?(l.meshData=s.meshData,l.materialKey=s.materialKey):(l=s.copy(),l.vertexFrom=void 0,l.indexFrom=void 0,r.displayRecords[o]=l)
const c=s.geometryType,u=a.displayList.getDPInfoType(),h=e.addOrUpdate.tileBufferData.geometries[c],d=h.vertexBuffer,f=h.indexBuffer
let _
n&&(_=n[u]?a.displayList.splitAfter(n[u]):-1),i=this._dispRecStore.setMeshData(l,s,d,f,_)&&i,n&&null!=l.indexFrom&&null!=l.indexFrom&&(n[u]=l)}}return i}}class j{constructor(){this._byGeometryType=null}get satisfied(){return!this._byGeometryType}reset(){this._byGeometryType=null}verticesFor(e){return this._byGeometryType?this._byGeometryType[e].vertices:0}indicesFor(e){return this._byGeometryType?this._byGeometryType[e].indices:0}needMore(e,t,i){if(!t&&!i)return
this._byGeometryType||(this._byGeometryType=[{vertices:0,indices:0},{vertices:0,indices:0},{vertices:0,indices:0},{vertices:0,indices:0},{vertices:0,indices:0}])
const n=this._byGeometryType[e]
n.vertices+=t,n.indices+=i}}class B{constructor(){this.geometries=[{indexBuffer:void 0,vertexBuffer:{}},{indexBuffer:void 0,vertexBuffer:{}},{indexBuffer:void 0,vertexBuffer:{}},{indexBuffer:void 0,vertexBuffer:{}},{indexBuffer:void 0,vertexBuffer:{}}]}clone(){const e=new B
for(let t=0;t<this.geometries.length;t++){const i=this.geometries[t],n=e.geometries[t]
n.indexBuffer=i.indexBuffer.slice(),n.vertexBuffer={}
for(const e in i.vertexBuffer){const{data:t,stride:r}=i.vertexBuffer[e]
n.vertexBuffer[e]={data:t.slice(),stride:r}}}return e}static deserialize(e){const t=new B
for(let i=0;i<5;++i){t.geometries[i].indexBuffer=new Uint32Array(e.geometries[i].indexBuffer),t.geometries[i].vertexBuffer={}
for(const n in e.geometries[i].vertexBuffer)t.geometries[i].vertexBuffer[n]={data:Object(M.c)(e.geometries[i].vertexBuffer[n].data,e.geometries[i].vertexBuffer[n].stride),stride:e.geometries[i].vertexBuffer[n].stride}}return t}serialize(){const e={geometries:[{indexBuffer:this.geometries[0].indexBuffer.buffer,vertexBuffer:{}},{indexBuffer:this.geometries[1].indexBuffer.buffer,vertexBuffer:{}},{indexBuffer:this.geometries[2].indexBuffer.buffer,vertexBuffer:{}},{indexBuffer:this.geometries[3].indexBuffer.buffer,vertexBuffer:{}},{indexBuffer:this.geometries[4].indexBuffer.buffer,vertexBuffer:{}}]}
for(let t=0;t<5;++t)for(const i in this.geometries[t].vertexBuffer)e.geometries[t].vertexBuffer[i]={data:this.geometries[t].vertexBuffer[i].data.buffer,stride:this.geometries[t].vertexBuffer[i].stride}
return e}getBuffers(){const e=[]
for(let t=0;t<5;++t){e.push(this.geometries[t].indexBuffer.buffer)
for(const i in this.geometries[t].vertexBuffer)e.push(this.geometries[t].vertexBuffer[i].data.buffer)}return e}}var z=i(1023)
function N(e,t,i,...n){t<e.length?e.splice(t,i,...n):e.push(...n)}class k{constructor(){this.symbolLevels=[]}replay(e,t,i){for(const n of this.symbolLevels)for(const r of n.zLevels){const n=r.geometryDPInfo.unified
if(n)for(const r of n){const{geometryType:n,materialKey:s,indexFrom:a,indexCount:o}=r,l=z.e.load(s).symbologyType,c=e.painter.getBrush(n,l),u={geometryType:n,materialKey:s,indexFrom:a,indexCount:o,target:t.getGeometry(n)}
c.prepareState(e),c.drawGeometry(e,t,u,i)}}}get empty(){return!this.symbolLevels||0===this.symbolLevels.length}clear(){this.symbolLevels.length=0}addToList(e,t){if(Array.isArray(e))for(const i of e)this._addToList(i,t)
else this._addToList(e,t)}removeFromList(e){Array.isArray(e)||(e=[e])
let t=null
for(const i of e)t=this._removeFromList(i)
return t}clone(){const e=new k
for(const t of this.symbolLevels)e.symbolLevels.push(t.clone())
return e}splitAfter(e){const t=this._getDisplayList(e.symbolLevel,e.zOrder),i=t.length,n=e.indexFrom+e.indexCount
for(let r=0;r<i;++r){const i=t[r]
if(i.geometryType===e.geometryType&&n>i.indexFrom&&n<=i.indexFrom+i.indexCount){if(n<i.indexFrom+i.indexCount){const e=new U
e.geometryType=i.geometryType,e.materialKey=i.materialKey,e.indexFrom=n,e.indexCount=i.indexFrom+i.indexCount-n,t.splice(r+1,0,e),i.indexCount=n-i.indexFrom}return r}}}_addToList(e,t){const i=e.symbolLevel,n=e.zOrder,r=this._getDisplayList(i,n),s=null!=t?t:r.length-1,a=s>=0&&s<r.length?r[s]:null
if(null!==a&&a.materialKey===e.materialKey&&a.indexFrom+a.indexCount===e.indexFrom&&a.geometryType===e.geometryType)a.indexCount+=e.indexCount
else{const t=new U
t.indexFrom=e.indexFrom,t.indexCount=e.indexCount,t.materialKey=e.materialKey,t.geometryType=e.geometryType,N(r,s+1,0,t)}}_removeFromList(e){const t=e.symbolLevel,i=e.zOrder,n=this._getDisplayList(t,i),r=n.length
let s
for(let t=0;t<r;++t){const i=n[t]
if(e.indexFrom+e.indexCount>i.indexFrom&&e.indexFrom<i.indexFrom+i.indexCount&&i.geometryType===e.geometryType){s=t
break}}if(void 0!==s){const t=n[s]
if(e.indexFrom===t.indexFrom)return t.indexCount-=e.indexCount,t.indexFrom+=e.indexCount,0===t.indexCount&&N(n,s,1),s-1
if(e.indexFrom+e.indexCount===t.indexFrom+t.indexCount)return t.indexCount-=e.indexCount,0===t.indexCount?(N(n,s,1),s-1):s
{const i=t.indexFrom,r=e.indexFrom-t.indexFrom,a=e.indexCount,o=t.indexFrom+t.indexCount-(e.indexFrom+e.indexCount)
t.indexCount=r
const l=new U
return l.geometryType=t.geometryType,l.materialKey=t.materialKey,l.indexFrom=i+r+a,l.indexCount=o,N(n,s+1,0,l),s}}return null}_getDisplayList(e,t){let i
const n=this.symbolLevels.length
for(let t=0;t<n;t++)if(this.symbolLevels[t].symbolLevel===e){i=this.symbolLevels[t]
break}let r
i||(i=new W,i.symbolLevel=e,this.symbolLevels.push(i))
const s=i.zLevels.length
for(let e=0;e<s;e++)if(i.zLevels[e].zLevel===t){r=i.zLevels[e]
break}return r||(r=new G,r.geometryDPInfo=new V,r.zLevel=t,i.zLevels.push(r)),r.geometryDPInfo.unified||(r.geometryDPInfo.unified=[]),r.geometryDPInfo.unified}getDPInfoType(){return"unified"}}class U{constructor(){this.materialKey=null,this.indexFrom=0,this.indexCount=0}clone(){const e=new U
return e.geometryType=this.geometryType,e.materialKey=this.materialKey,e.indexFrom=this.indexFrom,e.indexCount=this.indexCount,e}}class V{constructor(){this.fill=null,this.line=null,this.marker=null,this.text=null,this.label=null,this.unified=null}clone(){const e=new V
return e.fill=this.fill&&this.fill.map(e=>e.clone()),e.line=this.line&&this.line.map(e=>e.clone()),e.marker=this.marker&&this.marker.map(e=>e.clone()),e.text=this.text&&this.text.map(e=>e.clone()),e.label=this.label&&this.label.map(e=>e.clone()),e.unified=this.unified&&this.unified.map(e=>e.clone()),e}}class G{constructor(){this.geometryDPInfo=new V}clone(){const e=new G
return e.zLevel=this.zLevel,e.geometryDPInfo=this.geometryDPInfo.clone(),e}}class W{constructor(){this.zLevels=[]}clone(){const e=new W
e.symbolLevel=this.symbolLevel
for(const t of this.zLevels)e.zLevels.push(t.clone())
return e}}class H{constructor(){this.vertexData=new Map,this.vertexCount=0,this.indexData=[]}clear(){this.vertexData.clear(),this.vertexCount=0,this.indexData=[]}update(e,t,i){for(const t in e)this.vertexData.set(t,e[t])
for(const t in this.vertexData)null===e[t]&&this.vertexData.delete(t)
this.vertexCount=t,this.indexData=i}}class Y{constructor(e,t,i,n=0,r=0){this.id=e,this.geometryType=t,this.materialKey=i,this.minZoom=n,this.maxZoom=r,this.meshData=null,this.symbolLevel=0,this.zOrder=0,this.vertexFrom=0,this.vertexCount=0,this.indexFrom=0,this.indexCount=0,this._sortKey=null}get sortKey(){return null==this._sortKey&&this._computeSortKey(),this._sortKey}clone(){return this.copy()}copy(){const e=new Y(this.id,this.geometryType,this.materialKey)
return e.vertexFrom=this.vertexFrom,e.vertexCount=this.vertexCount,e.indexFrom=this.indexFrom,e.indexCount=this.indexCount,e.zOrder=this.zOrder,e.symbolLevel=this.symbolLevel,e.meshData=this.meshData,e.minZoom=this.minZoom,e.maxZoom=this.maxZoom,e}setMeshDataFromBuffers(e,t,i){const n=new H
for(const i in t){const r=t[i].stride,s=t[i].data
if(!s)continue
const a=[],o=Object(M.B)(r)
for(let t=0;t<r*e.vertexCount/o;++t)a[t]=s[t+r*e.vertexFrom/o]
n.vertexData.set(i,a)}n.indexData.length=0
for(let t=0;t<e.indexCount;++t)n.indexData[t]=i[t+e.indexFrom]-e.vertexFrom
n.vertexCount=e.vertexCount,this.meshData=n}readMeshDataFromBuffers(e,t){this.meshData?this.meshData.clear():this.meshData=new H
for(const t in e){const i=e[t].stride,n=e[t].data,r=[],s=Object(M.B)(i)
for(let e=0;e<i*this.vertexCount/s;++e)r[e]=n[e+i*this.vertexFrom/s]
this.meshData.vertexData.set(t,r)}this.meshData.indexData.length=0
for(let e=0;e<this.indexCount;++e)this.meshData.indexData[e]=t[e+this.indexFrom]-this.vertexFrom
this.meshData.vertexCount=this.vertexCount}writeMeshDataToBuffers(e,t,i,n){if(this.meshData){for(const i in t){const n=t[i].stride,r=this.meshData.vertexData.get(i),s=t[i].data,a=Object(M.B)(n)
for(let t=0;t<n*this.meshData.vertexCount/a;++t)s[t+n*e/a]=r[t]}for(let t=0;t<this.meshData.indexData.length;++t)n[t+i]=this.meshData.indexData[t]+e
this.vertexFrom=e,this.vertexCount=this.meshData.vertexCount,this.indexFrom=i,this.indexCount=this.meshData.indexData.length}}static writeAllMeshDataToBuffers(e,t,i){let n=0,r=0
for(const s of e)s.writeMeshDataToBuffers(n,t,r,i),n+=s.vertexCount,r+=s.indexCount}_computeSortKey(){this._sortKey=(31&this.symbolLevel)<<12|(127&this.zOrder)<<4|7&this.geometryType}serialize(e){return e.push(this.geometryType),e.push(this.materialKey),e.push(this.vertexFrom),e.push(this.vertexCount),e.push(this.indexFrom),e.push(this.indexCount),e.push(this.minZoom),e.push(this.maxZoom),e}static deserialize(e,t){const i=e.readInt32(),n=e.readInt32(),r=new Y(t.id,i,n)
return r.vertexFrom=e.readInt32(),r.vertexCount=e.readInt32(),r.indexFrom=e.readInt32(),r.indexCount=e.readInt32(),r.minZoom=e.readInt32(),r.maxZoom=e.readInt32(),r}}function X(e,t){if(null!==t){e.push(t.length)
for(const i of t)i.serialize(e)
return e}e.push(0)}class q{constructor(e){this.insertAfter=null,this.id=e,this.displayRecords=[]}copy(){const e=new q(this.id)
return e.set(this),e}clone(){const e=new q(this.id)
return e.displayRecords=this.displayRecords.map(e=>e.clone()),e.insertAfter=this.insertAfter,e}set(e){this.id=e.id,this.displayRecords=e.displayRecords,this.insertAfter=e.insertAfter}serialize(e){return e.push(this.id),X(e,this.displayRecords),e}static deserialize(e){var t
const i=e.readInt32(),n=new q(i),r={id:i}
return n.displayRecords=null!=(t=function(e,t,i){const n=e.readInt32(),r=new Array(n)
for(let n=0;n<r.length;n++)r[n]=t.deserialize(e,i)
return r}(e,Y,r))?t:[],n}}class Z{constructor(){this.displayObjects=[],this._displayList=null}get displayObjectRegistry(){if(!this._displayObjectRegistry){this._displayObjectRegistry=new Map
for(const e of this.displayObjects)this._displayObjectRegistry.set(e.id,e)}return this._displayObjectRegistry}get displayList(){return this._displayList}computeDisplayList(){this._displayList=new k
for(const e of this.displayObjects)for(const t of e.displayRecords)this._displayList.addToList(t)}clone(){const e=new Z
return this.displayObjects&&(e.displayObjects=this.displayObjects.map(e=>e.clone())),e}serialize(e){return X(e,this.displayObjects),e}_deserializeObjects(e){const t=e.readInt32(),i=new Array(t),n=new Map
for(let t=0;t<i.length;++t){const r=q.deserialize(e)
i[t]=r,n.set(r.id,r)}this.displayObjects=i,this._displayList=null,this._displayObjectRegistry=n}static deserialize(e){const t=new Z
return t._deserializeObjects(e),t}}var K=i(1745)
class ${constructor(e,t){this.data=e,this.stride=t}static decode(e){const t=Object(M.c)(e.data,e.stride),i=e.stride
return new $(t,i)}static fromVertexVector(e){const t=Object(M.c)(e.data.buffer(),e.stride),i=e.stride
return new $(t,i)}}class J{constructor(e,t,i){this.geometryType=e,this.indexBuffer=new Uint32Array(t),this.namedBuffers=i}static decode(e){const t=e.geometryType,i=e.indexBuffer,n={}
for(const t in e.namedBuffers)n[t]=$.decode(e.namedBuffers[t])
return new J(t,i,n)}static fromVertexData(e,t){const i=e.indices,n=Object(M.c)(e.vertices,e.stride),r=e.stride,s={geometry:new $(n,r)}
return new J(t,i,s)}static fromVertexVectors(e){const t=e.geometryType,i=e.indexVector.buffer(),n={}
for(const t in e.namedVectors)n[t]=$.fromVertexVector(e.namedVectors[t])
return new J(t,i,n)}}var Q=i(1493)
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
n[e]={},i.transfer(n[e],t)}e.geometryType=this.geometryType,e.indexBuffer=i,e.namedBuffers=n,this.destroy()}intoBuffers(){const e=J.fromVertexVectors(this)
return this.destroy(),e}destroy(){this.indexVector=null,this.namedVectors=null}}const ie=new j,ne=new j
function re(e,t){const i={}
for(const n in e){const r={data:Object(M.b)(t,e[n]),stride:e[n]}
i[n]=r}return i}class se{constructor(){this.tileDisplayData=null,this.tileBufferData=null}reshuffle(){var e
if(ie.reset(),!this.tileDisplayData)return
const t=function(e){const t=[[],[],[],[],[]],i=e
for(const e of i)for(const i of e.displayRecords)t[i.geometryType].push(i)
return t}(this.tileDisplayData.displayObjects)
for(const e of t)for(const t of e)t&&ie.needMore(t.geometryType,t.meshData?t.meshData.vertexCount:t.vertexCount,t.meshData?t.meshData.indexData.length:t.indexCount)
const i=t.length,n=new B
for(let e=0;e<i;++e){var r
n.geometries[e].indexBuffer=new Uint32Array(Math.round(1.5*ie.indicesFor(e)))
const t=[],i=null==(r=this.tileBufferData)?void 0:r.geometries[e].vertexBuffer
if(!i)continue
for(const e in i)t.push(i[e].stride)
const s=se._computeVertexAlignment(t),a=Math.round(1.5*ie.verticesFor(e)),o=se._align(a,s)
for(const t in i){const r=i[t].stride
n.geometries[e].vertexBuffer[t]={stride:r,data:Object(M.b)(o,r)}}}ne.reset(),null==(e=this.tileDisplayData.displayList)||e.clear()
for(let e=0;e<i;++e){const i=t[e]
for(const t of i){if(t.meshData)t.writeMeshDataToBuffers(ne.verticesFor(e),n.geometries[e].vertexBuffer,ne.indicesFor(e),n.geometries[e].indexBuffer),t.meshData=null
else{var s
const i=null==(s=this.tileBufferData)?void 0:s.geometries[e]
if(i){const r=i.vertexBuffer,s=i.indexBuffer,a=n.geometries[e].vertexBuffer,o=n.geometries[e].indexBuffer,l=ne.verticesFor(e),c=ne.indicesFor(e)
Object(M.e)(l,c,a,o,t,r,s),t.vertexFrom=l,t.indexFrom=c}}ne.needMore(e,t.vertexCount,t.indexCount)}}const{displayList:a,displayObjects:o}=this.tileDisplayData
if(a)for(const e of o)a.addToList(e.displayRecords)
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
for(;e.next();){const i=e.id,r=e.materialKey,s=e.indexFrom,a=e.indexCount,o=e.vertexFrom,l=e.vertexCount,c=n.get(i),u=new Y(i,t,r)
u.indexFrom=s,u.indexCount=a,u.vertexFrom=o,u.vertexCount=l,c.displayRecords.push(u)}i[t]=J.fromVertexData(r,t)}else i[t]=new te(t,0,T.e.DEFAULT).intoBuffers()}),se.fromMeshData({displayObjects:t,vertexBuffersMap:i})}static fromMeshData(e){const t=new se,i=new Z,n=new B
i.displayObjects=e.displayObjects
for(const t in e.vertexBuffersMap){const i=e.vertexBuffersMap[t]
n.geometries[t].indexBuffer=i.indexBuffer,n.geometries[t].vertexBuffer=i.namedBuffers}return t.tileDisplayData=i,t.tileBufferData=n,t}static bind(e,t){const i=new se
return i.tileDisplayData=e,i.tileBufferData=t,i}static create(e,t){const i=new se
i.tileDisplayData=new Z,i.tileDisplayData.displayObjects=e
const n=[0,0,0,0,0],r=[0,0,0,0,0],s=[[],[],[],[],[]]
for(const t of e)for(const e of t.displayRecords)s[e.geometryType].push(e),n[e.geometryType]+=e.meshData.vertexCount,r[e.geometryType]+=e.meshData.indexData.length
const a=new B,o=function(e){return[e.fill||{},e.line||{},e.icon||{},e.text||{},e.label||{}]}(t)
for(let e=0;e<5;e++){const t=new Uint32Array(r[e]),i=re(o[e],n[e])
Y.writeAllMeshDataToBuffers(s[e],i,t),a.geometries[e]={indexBuffer:t,vertexBuffer:i}}return i.tileBufferData=a,i}static _align(e,t){const i=e%t
return 0===i?e:e+(t-i)}static _computeVertexAlignment(e){let t=!1,i=!1
for(const n of e)n%4==2?t=!0:n%4!=0&&(i=!0)
return i?4:t?2:1}}var ae=i(1754),oe=i(1755),le=i(1587),ce=i(1746),ue=i(1664),he=i(1747),de=i(1758),fe=i(1057),_e=i(1559),me=i(1659)
class pe extends me.a{static from(e,t,i){const n=_e.a.createInstance(),r=[],s=e.filter(e=>!!e.geometry)
for(const e of s){const i=Object(p.c)(e.geometry)
Object(fe.e)(r,[e],i,!1,!1,t)}return new pe(n,r,i)}constructor(e,t,i){super(e,t,null),this._transform=i}get geometryType(){const e=this._current
return e?e.geometryType:null}get insertAfter(){return this._current.insertAfter}readGraphic(){return this._current}getCursor(){return this.copy()}copy(){const e=new pe(this.instance,this._features,this._transform)
return this.copyInto(e),e}}var ge=i(980),be=i(1568),ve=i(1079),xe=i(1155),ye=i(1589),Oe=i(1142),Te=i(1226),Se=i(1062)
const we=new Se.a,Ee=new Se.a
function Me(e){e.coords.length=0,e.lengths.length=0}class Ce{constructor(){this.bounds=Object(_.m)(),this.graphic=null}static acquire(e=null,t,i,n,r){let s
return 0===Ce._pool.length?s=new Ce:(s=Ce._pool.pop(),this._set.delete(s)),s.acquire(e,t,i,n,r),s}static release(e){e&&!this._set.has(e)&&(e.release(),this._pool.push(e),this._set.add(e))}static getCentroidQuantized(e,t){if(Object(p.g)(e.geometry)){const i=e.symbol
if(Object(l.k)(i))return null
if((null==i?void 0:i.layers.length)>0&&i.layers.some(e=>"text"===e.type||"marker"===e.type)){const i=Object(Oe.b)(e.geometry)
return null!==i?Object(Te.b)(t,{},{x:i[0],y:i[1]},!1,!1):null}}return null}acquire(e=null,t,i,n,r){e&&this.set(e,t,i,n,r)}release(){this.graphic=null,this.symbolResource=null,this.geometry=null}get symbol(){return this.symbolResource.symbol}set(e,t,i,n,r){this.graphic=e,this.geometry=i,this.symbolResource=t,this.bounds=n,r&&(this.size=r)}getGeometryQuantized(e,t,i,n){const r=this.geometry,s=Object(p.c)(r)
if(Object(l.k)(s))return null
switch(s){case"esriGeometryPolygon":{const t=r,{rings:i}=t
if(!i||0===i.length)return null
let n
if(n=1===i.length&&2===i[0].length?Object(Te.a)(e,{paths:[[i[0][0],i[0][1]]]}):Object(Te.a)(e,this.geometry),!n){const t={x:i[0][0][0],y:i[0][0][1]}
if(n=Object(Te.a)(e,t),n){const{x:e,y:t}=n
return{rings:[[[e-1,t],[1,-1],[1,1],[-1,1],[-1,-1]]]}}}return n}case"esriGeometryPolyline":{var a,o,c,u
const t=r
Me(we),Me(Ee)
const i=null!=(a=t.hasZ)&&a,n=null!=(o=t.hasM)&&o
return Object(fe.i)(we,t),Object(fe.r)(Ee,we,i,n,"esriGeometryPolyline",e.scale[0]),Object(fe.v)(we,Ee,i,n,"esriGeometryPolyline",e),Object(fe.p)(we,null!=(c=t.hasZ)&&c,null!=(u=t.hasM)&&u)}case"esriGeometryMultipoint":{const s=r,a=.5*n*Math.max(Math.abs(this.size[0])+this.size[2]-this.size[0],Math.abs(this.size[1])+this.size[3]-this.size[1]),o=Object(b.e)(i)
let l=s.points
if(o){const[e,i]=o.valid,n=i-e
l=l.filter(r=>{if(r[0]+a>i||r[0]-a<e){const e=[...r]
return r[0]+a>i?e[0]-=n:e[0]+=n,Object(_.j)(t,r,a)||Object(_.j)(t,e,a)}return Object(_.j)(t,r,a)})}return 0===l.length?{points:l}:Object(Te.a)(e,{points:l})}}return Object(Te.a)(e,this.geometry)}}Ce._pool=[],Ce._set=new Set
var Ie=i(1447)
const Pe={minX:0,minY:0,maxX:0,maxY:0},Ae=Object(_.m)()
function Re(e,t,i,n,r){return Pe.minX=t,Pe.minY=i,Pe.maxX=n,Pe.maxY=r,e.search(Pe)}function Fe(e){return{minX:e.bounds[0],minY:e.bounds[1],maxX:e.bounds[2],maxY:e.bounds[3]}}class Le{constructor(e,t,i,n,r,s,a){this._graphics=n,this._onAdd=r,this._onRemove=s,this._hashToCIM=a,this._index=Object(be.a)(9,Fe),this._itemByGraphic=new Map,this._inflatedSizeHelper=new x.b,this._tileInfoView=e,this._uidFieldName=i
const o=e.getClosestInfoForScale(t)
o&&(this._resolution=this._tileInfoView.getTileResolution(o.level))}setResourceManager(e){this._cimResourceManager=e,this._hittestDrawHelper=new ye.c(e)}hitTest(e,t,i,n,r){e=Object(xe.b)(e,this._tileInfoView.spatialReference)
const s=.5*n*window.devicePixelRatio*i
Ae[0]=e-s,Ae[1]=t-s,Ae[2]=e+s,Ae[3]=t+s
const a=.5*n*(i+Ie.a),o=Re(this._index,e-a,t-a,e+a,t+a)
if(!o||0===o.length)return[]
const l=[],c=Object(_.m)(),u=Object(_.m)()
for(const e of o){var h
const{geometry:t,symbolResource:i}=e
this._getSymbolBounds(c,i,t,u,r),u[3]=u[2]=u[1]=u[0]=0,Object(_.x)(c,Ae)&&(null==(h=e.graphic)?void 0:h.visible)&&l.push(e)}if(0===l.length)return[]
const d=this._hittestDrawHelper,f=[]
for(const e of l){const{geometry:t,symbolResource:i}=e,{hash:s,textInfo:a}=i,o=this._hashToCIM.get(s)
o&&d.hitTest(Ae,o.symbol,t,a,r,n)&&f.push(e)}return f.sort(De),f.map(e=>e.graphic)}getGraphicsData(e,t,i){const n=this._searchForItems(t)
if(0===n.length||0===i.length)return[]
n.sort((e,t)=>e.zorder-t.zorder),n[0].insertAfter=-1
for(let e=1;e<n.length;e++)n[e].insertAfter=n[e-1].graphic.uid
n.sort((e,t)=>e.graphic.uid-t.graphic.uid),i.sort((e,t)=>e.uid-t.uid)
let r,s=0,a=0
const o=t.resolution,l=[],c={originPosition:"upperLeft",scale:[o,o],translate:[t.bounds[0],t.bounds[3]]}
for(const h of i){var u
for(a=-2;s<n.length;)if(r=n[s],s++,h.uid===r.graphic.uid){a=r.insertAfter
break}if(null==(u=r)||!u.geometry||-2===a)continue
const i=r.getGeometryQuantized(c,t.bounds,this._tileInfoView.spatialReference,o),d={...r.graphic.attributes}
d[this._uidFieldName]=h.uid,null==r.groupId&&(r.groupId=e.createTemplateGroup(r.symbol,null)),l.push({centroid:Ce.getCentroidQuantized(r,c),geometry:i,attributes:d,symbol:r.symbol,groupId:r.groupId,insertAfter:a,zorder:r.zorder})}return l.sort((e,t)=>e.zorder-t.zorder),l}queryTileData(e,t){if(0===this._graphics.length)return[]
const{bounds:i,resolution:n}=t,r=this._searchForItems(t),s=[]
return 0===r.length||this._createTileGraphics(s,e,r,{originPosition:"upperLeft",scale:[n,n],translate:[i[0],i[3]]},t),s}has(e){return this._itemByGraphic.has(e)}getBounds(e){const t=this._itemByGraphic.get(e)
return t?t.bounds:null}getAllBounds(){return Array.from(this._itemByGraphic.values()).filter(e=>e.graphic.visible).map(e=>e.bounds)}addOrModify(e,t,i){if(!e||Object(l.k)(t))return
this.has(e)&&this.remove(e),this._onAdd(e)
const n=[0,0,0,0],r=this._getSymbolBounds(null,t,i,n,0),s=Ce.acquire(e,t,i,Object(l.l)(r)?r:null,n)
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
n.geometry&&Object(l.l)(e)&&(n.bounds=e,i.push(n))}this._index.load(i)}clear(){this._itemByGraphic.clear(),this._index.clear()}_createTileGraphics(e,t,i,n,r){const s=this._uidFieldName,a=this._tileInfoView.spatialReference,{bounds:o,resolution:l}=r
let c,u,h,d
i.sort((e,t)=>e.zorder-t.zorder)
for(let r=0;r<i.length;r++){h=i[r],c=h.graphic,u=h.getGeometryQuantized(n,o,a,l),d=0===r?-1:i[r-1].graphic.uid
const f={...h.graphic.attributes}
f[s]=c.uid,null==h.groupId&&(h.groupId=t.createTemplateGroup(h.symbol,null)),e.push({centroid:Ce.getCentroidQuantized(h,n),geometry:u,attributes:f,symbol:h.symbol,groupId:h.groupId,insertAfter:d,zorder:h.zorder})}}_searchForItems(e){const t=this._tileInfoView.spatialReference,i=e.bounds,n=Object(b.e)(t)
if(n&&t.isWrappable){const[t,r]=n.valid,s=Math.abs(i[2]-r)<1e-5,a=Math.abs(i[0]-t)<1e-5
if((!s||!a)&&(s||a)){const n=e.resolution
let a
a=Object(_.m)(s?[t,i[1],t+n*Ie.a,i[3]]:[r-n*Ie.a,i[1],r,i[3]])
const o=Re(this._index,i[0],i[1],i[2],i[3]),l=Re(this._index,a[0],a[1],a[2],a[3])
return[...new Set([...o,...l])]}}return Re(this._index,i[0],i[1],i[2],i[3])}_getSymbolBounds(e,t,i,n,r){if(!t||!t.symbol||!i)return null
if(e||(e=Object(_.m)()),Object(ve.a)(e,i),!n||0===n[0]&&0===n[1]&&0===n[2]&&0===n[3]){const{hash:e,textInfo:i}=t,s=this._hashToCIM.get(e)
if(!s)return null
n||(n=[0,0,0,0])
const a=this._inflatedSizeHelper.getSymbolInflateSize(n,s.symbol,this._cimResourceManager,r,i)
n[0]=Object(ge.h)(a[0]),n[1]=Object(ge.h)(a[1]),n[2]=Object(ge.h)(a[2]),n[3]=Object(ge.h)(a[3])}const s=this._resolution,a=x.b.safeSize(n)
return e[0]-=a*s,e[1]-=a*s,e[2]+=a*s,e[3]+=a*s,e}}const De=(e,t)=>{const i=Object(Ie.d)(e.graphic),n=Object(Ie.d)(t.graphic)
return i===n?t.zorder-e.zorder:i-n}
var je=i(1356),Be=i(1748),ze=i(1333),Ne=i(1340)
const ke=Object(o.a)("esri-2d-graphic-debug")
function Ue(e,t,i){let n=i.get(e)
return n||(n={tile:t,addedOrModified:[],removed:[]},i.set(e,n)),n}let Ve=class extends(Object(Be.a)(Object(a.b)(r.a))){constructor(e){super(e),this._storage=new de.a,this._displayIds=new Map,this._controller=new AbortController,this._tiles=new Map,this._graphicStoreUpdate=!1,this._graphicsSet=new Set,this._matcher=Promise.resolve(null),this._tileUpdateSet=new Set,this._tilesToUpdate=new Map,this._graphicIdToAbortController=new Map,this._attached=!1,this._updatingGraphicsTimer=null,this._hashToExpandedSymbol=new Map,this._hashToExpandedSymbolPromise=new Map,this._hashToCIMSymbolPromise=new Map,this._hashToCIM=new Map,this._processing=!1,this._needsProcessing=!1,this._pendingUpdate={added:new Set,updated:new Set,removed:new Set},this.lastUpdateId=-1,this.updateRequested=!1,this.defaultPointSymbolEnabled=!0,this.graphicUpdateHandler=this.graphicUpdateHandler.bind(this)}destroy(){this._updatingGraphicsTimer&&(clearTimeout(this._updatingGraphicsTimer),this._updatingGraphicsTimer=null,this.notifyChange("updating")),this._controller.abort(),this.container.destroy(),this._set("graphics",null),this._graphicStore.clear(),this._attributeStore=null,this._hashToExpandedSymbol.clear(),this.view=null,this.renderer=null,this._hashToCIM.clear(),this._hashToCIMSymbolPromise.clear(),this._hashToExpandedSymbolPromise.clear()}_createMatcher(e,t,i){if(e){const n=Object(ue.c)(e),r=Object(ue.a)({indexCount:0,fields:{}},"feature",e,n)
this._matcher=Object(ce.a)(r,t,null,i)}}_createDisplayId(e){let t=this._displayIds.get(e)
return t||(t=this._storage.createDisplayId(),this._displayIds.set(e,t)),t}initialize(){this._attributeStore=new he.a({type:"local",initialize:e=>Promise.resolve(this.container.attributeView.initialize(e)),update:e=>this.container.attributeView.requestUpdate(e),render:()=>this.container.requestRender()},Object(ze.a)("2d"),()=>this.notifyChange("updating")),this.container.hasHighlight=()=>this._attributeStore.hasHighlight
const e=new le.a(this.container.getMaterialItems.bind(this.container),this.view.featuresTilingScheme.tileInfo)
this._graphicStore=new Le(this.view.featuresTilingScheme,this.view.state.scale,this.uid,this.graphics,e=>{this._createDisplayId(e.uid),this._setFilterState(e.uid,e.visible)},e=>{const t=this._displayIds.get(e.uid)
this._displayIds.delete(e.uid),this._storage.releaseDisplayId(t)},this._hashToCIM),this._meshFactory=new oe.a(null,this.uid,e),this._templateStore=e,this.handles.add([Object(u.f)(()=>this.renderer,t=>{this._createMatcher(t,e,this.container.stage.resourceManager)
for(const e of this.graphics)this._pendingUpdate.updated.add(e)
this.requestUpdate()}),this.view.graphicsTileStore.on("update",this._onTileUpdate.bind(this)),this.container.on("attach",()=>{ke&&this.container.enableRenderingBounds(()=>this._graphicStore.getAllBounds()),this.graphics.items.length>0&&this._graphicsChangeHandler({target:this.graphics,added:this.graphics.items,removed:[],moved:[]}),this.handles.add(this.graphics.on("change",e=>this._graphicsChangeHandler(e)),"graphics")
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
const i=Object(Ie.e)(t,this.view.spatialReference)
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
this._graphicStore.updateLevel(t)}const s=[],a=new Array(e.length+t.length)
for(let e=0;e<i.length;e++){const t=i[e],o=this._getIntersectingTiles(t)
for(const e of o)r=e.id,Ue(r,e,n).removed.push(this._displayIds.get(t.uid))
s.push(this._updateGraphic(t,null)),a[e]=t}const o=i.length
for(let t=0;t<e.length;t++){const i=e[t]
a[o+t]=i,this._graphicsSet.add(i),s.push(this._addGraphic(i))}for(const e of t){this._abortProcessingGraphic(e.uid)
const t=this._getIntersectingTiles(e)
for(const i of t)r=i.id,Ue(r,i,n).removed.push(this._displayIds.get(e.uid))
this._graphicsSet.delete(e),this._graphicStore.remove(e)}let l
this._flipUpdatingGraphics(),await Promise.all(s)
for(let e=0;e<a.length;e++){l=a[e]
const t=this._getIntersectingTiles(l)
for(const e of t)r=e.id,Ue(r,e,n).addedOrModified.push(l)}this._graphicStore.updateZ()
const c=[]
for(const[e,t]of n)c.push(this._updateTile(t))
await Promise.all(c)}catch(e){Object(c.j)(e)}for(const i of t)try{const e=await this._getSymbolForGraphic(i,null)
if(e){const t=e.hash()
this._hashToExpandedSymbol.delete(t)}}catch(e){Object(c.j)(e)}n.clear(),this.notifyChange("updating"),this._processing=!1,this._needsProcessing&&(this._needsProcessing=!1,this._updateGraphics())}_getArcadeInfo(e){const t=(e.attributes?Object.keys(e.attributes):[]).map(t=>({name:t,alias:t,type:"string"==typeof e.attributes[t]?"esriFieldTypeString":"esriFieldTypeDouble"}))
return Object(l.k)(e.geometry)?null:{geometryType:Object(p.c)(e.geometry),spatialReference:f.default.fromJSON(e.geometry.spatialReference),fields:t}}_getSymbolForGraphic(e,t){return Object(c.q)(this._controller.signal),Object(l.l)(e.symbol)?Promise.resolve(e.symbol):Object(l.l)(this.renderer)?this.renderer.getSymbolAsync(e,{scale:this.view.scale,signal:Object(l.l)(t)?t.signal:null}):Promise.resolve(this._getNullSymbol(e))}_getCIMSymbol(e,t,i){let n=this._hashToCIM.get(t)
if(n)return Promise.resolve(n)
const r=Object(x.e)(e)
if(Object(l.l)(r)){if("CIMSymbolReference"===r.type)return n=r,this._hashToCIM.set(t,n),Promise.resolve(n)
let e=this._hashToCIMSymbolPromise.get(t)
return e||(e=r.fetchCIMSymbol(i).then(e=>(this._hashToCIM.set(t,e.data),this._hashToCIMSymbolPromise.delete(t),e)).catch(e=>(this._hashToCIMSymbolPromise.delete(t),Object(c.p)(e),null)),this._hashToCIMSymbolPromise.set(t,e),e)}return Promise.resolve(null)}_expandCIMSymbol(e,t,i,n){const r=this._hashToExpandedSymbol.get(i)
if(r)return Promise.resolve(r)
let s=this._hashToExpandedSymbolPromise.get(i)
if(s)return s
const a=this.container.stage,o=this._getArcadeInfo(t),l=Object(ue.c)(null),c=Object(Ne.createSymbolSchema)(e,l)
return s=Object(je.b)(c,o,a.resourceManager,n),this._hashToExpandedSymbolPromise.set(i,s),s.then(e=>(this._hashToExpandedSymbol.set(i,e),this._hashToExpandedSymbolPromise.delete(i),e)),s}async _getSymbolResources(e,t){return Object(c.q)(this._controller.signal),this.container.stage?this._getSymbolForGraphic(e,t).then(i=>{if(!i)return null
const n=i.hash()
return this._getCIMSymbol(i,n,t).then(i=>Object(l.k)(i)?null:this._expandCIMSymbol(i,e,n,t).then(e=>{const t=e.layers.filter(e=>"text"===e.type&&"string"==typeof e.text)
if(t&&t.length>0){const i=new Array(t.length)
for(let e=0;e<t.length;e++){const n=t[e],r=[],[a]=Object(s.a)(n.text)
n.text=a
for(let e=0;e<a.length;e++)r.push(a.charCodeAt(e))
i[e]={symbol:n,id:e,glyphIds:r}}const r=new Map
return this.container.getMaterialItems(i).then(i=>{Object(l.c)(i)
for(let e=0;e<t.length;e++){const n=t[e]
r.set(n.cim,{text:n.text,mosaicItem:i[e].mosaicItem})}return{symbol:e,textInfo:r,hash:n}})}return{symbol:e,hash:n}}))}).catch(e=>(Object(c.p)(e),null)):null}async _projectAndNormalizeGeometry(e,t){if(Object(c.q)(this._controller.signal),Object(l.k)(e.geometry)||"mesh"===e.geometry.type)return null
let i=e.geometry
if(Object(p.g)(i)){const e=i.rings
i.rings=e}else if(Object(p.h)(i)){const e=i.paths
i.paths=e}else if(Object(p.d)(i)){const n=await this._getSymbolForGraphic(e,t)
Object(c.q)(this._controller.signal),i=n&&(Object(Ie.f)(n.type)||Object(Ie.g)(n.type))?i.center:Object(Ie.h)(i)}await Object(v.a)(i.spatialReference,this.view.spatialReference)
const n=Object(g.a)(i),r=Object(v.b)(n,i.spatialReference,this.view.spatialReference)
return r&&Object(m.b)(r),r}_onTileUpdate(e){const t=Object(b.e)(this.view.spatialReference)
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
this._attributeStore.setData(i,0,0,n|(t?O.u:0))}_getGraphicsData(e,t,i){const n=this.view,r=Object(b.e)(n.spatialReference),s=this._graphicStore.getGraphicsData(e,t,i)
if(r){const e=Math.round((r.valid[1]-r.valid[0])/t.resolution)
for(const t of s)t.geometry&&(Object(p.f)(t.geometry)||Object(p.e)(t.geometry))&&this._wrapPoints(t,e)}return s}_wrapPoints(e,t){const i=e.geometry
Object(p.e)(i)?this._wrapMultipoint(i,t):this._wrapPoint(e,t)}_wrapMultipoint(e,t){const i=e.points,n=[]
let r=0,s=0
for(const[e,a]of i){if(n.push([e+r,a]),r=0,t===Ie.b){const i=5*Ie.a
e+s<i?(n.push([t,0]),r=-t):e+s>Ie.b-i&&(n.push([-t,0]),r=t)}else e+s<-Ie.a?(n.push([t,0]),r=-t):e+s>Ie.b+Ie.a&&(n.push([-t,0]),r=t)
s+=e}e.points=n}_wrapPoint(e,t){const i=e.geometry
if(t===Ie.b){const n=5*Ie.a
i.x<n?e.geometry={points:[[i.x,i.y],[t,0]]}:i.x>Ie.b-n&&(e.geometry={points:[[i.x,i.y],[-t,0]]})}else i.x<-Ie.a?e.geometry={points:[[i.x,i.y],[t,0]]}:i.x>Ie.b+Ie.a&&(e.geometry={points:[[i.x,i.y],[-t,0]]})}_processGraphics(e,t,i){if(!t||!t.length||!this._meshFactory)return Promise.resolve(null)
const n=pe.from(t,this.uid,e.transform),r=this._meshFactory
return this._matcher.then(t=>r.analyzeGraphics(n,this.container.stage.resourceManager,t,null,null,i).then(()=>(this._attributeStore.sendUpdates(),this._processAnalyzedGraphics(e,n))))}_processAnalyzedGraphics(e,t){const i=this._meshFactory,n=t.getSize(),r=t.getCursor(),s={features:n,records:n,metrics:0},a=new ae.a(e.key.id,s,T.e.DEFAULT,!1,!1),o=[]
for(;r.next();){const t=r.readGraphic()
t.insertAfter=-1===t.insertAfter?-1:this._displayIds.get(t.insertAfter),t.displayId=this._displayIds.get(t.attributes[this.uid])
const n=new q(t.displayId)
n.insertAfter=t.insertAfter,o.push(n),i.writeGraphic(a,r,e.level,this.container.stage.resourceManager)}const l=e.tileInfoView.tileInfo.isWrappable,c=a.serialize(l)
if(1!==c.length)return new se
const u=c[0].message
return se.fromVertexData(u,o)}_abortProcessingGraphic(e){var t
null==(t=this._graphicIdToAbortController.get(e))||t.abort()}_getNullSymbol(e){const t=e.geometry
return Object(p.h)(t)?y.g:Object(p.g)(t)||Object(p.d)(t)?y.f:this.defaultPointSymbolEnabled?y.e:null}_flipUpdatingGraphics(){this._updatingGraphicsTimer&&clearTimeout(this._updatingGraphicsTimer),this._updatingGraphicsTimer=setTimeout(()=>{this._updatingGraphicsTimer=null,this.notifyChange("updating")},160),this.notifyChange("updating")}}
Object(n.a)([Object(h.b)({constructOnly:!0})],Ve.prototype,"requestUpdateCallback",void 0),Object(n.a)([Object(h.b)()],Ve.prototype,"container",void 0),Object(n.a)([Object(h.b)({constructOnly:!0})],Ve.prototype,"graphics",void 0),Object(n.a)([Object(h.b)()],Ve.prototype,"updating",null),Object(n.a)([Object(h.b)()],Ve.prototype,"view",void 0),Object(n.a)([Object(h.b)()],Ve.prototype,"updateRequested",void 0),Object(n.a)([Object(h.b)()],Ve.prototype,"defaultPointSymbolEnabled",void 0),Ve=Object(n.a)([Object(d.a)("esri.views.2d.layers.support.GraphicsView2D")],Ve)
const Ge=Ve},1754:function(e,t,i){"use strict"
i.d(t,"a",(function(){return _})),i(1576),i(1497)
var n=i(1150),r=(i(1545),i(1564),i(1e3)),s=i(1269),a=i(1003),o=i(1022)
const l=new Map
l.set(a.d.MARKER,{multiplier:1,indicesPerRecord:6,verticesPerRecord:4}),l.set(a.d.LINE,{multiplier:1,indicesPerRecord:24,verticesPerRecord:8}),l.set(a.d.FILL,{multiplier:1,indicesPerRecord:10,verticesPerRecord:10}),l.set(a.d.TEXT,{multiplier:8,indicesPerRecord:6,verticesPerRecord:4}),l.set(a.d.LABEL,{multiplier:8,indicesPerRecord:6,verticesPerRecord:4})
var c=i(1493)
class u{constructor(e,t,i){this._start={index:0,vertex:0}
const n=function(e,t,i){const{indicesPerRecord:n,multiplier:s,verticesPerRecord:a}=l.get(e)
return{recordBytes:i*r.r*Uint32Array.BYTES_PER_ELEMENT,indexBytes:s*n*i*Uint32Array.BYTES_PER_ELEMENT,vertexBytes:s*a*i*t}}(e,t,i),s=t/4
this.geometryType=e,this._records=new c.a(Int32Array,n.recordBytes),this._indices=new c.a(Uint32Array,n.indexBytes),this._vertices=new c.a(Uint32Array,n.vertexBytes),this._metrics=new c.a(Float32Array,0),this._strideInt=s}serialize(e){const t=this._records.buffer(),i=this._indices.buffer(),n=this._vertices.buffer(),r=this._metrics.length?this._metrics.buffer():null,s=4*this._strideInt
return e.push(t,i,n),{stride:s,records:t,indices:i,vertices:n,metrics:r}}get strideInt(){return this._strideInt}get recordCount(){return this._records.length/r.r}get vertexCount(){return this._vertices.length/this._strideInt}get indexCount(){return this._indices.length}get indexWriter(){return this._indices}get vertexWriter(){return this._vertices}get metricWriter(){return this._metrics}vertexEnsureSize(e){this._vertices.ensureSize(e)}indexEnsureSize(e){this._indices.ensureSize(e)}recordStart(){this._start.index=this._indices.length,this._start.vertex=this._vertices.length}recordEnd(e,t,i,n,r,s,a,o){this._records.push(e),this._records.push(null!=t?t:0),this._records.push(i),this._records.push(n),this._records.push(r),this._records.push(s),this._records.push(a),this._records.writeF32(o)}writeIndex(e){this._indices.push(e)}writeVertex(e){this._vertices.push(e)}writeVertexF32(e){this._vertices.writeF32(e)}copyLastFrom(e,t,i){const n=e._records.length-r.r,s=e._records.getValue(n),a=e._records.getValue(n+1),o=e._records.getValue(n+2),l=e._records.getValue(n+4),c=e._records.getValue(n+6),u=e._records.getValue(n+7),h=this._vertices.length,d=(e._start.vertex-this._vertices.length)/this._strideInt,f=this._indices.length,_=this.vertexCount
for(let t=e._start.index;t!==e._indices.length;t++){const i=e._indices.getValue(t)
this._indices.push(i-d)}for(let t=e._start.vertex;t!==e._vertices.length;t++){const i=e._vertices.getValue(t)
this._vertices.push(i)}for(let e=h;e<=this._vertices.length;e+=this._strideInt)this._vertices.i1616Add(e,t,i)
this._records.push(s),this._records.push(a),this._records.push(o),this._records.push(f),this._records.push(l),this._records.push(_),this._records.push(c),this._records.push(u)}}var h=i(1704)
function d(e){switch(e){case 1:case 8:case 32:return-1
case 2:case 64:return 0
case 4:case 16:case 128:return 1}}function f(e){switch(e){case 1:case 2:case 4:return-1
case 8:case 16:return 0
case 32:case 64:case 128:return 1}}class _{constructor(e,t,i,n,r,s=0){this._hasAggregate=!1,this.hasRecords=!1,this._data={self:new Map,neighbors:new Array},this._version=0,this._current={geometryType:0,writer:null,overlaps:0,start:0,insertAfter:0,sortKey:0,id:0,materialKey:0,indexStart:0,vertStart:0,isDotDensity:!1,bufferingEnabled:!1,metricBoxLenPointer:0},this.hint=t,this.tileKey=e,this._hasAggregate=n,this._pixelBufferEnabled=r,this._version=s,this._symbologyType=i}get hasAggregates(){return this._hasAggregate}get hasPixelBufferEnabled(){return this._pixelBufferEnabled}serialize(e){const t=[]
return t.push(this._serializeTileVertexData(this.tileKey,this.tileKey,this._data.self)),this._data.neighbors.forEach((i,r)=>{const s=1<<r,a=d(s),o=f(s),l=Object(h.a)(new n.a(this.tileKey),a,o,e),c=this._serializeTileVertexData(this.tileKey,l.id,i.vertexData)
c.message.bufferIds=i.displayIds,t.push(c)}),t}_serializeTileVertexData(e,t,i){var n,r,s,o,l
const c=new Array
return{message:{tileKeyOrigin:e,tileKey:t,data:{[a.d.MARKER]:null==(n=i.get(a.d.MARKER))?void 0:n.serialize(c),[a.d.FILL]:null==(r=i.get(a.d.FILL))?void 0:r.serialize(c),[a.d.LINE]:null==(s=i.get(a.d.LINE))?void 0:s.serialize(c),[a.d.TEXT]:null==(o=i.get(a.d.TEXT))?void 0:o.serialize(c),[a.d.LABEL]:null==(l=i.get(a.d.LABEL))?void 0:l.serialize(c)},version:this._version},transferList:c}}featureStart(e,t){this._current.insertAfter=e,this._current.sortKey=t}featureEnd(){}recordStart(e,t,i,n){this._current.writer=this._getVertexWriter(i),this._current.overlaps=0,this._current.indexStart=this._current.writer.indexCount,this._current.vertStart=this._current.writer.vertexCount,this._current.bufferingEnabled=n,this._current.id=e,this._current.materialKey=t,this._current.geometryType=i,this._current.isDotDensity=!1,this._current.writer.recordStart()}recordCount(){return this._current.writer.recordCount}vertexCount(){return this._current.writer.vertexCount}indexCount(){return this._current.writer.indexCount}vertexEnsureSize(e){this._current.writer.vertexEnsureSize(e)}indexEnsureSize(e){this._current.writer.indexEnsureSize(e)}vertexBounds(e,t,i,n){this._current.bufferingEnabled&&this._addOverlap(e,t,i,n)}vertexWrite(e){this._current.writer.writeVertex(e)}vertexWriteF32(e){this._current.writer.writeVertexF32(e)}vertexEnd(){}vertexWriter(){return this._current.writer.vertexWriter}indexWrite(e){this._current.writer.writeIndex(e)}indexWriter(){return this._current.writer.indexWriter}metricWriter(){return this._current.writer.metricWriter}metricStart(e,t,i,n,r,o,l,c){this._current.writer=this._getVertexWriter(a.d.LABEL)
const u=this._current.writer.metricWriter
u.push(Object(s.f)(e)),u.push(t),u.push(i),u.push(n),u.push(r),u.push(o),u.push(l),u.push(c),u.push(255),this._current.metricBoxLenPointer=u.push(0)}metricEnd(){const e=this._current.writer.metricWriter
0===e.getValue(this._current.metricBoxLenPointer)&&e.seek(e.length-10)}metricBoxWrite(e,t,i,n){const r=this._current.writer.metricWriter
r.incr(this._current.metricBoxLenPointer),r.push(0),r.push(0),r.push(e),r.push(t),r.push(i),r.push(n)}recordEnd(){const e=this._current.vertStart,t=this._current.writer.vertexCount-e
if(!t)return!1
this.hasRecords=!0
const i=this._current.indexStart,n=this._current.writer.indexCount-i
if(this._current.writer.recordEnd(this._current.id,this._current.materialKey,this._current.insertAfter,i,n,e,t,this._current.sortKey),!this._pixelBufferEnabled||this._hasAggregate||0===this._current.overlaps||this._current.geometryType===a.d.LABEL)return!0
const s=this._current.writer
for(let e=0;e<8;e++){const t=1<<e
if(this._current.overlaps&t){this._data.neighbors[e]||(this._data.neighbors[e]={vertexData:new Map,displayIds:new Set})
const i=this._data.neighbors[e],n=this._current.geometryType
if(!i.vertexData.has(n)){const e=Object(o.n)(n,this._symbologyType).geometry,t=new u(n,e,r.C)
i.vertexData.set(n,t)}const a=i.vertexData.get(this._current.geometryType),l=8,c=512*-d(t)*l,h=512*-f(t)*l
null!=a&&a.copyLastFrom(s,c,h),i.displayIds.add(this._current.id)}}return!0}_addOverlap(e,t,i,n){const s=255^((e<0+i?148:e>=r.Z-i?41:189)|(t<0+n?224:t>=r.Z-n?7:231))
this._current.overlaps|=s}_getVertexWriter(e){if(!this._data.self.has(e)){const t=this._data.self,i=Object(o.n)(e,this._symbologyType).geometry
t.set(e,new u(e,i,this.hint.records))}return this._data.self.get(e)}}},1755:function(e,t,i){"use strict"
i.d(t,"a",(function(){return D})),i(235)
var n=i(23),r=i(973),s=i(1548),a=i(1269),o=i(446),l=i(233),c=i(991),u=i(980),h=i(1215),d=i(1192),f=i(1030),_=i(1287),m=i(1174),p=i(1e3),g=i(1003),b=i(1064),v=i(1023),x=i(1182)
function y(e){return e.length-1}function O(e,t,i=1){const[n,r]=function(e,t){return e[t+1]}(e,t)
return Math.sqrt(n*n+r*r)*i}class T{constructor(e,t,i,n,r){this._segments=e,this._index=t,this._distance=i,this._xStart=n,this._yStart=r,this._done=!1}static create(e){return new T(e,0,0,e[0][0],e[0][1])}clone(){return new T(this._segments,this._index,this._distance,this.xStart,this.yStart)}equals(e){return this._index===e._index||e._index===this._index-1&&(0===this._distance||1===e._distance)||e._index===this._index+1&&(1===this._distance||0===e._distance)}leq(e){return this._index<e._index||this._index===e._index&&this._distance<=e._distance}geq(e){return this._index>e._index||this._index===e._index&&this._distance>=e._distance}get _segment(){return this._segments[this._index+1]}get angle(){const e=this.dy,t=(0*e+-1*-this.dx)/(1*this.length)
let i=Math.acos(t)
return e>0&&(i=2*Math.PI-i),i}get xStart(){return this._xStart}get yStart(){return this._yStart}get x(){return this.xStart+this.distance*this.dx}get y(){return this.yStart+this.distance*this.dy}get dx(){return this._segment[0]}get dy(){return this._segment[1]}get xMidpoint(){return this.xStart+.5*this.dx}get yMidpoint(){return this.yStart+.5*this.dy}get xEnd(){return this.xStart+this.dx}get yEnd(){return this.yStart+this.dy}get length(){const{dx:e,dy:t}=this
return Math.sqrt(e*e+t*t)}get remainingLength(){return this.length*(1-this._distance)}get backwardLength(){return this.length*this._distance}get distance(){return this._distance}get done(){return this._done}hasPrev(){return this._index-1>=0}hasNext(){return this._index+1<y(this._segments)}next(){return this.hasNext()?(this._xStart+=this.dx,this._yStart+=this.dy,this._distance=0,this._index+=1,this):null}prev(){return this.hasPrev()?(this._index-=1,this._xStart-=this.dx,this._yStart-=this.dy,this._distance=1,this):(this._done=!0,null)}_seekBackwards(e,t){const i=this.backwardLength
if(e<=i)return this._distance=(i-e)/this.length,this
let n=this.backwardLength
for(;this.prev();){if(n+this.length>e)return this._seekBackwards(e-n)
n+=this.length}return this._distance=0,t?this:null}seek(e,t=!1){if(e<0)return this._seekBackwards(Math.abs(e),t)
if(e<=this.remainingLength)return this._distance=(this.backwardLength+e)/this.length,this
let i=this.remainingLength
for(;this.next();){if(i+this.length>e)return this.seek(e-i,t)
i+=this.length}return this._distance=1,t?this:null}}function S(e,t,i,n=!0){const r=function(e){let t=0
for(let i=0;i<y(e);i++)t+=O(e,i)
return t}(e),s=T.create(e),a=r/2
if(!n)return s.seek(a),void i(s.clone(),0,a+0*t,r)
const o=Math.max((r-t)/2,0),l=Math.floor(o/t),c=a-l*t
s.seek(c)
for(let e=-l;e<=l;e++)s.x<512&&s.x>=0&&s.y<512&&s.y>=0&&i(s.clone(),e,a+e*t,r),s.seek(t)}function w(e,t){const i=1e-6
if(t<=0)return
const n=e.length
if(n<3)return
const r=[]
let s=0
r.push(0)
for(let t=1;t<n;t++)s+=Object(x.c)(e[t],e[t-1]),r.push(s)
t=Math.min(t,.2*s)
const a=[]
a.push(e[0][0]),a.push(e[0][1])
const o=e[n-1][0],l=e[n-1][1],c=Object(x.h)([0,0],e[0],e[1])
Object(x.g)(c),e[0][0]+=t*c[0],e[0][1]+=t*c[1],Object(x.h)(c,e[n-1],e[n-2]),Object(x.g)(c),e[n-1][0]+=t*c[0],e[n-1][1]+=t*c[1]
for(let e=1;e<n;e++)r[e]+=t
r[n-1]+=t
const u=.5*t
for(let s=1;s<n-1;s++){let o=0,l=0,c=0
for(let n=s-1;n>=0&&!(r[n+1]<r[s]-u);n--){const a=u+r[n+1]-r[s],h=r[n+1]-r[n],d=r[s]-r[n]<u?1:a/h
if(Math.abs(d)<i)break
const f=d*d,_=d*a-.5*f*h,m=d*h/t,p=e[n+1],g=e[n][0]-p[0],b=e[n][1]-p[1]
o+=m/_*(p[0]*d*a+.5*f*(a*g-h*p[0])-f*d*h*g/3),l+=m/_*(p[1]*d*a+.5*f*(a*b-h*p[1])-f*d*h*b/3),c+=m}for(let a=s+1;a<n&&!(r[a-1]>r[s]+u);a++){const n=u-r[a-1]+r[s],h=r[a]-r[a-1],d=r[a]-r[s]<u?1:n/h
if(Math.abs(d)<i)break
const f=d*d,_=d*n-.5*f*h,m=d*h/t,p=e[a-1],g=e[a][0]-p[0],b=e[a][1]-p[1]
o+=m/_*(p[0]*d*n+.5*f*(n*g-h*p[0])-f*d*h*g/3),l+=m/_*(p[1]*d*n+.5*f*(n*b-h*p[1])-f*d*h*b/3),c+=m}a.push(o/c),a.push(l/c)}a.push(o),a.push(l)
for(let t=0,i=0;t<n;t++)e[t][0]=a[i++],e[t][1]=a[i++]}var E=i(1579)
const M=l.a.getLogger("esri.views.2d.engine.webgl.WGLLabelTemplate"),C=function(e){const t=new Map
return e=>(t.has(e)||t.set(e,(e=>{let t=0
if(0===e)return 1/0
for(;!(e%2);)t++,e/=2
return t})(e)),t.get(e))}(),I=e=>Math.floor(127*e+127),P=e=>Math.floor(10*e),A=e=>Math.round(e*(254/360))
class R extends E.a{constructor(e,t,i,n){var r,s,a,o,l,h
super(e,null==(r=i.font)?void 0:r.size,i.haloSize||0,null==(s=i.font)?void 0:s.size,i.color&&Object(m.c)(i.color)||0,i.haloColor&&Object(m.c)(i.haloColor)||0,i.horizontalAlignment,i.verticalAlignment,Object(_.i)(t.labelPlacement)?f.a.MAP:f.a.SCREEN,null==(a=i.font)?void 0:a.decoration,!1,i.angle||0,i.xoffset,i.yoffset,i.lineWidth,i.lineHeight,null,null,!1,null,null,i.backgroundColor&&Object(m.c)(i.backgroundColor),i.borderLineColor&&Object(m.c)(i.borderLineColor),i.borderLineSize),this._outLineLabelAngle=0,this._refPlacementPadding=0,this._refPlacementDirX=0,this._refPlacementDirY=0,this._refOffsetX=0,this._refOffsetY=0,this._zoomLevel=0,this.geometryType=g.d.LABEL,this._allowOverrun=null!=(o=t.allowOverrun)&&o,this._repeatLabel=null==(l=t.repeatLabel)||l,this._labelPosition=null!=(h=t.labelPosition)?h:"curved"
const d=function(e,t){const i=!!e.minScale&&t.scaleToZoom(e.minScale)||0
return Object(c.f)(i,0,25.5)}(t,n),b=function(e,t){const i=!!e.maxScale&&t.scaleToZoom(e.maxScale)||255
return Object(c.f)(i,0,25.5)}(t,n),x=t.labelPlacement,[y,O]=Object(_.c)(x)
this._xAlignD=y,this._yAlignD=O,this._minZoom=d,this._maxZoom=b,this._minBackgroundZoom=d,this._maxBackgroundZoom=b,this._refPlacementPadding=Object(u.h)(i.haloSize)+p.X,this._repeatLabelDistance=t.repeatLabelDistance?Object(u.h)(t.repeatLabelDistance):128
const T=v.b.load(e)
T.sdf=!0,this._materialKey=T.data}static fromLabelClass(e,t){if("esriServerLinePlacementCenterAlong"===e.labelPlacement){const t=e.symbol
t.xoffset=0,t.yoffset=0,t.angle=0,t.font.decoration="none"}return new R(e.materialKey,e,e.symbol,t)}get _shapedBox(){return Object(n.u)(this._shapingInfo).bounds}setZoomLevel(e){this._zoomLevel=e}bindReferenceTemplate(e){let t=Object(_.f)(this._xAlignD),i=Object(_.h)(this._yAlignD)
if(this._refOffsetX=0,this._refOffsetY=0,Object(n.k)(e))return void(this._refSymbolAndPlacementOffset=Object(b.b)(0,0,I(t),I(i)))
if("circle"===e.boundsType&&(t||i)){const e=Math.sqrt(t*t+i*i)
t/=e,i/=e}const r=Math.max(e.height,e.width),s=4*this._refPlacementPadding
this._refSymbolAndPlacementOffset=Object(b.b)(s,r,I(t),I(i)),this._referenceSize=r,this._refPlacementDirX=t,this._refPlacementDirY=i,this._refOffsetX=e.xOffset,this._refOffsetY=e.yOffset}_write(e,t){if(Object(n.k)(this._shapingInfo))return
const i=this._shapingInfo,r=t.getDisplayId(),s="esriGeometryPolygon"===t.geometryType?t.readLegacyCentroid():t.readLegacyGeometry()
if(s)switch(this._current={out:e,inId:r,inShaping:i,zoomLevel:this._zoomLevel},"esriGeometryPolyline"===t.geometryType&&"curved"===this._labelPosition&&(this._borderLineColor||this._backgroundColor)&&M.warnOnce("TextSymbol properties 'borderLineColor', 'borderLineSize', and 'backgroundColor' are not supported in curved labels"),t.geometryType){case"esriGeometryPolyline":this._placeLineLabels(s)
break
case"esriGeometryPoint":case"esriGeometryPolygon":this._placePointLabels(s)
break
default:((e,t="mapview-labeling")=>{M.error(new o.a(t,e))})(`Geometry of type ${t.geometryType} is not supported`)}}_isVisible(e,t){const i=P(this._current.zoomLevel)
return P(e)<=i&&i<=P(t)}_placePointLabels(e){const{out:t,inId:i,inShaping:n}=this._current
this._writeGlyphs(t,i,e,n)}_placeLineLabels(e){const t=function(e,t){const i=t
for(let t=0;t<e.length;t++){let n=e[t]
const r=[]
r.push(n[0])
for(let e=1;e<n.length;e++){let[t,i]=r[e-1]
t+=n[e][0],i+=n[e][1],r.push([t,i])}w(r,i)
const s=[]
s.push(r[0])
for(let e=1;e<r.length;e++){const[t,i]=r[e-1],[n,a]=r[e],o=Math.round(n-t),l=Math.round(a-i)
s.push([o,l])}e[t]=s,n=s}return e}(e.paths,this._current.inShaping.bounds.width),i=this._placeSubdivGlyphs.bind(this),n=(this._shapedBox.width+this._repeatLabelDistance)/2
for(const e of t)S(e,n,i,this._repeatLabel)}_placeSubdivGlyphs(e,t,i,n){const r=C(t),s=this._shapedBox.width/2,a=Math.sqrt(this._repeatLabelDistance)/2,o=Math.min(i,n-i),l=this._current.inShaping.isMultiline?25:Math.log2(o/(a+s/2)),c=0===t?l:Math.min(r,l),u=Math.max(this._minZoom,this._current.zoomLevel+1-c),h=this._current.zoomLevel-u,d=this._shapedBox.width/2*2**h
this._current.inShaping.isMultiline?0===t&&this._placeStraight(e,u):this._allowOverrun&&h<0?this._placeStraightAlong(e,this._minZoom):"parallel"===this._labelPosition?this._placeStraightAlong(e,u):"curved"===this._labelPosition&&this._placeCurved(e,u,d)}_placeStraight(e,t){const{out:i,inId:n,inShaping:r}=this._current,s=Math.ceil(e.angle*(180/Math.PI)%360),a=Math.ceil((e.angle*(180/Math.PI)+180)%360)
this._outLineLabelAngle=A(s),this._writeGlyphs(i,n,e,r,t),this._outLineLabelAngle=A(a),this._writeGlyphs(i,n,e,r,t)}_placeCurved(e,t,i){const{out:n,inId:r}=this._current
n.metricStart(r,t,e.x,e.y,0,0,0,0)
const s=e.clone(),a=e.angle*(180/Math.PI)%360,o=(e.angle*(180/Math.PI)+180)%360
this._outLineLabelAngle=A(a),this._placeFirst(s,t,1),this._placeBack(e,s,t,i,1),this._placeForward(e,s,t,i,1),this._outLineLabelAngle=A(o),this._placeFirst(s,t,0),this._placeBack(e,s,t,i,0),this._placeForward(e,s,t,i,0),n.metricEnd()}_placeStraightAlong(e,t){const{out:i,inId:n,inShaping:r}=this._current
i.metricStart(n,t,e.x,e.y,0,0,0,0)
const s=e.clone(),a=e.angle*(180/Math.PI)%360,o=(e.angle*(180/Math.PI)+180)%360,l=r.glyphs.length>0&&(this._borderLineColor||this._backgroundColor)
if(this._maxBackgroundZoom=25,this._minBackgroundZoom=Math.max(t,0),l){const t=v.b.load(this._materialKey)
t.textureBinding=r.glyphs[0].textureBinding
const s=Object(h.b)(Object(d.a)(),-e.angle),[l,c]=r.shapeBackground(s)
this._outLineLabelAngle=A(a),i.recordStart(n,t.data,this.geometryType,!0),this._writeBackgroundGeometry(i,n,e,l,c),i.recordEnd(),this._outLineLabelAngle=A(o),i.recordStart(n,t.data,this.geometryType,!0),this._writeBackgroundGeometry(i,n,e,l,c),i.recordEnd()}this._outLineLabelAngle=A(a),this._placeFirst(s,t,1,!0),this._outLineLabelAngle=A(o),this._placeFirst(s,t,0,!0),i.metricEnd()}_placeBack(e,t,i,n,r){const s=e.clone()
let a=e.backwardLength+0
for(;s.prev()&&!(a>=n);)this._placeOnSegment(s,t,a,i,-1,r),a+=s.length+0}_placeForward(e,t,i,n,r){const s=e.clone()
let a=e.remainingLength+0
for(;s.next()&&!(a>=n);)this._placeOnSegment(s,t,a,i,1,r),a+=s.length+0}_placeFirst(e,t,i,n=!1){const r=e,s=this._current.inShaping,a=s.glyphs,o=this._current.zoomLevel,{out:l,inId:c}=this._current
for(const u of a){const a=u.x>s.bounds.x?i:1-i,h=a*e.remainingLength+(1-a)*e.backwardLength,d=Math.abs(u.x+u.width/2-s.bounds.x),f=Math.max(0,o+Math.log2(d/(h+0))),_=Math.max(t,n?0:f)
if(u.maxZoom=25,u.angle=e.angle+(1-i)*Math.PI,u.minZoom=_,this._writeGlyph(l,c,r.x,r.y,u),i&&this._isVisible(u.minZoom,u.maxZoom)){const e=u.bounds
l.metricBoxWrite(e.center[0],e.center[1],e.width,e.height)}}}_placeOnSegment(e,t,i,n,r,s){const a=this._current.inShaping.glyphs,{out:o,inId:l}=this._current,c=this._current.inShaping,u=this._current.zoomLevel,h=e.dx/e.length,d=e.dy/e.length,f={x:e.x+i*-r*h,y:e.y+i*-r*d}
for(const h of a){const a=h.x>c.bounds.x?s:1-s
if(!(a&&1===r||!a&&-1===r))continue
const d=Math.abs(h.x+h.width/2-c.bounds.x),_=Math.max(0,u+Math.log2(d/i)-.1),m=Math.max(n,u+Math.log2(d/(i+e.length+0)))
if(0!==_&&(h.angle=e.angle+(1-s)*Math.PI,h.minZoom=m,h.maxZoom=_,this._writeGlyph(o,l,f.x,f.y,h),s&&this._isVisible(h.minZoom,h.maxZoom))){const i=h.bounds,n=e.x-t.x,r=e.y-t.y
o.metricBoxWrite(i.center[0]+n,i.center[1]+r,i.width,i.height)}}}_writeGlyphs(e,t,i,n,r=this._minZoom){if(i.x<0||i.x>=512||i.y<0||i.y>=512)return
if(n.glyphs.length>0&&(this._borderLineColor||this._backgroundColor)){const r=v.b.load(this._materialKey)
r.textureBinding=n.glyphs[0].textureBinding,e.recordStart(t,r.data,this.geometryType,!0),this._writeBackgroundGeometry(e,t,i,n.bounds,n.background),e.recordEnd()}const s=i.x+this._refOffsetX,a=i.y-this._refOffsetY
for(const i of n.glyphs)i.minZoom=r,i.maxZoom=this._maxZoom,this._writeGlyph(e,t,s,a,i)
const o=this._refPlacementDirX,l=this._refPlacementDirY,c=n.boundsT
e.metricStart(t,r,s,a,o,l,this._referenceSize,this._materialKey),e.metricBoxWrite(c.center[0],c.center[1],c.width,c.height),e.metricEnd()}_writeVertexCommon(e,t,i,n){const r=this._color,s=this._haloColor,a=Object(b.b)(0,0,this._size,this._haloSize),o=Math.max(n.minZoom,this._minZoom),l=Math.min(n.maxZoom,this._maxZoom),c=Object(b.b)(P(o),P(l),this._outLineLabelAngle,0)
e.vertexWrite(i),e.vertexWrite(t),e.vertexWrite(r),e.vertexWrite(s),e.vertexWrite(a),e.vertexWrite(this._refSymbolAndPlacementOffset),e.vertexWrite(c)}_writeBackgroundVertex(e,t,i,n,r,s){const a=Object(b.b)(0,0,this._size,this._haloSize),o=Object(b.b)(0,0,0,0),l=Object(b.b)(P(this._minBackgroundZoom),P(this._maxBackgroundZoom),this._outLineLabelAngle,1)
e.vertexWrite(i),e.vertexWrite(t),e.vertexWrite(n),e.vertexWrite(o),e.vertexWrite(a),e.vertexWrite(this._refSymbolAndPlacementOffset),e.vertexWrite(l),e.vertexWrite(r),e.vertexWrite(s),e.vertexEnd()}}var F=i(1583),L=i(1587)
class D{constructor(e,t,i){this._loadPromise=Object(s.a)(),this._geometryType=e,this._idField=t,this._templateStore=i}update(e,t){Object(n.l)(e.mesh.labels)&&(this._labelTemplates=this._createLabelTemplates(e.mesh.labels,t)),this._schema=e}_createLabelTemplates(e,t){const i=new Map
if("simple"===e.type){for(const n of e.classes){const e=R.fromLabelClass(n,t)
i.set(n.index,e)}return i}for(const n in e.classes){const r=e.classes[n]
for(const e of r){const n=R.fromLabelClass(e,t)
i.set(e.index,n)}}return i}get templates(){return this._templateStore}async analyze(e,t,i,s,o,l,c){if(Object(r.k)(c))return
let u
"dictionary"===(null==i?void 0:i.type)&&(u=await i.analyze(this._idField,e.copy(),t,o,l,c))
let h=0
for(;e.next();){let t=null
if(t=u?u[h++]:Object(n.l)(s)&&Object(a.h)(e.getDisplayId())&&1!==e.readAttribute("cluster_count")?s.match(this._idField,e,this._geometryType,o,l):i.match(this._idField,e,this._geometryType,o,l),e.setGroupId(t),Object(L.b)(t)){const i=this._templateStore.getDynamicTemplateGroup(t).templates
for(const t of i)t&&t.analyze&&t.analyze(this._templateStore,e,o,l)}}return await this._loadPromise,this._templateStore.finalize(c)}async analyzeGraphics(e,t,i,n,s,a){if(Object(r.k)(a))return
const o=e.getCursor()
for(i&&await i.analyze(this._idField,o.copy(),t,n,s,a);o.next();){let e=o.getGroupId()
if(null!=e&&-1!==e||(e=null==i?void 0:i.match(this._idField,o,o.geometryType,n,s),o.setGroupId(e)),Object(L.b)(e)){const t=this._templateStore.getDynamicTemplateGroup(e).templates
for(const e of t)e&&e.analyze&&e.analyze(this._templateStore,o,n,s)}o.setGroupId(e)}return await this._loadPromise,this._templateStore.finalize(a)}writeGraphic(e,t,i,n){const r=t.getGroupId(),s=t.getDisplayId(),a=this._templateStore.getTemplateGroup(r)
if(e.featureStart(t.insertAfter,0),null!=s){if(Object(L.b)(r))for(const e of a.templates)e&&e.bindFeature(t,null,null)
if(a){for(const r of a.templates)r&&r.write(e,t,i,n)
e.featureEnd()}}}writeCursor(e,t,i,r,s,a,o){const l=t.getGroupId(),c=t.getDisplayId(),u=this._templateStore.getTemplateGroup(l),h=u.templates,d=this._getSortKeyValue(t,u)
if(e.featureStart(0,d),null!=c&&h){if(Object(L.b)(l))for(const e of h)e.bindFeature(t,i,r)
for(const i of h)i.write(e,t,s,o)
if(Object(n.l)(a)&&e.hasRecords){const i=a&&this._findLabelRef(h)
this._writeLabels(e,t,a,i,s,o)}e.featureEnd()}}_getSortKeyValue(e,t){const i=this._schema.mesh.sortKey
if(Object(n.k)(i))return 0
let r=0
return r=!0===i.byRenderer&&null!=t.sortKey?t.sortKey:null!=i.fieldIndex?e.getComputedNumericAtIndex(i.fieldIndex):null!=i.field?e.readAttribute(i.field):e.readAttribute(this._idField),r*="asc"===i.order?1:-1,null==r||isNaN(r)?0:r}_findLabelRef(e){for(const t of e)if(t instanceof F.a)return t
return null}_writeLabels(e,t,i,r,s,a){for(const o of i)if(Object(n.l)(o)&&o){const{glyphs:i,rtl:n,index:l}=o,c=this._labelTemplates.get(l)
if(!c)continue
c.setZoomLevel(s),c.bindReferenceTemplate(r),c.bindTextInfo(i,n),c.write(e,t,null,a)}}}},1758:function(e,t,i){"use strict"
i.d(t,"a",(function(){return o}))
var n=i(1269)
class r{constructor(){this._freeIds=[],this._idCounter=1}createId(e=!1){return Object(n.d)(this._getFreeId(),e)}releaseId(e){this._freeIds.push(e)}_getFreeId(){return this._freeIds.length?this._freeIds.pop():this._idCounter++}}var s=i(1549)
function a(e,t,i){if(!(e.length>t))for(;e.length<=t;)e.push(i)}class o{constructor(){this._numerics=[],this._strings=[],this._idGenerator=new r,this._allocatedSize=256,this._bitsets=[],this._instanceIds=[],this._bounds=[]}createBitset(){const e=this._bitsets.length
return this._bitsets.push(s.a.create(this._allocatedSize,n.a)),e+1}getBitset(e){return this._bitsets[e-1]}_expand(){this._allocatedSize<<=1
for(const e of this._bitsets)e.resize(this._allocatedSize)}_ensureNumeric(e,t){this._numerics[e]||(this._numerics[e]=[]),a(this._numerics[e],t,0)}_ensureInstanceId(e){a(this._instanceIds,e,0)}_ensureString(e,t){this._strings[e]||(this._strings[e]=[]),a(this._strings[e],t,null)}createDisplayId(e=!1){const t=this._idGenerator.createId()
return t>this._allocatedSize&&this._expand(),Object(n.d)(t,e)}releaseDisplayId(e){for(const t of this._bitsets)t.unset(e)
return this._idGenerator.releaseId(e&n.a)}getComputedNumeric(e,t){return this.getComputedNumericAtIndex(e&n.a,0)}setComputedNumeric(e,t,i){return this.setComputedNumericAtIndex(e&n.a,i,0)}getComputedString(e,t){return this.getComputedStringAtIndex(e&n.a,0)}setComputedString(e,t,i){return this.setComputedStringAtIndex(e&n.a,0,i)}getComputedNumericAtIndex(e,t){const i=e&n.a
return this._ensureNumeric(t,i),this._numerics[t][i]}setComputedNumericAtIndex(e,t,i){const r=e&n.a
this._ensureNumeric(t,r),this._numerics[t][r]=i}getInstanceId(e){const t=e&n.a
return this._ensureInstanceId(t),this._instanceIds[t]}setInstanceId(e,t){const i=e&n.a
this._ensureInstanceId(i),this._instanceIds[i]=t}getComputedStringAtIndex(e,t){const i=e&n.a
return this._ensureString(t,i),this._strings[t][i]}setComputedStringAtIndex(e,t,i){const r=e&n.a
this._ensureString(t,r),this._strings[t][r]=i}getXMin(e){return this._bounds[4*(e&n.a)]}getYMin(e){return this._bounds[4*(e&n.a)+1]}getXMax(e){return this._bounds[4*(e&n.a)+2]}getYMax(e){return this._bounds[4*(e&n.a)+3]}setBounds(e,t){const i=t.readHydratedGeometry()
if(!i||!i.coords.length)return!1
let r=1/0,s=1/0,o=-1/0,l=-1/0
i.forEachVertex((e,t)=>{r=Math.min(r,e),s=Math.min(s,t),o=Math.max(o,e),l=Math.max(l,t)})
const c=e&n.a
return a(this._bounds,4*c+4,0),this._bounds[4*c]=r,this._bounds[4*c+1]=s,this._bounds[4*c+2]=o,this._bounds[4*c+3]=l,!0}}},1793:function(e,t,i){"use strict"
i.d(t,"a",(function(){return n}))
class n{constructor(e,t,i){this._initialVelocity=e,this._stopVelocity=t,this._friction=i,this._duration=Math.abs(Math.log(Math.abs(this._initialVelocity)/this._stopVelocity)/Math.log(1-this._friction))}get duration(){return this._duration}isFinished(e){return e>this.duration}get friction(){return this._friction}value(e){return this.valueFromInitialVelocity(this._initialVelocity,e)}valueDelta(e,t){const i=this.value(e)
return this.value(e+t)-i}valueFromInitialVelocity(e,t){t=Math.min(t,this.duration)
const i=1-this.friction
return e*(i**t-1)/Math.log(i)}}},1808:function(e,t,i){"use strict"
i.d(t,"a",(function(){return g}))
var n=i(973),r=i(1208),s=i(1726),a=i(1644),o=i(23),l=i(980),c=i(997),u=i(1093),h=i(1022),d=i(1773),f=i(1187),_=i(1333)
function m(e,t){const i=t.length
if(e<t[0].value||1===i)return t[0].size
for(let n=1;n<i;n++)if(e<t[n].value){const i=(e-t[n-1].value)/(t[n].value-t[n-1].value)
return t[n-1].size+i*(t[n].size-t[n-1].size)}return t[i-1].size}class p{constructor(){this.symbolLevels=[],this.vvColorValues=new Float32Array(8),this.vvColors=new Float32Array(32),this.vvOpacityValues=new Float32Array(8),this.vvOpacities=new Float32Array(8),this.vvSizeMinMaxValue=new Float32Array(4),this.outsideLabelsVisible=!1,this._vvMaterialParameters={vvSizeEnabled:!1,vvColorEnabled:!1,vvRotationEnabled:!1,vvRotationType:"geographic",vvOpacityEnabled:!1},this._technique=d.a}getSizeVVFieldStops(e){const t=this._vvSizeFieldStops
if(t)switch(t.type){case"static":return t
case"level-dependent":return Object(o.v)(t.levels[e],()=>{let i=1/0,n=0
for(const r in t.levels){const t=parseFloat(r),s=Math.abs(e-t)
s<i&&(i=s,n=t)}if(i===1/0)return{sizes:new Float32Array([0,0,0,0,0,0]),values:new Float32Array([0,0,0,0,0,0])}
const r=2**((e-n)/2),s=Object(o.u)(t.levels[n]),a=new Float32Array(s.values)
return a[2]*=r,a[3]*=r,{sizes:Object(o.u)(s.sizes),values:a}})
default:return}}get vvMaterialParameters(){return this._vvMaterialParameters}update(e){Object(o.l)(this._vvInfo)&&this._updateVisualVariables(this._vvInfo.vvRanges,e)}setInfo(e,t,i){this._updateEffects(i),this._vvInfo=t,this._technique=Object(f.c)(e),this.rendererSchema=this._technique.createOrUpdateRendererSchema(this.rendererSchema,e)}getVariation(){return{...this._technique.getVariation(this.rendererSchema),outsideLabelsVisible:this.outsideLabelsVisible,supportsTextureFloat:Object(_.a)("2d").supportsTextureFloat}}getVariationHash(){return this._technique.getVariationHash(this.rendererSchema)<<1|(this.outsideLabelsVisible?1:0)}_updateEffects(e){Object(o.l)(e)?this.outsideLabelsVisible=e.excludedLabelsVisible:this.outsideLabelsVisible=!1}_updateVisualVariables(e,t){const i=this._vvMaterialParameters
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
const a=e.rotation
a&&(i.vvRotationEnabled=!0,i.vvRotationType=a.type)}}class g extends a.a{constructor(e){super(e),this._rendererInfo=new p,this._materialItemsRequestQueue=new r.a,this.attributeView=new s.a(()=>this.onAttributeStoreUpdate())}destroy(){this.children.forEach(e=>e.destroy()),this.removeAllChildren(),this.attributeView.destroy(),this._materialItemsRequestQueue.clear()}setRendererInfo(e,t,i){this._rendererInfo.setInfo(e,t,i),this.requestRender()}async getMaterialItems(e,t){if(!e||0===e.length)return[]
const i=Object(n.e)()
return this._materialItemsRequestQueue.push({items:e,abortOptions:t,resolver:i}),this.requestRender(),i.promise}doRender(e){if(e.context.capabilities.enable("textureFloat"),e.context.capabilities.enable("vao"),this._materialItemsRequestQueue.length>0){let t=this._materialItemsRequestQueue.pop()
for(;t;)this._processMaterialItemRequest(e,t),t=this._materialItemsRequestQueue.pop()}super.doRender(e)}renderChildren(e){for(const t of this.children)t.commit(e)
this._rendererInfo.update(e.state),super.renderChildren(e)}updateTransforms(e){if(this.children.some(e=>e.hasData))for(const t of this.children)t.setTransform(e)}createRenderParams(e){const t=super.createRenderParams(e)
return t.rendererInfo=this._rendererInfo,t.attributeView=this.attributeView,t}onAttributeStoreUpdate(){}_processMaterialItemRequest(e,{items:t,abortOptions:i,resolver:n}){const{painter:r,pixelRatio:s}=e,a=t.map(e=>r.textureManager.rasterizeItem(e.symbol,s,e.glyphIds,i))
Promise.all(a).then(e=>{if(!this.stage)return void n.reject()
const i=e.map((e,i)=>({id:t[i].id,mosaicItem:e}))
n.resolve(i)},n.reject)}}},1826:function(e,t,i){"use strict"
function n(e,t,i){for(let n=0;n<i;++n)t[2*n]=e[n],t[2*n+1]=e[n]-t[2*n]}function r(e,t){const i=e.length
for(let n=0;n<i;++n)a[0]=e[n],t[n]=a[0]
return t}function s(e,t){const i=e.length
for(let n=0;n<i;++n)a[0]=e[n],a[1]=e[n]-a[0],t[n]=a[1]
return t}i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return s}))
const a=new Float32Array(2)},1838:function(e,t,i){"use strict"
i.d(t,"a",(function(){return b}))
var n=i(23),r=i(1808),s=i(1109),a=i(1151),o=i(1173),l=i(1360),c=i(1155),u=i(1331),h=i(1022),d=i(1068),f=i(984),_=i(1116)
const m=Math.PI/180
class p extends u.a{constructor(e){super(),this._program=null,this._vao=null,this._vertexBuffer=null,this._indexBuffer=null,this._dvsMat3=Object(a.b)(),this._localOrigin={x:0,y:0},this._getBounds=e}destroy(){this._vao&&(this._vao.dispose(!0),this._vao=null,this._vertexBuffer=null,this._indexBuffer=null),this._program=Object(n.f)(this._program)}doRender(e){const{context:t}=e,i=this._getBounds()
if(i.length<1)return
this._createShaderProgram(t),this._updateMatricesAndLocalOrigin(e),this._updateBufferData(t,i),t.setBlendingEnabled(!0),t.setDepthTestEnabled(!1),t.setStencilWriteMask(0),t.setStencilTestEnabled(!1),t.setBlendFunction(f.b.ONE,f.b.ONE_MINUS_SRC_ALPHA),t.setColorMask(!0,!0,!0,!0)
const n=this._program
t.bindVAO(this._vao),t.useProgram(n),n.setUniformMatrix3fv("u_dvsMat3",this._dvsMat3),t.gl.lineWidth(1),t.drawElements(f.r.LINES,8*i.length,f.k.UNSIGNED_INT,0),t.bindVAO()}_createTransforms(){return{dvs:Object(a.b)()}}_createShaderProgram(e){this._program||(this._program=e.programCache.acquire("precision highp float;\n        uniform mat3 u_dvsMat3;\n\n        attribute vec2 a_position;\n\n        void main() {\n          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);\n          gl_Position = vec4(pos.xy, 0.0, 1.0);\n        }","precision mediump float;\n      void main() {\n        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);\n      }",g().attributes))}_updateMatricesAndLocalOrigin(e){const{state:t}=e,{displayMat3:i,size:n,resolution:r,pixelRatio:a,rotation:u,viewpoint:h}=t,d=m*u,{x:f,y:_}=h.targetGeometry,p=Object(c.b)(f,t.spatialReference)
this._localOrigin.x=p,this._localOrigin.y=_
const g=a*n[0],b=a*n[1],v=r*g,x=r*b,y=Object(s.g)(this._dvsMat3)
Object(s.l)(y,y,i),Object(s.h)(y,y,Object(o.d)(g/2,b/2)),Object(s.d)(y,y,Object(l.d)(n[0]/v,-b/x,1)),Object(s.n)(y,y,-d)}_updateBufferData(e,t){const{x:i,y:n}=this._localOrigin,r=8*t.length,s=new Float32Array(r),a=new Uint32Array(8*t.length)
let o=0,l=0
for(const e of t)e&&(s[2*o+0]=e[0]-i,s[2*o+1]=e[1]-n,s[2*o+2]=e[0]-i,s[2*o+3]=e[3]-n,s[2*o+4]=e[2]-i,s[2*o+5]=e[3]-n,s[2*o+6]=e[2]-i,s[2*o+7]=e[1]-n,a[l+0]=o+0,a[l+1]=o+3,a[l+2]=o+3,a[l+3]=o+2,a[l+4]=o+2,a[l+5]=o+1,a[l+6]=o+1,a[l+7]=o+0,o+=4,l+=8)
if(this._vertexBuffer?this._vertexBuffer.setData(s.buffer):this._vertexBuffer=d.a.createVertex(e,f.D.DYNAMIC_DRAW,s.buffer),this._indexBuffer?this._indexBuffer.setData(a):this._indexBuffer=d.a.createIndex(e,f.D.DYNAMIC_DRAW,a),!this._vao){const t=g()
this._vao=new _.a(e,t.attributes,t.bufferLayouts,{geometry:this._vertexBuffer},this._indexBuffer)}}}const g=()=>Object(h.g)("bounds",{geometry:[{location:0,name:"a_position",count:2,type:f.k.FLOAT}]})
let b=class extends r.a{constructor(e){super(e),this.hasHighlight=()=>!0}destroy(){super.destroy(),this._boundsRenderer=Object(n.e)(this._boundsRenderer)}enableRenderingBounds(e){this._boundsRenderer=new p(e),this.requestRender()}get hasLabels(){return!1}onTileData(e,t){e.patch(t),this.contains(e)||this.addChild(e),this.requestRender()}onTileError(e){e.clear(),this.contains(e)||this.addChild(e)}_renderChildren(e,t){for(const i of this.children)i.isReady&&i.hasData&&(i.commit(e),e.context.setStencilFunction(f.h.EQUAL,i.stencilRef,255),i.getDisplayList().replay(e,i,t))}}},1877:function(e,t,i){"use strict"
i.d(t,"a",(function(){return n}))
class n{constructor(e){this._gain=e,this.lastValue=void 0,this.filteredDelta=void 0}update(e){if(this.hasLastValue()){const t=this.computeDelta(e)
this._updateDelta(t)}this.lastValue=e}reset(){this.lastValue=void 0,this.filteredDelta=void 0}hasLastValue(){return void 0!==this.lastValue}hasFilteredDelta(){return void 0!==this.filteredDelta}computeDelta(e){return void 0===this.lastValue?NaN:e-this.lastValue}_updateDelta(e){void 0!==this.filteredDelta?this.filteredDelta=(1-this._gain)*this.filteredDelta+this._gain*e:this.filteredDelta=e}}},1886:function(e,t,i){"use strict"
i.d(t,"a",(function(){return r}))
var n=i(23)
class r{constructor(e){this.size=0,this._start=0,this.maxSize=e,this._buffer=new Array(e)}get entries(){return this._buffer}enqueue(e){if(this.size===this.maxSize){const t=this._buffer[this._start]
return this._buffer[this._start]=e,this._start=(this._start+1)%this.maxSize,t}return this._buffer[(this._start+this.size++)%this.maxSize]=e,null}dequeue(){if(0===this.size)return null
const e=this._buffer[this._start]
return this._buffer[this._start]=null,this.size--,this._start=(this._start+1)%this.maxSize,e}peek(){return 0===this.size?null:this._buffer[this._start]}find(e){if(0===this.size)return null
for(const t of this._buffer)if(Object(n.l)(t)&&e(t))return t
return null}clear(e){let t=this.dequeue()
for(;Object(n.l)(t);)e&&e(t),t=this.dequeue()}}},1912:function(e,t,i){"use strict"
i.d(t,"a",(function(){return s}))
var n=i(1003),r=i(1838)
class s extends r.a{renderChildren(e){this.attributeView.update(),this.children.some(e=>e.hasData)&&(this.attributeView.bindTextures(e.context,!1),super.renderChildren(e),e.drawPhase===n.c.MAP&&this._renderChildren(e),this.hasHighlight()&&e.drawPhase===n.c.HIGHLIGHT&&this._renderHighlight(e),this._boundsRenderer&&this._boundsRenderer.doRender(e))}_renderHighlight(e){const{painter:t}=e,i=t.effects.highlight
i.bind(e),this._renderChildren(e,i.defines),i.draw(e),i.unbind()}}},1926:function(e,t,i){"use strict"
i.d(t,"a",(function(){return a}))
var n=i(991),r=i(1877),s=i(1793)
class a{constructor(e=2.5,t=.01,i=.95,n=12){this._minimumInitialVelocity=e,this._stopVelocity=t,this._friction=i,this._maxVelocity=n,this.enabled=!0,this.value=new r.a(.8),this.time=new r.a(.3)}add(e,t){if(this.enabled&&null!=t){if(this.time.hasLastValue()){if(this.time.computeDelta(t)<.01)return
if(this.value.hasFilteredDelta()){const t=this.value.computeDelta(e)
this.value.filteredDelta*t<0&&this.value.reset()}}this.time.update(t),this.value.update(e)}}reset(){this.value.reset(),this.time.reset()}evaluateMomentum(){if(!this.enabled||!this.value.hasFilteredDelta()||!this.time.hasFilteredDelta())return null
let e=this.value.filteredDelta/this.time.filteredDelta
return e=Object(n.f)(e,-this._maxVelocity,this._maxVelocity),Math.abs(e)<this._minimumInitialVelocity?null:this.createMomentum(e,this._stopVelocity,this._friction)}createMomentum(e,t,i){return new s.a(e,t,i)}}},1934:function(e,t,i){"use strict"
i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return s}))
var n=i(1615)
class r{constructor(e,t,i,n,r,s,a,o,l){this.createQuery=e,this.deleteQuery=t,this.resultAvailable=i,this.getResult=n,this.disjoint=r,this.beginTimeElapsed=s,this.endTimeElapsed=a,this.createTimestamp=o,this.timestampBits=l}}let s=!1
function a(e,t){if(t.disjointTimerQuery)return null
let i=e.getExtension("EXT_disjoint_timer_query_webgl2")
return i&&Object(n.a)(e)?new r(()=>e.createQuery(),t=>{e.deleteQuery(t),s=!1},t=>e.getQueryParameter(t,e.QUERY_RESULT_AVAILABLE),t=>e.getQueryParameter(t,e.QUERY_RESULT),()=>e.getParameter(i.GPU_DISJOINT_EXT),t=>{s||(s=!0,e.beginQuery(i.TIME_ELAPSED_EXT,t))},()=>{e.endQuery(i.TIME_ELAPSED_EXT),s=!1},e=>i.queryCounterEXT(e,i.TIMESTAMP_EXT),()=>e.getQuery(i.TIMESTAMP_EXT,i.QUERY_COUNTER_BITS_EXT)):(i=e.getExtension("EXT_disjoint_timer_query"),i?new r(()=>i.createQueryEXT(),e=>{i.deleteQueryEXT(e),s=!1},e=>i.getQueryObjectEXT(e,i.QUERY_RESULT_AVAILABLE_EXT),e=>i.getQueryObjectEXT(e,i.QUERY_RESULT_EXT),()=>e.getParameter(i.GPU_DISJOINT_EXT),e=>{s||(s=!0,i.beginQueryEXT(i.TIME_ELAPSED_EXT,e))},()=>{i.endQueryEXT(i.TIME_ELAPSED_EXT),s=!1},e=>i.queryCounterEXT(e,i.TIMESTAMP_EXT),()=>i.getQueryEXT(i.TIMESTAMP_EXT,i.QUERY_COUNTER_BITS_EXT)):null)}},2035:function(e,t,i){"use strict"
i.d(t,"a",(function(){return l}))
var n=i(985),r=i(981),s=i(1877),a=i(1793)
class o extends a.a{constructor(e,t,i,n,r){super(e,t,i),this._sceneVelocity=n,this.direction=r}value(e){return super.valueFromInitialVelocity(this._sceneVelocity,e)}}class l{constructor(e=300,t=12,i=.84){this._minimumInitialVelocity=e,this._stopVelocity=t,this._friction=i,this.enabled=!0,this._time=new s.a(.6),this._screen=[new s.a(.4),new s.a(.4)],this._scene=[new s.a(.6),new s.a(.6),new s.a(.6)],this._tmpDirection=Object(r.f)()}add(e,t,i){if(this.enabled){if(this._time.hasLastValue()&&this._time.computeDelta(i)<.015)return
this._screen[0].update(e[0]),this._screen[1].update(e[1]),this._scene[0].update(t[0]),this._scene[1].update(t[1]),this._scene[2].update(t[2]),this._time.update(i)}}reset(){this._screen[0].reset(),this._screen[1].reset(),this._scene[0].reset(),this._scene[1].reset(),this._scene[2].reset(),this._time.reset()}evaluateMomentum(){if(!this.enabled||!this._screen[0].hasFilteredDelta()||!this._time.hasFilteredDelta())return null
const e=this._screen[0].filteredDelta,t=this._screen[1].filteredDelta,i=null==e||null==t?0:Math.sqrt(e*e+t*t),n=this._time.filteredDelta,r=null==n||null==i?0:i/n
return Math.abs(r)<this._minimumInitialVelocity?null:this.createMomentum(r,this._stopVelocity,this._friction)}createMomentum(e,t,i){var r,s,a
Object(n.B)(this._tmpDirection,null!=(r=this._scene[0].filteredDelta)?r:0,null!=(s=this._scene[1].filteredDelta)?s:0,null!=(a=this._scene[2].filteredDelta)?a:0)
const l=Object(n.u)(this._tmpDirection)
l>0&&Object(n.p)(this._tmpDirection,this._tmpDirection,1/l)
const c=this._time.filteredDelta
return new o(e,t,i,null==c?0:l/c,this._tmpDirection)}}},2036:function(e,t,i){"use strict"
i.d(t,"a",(function(){return r}))
var n=i(1926)
class r extends n.a{constructor(e=3,t=.01,i=.95,n=12){super(e,t,i,n)}add(e,t){const i=this.value.lastValue
if(null!=i){let t=e-i
for(;t>Math.PI;)t-=2*Math.PI
for(;t<-Math.PI;)t+=2*Math.PI
e=i+t}super.add(e,t)}}},2037:function(e,t,i){"use strict"
i.d(t,"a",(function(){return a}))
var n=i(1793),r=i(1926)
class s extends n.a{constructor(e,t,i){super(e,t,i)}value(e){const t=super.value(e)
return Math.exp(t)}valueDelta(e,t){const i=super.value(e),n=super.value(e+t)-i
return Math.exp(n)}}class a extends r.a{constructor(e=2.5,t=.01,i=.95,n=12){super(e,t,i,n)}add(e,t){super.add(Math.log(e),t)}createMomentum(e,t,i){return new s(e,t,i)}}},2045:function(e,t,i){"use strict"
i.d(t,"a",(function(){return s}))
var n,r,s={}
n={get exports(){return s},set exports(e){s=e}},void 0!==(r=function(){var e={enable:{1:{0:!0}},disable:{1:{0:!0}},getParameter:{1:{0:!0}},drawArrays:{3:{0:!0}},drawElements:{4:{0:!0,2:!0}},createShader:{1:{0:!0}},getShaderParameter:{2:{1:!0}},getProgramParameter:{2:{1:!0}},getShaderPrecisionFormat:{2:{0:!0,1:!0}},getVertexAttrib:{2:{1:!0}},vertexAttribPointer:{6:{2:!0}},bindTexture:{2:{0:!0}},activeTexture:{1:{0:!0}},getTexParameter:{2:{0:!0,1:!0}},texParameterf:{3:{0:!0,1:!0}},texParameteri:{3:{0:!0,1:!0,2:!0}},texImage2D:{9:{0:!0,2:!0,6:!0,7:!0},6:{0:!0,2:!0,3:!0,4:!0}},texSubImage2D:{9:{0:!0,6:!0,7:!0},7:{0:!0,4:!0,5:!0}},copyTexImage2D:{8:{0:!0,2:!0}},copyTexSubImage2D:{8:{0:!0}},generateMipmap:{1:{0:!0}},compressedTexImage2D:{7:{0:!0,2:!0}},compressedTexSubImage2D:{8:{0:!0,6:!0}},bindBuffer:{2:{0:!0}},bufferData:{3:{0:!0,2:!0}},bufferSubData:{3:{0:!0}},getBufferParameter:{2:{0:!0,1:!0}},pixelStorei:{2:{0:!0,1:!0}},readPixels:{7:{4:!0,5:!0}},bindRenderbuffer:{2:{0:!0}},bindFramebuffer:{2:{0:!0}},checkFramebufferStatus:{1:{0:!0}},framebufferRenderbuffer:{4:{0:!0,1:!0,2:!0}},framebufferTexture2D:{5:{0:!0,1:!0,2:!0}},getFramebufferAttachmentParameter:{3:{0:!0,1:!0,2:!0}},getRenderbufferParameter:{2:{0:!0,1:!0}},renderbufferStorage:{4:{0:!0,1:!0}},clear:{1:{0:{enumBitwiseOr:["COLOR_BUFFER_BIT","DEPTH_BUFFER_BIT","STENCIL_BUFFER_BIT"]}}},depthFunc:{1:{0:!0}},blendFunc:{2:{0:!0,1:!0}},blendFuncSeparate:{4:{0:!0,1:!0,2:!0,3:!0}},blendEquation:{1:{0:!0}},blendEquationSeparate:{2:{0:!0,1:!0}},stencilFunc:{3:{0:!0}},stencilFuncSeparate:{4:{0:!0,1:!0}},stencilMaskSeparate:{2:{0:!0}},stencilOp:{3:{0:!0,1:!0,2:!0}},stencilOpSeparate:{4:{0:!0,1:!0,2:!0,3:!0}},cullFace:{1:{0:!0}},frontFace:{1:{0:!0}},drawArraysInstancedANGLE:{4:{0:!0}},drawElementsInstancedANGLE:{5:{0:!0,2:!0}},blendEquationEXT:{1:{0:!0}}},t=null,i=null
function n(e){if(null==t)for(var n in t={},i={},e)"number"==typeof e[n]&&(t[e[n]]=n,i[n]=e[n])}function r(){if(null==t)throw"WebGLDebugUtils.init(ctx) not called"}function s(e){r()
var i=t[e]
return void 0!==i?"gl."+i:"/*UNKNOWN WebGL ENUM*/ 0x"+e.toString(16)}function a(t,n,r,a){var o
if(void 0!==(o=e[t])&&void 0!==(o=o[n])&&o[r]){if("object"==typeof o[r]&&void 0!==o[r].enumBitwiseOr){for(var l=o[r].enumBitwiseOr,c=0,u=[],h=0;h<l.length;++h){var d=i[l[h]]
0!=(a&d)&&(c|=d,u.push(s(d)))}return c===a?u.join(" | "):s(a)}return s(a)}return null===a?"null":void 0===a?"undefined":a.toString()}function o(e,t,i){e.__defineGetter__(i,(function(){return t[i]})),e.__defineSetter__(i,(function(e){t[i]=e}))}function l(e){var t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i=e.createBuffer()
e.bindBuffer(e.ARRAY_BUFFER,i)
for(var n=0;n<t;++n)e.disableVertexAttribArray(n),e.vertexAttribPointer(n,4,e.FLOAT,!1,0,0),e.vertexAttrib1f(n,0)
e.deleteBuffer(i)
var r=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)
for(n=0;n<r;++n)e.activeTexture(e.TEXTURE0+n),e.bindTexture(e.TEXTURE_CUBE_MAP,null),e.bindTexture(e.TEXTURE_2D,null)
for(e.activeTexture(e.TEXTURE0),e.useProgram(null),e.bindBuffer(e.ARRAY_BUFFER,null),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.DITHER),e.disable(e.SCISSOR_TEST),e.blendColor(0,0,0,0),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.clearColor(0,0,0,0),e.clearDepth(1),e.clearStencil(-1),e.colorMask(!0,!0,!0,!0),e.cullFace(e.BACK),e.depthFunc(e.LESS),e.depthMask(!0),e.depthRange(0,1),e.frontFace(e.CCW),e.hint(e.GENERATE_MIPMAP_HINT,e.DONT_CARE),e.lineWidth(1),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.UNPACK_COLORSPACE_CONVERSION_WEBGL&&e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.polygonOffset(0,0),e.sampleCoverage(1,!1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilMask(4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT|e.STENCIL_BUFFER_BIT);e.getError(););}return{init:n,mightBeEnum:function(e){return r(),void 0!==t[e]},glEnumToString:s,glFunctionArgToString:a,glFunctionArgsToString:function(e,t){for(var i="",n=t.length,r=0;r<n;++r)i+=(0==r?"":", ")+a(e,n,r,t[r])
return i},makeDebugContext:function e(t,i,r,l){l=l||t,n(t),i=i||function(e,t,i){for(var n="",r=i.length,o=0;o<r;++o)n+=(0==o?"":", ")+a(t,r,o,i[o]);(function(e){window.console&&window.console.error?window.console.error(e):function(e){window.console&&window.console.log&&window.console.log(e)}(e)})("WebGL error "+s(e)+" in "+t+"("+n+")")}
var c={}
function u(e,t){return function(){r&&r(t,arguments)
var n=e[t].apply(e,arguments),s=l.getError()
return 0!=s&&(c[s]=!0,i(s,t,arguments)),n}}var h={}
for(var d in t)if("function"==typeof t[d])if("getExtension"!=d)h[d]=u(t,d)
else{var f=u(t,d)
h[d]=function(){return e(f.apply(t,arguments),i,r,l)}}else o(h,t,d)
return h.getError=function(){for(var e in c)if(c.hasOwnProperty(e)&&c[e])return c[e]=!1,e
return t.NO_ERROR},h},makeLostContextSimulatingCanvas:function(e){var t,i,n=[],r=[],s={},a=1,c=!1,u=[],h=0,d=0,f=!1,_=0,m={}
function p(e){return"function"==typeof e?e:function(t){e.handleEvent(t)}}e.getContext=(i=e.getContext,function(){var n=i.apply(e,arguments)
if(n instanceof WebGLRenderingContext){if(n!=t){if(t)throw"got different context"
s=O(t=n)}return s}return n})
var g=function(e){n.push(p(e))},b=function(e){r.push(p(e))}
function v(){++d,c||h==d&&e.loseContext()}function x(e,t){var i=e[t]
return function(){if(v(),!c)return i.apply(e,arguments)}}function y(e){return{statusMessage:e,preventDefault:function(){f=!0}}}return function(e){var t=e.addEventListener
e.addEventListener=function(i,n,r){switch(i){case"webglcontextlost":g(n)
break
case"webglcontextrestored":b(n)
break
default:t.apply(e,arguments)}}}(e),e.loseContext=function(){if(!c){for(c=!0,h=0,++a;t.getError(););(function(){for(var e=Object.keys(m),t=0;t<e.length;++t)delete m[e]})(),m[t.CONTEXT_LOST_WEBGL]=!0
var i=y("context lost"),r=n.slice()
setTimeout((function(){for(var t=0;t<r.length;++t)r[t](i)
_>=0&&setTimeout((function(){e.restoreContext()}),_)}),0)}},e.restoreContext=function(){c&&r.length&&setTimeout((function(){if(!f)throw"can not restore. webglcontestlost listener did not call event.preventDefault";(function(){for(var e=0;e<u.length;++e){var i=u[e]
i instanceof WebGLBuffer?t.deleteBuffer(i):i instanceof WebGLFramebuffer?t.deleteFramebuffer(i):i instanceof WebGLProgram?t.deleteProgram(i):i instanceof WebGLRenderbuffer?t.deleteRenderbuffer(i):i instanceof WebGLShader?t.deleteShader(i):i instanceof WebGLTexture&&t.deleteTexture(i)}})(),l(t),c=!1,d=0,f=!1
for(var e=r.slice(),i=y("context restored"),n=0;n<e.length;++n)e[n](i)}),0)},e.loseContextInNCalls=function(e){if(c)throw"You can not ask a lost contet to be lost"
h=d+e},e.getNumCalls=function(){return d},e.setRestoreTimeout=function(e){_=e},e
function O(e){for(var i in e)"function"==typeof e[i]?s[i]=x(e,i):o(s,e,i)
s.getError=function(){if(v(),!c)for(;e=t.getError();)m[e]=!0
for(var e in m)if(m[e])return delete m[e],e
return s.NO_ERROR}
for(var n=["createBuffer","createFramebuffer","createProgram","createRenderbuffer","createShader","createTexture"],r=0;r<n.length;++r){var l=n[r]
s[l]=function(t){return function(){if(v(),c)return null
var i=t.apply(e,arguments)
return i.__webglDebugContextLostId__=a,u.push(i),i}}(e[l])}var h=["getActiveAttrib","getActiveUniform","getBufferParameter","getContextAttributes","getAttachedShaders","getFramebufferAttachmentParameter","getParameter","getProgramParameter","getProgramInfoLog","getRenderbufferParameter","getShaderParameter","getShaderInfoLog","getShaderSource","getTexParameter","getUniform","getUniformLocation","getVertexAttrib"]
for(r=0;r<h.length;++r)s[l=h[r]]=function(t){return function(){return v(),c?null:t.apply(e,arguments)}}(s[l])
var d=["isBuffer","isEnabled","isFramebuffer","isProgram","isRenderbuffer","isShader","isTexture"]
for(r=0;r<d.length;++r)s[l=d[r]]=function(t){return function(){return v(),!c&&t.apply(e,arguments)}}(s[l])
return s.checkFramebufferStatus=function(t){return function(){return v(),c?s.FRAMEBUFFER_UNSUPPORTED:t.apply(e,arguments)}}(s.checkFramebufferStatus),s.getAttribLocation=function(t){return function(){return v(),c?-1:t.apply(e,arguments)}}(s.getAttribLocation),s.getVertexAttribOffset=function(t){return function(){return v(),c?0:t.apply(e,arguments)}}(s.getVertexAttribOffset),s.isContextLost=function(){return c},s}},resetToInitialState:l}}())&&(n.exports=r)},2050:function(e,t,i){"use strict"
i.d(t,"a",(function(){return c})),i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return a})),i.d(t,"d",(function(){return l})),i.d(t,"e",(function(){return u})),i(235)
var n=i(446),r=i(23),s=i(374)
function a(e){const t=l(e)
return Object(r.l)(t)?t.toDataURL():""}async function o(e){const t=l(e)
if(Object(r.k)(t))throw new n.a("imageToArrayBuffer","Unsupported image type")
const i=await async function(e){if(!(e instanceof HTMLImageElement))return"image/png"
const t=e.src
if(Object(s.z)(t)){const e=Object(s.h)(t)
return"image/jpeg"===(null==e?void 0:e.mediaType)?e.mediaType:"image/png"}return/\.png$/i.test(t)?"image/png":/\.(jpg|jpeg)$/i.test(t)?"image/jpeg":"image/png"}(e),a=await new Promise(e=>t.toBlob(e,i))
if(!a)throw new n.a("imageToArrayBuffer","Failed to encode image")
return{data:await a.arrayBuffer(),type:i}}function l(e){if(e instanceof HTMLCanvasElement)return e
if(e instanceof HTMLVideoElement)return null
const t=document.createElement("canvas")
t.width=e.width,t.height=e.height
const i=t.getContext("2d")
return e instanceof HTMLImageElement?i.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&i.putImageData(e,0,0),t}function c(e){const t=[],i=new Uint8Array(e)
for(let e=0;e<i.length;e++)t.push(String.fromCharCode(i[e]))
return"data:application/octet-stream;base64,"+btoa(t.join(""))}function u(e){if(e.byteLength<8)return!1
const t=new Uint8Array(e)
return 137===t[0]&&80===t[1]&&78===t[2]&&71===t[3]&&13===t[4]&&10===t[5]&&26===t[6]&&10===t[7]}},2051:function(e,t,i){"use strict"
i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return s}))
var n=i(1370),r=i(991)
function s(e,t,i){const n=Object(r.p)(Math.ceil(i)),s=(e=>"vertical"===e||"horizontal"===e||"cross"===e||"esriSFSCross"===e||"esriSFSVertical"===e||"esriSFSHorizontal"===e)(t)?8*n:16*n,a=2*n
e.width=s,e.height=s
const o=e.getContext("2d")
o.strokeStyle="#FFFFFF",o.lineWidth=n,o.beginPath(),"vertical"!==t&&"cross"!==t&&"esriSFSCross"!==t&&"esriSFSVertical"!==t||(o.moveTo(s/2,-a),o.lineTo(s/2,s+a)),"horizontal"!==t&&"cross"!==t&&"esriSFSCross"!==t&&"esriSFSHorizontal"!==t||(o.moveTo(-a,s/2),o.lineTo(s+a,s/2)),"forward-diagonal"!==t&&"diagonal-cross"!==t&&"esriSFSDiagonalCross"!==t&&"esriSFSForwardDiagonal"!==t||(o.moveTo(-a,-a),o.lineTo(s+a,s+a),o.moveTo(s-a,-a),o.lineTo(s+a,a),o.moveTo(-a,s-a),o.lineTo(a,s+a)),"backward-diagonal"!==t&&"diagonal-cross"!==t&&"esriSFSBackwardDiagonal"!==t&&"esriSFSDiagonalCross"!==t||(o.moveTo(s+a,-a),o.lineTo(-a,s+a),o.moveTo(a,-a),o.lineTo(-a,a),o.moveTo(s+a,s-a),o.lineTo(s-a,s+a)),o.stroke()
const l=o.getImageData(0,0,e.width,e.height),c=new Uint8Array(l.data)
let u
for(let e=0;e<c.length;e+=4)u=c[e+3]/255,c[e]=c[e]*u,c[e+1]=c[e+1]*u,c[e+2]=c[e+2]*u
return[c,e.width,e.height]}function a(e,t){const i="Butt"===t,r="Square"===t,s=!i&&!r
e.length%2==1&&(e=[...e,...e])
const a=15.5
let o=0
for(const t of e)o+=t
const l=Math.round(o*a),c=new Float32Array(31*l),u=7.75
let h=0,d=0,f=.5,_=!0
for(const t of e){for(h=d,d+=t*a;f<=d;){let e=.5
for(;e<31;){const t=(e-.5)*l+f-.5,n=s?(e-a)*(e-a):Math.abs(e-a)
c[t]=_?i?Math.max(Math.max(h+u-f,n),Math.max(f-d+u,n)):n:s?Math.min((f-h)*(f-h)+n,(f-d)*(f-d)+n):r?Math.min(Math.max(f-h,n),Math.max(d-f,n)):Math.min(Math.max(f-h+u,n),Math.max(d+u-f,n)),e++}f++}_=!_}const m=c.length,p=new Uint8Array(4*m)
for(let e=0;e<m;++e){const t=(s?Math.sqrt(c[e]):c[e])/a
Object(n.a)(t,p,4*e)}return[p,l,31]}},2071:function(e,t,i){"use strict"
i.d(t,"a",(function(){return a}))
var n=i(23),r=i(1639),s=i(1489)
class a{constructor(e){this._rctx=e,this._store=new r.a}dispose(){this._store.forEach(e=>e.forEach(e=>e.dispose())),this._store.clear()}acquire(e,t,i,r){const a=this._store.get(e,t)
if(Object(n.l)(a))return a.ref(),a
const o=new s.a(this._rctx,e,t,i,r)
return o.ref(),this._store.set(e,t,o),o}get test(){let e=0
return this._store.forEach(t=>t.forEach(t=>e+=t.hasGLName?2:1)),{cachedWebGLObjects:e}}}},2129:function(e,t,i){"use strict"
function n(e){const{options:t,value:i}=e
return"number"==typeof t[i]}function r(e){let t=""
for(const i in e){const r=e[i]
if("boolean"==typeof r)r&&(t+=`#define ${i}\n`)
else if("number"==typeof r)t+=`#define ${i} ${r.toFixed()}\n`
else if("object"==typeof r)if(n(r)){const{value:e,options:n,namespace:s}=r,a=s?s+"_":""
for(const e in n)t+=`#define ${a}${e} ${n[e].toFixed()}\n`
t+=`#define ${i} ${a}${e}\n`}else{const e=r.options
let n=0
for(const i in e)t+=`#define ${e[i]} ${(n++).toFixed()}\n`
t+=`#define ${i} ${e[r.value]}\n`}}return t}i.d(t,"a",(function(){return r}))},2130:function(e,t,i){"use strict"
i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return r}))
var n=i(23)
class r{constructor(e){if(this.next=null,!Array.isArray(e))return void(this.data=e)
this.data=e[0]
let t=this
for(let i=1;i<e.length;i++)t.next=new r([e[i]]),t=t.next}*values(){let e=this
for(;e;)yield e.data,e=e.next}forEach(e){let t=this
for(;t;)e(t.data),t=t.next}find(e){var t
return e(this.data)?this:null==(t=this.next)?void 0:t.find(e)}max(e,t=this){const i=e(this.data)>e(t.data)?this:t
return this.next?this.next.max(e,i):i}remove(e,t=null){var i,n
return this===e?t?(t.next=this.next,t):this.next:null!=(i=null==(n=this.next)?void 0:n.remove(e,this))?i:null}get last(){return this.next?this.next.last:this}}class s{constructor(e){this._head=null,Object(n.k)(e)||(this._head=new r(e))}get head(){return this._head}maxAvailableSpace(){if(Object(n.k)(this._head))return 0
const e=this._head.max(e=>e.end-e.start)
return e.data.end-e.data.start}firstFit(e){if(Object(n.k)(this._head))return null
let t=null,i=this._head
for(;i;){const n=i.data.end-i.data.start
if(n===e)return t?t.next=i.next:this._head=i.next,i.data.start
if(n>e){const t=i.data.start
return i.data.start+=e,t}t=i,i=i.next}return null}free(e,t){const i=e+t
if(Object(n.k)(this._head)){const t=new r({start:e,end:i})
return void(this._head=t)}if(i<=this._head.data.start){if(i===this._head.data.start)return void(this._head.data.start-=t)
const n=new r({start:e,end:i})
return n.next=this._head,void(this._head=n)}let s=this._head,a=s.next
for(;a;){if(a.data.start>=i){if(s.data.end===e){if(s.data.end+=t,s.data.end===a.data.start){const e=a.data.end-a.data.start
return s.data.end+=e,void(s.next=a.next)}return}if(a.data.start===i)return void(a.data.start-=t)
const n=new r({start:e,end:i})
return n.next=s.next,void(s.next=n)}s=a,a=a.next}if(e===s.data.end)return void(s.data.end+=t)
const o=new r({start:e,end:i})
s.next=o}}},2295:function(e,t,i){"use strict"
i.d(t,"a",(function(){return a}))
var n,r=i(1111),s={}
n=function(){return function(e){var t={}
function i(n){if(t[n])return t[n].exports
var r=t[n]={exports:{},id:n,loaded:!1}
return e[n].call(r.exports,r,r.exports,i),r.loaded=!0,r.exports}return i.m=e,i.c=t,i.p="",i(0)}([function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.isNotPNG=function(e){return e===s},t.isNotAPNG=function(e){return e===a},t.default=function(e){var t=new Uint8Array(e)
if(Array.prototype.some.call(o,(function(e,i){return e!==t[i]})))return s
var i=!1
if(l(t,(function(e){return!(i="acTL"===e)})),!i)return a
var n=[],c=[],f=null,_=null,m=0,p=new r.APNG
if(l(t,(function(e,t,i,s){var a=new DataView(t.buffer)
switch(e){case"IHDR":f=t.subarray(i+8,i+8+s),p.width=a.getUint32(i+8),p.height=a.getUint32(i+12)
break
case"acTL":p.numPlays=a.getUint32(i+8+4)
break
case"fcTL":_&&(p.frames.push(_),m++),(_=new r.Frame).width=a.getUint32(i+8+4),_.height=a.getUint32(i+8+8),_.left=a.getUint32(i+8+12),_.top=a.getUint32(i+8+16)
var o=a.getUint16(i+8+20),l=a.getUint16(i+8+22)
0===l&&(l=100),_.delay=1e3*o/l,_.delay<=10&&(_.delay=100),p.playTime+=_.delay,_.disposeOp=a.getUint8(i+8+24),_.blendOp=a.getUint8(i+8+25),_.dataParts=[],0===m&&2===_.disposeOp&&(_.disposeOp=1)
break
case"fdAT":_&&_.dataParts.push(t.subarray(i+8+4,i+8+s))
break
case"IDAT":_&&_.dataParts.push(t.subarray(i+8,i+8+s))
break
case"IEND":c.push(u(t,i,12+s))
break
default:n.push(u(t,i,12+s))}})),_&&p.frames.push(_),0==p.frames.length)return a
var g=new Blob(n),b=new Blob(c)
return p.frames.forEach((function(e){var t=[]
t.push(o),f.set(d(e.width),0),f.set(d(e.height),4),t.push(h("IHDR",f)),t.push(g),e.dataParts.forEach((function(e){return t.push(h("IDAT",e))})),t.push(b),e.imageData=new Blob(t,{type:"image/png"}),delete e.dataParts,t=null})),p}
var n=function(e){return e&&e.__esModule?e:{default:e}}(i(1)),r=i(2),s=new Error("Not a PNG"),a=new Error("Not an animated PNG"),o=new Uint8Array([137,80,78,71,13,10,26,10])
function l(e,t){var i=new DataView(e.buffer),n=8,r=void 0,s=void 0,a=void 0
do{s=i.getUint32(n),a=t(r=c(e,n+4,4),e,n,s),n+=12+s}while(!1!==a&&"IEND"!=r&&n<e.length)}function c(e,t,i){var n=Array.prototype.slice.call(e.subarray(t,t+i))
return String.fromCharCode.apply(String,n)}function u(e,t,i){var n=new Uint8Array(i)
return n.set(e.subarray(t,t+i)),n}var h=function(e,t){var i=e.length+t.length,r=new Uint8Array(i+8),s=new DataView(r.buffer)
s.setUint32(0,t.length),r.set(function(e){for(var t=new Uint8Array(e.length),i=0;i<e.length;i++)t[i]=e.charCodeAt(i)
return t}(e),4),r.set(t,8)
var a=(0,n.default)(r,4,i)
return s.setUint32(i+4,a),r},d=function(e){return new Uint8Array([e>>>24&255,e>>>16&255,e>>>8&255,255&e])}},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=-1,r=t,s=t+(arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.length-t);r<s;r++)n=n>>>8^i[255&(n^e[r])]
return-1^n}
for(var i=new Uint32Array(256),n=0;n<256;n++){for(var r=n,s=0;s<8;s++)r=0!=(1&r)?3988292384^r>>>1:r>>>1
i[n]=r}},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.Frame=t.APNG=void 0
var n=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),r=function(e){return e&&e.__esModule?e:{default:e}}(i(3))
function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.APNG=function(){function e(){s(this,e),this.width=0,this.height=0,this.numPlays=0,this.playTime=0,this.frames=[]}return n(e,[{key:"createImages",value:function(){return Promise.all(this.frames.map((function(e){return e.createImage()})))}},{key:"getPlayer",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
return this.createImages().then((function(){return new r.default(t,e,i)}))}}]),e}(),t.Frame=function(){function e(){s(this,e),this.left=0,this.top=0,this.width=0,this.height=0,this.delay=0,this.disposeOp=0,this.blendOp=0,this.imageData=null,this.imageElement=null}return n(e,[{key:"createImage",value:function(){var e=this
return this.imageElement?Promise.resolve():new Promise((function(t,i){var n=URL.createObjectURL(e.imageData)
e.imageElement=document.createElement("img"),e.imageElement.onload=function(){URL.revokeObjectURL(n),t()},e.imageElement.onerror=function(){URL.revokeObjectURL(n),e.imageElement=null,i(new Error("Image creation error"))},e.imageElement.src=n}))}}]),e}()},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0})
var n=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),r=function(e){function t(e,i,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t)
var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))
return r.playbackRate=1,r._currentFrameNumber=0,r._ended=!1,r._paused=!0,r._numPlays=0,r._apng=e,r.context=i,r.stop(),n&&r.play(),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"renderNextFrame",value:function(){this._currentFrameNumber=(this._currentFrameNumber+1)%this._apng.frames.length,this._currentFrameNumber===this._apng.frames.length-1&&(this._numPlays++,0!==this._apng.numPlays&&this._numPlays>=this._apng.numPlays&&(this._ended=!0,this._paused=!0)),this._prevFrame&&1==this._prevFrame.disposeOp?this.context.clearRect(this._prevFrame.left,this._prevFrame.top,this._prevFrame.width,this._prevFrame.height):this._prevFrame&&2==this._prevFrame.disposeOp&&this.context.putImageData(this._prevFrameData,this._prevFrame.left,this._prevFrame.top)
var e=this.currentFrame
this._prevFrame=e,this._prevFrameData=null,2==e.disposeOp&&(this._prevFrameData=this.context.getImageData(e.left,e.top,e.width,e.height)),0==e.blendOp&&this.context.clearRect(e.left,e.top,e.width,e.height),this.context.drawImage(e.imageElement,e.left,e.top),this.emit("frame",this._currentFrameNumber),this._ended&&this.emit("end")}},{key:"play",value:function(){var e=this
this.emit("play"),this._ended&&this.stop(),this._paused=!1
var t=performance.now()+this.currentFrame.delay/this.playbackRate
requestAnimationFrame((function i(n){if(!e._ended&&!e._paused){if(n>=t){for(;n-t>=e._apng.playTime/e.playbackRate;)t+=e._apng.playTime/e.playbackRate,e._numPlays++
do{e.renderNextFrame(),t+=e.currentFrame.delay/e.playbackRate}while(!e._ended&&n>t)}requestAnimationFrame(i)}}))}},{key:"pause",value:function(){this._paused||(this.emit("pause"),this._paused=!0)}},{key:"stop",value:function(){this.emit("stop"),this._numPlays=0,this._ended=!1,this._paused=!0,this._currentFrameNumber=-1,this.context.clearRect(0,0,this._apng.width,this._apng.height),this.renderNextFrame()}},{key:"currentFrameNumber",get:function(){return this._currentFrameNumber}},{key:"currentFrame",get:function(){return this._apng.frames[this._currentFrameNumber]}},{key:"paused",get:function(){return this._paused}},{key:"ended",get:function(){return this._ended}}]),t}(function(e){return e&&e.__esModule?e:{default:e}}(i(4)).default)
t.default=r},function(e,t){function i(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function n(e){return"function"==typeof e}function r(e){return"object"==typeof e&&null!==e}function s(e){return void 0===e}e.exports=i,i.EventEmitter=i,i.prototype._events=void 0,i.prototype._maxListeners=void 0,i.defaultMaxListeners=10,i.prototype.setMaxListeners=function(e){if(!function(e){return"number"==typeof e}(e)||e<0||isNaN(e))throw TypeError("n must be a positive number")
return this._maxListeners=e,this},i.prototype.emit=function(e){var t,i,a,o,l,c
if(this._events||(this._events={}),"error"===e&&(!this._events.error||r(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t
var u=new Error('Uncaught, unspecified "error" event. ('+t+")")
throw u.context=t,u}if(s(i=this._events[e]))return!1
if(n(i))switch(arguments.length){case 1:i.call(this)
break
case 2:i.call(this,arguments[1])
break
case 3:i.call(this,arguments[1],arguments[2])
break
default:o=Array.prototype.slice.call(arguments,1),i.apply(this,o)}else if(r(i))for(o=Array.prototype.slice.call(arguments,1),a=(c=i.slice()).length,l=0;l<a;l++)c[l].apply(this,o)
return!0},i.prototype.addListener=function(e,t){var a
if(!n(t))throw TypeError("listener must be a function")
return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,n(t.listener)?t.listener:t),this._events[e]?r(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,r(this._events[e])&&!this._events[e].warned&&(a=s(this._maxListeners)?i.defaultMaxListeners:this._maxListeners)&&a>0&&this._events[e].length>a&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace()),this},i.prototype.on=i.prototype.addListener,i.prototype.once=function(e,t){if(!n(t))throw TypeError("listener must be a function")
var i=!1
function r(){this.removeListener(e,r),i||(i=!0,t.apply(this,arguments))}return r.listener=t,this.on(e,r),this},i.prototype.removeListener=function(e,t){var i,s,a,o
if(!n(t))throw TypeError("listener must be a function")
if(!this._events||!this._events[e])return this
if(a=(i=this._events[e]).length,s=-1,i===t||n(i.listener)&&i.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t)
else if(r(i)){for(o=a;o-- >0;)if(i[o]===t||i[o].listener&&i[o].listener===t){s=o
break}if(s<0)return this
1===i.length?(i.length=0,delete this._events[e]):i.splice(s,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},i.prototype.removeAllListeners=function(e){var t,i
if(!this._events)return this
if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this
if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t)
return this.removeAllListeners("removeListener"),this._events={},this}if(n(i=this._events[e]))this.removeListener(e,i)
else if(i)for(;i.length;)this.removeListener(e,i[i.length-1])
return delete this._events[e],this},i.prototype.listeners=function(e){return this._events&&this._events[e]?n(this._events[e])?[this._events[e]]:this._events[e].slice():[]},i.prototype.listenerCount=function(e){if(this._events){var t=this._events[e]
if(n(t))return 1
if(t)return t.length}return 0},i.listenerCount=function(e,t){return e.listenerCount(t)}}])},{get exports(){return s},set exports(e){s=e}}.exports=n()
const a=Object(r.b)(s)},2296:function(e,t,i){"use strict"
i.d(t,"a",(function(){return u})),i.d(t,"b",(function(){return p}))
var n={},r={},s={}
Object.defineProperty(s,"__esModule",{value:!0}),s.loop=s.conditional=s.parse=void 0,s.parse=function e(t,i){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n
if(Array.isArray(i))i.forEach((function(i){return e(t,i,n,r)}))
else if("function"==typeof i)i(t,n,r,e)
else{var s=Object.keys(i)[0]
Array.isArray(i[s])?(r[s]={},e(t,i[s],n,r[s])):r[s]=i[s](t,n,r,e)}return n},s.conditional=function(e,t){return function(i,n,r,s){t(i,n,r)&&s(i,e,n,r)}},s.loop=function(e,t){return function(i,n,r,s){for(var a=[],o=i.pos;t(i,n,r);){var l={}
if(s(i,e,n,l),i.pos===o)break
o=i.pos,a.push(l)}return a}}
var a={}
Object.defineProperty(a,"__esModule",{value:!0}),a.readBits=a.readArray=a.readUnsigned=a.readString=a.peekBytes=a.readBytes=a.peekByte=a.readByte=a.buildStream=void 0,a.buildStream=function(e){return{data:e,pos:0}}
a.readByte=function(){return function(e){return e.data[e.pos++]}},a.peekByte=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0
return function(t){return t.data[t.pos+e]}}
var o=function(e){return function(t){return t.data.subarray(t.pos,t.pos+=e)}}
a.readBytes=o,a.peekBytes=function(e){return function(t){return t.data.subarray(t.pos,t.pos+e)}},a.readString=function(e){return function(t){return Array.from(o(e)(t)).map((function(e){return String.fromCharCode(e)})).join("")}},a.readUnsigned=function(e){return function(t){var i=o(2)(t)
return e?(i[1]<<8)+i[0]:(i[0]<<8)+i[1]}},a.readArray=function(e,t){return function(i,n,r){for(var s="function"==typeof t?t(i,n,r):t,a=o(e),l=new Array(s),c=0;c<s;c++)l[c]=a(i)
return l}},a.readBits=function(e){return function(t){for(var i=function(e){return e.data[e.pos++]}(t),n=new Array(8),r=0;r<8;r++)n[7-r]=!!(i&1<<r)
return Object.keys(e).reduce((function(t,i){var r=e[i]
return r.length?t[i]=function(e,t,i){for(var n=0,r=0;r<i;r++)n+=e[t+r]&&Math.pow(2,i-r-1)
return n}(n,r.index,r.length):t[i]=n[r.index],t}),{})}},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=s,i=a,n={blocks:function(e){for(var t=[],n=e.data.length,r=0,s=(0,i.readByte)()(e);0!==s&&s;s=(0,i.readByte)()(e)){if(e.pos+s>=n){var a=n-e.pos
t.push((0,i.readBytes)(a)(e)),r+=a
break}t.push((0,i.readBytes)(s)(e)),r+=s}for(var o=new Uint8Array(r),l=0,c=0;c<t.length;c++)o.set(t[c],l),l+=t[c].length
return o}},r=(0,t.conditional)({gce:[{codes:(0,i.readBytes)(2)},{byteSize:(0,i.readByte)()},{extras:(0,i.readBits)({future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}})},{delay:(0,i.readUnsigned)(!0)},{transparentColorIndex:(0,i.readByte)()},{terminator:(0,i.readByte)()}]},(function(e){var t=(0,i.peekBytes)(2)(e)
return 33===t[0]&&249===t[1]})),o=(0,t.conditional)({image:[{code:(0,i.readByte)()},{descriptor:[{left:(0,i.readUnsigned)(!0)},{top:(0,i.readUnsigned)(!0)},{width:(0,i.readUnsigned)(!0)},{height:(0,i.readUnsigned)(!0)},{lct:(0,i.readBits)({exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}})}]},(0,t.conditional)({lct:(0,i.readArray)(3,(function(e,t,i){return Math.pow(2,i.descriptor.lct.size+1)}))},(function(e,t,i){return i.descriptor.lct.exists})),{data:[{minCodeSize:(0,i.readByte)()},n]}]},(function(e){return 44===(0,i.peekByte)()(e)})),l=(0,t.conditional)({text:[{codes:(0,i.readBytes)(2)},{blockSize:(0,i.readByte)()},{preData:function(e,t,n){return(0,i.readBytes)(n.text.blockSize)(e)}},n]},(function(e){var t=(0,i.peekBytes)(2)(e)
return 33===t[0]&&1===t[1]})),c=(0,t.conditional)({application:[{codes:(0,i.readBytes)(2)},{blockSize:(0,i.readByte)()},{id:function(e,t,n){return(0,i.readString)(n.blockSize)(e)}},n]},(function(e){var t=(0,i.peekBytes)(2)(e)
return 33===t[0]&&255===t[1]})),u=(0,t.conditional)({comment:[{codes:(0,i.readBytes)(2)},n]},(function(e){var t=(0,i.peekBytes)(2)(e)
return 33===t[0]&&254===t[1]})),h=[{header:[{signature:(0,i.readString)(3)},{version:(0,i.readString)(3)}]},{lsd:[{width:(0,i.readUnsigned)(!0)},{height:(0,i.readUnsigned)(!0)},{gct:(0,i.readBits)({exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}})},{backgroundColorIndex:(0,i.readByte)()},{pixelAspectRatio:(0,i.readByte)()}]},(0,t.conditional)({gct:(0,i.readArray)(3,(function(e,t){return Math.pow(2,t.lsd.gct.size+1)}))},(function(e,t){return t.lsd.gct.exists})),{frames:(0,t.loop)([r,c,u,o,l],(function(e){var t=(0,i.peekByte)()(e)
return 33===t||44===t}))}]
e.default=h}(r)
var l={}
Object.defineProperty(l,"__esModule",{value:!0}),l.deinterlace=void 0,l.deinterlace=function(e,t){for(var i=new Array(e.length),n=e.length/t,r=function(n,r){var s=e.slice(r*t,(r+1)*t)
i.splice.apply(i,[n*t,t].concat(s))},s=[0,4,2,1],a=[8,8,4,2],o=0,l=0;l<4;l++)for(var c=s[l];c<n;c+=a[l])r(c,o),o++
return i}
var c={}
Object.defineProperty(c,"__esModule",{value:!0}),c.lzw=void 0,c.lzw=function(e,t,i){var n,r,s,a,o,l,c,u,h,d,f,_,m,p,g,b,v=4096,x=i,y=new Array(i),O=new Array(v),T=new Array(v),S=new Array(4097)
for(o=1+(r=1<<(d=e)),n=r+2,c=-1,s=(1<<(a=d+1))-1,u=0;u<r;u++)O[u]=0,T[u]=u
for(f=_=m=p=g=b=0,h=0;h<x;){if(0===p){if(_<a){f+=t[b]<<_,_+=8,b++
continue}if(u=f&s,f>>=a,_-=a,u>n||u==o)break
if(u==r){s=(1<<(a=d+1))-1,n=r+2,c=-1
continue}if(-1==c){S[p++]=T[u],c=u,m=u
continue}for(l=u,u==n&&(S[p++]=m,u=c);u>r;)S[p++]=T[u],u=O[u]
m=255&T[u],S[p++]=m,n<v&&(O[n]=c,T[n]=m,0==(++n&s)&&n<v&&(a++,s+=n)),c=l}p--,y[g++]=S[p],h++}for(h=g;h<x;h++)y[h]=0
return y},Object.defineProperty(n,"__esModule",{value:!0})
var u=n.decompressFrames=n.decompressFrame=p=n.parseGIF=void 0,h=function(e){return e&&e.__esModule?e:{default:e}}(r),d=s,f=a,_=l,m=c,p=n.parseGIF=function(e){var t=new Uint8Array(e)
return(0,d.parse)((0,f.buildStream)(t),h.default)},g=function(e,t,i){if(e.image){var n=e.image,r=n.descriptor.width*n.descriptor.height,s=(0,m.lzw)(n.data.minCodeSize,n.data.blocks,r)
n.descriptor.lct.interlaced&&(s=(0,_.deinterlace)(s,n.descriptor.width))
var a={pixels:s,dims:{top:e.image.descriptor.top,left:e.image.descriptor.left,width:e.image.descriptor.width,height:e.image.descriptor.height}}
return n.descriptor.lct&&n.descriptor.lct.exists?a.colorTable=n.lct:a.colorTable=t,e.gce&&(a.delay=10*(e.gce.delay||10),a.disposalType=e.gce.extras.disposal,e.gce.extras.transparentColorGiven&&(a.transparentIndex=e.gce.transparentColorIndex)),i&&(a.patch=function(e){for(var t=e.pixels.length,i=new Uint8ClampedArray(4*t),n=0;n<t;n++){var r=4*n,s=e.pixels[n],a=e.colorTable[s]||[0,0,0]
i[r]=a[0],i[r+1]=a[1],i[r+2]=a[2],i[r+3]=s!==e.transparentIndex?255:0}return i}(a)),a}console.warn("gif frame does not have associated image.")}
n.decompressFrame=g,u=n.decompressFrames=function(e,t){return e.frames.filter((function(e){return e.image})).map((function(i){return g(i,e.gct,t)}))}},2297:function(e,t,i){"use strict"
i.d(t,"a",(function(){return c})),i.d(t,"b",(function(){return o}))
var n=i(235),r=i(23),s=i(2130)
const a=Object(n.a)("esri-2d-log-allocations")
class o{constructor(e,t){this._array=e,this._pool=t}get array(){return this._array}get length(){return this._array.length}static create(e,t){const i=t.acquire(e)
return new o(i,t)}expand(e){const t=this._pool.acquire(e)
t.set(this._array),this._pool.release(this._array),this._array=t}destroy(){this._pool.release(this._array)}set(e,t){this._array.set(e._array,t)}slice(){const e=this._pool.acquire(this._array.byteLength)
return e.set(this._array),new o(e,this._pool)}}class l{constructor(){this._data=new ArrayBuffer(l.BYTE_LENGTH),this._freeList=new s.a({start:0,end:this._data.byteLength})}static get BYTE_LENGTH(){return 64e6}get buffer(){return this._data}allocate(e){const t=this._freeList.firstFit(e)
return Object(r.k)(t)?null:new Uint32Array(this._data,t,e/Uint32Array.BYTES_PER_ELEMENT)}free(e){this._freeList.free(e.byteOffset,e.byteLength)}}class c{constructor(){this._bytesAllocated=0,this._pages=[],this._pagesByBuffer=new Map,this._addPage()}destroy(){this._pages=[],this._pagesByBuffer=null}get _bytesTotal(){return this._pages.length*l.BYTE_LENGTH}acquire(e){if(this._bytesAllocated+=e,a&&console.log(`Allocating ${e}, (${this._bytesAllocated} / ${this._bytesTotal})`),e>l.BYTE_LENGTH)return new Uint32Array(e/Uint32Array.BYTES_PER_ELEMENT)
for(const t of this._pages){const i=t.allocate(e)
if(Object(r.l)(i))return i}return Object(r.w)(this._addPage().allocate(e),"Expected to allocate page")}release(e){this._bytesAllocated-=e.byteLength,a&&console.log(`Freeing ${e.byteLength}, (${this._bytesAllocated} / ${this._bytesTotal})`)
const t=this._pagesByBuffer.get(e.buffer)
t&&t.free(e)}_addPage(){const e=new l
return this._pages.push(e),this._pagesByBuffer.set(e.buffer,e),e}}},2298:function(e,t,i){"use strict"
i.d(t,"a",(function(){return c}))
var n=i(991),r=i(1350),s=i(2051),a=i(1422),o=i(1684),l=i(1230)
class c{constructor(e){this._resourceManager=e,this._rasterizationCanvas=null}dispose(){this._rasterizationCanvas=null}rasterizeJSONResource(e,t,i){if(this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),"simple-fill"===e.type||"esriSFS"===e.type){const[i,r,a]=Object(s.b)(this._rasterizationCanvas,e.style,t)
return{size:[r,a],image:new Uint32Array(i.buffer),sdf:!1,simplePattern:!0,anchorX:0,anchorY:0,rasterizationScale:Object(n.p)(Math.ceil(t))}}if("simple-line"===e.type||"esriSLS"===e.type||"line"===e.type&&e.dashTemplate){let t,i
if("simple-line"===e.type||"esriSLS"===e.type)switch(t=Object(r.d)(e.style,e.cap),e.cap){case"butt":i="Butt"
break
case"square":i="Square"
break
default:i="Round"}else t=e.dashTemplate,i=e.cim.capStyle
const[n,a,o]=Object(s.a)(t,i)
return{size:[a,o],image:new Uint32Array(n.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}}let l,c=null,u=null,h=1
if("simple-marker"===e.type||"esriSMS"===e.type||"line-marker"===e.type?(l=r.a.fromSimpleMarker(e),u=Object(o.c)(l)):e.cim&&"CIMHatchFill"===e.cim.type?(l=r.a.fromCIMHatchFill(e.cim,t),c=new a.a(l.frame.xmin,-l.frame.ymax,l.frame.xmax-l.frame.xmin,l.frame.ymax-l.frame.ymin),h=t):e.cim.markerPlacement&&"CIMMarkerPlacementInsidePolygon"===e.cim.markerPlacement.type?(l=r.a.fromCIMInsidePolygon(e.cim),c=new a.a(l.frame.xmin,-l.frame.ymax,l.frame.xmax-l.frame.xmin,l.frame.ymax-l.frame.ymin)):(l=e.cim,e.avoidSDFRasterization||(u=Object(o.c)(l))),u&&!i){const[e,t,i]=Object(o.a)(u)
return e?{size:[t,i],image:new Uint32Array(e.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0,rasterizationScale:h}:null}const[d,f,_,m,p]=r.a.rasterize(this._rasterizationCanvas,l,c,this._resourceManager,!i)
return d?{size:[f,_],image:new Uint32Array(d.buffer),sdf:!1,simplePattern:!1,anchorX:m,anchorY:p}:null}rasterizeImageResource(e,t,i,n){this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),this._rasterizationCanvas.width=e,this._rasterizationCanvas.height=t
const r=this._rasterizationCanvas.getContext("2d")
i instanceof ImageData?r.putImageData(i,0,0):(i.setAttribute("width",e+"px"),i.setAttribute("height",t+"px"),r.drawImage(i,0,0,e,t))
const s=r.getImageData(0,0,e,t),a=new Uint8Array(s.data)
if(n)for(const e of n)if(e&&e.oldColor&&4===e.oldColor.length&&e.newColor&&4===e.newColor.length){const[t,i,n,r]=e.oldColor,[s,o,l,c]=e.newColor
if(t===s&&i===o&&n===l&&r===c)continue
for(let e=0;e<a.length;e+=4)t===a[e]&&i===a[e+1]&&n===a[e+2]&&r===a[e+3]&&(a[e]=s,a[e+1]=o,a[e+2]=l,a[e+3]=c)}let o
for(let e=0;e<a.length;e+=4)o=a[e+3]/255,a[e]=a[e]*o,a[e+1]=a[e+1]*o,a[e+2]=a[e+2]*o
let c=a,u=e,h=t
const d=512
if(u>=d||h>=d){const i=u/h
i>1?(u=d,h=Math.round(d/i)):(h=d,u=Math.round(d*i)),c=new Uint8Array(4*u*h)
const n=new Uint8ClampedArray(c.buffer)
Object(l.B)(a,e,t,n,u,h,!1)}return{size:[u,h],image:new Uint32Array(c.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}}},2523:function(e,t,i){"use strict"
i.d(t,"a",(function(){return U}))
var n=i(23),r=i(973),s=i(1152),a=i(1473),o=i(1088),l=i(984)
class c{constructor(){this.blend=!1,this.blendColor={r:0,g:0,b:0,a:0},this.blendFunction={srcRGB:l.b.ONE,dstRGB:l.b.ZERO,srcAlpha:l.b.ONE,dstAlpha:l.b.ZERO},this.blendEquation={mode:l.c.ADD,modeAlpha:l.c.ADD},this.colorMask={r:!0,g:!0,b:!0,a:!0},this.faceCulling=!1,this.cullFace=l.n.BACK,this.frontFace=l.j.CCW,this.scissorTest=!1,this.scissorRect={x:0,y:0,width:0,height:0},this.depthTest=!1,this.depthFunction=l.h.LESS,this.clearDepth=1,this.depthWrite=!0,this.depthRange={zNear:0,zFar:1},this.viewport=null,this.stencilTest=!1,this.polygonOffsetFill=!1,this.polygonOffset=[0,0],this.stencilFunction={face:l.n.FRONT_AND_BACK,func:l.h.ALWAYS,ref:0,mask:1},this.clearStencil=0,this.stencilWriteMask=1,this.stencilOperation={face:l.n.FRONT_AND_BACK,fail:l.w.KEEP,zFail:l.w.KEEP,zPass:l.w.KEEP},this.clearColor={r:0,g:0,b:0,a:0},this.program=null,this.vertexBuffer=null,this.indexBuffer=null,this.uniformBuffer=null,this.pixelPackBuffer=null,this.pixelUnpackBuffer=null,this.copyReadBuffer=null,this.copyWriteBuffer=null,this.uniformBufferBindingPoints=new Array,this.readFramebuffer=null,this.drawFramebuffer=null,this.renderbuffer=null,this.activeTexture=0,this.textureUnitMap=new Array,this.vertexArrayObject=null}}class u{constructor(e){this._allocations=new Map,e?Error.stackTraceLimit=1/0:(this.add=()=>{},this.remove=()=>{})}add(e){this._allocations.set(e,(new Error).stack)}remove(e){this._allocations.delete(e)}get information(){let e=""
if(this._allocations.size>0){e+=this._allocations.size+" live object allocations:\n"
const t=new Map
this._allocations.forEach(e=>{var i
t.set(e,(null!=(i=t.get(e))?i:0)+1)}),t.forEach((t,i)=>{const n=i.split("\n")
n.shift(),n.shift(),e+=`${t}: ${n.shift()}\n`,n.forEach(t=>e+=`   ${t}\n`)})}return e}}class h{constructor(){for(this._current=new Array,this._max=new Array,this._allocations=new u(!1);this._current.length<l.t.COUNT;)this._current.push(0),this._max.push(0)}resetMax(){for(this._max.length=0;this._max.length<this._current.length;)this._max.push(0)}increment(e,t){const i=++this._current[e]
this._max[e]=Math.max(i,this._max[e]),this._allocations.add(t)}decrement(e,t){--this._current[e],this._allocations.remove(t)}get max(){return this._max}get current(){return this._current}get total(){return this.current.reduce((e,t)=>e+t,0)}get resourceInformation(){let e=""
if(this.total>0){e+="Live objects:\n"
for(let t=0;t<l.t.COUNT;++t){const i=this._current[t]
i>0&&(e+=`${l.t[t]}: ${i}\n`)}}return e+=this._allocations.information,e}}var d=i(2071),f=i(1104),_=i(1072),m=i(1314),p=i(235),g=i(994),b=i(1068),v=i(1171)
class x{constructor(){this._result=!1}dispose(){this._program=Object(n.f)(this._program)}get result(){return Object(n.l)(this._program)&&(this._result=this._test(this._program),this.dispose()),this._result}}class y extends x{constructor(e){super(),this._rctx=e,this._dummyProgram=null,this._rctx.type===o.a.WEBGL2&&Object(p.a)("mac")&&Object(p.a)("chrome")&&(this._program=this._prepareProgram(),this._dummyProgram=this._prepareDummyProgram())}dispose(){var e
super.dispose(),null!=(e=this._dummyProgram)&&e.dispose(),this._dummyProgram=null}_test(e){const t=this._rctx
t.resetState()
const i=new v.a(t,{colorTarget:l.y.TEXTURE,depthStencilTarget:l.m.NONE},{target:l.A.TEXTURE_2D,wrapMode:l.B.CLAMP_TO_EDGE,pixelFormat:l.p.RGBA,dataType:l.q.UNSIGNED_BYTE,samplingMode:l.z.NEAREST,width:1,height:1}),n=b.a.createIndex(this._rctx,l.D.STATIC_DRAW,new Uint8Array([0]))
t.bindFramebuffer(i),t.setViewport(0,0,1,1),t.useProgram(this._dummyProgram),t.bindBuffer(n,l.d.ELEMENT_ARRAY_BUFFER),t.drawElements(l.r.POINTS,1,l.k.UNSIGNED_BYTE,0),t.useProgram(e),t.bindVAO(null),t.drawArrays(l.r.TRIANGLES,0,258)
const r=new Uint8Array(4)
return i.readPixels(0,0,1,1,l.p.RGBA,l.q.UNSIGNED_BYTE,r),i.dispose(),n.dispose(),255===r[0]}_prepareProgram(){const e=`\n    precision highp float;\n\n    varying float triangleId;\n\n    const vec3 triangleVertices[3] = vec3[3](vec3(-0.5, -0.5, 0.0), vec3(0.5, -0.5, 0.0), vec3(0.0, 0.5, 0.0));\n\n    void main(void) {\n      triangleId = floor(float(gl_VertexID)/3.0);\n\n      vec3 position = triangleVertices[gl_VertexID % 3];\n      float offset = triangleId / ${g.b.float(85)};\n      position.z = 0.5 - offset;\n\n      gl_Position = vec4(position, 1.0);\n    }\n    `,t=`\n    precision highp float;\n\n    varying float triangleId;\n\n    void main(void) {\n      gl_FragColor = triangleId == ${g.b.float(85)} ? vec4(0.0, 1.0, 0.0, 1.0) : vec4(1.0, 0.0, 0.0, 1.0);\n    }\n    `
return this._rctx.programCache.acquire(e,t,new Map([]))}_prepareDummyProgram(){return this._rctx.programCache.acquire("\n    void main(void) {\n      gl_Position = vec4(0.0, 0.0, float(gl_VertexID)-2.0, 1.0);\n    }","\n    void main(void) {\n      gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n    }",new Map([]))}}var O=i(1370),T=i(981),S=i(1826),w=i(1116),E=i(1202)
class M extends x{constructor(e){super(),this._rctx=e,this._program=C(this._rctx,!1),this._obfuscated=C(this._rctx,!0)}dispose(){super.dispose(),this._obfuscated=Object(n.f)(this._obfuscated)}_test(e){if(Object(p.a)("force-double-precision-obfuscation"))return!0
if(Object(n.k)(this._obfuscated))return!1
const t=this._runProgram(e),i=this._runProgram(this._obfuscated)
return 0!==t&&(0===i||t/i>5)}_runProgram(e){const t=this._rctx
t.resetState()
const i=new v.a(t,{colorTarget:l.y.TEXTURE,depthStencilTarget:l.m.NONE},{target:l.A.TEXTURE_2D,wrapMode:l.B.CLAMP_TO_EDGE,pixelFormat:l.p.RGBA,dataType:l.q.UNSIGNED_BYTE,samplingMode:l.z.NEAREST,width:1,height:1}),n=b.a.createVertex(t,l.D.STATIC_DRAW,new Uint16Array([0,0,1,0,0,1,1,1])),r=new w.a(t,new Map([["position",0]]),{geometry:[new E.a("position",2,l.k.UNSIGNED_SHORT,0,4)]},{geometry:n}),s=Object(T.h)(5633261.287538229,2626832.878767164,1434988.0495278358),a=Object(T.h)(5633271.46742708,2626873.6381334523,1434963.231608387),o=new Float32Array(6)
Object(S.a)(s,o,3)
const c=new Float32Array(6)
Object(S.a)(a,c,3),t.useProgram(e),e.setUniform3f("u_highA",o[0],o[2],o[4]),e.setUniform3f("u_lowA",o[1],o[3],o[5]),e.setUniform3f("u_highB",c[0],c[2],c[4]),e.setUniform3f("u_lowB",c[1],c[3],c[5]),t.bindFramebuffer(i),t.setViewport(0,0,1,1),t.bindVAO(r),t.drawArrays(l.r.TRIANGLE_STRIP,0,4)
const u=new Uint8Array(4)
i.readPixels(0,0,1,1,l.p.RGBA,l.q.UNSIGNED_BYTE,u),r.dispose(!1),n.dispose(),i.dispose()
const h=(s[2]-a[2])/25,d=Object(O.b)(u)
return Math.abs(h-d)}}function C(e,t){const i=`\n\n  precision highp float;\n\n  attribute vec2 position;\n\n  uniform vec3 u_highA;\n  uniform vec3 u_lowA;\n  uniform vec3 u_highB;\n  uniform vec3 u_lowB;\n\n  varying vec4 v_color;\n\n  ${t?"#define DOUBLE_PRECISION_REQUIRES_OBFUSCATION":""}\n\n  #ifdef DOUBLE_PRECISION_REQUIRES_OBFUSCATION\n\n  vec3 dpPlusFrc(vec3 a, vec3 b) {\n    return mix(a, a + b, vec3(notEqual(b, vec3(0))));\n  }\n\n  vec3 dpMinusFrc(vec3 a, vec3 b) {\n    return mix(vec3(0), a - b, vec3(notEqual(a, b)));\n  }\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = dpPlusFrc(hiA, hiB);\n    vec3 e = dpMinusFrc(t1, hiA);\n    vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;\n    return t1 + t2;\n  }\n\n  #else\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = hiA + hiB;\n    vec3 e = t1 - hiA;\n    vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;\n    return t1 + t2;\n  }\n\n  #endif\n\n  const float MAX_RGBA_FLOAT =\n    255.0 / 256.0 +\n    255.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 / 256.0;\n\n  const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);\n\n  vec4 float2rgba(const float value) {\n    // Make sure value is in the domain we can represent\n    float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);\n\n    // Decompose value in 32bit fixed point parts represented as\n    // uint8 rgba components. Decomposition uses the fractional part after multiplying\n    // by a power of 256 (this removes the bits that are represented in the previous\n    // component) and then converts the fractional part to 8bits.\n    vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);\n\n    // Convert uint8 values (from 0 to 255) to floating point representation for\n    // the shader\n    const float toU8AsFloat = 1.0 / 255.0;\n\n    return fixedPointU8 * toU8AsFloat;\n  }\n\n  void main() {\n    vec3 val = dpAdd(u_highA, u_lowA, -u_highB, -u_lowB);\n\n    v_color = float2rgba(val.z / 25.0);\n\n    gl_Position = vec4(position * 2.0 - 1.0, 0.0, 1.0);\n  }\n  `
return e.programCache.acquire(i,"\n  precision highp float;\n\n  varying vec4 v_color;\n\n  void main() {\n    gl_FragColor = v_color;\n  }\n  ",new Map([["position",0]]))}var I=i(1276),P=i(2045)
class A extends x{constructor(e){var t,i,n,r,s
super(),this._rctx=e,e.gl&&(e.type!==o.a.WEBGL1?null!=(n=e.capabilities.textureFloat)&&n.textureFloat&&null!=(r=e.capabilities.colorBufferFloat)&&r.textureFloat&&null!=(s=e.capabilities.colorBufferFloat)&&s.floatBlend&&(this._program=e.programCache.acquire("\n    precision highp float;\n    attribute vec2 a_pos;\n\n    void main() {\n      gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n    }\n    ","\n     precision highp float;\n\n     void main() {\n      gl_FragColor = vec4(0.5, 0.5, 0.5, 0.5);\n     }\n    ",new Map([["a_pos",0]]))):this._result=!(null==(t=e.capabilities.textureFloat)||!t.textureFloat||null==(i=e.capabilities.colorBufferFloat)||!i.textureFloat))}_test(e){const t=this._rctx,i=new v.a(t,{colorTarget:l.y.TEXTURE,depthStencilTarget:l.m.NONE},{target:l.A.TEXTURE_2D,wrapMode:l.B.CLAMP_TO_EDGE,pixelFormat:l.p.RGBA,dataType:l.q.FLOAT,internalFormat:l.v.RGBA32F,samplingMode:l.z.NEAREST,width:1,height:1}),n=b.a.createVertex(t,l.D.STATIC_DRAW,new Uint16Array([0,0,1,0,0,1,1,1])),r=new w.a(t,new Map([["a_pos",0]]),{geometry:[new E.a("a_pos",2,l.k.UNSIGNED_SHORT,0,4)]},{geometry:n})
t.useProgram(e)
const s=t.getBoundFramebufferObject(),{x:a,y:o,width:c,height:u}=t.getViewport()
t.bindFramebuffer(i),t.setViewport(0,0,1,1),t.bindVAO(r),t.drawArrays(l.r.TRIANGLE_STRIP,0,4)
const h=Object(f.g)({blending:I.c})
t.setPipelineState(h),t.drawArrays(l.r.TRIANGLE_STRIP,0,4),P.a.init(t)
const d=t.gl.getError()
return t.setViewport(a,o,c,u),t.bindFramebuffer(s),r.dispose(!1),n.dispose(),i.dispose(),1282!==d||(console.warn("Device claims support for WebGL extension EXT_float_blend but does not support it. Using fall back."),!1)}}var R=i(233)
class F extends x{constructor(e){super(),this._rctx=e,this._program=e.programCache.acquire("\n      precision highp float;\n      attribute vec2 a_pos;\n      uniform highp sampler2D u_texture;\n      varying vec4 v_color;\n\n      float getBit(in float bitset, in int bitIndex) {\n        float offset = pow(2.0, float(bitIndex));\n        return mod(floor(bitset / offset), 2.0);\n      }\n\n      void main() {\n        vec4 value = texture2D(u_texture, vec2(0.0));\n        float bit = getBit(value.x * 255.0, 1);\n\n        v_color = bit * vec4(1.0);\n        gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n      }\n      ","\n      precision highp float;\n      varying vec4 v_color;\n\n      void main() {\n        gl_FragColor = v_color;\n      }\n      ",new Map([["a_pos",0]]))}_test(e){const t=this._rctx,i=new v.a(t,{colorTarget:l.y.TEXTURE,depthStencilTarget:l.m.NONE},{target:l.A.TEXTURE_2D,wrapMode:l.B.CLAMP_TO_EDGE,pixelFormat:l.p.RGBA,dataType:l.q.UNSIGNED_BYTE,samplingMode:l.z.NEAREST,width:1,height:1}),n=new Uint8Array(4),r=b.a.createVertex(t,l.D.STATIC_DRAW,new Uint16Array([0,0,1,0,0,1,1,1])),s=new w.a(t,new Map([["a_position",0]]),{geometry:[new E.a("a_position",2,l.k.SHORT,0,4)]},{geometry:r})
t.useProgram(e)
const a=new _.a(t,{target:l.A.TEXTURE_2D,wrapMode:l.B.CLAMP_TO_EDGE,pixelFormat:l.p.RGBA,dataType:l.q.UNSIGNED_BYTE,samplingMode:l.z.NEAREST,width:1,height:1},new Uint8Array([2,255,0,0]))
e.setUniform1i("u_texture",0),t.bindTexture(a,0)
const o=t.getBoundFramebufferObject()
t.bindFramebuffer(i),t.useProgram(e)
const{x:c,y:u,width:h,height:d}=t.getViewport()
t.setViewport(0,0,1,1),t.bindVAO(s),t.drawArrays(l.r.TRIANGLE_STRIP,0,4),t.setViewport(c,u,h,d),i.readPixels(0,0,1,1,l.p.RGBA,l.q.UNSIGNED_BYTE,n),s.dispose(!1),r.dispose(),i.dispose()
const f=255!==n[0]||255!==n[1]||255!==n[2]||255!==n[3]
return f&&R.a.getLogger("esri.views.webgl.testSamplerPrecision").warn(`A problem was detected with your graphics driver. Your driver does not appear to honor sampler precision specifiers, which may result in rendering issues due to numerical instability. We recommend ensuring that your drivers have been updated to the latest version. Applying lowp sampler workaround. [${n[0]}.${n[1]}.${n[2]}.${n[3]}]`),t.bindFramebuffer(o),f}}var L=i(1367)
class D extends x{constructor(e){super(),this._rctx=e,this._image=new Image,this._image.src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='5' height='5' version='1.1' viewBox='0 0 5 5' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='5' height='5' fill='%23f00' fill-opacity='.5'/%3E%3C/svg%3E%0A",this._image.width=5,this._image.height=5,this._image.decode(),this._program=e.programCache.acquire("\n    precision highp float;\n\n    attribute vec2 a_pos;\n    varying vec2 v_uv;\n\n    void main() {\n      v_uv = a_pos;\n      gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n    }\n    ","\n    precision highp float;\n\n    varying vec2 v_uv;\n    uniform sampler2D u_texture;\n\n    void main() {\n      gl_FragColor = texture2D(u_texture, v_uv);\n    }\n    ",new Map([["a_pos",0]]))}dispose(){super.dispose(),this._image.src=""}_test(e){const t=this._rctx
if(!t.gl)return e.dispose(),!0
const i=new v.a(t,{colorTarget:l.y.TEXTURE,depthStencilTarget:l.m.NONE},{target:l.A.TEXTURE_2D,wrapMode:l.B.CLAMP_TO_EDGE,pixelFormat:l.p.RGBA,dataType:l.q.UNSIGNED_BYTE,samplingMode:l.z.NEAREST,width:1,height:1}),n=b.a.createVertex(t,l.D.STATIC_DRAW,new Uint16Array([0,0,1,0,0,1,1,1])),r=new w.a(t,new Map([["a_pos",0]]),L.b,{geometry:n}),s=new _.a(t,{dataType:l.q.UNSIGNED_BYTE,pixelFormat:l.p.RGBA,preMultiplyAlpha:!1,wrapMode:l.B.CLAMP_TO_EDGE,samplingMode:l.z.LINEAR},this._image)
t.useProgram(e),t.bindTexture(s,0),e.setUniform1i("u_texture",0)
const a=t.getBoundFramebufferObject(),{x:o,y:c,width:u,height:h}=t.getViewport()
t.bindFramebuffer(i),t.setViewport(0,0,1,1),t.setClearColor(0,0,0,0),t.setBlendingEnabled(!1),t.clearSafe(l.e.COLOR_BUFFER_BIT),t.bindVAO(r),t.drawArrays(l.r.TRIANGLE_STRIP,0,4)
const d=new Uint8Array(4)
return i.readPixels(0,0,1,1,l.p.RGBA,l.q.UNSIGNED_BYTE,d),r.dispose(!1),n.dispose(),i.dispose(),s.dispose(),t.setViewport(o,c,u,h),t.bindFramebuffer(a),255!==d[0]}}class j{constructor(e){this.rctx=e,this.floatBufferBlend=new A(e),this.svgPremultipliesAlpha=new D(e),this.doublePrecisionRequiresObfuscation=new M(e),this.ignoresSamplerPrecision=new F(e),this.drawArraysRequiresIndicesTypeReset=new y(e)}dispose(){this.ignoresSamplerPrecision.dispose(),this.doublePrecisionRequiresObfuscation.dispose(),this.svgPremultipliesAlpha.dispose(),this.floatBufferBlend.dispose(),this.drawArraysRequiresIndicesTypeReset.dispose()}}var B=i(1934),z=i(1615)
function N(e,t,i,n,r){if(n&&Object(z.a)(e))return!0
if(t[i])return!1
for(const t of r)if(e.getExtension(t))return!0
return!1}class k{constructor(e,t){this._gl=e,this._instancing=null,this._vertexArrayObject=null,this._compressedTextureETC=null,this._compressedTextureS3TC=null,this._textureFilterAnisotropic=null,this._textureFloat=null,this._colorBufferFloat=null,this._minMaxBlending=null,this._loseContext=null,this._drawBuffers=null,this._textureNorm16=null,this._depthTexture=null,this._standardDerivatives=null,this._shaderTextureLOD=null,this._fragDepth=null,this._textureFloatLinear=null,this._disabledExtensions=t.disabledExtensions||{},this._debugWebGLExtensions=t.debugWebGLExtensions||{}}get drawBuffers(){return this._drawBuffers||(this._drawBuffers=function(e,t){if(t.disjointTimerQuery)return null
if(Object(z.a)(e))return{drawBuffers:e.drawBuffers.bind(e),MAX_DRAW_BUFFERS:e.MAX_DRAW_BUFFERS,MAX_COLOR_ATTACHMENTS:e.MAX_COLOR_ATTACHMENTS}
if(t.drawBuffers)return null
const i=e.getExtension("WEBGL_draw_buffers")
return i?{drawBuffers:i.drawBuffersWEBGL.bind(i),MAX_DRAW_BUFFERS:i.MAX_DRAW_BUFFERS_WEBGL,MAX_COLOR_ATTACHMENTS:i.MAX_COLOR_ATTACHMENTS_WEBGL}:null}(this._gl,this._disabledExtensions)),this._drawBuffers}get instancing(){return this._instancing||(this._instancing=function(e){if(Object(z.a)(e))return e
const t=e.getExtension("ANGLE_instanced_arrays")
return t?{drawArraysInstanced:t.drawArraysInstancedANGLE.bind(t),drawElementsInstanced:t.drawElementsInstancedANGLE.bind(t),vertexAttribDivisor:t.vertexAttribDivisorANGLE.bind(t)}:null}(this._gl)),this._instancing}get vao(){return this._vertexArrayObject||(this._vertexArrayObject=function(e,t){if(Object(z.a)(e))return{createVertexArray:e.createVertexArray.bind(e),deleteVertexArray:e.deleteVertexArray.bind(e),bindVertexArray:e.bindVertexArray.bind(e)}
if(t.vao)return null
const i=e.getExtension("OES_vertex_array_object")||e.getExtension("MOZ_OES_vertex_array_object")||e.getExtension("WEBKIT_OES_vertex_array_object")
return i?{createVertexArray:i.createVertexArrayOES.bind(i),deleteVertexArray:i.deleteVertexArrayOES.bind(i),bindVertexArray:i.bindVertexArrayOES.bind(i)}:null}(this._gl,this._disabledExtensions)),this._vertexArrayObject}get compressedTextureETC(){return this._compressedTextureETC||(this._compressedTextureETC=function(e,t){if(t.compressedTextureETC)return null
const i=e.getExtension("WEBGL_compressed_texture_etc")
return i?{COMPRESSED_R11_EAC:i.COMPRESSED_R11_EAC,COMPRESSED_SIGNED_R11_EAC:i.COMPRESSED_SIGNED_R11_EAC,COMPRESSED_RG11_EAC:i.COMPRESSED_RG11_EAC,COMPRESSED_SIGNED_RG11_EAC:i.COMPRESSED_SIGNED_RG11_EAC,COMPRESSED_RGB8_ETC2:i.COMPRESSED_RGB8_ETC2,COMPRESSED_SRGB8_ETC2:i.COMPRESSED_SRGB8_ETC2,COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:i.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2,COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:i.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2,COMPRESSED_RGBA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC,COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC}:null}(this._gl,this._disabledExtensions)),this._compressedTextureETC}get compressedTextureS3TC(){return this._compressedTextureS3TC||(this._compressedTextureS3TC=function(e,t){if(t.compressedTextureS3TC)return null
const i=e.getExtension("WEBGL_compressed_texture_s3tc")
return i?{COMPRESSED_RGB_S3TC_DXT1:i.COMPRESSED_RGB_S3TC_DXT1_EXT,COMPRESSED_RGBA_S3TC_DXT1:i.COMPRESSED_RGBA_S3TC_DXT1_EXT,COMPRESSED_RGBA_S3TC_DXT3:i.COMPRESSED_RGBA_S3TC_DXT3_EXT,COMPRESSED_RGBA_S3TC_DXT5:i.COMPRESSED_RGBA_S3TC_DXT5_EXT}:null}(this._gl,this._disabledExtensions)),this._compressedTextureS3TC}get textureFilterAnisotropic(){return this._textureFilterAnisotropic||(this._textureFilterAnisotropic=function(e,t){if(t.textureFilterAnisotropic)return null
const i=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic")
return i?{MAX_TEXTURE_MAX_ANISOTROPY:i.MAX_TEXTURE_MAX_ANISOTROPY_EXT,TEXTURE_MAX_ANISOTROPY:i.TEXTURE_MAX_ANISOTROPY_EXT}:null}(this._gl,this._disabledExtensions)),this._textureFilterAnisotropic}get disjointTimerQuery(){return this._disjointTimerQuery||(this._disjointTimerQuery=Object(B.a)(this._gl,this._disabledExtensions)),this._disjointTimerQuery}get textureFloat(){return this._textureFloat||(this._textureFloat=function(e,t){if(Object(z.a)(e))return{textureFloat:!0,textureFloatLinear:!t.textureFloatLinear&&!!e.getExtension("OES_texture_float_linear"),textureHalfFloat:!0,textureHalfFloatLinear:!0,HALF_FLOAT:e.HALF_FLOAT,R16F:e.R16F,RG16F:e.RG16F,RGBA16F:e.RGBA16F,R32F:e.R32F,RG32F:e.RG32F,RGBA32F:e.RGBA32F,R11F_G11F_B10F:e.R11F_G11F_B10F,RGB16F:e.RGB16F}
if(e instanceof WebGLRenderingContext){const i=!t.textureHalfFloat&&e.getExtension("OES_texture_half_float")
return{textureFloat:!t.textureFloat&&!!e.getExtension("OES_texture_float"),textureFloatLinear:!t.textureFloatLinear&&!!e.getExtension("OES_texture_float_linear"),textureHalfFloat:!!i,textureHalfFloatLinear:!t.textureHalfFloatLinear&&!!e.getExtension("OES_texture_half_float_linear"),HALF_FLOAT:i?i.HALF_FLOAT_OES:void 0}}return null}(this._gl,this._disabledExtensions)),this._textureFloat}get colorBufferFloat(){return this._colorBufferFloat||(this._colorBufferFloat=function(e,t){if(Object(z.a)(e)){const i=!t.colorBufferHalfFloat&&e.getExtension("EXT_color_buffer_half_float")||!t.colorBufferFloat&&e.getExtension("EXT_color_buffer_float"),n=!t.colorBufferFloat&&e.getExtension("EXT_color_buffer_float"),r=!t.floatBlend&&!t.colorBufferFloat&&e.getExtension("EXT_float_blend")
return i||n||r?{textureFloat:!!n,textureHalfFloat:!!i,floatBlend:!!r,R16F:e.R16F,RG16F:e.RG16F,RGBA16F:e.RGBA16F,R32F:e.R32F,RG32F:e.RG32F,RGBA32F:e.RGBA32F,R11F_G11F_B10F:e.R11F_G11F_B10F,RGB16F:e.RGB16F}:null}if(e instanceof WebGLRenderingContext){const i=!t.colorBufferHalfFloat&&e.getExtension("EXT_color_buffer_half_float"),n=!t.colorBufferFloat&&e.getExtension("WEBGL_color_buffer_float"),r=!t.floatBlend&&!t.colorBufferFloat&&e.getExtension("EXT_float_blend")
return i||n||r?{textureFloat:!!n,textureHalfFloat:!!i,floatBlend:!!r,RGBA16F:i?i.RGBA16F_EXT:void 0,RGB16F:i?i.RGB16F_EXT:void 0,RGBA32F:n?n.RGBA32F_EXT:void 0}:null}return null}(this._gl,this._disabledExtensions)),this._colorBufferFloat}get blendMinMax(){return this._minMaxBlending||(this._minMaxBlending=function(e,t){if(Object(z.a)(e))return{MIN:e.MIN,MAX:e.MAX}
if(t.blendMinMax)return null
{const t=e.getExtension("EXT_blend_minmax")
return t?{MIN:t.MIN_EXT,MAX:t.MAX_EXT}:null}}(this._gl,this._disabledExtensions)),this._minMaxBlending}get depthTexture(){return null===this._depthTexture&&(this._depthTexture=N(this._gl,this._disabledExtensions,"depthTexture",!0,["WEBGL_depth_texture","MOZ_WEBGL_depth_texture","WEBKIT_WEBGL_depth_texture"])),this._depthTexture}get standardDerivatives(){return null===this._standardDerivatives&&(this._standardDerivatives=N(this._gl,this._disabledExtensions,"standardDerivatives",!0,["OES_standard_derivatives"])),this._standardDerivatives}get shaderTextureLOD(){return null===this._shaderTextureLOD&&(this._shaderTextureLOD=N(this._gl,this._disabledExtensions,"shaderTextureLOD",!0,["EXT_shader_texture_lod"])),this._shaderTextureLOD}get fragDepth(){return null===this._fragDepth&&(this._fragDepth=N(this._gl,this._disabledExtensions,"fragDepth",!0,["EXT_frag_depth"])),this._fragDepth}get loseContext(){return this._loseContext||(this._loseContext=function(e,t){const i=t.loseContext&&e.getExtension("WEBGL_lose_context")
return i?{loseRenderingContext:()=>i.loseContext()}:null}(this._gl,this._debugWebGLExtensions)),this._loseContext}get textureNorm16(){return this._textureNorm16||(this._textureNorm16=function(e,t){if(!Object(z.a)(e))return null
if(t.textureNorm16)return null
const i=e.getExtension("EXT_texture_norm16")
return i?{R16:i.R16_EXT,RG16:i.RG16_EXT,RGB16:i.RGB16_EXT,RGBA16:i.RGBA16_EXT,R16_SNORM:i.R16_SNORM_EXT,RG16_SNORM:i.RG16_SNORM_EXT,RGB16_SNORM:i.RGB16_SNORM_EXT,RGBA16_SNORM:i.RGBA16_SNORM_EXT}:null}(this._gl,this._disabledExtensions)),this._textureNorm16}get textureFloatLinear(){return null===this._textureFloatLinear&&(this._textureFloatLinear=N(this._gl,this._disabledExtensions,"textureFloatLinear",!1,["OES_texture_float_linear"])),this._textureFloatLinear}enable(e){return this[e]}}let U=class{constructor(e,t){this.gl=e,this.instanceCounter=new h,this.programCache=new d.a(this),this._state=new c,this._numOfDrawCalls=0,this._numOfTriangles=0,this.type=Object(z.a)(e)?o.a.WEBGL2:o.a.WEBGL1,this._loadExtensions(),this.configure(t)}get gl2(){return this.type===o.a.WEBGL1?null:this.gl}configure(e){this._capabilities=new k(this.gl,e),this._parameters=this._loadParameters(e)
const t=this.gl.getParameter(this.gl.VIEWPORT)
this._state=new c,this._state.viewport={x:t[0],y:t[1],width:t[2],height:t[3]},this._stateTracker=new f.a({setBlending:e=>{if(e){this.setBlendingEnabled(!0),this.setBlendEquationSeparate(e.opRgb,e.opAlpha),this.setBlendFunctionSeparate(e.srcRgb,e.dstRgb,e.srcAlpha,e.dstAlpha)
const t=e.color
this.setBlendColor(t.r,t.g,t.b,t.a)}else this.setBlendingEnabled(!1)},setCulling:e=>{e?(this.setFaceCullingEnabled(!0),this.setCullFace(e.face),this.setFrontFace(e.mode)):this.setFaceCullingEnabled(!1)},setPolygonOffset:e=>{e?(this.setPolygonOffsetFillEnabled(!0),this.setPolygonOffset(e.factor,e.units)):this.setPolygonOffsetFillEnabled(!1)},setDepthTest:e=>{e?(this.setDepthTestEnabled(!0),this.setDepthFunction(e.func)):this.setDepthTestEnabled(!1)},setStencilTest:e=>{if(e){this.setStencilTestEnabled(!0)
const t=e.function
this.setStencilFunction(t.func,t.ref,t.mask)
const i=e.operation
this.setStencilOp(i.fail,i.zFail,i.zPass)}else this.setStencilTestEnabled(!1)},setDepthWrite:e=>{e?(this.setDepthWriteEnabled(!0),this.setDepthRange(e.zNear,e.zFar)):this.setDepthWriteEnabled(!1)},setColorWrite:e=>{e?this.setColorMask(e.r,e.g,e.b,e.a):this.setColorMask(!1,!1,!1,!1)},setStencilWrite:e=>{e?this.setStencilWriteMask(e.mask):this.setStencilWriteMask(0)}}),this.enforceState(),Object(n.f)(this._driverTest),this._driverTest=new j(this)}dispose(){Object(n.f)(this._driverTest),this.programCache.dispose(),this.bindVAO(null),this.unbindBuffer(l.d.ARRAY_BUFFER),this.unbindBuffer(l.d.ELEMENT_ARRAY_BUFFER),this.type===o.a.WEBGL2&&(this.unbindBuffer(l.d.UNIFORM_BUFFER),this._state.uniformBufferBindingPoints.length=0,this.unbindBuffer(l.d.PIXEL_PACK_BUFFER),this.unbindBuffer(l.d.PIXEL_UNPACK_BUFFER),this.unbindBuffer(l.d.COPY_READ_BUFFER),this.unbindBuffer(l.d.COPY_WRITE_BUFFER)),this._state.textureUnitMap.length=0,Object(a.b)()&&console.log(this.instanceCounter.resourceInformation)}get driverTest(){return this._driverTest}get contextAttributes(){return this.gl.getContextAttributes()}get parameters(){return this._parameters}setPipelineState(e){this._stateTracker.setPipeline(e)}setBlendingEnabled(e){this._state.blend!==e&&(!0===e?this.gl.enable(this.gl.BLEND):this.gl.disable(this.gl.BLEND),this._state.blend=e,this._stateTracker.invalidateBlending())}externalProgramUpdate(){var e
null!=(e=this._state.program)&&e.stop(),this._state.program=null}externalTextureUnitUpdate(e,t){for(let t=0;t<e.length;++t)this._state.textureUnitMap[e[t]]=null
t>=0&&(this._state.activeTexture=t)}externalVertexArrayObjectUpdate(){const e=this.capabilities.vao
e&&(e.bindVertexArray(null),this._state.vertexArrayObject=null),this._state.vertexBuffer=null,this._state.indexBuffer=null}externalVertexBufferUpdate(){this._state.vertexBuffer=null}externalIndexBufferUpdate(){this._state.indexBuffer=null}setBlendColor(e,t,i,n){e===this._state.blendColor.r&&t===this._state.blendColor.g&&i===this._state.blendColor.b&&n===this._state.blendColor.a||(this.gl.blendColor(e,t,i,n),this._state.blendColor.r=e,this._state.blendColor.g=t,this._state.blendColor.b=i,this._state.blendColor.a=n,this._stateTracker.invalidateBlending())}setBlendFunction(e,t){e===this._state.blendFunction.srcRGB&&t===this._state.blendFunction.dstRGB||(this.gl.blendFunc(e,t),this._state.blendFunction.srcRGB=e,this._state.blendFunction.srcAlpha=e,this._state.blendFunction.dstRGB=t,this._state.blendFunction.dstAlpha=t,this._stateTracker.invalidateBlending())}setBlendFunctionSeparate(e,t,i,n){this._state.blendFunction.srcRGB===e&&this._state.blendFunction.srcAlpha===i&&this._state.blendFunction.dstRGB===t&&this._state.blendFunction.dstAlpha===n||(this.gl.blendFuncSeparate(e,t,i,n),this._state.blendFunction.srcRGB=e,this._state.blendFunction.srcAlpha=i,this._state.blendFunction.dstRGB=t,this._state.blendFunction.dstAlpha=n,this._stateTracker.invalidateBlending())}setBlendEquation(e){this._state.blendEquation.mode!==e&&(this.gl.blendEquation(e),this._state.blendEquation.mode=e,this._state.blendEquation.modeAlpha=e,this._stateTracker.invalidateBlending())}setBlendEquationSeparate(e,t){this._state.blendEquation.mode===e&&this._state.blendEquation.modeAlpha===t||(this.gl.blendEquationSeparate(e,t),this._state.blendEquation.mode=e,this._state.blendEquation.modeAlpha=t,this._stateTracker.invalidateBlending())}setColorMask(e,t,i,n){this._state.colorMask.r===e&&this._state.colorMask.g===t&&this._state.colorMask.b===i&&this._state.colorMask.a===n||(this.gl.colorMask(e,t,i,n),this._state.colorMask.r=e,this._state.colorMask.g=t,this._state.colorMask.b=i,this._state.colorMask.a=n,this._stateTracker.invalidateColorWrite())}setClearColor(e,t,i,n){this._state.clearColor.r===e&&this._state.clearColor.g===t&&this._state.clearColor.b===i&&this._state.clearColor.a===n||(this.gl.clearColor(e,t,i,n),this._state.clearColor.r=e,this._state.clearColor.g=t,this._state.clearColor.b=i,this._state.clearColor.a=n)}setFaceCullingEnabled(e){this._state.faceCulling!==e&&(!0===e?this.gl.enable(this.gl.CULL_FACE):this.gl.disable(this.gl.CULL_FACE),this._state.faceCulling=e,this._stateTracker.invalidateCulling())}setPolygonOffsetFillEnabled(e){this._state.polygonOffsetFill!==e&&(!0===e?this.gl.enable(this.gl.POLYGON_OFFSET_FILL):this.gl.disable(this.gl.POLYGON_OFFSET_FILL),this._state.polygonOffsetFill=e,this._stateTracker.invalidatePolygonOffset())}setPolygonOffset(e,t){this._state.polygonOffset[0]===e&&this._state.polygonOffset[1]===t||(this._state.polygonOffset[0]=e,this._state.polygonOffset[1]=t,this.gl.polygonOffset(e,t),this._stateTracker.invalidatePolygonOffset())}setCullFace(e){this._state.cullFace!==e&&(this.gl.cullFace(e),this._state.cullFace=e,this._stateTracker.invalidateCulling())}setFrontFace(e){this._state.frontFace!==e&&(this.gl.frontFace(e),this._state.frontFace=e,this._stateTracker.invalidateCulling())}setScissorTestEnabled(e){this._state.scissorTest!==e&&(!0===e?this.gl.enable(this.gl.SCISSOR_TEST):this.gl.disable(this.gl.SCISSOR_TEST),this._state.scissorTest=e)}setScissorRect(e,t,i,n){this._state.scissorRect.x===e&&this._state.scissorRect.y===t&&this._state.scissorRect.width===i&&this._state.scissorRect.height===n||(this.gl.scissor(e,t,i,n),this._state.scissorRect.x=e,this._state.scissorRect.y=t,this._state.scissorRect.width=i,this._state.scissorRect.height=n)}setDepthTestEnabled(e){this._state.depthTest!==e&&(!0===e?this.gl.enable(this.gl.DEPTH_TEST):this.gl.disable(this.gl.DEPTH_TEST),this._state.depthTest=e,this._stateTracker.invalidateDepthTest())}setClearDepth(e){this._state.clearDepth!==e&&(this.gl.clearDepth(e),this._state.clearDepth=e)}setDepthFunction(e){this._state.depthFunction!==e&&(this.gl.depthFunc(e),this._state.depthFunction=e,this._stateTracker.invalidateDepthTest())}setDepthWriteEnabled(e){this._state.depthWrite!==e&&(this.gl.depthMask(e),this._state.depthWrite=e,this._stateTracker.invalidateDepthWrite())}setDepthRange(e,t){this._state.depthRange.zNear===e&&this._state.depthRange.zFar===t||(this.gl.depthRange(e,t),this._state.depthRange.zNear=e,this._state.depthRange.zFar=t,this._stateTracker.invalidateDepthWrite())}setStencilTestEnabled(e){this._state.stencilTest!==e&&(!0===e?this.gl.enable(this.gl.STENCIL_TEST):this.gl.disable(this.gl.STENCIL_TEST),this._state.stencilTest=e,this._stateTracker.invalidateStencilTest())}setClearStencil(e){e!==this._state.clearStencil&&(this.gl.clearStencil(e),this._state.clearStencil=e)}setStencilFunction(e,t,i){this._state.stencilFunction.func===e&&this._state.stencilFunction.ref===t&&this._state.stencilFunction.mask===i||(this.gl.stencilFunc(e,t,i),this._state.stencilFunction.face=l.n.FRONT_AND_BACK,this._state.stencilFunction.func=e,this._state.stencilFunction.ref=t,this._state.stencilFunction.mask=i,this._stateTracker.invalidateStencilTest())}setStencilFunctionSeparate(e,t,i,n){this._state.stencilFunction.face===e&&this._state.stencilFunction.func===t&&this._state.stencilFunction.ref===i&&this._state.stencilFunction.mask===n||(this.gl.stencilFuncSeparate(e,t,i,n),this._state.stencilFunction.face=e,this._state.stencilFunction.func=t,this._state.stencilFunction.ref=i,this._state.stencilFunction.mask=n,this._stateTracker.invalidateStencilTest())}setStencilWriteMask(e){this._state.stencilWriteMask!==e&&(this.gl.stencilMask(e),this._state.stencilWriteMask=e,this._stateTracker.invalidateStencilWrite())}setStencilOp(e,t,i){this._state.stencilOperation.face===l.n.FRONT_AND_BACK&&this._state.stencilOperation.fail===e&&this._state.stencilOperation.zFail===t&&this._state.stencilOperation.zPass===i||(this.gl.stencilOp(e,t,i),this._state.stencilOperation.face=l.n.FRONT_AND_BACK,this._state.stencilOperation.fail=e,this._state.stencilOperation.zFail=t,this._state.stencilOperation.zPass=i,this._stateTracker.invalidateStencilTest())}setStencilOpSeparate(e,t,i,n){this._state.stencilOperation.face===e&&this._state.stencilOperation.fail===t&&this._state.stencilOperation.zFail===i&&this._state.stencilOperation.zPass===n||(this.gl.stencilOpSeparate(e,t,i,n),this._state.stencilOperation.face=e,this._state.stencilOperation.fail=t,this._state.stencilOperation.zFail=i,this._state.stencilOperation.zPass=n,this._stateTracker.invalidateStencilTest())}setActiveTexture(e,t=!1){const i=this._state.activeTexture
return e>=0&&(t||e!==this._state.activeTexture)&&(this.gl.activeTexture(l.a+e),this._state.activeTexture=e),i}clear(e){e&&this.gl.clear(e)}clearSafe(e,t=255){e&&(e&l.e.COLOR_BUFFER_BIT&&this.setColorMask(!0,!0,!0,!0),e&l.e.DEPTH_BUFFER_BIT&&this.setDepthWriteEnabled(!0),e&l.e.STENCIL_BUFFER_BIT&&this.setStencilWriteMask(t),this.gl.clear(e))}drawArrays(e,t,i){if(Object(a.b)()&&(this._numOfDrawCalls++,this._numOfTriangles+=G(e,i)),this.gl.drawArrays(e,t,i),Object(a.b)()){const e=Object(m.c)(this)
e&&console.error("drawArrays:",e)}}drawElements(e,t,i,r){if(Object(a.b)()&&(this._numOfDrawCalls++,this._numOfTriangles+=G(e,t)),this.gl.drawElements(e,t,i,r),Object(a.b)()){const a=Object(m.c)(this)
if(a){var s
const o=this.getBoundVAO(),l=null==o?void 0:o.indexBuffer,c={indexBuffer:l,vertexBuffers:null==o?void 0:o.vertexBuffers},u={mode:e,count:t,type:i,offset:r},h=null!=(s=Object(n.b)(l,e=>e.size))?s:0,d=r+t,f=h<d?`. Buffer is too small. Attempted to draw index ${d} of ${h}`:""
console.error(`drawElements: ${a}${f}`,{args:u,vao:c})}}}logInfo(){Object(a.b)()&&console.log(`DrawCalls: ${this._numOfDrawCalls}, Triangles: ${this._numOfTriangles}`)}resetInfo(){Object(a.b)()&&(this._numOfDrawCalls=0,this._numOfTriangles=0)}get capabilities(){return this._capabilities}setViewport(e,t,i,n){i=Math.max(Math.round(i),1),n=Math.max(Math.round(n),1)
const r=this._state.viewport
r.x===e&&r.y===t&&r.width===i&&r.height===n||(r.x=e,r.y=t,r.width=i,r.height=n,this.gl.viewport(e,t,i,n))}getViewport(){const e=this._state.viewport
return{x:e.x,y:e.y,width:e.width,height:e.height}}useProgram(e){var t,i
this._state.program!==e&&(null!=(t=this._state.program)&&t.stop(),this._state.program=e,this.gl.useProgram(null!=(i=null==e?void 0:e.glName)?i:null))}bindTexture(e,t,i=!1){(t>=this.parameters.maxTextureImageUnits||t<0)&&console.error("Input texture unit is out of range of available units!")
const r=this._state.textureUnitMap[t]
return Object(n.k)(e)||null==e.glName?(Object(n.l)(r)&&(this.setActiveTexture(t,i),this.gl.bindTexture(r.descriptor.target,null)),this._state.textureUnitMap[t]=null,r):i||r!==e?(this.setActiveTexture(t,i),this.gl.bindTexture(e.descriptor.target,e.glName),e.applyChanges(),this._state.textureUnitMap[t]=e,r):(e.isDirty&&(this.setActiveTexture(t,i),e.applyChanges()),r)}unbindTexture(e){if(!Object(n.k)(e))for(let t=0;t<this.parameters.maxTextureImageUnits;t++)this._state.textureUnitMap[t]===e&&(this.bindTexture(null,t),this._state.textureUnitMap[t]=null)}bindFramebuffer(e,t=!1){if(t||this._state.readFramebuffer!==e||this._state.drawFramebuffer!==e){if(Object(n.k)(e))return this.gl.bindFramebuffer(l.o.FRAMEBUFFER,null),this._state.readFramebuffer=null,void(this._state.drawFramebuffer=null)
e.initializeAndBind(l.o.FRAMEBUFFER),this._state.readFramebuffer=e,this._state.drawFramebuffer=e}}bindFramebufferSeparate(e,t,i=!1){const r=t===l.o.READ_FRAMEBUFFER,s=r?this._state.readFramebuffer:this._state.drawFramebuffer;(i||s!==e)&&(Object(n.k)(e)?this.gl.bindFramebuffer(t,null):e.initializeAndBind(t),r?this._state.readFramebuffer=Object(n.v)(e,null):this._state.drawFramebuffer=Object(n.v)(e,null))}blitFramebuffer(e,t,i=0,n=0,r=e.width,s=e.height,a=0,o=0,c=t.width,u=t.height,h=l.e.COLOR_BUFFER_BIT,d=l.z.NEAREST){this.bindFramebufferSeparate(e,l.o.READ_FRAMEBUFFER),this.bindFramebufferSeparate(t,l.o.DRAW_FRAMEBUFFER),this.gl.blitFramebuffer(i,n,r,s,a,o,c,u,h,d)}bindBuffer(e,t){if(e)switch(null!=t||(t=e.bufferType),t){case l.d.ARRAY_BUFFER:this._state.vertexBuffer=V(this.gl,e,t,this._state.vertexBuffer)
break
case l.d.ELEMENT_ARRAY_BUFFER:this._state.indexBuffer=V(this.gl,e,t,this._state.indexBuffer)
break
case l.d.UNIFORM_BUFFER:this._state.uniformBuffer=V(this.gl,e,t,this._state.uniformBuffer)
break
case l.d.PIXEL_PACK_BUFFER:this._state.pixelPackBuffer=V(this.gl,e,t,this._state.pixelPackBuffer)
break
case l.d.PIXEL_UNPACK_BUFFER:this._state.pixelUnpackBuffer=V(this.gl,e,t,this._state.pixelUnpackBuffer)
break
case l.d.COPY_READ_BUFFER:this._state.copyReadBuffer=V(this.gl,e,t,this._state.copyReadBuffer)
break
case l.d.COPY_WRITE_BUFFER:this._state.copyWriteBuffer=V(this.gl,e,t,this._state.copyWriteBuffer)}}bindRenderbuffer(e){const t=this.gl
e||(t.bindRenderbuffer(t.RENDERBUFFER,null),this._state.renderbuffer=null),this._state.renderbuffer!==e&&(t.bindRenderbuffer(t.RENDERBUFFER,e.glName),this._state.renderbuffer=e)}_getBufferBinding(e,t){if(t>=this.parameters.maxUniformBufferBindings||t<0)return console.error("Uniform buffer binding point is out of range!"),null
const i=this._state.uniformBufferBindingPoints
let r=i[t]
return Object(n.k)(r)&&(r={buffer:null,offset:0,size:0},i[t]=r),r}bindBufferBase(e,t,i){const r=this._getBufferBinding(e,t)
Object(n.k)(r)||r.buffer===i&&0===r.offset&&0===r.size||(this.gl.bindBufferBase(e,t,i?i.glName:null),r.buffer=i,r.offset=0,r.size=0)}bindBufferRange(e,t,i,r,s){const a=this._getBufferBinding(e,t)
Object(n.k)(a)||a.buffer===i&&a.offset===r&&a.size===s||(r%this._parameters.uniformBufferOffsetAlignment==0?(this.gl.bindBufferRange(e,t,i.glName,r,s),a.buffer=i,a.offset=r,a.size=s):console.error("Uniform buffer binding offset is not a multiple of the context offset alignment"))}bindUBO(e,t,i,r){Object(n.k)(t)?this.bindBufferBase(l.d.UNIFORM_BUFFER,e,null):(Object(a.b)()&&(null!=r?r:t.byteLength)>this._parameters.maxUniformBlockSize&&console.error("Attempting to bind more data than the maximum uniform block size"),t.initialize(),void 0!==i&&void 0!==r?this.bindBufferRange(l.d.UNIFORM_BUFFER,e,t.buffer,i,r):this.bindBufferBase(l.d.UNIFORM_BUFFER,e,t.buffer))}unbindUBO(e){for(let t=0,i=this._state.uniformBufferBindingPoints.length;t<i;t++){const i=this._state.uniformBufferBindingPoints[t]
Object(n.l)(i)&&i.buffer===e.buffer&&this.bindBufferBase(l.d.UNIFORM_BUFFER,t,null)}}unbindBuffer(e){switch(e){case l.d.ARRAY_BUFFER:this._state.vertexBuffer=V(this.gl,null,e,this._state.vertexBuffer)
break
case l.d.ELEMENT_ARRAY_BUFFER:this._state.indexBuffer=V(this.gl,null,e,this._state.indexBuffer)
break
case l.d.UNIFORM_BUFFER:this._state.uniformBuffer=V(this.gl,null,e,this._state.uniformBuffer)
break
case l.d.PIXEL_PACK_BUFFER:this._state.pixelPackBuffer=V(this.gl,null,e,this._state.pixelPackBuffer)
break
case l.d.PIXEL_UNPACK_BUFFER:this._state.pixelUnpackBuffer=V(this.gl,null,e,this._state.pixelUnpackBuffer)
break
case l.d.COPY_READ_BUFFER:this._state.copyReadBuffer=V(this.gl,null,e,this._state.copyReadBuffer)
break
case l.d.COPY_WRITE_BUFFER:this._state.copyWriteBuffer=V(this.gl,null,e,this._state.copyWriteBuffer)}}bindVAO(e=null){Object(n.k)(e)?this._state.vertexArrayObject&&(this._state.vertexArrayObject.unbind(),this._state.vertexArrayObject=null):this._state.vertexArrayObject!==e&&(e.bind(),this._state.vertexArrayObject=e)}async clientWaitAsync(e=Object(s.a)(10)){const t=this.gl,i=t.fenceSync(l.x.SYNC_GPU_COMMANDS_COMPLETE,0)
if(!i)throw new Error("Client wait failed, could not create sync object")
let n
this.instanceCounter.increment(l.t.Sync,i),t.flush()
do{await Object(r.a)(e),n=t.clientWaitSync(i,0,0)}while(n===l.f.TIMEOUT_EXPIRED)
if(this.instanceCounter.decrement(l.t.Sync,i),t.deleteSync(i),n===l.f.WAIT_FAILED)throw new Error("Client wait failed")}getBoundFramebufferObject(e=l.o.FRAMEBUFFER){return e===l.o.READ_FRAMEBUFFER?this._state.readFramebuffer:this._state.drawFramebuffer}getBoundVAO(){return this._state.vertexArrayObject}resetState(){this.useProgram(null),this.bindVAO(null),this.bindFramebuffer(null,!0),this.unbindBuffer(l.d.ARRAY_BUFFER),this.unbindBuffer(l.d.ELEMENT_ARRAY_BUFFER),this.type===o.a.WEBGL2&&(this.unbindBuffer(l.d.UNIFORM_BUFFER),this._state.uniformBufferBindingPoints.length=0,this.unbindBuffer(l.d.PIXEL_PACK_BUFFER),this.unbindBuffer(l.d.PIXEL_UNPACK_BUFFER),this.unbindBuffer(l.d.COPY_READ_BUFFER),this.unbindBuffer(l.d.COPY_WRITE_BUFFER))
for(let e=0;e<this.parameters.maxTextureImageUnits;++e)this.bindTexture(null,e)
this.setBlendingEnabled(!1),this.setBlendFunction(l.b.ONE,l.b.ZERO),this.setBlendEquation(l.c.ADD),this.setBlendColor(0,0,0,0),this.setFaceCullingEnabled(!1),this.setCullFace(l.n.BACK),this.setFrontFace(l.j.CCW),this.setPolygonOffsetFillEnabled(!1),this.setPolygonOffset(0,0),this.setScissorTestEnabled(!1),this.setScissorRect(0,0,this.gl.canvas.width,this.gl.canvas.height),this.setDepthTestEnabled(!1),this.setDepthFunction(l.h.LESS),this.setDepthRange(0,1),this.setStencilTestEnabled(!1),this.setStencilFunction(l.h.ALWAYS,0,0),this.setStencilOp(l.w.KEEP,l.w.KEEP,l.w.KEEP),this.setClearColor(0,0,0,0),this.setClearDepth(1),this.setClearStencil(0),this.setColorMask(!0,!0,!0,!0),this.setStencilWriteMask(4294967295),this.setDepthWriteEnabled(!0),this.setViewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}enforceState(){var e,t,i,r
const s=this.capabilities.vao
s&&s.bindVertexArray(null)
const{gl:a,gl2:c}=this
for(let e=0;e<this.parameters.maxVertexAttributes;e++)a.disableVertexAttribArray(e)
if(this._state.vertexBuffer?a.bindBuffer(this._state.vertexBuffer.bufferType,this._state.vertexBuffer.glName):a.bindBuffer(l.d.ARRAY_BUFFER,null),this._state.indexBuffer?a.bindBuffer(this._state.indexBuffer.bufferType,this._state.indexBuffer.glName):a.bindBuffer(l.d.ELEMENT_ARRAY_BUFFER,null),Object(n.l)(c)){var u,h
this._state.uniformBuffer?c.bindBuffer(this._state.uniformBuffer.bufferType,this._state.uniformBuffer.glName):c.bindBuffer(l.d.UNIFORM_BUFFER,null)
for(let e=0;e<this._parameters.maxUniformBufferBindings;e++){const t=this._state.uniformBufferBindingPoints[e]
if(Object(n.l)(t)){const{buffer:i,offset:n,size:r}=t
null!==i?0===n&&0===r?c.bindBufferBase(l.d.UNIFORM_BUFFER,e,i.glName):c.bindBufferRange(l.d.UNIFORM_BUFFER,e,i.glName,n,r):c.bindBufferBase(l.d.UNIFORM_BUFFER,e,null)}}this._state.pixelPackBuffer?c.bindBuffer(this._state.pixelPackBuffer.bufferType,this._state.pixelPackBuffer.glName):c.bindBuffer(l.d.PIXEL_PACK_BUFFER,null),this._state.pixelUnpackBuffer?c.bindBuffer(this._state.pixelUnpackBuffer.bufferType,this._state.pixelUnpackBuffer.glName):c.bindBuffer(l.d.PIXEL_UNPACK_BUFFER,null),this._state.copyReadBuffer?c.bindBuffer(this._state.copyReadBuffer.bufferType,this._state.copyReadBuffer.glName):c.bindBuffer(l.d.COPY_READ_BUFFER,null),this._state.copyWriteBuffer?c.bindBuffer(this._state.copyWriteBuffer.bufferType,this._state.copyWriteBuffer.glName):c.bindBuffer(l.d.COPY_WRITE_BUFFER,null),c.bindFramebuffer(l.o.READ_FRAMEBUFFER,null),c.readBuffer(c.BACK),this._state.readFramebuffer&&(c.bindFramebuffer(l.o.READ_FRAMEBUFFER,this._state.readFramebuffer.glName),c.readBuffer(l.g.COLOR_ATTACHMENT0)),c.bindFramebuffer(l.o.DRAW_FRAMEBUFFER,null!=(u=null==(h=this._state.drawFramebuffer)?void 0:h.glName)?u:null)}else this._state.readFramebuffer=this._state.drawFramebuffer,a.bindFramebuffer(l.o.FRAMEBUFFER,null!=(e=null==(t=this._state.drawFramebuffer)?void 0:t.glName)?e:null)
if(s&&this._state.vertexArrayObject){const e=this._state.vertexArrayObject
this._state.vertexArrayObject&&(this._state.vertexArrayObject.unbind(),this._state.vertexArrayObject=null),this.bindVAO(e)}a.useProgram(null!=(i=null==(r=this._state.program)?void 0:r.glName)?i:null),a.blendColor(this._state.blendColor.r,this._state.blendColor.g,this._state.blendColor.b,this._state.blendColor.a),a.bindRenderbuffer(a.RENDERBUFFER,this._state.renderbuffer?this._state.renderbuffer.glName:null),!0===this._state.blend?a.enable(this.gl.BLEND):a.disable(this.gl.BLEND),a.blendEquationSeparate(this._state.blendEquation.mode,this._state.blendEquation.modeAlpha),a.blendFuncSeparate(this._state.blendFunction.srcRGB,this._state.blendFunction.dstRGB,this._state.blendFunction.srcAlpha,this._state.blendFunction.dstAlpha),a.clearColor(this._state.clearColor.r,this._state.clearColor.g,this._state.clearColor.b,this._state.clearColor.a),a.clearDepth(this._state.clearDepth),a.clearStencil(this._state.clearStencil),a.colorMask(this._state.colorMask.r,this._state.colorMask.g,this._state.colorMask.b,this._state.colorMask.a),a.cullFace(this._state.cullFace),a.depthFunc(this._state.depthFunction),a.depthRange(this._state.depthRange.zNear,this._state.depthRange.zFar),!0===this._state.depthTest?a.enable(a.DEPTH_TEST):a.disable(a.DEPTH_TEST),a.depthMask(this._state.depthWrite),a.frontFace(this._state.frontFace),a.lineWidth(1),!0===this._state.faceCulling?a.enable(a.CULL_FACE):a.disable(a.CULL_FACE),a.polygonOffset(this._state.polygonOffset[0],this._state.polygonOffset[1]),!0===this._state.polygonOffsetFill?a.enable(a.POLYGON_OFFSET_FILL):a.disable(a.POLYGON_OFFSET_FILL),a.scissor(this._state.scissorRect.x,this._state.scissorRect.y,this._state.scissorRect.width,this._state.scissorRect.height),!0===this._state.scissorTest?a.enable(a.SCISSOR_TEST):a.disable(a.SCISSOR_TEST),a.stencilFunc(this._state.stencilFunction.func,this._state.stencilFunction.ref,this._state.stencilFunction.mask),a.stencilOpSeparate(this._state.stencilOperation.face,this._state.stencilOperation.fail,this._state.stencilOperation.zFail,this._state.stencilOperation.zPass),!0===this._state.stencilTest?a.enable(a.STENCIL_TEST):a.disable(a.STENCIL_TEST),a.stencilMask(this._state.stencilWriteMask)
for(let e=0;e<this.parameters.maxTextureImageUnits;e++){a.activeTexture(l.a+e),a.bindTexture(l.A.TEXTURE_2D,null),a.bindTexture(l.A.TEXTURE_CUBE_MAP,null),this.type===o.a.WEBGL2&&(a.bindTexture(l.A.TEXTURE_3D,null),a.bindTexture(l.A.TEXTURE_2D_ARRAY,null))
const t=this._state.textureUnitMap[e]
Object(n.l)(t)&&a.bindTexture(t.descriptor.target,t.glName)}a.activeTexture(l.a+this._state.activeTexture)
const d=this._state.viewport
a.viewport(d.x,d.y,d.width,d.height),this.resetInfo()}_loadExtensions(){this.type===o.a.WEBGL1&&this.gl.getExtension("OES_element_index_uint"),this.gl.getExtension("KHR_parallel_shader_compile")}_loadParameters(e){var t
const i=this.capabilities.textureFilterAnisotropic,n=null!=(t=e.maxAnisotropy)?t:1/0,r=this.type===o.a.WEBGL2,s=this.gl,a={versionString:this.gl.getParameter(this.gl.VERSION),maxVertexTextureImageUnits:this.gl.getParameter(this.gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),maxVertexAttributes:this.gl.getParameter(this.gl.MAX_VERTEX_ATTRIBS),maxMaxAnisotropy:i?Math.min(this.gl.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY),n):1,maxTextureImageUnits:this.gl.getParameter(this.gl.MAX_TEXTURE_IMAGE_UNITS),maxTextureSize:this.gl.getParameter(this.gl.MAX_TEXTURE_SIZE),maxUniformBufferBindings:r?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0,maxVertexUniformBlocks:r?s.getParameter(s.MAX_VERTEX_UNIFORM_BLOCKS):0,maxFragmentUniformBlocks:r?s.getParameter(s.MAX_FRAGMENT_UNIFORM_BLOCKS):0,maxUniformBlockSize:r?s.getParameter(s.MAX_UNIFORM_BLOCK_SIZE):0,uniformBufferOffsetAlignment:r?s.getParameter(s.UNIFORM_BUFFER_OFFSET_ALIGNMENT):1,maxArrayTextureLayers:r?s.getParameter(s.MAX_ARRAY_TEXTURE_LAYERS):1,maxSamples:r?s.getParameter(s.MAX_SAMPLES):1}
return _.a.TEXTURE_UNIT_FOR_UPDATES=a.maxTextureImageUnits-1,a}}
function V(e,t,i,n){return t?n!==t&&e.bindBuffer(i,t.glName):e.bindBuffer(i,null),t}function G(e,t){switch(e){case l.r.POINTS:return 2*t
case l.r.TRIANGLES:return t/3
case l.r.TRIANGLE_STRIP:case l.r.TRIANGLE_FAN:return t-2
default:return 0}}},2529:function(e,t,i){"use strict"
i.d(t,"a",(function(){return s}))
const n={background:{"background.frag":"#ifdef PATTERN\nuniform lowp float u_opacity;\nuniform lowp sampler2D u_texture;\nvarying mediump vec4 v_tlbr;\nvarying mediump vec2 v_tileTextureCoord;\n#else\nuniform lowp vec4 u_color;\n#endif\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvoid main() {\n#ifdef PATTERN\nmediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);\nmediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);\nlowp vec4 color = texture2D(u_texture, samplePos);\ngl_FragColor = u_opacity * color;\n#else\ngl_FragColor = u_color;\n#endif\n#ifdef ID\nif (gl_FragColor.a < 1.0 / 255.0) {\ndiscard;\n}\ngl_FragColor = v_id;\n#endif\n}","background.vert":"precision mediump float;\nattribute vec2 a_pos;\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nuniform highp mat3 u_dvsMat3;\nuniform mediump float u_coord_range;\nuniform mediump float u_depth;\n#ifdef PATTERN\nuniform mediump mat3 u_pattern_matrix;\nvarying mediump vec2 v_tileTextureCoord;\nuniform mediump vec4 u_tlbr;\nuniform mediump vec2 u_mosaicSize;\nvarying mediump vec4 v_tlbr;\n#endif\nvoid main() {\ngl_Position = vec4((u_dvsMat3 * vec3(u_coord_range * a_pos, 1.0)).xy, u_depth, 1.0);\n#ifdef PATTERN\nv_tileTextureCoord = (u_pattern_matrix * vec3(a_pos, 1.0)).xy;\nv_tlbr             = u_tlbr / u_mosaicSize.xyxy;\n#endif\n#ifdef ID\nv_id = u_id / 255.0;\n#endif\n}"},circle:{"circle.frag":"precision lowp float;\nvarying lowp vec4 v_color;\nvarying lowp vec4 v_stroke_color;\nvarying mediump float v_blur;\nvarying mediump float v_stroke_width;\nvarying mediump float v_radius;\nvarying mediump vec2 v_offset;\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvoid main()\n{\nmediump float dist = length(v_offset);\nmediump float alpha = smoothstep(0.0, -v_blur, dist - 1.0);\nlowp float color_mix_ratio = v_stroke_width < 0.01 ? 0.0 : smoothstep(-v_blur, 0.0, dist - v_radius / (v_radius + v_stroke_width));\ngl_FragColor = alpha * mix(v_color, v_stroke_color, color_mix_ratio);\n#ifdef ID\nif (gl_FragColor.a < 1.0 / 255.0) {\ndiscard;\n}\ngl_FragColor = v_id;\n#endif\n}","circle.vert":"precision mediump float;\nattribute vec2 a_pos;\n#pragma header\nvarying lowp vec4 v_color;\nvarying lowp vec4 v_stroke_color;\nvarying mediump float v_blur;\nvarying mediump float v_stroke_width;\nvarying mediump float v_radius;\nvarying mediump vec2 v_offset;\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform mediump vec2 u_circleTranslation;\nuniform mediump float u_depth;\nuniform mediump float u_antialiasingWidth;\nvoid main()\n{\n#pragma main\nv_color = color * opacity;\nv_stroke_color = stroke_color * stroke_opacity;\nv_stroke_width = stroke_width;\nv_radius = radius;\nv_blur = max(blur, u_antialiasingWidth / (radius + stroke_width));\nmediump vec2 offset = vec2(mod(a_pos, 2.0) * 2.0 - 1.0);\nv_offset = offset;\n#ifdef ID\nv_id = u_id / 255.0;\n#endif\nmediump vec3 pos = u_dvsMat3 * vec3(a_pos * 0.5, 1.0) + u_displayMat3 * vec3((v_radius + v_stroke_width) * offset + u_circleTranslation, 0.0);\ngl_Position = vec4(pos.xy, u_depth, 1.0);\n}"},fill:{"fill.frag":"precision lowp float;\n#ifdef PATTERN\nuniform lowp sampler2D u_texture;\nvarying mediump vec2 v_tileTextureCoord;\nvarying mediump vec4 v_tlbr;\n#endif\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvarying lowp vec4 v_color;\nvec4 mixColors(vec4 color1, vec4 color2) {\nfloat compositeAlpha = color2.a + color1.a * (1.0 - color2.a);\nvec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);\nreturn vec4(compositeColor, compositeAlpha);\n}\nvoid main()\n{\n#ifdef PATTERN\nmediump vec2 normalizedTextureCoord = fract(v_tileTextureCoord);\nmediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);\nlowp vec4 color = texture2D(u_texture, samplePos);\ngl_FragColor = v_color[3] * color;\n#else\ngl_FragColor = v_color;\n#endif\n#ifdef ID\nif (gl_FragColor.a < 1.0 / 255.0) {\ndiscard;\n}\ngl_FragColor = v_id;\n#endif\n}","fill.vert":"precision mediump float;\nattribute vec2 a_pos;\n#pragma header\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform mediump float u_depth;\nuniform mediump vec2 u_fillTranslation;\n#ifdef PATTERN\n#include <util/util.glsl>\nuniform mediump vec2 u_mosaicSize;\nuniform mediump float u_patternFactor;\nvarying mediump vec2 v_tileTextureCoord;\nvarying mediump vec4 v_tlbr;\n#endif\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nvarying lowp vec4 v_color;\nvoid main()\n{\n#pragma main\nv_color = color * opacity;\n#ifdef ID\nv_id = u_id / 255.0;\n#endif\n#ifdef PATTERN\nfloat patternWidth = nextPOT(tlbr.z - tlbr.x);\nfloat patternHeight = nextPOT(tlbr.w - tlbr.y);\nfloat scaleX = 1.0 / (patternWidth * u_patternFactor);\nfloat scaleY = 1.0 / (patternHeight * u_patternFactor);\nmat3 patterMat = mat3(scaleX, 0.0,    0.0,\n0.0,    -scaleY, 0.0,\n0.0,    0.0,    1.0);\nv_tileTextureCoord = (patterMat * vec3(a_pos, 1.0)).xy;\nv_tlbr             = tlbr / u_mosaicSize.xyxy;\n#endif\nvec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(u_fillTranslation, 0.0);\ngl_Position = vec4(pos.xy, u_depth, 1.0);\n}"},icon:{"icon.frag":"precision mediump float;\nuniform lowp sampler2D u_texture;\n#ifdef SDF\nuniform lowp vec4 u_color;\nuniform lowp vec4 u_outlineColor;\n#endif\nvarying mediump vec2 v_tex;\nvarying lowp float v_opacity;\nvarying mediump vec2 v_size;\nvarying lowp vec4 v_color;\n#ifdef SDF\nvarying mediump flaot v_halo_width;\n#endif\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\n#include <util/encoding.glsl>\nvec4 mixColors(vec4 color1, vec4 color2) {\nfloat compositeAlpha = color2.a + color1.a * (1.0 - color2.a);\nvec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);\nreturn vec4(compositeColor, compositeAlpha);\n}\nvoid main()\n{\n#ifdef SDF\nlowp vec4 fillPixelColor = v_color;\nfloat d = rgba2float(texture2D(u_texture, v_tex)) - 0.5;\nconst float softEdgeRatio = 0.248062016;\nfloat size = max(v_size.x, v_size.y);\nfloat dist = d * softEdgeRatio * size;\nfillPixelColor *= clamp(0.5 - dist, 0.0, 1.0);\nif (v_halo_width > 0.25) {\nlowp vec4 outlinePixelColor = u_outlineColor;\nconst float outlineLimitRatio = (16.0 / 86.0);\nfloat clampedOutlineSize = softEdgeRatio * min(v_halo_width, outlineLimitRatio * max(v_size.x, v_size.y));\noutlinePixelColor *= clamp(0.5 - (abs(dist) - clampedOutlineSize), 0.0, 1.0);\ngl_FragColor = v_opacity * mixColors(fillPixelColor, outlinePixelColor);\n}\nelse {\ngl_FragColor = v_opacity * fillPixelColor;\n}\n#else\nlowp vec4 texColor = texture2D(u_texture, v_tex);\ngl_FragColor = v_opacity * texColor;\n#endif\n#ifdef ID\nif (gl_FragColor.a < 1.0 / 255.0) {\ndiscard;\n}\ngl_FragColor = v_id;\n#endif\n}","icon.vert":"attribute vec2 a_pos;\nattribute vec2 a_vertexOffset;\nattribute vec4 a_texAngleRange;\nattribute vec4 a_levelInfo;\nattribute float a_opacityInfo;\n#pragma header\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nvarying lowp vec4 v_color;\n#ifdef SDF\nvarying mediump float v_halo_width;\n#endif\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform highp mat3 u_displayViewMat3;\nuniform mediump vec2 u_iconTranslation;\nuniform vec2 u_mosaicSize;\nuniform mediump float u_depth;\nuniform mediump float u_mapRotation;\nuniform mediump float u_level;\nuniform lowp float u_keepUpright;\nuniform mediump float u_fadeDuration;\nvarying mediump vec2 v_tex;\nvarying lowp float v_opacity;\nvarying mediump vec2 v_size;\nconst float C_OFFSET_PRECISION = 1.0 / 8.0;\nconst float C_256_TO_RAD = 3.14159265359 / 128.0;\nconst float C_DEG_TO_RAD = 3.14159265359 / 180.0;\nconst float tileCoordRatio = 1.0 / 8.0;\nuniform highp float u_time;\nvoid main()\n{\n#pragma main\nv_color = color;\nv_opacity = opacity;\n#ifdef SDF\nv_halo_width = halo_width;\n#endif\nfloat modded = mod(a_opacityInfo, 128.0);\nfloat targetOpacity = (a_opacityInfo - modded) / 128.0;\nfloat startOpacity = modded / 127.0;\nfloat interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);\nv_opacity *= interpolatedOpacity;\nmediump float a_angle         = a_levelInfo[1];\nmediump float a_minLevel      = a_levelInfo[2];\nmediump float a_maxLevel      = a_levelInfo[3];\nmediump vec2 a_tex            = a_texAngleRange.xy;\nmediump float delta_z = 0.0;\nmediump float rotated = mod(a_angle + u_mapRotation, 256.0);\ndelta_z += (1.0 - step(u_keepUpright, 0.0)) * step(64.0, rotated) * (1.0 - step(192.0, rotated));\ndelta_z += 1.0 - step(a_minLevel, u_level);\ndelta_z += step(a_maxLevel, u_level);\ndelta_z += step(v_opacity, 0.0);\nvec2 offset = C_OFFSET_PRECISION * a_vertexOffset;\nv_size = abs(offset);\n#ifdef SDF\noffset = (120.0 / 86.0) * offset;\n#endif\nmediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayViewMat3 * vec3(size * offset, 0.0) + u_displayMat3 * vec3(u_iconTranslation, 0.0);\ngl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);\n#ifdef ID\nv_id = u_id / 255.0;\n#endif\nv_tex = a_tex.xy / u_mosaicSize;\n}"},line:{"line.frag":"precision lowp float;\nvarying mediump vec2 v_normal;\nvarying highp float v_accumulatedDistance;\nvarying mediump float v_lineHalfWidth;\nvarying lowp vec4 v_color;\nvarying mediump float v_blur;\n#if defined (PATTERN) || defined(SDF)\nvarying mediump vec4 v_tlbr;\nvarying mediump vec2 v_patternSize;\nvarying mediump float v_widthRatio;\nuniform sampler2D u_texture;\nuniform mediump float u_antialiasing;\n#endif\n#ifdef SDF\n#include <util/encoding.glsl>\n#endif\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvoid main()\n{\nmediump float fragDist = length(v_normal) * v_lineHalfWidth;\nlowp float alpha = clamp((v_lineHalfWidth - fragDist) / v_blur, 0.0, 1.0);\n#ifdef PATTERN\nmediump float relativeTexX = fract(v_accumulatedDistance / (v_patternSize.x * v_widthRatio));\nmediump float relativeTexY = 0.5 + v_normal.y * v_lineHalfWidth / (v_patternSize.y * v_widthRatio);\nmediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));\nlowp vec4 color = texture2D(u_texture, texCoord);\ngl_FragColor = alpha * v_color[3] * color;\n#elif defined(SDF)\nmediump float relativeTexX = fract((v_accumulatedDistance * 0.5) / (v_patternSize.x * v_widthRatio));\nmediump float relativeTexY =  0.5 + 0.25 * v_normal.y;\nmediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));\nmediump float d = rgba2float(texture2D(u_texture, texCoord)) - 0.5;\nfloat dist = d * (v_lineHalfWidth + u_antialiasing / 2.0);\ngl_FragColor = alpha * clamp(0.5 - dist, 0.0, 1.0) * v_color;\n#else\ngl_FragColor = alpha * v_color;\n#endif\n#ifdef ID\nif (gl_FragColor.a < 1.0 / 255.0) {\ndiscard;\n}\ngl_FragColor = v_id;\n#endif\n}","line.vert":"precision mediump float;\nattribute vec2 a_pos;\nattribute vec4 a_extrude_offset;\nattribute vec4 a_dir_normal;\nattribute vec2 a_accumulatedDistance;\n#pragma header\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform highp mat3 u_displayViewMat3;\nuniform mediump float u_zoomFactor;\nuniform mediump vec2 u_lineTranslation;\nuniform mediump float u_antialiasing;\nuniform mediump float u_depth;\nvarying mediump vec2 v_normal;\nvarying highp float v_accumulatedDistance;\nconst float scale = 1.0 / 31.0;\nconst mediump float tileCoordRatio = 8.0;\n#if defined (SDF)\nconst mediump float sdfPatternHalfWidth = 15.5;\n#endif\n#if defined (PATTERN) || defined(SDF)\nuniform mediump vec2 u_mosaicSize;\nvarying mediump vec4 v_tlbr;\nvarying mediump vec2 v_patternSize;\nvarying mediump float v_widthRatio;\n#endif\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nvarying lowp vec4 v_color;\nvarying mediump float v_lineHalfWidth;\nvarying mediump float v_blur;\nvoid main()\n{\n#pragma main\nv_color = color * opacity;\nv_blur = blur + u_antialiasing;\nv_normal = a_dir_normal.zw * scale;\n#if defined (PATTERN) || defined(SDF)\nv_tlbr          = tlbr / u_mosaicSize.xyxy;\nv_patternSize   = vec2(tlbr.z - tlbr.x, tlbr.y - tlbr.w);\n#if defined (PATTERN)\nv_widthRatio = width / v_patternSize.y;\n#else\nv_widthRatio = width / sdfPatternHalfWidth / 2.0;\n#endif\n#endif\nv_lineHalfWidth = (width + u_antialiasing) * 0.5;\nmediump vec2 dir = a_dir_normal.xy * scale;\nmediump vec2 offset_ = a_extrude_offset.zw * scale * offset;\nmediump vec2 dist = v_lineHalfWidth * scale * a_extrude_offset.xy;\nmediump vec3 pos = u_dvsMat3 * vec3(a_pos + offset_ * tileCoordRatio / u_zoomFactor, 1.0) + u_displayViewMat3 * vec3(dist, 0.0) + u_displayMat3 * vec3(u_lineTranslation, 0.0);\ngl_Position = vec4(pos.xy, u_depth, 1.0);\n#if defined (PATTERN) || defined(SDF)\nv_accumulatedDistance = a_accumulatedDistance.x * u_zoomFactor / tileCoordRatio + dot(dir, dist + offset_);\n#endif\n#ifdef ID\nv_id = u_id / 255.0;\n#endif\n}"},outline:{"outline.frag":"varying lowp vec4 v_color;\nvarying mediump vec2 v_normal;\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvoid main()\n{\nlowp float dist = abs(v_normal.y);\nlowp float alpha = smoothstep(1.0, 0.0, dist);\ngl_FragColor = alpha * v_color;\n#ifdef ID\nif (gl_FragColor.a < 1.0 / 255.0) {\ndiscard;\n}\ngl_FragColor = v_id;\n#endif\n}","outline.vert":"attribute vec2 a_pos;\nattribute vec2 a_offset;\nattribute vec2 a_xnormal;\n#pragma header\nvarying lowp vec4 v_color;\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform mediump vec2 u_fillTranslation;\nuniform mediump float u_depth;\nuniform mediump float u_outline_width;\nvarying lowp vec2 v_normal;\nconst float scale = 1.0 / 15.0;\nvoid main()\n{\n#pragma main\nv_color = color * opacity;\n#ifdef ID\nv_id = u_id / 255.0;\n#endif\nv_normal = a_xnormal;\nmediump vec2 dist = u_outline_width * scale * a_offset;\nmediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(dist + u_fillTranslation, 0.0);\ngl_Position = vec4(pos.xy, u_depth, 1.0);\n}"},text:{"text.frag":"uniform lowp sampler2D u_texture;\nvarying lowp vec2 v_tex;\nvarying lowp vec4 v_color;\nvarying mediump float v_edgeWidth;\nvarying mediump float v_edgeDistance;\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvoid main()\n{\nlowp float dist = texture2D(u_texture, v_tex).a;\nmediump float alpha = smoothstep(v_edgeDistance - v_edgeWidth, v_edgeDistance + v_edgeWidth, dist);\ngl_FragColor = alpha * v_color;\n#ifdef ID\nif (gl_FragColor.a < 1.0 / 255.0) {\ndiscard;\n}\ngl_FragColor = v_id;\n#endif\n}","text.vert":"attribute vec2 a_pos;\nattribute vec2 a_vertexOffset;\nattribute vec4 a_texAngleRange;\nattribute vec4 a_levelInfo;\nattribute float a_opacityInfo;\n#pragma header\nvarying lowp vec4 v_color;\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform highp mat3 u_displayViewMat3;\nuniform mediump vec2 u_textTranslation;\nuniform vec2 u_mosaicSize;\nuniform mediump float u_depth;\nuniform mediump float u_mapRotation;\nuniform mediump float u_level;\nuniform lowp float u_keepUpright;\nuniform mediump float u_fadeDuration;\nvarying lowp vec2 v_tex;\nconst float offsetPrecision = 1.0 / 8.0;\nconst mediump float edgePos = 0.75;\nuniform mediump float u_antialiasingWidth;\nvarying mediump float v_edgeDistance;\nvarying mediump float v_edgeWidth;\nuniform lowp float u_halo;\nconst float sdfFontScale = 1.0 / 24.0;\nconst float sdfPixel = 3.0;\nuniform highp float u_time;\nvoid main()\n{\n#pragma main\nif (u_halo > 0.5)\n{\nv_color = halo_color * opacity;\nhalo_width *= sdfPixel;\nhalo_blur *= sdfPixel;\n}\nelse\n{\nv_color = color * opacity;\nhalo_width = 0.0;\nhalo_blur = 0.0;\n}\nfloat modded = mod(a_opacityInfo, 128.0);\nfloat targetOpacity = (a_opacityInfo - modded) / 128.0;\nfloat startOpacity = modded / 127.0;\nfloat interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);\nv_color *= interpolatedOpacity;\nmediump float a_angle       = a_levelInfo[1];\nmediump float a_minLevel    = a_levelInfo[2];\nmediump float a_maxLevel    = a_levelInfo[3];\nmediump vec2 a_tex          = a_texAngleRange.xy;\nmediump float a_visMinAngle    = a_texAngleRange.z;\nmediump float a_visMaxAngle    = a_texAngleRange.w;\nmediump float delta_z = 0.0;\nmediump float angle = mod(a_angle + u_mapRotation, 256.0);\nif (a_visMinAngle < a_visMaxAngle)\n{\ndelta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) + (1.0 - step(a_visMinAngle, angle)));\n}\nelse\n{\ndelta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) * (1.0 - step(a_visMinAngle, angle)));\n}\ndelta_z += 1.0 - step(a_minLevel, u_level);\ndelta_z += step(a_maxLevel, u_level);\ndelta_z += step(v_color[3], 0.0);\nv_tex = a_tex.xy / u_mosaicSize;\n#ifdef ID\nv_id = u_id / 255.0;\n#endif\nv_edgeDistance = edgePos - halo_width / size;\nv_edgeWidth = (u_antialiasingWidth + halo_blur) / size;\nmediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + sdfFontScale * u_displayViewMat3 * vec3(offsetPrecision * size * a_vertexOffset, 0.0) + u_displayMat3 * vec3(u_textTranslation, 0.0);\ngl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);\n}"},util:{"encoding.glsl":"const vec4 rgba2float_factors = vec4(\n255.0 / (256.0),\n255.0 / (256.0 * 256.0),\n255.0 / (256.0 * 256.0 * 256.0),\n255.0 / (256.0 * 256.0 * 256.0 * 256.0)\n);\nfloat rgba2float(vec4 rgba) {\nreturn dot(rgba, rgba2float_factors);\n}","util.glsl":"float nextPOT(in float x) {\nreturn pow(2.0, ceil(log2(abs(x))));\n}"}},r=new(i(1695).a)((function(e){let t=n
return e.split("/").forEach(e=>{t&&(t=t[e])}),t}))
function s(e){return r.resolveIncludes(e)}},2584:function(e,t,i){"use strict"
i.d(t,"a",(function(){return N}))
var n=i(968),r=i(1265),s=i(975),a=i(23),o=i(970),l=(i(971),i(445),i(969)),c=i(992),u=i(1310),h=i(980),d=i(1334)
const f="esri-zoom-box__container",_="esri-zoom-box__overlay",m="esri-zoom-box__overlay-background",p="esri-zoom-box__outline",g="Shift"
let b=class extends s.a{constructor(e){super(e),this._container=null,this._overlay=null,this._backgroundShape=null,this._boxShape=null,this._box={x:0,y:0,width:0,height:0},this._rafId=null,this._handles=null,this._redraw=this._redraw.bind(this)}destroy(){this.view=null}set view(e){this._handles&&this._handles.forEach(e=>{e.remove()}),this._handles=null,this._destroyOverlay(),this._set("view",e),e&&(e.on("drag",[g],e=>this._handleDrag(e,1),d.b.INTERNAL),e.on("drag",[g,"Ctrl"],e=>this._handleDrag(e,-1),d.b.INTERNAL))}_start(){this._createContainer(),this._createOverlay(),this.navigation.begin()}_update(e,t,i,n){this._box.x=e,this._box.y=t,this._box.width=i,this._box.height=n,this._rafId||(this._rafId=requestAnimationFrame(this._redraw))}_end(e,t,i,n,r){const s=this.view,a=s.toMap(Object(h.f)(e+.5*i,t+.5*n))
let o=Math.max(i/s.width,n/s.height);-1===r&&(o=1/o),this._destroyOverlay(),this.navigation.end(),s.goTo({center:a,scale:s.scale*o})}_updateBox(e,t,i,n){const r=this._boxShape
r.setAttributeNS(null,"x",""+e),r.setAttributeNS(null,"y",""+t),r.setAttributeNS(null,"width",""+i),r.setAttributeNS(null,"height",""+n),r.setAttributeNS(null,"class",p)}_updateBackground(e,t,i,n){this._backgroundShape.setAttributeNS(null,"d",this._toSVGPath(e,t,i,n,this.view.width,this.view.height))}_createContainer(){const e=document.createElement("div")
e.className=f,this.view.root.appendChild(e),this._container=e}_createOverlay(){const e=this.view.width,t=this.view.height,i=document.createElementNS("http://www.w3.org/2000/svg","path")
i.setAttributeNS(null,"d","M 0 0 L "+e+" 0 L "+e+" "+t+" L 0 "+t+" Z"),i.setAttributeNS(null,"class",m)
const n=document.createElementNS("http://www.w3.org/2000/svg","rect"),r=document.createElementNS("http://www.w3.org/2000/svg","svg")
r.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),r.setAttributeNS(null,"class",_),r.appendChild(i),r.appendChild(n),this._container.appendChild(r),this._backgroundShape=i,this._boxShape=n,this._overlay=r}_destroyOverlay(){this._container&&this._container.parentNode&&this._container.parentNode.removeChild(this._container),this._container=this._backgroundShape=this._boxShape=this._overlay=null}_toSVGPath(e,t,i,n,r,s){const a=e+i,o=t+n
return"M 0 0 L "+r+" 0 L "+r+" "+s+" L 0 "+s+" ZM "+e+" "+t+" L "+e+" "+o+" L "+a+" "+o+" L "+a+" "+t+" Z"}_handleDrag(e,t){const i=e.x,n=e.y,r=e.origin.x,s=e.origin.y
let a,o,l,c
switch(i>r?(a=r,l=i-r):(a=i,l=r-i),n>s?(o=s,c=n-s):(o=n,c=s-n),e.action){case"start":this._start()
break
case"update":this._update(a,o,l,c)
break
case"end":this._end(a,o,l,c,t)}e.stopPropagation()}_redraw(){if(!this._rafId)return
if(this._rafId=null,!this._overlay)return
const{x:e,y:t,width:i,height:n}=this._box
this._updateBox(e,t,i,n),this._updateBackground(e,t,i,n),this._rafId=requestAnimationFrame(this._redraw)}}
Object(n.a)([Object(o.b)()],b.prototype,"navigation",void 0),Object(n.a)([Object(o.b)()],b.prototype,"view",null),b=Object(n.a)([Object(l.a)("esri.views.2d.navigation.ZoomBox")],b)
const v=b
i(982)
var x=i(978),y=i(985),O=i(981),T=i(2035)
let S=class extends s.a{constructor(e){super(e),this.animationTime=0,this.momentumEstimator=new T.a(500,6,.92),this.momentum=null,this.tmpMomentum=Object(O.f)(),this.momentumFinished=!1,this.viewpoint=new r.a({targetGeometry:new c.a,scale:0,rotation:0}),this._previousDrag=null,Object(x.g)(()=>this.momentumFinished,()=>this.navigation.stop())}begin(e,t){this.navigation.begin(),this.momentumEstimator.reset(),this.addToEstimator(t),this._previousDrag=t}update(e,t){this.addToEstimator(t)
let i=t.center.x,n=t.center.y
const r=this._previousDrag
i=r?r.center.x-i:-i,n=r?n-r.center.y:n,e.viewpoint=Object(u.w)(this.viewpoint,e.viewpoint,[i||0,n||0]),this._previousDrag=t}end(e,t){this.addToEstimator(t)
const i=e.navigation.momentumEnabled
this.momentum=i?this.momentumEstimator.evaluateMomentum():null,this.animationTime=0,this.momentum&&this.onAnimationUpdate(e),this._previousDrag=null,this.navigation.end()}addToEstimator(e){const t=e.center.x,i=e.center.y,n=Object(h.g)(-t,i),r=Object(O.h)(-t,i,0)
this.momentumEstimator.add(n,r,.001*e.timestamp)}onAnimationUpdate(e){var t
null==(t=this.navigation.animationManager)||t.animateContinous(e.viewpoint,(t,i)=>{const{momentum:n,animationTime:r,tmpMomentum:s}=this,a=.001*i
if(!(this.momentumFinished=!n||n.isFinished(r))){const i=n.valueDelta(r,a)
Object(y.p)(s,n.direction,i),Object(u.w)(t,t,s),e.constraints.constrainByGeometry(t)}this.animationTime+=a})}stopMomentumNavigation(){this.momentum&&(this.momentumEstimator.reset(),this.momentum=null,this.navigation.stop())}}
Object(n.a)([Object(o.b)()],S.prototype,"momentumFinished",void 0),Object(n.a)([Object(o.b)()],S.prototype,"viewpoint",void 0),Object(n.a)([Object(o.b)()],S.prototype,"navigation",void 0),S=Object(n.a)([Object(l.a)("esri.views.2d.navigation.actions.Pan")],S)
const w=S
var E=i(1013),M=i(1026),C=i(2036),I=i(2037)
let P=class extends s.a{constructor(e){super(e),this._animationTime=0,this._momentumFinished=!1,this._previousAngle=0,this._previousRadius=0,this._previousCenter=null,this._rotationMomentumEstimator=new C.a(.6,.15,.95),this._rotationDirection=1,this._startAngle=0,this._startRadius=0,this._updateTimestamp=null,this._zoomDirection=1,this._zoomMomentumEstimator=new I.a,this._zoomOnly=null,this.zoomMomentum=null,this.rotateMomentum=null,this.viewpoint=new r.a({targetGeometry:new c.a,scale:0,rotation:0}),this.addHandles(Object(x.g)(()=>this._momentumFinished,()=>this.navigation.stop()))}begin(e,t){this.navigation.begin(),this._rotationMomentumEstimator.reset(),this._zoomMomentumEstimator.reset(),this._zoomOnly=null,this._previousAngle=this._startAngle=t.angle,this._previousRadius=this._startRadius=t.radius,this._previousCenter=t.center,this._updateTimestamp=null,e.constraints.rotationEnabled&&this.addToRotateEstimator(0,t.timestamp),this.addToZoomEstimator(t,1)}update(e,t){null===this._updateTimestamp&&(this._updateTimestamp=t.timestamp)
const i=t.angle,n=t.radius,r=t.center,s=Math.abs(180*(i-this._startAngle)/Math.PI),a=Math.abs(n-this._startRadius),o=this._startRadius/n
if(this._previousRadius&&this._previousCenter){const l=n/this._previousRadius
let c=180*(i-this._previousAngle)/Math.PI
this._rotationDirection=c>=0?1:-1,this._zoomDirection=l>=1?1:-1,e.constraints.rotationEnabled?(null===this._zoomOnly&&t.timestamp-this._updateTimestamp>200&&(this._zoomOnly=a-s>0),null===this._zoomOnly||this._zoomOnly?c=0:this.addToRotateEstimator(i-this._startAngle,t.timestamp)):c=0,this.addToZoomEstimator(t,o),this.navigation.setViewpoint([r.x,r.y],1/l,c,[this._previousCenter.x-r.x,r.y-this._previousCenter.y])}this._previousAngle=i,this._previousRadius=n,this._previousCenter=r}end(e){this.rotateMomentum=this._rotationMomentumEstimator.evaluateMomentum(),this.zoomMomentum=this._zoomMomentumEstimator.evaluateMomentum(),this._animationTime=0,(this.rotateMomentum||this.zoomMomentum)&&this.onAnimationUpdate(e),this.navigation.end()}addToRotateEstimator(e,t){this._rotationMomentumEstimator.add(e,.001*t)}addToZoomEstimator(e,t){this._zoomMomentumEstimator.add(t,.001*e.timestamp)}canZoomIn(e){const t=e.scale,i=e.constraints.effectiveMaxScale
return 0===i||t>i}canZoomOut(e){const t=e.scale,i=e.constraints.effectiveMinScale
return 0===i||t<i}onAnimationUpdate(e){var t
null==(t=this.navigation.animationManager)||t.animateContinous(e.viewpoint,(t,i)=>{const n=!this.canZoomIn(e)&&this._zoomDirection>1||!this.canZoomOut(e)&&this._zoomDirection<1,r=!this.rotateMomentum||this.rotateMomentum.isFinished(this._animationTime),s=n||!this.zoomMomentum||this.zoomMomentum.isFinished(this._animationTime),a=.001*i
if(this._momentumFinished=r&&s,!this._momentumFinished){const i=this.rotateMomentum?Math.abs(this.rotateMomentum.valueDelta(this._animationTime,a))*this._rotationDirection*180/Math.PI:0
let n=this.zoomMomentum?Math.abs(this.zoomMomentum.valueDelta(this._animationTime,a)):1
const r=Object(M.d)(),s=Object(M.d)()
if(this._previousCenter){Object(E.s)(r,this._previousCenter.x,this._previousCenter.y),Object(u.j)(s,e.size,e.padding),Object(E.j)(r,r,s)
const{constraints:a,scale:o}=e,l=o*n
n<1&&!a.canZoomInTo(l)?(n=o/a.effectiveMaxScale,this.zoomMomentum=null,this.rotateMomentum=null):n>1&&!a.canZoomOutTo(l)&&(n=o/a.effectiveMinScale,this.zoomMomentum=null,this.rotateMomentum=null),Object(u.t)(t,e.viewpoint,n,i,r,e.size),e.constraints.constrainByGeometry(t)}}this._animationTime+=a})}stopMomentumNavigation(){(this.rotateMomentum||this.zoomMomentum)&&(this.rotateMomentum&&(this._rotationMomentumEstimator.reset(),this.rotateMomentum=null),this.zoomMomentum&&(this._zoomMomentumEstimator.reset(),this.zoomMomentum=null),this.navigation.stop())}}
Object(n.a)([Object(o.b)()],P.prototype,"_momentumFinished",void 0),Object(n.a)([Object(o.b)()],P.prototype,"viewpoint",void 0),Object(n.a)([Object(o.b)()],P.prototype,"navigation",void 0),P=Object(n.a)([Object(l.a)("esri.views.2d.navigation.actions.Pinch")],P)
const A=P,R=Object(M.d)(),F=Object(M.d)()
let L=class extends s.a{constructor(e){super(e),this._previousCenter=Object(M.d)(),this.viewpoint=new r.a({targetGeometry:new c.a,scale:0,rotation:0})}begin(e,t){this.navigation.begin(),Object(E.s)(this._previousCenter,t.center.x,t.center.y)}update(e,t){const{state:{size:i,padding:n}}=e
Object(E.s)(R,t.center.x,t.center.y),Object(u.g)(F,i,n),e.viewpoint=Object(u.r)(this.viewpoint,e.state.paddedViewState.viewpoint,Object(u.b)(F,this._previousCenter,R)),Object(E.c)(this._previousCenter,R)}end(){this.navigation.end()}}
Object(n.a)([Object(o.b)()],L.prototype,"viewpoint",void 0),Object(n.a)([Object(o.b)()],L.prototype,"navigation",void 0),L=Object(n.a)([Object(l.a)("esri.views.2d.actions.Rotate")],L)
const D=L,j=new r.a({targetGeometry:new c.a}),B=[0,0]
let z=class extends s.a{constructor(e){super(e),this._endTimer=null,this._lastEventTimestamp=null,this.animationManager=null,this.interacting=!1}initialize(){this.pan=new w({navigation:this}),this.rotate=new D({navigation:this}),this.pinch=new A({navigation:this}),this.zoomBox=new v({view:this.view,navigation:this})}destroy(){this.pan=Object(a.e)(this.pan),this.rotate=Object(a.e)(this.rotate),this.pinch=Object(a.e)(this.pinch),this.zoomBox=Object(a.e)(this.zoomBox),this.animationManager=null}begin(){this._set("interacting",!0)}end(){this._lastEventTimestamp=performance.now(),this._startTimer(250)}async zoom(e,t=this._getDefaultAnchor()){if(this.stop(),this.begin(),this.view.constraints.snapToZoom&&this.view.constraints.effectiveLODs)return e<1?this.zoomIn(t):this.zoomOut(t)
this.setViewpoint(t,e,0,[0,0])}async zoomIn(e){const t=this.view,i=t.constraints.snapToNextScale(t.scale)
return this._zoomToScale(i,e)}async zoomOut(e){const t=this.view,i=t.constraints.snapToPreviousScale(t.scale)
return this._zoomToScale(i,e)}setViewpoint(e,t,i,n){this.begin(),this.view.state.viewpoint=this._scaleRotateTranslateViewpoint(this.view.viewpoint,e,t,i,n),this.end()}setViewpointImmediate(e,t=0,i=[0,0],n=this._getDefaultAnchor()){this.view.state.viewpoint=this._scaleRotateTranslateViewpoint(this.view.viewpoint,n,e,t,i)}continousRotateClockwise(){var e
const t=this.get("view.viewpoint")
null==(e=this.animationManager)||e.animateContinous(t,e=>{Object(u.r)(e,e,-1)})}continousRotateCounterclockwise(){var e
const t=this.get("view.viewpoint")
null==(e=this.animationManager)||e.animateContinous(t,e=>{Object(u.r)(e,e,1)})}resetRotation(){this.view.rotation=0}continousPanLeft(){this._continuousPan([-10,0])}continousPanRight(){this._continuousPan([10,0])}continousPanUp(){this._continuousPan([0,10])}continousPanDown(){this._continuousPan([0,-10])}stop(){var e
this.pan.stopMomentumNavigation(),null!=(e=this.animationManager)&&e.stop(),this.end(),null!==this._endTimer&&(clearTimeout(this._endTimer),this._endTimer=null,this._set("interacting",!1))}_continuousPan(e){var t
const i=this.view.viewpoint
null==(t=this.animationManager)||t.animateContinous(i,t=>{Object(u.w)(t,t,e),this.view.constraints.constrainByGeometry(t)})}_startTimer(e){return null!==this._endTimer||(this._endTimer=setTimeout(()=>{var e
this._endTimer=null
const t=performance.now()-(null!=(e=this._lastEventTimestamp)?e:0)
t<250?this._endTimer=this._startTimer(t):this._set("interacting",!1)},e)),this._endTimer}_getDefaultAnchor(){const{size:e,padding:{left:t,right:i,top:n,bottom:r}}=this.view
return B[0]=.5*(e[0]-i+t),B[1]=.5*(e[1]-r+n),B}async _zoomToScale(e,t=this._getDefaultAnchor()){const{view:i}=this,{constraints:n,scale:r,viewpoint:s,size:a,padding:o}=i,l=n.canZoomInTo(e),c=n.canZoomOutTo(e)
if(!(e<r&&!l||e>r&&!c))return Object(u.p)(j,s,e/r,0,t,a,o),n.constrainByGeometry(j),i.goTo(j,{animate:!0})}_scaleRotateTranslateViewpoint(e,t,i,n,r){const{view:s}=this,{size:a,padding:o,constraints:l,scale:c,viewpoint:h}=s,d=c*i,f=l.canZoomInTo(d),_=l.canZoomOutTo(d)
return(i<1&&!f||i>1&&!_)&&(i=1),Object(u.w)(h,h,r),Object(u.p)(e,h,i,n,t,a,o),l.constrainByGeometry(e)}}
Object(n.a)([Object(o.b)()],z.prototype,"animationManager",void 0),Object(n.a)([Object(o.b)({type:Boolean,readOnly:!0})],z.prototype,"interacting",void 0),Object(n.a)([Object(o.b)()],z.prototype,"pan",void 0),Object(n.a)([Object(o.b)()],z.prototype,"pinch",void 0),Object(n.a)([Object(o.b)()],z.prototype,"rotate",void 0),Object(n.a)([Object(o.b)()],z.prototype,"view",void 0),Object(n.a)([Object(o.b)()],z.prototype,"zoomBox",void 0),z=Object(n.a)([Object(l.a)("esri.views.2d.navigation.MapViewNavigation")],z)
const N=z},2585:function(e,t,i){"use strict"
i.d(t,"a",(function(){return E}))
var n=i(968),r=i(975),s=(i(446),i(1025)),a=i(235),o=(i(233),i(23)),l=i(1398),c=i(970),u=(i(971),i(445),i(969)),h=i(980),d=i(1e3),f=i(991),_=i(1549)
class m{constructor(e,t,i){this._debugMap=new Map,this._width=e*i,this._height=t*i,this._pixelRatio=i
const n=Math.ceil(this._width/1),r=Math.ceil(this._height/1)
this._cols=n,this._rows=r,this._cells=_.a.create(n*r)}insertMetrics(e){const t=this._hasCollision(e)
return 0===t&&this._markMetrics(e),t}getCellId(e,t){return e+t*this._cols}has(e){return this._cells.has(e)}hasRange(e,t){return this._cells.hasRange(e,t)}set(e){this._cells.set(e)}setRange(e,t){this._cells.setRange(e,t)}_collide(e,t,i,n){const r=e-i/2,s=t-n/2,a=r+i,o=s+n
if(a<0||o<0||r>this._width||s>this._height)return 1
const l=Object(f.f)(Math.floor(r/1),0,this._cols),c=Object(f.f)(Math.floor(s/1),0,this._rows),u=Object(f.f)(Math.ceil(a/1),0,this._cols),h=Object(f.f)(Math.ceil(o/1),0,this._rows)
for(let e=c;e<=h;e++)for(let t=l;t<=u;t++){const i=this.getCellId(t,e)
if(this.has(i))return 2}return 0}_mark(e,t,i,n,r){const s=e-i/2,a=t-n/2,o=s+i,l=a+n,c=Object(f.f)(Math.floor(s/1),0,this._cols),u=Object(f.f)(Math.floor(a/1),0,this._rows),h=Object(f.f)(Math.ceil(o/1),0,this._cols),d=Object(f.f)(Math.ceil(l/1),0,this._rows)
for(let e=u;e<=d;e++)for(let t=c;t<=h;t++){const i=this.getCellId(t,e)
this._debugMap.set(i,r),this.set(i)}return!1}_hasCollision(e){const t=e.id
let i=0,n=0
e.save()
do{const t=e.boundsCount
i+=t
for(let i=0;i<t;i++){const t=e.boundsComputedAnchorX(i),r=e.boundsComputedAnchorY(i),s=(e.boundsWidth(i)+2)*this._pixelRatio,a=(e.boundsHeight(i)+2)*this._pixelRatio
switch(this._collide(t,r,s,a)){case 2:return 2
case 1:n++}}}while(e.peekId()===t&&e.next())
return e.restore(),i===n?1:0}_markMetrics(e){const t=e.id
e.save()
do{const t=e.boundsCount
for(let i=0;i<t;i++){const t=e.boundsComputedAnchorX(i),n=e.boundsComputedAnchorY(i),r=(e.boundsWidth(i)+2)*this._pixelRatio,s=(e.boundsHeight(i)+2)*this._pixelRatio
this._mark(t,n,r,s,e.id)}}while(e.peekId()===t&&e.next())
e.restore()}}var p=i(1093),g=i(1108)
const b=Math.PI
function v(e,t){switch(t.transformationType){case g.b.Additive:return function(e,t){return e+(x(t.minSize,e)||t.minDataValue)}(e,t)
case g.b.Constant:return function(e,t){const i=e.stops
let n=i&&i.length&&i[0].size
return null==n&&(n=e.minSize),x(n,t)}(t,e)
case g.b.ClampedLinear:return function(e,t){const i=t.minDataValue,n=t.maxDataValue,r=(e-i)/(n-i),s=x(t.minSize,e),a=x(t.maxSize,e)
return e<=i?s:e>=n?a:s+r*(a-s)}(e,t)
case g.b.Proportional:return function(e,t){const i=e/t.minDataValue,n=x(t.minSize,e),r=x(t.maxSize,e)
let s=null
return s=i*n,Object(f.f)(s,n,r)}(e,t)
case g.b.Stops:return function(e,t){const[i,n,r]=function(e,t){if(!t)return
let i=0,n=t.length-1
return t.some((t,r)=>e<t?(n=r,!0):(i=r,!1)),[i,n,(e-t[i])/(t[n]-t[i])]}(e,t.cache.ipData)
if(i===n)return x(t.stops[i].size,e)
{const s=x(t.stops[i].size,e)
return s+(x(t.stops[n].size,e)-s)*r}}(e,t)
case g.b.RealWorldSize:return function(e,t){const i=p.a[t.valueUnit],n=x(t.minSize,e),r=x(t.maxSize,e),{valueRepresentation:s}=t
let a=null
return a="area"===s?2*Math.sqrt(e/b)/i:"radius"===s||"distance"===s?2*e/i:e/i,Object(f.f)(a,n,r)}(e,t)
case g.b.Identity:return e
case g.b.Unknown:return null}}function x(e,t){return"number"==typeof e?e:v(t,e)}function y(e,t){const i=[]
e.forEachTile(e=>i.push(e)),i.sort((e,t)=>e.instanceId-t.instanceId),i.forEach(e=>{Object(o.l)(e.labelMetrics)&&e.isReady&&t(e,e.labelMetrics.getCursor())})}function O(e){return t=>Object(h.h)(v(t,e))}function T(e,t){if(!(i=t).layer||"feature"!==i.layer.type&&"csv"!==i.layer.type&&"geojson"!==i.layer.type&&"ogc-feature"!==i.layer.type&&"stream"!==i.layer.type&&"subtype-group"!==i.layer.type&&"wfs"!==i.layer.type)return
var i
const n="subtype-group"===t.layer.type?t.layer.sublayers.items:[t.layer],r=t.layer.geometryType,s=!function(e){for(const t of e){const e="featureReduction"in t&&t.featureReduction&&"labelingInfo"in t.featureReduction?t.featureReduction:void 0,i=[...t.labelingInfo||[],...(null==e?void 0:e.labelingInfo)||[]]
if(t.labelsVisible&&i.length&&i.some(e=>"none"===e.deconflictionStrategy))return!0}return!1}(n),a={}
if("subtype-group"!==t.layer.type){var l
if("heatmap"===(null==(l=t.tileRenderer)?void 0:l.type))return
const e=function(e){const t=null!=e&&"visualVariables"in e&&e.visualVariables
if(!t)return null
for(const e of t)if("size"===e.type)return O(e)
return null}(t.layer.renderer)
a[0]=e}const c=t.tileRenderer
if(Object(o.k)(c))return
const u=t.layer.visible&&!t.suspended
e.push({tileRenderer:c,vvEvaluators:a,deconflictionEnabled:s,geometryType:r,visible:u})}class S{run(e,t,i){const n=[]
for(let t=e.length-1;t>=0;t--)T(n,e[t])
this._transformMetrics(n),this._runCollision(n,t,i)}_runCollision(e,t,i){const[n,r]=t.state.size,s=new m(n,r,t.pixelRatio)
for(const{tileRenderer:t,deconflictionEnabled:n,visible:r}of e){const e=t.featuresView.attributeView
n?r?(this._prepare(t),this._collideVisible(s,t,i),this._collideInvisible(s,t)):y(t,(t,i)=>{for(;i.nextId();)e.setLabelMinZoom(i.id,255)}):y(t,(t,i)=>{for(;i.nextId();)e.setLabelMinZoom(i.id,0),r&&s.insertMetrics(i)})}}_isFiltered(e,t,i){const n=t.getFilterFlags(e),r=!i.hasFilter||!!(n&d.u),s=Object(o.k)(i.featureEffect)||i.featureEffect.excludedLabelsVisible||!!(n&d.t)
return!(r&&s)}_prepare(e){const t=e.featuresView.attributeView,i=new Set
y(e,(n,r)=>{for(;r.nextId();)i.has(r.id)||(i.add(r.id),this._isFiltered(r.id,t,e.layerView)?t.setLabelMinZoom(r.id,254):0!==t.getLabelMinZoom(r.id)?t.setLabelMinZoom(r.id,255):t.setLabelMinZoom(r.id,0))})}_collideVisible(e,t,i){const n=t.featuresView.attributeView,r=new Set
y(t,(t,s)=>{for(;s.nextId();)if(!r.has(s.id))if(t.key.level===i){if(0===n.getLabelMinZoom(s.id))switch(e.insertMetrics(s)){case 1:break
case 2:n.setLabelMinZoom(s.id,254),r.add(s.id)
break
case 0:n.setLabelMinZoom(s.id,0),r.add(s.id)}}else n.setLabelMinZoom(s.id,254)})}_collideInvisible(e,t){const i=t.featuresView.attributeView,n=new Set
y(t,(t,r)=>{for(;r.nextId();)if(!n.has(r.id)&&255===i.getLabelMinZoom(r.id))switch(e.insertMetrics(r)){case 1:break
case 2:i.setLabelMinZoom(r.id,255),n.add(r.id)
break
case 0:i.setLabelMinZoom(r.id,0),n.add(r.id)}})}_transformMetrics(e){for(const{tileRenderer:t,geometryType:i,vvEvaluators:n}of e)y(t,(e,r)=>{const s=t.featuresView.attributeView,a=e.transforms.labelMat2d
a[4]=Math.round(a[4]),a[5]=Math.round(a[5])
const l="polyline"===i
for(;r.next();){const e=r.boundsCount,t=r.anchorX,i=r.anchorY
let c=r.size
const u=n[0]
if(Object(o.l)(u)){const e=u(s.getVVSize(r.id))
c=isNaN(e)||null==e||e===1/0?c:e}const h=r.directionX*(c/2),d=r.directionY*(c/2)
for(let n=0;n<e;n++){let e=t,s=r.anchorY
if(l){let t=e+r.boundsX(n)+h,i=s+r.boundsY(n)+d
t=a[0]*t+a[2]*i+a[4],i=a[1]*t+a[3]*i+a[5],r.setBoundsComputedAnchorX(n,Math.floor(t)),r.setBoundsComputedAnchorY(n,Math.floor(i))}else{e=a[0]*t+a[2]*i+a[4],s=a[1]*t+a[3]*i+a[5]
const o=e+r.boundsX(n)+h,l=s+r.boundsY(n)+d
r.setBoundsComputedAnchorX(n,o),r.setBoundsComputedAnchorY(n,l)}}}})}}let w=class extends(Object(s.b)(r.a)){constructor(e){super(e),this._applyVisibilityPassThrottled=Object(l.a)(this._applyVisibilityPass,32,this),this.lastUpdateId=-1,this.updateRequested=!1,this.view=null}initialize(){this.collisionEngine=new S}destroy(){this.collisionEngine=null,this._applyVisibilityPassThrottled=Object(o.s)(this._applyVisibilityPassThrottled)}get updating(){return Object(a.a)("esri-2d-log-updating")&&console.log(`Updating LabelManager ${this.updateRequested}:\n-> updateRequested: ${this.updateRequested}`),this.updateRequested}update(e){this._applyVisibilityPassThrottled(e)}viewChange(){this.requestUpdate()}requestUpdate(){var e
this.updateRequested||(this.updateRequested=!0,null==(e=this.view)||e.requestUpdate())}processUpdate(e){this._set("updateParameters",e),this.updateRequested&&(this.updateRequested=!1,this.update(e))}_applyVisibilityPass(e){const t=this.view
if(t)try{const i=t.featuresTilingScheme.getClosestInfoForScale(e.state.scale).level
this.collisionEngine.run(t.allLayerViews.items,e,i)}catch(e){}}}
Object(n.a)([Object(c.b)()],w.prototype,"updateRequested",void 0),Object(n.a)([Object(c.b)({readOnly:!0})],w.prototype,"updateParameters",void 0),Object(n.a)([Object(c.b)()],w.prototype,"updating",null),Object(n.a)([Object(c.b)()],w.prototype,"view",void 0),w=Object(n.a)([Object(u.a)("esri.views.2d.layers.labels.LabelManager")],w)
const E=w},2615:function(e,t,i){"use strict"
i.d(t,"a",(function(){return s}))
var n=i(973),r=i(1738)
async function s(e){const t=i.e(824).then(i.bind(null,2838)),s=i.e(825).then(i.bind(null,2839)),a=Object(r.a)((await t).default,{signal:e}),o=Object(r.a)((await s).default,{signal:e}),l={mask:await a,overlay:await o}
return Object(n.q)(e),l}},2646:function(e,t,i){"use strict"
i.d(t,"a",(function(){return r}))
var n=i(1320)
const r={shaders:{vertexShader:Object(n.a)("bitBlit/bitBlit.vert"),fragmentShader:Object(n.a)("bitBlit/bitBlit.frag")},attributes:new Map([["a_pos",0],["a_tex",1]])}},2647:function(e,t,i){"use strict"
i.d(t,"a",(function(){return r}))
var n=i(1320)
const r={shaders:{vertexShader:Object(n.a)("stencil/stencil.vert"),fragmentShader:Object(n.a)("stencil/stencil.frag")},attributes:new Map([["a_pos",0]])}},2648:function(e,t,i){"use strict"
i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return r}))
var n=i(1320)
const r={shaders:{vertexShader:Object(n.a)("highlight/textured.vert"),fragmentShader:Object(n.a)("highlight/highlight.frag")},attributes:new Map([["a_position",0],["a_texcoord",1]])},s={shaders:{vertexShader:Object(n.a)("highlight/textured.vert"),fragmentShader:Object(n.a)("highlight/blur.frag")},attributes:new Map([["a_position",0],["a_texcoord",1]])}},2649:function(e,t,i){"use strict"
i.d(t,"a",(function(){return c}))
var n=i(1886),r=i(1002),s=i(235),a=i(23),o=i(1934)
const l=Object(s.a)("esri-2d-profiler")
class c{constructor(e,t){if(this._events=new r.a,this._entries=new Map,this._timings=new n.a(10),this._currentContainer=null,this._currentPass=null,this._currentBrush=null,this._currentSummary=null,!l)return
this._ext=Object(o.a)(e.gl,{}),this._debugOutput=t
const i=e.gl
if(this.enableCommandLogging)for(const e in i)if("function"==typeof i[e]){const t=i[e],n=e.includes("draw")
i[e]=(...r)=>(this._events.emit("command",{container:this._currentContainer,pass:this._currentPass,brush:this._currentBrush,method:e,args:r,isDrawCommand:n}),this._currentSummary&&(this._currentSummary.commands++,n&&this._currentSummary.drawCommands++),t.apply(i,r))}}get enableCommandLogging(){return!("object"==typeof l&&l.disableCommands)}recordContainerStart(e){l&&(this._currentContainer=e)}recordContainerEnd(){l&&(this._currentContainer=null)}recordPassStart(e){l&&(this._currentPass=e,this._initSummary())}recordPassEnd(){l&&(this._currentPass=null,this._emitSummary())}recordBrushStart(e){l&&(this._currentBrush=e)}recordBrushEnd(){l&&(this._currentBrush=null)}recordStart(e){if(l&&Object(a.l)(this._ext)){if(this._entries.has(e)){const t=this._entries.get(e),i=this._ext.resultAvailable(t.query),n=this._ext.disjoint()
if(i&&!n){const i=this._ext.getResult(t.query)/1e6
let n=0
if(Object(a.l)(this._timings.enqueue(i))){const e=this._timings.entries,t=e.length
let i=0
for(const t of e)i+=t
n=i/t}const r=i.toFixed(2),s=n?n.toFixed(2):"--"
this.enableCommandLogging?(console.groupCollapsed(`Frame report for ${e}, ${r} ms (${s} last 10 avg)\n${t.commandsLen} Commands (${t.drawCommands} draw)`),console.log("RenderPass breakdown: "),console.table(t.summaries),console.log("Commands: ",t.commands),console.groupEnd()):console.log(`Frame report for ${e}, ${r} ms (${s} last 10 avg)`),this._debugOutput.innerHTML=`${r} (${s})`}for(const e of t.handles)e.remove()
this._ext.deleteQuery(t.query),this._entries.delete(e)}const t={name:e,query:this._ext.createQuery(),commands:[],commandsLen:0,drawCommands:0,summaries:[],handles:[]}
this.enableCommandLogging&&(t.handles.push(this._events.on("command",e=>{t.commandsLen++,t.commands.push(e),e.isDrawCommand&&t.drawCommands++})),t.handles.push(this._events.on("summary",e=>{t.summaries.push(e)}))),this._ext.beginTimeElapsed(t.query),this._entries.set(e,t)}}recordEnd(e){l&&Object(a.l)(this._ext)&&this._entries.has(e)&&this._ext.endTimeElapsed()}_initSummary(){this.enableCommandLogging&&(this._currentSummary={container:this._currentContainer,pass:this._currentPass,drawCommands:0,commands:0})}_emitSummary(){this.enableCommandLogging&&this._currentSummary&&this._events.emit("summary",this._currentSummary)}}},2650:function(e,t,i){"use strict"
i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return s}))
var n=i(1320),r=i(1293)
const s={shaders:{vertexShader:Object(n.a)("magnifier/magnifier.vert"),fragmentShader:Object(n.a)("magnifier/magnifier.frag")},attributes:new Map([["a_pos",0]])}
function a(e){return Object(r.a)(e,s)}},2679:function(e,t,i){"use strict"
i.d(t,"a",(function(){return Q}))
var n=i(110),r=i(771),s=i(1304),a=i(446),o=i(1535),l=i(233),c=i(991),u=i(23),h=i(973),d=i(980),f=i(1013),_=i(1173),m=i(2298),p=i(1e3),g=i(1003),b=i(235),v=i(1527)
class x{constructor(e,t){this._width=0,this._height=0,this._free=[],this._width=e,this._height=t,this._free.push(new v.a(0,0,e,t))}get width(){return this._width}get height(){return this._height}allocate(e,t){if(e>this._width||t>this._height)return new v.a
let i=null,n=-1
for(let r=0;r<this._free.length;++r){const s=this._free[r]
e<=s.width&&t<=s.height&&(null===i||s.y<=i.y&&s.x<=i.x)&&(i=s,n=r)}return null===i?new v.a:(this._free.splice(n,1),i.width<i.height?(i.width>e&&this._free.push(new v.a(i.x+e,i.y,i.width-e,t)),i.height>t&&this._free.push(new v.a(i.x,i.y+t,i.width,i.height-t))):(i.width>e&&this._free.push(new v.a(i.x+e,i.y,i.width-e,i.height)),i.height>t&&this._free.push(new v.a(i.x,i.y+t,e,i.height-t))),new v.a(i.x,i.y,e,t))}release(e){for(let t=0;t<this._free.length;++t){const i=this._free[t]
if(i.y===e.y&&i.height===e.height&&i.x+i.width===e.x)i.width+=e.width
else if(i.x===e.x&&i.width===e.width&&i.y+i.height===e.y)i.height+=e.height
else if(e.y===i.y&&e.height===i.height&&e.x+e.width===i.x)i.x=e.x,i.width+=e.width
else{if(e.x!==i.x||e.width!==i.width||e.y+e.height!==i.y)continue
i.y=e.y,i.height+=e.height}this._free.splice(t,1),this.release(e)}this._free.push(e)}}var y=i(984),O=i(1072)
const T=e=>Math.floor(e/256)
class S{constructor(e,t,i){this.width=0,this.height=0,this._dirties=[],this._glyphData=[],this._currentPage=0,this._glyphCache={},this._textures=[],this._rangePromises=new Map,this.width=e,this.height=t,this._glyphSource=i,this._binPack=new x(e-4,t-4),this._glyphData.push(new Uint8Array(e*t)),this._dirties.push(!0),this._textures.push(null),this._initDecorationGlyph()}dispose(){this._binPack=null
for(const e of this._textures)e&&e.dispose()
this._textures.length=0,this._glyphData.length=0}_initDecorationGlyph(){const e=[117,149,181,207,207,181,149,117],t=[]
for(let i=0;i<e.length;i++){const n=e[i]
for(let e=0;e<11;e++)t.push(n)}const i={metrics:{width:5,height:2,left:0,top:0,advance:0},bitmap:new Uint8Array(t)}
this._recordGlyph(i)}async getGlyphItems(e,t,i){const n=this._getGlyphCache(e)
return await this._fetchRanges(e,t,i),t.map(t=>this._getMosaicItem(n,e,t))}bind(e,t,i,n){const r=this._getTexture(e,i)
r.setSamplingMode(t),this._dirties[i]&&(r.setData(this._glyphData[i]),this._dirties[i]=!1),e.bindTexture(r,n)}_getGlyphCache(e){return this._glyphCache[e]||(this._glyphCache[e]={}),this._glyphCache[e]}_getTexture(e,t){return this._textures[t]||(this._textures[t]=new O.a(e,{pixelFormat:y.p.ALPHA,dataType:y.q.UNSIGNED_BYTE,width:this.width,height:this.height},new Uint8Array(this.width*this.height))),this._textures[t]}_invalidate(){this._dirties[this._currentPage]=!0}async _fetchRanges(e,t,i){const n=function(e){const t=new Set
for(const i of e)t.add(T(i))
return t}(t),r=[]
n.forEach(t=>{r.push(this._fetchRange(e,t,i))}),await Promise.all(r)}async _fetchRange(e,t,i){if(t>256)return
const n=e+t
return function(e,t,i){return e.has(t)||e.set(t,i().then(()=>{e.delete(t)}).catch(i=>{e.delete(t),Object(h.r)(i)})),e.get(t)}(this._rangePromises,n,()=>this._glyphSource.getRange(e,t,i))}_getMosaicItem(e,t,i){if(!e[i]){const n=this._glyphSource.getGlyph(t,i)
if(!n||!n.metrics)return(e=>({rect:new v.a(0,0,0,0),page:0,metrics:{left:0,width:0,height:0,advance:0,top:0},code:e,sdf:!0}))(i)
const r=this._recordGlyph(n),s=this._currentPage,a=n.metrics
e[i]={rect:r,page:s,metrics:a,code:i,sdf:!0},this._invalidate()}return e[i]}_recordGlyph(e){const t=e.metrics
let i
if(0===t.width)i=new v.a(0,0,0,0)
else{const n=3,r=t.width+2*n,s=t.height+2*n
i=this._binPack.allocate(r,s),i.isEmpty&&(this._dirties[this._currentPage]||(this._glyphData[this._currentPage]=null),this._currentPage=this._glyphData.length,this._glyphData.push(new Uint8Array(this.width*this.height)),this._dirties.push(!0),this._textures.push(null),this._initDecorationGlyph(),this._binPack=new x(this.width-4,this.height-4),i=this._binPack.allocate(r,s))
const a=this._glyphData[this._currentPage],o=e.bitmap
let l,c
if(o)for(let e=0;e<s;e++){l=r*e,c=this.width*(i.y+e)+i.x
for(let e=0;e<r;e++)a[c+e]=o[l+e]}Object(b.a)("esri-glyph-debug")&&this._showDebugPage(a)}return i}_showDebugPage(e){const t=document.createElement("canvas"),i=t.getContext("2d"),n=new ImageData(this.width,this.height),r=n.data
t.width=this.width,t.height=this.height,t.style.border="1px solid black"
for(let t=0;t<e.length;++t)r[4*t+0]=e[t],r[4*t+1]=0,r[4*t+2]=0,r[4*t+3]=255
i.putImageData(n,0,0),document.body.appendChild(t)}}var w=i(1282)
class E{constructor(e){for(this._metrics=[],this._bitmaps=[];e.next();)switch(e.tag()){case 1:{const t=e.getMessage()
for(;t.next();)switch(t.tag()){case 3:{const e=t.getMessage()
let i,n,r,s,a,o,l
for(;e.next();)switch(e.tag()){case 1:i=e.getUInt32()
break
case 2:n=e.getBytes()
break
case 3:r=e.getUInt32()
break
case 4:s=e.getUInt32()
break
case 5:a=e.getSInt32()
break
case 6:o=e.getSInt32()
break
case 7:l=e.getUInt32()
break
default:e.skip()}e.release(),i&&(this._metrics[i]={width:r,height:s,left:a,top:o,advance:l},this._bitmaps[i]=n)
break}default:t.skip()}t.release()
break}default:e.skip()}}getMetrics(e){return this._metrics[e]}getBitmap(e){return this._bitmaps[e]}}class M{constructor(){this._ranges=[]}getRange(e){return this._ranges[e]}addRange(e,t){this._ranges[e]=t}}class C{constructor(e){this._glyphInfo={},this._baseURL=e}getRange(e,t,i){const n=this._getFontStack(e)
if(n.getRange(t))return Promise.resolve()
const s=256*t,a=s+255,o=this._baseURL.replace("{fontstack}",e).replace("{range}",s+"-"+a)
return Object(r.default)(o,{responseType:"array-buffer",...i}).then(e=>{n.addRange(t,new E(new w.a(new Uint8Array(e.data),new DataView(e.data))))})}getGlyph(e,t){const i=this._getFontStack(e)
if(!i)return
const n=Math.floor(t/256)
if(n>256)return
const r=i.getRange(n)
return r?{metrics:r.getMetrics(t),bitmap:r.getBitmap(t)}:void 0}_getFontStack(e){let t=this._glyphInfo[e]
return t||(t=this._glyphInfo[e]=new M),t}}var I=i(1370)
class P{constructor(e){this._svg=null,this.size=e
const t=document.createElement("canvas")
t.width=t.height=e,this._context=t.getContext("2d"),this._gridOuter=new Float64Array(e*e),this._gridInner=new Float64Array(e*e),this._f=new Float64Array(e),this._d=new Float64Array(e),this._z=new Float64Array(e+1),this._v=new Int16Array(e)}dispose(){this._context=this._gridOuter=this._gridInner=this._f=this._d=this._z=this._v=null,this._svg&&(document.body.removeChild(this._svg),this._svg=null)}draw(e,t,i=31){this._initSVG()
const n=this.createSVGString(e)
return new Promise((e,r)=>{const s=new Image
s.src="data:image/svg+xml; charset=utf8, "+encodeURIComponent(n),s.onload=()=>{s.onload=null,this._context.clearRect(0,0,this.size,this.size),this._context.drawImage(s,0,0,this.size,this.size)
const t=this._context.getImageData(0,0,this.size,this.size),n=new Uint8Array(this.size*this.size*4)
for(let e=0;e<this.size*this.size;e++){const i=t.data[4*e+3]/255
this._gridOuter[e]=1===i?0:0===i?1e20:Math.max(0,.5-i)**2,this._gridInner[e]=1===i?1e20:0===i?0:Math.max(0,i-.5)**2}this._edt(this._gridOuter,this.size,this.size),this._edt(this._gridInner,this.size,this.size)
for(let e=0;e<this.size*this.size;e++){const t=this._gridOuter[e]-this._gridInner[e]
Object(I.a)(.5-t/(2*i),n,4*e)}e(n)}
const a=t&&t.signal
a&&Object(h.n)(a,()=>r(Object(h.c)()))})}_initSVG(){if(!this._svg){const e=document.createElementNS("http://www.w3.org/2000/svg","svg")
e.setAttribute("style","position: absolute;"),e.setAttribute("width","0"),e.setAttribute("height","0"),e.setAttribute("aria-hidden","true"),e.setAttribute("role","presentation"),document.body.appendChild(e),this._svg=e}return this._svg}createSVGString(e){const t=this._initSVG(),i=document.createElementNS("http://www.w3.org/2000/svg","path")
i.setAttribute("d",e),t.appendChild(i)
const n=i.getBBox(),r=n.width/n.height,s=this.size/2
let a,o,l,c
if(r>1){o=a=s/n.width
const e=s*(1/r)
l=this.size/4,c=s-e/2}else a=o=s/n.height,l=s-s*r/2,c=this.size/4
const u=-n.x*a+l,h=-n.y*o+c
i.setAttribute("style",`transform: matrix(${a}, 0, 0, ${o}, ${u}, ${h})`)
const d=`<svg style="fill:red;" height="${this.size}" width="${this.size}" xmlns="http://www.w3.org/2000/svg">${t.innerHTML}</svg>`
return t.removeChild(i),d}_edt(e,t,i){const n=this._f,r=this._d,s=this._v,a=this._z
for(let o=0;o<t;o++){for(let r=0;r<i;r++)n[r]=e[r*t+o]
this._edt1d(n,r,s,a,i)
for(let n=0;n<i;n++)e[n*t+o]=r[n]}for(let o=0;o<i;o++){for(let i=0;i<t;i++)n[i]=e[o*t+i]
this._edt1d(n,r,s,a,t)
for(let i=0;i<t;i++)e[o*t+i]=Math.sqrt(r[i])}}_edt1d(e,t,i,n,r){i[0]=0,n[0]=-1e20,n[1]=1e20
for(let t=1,s=0;t<r;t++){let r=(e[t]+t*t-(e[i[s]]+i[s]*i[s]))/(2*t-2*i[s])
for(;r<=n[s];)s--,r=(e[t]+t*t-(e[i[s]]+i[s]*i[s]))/(2*t-2*i[s])
s++,i[s]=t,n[s]=r,n[s+1]=1e20}for(let s=0,a=0;s<r;s++){for(;n[a+1]<s;)a++
t[s]=(s-i[a])*(s-i[a])+e[i[a]]}}}var A=i(1616)
function R(e){return e&&"static"===e.type}class F{constructor(e,t,i=0){this._mosaicPages=[],this._maxItemSize=0,this._currentPage=0,this._pageWidth=0,this._pageHeight=0,this._mosaicRects=new Map,this._spriteCopyQueue=[],this.pixelRatio=1,(e<=0||t<=0)&&console.error("Sprites mosaic defaultWidth and defaultHeight must be greater than zero!"),this._pageWidth=e,this._pageHeight=t,i>0&&(this._maxItemSize=i),this.pixelRatio=window.devicePixelRatio||1,this._binPack=new x(this._pageWidth,this._pageHeight)
const n=Math.floor(this._pageWidth),r=Math.floor(this._pageHeight)
this._mosaicPages.push({mosaicsData:{type:"static",data:new Uint32Array(n*r)},size:[this._pageWidth,this._pageHeight],dirty:!0,texture:void 0})}getWidth(e){return e>=this._mosaicPages.length?-1:this._mosaicPages[e].size[0]}getHeight(e){return e>=this._mosaicPages.length?-1:this._mosaicPages[e].size[1]}getPageTexture(e){return e<this._mosaicPages.length?this._mosaicPages[e].texture:null}has(e){return this._mosaicRects.has(e)}get itemCount(){return this._mosaicRects.size}getSpriteItem(e){return this._mosaicRects.get(e)}addSpriteItem(e,t,i,n,r,s,a=1){if(this._mosaicRects.has(e))return this._mosaicRects.get(e)
let o,l,c
if(R(i))[o,l,c]=this._allocateImage(t[0],t[1])
else{o=new v.a(0,0,t[0],t[1]),l=this._mosaicPages.length
const e=void 0
this._mosaicPages.push({mosaicsData:i,size:[t[0]+2*p.G,t[1]+2*p.G],dirty:!0,texture:e})}if(o.width<=0||o.height<=0)return null
const u={rect:o,width:t[0],height:t[1],sdf:r,simplePattern:s,pixelRatio:a,page:l}
return this._mosaicRects.set(e,u),R(i)&&this._copy({rect:o,spriteSize:t,spriteData:i.data,page:l,pageSize:c,repeat:n,sdf:r}),u}hasItemsToProcess(){return 0!==this._spriteCopyQueue.length}processNextItem(){const e=this._spriteCopyQueue.pop()
e&&this._copy(e)}getSpriteItems(e){const t={}
for(const i of e)t[i]=this.getSpriteItem(i)
return t}getMosaicItemPosition(e){const t=this.getSpriteItem(e),i=t&&t.rect
if(!i)return null
i.width=t.width,i.height=t.height
const n=t.width,r=t.height,s=p.G,a=this._mosaicPages[t.page]
return{size:[t.width,t.height],tl:[(i.x+s)/a[0],(i.y+s)/a[1]],br:[(i.x+s+n)/a[0],(i.y+s+r)/a[1]],page:t.page}}bind(e,t,i=0,n=0){const r=this._mosaicPages[i],s=r.mosaicsData
let a=r.texture
a||(a=function(e,t){return new O.a(e,{pixelFormat:y.p.RGBA,dataType:y.q.UNSIGNED_BYTE,width:t[0],height:t[1]},null)}(e,r.size),r.texture=a),a.setSamplingMode(t),R(s)?(e.bindTexture(a,n),r.dirty&&(a.setData(new Uint8Array(s.data.buffer)),a.generateMipmap())):(s.data.bindFrame(e,a,n),a.generateMipmap()),r.dirty=!1}static _copyBits(e,t,i,n,r,s,a,o,l,c,u){let h=n*t+i,d=o*s+a
if(u){d-=s
for(let a=-1;a<=c;a++,h=((a+c)%c+n)*t+i,d+=s)for(let t=-1;t<=l;t++)r[d+t]=e[h+(t+l)%l]}else for(let i=0;i<c;i++){for(let t=0;t<l;t++)r[d+t]=e[h+t]
h+=t,d+=s}}_copy(e){if(e.page>=this._mosaicPages.length)return
const t=this._mosaicPages[e.page],i=t.mosaicsData
if(!R(t.mosaicsData))throw new a.a("mapview-invalid-resource","unsuitable data type!")
const n=e.spriteData,r=i.data
r&&n||console.error("Source or target images are uninitialized!"),F._copyBits(n,e.spriteSize[0],0,0,r,e.pageSize[0],e.rect.x+p.G,e.rect.y+p.G,e.spriteSize[0],e.spriteSize[1],e.repeat),t.dirty=!0}_allocateImage(e,t){e+=2*p.G,t+=2*p.G
const i=Math.max(e,t)
if(this._maxItemSize&&this._maxItemSize<i){const i=2**Math.ceil(Object(A.b)(e)),n=2**Math.ceil(Object(A.b)(t)),r=new v.a(0,0,e,t)
return this._mosaicPages.push({mosaicsData:{type:"static",data:new Uint32Array(i*n)},size:[i,n],dirty:!0,texture:void 0}),[r,this._mosaicPages.length-1,[i,n]]}const n=this._binPack.allocate(e,t)
if(n.width<=0){const i=this._mosaicPages[this._currentPage]
return!i.dirty&&R(i.mosaicsData)&&(i.mosaicsData.data=null),this._currentPage=this._mosaicPages.length,this._mosaicPages.push({mosaicsData:{type:"static",data:new Uint32Array(this._pageWidth*this._pageHeight)},size:[this._pageWidth,this._pageHeight],dirty:!0,texture:void 0}),this._binPack=new x(this._pageWidth,this._pageHeight),this._allocateImage(e,t)}return[n,this._currentPage,[this._pageWidth,this._pageHeight]]}dispose(){this._binPack=null
for(const e of this._mosaicPages){const t=e.texture
t&&t.dispose()
const i=e.mosaicsData
R(i)||i.data.destroy()}this._mosaicPages=null,this._mosaicRects.clear()}}var L=i(1022),D=i(1152),j=i(2050),B=i(1030),z=i(1696)
function N(e){return Object(D.a)(e.frameDurations.reduce((e,t)=>e+t,0))}function k(e,t){const{width:i,height:n,getFrame:r}=e,s=e.frameDurations.slice(),a=s.pop()
return s.push(Object(D.a)(a+t)),{frameDurations:s,getFrame:r,width:i,height:n}}class U{constructor(e,t,i,n){this._animation=e,this._repeatType=i,this._onFrameData=n,this._direction=1,this._currentFrame=0,this.timeToFrame=this._animation.frameDurations[this._currentFrame]
let r=0
for(;t>r;)r+=this.timeToFrame,this.nextFrame()
const s=this._animation.getFrame(this._currentFrame)
this._onFrameData(s)}nextFrame(){if(this._currentFrame+=this._direction,this._direction>0){if(this._currentFrame===this._animation.frameDurations.length)switch(this._repeatType){case B.b.None:this._currentFrame-=this._direction
break
case B.b.Loop:this._currentFrame=0
break
case B.b.Oscillate:this._currentFrame-=this._direction,this._direction=-1}}else if(-1===this._currentFrame)switch(this._repeatType){case B.b.None:this._currentFrame-=this._direction
break
case B.b.Loop:this._currentFrame=this._animation.frameDurations.length-1
break
case B.b.Oscillate:this._currentFrame-=this._direction,this._direction=1}this.timeToFrame=this._animation.frameDurations[this._currentFrame]
const e=this._animation.getFrame(this._currentFrame)
this._onFrameData(e)}}const V=document.createElement("canvas"),G=V.getContext("2d")
class W{constructor(e,t,i,n){this._animation=e,this._frameData=null,this.frameCount=this._animation.frameDurations.length,this.width=this._animation.width,this.height=this._animation.height,this._playHandle=function(e,t,i,n){const r=null==t.playAnimation||t.playAnimation,s=function(e,t,i,n){let r,{repeatType:s}=t
if(null==s&&(s=B.b.Loop),!0===t.reverseAnimation&&(e=function(e){const{width:t,height:i}=e
return{frameDurations:e.frameDurations.reverse(),getFrame:t=>{const i=e.frameDurations.length-1-t
return e.getFrame(i)},width:t,height:i}}(e)),null!=t.duration&&(e=function(e,t){const{width:i,height:n,getFrame:r}=e,s=t/N(e)
return{frameDurations:e.frameDurations.map(e=>Object(D.a)(e*s)),getFrame:r,width:i,height:n}}(e,Object(D.a)(1e3*t.duration))),null!=t.repeatDelay){const i=1e3*t.repeatDelay
s===B.b.Loop?e=k(e,Object(D.a)(i)):s===B.b.Oscillate&&(e=function(e,t){const{width:i,height:n,getFrame:r}=e,s=e.frameDurations.slice(),a=s.shift()
return s.unshift(Object(D.a)(a+t)),{frameDurations:s,getFrame:r,width:i,height:n}}(k(e,Object(D.a)(i/2)),Object(D.a)(i/2)))}if(null!=t.startTimeOffset)r=Object(D.a)(1e3*t.startTimeOffset)
else if(null!=t.randomizeStartTime){const n=Object(z.a)(i),s=82749913,a=null!=t.randomizeStartSeed?t.randomizeStartSeed:s,o=Object(z.b)(n,a)
r=Object(D.a)(o*N(e))}else r=Object(D.a)(0)
return new U(e,r,s,n)}(e,t,i,n)
let a,o=s.timeToFrame
return function e(){a=r?setTimeout(()=>{s.nextFrame(),o=s.timeToFrame,e()},o):void 0}(),{remove:()=>{r&&clearTimeout(a)}}}(this._animation,i,n,e=>{this._frameData=e,t.requestRender()})}destroy(){this._playHandle.remove()}bindFrame(e,t,i){e.bindTexture(t,i),Object(u.k)(this._frameData)||(t.updateData(0,p.G,p.G,this._frameData.width,this._frameData.height,this._frameData),this._frameData=null)}}var H=i(1371),Y=i(1500)
const X=Object(_.c)(),q="arial-unicode-ms-regular",Z=l.a.getLogger("esri.views.2d.engine.webgl.TextureManager")
function K(e,t){const i=Math.round(Object(d.h)(t)*window.devicePixelRatio),n=i>=128?2:4
return Math.min(e,i*n)}const $=(e,t,i)=>Z.error(new a.a(e,t,i))
class J{static fromMosaic(e,t){return new J(e,t.page,t.sdf)}constructor(e,t,i){this.mosaicType=e,this.page=t,this.sdf=i}}class Q{constructor(e,t,i){this._requestRender=e,this.resourceManager=t,this._allowNonPowerOfTwo=i,this._invalidFontsMap=new Map,this._sdfConverter=new P(126),this._bindingInfos=new Array,this._hashToBindingIndex=new Map,this._ongoingRasterizations=new Map,this._imageRequestQueue=new Y.a({concurrency:10,process:async(e,t)=>{Object(h.q)(t)
try{return await Object(r.default)(e,{responseType:"image",signal:t})}catch(t){if(!Object(h.j)(t))throw new a.a("mapview-invalid-resource","Could not fetch requested resource at "+e,t)
throw t}}}),this._spriteMosaic=new F(2048,2048,500),this._glyphSource=new C(n.default.fontsUrl+"/{fontstack}/{range}.pbf"),this._glyphMosaic=new S(1024,1024,this._glyphSource),this._rasterizer=new m.a(t)}dispose(){this._spriteMosaic.dispose(),this._glyphMosaic.dispose(),this._rasterizer.dispose(),this._sdfConverter.dispose(),this._spriteMosaic=null,this._glyphMosaic=null,this._sdfConverter=null,this._hashToBindingIndex.clear(),this._hashToBindingIndex=null,this._bindingInfos=null,this._ongoingRasterizations.clear(),this._ongoingRasterizations=null,this._imageRequestQueue.clear(),this._imageRequestQueue=null}get sprites(){return this._spriteMosaic}get glyphs(){return this._glyphMosaic}async rasterizeItem(e,t,i,n){if(Object(u.k)(e))return $("mapview-null-resource","Unable to rasterize null resource"),null
switch(e.type){case"text":case"esriTS":{const t=await this._rasterizeText(e,i,n)
return t.forEach(e=>this._setTextureBinding(g.a.GLYPH,e)),{glyphMosaicItems:t}}default:{if(Object(L.q)(e))return $("mapview-invalid-type","MapView does not support symbol type: "+e.type,e),null
const i=await this._rasterizeSpriteSymbol(e,t,n)
return Object(H.a)(i)&&i&&this._setTextureBinding(g.a.SPRITE,i),{spriteMosaicItem:i}}}}bindTextures(e,t,i,n=!1){if(0===i.textureBinding)return
const r=this._bindingInfos[i.textureBinding-1],s=r.page,a=n?y.z.LINEAR_MIPMAP_LINEAR:y.z.LINEAR
switch(r.mosaicType){case g.a.SPRITE:{const i=this.sprites.getWidth(s),n=this.sprites.getHeight(s),r=Object(f.s)(X,i,n)
return this._spriteMosaic.bind(e,a,s,p.U),t.setUniform1i("u_texture",p.U),void t.setUniform2fv("u_mosaicSize",r)}case g.a.GLYPH:{const i=this.glyphs.width,n=this.glyphs.height,r=Object(f.s)(X,i,n)
return this._glyphMosaic.bind(e,a,s,p.O),t.setUniform1i("u_texture",p.O),void t.setUniform2fv("u_mosaicSize",r)}default:Z.error("mapview-texture-manager","Cannot handle unknown type "+r.mosaicType)}}_hashMosaic(e,t){return 1|e<<1|(t.sdf?1:0)<<2|t.page<<3}_setTextureBinding(e,t){const i=this._hashMosaic(e,t)
if(!this._hashToBindingIndex.has(i)){const n=J.fromMosaic(e,t),r=this._bindingInfos.length+1
this._hashToBindingIndex.set(i,r),this._bindingInfos.push(n)}t.textureBinding=this._hashToBindingIndex.get(i)}async _rasterizeText(e,t,i){let n,r
if("cim"in e){const t=e
n=t.fontName,r=t.text}else{const t=e
n=Object(o.b)(t.font),r=t.text}const a=this._invalidFontsMap.has(n),l=t||Object(L.d)(Object(s.a)(r)[0])
try{return await this._glyphMosaic.getGlyphItems(a?q:n,l,i)}catch(e){return $("mapview-invalid-resource",`Couldn't find font ${n}. Falling back to Arial Unicode MS Regular`),this._invalidFontsMap.set(n,!0),this._glyphMosaic.getGlyphItems(q,l,i)}}async _rasterizeSpriteSymbol(e,t,i){if(Object(L.z)(e))return
const n=function(e){switch(e.type){case"esriSMS":return`${e.style}.${e.path}`
case"esriSLS":return`${e.style}.${e.cap}`
case"esriSFS":return""+e.style
case"esriPFS":case"esriPMS":return e.imageData?`${e.imageData}${e.width}${e.height}`:`${e.url}${e.width}${e.height}`
default:return"mosaicHash"in e?e.mosaicHash:JSON.stringify(e)}}(e)
if(this._spriteMosaic.has(n))return this._spriteMosaic.getSpriteItem(n)
if(Object(L.y)(e)||Object(L.t)(e)&&!Object(L.u)(e))return this._handleAsyncResource(n,e,i)
const r=p.D,s=this._rasterizer.rasterizeJSONResource(e,r)
if(s){const{size:t,image:i,sdf:r,simplePattern:a,rasterizationScale:o}=s
return this._addItemToMosaic(n,t,{type:"static",data:i},Object(L.A)(e),r,a,o)}return new a.a("TextureManager","unrecognized or null rasterized image")}async _handleAsyncResource(e,t,i){if(this._ongoingRasterizations.has(e))return this._ongoingRasterizations.get(e)
let n
n=Object(L.y)(t)?this._handleSVG(t,e,i):this._handleImage(t,e,i),this._ongoingRasterizations.set(e,n)
try{await n,this._ongoingRasterizations.delete(e)}catch{this._ongoingRasterizations.delete(e)}return n}async _handleSVG(e,t,i){const n=await this._sdfConverter.draw(e.path,i)
return this._addItemToMosaic(t,[126,126],{type:"static",data:new Uint32Array(n.buffer)},!1,!0,!0)}async _handleGIFOrPNG(e,t,i){const n=Object(L.o)(e)
await this.resourceManager.fetchResource(n,i)
let r=this.resourceManager.getResource(n)
if(Object(u.k)(r))return new a.a("mapview-invalid-resource",`Could not fetch requested resource at ${n}.`)
let s=r.width,o=r.height
if(r instanceof HTMLImageElement){"esriPMS"===e.type&&(s=Math.round(K(r.width,Object(L.k)(e))),o=Math.round(r.height*(s/r.width)))
const i="cim"in e?e.cim.colorSubstitutions:void 0,{size:n,sdf:a,image:l}=this._rasterizer.rasterizeImageResource(s,o,r,i)
return this._addItemToMosaic(t,n,{type:"static",data:l},Object(L.A)(e),a,!1)}this._allowNonPowerOfTwo||(s=Object(c.p)(r.width+2*p.G)-2*p.G,o=Object(c.p)(r.height+2*p.G)-2*p.G),s===r.width&&o===r.height||(r=function(e,t,i){V.width=t,V.height=i
const n=[],r=e.frameDurations.length
for(let s=0;s<r;s++){const r=e.getFrame(s)
G.clearRect(0,0,t,i),r instanceof ImageData?G.drawImage(Object(j.d)(r),0,0,t,i):G.drawImage(r,0,0,t,i),n.push(G.getImageData(0,0,t,i))}return{width:t,height:i,frameDurations:e.frameDurations,getFrame:e=>n[e]}}(r,s,o))
const l=e.animatedSymbolProperties||{},h=e.objectId,d=new W(r,this._requestRender,l,h)
return this._addItemToMosaic(t,[d.width,d.height],{type:"animated",data:d},Object(L.A)(e),!1,!1)}async _handleImage(e,t,i){if(Object(L.s)(e)||Object(L.w)(e))return this._handleGIFOrPNG(e,t,i)
const n=Object(L.o)(e)
try{let s
const a=this.resourceManager.getResource(n)
if(Object(u.l)(a)&&a instanceof HTMLImageElement)s=a
else{const{data:e}=await this._imageRequestQueue.push(n,{...i})
s=e}if(Object(L.x)(n))if("width"in e&&"height"in e)s.width=Object(d.h)(e.width),s.height=Object(d.h)(e.height)
else if("cim"in e){var r
const t=e.cim
s.width=Object(d.h)(null!=(r=t.width)?r:t.scaleX*t.size),s.height=Object(d.h)(t.size)}if(!s.width||!s.height)return null
let o=s.width,l=s.height
"esriPMS"===e.type&&(o=Math.round(K(s.width,Object(L.k)(e))),l=Math.round(s.height*(o/s.width)))
const c="cim"in e?e.cim.colorSubstitutions:void 0,{size:h,sdf:f,image:_}=this._rasterizer.rasterizeImageResource(o,l,s,c)
return this._addItemToMosaic(t,h,{type:"static",data:_},Object(L.A)(e),f,!1)}catch(e){if(!Object(h.j)(e))return new a.a("mapview-invalid-resource",`Could not fetch requested resource at ${n}. ${e.message}`)}}_addItemToMosaic(e,t,i,n,r,s,a){return this._spriteMosaic.addSpriteItem(e,t,i,n,r,s,a)}}},2686:function(e,t,i){"use strict"
i.d(t,"a",(function(){return _}))
var n=i(446),r=i(233),s=i(23),a=i(1003),o=i(1362),l=i(1320)
const c=e=>`#define ${(e=>e.replace("-","_").toUpperCase())(e)}\n`
function u(e){return{attributes:new Map([["a_pos",0],["a_tex",1]]),shaders:{vertexShader:c(e)+Object(l.a)("blend/blend.vert"),fragmentShader:c(e)+Object(l.a)("blend/blend.frag")}}}var h=i(984),d=i(1072)
const f=r.a.getLogger("esri.views.2d.engine.webgl.effects.blendEffects.BlendEffect")
class _{constructor(){this._size=[0,0]}dispose(e){this._backBufferTexture=Object(s.f)(this._backBufferTexture),this._quad=Object(s.f)(this._quad)}draw(e,t,i,r,s){const{context:o,drawPhase:l}=e
if(this._setupShader(o),r&&"normal"!==r&&l!==a.c.LABEL)return void this._drawBlended(e,t,i,r,s)
const c=u("normal"),d=o.programCache.acquire(c.shaders.vertexShader,c.shaders.fragmentShader,c.attributes)
if(!d)return void f.error(new n.a("mapview-BlendEffect",'Error creating shader program for blend mode "normal"'))
o.useProgram(d),t.setSamplingMode(i),o.bindTexture(t,0),d.setUniform1i("u_layerTexture",0),d.setUniform1f("u_opacity",s),o.setBlendingEnabled(!0),o.setBlendFunction(h.b.ONE,h.b.ONE_MINUS_SRC_ALPHA)
const _=this._quad
_.draw(),_.unbind(),d.dispose()}_drawBlended(e,t,i,r,a){const{context:o,state:l,pixelRatio:c,inFadeTransition:d}=e,{size:_}=l,m=o.getBoundFramebufferObject()
let p,g
if(Object(s.l)(m)){const e=m.descriptor
p=e.width,g=e.height}else p=Math.round(c*_[0]),g=Math.round(c*_[1])
this._createOrResizeTexture(e,p,g)
const b=this._backBufferTexture
m.copyToTexture(0,0,p,g,0,0,b),o.setStencilTestEnabled(!1),o.setStencilWriteMask(0),o.setBlendingEnabled(!0),o.setDepthTestEnabled(!1),o.setDepthWriteEnabled(!1)
const v=u(r),x=o.programCache.acquire(v.shaders.vertexShader,v.shaders.fragmentShader,v.attributes)
if(!x)return void f.error(new n.a("mapview-BlendEffect","Error creating shader program for blend mode "+r))
o.useProgram(x),b.setSamplingMode(i),o.bindTexture(b,0),x.setUniform1i("u_backbufferTexture",0),t.setSamplingMode(i),o.bindTexture(t,1),x.setUniform1i("u_layerTexture",1),x.setUniform1f("u_opacity",a),x.setUniform1f("u_inFadeOpacity",d?1:0),o.setBlendFunction(h.b.ONE,h.b.ZERO)
const y=this._quad
y.draw(),y.unbind(),x.dispose(),o.setBlendFunction(h.b.ONE,h.b.ONE_MINUS_SRC_ALPHA)}_setupShader(e){this._quad||(this._quad=new o.a(e,[-1,-1,1,-1,-1,1,1,1]))}_createOrResizeTexture(e,t,i){const{context:n}=e
null!==this._backBufferTexture&&t===this._size[0]&&i===this._size[1]||(this._backBufferTexture?this._backBufferTexture.resize(t,i):this._backBufferTexture=new d.a(n,{target:h.A.TEXTURE_2D,pixelFormat:h.p.RGBA,internalFormat:h.p.RGBA,dataType:h.q.UNSIGNED_BYTE,wrapMode:h.B.CLAMP_TO_EDGE,samplingMode:h.z.LINEAR,flipped:!1,width:t,height:i}),this._size[0]=t,this._size[1]=i)}}},2805:function(e,t,i){"use strict"
i.d(t,"a",(function(){return o}))
var n=i(1320),r=i(2129)
const s=e=>{let t=""
t+=e[0].toUpperCase()
for(let i=1;i<e.length;i++){const n=e[i]
n===n.toUpperCase()?(t+="_",t+=n):t+=n.toUpperCase()}return t},a=e=>{const t={}
for(const i in e)t[s(i)]=e[i]
return Object(r.a)(t)},o=(e,t,i,r)=>{const s=e+e.substring(e.lastIndexOf("/")),o=t+t.substring(t.lastIndexOf("/")),l=a(r)
return{attributes:i,shaders:{vertexShader:l+Object(n.a)(s+".vert"),fragmentShader:l+Object(n.a)(o+".frag")}}}},2853:function(e,t,i){"use strict"
i.d(t,"a",(function(){return _}))
var n=i(771),r=i(446),s=i(973),a=i(2295),o=i(1152)
const l=[137,80,78,71,13,10,26,10]
function c(e){if(!function(e){const t=new Uint8Array(e)
return!l.some((e,i)=>e!==t[i])}(e))return!1
const t=new DataView(e),i=new Uint8Array(e)
let n,r=8
do{const e=t.getUint32(r)
if(n=String.fromCharCode.apply(String,Array.prototype.slice.call(i.subarray(r+4,r+8))),"acTL"===n)return!0
r+=12+e}while("IEND"!==n&&r<i.length)
return!1}var u=i(2050),h=i(2296)
const d=[71,73,70]
function f(e){if(!function(e){const t=new Uint8Array(e)
return!d.some((e,i)=>e!==t[i])}(e))return!1
const t=new DataView(e),i=t.getUint8(10)
let n=13+(128&i?3*2**(1+(7&i)):0),r=0,s=!1
for(;!s;){switch(t.getUint8(n++)){case 33:if(!a())return!1
break
case 44:o()
break
case 59:s=!0
break
default:return!1}if(r>1)return!0}function a(){switch(t.getUint8(n++)){case 249:n++,n+=4,l()
break
case 1:r++,n++,n+=12,l()
break
case 254:l()
break
case 255:n++,n+=8,n+=3,l()
break
default:return!1}return!0}function o(){r++,n+=8
const e=t.getUint8(n++)
n+=128&e?3*2**(1+(7&e)):0,n++,l()}function l(){let e
for(;e=t.getUint8(n++);)n+=e}return!1}class _{constructor(){this._resourceMap=new Map,this._inFlightResourceMap=new Map,this.geometryEngine=null,this.geometryEnginePromise=null}destroy(){this._inFlightResourceMap.clear(),this._resourceMap.clear()}getResource(e){var t
return null!=(t=this._resourceMap.get(e))?t:null}async fetchResource(e,t){const i=this._resourceMap.get(e)
if(i)return{width:i.width,height:i.height}
let l=this._inFlightResourceMap.get(e)
return l?l.then(e=>({width:e.width,height:e.height})):(l=async function(e,t){const{arrayBuffer:i,mediaType:l}=await async function(e,t){let i
const a=";base64,"
if(e.includes(a)){const t=e.indexOf(a),n=e.indexOf(a)+a.length,r=e.substring(n),s=atob(r),o=new Uint8Array(s.length)
for(let e=0;e<s.length;e++)o[e]=s.charCodeAt(e)
i={arrayBuffer:o.buffer,mediaType:e.substring(0,t).replace("data:","")}}else try{const r=await Object(n.default)(e,{responseType:"array-buffer",...t}),s=r.data
i={arrayBuffer:s,mediaType:r.getHeader("Content-Type")}}catch(t){if(!Object(s.j)(t))throw new r.a("mapview-invalid-resource","Could not fetch requested resource at "+e)}return i}(e,t),d="image/png"===l
return"image/gif"===l&&f(i)?async function(e,t){const i=Object(h.b)(e),n=Object(h.a)(i,!0),{width:r,height:s}=i.lsd,a=document.createElement("canvas")
a.width=r,a.height=s
const l=a.getContext("2d",{willReadFrequently:!0}),c=[],d=[]
for(const e of n){d.push(Object(o.a)(e.delay||100))
const t=new ImageData(e.patch,e.dims.width,e.dims.height),i=Object(u.d)(t),n=3===e.disposalType?l.getImageData(e.dims.left,e.dims.top,e.dims.width,e.dims.height):void 0
l.drawImage(i,e.dims.left,e.dims.top)
const a=l.getImageData(0,0,r,s)
c.push(a),1===e.disposalType||(2===e.disposalType?l.clearRect(e.dims.left,e.dims.top,e.dims.width,e.dims.height):3===e.disposalType&&l.putImageData(n,e.dims.left,e.dims.top))}return{frameDurations:d,getFrame:e=>c[e],width:r,height:s}}(i):d&&c(i)?async function(e,t){const i=Object(a.a)(e)
if(i instanceof Error)throw i
await i.createImages(),Object(s.q)(t)
const{frames:n,width:r,height:l}=i,c=document.createElement("canvas")
c.width=r,c.height=l
const u=c.getContext("2d",{willReadFrequently:!0}),h=[],d=[]
for(const e of n){d.push(Object(o.a)(e.delay||100))
const t=e.imageElement
0===e.blendOp?u.globalCompositeOperation="copy":u.globalCompositeOperation="source-over"
const i=2===e.disposeOp?u.getImageData(e.left,e.top,e.width,e.height):void 0
u.drawImage(t,e.left,e.top)
const n=u.getImageData(0,0,r,l)
h.push(n),0===e.disposeOp||(1===e.disposeOp?u.clearRect(e.left,e.top,e.width,e.height):2===e.disposeOp&&u.putImageData(i,e.left,e.top))}return{frameDurations:d,getFrame:e=>h[e],width:r,height:l}}(i,t):async function(e,t){const i=window.URL.createObjectURL(e)
try{const{data:e}=await Object(n.default)(i,{...t,responseType:"image"})
return e}catch(e){if(!Object(s.j)(e))throw new r.a("mapview-invalid-resource","Could not fetch requested resource at "+i)
throw e}finally{window.URL.revokeObjectURL(i)}}(new Blob([i],{type:l}),t)}(e,t),this._inFlightResourceMap.set(e,l),l.then(t=>(this._inFlightResourceMap.delete(e),this._resourceMap.set(e,t),{width:t.width,height:t.height}),()=>({width:0,height:0})))}deleteResource(e){this._inFlightResourceMap.delete(e),this._resourceMap.delete(e)}}},2866:function(e,t,i){"use strict"
i.d(t,"a",(function(){return x}))
var n=i(1610),r=i(2529),s=i(2129)
const a=e=>Object(s.a)({ID:e.id,PATTERN:e.pattern}),o={shaders:e=>({vertexShader:a(e)+Object(r.a)("background/background.vert"),fragmentShader:a(e)+Object(r.a)("background/background.frag")})},l=e=>Object(s.a)({ID:e.id}),c={shaders:e=>({vertexShader:l(e)+Object(r.a)("circle/circle.vert"),fragmentShader:l(e)+Object(r.a)("circle/circle.frag")})},u=e=>Object(s.a)({ID:e.id,PATTERN:e.pattern}),h={shaders:e=>({vertexShader:u(e)+Object(r.a)("fill/fill.vert"),fragmentShader:u(e)+Object(r.a)("fill/fill.frag")})},d=e=>Object(s.a)({ID:e.id}),f={shaders:e=>({vertexShader:d(e)+Object(r.a)("outline/outline.vert"),fragmentShader:d(e)+Object(r.a)("outline/outline.frag")})},_=e=>Object(s.a)({ID:e.id,SDF:e.sdf}),m={shaders:e=>({vertexShader:_(e)+Object(r.a)("icon/icon.vert"),fragmentShader:_(e)+Object(r.a)("icon/icon.frag")})},p=e=>Object(s.a)({ID:e.id,PATTERN:e.pattern,SDF:e.sdf}),g={shaders:e=>({vertexShader:p(e)+Object(r.a)("line/line.vert"),fragmentShader:p(e)+Object(r.a)("line/line.frag")})},b=e=>Object(s.a)({ID:e.id}),v={shaders:e=>({vertexShader:b(e)+Object(r.a)("text/text.vert"),fragmentShader:b(e)+Object(r.a)("text/text.frag")})}
class x{constructor(){this._programByKey=new Map}dispose(){this._programByKey.forEach(e=>e.dispose()),this._programByKey.clear()}getMaterialProgram(e,t,i){const n=t.key<<3|this._getMaterialOptionsValue(t.type,i)
if(this._programByKey.has(n))return this._programByKey.get(n)
const r=this._getProgramTemplate(t.type),{shaders:s}=r,{vertexShader:a,fragmentShader:o}=s(i),l=t.getShaderHeader(),c=t.getShaderMain(),u=a.replace("#pragma header",l).replace("#pragma main",c),h=e.programCache.acquire(u,o,t.getAttributeLocations())
return this._programByKey.set(n,h),h}_getMaterialOptionsValue(e,t){switch(e){case n.b.BACKGROUND:{const e=t
return(e.pattern?1:0)<<1|(e.id?1:0)}case n.b.FILL:{const e=t
return(e.pattern?1:0)<<1|(e.id?1:0)}case n.b.OUTLINE:return t.id?1:0
case n.b.LINE:{const e=t
return(e.sdf?1:0)<<2|(e.pattern?1:0)<<1|(e.id?1:0)}case n.b.ICON:{const e=t
return(e.sdf?1:0)<<1|(e.id?1:0)}case n.b.CIRCLE:case n.b.TEXT:return t.id?1:0
default:return 0}}_getProgramTemplate(e){switch(e){case n.b.BACKGROUND:return o
case n.b.CIRCLE:return c
case n.b.FILL:return h
case n.b.ICON:return m
case n.b.LINE:return g
case n.b.OUTLINE:return f
case n.b.TEXT:return v
default:return null}}}},3080:function(e,t,i){"use strict"
i.r(t),i.d(t,"Stage",(function(){return Me})),i.d(t,"LabelManager",(function(){return Ce.a})),i.d(t,"GraphicsView2D",(function(){return Ie.a})),i.d(t,"GraphicContainer",(function(){return Pe.a})),i.d(t,"MapViewNavigation",(function(){return Ae.a})),i.d(t,"MagnifierView2D",(function(){return Ue}))
var n=i(446),r=i(1043),s=i(235),a=i(23),o=i(1024),l=i(1151),c=i(2853),u=i(1502),h=i(2297),d=i(1003),f=i(1488),_=i(2866),m=i(1367),p=i(2646),g=i(1068),b=i(984),v=i(1293),x=i(1116)
class y{constructor(){this._initialized=!1}dispose(){this._program=Object(a.f)(this._program),this._vertexArrayObject=Object(a.f)(this._vertexArrayObject)}render(e,t,i,n){e&&(this._initialized||this._initialize(e),e.setBlendFunctionSeparate(b.b.ONE,b.b.ONE_MINUS_SRC_ALPHA,b.b.ONE,b.b.ONE_MINUS_SRC_ALPHA),e.bindVAO(this._vertexArrayObject),e.useProgram(this._program),t.setSamplingMode(i),e.bindTexture(t,0),this._program.setUniform1i("u_tex",0),this._program.setUniform1f("u_opacity",n),e.drawArrays(b.r.TRIANGLE_STRIP,0,4),e.bindTexture(null,0),e.bindVAO())}_initialize(e){if(this._initialized)return!0
const t=Object(v.a)(e,p.a)
if(!t)return!1
const i=new Int8Array(16)
i[0]=-1,i[1]=-1,i[2]=0,i[3]=0,i[4]=1,i[5]=-1,i[6]=1,i[7]=0,i[8]=-1,i[9]=1,i[10]=0,i[11]=1,i[12]=1,i[13]=1,i[14]=1,i[15]=1
const n=p.a.attributes,r=new x.a(e,n,m.c,{geometry:g.a.createVertex(e,b.D.STATIC_DRAW,i)})
return this._program=t,this._vertexArrayObject=r,this._initialized=!0,!0}}var O=i(2805)
const T=e=>e===d.c.HITTEST||e===d.c.LABEL_ALPHA
class S{constructor(e){this._rctx=e,this._programByKey=new Map}dispose(){this._programByKey.forEach(e=>e.dispose()),this._programByKey.clear()}getProgram(e,t=[]){const i=e.vsPath+"."+e.fsPath+JSON.stringify(t)
if(this._programByKey.has(i))return this._programByKey.get(i)
const n={...t.map(e=>"string"==typeof e?{name:e,value:!0}:e).reduce((e,t)=>({...e,[t.name]:t.value}),{})},{vsPath:r,fsPath:s,attributes:a}=e,o=Object(O.a)(r,s,a,n),l=this._rctx.programCache.acquire(o.shaders.vertexShader,o.shaders.fragmentShader,o.attributes)
if(!l)throw new Error("Unable to get program for key: ${key}")
return this._programByKey.set(i,l),l}getMaterialProgram(e,t,i,n,r){const s=(({rendererInfo:e,drawPhase:t},i,n)=>{return`${i.getVariationHash()}-${r=t,(T(r)?1:0)|(r===d.c.HIGHLIGHT?2:0)}-${e.getVariationHash()}-${Object(a.l)(n)&&n.join(".")}`
var r})(e,t,r)
if(this._programByKey.has(s))return this._programByKey.get(s)
const o=((e,t,i,n={})=>{if(n={...n,...t.getVariation(),...e.rendererInfo.getVariation(),highlight:e.drawPhase===d.c.HIGHLIGHT,id:T(e.drawPhase)},Object(a.l)(i))for(const e of i)n[e]=!0
return n})(e,t,r,{ignoresSamplerPrecision:e.context.driverTest.ignoresSamplerPrecision.result}),l=Object(O.a)(i,i,n,o),c=this._rctx.programCache.acquire(l.shaders.vertexShader,l.shaders.fragmentShader,l.attributes)
if(!c)throw new Error("Unable to get program for key: ${key}")
return this._programByKey.set(s,c),c}}var w=i(2679),E=i(973),M=i(1e3),C=i(1088)
class I{constructor(e,t){this._queue=[],this._context=e,this._refreshable=t}destroy(){this._queue=[]}enqueueTextureUpdate(e,t){const i=Object(E.e)(),n=e,r=M.W,s=Math.ceil(n.height/r)
if(Object(E.q)(t),this._context.type===C.a.WEBGL1)this._queue.push({type:"no-chunk",request:e,resolver:i,options:t})
else for(let a=0;a<s;a++){const o=a*r,l=a===s-1,c=l?n.height-r*a:r
this._queue.push({type:"chunk",request:e,resolver:i,chunk:a,chunkOffset:o,destHeight:c,chunkIsLast:l,options:t})}return Object(E.o)(t,e=>i.reject(e)),i.promise}upload(){let e=0
for(;this._queue.length;){const t=performance.now(),i=this._queue.shift()
if(i){if(Object(a.l)(i.options.signal)&&i.options.signal.aborted)continue
switch(i.type){case"chunk":this._uploadChunk(i)
break
case"no-chunk":this._uploadNoChunk(i)}const n=performance.now()-t
if(e+=n,e+n>=M.V)break}}this._queue.length&&this._refreshable.requestRender()}_uploadChunk(e){const{request:t,resolver:i,chunkOffset:n,chunkIsLast:r,destHeight:s}=e,{data:o,texture:l,width:c}=t
Object(a.l)(o)&&(l.updateData(0,0,n,c,s,o,n),r&&i.resolve())}_uploadNoChunk(e){const{request:t,resolver:i}=e,{data:n,texture:r}=t
r.setData(n),i.resolve()}}var P=i(1016),A=i(1109),R=i(1026),F=i(985),L=i(981),D=i(1362),j=i(2647)
const B=Object(R.h)(-.5,-.5)
class z{constructor(){this._centerNdc=Object(L.f)(),this._pxToNdc=Object(L.f)(),this._worldDimensionsPx=Object(L.f)(),this._mat3=Object(l.b)(),this._initialized=!1}dispose(){this._program=Object(a.f)(this._program),this._quad=Object(a.f)(this._quad)}render(e,t){const{context:i}=e
return!!this._updateGeometry(e,t)&&(this._initialized||this._initialize(i),i.setDepthWriteEnabled(!1),i.setDepthTestEnabled(!1),i.setColorMask(!1,!1,!1,!1),i.setBlendingEnabled(!1),i.setStencilOp(b.w.KEEP,b.w.KEEP,b.w.REPLACE),i.setStencilFunction(b.h.ALWAYS,1,255),i.setStencilTestEnabled(!0),i.useProgram(this._program),this._program.setUniformMatrix3fv("u_worldExtent",this._mat3),this._quad.draw(),this._quad.unbind(),!0)}_initialize(e){if(this._initialized)return
const t=Object(v.a)(e,j.a)
t&&(this._program=t,this._quad=new D.a(e,[0,0,1,0,0,1,1,1]),this._initialized=!0)}_updateGeometry(e,t){const{state:i,pixelRatio:n}=e,{size:r,rotation:s}=i,a=Math.round(r[0]*n),o=Math.round(r[1]*n)
if(!i.spatialReference.isWrappable)return!1
const l=Object(P.d)(s),c=Math.abs(Math.cos(l)),u=Math.abs(Math.sin(l)),h=Math.round(a*c+o*u),d=Math.round(i.worldScreenWidth)
if(h<=d)return!1
const f=a*u+o*c,_=d*n,m=(t.left-t.right)*n/a,p=(t.bottom-t.top)*n/o
Object(F.B)(this._worldDimensionsPx,_,f,1),Object(F.B)(this._pxToNdc,2/a,-2/o,1),Object(F.B)(this._centerNdc,m,p,1)
const g=this._mat3
return Object(A.j)(g,this._centerNdc),Object(A.d)(g,g,this._pxToNdc),0!==s&&Object(A.n)(g,g,l),Object(A.d)(g,g,this._worldDimensionsPx),Object(A.h)(g,g,B),!0}}var N=i(1534)
class k extends N.a{constructor(){super(...arguments),this.defines=[],this._desc={vsPath:"fx/integrate",fsPath:"fx/integrate",attributes:new Map([["a_position",0]])}}dispose(){this._quad&&this._quad.dispose()}bind(){}unbind(){}draw(e,t){if(null==t||!t.size)return
const{context:i,renderingOptions:n}=e
this._quad||(this._quad=new D.a(i,[0,0,1,0,0,1,1,1]))
const r=i.getBoundFramebufferObject(),{x:s,y:o,width:l,height:c}=i.getViewport()
t.bindTextures(i)
const u=t.getBlock(M.a)
if(Object(a.k)(u))return
const h=u.getFBO(i),d=u.getFBO(i,1)
i.setViewport(0,0,t.size,t.size),this._computeDelta(e,d,n.labelsAnimationTime),this._updateAnimationState(e,d,h),i.bindFramebuffer(r),i.setViewport(s,o,l,c)}_computeDelta(e,t,i){const{context:n,painter:r,displayLevel:s}=e,a=r.materialManager.getProgram(this._desc,["delta"])
n.bindFramebuffer(t),n.setClearColor(0,0,0,0),n.clear(n.gl.COLOR_BUFFER_BIT),n.useProgram(a),a.setUniform1i("u_maskTexture",M.H),a.setUniform1i("u_sourceTexture",M.I),a.setUniform1f("u_timeDelta",e.deltaTime),a.setUniform1f("u_animationTime",i),a.setUniform1f("u_zoomLevel",Math.round(10*s)),this._quad.draw()}_updateAnimationState(e,t,i){const{context:n,painter:r}=e,s=r.materialManager.getProgram(this._desc,["update"])
n.bindTexture(t.colorTexture,1),n.useProgram(s),s.setUniform1i("u_sourceTexture",1),n.bindFramebuffer(i),n.setClearColor(0,0,0,0),n.clear(n.gl.COLOR_BUFFER_BIT),this._quad.draw()}}var U=i(2686)
class V extends N.a{constructor(e){super(),this.name=this.constructor.name,this.defines=[e]}dispose(){}bind({context:e,painter:t}){this._prev=e.getBoundFramebufferObject()
const{width:i,height:n}=e.getViewport(),r=t.getFbos(i,n).effect0
e.bindFramebuffer(r),e.setColorMask(!0,!0,!0,!0),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT)}unbind(){}draw(e,t){const{context:i,painter:n}=e,r=n.getPostProcessingEffects(t),s=i.getBoundFramebufferObject()
for(const{postProcessingEffect:t,effect:i}of r)t.draw(e,s,i)
i.bindFramebuffer(this._prev),i.setStencilTestEnabled(!1),n.blitTexture(i,s.colorTexture,b.z.NEAREST),i.setStencilTestEnabled(!0)}}var G=i(2547),W=i(2648),H=i(1202)
class Y{constructor(){this._width=void 0,this._height=void 0,this._resources=null}dispose(){this._resources&&(this._resources.quadGeometry.dispose(),this._resources.quadVAO.dispose(),this._resources.highlightProgram.dispose(),this._resources.blurProgram.dispose(),this._resources=null)}preBlur(e,t){e.bindTexture(t,M.Q),e.useProgram(this._resources.blurProgram),this._resources.blurProgram.setUniform4fv("u_direction",[1,0,1/this._width,0]),this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector",G.a),e.bindVAO(this._resources.quadVAO),e.drawArrays(b.r.TRIANGLE_STRIP,0,4),e.bindVAO()}finalBlur(e,t){e.bindTexture(t,M.Q),e.useProgram(this._resources.blurProgram),this._resources.blurProgram.setUniform4fv("u_direction",[0,1,0,1/this._height]),this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector",G.c),e.bindVAO(this._resources.quadVAO),e.drawArrays(b.r.TRIANGLE_STRIP,0,4),e.bindVAO()}renderHighlight(e,t,i){e.bindTexture(t,M.Q),e.useProgram(this._resources.highlightProgram),i.applyHighlightOptions(e,this._resources.highlightProgram),e.bindVAO(this._resources.quadVAO),e.setBlendingEnabled(!0),e.setBlendFunction(b.b.ONE,b.b.ONE_MINUS_SRC_ALPHA),e.drawArrays(b.r.TRIANGLE_STRIP,0,4),e.bindVAO()}_initialize(e,t,i){this._width=t,this._height=i
const n=g.a.createVertex(e,b.D.STATIC_DRAW,new Int8Array([-1,-1,0,0,1,-1,1,0,-1,1,0,1,1,1,1,1]).buffer),r=new x.a(e,new Map([["a_position",0],["a_texcoord",1]]),{geometry:[new H.a("a_position",2,b.k.BYTE,0,4),new H.a("a_texcoord",2,b.k.UNSIGNED_BYTE,2,4)]},{geometry:n}),s=Object(v.a)(e,W.b),a=Object(v.a)(e,W.a)
e.useProgram(s),s.setUniform1i("u_texture",M.Q),s.setUniform1i("u_shade",M.R),s.setUniform1f("u_sigma",G.e),e.useProgram(a),a.setUniform1i("u_texture",M.Q),a.setUniform1f("u_sigma",G.e),this._resources={quadGeometry:n,quadVAO:r,highlightProgram:s,blurProgram:a}}setup(e,t,i){this._resources?(this._width=t,this._height=i):this._initialize(e,t,i)}}var X=i(1171),q=i(1072)
function Z(e,t,i){const n=new q.a(e,{target:b.A.TEXTURE_2D,pixelFormat:b.p.RGBA,dataType:b.q.UNSIGNED_BYTE,wrapMode:b.B.CLAMP_TO_EDGE,width:t,height:i,samplingMode:b.z.LINEAR})
return[n,new X.a(e,{colorTarget:b.y.TEXTURE,depthStencilTarget:b.m.STENCIL_RENDER_BUFFER},n)]}class K{constructor(){this._width=void 0,this._height=void 0,this._resources=null}dispose(){this._resources&&(this._resources.sharedBlur1Tex.dispose(),this._resources.sharedBlur1Fbo.dispose(),this._resources.sharedBlur2Tex.dispose(),this._resources.sharedBlur2Fbo.dispose(),this._resources=Object(a.q)(this._resources))}_initialize(e,t,i){this._width=t,this._height=i
const[n,r]=Z(e,t,i),[s,a]=Z(e,t,i)
this._resources={sharedBlur1Tex:n,sharedBlur1Fbo:r,sharedBlur2Tex:s,sharedBlur2Fbo:a}}setup(e,t,i){!this._resources||this._width===t&&this._height===i||this.dispose(),this._resources||this._initialize(e,t,i)}get sharedBlur1Tex(){return this._resources.sharedBlur1Tex}get sharedBlur1Fbo(){return this._resources.sharedBlur1Fbo}get sharedBlur2Tex(){return this._resources.sharedBlur2Tex}get sharedBlur2Fbo(){return this._resources.sharedBlur2Fbo}}class $ extends N.a{constructor(){super(...arguments),this.defines=["highlight"],this._hlRenderer=new Y,this._width=void 0,this._height=void 0,this._boundFBO=null,this._hlSurfaces=new K,this._adjustedWidth=void 0,this._adjustedHeight=void 0,this._blitRenderer=new y}dispose(){var e,t
null!=(e=this._hlSurfaces)&&e.dispose(),null!=(t=this._hlRenderer)&&t.dispose(),this._boundFBO=null}bind(e){const{context:t,painter:i}=e,{width:n,height:r}=t.getViewport(),s=i.getFbos(n,r).effect0
this.setup(e,n,r),t.bindFramebuffer(s),t.setColorMask(!0,!0,!0,!0),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT)}unbind(){}setup({context:e},t,i){this._width=t,this._height=i
const n=t%4,r=i%4
t+=n<2?-n:4-n,i+=r<2?-r:4-r,this._adjustedWidth=t,this._adjustedHeight=i,this._boundFBO=e.getBoundFramebufferObject()
const s=Math.round(1*t),a=Math.round(1*i)
this._hlRenderer.setup(e,s,a),this._hlSurfaces.setup(e,s,a)}draw(e){const{context:t,highlightGradient:i}=e
if(!i)return
const n=t.getBoundFramebufferObject()
t.setViewport(0,0,1*this._adjustedWidth,1*this._adjustedHeight),t.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo),t.setStencilTestEnabled(!1),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT),this._blitRenderer.render(t,n.colorTexture,b.z.NEAREST,1),t.setStencilTestEnabled(!1),t.setBlendingEnabled(!1),t.setColorMask(!1,!1,!1,!0),t.bindFramebuffer(this._hlSurfaces.sharedBlur2Fbo),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT),this._hlRenderer.preBlur(t,this._hlSurfaces.sharedBlur1Tex),t.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT),this._hlRenderer.finalBlur(t,this._hlSurfaces.sharedBlur2Tex),t.bindFramebuffer(this._boundFBO),t.setBlendingEnabled(!0),t.setColorMask(!0,!0,!0,!0),t.setViewport(0,0,this._width,this._height),this._hlRenderer.renderHighlight(t,this._hlSurfaces.sharedBlur1Tex,i),this._boundFBO=null}}class J extends N.a{constructor(){super(...arguments),this.name=this.constructor.name,this.defines=["hittest"]}dispose(){Object(a.l)(this._fbo)&&this._fbo.dispose()}createOptions({pixelRatio:e},t,i=M.x){if(!t.length)return null
const n=t.shift(),r=n.x,s=n.y
return this._outstanding=n,{type:"hittest",distance:i*e,position:[r,s]}}bind(e){const{context:t,attributeView:i}=e
if(!i.size)return
const n=i.getBlock(M.d)
if(Object(a.k)(n))return
const r=n.getFBO(t)
t.setViewport(0,0,i.size,i.size),t.bindFramebuffer(r),t.setColorMask(!0,!0,!0,!0),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT|t.gl.DEPTH_BUFFER_BIT)}unbind(e){}draw(e){if(Object(a.k)(this._outstanding))return
const t=this._outstanding
this._outstanding=null,this._resolve(e,t.resolvers)}async _resolve(e,t){const{context:i,attributeView:n}=e,r=n.getBlock(M.d)
if(Object(a.k)(r))return void t.forEach(e=>e.resolve([]))
const s=r.getFBO(i),o=new Uint8Array(s.width*s.height*4)
try{await s.readPixelsAsync(0,0,s.width,s.height,b.p.RGBA,b.q.UNSIGNED_BYTE,o)}catch(e){return void t.forEach(e=>e.resolve([]))}const l=[]
for(let e=0;e<o.length;e+=4){const t=o[e],i=o[e+3]
t&&l.push({id:e/4,directHits:i})}l.sort((e,t)=>t.directHits===e.directHits?t.id-e.id:t.directHits-e.directHits)
const c=l.map(e=>e.id)
t.forEach(e=>e.resolve(c))}}class Q extends N.a{constructor(){super(...arguments),this.name=this.constructor.name,this.defines=["id"],this._lastSize=0,this._boundFBO=null}dispose(){Object(a.l)(this._fbo)&&this._fbo.dispose()}bind({context:e,painter:t}){const{width:i,height:n}=e.getViewport()
this._boundFBO=e.getBoundFramebufferObject()
const r=t.getFbos(i,n).effect0
e.bindFramebuffer(r),e.setColorMask(!0,!0,!0,!0),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT)}unbind({context:e}){e.bindFramebuffer(this._boundFBO),this._boundFBO=null}draw(e,t,i=2*M.x){this._resolve(e,t,i)}async _resolve({context:e,state:t,pixelRatio:i},n,r){const s=e.getBoundFramebufferObject(),a=t.size[1]*i,o=Math.round(r*i),l=o/2,c=o/2
this._ensureBuffer(o),n.forEach(async(e,t)=>{const r=new Map,u=Math.floor(t.x*i-o/2),h=Math.floor(a-t.y*i-o/2)
await s.readPixelsAsync(u,h,o,o,b.p.RGBA,b.q.UNSIGNED_BYTE,this._buf)
for(let e=0;e<this._buf32.length;e++){const t=this._buf32[e]
if(4294967295!==t&&0!==t){const i=e%o,n=o-Math.floor(e/o),s=(l-i)*(l-i)+(c-n)*(c-n),a=r.has(t)?r.get(t):4294967295
r.set(t,Math.min(s,a))}}const d=Array.from(r).sort((e,t)=>e[1]-t[1]).map(e=>e[0])
e.resolve(d),n.delete(t)})}_ensureBuffer(e){this._lastSize!==e&&(this._lastSize=e,this._buf=new Uint8Array(4*e*e),this._buf32=new Uint32Array(this._buf.buffer))}}const ee=[1,0],te=[0,1],ie=[1,.8,.6,.4,.2],ne=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
class re{constructor(){this._intensityFBO=null,this._compositeFBO=null,this._mipsFBOs=new Array(5),this._nMips=5,this._kernelSizeArray=[3,5,7,9,11],this._size=[0,0],this._programDesc={luminosityHighPass:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/luminosityHighPass",attributes:new Map([["a_position",0]])},gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/gaussianBlur",attributes:new Map([["a_position",0]])},composite:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/composite",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}dispose(){if(this._quad=Object(a.f)(this._quad),this._intensityFBO=Object(a.f)(this._intensityFBO),this._compositeFBO=Object(a.f)(this._compositeFBO),this._mipsFBOs){for(let e=0;e<this._nMips;e++)this._mipsFBOs[e]&&(this._mipsFBOs[e].horizontal.dispose(),this._mipsFBOs[e].vertical.dispose())
this._mipsFBOs=null}}draw(e,t,i){const{width:n,height:r}=t,{context:s,painter:a}=e,{materialManager:o}=a,l=s.gl,c=this._programDesc,{strength:u,radius:h,threshold:d}=i
this._quad||(this._quad=new D.a(s,[-1,-1,1,-1,-1,1,1,1])),this._createOrResizeResources(e,n,r),s.setStencilTestEnabled(!1),s.setBlendingEnabled(!0),s.setBlendFunction(b.b.ONE,b.b.ONE_MINUS_SRC_ALPHA),s.setStencilWriteMask(0)
const f=this._quad
f.bind(),s.bindFramebuffer(this._intensityFBO)
const _=o.getProgram(c.luminosityHighPass)
s.useProgram(_),s.bindTexture(t.colorTexture,0),_.setUniform1i("u_texture",0),_.setUniform3fv("u_defaultColor",[0,0,0]),_.setUniform1f("u_defaultOpacity",0),_.setUniform1f("u_luminosityThreshold",d),_.setUniform1f("u_smoothWidth",.01)
const m=[Math.round(n/2),Math.round(r/2)]
s.setViewport(0,0,m[0],m[1]),s.setClearColor(0,0,0,0),s.clear(l.COLOR_BUFFER_BIT),f.draw(),s.setBlendingEnabled(!1)
let p=this._intensityFBO.colorTexture
for(let e=0;e<this._nMips;e++){const t=o.getProgram(c.gaussianBlur,[{name:"radius",value:this._kernelSizeArray[e]}])
s.useProgram(t),s.bindTexture(p,e+1),t.setUniform1i("u_colorTexture",e+1),t.setUniform2fv("u_texSize",m),t.setUniform2fv("u_direction",ee),s.setViewport(0,0,m[0],m[1])
const i=this._mipsFBOs[e]
s.bindFramebuffer(i.horizontal),f.draw(),p=i.horizontal.colorTexture,s.bindFramebuffer(i.vertical),s.bindTexture(p,e+1),t.setUniform2fv("u_direction",te),f.draw(),p=i.vertical.colorTexture,m[0]=Math.round(m[0]/2),m[1]=Math.round(m[1]/2)}s.setViewport(0,0,n,r)
const g=o.getProgram(c.composite,[{name:"nummips",value:5}])
s.bindFramebuffer(this._compositeFBO),s.useProgram(g),g.setUniform1f("u_bloomStrength",u),g.setUniform1f("u_bloomRadius",h),g.setUniform1fv("u_bloomFactors",ie),g.setUniform3fv("u_bloomTintColors",ne),s.bindTexture(this._mipsFBOs[0].vertical.colorTexture,1),g.setUniform1i("u_blurTexture1",1),s.bindTexture(this._mipsFBOs[1].vertical.colorTexture,2),g.setUniform1i("u_blurTexture2",2),s.bindTexture(this._mipsFBOs[2].vertical.colorTexture,3),g.setUniform1i("u_blurTexture3",3),s.bindTexture(this._mipsFBOs[3].vertical.colorTexture,4),g.setUniform1i("u_blurTexture4",4),s.bindTexture(this._mipsFBOs[4].vertical.colorTexture,5),g.setUniform1i("u_blurTexture5",5),f.draw(),s.bindFramebuffer(t),s.setBlendingEnabled(!0)
const v=o.getProgram(c.blit)
s.useProgram(v),s.bindTexture(this._compositeFBO.colorTexture,6),v.setUniform1i("u_texture",6),s.setBlendFunction(b.b.ONE,b.b.ONE),f.draw(),f.unbind(),s.setBlendFunction(b.b.ONE,b.b.ONE_MINUS_SRC_ALPHA),s.setStencilTestEnabled(!0)}_createOrResizeResources(e,t,i){const{context:n}=e
if(this._compositeFBO&&this._size[0]===t&&this._size[1]===i)return
this._size[0]=t,this._size[1]=i
const r=[Math.round(t/2),Math.round(i/2)]
this._compositeFBO?this._compositeFBO.resize(t,i):this._compositeFBO=new X.a(n,{colorTarget:b.y.TEXTURE,depthStencilTarget:b.m.NONE,width:t,height:i}),this._intensityFBO?this._intensityFBO.resize(r[0],r[1]):this._intensityFBO=new X.a(n,{colorTarget:b.y.TEXTURE,depthStencilTarget:b.m.NONE,width:r[0],height:r[1]},{target:b.A.TEXTURE_2D,pixelFormat:b.p.RGBA,internalFormat:b.p.RGBA,dataType:b.q.UNSIGNED_BYTE,wrapMode:b.B.CLAMP_TO_EDGE,samplingMode:b.z.LINEAR,flipped:!1,width:r[0],height:r[1]})
for(let e=0;e<this._nMips;e++)this._mipsFBOs[e]?(this._mipsFBOs[e].horizontal.resize(r[0],r[1]),this._mipsFBOs[e].vertical.resize(r[0],r[1])):this._mipsFBOs[e]={horizontal:new X.a(n,{colorTarget:b.y.TEXTURE,depthStencilTarget:b.m.NONE,width:r[0],height:r[1]},{target:b.A.TEXTURE_2D,pixelFormat:b.p.RGBA,internalFormat:b.p.RGBA,dataType:b.q.UNSIGNED_BYTE,wrapMode:b.B.CLAMP_TO_EDGE,samplingMode:b.z.LINEAR,flipped:!1,width:r[0],height:r[1]}),vertical:new X.a(n,{colorTarget:b.y.TEXTURE,depthStencilTarget:b.m.NONE,width:r[0],height:r[1]},{target:b.A.TEXTURE_2D,pixelFormat:b.p.RGBA,internalFormat:b.p.RGBA,dataType:b.q.UNSIGNED_BYTE,wrapMode:b.B.CLAMP_TO_EDGE,samplingMode:b.z.LINEAR,flipped:!1,width:r[0],height:r[1]})},r[0]=Math.round(r[0]/2),r[1]=Math.round(r[1]/2)}}const se=[1,0],ae=[0,1]
class oe{constructor(){this._blurFBO=null,this._size=[0,0],this._programDesc={gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/gaussianBlur",attributes:new Map([["a_position",0]])},radialBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/radial-blur",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}dispose(){this._blurFBO&&(this._blurFBO.dispose(),this._blurFBO=null)}draw(e,t,i){const{context:n}=e,{type:r,radius:s}=i
if(0===s)return
this._createOrResizeResources(e),this._quad||(this._quad=new D.a(n,[-1,-1,1,-1,-1,1,1,1]))
const a=this._quad
a.bind(),"blur"===r?this._gaussianBlur(e,t,s):this._radialBlur(e,t),a.unbind()}_gaussianBlur(e,t,i){const{context:n,state:r,painter:s,pixelRatio:a}=e,{size:o}=r,{materialManager:l}=s,c=this._programDesc,u=this._quad,h=[Math.round(a*o[0]),Math.round(a*o[1])],d=this._blurFBO,f=l.getProgram(c.gaussianBlur,[{name:"radius",value:Math.ceil(i)}])
n.useProgram(f),n.setBlendingEnabled(!1),n.bindFramebuffer(d),n.bindTexture(t.colorTexture,4),f.setUniform1i("u_colorTexture",4),f.setUniform2fv("u_texSize",h),f.setUniform2fv("u_direction",se),f.setUniform1f("u_sigma",i),u.draw(),n.bindFramebuffer(t),n.setStencilWriteMask(0),n.setStencilTestEnabled(!1),n.setDepthWriteEnabled(!1),n.setDepthTestEnabled(!1),n.bindTexture(null==d?void 0:d.colorTexture,5),f.setUniform1i("u_colorTexture",5),f.setUniform2fv("u_direction",ae),u.draw(),n.setBlendingEnabled(!0),n.setBlendFunction(b.b.ONE,b.b.ONE_MINUS_SRC_ALPHA),n.setStencilTestEnabled(!0)}_radialBlur(e,t){const{context:i,painter:n}=e,{materialManager:r}=n,s=this._programDesc,a=this._quad,o=this._blurFBO
i.bindFramebuffer(o)
const l=r.getProgram(s.radialBlur)
i.useProgram(l),i.setBlendingEnabled(!1),i.bindTexture(t.colorTexture,4),l.setUniform1i("u_colorTexture",4),a.draw(),i.bindFramebuffer(t),i.setStencilWriteMask(0),i.setStencilTestEnabled(!1),i.setDepthWriteEnabled(!1),i.setDepthTestEnabled(!1),i.setBlendingEnabled(!0)
const c=r.getProgram(s.blit)
i.useProgram(c),i.bindTexture(null==o?void 0:o.colorTexture,5),c.setUniform1i("u_texture",5),i.setBlendFunction(b.b.ONE,b.b.ONE_MINUS_SRC_ALPHA),a.draw()}_createOrResizeResources(e){const{context:t,state:i,pixelRatio:n}=e,{size:r}=i,s=Math.round(n*r[0]),a=Math.round(n*r[1])
this._blurFBO&&this._size[0]===s&&this._size[1]===a||(this._size[0]=s,this._size[1]=a,this._blurFBO?this._blurFBO.resize(s,a):this._blurFBO=new X.a(t,{colorTarget:b.y.TEXTURE,depthStencilTarget:b.m.NONE,width:s,height:a},{target:b.A.TEXTURE_2D,pixelFormat:b.p.RGBA,internalFormat:b.p.RGBA,dataType:b.q.UNSIGNED_BYTE,wrapMode:b.B.CLAMP_TO_EDGE,samplingMode:b.z.LINEAR,flipped:!1,width:s,height:a}))}}class le{constructor(){this._layerFBOTexture=null,this._size=[0,0],this._programDesc={vsPath:"post-processing/pp",fsPath:"post-processing/filterEffect",attributes:new Map([["a_position",0]])}}dispose(){this._layerFBOTexture=Object(a.f)(this._layerFBOTexture)}draw(e,t,i){const{width:n,height:r}=t
this._createOrResizeResources(e,n,r)
const{context:s,painter:a}=e,{materialManager:o}=a,l=this._programDesc,c=this._quad,u=i.colorMatrix
c.bind()
const h=this._layerFBOTexture
s.bindFramebuffer(t),t.copyToTexture(0,0,n,r,0,0,h),s.setBlendingEnabled(!1),s.setStencilTestEnabled(!1)
const d=o.getProgram(l)
s.useProgram(d),s.bindTexture(h,2),d.setUniformMatrix4fv("u_coefficients",u),d.setUniform1i("u_colorTexture",2),c.draw(),s.setBlendingEnabled(!0),s.setBlendFunction(b.b.ONE,b.b.ONE_MINUS_SRC_ALPHA),s.setStencilTestEnabled(!0),c.unbind()}_createOrResizeResources(e,t,i){const{context:n}=e
this._layerFBOTexture&&this._size[0]===t&&this._size[1]===i||(this._size[0]=t,this._size[1]=i,this._layerFBOTexture?this._layerFBOTexture.resize(t,i):this._layerFBOTexture=new q.a(n,{target:b.A.TEXTURE_2D,pixelFormat:b.p.RGBA,internalFormat:b.p.RGBA,dataType:b.q.UNSIGNED_BYTE,wrapMode:b.B.CLAMP_TO_EDGE,samplingMode:b.z.LINEAR,flipped:!1,width:t,height:i}),this._quad||(this._quad=new D.a(n,[-1,-1,1,-1,-1,1,1,1])))}}var ce=i(980)
const ue=[1,0],he=[0,1]
class de{constructor(){this._layerFBOTexture=null,this._horizontalBlurFBO=null,this._verticalBlurFBO=null,this._size=[0,0],this._quad=null,this._programDesc={blur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/gaussianBlur",attributes:new Map([["a_position",0]])},composite:{vsPath:"post-processing/pp",fsPath:"post-processing/drop-shadow/composite",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}dispose(){this._layerFBOTexture=Object(a.f)(this._layerFBOTexture),this._horizontalBlurFBO=Object(a.f)(this._horizontalBlurFBO),this._verticalBlurFBO=Object(a.f)(this._verticalBlurFBO)}draw(e,t,i){const{context:n,state:r,painter:s}=e,{materialManager:a}=s,o=this._programDesc,l=t.width,c=t.height,u=[Math.round(l),Math.round(c)],{blurRadius:h,offsetX:d,offsetY:f,color:_}=i,m=[Object(ce.h)(d),Object(ce.h)(f)]
this._createOrResizeResources(e,l,c,u)
const p=this._horizontalBlurFBO,g=this._verticalBlurFBO
n.setStencilWriteMask(0),n.setStencilTestEnabled(!1),n.setDepthWriteEnabled(!1),n.setDepthTestEnabled(!1)
const v=this._layerFBOTexture
t.copyToTexture(0,0,l,c,0,0,v),this._quad||(this._quad=new D.a(n,[-1,-1,1,-1,-1,1,1,1])),n.setViewport(0,0,u[0],u[1])
const x=this._quad
x.bind(),n.setBlendingEnabled(!1)
const y=a.getProgram(o.blur,[{name:"radius",value:Math.ceil(h)}])
n.useProgram(y),n.bindFramebuffer(p),n.bindTexture(t.colorTexture,4),y.setUniform1i("u_colorTexture",4),y.setUniform2fv("u_texSize",u),y.setUniform2fv("u_direction",ue),y.setUniform1f("u_sigma",h),x.draw(),n.bindFramebuffer(g),n.bindTexture(null==p?void 0:p.colorTexture,5),y.setUniform1i("u_colorTexture",5),y.setUniform2fv("u_direction",he),x.draw(),n.bindFramebuffer(t),n.setViewport(0,0,l,c)
const O=a.getProgram(o.composite)
n.useProgram(O),n.bindTexture(null==g?void 0:g.colorTexture,2),O.setUniform1i("u_blurTexture",2),n.bindTexture(v,3),O.setUniform1i("u_layerFBOTexture",3),O.setUniform4fv("u_shadowColor",[_[3]*(_[0]/255),_[3]*(_[1]/255),_[3]*(_[2]/255),_[3]]),O.setUniformMatrix3fv("u_displayViewMat3",r.displayMat3),O.setUniform2fv("u_shadowOffset",m),x.draw(),n.setBlendingEnabled(!0),n.setStencilTestEnabled(!0),n.setBlendFunction(b.b.ONE,b.b.ONE_MINUS_SRC_ALPHA),x.unbind()}_createOrResizeResources(e,t,i,n){const{context:r}=e
this._horizontalBlurFBO&&this._size[0]===t&&this._size[1]===i||(this._size[0]=t,this._size[1]=i,this._horizontalBlurFBO?this._horizontalBlurFBO.resize(n[0],n[1]):this._horizontalBlurFBO=new X.a(r,{colorTarget:b.y.TEXTURE,depthStencilTarget:b.m.NONE,width:n[0],height:n[1]},{target:b.A.TEXTURE_2D,pixelFormat:b.p.RGBA,internalFormat:b.p.RGBA,dataType:b.q.UNSIGNED_BYTE,wrapMode:b.B.CLAMP_TO_EDGE,samplingMode:b.z.LINEAR,flipped:!1,width:n[0],height:n[1]}),this._verticalBlurFBO?this._verticalBlurFBO.resize(n[0],n[1]):this._verticalBlurFBO=new X.a(r,{colorTarget:b.y.TEXTURE,depthStencilTarget:b.m.NONE,width:n[0],height:n[1]},{target:b.A.TEXTURE_2D,pixelFormat:b.p.RGBA,internalFormat:b.p.RGBA,dataType:b.q.UNSIGNED_BYTE,wrapMode:b.B.CLAMP_TO_EDGE,samplingMode:b.z.LINEAR,flipped:!1,width:n[0],height:n[1]}),this._layerFBOTexture?this._layerFBOTexture.resize(t,i):this._layerFBOTexture=new q.a(r,{target:b.A.TEXTURE_2D,pixelFormat:b.p.RGBA,internalFormat:b.p.RGBA,dataType:b.q.UNSIGNED_BYTE,wrapMode:b.B.CLAMP_TO_EDGE,samplingMode:b.z.LINEAR,flipped:!1,width:t,height:i}))}}class fe{constructor(){this._size=[0,0],this._layerFBOTexture=null}dispose(){this._layerFBOTexture=Object(a.f)(this._layerFBOTexture)}draw(e,t,i){const{width:n,height:r}=t
this._createOrResizeResources(e,n,r)
const{context:s,painter:a}=e,{amount:o}=i,l=s.gl,c=this._layerFBOTexture
s.bindFramebuffer(t),t.copyToTexture(0,0,n,r,0,0,c),s.setBlendingEnabled(!0),s.setStencilTestEnabled(!1),s.setDepthTestEnabled(!1),s.setClearColor(0,0,0,0),s.clear(l.COLOR_BUFFER_BIT),a.blitTexture(s,c,b.z.NEAREST,o)}_createOrResizeResources(e,t,i){const{context:n}=e
this._layerFBOTexture&&this._size[0]===t&&this._size[1]===i||(this._size[0]=t,this._size[1]=i,this._layerFBOTexture?this._layerFBOTexture.resize(t,i):this._layerFBOTexture=new q.a(n,{target:b.A.TEXTURE_2D,pixelFormat:b.p.RGBA,internalFormat:b.p.RGBA,dataType:b.q.UNSIGNED_BYTE,wrapMode:b.B.CLAMP_TO_EDGE,samplingMode:b.z.NEAREST,flipped:!1,width:t,height:i}))}}function _e(e){switch(e){case"bloom":case"blur":case"opacity":case"drop-shadow":return e
default:return"colorize"}}const me={colorize:()=>new le,blur:()=>new oe,bloom:()=>new re,opacity:()=>new fe,"drop-shadow":()=>new de}
class pe{constructor(){this._effectMap=new Map}dispose(){this._effectMap.forEach(e=>e.dispose()),this._effectMap.clear()}getPostProcessingEffects(e){if(!e||0===e.length)return[]
const t=[]
for(const i of e){const e=_e(i.type)
let n=this._effectMap.get(e)
n||(n=me[e](),this._effectMap.set(e,n)),t.push({postProcessingEffect:n,effect:i})}return t}}var ge=i(445)
class be{constructor(e,t){var i
this.brushes=e,this.name=t.name,this.drawPhase=t.drawPhase||d.c.MAP,this._targetFn=t.target,this.effects=t.effects||[],this.enableDefaultDraw=null!=(i=t.enableDefaultDraw)?i:()=>!0}render(e){const{context:t,profiler:i}=e,n=this._targetFn(),r=this.drawPhase&e.drawPhase
if(i.recordPassStart(this.name),r){this.enableDefaultDraw()&&this._doRender(e,n),i.recordPassEnd()
for(const i of this.effects){if(!i.enable())continue
const r=i.apply,s=i.args&&i.args(),a=t.getViewport(),o=t.getBoundFramebufferObject(),l=e.passOptions
this._bindEffect(e,r,s),this._doRender(e,n,r.defines),this._drawAndUnbindEffect(e,r,a,o,l,s)}}}_doRender(e,t,i){if(Object(a.k)(t))return
const{profiler:n,context:r}=e
for(const s of this.brushes){if(n.recordBrushStart(s.name),Object(a.l)(s.brushEffect)){const n=r.getViewport(),a=r.getBoundFramebufferObject(),o=e.passOptions
this._bindEffect(e,s.brushEffect),this._drawWithBrush(s,e,t,i),this._drawAndUnbindEffect(e,s.brushEffect,n,a,o)}else this._drawWithBrush(s,e,t,i)
n.recordBrushEnd()}}_drawWithBrush(e,t,i,n){Object(ge.i)(i)?(e.prepareState(t,n),e.drawMany(t,i,n)):i.visible&&(e.prepareState(t,n),e.draw(t,i,n))}_bindEffect(e,t,i){const{profiler:n}=e
n.recordPassStart(this.name+"."+t.name),t.bind(e,i)
const r=t.createOptions(e,i)
e.passOptions=r}_drawAndUnbindEffect(e,t,i,n,r,s){const{profiler:a,context:o}=e
e.passOptions=r,a.recordBrushStart(t.name),t.draw(e,s),t.unbind(e,s),o.bindFramebuffer(n)
const{x:l,y:c,width:u,height:h}=i
o.setViewport(l,c,u,h),a.recordBrushEnd(),a.recordPassEnd()}}var ve=i(1474)
class xe{constructor(e,t,i){this.context=e,this._blitRenderer=new y,this._worldExtentClipRenderer=new z,this._isClippedToWorldExtent=!1,this._brushCache=new Map,this._lastWidth=null,this._lastHeight=null,this._prevFBO=null,this._vtlMaterialManager=new _.a,this._blendEffect=new U.a,this._stencilBuf=null,this._fbos=null,this._fboPool=[],this._renderTarget=null,this.effects={highlight:new $,hittest:new J,hittestVTL:new Q,integrate:new k,insideEffect:new V("inside"),outsideEffect:new V("outside")},this.materialManager=new S(e),this.textureManager=new w.a(t,i,e.type===C.a.WEBGL2),this.textureUploadManager=new I(e,t),this._effectsManager=new pe}get vectorTilesMaterialManager(){return this._vtlMaterialManager}getRenderTarget(){return this._renderTarget}setRenderTarget(e){this._renderTarget=e}getFbos(e,t){if(e!==this._lastWidth||t!==this._lastHeight){if(this._lastWidth=e,this._lastHeight=t,this._fbos){for(const i in this._fbos)this._fbos[i].resize(e,t)
return this._fbos}const i={target:b.A.TEXTURE_2D,pixelFormat:b.p.RGBA,dataType:b.q.UNSIGNED_BYTE,samplingMode:b.z.NEAREST,wrapMode:b.B.CLAMP_TO_EDGE,width:e,height:t},n={colorTarget:b.y.TEXTURE,depthStencilTarget:b.m.DEPTH_STENCIL_RENDER_BUFFER},r=new ve.a(this.context,{width:e,height:t,internalFormat:b.s.DEPTH_STENCIL})
this._stencilBuf=r,this._fbos={output:new X.a(this.context,n,i,r),blend:new X.a(this.context,n,i,r),effect0:new X.a(this.context,n,i,r)}}return this._fbos}acquireFbo(e,t){let i
i=this._fboPool.length>0?this._fboPool.pop():new X.a(this.context,{colorTarget:b.y.TEXTURE,depthStencilTarget:b.m.DEPTH_STENCIL_RENDER_BUFFER},{target:b.A.TEXTURE_2D,pixelFormat:b.p.RGBA,dataType:b.q.UNSIGNED_BYTE,samplingMode:b.z.NEAREST,wrapMode:b.B.CLAMP_TO_EDGE,width:e,height:t},this._stencilBuf)
const n=i.descriptor
return n.width===e&&n.height===t||i.resize(e,t),i}releaseFbo(e){this._fboPool.push(e)}getSharedStencilBuffer(){return this._stencilBuf}beforeRenderLayers(e,t=null){const{width:i,height:n}=e.getViewport()
this._prevFBO=e.getBoundFramebufferObject()
const r=this.getFbos(i,n)
if(e.bindFramebuffer(null==r?void 0:r.output),e.setColorMask(!0,!0,!0,!0),Object(a.l)(t)){const{r:i,g:n,b:r,a:s}=t.color
e.setClearColor(s*i/255,s*n/255,s*r/255,s)}else e.setClearColor(0,0,0,0)
e.setDepthWriteEnabled(!0),e.setClearDepth(1),e.clear(e.gl.COLOR_BUFFER_BIT|e.gl.DEPTH_BUFFER_BIT),e.setDepthWriteEnabled(!1)}beforeRenderLayer(e,t,i){var n
const{context:r,blendMode:s,effects:a,requireFBO:o,drawPhase:l}=e
if(o||ye(l,s,a,i))r.bindFramebuffer(null==(n=this._fbos)?void 0:n.blend),r.setColorMask(!0,!0,!0,!0),r.setClearColor(0,0,0,0),r.setDepthWriteEnabled(!0),r.setClearDepth(1),r.clear(r.gl.COLOR_BUFFER_BIT|r.gl.DEPTH_BUFFER_BIT),r.setDepthWriteEnabled(!1)
else{const e=this._getOutputFBO()
r.bindFramebuffer(e)}r.setDepthWriteEnabled(!1),r.setDepthTestEnabled(!1),r.setStencilTestEnabled(!0),r.setClearStencil(t),r.setStencilWriteMask(255),r.clear(r.gl.STENCIL_BUFFER_BIT)}compositeLayer(e,t){const{context:i,blendMode:n,effects:r,requireFBO:s,drawPhase:o}=e
if(s||ye(o,n,r,t)){Object(a.l)(r)&&r.length>0&&o===d.c.MAP&&this._applyEffects(e,r)
const s=this._getOutputFBO()
i.bindFramebuffer(s),i.setStencilTestEnabled(!1),i.setStencilWriteMask(0),i.setBlendingEnabled(!0),i.setBlendFunctionSeparate(b.b.ONE,b.b.ONE_MINUS_SRC_ALPHA,b.b.ONE,b.b.ONE_MINUS_SRC_ALPHA),i.setColorMask(!0,!0,!0,!0)
const l=Object(a.k)(n)||o===d.c.HIGHLIGHT?"normal":n,c=this._fbos;(null==c?void 0:c.blend.colorTexture)&&this._blendEffect.draw(e,c.blend.colorTexture,b.z.NEAREST,l,t)}}renderLayers(e){e.bindFramebuffer(this._prevFBO)
const t=this._getOutputFBO()
t&&(e.setDepthTestEnabled(!1),e.setStencilWriteMask(0),this._isClippedToWorldExtent?(e.setStencilTestEnabled(!0),e.setStencilFunction(b.h.EQUAL,1,255)):e.setStencilTestEnabled(!1),this.blitTexture(e,t.colorTexture,b.z.NEAREST))}prepareDisplay(e,t,i){const{context:n}=e
if(n.bindFramebuffer(this._prevFBO),n.setColorMask(!0,!0,!0,!0),Object(a.l)(t)){const{r:e,g:i,b:r,a:s}=t.color
n.setClearColor(s*e/255,s*i/255,s*r/255,s)}else n.setClearColor(0,0,0,0)
n.setStencilWriteMask(255),n.setClearStencil(0),n.clear(n.gl.COLOR_BUFFER_BIT|n.gl.STENCIL_BUFFER_BIT),this._isClippedToWorldExtent=this._worldExtentClipRenderer.render(e,i)}dispose(){if(this.materialManager.dispose(),this.textureManager.dispose(),this.textureUploadManager.destroy(),this._blitRenderer=Object(a.f)(this._blitRenderer),this._worldExtentClipRenderer=Object(a.f)(this._worldExtentClipRenderer),this._brushCache&&(this._brushCache.forEach(e=>e.dispose()),this._brushCache.clear(),this._brushCache=null),this._fbos)for(const e in this._fbos)this._fbos[e]&&this._fbos[e].dispose()
for(const e of this._fboPool)e.dispose()
if(this._fboPool.length=0,this.effects)for(const e in this.effects)this.effects[e]&&this.effects[e].dispose()
this._effectsManager.dispose(),this._vtlMaterialManager=Object(a.f)(this._vtlMaterialManager),this._prevFBO=null}getBrush(e,t){const i=function(e,t){switch(e){case d.d.LINE:return f.a.line
case d.d.TEXT:return f.a.text
case d.d.LABEL:return f.a.label
case d.d.FILL:return t===d.e.DOT_DENSITY?f.a.dotDensity:f.a.fill
case d.d.MARKER:switch(t){case d.e.HEATMAP:return f.a.heatmap
case d.e.PIE_CHART:return f.a.pieChart
default:return f.a.marker}}}(e,t)
let n=this._brushCache.get(i)
return void 0===n&&(n=new i,this._brushCache.set(i,n)),n}renderObject(e,t,i,n){const r=f.a[i]
if(!r)return
let s=this._brushCache.get(r)
void 0===s&&(s=new r,this._brushCache.set(r,s)),s.prepareState(e,n),s.draw(e,t,n)}renderObjects(e,t,i,n){const r=f.a[i]
if(!r)return
let s=this._brushCache.get(r)
void 0===s&&(s=new r,this._brushCache.set(r,s)),s.drawMany(e,t,n)}registerRenderPass(e){const t=e.brushes.map(e=>(this._brushCache.has(e)||this._brushCache.set(e,new e),this._brushCache.get(e)))
return new be(t,e)}blitTexture(e,t,i,n=1){e.setBlendingEnabled(!0),e.setBlendFunctionSeparate(b.b.ONE,b.b.ONE_MINUS_SRC_ALPHA,b.b.ONE,b.b.ONE_MINUS_SRC_ALPHA),e.setColorMask(!0,!0,!0,!0),this._blitRenderer.render(e,t,i,n)}getPostProcessingEffects(e){return this._effectsManager.getPostProcessingEffects(e)}_getOutputFBO(){var e,t
return null!=this._renderTarget?this._renderTarget:null!=(e=null==(t=this._fbos)?void 0:t.output)?e:null}_applyEffects(e,t){var i
const n=null==(i=this._fbos)?void 0:i.blend
if(!n)return
const{context:r}=e,s=this._effectsManager.getPostProcessingEffects(t)
for(const{postProcessingEffect:t,effect:i}of s)r.bindFramebuffer(n),t.draw(e,n,i)}}function ye(e,t,i,n){return e!==d.c.HIGHLIGHT&&(1!==n||Object(a.l)(t)&&"normal"!==t||Object(a.l)(i)&&i.length>0)}var Oe=i(2649),Te=i(1809),Se=i(1701),we=i(2523),Ee=i(1523)
class Me extends u.a{constructor(e,t){var i
super(),this._trash=new Set,this._renderRemainingTime=0,this._lastFrameRenderTime=0,this.renderRequested=!1,this.stage=this,this._stationary=!0
const{canvas:l=document.createElement("canvas"),alpha:u=!0,stencil:d=!0,contextOptions:f={}}=t
this._canvas=l
const _=Object(C.c)("2d",l,{alpha:u,antialias:!1,depth:!0,stencil:d})
this.context=new we.a(null!=(i=Object(a.u)(_))?i:null,f),this.resourceManager=new c.a,this.painter=new xe(this.context,this,this.resourceManager),Object(s.a)("esri-2d-profiler")&&(this._debugOutput=document.createElement("div"),this._debugOutput.setAttribute("style","margin: 24px 64px; position: absolute; color: red;"),e.appendChild(this._debugOutput))
const m=()=>this._highlightGradient
this._renderParameters={drawPhase:0,state:this.state,pixelRatio:window.devicePixelRatio,stationary:!1,globalOpacity:1,blendMode:null,deltaTime:-1,time:0,inFadeTransition:!1,effects:null,context:this.context,painter:this.painter,timeline:t.timeline||new Te.a,renderingOptions:t.renderingOptions,requestRender:()=>this.requestRender(),allowDelayedRender:!1,requireFBO:!1,profiler:new Oe.a(this.context,this._debugOutput),dataUploadCounter:0,get highlightGradient(){return m()}},this._taskHandle=Object(o.a)({render:e=>this.renderFrame(e)}),this._taskHandle.pause(),this._lostWebGLContextHandle=Object(r.c)(l,"webglcontextlost",()=>{this.emit("webgl-error",{error:new n.a("webgl-context-lost")})}),this._bufferPool=new h.a,l.setAttribute("style","width: 100%; height:100%; display:block;"),e.appendChild(l)}destroy(){var e,t,i
this.removeAllChildren(),this._emptyTrash(),this._taskHandle=Object(a.s)(this._taskHandle),this._lostWebGLContextHandle=Object(a.s)(this._lostWebGLContextHandle),null!=(e=this._canvas.parentNode)&&e.removeChild(this._canvas),null!=(t=this._debugOutput)&&null!=(i=t.parentNode)&&i.removeChild(this._debugOutput),this._bufferPool.destroy(),this.resourceManager.destroy(),this.painter.dispose(),this.context.dispose(),this._canvas=null}get background(){return this._background}set background(e){this._background=e,this.requestRender()}get bufferPool(){return this._bufferPool}get renderingOptions(){return this._renderingOptions}set renderingOptions(e){this._renderingOptions=e,this.requestRender()}get state(){return this._state}set state(e){this._state=e,this.requestRender()}get stationary(){return this._stationary}set stationary(e){this._stationary!==e&&(this._stationary=e,this.requestRender())}trashDisplayObject(e){this._trash.add(e),this.requestRender()}untrashDisplayObject(e){return this._trash.delete(e)}requestRender(){this._renderRemainingTime=2e3,this.renderRequested||(this.renderRequested=!0,this.emit("will-render"),this._taskHandle.resume())}renderFrame(e){const t=this._lastFrameRenderTime?e.time-this._lastFrameRenderTime:0
this._renderRemainingTime-=t,this._renderRemainingTime<=0&&this._taskHandle.pause(),this._lastFrameRenderTime=e.time,this.renderRequested=!1,this._renderParameters.state=this._state,this._renderParameters.stationary=this.stationary,this._renderParameters.pixelRatio=window.devicePixelRatio,this._renderParameters.globalOpacity=1,this._renderParameters.time=e.time,this._renderParameters.deltaTime=e.deltaTime,this._renderParameters.effects=null,this.processRender(this._renderParameters),this._emptyTrash(),this.emit("post-render")}_createTransforms(){return{dvs:Object(l.b)()}}renderChildren(e){for(const t of this.children)t.beforeRender(e)
this._renderChildren(this.children,e)
for(const t of this.children)t.afterRender(e)}_renderChildren(e,t){const i=this.context
this.painter.textureUploadManager.upload(),i.resetInfo(),t.profiler.recordStart("drawLayers"),t.dataUploadCounter=0,t.drawPhase=d.c.MAP,this.painter.beforeRenderLayers(i,this.background)
for(const i of e)i.processRender(t)
this.painter.prepareDisplay(t,this.background,this.state.padding),this.painter.renderLayers(i),t.drawPhase=d.c.HIGHLIGHT,this.painter.beforeRenderLayers(i)
for(const i of e)i.processRender(t)
if(this.painter.renderLayers(i),this._isLabelDrawPhaseRequired(e)){t.drawPhase=d.c.LABEL,this.painter.beforeRenderLayers(i)
for(const i of e)i.processRender(t)
this.painter.renderLayers(i)}if(Object(s.a)("esri-tiles-debug")){t.drawPhase=d.c.DEBUG,this.painter.beforeRenderLayers(i)
for(const i of e)i.processRender(t)
this.painter.renderLayers(i)}t.profiler.recordEnd("drawLayers"),i.logInfo()}doRender(e){const t=this.context,{state:i,pixelRatio:n}=e
this._resizeCanvas(e),t.setViewport(0,0,n*i.size[0],n*i.size[1]),t.setDepthWriteEnabled(!0),t.setStencilWriteMask(255),super.doRender(e)}async takeScreenshot(e){const{framebufferWidth:t,framebufferHeight:i}={framebufferWidth:Math.round(this.state.size[0]*e.resolutionScale),framebufferHeight:Math.round(this.state.size[1]*e.resolutionScale)},n=e.resolutionScale,r=this.context,s=this._state.clone()
if(null!=e.rotation){const t=s.viewpoint
s.viewpoint.rotation=e.rotation,s.viewpoint=t}const a={...this._renderParameters,drawPhase:null,globalOpacity:1,stationary:!0,state:s,pixelRatio:n,time:performance.now(),deltaTime:0,blendMode:null,effects:null,inFadeTransition:!1},o=new X.a(r,{colorTarget:b.y.TEXTURE,depthStencilTarget:b.m.DEPTH_STENCIL_RENDER_BUFFER,width:t,height:i}),l=r.getBoundFramebufferObject(),c=r.getViewport()
r.bindFramebuffer(o),r.setViewport(0,0,t,i),this._renderChildren(e.children,a)
const u=this._readbackScreenshot(o,{...e.cropArea,y:i-(e.cropArea.y+e.cropArea.height)})
r.bindFramebuffer(l),r.setViewport(c.x,c.y,c.width,c.height),this.requestRender()
const h=await u
let d
return 1===e.outputScale?d=h:(d=new ImageData(Math.round(h.width*e.outputScale),Math.round(h.height*e.outputScale)),Object(Se.e)(h,d,!0)),d}async _readbackScreenshot(e,t){const i=Object(Ee.a)(t.width,t.height,document.createElement("canvas"))
return await e.readPixelsAsync(t.x,t.y,t.width,t.height,b.p.RGBA,b.q.UNSIGNED_BYTE,new Uint8Array(i.data.buffer)),i}_resizeCanvas(e){const t=this._canvas,i=t.style,{state:{size:n},pixelRatio:r}=e,s=n[0],a=n[1],o=Math.round(s*r),l=Math.round(a*r)
t.width===o&&t.height===l||(t.width=o,t.height=l),i.width=s+"px",i.height=a+"px"}_emptyTrash(){for(;this._trash.size>0;){const e=Array.from(this._trash)
this._trash.clear()
for(const t of e)t.processDetach()}}_isLabelDrawPhaseRequired(e){let t=!1
for(const i of e){if(!(i instanceof u.a)){t=t||!1
break}if(i.hasLabels)return!0
t=t||this._isLabelDrawPhaseRequired(i.children)}return t}}var Ce=i(2585),Ie=i(1753),Pe=i(1912),Ae=i(2584),Re=i(771),Fe=i(1034),Le=i(1007),De=i(991),je=i(978),Be=i(374),ze=i(1331),Ne=i(2650),ke=i(2615)
class Ue extends ze.a{constructor(){super(),this._handles=new Le.a,this._resourcePixelRatio=1,this.visible=!1}destroy(){this._handles=Object(a.e)(this._handles),this._disposeRenderResources(),this._resourcesTask=Object(a.a)(this._resourcesTask)}get background(){return this._background}set background(e){this._background=e,this.requestRender()}get magnifier(){return this._magnifier}set magnifier(e){this._magnifier=e,this._handles.removeAll(),this._handles.add([Object(je.f)(()=>e.version,()=>{this.visible=e.visible&&Object(a.l)(e.position)&&e.size>0,this.requestRender()},je.a),Object(je.f)(()=>[e.maskUrl,e.overlayUrl],()=>this._reloadResources()),Object(je.f)(()=>e.size,()=>{this._disposeRenderResources(),this.requestRender()})])}_createTransforms(){return{dvs:Object(l.b)()}}doRender(e){var t
const i=e.context
if(!this._resourcesTask)return void this._reloadResources()
if(e.drawPhase!==d.c.MAP||!this._canRender())return
this._updateResources(e)
const n=this._magnifier
if(Object(a.k)(n.position))return
const r=e.pixelRatio,s=n.size*r,o=1/n.factor,l=Math.ceil(o*s)
this._readbackTexture.resize(l,l)
const{size:c}=e.state,u=r*c[0],h=r*c[1],f=.5*l,_=.5*l,m=Object(De.f)(r*n.position.x,f,u-f-1),p=Object(De.f)(h-r*n.position.y,_,h-_-1)
i.setBlendingEnabled(!0)
const g=m-f,v=p-_,x=this._readbackTexture
i.bindTexture(x,0),i.gl.copyTexImage2D(x.descriptor.target,0,x.descriptor.pixelFormat,g,v,l,l,0)
const y=null==(t=this.background)?void 0:t.color,O=y?[y.a*y.r/255,y.a*y.g/255,y.a*y.b/255,y.a]:[1,1,1,1],T=(m+n.offset.x*r)/u*2-1,S=(p-n.offset.y*r)/h*2-1,w=s/u*2,E=s/h*2,M=this._program
i.bindVAO(this._vertexArrayObject),i.bindTexture(this._overlayTexture,6),i.bindTexture(this._maskTexture,7),i.useProgram(M),M.setUniform4fv("u_background",O),M.setUniform1i("u_readbackTexture",0),M.setUniform1i("u_overlayTexture",6),M.setUniform1i("u_maskTexture",7),M.setUniform4f("u_drawPos",T,S,w,E),M.setUniform1i("u_maskEnabled",n.maskEnabled?1:0),M.setUniform1i("u_overlayEnabled",n.overlayEnabled?1:0),i.setStencilTestEnabled(!1),i.setColorMask(!0,!0,!0,!0),i.drawArrays(b.r.TRIANGLE_STRIP,0,4),i.bindVAO()}_canRender(){return this.mask&&this.overlay&&null!=this._magnifier}_reloadResources(){this._resourcesTask&&this._resourcesTask.abort()
const e=Object(a.l)(this._magnifier)?this._magnifier.maskUrl:null,t=Object(a.l)(this._magnifier)?this._magnifier.overlayUrl:null
this._resourcesTask=Object(Fe.b)(async i=>{const n=Object(a.k)(e)||Object(a.k)(t)?Object(ke.a)(i):null,r=Object(a.l)(e)?Object(Re.default)(e,{responseType:"image",signal:i}).then(e=>e.data):n.then(e=>e.mask),s=Object(a.l)(t)?Object(Re.default)(t,{responseType:"image",signal:i}).then(e=>e.data):n.then(e=>e.overlay),[o,l]=await Promise.all([r,s])
this.mask=o,this.overlay=l,this._disposeRenderResources(),this.requestRender()})}_disposeRenderResources(){this._readbackTexture=Object(a.f)(this._readbackTexture),this._overlayTexture=Object(a.f)(this._overlayTexture),this._maskTexture=Object(a.f)(this._maskTexture),this._vertexArrayObject=Object(a.f)(this._vertexArrayObject),this._program=Object(a.f)(this._program)}_updateResources(e){if(e.pixelRatio!==this._resourcePixelRatio&&this._disposeRenderResources(),this._readbackTexture)return
const t=e.context
this._resourcePixelRatio=e.pixelRatio
const i=Math.ceil(this._magnifier.size*e.pixelRatio)
this._program=Object(Ne.a)(t)
const n=new Uint16Array([0,1,0,0,1,1,1,0]),r=Ne.b.attributes
this._vertexArrayObject=new x.a(t,r,m.b,{geometry:g.a.createVertex(t,b.D.STATIC_DRAW,n)}),this.overlay.width=i,this.overlay.height=i,this._overlayTexture=new q.a(t,{target:b.A.TEXTURE_2D,pixelFormat:b.p.RGBA,internalFormat:b.p.RGBA,dataType:b.q.UNSIGNED_BYTE,wrapMode:b.B.CLAMP_TO_EDGE,samplingMode:b.z.NEAREST,flipped:!0,preMultiplyAlpha:!Object(Be.C)(this.overlay.src)||!e.context.driverTest.svgPremultipliesAlpha.result},this.overlay),this.mask.width=i,this.mask.height=i,this._maskTexture=new q.a(t,{target:b.A.TEXTURE_2D,pixelFormat:b.p.ALPHA,internalFormat:b.p.ALPHA,dataType:b.q.UNSIGNED_BYTE,wrapMode:b.B.CLAMP_TO_EDGE,samplingMode:b.z.NEAREST,flipped:!0},this.mask)
const s=1/this._magnifier.factor
this._readbackTexture=new q.a(t,{target:b.A.TEXTURE_2D,pixelFormat:b.p.RGBA,internalFormat:b.p.RGBA,dataType:b.q.UNSIGNED_BYTE,wrapMode:b.B.CLAMP_TO_EDGE,samplingMode:b.z.LINEAR,flipped:!1,width:Math.ceil(s*i),height:Math.ceil(s*i)})}}},994:function(e,t,i){"use strict"
i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return r}))
const n=class{}
function r(e,...t){let i=""
for(let n=0;n<t.length;n++)i+=e[n]+t[n]
return i+=e[e.length-1],i}!function(e){e.int=function(e){return Math.round(e).toString()},e.float=function(e){return e.toPrecision(8)}}(r||(r={}))}}])
