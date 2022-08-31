const mongoose = require('../db/db')

const hotWordSchema = mongoose.Schema({
    // 用户名 唯一
    hotWord: {
        type: String,
        unique: true, // 唯一
        required: true,
    },
}, {
    timestamps: {
        currentTime: () => new Date().getTime() + 28800000
    }
})

const HotWord = mongoose.model('hotword', hotWordSchema);

module.exports = {
    HotWord
}