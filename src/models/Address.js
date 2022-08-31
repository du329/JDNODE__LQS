const mongoose = require('../db/db')

const addressSchema = mongoose.Schema({
    // 用户名 唯一
    username: {
        type: String,
        required: true
    },
    city: String,
    department: String,
    houseNumber: String,
    name: String, // 收货人
    phone: String,
}, {
    timestamps: {
        currentTime: () => new Date().getTime() + 28800000
    }
})

const Address = mongoose.model('address', addressSchema);

module.exports = {
    Address
}