const Router = require('koa-router');
const home = new Router();

const db = require('../utils/db')

/*
let selectAllGroupSqlCode = 'select * from group';
let selectGroupSqlCode = 'select * from products where GroupID=';

home.get('/groupList', (ctx) => {
    db.query(selectAllGroupSqlCode, (err, data) => {
        if (err) {
            throw err;
        }
        console.log(data);
        ctx.body = data;
    })
})


home.get('/groupList/:id', (ctx, next) => {
    db.query(selectGroupSqlCode + '${ctx.params.id}' , (err, data) => {
        if (err)
        {
            throw err;
        }
        console.log(data);
        ctx.body = data;
    })
})
*/