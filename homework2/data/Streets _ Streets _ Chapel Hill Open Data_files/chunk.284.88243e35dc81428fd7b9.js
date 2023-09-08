(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[284],{1124:function(t,e,r){"use strict"
r.d(e,"a",(function(){return n}))
const n=(t,...e)=>{e.forEach(e=>{if("function"!=typeof t[e])throw new Error(`Cannot bind context. ${e} must be a function`)
t[e]=t[e].bind(t)})}},1256:function(t,e,r){"use strict"
r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return s})),r.d(e,"c",(function(){return d}))
var n=r(40),o=r(95),a=r(16),i=r(377)
function s(t,e){var r=Object(o.a)(e)+"/community/groups/"+t,i=Object(n.a)({httpMethod:"GET"},e)
return Object(a.e)(r,i)}function c(t,e){var r=Object(o.a)(e)+"/community/groups/"+t+"/users",i=Object(n.a)({httpMethod:"GET"},e)
return Object(a.e)(r,i)}function d(t,e){var r=Object(o.a)(e)+"/community/groups/"+t+"/userlist",n=Object(i.a)(e||{},["name","num","start","sortField","sortOrder","joined","memberType"],{httpMethod:"GET"})
return Object(a.e)(r,n)}},1308:function(t,e,r){"use strict"
function n(t){return"{"===t[0]&&(t=t.substring(1,t.length-1)),/^(\{){0,1}[0-9a-fA-F]{8}[-]?[0-9a-fA-F]{4}[-]?[0-9a-fA-F]{4}[-]?[0-9a-fA-F]{4}[-]?[0-9a-fA-F]{12}(\}){0,1}$/gi.test(t)}r.d(e,"a",(function(){return n}))},1372:function(t,e,r){"use strict"
r.d(e,"a",(function(){return s})),r.d(e,"b",(function(){return c}))
var n=r(95),o=r(377),a=r(16)
function i(t){console&&console.warn&&console.warn.apply(console,[t])}var s=function(){function t(t){void 0===t&&(t=""),this.termStack=[],this.rangeStack=[],this.openGroups=0,this.q=t}return t.prototype.match=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
return this.termStack=this.termStack.concat(t),this},t.prototype.in=function(t){var e="`in("+(t?'"'+t+'"':"")+")`"
return this.hasRange||this.hasTerms?(t&&"*"!==t&&(this.q+=t+":"),this.commit()):(i(e+" was called with no call to `match(...)` or `from(...)`/`to(...)`. Your query was not modified."),this)},t.prototype.startGroup=function(){return this.commit(),this.openGroups>0&&(this.q+=" "),this.openGroups++,this.q+="(",this},t.prototype.endGroup=function(){return this.openGroups<=0?(i("`endGroup(...)` was called without calling `startGroup(...)` first. Your query was not modified."),this):(this.commit(),this.openGroups--,this.q+=")",this)},t.prototype.and=function(){return this.addModifier("and")},t.prototype.or=function(){return this.addModifier("or")},t.prototype.not=function(){return this.addModifier("not")},t.prototype.from=function(t){return this.hasTerms?(i('`from(...)` is not allowed after `match(...)` try using `.from(...).to(...).in(...)`. Optionally, you may see this because dates are incorrectly formatted. Dates should be a primative Date value, aka a number in milliseconds or Date object, ie new Date("2020-01-01").  Your query was not modified.'),this):(this.rangeStack[0]=t,this)},t.prototype.to=function(t){return this.hasTerms?(i('`to(...)` is not allowed after `match(...)` try using `.from(...).to(...).in(...)`. Optionally, you may see this because dates are incorrectly formatted. Dates should be a primative Date value, aka a number in milliseconds or Date object, ie new Date("2020-01-01"). Your query was not modified.'),this):(this.rangeStack[1]=t,this)},t.prototype.boost=function(t){return this.commit(),this.q+="^"+t,this},t.prototype.toParam=function(){return this.commit(),this.cleanup(),this.q},t.prototype.clone=function(){return this.commit(),this.cleanup(),new t(this.q+"")},t.prototype.addModifier=function(t){return this.currentModifer?(i("You have called `"+this.currentModifer+"()` after `"+t+"()`. Your current query was not modified."),this):(this.commit(),""===this.q&&"not"!==t?(i("You have called `"+t+"()` without calling another method to modify your query first. Try calling `match()` first."),this):(this.currentModifer=t,this.q+=""===this.q?"":" ",this.q+=t.toUpperCase()+" ",this))},t.prototype.needsQuotes=function(t){return/\s|:/g.test(t)},t.prototype.formatTerm=function(t){return t instanceof Date?t.getTime():"string"==typeof t&&this.needsQuotes(t)?'"'+t+'"':t},t.prototype.commit=function(){var t=this
return this.currentModifer=void 0,this.hasRange&&(this.q+="["+this.formatTerm(this.rangeStack[0])+" TO "+this.formatTerm(this.rangeStack[1])+"]",this.rangeStack=[void 0,void 0]),this.hasTerms&&(this.q+=this.termStack.map((function(e){return t.formatTerm(e)})).join(" "),this.termStack=[]),this},Object.defineProperty(t.prototype,"hasTerms",{get:function(){return this.termStack.length>0},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"hasRange",{get:function(){return this.rangeStack.length&&this.rangeStack[0]&&this.rangeStack[1]},enumerable:!1,configurable:!0}),t.prototype.cleanup=function(){if(this.openGroups>0)for(i("Automatically closing "+this.openGroups+" group(s). You can use `endGroup(...)` to remove this warning.");this.openGroups>0;)this.q+=")",this.openGroups--
var t=this.q
this.q=t.replace(/( AND ?| NOT ?| OR ?)*$/,""),t!==this.q&&i("`startGroup(...)` was called without calling `endGroup(...)` first. Your query was not modified."),this.q=this.q.replace(/(\(\))*/,"")},t}()
function c(t,e){var r,i
switch(r="string"==typeof t||t instanceof s?{httpMethod:"GET",params:{q:t}}:Object(o.a)(t,["q","num","start","sortField","sortOrder","searchUserAccess","searchUserName","filter","countFields","countSize","categories","categoryFilters"],{httpMethod:"GET"}),e){case"item":i="/search"
break
case"group":i="/community/groups"
break
case"groupContent":if("string"==typeof t||t instanceof s||!t.groupId)return Promise.reject(new Error("you must pass a `groupId` option to `searchGroupContent`"))
i="/content/groups/"+t.groupId+"/search"
break
default:i="/portals/self/users/search"}var d=Object(n.a)(r)+i
return Object(a.e)(d,r).then((function(r){return r.nextStart&&-1!==r.nextStart&&(r.nextPage=function(){var n
return"string"==typeof t||t instanceof s?n={q:t,start:r.nextStart}:(n=t).start=r.nextStart,c(n,e)}),r}))}},1393:function(t,e,r){"use strict"
r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return d})),r.d(e,"c",(function(){return s}))
var n=r(40),o=r(95),a=r(375),i=r(16)
function s(t){return Object(a.d)(t).then((function(e){var r=t.folderId?Object(o.a)(t)+"/content/users/"+e+"/"+t.folderId+"/items/"+t.item.id+"/update":Object(o.a)(t)+"/content/users/"+e+"/items/"+t.item.id+"/update"
return t.params=Object(n.a)(Object(n.a)({},t.params),Object(a.k)(t.item)),t.params.extent&&Object(a.i)(t.params.extent)&&(t.params.extent=Object(a.e)(t.params.extent)),Object(i.e)(r,t)}))}function c(t){return Object(a.d)(t).then((function(e){var r=Object(o.a)(t)+"/content/users/"+e+"/items/"+t.id+"/updateResources"
return t.params=Object(n.a)({file:t.resource,fileName:t.name,resourcesPrefix:t.prefix,text:t.content},t.params),void 0!==t.private&&(t.params.access=t.private?"private":"inherit"),Object(i.e)(r,t)}))}function d(t){return Object(a.d)(t).then((function(e){var r=Object(o.a)(t)+"/content/users/"+e+"/items/"+t.itemId+"/move",a=t.folderId
return a||(a="/"),t.params=Object(n.a)({folder:a},t.params),Object(i.e)(r,t)}))}},1481:function(t,e,r){"use strict"
r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return s}))
var n=r(40),o=r(95),a=r(375),i=r(16)
function s(t){return Object(a.d)(t).then((function(e){var r=Object(o.a)(t)+"/content/users/"+e+"/items/"+t.id+"/delete"
return Object(i.e)(r,t)}))}function c(t){return Object(a.d)(t).then((function(e){var r=Object(o.a)(t)+"/content/users/"+e+"/items/"+t.id+"/removeResources"
return t.params=Object(n.a)(Object(n.a)({},t.params),{resource:t.resource}),void 0!==t.deleteAll&&(t.params.deleteAll=t.deleteAll),Object(i.e)(r,t)}))}},1494:function(t,e,r){"use strict"
r.d(e,"a",(function(){return d})),r.d(e,"b",(function(){return l})),r.d(e,"c",(function(){return u}))
var n=r(40),o=r(95),a=r(375),i=r(377),s=r(16),c=r(1372)
function d(t){return Object(a.d)(t).then((function(e){var r=Object(o.a)(t)+"/content/users/"+e+"/createFolder"
return t.params=Object(n.a)({title:t.title},t.params),Object(s.e)(r,t)}))}function l(t){return function(t){return t.multipart&&!t.filename?Promise.reject(new Error("The filename is required for a multipart request.")):Object(a.d)(t).then((function(e){var r=Object(o.a)(t)+"/content/users/"+e,c=r+"/addItem"
t.folderId&&(c=r+"/"+t.folderId+"/addItem"),t.params=Object(n.a)(Object(n.a)({},t.params),Object(a.k)(t.item)),t.params.extent&&Object(a.i)(t.params.extent)&&(t.params.extent=Object(a.e)(t.params.extent))
var d=Object(i.a)(t,["owner","folderId","file","dataUrl","text","async","multipart","filename","overwrite"],{params:Object(n.a)({},t.params)})
return Object(s.e)(c,d)}))}(Object(n.a)({folderId:null},t))}function u(t){return Object(c.b)(t,"item")}},1496:function(t,e,r){"use strict"
r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return a})),r.d(e,"c",(function(){return o}))
var n=r(1308)
function o(t){const[e,r]=t?t.split("_"):[]
return{itemId:e,layerId:r}}function a(t){const{itemId:e}=o(t)
return!(!e||Object(n.a)(e))}function i(t,e){return/.+::.+/.test(t)?t:`${e}::${t}`}},1850:function(t,e,r){"use strict"
r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return s})),r.d(e,"c",(function(){return c})),r.d(e,"d",(function(){return i}))
var n=r(95),o=r(1256)
function a(t){var e=t.authentication.username,r=t.owner||e
return Object(n.a)(t)+"/content/users/"+encodeURIComponent(r)+"/items/"+t.id+"/share"}function i(t){var e=t.authentication.username
return(t.owner||e)===e}function s(t){return t.authentication.getUser(t).then((function(t){return t&&"org_admin"===t.role&&!t.roleId}))}function c(t){return Object(o.b)(t.groupId,t).then((function(t){return t.userMembership.memberType})).catch((function(){return"none"}))}},2286:function(t,e,r){"use strict"
r.d(e,"a",(function(){return i}))
var n=r(40),o=r(1850),a=r(16)
function i(t){var e=Object(o.a)(t)
return Object(o.d)(t)?s(e,t):Object(o.b)(t).then((function(r){if(r)return s(e,t)
throw Error("This item can not be shared by "+t.authentication.username+". They are neither the item owner nor an organization admin.")}))}function s(t,e){return e.params=Object(n.a)({org:!1,everyone:!1},e.params),"private"===e.access&&(e.params.groups=" "),"org"===e.access&&(e.params.org=!0),"public"===e.access&&(e.params.account=!0,e.params.everyone=!0),Object(a.e)(t,e)}},927:function(t,e,r){"use strict"
r.r(e),r.d(e,"hub_download_card",(function(){return B}))
var n=r(96),o=r(131),a=r(1224),i=r(1461),s=r(1124),c=r(237),d=r(34),l=r(375),u=r(1494),h=r(200),p=r(147),m=r(1372),f=r(1496),b=r(381),w=r(382),y=r(95),g=r(16),v=r(1393),O=r(2286),j=r(1481)
r(56),r(40),r(377),r(1308),r(1850),r(1256)
const I={csv:{name:"CSV",itemTypes:["CSV","CSV Collection"],supportsProjection:!0},kml:{name:"KML",itemTypes:["KML","KML Collection"],supportsProjection:!1},shapefile:{name:"Shapefile",itemTypes:["Shapefile"],supportsProjection:!0},fileGeodatabase:{name:"File Geodatabase",itemTypes:["File Geodatabase"],supportsProjection:!0},geojson:{name:"GeoJson",itemTypes:["GeoJson"],supportsProjection:!1},excel:{name:"Excel",itemTypes:["Microsoft Excel"],supportsProjection:!0},featureCollection:{name:"Feature Collection",itemTypes:["Feature Collection"],supportsProjection:!0}}
function x(t,e){const{onlyTypes:r,layerId:n,spatialRefId:o}=function(t){return t?{onlyTypes:t.onlyTypes,layerId:t.layerId,spatialRefId:t.spatialRefId}:{}}(e),a=Object.keys(I).map(t=>I[t]),i=new Set(Object(p.g)(a.filter(t=>!t.supportsProjection).map(t=>t.itemTypes)))
let s
s=r||Object(p.g)(a.map(t=>t.itemTypes))
const c=(new m.a).startGroup().match(E(t)).in("typekeywords").and().match(S(n)).in("typekeywords").endGroup().and().startGroup()
return function(t,e){const{types:r,noProjectionItemTypes:n,spatialRefId:o}=e,a=(t,e)=>{e.startGroup().match(/\s/g.test(t)?t:`"${t}"`).in("type").and().match(D(((t,e)=>{let r="4326"
return t&&!n.has(e)&&(r=t),r})(o,t))).in("typekeywords").endGroup()}
r.forEach((e,n)=>{a(e,t),n<r.length-1&&t.or()})}(c,{types:s,spatialRefId:o,noProjectionItemTypes:i}),c.endGroup(),c.toParam()}function D(t){return"spatialRefId:"+function(t){if("object"==typeof t){const{wkid:e,wkt:r}=t
return e?e+"":h.a.btoa(r)}return t}(function(t){let e
try{e=JSON.parse(t)}catch(r){e=t}return e}(t))}function E(t){return"exportItem:"+t}function S(t){return t?"exportLayer:0"+t:"exportLayer:null"}var T=Object(o.c)((function(t){var e=Object.prototype.hasOwnProperty,r="~"
function n(){}function o(t,e,r){this.fn=t,this.context=e,this.once=r||!1}function a(t,e,n,a,i){if("function"!=typeof n)throw new TypeError("The listener must be a function")
var s=new o(n,a||t,i),c=r?r+e:e
return t._events[c]?t._events[c].fn?t._events[c]=[t._events[c],s]:t._events[c].push(s):(t._events[c]=s,t._eventsCount++),t}function i(t,e){0==--t._eventsCount?t._events=new n:delete t._events[e]}function s(){this._events=new n,this._eventsCount=0}Object.create&&(n.prototype=Object.create(null),(new n).__proto__||(r=!1)),s.prototype.eventNames=function(){var t,n,o=[]
if(0===this._eventsCount)return o
for(n in t=this._events)e.call(t,n)&&o.push(r?n.slice(1):n)
return Object.getOwnPropertySymbols?o.concat(Object.getOwnPropertySymbols(t)):o},s.prototype.listeners=function(t){var e=r?r+t:t,n=this._events[e]
if(!n)return[]
if(n.fn)return[n.fn]
for(var o=0,a=n.length,i=new Array(a);o<a;o++)i[o]=n[o].fn
return i},s.prototype.listenerCount=function(t){var e=r?r+t:t,n=this._events[e]
return n?n.fn?1:n.length:0},s.prototype.emit=function(t,e,n,o,a,i){var s=r?r+t:t
if(!this._events[s])return!1
var c,d,l=this._events[s],u=arguments.length
if(l.fn){switch(l.once&&this.removeListener(t,l.fn,void 0,!0),u){case 1:return l.fn.call(l.context),!0
case 2:return l.fn.call(l.context,e),!0
case 3:return l.fn.call(l.context,e,n),!0
case 4:return l.fn.call(l.context,e,n,o),!0
case 5:return l.fn.call(l.context,e,n,o,a),!0
case 6:return l.fn.call(l.context,e,n,o,a,i),!0}for(d=1,c=new Array(u-1);d<u;d++)c[d-1]=arguments[d]
l.fn.apply(l.context,c)}else{var h,p=l.length
for(d=0;d<p;d++)switch(l[d].once&&this.removeListener(t,l[d].fn,void 0,!0),u){case 1:l[d].fn.call(l[d].context)
break
case 2:l[d].fn.call(l[d].context,e)
break
case 3:l[d].fn.call(l[d].context,e,n)
break
case 4:l[d].fn.call(l[d].context,e,n,o)
break
default:if(!c)for(h=1,c=new Array(u-1);h<u;h++)c[h-1]=arguments[h]
l[d].fn.apply(l[d].context,c)}}return!0},s.prototype.on=function(t,e,r){return a(this,t,e,r,!1)},s.prototype.once=function(t,e,r){return a(this,t,e,r,!0)},s.prototype.removeListener=function(t,e,n,o){var a=r?r+t:t
if(!this._events[a])return this
if(!e)return i(this,a),this
var s=this._events[a]
if(s.fn)s.fn!==e||o&&!s.once||n&&s.context!==n||i(this,a)
else{for(var c=0,d=[],l=s.length;c<l;c++)(s[c].fn!==e||o&&!s[c].once||n&&s[c].context!==n)&&d.push(s[c])
d.length?this._events[a]=1===d.length?d[0]:d:i(this,a)}return this},s.prototype.removeAllListeners=function(t){var e
return t?(e=r?r+t:t,this._events[e]&&i(this,e)):(this._events=new n,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=r,s.EventEmitter=s,t.exports=s}))
class C extends Error{constructor(t,e,r){super(t),this.status=r,this.url=e}}function R(t){const{host:e,route:r,query:n}=t,o=e.endsWith("/")?e:e+"/",a=new URL(r,o)
return a.search=function(t={}){const e=Object.keys(t).filter(e=>void 0!==t[e]).reduce((e,r)=>(e[r]=t[r],e),{})
return new URLSearchParams(e).toString()}(n),a.toString()}function k(t){const{datasetId:e,format:r,spatialRefId:n,geometry:o,where:a}=t
return`${e}:${r}:${n}:${o}:${a}`}const P={Shapefile:"shp",CSV:"csv","File Geodatabase":"fgdb",GeoJson:"geojson",KML:"kml"}
function _(t){if(!P[t])throw new Error("Unsupported Hub download format: "+t)
return P[t]}function L(t){const{host:e,datasetId:r,spatialRefId:n,geometry:o,where:a}=t,i=R({host:e,route:`/api/v3/datasets/${r}/downloads`,query:{spatialRefId:n,formats:_(t.format),geometry:o?JSON.stringify(o):void 0,where:a}})
return fetch(i).then(t=>{const{ok:e,status:r,statusText:n}=t
if(!e)throw new C(n,i,r)
return t.json()}).then(e=>(function({data:t}){if(!t)throw new Error('Unexpected API response; no "data" property.')
if(!Array.isArray(t))throw new Error('Unexpected API response; "data" is not an array.')
if(t.length>1)throw new Error('Unexpected API response; "data" contains more than one download.')}(e),function(t,e){const{data:[r]}=t
if(!r)return{downloadId:e,status:"not_ready"}
const{attributes:{contentLastModified:n,lastModified:o,status:a,errors:i,contentLength:s,cacheTime:c,source:{lastEditDate:d}},links:{content:l}}=r
return{downloadId:e,contentLastModified:n,lastEditDate:d,lastModified:o,status:a,errors:i||[],downloadUrl:l,contentLength:s,cacheTime:c}}(e,k(t))))}class M{disablePoll(){clearInterval(this.pollTimer),this.pollTimer=null}activatePoll(t){const{downloadId:e,eventEmitter:r,pollingInterval:n,existingFileDate:o=new Date(0).toISOString()}=t,a=new Date(o).getTime()
this.pollTimer=setInterval(()=>{L(t).then(t=>{if(function(t,e){const{status:r,lastModified:n}=t,o=new Date(n).getTime()
return"ready"===r||"ready_unknown"===r&&o>e}(t,a))return r.emit(e+"ExportComplete",{detail:{metadata:t}}),this.disablePoll()
if(function(t){return t&&("error_updating"===t.status||"error_creating"===t.status)}(t)){const{errors:[n]}=t
return r.emit(e+"ExportError",{detail:{error:n,metadata:t}}),this.disablePoll()}}).catch(t=>(r.emit(e+"PollingError",{detail:{error:t,metadata:{status:"error"}}}),this.disablePoll()))},n)}}var F,G,A
!function(t){t.READY="ready",t.READY_UNKNOWN="ready_unknown",t.STALE="stale",t.NOT_READY="not_ready",t.LOCKED="locked",t.STALE_LOCKED="stale_locked",t.DISABLED="disabled",t.CREATING="creating",t.UPDATING="updating",t.ERROR_CREATING="error_creating",t.ERROR_UPDATING="error_updating",t.ERROR="error"}(F||(F={}))
class q extends Error{constructor(t){super(t),Object.setPrototypeOf(this,q.prototype)}}class U{disablePoll(){clearInterval(this.pollTimer),this.pollTimer=null}activatePoll(t){const{downloadId:e,datasetId:r,format:n,spatialRefId:o,jobId:a,authentication:i,exportCreated:s,eventEmitter:c,pollingInterval:d}=t
this.pollTimer=setInterval(()=>{Object(l.f)({id:e,jobId:a,jobType:"export",authentication:i}).then(t=>"completed"===t.status?function(t){const{downloadId:e,datasetId:r,exportCreated:n,spatialRefId:o,eventEmitter:a,authentication:i}=t,{itemId:s,layerId:c}=Object(f.c)(r),d=[E(s),S(c),"modified:"+n,D(o)]
return Object(v.c)({item:{id:e,typekeywords:d.join(",")},authentication:i}).then(()=>Object(O.a)({id:e,authentication:i,access:"private"})).then(()=>function(t){return function(t){var e=t.folderId,r=t.start,n=void 0===r?1:r,o=t.num,a=void 0===o?10:o,i=t.authentication,s=e?"/"+e:""
return Object(l.d)(t).then((function(e){return Object(y.a)(t)+"/content/users/"+e+s})).then((function(t){return Object(g.e)(t,{httpMethod:"GET",authentication:i,params:{start:n,num:a}})}))}({authentication:t}).then(e=>{const r=e.folders.find(t=>"item-exports"===t.title)
return r?{folder:r}:Object(u.a)({authentication:t,title:"item-exports"})}).then(t=>{const{folder:e}=t
return e.id})}(i)).then(t=>Object(v.b)({itemId:e,folderId:t,authentication:i})).catch(t=>{if(!t||"CONT_0011"!==t.code)throw Object(j.b)({id:e,authentication:i}),new q(t.message)}).then(()=>a.emit(e+"ExportComplete",{detail:{metadata:{downloadId:e,status:F.READY,lastModified:(new Date).toISOString(),downloadUrl:R({host:i.portal,route:`content/items/${e}/data`,query:{token:i.token}})}}}))}({datasetId:r,format:n,authentication:i,downloadId:e,spatialRefId:o,exportCreated:s,eventEmitter:c}).then(()=>{this.disablePoll()}):"failed"===t.status?(c.emit(e+"ExportError",{detail:{error:new Error(t.statusMessage),metadata:{status:F.ERROR,errors:[new Error(t.statusMessage)]}}}),this.disablePoll()):void 0).catch(t=>(t instanceof q?c.emit(e+"ExportError",{detail:{error:t,metadata:{status:F.ERROR,errors:[t]}}}):c.emit(e+"PollingError",{detail:{error:t,metadata:{status:F.ERROR,errors:[t]}}}),this.disablePoll()))},d)}}function N(t){const{datasetId:e,spatialRefId:r,where:n}=t,o=e.split("_")[1]
if(!o)return r?{targetSR:{wkid:Number(r)}}:{}
const a=[{id:Number(o),where:n}]
return r?{layers:a,targetSR:{wkid:Number(r)}}:{layers:a}}function K(t){const{host:e,datasetId:r,format:n,spatialRefId:o,geometry:a,where:i,title:s,target:c,authentication:d}=t
return c&&"hub"!==c?function(t){const{datasetId:e,title:r,format:n,authentication:o}=t,[a]=e.split("_")
return function(t){var e=t.authentication,r=t.id,n=t.title,o=t.exportFormat,a=t.exportParameters
return Object(l.d)(t).then((function(e){return Object(y.a)(t)+"/content/users/"+e+"/export"})).then((function(t){return Object(g.e)(t,{httpMethod:"POST",authentication:e,params:{itemId:r,title:n,exportFormat:o,exportParameters:a}})}))}({id:a,exportFormat:n,exportParameters:N(t),title:r,authentication:o}).then(t=>{const{size:e,jobId:r,exportItemId:n}=t
return{downloadId:n,jobId:r,size:e,exportCreated:Date.now()}})}({datasetId:r,format:n,title:s,authentication:d,spatialRefId:o,where:i}):function(t){const{host:e,datasetId:r,spatialRefId:n,geometry:o,where:a}=t,i={spatialRefId:n,format:_(t.format),geometry:o,where:a},s=R({host:e,route:`/api/v3/datasets/${r}/downloads`})
return fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}).then(t=>{const{ok:e,status:r,statusText:n}=t
if(!e)throw new C(n,s,r)}).then(()=>({downloadId:k(t)}))}({host:e,datasetId:r,format:n,spatialRefId:o,geometry:a,where:i})}function $(t){const{format:e,layerId:r,layers:n}=t
return function(t,e){return void 0===t&&e.length>1}(r,n)&&(t=>t===G.CSV||t===G.KML)(e)?e+" Collection":e}function Y(t){return t.map(t=>{const{editingInfo:{lastEditDate:e}={}}=t
return e}).filter(t=>void 0!==t).sort((t,e)=>e-t)[0]}function H(t){return t.catch(t=>{if("ArcGISAuthError"===t.name)return t.retry(()=>Promise.resolve(null),1)
throw t})}!function(t){t.Shapefile="Shapefile",t.CSV="CSV",t.KML="KML",t.GeoJson="GeoJson",t.Excel="Excel",t["File Geodatabase"]="File Geodatabase",t["Feature Collection"]="Feature Collection",t["Scene Package"]="Scene Package"}(G||(G={})),function(t){t.FeatureService="Feature Service",t.MapService="Map Service"}(A||(A={}))
const z={year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric",hour12:!1}
function J(t,e){return"hub"===t||!!e}const B=class{constructor(t){Object(n.k)(this,t),this.hubTelemetry=Object(n.e)(this,"hubTelemetry",7),this.hubDownloadCardSuccess=Object(n.e)(this,"hubDownloadCardSuccess",7),this.contentLengthString=null,this.poller=null,this.loading=void 0,this.metadata=void 0,this.exportRequested=!1,this.apiError=void 0,this.host=void 0,this.datasetId=void 0,this.format=void 0,this.name=void 0,this.target="hub",this.spatialRefId="4326",this.where=void 0,this.geometry=void 0,this.filename=void 0,this.username=void 0,this.token=void 0,Object(s.a)(this,"exportDatasetComplete","exportDatasetError","exportPollingError","download","downloadKeyDown","exportDataset","exportDatasetKeyDown")}async componentWillLoad(){this.resetUndefinedProps(),await this.setLocalization(),this.setAuthentication(),await this.fetchMetadataAndSetState(),this.setTranslations()}buildDownloadTelemetry({isSuccess:t=!0,isCached:e=!0}={}){return Object.assign(Object.assign({},e?i.a.dictionary.category.interaction.action.download.details.cache:i.a.dictionary.category.interaction.action.download.details.export),{label:this.format,response:t?i.a.constants.response.SUCCESS:i.a.constants.response.FAILURE})}resetUndefinedProps(){["spatialRefId","where","geometry","filename","target"].forEach(t=>{this[t]="undefined"===this[t]?void 0:this[t]}),this.spatialRefId||(this.spatialRefId="4326")}async setLocalization(){this.intl=await a.a.loadIntlForComponent(this.element),this.dateTimeFormatter=new Intl.DateTimeFormat(this.intl.locale,z),this.setLabels()}setLabels(){this.labels=["buttonDownload","fileCreated","fileSize","buttonOptions","menuRequest"].reduce((t,e)=>(t[e]=this.intl.t(e),t),{})}setAuthentication(){this.username&&this.token&&(this.authentication=new c.a({username:this.username,portal:this.host+"/sharing/rest",token:this.token}),this.authentication.getToken=()=>new Promise(t=>{t(this.token)}))}setTranslations(){this.setContentLengthString()}setContentLengthString(){const{metadata:{contentLength:t}={}}=this
if(t){const e=function(t){const e=["Bytes","KB","MB","GB","TB"],r=t
if(0===r)return"n/a"
const n=Math.floor(Math.log(r)/Math.log(1024))
return 0===n?[r,e[n]]:[(r/1024**n).toFixed(1),e[n]]}(t)
this.contentLengthString="string"==typeof e?this.intl.t(e.toLowerCase()):`${e[0]} ${this.intl.t(e[1].toLowerCase())}`}}async watchHandler(){this.resetUndefinedProps(),await this.fetchMetadataAndSetState()}async disconnectedCallback(){this.resetUndefinedProps(),this.poller&&this.poller.disablePoll()}async fetchMetadataAndSetState(){this.poller&&this.poller.disablePoll()
const t=this.getServiceParams()
try{this.metadata=await function(t){const{host:e,datasetId:r,spatialRefId:n,format:o,geometry:a,where:i,target:s,authentication:c}=t
return s&&"hub"!==s?function(t){const{datasetId:e,authentication:r,format:n,spatialRefId:o,target:a,portal:i}=t,{itemId:s,layerId:c}=Object(f.c)(e)
let h,p,m,y
return Object(l.g)(s,{authentication:r,portal:i}).then(t=>{const{type:e,modified:o,url:a}=t
return y=t,p=o,m=e,function(t){const{format:e,layerId:r,url:n,type:o,modified:a,authentication:i,portal:s}=t
return o!==A.FeatureService&&o!==A.MapService?Promise.resolve({modified:a,format:e}):H(Object(b.a)({url:n,authentication:i,portal:s})).then(t=>{const e=(t.layers||[]).map(t=>H(Object(w.a)({url:`${n}/${t.id}`,authentication:i,portal:s})))
return Promise.all(e)}).then(t=>({format:$({format:e,layerId:r,layers:t}),modified:Y(t)}))}({url:a,authentication:r,type:e,modified:o,format:n,layerId:c,portal:i})}).then(t=>{const{modified:e,format:n}=t
return h=e,Object(u.c)({q:x(s,{layerId:c,onlyTypes:[n],spatialRefId:o}),num:1,sortField:"modified",sortOrder:"DESC",authentication:r,portal:i})}).then(t=>function(t){const{cachedDownload:e,serviceLastEditDate:r,authentication:n,target:o,item:a,format:i,portal:s}=t,c=void 0===r?void 0:new Date(r).toISOString(),{created:l,id:u}=e||{},h=function(t,e){return"portal"===t&&e&&(new Date).getTime()-e<=6e5}(o,r),p=function(t,e){const r=e?e.toLowerCase():"",n=!1!==Object(d.a)(t,"properties.downloadsConfig.enabled"),o=Object(d.a)(t,"properties.downloadsConfig.formats")||{},a=!o[r]||!1!==o[r].enabled
return!!n&&a}(a,i)?function(t,e,r){return e?t?t>e?r?F.STALE_LOCKED:F.STALE:F.READY:F.READY_UNKNOWN:r?F.LOCKED:F.NOT_READY}(r,l,h):F.DISABLED
return e?{downloadId:u,status:p,lastEditDate:c,contentLastModified:new Date(l).toISOString(),lastModified:new Date(l).toISOString(),downloadUrl:R({host:s||n.portal,route:`content/items/${u}/data`,query:{token:null==n?void 0:n.token}})}:{downloadId:k(t),status:p,lastEditDate:c}}({cachedDownload:t.results[0],datasetId:e,format:n,spatialRefId:o,serviceLastEditDate:h,itemModifiedDate:p,itemType:m,authentication:r,target:a,item:y,portal:i})).catch(t=>{throw t})}({portal:e+"/sharing/rest",datasetId:r,format:o,authentication:c,spatialRefId:n,target:s}):L({host:e,datasetId:r,format:o,spatialRefId:n,geometry:a,where:i})}(t),this.pollingEvent=new T,this.exportInProgress()&&this.poll()}catch(t){this.apiError=t}}getServiceParams(){const t={host:this.host,datasetId:this.datasetId,format:this.format,target:this.target,authentication:this.authentication,spatialRefId:this.spatialRefId}
return this.where&&(t.where=this.where),this.geometry&&(t.geometry=this.geometry),t}poll(){const t=this.getServiceParams()
this.pollingEvent.on(this.metadata.downloadId+"ExportComplete",this.exportDatasetComplete),this.pollingEvent.on(this.metadata.downloadId+"ExportError",this.exportDatasetError),this.pollingEvent.on(this.metadata.downloadId+"PollingError",this.exportPollingError),this.poller=function(t){const{target:e,downloadId:r,datasetId:n,jobId:o,format:a,authentication:i,exportCreated:s,eventEmitter:c,pollingInterval:d,spatialRefId:l,geometry:u,where:h,host:p,existingFileDate:m}=t
return e&&"hub"!==e?function(t){const e=new U
return e.activatePoll(t),e}({downloadId:r,datasetId:n,jobId:o,authentication:i,exportCreated:s,format:a,spatialRefId:l,eventEmitter:c,pollingInterval:d,geometry:u,where:h}):function(t){const e=new M
return e.activatePoll(t),e}({host:p,downloadId:r,datasetId:n,format:a,eventEmitter:c,pollingInterval:d,spatialRefId:l,geometry:u,where:h,existingFileDate:m})}(Object.assign(Object.assign({},t),{downloadId:this.metadata.downloadId,jobId:this.metadata.jobId,exportCreated:this.metadata.exportCreated,eventEmitter:this.pollingEvent,pollingInterval:5e3,existingFileDate:new Date(this.metadata.lastModified||0).toISOString()}))}async download(){if(this.metadata&&this.metadata.downloadUrl)try{const t=this.transferFile(this.metadata.downloadUrl)
return this.hubTelemetry.emit(this.buildDownloadTelemetry()),this.hubDownloadCardSuccess.emit(),t}catch(t){throw this.hubTelemetry.emit(this.buildDownloadTelemetry({isSuccess:!1})),t}return await this.exportDataset()}transferFile(t){return"Feature Collection"===this.format?window.open(t):window.location.href=t}async exportDataset(){this.exportRequested=!0,this.metadata.status=this.downloadCached()?"updating":"creating"
const t=Object.assign({title:this.filename},this.getServiceParams())
try{const e=await K(t)
this.metadata=Object.assign(Object.assign({},this.metadata),e),this.poll()}catch(t){this.apiError=t,this.metadata.status="error",this.metadata.errors=[t]}}exportDatasetComplete(t){if(this.exportDatasetHandler(t),this.hubTelemetry.emit(this.buildDownloadTelemetry({isCached:!1})),this.hubDownloadCardSuccess.emit(),this.exportRequested){const{downloadUrl:t}=this.metadata
if(t)return this.transferFile(t)}}exportDatasetError(t){this.exportDatasetHandler(t),this.hubTelemetry.emit(this.buildDownloadTelemetry({isSuccess:!1,isCached:!1}))}exportPollingError(t){this.apiError=t.detail.error,this.exportDatasetHandler(t),this.hubTelemetry.emit(this.buildDownloadTelemetry({isSuccess:!1,isCached:!1}))}exportDatasetHandler(t){this.metadata=Object.assign(Object.assign({},this.metadata),t.detail.metadata),this.pollingEvent.off(this.metadata.downloadId+"ExportComplete",this.exportDatasetComplete),this.pollingEvent.off(this.metadata.downloadId+"ExportError",this.exportDatasetError),this.pollingEvent.off(this.metadata.downloadId+"PollingError",this.exportDatasetError)}renderNotice(){const{metadata:t,apiError:e,exportRequested:r}=this,{status:o}=t||{}
let a=o
"locked"===o?a="not_ready":"stale_locked"===o&&(a="stale")
const i=e?e.status||e.message:void 0
return Object(n.i)("hub-download-notice",{"api-error":i,"cannot-export":!J(this.target,this.username),"export-requested":r,"file-status":a})}exportInProgress(){const{metadata:{status:t}={}}=this
return"creating"===t||"updating"===t}downloadCached(){const{metadata:{status:t}={}}=this
return["ready","ready_unknown","stale","stale_locked","updating","error_updating"].includes(t)}downloadUpToDate(){return this.metadata&&"ready"===this.metadata.status}isFormatDownloadDisabled(){return this.metadata&&"disabled"===this.metadata.status}renderFileDescription(){const t=[],{metadata:{lastModified:e}={}}=this
return this.downloadCached()?(e&&("rtl"===this.intl.direction?t.push(Object(n.i)("dt",null,this.dateTimeFormatter.format(new Date(e))),Object(n.i)("dd",{class:"rtl"},this.labels.fileCreated)):t.push(Object(n.i)("dt",{class:"ltr"},this.labels.fileCreated),Object(n.i)("dd",null,this.dateTimeFormatter.format(new Date(e))))),this.contentLengthString&&("rtl"===this.intl.direction?t.push(Object(n.i)("dt",null,this.contentLengthString),Object(n.i)("dd",{class:"rtl"},this.labels.fileSize)):t.push(Object(n.i)("dt",{class:"ltr"},this.labels.fileSize),Object(n.i)("dd",null,this.contentLengthString))),t):null}exportDatasetKeyDown(t){["Enter"," "].includes(t.key)&&this.exportDataset()}downloadKeyDown(t){["Enter"," "].includes(t.key)&&this.download()}renderDownloadControl(){return this.shouldUseDownloadButton()?Object(n.i)("calcite-button",{appearance:"solid",color:"blue",disabled:this.shouldDisableDownload(),"icon-position":"start",onClick:this.download,scale:"m",width:"full"},this.labels.buttonDownload):Object(n.i)("calcite-dropdown",{open:!1,placement:"top",scale:"m",type:"click"},Object(n.i)("calcite-button",{appearance:"solid",color:"blue","icon-end":"caretUp",scale:"m",slot:"trigger"},this.labels.buttonOptions),Object(n.i)("calcite-dropdown-group",{"selection-mode":"none"},Object(n.i)("calcite-dropdown-item",{hidden:this.exportInProgress(),onClick:this.exportDataset,onKeyDown:this.exportDatasetKeyDown,role:"menuitem","selection-mode":"none",tabindex:"0"},Object(n.i)("span",null,this.labels.menuRequest)),Object(n.i)("calcite-dropdown-item",{onClick:this.download,onKeyDown:this.downloadKeyDown,role:"menuitem","selection-mode":"none",tabindex:"0"},Object(n.i)("span",null,this.intl.t("menuDownload",{createdDate:this.dateTimeFormatter.format(new Date(this.metadata.lastModified))})))))}shouldUseDownloadButton(){return this.downloadUpToDate()||!this.downloadCached()||this.isFormatDownloadDisabled()||!J(this.target,this.username)}shouldDisableDownload(){return this.isFormatDownloadDisabled()||this.exportInProgress()&&!this.downloadCached()}render(){return Object(n.i)(n.b,{"data-element":"download-card"},Object(n.i)("calcite-card",{dir:this.intl.direction},Object(n.i)("h3",{slot:"title"},this.name),Object(n.i)("dl",{slot:"subtitle"},this.renderFileDescription()),Object(n.i)("div",{slot:"footer-start"},this.renderNotice(),this.renderDownloadControl())))}static get assetsDirs(){return["locales"]}get element(){return Object(n.c)(this)}static get watchers(){return{host:["watchHandler"],datasetId:["watchHandler"],format:["watchHandler"],spatialRefId:["watchHandler"],where:["watchHandler"],geometry:["watchHandler"],target:["watchHandler"],username:["watchHandler"],token:["watchHandler"]}}}
B.style=":host{font-size:1em}calcite-card div{font-size:1em}h3{font-size:1.25em}dl{font-size:inherit}dt,dd,calcite-dropdown-item{font-size:0.875em}dt{float:left;clear:left;margin-right:0.25rem}dt.ltr::after{content:':'}dd.rtl::after{content:':'}dd{margin:0px;padding:0px;margin-left:110px;margin-inline-start:0}a{vertical-align:middle}calcite-icon{margin-left:0.25rem}a:visited{color:inherit}calcite-dropdown{width:100%;--calcite-dropdown-width:100%;position:relative}calcite-dropdown-item span{color:#323232}calcite-button{width:100%}calcite-card div{width:100%}div[slot=\"footer-start\"]{display:block}"}}])
