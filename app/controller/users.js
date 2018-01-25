exports.index = async function(ctx) {
    ctx.body = await ctx.model.user.find({})
}