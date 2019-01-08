const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    default: ''
  },
  main: {
    type: String,
    default: ''
  },
  view: {
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
},
{
  versionKey: false
})

articleSchema.pre('save', (next) => {
  if (this.isNew) {
    this.createTime = Date.now()
  }
  this.updateTime = Date.now()
  next()
})

articleSchema.statics = {
  // 得到文章列表
  async getArticleList () {
    return await this.find({})
  },
  async getArticle () {
    return await this.findById(id) 
  },
  // 添加文章
  async addArticle (doc) {
    let article = new articleModel(doc)
    return await article.save()
  },
  // 修改文章
  async editArticle ( id, newdoc) {
    return await this.findById(id).exec((err, doc) => {
      if (err) {
        return false
      } else {
        doc.title = newdoc.title
        doc.cover = newdoc.cover
        doc.main = newdoc.main
        doc.view = newdoc.view
        doc.save()
        return true
      }
    })
  },
  // 删除文章
  async deleteArticle (id) {
    return await this.deleteOne({_id: id})
  }
}

const articleModel = mongoose.model('article', articleSchema)

module.exports = articleModel
