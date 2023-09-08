(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[0],{1224:function(t,e,r){"use strict"
r.d(e,"a",(function(){return Ee}))
var n=r(96),i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(t,e)}
function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null")
function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var a,s,l,u=function(){return(u=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])
return t}).apply(this,arguments)}
function c(t,e,r){if(r||2===arguments.length)for(var n,i=0,o=e.length;i<o;i++)!n&&i in e||(n||(n=Array.prototype.slice.call(e,0,i)),n[i]=e[i])
return t.concat(n||Array.prototype.slice.call(e))}function f(t){return t.type===s.literal}function h(t){return t.type===s.argument}function m(t){return t.type===s.number}function p(t){return t.type===s.date}function g(t){return t.type===s.time}function E(t){return t.type===s.select}function d(t){return t.type===s.plural}function y(t){return t.type===s.pound}function v(t){return t.type===s.tag}function T(t){return!(!t||"object"!=typeof t||t.type!==l.number)}function _(t){return!(!t||"object"!=typeof t||t.type!==l.dateTime)}!function(t){t[t.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",t[t.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",t[t.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",t[t.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",t[t.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",t[t.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",t[t.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",t[t.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",t[t.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",t[t.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",t[t.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",t[t.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",t[t.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",t[t.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",t[t.INVALID_TAG=23]="INVALID_TAG",t[t.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",t[t.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",t[t.UNCLOSED_TAG=27]="UNCLOSED_TAG"}(a||(a={})),function(t){t[t.literal=0]="literal",t[t.argument=1]="argument",t[t.number=2]="number",t[t.date=3]="date",t[t.time=4]="time",t[t.select=5]="select",t[t.plural=6]="plural",t[t.pound=7]="pound",t[t.tag=8]="tag"}(s||(s={})),function(t){t[t.number=0]="number",t[t.dateTime=1]="dateTime"}(l||(l={}))
var b=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,A=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g
function R(t){var e={}
return t.replace(A,(function(t){var r=t.length
switch(t[0]){case"G":e.era=4===r?"long":5===r?"narrow":"short"
break
case"y":e.year=2===r?"2-digit":"numeric"
break
case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead")
case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported")
case"M":case"L":e.month=["numeric","2-digit","short","long","narrow"][r-1]
break
case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported")
case"d":e.day=["numeric","2-digit"][r-1]
break
case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead")
case"E":e.weekday=4===r?"short":5===r?"narrow":"short"
break
case"e":if(r<4)throw new RangeError("`e..eee` (weekday) patterns are not supported")
e.weekday=["short","long","narrow","short"][r-4]
break
case"c":if(r<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported")
e.weekday=["short","long","narrow","short"][r-4]
break
case"a":e.hour12=!0
break
case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead")
case"h":e.hourCycle="h12",e.hour=["numeric","2-digit"][r-1]
break
case"H":e.hourCycle="h23",e.hour=["numeric","2-digit"][r-1]
break
case"K":e.hourCycle="h11",e.hour=["numeric","2-digit"][r-1]
break
case"k":e.hourCycle="h24",e.hour=["numeric","2-digit"][r-1]
break
case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead")
case"m":e.minute=["numeric","2-digit"][r-1]
break
case"s":e.second=["numeric","2-digit"][r-1]
break
case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead")
case"z":e.timeZoneName=r<4?"short":"long"
break
case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""})),e}var N,P=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i,S=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,I=/^(@+)?(\+|#+)?[rs]?$/g,L=/(\*)(0+)|(#+)(0+)|(0+)/g,O=/^(0+)$/
function w(t){var e={}
return"r"===t[t.length-1]?e.roundingPriority="morePrecision":"s"===t[t.length-1]&&(e.roundingPriority="lessPrecision"),t.replace(I,(function(t,r,n){return"string"!=typeof n?(e.minimumSignificantDigits=r.length,e.maximumSignificantDigits=r.length):"+"===n?e.minimumSignificantDigits=r.length:"#"===r[0]?e.maximumSignificantDigits=r.length:(e.minimumSignificantDigits=r.length,e.maximumSignificantDigits=r.length+("string"==typeof n?n.length:0)),""})),e}function C(t){switch(t){case"sign-auto":return{signDisplay:"auto"}
case"sign-accounting":case"()":return{currencySign:"accounting"}
case"sign-always":case"+!":return{signDisplay:"always"}
case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"}
case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"}
case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"}
case"sign-never":case"+_":return{signDisplay:"never"}}}function M(t){var e
if("E"===t[0]&&"E"===t[1]?(e={notation:"engineering"},t=t.slice(2)):"E"===t[0]&&(e={notation:"scientific"},t=t.slice(1)),e){var r=t.slice(0,2)
if("+!"===r?(e.signDisplay="always",t=t.slice(2)):"+?"===r&&(e.signDisplay="exceptZero",t=t.slice(2)),!O.test(t))throw new Error("Malformed concise eng/scientific notation")
e.minimumIntegerDigits=t.length}return e}function D(t){var e=C(t)
return e||{}}function U(t){for(var e={},r=0,n=t;r<n.length;r++){var i=n[r]
switch(i.stem){case"percent":case"%":e.style="percent"
continue
case"%x100":e.style="percent",e.scale=100
continue
case"currency":e.style="currency",e.currency=i.options[0]
continue
case"group-off":case",_":e.useGrouping=!1
continue
case"precision-integer":case".":e.maximumFractionDigits=0
continue
case"measure-unit":case"unit":e.style="unit",e.unit=i.options[0].replace(/^(.*?)-/,"")
continue
case"compact-short":case"K":e.notation="compact",e.compactDisplay="short"
continue
case"compact-long":case"KK":e.notation="compact",e.compactDisplay="long"
continue
case"scientific":e=u(u(u({},e),{notation:"scientific"}),i.options.reduce((function(t,e){return u(u({},t),D(e))}),{}))
continue
case"engineering":e=u(u(u({},e),{notation:"engineering"}),i.options.reduce((function(t,e){return u(u({},t),D(e))}),{}))
continue
case"notation-simple":e.notation="standard"
continue
case"unit-width-narrow":e.currencyDisplay="narrowSymbol",e.unitDisplay="narrow"
continue
case"unit-width-short":e.currencyDisplay="code",e.unitDisplay="short"
continue
case"unit-width-full-name":e.currencyDisplay="name",e.unitDisplay="long"
continue
case"unit-width-iso-code":e.currencyDisplay="symbol"
continue
case"scale":e.scale=parseFloat(i.options[0])
continue
case"integer-width":if(i.options.length>1)throw new RangeError("integer-width stems only accept a single optional option")
i.options[0].replace(L,(function(t,r,n,i,o,a){if(r)e.minimumIntegerDigits=n.length
else{if(i&&o)throw new Error("We currently do not support maximum integer digits")
if(a)throw new Error("We currently do not support exact integer digits")}return""}))
continue}if(O.test(i.stem))e.minimumIntegerDigits=i.stem.length
else if(S.test(i.stem)){if(i.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option")
i.stem.replace(S,(function(t,r,n,i,o,a){return"*"===n?e.minimumFractionDigits=r.length:i&&"#"===i[0]?e.maximumFractionDigits=i.length:o&&a?(e.minimumFractionDigits=o.length,e.maximumFractionDigits=o.length+a.length):(e.minimumFractionDigits=r.length,e.maximumFractionDigits=r.length),""}))
var o=i.options[0]
"w"===o?e=u(u({},e),{trailingZeroDisplay:"stripIfInteger"}):o&&(e=u(u({},e),w(o)))}else if(I.test(i.stem))e=u(u({},e),w(i.stem))
else{var a=C(i.stem)
a&&(e=u(u({},e),a))
var s=M(i.stem)
s&&(e=u(u({},e),s))}}return e}var F=new RegExp("^"+b.source+"*"),G=new RegExp(b.source+"*$")
function k(t,e){return{start:t,end:e}}var j=!!String.prototype.startsWith,V=!!String.fromCodePoint,x=!!Object.fromEntries,X=!!String.prototype.codePointAt,$=!!String.prototype.trimStart,B=!!String.prototype.trimEnd,z=Number.isSafeInteger?Number.isSafeInteger:function(t){return"number"==typeof t&&isFinite(t)&&Math.floor(t)===t&&Math.abs(t)<=9007199254740991},Z=!0
try{Z="a"===(null===(N=tt("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu").exec("a"))||void 0===N?void 0:N[0])}catch(t){Z=!1}var K,Y=j?function(t,e,r){return t.startsWith(e,r)}:function(t,e,r){return t.slice(r,r+e.length)===e},H=V?String.fromCodePoint:function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
for(var r,n="",i=t.length,o=0;i>o;){if((r=t[o++])>1114111)throw RangeError(r+" is not a valid code point")
n+=r<65536?String.fromCharCode(r):String.fromCharCode(55296+((r-=65536)>>10),r%1024+56320)}return n},q=x?Object.fromEntries:function(t){for(var e={},r=0,n=t;r<n.length;r++){var i=n[r],o=i[0],a=i[1]
e[o]=a}return e},W=X?function(t,e){return t.codePointAt(e)}:function(t,e){var r=t.length
if(!(e<0||e>=r)){var n,i=t.charCodeAt(e)
return i<55296||i>56319||e+1===r||(n=t.charCodeAt(e+1))<56320||n>57343?i:n-56320+(i-55296<<10)+65536}},Q=$?function(t){return t.trimStart()}:function(t){return t.replace(F,"")},J=B?function(t){return t.trimEnd()}:function(t){return t.replace(G,"")}
function tt(t,e){return new RegExp(t,e)}if(Z){var et=tt("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu")
K=function(t,e){var r
return et.lastIndex=e,null!==(r=et.exec(t)[1])&&void 0!==r?r:""}}else K=function(t,e){for(var r=[];;){var n=W(t,e)
if(void 0===n||it(n)||ot(n))break
r.push(n),e+=n>=65536?2:1}return H.apply(void 0,r)}
var rt=function(){function t(t,e){void 0===e&&(e={}),this.message=t,this.position={offset:0,line:1,column:1},this.ignoreTag=!!e.ignoreTag,this.requiresOtherClause=!!e.requiresOtherClause,this.shouldParseSkeletons=!!e.shouldParseSkeletons}return t.prototype.parse=function(){if(0!==this.offset())throw Error("parser can only be used once")
return this.parseMessage(0,"",!1)},t.prototype.parseMessage=function(t,e,r){for(var n=[];!this.isEOF();){var i=this.char()
if(123===i){if((o=this.parseArgument(t,r)).err)return o
n.push(o.val)}else{if(125===i&&t>0)break
if(35!==i||"plural"!==e&&"selectordinal"!==e){if(60===i&&!this.ignoreTag&&47===this.peek()){if(r)break
return this.error(a.UNMATCHED_CLOSING_TAG,k(this.clonePosition(),this.clonePosition()))}if(60===i&&!this.ignoreTag&&nt(this.peek()||0)){if((o=this.parseTag(t,e)).err)return o
n.push(o.val)}else{var o
if((o=this.parseLiteral(t,e)).err)return o
n.push(o.val)}}else{var l=this.clonePosition()
this.bump(),n.push({type:s.pound,location:k(l,this.clonePosition())})}}}return{val:n,err:null}},t.prototype.parseTag=function(t,e){var r=this.clonePosition()
this.bump()
var n=this.parseTagName()
if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:s.literal,value:"<"+n+"/>",location:k(r,this.clonePosition())},err:null}
if(this.bumpIf(">")){var i=this.parseMessage(t+1,e,!0)
if(i.err)return i
var o=i.val,l=this.clonePosition()
if(this.bumpIf("</")){if(this.isEOF()||!nt(this.char()))return this.error(a.INVALID_TAG,k(l,this.clonePosition()))
var u=this.clonePosition()
return n!==this.parseTagName()?this.error(a.UNMATCHED_CLOSING_TAG,k(u,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:s.tag,value:n,children:o,location:k(r,this.clonePosition())},err:null}:this.error(a.INVALID_TAG,k(l,this.clonePosition())))}return this.error(a.UNCLOSED_TAG,k(r,this.clonePosition()))}return this.error(a.INVALID_TAG,k(r,this.clonePosition()))},t.prototype.parseTagName=function(){var t,e=this.offset()
for(this.bump();!this.isEOF()&&(45===(t=this.char())||46===t||t>=48&&t<=57||95===t||t>=97&&t<=122||t>=65&&t<=90||183==t||t>=192&&t<=214||t>=216&&t<=246||t>=248&&t<=893||t>=895&&t<=8191||t>=8204&&t<=8205||t>=8255&&t<=8256||t>=8304&&t<=8591||t>=11264&&t<=12271||t>=12289&&t<=55295||t>=63744&&t<=64975||t>=65008&&t<=65533||t>=65536&&t<=983039);)this.bump()
return this.message.slice(e,this.offset())},t.prototype.parseLiteral=function(t,e){for(var r=this.clonePosition(),n="";;){var i=this.tryParseQuote(e)
if(i)n+=i
else{var o=this.tryParseUnquoted(t,e)
if(o)n+=o
else{var a=this.tryParseLeftAngleBracket()
if(!a)break
n+=a}}}var l=k(r,this.clonePosition())
return{val:{type:s.literal,value:n,location:l},err:null}},t.prototype.tryParseLeftAngleBracket=function(){return this.isEOF()||60!==this.char()||!this.ignoreTag&&(nt(t=this.peek()||0)||47===t)?null:(this.bump(),"<")
var t},t.prototype.tryParseQuote=function(t){if(this.isEOF()||39!==this.char())return null
switch(this.peek()){case 39:return this.bump(),this.bump(),"'"
case 123:case 60:case 62:case 125:break
case 35:if("plural"===t||"selectordinal"===t)break
return null
default:return null}this.bump()
var e=[this.char()]
for(this.bump();!this.isEOF();){var r=this.char()
if(39===r){if(39!==this.peek()){this.bump()
break}e.push(39),this.bump()}else e.push(r)
this.bump()}return H.apply(void 0,e)},t.prototype.tryParseUnquoted=function(t,e){if(this.isEOF())return null
var r=this.char()
return 60===r||123===r||35===r&&("plural"===e||"selectordinal"===e)||125===r&&t>0?null:(this.bump(),H(r))},t.prototype.parseArgument=function(t,e){var r=this.clonePosition()
if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(a.EXPECT_ARGUMENT_CLOSING_BRACE,k(r,this.clonePosition()))
if(125===this.char())return this.bump(),this.error(a.EMPTY_ARGUMENT,k(r,this.clonePosition()))
var n=this.parseIdentifierIfPossible().value
if(!n)return this.error(a.MALFORMED_ARGUMENT,k(r,this.clonePosition()))
if(this.bumpSpace(),this.isEOF())return this.error(a.EXPECT_ARGUMENT_CLOSING_BRACE,k(r,this.clonePosition()))
switch(this.char()){case 125:return this.bump(),{val:{type:s.argument,value:n,location:k(r,this.clonePosition())},err:null}
case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(a.EXPECT_ARGUMENT_CLOSING_BRACE,k(r,this.clonePosition())):this.parseArgumentOptions(t,e,n,r)
default:return this.error(a.MALFORMED_ARGUMENT,k(r,this.clonePosition()))}},t.prototype.parseIdentifierIfPossible=function(){var t=this.clonePosition(),e=this.offset(),r=K(this.message,e),n=e+r.length
return this.bumpTo(n),{value:r,location:k(t,this.clonePosition())}},t.prototype.parseArgumentOptions=function(t,e,r,n){var i,o=this.clonePosition(),c=this.parseIdentifierIfPossible().value,f=this.clonePosition()
switch(c){case"":return this.error(a.EXPECT_ARGUMENT_TYPE,k(o,f))
case"number":case"date":case"time":this.bumpSpace()
var h=null
if(this.bumpIf(",")){this.bumpSpace()
var m=this.clonePosition()
if((T=this.parseSimpleArgStyleIfPossible()).err)return T
if(0===(E=J(T.val)).length)return this.error(a.EXPECT_ARGUMENT_STYLE,k(this.clonePosition(),this.clonePosition()))
h={style:E,styleLocation:k(m,this.clonePosition())}}if((_=this.tryParseArgumentClose(n)).err)return _
var p=k(n,this.clonePosition())
if(h&&Y(null==h?void 0:h.style,"::",0)){var g=Q(h.style.slice(2))
if("number"===c)return(T=this.parseNumberSkeletonFromString(g,h.styleLocation)).err?T:{val:{type:s.number,value:r,location:p,style:T.val},err:null}
if(0===g.length)return this.error(a.EXPECT_DATE_TIME_SKELETON,p)
var E={type:l.dateTime,pattern:g,location:h.styleLocation,parsedOptions:this.shouldParseSkeletons?R(g):{}}
return{val:{type:"date"===c?s.date:s.time,value:r,location:p,style:E},err:null}}return{val:{type:"number"===c?s.number:"date"===c?s.date:s.time,value:r,location:p,style:null!==(i=null==h?void 0:h.style)&&void 0!==i?i:null},err:null}
case"plural":case"selectordinal":case"select":var d=this.clonePosition()
if(this.bumpSpace(),!this.bumpIf(","))return this.error(a.EXPECT_SELECT_ARGUMENT_OPTIONS,k(d,u({},d)))
this.bumpSpace()
var y=this.parseIdentifierIfPossible(),v=0
if("select"!==c&&"offset"===y.value){if(!this.bumpIf(":"))return this.error(a.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,k(this.clonePosition(),this.clonePosition()))
var T
if(this.bumpSpace(),(T=this.tryParseDecimalInteger(a.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,a.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err)return T
this.bumpSpace(),y=this.parseIdentifierIfPossible(),v=T.val}var _,b=this.tryParsePluralOrSelectOptions(t,c,e,y)
if(b.err)return b
if((_=this.tryParseArgumentClose(n)).err)return _
var A=k(n,this.clonePosition())
return"select"===c?{val:{type:s.select,value:r,options:q(b.val),location:A},err:null}:{val:{type:s.plural,value:r,options:q(b.val),offset:v,pluralType:"plural"===c?"cardinal":"ordinal",location:A},err:null}
default:return this.error(a.INVALID_ARGUMENT_TYPE,k(o,f))}},t.prototype.tryParseArgumentClose=function(t){return this.isEOF()||125!==this.char()?this.error(a.EXPECT_ARGUMENT_CLOSING_BRACE,k(t,this.clonePosition())):(this.bump(),{val:!0,err:null})},t.prototype.parseSimpleArgStyleIfPossible=function(){for(var t=0,e=this.clonePosition();!this.isEOF();)switch(this.char()){case 39:this.bump()
var r=this.clonePosition()
if(!this.bumpUntil("'"))return this.error(a.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,k(r,this.clonePosition()))
this.bump()
break
case 123:t+=1,this.bump()
break
case 125:if(!(t>0))return{val:this.message.slice(e.offset,this.offset()),err:null}
t-=1
break
default:this.bump()}return{val:this.message.slice(e.offset,this.offset()),err:null}},t.prototype.parseNumberSkeletonFromString=function(t,e){var r=[]
try{r=function(t){if(0===t.length)throw new Error("Number skeleton cannot be empty")
for(var e=[],r=0,n=t.split(P).filter((function(t){return t.length>0}));r<n.length;r++){var i=n[r].split("/")
if(0===i.length)throw new Error("Invalid number skeleton")
for(var o=i[0],a=i.slice(1),s=0,l=a;s<l.length;s++)if(0===l[s].length)throw new Error("Invalid number skeleton")
e.push({stem:o,options:a})}return e}(t)}catch(t){return this.error(a.INVALID_NUMBER_SKELETON,e)}return{val:{type:l.number,tokens:r,location:e,parsedOptions:this.shouldParseSkeletons?U(r):{}},err:null}},t.prototype.tryParsePluralOrSelectOptions=function(t,e,r,n){for(var i,o=!1,s=[],l=new Set,u=n.value,c=n.location;;){if(0===u.length){var f=this.clonePosition()
if("select"===e||!this.bumpIf("="))break
var h=this.tryParseDecimalInteger(a.EXPECT_PLURAL_ARGUMENT_SELECTOR,a.INVALID_PLURAL_ARGUMENT_SELECTOR)
if(h.err)return h
c=k(f,this.clonePosition()),u=this.message.slice(f.offset,this.offset())}if(l.has(u))return this.error("select"===e?a.DUPLICATE_SELECT_ARGUMENT_SELECTOR:a.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,c)
"other"===u&&(o=!0),this.bumpSpace()
var m=this.clonePosition()
if(!this.bumpIf("{"))return this.error("select"===e?a.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:a.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,k(this.clonePosition(),this.clonePosition()))
var p=this.parseMessage(t+1,e,r)
if(p.err)return p
var g=this.tryParseArgumentClose(m)
if(g.err)return g
s.push([u,{value:p.val,location:k(m,this.clonePosition())}]),l.add(u),this.bumpSpace(),u=(i=this.parseIdentifierIfPossible()).value,c=i.location}return 0===s.length?this.error("select"===e?a.EXPECT_SELECT_ARGUMENT_SELECTOR:a.EXPECT_PLURAL_ARGUMENT_SELECTOR,k(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!o?this.error(a.MISSING_OTHER_CLAUSE,k(this.clonePosition(),this.clonePosition())):{val:s,err:null}},t.prototype.tryParseDecimalInteger=function(t,e){var r=1,n=this.clonePosition()
this.bumpIf("+")||this.bumpIf("-")&&(r=-1)
for(var i=!1,o=0;!this.isEOF();){var a=this.char()
if(!(a>=48&&a<=57))break
i=!0,o=10*o+(a-48),this.bump()}var s=k(n,this.clonePosition())
return i?z(o*=r)?{val:o,err:null}:this.error(e,s):this.error(t,s)},t.prototype.offset=function(){return this.position.offset},t.prototype.isEOF=function(){return this.offset()===this.message.length},t.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},t.prototype.char=function(){var t=this.position.offset
if(t>=this.message.length)throw Error("out of bound")
var e=W(this.message,t)
if(void 0===e)throw Error("Offset "+t+" is at invalid UTF-16 code unit boundary")
return e},t.prototype.error=function(t,e){return{val:null,err:{kind:t,message:this.message,location:e}}},t.prototype.bump=function(){if(!this.isEOF()){var t=this.char()
10===t?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=t<65536?1:2)}},t.prototype.bumpIf=function(t){if(Y(this.message,t,this.offset())){for(var e=0;e<t.length;e++)this.bump()
return!0}return!1},t.prototype.bumpUntil=function(t){var e=this.offset(),r=this.message.indexOf(t,e)
return r>=0?(this.bumpTo(r),!0):(this.bumpTo(this.message.length),!1)},t.prototype.bumpTo=function(t){if(this.offset()>t)throw Error("targetOffset "+t+" must be greater than or equal to the current offset "+this.offset())
for(t=Math.min(t,this.message.length);;){var e=this.offset()
if(e===t)break
if(e>t)throw Error("targetOffset "+t+" is at invalid UTF-16 code unit boundary")
if(this.bump(),this.isEOF())break}},t.prototype.bumpSpace=function(){for(;!this.isEOF()&&it(this.char());)this.bump()},t.prototype.peek=function(){if(this.isEOF())return null
var t=this.char(),e=this.offset(),r=this.message.charCodeAt(e+(t>=65536?2:1))
return null!=r?r:null},t}()
function nt(t){return t>=97&&t<=122||t>=65&&t<=90}function it(t){return t>=9&&t<=13||32===t||133===t||t>=8206&&t<=8207||8232===t||8233===t}function ot(t){return t>=33&&t<=35||36===t||t>=37&&t<=39||40===t||41===t||42===t||43===t||44===t||45===t||t>=46&&t<=47||t>=58&&t<=59||t>=60&&t<=62||t>=63&&t<=64||91===t||92===t||93===t||94===t||96===t||123===t||124===t||125===t||126===t||161===t||t>=162&&t<=165||166===t||167===t||169===t||171===t||172===t||174===t||176===t||177===t||182===t||187===t||191===t||215===t||247===t||t>=8208&&t<=8213||t>=8214&&t<=8215||8216===t||8217===t||8218===t||t>=8219&&t<=8220||8221===t||8222===t||8223===t||t>=8224&&t<=8231||t>=8240&&t<=8248||8249===t||8250===t||t>=8251&&t<=8254||t>=8257&&t<=8259||8260===t||8261===t||8262===t||t>=8263&&t<=8273||8274===t||8275===t||t>=8277&&t<=8286||t>=8592&&t<=8596||t>=8597&&t<=8601||t>=8602&&t<=8603||t>=8604&&t<=8607||8608===t||t>=8609&&t<=8610||8611===t||t>=8612&&t<=8613||8614===t||t>=8615&&t<=8621||8622===t||t>=8623&&t<=8653||t>=8654&&t<=8655||t>=8656&&t<=8657||8658===t||8659===t||8660===t||t>=8661&&t<=8691||t>=8692&&t<=8959||t>=8960&&t<=8967||8968===t||8969===t||8970===t||8971===t||t>=8972&&t<=8991||t>=8992&&t<=8993||t>=8994&&t<=9e3||9001===t||9002===t||t>=9003&&t<=9083||9084===t||t>=9085&&t<=9114||t>=9115&&t<=9139||t>=9140&&t<=9179||t>=9180&&t<=9185||t>=9186&&t<=9254||t>=9255&&t<=9279||t>=9280&&t<=9290||t>=9291&&t<=9311||t>=9472&&t<=9654||9655===t||t>=9656&&t<=9664||9665===t||t>=9666&&t<=9719||t>=9720&&t<=9727||t>=9728&&t<=9838||9839===t||t>=9840&&t<=10087||10088===t||10089===t||10090===t||10091===t||10092===t||10093===t||10094===t||10095===t||10096===t||10097===t||10098===t||10099===t||10100===t||10101===t||t>=10132&&t<=10175||t>=10176&&t<=10180||10181===t||10182===t||t>=10183&&t<=10213||10214===t||10215===t||10216===t||10217===t||10218===t||10219===t||10220===t||10221===t||10222===t||10223===t||t>=10224&&t<=10239||t>=10240&&t<=10495||t>=10496&&t<=10626||10627===t||10628===t||10629===t||10630===t||10631===t||10632===t||10633===t||10634===t||10635===t||10636===t||10637===t||10638===t||10639===t||10640===t||10641===t||10642===t||10643===t||10644===t||10645===t||10646===t||10647===t||10648===t||t>=10649&&t<=10711||10712===t||10713===t||10714===t||10715===t||t>=10716&&t<=10747||10748===t||10749===t||t>=10750&&t<=11007||t>=11008&&t<=11055||t>=11056&&t<=11076||t>=11077&&t<=11078||t>=11079&&t<=11084||t>=11085&&t<=11123||t>=11124&&t<=11125||t>=11126&&t<=11157||11158===t||t>=11159&&t<=11263||t>=11776&&t<=11777||11778===t||11779===t||11780===t||11781===t||t>=11782&&t<=11784||11785===t||11786===t||11787===t||11788===t||11789===t||t>=11790&&t<=11798||11799===t||t>=11800&&t<=11801||11802===t||11803===t||11804===t||11805===t||t>=11806&&t<=11807||11808===t||11809===t||11810===t||11811===t||11812===t||11813===t||11814===t||11815===t||11816===t||11817===t||t>=11818&&t<=11822||11823===t||t>=11824&&t<=11833||t>=11834&&t<=11835||t>=11836&&t<=11839||11840===t||11841===t||11842===t||t>=11843&&t<=11855||t>=11856&&t<=11857||11858===t||t>=11859&&t<=11903||t>=12289&&t<=12291||12296===t||12297===t||12298===t||12299===t||12300===t||12301===t||12302===t||12303===t||12304===t||12305===t||t>=12306&&t<=12307||12308===t||12309===t||12310===t||12311===t||12312===t||12313===t||12314===t||12315===t||12316===t||12317===t||t>=12318&&t<=12319||12320===t||12336===t||64830===t||64831===t||t>=65093&&t<=65094}function at(t,e){void 0===e&&(e={}),e=u({shouldParseSkeletons:!0,requiresOtherClause:!0},e)
var r=new rt(t,e).parse()
if(r.err){var n=SyntaxError(a[r.err.kind])
throw n.location=r.err.location,n.originalMessage=r.err.message,n}return(null==e?void 0:e.captureLocation)||function t(e){e.forEach((function(e){if(delete e.location,E(e)||d(e))for(var r in e.options)delete e.options[r].location,t(e.options[r].value)
else m(e)&&T(e.style)||(p(e)||g(e))&&_(e.style)?delete e.style.location:v(e)&&t(e.children)}))}(r.val),r.val}function st(t,e){var r=e&&e.cache?e.cache:gt,n=e&&e.serializer?e.serializer:ht
return(e&&e.strategy?e.strategy:ft)(t,{cache:r,serializer:n})}function lt(t,e,r,n){var i,o=null==(i=n)||"number"==typeof i||"boolean"==typeof i?n:r(n),a=e.get(o)
return void 0===a&&(a=t.call(this,n),e.set(o,a)),a}function ut(t,e,r){var n=Array.prototype.slice.call(arguments,3),i=r(n),o=e.get(i)
return void 0===o&&(o=t.apply(this,n),e.set(i,o)),o}function ct(t,e,r,n,i){return r.bind(e,t,n,i)}function ft(t,e){return ct(t,this,1===t.length?lt:ut,e.cache.create(),e.serializer)}var ht=function(){return JSON.stringify(arguments)}
function mt(){this.cache=Object.create(null)}mt.prototype.get=function(t){return this.cache[t]},mt.prototype.set=function(t,e){this.cache[t]=e}
var pt,gt={create:function(){return new mt}},Et={variadic:function(t,e){return ct(t,this,ut,e.cache.create(),e.serializer)},monadic:function(t,e){return ct(t,this,lt,e.cache.create(),e.serializer)}}
!function(t){t.MISSING_VALUE="MISSING_VALUE",t.INVALID_VALUE="INVALID_VALUE",t.MISSING_INTL_API="MISSING_INTL_API"}(pt||(pt={}))
var dt,yt=function(t){function e(e,r,n){var i=t.call(this,e)||this
return i.code=r,i.originalMessage=n,i}return o(e,t),e.prototype.toString=function(){return"[formatjs Error: "+this.code+"] "+this.message},e}(Error),vt=function(t){function e(e,r,n,i){return t.call(this,'Invalid values for "'+e+'": "'+r+'". Options are "'+Object.keys(n).join('", "')+'"',pt.INVALID_VALUE,i)||this}return o(e,t),e}(yt),Tt=function(t){function e(e,r,n){return t.call(this,'Value for "'+e+'" must be of type '+r,pt.INVALID_VALUE,n)||this}return o(e,t),e}(yt),_t=function(t){function e(e,r){return t.call(this,'The intl string context variable "'+e+'" was not provided to the string "'+r+'"',pt.MISSING_VALUE,r)||this}return o(e,t),e}(yt)
function bt(t){return"function"==typeof t}function At(t){return{create:function(){return{get:function(e){return t[e]},set:function(e,r){t[e]=r}}}}}!function(t){t[t.literal=0]="literal",t[t.object=1]="object"}(dt||(dt={}))
var Rt,Nt=function(){function t(e,r,n,i){var o,a=this
if(void 0===r&&(r=t.defaultLocale),this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(t){var e=a.formatToParts(t)
if(1===e.length)return e[0].value
var r=e.reduce((function(t,e){return t.length&&e.type===dt.literal&&"string"==typeof t[t.length-1]?t[t.length-1]+=e.value:t.push(e.value),t}),[])
return r.length<=1?r[0]||"":r},this.formatToParts=function(t){return function t(e,r,n,i,o,a,s){if(1===e.length&&f(e[0]))return[{type:dt.literal,value:e[0].value}]
for(var l=[],u=0,c=e;u<c.length;u++){var b=c[u]
if(f(b))l.push({type:dt.literal,value:b.value})
else if(y(b))"number"==typeof a&&l.push({type:dt.literal,value:n.getNumberFormat(r).format(a)})
else{var A=b.value
if(!o||!(A in o))throw new _t(A,s)
var R=o[A]
if(h(b))R&&"string"!=typeof R&&"number"!=typeof R||(R="string"==typeof R||"number"==typeof R?String(R):""),l.push({type:"string"==typeof R?dt.literal:dt.object,value:R})
else if(p(b)){var N="string"==typeof b.style?i.date[b.style]:_(b.style)?b.style.parsedOptions:void 0
l.push({type:dt.literal,value:n.getDateTimeFormat(r,N).format(R)})}else if(g(b))N="string"==typeof b.style?i.time[b.style]:_(b.style)?b.style.parsedOptions:void 0,l.push({type:dt.literal,value:n.getDateTimeFormat(r,N).format(R)})
else if(m(b))(N="string"==typeof b.style?i.number[b.style]:T(b.style)?b.style.parsedOptions:void 0)&&N.scale&&(R*=N.scale||1),l.push({type:dt.literal,value:n.getNumberFormat(r,N).format(R)})
else{if(v(b)){var P=b.children,S=b.value,I=o[S]
if(!bt(I))throw new Tt(S,"function",s)
var L=I(t(P,r,n,i,o,a).map((function(t){return t.value})))
Array.isArray(L)||(L=[L]),l.push.apply(l,L.map((function(t){return{type:"string"==typeof t?dt.literal:dt.object,value:t}})))}if(E(b)){if(!(O=b.options[R]||b.options.other))throw new vt(b.value,R,Object.keys(b.options),s)
l.push.apply(l,t(O.value,r,n,i,o))}else if(d(b)){var O
if(!(O=b.options["="+R])){if(!Intl.PluralRules)throw new yt('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',pt.MISSING_INTL_API,s)
var w=n.getPluralRules(r,{type:b.pluralType}).select(R-(b.offset||0))
O=b.options[w]||b.options.other}if(!O)throw new vt(b.value,R,Object.keys(b.options),s)
l.push.apply(l,t(O.value,r,n,i,o,R-(b.offset||0)))}}}}return function(t){return t.length<2?t:t.reduce((function(t,e){var r=t[t.length-1]
return r&&r.type===dt.literal&&e.type===dt.literal?r.value+=e.value:t.push(e),t}),[])}(l)}(a.ast,a.locales,a.formatters,a.formats,t,void 0,a.message)},this.resolvedOptions=function(){return{locale:Intl.NumberFormat.supportedLocalesOf(a.locales)[0]}},this.getAst=function(){return a.ast},"string"==typeof e){if(this.message=e,!t.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`")
this.ast=t.__parse(e,{ignoreTag:null==i?void 0:i.ignoreTag})}else this.ast=e
if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.")
this.formats=function(t,e){return e?Object.keys(t).reduce((function(r,n){var i,o
return r[n]=(i=t[n],(o=e[n])?u(u(u({},i||{}),o||{}),Object.keys(i).reduce((function(t,e){return t[e]=u(u({},i[e]),o[e]||{}),t}),{})):i),r}),u({},t)):t}(t.formats,n),this.locales=r,this.formatters=i&&i.formatters||(void 0===(o=this.formatterCache)&&(o={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:st((function(){for(var t,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r]
return new((t=Intl.NumberFormat).bind.apply(t,c([void 0],e,!1)))}),{cache:At(o.number),strategy:Et.variadic}),getDateTimeFormat:st((function(){for(var t,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r]
return new((t=Intl.DateTimeFormat).bind.apply(t,c([void 0],e,!1)))}),{cache:At(o.dateTime),strategy:Et.variadic}),getPluralRules:st((function(){for(var t,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r]
return new((t=Intl.PluralRules).bind.apply(t,c([void 0],e,!1)))}),{cache:At(o.pluralRules),strategy:Et.variadic})})}return Object.defineProperty(t,"defaultLocale",{get:function(){return t.memoizedDefaultLocale||(t.memoizedDefaultLocale=(new Intl.NumberFormat).resolvedOptions().locale),t.memoizedDefaultLocale},enumerable:!1,configurable:!0}),t.memoizedDefaultLocale=null,t.__parse=at,t.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},t}()
!function(t){t.FORMAT_ERROR="FORMAT_ERROR",t.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",t.INVALID_CONFIG="INVALID_CONFIG",t.MISSING_DATA="MISSING_DATA",t.MISSING_TRANSLATION="MISSING_TRANSLATION"}(Rt||(Rt={}))
var Pt=function(t){function e(r,n,i){var o=this,a=i?i instanceof Error?i:new Error(String(i)):void 0
return(o=t.call(this,"[@formatjs/intl Error "+r+"] "+n+" \n"+(a?"\n"+a.message+"\n"+a.stack:""))||this).code=r,"function"==typeof Error.captureStackTrace&&Error.captureStackTrace(o,e),o}return o(e,t),e}(Error),St=function(t){function e(e,r){return t.call(this,Rt.UNSUPPORTED_FORMATTER,e,r)||this}return o(e,t),e}(Pt),It=function(t){function e(e,r){return t.call(this,Rt.INVALID_CONFIG,e,r)||this}return o(e,t),e}(Pt),Lt=function(t){function e(e,r){return t.call(this,Rt.MISSING_DATA,e,r)||this}return o(e,t),e}(Pt),Ot=function(t){function e(e,r,n){return t.call(this,Rt.FORMAT_ERROR,e+" \nLocale: "+r+"\n",n)||this}return o(e,t),e}(Pt),wt=function(t){function e(e,r,n,i){var o=t.call(this,e+" \nMessageID: "+(null==n?void 0:n.id)+"\nDefault Message: "+(null==n?void 0:n.defaultMessage)+"\nDescription: "+(null==n?void 0:n.description)+" \n",r,i)||this
return o.descriptor=n,o}return o(e,t),e}(Ot),Ct=function(t){function e(e,r){var n=t.call(this,Rt.MISSING_TRANSLATION,'Missing message: "'+e.id+'" for locale "'+r+'", using '+(e.defaultMessage?"default message":"id")+" as fallback.")||this
return n.descriptor=e,n}return o(e,t),e}(Pt)
function Mt(t,e,r){return void 0===r&&(r={}),e.reduce((function(e,n){return n in t?e[n]=t[n]:n in r&&(e[n]=r[n]),e}),{})}var Dt={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:function(t){}}
function Ut(t){return{create:function(){return{get:function(e){return t[e]},set:function(e,r){t[e]=r}}}}}function Ft(t,e,r,n){var i,o=t&&t[e]
if(o&&(i=o[r]),i)return i
n(new St("No "+e+" format named: "+r))}function Gt(t,e){return Object.keys(t).reduce((function(r,n){return r[n]=u({timeZone:e},t[n]),r}),{})}function kt(t,e){return Object.keys(u(u({},t),e)).reduce((function(r,n){return r[n]=u(u({},t[n]||{}),e[n]||{}),r}),{})}function jt(t,e){if(!e)return t
var r=Nt.formats
return u(u(u({},r),t),{date:kt(Gt(r.date,e),Gt(t.date||{},e)),time:kt(Gt(r.time,e),Gt(t.time||{},e))})}function Vt(t,e,r,n,i){var o=t.locale,a=t.formats,l=t.messages,c=t.defaultLocale,f=t.defaultFormats,h=t.fallbackOnEmptyString,m=t.onError,p=t.timeZone,g=t.defaultRichTextElements
void 0===r&&(r={id:""})
var E=r.id,d=r.defaultMessage
!function(t,e,r){if(void 0===r&&(r=Error),!t)throw new r("[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue")}(!!E)
var y=String(E),v=l&&Object.prototype.hasOwnProperty.call(l,y)&&l[y]
if(Array.isArray(v)&&1===v.length&&v[0].type===s.literal)return v[0].value
if(!n&&v&&"string"==typeof v&&!g)return v.replace(/'\{(.*?)\}'/gi,"{$1}")
if(n=u(u({},g),n||{}),a=jt(a,p),f=jt(f,p),!v){if(!1===h&&""===v)return v
if((!d||o&&o.toLowerCase()!==c.toLowerCase())&&m(new Ct(r,o)),d)try{return e.getMessageFormat(d,c,f,i).format(n)}catch(t){return m(new wt('Error formatting default message for: "'+y+'", rendering default message verbatim',o,r,t)),"string"==typeof d?d:y}return y}try{return e.getMessageFormat(v,o,a,u({formatters:e},i||{})).format(n)}catch(t){m(new wt('Error formatting message: "'+y+'", using '+(d?"default message":"id")+" as fallback.",o,r,t))}if(d)try{return e.getMessageFormat(d,c,f,i).format(n)}catch(t){m(new wt('Error formatting the default message for: "'+y+'", rendering message verbatim',o,r,t))}return"string"==typeof v?v:"string"==typeof d?d:y}var xt=["localeMatcher","formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem"]
function Xt(t,e,r,n){var i=t.locale,o=t.formats,a=t.onError,s=t.timeZone
void 0===n&&(n={})
var l=n.format,c=u(u({},s&&{timeZone:s}),l&&Ft(o,e,l,a)),f=Mt(n,xt,c)
return"time"!==e||f.hour||f.minute||f.second||f.timeStyle||f.dateStyle||(f=u(u({},f),{hour:"numeric",minute:"numeric"})),r(i,f)}function $t(t,e){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n]
var i=r[0],o=r[1],a=void 0===o?{}:o,s="string"==typeof i?new Date(i||0):i
try{return Xt(t,"date",e,a).format(s)}catch(e){t.onError(new Pt(Rt.FORMAT_ERROR,"Error formatting date.",e))}return String(s)}function Bt(t,e){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n]
var i=r[0],o=r[1],a=void 0===o?{}:o,s="string"==typeof i?new Date(i||0):i
try{return Xt(t,"time",e,a).format(s)}catch(e){t.onError(new Pt(Rt.FORMAT_ERROR,"Error formatting time.",e))}return String(s)}function zt(t,e){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n]
var i=r[0],o=r[1],a=r[2],s=void 0===a?{}:a,l=t.timeZone,u=t.locale,c=t.onError,f=Mt(s,xt,l?{timeZone:l}:{})
try{return e(u,f).formatRange(i,o)}catch(t){c(new Pt(Rt.FORMAT_ERROR,"Error formatting date time range.",t))}return String(i)}function Zt(t,e){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n]
var i=r[0],o=r[1],a=void 0===o?{}:o,s="string"==typeof i?new Date(i||0):i
try{return Xt(t,"date",e,a).formatToParts(s)}catch(e){t.onError(new Pt(Rt.FORMAT_ERROR,"Error formatting date.",e))}return[]}function Kt(t,e){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n]
var i=r[0],o=r[1],a=void 0===o?{}:o,s="string"==typeof i?new Date(i||0):i
try{return Xt(t,"time",e,a).formatToParts(s)}catch(e){t.onError(new Pt(Rt.FORMAT_ERROR,"Error formatting time.",e))}return[]}var Yt=["localeMatcher","style","type","fallback"]
function Ht(t,e,r,n){var i=t.locale,o=t.onError
Intl.DisplayNames||o(new yt('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n',pt.MISSING_INTL_API))
var a=Mt(n,Yt)
try{return e(i,a).of(r)}catch(t){o(new Pt(Rt.FORMAT_ERROR,"Error formatting display name.",t))}}var qt=["localeMatcher","type","style"],Wt=Date.now()
function Qt(t,e,r,n){void 0===n&&(n={})
var i=Jt(t,e,r,n).reduce((function(t,e){var r=e.value
return"string"!=typeof r?t.push(r):"string"==typeof t[t.length-1]?t[t.length-1]+=r:t.push(r),t}),[])
return 1===i.length?i[0]:i}function Jt(t,e,r,n){var i=t.locale,o=t.onError
void 0===n&&(n={}),Intl.ListFormat||o(new yt('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n',pt.MISSING_INTL_API))
var a=Mt(n,qt)
try{var s={},l=r.map((function(t,e){if("object"==typeof t){var r=function(t){return Wt+"_"+t+"_"+Wt}(e)
return s[r]=t,r}return String(t)}))
return e(i,a).formatToParts(l).map((function(t){return"literal"===t.type?t:u(u({},t),{value:s[t.value]||t.value})}))}catch(t){o(new Pt(Rt.FORMAT_ERROR,"Error formatting list.",t))}return r}var te=["localeMatcher","type"]
function ee(t,e,r,n){var i=t.locale,o=t.onError
void 0===n&&(n={}),Intl.PluralRules||o(new yt('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',pt.MISSING_INTL_API))
var a=Mt(n,te)
try{return e(i,a).select(r)}catch(t){o(new Ot("Error formatting plural.",i,t))}return"other"}var re=["numeric","style"]
function ne(t,e,r,n,i){void 0===i&&(i={}),n||(n="second"),Intl.RelativeTimeFormat||t.onError(new yt('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n',pt.MISSING_INTL_API))
try{return function(t,e,r){var n=t.locale,i=t.formats,o=t.onError
void 0===r&&(r={})
var a=r.format,s=!!a&&Ft(i,"relative",a,o)||{}
return e(n,Mt(r,re,s))}(t,e,i).format(r,n)}catch(e){t.onError(new Ot("Error formatting relative time.",t.locale,e))}return String(r)}var ie=["localeMatcher","style","currency","currencyDisplay","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem"]
function oe(t,e,r){var n=t.locale,i=t.formats,o=t.onError
void 0===r&&(r={})
var a=r.format,s=a&&Ft(i,"number",a,o)||{}
return e(n,Mt(r,ie,s))}function ae(t,e,r,n){void 0===n&&(n={})
try{return oe(t,e,n).format(r)}catch(e){t.onError(new Pt(Rt.FORMAT_ERROR,"Error formatting number.",e))}return String(r)}function se(t,e,r,n){void 0===n&&(n={})
try{return oe(t,e,n).formatToParts(r)}catch(e){t.onError(new Pt(Rt.FORMAT_ERROR,"Error formatting number.",e))}return[]}function le(t,e){var r=function(t){void 0===t&&(t={dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}})
var e=Intl.RelativeTimeFormat,r=Intl.ListFormat,n=Intl.DisplayNames,i=st((function(){for(var t,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r]
return new((t=Intl.DateTimeFormat).bind.apply(t,c([void 0],e,!1)))}),{cache:Ut(t.dateTime),strategy:Et.variadic}),o=st((function(){for(var t,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r]
return new((t=Intl.NumberFormat).bind.apply(t,c([void 0],e,!1)))}),{cache:Ut(t.number),strategy:Et.variadic}),a=st((function(){for(var t,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r]
return new((t=Intl.PluralRules).bind.apply(t,c([void 0],e,!1)))}),{cache:Ut(t.pluralRules),strategy:Et.variadic})
return{getDateTimeFormat:i,getNumberFormat:o,getMessageFormat:st((function(t,e,r,n){return new Nt(t,e,r,u({formatters:{getNumberFormat:o,getDateTimeFormat:i,getPluralRules:a}},n||{}))}),{cache:Ut(t.message),strategy:Et.variadic}),getRelativeTimeFormat:st((function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r]
return new(e.bind.apply(e,c([void 0],t,!1)))}),{cache:Ut(t.relativeTime),strategy:Et.variadic}),getPluralRules:a,getListFormat:st((function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
return new(r.bind.apply(r,c([void 0],t,!1)))}),{cache:Ut(t.list),strategy:Et.variadic}),getDisplayNames:st((function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
return new(n.bind.apply(n,c([void 0],t,!1)))}),{cache:Ut(t.displayNames),strategy:Et.variadic})}}(e),n=u(u({},Dt),t),i=n.locale,o=n.defaultLocale,a=n.onError
return i?!Intl.NumberFormat.supportedLocalesOf(i).length&&a?a(new Lt('Missing locale data for locale: "'+i+'" in Intl.NumberFormat. Using default locale: "'+o+'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details')):!Intl.DateTimeFormat.supportedLocalesOf(i).length&&a&&a(new Lt('Missing locale data for locale: "'+i+'" in Intl.DateTimeFormat. Using default locale: "'+o+'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details')):(a&&a(new It('"locale" was not configured, using "'+o+'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details')),n.locale=n.defaultLocale||"en"),function(t){var e
t.defaultRichTextElements&&"string"==typeof((e=t.messages||{})?e[Object.keys(e)[0]]:void 0)&&console.warn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution')}(n),u(u({},n),{formatters:r,formatNumber:ae.bind(null,n,r.getNumberFormat),formatNumberToParts:se.bind(null,n,r.getNumberFormat),formatRelativeTime:ne.bind(null,n,r.getRelativeTimeFormat),formatDate:$t.bind(null,n,r.getDateTimeFormat),formatDateToParts:Zt.bind(null,n,r.getDateTimeFormat),formatTime:Bt.bind(null,n,r.getDateTimeFormat),formatDateTimeRange:zt.bind(null,n,r.getDateTimeFormat),formatTimeToParts:Kt.bind(null,n,r.getDateTimeFormat),formatPlural:ee.bind(null,n,r.getPluralRules),formatMessage:Vt.bind(null,n,r),formatList:Qt.bind(null,n,r.getListFormat),formatListToParts:Jt.bind(null,n,r.getListFormat),formatDisplayName:Ht.bind(null,n,r.getDisplayNames)})}const ue={Arabic:"ar",Bulgarian:"bg",Bosnian:"bs",Catalan:"ca",Czech:"cs",Danish:"da",German:"de",Greek:"el",English:"en",Spanish:"es",Estonian:"et",Finnish:"fi",French:"fr",Hebrew:"he",Croatian:"hr",Hungarian:"hu",Indonesian:"id",Italian:"it",Japanese:"ja",Korean:"ko",Lithuanian:"lt",Latvian:"lv",NorwegianBokml:"nb",Dutch:"nl",Polish:"pl",PortugueseBrazil:"pt-BR",PortuguesePortugal:"pt-PT",Romanian:"ro",Russian:"ru",Serbian:"sr",Slovenian:"sl",Slovak:"sk",Swedish:"sv",Thai:"th",Turkish:"tr",Ukrainian:"uk",Vietnamese:"vi",ChineseChina:"zh-CN",ChineseHongKong:"zh-HK",ChineseTaiwan:"zh-TW"},ce=[...Object.values(ue),"en-AU","en-GB","es-ES","es-MX","de-CH","de-DE","it-CH","it-IT"],fe=[ue.Arabic,ue.Hebrew],he=(t,e)=>{const r=t=>t&&"object"==typeof t
return r(t)&&r(e)?(Object.keys(e).forEach(n=>{const i=t[n],o=e[n]
Array.isArray(i)&&Array.isArray(o)?t[n]=i.concat(o):r(i)&&r(o)?t[n]=he(Object.assign({},i),o):t[n]=o}),t):e},me=ue.English
function pe(t=document.documentElement){var e
const r=("[lang]",function t(e){let r
return r=void 0===e||e===document||e===window?null:e.closest("[lang]")||t(e.getRootNode().host),r}(t))
const n=null!==(e=null==r?void 0:r.lang)&&void 0!==e?e:window.navigator.language,i=function(t){let e=me
if(void 0!==t){const r=Object.values(ue),n=r.filter(t=>-1!==t.indexOf("-"))
if(-1!==t.indexOf("-")){const[e,r]=t.split("-")
t=`${e}-${r.toUpperCase()}`}if(!0===n.includes(t))e=t
else{const n=function(t){const e=null==t?void 0:t.match(/^([a-z]{2})-([A-Z]{2})$/)
let r=me
return null!=e&&(null==e?void 0:e.length)>1?r=e[1]:2===(null==t?void 0:t.length)&&t.toLowerCase()===t&&(r=t),r}(t)
!0===r.includes(n)&&(e=n)}}return e}(n),o=function(t){let e=ce.find(e=>e===t)
if(void 0===e&&(e=t),void 0!==e&&-1!==e.indexOf("-")){const[t,r]=e.split("-")
e=`${t}-${r.toUpperCase()}`}return e}(n),a=fe.includes(i)
let s=t.getAttribute("dir")
return"ltr"!==s&&"rtl"!==s&&(s=!0===a?"rtl":"ltr"),{locale:i,rtl:a,formatLocale:o,direction:s}}class ge{constructor(t,e,r){this._componentName=t,this._intl=e,this.direction=r}get locale(){return this._intl.locale}t(t,e,r){const n=`${this._componentName}.${t}`
let i=this._intl.formatMessage({id:n},e,r)
return void 0!==(null==r?void 0:r.fallback)&&i===n&&(i=r.fallback),i}formatRelativeTime(t,e,r){return this._intl.formatRelativeTime(t,e,r)}formatDisplayName(t,e){return this._intl.formatDisplayName(t,e)}formatDate(t,e){return this._intl.formatDate(t,e)}formatNumber(t,e){return this._intl.formatNumber(t,e)}}const Ee=new class{constructor(t={}){this._intls={}
const{assetPath:e="t9n",fileNamePattern:r="{tagName}.t9n.{locale}.json"}=t
this.assetPath=e,this.fileNamePattern=r}getIntlForComponent(t){const{locale:e,direction:r}=pe(t),n=t.tagName.toLowerCase(),i=le({locale:e,messages:{}})
return this._intls[e]=i,new ge(n,i,r)}async loadIntlForComponent(t,e){const{locale:r,direction:i}=pe(t),{fileNamePattern:o,assetPath:a}=this,{strings:s}=await async function(t,e,r){const n=t.tagName.toLowerCase(),{locale:i}=pe(t)
return{strings:await async function(t){const{path:e,locale:r,baseURL:n,fileNamePattern:i="{tagName}.t9n.{locale}.json"}=t,o=t=>i.replace("{tagName}",e).replace("{locale}",t),a=await fetch(`${n}/${o(me)}`),s=await a.json()
let l={}
if(r!==me)try{const t=await fetch(`${n}/${o(r)}`)
l=await t.json()}catch(t){console.warn(`Unable to fetch locale file for ${e} component for locale ${r}`)}return he(s,l)}({path:n,locale:i,baseURL:e,fileNamePattern:r})}}(t,e||Object(n.f)(a),o),l=t.tagName.toLowerCase()
let u=this._intls[r]
return u=le({locale:r,messages:this.parseStrings(s,l,u?u.messages:{})},{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}),this._intls[r]=u,new ge(l,u,i)}parseStrings(t,e,r){return Object.entries(t).reduce((t,[r,n])=>("string"==typeof n?t[`${e}.${r}`]=n:this.parseStrings(n,`${e}.${r}`,t),t),r)}}({assetPath:"locales",fileNamePattern:"{tagName}.i18n.{locale}.json"})}}])
