(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[745],{923:function(e,t,s){"use strict"
s.r(t),s.d(t,"arcgis_wormhole",(function(){return o}))
var n=s(96)
const o=class{constructor(e){Object(n.k)(this,e),this.zIndex="100001",this.styles={},this.target=document.body,this.elAttributes={}}componentWillLoad(){const{zIndex:e,styles:t}=this
this.wormholeElement=document.createElement("div"),Object.assign(this.wormholeElement.style,Object.assign(Object.assign({position:"absolute"},t),{zIndex:e})),Object.entries(this.elAttributes).map(([e,t])=>this.wormholeElement.setAttribute(e,t)),this.target.append(this.wormholeElement)}moveChildren(){return new Promise(e=>{setTimeout(()=>{this.transportedElements=this.element.children
const t=document.createDocumentFragment()
Array.from(this.transportedElements).forEach(e=>t.appendChild(e)),this.wormholeElement.append(t),e()},0)})}async componentDidLoad(){await this.moveChildren()}disconnectedCallback(){Array.from(this.transportedElements).forEach(e=>e.remove()),this.wormholeElement&&this.wormholeElement.remove()}render(){return Object(n.i)("slot",null)}get element(){return Object(n.c)(this)}}
o.style=":host{display:none}"}}])
