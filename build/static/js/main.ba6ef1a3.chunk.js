(this["webpackJsonp3d-line-ant"]=this["webpackJsonp3d-line-ant"]||[]).push([[0],{197:function(e,t,a){},199:function(e,t,a){},389:function(e,t,a){"use strict";a.r(t);var c=a(6),n=a(0),s=a.n(n),r=a(27),o=a.n(r),i=(a(197),a(198),a(199),a(50)),d=a(51),l=a(55),j=a(54),b=a(72),h=a.n(b),u=a(101),O="GET_ALL_COVID_DATA_SUCCESS",p="GET_ALL_COVID_DATA_FAILED",x="https://covidnigeria.herokuapp.com/",g="api",f=function(e,t){console.log(e.toUpperCase(),t)},v=function(e){return{data:null,message:e,status:"400"}},m=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},C=a(131),D=a.n(C);var y=function(){var e=localStorage.getItem("token");return e?{"Content-Type":"application/json",Authorization:e}:{"Content-Type":"application/json"}},k=function(){var e=Object(u.a)(h.a.mark((function e(t,a,c){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"post"!==a.toLowerCase()){e.next=7;break}return e.next=4,D.a.post("".concat(x).concat(t),c,{headers:y()});case 4:e.t0=e.sent,e.next=10;break;case 7:return e.next=9,D.a.get("".concat(x).concat(t),{headers:y()});case 9:e.t0=e.sent;case 10:if(!(n=e.t0)){e.next=13;break}return e.abrupt("return",n);case 13:e.next=19;break;case 15:return e.prev=15,e.t1=e.catch(0),console.log("".concat(t," error"),v(e.t1)),e.abrupt("return",v(e.t1.message));case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t,a,c){return e.apply(this,arguments)}}(),A=function(){return function(){var e=Object(u.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(g,"get",null);case 2:a=e.sent,console.log("RESPONSE",a),200===a.status?(console.log("RESPONSE here",a.data),t({type:O,data:a.data})):t({type:p,message:a.message});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},S=a(391),N=a(75),I=a(39),T=a(394),_=a(392),w=a(70),E=a(65),L=a(395),R=a(396),F=a(397),P=a(74),G=S.a.Sider,B=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(i.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={collapsed:!1},e}return Object(d.a)(a,[{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsxs)(G,{trigger:null,collapsible:!0,collapsed:this.state.collapsed,children:[Object(c.jsx)("div",{className:"logo",children:"COVID-19 DATA"}),Object(c.jsxs)(E.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"],children:[Object(c.jsx)(E.a.Item,{icon:Object(c.jsx)(L.a,{}),children:Object(c.jsx)(P.b,{to:"/",children:"Dashboard"})},"1"),Object(c.jsx)(E.a.Item,{icon:Object(c.jsx)(R.a,{}),children:Object(c.jsx)(P.b,{to:"/app-graph-details",children:"Graph Detail"})},"2"),Object(c.jsx)(E.a.Item,{icon:Object(c.jsx)(F.a,{}),children:Object(c.jsx)(P.b,{to:"/",children:"Data Table"})},"3")]})]})})}}]),a}(n.Component),K=a(398),M=a(399),V=S.a.Header,J=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(i.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={collapsed:!1},e.toggle=function(){e.setState({collapsed:!e.state.collapsed})},e}return Object(d.a)(a,[{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsx)(V,{className:"header_settings drawerIcon",children:s.a.createElement(this.state.collapsed?K.a:M.a,{className:"trigger",onClick:this.toggle})})})}}]),a}(n.Component),U=a(393),z=[{title:"State",dataIndex:"state",scopedSlots:{customRender:"state"}},{title:"Confirmed Cases",dataIndex:"confirmedCases",scopedSlots:{customRender:"confirmedCases"}},{title:"Active Cases",dataIndex:"casesOnAdmission",scopedSlots:{customRender:"casesOnAdmission"}},{title:"Discharged",dataIndex:"discharged",scopedSlots:{customRender:"discharged"}},{title:"Death",dataIndex:"death",scopedSlots:{customRender:"death"}}],H=function(e){return Object(c.jsx)(S.a,{children:Object(c.jsx)(N.a,{children:Object(c.jsx)(I.a,{span:24,children:Object(c.jsx)(U.a,{columns:z,dataSource:e.state,bordered:!0,rowKey:function(e){return e._id},pagination:{position:"bottomRight"}},e._id)})})})},W=a(400),q=S.a.Content,Q=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){f("props",this.props),this.loadCovidData()}},{key:"loadCovidData",value:function(){this.props.getAllCovid19Data()}},{key:"render",value:function(){var e=this.props.covidData;return Object(c.jsxs)(S.a,{children:[Object(c.jsx)(B,{}),Object(c.jsxs)(S.a,{className:"site-layout",children:[Object(c.jsx)(J,{}),Object(c.jsxs)(q,{className:"site-layout-background card__settings",children:[Object(c.jsxs)(N.a,{gutter:[16,16],children:[Object(c.jsx)(I.a,{span:6,children:Object(c.jsxs)(T.a,{bordered:!1,className:"card-blue order-card",children:[Object(c.jsx)("h6",{children:"All Sampled Cases"}),Object(c.jsxs)("h2",{children:[Object(c.jsx)(W.a,{className:"align-left"}),m(e.totalSamplesTested)]})]})}),Object(c.jsx)(I.a,{span:6,children:Object(c.jsxs)(T.a,{bordered:!1,className:"card-blue order-card",children:[Object(c.jsx)("h6",{children:"Confirmed Cases"}),Object(c.jsxs)("h2",{children:[Object(c.jsx)(W.a,{className:"align-left"})," ",m(e.totalConfirmedCases)]})]})}),Object(c.jsx)(I.a,{span:6,children:Object(c.jsxs)(T.a,{bordered:!1,className:"card-gray order-card",children:[Object(c.jsx)("h6",{children:"Active Cases"}),Object(c.jsxs)("h2",{children:[Object(c.jsx)(W.a,{className:"align-left"})," ",m(e.totalActiveCases)]})]})}),Object(c.jsx)(I.a,{span:6,children:Object(c.jsxs)(T.a,{bordered:!1,className:"card-green order-card",children:[Object(c.jsx)("h6",{children:"Discharged Cases"}),Object(c.jsxs)("h2",{children:[Object(c.jsx)(W.a,{className:"align-left"})," ",m(e.discharged)]})]})}),Object(c.jsx)(I.a,{span:6,children:Object(c.jsxs)(T.a,{bordered:!1,className:"card-red order-card",children:[Object(c.jsx)("h6",{children:"Death Recorded"}),Object(c.jsxs)("h2",{children:[Object(c.jsx)(W.a,{className:"align-left"})," ",m(e.death)]})]})})]}),Object(c.jsx)(_.a,{}),Object(c.jsx)(H,{state:e.states})]})]})]})}}]),a}(n.Component),X={getAllCovid19Data:A},Y=Object(w.b)((function(e){return e.covidData}),X)(Q),Z=a(23),$=a(188),ee=a(184),te=function(e){var t=e.covidData;f("data",t);var a,n=[],s=[],r=Object($.a)(t.states);try{for(r.s();!(a=r.n()).done;){var o=a.value;n.push(o.state),s.push(o.casesOnAdmission)}}catch(d){r.e(d)}finally{r.f()}f("state name",n);var i={labels:n,datasets:[{label:"Covid-19 Data",fill:!1,lineTension:.5,backgroundColor:"rgba(75,192,192,1)",borderColor:"rgba(0,0,0,1)",borderWidth:2,data:s}]};return Object(c.jsx)("div",{children:Object(c.jsx)(ee.Line,{data:i})})},ae=a(139),ce=S.a.Content,ne=ae.a.TabPane,se=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.props.getAllCovid19Data()}},{key:"callback",value:function(e){console.log(e)}},{key:"render",value:function(){var e=this.props.covidData;return Object(c.jsxs)(S.a,{children:[Object(c.jsx)(B,{}),Object(c.jsxs)(S.a,{className:"site-layout",children:[Object(c.jsx)(J,{}),Object(c.jsxs)(ce,{className:"site-layout-background",children:[Object(c.jsx)("h4",{children:"Graph Section"}),Object(c.jsxs)(ae.a,{defaultActiveKey:"1",onChange:this.callback,children:[Object(c.jsx)(ne,{tab:"Active Cases",children:Object(c.jsx)(te,{covidData:e})},"1"),Object(c.jsx)(ne,{tab:"Confirmed Cases",children:"Confirmed Cases"},"2"),Object(c.jsx)(ne,{tab:"Discharged Cases",children:"Discharged"},"3"),Object(c.jsx)(ne,{tab:"Death Cases",children:"Discharged"},"4")]})]})]})]})}}]),a}(n.Component),re={getAllCovid19Data:A},oe=Object(w.b)((function(e){return e.covidData}),re)(se),ie=a(60),de=a(185),le=a(87),je={covidData:{}},be=Object(ie.c)({covidData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return console.log("data reducer",t.data),Object(le.a)(Object(le.a)({},e),{},{loading:!1,covidData:t.data.data});case p:return Object(le.a)(Object(le.a)({},e),{},{loading:!0,message:t.message});default:return e}}}),he=Object(ie.d)(be,{},Object(ie.a)(de.a)),ue=function(){return Object(c.jsx)(w.a,{store:he,children:Object(c.jsx)(P.a,{children:Object(c.jsxs)(Z.c,{children:[Object(c.jsx)(Z.a,{exact:!0,path:"/",component:Y}),Object(c.jsx)(Z.a,{path:"/app-graph-details",component:oe})]})})})},Oe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,401)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(ue,{})}),document.getElementById("root")),Oe()}},[[389,1,2]]]);
//# sourceMappingURL=main.ba6ef1a3.chunk.js.map