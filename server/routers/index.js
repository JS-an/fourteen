const Router = require('koa-router')
const user = require('../controllers/user')
const article = require('../controllers/article')

const router = new Router()

// 验证登录状态
router.get('/api/isSignIn', user.isSignIn)

// 用户
router.post('/api/register', user.register)
router.post('/api/login', user.login)
router.delete('/api/logout', user.logout)
router.get('/api/getAccounts', user.getAccounts)

// 文章
router.get('/api/getArticleList', article.getArticleList)
router.post('/api/addArticle', article.addArticle)

module.exports = router
