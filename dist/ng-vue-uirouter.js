!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"RouterLink",props:{to:{required:!0},tag:{default:"a"}},computed:{href:function(){return this.$state.href(this.to.name,this.to.params,{absolute:!0})}},methods:{navigate:function(){this.$router.push(this.to.name,{params:this.to.params||{}})}}}},function(e,t,n){"use strict";var r=n(2),o=function(e){return e&&e.__esModule?e:{default:e}}(r);angular.module("ngVueUIRouter",["ui.router"]).factory("$ngVueUIRouter",["$state",function(e){return{install:function(t){t.prototype.$state=e;var n=function(){var t=e.$current,n=e.params,r=t.self.name,o=e.href(r,n,{absolute:!0});return{name:r,params:n,fullPath:o,path:o}};t.prototype.$router=t.$router={push:function(t,n){var r=n.params;e.go(t,r)},get currentRoute(){return n()}},Object.defineProperty(t.prototype,"$route",{get:function(){return n()}}),t.component("router-link",o.default)}}}])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,function(){return r[e]})}(u);var a=n(4),i=n(3),s=i(o.a,a.a,!1,null,null,null);t.default=s.exports},function(e,t){e.exports=function(e,t,n,r,o,u){var a,i=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(a=e,i=e.default);var f="function"==typeof i?i.options:i;t&&(f.render=t.render,f.staticRenderFns=t.staticRenderFns,f._compiled=!0),n&&(f.functional=!0),o&&(f._scopeId=o);var c;if(u?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(u)},f._ssrRegister=c):r&&(c=r),c){var l=f.functional,p=l?f.render:f.beforeCreate;l?(f._injectStyles=c,f.render=function(e,t){return c.call(t),p(e,t)}):f.beforeCreate=p?[].concat(p,c):[c]}return{esModule:a,exports:i,options:f}}},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return"a"===e.tag?n("a",{attrs:{href:e.href}},[e._t("default")],2):n(e.tag,{tag:"component",on:{click:e.navigate}},[e._t("default")],2)},o=[],u={render:r,staticRenderFns:o};t.a=u}])});