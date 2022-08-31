const { Order } = require('../models/Order')
const { Address } = require('../models/Address')
const { Product } = require('../models/Product')

/**
 * 创建订单
 * @param {string} username 用户名
 * @param {object} data 请求参数 
 */
const createOrder = async (username,data) => {
    const {
        addressId,
        shopId,
        shopName,
        isCanceled,
    } = data
    // 获取地址信息
    const address = await Address.findById(addressId)

    // 获取商品列表信息并拼接
    const pIds = data.products.map(p => p.id);
    const productList = await Product.find({
        _id: {
            $in: pIds
        }
    })
    const products = productList.map(p => {
        const id = p._id.toString()
        const filterProduct = data.products.filter(p => p.id === id)
        if (filterProduct.length === 0) {
            throw Error('未过滤到对应商品!')
        }
        return {
            product: p,
            orderSales: filterProduct[0].num
        }
    })
    const newOrder = await Order.create({
        username,
        shopId,
        shopName,
        isCanceled,
        address,
        products
    })
    return newOrder
}

/**
 * 获取订单列表
 * @param {string} username 用户名
 */
const getOrderList = async (username) => {
    const orderList = await Order.find({ username }).sort({ createAt: -1 })
    return orderList
}

module.exports = {
    createOrder,
    getOrderList
}