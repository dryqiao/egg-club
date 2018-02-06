const Service = require('egg').Service

class SessionService extends Service {
    async create(req) {
        let password = await this.service.users.findPswd(req)
        await this.service.users.compare(req.password, password).then(res => {
            if (res) {
                console.log(123)
                return 1
            } else {
                console.log(234)
                return 0
            }
        })
    }
}
module.exports = SessionService
