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
  const { source, main, user } = ctx.request.body
  await Comment.addComment({ source, main, user })
    .then(res => {
      if (res) {
        ctx.body = res
      } else {
        ctx.body = false
      }
    })
    .catch(err => {
      console.log(err)
    })
}

module.exports.addReply = async (ctx, next) => {
  const { id, reply } = ctx.request.body
  await Comment.addReply(id, reply)
    .then(res => {
      if (res) {
        ctx.body = res
      } else {
        ctx.body = false
      }
    })
    .catch(err => {
      console.log(err)
    })
}
