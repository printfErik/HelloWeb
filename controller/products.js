import koaRouter from 'koa-joi-router'
import { getProductList, getProductListByGroup } from '../service/products.js'

const router = koaRouter()

router.prefix('/api')

router.route({
    method: 'get',
    path: '/productList',
    handler: async (ctx) => {
        try {
            const res = await getProductList()
            ctx.body = res;
        } catch (error) {
            console.log(error)
        }
    }
})

router.route({
    method: 'get',
    path: '/productListByType',
    handler: async (ctx) => {
        const typeID = ctx.query.groupID;
        const res = await getProductListByGroup(typeID)
        ctx.body = res
    }
})

export default router
