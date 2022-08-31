/**
 * @description 成功返回的数据模型
 */

class SuccessModel{
    constructor(data,token){
        this.errno = 0 // 成功
        if(data != null){
            this.data = data
        }
        if(token != ''){
            this.token = token
        }
    }
}

module.exports = SuccessModel