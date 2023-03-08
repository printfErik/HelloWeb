import send from 'koa-send'

import Router from 'koa-router'
import path from 'path'

const router = new Router()

router.get('/home/(.*)', async (ctx) => {
    await send(ctx, path.resolve('../FrontEnd/dist/index.html'), {root: '/'})
})

export default router