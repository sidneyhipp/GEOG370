(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[3],{1369:function(t,e,i){"use strict"
i.d(e,"a",(function(){return l}))
var o,r=i(968),s=i(970),n=(i(971),i(445),i(969)),a=i(1386)
let c=o=class extends a.a{constructor(t){super(t),this.text=null,this.type="text"}clone(){return new o({text:this.text})}}
Object(r.a)([Object(s.b)({type:String,json:{write:!0}})],c.prototype,"text",void 0),Object(r.a)([Object(s.b)({type:["text"],readOnly:!0,json:{read:!1,write:!0}})],c.prototype,"type",void 0),c=o=Object(r.a)([Object(n.a)("esri.popup.content.TextContent")],c)
const l=c},1374:function(t,e,i){"use strict"
i.d(e,"a",(function(){return b}))
var o,r=i(968),s=i(976),n=i(972),a=i(234),c=i(970),l=(i(971),i(979)),p=i(969),d=i(1465)
let u=o=class extends n.a{constructor(t){super(t),this.fieldName=null,this.format=null,this.isEditable=!1,this.label=null,this.stringFieldOption="text-box",this.statisticType=null,this.tooltip=null,this.visible=!0}clone(){return new o({fieldName:this.fieldName,format:this.format?Object(a.a)(this.format):null,isEditable:this.isEditable,label:this.label,stringFieldOption:this.stringFieldOption,statisticType:this.statisticType,tooltip:this.tooltip,visible:this.visible})}}
Object(r.a)([Object(c.b)({type:String,json:{write:!0}})],u.prototype,"fieldName",void 0),Object(r.a)([Object(c.b)({type:d.a,json:{write:!0}})],u.prototype,"format",void 0),Object(r.a)([Object(c.b)({type:Boolean,json:{write:!0,default:!1}})],u.prototype,"isEditable",void 0),Object(r.a)([Object(c.b)({type:String,json:{write:!0}})],u.prototype,"label",void 0),Object(r.a)([Object(l.a)(new s.a({richtext:"rich-text",textarea:"text-area",textbox:"text-box"}),{default:"text-box"})],u.prototype,"stringFieldOption",void 0),Object(r.a)([Object(c.b)({type:["count","sum","min","max","avg","stddev","var"],json:{write:!0}})],u.prototype,"statisticType",void 0),Object(r.a)([Object(c.b)({type:String,json:{write:!0}})],u.prototype,"tooltip",void 0),Object(r.a)([Object(c.b)({type:Boolean,json:{write:!0}})],u.prototype,"visible",void 0),u=o=Object(r.a)([Object(p.a)("esri.popup.FieldInfo")],u)
const b=u},1386:function(t,e,i){"use strict"
i.d(e,"a",(function(){return c}))
var o=i(968),r=i(972),s=i(970),n=(i(971),i(445),i(969))
let a=class extends r.a{constructor(t){super(t),this.type=null}}
Object(o.a)([Object(s.b)({type:["attachments","custom","fields","media","text","expression","relationship"],readOnly:!0,json:{read:!1,write:!0}})],a.prototype,"type",void 0),a=Object(o.a)([Object(n.a)("esri.popup.content.Content")],a)
const c=a},1439:function(t,e,i){"use strict"
i.d(e,"a",(function(){return l}))
var o,r=i(968),s=i(970),n=(i(971),i(445),i(969)),a=i(1386)
let c=o=class extends a.a{constructor(t){super(t),this.description=null,this.displayType="auto",this.title=null,this.type="attachments"}clone(){return new o({description:this.description,displayType:this.displayType,title:this.title})}}
Object(r.a)([Object(s.b)({type:String,json:{write:!0}})],c.prototype,"description",void 0),Object(r.a)([Object(s.b)({type:["auto","preview","list"],json:{write:!0}})],c.prototype,"displayType",void 0),Object(r.a)([Object(s.b)({type:String,json:{write:!0}})],c.prototype,"title",void 0),Object(r.a)([Object(s.b)({type:["attachments"],readOnly:!0,json:{read:!1,write:!0}})],c.prototype,"type",void 0),c=o=Object(r.a)([Object(n.a)("esri.popup.content.AttachmentsContent")],c)
const l=c},1440:function(t,e,i){"use strict"
i.d(e,"a",(function(){return p}))
var o,r=i(968),s=i(234),n=i(970),a=(i(971),i(969)),c=i(1386)
let l=o=class extends c.a{constructor(t){super(t),this.creator=null,this.destroyer=null,this.outFields=null,this.type="custom"}clone(){return new o({creator:this.creator,destroyer:this.destroyer,outFields:Array.isArray(this.outFields)?Object(s.a)(this.outFields):null})}}
Object(r.a)([Object(n.b)()],l.prototype,"creator",void 0),Object(r.a)([Object(n.b)()],l.prototype,"destroyer",void 0),Object(r.a)([Object(n.b)()],l.prototype,"outFields",void 0),Object(r.a)([Object(n.b)({type:["custom"],readOnly:!0})],l.prototype,"type",void 0),l=o=Object(r.a)([Object(a.a)("esri.popup.content.CustomContent")],l)
const p=l},1441:function(t,e,i){"use strict"
i.d(e,"a",(function(){return p}))
var o,r=i(968),s=i(970),n=(i(971),i(445),i(969)),a=i(1983),c=i(1386)
let l=o=class extends c.a{constructor(t){super(t),this.expressionInfo=null,this.type="expression"}clone(){var t
return new o({expressionInfo:null==(t=this.expressionInfo)?void 0:t.clone()})}}
Object(r.a)([Object(s.b)({type:a.a,json:{write:!0}})],l.prototype,"expressionInfo",void 0),Object(r.a)([Object(s.b)({type:["expression"],readOnly:!0,json:{read:!1,write:!0}})],l.prototype,"type",void 0),l=o=Object(r.a)([Object(n.a)("esri.popup.content.ExpressionContent")],l)
const p=l},1442:function(t,e,i){"use strict"
i.d(e,"a",(function(){return u}))
var o,r=i(968),s=i(234),n=i(970),a=(i(971),i(969)),c=i(974),l=i(1374),p=i(1386)
let d=o=class extends p.a{constructor(t){super(t),this.attributes=null,this.description=null,this.fieldInfos=null,this.title=null,this.type="fields"}writeFieldInfos(t,e){e.fieldInfos=t&&t.map(t=>t.toJSON())}clone(){return new o(Object(s.a)({attributes:this.attributes,description:this.description,fieldInfos:this.fieldInfos,title:this.title}))}}
Object(r.a)([Object(n.b)({type:Object,json:{write:!0}})],d.prototype,"attributes",void 0),Object(r.a)([Object(n.b)({type:String,json:{write:!0}})],d.prototype,"description",void 0),Object(r.a)([Object(n.b)({type:[l.a]})],d.prototype,"fieldInfos",void 0),Object(r.a)([Object(c.a)("fieldInfos")],d.prototype,"writeFieldInfos",null),Object(r.a)([Object(n.b)({type:String,json:{write:!0}})],d.prototype,"title",void 0),Object(r.a)([Object(n.b)({type:["fields"],readOnly:!0,json:{read:!1,write:!0}})],d.prototype,"type",void 0),d=o=Object(r.a)([Object(a.a)("esri.popup.content.FieldsContent")],d)
const u=d},1443:function(t,e,i){"use strict"
i.d(e,"a",(function(){return f}))
var o,r=i(968),s=i(234),n=i(970),a=(i(971),i(977)),c=i(969),l=i(974),p=i(2877),d=i(2878),u=i(1386),b=i(2900),h=i(2879),y=i(2880),j=i(2881)
let O=o=class extends u.a{constructor(t){super(t),this.activeMediaInfoIndex=null,this.attributes=null,this.description=null,this.mediaInfos=null,this.title=null,this.type="media"}readMediaInfos(t){return t&&t.map(t=>"image"===t.type?b.a.fromJSON(t):"barchart"===t.type?p.a.fromJSON(t):"columnchart"===t.type?d.a.fromJSON(t):"linechart"===t.type?h.a.fromJSON(t):"piechart"===t.type?y.a.fromJSON(t):void 0).filter(Boolean)}writeMediaInfos(t,e){e.mediaInfos=t&&t.map(t=>t.toJSON())}clone(){return new o(Object(s.a)({activeMediaInfoIndex:this.activeMediaInfoIndex,attributes:this.attributes,description:this.description,mediaInfos:this.mediaInfos,title:this.title}))}}
Object(r.a)([Object(n.b)()],O.prototype,"activeMediaInfoIndex",void 0),Object(r.a)([Object(n.b)({type:Object,json:{write:!0}})],O.prototype,"attributes",void 0),Object(r.a)([Object(n.b)({type:String,json:{write:!0}})],O.prototype,"description",void 0),Object(r.a)([Object(n.b)({types:[j.a]})],O.prototype,"mediaInfos",void 0),Object(r.a)([Object(a.a)("mediaInfos")],O.prototype,"readMediaInfos",null),Object(r.a)([Object(l.a)("mediaInfos")],O.prototype,"writeMediaInfos",null),Object(r.a)([Object(n.b)({type:String,json:{write:!0}})],O.prototype,"title",void 0),Object(r.a)([Object(n.b)({type:["media"],readOnly:!0,json:{read:!1,write:!0}})],O.prototype,"type",void 0),O=o=Object(r.a)([Object(c.a)("esri.popup.content.MediaContent")],O)
const f=O},1444:function(t,e,i){"use strict"
i.d(e,"a",(function(){return d}))
var o=i(968),r=i(986),s=i(970),n=i(971),a=(i(445),i(969)),c=i(1386),l=i(1676)
let p=class extends(Object(r.b)(c.a)){constructor(t){super(t),this.description=null,this.displayCount=null,this.displayType="list",this.orderByFields=null,this.relationshipId=null,this.title=null,this.type="relationship"}}
Object(o.a)([Object(s.b)({type:String,json:{write:!0}})],p.prototype,"description",void 0),Object(o.a)([Object(s.b)({type:Number,json:{type:n.a,write:!0}})],p.prototype,"displayCount",void 0),Object(o.a)([Object(s.b)({type:["list"],json:{write:!0}})],p.prototype,"displayType",void 0),Object(o.a)([Object(s.b)({type:[l.a],json:{write:!0}})],p.prototype,"orderByFields",void 0),Object(o.a)([Object(s.b)({type:Number,json:{type:n.a,write:!0}})],p.prototype,"relationshipId",void 0),Object(o.a)([Object(s.b)({type:String,json:{write:!0}})],p.prototype,"title",void 0),Object(o.a)([Object(s.b)({type:["relationship"],readOnly:!0,json:{read:!1,write:!0}})],p.prototype,"type",void 0),p=Object(o.a)([Object(a.a)("esri.popup.content.RelationshipContent")],p)
const d=p},1465:function(t,e,i){"use strict"
i.d(e,"a",(function(){return y}))
var o=i(968),r=i(976)
const s=Object(r.b)()({shortDate:"short-date",shortDateShortTime:"short-date-short-time",shortDateShortTime24:"short-date-short-time-24",shortDateLongTime:"short-date-long-time",shortDateLongTime24:"short-date-long-time-24",shortDateLE:"short-date-le",shortDateLEShortTime:"short-date-le-short-time",shortDateLEShortTime24:"short-date-le-short-time-24",shortDateLELongTime:"short-date-le-long-time",shortDateLELongTime24:"short-date-le-long-time-24",longMonthDayYear:"long-month-day-year",longMonthDayYearShortTime:"long-month-day-year-short-time",longMonthDayYearShortTime24:"long-month-day-year-short-time-24",longMonthDayYearLongTime:"long-month-day-year-long-time",longMonthDayYearLongTime24:"long-month-day-year-long-time-24",dayShortMonthYear:"day-short-month-year",dayShortMonthYearShortTime:"day-short-month-year-short-time",dayShortMonthYearShortTime24:"day-short-month-year-short-time-24",dayShortMonthYearLongTime:"day-short-month-year-long-time",dayShortMonthYearLongTime24:"day-short-month-year-long-time-24",longDate:"long-date",longDateShortTime:"long-date-short-time",longDateShortTime24:"long-date-short-time-24",longDateLongTime:"long-date-long-time",longDateLongTime24:"long-date-long-time-24",longMonthYear:"long-month-year",shortMonthYear:"short-month-year",year:"year"})
s.toJSON.bind(s),s.fromJSON.bind(s)
var n,a=i(972),c=i(970),l=i(971),p=(i(445),i(979)),d=i(969),u=i(1039),b=i(1038)
let h=n=class extends a.a{constructor(t){super(t),this.dateFormat=null,this.dateTimeFormatOptions=null,this.digitSeparator=!1,this.places=null}clone(){return new n({dateFormat:this.dateFormat,digitSeparator:this.digitSeparator,places:this.places})}format(t){return this.dateFormat?Object(u.b)(t,{...Object(u.a)(this.dateFormat),...this.dateTimeFormatOptions}):Object(b.b)(t,Object(b.a)(this))}formatRasterPixelValue(t){if(t.includes("-"))return t
let e,i
return t.trim().includes(",")?(e=",",i=e+" ",this._formatDelimitedString(t,e,i,this)):t.trim().includes(";")?(e=";",i=e+" ",this._formatDelimitedString(t,e,i,this)):t.trim().includes(" ")?(e=i=" ",this._formatDelimitedString(t,e,i,this)):this.format(Number(t))}_formatDelimitedString(t,e,i,o){return t&&e&&i&&o?t.trim().split(e).map(t=>this.format(Number(t))).join(i):t}}
Object(o.a)([Object(p.a)(s)],h.prototype,"dateFormat",void 0),Object(o.a)([Object(c.b)({type:Object,json:{read:!1}})],h.prototype,"dateTimeFormatOptions",void 0),Object(o.a)([Object(c.b)({type:Boolean,json:{write:!0}})],h.prototype,"digitSeparator",void 0),Object(o.a)([Object(c.b)({type:l.a,json:{write:!0}})],h.prototype,"places",void 0),h=n=Object(o.a)([Object(d.a)("esri.popup.support.FieldInfoFormat")],h)
const y=h},1676:function(t,e,i){"use strict"
i.d(e,"a",(function(){return l}))
var o,r=i(968),s=i(972),n=i(970),a=(i(971),i(445),i(969))
let c=o=class extends s.a{constructor(t){super(t),this.field=null,this.order=null}clone(){return new o({field:this.field,order:this.order})}}
Object(r.a)([Object(n.b)({type:String,json:{write:!0}})],c.prototype,"field",void 0),Object(r.a)([Object(n.b)({type:["asc","desc"],json:{write:!0}})],c.prototype,"order",void 0),c=o=Object(r.a)([Object(a.a)("esri.popup.support.RelatedRecordsInfoFieldOrder")],c)
const l=c},1715:function(t,e,i){"use strict"
i.d(e,"a",(function(){return l}))
var o,r=i(968),s=i(970),n=(i(971),i(445),i(969)),a=i(1921)
let c=o=class extends a.a{constructor(t){super(t),this.image=null,this.type="button"}clone(){return new o({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible,image:this.image})}}
Object(r.a)([Object(s.b)()],c.prototype,"image",void 0),c=o=Object(r.a)([Object(n.a)("esri.support.Action.ActionButton")],c)
const l=c},1921:function(t,e,i){"use strict"
i.d(e,"a",(function(){return p}))
var o,r=i(968),s=i(975),n=i(1063),a=i(970),c=(i(971),i(445),i(969))
let l=o=class extends(Object(n.b)(s.a)){constructor(t){super(t),this.active=!1,this.className=null,this.disabled=!1,this.id=null,this.indicator=!1,this.title=null,this.type=null,this.visible=!0}clone(){return new o({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible})}}
Object(r.a)([Object(a.b)()],l.prototype,"active",void 0),Object(r.a)([Object(a.b)()],l.prototype,"className",void 0),Object(r.a)([Object(a.b)()],l.prototype,"disabled",void 0),Object(r.a)([Object(a.b)()],l.prototype,"id",void 0),Object(r.a)([Object(a.b)()],l.prototype,"indicator",void 0),Object(r.a)([Object(a.b)()],l.prototype,"title",void 0),Object(r.a)([Object(a.b)()],l.prototype,"type",void 0),Object(r.a)([Object(a.b)()],l.prototype,"visible",void 0),l=o=Object(r.a)([Object(c.a)("esri.support.actions.ActionBase")],l)
const p=l},1954:function(t,e,i){"use strict"
i.d(e,"a",(function(){return l}))
var o,r=i(968),s=i(972),n=i(970),a=(i(971),i(445),i(969))
let c=o=class extends s.a{constructor(t){super(t),this.name=null,this.title=null,this.expression=null,this.returnType=null}clone(){return new o({name:this.name,title:this.title,expression:this.expression,returnType:this.returnType})}}
Object(r.a)([Object(n.b)({type:String,json:{write:!0}})],c.prototype,"name",void 0),Object(r.a)([Object(n.b)({type:String,json:{write:!0}})],c.prototype,"title",void 0),Object(r.a)([Object(n.b)({type:String,json:{write:!0}})],c.prototype,"expression",void 0),Object(r.a)([Object(n.b)({type:["string","number"],json:{write:!0}})],c.prototype,"returnType",void 0),c=o=Object(r.a)([Object(a.a)("esri.popup.ExpressionInfo")],c)
const l=c},1983:function(t,e,i){"use strict"
i.d(e,"a",(function(){return l}))
var o,r=i(968),s=i(972),n=i(970),a=(i(971),i(445),i(969))
let c=o=class extends s.a{constructor(t){super(t),this.title=null,this.expression=null,this.returnType="dictionary"}clone(){return new o({title:this.title,expression:this.expression})}}
Object(r.a)([Object(n.b)({type:String,json:{write:!0}})],c.prototype,"title",void 0),Object(r.a)([Object(n.b)({type:String,json:{write:!0}})],c.prototype,"expression",void 0),Object(r.a)([Object(n.b)({type:["dictionary"],readOnly:!0,json:{read:!1,write:!0}})],c.prototype,"returnType",void 0),c=o=Object(r.a)([Object(a.a)("esri.popup.ElementExpressionInfo")],c)
const l=c},1984:function(t,e,i){"use strict"
i.d(e,"a",(function(){return l}))
var o,r=i(968),s=i(975),n=i(970),a=(i(971),i(445),i(969))
let c=o=class extends s.a{constructor(t){super(t),this.fieldName=null,this.tooltip=null,this.value=null}clone(){return new o({fieldName:this.fieldName,tooltip:this.tooltip,value:this.value})}}
Object(r.a)([Object(n.b)()],c.prototype,"fieldName",void 0),Object(r.a)([Object(n.b)()],c.prototype,"tooltip",void 0),Object(r.a)([Object(n.b)()],c.prototype,"value",void 0),c=o=Object(r.a)([Object(a.a)("esri.popup.content.support.ChartMediaInfoValueSeries")],c)
const l=c},1985:function(t,e,i){"use strict"
i.d(e,"a",(function(){return l}))
var o,r=i(968),s=i(970),n=(i(971),i(445),i(969)),a=i(1921)
let c=o=class extends a.a{constructor(t){super(t),this.image=null,this.type="toggle",this.value=!1}clone(){return new o({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible,image:this.image,value:this.value})}}
Object(r.a)([Object(s.b)()],c.prototype,"image",void 0),Object(r.a)([Object(s.b)()],c.prototype,"value",void 0),c=o=Object(r.a)([Object(n.a)("esri.support.Action.ActionToggle")],c)
const l=c},2696:function(t,e,i){"use strict"
i.d(e,"a",(function(){return r}))
var o=i(976)
const r=Object(o.b)()({barchart:"bar-chart",columnchart:"column-chart",linechart:"line-chart",piechart:"pie-chart"})},2754:function(t,e,i){"use strict"
i.d(e,"a",(function(){return h}))
var o,r=i(968),s=i(970),n=(i(971),i(445),i(969)),a=i(2766),c=i(972),l=i(234),p=i(1984)
let d=o=class extends c.a{constructor(t){super(t),this.fields=[],this.normalizeField=null,this.series=[],this.tooltipField=null}clone(){return new o({fields:Object(l.a)(this.fields),normalizeField:this.normalizeField,tooltipField:this.tooltipField})}}
Object(r.a)([Object(s.b)({type:[String],json:{write:!0}})],d.prototype,"fields",void 0),Object(r.a)([Object(s.b)({type:String,json:{write:!0}})],d.prototype,"normalizeField",void 0),Object(r.a)([Object(s.b)({type:[p.a],json:{read:!1}})],d.prototype,"series",void 0),Object(r.a)([Object(s.b)({type:String,json:{write:!0}})],d.prototype,"tooltipField",void 0),d=o=Object(r.a)([Object(n.a)("esri.popup.content.support.ChartMediaInfoValue")],d)
const u=d
let b=class extends a.a{constructor(t){super(t),this.type=null,this.value=null}}
Object(r.a)([Object(s.b)({type:["bar-chart","column-chart","line-chart","pie-chart"],readOnly:!0,json:{read:!1,write:!0}})],b.prototype,"type",void 0),Object(r.a)([Object(s.b)({type:u,json:{write:!0}})],b.prototype,"value",void 0),b=Object(r.a)([Object(n.a)("esri.popup.content.mixins.ChartMediaInfo")],b)
const h=b},2766:function(t,e,i){"use strict"
i.d(e,"a",(function(){return c}))
var o=i(968),r=i(972),s=i(970),n=(i(971),i(445),i(969))
let a=class extends r.a{constructor(t){super(t),this.altText=null,this.caption="",this.title="",this.type=null}}
Object(o.a)([Object(s.b)({type:String,json:{write:!0}})],a.prototype,"altText",void 0),Object(o.a)([Object(s.b)({type:String,json:{write:!0}})],a.prototype,"caption",void 0),Object(o.a)([Object(s.b)({type:String,json:{write:!0}})],a.prototype,"title",void 0),Object(o.a)([Object(s.b)({type:["image","bar-chart","column-chart","line-chart","pie-chart"],readOnly:!0,json:{read:!1,write:!0}})],a.prototype,"type",void 0),a=Object(o.a)([Object(n.a)("esri.popup.content.mixins.MediaInfo")],a)
const c=a},2877:function(t,e,i){"use strict"
i.d(e,"a",(function(){return p}))
var o,r=i(968),s=i(970),n=(i(971),i(445),i(969)),a=i(2754),c=i(2696)
let l=o=class extends a.a{constructor(t){super(t),this.type="bar-chart"}clone(){return new o({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}}
Object(r.a)([Object(s.b)({type:["bar-chart"],readOnly:!0,json:{type:["barchart"],read:!1,write:c.a.write}})],l.prototype,"type",void 0),l=o=Object(r.a)([Object(n.a)("esri.popup.content.BarChartMediaInfo")],l)
const p=l},2878:function(t,e,i){"use strict"
i.d(e,"a",(function(){return p}))
var o,r=i(968),s=i(970),n=(i(971),i(445),i(969)),a=i(2754),c=i(2696)
let l=o=class extends a.a{constructor(t){super(t),this.type="column-chart"}clone(){return new o({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}}
Object(r.a)([Object(s.b)({type:["column-chart"],readOnly:!0,json:{type:["columnchart"],read:!1,write:c.a.write}})],l.prototype,"type",void 0),l=o=Object(r.a)([Object(n.a)("esri.popup.content.ColumnChartMediaInfo")],l)
const p=l},2879:function(t,e,i){"use strict"
i.d(e,"a",(function(){return p}))
var o,r=i(968),s=i(970),n=(i(971),i(445),i(969)),a=i(2754),c=i(2696)
let l=o=class extends a.a{constructor(t){super(t),this.type="line-chart"}clone(){return new o({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}}
Object(r.a)([Object(s.b)({type:["line-chart"],readOnly:!0,json:{type:["linechart"],read:!1,write:c.a.write}})],l.prototype,"type",void 0),l=o=Object(r.a)([Object(n.a)("esri.popup.content.LineChartMediaInfo")],l)
const p=l},2880:function(t,e,i){"use strict"
i.d(e,"a",(function(){return p}))
var o,r=i(968),s=i(970),n=(i(971),i(445),i(969)),a=i(2754),c=i(2696)
let l=o=class extends a.a{constructor(t){super(t),this.type="pie-chart"}clone(){return new o({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}}
Object(r.a)([Object(s.b)({type:["pie-chart"],readOnly:!0,json:{type:["piechart"],read:!1,write:c.a.write}})],l.prototype,"type",void 0),l=o=Object(r.a)([Object(n.a)("esri.popup.content.PieChartMediaInfo")],l)
const p=l},2881:function(t,e,i){"use strict"
i.d(e,"a",(function(){return c}))
var o=i(2877),r=i(2878),s=i(2900),n=i(2879),a=i(2880)
const c={base:i(2766).a,key:"type",defaultKeyValue:"image",typeMap:{"bar-chart":o.a,"column-chart":r.a,"line-chart":n.a,"pie-chart":a.a,image:s.a}}},2900:function(t,e,i){"use strict"
i.d(e,"a",(function(){return b}))
var o,r=i(968),s=i(970),n=(i(971),i(445),i(969)),a=i(2766),c=i(972)
let l=o=class extends c.a{constructor(t){super(t),this.linkURL=null,this.sourceURL=null}clone(){return new o({linkURL:this.linkURL,sourceURL:this.sourceURL})}}
Object(r.a)([Object(s.b)({type:String,json:{write:!0}})],l.prototype,"linkURL",void 0),Object(r.a)([Object(s.b)({type:String,json:{write:!0}})],l.prototype,"sourceURL",void 0),l=o=Object(r.a)([Object(n.a)("esri.popup.content.support.ImageMediaInfoValue")],l)
const p=l
var d
let u=d=class extends a.a{constructor(t){super(t),this.refreshInterval=null,this.type="image",this.value=null}clone(){return new d({altText:this.altText,title:this.title,caption:this.caption,refreshInterval:this.refreshInterval,value:this.value?this.value.clone():null})}}
Object(r.a)([Object(s.b)({type:Number,json:{write:!0}})],u.prototype,"refreshInterval",void 0),Object(r.a)([Object(s.b)({type:["image"],readOnly:!0,json:{read:!1,write:!0}})],u.prototype,"type",void 0),Object(r.a)([Object(s.b)({type:p,json:{write:!0}})],u.prototype,"value",void 0),u=d=Object(r.a)([Object(n.a)("esri.popup.content.ImageMediaInfo")],u)
const b=u},775:function(t,e,i){"use strict"
i.r(e),i.d(e,"default",(function(){return q}))
var o=i(968),r=i(986),s=i(993),n=i(972),a=i(234),c=i(233),l=i(973),p=i(970),d=i(987),u=i(977),b=i(969),h=i(974),y=i(971),j=i(989),O=i(1439),f=i(1386),m=i(1440),v=i(1441),w=i(1442),g=i(1443),x=i(1444),I=i(1369)
const F={base:null,key:"type",typeMap:{attachment:O.a,media:g.a,text:I.a,expression:v.a,field:w.a,relationship:x.a}}
var S,T=i(1954),N=i(1374)
i(445)
let _=S=class extends n.a{constructor(t){super(t),this.returnTopmostRaster=null,this.showNoDataRecords=null}clone(){return new S({showNoDataRecords:this.showNoDataRecords,returnTopmostRaster:this.returnTopmostRaster})}}
Object(o.a)([Object(p.b)({type:Boolean,json:{write:!0}})],_.prototype,"returnTopmostRaster",void 0),Object(o.a)([Object(p.b)({type:Boolean,json:{write:!0}})],_.prototype,"showNoDataRecords",void 0),_=S=Object(o.a)([Object(b.a)("esri.popup.LayerOptions")],_)
const R=_
var C,A=i(1676)
let M=C=class extends n.a{constructor(t){super(t),this.showRelatedRecords=null,this.orderByFields=null}clone(){return new C({showRelatedRecords:this.showRelatedRecords,orderByFields:this.orderByFields?Object(a.a)(this.orderByFields):null})}}
Object(o.a)([Object(p.b)({type:Boolean,json:{write:!0}})],M.prototype,"showRelatedRecords",void 0),Object(o.a)([Object(p.b)({type:[A.a],json:{write:!0}})],M.prototype,"orderByFields",void 0),M=C=Object(o.a)([Object(b.a)("esri.popup.RelatedRecordsInfo")],M)
const E=M
var L=i(2881),D=i(1921),B=i(1715),J=i(1985)
const k=c.a.getLogger("esri.PopupTemplate"),Y="relationships/",U="expression/",P=s.a.ofType({key:"type",defaultKeyValue:"button",base:D.a,typeMap:{button:B.a,toggle:J.a}}),V={base:f.a,key:"type",typeMap:{media:g.a,custom:m.a,text:I.a,attachments:O.a,fields:w.a,expression:v.a,relationship:x.a}},z=["attachments","fields","media","text","expression","relationship"]
let $=class extends(Object(r.b)(n.a)){constructor(){super(...arguments),this.actions=null,this.content="",this.expressionInfos=null,this.fieldInfos=null,this.layerOptions=null,this.lastEditInfoEnabled=!0,this.outFields=null,this.overwriteActions=!1,this.returnGeometry=!1,this.title=""}castContent(t){return Array.isArray(t)?t.map(t=>Object(y.k)(V,t)):"string"==typeof t||"function"==typeof t||t instanceof HTMLElement||Object(l.l)(t)?t:(k.error("content error","unsupported content value",{value:t}),null)}readContent(t,e){const{popupElements:i}=e
return Array.isArray(i)&&i.length>0?this._readPopupInfoElements(e.description,e.mediaInfos,i):this._readPopupInfo(e)}writeContent(t,e,i,o){"string"!=typeof t?Array.isArray(t)&&(e.popupElements=t.filter(t=>z.includes(t.type)).map(t=>t&&t.toJSON(o)),e.popupElements.forEach(t=>{"attachments"===t.type?this._writeAttachmentContent(e):"media"===t.type?this._writeMediaContent(t,e):"text"===t.type?this._writeTextContent(t,e):"relationship"===t.type&&this._writeRelationshipContent(t,e)})):e.description=t}writeFieldInfos(t,e,i,o){const{content:r}=this,s=Array.isArray(r)?r:null
if(t){const i=s?s.filter(t=>"fields"===t.type):[],r=i.length&&i.every(t=>{var e
return null==(e=t.fieldInfos)?void 0:e.length})
e.fieldInfos=t.filter(Boolean).map(t=>{const e=t.toJSON(o)
return r&&(e.visible=!1),e})}if(s)for(const t of s)"fields"===t.type&&this._writeFieldsContent(t,e)}writeLayerOptions(t,e,i,o){e[i]=!t||null===t.showNoDataRecords&&null===t.returnTopmostRaster?null:t.toJSON(o)}writeTitle(t,e){e.title=t||""}async collectRequiredFields(t,e){const i=this.expressionInfos||[]
await this._collectExpressionInfoFields(t,e,[...i,...this._getContentExpressionInfos(this.content,i)]),Object(j.e)(t,e,[...this.outFields||[],...this._getActionsFields(this.actions),...this._getTitleFields(this.title),...this._getContentFields(this.content)])}async getRequiredFields(t){const e=new Set
return await this.collectRequiredFields(e,t),[...e].sort()}_writeFieldsContent(t,e){if(!Array.isArray(t.fieldInfos)||!t.fieldInfos.length)return
const i=Object(a.a)(t.fieldInfos)
Array.isArray(e.fieldInfos)?i.forEach(t=>{const i=e.fieldInfos.find(e=>e.fieldName.toLowerCase()===t.fieldName.toLowerCase())
i?i.visible=!0:e.fieldInfos.push(t)}):e.fieldInfos=i}_writeAttachmentContent(t){t.showAttachments||(t.showAttachments=!0)}_writeRelationshipContent(t,e){var i,o
const r=(null==(i=t.orderByFields)?void 0:i.map(e=>this._toFieldOrderJSON(e,t.relationshipId)))||[],s=[...(null==(o=e.relatedRecordsInfo)?void 0:o.orderByFields)||[],...r]
e.relatedRecordsInfo={showRelatedRecords:!0,...(null==s?void 0:s.length)&&{orderByFields:s}}}_writeTextContent(t,e){!e.description&&t.text&&(e.description=t.text)}_writeMediaContent(t,e){if(!Array.isArray(t.mediaInfos)||!t.mediaInfos.length)return
const i=Object(a.a)(t.mediaInfos)
Array.isArray(e.mediaInfos)?e.mediaInfos=[...e.mediaInfos,...i]:e.mediaInfos=i}_readPopupInfoElements(t,e,i){const o={description:!1,mediaInfos:!1}
return i.map(i=>"media"===i.type?(i.mediaInfos||!e||o.mediaInfos||(i.mediaInfos=e,o.mediaInfos=!0),g.a.fromJSON(i)):"text"===i.type?(i.text||!t||o.description||(i.text=t,o.description=!0),I.a.fromJSON(i)):"attachments"===i.type?O.a.fromJSON(i):"fields"===i.type?w.a.fromJSON(i):"expression"===i.type?v.a.fromJSON(i):"relationship"===i.type?x.a.fromJSON(i):void 0).filter(Boolean)}_toRelationshipContent(t){const{field:e,order:i}=t
if(null==e||!e.startsWith(Y))return null
const o=e.replace(Y,"").split("/")
if(2!==o.length)return null
const r=parseInt(o[0],10),s=o[1]
return"number"==typeof r&&s?x.a.fromJSON({relationshipId:r,orderByFields:[{field:s,order:i}]}):null}_toFieldOrderJSON(t,e){const{order:i,field:o}=t
return{field:`${Y}${e}/${o}`,order:i}}_readPopupInfo({description:t,mediaInfos:e,showAttachments:i,relatedRecordsInfo:o={showRelatedRecords:!1}}){const r=[]
t?r.push(new I.a({text:t})):r.push(new w.a),Array.isArray(e)&&e.length&&r.push(g.a.fromJSON({mediaInfos:e})),i&&r.push(O.a.fromJSON({displayType:"auto"}))
const{showRelatedRecords:s,orderByFields:n}=o
return s&&null!=n&&n.length&&n.forEach(t=>{const e=this._toRelationshipContent(t)
e&&r.push(e)}),r.length?r:t}_getContentElementFields(t){var e
const i=null==t?void 0:t.type
if("attachments"===i)return[...this._extractFieldNames(t.title),...this._extractFieldNames(t.description)]
if("custom"===i)return t.outFields||[]
if("fields"===i)return[...this._extractFieldNames(t.title),...this._extractFieldNames(t.description),...this._getFieldInfoFields(null!=(e=t.fieldInfos)?e:this.fieldInfos)]
if("media"===i){const e=t.mediaInfos||[]
return[...this._extractFieldNames(t.title),...this._extractFieldNames(t.description),...e.reduce((t,e)=>[...t,...this._getMediaInfoFields(e)],[])]}return"text"===i?this._extractFieldNames(t.text):[]}_getMediaInfoFields(t){const{caption:e,title:i,value:o}=t,r=o||{},{fields:s,normalizeField:n,tooltipField:a,sourceURL:c,linkURL:l}=r,p=[...this._extractFieldNames(i),...this._extractFieldNames(e),...this._extractFieldNames(c),...this._extractFieldNames(l),...null!=s?s:[]]
return n&&p.push(n),a&&p.push(a),p}_getContentExpressionInfos(t,e){return Array.isArray(t)?t.reduce((t,e)=>[...t,..."expression"===e.type&&e.expressionInfo?[e.expressionInfo]:[]],e):[]}_getContentFields(t){return"string"==typeof t?this._extractFieldNames(t):Array.isArray(t)?t.reduce((t,e)=>[...t,...this._getContentElementFields(e)],[]):[]}async _collectExpressionInfoFields(t,e,i){i&&await Promise.all(i.map(i=>Object(j.a)(t,e,i.expression)))}_getFieldInfoFields(t){return t?t.filter(t=>void 0===t.visible||!!t.visible).map(t=>t.fieldName).filter(t=>!t.startsWith(Y)&&!t.startsWith(U)):[]}_getActionsFields(t){return t?t.toArray().reduce((t,e)=>[...t,...this._getActionFields(e)],[]):[]}_getActionFields(t){const{className:e,title:i,type:o}=t,r="button"===o||"toggle"===o?t.image:""
return[...this._extractFieldNames(i),...this._extractFieldNames(e),...this._extractFieldNames(r)]}_getTitleFields(t){return"string"==typeof t?this._extractFieldNames(t):[]}_extractFieldNames(t){if(!t||"string"!=typeof t)return[]
const e=t.match(/{[^}]*}/g)
if(!e)return[]
const i=/\{(\w+):.+\}/,o=e.filter(t=>!(0===t.indexOf("{"+Y)||0===t.indexOf("{"+U))).map(t=>t.replace(i,"{$1}"))
return o?o.map(t=>t.slice(1,-1)):[]}}
Object(o.a)([Object(p.b)({type:P})],$.prototype,"actions",void 0),Object(o.a)([Object(p.b)()],$.prototype,"content",void 0),Object(o.a)([Object(d.a)("content")],$.prototype,"castContent",null),Object(o.a)([Object(u.a)("content",["description","fieldInfos","popupElements","mediaInfos","showAttachments","relatedRecordsInfo"])],$.prototype,"readContent",null),Object(o.a)([Object(h.a)("content",{popupElements:{type:s.a.ofType(F)},showAttachments:{type:Boolean},mediaInfos:{type:s.a.ofType(L.a)},description:{type:String},relatedRecordsInfo:{type:E}})],$.prototype,"writeContent",null),Object(o.a)([Object(p.b)({type:[T.a],json:{write:!0}})],$.prototype,"expressionInfos",void 0),Object(o.a)([Object(p.b)({type:[N.a]})],$.prototype,"fieldInfos",void 0),Object(o.a)([Object(h.a)("fieldInfos")],$.prototype,"writeFieldInfos",null),Object(o.a)([Object(p.b)({type:R})],$.prototype,"layerOptions",void 0),Object(o.a)([Object(h.a)("layerOptions")],$.prototype,"writeLayerOptions",null),Object(o.a)([Object(p.b)({type:Boolean,json:{read:{source:"showLastEditInfo"},write:{target:"showLastEditInfo"},default:!0}})],$.prototype,"lastEditInfoEnabled",void 0),Object(o.a)([Object(p.b)()],$.prototype,"outFields",void 0),Object(o.a)([Object(p.b)()],$.prototype,"overwriteActions",void 0),Object(o.a)([Object(p.b)()],$.prototype,"returnGeometry",void 0),Object(o.a)([Object(p.b)({json:{type:String}})],$.prototype,"title",void 0),Object(o.a)([Object(h.a)("title")],$.prototype,"writeTitle",null),$=Object(o.a)([Object(b.a)("esri.PopupTemplate")],$)
const q=$}}])
