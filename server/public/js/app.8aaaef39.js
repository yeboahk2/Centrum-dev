(function(e){function r(r){for(var t,n,i=r[0],c=r[1],l=r[2],p=0,u=[];p<i.length;p++)n=i[p],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&u.push(s[n][0]),s[n]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(e[t]=c[t]);d&&d(r);while(u.length)u.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var e,r=0;r<a.length;r++){for(var o=a[r],t=!0,i=1;i<o.length;i++){var c=o[i];0!==s[c]&&(t=!1)}t&&(a.splice(r--,1),e=n(n.s=o[0]))}return e}var t={},s={app:0},a=[];function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,r,o){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:o})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)n.d(o,t,function(r){return e[r]}.bind(null,t));return o},n.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=r,i=i.slice();for(var l=0;l<i.length;l++)r(i[l]);var d=c;a.push([0,"chunk-vendors"]),o()})({0:function(e,r,o){e.exports=o("56d7")},"034f":function(e,r,o){"use strict";var t=o("85ec"),s=o.n(t);s.a},"13b2":function(e,r,o){"use strict";var t=o("7360"),s=o.n(t);s.a},"56d7":function(e,r,o){"use strict";o.r(r);o("e260"),o("e6cf"),o("cca6"),o("a79d");var t=o("2b0e"),s=function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("div",{attrs:{id:"app"}},[o("Login")],1)},a=[],n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{attrs:{id:"main-container"}},[t("div",{staticClass:"center"},[t("img",{attrs:{id:"logo",src:o("7d9a"),alt:"Centrum"}}),t("div",{attrs:{id:"box-container"}},[t("h3",{staticStyle:{margin:"0"}},[e._v("Welcome")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"login-field",attrs:{type:"email",placeholder:"email"},domProps:{value:e.email},on:{input:function(r){r.target.composing||(e.email=r.target.value)}}}),"checkbox"===e.passwordFieldType?t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"login-field",attrs:{placeholder:"password",type:"checkbox"},domProps:{checked:Array.isArray(e.password)?e._i(e.password,null)>-1:e.password},on:{change:function(r){var o=e.password,t=r.target,s=!!t.checked;if(Array.isArray(o)){var a=null,n=e._i(o,a);t.checked?n<0&&(e.password=o.concat([a])):n>-1&&(e.password=o.slice(0,n).concat(o.slice(n+1)))}else e.password=s}}}):"radio"===e.passwordFieldType?t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"login-field",attrs:{placeholder:"password",type:"radio"},domProps:{checked:e._q(e.password,null)},on:{change:function(r){e.password=null}}}):t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"login-field",attrs:{placeholder:"password",type:e.passwordFieldType},domProps:{value:e.password},on:{input:function(r){r.target.composing||(e.password=r.target.value)}}}),t("div",{staticClass:"radio-section"},[t("p",[e._v("Show password")]),t("label",{staticClass:"switch radio"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.showPassword,expression:"showPassword"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.showPassword)?e._i(e.showPassword,null)>-1:e.showPassword},on:{change:function(r){var o=e.showPassword,t=r.target,s=!!t.checked;if(Array.isArray(o)){var a=null,n=e._i(o,a);t.checked?n<0&&(e.showPassword=o.concat([a])):n>-1&&(e.showPassword=o.slice(0,n).concat(o.slice(n+1)))}else e.showPassword=s}}}),t("span",{staticClass:"slider round"})])]),t("button",{staticClass:"big-button"},[e._v("Log In")])])])])},i=[],c={name:"Login",data:function(){return{email:"",password:"",showPassword:!1}},computed:{passwordFieldType:function(){return this.showPassword?"text":"password"}}},l=c,d=(o("13b2"),o("2877")),p=Object(d["a"])(l,n,i,!1,null,"0146bac0",null),u=p.exports,w={name:"app",components:{Login:u}},f=w,m=(o("034f"),Object(d["a"])(f,s,a,!1,null,null,null)),v=m.exports;t["a"].config.productionTip=!1,new t["a"]({render:function(e){return e(v)}}).$mount("#app")},7360:function(e,r,o){},"7d9a":function(e,r,o){e.exports=o.p+"img/Centrum-Logo-WHITE.8b7766b9.png"},"85ec":function(e,r,o){}});
//# sourceMappingURL=app.8aaaef39.js.map