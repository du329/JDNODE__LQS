const { ErrorModel } = require('../response-model/index')

// 登录验证中间件
const loginCheck = async (ctx, next) => {
    const { session } = ctx;
    if (session && session.userInfo) {
        // 登录验证成功
        await next()
        return
    } else {
        ctx.body = new ErrorModel(10003,'登录验证失败！')
    }
}
module.exports = {
    loginCheck
}