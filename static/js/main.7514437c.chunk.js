(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,a,t){e.exports=t(271)},271:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(18),o=t.n(c),l=t(21),i=t(65),s=t.n(i),u=t(19),m=t(22),p=t(20),h=t(23),g=t(275),d=t(276),E=t(273),f=t(274),b=t(67),v=t(277),y=t(27),w=t(102),O=t.n(w),C=t(47),P=t.n(C),j=t(64),k=t.n(j),S=t(16),N=t.n(S),R=t(104),I=t.n(R),B={BASE:"/",HOME:"/cryptokeeper/",DETAIL:"/cryptokeeper/currency/:id"},x=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(c)))).state={search:""},t.updateSearch=function(e){t.setState({search:e})},t.render=function(){var e=t.props,a=e.classes,n=e.history;return r.a.createElement(O.a,{position:"static",color:"primary"},r.a.createElement(k.a,null,r.a.createElement(N.a,{variant:"h5",className:a.flex,onClick:function(){return n.push(B.HOME)}},"Cryptokeeper"),r.a.createElement("div",{className:a.search},r.a.createElement("div",{className:a.searchIcon},r.a.createElement(I.a,null)),r.a.createElement(P.a,{placeholder:"Search\u2026",value:t.state.search,onChange:function(e){return t.updateSearch(e.target.value)},classes:{root:a.inputRoot,input:a.inputInput}}))))},t}return Object(h.a)(a,e),a}(n.Component),M=Object(l.withStyles)(function(e){return{flex:{flexGrow:1,flex:1},search:Object(b.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(y.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(y.fade)(e.palette.common.white,.25)},marginRight:2*e.spacing.unit,marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:3*e.spacing.unit,width:"auto"}),searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(b.a)({paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:10*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200})}})(Object(v.a)(x)),H=t(66),A=t.n(H),W=t(106),L=t.n(W),T=t(107),$=t.n(T),F=t(109),G=t.n(F),J=t(110),z=t.n(J),D=t(108),K=t.n(D),V=t(105),X=t.n(V),q=Object(l.withStyles)(function(e){return{canvas:{position:"fixed",top:"46%",left:"46%"},progress:{margin:2*e.spacing.unit}}})(function(e){var a=e.classes;return r.a.createElement("div",{className:a.canvas},r.a.createElement(X.a,{className:a.progress,size:50}))}),Q=function(e){return e>0?r.a.createElement("span",{style:{color:"#689f38"}},e,"% \u2191"):e<0?r.a.createElement("span",{style:{color:"#cd0000"}},e,"% \u2193"):r.a.createElement("span",null,e)},U=0;function Y(e,a,t,n,r,c,o,l){return{id:U+=1,name:e,rank:a,price:t,marketCap:n,percentChange24h:r,symbol:c,volume24h:o,totalSupply:l}}var Z=[Y("Frozen yoghurt",159,6,24,4,"$",200,345346),Y("Ice cream sandwich",237,9,37,4.3,"\xa3",234,3456),Y("Eclair",262,16,24,6,"\xa3",56,9785),Y("Cupcake",305,3.7,67,-4.3,"@",3030,355e3),Y("Gingerbread",356,16,49,3.9,"$",44,45555),Y("Honeycomb",408,3.2,21,-3.2,"@",6788,4355554),Y("Banana Split",237,9,68,3.4,"&",344,235326),Y("Jelly Bean",375,0,10,22,"$",45466456,346445355),Y("KitKat",518,26,200,-12.6,"\xa3",9999,9933999),Y("Lollipop",392,.2,6,.2,"\xa3",344,23554325),Y("Marshmallow",318,0,34,2.2,"$",23423,23423423),Y("Nougat",360,19,98.9,-5.6,"@",32555,55352355),Y("Oreo",437,18,44,5.6,"$",324,4324455)],_=function(){return Z},ee=function(e,a){var t=e*a;return Z.slice(t||0,(e+1)*a)},ae=function(e){return Z.filter(function(a){return a.id===parseInt(e,10)})[0]},te=function(e){function a(){var e;return Object(u.a)(this,a),(e=Object(m.a)(this,Object(p.a)(a).call(this))).componentWillMount=function(){var a=e.props.match.params.id;e.fetchCurrency(a)},e.componentWillReceiveProps=function(a){if(e.props.location.pathname!==a.location.pathname){var t=a.match.params.id;e.fetchCurrency(t)}},e.fetchCurrency=function(a){e.setState({loading:!0});var t=ae(e.props.match.params.id);e.setState({currency:t,error:"",loading:!1})},e.render=function(){var a=e.state,t=a.currency,n=a.loading,c=a.error,o=e.props,l=o.classes,i=o.history;return n?r.a.createElement(q,null):c?r.a.createElement("div",{className:"error"},c):r.a.createElement(L.a,{className:l.card},r.a.createElement($.a,{action:r.a.createElement(A.a,{className:l.button,onClick:function(){return i.push(B.HOME)},"aria-label":"Back"},r.a.createElement(K.a,null)),title:r.a.createElement(N.a,{variant:"h6"},t.name," (",t.symbol,")")}),r.a.createElement(G.a,null,r.a.createElement(N.a,{variant:"h6"},"Price  ",t.price),r.a.createElement(N.a,{variant:"h6"},"Rank ",t.rank),r.a.createElement(N.a,{variant:"h6"},"24H change ",Q(t.percentChange24h)),r.a.createElement(z.a,null),r.a.createElement(N.a,{variant:"subtitle1",gutterBottom:!0},"Market cap ",t.symbol," ",t.marketCap),r.a.createElement(N.a,{variant:"subtitle1",gutterBottom:!0},"24H Volume ",t.symbol," ",t.volume24h),r.a.createElement(N.a,{variant:"subtitle1",gutterBottom:!0},"Total supply ",t.totalSupply)))},e.state={currency:{},error:"",loading:!1},e}return Object(h.a)(a,e),a}(n.Component),ne=Object(l.withStyles)(function(e){return{card:{margin:12,maxWidth:400}}})(Object(v.a)(te)),re=t(28),ce=t(111),oe=t.n(ce),le=function(e){var a=e.totalItems,t=e.page,n=e.rowsPerPage,c=e.handlePaginationClick,o=e.handleChangeRowsPerPage;return r.a.createElement(oe.a,{component:"div",count:a,rowsPerPage:n,page:t,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onChangePage:c,onChangeRowsPerPage:o})},ie=t(112),se=t.n(ie),ue=t(114),me=t.n(ue),pe=t(17),he=t.n(pe),ge=t(113),de=t.n(ge),Ee=t(68),fe=t.n(Ee),be=t(36),ve=t.n(be),ye=Object(l.withStyles)(function(e){return{root:{width:"100%",marginTop:3*e.spacing.unit,overflowX:"auto"},table:{minWidth:700}}})(Object(v.a)(function(e){var a=e.classes,t=e.history,n=e.currencies;return r.a.createElement(ve.a,{className:a.root},r.a.createElement(se.a,{className:a.table},r.a.createElement(de.a,null,r.a.createElement(fe.a,null,r.a.createElement(he.a,null,"Cryptocurrency"),r.a.createElement(he.a,null,"Rank"),r.a.createElement(he.a,null,"Price"),r.a.createElement(he.a,null,"Market Cap"),r.a.createElement(he.a,null,"24H Change"))),r.a.createElement(me.a,null,n.map(function(e){return r.a.createElement(fe.a,{key:e.id,onClick:function(){return t.push("/cryptokeeper/currency/".concat(e.id))}},r.a.createElement(he.a,{component:"th",scope:"row"},e.name),r.a.createElement(he.a,null,e.rank),r.a.createElement(he.a,null,e.price),r.a.createElement(he.a,null,e.marketCap),r.a.createElement(he.a,null,Q(e.percentChange24h)))}))))})),we=function(e){function a(){var e;return Object(u.a)(this,a),(e=Object(m.a)(this,Object(p.a)(a).call(this))).componentWillMount=function(){e.fetchCurrencies()},e.fetchCurrencies=function(){e.setState({loading:!0});var a=ee(e.state.page,e.state.perPage);e.setState({currencies:a,loading:!1})},e.handlePaginationClick=function(a,t){e.setState({currencies:ee(t,e.state.perPage),page:t})},e.handleChangeRowsPerPage=function(a){e.setState({currencies:ee(e.state.page,a.target.value),perPage:a.target.value})},e.render=function(){var a=e.state,t=a.currencies,n=a.loading,c=a.error,o=a.page,l=a.perPage;return n?r.a.createElement(q,null):c?r.a.createElement("div",{className:"error"},c):r.a.createElement("div",null,r.a.createElement(ye,{currencies:t}),r.a.createElement(le,{page:o,rowsPerPage:l,totalItems:_().length,handlePaginationClick:e.handlePaginationClick,handleChangeRowsPerPage:e.handleChangeRowsPerPage}))},e.state={page:0,perPage:5,currencies:[],loading:!1,error:""},e.handlePaginationClick=e.handlePaginationClick.bind(Object(re.a)(Object(re.a)(e))),e.handleChangeRowsPerPage=e.handleChangeRowsPerPage.bind(Object(re.a)(Object(re.a)(e))),e}return Object(h.a)(a,e),a}(r.a.Component),Oe=t(272),Ce=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(c)))).render=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"NotFound-title"},"Oops! Page not found"),r.a.createElement(Oe.a,{to:B.HOME,className:"NotFound-link"},"Go to home page"))},t}return Object(h.a)(a,e),a}(n.Component),Pe=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(c)))).render=function(){return r.a.createElement(g.a,null,r.a.createElement("div",null,r.a.createElement(M,null),r.a.createElement(d.a,null,r.a.createElement(E.a,{exact:!0,path:B.HOME,component:we}),r.a.createElement(E.a,{exact:!0,path:B.DETAIL,component:ne}),r.a.createElement(E.a,{component:Ce}),r.a.createElement(f.a,{from:B.BASE,to:B.HOME}))))},t}return Object(h.a)(a,e),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var je=Object(l.createMuiTheme)();o.a.render(r.a.createElement(s.a,{theme:je},r.a.createElement(Pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[115,2,1]]]);
//# sourceMappingURL=main.7514437c.chunk.js.map