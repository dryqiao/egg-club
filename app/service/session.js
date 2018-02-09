const Service = require('egg').Service
const jwt = require('jsonwebtoken')
const moment = require('moment')
const secretOrPrivateKey = "clot!"

class SessionService extends Service {
    async create(req) {
        let password = await this.service.users.findPswd(req),
            result = ''
        await this.service.users.compare(req.password, password).then(res => {
            if (res) {
                
                let token = this.getToken({
                    username: req.username
                })
                result = {
                    token:token
                }
                let aa = this.app.redis.set(req.username,token)
                //获取redis中的token
                this.app.redis.get(req.username).then(result => {
                    console.log(result)
                })
            } else {
                result = 0
            }
        })
        return result
    }
    getToken(payload) {
        return jwt.sign(payload, secretOrPrivateKey, {
            expiresIn: 60
        })
    }
}
module.exports = SessionService
