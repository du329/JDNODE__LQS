const { Order } = require('../../models/Order')
const { Address } = require('../../models/Address')
const { Product } = require('../../models/Product')

!(async () => {
    // 请求参数
    const requestBody = {
        username: 'lqs',
        addressId: '62ecacf687c5a7b3a1f891e6',
        shopId: '62ece975da9c2726a4969ba8',
        shopName: '山姆会员商店',
        isCanceled: false,
        products: [
            {
                id: '62ef12517a1b8d606487d466',
                num: 5 // 购买数量
            },
            {
                id: '62ef12517a1b8d606487d468',
                num: 10
            }
        ]
    }
    const { username, shopId, shopName, isCanceled } = requestBody

    // 获取地址信息
    const address = await Address.findById(requestBody.addressId)

    // 获取购买商品信息
    const pIds = requestBody.products.map(p => p.id) // 筛出id
    const productList = await Product.find({  // 查找商品列表
        shopId,
        _id: {
            $in: pIds,
        }
    })

    const products = productList.map(p => {  // 添加商品数量
        const id = p._id.toString()
        // 请求数据 - 对应商品数量
        const prodcut = requestBody.products.filter(p => p.id === id)
        if (prodcut.length === 0) {
            throw Error('未过滤到对应商品')
        }
        return {
            product: p,
            orderSales: prodcut[0].num
        }
    })

    const order = await Order.create({
        username,
        shopId,
        shopName,
        isCanceled,
        address,
        products
    })
    console.log(order);
})()