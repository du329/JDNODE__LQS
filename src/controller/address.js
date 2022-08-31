const { Address } = require('../models/Address')

/**
 * 创建收货地址
 * @param {string} username 用户名 
 * @param {object} data 地址详细信息
 * @returns 
 */

const createAddress = async (username, data) => {
    const newAddress = await Address.create({
        username,
        ...data
    })
    return newAddress
}

/**
 * 获取收货地址列表
 * @param {string} username 用户名
 */
const getAddressList = async (username) => {
    const addressList = await Address.find({ username })
    return addressList
}

/**
 * 获取单个收货地址
 * @param {string} id 地址id  
 */
const getAddressById = async (username, id) => {
    // const address = await Address.findById(id)
    const address = await Address.findOne({
        username, _id: id
    })
    return address
}

/**
 * 更新收货地址
 * @param {string} username 用户名
 * @param {string} id 地址id
 * @param {object} data 新的地址信息
 
 */
const updateAddress = async (username, _id, data) => {
    const newAddress = await Address.findOneAndUpdate({
        username, _id
    }, {
        ...data
    }, {
        new: true
    })
    return newAddress
}

/**
 * 删除收货地址
 * @param {string} id 地址id 
 */
const deleteAddress = async (_id, username) => {
    const result = await Address.deleteOne({ _id, username })
    console.log(result);
}

module.exports = {
    createAddress,
    getAddressList,
    getAddressById,
    updateAddress,
    deleteAddress
}