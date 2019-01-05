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
  token: {
    type: String,
    default: ''
  }
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
  }
}

userSchema.index({ account: 1}, { unique: true, sparse: true })

const user = mongoose.model('user', userSchema)

module.exports = user
