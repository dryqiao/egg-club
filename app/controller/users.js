'use strict'

const Controller = require('./base')

class SessionController extends Controller {
    async index() {
        const { ctx, service } = this
        const result = await service.users.index(ctx.request.body)
        this.success(result)
      }
  async create() {
     const { ctx, service } = this
        const result = await service.users.create(ctx.request.body)
        result === 1 ? this.success(result) : this.fail('fail')
    }
}

module.exports = SessionController
