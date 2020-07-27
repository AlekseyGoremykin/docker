const Koa = require ('koa');
const Router= require('koa-router');

const db = require('@paralect/node-mongo').connect('mongodb://db:27017/docker');
const app = new Koa();
const router = new Router();
const service = db.createService('users');

router.get('/me', async (ctx, next) => {
  next();
})

router.post('/logs', async (ctx, next) => {
  console.log(ctx.request.body)
  next();
})

router.get('/logs', async (ctx, next) => {
  next();
})


app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3030);