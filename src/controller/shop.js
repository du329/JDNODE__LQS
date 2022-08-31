const { Shop } = require('../models/Shop')
const { Product } = require('../models/Product')
const { HotWord } = require('../models/HotWord')

/**
 * 附近热门店铺
 */
const getHotShopList = async () => {
    const hotShopList = await Shop.find()
    return hotShopList
}

/**
 * 获取某个商店
 * @param {string} id 
 * @returns 
 */
const getShopById = async (id) => {
    const shop = await Shop.findById(id)
    return shop
}

/**
 * 获取某个商店的商品列表
 * @param {string} id 商店id
 * @param {string} tab tab
 * @returns 
 */
const getProductList = async (id, tab = 'all') => {
    const productList = await Product.find({
        shopId: id,
        tabs: {
            $in: tab
        }
    })
    return productList
}

/**
 * 获取搜索列表 商店 + 商品列表
 * @param {string} keyword 搜索关键字
 */
const getSearchList = async (keyword) => {

    const SearchList = []

    // 关键字 => 相关商店列表及商品列表
    const ProductList = await Product.find({ name: keyword })
    const shopIdList = ProductList.map(product => product.shopId)

    // 商店列表
    const shopList = await Shop.find({
        _id: {
            $in: shopIdList
        }
    })
    // 商品列表
    const productList = await Product.find({
        shopId: {
            $in: shopIdList
        }
    })
    // 拼接
    shopIdList.map(shopId => {
        const shop = shopList.filter(shop => shop._id.toString() === shopId)
        const [{ _id, name, imgUrl, sales, expressLimit, expressPrice, slogan }] = shop
        let cnt = 0;
        const products = productList.filter(product => {
            if( cnt >= 3) return false
            if (product.shopId === shopId) {
                cnt += 1;
                return true
            }

        })
        SearchList.push({ _id, name, imgUrl, sales, expressLimit, expressPrice, slogan, products })
    });
    return SearchList
}

/**
 * 创建热搜词列表
 * @param {string} hotword 热搜词
 */
const createHotWordList = async (hotWord) => {
    const newHotWord = await HotWord.create({ hotWord })
    return newHotWord
}

/**
 *  获取热搜词
 * @returns 
 */
const getHotWordList = async () => {
    const hotWordList = await HotWord.find({}).sort({ _id: -1 })
    return hotWordList
}

module.exports = {
    getHotShopList,
    getShopById,
    getProductList,
    getSearchList,
    createHotWordList,
    getHotWordList
}