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
},
{
  versionKey: false
})

userSchema.statics = {
  // 得到账号列表
  async getAccounts () {
    return await this.find({}, {_id: 0, account: 1})
  },
  // 得到用户信息
  async getUserByAccount (account) {
    return await this.findOne({ account })
  },
  async setPassword (account, pwd) {
    let doc = await this.findOne({ account })
    if (doc.password === pwd.oldPassword) {
      doc.password = pwd.newPassword
      return doc.save()
    } else {
      return false
    }
  }
}

userSchema.index({ account: 1}, { unique: true, sparse: true })

const user = mongoose.model('user', userSchema)

module.exports = user
