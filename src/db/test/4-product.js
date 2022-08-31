const { Product } = require('../../models/Product')

!(async () => {

    // 创建商品
    // await Product.create({
    //     shopId: '62f7697493a99dbd9cdd33e0', // 沃尔玛
    //     name: '葡萄',
    //     imgUrl: 'http://localhost:3000/images/product/grape.jpg',
    //     sales: 100, //月售
    //     price: 13, // 当前价格
    //     oldPrice: 16, //原价
    //     tabs: ['all', 'seckill']
    // })

    await Product.create({
        shopId: '62f7697493a99dbd9cdd33e0', // 沃尔玛
        name: '苹果',
        imgUrl: 'http://localhost:3000/images/product/apple.jpeg',
        sales: 200, //月售
        price: 15, // 当前价格
        oldPrice: 17, //原价
        tabs: ['all', 'fruil']
    })

    // await Product.create({
    //     shopId: '62f7697493a99dbd9cdd33e0', // 沃尔玛
    //     name: '桃子',
    //     imgUrl: 'http://localhost:3000/images/product/paech.jpg',
    //     sales: 50, //月售
    //     price: 8, // 当前价格
    //     oldPrice: 10, //原价
    //     tabs: ['all', 'seckill']
    // })

    await Product.create({
        shopId: '62f7697493a99dbd9cdd33e0', // 山姆会员商店
        name: '西瓜',
        imgUrl: 'http://localhost:3000/images/product/watermelon.jpg',
        sales: 180, //月售
        price: 3, // 当前价格
        oldPrice: 15, //原价
        tabs: ['all', 'fruil']
    })

    // await Product.create({
    //     shopId: '62f7697493a99dbd9cdd33e0', // 山姆会员商店
    //     name: '樱桃',
    //     imgUrl: 'http://localhost:3000/images/product/cherry.png',
    //     sales: 140, //月售
    //     price: 33, // 当前价格
    //     oldPrice: 45, //原价
    //     tabs: ['all', 'seckill']
    // })

    // await Product.create({
    //     shopId: '62f7697493a99dbd9cdd33e0', // 山姆会员商店
    //     name: '橙子',
    //     imgUrl: 'http://localhost:3000/images/product/orange.jpg',
    //     sales: 110, //月售
    //     price: 11, // 当前价格
    //     oldPrice: 17, //原价
    //     tabs: ['all', 'fruil']
    // })

    // await Product.create({
    //     shopId: '62f7697493a99dbd9cdd33e0', // 山姆会员商店
    //     name: '小西红柿',
    //     imgUrl: 'http://localhost:3000/images/product/tomato.jpg',
    //     sales: 120, //月售
    //     price: 10, // 当前价格
    //     oldPrice: 18, //原价
    //     tabs: ['all', 'seckill']
    // })

    // 查询某个商店的商品列表
    // const id = '62f7697493a99dbd9cdd33e0';
    // const result = await Product.find({
    //     shopId: id,
    //     tabs: {
    //         $in: 'all'
    //     }
    // })
    // console.log(result);

})()