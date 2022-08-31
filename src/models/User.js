// User Model
const mongoose = require('../db/db');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true, // 必须
        unique: true, // 唯一
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: {
        currentTime: () => new Date().getTime() + 28800000
    }
}) //时间戳

const User = mongoose.model('user', userSchema);

module.exports = {
    User
}