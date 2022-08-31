const router = require('koa-router')()
const { SuccessModel, ErrorModel } = require('../response-model/index')
// const { loginCheck } = require('../middleware/loginCheck')

const { createOrder,getOrderList } = require('../controller/order')

router.prefix('/api/order')

// 创建订单
router.post('/', async (ctx, next) => {
    // 获取请求参数
    const data = ctx.request.body
    // const { username } = ctx.session.userInfo
    const { username } = ctx.state.user

    try {
        const newOrder = await createOrder(username,data)
        ctx.body = new SuccessModel(newOrder)
    } catch (ex) {
        console.error(ex);
        ctx.body = new ErrorModel(10006, '创建订单失败!')
    }

})

// 查询订单列表
router.get('/', async (ctx, next) => {
    // const { username } = ctx.session.userInfo
    const { username } = ctx.state.user

    const orderList = await getOrderList(username)
    ctx.body = new SuccessModel(orderList)
})

module.exports = router