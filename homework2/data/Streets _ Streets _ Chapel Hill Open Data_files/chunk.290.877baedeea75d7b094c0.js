(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[290],{1190:function(e,t,n){"use strict"
n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return v})),n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return N})),n.d(t,"f",(function(){return $})),n.d(t,"g",(function(){return k})),n.d(t,"h",(function(){return L})),n.d(t,"i",(function(){return w})),n.d(t,"j",(function(){return b})),n.d(t,"k",(function(){return f})),n.d(t,"l",(function(){return l})),n.d(t,"m",(function(){return y})),n.d(t,"n",(function(){return x})),n.d(t,"o",(function(){return p})),n.d(t,"p",(function(){return j}))
var a,i=n(1262),o=n(378),r=n(376),s=n(34),c=n(1307)
function l(e,t){return`${Object(i.a)(t)}/home/item.html?id=${e}`}!function(e){e.CitationContact="metadata.resource.citation.contact",e.ResourceContact="metadata.resource.contact",e.MetadataContact="metadata.contact",e.ItemOwner="item.owner",e.None="none"}(a||(a={}))
const u=e=>{var t
const n=e.extent,a=Object(o.g)(n),i=(null===(t=e.properties)||void 0===t?void 0:t.boundary)||(a?"item":void 0),r={geometry:null,provenance:i}
if("item"===i&&a){const e=Object(o.b)(n),t=Object(o.f)(e)
r.center=[t.x,t.y],r.geometry=Object.assign(Object.assign({},Object(o.e)(e)),{type:"polygon"}),r.spatialReference=r.geometry.spatialReference}return r},d=e=>e&&e.isPortal,m=(e,t)=>!!e&&"public"===e.access&&!d(t),b=(e,t)=>!d(t)&&"public"===e.access&&"CSV"===e.type&&e.size<=5e6,f=(e,t,n)=>{let a=h(e,t,n)||g(e,t,n)
if(!a){const i=Object(r.c)(e),o=["app","dataset","document","map","template","project","discussion"]
let s="/content"
"feedback"===i?s="/feedback/surveys":p(e,n)?s="/pages":o.indexOf(i)>-1&&(s=`/${i}s`),a=`${s}/${t}`}return a},p=(e,t=[])=>["Hub Page","Site Page"].includes(e)||t.includes("hubPage"),h=(e,t,n)=>{let a
return"Solution"===e?a=(null==n?void 0:n.indexOf("Deployed"))>-1?`/content/${t}/about`:`/templates/${t}/about`:"Web Mapping Application"===e&&(null==n?void 0:n.indexOf("hubSolutionTemplate"))>-1&&(a=`/templates/${t}/about`),a},g=(e,t,n)=>{if("Hub Initiative"===e&&(null==n?void 0:n.indexOf("hubInitiativeTemplate"))>-1||"Hub Initiative Template"===e)return`/initiatives/templates/${t}/about`}
function y(e){return{updateFrequency:"metadata.dataIdInfo.resMaint.maintFreq.MaintFreqCd.@_value",reviseDate:"metadata.dataIdInfo.idCitation.date.reviseDate",pubDate:"metadata.dataIdInfo.idCitation.date.pubDate",createDate:"metadata.dataIdInfo.idCitation.date.createDate",metadataUpdateFrequency:"metadata.mdMaint.maintFreq.MaintFreqCd.@_value",metadataUpdatedDate:"metadata.mdDateSt"}[e]}function v(e,t){const n=y(t)
return n&&Object(s.a)(e,n)}var O
function j(e){let t,n
if(/^\d{4}$/.test(e=""+e))t=new Date(+e,0,1),n=O.Year
else if(/^\d{4}-\d{1,2}$/.test(e)){const a=e.split("-")
t=new Date(+a[0],+a[1]-1,1),n=O.Month}else if(/^\d{4}-\d{1,2}-\d{1,2}$/.test(e)){const a=e.split("-")
t=new Date(+a[0],+a[1]-1,+a[2]),n=O.Day}else Number.isNaN(Date.parse(e))||(t=new Date(e),n=e.includes("T")?O.Time:O.Day)
return t&&n&&{date:t,precision:n}}!function(e){e.Year="year",e.Month="month",e.Day="day",e.Time="time"}(O||(O={}))
const k=e=>{const t=e.spatialReference
if(!t||"object"==typeof t)return t
const n=parseInt(t+"",10)
return isNaN(n)?null:{wkid:n}},w=(e,t,n)=>{const a=U(t)
return a&&a.map(t=>({name:t.orName,url:D(t,e,n),isDataSource:S(t,e)}))},U=e=>{const t=[]
return I(Object(s.a)(e,"metadata.distInfo")||[]).forEach(e=>{I(e.distTranOps||[]).forEach(e=>{I(e.onLineSrc||[]).forEach(e=>{t.push(e)})})}),t.length?t:null},I=e=>Array.isArray(e)?e:[e],S=(e,t)=>{const n=t.url&&Object(c.a)(t.url)
return n&&e.linkage&&e.linkage.includes(n)},D=(e,t,n)=>{let a=e.linkage
const i=Object(s.a)(n,"authentication.token")
if(i&&S(e,t)){const t=new URL(e.linkage),n=new URLSearchParams(t.search)
n.set("token",i),t.search=n.toString(),a=t.toString()}return a},N=(e,t,n)=>{const a=Object(o.g)(e.extent)?e.extent:void 0,i=Object(o.g)(null==t?void 0:t.coordinates)?t.coordinates:void 0,r=4326===Object(s.a)(n,"extent.spatialReference.wkid")?Object(o.a)(n.extent):void 0
return a||i||r},C=(e,t)=>{const n=Object(s.a)(e,t)||{},{rpIndName:a,rpOrgName:i}=Array.isArray(n)?n[0]:n
return{individualName:a,organizationName:i}},L=(e,t)=>e.orgId||(null==t?void 0:t.orgId),$=(e,t,n,i)=>{const o={nameSource:a.None,organizationSource:a.None},r=C(t,"metadata.dataIdInfo.idCitation.citRespParty"),c=C(t,"metadata.dataIdInfo.idPoC"),l=C(t,"metadata.mdContact"),u=Object(s.a)(i,"fullName")
r.individualName?(o.name=r.individualName,o.nameSource=a.CitationContact):c.individualName?(o.name=c.individualName,o.nameSource=a.ResourceContact):l.individualName?(o.name=l.individualName,o.nameSource=a.MetadataContact):u&&(o.name=u,o.username=i.username,o.nameSource=a.ItemOwner)
const d=Object(s.a)(n,"name")
return r.organizationName?(o.organization=r.organizationName,o.organizationSource=a.CitationContact):c.organizationName?(o.organization=c.organizationName,o.organizationSource=a.ResourceContact):l.organizationName?(o.organization=l.organizationName,o.organizationSource=a.MetadataContact):d&&(o.organization=d,o.orgId=L(e,i),o.organizationSource=a.ItemOwner),o.isExternal=o.organizationSource===a.None&&"public"!==e.access,o},x=e=>e.reduce((e,t)=>{const n=t.split("/"),a=n[n.length-1]
return a&&e.push(a),e},[])},1262:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
var a=n(95)
function i(e){if("string"==typeof e)return e.replace(/\/sharing\/rest\/?$/,"")
if("object"==typeof e){const t=e.portalSelf||e,{portalHostname:n,urlKey:a,customBaseUrl:i}=t
if(n||a&&i)return t.isPortal?"https://"+t.portalHostname:`https://${t.urlKey}.${t.customBaseUrl}`}return i(Object(a.a)(e))}},1301:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o}))
var a=n(380)
const i=["site","project","initiative","page","discussion","content","org","group"],o=(e,t)=>{let n="/"
const o=Object(a.a)({type:e})
return(e=>i.includes(e))(o)&&(n=`/workspace/${o}s/${t}`),n}},1307:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o}))
var a=n(56),i=new RegExp(/.+(?:map|feature|image)server/i)
function o(e){var t=e.match(i)
return t?t[0]:function(e){var t=e.split("?")[0]
return Object(a.a)(t)}(e)}},1595:function(e,t,n){"use strict"
var a,i,o,r,s,c,l,u,d
n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return r})),n.d(t,"f",(function(){return u})),n.d(t,"g",(function(){return s})),n.d(t,"h",(function(){return c})),n.d(t,"i",(function(){return l})),function(e){e.start="start",e.center="center",e.end="end"}(a||(a={})),function(e){e.square="square",e.round="round"}(i||(i={})),function(e){e.none="none",e.low="low",e.medium="medium",e.heavy="heavy"}(o||(o={})),function(e){e.simple="simple",e.dataViz="dataViz",e.moreInfo="moreInfo"}(r||(r={})),function(e){e.before="before",e.after="after",e.below="below"}(s||(s={})),function(e){e.none="none",e.sparkline="sparkline",e.icon="icon",e.logo="logo"}(c||(c={})),function(e){e.always="always",e.hover="hover"}(l||(l={})),function(e){e.dynamic="dynamic",e.static="static"}(u||(u={})),function(e){e.thumbnail="thumbnail",e.icon="icon"}(d||(d={}))},1799:function(e,t,n){"use strict"
n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}))
var a=n(1301),i=n(1190)
function o(e,t,n){var a,i,o,r,s,c
let l
if("event"===t)l="#"
else if("none"===t)l=void 0
else switch(e.type){default:l={self:null===(a=e.links)||void 0===a?void 0:a.self,siteRelative:n?`${n}${(null===(i=e.links)||void 0===i?void 0:i.siteRelative)||""}`:null===(o=e.links)||void 0===o?void 0:o.siteRelative,workspaceRelative:n?`${n}${(null===(r=e.links)||void 0===r?void 0:r.workspaceRelative)||""}`:null===(s=e.links)||void 0===s?void 0:s.workspaceRelative}[t]
break
case"Hub Site Application":l=null===(c=e.links)||void 0===c?void 0:c.self}return l}function r(e,t,n,o){let r
if("event"===n)r="#"
else if("none"===n)r=void 0
else switch(e.type){default:r={self:Object(i.l)(e.id,t.hubRequestOptions),siteRelative:o?`${o}${Object(i.k)(e.type,e.id)}`:Object(i.k)(e.type,e.id),workspaceRelative:o?`${o}${Object(a.a)(e.type,e.id)}`:Object(a.a)(e.type,e.id)}[n]
break
case"Hub Site Application":r=Object(i.l)(e.id,t.hubRequestOptions)}return r}},2125:function(e,t,n){"use strict"
n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s}))
var a=n(1190),i=n(1799),o=n(376)
const r=(e,t,n)=>{const{actionLinks:a=[],baseUrl:o="",locale:r="en-US",target:s="self"}=n||{},l=Object(i.a)(e,t,s,o)
return Object.assign(Object.assign(Object.assign({},c(e,r)),{actionLinks:a,titleUrl:l}),e.thumbnailUrl&&{thumbnailUrl:e.thumbnailUrl})},s=(e,t)=>{const{actionLinks:n=[],baseUrl:a="",locale:o="en-US",target:r="self"}=t||{},s=Object(i.b)(e,r,a)
return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},c(e,o)),{actionLinks:n}),!isNaN(e.index)&&{index:e.index}),{titleUrl:s}),e.links.thumbnail&&{thumbnailUrl:e.links.thumbnail})},c=(e,t)=>{var n,i
const r=[{i18nKey:"type",value:e.type},{i18nKey:"dateUpdated",value:e.updatedDate.toLocaleDateString(t)},...(null===(n=e.tags)||void 0===n?void 0:n.length)?[{i18nKey:"tags",value:e.tags.join(", ")}]:[],...(null===(i=e.categories)||void 0===i?void 0:i.length)?[{i18nKey:"categories",value:Object(a.n)(e.categories).join(", ")}]:[],{i18nKey:"dateCreated",value:e.createdDate.toLocaleDateString(t)}]
return{access:e.access,badges:[],id:e.id,family:Object(o.c)(e.type),source:e.owner,summary:e.summary,title:e.name,type:e.type,additionalInfo:r}}},2126:function(e,t,n){"use strict"
n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s}))
var a=n(1190),i=n(1799),o=n(376)
const r=(e,t,n)=>{const{actionLinks:a=[],baseUrl:o="",locale:r="en-US",target:s="self"}=n||{},l=Object(i.a)(e,t,s,o)
return Object.assign(Object.assign(Object.assign({},c(e,r)),{actionLinks:a,titleUrl:l}),e.thumbnailUrl&&{thumbnailUrl:e.thumbnailUrl})},s=(e,t)=>{const{actionLinks:n=[],baseUrl:a="",locale:o="en-US",target:r="self"}=t||{},s=Object(i.b)(e,r,a)
return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},c(e,o)),{actionLinks:n}),!isNaN(e.index)&&{index:e.index}),{titleUrl:s}),e.links.thumbnail&&{thumbnailUrl:e.links.thumbnail})},c=(e,t)=>{var n,i
const r=[{i18nKey:"type",value:e.type},{i18nKey:"dateUpdated",value:e.updatedDate.toLocaleDateString(t)},...(null===(n=e.tags)||void 0===n?void 0:n.length)?[{i18nKey:"tags",value:e.tags.join(", ")}]:[],...(null===(i=e.categories)||void 0===i?void 0:i.length)?[{i18nKey:"categories",value:Object(a.n)(e.categories).join(", ")}]:[],{i18nKey:"dateCreated",value:e.createdDate.toLocaleDateString(t)}]
return{access:e.access,badges:[],id:e.id,family:Object(o.c)(e.type),source:e.owner,summary:e.summary,title:e.name,type:e.type,additionalInfo:r}}},2771:function(e,t,n){"use strict"
n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}))
var a,i=n(2125),o=n(2126),r=n(147),s=n(1799)
function c(e,t){let n
switch(e.type){default:n=l
break
case"Group":n=u
break
case"User":n=d
break
case"Hub Site Application":n=m
break
case"Hub Project":n=o.b
break
case"Hub Initiative":n=i.b}return n(e,t)}function l(e,t){var n
const{actionLinks:a=[],baseUrl:i="",locale:o="en-US",target:c="self"}=t||{}
let l={access:e.access,actionLinks:a,additionalInfo:[],badges:[],family:e.family,id:e.id,index:e.index,summary:e.summary,title:e.name,type:e.type}
return l=Object(r.d)("titleUrl",Object(s.b)(e,c,i),l),l=Object(r.d)("thumbnailUrl",null===(n=e.links)||void 0===n?void 0:n.thumbnail,l),l=b(e,l),l=f(e,l,o),l}function u(e,t){var n
const{actionLinks:a=[],baseUrl:i="",target:o="self"}=t||{}
let c={access:e.access,actionLinks:a,additionalInfo:[],badges:[],family:e.family,id:e.id,index:e.index,summary:e.summary,title:e.name,type:e.type}
return c=Object(r.d)("titleUrl",Object(s.b)(e,o,i),c),c=Object(r.d)("thumbnailUrl",null===(n=e.links)||void 0===n?void 0:n.thumbnail,c),c=b(e,c),e.isSharedUpdate&&c.badges.push({i18nKey:"sharedEdit",color:"grey",icon:"pencil-square"}),e.isOpenData&&c.badges.push({i18nKey:"opendata",color:"grey",icon:"star-circle"}),e.hasOwnProperty("membershipSummary")&&c.additionalInfo.push({i18nKey:"members",value:e.membershipSummary.total}),e.hasOwnProperty("contentCount")&&c.additionalInfo.push({i18nKey:"content",value:e.contentCount}),c}function d(e,t){var n
const{actionLinks:a=[],baseUrl:i="",target:o="self"}=t||{}
let c={access:e.access,actionLinks:a,additionalInfo:[],badges:[],family:e.family,id:e.id,index:e.index,summary:e.summary,title:e.name,type:e.type}
return c=Object(r.d)("titleUrl",Object(s.b)(e,o,i),c),c=Object(r.d)("thumbnailUrl",null===(n=e.links)||void 0===n?void 0:n.thumbnail,c),c=b(e,c),c}function m(e,t){var n
const{actionLinks:a=[],locale:i="en-US",target:o="self"}=t
let c={access:e.access,actionLinks:a,additionalInfo:[],badges:[],family:e.family,id:e.id,index:e.index,summary:e.summary,title:e.name,type:e.type}
return c=Object(r.d)("titleUrl",Object(s.b)(e,o),c),c=Object(r.d)("thumbnailUrl",null===(n=e.links)||void 0===n?void 0:n.thumbnail,c),c=b(e,c),c=f(e,c,i),c}function b(e,t){const n=e.owner,a=e.source,i=a&&n&&`${a} | ${n}`,o=e.orgName
return t.source=o||i||a||n,t}function f(e,t,n){var a,i
if(e.type&&t.additionalInfo.push({i18nKey:"type",value:e.type}),e.updatedDate&&t.additionalInfo.push({i18nKey:"dateUpdated",value:e.updatedDate.toLocaleDateString(n)}),(null===(a=e.tags)||void 0===a?void 0:a.length)&&t.additionalInfo.push({i18nKey:"tags",value:e.tags.join(", ")}),null===(i=e.categories)||void 0===i?void 0:i.length){const n=e.categories.map(e=>{const t=e.split("/")
return t[t.length-1]})
t.additionalInfo.push({i18nKey:"categories",value:n.join(", ")})}return e.hasOwnProperty("layerCount")&&t.additionalInfo.push({i18nKey:"layers",value:e.layerCount}),e.hasOwnProperty("pageCount")&&t.additionalInfo.push({i18nKey:"pages",value:e.pageCount}),e.createdDate&&t.additionalInfo.push({i18nKey:"dateCreated",value:e.createdDate.toLocaleDateString(n)}),t}!function(e){e.asc="asc",e.desc="desc"}(a||(a={}))},872:function(e,t,n){"use strict"
n.r(t),n.d(t,"arcgis_hub_generic_card",(function(){return s}))
var a=n(96),i=n(2771),o=n(1224),r=n(1595)
n(2125),n(1190),n(1262),n(95),n(56),n(378),n(34),n(16),n(376),n(1307),n(1799),n(1301),n(380),n(2126),n(147)
const s=class{constructor(e){Object(a.k)(this,e),this.actionLinks=void 0,this.baseUrl=void 0,this.clickable=void 0,this.corners=r.b.square,this.imageType=r.d.thumbnail,this.layout="row",this.lazy=!1,this.linkTarget=void 0,this.newTab=!1,this.selectable=!1,this.selected=!1,this.searchResult=void 0,this.shadow=r.c.none,this.showAdditionalInfo=!0,this.showBadges=!0,this.showOwner=!0,this.showThumbnail=!0,this.showType=!0,this.titleTag=void 0}get _model(){return this.searchResult?Object(i.b)(this.searchResult,{actionLinks:this.actionLinks,baseUrl:this.baseUrl,locale:this.intl.locale,target:this.linkTarget}):void 0}async componentWillLoad(){this.intl=await o.a.loadIntlForComponent(this.element)}render(){return Object(a.i)(a.b,{"data-element":"generic-card"},Object(a.i)("arcgis-hub-card",{clickable:this.clickable,corners:this.corners,imageType:this.imageType,layout:this.layout,lazy:this.lazy,model:this._model,newTab:this.newTab,selectable:this.selectable,selected:this.selected,shadow:this.shadow,showAdditionalInfo:this.showAdditionalInfo,showBadges:this.showBadges,showOwner:this.showOwner,showThumbnail:this.showThumbnail,showType:this.showType,titleTag:this.titleTag}))}static get assetsDirs(){return["locales"]}get element(){return Object(a.c)(this)}}}}])
