(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[59],{1002:function(e,t,r){"use strict"
r.d(t,"a",(function(){return l}))
var n=r(968),s=r(975),i=r(1017),o=r(969)
class a{constructor(){this._emitter=new a.EventEmitter(this)}emit(e,t){return this._emitter.emit(e,t)}on(e,t){return this._emitter.on(e,t)}once(e,t){return this._emitter.once(e,t)}hasEventListener(e){return this._emitter.hasEventListener(e)}}!function(e){class t{constructor(e=null){this._target=e,this._listenersMap=null}clear(){this._listenersMap&&this._listenersMap.clear(),this._listenersMap=null}emit(e,t){const r=this._listenersMap&&this._listenersMap.get(e)
if(!r)return!1
const n=this._target||this
return[...r].forEach(e=>{e.call(n,t)}),r.length>0}on(e,t){if(Array.isArray(e)){const r=e.map(e=>this.on(e,t))
return Object(i.b)(r)}if(e.includes(","))throw new TypeError("Evented.on() with a comma delimited string of event types is not supported")
this._listenersMap||(this._listenersMap=new Map)
const r=this._listenersMap.get(e)||[]
return r.push(t),this._listenersMap.set(e,r),{remove:()=>{const r=this._listenersMap&&this._listenersMap.get(e)||[],n=r.indexOf(t)
n>=0&&r.splice(n,1)}}}once(e,t){const r=this.on(e,e=>{r.remove(),t.call(null,e)})
return r}hasEventListener(e){const t=this._listenersMap&&this._listenersMap.get(e)
return null!=t&&t.length>0}}e.EventEmitter=t,e.EventedMixin=e=>{let r=class extends e{constructor(){super(...arguments),this._emitter=new t}destroy(){this._emitter.clear()}emit(e,t){return this._emitter.emit(e,t)}on(e,t){return this._emitter.on(e,t)}once(e,t){return this._emitter.once(e,t)}hasEventListener(e){return this._emitter.hasEventListener(e)}}
return r=Object(n.a)([Object(o.a)("esri.core.Evented")],r),r}
let r=class extends s.a{constructor(){super(...arguments),this._emitter=new a.EventEmitter(this)}destroy(){this._emitter.clear()}emit(e,t){return this._emitter.emit(e,t)}on(e,t){return this._emitter.on(e,t)}once(e,t){return this._emitter.once(e,t)}hasEventListener(e){return this._emitter.hasEventListener(e)}}
r=Object(n.a)([Object(o.a)("esri.core.Evented")],r),e.EventedAccessor=r}(a||(a={}))
const l=a},1005:function(e,t,r){"use strict"
var n,s,i
let o
r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return h}))
const a=null!=(n=null==(s=globalThis.esriConfig)?void 0:s.locale)?n:null==(i=globalThis.dojoConfig)?void 0:i.locale
function l(){var e,t
return null!=(e=null!=a?a:null==(t=globalThis.navigator)?void 0:t.language)?e:"en"}function c(){return void 0===o&&(o=l()),o}const u=[]
function h(e){return u.push(e),{remove(){u.splice(u.indexOf(e),1)}}}const d=[]
function p(e){return d.push(e),{remove(){u.splice(d.indexOf(e),1)}}}null==globalThis.addEventListener||globalThis.addEventListener("languagechange",(function(){const e=null!=void 0?void 0:l()
o!==e&&(o=e,[...d].forEach(t=>{t.call(null,e)}),[...u].forEach(t=>{t.call(null,e)}))}))},1019:function(e,t,r){"use strict"
r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return u}))
var n=r(110),s=r(771),i=r(446),o=r(233),a=r(374)
const l=o.a.getLogger("esri.assets")
function c(e,t){return Object(s.default)(u(e),t)}function u(e){if(!n.default.assetsPath)throw l.errorOnce("The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50"),new i.a("assets:path-not-set","config.assetsPath is not set")
return Object(a.E)(n.default.assetsPath,e)}},1038:function(e,t,r){"use strict"
r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return c}))
var n=r(23),s=r(1005)
const i={ar:"ar-u-nu-latn"}
let o=new WeakMap,a={}
function l(e={}){const t={}
return null!=e.digitSeparator&&(t.useGrouping=e.digitSeparator),null!=e.places&&(t.minimumFractionDigits=t.maximumFractionDigits=e.places),t}function c(e,t){return-0===e&&(e=0),function(e){const t=e||a
if(!o.has(t)){const r=Object(s.b)(),n=i[Object(s.b)()]||r
o.set(t,new Intl.NumberFormat(n,e))}return Object(n.d)(o.get(t))}(t).format(e)}Object(s.a)(()=>{o=new WeakMap,a={}})},1039:function(e,t,r){"use strict"
r.d(t,"a",(function(){return g})),r.d(t,"b",(function(){return v}))
var n=r(976),s=r(1005)
const i={year:"numeric",month:"numeric",day:"numeric"},o={year:"numeric",month:"long",day:"numeric"},a={year:"numeric",month:"short",day:"numeric"},l={year:"numeric",month:"long",weekday:"long",day:"numeric"},c={hour:"numeric",minute:"numeric"},u={...c,second:"numeric"},h={"short-date":i,"short-date-short-time":{...i,...c},"short-date-short-time-24":{...i,...c,hour12:!1},"short-date-long-time":{...i,...u},"short-date-long-time-24":{...i,...u,hour12:!1},"short-date-le":i,"short-date-le-short-time":{...i,...c},"short-date-le-short-time-24":{...i,...c,hour12:!1},"short-date-le-long-time":{...i,...u},"short-date-le-long-time-24":{...i,...u,hour12:!1},"long-month-day-year":o,"long-month-day-year-short-time":{...o,...c},"long-month-day-year-short-time-24":{...o,...c,hour12:!1},"long-month-day-year-long-time":{...o,...u},"long-month-day-year-long-time-24":{...o,...u,hour12:!1},"day-short-month-year":a,"day-short-month-year-short-time":{...a,...c},"day-short-month-year-short-time-24":{...a,...c,hour12:!1},"day-short-month-year-long-time":{...a,...u},"day-short-month-year-long-time-24":{...a,...u,hour12:!1},"long-date":l,"long-date-short-time":{...l,...c},"long-date-short-time-24":{...l,...c,hour12:!1},"long-date-long-time":{...l,...u},"long-date-long-time-24":{...l,...u,hour12:!1},"long-month-year":{month:"long",year:"numeric"},"short-month-year":{month:"short",year:"numeric"},year:{year:"numeric"},"short-time":c,"long-time":u},d=Object(n.b)()({shortDate:"short-date",shortDateShortTime:"short-date-short-time",shortDateShortTime24:"short-date-short-time-24",shortDateLongTime:"short-date-long-time",shortDateLongTime24:"short-date-long-time-24",shortDateLE:"short-date-le",shortDateLEShortTime:"short-date-le-short-time",shortDateLEShortTime24:"short-date-le-short-time-24",shortDateLELongTime:"short-date-le-long-time",shortDateLELongTime24:"short-date-le-long-time-24",longMonthDayYear:"long-month-day-year",longMonthDayYearShortTime:"long-month-day-year-short-time",longMonthDayYearShortTime24:"long-month-day-year-short-time-24",longMonthDayYearLongTime:"long-month-day-year-long-time",longMonthDayYearLongTime24:"long-month-day-year-long-time-24",dayShortMonthYear:"day-short-month-year",dayShortMonthYearShortTime:"day-short-month-year-short-time",dayShortMonthYearShortTime24:"day-short-month-year-short-time-24",dayShortMonthYearLongTime:"day-short-month-year-long-time",dayShortMonthYearLongTime24:"day-short-month-year-long-time-24",longDate:"long-date",longDateShortTime:"long-date-short-time",longDateShortTime24:"long-date-short-time-24",longDateLongTime:"long-date-long-time",longDateLongTime24:"long-date-long-time-24",longMonthYear:"long-month-year",shortMonthYear:"short-month-year",year:"year"}),p=(d.apiValues,d.toJSON.bind(d),d.fromJSON.bind(d),{ar:"ar-u-nu-latn-ca-gregory"})
let f=new WeakMap,m=h["short-date-short-time"]
function g(e){return e?h[e]:null}function v(e,t){return function(e){const t=e||m
let r=f.get(t)
if(!r){const e=Object(s.b)(),n=p[Object(s.b)()]||e
r=new Intl.DateTimeFormat(n,t),f.set(t,r)}return r}(t).format(e)}Object(s.a)(()=>{f=new WeakMap,m=h["short-date-short-time"]})},1058:function(e,t,r){"use strict"
r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return h}))
var n,s,i=r(968),o=r(975),a=r(23),l=r(973),c=r(969);(s=n||(n={}))[s.PENDING=0]="PENDING",s[s.RESOLVED=1]="RESOLVED",s[s.REJECTED=2]="REJECTED"
class u{constructor(e){this.instance=e,this._resolver=Object(l.d)(),this._status=n.PENDING,this._resolvingPromises=[],this._resolver.promise.then(()=>{this._status=n.RESOLVED,this._cleanUp()},()=>{this._status=n.REJECTED,this._cleanUp()})}addResolvingPromise(e){this._resolvingPromises.push(e),this._tryResolve()}isResolved(){return this._status===n.RESOLVED}isRejected(){return this._status===n.REJECTED}isFulfilled(){return this._status!==n.PENDING}abort(){this._resolver.reject(Object(l.c)())}when(e,t){return this._resolver.promise.then(e,t)}_cleanUp(){this._allPromise=this._resolvingPromises=this._allPromise=null}_tryResolve(){if(this.isFulfilled())return
const e=Object(l.d)(),t=[...this._resolvingPromises,Object(a.d)(e.promise)],r=this._allPromise=Promise.all(t)
r.then(()=>{this.isFulfilled()||this._allPromise!==r||this._resolver.resolve(this.instance)},e=>{this.isFulfilled()||this._allPromise!==r||Object(l.j)(e)||this._resolver.reject(e)}),e.resolve()}}const h=e=>{let t=class extends e{constructor(...e){super(...e),this._promiseProps=new u(this),this.addResolvingPromise(Promise.resolve())}isResolved(){return this._promiseProps.isResolved()}isRejected(){return this._promiseProps.isRejected()}isFulfilled(){return this._promiseProps.isFulfilled()}when(e,t){return new Promise((e,t)=>{this._promiseProps.when(e,t)}).then(e,t)}catch(e){return this.when(null,e)}addResolvingPromise(e){e&&!this._promiseProps.isFulfilled()&&this._promiseProps.addResolvingPromise("_promiseProps"in e?e.when():e)}}
return t=Object(i.a)([Object(c.a)("esri.core.Promise")],t),t}
let d=class extends(h(o.a)){}
d=Object(i.a)([Object(c.a)("esri.core.Promise")],d)},1091:function(e,t,r){"use strict"
r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h}))
var n=r(1128),s=r(999),i=r(1176)
function o(e,t,r){if(!e||!e.read||!1===e.read.enabled||!e.read.source)return!1
const s=e.read.source
if("string"==typeof s){if(s===t)return!0
if(s.includes(".")&&0===s.indexOf(t)&&Object(n.a)(s,r))return!0}else for(const e of s){if(e===t)return!0
if(e.includes(".")&&0===e.indexOf(t)&&Object(n.a)(e,r))return!0}return!1}function a(e,t,r,n,s){let a=Object(i.b)(t[r],s);(function(e){return e&&(!e.read||!1!==e.read.enabled&&!e.read.source)})(a)&&(e[r]=!0)
for(const l of Object.getOwnPropertyNames(t))a=Object(i.b)(t[l],s),o(a,r,n)&&(e[l]=!0)}function l(e,t,r,n){const s=r.metadatas,o=Object(i.a)(s[t],"any",n),a=o&&o.default
if(void 0===a)return
const l="function"==typeof a?a.call(e,t,n):a
void 0!==l&&r.set(t,l)}const c={origin:"service"}
function u(e,t,r=c){if(!t||"object"!=typeof t)return
const o=Object(s.a)(e),u=o.metadatas,h={}
for(const e of Object.getOwnPropertyNames(t))a(h,u,e,t,r)
o.setDefaultOrigin(r.origin)
for(const s of Object.getOwnPropertyNames(h)){const a=Object(i.b)(u[s],r).read,l=a&&a.source
let c
c=l&&"string"==typeof l?Object(n.c)(t,l):t[s],a&&a.reader&&(c=a.reader.call(e,c,t,r)),void 0!==c&&o.set(s,c)}if(!r||!r.ignoreDefaults){o.setDefaultOrigin("defaults")
for(const t of Object.getOwnPropertyNames(u))h[t]||l(e,t,o,r)}o.setDefaultOrigin("user")}function h(e,t,r,n=c){var s
const i={...n,messages:[]}
r(i),null==(s=i.messages)||s.forEach(t=>{"warning"!==t.type||e.loaded?n&&n.messages&&n.messages.push(t):e.loadWarnings.push(t)})}},1096:function(e,t,r){"use strict"
r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return d}))
var n=r(445),s=r(446),i=r(233),o=r(1006),a=r(999),l=r(1176)
function c(e,t,r,n,s){var i,o
const a={}
return null!=(i=t.write)&&null!=(o=i.writer)&&o.call(e,n,a,r,s),a}function u(e,t,r,a,l,c){if(!a||!a.write)return!1
const u=e.get(r)
if(!l&&a.write.overridePolicy){const t=a.write.overridePolicy.call(e,u,r,c)
void 0!==t&&(l=t)}if(l||(l=a.write),!l||!1===l.enabled)return!1
if((null===u&&!l.allowNull&&!l.writerEnsuresNonNull||void 0===u)&&l.isRequired){const t=new s.a("web-document-write:property-required",`Missing value for required property '${r}' on '${e.declaredClass}'`,{propertyName:r,target:e})
return t&&c&&c.messages?c.messages.push(t):t&&!c&&i.a.getLogger("esri.core.accessorSupport.write").error(t.name,t.message),!1}return!(void 0===u||null===u&&!l.allowNull&&!l.writerEnsuresNonNull||(!t.store.multipleOriginsSupported||t.store.originOf(r)===o.a.DEFAULTS)&&function(e,t,r,s,i){const o=s.default
if(void 0===o)return!1
if(null!=s.defaultEquals)return s.defaultEquals(i)
if("function"==typeof o){if(Array.isArray(i)){const s=o.call(e,t,r)
return Object(n.e)(s,i)}return!1}return o===i}(e,r,c,a,u)||!l.ignoreOrigin&&c&&c.origin&&t.store.multipleOriginsSupported&&t.store.originOf(r)<Object(o.e)(c.origin))}function h(e,t,r,n){const s=Object(a.a)(e),i=s.metadatas,o=Object(l.c)(i[t],n)
return!!o&&u(e,s,t,o,r,n)}function d(e,t,r){if(e&&"function"==typeof e.toJSON&&(!e.toJSON.isDefaultToJSON||!e.write))return Object(a.c)(t,e.toJSON(r))
const n=Object(a.a)(e),s=n.metadatas
for(const d in s){var i,h
const p=Object(l.c)(s[d],r)
if(!u(e,n,d,p,void 0,r))continue
const f=e.get(d),m=c(e,p,p.write&&"string"==typeof p.write.target?p.write.target:d,f,r)
Object.keys(m).length>0&&(t=Object(a.c)(t,m),null!=r&&null!=(i=r.resources)&&null!=(h=i.pendingOperations)&&h.length&&r.resources.pendingOperations.push(Promise.all(r.resources.pendingOperations).then(()=>Object(a.c)(t,m,()=>"replace-arrays"))),r&&r.writtenProperties&&r.writtenProperties.push({target:e,propName:d,oldOrigin:Object(o.d)(n.store.originOf(d)),newOrigin:r.origin}))}return t}},1178:function(e,t,r){"use strict"
r.d(t,"a",(function(){return s}))
var n=r(1006)
function s(e,t,r){t.keys().forEach(e=>{r.set(e,t.get(e),n.a.DEFAULTS)})
const s=e.metadatas
Object.keys(s).forEach(t=>{e.internalGet(t)&&r.set(t,e.internalGet(t),n.a.DEFAULTS)})}},1205:function(e,t,r){"use strict"
r.d(t,"a",(function(){return s}))
var n=r(998)
function s(){return function(e,t){if(!e[t])throw new TypeError(`Cannot auto bind undefined function '${t}'`)
return{value:i(e[t])}}}function i(e){return function(t,...r){!function(e){const t=null==e?void 0:e.type
return e instanceof KeyboardEvent||"keyup"===t||"keydown"===t||"keypress"===t}(t)?e.call(this,t,...r):Object(n.d)(t.key)&&(t.preventDefault(),t.stopPropagation(),t.target.click())}}},1211:function(e,t,r){"use strict"
r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return o}))
const n="calcite-mode-"
function s(){return getComputedStyle(document.body).getPropertyValue("--esri-calcite-mode-name").replace(/\s|'|"/g,"").startsWith("dark")}function i(){return`${n}${s()?"dark":"light"}`}function o(e){(function(e){Array.from(e.classList).forEach(t=>{t.startsWith(n)&&e.classList.remove(t)})})(e),e.classList.add(i())}},1395:function(e,t,r){"use strict"
function n(e){return t=>{t.hasOwnProperty("_delegatedEventNames")||(t._delegatedEventNames=t._delegatedEventNames?t._delegatedEventNames.slice():[])
const r=t._delegatedEventNames,n=Array.isArray(e)?e:function(e){return e.split(",").map(e=>e.trim())}(e)
r.push(...n)}}r.d(t,"a",(function(){return n}))},1566:function(e,t,r){"use strict"
function n(e){return e&&"function"==typeof e.render}function s(e){return e&&"function"==typeof e.postMixInProperties&&"function"==typeof e.buildRendering&&"function"==typeof e.postCreate&&"function"==typeof e.startup}r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return n})),r(1205),r(1099),r(1395),r(1018),r(998),r(1211)},784:function(e,t,r){"use strict"
r.r(t),r.d(t,"default",(function(){return Ue}))
var n=r(196),s=r(968),i=r(110),o=r(771),a=r(446),l=r(1002),c=r(1043),u=r(234),h=r(146),d=r(973),p=r(978),f=r(374),m=r(970),g=(r(971),r(969)),v=(r(445),r(1115)),b=r(1061),_=r(998),y=r(1099),O=r(1018)
const w="esri-identity-form",S="esri-identity-form__group",j="esri-identity-form__label",I="esri-identity-form__footer",k="esri-input",A="esri-button",T="esri-button--secondary"
let U=class extends b.a{constructor(e,t){super(e,t),this._usernameInputNode=null,this._passwordInputNode=null,this.signingIn=!1,this.server=null,this.resource=null,this.error=null,this.oAuthPrompt=!1}render(){const{error:e,server:t,resource:r,signingIn:n,oAuthPrompt:s,messages:i}=this,o=Object(O.a)("div",{class:S},Object(v.a)(s?i.oAuthInfo:i.info,{server:t&&/\.arcgis\.com/i.test(t)?"ArcGIS Online":t,resource:`(${r||i.lblItem})`})),a=s?null:Object(O.a)("div",{class:S,key:"username"},Object(O.a)("label",{class:j},i.lblUser,Object(O.a)("input",{value:"",required:!0,autocomplete:"off",spellcheck:!1,type:"text",bind:this,afterCreate:_.i,"data-node-ref":"_usernameInputNode",class:k}))),l=s?null:Object(O.a)("div",{class:S,key:"password"},Object(O.a)("label",{class:j},i.lblPwd,Object(O.a)("input",{value:"",required:!0,type:"password",bind:this,afterCreate:_.i,"data-node-ref":"_passwordInputNode",class:k}))),c=Object(O.a)("div",{class:this.classes(S,I)},Object(O.a)("input",{type:"submit",disabled:!!n,value:n?i.lblSigning:i.lblOk,class:A}),Object(O.a)("input",{type:"button",value:i.lblCancel,bind:this,onclick:this._cancel,class:this.classes(A,T)})),u=e?Object(O.a)("div",null,e.details&&e.details.httpStatus?i.invalidUser:i.noAuthService):null
return Object(O.a)("form",{class:w,bind:this,onsubmit:this._submit},o,u,a,l,c)}_cancel(){this._set("signingIn",!1),this._usernameInputNode&&(this._usernameInputNode.value=""),this._passwordInputNode&&(this._passwordInputNode.value=""),this.emit("cancel")}_submit(e){e.preventDefault(),this._set("signingIn",!0)
const t=this.oAuthPrompt?{}:{username:this._usernameInputNode&&this._usernameInputNode.value,password:this._passwordInputNode&&this._passwordInputNode.value}
this.emit("submit",t)}}
Object(s.a)([Object(m.b)(),Object(y.a)("esri/identity/t9n/identity")],U.prototype,"messages",void 0),Object(s.a)([Object(m.b)()],U.prototype,"signingIn",void 0),Object(s.a)([Object(m.b)()],U.prototype,"server",void 0),Object(s.a)([Object(m.b)()],U.prototype,"resource",void 0),Object(s.a)([Object(m.b)()],U.prototype,"error",void 0),Object(s.a)([Object(m.b)()],U.prototype,"oAuthPrompt",void 0),U=Object(s.a)([Object(g.a)("esri.identity.IdentityForm")],U)
const P=U
var x=r(1017),E=r(1566),D=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],R=D.join(","),N="undefined"==typeof Element,C=N?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,L=!N&&Element.prototype.getRootNode?function(e){var t
return null==e||null===(t=e.getRootNode)||void 0===t?void 0:t.call(e)}:function(e){return null==e?void 0:e.ownerDocument},F=function e(t,r){var n
void 0===r&&(r=!0)
var s=null==t||null===(n=t.getAttribute)||void 0===n?void 0:n.call(t,"inert")
return""===s||"true"===s||r&&t&&e(t.parentNode)},M=function(e,t,r){if(F(e))return[]
var n=Array.prototype.slice.apply(e.querySelectorAll(R))
return t&&C.call(e,R)&&n.unshift(e),n.filter(r)},q=function e(t,r,n){for(var s=[],i=Array.from(t);i.length;){var o=i.shift()
if(!F(o,!1))if("SLOT"===o.tagName){var a=o.assignedElements(),l=e(a.length?a:o.children,!0,n)
n.flatten?s.push.apply(s,l):s.push({scopeParent:o,candidates:l})}else{C.call(o,R)&&n.filter(o)&&(r||!t.includes(o))&&s.push(o)
var c=o.shadowRoot||"function"==typeof n.getShadowRoot&&n.getShadowRoot(o),u=!F(c,!1)&&(!n.shadowRootFilter||n.shadowRootFilter(o))
if(c&&u){var h=e(!0===c?o.children:c.children,!0,n)
n.flatten?s.push.apply(s,h):s.push({scopeParent:o,candidates:h})}else i.unshift.apply(i,o.children)}}return s},V=function(e,t){return e.tabIndex<0&&(t||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||function(e){var t,r=null==e||null===(t=e.getAttribute)||void 0===t?void 0:t.call(e,"contenteditable")
return""===r||"true"===r}(e))&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},J=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},G=function(e){return"INPUT"===e.tagName},z=function(e){var t=e.getBoundingClientRect(),r=t.width,n=t.height
return 0===r&&0===n},B=function(e,t){return!(t.disabled||F(t)||function(e){return G(e)&&"hidden"===e.type}(t)||function(e,t){var r=t.displayCheck,n=t.getShadowRoot
if("hidden"===getComputedStyle(e).visibility)return!0
var s=C.call(e,"details>summary:first-of-type")?e.parentElement:e
if(C.call(s,"details:not([open]) *"))return!0
if(r&&"full"!==r&&"legacy-full"!==r){if("non-zero-area"===r)return z(e)}else{if("function"==typeof n){for(var i=e;e;){var o=e.parentElement,a=L(e)
if(o&&!o.shadowRoot&&!0===n(o))return z(e)
e=e.assignedSlot?e.assignedSlot:o||a===e.ownerDocument?o:a.host}e=i}if(function(e){var t,r,n,s,i=e&&L(e),o=null===(t=i)||void 0===t?void 0:t.host,a=!1
if(i&&i!==e)for(a=!!(null!==(r=o)&&void 0!==r&&null!==(n=r.ownerDocument)&&void 0!==n&&n.contains(o)||null!=e&&null!==(s=e.ownerDocument)&&void 0!==s&&s.contains(e));!a&&o;){var l,c,u
a=!(null===(c=o=null===(l=i=L(o))||void 0===l?void 0:l.host)||void 0===c||null===(u=c.ownerDocument)||void 0===u||!u.contains(o))}return a}(e))return!e.getClientRects().length
if("legacy-full"!==r)return!0}return!1}(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var r=0;r<t.children.length;r++){var n=t.children.item(r)
if("LEGEND"===n.tagName)return!!C.call(t,"fieldset[disabled] *")||!n.contains(e)}return!0}t=t.parentElement}return!1}(t))},H=function(e,t){return!(function(e){return function(e){return G(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0
var t,r=e.form||L(e),n=function(e){return r.querySelectorAll('input[type="radio"][name="'+e+'"]')}
if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=n(window.CSS.escape(e.name))
else try{t=n(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var s=function(e,t){for(var r=0;r<e.length;r++)if(e[r].checked&&e[r].form===t)return e[r]}(t,e.form)
return!s||s===e}(e)}(t)||V(t)<0||!B(e,t))},W=function(e){var t=parseInt(e.getAttribute("tabindex"),10)
return!!(isNaN(t)||t>=0)},$=function(e,t){if(t=t||{},!e)throw new Error("No node provided")
return!1!==C.call(e,R)&&H(t,e)},K=D.concat("iframe").join(","),Y=function(e,t){if(t=t||{},!e)throw new Error("No node provided")
return!1!==C.call(e,K)&&B(t,e)}
function Q(e,t){var r=Object.keys(e)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e)
t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function X(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{}
t%2?Q(Object(r),!0).forEach((function(t){Z(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Z(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e
var r=e[Symbol.toPrimitive]
if(void 0!==r){var n=r.call(e,t)
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string")
return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var ee=function(e){return"Tab"===e.key||9===e.keyCode},te=function(e){return ee(e)&&!e.shiftKey},re=function(e){return ee(e)&&e.shiftKey},ne=function(e){return setTimeout(e,0)},se=function(e,t){var r=-1
return e.every((function(e,n){return!t(e)||(r=n,!1)})),r},ie=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n]
return"function"==typeof e?e.apply(void 0,r):e},oe=function(e){return e.target.shadowRoot&&"function"==typeof e.composedPath?e.composedPath()[0]:e.target},ae=[],le=function(e,t){var r,n=(null==t?void 0:t.document)||document,s=(null==t?void 0:t.trapStack)||ae,i=X({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:te,isKeyBackward:re},t),o={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},a=function(e,t,r){return e&&void 0!==e[t]?e[t]:i[r||t]},l=function(e){return o.containerGroups.findIndex((function(t){var r=t.container,n=t.tabbableNodes
return r.contains(e)||n.find((function(t){return t===e}))}))},c=function(e){var t=i[e]
if("function"==typeof t){for(var r=arguments.length,s=new Array(r>1?r-1:0),o=1;o<r;o++)s[o-1]=arguments[o]
t=t.apply(void 0,s)}if(!0===t&&(t=void 0),!t){if(void 0===t||!1===t)return t
throw new Error("`".concat(e,"` was specified but was not a node, or did not return a node"))}var a=t
if("string"==typeof t&&!(a=n.querySelector(t)))throw new Error("`".concat(e,"` as selector refers to no known node"))
return a},u=function(){var e=c("initialFocus")
if(!1===e)return!1
if(void 0===e)if(l(n.activeElement)>=0)e=n.activeElement
else{var t=o.tabbableGroups[0]
e=t&&t.firstTabbableNode||c("fallbackFocus")}if(!e)throw new Error("Your focus-trap needs to have at least one focusable element")
return e},h=function(){if(o.containerGroups=o.containers.map((function(e){var t,r,n=function(e,t){return function e(t){var r=[],n=[]
return t.forEach((function(t,s){var i=!!t.scopeParent,o=i?t.scopeParent:t,a=V(o,i),l=i?e(t.candidates):o
0===a?i?r.push.apply(r,l):r.push(o):n.push({documentOrder:s,tabIndex:a,item:t,isScope:i,content:l})})),n.sort(J).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(r)}((t=t||{}).getShadowRoot?q([e],t.includeContainer,{filter:H.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:W}):M(e,t.includeContainer,H.bind(null,t)))}(e,i.tabbableOptions),s=(t=e,(r=(r=i.tabbableOptions)||{}).getShadowRoot?q([t],r.includeContainer,{filter:B.bind(null,r),flatten:!0,getShadowRoot:r.getShadowRoot}):M(t,r.includeContainer,B.bind(null,r)))
return{container:e,tabbableNodes:n,focusableNodes:s,firstTabbableNode:n.length>0?n[0]:null,lastTabbableNode:n.length>0?n[n.length-1]:null,nextTabbableNode:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=s.findIndex((function(t){return t===e}))
if(!(r<0))return t?s.slice(r+1).find((function(e){return $(e,i.tabbableOptions)})):s.slice(0,r).reverse().find((function(e){return $(e,i.tabbableOptions)}))}}})),o.tabbableGroups=o.containerGroups.filter((function(e){return e.tabbableNodes.length>0})),o.tabbableGroups.length<=0&&!c("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},d=function e(t){!1!==t&&t!==n.activeElement&&(t&&t.focus?(t.focus({preventScroll:!!i.preventScroll}),o.mostRecentlyFocusedNode=t,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select}(t)&&t.select()):e(u()))},p=function(e){var t=c("setReturnFocus",e)
return t||!1!==t&&e},f=function(e){var t=oe(e)
l(t)>=0||(ie(i.clickOutsideDeactivates,e)?r.deactivate({returnFocus:i.returnFocusOnDeactivate&&!Y(t,i.tabbableOptions)}):ie(i.allowOutsideClick,e)||e.preventDefault())},m=function(e){var t=oe(e),r=l(t)>=0
r||t instanceof Document?r&&(o.mostRecentlyFocusedNode=t):(e.stopImmediatePropagation(),d(o.mostRecentlyFocusedNode||u()))},g=function(e){if(t=e,("Escape"===t.key||"Esc"===t.key||27===t.keyCode)&&!1!==ie(i.escapeDeactivates,e))return e.preventDefault(),void r.deactivate()
var t;(i.isKeyForward(e)||i.isKeyBackward(e))&&function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=oe(e)
h()
var n=null
if(o.tabbableGroups.length>0){var s=l(r),a=s>=0?o.containerGroups[s]:void 0
if(s<0)n=t?o.tabbableGroups[o.tabbableGroups.length-1].lastTabbableNode:o.tabbableGroups[0].firstTabbableNode
else if(t){var u=se(o.tabbableGroups,(function(e){var t=e.firstTabbableNode
return r===t}))
if(u<0&&(a.container===r||Y(r,i.tabbableOptions)&&!$(r,i.tabbableOptions)&&!a.nextTabbableNode(r,!1))&&(u=s),u>=0){var p=0===u?o.tabbableGroups.length-1:u-1,f=o.tabbableGroups[p]
n=f.lastTabbableNode}else ee(e)||(n=a.nextTabbableNode(r,!1))}else{var m=se(o.tabbableGroups,(function(e){var t=e.lastTabbableNode
return r===t}))
if(m<0&&(a.container===r||Y(r,i.tabbableOptions)&&!$(r,i.tabbableOptions)&&!a.nextTabbableNode(r))&&(m=s),m>=0){var g=m===o.tabbableGroups.length-1?0:m+1,v=o.tabbableGroups[g]
n=v.firstTabbableNode}else ee(e)||(n=a.nextTabbableNode(r))}}else n=c("fallbackFocus")
n&&(ee(e)&&e.preventDefault(),d(n))}(e,i.isKeyBackward(e))},v=function(e){var t=oe(e)
l(t)>=0||ie(i.clickOutsideDeactivates,e)||ie(i.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},b=function(){if(o.active)return function(e,t){if(e.length>0){var r=e[e.length-1]
r!==t&&r.pause()}var n=e.indexOf(t);-1===n||e.splice(n,1),e.push(t)}(s,r),o.delayInitialFocusTimer=i.delayInitialFocus?ne((function(){d(u())})):d(u()),n.addEventListener("focusin",m,!0),n.addEventListener("mousedown",f,{capture:!0,passive:!1}),n.addEventListener("touchstart",f,{capture:!0,passive:!1}),n.addEventListener("click",v,{capture:!0,passive:!1}),n.addEventListener("keydown",g,{capture:!0,passive:!1}),r},_=function(){if(o.active)return n.removeEventListener("focusin",m,!0),n.removeEventListener("mousedown",f,!0),n.removeEventListener("touchstart",f,!0),n.removeEventListener("click",v,!0),n.removeEventListener("keydown",g,!0),r}
return(r={get active(){return o.active},get paused(){return o.paused},activate:function(e){if(o.active)return this
var t=a(e,"onActivate"),r=a(e,"onPostActivate"),s=a(e,"checkCanFocusTrap")
s||h(),o.active=!0,o.paused=!1,o.nodeFocusedBeforeActivation=n.activeElement,t&&t()
var i=function(){s&&h(),b(),r&&r()}
return s?(s(o.containers.concat()).then(i,i),this):(i(),this)},deactivate:function(e){if(!o.active)return this
var t=X({onDeactivate:i.onDeactivate,onPostDeactivate:i.onPostDeactivate,checkCanReturnFocus:i.checkCanReturnFocus},e)
clearTimeout(o.delayInitialFocusTimer),o.delayInitialFocusTimer=void 0,_(),o.active=!1,o.paused=!1,function(e,t){var r=e.indexOf(t);-1!==r&&e.splice(r,1),e.length>0&&e[e.length-1].unpause()}(s,r)
var n=a(t,"onDeactivate"),l=a(t,"onPostDeactivate"),c=a(t,"checkCanReturnFocus"),u=a(t,"returnFocus","returnFocusOnDeactivate")
n&&n()
var h=function(){ne((function(){u&&d(p(o.nodeFocusedBeforeActivation)),l&&l()}))}
return u&&c?(c(p(o.nodeFocusedBeforeActivation)).then(h,h),this):(h(),this)},pause:function(){return o.paused||!o.active||(o.paused=!0,_()),this},unpause:function(){return o.paused&&o.active?(o.paused=!1,h(),b(),this):this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean)
return o.containers=t.map((function(e){return"string"==typeof e?n.querySelector(e):e})),o.active&&h(),this}}).updateContainerElements(e),r}
const ce="esri-identity-modal",ue={base:ce,open:ce+"--open",closed:ce+"--closed",title:ce+"__title",dialog:ce+"__dialog",content:ce+"__content",closeButton:ce+"__close-button",iconClose:"esri-icon-close"}
let he=class extends b.a{constructor(e,t){super(e,t),this.container=document.createElement("div"),this.content=null,this.open=!1,this._focusTrap=null,this._close=()=>{this.open=!1},document.body.appendChild(this.container),this.addHandles(Object(p.f)(()=>this.open,()=>this._toggleFocusTrap()))}destroy(){this._destroyFocusTrap()}get title(){var e
return null==(e=this.messages)?void 0:e.auth.signIn}render(){const e=this.id,{open:t,content:r,title:n,messages:s}=this,i=t&&!!r,o={[ue.open]:i,[ue.closed]:!i},a=Object(O.a)("button",{class:ue.closeButton,"aria-label":s.close,title:s.close,bind:this,onclick:this._close,type:"button"},Object(O.a)("span",{"aria-hidden":"true",class:ue.iconClose})),l=e+"_title",c=e+"_content",u=n?Object(O.a)("h1",{id:l,class:ue.title},n):null,h=i?Object(O.a)("div",{bind:this,class:ue.dialog,role:"dialog","aria-labelledby":l,"aria-describedby":c,afterCreate:this._createFocusTrap},a,u,this._renderContent(c)):null
return Object(O.a)("div",{tabIndex:-1,class:this.classes(ue.base,o)},h)}_destroyFocusTrap(){var e
null!=(e=this._focusTrap)&&e.deactivate({onDeactivate:()=>{}}),this._focusTrap=null}_toggleFocusTrap(){const{_focusTrap:e,open:t}=this
e&&(t?e.activate():e.deactivate())}_createFocusTrap(e){this._destroyFocusTrap()
const t=requestAnimationFrame(()=>{this._focusTrap=le(e,{initialFocus:"input",onDeactivate:this._close}),this._toggleFocusTrap()})
this.addHandles(Object(x.c)(()=>cancelAnimationFrame(t)))}_renderContent(e){const t=this.content
return"string"==typeof t?Object(O.a)("div",{class:ue.content,id:e,innerHTML:t}):Object(E.b)(t)?Object(O.a)("div",{class:ue.content,id:e},t.render()):t instanceof HTMLElement?Object(O.a)("div",{class:ue.content,id:e,bind:t,afterCreate:this._attachToNode}):null}_attachToNode(e){e.appendChild(this)}}
Object(s.a)([Object(m.b)({readOnly:!0})],he.prototype,"container",void 0),Object(s.a)([Object(m.b)()],he.prototype,"content",void 0),Object(s.a)([Object(m.b)()],he.prototype,"open",void 0),Object(s.a)([Object(m.b)(),Object(y.a)("esri/t9n/common")],he.prototype,"messages",void 0),Object(s.a)([Object(m.b)()],he.prototype,"title",null),he=Object(s.a)([Object(g.a)("esri.identity.IdentityModal")],he)
const de=he
class pe{constructor(e,t){this.oAuthInfo=null,this.storage=null,this.appId=null,this.codeVerifier=null,this.expires=null,this.refreshToken=null,this.ssl=null,this.stateUID=null,this.token=null,this.userId=null,this.oAuthInfo=e,this.storage=t,this._init()}isValid(){let e=!1
if(this.oAuthInfo&&this.userId&&(this.refreshToken||this.token))if(null==this.expires&&this.refreshToken)e=!0
else if(this.expires){const t=Date.now()
this.expires>t&&(this.expires-t)/1e3>60*this.oAuthInfo.minTimeUntilExpiration&&(e=!0)}return e}save(){if(!this.storage)return!1
const e=this._load(),t=this.oAuthInfo
if(t&&t.authNamespace&&t.portalUrl){let r=e[t.authNamespace]
r||(r=e[t.authNamespace]={}),this.appId||(this.appId=t.appId),r[t.portalUrl]={appId:this.appId,codeVerifier:this.codeVerifier,expires:this.expires,refreshToken:this.refreshToken,ssl:this.ssl,stateUID:this.stateUID,token:this.token,userId:this.userId}
try{this.storage.setItem("esriJSAPIOAuth",JSON.stringify(e))}catch(e){return console.warn(e),!1}return!0}return!1}destroy(){const e=this._load(),t=this.oAuthInfo
if(t&&t.appId&&t.portalUrl&&(null==this.expires||this.expires>Date.now())&&(this.refreshToken||this.token)){const e=t.portalUrl.replace(/^http:/i,"https:")+"/sharing/rest/oauth2/revokeToken",r=new FormData
if(r.append("f","json"),r.append("auth_token",this.refreshToken||this.token),r.append("client_id",t.appId),r.append("token_type_hint",this.refreshToken?"refresh_token":"access_token"),"function"==typeof navigator.sendBeacon)navigator.sendBeacon(e,r)
else{const t=new XMLHttpRequest
t.open("POST",e),t.send(r)}}if(t&&t.authNamespace&&t.portalUrl&&this.storage){const r=e[t.authNamespace]
if(r){delete r[t.portalUrl]
try{this.storage.setItem("esriJSAPIOAuth",JSON.stringify(e))}catch(e){console.log(e)}}}t&&(t._oAuthCred=null,this.oAuthInfo=null)}_init(){const e=this._load(),t=this.oAuthInfo
if(t&&t.authNamespace&&t.portalUrl){let r=e[t.authNamespace]
r&&(r=r[t.portalUrl],r&&(this.appId=r.appId,this.codeVerifier=r.codeVerifier,this.expires=r.expires,this.refreshToken=r.refreshToken,this.ssl=r.ssl,this.stateUID=r.stateUID,this.token=r.token,this.userId=r.userId))}}_load(){let e={}
if(this.storage){const t=this.storage.getItem("esriJSAPIOAuth")
if(t)try{e=JSON.parse(t)}catch(e){console.warn(e)}}return e}}pe.prototype.declaredClass="esri.identity.OAuthCredential"
var fe,me=r(972)
let ge=fe=class extends me.a{constructor(e){super(e),this._oAuthCred=null,this.appId=null,this.authNamespace="/",this.expiration=20160,this.flowType="auto",this.forceLogin=!1,this.forceUserId=!1,this.locale=null,this.minTimeUntilExpiration=30,this.popup=!1,this.popupCallbackUrl="oauth-callback.html",this.popupWindowFeatures="height=490,width=800,resizable,scrollbars,status",this.portalUrl="https://www.arcgis.com",this.preserveUrlHash=!1,this.userId=null}clone(){return fe.fromJSON(this.toJSON())}}
Object(s.a)([Object(m.b)({json:{write:!0}})],ge.prototype,"appId",void 0),Object(s.a)([Object(m.b)({json:{write:!0}})],ge.prototype,"authNamespace",void 0),Object(s.a)([Object(m.b)({json:{write:!0}})],ge.prototype,"expiration",void 0),Object(s.a)([Object(m.b)({json:{write:!0}})],ge.prototype,"flowType",void 0),Object(s.a)([Object(m.b)({json:{write:!0}})],ge.prototype,"forceLogin",void 0),Object(s.a)([Object(m.b)({json:{write:!0}})],ge.prototype,"forceUserId",void 0),Object(s.a)([Object(m.b)({json:{write:!0}})],ge.prototype,"locale",void 0),Object(s.a)([Object(m.b)({json:{write:!0}})],ge.prototype,"minTimeUntilExpiration",void 0),Object(s.a)([Object(m.b)({json:{write:!0}})],ge.prototype,"popup",void 0),Object(s.a)([Object(m.b)({json:{write:!0}})],ge.prototype,"popupCallbackUrl",void 0),Object(s.a)([Object(m.b)({json:{write:!0}})],ge.prototype,"popupWindowFeatures",void 0),Object(s.a)([Object(m.b)({json:{write:!0}})],ge.prototype,"portalUrl",void 0),Object(s.a)([Object(m.b)({json:{write:!0}})],ge.prototype,"preserveUrlHash",void 0),Object(s.a)([Object(m.b)({json:{write:!0}})],ge.prototype,"userId",void 0),ge=fe=Object(s.a)([Object(g.a)("esri.identity.OAuthInfo")],ge)
const ve=ge
let be=class extends me.a{constructor(e){super(e),this.adminTokenServiceUrl=null,this.currentVersion=null,this.hasPortal=null,this.hasServer=null,this.owningSystemUrl=null,this.owningTenant=null,this.server=null,this.shortLivedTokenValidity=null,this.tokenServiceUrl=null,this.webTierAuth=null}}
Object(s.a)([Object(m.b)({json:{write:!0}})],be.prototype,"adminTokenServiceUrl",void 0),Object(s.a)([Object(m.b)({json:{write:!0}})],be.prototype,"currentVersion",void 0),Object(s.a)([Object(m.b)({json:{write:!0}})],be.prototype,"hasPortal",void 0),Object(s.a)([Object(m.b)({json:{write:!0}})],be.prototype,"hasServer",void 0),Object(s.a)([Object(m.b)({json:{write:!0}})],be.prototype,"owningSystemUrl",void 0),Object(s.a)([Object(m.b)({json:{write:!0}})],be.prototype,"owningTenant",void 0),Object(s.a)([Object(m.b)({json:{write:!0}})],be.prototype,"server",void 0),Object(s.a)([Object(m.b)({json:{write:!0}})],be.prototype,"shortLivedTokenValidity",void 0),Object(s.a)([Object(m.b)({json:{write:!0}})],be.prototype,"tokenServiceUrl",void 0),Object(s.a)([Object(m.b)({json:{write:!0}})],be.prototype,"webTierAuth",void 0),be=Object(s.a)([Object(g.a)("esri.identity.ServerInfo")],be)
const _e=be
var ye=r(198)
const Oe={},we=e=>{const t=new f.a(e.owningSystemUrl).host,r=new f.a(e.server).host,n=/.+\.arcgis\.com$/i
return n.test(t)&&n.test(r)},Se=(e,t)=>!!(we(e)&&t&&t.some(t=>t.test(e.server)))
let je=null,Ie=null
try{je=window.localStorage,Ie=window.sessionStorage}catch{}class ke extends l.a{constructor(){super(),this._portalConfig=globalThis.esriGeowConfig,this.serverInfos=[],this.oAuthInfos=[],this.credentials=[],this._soReqs=[],this._xoReqs=[],this._portals=[],this._defaultOAuthInfo=null,this._defaultTokenValidity=60,this.dialog=null,this.formConstructor=P,this.tokenValidity=null,this.normalizeWebTierAuth=!1,this._appOrigin="null"!==window.origin?window.origin:window.location.origin,this._appUrlObj=Object(f.Q)(window.location.href),this._busy=null,this._rejectOnPersistedPageShow=!1,this._oAuthLocationParams=null,this._gwTokenUrl="/sharing/rest/generateToken",this._agsRest="/rest/services",this._agsPortal=/\/sharing(\/|$)/i,this._agsAdmin=/(https?:\/\/[^\/]+\/[^\/]+)\/admin\/?(\/.*)?$/i,this._adminSvcs=/\/rest\/admin\/services(\/|$)/i,this._gwDomains=[{regex:/^https?:\/\/www\.arcgis\.com/i,customBaseUrl:"maps.arcgis.com",tokenServiceUrl:"https://www.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/(?:dev|[a-z\d-]+\.mapsdev)\.arcgis\.com/i,customBaseUrl:"mapsdev.arcgis.com",tokenServiceUrl:"https://dev.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/(?:devext|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i,customBaseUrl:"mapsdevext.arcgis.com",tokenServiceUrl:"https://devext.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/(?:qaext|[a-z\d-]+\.mapsqa)\.arcgis\.com/i,customBaseUrl:"mapsqa.arcgis.com",tokenServiceUrl:"https://qaext.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/[a-z\d-]+\.maps\.arcgis\.com/i,customBaseUrl:"maps.arcgis.com",tokenServiceUrl:"https://www.arcgis.com/sharing/rest/generateToken"}],this._legacyFed=[],this._regexSDirUrl=/http.+\/rest\/services\/?/gi,this._regexServerType=/(\/(FeatureServer|GPServer|GeoDataServer|GeocodeServer|GeoenrichmentServer|GeometryServer|GlobeServer|ImageServer|KnowledgeGraphServer|MapServer|MissionServer|MobileServer|NAServer|NetworkDiagramServer|OGCFeatureServer|ParcelFabricServer|RelationalCatalogServer|SceneServer|StreamServer|UtilityNetworkServer|ValidationServer|VectorTileServer|VersionManagementServer|VideoServer)).*/gi,this._gwUser=/http.+\/users\/([^\/]+)\/?.*/i,this._gwItem=/http.+\/items\/([^\/]+)\/?.*/i,this._gwGroup=/http.+\/groups\/([^\/]+)\/?.*/i,this._rePortalTokenSvc=/\/sharing(\/rest)?\/generatetoken/i,this._createDefaultOAuthInfo=!0,this._hasTestedIfAppIsOnPortal=!1,this._getOAuthLocationParams(),window.addEventListener("pageshow",e=>{this._pageShowHandler(e)})}registerServers(e){const t=this.serverInfos
t?(e=e.filter(e=>!this.findServerInfo(e.server)),this.serverInfos=t.concat(e)):this.serverInfos=e,e.forEach(e=>{e.owningSystemUrl&&this._portals.push(e.owningSystemUrl),e.hasPortal&&this._portals.push(e.server)})}registerOAuthInfos(e){const t=this.oAuthInfos
if(t){for(const r of e){const e=this.findOAuthInfo(r.portalUrl)
e&&t.splice(t.indexOf(e),1)}this.oAuthInfos=t.concat(e)}else this.oAuthInfos=e}registerToken(e){e={...e}
const t=this._sanitizeUrl(e.server),r=this._isServerRsrc(t)
let n,s=this.findServerInfo(t),i=!0
s||(s=new _e,s.server=this._getServerInstanceRoot(t),r?s.hasServer=!0:(s.tokenServiceUrl=this._getTokenSvcUrl(t),s.hasPortal=!0),this.registerServers([s])),n=this._findCredential(t),n?(delete e.server,Object.assign(n,e),i=!1):(n=new Ae({userId:e.userId,server:s.server,token:e.token,expires:e.expires,ssl:e.ssl,scope:r?"server":"portal"}),n.resources=[t],this.credentials.push(n)),n.emitTokenChange(!1),i||n.refreshServerTokens()}toJSON(){return Object(u.d)({serverInfos:this.serverInfos.map(e=>e.toJSON()),oAuthInfos:this.oAuthInfos.map(e=>e.toJSON()),credentials:this.credentials.map(e=>e.toJSON())})}initialize(e){if(!e)return
"string"==typeof e&&(e=JSON.parse(e))
const t=e.serverInfos,r=e.oAuthInfos,n=e.credentials
if(t){const e=[]
t.forEach(t=>{t.server&&t.tokenServiceUrl&&e.push(t.declaredClass?t:new _e(t))}),e.length&&this.registerServers(e)}if(r){const e=[]
r.forEach(t=>{t.appId&&e.push(t.declaredClass?t:new ve(t))}),e.length&&this.registerOAuthInfos(e)}n&&n.forEach(e=>{e.server&&e.token&&e.expires&&e.expires>Date.now()&&((e=e.declaredClass?e:new Ae(e)).emitTokenChange(),this.credentials.push(e))})}findServerInfo(e){let t
e=this._sanitizeUrl(e)
for(const r of this.serverInfos)if(this._hasSameServerInstance(r.server,e)){t=r
break}return t}findOAuthInfo(e){let t
e=this._sanitizeUrl(e)
for(const r of this.oAuthInfos)if(this._hasSameServerInstance(r.portalUrl,e)){t=r
break}return t}findCredential(e,t){if(!e)return
let r
e=this._sanitizeUrl(e)
const n=this._isServerRsrc(e)?"server":"portal"
if(t){for(const s of this.credentials)if(this._hasSameServerInstance(s.server,e)&&t===s.userId&&s.scope===n){r=s
break}}else for(const t of this.credentials)if(this._hasSameServerInstance(t.server,e)&&-1!==this._getIdenticalSvcIdx(e,t)&&t.scope===n){r=t
break}return r}getCredential(e,t){let r,n,s=!0
t&&(r=!!t.token,n=t.error,s=!1!==t.prompt),t={...t},e=this._sanitizeUrl(e)
const i=new AbortController,o=Object(d.e)()
if(t.signal&&Object(d.n)(t.signal,()=>{i.abort()}),Object(d.n)(i,()=>{o.reject(new a.a("identity-manager:user-aborted","ABORTED"))}),Object(d.k)(i))return o.promise
t.signal=i.signal
const l=this._isAdminResource(e),c=r?this.findCredential(e):null
let u
if(c&&n&&n.details&&498===n.details.httpStatus)c.destroy()
else if(c)return u=new a.a("identity-manager:not-authorized","You are currently signed in as: '"+c.userId+"'. You do not have access to this resource: "+e,{error:n}),o.reject(u),o.promise
const h=this._findCredential(e,t)
if(h)return o.resolve(h),o.promise
let p=this.findServerInfo(e)
if(p)!p.hasServer&&this._isServerRsrc(e)&&(p._restInfoPms=this._getTokenSvcUrl(e),p.hasServer=!0)
else{const t=this._getTokenSvcUrl(e)
if(!t)return u=new a.a("identity-manager:unknown-resource","Unknown resource - could not find token service endpoint."),o.reject(u),o.promise
p=new _e,p.server=this._getServerInstanceRoot(e),"string"==typeof t?(p.tokenServiceUrl=t,p.hasPortal=!0):(p._restInfoPms=t,p.hasServer=!0),this.registerServers([p])}return p.hasPortal&&void 0===p._selfReq&&(s||Object(f.v)(p.tokenServiceUrl,this._appOrigin)||this._gwDomains.some(e=>e.tokenServiceUrl===p.tokenServiceUrl))&&(p._selfReq={owningTenant:t&&t.owningTenant,selfDfd:this._getPortalSelf(p.tokenServiceUrl.replace(this._rePortalTokenSvc,"/sharing/rest/portals/self"),e)}),this._enqueue(e,p,t,o,l)}getResourceName(e){return this._isRESTService(e)?e.replace(this._regexSDirUrl,"").replace(this._regexServerType,"")||"":this._gwUser.test(e)&&e.replace(this._gwUser,"$1")||this._gwItem.test(e)&&e.replace(this._gwItem,"$1")||this._gwGroup.test(e)&&e.replace(this._gwGroup,"$1")||""}generateToken(e,t,r){const n=this._rePortalTokenSvc.test(e.tokenServiceUrl),s=new f.a(this._appOrigin),i=e.shortLivedTokenValidity
let l,c,u,h,d,p,m,g
t&&(g=this.tokenValidity||i||this._defaultTokenValidity,g>i&&i>0&&(g=i)),r&&(l=r.isAdmin,c=r.serverUrl,u=r.token,p=r.signal,m=r.ssl,e.customParameters=r.customParameters),l?h=e.adminTokenServiceUrl:(h=e.tokenServiceUrl,d=new f.a(h.toLowerCase()),e.webTierAuth&&(null==r?void 0:r.serverUrl)&&!m&&"http"===s.scheme&&(Object(f.v)(s.uri,h,!0)||"https"===d.scheme&&s.host===d.host&&"7080"===s.port&&"7443"===d.port)&&(h=h.replace(/^https:/i,"http:").replace(/:7443/i,":7080")))
const v={query:{request:"getToken",username:null==t?void 0:t.username,password:null==t?void 0:t.password,serverUrl:c,token:u,expiration:g,referer:l||n?this._appOrigin:null,client:l?"referer":null,f:"json",...e.customParameters},method:"post",authMode:"anonymous",useProxy:this._useProxy(e,r),signal:p,...null==r?void 0:r.ioArgs}
return n||(v.withCredentials=!1),Object(o.default)(h,v).then(r=>{const n=r.data
if(!n||!n.token)return new a.a("identity-manager:authentication-failed","Unable to generate token")
const s=e.server
return Oe[s]||(Oe[s]={}),t&&(Oe[s][t.username]=t.password),n.validity=g,n})}isBusy(){return!!this._busy}checkSignInStatus(e){return this.checkAppAccess(e,"").then(e=>e.credential)}checkAppAccess(e,t,r){let n=!1
return this.getCredential(e,{prompt:!1}).then(s=>{let i
const l={f:"json"}
if("portal"===s.scope)if(t&&(this._doPortalSignIn(e)||r&&r.force))i=s.server+"/sharing/rest/oauth2/validateAppAccess",l.client_id=t
else{if(!s.token)return{credential:s}
i=s.server+"/sharing/rest"}else{if(!s.token)return{credential:s}
i=s.server+"/rest/services"}return s.token&&(l.token=s.token),Object(o.default)(i,{query:l,authMode:"anonymous"}).then(e=>{if(!1===e.data.valid)throw new a.a("identity-manager:not-authorized",`You are currently signed in as: '${s.userId}'.`,e.data)
return n=!!e.data.viewOnlyUserTypeApp,{credential:s}}).catch(e=>{if("identity-manager:not-authorized"===e.name)throw e
const t=e.details&&e.details.httpStatus
if(498===t)throw s.destroy(),new a.a("identity-manager:not-authenticated","User is not signed in.")
if(400===t)throw new a.a("identity-manager:invalid-request")
return{credential:s}})}).then(e=>({credential:e.credential,viewOnly:n}))}setOAuthResponseHash(e){e&&("#"===e.charAt(0)&&(e=e.substring(1)),this._processOAuthPopupParams(Object(f.K)(e)))}setOAuthRedirectionHandler(e){this._oAuthRedirectFunc=e}setProtocolErrorHandler(e){this._protocolFunc=e}signIn(e,t,r={}){const n=Object(d.e)(),s=()=>{var e,t,r,n,s
null!=(e=l)&&e.remove(),null!=(t=c)&&t.remove(),null!=(r=u)&&r.remove(),null!=(n=o)&&n.destroy(),null!=(s=this.dialog)&&s.destroy(),this.dialog=o=l=c=u=null},i=()=>{s(),this._oAuthDfd=null,n.reject(new a.a("identity-manager:user-aborted","ABORTED"))}
r.signal&&Object(d.n)(r.signal,()=>{i()})
let o=new this.formConstructor
o.resource=this.getResourceName(e),o.server=t.server,this.dialog=new de,this.dialog.content=o,this.dialog.open=!0,this.emit("dialog-create")
let l=o.on("cancel",i),c=Object(p.f)(()=>this.dialog.open,i),u=o.on("submit",e=>{this.generateToken(t,e,{isAdmin:r.isAdmin,signal:r.signal}).then(i=>{s()
const o=new Ae({userId:e.username,server:t.server,token:i.token,expires:null!=i.expires?Number(i.expires):null,ssl:!!i.ssl,isAdmin:r.isAdmin,validity:i.validity})
n.resolve(o)}).catch(e=>{o.error=e,o.signingIn=!1})})
return n.promise}oAuthSignIn(e,t,r,n){this._oAuthDfd=Object(d.e)()
const s=this._oAuthDfd
let i
null!=n&&n.signal&&Object(d.n)(n.signal,()=>{const e=this._oAuthDfd&&this._oAuthDfd.oAuthWin_
e&&!e.closed?e.close():this.dialog&&m()}),s.resUrl_=e,s.sinfo_=t,s.oinfo_=r
const o=r._oAuthCred
if(o.storage&&("authorization-code"===r.flowType||"auto"===r.flowType&&!r.popup&&t.currentVersion>=8.4)){let e=crypto.getRandomValues(new Uint8Array(32))
i=Object(f.f)(e),o.codeVerifier=i,e=crypto.getRandomValues(new Uint8Array(32)),o.stateUID=Object(f.f)(e),o.save()||(o.codeVerifier=i=null)}else o.codeVerifier=null
let l,c,u,h
this._getCodeChallenge(i).then(s=>{const i=!n||!1!==n.oAuthPopupConfirmation
r.popup&&i?(l=new this.formConstructor,l.oAuthPrompt=!0,l.server=t.server,this.dialog=new de,this.dialog.content=l,this.dialog.open=!0,this.emit("dialog-create"),c=l.on("cancel",m),u=Object(p.f)(()=>this.dialog.open,m),h=l.on("submit",()=>{g(),this._doOAuthSignIn(e,t,r,s)})):this._doOAuthSignIn(e,t,r,s)})
const m=()=>{g(),this._oAuthDfd=null,s.reject(new a.a("identity-manager:user-aborted","ABORTED"))},g=()=>{var e,t,r,n,s
null!=(e=c)&&e.remove(),null!=(t=u)&&t.remove(),null!=(r=h)&&r.remove(),null!=(n=l)&&n.destroy(),null!=(s=this.dialog)&&s.destroy(),this.dialog=null}
return s.promise}destroyCredentials(){this.credentials&&this.credentials.slice().forEach(e=>{e.destroy()}),this.emit("credentials-destroy")}enablePostMessageAuth(e="https://www.arcgis.com/sharing/rest"){this._postMessageAuthHandle&&this._postMessageAuthHandle.remove(),this._postMessageAuthHandle=Object(c.c)(window,"message",t=>{var r
if((t.origin===this._appOrigin||t.origin.endsWith(".arcgis.com"))&&"arcgis:auth:requestCredential"===(null==(r=t.data)?void 0:r.type)){const r=t.source
this.getCredential(e).then(e=>{r.postMessage({type:"arcgis:auth:credential",credential:{expires:e.expires,server:e.server,ssl:e.ssl,token:e.token,userId:e.userId}},t.origin)}).catch(e=>{r.postMessage({type:"arcgis:auth:error",error:{name:e.name,message:e.message}},t.origin)})}})}disablePostMessageAuth(){this._postMessageAuthHandle&&(this._postMessageAuthHandle.remove(),this._postMessageAuthHandle=null)}_getOAuthLocationParams(){let e=window.location.hash
if(e){var t
"#"===e.charAt(0)&&(e=e.substring(1))
const r=Object(f.K)(e)
let n=!1
if(r.access_token&&r.expires_in&&r.state&&r.hasOwnProperty("username"))try{r.state=JSON.parse(r.state),r.state.portalUrl&&(this._oAuthLocationParams=r,n=!0)}catch{}else if(r.error&&r.error_description&&(console.log("IdentityManager OAuth Error: ",r.error," - ",r.error_description),"access_denied"===r.error&&(n=!0,r.state)))try{r.state=JSON.parse(r.state)}catch{}n&&(window.location.hash=(null==(t=r.state)?void 0:t.hash)||"")}let r=window.location.search
if(r){"?"===r.charAt(0)&&(r=r.substring(1))
const e=Object(f.K)(r)
let t=!1
if(e.code&&e.state)try{e.state=JSON.parse(e.state),e.state.portalUrl&&e.state.uid&&(this._oAuthLocationParams=e,t=!0)}catch{}else if(e.error&&e.error_description&&(console.log("IdentityManager OAuth Error: ",e.error," - ",e.error_description),"access_denied"===e.error&&(t=!0,e.state)))try{e.state=JSON.parse(e.state)}catch{}if(t){var n
const t={...e};["code","error","error_description","message_code","persist","state"].forEach(e=>{delete t[e]})
const r=Object(f.J)(t),s=window.location.pathname+(r?"?"+r:"")+((null==(n=e.state)?void 0:n.hash)||"")
window.history.replaceState(window.history.state,"",s)}}}_getOAuthToken(e,t,r,n,s){return e=e.replace(/^http:/i,"https:"),Object(o.default)(e+"/sharing/rest/oauth2/token",{authMode:"anonymous",method:"post",query:n&&s?{grant_type:"authorization_code",code:t,redirect_uri:n,client_id:r,code_verifier:s}:{grant_type:"refresh_token",refresh_token:t,client_id:r}}).then(e=>e.data)}_getCodeChallenge(e){if(e&&globalThis.isSecureContext){const t=(new TextEncoder).encode(e)
return crypto.subtle.digest("SHA-256",t).then(e=>Object(f.f)(new Uint8Array(e)))}return Promise.resolve(null)}_pageShowHandler(e){if(e.persisted&&this.isBusy()&&this._rejectOnPersistedPageShow){const e=new a.a("identity-manager:user-aborted","ABORTED")
this._errbackFunc(e)}}_findCredential(e,t){let r,n,s,i,o=-1
const a=t&&t.token,l=t&&t.resource,c=this._isServerRsrc(e)?"server":"portal",u=this.credentials.filter(t=>this._hasSameServerInstance(t.server,e)&&t.scope===c)
if(e=l||e,u.length)if(1===u.length){if(r=u[0],s=this.findServerInfo(r.server),n=s&&s.owningSystemUrl,i=n?this.findCredential(n,r.userId):void 0,o=this._getIdenticalSvcIdx(e,r),!a)return-1===o&&r.resources.push(e),this._addResource(e,i),r;-1!==o&&(r.resources.splice(o,1),this._removeResource(e,i))}else{let t,r
if(u.some(a=>(r=this._getIdenticalSvcIdx(e,a),-1!==r&&(t=a,s=this.findServerInfo(t.server),n=s&&s.owningSystemUrl,i=n?this.findCredential(n,t.userId):void 0,o=r,!0))),a)t&&(t.resources.splice(o,1),this._removeResource(e,i))
else if(t)return this._addResource(e,i),t}}_findOAuthInfo(e){let t=this.findOAuthInfo(e)
if(!t)for(const r of this.oAuthInfos)if(this._isIdProvider(r.portalUrl,e)){t=r
break}return t}_addResource(e,t){t&&-1===this._getIdenticalSvcIdx(e,t)&&t.resources.push(e)}_removeResource(e,t){let r=-1
t&&(r=this._getIdenticalSvcIdx(e,t),r>-1&&t.resources.splice(r,1))}_useProxy(e,t){return t&&t.isAdmin&&!Object(f.v)(e.adminTokenServiceUrl,this._appOrigin)||!this._isPortalDomain(e.tokenServiceUrl)&&"10.1"===String(e.currentVersion)&&!Object(f.v)(e.tokenServiceUrl,this._appOrigin)}_getOrigin(e){const t=new f.a(e)
return t.scheme+"://"+t.host+(null!=t.port?":"+t.port:"")}_getServerInstanceRoot(e){const t=e.toLowerCase()
let r=t.indexOf(this._agsRest)
return-1===r&&this._isAdminResource(e)&&(r=this._agsAdmin.test(e)?e.replace(this._agsAdmin,"$1").length:e.search(this._adminSvcs)),-1!==r||Object(ye.a)(t)||(r=t.indexOf("/sharing")),-1===r&&"/"===t.substr(-1)&&(r=t.length-1),r>-1?e.substring(0,r):e}_hasSameServerInstance(e,t){return"/"===e.substr(-1)&&(e=e.slice(0,-1)),e=e.toLowerCase(),t=this._getServerInstanceRoot(t).toLowerCase(),e=this._normalizeAGOLorgDomain(e),t=this._normalizeAGOLorgDomain(t),(e=e.substr(e.indexOf(":")))===t.substr(t.indexOf(":"))}_normalizeAGOLorgDomain(e){const t=/^https?:\/\/(?:cdn|[a-z\d-]+\.maps)\.arcgis\.com/i,r=/^https?:\/\/(?:cdndev|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i,n=/^https?:\/\/(?:cdnqa|[a-z\d-]+\.mapsqa)\.arcgis\.com/i
return t.test(e)?e=e.replace(t,"https://www.arcgis.com"):r.test(e)?e=e.replace(r,"https://devext.arcgis.com"):n.test(e)&&(e=e.replace(n,"https://qaext.arcgis.com")),e}_sanitizeUrl(e){const t=(i.default.request.proxyUrl||"").toLowerCase(),r=t?e.toLowerCase().indexOf(t+"?"):-1
return-1!==r&&(e=e.substring(r+t.length+1)),e=Object(f.I)(e),Object(f.Q)(e).path}_isRESTService(e){return e.includes(this._agsRest)}_isAdminResource(e){return this._agsAdmin.test(e)||this._adminSvcs.test(e)}_isServerRsrc(e){return this._isRESTService(e)||this._isAdminResource(e)}_isIdenticalService(e,t){let r=!1
if(this._isRESTService(e)&&this._isRESTService(t)){const n=this._getSuffix(e).toLowerCase(),s=this._getSuffix(t).toLowerCase()
if(r=n===s,!r){const e=/(.*)\/(MapServer|FeatureServer|UtilityNetworkServer).*/gi
r=n.replace(e,"$1")===s.replace(e,"$1")}}else this._isAdminResource(e)&&this._isAdminResource(t)?r=!0:this._isServerRsrc(e)||this._isServerRsrc(t)||!this._isPortalDomain(e)||(r=!0)
return r}_isPortalDomain(e){const t=new f.a(e.toLowerCase()),r=this._portalConfig
let n=this._gwDomains.some(e=>e.regex.test(t.uri))
return!n&&r&&(n=this._hasSameServerInstance(this._getServerInstanceRoot(r.restBaseUrl),t.uri)),n||i.default.portalUrl&&(n=Object(f.v)(t,i.default.portalUrl,!0)),n||(n=this._portals.some(e=>this._hasSameServerInstance(e,t.uri))),n=n||this._agsPortal.test(t.path),n}_isIdProvider(e,t){let r=-1,n=-1
this._gwDomains.forEach((s,i)=>{-1===r&&s.regex.test(e)&&(r=i),-1===n&&s.regex.test(t)&&(n=i)})
let s=!1
if(r>-1&&n>-1&&(0===r||4===r?0!==n&&4!==n||(s=!0):1===r?1!==n&&2!==n||(s=!0):2===r?2===n&&(s=!0):3===r&&3===n&&(s=!0)),!s){const r=this.findServerInfo(t),n=r&&r.owningSystemUrl
n&&we(r)&&this._isPortalDomain(n)&&this._isIdProvider(e,n)&&(s=!0)}return s}_getIdenticalSvcIdx(e,t){let r=-1
for(let n=0;n<t.resources.length;n++){const s=t.resources[n]
if(this._isIdenticalService(e,s)){r=n
break}}return r}_getSuffix(e){return e.replace(this._regexSDirUrl,"").replace(this._regexServerType,"$1")}_getTokenSvcUrl(e){let t,r,n
if(this._isRESTService(e)||this._isAdminResource(e)){const n=this._getServerInstanceRoot(e)
return t=n+"/admin/generateToken",r=Object(o.default)(e=n+"/rest/info",{query:{f:"json"}}).then(e=>e.data),{adminUrl:t,promise:r}}if(this._isPortalDomain(e)){let t=""
if(this._gwDomains.some(r=>(r.regex.test(e)&&(t=r.tokenServiceUrl),!!t)),t||this._portals.some(r=>(this._hasSameServerInstance(r,e)&&(t=r+this._gwTokenUrl),!!t)),t||(n=e.toLowerCase().indexOf("/sharing"),-1!==n&&(t=e.substring(0,n)+this._gwTokenUrl)),t||(t=this._getOrigin(e)+this._gwTokenUrl),t){const r=new f.a(e).port;/^http:\/\//i.test(e)&&"7080"===r&&(t=t.replace(/:7080/i,":7443")),t=t.replace(/http:/i,"https:")}return t}if(e.toLowerCase().includes("premium.arcgisonline.com"))return"https://premium.arcgisonline.com/server/tokens"}_processOAuthResponseParams(e,t,r){const n=t._oAuthCred
if(e.code){const s=n.codeVerifier
return n.codeVerifier=null,n.stateUID=null,n.save(),this._getOAuthToken(r.server,e.code,t.appId,this._getRedirectURI(t,!0),s).then(s=>{const i=new Ae({userId:s.username,server:r.server,token:s.access_token,expires:Date.now()+1e3*s.expires_in,ssl:s.ssl,oAuthState:e.state,_oAuthCred:n})
return t.userId=i.userId,n.storage=s.persist?je:Ie,n.refreshToken=s.refresh_token,n.token=null,n.expires=s.refresh_token_expires_in?Date.now()+1e3*s.refresh_token_expires_in:null,n.userId=i.userId,n.ssl=i.ssl,n.save(),i})}const s=new Ae({userId:e.username,server:r.server,token:e.access_token,expires:Date.now()+1e3*Number(e.expires_in),ssl:"true"===e.ssl,oAuthState:e.state,_oAuthCred:n})
return t.userId=s.userId,n.storage=e.persist?je:Ie,n.refreshToken=null,n.token=s.token,n.expires=s.expires,n.userId=s.userId,n.ssl=s.ssl,n.save(),Promise.resolve(s)}_processOAuthPopupParams(e){var t
const r=this._oAuthDfd
if(this._oAuthDfd=null,r)if(clearInterval(this._oAuthIntervalId),null!=(t=this._oAuthOnPopupHandle)&&t.remove(),e.error){const t="access_denied"===e.error,n=new a.a(t?"identity-manager:user-aborted":"identity-manager:authentication-failed",t?"ABORTED":"OAuth: "+e.error+" - "+e.error_description)
r.reject(n)}else this._processOAuthResponseParams(e,r.oinfo_,r.sinfo_).then(e=>{r.resolve(e)}).catch(e=>{r.reject(e)})}_setOAuthResponseQueryString(e){e&&("?"===e.charAt(0)&&(e=e.substring(1)),this._processOAuthPopupParams(Object(f.K)(e)))}_exchangeToken(e,t,r){return Object(o.default)(e+"/sharing/rest/oauth2/exchangeToken",{authMode:"anonymous",method:"post",query:{f:"json",client_id:t,token:r}}).then(e=>e.data.token)}_getPlatformSelf(e,t){return e=e.replace(/^http:/i,"https:"),Object(o.default)(e+"/sharing/rest/oauth2/platformSelf",{authMode:"anonymous",headers:{"X-Esri-Auth-Client-Id":t,"X-Esri-Auth-Redirect-Uri":window.location.href.replace(/#.*$/,"")},method:"post",query:{f:"json",expiration:30},withCredentials:!0}).then(e=>e.data)}_getPortalSelf(e,t){let r
return this._gwDomains.some(t=>(t.regex.test(e)&&(r=t.customBaseUrl),!!r)),r?Promise.resolve({allSSL:!0,currentVersion:"8.4",customBaseUrl:r,portalMode:"multitenant",supportsOAuth:!0}):(this._appOrigin.startsWith("https:")?e=e.replace(/^http:/i,"https:").replace(/:7080/i,":7443"):/^http:/i.test(t)&&(e=e.replace(/^https:/i,"http:").replace(/:7443/i,":7080")),Object(o.default)(e,{query:{f:"json"},authMode:"anonymous",withCredentials:!0}).then(e=>e.data))}_doPortalSignIn(e){const t=this._portalConfig,r=window.location.href,n=this.findServerInfo(e)
return!(!t&&!this._isPortalDomain(r)||!(n?n.hasPortal||n.owningSystemUrl&&this._isPortalDomain(n.owningSystemUrl):this._isPortalDomain(e))||!(this._isIdProvider(r,e)||t&&(this._hasSameServerInstance(this._getServerInstanceRoot(t.restBaseUrl),e)||this._isIdProvider(t.restBaseUrl,e))||Object(f.v)(r,e,!0)))}_checkProtocol(e,t,r,n){let s=!0
const i=n?t.adminTokenServiceUrl:t.tokenServiceUrl
return i.trim().toLowerCase().startsWith("https:")&&!this._appOrigin.startsWith("https:")&&Object(f.r)(i)&&(s=!!this._protocolFunc&&!!this._protocolFunc({resourceUrl:e,serverInfo:t}),!s)&&r(new a.a("identity-manager:aborted","Aborted the Sign-In process to avoid sending password over insecure connection.")),s}_enqueue(e,t,r,n,s,i){return n||(n=Object(d.e)()),n.resUrl_=e,n.sinfo_=t,n.options_=r,n.admin_=s,n.refresh_=i,this._busy?this._hasSameServerInstance(this._getServerInstanceRoot(e),this._busy.resUrl_)?(this._oAuthDfd&&this._oAuthDfd.oAuthWin_&&this._oAuthDfd.oAuthWin_.focus(),this._soReqs.push(n)):this._xoReqs.push(n):this._doSignIn(n),n.promise}_doSignIn(e){this._busy=e,this._rejectOnPersistedPageShow=!1
const t=t=>{const r=e.options_&&e.options_.resource,n=e.resUrl_,s=e.refresh_
let i=!1
this.credentials.includes(t)||(s&&this.credentials.includes(s)?(s.userId=t.userId,s.token=t.token,s.expires=t.expires,s.validity=t.validity,s.ssl=t.ssl,s.creationTime=t.creationTime,i=!0,t=s):this.credentials.push(t)),t.resources||(t.resources=[]),t.resources.includes(r||n)||t.resources.push(r||n),t.scope=this._isServerRsrc(n)?"server":"portal",t.emitTokenChange()
const o=this._soReqs,a={}
this._soReqs=[],o.forEach(e=>{if(!this._isIdenticalService(n,e.resUrl_)){const r=this._getSuffix(e.resUrl_)
a[r]||(a[r]=!0,t.resources.push(e.resUrl_))}}),e.resolve(t),o.forEach(e=>{this._hasSameServerInstance(this._getServerInstanceRoot(n),e.resUrl_)?e.resolve(t):this._soReqs.push(e)}),this._busy=e.resUrl_=e.sinfo_=e.refresh_=null,i||this.emit("credential-create",{credential:t}),this._soReqs.length?this._doSignIn(this._soReqs.shift()):this._xoReqs.length&&this._doSignIn(this._xoReqs.shift())},r=t=>{e.reject(t),this._busy=e.resUrl_=e.sinfo_=e.refresh_=null,this._soReqs.length?this._doSignIn(this._soReqs.shift()):this._xoReqs.length&&this._doSignIn(this._xoReqs.shift())},n=(s,i,o,l)=>{var u,h
const p=e.sinfo_,m=!e.options_||!1!==e.options_.prompt,g=p.hasPortal&&this._findOAuthInfo(e.resUrl_)
let v,b
if(s)t(new Ae({userId:s,server:p.server,token:o||null,expires:null!=l?Number(l):null,ssl:!!i}))
else if(window!==window.parent&&null!=(u=this._appUrlObj.query)&&u["arcgis-auth-origin"]&&null!=(h=this._appUrlObj.query)&&h["arcgis-auth-portal"]&&this._hasSameServerInstance(this._getServerInstanceRoot(this._appUrlObj.query["arcgis-auth-portal"]),e.resUrl_)){var _
window.parent.postMessage({type:"arcgis:auth:requestCredential"},this._appUrlObj.query["arcgis-auth-origin"])
const n=Object(c.c)(window,"message",e=>{e.source===window.parent&&e.data&&("arcgis:auth:credential"===e.data.type?(n.remove(),e.data.credential.expires<Date.now()?r(new a.a("identity-manager:credential-request-failed","Parent application's token has expired.")):t(new Ae(e.data.credential))):"arcgis:auth:error"===e.data.type&&(n.remove(),"tokenExpiredError"===e.data.error.name?r(new a.a("identity-manager:credential-request-failed","Parent application's token has expired.")):r(a.a.fromJSON(e.data.error))))})
Object(d.n)(null==(_=e.options_)?void 0:_.signal,()=>{n.remove()})}else if(g){let s=g._oAuthCred
if(!s){const e=new pe(g,je),t=new pe(g,Ie)
e.isValid()&&t.isValid()?e.expires>t.expires?(s=e,t.destroy()):(s=t,e.destroy()):s=e.isValid()?e:t,g._oAuthCred=s}if(s.isValid()){v=new Ae({userId:s.userId,server:p.server,token:s.token,expires:s.expires,ssl:s.ssl,_oAuthCred:s})
const r=g.appId!==s.appId&&this._doPortalSignIn(e.resUrl_)
r||s.refreshToken?(e._pendingDfd=s.refreshToken?this._getOAuthToken(p.server,s.refreshToken,s.appId).then(e=>(v.expires=Date.now()+1e3*e.expires_in,v.token=e.access_token,v)):Promise.resolve(v),e._pendingDfd.then(e=>r?this._exchangeToken(e.server,g.appId,e.token).then(t=>(e.token=t,e)).catch(()=>e):e).then(e=>{t(e)}).catch(()=>{var e
null!=(e=s)&&e.destroy(),n()})):t(v)}else if(this._oAuthLocationParams&&this._hasSameServerInstance(g.portalUrl,this._oAuthLocationParams.state.portalUrl)&&(this._oAuthLocationParams.access_token||this._oAuthLocationParams.code&&this._oAuthLocationParams.state.uid===s.stateUID&&s.codeVerifier)){const n=this._oAuthLocationParams
this._oAuthLocationParams=null,e._pendingDfd=this._processOAuthResponseParams(n,g,p).then(e=>{t(e)}).catch(r)}else{const n=()=>{m?e._pendingDfd=this.oAuthSignIn(e.resUrl_,p,g,e.options_).then(t,r):(b=new a.a("identity-manager:not-authenticated","User is not signed in."),r(b))}
this._doPortalSignIn(e.resUrl_)?e._pendingDfd=this._getPlatformSelf(p.server,g.appId).then(e=>{Object(f.v)(e.portalUrl,this._appOrigin,!0)?(v=new Ae({userId:e.username,server:p.server,expires:Date.now()+1e3*e.expires_in,token:e.token}),t(v)):n()}).catch(n):n()}}else if(m){if(this._checkProtocol(e.resUrl_,p,r,e.admin_)){let n=e.options_
e.admin_&&(n=n||{},n.isAdmin=!0),e._pendingDfd=this.signIn(e.resUrl_,p,n).then(t,r)}}else b=new a.a("identity-manager:not-authenticated","User is not signed in."),r(b)},s=()=>{const n=e.sinfo_,s=n.owningSystemUrl,i=e.options_
let o,a,l,c
if(i&&(o=i.token,a=i.error,l=i.prompt),c=this._findCredential(s,{token:o,resource:e.resUrl_}),!c)for(const e of this.credentials)if(this._isIdProvider(s,e.server)){c=e
break}if(c){const s=this.findCredential(e.resUrl_,c.userId)
if(s)t(s)
else if(Se(n,this._legacyFed)){const e=c.toJSON()
e.server=n.server,e.resources=null,t(new Ae(e))}else(e._pendingDfd=this.generateToken(this.findServerInfo(c.server),null,{serverUrl:e.resUrl_,token:c.token,signal:e.options_.signal,ssl:c.ssl})).then(r=>{var s
t(new Ae({userId:null==(s=c)?void 0:s.userId,server:n.server,token:r.token,expires:null!=r.expires?Number(r.expires):null,ssl:!!r.ssl,isAdmin:e.admin_,validity:r.validity}))},r)}else this._busy=null,o&&(e.options_.token=null),(e._pendingDfd=this.getCredential(s.replace(/\/?$/,"/sharing"),{resource:e.resUrl_,owningTenant:n.owningTenant,signal:e.options_.signal,token:o,error:a,prompt:l})).then(()=>{this._enqueue(e.resUrl_,e.sinfo_,e.options_,e,e.admin_)},t=>{e.resUrl_=e.sinfo_=e.refresh_=null,e.reject(t)})}
this._errbackFunc=r
const i=e.sinfo_.owningSystemUrl,o=this._isServerRsrc(e.resUrl_),l=e.sinfo_._restInfoPms
l?l.promise.then(t=>{const r=e.sinfo_
if(r._restInfoPms){var i,a
r.adminTokenServiceUrl=r._restInfoPms.adminUrl,r._restInfoPms=null,r.tokenServiceUrl=null!=(i=Object(h.b)("authInfo.tokenServicesUrl",t)||Object(h.b)("authInfo.tokenServiceUrl",t)||Object(h.b)("tokenServiceUrl",t))?i:null,r.shortLivedTokenValidity=null!=(a=Object(h.b)("authInfo.shortLivedTokenValidity",t))?a:null,r.currentVersion=t.currentVersion,r.owningTenant=t.owningTenant
const e=r.owningSystemUrl=t.owningSystemUrl
e&&this._portals.push(e)}o&&r.owningSystemUrl?s():n()},()=>{e.sinfo_._restInfoPms=null
const t=new a.a("identity-manager:server-identification-failed","Unknown resource - could not find token service endpoint.")
r(t)}):o&&i?s():e.sinfo_._selfReq?e.sinfo_._selfReq.selfDfd.then(t=>{const r={}
let n,s,i,o
return t&&(n=t.user&&t.user.username,r.username=n,r.allSSL=t.allSSL,s=t.supportsOAuth,o=parseFloat(t.currentVersion),"multitenant"===t.portalMode&&(i=t.customBaseUrl),e.sinfo_.currentVersion=o),e.sinfo_.webTierAuth=!!n,n&&this.normalizeWebTierAuth?this.generateToken(e.sinfo_,null,{ssl:r.allSSL}).catch(()=>null).then(e=>(r.portalToken=e&&e.token,r.tokenExpiration=e&&e.expires,r)):!n&&s&&o>=4.4&&!this._findOAuthInfo(e.resUrl_)?this._generateOAuthInfo({portalUrl:e.sinfo_.server,customBaseUrl:i,owningTenant:e.sinfo_._selfReq.owningTenant}).catch(()=>null).then(()=>r):r}).catch(()=>null).then(t=>{e.sinfo_._selfReq=null,t?n(t.username,t.allSSL,t.portalToken,t.tokenExpiration):n()}):n()}_generateOAuthInfo(e){let t,r=null,n=e.portalUrl
const s=e.customBaseUrl,i=e.owningTenant,a=!this._defaultOAuthInfo&&this._createDefaultOAuthInfo&&!this._hasTestedIfAppIsOnPortal
if(a){r=window.location.href
let e=r.indexOf("?")
e>-1&&(r=r.slice(0,e)),e=r.search(/\/(apps|home)\//),r=e>-1?r.slice(0,e):null}return a&&r?(this._hasTestedIfAppIsOnPortal=!0,t=Object(o.default)(r+"/sharing/rest",{query:{f:"json"}}).then(()=>{this._defaultOAuthInfo=new ve({appId:"arcgisonline",popupCallbackUrl:r+"/home/oauth-callback.html"})})):t=Promise.resolve(),t.then(()=>{if(this._defaultOAuthInfo)return n=n.replace(/^http:/i,"https:"),Object(o.default)(n+"/sharing/rest/oauth2/validateRedirectUri",{query:{accountId:i,client_id:this._defaultOAuthInfo.appId,redirect_uri:Object(f.F)(this._defaultOAuthInfo.popupCallbackUrl),f:"json"}}).then(e=>{if(e.data.valid){const t=this._defaultOAuthInfo.clone()
e.data.urlKey&&s?t.portalUrl="https://"+e.data.urlKey.toLowerCase()+"."+s:t.portalUrl=n,t.popup=window!==window.top||!(Object(f.v)(n,this._appOrigin)||this._gwDomains.some(e=>e.regex.test(n)&&e.regex.test(this._appOrigin))),this.oAuthInfos.push(t)}})})}_doOAuthSignIn(e,t,r,n){const s=r._oAuthCred,i={portalUrl:r.portalUrl}
!r.popup&&r.preserveUrlHash&&window.location.hash&&(i.hash=window.location.hash),s.stateUID&&(i.uid=s.stateUID)
const o={client_id:r.appId,response_type:s.codeVerifier?"code":"token",state:JSON.stringify(i),expiration:r.expiration,locale:r.locale,redirect_uri:this._getRedirectURI(r,!!s.codeVerifier)}
r.forceLogin&&(o.force_login=!0),r.forceUserId&&r.userId&&(o.prepopulatedusername=r.userId),!r.popup&&this._doPortalSignIn(e)&&(o.redirectToUserOrgUrl=!0),s.codeVerifier&&(o.code_challenge=n||s.codeVerifier,o.code_challenge_method=n?"S256":"plain")
const l=r.portalUrl.replace(/^http:/i,"https:")+"/sharing/oauth2/authorize",u=l+"?"+Object(f.J)(o)
if(r.popup){const e=window.open(u,"esriJSAPIOAuth",r.popupWindowFeatures)
if(e)e.focus(),this._oAuthDfd.oAuthWin_=e,this._oAuthIntervalId=setInterval(()=>{if(e.closed){clearInterval(this._oAuthIntervalId),this._oAuthOnPopupHandle.remove()
const e=this._oAuthDfd
if(e){const t=new a.a("identity-manager:user-aborted","ABORTED")
e.reject(t)}}},500),this._oAuthOnPopupHandle=Object(c.c)(window,["arcgis:auth:hash","arcgis:auth:location:search"],e=>{"arcgis:auth:hash"===e.type?this.setOAuthResponseHash(e.detail):this._setOAuthResponseQueryString(e.detail)})
else{const e=new a.a("identity-manager:popup-blocked","ABORTED")
this._oAuthDfd.reject(e)}}else this._rejectOnPersistedPageShow=!0,this._oAuthRedirectFunc?this._oAuthRedirectFunc({authorizeParams:o,authorizeUrl:l,resourceUrl:e,serverInfo:t,oAuthInfo:r}):window.location.href=u}_getRedirectURI(e,t){const r=window.location.href.replace(/#.*$/,"")
if(e.popup)return Object(f.F)(e.popupCallbackUrl)
if(t){const e=Object(f.Q)(r)
return e.query&&["code","error","error_description","message_code","persist","state"].forEach(t=>{delete e.query[t]}),Object(f.e)(e.path,e.query)}return r}}ke.prototype.declaredClass="esri.identity.IdentityManagerBase"
let Ae=class extends l.a.EventedAccessor{constructor(e){super(e),this._oAuthCred=null,this.tokenRefreshBuffer=2,e&&e._oAuthCred&&(this._oAuthCred=e._oAuthCred)}initialize(){this.resources=this.resources||[],null==this.creationTime&&(this.creationTime=Date.now())}refreshToken(){const e=n.b.findServerInfo(this.server),t=e&&e.owningSystemUrl,r=!!t&&"server"===this.scope,s=r&&Se(e,n.b._legacyFed),i=e.webTierAuth,o=i&&n.b.normalizeWebTierAuth,a=Oe[this.server],l=a&&a[this.userId]
let c,u=this.resources&&this.resources[0],h=r?n.b.findServerInfo(t):null,d={username:this.userId,password:l}
if(i&&!o)return
r&&!h&&n.b.serverInfos.some(e=>(n.b._isIdProvider(t,e.server)&&(h=e),!!h))
const p=h?n.b.findCredential(h.server,this.userId):null
if(!r||p){if(!s){if(r)c={serverUrl:u,token:p&&p.token,ssl:p&&p.ssl}
else if(o)d=null,c={ssl:this.ssl}
else{if(!l){let t
return u&&(u=n.b._sanitizeUrl(u),this._enqueued=1,t=n.b._enqueue(u,e,null,null,this.isAdmin,this),t.then(()=>{this._enqueued=0,this.refreshServerTokens()}).catch(()=>{this._enqueued=0})),t}this.isAdmin&&(c={isAdmin:!0})}return n.b.generateToken(r?h:e,r?null:d,c).then(e=>{this.token=e.token,this.expires=null!=e.expires?Number(e.expires):null,this.creationTime=Date.now(),this.validity=e.validity,this.emitTokenChange(),this.refreshServerTokens()}).catch(()=>{})}null==p||p.refreshToken()}}refreshServerTokens(){"portal"===this.scope&&n.b.credentials.forEach(e=>{const t=n.b.findServerInfo(e.server),r=t&&t.owningSystemUrl
e!==this&&e.userId===this.userId&&r&&"server"===e.scope&&(n.b._hasSameServerInstance(this.server,r)||n.b._isIdProvider(r,this.server))&&(Se(t,n.b._legacyFed)?(e.token=this.token,e.expires=this.expires,e.creationTime=this.creationTime,e.validity=this.validity,e.emitTokenChange()):e.refreshToken())})}emitTokenChange(e){clearTimeout(this._refreshTimer)
const t=this.server&&n.b.findServerInfo(this.server),r=t&&t.owningSystemUrl,s=r&&n.b.findServerInfo(r)
!1===e||r&&"portal"!==this.scope&&(!s||!s.webTierAuth||n.b.normalizeWebTierAuth)||null==this.expires&&null==this.validity||this._startRefreshTimer(),this.emit("token-change")}destroy(){this.userId=this.server=this.token=this.expires=this.validity=this.resources=this.creationTime=null,this._oAuthCred&&(this._oAuthCred.destroy(),this._oAuthCred=null)
const e=n.b.credentials.indexOf(this)
e>-1&&n.b.credentials.splice(e,1),this.emitTokenChange(),this.emit("destroy")}toJSON(){const e=Object(u.d)({userId:this.userId,server:this.server,token:this.token,expires:this.expires,validity:this.validity,ssl:this.ssl,isAdmin:this.isAdmin,creationTime:this.creationTime,scope:this.scope}),t=this.resources
return t&&t.length>0&&(e.resources=t.slice()),e}_startRefreshTimer(){clearTimeout(this._refreshTimer)
const e=6e4*this.tokenRefreshBuffer,t=2**31-1
let r=(this.validity?this.creationTime+6e4*this.validity:this.expires)-Date.now()
r<0?r=0:r>t&&(r=t),this._refreshTimer=setTimeout(this.refreshToken.bind(this),r>e?r-e:r)}}
Object(s.a)([Object(m.b)()],Ae.prototype,"creationTime",void 0),Object(s.a)([Object(m.b)()],Ae.prototype,"expires",void 0),Object(s.a)([Object(m.b)()],Ae.prototype,"isAdmin",void 0),Object(s.a)([Object(m.b)()],Ae.prototype,"oAuthState",void 0),Object(s.a)([Object(m.b)()],Ae.prototype,"resources",void 0),Object(s.a)([Object(m.b)()],Ae.prototype,"scope",void 0),Object(s.a)([Object(m.b)()],Ae.prototype,"server",void 0),Object(s.a)([Object(m.b)()],Ae.prototype,"ssl",void 0),Object(s.a)([Object(m.b)()],Ae.prototype,"token",void 0),Object(s.a)([Object(m.b)()],Ae.prototype,"tokenRefreshBuffer",void 0),Object(s.a)([Object(m.b)()],Ae.prototype,"userId",void 0),Object(s.a)([Object(m.b)()],Ae.prototype,"validity",void 0),Ae=Object(s.a)([Object(g.a)("esri.identity.Credential")],Ae)
class Te extends ke{}Te.prototype.declaredClass="esri.identity.IdentityManager"
const Ue=new Te
Object(n.c)(Ue)},972:function(e,t,r){"use strict"
r.d(t,"a",(function(){return v})),r.d(t,"b",(function(){return m}))
var n=r(968),s=r(975),i=r(23),o=r(234),a=r(1006)
class l{constructor(){this._values=new Map,this.multipleOriginsSupported=!1}clone(e){const t=new l
return this._values.forEach((r,n)=>{e&&e.has(n)||t.set(n,Object(o.a)(r.value),r.origin)}),t}get(e,t){t=this._normalizeOrigin(t)
const r=this._values.get(e)
return null==t||(null==r?void 0:r.origin)===t?null==r?void 0:r.value:void 0}originOf(e){var t,r
return null!=(t=null==(r=this._values.get(e))?void 0:r.origin)?t:a.a.USER}keys(e){e=this._normalizeOrigin(e)
const t=[...this._values.keys()]
return null==e?t:t.filter(t=>{var r
return(null==(r=this._values.get(t))?void 0:r.origin)===e})}set(e,t,r){if((r=this._normalizeOrigin(r))===a.a.DEFAULTS){const t=this._values.get(e)
if(t&&null!=t.origin&&t.origin>r)return}this._values.set(e,new c(t,r))}delete(e,t){var r
null!=(t=this._normalizeOrigin(t))&&(null==(r=this._values.get(e))?void 0:r.origin)!==t||this._values.delete(e)}has(e,t){var r
return null!=(t=this._normalizeOrigin(t))?(null==(r=this._values.get(e))?void 0:r.origin)===t:this._values.has(e)}forEach(e){this._values.forEach(({value:t},r)=>e(t,r))}_normalizeOrigin(e){if(null!=e)return e===a.a.DEFAULTS?e:a.a.USER}}class c{constructor(e,t){this.value=e,this.origin=t}}var u=r(1178),h=r(1091),d=r(999),p=r(1096),f=r(969)
const m=e=>{let t=class extends e{constructor(...e){super(...e)
const t=Object(i.d)(Object(d.a)(this)),r=t.store,n=new l
t.store=n,Object(u.a)(t,r,n)}read(e,t){Object(h.a)(this,e,t)}write(e={},t){return Object(p.b)(this,e,t)}toJSON(e){return this.write({},e)}static fromJSON(e,t){return g.call(this,e,t)}}
return t=Object(n.a)([Object(f.a)("esri.core.JSONSupport")],t),t.prototype.toJSON.isDefaultToJSON=!0,t}
function g(e,t){if(!e)return null
if(e.declaredClass)throw new Error("JSON object is already hydrated")
const r=new this
return r.read(e,t),r}let v=class extends(m(s.a)){}
v=Object(n.a)([Object(f.a)("esri.core.JSONSupport")],v)},976:function(e,t,r){"use strict"
r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return i}))
var n=r(146)
class s{constructor(e,t={ignoreUnknown:!1,useNumericKeys:!1}){this._jsonToAPI=e,this._options=t,this.apiValues=[],this.jsonValues=[],this._apiToJSON=this._invertMap(e),this.apiValues=this._getKeysSorted(this._apiToJSON),this.jsonValues=this._getKeysSorted(this._jsonToAPI),this.read=e=>this.fromJSON(e),this.write=(e,t,r)=>{const s=this.toJSON(e)
void 0!==s&&Object(n.c)(r,s,t)},this.write.isJSONMapWriter=!0}toJSON(e){if(null==e)return null
if(this._apiToJSON.hasOwnProperty(e)){const t=this._apiToJSON[e]
return this._options.useNumericKeys?+t:t}return this._options.ignoreUnknown?void 0:e}fromJSON(e){return null!=e&&this._jsonToAPI.hasOwnProperty(e)?this._jsonToAPI[e]:this._options.ignoreUnknown?void 0:e}_invertMap(e){const t={}
for(const r in e)t[e[r]]=r
return t}_getKeysSorted(e){const t=[]
for(const r in e)t.push(r)
return t.sort(),t}}function i(){return function(e,t){return new s(e,{ignoreUnknown:!0,...t})}}},978:function(e,t,r){"use strict"
r.d(t,"a",(function(){return v})),r.d(t,"b",(function(){return h})),r.d(t,"c",(function(){return m})),r.d(t,"d",(function(){return g})),r.d(t,"e",(function(){return b})),r.d(t,"f",(function(){return l})),r.d(t,"g",(function(){return c})),r.d(t,"h",(function(){return d}))
var n=r(1043),s=r(1017),i=r(23),o=r(973),a=r(1076)
function l(e,t,r={}){return u(e,t,r,p)}function c(e,t,r={}){return u(e,t,r,f)}function u(e,t,r={},n){let s=null
const o=r.once?(e,r)=>{n(e)&&(Object(i.s)(s),t(e,r))}:(e,r)=>{n(e)&&t(e,r)}
if(s=Object(a.e)(e,o,r.sync,r.equals),r.initial){const t=e()
o(t,t)}return s}function h(e,t,r,o={}){let a=null,c=null,u=null
function h(){a&&c&&(c.remove(),null!=o.onListenerRemove&&o.onListenerRemove(a),a=null,c=null)}function d(e){o.once&&o.once&&Object(i.s)(u),r(e)}const p=l(e,(e,r)=>{h(),Object(n.b)(e)&&(a=e,c=Object(n.c)(e,t,d),null==o.onListenerAdd||o.onListenerAdd(e))},{sync:o.sync,initial:!0})
return u=Object(s.c)(()=>{p.remove(),h()}),u}function d(e,t){return function(e,t,r){if(Object(o.k)(r))return Promise.reject(Object(o.c)())
const n=e()
if(null!=t&&t(n))return Promise.resolve(n)
let a=null
function l(){a=Object(i.s)(a)}return new Promise((n,i)=>{a=Object(s.b)([Object(o.n)(r,()=>{l(),i(Object(o.c)())}),u(e,e=>{l(),n(e)},{sync:!1,once:!0},null!=t?t:p)])})}(e,f,t)}function p(e){return!0}function f(e){return!!e}function m(e,t,r={}){let n=!1
const s=l(e,(e,r)=>{n||t(e,r)},r)
return{remove(){s.remove()},pause(){n=!0},resume(){n=!1}}}r(1048)
const g={sync:!0},v={initial:!0},b={sync:!0,initial:!0}},987:function(e,t,r){"use strict"
r.d(t,"a",(function(){return l}))
var n=r(971),s=r(1112)
const i=Object.prototype.toString
function o(e){const t="__accessorMetadata__"in e?Object(n.m)(e):e
return function(...e){if(e.push(t),"number"==typeof e[2])throw new Error("Using @cast has parameter decorator is not supported since 4.16")
return a.apply(this,e)}}function a(e,t,r,n){Object(s.b)(e,t).cast=n}function l(...e){if(3!==e.length||"string"!=typeof e[1])return 1===e.length&&"[object Function]"===i.call(e[0])?o(e[0]):1===e.length&&"string"==typeof e[0]?function(e){return(t,r)=>{Object(s.b)(t,e).cast=t[r]}}(e[0]):void 0}}}])
