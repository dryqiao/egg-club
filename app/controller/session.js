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
    async destroy() {
        const {ctx, service} = this
        let result = await service.session.destroy(ctx.params.id)
        console.log('result',result)
        result === 1 ? this.success() : this.fail()

    }
}

module.exports = SessionController
 