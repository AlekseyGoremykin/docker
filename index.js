const Koa = require ('koa');
const Router= require('koa-router');
const bodyparser = require('koa-bodyparser');


const db = require('@paralect/node-mongo').connect('mongodb://db:27017/docker');
const app = new Koa();
const router = new Router();
const usersService = db.createService('users');
const logsService = db.createService('logs');

app.use(bodyparser());

router.get('/me', async (ctx, next) => {
  ctx.body = await usersService.find({})
})

router.post('/logs', async (ctx, next) => {
  logsService.create(ctx.request.body);
  next();
})

router.get('/logs', async (ctx, next) => {
  ctx.body = await logsService.find({})
})


app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3030);