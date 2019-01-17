const mongoose = require('mongoose')
const moment = require('moment')

const commentSchema = new mongoose.Schema({
  source: {
    type: String,
    default: ''
  },
  main: {
    type: String,
    default: ''
  },
  user: {
    type: String,
    default: ''
  },
  user_head: {
    type: String,
    default: ''
  },
  reply: {
    type: Array,
    default: []
  },
  floor: {
    type: Number
  },
  commentTime: {
    type: String,
    default: ''
  }
},{
  versionKey: false
})

commentSchema.pre('save', function (next) {
  this.commentTime = moment().format('YYYY-MM-DD HH:mm:ss')
  next()
})

commentSchema.statics = {
  async getCommentList (source) {
    return await this.find({ source })
  },
  async addComment (doc) {
    let comment = new commentModle(doc)
    let commentList = await this.find({ source: doc.source })
    let count = 1
    if (commentList) {
      commentList.forEach(el => {
        count = (el.floor > count) ? el.floor + 1 : count + 1
      })
      comment.floor = count
    } else {
      comment.floor = count
    }
    return comment.save()
  },
  async addReply (id, reply) {
    let comment = await this.findById(id)
    reply.replyTime = moment().format('YYYY-MM-DD HH:mm:ss')
    comment.reply.push(reply)
    return comment.save()
  }
}

commentSchema.index({ source: 1 })

const commentModle = mongoose.model('comment', commentSchema)

module.exports = commentModle
