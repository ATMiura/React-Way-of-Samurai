(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return a});var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t&&t.length>30)return"Max length is ".concat(e," symbols")}}},11:function(e,t,n){e.exports={sidebar:"Navbar_sidebar__3eiJi",nav:"Navbar_nav__1eSUK",item:"Navbar_item__1ktp2",activeLink:"Navbar_activeLink__1ygRg",friends:"Navbar_friends__1L2E2",friends__title:"Navbar_friends__title__MvbF5",friends__list:"Navbar_friends__list__1shwx",friends__item:"Navbar_friends__item__3Rox6",friends__avatar:"Navbar_friends__avatar__GC0dG",friends__name:"Navbar_friends__name__ufgWi"}},14:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"c",function(){return s}),n.d(t,"b",function(){return o});var r=n(169),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"2763c815-b574-4e65-88c7-78e138d5bb90"}}),c={me:function(){return a.get("auth/me")},logIn:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logOut:function(){return a.delete("auth/login")}},s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},getFriends:function(){return a.get("users?friend=true").then(function(e){return e.data})},follow:function(e){return a.post("follow/".concat(e))},unFollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please profileAPI object"),o.getProfile(e)}},o={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})}}},153:function(e,t,n){e.exports=n(295)},158:function(e,t,n){},160:function(e,t,n){},21:function(e,t,n){e.exports={header:"Header_header__2o6YX",header__logo:"Header_header__logo__15t72",logo:"Header_logo__MyBlm",logo__picture:"Header_logo__picture__1YLzY",logo__image:"Header_logo__image__gRy5K",login:"Header_login__Ah4On",login__name:"Header_login__name__2mX76",btn:"Header_btn__3nbrh"}},28:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(66),s=n.n(c);t.a=function(e){return a.a.createElement("div",{className:s.a.preloader},a.a.createElement("div",{className:s.a.spinner}))}},295:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(58),s=n.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(158);var o=n(24),i=n(25),u=n(27),l=n(26),f=n(13),_=n(168),m=n(311),p=n(309),d=(n(160),n(11)),g=n.n(d),h=n(310),v=n(10),E=n(9),b=n.n(E),O=n(28),y=function(e){if(!e.friends)return a.a.createElement(O.a,null);var t=e.friends.map(function(e){return a.a.createElement("div",{className:g.a.friends__item,key:e.id},a.a.createElement(h.a,{to:"/profile/"+e.id,className:b.a.user__link},a.a.createElement("picture",{className:b.a.users__picture},a.a.createElement("img",{src:null!=e.photos.small?e.profile.photos.small:"https://i.pravatar.cc/270",alt:"",className:b.a.users__image})),a.a.createElement("div",{className:g.a.friends__name},e.name)))});return e.friends.length?a.a.createElement("div",{className:g.a.friends},a.a.createElement("h3",{className:g.a.friends__title},"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0440\u0443\u0437\u0435\u0439"),a.a.createElement("div",{className:g.a.friends__list},t)):null},w=n(6),S={friends:[],isFetching:!1,totalUsersCount:0},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FRIENDS_LIST":return Object(w.a)({},e,{friends:t.friends});case"IS_FETCHING":return Object(w.a)({},e,{isFetching:t.isFetching});case"SET_TOTAL_USERS_COUNT":return Object(w.a)({},e,{totalUsersCount:t.count});default:return e}},N=n(7),C=n.n(N),P=n(17),I=n(39),F=n(14),U=function(e,t,n,r){return e.map(function(e){return e[n]===t?Object(w.a)({},e,r):e})},k={users:[],friends:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},T=function(e){return{type:"FOLLOW",userId:e}},R=function(e){return{type:"UNFOLLOW",userId:e}},x=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},L=function(e){return{type:"IS_FETCHING",isFetching:e}},A=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},M=function(){return function(){var e=Object(P.a)(C.a.mark(function e(t){var n;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.c.getFriends();case 2:n=e.sent,t({type:"SET_FRIENDS",friends:n.items});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},G=function(){var e=Object(P.a)(C.a.mark(function e(t,n,r,a){return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(A(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(a(n)),t(A(!1,n)),t(M());case 7:case"end":return e.stop()}},e)}));return function(t,n,r,a){return e.apply(this,arguments)}}(),D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(w.a)({},e,{users:U(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(w.a)({},e,{users:U(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(w.a)({},e,{users:t.users});case"SET_FRIENDS":return Object(w.a)({},e,{friends:t.friends});case"SET_CURRENT_PAGE":return Object(w.a)({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(w.a)({},e,{totalUsersCount:t.count});case"IS_FETCHING":return Object(w.a)({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(w.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(I.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter(function(e){return e===!t.userId})});default:return e}};function z(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=Object(f.a)(e);if(t){var a=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var H=function(e){Object(u.a)(n,e);var t=z(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.toggleIsFetching(!0),this.props.getFriends()}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.props.isFetching?a.a.createElement(O.a,null):null,a.a.createElement(y,this.props))}}]),n}(a.a.Component),B=Object(v.b)(function(e){return{sidebar:e.sidebar,friends:e.usersPage.friends,totalUsersCount:e.usersPage.totalUsersCount}},{setFriends:function(e){return{type:"FRIENDS_LIST",friends:e}},toggleIsFetching:function(e){return{type:"IS_FETCHING",isFetching:e}},setTotalUsersCount:function(e){return{type:"SET_TOTAL_USERS_COUNT",count:e}},getFriends:M})(H),W=function(e){return a.a.createElement("div",{className:g.a.sidebar},a.a.createElement("nav",{className:g.a.nav},a.a.createElement("div",{className:g.a.item},a.a.createElement(h.a,{to:"/profile",activeClassName:g.a.activeLink},"Profile")),a.a.createElement("div",{className:"".concat(g.a.item," ").concat(g.a.active)},a.a.createElement(h.a,{to:"/dialogs",activeClassName:g.a.activeLink},"Messages")),a.a.createElement("div",{className:"".concat(g.a.item," ").concat(g.a.active)},a.a.createElement(h.a,{to:"/users",activeClassName:g.a.activeLink},"Users"))),a.a.createElement(B,null))},X=n(86),Y=n(68),q=n(54),K=n.n(q),V=function(e){for(var t=e.currentPage,n=e.onPageChanged,c=e.totalItemsCount,s=e.pageSize,o=e.portionSize,i=void 0===o?10:o,u=Math.ceil(c/s),l=[],f=1;f<=u;f++)l.push(f);var _=Math.ceil(u/i),m=Object(r.useState)(1),p=Object(Y.a)(m,2),d=p[0],g=p[1],h=(d-1)*i+1,v=d*i;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:K.a.pagination},a.a.createElement("ul",{className:K.a.pagination__list},d>1&&a.a.createElement("button",{onClick:function(){g(d-1)}},"Prev"),l.filter(function(e){return e>=h&&e<=v}).map(function(e){return a.a.createElement("li",{key:e,className:"".concat(K.a.pagination__item," ").concat(t===e&&K.a.active),onClick:function(t){n(e)}}," ",e)}),_>d&&a.a.createElement("button",{onClick:function(){g(d+1)}},"Next"))))},J=function(e){var t=e.user,n=e.followingInProgress,r=e.unFollow,c=e.follow;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:b.a.user+" "+b.a.active},a.a.createElement("div",{className:b.a.users__avatar},a.a.createElement(h.a,{to:"/profile/"+t.id},a.a.createElement("picture",{className:b.a.users__picture},a.a.createElement("img",{src:null!=t.photos.small?t.photos.small:"https://i.pravatar.cc/270",alt:"",className:b.a.users__image}))),t.followed?a.a.createElement("button",{disabled:n.some(function(e){return e===t.id}),onClick:function(){r(t.id)}},"Unfollow"):a.a.createElement("button",{disabled:n.some(function(e){return e===t.id}),onClick:function(){c(t.id)}},"Follow")),a.a.createElement("div",null,a.a.createElement("div",{className:b.a.users__fullName},t.name),a.a.createElement("div",{className:b.a.users__status},t.status)),a.a.createElement("div",{className:b.a.location},a.a.createElement("div",{className:b.a.location__country},"user.location.country"),a.a.createElement("div",{className:b.a.location__city},"user.location.city"))))},Z=function(e){var t=e.currentPage,n=e.onPageChanged,r=e.totalUsersCount,c=e.pageSize,s=e.users,o=Object(X.a)(e,["currentPage","onPageChanged","totalUsersCount","pageSize","users"]);return a.a.createElement(a.a.Fragment,null,a.a.createElement(V,{currentPage:t,onPageChanged:n,totalItemsCount:r,pageSize:c}),a.a.createElement("div",{className:b.a.users},a.a.createElement("div",{className:b.a.users__list},s.map(function(e){return a.a.createElement(J,{key:e.id,user:e,followingInProgress:o.followingInProgress,unFollow:o.unFollow,follow:o.follow})}))))},$=n(78),Q=n(8),ee=n(124),te=Object(ee.a)(function(e){return e.usersPage.users},function(e){return e.filter(function(e){return!0})}),ne=function(e){return e.usersPage.pageSize},re=function(e){return e.usersPage.totalUsersCount},ae=function(e){return e.usersPage.currentPage},ce=function(e){return e.usersPage.isFetching},se=function(e){return e.usersPage.followingInProgress};function oe(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=Object(f.a)(e);if(t){var a=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var ie=function(e){Object(u.a)(n,e);var t=oe(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.requestUsers(t,n)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.props.isFetching?a.a.createElement(O.a,null):null,a.a.createElement(Z,Object.assign({key:this.props.userId,onPageChanged:this.onPageChanged},this.props)))}}]),n}(a.a.Component),ue=Object(Q.d)($.a,Object(v.b)(function(e){return{users:te(e),pageSize:ne(e),totalUsersCount:re(e),currentPage:ae(e),isFetching:ce(e),followingInProgress:se(e)}},{follow:function(e){return function(){var t=Object(P.a)(C.a.mark(function t(n){return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:G(n,e,F.c.follow.bind(F.c),T);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},unFollow:function(e){return function(){var t=Object(P.a)(C.a.mark(function t(n){return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:G(n,e,F.c.unFollow.bind(F.c),R);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:x,toggleFollowingProgress:A,requestUsers:function(e,t){return function(){var n=Object(P.a)(C.a.mark(function n(r){var a;return C.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r(L(!0)),r(x(e)),n.next=4,F.c.getUsers(e,t);case 4:a=n.sent,r(L(!1)),r({type:"SET_USERS",users:a.items}),r({type:"SET_TOTAL_USERS_COUNT",count:a.totalCount});case 8:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()},getFriends:M}))(ie),le=n(44),fe={userId:null,email:null,login:null,isAuth:!1,isFetching:!1},_e=function(e,t,n,r){return{type:"samurai-network/auth/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},me=function(){return function(){var e=Object(P.a)(C.a.mark(function e(t){var n,r,a,c,s;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,c=r.email,s=r.login,t(_e(a,c,s,!0)));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},pe=function(){return function(){var e=Object(P.a)(C.a.mark(function e(t){return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.logOut();case 2:0===e.sent.data.resultCode&&t(_e(null,null,null,!1));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"samurai-network/auth/SET_USER_DATA":return Object(w.a)({},e,t.payload);case"IS_FETCHING":return Object(w.a)({},e,{isFetching:t.isFetching});default:return e}},ge=n(21),he=n.n(ge),ve=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement("header",{className:he.a.header},a.a.createElement("div",{className:he.a.header__logo},a.a.createElement("div",{className:he.a.logo},a.a.createElement("picture",{className:he.a.logo__picture},a.a.createElement("img",{src:"https://www.freelogodesign.org/Content/img/logo-ex-7.png",alt:"",className:he.a.logo__image})))),a.a.createElement("div",{className:he.a.login},e.isAuth?a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:he.a.btn+" "+he.a.login__name},e.login),a.a.createElement("button",{className:he.a.btn,onClick:e.logOut},"Logout")):a.a.createElement(h.a,{to:"/login",className:he.a.btn},"Login"))))};function Ee(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=Object(f.a)(e);if(t){var a=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var be=function(e){Object(u.a)(n,e);var t=Ee(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(ve,this.props))}}]),n}(a.a.Component),Oe=Object(v.b)(function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}},{logOut:pe})(be),ye=n(85),we=n(36),Se=n(103),je=n(308),Ne=n(52),Ce=n.n(Ne),Pe=Object(ye.a)({form:"login"})(function(e){var t=e.handleSubmit,n=e.error;return a.a.createElement("form",{onSubmit:t},Object(we.c)("Email","email",[Se.b],we.a),Object(we.c)("Password","password",[Se.b],we.a,{type:"password"}),Object(we.c)(null,"rememberMe",[],we.a,{type:"checkbox"},"Remember Me"),n&&a.a.createElement("div",{className:Ce.a.formSummaryError},n),a.a.createElement("div",null,a.a.createElement("button",null,"Login")))}),Ie=Object(v.b)(function(e){return{isAuth:e.auth.isAuth}},{logIn:function(e,t,n){return function(){var r=Object(P.a)(C.a.mark(function r(a){var c,s;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,F.a.logIn(e,t,n);case 2:0===(c=r.sent).data.resultCode?a(me()):(s=c.data.messages.length>0?c.data.messages[0]:"Some error",a(Object(le.a)("login",{_error:s})));case 4:case"end":return r.stop()}},r)}));return function(e){return r.apply(this,arguments)}}()},logOut:pe})(function(e){return e.isAuth?a.a.createElement(je.a,{to:"/profile"}):a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Login"),a.a.createElement(Pe,{onSubmit:function(t){e.logIn(t.email,t.password,t.rememberMe)}}))}),Fe={initialized:!1},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe;switch((arguments.length>1?arguments[1]:void 0).type){case"INITIALIZED_SUCCESS":return Object(w.a)({},e,{initialized:!0});default:return e}},ke=n(67),Te=n(83),Re=n(126),xe=n(299),Le=Object(Q.c)({profilePage:ke.b,dialogsPage:Te.a,sidebar:j,usersPage:D,auth:de,app:Ue,form:xe.a}),Ae=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Q.d,Me=Object(Q.e)(Le,Ae(Object(Q.a)(Re.a)));function Ge(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=Object(f.a)(e);if(t){var a=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var De=a.a.lazy(function(){return n.e(1).then(n.bind(null,307))}),ze=a.a.lazy(function(){return n.e(2).then(n.bind(null,306))}),He=function(e){Object(u.a)(n,e);var t=Ge(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:"app-wrapper"},a.a.createElement(Oe,null),a.a.createElement(W,null),a.a.createElement("div",{className:"app-wrapper-content"},a.a.createElement(_.a,{path:"/dialogs",render:function(){return a.a.createElement(a.a.Suspense,{fallback:a.a.createElement(O.a,null)},a.a.createElement(De,null))}}),a.a.createElement(_.a,{path:"/profile/:userId?",render:function(){return a.a.createElement(a.a.Suspense,{fallback:a.a.createElement(O.a,null)},a.a.createElement(ze,null))}}),a.a.createElement(_.a,{path:"/users",render:function(){return a.a.createElement(ue,null)}}),a.a.createElement(_.a,{path:"/login",render:function(){return a.a.createElement(Ie,null)}}))):a.a.createElement(O.a,null)}}]),n}(a.a.Component),Be=Object(Q.d)(m.a,Object(v.b)(function(e){return{initialized:e.app.initialized}},{initializeApp:function(){return function(e){var t=e(me());Promise.all([t]).then(function(){e({type:"INITIALIZED_SUCCESS"})})}}}))(He),We=function(e){return a.a.createElement(p.a,null,a.a.createElement(v.a,{store:Me},a.a.createElement(Be,null)))};s.a.render(a.a.createElement(We,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},36:function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"a",function(){return f}),n.d(t,"c",function(){return _});var r=n(86),a=n(0),c=n.n(a),s=n(52),o=n.n(s),i=n(84),u=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,s=n&&r;return c.a.createElement(c.a.Fragment,null,c.a.createElement("label",{className:o.a.formControl+" "+(s?o.a.error:"")},a,s&&c.a.createElement("span",null,r)))},l=function(e){e.input,e.meta,e.child;var t=Object(r.a)(e,["input","meta","child"]);return c.a.createElement(u,e,c.a.createElement("textarea",Object.assign({},e.input,t)))},f=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return c.a.createElement(u,e,c.a.createElement("input",Object.assign({},t,n)))},_=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return c.a.createElement("div",null,c.a.createElement(i.a,Object.assign({placeholder:e,name:t,component:r,validate:n},a)),s&&c.a.createElement("span",null,s))}},52:function(e,t,n){e.exports={"form-control":"FormControls_form-control__54mpV",error:"FormControls_error__28fAX",formSummaryError:"FormControls_formSummaryError__JnM5k"}},54:function(e,t,n){e.exports={pagination:"paginator_pagination__1dKcM",pagination__list:"paginator_pagination__list__LWXlL",pagination__item:"paginator_pagination__item__2HnmG",active:"paginator_active__34C_g"}},66:function(e,t,n){e.exports={preloader:"preloader_preloader__28XG2",spinner:"preloader_spinner__5H6MU",spin:"preloader_spin__3kf8M"}},67:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"d",function(){return _}),n.d(t,"c",function(){return m}),n.d(t,"e",function(){return p});var r=n(7),a=n.n(r),c=n(17),s=n(39),o=n(6),i=n(14),u={posts:[{id:1,message:"1 Hi, how are you?",likesCount:11},{id:2,message:"2 It's my first post",likesCount:12},{id:3,message:"3 Hi, how are you?",likesCount:13},{id:4,message:"4 It's my first post",likesCount:14}],profile:null,status:""},l=function(e){return{type:"ADD-POST",newPostText:e}},f=function(e){return{type:"SET_STATUS",status:e}},_=function(e){return function(){var t=Object(c.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.getProfile(e);case 2:r=t.sent,n({type:"SET_USER_PROFILE",profile:r.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(c.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getStatus(e);case 2:r=t.sent,n(f(r.data));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(c.a)(a.a.mark(function t(n){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.updateStatus(e);case 2:0===!t.sent.data.resultCode&&n(f(e));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":return Object(o.a)({},e,{posts:[].concat(Object(s.a)(e.posts),[{id:5,message:t.newPostText,likesCount:0}]),newPostText:""});case"DELETE_POST":return Object(o.a)({},e,{posts:e.posts.filter(function(e){return e.id!=t.postsId})});case"SET_USER_PROFILE":return Object(o.a)({},e,{profile:t.profile});case"SET_STATUS":return Object(o.a)({},e,{status:t.status});default:return e}}},78:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var r=n(24),a=n(25),c=n(27),s=n(26),o=n(13),i=n(0),u=n.n(i),l=n(308),f=n(10);function _(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=Object(o.a)(e);if(t){var a=Object(o.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(s.a)(this,n)}}var m=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var t=function(t){Object(c.a)(s,t);var n=_(s);function s(){return Object(r.a)(this,s),n.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){return this.props.isAuth?u.a.createElement(e,this.props):u.a.createElement(l.a,{to:"/login"})}}]),s}(u.a.Component);return Object(f.b)(m)(t)}},83:function(e,t,n){"use strict";n.d(t,"b",function(){return s});var r=n(39),a=n(6),c={dialogs:[{id:1,avatar:"https://i.pravatar.cc/300",name:"Dimych"},{id:2,avatar:"https://i.pravatar.cc/300",name:"Andrew"},{id:3,avatar:"https://i.pravatar.cc/300",name:"Sveta"},{id:4,avatar:"https://i.pravatar.cc/300",name:"Sasha"},{id:5,avatar:"https://i.pravatar.cc/300",name:"Viktor"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is your it-kamasutra?"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},s=function(e){return{type:"SEND_MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":var n=t.newMessageBody;return Object(a.a)({},e,{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},9:function(e,t,n){e.exports={users:"User_users__gj35h",user:"User_user__1hVlA",user__chat:"User_user__chat__2rW2U",users__avatar:"User_users__avatar__1TrmR",users__picture:"User_users__picture__T1Mkb",users__image:"User_users__image__3qhsL",user__message:"User_user__message__3G-My",user__left:"User_user__left__12_w2",user__right:"User_user__right__2RRzI",users__list:"User_users__list__2ZkKv",usersItems:"User_usersItems__2SheZ",active:"User_active__3royG",user__link:"User_user__link__12cPe",users__follow:"User_users__follow__1chdX",users__fullName:"User_users__fullName__274p7",users__status:"User_users__status__3Vc2F",location:"User_location__2cj-p",location__country:"User_location__country__2cI2W",location__city:"User_location__city__WSj5r",show__more:"User_show__more__1Fr1c"}}},[[153,4,3]]]);
//# sourceMappingURL=main.5794f17b.chunk.js.map