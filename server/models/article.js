const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    default: ''
  },
  context: {
    type: String,
    default: ''
  },
  cover:{
    type: String,
    default: ''
  },
  createTime: {
    type: String,
    default: ''
  },
  updateTime: {
    type: String,
    default: ''
  }
})

articleSchema.pre('save', (next) => {
  if (this.isNew) {
    this.createTime = Date.now()
  }
  this.updateTime = Date.now()
  next()
})

articleSchema.static = {
  // 得到文章列表
  async getArticleList () {
    return await this.find({})
  },
  async addArticle (doc) {
    const article = await new articleModel(doc)
    return article.save().exec(err => {
      if (err) {
        return false
      } else {
        return true
      }
    })
  }
}

const articleModel = mongoose.model('article', articleSchema)

module.exports = articleModel
