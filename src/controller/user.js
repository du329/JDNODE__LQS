const jwt = require('jsonwebtoken')
const { User } = require('../models/User')

/**
 * 注册
 * @param {string} username 用户名
 * @param {string} password 密码
 */
const register = async (username, password) => {
    const newUser = await User.create({ username, password })
    return newUser
}
/**
 * 登录
 * @param {string} username 用户名
 * @param {string} password 密码
 */
const login = async (username, password) => {
    // await 操作数据库等待操作结果返回
    const user = await User.findOne({
        username,
        password
    })
    if (user) {
        const { username } = user;
        // 签发token 载体(userInfo)、密钥、过期时间
        const secret = 'my_app_secret';
        const token = jwt.sign({ username }, secret, { expiresIn: '1h' })
        return token
    }
    return false
}

module.exports = {
    register,
    login
}