// koa entry point

import viewRouter from './router/viewRouter'
import { publicRouters } from './router/apiRouter';

const Koa = require('koa2');
const cors = require('koa2-cors');
const app = new Koa();
const port = 5050;

const router = require('/router');

//app.use(router.routes(), router.allowedMethods());
app
    .use(cors())
    .use(router.routes(), router.allowedMethods())
    .use(publicRouters)


app.listen(port, () =>{
    console.log('Server is running at http://localhost:' + port);    
})