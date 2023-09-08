(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[48,474,475,476],{1011:function(t,e,n){"use strict"
function i(){return[0,0,0,0]}function r(t){return[t[0],t[1],t[2],t[3]]}function o(t,e,n,i){return[t,e,n,i]}function a(t){const e=[0,0,0,0],n=Math.min(4,t.length)
for(let i=0;i<n;++i)e[i]=t[i]
return e}function s(t,e){return new Float64Array(t,e,4)}function c(){return o(1,1,1,1)}function l(){return o(1,0,0,0)}function u(){return o(0,1,0,0)}function h(){return o(0,0,1,0)}function p(){return o(0,0,0,1)}n.d(e,"a",(function(){return b})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return i})),n.d(e,"f",(function(){return r})),n.d(e,"g",(function(){return o}))
const d=[0,0,0,0],b=c(),f=l(),g=u(),O=h(),m=p()
Object.freeze(Object.defineProperty({__proto__:null,ONES:b,UNIT_W:m,UNIT_X:f,UNIT_Y:g,UNIT_Z:O,ZEROS:d,clone:r,create:i,createView:s,fromArray:a,fromValues:o,ones:c,unitW:p,unitX:l,unitY:u,unitZ:h,zeros:function(){return[0,0,0,0]}},Symbol.toStringTag,{value:"Module"}))},1030:function(t,e,n){"use strict"
var i,r,o,a,s,c,l,u,h,p,d,b,f,g,O,m,y,_,j,v,M,x,T,S,w,E,C,P,k,I,R,A,L,G,N,V,D,F,U,z,H,B,Z,W,q,Y,X,Q,J,K,$,tt,et,nt,it,rt,ot,at,st,ct,lt
n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return y})),n.d(e,"d",(function(){return m})),n.d(e,"e",(function(){return i})),n.d(e,"f",(function(){return s})),n.d(e,"g",(function(){return l})),n.d(e,"h",(function(){return u})),n.d(e,"i",(function(){return h})),n.d(e,"j",(function(){return v})),n.d(e,"k",(function(){return M})),n.d(e,"l",(function(){return x})),n.d(e,"m",(function(){return w})),n.d(e,"n",(function(){return P})),n.d(e,"o",(function(){return k})),n.d(e,"p",(function(){return r})),n.d(e,"q",(function(){return V})),n.d(e,"r",(function(){return D})),n.d(e,"s",(function(){return z})),n.d(e,"t",(function(){return q})),n.d(e,"u",(function(){return Y})),n.d(e,"v",(function(){return X})),n.d(e,"w",(function(){return Q})),n.d(e,"x",(function(){return rt})),n.d(e,"y",(function(){return ot})),n.d(e,"z",(function(){return st})),function(t){t[t.BUTT=0]="BUTT",t[t.ROUND=1]="ROUND",t[t.SQUARE=2]="SQUARE",t[t.UNKNOWN=4]="UNKNOWN"}(i||(i={})),function(t){t[t.BEVEL=0]="BEVEL",t[t.ROUND=1]="ROUND",t[t.MITER=2]="MITER",t[t.UNKNOWN=4]="UNKNOWN"}(r||(r={})),function(t){t[t.SCREEN=0]="SCREEN",t[t.MAP=1]="MAP"}(o||(o={})),function(t){t[t.Tint=0]="Tint",t[t.Ignore=1]="Ignore",t[t.Multiply=99]="Multiply"}(a||(a={})),function(t){t.Both="Both",t.JustBegin="JustBegin",t.JustEnd="JustEnd",t.None="None"}(s||(s={})),function(t){t[t.Mosaic=0]="Mosaic",t[t.Centered=1]="Centered"}(c||(c={})),function(t){t[t.Normal=0]="Normal",t[t.Superscript=1]="Superscript",t[t.Subscript=2]="Subscript"}(l||(l={})),function(t){t[t.MSSymbol=0]="MSSymbol",t[t.Unicode=1]="Unicode"}(u||(u={})),function(t){t[t.Unspecified=0]="Unspecified",t[t.TrueType=1]="TrueType",t[t.PSOpenType=2]="PSOpenType",t[t.TTOpenType=3]="TTOpenType",t[t.Type1=4]="Type1"}(h||(h={})),function(t){t[t.Display=0]="Display",t[t.Map=1]="Map"}(p||(p={})),function(t){t.None="None",t.Loop="Loop",t.Oscillate="Oscillate"}(d||(d={})),function(t){t[t.Z=0]="Z",t[t.X=1]="X",t[t.Y=2]="Y"}(b||(b={})),function(t){t[t.XYZ=0]="XYZ",t[t.ZXY=1]="ZXY",t[t.YXZ=2]="YXZ"}(f||(f={})),function(t){t[t.Rectangle=0]="Rectangle",t[t.RoundedRectangle=1]="RoundedRectangle",t[t.Oval=2]="Oval"}(g||(g={})),function(t){t[t.None=0]="None",t[t.Alpha=1]="Alpha",t[t.Screen=2]="Screen",t[t.Multiply=3]="Multiply",t[t.Add=4]="Add"}(O||(O={})),function(t){t[t.TTB=0]="TTB",t[t.RTL=1]="RTL",t[t.BTT=2]="BTT"}(m||(m={})),function(t){t[t.None=0]="None",t[t.SignPost=1]="SignPost",t[t.FaceNearPlane=2]="FaceNearPlane"}(y||(y={})),function(t){t[t.Float=0]="Float",t[t.String=1]="String",t[t.Boolean=2]="Boolean"}(_||(_={})),function(t){t[t.Intersect=0]="Intersect",t[t.Subtract=1]="Subtract"}(j||(j={})),function(t){t.OpenEnded="OpenEnded",t.Block="Block",t.Crossed="Crossed"}(v||(v={})),function(t){t.FullGeometry="FullGeometry",t.PerpendicularFromFirstSegment="PerpendicularFromFirstSegment",t.ReversedFirstSegment="ReversedFirstSegment",t.PerpendicularToSecondSegment="PerpendicularToSecondSegment",t.SecondSegmentWithTicks="SecondSegmentWithTicks",t.DoublePerpendicular="DoublePerpendicular",t.OppositeToFirstSegment="OppositeToFirstSegment",t.TriplePerpendicular="TriplePerpendicular",t.HalfCircleFirstSegment="HalfCircleFirstSegment",t.HalfCircleSecondSegment="HalfCircleSecondSegment",t.HalfCircleExtended="HalfCircleExtended",t.OpenCircle="OpenCircle",t.CoverageEdgesWithTicks="CoverageEdgesWithTicks",t.GapExtentWithDoubleTicks="GapExtentWithDoubleTicks",t.GapExtentMidline="GapExtentMidline",t.Chevron="Chevron",t.PerpendicularWithArc="PerpendicularWithArc",t.ClosedHalfCircle="ClosedHalfCircle",t.TripleParallelExtended="TripleParallelExtended",t.ParallelWithTicks="ParallelWithTicks",t.Parallel="Parallel",t.PerpendicularToFirstSegment="PerpendicularToFirstSegment",t.ParallelOffset="ParallelOffset",t.OffsetOpposite="OffsetOpposite",t.OffsetSame="OffsetSame",t.CircleWithArc="CircleWithArc",t.DoubleJog="DoubleJog",t.PerpendicularOffset="PerpendicularOffset",t.LineExcludingLastSegment="LineExcludingLastSegment",t.MultivertexArrow="MultivertexArrow",t.CrossedArrow="CrossedArrow",t.ChevronArrow="ChevronArrow",t.ChevronArrowOffset="ChevronArrowOffset",t.PartialFirstSegment="PartialFirstSegment",t.Arch="Arch",t.CurvedParallelTicks="CurvedParallelTicks",t.Arc90Degrees="Arc90Degrees"}(M||(M={})),function(t){t.Mitered="Mitered",t.Bevelled="Bevelled",t.Rounded="Rounded",t.Square="Square",t.TrueBuffer="TrueBuffer"}(x||(x={})),function(t){t.ClosePath="ClosePath",t.ConvexHull="ConvexHull",t.RectangularBox="RectangularBox"}(T||(T={})),function(t){t.BeginningOfLine="BeginningOfLine",t.EndOfLine="EndOfLine"}(S||(S={})),function(t){t.Mitered="Mitered",t.Bevelled="Bevelled",t.Rounded="Rounded",t.Square="Square"}(w||(w={})),function(t){t.Fast="Fast",t.Accurate="Accurate"}(E||(E={})),function(t){t.BeginningOfLine="BeginningOfLine",t.EndOfLine="EndOfLine"}(C||(C={})),function(t){t.Sinus="Sinus",t.Square="Square",t.Triangle="Triangle",t.Random="Random"}(P||(P={})),function(t){t[t.None=0]="None",t[t.Default=1]="Default",t[t.Force=2]="Force"}(k||(k={})),function(t){t[t.Buffered=0]="Buffered",t[t.Left=1]="Left",t[t.Right=2]="Right",t[t.AlongLine=3]="AlongLine"}(I||(I={})),function(t){t[t.Linear=0]="Linear",t[t.Rectangular=1]="Rectangular",t[t.Circular=2]="Circular",t[t.Buffered=3]="Buffered"}(R||(R={})),function(t){t[t.Discrete=0]="Discrete",t[t.Continuous=1]="Continuous"}(A||(A={})),function(t){t[t.AcrossLine=0]="AcrossLine",t[t.AloneLine=1]="AloneLine"}(L||(L={})),function(t){t[t.Left=0]="Left",t[t.Right=1]="Right",t[t.Center=2]="Center",t[t.Justify=3]="Justify"}(G||(G={})),function(t){t[t.Base=0]="Base",t[t.MidPoint=1]="MidPoint",t[t.ThreePoint=2]="ThreePoint",t[t.FourPoint=3]="FourPoint",t[t.Underline=4]="Underline",t[t.CircularCW=5]="CircularCW",t[t.CircularCCW=6]="CircularCCW"}(N||(N={})),function(t){t.Butt="Butt",t.Round="Round",t.Square="Square"}(V||(V={})),function(t){t.NoConstraint="NoConstraint",t.HalfPattern="HalfPattern",t.HalfGap="HalfGap",t.FullPattern="FullPattern",t.FullGap="FullGap",t.Custom="Custom"}(D||(D={})),function(t){t[t.None=-1]="None",t[t.Custom=0]="Custom",t[t.Circle=1]="Circle",t[t.OpenArrow=2]="OpenArrow",t[t.ClosedArrow=3]="ClosedArrow",t[t.Diamond=4]="Diamond"}(F||(F={})),function(t){t[t.ExtraLeading=0]="ExtraLeading",t[t.Multiple=1]="Multiple",t[t.Exact=2]="Exact"}(U||(U={})),function(t){t.Bevel="Bevel",t.Round="Round",t.Miter="Miter"}(z||(z={})),function(t){t[t.Default=0]="Default",t[t.String=1]="String",t[t.Numeric=2]="Numeric"}(H||(H={})),function(t){t[t.InsidePolygon=0]="InsidePolygon",t[t.PolygonCenter=1]="PolygonCenter",t[t.RandomlyInsidePolygon=2]="RandomlyInsidePolygon"}(B||(B={})),function(t){t[t.Tint=0]="Tint",t[t.Replace=1]="Replace",t[t.Multiply=2]="Multiply"}(Z||(Z={})),function(t){t[t.ClipAtBoundary=0]="ClipAtBoundary",t[t.RemoveIfCenterOutsideBoundary=1]="RemoveIfCenterOutsideBoundary",t[t.DoNotTouchBoundary=2]="DoNotTouchBoundary",t[t.DoNotClip=3]="DoNotClip"}(W||(W={})),function(t){t.NoConstraint="NoConstraint",t.WithMarkers="WithMarkers",t.WithFullGap="WithFullGap",t.WithHalfGap="WithHalfGap",t.Custom="Custom"}(q||(q={})),function(t){t.Fixed="Fixed",t.Random="Random",t.RandomFixedQuantity="RandomFixedQuantity"}(Y||(Y={})),function(t){t.LineMiddle="LineMiddle",t.LineBeginning="LineBeginning",t.LineEnd="LineEnd",t.SegmentMidpoint="SegmentMidpoint"}(X||(X={})),function(t){t.OnPolygon="OnPolygon",t.CenterOfMass="CenterOfMass",t.BoundingBoxCenter="BoundingBoxCenter"}(Q||(Q={})),function(t){t[t.Low=0]="Low",t[t.Medium=1]="Medium",t[t.High=2]="High"}(J||(J={})),function(t){t[t.MarkerCenter=0]="MarkerCenter",t[t.MarkerBounds=1]="MarkerBounds"}(K||(K={})),function(t){t[t.None=0]="None",t[t.PropUniform=1]="PropUniform",t[t.PropNonuniform=2]="PropNonuniform",t[t.DifUniform=3]="DifUniform",t[t.DifNonuniform=4]="DifNonuniform"}($||($={})),function(t){t.Tube="Tube",t.Strip="Strip",t.Wall="Wall"}(tt||(tt={})),function(t){t[t.Random=0]="Random",t[t.Increasing=1]="Increasing",t[t.Decreasing=2]="Decreasing",t[t.IncreasingThenDecreasing=3]="IncreasingThenDecreasing"}(et||(et={})),function(t){t[t.Relative=0]="Relative",t[t.Absolute=1]="Absolute"}(nt||(nt={})),function(t){t[t.Normal=0]="Normal",t[t.LowerCase=1]="LowerCase",t[t.Allcaps=2]="Allcaps"}(it||(it={})),function(t){t[t.LTR=0]="LTR",t[t.RTL=1]="RTL"}(rt||(rt={})),function(t){t.Draft="Draft",t.Picture="Picture",t.Text="Text"}(ot||(ot={})),function(t){t[t.Top=0]="Top",t[t.Center=1]="Center",t[t.Baseline=2]="Baseline",t[t.Bottom=3]="Bottom"}(at||(at={})),function(t){t[t.Right=0]="Right",t[t.Upright=1]="Upright"}(st||(st={})),function(t){t[t.Small=0]="Small",t[t.Medium=1]="Medium",t[t.Large=2]="Large"}(ct||(ct={})),function(t){t[t.Calm=0]="Calm",t[t.Rippled=1]="Rippled",t[t.Slight=2]="Slight",t[t.Moderate=3]="Moderate"}(lt||(lt={}))},1031:function(t,e,n){"use strict"
function i(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function r(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]]}function o(t,e,n,i,r,o,a,s,c,l,u,h,p,d,b,f){return[t,e,n,i,r,o,a,s,c,l,u,h,p,d,b,f]}function a(t,e){return new Float64Array(t,e,16)}n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return i})),n.d(e,"e",(function(){return o}))
const s=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]
Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:s,clone:r,create:i,createView:a,fromValues:o},Symbol.toStringTag,{value:"Module"}))},1077:function(t,e,n){"use strict"
var i
function r(t){return"global"===t?i.Global:i.Local}function o(t){return t===i.Global?"global":"local"}n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),function(t){t[t.Global=1]="Global",t[t.Local=2]="Local"}(i||(i={}))},1148:function(t,e,n){"use strict"
n.d(e,"a",(function(){return C})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return m})),n.d(e,"e",(function(){return E}))
var i,r,o,a=n(1007),s=(n(235),n(233)),c=n(23),l=n(1343),u=n(1056),h=n(973),p=n(978),d=n(1152),b=n(1302),f=n(1469),g=n(1491),O=n(1376)
function m(){return new S.Scheduler}(o=i||(i={}))[o.YIELD=1]="YIELD",function(t){t.RESOURCE_CONTROLLER_IMMEDIATE="immediate",t.RESOURCE_CONTROLLER="schedule",t.SLIDE="slide",t.STREAM_DATA_LOADER="stream loader",t.ELEVATION_QUERY="elevation query",t.TERRAIN_SURFACE="terrain",t.SURFACE_GEOMETRY_UPDATES="surface geometry updates",t.LOD_RENDERER="LoD renderer",t.GRAPHICS_CORE="Graphics3D",t.I3S_CONTROLLER="I3S",t.POINT_CLOUD_LAYER="point cloud",t.FEATURE_TILE_FETCHER="feature fetcher",t.OVERLAY="overlay",t.STAGE="stage",t.GRAPHICS_DECONFLICTOR="graphics deconflictor",t.FILTER_VISIBILITY="Graphics3D filter visibility",t.SCALE_VISIBILITY="Graphics3D scale visibility",t.FRUSTUM_VISIBILITY="Graphics3D frustum visibility",t.POINT_OF_INTEREST_FREQUENT="POI frequent",t.POINT_OF_INTEREST_INFREQUENT="POI infrequent",t.LABELER="labeler",t.FEATURE_QUERY_ENGINE="feature query",t.FEATURE_TILE_TREE="feature tile tree",t.FEATURE_TILE_TREE_ACTIVE="fast feature tile tree",t.ELEVATION_ALIGNMENT="elevation alignment",t.TEXT_TEXTURE_ATLAS="text texture atlas",t.TEXTURE_UNLOAD="texture unload",t.LINE_OF_SIGHT_TOOL="line of sight tool",t.LINE_OF_SIGHT_TOOL_INTERACTIVE="interactive line of sight tool",t.ELEVATION_PROFILE="elevation profile",t.SNAPPING="snapping",t.SHADOW_ACCUMULATOR="shadow accumulator",t.CLOUDS_GENERATOR="clouds generator",t[t.TEST_PRIO=1]="TEST_PRIO"}(r||(r={}))
const y=new Map([[r.RESOURCE_CONTROLLER_IMMEDIATE,0],[r.RESOURCE_CONTROLLER,4],[r.SLIDE,0],[r.STREAM_DATA_LOADER,0],[r.ELEVATION_QUERY,0],[r.TERRAIN_SURFACE,1],[r.SURFACE_GEOMETRY_UPDATES,1],[r.LOD_RENDERER,2],[r.GRAPHICS_CORE,2],[r.I3S_CONTROLLER,2],[r.POINT_CLOUD_LAYER,2],[r.FEATURE_TILE_FETCHER,2],[r.OVERLAY,4],[r.STAGE,4],[r.GRAPHICS_DECONFLICTOR,4],[r.FILTER_VISIBILITY,4],[r.SCALE_VISIBILITY,4],[r.FRUSTUM_VISIBILITY,4],[r.CLOUDS_GENERATOR,4],[r.POINT_OF_INTEREST_FREQUENT,6],[r.POINT_OF_INTEREST_INFREQUENT,30],[r.LABELER,8],[r.FEATURE_QUERY_ENGINE,8],[r.FEATURE_TILE_TREE,16],[r.FEATURE_TILE_TREE_ACTIVE,0],[r.ELEVATION_ALIGNMENT,12],[r.TEXT_TEXTURE_ATLAS,12],[r.TEXTURE_UNLOAD,12],[r.LINE_OF_SIGHT_TOOL,16],[r.LINE_OF_SIGHT_TOOL_INTERACTIVE,0],[r.SNAPPING,0],[r.SHADOW_ACCUMULATOR,30]])
function _(t){return y.has(t)?y.get(t):"number"==typeof t?t:1}const j=Object(d.a)(6.5),v=Object(d.a)(1),M=Object(d.a)(30),x=Object(d.a)(1e3/30),T=Object(d.a)(100)
var S,w
!function(t){t.Scheduler=class{get updating(){return this._updating.get()}_updatingChanged(){this._updating.set(this._tasks.some(t=>t.needsUpdate))}constructor(){this._updating=new b.a(!0),this._microTaskQueued=!1,this._frameNumber=0,this.performanceInfo={total:new l.a("total"),tasks:new Map},this._frameTaskTimes=new Map,this._budget=new n,this._state=O.a.INTERACTING,this._tasks=new u.a,this._runQueue=new u.a,this._load=0,this._idleStateCallbacks=new u.a,this._idleUpdatesStartFired=!1,this._forceTask=!1,this._debug=!1,this._debugHandle=Object(p.f)(()=>g.a.SCHEDULER_LOG_SLOW_TASKS,t=>this._debug=t,p.a)
for(const t of Object.keys(r))this.performanceInfo.tasks.set(r[t],new l.a(r[t]))
const t=this
this._test={FRAME_SAFETY_BUDGET:j,INTERACTING_BUDGET:x,IDLE_BUDGET:T,get availableBudget(){return t._budget.budget},usedBudget:0,getBudget:()=>t._budget,setBudget:e=>t._budget=e,updateTask:t=>this._updateTask(t),getState:t=>this._getState(t),getRuntime:t=>this._getRuntime(t),frameTaskTimes:this._frameTaskTimes,resetRuntimes:()=>this._resetRuntimes(),getRunning:()=>this._getRunning()}}destroy(){this._tasks.toArray().forEach(t=>t.remove()),this._tasks.clear(),Object(c.s)(this._debugHandle),this._microTaskQueued=!1,this._updatingChanged()}taskRunningChanged(t){this._updatingChanged(),t&&this._budget.remaining>0&&!this._microTaskQueued&&(this._microTaskQueued=!0,queueMicrotask(()=>{this._microTaskQueued&&(this._microTaskQueued=!1,this._budget.remaining>0&&this._schedule()&&this.frame())}))}registerTask(t,n){const i=_(t),r=new e(this,t,n,i)
return this._tasks.push(r),this._updatingChanged(),this.performanceInfo.tasks.has(t)||this.performanceInfo.tasks.set(t,new l.a(t)),r}registerIdleStateCallbacks(t,e){const n={idleBegin:t,idleEnd:e}
this._idleStateCallbacks.push(n),this.state===O.a.IDLE&&this._idleUpdatesStartFired&&n.idleBegin()
const i=this
return{remove:()=>this._removeIdleStateCallbacks(n),set idleBegin(t){i._idleUpdatesStartFired&&(n.idleEnd(),i._state===O.a.IDLE&&t()),n.idleBegin=t},set idleEnd(t){n.idleEnd=t}}}get load(){return this._load}set state(t){this._state!==t&&(this._state=t,this.state!==O.a.IDLE&&this._idleUpdatesStartFired&&(this._idleUpdatesStartFired=!1,this._idleStateCallbacks.forAll(t=>t.idleEnd())))}get state(){return this._state}updateBudget(t){this._test.usedBudget=0,++this._frameNumber
let e=j,n=t.frameDuration,i=v
switch(this.state){case O.a.IDLE:e=Object(d.a)(0),n=Object(d.a)(Math.max(T,t.frameDuration)),i=M
break
case O.a.INTERACTING:n=Object(d.a)(Math.max(x,t.frameDuration))
case O.a.ANIMATING:}return n=Object(d.a)(n-t.elapsedFrameTime-e),this.state!==O.a.IDLE&&n<v&&!this._forceTask?(this._forceTask=!0,!1):(n=Object(d.a)(Math.max(n,i)),this._budget.reset(n,this.state),this._updateLoad(),this._schedule())}frame(){switch(this._forceTask=!1,this._microTaskQueued=!1,this.state){case O.a.IDLE:this._idleUpdatesStartFired||(this._idleUpdatesStartFired=!0,this._idleStateCallbacks.forAll(t=>t.idleBegin())),this._runIdle()
break
case O.a.INTERACTING:this._runInteracting()
break
default:this._runAnimating()}this._test.usedBudget=this._budget.elapsed}stopFrame(){this._budget.reset(Object(d.a)(0),this._state),this._budget.madeProgress()}_removeIdleStateCallbacks(t){this._idleUpdatesStartFired&&t.idleEnd(),this._idleStateCallbacks.removeUnordered(t)}removeTask(t){this._tasks.removeUnordered(t),this._runQueue.removeUnordered(t),this._updatingChanged()}_updateTask(t){this._tasks.forAll(e=>{e.name===t&&e.setPriority(t)})}_getState(t){if(this._runQueue.some(e=>e.name===t))return w.SCHEDULED
let e=w.IDLE
return this._tasks.forAll(n=>{n.name===t&&n.needsUpdate&&(n.schedulePriority<=1?e=w.READY:e!==w.READY&&(e=w.WAITING))}),e}_getRuntime(t){let e=0
return this._tasks.forAll(n=>{n.name===t&&(e+=n.runtime)}),e}_resetRuntimes(){this._tasks.forAll(t=>t.runtime=0)}_getRunning(){const t=new Map
if(this._tasks.forAll(e=>{e.needsUpdate&&t.set(e.name,(t.get(e.name)||0)+1)}),0===t.size)return null
let e=""
return t.forEach((t,n)=>{e+=t>1?` ${t}x ${n}`:" "+n}),e}_runIdle(){this._run()}_runInteracting(){this._run()}_runAnimating(){this._run()}_updateLoad(){const t=this._tasks.reduce((t,e)=>e.needsUpdate?++t:t,0)
this._load=.9*this._load+t*(1-.9)}_schedule(){for(this._runQueue.filterInPlace(t=>!!t.needsUpdate||(t.schedulePriority=t.basePriority,!1)),this._tasks.forAll(t=>{0===t.basePriority&&t.needsUpdate&&!this._runQueue.includes(t)&&t.blockFrame!==this._frameNumber&&this._runQueue.unshift(t)});0===this._runQueue.length;){let t=!1,e=0
if(this._tasks.forAll(n=>{n.needsUpdate&&0!==n.schedulePriority&&0!==n.basePriority&&n.blockFrame!==this._frameNumber&&(t=!0,e=Math.max(e,n.basePriority),1===n.schedulePriority?(n.schedulePriority=0,this._runQueue.push(n)):--n.schedulePriority)}),!t)return this._updatingChanged(),!1}return this._updatingChanged(),!0}_run(){const t=this._budget.now()
this._startFrameTaskTimes()
do{for(;this._runQueue.length>0;){const e=this._budget.now(),n=this._runQueue.pop()
this._budget.resetProgress()
try{n.task.runTask(this._budget)===i.YIELD&&(n.blockFrame=this._frameNumber)}catch(t){s.a.getLogger("esri.views.support.Scheduler").error(`Exception in task "${n.name}"`,t)}!this._budget.hasProgressed&&n.blockFrame!==this._frameNumber&&n.needsUpdate&&(n.name,r.I3S_CONTROLLER,n.blockFrame=this._frameNumber),n.schedulePriority=n.basePriority
const o=this._budget.now()-e
if(n.runtime+=o,this._frameTaskTimes.set(n.priority,this._frameTaskTimes.get(n.priority)+o),this._debug&&o>2*this._budget.budget&&console.log("Task",n.name,"used",o,"of max",this._budget.budget,"ms"),this._budget.remaining<=0)return this._updatingChanged(),void this._recordFrameTaskTimes(this._budget.now()-t)}}while(this._schedule())
this._updatingChanged(),this._recordFrameTaskTimes(this._budget.now()-t)}_startFrameTaskTimes(){for(const t of Object.keys(r))this._frameTaskTimes.set(r[t],0)}_recordFrameTaskTimes(t){this._frameTaskTimes.forEach((t,e)=>this.performanceInfo.tasks.get(e).record(t)),this.performanceInfo.total.record(t)}get test(){return this._test}}
class e{get task(){return this._task.get()}get updating(){return this._queue.running}constructor(t,e,n,i){this._scheduler=t,this.name=e,this._basePriority=i,this.blockFrame=0,this.runtime=0,this._queue=new f.a,this._handles=new a.a,this.schedulePriority=this._basePriority,this._task=new b.a(Object(c.l)(n)?n:this._queue),this._handles.add(Object(p.g)(()=>this.task.running,e=>t.taskRunningChanged(e)))}remove(){this.processQueue(E),this._scheduler.removeTask(this),this.schedule=C.schedule,this.reschedule=C.reschedule,this._handles.destroy()}get basePriority(){return this._basePriority}setPriority(t){this.name=t
const e=_(t)
0!==this._basePriority&&0===this.schedulePriority||(this.schedulePriority=e),this._basePriority=e}get priority(){return this.name}set priority(t){this.setPriority(t)}get needsUpdate(){return this.updating||this.task.running}schedule(t,e,n){return this._queue.push(t,e,n)}reschedule(t,e,n){return this._queue.unshift(t,e,n)}processQueue(t){this._queue.runTask(t)}}class n{constructor(){this._begin="undefined"!=typeof performance?performance.now():0,this._budget=0,this._state=O.a.IDLE,this._done=!1,this._progressed=!1,this._enabled=!0}run(t){return!this.done&&(!0===t()&&this.madeProgress(),!0)}get done(){return this._done}get budget(){return this._budget}madeProgress(){return this._progressed=!0,this._done=this.elapsed>=this._budget&&this._enabled,this._done}get state(){return this._state}get enabled(){return this._enabled}set enabled(t){this._enabled=t}reset(t,e){this._begin=this.now(),this._budget=t,this._state=e,this.resetProgress()}get remaining(){return Math.max(this._budget-this.elapsed,0)}now(){return performance.now()}get elapsed(){return performance.now()-this._begin}resetProgress(){this._progressed=!1,this._done=!1}get hasProgressed(){return this._progressed}}t.Budget=n}(S||(S={})),function(t){t.SCHEDULED="s",t.READY="r",t.WAITING="w",t.IDLE="i"}(w||(w={}))
const E=(()=>{const t=new S.Budget
return t.enabled=!1,t})(),C=new class{remove(){}processQueue(){}schedule(t,e,n){try{if(Object(h.k)(e)){const t=Object(h.c)()
return n?Promise.resolve(n(t)):Promise.reject(t)}return Object(h.u)(t(E))}catch(t){return Promise.reject(t)}}reschedule(t,e,n){return this.schedule(t,e,n)}}},1160:function(t,e,n){"use strict"
function i(){return[1,0,0,0,1,0,0,0,1]}function r(t,e,n,i,r,o,a,s,c){return[t,e,n,i,r,o,a,s,c]}function o(t,e){return new Float64Array(t,e,9)}n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),Object.freeze(Object.defineProperty({__proto__:null,clone:function(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8]]},create:i,createView:o,fromValues:r},Symbol.toStringTag,{value:"Module"}))},1172:function(t,e,n){"use strict"
n.d(e,"a",(function(){return g})),n.d(e,"b",(function(){return O})),n.d(e,"c",(function(){return d})),n.d(e,"d",(function(){return b})),n.d(e,"e",(function(){return f}))
var i=n(1207),r=n(1214),o=n(1160),a=n(1031),s=n(1323),c=n(1026),l=n(981),u=n(1011)
class h{constructor(t,e,n){this._itemByteSize=t,this._itemCreate=e,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(n/this._itemByteSize)}get(){0===this._itemsPtr&&Object(r.a)(()=>this._reset())
const t=Math.floor(this._itemsPtr/this._itemsPerBuffer)
for(;this._buffers.length<=t;){const t=new ArrayBuffer(this._itemsPerBuffer*this._itemByteSize)
for(let e=0;e<this._itemsPerBuffer;++e)this._items.push(this._itemCreate(t,e*this._itemByteSize))
this._buffers.push(t)}return this._items[this._itemsPtr++]}_reset(){const t=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1)
for(;this._buffers.length>t;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer
this._itemsPtr=0}static createVec2f64(t=p){return new h(16,c.f,t)}static createVec3f64(t=p){return new h(24,l.e,t)}static createVec4f64(t=p){return new h(32,u.c,t)}static createMat3f64(t=p){return new h(72,o.a,t)}static createMat4f64(t=p){return new h(128,a.b,t)}static createQuatf64(t=p){return new h(32,s.d,t)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this._itemByteSize}}}const p=4*i.a.KILOBYTES,d=h.createVec2f64(),b=h.createVec3f64(),f=h.createVec4f64(),g=(h.createMat3f64(),h.createMat4f64()),O=h.createQuatf64()},1215:function(t,e,n){"use strict"
n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return h})),n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return o})),n.d(e,"e",(function(){return p})),n.d(e,"f",(function(){return r})),n.d(e,"g",(function(){return s})),n.d(e,"h",(function(){return c})),n.d(e,"i",(function(){return l})),n.d(e,"j",(function(){return u}))
var i=n(1016)
function r(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t}function o(t,e,n,i,r,o,a){return t[0]=e,t[1]=n,t[2]=i,t[3]=r,t[4]=o,t[5]=a,t}function a(t,e){const n=e[0],i=e[1],r=e[2],o=e[3],a=e[4],s=e[5]
let c=n*o-i*r
return c?(c=1/c,t[0]=o*c,t[1]=-i*c,t[2]=-r*c,t[3]=n*c,t[4]=(r*s-o*a)*c,t[5]=(i*a-n*s)*c,t):null}function s(t,e,n){const i=e[0],r=e[1],o=e[2],a=e[3],s=e[4],c=e[5],l=n[0],u=n[1],h=n[2],p=n[3],d=n[4],b=n[5]
return t[0]=i*l+o*u,t[1]=r*l+a*u,t[2]=i*h+o*p,t[3]=r*h+a*p,t[4]=i*d+o*b+s,t[5]=r*d+a*b+c,t}function c(t,e,n){const i=e[0],r=e[1],o=e[2],a=e[3],s=e[4],c=e[5],l=Math.sin(n),u=Math.cos(n)
return t[0]=i*u+o*l,t[1]=r*u+a*l,t[2]=i*-l+o*u,t[3]=r*-l+a*u,t[4]=s,t[5]=c,t}function l(t,e,n){const i=e[0],r=e[1],o=e[2],a=e[3],s=e[4],c=e[5],l=n[0],u=n[1]
return t[0]=i*l,t[1]=r*l,t[2]=o*u,t[3]=a*u,t[4]=s,t[5]=c,t}function u(t,e,n){const i=e[0],r=e[1],o=e[2],a=e[3],s=e[4],c=e[5],l=n[0],u=n[1]
return t[0]=i,t[1]=r,t[2]=o,t[3]=a,t[4]=i*l+o*u+s,t[5]=r*l+a*u+c,t}function h(t,e){const n=Math.sin(e),i=Math.cos(e)
return t[0]=i,t[1]=n,t[2]=-n,t[3]=i,t[4]=0,t[5]=0,t}function p(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=e[1],t[4]=0,t[5]=0,t}function d(t,e){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=e[0],t[5]=e[1],t}function b(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t[3]=e[3]-n[3],t[4]=e[4]-n[4],t[5]=e[5]-n[5],t}const f=s,g=b
Object.freeze(Object.defineProperty({__proto__:null,add:function(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t[3]=e[3]+n[3],t[4]=e[4]+n[4],t[5]=e[5]+n[5],t},copy:function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t},determinant:function(t){return t[0]*t[3]-t[1]*t[2]},equals:function(t,e){const n=t[0],r=t[1],o=t[2],a=t[3],s=t[4],c=t[5],l=e[0],u=e[1],h=e[2],p=e[3],d=e[4],b=e[5],f=Object(i.c)()
return Math.abs(n-l)<=f*Math.max(1,Math.abs(n),Math.abs(l))&&Math.abs(r-u)<=f*Math.max(1,Math.abs(r),Math.abs(u))&&Math.abs(o-h)<=f*Math.max(1,Math.abs(o),Math.abs(h))&&Math.abs(a-p)<=f*Math.max(1,Math.abs(a),Math.abs(p))&&Math.abs(s-d)<=f*Math.max(1,Math.abs(s),Math.abs(d))&&Math.abs(c-b)<=f*Math.max(1,Math.abs(c),Math.abs(b))},exactEquals:function(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]&&t[4]===e[4]&&t[5]===e[5]},frob:function(t){return Math.sqrt(t[0]**2+t[1]**2+t[2]**2+t[3]**2+t[4]**2+t[5]**2+1)},fromRotation:h,fromScaling:p,fromTranslation:d,identity:r,invert:a,mul:f,multiply:s,multiplyScalar:function(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t[4]=e[4]*n,t[5]=e[5]*n,t},multiplyScalarAndAdd:function(t,e,n,i){return t[0]=e[0]+n[0]*i,t[1]=e[1]+n[1]*i,t[2]=e[2]+n[2]*i,t[3]=e[3]+n[3]*i,t[4]=e[4]+n[4]*i,t[5]=e[5]+n[5]*i,t},rotate:c,scale:l,set:o,str:function(t){return"mat2d("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+")"},sub:g,subtract:b,translate:u},Symbol.toStringTag,{value:"Module"}))},1216:function(t,e,n){"use strict"
n.d(e,"a",(function(){return g})),n.d(e,"b",(function(){return p})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return f})),n.d(e,"e",(function(){return u})),n.d(e,"f",(function(){return d})),n.d(e,"g",(function(){return b})),n.d(e,"h",(function(){return h}))
var i=n(445),r=n(1366),o=n(985),a=n(981),s=n(1172)
function c(t){return t?l(Object(a.d)(t.origin),Object(a.d)(t.direction)):l(Object(a.f)(),Object(a.f)())}function l(t,e){return{origin:t,direction:e}}function u(t,e){return Object(i.e)(t.origin,e.origin)&&Object(i.e)(t.direction,e.direction)}function h(t,e){const n=O.get()
return n.origin=t,n.direction=e,n}function p(t,e=c()){return b(t.origin,t.direction,e)}function d(t,e,n=c()){return Object(o.l)(n.origin,t),Object(o.k)(n.direction,e,t),n}function b(t,e,n=c()){return Object(o.l)(n.origin,t),Object(o.l)(n.direction,e),n}function f(t,e){const n=Object(o.o)(s.d.get(),Object(o.w)(s.d.get(),t.direction),Object(o.k)(s.d.get(),e,t.origin))
return Object(o.n)(n,n)}function g(t,e,n){const i=Object(o.n)(t.direction,Object(o.k)(n,e,t.origin))
return Object(o.j)(n,t.origin,Object(o.p)(n,t.direction,i)),n}const O=new r.a(()=>c())},1230:function(t,e,n){"use strict"
function i(t,e,n,i){return function(t){return"function"==typeof t}(t)?t(e,n,i):t}function r(t){return[t.r,t.g,t.b,t.a]}function o(t){let e=t.length
for(;e--;)if(!" /-,\n".includes(t.charAt(e)))return!1
return!0}function a(t,e){const n=[]
let i=0,r=-1
do{if(r=t.indexOf("[",i),r>=i){if(r>i){const e=t.substr(i,r-i)
n.push([e,null,o(e)])}if(i=r+1,r=t.indexOf("]",i),r>=i){if(r>i){const o=e[t.substr(i,r-i)]
o&&n.push([null,o,!1])}i=r+1}}}while(-1!==r)
if(i<t.length-1){const e=t.substr(i)
n.push([e,null,o(e)])}return n}function s(t,e,n){let i="",r=null
for(const n of e){const[e,o,a]=n
if(e)a?r=e:(r&&(i+=r,r=null),i+=e)
else{const e=t.attributes[o]
e&&(r&&(i+=r,r=null),i+=e)}}return l(i,n)}function c(t,e,n){const i=a(e,t)
return t=>s(t,i,n)}function l(t,e){switch("string"!=typeof t&&(t=String(t)),e){case"LowerCase":return t.toLowerCase()
case"Allcaps":return t.toUpperCase()
default:return t}}function u(t,e,n,i,r,o,a=!0){const s=e/r,c=n/o,l=Math.ceil(s/2),u=Math.ceil(c/2)
for(let n=0;n<o;n++)for(let h=0;h<r;h++){const p=4*(h+(a?o-n-1:n)*r)
let d=0,b=0,f=0,g=0,O=0,m=0,y=0
const _=(n+.5)*c
for(let i=Math.floor(n*c);i<(n+1)*c;i++){const n=Math.abs(_-(i+.5))/u,r=(h+.5)*s,o=n*n
for(let n=Math.floor(h*s);n<(h+1)*s;n++){let a=Math.abs(r-(n+.5))/l
const s=Math.sqrt(o+a*a)
s>=-1&&s<=1&&(d=2*s*s*s-3*s*s+1,d>0&&(a=4*(n+i*e),y+=d*t[a+3],f+=d,t[a+3]<255&&(d=d*t[a+3]/250),g+=d*t[a],O+=d*t[a+1],m+=d*t[a+2],b+=d))}}i[p]=g/b,i[p+1]=O/b,i[p+2]=m/b,i[p+3]=y/f}}function h(t){return t?{r:t[0],g:t[1],b:t[2],a:t[3]/255}:{r:0,g:0,b:0,a:0}}function p(t){var e,n
return null!=(e=null==(n=t.data)?void 0:n.symbol)?e:null}function d(t){return"CIMVectorMarker"===t.type||"CIMPictureMarker"===t.type||"CIMBarChartMarker"===t.type||"CIMCharacterMarker"===t.type||"CIMPieChartMarker"===t.type||"CIMStackedBarChartMarker"===t.type}function b(t){return"CIMGradientStroke"===t.type||"CIMPictureStroke"===t.type||"CIMSolidStroke"===t.type}function f(t){return null!=t&&("CIMGradientFill"===t.type||"CIMHatchFill"===t.type||"CIMPictureFill"===t.type||"CIMSolidFill"===t.type||"CIMWaterFill"===t.type)}function g(t){return null!=t&&("CIMMarkerPlacementAlongLineRandomSize"===t.type||"CIMMarkerPlacementAlongLineSameSize"===t.type||"CIMMarkerPlacementAlongLineVariableSize"===t.type||"CIMMarkerPlacementAtExtremities"===t.type||"CIMMarkerPlacementAtMeasuredUnits"===t.type||"CIMMarkerPlacementAtRatioPositions"===t.type||"CIMMarkerPlacementOnLine"===t.type||"CIMMarkerPlacementOnVertices"===t.type)}n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return P})),n.d(e,"e",(function(){return r})),n.d(e,"f",(function(){return c})),n.d(e,"g",(function(){return i})),n.d(e,"h",(function(){return h})),n.d(e,"i",(function(){return x})),n.d(e,"j",(function(){return M})),n.d(e,"k",(function(){return E})),n.d(e,"l",(function(){return C})),n.d(e,"m",(function(){return T})),n.d(e,"n",(function(){return j})),n.d(e,"o",(function(){return v})),n.d(e,"p",(function(){return S})),n.d(e,"q",(function(){return w})),n.d(e,"r",(function(){return m})),n.d(e,"s",(function(){return O})),n.d(e,"t",(function(){return _})),n.d(e,"u",(function(){return f})),n.d(e,"v",(function(){return d})),n.d(e,"w",(function(){return g})),n.d(e,"x",(function(){return b})),n.d(e,"y",(function(){return y})),n.d(e,"z",(function(){return k})),n.d(e,"A",(function(){return I})),n.d(e,"B",(function(){return u})),n.d(e,"C",(function(){return p}))
const O=(t,e=0)=>null==t||isNaN(t)?e:t,m=t=>t.tintColor?h(t.tintColor):{r:255,g:255,b:255,a:1},y=t=>{if(!t)return!1
for(const e of t)switch(e.type){case"CIMGeometricEffectBuffer":case"CIMGeometricEffectOffset":case"CIMGeometricEffectDonut":return!0}return!1}
function _(){return Promise.all([n.e(11),n.e(373)]).then(n.bind(null,1632))}function j(t){if(!t)return"normal"
switch(t.toLowerCase()){case"italic":return"italic"
case"oblique":return"oblique"
default:return"normal"}}function v(t){if(!t)return"normal"
switch(t.toLowerCase()){case"bold":return"bold"
case"bolder":return"bolder"
case"lighter":return"lighter"
default:return"normal"}}function M(t){let e="",n=""
if(t){const i=t.toLowerCase()
i.includes("italic")?e="italic":i.includes("oblique")&&(e="oblique"),i.includes("bold")?n="bold":i.includes("light")&&(n="lighter")}return{style:e,weight:n}}function x(t){return t.underline?"underline":t.strikethrough?"line-through":"none"}function T(t){if(!t)return null
switch(t.type){case"CIMPolygonSymbol":if(t.symbolLayers)for(const e of t.symbolLayers){const t=T(e)
if(null!=t)return t}break
case"CIMTextSymbol":return T(t.symbol)
case"CIMSolidFill":return t.color}}function S(t){if(t)switch(t.type){case"CIMPolygonSymbol":case"CIMLineSymbol":{const e=t.symbolLayers
if(e)for(const t of e){const e=S(t)
if(null!=e)return e}break}case"CIMTextSymbol":return S(t.symbol)
case"CIMSolidStroke":case"CIMSolidFill":return t.color}}function w(t){if(t)switch(t.type){case"CIMPolygonSymbol":case"CIMLineSymbol":if(t.symbolLayers)for(const e of t.symbolLayers){const t=w(e)
if(void 0!==t)return t}break
case"CIMTextSymbol":return w(t.symbol)
case"CIMSolidStroke":case"CIMGradientStroke":case"CIMPictureStroke":return t.width}}function E(t){switch(t){case"Left":default:return"left"
case"Right":return"right"
case"Center":case"Justify":return"center"}}function C(t){switch(t){case"Top":default:return"top"
case"Center":return"middle"
case"Baseline":return"baseline"
case"Bottom":return"bottom"}}function P(t){return(t?Object.keys(t):[]).map(e=>({name:e,alias:e,type:"string"==typeof t[e]?"esriFieldTypeString":"esriFieldTypeDouble"}))}const k=t=>t.includes("data:image/svg+xml")
function I(t){if(!t)return null
switch(t.type){case"CIMPointSymbol":case"CIMTextSymbol":return"esriGeometryPoint"
case"CIMLineSymbol":return"esriGeometryPolyline"
case"CIMPolygonSymbol":return"esriGeometryPolygon"
default:return null}}},1238:function(t,e,n){"use strict"
n.d(e,"a",(function(){return j})),n.d(e,"b",(function(){return w})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return C})),n.d(e,"e",(function(){return _})),n.d(e,"f",(function(){return M})),n.d(e,"g",(function(){return v})),n.d(e,"h",(function(){return g})),n.d(e,"i",(function(){return x})),n.d(e,"j",(function(){return S})),n.d(e,"k",(function(){return O})),n.d(e,"l",(function(){return y})),n.d(e,"m",(function(){return A})),n.d(e,"n",(function(){return N})),n.d(e,"o",(function(){return G})),n.d(e,"p",(function(){return m})),n(235)
var i=n(233),r=n(991),o=n(23),a=n(1029),s=n(985),c=n(981),l=n(1012),u=n(1011),h=n(1486),p=n(1216),d=n(1355),b=n(1172)
function f(){return Object(u.e)()}function g(t,e=f()){return Object(l.c)(e,t)}function O(t,e){return Object(u.g)(t[0],t[1],t[2],e)}function m(t){return t}function y(t){t[0]=t[1]=t[2]=t[3]=0}function _(t,e){return t[0]=t[1]=t[2]=0,t[3]=e,t}function j(t){return t[3]}function v(t){return t}function M(t,e,n,i){return Object(u.g)(t,e,n,i)}function x(t,e,n){if(Object(o.k)(e))return!1
const{origin:i,direction:r}=e,a=T
a[0]=i[0]-t[0],a[1]=i[1]-t[1],a[2]=i[2]-t[2]
const s=r[0]*r[0]+r[1]*r[1]+r[2]*r[2]
if(0===s)return!1
const c=2*(r[0]*a[0]+r[1]*a[1]+r[2]*a[2]),l=c*c-4*s*(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]-t[3]*t[3])
if(l<0)return!1
const u=Math.sqrt(l)
let h=(-c-u)/(2*s)
const p=(-c+u)/(2*s)
return(h<0||p<h&&p>0)&&(h=p),!(h<0||(n&&(n[0]=i[0]+r[0]*h,n[1]=i[1]+r[1]*h,n[2]=i[2]+r[2]*h),0))}const T=Object(c.f)()
function S(t,e){return x(t,e,null)}function w(t,e,n){const i=b.d.get(),r=b.a.get()
Object(s.o)(i,e.origin,e.direction)
const o=j(t)
Object(s.o)(n,i,e.origin),Object(s.p)(n,n,1/Object(s.u)(n)*o)
const c=P(t,e.origin),l=Object(d.a)(e.origin,n)
return Object(a.h)(r,l+c,i),Object(s.v)(n,n,r),n}function E(t,e,n){const i=Object(s.k)(b.d.get(),e,t),r=Object(s.p)(b.d.get(),i,t[3]/Object(s.u)(i))
return Object(s.j)(n,r,t)}function C(t,e){const n=Object(s.k)(b.d.get(),e,t),i=Object(s.y)(n),r=t[3]*t[3]
return Math.sqrt(Math.abs(i-r))}function P(t,e){const n=Object(s.k)(b.d.get(),e,t),i=Object(s.u)(n),o=j(t),a=o+Math.abs(o-i)
return Object(r.b)(o/a)}const k=Object(c.f)()
function I(t,e,n,i){const o=Object(s.k)(k,e,t)
switch(n){case h.a.X:{const t=Object(r.e)(o,k)[2]
return Object(s.B)(i,-Math.sin(t),Math.cos(t),0)}case h.a.Y:{const t=Object(r.e)(o,k),e=t[1],n=t[2],a=Math.sin(e)
return Object(s.B)(i,-a*Math.cos(n),-a*Math.sin(n),Math.cos(e))}case h.a.Z:return Object(s.w)(i,o)
default:return}}function R(t,e){const n=Object(s.k)(L,e,t)
return Object(s.u)(n)-t[3]}function A(t,e){const n=Object(s.m)(t,e),i=j(t)
return n<=i*i}const L=Object(c.f)(),G=f(),N=Object.freeze(Object.defineProperty({__proto__:null,altitudeAt:R,angleToSilhouette:P,axisAt:I,clear:y,closestPoint:function(t,e,n){return x(t,e,n)?n:(Object(p.a)(e,t,n),E(t,n,n))},closestPointOnSilhouette:w,containsPoint:A,copy:g,create:f,distanceToSilhouette:C,elevate:function(t,e,n){return t!==n&&Object(s.l)(n,t),n[3]=t[3]+e,n},fromCenterAndRadius:O,fromRadius:_,fromValues:M,getCenter:v,getRadius:j,intersectRay:x,intersectRayClosestSilhouette:function(t,e,n){if(x(t,e,n))return n
const i=w(t,e,b.d.get())
return Object(s.j)(n,e.origin,Object(s.p)(b.d.get(),e.direction,Object(s.r)(e.origin,i)/Object(s.u)(e.direction))),n},intersectsRay:S,projectPoint:E,setAltitudeAt:function(t,e,n,i){const r=R(t,e),o=I(t,e,h.a.Z,L),a=Object(s.p)(L,o,n-r)
return Object(s.j)(i,e,a)},setExtent:function(t,e,n){return i.a.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),t===n?n:g(t,n)},tmpSphere:G,wrap:m},Symbol.toStringTag,{value:"Module"}))},1251:function(t,e,n){"use strict"
n.d(e,"a",(function(){return I})),n.d(e,"b",(function(){return R})),n.d(e,"c",(function(){return p})),n.d(e,"d",(function(){return u})),n.d(e,"e",(function(){return O})),n.d(e,"f",(function(){return b})),n.d(e,"g",(function(){return g})),n.d(e,"h",(function(){return f})),n.d(e,"i",(function(){return d})),n.d(e,"j",(function(){return S})),n.d(e,"k",(function(){return w})),n.d(e,"l",(function(){return C})),n.d(e,"m",(function(){return P})),n.d(e,"n",(function(){return E})),n.d(e,"o",(function(){return k})),n.d(e,"p",(function(){return T})),n.d(e,"q",(function(){return D})),n.d(e,"r",(function(){return A})),n.d(e,"s",(function(){return L})),n.d(e,"t",(function(){return G})),n.d(e,"u",(function(){return x})),n.d(e,"v",(function(){return N})),n.d(e,"w",(function(){return h}))
var i=n(991),r=n(23),o=n(985),a=n(981),s=(n(1238),n(1355)),c=n(1172),l=n(1438)
function u(t=F){return[t[0],t[1],t[2],t[3]]}function h(t=F[0],e=F[1],n=F[2],i=F[3]){return d(t,e,n,i,c.e.get())}function p(t,e){return d(e[0],e[1],e[2],e[3],t)}function d(t,e,n,i,r=u()){return r[0]=t,r[1]=e,r[2]=n,r[3]=i,r}function b(t,e,n){return Object(o.l)(n,t),n[3]=e,n}function f(t,e,n){const i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=Math.abs(i-1)>1e-5&&i>1e-12?1/Math.sqrt(i):1
return n[0]=e[0]*r,n[1]=e[1]*r,n[2]=e[2]*r,n[3]=-(n[0]*t[0]+n[1]*t[1]+n[2]*t[2]),n}function g(t,e,n,i=u()){const r=n[0]-e[0],o=n[1]-e[1],a=n[2]-e[2],s=t[0]-e[0],c=t[1]-e[1],l=t[2]-e[2],h=o*l-a*c,p=a*s-r*l,d=r*c-o*s,b=h*h+p*p+d*d,f=Math.abs(b-1)>1e-5&&b>1e-12?1/Math.sqrt(b):1
return i[0]=h*f,i[1]=p*f,i[2]=d*f,i[3]=-(i[0]*t[0]+i[1]*t[1]+i[2]*t[2]),i}function O(t,e,n,i,r){const a=t.length/3
if(a<3)return!1
Object(o.B)(y,t[3*n],t[3*n+1],t[3*n+2])
let s=i,c=!1
for(;s<a-1&&!c;){const e=3*s
Object(o.B)(_,t[e],t[e+1],t[e+2]),s++,c=!Object(o.t)(y,_)}if(!c)return!1
for(s=Math.max(s,r),c=!1;s<a&&!c;){const e=3*s
Object(o.B)(j,t[e],t[e+1],t[e+2]),s++,Object(o.k)(v,y,_),Object(o.w)(v,v),Object(o.k)(M,_,j),Object(o.w)(M,M),c=!Object(o.t)(y,j)&&!Object(o.t)(_,j)&&Math.abs(Object(o.n)(v,M))<m}return c?(g(y,_,j,e),!0):(0!==n||1!==i||2!==r)&&O(t,e,0,1,2)}const m=.99619469809,y=Object(a.f)(),_=Object(a.f)(),j=Object(a.f)(),v=Object(a.f)(),M=Object(a.f)()
function x(t,e,n){return e!==t&&p(t,e),t[3]=-Object(o.n)(t,n),t}function T(t,e){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e}function S(t,e,n,i){return Object(o.o)(j,e,t),f(n,j,i)}function w(t,e,n,i){return V(t,e,Object(o.k)(c.d.get(),n,e),H,i)}function E(t,e,n){return!!Object(r.l)(e)&&V(t,e.origin,e.direction,B,n)}function C(t,e,n){return V(t,e.origin,e.vector,U.NONE,n)}function P(t,e,n){return V(t,e.origin,e.vector,U.CLAMP,n)}function k(t,e){return N(t,e)>=0}function I(t,e){const n=Object(o.n)(t,e.ray.direction),i=-N(t,e.ray.origin)
if(i<0&&n>=0)return!1
if(n>-1e-6&&n<1e-6)return i>0
if((i<0||n<0)&&!(i<0&&n<0))return!0
const r=i/n
return n>0?r<e.c1&&(e.c1=r):r>e.c0&&(e.c0=r),e.c0<=e.c1}function R(t,e){const n=Object(o.n)(t,e.ray.direction),i=-N(t,e.ray.origin)
if(n>-1e-6&&n<1e-6)return i>0
const r=i/n
return n>0?r<e.c1&&(e.c1=r):r>e.c0&&(e.c0=r),e.c0<=e.c1}function A(t,e,n){const i=Object(o.p)(c.d.get(),t,-t[3]),r=G(t,Object(o.k)(c.d.get(),e,i),c.d.get())
return Object(o.j)(n,r,i),n}function L(t,e,n,i){const r=t,a=c.d.get(),u=c.d.get()
Object(l.k)(r,a,u)
const h=Object(o.k)(c.d.get(),n,e),p=Object(s.d)(a,h),d=Object(s.d)(u,h),b=Object(s.d)(r,h)
return Object(o.B)(i,p,d,b)}function G(t,e,n){const i=Object(o.p)(c.d.get(),t,Object(o.n)(t,e))
return Object(o.k)(n,e,i),n}function N(t,e){return Object(o.n)(t,e)+t[3]}function V(t,e,n,r,a){const s=Object(o.n)(t,n)
if(0===s)return!1
let c=-(Object(o.n)(t,e)+t[3])/s
return r&U.CLAMP&&(c=Object(i.f)(c,0,1)),!(!(r&U.INFINITE_MIN)&&c<0||!(r&U.INFINITE_MAX)&&c>1||(Object(o.j)(a,e,Object(o.p)(a,n,c)),0))}function D(t){return t}const F=[0,0,1,0]
var U,z;(z=U||(U={}))[z.NONE=0]="NONE",z[z.CLAMP=1]="CLAMP",z[z.INFINITE_MIN=4]="INFINITE_MIN",z[z.INFINITE_MAX=8]="INFINITE_MAX"
const H=U.INFINITE_MIN|U.INFINITE_MAX,B=U.INFINITE_MAX},1303:function(t,e,n){"use strict"
n.d(e,"a",(function(){return a}))
var i,r,o,a={}
i={get exports(){return a},set exports(t){a=t}},r=function(){function t(t,n,r){r=r||2
var o,a,s,l,u,h,p,d=n&&n.length,b=d?n[0]*r:t.length,f=e(t,0,b,r,!0),g=[]
if(!f||f.next===f.prev)return g
if(d&&(f=c(t,n,f,r)),t.length>80*r){o=s=t[0],a=l=t[1]
for(var O=r;O<b;O+=r)(u=t[O])<o&&(o=u),(h=t[O+1])<a&&(a=h),u>s&&(s=u),h>l&&(l=h)
p=0!==(p=Math.max(s-o,l-a))?1/p:0}return i(f,g,r,o,a,p),g}function e(t,e,n,i,r){var o,a
if(r===E(t,e,n,i)>0)for(o=e;o<n;o+=i)a=T(o,t[o],t[o+1],a)
else for(o=n-i;o>=e;o-=i)a=T(o,t[o],t[o+1],a)
if(a&&y(a,a.next)){var s=a.next
S(a),a=s}return a}function n(t,e){if(!t)return t
e||(e=t)
var n,i=t
do{if(n=!1,i.steiner||!y(i,i.next)&&0!==m(i.prev,i,i.next))i=i.next
else{var r=i.prev
if(S(i),(i=e=r)===i.next)break
n=!0}}while(n||i!==e)
return e}function i(t,e,c,l,u,h,p){if(t){!p&&h&&d(t,l,u,h)
for(var b,f,g=t;t.prev!==t.next;)if(b=t.prev,f=t.next,h?o(t,l,u,h):r(t))e.push(b.i/c),e.push(t.i/c),e.push(f.i/c),S(t),t=f.next,g=f.next
else if((t=f)===g){p?1===p?i(t=a(n(t),e,c),e,c,l,u,h,2):2===p&&s(t,e,c,l,u,h):i(n(t),e,c,l,u,h,1)
break}}}function r(t){var e=t.prev,n=t,i=t.next
if(m(e,n,i)>=0)return!1
for(var r=t.next.next;r!==t.prev;){if(g(e.x,e.y,n.x,n.y,i.x,i.y,r.x,r.y)&&m(r.prev,r,r.next)>=0)return!1
r=r.next}return!0}function o(t,e,n,i){var r=t.prev,o=t,a=t.next
if(m(r,o,a)>=0)return!1
for(var s=r.x<o.x?r.x<a.x?r.x:a.x:o.x<a.x?o.x:a.x,c=r.y<o.y?r.y<a.y?r.y:a.y:o.y<a.y?o.y:a.y,l=r.x>o.x?r.x>a.x?r.x:a.x:o.x>a.x?o.x:a.x,u=r.y>o.y?r.y>a.y?r.y:a.y:o.y>a.y?o.y:a.y,h=b(s,c,e,n,i),p=b(l,u,e,n,i),d=t.prevZ,f=t.nextZ;d&&d.z>=h&&f&&f.z<=p;){if(d!==t.prev&&d!==t.next&&g(r.x,r.y,o.x,o.y,a.x,a.y,d.x,d.y)&&m(d.prev,d,d.next)>=0)return!1
if(d=d.prevZ,f!==t.prev&&f!==t.next&&g(r.x,r.y,o.x,o.y,a.x,a.y,f.x,f.y)&&m(f.prev,f,f.next)>=0)return!1
f=f.nextZ}for(;d&&d.z>=h;){if(d!==t.prev&&d!==t.next&&g(r.x,r.y,o.x,o.y,a.x,a.y,d.x,d.y)&&m(d.prev,d,d.next)>=0)return!1
d=d.prevZ}for(;f&&f.z<=p;){if(f!==t.prev&&f!==t.next&&g(r.x,r.y,o.x,o.y,a.x,a.y,f.x,f.y)&&m(f.prev,f,f.next)>=0)return!1
f=f.nextZ}return!0}function a(t,e,i){var r=t
do{var o=r.prev,a=r.next.next
!y(o,a)&&_(o,r,r.next,a)&&M(o,a)&&M(a,o)&&(e.push(o.i/i),e.push(r.i/i),e.push(a.i/i),S(r),S(r.next),r=t=a),r=r.next}while(r!==t)
return n(r)}function s(t,e,r,o,a,s){var c=t
do{for(var l=c.next.next;l!==c.prev;){if(c.i!==l.i&&O(c,l)){var u=x(c,l)
return c=n(c,c.next),u=n(u,u.next),i(c,e,r,o,a,s),void i(u,e,r,o,a,s)}l=l.next}c=c.next}while(c!==t)}function c(t,i,r,o){var a,s,c,u=[]
for(a=0,s=i.length;a<s;a++)(c=e(t,i[a]*o,a<s-1?i[a+1]*o:t.length,o,!1))===c.next&&(c.steiner=!0),u.push(f(c))
for(u.sort(l),a=0;a<u.length;a++)r=n(r=h(u[a],r),r.next)
return r}function l(t,e){return t.x-e.x}function u(t){if(t.next.prev===t)return t
let e=t
for(;;){const n=e.next
if(n.prev===e||n===e||n===t)break
e=n}return e}function h(t,e){var i=function(t,e){var n,i=e,r=t.x,o=t.y,a=-1/0
do{if(o<=i.y&&o>=i.next.y&&i.next.y!==i.y){var s=i.x+(o-i.y)*(i.next.x-i.x)/(i.next.y-i.y)
if(s<=r&&s>a){if(a=s,s===r){if(o===i.y)return i
if(o===i.next.y)return i.next}n=i.x<i.next.x?i:i.next}}i=i.next}while(i!==e)
if(!n)return null
if(r===a)return n
var c,l=n,u=n.x,h=n.y,d=1/0
i=n
do{r>=i.x&&i.x>=u&&r!==i.x&&g(o<h?r:a,o,u,h,o<h?a:r,o,i.x,i.y)&&(c=Math.abs(o-i.y)/(r-i.x),M(i,t)&&(c<d||c===d&&(i.x>n.x||i.x===n.x&&p(n,i)))&&(n=i,d=c)),i=i.next}while(i!==l)
return n}(t,e)
if(!i)return e
var r=x(i,t),o=n(i,i.next)
let a=u(r)
return n(a,a.next),o=u(o),u(e===i?o:e)}function p(t,e){return m(t.prev,t,e.prev)<0&&m(e.next,t,t.next)<0}function d(t,e,n,i){var r=t
do{null===r.z&&(r.z=b(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next}while(r!==t)
r.prevZ.nextZ=null,r.prevZ=null,function(t){var e,n,i,r,o,a,s,c,l=1
do{for(n=t,t=null,o=null,a=0;n;){for(a++,i=n,s=0,e=0;e<l&&(s++,i=i.nextZ);e++);for(c=l;s>0||c>0&&i;)0!==s&&(0===c||!i||n.z<=i.z)?(r=n,n=n.nextZ,s--):(r=i,i=i.nextZ,c--),o?o.nextZ=r:t=r,r.prevZ=o,o=r
n=i}o.nextZ=null,l*=2}while(a>1)}(r)}function b(t,e,n,i,r){return(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-n)*r)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-i)*r)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function f(t){var e=t,n=t
do{(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next}while(e!==t)
return n}function g(t,e,n,i,r,o,a,s){return(r-a)*(e-s)-(t-a)*(o-s)>=0&&(t-a)*(i-s)-(n-a)*(e-s)>=0&&(n-a)*(o-s)-(r-a)*(i-s)>=0}function O(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!function(t,e){var n=t
do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&_(n,n.next,t,e))return!0
n=n.next}while(n!==t)
return!1}(t,e)&&(M(t,e)&&M(e,t)&&function(t,e){var n=t,i=!1,r=(t.x+e.x)/2,o=(t.y+e.y)/2
do{n.y>o!=n.next.y>o&&n.next.y!==n.y&&r<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next}while(n!==t)
return i}(t,e)&&(m(t.prev,t,e.prev)||m(t,e.prev,e))||y(t,e)&&m(t.prev,t,t.next)>0&&m(e.prev,e,e.next)>0)}function m(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function y(t,e){return t.x===e.x&&t.y===e.y}function _(t,e,n,i){var r=v(m(t,e,n)),o=v(m(t,e,i)),a=v(m(n,i,t)),s=v(m(n,i,e))
return r!==o&&a!==s||!(0!==r||!j(t,n,e))||!(0!==o||!j(t,i,e))||!(0!==a||!j(n,t,i))||!(0!==s||!j(n,e,i))}function j(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function v(t){return t>0?1:t<0?-1:0}function M(t,e){return m(t.prev,t,t.next)<0?m(t,e,t.next)>=0&&m(t,t.prev,e)>=0:m(t,e,t.prev)<0||m(t,t.next,e)<0}function x(t,e){var n=new w(t.i,t.x,t.y),i=new w(e.i,e.x,e.y),r=t.next,o=e.prev
return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,o.next=i,i.prev=o,i}function T(t,e,n,i){var r=new w(t,e,n)
return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function S(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function w(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function E(t,e,n,i){for(var r=0,o=e,a=n-i;o<n;o+=i)r+=(t[a]-t[o])*(t[o+1]+t[a+1]),a=o
return r}return t.deviation=function(t,e,n,i){var r=e&&e.length,o=r?e[0]*n:t.length,a=Math.abs(E(t,0,o,n))
if(r)for(var s=0,c=e.length;s<c;s++){var l=e[s]*n,u=s<c-1?e[s+1]*n:t.length
a-=Math.abs(E(t,l,u,n))}var h=0
for(s=0;s<i.length;s+=3){var p=i[s]*n,d=i[s+1]*n,b=i[s+2]*n
h+=Math.abs((t[p]-t[b])*(t[d+1]-t[p+1])-(t[p]-t[d])*(t[b+1]-t[p+1]))}return 0===a&&0===h?0:Math.abs((h-a)/a)},t.flatten=function(t){for(var e=t[0][0].length,n={vertices:[],holes:[],dimensions:e},i=0,r=0;r<t.length;r++){for(var o=0;o<t[r].length;o++)for(var a=0;a<e;a++)n.vertices.push(t[r][o][a])
r>0&&(i+=t[r-1].length,n.holes.push(i))}return n},t},void 0!==(o=r())&&(i.exports=o)},1323:function(t,e,n){"use strict"
function i(){return[0,0,0,1]}function r(t){return[t[0],t[1],t[2],t[3]]}function o(t,e,n,i){return[t,e,n,i]}function a(t,e){return new Float64Array(t,e,4)}n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return o}))
const s=[0,0,0,1]
Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:s,clone:r,create:i,createView:a,fromValues:o},Symbol.toStringTag,{value:"Module"}))},1355:function(t,e,n){"use strict"
n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return s}))
var i=n(991),r=n(985),o=n(981)
function a(t,e,n){const i=Object(r.n)(t,e)/Object(r.n)(t,t)
return Object(r.p)(n,t,i)}function s(t,e){return Object(r.n)(t,e)/Object(r.u)(t)}function c(t,e){const n=Object(r.n)(t,e)/(Object(r.u)(t)*Object(r.u)(e))
return-Object(i.b)(n)}function l(t,e,n){Object(r.w)(u,t),Object(r.w)(h,e)
const o=Object(r.n)(u,h),a=Object(i.b)(o),s=Object(r.o)(u,u,h)
return Object(r.n)(s,n)<0?2*Math.PI-a:a}const u=Object(o.f)(),h=Object(o.f)()},1366:function(t,e,n){"use strict"
n.d(e,"a",(function(){return r}))
var i=n(1214)
class r{constructor(t){this._allocator=t,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&Object(i.a)(()=>this._reset()),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*o)
this._items.length=Math.min(t,this._items.length),this._itemsPtr=0}_grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,o));t++)this._items.push(this._allocator())}}const o=1024},1376:function(t,e,n){"use strict"
var i
n.d(e,"a",(function(){return i})),function(t){t[t.ANIMATING=0]="ANIMATING",t[t.INTERACTING=1]="INTERACTING",t[t.IDLE=2]="IDLE"}(i||(i={}))},1421:function(t,e,n){"use strict"
n.d(e,"a",(function(){return O})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return p})),n.d(e,"d",(function(){return m})),n.d(e,"e",(function(){return u})),n(982)
var i=n(772),r=(n(235),n(234)),o=n(23),a=n(84),s=n(983),c=n(1185),l=n(769)
function u(t){return"declaredClass"in t}function h(t){return"declaredClass"in t}function p(t,e){return t?"declaredClass"in t?t:new i.default({layer:e,sourceLayer:e,visible:t.visible,symbol:Object(r.a)(t.symbol),attributes:Object(r.a)(t.attributes),geometry:d(t.geometry)}):null}function d(t){return Object(o.k)(t)?null:u(t)?t:Object(s.a)(function(t){const{wkid:e,wkt:n,latestWkid:i}=t.spatialReference,r={wkid:e,wkt:n,latestWkid:i}
switch(t.type){case"point":{const{x:e,y:n,z:i,m:o}=t
return{x:e,y:n,z:i,m:o,spatialReference:r}}case"polygon":{const{rings:e,hasZ:n,hasM:i}=t
return{rings:b(e),hasZ:n,hasM:i,spatialReference:r}}case"polyline":{const{paths:e,hasZ:n,hasM:i}=t
return{paths:b(e),hasZ:n,hasM:i,spatialReference:r}}case"extent":{const{xmin:e,xmax:n,ymin:i,ymax:o,zmin:a,zmax:s,mmin:c,mmax:l,hasZ:u,hasM:h}=t
return{xmin:e,xmax:n,ymin:i,ymax:o,zmin:a,zmax:s,mmin:c,mmax:l,hasZ:u,hasM:h,spatialReference:r}}case"multipoint":{const{points:e,hasZ:n,hasM:i}=t
return{points:g(e)?f(e):e,hasZ:n,hasM:i,spatialReference:r}}default:return}}(t))}function b(t){return function(t){for(const e of t)if(0!==e.length)return g(e)
return!1}(t)?t.map(t=>f(t)):t}function f(t){return t.map(t=>Array.from(t))}function g(t){return t.length>0&&(Object(a.d)(t[0])||Object(a.e)(t[0]))}function O(t,e){if(!t)return null
let n
if(h(t)){if(null==e)return t.clone()
if(h(e))return e.copy(t)}return null!=e?(n=e,n.x=t.x,n.y=t.y,n.spatialReference=t.spatialReference,t.hasZ?(n.z=t.z,n.hasZ=t.hasZ):(n.z=void 0,n.hasZ=!1),t.hasM?(n.m=t.m,n.hasM=!0):(n.m=void 0,n.hasM=!1)):(n=Object(c.j)(t.x,t.y,t.z,t.spatialReference),t.hasM&&(n.m=t.m,n.hasM=!0)),n}function m(t){const{wkid:e,wkt:n,latestWkid:i}=t,r={wkid:e,wkt:n,latestWkid:i}
return l.default.fromJSON(r)}},1424:function(t,e,n){"use strict"
var i,r,o
n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),function(t){t[t.USER=0]="USER",t[t.MANAGER=1]="MANAGER"}(i||(i={})),function(t){t[t.None=0]="None",t[t.Unfocused=1]="Unfocused",t[t.Focused=2]="Focused",t[t.Unselected=4]="Unselected",t[t.Selected=8]="Selected",t[t.All=15]="All"}(r||(r={})),function(t){t[t.None=0]="None",t[t.Custom1=16]="Custom1",t[t.Custom2=32]="Custom2",t[t.Custom3=64]="Custom3",t[t.Custom4=128]="Custom4",t[t.Custom5=256]="Custom5",t[t.Custom6=512]="Custom6",t[t.Custom7=1024]="Custom7",t[t.Custom8=2048]="Custom8",t[t.Custom9=4096]="Custom9",t[t.Custom10=8192]="Custom10",t[t.Custom11=16384]="Custom11",t[t.Custom12=32768]="Custom12",t[t.All=65520]="All"}(o||(o={}))},1425:function(t,e,n){"use strict"
n.d(e,"a",(function(){return O})),n.d(e,"b",(function(){return g})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return p})),n.d(e,"f",(function(){return h})),n.d(e,"g",(function(){return u})),n.d(e,"h",(function(){return b})),n.d(e,"i",(function(){return d})),n.d(e,"j",(function(){return f}))
var i=n(991),r=n(1366),o=n(985),a=n(981),s=n(1172)
function c(t){return t?{origin:Object(a.d)(t.origin),vector:Object(a.d)(t.vector)}:{origin:Object(a.f)(),vector:Object(a.f)()}}function l(t,e=c()){return u(t.origin,t.vector,e)}function u(t,e,n=c()){return Object(o.l)(n.origin,t),Object(o.l)(n.vector,e),n}function h(t,e,n=c()){return Object(o.l)(n.origin,t),Object(o.k)(n.vector,e,t),n}function p(t,e){const n=Object(o.k)(s.d.get(),e,t.origin),r=Object(o.n)(t.vector,n),a=Object(o.n)(t.vector,t.vector),c=Object(i.f)(r/a,0,1),l=Object(o.k)(s.d.get(),Object(o.p)(s.d.get(),t.vector,c),n)
return Object(o.n)(l,l)}function d(t,e,n){return f(t,e,0,1,n)}function b(t,e,n){return Object(o.j)(n,t.origin,Object(o.p)(n,t.vector,e))}function f(t,e,n,r,a){const{vector:c,origin:l}=t,u=Object(o.k)(s.d.get(),e,l),h=Object(o.n)(c,u)/Object(o.y)(c)
return Object(o.p)(a,c,Object(i.f)(h,n,r)),Object(o.j)(a,a,t.origin)}function g(t,e){if(m(t,function(t,e){const n=_.get()
return n.origin=t,n.vector=e,n}(e.origin,e.direction),!1,y)){const{tA:e,pB:n,distance2:i}=y
if(e>=0&&e<=1)return i
if(e<0)return Object(o.m)(t.origin,n)
if(e>1)return Object(o.m)(Object(o.j)(s.d.get(),t.origin,t.vector),n)}return null}function O(t,e,n){return!!m(t,e,!0,y)&&(Object(o.l)(n,y.pA),!0)}function m(t,e,n,r){const a=1e-6,c=t.origin,l=Object(o.j)(s.d.get(),c,t.vector),u=e.origin,h=Object(o.j)(s.d.get(),u,e.vector),p=s.d.get(),d=s.d.get()
if(p[0]=c[0]-u[0],p[1]=c[1]-u[1],p[2]=c[2]-u[2],d[0]=h[0]-u[0],d[1]=h[1]-u[1],d[2]=h[2]-u[2],Math.abs(d[0])<a&&Math.abs(d[1])<a&&Math.abs(d[2])<a)return!1
const b=s.d.get()
if(b[0]=l[0]-c[0],b[1]=l[1]-c[1],b[2]=l[2]-c[2],Math.abs(b[0])<a&&Math.abs(b[1])<a&&Math.abs(b[2])<a)return!1
const f=p[0]*d[0]+p[1]*d[1]+p[2]*d[2],g=d[0]*b[0]+d[1]*b[1]+d[2]*b[2],O=p[0]*b[0]+p[1]*b[1]+p[2]*b[2],m=d[0]*d[0]+d[1]*d[1]+d[2]*d[2],y=(b[0]*b[0]+b[1]*b[1]+b[2]*b[2])*m-g*g
if(Math.abs(y)<a)return!1
let _=(f*g-O*m)/y,j=(f+g*_)/m
n&&(_=Object(i.f)(_,0,1),j=Object(i.f)(j,0,1))
const v=s.d.get(),M=s.d.get()
return v[0]=c[0]+_*b[0],v[1]=c[1]+_*b[1],v[2]=c[2]+_*b[2],M[0]=u[0]+j*d[0],M[1]=u[1]+j*d[1],M[2]=u[2]+j*d[2],r.tA=_,r.tB=j,r.pA=v,r.pB=M,r.distance2=Object(o.m)(v,M),!0}const y={tA:0,tB:0,pA:Object(a.f)(),pB:Object(a.f)(),distance2:0},_=new r.a(()=>c())},1438:function(t,e,n){"use strict"
n.d(e,"a",(function(){return b})),n.d(e,"b",(function(){return h})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return f})),n.d(e,"e",(function(){return a})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return g})),n.d(e,"h",(function(){return s})),n.d(e,"i",(function(){return p})),n.d(e,"j",(function(){return d})),n.d(e,"k",(function(){return l}))
var i=n(991),r=n(985),o=n(981)
function a(t){const e=t[0]*t[0]+t[4]*t[4]+t[8]*t[8],n=t[1]*t[1]+t[5]*t[5]+t[9]*t[9],i=t[2]*t[2]+t[6]*t[6]+t[10]*t[10]
return Math.sqrt(Math.max(e,n,i))}function s(t,e){const n=Math.sqrt(e[0]*e[0]+e[4]*e[4]+e[8]*e[8]),i=Math.sqrt(e[1]*e[1]+e[5]*e[5]+e[9]*e[9]),o=Math.sqrt(e[2]*e[2]+e[6]*e[6]+e[10]*e[10])
return Object(r.B)(t,n,i,o),t}function c(t,e,n){n=n||t
const i=Object(r.n)(t,e)
Object(r.B)(n,t[0]-i*e[0],t[1]-i*e[1],t[2]-i*e[2]),Object(r.w)(n,n)}function l(t,e,n){Math.abs(t[0])>Math.abs(t[1])?Object(r.B)(e,0,1,0):Object(r.B)(e,1,0,0),Object(r.o)(n,t,e),Object(r.w)(e,e),Object(r.o)(e,n,t),Object(r.w)(n,n)}function u(t,e){return(t%e+e)%e}function h(t,e,n,i,r,o){const a=t+(e-t)*r
return a+(n+(i-n)*r-a)*o}function p(t,e,n,i=Object(o.f)()){const a=Object(r.u)(t),s=Object(r.u)(e),c=Object(r.n)(t,e)/(a*s)
if(c<.9999999999999999){const o=Math.acos(c),l=((1-n)*a+n*s)/Math.sin(o),u=l/a*Math.sin((1-n)*o),h=l/s*Math.sin(n*o)
return Object(r.p)(_,t,u),Object(r.p)(j,e,h),Object(r.j)(i,_,j)}return Object(r.q)(i,t,e,n)}function d(t,e,n,i=Object(o.f)(),a=Object(o.f)()){const s=Object(r.u)(t),c=Object(r.u)(e),l=Object(r.n)(t,e)/(s*c)
if(l<.9999999999999999){const o=Math.acos(l),u=Math.sin(o),h=Math.sin(n*o),p=Math.sin((1-n)*o),d=(1-n)*s+n*c
{const n=d/u,o=n/c*h
Object(r.p)(_,t,n/s*p),Object(r.p)(j,e,o),Object(r.j)(i,_,j)}{const i=1/s*(-Math.cos((1-n)*o)*o*d+p*(-s+c))
Object(r.p)(_,t,i)
const l=1/c*(Math.cos(n*o)*o*d+h*(-s+c))
Object(r.p)(j,e,l),Object(r.j)(a,_,j),Object(r.p)(a,a,1/u)}return a}return Object(r.q)(i,t,e,n),Object(r.k)(a,e,t),Object(r.w)(a,a),a}function b(t,e,n){t=Object(r.w)(_,t),e=Object(r.w)(j,e)
const o=Object(i.b)(Object(r.n)(t,e))
if(n){const i=Object(r.o)(y,t,e)
if(Object(r.n)(i,n)<0)return-o}return o}function f(t){const e=t.length
return n=>{if(n<=t[0][0])return t[0][1]
if(n>=t[e-1][0])return t[e-1][1]
let i=1
for(;n>t[i][0];)i++
const r=t[i-1][0],o=t[i][0],a=(o-n)/(o-r)
return a*t[i-1][1]+(1-a)*t[i][1]}}function g(t,e,n,i){Object(r.k)(O,e,t),Object(r.k)(m,n,t),Object(r.o)(i,O,m),Object(r.w)(i,i),i[3]=-Object(r.n)(t,i)}const O=Object(o.f)(),m=Object(o.f)(),y=Object(o.f)(),_=Object(o.f)(),j=Object(o.f)()},1452:function(t,e,n){"use strict"
n.d(e,"a",(function(){return O})),n.d(e,"b",(function(){return b})),n.d(e,"c",(function(){return u})),n.d(e,"d",(function(){return d})),n.d(e,"e",(function(){return C})),n.d(e,"f",(function(){return g})),n.d(e,"g",(function(){return h})),n.d(e,"h",(function(){return k})),n.d(e,"i",(function(){return l}))
var i=n(1160),r=n(1323),o=n(981),a=n(1016),s=n(985),c=n(1012)
function l(t,e,n){n*=.5
const i=Math.sin(n)
return t[0]=i*e[0],t[1]=i*e[1],t[2]=i*e[2],t[3]=Math.cos(n),t}function u(t,e){const n=2*Math.acos(e[3]),i=Math.sin(n/2)
return i>Object(a.c)()?(t[0]=e[0]/i,t[1]=e[1]/i,t[2]=e[2]/i):(t[0]=1,t[1]=0,t[2]=0),n}function h(t,e,n){const i=e[0],r=e[1],o=e[2],a=e[3],s=n[0],c=n[1],l=n[2],u=n[3]
return t[0]=i*u+a*s+r*l-o*c,t[1]=r*u+a*c+o*s-i*l,t[2]=o*u+a*l+i*c-r*s,t[3]=a*u-i*s-r*c-o*l,t}function p(t,e,n,i){const r=e[0],o=e[1],s=e[2],c=e[3]
let l,u,h,p,d,b=n[0],f=n[1],g=n[2],O=n[3]
return u=r*b+o*f+s*g+c*O,u<0&&(u=-u,b=-b,f=-f,g=-g,O=-O),1-u>Object(a.c)()?(l=Math.acos(u),h=Math.sin(l),p=Math.sin((1-i)*l)/h,d=Math.sin(i*l)/h):(p=1-i,d=i),t[0]=p*r+d*b,t[1]=p*o+d*f,t[2]=p*s+d*g,t[3]=p*c+d*O,t}function d(t,e){const n=e[0],i=e[1],r=e[2],o=e[3],a=n*n+i*i+r*r+o*o,s=a?1/a:0
return t[0]=-n*s,t[1]=-i*s,t[2]=-r*s,t[3]=o*s,t}function b(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t}function f(t,e){const n=e[0]+e[4]+e[8]
let i
if(n>0)i=Math.sqrt(n+1),t[3]=.5*i,i=.5/i,t[0]=(e[5]-e[7])*i,t[1]=(e[6]-e[2])*i,t[2]=(e[1]-e[3])*i
else{let n=0
e[4]>e[0]&&(n=1),e[8]>e[3*n+n]&&(n=2)
const r=(n+1)%3,o=(n+2)%3
i=Math.sqrt(e[3*n+n]-e[3*r+r]-e[3*o+o]+1),t[n]=.5*i,i=.5/i,t[3]=(e[3*r+o]-e[3*o+r])*i,t[r]=(e[3*r+n]+e[3*n+r])*i,t[o]=(e[3*o+n]+e[3*n+o])*i}return t}function g(t,e,n,i){const r=.5*Math.PI/180
e*=r,n*=r,i*=r
const o=Math.sin(e),a=Math.cos(e),s=Math.sin(n),c=Math.cos(n),l=Math.sin(i),u=Math.cos(i)
return t[0]=o*c*u-a*s*l,t[1]=a*s*u+o*c*l,t[2]=a*c*l-o*s*u,t[3]=a*c*u+o*s*l,t}const O=c.c,m=c.l,y=c.a,_=h,j=c.b,v=c.d,M=c.j,x=c.e,T=x,S=c.f,w=S,E=c.k,C=c.g,P=c.h
function k(t,e,n){const i=Object(s.n)(e,n)
return i<-.999999?(Object(s.o)(I,R,e),Object(s.D)(I)<1e-6&&Object(s.o)(I,A,e),Object(s.w)(I,I),l(t,I,Math.PI),t):i>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):(Object(s.o)(I,e,n),t[0]=I[0],t[1]=I[1],t[2]=I[2],t[3]=1+i,E(t,t))}const I=Object(o.f)(),R=Object(o.h)(1,0,0),A=Object(o.h)(0,1,0),L=Object(r.b)(),G=Object(r.b)(),N=Object(i.b)()
Object.freeze(Object.defineProperty({__proto__:null,add:y,calculateW:function(t,e){const n=e[0],i=e[1],r=e[2]
return t[0]=n,t[1]=i,t[2]=r,t[3]=Math.sqrt(Math.abs(1-n*n-i*i-r*r)),t},conjugate:b,copy:O,dot:v,equals:P,exactEquals:C,fromEuler:g,fromMat3:f,getAxisAngle:u,identity:function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},invert:d,len:T,length:x,lerp:M,mul:_,multiply:h,normalize:E,random:function(t){const e=a.a,n=e(),i=e(),r=e(),o=Math.sqrt(1-n),s=Math.sqrt(n)
return t[0]=o*Math.sin(2*Math.PI*i),t[1]=o*Math.cos(2*Math.PI*i),t[2]=s*Math.sin(2*Math.PI*r),t[3]=s*Math.cos(2*Math.PI*r),t},rotateX:function(t,e,n){n*=.5
const i=e[0],r=e[1],o=e[2],a=e[3],s=Math.sin(n),c=Math.cos(n)
return t[0]=i*c+a*s,t[1]=r*c+o*s,t[2]=o*c-r*s,t[3]=a*c-i*s,t},rotateY:function(t,e,n){n*=.5
const i=e[0],r=e[1],o=e[2],a=e[3],s=Math.sin(n),c=Math.cos(n)
return t[0]=i*c-o*s,t[1]=r*c+a*s,t[2]=o*c+i*s,t[3]=a*c-r*s,t},rotateZ:function(t,e,n){n*=.5
const i=e[0],r=e[1],o=e[2],a=e[3],s=Math.sin(n),c=Math.cos(n)
return t[0]=i*c+r*s,t[1]=r*c-i*s,t[2]=o*c+a*s,t[3]=a*c-o*s,t},rotationTo:k,scale:j,set:m,setAxes:function(t,e,n,i){const r=N
return r[0]=n[0],r[3]=n[1],r[6]=n[2],r[1]=i[0],r[4]=i[1],r[7]=i[2],r[2]=-e[0],r[5]=-e[1],r[8]=-e[2],E(t,f(t,r))},setAxisAngle:l,slerp:p,sqlerp:function(t,e,n,i,r,o){return p(L,e,r,o),p(G,n,i,o),p(t,L,G,2*o*(1-o)),t},sqrLen:w,squaredLength:S,str:function(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}},Symbol.toStringTag,{value:"Module"}))},1467:function(t,e,n){"use strict"
n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return a}))
var i=n(990),r=n(1230)
function o(t,e,n,i){if(t)if("CIMTextSymbol"!==t.type){if(n&&t.effects)for(const n of t.effects)s(n,e)
if(t.symbolLayers)for(const n of t.symbolLayers)switch(n.type){case"CIMPictureMarker":case"CIMVectorMarker":a(n,e,i)
break
case"CIMPictureStroke":case"CIMSolidStroke":(null==i||!i.preserveOutlineWidth)&&n.width&&(n.width*=e)
break
case"CIMPictureFill":n.height&&(n.height*=e),n.offsetX&&(n.offsetX*=e),n.offsetY&&(n.offsetY*=e)
break
case"CIMHatchFill":o(n.lineSymbol,e,!0,{...i,preserveOutlineWidth:!1}),n.offsetX&&(n.offsetX*=e),n.offsetY&&(n.offsetY*=e),n.separation&&(n.separation*=e)}}else null!=t.height&&(t.height*=e)}function a(t,e,n){if(t&&(t.markerPlacement&&function(t,e){switch(Object(r.w)(t)&&t.offset&&(t.offset*=e),t.type){case"CIMMarkerPlacementAlongLineRandomSize":case"CIMMarkerPlacementAlongLineSameSize":if(t.customEndingOffset&&(t.customEndingOffset*=e),t.offsetAlongLine&&(t.offsetAlongLine*=e),t.placementTemplate&&t.placementTemplate.length){const n=t.placementTemplate.map(t=>t*e)
t.placementTemplate=n}break
case"CIMMarkerPlacementAlongLineVariableSize":if(t.maxRandomOffset&&(t.maxRandomOffset*=e),t.placementTemplate&&t.placementTemplate.length){const n=t.placementTemplate.map(t=>t*e)
t.placementTemplate=n}break
case"CIMMarkerPlacementOnLine":t.startPointOffset&&(t.startPointOffset*=e)
break
case"CIMMarkerPlacementAtExtremities":t.offsetAlongLine&&(t.offsetAlongLine*=e)
break
case"CIMMarkerPlacementAtMeasuredUnits":case"CIMMarkerPlacementOnVertices":break
case"CIMMarkerPlacementAtRatioPositions":t.beginPosition&&(t.beginPosition*=e),t.endPosition&&(t.endPosition*=e)
break
case"CIMMarkerPlacementPolygonCenter":t.offsetX&&(t.offsetX*=e),t.offsetY&&(t.offsetY*=e)
break
case"CIMMarkerPlacementInsidePolygon":t.offsetX&&(t.offsetX*=e),t.offsetY&&(t.offsetY*=e),t.stepX&&(t.stepX*=e),t.stepY&&(t.stepY*=e)}}(t.markerPlacement,e),t.offsetX&&(t.offsetX*=e),t.offsetY&&(t.offsetY*=e),t.anchorPoint&&"Absolute"===t.anchorPointUnits&&(t.anchorPoint={x:t.anchorPoint.x*e,y:t.anchorPoint.y*e}),t.size=null!=t.size?t.size*e:0,"CIMVectorMarker"===t.type&&t.markerGraphics))for(const i of t.markerGraphics)t.scaleSymbolsProportionally||o(i.symbol,e,!0,n)}function s(t,e){switch(t.type){case"CIMGeometricEffectArrow":case"CIMGeometricEffectDonut":t.width&&(t.width*=e)
break
case"CIMGeometricEffectBuffer":t.size&&(t.size*=e)
break
case"CIMGeometricEffectCut":t.beginCut&&(t.beginCut*=e),t.endCut&&(t.endCut*=e),t.middleCut&&(t.middleCut*=e)
break
case"CIMGeometricEffectDashes":if(t.customEndingOffset&&(t.customEndingOffset*=e),t.offsetAlongLine&&(t.offsetAlongLine*=e),t.dashTemplate&&t.dashTemplate.length){const n=t.dashTemplate.map(t=>t*e)
t.dashTemplate=n}break
case"CIMGeometricEffectExtension":case"CIMGeometricEffectJog":case"CIMGeometricEffectRadial":t.length&&(t.length*=e)
break
case"CIMGeometricEffectMove":t.offsetX&&(t.offsetX*=e),t.offsetY&&(t.offsetY*=e)
break
case"CIMGeometricEffectOffset":case"CIMGeometricEffectOffsetTangent":t.offset&&(t.offset*=e)
break
case"CIMGeometricEffectRegularPolygon":t.radius&&(t.radius*=e)
break
case"CIMGeometricEffectTaperedPolygon":t.fromWidth&&(t.fromWidth*=e),t.length&&(t.length*=e),t.toWidth&&(t.toWidth*=e)
break
case"CIMGeometricEffectWave":t.amplitude&&(t.amplitude*=e),t.period&&(t.period*=e)}}function c(t){const e=[]
return function t(e,n){var i,o
if(!e)return
let a
a="CIMTextSymbol"===e.type?e.symbol:e
const s="CIMPolygonSymbol"===e.type
if(null!=(i=a)&&i.symbolLayers)for(const e of a.symbolLayers)if(!(e.colorLocked||s&&(Object(r.x)(e)||Object(r.v)(e)&&e.markerPlacement&&Object(r.w)(e.markerPlacement))))switch(e.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":e.tintColor&&l(n,e.tintColor)
break
case"CIMVectorMarker":null==(o=e.markerGraphics)||o.forEach(e=>{t(e.symbol,n)})
break
case"CIMSolidStroke":case"CIMSolidFill":l(n,e.color)
break
case"CIMHatchFill":t(e.lineSymbol,n)}}(Object(r.C)(t),e),e.length?new i.a(Object(r.h)(e[0])):null}function l(t,e){for(const n of t)if(n.join(".")===e.join("."))return
t.push(e)}function u(t,e,n){e instanceof i.a||(e=new i.a(e))
const o=Object(r.C)(t)
o&&function t(e,n,i){var o,a,s
if(!e)return
let c
c="CIMTextSymbol"===e.type?e.symbol:e
const l="CIMPolygonSymbol"===(null==(o=c)?void 0:o.type)
if(null!=(a=c)&&a.symbolLayers)for(const e of c.symbolLayers){if(e.colorLocked)continue
if(l)if(i){const{layersToColor:t}=i
if((Object(r.x)(e)||Object(r.v)(e)&&e.markerPlacement&&Object(r.w)(e.markerPlacement))&&"fill"===t||Object(r.u)(e)&&"outline"===t)continue}else if(Object(r.x)(e)||Object(r.v)(e)&&e.markerPlacement&&Object(r.w)(e.markerPlacement))continue
const o=n.toArray()
switch(e.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":e.tintColor=o
break
case"CIMVectorMarker":null==(s=e.markerGraphics)||s.forEach(e=>{t(e.symbol,n,i)})
break
case"CIMSolidStroke":case"CIMSolidFill":e.color=o
break
case"CIMHatchFill":t(e.lineSymbol,n,i)}}}(o,e,n)}},1469:function(t,e,n){"use strict"
n.d(e,"a",(function(){return o}))
var i=n(973),r=n(1302)
class o{constructor(){this._tasks=new Array,this._running=new r.a(!1)}get length(){return this._tasks.length}get running(){return this._running.get()}destroy(){this.cancelAll()}runTask(t){for(;!t.done&&this._process(t);)t.madeProgress()}push(t,e,n){return this._running.set(!0),new Promise((i,r)=>this._tasks.push(new a(i,r,t,e,n)))}unshift(t,e,n){return this._running.set(!0),new Promise((i,r)=>this._tasks.unshift(new a(i,r,t,e,n)))}_process(t){if(0===this._tasks.length)return!1
const e=this._tasks.shift()
try{const n=Object(i.k)(e.signal)
if(n&&!e.abortCallback)e.reject(Object(i.c)())
else{const r=n?null==e.abortCallback?void 0:e.abortCallback(Object(i.c)()):e.callback(t)
Object(i.l)(r)?r.then(e.resolve,e.reject):e.resolve(r)}}catch(t){e.reject(t)}return this._running.set(this._tasks.length>0),!0}cancelAll(){const t=Object(i.c)()
for(const e of this._tasks)if(e.abortCallback){const n=e.abortCallback(t)
e.resolve(n)}else e.reject(t)
this._tasks.length=0,this._running.set(!1)}}class a{constructor(t,e,n,i,r){this.resolve=t,this.reject=e,this.callback=n,this.signal=i,this.abortCallback=r}}},1486:function(t,e,n){"use strict"
var i
n.d(e,"a",(function(){return i})),function(t){t[t.X=0]="X",t[t.Y=1]="Y",t[t.Z=2]="Z"}(i||(i={}))},1491:function(t,e,n){"use strict"
n.d(e,"a",(function(){return c}))
var i=n(968),r=n(975),o=n(970),a=(n(971),n(445),n(969))
let s=class extends r.a{constructor(){super(...arguments),this.SCHEDULER_LOG_SLOW_TASKS=!1,this.FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES=!1}}
Object(i.a)([Object(o.b)()],s.prototype,"SCHEDULER_LOG_SLOW_TASKS",void 0),Object(i.a)([Object(o.b)()],s.prototype,"FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES",void 0),s=Object(i.a)([Object(a.a)("esri.views.support.DebugFlags")],s)
const c=new s},1519:function(t,e){function n(t){return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'")
throw e.code="MODULE_NOT_FOUND",e}))}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=1519},1567:function(t,e,n){"use strict"
function i(){return[1,0,0,1,0,0]}function r(t){return[t[0],t[1],t[2],t[3],t[4],t[5]]}n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i})),Object.freeze(Object.defineProperty({__proto__:null,clone:r,create:i,createView:function(t,e){return new Float64Array(t,e,6)},fromValues:function(t,e,n,i,r,o){return[t,e,n,i,r,o]}},Symbol.toStringTag,{value:"Module"}))},1591:function(t,e,n){"use strict"
n.d(e,"a",(function(){return O})),n.d(e,"b",(function(){return m})),n.d(e,"c",(function(){return X})),n.d(e,"d",(function(){return y})),n.d(e,"e",(function(){return R})),n.d(e,"f",(function(){return k})),n.d(e,"g",(function(){return _})),n.d(e,"h",(function(){return M})),n.d(e,"i",(function(){return P})),n.d(e,"j",(function(){return x})),n.d(e,"k",(function(){return G})),n.d(e,"l",(function(){return L})),n.d(e,"m",(function(){return A})),n.d(e,"n",(function(){return j})),n(235)
var i=n(233),r=n(991),o=n(1366),a=n(1029),s=n(1031),c=n(985),l=n(981),u=n(1486),h=n(1425),p=n(1251),d=n(1216),b=n(1355),f=n(1172)
const g=i.a.getLogger("esri.views.3d.support.geometryUtils.boundedPlane"),O=class{constructor(){this.plane=Object(p.d)(),this.origin=Object(l.f)(),this.basis1=Object(l.f)(),this.basis2=Object(l.f)()}}
function m(t=U){return{plane:Object(p.d)(t.plane),origin:Object(l.d)(t.origin),basis1:Object(l.d)(t.basis1),basis2:Object(l.d)(t.basis2)}}function y(t,e=m()){return _(t.origin,t.basis1,t.basis2,e)}function _(t,e,n,i=m()){return Object(c.l)(i.origin,t),Object(c.l)(i.basis1,e),Object(c.l)(i.basis2,n),j(i),function(t,e){Math.abs(Object(c.n)(t.basis1,t.basis2)/(Object(c.u)(t.basis1)*Object(c.u)(t.basis2)))>1e-6&&g.warn(e,"Provided basis vectors are not perpendicular"),Math.abs(Object(c.n)(t.basis1,G(t)))>1e-6&&g.warn(e,"Basis vectors and plane normal are not perpendicular"),Math.abs(-Object(c.n)(G(t),t.origin)-t.plane[3])>1e-6&&g.warn(e,"Plane offset is not consistent with plane origin")}(i,"fromValues()"),i}function j(t){Object(p.j)(t.basis2,t.basis1,t.origin,t.plane)}function v(t,e,n){t!==n&&y(t,n)
const i=Object(c.p)(f.d.get(),G(t),e)
return Object(c.j)(n.origin,n.origin,i),n.plane[3]-=e,n}function M(t,e=m()){const n=(t[2]-t[0])/2,i=(t[3]-t[1])/2
return Object(c.B)(e.origin,t[0]+n,t[1]+i,0),Object(c.B)(e.basis1,n,0,0),Object(c.B)(e.basis2,0,i,0),Object(p.i)(0,0,1,0,e.plane),e}function x(t,e,n){return!!Object(p.n)(t.plane,e,n)&&N(t,n)}function T(t,e,n){const i=z.get()
F(t,e,i,z.get())
let o=Number.POSITIVE_INFINITY
for(const a of W){const s=D(t,a,H.get()),l=f.d.get()
if(Object(p.l)(i,s,l)){const t=Object(c.A)(f.d.get(),e.origin,l),i=Math.abs(Object(r.b)(Object(c.n)(e.direction,t)))
i<o&&(o=i,Object(c.l)(n,l))}}return o===Number.POSITIVE_INFINITY?S(t,e,n):n}function S(t,e,n){if(x(t,e,n))return n
const i=z.get(),r=z.get()
F(t,e,i,r)
let o=Number.POSITIVE_INFINITY
for(const a of W){const s=D(t,a,H.get()),l=f.d.get()
if(Object(p.m)(i,s,l)){const t=Object(d.d)(e,l)
if(!Object(p.o)(r,l))continue
t<o&&(o=t,Object(c.l)(n,l))}}return C(t,e.origin)<o&&w(t,e.origin,n),n}function w(t,e,n){const i=Object(p.r)(t.plane,e,f.d.get()),r=Object(h.j)(V(t,t.basis1),i,-1,1,f.d.get()),o=Object(h.j)(V(t,t.basis2),i,-1,1,f.d.get())
return Object(c.k)(n,Object(c.j)(f.d.get(),r,o),t.origin),n}function E(t,e,n){const{origin:i,basis1:r,basis2:o}=t,a=Object(c.k)(f.d.get(),e,i),s=Object(b.d)(r,a),l=Object(b.d)(o,a),u=Object(b.d)(G(t),a)
return Object(c.B)(n,s,l,u)}function C(t,e){const n=E(t,e,f.d.get()),{basis1:i,basis2:r}=t,o=Object(c.u)(i),a=Object(c.u)(r),s=Math.max(Math.abs(n[0])-o,0),l=Math.max(Math.abs(n[1])-a,0),u=n[2]
return s*s+l*l+u*u}function P(t,e){return Math.sqrt(C(t,e))}function k(t,e){return Object(p.o)(t.plane,e)&&N(t,e)}function I(t,e){const n=-t.plane[3]
return Object(b.d)(G(t),e)-n}function R(t,e){return Object(c.t)(t.basis1,e.basis1)&&Object(c.t)(t.basis2,e.basis2)&&Object(c.t)(t.origin,e.origin)}function A(t,e,n){return t!==n&&y(t,n),Object(a.e)(q,e),Object(a.x)(q,q),Object(c.v)(n.basis1,t.basis1,q),Object(c.v)(n.basis2,t.basis2,q),Object(c.v)(Object(p.q)(n.plane),Object(p.q)(t.plane),q),Object(c.v)(n.origin,t.origin,e),Object(p.u)(n.plane,n.plane,n.origin),n}function L(t,e,n,i){return t!==i&&y(t,i),Object(a.h)(Y,e,n),Object(c.v)(i.basis1,t.basis1,Y),Object(c.v)(i.basis2,t.basis2,Y),j(i),i}function G(t){return Object(p.q)(t.plane)}function N(t,e){const n=Object(c.k)(f.d.get(),e,t.origin),i=Object(c.y)(t.basis1),r=Object(c.y)(t.basis2),o=Object(c.n)(t.basis1,n),a=Object(c.n)(t.basis2,n)
return-o-i<0&&o-i<0&&-a-r<0&&a-r<0}function V(t,e){const n=H.get()
return Object(c.l)(n.origin,t.origin),Object(c.l)(n.vector,e),n}function D(t,e,n){const{basis1:i,basis2:r,origin:o}=t,a=Object(c.p)(f.d.get(),i,e.origin[0]),s=Object(c.p)(f.d.get(),r,e.origin[1])
Object(c.j)(n.origin,a,s),Object(c.j)(n.origin,n.origin,o)
const l=Object(c.p)(f.d.get(),i,e.direction[0]),u=Object(c.p)(f.d.get(),r,e.direction[1])
return Object(c.p)(n.vector,Object(c.j)(l,l,u),2),n}function F(t,e,n,i){const r=G(t)
Object(p.j)(r,e.direction,e.origin,n),Object(p.j)(Object(p.q)(n),r,e.origin,i)}const U={plane:Object(p.d)(),origin:Object(l.h)(0,0,0),basis1:Object(l.h)(1,0,0),basis2:Object(l.h)(0,1,0)},z=new o.a(p.d),H=new o.a(h.d),B=Object(l.f)(),Z=new o.a(()=>m()),W=[{origin:[-1,-1],direction:[1,0]},{origin:[1,-1],direction:[0,1]},{origin:[1,1],direction:[-1,0]},{origin:[-1,1],direction:[0,-1]}],q=Object(s.d)(),Y=Object(s.d)(),X=Object.freeze(Object.defineProperty({__proto__:null,BoundedPlaneClass:O,UP:U,altitudeAt:I,axisAt:function(t,e,n,i){return function(t,e,n){switch(e){case u.a.X:Object(c.l)(n,t.basis1),Object(c.w)(n,n)
break
case u.a.Y:Object(c.l)(n,t.basis2),Object(c.w)(n,n)
break
case u.a.Z:Object(c.l)(n,G(t))}return n}(t,n,i)},closestPoint:S,closestPointOnSilhouette:T,copy:y,copyWithoutVerify:function(t,e){Object(c.l)(e.origin,t.origin),Object(c.l)(e.basis1,t.basis1),Object(c.l)(e.basis2,t.basis2),Object(p.c)(e.plane,t.plane)},create:m,distance:P,distance2:C,distanceToSilhouette:function(t,e){let n=Number.NEGATIVE_INFINITY
for(const i of W){const r=D(t,i,H.get()),o=Object(h.e)(r,e)
o>n&&(n=o)}return Math.sqrt(n)},elevate:v,equals:R,extrusionContainsPoint:k,fromAABoundingRect:M,fromValues:_,intersectRay:x,intersectRayClosestSilhouette:function(t,e,n){if(x(t,e,n))return n
const i=T(t,e,f.d.get())
return Object(c.j)(n,e.origin,Object(c.p)(f.d.get(),e.direction,Object(c.r)(e.origin,i)/Object(c.u)(e.direction))),n},normal:G,projectPoint:w,projectPointLocal:E,rotate:L,setAltitudeAt:function(t,e,n,i){const r=I(t,e),o=Object(c.p)(B,G(t),n-r)
return Object(c.j)(i,e,o),i},setExtent:function(t,e,n){return M(e,n),v(n,I(t,t.origin),n),n},transform:A,updateUnboundedPlane:j,wrap:function(t,e,n){const i=Z.get()
return i.origin=t,i.basis1=e,i.basis2=n,i.plane=Object(p.w)(0,0,0,0),j(i),i}},Symbol.toStringTag,{value:"Module"}))},1663:function(t,e,n){"use strict"
n.d(e,"a",(function(){return w})),n.d(e,"b",(function(){return M})),n.d(e,"c",(function(){return x})),n.d(e,"d",(function(){return f})),n.d(e,"e",(function(){return b})),n.d(e,"f",(function(){return T})),n.d(e,"g",(function(){return g})),n.d(e,"h",(function(){return y})),n.d(e,"i",(function(){return j})),n.d(e,"j",(function(){return v})),n.d(e,"k",(function(){return _})),n.d(e,"l",(function(){return E})),n.d(e,"m",(function(){return P})),n.d(e,"n",(function(){return m})),n(982),n(235)
var i=n(234),r=n(991),o=n(23),a=n(980),s=n(981),c=n(1015),l=n(1421),u=n(1227),h=n(1077),p=n(2012),d=n(992)
function b(t,e){return t.events.on("drag",function(t,e){let n=null,i=null
return r=>{if("cancel"===r.action)return void(Object(o.l)(i)&&(i.execute({action:"cancel"}),n=null,i=null))
const a={action:r.action,screenStart:r.start,screenEnd:r.screenPoint}
"start"===r.action&&Object(o.k)(n)&&(n=new w,i=new w,e(t,n,i,r.pointerType,a)),Object(o.l)(n)&&n.execute(a),"end"===r.action&&Object(o.l)(n)&&(n=null,i=null)}}(t,e))}function f(t,e){var n
const i=[t.x,t.y,null!=(n=t.z)?n:0],r=e,o=[Math.cos(r),Math.sin(r)],a=Math.sqrt(o[0]*o[0]+o[1]*o[1])
if(0===a)return null
o[0]/=a,o[1]/=a
const s=t=>{const e=(t.x-i[0])*o[0]+(t.y-i[1])*o[1]
t.x=i[0]+e*o[0],t.y=i[1]+e*o[1]}
return t=>(s(t.mapStart),s(t.mapEnd),{...t,axis:o})}function g(t,e){let n=null
return i=>{if("start"===i.action&&(n=function(t,e,n){const i=t.geometry,r=Object(l.d)(e)
if(Object(o.k)(i))return null
if("mesh"===i.type)return function(t,e,n,i){if(Object(o.l)(e.transform))return function(t,e,n,i){const r=O(n.getOriginPoint(e.spatialReference),i),a=e.spatialReference
return Object(o.k)(r)?null:{move:(e,i,l)=>{const u=Object(p.d)(r.clone(),e,i,l)
if(u.spatialReference.equals(a))n.origin=Object(s.h)(u.x,u.y,u.z)
else{const t=Object(c.m)(u,a)
Object(o.l)(t)&&(n.origin=Object(s.h)(t.x,t.y,t.z))}t.notifyMeshTransformChanged(),t.notifyGeometryChanged()}}}(t,e,e.transform,n)
if(!e.spatialReference.equals(n))return null
let r=0,a=0,l=0
return{move:(n,o,s)=>{const c=n-r,u=o-a,p=s-l
if(c||u||p){const b=new d.a(e.origin.x+c,e.origin.y+u,e.origin.z+p,e.origin.spatialReference)
e.centerAt(b,{geographic:i===h.a.Global}),t.notifyGeometryChanged(),r=n,a=o,l=s}}}}(t,i,r,n)
const a=O(i,r),u=i.spatialReference
return Object(o.k)(a)?null:{move:(e,n,i)=>{const r=Object(p.d)(a.clone(),e,n,i)
r.spatialReference.equals(u)?t.geometry=r:t.geometry=Object(c.m)(r,u)}}}(t,i.mapStart.spatialReference,e)),Object(o.k)(n))return null
const r=i.mapEnd.x-i.mapStart.x,a=i.mapEnd.y-i.mapStart.y,u=i.mapEnd.z-i.mapStart.z
return n.move(r,a,u),{...i,translationX:r,translationY:a,translationZ:u}}}function O(t,e){return Object(o.k)(t)?null:t.spatialReference.equals(e)?t.clone():Object(c.m)(t,e)}function m(t,e=null,n){var i
let r=null
const a=!Object(o.l)(e)||null!=(i=t.spatialReference)&&i.equals(e)?t=>t:t=>Object(o.l)(t)?Object(c.m)(t,e):t,s={exclude:[],...n}
return e=>{if("start"===e.action&&(r=a(t.toMap(e.screenStart,s))),Object(o.k)(r))return null
const n=a(t.toMap(e.screenEnd,s))
return Object(o.l)(n)?{...e,mapStart:r,mapEnd:n}:null}}function y(t,e){const n=t.map(t=>Object(o.u)(g(t,e))).filter(t=>Object(o.l)(t))
return t=>{const e=t.mapEnd.x-t.mapStart.x,i=t.mapEnd.y-t.mapStart.y,r=t.mapEnd.z-t.mapStart.z
return n.forEach(e=>e(t)),{...t,translationX:e,translationY:i,translationZ:r}}}function _(t,e){const n=new Map
for(const r of e)n.set(r,Object(i.a)(t[r]))
return e=>(n.forEach((e,n)=>{t[n]=e}),e)}function j(t){return Object(o.l)(t.geometry)&&"mesh"===t.geometry.type?function(t,e){const n=Object(o.l)(e.transform)?e.transform.clone():null,i=e.vertexAttributes.clonePositional()
return r=>(e.transform=n,e.vertexAttributes=i,t.notifyGeometryChanged(),r)}(t,t.geometry):_(t,["geometry"])}function v(t){const e=t.map(t=>Object(o.u)(j(t))).filter(t=>Object(o.l)(t))
return t=>(e.forEach(e=>e(t)),t)}function M(){let t=0,e=0,n=0
return i=>{"start"===i.action&&(t=i.mapStart.x,e=i.mapStart.y,n=i.mapStart.z)
const r=i.mapEnd.x-t,o=i.mapEnd.y-e,a=i.mapEnd.z-n
return t=i.mapEnd.x,e=i.mapEnd.y,n=i.mapEnd.z,{...i,mapDeltaX:r,mapDeltaY:o,mapDeltaZ:a,mapDeltaSpatialReference:i.mapStart.spatialReference}}}function x(){let t=0,e=0
return n=>{"start"===n.action&&(t=n.screenStart.x,e=n.screenStart.y)
const i=n.screenEnd.x-t,r=n.screenEnd.y-e
return t=n.screenEnd.x,e=n.screenEnd.y,{...n,screenDeltaX:i,screenDeltaY:r}}}function T(t,e){let n=null,i=0,o=0
return s=>{if("start"===s.action&&(n=null==t.toScreen?void 0:t.toScreen(e),null!=n&&(n.x<0||n.x>t.width||n.y<0||n.y>t.height?n=null:(i=s.screenStart.x-n.x,o=s.screenStart.y-n.y))),null==n)return null
const c=Object(r.f)(s.screenEnd.x-i,0,t.width),l=Object(r.f)(s.screenEnd.y-o,0,t.height),u=Object(a.f)(c,l)
return s.screenStart=n,s.screenEnd=u,s}}const S=()=>{}
class w{constructor(){this.execute=S}next(t,e=new w){return Object(o.l)(t)&&(this.execute=n=>{const i=t(n)
Object(o.l)(i)&&e.execute(i)}),e}}function E(t,e,n=[]){if("2d"===t.type)return t=>t
let i=null
return r=>{"start"===r.action&&(i=t.toMap(r.screenStart,{exclude:n}),Object(o.l)(i)&&(i.z=Object(u.k)(i,t,e)))
const a=t.toMap(r.screenEnd,{exclude:n})
Object(o.l)(a)&&(a.z=Object(u.k)(a,t,e))
const s=Object(o.l)(i)&&Object(o.l)(a)?{sceneStart:i,sceneEnd:a}:null
return{...r,scenePoints:s}}}function C(t,e,n){var i,r
const a=null!=(i=Object(o.t)(e.elevationProvider.getElevation(t.x,t.y,null!=(r=t.z)?r:0,t.spatialReference,"scene")))?i:0,s=Object(l.a)(t)
return s.z=a,s.hasZ=!0,s.z=Object(u.k)(s,e,n),s}function P(t,e){if("2d"===t.type)return t=>t
let n=null
return i=>{"start"===i.action&&(n=C(i.mapStart,t,e))
const r=C(i.mapEnd,t,e),a=Object(o.l)(n)&&Object(o.l)(r)?{sceneStart:n,sceneEnd:r}:null
return{...i,scenePoints:a}}}},1841:function(t,e,n){"use strict"
n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return c}))
var i=n(1366),r=n(985),o=n(981),a=n(1425)
function s(t,e,n){const i=e[0]-t[0],r=e[1]-t[1],o=n[0]-t[0],a=n[1]-t[1]
return.5*Math.abs(i*a-r*o)}function c(t,e,n){return Object(r.k)(l,e,t),Object(r.k)(u,n,t),Object(r.u)(Object(r.o)(l,l,u))/2}n(1172),new i.a(a.d),new i.a(()=>function(t){return t?{p0:Object(o.d)(t.p0),p1:Object(o.d)(t.p1),p2:Object(o.d)(t.p2)}:{p0:Object(o.f)(),p1:Object(o.f)(),p2:Object(o.f)()}}())
const l=Object(o.f)(),u=Object(o.f)()},1918:function(t,e,n){"use strict"
n.d(e,"a",(function(){return o}))
var i=n(985),r=n(1772)
class o extends r.a{constructor(t,e,n){super(e,n),this.point=t}equals(t){return t instanceof o&&Object(i.t)(this.point,t.point)}}},1977:function(t,e,n){"use strict"
n.d(e,"a",(function(){return i}))
class i{constructor(t){this.vertexHandle=null,this.excludeFeature=null,this.visualizer=null,this.selfSnappingZ=null,this.editGeometryOperations=t.editGeometryOperations,this.elevationInfo=t.elevationInfo,this.pointer=t.pointer,this.vertexHandle=t.vertexHandle,this.excludeFeature=t.excludeFeature,this.visualizer=t.visualizer,this.selfSnappingZ=t.selfSnappingZ}get coordinateHelper(){return this.editGeometryOperations.data.coordinateHelper}get spatialReference(){return this.coordinateHelper.spatialReference}}},2056:function(t,e,n){"use strict"
n.d(e,"a",(function(){return f}))
var i,r,o=n(968),a=n(975),s=n(233),c=n(23),l=n(973),u=n(970),h=(n(971),n(445),n(969)),p=n(1424),d=n(993);(r=i||(i={}))[r.WhenToolEditable=0]="WhenToolEditable",r[r.WhenToolNotEditable=1]="WhenToolNotEditable",r[r.Always=2]="Always"
class b{constructor(){this._isToolEditable=!0,this._manipulators=new d.a,this._resourceContexts={manipulator3D:{}},this._attached=!1}set isToolEditable(t){this._isToolEditable=t}get length(){return this._manipulators.length}add(t,e=i.WhenToolEditable){this.addMany([t],e)}addMany(t,e=i.WhenToolEditable){for(const n of t){const t={manipulator:n,visibilityPredicate:e,attached:!1}
this._manipulators.add(t),this._attached&&this._updateManipulatorAttachment(t)}}remove(t){for(let e=0;e<this._manipulators.length;e++)if(this._manipulators.getItemAt(e).manipulator===t){const t=this._manipulators.splice(e,1)[0]
this._detachManipulator(t)
break}}removeAll(){this._manipulators.forEach(t=>{this._detachManipulator(t)}),this._manipulators.removeAll()}attach(){this._manipulators.forEach(t=>{this._updateManipulatorAttachment(t)}),this._attached=!0}detach(){this._manipulators.forEach(t=>{this._detachManipulator(t)}),this._attached=!1}destroy(){this.detach(),this._manipulators.forEach(({manipulator:t})=>{t.destroy&&t.destroy()}),this._manipulators.destroy(),this._resourceContexts=null}on(t,e){return this._manipulators.on(t,t=>{e(t)})}forEach(t){for(const e of this._manipulators.items)t(e)}some(t){return this._manipulators.items.some(t)}toArray(){const t=[]
return this.forEach(e=>t.push(e.manipulator)),t}intersect(t,e){let n=null,i=Number.MAX_VALUE
return this._manipulators.forEach(({manipulator:r,attached:o})=>{if(!o||!r.interactive)return
const a=r.intersectionDistance(t,e)
Object(c.l)(a)&&a<i&&(i=a,n=r)}),n}_updateManipulatorAttachment(t){this._isManipulatorItemVisible(t)?this._attachManipulator(t):this._detachManipulator(t)}_attachManipulator(t){t.attached||(t.manipulator.attach&&t.manipulator.attach(this._resourceContexts),t.attached=!0)}_detachManipulator(t){if(!t.attached)return
const e=t.manipulator
e.grabbing=!1,e.dragging=!1,e.hovering=!1,e.selected=!1,e.detach&&e.detach(this._resourceContexts),t.attached=!1}_isManipulatorItemVisible(t){return t.visibilityPredicate===i.Always||(this._isToolEditable?t.visibilityPredicate===i.WhenToolEditable:t.visibilityPredicate===i.WhenToolNotEditable)}}let f=class extends a.a{constructor(t){super(t),this.manipulators=new b,this.automaticManipulatorSelection=!0,this.hasGrabbedManipulators=!1,this.hasHoveredManipulators=!1,this.firstGrabbedManipulator=null,this.created=!1,this.removeIncompleteOnCancel=!0,this._editableFlags=new Map([[p.a.MANAGER,!0],[p.a.USER,!0]]),this._creationFinishedResolver=Object(l.e)()}get active(){return null!=this.view&&this.view.activeTool===this}set visible(t){this._get("visible")!==t&&(this._set("visible",t),this._syncVisible())}get editable(){return this.getEditableFlag(p.a.USER)}set editable(t){this.setEditableFlag(p.a.USER,t)}get updating(){return!1}get cursor(){return null}get hasFocusedManipulators(){return this.hasGrabbedManipulators||this.hasHoveredManipulators}destroy(){this.manipulators.destroy(),this._set("view",null)}onAdd(){this._syncVisible()}activate(){Object(c.k)(this.view)?s.a.getLogger(this.declaredClass).error("Can't activate tool if view is not defined."):(this.view.focus(),this.onActivate())}deactivate(){this.onDeactivate()}handleInputEvent(t){this.onInputEvent(t)}handleInputEventAfter(t){this.onInputEventAfter(t)}setEditableFlag(t,e){this._editableFlags.set(t,e),this.manipulators.isToolEditable=this.internallyEditable,this._updateManipulatorAttachment(),t===p.a.USER&&this.notifyChange("editable"),this.onEditableChange(),this.onManipulatorSelectionChanged()}getEditableFlag(t){var e
return null!=(e=this._editableFlags.get(t))&&e}whenCreated(){return this._creationFinishedResolver.promise}onManipulatorSelectionChanged(){}onActivate(){}onDeactivate(){}onShow(){}onHide(){}onEditableChange(){}onInputEvent(t){}onInputEventAfter(t){}get internallyEditable(){return this.getEditableFlag(p.a.USER)&&this.getEditableFlag(p.a.MANAGER)}finishToolCreation(){this.created||this._creationFinishedResolver.resolve(this),this._set("created",!0)}_syncVisible(){if(this.initialized)if(this.visible)this._show()
else if(this._hide(),this.active)return void(this.view.activeTool=null)}_show(){this._updateManipulatorAttachment(),this.onShow()}_hide(){this._updateManipulatorAttachment(),this.onHide()}_updateManipulatorAttachment(){this.visible?this.manipulators.attach():this.manipulators.detach()}}
Object(o.a)([Object(u.b)({constructOnly:!0})],f.prototype,"view",void 0),Object(o.a)([Object(u.b)({readOnly:!0})],f.prototype,"active",null),Object(o.a)([Object(u.b)({value:!0})],f.prototype,"visible",null),Object(o.a)([Object(u.b)({value:!0})],f.prototype,"editable",null),Object(o.a)([Object(u.b)({readOnly:!0})],f.prototype,"manipulators",void 0),Object(o.a)([Object(u.b)({readOnly:!0})],f.prototype,"updating",null),Object(o.a)([Object(u.b)()],f.prototype,"cursor",null),Object(o.a)([Object(u.b)({readOnly:!0})],f.prototype,"automaticManipulatorSelection",void 0),Object(o.a)([Object(u.b)()],f.prototype,"hasFocusedManipulators",null),Object(o.a)([Object(u.b)()],f.prototype,"hasGrabbedManipulators",void 0),Object(o.a)([Object(u.b)()],f.prototype,"hasHoveredManipulators",void 0),Object(o.a)([Object(u.b)()],f.prototype,"firstGrabbedManipulator",void 0),Object(o.a)([Object(u.b)({readOnly:!0})],f.prototype,"created",void 0),Object(o.a)([Object(u.b)({readOnly:!0})],f.prototype,"removeIncompleteOnCancel",void 0),f=Object(o.a)([Object(h.a)("esri.views.interactive.InteractiveToolBase")],f)},2198:function(t,e,n){"use strict"
n.d(e,"a",(function(){return h}))
var i=n(23),r=n(973),o=n(978),a=n(1657),s=n(1421),c=n(1663),l=n(1977),u=n(1148)
function h({predicate:t=(()=>!0),snappingManager:e,snappingContext:n,updatingHandles:s,useZ:h=!0}){const g=new c.a
if(Object(i.k)(e))return{snappingStep:[f,g],cancelSnapping:f}
let O,m=null,y=null,_=null
const j=()=>{m=Object(i.a)(m),e.doneSnapping(),Object(i.l)(y)&&y.frameTask.remove(),y=null,O=Object(i.s)(O),_=null},v=(M=e,x=h,T=g,Object(r.f)(async({frameTask:t,point:e,scenePoint:n,context:r,event:o,delta:s,getLastState:c},l)=>{const u=await t.schedule(()=>M.snap({point:e,scenePoint:n,context:r,signal:l}),l)
if(u.valid){let n=await t.schedule(()=>u.apply(),l)
const h=c()
Object(i.l)(h.point)&&e!==h.point&&(n=M.update({point:h.point,scenePoint:h.scenePoint,context:r})),!Object(i.k)(h.updatePoint)&&Object(a.b)(n,h.updatePoint)||(b(o.mapEnd,n,s,x),T.execute(o))}}))
var M,x,T
let S=null,w=null,E=null
return{snappingStep:[a=>{if(!t(a))return a
const{action:c}=a
if("start"===c){const{info:t}=a,r=function(t){return"3d"===t.type?t.resourceController.scheduler.registerTask(u.c.SNAPPING):u.a}(e.view)
if(y=function(t,e,n){return{context:new l.a({editGeometryOperations:t.editGeometryOperations,elevationInfo:t.elevationInfo,pointer:t.pointer,vertexHandle:Object(i.l)(e.info)?e.info.handle:null,excludeFeature:t.excludeFeature,visualizer:t.visualizer}),originalPos:Object(i.l)(e.snapOrigin)?t.coordinateHelper.vectorToDehydratedPoint(e.snapOrigin):e.mapStart,originalScenePos:Object(i.l)(e.scenePoints)?e.scenePoints.sceneStart:null,frameTask:n}}(n,a,r),y.context.selfSnappingZ=null,!h&&Object(i.l)(t)){const e=function(t,e){if(!t.hasZ())return null
const n=e.vertices
let r=null
for(const e of n){const n=t.getZ(e.pos)
if(Object(i.l)(r)&&Object(i.l)(n)&&Math.abs(n-r)>1e-6)return null
Object(i.k)(r)&&(r=n)}return r}(n.coordinateHelper,t.handle.component)
Object(i.l)(e)&&(y.context.selfSnappingZ={value:e,elevationInfo:n.elevationInfo})}}if(Object(i.l)(y)){const{context:t,originalScenePos:n,originalPos:l}=y,{mapEnd:u,mapStart:f,scenePoints:g}=a,j=p(l,d(u,f)),M=d(f,l),x={...a,action:"update"},T=y.context,C=function(t,e){return Object(i.k)(t)||Object(i.k)(e)?null:p(t,d(e.sceneEnd,e.sceneStart))}(n,g),P=e.update({point:j,scenePoint:C,context:t})
if(E=P,b(u,P,M,h),S=j,w=C,"end"!==c){const{frameTask:t}=y
Object(i.k)(m)&&(m=new AbortController),_=e=>{s.addPromise(Object(r.i)(v({frameTask:t,event:x,context:T,point:j,scenePoint:C,delta:M,getLastState:()=>({point:S,scenePoint:w,updatePoint:e.forceUpdate?null:E})},Object(i.u)(m).signal)))},_({forceUpdate:!1}),Object(i.k)(O)&&(O=Object(o.f)(()=>e.options.effectiveEnabled,()=>null==_?void 0:_({forceUpdate:!0})))}}return"end"===c&&j(),a},g],cancelSnapping:t=>(j(),t)}}function p(t,[e,n,i]){const r=Object(s.a)(t)
return r.x+=e,r.y+=n,r.hasZ&&(r.z+=i),r}function d(t,e){const n=t.hasZ&&e.hasZ?t.z-e.z:0
return[t.x-e.x,t.y-e.y,n]}function b(t,e,[n,i,r],o){t.x=e.x+n,t.y=e.y+i,o&&t.hasZ&&e.hasZ&&(t.z=e.z+r)}function f(t){return t}},2308:function(t,e,n){"use strict"
n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return b})),n.d(e,"c",(function(){return d})),n.d(e,"d",(function(){return y}))
var i=n(23),r=n(1513),o=n(997),a=n(1303),s=n(985),c=n(981),l=n(1015),u=n(1251),h=n(1841),p=n(2138)
function d(t,e={positionsWorldCoords:[]}){return f(t,e)}function b(t,e={positionsWorldCoords:[]}){return f(t,e,!1)}function f(t,e,n=t.hasZ){const a=Object(p.a)(t.spatialReference),d=Object(o.b)(a)
if(Object(i.k)(d))return null
const b=(t,e)=>!(e.length<2||(Object(s.B)(t,e[0],e[1],n&&e[2]||0),0))
let f=0
for(const n of t.rings){const i=n.length
if(i<3)continue
const{positionsWorldCoords:r}=e
for(;r.length<i;)r.push(Object(c.f)())
const o=g,p=Object(s.B)(O,0,0,0),d=1/i
for(let e=0;e<i;e++){if(!b(o,n[e]))return null
if(!Object(l.C)(o,t.spatialReference,r[e],a))return null
Object(s.I)(p,p,r[e],d)}const m=Object(u.g)(r[0],r[1],p,Object(u.w)())
if(0===Object(s.y)(Object(u.q)(m)))continue
for(let t=0;t<i;t++)Object(u.s)(m,p,r[t],r[t])
const _=y(r)
for(let t=0;t<_.length;t+=3)f+=Object(h.a)(r[_[t]],r[_[t+1]],r[_[t+2]])}return Object(r.b)(f,d)}const g=Object(c.f)(),O=Object(c.f)()
function m(){return{positionsWorldCoords:[]}}function y(t){return Object(a.a)(function(t){const e=new Float64Array(2*t.length)
for(let n=0;n<t.length;++n){const i=t[n],r=2*n
e[r+0]=i[0],e[r+1]=i[1]}return e}(t),[],2)}},2312:function(t,e,n){"use strict"
n.d(e,"a",(function(){return l}))
var i=n(1017),r=n(2122),o=n(1694),a=n(2121),s=n(1918),c=n(2004)
class l{draw(t,e){const n=this._getUniqueHints(t),l=this.sortUniqueHints(n),u=[]
for(const t of l)t instanceof r.a&&u.push(this.visualizeIntersectionPoint(t,e)),t instanceof o.a&&u.push(this.visualizeLine(t,e)),t instanceof a.a&&u.push(this.visualizeParallelSign(t,e)),t instanceof c.a&&u.push(this.visualizeRightAngleQuad(t,e)),t instanceof s.a&&u.push(this.visualizePoint(t,e))
return Object(i.b)(u)}sortUniqueHints(t){return t}_getUniqueHints(t){const e=[]
for(const n of t){let t=!0
for(const i of e)if(n.equals(i)){t=!1
break}t&&e.push(n)}return e}}},2557:function(t,e,n){"use strict"
n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return u})),n.d(e,"d",(function(){return h}))
var i=n(990),r=n(110),o=n(794)
function a(t,e){const n=t.a*e
return Object(o.getColorLuminance)(t)>225?new i.a([0,0,0,n]):new i.a([255,255,255,n])}function s(t,e){const n=new i.a(t)
return n.a*=e,n}function c(t=1){return s(r.default.analysisTheme.accentColor,t)}function l(t=1){return a(c(),t)}function u(t=1){return s(r.default.analysisTheme.textColor,t)}function h(t=1){return a(u(),t)}},2592:function(t,e,n){"use strict"
n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return b}))
var i=n(23),r=n(2308),o=(n(982),n(1513)),a=n(785),s=n(1015),c=n(1970),l=n(2562),u=n(769)
function h(t){return Object(o.b)(Math.abs(Object(c.c)([t],"square-meters")[0]),"square-meters")}function p(t){try{return Object(o.b)(Math.abs(Object(a.geodesicArea)(t,"square-meters")),"square-meters")}catch(t){return null}}function d(t){const e=[]
return Object(s.y)(t,e)?Object(o.b)(Math.abs(Object(c.c)([{type:"polygon",rings:e,spatialReference:u.default.WGS84}],"square-meters")[0]),"square-meters"):null}function b(t,e,n=Object(r.a)()){if("on-the-ground"===e){const e=function(t){const{spatialReference:e}=t
return Object(l.a)(e,h,p,d,t)}(t)
return Object(i.l)(e)?e:Object(r.b)(t,n)}return Object(r.c)(t,n)}function f(t,e=Object(r.a)()){return b(t,"on-the-ground",e)}},2670:function(t,e,n){"use strict"
n.d(e,"a",(function(){return u}))
var i=n(968),r=n(975),o=n(23),a=n(973),s=n(970),c=(n(971),n(445),n(969)),l=n(1148)
let u=class extends r.a{constructor(t){super(t),this.constrainResult=t=>t,this._snapPoints=null,this._frameTask=null,this._abortController=null,this._stagedPoint=null,this._snap=Object(a.f)(async(t,e,n,i)=>{const r=this._frameTask
if(Object(o.k)(r))return
const a=await r.schedule(()=>e.snap({...t,context:n,signal:i}),i)
a.valid&&await r.schedule(()=>{this.stagedPoint=a.apply(),t!==this._snapPoints&&Object(o.l)(this._snapPoints)&&(this.stagedPoint=e.update({...this._snapPoints,context:n}))},i)})}get stagedPoint(){return this._stagedPoint}set stagedPoint(t){this._stagedPoint=this.constrainResult(t)}initialize(){var t,e
const n="3d"===this.view.type?null==(t=this.view)||null==(e=t.resourceController)?void 0:e.scheduler:null
this._frameTask=Object(o.l)(n)?n.registerTask(l.c.SNAPPING):l.a}destroy(){this._abortController=Object(o.a)(this._abortController),this._frameTask=Object(o.s)(this._frameTask)}update(t,e,n){this._snapPoints=t
const{point:i,scenePoint:r}=t,o=e.update({point:i,scenePoint:r,context:n})
return this.stagedPoint=o,o}async snap(t,e,n){const{point:i,scenePoint:r}=t
return this.stagedPoint=e.update({point:i,scenePoint:r,context:n}),this._snapPoints=t,Object(o.k)(this._abortController)&&(this._abortController=new AbortController),this._snap(t,e,n,this._abortController.signal)}async resnap(t,e){Object(o.k)(this._snapPoints)||await this.snap(this._snapPoints,t,e)}abort(){this._abortController=Object(o.a)(this._abortController),this._snapPoints=null}}
Object(i.a)([Object(s.b)({constructOnly:!0})],u.prototype,"view",void 0),Object(i.a)([Object(s.b)()],u.prototype,"stagedPoint",null),Object(i.a)([Object(s.b)()],u.prototype,"constrainResult",void 0),Object(i.a)([Object(s.b)()],u.prototype,"_stagedPoint",void 0),u=Object(i.a)([Object(c.a)("esri.views.interactive.snapping.SnappingOperation")],u)},2674:function(t,e,n){"use strict"
n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return m})),n.d(e,"c",(function(){return _})),n.d(e,"d",(function(){return y})),n.d(e,"e",(function(){return g}))
var i=n(23),r=n(1513),o=n(1013),a=n(985),s=n(981),c=n(1591),l=n(1172),u=n(2664),h=n(2665),p=n(2666),d=n(1974),b=n(2013)
function f(t,e){return O(t,e,!1)}function g(t,e){return O(t,e,!0)}function O(t,e,n){if(t instanceof d.b){if(t.operation instanceof u.a)return function(t,e,n=!1){const i=n?-1:1,r=Object(s.h)(i*t.dx,i*t.dy,i*t.dz)
Object(a.j)(e.origin,e.origin,r)}(t.operation,e,n),!0
if(t.operation instanceof h.a)return function(t,e,n=!1){const i=n?-t.angle:t.angle
Object(a.i)(e.basis1,e.basis1,s.c,i),Object(a.i)(e.basis2,e.basis2,s.c,i)}(t.operation,e,n),!0
if(t.operation instanceof p.a)return function(t,e,n=!1){const i=n?1/t.factor1:t.factor1,r=n?1/t.factor2:t.factor2
Object(a.p)(e.basis1,e.basis1,i),Object(a.p)(e.basis2,e.basis2,r),Object(o.u)(e.origin,e.origin,t.origin,t.axis1,i),Object(o.u)(e.origin,e.origin,t.origin,t.axis2,r)}(t.operation,e,n),!0}return!1}function m(t,e,n,i){i||(i=Object(c.b)())
const r=Object(o.s)(l.c.get(),t[1],-t[0]),a=Object(o.s)(l.c.get(),Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY),s=Object(o.s)(l.c.get(),Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY),u=l.c.get()
e.components.forEach(e=>e.vertices.forEach(e=>{const n=e.pos
Object(o.s)(u,Object(o.h)(t,n),Object(o.h)(r,n)),Object(o.x)(a,a,u),Object(o.y)(s,s,u)}))
const h=1e-6,p=Object(o.s)(l.c.get(),s[0]-a[0]<h?n/2:0,s[1]-a[1]<h?n/2:0)
return Object(o.a)(a,a,p),Object(o.j)(s,s,p),Object(o.b)(i.basis1,t,(s[0]-a[0])/2),Object(o.b)(i.basis2,r,(s[1]-a[1])/2),Object(o.s)(i.origin,a[0]*t[0]+a[1]*r[0],a[0]*t[1]+a[1]*r[1]),Object(o.j)(i.origin,i.origin,i.basis1),Object(o.j)(i.origin,i.origin,i.basis2),i}function y(t,e,n,i=0,r){r||(r=Object(c.b)()),e.toRenderCoords(t.origin,n,r.origin)
const o=l.d.get()
Object(a.j)(o,t.origin,t.basis1),Object(a.j)(o,o,t.basis2),e.toRenderCoords(o,n,o)
const s=l.d.get()
Object(a.j)(s,t.origin,t.basis1),Object(a.k)(s,s,t.basis2),e.toRenderCoords(s,n,s)
const u=l.d.get()
Object(a.k)(u,t.origin,t.basis1),Object(a.k)(u,u,t.basis2),e.toRenderCoords(u,n,u)
const h=l.d.get()
Object(a.k)(h,t.origin,t.basis1),Object(a.j)(h,h,t.basis2),e.toRenderCoords(h,n,h)
const p=Object(a.q)(l.d.get(),o,s,.5)
Object(a.k)(p,p,r.origin)
const d=Object(a.q)(l.d.get(),u,h,.5)
Object(a.k)(d,r.origin,d),Object(a.q)(r.basis1,p,d,.5)
const b=Object(a.q)(l.d.get(),h,o,.5)
Object(a.k)(b,b,r.origin)
const f=Object(a.q)(l.d.get(),s,u,.5)
Object(a.k)(f,r.origin,f),Object(a.q)(r.basis2,b,f,.5)
const g=Object(a.o)(l.d.get(),r.basis1,r.basis2),O=Object(a.o)(g,g,r.basis1)
return Object(a.w)(O,O),Object(a.p)(r.basis2,O,Object(a.n)(r.basis2,O)),Object(a.p)(r.basis1,r.basis1,1+i/Object(a.u)(r.basis1)),Object(a.p)(r.basis2,r.basis2,1+i/Object(a.u)(r.basis2)),Object(c.n)(r),r}function _(t,e,n,o){const s=l.d.get()
Object(a.k)(s,Object(a.k)(s,t.origin,t.basis1),t.basis2)
const c=l.d.get()
Object(a.I)(c,s,t.basis1,2)
const u=l.d.get()
Object(a.I)(u,c,t.basis2,2)
const h=l.d.get()
Object(a.I)(h,s,t.basis2,2),s[2]=c[2]=u[2]=h[2]=e
const p=o?"on-the-ground":"absolute-height",d=Object(r.e)(Object(b.c)(s,c,n,p),Object(b.c)(h,u,n,p)),f=Object(r.e)(Object(b.c)(c,u,n,p),Object(b.c)(s,h,n,p))
return Object(i.k)(f)||Object(i.k)(d)?null:[d,f]}},2840:function(t,e,n){"use strict"
n.d(e,"a",(function(){return m})),n(982)
var i=n(772),r=(n(995),n(1017)),o=n(980),a=n(1013),s=n(1026),c=n(981),l=n(1030),u=n(2730),h=n(1832),p=n(2312),d=n(1078),b=n(1065),f=n(781),g=n(992),O=n(1021)
class m extends p.a{constructor(t){super(),this._graphicsLayer=t}visualizeIntersectionPoint(t,e){return this._visualizeSnappingIndicator(new g.a({x:t.intersectionPoint[0],y:t.intersectionPoint[1],spatialReference:e.spatialReference}),j)}visualizePoint(t,e){return this._visualizeSnappingIndicator(new g.a({x:t.point[0],y:t.point[1],spatialReference:e.spatialReference}),v)}visualizeLine(t,e){return this._visualizeSnappingIndicator(new O.a({paths:[[t.lineStart,t.lineEnd]],spatialReference:e.spatialReference}),M)}visualizeParallelSign(t,e){return this._visualizeSnappingIndicator(new O.a({paths:[[t.lineStart,t.lineEnd]],spatialReference:e.spatialReference}),x)}visualizeRightAngleQuad(t,e){return this._visualizeSnappingIndicator(new O.a({paths:[[t.previousVertex,t.centerVertex,t.nextVertex]],spatialReference:e.spatialReference}),E(t))}_visualizeSnappingIndicator(t,e){const n=new i.default({geometry:t,symbol:e})
return this._graphicsLayer.add(n),Object(r.c)(()=>{this._graphicsLayer.remove(n)})}}const y=u.a.main.toArray(),_=[...u.a.main.toRgb(),100],j=new d.a({outline:new b.a({width:1.5,color:y}),size:15,color:[0,0,0,0]}),v=new d.a({outline:{width:.5,color:[0,0,0,1]},size:10,color:y}),M=new f.default({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",enable:!0,capStyle:l.q.Butt,joinStyle:l.s.Round,miterLimit:10,width:Object(o.i)(h.a.lineHintWidthTarget),color:y}]}}}),x=new f.default({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:-1,z:0},anchorPointUnits:"Relative",size:5,markerPlacement:{type:"CIMMarkerPlacementOnLine",placePerPart:!0,angleToLine:!0,relativeTo:"LineMiddle"},frame:{xmin:-5,ymin:-1.5,xmax:5,ymax:1.5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[7,0],[-7,0],[-7,1.5],[7,1.5]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:y}]}}],scaleSymbolsProportionally:!0,respectFrame:!0},{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:1,z:0},anchorPointUnits:"Relative",size:5,markerPlacement:{type:"CIMMarkerPlacementOnLine",placePerPart:!0,angleToLine:!0,relativeTo:"LineMiddle"},frame:{xmin:-5,ymin:-1.5,xmax:5,ymax:1.5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[7,0],[-7,0],[-7,-1.5],[7,-1.5]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:y}]}}],scaleSymbolsProportionally:!0,respectFrame:!0}]}}}),T=t=>new f.default({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:.5,y:.5,z:0},anchorPointUnits:"Relative",size:Object(o.i)(h.a.rightAngleHintSize),rotation:t,markerPlacement:{type:"CIMMarkerPlacementOnVertices",placePerPart:!0,angleToLine:!0,placeOnEndPoints:!1},frame:{xmin:-5,ymin:-5,xmax:5,ymax:5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{paths:[[[5,-5],[-5,-5],[-5,5],[5,5],[5,-5]]]},symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:Object(o.i)(h.a.rightAngleHintOutlineSize),color:y},{type:"CIMSolidFill",enable:!0,color:_}]}}],scaleSymbolsProportionally:!0,respectFrame:!0}]}}}),S=T(45),w=T(225),E=(()=>{const t=Object(s.d)(),e=Object(s.d)(),n=Object(c.f)()
return i=>(Object(a.a)(t,i.centerVertex,i.previousVertex),Object(a.a)(e,i.nextVertex,i.previousVertex),Object(a.g)(n,t,e),n[2]<0?S:w)})()},2841:function(t,e,n){"use strict"
n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return l}))
var i=n(23),r=n(980),o=n(1185),a=n(1421),s=n(1227)
class c{constructor(t,e,n,i=null){this._elevationInfo=t,this.defaultZ=e,this._view=n,this._excludeGraphics=i}screenToMap(t){if(Object(i.l)(this.defaultZ))return this._view.sceneIntersectionHelper.intersectElevationFromScreen(Object(r.g)(t.x,t.y),this._elevationInfo,this.defaultZ,this._excludeGraphics)
const e=this._view.sceneIntersectionHelper.intersectElevationFromScreen(Object(r.g)(t.x,t.y),this._elevationInfo,0,this._excludeGraphics)
return Object(i.l)(e)&&(e.z=void 0),e}mapToScreen(t){const e=Object(o.j)(t.x,t.y,Object(s.c)(this._view,t,this._elevationInfo),t.spatialReference)
return this._view.toScreen(e)}constrainZ(t){const{defaultZ:e}=this
return Object(i.l)(e)&&t.z!==e&&((t=Object(a.a)(t)).z=e),t}}class l{constructor(t,e,n=[]){this.view=t,this.elevationInfo=e,this.exclude=n}screenToMap(t){const e=this.view.toMap(t,{exclude:this.exclude})
return Object(i.l)(e)&&(e.z=Object(s.k)(e,this.view,this.elevationInfo)),e}mapToScreen(t){let e=t
return Object(i.l)(this.elevationInfo)&&(e=Object(o.j)(t.x,t.y,Object(s.c)(this.view,t,this.elevationInfo),t.spatialReference)),this.view.toScreen(e)}constrainZ(t){return t}}class u{constructor(t,e=!1,n=0){this.view=t,this.hasZ=e,this.defaultZ=n,this.mapToScreen=e=>t.toScreen(e),this.screenToMap=e?e=>{const i=t.toMap(e)
return i.z=n,i}:e=>t.toMap(e)}constrainZ(t){const{defaultZ:e}=this
return this.hasZ&&t.z!==e&&((t=Object(a.a)(t)).z=e),t}}},2852:function(t,e,n){"use strict"
n.d(e,"a",(function(){return ct})),n.d(e,"b",(function(){return ht}))
var i=n(968),r=n(772),o=n(1002),a=n(1025),s=n(1017),c=n(23),l=n(1513),u=n(978),h=n(997),p=n(970),d=(n(971),n(445)),b=n(969),f=n(789),g=n(1227),O=(n(982),n(234)),m=n(985),y=n(981),_=n(2628),j=n(785),v=n(1066),M=n(988),x=n(1215),T=n(1567),S=n(1452),w=n(1323),E=n(1486),C=n(992)
function P(t,e,n=null){return Object(c.l)(n)?[t,e,n]:[t,e]}function k(t,e,n=null){return Object(c.l)(n)?{x:t,y:e,z:n}:{x:t,y:e}}class I{constructor(t){this.spatialReference=t}mapToLocalMultiple(t){return Object(c.h)(t.map(t=>this.mapToLocal(t)))}get doUnnormalization(){return!1}}class R extends I{constructor(t,e,n=null){super(e),this._defaultZ=n,this.transform=Object(T.b)(),this.transformInv=Object(T.b)(),this.transform=Object(T.a)(t),Object(x.c)(this.transformInv,this.transform)}makeMapPoint(t,e){return P(t,e,this._defaultZ)}mapToLocal(t){return k(this.transform[0]*t[0]+this.transform[2]*t[1]+this.transform[4],this.transform[1]*t[0]+this.transform[3]*t[1]+this.transform[5])}localToMap(t){return P(this.transformInv[0]*t.x+this.transformInv[2]*t.y+this.transformInv[4],this.transformInv[1]*t.x+this.transformInv[3]*t.y+this.transformInv[5],this._defaultZ)}}class A extends I{constructor(t,e){super(t.spatialReference),this.view=t,this.defaultZ=null,this.pWS=Object(y.f)(),this.tangentFrameUpWS=Object(y.f)(),this.tangentFrameRightWS=Object(y.f)(),this.tangentFrameForwardWS=Object(y.f)(),this.localFrameRightWS=Object(y.f)(),this.localFrameUpWS=Object(y.f)(),this.worldToLocalTransform=Object(w.b)(),this.localToWorldTransform=Object(w.b)(),this.scale=1,this.scale=t.resolution,this.referenceMapPoint=e,this.defaultZ=e.hasZ?e.z:null
const n=t.state.camera.viewRight
this.view.renderCoordsHelper.toRenderCoords(this.referenceMapPoint,this.pWS),this.view.renderCoordsHelper.worldBasisAtPosition(this.pWS,E.a.X,this.tangentFrameRightWS),this.view.renderCoordsHelper.worldBasisAtPosition(this.pWS,E.a.Y,this.tangentFrameUpWS),this.view.renderCoordsHelper.worldBasisAtPosition(this.pWS,E.a.Z,this.tangentFrameForwardWS)
const i=Object(y.f)()
Object(m.p)(i,this.tangentFrameForwardWS,Object(m.n)(n,this.tangentFrameForwardWS)),Object(m.k)(this.localFrameRightWS,n,i),Object(m.w)(this.localFrameRightWS,this.localFrameRightWS),Object(m.o)(this.localFrameUpWS,this.tangentFrameForwardWS,this.localFrameRightWS),Object(S.h)(this.worldToLocalTransform,this.localFrameRightWS,this.tangentFrameRightWS),Object(S.d)(this.localToWorldTransform,this.worldToLocalTransform)}get doUnnormalization(){return"global"===this.view.viewingMode}makeMapPoint(t,e){return P(t,e,this.defaultZ)}mapToLocal(t){const e=Object(y.f)()
this.view.renderCoordsHelper.toRenderCoords(new C.a({x:t[0],y:t[1],spatialReference:this.spatialReference}),e),Object(m.z)(e,e,this.worldToLocalTransform)
const n=this.view.renderCoordsHelper.fromRenderCoords(e,this.view.spatialReference)
return Object(c.l)(n)?k(n.x/this.scale,n.y/this.scale):null}localToMap(t){const e=Object(y.f)()
this.view.renderCoordsHelper.toRenderCoords(new C.a({x:t.x*this.scale,y:t.y*this.scale,spatialReference:this.spatialReference}),e),Object(m.z)(e,e,this.localToWorldTransform)
const n=this.view.renderCoordsHelper.fromRenderCoords(e,this.view.spatialReference)
return Object(c.l)(n)?P(n.x,n.y,this.defaultZ):null}}function L(t,e){if("2d"===t.type)return new R(t.state.transform,t.spatialReference,e.length>2?e[2]:null)
if("3d"===t.type){const n=e.length>2?new C.a({x:e[0],y:e[1],z:e[2],spatialReference:t.spatialReference}):new C.a({x:e[0],y:e[1],spatialReference:t.spatialReference})
return new A(t,n)}return null}var G=n(1055),N=n(1021),V=n(773)
function D(t,e){const n=new C.a({x:t[0],y:t[1],spatialReference:e})
return t.length>2&&(n.z=t[2]),n}function F(t,e,n){const i=new N.a({paths:t,spatialReference:e})
return n&&Object(v.m)(i),i}function U(t,e,n,i=!0){const r=Object(O.a)(t)
r.forEach(t=>{const e=t[0],n=t[t.length-1]
Object(d.e)(e,n)&&1!==t.length||t.push(t[0])})
let o=new V.default({rings:r,spatialReference:e})
return o.rings.forEach(t=>{Object(v.k)(t,!1,!1)||t.reverse()}),n&&Object(v.m)(o),i&&o.isSelfIntersecting&&Object(M.l)(e)&&(o=Object(j.simplify)(o)),o}function z(t,e,n){const i=e.mapToLocalMultiple(t),r=[],o={x:i[0].x,y:i[0].y},a=i[1].x,s=i[1].y,l=Math.round(a-o.x),u=Math.round(s-o.y),h=Math.max(Math.abs(l),Math.abs(u))
if(n){const t={x:o.x+h,y:o.y+h},e={x:o.x-h,y:o.y-h}
r.push(k(t.x,e.y),k(e.x,e.y),k(e.x,t.y),k(t.x,t.y))}else{const t={x:l>0?o.x+h:o.x-h,y:u>0?o.y+h:o.y-h}
r.push(k(o.x,o.y),k(t.x,o.y),k(t.x,t.y),k(o.x,t.y))}return H(U([Object(c.h)(r.map(t=>e.localToMap(t)))],e.spatialReference,e.doUnnormalization,!0),r,e)}function H(t,e,n){const i=B(e[3],e[2],n),r=B(e[1],e[2],n),o=B(e[0],e[1],n),a=B(e[0],e[3],n)
return{geometry:t,midpoints:Object(c.l)(i)&&Object(c.l)(r)&&Object(c.l)(o)&&Object(c.l)(a)?{top:i,right:r,bottom:o,left:a}:null}}function B(t,e,n){W[0]=t.x,W[1]=t.y,W[2]=0,q[0]=e.x,q[1]=e.y,q[2]=0,Object(m.q)(W,W,q,.5),Z.x=W[0],Z.y=q[1],Z.z=q[2]
const i=n.localToMap(Z)
return Object(c.l)(i)?D(i,n.spatialReference):null}const Z=k(0,0,0),W=Object(y.f)(),q=Object(y.f)()
function Y(t,e,n,i){const r=e.mapToLocalMultiple(t)
let o=null,a=null
if(n)o=r[0],a=r[1]
else{const t=r[0],e=r[1],n=Math.round(e.x-t.x),i=Math.round(e.y-t.y),s=Math.max(Math.abs(n),Math.abs(i))
o=k(n>0?t.x+s/2:t.x-s/2,i>0?t.y+s/2:t.y-s/2),a=k(Math.abs(n)>Math.abs(i)?o.x-s/2:o.x,Math.abs(n)>Math.abs(i)?o.y:o.y-s/2)}const s=e.localToMap(o),l=e.localToMap(a)
if(Object(c.k)(s)||Object(c.k)(l))return null
e.doUnnormalization&&Object(v.n)([[s,l]],e.spatialReference)
const u=D(s,e.spatialReference),p=D(l,e.spatialReference),d=Object(h.g)(e.spatialReference)
let b=0
if(Object(M.l)(e.spatialReference))b=d*Object(j.distance)(u,p,null)
else{const t=o.x-a.x,e=o.y-a.y
b=d*Math.sqrt(t*t+e*e)*(i||1)}const f=new _.a({center:u,radius:b,radiusUnit:"meters",spatialReference:e.spatialReference})
return{geometry:U(f.rings,f.spatialReference,!1),center:u,edge:p}}function X(t,e){switch(t){case"point":case"multipoint":return"point"
case"polyline":return(Object(c.l)(e)&&"polyline"===e.type&&e.paths.length?e.paths[0].length:0)<2?"polylineZeroVertices":"polylineOneVertex"
case"polygon":{const t=Object(c.l)(e)&&"polygon"===e.type&&e.rings.length?e.rings[0].length:0
return t<3?"polylineZeroVertices":t<4?"polygonOneVertex":"polygonTwoVertices"}default:return}}var Q=n(2056),J=n(2186),K=n(1980),$=n(2081)
let tt=class extends $.a{constructor(t){super(t),this.type="draw-point",this.helpMessage=void 0}}
Object(i.a)([Object(p.b)()],tt.prototype,"type",void 0),Object(i.a)([Object(p.b)()],tt.prototype,"elevation",void 0),Object(i.a)([Object(p.b)()],tt.prototype,"viewType",void 0),Object(i.a)([Object(p.b)()],tt.prototype,"helpMessage",void 0),tt=Object(i.a)([Object(b.a)("esri.views.interactive.tooltip.DrawPointTooltipInfo")],tt)
let et=class extends $.a{constructor(t){super(t),this.type="draw-polyline",this.totalLength=l.h,this.helpMessage=void 0}}
Object(i.a)([Object(p.b)()],et.prototype,"type",void 0),Object(i.a)([Object(p.b)()],et.prototype,"elevation",void 0),Object(i.a)([Object(p.b)()],et.prototype,"totalLength",void 0),Object(i.a)([Object(p.b)()],et.prototype,"viewType",void 0),Object(i.a)([Object(p.b)()],et.prototype,"helpMessage",void 0),et=Object(i.a)([Object(b.a)("esri.views.interactive.tooltip.DrawPolylineTooltipInfo")],et)
let nt=class extends $.a{constructor(t){super(t),this.type="draw-polygon",this.area=l.i,this.helpMessage=void 0}}
Object(i.a)([Object(p.b)()],nt.prototype,"type",void 0),Object(i.a)([Object(p.b)()],nt.prototype,"elevation",void 0),Object(i.a)([Object(p.b)()],nt.prototype,"area",void 0),Object(i.a)([Object(p.b)()],nt.prototype,"viewType",void 0),Object(i.a)([Object(p.b)()],nt.prototype,"helpMessage",void 0),nt=Object(i.a)([Object(b.a)("esri.views.interactive.tooltip.DrawPolygonTooltipInfo")],nt)
let it=class extends $.a{constructor(t){super(t),this.type="draw-rectangle",this.xSize=l.h,this.ySize=l.h,this.area=l.i}}
Object(i.a)([Object(p.b)()],it.prototype,"type",void 0),Object(i.a)([Object(p.b)()],it.prototype,"xSize",void 0),Object(i.a)([Object(p.b)()],it.prototype,"ySize",void 0),Object(i.a)([Object(p.b)()],it.prototype,"area",void 0),it=Object(i.a)([Object(b.a)("esri.views.interactive.tooltip.DrawRectangleTooltipInfo")],it)
let rt=class extends $.a{constructor(t){super(t),this.type="draw-circle",this.radius=null,this.xSize=null,this.ySize=null,this.area=l.i}}
Object(i.a)([Object(p.b)()],rt.prototype,"type",void 0),Object(i.a)([Object(p.b)()],rt.prototype,"radius",void 0),Object(i.a)([Object(p.b)()],rt.prototype,"xSize",void 0),Object(i.a)([Object(p.b)()],rt.prototype,"ySize",void 0),Object(i.a)([Object(p.b)()],rt.prototype,"area",void 0),rt=Object(i.a)([Object(b.a)("esri.views.interactive.tooltip.DrawCircleTooltipInfo")],rt)
var ot=n(2083),at=n(2592),st=n(2013)
let ct=class extends(Object(a.b)(o.a.EventedMixin(Q.a))){constructor(t){super(t),this._graphic=null,this._createOperationGeometry=null,this.defaultZ=0,this.geometryType=null,this.hasZ=!0,this.labelOptions=new J.a,this.mode=null,this.snappingManager=null,this.snapToScene=!1,this.tooltip=null,this.tooltipOptions=new K.a}initialize(){this.internalGraphicsLayer=new f.default({listMode:"hide",internal:!0}),this.view.map.layers.add(this.internalGraphicsLayer),this.drawOperation=this.makeDrawOperation(),this.handles.add([this.drawOperation.on("vertex-add",t=>this.onVertexAdd(t)),this.drawOperation.on("vertex-remove",t=>this.onVertexRemove(t)),this.drawOperation.on("vertex-update",t=>this.onVertexUpdate(t)),this.drawOperation.on("cursor-update",t=>this.onCursorUpdate(t)),this.drawOperation.on("complete",t=>this.onComplete(t)),Object(u.f)(()=>this.tooltipOptions.enabled,t=>{this.tooltip=t?new ot.a({view:this.view,info:this._tooltipInfo}):Object(c.e)(this.tooltip)},u.e),Object(u.f)(()=>this._tooltipInfo,t=>{Object(c.l)(this.tooltip)&&(this.tooltip.info=t)},u.e)]),this.finishToolCreation()}destroy(){this.drawOperation=Object(c.e)(this.drawOperation),this.tooltip=Object(c.e)(this.tooltip),this._destroyAllVisualisations(),this.view.map.remove(this.internalGraphicsLayer),this.internalGraphicsLayer=Object(c.e)(this.internalGraphicsLayer),this._set("view",null)}get _defaultElevation(){return Object(l.c)(this.defaultZ,"meters")}get canRedo(){return this.drawOperation.canRedo}get canUndo(){return this.drawOperation.canUndo}set centered(t){this._set("centered",t),this._updateGraphic()}set enabled(t){this.drawOperation.interactive=t,this._set("enabled",t)}set forceUniformSize(t){this._set("forceUniformSize",t),this._updateGraphic()}get graphic(){return this._graphic}set graphicSymbol(t){this._set("graphicSymbol",t),Object(c.l)(this._graphic)&&(this._graphic.symbol=t)}get updating(){var t,e
return null!=(t=null==(e=this.drawOperation)?void 0:e.updating)&&t}completeCreateOperation(){this.drawOperation.complete()}onInputEvent(t){this.drawOperation.onInputEvent(t)}redo(){this.drawOperation.redo()}reset(){}undo(){this.drawOperation.undo()}_createGraphic(t){this._graphic=new r.default({...this.graphicProperties,geometry:t,symbol:this.graphicSymbol}),this.internalGraphicsLayer.add(this._graphic),this.handles.add(this.initializeGraphic(this._graphic)),this.notifyChange("graphic"),this.handles.add(Object(s.c)(()=>{Object(c.l)(this._graphic)&&(this.internalGraphicsLayer.remove(this._graphic),this._graphic=Object(c.e)(this._graphic))}),lt)}_destroyAllVisualisations(){this.handles.remove(ut.outline),this.handles.remove(ut.regularVertices),this.handles.remove(ut.activeVertex),this.handles.remove(lt)}_getCreateOperationGeometry(t={operationComplete:!1}){if(null==this.drawOperation||0===this.drawOperation.numVertices)return null
const e=this.drawOperation.stagedVertex,n=this.drawOperation.committedVertices,i=n.slice()
Object(c.l)(e)&&i.push(this.drawOperation.coordinateHelper.pointToArray(e))
const r=Object(c.l)(e)?this.drawOperation.coordinateHelper.pointToArray(e):n.splice(-1)[0],o={regularVertices:null,activeVertex:null,full:null,outline:null,circle:null,rectangle:null},a=i.length,s=this.view.spatialReference,l="3d"===this.view.type&&"global"===this.view.viewingMode
switch(this.geometryType){case"point":o.regularVertices=n,o.activeVertex=r,o.full=this.drawOperation.coordinateHelper.arrayToPoint(i[0])
break
case"multipoint":o.regularVertices=n,o.activeVertex=r,a>0&&(o.full=function(t,e){return new G.a({points:t,spatialReference:e})}(i,s))
break
case"polyline":o.regularVertices=n,o.activeVertex=r,a>0&&(o.full=F([i],s,l))
break
case"polygon":o.regularVertices=n,o.activeVertex=r,a>0&&(o.full=U([i],s,l,!0))
break
case"circle":if(a>0){const e=L(this.view,i[0])
if(1===a&&t.operationComplete){const t=i[0],n=e.makeMapPoint(t[0]+pt*this.view.resolution,t[1])
o.circle=Y([t,n],e,!0),o.full=Object(c.l)(o.circle)?o.circle.geometry:null}else 2===a&&(this.forceUniformSize?(o.circle=Y(i,e,this.centered),o.full=Object(c.l)(o.circle)?o.circle.geometry:null):(o.rectangle=function(t,e,n){const i=e.mapToLocalMultiple(t),r=i[0],o=i[1],a=Math.round(o.x-r.x),s=Math.round(o.y-r.y),l=k(n?r.x:r.x+a/2,n?r.y:r.y+s/2),u=n?a:a/2,h=n?s:s/2,p=[],d=2*Math.PI/60
function b(t){const e=Math.cos(t),n=Math.sin(t)
return k(u*e+l.x,h*n+l.y)}for(let t=0;t<60;t++)p.push(b(t*d))
p.push(p[0])
const{spatialReference:f,doUnnormalization:g}=e,O=U([Object(c.h)(p.map(t=>e.localToMap(t)))],f,g,!1),m=e.localToMap(b(Math.PI/2)),y=e.localToMap(b(0)),_=e.localToMap(b(-Math.PI/2)),j=e.localToMap(b(Math.PI))
return{geometry:O,midpoints:Object(c.l)(m)&&Object(c.l)(y)&&Object(c.l)(_)&&Object(c.l)(j)?{top:D(m,f),right:D(y,f),bottom:D(_,f),left:D(j,f)}:null}}(i,e,this.centered),o.full=o.rectangle.geometry))}break
case"rectangle":if(a>0){const e=L(this.view,i[0])
if(1===a&&t.operationComplete){const t=i[0],n=e.makeMapPoint(t[0]+pt*this.view.resolution,t[1])
o.rectangle=z([t,n],e,!0),o.full=o.rectangle.geometry}else 2===a&&(o.rectangle=this.forceUniformSize?z(i,e,this.centered):function(t,e,n){let i=e.mapToLocalMultiple(t)
if(1===i.length){const t=48,e=i[0]
i=[k(e.x-t,e.y+t),k(e.x+t,e.y-t),k(e.x+t,e.y-t),k(e.x-t,e.y+t)]}const r=[],o={x:i[0].x,y:i[0].y},a={x:i[1].x,y:i[1].y}
if(n){const t=Math.round(a.x-o.x),e=Math.round(a.y-o.y)
r.push(k(o.x-t,o.y-e),k(a.x,o.y-e),k(a.x,a.y),k(o.x-t,a.y))}else r.push(k(o.x,o.y),k(a.x,o.y),k(a.x,a.y),k(o.x,a.y))
return H(U([Object(c.h)(r.map(t=>e.localToMap(t)))],e.spatialReference,e.doUnnormalization,!0),r,e)}(i,e,this.centered),o.full=o.rectangle.geometry)}break
default:return null}switch(this.geometryType){case"point":case"multipoint":break
case"polyline":case"polygon":a>1&&(o.outline=F([i],s,l))
break
case"circle":case"rectangle":Object(c.l)(o.full)&&"polygon"===o.full.type&&(o.outline=U(o.full.rings,s,l))}return o}initializeGraphic(t){return null}onComplete(t){this._updateGraphic()
let e=null
if(this.drawOperation.isCompleted){const t=this._getCreateOperationGeometry({operationComplete:!0})
Object(c.l)(t)&&(Object(c.k)(this._graphic)?this._createGraphic(t.full):this._graphic.geometry=t.full,e=Object(c.u)(this._graphic).clone())}this._createOperationGeometry=null,this.emit("complete",{graphic:e,...t})}onCursorUpdate(t){this._updateGraphic(),this.emit("cursor-update",t)}onDeactivate(){this.drawOperation.isCompleted||this.drawOperation.cancel()}onVertexAdd(t){this._updateGraphic(),this.emit("vertex-add",t)}onVertexRemove(t){this._updateGraphic(),this.emit("vertex-remove",t)}onVertexUpdate(t){this._updateGraphic(),this.emit("vertex-update",t)}_updateGraphic(){const t=this._getCreateOperationGeometry()
this._createOperationGeometry=t,Object(c.k)(t)?this._destroyAllVisualisations():(Object(c.l)(t.outline)?this.handles.add(this.onOutlineChanged(t.outline),ut.outline):this.handles.remove(ut.outline),Object(c.l)(t.regularVertices)?this.handles.add(this.onRegularVerticesChanged(t.regularVertices),ut.regularVertices):this.handles.remove(ut.regularVertices),Object(c.l)(t.activeVertex)?this.handles.add(this.onActiveVertexChanged(t.activeVertex),ut.activeVertex):this.handles.remove(ut.activeVertex),Object(c.l)(t.full)?Object(c.k)(this._graphic)?this._createGraphic(t.full):this._graphic.geometry=t.full:this.handles.remove(lt))}get _tooltipInfo(){const{drawOperation:t}=this
if(!t)return null
switch(this.geometryType){case"point":return this._drawPointTooltipInfo
case"polyline":return this._drawPolylineTooltipInfo
case"polygon":return this._drawPolygonTooltipInfo
case"rectangle":return this._drawRectangleTooltipInfo
case"circle":return this._drawCircleTooltipInfo
default:return null}}get _drawPointTooltipInfo(){const t=Object(c.b)(this.graphic,t=>t.geometry)
return Object(c.k)(t)||"point"!==t.type||"2d"===this.view.type&&0===this.defaultZ?null:new tt({tooltipOptions:this.tooltipOptions,elevation:this._elevationTooltipDetail,viewType:this.view.type,helpMessage:X("point",t)})}get _drawPolylineTooltipInfo(){const t=this._createOperationGeometry,e=Object(c.l)(t)?t.full:null
if(Object(c.k)(e)||"polyline"!==e.type)return null
const n=Object(st.f)(e,this._elevationMode)
return new et({tooltipOptions:this.tooltipOptions,elevation:this._elevationTooltipDetail,totalLength:Object(c.v)(n,l.h),viewType:this.view.type,helpMessage:X("polyline",e)})}get _drawPolygonTooltipInfo(){const t=this._createOperationGeometry,e=Object(c.l)(t)?t.full:null
if(Object(c.k)(e)||"polygon"!==e.type)return null
const n=Object(at.b)(e,this._elevationMode)
return new nt({tooltipOptions:this.tooltipOptions,elevation:this._elevationTooltipDetail,area:Object(c.v)(n,l.i),viewType:this.view.type,helpMessage:X("polygon",e)})}get _drawRectangleTooltipInfo(){return Object(c.k)(this.drawOperation)?null:new it({tooltipOptions:this.tooltipOptions,xSize:Object(c.v)(this._xSize,l.h),ySize:Object(c.v)(this._ySize,l.h),area:Object(c.v)(this._fullGeometryArea,l.i)})}get _drawCircleTooltipInfo(){if(Object(c.k)(this.drawOperation))return null
const t=this.forceUniformSize
return new rt({tooltipOptions:this.tooltipOptions,radius:t?Object(c.v)(this._circleRadius,l.h):null,xSize:t?null:Object(c.v)(this._xSize,l.h),ySize:t?null:Object(c.v)(this._ySize,l.h),area:Object(c.v)(this._fullGeometryArea,l.i)})}get _circleRadius(){const t=this._createOperationGeometry
return Object(c.l)(t)&&Object(c.l)(t.circle)&&Object(c.l)(t.circle.center)&&Object(c.l)(t.circle.edge)?Object(st.d)(t.circle.center,t.circle.edge,this._elevationMode):null}get _xSize(){const t=this._createOperationGeometry
if(Object(c.k)(t)||Object(c.k)(t.rectangle))return null
const{midpoints:e}=t.rectangle
return Object(c.l)(e)?Object(st.d)(e.left,e.right,this._elevationMode):null}get _ySize(){const t=this._createOperationGeometry
if(Object(c.k)(t)||Object(c.k)(t.rectangle))return null
const{midpoints:e}=t.rectangle
return Object(c.l)(e)?Object(st.d)(e.top,e.bottom,this._elevationMode):null}get _fullGeometryArea(){const t=this._createOperationGeometry,e=Object(c.l)(t)?t.full:null
return Object(c.k)(e)||"polygon"!==e.type?null:Object(at.b)(e,this._elevationMode)}get _elevationTooltipDetail(){return{mode:this.drawOperation.elevationInfo.mode,...this._vertexTooltipElevation}}get _vertexTooltipElevation(){var t,e
const{tooltipOptions:n,view:i,drawOperation:r}=this
if(Object(c.k)(r))return this._defaultElevation
const o=null!=(t=r.stagedVertex)?t:r.lastVertex
if(Object(c.k)(o)||"2d"===i.type)return this._defaultElevation
const a={mode:n.elevation.mode,offset:0},s=(null!=(e=Object(g.c)(i,o,r.elevationInfo,a))?e:0)*Object(h.h)(o.spatialReference)
return Object(l.c)(s,"meters")}get _elevationMode(){return this.drawOperation.isDraped?"on-the-ground":"absolute-height"}}
Object(i.a)([Object(p.b)()],ct.prototype,"_createOperationGeometry",void 0),Object(i.a)([Object(p.b)()],ct.prototype,"_defaultElevation",null),Object(i.a)([Object(p.b)({value:!0})],ct.prototype,"centered",null),Object(i.a)([Object(p.b)({nonNullable:!0})],ct.prototype,"defaultZ",void 0),Object(i.a)([Object(p.b)()],ct.prototype,"drawOperation",void 0),Object(i.a)([Object(p.b)({value:!0})],ct.prototype,"enabled",null),Object(i.a)([Object(p.b)({value:!0})],ct.prototype,"forceUniformSize",null),Object(i.a)([Object(p.b)({constructOnly:!0})],ct.prototype,"geometryType",void 0),Object(i.a)([Object(p.b)()],ct.prototype,"graphic",null),Object(i.a)([Object(p.b)({constructOnly:!0})],ct.prototype,"graphicProperties",void 0),Object(i.a)([Object(p.b)()],ct.prototype,"graphicSymbol",null),Object(i.a)([Object(p.b)({constructOnly:!0})],ct.prototype,"hasZ",void 0),Object(i.a)([Object(p.b)({constructOnly:!0,type:J.a})],ct.prototype,"labelOptions",void 0),Object(i.a)([Object(p.b)({constructOnly:!0})],ct.prototype,"mode",void 0),Object(i.a)([Object(p.b)()],ct.prototype,"snappingManager",void 0),Object(i.a)([Object(p.b)()],ct.prototype,"snapToScene",void 0),Object(i.a)([Object(p.b)()],ct.prototype,"tooltip",void 0),Object(i.a)([Object(p.b)({constructOnly:!0,type:K.a})],ct.prototype,"tooltipOptions",void 0),Object(i.a)([Object(p.b)({readOnly:!0})],ct.prototype,"type",void 0),Object(i.a)([Object(p.b)({readOnly:!0})],ct.prototype,"updating",null),Object(i.a)([Object(p.b)({constructOnly:!0,nonNullable:!0})],ct.prototype,"view",void 0),Object(i.a)([Object(p.b)()],ct.prototype,"_tooltipInfo",null),Object(i.a)([Object(p.b)()],ct.prototype,"_drawPointTooltipInfo",null),Object(i.a)([Object(p.b)()],ct.prototype,"_drawPolylineTooltipInfo",null),Object(i.a)([Object(p.b)()],ct.prototype,"_drawPolygonTooltipInfo",null),Object(i.a)([Object(p.b)()],ct.prototype,"_drawRectangleTooltipInfo",null),Object(i.a)([Object(p.b)()],ct.prototype,"_drawCircleTooltipInfo",null),Object(i.a)([Object(p.b)()],ct.prototype,"_circleRadius",null),Object(i.a)([Object(p.b)()],ct.prototype,"_xSize",null),Object(i.a)([Object(p.b)()],ct.prototype,"_ySize",null),Object(i.a)([Object(p.b)()],ct.prototype,"_fullGeometryArea",null),Object(i.a)([Object(p.b)()],ct.prototype,"_elevationTooltipDetail",null),Object(i.a)([Object(p.b)()],ct.prototype,"_vertexTooltipElevation",null),Object(i.a)([Object(p.b)()],ct.prototype,"_elevationMode",null),ct=Object(i.a)([Object(b.a)("esri.views.draw.DrawGraphicTool")],ct)
const lt="create-operation-graphic",ut={outline:"outline-visual",regularVertices:"regular-vertices-visual",activeVertex:"active-vertex-visual"}
function ht(t){switch(t){case"point":case"polyline":case"polygon":case"multipoint":return t
case"circle":case"rectangle":return"segment"}}const pt=48},2854:function(t,e,n){"use strict"
n.d(e,"a",(function(){return w}))
var i=n(968),r=n(1002),o=n(1025),a=n(234),s=n(23),c=n(973),l=n(978),u=n(980),h=n(970),p=(n(971),n(969)),d=n(1657),b=n(1227),f=n(1077)
class g{constructor({grabbableForEvent:t}){this.events=new r.a,this.interactive=!0,this.selectable=!1,this.cursor=null,this.grabbable=!0,this.grabbableForEvent=t}intersectionDistance(t,e){return 0}attach(){}detach(){}onElevationChange(){}onViewChange(){}}var O=n(2309),m=n(1663),y=n(1893),_=n(2014),j=n(2186),v=n(1980),M=n(1977),x=n(2198),T=n(2670),S=n(1427)
let w=class extends(r.a.EventedMixin(o.a)){constructor(t){super(t),this._createOperationCompleted=!1,this._pointerDownStates=new Set,this.isDraped=!0,this.labelOptions=new j.a,this.tooltipOptions=new v.a,this.snapToSceneEnabled=null,this.lastVertex=null,Object(s.k)(t.elevationInfo)&&(this.elevationInfo=Object(b.e)(!!t.hasZ))}initialize(){const{geometryType:t,view:e}=this,n=e.spatialReference,i="viewingMode"in e.state?e.state.viewingMode:f.a.Local,r="segment"===t||"multipoint"===t?"polyline":t
this.coordinateHelper=Object(O.a)(this.hasZ,this.hasM,n),this._editGeometryOperations=new _.a(new y.c(r,this.coordinateHelper)),this._snappingOperation=new T.a({view:e,constrainResult:t=>{var e
return Object(s.k)(t)?t:null==(e=this._getEffectiveDrawSurface())?void 0:e.constrainZ(t)}}),this.handles.add(Object(l.f)(()=>this.stagedVertex,t=>{Object(s.k)(t)||this.emit("cursor-update",{updated:null,vertices:[{componentIndex:0,vertexIndex:this._activeComponent.vertices.length,coordinates:this.coordinateHelper.pointToArray(t)}],operation:"apply",type:"vertex-update"})},{sync:!0,equals:(t,e)=>Object(s.g)(t,e,d.b)})),this._activeComponent=new y.a(n,i),this._editGeometryOperations.data.components.push(this._activeComponent)
const o=this.segmentLabels
Object(s.l)(o)&&(o.context={view:e,editGeometryOperations:this._editGeometryOperations,elevationInfo:this.elevationInfo,labelOptions:this.labelOptions},this.handles.add([Object(l.f)(()=>this.labelOptions.enabled,t=>{o.visible=t},l.e),this.on("cursor-update",()=>{const t=this.stagedVertex
o.stagedVertex=Object(s.l)(t)?this.coordinateHelper.pointToVector(t):null})])),this.handles.add(this._editGeometryOperations.on(["vertex-add","vertex-update","vertex-remove"],t=>{const e=t.vertices.map(t=>({componentIndex:0,vertexIndex:t.index,coordinates:this.coordinateHelper.vectorToArray(t.pos)})),n=e.map(t=>t.coordinates)
switch(t.type){case"vertex-add":this.emit(t.type,{...t,added:n,vertices:e})
break
case"vertex-update":this.emit(t.type,{...t,updated:n,vertices:e})
break
case"vertex-remove":this.emit(t.type,{...t,removed:n,vertices:e})}const i=this._activeComponent.getLastVertex(),r=Object(s.l)(i)?this.coordinateHelper.vectorToDehydratedPoint(i.pos):null;(Object(s.k)(r)||Object(s.k)(this.lastVertex)||!Object(d.b)(this.lastVertex,r))&&(this.lastVertex=r)})),this._manipulator=new g({grabbableForEvent:t=>"click"!==this.drawingMode||"touch"===t.pointerType&&this._snappingEnabled&&1===this._pointerDownStates.size}),this.manipulators.add(this._manipulator),this._manipulator.grabbable="point"!==t,this.handles.add([this._createManipulatorDragPipeline(this._manipulator),this._manipulator.events.on("immediate-click",t=>this._onImmediateClick(t)),this._manipulator.events.on("immediate-double-click",t=>this._onImmediateDoubleClick(t))]),Object(S.f)(this,()=>{const t=Object(s.v)(this.view.inputManager.latestPointerType,"mouse"),e=this._getSnappingContext(t)
Object(s.l)(this.snappingManager)&&this.updatingHandles.addPromise(Object(c.i)(this._snappingOperation.resnap(this.snappingManager,e)))})}destroy(){Object(s.e)(this.segmentLabels),Object(s.e)(this._snappingOperation),this._editGeometryOperations=Object(s.e)(this._editGeometryOperations)}get _snappingEnabled(){return Object(s.l)(this.snappingManager)&&this.snappingManager.options.effectiveEnabled}get _requiresScenePoint(){const t=this._getEffectiveDrawSurface()
return"3d"===this.view.type&&this.drawSurface!==t}get canRedo(){return this._editGeometryOperations.canRedo}get canUndo(){return this._editGeometryOperations.canUndo}get committedVertices(){return this._activeComponent.vertices.map(t=>this.coordinateHelper.vectorToArray(t.pos))}set drawingMode(t){this._set("drawingMode",null!=t?t:"click")}get interactive(){return this._manipulator.interactive}set interactive(t){this._manipulator.interactive=t}get isCompleted(){return this._createOperationCompleted}get numCommittedVertices(){return this._activeComponent.vertices.length}get numVertices(){return Object(s.l)(this.stagedVertex)?this._activeComponent.vertices.length+1:this._activeComponent.vertices.length}get snappingOptions(){return Object(s.l)(this.snappingManager)?this.snappingManager.options:null}get stagedVertex(){return this._snappingOperation.stagedPoint}set stagedVertex(t){this._snappingOperation.stagedPoint=Object(a.a)(t)}get updating(){return this.updatingHandles.updating}get vertices(){const t=this.committedVertices
return Object(s.l)(this.stagedVertex)&&t.push(this.coordinateHelper.pointToArray(this.stagedVertex)),t}cancel(){this.complete({aborted:!0})}commitStagedVertex(){if(this._snappingOperation.abort(),Object(s.l)(this.stagedVertex)){const{stagedVertex:t}=this
this.stagedVertex=null,this._editGeometryOperations.appendVertex(this.coordinateHelper.pointToVector(t))}}complete(t){const e=t&&t.aborted||!1
this._snappingOperation.abort(),Object(s.l)(this.snappingManager)&&this.snappingManager.doneSnapping(),"segment"===this.geometryType||"point"===this.geometryType?this.commitStagedVertex():this.stagedVertex=null
const n="multipoint"===this.geometryType&&0===this.numVertices||"polyline"===this.geometryType&&this.numVertices<2||"polygon"===this.geometryType&&this.numVertices<3
this._createOperationCompleted=!n,(this.isCompleted||e)&&this.emit("complete",{vertices:this.vertices.map((t,e)=>({componentIndex:0,vertexIndex:e,coordinates:t})),aborted:e,type:"complete"})}onInputEvent(t){switch(t.type){case"pointer-down":this._pointerDownStates.add(t.pointerId)
break
case"pointer-up":this._pointerDownStates.delete(t.pointerId)}switch(t.type){case"pointer-move":return this._onPointerMove(t)
case"hold":return this._onHold(t)}}redo(){this._editGeometryOperations.redo()}undo(){Object(s.l)(this.snappingManager)&&this.snappingManager.doneSnapping(),this._editGeometryOperations.undo()}_closeOnClickVertexIndex(t){const e=this._activeComponent
if("polygon"===this.geometryType&&e.vertices.length>2){if(this._vertexWithinPointerDistance(e.vertices[0].pos,t))return 0
if(this._vertexWithinPointerDistance(e.vertices[e.vertices.length-1].pos,t))return e.vertices.length-1}return null}_createManipulatorDragPipeline(t){switch(Object(s.u)(this.drawingMode)){case"click":return this._createManipulatorDragPipelineClick(t)
case"freehand":return this._createManipulatorDragPipelineFreehand(t)
case"hybrid":return this._createManipulatorDragPipelineHybrid(t)}}_createManipulatorDragPipelineClick(t){return Object(m.e)(t,(t,e,n,i)=>{const r="touch"===i&&this._snappingEnabled
if(this.isCompleted||!r)return
const{snappingStep:o,cancelSnapping:a}=Object(x.a)({predicate:()=>r,snappingManager:this.snappingManager,snappingContext:new M.a({editGeometryOperations:this._editGeometryOperations,elevationInfo:this.elevationInfo,pointer:i,visualizer:this.snappingVisualizer}),updatingHandles:this.updatingHandles,useZ:!this._requiresScenePoint})
n=n.next(t=>(r&&Object(s.l)(this.snappingManager)&&this.snappingManager.doneSnapping(),t)).next(a),e.next(this._screenToMapDragEventStep()).next(t=>("start"===t.action&&(this.stagedVertex=t.mapStart,("segment"===this.geometryType||r&&0===this.numVertices)&&this.commitStagedVertex()),t)).next(Object(m.l)(this.view,this.elevationInfo)).next(...o).next(t=>(r&&(this.stagedVertex=t.mapEnd,"end"===t.action&&this.commitStagedVertex()),t)).next(t=>("end"===t.action&&("segment"!==this.geometryType&&"point"!==this.geometryType||this.complete()),t))})}_createManipulatorDragPipelineFreehand(t){return Object(m.e)(t,(t,e)=>{this.isCompleted||e.next(this._screenToMapDragEventStep()).next(t=>("start"===t.action&&(Object(s.k)(this.stagedVertex)&&(this.stagedVertex=t.mapStart),"segment"===this.geometryType&&this.commitStagedVertex()),t)).next(t=>{switch(t.action){case"start":case"update":this.stagedVertex=t.mapEnd,"polygon"!==this.geometryType&&"polyline"!==this.geometryType||this.commitStagedVertex()
break
case"end":this.complete()}return t})})}_createManipulatorDragPipelineHybrid(t){return Object(m.e)(t,(t,e)=>{this.isCompleted||e.next(this._screenToMapDragEventStep()).next(t=>("start"===t.action&&(Object(s.k)(this.stagedVertex)&&(this.stagedVertex=t.mapStart),this.commitStagedVertex()),t)).next(t=>{switch(t.action){case"start":case"update":this.stagedVertex=t.mapEnd,"polygon"!==this.geometryType&&"polyline"!==this.geometryType||this.commitStagedVertex()
break
case"end":"segment"!==this.geometryType&&"point"!==this.geometryType||this.complete()}return t})})}get _drawAtFixedElevation(){return("segment"===this.geometryType||"polygon"===this.geometryType)&&this.numCommittedVertices>0}_getEffectiveDrawSurface(){if(Object(s.k)(this.elevationDrawSurface))return this.drawSurface
if(!this.coordinateHelper.hasZ())return this.elevationDrawSurface.defaultZ=null,this.elevationDrawSurface
let t=this.defaultZ,e=!1
return Object(s.l)(this.elevationInfo)&&"absolute-height"===this.elevationInfo.mode&&(e=!0),Object(s.l)(this.snapToSceneEnabled)&&(e=this.snapToSceneEnabled),Object(s.l)(this.elevationInfo)&&"on-the-ground"===this.elevationInfo.mode&&(e=!1),this._drawAtFixedElevation&&(t=this.coordinateHelper.getZ(this._activeComponent.vertices[0].pos),e=!1),e?this.drawSurface:(this.elevationDrawSurface.defaultZ=t,this.elevationDrawSurface)}_mapToScreen(t){var e
return null==(e=this._getEffectiveDrawSurface())?void 0:e.mapToScreen(t)}_onHold(t){this._snappingOperation.abort(),"click"===this.drawingMode&&"touch"===t.pointerType&&this._snappingEnabled&&(this.stagedVertex=t.mapPoint),t.stopPropagation()}_onImmediateClick(t){if("mouse"===t.pointerType&&2===t.button||this._manipulator.dragging)return
const e=this._activeComponent,n=this._closeOnClickVertexIndex(t.screenPoint)
if(Object(s.l)(n))return t.stopPropagation(),void this.complete()
const i=this._screenToMap(t.screenPoint)
if(Object(s.l)(i))switch(this.drawingMode){case"freehand":"point"===this.geometryType&&(Object(s.l)(this.stagedVertex)?this.commitStagedVertex():this._editGeometryOperations.appendVertex(this.coordinateHelper.pointToVector(i)),this.complete())
break
case"click":case"hybrid":this._snappingOperation.abort(),Object(s.l)(this.stagedVertex)?this.commitStagedVertex():this._editGeometryOperations.appendVertex(this.coordinateHelper.pointToVector(i)),("point"===this.geometryType||"segment"===this.geometryType&&2===e.vertices.length||"segment"===this.geometryType&&"hybrid"===this.drawingMode&&1===e.vertices.length)&&this.complete()}t.stopPropagation()}_onImmediateDoubleClick(t){this._manipulator.dragging||"point"===this.geometryType||(this.complete(),t.stopPropagation())}_onPointerMove(t){var e
const n=Object(u.f)(t.x,t.y),i=this._snappingOperation
if(this._manipulator.dragging||this._pointerDownStates.has(t.pointerId)||this._manipulator.grabbing||!this._manipulator.interactive)return void i.abort()
t.stopPropagation()
const r=this._closeOnClickVertexIndex(n)
if(Object(s.l)(r))return this._closeOnVertex(r),void i.abort()
const o=this._screenToMap(n),a=this._requiresScenePoint?null==(e=this.drawSurface)?void 0:e.screenToMap(n):null
if(this._manipulator.cursor=Object(s.l)(o)?"crosshair":null,Object(s.k)(o))return void i.abort()
const l=this.snappingManager
if(Object(s.k)(l))return this.stagedVertex=o,void i.abort()
const h=this._getSnappingContext(t.pointerType)
this.updatingHandles.addPromise(Object(c.i)(i.snap({point:o,scenePoint:a},l,h)))}_closeOnVertex(t){this.stagedVertex=null
const e={componentIndex:0,vertexIndex:t,coordinates:this.coordinateHelper.vectorToArray(this._activeComponent.vertices[t].pos)}
this.emit("cursor-update",{updated:null,vertices:[e],operation:"apply",type:"vertex-update"})}_screenToMap(t){var e
return null==(e=this._getEffectiveDrawSurface())?void 0:e.screenToMap(t)}_screenToMapDragEventStep(){let t=null
return e=>{if("start"===e.action&&(t=this._screenToMap(e.screenStart)),Object(s.k)(t))return null
const n=this._screenToMap(e.screenEnd)
return Object(s.l)(n)?{...e,mapStart:t,mapEnd:n}:null}}_vertexWithinPointerDistance(t,e){const n=this._mapToScreen(this.coordinateHelper.vectorToDehydratedPoint(t))
return!!Object(s.l)(n)&&function(t,e,n){const i=t.x-e.x,r=t.y-e.y
return i*i+r*r<=25}(n,e)}_getSnappingContext(t){const e=this._drawAtFixedElevation?Object(s.b)(this.elevationDrawSurface,({defaultZ:t})=>t):null
return new M.a({editGeometryOperations:this._editGeometryOperations,elevationInfo:this.elevationInfo,pointer:t,visualizer:this.snappingVisualizer,selfSnappingZ:Object(s.l)(e)?{value:e,elevationInfo:this.elevationInfo}:null})}}
Object(i.a)([Object(h.b)()],w.prototype,"_snappingEnabled",null),Object(i.a)([Object(h.b)()],w.prototype,"defaultZ",void 0),Object(i.a)([Object(h.b)()],w.prototype,"isDraped",void 0),Object(i.a)([Object(h.b)({value:"click"})],w.prototype,"drawingMode",null),Object(i.a)([Object(h.b)({constructOnly:!0})],w.prototype,"elevationDrawSurface",void 0),Object(i.a)([Object(h.b)({constructOnly:!0})],w.prototype,"elevationInfo",void 0),Object(i.a)([Object(h.b)({constructOnly:!0,type:j.a})],w.prototype,"labelOptions",void 0),Object(i.a)([Object(h.b)({constructOnly:!0,type:v.a})],w.prototype,"tooltipOptions",void 0),Object(i.a)([Object(h.b)({constructOnly:!0})],w.prototype,"geometryType",void 0),Object(i.a)([Object(h.b)({constructOnly:!0})],w.prototype,"hasM",void 0),Object(i.a)([Object(h.b)({constructOnly:!0})],w.prototype,"hasZ",void 0),Object(i.a)([Object(h.b)({constructOnly:!0})],w.prototype,"manipulators",void 0),Object(i.a)([Object(h.b)({constructOnly:!0})],w.prototype,"drawSurface",void 0),Object(i.a)([Object(h.b)({constructOnly:!0})],w.prototype,"segmentLabels",void 0),Object(i.a)([Object(h.b)({constructOnly:!0})],w.prototype,"snappingManager",void 0),Object(i.a)([Object(h.b)({constructOnly:!0})],w.prototype,"snappingVisualizer",void 0),Object(i.a)([Object(h.b)()],w.prototype,"snapToSceneEnabled",void 0),Object(i.a)([Object(h.b)()],w.prototype,"_snappingOperation",void 0),Object(i.a)([Object(h.b)()],w.prototype,"stagedVertex",null),Object(i.a)([Object(h.b)()],w.prototype,"lastVertex",void 0),Object(i.a)([Object(h.b)()],w.prototype,"updating",null),Object(i.a)([Object(h.b)({constructOnly:!0})],w.prototype,"view",void 0),w=Object(i.a)([Object(p.a)("esri.views.draw.DrawOperation")],w)},3082:function(t,e,n){"use strict"
n.r(e),n.d(e,"DrawGraphicTool2D",(function(){return _})),n.d(e,"ControlPointsTransformTool",(function(){return B})),n.d(e,"TransformTool",(function(){return ft})),n.d(e,"MediaTransformToolsWrapper",(function(){return Ot}))
var i=n(968),r=(n(982),n(772)),o=n(1017),a=n(23),s=n(970),c=(n(971),n(445),n(969)),l=n(2840),u=(n(995),n(781)),h=n(1078)
const p=new u.default({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",effects:[{type:"CIMGeometricEffectDashes",dashTemplate:[3.75,3.75],lineDashEnding:"HalfPattern",controlPointEnding:"NoConstraint"}],enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:1.6,color:[255,255,255,255]},{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:2,color:[0,0,0,255]}]}}}),d=new h.a({style:"circle",size:6,color:[127,127,127,1],outline:{color:[50,50,50],width:1}}),b=new h.a({style:"circle",size:6,color:[255,127,0,1],outline:{color:[50,50,50],width:1}})
var f=n(2852),g=n(2854),O=n(2841),m=n(992),y=n(1055)
let _=class extends f.a{constructor(t){super(t),this._visualElementGraphics={outline:null,regularVertices:null,activeVertex:null},this.activeFillSymbol=null,this.type="draw-2d",this._visualElementSymbols={outline:Object(a.v)(t.activeLineSymbol,p),regularVertices:Object(a.v)(t.regularVerticesSymbol,d),activeVertex:Object(a.v)(t.activeVertexSymbol,b),fill:Object(a.u)(t.activeFillSymbol)}}normalizeCtorArgs(t){const e={...t}
return delete e.activeFillSymbol,delete e.activeVertexSymbol,delete e.regularVerticesSymbol,delete e.activeLineSymbol,e}initializeGraphic(t){return Object(a.l)(this._visualElementSymbols.fill)&&(t.symbol=this._visualElementSymbols.fill),null}makeDrawOperation(){const{defaultZ:t,hasZ:e,view:n}=this
return new g.a({view:n,manipulators:this.manipulators,geometryType:Object(f.b)(this.geometryType),drawingMode:this.mode,hasZ:e,defaultZ:t,snapToSceneEnabled:this.snapToScene,drawSurface:new O.b(n,e,t),hasM:!1,snappingManager:this.snappingManager,snappingVisualizer:new l.a(this.internalGraphicsLayer),tooltipOptions:this.tooltipOptions})}onActiveVertexChanged(t){if("point"===this.geometryType)return null
const[e,n]=t,i=new m.a({x:e,y:n,spatialReference:this.view.spatialReference})
return Object(a.l)(this._visualElementGraphics.activeVertex)?(this._visualElementGraphics.activeVertex.geometry=i,null):(this._visualElementGraphics.activeVertex=new r.default({geometry:i,symbol:this._visualElementSymbols.activeVertex,attributes:{displayOrder:2}}),this.internalGraphicsLayer.add(this._visualElementGraphics.activeVertex),this.internalGraphicsLayer.graphics.sort(j),Object(o.c)(()=>{Object(a.l)(this._visualElementGraphics.activeVertex)&&(this.internalGraphicsLayer.remove(this._visualElementGraphics.activeVertex),this._visualElementGraphics.activeVertex=Object(a.e)(this._visualElementGraphics.activeVertex))}))}onOutlineChanged(t){const e=t.clone()
if("polyline"===e.type){const t=e.paths[e.paths.length-1]
t.splice(0,t.length-2)}return Object(a.l)(this._visualElementGraphics.outline)?(this._visualElementGraphics.outline.geometry=e,null):(this._visualElementGraphics.outline=new r.default({geometry:e,symbol:this._visualElementSymbols.outline,attributes:{displayOrder:0}}),this.internalGraphicsLayer.add(this._visualElementGraphics.outline),this.internalGraphicsLayer.graphics.sort(j),Object(o.c)(()=>{Object(a.l)(this._visualElementGraphics.outline)&&(this.internalGraphicsLayer.remove(this._visualElementGraphics.outline),this._visualElementGraphics.outline=Object(a.e)(this._visualElementGraphics.outline))}))}onRegularVerticesChanged(t){const e=new y.a({points:t,spatialReference:this.view.spatialReference})
return Object(a.l)(this._visualElementGraphics.regularVertices)?(this._visualElementGraphics.regularVertices.geometry=e,null):(this._visualElementGraphics.regularVertices=new r.default({geometry:e,symbol:this._visualElementSymbols.regularVertices,attributes:{displayOrder:1}}),this.internalGraphicsLayer.add(this._visualElementGraphics.regularVertices),this.internalGraphicsLayer.graphics.sort(j),Object(o.c)(()=>{Object(a.l)(this._visualElementGraphics.regularVertices)&&(this.internalGraphicsLayer.remove(this._visualElementGraphics.regularVertices),this._visualElementGraphics.regularVertices=Object(a.e)(this._visualElementGraphics.regularVertices))}))}}
function j(t,e){var n,i,r,o
return(null!=(n=null==(i=t.attributes)?void 0:i.displayOrder)?n:-1/0)-(null!=(r=null==(o=e.attributes)?void 0:o.displayOrder)?r:-1/0)}Object(i.a)([Object(s.b)()],_.prototype,"activeFillSymbol",void 0),Object(i.a)([Object(s.b)({readOnly:!0})],_.prototype,"type",void 0),Object(i.a)([Object(s.b)({constructOnly:!0,nonNullable:!0})],_.prototype,"view",void 0),_=Object(i.a)([Object(c.a)("esri.views.2d.interactive.draw.DrawGraphicTool2D")],_)
var v,M,x=n(990),T=n(2557),S=n(978),w=n(1015),E=n(988),C=n(789),P=n(1467),k=n(1077)
class I{get hovering(){return this.someManipulator(t=>t.hovering)}get grabbing(){return this.someManipulator(t=>t.grabbing)}get dragging(){return this.someManipulator(t=>t.dragging)}hasManipulator(t){return this.someManipulator(e=>e===t)}someManipulator(t){let e=!1
return this.forEachManipulator(n=>{!e&&t(n)&&(e=!0)}),e}}(M=v||(v={}))[M.TRANSLATE_XY=0]="TRANSLATE_XY",M[M.SCALE=1]="SCALE",M[M.ROTATE=2]="ROTATE"
var R=n(1663),A=n(2143),L=n(2078),G=n(2563)
class N extends I{constructor(t){super(),this._view=t.view,this._tool=t.tool,this._graphic=t.graphic,this._manipulator=this._createManipulator(),this.forEachManipulator(t=>this._tool.manipulators.add(t))}destroy(){this.forEachManipulator(t=>{this._tool.manipulators.remove(t),t.destroy()}),this._tool=null,this._view=null,this._manipulator=null,this._graphic=null}forEachManipulator(t){t(this._manipulator,v.TRANSLATE_XY)}createDragPipeline(t,e){let n=null,i=null,r=0,o=0,s=0
const{offsetX:c,offsetY:l,size:u}=Object(G.a)(Object(a.u)(this._graphic.symbol))
return Object(R.e)(this._manipulator,(a,h)=>{h.next(e=>{if("start"===e.action){const e=t()
n=e.editGeometryOperations,i=e.constraints}return e}).next(Object(R.n)(this._view)).next(t=>{const{x:a,y:h,z:p}=t.mapEnd
if(i&&(a+c<i.xmin||h+l-u<i.ymin||a+c>i.xmax||h+l-u>i.ymax))return t
"start"===t.action&&(r=t.mapStart.x,o=t.mapStart.y,s=t.mapStart.z)
const d=a-r,b=h-o,f=p-s
r=a,o=h,s=p
const g=[]
for(const t of n.data.components)g.push(...t.vertices)
const O="start"===t.action?L.a.NEW_STEP:L.a.ACCUMULATE_STEPS,m=n.moveVertices(g,d,b,f,O)
return e(t,m),t})})}_createManipulator(){const t=this._view,e=this._graphic
return new A.a({view:t,graphic:e,selectable:!0,cursor:"move"})}}var V=n(1544),D=n(2056),F=n(2014)
const U="Shift",z=V.c,H=new x.a("#009AF2")
let B=class extends D.a{constructor(t){super(t),this._isOpacityToggled=!1,this._isModifierActive=!1,this._factor=1,this._initialControlPoints=null,this._graphicsLayer=new C.default({internal:!0,listMode:"hide",visible:!1,effect:"drop-shadow(0px, 0px, 3px)"}),this._undoStack=[],this._redoStack=[],this._sharedUndoStack=[],this._sharedRedoStack=[],this._highlightHandle=null,this.activeHandle=0}initialize(){this._initialize()}destroy(){const{map:t}=this.view
this._controlPointManipulations.forEach(t=>t.destroy()),this._controlPointEditGeometryOperations.forEach(t=>t.destroy()),t.removeMany([this._graphicsLayer]),this._graphicsLayer.removeAll(),this._graphicsLayer=Object(a.e)(this._graphicsLayer),this._georeference=null,this._controlPointGraphics=null,this._controlPointManipulations=null,this._graphicsLayer=null,this._controlPointEditGeometryOperations=null,this._undoStack=null,this._redoStack=null,this._initialControlPoints=null,this._sharedUndoStack=null,this._sharedRedoStack=null}get _hasValidSpatialReference(){return Object(E.l)(this.view.spatialReference)}onActivate(){this.visible=!0}onDeactivate(){this.visible=!1}onShow(){this._graphicsLayer.visible=!0}onHide(){this._graphicsLayer.visible=!1}canUndo(){const t=this._undoStack[this._undoStack.length-1]
return null!=t&&this._controlPointEditGeometryOperations[t].canUndo}canRedo(){const t=this._redoStack[this._redoStack.length-1]
return null!=t&&this._controlPointEditGeometryOperations[t].canRedo}undo(){if(this._undoStack.length>0){const t=this._undoStack.pop()
this._controlPointEditGeometryOperations[t].undo(),this.updateGraphics(),this._redoStack.push(t)}}redo(){if(this._redoStack.length>0){const t=this._redoStack.pop()
this._controlPointEditGeometryOperations[t].redo(),this.updateGraphics(),this._undoStack.push(t)}}refresh(){const{mediaElement:t}=this
if(Object(a.k)(t.georeference))return
const e=t.georeference
"control-points"!==e.type||Object(a.k)(e.coords)||(this._georeference=e,Object(a.u)(this._georeference.controlPoints).forEach(({mapPoint:t},e)=>{const n=this._controlPointEditGeometryOperations[e],i=n.data.components[0].vertices[0]
n.setVertexPosition(i,n.data.coordinateHelper.pointToVector(t))}),this.updateGraphics())}reset(){this._georeference.controlPoints=this._initialControlPoints,this.refresh(),this._sharedUndoStack.length=0,this._sharedRedoStack.length=0}updateGraphics(){const t=this._georeference,e=Object(a.u)(t.controlPoints),n=Object(a.u)(e[0].mapPoint).spatialReference,i=this._hasValidSpatialReference
this._georeference.controlPoints=this._controlPointEditGeometryOperations.map((r,o)=>{const s=r.data.geometry
return this._controlPointGraphics[o].geometry=s,{mapPoint:Object(w.m)(s,n),sourcePoint:i?Object(a.u)(e[o]).sourcePoint:t.toSource(s)}})}updateActiveHandle(t){if(this.activeHandle===t)return
const e=Object(a.u)(this._controlPointGraphics[this.activeHandle].symbol).clone()
Object(P.a)(e,Object(T.a)()),this._controlPointGraphics[this.activeHandle].symbol=e
const n=Object(a.u)(this._controlPointGraphics[t].symbol).clone()
Object(P.a)(n,H),this._controlPointGraphics[t].symbol=n,this.activeHandle=t,this.view.surface===document.activeElement&&this.highlightActiveHandle()}async highlightActiveHandle(){this.removeHighlightActiveHandle()
const t=await this.view.whenLayerView(this._graphicsLayer)
this._highlightHandle=t.highlight(this._controlPointGraphics[this.activeHandle])}removeHighlightActiveHandle(){this._highlightHandle&&this._highlightHandle.remove()}setSharedUndoStack(t){this._sharedUndoStack=t}setSharedRedoStack(t){this._sharedRedoStack=t}async _initialize(){const{view:t,mediaElement:e}=this
if(Object(a.k)(e.georeference))return
const n=e.georeference
"control-points"!==n.type||Object(a.k)(n.coords)||(this._georeference=n,this._initialControlPoints=Object(a.u)(this._georeference.controlPoints),t.map.addMany([this._graphicsLayer]),t.focus(),this.visible=!1,this.finishToolCreation(),await this._loadProjectionEngine(),this._controlPointEditGeometryOperations=Object(a.u)(this._georeference.controlPoints).map(({mapPoint:e})=>F.a.fromGeometry(Object(w.m)(e,t.spatialReference),k.a.Local)),this._controlPointGraphics=this._controlPointEditGeometryOperations.map((t,e)=>new r.default({symbol:new u.default({data:{type:"CIMSymbolReference",symbol:{type:"CIMPointSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,colorLocked:!0,anchorPoint:{x:0,y:-15.75},anchorPointUnits:"Absolute",dominantSizeAxis3D:"Y",size:9,billboardMode3D:"FaceNearPlane",frame:{xmin:0,ymin:0,xmax:84.3,ymax:84.3},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[83.2,32.5],[84.3,40.7],[83.8,48.9],[81.7,56.9],[78.1,64.3],[73,70.9],[66.9,76.4],[59.7,80.5],[51.9,83.2],[43.7,84.3],[35.4,83.8],[27.4,81.7],[20,78],[13.4,73],[7.9,66.8],[3.8,59.7],[1.1,51.9],[0,43.7],[.5,35.4],[2.6,27.4],[6.3,20],[11.3,13.4],[17.5,7.9],[24.7,3.8],[32.5,1.1],[39.8,.1],[47.1,.3],[54.3,1.8],[61.1,4.5],[67.4,8.4],[72.9,13.3],[77.4,19.1],[80.9,25.5],[83.2,32.5]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:[255,255,255,255]}]}}],scaleSymbolsProportionally:!0,respectFrame:!0,clippingPath:{type:"CIMClippingPath",clippingType:"Intersect",path:{rings:[[[0,0],[84.3,0],[84.3,84.3],[0,84.3],[0,0]]]}},rotation:0},{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:-11.25},anchorPointUnits:"Absolute",dominantSizeAxis3D:"Y",size:22.5,billboardMode3D:"FaceNearPlane",frame:{xmin:0,ymin:0,xmax:197.7,ymax:294.7},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[98.9,0],[119.4,23.2],[139.4,49.3],[156.8,75.2],[171.2,100.8],[182.4,125.3],[190.6,148.8],[195.7,171.4],[197.7,192.9],[197.7,195.8],[197.7,200.3],[197.6,202.5],[197.5,204.8],[197.3,207.1],[197,209.4],[196.7,211.7],[196.4,214.1],[196,216.4],[195.5,218.7],[195,221.1],[194.4,223.4],[193.7,225.8],[193,228.1],[192.2,230.5],[191.4,232.8],[190.5,235.1],[189.5,237.5],[188.5,239.7],[187.4,242],[186.2,244.3],[185,246.5],[183.7,248.7],[182.4,250.9],[181,253.1],[179.5,255.2],[178,257.3],[176.4,259.4],[174.7,261.4],[173.1,263.3],[171.3,265.3],[169.5,267.2],[167.7,269],[165.8,270.8],[163.9,272.5],[161.9,274.2],[159.9,275.8],[157.8,277.4],[155.7,278.9],[153.6,280.4],[151.4,281.7],[149.2,283.1],[147,284.4],[144.8,285.6],[142.5,286.7],[140.3,287.8],[138,288.8],[135.7,289.8],[133.4,290.7],[131,291.5],[128.7,292.3],[126.4,293],[124,293.6],[121.7,294.2],[119.4,294.7],[117,295.2],[114.7,295.6],[112.4,296],[110.1,296.3],[107.8,296.5],[105.5,296.7],[103.3,296.8],[101.1,296.9],[98.8,296.9],[83.1,295.7],[67.8,292],[53.3,285.9],[39.9,277.5],[28.1,267.2],[18,255.1],[10,241.5],[4.2,226.9],[.9,211.5],[0,195.8],[.1,192.9],[2.1,171.4],[7.2,148.8],[15.4,125.3],[26.6,100.8],[41,75.2],[58.4,49.3],[78.4,23.2],[98.9,0]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:e===this.activeHandle?H.toArray():Object(T.a)().toArray()}]}}],scaleSymbolsProportionally:!0,respectFrame:!0,clippingPath:{type:"CIMClippingPath",clippingType:"Intersect",path:{rings:[[[0,0],[197.7,0],[197.7,294.7],[0,294.7],[0,0]]]}},rotation:0}],haloSize:1,scaleX:1,angleAlignment:"Display",angle:0}}}),geometry:t.data.geometry})),this._graphicsLayer.graphics.addMany([...this._controlPointGraphics]),this._controlPointManipulations=this._controlPointGraphics.map(e=>new N({tool:this,view:t,graphic:e})),this.addHandles([...this._controlPointManipulations.map((t,e)=>t.createDragPipeline(this._getInfo.bind(this,e),(t,n)=>{"start"===t.action&&(this._undoStack.push(e),this._redoStack=[],this._sharedUndoStack.push({tool:this,operation:n}),this._sharedRedoStack.length=0),this.updateGraphics()})),Object(S.f)(()=>this.view.scale,()=>this.active?this.updateGraphics():null)]),this._controlPointManipulations.forEach((t,e)=>{t.forEachManipulator(t=>{this.addHandles([t.events.on(["click","grab-changed"],t=>this.updateActiveHandle(e))])})}),this.addHandles([t.on("key-down",n=>{t.activeTool===this&&(n.key!==U||n.repeat||(this._isModifierActive=!0,n.stopPropagation()),"t"!==n.key||n.repeat||(e.opacity*=this._isOpacityToggled?2:.5,this._isOpacityToggled=!this._isOpacityToggled,n.stopPropagation()),n.key!==z||n.repeat||(this._factor=10,n.stopPropagation()),this._isModifierActive&&("ArrowUp"===n.key&&(this._move(0,this._factor),n.stopPropagation()),"ArrowDown"===n.key&&(this._move(0,-this._factor),n.stopPropagation()),"ArrowLeft"===n.key&&(this._move(-this._factor,0),n.stopPropagation()),"ArrowRight"===n.key&&(this._move(this._factor,0),n.stopPropagation())))}),t.on("key-up",e=>{t.activeTool===this&&(e.key===U&&(this._isModifierActive=!1,e.stopPropagation()),e.key===z&&(this._factor=1,e.stopPropagation()))})]))}async _loadProjectionEngine(){const t=Object(a.u)(Object(a.u)(this._georeference.controlPoints)[0].mapPoint)
return Object(w.g)(t.spatialReference,this.view.spatialReference)}_getInfo(t){return{editGeometryOperations:this._controlPointEditGeometryOperations[t],constraints:this._hasValidSpatialReference?null:{xmin:0,ymin:0,xmax:this._georeference.width,ymax:this._georeference.height}}}_move(t,e){const n=this._controlPointEditGeometryOperations[this.activeHandle],i=[]
for(const t of n.data.components)i.push(...t.vertices)
const r=n.moveVertices(i,t*this.view.resolution,e*this.view.resolution,0,L.a.NEW_STEP)
this._sharedUndoStack.push({tool:this,operation:r}),this._sharedRedoStack.length=0,this.updateGraphics()}}
Object(i.a)([Object(s.b)()],B.prototype,"_hasValidSpatialReference",null),Object(i.a)([Object(s.b)()],B.prototype,"activeHandle",void 0),Object(i.a)([Object(s.b)({constructOnly:!0,nonNullable:!0})],B.prototype,"mediaElement",void 0),Object(i.a)([Object(s.b)({constructOnly:!0})],B.prototype,"view",void 0),B=Object(i.a)([Object(c.a)("esri.views.2d.interactive.editingTools.ControlPointsTransformTool")],B)
var Z=n(997),W=n(1013),q=n(1026),Y=n(985),X=n(981),Q=n(1591),J=n(1007),K=n(991)
function $(t,e){"start"===t.action?e.cursor="grabbing":e.cursor="grab"}class tt{constructor(){this._lastDragEvent=null,this.next=new R.a,this._enabled=!1}get enabled(){return this._enabled}set enabled(t){if(this._enabled!==t&&Object(a.l)(this._lastDragEvent)){const e={...this._lastDragEvent,action:"update"}
t&&this._adjustScaleFactors(e),this.next.execute(e)}this._enabled=t}createDragEventPipelineStep(){return this._lastDragEvent=null,t=>(this._lastDragEvent="end"!==t.action?{...t}:null,this._enabled&&this._adjustScaleFactors(t),t)}_adjustScaleFactors(t){const e=0!==t.direction[0]&&0!==t.direction[1]?Math.max(Math.abs(t.factor1),Math.abs(t.factor2)):0===t.direction[0]?Math.abs(t.factor2):Math.abs(t.factor1)
t.factor1=t.factor1<0?-e:e,t.factor2=t.factor2<0?-e:e}}class et{constructor(){this._lastDragEvent=null,this.next=new R.a,this._enabled=!1}get enabled(){return this._enabled}set enabled(t){if(this._enabled!==t&&Object(a.l)(this._lastDragEvent)){const e={...this._lastDragEvent,action:"update"}
t&&this._adjustRotateAngle(e),this.next.execute(e)}this._enabled=t}createDragEventPipelineStep(){return this._lastDragEvent=null,t=>(this._lastDragEvent="end"!==t.action?{...t}:null,this._enabled&&this._adjustRotateAngle(t),t)}_adjustRotateAngle(t){const e=Object(K.q)(t.rotateAngle)
t.rotateAngle=Object(K.h)(5*Math.round(e/5))}}var nt=n(2012),it=n(1974),rt=n(2674)
class ot extends I{constructor(t){super(),this._handles=new J.a,this._originCache=Object(X.f)(),this._view=t.view,this._tool=t.tool,this._graphic=t.graphic,this._snapRotation=t.snapRotation,this._manipulator=this._createManipulator(),this._handles.add([this._manipulator.events.on("grab-changed",t=>$(t,this._manipulator))]),this.forEachManipulator(t=>this._tool.manipulators.add(t))}destroy(){this._handles.destroy(),this.forEachManipulator(t=>{this._tool.manipulators.remove(t),t.destroy()}),this._tool=null,this._view=null,this._manipulator=null,this._snapRotation=null,this._graphic=null,this._handles=null,this._originCache=null}forEachManipulator(t){t(this._manipulator,v.ROTATE)}createDragPipeline(t,e){let n=null,i=null
return Object(R.e)(this._manipulator,(r,o)=>{o.next(e=>{if("start"===e.action){r.cursor="grabbing"
const e=t()
n=e.plane,i=e.editGeometryOperations}return e}).next(Object(R.n)(this._view)).next(t=>({...t,rotateAngle:Object(nt.b)(t.mapStart,t.mapEnd,{x:n.origin[0],y:n.origin[1]},!0)})).next(this._snapRotation.createDragEventPipelineStep(),this._snapRotation.next).next(t=>{const r=Object(Y.l)(this._originCache,n.origin),o=[]
for(const t of i.data.components)o.push(...t.vertices)
const a="start"===t.action?L.a.NEW_STEP:L.a.ACCUMULATE_STEPS,s=i.rotateVertices(o,r,t.rotateAngle,a,it.a.REPLACE)
return Object(rt.a)(s,n),e(t,s),t}).next(t=>("end"===t.action&&(r.cursor="grab"),t))})}_createManipulator(){const t=this._view,e=this._graphic
return new A.a({view:t,graphic:e,selectable:!0,cursor:"grab"})}}function at(t){const e=Object(Y.u)(t.basis1),n=Object(Y.u)(t.basis2)
return.3*Math.min(e,n)}class st extends I{constructor(t){super(),this._handles=new J.a,this._planeStart=Object(Q.b)(),this._displayPlaneStart=Object(Q.b)(),this._originCache=Object(X.f)(),this._axisCache=Object(q.d)(),this._renderStartCache=Object(X.f)(),this._renderEndCache=Object(X.f)(),this._resizeOriginCache=Object(X.f)(),this._view=t.view,this._tool=t.tool,this._graphic=t.graphic,this._direction=t.direction,this._preserveAspectRatio=t.preserveAspectRatio,this._manipulator=this._createManipulator(),this._handles.add([this._manipulator.events.on("grab-changed",t=>$(t,this._manipulator))]),this.forEachManipulator(t=>this._tool.manipulators.add(t))}destroy(){this._handles.destroy(),this.forEachManipulator(t=>{this._tool.manipulators.remove(t),t.destroy()}),this._tool=null,this._view=null,this._graphic=null,this._manipulator=null,this._direction=null,this._handles=null,this._planeStart=null,this._displayPlaneStart=null,this._originCache=null,this._axisCache=null,this._renderStartCache=null,this._renderEndCache=null,this._resizeOriginCache=null,this._preserveAspectRatio=null}forEachManipulator(t){t(this._manipulator,v.SCALE)}createDragPipeline(t,e){let n=null,i=null,r=null,o=0,a=null,s=null
const c=this._planeStart,l=this._displayPlaneStart,u=this._direction
return Object(R.e)(this._manipulator,(h,p)=>{p.next(e=>{if("start"===e.action){h.cursor="grabbing"
const e=t()
n=e.plane,i=e.displayPlane,r=e.editGeometryOperations,o=10*this._view.resolution,Object(Q.d)(n,c),Object(Q.d)(i,l)
const s=Object(E.e)(r.data.spatialReference)
a=s?s.valid[1]-s.valid[0]-30*this._view.resolution:null}return e}).next(Object(R.n)(this._view)).next(t=>{const e=Object(Y.l)(this._renderStartCache,[t.mapStart.x,t.mapStart.y,0]),n=Object(Y.l)(this._renderEndCache,[t.mapEnd.x,t.mapEnd.y,0]),r=Object(Y.l)(this._resizeOriginCache,l.origin)
Object(Y.I)(r,r,l.basis1,-u[0]),Object(Y.I)(r,r,l.basis2,-u[1]),Object(Y.k)(n,n,r),Object(Y.k)(e,e,r)
const a=0!==u[0]&&0!==u[1],s=at(l),c=at(i)/s,h=(t,i)=>{if(0===t)return 1
let r=Object(Y.u)(i),s=.5*t*Object(Y.n)(i,n)/r
const l=s<0?-1:1
a&&(s+=(r-.5*t*Object(Y.n)(i,e)/r)*l*c)
const u=r<1.5*o?1:1e-6
return r=Math.max(r-o,1e-6),l>0&&(s-=10*this._view.resolution),l*Math.max(l*(s/r),u)},p=h(u[0],l.basis1),d=h(u[1],l.basis2)
return{...t,direction:u,factor1:p,factor2:d}}).next(this._preserveAspectRatio.createDragEventPipelineStep(),this._preserveAspectRatio.next).next(t=>{const i=Object(Y.l)(this._originCache,c.origin)
Object(Y.I)(i,i,c.basis1,-u[0]),Object(Y.I)(i,i,c.basis2,-u[1])
const o=Object(W.s)(this._axisCache,c.basis1[0],c.basis1[1])
Object(W.f)(o,o)
const l=[]
for(const t of r.data.components)l.push(...t.vertices)
const h="start"===t.action?L.a.NEW_STEP:L.a.ACCUMULATE_STEPS,p=r.scaleVertices(l,i,o,t.factor1,t.factor2,h,it.a.REPLACE)
return a&&a<r.data.geometry.extent.width&&s?r.updateVertices(l,s):(Object(Q.d)(c,n),Object(rt.a)(p,n),s=p.operation,e(t,p)),t}).next(t=>("end"===t.action&&(h.cursor="grab"),t))})}_createManipulator(){return new A.a({view:this._view,graphic:this._graphic,selectable:!0,cursor:"grab"})}}var ct=n(1893),lt=n(2185),ut=n(1409),ht=n(773),pt=n(1073)
const dt=V.c,bt=[[1,1],[1,-1],[-1,-1],[-1,1],[1,0],[0,-1],[-1,0],[0,1]]
let ft=class extends D.a{constructor(t){super(t),this._initialControlPoints=null,this._initialGeometry=null,this._graphic=null,this._planeCache=Object(Q.b)(),this._displayPlaneCache=Object(Q.b)(),this._mainAxisCache=Object(q.d)(),this._rotationHandleCache=Object(X.f)(),this._cornerA=Object(X.f)(),this._cornerB=Object(X.f)(),this._cornerC=Object(X.f)(),this._cornerD=Object(X.f)(),this._avgAB=Object(X.f)(),this._avgBC=Object(X.f)(),this._avgCD=Object(X.f)(),this._avgDA=Object(X.f)(),this._preserveAspectRatio=new tt,this._snapRotation=new et,this._graphicsLayer=new C.default({internal:!0,listMode:"hide",visible:!1}),this._sharedUndoStack=[],this._sharedRedoStack=[],this._isOpacityToggled=!1,this._isModifierActive=!1,this._factor=1,this.preserveAspectRatio=null,this.snapRotation=null}initialize(){this._initialize()}destroy(){const{map:t}=this.view
this._dragManipulation.destroy(),this._rotateManipulation.destroy(),this._scaleManipulations.forEach(t=>t.destroy()),this._editGeometryOperations.destroy(),t.removeMany([this._graphicsLayer]),this._graphicsLayer.removeAll(),this._graphicsLayer=Object(a.e)(this._graphicsLayer),this._initialControlPoints=null,this._initialGeometry=null,this._graphic=null,this._preserveAspectRatio=null,this._snapRotation=null,this._planeCache=null,this._displayPlaneCache=null,this._rotationHandleCache=null,this._mainAxisCache=null,this._cornerA=null,this._cornerB=null,this._cornerC=null,this._cornerD=null,this._avgAB=null,this._avgBC=null,this._avgCD=null,this._avgDA=null,this._sharedUndoStack=null,this._sharedRedoStack=null}get _plane(){const t=this._graphic.geometry
if(!Object(a.l)(t))return null
const e=this._editGeometryOperations.data,n=e.components[0].edges[0],i=Object(W.a)(this._mainAxisCache,n.leftVertex.pos,n.rightVertex.pos)
Object(W.f)(i,i)
let r=80*this.view.resolution
const o=this.view.spatialReference
return Object(E.d)(o,t.spatialReference)&&(r*=Object(Z.g)(o)/Object(Z.g)(t.spatialReference)),Object(rt.b)(i,e,r,this._planeCache)}get _displayPlane(){const t=this._plane
if(!t)return null
const e=this._displayPlaneCache
Object(Q.d)(t,e)
const n=10*this.view.resolution
return Object(Y.p)(e.basis1,e.basis1,1+n/Object(Y.u)(e.basis1)),Object(Y.p)(e.basis2,e.basis2,1+n/Object(Y.u)(e.basis2)),e}get _backgroundGraphicGeometry(){const t=this._displayPlane
if(!t)return null
const e=this.view.spatialReference
return this._updateDisplayPlaneConrers(t),new ht.default({spatialReference:e,rings:[[this._cornerA,this._cornerB,this._cornerC,this._cornerD,this._cornerA]]})}get _rotateGraphicGeometry(){const t=this._plane
if(!t)return null
const e=this._rotationHandleCache
return Object(Y.w)(e,t.basis1),Object(Y.p)(e,e,30*this.view.resolution),Object(Y.j)(e,e,t.origin),Object(Y.j)(e,e,t.basis1),new m.a({x:e[0],y:e[1],spatialReference:this.view.spatialReference})}get _scaleGraphicGeometries(){const t=this._displayPlane
if(!t)return[]
const e=this.view.spatialReference
this._updateDisplayPlaneConrers(t)
const{_cornerA:n,_cornerB:i,_cornerC:r,_cornerD:o}=this,a=Object(Y.q)(this._avgAB,n,i,.5),s=Object(Y.q)(this._avgBC,i,r,.5),c=Object(Y.q)(this._avgCD,r,o,.5),l=Object(Y.q)(this._avgDA,o,n,.5)
return[new m.a({x:n[0],y:n[1],spatialReference:e}),new m.a({x:i[0],y:i[1],spatialReference:e}),new m.a({x:r[0],y:r[1],spatialReference:e}),new m.a({x:o[0],y:o[1],spatialReference:e}),new m.a({x:a[0],y:a[1],spatialReference:e}),new m.a({x:s[0],y:s[1],spatialReference:e}),new m.a({x:c[0],y:c[1],spatialReference:e}),new m.a({x:l[0],y:l[1],spatialReference:e})]}onActivate(){this.visible=!0}onDeactivate(){this.visible=!1}onShow(){this._graphicsLayer.visible=!0}onHide(){this._graphicsLayer.visible=!1}canUndo(){return this._editGeometryOperations.canUndo}canRedo(){return this._editGeometryOperations.canRedo}undo(){this._editGeometryOperations.undo(),this.updateGraphics()}redo(){this._editGeometryOperations.redo(),this.updateGraphics()}refresh(){const{view:t,target:e}=this,n="georeference"in e?Object(a.u)(Object(a.u)(e.georeference).coords):e.geometry,i=this._editGeometryOperations,r=i.data.components[0].vertices,o=ct.c.fromGeometry(Object(w.m)(n,t.spatialReference),k.a.Local).components[0].vertices
r.forEach((t,e)=>{i.setVertexPosition(t,o[e].pos)}),this.updateGraphics()}reset(){const{target:t}=this
if("georeference"in t){const e=Object(a.u)(t.georeference)
"control-points"===e.type&&(e.controlPoints=this._initialControlPoints)}else t.geometry=this._initialGeometry
this.refresh(),this._sharedUndoStack.length=0,this._sharedRedoStack.length=0}updateGraphics(){const t=this._editGeometryOperations.data.geometry
"georeference"in this.target&&(Object(a.u)(this.target.georeference).coords=t),this._graphic.geometry=t,this._backgroundGraphic.geometry=this._backgroundGraphicGeometry,this._rotateGraphic.geometry=this._rotateGraphicGeometry,this._scaleGraphicGeometries.forEach((t,e)=>{this._scaleGraphics[e].geometry=t})}setSharedUndoStack(t){this._sharedUndoStack=t}setSharedRedoStack(t){this._sharedRedoStack=t}async _initialize(){const{view:t,target:e}=this
if("georeference"in e){const t=Object(a.u)(e.georeference)
this._graphic=new r.default({geometry:Object(a.u)(t.coords)}),this._initialControlPoints="control-points"===t.type?t.controlPoints:null}else this._graphic=e,this._initialGeometry=Object(a.u)(e.geometry)
t.map.addMany([this._graphicsLayer]),t.focus(),this.visible=!1,this.finishToolCreation(),await this._loadProjectionEngine(),this._editGeometryOperations=F.a.fromGeometry(Object(w.m)(this._graphic.geometry,t.spatialReference),k.a.Local),this._backgroundGraphic=new r.default({symbol:new pt.a({color:"transparent",outline:{type:"simple-line",color:Object(T.a)(),width:2}}),geometry:this._backgroundGraphicGeometry}),this._rotateGraphic=new r.default({symbol:new h.a({color:Object(T.b)(),outline:{type:"simple-line",color:Object(T.a)(),width:1}}),geometry:this._rotateGraphicGeometry}),this._scaleGraphics=this._scaleGraphicGeometries.map(t=>new r.default({symbol:new h.a({size:6,style:"square",color:Object(T.b)(),outline:{type:"simple-line",color:Object(T.a)(),width:1}}),geometry:t})),this._graphicsLayer.graphics.addMany([this._backgroundGraphic,this._rotateGraphic,...this._scaleGraphics]),this._dragManipulation=new N({tool:this,view:t,graphic:this._graphic}),this._rotateManipulation=new ot({tool:this,view:t,graphic:this._rotateGraphic,snapRotation:this._snapRotation}),this._scaleManipulations=this._scaleGraphics.map((e,n)=>new st({tool:this,view:t,graphic:e,direction:bt[n],preserveAspectRatio:this._preserveAspectRatio})),this.addHandles([this._dragManipulation.createDragPipeline(this._getInfo.bind(this),this._updateGraphics.bind(this)),this._rotateManipulation.createDragPipeline(this._getInfo.bind(this),this._updateGraphics.bind(this)),...this._scaleManipulations.map(t=>t.createDragPipeline(this._getInfo.bind(this),this._updateGraphics.bind(this))),Object(S.f)(()=>this.view.scale,()=>this.active?this.updateGraphics():null),t.on("click",async n=>{if(null!=t.activeTool&&t.activeTool!==this)return
const i=Object(ut.b)(n),r=[]
t.map.allLayers.forEach(t=>{"vector-tile"!==t.type&&"imagery"!==t.type||r.push(t)})
const o=await this.view.hitTest(i,{exclude:r}),s=o.results
if(0===s.length)t.activeTool=null
else{const n=Object(lt.a)(o.results),i="georeference"in e,r=s.map(t=>"media"===t.type?t.element:null).filter(Boolean),c=[...this._graphicsLayer.graphics,i?null:e].filter(Boolean)
i&&r.includes(e)||Object(a.l)(n)&&c.includes(n.graphic)?null==t.activeTool&&(t.activeTool=this):t.activeTool=null}})])
const n=t=>{this.addHandles(t.events.on("grab-changed",t=>{"georeference"in e&&("start"===t.action?e.opacity*=.5:"end"===t.action&&(e.opacity*=2))}))}
this._dragManipulation.forEachManipulator(n),this._rotateManipulation.forEachManipulator(n),this._scaleManipulations.forEach(t=>t.forEachManipulator(n)),this.addHandles([t.on("key-down",n=>{t.activeTool===this&&("Shift"!==n.key||n.repeat||(null==this.preserveAspectRatio&&(this._preserveAspectRatio.enabled=!this._preserveAspectRatio.enabled),null==this.snapRotation&&(this._snapRotation.enabled=!this._snapRotation.enabled),this._isModifierActive=!0,n.stopPropagation()),"t"!==n.key||n.repeat||("georeference"in e&&(e.opacity*=this._isOpacityToggled?2:.5,this._isOpacityToggled=!this._isOpacityToggled),n.stopPropagation()),n.key!==dt||n.repeat||(this._factor=10,n.stopPropagation()),this._isModifierActive&&("+"===n.key&&(this._scale(this._factor),n.stopPropagation()),"-"===n.key&&(this._scale(-this._factor),n.stopPropagation()),"ArrowUp"===n.key&&(this._move(0,this._factor),n.stopPropagation()),"ArrowDown"===n.key&&(this._move(0,-this._factor),n.stopPropagation()),"ArrowLeft"===n.key&&(this._move(-this._factor,0),n.stopPropagation()),"ArrowRight"===n.key&&(this._move(this._factor,0),n.stopPropagation())))}),t.on("key-up",e=>{t.activeTool===this&&("Shift"===e.key&&(null==this.preserveAspectRatio&&(this._preserveAspectRatio.enabled=!this._preserveAspectRatio.enabled),null==this.snapRotation&&(this._snapRotation.enabled=!this._snapRotation.enabled),this._isModifierActive=!1,e.stopPropagation()),e.key===dt&&(this._factor=1,e.stopPropagation()))})])}async _loadProjectionEngine(){const t=Object(a.u)(this._graphic.geometry)
return Object(w.g)(t.spatialReference,this.view.spatialReference)}_updateDisplayPlaneConrers(t){const{basis1:e,basis2:n,origin:i}=t,r=this._cornerA
Object(Y.j)(r,i,e),Object(Y.j)(r,r,n)
const o=this._cornerB
Object(Y.j)(o,i,e),Object(Y.k)(o,o,n)
const a=this._cornerC
Object(Y.k)(a,i,e),Object(Y.k)(a,a,n)
const s=this._cornerD
Object(Y.k)(s,i,e),Object(Y.j)(s,s,n)}_getInfo(){return{editGeometryOperations:this._editGeometryOperations,plane:this._plane,displayPlane:this._displayPlane}}_updateGraphics(t,e){"start"===t.action&&(this._sharedUndoStack.push({tool:this,operation:e}),this._sharedRedoStack.length=0),this.updateGraphics()}_scale(t){var e
const n=this._editGeometryOperations,i=[]
for(const t of n.data.components)i.push(...t.vertices)
const r=null==(e=n.data.geometry.extent)?void 0:e.width,o=(r+t*this.view.resolution)/r,a=n.scaleVertices(i,this._plane.origin,q.b,o,o,L.a.NEW_STEP,it.a.REPLACE)
this._sharedUndoStack.push({tool:this,operation:a}),this._sharedRedoStack.length=0,this.updateGraphics()}_move(t,e){const n=this._editGeometryOperations,i=[]
for(const t of n.data.components)i.push(...t.vertices)
const r=n.moveVertices(i,t*this.view.resolution,e*this.view.resolution,0,L.a.NEW_STEP)
this._sharedUndoStack.push({tool:this,operation:r}),this._sharedRedoStack.length=0,this.updateGraphics()}}
Object(i.a)([Object(s.b)()],ft.prototype,"_plane",null),Object(i.a)([Object(s.b)()],ft.prototype,"_backgroundGraphicGeometry",null),Object(i.a)([Object(s.b)()],ft.prototype,"_rotateGraphicGeometry",null),Object(i.a)([Object(s.b)()],ft.prototype,"_scaleGraphicGeometries",null),Object(i.a)([Object(s.b)()],ft.prototype,"preserveAspectRatio",void 0),Object(i.a)([Object(s.b)()],ft.prototype,"snapRotation",void 0),Object(i.a)([Object(s.b)({constructOnly:!0,nonNullable:!0})],ft.prototype,"target",void 0),Object(i.a)([Object(s.b)({constructOnly:!0})],ft.prototype,"view",void 0),ft=Object(i.a)([Object(c.a)("esri.views.2d.interactive.editingTools.TransformTool")],ft)
var gt=n(975)
let Ot=class extends gt.a{constructor(t){super(t),this._transformTool=null,this._controlPointsTransformTool=null,this._advancedModeTransformTool=null,this._activeTool=null,this._sharedUndoStack=[],this._sharedRedoStack=[],this._originalOpacity=null,this.activeHandle=0}initialize(){const{view:t,mediaElement:e,preserveAspectRatio:n,snapRotation:i,advancedMode:r}=this
this._originalOpacity=e.opacity,this._transformTool=new ft({target:e,view:t,preserveAspectRatio:n,snapRotation:i}),this._controlPointsTransformTool=new B({mediaElement:e,view:t}),this._advancedModeTransformTool=new B({mediaElement:r.mediaElement,view:r.view}),this._transformTool.setSharedUndoStack(this._sharedUndoStack),this._transformTool.setSharedRedoStack(this._sharedRedoStack),this._controlPointsTransformTool.setSharedUndoStack(this._sharedUndoStack),this._controlPointsTransformTool.setSharedRedoStack(this._sharedRedoStack),this._advancedModeTransformTool.setSharedUndoStack(this._sharedUndoStack),this._advancedModeTransformTool.setSharedRedoStack(this._sharedRedoStack)
const o=Object(a.u)(e.georeference),s=Object(a.u)(r.mediaElement.georeference)
r.view.tools.addMany([this._advancedModeTransformTool]),"controlPoints"in s&&"controlPoints"in o&&this.addHandles([r.view.on("key-down",t=>{"z"===t.key&&this.canUndo()&&(this.undo(),t.stopPropagation()),"r"===t.key&&this.canRedo()&&(this.redo(),t.stopPropagation())}),r.view.on("focus",async t=>{this._controlPointsTransformTool.removeHighlightActiveHandle(),this._advancedModeTransformTool.highlightActiveHandle()}),Object(S.f)(()=>s.controlPoints,t=>{var e
o.controlPoints=Object(a.u)(t).map(({sourcePoint:t},e)=>({sourcePoint:t,mapPoint:Object(a.u)(o.controlPoints)[e].mapPoint})),null==(e=this._activeTool)||e.refresh()}),Object(S.f)(()=>this._controlPointsTransformTool.activeHandle,t=>{this._advancedModeTransformTool.updateActiveHandle(t),this.activeHandle=t}),Object(S.f)(()=>this._advancedModeTransformTool.activeHandle,t=>{this._controlPointsTransformTool.updateActiveHandle(t),this.activeHandle=t})]),this.addHandles([t.on("key-down",t=>{"z"===t.key&&this.canUndo()&&(this.undo(),t.stopPropagation()),"r"===t.key&&this.canRedo()&&(this.redo(),t.stopPropagation())}),t.on("focus",async t=>{this._advancedModeTransformTool.removeHighlightActiveHandle(),this._controlPointsTransformTool.highlightActiveHandle()})]),t.tools.addMany([this._transformTool,this._controlPointsTransformTool]),t.activeTool=this._transformTool,this._activeTool=this._transformTool,t.focus()}destroy(){var t,e
null!=(t=this._transformTool)&&t.destroy(),null!=(e=this._controlPointsTransformTool)&&e.destroy(),this._transformTool=null,this._controlPointsTransformTool=null,this._advancedModeTransformTool=null,this._activeTool=null,this._sharedUndoStack=null,this._sharedRedoStack=null}canUndo(){return this._sharedUndoStack.length>0}canRedo(){return this._sharedRedoStack.length>0}undo(){if(this._sharedUndoStack.length>0){var t
const{tool:e,operation:n}=this._sharedUndoStack.pop()
e!==this._activeTool&&e.refresh(),n.undo(),e.updateGraphics(),this._sharedRedoStack.push({tool:e,operation:n}),this._activeTool!==e&&(null==(t=this._activeTool)||t.refresh())}}redo(){if(this._sharedRedoStack.length>0){var t
const{tool:e,operation:n}=this._sharedRedoStack.pop()
e!==this._activeTool&&e.refresh(),n.apply(),e.updateGraphics(),this._sharedUndoStack.push({tool:e,operation:n}),this._activeTool!==e&&(null==(t=this._activeTool)||t.refresh())}}refresh(){this._activeTool.refresh()}reset(){this._activeTool.reset(),this._advancedModeTransformTool.reset()}async enableAdvancedMode(){this.view.activeTool=this._controlPointsTransformTool,this._activeTool=this._controlPointsTransformTool,this._activeTool.refresh(),await this.advancedMode.view.when(),this.advancedMode.view.activeTool=this._advancedModeTransformTool,this._originalOpacity=this._controlPointsTransformTool.mediaElement.opacity,this._controlPointsTransformTool.mediaElement.opacity=.25*this._originalOpacity}disableAdvancedMode(){this.view.activeTool=this._transformTool,this._activeTool=this._transformTool,this._activeTool.refresh(),this.advancedMode.view.activeTool=null,this._controlPointsTransformTool.mediaElement.opacity=this._originalOpacity}}
Object(i.a)([Object(s.b)()],Ot.prototype,"activeHandle",void 0),Object(i.a)([Object(s.b)({constructOnly:!0})],Ot.prototype,"advancedMode",void 0),Object(i.a)([Object(s.b)()],Ot.prototype,"preserveAspectRatio",void 0),Object(i.a)([Object(s.b)()],Ot.prototype,"snapRotation",void 0),Object(i.a)([Object(s.b)({constructOnly:!0,nonNullable:!0})],Ot.prototype,"mediaElement",void 0),Object(i.a)([Object(s.b)({constructOnly:!0})],Ot.prototype,"view",void 0),Ot=Object(i.a)([Object(c.a)("esri.views.2d.interactive.editingTools.MediaTransformToolsWrapper")],Ot)},794:function(t,e,n){"use strict"
n.r(e),n.d(e,"getBackgroundColor",(function(){return o})),n.d(e,"getBackgroundColorTheme",(function(){return a})),n.d(e,"getColorLuminance",(function(){return l})),n.d(e,"getColorTheme",(function(){return s}))
var i=n(990),r=n(23)
async function o(t){var e,n
await t.whenReady()
const r=null!=(e=null==(n=t.basemapView)?void 0:n.baseLayerViews.map(t=>t.layer).toArray())?e:[]
if(!r.length){const e=getComputedStyle(t.container).backgroundColor,n=e&&new i.a(e)
return t.get("background.color")||(n&&0!==n.a?n:null)||null}const o=(await t.takeScreenshot({format:"png",layers:r})).data.data,a=o.length
let s=0,c=0,l=0,u=0,h=0,p=0
for(let t=0;t<a;t+=4){const e=o[t],n=o[t+1],i=o[t+2],r=o[t+3],a=r/255
s+=e*e*a,c+=n*n*a,l+=i*i*a,h+=a,r&&(u+=r,p++)}return s=Math.round(Math.sqrt(s/h)),c=Math.round(Math.sqrt(c/h)),l=Math.round(Math.sqrt(l/h)),new i.a([s,c,l,u/p/255])}async function a(t){if(!t)return null
const e=await o(t)
return Object(r.l)(e)?s(e):null}function s(t){return c(t).isBright?"light":"dark"}function c(t){let{r:e,g:n,b:r,a:o}=t
return o<1&&(e=Math.round(o*e+255*(1-o)),n=Math.round(o*n+255*(1-o)),r=Math.round(o*r+255*(1-o))),new i.a({r:e,g:n,b:r})}function l(t){const{r:e,g:n,b:i}=c(t)
return.2126*e+.7152*n+.0722*i}}}])
