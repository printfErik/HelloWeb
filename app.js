// koa entry point

import { publicRouters }  from './router/apiRouter.js';
import { router } from './router/index.js';

import Koa from 'koa2'

import cors from 'koa2-cors'

const app = new Koa();
const port = 5050;

//app.use(router.routes(), router.allowedMethods());
app
    .use(cors())
    .use(router.routes(), router.allowedMethods())
    .use(publicRouters)


app.listen(port, () =>{
    console.log('Server is running at http://localhost:' + port);    
})