(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[4,759],{1065:function(t,e,o){"use strict"
o.d(e,"a",(function(){return x}))
var r=o(968),i=o(976),s=o(234),n=o(980),a=o(970),l=(o(971),o(979)),c=o(969),b=(o(445),o(1394))
let u=class extends b.a{constructor(t){super(t),this.type="simple-line",this.width=.75}hash(){return`${this.type}.${this.width}`}}
Object(r.a)([Object(l.a)({esriSLS:"simple-line"},{readOnly:!0})],u.prototype,"type",void 0),Object(r.a)([Object(a.b)({type:Number,cast:n.k,json:{write:!0}})],u.prototype,"width",void 0),u=Object(r.a)([Object(c.a)("esri.symbols.LineSymbol")],u)
const p=u
var h,y=o(990),d=o(972),j=o(977),O=o(974),m=o(2870)
let f=h=class extends d.a{constructor(t){super(t),this.placement="begin-end",this.type="line-marker",this.style="arrow"}writeStyle(t,e,o,r){e[o]="web-map"===(null==r?void 0:r.origin)?"arrow":t}set color(t){this._set("color",t)}readColor(t){return t&&null!=t[0]?[t[0],t[1],t[2],t[3]/255]:t}writeColor(t,e,o,r){"web-map"===(null==r?void 0:r.origin)||(e[o]=t)}clone(){return new h({color:Object(s.a)(this.color),placement:this.placement,style:this.style})}hash(){var t
return`${this.placement}.${null==(t=this.color)?void 0:t.hash()}.${this.style}`}}
Object(r.a)([Object(a.b)({type:["begin","end","begin-end"],json:{write:!0}})],f.prototype,"placement",void 0),Object(r.a)([Object(l.a)({"line-marker":"line-marker"},{readOnly:!0}),Object(a.b)({json:{origins:{"web-map":{write:!1}}}})],f.prototype,"type",void 0),Object(r.a)([Object(a.b)({type:m.b})],f.prototype,"style",void 0),Object(r.a)([Object(O.a)("style")],f.prototype,"writeStyle",null),Object(r.a)([Object(a.b)({type:y.a,value:null,json:{write:{allowNull:!0}}})],f.prototype,"color",null),Object(r.a)([Object(j.a)("color")],f.prototype,"readColor",null),Object(r.a)([Object(O.a)("color")],f.prototype,"writeColor",null),f=h=Object(r.a)([Object(c.a)("esri.symbols.LineSymbolMarker")],f)
const g=f
var w
const v=new i.a({esriSLSSolid:"solid",esriSLSDash:"dash",esriSLSDot:"dot",esriSLSDashDot:"dash-dot",esriSLSDashDotDot:"long-dash-dot-dot",esriSLSNull:"none",esriSLSInsideFrame:"inside-frame",esriSLSShortDash:"short-dash",esriSLSShortDot:"short-dot",esriSLSShortDashDot:"short-dash-dot",esriSLSShortDashDotDot:"short-dash-dot-dot",esriSLSLongDash:"long-dash",esriSLSLongDashDot:"long-dash-dot"})
let S=w=class extends p{constructor(...t){super(...t),this.type="simple-line",this.style="solid",this.cap="round",this.join="round",this.marker=null,this.miterLimit=2}normalizeCtorArgs(t,e,o,r,i,s){if(t&&"string"!=typeof t)return t
const a={}
return null!=t&&(a.style=t),null!=e&&(a.color=e),null!=o&&(a.width=Object(n.k)(o)),null!=r&&(a.cap=r),null!=i&&(a.join=i),null!=s&&(a.miterLimit=Object(n.k)(s)),a}clone(){var t
return new w({color:Object(s.a)(this.color),style:this.style,width:this.width,cap:this.cap,join:this.join,miterLimit:this.miterLimit,marker:null==(t=this.marker)?void 0:t.clone()})}hash(){var t,e
return`${super.hash()}.${null==(t=this.color)?void 0:t.hash()}.${this.style}.${this.cap}.${this.join}.${this.miterLimit}.${null==(e=this.marker)?void 0:e.hash()}`}}
Object(r.a)([Object(l.a)({esriSLS:"simple-line"},{readOnly:!0})],S.prototype,"type",void 0),Object(r.a)([Object(a.b)({type:v.apiValues,json:{read:v.read,write:v.write}})],S.prototype,"style",void 0),Object(r.a)([Object(a.b)({type:["butt","round","square"],json:{write:{overridePolicy:(t,e,o)=>({enabled:"round"!==t&&(null==o||null==o.origin)})}}})],S.prototype,"cap",void 0),Object(r.a)([Object(a.b)({type:["miter","round","bevel"],json:{write:{overridePolicy:(t,e,o)=>({enabled:"round"!==t&&(null==o||null==o.origin)})}}})],S.prototype,"join",void 0),Object(r.a)([Object(a.b)({types:{key:"type",base:null,defaultKeyValue:"line-marker",typeMap:{"line-marker":g}},json:{write:!0,origins:{"web-scene":{write:!1}}}})],S.prototype,"marker",void 0),Object(r.a)([Object(a.b)({type:Number,json:{read:!1,write:!1}})],S.prototype,"miterLimit",void 0),S=w=Object(r.a)([Object(c.a)("esri.symbols.SimpleLineSymbol")],S)
const x=S},1073:function(t,e,o){"use strict"
o.d(e,"a",(function(){return d}))
var r,i=o(968),s=o(990),n=o(976),a=o(234),l=o(970),c=(o(971),o(979)),b=o(969),u=o(2691),p=o(1065)
const h=new n.a({esriSFSSolid:"solid",esriSFSNull:"none",esriSFSHorizontal:"horizontal",esriSFSVertical:"vertical",esriSFSForwardDiagonal:"forward-diagonal",esriSFSBackwardDiagonal:"backward-diagonal",esriSFSCross:"cross",esriSFSDiagonalCross:"diagonal-cross"})
let y=r=class extends u.a{constructor(...t){super(...t),this.color=new s.a([0,0,0,.25]),this.outline=new p.a,this.type="simple-fill",this.style="solid"}normalizeCtorArgs(t,e,o){if(t&&"string"!=typeof t)return t
const r={}
return t&&(r.style=t),e&&(r.outline=e),o&&(r.color=o),r}clone(){return new r({color:Object(a.a)(this.color),outline:this.outline&&this.outline.clone(),style:this.style})}hash(){return`${super.hash()}${this.style}.${this.color&&this.color.hash()}`}}
Object(i.a)([Object(l.b)()],y.prototype,"color",void 0),Object(i.a)([Object(l.b)()],y.prototype,"outline",void 0),Object(i.a)([Object(c.a)({esriSFS:"simple-fill"},{readOnly:!0})],y.prototype,"type",void 0),Object(i.a)([Object(l.b)({type:h.apiValues,json:{read:h.read,write:h.write}})],y.prototype,"style",void 0),y=r=Object(i.a)([Object(b.a)("esri.symbols.SimpleFillSymbol")],y)
const d=y},1078:function(t,e,o){"use strict"
o.d(e,"a",(function(){return O}))
var r,i=o(968),s=o(990),n=o(976),a=o(234),l=o(980),c=o(970),b=(o(971),o(979)),u=o(969),p=o(974),h=o(2695),y=o(1065)
const d=new n.a({esriSMSCircle:"circle",esriSMSSquare:"square",esriSMSCross:"cross",esriSMSX:"x",esriSMSDiamond:"diamond",esriSMSTriangle:"triangle",esriSMSPath:"path"})
let j=r=class extends h.a{constructor(...t){super(...t),this.color=new s.a([255,255,255,.25]),this.type="simple-marker",this.size=12,this.style="circle",this.outline=new y.a}normalizeCtorArgs(t,e,o,r){if(t&&"string"!=typeof t)return t
const i={}
return t&&(i.style=t),null!=e&&(i.size=Object(l.k)(e)),o&&(i.outline=o),r&&(i.color=r),i}writeColor(t,e){t&&"x"!==this.style&&"cross"!==this.style&&(e.color=t.toJSON()),null===t&&(e.color=null)}set path(t){this.style="path",this._set("path",t)}clone(){return new r({angle:this.angle,color:Object(a.a)(this.color),outline:this.outline&&this.outline.clone(),path:this.path,size:this.size,style:this.style,xoffset:this.xoffset,yoffset:this.yoffset})}hash(){var t
return`${super.hash()}.${this.color&&this.color.hash()}.${this.path}.${this.style}.${null==(t=this.outline)?void 0:t.hash()}`}}
Object(i.a)([Object(c.b)()],j.prototype,"color",void 0),Object(i.a)([Object(p.a)("color")],j.prototype,"writeColor",null),Object(i.a)([Object(b.a)({esriSMS:"simple-marker"},{readOnly:!0})],j.prototype,"type",void 0),Object(i.a)([Object(c.b)()],j.prototype,"size",void 0),Object(i.a)([Object(c.b)({type:d.apiValues,json:{read:d.read,write:d.write}})],j.prototype,"style",void 0),Object(i.a)([Object(c.b)({type:String,json:{write:!0}})],j.prototype,"path",null),Object(i.a)([Object(c.b)({types:{key:"type",base:null,defaultKeyValue:"simple-line",typeMap:{"simple-line":y.a}},json:{default:null,write:!0}})],j.prototype,"outline",void 0),j=r=Object(i.a)([Object(u.a)("esri.symbols.SimpleMarkerSymbol")],j)
const O=j},1119:function(t,e,o){"use strict"
o.d(e,"a",(function(){return i})),o.d(e,"b",(function(){return s}))
var r=o(971)
function i(t){const e=Object(r.e)(100*(1-t))
return Math.max(0,Math.min(e,100))}function s(t){const e=1-t/100
return Math.max(0,Math.min(e,1))}},1145:function(t,e,o){"use strict"
o.d(e,"a",(function(){return j}))
var r,i=o(968),s=o(233),n=o(23),a=o(973),l=o(970),c=(o(971),o(445),o(979)),b=o(969),u=o(1028),p=o(1054),h=o(1394),y=o(1853)
let d=r=class extends h.a{constructor(t){super(t),this.styleName=null,this.portal=null,this.styleUrl=null,this.thumbnail=null,this.name=null,this.type="web-style"}get _fetchCacheKey(){const t=Object(n.l)(this.portal)?this.portal:u.a.getDefault(),e=t.user?t.user.username:null
return`${this.styleName}:${this.styleUrl}:${this.name}:${e}:${t.url}`}read(t,e){this.portal=null==e?void 0:e.portal,super.read(t,e)}clone(){return new r({name:this.name,styleUrl:this.styleUrl,styleName:this.styleName,portal:this.portal})}fetchSymbol(t){return this._fetchSymbol("webRef",t)}fetchCIMSymbol(t){return this._fetchSymbol("cimRef",t)}async _fetchSymbol(t,e){const r=Object(n.l)(e)?e.cache:null,i=r?this._fetchCacheKey:null
if(Object(n.l)(r)){const t=i&&r.get(i)
if(t)return t.clone()}const l=await o.e(321).then(o.bind(null,1656))
Object(a.q)(e)
const c=l.resolveWebStyleSymbol(this,{portal:this.portal},t,e)
c.catch(t=>{s.a.getLogger(this.declaredClass).error("#fetchSymbol()","Failed to create symbol from style",t)})
const b=await c
return"webRef"===t&&"point-3d"===b.type||"cimRef"===t&&"cim"===b.type?(Object(n.l)(r)&&r.set(i,b.clone()),b):null}}
Object(i.a)([Object(l.b)({json:{write:!1}})],d.prototype,"color",void 0),Object(i.a)([Object(l.b)({type:String,json:{write:!0}})],d.prototype,"styleName",void 0),Object(i.a)([Object(l.b)({type:u.a,json:{write:!1}})],d.prototype,"portal",void 0),Object(i.a)([Object(l.b)({type:String,json:{read:p.g,write:p.i}})],d.prototype,"styleUrl",void 0),Object(i.a)([Object(l.b)({type:y.a,json:{read:!1}})],d.prototype,"thumbnail",void 0),Object(i.a)([Object(l.b)({type:String,json:{write:!0}})],d.prototype,"name",void 0),Object(i.a)([Object(c.a)({styleSymbolReference:"web-style"},{readOnly:!0})],d.prototype,"type",void 0),Object(i.a)([Object(l.b)()],d.prototype,"_fetchCacheKey",null),d=r=Object(i.a)([Object(b.a)("esri.symbols.WebStyleSymbol")],d)
const j=d},1162:function(t,e,o){"use strict"
o.d(e,"a",(function(){return s})),o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return c})),o.d(e,"d",(function(){return l})),o.d(e,"e",(function(){return i}))
const r={transparent:[0,0,0,0],black:[0,0,0,1],silver:[192,192,192,1],gray:[128,128,128,1],white:[255,255,255,1],maroon:[128,0,0,1],red:[255,0,0,1],purple:[128,0,128,1],fuchsia:[255,0,255,1],green:[0,128,0,1],lime:[0,255,0,1],olive:[128,128,0,1],yellow:[255,255,0,1],navy:[0,0,128,1],blue:[0,0,255,1],teal:[0,128,128,1],aqua:[0,255,255,1],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],blanchedalmond:[255,235,205,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],oldlace:[253,245,230,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],rebeccapurple:[102,51,153,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],whitesmoke:[245,245,245,1],yellowgreen:[154,205,50,1]}
function i(t){return r[t]||r[t.toLowerCase()]}function s(t){var e
return null!=(e=r[t])?e:r[t.toLowerCase()]}function n(t){return[...s(t)]}function a(t,e,o){o<0&&++o,o>1&&--o
const r=6*o
return r<1?t+(e-t)*r:2*o<1?e:3*o<2?t+(e-t)*(2/3-o)*6:t}function l(t,e,o,r=1){const i=(t%360+360)%360/360,s=o<=.5?o*(e+1):o+e-o*e,n=2*o-s
return[Math.round(255*a(n,s,i+1/3)),Math.round(255*a(n,s,i)),Math.round(255*a(n,s,i-1/3)),r]}function c(t){const e=t.length>5,o=e?8:4,r=(1<<o)-1,i=e?1:17,s=e?9===t.length:5===t.length
let n=Number("0x"+t.substr(1))
if(isNaN(n))return null
const a=[0,0,0,1]
let l
return s&&(l=n&r,n>>=o,a[3]=i*l/255),l=n&r,n>>=o,a[2]=i*l,l=n&r,n>>=o,a[1]=i*l,l=n&r,n>>=o,a[0]=i*l,a}},1179:function(t,e,o){"use strict"
o.d(e,"a",(function(){return s})),o.d(e,"b",(function(){return i}))
var r=o(993)
function i(t,e,o=r.a){return e||(e=new o),e===t||(e.removeAll(),(i=t)&&(Array.isArray(i)||"items"in i&&Array.isArray(i.items))?e.addMany(t):t&&e.add(t)),e
var i}function s(t){return t}},1218:function(t,e,o){"use strict"
o.d(e,"a",(function(){return w}))
var r,i=o(968),s=o(993),n=o(234),a=o(23),l=o(970),c=(o(971),o(979)),b=o(969),u=o(2690),p=o(1891),h=o(2528),y=o(2683),d=o(2684),j=o(1401),O=o(1778),m=o(2694)
const f=s.a.ofType({base:null,key:"type",typeMap:{extrude:u.a,fill:p.a,icon:h.a,line:y.a,object:d.a,text:O.a,water:m.a}})
let g=r=class extends j.a{constructor(t){super(t),this.symbolLayers=new f,this.type="polygon-3d"}clone(){return new r({styleOrigin:Object(n.a)(this.styleOrigin),symbolLayers:Object(n.a)(this.symbolLayers),thumbnail:Object(n.a)(this.thumbnail)})}static fromJSON(t){const e=new r
if(e.read(t),2===e.symbolLayers.length&&"fill"===e.symbolLayers.getItemAt(0).type&&"line"===e.symbolLayers.getItemAt(1).type){const o=e.symbolLayers.getItemAt(0),r=e.symbolLayers.getItemAt(1)
!r.enabled||t.symbolLayers&&t.symbolLayers[1]&&!1===t.symbolLayers[1].enable||(o.outline={size:r.size,color:Object(a.l)(r.material)?r.material.color:null}),e.symbolLayers.removeAt(1)}return e}static fromSimpleFillSymbol(t){return new r({symbolLayers:[p.a.fromSimpleFillSymbol(t)]})}}
Object(i.a)([Object(l.b)({type:f,json:{write:!0}})],g.prototype,"symbolLayers",void 0),Object(i.a)([Object(c.a)({PolygonSymbol3D:"polygon-3d"},{readOnly:!0})],g.prototype,"type",void 0),g=r=Object(i.a)([Object(b.a)("esri.symbols.PolygonSymbol3D")],g)
const w=g},1239:function(t,e,o){"use strict"
o.d(e,"a",(function(){return O}))
var r,i=o(968),s=o(990),n=o(234),a=o(980),l=o(970),c=o(987),b=o(979),u=o(969),p=o(974),h=o(2692),y=o(1394),d=o(2763)
let j=r=class extends y.a{constructor(...t){super(...t),this.backgroundColor=null,this.borderLineColor=null,this.borderLineSize=null,this.font=new h.a,this.horizontalAlignment="center",this.kerning=!0,this.haloColor=null,this.haloSize=null,this.rightToLeft=null,this.rotated=!1,this.text="",this.type="text",this.verticalAlignment="baseline",this.xoffset=0,this.yoffset=0,this.angle=0,this.width=null,this.lineWidth=192,this.lineHeight=1}normalizeCtorArgs(t,e,o){if(t&&"string"!=typeof t)return t
const r={}
return t&&(r.text=t),e&&(r.font=e),o&&(r.color=o),r}writeLineWidth(t,e,o,r){r&&"string"!=typeof r?r.origin:e[o]=t}castLineWidth(t){return Object(a.k)(t)}writeLineHeight(t,e,o,r){r&&"string"!=typeof r?r.origin:e[o]=t}clone(){return new r({angle:this.angle,backgroundColor:Object(n.a)(this.backgroundColor),borderLineColor:Object(n.a)(this.borderLineColor),borderLineSize:this.borderLineSize,color:Object(n.a)(this.color),font:this.font&&this.font.clone(),haloColor:Object(n.a)(this.haloColor),haloSize:this.haloSize,horizontalAlignment:this.horizontalAlignment,kerning:this.kerning,lineHeight:this.lineHeight,lineWidth:this.lineWidth,rightToLeft:this.rightToLeft,rotated:this.rotated,text:this.text,verticalAlignment:this.verticalAlignment,width:this.width,xoffset:this.xoffset,yoffset:this.yoffset})}hash(){var t
return`${this.backgroundColor&&this.backgroundColor.hash()}.${this.borderLineColor}.${this.borderLineSize}.${null==(t=this.color)?void 0:t.hash()}.${this.font&&this.font.hash()}.${this.haloColor&&this.haloColor.hash()}.${this.haloSize}.${this.horizontalAlignment}.${this.kerning}.${this.rightToLeft}.${this.rotated}.${this.text}.${this.verticalAlignment}.${this.width}.${this.xoffset}.${this.yoffset}.${this.lineHeight}.${this.lineWidth}.${this.angle}`}}
Object(i.a)([Object(l.b)({type:s.a,json:{write:!0}})],j.prototype,"backgroundColor",void 0),Object(i.a)([Object(l.b)({type:s.a,json:{write:!0}})],j.prototype,"borderLineColor",void 0),Object(i.a)([Object(l.b)({type:Number,json:{write:!0},cast:a.k})],j.prototype,"borderLineSize",void 0),Object(i.a)([Object(l.b)({type:h.a,json:{write:!0}})],j.prototype,"font",void 0),Object(i.a)([Object(l.b)({...d.d,json:{write:!0}})],j.prototype,"horizontalAlignment",void 0),Object(i.a)([Object(l.b)({type:Boolean,json:{write:!0}})],j.prototype,"kerning",void 0),Object(i.a)([Object(l.b)({type:s.a,json:{write:!0}})],j.prototype,"haloColor",void 0),Object(i.a)([Object(l.b)({type:Number,cast:a.k,json:{write:!0}})],j.prototype,"haloSize",void 0),Object(i.a)([Object(l.b)({type:Boolean,json:{write:!0}})],j.prototype,"rightToLeft",void 0),Object(i.a)([Object(l.b)({type:Boolean,json:{write:!0}})],j.prototype,"rotated",void 0),Object(i.a)([Object(l.b)({type:String,json:{write:!0}})],j.prototype,"text",void 0),Object(i.a)([Object(b.a)({esriTS:"text"},{readOnly:!0})],j.prototype,"type",void 0),Object(i.a)([Object(l.b)({...d.f,json:{write:!0}})],j.prototype,"verticalAlignment",void 0),Object(i.a)([Object(l.b)({type:Number,cast:a.k,json:{write:!0}})],j.prototype,"xoffset",void 0),Object(i.a)([Object(l.b)({type:Number,cast:a.k,json:{write:!0}})],j.prototype,"yoffset",void 0),Object(i.a)([Object(l.b)({type:Number,json:{read:t=>t&&-1*t,write:(t,e)=>e.angle=t&&-1*t}})],j.prototype,"angle",void 0),Object(i.a)([Object(l.b)({type:Number,json:{write:!0}})],j.prototype,"width",void 0),Object(i.a)([Object(l.b)({type:Number})],j.prototype,"lineWidth",void 0),Object(i.a)([Object(p.a)("lineWidth")],j.prototype,"writeLineWidth",null),Object(i.a)([Object(c.a)("lineWidth")],j.prototype,"castLineWidth",null),Object(i.a)([Object(l.b)(d.e)],j.prototype,"lineHeight",void 0),Object(i.a)([Object(p.a)("lineHeight")],j.prototype,"writeLineHeight",null),j=r=Object(i.a)([Object(u.a)("esri.symbols.TextSymbol")],j)
const O=j},1336:function(t,e,o){"use strict"
o.d(e,"a",(function(){return m}))
var r,i=o(968),s=o(993),n=o(234),a=o(970),l=(o(971),o(979)),c=o(969),b=o(2528),u=o(2684),p=o(1401),h=o(1778),y=o(1953),d=o(2875)
const j=s.a.ofType({base:null,key:"type",typeMap:{icon:b.a,object:u.a,text:h.a}})
let O=r=class extends p.a{constructor(t){super(t),this.verticalOffset=null,this.callout=null,this.symbolLayers=new j,this.type="point-3d"}supportsCallout(){if((this.symbolLayers?this.symbolLayers.length:0)<1)return!1
for(const t of this.symbolLayers.items)switch(t.type){case"icon":case"text":case"object":continue
default:return!1}return!0}hasVisibleCallout(){return Object(y.c)(this)}hasVisibleVerticalOffset(){return Object(y.d)(this)}clone(){return new r({verticalOffset:Object(n.a)(this.verticalOffset),callout:Object(n.a)(this.callout),styleOrigin:Object(n.a)(this.styleOrigin),symbolLayers:Object(n.a)(this.symbolLayers),thumbnail:Object(n.a)(this.thumbnail)})}static fromSimpleMarkerSymbol(t){return new r({symbolLayers:[b.a.fromSimpleMarkerSymbol(t)]})}static fromPictureMarkerSymbol(t){return new r({symbolLayers:[b.a.fromPictureMarkerSymbol(t)]})}static fromCIMSymbol(t){var e,o
if("CIMPointSymbol"!==(null==(e=t.data)||null==(o=e.symbol)?void 0:o.type))return null
const i=t.data.symbol
return new r(null!=i&&i.callout?{symbolLayers:[b.a.fromCIMSymbol(t)],callout:{type:"line",size:.5,color:[0,0,0]},verticalOffset:{screenLength:40}}:{symbolLayers:[b.a.fromCIMSymbol(t)]})}static fromTextSymbol(t){return new r({symbolLayers:[h.a.fromTextSymbol(t)]})}}
Object(i.a)([Object(a.b)({type:d.a,json:{write:!0}})],O.prototype,"verticalOffset",void 0),Object(i.a)([Object(a.b)(y.a)],O.prototype,"callout",void 0),Object(i.a)([Object(a.b)({type:j,json:{origins:{"web-scene":{write:!0}}}})],O.prototype,"symbolLayers",void 0),Object(i.a)([Object(l.a)({PointSymbol3D:"point-3d"},{readOnly:!0})],O.prototype,"type",void 0),O=r=Object(i.a)([Object(c.a)("esri.symbols.PointSymbol3D")],O)
const m=O},1394:function(t,e,o){"use strict"
o.d(e,"a",(function(){return h}))
var r=o(968),i=o(990),s=o(976),n=o(972),a=o(970),l=(o(971),o(445),o(977)),c=o(969)
const b=new s.a({esriSMS:"simple-marker",esriPMS:"picture-marker",esriSLS:"simple-line",esriSFS:"simple-fill",esriPFS:"picture-fill",esriTS:"text",esriSHD:"shield-label-symbol",PointSymbol3D:"point-3d",LineSymbol3D:"line-3d",PolygonSymbol3D:"polygon-3d",WebStyleSymbol:"web-style",MeshSymbol3D:"mesh-3d",LabelSymbol3D:"label-3d",CIMSymbolReference:"cim"})
let u=0,p=class extends n.a{constructor(t){super(t),this.id="sym"+u++,this.type=null,this.color=new i.a([0,0,0,1])}readColor(t){return t&&null!=t[0]?[t[0],t[1],t[2],t[3]/255]:t}async collectRequiredFields(t,e){}hash(){return JSON.stringify(this.toJSON())}clone(){}}
Object(r.a)([Object(a.b)({type:b.apiValues,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,writer:b.write}}})],p.prototype,"type",void 0),Object(r.a)([Object(a.b)({type:i.a,json:{write:{allowNull:!0}}})],p.prototype,"color",void 0),Object(r.a)([Object(l.a)("color")],p.prototype,"readColor",null),p=Object(r.a)([Object(c.a)("esri.symbols.Symbol")],p)
const h=p},1401:function(t,e,o){"use strict"
o.d(e,"a",(function(){return M}))
var r=o(968),i=o(993),s=o(1179),n=o(233),a=o(374),l=o(1044),c=o(970),b=o(987),u=(o(445),o(977)),p=o(969),h=o(974),y=o(1028),d=o(1054),j=o(2690),O=o(1891),m=o(2528),f=o(2683),g=o(2684),w=o(2693),v=o(1394),S=o(2018),x=o(1778),k=o(2694),L=o(1870),z=o(1853)
const N={icon:m.a,object:g.a,line:f.a,path:w.a,fill:O.a,extrude:j.a,text:x.a,water:k.a},D=i.a.ofType({base:S.a,key:"type",typeMap:N,errorContext:"symbol-layer"})
let C=class extends v.a{constructor(t){super(t),this.styleOrigin=null,this.thumbnail=null,this.type=null
const e=this.__accessor__&&this.__accessor__.metadatas&&this.__accessor__.metadatas.symbolLayers,o=e&&e.type||i.a
this._set("symbolLayers",new o)}get color(){return null}set color(t){this.constructed&&n.a.getLogger(this.declaredClass).error("Symbol3D does not support colors on the symbol level. Colors may be set on individual symbol layer materials instead.")}set symbolLayers(t){Object(s.b)(t,this._get("symbolLayers"))}readStyleOrigin(t,e,o){if(t.styleUrl&&t.name){const e=Object(d.d)(t.styleUrl,o)
return new L.a({styleUrl:e,name:t.name})}if(t.styleName&&t.name)return new L.a({portal:o&&o.portal||y.a.getDefault(),styleName:t.styleName,name:t.name})
o&&o.messages&&o.messages.push(new l.a("symbol3d:incomplete-style-origin","Style origin requires either a 'styleUrl' or 'styleName' and a 'name' property",{context:o,definition:t}))}writeStyleOrigin(t,e,o,r){if(t.styleUrl&&t.name){let o=Object(d.h)(t.styleUrl,r)
Object(a.x)(o)&&(o=Object(a.I)(o)),e.styleOrigin={styleUrl:o,name:t.name}}else t.styleName&&t.name&&(t.portal&&r&&r.portal&&!Object(a.w)(t.portal.restUrl,r.portal.restUrl)?r&&r.messages&&r.messages.push(new l.a("symbol:cross-portal","The symbol style origin cannot be persisted because it refers to an item on a different portal than the one being saved to.",{symbol:this})):e.styleOrigin={styleName:t.styleName,name:t.name})}normalizeCtorArgs(t){return t instanceof S.a||t&&N[t.type]?{symbolLayers:[t]}:Array.isArray(t)?{symbolLayers:t}:t}}
Object(r.a)([Object(c.b)({json:{read:!1,write:!1}})],C.prototype,"color",null),Object(r.a)([Object(c.b)({type:D,nonNullable:!0,json:{write:!0}}),Object(b.a)(s.a)],C.prototype,"symbolLayers",null),Object(r.a)([Object(c.b)({type:L.a})],C.prototype,"styleOrigin",void 0),Object(r.a)([Object(u.a)("styleOrigin")],C.prototype,"readStyleOrigin",null),Object(r.a)([Object(h.a)("styleOrigin",{"styleOrigin.styleUrl":{type:String},"styleOrigin.styleName":{type:String},"styleOrigin.name":{type:String}})],C.prototype,"writeStyleOrigin",null),Object(r.a)([Object(c.b)({type:z.a,json:{read:!1}})],C.prototype,"thumbnail",void 0),Object(r.a)([Object(c.b)({type:["point-3d","line-3d","polygon-3d","mesh-3d","label-3d"],readOnly:!0})],C.prototype,"type",void 0),C=Object(r.a)([Object(p.a)("esri.symbols.Symbol3D")],C)
const M=C},1402:function(t,e,o){"use strict"
o.d(e,"a",(function(){return y}))
var r,i=o(968),s=o(234),n=o(980),a=o(970),l=(o(971),o(979)),c=o(977),b=o(969),u=o(2695),p=o(2876)
let h=r=class extends u.a{constructor(...t){super(...t),this.color=null,this.type="picture-marker",this.url=null,this.source=null,this.height=12,this.width=12,this.size=null}normalizeCtorArgs(t,e,o){if(t&&"string"!=typeof t&&null==t.imageData)return t
const r={}
return t&&(r.url=t),null!=e&&(r.width=Object(n.k)(e)),null!=o&&(r.height=Object(n.k)(o)),r}readHeight(t,e){return e.size||t}readWidth(t,e){return e.size||t}clone(){const t=new r({angle:this.angle,height:this.height,url:this.url,width:this.width,xoffset:this.xoffset,yoffset:this.yoffset})
return t._set("source",Object(s.a)(this.source)),t}hash(){return`${super.hash()}.${this.height}.${this.url}.${this.width}`}}
Object(i.a)([Object(a.b)({json:{write:!1}})],h.prototype,"color",void 0),Object(i.a)([Object(l.a)({esriPMS:"picture-marker"},{readOnly:!0})],h.prototype,"type",void 0),Object(i.a)([Object(a.b)(p.b)],h.prototype,"url",void 0),Object(i.a)([Object(a.b)(p.a)],h.prototype,"source",void 0),Object(i.a)([Object(a.b)({type:Number,cast:n.k,json:{write:!0}})],h.prototype,"height",void 0),Object(i.a)([Object(c.a)("height",["height","size"])],h.prototype,"readHeight",null),Object(i.a)([Object(a.b)({type:Number,cast:n.k,json:{write:!0}})],h.prototype,"width",void 0),Object(i.a)([Object(a.b)({json:{write:!1}})],h.prototype,"size",void 0),h=r=Object(i.a)([Object(b.a)("esri.symbols.PictureMarkerSymbol")],h)
const y=h},1454:function(t,e,o){"use strict"
o.d(e,"a",(function(){return j}))
var r,i=o(968),s=o(993),n=o(234),a=o(970),l=(o(971),o(979)),c=o(969),b=o(1401),u=o(1778),p=o(1953),h=o(2875)
const y=s.a.ofType({base:null,key:"type",typeMap:{text:u.a}})
let d=r=class extends b.a{constructor(t){super(t),this.verticalOffset=null,this.callout=null,this.styleOrigin=null,this.symbolLayers=new y,this.type="label-3d"}supportsCallout(){return!0}hasVisibleCallout(){return Object(p.c)(this)}hasVisibleVerticalOffset(){return Object(p.d)(this)}clone(){return new r({styleOrigin:Object(n.a)(this.styleOrigin),symbolLayers:Object(n.a)(this.symbolLayers),thumbnail:Object(n.a)(this.thumbnail),callout:Object(n.a)(this.callout),verticalOffset:Object(n.a)(this.verticalOffset)})}static fromTextSymbol(t){return new r({symbolLayers:[u.a.fromTextSymbol(t)]})}}
Object(i.a)([Object(a.b)({type:h.a,json:{write:!0}})],d.prototype,"verticalOffset",void 0),Object(i.a)([Object(a.b)(p.a)],d.prototype,"callout",void 0),Object(i.a)([Object(a.b)({json:{read:!1,write:!1}})],d.prototype,"styleOrigin",void 0),Object(i.a)([Object(a.b)({type:y})],d.prototype,"symbolLayers",void 0),Object(i.a)([Object(l.a)({LabelSymbol3D:"label-3d"},{readOnly:!0})],d.prototype,"type",void 0),d=r=Object(i.a)([Object(c.a)("esri.symbols.LabelSymbol3D")],d)
const j=d},1455:function(t,e,o){"use strict"
o.d(e,"a",(function(){return j}))
var r,i=o(968),s=o(993),n=o(234),a=o(970),l=(o(971),o(979)),c=o(969),b=o(2683),u=o(2693),p=o(1401)
const h=s.a.ofType({base:null,key:"type",typeMap:{line:b.a,path:u.a}}),y=s.a.ofType({base:null,key:"type",typeMap:{line:b.a,path:u.a}})
let d=r=class extends p.a{constructor(t){super(t),this.symbolLayers=new h,this.type="line-3d"}clone(){return new r({styleOrigin:Object(n.a)(this.styleOrigin),symbolLayers:Object(n.a)(this.symbolLayers),thumbnail:Object(n.a)(this.thumbnail)})}static fromSimpleLineSymbol(t){return new r({symbolLayers:[b.a.fromSimpleLineSymbol(t)]})}}
Object(i.a)([Object(a.b)({type:h,json:{type:y}})],d.prototype,"symbolLayers",void 0),Object(i.a)([Object(l.a)({LineSymbol3D:"line-3d"},{readOnly:!0})],d.prototype,"type",void 0),d=r=Object(i.a)([Object(c.a)("esri.symbols.LineSymbol3D")],d)
const j=d},1456:function(t,e,o){"use strict"
o.d(e,"a",(function(){return y}))
var r,i=o(968),s=o(993),n=o(234),a=o(970),l=(o(971),o(979)),c=o(969),b=o(1891),u=o(1401)
const p=s.a.ofType({base:null,key:"type",typeMap:{fill:b.a}})
let h=r=class extends u.a{constructor(t){super(t),this.symbolLayers=new p,this.type="mesh-3d"}clone(){return new r({styleOrigin:Object(n.a)(this.styleOrigin),symbolLayers:Object(n.a)(this.symbolLayers),thumbnail:Object(n.a)(this.thumbnail)})}static fromSimpleFillSymbol(t){return new r({symbolLayers:[b.a.fromSimpleFillSymbol(t)]})}}
Object(i.a)([Object(a.b)({type:p})],h.prototype,"symbolLayers",void 0),Object(i.a)([Object(l.a)({MeshSymbol3D:"mesh-3d"},{readOnly:!0})],h.prototype,"type",void 0),h=r=Object(i.a)([Object(c.a)("esri.symbols.MeshSymbol3D")],h)
const y=h},1666:function(t,e,o){"use strict"
o.d(e,"a",(function(){return b}))
var r,i=o(968),s=o(972),n=o(23),a=o(970),l=(o(971),o(445),o(969)),c=o(1894)
let b=r=class extends s.a{constructor(t){super(t),this.color=null}clone(){const t={color:Object(n.l)(this.color)?this.color.clone():null}
return new r(t)}}
Object(i.a)([Object(a.b)(c.a)],b.prototype,"color",void 0),b=r=Object(i.a)([Object(l.a)("esri.symbols.support.Symbol3DMaterial")],b)},1778:function(t,e,o){"use strict"
o.d(e,"a",(function(){return x}))
var r,i=o(968),s=o(234),n=o(23),a=o(970),l=(o(971),o(979)),c=o(969),b=o(974),u=o(2692),p=o(2018),h=o(1894),y=o(990),d=o(972)
let j=r=class extends d.a{constructor(){super(...arguments),this.color=new y.a([0,0,0,1]),this.size=0}clone(){const t={color:Object(s.a)(this.color),size:this.size}
return new r(t)}}
Object(i.a)([Object(a.b)(h.a)],j.prototype,"color",void 0),Object(i.a)([Object(a.b)(h.b)],j.prototype,"size",void 0),j=r=Object(i.a)([Object(c.a)("esri.symbols.support.Symbol3DHalo")],j)
var O=o(1666),m=o(986)
o(445)
let f=class extends(Object(m.b)(d.a)){constructor(t){super(t),this.color=null}}
Object(i.a)([Object(a.b)(h.a)],f.prototype,"color",void 0),f=Object(i.a)([Object(c.a)("esri.symbols.support.Symbol3DTextBackground")],f)
var g,w=o(2763)
let v=g=class extends p.a{constructor(t){super(t),this._userSize=void 0,this.halo=null,this.horizontalAlignment="center",this.lineHeight=1,this.material=null,this.background=null,this.text=null,this.type="text",this.verticalAlignment="baseline"}get font(){return this._get("font")||null}set font(t){Object(n.l)(t)&&Object(n.l)(this._userSize)&&(t.size=this._userSize),this._set("font",t)}writeFont(t,e,o,r){const i={...r,textSymbol3D:!0}
e.font=t.write({},i),delete e.font.size}get size(){return Object(n.l)(this._userSize)?this._userSize:Object(n.l)(this.font)&&null!=this.font.size?this.font.size:9}set size(t){this._userSize=t,Object(n.l)(this.font)&&(this.font.size=this._userSize),this.notifyChange("size")}clone(){const t=new g({enabled:this.enabled,font:this.font&&Object(s.a)(this.font),halo:this.halo&&Object(s.a)(this.halo),horizontalAlignment:this.horizontalAlignment,lineHeight:this.lineHeight,material:Object(n.l)(this.material)?this.material.clone():null,text:this.text,verticalAlignment:this.verticalAlignment,background:Object(s.a)(this.background)})
return t._userSize=this._userSize,t}static fromTextSymbol(t){return new g({font:Object(n.l)(t.font)?t.font.clone():new u.a,halo:S(t.haloColor,t.haloSize),horizontalAlignment:t.horizontalAlignment,lineHeight:t.lineHeight,material:t.color?new O.a({color:t.color.clone()}):null,text:t.text,verticalAlignment:t.verticalAlignment,background:t.backgroundColor?new f({color:t.backgroundColor.clone()}):null})}}
function S(t,e){return t&&null!=e&&e>0?new j({color:Object(s.a)(t),size:e}):null}Object(i.a)([Object(a.b)({type:u.a,json:{write:!0}})],v.prototype,"font",null),Object(i.a)([Object(b.a)("font")],v.prototype,"writeFont",null),Object(i.a)([Object(a.b)({type:j,json:{write:!0}})],v.prototype,"halo",void 0),Object(i.a)([Object(a.b)({...w.d,json:{default:"center",write:!0}})],v.prototype,"horizontalAlignment",void 0),Object(i.a)([Object(a.b)({...w.e,json:{default:1,write:!0}})],v.prototype,"lineHeight",void 0),Object(i.a)([Object(a.b)({type:O.a,json:{write:!0}})],v.prototype,"material",void 0),Object(i.a)([Object(a.b)({type:f,json:{write:!0}})],v.prototype,"background",void 0),Object(i.a)([Object(a.b)(h.b)],v.prototype,"size",null),Object(i.a)([Object(a.b)({type:String,json:{write:!0}})],v.prototype,"text",void 0),Object(i.a)([Object(l.a)({Text:"text"},{readOnly:!0})],v.prototype,"type",void 0),Object(i.a)([Object(a.b)({...w.f,json:{default:"baseline",write:!0}})],v.prototype,"verticalAlignment",void 0),v=g=Object(i.a)([Object(c.a)("esri.symbols.TextSymbol3DLayer")],v)
const x=v},1785:function(t,e,o){"use strict"
o.d(e,"a",(function(){return p})),o.d(e,"b",(function(){return h}))
var r,i=o(968),s=o(976),n=o(972),a=o(970),l=(o(971),o(445),o(979)),c=o(969),b=o(1054)
const u=Object(s.b)()({sphere:"sphere",cylinder:"cylinder",cube:"cube",cone:"cone",diamond:"diamond",tetrahedron:"tetrahedron",invertedCone:"inverted-cone"})
let p=r=class extends n.a{clone(){return new r({href:this.href,primitive:this.primitive})}}
Object(i.a)([Object(a.b)({type:String,json:{read:b.g,write:b.i}})],p.prototype,"href",void 0),Object(i.a)([Object(l.a)(u)],p.prototype,"primitive",void 0),p=r=Object(i.a)([Object(c.a)("esri.symbols.support.ObjectSymbol3DLayerResource")],p)
const h="sphere"},1839:function(t,e,o){"use strict"
o.d(e,"a",(function(){return d})),o.d(e,"b",(function(){return j}))
var r,i=o(968),s=o(976),n=o(972),a=o(374),l=o(970),c=(o(971),o(445),o(979)),b=o(977),u=o(969),p=o(974),h=o(1054)
const y=Object(s.b)()({circle:"circle",square:"square",cross:"cross",x:"x",kite:"kite",triangle:"triangle"})
let d=r=class extends n.a{constructor(t){super(t)}readHref(t,e,o){return t?Object(h.d)(t,o):e.dataURI}writeHref(t,e,o,r){t&&(Object(a.z)(t)?e.dataURI=t:(e.href=Object(h.h)(t,r),Object(a.x)(e.href)&&(e.href=Object(a.I)(e.href))))}clone(){return new r({href:this.href,primitive:this.primitive})}}
Object(i.a)([Object(l.b)({type:String,json:{write:!0,read:{source:["href","dataURI"]}}})],d.prototype,"href",void 0),Object(i.a)([Object(b.a)("href")],d.prototype,"readHref",null),Object(i.a)([Object(p.a)("href",{href:{type:String},dataURI:{type:String}})],d.prototype,"writeHref",null),Object(i.a)([Object(c.a)(y)],d.prototype,"primitive",void 0),d=r=Object(i.a)([Object(u.a)("esri.symbols.support.IconSymbol3DLayerResource")],d)
const j="circle"},1853:function(t,e,o){"use strict"
o.d(e,"a",(function(){return l}))
var r,i=o(968),s=o(975),n=o(970),a=(o(971),o(445),o(969))
let l=r=class extends s.a{constructor(){super(...arguments),this.url=""}clone(){return new r({url:this.url})}}
Object(i.a)([Object(n.b)({type:String})],l.prototype,"url",void 0),l=r=Object(i.a)([Object(a.a)("esri.symbols.support.Thumbnail")],l)},1870:function(t,e,o){"use strict"
o.d(e,"a",(function(){return b}))
var r,i=o(968),s=o(975),n=o(970),a=(o(971),o(445),o(969)),l=o(1028)
let c=r=class extends s.a{constructor(t){super(t),this.name=null,this.styleUrl=null,this.styleName=null,this.portal=null}clone(){return new r({name:this.name,styleUrl:this.styleUrl,styleName:this.styleName,portal:this.portal})}}
Object(i.a)([Object(n.b)({type:String})],c.prototype,"name",void 0),Object(i.a)([Object(n.b)({type:String})],c.prototype,"styleUrl",void 0),Object(i.a)([Object(n.b)({type:String})],c.prototype,"styleName",void 0),Object(i.a)([Object(n.b)({type:l.a})],c.prototype,"portal",void 0),c=r=Object(i.a)([Object(a.a)("esri.symbols.support.StyleOrigin")],c)
const b=c},1891:function(t,e,o){"use strict"
o.d(e,"a",(function(){return L}))
var r,i=o(968),s=o(23),n=o(970),a=(o(971),o(445),o(979)),l=o(969),c=o(2018),b=o(2858),u=o(2859),p=o(2905),h=o(2761),y=o(2762),d=(o(233),o(446),o(235),o(1666))
let j=r=class extends d.a{constructor(t){super(t),this.colorMixMode=null}clone(){const t={color:Object(s.l)(this.color)?this.color.clone():null,colorMixMode:this.colorMixMode}
return new r(t)}}
Object(i.a)([Object(a.a)({multiply:"multiply",replace:"replace",tint:"tint"})],j.prototype,"colorMixMode",void 0),j=r=Object(i.a)([Object(l.a)("esri.symbols.support.Symbol3DFillMaterial")],j)
var O,m=o(990),f=o(972),g=o(980),w=o(1894),v=o(2250)
let S=O=class extends f.a{constructor(t){super(t),this.color=new m.a([0,0,0,1]),this.size=Object(g.i)(1),this.pattern=null,this.patternCap="butt"}clone(){const t={color:Object(s.l)(this.color)?this.color.clone():null,size:this.size,pattern:Object(s.l)(this.pattern)?this.pattern.clone():null,patternCap:this.patternCap}
return new O(t)}}
var x
Object(i.a)([Object(n.b)(w.a)],S.prototype,"color",void 0),Object(i.a)([Object(n.b)(w.b)],S.prototype,"size",void 0),Object(i.a)([Object(n.b)(h.a)],S.prototype,"pattern",void 0),Object(i.a)([Object(n.b)({type:v.a,json:{default:"butt",write:{overridePolicy(){return{enabled:Object(s.l)(this.pattern)}}}}})],S.prototype,"patternCap",void 0),S=O=Object(i.a)([Object(l.a)("esri.symbols.support.Symbol3DOutline")],S)
let k=x=class extends c.a{constructor(t){super(t),this.type="fill",this.material=null,this.pattern=null,this.castShadows=!0,this.outline=null,this.edges=null}clone(){const t={edges:Object(s.l)(this.edges)?this.edges.clone():null,enabled:this.enabled,material:Object(s.l)(this.material)?this.material.clone():null,pattern:Object(s.l)(this.pattern)?this.pattern.clone():null,castShadows:this.castShadows,outline:Object(s.l)(this.outline)?this.outline.clone():null}
return new x(t)}static fromSimpleFillSymbol(t){var e,o,r,i,s,n
const a=t.outline&&t.outline.style&&"inside-frame"!==t.outline.style&&"solid"!==t.outline.style?new u.a({style:t.outline.style}):null,l={size:null!=(e=null==(o=t.outline)?void 0:o.width)?e:0,color:(null!=(r=null==(i=t.outline)?void 0:i.color)?r:y.c).clone(),pattern:a}
return a&&null!=(s=t.outline)&&s.cap&&(l.patternCap=t.outline.cap),new x({material:new j({color:(null!=(n=t.color)?n:y.b).clone()}),pattern:t.style&&"solid"!==t.style?new p.a({style:t.style}):null,outline:l})}}
Object(i.a)([Object(a.a)({Fill:"fill"},{readOnly:!0})],k.prototype,"type",void 0),Object(i.a)([Object(n.b)({type:j,json:{write:!0}})],k.prototype,"material",void 0),Object(i.a)([Object(n.b)(h.b)],k.prototype,"pattern",void 0),Object(i.a)([Object(n.b)({type:Boolean,nonNullable:!0,json:{write:!0,default:!0}})],k.prototype,"castShadows",void 0),Object(i.a)([Object(n.b)({type:S,json:{write:!0}})],k.prototype,"outline",void 0),Object(i.a)([Object(n.b)(b.a)],k.prototype,"edges",void 0),k=x=Object(i.a)([Object(l.a)("esri.symbols.FillSymbol3DLayer")],k)
const L=k},1894:function(t,e,o){"use strict"
o.d(e,"a",(function(){return a})),o.d(e,"b",(function(){return l}))
var r=o(990),i=o(980),s=o(971),n=o(1119)
const a={type:r.a,json:{type:[s.a],default:null,read:{source:["color","transparency"],reader:function(t,e){const o=null!=e.transparency?Object(n.b)(e.transparency):1,i=e.color
return i&&Array.isArray(i)?new r.a([i[0]||0,i[1]||0,i[2]||0,o]):null}},write:{target:{color:{type:[s.a]},transparency:{type:s.a}},writer:function(t,e){e.color=t.toJSON().slice(0,3)
const o=Object(n.a)(t.a)
0!==o&&(e.transparency=o)}}}},l={type:Number,cast:i.k,json:{write:!0}}},1953:function(t,e,o){"use strict"
o.d(e,"a",(function(){return b})),o.d(e,"b",(function(){return l})),o.d(e,"c",(function(){return a})),o.d(e,"d",(function(){return n})),o.d(e,"e",(function(){return c}))
var r=o(23),i=o(2874),s=o(2764)
function n(t){if(!t)return!1
const e=t.verticalOffset
return!!e&&!(e.screenLength<=0||Object(r.l)(e.maxWorldLength)&&e.maxWorldLength<=0)}function a(t){if(!t)return!1
if(!t.supportsCallout||!t.supportsCallout())return!1
const e=t.callout
return!!e&&!!e.visible&&!!n(t)}function l(t){return"point-3d"===t.type||"label-3d"===t.type}function c(t){return"center"===t.horizontalAlignment}const b={types:{key:"type",base:i.a,typeMap:{line:s.a}},json:{write:!0}}},2018:function(t,e,o){"use strict"
o.d(e,"a",(function(){return c}))
var r=o(968),i=o(972),s=o(970),n=(o(971),o(445),o(969)),a=o(974)
let l=class extends i.a{constructor(t){super(t),this.enabled=!0,this.type=null}writeEnabled(t,e,o){t||(e[o]=t)}}
Object(r.a)([Object(s.b)({type:Boolean,json:{read:{source:"enable"},write:{target:"enable"}}})],l.prototype,"enabled",void 0),Object(r.a)([Object(a.a)("enabled")],l.prototype,"writeEnabled",null),Object(r.a)([Object(s.b)({type:["icon","object","line","path","fill","water","extrude","text"],readOnly:!0})],l.prototype,"type",void 0),l=Object(r.a)([Object(n.a)("esri.symbols.Symbol3DLayer")],l)
const c=l},2250:function(t,e,o){"use strict"
o.d(e,"a",(function(){return b})),o.d(e,"b",(function(){return p})),o.d(e,"c",(function(){return c})),o.d(e,"d",(function(){return s})),o.d(e,"e",(function(){return u})),o(235)
var r=o(981),i=o(1041)
function s(t,{isPrimitive:e,width:o,depth:i,height:s}){const n=e?10:1
if(null==o&&null==s&&null==i)return[n*t[0],n*t[1],n*t[2]]
const a=Object(r.h)(o,i,s)
let l
for(let e=0;e<3;e++){const o=a[e]
if(null!=o){l=o/t[e]
break}}for(let e=0;e<3;e++)null==a[e]&&(a[e]=t[e]*l)
return a}const n=Object(i.t)(-.5,-.5,-.5,.5,.5,.5),a=Object(i.t)(-.5,-.5,0,.5,.5,1),l=Object(i.t)(-.5,-.5,0,.5,.5,.5)
function c(t){switch(t){case"sphere":case"cube":case"diamond":return n
case"cylinder":case"cone":case"inverted-cone":return a
case"tetrahedron":return l
default:return}}const b=["butt","square","round"],u=[...b,"none"],p=["miter","bevel","round"]},2528:function(t,e,o){"use strict"
o.d(e,"a",(function(){return N}))
var r,i=o(968),s=o(233),n=o(23),a=o(374),l=o(970),c=(o(971),o(445),o(979)),b=o(969),u=o(2018),p=o(2762),h=o(1839),y=o(1894),d=o(2873),j=o(990),O=o(972),m=o(980)
let f=r=class extends O.a{constructor(t){super(t),this.color=new j.a([0,0,0,1]),this.size=Object(m.i)(1)}clone(){const t={color:Object(n.l)(this.color)?this.color.clone():null,size:this.size}
return new r(t)}}
Object(i.a)([Object(l.b)(y.a)],f.prototype,"color",void 0),Object(i.a)([Object(l.b)(y.b)],f.prototype,"size",void 0),f=r=Object(i.a)([Object(b.a)("esri.symbols.support.Symbol3DIconOutline")],f)
var g,w=o(1666)
const v="esri.symbols.IconSymbol3DLayer"
let S=g=class extends u.a{constructor(t){super(t),this.material=null,this.resource=null,this.type="icon",this.size=12,this.anchor="center",this.anchorPosition=null,this.outline=null}clone(){return new g({anchor:this.anchor,anchorPosition:this.anchorPosition&&this.anchorPosition.clone(),enabled:this.enabled,material:Object(n.l)(this.material)?this.material.clone():null,outline:Object(n.l)(this.outline)?this.outline.clone():null,resource:this.resource&&this.resource.clone(),size:this.size})}static fromSimpleMarkerSymbol(t){const e=t.color||p.c,o=x(t),r=t.outline&&t.outline.width>0?{size:t.outline.width,color:(t.outline.color||p.c).clone()}:null
return new g({size:t.size,resource:{primitive:z(t.style)},material:{color:e},outline:r,anchor:o?"relative":void 0,anchorPosition:o})}static fromPictureMarkerSymbol(t){const e=!t.color||Object(p.a)(t.color)?p.c:t.color,o=x(t)
return new g({size:t.width<=t.height?t.height:t.width,resource:{href:t.url},material:{color:e.clone()},anchor:o?"relative":void 0,anchorPosition:o})}static fromCIMSymbol(t){return new g({resource:{href:Object(a.G)({mediaType:"application/json",data:JSON.stringify(t.data)})}})}}
function x(t){const e="width"in t?t.width:t.size,o="height"in t?t.height:t.size,r=k(t.xoffset),i=k(t.yoffset)
return(r||i)&&e&&o?{x:-r/e,y:i/o}:null}function k(t){return isFinite(t)?t:0}Object(i.a)([Object(l.b)({type:w.a,json:{write:!0}})],S.prototype,"material",void 0),Object(i.a)([Object(l.b)({type:h.a,json:{write:!0}})],S.prototype,"resource",void 0),Object(i.a)([Object(c.a)({Icon:"icon"},{readOnly:!0})],S.prototype,"type",void 0),Object(i.a)([Object(l.b)(y.b)],S.prototype,"size",void 0),Object(i.a)([Object(c.a)({center:"center",left:"left",right:"right",top:"top",bottom:"bottom",topLeft:"top-left",topRight:"top-right",bottomLeft:"bottom-left",bottomRight:"bottom-right",relative:"relative"}),Object(l.b)({json:{default:"center"}})],S.prototype,"anchor",void 0),Object(i.a)([Object(l.b)({type:d.a,json:{type:[Number],read:{reader:t=>new d.a({x:t[0],y:t[1]})},write:{writer:(t,e)=>{e.anchorPosition=[t.x,t.y]},overridePolicy(){return{enabled:"relative"===this.anchor}}}}})],S.prototype,"anchorPosition",void 0),Object(i.a)([Object(l.b)({type:f,json:{write:!0}})],S.prototype,"outline",void 0),S=g=Object(i.a)([Object(b.a)(v)],S)
const L={circle:"circle",cross:"cross",diamond:"kite",square:"square",x:"x",triangle:"triangle",path:null}
function z(t){return L[t]||(s.a.getLogger(v).warn(t+' cannot be mapped to Icon symbol. Fallback to "circle"'),"circle")}const N=S},2683:function(t,e,o){"use strict"
o.d(e,"a",(function(){return k}))
var r=o(968),i=o(23),s=o(980),n=o(970),a=o(971),l=(o(445),o(979)),c=o(969),b=o(990),u=o(986),p=o(972),h=o(2870)
let y=class extends(Object(u.b)(p.a)){constructor(t){super(t),this.type="style",this.placement="begin-end",this.style="arrow",this.color=null}equals(t){return Object(i.l)(t)&&t.placement===this.placement&&t.style===this.style&&(Object(i.k)(this.color)&&Object(i.k)(t.color)||Object(i.l)(this.color)&&Object(i.l)(t.color)&&this.color.toJSON()===t.color.toJSON())}}
Object(r.a)([Object(n.b)({type:["style"],readOnly:!0,json:{read:!0,write:{ignoreOrigin:!0}}})],y.prototype,"type",void 0),Object(r.a)([Object(n.b)({type:h.a,json:{default:"begin-end",write:!0}})],y.prototype,"placement",void 0),Object(r.a)([Object(n.b)({type:h.b,json:{default:"arrow",write:!0}})],y.prototype,"style",void 0),Object(r.a)([Object(n.b)({type:b.a,json:{type:[a.a],default:null,write:!0}})],y.prototype,"color",void 0),y=Object(r.a)([Object(c.a)("esri.symbols.LineStyleMarker3D")],y)
const d=y
var j,O=o(2018),m=o(2859),f=o(2761),g=o(2762),w=o(1894),v=o(1666),S=o(2250)
let x=j=class extends O.a{constructor(t){super(t),this.material=null,this.type="line",this.join="miter",this.cap="butt",this.size=Object(s.i)(1),this.pattern=null,this.marker=null}clone(){const t={enabled:this.enabled,material:Object(i.l)(this.material)?this.material.clone():null,size:this.size,join:this.join,cap:this.cap,pattern:Object(i.l)(this.pattern)?this.pattern.clone():null,marker:Object(i.l)(this.marker)?this.marker.clone():null}
return new j(t)}static fromSimpleLineSymbol(t){var e,o,r
const i={enabled:!0,size:null!=(e=t.width)?e:Object(s.i)(1),cap:t.cap||"butt",join:t.join||"miter",pattern:t.style&&"inside-frame"!==t.style?new m.a({style:t.style}):null,material:new v.a({color:(t.color||g.c).clone()}),marker:t.marker?new d({placement:t.marker.placement,style:t.marker.style,color:null!=(o=null==(r=t.marker.color)?void 0:r.clone())?o:null}):null}
return new j(i)}}
Object(r.a)([Object(n.b)({type:v.a,json:{write:!0}})],x.prototype,"material",void 0),Object(r.a)([Object(l.a)({Line:"line"},{readOnly:!0})],x.prototype,"type",void 0),Object(r.a)([Object(n.b)({type:S.b,json:{write:!0,default:"miter"}})],x.prototype,"join",void 0),Object(r.a)([Object(n.b)({type:S.a,json:{write:!0,default:"butt"}})],x.prototype,"cap",void 0),Object(r.a)([Object(n.b)(w.b)],x.prototype,"size",void 0),Object(r.a)([Object(n.b)(f.a)],x.prototype,"pattern",void 0),Object(r.a)([Object(n.b)({types:{key:"type",base:d,typeMap:{style:d}},json:{write:!0}})],x.prototype,"marker",void 0),x=j=Object(r.a)([Object(c.a)("esri.symbols.LineSymbol3DLayer")],x)
const k=x},2684:function(t,e,o){"use strict"
o.d(e,"a",(function(){return j}))
var r,i=o(968),s=o(23),n=o(970),a=(o(971),o(445),o(979)),l=o(969),c=o(2018),b=o(1785),u=o(975)
let p=r=class extends u.a{constructor(){super(...arguments),this.x=0,this.y=0,this.z=0}clone(){return new r({x:this.x,y:this.y,z:this.z})}}
Object(i.a)([Object(n.b)({type:Number})],p.prototype,"x",void 0),Object(i.a)([Object(n.b)({type:Number})],p.prototype,"y",void 0),Object(i.a)([Object(n.b)({type:Number})],p.prototype,"z",void 0),p=r=Object(i.a)([Object(l.a)("esri.symbols.support.Symbol3DAnchorPosition3D")],p)
var h,y=o(1666)
let d=h=class extends c.a{constructor(t){super(t),this.material=null,this.castShadows=!0,this.resource=null,this.type="object",this.width=void 0,this.height=void 0,this.depth=void 0,this.anchor=void 0,this.anchorPosition=void 0,this.heading=void 0,this.tilt=void 0,this.roll=void 0}clone(){return new h({heading:this.heading,tilt:this.tilt,roll:this.roll,anchor:this.anchor,anchorPosition:this.anchorPosition&&this.anchorPosition.clone(),depth:this.depth,enabled:this.enabled,height:this.height,material:Object(s.l)(this.material)?this.material.clone():null,castShadows:this.castShadows,resource:this.resource&&this.resource.clone(),width:this.width})}get isPrimitive(){return!this.resource||"string"!=typeof this.resource.href}}
Object(i.a)([Object(n.b)({type:y.a,json:{write:!0}})],d.prototype,"material",void 0),Object(i.a)([Object(n.b)({type:Boolean,nonNullable:!0,json:{write:!0,default:!0}})],d.prototype,"castShadows",void 0),Object(i.a)([Object(n.b)({type:b.a,json:{write:!0}})],d.prototype,"resource",void 0),Object(i.a)([Object(a.a)({Object:"object"},{readOnly:!0})],d.prototype,"type",void 0),Object(i.a)([Object(n.b)({type:Number,json:{write:!0}})],d.prototype,"width",void 0),Object(i.a)([Object(n.b)({type:Number,json:{write:!0}})],d.prototype,"height",void 0),Object(i.a)([Object(n.b)({type:Number,json:{write:!0}})],d.prototype,"depth",void 0),Object(i.a)([Object(a.a)({center:"center",top:"top",bottom:"bottom",origin:"origin",relative:"relative"}),Object(n.b)({json:{default:"origin"}})],d.prototype,"anchor",void 0),Object(i.a)([Object(n.b)({type:p,json:{type:[Number],read:{reader:t=>new p({x:t[0],y:t[1],z:t[2]})},write:{writer:(t,e)=>{e.anchorPosition=[t.x,t.y,t.z]},overridePolicy(){return{enabled:"relative"===this.anchor}}}}})],d.prototype,"anchorPosition",void 0),Object(i.a)([Object(n.b)({type:Number,json:{write:!0}})],d.prototype,"heading",void 0),Object(i.a)([Object(n.b)({type:Number,json:{write:!0}})],d.prototype,"tilt",void 0),Object(i.a)([Object(n.b)({type:Number,json:{write:!0}})],d.prototype,"roll",void 0),Object(i.a)([Object(n.b)({readOnly:!0})],d.prototype,"isPrimitive",null),d=h=Object(i.a)([Object(l.a)("esri.symbols.ObjectSymbol3DLayer")],d)
const j=d},2690:function(t,e,o){"use strict"
o.d(e,"a",(function(){return h}))
var r,i=o(968),s=o(23),n=o(970),a=(o(971),o(445),o(979)),l=o(969),c=o(2018),b=o(2858),u=o(1666)
let p=r=class extends c.a{constructor(t){super(t),this.type="extrude",this.size=1,this.material=null,this.castShadows=!0,this.edges=null}clone(){return new r({edges:this.edges&&this.edges.clone(),enabled:this.enabled,material:Object(s.l)(this.material)?this.material.clone():null,castShadows:this.castShadows,size:this.size})}}
Object(i.a)([Object(a.a)({Extrude:"extrude"},{readOnly:!0})],p.prototype,"type",void 0),Object(i.a)([Object(n.b)({type:Number,json:{write:{enabled:!0,isRequired:!0}},nonNullable:!0})],p.prototype,"size",void 0),Object(i.a)([Object(n.b)({type:u.a,json:{write:!0}})],p.prototype,"material",void 0),Object(i.a)([Object(n.b)({type:Boolean,nonNullable:!0,json:{write:!0,default:!0}})],p.prototype,"castShadows",void 0),Object(i.a)([Object(n.b)(b.a)],p.prototype,"edges",void 0),p=r=Object(i.a)([Object(l.a)("esri.symbols.ExtrudeSymbol3DLayer")],p)
const h=p},2691:function(t,e,o){"use strict"
o.d(e,"a",(function(){return c}))
var r=o(968),i=o(970),s=(o(971),o(445),o(969)),n=o(1065),a=o(1394)
let l=class extends a.a{constructor(t){super(t),this.outline=null,this.type=null}hash(){return`${this.type}.${this.outline&&this.outline.hash()}`}}
Object(r.a)([Object(i.b)({types:{key:"type",base:null,defaultKeyValue:"simple-line",typeMap:{"simple-line":n.a}},json:{default:null,write:!0}})],l.prototype,"outline",void 0),Object(r.a)([Object(i.b)({type:["simple-fill","picture-fill"],readOnly:!0})],l.prototype,"type",void 0),l=Object(r.a)([Object(s.a)("esri.symbols.FillSymbol")],l)
const c=l},2692:function(t,e,o){"use strict"
o.d(e,"a",(function(){return p}))
var r,i=o(968),s=o(972),n=o(980),a=o(970),l=o(987),c=(o(445),o(969)),b=o(2763)
let u=r=class extends s.a{constructor(t){super(t),this.decoration="none",this.family="sans-serif",this.size=9,this.style="normal",this.weight="normal"}castSize(t){return Object(n.k)(t)}clone(){return new r({decoration:this.decoration,family:this.family,size:this.size,style:this.style,weight:this.weight})}hash(){return`${this.decoration}.${this.family}.${this.size}.${this.style}.${this.weight}`}}
Object(i.a)([Object(a.b)({type:b.a,json:{default:"none",write:!0}})],u.prototype,"decoration",void 0),Object(i.a)([Object(a.b)({type:String,json:{write:!0}})],u.prototype,"family",void 0),Object(i.a)([Object(a.b)({type:Number,json:{write:{overridePolicy:(t,e,o)=>({enabled:!o||!o.textSymbol3D})}}})],u.prototype,"size",void 0),Object(i.a)([Object(l.a)("size")],u.prototype,"castSize",null),Object(i.a)([Object(a.b)({type:b.b,json:{default:"normal",write:!0}})],u.prototype,"style",void 0),Object(i.a)([Object(a.b)({type:b.c,json:{default:"normal",write:!0}})],u.prototype,"weight",void 0),u=r=Object(i.a)([Object(c.a)("esri.symbols.Font")],u)
const p=u},2693:function(t,e,o){"use strict"
o.d(e,"a",(function(){return y}))
var r,i=o(968),s=o(23),n=o(970),a=(o(971),o(445),o(979)),l=o(977),c=o(969),b=o(2018),u=o(1666),p=o(2250)
let h=r=class extends b.a{constructor(t){super(t),this.material=null,this.castShadows=!0,this.type="path",this.profile="circle",this.join="miter",this.cap="butt",this.width=void 0,this.height=void 0,this.anchor="center",this.profileRotation="all"}readWidth(t,e){return null!=t?t:null==e.height&&null!=e.size?e.size:void 0}readHeight(t,e){return null!=t?t:null==e.width&&null!=e.size?e.size:void 0}clone(){return new r({enabled:this.enabled,material:Object(s.l)(this.material)?this.material.clone():null,castShadows:this.castShadows,profile:this.profile,join:this.join,cap:this.cap,width:this.width,height:this.height,profileRotation:this.profileRotation,anchor:this.anchor})}}
Object(i.a)([Object(n.b)({type:u.a,json:{write:!0}})],h.prototype,"material",void 0),Object(i.a)([Object(n.b)({type:Boolean,nonNullable:!0,json:{write:!0,default:!0}})],h.prototype,"castShadows",void 0),Object(i.a)([Object(a.a)({Path:"path"},{readOnly:!0})],h.prototype,"type",void 0),Object(i.a)([Object(n.b)({type:["circle","quad"],json:{write:!0,default:"circle"}})],h.prototype,"profile",void 0),Object(i.a)([Object(n.b)({type:p.b,json:{write:!0,default:"miter"}})],h.prototype,"join",void 0),Object(i.a)([Object(n.b)({type:p.e,json:{write:!0,default:"butt"}})],h.prototype,"cap",void 0),Object(i.a)([Object(n.b)({type:Number,json:{write:{enabled:!0,target:{width:{type:Number},size:{type:Number}}}}})],h.prototype,"width",void 0),Object(i.a)([Object(l.a)("width",["width","size","height"])],h.prototype,"readWidth",null),Object(i.a)([Object(n.b)({type:Number,json:{write:!0}})],h.prototype,"height",void 0),Object(i.a)([Object(l.a)("height",["height","size","width"])],h.prototype,"readHeight",null),Object(i.a)([Object(n.b)({type:["center","bottom","top"],json:{write:!0,default:"center"}})],h.prototype,"anchor",void 0),Object(i.a)([Object(n.b)({type:["heading","all"],json:{write:!0,default:"all"}})],h.prototype,"profileRotation",void 0),h=r=Object(i.a)([Object(c.a)("esri.symbols.PathSymbol3DLayer")],h)
const y=h},2694:function(t,e,o){"use strict"
o.d(e,"a",(function(){return y}))
var r,i=o(968),s=o(990),n=o(234),a=o(970),l=o(971),c=o(979),b=o(969),u=o(2018)
let p=r=class extends u.a{constructor(t){super(t),this.color=h.clone(),this.type="water",this.waterbodySize="medium",this.waveDirection=null,this.waveStrength="moderate"}clone(){return new r({color:Object(n.a)(this.color),waterbodySize:this.waterbodySize,waveDirection:this.waveDirection,waveStrength:this.waveStrength})}}
Object(i.a)([Object(a.b)({type:s.a,nonNullable:!0,json:{type:[l.a],write:(t,e,o)=>e[o]=t.toArray(s.a.AlphaMode.UNLESS_OPAQUE),default:()=>h.clone(),defaultEquals:t=>t.toCss(!0)===h.toCss(!0)}})],p.prototype,"color",void 0),Object(i.a)([Object(c.a)({Water:"water"},{readOnly:!0})],p.prototype,"type",void 0),Object(i.a)([Object(a.b)({type:["small","medium","large"],json:{write:!0,default:"medium"}})],p.prototype,"waterbodySize",void 0),Object(i.a)([Object(a.b)({type:Number,json:{write:!0,default:null}})],p.prototype,"waveDirection",void 0),Object(i.a)([Object(a.b)({type:["calm","rippled","slight","moderate"],json:{write:!0,default:"moderate"}})],p.prototype,"waveStrength",void 0),p=r=Object(i.a)([Object(b.a)("esri.symbols.WaterSymbol3DLayer")],p)
const h=new s.a([0,119,190]),y=p},2695:function(t,e,o){"use strict"
o.d(e,"a",(function(){return c}))
var r=o(968),i=o(980),s=o(970),n=(o(971),o(445),o(969)),a=o(1394)
let l=class extends a.a{constructor(t){super(t),this.angle=0,this.type=null,this.xoffset=0,this.yoffset=0,this.size=9}hash(){return`${this.type}.${this.angle}.${this.size}.${this.xoffset}.${this.yoffset}`}}
Object(r.a)([Object(s.b)({type:Number,json:{read:t=>t&&-1*t,write:(t,e)=>e.angle=t&&-1*t}})],l.prototype,"angle",void 0),Object(r.a)([Object(s.b)({type:["simple-marker","picture-marker"],readOnly:!0})],l.prototype,"type",void 0),Object(r.a)([Object(s.b)({type:Number,cast:i.k,json:{write:!0}})],l.prototype,"xoffset",void 0),Object(r.a)([Object(s.b)({type:Number,cast:i.k,json:{write:!0}})],l.prototype,"yoffset",void 0),Object(r.a)([Object(s.b)({type:Number,cast:t=>"auto"===t?t:Object(i.k)(t),json:{write:!0}})],l.prototype,"size",void 0),l=Object(r.a)([Object(n.a)("esri.symbols.MarkerSymbol")],l)
const c=l},2760:function(t,e,o){"use strict"
o.d(e,"a",(function(){return p}))
var r=o(968),i=o(990),s=o(972),n=o(234),a=o(980),l=o(970),c=(o(971),o(969)),b=o(1894)
let u=class extends s.a{constructor(t){super(t),this.color=new i.a([0,0,0,1]),this.extensionLength=0,this.size=Object(a.i)(1)}clone(){}cloneProperties(){return{color:Object(n.a)(this.color),size:this.size,extensionLength:this.extensionLength}}}
Object(r.a)([Object(l.b)({type:["solid","sketch"],readOnly:!0,json:{read:!0,write:{ignoreOrigin:!0}}})],u.prototype,"type",void 0),Object(r.a)([Object(l.b)(b.a)],u.prototype,"color",void 0),Object(r.a)([Object(l.b)({...b.b,json:{write:{overridePolicy:t=>({enabled:!!t})}}})],u.prototype,"extensionLength",void 0),Object(r.a)([Object(l.b)(b.b)],u.prototype,"size",void 0),u=Object(r.a)([Object(c.a)("esri.symbols.edges.Edges3D")],u)
const p=u},2761:function(t,e,o){"use strict"
o.d(e,"a",(function(){return l})),o.d(e,"b",(function(){return a}))
var r=o(2871),i=o(2859),s=o(2872),n=o(2905)
const a={types:{key:"type",base:s.a,typeMap:{style:n.a}},json:{write:!0}},l={types:{key:"type",base:r.a,typeMap:{style:i.a}},json:{write:!0}}},2762:function(t,e,o){"use strict"
o.d(e,"a",(function(){return n})),o.d(e,"b",(function(){return s})),o.d(e,"c",(function(){return i}))
var r=o(990)
const i=new r.a("white"),s=(new r.a("black"),new r.a([255,255,255,0]))
function n(t){return 0===t.r&&0===t.g&&0===t.b}},2763:function(t,e,o){"use strict"
o.d(e,"a",(function(){return s})),o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return a})),o.d(e,"d",(function(){return c})),o.d(e,"e",(function(){return l})),o.d(e,"f",(function(){return b}))
var r=o(991),i=o(971)
const s=["none","underline","line-through"],n=["normal","italic","oblique"],a=["normal","lighter","bold","bolder"],l={type:Number,cast:t=>{const e=Object(i.i)(t)
return 0===e?1:Object(r.f)(e,.1,4)},nonNullable:!0},c={type:["left","right","center"],nonNullable:!0},b={type:["baseline","top","middle","bottom"],nonNullable:!0}},2764:function(t,e,o){"use strict"
o.d(e,"a",(function(){return j}))
var r,i=o(968),s=o(990),n=o(234),a=o(23),l=o(980),c=o(970),b=(o(971),o(979)),u=o(969),p=o(2874),h=o(2765),y=o(1894)
let d=r=class extends p.a{constructor(t){super(t),this.type="line",this.color=new s.a([0,0,0,1]),this.size=Object(l.i)(1),this.border=null}get visible(){return this.size>0&&Object(a.l)(this.color)&&this.color.a>0}clone(){return new r({color:Object(n.a)(this.color),size:this.size,border:Object(n.a)(this.border)})}}
Object(i.a)([Object(b.a)({line:"line"},{readOnly:!0})],d.prototype,"type",void 0),Object(i.a)([Object(c.b)(y.a)],d.prototype,"color",void 0),Object(i.a)([Object(c.b)(y.b)],d.prototype,"size",void 0),Object(i.a)([Object(c.b)({type:h.a,json:{write:!0}})],d.prototype,"border",void 0),Object(i.a)([Object(c.b)({readOnly:!0})],d.prototype,"visible",null),d=r=Object(i.a)([Object(u.a)("esri.symbols.callouts.LineCallout3D")],d)
const j=d},2765:function(t,e,o){"use strict"
o.d(e,"a",(function(){return p}))
var r,i=o(968),s=o(990),n=o(972),a=o(234),l=o(970),c=(o(971),o(969)),b=o(1894)
let u=r=class extends n.a{constructor(){super(...arguments),this.color=new s.a("white")}clone(){return new r({color:Object(a.a)(this.color)})}}
Object(i.a)([Object(l.b)(b.a)],u.prototype,"color",void 0),u=r=Object(i.a)([Object(c.a)("esri.symbols.callouts.LineCallout3DBorder")],u)
const p=u
Object.freeze(Object.defineProperty({__proto__:null,default:p},Symbol.toStringTag,{value:"Module"}))},2858:function(t,e,o){"use strict"
o.d(e,"a",(function(){return u}))
var r,i=o(2760),s=o(968),n=(o(233),o(971),o(445),o(446),o(235),o(979)),a=o(969)
let l=r=class extends i.a{constructor(t){super(t),this.type="sketch"}clone(){return new r(this.cloneProperties())}}
Object(s.a)([Object(n.a)({sketch:"sketch"},{readOnly:!0})],l.prototype,"type",void 0),l=r=Object(s.a)([Object(a.a)("esri.symbols.edges.SketchEdges3D")],l)
const c=l
var b=o(2869)
const u={types:{key:"type",base:i.a,typeMap:{solid:b.a,sketch:c}},json:{write:!0}}},2859:function(t,e,o){"use strict"
o.d(e,"a",(function(){return p}))
var r,i=o(968),s=o(976),n=o(970),a=(o(971),o(445),o(979)),l=o(969),c=o(2871)
const b=Object(s.b)()({dash:"dash","dash-dot":"dash-dot","dash-dot-dot":"long-dash-dot-dot",dot:"dot","long-dash":"long-dash","long-dash-dot":"long-dash-dot",null:"none","short-dash":"short-dash","short-dash-dot":"short-dash-dot","short-dash-dot-dot":"short-dash-dot-dot","short-dot":"short-dot",solid:"solid"})
let u=r=class extends c.a{constructor(t){super(t),this.type="style",this.style="solid"}clone(){const t={style:this.style}
return new r(t)}}
Object(i.a)([Object(n.b)({type:["style"]})],u.prototype,"type",void 0),Object(i.a)([Object(a.a)(b),Object(n.b)({type:["dash","dash-dot","dot","long-dash","long-dash-dot","long-dash-dot-dot","none","short-dash","short-dash-dot","short-dash-dot-dot","short-dot","solid"]})],u.prototype,"style",void 0),u=r=Object(i.a)([Object(l.a)("esri.symbols.patterns.LineStylePattern3D")],u)
const p=u},2869:function(t,e,o){"use strict"
o.d(e,"a",(function(){return c}))
var r,i=o(968),s=(o(233),o(971),o(445),o(446),o(235),o(979)),n=o(969),a=o(2760)
let l=r=class extends a.a{constructor(t){super(t),this.type="solid"}clone(){return new r(this.cloneProperties())}}
Object(i.a)([Object(s.a)({solid:"solid"},{readOnly:!0})],l.prototype,"type",void 0),l=r=Object(i.a)([Object(n.a)("esri.symbols.support.SolidEdges3D")],l)
const c=l},2870:function(t,e,o){"use strict"
o.d(e,"a",(function(){return r})),o.d(e,"b",(function(){return i}))
const r=["begin","end","begin-end"],i=["arrow","circle","square","diamond","cross","x"]},2871:function(t,e,o){"use strict"
o.d(e,"a",(function(){return l}))
var r=o(968),i=o(972),s=o(970),n=(o(971),o(445),o(969))
let a=class extends i.a{constructor(t){super(t)}clone(){}}
Object(r.a)([Object(s.b)({type:["style"],readOnly:!0,json:{read:!0,write:{ignoreOrigin:!0}}})],a.prototype,"type",void 0),a=Object(r.a)([Object(n.a)("esri.symbols.patterns.LinePattern3D")],a)
const l=a},2872:function(t,e,o){"use strict"
o.d(e,"a",(function(){return l}))
var r=o(968),i=o(972),s=o(970),n=(o(971),o(445),o(969))
let a=class extends i.a{constructor(t){super(t)}clone(){}}
Object(r.a)([Object(s.b)({type:["style"],readOnly:!0,json:{read:!0,write:{ignoreOrigin:!0}}})],a.prototype,"type",void 0),a=Object(r.a)([Object(n.a)("esri.symbols.patterns.Pattern3D")],a)
const l=a},2873:function(t,e,o){"use strict"
o.d(e,"a",(function(){return l}))
var r,i=o(968),s=o(975),n=o(970),a=(o(971),o(445),o(969))
let l=r=class extends s.a{constructor(){super(...arguments),this.x=0,this.y=0}clone(){return new r({x:this.x,y:this.y})}}
Object(i.a)([Object(n.b)({type:Number})],l.prototype,"x",void 0),Object(i.a)([Object(n.b)({type:Number})],l.prototype,"y",void 0),l=r=Object(i.a)([Object(a.a)("esri.symbols.support.Symbol3DAnchorPosition2D")],l)},2874:function(t,e,o){"use strict"
o.d(e,"a",(function(){return l}))
var r=o(968),i=o(972),s=o(970),n=(o(971),o(445),o(969))
let a=class extends i.a{constructor(t){super(t),this.visible=!0}clone(){}}
Object(r.a)([Object(s.b)({type:["line"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],a.prototype,"type",void 0),Object(r.a)([Object(s.b)({readOnly:!0})],a.prototype,"visible",void 0),a=Object(r.a)([Object(n.a)("esri.symbols.callouts.Callout3D")],a)
const l=a},2875:function(t,e,o){"use strict"
o.d(e,"a",(function(){return b}))
var r,i=o(968),s=o(972),n=o(970),a=(o(971),o(445),o(969)),l=o(1894)
let c=r=class extends s.a{constructor(t){super(t),this.screenLength=0,this.minWorldLength=0,this.maxWorldLength=null}clone(){return new r({screenLength:this.screenLength,minWorldLength:this.minWorldLength,maxWorldLength:this.maxWorldLength})}}
Object(i.a)([Object(n.b)(l.b)],c.prototype,"screenLength",void 0),Object(i.a)([Object(n.b)({type:Number,nonNullable:!0,json:{write:!0,default:0}})],c.prototype,"minWorldLength",void 0),Object(i.a)([Object(n.b)({type:Number,json:{write:!0}})],c.prototype,"maxWorldLength",void 0),c=r=Object(i.a)([Object(a.a)("esri.symbols.support.Symbol3DVerticalOffset")],c)
const b=c},2876:function(t,e,o){"use strict"
o.d(e,"a",(function(){return a})),o.d(e,"b",(function(){return n}))
var r=o(374),i=o(1054)
function s(t,e){var o
return function(t){var e,o
return!(null==t||"service"!==t.origin&&"portal-item"!==t.origin||"feature"!==(null==(e=t.layer)?void 0:e.type)&&"stream"!==(null==(o=t.layer)?void 0:o.type))}(e)&&!Object(r.x)(t)&&null!=e&&null!=(o=e.layer)&&o.parsedUrl?Object(r.E)(e.layer.parsedUrl.path,"images",t):Object(i.d)(t,e)}const n={json:{read:{source:["imageData","url"],reader:function(t,e,o){return e.imageData?Object(r.G)({mediaType:e.contentType||"image/png",isBase64:!0,data:e.imageData}):s(e.url,o)}},write:{writer(t,e,o,s){!function(t,e,o,s){if(Object(r.z)(t)){const n=Object(r.h)(t)
if(!n)return
e.contentType=n.mediaType,e.imageData=n.data,o&&o.imageData===e.imageData&&o.url&&Object(i.i)(o.url,e,"url",s)}else Object(i.i)(t,e,"url",s)}(t,e,this.source,s)}}}},a={readOnly:!0,json:{read:{source:["imageData","url"],reader(t,e,o){const r={}
return e.imageData&&(r.imageData=e.imageData),e.contentType&&(r.contentType=e.contentType),e.url&&(r.url=s(e.url,o)),r}}}}},2905:function(t,e,o){"use strict"
o.d(e,"a",(function(){return c}))
var r,i=o(968),s=o(970),n=(o(971),o(445),o(969)),a=o(2872)
let l=r=class extends a.a{constructor(t){super(t),this.type="style",this.style="solid"}clone(){const t={style:this.style}
return new r(t)}}
Object(i.a)([Object(s.b)({type:["style"]})],l.prototype,"type",void 0),Object(i.a)([Object(s.b)({type:["backward-diagonal","cross","diagonal-cross","forward-diagonal","horizontal","none","solid","vertical"],json:{read:!0,write:!0}})],l.prototype,"style",void 0),l=r=Object(i.a)([Object(n.a)("esri.symbols.patterns.StylePattern3D")],l)
const c=l},781:function(t,e,o){"use strict"
o.r(e),o.d(e,"default",(function(){return d}))
var r,i=o(968),s=o(234),n=o(447),a=o(970),l=(o(971),o(979)),c=o(977),b=o(969),u=o(974),p=o(989),h=o(1394)
let y=r=class extends h.a{constructor(t){super(t),this.data=null,this.type="cim"}readData(t,e){return e}writeData(t,e){if(t)for(const o in t)e[o]=t[o]}async collectRequiredFields(t,e){var o
if("CIMSymbolReference"===(null==(o=this.data)?void 0:o.type)){const o=this.data.primitiveOverrides
if(o){const r=o.map(o=>{const r=o.valueExpressionInfo
return Object(p.a)(t,e,r.expression)})
await Promise.all(r)}}}clone(){return new r({data:Object(s.a)(this.data)})}hash(){return Object(n.b)(JSON.stringify(this.data)).toString()}}
Object(i.a)([Object(a.b)({json:{write:!1}})],y.prototype,"color",void 0),Object(i.a)([Object(a.b)({json:{write:!0}})],y.prototype,"data",void 0),Object(i.a)([Object(c.a)("data",["symbol"])],y.prototype,"readData",null),Object(i.a)([Object(u.a)("data",{})],y.prototype,"writeData",null),Object(i.a)([Object(l.a)({CIMSymbolReference:"cim"},{readOnly:!0})],y.prototype,"type",void 0),y=r=Object(i.a)([Object(b.a)("esri.symbols.CIMSymbol")],y)
const d=y},990:function(t,e,o){"use strict"
o.d(e,"a",(function(){return p}))
var r,i,s=o(1162),n=o(991),a=o(23),l=o(971)
function c(t){return Object(n.f)(Object(l.e)(t),0,255)}function b(t,e,o){return t=Number(t),isNaN(t)?o:t<e?e:t>o?o:t}class u{static blendColors(t,e,o,r=new u){return r.r=Math.round(t.r+(e.r-t.r)*o),r.g=Math.round(t.g+(e.g-t.g)*o),r.b=Math.round(t.b+(e.b-t.b)*o),r.a=t.a+(e.a-t.a)*o,r._sanitize()}static fromRgb(t,e){const o=t.toLowerCase().match(/^(rgba?|hsla?)\(([\s\.\-,%0-9]+)\)/)
if(o){const t=o[2].split(/\s*,\s*/),r=o[1]
if("rgb"===r&&3===t.length||"rgba"===r&&4===t.length){const o=t[0]
if("%"===o.charAt(o.length-1)){const o=t.map(t=>2.56*parseFloat(t))
return 4===t.length&&(o[3]=parseFloat(t[3])),u.fromArray(o,e)}return u.fromArray(t.map(t=>parseFloat(t)),e)}if("hsl"===r&&3===t.length||"hsla"===r&&4===t.length)return u.fromArray(Object(s.d)(parseFloat(t[0]),parseFloat(t[1])/100,parseFloat(t[2])/100,parseFloat(t[3])),e)}return null}static fromHex(t,e=new u){if(4!==t.length&&7!==t.length||"#"!==t[0])return null
const o=4===t.length?4:8,r=(1<<o)-1
let i=Number("0x"+t.substr(1))
return isNaN(i)?null:(["b","g","r"].forEach(t=>{const s=i&r
i>>=o,e[t]=4===o?17*s:s}),e.a=1,e)}static fromArray(t,e=new u){return e._set(Number(t[0]),Number(t[1]),Number(t[2]),Number(t[3])),isNaN(e.a)&&(e.a=1),e._sanitize()}static fromString(t,e){const o=Object(s.e)(t)?Object(s.a)(t):null
return o&&u.fromArray(o,e)||u.fromRgb(t,e)||u.fromHex(t,e)}static fromJSON(t){return t&&new u([t[0],t[1],t[2],t[3]/255])}static toUnitRGB(t){return Object(a.l)(t)?[t.r/255,t.g/255,t.b/255]:null}static toUnitRGBA(t){return Object(a.l)(t)?[t.r/255,t.g/255,t.b/255,null!=t.a?t.a:1]:null}constructor(t){this.r=255,this.g=255,this.b=255,this.a=1,t&&this.setColor(t)}get isBright(){return.299*this.r+.587*this.g+.114*this.b>=127}setColor(t){var e,o,r,i
return"string"==typeof t?u.fromString(t,this):Array.isArray(t)?u.fromArray(t,this):(this._set(null!=(e=t.r)?e:0,null!=(o=t.g)?o:0,null!=(r=t.b)?r:0,null!=(i=t.a)?i:1),t instanceof u||this._sanitize()),this}toRgb(){return[this.r,this.g,this.b]}toRgba(){return[this.r,this.g,this.b,this.a]}toHex(){const t=this.r.toString(16),e=this.g.toString(16),o=this.b.toString(16)
return`#${t.length<2?"0"+t:t}${e.length<2?"0"+e:e}${o.length<2?"0"+o:o}`}toCss(t=!1){const e=this.r+", "+this.g+", "+this.b
return t?`rgba(${e}, ${this.a})`:`rgb(${e})`}toString(){return this.toCss(!0)}toJSON(){return this.toArray()}toArray(t=u.AlphaMode.ALWAYS){const e=c(this.r),o=c(this.g),r=c(this.b)
return t===u.AlphaMode.ALWAYS||1!==this.a?[e,o,r,c(255*this.a)]:[e,o,r]}clone(){return new u(this.toRgba())}hash(){return this.r<<24|this.g<<16|this.b<<8|255*this.a}equals(t){return Object(a.l)(t)&&t.r===this.r&&t.g===this.g&&t.b===this.b&&t.a===this.a}_sanitize(){return this.r=Math.round(b(this.r,0,255)),this.g=Math.round(b(this.g,0,255)),this.b=Math.round(b(this.b,0,255)),this.a=b(this.a,0,1),this}_set(t,e,o,r){this.r=t,this.g=e,this.b=o,this.a=r}}u.prototype.declaredClass="esri.Color",r=u||(u={}),(i=r.AlphaMode||(r.AlphaMode={}))[i.ALWAYS=0]="ALWAYS",i[i.UNLESS_OPAQUE=1]="UNLESS_OPAQUE"
const p=u},995:function(t,e,o){"use strict"
o.d(e,"a",(function(){return U})),o.d(e,"b",(function(){return D})),o.d(e,"c",(function(){return C})),o.d(e,"d",(function(){return $})),o.d(e,"e",(function(){return M})),o.d(e,"f",(function(){return A})),o.d(e,"g",(function(){return _})),o.d(e,"h",(function(){return T})),o.d(e,"i",(function(){return P})),o.d(e,"j",(function(){return F}))
var r,i=o(971),s=o(1045),n=o(781),a=(o(2690),o(2691)),l=(o(1891),o(2692),o(2528),o(1454)),c=o(1455),b=(o(2683),o(2695),o(1456)),u=(o(2684),o(2693),o(968)),p=o(234),h=o(980),y=o(970),d=o(979),j=o(969),O=o(2876)
let m=r=class extends a.a{constructor(...t){super(...t),this.type="picture-fill",this.url=null,this.xscale=1,this.yscale=1,this.width=12,this.height=12,this.xoffset=0,this.yoffset=0,this.source=null}normalizeCtorArgs(t,e,o,r){if(t&&"string"!=typeof t&&null==t.imageData)return t
const i={}
return t&&(i.url=t),e&&(i.outline=e),null!=o&&(i.width=Object(h.k)(o)),null!=r&&(i.height=Object(h.k)(r)),i}clone(){const t=new r({color:Object(p.a)(this.color),height:this.height,outline:this.outline&&this.outline.clone(),url:this.url,width:this.width,xoffset:this.xoffset,xscale:this.xscale,yoffset:this.yoffset,yscale:this.yscale})
return t._set("source",Object(p.a)(this.source)),t}hash(){var t
return`${super.hash()}.${null==(t=this.color)?void 0:t.hash()}.${this.height}.${this.url}.${this.width}.${this.xoffset}.${this.xscale}.${this.yoffset}.${this.yscale}`}}
Object(u.a)([Object(d.a)({esriPFS:"picture-fill"},{readOnly:!0})],m.prototype,"type",void 0),Object(u.a)([Object(y.b)(O.b)],m.prototype,"url",void 0),Object(u.a)([Object(y.b)({type:Number,json:{write:!0}})],m.prototype,"xscale",void 0),Object(u.a)([Object(y.b)({type:Number,json:{write:!0}})],m.prototype,"yscale",void 0),Object(u.a)([Object(y.b)({type:Number,cast:h.k,json:{write:!0}})],m.prototype,"width",void 0),Object(u.a)([Object(y.b)({type:Number,cast:h.k,json:{write:!0}})],m.prototype,"height",void 0),Object(u.a)([Object(y.b)({type:Number,cast:h.k,json:{write:!0}})],m.prototype,"xoffset",void 0),Object(u.a)([Object(y.b)({type:Number,cast:h.k,json:{write:!0}})],m.prototype,"yoffset",void 0),Object(u.a)([Object(y.b)(O.a)],m.prototype,"source",void 0),m=r=Object(u.a)([Object(j.a)("esri.symbols.PictureFillSymbol")],m)
const f=m
var g=o(1402),w=o(1336),v=o(1218),S=o(1073),x=o(1065),k=o(1078),L=o(1394),z=(o(1401),o(2018),o(1239)),N=(o(1778),o(2694),o(1145))
function D(t){if(!t)return!1
switch(t.type){case"picture-fill":case"picture-marker":case"simple-fill":case"simple-line":case"simple-marker":case"text":case"cim":return!0
default:return!1}}function C(t){if(!t)return!1
switch(t.type){case"label-3d":case"line-3d":case"mesh-3d":case"point-3d":case"polygon-3d":return!0
default:return!1}}o(2764),o(2765)
const M={base:L.a,key:"type",typeMap:{"simple-fill":S.a,"picture-fill":f,"picture-marker":g.a,"simple-line":x.a,"simple-marker":k.a,text:z.a,"label-3d":l.a,"line-3d":c.a,"mesh-3d":b.a,"point-3d":w.a,"polygon-3d":v.a,"web-style":N.a,cim:n.default},errorContext:"symbol"},A={base:L.a,key:"type",typeMap:{"picture-marker":g.a,"simple-marker":k.a,text:z.a,"web-style":N.a,cim:n.default},errorContext:"symbol"},$=Object(s.b)({types:M}),P={base:L.a,key:"type",typeMap:{"simple-fill":S.a,"picture-fill":f,"picture-marker":g.a,"simple-line":x.a,"simple-marker":k.a,text:z.a,"line-3d":c.a,"mesh-3d":b.a,"point-3d":w.a,"polygon-3d":v.a,"web-style":N.a,cim:n.default},errorContext:"symbol"},_={base:L.a,key:"type",typeMap:{text:z.a,"label-3d":l.a},errorContext:"symbol"},F=(L.a,l.a,c.a,b.a,w.a,v.a,N.a,{base:L.a,key:"type",typeMap:{"line-3d":c.a,"mesh-3d":b.a,"point-3d":w.a,"polygon-3d":v.a,"web-style":N.a,cim:n.default},errorContext:"symbol"}),T={base:L.a,key:"type",typeMap:{"label-3d":l.a},errorContext:"symbol"},U=Object(i.k)(M)}}])
