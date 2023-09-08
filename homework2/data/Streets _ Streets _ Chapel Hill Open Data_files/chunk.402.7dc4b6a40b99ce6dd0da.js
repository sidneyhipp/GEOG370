(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[402],{1124:function(t,e,i){"use strict"
i.d(e,"a",(function(){return n}))
const n=(t,...e)=>{e.forEach(e=>{if("function"!=typeof t[e])throw new Error(`Cannot bind context. ${e} must be a function`)
t[e]=t[e].bind(t)})}},885:function(t,e,i){"use strict"
i.r(e),i.d(e,"arcgis_hub_map_widget_generic",(function(){return c}))
var n=i(96),a=i(1124)
const c=class{constructor(t){Object(n.k)(this,t),this.arcgisHubWidgetSelected=Object(n.e)(this,"arcgisHubWidgetSelected",7),this.active=void 0,this.disabled=void 0,this.icon=void 0,this.text=void 0,this.scale="m",this.textEnabled=void 0,this.expanded=void 0,this.visible=void 0,Object(a.a)(this,"emitSelected","updateExpanded")}get parentContainer(){const{el:t}=this
return t&&t.closest("arcgis-hub-map-widget-container")}connectedCallback(){const{parentContainer:t}=this
t&&(this.updateExpanded(),t.addEventListener("calciteActionPadToggle",this.updateExpanded))}disconnectedCallback(){const{parentContainer:t}=this
t&&t.removeEventListener("calciteActionPadToggle",this.updateExpanded)}emitSelected(){this.arcgisHubWidgetSelected.emit()}updateExpanded(){var t
this.expanded=null===(t=this.parentContainer)||void 0===t?void 0:t.expanded}render(){const{active:t,disabled:e,icon:i,scale:a,text:c,expanded:d,textEnabled:s}=this
return Object(n.i)(n.b,null,this.parentContainer&&Object(n.i)("calcite-action",{active:t,disabled:e,icon:i,onClick:this.emitSelected,scale:a,text:c,textEnabled:s||d}))}get el(){return Object(n.c)(this)}}
c.style=":host{display:block}"}}])
