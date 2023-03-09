import compose from 'koa-compose'

import productRouter from '../controller/products.js'

export const publicRouters = compose([
    productRouter.middleware()
])