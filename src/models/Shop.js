const mongoose = require('../db/db')

const shopSchema = mongoose.Schema({
    name: String,
    imgUrl: String,
    sales: Number,
    expressLimit: { // 起送价格
        type: Number,
        default: 0
    },
    expressPrice: Number, // 快递价格
    slogan: String
}, {
    timestamps: {
        currentTime: () => new Date().getTime() + 28800000
    }
})

const Shop = mongoose.model('shop', shopSchema)

module.exports = {
    Shop
}