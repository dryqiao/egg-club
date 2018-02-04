const Service = require('egg').Service

class SessionService extends Service {
    async create (req) {
        let password = await this.service.users.show(req)
        if(req.password === password) {
            console.log('yes')
            return {
                c:1,
                data: '登录成功'
            }
        }else {
            console.log('no')
            
            return {
                c: 0,
                data :'登录失败'
            }
        }
    }
}
module.exports = SessionService