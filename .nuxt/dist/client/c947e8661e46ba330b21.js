(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{303:function(t,e,n){var i=n(326);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(40).default)("56801747",i,!0,{})},325:function(t,e,n){"use strict";var i=n(303);n.n(i).a},326:function(t,e,n){(t.exports=n(39)(!1)).push([t.i,".container{height:calc(100vh - 61px);overflow:hidden}.fade-enter-active,.fade-leave-active{transition:opacity .3s}.fade-enter,.fade-leave-active{opacity:0}.slide-right-enter-active,.slide-right-leave-active{transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.slide-right-enter,.slide-right-leave-to{-webkit-transform:translateX(100vw);transform:translateX(100vw)}.slide-left-enter-active,.slide-left-leave-active{transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.slide-left-enter,.slide-left-leave-to{-webkit-transform:translateX(-100vw);transform:translateX(-100vw)}",""])},598:function(t,e,n){"use strict";n.r(e);n(111);var i={data:function(){return{transitionName:"view"}},watch:{$route:function(t,e){var n=t.path.split("/").length,i=e.path.split("/").length;this.transitionName=e&&n!==i?n<i?"slide-left":"slide-right":"fade"}},mounted:function(){var t=this;this.$axios.get("isSignIn").then(function(e){"string"==typeof e.data?console.log("未登录"):t.$store.state.user=e.data}).catch(function(t){console.log(t)})}},a=(n(325),n(13)),s=Object(a.a)(i,function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"container"},[e("transition",{attrs:{name:this.transitionName}},[e("nuxt")],1)],1)},[],!1,null,null,null);s.options.__file="index.vue";e.default=s.exports}}]);