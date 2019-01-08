const User = require('../models/user')
const auth = require('../common/auth')

// 验证登录状态
module.exports.isSignIn = async (ctx, next) => {
  const payload = isToken(ctx)
  if (payload) {
    const { account, role } = payload
    if (Math.ceil(Date.now() / 1000) - payload.iat > 86400) {
      const newToken = auth.getToken({ account, role })
      await User.getUserByAccount(account)
        .then(res => {
          res.token = newToken
          res.save()
          ctx.cookies.set('token', newToken, { maxAge: 604800000 })
          ctx.body = { account, role }
        })
        .catch(err => {
          console.log(err)
        })
    } else {
      ctx.body = { account, role }
    }
  } else {
    ctx.body = false
  }
}

// 注册登录功能
// 登录
module.exports.login = async (ctx, next) => {
  const data = ctx.request.body
  await User.getUserByAccount(data.account)
    .then(res => {
      if (res) {
        if (auth.verifyPassword(data.password, res.password)) {
          const { account, role } = res
          const token = auth.getToken({ account, role })
          res.token =token
          res.save()
          ctx.cookies.set('token', token, { maxAge: 604800000 })
          ctx.body = { account, role }
        } else {
          ctx.body = '密码错误'
        }
      } else {
        ctx.body = '账户不存在'
      }
    })
    .catch(err => {
      console.log(err)
    })
}

// 注册
module.exports.register = async (ctx, next) => {
  const data = ctx.request.body
  const user = new User(data)
  await user.save()
  ctx.body = '注册成功'
}

// 退出
module.exports.logout = async (ctx, next) => {
  await User.getUserByAccount(ctx.request.body.account)
    .then(res => {
      res.token = ''
      res.save()
      ctx.cookies.set('token', null, { maxAge: 0})
      ctx.body = '退出成功'
    })
    .catch(err => {
      console.log(err)
    })
}

// 用户列表
module.exports.getAccounts = async (ctx, next) => {
  await User.getAccounts()
    .then(res => {
      ctx.body = res
    })
    .catch(err => {
      console.log(err)
    })
}

// 验证权限功能
// 是否管理员
module.exports.isAdmin = async (ctx, next) => {
  const payload = isToken(ctx)
  if (payload) {
    if (payload.role >= 1) {
      next()
    } else {
      ctx.body = '权限不足'
    }
  } else {
    ctx.body = '请重新登录'
  }
}

// 是否超级管理员
module.exports.isSuperAdmin = async (ctx, next) => {
  const payload = isToken(ctx)
  if (payload) {
    if (payload.role >= 2) {
      next()
    } else {
      ctx.body = '权限不足'
    }
  } else {
    ctx.body = '请重新登录'
  }
}

// 验证token
function isToken (ctx) {
  const token = ctx.cookies.get('token')
  if (token) {
    const payload = auth.verifyToken(token)
    if (typeof(payload) === 'string') {
      return false
    } else {
      return payload
    }
  } else {
    return false
  }
}
