const Koa = require('koa')
const app = new Koa()

const koaJwt = require('koa-jwt')
// const jwt = require('jsonwebtoken')

const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
// const session = require('koa-generic-session')
const cors = require('koa2-cors')
const { ErrorModel } = require('./response-model/index')

const index = require('./routes/index')
const users = require('./routes/users')
const address = require('./routes/address')
const shop = require('./routes/shop')
const order = require('./routes/order')

// error handler
onerror(app)

// session配置
app.keys = ['lqssql^&*789654'] //密钥，用于加密
// app.use(session({
//   // 配置cookie
//   cookie: {
//     path: '/', // 根目录
//     httpOnly: true, // 只读，只能通过后端修改cookie，不允许前端修改
//     maxAge: 24 * 60 * 60 * 1000 // one day
//   }
// }))

// cors配置
app.use(cors({
  // origin:'*', 支持所有域，无需设置credentials
  origin: 'http://localhost:8080', // 前端 origin
  credentials: true // 允许跨域携带cookie
}))

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// 校验token
// app.use(koaJwt({ secret: 'my_app_secret',key: 'user' }) // key 设置ctx.status.[key]
//.unless({ path: [/^\/api\/users\/login/, /^\/api\/users\/register/]}));
app.use(koaJwt({ secret: 'my_app_secret' }).unless({
  path: [
    /^\/api\/users\/login/,
    /^\/api\/users\/register/,
    /^\/api\/shop\/hot-list/,
    /^\/api\/shop\/search\/search-list/,
    /^\/api\/shop\/search\/hot-words/,
  ]
}));

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(address.routes(), address.allowedMethods())
app.use(shop.routes(), shop.allowedMethods())
app.use(order.routes(), order.allowedMethods())


// error-handling
app.on('error', (err, ctx) => {
  if (err.name === "UnauthorizedError") {
    ctx.body = new ErrorModel(401, '无效的token,请重新登录')
    return
  }

  ctx.body = new ErrorModel(500, '服务器未知错误')
  // console.error('server error', err, ctx)
});


module.exports = app
