(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{318:function(s,t,e){var n=e(419);"string"==typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);(0,e(40).default)("0b4419e2",n,!0,{})},418:function(s,t,e){"use strict";var n=e(318);e.n(n).a},419:function(s,t,e){(s.exports=e(39)(!1)).push([s.i,".sign-box{align-items:center}.sign-box,.sign-box .sign{display:flex;justify-content:center}.sign-box .sign{position:relative;width:360px;height:400px;background-color:#fff;border:1px solid #ccc;box-shadow:0 0 10px 1px #ddd;border-radius:10px;text-align:center}.sign-box .sign .sign-type{position:absolute;top:-30px;left:10px}.sign-box .sign .sign-type span{display:inline-block;height:30px;width:80px;line-height:30px;color:grey;border:1px solid #ddd;cursor:pointer;transition:all .3s}.sign-box .sign .sign-type .active{height:35px;-webkit-transform:translateY(-5px);transform:translateY(-5px);color:#000;background-color:#5bc49f}.sign-box .sign .sign-msg{width:280px;height:100%;display:flex;flex-direction:column;justify-content:space-around}.sign-box .sign .sign-msg .type{height:60px;line-height:60px}.sign-box .sign .sign-msg .msg{height:70px;text-align:left}.sign-box .sign .sign-msg .msg span{color:red;font-size:12px}",""])},435:function(s,t,e){"use strict";e.r(t);e(110),e(111),e(70);var n=e(6),a=e.n(n),i={data:function(){return{user:{},type:"Login",accounts:[],msg:{account:{},password:{},againPassword:{}}}},asyncData:function(){var s=a()(regeneratorRuntime.mark(function s(t){var e,n,a;return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return e=t.$axios,s.next=3,e.get("getAccounts");case 3:return n=s.sent,a=n.data.map(function(s){return s.account}),s.abrupt("return",{accounts:a});case 6:case"end":return s.stop()}},s,this)}));return function(t){return s.apply(this,arguments)}}(),computed:{},methods:{isType:function(s){this.type=s,this.user={},this.msg={account:{},password:{},againPassword:{}}},judge:function(s){"account"===s&&(this.user.account?this.accounts.includes(this.user.account)&&"Register"===this.type?(this.msg.account.txt="用户名已存在",this.msg.account.state=!1):(this.msg.account.txt="",this.msg.account.state=!0):(this.msg.account.txt="用户名不能为空",this.msg.account.state=!1)),"password"===s&&(this.user.password?(this.msg.password.txt="",this.msg.password.state=!0):(this.msg.password.txt="密码不能为空",this.msg.password.state=!1)),"againPassword"===s&&(this.user.againPassword?this.user.password!==this.user.againPassword?(this.msg.againPassword.txt="两次密码不一致",this.msg.againPassword.state=!1):(this.msg.againPassword.txt="",this.msg.againPassword.state=!0):(this.msg.againPassword.txt="密码不能为空",this.msg.againPassword.state=!1))},submit:function(){var s=this,t=this.user,e=t.account,n=t.password;"Register"===this.type&&this.msg.account.state&&this.msg.password.state&&this.msg.againPassword.state?this.$axios.post("register",{account:e,password:n}).then(function(t){s.$message({showClose:!0,message:"注册成功",type:"success",duration:1e3})}).catch(function(s){console.log(s)}):"Login"===this.type&&this.msg.account.state&&this.msg.password.state?this.$axios.post("login",{account:e,password:n}).then(function(t){"string"==typeof t.data?s.$message({showClose:!0,message:t.data,type:"error"}):(s.$store.state.user=t.data,s.$message({showClose:!0,message:"登录成功",type:"success",duration:1e3}),s.$router.push({name:"index"}))}).catch(function(s){console.log(s)}):this.$message({showClose:!0,message:"输入信息有误",type:"error"})}}},o=(e(418),e(13)),r=Object(o.a)(i,function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("section",{staticClass:"sign-box"},[e("div",{staticClass:"sign"},[e("div",{staticClass:"sign-type"},[e("span",{class:{active:"Login"===s.type},on:{click:function(t){s.isType("Login")}}},[s._v("\n        Login\n      ")]),s._v(" "),e("span",{class:{active:"Register"===s.type},on:{click:function(t){s.isType("Register")}}},[s._v("\n        Register\n      ")])]),s._v(" "),e("div",{staticClass:"sign-msg"},[e("h2",{staticClass:"type"},[s._v("\n        "+s._s(s.type)+"\n      ")]),s._v(" "),e("div",{staticClass:"msg"},[e("el-input",{attrs:{placeholder:"Account",clearable:""},on:{input:function(t){s.judge("account")}},model:{value:s.user.account,callback:function(t){s.$set(s.user,"account",t)},expression:"user.account"}}),s._v(" "),e("span",[s._v(s._s(s.msg.account.txt))])],1),s._v(" "),e("div",{staticClass:"msg"},[e("el-input",{attrs:{type:"password",placeholder:"password",clearable:""},on:{input:function(t){s.judge("password")}},model:{value:s.user.password,callback:function(t){s.$set(s.user,"password",t)},expression:"user.password"}}),s._v(" "),e("span",[s._v(s._s(s.msg.password.txt))])],1),s._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:"Register"===s.type,expression:"type === 'Register'"}],staticClass:"msg"},[e("el-input",{attrs:{type:"password",placeholder:"againPassword",clearable:""},on:{input:function(t){s.judge("againPassword")}},model:{value:s.user.againPassword,callback:function(t){s.$set(s.user,"againPassword",t)},expression:"user.againPassword"}}),s._v(" "),e("span",[s._v(s._s(s.msg.againPassword.txt))])],1),s._v(" "),e("el-button",{attrs:{plain:""},on:{click:s.submit,keydown:function(t){return"button"in t||!s._k(t.keyCode,"enter",13,t.key,"Enter")?s.submit(t):null}}},[s._v("\n        submit\n      ")])],1)])])},[],!1,null,null,null);r.options.__file="sign.vue";t.default=r.exports}}]);