(function(t){function e(e){for(var n,o,i=e[0],c=e[1],l=e[2],d=0,p=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==s[c]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},r=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"secondary"},[a("router-view",{attrs:{name:"nav"}}),a("v-content",{staticClass:"secondary"},[a("router-view")],1)],1)},r=[],o=a("59ca");a("ea7b");var i={apiKey:"AIzaSyCpEsB2MtL6dD7ARQa7NXwVoOP_JizL0Fk",authDomain:"centrum-dev.firebaseapp.com",databaseURL:"https://centrum-dev.firebaseio.com",projectId:"centrum-dev",storageBucket:"centrum-dev.appspot.com",messagingSenderId:"913392213085",appId:"1:913392213085:web:1af477d11d6b195fdc01b4",measurementId:"G-ZVJVS41EZF"};o.initializeApp(i);var c=o.auth(),l=c,u={name:"App",computed:{loggedin:function(){return!!l.currentUser}},methods:{signout:function(){var t=this;l.signOut().then((function(){t.$router.push("/login")}))}}},d=u,p=a("2877"),v=a("6544"),m=a.n(v),f=a("7496"),h=a("a75b"),g=Object(p["a"])(d,s,r,!1,null,null,null),y=g.exports;m()(g,{VApp:f["a"],VContent:h["a"]});var w=a("8c4f"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"main-container"}},[n("div",{staticClass:"center"},[n("img",{attrs:{id:"logo",src:a("7d9a"),alt:"Centrum"}}),n("div",{attrs:{id:"box-container"}},[n("h3",{staticStyle:{margin:"0"}},[t._v("Welcome")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"login-field",attrs:{autofocus:"",type:"email",placeholder:"email",spellcheck:"false"},domProps:{value:t.email},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.signin(e)},input:function(e){e.target.composing||(t.email=e.target.value)}}}),"checkbox"===t.passwordFieldType?n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"login-field",attrs:{placeholder:"password",spellcheck:"false",type:"checkbox"},domProps:{checked:Array.isArray(t.password)?t._i(t.password,null)>-1:t.password},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.signin(e)},change:function(e){var a=t.password,n=e.target,s=!!n.checked;if(Array.isArray(a)){var r=null,o=t._i(a,r);n.checked?o<0&&(t.password=a.concat([r])):o>-1&&(t.password=a.slice(0,o).concat(a.slice(o+1)))}else t.password=s}}}):"radio"===t.passwordFieldType?n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"login-field",attrs:{placeholder:"password",spellcheck:"false",type:"radio"},domProps:{checked:t._q(t.password,null)},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.signin(e)},change:function(e){t.password=null}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"login-field",attrs:{placeholder:"password",spellcheck:"false",type:t.passwordFieldType},domProps:{value:t.password},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.signin(e)},input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("div",{staticClass:"radio-section"},[n("p",[t._v("Show password")]),n("label",{staticClass:"switch radio"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.showPassword,expression:"showPassword"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.showPassword)?t._i(t.showPassword,null)>-1:t.showPassword},on:{change:function(e){var a=t.showPassword,n=e.target,s=!!n.checked;if(Array.isArray(a)){var r=null,o=t._i(a,r);n.checked?o<0&&(t.showPassword=a.concat([r])):o>-1&&(t.showPassword=a.slice(0,o).concat(a.slice(o+1)))}else t.showPassword=s}}}),n("span",{staticClass:"slider round"})])]),n("button",{staticClass:"button big-button",on:{click:t.signin}},[t._v("Log In")]),n("p",{staticClass:"text-link"},[t._v("Forgot password")]),n("p",{staticClass:"text-link"},[t._v("Forgot username")])])])])},_=[],C={name:"Login",data:function(){return{email:"",password:"",showPassword:!1}},computed:{passwordFieldType:function(){return this.showPassword?"text":"password"}},methods:{signin:function(){var t=this;l.signInWithEmailAndPassword(this.email,this.password).then((function(e){t.$router.push("/home")})).catch((function(t){console.log(t)}))}}},x=C,k=(a("5700"),Object(p["a"])(x,b,_,!1,null,"c551e998",null)),V=k.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{md:"4"}},[n("v-img",{attrs:{alt:"Centrum Logo",src:a("6ab8"),transition:"scale-transition"}})],1)],1),n("v-row",{attrs:{justify:"center"}},[n("v-col",{staticClass:"primary--text text-center",attrs:{md:"auto"}},[n("h1",{staticClass:"font-weight-light display-2"},[t._v("W E L C O M E")]),n("h3",[t._v("Doctor Dentist")])])],1),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{md:"auto"}},[n("v-btn",{staticClass:"primary"},[t._v("SUBSCRIBE")])],1)],1),n("v-row",{attrs:{justify:"space-around",wrap:""}},[n("v-col",{attrs:{md:"auto"}},[n("v-card",{attrs:{width:"12rem",height:"12rem",raised:""}},[n("v-container",{attrs:{"pa-0":"","fill-height":"auto"}},[n("v-col",{staticClass:"primary py-auto",attrs:{md:"3","align-self":"stretch"}},[n("v-icon",{staticStyle:{height:"100%"},attrs:{color:"secondary"}},[t._v("fa-newspaper")])],1),n("v-col",{staticClass:"text-center primary--text"},[n("h3",{staticClass:"display-1"},[t._v("News")])])],1)],1)],1),n("v-col",{attrs:{md:"auto"}},[n("v-card",{attrs:{width:"12rem",height:"12rem",raised:""}},[n("v-container",{attrs:{"pa-0":"","fill-height":"auto"}},[n("v-col",{staticClass:"primary py-auto",attrs:{md:"3","align-self":"stretch"}},[n("v-icon",{staticStyle:{height:"100%"},attrs:{color:"secondary"}},[t._v("fa-calendar-alt")])],1),n("v-col",{staticClass:"text-center primary--text"},[n("h3",{staticClass:"display-1"},[t._v("Events")])])],1)],1)],1)],1)],1)},P=[],A={name:"Home",components:{}},I=A,E=a("8336"),j=a("b0af"),S=a("62ad"),T=a("a523"),L=a("132d"),$=a("adda"),N=a("0fd9"),B=Object(p["a"])(I,O,P,!1,null,"175cb054",null),F=B.exports;m()(B,{VBtn:E["a"],VCard:j["a"],VCol:S["a"],VContainer:T["a"],VIcon:L["a"],VImg:$["a"],VRow:N["a"]});var H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",[t._v("Services")])},M=[],q={},D=q,U=Object(p["a"])(D,H,M,!1,null,null,null),R=U.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",[t._v("Supplies")])},z=[],J={},Q=J,Z=Object(p["a"])(Q,W,z,!1,null,null,null),G=Z.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",[t._v("Quick Order")])},X=[],Y={},tt=Y,et=Object(p["a"])(tt,K,X,!1,null,null,null),at=et.exports,nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-app-bar",{staticClass:"secondary",attrs:{flat:""}},[a("v-toolbar-title",{staticClass:"primary--text text--darken-3 font-weight-bold"},[t._v("Invoices")]),a("v-spacer"),a("v-text-field",{attrs:{"append-outer-icon":"fa-search"}})],1),a("hr"),a("v-app-bar",{staticClass:"secondary",attrs:{flat:""}},[a("v-btn",{staticClass:"mr-1"},[a("v-icon",[t._v("fa-trash")])],1),a("v-btn",{staticClass:"mr-1"},[a("v-icon",[t._v("fa-download")])],1),a("v-btn",{staticClass:"mr-1"},[a("v-icon",[t._v("fa-print")])],1),a("v-btn",{staticClass:"mr-1"},[a("v-icon",[t._v("fa-tag")])],1)],1),a("v-container",t._l(t.invoices,(function(e){return a("span",{key:e.id},[a("v-card",{staticClass:"mb-1 px-3 py-1",attrs:{flat:!e.selected}},[a("v-row",{attrs:{wrap:""}},[a("v-col",{staticClass:"text-center",attrs:{md:"1"}},[a("v-checkbox",{attrs:{dense:"","hide-details":"",color:"primary"},model:{value:e.selected,callback:function(a){t.$set(e,"selected",a)},expression:"item.selected"}})],1),a("v-col",{attrs:{md:"5"}},[a("div",{staticClass:"caption grey--text"},[t._v("Number")]),a("div",[t._v(t._s(e.id))])]),a("v-col",{attrs:{md:"2"}},[a("div",{staticClass:"caption grey--text"},[t._v("Total")]),a("div",[t._v(t._s(e.total))])]),a("v-col",{attrs:{md:"2"}},[a("div",{staticClass:"caption grey--text"},[t._v("Date")]),a("div",[t._v(t._s(e.date))])]),a("v-col",{attrs:{md:"2"}},[a("div",{staticClass:"caption grey--text"},[t._v("Status")]),a("div",{staticClass:"text-center accent--text pa-1 caption",class:t.statusColor(e.status),staticStyle:{"border-radius":"20px"}},[t._v(t._s(e.status))])])],1)],1)],1)})),0)],1)},st=[],rt=[{id:"H10034",total:"$500.00",date:"May 03, 2019",status:"pending",selected:!1},{id:"H10033",total:"$350.36",date:"March 26, 2019",status:"complete",selected:!1},{id:"H10032",total:"$637.23",date:"March 13, 2019",status:"complete",selected:!1}],ot={name:"Invoices",data:function(){return{invoices:rt}},methods:{statusColor:function(t){return"pending"==t?"invoicePending":"complete"==t?"invoiceComplete":""}}},it=ot,ct=a("40dc"),lt=a("ac7c"),ut=a("2fa4"),dt=a("8654"),pt=a("2a7f"),vt=Object(p["a"])(it,nt,st,!1,null,"2c5a930f",null),mt=vt.exports;m()(vt,{VAppBar:ct["a"],VBtn:E["a"],VCard:j["a"],VCheckbox:lt["a"],VCol:S["a"],VContainer:T["a"],VIcon:L["a"],VRow:N["a"],VSpacer:ut["a"],VTextField:dt["a"],VToolbarTitle:pt["a"]});var ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[n("v-navigation-drawer",{staticClass:"nav",attrs:{app:"",light:"",color:"primary","mini-variant":t.mini},on:{"update:miniVariant":function(e){t.mini=e},"update:mini-variant":function(e){t.mini=e}}},[n("div",{staticClass:"d-flex align-center logo-container",on:{click:t.goHome}},[t.mini?n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Centrum Logo",contain:"","min-width":"75",src:a("ab82"),transition:"scale-transition",width:"75"}}):t._e(),t.mini?t._e():n("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Centrum Name Logo",contain:"","min-width":"100",src:a("7d9a"),width:"140"}})],1),n("v-list",{attrs:{dense:"",nav:""}},t._l(t.items,(function(e){return n("v-list-item",{key:e.name,attrs:{to:e.path}},[n("v-list-item-icon",[n("v-icon",{staticClass:"circle-icon",attrs:{color:"primary",size:"15"}},[t._v(t._s(e.meta.icon))])],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"nav-text font-weight-regular"},[t._v(t._s(e.name))])],1)],1)})),1)],1),n("v-content",[n("Toolbar",{on:{toggleNav:function(e){t.mini=!t.mini}}})],1)],1)},ht=[],gt=(a("4de4"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{staticClass:"secondary",attrs:{flat:"",app:""}},[a("v-app-bar-nav-icon",{attrs:{color:"primary"},on:{click:function(e){return t.$emit("toggleNav")}}},[a("v-icon",[t._v("fa-stream")])],1),a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"}},[t._v("ABOUT")]),a("v-btn",{attrs:{text:"",color:"primary"}},[t._v("CONTACT")])],1)}),yt=[],wt={name:"ToolBar"},bt=wt,_t=a("5bc1"),Ct=Object(p["a"])(bt,gt,yt,!1,null,"6f3aeb74",null),xt=Ct.exports;m()(Ct,{VAppBar:ct["a"],VAppBarNavIcon:_t["a"],VBtn:E["a"],VIcon:L["a"],VSpacer:ut["a"]});var kt={name:"Navbar",components:{Toolbar:xt},data:function(){return{routes:Tt,mini:!1}},computed:{items:function(){return this.routes.filter((function(t){return!!t.meta&&t.meta.nav}))}},methods:{goHome:function(){this.$router.push("/home")}}},Vt=kt,Ot=(a("ea89"),a("8860")),Pt=a("da13"),At=a("5d23"),It=a("34c3"),Et=a("f774"),jt=Object(p["a"])(Vt,ft,ht,!1,null,"46866d91",null),St=jt.exports;m()(jt,{VContainer:T["a"],VContent:h["a"],VIcon:L["a"],VImg:$["a"],VList:Ot["a"],VListItem:Pt["a"],VListItemContent:At["a"],VListItemIcon:It["a"],VListItemTitle:At["b"],VNavigationDrawer:Et["a"]});var Tt=[{path:"*",component:V},{path:"/",component:V,nav:!1},{path:"/login",component:V,nav:!1},{name:"Home",path:"/home",components:{default:F,nav:St},meta:{requiresAuth:!0,nav:!1}},{name:"Services",path:"/services",components:{default:R,nav:St},meta:{requiresAuth:!0,nav:!0,icon:"fa-tools"}},{name:"Supplies",path:"/supplies",components:{default:G,nav:St},meta:{requiresAuth:!0,nav:!0,icon:"fa-parachute-box"}},{name:"Quick Order",path:"/quick-order",components:{default:at,nav:St},meta:{requiresAuth:!0,nav:!0,icon:"fa-undo-alt"}},{name:"Invoices",path:"/invoices",components:{default:mt,nav:St},meta:{requiresAuth:!0,nav:!0,icon:"fa-list"}}];n["a"].use(w["a"]);var Lt=new w["a"]({routes:Tt,mode:"history"});Lt.beforeEach((function(t,e,a){var n=l.currentUser,s=t.matched.some((function(t){return t.meta.requiresAuth}));s&&!n?a("login"):!s&&n?a("Home"):a()}));var $t=Lt,Nt=a("f309");n["a"].use(Nt["a"]);var Bt=new Nt["a"]({theme:{themes:{light:{primary:"#1680c7",secondary:"#e4e8eb",accent:"#ffffff",invoicePending:"#a72795",invoiceComplete:"#29a534"}},options:{customProperties:!0}},icons:{iconFont:"fa"}});n["a"].config.productionTip=!1;var Ft="";l.onAuthStateChanged((function(){Ft||new n["a"]({render:function(t){return t(y)},vuetify:Bt,router:$t}).$mount("#app")}))},5700:function(t,e,a){"use strict";var n=a("e59c"),s=a.n(n);s.a},"6ab8":function(t,e,a){t.exports=a.p+"img/C-Logo-BLUE.73420b30.png"},"6dab":function(t,e,a){},"7d9a":function(t,e,a){t.exports=a.p+"img/Centrum-Logo-WHITE.8b7766b9.png"},ab82:function(t,e,a){t.exports=a.p+"img/C-Logo-WHITE.7a3c155b.png"},e59c:function(t,e,a){},ea89:function(t,e,a){"use strict";var n=a("6dab"),s=a.n(n);s.a}});
//# sourceMappingURL=app.99b5c7c2.js.map