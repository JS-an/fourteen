<template>
  <el-menu 
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    router
    @select="handleSelect">
    <div class="home"/>
    <el-menu-item index="/home">主页</el-menu-item>
    <el-menu-item index="/article">文章</el-menu-item>
    <el-menu-item index="/links">友链</el-menu-item>
    <el-submenu
      :show-timeout="50"
      :hide-timeout="50"
      index="/admin"
      @click="isAdmin">
      <template slot="title">管理</template>
      <el-menu-item index="/admin/article">文章</el-menu-item>
      <el-menu-item index="/admin/links">友链</el-menu-item>
      <el-menu-item index="/admin/user">用户</el-menu-item>
    </el-submenu>
    <el-submenu
      :show-timeout="50"
      :hide-timeout="50"
      index="/account">
      <template slot="title">{{ user ? user.account : '账户' }}</template>
      <div v-if="user">
        <el-menu-item index="/account/user">个人中心</el-menu-item>
        <el-menu-item index="/account/setpassword">修改密码</el-menu-item>
        <el-menu-item
          index=""
          @click="logout">
          用户注销
        </el-menu-item>
      </div>
      <div v-else>
        <el-menu-item index="/sign">登陆/注册</el-menu-item>
      </div>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 'index' === this.$route.name ? '/' : this.$route.name
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath)
    },
    isAdmin () {
      if (this.user.role < 1) {
        this.$message({
          message: '你不是管理员！',
          type: 'warning',
          duration: 1000
        })
      }
    },
    logout () {
      this.$axios.delete('logout', { data: {account: this.user.account}})
        .then(res => {
          console.log(this.$store.state.user)
          this.$store.state.user = false
          this.$message({
            showClose: true,
            message: res.data,
            type: 'success',
            duration: 1000
          })
          this.$router.push({
            name: 'index'
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu {
  padding: 0;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: flex-end;
  .home {
    position: absolute;
    left: 20px;
    top: 0px;
    width: 60px;
    height: 60px;
    background: url('../static/home.png') no-repeat center;
    outline: none;
  }
}
</style>
