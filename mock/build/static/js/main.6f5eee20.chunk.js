(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(e,t,a){},43:function(e,t,a){},50:function(e,t,a){e.exports=a(87)},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t){!function(e,t){var a=e.documentElement,n="orientationchange"in window?"orientationchange":"resize",l=function(){var e=a.clientWidth;e>=640&&(e=640),e&&(a.style.fontSize=e/640*100+"px")};e.addEventListener&&(t.addEventListener(n,l,!1),e.addEventListener("DOMContentLoaded",l,!1))}(document,window)},87:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(22),r=a.n(c),o=a(2),i=a(3),s=a(5),m=a(4),u=a(6),E=a(19),p=a.n(E);p.a.interceptors.request.use(function(e){return e},function(e){return Promise.reject(e)}),p.a.interceptors.response.use(function(e){return e},function(e){return Promise.reject(e)}),window.axios=p.a;var d=p.a,f=a(44),h=a.n(f),v=(a(77),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={list:[{}]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;d({url:"/mock/banner2",params:{_page:1,_limit:4}}).then(function(t){e.setState({list:t.data.page_data})})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(h.a,{className:"lbt",swipeOptions:{auto:1e3,speed:500}},this.state.list.map(function(e,t){return l.a.createElement("img",{src:e.banner,key:t})})))}}]),t}(l.a.Component)),b=(a(42),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"classMenu_box"},l.a.createElement("div",{className:"classMenu"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"javascript:classifyUIR('${goodstype.id}','${status.index}')"},l.a.createElement("i",{className:"iconfont icon-huluobu color1"}),l.a.createElement("p",null,"HTML"))),l.a.createElement("li",null,l.a.createElement("a",{href:"javascript:classifyUIR('${goodstype.id}','${status.index}')"},l.a.createElement("i",{className:"iconfont icon-icon-test2 color2"}),l.a.createElement("p",null,"CSS"))),l.a.createElement("li",null,l.a.createElement("a",{href:"javascript:classifyUIR('${goodstype.id}','${status.index}')"},l.a.createElement("i",{className:"iconfont icon-xiangjiao color3"}),l.a.createElement("p",null,"JS"))),l.a.createElement("li",null,l.a.createElement("a",{href:"javascript:classifyUIR('${goodstype.id}','${status.index}')"},l.a.createElement("i",{className:"iconfont icon-icon-test color4"}),l.a.createElement("p",null,"Jquery"))),l.a.createElement("li",null,l.a.createElement("a",{href:"javascript:classifyUIR('${goodstype.id}','${status.index}')"},l.a.createElement("i",{className:"iconfont icon-dadou color5"}),l.a.createElement("p",null,"Bootstrap"))),l.a.createElement("li",null,l.a.createElement("a",{href:"javascript:classifyUIR('${goodstype.id}','${status.index}')"},l.a.createElement("i",{className:"iconfont icon-binggangaodian color6"}),l.a.createElement("p",null,"Vue"))),l.a.createElement("li",null,l.a.createElement("a",{href:"javascript:classifyUIR('${goodstype.id}','${status.index}')"},l.a.createElement("i",{className:"iconfont icon-haixian color7"}),l.a.createElement("p",null,"HTML5"))),l.a.createElement("li",null,l.a.createElement("a",{href:"javascript:classifyUIR('${goodstype.id}','${status.index}')"},l.a.createElement("i",{className:"iconfont icon-rou color8"}),l.a.createElement("p",null,"CSS3"))),l.a.createElement("li",null,l.a.createElement("a",{href:"javascript:classifyUIR('${goodstype.id}','${status.index}')"},l.a.createElement("i",{className:"iconfont icon-tiaoliao color9"}),l.a.createElement("p",null,"PS"))),l.a.createElement("li",null,l.a.createElement("a",{href:"javascript:classifyUIR('${goodstype.id}','${status.index}')"},l.a.createElement("i",{className:"iconfont icon-icon-test1 color10"}),l.a.createElement("p",null,"Win")))))),l.a.createElement("div",{className:"commonList"},l.a.createElement("div",{className:"title"},l.a.createElement("font",null,"\u65b0\u54c1\u63a8\u8350")),l.a.createElement("div",{className:"con"},l.a.createElement("div",{className:"menu"},l.a.createElement("div",{className:"wrapper wrapper03",id:"commonList"},l.a.createElement("div",{className:"scroller"},l.a.createElement("ul",{className:"clearfix"},l.a.createElement("li",null,l.a.createElement("a",{href:"javascript:void(0)",id:""},"UI")),l.a.createElement("li",null,l.a.createElement("a",{href:"javascript:void(0)",id:""},"\u524d\u7aef")),l.a.createElement("li",null,l.a.createElement("a",{href:"javascript:void(0)",id:""},"Java")),l.a.createElement("li",null,l.a.createElement("a",{href:"javascript:void(0)",id:""},"\u6d4b\u8bd5")),l.a.createElement("li",null,l.a.createElement("a",{href:"javascript:void(0)",id:""},"\u5b9e\u65bd")),l.a.createElement("li",null,l.a.createElement("a",{href:"javascript:void(0)",id:""},"\u8fd0\u7ef4")),l.a.createElement("li",null,l.a.createElement("a",{href:"javascript:void(0)",id:""},"\u67b6\u6784\u5e08")),l.a.createElement("li",null,l.a.createElement("a",{href:"javascript:void(0)",id:""},"\u9879\u76ee\u7ecf\u7406")))))))))}}]),t}(l.a.Component)),j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={list:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;axios({url:"/mock/product",params:{_limit:20}}).then(function(t){e.setState({list:t.data.page_data})})}},{key:"render",value:function(){return l.a.createElement("div",{className:"commonList"},l.a.createElement("div",{className:"con"},l.a.createElement("div",{id:"commonLists",className:"list"},l.a.createElement("ul",null,this.state.list.map(function(e,t){return l.a.createElement("li",{key:t,className:e.id%2?"no_mr":""},l.a.createElement("img",{src:e.img}),l.a.createElement("div",{className:"right"},l.a.createElement("h1",null,e.title),l.a.createElement("div",{className:"content"},l.a.createElement("p",{className:"color"},e.pri,"\u5143/\u65a4"),l.a.createElement("i",{className:"iconfont icon-htmal5icon29"}))))})))))}}]),t}(n.Component),N=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(v,null),l.a.createElement(b,null),l.a.createElement(j,null))}}]),t}(l.a.Component),g=(a(78),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"top"},l.a.createElement("div",{className:"shop"},l.a.createElement("div",{className:"shop_name"},l.a.createElement("span",null,l.a.createElement("i",{className:"iconfont icon-shangdian"}),l.a.createElement("font",null,"\u7a77\u5728\u95f9\u5e02")))),l.a.createElement("div",{className:"search"},l.a.createElement("i",{className:"iconfont icon-sousuo"}),l.a.createElement("input",{type:"text",placeholder:"\u5feb\u901f\u641c\u7d22\u5546\u54c1",readOnly:"readonly"})))}}]),t}(l.a.Component)),y=(a(43),a(79),a(13)),O=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"bottom"},l.a.createElement("ul",null,l.a.createElement("li",{className:"active"},l.a.createElement(y.b,{to:"/home"},l.a.createElement("img",{src:"./assets/images/bottom_menu_1_hover.png"}),l.a.createElement("p",null,"\u9996\u9875"))),l.a.createElement("li",null,l.a.createElement(y.b,{to:"/search"},l.a.createElement("img",{src:"./assets/images/bottom_menu_2.png"}),l.a.createElement("p",null,"\u5206\u7c7b"))),l.a.createElement("li",null,l.a.createElement(y.b,{to:"/detail"},l.a.createElement("img",{src:"./assets/images/bottom_menu_5.png"}),l.a.createElement("p",null,"\u5e38\u7528\u6e05\u5355"))),l.a.createElement("li",null,l.a.createElement(y.b,{to:"/rank"},l.a.createElement("img",{id:"menuGoodsNumTag",src:"./assets/images/bottom_menu_3.png"}),l.a.createElement("p",null,"\u8d2d\u7269\u8f66"),l.a.createElement("span",{id:"menuGoodsNum",className:"goodsNum"},"2"))),l.a.createElement("li",null,l.a.createElement(y.b,{to:"/user"},l.a.createElement("img",{src:"./assets/images/bottom_menu_4.png"}),l.a.createElement("p",null,"\u6211\u7684")))))}}]),t}(l.a.Component),w=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"\u5546\u54c1\u8be6\u60c5"))}}]),t}(l.a.Component),k=(a(81),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log(this.props),l.a.createElement("div",null,l.a.createElement("div",{className:"myCenterTop"},l.a.createElement("a",{href:"merchantInfo.html"},l.a.createElement("i",{className:"iconfont icon-shezhi"}))),l.a.createElement("div",{className:"accountBalance"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"order.html"},l.a.createElement("i",null,"0.00"),l.a.createElement("p",null,"\u4f59\u989d"))),l.a.createElement("li",null,l.a.createElement("a",{href:"order.html"},l.a.createElement("i",null,"0.00"),l.a.createElement("p",null,"\u8fd4\u5229"))),l.a.createElement("li",null,l.a.createElement("a",{href:"order.html"},l.a.createElement("i",null,"0.00"),l.a.createElement("p",null,"\u6b20\u6b3e"))),l.a.createElement("li",{className:"last"},l.a.createElement("a",{href:"accountBalance.html"},l.a.createElement("i",{className:"iconfont icon-daifukuan"}),l.a.createElement("p",null,"\u6211\u7684\u94b1\u5305"))))),l.a.createElement("div",{className:"myOrder"},l.a.createElement("div",{className:"con"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"order.html"},l.a.createElement("i",{className:"iconfont icon-daifukuan"}),l.a.createElement("p",null,"\u5f85\u4ed8\u6b3e"))),l.a.createElement("li",null,l.a.createElement("a",{href:"order.html"},l.a.createElement("i",{className:"iconfont icon-baoguofahuo"}),l.a.createElement("p",null,"\u5f85\u53d1\u8d27"))),l.a.createElement("li",null,l.a.createElement("a",{href:"order.html"},l.a.createElement("i",{className:"iconfont icon-distribution"}),l.a.createElement("p",null,"\u914d\u9001\u4e2d"))),l.a.createElement("li",null,l.a.createElement("a",{href:"order.html"},l.a.createElement("i",{className:"iconfont icon-yishouhuo"}),l.a.createElement("p",null,"\u5df2\u5b8c\u6210"))),l.a.createElement("li",{className:"te123"},l.a.createElement("a",{href:"orderAllList.html"},l.a.createElement("i",{className:"iconfont icon-dingdan"}),l.a.createElement("p",null,"\u6211\u7684\u8ba2\u5355")))))),l.a.createElement("div",{className:"tools"},l.a.createElement("h1",null,"\u5e38\u7528\u5de5\u5177"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"sysMessage.html"},l.a.createElement("i",{className:"iconfont icon-xiaoxi1 color1"}),l.a.createElement("p",null,"\u6d88\u606f\u4e2d\u5fc3"))),l.a.createElement("li",null,l.a.createElement("a",{href:"feedback.html"},l.a.createElement("i",{className:"iconfont icon-iconyijianfankui color2"}),l.a.createElement("p",null,"\u610f\u89c1\u53cd\u9988"))),l.a.createElement("li",null,l.a.createElement("a",{href:"javascript:openTc('hotLine','400 600 1111','tel:400 600 1111','\u53d6\u6d88','\u547c\u53eb')"},l.a.createElement("i",{className:"iconfont icon-kefu1 color2"}),l.a.createElement("p",null,"\u5ba2\u670d\u70ed\u7ebf"))),l.a.createElement("li",null,l.a.createElement("a",{href:"aboutUs.html"},l.a.createElement("i",{className:"iconfont icon-guanyuwomen color1"}),l.a.createElement("p",null,"\u5173\u4e8e\u6211\u4eec"))),l.a.createElement("li",null,l.a.createElement("a",{href:"modifyPassword.html"},l.a.createElement("i",{className:"iconfont icon-lock color1"}),l.a.createElement("p",null,"\u4fee\u6539\u5bc6\u7801"))),l.a.createElement("li",null,l.a.createElement("a",{href:"cashCoupon.html"},l.a.createElement("i",{className:"iconfont icon-youhuiquan color2"}),l.a.createElement("p",null,"\u4f18\u60e0\u5238"))))),l.a.createElement("div",{className:"h_58"}))}}]),t}(n.Component)),_=(a(82),a(16)),x=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={username:"",password:"",mess:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"login"},l.a.createElement("div",{className:"box"},l.a.createElement("form",{action:"",method:"post"},l.a.createElement("div",{className:"row"},l.a.createElement("input",{type:"text",className:"loginName",name:"mobile",placeholder:"\u8bf7\u8f93\u5165\u8d26\u53f7",value:this.state.username,onChange:function(t){return e.setState({username:t.target.value})}}),l.a.createElement("i",{className:"iconfont icon-erji-yonghuguanli"})),l.a.createElement("div",{className:"row"},l.a.createElement("input",{value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})},type:"password",className:"checkLoginBut",name:"pwd",placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801"}),l.a.createElement("i",{className:"iconfont icon-icon-"}),l.a.createElement("a",{className:"forgetPassword",href:"forgetPassword.html"},"\u5fd8\u8bb0\u5bc6\u7801")),l.a.createElement("div",{className:"loginCheckText"}),l.a.createElement("div",{className:"row"},l.a.createElement("input",{type:"button",className:"loginBut",value:"\u767b\u5f55",onClick:function(){return e.props.login(e.state.username,e.state.password,e)}})))))}}]),t}(n.Component),I=Object(_.a)(null,function(e,t){return{login:function(a,n,l){return e(function(e){var t=e.url,a=e.params,n=void 0===a?{}:a,l=e.method,c=void 0===l?"get":l,r=e.receipt,o=void 0!==r&&r,i=e.typeName,s=e.data,m=void 0===s?{}:s;return function(e,a){return p()({params:n,method:c,data:m,url:t}).then(function(t){if(e({type:i,payload:t.data}),o)return t.data})}}({url:"/mock/login",method:"post",data:{username:a,password:n},typeName:"UPDATE_USER",receipt:!0})).then(function(e){console.log(e),0===e.err?(localStorage.setItem("react_user",JSON.stringify(e)),t.history.push("./user")):l.setState({mess:e.msg})})}}})(x),C=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"ErrorPage"))}}]),t}(n.Component),L=a(17),$=(a(84),a(85),a(86),a(49)),S=(Object(_.a)(function(e){return{userdata:e.user}},function(e){return{}})(function(e){var t=e.userdata,a=e.component,n=Object($.a)(e,["userdata","component"]);return l.a.createElement(L.b,Object.assign({},n,{render:function(e){return 0===t.err?l.a.createElement(a,Object.assign({},e,{userdata:t})):l.a.createElement(L.a,{to:"/user"})}}))}),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"checkPath",value:function(e){/home|detail/.test(e)&&(this.props.viewNav(!0),this.props.viewFoot(!0)),/login|reg|user/.test(e)&&(this.props.viewNav(!1),this.props.viewFoot(!0))}},{key:"componentWillReceiveProps",value:function(e){var t=e.location.pathname;this.checkPath(t)}},{key:"componentDidMount",value:function(){var e=this.props.location.pathname;this.checkPath(e)}},{key:"render",value:function(){var e=this.props,t=(e.bLoading,e.bFoot),a=e.bNav;return l.a.createElement("div",{className:"App"},a&&l.a.createElement(g,null),l.a.createElement(L.d,null,l.a.createElement(L.b,{path:"/home",component:N}),l.a.createElement(L.b,{path:"/detail/:id",component:w}),l.a.createElement(L.b,{path:"/user",component:k}),l.a.createElement(L.b,{path:"/login",component:I}),l.a.createElement(L.a,{exact:!0,from:"/",to:"/home"}),l.a.createElement(L.b,{component:C})),t?l.a.createElement(O,null):null)}}]),t}(n.Component)),U=Object(_.a)(function(e){return{bNav:e.bNav,bFoot:e.bFoot,bLoading:e.bLoading}},function(e){return{viewNav:function(t){return e({type:"VIEW_NAV",payload:t})},viewFoot:function(t){return e({type:"VIEW_FOOT",payload:t})}}})(S),P=a(24),A=a(20),R=function(e,t){var a=t.type,n=t.payload;switch(a){case"VIEW_NAV":return Object(A.a)({},e,{bNav:n});case"VIEW_FOOT":return Object(A.a)({},e,{bFoot:n});case"VIEW_LOADING":return Object(A.a)({},e,{bLoading:n});case"UPDATE_HOME":return Object(A.a)({},e,{home:n.data});case"UPDATE_DETAIL":return Object(A.a)({},e,{detail:n.data});case"UPDATE_USER":return Object(A.a)({},e,{user:n});default:return e}},T={bNav:!0,bFoot:!0,bLoading:!1,home:[],user:{err:1},detail:{}},F=a(47),D=Object(P.c)(R,T,Object(P.a)(F.a)),M=a(48);localStorage.getItem("react_user")&&JSON.parse(localStorage.getItem("react_user"));r.a.render(l.a.createElement(M.a,{store:D},l.a.createElement(y.a,null,l.a.createElement(L.b,{component:U}))),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.6f5eee20.chunk.js.map