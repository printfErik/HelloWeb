import compose from 'koa-compose'

import productRouter from '../controller/products'

export const publicRouters = compose([
    productRouter.middleware()
])