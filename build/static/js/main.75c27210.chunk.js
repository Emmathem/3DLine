(this["webpackJsonp3d-line-ant"]=this["webpackJsonp3d-line-ant"]||[]).push([[0],{195:function(e,t,a){},197:function(e,t,a){},387:function(e,t,a){"use strict";a.r(t);var c=a(6),n=a(0),s=a.n(n),r=a(27),i=a.n(r),l=(a(195),a(196),a(197),a(50)),o=a(51),d=a(55),j=a(54),b=a(71),h=a.n(b),u=a(100),O="GET_ALL_COVID_DATA_SUCCESS",p="GET_ALL_COVID_DATA_FAILED",x="https://covidnigeria.herokuapp.com/",g="api",m=function(e){return{data:null,message:e,status:"400"}},f=a(131),v=a.n(f);var C=function(){var e=localStorage.getItem("token");return e?{"Content-Type":"application/json",Authorization:e}:{"Content-Type":"application/json"}},y=function(){var e=Object(u.a)(h.a.mark((function e(t,a,c){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"post"!==a.toLowerCase()){e.next=7;break}return e.next=4,v.a.post("".concat(x).concat(t),c,{headers:C()});case 4:e.t0=e.sent,e.next=10;break;case 7:return e.next=9,v.a.get("".concat(x).concat(t),{headers:C()});case 9:e.t0=e.sent;case 10:if(!(n=e.t0)){e.next=13;break}return e.abrupt("return",n);case 13:e.next=19;break;case 15:return e.prev=15,e.t1=e.catch(0),console.log("".concat(t," error"),m(e.t1)),e.abrupt("return",m(e.t1.message));case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t,a,c){return e.apply(this,arguments)}}(),D=a(389),k=a(74),A=a(39),N=a(392),S=a(390),I=a(110),T=a(65),_=a(393),w=a(394),E=a(395),R=a(73),L=D.a.Sider,F=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={collapsed:!1},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsxs)(L,{trigger:null,collapsible:!0,collapsed:this.state.collapsed,children:[Object(c.jsx)("div",{className:"logo",children:"COVID-19 DATA"}),Object(c.jsxs)(T.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"],children:[Object(c.jsx)(T.a.Item,{icon:Object(c.jsx)(_.a,{}),children:Object(c.jsx)(R.b,{to:"/",children:"Dashboard"})},"1"),Object(c.jsx)(T.a.Item,{icon:Object(c.jsx)(w.a,{}),children:Object(c.jsx)(R.b,{to:"/app-graph-details",children:"Graph Detail"})},"2"),Object(c.jsx)(T.a.Item,{icon:Object(c.jsx)(E.a,{}),children:Object(c.jsx)(R.b,{to:"/",children:"Data Table"})},"3")]})]})})}}]),a}(n.Component),G=a(396),M=a(397),P=D.a.Header,z=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={collapsed:!1},e.toggle=function(){e.setState({collapsed:!e.state.collapsed})},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsx)(P,{className:"header_settings drawerIcon",children:s.a.createElement(this.state.collapsed?G.a:M.a,{className:"trigger",onClick:this.toggle})})})}}]),a}(n.Component),B=a(391),J=[{title:"State",dataIndex:"state",customRender:{}},{title:"Confirmed Cases",dataIndex:"confirmedCases",customRender:{}},{title:"Active Cases",dataIndex:"casesOnAdmission",customRender:{}},{title:"Discharged",dataIndex:"discharged",customRender:{}},{title:"Death",dataIndex:"death",customRender:{}}],V=function(e){return Object(c.jsx)(D.a,{children:Object(c.jsx)(k.a,{children:Object(c.jsx)(A.a,{span:24,children:Object(c.jsx)(B.a,{columns:J,dataSource:e.state,bordered:!0,rowKey:e._id,pagination:{position:"bottomRight"}},e._id)})})})},K=a(398),U=D.a.Content,H=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e,t;e="props",t=this.props,console.log(e.toUpperCase(),t),this.loadCovidData()}},{key:"loadCovidData",value:function(){this.props.getAllCovid19Data()}},{key:"render",value:function(){var e=this.props.covidData;return Object(c.jsxs)(D.a,{children:[Object(c.jsx)(F,{}),Object(c.jsxs)(D.a,{className:"site-layout",children:[Object(c.jsx)(z,{}),Object(c.jsxs)(U,{className:"site-layout-background card__settings",children:[Object(c.jsxs)(k.a,{gutter:[16,16],children:[Object(c.jsx)(A.a,{span:6,children:Object(c.jsxs)(N.a,{bordered:!1,className:"card-blue order-card",children:[Object(c.jsx)("h6",{children:"All Sampled Cases"}),Object(c.jsxs)("h2",{children:[Object(c.jsx)(K.a,{className:"align-left"}),e.totalSamplesTested]})]})}),Object(c.jsx)(A.a,{span:6,children:Object(c.jsxs)(N.a,{bordered:!1,className:"card-blue order-card",children:[Object(c.jsx)("h6",{children:"Confirmed Cases"}),Object(c.jsxs)("h2",{children:[Object(c.jsx)(K.a,{className:"align-left"})," ",e.totalConfirmedCases]})]})}),Object(c.jsx)(A.a,{span:6,children:Object(c.jsxs)(N.a,{bordered:!1,className:"card-gray order-card",children:[Object(c.jsx)("h6",{children:"Active Cases"}),Object(c.jsxs)("h2",{children:[Object(c.jsx)(K.a,{className:"align-left"})," ",e.totalActiveCases]})]})}),Object(c.jsx)(A.a,{span:6,children:Object(c.jsxs)(N.a,{bordered:!1,className:"card-green order-card",children:[Object(c.jsx)("h6",{children:"Discharged Cases"}),Object(c.jsxs)("h2",{children:[Object(c.jsx)(K.a,{className:"align-left"})," ",e.discharged]})]})}),Object(c.jsx)(A.a,{span:6,children:Object(c.jsxs)(N.a,{bordered:!1,className:"card-red order-card",children:[Object(c.jsx)("h6",{children:"Death Recorded"}),Object(c.jsxs)("h2",{children:[Object(c.jsx)(K.a,{className:"align-left"})," ",e.death]})]})})]}),Object(c.jsx)(S.a,{}),Object(c.jsx)(V,{state:e.states})]})]})]})}}]),a}(n.Component),W={getAllCovid19Data:function(){return function(){var e=Object(u.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(g,"get",null);case 2:a=e.sent,console.log("RESPONSE",a),200===a.status?(console.log("RESPONSE here",a.data),t({type:O,data:a.data})):t({type:p,message:a.message});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},q=Object(I.b)((function(e){return e.covidData}),W)(H),Q=a(23),X=a(139),Y=function(){var e={labels:["Jan","Feb","Mar","Apr","May"],datasets:[{label:"Rainfall",fill:!1,lineTension:.5,backgroundColor:"rgba(75,192,192,1)",borderColor:"rgba(0,0,0,1)",borderWidth:2,data:[65,59,80,81,56]}]};return Object(c.jsxs)("div",{children:[Object(c.jsx)(X.Bar,{data:e}),Object(c.jsx)(X.Line,{data:e})]})},Z=D.a.Content,$=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(c.jsxs)(D.a,{children:[Object(c.jsx)(F,{}),Object(c.jsxs)(D.a,{className:"site-layout",children:[Object(c.jsx)(z,{}),Object(c.jsxs)(Z,{className:"site-layout-background",children:[Object(c.jsx)("h4",{children:"Graph Section"}),Object(c.jsx)(S.a,{}),Object(c.jsxs)(k.a,{gutter:[16,16],children:[Object(c.jsx)(A.a,{span:12,children:Object(c.jsx)(N.a,{title:"Total Cases",size:"small",children:Object(c.jsx)(Y,{})})}),Object(c.jsx)(A.a,{span:12,children:Object(c.jsx)(N.a,{title:"Confirmed Cases",size:"small",children:Object(c.jsx)("p",{children:"Card content"})})})]})]})]})]})}}]),a}(n.Component),ee=a(60),te=a(184),ae=a(86),ce={covidData:{}},ne=Object(ee.c)({covidData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return console.log("data reducer",t.data),Object(ae.a)(Object(ae.a)({},e),{},{loading:!1,covidData:t.data.data});case p:return Object(ae.a)(Object(ae.a)({},e),{},{loading:!0,message:t.message});default:return e}}}),se=Object(ee.d)(ne,{},Object(ee.a)(te.a)),re=function(){return Object(c.jsx)(I.a,{store:se,children:Object(c.jsx)(R.a,{children:Object(c.jsxs)(Q.c,{children:[Object(c.jsx)(Q.a,{exact:!0,path:"/",component:q}),Object(c.jsx)(Q.a,{path:"/app-graph-details",component:$})]})})})},ie=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,399)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(re,{})}),document.getElementById("root")),ie()}},[[387,1,2]]]);
//# sourceMappingURL=main.75c27210.chunk.js.map