const Comment = require('../models/comment')

// 获取评论列表
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

// 添加评论
module.exports.addComment = async (ctx, next) => {
  const { source, main, user, user_head } = ctx.request.body
  await Comment.addComment({ source, main, user, user_head })
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

// 添加回复
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
