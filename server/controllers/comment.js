const Comment = require('../models/comment')

module.exports.getCommentList = async (ctx, next) => {
  const { source } = ctx.request.query
  await Comment.getCommentList(source)
    .then(res => {
      ctx.body = res
    })
    .catch(err => {
      console.log(err)
    })
}

module.exports.addComment = async (ctx, next) => {
  const { source, main, user, floor } = ctx.request.body
  await Comment.addComment({ source, main, user, floor })
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
