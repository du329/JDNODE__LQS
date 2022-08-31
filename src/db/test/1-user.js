const { User } = require('../../models/User')

!(async () => {

    // 注册-创建用户
    // await User.create({
    //     username: '18350300488',
    //     password: '188155'
    // })
    // console.log(result);

    // 获取用户信息
    const getUserInfo = await User.findOne({
        username: 'lqs',
        password: '191329'
    })
    console.log(getUserInfo);
})()