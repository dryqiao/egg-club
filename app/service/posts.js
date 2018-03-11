const Service = require('egg').Service
const bcrypt = require('bcrypt')
const saltRounds = 10
class UserService extends Service {
    async create(req) {
        let result = await this.ctx.model.Posts.create(req)
        return result
    }
}
module.exports = UserService
