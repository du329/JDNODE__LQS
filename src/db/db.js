/**
* @description mongoose 连接数据库
* @author lqs
*/ 

const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017'
const dbName = 'testdb'

// 开始连接
mongoose.connect(`${url}/${dbName}`, {
    useNewUrlParser: true, //url解析器
    useUnifiedTopology: true //统一拓扑
})

// 连接成功
mongoose.connection.on('error',() => {
    console.error('mongoose连接成功');
})

// 连接失败
mongoose.connection.on('error',err => {
    console.error('mongoose连接出错',err);
})

// 连接断开
// mongoose.connection.on('disconnection',() => {
//     console.error('mongoose连接断开');
// })

// common.js语法
module.exports = mongoose 