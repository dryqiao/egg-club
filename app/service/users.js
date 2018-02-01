const Service = require('egg').Service

class UserService extends Service {
    async index(req) {
        console.log(req)
        let users = await this.ctx.model.Users.find(req)
        return {
            c: 1,
            data: users.map(user => user.username)
        }
    }
    async create(req) {
        let arr = await this.ctx.model.Users.find({
            username: req.username
        })
        if (arr.length === 0) {
            let result = await this.ctx.model.Users.create(req)
            return {
                c: 1,
                data: '注册成功'
            }
        } else {
            return {
                c: 0,
                data: '用户名已存在'
            }
        }
    }
}
module.exports = UserService
