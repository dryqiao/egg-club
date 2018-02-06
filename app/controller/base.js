const {
    Controller
} = require('egg')

class BaseController extends Controller {
    success(data) {
        this.ctx.body = {
            c: 1,
            data: data
        }
        this.ctx.status = 200
    }
    fail(data) {
        this.ctx.body = {
            c: 0,
            data: data
        }
    }
}
module.exports = BaseController
