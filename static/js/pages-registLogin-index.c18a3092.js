(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-registLogin-index"],{"1d82":function(t,e,i){"use strict";i.r(e);var n=i("934a"),a=i("ab16");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("c5a9");var r=i("2877"),c=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"2c385c14",null);e["default"]=c.exports},3898:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{}},methods:{appOAuthLogin:function(t){var e=t.currentTarget.dataset.logintype;uni.login({provider:e,success:function(t){console.log(t),uni.getUserInfo({provider:e,success:function(t){var e=t.userInfo;uni.setStorageSync("globalUser",e),uni.switchTab({url:"../me/index"})}})}})},wxLogin:function(t){console.log(t);var e=t.detail.userInfo;uni.login({provider:"weixin",success:function(t){console.log(t);t.code;uni.setStorageSync("globalUser",e),uni.switchTab({url:"../me/index"})}})},formSubmit:function(t){t.detail.value.username,t.detail.value.password;uni.switchTab({url:"../me/index"})}}};e.default=n},"66e2":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".body[data-v-2c385c14]{border-top:solid 1px #dbdbda;padding:0 %?40?%}\r\n\r\n/* 头像 start */.face-wapper[data-v-2c385c14]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:%?120?%;margin-bottom:%?120?%}.face[data-v-2c385c14]{width:%?160?%;height:%?160?%}\r\n\r\n/* 头像 end */\r\n\r\n/* 注册登录 start */.info-wapper[data-v-2c385c14]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-bottom:solid 1px #dbdbda;padding-bottom:%?20?%}.words-lbl[data-v-2c385c14]{color:grey}.input[data-v-2c385c14]{width:%?500?%;margin-left:%?40?%}.graywords[data-v-2c385c14]{color:#eaeaea}\r\n\r\n/* 注册登录 end */\r\n\r\n/* 第三方登录 start */.third-wapper[data-v-2c385c14]{width:100%;\r\n\t/* 固定底部 */\r\n\t/* bottom: 0;\r\n\tposition: fixed; */margin-top:%?60?%}.third-line[data-v-2c385c14]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.third-words[data-v-2c385c14]{color:#a9a9a9;font-size:13px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.single-line[data-v-2c385c14]{padding:%?15?% %?20?%;width:25%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.third-icos-wapper[data-v-2c385c14]{margin-top:%?30?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.third-ico[data-v-2c385c14]{width:%?60?%;height:%?60?%}.third-btn-ico[data-v-2c385c14]{background-image:url(http://122.152.205.72:88/group1/M00/00/05/CpoxxFxFO-yAOjTaAAATCIZEzRU503.png);width:%?60?%;height:%?60?%;background-color:#fff;background-size:%?60?% %?60?%;background-repeat:no-repeat;border:none;padding:0}uni-button[data-v-2c385c14]:after{border:none}\r\n\r\n/* 第三方登录 end */",""])},7469:function(t,e,i){var n=i("66e2");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("601f8199",n,!0,{sourceMap:!1,shadowMode:!1})},"934a":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"body"},[i("v-uni-form",{on:{submit:function(e){e=t.$handleEvent(e),t.formSubmit(e)}}},[i("v-uni-view",{staticClass:"face-wapper"},[i("v-uni-image",{staticClass:"face",attrs:{src:"../static/icos/default-face.png"}})],1),i("v-uni-view",{staticClass:"info-wapper"},[i("v-uni-label",{staticClass:"words-lbl"},[t._v("账号")]),i("v-uni-input",{staticClass:"input",attrs:{name:"username",type:"text",value:"",placeholder:"请输入用户名","placeholder-class":"graywords"}})],1),i("v-uni-view",{staticClass:"info-wapper",staticStyle:{"margin-top":"40upx"}},[i("v-uni-label",{staticClass:"words-lbl"},[t._v("密码")]),i("v-uni-input",{staticClass:"input",attrs:{name:"password",type:"text",value:"",password:"true",placeholder:"请输入密码","placeholder-class":"graywords"}})],1),i("v-uni-button",{staticStyle:{"margin-top":"60upx",width:"90%"},attrs:{type:"primary","form-type":"submit"}},[t._v("注册/登录")])],1)],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},ab16:function(t,e,i){"use strict";i.r(e);var n=i("3898"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},c5a9:function(t,e,i){"use strict";var n=i("7469"),a=i.n(n);a.a}}]);