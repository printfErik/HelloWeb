const Router = require('koa-router');
const router = new Router();
const list = require('./list')

router.get('/', async (ctx) => {
    ctx.body = "首页";
})
//router.use('/groupList', list.routes(), list.allowedMethods())

module.exports = router