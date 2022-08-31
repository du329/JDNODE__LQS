const { Address } = require('../../models/Address')

!(async () => {
    // 创建收货地址
    // const result = await Address.create({
    //     username: 'lqs',
    //     city: '宁德',
    //     department: 'BBB小区',
    //     houseNumber: '05-0603',
    //     name: 'qaqaqa',
    //     phone: '16690011233'
    // })
    // console.log(result);

    // 获取收货地址列表 session.userInfo.username
    // const result = await Address.find({username: 'lqs'}).sort({ createdAt: -1 })
    // console.log(result);

    // 获取单个收货地址
    // const id = '62ecacf687c5a7b3a1f891e6'
    // const result = await Address.findById(id)
    // console.log(result);

    // 更新收货地址
    const id = '62ecacf687c5a7b3a1f891e6';
    const newData = {
        username: 'lqs',
        city: '福州',
        department: 'CCC小区',
        houseNumber: '02-0603',
        name: 'qaqaqa....',
        phone: '16690011233'
    }
    const result = await Address.findOneAndUpdate(
        {
            _id: id,
            username: 'lqs',
        }, newData,
        { new: true } 
        //返回新数据，默认false
    )
    console.log(result);
})()