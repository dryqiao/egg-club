exports.index = async function (ctx) {
    const result = await ctx.service.users.index(ctx.request.body)
    ctx.body = result
    ctx.status = 200
  }
exports.create = async function(ctx) {
    const result = await ctx.service.users.create(ctx.request.body)
    ctx.body = result
    ctx.status = 200
}