exports.info = async ctx => {
  ctx.body = `user: ${ctx.params.id}, ${ctx.params.name}`
}