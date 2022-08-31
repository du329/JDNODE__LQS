const mongoose = require('../db/db')
const { Product } = require('./Product')

const orderSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    shopId: String,
    shopName: String,
    isCanceled: {
        type: Boolean,
        default: false,
    },
    address: {
        username: {
            type: String,
            required: true
        },
        city: String,
        department: String,
        houseNumber: String,
        name: String, // 收货人
        phone: String,
    },
    products: [
        {
            product: {
                shopId: {
                    type: String,
                    required: true
                },
                name: String,
                imgUrl: String,
                sales: Number,
                price: Number,
                oldPrice: Number,
                tabs: [String]
            },
            orderSales: Number
        }
    ]
}, {
    timestamps: {
        currentTime: () => new Date().getTime() + 28800000
    }
})

const Order = mongoose.model('order', orderSchema)

module.exports = {
    Order
}
