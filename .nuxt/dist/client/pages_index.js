(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{248:function(e,t,n){var o=n(358);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(19).default)("56801747",o,!0,{})},357:function(e,t,n){"use strict";var o=n(248);n.n(o).a},358:function(e,t,n){(e.exports=n(18)(!1)).push([e.i,".index-box{text-align:center}.index-box .enter-home{width:80px;height:40px;font-size:20px;text-align:center;line-height:40px;border:1px solid #ddd;cursor:pointer}",""])},371:function(e,t,n){"use strict";n.r(t);var o={layout:"index",mounted:function(){document.addEventListener("keydown",this.keyEnter)},beforeDestroy:function(){document.removeEventListener("keydown",this.keyEnter)},methods:{keyEnter:function(e){13===e.keyCode&&this.goToHome()},goToHome:function(){this.$router.push({name:"home"})}}},i=(n(357),n(9)),s=Object(i.a)(o,function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"index-box"},[t("p",[this._v("press enter or click the mouse to enter")]),this._v(" "),t("div",{staticClass:"enter-home",on:{click:this.goToHome}},[this._v("\n    Home\n  ")])])},[],!1,null,null,null);s.options.__file="index.vue";t.default=s.exports}}]);