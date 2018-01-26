exports.create = async function(ctx) {
    // ctx.body = await ctx.model.Users.create({
    //     username: 'sysadmin',
    //     password: '1234'
    // })
    const result = await ctx.services.users.create(ctx.request.body)
    ctx.body = result
    ctx.status = 200
}