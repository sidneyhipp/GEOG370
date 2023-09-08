(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[62],{1057:function(e,t,r){"use strict"
r.d(t,"a",(function(){return B})),r.d(t,"b",(function(){return te})),r.d(t,"c",(function(){return $})),r.d(t,"d",(function(){return H})),r.d(t,"e",(function(){return Y})),r.d(t,"f",(function(){return z})),r.d(t,"g",(function(){return G})),r.d(t,"h",(function(){return U})),r.d(t,"i",(function(){return Q})),r.d(t,"j",(function(){return X})),r.d(t,"k",(function(){return ee})),r.d(t,"l",(function(){return W})),r.d(t,"m",(function(){return C})),r.d(t,"n",(function(){return R})),r.d(t,"o",(function(){return Z})),r.d(t,"p",(function(){return N})),r.d(t,"q",(function(){return pe})),r.d(t,"r",(function(){return oe})),r.d(t,"s",(function(){return ue})),r.d(t,"t",(function(){return he})),r.d(t,"u",(function(){return se})),r.d(t,"v",(function(){return ne})),r.d(t,"w",(function(){return j})),r.d(t,"x",(function(){return F})),r.d(t,"y",(function(){return ce})),r.d(t,"z",(function(){return re})),r.d(t,"A",(function(){return le}))
var s=r(446),n=r(233),o=r(23),a=r(1041),i=r(996),u=r(983),l=r(1153),c=r(1237),d=r(1062)
function h(e,t){return e?t?4:3:t?3:2}const p=n.a.getLogger("esri.layers.graphics.featureConversionUtils"),f={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0},y=(e,t,r,s,n,o)=>{e[r]=n,e[r+1]=o},m=(e,t,r,s,n,o)=>{e[r]=n,e[r+1]=o,e[r+2]=t[s+2]},b=(e,t,r,s,n,o)=>{e[r]=n,e[r+1]=o,e[r+2]=t[s+3]},g=(e,t,r,s,n,o)=>{e[r]=n,e[r+1]=o,e[r+2]=t[s+2],e[r+3]=t[s+3]}
function O(e,t,r,s){if(e){if(r)return t&&s?g:m
if(t&&s)return b}else if(t&&s)return m
return y}function j({scale:e,translate:t},r){return Math.round((r-t[0])/e[0])}function F({scale:e,translate:t},r){return Math.round((t[1]-r)/e[1])}function _({scale:e,translate:t},r,s){return r*e[s]+t[s]}function R(e,t,r){return e?t?r?x(e):v(e):r?T(e):w(e):null}function w(e){const t=e.coords
return{x:t[0],y:t[1]}}function I(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e}function v(e){const t=e.coords
return{x:t[0],y:t[1],z:t[2]}}function S(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.z,e}function T(e){const t=e.coords
return{x:t[0],y:t[1],m:t[2]}}function q(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.m,e}function x(e){const t=e.coords
return{x:t[0],y:t[1],z:t[2],m:t[3]}}function P(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.z,e.coords[3]=t.m,e}function E(e,t){return e&&t?P:e?S:t?q:I}function A(e,t,r,s,n){const a=E(r,s)
for(const{geometry:r,attributes:s}of t){const t=Object(o.l)(r)?a(new d.a,r):null
e.push(new l.a(t,s,null,n?s[n]:void 0))}return e}function G(e,t,r=E(null!=t.z,null!=t.m)){return r(e,t)}function C(e,t,r){if(Object(o.k)(e))return null
const s=h(t,r),n=[]
for(let t=0;t<e.coords.length;t+=s){const r=[]
for(let n=0;n<s;n++)r.push(e.coords[t+n])
n.push(r)}return t?r?{points:n,hasZ:t,hasM:r}:{points:n,hasZ:t}:r?{points:n,hasM:r}:{points:n}}function M(e,t,r,s,n){const a=h(r,s)
for(const{geometry:r,attributes:s}of t){const t=Object(o.l)(r)?D(new d.a,r,a):null
e.push(new l.a(t,s,null,n?s[n]:void 0))}return e}function D(e,t,r=h(t.hasZ,t.hasM)){e.lengths[0]=t.points.length
const s=e.coords
let n=0
for(const e of t.points)for(let t=0;t<r;t++)s[n++]=e[t]
return e}function N(e,t,r){if(!e)return null
const s=h(t,r),{coords:n,lengths:o}=e,a=[]
let i=0
for(const e of o){const t=[]
for(let r=0;r<e;r++){const e=[]
for(let t=0;t<s;t++)e.push(n[i++])
t.push(e)}a.push(t)}return t?r?{paths:a,hasZ:t,hasM:r}:{paths:a,hasZ:t}:r?{paths:a,hasM:r}:{paths:a}}function k(e,t,r,s,n){const a=h(r,s)
for(const{geometry:r,attributes:s}of t){const t=Object(o.l)(r)?Q(new d.a,r,a):null
e.push(new l.a(t,s,null,n?s[n]:void 0))}return e}function Q(e,t,r=h(t.hasZ,t.hasM)){const{lengths:s,coords:n}=e
let o=0
for(const e of t.paths){for(const t of e)for(let e=0;e<r;e++)n[o++]=t[e]
s.push(e.length)}return e}function Z(e,t,r){if(!e)return null
const s=h(t,r),{coords:n,lengths:o}=e,a=[]
let i=0
for(const e of o){const t=[]
for(let r=0;r<e;r++){const e=[]
for(let t=0;t<s;t++)e.push(n[i++])
t.push(e)}a.push(t)}return t?r?{rings:a,hasZ:t,hasM:r}:{rings:a,hasZ:t}:r?{rings:a,hasM:r}:{rings:a}}function J(e,t,r,s,n){for(const{geometry:a,centroid:i,attributes:u}of t){const t=Object(o.l)(a)?U(new d.a,a,r,s):null,c=n?u[n]:void 0
Object(o.l)(i)?e.push(new l.a(t,u,I(new d.a,i),c)):e.push(new l.a(t,u,null,c))}return e}function U(e,t,r=t.hasZ,s=t.hasM){return z(e,t.rings,r,s),e}function z(e,t,r,s){const n=h(r,s),{lengths:o,coords:a}=e
let i=0
fe(e)
for(const e of t){for(const t of e)for(let e=0;e<n;e++)a[i++]=t[e]
o.push(e.length)}return e}const V=[],L=[]
function B(e,t,r,s,n){V[0]=e
const[o]=$(L,V,t,r,s,n)
return ye(V),ye(L),o}function $(e,t,r,n,o,a){if(ye(e),!r){for(const r of t){const t=a?r.attributes[a]:void 0
e.push(new l.a(null,r.attributes,null,t))}return e}switch(r){case"esriGeometryPoint":return A(e,t,n,o,a)
case"esriGeometryMultipoint":return M(e,t,n,o,a)
case"esriGeometryPolyline":return k(e,t,n,o,a)
case"esriGeometryPolygon":return J(e,t,n,o,a)
default:p.error("convertToFeatureSet:unknown-geometry",new s.a(`Unable to parse unknown geometry type '${r}'`)),ye(e)}return e}function Y(e,t,r,n,o,a){const i=e.length
switch(r){case"esriGeometryPoint":A(e,t,n,o,a)
break
case"esriGeometryMultipoint":M(e,t,n,o,a)
break
case"esriGeometryPolyline":k(e,t,n,o,a)
break
case"esriGeometryPolygon":J(e,t,n,o,a)
break
default:p.error("convertToFeatureSet:unknown-geometry",new s.a(`Unable to parse unknown geometry type '${r}'`))}for(let s=0;s<t.length;s++)e[s+i].geometryType=r,e[s+i].insertAfter=t[s].insertAfter,e[s+i].groupId=t[s].groupId
return e}function X(e,t,r,s){L[0]=e,K(V,L,t,r,s)
const n=V[0]
return ye(V),ye(L),n}function H(e,t,r){if(Object(o.k)(e))return null
const n=new d.a
return"hasZ"in e&&null==t&&(t=e.hasZ),"hasM"in e&&null==r&&(r=e.hasM),Object(u.f)(e)?E(null!=t?t:null!=e.z,null!=r?r:null!=e.m)(n,e):Object(u.g)(e)?U(n,e,t,r):Object(u.h)(e)?Q(n,e,h(t,r)):Object(u.e)(e)?D(n,e,h(t,r)):void p.error("convertFromGeometry:unknown-geometry",new s.a(`Unable to parse unknown geometry type '${e}'`))}function W(e,t,r,n){const a=e&&("coords"in e?e:e.geometry)
if(Object(o.k)(a))return null
switch(t){case"esriGeometryPoint":{let e=w
return r&&n?e=x:r?e=v:n&&(e=T),e(a)}case"esriGeometryMultipoint":return C(a,r,n)
case"esriGeometryPolyline":return N(a,r,n)
case"esriGeometryPolygon":return Z(a,r,n)
default:return p.error("convertToGeometry:unknown-geometry",new s.a(`Unable to parse unknown geometry type '${t}'`)),null}}function K(e,t,r,n,a){if(ye(e),Object(o.k)(r))return function(e,t){for(const r of t)e.push({attributes:r.attributes})
return e}(e,t)
switch(r){case"esriGeometryPoint":return function(e,t,r,s){let n=w
r&&s?n=x:r?n=v:s&&(n=T)
for(const r of t){const{geometry:t,attributes:s}=r,a=Object(o.l)(t)?n(t):null
e.push({attributes:s,geometry:a})}return e}(e,t,n,a)
case"esriGeometryMultipoint":return function(e,t,r,s){for(const{geometry:n,attributes:a}of t)e.push({attributes:a,geometry:Object(o.l)(n)?C(n,r,s):null})
return e}(e,t,n,a)
case"esriGeometryPolyline":return function(e,t,r,s){for(const{geometry:n,attributes:a}of t)e.push({attributes:a,geometry:Object(o.l)(n)?N(n,r,s):null})
return e}(e,t,n,a)
case"esriGeometryPolygon":return function(e,t,r,s){for(const{geometry:n,attributes:a,centroid:i}of t){const t=Object(o.l)(n)?Z(n,r,s):null
if(Object(o.l)(i)){const r=w(i)
e.push({attributes:a,centroid:r,geometry:t})}else e.push({attributes:a,geometry:t})}return e}(e,t,n,a)
default:p.error("convertToFeatureSet:unknown-geometry",new s.a(`Unable to parse unknown geometry type '${r}'`))}return e}function ee(e){const{objectIdFieldName:t,spatialReference:r,transform:s,fields:n,hasM:o,hasZ:a,features:i,geometryType:u,exceededTransferLimit:l,uniqueIdField:c,queryGeometry:d,queryGeometryType:h}=e,p={features:K([],i,u,a,o),fields:n,geometryType:u,objectIdFieldName:t,spatialReference:r,uniqueIdField:c,queryGeometry:W(d,h,!1,!1)}
return s&&(p.transform=s),l&&(p.exceededTransferLimit=l),o&&(p.hasM=o),a&&(p.hasZ=a),p}function te(e,t){var r
const n=new c.a,{hasM:o,hasZ:a,features:i,objectIdFieldName:u,spatialReference:l,geometryType:d,exceededTransferLimit:h,transform:f,fields:y}=e
return y&&(n.fields=y),n.geometryType=null!=d?d:null,n.objectIdFieldName=null!=(r=null!=u?u:t)?r:null,n.spatialReference=null!=l?l:null,n.objectIdFieldName?(i&&$(n.features,i,d,a,o,n.objectIdFieldName),h&&(n.exceededTransferLimit=h),o&&(n.hasM=o),a&&(n.hasZ=a),f&&(n.transform=f),n):(p.error(new s.a("optimized-features:invalid-objectIdFieldName","objectIdFieldName is missing")),n)}function re(e){const{transform:t,features:r,hasM:s,hasZ:n}=e
if(!t)return e
for(const e of r)Object(o.l)(e.geometry)&&le(e.geometry,e.geometry,s,n,t),Object(o.l)(e.centroid)&&le(e.centroid,e.centroid,s,n,t)
return e.transform=null,e}function se(e,t){const{geometryType:r,features:s,hasM:n,hasZ:o}=t
if(!e)return t
for(let t=0;t<s.length;t++){const a=s[t],i=a.weakClone()
i.geometry=new d.a,ne(i.geometry,a.geometry,n,o,r,e),a.centroid&&(i.centroid=new d.a,ne(i.centroid,a.centroid,n,o,"esriGeometryPoint",e)),s[t]=i}return t.transform=e,t}function ne(e,t,r,s,n,a,i=r,u=s){if(fe(e),Object(o.k)(t)||!t.coords.length)return null
const l=f[n],{coords:c,lengths:d}=t,p=h(r,s),y=h(r&&i,s&&u),m=O(r,s,i,u)
if(!d.length)return m(e.coords,c,0,0,j(a,c[0]),F(a,c[1])),fe(e,p,0),e
let b,g,_,R,w=0,I=0,v=I
for(const t of d){if(t<l)continue
let r=0
I=v,_=b=j(a,c[w]),R=g=F(a,c[w+1]),m(e.coords,c,I,w,_,R),r++,w+=p,I+=y
for(let s=1;s<t;s++,w+=p)_=j(a,c[w]),R=F(a,c[w+1]),_===b&&R===g||(m(e.coords,c,I,w,_-b,R-g),I+=y,r++,b=_,g=R)
r>=l&&(e.lengths.push(r),v=I)}return ye(e.coords,v),e.coords.length?e:null}function oe(e,t,r,s,n,o,a=r,i=s){if(fe(e),!t||!t.coords.length)return null
const u=f[n],{coords:l,lengths:c}=t,d=h(r,s),p=h(r&&a,s&&i),y=O(r,s,a,i)
if(!c.length)return y(e.coords,l,0,0,l[0],l[1]),fe(e,d,0),e
let m=0
const b=o*o
for(const t of c){if(t<u){m+=t*d
continue}const r=e.coords.length/p,s=m,n=m+(t-1)*d
y(e.coords,l,e.coords.length,s,l[s],l[s+1]),ie(e.coords,l,d,b,y,s,n),y(e.coords,l,e.coords.length,n,l[n],l[n+1])
const o=e.coords.length/p-r
o>=u?e.lengths.push(o):ye(e.coords,r*p),m+=t*d}return e.coords.length?e:null}function ae(e,t,r,s){const n=e[t],o=e[t+1],a=e[r],i=e[r+1],u=e[s],l=e[s+1]
let c=a,d=i,h=u-c,p=l-d
if(0!==h||0!==p){const e=((n-c)*h+(o-d)*p)/(h*h+p*p)
e>1?(c=u,d=l):e>0&&(c+=h*e,d+=p*e)}return h=n-c,p=o-d,h*h+p*p}function ie(e,t,r,s,n,o,a){let i,u=s,l=0
for(let e=o+r;e<a;e+=r)i=ae(t,e,o,a),i>u&&(l=e,u=i)
u>s&&(l-o>r&&ie(e,t,r,s,n,o,l),n(e,t,e.length,l,t[l],t[l+1]),a-l>r&&ie(e,t,r,s,n,l,a))}function ue(e,t,r,s){if(Object(o.k)(t)||!t.coords||!t.coords.length)return null
const n=h(r,s)
let u=Number.POSITIVE_INFINITY,l=Number.POSITIVE_INFINITY,c=Number.NEGATIVE_INFINITY,d=Number.NEGATIVE_INFINITY
if(t&&t.coords){const e=t.coords
for(let t=0;t<e.length;t+=n){const r=e[t],s=e[t+1]
u=Math.min(u,r),c=Math.max(c,r),l=Math.min(l,s),d=Math.max(d,s)}}return Object(a.y)(e)?Object(a.s)(e,u,l,c,d):Object(i.u)(u,l,c,d,e),e}function le(e,t,r,s,n){var a,i,u,l,c,d,p,f
const{coords:y,lengths:m}=t,b=h(r,s)
if(!y.length)return e!==t&&fe(e),e
Object(o.c)(n)
const{originPosition:g,scale:O,translate:j}=n,F=me
F.originPosition=g
const R=F.scale
R[0]=null!=(a=O[0])?a:1,R[1]=-(null!=(i=O[1])?i:1),R[2]=null!=(u=O[2])?u:1,R[3]=null!=(l=O[3])?l:1
const w=F.translate
if(w[0]=null!=(c=j[0])?c:0,w[1]=null!=(d=j[1])?d:0,w[2]=null!=(p=j[2])?p:0,w[3]=null!=(f=j[3])?f:0,!m.length){for(let t=0;t<b;++t)e.coords[t]=_(F,y[t],t)
return e!==t&&fe(e,b,0),e}let I=0
for(let t=0;t<m.length;t++){const r=m[t]
e.lengths[t]=r
for(let t=0;t<b;++t)e.coords[I+t]=_(F,y[I+t],t)
let s=e.coords[I],n=e.coords[I+1]
I+=b
for(let t=1;t<r;t++,I+=b){s+=y[I]*R[0],n+=y[I+1]*R[1],e.coords[I]=s,e.coords[I+1]=n
for(let t=2;t<b;++t)e.coords[I+t]=_(F,y[I+t],t)}}return e!==t&&fe(e,y.length,m.length),e}function ce(e,t,r,s,n,o){if(fe(e),e.lengths.push(...t.lengths),r===n&&s===o)for(let r=0;r<t.coords.length;r++)e.coords.push(t.coords[r])
else{const a=h(r,s),i=O(r,s,n,o),u=t.coords
for(let t=0;t<u.length;t+=a)i(e.coords,u,e.coords.length,t,u[t],u[t+1])}return e}function de(e,t,r,s){let n=0,o=e[s*t],a=e[s*(t+1)]
for(let i=1;i<r;i++){const r=o+e[s*(t+i)],u=a+e[s*(t+i)+1],l=(r-o)*(u+a)
o=r,a=u,n+=l}return.5*n}function he(e,t){const{coords:r,lengths:s}=e
let n=0,o=0
for(let e=0;e<s.length;e++){const a=s[e]
o+=de(r,n,a,t),n+=a}return Math.abs(o)}function pe(e,t){if(Object(o.k)(e))return null
const r=e.clone(),s=e.coords,n=e.lengths
let a=0
for(let e=0;e<n.length;e++){const o=n[e]
let i=s[t*a],u=s[t*a+1]
for(let e=1;e<o;e++){const n=i+s[t*(a+e)],o=u+s[t*(a+e)+1]
r.coords[t*(a+e)]=n,r.coords[t*(a+e)+1]=o,i=n,u=o}a+=o}return r}function fe(e,t=0,r=0){ye(e.lengths,r),ye(e.coords,t)}function ye(e,t=0){e.length!==t&&(e.length=t)}const me={originPosition:"lowerLeft",scale:[1,1,1,1],translate:[0,0,0,0]}},1062:function(e,t,r){"use strict"
r.d(t,"a",(function(){return s}))
class s{constructor(e=[],t=[],r=!1){this.lengths=null!=e?e:[],this.coords=null!=t?t:[],this.hasIndeterminateRingOrder=r}static fromRect(e){const[t,r,n,o]=e,a=n-t,i=o-r
return new s([5],[t,r,a,0,0,i,-a,0,0,-i])}get isPoint(){return 0===this.lengths.length}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce((e,t)=>e+t)}forEachVertex(e){let t=0
this.lengths.length||e(this.coords[0],this.coords[1])
for(let r=0;r<this.lengths.length;r++){const s=this.lengths[r]
for(let r=0;r<s;r++)e(this.coords[2*(r+t)],this.coords[2*(r+t)+1])
t+=s}}clone(e){return e?(e.set(this.coords),new s(this.lengths.slice(),e,this.hasIndeterminateRingOrder)):new s(this.lengths.slice(),this.coords.slice(),this.hasIndeterminateRingOrder)}}},1153:function(e,t,r){"use strict"
r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return o}))
var s=r(23)
class n{constructor(e=null,t={},r,s){this.geometry=e,this.attributes=t,this.centroid=r,this.objectId=s,this.displayId=0,this.geohashX=0,this.geohashY=0}weakClone(){const e=new n(this.geometry,this.attributes,this.centroid,this.objectId)
return e.displayId=this.displayId,e.geohashX=this.geohashX,e.geohashY=this.geohashY,e}}function o(e){return!(Object(s.k)(e.geometry)||!e.geometry.coords||!e.geometry.coords.length)}class a extends n{}},1237:function(e,t,r){"use strict"
r.d(t,"a",(function(){return s}))
class s{constructor(){this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1,this.uniqueIdField=null,this.queryGeometryType=null,this.queryGeometry=null}weakClone(){const e=new s
return e.objectIdFieldName=this.objectIdFieldName,e.globalIdFieldName=this.globalIdFieldName,e.geohashFieldName=this.geohashFieldName,e.geometryProperties=this.geometryProperties,e.geometryType=this.geometryType,e.spatialReference=this.spatialReference,e.hasZ=this.hasZ,e.hasM=this.hasM,e.features=this.features,e.fields=this.fields,e.transform=this.transform,e.exceededTransferLimit=this.exceededTransferLimit,e.uniqueIdField=this.uniqueIdField,e.queryGeometry=this.queryGeometry,e.queryGeometryType=this.queryGeometryType,e}}},1430:function(e,t,r){"use strict"
r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return u}))
var s=r(1074),n=r(1220),o=r(1047),a=r(1014)
async function i(e,t,r){const s=await u(e,t,r)
return o.a.fromJSON(s)}async function u(e,t,r){const o=Object(s.c)(e),i={...r},u=a.a.from(t),{data:l}=await Object(n.a)(o,u,u.sourceSpatialReference,i)
return l}},1665:function(e,t,r){"use strict"
r.d(t,"a",(function(){return m}))
var s=r(1074),n=r(23),o=r(1163),a=r(1057)
function i(e,t){return t}function u(e,t,r,s){switch(r){case 0:return h(e,t+s,0)
case 1:return"lowerLeft"===e.originPosition?h(e,t+s,1):function({translate:e,scale:t},r,s){return e[s]-r*t[s]}(e,t+s,1)}}function l(e,t,r,s){return 2===r?h(e,t,2):u(e,t,r,s)}function c(e,t,r,s){return 2===r?h(e,t,3):u(e,t,r,s)}function d(e,t,r,s){return 3===r?h(e,t,3):l(e,t,r,s)}function h({translate:e,scale:t},r,s){return e[s]+r*t[s]}class p{constructor(e){this._options=e,this.geometryTypes=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"],this._previousCoordinate=[0,0],this._transform=null,this._applyTransform=i,this._lengths=[],this._currentLengthIndex=0,this._toAddInCurrentPath=0,this._vertexDimension=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,this._attributesConstructor=class{}}createFeatureResult(){return{fields:[],features:[]}}finishFeatureResult(e){if(this._options.applyTransform&&(e.transform=null),this._attributesConstructor=class{},this._coordinateBuffer=null,this._lengths.length=0,!e.hasZ)return
const t=Object(o.a)(e.geometryType,this._options.sourceSpatialReference,e.spatialReference)
if(!Object(n.k)(t))for(const r of e.features)t(r.geometry)}createSpatialReference(){return{}}addField(e,t){const r=e.fields
Object(n.c)(r),r.push(t)
const s=r.map(e=>e.name)
this._attributesConstructor=function(){for(const e of s)this[e]=null}}addFeature(e,t){e.features.push(t)}prepareFeatures(e){switch(this._transform=e.transform,this._options.applyTransform&&e.transform&&(this._applyTransform=this._deriveApplyTransform(e)),this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&this._vertexDimension++,e.geometryType){case"esriGeometryPoint":this.addCoordinate=(e,t,r)=>this.addCoordinatePoint(e,t,r),this.createGeometry=e=>this.createPointGeometry(e)
break
case"esriGeometryPolygon":this.addCoordinate=(e,t,r)=>this._addCoordinatePolygon(e,t,r),this.createGeometry=e=>this._createPolygonGeometry(e)
break
case"esriGeometryPolyline":this.addCoordinate=(e,t,r)=>this._addCoordinatePolyline(e,t,r),this.createGeometry=e=>this._createPolylineGeometry(e)
break
case"esriGeometryMultipoint":this.addCoordinate=(e,t,r)=>this._addCoordinateMultipoint(e,t,r),this.createGeometry=e=>this._createMultipointGeometry(e)}}createFeature(){return this._lengths.length=0,this._currentLengthIndex=0,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,{attributes:new this._attributesConstructor}}allocateCoordinates(){}addLength(e,t,r){0===this._lengths.length&&(this._toAddInCurrentPath=t),this._lengths.push(t)}addQueryGeometry(e,t){const{queryGeometry:r,queryGeometryType:s}=t,n=Object(a.A)(r.clone(),r,!1,!1,this._transform),o=Object(a.l)(n,s,!1,!1)
e.queryGeometryType=s,e.queryGeometry={...o}}createPointGeometry(e){const t={x:0,y:0,spatialReference:e.spatialReference}
return e.hasZ&&(t.z=0),e.hasM&&(t.m=0),t}addCoordinatePoint(e,t,r){const s=Object(n.w)(this._transform,"transform")
switch(t=this._applyTransform(s,t,r,0),r){case 0:e.x=t
break
case 1:e.y=t
break
case 2:"z"in e?e.z=t:e.m=t
break
case 3:e.m=t}}_transformPathLikeValue(e,t){let r=0
t<=1&&(r=this._previousCoordinate[t],this._previousCoordinate[t]+=e)
const s=Object(n.w)(this._transform,"transform")
return this._applyTransform(s,e,t,r)}_addCoordinatePolyline(e,t,r){this._dehydratedAddPointsCoordinate(e.paths,t,r)}_addCoordinatePolygon(e,t,r){this._dehydratedAddPointsCoordinate(e.rings,t,r)}_addCoordinateMultipoint(e,t,r){0===r&&e.points.push([])
const s=this._transformPathLikeValue(t,r)
e.points[e.points.length-1].push(s)}_createPolygonGeometry(e){return{rings:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_createPolylineGeometry(e){return{paths:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_createMultipointGeometry(e){return{points:[],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_dehydratedAddPointsCoordinate(e,t,r){0===r&&0==this._toAddInCurrentPath--&&(e.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0)
const s=this._transformPathLikeValue(t,r),n=e[e.length-1]
0===r&&(this._coordinateBufferPtr=0,this._coordinateBuffer=new Array(this._vertexDimension),n.push(this._coordinateBuffer)),this._coordinateBuffer[this._coordinateBufferPtr++]=s}_deriveApplyTransform(e){const{hasZ:t,hasM:r}=e
return t&&r?d:t?l:r?c:u}}var f=r(1220),y=(r(1047),r(1014))
async function m(e,t,r){const n=Object(s.c)(e),o={...r},a=y.a.from(t),i=!a.quantizationParameters,{data:u}=await Object(f.e)(n,a,new p({sourceSpatialReference:a.sourceSpatialReference,applyTransform:i}),o)
return u}},1855:function(e,t,r){"use strict"
r.d(t,"a",(function(){return a}))
var s=r(1074),n=r(1220),o=r(1014)
async function a(e,t,r){const a=Object(s.c)(e)
return Object(n.b)(a,o.a.from(t),{...r}).then(e=>e.data.count)}},1856:function(e,t,r){"use strict"
r.d(t,"a",(function(){return a}))
var s=r(1074),n=r(1220),o=r(1014)
async function a(e,t,r){const a=Object(s.c)(e)
return Object(n.d)(a,o.a.from(t),{...r}).then(e=>e.data.objectIds)}},1864:function(e,t,r){"use strict"
r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return d})),r.d(t,"d",(function(){return i}))
var s=r(235),n=r(234),o=r(1914),a=r(1223)
function i(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?a.c:"esriGeometryPolyline"===e?a.e:a.d}}}const u=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/
let l=1
function c(e,t){if(Object(s.a)("esri-csp-restrictions"))return()=>({[t]:null,...e})
try{let r=`this.${t} = null;`
for(const t in e)r+=`this${u.test(t)?"."+t:`["${t}"]`} = ${JSON.stringify(e[t])};`
const s=new Function(`\n      return class AttributesClass$${l++} {\n        constructor() {\n          ${r};\n        }\n      }\n    `)()
return()=>new s}catch(r){return()=>({[t]:null,...e})}}function d(e={}){return[{name:"New Feature",description:"",prototype:{attributes:Object(n.a)(e)}}]}function h(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:o.a,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}},1914:function(e,t,r){"use strict"
r.d(t,"a",(function(){return s}))
const s={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},2147:function(e,t,r){"use strict"
r.d(t,"a",(function(){return R}))
var s=r(968),n=r(975),o=r(446),a=r(235),i=r(23),u=r(973),l=r(374),c=r(970),d=(r(971),r(445),r(969)),h=r(1106),p=r(1074),f=r(1855),y=(r(982),r(1220)),m=r(1014),b=r(770),g=r(1856),O=r(1430),j=r(1665),F=r(1047)
let _=class extends n.a{constructor(e){super(e),this.dynamicDataSource=null,this.fieldsIndex=null,this.gdbVersion=null,this.infoFor3D=null,this.pbfSupported=!1,this.queryAttachmentsSupported=!1,this.sourceSpatialReference=null,this.url=null}get parsedUrl(){return Object(l.Q)(this.url)}async execute(e,t){const r=await this.executeJSON(e,t)
return this.featureSetFromJSON(e,r,t)}async executeJSON(e,t){var r
const s=this._normalizeQuery(e),n=null!=(null==(r=e.outStatistics)?void 0:r[0]),o=Object(a.a)("featurelayer-pbf-statistics"),i=!n||o
let u
if(this.pbfSupported&&i)try{u=await Object(j.a)(this.url,s,t)}catch(e){if("query:parsing-pbf"!==e.name)throw e
this.pbfSupported=!1}return this.pbfSupported&&i||(u=await Object(O.b)(this.url,s,t)),this._normalizeFields(u.fields),u}async featureSetFromJSON(e,t,s){if(!this._queryIs3DObjectFormat(e)||Object(i.k)(this.infoFor3D)||!t.assetMaps||!t.features||!t.features.length)return F.a.fromJSON(t)
const{meshFeatureSetFromJSON:n}=await Object(u.v)(Promise.all([r.e(31),r.e(58)]).then(r.bind(null,3086)),s)
return n(e,this.infoFor3D,t)}executeForCount(e,t){return Object(f.a)(this.url,this._normalizeQuery(e),t)}executeForExtent(e,t){return async function(e,t,r){const s=Object(p.c)(e)
return Object(y.c)(s,m.a.from(t),{...r}).then(e=>({count:e.data.count,extent:b.default.fromJSON(e.data.extent)}))}(this.url,this._normalizeQuery(e),t)}executeForIds(e,t){return Object(g.a)(this.url,this._normalizeQuery(e),t)}async executeRelationshipQuery(e,t){const[{default:s},{executeRelationshipQuery:n}]=await Object(u.v)(Promise.all([r.e(116).then(r.bind(null,1242)),r.e(91).then(r.bind(null,3103))]),t)
return e=s.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),n(this.url,e,t)}async executeRelationshipQueryForCount(e,t){const[{default:s},{executeRelationshipQueryForCount:n}]=await Object(u.v)(Promise.all([r.e(116).then(r.bind(null,1242)),r.e(91).then(r.bind(null,3103))]),t)
return e=s.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),n(this.url,e,t)}async executeAttachmentQuery(e,t){const{executeAttachmentQuery:s,fetchAttachments:n,processAttachmentQueryResult:o}=await Object(u.v)(r.e(465).then(r.bind(null,2927)),t),a=Object(p.c)(this.url)
return o(a,await(this.queryAttachmentsSupported?s(a,e,t):n(a,e,t)))}async executeTopFeaturesQuery(e,t){const{executeTopFeaturesQuery:s}=await Object(u.v)(r.e(385).then(r.bind(null,2928)),t)
return s(this.parsedUrl,e,this.sourceSpatialReference,t)}async executeForTopIds(e,t){const{executeForTopIds:s}=await Object(u.v)(r.e(384).then(r.bind(null,2929)),t)
return s(this.parsedUrl,e,t)}async executeForTopExtents(e,t){const{executeForTopExtents:s}=await Object(u.v)(r.e(383).then(r.bind(null,2930)),t)
return s(this.parsedUrl,e,t)}async executeForTopCount(e,t){const{executeForTopCount:s}=await Object(u.v)(r.e(382).then(r.bind(null,2931)),t)
return s(this.parsedUrl,e,t)}_normalizeQuery(e){let t=m.a.from(e)
if(t.sourceSpatialReference=t.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(t=t===e?t.clone():t,t.gdbVersion=e.gdbVersion||this.gdbVersion,t.dynamicDataSource=e.dynamicDataSource?h.a.from(e.dynamicDataSource):this.dynamicDataSource),Object(i.l)(this.infoFor3D)&&this._queryIs3DObjectFormat(e)){t=t===e?t.clone():t,t.formatOf3DObjects=null
for(const e of this.infoFor3D.queryFormats){if("3D_glb"===e){t.formatOf3DObjects=e
break}"3D_gltf"!==e||t.formatOf3DObjects||(t.formatOf3DObjects=e)}if(!t.formatOf3DObjects)throw new o.a("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf")
if(Object(i.k)(t.outFields)||!t.outFields.includes("*")){t=t===e?t.clone():t,Object(i.k)(t.outFields)&&(t.outFields=[])
const{originX:r,originY:s,originZ:n,translationX:o,translationY:a,translationZ:u,scaleX:l,scaleY:c,scaleZ:d,rotationX:h,rotationY:p,rotationZ:f,rotationDeg:y}=this.infoFor3D.transformFieldRoles
t.outFields.push(r,s,n,o,a,u,l,c,d,h,p,f,y)}}return t}_normalizeFields(e){if(Object(i.l)(this.fieldsIndex)&&Object(i.l)(e))for(const t of e){const e=this.fieldsIndex.get(t.name)
e&&Object.assign(t,e.toJSON())}}_queryIs3DObjectFormat(e){return Object(i.l)(this.infoFor3D)&&!0===e.returnGeometry&&"xyFootprint"!==e.multipatchOption&&!e.outStatistics}}
Object(s.a)([Object(c.b)({type:h.a})],_.prototype,"dynamicDataSource",void 0),Object(s.a)([Object(c.b)()],_.prototype,"fieldsIndex",void 0),Object(s.a)([Object(c.b)()],_.prototype,"gdbVersion",void 0),Object(s.a)([Object(c.b)()],_.prototype,"infoFor3D",void 0),Object(s.a)([Object(c.b)({readOnly:!0})],_.prototype,"parsedUrl",null),Object(s.a)([Object(c.b)()],_.prototype,"pbfSupported",void 0),Object(s.a)([Object(c.b)()],_.prototype,"queryAttachmentsSupported",void 0),Object(s.a)([Object(c.b)()],_.prototype,"sourceSpatialReference",void 0),Object(s.a)([Object(c.b)({type:String})],_.prototype,"url",void 0),_=Object(s.a)([Object(d.a)("esri.tasks.QueryTask")],_)
const R=_},2293:function(e,t,r){"use strict"
var s
r.d(t,"a",(function(){return s})),function(e){e[e.PROJECT_VERTICES=1]="PROJECT_VERTICES"}(s||(s={}))},2924:function(e,t,r){"use strict"
r.r(t),r.d(t,"default",(function(){return P}))
var s=r(968),n=(r(982),r(772)),o=r(196),a=r(771),i=r(1009),u=r(446),l=r(235),c=r(976),d=r(1046),h=r(23),p=r(146),f=r(973),y=r(374),m=r(970),b=(r(971),r(445),r(969)),g=r(770),O=r(983),j=r(2293),F=r(1864),_=r(2147),R=r(1051),w=r(1457),I=r(769)
const v=new c.a({originalAndCurrentFeatures:"original-and-current-features",none:"none"})
async function S(e){return"string"==typeof e?Object(y.h)(e)||{data:e}:new Promise((t,r)=>{const s=new FileReader
s.readAsDataURL(e),s.onload=()=>t(Object(y.h)(s.result)),s.onerror=e=>r(e)})}const T=new Set(["Feature Layer","Table"]),q=new c.a({Started:"published",Publishing:"publishing",Stopped:"unavailable"})
let x=class extends d.a{constructor(){super(...arguments),this.type="feature-layer",this.refresh=Object(f.f)(async()=>{var e,t
await this.load()
const r=null==(e=this.sourceJSON.editingInfo)?void 0:e.lastEditDate
if(null==r)return{dataChanged:!0,updates:{}}
try{await this._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}const s=r!==(null==(t=this.sourceJSON.editingInfo)?void 0:t.lastEditDate)
return{dataChanged:s,updates:s?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}})}load(e){const t=Object(h.l)(e)?e.signal:null,r=this.layer.sourceJSON
return this.addResolvingPromise(this._fetchService(r,t)),Promise.resolve(this)}get queryTask(){var e,t
const{capabilities:r,parsedUrl:s,dynamicDataSource:n,infoFor3D:o,gdbVersion:a,spatialReference:i,fieldsIndex:u}=this.layer,c=Object(l.a)("featurelayer-pbf")&&(null==r?void 0:r.query.supportsFormatPBF)&&Object(h.k)(o),d=null!=(e=null==r||null==(t=r.operations)?void 0:t.supportsQueryAttachments)&&e
return new _.a({url:s.path,pbfSupported:c,fieldsIndex:u,infoFor3D:o,dynamicDataSource:n,gdbVersion:a,sourceSpatialReference:i,queryAttachmentsSupported:d})}async addAttachment(e,t){await this.load()
const r=e.attributes[this.layer.objectIdField],s=this.layer.parsedUrl.path+"/"+r+"/addAttachment",n=this._getLayerRequestOptions(),o=this._getFormDataForAttachment(t,n.query)
try{const e=await Object(a.default)(s,{body:o})
return this._createFeatureEditResult(e.data.addAttachmentResult)}catch(e){throw this._createAttachmentErrorResult(r,e)}}async updateAttachment(e,t,r){await this.load()
const s=e.attributes[this.layer.objectIdField],n=this.layer.parsedUrl.path+"/"+s+"/updateAttachment",o=this._getLayerRequestOptions({query:{attachmentId:t}}),i=this._getFormDataForAttachment(r,o.query)
try{const e=await Object(a.default)(n,{body:i})
return this._createFeatureEditResult(e.data.updateAttachmentResult)}catch(e){throw this._createAttachmentErrorResult(s,e)}}async applyEdits(e,t){var r,s,n,i,u,l,c,d,p
await this.load()
const f=this.layer.infoFor3D,y=Object(h.l)(f),m=y||null!=(r=null==t?void 0:t.globalIdUsed)&&r,b=null!=(s=null==(n=e.addFeatures)?void 0:n.map(e=>this._serializeFeature(e,f)).filter(h.l))?s:[],g=null!=(i=null==(u=e.updateFeatures)?void 0:u.map(e=>this._serializeFeature(e,f)).filter(h.l))?i:[],O=this._getFeatureIds(e.deleteFeatures,m)
Object(w.a)(b,g,this.layer.spatialReference)
const j=[],F=[],_=[...null!=(l=e.deleteAttachments)?l:[]]
for(const t of null!=(R=e.addAttachments)?R:[]){var R
j.push(await this._serializeAttachment(t))}for(const t of null!=(I=e.updateAttachments)?I:[]){var I
F.push(await this._serializeAttachment(t))}const S=j.length||F.length||_.length?{adds:j,updates:F,deletes:_}:null
let T,q=null
if(y){q=new Map
const t=[]
for(const r of null!=(x=e.addAssets)?x:[]){var x
t.push(this._serializeAssetMapEditAndUploadAssets(r,q))}const r=await Promise.all(t)
T=r.length?{adds:r,updates:[],deletes:[]}:void 0}const P={gdbVersion:(null==t?void 0:t.gdbVersion)||this.layer.gdbVersion,rollbackOnFailure:null==t?void 0:t.rollbackOnFailureEnabled,useGlobalIds:m,returnEditMoment:null==t?void 0:t.returnEditMoment,usePreviousEditMoment:null==t?void 0:t.usePreviousEditMoment,sessionId:null==t?void 0:t.sessionId}
null!=t&&t.returnServiceEditsOption?(P.edits=JSON.stringify([{id:this.layer.layerId,adds:b,updates:g,deletes:O,attachments:S,assetMaps:Object(h.u)(T)}]),P.returnServiceEditsOption=v.toJSON(null==t?void 0:t.returnServiceEditsOption),P.returnServiceEditsInSourceSR=null==t?void 0:t.returnServiceEditsInSourceSR):(P.adds=b.length?JSON.stringify(b):null,P.updates=g.length?JSON.stringify(g):null,P.deletes=O.length?m?JSON.stringify(O):O.join(","):null,P.attachments=S&&JSON.stringify(S),P.assetMaps=Object(h.l)(T)?JSON.stringify(T):void 0)
const E=this._getLayerRequestOptions({method:"post",query:P}),A=null!=t&&t.returnServiceEditsOption?this.layer.url:this.layer.parsedUrl.path,G=await Object(a.default)(A+"/applyEdits",E)
if((null==(c=this.layer.capabilities.operations)||!c.supportsEditing)&&null!=(d=this.layer.effectiveCapabilities)&&null!=(p=d.operations)&&p.supportsEditing){const e=null==o.b?void 0:o.b.findCredential(this.layer.url)
await(null==e?void 0:e.refreshToken())}if(y&&null!=G.data&&null!=G.data.assetMaps){const e=G.data,t=this.layer.objectIdField,r=[]
for(const t of e.addResults)t.success&&r.push(t.objectId)
for(const t of e.updateResults)t.success&&r.push(t.objectId)
const s=this._createRequestQueryOptions(),n=await Object(a.default)(A+"/query",{...s,query:{f:"json",formatOf3DObjects:"3D_glb",where:`OBJECTID IN (${r.join(",")})`,outFields:""+t}})
if(n&&n.data&&n.data.assetMaps&&Object(h.l)(q)){const e=n.data.assetMaps
for(const t of e){const e=q.get(t.parentGlobalId).geometry
Object(h.l)(e)&&"mesh"===e.type&&e.updateExternalSource({source:[{name:t.assetName,source:t.assetName}],extent:e.extent})}}}return this._createEditsResult(G)}async deleteAttachments(e,t){await this.load()
const r=e.attributes[this.layer.objectIdField],s=this.layer.parsedUrl.path+"/"+r+"/deleteAttachments"
try{return(await Object(a.default)(s,this._getLayerRequestOptions({query:{attachmentIds:t.join(",")},method:"post"}))).data.deleteAttachmentResults.map(this._createFeatureEditResult)}catch(e){throw this._createAttachmentErrorResult(r,e)}}fetchRecomputedExtents(e={}){const t=e.signal
return this.load({signal:t}).then(async()=>{const t=this._getLayerRequestOptions({...e,query:{returnUpdates:!0}}),{layerId:r,url:s}=this.layer,{data:n}=await Object(a.default)(`${s}/${r}`,t),{id:o,extent:u,fullExtent:l,timeExtent:c}=n,d=u||l
return{id:o,fullExtent:d&&g.default.fromJSON(d),timeExtent:c&&i.a.fromJSON({start:c[0],end:c[1]})}})}async queryAttachments(e,t={}){await this.load()
const r=this._getLayerRequestOptions(t)
return this.queryTask.executeAttachmentQuery(e,r)}async queryFeatures(e,t){return await this.load(),this.queryTask.execute(e,{...t,query:this._createRequestQueryOptions(t)})}async queryFeaturesJSON(e,t){return await this.load(),this.queryTask.executeJSON(e,{...t,query:this._createRequestQueryOptions(t)})}async queryObjectIds(e,t){return await this.load(),this.queryTask.executeForIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryFeatureCount(e,t){return await this.load(),this.queryTask.executeForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryExtent(e,t){return await this.load(),this.queryTask.executeForExtent(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeatures(e,t){return await this.load(),this.queryTask.executeRelationshipQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeaturesCount(e,t){return await this.load(),this.queryTask.executeRelationshipQueryForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopFeatures(e,t){return await this.load(),this.queryTask.executeTopFeaturesQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopObjectIds(e,t){return await this.load(),this.queryTask.executeForTopIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopExtents(e,t){return await this.load(),this.queryTask.executeForTopExtents(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopCount(e,t){return await this.load(),this.queryTask.executeForTopCount(e,{...t,query:this._createRequestQueryOptions(t)})}async fetchPublishingStatus(){if(!Object(R.c)(this.layer.url))return"unavailable"
const e=Object(y.E)(this.layer.url,"status"),t=await Object(a.default)(e,{query:{f:"json"}})
return q.fromJSON(t.data.status)}_createRequestQueryOptions(e){const t={...this.layer.customParameters,token:this.layer.apiKey,...null==e?void 0:e.query}
return this.layer.datesInUnknownTimezone&&(t.timeReferenceUnknownClient=!0),t}async _fetchService(e,t){if(!e){const{data:r}=await Object(a.default)(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:Object(l.a)("featurelayer-advanced-symbols")?{returnAdvancedSymbols:!0}:{},signal:t}))
e=r}this.sourceJSON=this._patchServiceJSON(e)
const r=e.type
if(!T.has(r))throw new u.a("feature-layer-source:unsupported-type",`Source type "${r}" is not supported`)}_patchServiceJSON(e){var t
if("Table"!==e.type&&e.geometryType&&(null==e||null==(t=e.drawingInfo)||!t.renderer)&&!e.defaultSymbol){const t=Object(F.d)(e.geometryType).renderer
Object(p.c)("drawingInfo.renderer",t,e)}return"esriGeometryMultiPatch"===e.geometryType&&e.infoFor3D&&(e.geometryType="mesh"),e}_serializeFeature(e,t){const{geometry:r,attributes:s}=e
if(Object(h.l)(t)&&Object(h.l)(e.geometry)&&"mesh"===e.geometry.type){const r={...s},n=e.geometry,o=n.origin,a=n.transform
if(r[t.transformFieldRoles.originX]=o.x,r[t.transformFieldRoles.originY]=o.y,r[t.transformFieldRoles.originZ]=o.z,Object(h.l)(a)){const e=a.translation,s=a.scale,n=a.rotation
r[t.transformFieldRoles.translationX]=e[0],r[t.transformFieldRoles.translationY]=-e[2],r[t.transformFieldRoles.translationZ]=e[1],r[t.transformFieldRoles.scaleX]=s[0],r[t.transformFieldRoles.scaleY]=s[1],r[t.transformFieldRoles.scaleZ]=s[2],r[t.transformFieldRoles.rotationX]=n[0],r[t.transformFieldRoles.rotationY]=n[2],r[t.transformFieldRoles.rotationZ]=n[1],r[t.transformFieldRoles.rotationDeg]=n[3]}return{geometry:null,attributes:r}}return Object(h.k)(r)?{attributes:s}:"mesh"===r.type||"extent"===r.type?null:{geometry:r.toJSON(),attributes:s}}async _serializeAttachment(e){const{feature:t,attachment:r}=e,{globalId:s,name:n,contentType:o,data:a,uploadId:i}=r,u={globalId:s,parentGlobalId:null,contentType:null,name:null,uploadId:null,data:null}
if(t&&(u.parentGlobalId="attributes"in t?t.attributes&&t.attributes[this.layer.globalIdField]:t.globalId),i)u.uploadId=i
else if(a){const e=await S(a)
e&&(u.contentType=e.mediaType,u.data=e.data),a instanceof File&&(u.name=a.name)}return n&&(u.name=n),o&&(u.contentType=o),u}async _serializeAssetMapEditAndUploadAssets(e,t){const r=this.layer.url
let s=null
try{const t=new Blob([e.data],{type:e.mimeType}),n=new FormData
n.append("f","json"),n.append("file",t,""+e.assetName)
const o={body:n,method:"post",responseType:"json"},{data:i}=await Object(a.default)(r+"/uploads/upload",o)
if(!i.success)throw new u.a("feature-layer-source:upload-failure","Expected upload to be successfull.")
s={assetType:e.assetType,assetUploadId:i.item.itemID}}catch(e){s=null}if(Object(h.k)(s)){const t=await S(new Blob([e.data]))
if(!t.isBase64)throw new u.a("feature-layer-source:uploadAssets-failure","Expected gltf data in base64 format after conversion.")
s={assetType:e.assetType,assetData:t.data}}if(Object(h.k)(s))throw new u.a("feature-layer-source:uploadAssets-failure","Unable to prepare uploadAsset request options.")
const n={method:"post",query:{f:"json",assets:JSON.stringify([s])},responseType:"json"},o=await Object(a.default)(Object(y.E)(this.layer.parsedUrl.path,"uploadAssets"),n)
if(1!==o.data.uploadResults.length||!o.data.uploadResults[0].success)throw new u.a("feature-layer-source:uploadAssets-failure","Bad response.")
const i=o.data.uploadResults[0].assetHash,l=[]
e.flags&j.a.PROJECT_VERTICES&&l.push("PROJECT_VERTICES")
const c={globalId:e.assetMapGlobalId,parentGlobalId:e.featureGlobalId,assetName:e.assetName,assetHash:i,flags:l}
return t.set(e.featureGlobalId,e.feature),c}_getFeatureIds(e,t){const r=null==e?void 0:e[0]
return r?this._canUseGlobalIds(t,e)?this._getGlobalIdsFromFeatureIdentifier(e):"objectId"in r?this._getObjectIdsFromFeatureIdentifier(e):this._getIdsFromFeatures(e):[]}_getIdsFromFeatures(e){const t=this.layer.objectIdField
return e.map(e=>e.attributes&&e.attributes[t])}_canUseGlobalIds(e,t){return e&&"globalId"in t[0]}_getObjectIdsFromFeatureIdentifier(e){return e.map(e=>e.objectId)}_getGlobalIdsFromFeatureIdentifier(e){return e.map(e=>e.globalId)}_createEditsResult(e){var t,r,s,n,o,a,i,u,l,c,d
const h=e.data,{layerId:p}=this.layer,f=[]
let y=null
if(Array.isArray(h))for(const e of h){var m,b,g
f.push({id:e.id,editedFeatures:e.editedFeatures}),e.id===p&&(y={addResults:null!=(m=e.addResults)?m:[],updateResults:null!=(b=e.updateResults)?b:[],deleteResults:null!=(g=e.deleteResults)?g:[],attachments:e.attachments,editMoment:e.editMoment})}else y=h
const O=null==(t=y)?void 0:t.attachments,j={addFeatureResults:null!=(r=null==(s=y)||null==(n=s.addResults)?void 0:n.map(this._createFeatureEditResult,this))?r:[],updateFeatureResults:null!=(o=null==(a=y)||null==(i=a.updateResults)?void 0:i.map(this._createFeatureEditResult,this))?o:[],deleteFeatureResults:null!=(u=null==(l=y)||null==(c=l.deleteResults)?void 0:c.map(this._createFeatureEditResult,this))?u:[],addAttachmentResults:O&&O.addResults?O.addResults.map(this._createFeatureEditResult,this):[],updateAttachmentResults:O&&O.updateResults?O.updateResults.map(this._createFeatureEditResult,this):[],deleteAttachmentResults:O&&O.deleteResults?O.deleteResults.map(this._createFeatureEditResult,this):[]}
if(null!=(d=y)&&d.editMoment&&(j.editMoment=y.editMoment),f.length>0){j.editedFeatureResults=[]
for(const e of f){var F,_,R
const{editedFeatures:t}=e,r=null!=t&&t.spatialReference?new I.default(t.spatialReference):null
j.editedFeatureResults.push({layerId:e.id,editedFeatures:{adds:(null==t||null==(F=t.adds)?void 0:F.map(e=>this._createEditedFeature(e,r)))||[],updates:(null==t||null==(_=t.updates)?void 0:_.map(e=>({original:this._createEditedFeature(e[0],r),current:this._createEditedFeature(e[1],r)})))||[],deletes:(null==t||null==(R=t.deletes)?void 0:R.map(e=>this._createEditedFeature(e,r)))||[],spatialReference:r}})}}return j}_createEditedFeature(e,t){return new n.default({attributes:e.attributes,geometry:Object(O.a)({...e.geometry,spatialReference:t})})}_createFeatureEditResult(e){const t=!0===e.success?null:e.error||{code:void 0,description:void 0}
return{objectId:e.objectId,globalId:e.globalId,error:t?new u.a("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}_createAttachmentErrorResult(e,t){const r=t.details.messages&&t.details.messages[0]||t.message,s=t.details.httpStatus||t.details.messageCode
return{objectId:e,globalId:null,error:new u.a("feature-layer-source:attachment-failure",r,{code:s})}}_getFormDataForAttachment(e,t){const r=e instanceof FormData?e:e&&e.elements?new FormData(e):null
if(r)for(const e in t){const s=t[e]
null!=s&&(r.set?r.set(e,s):r.append(e,s))}return r}_getLayerRequestOptions(e={}){const{parsedUrl:t,gdbVersion:r,dynamicDataSource:s}=this.layer
return{...e,query:{gdbVersion:r,layer:s?JSON.stringify({source:s}):void 0,...t.query,f:"json",...this._createRequestQueryOptions(e)},responseType:"json"}}}
Object(s.a)([Object(m.b)()],x.prototype,"type",void 0),Object(s.a)([Object(m.b)({constructOnly:!0})],x.prototype,"layer",void 0),Object(s.a)([Object(m.b)({readOnly:!0})],x.prototype,"queryTask",null),x=Object(s.a)([Object(b.a)("esri.layers.graphics.sources.FeatureLayerSource")],x)
const P=x}}])
