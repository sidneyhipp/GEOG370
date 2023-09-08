(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[69],{1293:function(e,t,r){"use strict"
r.d(t,"a",(function(){return n}))
var o=r(1489)
function n(e,t,r=""){return new o.a(e,r+t.shaders.vertexShader,r+t.shaders.fragmentShader,t.attributes)}},1489:function(e,t,r){"use strict"
r.d(t,"a",(function(){return T}))
var o=r(445),n=(r(235),r(23)),a=r(1473),i=r(1088),s=r(984)
const c=["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uint","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"]
var l=r(1501),u=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"]
function f(e){return function(e){var t=function(){var e,t,r,o=0,n=0,a=999,i=[],s=[],c=1,f=0,d=0,m=!1,h=!1,g=""
return function(e){return s=[],null!==e?p(e.replace?e.replace(/\r\n/g,"\n"):e):(i.length&&_(i.join("")),a=10,_("(eof)"),s)}
function _(e){e.length&&s.push({type:u[a],data:e,position:d,line:c,column:f})}function p(t){var i
for(o=0,r=(g+=t).length;e=g[o],o<r;){switch(i=o,a){case 0:o=y()
break
case 1:case 2:o=T()
break
case 3:o=S()
break
case 4:o=U()
break
case 11:o=w()
break
case 5:o=b()
break
case 9999:o=D()
break
case 9:o=v()
break
case 999:o=x()}i!==o&&("\n"===g[i]?(f=0,++c):++f)}return n+=o,g=g.slice(o),s}function x(){return i=i.length?[]:i,"/"===t&&"*"===e?(d=n+o-1,a=0,t=e,o+1):"/"===t&&"/"===e?(d=n+o-1,a=1,t=e,o+1):"#"===e?(a=2,d=n+o,o):/\s/.test(e)?(a=9,d=n+o,o):(m=/\d/.test(e),h=/[^\w_]/.test(e),d=n+o,a=m?4:h?3:9999,o)}function v(){return/[^\s]/g.test(e)?(_(i.join("")),a=999,o):(i.push(e),t=e,o+1)}function T(){return"\r"!==e&&"\n"!==e||"\\"===t?(i.push(e),t=e,o+1):(_(i.join("")),a=999,o)}function y(){return"/"===e&&"*"===t?(i.push(e),_(i.join("")),a=999,o+1):(i.push(e),t=e,o+1)}function S(){if("."===t&&/\d/.test(e))return a=5,o
if("/"===t&&"*"===e)return a=0,o
if("/"===t&&"/"===e)return a=1,o
if("."===e&&i.length){for(;M(i););return a=5,o}if(";"===e||")"===e||"("===e){if(i.length)for(;M(i););return _(e),a=999,o+1}var r=2===i.length&&"="!==e
if(/[\w_\d\s]/.test(e)||r){for(;M(i););return a=999,o}return i.push(e),t=e,o+1}function M(e){for(var t,r,o=0;;){if(t=l.c.indexOf(e.slice(0,e.length+o).join("")),r=l.c[t],-1===t){if(o--+e.length>0)continue
r=e.slice(0,1).join("")}return _(r),d+=r.length,(i=i.slice(r.length)).length}}function w(){return/[^a-fA-F0-9]/.test(e)?(_(i.join("")),a=999,o):(i.push(e),t=e,o+1)}function U(){return"."===e||/[eE]/.test(e)?(i.push(e),a=5,t=e,o+1):"x"===e&&1===i.length&&"0"===i[0]?(a=11,i.push(e),t=e,o+1):/[^\d]/.test(e)?(_(i.join("")),a=999,o):(i.push(e),t=e,o+1)}function b(){return"f"===e&&(i.push(e),t=e,o+=1),/[eE]/.test(e)||"-"===e&&/[eE]/.test(t)?(i.push(e),t=e,o+1):/[^\d]/.test(e)?(_(i.join("")),a=999,o):(i.push(e),t=e,o+1)}function D(){if(/[^\d\w_]/.test(e)){var r=i.join("")
return a=l.b.indexOf(r)>-1?8:l.a.indexOf(r)>-1?7:6,_(i.join("")),a=999,o}return i.push(e),t=e,o+1}}(),r=[]
return(r=r.concat(t(e))).concat(t(null))}(e)}const d=["GL_OES_standard_derivatives","GL_EXT_frag_depth","GL_EXT_draw_buffers","GL_EXT_shader_texture_lod"]
function m(e,t){for(let r=t-1;r>=0;r--){const t=e[r]
if("whitespace"!==t.type&&"block-comment"!==t.type){if("keyword"!==t.type)break
if("attribute"===t.data||"in"===t.data)return!0}}return!1}function h(e,t,r,o){o=o||r
for(const n of e)if("ident"===n.type&&n.data===r)return o in t?t[o]++:t[o]=0,h(e,t,o+"_"+t[o],o)
return r}function g(e,t,r="afterVersion"){function o(e,t){for(let r=t;r<e.length;r++){const t=e[r]
if("operator"===t.type&&";"===t.data)return r}return null}const n={data:"\n",type:"whitespace"},a=t=>t<e.length&&/[^\r\n]$/.test(e[t].data)
let i=function(e){let t=-1,n=0,a=-1
for(let i=0;i<e.length;i++){const s=e[i]
if("preprocessor"===s.type&&(s.data.match(/\#(if|ifdef|ifndef)\s+.+/)?++n:s.data.match(/\#endif\s*.*/)&&--n),"afterVersion"!==r&&"afterPrecision"!==r||"preprocessor"===s.type&&/^#version/.test(s.data)&&(a=Math.max(a,i)),"afterPrecision"===r&&"keyword"===s.type&&"precision"===s.data){const t=o(e,i)
if(null===t)throw new Error("precision statement not followed by any semicolons!")
a=Math.max(a,t)}t<a&&0===n&&(t=i)}return t+1}(e)
a(i-1)&&e.splice(i++,0,n)
for(const r of t)e.splice(i++,0,r)
a(i-1)&&a(i)&&e.splice(i,0,n)}function _(e,t,r,o="lowp"){g(e,[{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:o},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:t},{type:"operator",data:";"}],"afterPrecision")}function p(e,t,r,o,n="lowp"){g(e,[{type:"keyword",data:"layout"},{type:"operator",data:"("},{type:"keyword",data:"location"},{type:"whitespace",data:" "},{type:"operator",data:"="},{type:"whitespace",data:" "},{type:"integer",data:o.toString()},{type:"operator",data:")"},{type:"whitespace",data:" "},{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:n},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:t},{type:"operator",data:";"}],"afterPrecision")}function x(e,t){let r,o,n=-1
for(let a=t;a<e.length;a++){const t=e[a]
if("operator"===t.type&&("["===t.data&&(r=a),"]"===t.data)){o=a
break}"integer"===t.type&&(n=parseInt(t.data,10))}return r&&o&&e.splice(r,o-r+1),n}function v(e,t){const r=(e,null)
if(Object(n.l)(r))return r
const o=f(e)
if("300 es"===function(e,t="100",r="300 es"){const o=/^\s*\#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/
for(const n of e)if("preprocessor"===n.type){const e=o.exec(n.data)
if(e){const o=e[1].replace(/\s\s+/g," ")
if(o===r)return o
if(o===t)return n.data="#version "+r,t
throw new Error("unknown glsl version: "+o)}}return e.splice(0,0,{type:"preprocessor",data:"#version "+r},{type:"whitespace",data:"\n"}),null}(o,"100","300 es"))return e
let a=null,i=null
const l={},u={}
for(let e=0;e<o.length;++e){const r=o[e]
switch(r.type){case"keyword":t===s.u.VERTEX_SHADER&&"attribute"===r.data?r.data="in":"varying"===r.data&&(r.data=t===s.u.VERTEX_SHADER?"out":"in")
break
case"builtin":if(/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(r.data.trim())&&(r.data=r.data.replace(/(2D|Cube|EXT)/g,"")),t===s.u.FRAGMENT_SHADER&&"gl_FragColor"===r.data&&(a||(a=h(o,l,"fragColor"),_(o,a,"vec4")),r.data=a),t===s.u.FRAGMENT_SHADER&&"gl_FragData"===r.data){const t=x(o,e+1),n=h(o,l,"fragData")
p(o,n,"vec4",t,"mediump"),r.data=n}else t===s.u.FRAGMENT_SHADER&&"gl_FragDepthEXT"===r.data&&(i||(i=h(o,l,"gl_FragDepth")),r.data=i)
break
case"ident":if(c.includes(r.data)){if(t===s.u.VERTEX_SHADER&&m(o,e))throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es")
r.data in u||(u[r.data]=h(o,l,r.data)),r.data=u[r.data]}}}for(let e=o.length-1;e>=0;--e){const t=o[e]
if("preprocessor"===t.type){const r=t.data.match(/\#extension\s+(.*)\:/)
if(r&&r[1]&&d.includes(r[1].trim())){const t=o[e+1]
o.splice(e,t&&"whitespace"===t.type?2:1)}const n=t.data.match(/\#ifdef\s+(.*)/)
n&&n[1]&&d.includes(n[1].trim())&&(t.data="#if 1")
const a=t.data.match(/\#ifndef\s+(.*)/)
a&&a[1]&&d.includes(a[1].trim())&&(t.data="#if 0")}}return function(e,t){return t}(0,function(e){return e.map(e=>"eof"!==e.type?e.data:"").join("")}(o))}new Map
class T{constructor(e,t,r,o,n=new Map){this._context=e,this._locations=o,this._uniformBlockBindings=n,this._refCount=1,this._compiled=!1,this._nameToUniformLocation={},this._nameToUniform1={},this._nameToUniform1v=new Map,this._nameToUniform2=new Map,this._nameToUniform3=new Map,this._nameToUniform4=new Map,this._nameToUniformMatrix3=new Map,this._nameToUniformMatrix4=new Map,e||console.error("RenderingContext isn't initialized!"),0===t.length&&console.error("Shaders source should not be empty!"),this._context.type===i.a.WEBGL2&&(t=v(t,s.u.VERTEX_SHADER),r=v(r,s.u.FRAGMENT_SHADER)),this._vShader=y(this._context,s.u.VERTEX_SHADER,t),this._fShader=y(this._context,s.u.FRAGMENT_SHADER,r),this._vShader&&this._fShader||console.error("Error loading shaders!"),this._context.instanceCounter.increment(s.t.Shader,this),Object(a.c)()&&(this.vertexShader=t,this.fragmentShader=r)
const c=this._context.gl,l=c.createProgram()
if(c.attachShader(l,this._vShader),c.attachShader(l,this._fShader),this._locations.forEach((e,t)=>c.bindAttribLocation(l,e,t)),c.linkProgram(l),Object(a.c)()&&!c.getProgramParameter(l,c.LINK_STATUS)&&console.error(`Could not link shader\nvalidated: ${c.getProgramParameter(l,c.VALIDATE_STATUS)}, gl error ${c.getError()}, vertex: ${c.getShaderParameter(this._vShader,c.COMPILE_STATUS)}, fragment: ${c.getShaderParameter(this._fShader,c.COMPILE_STATUS)}, info log: ${c.getProgramInfoLog(l)}, vertex source: ${this.vertexShader}, fragment source: ${this.fragmentShader}`),this._context.type===i.a.WEBGL2){const e=c
for(const[t,r]of this._uniformBlockBindings){const o=e.getUniformBlockIndex(l,t)
o<4294967295&&e.uniformBlockBinding(l,o,r)}}this._glName=l,this._context.instanceCounter.increment(s.t.Program,this)}get glName(){return this._glName}get hasGLName(){return Object(n.l)(this._glName)}get compiled(){if(this._compiled)return!0
const e=this._context.gl.getExtension("KHR_parallel_shader_compile")
return null==e||Object(n.k)(this.glName)?(this._compiled=!0,!0):(this._compiled=!!this._context.gl.getProgramParameter(this.glName,e.COMPLETION_STATUS_KHR),this._compiled)}dispose(){if(--this._refCount>0)return
const e=this._context.gl
this._vShader&&(e.deleteShader(this._vShader),this._vShader=null,this._context.instanceCounter.decrement(s.t.Shader,this)),this._fShader&&(e.deleteShader(this._fShader),this._fShader=null),this._glName&&(e.deleteProgram(this._glName),this._glName=null,this._context.instanceCounter.decrement(s.t.Program,this))}ref(){++this._refCount}_getUniformLocation(e){return void 0===this._nameToUniformLocation[e]&&Object(n.l)(this.glName)&&(++M.numUniforms,this._nameToUniformLocation[e]=this._context.gl.getUniformLocation(this.glName,e)),this._nameToUniformLocation[e]}hasUniform(e){return null!==this._getUniformLocation(e)}setUniform1i(e,t){const r=this._nameToUniform1[e]
void 0!==r&&t===r||(this._context.gl.uniform1i(this._getUniformLocation(e),t),this._nameToUniform1[e]=t)}setUniform1iv(e,t){S(this._nameToUniform1v,e,t)&&this._context.gl.uniform1iv(this._getUniformLocation(e),t)}setUniform2iv(e,t){S(this._nameToUniform2,e,t)&&this._context.gl.uniform2iv(this._getUniformLocation(e),t)}setUniform3iv(e,t){S(this._nameToUniform3,e,t)&&this._context.gl.uniform3iv(this._getUniformLocation(e),t)}setUniform4iv(e,t){S(this._nameToUniform4,e,t)&&this._context.gl.uniform4iv(this._getUniformLocation(e),t)}setUniform1f(e,t){const r=this._nameToUniform1[e]
void 0!==r&&t===r||(this._context.gl.uniform1f(this._getUniformLocation(e),t),this._nameToUniform1[e]=t)}setUniform1fv(e,t){S(this._nameToUniform1v,e,t)&&this._context.gl.uniform1fv(this._getUniformLocation(e),t)}setUniform2f(e,t,r){const o=this._nameToUniform2.get(e)
void 0===o?(this._context.gl.uniform2f(this._getUniformLocation(e),t,r),this._nameToUniform2.set(e,[t,r])):t===o[0]&&r===o[1]||(this._context.gl.uniform2f(this._getUniformLocation(e),t,r),o[0]=t,o[1]=r)}setUniform2fv(e,t){S(this._nameToUniform2,e,t)&&this._context.gl.uniform2fv(this._getUniformLocation(e),t)}setUniform3f(e,t,r,o){const n=this._nameToUniform3.get(e)
void 0===n?(this._context.gl.uniform3f(this._getUniformLocation(e),t,r,o),this._nameToUniform3[e]=[t,r,o]):t===n[0]&&r===n[1]&&o===n[2]||(this._context.gl.uniform3f(this._getUniformLocation(e),t,r,o),n[0]=t,n[1]=r,n[2]=o)}setUniform3fv(e,t){S(this._nameToUniform3,e,t)&&this._context.gl.uniform3fv(this._getUniformLocation(e),t)}setUniform4f(e,t,r,o,n){const a=this._nameToUniform4.get(e)
void 0===a?(this._context.gl.uniform4f(this._getUniformLocation(e),t,r,o,n),this._nameToUniform4.set(e,[t,r,o,n])):void 0!==a&&t===a[0]&&r===a[1]&&o===a[2]&&n===a[3]||(this._context.gl.uniform4f(this._getUniformLocation(e),t,r,o,n),a[0]=t,a[1]=r,a[2]=o,a[3]=n)}setUniform4fv(e,t){S(this._nameToUniform4,e,t)&&this._context.gl.uniform4fv(this._getUniformLocation(e),t)}setUniformMatrix3fv(e,t,r=!1){S(this._nameToUniformMatrix3,e,t)&&this._context.gl.uniformMatrix3fv(this._getUniformLocation(e),r,t)}setUniformMatrix4fv(e,t,r=!1){S(this._nameToUniformMatrix4,e,t)&&this._context.gl.uniformMatrix4fv(this._getUniformLocation(e),r,t)}stop(){}}function y(e,t,r){const o=e.gl,n=o.createShader(t)
return o.shaderSource(n,r),o.compileShader(n),Object(a.c)()&&!o.getShaderParameter(n,o.COMPILE_STATUS)&&(console.error("Compile error in ".concat(t===s.u.VERTEX_SHADER?"vertex":"fragment"," shader")),console.error(o.getShaderInfoLog(n)),console.error(function(e){let t=2
return e.replace(/\n/g,()=>"\n"+function(e){return e>=1e3?e.toString():("  "+e).slice(-3)}(t++)+":")}(r))),M.enabled&&(M.compiledLOC+=r.match(/\n/g).length+1),n}function S(e,t,r){const n=e.get(t)
return n?Object(o.r)(n,r):(e.set(t,Array.from(r)),!0)}const M={compiledLOC:0,numUniforms:0,enabled:!1}},1501:function(e,t,r){"use strict"
r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return l}))
var o,n={},a={get exports(){return n},set exports(e){n=e}}
void 0!==(o=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"])&&(a.exports=o)
const i=n
var s,c={}
s={get exports(){return c},set exports(e){c=e}},function(e){var t=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"]
void 0!==t&&(s.exports=t)}()
const l=c
var u={}
!function(e){!function(t){var r=["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT","textureSize","texelFetch"]
void 0!==r&&(e.exports=r)}()}({get exports(){return u},set exports(e){u=e}})
const f=u},1639:function(e,t,r){"use strict"
r.d(t,"a",(function(){return o}))
class o{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(e,t){var r
return null==(r=this._outer.get(e))?void 0:r.get(t)}set(e,t,r){const o=this._outer.get(e)
o?o.set(t,r):this._outer.set(e,new Map([[t,r]]))}delete(e,t){const r=this._outer.get(e)
r&&(r.delete(t),0===r.size&&this._outer.delete(e))}forEach(e){this._outer.forEach((t,r)=>e(t,r))}}},1695:function(e,t,r){"use strict"
r.d(t,"a",(function(){return o}))
class o{constructor(e){this._readFile=e}resolveIncludes(e){return this._resolve(e)}_resolve(e,t=new Map){if(t.has(e))return t.get(e)
const r=this._read(e)
if(!r)throw new Error("cannot find shader file "+e)
const o=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm
let n=o.exec(r)
const a=[]
for(;null!=n;)a.push({path:n[1],start:n.index,length:n[0].length}),n=o.exec(r)
let i=0,s=""
return a.forEach(e=>{s+=r.slice(i,e.start),s+=t.has(e.path)?"":this._resolve(e.path,t),i=e.start+e.length}),s+=r.slice(i),t.set(e,s),s}_read(e){return this._readFile(e)}}},2071:function(e,t,r){"use strict"
r.d(t,"a",(function(){return i}))
var o=r(23),n=r(1639),a=r(1489)
class i{constructor(e){this._rctx=e,this._store=new n.a}dispose(){this._store.forEach(e=>e.forEach(e=>e.dispose())),this._store.clear()}acquire(e,t,r,n){const i=this._store.get(e,t)
if(Object(o.l)(i))return i.ref(),i
const s=new a.a(this._rctx,e,t,r,n)
return s.ref(),this._store.set(e,t,s),s}get test(){let e=0
return this._store.forEach(t=>t.forEach(t=>e+=t.hasGLName?2:1)),{cachedWebGLObjects:e}}}},2129:function(e,t,r){"use strict"
function o(e){const{options:t,value:r}=e
return"number"==typeof t[r]}function n(e){let t=""
for(const r in e){const n=e[r]
if("boolean"==typeof n)n&&(t+=`#define ${r}\n`)
else if("number"==typeof n)t+=`#define ${r} ${n.toFixed()}\n`
else if("object"==typeof n)if(o(n)){const{value:e,options:o,namespace:a}=n,i=a?a+"_":""
for(const e in o)t+=`#define ${i}${e} ${o[e].toFixed()}\n`
t+=`#define ${r} ${i}${e}\n`}else{const e=n.options
let o=0
for(const r in e)t+=`#define ${e[r]} ${(o++).toFixed()}\n`
t+=`#define ${r} ${e[n.value]}\n`}}return t}r.d(t,"a",(function(){return n}))},2932:function(e,t,r){"use strict"
r.r(t)
var o=r(1068)
r.d(t,"BufferObject",(function(){return o.a}))
var n=r(1171)
r.d(t,"FramebufferObject",(function(){return n.a}))
var a=r(1489)
r.d(t,"Program",(function(){return a.a}))
var i=r(2071)
r.d(t,"ProgramCache",(function(){return i.a}))
var s=r(1474)
r.d(t,"Renderbuffer",(function(){return s.a}))
var c=r(1695)
r.d(t,"ShaderCompiler",(function(){return c.a}))
var l=r(1072)
r.d(t,"Texture",(function(){return l.a}))
var u=r(1116)
r.d(t,"VertexArrayObject",(function(){return u.a}))
var f=r(2129)
r.d(t,"glslifyDefineMap",(function(){return f.a}))
var d=r(1293)
r.d(t,"createProgram",(function(){return d.a}))
var m=r(1088)
r.d(t,"createContextOrErrorHTML",(function(){return m.c}))}}])
