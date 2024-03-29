(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[28],{1513:function(e,t,i){"use strict"
i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return c})),i.d(t,"c",(function(){return o})),i.d(t,"d",(function(){return n})),i.d(t,"e",(function(){return u})),i.d(t,"f",(function(){return l})),i.d(t,"g",(function(){return h})),i.d(t,"h",(function(){return d})),i.d(t,"i",(function(){return p}))
var r=i(23),s=i(997)
function n(e,t){return{type:Object(s.y)(t),value:e,unit:t}}function o(e,t){return{type:Object(s.y)(t),value:e,unit:t}}function c(e,t){return{type:Object(s.y)(t),value:e,unit:t}}function a(e,t,i="arithmetic"){return{type:Object(s.y)(t),value:e,unit:t,rotationType:i}}function h(e,t){return n(Object(s.e)(e.value,e.unit,t),t)}function u(e,t){return Object(r.k)(e)?t:Object(r.k)(t)||e.value>Object(s.e)(t.value,t.unit,e.unit)?e:t}function l(e,t){return Object(r.k)(e)?null:{...e,value:e.value*t}}const d=o(0,"meters"),p=c(0,"square-meters")
a(0,"radians")},1893:function(e,t,i){"use strict"
i.d(t,"a",(function(){return p})),i.d(t,"b",(function(){return d})),i.d(t,"c",(function(){return _})),i.d(t,"d",(function(){return l}))
var r=i(445),s=i(1002),n=i(23),o=i(773),c=i(1021),a=i(2309),h=i(988),u=i(1077)
class l{constructor(e){this.component=e,this.leftEdge=null,this.rightEdge=null,this.type="vertex",this.index=null}get pos(){return this._pos}set pos(e){this._pos=e,this.component.unnormalizeVertexPositions()}}class d{constructor(e,t,i){this.component=e,this.leftVertex=t,this.rightVertex=i,this.type="edge",t.rightEdge=this,i.leftEdge=this}}class p{constructor(e,t){this._spatialReference=e,this._viewingMode=t,this.vertices=[],this.edges=[],this.index=null}unnormalizeVertexPositions(){this.vertices.length<=1||function(e,t){if(!t.supported)return
let i=1/0,r=-1/0
const s=t.upperBoundX-t.lowerBoundX
e.forEach(e=>{let n=e.pos[0]
for(;n<t.lowerBoundX;)n+=s
for(;n>t.upperBoundX;)n-=s
i=Math.min(i,n),r=Math.max(r,n),e.pos[0]=n})
const n=r-i
s-n<n&&e.forEach(e=>{e.pos[0]<0&&(e.pos[0]+=s)})}(this.vertices,function(e,t){const i=Object(h.e)(e)
return t===u.a.Global&&i?{supported:!0,lowerBoundX:i.valid[0],upperBoundX:i.valid[1]}:{supported:!1,lowerBoundX:null,upperBoundX:null}}(this._spatialReference,this._viewingMode))}updateVertexIndex(e,t){if(0===this.vertices.length)return
const i=this.vertices[0]
let r=null,s=e,n=t
do{r=s,r.index=n++,s=r.rightEdge?r.rightEdge.rightVertex:null}while(null!=s&&s!==i)
r.leftEdge&&r!==this.vertices[this.vertices.length-1]&&this.swapVertices(this.vertices.indexOf(r),this.vertices.length-1)}getFirstVertex(){return 0===this.vertices.length?null:this.vertices[0]}getLastVertex(){return 0===this.vertices.length?null:this.vertices[this.vertices.length-1]}isClosed(){return this.vertices.length>2&&null!==this.vertices[0].leftEdge}swapVertices(e,t){const i=this.vertices[e]
this.vertices[e]=this.vertices[t],this.vertices[t]=i}iterateVertices(e){if(0===this.vertices.length)return
const t=this.vertices[0]
let i=t
do{e(i,i.index),i=Object(n.l)(i.rightEdge)?i.rightEdge.rightVertex:null}while(i!==t&&null!=i)}}class _ extends s.a{constructor(e,t){super(),this.type=e,this.coordinateHelper=t,this._geometry=null,this._dirty=!0,this.components=[]}get geometry(){if(this._dirty){switch(this.type){case"point":this._geometry=this._toPoint()
break
case"polyline":this._geometry=this._toPolyline()
break
case"polygon":this._geometry=this._toPolygon()}this._dirty=!1}return this._geometry}get spatialReference(){return this.coordinateHelper.spatialReference}notifyChanges(e){this._dirty=!0,this.emit("change",e)}_toPoint(){return 0===this.components.length||0===this.components[0].vertices.length?null:this.coordinateHelper.vectorToPoint(this.components[0].vertices[0].pos)}_toPolyline(){const e=[],t=this.coordinateHelper.vectorToArray
for(const i of this.components){if(i.vertices.length<1)continue
const r=[]
let s=i.vertices.find(e=>null==e.leftEdge)
const n=s
do{r.push(t(s.pos)),s=s.rightEdge?s.rightEdge.rightVertex:null}while(s&&s!==n)
e.push(r)}return new c.a({paths:e,spatialReference:this.spatialReference,hasZ:this.coordinateHelper.hasZ(),hasM:this.coordinateHelper.hasM()})}_toPolygon(){const e=[],t=this.coordinateHelper.vectorToArray
for(const i of this.components){if(i.vertices.length<1)continue
const r=[],s=i.vertices[0]
let o=s
const c=o
do{r.push(t(o.pos)),o=Object(n.l)(o.rightEdge)?o.rightEdge.rightVertex:null}while(o&&o!==c)
i.isClosed()&&r.push(t(s.pos)),e.push(r)}return new o.default({rings:e,spatialReference:this.spatialReference,hasZ:this.coordinateHelper.hasZ(),hasM:this.coordinateHelper.hasM()})}static fromGeometry(e,t){const i=e.spatialReference,s=Object(a.a)(e.hasZ,e.hasM,i),n=new _(e.type,s)
switch(e.type){case"polygon":{const o=e.rings
for(let e=0;e<o.length;++e){const c=o[e],a=new p(i,t)
a.index=e
const h=c.length>2&&Object(r.e)(c[0],c[c.length-1]),u=h?c.length-1:c.length
for(let e=0;e<u;++e){const t=s.arrayToVector(c[e]),i=new l(a)
a.vertices.push(i),i.pos=t,i.index=e}const _=a.vertices.length-1
for(let e=0;e<_;++e){const t=a.vertices[e],i=a.vertices[e+1],r=new d(a,t,i)
a.edges.push(r)}if(h){const e=new d(a,a.vertices[a.vertices.length-1],a.vertices[0])
a.edges.push(e)}n.components.push(a)}break}case"polyline":{const r=e.paths
for(let e=0;e<r.length;++e){const o=r[e],c=new p(i,t)
c.index=e
const a=o.length
for(let e=0;e<a;++e){const t=s.arrayToVector(o[e]),i=new l(c)
c.vertices.push(i),i.pos=t,i.index=e}const h=c.vertices.length-1
for(let e=0;e<h;++e){const t=c.vertices[e],i=c.vertices[e+1],r=new d(c,t,i)
c.edges.push(r)}n.components.push(c)}break}case"point":{const r=new p(i,t)
r.index=0
const o=new l(r)
o.index=0,o.pos=s.pointToVector(e),r.vertices.push(o),n.components.push(r)
break}}return n}}},1974:function(e,t,i){"use strict"
i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return r}))
class r{constructor(e,t,i){this._editGeometry=e,this._vertices=t,this.operation=i,this._undone=!1}apply(){this._vertices.forEach(e=>this.operation.apply(e)),this._editGeometry.components.forEach(e=>e.unnormalizeVertexPositions()),this._editGeometry.notifyChanges({operation:this._undone?"redo":"apply",updatedVertices:this._vertices})}undo(){this._vertices.forEach(e=>this.operation.undo(e)),this._editGeometry.notifyChanges({operation:"undo",updatedVertices:this._vertices}),this._undone=!0}canAccumulate(e){if(this._undone||e._vertices.length!==this._vertices.length)return!1
for(let t=0;t<e._vertices.length;++t)if(e._vertices[t]!==this._vertices[t])return!1
return this.operation.canAccumulate(e.operation)}accumulate(e){return!!(e instanceof r&&this.canAccumulate(e))&&(this._vertices.forEach(t=>this.operation.accumulate(t,e.operation)),this.operation.accumulateParams(e.operation),this._editGeometry.components.forEach(e=>e.unnormalizeVertexPositions()),this._editGeometry.notifyChanges({operation:"apply",updatedVertices:this._vertices}),!0)}}var s
!function(e){e[e.CUMULATIVE=0]="CUMULATIVE",e[e.REPLACE=1]="REPLACE"}(s||(s={}))},1975:function(e,t,i){"use strict"
i.d(t,"a",(function(){return d})),i.d(t,"b",(function(){return m})),i.d(t,"c",(function(){return o})),i.d(t,"d",(function(){return u})),i.d(t,"e",(function(){return l})),i.d(t,"f",(function(){return _})),i.d(t,"g",(function(){return a})),i.d(t,"h",(function(){return h})),i.d(t,"i",(function(){return p})),i.d(t,"j",(function(){return g})),i.d(t,"k",(function(){return b})),i.d(t,"l",(function(){return f}))
var r=i(23),s=i(1513),n=i(1678)
function o(e,t,i,r=2,o="abbr"){return Object(n.c)(e,Object(s.g)(t,i).value,i,r,o)}function c(e,t,i,r=2,o="abbr"){return Object(n.p)(e,Object(s.g)(t,i).value,i,r,o)}function a(e,t,i=2,r="abbr"){return Object(n.k)(e,t.value,t.unit,i,r)}function h(e,t,i=2,r="abbr"){return Object(n.n)(e,t.value,t.unit,i,r)}function u(e,t,i=2,r="abbr"){return Object(n.f)(e,t.value,t.unit,i,r)}function l(e,t,i=2,r="abbr"){return Object(n.i)(e,t.value,t.unit,i,r)}function d(e,t,i){return Object(n.a)(e.value,e.unit,e.rotationType,t,i)}function p(e,t,i){return Object(n.o)(e.value,e.unit,e.rotationType,t,i)}function _(e,t,i,s,n="abbr"){switch(s=Object(r.v)(s,2),i){case"imperial":return u(e,t,s,n)
case"metric":return a(e,t,s,n)
default:return o(e,t,i,s,n)}}function g(e,t,i,r=2,s="abbr"){switch(i){case"imperial":return function(e,t,i=2,r="abbr"){return Object(n.g)(e,t.value,t.unit,i,r)}(e,t,r,s)
case"metric":return function(e,t,i=2,r="abbr"){return Object(n.l)(e,t.value,t.unit,i,r)}(e,t,r,s)
default:return c(e,t,i,r,s)}}function f(e,t,i,r=2,s="abbr"){switch(i){case"imperial":return l(e,t,r,s)
case"metric":return h(e,t,r,s)
default:return o(e,t,i,r,s)}}function b(e,t,i,r=2,s="abbr"){switch(i){case"imperial":return function(e,t,i=2,r="abbr"){return Object(n.h)(e,t.value,t.unit,i,r)}(e,t,r,s)
case"metric":return function(e,t,i=2,r="abbr"){return Object(n.m)(e,t.value,t.unit,i,r)}(e,t,r,s)
default:return c(e,t,i,r,s)}}function m(e,t,i,r=2,s="abbr"){switch(i){case"imperial":return function(e,t,i=2,r="abbr"){return Object(n.e)(e,t.value,t.unit,i,r)}(e,t,r,s)
case"metric":return function(e,t,i=2,r="abbr"){return Object(n.j)(e,t.value,t.unit,i,r)}(e,t,r,s)
default:return o(e,t,i,r,s)}}},2014:function(e,t,i){"use strict"
i.d(t,"a",(function(){return v}))
var r=i(1002),s=i(23),n=i(1893),o=i(2078)
class c{constructor(e,t,i){this._editGeometry=e,this._component=t,this._pos=i,this._addedVertex=null,this._originalEdge=null,this._left=null,this._right=null}apply(){let e="redo"
Object(s.k)(this._addedVertex)&&(e="apply",this._addedVertex=new n.d(this._component))
const t=this._component.getLastVertex()
if(Object(s.k)(t))this._component.vertices.push(this._addedVertex),this._addedVertex.pos=this._pos,this._addedVertex.index=0
else{let e=null
t.rightEdge&&(this._originalEdge=t.rightEdge,e=this._originalEdge.rightVertex,this._component.edges.splice(this._component.edges.indexOf(this._originalEdge),1)),this._component.vertices.push(this._addedVertex),this._addedVertex.pos=this._pos,Object(s.k)(this._left)&&(this._left=new n.b(this._component,t,this._addedVertex)),this._component.edges.push(this._left),t.rightEdge=this._left,Object(s.l)(this._originalEdge)&&Object(s.l)(e)&&(Object(s.k)(this._right)&&(this._right=new n.b(this._component,this._addedVertex,e)),this._component.edges.push(this._right),e.leftEdge=this._right),this._component.updateVertexIndex(this._addedVertex,t.index+1)}this._editGeometry.notifyChanges({operation:e,addedVertices:[this._addedVertex]})}undo(){Object(s.k)(this._addedVertex)||(this._component.vertices.splice(this._component.vertices.indexOf(this._addedVertex),1),Object(s.l)(this._left)&&(this._component.edges.splice(this._component.edges.indexOf(this._left),1),this._left.leftVertex.rightEdge=null),Object(s.l)(this._right)&&(this._component.edges.splice(this._component.edges.indexOf(this._right),1),this._right.rightVertex.leftEdge=null),Object(s.l)(this._originalEdge)&&(this._component.edges.push(this._originalEdge),this._originalEdge.leftVertex.rightEdge=this._originalEdge,this._originalEdge.rightVertex.leftEdge=this._originalEdge),Object(s.l)(this._left)?this._component.updateVertexIndex(this._left.leftVertex,this._left.leftVertex.index):this._component.updateVertexIndex(this._addedVertex,0),this._editGeometry.notifyChanges({operation:"undo",removedVertices:[this._addedVertex]}))}accumulate(){return!1}}var a=i(1974)
class h{constructor(e,t,i=0){this._editGeometry=e,this._vertices=t,this._minNumberOfVertices=i,this.removedVertices=null}apply(){let e="redo"
if(null==this.removedVertices){const t=this.removedVertices=[]
this._vertices.forEach(e=>{const i=this._removeVertex(e)
Object(s.l)(i)&&t.push(i)}),e="apply"}else this.removedVertices.forEach(e=>{this._removeVertex(e.removedVertex)})
this._editGeometry.notifyChanges({operation:e,removedVertices:this._vertices})}undo(){var e
null!=(e=this.removedVertices)&&e.forEach(e=>{this._undoRemoveVertex(e)}),this._editGeometry.notifyChanges({operation:"undo",addedVertices:this._vertices})}accumulate(){return!1}_removeVertex(e){const t=e.component
if(t.vertices.length<=this._minNumberOfVertices)return null
const i={removedVertex:e,createdEdge:null},r=e.leftEdge,s=e.rightEdge
return t.vertices.splice(t.vertices.indexOf(e),1),r&&(t.edges.splice(t.edges.indexOf(r),1),r.leftVertex.rightEdge=null),s&&(t.edges.splice(t.edges.indexOf(s),1),s.rightVertex.leftEdge=null),0===e.index&&s&&this._vertices.length>0&&t.swapVertices(t.vertices.indexOf(s.rightVertex),0),r&&s&&(i.createdEdge=new n.b(t,r.leftVertex,s.rightVertex),t.edges.push(i.createdEdge)),s&&t.updateVertexIndex(s.rightVertex,s.rightVertex.index-1),i}_undoRemoveVertex(e){const t=e.removedVertex,i=e.removedVertex.component,r=t.leftEdge,s=t.rightEdge
e.createdEdge&&i.edges.splice(i.edges.indexOf(e.createdEdge),1),i.vertices.push(t),r&&(i.edges.push(r),r.leftVertex.rightEdge=r),s&&(i.edges.push(s),s.rightVertex.leftEdge=s),i.updateVertexIndex(t,t.index)}}class u{constructor(e,t,i){this._editGeometry=e,this._edge=t,this._t=i,this.createdVertex=null,this._left=null,this._right=null}apply(){let e="redo"
const t=this._edge,i=t.component,r=t.leftVertex,o=t.rightVertex
i.edges.splice(i.edges.indexOf(t),1),Object(s.k)(this.createdVertex)&&(e="apply",this.createdVertex=new n.d(t.component)),i.vertices.push(this.createdVertex),this.createdVertex.pos=this._editGeometry.coordinateHelper.lerp(t.leftVertex.pos,t.rightVertex.pos,this._t,this._editGeometry.coordinateHelper.createVector()),Object(s.k)(this._left)&&(this._left=new n.b(i,r,this.createdVertex)),this._left.leftVertex.leftEdge?i.edges.push(this._left):i.edges.unshift(this._left),r.rightEdge=this._left,Object(s.k)(this._right)&&(this._right=new n.b(i,this.createdVertex,o)),i.edges.push(this._right),o.leftEdge=this._right,i.updateVertexIndex(this.createdVertex,r.index+1),this._editGeometry.notifyChanges({operation:e,addedVertices:[this.createdVertex]})}undo(){if(Object(s.k)(this.createdVertex)||Object(s.k)(this._left)||Object(s.k)(this._right))return null
const e=this._edge,t=e.component,i=this.createdVertex.leftEdge,r=this.createdVertex.rightEdge,n=null==i?void 0:i.leftVertex,o=null==r?void 0:r.rightVertex
t.vertices.splice(t.vertices.indexOf(this.createdVertex),1),t.edges.splice(t.edges.indexOf(this._left),1),t.edges.splice(t.edges.indexOf(this._right),1),this._edge.leftVertex.leftEdge?t.edges.push(this._edge):t.edges.unshift(this._edge),n&&(n.rightEdge=e),o&&(o.leftEdge=e),n&&t.updateVertexIndex(n,n.index),this._editGeometry.notifyChanges({operation:"undo",removedVertices:[this.createdVertex]})}accumulate(){return!1}}class l{constructor(e,t,i){this._editGeometry=e,this._vertex=t,this._pos=i}apply(){const e=Object(s.k)(this._originalPosition)
e&&(this._originalPosition=this._vertex.pos),this._apply(e?"apply":"redo")}undo(){this._vertex.pos=Object(s.u)(this._originalPosition),this._editGeometry.notifyChanges({operation:"undo",updatedVertices:[this._vertex]})}accumulate(e){return e instanceof l&&e._vertex===this._vertex&&(this._pos=e._pos,this._apply("apply"),!0)}_apply(e){this._vertex.pos=this._pos,this._editGeometry.components.forEach(e=>e.unnormalizeVertexPositions()),this._editGeometry.notifyChanges({operation:e,updatedVertices:[this._vertex]})}}var d=i(445)
class p{constructor(e,t){this._editGeometry=e,this._component=t,this._createdEdge=null}apply(){let e="redo"
if(Object(s.k)(this._createdEdge)){e="apply"
const t=this._component.getFirstVertex(),i=this._component.getLastVertex()
if(this._component.isClosed()||this._component.vertices.length<3||Object(s.k)(t)||Object(s.k)(i))return
this._createdEdge=new n.b(this._component,i,t)}this._createdEdge.leftVertex.rightEdge=this._createdEdge,this._createdEdge.rightVertex.leftEdge=this._createdEdge,this._component.edges.push(this._createdEdge),this._editGeometry.notifyChanges({operation:e})}undo(){Object(s.k)(this._createdEdge)||(Object(d.l)(this._component.edges,this._createdEdge),this._createdEdge.leftVertex.rightEdge=null,this._createdEdge.rightVertex.leftEdge=null,this._editGeometry.notifyChanges({operation:"undo"}))}accumulate(){return!1}}var _=i(2664),g=i(2723),f=i(2665),b=i(2666)
class m{constructor(){this._operations=[],this._closed=!1}close(){this._closed=!0}apply(){for(const e of this._operations)e.apply()}undo(){for(let e=this._operations.length-1;e>=0;e--)this._operations[e].undo()}accumulate(e){if(this._closed)return!1
const t=this._operations.length?this._operations[this._operations.length-1]:null
return t&&t.accumulate(e)||(this._operations.push(e),e.apply()),!0}}class v extends r.a{constructor(e){super(),this.data=e,this._undoStack=[],this._redoStack=[],this._listener=this.data.on("change",e=>{e.addedVertices&&this.emit("vertex-add",{type:"vertex-add",vertices:e.addedVertices,operation:e.operation}),e.removedVertices&&this.emit("vertex-remove",{type:"vertex-remove",vertices:e.removedVertices,operation:e.operation}),e.updatedVertices&&this.emit("vertex-update",{type:"vertex-update",vertices:e.updatedVertices,operation:e.operation})})}destroy(){this._listener.remove()}splitEdge(e,t){return this._apply(new u(this.data,e,t))}updateVertices(e,t,i=o.a.ACCUMULATE_STEPS){return this._apply(new a.b(this.data,e,t),i)}moveVertices(e,t,i,r,s=o.a.ACCUMULATE_STEPS){return this.updateVertices(e,new _.a(this.data.coordinateHelper,t,i,r),s)}scaleVertices(e,t,i,r,s,n=o.a.ACCUMULATE_STEPS,c=a.a.CUMULATIVE){return this.updateVertices(e,new b.a(t,i,r,s,c),n)}rotateVertices(e,t,i,r=o.a.ACCUMULATE_STEPS,s=a.a.CUMULATIVE){return this.updateVertices(e,new f.a(t,i,s),r)}removeVertices(e){return this._apply(new h(this.data,e,this._minNumVerticesPerType))}appendVertex(e){return 0===this.data.components.length?null:this._apply(new c(this.data,this.data.components[0],e))}setVertexPosition(e,t){return this._apply(new l(this.data,e,t))}offsetEdge(e,t,i,r=o.a.ACCUMULATE_STEPS){return this.updateVertices([t.leftVertex,t.rightVertex],new g.a(this.data.coordinateHelper,e,t,i),r)}closeComponent(e){return this.data.components.includes(e)?this._apply(new p(this.data,e)):null}canRemoveVertex(){return this.data.components[0].vertices.length>this._minNumVerticesPerType}createUndoGroup(){const e=new m
return this._apply(e),{remove:()=>e.close()}}undo(){if(this._undoStack.length>0){const e=this._undoStack.pop()
return e.undo(),this._redoStack.push(e),e}return null}redo(){if(this._redoStack.length>0){const e=this._redoStack.pop()
return e.apply(),this._undoStack.push(e),e}return null}get canUndo(){return this._undoStack.length>0}get canRedo(){return this._redoStack.length>0}get lastOperation(){return this._undoStack.length>0?this._undoStack[this._undoStack.length-1]:null}get _minNumVerticesPerType(){switch(this.data.type){case"point":return 1
case"polyline":return 2
case"polygon":return 3
default:return 0}}_apply(e,t=o.a.ACCUMULATE_STEPS){return t!==o.a.NEW_STEP&&!Object(s.k)(this.lastOperation)&&this.lastOperation.accumulate(e)||(e.apply(),this._undoStack.push(e),this._redoStack=[]),e}static fromGeometry(e,t){return new v(n.c.fromGeometry(e,t))}}},2078:function(e,t,i){"use strict"
var r
i.d(t,"a",(function(){return r})),function(e){e[e.NEW_STEP=0]="NEW_STEP",e[e.ACCUMULATE_STEPS=1]="ACCUMULATE_STEPS"}(r||(r={}))},2138:function(e,t,i){"use strict"
i.d(t,"a",(function(){return n}))
var r=i(1015),s=i(1510)
function n(e){const t=Object(s.c)(e),i=t===s.a?s.b:t
return Object(r.b)(e,i)?i:e}},2195:function(e,t,i){"use strict"
i.d(t,"a",(function(){return o}))
var r=i(23),s=i(997),n=i(1028)
function o(e){var t,i,o,c
const a="metric"
if(Object(r.k)(e))return a
const h=e.map,u=null!=(t=h&&"portalItem"in h?null==(i=h.portalItem)?void 0:i.portal:null)?t:n.a.getDefault()
switch(null!=(o=null==(c=u.user)?void 0:c.units)?o:u.units){case a:return a
case"english":return"imperial"}return Object(r.v)(Object(s.f)(e.spatialReference),a)}},2309:function(e,t,i){"use strict"
i.d(t,"a",(function(){return g}))
var r,s,n=i(1013),o=i(1026),c=i(985),a=i(981),h=i(1012),u=i(1011),l=i(992);(s=r||(r={}))[s.Z=0]="Z",s[s.M=1]="M"
class d{constructor(e){this.spatialReference=e}createVector(){return this._tag(Object(o.d)())}pointToVector(e){return this._tag(Object(o.h)(e.x,e.y))}arrayToVector(e){return this._tag(Object(o.h)(e[0],e[1]))}vectorToArray(e){return[e[0],e[1]]}pointToArray(e){return[e.x,e.y]}vectorToPoint(e,t=new l.a){return t.x=e[0],t.y=e[1],t.z=void 0,t.m=void 0,t.spatialReference=this.spatialReference,t}arrayToPoint(e,t=new l.a){return t.x=e[0],t.y=e[1],t.z=void 0,t.m=void 0,t.spatialReference=this.spatialReference,t}vectorToDehydratedPoint(e,t={x:void 0,y:void 0,z:void 0,m:void 0,hasZ:void 0,hasM:void 0,spatialReference:void 0,type:"point"}){return t.x=e[0],t.y=e[1],t.z=void 0,t.m=void 0,t.hasZ=!1,t.hasM=!1,t.spatialReference=this.spatialReference,t}lerp(e,t,i,r){return Object(n.l)(r,e,t,i)}addDelta(e,t,i){e[0]+=t,e[1]+=i}distance(e,t){return Object(n.d)(e,t)}getZ(e,t){return t}hasZ(){return!1}getM(e,t){return t}hasM(){return!1}clone(e){return this._tag(Object(o.e)(e))}copy(e,t){return Object(n.c)(t,e)}fromXYZ(e){return this._tag(Object(o.h)(e[0],e[1]))}toXYZ(e,t=Object(a.f)()){return Object(c.B)(t,e[0],e[1],0)}pointToXYZ(e,t=Object(a.f)()){return Object(c.B)(t,e.x,e.y,0)}equals(e,t){return Object(n.o)(e,t)}_tag(e){return e}}class p{constructor(e,t){this._valueType=e,this.spatialReference=t}createVector(){return this._tag(Object(a.f)())}pointToVector(e){return this._tag(Object(a.h)(e.x,e.y,this._valueType===r.Z?e.z:e.m))}arrayToVector(e){return this._tag(Object(a.h)(e[0],e[1],e[2]||0))}vectorToArray(e){return[e[0],e[1],e[2]]}pointToArray(e){return this._valueType===r.Z?[e.x,e.y,e.z]:[e.x,e.y,e.m]}vectorToPoint(e,t=new l.a){return t.x=e[0],t.y=e[1],t.z=this._valueType===r.Z?e[2]:void 0,t.m=this._valueType===r.M?e[2]:void 0,t.spatialReference=this.spatialReference,t}arrayToPoint(e,t=new l.a){return t.x=e[0],t.y=e[1],t.z=this._valueType===r.Z?e[2]:void 0,t.m=this._valueType===r.M?e[2]:void 0,t.spatialReference=this.spatialReference,t}vectorToDehydratedPoint(e,t={x:void 0,y:void 0,z:void 0,m:void 0,hasZ:void 0,hasM:void 0,spatialReference:void 0,type:"point"}){const i=this._valueType===r.Z,s=this._valueType===r.M
return t.x=e[0],t.y=e[1],t.z=i?e[2]:void 0,t.m=s?e[2]:void 0,t.hasZ=i,t.hasM=s,t.spatialReference=this.spatialReference,t}lerp(e,t,i,r){return Object(c.q)(r,e,t,i)}addDelta(e,t,i,s){e[0]+=t,e[1]+=i,this._valueType===r.Z&&(e[2]+=s)}distance(e,t){return this._valueType===r.Z?Object(c.r)(e,t):Object(n.d)(e,t)}getZ(e,t){return this._valueType===r.Z?e[2]:t}hasZ(){return this._valueType===r.Z}getM(e,t){return this._valueType===r.M?e[2]:t}hasM(){return this._valueType===r.M}clone(e){return this._tag(Object(a.g)(e))}copy(e,t){return Object(c.l)(t,e)}fromXYZ(e,t=0,i=0){return this._tag(Object(a.h)(e[0],e[1],this._valueType===r.Z?e.length>2?e[2]:t:i))}toXYZ(e,t=Object(a.f)()){return Object(c.B)(t,e[0],e[1],this._valueType===r.Z?e[2]:0)}pointToXYZ(e,t=Object(a.f)()){var i
return Object(c.B)(t,e.x,e.y,this._valueType===r.Z&&null!=(i=e.z)?i:0)}equals(e,t){return Object(c.f)(e,t)}_tag(e){return e}}class _{constructor(e){this.spatialReference=e}createVector(){return this._tag(Object(u.e)())}pointToVector(e){return this._tag(Object(u.g)(e.x,e.y,e.z,e.m))}arrayToVector(e){return this._tag(Object(u.g)(e[0],e[1],e[2]||0,e[3]||0))}vectorToArray(e){return[e[0],e[1],e[2],e[3]]}pointToArray(e){return[e.x,e.y,e.z,e.m]}vectorToPoint(e,t=new l.a){return t.x=e[0],t.y=e[1],t.z=e[2],t.m=e[3],t.spatialReference=this.spatialReference,t}arrayToPoint(e,t=new l.a){return t.x=e[0],t.y=e[1],t.z=e[2],t.m=e[3],t.spatialReference=this.spatialReference,t}vectorToDehydratedPoint(e,t={x:void 0,y:void 0,z:void 0,m:void 0,hasZ:void 0,hasM:void 0,spatialReference:void 0,type:"point"}){return t.x=e[0],t.y=e[1],t.z=e[2],t.m=e[3],t.hasZ=!0,t.hasM=!0,t.spatialReference=this.spatialReference,t}lerp(e,t,i,r){return Object(h.j)(r,e,t,i)}addDelta(e,t,i,r){e[0]+=t,e[1]+=i,e[2]+=r}distance(e,t){return Object(c.r)(e,t)}getZ(e){return e[2]}hasZ(){return!0}getM(e){return e[3]}hasM(){return!0}clone(e){return this._tag(Object(u.d)(e))}copy(e,t){return Object(h.c)(t,e)}fromXYZ(e,t=0,i=0){return this._tag(Object(u.g)(e[0],e[1],e.length>2?e[2]:t,i))}toXYZ(e,t=Object(a.f)()){return Object(c.B)(t,e[0],e[1],e[2])}pointToXYZ(e,t=Object(a.f)()){var i
return Object(c.B)(t,e.x,e.y,null!=(i=e.z)?i:0)}equals(e,t){return Object(h.h)(e,t)}_tag(e){return e}}function g(e,t,i){return e&&t?new _(i):t?new p(r.M,i):e?new p(r.Z,i):new d(i)}},2664:function(e,t,i){"use strict"
i.d(t,"a",(function(){return r}))
class r{constructor(e,t,i,r){this._helper=e,this.dx=t,this.dy=i,this.dz=r}_move(e,t,i,r){this._helper.addDelta(e.pos,t,i,r)}apply(e){this._move(e,this.dx,this.dy,this.dz)}undo(e){this._move(e,-this.dx,-this.dy,-this.dz)}canAccumulate(e){return e instanceof r}accumulate(e,t){this._move(e,t.dx,t.dy,t.dz)}accumulateParams(e){this.dx+=e.dx,this.dy+=e.dy,this.dz+=e.dz}}},2665:function(e,t,i){"use strict"
i.d(t,"a",(function(){return o}))
var r=i(445),s=i(1013),n=i(1974)
class o{constructor(e,t,i=n.a.CUMULATIVE){this.origin=e,this.angle=t,this._accumulationType=i}_rotate(e,t){Object(s.r)(e.pos,e.pos,this.origin,t)}apply(e){this._rotate(e,this.angle)}undo(e){this._rotate(e,-this.angle)}canAccumulate(e){return e instanceof o&&Object(r.e)(this.origin,e.origin)}accumulate(e,t){const i=t._accumulationType===n.a.REPLACE
this._rotate(e,i?t.angle-this.angle:t.angle)}accumulateParams(e){const t=e._accumulationType===n.a.REPLACE
this.angle=t?e.angle:this.angle+e.angle}}},2666:function(e,t,i){"use strict"
i.d(t,"a",(function(){return c}))
var r=i(445),s=i(1026),n=i(1013),o=i(1974)
class c{constructor(e,t,i,r,n=o.a.CUMULATIVE){this.origin=e,this.axis1=t,this.factor1=i,this.factor2=r,this._accumulationType=n,this.axis2=Object(s.h)(t[1],-t[0])}_scale(e,t,i){Object(n.u)(e.pos,e.pos,this.origin,this.axis1,t),Object(n.u)(e.pos,e.pos,this.origin,this.axis2,i)}apply(e){this._scale(e,this.factor1,this.factor2)}undo(e){this._scale(e,1/this.factor1,1/this.factor2)}canAccumulate(e){return e instanceof c&&Object(r.e)(this.origin,e.origin)&&Object(r.e)(this.axis1,e.axis1)}accumulate(e,t){t._accumulationType===o.a.REPLACE?this._scale(e,t.factor1/this.factor1,t.factor2/this.factor2):this._scale(e,t.factor1,t.factor2)}accumulateParams(e){const t=e._accumulationType===o.a.REPLACE
this.factor1=t?e.factor1:this.factor1*e.factor1,this.factor2=t?e.factor2:this.factor2*e.factor2}}},2723:function(e,t,i){"use strict"
i.d(t,"a",(function(){return d})),i.d(t,"b",(function(){return g}))
var r=i(991),s=i(23),n=i(1013),o=i(1026),c=i(985),a=i(981),h=i(1251),u=i(1355),l=i(1743)
class d{get plane(){return this._plane}get requiresSplitEdgeLeft(){return!this._left.isOriginalDirection}get requiresSplitEdgeRight(){return!this._right.isOriginalDirection}get edgeDirection(){return this._edgeDirection}constructor(e,t,i,r=0,s=f.IMMEDIATE){this._helper=e,this._planeType=t,this._edge=i,this.distance=r,this._plane=Object(h.d)(),this._offsetPlane=Object(h.d)(),this._minDistance=-1/0,this._maxDistance=1/0,this._selectedArrow=1,s===f.IMMEDIATE&&this._initialize()}_initialize(){this._initializeNeighbors(),this._initializePlane(),this._initializeDistanceConstraints()}_initializeNeighbors(){var e,t,i,r
const s=this._toXYZ(this._edge.leftVertex.pos),n=this._toXYZ(null==(e=this._edge.leftVertex.leftEdge)||null==(t=e.leftVertex)?void 0:t.pos),o=this._toXYZ(this._edge.rightVertex.pos),h=this._toXYZ(null==(i=this._edge.rightVertex.rightEdge)||null==(r=i.rightVertex)?void 0:r.pos)
this._edgeDirection=Object(c.A)(Object(a.f)(),s,o),this._left=this._computeNeighbor(s,n,this._edgeDirection),this._right=this._computeNeighbor(o,h,this._edgeDirection)}_toXYZ(e){return Object(s.l)(e)?this._helper.toXYZ(e):null}_pointToXYZ(e){return this._toXYZ(this._helper.pointToVector(e))}_computeNeighbor(e,t,i){if(Object(s.k)(t))return{start:e,end:t,direction:Object(a.h)(-i[1],i[0],0),isOriginalDirection:!0}
const r=Object(c.A)(Object(a.f)(),e,t),n=!this._passesBisectingAngleThreshold(r,i)
return{start:e,end:t,direction:n?this._bisectVectorsPerpendicular(i,r):r,isOriginalDirection:!n}}_passesBisectingAngleThreshold(e,t){const i=Math.abs(Object(u.a)(t,e))
return i>=p&&i<=Math.PI-p}_bisectVectorsPerpendicular(e,t){const i=Object(c.n)(e,t)<0?e:Object(c.x)(Object(a.f)(),e),r=Math.abs(Object(c.n)(i,t))
if(!(r<_||r>1-_))return this._bisectDirection(i,t)
const s=Object(c.o)(Object(a.f)(),i,[0,0,1])
return Object(c.w)(s,s)}_bisectDirection(e,t){const i=Object(c.j)(Object(a.f)(),e,t)
return Object(c.w)(i,i)}_initializePlane(){const e=this._computeNormalDirection(this._left),t=this._computeNormalDirection(this._right)
Object(c.n)(e,t)<0&&Object(c.x)(t,t),Object(h.h)(this._left.start,this._bisectDirection(e,t),this._plane)}_computeNormalDirection(e){const t=Object(c.o)(Object(a.f)(),e.direction,this._edgeDirection)
Object(c.w)(t,t)
const i=Object(c.o)(Object(a.f)(),this._edgeDirection,t)
return this._planeType===g.XY&&(i[2]=0),Object(c.w)(i,i)}_initializeDistanceConstraints(){Object(s.l)(this._left.end)&&!this.requiresSplitEdgeLeft&&this._updateDistanceConstraint(Object(h.v)(this._plane,this._left.end)),Object(s.l)(this._right.end)&&!this.requiresSplitEdgeRight&&this._updateDistanceConstraint(Object(h.v)(this._plane,this._right.end)),this._updateIntersectDistanceConstraint(this._plane)}_updateDistanceConstraint(e){e<=0&&(this._minDistance=Math.max(this._minDistance,e)),e>=0&&(this._maxDistance=Math.min(this._maxDistance,e))}_updateIntersectDistanceConstraint(e){const t=Object(h.q)(e),i=this._edgeDirection,r=Object(c.j)(Object(a.f)(),this._left.start,this._left.direction),s=Object(c.j)(Object(a.f)(),this._right.start,this._right.direction),u=this._pointInBasis2D(Object(o.d)(),t,i,this._left.start),d=this._pointInBasis2D(Object(o.d)(),t,i,r),p=this._pointInBasis2D(Object(o.d)(),t,i,this._right.start),_=this._pointInBasis2D(Object(o.d)(),t,i,s),[g]=Object(l.b)({start:d,end:u,type:l.a.LINE},{start:_,end:p,type:l.a.LINE})
if(!g)return
const f=Object(n.a)(Object(o.d)(),u,d)
Object(n.f)(f,f)
const b=Object(n.a)(Object(o.d)(),g,d),m=Object(n.h)(f,b),v=Object(c.j)(Object(a.f)(),r,Object(c.p)(Object(a.f)(),this._left.direction,-m)),O=Object(h.v)(e,v)
this._updateDistanceConstraint(O)}_pointInBasis2D(e,t,i,r){return e[0]=Object(u.d)(t,r),e[1]=Object(u.d)(i,r),e}_offset(e,t){Number.isFinite(this._minDistance)&&(t=Math.max(this._minDistance,t)),Number.isFinite(this._maxDistance)&&(t=Math.min(this._maxDistance,t)),Object(h.c)(this._offsetPlane,this._plane),this._offsetPlane[3]-=t
const i=(e,t,i)=>Object(s.l)(t)&&Object(h.k)(this._offsetPlane,e,Object(c.j)(Object(a.f)(),e,t),i),r=Object(a.f)();(e===this._edge.leftVertex?i(this._left.start,this._left.direction,r):i(this._right.start,this._right.direction,r))&&this._helper.copy(this._helper.fromXYZ(r,void 0,this._helper.getM(e.pos)),e.pos)}selectArrowFromStartPoint(e){this._selectedArrow=Object(h.o)(this.plane,this._pointToXYZ(e))?1:-1}get selectedArrow(){return this._selectedArrow}signedDistanceToPoint(e){return Object(h.v)(this.plane,this._pointToXYZ(e))}apply(e){this._offset(e,this.distance)}undo(e){this._offset(e,0)}canAccumulate(e){return e instanceof d&&this._edge.leftVertex.index===e._edge.leftVertex.index&&this._edge.rightVertex.index===e._edge.rightVertex.index&&this._edge.component===e._edge.component&&this._maybeEqualsVec3(this._left.direction,e._left.direction)&&this._maybeEqualsVec3(this._right.direction,e._right.direction)&&Object(c.f)(Object(h.q)(this._plane),Object(h.q)(e._plane))}accumulate(e,t){const i=this._plane[3]-t._plane[3]+t.distance
this._offset(e,i)}accumulateParams(e){const t=e.distance-e._plane[3]
this.distance=t+this._plane[3]}clone(){const e=new d(this._helper,this._planeType,this._edge,this.distance,f.DEFERRED)
return Object(h.c)(e._plane,this._plane),Object(h.c)(e._offsetPlane,this._offsetPlane),e._maxDistance=this._maxDistance,e._minDistance=this._minDistance,e._left=this._cloneNeighbor(this._left),e._right=this._cloneNeighbor(this._right),e._edgeDirection=Object(c.l)(Object(a.f)(),this._edgeDirection),e}_maybeEqualsVec3(e,t){return Object(s.k)(e)&&Object(s.k)(t)||Object(s.l)(e)&&Object(s.l)(t)&&Object(c.f)(e,t)}_cloneNeighbor({start:e,end:t,direction:i,isOriginalDirection:r}){return{start:Object(c.l)(Object(a.f)(),e),end:Object(s.l)(t)?Object(c.l)(Object(a.f)(),t):null,direction:Object(c.l)(Object(a.f)(),i),isOriginalDirection:r}}}const p=Object(r.h)(15),_=.001
var g,f,b;(b=g||(g={}))[b.XYZ=0]="XYZ",b[b.XY=1]="XY",function(e){e[e.IMMEDIATE=0]="IMMEDIATE",e[e.DEFERRED=1]="DEFERRED"}(f||(f={}))}}])
