(function(e){function t(t){for(var r,o,i=t[0],c=t[1],s=t[2],f=0,l=[];f<i.length;f++)o=i[f],a[o]&&l.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(l.length)l.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-1dca7874":"86436a30","chunk-7405f0ea":"89390705"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-1dca7874":1,"chunk-7405f0ea":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-1dca7874":"2b45c5cd","chunk-7405f0ea":"00463c4a"}[e]+".css",a=c.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===a))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){s=l[i],f=s.getAttribute("data-href");if(f===r||f===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],d.parentNode.removeChild(d),n(u)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=u);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.src=i(e),s=function(t){f.onerror=f.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");u.type=r,u.request=o,n[1](u)}a[e]=void 0}};var l=setTimeout(function(){s({type:"timeout",target:f})},12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/test/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=f;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"078a":function(e,t,n){"use strict";var r=n("7175"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],u=n("2877"),i={},c=Object(u["a"])(i,o,a,!1,null,null,null),s=c.exports,f=n("8c4f"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-wrapper"})},d=[],p={name:"Layout",components:{}},h=p,m=(n("078a"),Object(u["a"])(h,l,d,!1,null,"e5a0a93e",null));m.exports;r["default"].use(f["a"]);var v=new f["a"]({mode:"history",base:"/test/",routes:[{path:"/login",name:"login",component:function(){return n.e("chunk-7405f0ea").then(n.bind(null,"9ed6"))}},{path:"/",redirect:"/login"},{path:"*",name:"Page404",component:function(){return n.e("chunk-1dca7874").then(n.bind(null,"8cdb"))}}]}),g=n("2f62"),b=n("e04f"),y=n.n(b),k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"login";return y.a.set(t,e)},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"login";return y.a.get(e)},_=n("2427"),j=n.n(_),E=j.a.create({baseUrl:"https://www.apiopen.top",timeout:2500});E.interceptors.request.use(function(e){return S.getters.token&&(e.headers["X-token"]=w()),e},function(e){return Promise.reject(e)}),E.interceptors.response.use(function(e){return e},function(e){return Promise.reject(e)});var O=E,P=function(e){return O({url:"/login",method:"get",params:e})};r["default"].use(g["a"]);var S=new g["a"].Store({state:{token:w(),sidebar:!0},getters:{token:function(e){return e.token},sidebar:function(e){return e.sidebar}},mutations:{SET_TOKEN:function(e,t){e.token=t}},actions:{login:function(e,t){var n=e.commit,r={key:"00d91e8e0cca2b76f515926a36db68f5",phone:"admin",passwd:"123456"};return new Promise(function(e,t){P(r).then(function(t){var r=t.data;n("SET_TOKEN",r.key),k(r.key),e()}).catch(function(e){t(e)})})}}}),T=n("5c96"),x=n.n(T);n("0fae"),n("f5df"),n("499a");r["default"].use(x.a),r["default"].config.productionTip=!1,new r["default"]({router:v,store:S,render:function(e){return e(s)}}).$mount("#app")},7175:function(e,t,n){}});
//# sourceMappingURL=app.c7b3f2ee.js.map