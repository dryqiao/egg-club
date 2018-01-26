const Service = require('egg').Service

class UserService extends Service {
    create = async req =>{
        console.log(req)
        let arr = await this.ctx.model.Users.find({username: req.username})
        let result = {}
        if(arr.length === 0) {
            result = await this.ctx.model.Users.create(req)
        }else {
            result = '用户名已存在！'
        }
        return result
    }
}
module.exports = UserService