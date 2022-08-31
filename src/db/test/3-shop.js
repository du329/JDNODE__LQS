const { Shop } = require('../../models/Shop')
// const { Product } = require('../models/Product')

!(async () => {
    // 创建商店
    // await Shop.create({
    //     name: '京东7FRESH生鲜',
    //     imgUrl: 'http://localhost:3000/images/shop/jd.png',
    //     sales: 10000, // 月售
    //     expressLimit: 0, // 起送价格
    //     expressPrice: 0, // 快递价格
    //     slogan: 'VIP 遵循满 98 元 减 4 元运费卷(每月三张)',
    // })

    // await Shop.create({
    //     name: '百果园',
    //     imgUrl: 'http://localhost:3000/images/shop/bgy.png',
    //     sales: 8000, // 月售
    //     expressLimit: 0, // 起送价格
    //     expressPrice: 0, // 快递价格
    //     slogan: 'VIP 遵循满 198 元 减 24 元运费卷(每月三张)',
    // })

    // 获取商店列表
    // const result = await Shop.find()
    // console.log(result);

    // 获取某个商店
    // const id = '62ece975da9c2726a4969ba5'
    // const result = await Shop.findById(id)
    // console.log(result);

    // * 获取搜索列表 商店 + 商品列表
    const id = '62ece975da9c2726a4969ba5';
    const shop = await Shop.findById(id)
    // const productList = await Product.find({ shopId: shop._id })
    console.log(shop);
    // console.log(productList);
})()