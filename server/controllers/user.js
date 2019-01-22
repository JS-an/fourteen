const User = require('../models/user')
const auth = require('../common/auth')
const fs = require('fs')
const path = require('path')
const multer = require('koa-multer')

// 验证登录状态
module.exports.isSignIn = async (ctx, next) => {
  const payload = isToken(ctx)
  if (payload) {
    const { account, role, head } = payload
    if (Math.ceil(Date.now() / 1000) - payload.iat > 86400) {
      const newToken = auth.getToken({ account, role, head })
      await User.getUserByAccount(account)
        .then(res => {
          res.token = newToken
          res.save()
          ctx.cookies.set('token', newToken, { maxAge: 604800000 })
          ctx.body = { account, role, head }
        })
        .catch(err => {
          console.log(err)
        })
    } else {
      ctx.body = { account, role, head }
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
          const { account, role, head } = res
          const token = auth.getToken({ account, role, head })
          res.token =token
          res.save()
          ctx.cookies.set('token', token, { maxAge: 604800000 })
          ctx.body = { account, role, head }
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

// 用户管理
// 获取账号列表
module.exports.getAccounts = async (ctx, next) => {
  await User.getAccounts()
    .then(res => {
      ctx.body = res
    })
    .catch(err => {
      console.log(err)
    })
}

// 修改密码
module.exports.setPassword = async (ctx, next) => {
  const { account, pwd } = ctx.request.body
  await User.setPassword(account, pwd)
    .then(res => {
      if (res) {
        ctx.body = true
      } else {
        ctx.body = false
      }
    })
    .catch(err => {
      console.log(err)
    })
}

// 上传头像
module.exports.upload = [
  multer({storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, '../public/images/head'))
    },
    filename: (req, file, cb) => {
      cb(null, `${file.originalname}`)
    }
  })}).single('file'),
  async (ctx, next) => {
    const account = ctx.req.body.account
    fs.rename(path.join(__dirname, `../public/images/head/${ctx.req.file.originalname}`), path.join(__dirname, `../public/images/head/${account}.jpg`), (err) => {
      if (err) {
        console.log(err)
      }
    })
    await User.getUserByAccount(account)
      .then(res => {
        res.head = `/api/images/head/${account}.jpg`
        res.save()
        ctx.body = true
      })
      .catch(err => {
        console.log(err)
      })
  }
]

// 获取图片
module.exports.getImage = async (ctx, next) => {
  ctx.type = 'html'
  ctx.body = await fs.createReadStream(`./server/public/images/head/${ctx.params.id}`)
}

// 获取用户信息
module.exports.getUser = async (ctx, next) => {
  const account = ctx.query.account
  await User.getUserByAccount(account)
    .then(res => {
      if (res) {
        const { account, nikname, github, web, information } = res
        ctx.body = { account, nikname, github, web, information }
      } else {
        ctx.body = false
      }
    })
    .catch(err => {
      console.log(err)
    })
}

// 修改用户信息
module.exports.editUser = async (ctx, next) => {
  const { account, nikname, github, web, information }  = ctx.request.body
  await User.getUserByAccount(account)
    .then(res => {
      res.nikname = nikname
      res.github = github
      res.web = web
      res.information = information
      res.save()
      ctx.body = true
    })
    .catch(err => {
      console.log(err)
    })
}

// 得到用户列表
module.exports.getUserList = async (ctx, next) => {
  await User.getUserList()
    .then(doc => {
      ctx.body = doc
    })
    .catch(err => {
      console.log(err)
    })
}

// 更新用户全部信息
module.exports.updateUserAll = async (ctx, next) => {
  let { user, _id } = ctx.request.body
  await User.getUserById(_id)
    .then(doc => {
      Object.assign(doc, user)
      doc.save()
      ctx.body = true
    })
}

// 删除用户
module.exports.deleteUserAll = async (ctx, next) => {
  let id = ctx.query.id
  await User.deleteUserAll(id)
    .then(doc => {
      if (doc) {
        ctx.body = true
      }
    })
}

// 验证权限功能
// 是否登录
module.exports.isUser = async (ctx, next) => {
  const payload = isToken(ctx)
  if (payload) {
    await next()
  } else {
    ctx.body = false
  }
}

// 是否管理员
module.exports.isAdmin = async (ctx, next) => {
  const payload = isToken(ctx)
  if (payload) {
    if (payload.role >= 1) {
      await next()
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
      await next()
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

// Links
// 得到友链
module.exports.getLinks = async (ctx, next) => {
  await User.getLinks()
    .then((res) => {
      ctx.body = res
    })
    .catch((err) => {
      console.log(err)
    })
}

// 是否展示链接
module.exports.linkShow = async (ctx, next) => {
  await User.getUserByAccount(ctx.request.body.account)
    .then((res) => {
      res.show = !res.show
      res.save()
      ctx.body = true
    })
    .catch((err) => {
      console.log(err)
    })
}
