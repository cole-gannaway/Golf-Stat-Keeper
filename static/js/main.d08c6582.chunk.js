(this["webpackJsonponline-golf-stat-keeper"]=this["webpackJsonponline-golf-stat-keeper"]||[]).push([[0],{105:function(e,t,a){"use strict";a.r(t);var n=a(5),s=a(1),r=a.n(s),i=a(19),c=a.n(i),o=(a(95),a(96),a(13)),l=a.n(o),h=a(23),d=a(20),u=a(21),b=a(15),j=a(30),p=a(29),v=a(142),k=a(143),O=a(141),f=a(144),y=a(145),x=a(146),S=a(82),g=a.n(S),C=a(70),m=a(74),w=function(){function e(){Object(d.a)(this,e)}return Object(u.a)(e,null,[{key:"convertObjectToArray",value:function(e){var t=[];if(e){var a=Object.values(e),n=Object.keys(e);a.forEach((function(e,t){return e.key=n[t]})),t=a}return t}}]),e}(),I=function(){function e(t){Object(d.a)(this,e),this.db=void 0,this.db=t}return Object(u.a)(e,[{key:"pushNewObject",value:function(){var e=Object(h.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.db.ref(t).push().key,e.abrupt("return",a);case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getObjectAsJson",value:function(){var e=Object(h.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.db.ref(t),e.next=3,a.once("value",(function(e){return e}));case 3:if(!(n=e.sent)){e.next=8;break}return e.abrupt("return",n.toJSON());case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"doesObjectExist",value:function(){var e=Object(h.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.db.ref(t),e.next=3,a.once("value",(function(e){return e.val()}));case 3:if(!e.sent){e.next=8;break}return e.abrupt("return",!0);case 8:return e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"setObjectData",value:function(){var e=Object(h.a)(l.a.mark((function e(t,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db.ref(t).set(a);case 2:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"updateObjectData",value:function(){var e=Object(h.a)(l.a.mark((function e(t,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db.ref(t).update(a);case 2:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"deleteObject",value:function(){var e=Object(h.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db.ref(t).remove();case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),R=function(){function e(){Object(d.a)(this,e),this.path=""}return Object(u.a)(e,[{key:"rootPath",value:function(){return this.path="rounds",this}},{key:"setPath",value:function(e){return this.path=e,this}},{key:"appendPath",value:function(e){return this.path=this.path+"/"+e,this}},{key:"createPath",value:function(){return this.path}}]),e}(),N=function(){function e(t){Object(d.a)(this,e),this.dbDao=void 0,this.dbDao=new I(t)}return Object(u.a)(e,[{key:"createNewRoundStats",value:function(){var e=Object(h.a)(l.a.mark((function e(){var t,a,n,s,r,i,c,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=[],a=0;a<18;a++)n={key:"",holeId:a+1,strokes:4,fairway:"CENTER",gir:!1,putts:2,penaltyStrokes:0,chips:0,sandStrokes:0},t.push(n);return s={key:"",roundId:"Untitled",courseName:"",playerName:"",date:Date.now(),stats:t},r=null,i=(new R).rootPath().createPath(),e.next=7,this.dbDao.pushNewObject(i);case 7:return(c=e.sent)&&(r=c,o=(new R).rootPath().appendPath(c).createPath(),s.key=c,this.dbDao.setObjectData(o,s)),e.abrupt("return",r);case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updateRoundMetadata",value:function(){var e=Object(h.a)(l.a.mark((function e(t,a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(new R).rootPath().appendPath(t).createPath(),e.next=3,this.dbDao.updateObjectData(n,a);case 3:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"updateHoleStatsReal",value:function(){var e=Object(h.a)(l.a.mark((function e(t,a,n){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=(new R).rootPath().appendPath(t).appendPath("stats").appendPath(a).createPath(),e.next=3,this.dbDao.updateObjectData(s,n);case 3:case"end":return e.stop()}}),e,this)})));return function(t,a,n){return e.apply(this,arguments)}}()}]),e}(),P=a(147),H=a(62),D=a.n(H),E=a(61),T=a.n(E),A=a(63),M=a.n(A),F=a(140),G=a(135),K=a(139),J=a(149),L=a(150),B=a(148),V=a(79),z=a.n(V),U=a(81),_=a.n(U),q=a(80),Q=a.n(q),X=function(e){Object(j.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleClick=n.handleClick.bind(Object(b.a)(n)),n}return Object(u.a)(a,[{key:"render",value:function(){return this.props.value,Object(n.jsx)("div",{children:Object(n.jsxs)(G.a,{component:"fieldset",children:[Object(n.jsx)(K.a,{component:"legend",children:"labelPlacement"}),Object(n.jsxs)(J.a,{row:!0,"aria-label":"position",name:"position",defaultValue:"top",children:[Object(n.jsx)(L.a,{value:"LEFT",control:Object(n.jsx)(B.a,{color:"primary"}),label:Object(n.jsx)(z.a,{}),labelPlacement:"top",onClick:this.handleClick,checked:"LEFT"===this.props.value}),Object(n.jsx)(L.a,{value:"CENTER",control:Object(n.jsx)(B.a,{color:"primary"}),label:Object(n.jsx)(Q.a,{}),labelPlacement:"top",onClick:this.handleClick,checked:"CENTER"===this.props.value}),Object(n.jsx)(L.a,{value:"RIGHT",control:Object(n.jsx)(B.a,{color:"primary"}),label:Object(n.jsx)(_.a,{}),labelPlacement:"top",onClick:this.handleClick,checked:"RIGHT"===this.props.value})]})]})})}},{key:"handleClick",value:function(e){this.props.onChange(e.target.value)}}]),a}(s.Component),Z=function(e){Object(j.a)(a,e);var t=Object(p.a)(a);function a(e){var n;Object(d.a)(this,a);var s=(n=t.call(this,e)).props.holeStatsArr[0];return n.state={holeId:s.holeId,strokes:s.strokes,fairway:s.fairway,gir:s.gir,putts:s.putts,penaltyStrokes:s.penaltyStrokes,chips:s.chips,sandStrokes:s.sandStrokes,holeKey:s.key,holeIndex:0},n.handleChangeStrokes=n.handleChangeStrokes.bind(Object(b.a)(n)),n.handleChangeChips=n.handleChangeChips.bind(Object(b.a)(n)),n.handleChangePutts=n.handleChangePutts.bind(Object(b.a)(n)),n.handleChangeFairway=n.handleChangeFairway.bind(Object(b.a)(n)),n.handleChangeSandStrokes=n.handleChangeSandStrokes.bind(Object(b.a)(n)),n.handleChangeToggleGIR=n.handleChangeToggleGIR.bind(Object(b.a)(n)),n.handleChangePenaltyStrokes=n.handleChangePenaltyStrokes.bind(Object(b.a)(n)),n.handleClickPrevHole=n.handleClickPrevHole.bind(Object(b.a)(n)),n.handleClickNextHole=n.handleClickNextHole.bind(Object(b.a)(n)),n.handleSaveHoleStats=n.handleSaveHoleStats.bind(Object(b.a)(n)),n}return Object(u.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:this.props.roundNickname}),Object(n.jsx)("div",{children:Object(n.jsx)(P.a,{label:"Hole",type:"number",value:this.state.holeId,disabled:!0})}),Object(n.jsx)("div",{children:Object(n.jsx)(P.a,{label:"Strokes",type:"number",value:this.state.strokes,onChange:this.handleChangeStrokes})}),Object(n.jsx)(X,{onChange:this.handleChangeFairway,value:this.state.fairway}),Object(n.jsxs)("div",{children:["GIR ",Object(n.jsx)(F.a,{checked:this.state.gir,onChange:this.handleChangeToggleGIR,inputProps:{"aria-label":"secondary checkbox"}})]}),Object(n.jsx)("div",{children:Object(n.jsx)(P.a,{label:"Putts",type:"number",value:this.state.putts,onChange:this.handleChangePutts})}),Object(n.jsx)("div",{children:Object(n.jsx)(P.a,{label:"Penalty Strokes",type:"number",value:this.state.penaltyStrokes,onChange:this.handleChangePenaltyStrokes})}),Object(n.jsx)("div",{children:Object(n.jsx)(P.a,{label:"Sand Strokes",type:"number",value:this.state.sandStrokes,onChange:this.handleChangeSandStrokes})}),Object(n.jsx)("div",{children:Object(n.jsx)(P.a,{label:"Chips",type:"number",value:this.state.chips,onChange:this.handleChangeChips})}),Object(n.jsx)("div",{children:Object(n.jsx)(O.a,{onClick:this.handleSaveHoleStats,children:Object(n.jsx)(T.a,{})})}),Object(n.jsxs)("div",{children:[Object(n.jsx)(O.a,{onClick:this.handleClickPrevHole,disabled:1===this.state.holeId,children:"Prev"}),Object(n.jsx)(O.a,{onClick:this.handleClickNextHole,disabled:18===this.state.holeId,children:"Next"})]}),Object(n.jsx)("div",{children:Object(n.jsx)(O.a,{onClick:this.props.goBack,children:Object(n.jsx)(D.a,{})})})]})}},{key:"handleChangeStrokes",value:function(e){this.setState({strokes:parseInt(e.target.value)})}},{key:"handleChangePutts",value:function(e){this.setState({putts:parseInt(e.target.value)})}},{key:"handleChangePenaltyStrokes",value:function(e){this.setState({penaltyStrokes:parseInt(e.target.value)})}},{key:"handleChangeChips",value:function(e){this.setState({chips:parseInt(e.target.value)})}},{key:"handleChangeSandStrokes",value:function(e){this.setState({sandStrokes:parseInt(e.target.value)})}},{key:"handleChangeToggleGIR",value:function(e,t){this.setState({gir:t})}},{key:"handleClickNextHole",value:function(e){this.changeHole(this.state.holeIndex+1)}},{key:"handleClickPrevHole",value:function(e){this.changeHole(this.state.holeIndex-1)}},{key:"handleChangeFairway",value:function(e){this.setState({fairway:e})}},{key:"changeHole",value:function(e){var t=this.props.holeStatsArr[e];this.setState({holeId:t.holeId,strokes:t.strokes,fairway:t.fairway,gir:t.gir,putts:t.putts,penaltyStrokes:t.penaltyStrokes,chips:t.chips,sandStrokes:t.sandStrokes,holeKey:t.key,holeIndex:e})}},{key:"handleSaveHoleStats",value:function(){var e=Object(h.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.dbService.updateHoleStatsReal(this.props.roundKey,this.state.holeKey,{strokes:this.state.strokes,fairway:this.state.fairway,gir:this.state.gir,putts:this.state.putts,penaltyStrokes:this.state.penaltyStrokes,chips:this.state.chips,sandStrokes:this.state.sandStrokes});case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),a}(s.Component),W=function(e){Object(j.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={courseName:n.props.roundStats.courseName,roundId:n.props.roundStats.roundId,playerName:n.props.roundStats.playerName,isEditHoles:!1},n.handleChangeRoundId=n.handleChangeRoundId.bind(Object(b.a)(n)),n.handleChangePlayerName=n.handleChangePlayerName.bind(Object(b.a)(n)),n.handleChangeCourseName=n.handleChangeCourseName.bind(Object(b.a)(n)),n.handleSaveRoundMetaData=n.handleSaveRoundMetaData.bind(Object(b.a)(n)),n.handleToggleEditRoundStats=n.handleToggleEditRoundStats.bind(Object(b.a)(n)),n.handleViewMetaData=n.handleViewMetaData.bind(Object(b.a)(n)),n}return Object(u.a)(a,[{key:"render",value:function(){var e=Object(n.jsx)("div",{});if(this.state.isEditHoles){var t=w.convertObjectToArray(this.props.roundStats.stats);e=Object(n.jsx)(Z,{dbService:this.props.dbService,roundKey:this.props.roundStats.key,roundNickname:this.props.roundStats.roundId,holeStatsArr:t,goBack:this.handleViewMetaData})}else e=Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:Object(n.jsx)(P.a,{label:"Round Id",value:this.state.roundId,onChange:this.handleChangeRoundId})}),Object(n.jsx)("div",{children:Object(n.jsx)(P.a,{label:"Name",value:this.state.playerName,onChange:this.handleChangePlayerName})}),Object(n.jsx)("div",{children:Object(n.jsx)(P.a,{label:"Course",value:this.state.courseName,onChange:this.handleChangeCourseName})}),Object(n.jsxs)("div",{children:[Object(n.jsx)(O.a,{onClick:this.handleToggleEditRoundStats,children:Object(n.jsx)(M.a,{})}),Object(n.jsx)(O.a,{onClick:this.handleSaveRoundMetaData,children:Object(n.jsx)(T.a,{})})]}),Object(n.jsx)("div",{children:Object(n.jsx)(O.a,{onClick:this.props.goHome,children:Object(n.jsx)(D.a,{})})})]});return e}},{key:"handleChangeRoundId",value:function(e){this.setState({roundId:e.target.value})}},{key:"handleChangePlayerName",value:function(e){this.setState({playerName:e.target.value})}},{key:"handleChangeCourseName",value:function(e){this.setState({courseName:e.target.value})}},{key:"handleSaveRoundMetaData",value:function(){var e=Object(h.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.props.dbService.updateRoundMetadata(this.props.roundStats.key,{courseName:this.state.courseName,roundId:this.state.roundId,playerName:this.state.playerName});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleToggleEditRoundStats",value:function(e){this.setState({isEditHoles:!this.state.isEditHoles})}},{key:"handleViewMetaData",value:function(){this.setState({isEditHoles:!1})}}]),a}(s.Component),Y=function(e){Object(j.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleClick=n.handleClick.bind(Object(b.a)(n)),n}return Object(u.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)(O.a,{onClick:this.handleClick,children:Object(n.jsx)(M.a,{})})})}},{key:"handleClick",value:function(e){this.props.onClick(this.props.selectedRoundStatsId)}}]),a}(s.Component),$=m,ee=C.a.initializeApp($),te=C.a.database(ee),ae=new N(te),ne=function(e){Object(j.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={data:[],selectedRoundStatsId:""},n.handleNewRound=n.handleNewRound.bind(Object(b.a)(n)),n.resetSelectedRoundId=n.resetSelectedRoundId.bind(Object(b.a)(n)),n.handleClickEditRound=n.handleClickEditRound.bind(Object(b.a)(n)),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=(new R).rootPath().createPath();te.ref(t).on("value",(function(t){var a=t.val();e.setState({data:a})}))}},{key:"render",value:function(){var e=this,t=w.convertObjectToArray(this.state.data).map((function(t,a){return Object(n.jsxs)(v.a,{children:[Object(n.jsx)(k.a,{children:Object(n.jsx)(Y,{selectedRoundStatsId:t.key,onClick:e.handleClickEditRound})}),Object(n.jsx)(k.a,{children:t.roundId}),Object(n.jsx)(k.a,{children:t.playerName}),Object(n.jsx)(k.a,{children:new Date(t.date).toDateString()})]},"row"+a.toString())})),a=Object(n.jsx)("div",{}),s=this.state.data[this.state.selectedRoundStatsId];return a=""!==this.state.selectedRoundStatsId&&s?Object(n.jsx)(W,{dbService:ae,roundStats:s,goHome:this.resetSelectedRoundId}):Object(n.jsxs)("div",{children:[Object(n.jsxs)(O.a,{onClick:this.handleNewRound,children:["New ",Object(n.jsx)(g.a,{})]}),Object(n.jsxs)(f.a,{children:[Object(n.jsx)(y.a,{children:Object(n.jsxs)(v.a,{children:[Object(n.jsx)(k.a,{children:"Select"}),Object(n.jsx)(k.a,{children:"Round"}),Object(n.jsx)(k.a,{children:"Player"}),Object(n.jsx)(k.a,{children:"Date"})]})}),Object(n.jsx)(x.a,{children:t})]})]}),Object(n.jsx)("div",{children:a})}},{key:"handleNewRound",value:function(){var e=Object(h.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae.createNewRoundStats();case 2:(a=e.sent)&&this.setState({selectedRoundStatsId:a});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"resetSelectedRoundId",value:function(){this.setState({selectedRoundStatsId:""})}},{key:"handleClickEditRound",value:function(e){this.setState({selectedRoundStatsId:e})}}]),a}(s.Component);var se=function(){return Object(n.jsx)("div",{id:"AppContainer",children:Object(n.jsx)(ne,{})})},re=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,152)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),r(e),i(e)}))};c.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(se,{})}),document.getElementById("root")),re()},74:function(e){e.exports=JSON.parse('{"apiKey":"AIzaSyAh4KCrs_w6_rRt9MaXziANAlkhdjqwOs4","authDomain":"onlinegolfstatkeeper.firebaseapp.com","databaseURL":"https://onlinegolfstatkeeper-default-rtdb.firebaseio.com","projectId":"onlinegolfstatkeeper","storageBucket":"onlinegolfstatkeeper.appspot.com","messagingSenderId":"432940516257","appId":"1:432940516257:web:773cb491c2b7385f09c1e0","measurementId":"G-JECT2QLZ3K"}')},95:function(e,t,a){},96:function(e,t,a){}},[[105,1,2]]]);
//# sourceMappingURL=main.d08c6582.chunk.js.map