'use strict';

const Controller = require('./base')

class SessionController extends Controller {
    async index() {
        this.ctx.body = 'hi, egg';
    }
    async create() {
        const {ctx , service} = this
        let result = await service.posts.create(ctx.request.body)
        this.success(result._id)
    }
    async destroy() {

    }
}

module.exports = SessionController
 