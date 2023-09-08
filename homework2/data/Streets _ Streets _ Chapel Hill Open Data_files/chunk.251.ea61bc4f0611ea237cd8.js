(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[251,277,302,323,336],{1012:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return b})),n.d(t,"e",(function(){return y})),n.d(t,"f",(function(){return p})),n.d(t,"g",(function(){return M})),n.d(t,"h",(function(){return v})),n.d(t,"i",(function(){return d})),n.d(t,"j",(function(){return h})),n.d(t,"k",(function(){return m})),n.d(t,"l",(function(){return u})),n.d(t,"m",(function(){return L})),n.d(t,"n",(function(){return x}))
var r=n(1016)
function a(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function u(e,t,n,r,a){return e[0]=t,e[1]=n,e[2]=r,e[3]=a,e}function i(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e}function o(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e[3]=t[3]-n[3],e}function c(e,t,n){return e[0]=t[0]*n[0],e[1]=t[1]*n[1],e[2]=t[2]*n[2],e[3]=t[3]*n[3],e}function l(e,t,n){return e[0]=t[0]/n[0],e[1]=t[1]/n[1],e[2]=t[2]/n[2],e[3]=t[3]/n[3],e}function s(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e}function f(e,t){const n=t[0]-e[0],r=t[1]-e[1],a=t[2]-e[2],u=t[3]-e[3]
return Math.sqrt(n*n+r*r+a*a+u*u)}function d(e,t){const n=t[0]-e[0],r=t[1]-e[1],a=t[2]-e[2],u=t[3]-e[3]
return n*n+r*r+a*a+u*u}function y(e){const t=e[0],n=e[1],r=e[2],a=e[3]
return Math.sqrt(t*t+n*n+r*r+a*a)}function p(e){const t=e[0],n=e[1],r=e[2],a=e[3]
return t*t+n*n+r*r+a*a}function m(e,t){const n=t[0],r=t[1],a=t[2],u=t[3]
let i=n*n+r*r+a*a+u*u
return i>0&&(i=1/Math.sqrt(i),e[0]=n*i,e[1]=r*i,e[2]=a*i,e[3]=u*i),e}function b(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]}function h(e,t,n,r){const a=t[0],u=t[1],i=t[2],o=t[3]
return e[0]=a+r*(n[0]-a),e[1]=u+r*(n[1]-u),e[2]=i+r*(n[2]-i),e[3]=o+r*(n[3]-o),e}function L(e,t,n){const r=t[0],a=t[1],u=t[2],i=t[3]
return e[0]=n[0]*r+n[4]*a+n[8]*u+n[12]*i,e[1]=n[1]*r+n[5]*a+n[9]*u+n[13]*i,e[2]=n[2]*r+n[6]*a+n[10]*u+n[14]*i,e[3]=n[3]*r+n[7]*a+n[11]*u+n[15]*i,e}function M(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]}function v(e,t){const n=e[0],a=e[1],u=e[2],i=e[3],o=t[0],c=t[1],l=t[2],s=t[3],f=Object(r.c)()
return Math.abs(n-o)<=f*Math.max(1,Math.abs(n),Math.abs(o))&&Math.abs(a-c)<=f*Math.max(1,Math.abs(a),Math.abs(c))&&Math.abs(u-l)<=f*Math.max(1,Math.abs(u),Math.abs(l))&&Math.abs(i-s)<=f*Math.max(1,Math.abs(i),Math.abs(s))}const g=o,S=c,O=l,w=f,I=d,j=y,T=p,x=Object.freeze(Object.defineProperty({__proto__:null,add:i,ceil:function(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e[3]=Math.ceil(t[3]),e},copy:a,dist:w,distance:f,div:O,divide:l,dot:b,equals:v,exactEquals:M,floor:function(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e[3]=Math.floor(t[3]),e},inverse:function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e[3]=1/t[3],e},len:j,length:y,lerp:h,max:function(e,t,n){return e[0]=Math.max(t[0],n[0]),e[1]=Math.max(t[1],n[1]),e[2]=Math.max(t[2],n[2]),e[3]=Math.max(t[3],n[3]),e},min:function(e,t,n){return e[0]=Math.min(t[0],n[0]),e[1]=Math.min(t[1],n[1]),e[2]=Math.min(t[2],n[2]),e[3]=Math.min(t[3],n[3]),e},mul:S,multiply:c,negate:function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e},normalize:m,random:function(e,t){const n=r.a
let a,u,i,o,c,l
t=t||1
do{a=2*n()-1,u=2*n()-1,c=a*a+u*u}while(c>=1)
do{i=2*n()-1,o=2*n()-1,l=i*i+o*o}while(l>=1)
const s=Math.sqrt((1-c)/l)
return e[0]=t*a,e[1]=t*u,e[2]=t*i*s,e[3]=t*o*s,e},round:function(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e[3]=Math.round(t[3]),e},scale:s,scaleAndAdd:function(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e[3]=t[3]+n[3]*r,e},set:u,sqrDist:I,sqrLen:T,squaredDistance:d,squaredLength:p,str:function(e){return"vec4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},sub:g,subtract:o,transformMat4:L,transformQuat:function(e,t,n){const r=t[0],a=t[1],u=t[2],i=n[0],o=n[1],c=n[2],l=n[3],s=l*r+o*u-c*a,f=l*a+c*r-i*u,d=l*u+i*a-o*r,y=-i*r-o*a-c*u
return e[0]=s*l+y*-i+f*-c-d*-o,e[1]=f*l+y*-o+d*-i-s*-c,e[2]=d*l+y*-c+s*-o-f*-i,e[3]=t[3],e}},Symbol.toStringTag,{value:"Module"}))},1016:function(e,t,n){"use strict"
n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return c}))
let r=1e-6
function a(){return r}const u=Math.random,i=Math.PI/180,o=180/Math.PI
function c(e){return e*i}function l(e){return e*o}Object.freeze(Object.defineProperty({__proto__:null,RANDOM:u,equals:function(e,t){return Math.abs(e-t)<=r*Math.max(1,Math.abs(e),Math.abs(t))},getEpsilon:a,setEpsilon:function(e){r=e},toDegree:l,toRadian:c},Symbol.toStringTag,{value:"Module"}))},1051:function(e,t,n){"use strict"
n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return g})),n.d(t,"e",(function(){return v})),n.d(t,"f",(function(){return d})),n.d(t,"g",(function(){return y})),n.d(t,"h",(function(){return h})),n.d(t,"i",(function(){return L})),n.d(t,"j",(function(){return m})),n.d(t,"k",(function(){return M}))
var r=n(23),a=n(374),u=n(1054)
const i={mapserver:"MapServer",imageserver:"ImageServer",featureserver:"FeatureServer",sceneserver:"SceneServer",streamserver:"StreamServer",vectortileserver:"VectorTileServer"},o=Object.values(i),c=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/rest\\/services\\/(.+?)\\/(${o.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),l=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/([^\\/\\n]+)\\/(${o.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),s=/(.*?)\/(?:layers\/)?(\d+)\/?$/i
function f(e){return!!c.test(e)}function d(e){if(Object(r.k)(e))return null
const t=Object(a.Q)(e),n=t.path.match(c)||t.path.match(l)
if(!n)return null
const[,u,o,s,f]=n,d=o.indexOf("/")
return{title:p(-1!==d?o.slice(d+1):o),serverType:i[s.toLowerCase()],sublayer:null!=f&&""!==f?parseInt(f,10):null,url:{path:u}}}function y(e){const t=Object(a.Q)(e).path.match(s)
return t?{serviceUrl:t[1],sublayerId:Number(t[2])}:null}function p(e){return(e=e.replace(/\s*[/_]+\s*/g," "))[0].toUpperCase()+e.slice(1)}function m(e,t){const n=[]
if(e){const t=d(e)
Object(r.l)(t)&&t.title&&n.push(t.title)}if(t){const e=p(t)
n.push(e)}if(2===n.length){if(n[0].toLowerCase().includes(n[1].toLowerCase()))return n[0]
if(n[1].toLowerCase().includes(n[0].toLowerCase()))return n[1]}return n.join(" - ")}function b(e){if(!e)return!1
const t=(e=e.toLowerCase()).includes(".arcgis.com/"),n=e.includes("//services")||e.includes("//tiles")||e.includes("//features")
return t&&n}function h(e,t){return e?Object(a.N)(Object(a.M)(e,t)):e}function L(e){let{url:t}=e
if(!t)return{url:t}
t=Object(a.M)(t,e.logger)
const n=Object(a.Q)(t),u=d(n.path)
let i
if(Object(r.l)(u))null!=u.sublayer&&null==e.layer.layerId&&(i=u.sublayer),t=u.url.path
else if(e.nonStandardUrlAllowed){const e=y(n.path)
Object(r.l)(e)&&(t=e.serviceUrl,i=e.sublayerId)}return{url:Object(a.N)(t),layerId:i}}function M(e,t,n,r,i){Object(u.i)(t,r,"url",i),r.url&&null!=e.layerId&&(r.url=Object(a.E)(r.url,n,e.layerId.toString()))}function v(e){if(!e)return!1
const t=e.toLowerCase(),n=t.includes("/services/"),r=t.includes("/mapserver/wmsserver"),a=t.includes("/imageserver/wmsserver"),u=t.includes("/wmsserver")
return n&&(r||a||u)}function g(e){var t
if(!e)return!1
const n=null==(t=new a.a(Object(a.F)(e)).authority)?void 0:t.toLowerCase()
return"server.arcgisonline.com"===n||"services.arcgisonline.com"===n}},1054:function(e,t,n){"use strict"
n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return y})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return f})),n.d(t,"f",(function(){return d})),n.d(t,"g",(function(){return o})),n.d(t,"h",(function(){return i})),n.d(t,"i",(function(){return c}))
var r=n(23),a=n(374)
function u(e,t){const n=t&&t.url&&t.url.path
if(e&&n&&(e=Object(a.F)(e,n,{preserveProtocolRelative:!0}),t.portalItem&&t.readResourcePaths)){const n=Object(a.H)(e,t.portalItem.itemUrl)
null!=n&&s.test(n)&&t.readResourcePaths.push(t.portalItem.resourceFromPath(n).path)}return p(e,t&&t.portal)}function i(e,t,n=m.YES){if(null==e)return e
!Object(a.x)(e)&&t&&t.blockedRelativeUrls&&t.blockedRelativeUrls.push(e)
let r=Object(a.F)(e)
if(t){const n=t.verifyItemRelativeUrls&&t.verifyItemRelativeUrls.rootPath||t.url&&t.url.path
if(n){const u=p(n,t.portal),i=p(r,t.portal)
r=Object(a.H)(i,u,u),null!=r&&r!==i&&r!==e&&t.verifyItemRelativeUrls&&t.verifyItemRelativeUrls.writtenUrls.push(r)}}return r=y(r,null==t?void 0:t.portal),Object(a.x)(r)&&(r=Object(a.I)(r)),null!=t&&t.resources&&null!=t&&t.portalItem&&!Object(a.x)(r)&&!Object(a.z)(r)&&n===m.YES&&t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(r),compress:!1}),r}function o(e,t,n){return u(e,n)}function c(e,t,n,r){const a=i(e,r)
void 0!==a&&(t[n]=a)}const l=/\/items\/([^\/]+)\/resources\/(.*)/,s=/^\.\/resources\//
function f(e){var t,n,r
return null!=(t=null==(n=null!=(r=null==e?void 0:e.match(l))?r:null)?void 0:n[1])?t:null}function d(e){var t
const n=null!=(t=null==e?void 0:e.match(l))?t:null
if(null==n)return null
const u=n[2],i=u.lastIndexOf("/")
if(-1===i){const{path:e,extension:t}=Object(a.O)(u)
return{prefix:null,filename:e,extension:Object(r.u)(t)}}const{path:o,extension:c}=Object(a.O)(u.slice(i+1))
return{prefix:u.slice(0,i),filename:o,extension:Object(r.u)(c)}}function y(e,t){return t&&!t.isPortal&&t.urlKey&&t.customBaseUrl?Object(a.g)(e,`${t.urlKey}.${t.customBaseUrl}`,t.portalHostname):e}function p(e,t){if(!t||t.isPortal||!t.urlKey||!t.customBaseUrl)return e
const n=`${t.urlKey}.${t.customBaseUrl}`,r=Object(a.m)()
return Object(a.v)(r,`${r.scheme}://${n}`)?Object(a.g)(e,t.portalHostname,n):Object(a.g)(e,n,t.portalHostname)}var m,b;(b=m||(m={}))[b.YES=0]="YES",b[b.NO=1]="NO"
const h=Object.freeze(Object.defineProperty({__proto__:null,get MarkKeep(){return m},ensureMainOnlineDomain:y,fromJSON:u,itemIdFromResourceUrl:f,prefixAndFilenameFromResourceUrl:d,read:o,toJSON:i,write:c},Symbol.toStringTag,{value:"Module"}))},1063:function(e,t,n){"use strict"
n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o}))
var r=n(968),a=n(969)
let u=0
const i=e=>{let t=class extends e{constructor(...e){super(...e),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:Date.now().toString(16)+"-object-"+u++})}}
return t=Object(r.a)([Object(a.a)("esri.core.Identifiable")],t),t},o=e=>{let t=class extends e{constructor(...e){super(...e),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:u++})}}
return t=Object(r.a)([Object(a.a)("esri.core.NumericIdentifiable")],t),t}
let c=class extends(i(class{})){}
c=Object(r.a)([Object(a.a)("esri.core.Identifiable")],c)},1163:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
var r=n(23),a=n(997),u=n(988)
function i(e,t,n){if(Object(r.k)(t)||Object(r.k)(n)||n.vcsWkid||Object(u.d)(t,n))return null
const i=Object(a.h)(t)/Object(a.h)(n)
if(1===i)return null
switch(e){case"point":case"esriGeometryPoint":return e=>function(e,t){e&&null!=e.z&&(e.z*=t)}(e,i)
case"polyline":case"esriGeometryPolyline":return e=>function(e,t){if(e)for(const n of e.paths)for(const e of n)e.length>2&&(e[2]*=t)}(e,i)
case"polygon":case"esriGeometryPolygon":return e=>function(e,t){if(e)for(const n of e.rings)for(const e of n)e.length>2&&(e[2]*=t)}(e,i)
case"multipoint":case"esriGeometryMultipoint":return e=>function(e,t){if(e)for(const n of e.points)n.length>2&&(n[2]*=t)}(e,i)
case"extent":case"esriGeometryExtent":return e=>function(e,t){e&&null!=e.zmin&&null!=e.zmax&&(e.zmin*=t,e.zmax*=t)}(e,i)
default:return null}}},1248:function(e,t,n){"use strict"
n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return o})),n.d(t,"f",(function(){return c}))
var r=n(1015),a=n(769),u=n(774)
function i(e,t){if(!o(e,t)){const n=e.typeKeywords
n?n.push(t):e.typeKeywords=[t]}}function o(e,t){var n
return!(null==(n=e.typeKeywords)||!n.includes(t))}function c(e,t){const n=e.typeKeywords
if(n){const e=n.indexOf(t)
e>-1&&n.splice(e,1)}}async function l(e){const t=e.clone().normalize()
let n
if(t.length>1)for(const e of t)n?e.width>n.width&&(n=e):n=e
else n=t[0]
return async function(e){const t=e.spatialReference
if(t.isWGS84)return e.clone()
if(t.isWebMercator)return Object(u.webMercatorToGeographic)(e)
const n=a.default.WGS84
return await Object(r.g)(t,n),Object(r.m)(e,n)}(n)}const s={DEVELOPER_BASEMAP:"DeveloperBasemap",JSAPI:"ArcGIS API for JavaScript",METADATA:"Metadata",MULTI_LAYER:"Multilayer",SINGLE_LAYER:"Singlelayer",TABLE:"Table"}
function f(e){var t
const{portal:n,isOrgItem:r,itemControl:a}=e,u=null==(t=n.user)?void 0:t.privileges
let i=!u||u.includes("features:user:edit"),o=!!r&&!(null==u||!u.includes("features:user:fullEdit"))
const c="update"===a||"admin"===a
return c?o=i=!0:o&&(i=!0),{features:{edit:i,fullEdit:o},content:{updateItem:c}}}},1354:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
var r=n(1034),a=n(973),u=n(1044)
async function i(e,t,n){const i=e&&e.getAtOrigin&&e.getAtOrigin("renderer",t.origin)
if(i&&"unique-value"===i.type&&i.styleOrigin){const o=await Object(r.e)(i.populateFromStyle())
if(Object(a.q)(n),!1===o.ok){const n=o.error
t&&t.messages&&t.messages.push(new u.a("renderer:style-reference","Failed to create unique value renderer from style reference: "+n.message,{error:n,context:t})),e.clear("renderer",null==t?void 0:t.origin)}}}},1478:function(e,t,n){"use strict"
n.r(t),n.d(t,"getFirstLayerOrTableId",(function(){return M})),n.d(t,"getNumLayersAndTables",(function(){return v})),n.d(t,"getSubtypeGroupLayerIds",(function(){return g})),n.d(t,"load",(function(){return y})),n.d(t,"preprocessFSItemData",(function(){return L}))
var r=n(446),a=n(777),u=n(1051),i=n(1913),o=n(1028),c=n(1154),l=n(1857),s=n(1248),f=n(1354),d=n(1685)
async function y(e,t){const n=e.instance.portalItem
if(n&&n.id)return await n.load(t),function(e){const t=e.instance.portalItem
if(null==t||!t.type||!e.supportedTypes.includes(t.type))throw new r.a("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:null==t?void 0:t.type,expectedType:e.supportedTypes.join(", ")})}(e),async function(e,t){var n
const a=e.instance,u=a.portalItem
if(!u)return
const{url:o,title:c}=u,y=Object(l.a)(u)
if("group"===a.type)return a.read({title:c},y),async function(e,t){var n
let a
const{portalItem:u}=e
if(!u)return
const o=u.type,c=t.layerModuleTypeMap,l=null!=(n=Object(s.e)(u,"Oriented Imagery Layer"))&&n
switch(o){case"Feature Service":a=l?c.OrientedImageryLayer:c.FeatureLayer
break
case"Stream Service":a=c.StreamLayer
break
case"Scene Service":a=c.SceneLayer
break
case"Feature Collection":a=c.FeatureLayer
break
default:throw new r.a("portal:unsupported-item-type-as-group",`The item type '${o}' is not supported as a 'IGroupLayer'`)}let[f,y]=await Promise.all([a(),h(t)]),b=()=>f
if("Feature Service"===o){if(y=u.url?await L(y,u.url):{},g(y).length){const e=c.SubtypeGroupLayer,t=await e()
b=e=>"SubtypeGroupLayer"===e.layerType?t:f}return m(e,b,y,await async function(e){const{layersJSON:t}=await Object(i.a)(e)
if(!t)return null
const n=[...t.layers,...t.tables]
return e=>n.find(t=>t.id===e.id)}(u.url))}return v(y)>0?m(e,b,y):async function(e,t){var n,r
const{portalItem:a}=e
if(null==a||!a.url)return
const u=await Object(d.a)(a.url)
u&&m(e,t,{layers:null==(n=u.layers)?void 0:n.map(p),tables:null==(r=u.tables)?void 0:r.map(p)})}(e,b)}(a,e)
o&&a.read({url:o},y)
const b=await h(e,t)
return b&&a.read(b,y),a.resourceReferences={portalItem:u,paths:null!=(n=y.readResourcePaths)?n:[]},"subtype-group"!==a.type&&a.read({title:c},y),Object(f.a)(a,y)}(e,t)}function p(e){return{id:e.id,name:e.name}}function m(e,t,n,i){var o
let l=n.layers||[]
const s=n.tables||[]
if("Feature Collection"===(null==(o=e.portalItem)?void 0:o.type)&&(l.forEach(e=>{var t
"Table"===(null==e||null==(t=e.layerDefinition)?void 0:t.type)&&s.push(e)}),l=l.filter(e=>{var t
return"Table"!==(null==e||null==(t=e.layerDefinition)?void 0:t.type)})),"coverage"in n){const t=function(e){const{coverage:t}=e
if(!t)return null
const n=new URL(t)
if(t.toLowerCase().includes("item.html")){const e=n.searchParams.get("id"),t=n.origin
return a.default.fromPortalItem({portalItem:new c.default({id:e,url:t})})}if(Object(u.b)(t))return a.default.fromArcGISServerUrl({url:t})
throw new r.a("portal:oriented-imagery-layer-coverage","the provided coverage url couldn't be loaded as a layer")}(n)
t&&e.add(t)}l.reverse().forEach(r=>{const a=b(e,t(r),n,r,null==i?void 0:i(r))
e.add(a)}),s.reverse().forEach(r=>{const a=b(e,t(r),n,r,null==i?void 0:i(r))
e.tables.add(a)})}function b(e,t,n,r,a){const u=e.portalItem,i=new t({portalItem:u.clone(),layerId:r.id})
if("sourceJSON"in i&&(i.sourceJSON=a),"subtype-group"!==i.type&&(i.sublayerTitleMode="service-name"),"Feature Collection"===u.type){const e={origin:"portal-item",portal:u.portal||o.a.getDefault()}
i.read(r,e)
const t=n.showLegend
null!=t&&i.read({showLegend:t},e)}return i}async function h(e,t){if(!1===e.supportsData)return
const n=e.instance,r=n.portalItem
if(!r)return
let a=null
try{a=await r.fetchData("json",t)}catch(e){}if(function(e){return"stream"!==e.type&&"oriented-imagery"!==e.type&&"layerId"in e}(n)){let e=null,t=!0
if(a&&v(a)>0){if(null==n.layerId){const e=g(a)
n.layerId="subtype-group"===n.type?null==e?void 0:e[0]:M(a)}e=function(e,t){var n,r
const{layerId:a}=t,u=(null==(n=e.layers)?void 0:n.find(e=>e.id===a))||(null==(r=e.tables)?void 0:r.find(e=>e.id===a))
return u&&function(e,t){return!("feature"===t.type&&"layerType"in e&&"SubtypeGroupLayer"===e.layerType||"subtype-group"===t.type&&!("layerType"in e))}(u,t)?u:null}(a,n),e&&(1===v(a)&&(t=!1),null!=a.showLegend&&(e.showLegend=a.showLegend))}return t&&"service-name"!==n.sublayerTitleMode&&(n.sublayerTitleMode="item-title-and-service-name"),e}return a}async function L(e,t){var n,r
if(null==(null==(n=e)?void 0:n.layers)||null==(null==(r=e)?void 0:r.tables)){const n=await Object(d.a)(t);(e=e||{}).layers=e.layers||(null==n?void 0:n.layers),e.tables=e.tables||(null==n?void 0:n.tables)}return e}function M(e){const t=e.layers
if(t&&t.length)return t[0].id
const n=e.tables
return n&&n.length?n[0].id:null}function v(e){var t,n,r,a
return(null!=(t=null==e||null==(n=e.layers)?void 0:n.length)?t:0)+(null!=(r=null==e||null==(a=e.tables)?void 0:a.length)?r:0)}function g(e){var t
const n=[]
return null!=e&&null!=(t=e.layers)&&t.forEach(e=>{"SubtypeGroupLayer"===e.layerType&&n.push(e.id)}),n}},1685:function(e,t,n){"use strict"
n.d(t,"a",(function(){return a}))
var r=n(771)
async function a(e,t){const{data:n}=await Object(r.default)(e,{responseType:"json",query:{f:"json",...null==t?void 0:t.customParameters,token:null==t?void 0:t.apiKey}})
return n}},1781:function(e,t,n){"use strict"
n.r(t),n.d(t,"populateOperationalLayers",(function(){return s}))
var r=n(993),a=(n(235),n(973)),u=n(1885),i=n(1154)
function o(e,t){return!(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)&&e.featureCollectionType===t}var c=n(2192),l=n(1354)
async function s(e,t,n){if(!t)return
const r=[]
for(const e of t){const t=h(e,n)
"GroupLayer"===e.layerType?r.push(v(t,e,n)):r.push(t)}const u=await Object(a.g)(r)
for(const t of u)t.value&&e.add(t.value)}const f={ArcGISDimensionLayer:"DimensionLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",OGCFeatureLayer:"OGCFeatureLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",GeoJSON:"GeoJSONLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer",Voxel:"VoxelLayer",LineOfSightLayer:"LineOfSightLayer"},d={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},y={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",ArcGISSceneServiceLayer:"SceneLayer",DefaultTileLayer:"TileLayer"},p={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",SubtypeGroupLayer:"SubtypeGroupLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},m={ArcGISFeatureLayer:"FeatureLayer"},b={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"}
async function h(e,t){return async function(e,t,n){const r=new e
return r.read(t,n.context),"group"===r.type&&L(t)&&await async function(e,t,n){var r
const a=u.a.FeatureLayer,i=await a(),o=t.featureCollection,c=null==o?void 0:o.showLegend,l=null==o||null==(r=o.layers)?void 0:r.map((r,a)=>{var u,o
const l=new i
l.read(r,n)
const s={...n,ignoreDefaults:!0}
return l.read({id:`${e.id}-sublayer-${a}`,visibility:null==(u=null==(o=t.visibleLayers)?void 0:o.includes(a))||u},s),null!=c&&l.read({showLegend:c},s),l})
e.layers.addMany(null!=l?l:[])}(r,t,n.context),await Object(l.a)(r,n.context),r}(await async function(e,t){var n
const r=t.context,a=function(e){let t
if("web-scene"===e.origin)switch(e.layerContainerType){case"basemap":t=y
break
case"ground":t=d
break
default:t=f}else switch(e.layerContainerType){case"basemap":t=b
break
case"tables":t=m
break
default:t=p}return t}(r)
let l=e.layerType||e.type
!l&&t&&t.defaultLayerType&&(l=t.defaultLayerType)
const s=a[l]
let h=s?u.a[s]:u.a.UnknownLayer
if(M(e)){const t=null==r?void 0:r.portal
if(e.itemId){const n=new i.default({id:e.itemId,portal:t})
await n.load()
const r=(await Object(c.selectLayerClassPath)(n)).className||"UnknownLayer"
h=u.a[r]}}else"ArcGISFeatureLayer"===l?function(e){return o(e,"notes")}(e)||function(e){return o(e,"markup")}(e)?h=u.a.MapNotesLayer:function(e){return o(e,"route")}(e)?h=u.a.RouteLayer:L(e)&&(h=u.a.GroupLayer):e.wmtsInfo&&e.wmtsInfo.url&&e.wmtsInfo.layerIdentifier?h=u.a.WMTSLayer:"WFS"===l&&"2.0.0"!==(null==(n=e.wfsInfo)?void 0:n.version)&&(h=u.a.UnsupportedLayer)
return h()}(e,t),e,t)}function L(e){var t,n,r
return"ArcGISFeatureLayer"===e.layerType&&!M(e)&&(null!=(t=null==(n=e.featureCollection)||null==(r=n.layers)?void 0:r.length)?t:0)>1}function M(e){return"Feature Collection"===e.type}async function v(e,t,n){const a=new r.a,u=s(a,Array.isArray(t.layers)?t.layers:[],n),i=await e
if(await u,"group"===i.type)return i.layers.addMany(a),i}},1857:function(e,t,n){"use strict"
n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return i}))
var r=n(374),a=n(1028)
function u(e){return{origin:"portal-item",url:Object(r.Q)(e.itemUrl),portal:e.portal||a.a.getDefault(),portalItem:e,readResourcePaths:[]}}function i(e){return{origin:"portal-item",messages:[],writtenProperties:[],url:e.itemUrl?Object(r.Q)(e.itemUrl):null,portal:e.portal||a.a.getDefault(),portalItem:e}}},1885:function(e,t,n){"use strict"
n.d(t,"a",(function(){return r}))
const r={BingMapsLayer:async()=>(await Promise.all([n.e(24),n.e(227)]).then(n.bind(null,2594))).default,BuildingSceneLayer:async()=>(await Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(144)]).then(n.bind(null,2578))).default,CSVLayer:async()=>(await Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(158)]).then(n.bind(null,2595))).default,DimensionLayer:async()=>(await Promise.all([n.e(1),n.e(53),n.e(317)]).then(n.bind(null,2589))).default,ElevationLayer:async()=>(await Promise.all([n.e(1),n.e(2),n.e(16),n.e(23),n.e(210)]).then(n.bind(null,2290))).default,FeatureLayer:async()=>(await Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(161)]).then(n.bind(null,779))).default,GeoJSONLayer:async()=>(await Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(164)]).then(n.bind(null,2596))).default,GeoRSSLayer:async()=>(await Promise.all([n.e(1),n.e(2),n.e(4),n.e(16),n.e(217)]).then(n.bind(null,2567))).default,GroupLayer:async()=>(await Promise.all([n.e(1),n.e(2),n.e(16),n.e(24),n.e(51)]).then(n.bind(null,2522))).default,ImageryLayer:async()=>(await Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(150)]).then(n.bind(null,792))).default,ImageryTileLayer:async()=>(await Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(157)]).then(n.bind(null,2577))).default,IntegratedMeshLayer:async()=>(await Promise.all([n.e(1),n.e(2),n.e(16),n.e(209)]).then(n.bind(null,2597))).default,KMLLayer:async()=>(await Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(182)]).then(n.bind(null,2598))).default,LineOfSightLayer:async()=>(await Promise.all([n.e(1),n.e(53),n.e(293)]).then(n.bind(null,2599))).default,MapImageLayer:async()=>(await Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(159)]).then(n.bind(null,790))).default,MapNotesLayer:async()=>(await Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(156)]).then(n.bind(null,2568))).default,MediaLayer:async()=>(await Promise.all([n.e(1),n.e(24),n.e(207)]).then(n.bind(null,2579))).default,OGCFeatureLayer:async()=>(await Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(167)]).then(n.bind(null,2600))).default,OpenStreetMapLayer:async()=>(await Promise.all([n.e(1),n.e(2),n.e(16),n.e(24),n.e(222)]).then(n.bind(null,2569))).default,OrientedImageryLayer:async()=>(await Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(160)]).then(n.bind(null,2571))).default,PointCloudLayer:async()=>(await Promise.all([n.e(1),n.e(2),n.e(3),n.e(16),n.e(197)]).then(n.bind(null,2581))).default,RouteLayer:async()=>(await Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(173)]).then(n.bind(null,2576))).default,SceneLayer:async()=>(await Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(145)]).then(n.bind(null,2587))).default,StreamLayer:async()=>(await Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(169)]).then(n.bind(null,2601))).default,SubtypeGroupLayer:async()=>(await Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(168)]).then(n.bind(null,2590))).default,TileLayer:async()=>(await Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(162)]).then(n.bind(null,791))).default,UnknownLayer:async()=>(await Promise.all([n.e(1),n.e(2),n.e(16),n.e(294)]).then(n.bind(null,2572))).default,UnsupportedLayer:async()=>(await Promise.all([n.e(1),n.e(2),n.e(16),n.e(295)]).then(n.bind(null,2573))).default,VectorTileLayer:async()=>(await Promise.all([n.e(1),n.e(2),n.e(16),n.e(24),n.e(199)]).then(n.bind(null,793))).default,VoxelLayer:async()=>(await Promise.all([n.e(1),n.e(2),n.e(3),n.e(16),n.e(198)]).then(n.bind(null,2575))).default,WFSLayer:async()=>(await Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(163)]).then(n.bind(null,2602))).default,WMSLayer:async()=>(await Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(195)]).then(n.bind(null,2591))).default,WMTSLayer:async()=>(await Promise.all([n.e(1),n.e(2),n.e(16),n.e(24),n.e(219)]).then(n.bind(null,2582))).default,WebTileLayer:async()=>(await Promise.all([n.e(1),n.e(2),n.e(16),n.e(24),n.e(225)]).then(n.bind(null,2082))).default}},1913:function(e,t,n){"use strict"
n.d(t,"a",(function(){return a}))
var r=n(1685)
async function a(e,t){var n
const a=await Object(r.a)(e,t)
a.layers=a.layers.filter(u)
const i={serviceJSON:a}
if((null!=(n=a.currentVersion)?n:0)<10.5)return i
const o=await Object(r.a)(e+"/layers",t)
return i.layersJSON={layers:o.layers.filter(u),tables:o.tables},i}function u(e){return!e.type||"Feature Layer"===e.type}},2192:function(e,t,n){"use strict"
n.r(t),n.d(t,"fromItem",(function(){return s})),n.d(t,"selectLayerClassPath",(function(){return f}))
var r=n(446),a=n(1037),u=n(1885),i=n(1154),o=n(1478),c=n(1248),l=n(1685)
async function s(e){!e.portalItem||e.portalItem instanceof i.default||(e={...e,portalItem:new i.default(e.portalItem)})
const t=await async function(e){return await e.load(),async function(e){const t=u.a[e.className]
return{constructor:await t(),properties:e.properties}}(await f(e))}(e.portalItem)
return new(0,t.constructor)({portalItem:e.portalItem,...t.properties})}async function f(e){switch(e.type){case"Map Service":return async function(e){return await async function(e){return(await Object(l.a)(e.url)).tileInfo}(e)?{className:"TileLayer"}:{className:"MapImageLayer"}}(e)
case"Feature Service":return async function(e){if(Object(c.e)(e,"Oriented Imagery Layer"))return async function(e){await e.load()
const t=await e.fetchData()
return t.coverage?{className:"GroupLayer"}:{className:"OrientedImageryLayer",properties:t}}(e)
const t=await d(e)
if("object"==typeof t){const e={}
return null!=t.id&&(e.layerId=t.id),{className:t.className||"FeatureLayer",properties:e}}return{className:"GroupLayer"}}(e)
case"Feature Collection":return async function(e){await e.load()
const t=Object(c.e)(e,"Map Notes"),n=Object(c.e)(e,"Markup")
if(t||n)return{className:"MapNotesLayer"}
if(Object(c.e)(e,"Route Layer"))return{className:"RouteLayer"}
const r=await e.fetchData()
return 1===Object(o.getNumLayersAndTables)(r)?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e)
case"Scene Service":return async function(e){const t=await d(e)
if("object"==typeof t){var n
const r={}
let u
if(null!=t.id?(r.layerId=t.id,u=`${e.url}/layers/${t.id}`):u=e.url,null!=(n=e.typeKeywords)&&n.length)for(const t of Object.keys(a.m))if(e.typeKeywords.includes(t))return{className:a.m[t]}
const i=await Object(l.a)(u)
return{className:a.m[null==i?void 0:i.layerType]||"SceneLayer",properties:r}}var r
return!1===t&&"Voxel"===(null==(r=await Object(l.a)(e.url))?void 0:r.layerType)?{className:"VoxelLayer"}:{className:"GroupLayer"}}(e)
case"Image Service":return async function(e){var t,n,r,a,u
await e.load()
const i=null!=(t=null==(n=e.typeKeywords)?void 0:n.map(e=>e.toLowerCase()))?t:[]
if(i.includes("elevation 3d layer"))return{className:"ElevationLayer"}
if(i.includes("tiled imagery"))return{className:"ImageryTileLayer"}
const o=null==(r=await e.fetchData())?void 0:r.layerType
if("ArcGISTiledImageServiceLayer"===o)return{className:"ImageryTileLayer"}
if("ArcGISImageServiceLayer"===o)return{className:"ImageryLayer"}
const c=await Object(l.a)(e.url),s=null==(a=c.cacheType)?void 0:a.toLowerCase(),f=null==(u=c.capabilities)?void 0:u.toLowerCase().includes("tilesonly")
return"map"===s||f?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e)
case"Stream Service":return{className:"StreamLayer"}
case"Vector Tile Service":return{className:"VectorTileLayer"}
case"GeoJson":return{className:"GeoJSONLayer"}
case"CSV":return{className:"CSVLayer"}
case"KML":return{className:"KMLLayer"}
case"WFS":return{className:"WFSLayer"}
case"WMTS":return{className:"WMTSLayer"}
case"WMS":return{className:"WMSLayer"}
case"Feed":return{className:"StreamLayer"}
default:throw new r.a("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}async function d(e){const t=e.url
if(!t||t.match(/\/\d+$/))return{}
await e.load()
const n=await e.fetchData()
if("Feature Service"===e.type){const e=y(await Object(o.preprocessFSItemData)(n,t))
if("object"==typeof e){const t=Object(o.getSubtypeGroupLayerIds)(n)
e.className=null!=e.id&&t.includes(e.id)?"SubtypeGroupLayer":"FeatureLayer"}return e}return Object(o.getNumLayersAndTables)(n)>0?y(n):y(await Object(l.a)(t))}function y(e){return 1===Object(o.getNumLayersAndTables)(e)&&{id:Object(o.getFirstLayerOrTableId)(e)}}},777:function(e,t,n){"use strict"
n.r(t),n.d(t,"default",(function(){return M}))
var r=n(968),a=(n(982),n(771)),u=n(446),i=n(1002),o=n(1063),c=n(1046),l=n(233),s=n(973),f=n(374),d=n(970),y=(n(971),n(445),n(969)),p=n(110),m=n(770),b=n(769)
let h=0,L=class extends(i.a.EventedMixin(Object(o.b)(c.a))){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new m.default(-180,-90,180,90,b.default.WGS84),this.id=Date.now().toString(16)+"-layer-"+h++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=b.default.WGS84,this.title=null,this.type=null,this.url=null,this.visible=!0}static async fromArcGISServerUrl(e){const t="string"==typeof e?{url:e}:e
return(await n.e(319).then(n.bind(null,2926))).fromUrl(t)}static fromPortalItem(e){return async function(e){const t="portalItem"in e?e:{portalItem:e},r=await Promise.all([n.e(1),n.e(2),n.e(246)]).then(n.bind(null,2192))
try{return await r.fromItem(t)}catch(e){const n=t&&t.portalItem,r=n&&n.id||"unset",a=n&&n.portal&&n.portal.url||p.default.portalUrl
throw l.a.getLogger("esri.layers.support.fromPortalItem").error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+a+"', id: '"+r+"')",e),e}}(e)}initialize(){this.when().catch(e=>{var t,n
Object(s.j)(e)||l.a.getLogger(this.declaredClass).error("#load()",`Failed to load layer (title: '${null!=(t=this.title)?t:"no title"}', id: '${null!=(n=this.id)?n:"no id"}')`,{error:e})})}destroy(){if(this.parent){const e=this,t=this.parent
"layers"in t&&t.layers.includes(e)?t.layers.remove(e):"tables"in t&&t.tables.includes(e)?t.tables.remove(e):"baseLayers"in t&&t.baseLayers.includes(e)?t.baseLayers.remove(e):"baseLayers"in t&&t.referenceLayers.includes(e)&&t.referenceLayers.remove(e)}}get hasAttributionData(){return null!=this.attributionDataUrl}get parsedUrl(){return Object(f.Q)(this.url)}async fetchAttributionData(){const e=this.attributionDataUrl
if(this.hasAttributionData&&e)return(await Object(a.default)(e,{query:{f:"json"},responseType:"json"})).data
throw new u.a("layer:no-attribution-data","Layer does not have attribution data")}}
Object(r.a)([Object(d.b)({type:String})],L.prototype,"attributionDataUrl",void 0),Object(r.a)([Object(d.b)({type:m.default})],L.prototype,"fullExtent",void 0),Object(r.a)([Object(d.b)({readOnly:!0})],L.prototype,"hasAttributionData",null),Object(r.a)([Object(d.b)({type:String,clonable:!1})],L.prototype,"id",void 0),Object(r.a)([Object(d.b)({type:Boolean,nonNullable:!0})],L.prototype,"legendEnabled",void 0),Object(r.a)([Object(d.b)({type:["show","hide","hide-children"]})],L.prototype,"listMode",void 0),Object(r.a)([Object(d.b)({type:Number,range:{min:0,max:1},nonNullable:!0})],L.prototype,"opacity",void 0),Object(r.a)([Object(d.b)({clonable:!1})],L.prototype,"parent",void 0),Object(r.a)([Object(d.b)({readOnly:!0})],L.prototype,"parsedUrl",null),Object(r.a)([Object(d.b)({type:Boolean})],L.prototype,"popupEnabled",void 0),Object(r.a)([Object(d.b)({type:Boolean})],L.prototype,"attributionVisible",void 0),Object(r.a)([Object(d.b)({type:b.default})],L.prototype,"spatialReference",void 0),Object(r.a)([Object(d.b)({type:String})],L.prototype,"title",void 0),Object(r.a)([Object(d.b)({readOnly:!0,json:{read:!1}})],L.prototype,"type",void 0),Object(r.a)([Object(d.b)()],L.prototype,"url",void 0),Object(r.a)([Object(d.b)({type:Boolean,nonNullable:!0})],L.prototype,"visible",void 0),L=Object(r.a)([Object(y.a)("esri.layers.Layer")],L)
const M=L},981:function(e,t,n){"use strict"
function r(){return[0,0,0]}function a(e){return[e[0],e[1],e[2]]}function u(e,t,n){return[e,t,n]}function i(e){const t=[0,0,0],n=Math.min(3,e.length)
for(let r=0;r<n;++r)t[r]=e[r]
return t}function o(e,t){return new Float64Array(e,t,3)}function c(){return u(1,1,1)}function l(){return u(1,0,0)}function s(){return u(0,1,0)}function f(){return u(0,0,1)}n.d(t,"a",(function(){return y})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return o})),n.d(t,"f",(function(){return r})),n.d(t,"g",(function(){return i})),n.d(t,"h",(function(){return u})),n.d(t,"i",(function(){return f}))
const d=[0,0,0],y=c(),p=l(),m=s(),b=f()
Object.freeze(Object.defineProperty({__proto__:null,ONES:y,UNIT_X:p,UNIT_Y:m,UNIT_Z:b,ZEROS:d,clone:a,create:r,createView:o,fromArray:i,fromValues:u,ones:c,unitX:l,unitY:s,unitZ:f,zeros:function(){return[0,0,0]}},Symbol.toStringTag,{value:"Module"}))},985:function(e,t,n){"use strict"
n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return B})),n.d(t,"e",(function(){return _})),n.d(t,"f",(function(){return E})),n.d(t,"g",(function(){return V})),n.d(t,"h",(function(){return d})),n.d(t,"i",(function(){return G})),n.d(t,"j",(function(){return c})),n.d(t,"k",(function(){return l})),n.d(t,"l",(function(){return i})),n.d(t,"m",(function(){return M})),n.d(t,"n",(function(){return O})),n.d(t,"o",(function(){return w})),n.d(t,"p",(function(){return b})),n.d(t,"q",(function(){return I})),n.d(t,"r",(function(){return L})),n.d(t,"s",(function(){return W})),n.d(t,"t",(function(){return F})),n.d(t,"u",(function(){return u})),n.d(t,"v",(function(){return j})),n.d(t,"w",(function(){return S})),n.d(t,"x",(function(){return g})),n.d(t,"y",(function(){return v})),n.d(t,"z",(function(){return x})),n.d(t,"A",(function(){return U})),n.d(t,"B",(function(){return o})),n.d(t,"C",(function(){return T})),n.d(t,"D",(function(){return k})),n.d(t,"E",(function(){return P})),n.d(t,"F",(function(){return D})),n.d(t,"G",(function(){return y})),n.d(t,"H",(function(){return m})),n.d(t,"I",(function(){return h}))
var r=n(981),a=n(1016)
function u(e){const t=e[0],n=e[1],r=e[2]
return Math.sqrt(t*t+n*n+r*r)}function i(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function o(e,t,n,r){return e[0]=t,e[1]=n,e[2]=r,e}function c(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e}function l(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e}function s(e,t,n){return e[0]=t[0]*n[0],e[1]=t[1]*n[1],e[2]=t[2]*n[2],e}function f(e,t,n){return e[0]=t[0]/n[0],e[1]=t[1]/n[1],e[2]=t[2]/n[2],e}function d(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e}function y(e,t){return e[0]=Math.abs(t[0]),e[1]=Math.abs(t[1]),e[2]=Math.abs(t[2]),e}function p(e,t){return e[0]=Math.sign(t[0]),e[1]=Math.sign(t[1]),e[2]=Math.sign(t[2]),e}function m(e,t,n){return e[0]=Math.min(t[0],n[0]),e[1]=Math.min(t[1],n[1]),e[2]=Math.min(t[2],n[2]),e}function b(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e}function h(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e}function L(e,t){const n=t[0]-e[0],r=t[1]-e[1],a=t[2]-e[2]
return Math.sqrt(n*n+r*r+a*a)}function M(e,t){const n=t[0]-e[0],r=t[1]-e[1],a=t[2]-e[2]
return n*n+r*r+a*a}function v(e){const t=e[0],n=e[1],r=e[2]
return t*t+n*n+r*r}function g(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}function S(e,t){const n=t[0],r=t[1],a=t[2]
let u=n*n+r*r+a*a
return u>0&&(u=1/Math.sqrt(u),e[0]=t[0]*u,e[1]=t[1]*u,e[2]=t[2]*u),e}function O(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function w(e,t,n){const r=t[0],a=t[1],u=t[2],i=n[0],o=n[1],c=n[2]
return e[0]=a*c-u*o,e[1]=u*i-r*c,e[2]=r*o-a*i,e}function I(e,t,n,r){const a=t[0],u=t[1],i=t[2]
return e[0]=a+r*(n[0]-a),e[1]=u+r*(n[1]-u),e[2]=i+r*(n[2]-i),e}function j(e,t,n){const r=t[0],a=t[1],u=t[2]
return e[0]=n[0]*r+n[4]*a+n[8]*u+n[12],e[1]=n[1]*r+n[5]*a+n[9]*u+n[13],e[2]=n[2]*r+n[6]*a+n[10]*u+n[14],e}function T(e,t,n){const r=t[0],a=t[1],u=t[2]
return e[0]=r*n[0]+a*n[3]+u*n[6],e[1]=r*n[1]+a*n[4]+u*n[7],e[2]=r*n[2]+a*n[5]+u*n[8],e}function x(e,t,n){const r=n[0],a=n[1],u=n[2],i=n[3],o=t[0],c=t[1],l=t[2]
let s=a*l-u*c,f=u*o-r*l,d=r*c-a*o,y=a*d-u*f,p=u*s-r*d,m=r*f-a*s
const b=2*i
return s*=b,f*=b,d*=b,y*=2,p*=2,m*=2,e[0]=o+s+y,e[1]=c+f+p,e[2]=l+d+m,e}function G(e,t,n,r){const a=[],u=[]
return a[0]=t[0]-n[0],a[1]=t[1]-n[1],a[2]=t[2]-n[2],u[0]=a[0]*Math.cos(r)-a[1]*Math.sin(r),u[1]=a[0]*Math.sin(r)+a[1]*Math.cos(r),u[2]=a[2],e[0]=u[0]+n[0],e[1]=u[1]+n[1],e[2]=u[2]+n[2],e}function P(e,t){i(A,e),i(N,t),S(A,A),S(N,N)
const n=O(A,N)
return n>1?0:n<-1?Math.PI:Math.acos(n)}const A=Object(r.f)(),N=Object(r.f)()
function F(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}function E(e,t){if(e===t)return!0
const n=e[0],r=e[1],u=e[2],i=t[0],o=t[1],c=t[2],l=Object(a.c)()
return Math.abs(n-i)<=l*Math.max(1,Math.abs(n),Math.abs(i))&&Math.abs(r-o)<=l*Math.max(1,Math.abs(r),Math.abs(o))&&Math.abs(u-c)<=l*Math.max(1,Math.abs(u),Math.abs(c))}function U(e,t,n){const r=n[0]-t[0],a=n[1]-t[1],u=n[2]-t[2]
let i=r*r+a*a+u*u
return i>0?(i=1/Math.sqrt(i),e[0]=r*i,e[1]=a*i,e[2]=u*i,e):(e[0]=0,e[1]=0,e[2]=0,e)}const D=l,C=s,R=f,W=L,_=M,k=u,B=v,V=Object.freeze(Object.defineProperty({__proto__:null,abs:y,add:c,angle:P,bezier:function(e,t,n,r,a,u){const i=1-u,o=i*i,c=u*u,l=o*i,s=3*u*o,f=3*c*i,d=c*u
return e[0]=t[0]*l+n[0]*s+r[0]*f+a[0]*d,e[1]=t[1]*l+n[1]*s+r[1]*f+a[1]*d,e[2]=t[2]*l+n[2]*s+r[2]*f+a[2]*d,e},ceil:function(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e},copy:i,cross:w,direction:U,dist:W,distance:L,div:R,divide:f,dot:O,equals:E,exactEquals:F,floor:d,hermite:function(e,t,n,r,a,u){const i=u*u,o=i*(2*u-3)+1,c=i*(u-2)+u,l=i*(u-1),s=i*(3-2*u)
return e[0]=t[0]*o+n[0]*c+r[0]*l+a[0]*s,e[1]=t[1]*o+n[1]*c+r[1]*l+a[1]*s,e[2]=t[2]*o+n[2]*c+r[2]*l+a[2]*s,e},inverse:function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e},len:k,length:u,lerp:I,max:function(e,t,n){return e[0]=Math.max(t[0],n[0]),e[1]=Math.max(t[1],n[1]),e[2]=Math.max(t[2],n[2]),e},min:m,mul:C,multiply:s,negate:g,normalize:S,random:function(e,t){t=t||1
const n=a.a,r=2*n()*Math.PI,u=2*n()-1,i=Math.sqrt(1-u*u)*t
return e[0]=Math.cos(r)*i,e[1]=Math.sin(r)*i,e[2]=u*t,e},rotateX:function(e,t,n,r){const a=[],u=[]
return a[0]=t[0]-n[0],a[1]=t[1]-n[1],a[2]=t[2]-n[2],u[0]=a[0],u[1]=a[1]*Math.cos(r)-a[2]*Math.sin(r),u[2]=a[1]*Math.sin(r)+a[2]*Math.cos(r),e[0]=u[0]+n[0],e[1]=u[1]+n[1],e[2]=u[2]+n[2],e},rotateY:function(e,t,n,r){const a=[],u=[]
return a[0]=t[0]-n[0],a[1]=t[1]-n[1],a[2]=t[2]-n[2],u[0]=a[2]*Math.sin(r)+a[0]*Math.cos(r),u[1]=a[1],u[2]=a[2]*Math.cos(r)-a[0]*Math.sin(r),e[0]=u[0]+n[0],e[1]=u[1]+n[1],e[2]=u[2]+n[2],e},rotateZ:G,round:function(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e},scale:b,scaleAndAdd:h,set:o,sign:p,sqrDist:_,sqrLen:B,squaredDistance:M,squaredLength:v,str:function(e){return"vec3("+e[0]+", "+e[1]+", "+e[2]+")"},sub:D,subtract:l,transformMat3:T,transformMat4:j,transformQuat:x},Symbol.toStringTag,{value:"Module"}))},991:function(e,t,n){"use strict"
n.d(t,"a",(function(){return T})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return I})),n.d(t,"d",(function(){return b})),n.d(t,"e",(function(){return w})),n.d(t,"f",(function(){return o})),n.d(t,"g",(function(){return g})),n.d(t,"h",(function(){return d})),n.d(t,"i",(function(){return h})),n.d(t,"j",(function(){return v})),n.d(t,"k",(function(){return j})),n.d(t,"l",(function(){return c})),n.d(t,"m",(function(){return f})),n.d(t,"n",(function(){return s})),n.d(t,"o",(function(){return i})),n.d(t,"p",(function(){return l})),n.d(t,"q",(function(){return y})),n.d(t,"r",(function(){return p})),n.d(t,"s",(function(){return O})),n(23)
var r=n(985),a=n(1012)
const u=new Float32Array(1)
function i(e){--e
for(let t=1;t<32;t<<=1)e|=e>>t
return e+1}function o(e,t,n){return Math.min(Math.max(e,t),n)}function c(e){return 0==(e&e-1)}function l(e){return e--,e|=e>>1,e|=e>>2,e|=e>>4,e|=e>>8,e|=e>>16,++e}function s(e){return 10**Math.ceil(Math.LOG10E*Math.log(e))}function f(e,t,n){return e+(t-e)*n}function d(e){return e*Math.PI/180}function y(e){return 180*e/Math.PI}function p(e,t=1e-6){return(e<0?-1:1)/Math.max(Math.abs(e),t)}function m(e){return Math.acos(o(e,-1,1))}function b(e){return Math.asin(o(e,-1,1))}function h(e,t,n=1e-6){return e===t||!(!Number.isFinite(e)||!Number.isFinite(t))&&(e>t?e-t:t-e)<=n}const L=new DataView(new ArrayBuffer(Float64Array.BYTES_PER_ELEMENT))
const M=BigInt("1000000")
function v(e,t,n=1e-6){if(e===t)return!0
if(!Number.isFinite(e)||!Number.isFinite(t))return!1
const r=Math.abs(e-t),a=Math.abs(e),u=Math.abs(t)
if(0===e||0===t||a<1e-12&&u<1e-12){if(r>.01*n)return!1}else if(r/(a+u)>n)return!1
return!0}function g(e){return S(Math.max(-T,Math.min(e,T)))}function S(e){return u[0]=e,u[0]}function O(e,t,n){const r=o((n-e)/(t-e),0,1)
return r*r*(3-2*r)}function w(e,t){const n=Object(r.u)(e),a=b(e[2]/n),u=Math.atan2(e[1]/n,e[0]/n)
return Object(r.B)(t,n,a,u),t}function I(e,t,n){return Object(a.l)(e,t[0],t[1],t[2],t[3]*n)}function j(e){const t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[3]*e[3]+e[4]*e[4]+e[5]*e[5],r=e[6]*e[6]+e[7]*e[7]+e[8]*e[8]
return!(h(t,1)&&h(n,1)&&h(r,1))}(function(e){const t=function(e){return L.setFloat64(0,e),L.getBigInt64(0)}(e=Math.abs(e)),n=function(e){return L.setBigInt64(0,e),L.getFloat64(0)}(t<=M?M:t-M)
Math.abs(e-n)})(1)
const T=S(34028234663852886e22)},996:function(e,t,n){"use strict"
n.d(t,"a",(function(){return D})),n.d(t,"b",(function(){return U})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return L})),n.d(t,"e",(function(){return M})),n.d(t,"f",(function(){return o})),n.d(t,"g",(function(){return T})),n.d(t,"h",(function(){return v})),n.d(t,"i",(function(){return O})),n.d(t,"j",(function(){return I})),n.d(t,"k",(function(){return w})),n.d(t,"l",(function(){return c})),n.d(t,"m",(function(){return i})),n.d(t,"n",(function(){return G})),n.d(t,"o",(function(){return A})),n.d(t,"p",(function(){return E})),n.d(t,"q",(function(){return y})),n.d(t,"r",(function(){return d})),n.d(t,"s",(function(){return p})),n.d(t,"t",(function(){return s})),n.d(t,"u",(function(){return l})),n.d(t,"v",(function(){return h})),n.d(t,"w",(function(){return x})),n.d(t,"x",(function(){return j})),n.d(t,"y",(function(){return S})),n.d(t,"z",(function(){return g})),n.d(t,"A",(function(){return F})),n.d(t,"B",(function(){return P})),n.d(t,"C",(function(){return f})),n.d(t,"D",(function(){return b}))
n(235)
var r=n(991),a=n(23),u=n(770)
function i(e=C){return[e[0],e[1],e[2],e[3]]}function o(e){return[e[0],e[1],e[2],e[3]]}function c(e,t){return e!==t&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3]),e}function l(e,t,n,r,a=i()){return a[0]=e,a[1]=t,a[2]=n,a[3]=r,a}function s(e,t=i()){return t[0]=e.xmin,t[1]=e.ymin,t[2]=e.xmax,t[3]=e.ymax,t}function f(e,t){return new u.default({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:t})}function d(e,t){t[0]<e[0]&&(e[0]=t[0]),t[0]>e[2]&&(e[2]=t[0]),t[1]<e[1]&&(e[1]=t[1]),t[1]>e[3]&&(e[3]=t[1])}function y(e,t,n){if(Object(a.k)(t))c(n,e)
else if("length"in t)N(t)?(n[0]=Math.min(e[0],t[0]),n[1]=Math.min(e[1],t[1]),n[2]=Math.max(e[2],t[2]),n[3]=Math.max(e[3],t[3])):2!==t.length&&3!==t.length||(n[0]=Math.min(e[0],t[0]),n[1]=Math.min(e[1],t[1]),n[2]=Math.max(e[2],t[0]),n[3]=Math.max(e[3],t[1]))
else switch(t.type){case"extent":n[0]=Math.min(e[0],t.xmin),n[1]=Math.min(e[1],t.ymin),n[2]=Math.max(e[2],t.xmax),n[3]=Math.max(e[3],t.ymax)
break
case"point":n[0]=Math.min(e[0],t.x),n[1]=Math.min(e[1],t.y),n[2]=Math.max(e[2],t.x),n[3]=Math.max(e[3],t.y)}}function p(e,t,n=e){const r=t.length
let a=e[0],u=e[1],i=e[2],o=e[3]
for(let e=0;e<r;e++){const n=t[e]
a=Math.min(a,n[0]),u=Math.min(u,n[1]),i=Math.max(i,n[0]),o=Math.max(o,n[1])}return n[0]=a,n[1]=u,n[2]=i,n[3]=o,n}function m(e){for(let t=0;t<4;t++)if(!isFinite(e[t]))return!1
return!0}function b(e){return Object(a.k)(e)||e[0]>=e[2]?0:e[2]-e[0]}function h(e){return e[1]>=e[3]?0:e[3]-e[1]}function L(e){return b(e)*h(e)}function M(e,t=[0,0]){return t[0]=(e[0]+e[2])/2,t[1]=(e[1]+e[3])/2,t}function v(e,t){return w(e,t[0],t[1])}function g(e,t){const n=t[3],r=.5*(e[0]+e[2]),a=Math.abs(t[0]-r),u=.5*(e[2]-e[0])
if(a>n+u)return!1
const i=.5*(e[1]+e[3]),o=.5*(e[3]-e[1]),c=Math.abs(t[1]-i)
if(c>n+o)return!1
if(a<u||c<o)return!0
const l=a-u,s=c-o
return l*l+s*s<=n*n}function S(e,t,n){const r=e[0],a=e[1],u=e[2],i=e[3],{x:o,y:c}=t,{x:l,y:s}=n,f=(e,t)=>(s-c)*e+(o-l)*t+(l*c-o*s)<0,d=f(r,i),y=f(u,i),p=f(u,a),m=f(r,a)
return!(d===y&&y===p&&p===m&&m===d||o<r&&l<r||o>u&&l>u||c>i&&s>i||c<a&&s<a)}function O(e,t){return w(e,t.x,t.y)}function w(e,t,n){return t>=e[0]&&n>=e[1]&&t<=e[2]&&n<=e[3]}function I(e,t,n){return t[0]>=e[0]-n&&t[1]>=e[1]-n&&t[0]<=e[2]+n&&t[1]<=e[3]+n}function j(e,t){return Math.max(t[0],e[0])<=Math.min(t[2],e[2])&&Math.max(t[1],e[1])<=Math.min(t[3],e[3])}function T(e,t){return t[0]>=e[0]&&t[2]<=e[2]&&t[1]>=e[1]&&t[3]<=e[3]}function x(e,t,n){if(Object(a.k)(t))return c(n,e)
const u=t[0],i=t[1],o=t[2],l=t[3]
return n[0]=Object(r.f)(e[0],u,o),n[1]=Object(r.f)(e[1],i,l),n[2]=Object(r.f)(e[2],u,o),n[3]=Object(r.f)(e[3],i,l),n}function G(e,t){const n=(e[0]+e[2])/2,r=(e[1]+e[3])/2,a=Math.max(Math.abs(t[0]-n)-b(e)/2,0),u=Math.max(Math.abs(t[1]-r)-h(e)/2,0)
return Math.sqrt(a*a+u*u)}function P(e,t,n,r=e){return r[0]=e[0]+t,r[1]=e[1]+n,r[2]=e[2]+t,r[3]=e[3]+n,r}function A(e){return e?c(e,D):i(D)}function N(e){return null!=e&&4===e.length}function F(e){return!(0!==b(e)&&isFinite(e[0])||0!==h(e)&&isFinite(e[1]))}function E(e,t){return N(e)&&N(t)?e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]:e===t}const U=[-1/0,-1/0,1/0,1/0],D=[1/0,1/0,-1/0,-1/0],C=[0,0,0,0]}}])
