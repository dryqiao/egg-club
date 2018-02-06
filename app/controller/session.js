'use strict';

const Controller = require('./base')

class SessionController extends Controller {
    async index() {
        this.ctx.body = 'hi, egg';
    }
    async create() {
        const {ctx , service} = this
        let result = await service.session.create(ctx.request.body)
        result === 1 ? this.success() :this.fail('fail')
    }
}

module.exports = SessionController
