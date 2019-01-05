const Article = require('../models/article')

module.exports.getArticleList = async (ctx, next) => {
  await Article.getArticleList()
    .then(res => {
      ctx.body = res
    })
    .catch (err => {
      console.log(err)
    })
}

module.exports.addArticle = async (ctx, next) => {
  const { title, context } = ctx.request.body
  await Article.addArticle({ title, context })
    .then(res => {
      if (res) {
        ctx.body = '添加成功'
      } else {
        ctx.body = '添加失败'
      }
    })
    .catch(err => {
      console.log(err)
    })
}
