(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{242:function(e,t,s){var a=s(349);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,s(30).default)("10077bde",a,!0,{})},348:function(e,t,s){"use strict";var a=s(242);s.n(a).a},349:function(e,t,s){(e.exports=s(29)(!1)).push([e.i,".user-box{display:flex;justify-content:center}.user-box .user{width:700px;margin:20px 0;padding:20px;border:1px solid #ddd;border-radius:10px}.user-box .user .avatar-uploader .el-upload{border:1px dashed #d9d9d9;border-radius:6px;cursor:pointer;position:relative;overflow:hidden}.user-box .user .avatar-uploader .el-upload:hover{border-color:#409eff}.user-box .user .avatar-uploader-icon{font-size:28px;color:#8c939d;width:178px;height:178px;line-height:178px;text-align:center}.user-box .user .avatar{width:178px;height:178px;display:block}.user-box .user .upload-btn{width:178px}.user-box .user .msg{width:500px;margin-top:20px}.user-box .user .msg input{margin-bottom:10px}",""])},367:function(e,t,s){"use strict";s.r(t);s(55);var a=s(6),r=s.n(a),n={middleware:"login",data:function(){return{imageUrl:"",uploadImg:null,userMsg:{}}},computed:{user:function(){return this.$store.state.user}},watch:{user:function(){this.getUser()}},mounted:function(){this.user&&this.getUser()},methods:{handleAvatarSuccess:function(e,t){this.$message({message:"上传成功",type:"success",duration:1e3})},uploadHandle:function(e){var t=this,s=new FormData;s.append("file",this.uploadImg),s.append("account",e.data.account),this.$axios.post("upload",s).then(function(e){e&&t.handleAvatarSuccess()})},compress:function(e){var t=this,s=new FileReader;s.onload=function(){var e=178,a=178,n=.92,o=new Image,u=document.createElement("canvas");u.width=e,u.height=a;var i=u.getContext("2d");o.onload=r()(regeneratorRuntime.mark(function s(){return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return i.drawImage(o,0,0,o.width,o.height,0,0,e,a),s.next=3,u.toBlob(function(e){t.uploadImg=e});case 3:return s.next=5,u.toDataURL("image/jpeg",n);case 5:t.imageUrl=s.sent;case 6:case"end":return s.stop()}},s,this)})),o.src=s.result},s.readAsDataURL(e.raw)},upload:function(){this.$refs.upload.submit()},getUser:function(){var e=this;this.$axios.get("getUser",{params:{account:this.user.account}}).then(function(t){e.userMsg=t.data}).catch(function(e){console.log(e)})},submit:function(){var e=this;this.$axios.put("editUser",this.userMsg).then(function(t){t?e.$message({message:"修改成功",type:"success",duration:1e3}):e.$message({message:"修改失败",type:"error",duration:1e3})}).catch(function(e){console.log(e)})}}},o=(s(348),s(9)),u=Object(o.a)(n,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"user-box"},[s("div",{staticClass:"user"},[s("el-upload",{ref:"upload",staticClass:"avatar-uploader",attrs:{"show-file-list":!1,"on-change":e.compress,data:{account:e.user.account},"auto-upload":!1,"http-request":e.uploadHandle,action:"string"}},[e.user.head||e.imageUrl?s("img",{staticClass:"avatar",attrs:{src:e.imageUrl||e.user.head}}):s("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),e._v(" "),s("el-button",{staticClass:"upload-btn",attrs:{type:"success"},on:{click:e.upload}},[e._v("\n      上传头像\n    ")]),e._v(" "),s("div",{staticClass:"msg"},[s("el-input",{attrs:{type:"text",disabled:"",clearable:""},model:{value:e.userMsg.account,callback:function(t){e.$set(e.userMsg,"account",t)},expression:"userMsg.account"}}),e._v(" "),s("el-input",{attrs:{type:"text",placeholder:"nikname",clearable:""},model:{value:e.userMsg.nikname,callback:function(t){e.$set(e.userMsg,"nikname",t)},expression:"userMsg.nikname"}}),e._v(" "),s("el-input",{attrs:{type:"text",placeholder:"github",clearable:""},model:{value:e.userMsg.github,callback:function(t){e.$set(e.userMsg,"github",t)},expression:"userMsg.github"}}),e._v(" "),s("el-input",{attrs:{type:"text",placeholder:"web",clearable:""},model:{value:e.userMsg.web,callback:function(t){e.$set(e.userMsg,"web",t)},expression:"userMsg.web"}}),e._v(" "),s("el-input",{attrs:{type:"text",placeholder:"information",clearable:""},model:{value:e.userMsg.information,callback:function(t){e.$set(e.userMsg,"information",t)},expression:"userMsg.information"}})],1),e._v(" "),s("el-button",{attrs:{type:"success"},on:{click:e.submit}},[e._v("\n      保存修改\n    ")])],1)])},[],!1,null,null,null);u.options.__file="user.vue";t.default=u.exports}}]);