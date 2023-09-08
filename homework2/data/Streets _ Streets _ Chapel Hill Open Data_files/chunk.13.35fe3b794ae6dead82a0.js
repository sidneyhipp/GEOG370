(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[13],{1177:function(e,t,a){"use strict"
a.d(t,"a",(function(){return i}))
class i{constructor(){this.name=this.constructor.name||"UnnamedBrush",this.brushEffect=null}prepareState(e,t){}draw(e,t,a){}drawMany(e,t,a){for(const i of t)i.visible&&this.draw(e,i,a)}}},1605:function(e,t,a){"use strict"
a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return p})),a.d(t,"c",(function(){return i})),a.d(t,"d",(function(){return s})),a.d(t,"e",(function(){return r})),a.d(t,"f",(function(){return l})),a.d(t,"g",(function(){return u})),a.d(t,"h",(function(){return f})),a.d(t,"i",(function(){return c})),a.d(t,"j",(function(){return n}))
var i,n,r,o,l,s,u,c,f,m,d=a(1030);(m=i||(i={}))[m.BACKGROUND=0]="BACKGROUND",m[m.FILL=1]="FILL",m[m.LINE=2]="LINE",m[m.SYMBOL=3]="SYMBOL",m[m.CIRCLE=4]="CIRCLE",function(e){e[e.VISIBLE=0]="VISIBLE",e[e.NONE=1]="NONE"}(n||(n={})),function(e){e[e.POINT=0]="POINT",e[e.LINE=1]="LINE",e[e.LINE_CENTER=2]="LINE_CENTER"}(r||(r={})),function(e){e[e.MAP=0]="MAP",e[e.VIEWPORT=1]="VIEWPORT",e[e.AUTO=2]="AUTO"}(o||(o={})),function(e){e[e.AUTO=0]="AUTO",e[e.LEFT=1]="LEFT",e[e.CENTER=2]="CENTER",e[e.RIGHT=3]="RIGHT"}(l||(l={})),function(e){e[e.CENTER=0]="CENTER",e[e.LEFT=1]="LEFT",e[e.RIGHT=2]="RIGHT",e[e.TOP=3]="TOP",e[e.BOTTOM=4]="BOTTOM",e[e.TOP_LEFT=5]="TOP_LEFT",e[e.TOP_RIGHT=6]="TOP_RIGHT",e[e.BOTTOM_LEFT=7]="BOTTOM_LEFT",e[e.BOTTOM_RIGHT=8]="BOTTOM_RIGHT"}(s||(s={})),function(e){e[e.NONE=0]="NONE",e[e.UPPERCASE=1]="UPPERCASE",e[e.LOWERCASE=2]="LOWERCASE"}(u||(u={})),function(e){e[e.MAP=0]="MAP",e[e.VIEWPORT=1]="VIEWPORT"}(c||(c={})),function(e){e[e.HORIZONTAL=0]="HORIZONTAL",e[e.VERTICAL=1]="VERTICAL"}(f||(f={}))
class p{}p.backgroundLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:n.VISIBLE}},p.fillLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:n.VISIBLE}},p.lineLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:n.VISIBLE},"line-cap":{type:"enum",values:["butt","round","square"],default:d.e.BUTT},"line-join":{type:"enum",values:["bevel","round","miter"],default:d.p.MITER},"line-miter-limit":{type:"number",default:2},"line-round-limit":{type:"number",default:1.05}},p.symbolLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:n.VISIBLE},"symbol-avoid-edges":{type:"boolean",default:!1},"symbol-placement":{type:"enum",values:["point","line","line-center"],default:r.POINT},"symbol-sort-key":{type:"number",default:-1},"symbol-spacing":{type:"number",minimum:1,default:250},"icon-allow-overlap":{type:"boolean",default:!1},"icon-anchor":{type:"enum",values:["center","left","right","top","bottom","top-left","top-right","bottom-left","bottom-right"],default:s.CENTER},"icon-ignore-placement":{type:"boolean",default:!1},"icon-image":{type:"string"},"icon-keep-upright":{type:"boolean",default:!1},"icon-offset":{type:"array",value:"number",length:2,default:[0,0]},"icon-optional":{type:"boolean",default:!1},"icon-padding":{type:"number",minimum:0,default:2},"icon-rotate":{type:"number",default:0},"icon-rotation-alignment":{type:"enum",values:["map","viewport","auto"],default:o.AUTO},"icon-size":{type:"number",minimum:0,default:1},"text-allow-overlap":{type:"boolean",default:!1},"text-anchor":{type:"enum",values:["center","left","right","top","bottom","top-left","top-right","bottom-left","bottom-right"],default:s.CENTER},"text-field":{type:"string"},"text-font":{type:"array",value:"string",default:["Open Sans Regular","Arial Unicode MS Regular"]},"text-ignore-placement":{type:"boolean",default:!1},"text-justify":{type:"enum",values:["auto","left","center","right"],default:l.CENTER},"text-keep-upright":{type:"boolean",default:!0},"text-letter-spacing":{type:"number",default:0},"text-line-height":{type:"number",default:1.2},"text-max-angle":{type:"number",minimum:0,default:45},"text-max-width":{type:"number",minimum:0,default:10},"text-offset":{type:"array",value:"number",length:2,default:[0,0]},"text-optional":{type:"boolean",default:!1},"text-padding":{type:"number",minimum:0,default:2},"text-rotate":{type:"number",default:0},"text-rotation-alignment":{type:"enum",values:["map","viewport","auto"],default:o.AUTO},"text-size":{type:"number",minimum:0,default:16},"text-transform":{type:"enum",values:["none","uppercase","lowercase"],default:u.NONE},"text-writing-mode":{type:"array",value:"enum",values:["horizontal","vertical"],default:[f.HORIZONTAL]}},p.circleLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:n.VISIBLE}},p.backgroundPaintDefinition={"background-color":{type:"color",default:[0,0,0,1]},"background-opacity":{type:"number",minimum:0,maximum:1,default:1},"background-pattern":{type:"string"}},p.fillPaintDefinition={"fill-antialias":{type:"boolean",default:!0},"fill-color":{type:"color",default:[0,0,0,1]},"fill-opacity":{type:"number",minimum:0,maximum:1,default:1},"fill-outline-color":{type:"color",default:[0,0,0,0]},"fill-pattern":{type:"string"},"fill-translate":{type:"array",value:"number",length:2,default:[0,0]},"fill-translate-anchor":{type:"enum",values:["map","viewport"],default:c.MAP}},p.linePaintDefinition={"line-blur":{type:"number",minimum:0,default:0},"line-color":{type:"color",default:[0,0,0,1]},"line-dasharray":{type:"array",value:"number",default:[]},"line-gap-width":{type:"number",minimum:0,default:0},"line-offset":{type:"number",default:0},"line-opacity":{type:"number",minimum:0,maximum:1,default:1},"line-pattern":{type:"string"},"line-translate":{type:"array",value:"number",length:2,default:[0,0]},"line-translate-anchor":{type:"enum",values:["map","viewport"],default:c.MAP},"line-width":{type:"number",minimum:0,default:1}},p.symbolPaintDefinition={"icon-color":{type:"color",default:[0,0,0,1]},"icon-halo-blur":{type:"number",minimum:0,default:0},"icon-halo-color":{type:"color",default:[0,0,0,0]},"icon-halo-width":{type:"number",minimum:0,default:0},"icon-opacity":{type:"number",minimum:0,maximum:1,default:1},"icon-translate":{type:"array",value:"number",length:2,default:[0,0]},"icon-translate-anchor":{type:"enum",values:["map","viewport"],default:c.MAP},"text-color":{type:"color",default:[0,0,0,1]},"text-halo-blur":{type:"number",minimum:0,default:0},"text-halo-color":{type:"color",default:[0,0,0,0]},"text-halo-width":{type:"number",minimum:0,default:0},"text-opacity":{type:"number",minimum:0,maximum:1,default:1},"text-translate":{type:"array",value:"number",length:2,default:[0,0]},"text-translate-anchor":{type:"enum",values:["map","viewport"],default:c.MAP}},p.rasterPaintDefinition={"raster-opacity":{type:"number",minimum:0,maximum:1,default:1},"raster-hue-rotate":{type:"number",default:0},"raster-brightness-min":{type:"number",minimum:0,maximum:1,default:0},"raster-brightness-max":{type:"number",minimum:0,maximum:1,default:1},"raster-saturation":{type:"number",minimum:-1,maximum:1,default:0},"raster-contrast":{type:"number",minimum:-1,maximum:1,default:0},"raster-fade-duration":{type:"number",minimum:0,default:300}},p.circlePaintDefinition={"circle-blur":{type:"number",minimum:0,default:0},"circle-color":{type:"color",default:[0,0,0,1]},"circle-opacity":{type:"number",minimum:0,maximum:1,default:1},"circle-radius":{type:"number",minimum:0,default:5},"circle-stroke-color":{type:"color",default:[0,0,0,1]},"circle-stroke-opacity":{type:"number",minimum:0,maximum:1,default:1},"circle-stroke-width":{type:"number",minimum:0,default:0},"circle-translate":{type:"array",value:"number",length:2,default:[0,0]},"circle-translate-anchor":{type:"enum",values:["map","viewport"],default:c.MAP}}},1616:function(e,t,a){"use strict"
a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r})),Math.PI
const i=1/Math.LN2
function n(e){return function(e,t){return(e%=t)>=0?e:e+t}(e*(256/360),256)}function r(e){return Math.log(e)*i}},1695:function(e,t,a){"use strict"
a.d(t,"a",(function(){return i}))
class i{constructor(e){this._readFile=e}resolveIncludes(e){return this._resolve(e)}_resolve(e,t=new Map){if(t.has(e))return t.get(e)
const a=this._read(e)
if(!a)throw new Error("cannot find shader file "+e)
const i=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm
let n=i.exec(a)
const r=[]
for(;null!=n;)r.push({path:n[1],start:n.index,length:n[0].length}),n=i.exec(a)
let o=0,l=""
return r.forEach(e=>{l+=a.slice(o,e.start),l+=t.has(e.path)?"":this._resolve(e.path,t),o=e.start+e.length}),l+=a.slice(o),t.set(e,l),l}_read(e){return this._readFile(e)}}},1814:function(e,t,a){"use strict"
a.d(t,"a",(function(){return p}))
var i=a(991),n=a(23),r=a(1151),o=a(1261),l=a(1e3),s=a(1003),u=a(1064),c=a(1177),f=a(1068),m=a(984),d=a(1116)
class p extends c.a{constructor(){super(...arguments),this._color=Object(o.b)(1,0,0,1),this._patternMatrix=Object(r.b)(),this._programOptions={id:!1,pattern:!1}}dispose(){this._vao&&(this._vao.dispose(),this._vao=null)}drawMany(e,t){const{context:a,painter:r,styleLayerUID:o,requestRender:c,allowDelayedRender:f}=e
this._loadWGLResources(e)
const d=e.displayLevel,p=e.styleLayer,y=p.backgroundMaterial,g=r.vectorTilesMaterialManager,b=p.getPaintValue("background-color",d),h=p.getPaintValue("background-opacity",d),E=p.getPaintValue("background-pattern",d),_=void 0!==E,v=b[3]*h,T=1|window.devicePixelRatio,M=e.spriteMosaic
let P,I
const x=T>l.ab?2:1,O=e.drawPhase===s.c.HITTEST,U=this._programOptions
U.id=O,U.pattern=_
const R=g.getMaterialProgram(a,y,U)
if(f&&Object(n.l)(c)&&!R.compiled)c()
else{if(a.bindVAO(this._vao),a.useProgram(R),_){const e=M.getMosaicItemPosition(E,!0)
if(Object(n.l)(e)){const{tl:t,br:i,page:r}=e
P=i[0]-t[0],I=i[1]-t[1]
const o=M.getPageSize(r)
Object(n.l)(o)&&(M.bind(a,m.z.LINEAR,r,l.cb),R.setUniform4f("u_tlbr",t[0],t[1],i[0],i[1]),R.setUniform2fv("u_mosaicSize",o),R.setUniform1i("u_texture",l.cb))}R.setUniform1f("u_opacity",h)}else this._color[0]=v*b[0],this._color[1]=v*b[1],this._color[2]=v*b[2],this._color[3]=v,R.setUniform4fv("u_color",this._color)
if(R.setUniform1f("u_depth",p.z||0),O){const e=Object(u.c)(o+1)
R.setUniform4fv("u_id",e)}for(const e of t){if(R.setUniform1f("u_coord_range",e.rangeX),R.setUniformMatrix3fv("u_dvsMat3",e.transforms.dvs),_){const t=Math.max(2**(Math.round(d)-e.key.level),1),a=x*e.width*t,n=a/Object(i.p)(P),r=a/Object(i.p)(I)
this._patternMatrix[0]=n,this._patternMatrix[4]=r,R.setUniformMatrix3fv("u_pattern_matrix",this._patternMatrix)}a.setStencilFunction(m.h.EQUAL,0,255),a.drawArrays(m.r.TRIANGLE_STRIP,0,4)}}}_loadWGLResources(e){if(this._vao)return
const{context:t,styleLayer:a}=e,i=a.backgroundMaterial,n=new Int8Array([0,0,1,0,0,1,1,1]),r=f.a.createVertex(t,m.D.STATIC_DRAW,n),o=new d.a(t,i.getAttributeLocations(),i.getLayoutInfo(),{geometry:r})
this._vao=o}}},1815:function(e,t,a){"use strict"
a.d(t,"a",(function(){return u}))
var i=a(23),n=a(1605),r=a(1003),o=a(1064),l=a(1177),s=a(984)
class u extends l.a{constructor(){super(...arguments),this._programOptions={id:!1}}dispose(){}drawMany(e,t){const{context:a,displayLevel:l,requiredLevel:u,state:c,drawPhase:f,painter:m,spriteMosaic:d,styleLayerUID:p,requestRender:y,allowDelayedRender:g}=e
if(!t.some(e=>{var t,a
return null!=(t=null==(a=e.layerData.get(p))?void 0:a.circleIndexCount)&&t}))return
const b=e.styleLayer,h=b.circleMaterial,E=m.vectorTilesMaterialManager,_=b.getPaintValue("circle-translate",l),v=b.getPaintValue("circle-translate-anchor",l),T=f===r.c.HITTEST,M=this._programOptions
M.id=T
const P=E.getMaterialProgram(a,h,M)
if(g&&Object(i.l)(y)&&!P.compiled)return void y()
a.useProgram(P),P.setUniformMatrix3fv("u_displayMat3",v===n.i.VIEWPORT?c.displayMat3:c.displayViewMat3),P.setUniform2fv("u_circleTranslation",_),P.setUniform1f("u_depth",b.z),P.setUniform1f("u_antialiasingWidth",1.2)
let I=-1
if(T){const e=Object(o.c)(p+1)
P.setUniform4fv("u_id",e)}for(const e of t){if(!e.layerData.has(p))continue
e.key.level!==I&&(I=e.key.level,h.setDataUniforms(P,l,b,I,d))
const t=e.layerData.get(p)
if(!t.circleIndexCount)continue
t.prepareForRendering(a)
const n=t.circleVertexArrayObject
Object(i.k)(n)||(a.bindVAO(n),P.setUniformMatrix3fv("u_dvsMat3",e.transforms.dvs),u!==e.key.level?a.setStencilFunction(s.h.EQUAL,e.stencilRef,255):a.setStencilFunction(s.h.GREATER,255,255),a.drawElements(s.r.TRIANGLES,t.circleIndexCount,s.k.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*t.circleIndexStart),e.triangleCount+=t.circleIndexCount/3)}}}},1816:function(e,t,a){"use strict"
a.d(t,"a",(function(){return f}))
var i=a(23),n=a(1605),r=a(1e3),o=a(1003),l=a(1064),s=a(1177),u=a(984)
const c=1/65536
class f extends s.a{constructor(){super(...arguments),this._fillProgramOptions={id:!1,pattern:!1},this._outlineProgramOptions={id:!1}}dispose(){}drawMany(e,t){const{displayLevel:a,drawPhase:i,renderPass:n,spriteMosaic:r,styleLayerUID:s}=e
let u=!1
for(const e of t)if(e.layerData.has(s)){const t=e.layerData.get(s)
if(t.fillIndexCount>0||t.outlineIndexCount>0){u=!0
break}}if(!u)return
const c=e.styleLayer,f=c.getPaintProperty("fill-pattern"),m=void 0!==f,d=m&&f.isDataDriven
let p
if(m&&!d){const e=f.getValue(a)
p=r.getMosaicItemPosition(e,!0)}const y=!m&&c.getPaintValue("fill-antialias",a)
let g,b=!0,h=1
if(!m){const e=c.getPaintProperty("fill-color"),t=c.getPaintProperty("fill-opacity")
if(!(null!=e&&e.isDataDriven||null!=t&&t.isDataDriven)){const e=c.getPaintValue("fill-color",a)
h=c.getPaintValue("fill-opacity",a)*e[3],h>=1&&(b=!1)}}if(b&&"opaque"===n)return
i===o.c.HITTEST&&(g=Object(l.c)(s+1))
const E=c.getPaintValue("fill-translate",a),_=c.getPaintValue("fill-translate-anchor",a);(b||"translucent"!==n)&&this._drawFill(e,s,c,t,E,_,m,p,d,g)
const v=!c.hasDataDrivenOutlineColor&&c.outlineUsesFillColor&&h<1
y&&"opaque"!==n&&!v&&this._drawOutline(e,s,c,t,E,_,g)}_drawFill(e,t,a,l,s,f,m,d,p,y){if(m&&!p&&Object(i.k)(d))return
const{context:g,displayLevel:b,state:h,drawPhase:E,painter:_,pixelRatio:v,spriteMosaic:T,requestRender:M,allowDelayedRender:P}=e,I=a.fillMaterial,x=_.vectorTilesMaterialManager,O=v>r.ab?2:1,U=E===o.c.HITTEST,R=this._fillProgramOptions
R.id=U,R.pattern=m
const L=x.getMaterialProgram(g,I,R)
if(P&&Object(i.l)(M)&&!L.compiled)return void M()
if(g.useProgram(L),Object(i.l)(d)){const{page:e}=d,t=T.getPageSize(e)
Object(i.l)(t)&&(T.bind(g,u.z.LINEAR,e,r.cb),L.setUniform2fv("u_mosaicSize",t),L.setUniform1i("u_texture",r.cb))}L.setUniformMatrix3fv("u_displayMat3",f===n.i.VIEWPORT?h.displayMat3:h.displayViewMat3),L.setUniform2fv("u_fillTranslation",s),L.setUniform1f("u_depth",a.z+c),U&&L.setUniform4fv("u_id",y)
let S=-1
for(const e of l){if(!e.layerData.has(t))continue
e.key.level!==S&&(S=e.key.level,I.setDataUniforms(L,b,a,S,T))
const n=e.layerData.get(t)
if(!n.fillIndexCount)continue
n.prepareForRendering(g)
const o=n.fillVertexArrayObject
if(!Object(i.k)(o)){if(g.bindVAO(o),L.setUniformMatrix3fv("u_dvsMat3",e.transforms.dvs),g.setStencilFunction(u.h.EQUAL,e.stencilRef,255),m){const t=Math.max(2**(Math.round(b)-e.key.level),1),a=e.rangeX/(O*e.width*t)
L.setUniform1f("u_patternFactor",a)}if(p){const e=n.patternMap
if(!e)continue
for(const[t,a]of e){const e=T.getPageSize(t)
Object(i.l)(e)&&(T.bind(g,u.z.LINEAR,t,r.cb),L.setUniform2fv("u_mosaicSize",e),L.setUniform1i("u_texture",r.cb),g.drawElements(u.r.TRIANGLES,a[1],u.k.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*a[0]))}}else g.drawElements(u.r.TRIANGLES,n.fillIndexCount,u.k.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*n.fillIndexStart)
e.triangleCount+=n.fillIndexCount/3}}}_drawOutline(e,t,a,r,l,s,f){const{context:m,displayLevel:d,state:p,drawPhase:y,painter:g,pixelRatio:b,spriteMosaic:h,requestRender:E,allowDelayedRender:_}=e,v=a.outlineMaterial,T=g.vectorTilesMaterialManager,M=.75/b,P=y===o.c.HITTEST,I=this._outlineProgramOptions
I.id=P
const x=T.getMaterialProgram(m,v,I)
if(_&&Object(i.l)(E)&&!x.compiled)return void E()
m.useProgram(x),x.setUniformMatrix3fv("u_displayMat3",s===n.i.VIEWPORT?p.displayMat3:p.displayViewMat3),x.setUniform2fv("u_fillTranslation",l),x.setUniform1f("u_depth",a.z+c),x.setUniform1f("u_outline_width",M),P&&x.setUniform4fv("u_id",f)
let O=-1
for(const e of r){if(!e.layerData.has(t))continue
e.key.level!==O&&(O=e.key.level,v.setDataUniforms(x,d,a,O,h))
const n=e.layerData.get(t)
if(n.prepareForRendering(m),!n.outlineIndexCount)continue
const r=n.outlineVertexArrayObject
Object(i.k)(r)||(m.bindVAO(r),x.setUniformMatrix3fv("u_dvsMat3",e.transforms.dvs),m.setStencilFunction(u.h.EQUAL,e.stencilRef,255),m.drawElements(u.r.TRIANGLES,n.outlineIndexCount,u.k.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*n.outlineIndexStart),e.triangleCount+=n.outlineIndexCount/3)}}}},1817:function(e,t,a){"use strict"
a.d(t,"a",(function(){return c}))
var i=a(23),n=a(1605),r=a(1e3),o=a(1003),l=a(1064),s=a(1177),u=a(984)
class c extends s.a{constructor(){super(...arguments),this._programOptions={id:!1,pattern:!1,sdf:!1}}dispose(){}drawMany(e,t){const{context:a,displayLevel:s,state:c,drawPhase:f,painter:m,pixelRatio:d,spriteMosaic:p,styleLayerUID:y,requestRender:g,allowDelayedRender:b}=e
if(!t.some(e=>{var t,a
return null!=(t=null==(a=e.layerData.get(y))?void 0:a.lineIndexCount)&&t}))return
const h=e.styleLayer,E=h.lineMaterial,_=m.vectorTilesMaterialManager,v=h.getPaintValue("line-translate",s),T=h.getPaintValue("line-translate-anchor",s),M=h.getPaintProperty("line-pattern"),P=void 0!==M,I=P&&M.isDataDriven
let x,O
if(P&&!I){const e=M.getValue(s)
x=p.getMosaicItemPosition(e)}let U=!1
if(!P){const e=h.getPaintProperty("line-dasharray")
if(O=void 0!==e,U=O&&e.isDataDriven,O&&!U){const t=e.getValue(s),a=h.getDashKey(t,h.getLayoutValue("line-cap",s))
x=p.getMosaicItemPosition(a)}}const R=1/d,L=f===o.c.HITTEST,S=this._programOptions
S.id=L,S.pattern=P,S.sdf=O
const w=_.getMaterialProgram(a,E,S)
if(b&&Object(i.l)(g)&&!w.compiled)return void g()
if(a.useProgram(w),w.setUniformMatrix3fv("u_displayViewMat3",c.displayViewMat3),w.setUniformMatrix3fv("u_displayMat3",T===n.i.VIEWPORT?c.displayMat3:c.displayViewMat3),w.setUniform2fv("u_lineTranslation",v),w.setUniform1f("u_depth",h.z),w.setUniform1f("u_antialiasing",R),L){const e=Object(l.c)(y+1)
w.setUniform4fv("u_id",e)}if(x&&Object(i.l)(x)){const{page:e}=x,t=p.getPageSize(e)
Object(i.l)(t)&&(p.bind(a,u.z.LINEAR,e,r.cb),w.setUniform2fv("u_mosaicSize",t),w.setUniform1i("u_texture",r.cb))}let N=-1
for(const e of t){if(!e.layerData.has(y))continue
e.key.level!==N&&(N=e.key.level,E.setDataUniforms(w,s,h,N,p))
const t=2**(s-N)/d
w.setUniform1f("u_zoomFactor",t)
const n=e.layerData.get(y)
if(!n.lineIndexCount)continue
n.prepareForRendering(a)
const o=n.lineVertexArrayObject
if(!Object(i.k)(o)){if(a.bindVAO(o),w.setUniformMatrix3fv("u_dvsMat3",e.transforms.dvs),a.setStencilFunction(u.h.EQUAL,e.stencilRef,255),I||U){const e=n.patternMap
if(!e)continue
for(const[t,n]of e){const e=p.getPageSize(t)
Object(i.l)(e)&&(p.bind(a,u.z.LINEAR,t,r.cb),w.setUniform2fv("u_mosaicSize",e),w.setUniform1i("u_texture",r.cb),a.drawElements(u.r.TRIANGLES,n[1],u.k.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*n[0]))}}else a.drawElements(u.r.TRIANGLES,n.lineIndexCount,u.k.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*n.lineIndexStart)
e.triangleCount+=n.lineIndexCount/3}}}}},1818:function(e,t,a){"use strict"
a.d(t,"a",(function(){return d}))
var i=a(23),n=a(1173),r=a(1614),o=a(1605),l=a(1e3),s=a(1003),u=a(1616),c=a(1064),f=a(1177),m=a(984)
class d extends f.a{constructor(){super(...arguments),this._iconProgramOptions={id:!1,sdf:!1},this._sdfProgramOptions={id:!1},this._spritesTextureSize=Object(n.c)()}dispose(){}drawMany(e,t){const{drawPhase:a,styleLayerUID:i}=e,n=e.styleLayer
let r
a===s.c.HITTEST&&(r=Object(c.c)(i+1)),this._drawIcons(e,n,t,r),this._drawText(e,n,t,r)}_drawIcons(e,t,a,n){const{context:c,displayLevel:f,drawPhase:m,painter:d,spriteMosaic:p,state:y,styleLayerUID:g,requestRender:b,allowDelayedRender:h}=e,E=t.iconMaterial,_=d.vectorTilesMaterialManager
let v,T=!1
for(const e of a)if(e.layerData.has(g)&&(v=e.layerData.get(g),v.iconPerPageElementsMap.size>0)){T=!0
break}if(!T)return
const M=t.getPaintValue("icon-translate",f),P=t.getPaintValue("icon-translate-anchor",f)
let I=t.getLayoutValue("icon-rotation-alignment",f)
I===o.a.AUTO&&(I=t.getLayoutValue("symbol-placement",f)===o.e.POINT?o.a.VIEWPORT:o.a.MAP)
const x=I===o.a.MAP,O=t.getLayoutValue("icon-keep-upright",f)&&x,U=v.isIconSDF,R=m===s.c.HITTEST,L=this._iconProgramOptions
L.id=R,L.sdf=U
const S=_.getMaterialProgram(c,E,L)
if(h&&Object(i.l)(b)&&!S.compiled)return void b()
c.useProgram(S),S.setUniformMatrix3fv("u_displayViewMat3",I===o.a.MAP?y.displayViewMat3:y.displayMat3),S.setUniformMatrix3fv("u_displayMat3",P===o.i.VIEWPORT?y.displayMat3:y.displayViewMat3),S.setUniform2fv("u_iconTranslation",M),S.setUniform1f("u_depth",t.z),S.setUniform1f("u_mapRotation",Object(u.a)(y.rotation)),S.setUniform1f("u_keepUpright",O?1:0),S.setUniform1f("u_level",10*f),S.setUniform1i("u_texture",l.cb),S.setUniform1f("u_fadeDuration",r.d/1e3),R&&S.setUniform4fv("u_id",n)
let w=-1
for(const n of a){if(!n.layerData.has(g))continue
if(n.key.level!==w&&(w=n.key.level,E.setDataUniforms(S,f,t,w,p)),v=n.layerData.get(g),0===v.iconPerPageElementsMap.size)continue
v.prepareForRendering(c),v.updateOpacityInfo()
const a=v.iconVertexArrayObject
if(!Object(i.k)(a)){c.bindVAO(a),S.setUniformMatrix3fv("u_dvsMat3",n.transforms.dvs),S.setUniform1f("u_time",(performance.now()-v.lastOpacityUpdate)/1e3)
for(const[t,a]of v.iconPerPageElementsMap)this._renderIconRange(e,S,a,t,n)}}}_renderIconRange(e,t,a,i,n){const{context:r,spriteMosaic:o}=e
this._spritesTextureSize[0]=o.getWidth(i)/4,this._spritesTextureSize[1]=o.getHeight(i)/4,t.setUniform2fv("u_mosaicSize",this._spritesTextureSize),o.bind(r,m.z.LINEAR,i,l.cb),r.setStencilTestEnabled(!0),r.setStencilFunction(m.h.GREATER,255,255),r.setStencilWriteMask(0),r.drawElements(m.r.TRIANGLES,a[1],m.k.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*a[0]),n.triangleCount+=a[1]/3}_drawText(e,t,a,c){const{context:f,displayLevel:d,drawPhase:p,glyphMosaic:y,painter:g,pixelRatio:b,spriteMosaic:h,state:E,styleLayerUID:_,requestRender:v,allowDelayedRender:T}=e,M=t.textMaterial,P=g.vectorTilesMaterialManager
let I,x=!1
for(const e of a)if(e.layerData.has(_)&&(I=e.layerData.get(_),I.glyphPerPageElementsMap.size>0)){x=!0
break}if(!x)return
const O=t.getPaintProperty("text-opacity")
if(O&&!O.isDataDriven&&0===O.getValue(d))return
const U=t.getPaintProperty("text-color"),R=!U||U.isDataDriven||U.getValue(d)[3]>0,L=t.getPaintProperty("text-halo-width"),S=t.getPaintProperty("text-halo-color"),w=(!L||L.isDataDriven||L.getValue(d)>0)&&(!S||S.isDataDriven||S.getValue(d)[3]>0)
if(!R&&!w)return
let N=t.getLayoutValue("text-rotation-alignment",d)
N===o.a.AUTO&&(N=t.getLayoutValue("symbol-placement",d)===o.e.POINT?o.a.VIEWPORT:o.a.MAP)
const D=N===o.a.MAP,A=t.getLayoutValue("text-keep-upright",d)&&D,V=p===s.c.HITTEST,k=.8*3/b
this._glyphTextureSize||(this._glyphTextureSize=Object(n.d)(y.width/4,y.height/4))
const C=t.getPaintValue("text-translate",d),j=t.getPaintValue("text-translate-anchor",d),z=this._sdfProgramOptions
z.id=V
const G=P.getMaterialProgram(f,M,z)
if(T&&Object(i.l)(v)&&!G.compiled)return void v()
f.useProgram(G),G.setUniformMatrix3fv("u_displayViewMat3",N===o.a.MAP?E.displayViewMat3:E.displayMat3),G.setUniformMatrix3fv("u_displayMat3",j===o.i.VIEWPORT?E.displayMat3:E.displayViewMat3),G.setUniform2fv("u_textTranslation",C),G.setUniform1f("u_depth",t.z+1/65536),G.setUniform2fv("u_mosaicSize",this._glyphTextureSize),G.setUniform1f("u_mapRotation",Object(u.a)(E.rotation)),G.setUniform1f("u_keepUpright",A?1:0),G.setUniform1f("u_level",10*d),G.setUniform1i("u_texture",l.bb),G.setUniform1f("u_antialiasingWidth",k),G.setUniform1f("u_fadeDuration",r.d/1e3),V&&G.setUniform4fv("u_id",c)
let F=-1
for(const e of a){if(!e.layerData.has(_))continue
if(e.key.level!==F&&(F=e.key.level,M.setDataUniforms(G,d,t,F,h)),I=e.layerData.get(_),0===I.glyphPerPageElementsMap.size)continue
I.prepareForRendering(f),I.updateOpacityInfo()
const a=I.textVertexArrayObject
if(Object(i.k)(a))continue
f.bindVAO(a),G.setUniformMatrix3fv("u_dvsMat3",e.transforms.dvs),f.setStencilTestEnabled(!0),f.setStencilFunction(m.h.GREATER,255,255),f.setStencilWriteMask(0)
const n=(performance.now()-I.lastOpacityUpdate)/1e3
G.setUniform1f("u_time",n),I.glyphPerPageElementsMap.forEach((t,a)=>{this._renderGlyphRange(f,t,a,y,G,w,R,e)})}}_renderGlyphRange(e,t,a,i,n,r,o,s){i.bind(e,m.z.LINEAR,a,l.bb),r&&(n.setUniform1f("u_halo",1),e.drawElements(m.r.TRIANGLES,t[1],m.k.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*t[0]),s.triangleCount+=t[1]/3),o&&(n.setUniform1f("u_halo",0),e.drawElements(m.r.TRIANGLES,t[1],m.k.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*t[0]),s.triangleCount+=t[1]/3)}}}}])
