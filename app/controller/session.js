'use strict';

const Controller = require('egg').Controller

class SessionController extends Controller {
    async index() {
        this.ctx.body = 'hi, egg';
      }
  async create() {
      let result = await this.ctx.service.session.create(this.ctx.request.body)
      this.ctx.body = result
      this.ctx.status = 200
    }
}

module.exports = SessionController
