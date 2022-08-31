const router = require('koa-router')()
const { SuccessModel, ErrorModel } = require('../response-model/index')
// const { loginCheck } = require('../middleware/loginCheck')

const {
    createAddress,
    getAddressList,
    getAddressById,
    updateAddress,
    deleteAddress
} = require('../controller/address')

router.prefix('/api/user/address')

// 创建收货地址
router.post('/', async (ctx, next) => {
    // 获取请求参数
    const data = ctx.request.body
    // const { username } = ctx.session.userInfo
    const { username } = ctx.state.user

    try {
        // controller
        const newAddress = await createAddress(username, data)
        ctx.body = new SuccessModel(newAddress)
    } catch (ex) {
        console.log(ex);
        ctx.body = new ErrorModel(10004, '用户地址创建失败!')
    }
})

// 获取收货地址列表
router.get('/', async (ctx, next) => {
    // const { username } = ctx.session.userInfo
    const { username } = ctx.state.user
    // controller
    const addressList = await getAddressList(username)
    ctx.body = new SuccessModel(addressList)
})

// 获取单个地址
router.get('/:id', async (ctx, next) => {
    // 获取请求参数
    const id = ctx.params.id
    // const { username } = ctx.session.userInfo
    const { username } = ctx.state.user

    // controller
    const address = await getAddressById(username, id)
    ctx.body = new SuccessModel(address)
})

// 更新收货地址
router.patch('/:id', async (ctx, next) => {
    // 获取请求参数
    // const { username } = ctx.session.userInfo
    const { username } = ctx.state.user
    const _id = ctx.params.id
    const data = ctx.request.body

    try {
        // controller
        const newAddress = await updateAddress(username, _id, data)
        ctx.body = new SuccessModel(newAddress)
    } catch (ex) {
        console.error(ex);
        ctx.body = new ErrorModel(10005, '用户地址更新失败!')
    }

})

// 删除收货地址
router.delete('/:id', async (ctx, next) => {
    const _id = ctx.params.id
    // const { username } = ctx.session.userInfo
    const { username } = ctx.state.user

    try{
        await deleteAddress(_id,username)
        ctx.body = new SuccessModel()
    }catch(ex){
        console.error(ex);
        ctx.body = new SuccessModel(10007,'删除地址失败')
    }
})

module.exports = router