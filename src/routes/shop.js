const router = require('koa-router')()
const { SuccessModel, ErrorModel } = require('../response-model/index')
const {
    getHotShopList,
    getShopById,
    getProductList,
    getSearchList,
    createHotWordList,
    getHotWordList,
} = require('../controller/shop')

router.prefix('/api/shop')

// 附近热门店铺
router.get('/hot-list', async (ctx, next) => {
    const shopList = await getHotShopList()
    ctx.body = new SuccessModel(shopList)
})

// 获取某个店铺
router.get('/:id', async (ctx, next) => {
    const id = ctx.params.id
    const shop = await getShopById(id)
    ctx.body = new SuccessModel(shop)
})

// 获取某个店铺的商品列表
router.get('/:id/products', async (ctx, next) => {
    const id = ctx.params.id
    const tab = ctx.query.tab || 'all'
    const productList = await getProductList(id, tab)

    ctx.body = new SuccessModel(productList)
})

// 获取搜索列表 商店+商品列表
router.post('/search/search-list', async (ctx, next) => {
    const { keyword } = ctx.request.body
    const searchList = await getSearchList(keyword)
    ctx.body = new SuccessModel(searchList)
})

// 存入 热搜词
router.post('/search/hot-words', async (ctx, next) => {
    const { hotWord } = ctx.request.body
    try {
        const newHotWord = await createHotWordList(hotWord)
        ctx.body = new SuccessModel(newHotWord)
    } catch (ex) {
        console.error(ex);
        ctx.body = new ErrorModel(10009, '存入热搜词失败')
    }
})

// 获取 热搜词
router.get('/search/hot-words',async (ctx, next) => {
    const hotWordList = await getHotWordList()
    ctx.body = new SuccessModel(hotWordList)
})


module.exports = router