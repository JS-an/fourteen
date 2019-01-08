const Article = require('../models/article')

module.exports.getArticleList = async (ctx, next) => {
  await Article.getArticleList()
    .then(res => {
      if (res) {
        ctx.body = res
      } else {
        ctx.body = false
      }
    })
    .catch (err => {
      console.log(err)
    })
}

module.exports.getArticle = async (ctx, next) => {
  const id = ctx.query.id
  await Article.findById(id)
    .then(res => {
      if (res) {
        ctx.body = res
      } else {
        ctx.body = false
      }
    })
}

module.exports.addArticle = async (ctx, next) => {
  const { title, cover, main, view } = ctx.request.body
  await Article.addArticle({ title, cover, main, view })
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

module.exports.editArticle = async (ctx, next) => {
  const { id, title, cover, main, view} = ctx.request.body
  await Article.editArticle(id, {title, cover, main, view})
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

module.exports.deleteArticle = async (ctx, next) => {
  const id = ctx.query.id
  await Article.deleteArticle(id)
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
