(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[1],{1015:function(t,e,n){"use strict"
n.d(e,"a",(function(){return bt})),n.d(e,"b",(function(){return v})),n.d(e,"c",(function(){return Ot})),n.d(e,"d",(function(){return Pt})),n.d(e,"e",(function(){return q})),n.d(e,"f",(function(){return U})),n.d(e,"g",(function(){return Y})),n.d(e,"h",(function(){return j})),n.d(e,"i",(function(){return y})),n.d(e,"j",(function(){return ft})),n.d(e,"k",(function(){return Gt})),n.d(e,"l",(function(){return At})),n.d(e,"m",(function(){return F})),n.d(e,"n",(function(){return lt})),n.d(e,"o",(function(){return st})),n.d(e,"p",(function(){return at})),n.d(e,"q",(function(){return ct})),n.d(e,"r",(function(){return W})),n.d(e,"s",(function(){return w})),n.d(e,"t",(function(){return k})),n.d(e,"u",(function(){return z})),n.d(e,"v",(function(){return et})),n.d(e,"w",(function(){return ot})),n.d(e,"x",(function(){return J})),n.d(e,"y",(function(){return V})),n.d(e,"z",(function(){return Z})),n.d(e,"A",(function(){return tt})),n.d(e,"B",(function(){return $})),n.d(e,"C",(function(){return rt})),n.d(e,"D",(function(){return ut})),n.d(e,"E",(function(){return X})),n.d(e,"F",(function(){return nt})),n.d(e,"G",(function(){return Ft})),n.d(e,"H",(function(){return B}))
var r=n(446),o=n(991),u=n(23),a=n(973),c=n(997),i=n(1060),s=n(1087),_=n(1029),l=n(985),f=n(981),P=n(1089),E=n(770),O=n(1055),M=n(2251),S=n(992),p=n(773),C=n(1021),h=n(996),A=n(1052),R=n(2697),d=n(2901),T=n(988),N=n(1289),g=n(1163)
let L=null,b=null,G=null,I={}
const m=new s.a
function j(){return!!L&&Object(M.e)()}function y(t){return Object(u.k)(G)&&(G=Promise.all([Object(M.g)(),n.e(11).then(n.bind(null,1732)).then(t=>t.g),n.e(761).then(n.bind(null,1733))])),G.then(([,e,{hydratedAdapter:n}])=>{Object(a.q)(t),b=n,L=e.default,L._enableProjection(M.h),m.notify()})}function F(t,e,n=null,r=null){return Array.isArray(t)?0===t.length?[]:W(b,t,t[0].spatialReference,e,n,r):W(b,[t],t.spatialReference,e,n,r)[0]}function W(t,e,n,r,o=null,a=null){if(Object(u.k)(n)||Object(u.k)(r))return e
if(v(n,r,o))return e.map(t=>Object(u.u)(X(t,n,r)))
if(Object(u.k)(o)){const t=d.a.cacheKey(n,r)
void 0!==I[t]?o=I[t]:(o=U(n,r,void 0),Object(u.k)(o)&&(o=new d.a),I[t]=o)}if(Object(u.k)(L)||Object(u.k)(t))throw new D
return Object(u.l)(a)?L._project(t,e,n,r,o,a):L._project(t,e,n,r,o)}function w(t,e){const n=k([t],e)
return Object(u.l)(n.pending)?{pending:n.pending,geometry:null}:Object(u.l)(n.geometries)?{pending:null,geometry:n.geometries[0]}:{pending:null,geometry:null}}function k(t,e){if(!j())for(const n of t)if(Object(u.l)(n)&&!Object(T.d)(n.spatialReference,e)&&Object(T.l)(n.spatialReference)&&Object(T.l)(e)&&!v(n.spatialReference,e))return Object(i.d)(m),{pending:y(),geometries:null}
return{pending:null,geometries:t.map(t=>Object(u.k)(t)?null:Object(T.d)(t.spatialReference,e)?t:Object(T.l)(t.spatialReference)&&Object(T.l)(e)?B(t,e):null)}}function U(t,e,n=null){if(Object(u.k)(t)||Object(u.k)(e))return null
if(Object(u.k)(L)||Object(u.k)(b))throw new D
const r=L._getTransformation(b,t,e,n,null==n?void 0:n.spatialReference)
return null!==r?d.a.fromGE(r):null}class D extends r.a{constructor(){super("projection:not-loaded","projection engine not fully loaded yet, please call load()")}}var H,x
function B(t,e){try{const n=F(t,e)
if(null==n)return null
"xmin"in t&&"xmin"in n&&(n.zmin=t.zmin,n.zmax=t.zmax)
const r=Object(g.a)(n.type,t.spatialReference,e)
return Object(u.l)(r)&&r(n),n}catch(t){if(!(t instanceof D))throw t
return null}}function v(t,e,n){return!n&&(!!Object(T.d)(t,e)||Object(T.l)(t)&&Object(T.l)(e)&&!!qt(t,e,Vt))}async function Y(t,e,n,r){if(j())return Object(a.t)(r)
if(Array.isArray(t)){for(const{source:e,dest:n,geographicTransformation:o}of t)if(!v(e,n,o))return y(r)}else if(!v(t,e,n))return y(r)
return Object(a.t)(r)}function q(t,e){switch(qt(t,e,Vt)){case St:return"copy3"
case yt:return"wgs84ToSphericalECEF"
case Rt:return"wgs84ToWebMercator"
case Nt:return"wgs84ToPlateCarree"
case Ht:return"wgs84ToWGS84ECEF"
case pt:return"webMercatorToWGS84"
case Ct:return"webMercatorToSphericalECEF"
case ht:return"webMercatorToWGS84ECEF"
case Lt:return"webMercatorToPlateCarree"
case xt:return"wgs84ECEFToWGS84"
case Bt:return"wgs84ECEFToSphericalECEF"
case vt:return"wgs84ECEFToWebMercator"
case kt:return"sphericalECEFToWGS84"
case Ut:return"sphericalECEFToWebMercator"
case wt:return"sphericalMarsPCPFToMars2000"
case Wt:return"sphericalMoonPCPFToMoon2000"
case Dt:return"sphericalECEFToWGS84ECEF"
case jt:return"mars2000ToSphericalPCPF"
case mt:return"moon2000ToSphericalPCPF"
default:return null}}function X(t,e,n){return t?"x"in t?K(t,e,new S.a,n,0):"xmin"in t?function(t,e,n,r,o){const{xmin:u,ymin:a,xmax:c,ymax:i,hasZ:s,hasM:_}=t
return nt(u,a,s?t.zmin:o,e,re,r)?(n.xmin=re[0],n.ymin=re[1],s&&(n.zmin=re[2]),nt(c,i,s?t.zmax:o,e,re,r)?(n.xmax=re[0],n.ymax=re[1],s&&(n.zmax=re[2]),_&&(n.mmin=t.mmin,n.mmax=t.mmax),n.spatialReference=r,n):null):null}(t,e,new E.default,n,0):"rings"in t?Q(t,e,new p.default,n,0):"paths"in t?function(t,e,n,r,o){const{paths:u,hasZ:a,hasM:c}=t,i=[]
return it(u,null!=a&&a,null!=c&&c,e,i,r,o)?(n.paths=i,n.spatialReference=r,n.hasZ=a,n.hasM=c,n):null}(t,e,new C.a,n,0):"points"in t?function(t,e,n,r,o){const{points:u,hasZ:a,hasM:c}=t,i=[],s=u.length,_=[]
for(const t of u)_.push(t[0],t[1],a?t[2]:o)
if(!at(_,e,0,_,r,0,s))return null
for(let t=0;t<s;++t){const e=3*t,n=_[e],r=_[e+1]
a&&c?i.push([n,r,_[e+2],u[t][3]]):a?i.push([n,r,_[e+2]]):c?i.push([n,r,u[t][2]]):i.push([n,r])}return n.points=i,n.spatialReference=r,n.hasZ=a,n.hasM=c,n}(t,e,new O.a,n,0):null:null}function z(t,e,n=e.spatialReference,r=0){return Object(u.l)(n)&&Object(u.l)(t.spatialReference)&&Object(u.l)(K(t,t.spatialReference,e,n,r))}function K(t,e,n,r,o){re[0]=t.x,re[1]=t.y
const u=t.z
return re[2]=void 0!==u?u:o,at(re,e,0,re,r,0,1)?(n.x=re[0],n.y=re[1],n.spatialReference=r,void 0===u?(n.z=void 0,n.hasZ=!1):(n.z=re[2],n.hasZ=!0),void 0===t.m?(n.m=void 0,n.hasM=!1):(n.m=t.m,n.hasM=!0),n):null}function Z({hasZ:t,spatialReference:e,paths:n},r,o=0){const a=Mt(e,Kt),c=Yt[a][H.WGS84_COMPARABLE_LON_LAT]
if(Object(u.k)(c))return!1
const i=t?t=>t:t=>Object(l.B)(re,t[0],t[1],o)
for(const t of n){const e=[]
for(const n of t){const t=[0,0,o]
c(i(n),0,t,0),e.push(t)}r.push(e)}return!0}function V({hasZ:t,spatialReference:e,rings:n},r,o=0){const a=Mt(e,Kt),c=Yt[a][H.WGS84_COMPARABLE_LON_LAT]
if(Object(u.k)(c))return!1
const i=t?t=>t:t=>Object(l.B)(re,t[0],t[1],o)
for(const t of n){const e=[]
for(const n of t){const t=[0,0,o]
c(i(n),0,t,0),e.push(t)}r.push(e)}return!0}function J(t,e,n=e.spatialReference,r=0){return Object(u.l)(t.spatialReference)&&Object(u.l)(n)&&Object(u.l)(Q(t,t.spatialReference,e,n,r))}function Q(t,e,n,r,o){const{rings:u,hasZ:a,hasM:c}=t,i=[]
return it(u,null!=a&&a,null!=c&&c,e,i,r,o)?(n.rings=i,n.spatialReference=r,n.hasZ=a,n.hasM=c,n):null}function $(t,e,n){if(Object(u.k)(e)||Object(u.k)(n))return null
const r=new S.a({spatialReference:n})
return at(t,e,0,re,n,0,1)?(r.x=re[0],r.y=re[1],r.z=re[2],r):null}function tt(t,e,n){return at(t,e,0,re,n.spatialReference,0,1)?(n.x=re[0],n.y=re[1],n.z=re[2],n):null}function et(t,e,n,r=0){re[0]=t.x,re[1]=t.y
const o=t.z
return re[2]=void 0!==o?o:r,at(re,t.spatialReference,0,e,n,0,1)}function nt(t,e,n,r,o,u){return te[0]=t,te[1]=e,te[2]=n,at(te,r,0,o,u,0,1)}function rt(t,e,n,r){return!(Object(u.k)(e)||Object(u.k)(r)||t.length<2)&&(2===t.length&&(te[0]=t[0],te[1]=t[1],te[2]=0,t=te),at(t,e,0,n,r,0,1))}function ot(t,e){re[0]=t.x,re[1]=t.y
const n=t.z
return re[2]=void 0!==n?n:0,ut(re,t.spatialReference,e)}function ut(t,e,n){return function(t,e,n){if(Object(u.k)(e))return!1
const r=Mt(e,Kt),o=Yt[r][H.WGS84_COMPARABLE_LON_LAT]
return!Object(u.k)(o)&&(o(t,0,te,0),n!==te&&(n[0]=te[0],n[1]=te[1],n.length>2&&(n[2]=te[2])),!0)}(t,e,n)}function at(t,e,n,r,o,a,c=1){const i=qt(e,o,Vt)
if(Object(u.k)(i))return!1
if(i===St){if(t===r&&n===a)return!0
const e=n+3*c
for(let o=n,u=a;o<e;o++,u++)r[u]=t[o]
return!0}const s=n+3*c
for(let e=n,o=a;e<s;e+=3,o+=3)i(t,e,r,o)
return!0}function ct(t,e,n,r,o){Object(l.l)(re,t),Object(l.j)(oe,t,e),rt(re,n,re,o),rt(oe,n,oe,o),Object(l.k)(r,oe,re),Object(l.w)(r,r)}function it(t,e,n,r,o,u,a=0){const c=new Array
for(const n of t)for(const t of n)c.push(t[0],t[1],e?t[2]:a)
if(!at(c,r,0,c,u,0,c.length/3))return!1
let i=0
o.length=0
for(const r of t){const t=new Array
for(const o of r)e&&n?t.push([c[i++],c[i++],c[i++],o[3]]):e?t.push([c[i++],c[i++],c[i++]]):n?(t.push([c[i++],c[i++],o[2]]),i++):(t.push([c[i++],c[i++]]),i++)
o.push(t)}return!0}function st(t,e,n,r){if(Object(u.k)(e)||Object(u.k)(r))return!1
const o=Xt(e,r,Jt)
if(o.projector===St)return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],!0
if(Object(u.k)(o.projector))return!1
const{source:a,dest:c}=o
if(c.spatialReferenceId===H.WEB_MERCATOR){const e=Yt[a.spatialReferenceId][H.WGS84]
return!Object(u.k)(e)&&(e(t,0,ee,0),Rt(ee,0,n,0),n[3]=_t(ee[1],t[2],t[3],A.a.radius),!0)}if(a.spatialReferenceId!==H.WGS84&&a.spatialReferenceId!==H.CGCS2000||c.spatialReferenceId!==H.PLATE_CARREE){var i,s
o.projector(t,0,n,0)
const e=null!=(i=a.metersPerUnit)?i:1,r=null!=(s=c.metersPerUnit)?s:1
n[3]=t[3]*e/r}else{const e=Yt[a.spatialReferenceId][H.SPHERICAL_ECEF],r=Yt[H.SPHERICAL_ECEF][H.PLATE_CARREE]
let c=t[3]
Object(u.l)(e)&&Object(u.l)(r)&&(c=_t(t[1],t[2],t[3],A.a.radius)),o.projector(t,0,n,0),n[3]=c}return!0}function _t(t,e,n,r){const o=r+e
if(o<r/2||n>o)return Number.MAX_VALUE
const u=Math.abs(Qt*t)+Math.asin(n/o)
return u>=Math.PI/2?Number.MAX_VALUE:n/Math.cos(u)}function lt(t,e,n,r){return!(null==t||(Object(T.d)(e,r)?(Object(h.l)(n,t),0):(te[0]=t[0],te[1]=t[1],te[2]=0,!at(te,e,0,te,r,0,1)||(n[0]=te[0],n[1]=te[1],te[0]=t[2],te[1]=t[3],te[2]=0,!at(te,e,0,te,r,0,1)||(n[2]=te[0],n[3]=te[1],0)))))}function ft(t,e,n,r){if(Object(u.k)(e)||Object(u.k)(r))return!1
const o=Mt(e,Kt),a=Mt(r,Zt)
if(o===a&&o!==H.UNKNOWN||Object(T.d)(e,r))return n[0]=1,n[1]=1,n[2]=1,!0
if(o===H.SPHERICAL_ECEF){const e=Object(l.u)(t),r=e/Math.sqrt(t[0]*t[0]+t[1]*t[1]),o=e/A.a.radius
if(a===H.WEB_MERCATOR)return n[0]=r*o,n[1]=r*o,n[2]=1,!0
if(a===H.WGS84||a===H.CGCS2000){const t=Tt
return n[0]=t*r*o,n[1]=t*o,n[2]=1,!0}}else if(o===H.PLATE_CARREE){if(a===H.WGS84||a===H.CGCS2000)return n[0]=Tt,n[1]=Tt,n[2]=1,!0
if(a===H.WEB_MERCATOR){const e=t[1]/A.a.radius
return n[0]=1,n[1]=1/Math.cos(e),n[2]=1,!0}}return!1}function Pt(t,e,n,r){if(Object(u.k)(t)||Object(u.k)(r))return!1
const o=Mt(t,Kt),a=Mt(r,Zt)
if(o===a&&!Et(a)&&(o!==H.UNKNOWN||Object(T.d)(t,r)))return Object(_.j)(n,e),!0
if(Et(a)){const t=Yt[o][H.LON_LAT],r=Yt[H.LON_LAT][a]
return!Object(u.k)(t)&&!Object(u.k)(r)&&(t(e,0,ee,0),r(ee,0,ne,0),Ot(Qt*ee[0],Qt*ee[1],n),n[12]=ne[0],n[13]=ne[1],n[14]=ne[2],!0)}if((a===H.WEB_MERCATOR||a===H.PLATE_CARREE)&&(o===H.WGS84||o===H.CGCS2000&&a===H.PLATE_CARREE||o===H.SPHERICAL_ECEF||o===H.WEB_MERCATOR)){const t=Yt[o][H.LON_LAT],r=Yt[H.LON_LAT][a]
return!Object(u.k)(t)&&!Object(u.k)(r)&&(t(e,0,ee,0),r(ee,0,ne,0),o===H.SPHERICAL_ECEF?function(t,e,n){Ot(t,e,n),Object(_.x)(n,n)}(Qt*ee[0],Qt*ee[1],n):Object(_.m)(n),n[12]=ne[0],n[13]=ne[1],n[14]=ne[2],!0)}return!1}function Et(t){return t===H.SPHERICAL_ECEF||t===H.SPHERICAL_MARS_PCPF||t===H.SPHERICAL_MOON_PCPF}function Ot(t,e,n){const r=Math.sin(t),o=Math.cos(t),u=Math.sin(e),a=Math.cos(e),c=n
return c[0]=-r,c[4]=-u*o,c[8]=a*o,c[12]=0,c[1]=o,c[5]=-u*r,c[9]=a*r,c[13]=0,c[2]=0,c[6]=a,c[10]=u,c[14]=0,c[3]=0,c[7]=0,c[11]=0,c[15]=1,c}function Mt(t,e){return t?e.spatialReference===t?e.spatialReferenceId:(e.spatialReference=t,"metersPerUnit"in e&&(e.metersPerUnit=Object(c.g)(t,1)),t.wkt===P.a.wkt?e.spatialReferenceId=H.SPHERICAL_ECEF:Object(T.m)(t)?e.spatialReferenceId=H.WGS84:Object(T.p)(t)?e.spatialReferenceId=H.WEB_MERCATOR:Object(T.k)(t)?e.spatialReferenceId=H.PLATE_CARREE:t.wkt===P.d.wkt?e.spatialReferenceId=H.WGS84_ECEF:t.wkid===N.a.CGCS2000?e.spatialReferenceId=H.CGCS2000:t.wkt===P.b.wkt?e.spatialReferenceId=H.SPHERICAL_MARS_PCPF:t.wkt===P.c.wkt?e.spatialReferenceId=H.SPHERICAL_MOON_PCPF:Object(T.i)(t)?e.spatialReferenceId=H.GCSMARS2000:Object(T.j)(t)?e.spatialReferenceId=H.GCSMOON2000:e.spatialReferenceId=H.UNKNOWN):H.UNKNOWN}function St(t,e,n,r){t!==n&&(n[r++]=t[e++],n[r++]=t[e++],n[r]=t[e])}function pt(t,e,n,r){n[r++]=$t*(t[e++]/A.a.radius),n[r++]=$t*(Math.PI/2-2*Math.atan(Math.exp(-t[e++]/A.a.radius))),n[r]=t[e]}function Ct(t,e,n,r){pt(t,e,n,r),yt(n,r,n,r)}function ht(t,e,n,r){pt(t,e,n,r),Ht(n,r,n,r)}function At(t,e,n,r,u){const a=.4999999*Math.PI,c=Object(o.f)(Qt*t[e+1],-a,a),i=Math.sin(c)
n[r++]=Qt*t[e]*u.radius,n[r++]=u.halfSemiMajorAxis*Math.log((1+i)/(1-i)),n[r]=t[e+2]}function Rt(t,e,n,r){At(t,e,n,r,A.a)}(x=H||(H={}))[x.UNKNOWN=0]="UNKNOWN",x[x.SPHERICAL_ECEF=1]="SPHERICAL_ECEF",x[x.WGS84=2]="WGS84",x[x.WEB_MERCATOR=3]="WEB_MERCATOR",x[x.WGS84_ECEF=4]="WGS84_ECEF",x[x.CGCS2000=5]="CGCS2000",x[x.WGS84_COMPARABLE_LON_LAT=6]="WGS84_COMPARABLE_LON_LAT",x[x.SPHERICAL_MARS_PCPF=7]="SPHERICAL_MARS_PCPF",x[x.GCSMARS2000=8]="GCSMARS2000",x[x.SPHERICAL_MOON_PCPF=9]="SPHERICAL_MOON_PCPF",x[x.GCSMOON2000=10]="GCSMOON2000",x[x.LON_LAT=11]="LON_LAT",x[x.PLATE_CARREE=12]="PLATE_CARREE"
const dt=A.a.radius*Math.PI/180,Tt=180/(A.a.radius*Math.PI)
function Nt(t,e,n,r){n[r]=t[e]*dt,n[r+1]=t[e+1]*dt,n[r+2]=t[e+2]}function gt(t,e,n,r){n[r]=t[e]*Tt,n[r+1]=t[e+1]*Tt,n[r+2]=t[e+2]}function Lt(t,e,n,r){pt(t,e,n,r),Nt(n,r,n,r)}function bt(t){if(Object(u.k)(t))return!1
const e=Mt(t,Kt)
return!!Yt[e][H.WGS84_COMPARABLE_LON_LAT]}function Gt(t,e,n,r){const o=Math.cos(n)
t[0]=Math.cos(e)*o*r,t[1]=Math.sin(e)*o*r,t[2]=Math.sin(n)*r}function It(t,e,n,r,o){const u=o+t[e+2],a=Qt*t[e+1],c=Qt*t[e],i=Math.cos(a)
n[r++]=Math.cos(c)*i*u,n[r++]=Math.sin(c)*i*u,n[r]=Math.sin(a)*u}function mt(t,e,n,r){It(t,e,n,r,A.c.radius)}function jt(t,e,n,r){It(t,e,n,r,A.b.radius)}function yt(t,e,n,r){It(t,e,n,r,A.a.radius)}function Ft(t,e,n,r,u){const a=t[e],c=t[e+1],i=t[e+2],s=Math.sqrt(a*a+c*c+i*i),_=Object(o.d)(i/(0===s?1:s)),l=Math.atan2(c,a)
n[r++]=$t*l,n[r++]=$t*_,n[r]=s-u}function Wt(t,e,n,r){Ft(t,e,n,r,A.c.radius)}function wt(t,e,n,r){Ft(t,e,n,r,A.b.radius)}function kt(t,e,n,r){Ft(t,e,n,r,A.a.radius)}function Ut(t,e,n,r){kt(t,e,n,r),Rt(n,r,n,r)}function Dt(t,e,n,r){kt(t,e,n,r),Ht(n,r,n,r)}function Ht(t,e,n,r){!function(t,e,n,r,o){const u=Qt*t[e],a=Qt*t[e+1],c=t[e+2],i=Math.sin(a),s=Math.cos(a),_=o.radius/Math.sqrt(1-o.eccentricitySquared*i*i)
n[r++]=(_+c)*s*Math.cos(u),n[r++]=(_+c)*s*Math.sin(u),n[r++]=(_*(1-o.eccentricitySquared)+c)*i}(t,e,n,r,A.a)}function xt(t,e,n,r){const o=R.b,u=t[e],a=t[e+1],c=t[e+2]
let i,s,_,l,f,P,E,O,M,S,p,C,h,d,T,N,g,L,b,G,I
i=Math.abs(c),s=u*u+a*a,_=Math.sqrt(s),l=s+c*c,f=Math.sqrt(l),G=Math.atan2(a,u),P=c*c/l,E=s/l,d=o.a2/f,T=o.a3-o.a4/f,E>.3?(O=i/f*(1+E*(o.a1+d+P*T)/f),b=Math.asin(O),S=O*O,M=Math.sqrt(1-S)):(M=_/f*(1-P*(o.a5-d-E*T)/f),b=Math.acos(M),S=1-M*M,O=Math.sqrt(S)),p=1-A.a.eccentricitySquared*S,C=A.a.radius/Math.sqrt(p),h=o.a6*C,d=_-C*M,T=i-h*O,g=M*d+O*T,N=M*T-O*d,L=N/(h/p+g),b+=L,I=g+N*L/2,c<0&&(b=-b),n[r++]=$t*G,n[r++]=$t*b,n[r]=I}function Bt(t,e,n,r){xt(t,e,n,r),yt(n,r,n,r)}function vt(t,e,n,r){xt(t,e,n,r),Rt(n,r,n,r)}const Yt={[H.WGS84]:{[H.CGCS2000]:null,[H.GCSMARS2000]:null,[H.GCSMOON2000]:null,[H.LON_LAT]:St,[H.WGS84_COMPARABLE_LON_LAT]:St,[H.SPHERICAL_ECEF]:yt,[H.SPHERICAL_MARS_PCPF]:null,[H.SPHERICAL_MOON_PCPF]:null,[H.UNKNOWN]:null,[H.WEB_MERCATOR]:Rt,[H.PLATE_CARREE]:Nt,[H.WGS84]:St,[H.WGS84_ECEF]:Ht},[H.CGCS2000]:{[H.CGCS2000]:St,[H.GCSMARS2000]:null,[H.GCSMOON2000]:null,[H.LON_LAT]:St,[H.WGS84_COMPARABLE_LON_LAT]:St,[H.SPHERICAL_ECEF]:yt,[H.SPHERICAL_MARS_PCPF]:null,[H.SPHERICAL_MOON_PCPF]:null,[H.UNKNOWN]:null,[H.WEB_MERCATOR]:null,[H.PLATE_CARREE]:Nt,[H.WGS84]:null,[H.WGS84_ECEF]:Ht},[H.GCSMARS2000]:{[H.CGCS2000]:null,[H.GCSMARS2000]:St,[H.GCSMOON2000]:null,[H.LON_LAT]:St,[H.WGS84_COMPARABLE_LON_LAT]:null,[H.SPHERICAL_ECEF]:null,[H.SPHERICAL_MARS_PCPF]:jt,[H.SPHERICAL_MOON_PCPF]:null,[H.UNKNOWN]:null,[H.WEB_MERCATOR]:null,[H.PLATE_CARREE]:null,[H.WGS84]:null,[H.WGS84_ECEF]:null},[H.GCSMOON2000]:{[H.CGCS2000]:null,[H.GCSMARS2000]:null,[H.GCSMOON2000]:St,[H.LON_LAT]:St,[H.WGS84_COMPARABLE_LON_LAT]:null,[H.SPHERICAL_ECEF]:null,[H.SPHERICAL_MARS_PCPF]:null,[H.SPHERICAL_MOON_PCPF]:mt,[H.UNKNOWN]:null,[H.WEB_MERCATOR]:null,[H.PLATE_CARREE]:null,[H.WGS84]:null,[H.WGS84_ECEF]:null},[H.WEB_MERCATOR]:{[H.CGCS2000]:null,[H.GCSMARS2000]:null,[H.GCSMOON2000]:null,[H.LON_LAT]:pt,[H.WGS84_COMPARABLE_LON_LAT]:pt,[H.SPHERICAL_ECEF]:Ct,[H.SPHERICAL_MARS_PCPF]:null,[H.SPHERICAL_MOON_PCPF]:null,[H.UNKNOWN]:null,[H.WEB_MERCATOR]:St,[H.PLATE_CARREE]:Lt,[H.WGS84]:pt,[H.WGS84_ECEF]:ht},[H.WGS84_ECEF]:{[H.CGCS2000]:xt,[H.GCSMARS2000]:null,[H.GCSMOON2000]:null,[H.LON_LAT]:xt,[H.WGS84_COMPARABLE_LON_LAT]:xt,[H.SPHERICAL_ECEF]:Bt,[H.SPHERICAL_MARS_PCPF]:null,[H.SPHERICAL_MOON_PCPF]:null,[H.UNKNOWN]:null,[H.WEB_MERCATOR]:vt,[H.PLATE_CARREE]:function(t,e,n,r){xt(t,e,n,r),Nt(n,r,n,r)},[H.WGS84]:xt,[H.WGS84_ECEF]:St},[H.SPHERICAL_ECEF]:{[H.CGCS2000]:kt,[H.GCSMARS2000]:null,[H.GCSMOON2000]:null,[H.LON_LAT]:kt,[H.WGS84_COMPARABLE_LON_LAT]:kt,[H.SPHERICAL_ECEF]:St,[H.SPHERICAL_MARS_PCPF]:null,[H.SPHERICAL_MOON_PCPF]:null,[H.UNKNOWN]:null,[H.WEB_MERCATOR]:Ut,[H.PLATE_CARREE]:function(t,e,n,r){kt(t,e,n,r),Nt(n,r,n,r)},[H.WGS84]:kt,[H.WGS84_ECEF]:Dt},[H.SPHERICAL_MARS_PCPF]:{[H.CGCS2000]:null,[H.GCSMARS2000]:wt,[H.GCSMOON2000]:null,[H.LON_LAT]:wt,[H.WGS84_COMPARABLE_LON_LAT]:null,[H.SPHERICAL_ECEF]:null,[H.SPHERICAL_MARS_PCPF]:St,[H.SPHERICAL_MOON_PCPF]:null,[H.UNKNOWN]:null,[H.WEB_MERCATOR]:null,[H.PLATE_CARREE]:null,[H.WGS84]:null,[H.WGS84_ECEF]:null},[H.SPHERICAL_MOON_PCPF]:{[H.CGCS2000]:null,[H.GCSMARS2000]:null,[H.GCSMOON2000]:Wt,[H.LON_LAT]:Wt,[H.WGS84_COMPARABLE_LON_LAT]:null,[H.SPHERICAL_ECEF]:null,[H.SPHERICAL_MARS_PCPF]:null,[H.SPHERICAL_MOON_PCPF]:St,[H.UNKNOWN]:null,[H.WEB_MERCATOR]:null,[H.PLATE_CARREE]:null,[H.WGS84]:null,[H.WGS84_ECEF]:null},[H.UNKNOWN]:{[H.CGCS2000]:null,[H.GCSMARS2000]:null,[H.GCSMOON2000]:null,[H.LON_LAT]:null,[H.WGS84_COMPARABLE_LON_LAT]:null,[H.SPHERICAL_ECEF]:null,[H.SPHERICAL_MARS_PCPF]:null,[H.SPHERICAL_MOON_PCPF]:null,[H.UNKNOWN]:St,[H.WEB_MERCATOR]:null,[H.PLATE_CARREE]:null,[H.WGS84]:null,[H.WGS84_ECEF]:null},[H.LON_LAT]:{[H.CGCS2000]:St,[H.GCSMARS2000]:St,[H.GCSMOON2000]:St,[H.LON_LAT]:St,[H.WGS84_COMPARABLE_LON_LAT]:St,[H.SPHERICAL_ECEF]:yt,[H.SPHERICAL_MARS_PCPF]:jt,[H.SPHERICAL_MOON_PCPF]:mt,[H.UNKNOWN]:null,[H.WEB_MERCATOR]:Rt,[H.PLATE_CARREE]:Nt,[H.WGS84]:St,[H.WGS84_ECEF]:Ht},[H.WGS84_COMPARABLE_LON_LAT]:{[H.CGCS2000]:null,[H.GCSMARS2000]:null,[H.GCSMOON2000]:null,[H.LON_LAT]:St,[H.WGS84_COMPARABLE_LON_LAT]:St,[H.SPHERICAL_ECEF]:yt,[H.SPHERICAL_MARS_PCPF]:null,[H.SPHERICAL_MOON_PCPF]:null,[H.UNKNOWN]:null,[H.WEB_MERCATOR]:null,[H.PLATE_CARREE]:Nt,[H.WGS84]:St,[H.WGS84_ECEF]:Ht},[H.PLATE_CARREE]:{[H.CGCS2000]:gt,[H.GCSMARS2000]:null,[H.GCSMOON2000]:null,[H.LON_LAT]:gt,[H.WGS84_COMPARABLE_LON_LAT]:gt,[H.SPHERICAL_ECEF]:function(t,e,n,r){gt(t,e,n,r),yt(n,r,n,r)},[H.SPHERICAL_MARS_PCPF]:null,[H.SPHERICAL_MOON_PCPF]:null,[H.UNKNOWN]:null,[H.WEB_MERCATOR]:function(t,e,n,r){gt(t,e,n,r),Rt(n,r,n,r)},[H.PLATE_CARREE]:St,[H.WGS84]:gt,[H.WGS84_ECEF]:function(t,e,n,r){gt(t,e,n,r),Ht(n,r,n,r)}}}
function qt(t,e,n=zt()){return Object(u.k)(t)||Object(u.k)(e)?null:Xt(t,e,n).projector}function Xt(t,e,n){if(Object(u.k)(t)||Object(u.k)(e)||n.source.spatialReference===t&&n.dest.spatialReference===e)return n
const r=Mt(t,n.source),o=Mt(e,n.dest)
return r===H.UNKNOWN&&o===H.UNKNOWN?Object(T.d)(t,e)?n.projector=St:n.projector=null:n.projector=Yt[r][o],n}function zt(){return{source:{spatialReference:null,spatialReferenceId:H.UNKNOWN,metersPerUnit:1},dest:{spatialReference:null,spatialReferenceId:H.UNKNOWN,metersPerUnit:1},projector:St}}const Kt={spatialReference:null,spatialReferenceId:H.UNKNOWN},Zt={spatialReference:null,spatialReferenceId:H.UNKNOWN},Vt=zt(),Jt=zt(),Qt=Object(o.h)(1),$t=Object(o.q)(1),te=Object(f.f)(),ee=Object(f.f)(),ne=Object(f.f)(),re=Object(f.f)(),oe=Object(f.f)()},1029:function(t,e,n){"use strict"
n.d(e,"a",(function(){return A})),n.d(e,"b",(function(){return N})),n.d(e,"c",(function(){return C})),n.d(e,"d",(function(){return b})),n.d(e,"e",(function(){return _})),n.d(e,"f",(function(){return R})),n.d(e,"g",(function(){return u})),n.d(e,"h",(function(){return h})),n.d(e,"i",(function(){return E})),n.d(e,"j",(function(){return p})),n.d(e,"k",(function(){return L})),n.d(e,"l",(function(){return W})),n.d(e,"m",(function(){return c})),n.d(e,"n",(function(){return F})),n.d(e,"o",(function(){return P})),n.d(e,"p",(function(){return g})),n.d(e,"q",(function(){return l})),n.d(e,"r",(function(){return M})),n.d(e,"s",(function(){return S})),n.d(e,"t",(function(){return s})),n.d(e,"u",(function(){return G})),n.d(e,"v",(function(){return O})),n.d(e,"w",(function(){return a})),n.d(e,"x",(function(){return i})),n.d(e,"y",(function(){return m})),n.d(e,"z",(function(){return j})),n.d(e,"A",(function(){return f})),n.d(e,"B",(function(){return I})),n.d(e,"C",(function(){return k})),n.d(e,"D",(function(){return w}))
var r=n(981),o=n(1016)
function u(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function a(t,e,n,r,o,u,a,c,i,s,_,l,f,P,E,O,M){return t[0]=e,t[1]=n,t[2]=r,t[3]=o,t[4]=u,t[5]=a,t[6]=c,t[7]=i,t[8]=s,t[9]=_,t[10]=l,t[11]=f,t[12]=P,t[13]=E,t[14]=O,t[15]=M,t}function c(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function i(t,e){if(t===e){const n=e[1],r=e[2],o=e[3],u=e[6],a=e[7],c=e[11]
t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=n,t[6]=e[9],t[7]=e[13],t[8]=r,t[9]=u,t[11]=e[14],t[12]=o,t[13]=a,t[14]=c}else t[0]=e[0],t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=e[1],t[5]=e[5],t[6]=e[9],t[7]=e[13],t[8]=e[2],t[9]=e[6],t[10]=e[10],t[11]=e[14],t[12]=e[3],t[13]=e[7],t[14]=e[11],t[15]=e[15]
return t}function s(t,e){return _(t,e)||c(t),t}function _(t,e){const n=e[0],r=e[1],o=e[2],u=e[3],a=e[4],c=e[5],i=e[6],s=e[7],_=e[8],l=e[9],f=e[10],P=e[11],E=e[12],O=e[13],M=e[14],S=e[15],p=n*c-r*a,C=n*i-o*a,h=n*s-u*a,A=r*i-o*c,R=r*s-u*c,d=o*s-u*i,T=_*O-l*E,N=_*M-f*E,g=_*S-P*E,L=l*M-f*O,b=l*S-P*O,G=f*S-P*M
let I=p*G-C*b+h*L+A*g-R*N+d*T
return I?(I=1/I,t[0]=(c*G-i*b+s*L)*I,t[1]=(o*b-r*G-u*L)*I,t[2]=(O*d-M*R+S*A)*I,t[3]=(f*R-l*d-P*A)*I,t[4]=(i*g-a*G-s*N)*I,t[5]=(n*G-o*g+u*N)*I,t[6]=(M*h-E*d-S*C)*I,t[7]=(_*d-f*h+P*C)*I,t[8]=(a*b-c*g+s*T)*I,t[9]=(r*g-n*b-u*T)*I,t[10]=(E*R-O*h+S*p)*I,t[11]=(l*h-_*R-P*p)*I,t[12]=(c*N-a*L-i*T)*I,t[13]=(n*L-r*N+o*T)*I,t[14]=(O*C-E*A-M*p)*I,t[15]=(_*A-l*C+f*p)*I,t):null}function l(t,e,n){const r=e[0],o=e[1],u=e[2],a=e[3],c=e[4],i=e[5],s=e[6],_=e[7],l=e[8],f=e[9],P=e[10],E=e[11],O=e[12],M=e[13],S=e[14],p=e[15]
let C=n[0],h=n[1],A=n[2],R=n[3]
return t[0]=C*r+h*c+A*l+R*O,t[1]=C*o+h*i+A*f+R*M,t[2]=C*u+h*s+A*P+R*S,t[3]=C*a+h*_+A*E+R*p,C=n[4],h=n[5],A=n[6],R=n[7],t[4]=C*r+h*c+A*l+R*O,t[5]=C*o+h*i+A*f+R*M,t[6]=C*u+h*s+A*P+R*S,t[7]=C*a+h*_+A*E+R*p,C=n[8],h=n[9],A=n[10],R=n[11],t[8]=C*r+h*c+A*l+R*O,t[9]=C*o+h*i+A*f+R*M,t[10]=C*u+h*s+A*P+R*S,t[11]=C*a+h*_+A*E+R*p,C=n[12],h=n[13],A=n[14],R=n[15],t[12]=C*r+h*c+A*l+R*O,t[13]=C*o+h*i+A*f+R*M,t[14]=C*u+h*s+A*P+R*S,t[15]=C*a+h*_+A*E+R*p,t}function f(t,e,n){const r=n[0],o=n[1],u=n[2]
if(e===t)t[12]=e[0]*r+e[4]*o+e[8]*u+e[12],t[13]=e[1]*r+e[5]*o+e[9]*u+e[13],t[14]=e[2]*r+e[6]*o+e[10]*u+e[14],t[15]=e[3]*r+e[7]*o+e[11]*u+e[15]
else{const n=e[0],a=e[1],c=e[2],i=e[3],s=e[4],_=e[5],l=e[6],f=e[7],P=e[8],E=e[9],O=e[10],M=e[11]
t[0]=n,t[1]=a,t[2]=c,t[3]=i,t[4]=s,t[5]=_,t[6]=l,t[7]=f,t[8]=P,t[9]=E,t[10]=O,t[11]=M,t[12]=n*r+s*o+P*u+e[12],t[13]=a*r+_*o+E*u+e[13],t[14]=c*r+l*o+O*u+e[14],t[15]=i*r+f*o+M*u+e[15]}return t}function P(t,e,n){const r=n[0],o=n[1],u=n[2]
return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t[4]=e[4]*o,t[5]=e[5]*o,t[6]=e[6]*o,t[7]=e[7]*o,t[8]=e[8]*u,t[9]=e[9]*u,t[10]=e[10]*u,t[11]=e[11]*u,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function E(t,e,n,r){let u,a,c,i,s,_,l,f,P,E,O,M,S,p,C,h,A,R,d,T,N,g,L,b,G=r[0],I=r[1],m=r[2],j=Math.sqrt(G*G+I*I+m*m)
return j<Object(o.c)()?null:(j=1/j,G*=j,I*=j,m*=j,u=Math.sin(n),a=Math.cos(n),c=1-a,i=e[0],s=e[1],_=e[2],l=e[3],f=e[4],P=e[5],E=e[6],O=e[7],M=e[8],S=e[9],p=e[10],C=e[11],h=G*G*c+a,A=I*G*c+m*u,R=m*G*c-I*u,d=G*I*c-m*u,T=I*I*c+a,N=m*I*c+G*u,g=G*m*c+I*u,L=I*m*c-G*u,b=m*m*c+a,t[0]=i*h+f*A+M*R,t[1]=s*h+P*A+S*R,t[2]=_*h+E*A+p*R,t[3]=l*h+O*A+C*R,t[4]=i*d+f*T+M*N,t[5]=s*d+P*T+S*N,t[6]=_*d+E*T+p*N,t[7]=l*d+O*T+C*N,t[8]=i*g+f*L+M*b,t[9]=s*g+P*L+S*b,t[10]=_*g+E*L+p*b,t[11]=l*g+O*L+C*b,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)}function O(t,e,n){const r=Math.sin(n),o=Math.cos(n),u=e[4],a=e[5],c=e[6],i=e[7],s=e[8],_=e[9],l=e[10],f=e[11]
return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=u*o+s*r,t[5]=a*o+_*r,t[6]=c*o+l*r,t[7]=i*o+f*r,t[8]=s*o-u*r,t[9]=_*o-a*r,t[10]=l*o-c*r,t[11]=f*o-i*r,t}function M(t,e,n){const r=Math.sin(n),o=Math.cos(n),u=e[0],a=e[1],c=e[2],i=e[3],s=e[8],_=e[9],l=e[10],f=e[11]
return e!==t&&(t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=u*o-s*r,t[1]=a*o-_*r,t[2]=c*o-l*r,t[3]=i*o-f*r,t[8]=u*r+s*o,t[9]=a*r+_*o,t[10]=c*r+l*o,t[11]=i*r+f*o,t}function S(t,e,n){const r=Math.sin(n),o=Math.cos(n),u=e[0],a=e[1],c=e[2],i=e[3],s=e[4],_=e[5],l=e[6],f=e[7]
return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=u*o+s*r,t[1]=a*o+_*r,t[2]=c*o+l*r,t[3]=i*o+f*r,t[4]=s*o-u*r,t[5]=_*o-a*r,t[6]=l*o-c*r,t[7]=f*o-i*r,t}function p(t,e){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t}function C(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function h(t,e,n){if(0===e)return c(t)
let r,u,a,i=n[0],s=n[1],_=n[2],l=Math.sqrt(i*i+s*s+_*_)
return l<Object(o.c)()?null:(l=1/l,i*=l,s*=l,_*=l,r=Math.sin(e),u=Math.cos(e),a=1-u,t[0]=i*i*a+u,t[1]=s*i*a+_*r,t[2]=_*i*a-s*r,t[3]=0,t[4]=i*s*a-_*r,t[5]=s*s*a+u,t[6]=_*s*a+i*r,t[7]=0,t[8]=i*_*a+s*r,t[9]=s*_*a-i*r,t[10]=_*_*a+u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)}function A(t,e){const n=Math.sin(e),r=Math.cos(e)
return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=n,t[7]=0,t[8]=0,t[9]=-n,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function R(t,e){const n=Math.sin(e),r=Math.cos(e)
return t[0]=r,t[1]=n,t[2]=0,t[3]=0,t[4]=-n,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function d(t,e,n){const r=e[0],o=e[1],u=e[2],a=e[3],c=r+r,i=o+o,s=u+u,_=r*c,l=r*i,f=r*s,P=o*i,E=o*s,O=u*s,M=a*c,S=a*i,p=a*s
return t[0]=1-(P+O),t[1]=l+p,t[2]=f-S,t[3]=0,t[4]=l-p,t[5]=1-(_+O),t[6]=E+M,t[7]=0,t[8]=f+S,t[9]=E-M,t[10]=1-(_+P),t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t}const T=Object(r.f)()
function N(t,e){return t[0]=e[12],t[1]=e[13],t[2]=e[14],t}function g(t,e){const n=e[0],r=e[1],o=e[2],u=e[4],a=e[5],c=e[6],i=e[8],s=e[9],_=e[10]
return t[0]=Math.sqrt(n*n+r*r+o*o),t[1]=Math.sqrt(u*u+a*a+c*c),t[2]=Math.sqrt(i*i+s*s+_*_),t}function L(t,e,n,r){const o=e[0],u=e[1],a=e[2],c=e[3],i=o+o,s=u+u,_=a+a,l=o*i,f=o*s,P=o*_,E=u*s,O=u*_,M=a*_,S=c*i,p=c*s,C=c*_,h=r[0],A=r[1],R=r[2]
return t[0]=(1-(E+M))*h,t[1]=(f+C)*h,t[2]=(P-p)*h,t[3]=0,t[4]=(f-C)*A,t[5]=(1-(l+M))*A,t[6]=(O+S)*A,t[7]=0,t[8]=(P+p)*R,t[9]=(O-S)*R,t[10]=(1-(l+E))*R,t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t}function b(t,e){const n=e[0],r=e[1],o=e[2],u=e[3],a=n+n,c=r+r,i=o+o,s=n*a,_=r*a,l=r*c,f=o*a,P=o*c,E=o*i,O=u*a,M=u*c,S=u*i
return t[0]=1-l-E,t[1]=_+S,t[2]=f-M,t[3]=0,t[4]=_-S,t[5]=1-s-E,t[6]=P+O,t[7]=0,t[8]=f+M,t[9]=P-O,t[10]=1-s-l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function G(t,e,n,r,o,u,a){const c=1/(n-e),i=1/(o-r),s=1/(u-a)
return t[0]=2*u*c,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*u*i,t[6]=0,t[7]=0,t[8]=(n+e)*c,t[9]=(o+r)*i,t[10]=(a+u)*s,t[11]=-1,t[12]=0,t[13]=0,t[14]=a*u*2*s,t[15]=0,t}function I(t,e,n,r,o,u,a){const c=1/(e-n),i=1/(r-o),s=1/(u-a)
return t[0]=-2*c,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*i,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*s,t[11]=0,t[12]=(e+n)*c,t[13]=(o+r)*i,t[14]=(a+u)*s,t[15]=1,t}function m(t,e,n,r){let u,a,i,s,_,l,f,P,E,O
const M=e[0],S=e[1],p=e[2],C=r[0],h=r[1],A=r[2],R=n[0],d=n[1],T=n[2],N=Object(o.c)()
return Math.abs(M-R)<N&&Math.abs(S-d)<N&&Math.abs(p-T)<N?c(t):(f=M-R,P=S-d,E=p-T,O=1/Math.sqrt(f*f+P*P+E*E),f*=O,P*=O,E*=O,u=h*E-A*P,a=A*f-C*E,i=C*P-h*f,O=Math.sqrt(u*u+a*a+i*i),O?(O=1/O,u*=O,a*=O,i*=O):(u=0,a=0,i=0),s=P*i-E*a,_=E*u-f*i,l=f*a-P*u,O=Math.sqrt(s*s+_*_+l*l),O?(O=1/O,s*=O,_*=O,l*=O):(s=0,_=0,l=0),t[0]=u,t[1]=s,t[2]=f,t[3]=0,t[4]=a,t[5]=_,t[6]=P,t[7]=0,t[8]=i,t[9]=l,t[10]=E,t[11]=0,t[12]=-(u*M+a*S+i*p),t[13]=-(s*M+_*S+l*p),t[14]=-(f*M+P*S+E*p),t[15]=1,t)}function j(t,e,n,r){const o=e[0],u=e[1],a=e[2],c=r[0],i=r[1],s=r[2]
let _=o-n[0],l=u-n[1],f=a-n[2],P=_*_+l*l+f*f
P>0&&(P=1/Math.sqrt(P),_*=P,l*=P,f*=P)
let E=i*f-s*l,O=s*_-c*f,M=c*l-i*_
return P=E*E+O*O+M*M,P>0&&(P=1/Math.sqrt(P),E*=P,O*=P,M*=P),t[0]=E,t[1]=O,t[2]=M,t[3]=0,t[4]=l*M-f*O,t[5]=f*E-_*M,t[6]=_*O-l*E,t[7]=0,t[8]=_,t[9]=l,t[10]=f,t[11]=0,t[12]=o,t[13]=u,t[14]=a,t[15]=1,t}function y(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t[3]=e[3]-n[3],t[4]=e[4]-n[4],t[5]=e[5]-n[5],t[6]=e[6]-n[6],t[7]=e[7]-n[7],t[8]=e[8]-n[8],t[9]=e[9]-n[9],t[10]=e[10]-n[10],t[11]=e[11]-n[11],t[12]=e[12]-n[12],t[13]=e[13]-n[13],t[14]=e[14]-n[14],t[15]=e[15]-n[15],t}function F(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]&&t[4]===e[4]&&t[5]===e[5]&&t[6]===e[6]&&t[7]===e[7]&&t[8]===e[8]&&t[9]===e[9]&&t[10]===e[10]&&t[11]===e[11]&&t[12]===e[12]&&t[13]===e[13]&&t[14]===e[14]&&t[15]===e[15]}function W(t,e){if(t===e)return!0
const n=t[0],r=t[1],u=t[2],a=t[3],c=t[4],i=t[5],s=t[6],_=t[7],l=t[8],f=t[9],P=t[10],E=t[11],O=t[12],M=t[13],S=t[14],p=t[15],C=e[0],h=e[1],A=e[2],R=e[3],d=e[4],T=e[5],N=e[6],g=e[7],L=e[8],b=e[9],G=e[10],I=e[11],m=e[12],j=e[13],y=e[14],F=e[15],W=Object(o.c)()
return Math.abs(n-C)<=W*Math.max(1,Math.abs(n),Math.abs(C))&&Math.abs(r-h)<=W*Math.max(1,Math.abs(r),Math.abs(h))&&Math.abs(u-A)<=W*Math.max(1,Math.abs(u),Math.abs(A))&&Math.abs(a-R)<=W*Math.max(1,Math.abs(a),Math.abs(R))&&Math.abs(c-d)<=W*Math.max(1,Math.abs(c),Math.abs(d))&&Math.abs(i-T)<=W*Math.max(1,Math.abs(i),Math.abs(T))&&Math.abs(s-N)<=W*Math.max(1,Math.abs(s),Math.abs(N))&&Math.abs(_-g)<=W*Math.max(1,Math.abs(_),Math.abs(g))&&Math.abs(l-L)<=W*Math.max(1,Math.abs(l),Math.abs(L))&&Math.abs(f-b)<=W*Math.max(1,Math.abs(f),Math.abs(b))&&Math.abs(P-G)<=W*Math.max(1,Math.abs(P),Math.abs(G))&&Math.abs(E-I)<=W*Math.max(1,Math.abs(E),Math.abs(I))&&Math.abs(O-m)<=W*Math.max(1,Math.abs(O),Math.abs(m))&&Math.abs(M-j)<=W*Math.max(1,Math.abs(M),Math.abs(j))&&Math.abs(S-y)<=W*Math.max(1,Math.abs(S),Math.abs(y))&&Math.abs(p-F)<=W*Math.max(1,Math.abs(p),Math.abs(F))}function w(t){const e=Object(o.c)(),n=t[0],r=t[1],u=t[2],a=t[4],c=t[5],i=t[6],s=t[8],_=t[9],l=t[10]
return Math.abs(1-(n*n+a*a+s*s))<=e&&Math.abs(1-(r*r+c*c+_*_))<=e&&Math.abs(1-(u*u+i*i+l*l))<=e}function k(t){return 1===t[0]&&0===t[1]&&0===t[2]&&0===t[4]&&1===t[5]&&0===t[6]&&0===t[8]&&0===t[9]&&1===t[10]}const U=l,D=y
Object.freeze(Object.defineProperty({__proto__:null,add:function(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t[3]=e[3]+n[3],t[4]=e[4]+n[4],t[5]=e[5]+n[5],t[6]=e[6]+n[6],t[7]=e[7]+n[7],t[8]=e[8]+n[8],t[9]=e[9]+n[9],t[10]=e[10]+n[10],t[11]=e[11]+n[11],t[12]=e[12]+n[12],t[13]=e[13]+n[13],t[14]=e[14]+n[14],t[15]=e[15]+n[15],t},adjoint:function(t,e){const n=e[0],r=e[1],o=e[2],u=e[3],a=e[4],c=e[5],i=e[6],s=e[7],_=e[8],l=e[9],f=e[10],P=e[11],E=e[12],O=e[13],M=e[14],S=e[15]
return t[0]=c*(f*S-P*M)-l*(i*S-s*M)+O*(i*P-s*f),t[1]=-(r*(f*S-P*M)-l*(o*S-u*M)+O*(o*P-u*f)),t[2]=r*(i*S-s*M)-c*(o*S-u*M)+O*(o*s-u*i),t[3]=-(r*(i*P-s*f)-c*(o*P-u*f)+l*(o*s-u*i)),t[4]=-(a*(f*S-P*M)-_*(i*S-s*M)+E*(i*P-s*f)),t[5]=n*(f*S-P*M)-_*(o*S-u*M)+E*(o*P-u*f),t[6]=-(n*(i*S-s*M)-a*(o*S-u*M)+E*(o*s-u*i)),t[7]=n*(i*P-s*f)-a*(o*P-u*f)+_*(o*s-u*i),t[8]=a*(l*S-P*O)-_*(c*S-s*O)+E*(c*P-s*l),t[9]=-(n*(l*S-P*O)-_*(r*S-u*O)+E*(r*P-u*l)),t[10]=n*(c*S-s*O)-a*(r*S-u*O)+E*(r*s-u*c),t[11]=-(n*(c*P-s*l)-a*(r*P-u*l)+_*(r*s-u*c)),t[12]=-(a*(l*M-f*O)-_*(c*M-i*O)+E*(c*f-i*l)),t[13]=n*(l*M-f*O)-_*(r*M-o*O)+E*(r*f-o*l),t[14]=-(n*(c*M-i*O)-a*(r*M-o*O)+E*(r*i-o*c)),t[15]=n*(c*f-i*l)-a*(r*f-o*l)+_*(r*i-o*c),t},copy:u,determinant:function(t){const e=t[0],n=t[1],r=t[2],o=t[3],u=t[4],a=t[5],c=t[6],i=t[7],s=t[8],_=t[9],l=t[10],f=t[11],P=t[12],E=t[13],O=t[14],M=t[15]
return(e*a-n*u)*(l*M-f*O)-(e*c-r*u)*(_*M-f*E)+(e*i-o*u)*(_*O-l*E)+(n*c-r*a)*(s*M-f*P)-(n*i-o*a)*(s*O-l*P)+(r*i-o*c)*(s*E-_*P)},equals:W,exactEquals:F,frob:function(t){return Math.sqrt(t[0]**2+t[1]**2+t[2]**2+t[3]**2+t[4]**2+t[5]**2+t[6]**2+t[7]**2+t[8]**2+t[9]**2+t[10]**2+t[11]**2+t[12]**2+t[13]**2+t[14]**2+t[15]**2)},fromQuat:b,fromQuat2:function(t,e){const n=T,r=-e[0],o=-e[1],u=-e[2],a=e[3],c=e[4],i=e[5],s=e[6],_=e[7],l=r*r+o*o+u*u+a*a
return l>0?(n[0]=2*(c*a+_*r+i*u-s*o)/l,n[1]=2*(i*a+_*o+s*r-c*u)/l,n[2]=2*(s*a+_*u+c*o-i*r)/l):(n[0]=2*(c*a+_*r+i*u-s*o),n[1]=2*(i*a+_*o+s*r-c*u),n[2]=2*(s*a+_*u+c*o-i*r)),d(t,e,n),t},fromRotation:h,fromRotationTranslation:d,fromRotationTranslationScale:L,fromRotationTranslationScaleOrigin:function(t,e,n,r,o){const u=e[0],a=e[1],c=e[2],i=e[3],s=u+u,_=a+a,l=c+c,f=u*s,P=u*_,E=u*l,O=a*_,M=a*l,S=c*l,p=i*s,C=i*_,h=i*l,A=r[0],R=r[1],d=r[2],T=o[0],N=o[1],g=o[2],L=(1-(O+S))*A,b=(P+h)*A,G=(E-C)*A,I=(P-h)*R,m=(1-(f+S))*R,j=(M+p)*R,y=(E+C)*d,F=(M-p)*d,W=(1-(f+O))*d
return t[0]=L,t[1]=b,t[2]=G,t[3]=0,t[4]=I,t[5]=m,t[6]=j,t[7]=0,t[8]=y,t[9]=F,t[10]=W,t[11]=0,t[12]=n[0]+T-(L*T+I*N+y*g),t[13]=n[1]+N-(b*T+m*N+F*g),t[14]=n[2]+g-(G*T+j*N+W*g),t[15]=1,t},fromScaling:C,fromTranslation:p,fromXRotation:A,fromYRotation:function(t,e){const n=Math.sin(e),r=Math.cos(e)
return t[0]=r,t[1]=0,t[2]=-n,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=n,t[9]=0,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},fromZRotation:R,frustum:G,getRotation:function(t,e){const n=e[0]+e[5]+e[10]
let r=0
return n>0?(r=2*Math.sqrt(n+1),t[3]=.25*r,t[0]=(e[6]-e[9])/r,t[1]=(e[8]-e[2])/r,t[2]=(e[1]-e[4])/r):e[0]>e[5]&&e[0]>e[10]?(r=2*Math.sqrt(1+e[0]-e[5]-e[10]),t[3]=(e[6]-e[9])/r,t[0]=.25*r,t[1]=(e[1]+e[4])/r,t[2]=(e[8]+e[2])/r):e[5]>e[10]?(r=2*Math.sqrt(1+e[5]-e[0]-e[10]),t[3]=(e[8]-e[2])/r,t[0]=(e[1]+e[4])/r,t[1]=.25*r,t[2]=(e[6]+e[9])/r):(r=2*Math.sqrt(1+e[10]-e[0]-e[5]),t[3]=(e[1]-e[4])/r,t[0]=(e[8]+e[2])/r,t[1]=(e[6]+e[9])/r,t[2]=.25*r),t},getScaling:g,getTranslation:N,hasIdentityRotation:k,identity:c,invert:_,invertOrIdentity:s,isOrthoNormal:w,lookAt:m,mul:U,multiply:l,multiplyScalar:function(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t[4]=e[4]*n,t[5]=e[5]*n,t[6]=e[6]*n,t[7]=e[7]*n,t[8]=e[8]*n,t[9]=e[9]*n,t[10]=e[10]*n,t[11]=e[11]*n,t[12]=e[12]*n,t[13]=e[13]*n,t[14]=e[14]*n,t[15]=e[15]*n,t},multiplyScalarAndAdd:function(t,e,n,r){return t[0]=e[0]+n[0]*r,t[1]=e[1]+n[1]*r,t[2]=e[2]+n[2]*r,t[3]=e[3]+n[3]*r,t[4]=e[4]+n[4]*r,t[5]=e[5]+n[5]*r,t[6]=e[6]+n[6]*r,t[7]=e[7]+n[7]*r,t[8]=e[8]+n[8]*r,t[9]=e[9]+n[9]*r,t[10]=e[10]+n[10]*r,t[11]=e[11]+n[11]*r,t[12]=e[12]+n[12]*r,t[13]=e[13]+n[13]*r,t[14]=e[14]+n[14]*r,t[15]=e[15]+n[15]*r,t},ortho:I,perspective:function(t,e,n,r,o){const u=1/Math.tan(e/2)
let a
return t[0]=u/n,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=u,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=o&&o!==1/0?(a=1/(r-o),t[10]=(o+r)*a,t[14]=2*o*r*a):(t[10]=-1,t[14]=-2*r),t},perspectiveFromFieldOfView:function(t,e,n,r){const o=Math.tan(e.upDegrees*Math.PI/180),u=Math.tan(e.downDegrees*Math.PI/180),a=Math.tan(e.leftDegrees*Math.PI/180),c=Math.tan(e.rightDegrees*Math.PI/180),i=2/(a+c),s=2/(o+u)
return t[0]=i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=s,t[6]=0,t[7]=0,t[8]=-(a-c)*i*.5,t[9]=(o-u)*s*.5,t[10]=r/(n-r),t[11]=-1,t[12]=0,t[13]=0,t[14]=r*n/(n-r),t[15]=0,t},rotate:E,rotateX:O,rotateY:M,rotateZ:S,scale:P,set:a,str:function(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"},sub:D,subtract:y,targetTo:j,translate:f,transpose:i},Symbol.toStringTag,{value:"Module"}))},2251:function(t,e,n){"use strict"
n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return _})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return M})),n.d(e,"e",(function(){return c})),n.d(e,"f",(function(){return A})),n.d(e,"g",(function(){return i})),n.d(e,"h",(function(){return b}))
var r=n(1019),o=n(235)
let u,a=null
function c(){return!!a}function i(){return u||(u=Promise.all([n.e(757),n.e(471)]).then(n.bind(null,2914)).then(t=>t.p).then(({default:t})=>t({locateFile:t=>Object(r.b)("esri/geometry/support/"+t)})).then(t=>{d(t)}),u)}var s,_,l,f
!function(t){function e(t,e,n){a.ensureCache.prepare()
const r=g(n),o=n===r,u=a.ensureFloat64(r),c=a._pe_geog_to_proj(a.getPointer(t),e,u)
return c&&L(n,e,u,o),c}function n(t,e,n){return r(t,e,n,0)}function r(t,e,n,r){a.ensureCache.prepare()
const o=g(n),u=n===o,c=a.ensureFloat64(o),i=a._pe_proj_to_geog_center(a.getPointer(t),e,c,r)
return i&&L(n,e,c,u),i}t.geogToProj=e,t.projGeog=function(t,r,o,u){switch(u){case _.PE_TRANSFORM_P_TO_G:return n(t,r,o)
case _.PE_TRANSFORM_G_TO_P:return e(t,r,o)}return 0},t.projToGeog=n,t.projToGeogCenter=r}(s||(s={})),(f=_||(_={})).init=function(){f.PE_BUFFER_MAX=a.PeDefs.prototype.PE_BUFFER_MAX,f.PE_NAME_MAX=a.PeDefs.prototype.PE_NAME_MAX,f.PE_MGRS_MAX=a.PeDefs.prototype.PE_MGRS_MAX,f.PE_USNG_MAX=a.PeDefs.prototype.PE_USNG_MAX,f.PE_DD_MAX=a.PeDefs.prototype.PE_DD_MAX,f.PE_DDM_MAX=a.PeDefs.prototype.PE_DDM_MAX,f.PE_DMS_MAX=a.PeDefs.prototype.PE_DMS_MAX,f.PE_UTM_MAX=a.PeDefs.prototype.PE_UTM_MAX,f.PE_PARM_MAX=a.PeDefs.prototype.PE_PARM_MAX,f.PE_TYPE_NONE=a.PeDefs.prototype.PE_TYPE_NONE,f.PE_TYPE_GEOGCS=a.PeDefs.prototype.PE_TYPE_GEOGCS,f.PE_TYPE_PROJCS=a.PeDefs.prototype.PE_TYPE_PROJCS,f.PE_TYPE_GEOGTRAN=a.PeDefs.prototype.PE_TYPE_GEOGTRAN,f.PE_TYPE_COORDSYS=a.PeDefs.prototype.PE_TYPE_COORDSYS,f.PE_TYPE_UNIT=a.PeDefs.prototype.PE_TYPE_UNIT,f.PE_TYPE_LINUNIT=a.PeDefs.prototype.PE_TYPE_LINUNIT,f.PE_STR_OPTS_NONE=a.PeDefs.prototype.PE_STR_OPTS_NONE,f.PE_STR_AUTH_NONE=a.PeDefs.prototype.PE_STR_AUTH_NONE,f.PE_STR_AUTH_TOP=a.PeDefs.prototype.PE_STR_AUTH_TOP,f.PE_STR_NAME_CANON=a.PeDefs.prototype.PE_STR_NAME_CANON,f.PE_PARM_X0=a.PeDefs.prototype.PE_PARM_X0,f.PE_PARM_ND=a.PeDefs.prototype.PE_PARM_ND,f.PE_TRANSFORM_1_TO_2=a.PeDefs.prototype.PE_TRANSFORM_1_TO_2,f.PE_TRANSFORM_2_TO_1=a.PeDefs.prototype.PE_TRANSFORM_2_TO_1,f.PE_TRANSFORM_P_TO_G=a.PeDefs.prototype.PE_TRANSFORM_P_TO_G,f.PE_TRANSFORM_G_TO_P=a.PeDefs.prototype.PE_TRANSFORM_G_TO_P,f.PE_HORIZON_RECT=a.PeDefs.prototype.PE_HORIZON_RECT,f.PE_HORIZON_POLY=a.PeDefs.prototype.PE_HORIZON_POLY,f.PE_HORIZON_LINE=a.PeDefs.prototype.PE_HORIZON_LINE,f.PE_HORIZON_DELTA=a.PeDefs.prototype.PE_HORIZON_DELTA},function(t){const e={},n={},r=t=>{if(t){const e=t.getType()
switch(e){case _.PE_TYPE_GEOGCS:t=a.castObject(t,a.PeGeogcs)
break
case _.PE_TYPE_PROJCS:t=a.castObject(t,a.PeProjcs)
break
case _.PE_TYPE_GEOGTRAN:t=a.castObject(t,a.PeGeogtran)
break
default:e&_.PE_TYPE_UNIT&&(t=a.castObject(t,a.PeUnit))}}return t}
function o(t,n){let o=null,u=e[t]
if(u||(u={},e[t]=u),u.hasOwnProperty(String(n)))o=u[n]
else{const e=a.PeFactory.prototype.factoryByType(t,n)
a.compare(e,a.NULL)||(o=e,u[n]=o)}return o=r(o),o}t.initialize=function(){a.PeFactory.prototype.initialize(null)},t.coordsys=function(t){return o(_.PE_TYPE_COORDSYS,t)},t.factoryByType=o,t.fromString=function(t,e){let o=null,u=n[t]
if(u||(u={},n[t]=u),u.hasOwnProperty(e))o=u[e]
else{const n=a.PeFactory.prototype.fromString(t,e)
a.compare(n,a.NULL)||(o=n,u[e]=o)}return o=r(o),o},t.geogcs=function(t){return o(_.PE_TYPE_GEOGCS,t)},t.geogtran=function(t){return o(_.PE_TYPE_GEOGTRAN,t)},t.getCode=function(t){return a.PeFactory.prototype.getCode(t)},t.projcs=function(t){return o(_.PE_TYPE_PROJCS,t)},t.unit=function(t){return o(_.PE_TYPE_UNIT,t)}}(l||(l={}))
let P=null
var E,O,M,S,p,C,h,A,R
function d(t){function e(t,e,n){t[e]=n(t[e])}a=t,_.init(),E.init(),p.init(),h.init(),A.init(),P=class extends a.PeGCSExtent{destroy(){a.destroy(this)}}
const n=[a.PeDatum,a.PeGeogcs,a.PeGeogtran,a.PeObject,a.PeParameter,a.PePrimem,a.PeProjcs,a.PeSpheroid,a.PeUnit]
for(const t of n)e(t.prototype,"getName",t=>function(){return t.call(this,new Array(_.PE_NAME_MAX))})
for(const t of[a.PeGeogtran,a.PeProjcs])e(t.prototype,"getParameters",t=>function(){const e=new Array(_.PE_PARM_MAX)
let n=t.call(this)
for(let t=0;t<e.length;t++){const r=a.getValue(n,"*")
e[t]=r?a.wrapPointer(r,a.PeParameter):null,n+=Int32Array.BYTES_PER_ELEMENT}return e})
e(a.PeHorizon.prototype,"getCoord",t=>function(){const e=this.getSize()
if(!e)return null
const n=[]
return L(n,e,t.call(this)),n}),e(a.PeGTlistExtendedEntry.prototype,"getEntries",t=>{const e=a._pe_getPeGTlistExtendedGTsSize()
return function(){let n=null
const r=t.call(this)
if(!a.compare(r,a.NULL)){n=[r]
const t=this.getSteps()
if(t>1){const o=a.getPointer(r)
for(let r=1;r<t;r++)n.push(a.wrapPointer(o+e*r,a.PeGTlistExtendedGTs))}}return n}})
const r=a._pe_getPeHorizonSize(),o=t=>function(){let e=this._cache
if(e||(e=new Map,this._cache=e),e.has(t))return e.get(t)
let n=null
const o=t.call(this)
if(!a.compare(o,a.NULL)){n=[o]
const t=o.getNump()
if(t>1){const e=a.getPointer(o)
for(let o=1;o<t;o++)n.push(a.wrapPointer(e+r*o,a.PeHorizon))}}return e.set(t,n),n}
e(a.PeProjcs.prototype,"horizonGcsGenerate",o),e(a.PeProjcs.prototype,"horizonPcsGenerate",o),a.PeObject.prototype.toString=function(t=_.PE_STR_OPTS_NONE){a.ensureCache.prepare()
const e=a.getPointer(this),n=a.ensureInt8(new Array(_.PE_BUFFER_MAX))
return a.UTF8ToString(a._pe_object_to_string_ext(e,t,n))}}function T(t){if(!t)return
const e=a.getClass(t)
if(!e)return
const n=a.getCache(e)
if(!n)return
const r=a.getPointer(t)
r&&delete n[r]}function N(t,e){const n=[],r=new Array(e)
for(let e=0;e<t;e++)n.push(a.ensureInt8(r))
return n}function g(t){let e
return Array.isArray(t[0])?(e=[],t.forEach(t=>{e.push(t[0],t[1])})):e=t,e}function L(t,e,n,r=!1){if(r)for(let r=0;r<2*e;r++)t[r]=a.getValue(n+r*Float64Array.BYTES_PER_ELEMENT,"double")
else{const r=0===t.length
for(let o=0;o<e;o++)r&&(t[o]=new Array(2)),t[o][0]=a.getValue(n,"double"),t[o][1]=a.getValue(n+Float64Array.BYTES_PER_ELEMENT,"double"),n+=2*Float64Array.BYTES_PER_ELEMENT}}!function(t){let e
t.init=function(){t.PE_GTLIST_OPTS_COMMON=a.PeGTlistExtended.prototype.PE_GTLIST_OPTS_COMMON,e=a._pe_getPeGTlistExtendedEntrySize()},t.getGTlist=function(t,n,r,o,u,c){let i=null
const s=new a.PeInteger(c)
try{const _=a.PeGTlistExtended.prototype.getGTlist(t,n,r,o,u,s)
if((c=s.val)&&(i=[_],c>1)){const t=a.getPointer(_)
for(let n=1;n<c;n++)i.push(a.wrapPointer(t+e*n,a.PeGTlistExtendedEntry))}}finally{a.destroy(s)}return i}}(E||(E={})),function(t){t.destroy=function(t){if(t&&t.length){for(const e of t)T(e),e.getEntries().forEach(t=>{T(t)
const e=t.getGeogtran()
T(e),e.getParameters().forEach(T),[e.getGeogcs1(),e.getGeogcs2()].forEach(t=>{T(t)
const e=t.getDatum()
T(e),T(e.getSpheroid()),T(t.getPrimem()),T(t.getUnit())})})
a.PeGTlistExtendedEntry.prototype.Delete(t[0])}}}(O||(O={})),function(t){t.geogToGeog=function(t,e,n,r,o){a.ensureCache.prepare()
const u=g(n),c=n===u,i=a.ensureFloat64(u)
let s=0
r&&(s=a.ensureFloat64(r))
const _=a._pe_geog_to_geog(a.getPointer(t),e,i,s,o)
return _&&L(n,e,i,c),_}}(M||(M={})),function(t){const e=(t,e,n,r,o,u)=>{let c,i
switch(a.ensureCache.prepare(),t){case"dd":c=a._pe_geog_to_dd,i=_.PE_DD_MAX
break
case"ddm":c=a._pe_geog_to_ddm,i=_.PE_DDM_MAX
break
case"dms":c=a._pe_geog_to_dms,i=_.PE_DMS_MAX}let s=0
e&&(s=a.getPointer(e))
const l=g(r),f=a.ensureFloat64(l),P=N(n,i),E=c(s,n,f,o,a.ensureInt32(P))
if(E)for(let t=0;t<n;t++)u[t]=a.UTF8ToString(P[t])
return E},n=(t,e,n,r,o)=>{let u
switch(a.ensureCache.prepare(),t){case"dd":u=a._pe_dd_to_geog
break
case"ddm":u=a._pe_ddm_to_geog
break
case"dms":u=a._pe_dms_to_geog}let c=0
e&&(c=a.getPointer(e))
const i=r.map(t=>a.ensureString(t)),s=a.ensureInt32(i),_=a.ensureFloat64(new Array(2*n)),l=u(c,n,s,_)
return l&&L(o,n,_),l}
t.geogToDms=function(t,n,r,o,u){return e("dms",t,n,r,o,u)},t.dmsToGeog=function(t,e,r,o){return n("dms",t,e,r,o)},t.geogToDdm=function(t,n,r,o,u){return e("ddm",t,n,r,o,u)},t.ddmToGeog=function(t,e,r,o){return n("ddm",t,e,r,o)},t.geogToDd=function(t,n,r,o,u){return e("dd",t,n,r,o,u)},t.ddToGeog=function(t,e,r,o){return n("dd",t,e,r,o)}}(S||(S={})),function(t){t.init=function(){t.PE_MGRS_STYLE_NEW=a.PeNotationMgrs.prototype.PE_MGRS_STYLE_NEW,t.PE_MGRS_STYLE_OLD=a.PeNotationMgrs.prototype.PE_MGRS_STYLE_OLD,t.PE_MGRS_STYLE_AUTO=a.PeNotationMgrs.prototype.PE_MGRS_STYLE_AUTO,t.PE_MGRS_180_ZONE_1_PLUS=a.PeNotationMgrs.prototype.PE_MGRS_180_ZONE_1_PLUS,t.PE_MGRS_ADD_SPACES=a.PeNotationMgrs.prototype.PE_MGRS_ADD_SPACES},t.geogToMgrsExtended=function(t,e,n,r,o,u,c){a.ensureCache.prepare()
let i=0
t&&(i=a.getPointer(t))
const s=g(n),l=a.ensureFloat64(s),f=N(e,_.PE_MGRS_MAX),P=a.ensureInt32(f),E=a._pe_geog_to_mgrs_extended(i,e,l,r,o,u,P)
if(E)for(let t=0;t<e;t++)c[t]=a.UTF8ToString(f[t])
return E},t.mgrsToGeogExtended=function(t,e,n,r,o){a.ensureCache.prepare()
let u=0
t&&(u=a.getPointer(t))
const c=n.map(t=>a.ensureString(t)),i=a.ensureInt32(c),s=a.ensureFloat64(new Array(2*e)),_=a._pe_mgrs_to_geog_extended(u,e,i,r,s)
return _&&L(o,e,s),_}}(p||(p={})),function(t){t.geogToUsng=function(t,e,n,r,o,u,c){a.ensureCache.prepare()
let i=0
t&&(i=a.getPointer(t))
const s=g(n),l=a.ensureFloat64(s),f=N(e,_.PE_MGRS_MAX),P=a.ensureInt32(f),E=a._pe_geog_to_usng(i,e,l,r,o,u,P)
if(E)for(let t=0;t<e;t++)c[t]=a.UTF8ToString(f[t])
return E},t.usngToGeog=function(t,e,n,r){a.ensureCache.prepare()
let o=0
t&&(o=a.getPointer(t))
const u=n.map(t=>a.ensureString(t)),c=a.ensureInt32(u),i=a.ensureFloat64(new Array(2*e)),s=a._pe_usng_to_geog(o,e,c,i)
return s&&L(r,e,i),s}}(C||(C={})),function(t){t.init=function(){t.PE_UTM_OPTS_NONE=a.PeNotationUtm.prototype.PE_UTM_OPTS_NONE,t.PE_UTM_OPTS_ADD_SPACES=a.PeNotationUtm.prototype.PE_UTM_OPTS_ADD_SPACES,t.PE_UTM_OPTS_NS=a.PeNotationUtm.prototype.PE_UTM_OPTS_NS},t.geogToUtm=function(t,e,n,r,o){a.ensureCache.prepare()
let u=0
t&&(u=a.getPointer(t))
const c=g(n),i=a.ensureFloat64(c),s=N(e,_.PE_UTM_MAX),l=a.ensureInt32(s),f=a._pe_geog_to_utm(u,e,i,r,l)
if(f)for(let t=0;t<e;t++)o[t]=a.UTF8ToString(s[t])
return f},t.utmToGeog=function(t,e,n,r,o){a.ensureCache.prepare()
let u=0
t&&(u=a.getPointer(t))
const c=n.map(t=>a.ensureString(t)),i=a.ensureInt32(c),s=a.ensureFloat64(new Array(2*e)),_=a._pe_utm_to_geog(u,e,i,r,s)
return _&&L(o,e,s),_}}(h||(h={})),function(t){const e=new Map
t.init=function(){t.PE_PCSINFO_OPTION_NONE=a.PePCSInfo.prototype.PE_PCSINFO_OPTION_NONE,t.PE_PCSINFO_OPTION_DOMAIN=a.PePCSInfo.prototype.PE_PCSINFO_OPTION_DOMAIN,t.PE_POLE_OUTSIDE_BOUNDARY=a.PePCSInfo.prototype.PE_POLE_OUTSIDE_BOUNDARY,t.PE_POLE_POINT=a.PePCSInfo.prototype.PE_POLE_POINT},t.generate=function(n,r=t.PE_PCSINFO_OPTION_DOMAIN){let o=null,u=null
return e.has(n)&&(u=e.get(n),u[r]&&(o=u[r])),o||(o=a.PePCSInfo.prototype.generate(n,r),u||(u=[],e.set(n,u)),u[r]=o),o}}(A||(A={})),function(t){t.versionString=function(){return a.PeVersion.prototype.version_string()}}(R||(R={}))
const b=Object.freeze(Object.defineProperty({__proto__:null,get PeCSTransformations(){return s},get PeDefs(){return _},get PeFactory(){return l},get PeGCSExtent(){return P},get PeGTTransformations(){return M},get PeGTlistExtended(){return E},get PeGTlistExtendedEntry(){return O},get PeNotationDms(){return S},get PeNotationMgrs(){return p},get PeNotationUsng(){return C},get PeNotationUtm(){return h},get PePCSInfo(){return A},get PeVersion(){return R},_init:d,get _pe(){return a},isLoaded:c,isSupported:function(){return!!Object(o.a)("esri-wasm")},load:i},Symbol.toStringTag,{value:"Module"}))},2697:function(t,e,n){"use strict"
n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return o}))
var r=n(1052)
const o=Math.PI/180,u=/SPHEROID\[([^\]]+)]/i,a=r.a.radius,c=r.a.eccentricitySquared,i={a1:a*c,a2:a*c*a*c,a3:a*c*c/2,a4:a*c*a*c*2.5,a5:a*c+a*c*c/2,a6:1-c},s={4267:{a:6378206.4,f:1/294.9786982},4269:{a:6378137,f:1/298.257222101},4326:{a:r.a.radius,f:r.a.flattening},104900:{a:2439700,f:0},104901:{a:6051e3,f:0},104902:{a:6051800,f:0},104903:{a:r.c.radius,f:r.c.flattening},104904:{a:3393400,f:1/192.0430107526882},104905:{a:r.b.radius,f:r.b.flattening},104906:{a:6200,f:0},104907:{a:11100,f:0},104908:{a:71492e3,f:.06487439154031222},104909:{a:8200,f:0},104910:{a:83500,f:0},104911:{a:1e4,f:0},104912:{a:2409300,f:0},104913:{a:15e3,f:0},104914:{a:4e4,f:0},104915:{a:1562090,f:0},104916:{a:2632345,f:0},104917:{a:85e3,f:0},104918:{a:1821460,f:0},104919:{a:5e3,f:0},104920:{a:12e3,f:0},104921:{a:3e4,f:3},104922:{a:18e3,f:0},104923:{a:14e3,f:0},104924:{a:49300,f:0},104925:{a:60268e3,f:1/10.2079945799458},104926:{a:16e3,f:0},104927:{a:9500,f:0},104928:{a:56e4,f:0},104929:{a:249400,f:0},104930:{a:59500,f:0},104931:{a:16e3,f:0},104932:{a:133e3,f:0},104933:{a:718e3,f:0},104934:{a:888e3,f:0},104935:{a:1986300,f:0},104936:{a:1e4,f:0},104937:{a:41900,f:0},104938:{a:11e4,f:0},104939:{a:50100,f:0},104940:{a:764e3,f:0},104941:{a:11e3,f:0},104942:{a:529800,f:0},104943:{a:2575e3,f:0},104944:{a:25559e3,f:1/43.61604095563141},104945:{a:578900,f:0},104946:{a:33e3,f:0},104947:{a:21e3,f:0},104948:{a:13e3,f:0},104949:{a:31e3,f:0},104950:{a:27e3,f:0},104951:{a:42e3,f:0},104952:{a:235800,f:0},104953:{a:761400,f:0},104954:{a:15e3,f:0},104955:{a:54e3,f:0},104956:{a:77e3,f:0},104957:{a:27e3,f:0},104958:{a:788900,f:0},104959:{a:584700,f:0},104960:{a:24764e3,f:.01708124697141011},104961:{a:74e3,f:0},104962:{a:79e3,f:0},104963:{a:104e3,f:.14423076923076922},104964:{a:29e3,f:0},104965:{a:17e4,f:0},104966:{a:208e3,f:0},104967:{a:4e4,f:0},104968:{a:1352600,f:0},104969:{a:1195e3,f:0},104970:{a:593e3,f:0},104971:{a:r.b.radius,f:0},104972:{a:47e4,f:0},104973:{a:255e3,f:0},104974:{a:2439400,f:0}}},2901:function(t,e,n){"use strict"
n.d(e,"a",(function(){return u}))
let r=0
class o{static fromGE(t){const e=new o
return e._wkt=t.wkt,e._wkid=t.wkid,e._isInverse=t.isInverse,e}constructor(t){this.uid=r++,t?(this._wkt=null!=t.wkt?t.wkt:null,this._wkid=null!=t.wkid?t.wkid:-1,this._isInverse=null!=t.isInverse&&!0===t.isInverse):(this._wkt=null,this._wkid=-1,this._isInverse=!1)}get wkt(){return this._wkt}set wkt(t){this._wkt=t,this.uid=r++}get wkid(){return this._wkid}set wkid(t){this._wkid=t,this.uid=r++}get isInverse(){return this._isInverse}set isInverse(t){this._isInverse=t,this.uid=r++}getInverse(){const t=new o
return t._wkt=this.wkt,t._wkid=this._wkid,t._isInverse=!this.isInverse,t}}class u{static cacheKey(t,e){return[void 0!==t.wkid&&null!==t.wkid?t.wkid.toString():"-1",void 0!==t.wkt&&null!==t.wkt?t.wkt.toString():"",void 0!==e.wkid&&null!==e.wkid?e.wkid.toString():"-1",void 0!==e.wkt&&null!==e.wkt?e.wkt.toString():""].join(",")}static fromGE(t){const e=new u
let n=""
for(const r of t.steps){const t=o.fromGE(r)
e.steps.push(t),n+=t.uid.toString()+","}return e._cachedProjection={},e._gtlistentry=null,e._chain=n,e}constructor(t){if(this.steps=[],this._cachedProjection={},this._chain="",this._gtlistentry=null,t&&t.steps)for(const e of t.steps)e instanceof o?this.steps.push(e):this.steps.push(new o({wkid:e.wkid,wkt:e.wkt,isInverse:e.isInverse}))}getInverse(){const t=new u
t.steps=[]
for(let e=this.steps.length-1;e>=0;e--){const n=this.steps[e]
t.steps.push(n.getInverse())}return t}getGTListEntry(){let t=""
for(const e of this.steps)t+=e.uid.toString()+","
return t!==this._chain&&(this._gtlistentry=null,this._cachedProjection={},this._chain=t),this._gtlistentry}assignCachedGe(t,e,n){this._cachedProjection[u.cacheKey(t,e)]=n}getCachedGeTransformation(t,e){let n=""
for(const t of this.steps)n+=t.uid.toString()+","
n!==this._chain&&(this._gtlistentry=null,this._cachedProjection={},this._chain=n)
const r=this._cachedProjection[u.cacheKey(t,e)]
return void 0===r?null:r}}}}])
