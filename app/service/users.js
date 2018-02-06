const Service = require('egg').Service
const bcrypt = require('bcrypt')
const saltRounds = 10
class UserService extends Service {
    async index(req) {
        //返回用户名数组
        let users = await this.ctx.model.Users.find(req)
        return users.map(user => user.username)
    }
    async findPswd(req) {
        let data = await this.ctx.model.Users.findOne({
            username: req.username
        })
        console.log('find password',data)
        return data.password
    }
    
    async create(req) {
        //加密
        await this.addHash(req.password).then(res => {
            req.password = res
        })
        let arr = await this.ctx.model.Users.find({
            username: req.username
        })
        if (arr.length === 0) {
            let result = await this.ctx.model.Users.create(req)
            return 1
        } else {
            return 0
        }
    }
    async addHash(needHashData) {
        return new Promise((resolve,reject) => {
            bcrypt.hash(needHashData, saltRounds).then( hash => {
                resolve(hash)
            }).catch(err => {
                reject(err)
            })
        })
    }
    async compare(passw,hash) {
        //比较密码
        return new Promise((resolve,reject) => {
            console.log(passw,hash)
            bcrypt.compare(passw,hash).then(res => {
                console.log(res)
                resolve(res)
            }).catch(err=>reject(res))
        })
    }
}
module.exports = UserService
