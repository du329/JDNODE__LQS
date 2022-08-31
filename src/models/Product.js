const mongoose = require('../db/db')

const productSchema = mongoose.Schema({
    shopId:{
        type:String,
        required:true
    },
    name:String,
    imgUrl:String,
    sales:Number,
    price:Number,
    oldPrice:Number,
    tabs:[String] // 示例 tabs:['all','seckill']
},{ timestamps: {
    currentTime: () => new Date().getTime() + 28800000
}})

const Product = mongoose.model('product',productSchema)

module.exports = {
    Product
}