<template>
  <section class="sign-box">
    <div class="sign">
      <div class="sign-type">
        <span
          :class="{active: type === 'Login'}"
          @click="isType('Login')">
          Login
        </span>
        <span
          :class="{active: type === 'Register'}"
          @click="isType('Register')">
          Register
        </span>
      </div>
      <div class="sign-msg">
        <h2 class="type">
          {{ type }}
        </h2>
        <div class="msg">
          <el-input
            v-model="user.account"
            placeholder="Account"
            clearable
            @input="judge('account')"/>
          <span>{{ msg.account.txt }}</span>
        </div>
        <div class="msg">
          <el-input
            v-model="user.password"
            type="password"
            placeholder="password"
            clearable
            @input="judge('password')"/>
          <span>{{ msg.password.txt }}</span>
        </div>
        <div
          v-show="type === 'Register'"
          class="msg">
          <el-input
            v-model="user.againPassword"
            type="password"
            placeholder="againPassword"
            clearable
            @input="judge('againPassword')"/>
          <span>{{ msg.againPassword.txt }}</span>
        </div>
        <el-button
          plain
          @click="submit"
          @keydown.enter="submit">
          submit
        </el-button>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      user: {},
      type: 'Login',
      accounts: [],
      msg: {
        account: {},
        password: {},
        againPassword: {}
      }
    }
  },
  async asyncData({ $axios, req, res }) {
    let obj = await $axios.get('getAccounts')
    const accounts = obj.data.map(val => val.account)
    return { accounts }
  },
  computed: {

  },
  methods: {
    isType (type) {
      this.type = type
      this.user = {}
      this.msg = {
        account: {},
        password: {},
        againPassword: {}
      }
    },
    judge (val) {
      if (val === 'account') {
        if (!this.user.account) {
          this.msg.account.txt = '用户名不能为空'
          this.msg.account.state = false
        } else if(this.accounts.includes(this.user.account) && this.type === 'Register') {
          this.msg.account.txt = '用户名已存在'
          this.msg.account.state = false
        } else {
          this.msg.account.txt = ''
          this.msg.account.state = true
        }
      }
      if (val === 'password') {
        if (!this.user.password) {
          this.msg.password.txt = '密码不能为空'
          this.msg.password.state = false
        } else {
          this.msg.password.txt = ''
          this.msg.password.state = true
        }
      }
      if (val === 'againPassword') {
        if (!this.user.againPassword) {
          this.msg.againPassword.txt = '密码不能为空'
          this.msg.againPassword.state = false
        } else if (this.user.password !== this.user.againPassword) {
          this.msg.againPassword.txt = '两次密码不一致'
          this.msg.againPassword.state = false
        } else {
          this.msg.againPassword.txt = ''
          this.msg.againPassword.state = true
        }
      }
    },
    submit () {
      const { account, password } = this.user
      if (this.type === 'Register' && this.msg.account.state && this.msg.password.state && this.msg.againPassword.state) {
        this.$axios.post('register', { account, password })
          .then(res => {
            this.$message({
              showClose: true,
              message: '注册成功',
              type: 'success',
              duration: 1000
            })
          })
          .catch(err => {
            console.log(err)
          })
      } else if (this.type === 'Login' && this.msg.account.state && this.msg.password.state) {
        this.$axios.post('login', { account, password })
          .then(res => {
            if (typeof(res.data) === 'string') {
              this.$message({
                showClose: true,
                message: res.data,
                type: 'error'
              })
            } else {
              this.$store.state.user = res.data
              this.$message({
              showClose: true,
              message: '登录成功',
              type: 'success',
              duration: 1000
              })
              this.$router.push({
                name: 'index'
              })
            }
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        this.$message({
          showClose: true,
          message: '输入信息有误',
          type: 'error'
        })
      }
    }
  }
}
</script>

<style lang="scss" scope>

.sign-box {
  display: flex;
  justify-content: center;
  align-items: center;
  .sign{
    position: relative;
    width: 360px;
    height: 400px;
    background-color: white;
    border: 1px solid #ccc;
    box-shadow: 0 0 10px 1px #ddd;
    border-radius: 10px;
    text-align: center;
    display: flex;
    justify-content: center;
    .sign-type{
      position: absolute;
      top: -30px;
      left: 10px;
      span{
        display: inline-block;
        height: 30px;
        width: 80px;
        line-height: 30px;
        color: gray;
        border: 1px solid #ddd;
        cursor: pointer;
        transition: all .3s;
      }
      .active{
        height: 35px;
        transform: translateY(-5px);
        color: black;
        background-color: #5bc49f;
      }
    }
    .sign-msg{
      width: 280px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .type{
        height: 60px;
        line-height: 60px;
      }
      .msg{
        height: 70px;
        text-align: left;
        span{
          color: red;
          font-size: 12px;
        }
      }
    }
  }
}

</style>
