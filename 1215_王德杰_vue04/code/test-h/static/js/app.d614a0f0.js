(function(e){function o(o){for(var n,c,u=o[0],s=o[1],a=o[2],f=0,p=[];f<u.length;f++)c=u[f],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);i&&i(o);while(p.length)p.shift()();return l.push.apply(l,a||[]),t()}function t(){for(var e,o=0;o<l.length;o++){for(var t=l[o],n=!0,u=1;u<t.length;u++){var s=t[u];0!==r[s]&&(n=!1)}n&&(l.splice(o--,1),e=c(c.s=t[0]))}return e}var n={},r={app:0},l=[];function c(o){if(n[o])return n[o].exports;var t=n[o]={i:o,l:!1,exports:{}};return e[o].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=n,c.d=function(e,o,t){c.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,o){if(1&o&&(e=c(e)),8&o)return e;if(4&o&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)c.d(t,n,function(o){return e[o]}.bind(null,n));return t},c.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(o,"a",o),o},c.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},c.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=o,u=u.slice();for(var a=0;a<u.length;a++)o(u[a]);var i=s;l.push([0,"chunk-vendors"]),t()})({0:function(e,o,t){e.exports=t("56d7")},"034f":function(e,o,t){"use strict";t("85ec")},"56d7":function(e,o,t){"use strict";t.r(o);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),r=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{attrs:{id:"app"}},[t("router-view"),t("router-view",{attrs:{name:"foo"}}),t("router-view",{attrs:{name:"posts"}})],1)},l=[],c={name:"App",components:{}},u=c,s=(t("034f"),t("2877")),a=Object(s["a"])(u,r,l,!1,null,null,null),i=a.exports,f=t("8c4f"),p=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[e._v(" home "),t("div",[t("router-link",{attrs:{to:"/user"}},[e._v("to user")])],1),t("div",[t("router-link",{attrs:{to:{name:"class",params:{id:2}}}},[e._v("to class")])],1),t("div",[t("button",{on:{click:e.toUser}},[e._v("to user")])])])},d=[],h={methods:{toUser:function(){this.$router.push({name:"user"})}},beforeRouteEnter:function(e,o,t){console.log("beforeRouteEnter"),console.log(e,o,t),t()},beforeRouteLeave:function(e,o,t){console.log("beforeRouteLeave"),console.log(e,o,t),t()}},v=h,m=Object(s["a"])(v,p,d,!1,null,null,null),b=m.exports,g=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[e._v("Class id:"+e._s(e.id))])},_=[],y={props:["id"],mounted:function(){console.log(this.$route)}},w=y,O=Object(s["a"])(w,g,_,!1,null,null,null),j=O.exports,$=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[e._v(" User name "),t("button",{on:{click:e.back}},[e._v(" back ")]),t("router-view")],1)},x=[],E={created:function(){console.log("请求数据")},watch:{$route:function(){console.log(this.$route),console.log("重新去请求数据")}},beforeRouteUpdate:function(){console.log("重新去请求数据 - beforeRouteUpdate")},methods:{back:function(){console.log("???"),this.$router.back()}},mounted:function(){console.log(this.$route)}},k=E,P=Object(s["a"])(k,$,x,!1,null,null,null),R=P.exports,S=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[e._v(" Foo ")])},U=[],A={},M=A,T=Object(s["a"])(M,S,U,!1,null,null,null),J=T.exports,L=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[e._v(" Posts ")])},C=[],F={},N=F,q=Object(s["a"])(N,L,C,!1,null,null,null),z=q.exports;console.log(f["a"]),n["a"].use(f["a"]);var B=new f["a"]({mode:"history",routes:[{path:"/home",redirect:"/"},{name:"home",path:"/",alias:"/heihei",component:b,beforeEnter:function(e,o,t){console.log("before-enter"),console.log(e),console.log(o),console.log(t),t()},meta:{isAuth:!1}},{name:"class",path:"/className/:id",component:j,props:function(e){return console.log(e),{id:e.params.id+"------------"}}},{name:"user",path:"/user",component:R,children:[{path:"posts",component:z},{path:"foo",component:J}],meta:{isAuth:!0}}]});B.beforeEach((function(e,o,t){console.log("before-each"),console.log(e),console.log(o),console.log(t),e.meta.isAuth?t({name:"class"}):t()})),B.afterEach((function(e,o){console.log("afterEach"),console.log(e,o)}));var D=B;n["a"].config.productionTip=!1,new n["a"]({router:D,render:function(e){return e(i)}}).$mount("#app")},"85ec":function(e,o,t){}});
//# sourceMappingURL=app.d614a0f0.js.map