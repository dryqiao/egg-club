'use strict';

const Controller = require('./base')

class SessionController extends Controller {
    async index() {
        this.ctx.body = 'hi, egg';
    }
    async create() {
        const {ctx , service} = this
        let result = await service.session.create(ctx.request.body)
        result === 0 ? this.fail('fail') :this.success(result)
    }
}

module.exports = SessionController
 