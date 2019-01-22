const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  account: {
    type: String
  },
  password: {
    type: String
  },
  role: {
    type: Number,
    default: 0
  },
  createTime: {
    type: Date,
    default: Date.now
  },
  token: {
    type: String,
    default: ''
  },
  head: {
    type: String,
    default: ''
  },
  nikname: {
    type: String,
    default: ''
  },
  github: {
    type: String,
    default: ''
  },
  web: {
    type: String,
    default: ''
  },
  information: {
    type: String,
    default: ''
  },
  show: {
    type: Boolean,
    default: false
  },
},
{
  versionKey: false
})

userSchema.statics = {
  // 得到账号列表
  async getAccounts () {
    return await this.find({}, {_id: 0, account: 1})
  },
  // 根据账号得到用户信息
  async getUserByAccount (account) {
    return await this.findOne({ account })
  },
  // 根据id得到用户信息
  async getUserById (id) {
    return await this.findById(id)
  },
  // 得到全部用户信息
  async getUserList () {
    return await this.find({})
  },
  // 删除用户
  async deleteUserAll (_id) {
    return await this.deleteOne({ _id })
  },
  // 修改密码
  async setPassword (account, pwd) {
    let doc = await this.findOne({ account })
    if (doc.password === pwd.oldPassword) {
      doc.password = pwd.newPassword
      return doc.save()
    } else {
      return false
    }
  },
  // 得到友链信息
  async getLinks () {
    return await this.find({show: true}, {_id: 0, nikname: 1, github: 1, web: 1, account: 1, information: 1, head: 1, show: 1})
  }
}

userSchema.index({ account: 1}, { unique: true, sparse: true })

const user = mongoose.model('user', userSchema)

module.exports = user
