const Router = require('koa-router')
const user = require('../controllers/user')
const article = require('../controllers/article')
const comment = require('../controllers/comment')

const router = new Router()

// 验证登录状态
router.get('/api/isSignIn', user.isSignIn)

// 用户
router.post('/api/register', user.register)
router.post('/api/login', user.login)
router.delete('/api/logout', user.logout)
router.get('/api/getAccounts', user.getAccounts)
//用户管理
router.put('/api/setPassword', user.isUser, user.setPassword)
router.post('/api/upload', user.isUser, ...user.upload)
router.get('/api/images/head/:id', user.getImage)
router.get('/api/getUser', user.getUser)
router.put('/api/editUser', user.isUser, user.editUser)
// 超级用户管理
router.get('/api/getUserList', user.isSuperAdmin, user.getUserList)
router.put('/api/updateUserAll', user.isSuperAdmin, user.updateUserAll)
router.delete('/api/deleteUserAll', user.isSuperAdmin, user.deleteUserAll)

// 文章
router.get('/api/getArticleList', article.getArticleList)
router.get('/api/getArticle', article.getArticle)
// 文章管理(前端判断进入页面权限)
router.post('/api/addArticle', user.isAdmin, article.addArticle)
router.put('/api/editArticle', user.isAdmin, article.editArticle)
router.delete('/api/deleteArticle', user.isAdmin, article.deleteArticle)

// 评论
router.get('/api/getCommentList', comment.getCommentList)
router.post('/api/addComment', comment.addComment)
router.post('/api/addReply', comment.addReply)

// 友链
router.get('/api/getLinks', user.getLinks)
router.put('/api/linkShow', user.linkShow)

module.exports = router
