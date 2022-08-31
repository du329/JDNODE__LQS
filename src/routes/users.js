const router = require('koa-router')()
const { SuccessModel, ErrorModel } = require('../response-model/index')
const { register, login } = require('../controller/user')

router.prefix('/api/users')

// 注册
router.post('/register', async (ctx, next) => {
  // 获取请求参数
  const { username, password } = ctx.request.body
  console.log(ctx.request.body);
  console.log(username, password);
  // controller
  try {
    const newUser = await register(username, password)
    ctx.body = new SuccessModel(newUser)
  } catch (ex) {
    console.error(ex);
    ctx.body = new ErrorModel(10001, `用户注册失败! - ${ex.message}`)
  }
})

// 登录
router.post('/login', async (ctx, next) => {
  // 获取请求参数
  const { username, password } = ctx.request.body
  // controller
  // login 是async异步函数，需要 await等待其结果返回
  const token = await login(username, password)
  if (token) {
    // 登录成功 
    // ctx.session.userInfo = { username }
    ctx.body = new SuccessModel(username,token)
  } else {
    // 登录失败
    ctx.body = new ErrorModel(10002, '登录验证失败!')
  }
})

// 用户退出
// router.

// 获取用户信息
// router.get('/info', async (ctx, body) => {
//   const { userInfo } = ctx.session
//   if (userInfo) {
//     const data = { username: userInfo.username }
//     ctx.body = new SuccessModel(data)
//   } else {
//     ctx.body = new ErrorModel(10010, '获取用户信息失败，请登录!')
//   }
// })

module.exports = router
