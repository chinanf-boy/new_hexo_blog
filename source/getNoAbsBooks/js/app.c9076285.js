webpackJsonp([1],{"+VGo":function(t,e){},0:function(t,e,n){t.exports=n("NHnr")},"1isn":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("EuXz");var r=n("/5sW"),o=n("22C0"),i=n.n(o),a=n("bm7V"),s=n.n(a),u=(n("gbyG"),n("Gh7F"),n("CvWX"),n("9Yib"),n("A0n/"),n("fx22"),n("y9m4"),n("SldL"),n("7hDC")),c=n.n(u),l=(n("Y1S0"),n("NYxO")),d=n("mtWM");d.defaults.timeout=5e3,Object({NODE_ENV:"production",BASE_URL:"/"}).BOOK_DEV?d.defaults.baseURL="http://192.168.11.103:5000":d.defaults.baseURL="https://getnoabsbooks.herokuapp.com";var p=d,f=n("hBlz"),h=n.n(f),m=n("Au9i");n("rQBB"),r["default"].use(l["a"]);var v=new l["a"].Store({state:{isBlockLoading:!1,errMessage:"",pendingLoad:"",books:[],Api:["http://m.zwdu.com","http://m.76wx.com"],apiSelected:"",suffix:"html",directory:"book",fullURL:"",HTML:"",title:"无广告的书-yobrave",isIndexLoading:!1,messageForUser:"",autoRead:!1,autoTime:10,isHomeLoading:!1},mutations:{clearBooks:function(t){t.books=[]},setBlockLoading:function(t,e){t.isBlockLoading=e},setPendingLoad:function(t,e){t.pendingLoad!=e&&(t.pendingLoad=e)},setErrMessage:function(t,e){t.errMessage=e},setFullURL:function(t,e){t.fullURL=e},setApiSelected:function(t,e){t.apiSelected=e},setHomeLoading:function(t,e){t.isHomeLoading=e},addBooks:function(t,e){Object.keys(e).forEach(function(n){t.books.push(e[n])})},changeApi:function(t,e){t.Api=e},changeSuffix:function(t,e){t.suffix=e},setHtml:function(t,e){t.HTML=e},setTitle:function(t,e){t.title=e},setAutoRead:function(t,e){t.autoRead=e},setAutoTimer:function(t,e){t.autoTime=e},setIndexLoading:function(t,e){t.isIndexLoading=e},setMessageForUser:function(t,e){t.messageForUser=e}},getters:{getBookNameList:function(t){return t.books.map(function(t){return decodeURI(t.name)})},getFullUrl:function(t){return function(e){var n=new h.a(t.apiSelected),r="";return e.endsWith("/")&&(r="/"),e=e.trimStr("/"),n.directory(t.directory),n.segment(e),2==n.segment().length?(r&&!n.href().endsWith("/")?(n.segment(r),r=""):!n.suffix()&&n.filename()&&n.suffix(t.suffix),n.href()):(n.pathname(e),r&&!n.href().endsWith("/")?(n.segment(r),r=""):!n.suffix()&&n.filename()&&n.suffix(t.suffix),n.href())}}},actions:{axiosWithCancel:function(){var t=c()(regeneratorRuntime.mark(function t(e,n){var r,o,i,a,s,u,c;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.state,o=n.method,i=n.path,a=n.postForm,s=n.options,u=p.CancelToken,c=u.source(),s={cancelToken:c.token},t.abrupt("return",new Promise(function(t,e){var n=1,u=r.pendingLoad;p[o](i,a,s).then(function(e){n=null,t(e)}).catch(function(t){n=null,p.isCancel(t)?e("Request canceled "+t.message):e(t)});var l=function t(){setTimeout(function(){r.pendingLoad!==u?(c.cancel("Operation canceled by the user."),n=null):n&&t()},66)};l()}));case 6:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),initApiSelected:function(){var t=c()(regeneratorRuntime.mark(function t(e){var n,r,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,r=e.state,t.next=3,i.a.getItem("user-apiselected");case 3:o=t.sent,n("setApiSelected",o||r.Api[0]);case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),syncApi:function(){var t=c()(regeneratorRuntime.mark(function t(e,n){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:r=e.commit,r("setApiSelected",n),i.a.setItem("user-apiselected",n);case 3:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),showErrMessage:function(t,e){var n=t.commit;e&&(n("setBlockLoading",!0),n("setErrMessage",e),setTimeout(function(){n("setBlockLoading",!1),n("setErrMessage","")},1300),n("setMessageForUser",e))},addJsonStore:function(){var t=c()(regeneratorRuntime.mark(function t(e,n){var r,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.dispatch,t.prev=1,m["Indicator"].open("正在加入书单"),t.next=5,p.post("/api/addJsonStore",{url:n});case 5:return o=t.sent,t.abrupt("return",o);case 9:throw t.prev=9,t.t0=t["catch"](1),r("showErrMessage","无法被加入书单\n"+t.t0),new Error(t.t0);case 13:return t.prev=13,m["Indicator"].close(),t.finish(13);case 16:case"end":return t.stop()}},t,this,[[1,9,13,16]])}));return function(e,n){return t.apply(this,arguments)}}(),delJsonStore:function(){var t=c()(regeneratorRuntime.mark(function t(e,n){var r,o,i,a,s,u,c,l,d,f,h;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.dispatch,t.prev=1,m["Indicator"].open("正在删除"),o=n.pwd,i=n.delBookList,!i.length){t.next=36;break}s=!0,u=!1,c=void 0,t.prev=9,l=i[Symbol.iterator]();case 11:if(s=(d=l.next()).done){t.next=21;break}return f=d.value,h=encodeURI(f),m["Indicator"].open("正在删除-".concat(f)),t.next=17,p.post("/api/deleteJsonStore",{name:h,pwd:o});case 17:a=t.sent;case 18:s=!0,t.next=11;break;case 21:t.next=27;break;case 23:t.prev=23,t.t0=t["catch"](9),u=!0,c=t.t0;case 27:t.prev=27,t.prev=28,s||null==l.return||l.return();case 30:if(t.prev=30,!u){t.next=33;break}throw c;case 33:return t.finish(30);case 34:return t.finish(27);case 35:case 36:return m["Indicator"].open("删除-完成✅"),t.abrupt("return",a);case 40:t.prev=40,t.t1=t["catch"](1),r("showErrMessage","无法删除书单\n"+t.t1.message);case 43:return t.prev=43,setTimeout(function(){m["Indicator"].close()},300),t.finish(43);case 46:case"end":return t.stop()}},t,this,[[1,40,43,46],[9,23,27,35],[28,,30,34]])}));return function(e,n){return t.apply(this,arguments)}}(),getAllBooks:function(){var t=c()(regeneratorRuntime.mark(function t(e){var n,r,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,r=e.dispatch,n("setHomeLoading",!0),n("clearBooks"),t.prev=3,t.next=6,p.get("/api/getAllBooks").then(function(t){n("addBooks",t.data.result)});case 6:o=t.sent,t.next=13;break;case 9:throw t.prev=9,t.t0=t["catch"](3),r("showErrMessage",t.t0.message),new Error(t.t0);case 13:return t.prev=13,n("setHomeLoading",!1),t.finish(13);case 16:return t.abrupt("return",o);case 17:case"end":return t.stop()}},t,this,[[3,9,13,16]])}));return function(e){return t.apply(this,arguments)}}(),keepHTML:function(){var t=c()(regeneratorRuntime.mark(function t(e,n){var r,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,o=e.state,t.next=3,i.a.setItem("".concat(o.fullURL),n);case 3:r("setHtml",n);case 4:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),copyHTML:function(){var t=c()(regeneratorRuntime.mark(function t(e){var n,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.state,t.next=3,i.a.getItem("".concat(n.fullURL));case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),getBookIndex:function(){var t=c()(regeneratorRuntime.mark(function t(e,n){var r,o,a,s,u,c,l,d,p,f,m,v,g,b;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.commit,o=e.state,a=e.dispatch,r("setIndexLoading",!0),n.startsWith("/")&&(s=n.substring(1),u=new h.a(s),u.origin()&&(n=s)),c=new h.a(n),c.origin()&&a("syncApi",c.origin()),o.apiSelected){t.next=8;break}return t.next=8,a("initApiSelected");case 8:if(l=c.origin()?c:c.origin(o.apiSelected),r("setFullURL",l.href()),p=l.segment().length,f=l.suffix(),m=l.filename(),v=!(!f||m.includes("index_")),c=l.href(),g=!0,t.prev=16,t.t0=v||p>3,!t.t0){t.next=22;break}return t.next=21,i.a.getItem("".concat(c));case 21:t.t0=t.sent;case 22:if(!t.t0){t.next=28;break}return t.next=25,a("copyHTML");case 25:d=t.sent,t.next=32;break;case 28:return r("setHtml",""),t.next=31,a("axiosWithCancel",{method:"post",path:"/api/getNoAbsBooks",postForm:{url:c}});case 31:d=t.sent;case 32:return d&&!d.data&&(b={},b.data=d,b.status=200,d=b),t.next=35,a("keepHTML",d.data);case 35:return t.abrupt("return",d);case 38:throw t.prev=38,t.t1=t["catch"](16),r("setHtml",""),g=!!t.t1.message,g&&a("showErrMessage",t.t1.message),new Error(t.t1);case 44:return t.prev=44,g&&r("setIndexLoading",!1),t.finish(44);case 47:case"end":return t.stop()}},t,this,[[16,38,44,47]])}));return function(e,n){return t.apply(this,arguments)}}()}}),g=n("Biqn"),b=n.n(g),_={name:"App",data:function(){return{popupVisible:!1}},created:function(){},mounted:function(){},methods:{Init:function(){}},computed:b()({},Object(l["e"])({isBlockLoading:function(t){return t.isBlockLoading},errMessage:function(t){return t.errMessage}})),watch:{isBlockLoading:function(t){this.popupVisible=t}}},k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"app"}},[n("mt-popup",{staticStyle:{background:"#efbcbc",color:"black",width:"100%"},attrs:{position:"top","popup-transition":"popup-fade"},model:{value:t.popupVisible,callback:function(e){t.popupVisible=e},expression:"popupVisible"}},[t._v("\n      "+t._s(t.errMessage)+"\n    ")]),n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" |\n      "),n("router-link",{attrs:{to:"/about"}},[t._v("About me")])],1),n("router-view")],1),t._m(0)])},x=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("a",{attrs:{href:"https://github.com/chinanf-boy"}},[n("p",{staticClass:"bottom"},[n("span",{staticStyle:{color:"orange"}},[t._v("  @chinanf-boy ")]),t._v("  2018.6.9\n    ")])])])}],w=n("XyMi");function L(t){n("+VGo")}var y=!1,S=L,I=null,B=null,R=Object(w["a"])(_,k,x,y,S,I,B),A=R.exports,T=n("/ocq"),M=n("p3jY"),E=n.n(M),C={name:"HelloWorld",props:{msg:String}},j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._m(0),n("h3",[t._v("Installed CLI Plugins")]),t._m(1),n("h3",[t._v("Essential Links")]),t._m(2),n("h3",[t._v("Ecosystem")]),t._m(3)])},H=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n    For guide and recipes on how to configure / customize this project,"),n("br"),t._v("\n    check out the\n    "),n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/docs",target:"_blank"}},[t._v("vue-cli documentation")]),t._v(".\n  ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank"}},[t._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank"}},[t._v("eslint")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-cypress",target:"_blank"}},[t._v("e2e-cypress")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org/en/essentials/getting-started.html",target:"_blank"}},[t._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org/en/intro.html",target:"_blank"}},[t._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank"}},[t._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org/en",target:"_blank"}},[t._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}];function U(t){n("b3AN")}var F=!1,O=U,$="data-v-487ff563",N=null,P=Object(w["a"])(C,j,H,F,O,$,N),z=P.exports,W={name:"home",data:function(){return{Input:"2222/",apiSelected:"",pathName:"",pwd:"",del:!1,delBookList:[],delOK:!1}},metaInfo:function(){return{title:this.title}},created:function(){this.$store.commit("setPendingLoad",this.$route.path),this.apiSelected=this.$store.state.apiSelected||this.API[0]},computed:b()({fullURL:{get:function(){var t=new h.a(this.apiSelected);return""!=this.pathName&&t.pathname(this.pathName),t.href()},set:function(t){var e=new h.a(t);this.apiSelected=e.origin(),"/"==e.pathname()?this.pathName="":this.pathName=e.pathname()}}},Object(l["e"])({books:function(t){return t.books},isLoading:function(t){return t.isHomeLoading},API:function(t){return t.Api},messageForUser:function(t){return t.messageForUser},title:function(t){return t.title}})),mounted:function(){this.getBooks(),this.changeInput(this.Input),this.$refs.In.focus()},methods:b()({},Object(l["b"])(["showErrMessage","syncApi","getAllBooks","delJsonStore"]),Object(l["c"])(["getBookNameList"]),{hideDelBook:function(t){if(this.delOK){var e=this.delBookList.some(function(e){return encodeURI(e)==t});return!e}return!0},setA:function(){},getBooks:function(){this.getAllBooks().catch(function(){})},textInput:function(){var t=this;if(this.Input){var e=this.fullURL;this.$store.commit("setFullURL",this.fullURL),this.addJsonStore(e).then(function(){var n=new h.a(e);n.suffix()&&t.$store.commit("changeSuffix",n.suffix()),t.$router.push({path:"".concat(n.href())})})}else this.showErrMessage("请输入正确 书籍")},getFull:function(t){var e=this.$store.getters.getFullUrl(t);return e},addJsonStore:function(t){return this.$store.dispatch("addJsonStore",t)},changeS:function(){var t=new h.a(this.API);t.origin()?this.$store.commit("changeApi",t.origin()):this.showErrMessage("确定 源是 url")},changeInput:function(t){var e=this.getFull(t);t||(e=this.apiSelected);var n=new h.a(e);this.pathName=n.pathname()},delBooks:function(){var t=this,e=this.pwd,n=this.delBookList;this.delJsonStore({pwd:e,delBookList:n}).then(function(e){e&&(t.delOK=!0,t.del=!1)})}}),watch:{apiSelected:function(t){this.$store.commit("setApiSelected",t)},Input:function(t){this.changeInput(t)}},components:{HelloWorld:z}},D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[t._v("\n    完整网址:\n    "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fullURL,expression:"fullURL"}],attrs:{type:"text",placeholder:"www"},domProps:{value:t.fullURL},on:{input:function(e){e.target.composing||(t.fullURL=e.target.value)}}}),n("br"),n("br"),n("select",{directives:[{name:"model",rawName:"v-model",value:t.apiSelected,expression:"apiSelected"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.apiSelected=e.target.multiple?n:n[0]}}},[n("option",{attrs:{disabled:"",selected:""}},[t._v(t._s(t.apiSelected))]),t._l(t.API,function(e){return n("option",{key:e},[t._v(t._s(e))])})],2),t.apiSelected?n("span",[n("a",{attrs:{href:t.apiSelected,target:"_blank"}},[n("button",[t._v("👈进入看看")])])]):t._e(),n("br"),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.Input,expression:"Input"}],ref:"In",attrs:{type:"text",placeholder:"输入书网址编号"},domProps:{value:t.Input},on:{keyup:function(e){return"button"in e||13===e.keyCode?t.textInput(e):null},input:function(e){e.target.composing||(t.Input=e.target.value)}}}),n("br"),n("button",{attrs:{type:"submit"},on:{click:t.textInput}},[t._v("👉 书籍ID确定")]),n("br"),n("br"),t.books.length?n("div",{staticClass:"books_span"},[t._v("\n      Books\n    ")]):t._e(),t.del?t._e():n("ul",t._l(t.books,function(e){return t.hideDelBook(e.name)?n("li",{key:e.name,staticClass:"book-list"},[n("router-link",{staticClass:"book_link",attrs:{to:{path:e.url},tag:"span"}},[n("button",{staticClass:"home_book",attrs:{type:"submit"},on:{click:function(n){t.setA(e.origin)}}},[n("a",{staticClass:"book_click"},[t._v(" \n            "+t._s(decodeURI(e.name))+"  \n              "+t._s(e.origin)+" \n            ")])])]),n("br")],1):t._e()})),t.del?n("mt-checklist",{attrs:{title:"删除列表",align:"right",options:t.getBookNameList()},model:{value:t.delBookList,callback:function(e){t.delBookList=e},expression:"delBookList"}}):t._e(),t.isLoading?n("div",{staticClass:"loading"},[n("mt-spinner",{attrs:{type:"triple-bounce",size:60,color:"#26a2ff"}})],1):t.messageForUser&&0==t.books.length?n("div",{staticStyle:{border:"1px red solid"}},[t._v("\n      Error: "+t._s(t.messageForUser)+" \n    ")]):0==t.books.length?n("div",[t._v("no book , please start your own books trip")]):n("mt-switch",{staticStyle:{color:"red"},model:{value:t.del,callback:function(e){t.del=e},expression:"del"}},[t._v("删除")]),t.del?n("div",[n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.pwd,expression:"pwd"}],staticClass:"pwd",attrs:{type:"text",placeholder:"必须要密码"},domProps:{value:t.pwd},on:{keyup:function(e){return"button"in e||13===e.keyCode?t.delBooks(e):null},input:function(e){e.target.composing||(t.pwd=e.target.value)}}}),n("button",{on:{click:t.delBooks}},[t._v("\n        删除Go\n      ")])]):t._e()],1)},V=[];function J(t){n("RNFh")}var X=!1,q=J,G=null,K=null,Y=Object(w["a"])(W,D,V,X,q,G,K),Q=Y.exports,Z={name:"About",data:function(){return{go:">>"}},metaInfo:function(){return{title:" 关于 chinanf-boy @ yobrave"}}},tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("a",{attrs:{href:"https://github.com/chinanf-boy"}},[t._v(" "+t._s(t.go)+" Follow me 😊 "),n("br"),t._v(" "+t._s(t.go)+" Star project ❤️  ")]),n("div",[t._v("\n         yobrave 2018 5.13\n        ")])])},et=[];function nt(t){n("W9eH")}var rt=!1,ot=nt,it="data-v-2c6f1a8e",at=null,st=Object(w["a"])(Z,tt,et,rt,ot,it,at),ut=st.exports,ct=(n("beEN"),n("y1vT")),lt=n.n(ct),dt={name:"IndexAutoRead",data:function(){return{auto:!1,time:10}},mounted:function(){this.getAutoTime()},methods:b()({},Object(l["d"])(["setAutoRead","setAutoTimer"]),{setAutoTime:function(t){this.setAutoTimer(t),i.a.setItem("user-autoTime",t)},getAutoTime:function(){var t=c()(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.a.getItem("user-autoTime");case 2:if(t.t0=t.sent,t.t0){t.next=5;break}t.t0=this.time;case 5:this.time=t.t0;case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),startAuto:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t&&document.getElementById("up-top").click();var e={container:"body",easing:"linear",offset:-60,cancelable:!0,onDone:this.autoDone,x:!1,y:!0};this.autoCancel=this.$scrollTo("#bottom",this.speedMs,e)},autoDone:function(t){setTimeout(function(){document.getElementById("pb_next")&&document.getElementById("pb_next").click()},2e3)}}),computed:b()({},Object(l["e"])({HTML:function(t){return t.HTML},autoTime:function(t){return t.autoTime}}),{speedMs:function(){return 1e3*+this.autoTime}}),watch:{auto:function(t){this.setAutoRead(t)},time:function(t){this.setAutoTime(t)}}},pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.HTML?n("div",[n("mt-switch",{model:{value:t.auto,callback:function(e){t.auto=e},expression:"auto"}},[t._v("自动阅读")]),t.auto?n("div",[n("button",{staticClass:"read_go",on:{click:function(e){t.startAuto(!1)}}},[t._v("GO")]),t._v("\n\n          阅读时间 "+t._s(t.time)+"\n          "),n("br"),n("mt-range",{attrs:{min:10,max:60,step:5,"bar-height":5},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}},[n("div",{attrs:{slot:"start"},slot:"start"},[t._v("最快 ")]),n("div",{attrs:{slot:"end"},slot:"end"},[t._v(" 最慢")])]),n("br")],1):t._e()],1):t._e()])},ft=[];function ht(t){n("Xd1X")}var mt=!1,vt=ht,gt="data-v-9661398c",bt=null,_t=Object(w["a"])(dt,pt,ft,mt,vt,gt,bt),kt=_t.exports,xt=(n("VjuZ"),{name:"IndexFontSize",data:function(){return{fontSize:null}},mounted:function(){this.getFontSize()},computed:b()({},Object(l["e"])({HTML:function(t){return t.HTML}})),methods:{setFont:function(t){document.querySelector("body").style.fontSize=t+"px",i.a.setItem("user-fontsize",t)},getFontSize:function(){var t=c()(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.a.getItem("user-fontsize");case 2:if(t.t0=t.sent,t.t0){t.next=5;break}t.t0=+window.getComputedStyle(document.body)["font-size"].replace("px","");case 5:this.fontSize=t.t0;case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},watch:{fontSize:function(t){this.setFont(t)}}}),wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.HTML?n("div",[t.fontSize?n("div",[t._v("\n    字体大小 "+t._s(t.fontSize)+"\n    "),n("br"),n("mt-range",{attrs:{min:13,max:25,step:1,"bar-height":5},model:{value:t.fontSize,callback:function(e){t.fontSize=e},expression:"fontSize"}},[n("div",{attrs:{slot:"start"},slot:"start"},[t._v("最小")]),n("div",{attrs:{slot:"end"},slot:"end"},[t._v("最大")])])],1):t._e()]):t._e()])},Lt=[];function yt(t){n("n/tg")}var St=!1,It=yt,Bt="data-v-22837a6a",Rt=null,At=Object(w["a"])(xt,wt,Lt,St,It,Bt,Rt),Tt=At.exports,Mt={name:"BookIndex",components:{autoReader:kt,fontSize:Tt},data:function(){return{path:"",reLoad:!0}},metaInfo:function(){return{title:this.title}},computed:b()({},Object(l["e"])({errMessage:function(t){return t.errMessage},fullurl:function(t){return t.fullURL},apiSelected:function(t){return t.apiSelected},HTML:function(t){return t.HTML},isLoading:function(t){return t.isIndexLoading},messageForUser:function(t){return t.messageForUser},title:function(t){return t.title},autoRead:function(t){return t.autoRead}}),{urlPath:function(){return this.path.includes(this.apiSelected)?this.path.slice(this.apiSelected.length+1):this.path}}),mounted:function(){this.getPath()},created:function(){var t=this;this.$store.commit("setAutoRead",!1),this.$store.commit("setHtml",""),this.$router.afterEach(function(e,n){t.setIndexLoading(!0),t.setBlockLoading(!1),t.getPath()})},methods:b()({},Object(l["d"])(["setBlockLoading","setPendingLoad","setIndexLoading","setTitle"]),Object(l["b"])(["showErrMessage","getBookIndex"]),{getPath:function(){this.path=this.$route.path},addLoad:function(t){this.setPendingLoad(t),this.getBookPage()},getBookPage:lt()(function(){var t=this;this.getBookIndex(this.path).then(function(e){var n=0;function r(t){if(document.querySelector(".book h1")&&!t){var e=document.querySelector(".book h1"),o=document.getElementById("nr_title");e&&o?this.setTitle(e.textContent+" > "+o.textContent):e&&this.setTitle(e.textContent),this.autoRead&&document.querySelector(".read_go").click(),t=!0}if(document.getElementsByClassName("chapter").length>0){var i=document.getElementsByClassName("chapter"),a=Array.from(i);a.forEach(function(t){t.style.display=""})}else n<3&&(n++,setTimeout(function(){r(t)},1))}r=r.bind(t),r(!1)}).catch(function(t){})},100,{trailing:!0}),reFlash:function(){this.reLoad=!1,setTimeout(function(){location.reload()},30)}}),beforeDestroy:function(){this.setTitle("无广告的书-yobrave")},watch:{path:function(t){this.addLoad(t)}}},Et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",attrs:{id:"container"}},[n("font-size"),n("auto-reader"),n("div",{staticClass:"book",attrs:{id:"book-top"}},[n("div",{ref:"getHtml",staticClass:"cover_BOOK"},[n("div",{domProps:{innerHTML:t._s(t.HTML)}}),t.HTML?n("div",{staticClass:"up-top",attrs:{id:"bottom"}},[n("a",{staticStyle:{color:"#038ef7",display:"block"},attrs:{href:"#container",id:"up-top"}},[t._v("Up top")])]):t._e()])]),t.isLoading?n("div",[t._v("\n    请求 \n    "),n("br"),t._v("  \n    source: "+t._s(t.apiSelected)+"\n    "),n("br"),t._v("\n    "+t._s(t.urlPath)+"\n      "),n("mt-spinner",{attrs:{type:"triple-bounce",size:60,color:"#26a2ff"}})],1):t.errMessage?n("div",{staticClass:"loading"},[t._v("\n    "+t._s(t.errMessage)+"\n  ")]):""==t.HTML&&t.messageForUser?n("div",[t._v(" \n    请求 失败\n    "),n("br"),n("div",{staticStyle:{border:"1px orange solid"}},[t._v("\n    "+t._s(t.apiSelected)+"\n    "),n("br"),t._v("\n    "+t._s(t.path)+"\n    "),n("br"),t._v("\n    "+t._s(t.messageForUser)+"\n  ")]),n("br"),t._v("\n    如果你认为这个错误是个bug \n    "),n("br"),n("a",{staticStyle:{color:"red"},attrs:{href:"http://github.com/chinanf-boy/vue-getNoAbsBooks"}},[t._v("\n    👉 提交bug")]),n("br"),t.reLoad?n("button",{on:{click:t.reFlash}},[t._v("刷新")]):n("mt-spinner",{attrs:{type:"triple-bounce",size:60,color:"#26a2ff"}})],1):t._e()],1)},Ct=[];function jt(t){n("1isn")}var Ht=!1,Ut=jt,Ft="data-v-6ce064e4",Ot=null,$t=Object(w["a"])(Mt,Et,Ct,Ht,Ut,Ft,Ot),Nt=$t.exports;r["default"].use(T["a"]),r["default"].use(E.a);var Pt=new T["a"]({routes:[{path:"/",name:"home",component:Q},{path:"/about",name:"about",component:ut},{path:"*",name:"BookIndex",component:Nt}]});n("d8/S");r["default"].use(s.a),i.a.config({name:"getNoAbsBooks"}),r["default"].component(m["Checklist"].name,m["Checklist"]),r["default"].component(m["Range"].name,m["Range"]),r["default"].component(m["Popup"].name,m["Popup"]),r["default"].component(m["Spinner"].name,m["Spinner"]),r["default"].component(m["Switch"].name,m["Switch"]),r["default"].config.productionTip=!1,new r["default"]({axios:p,router:Pt,store:v,render:function(t){return t(A)}}).$mount("#app")},RNFh:function(t,e){},W9eH:function(t,e){},Xd1X:function(t,e){},b3AN:function(t,e){},"d8/S":function(t,e){},"n/tg":function(t,e){},rQBB:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Y1S0"),o=(n.n(r),n("CvWX"));n.n(o);String.prototype.trimStr=function(t){var e=this;return e.startsWith(t)&&(e=e.slice(1)),e.endsWith(t)&&(e=e.slice(0,-1)),e}}},[0]);
//# sourceMappingURL=app.c9076285.js.map