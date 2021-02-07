class Home {
  async index (ctx, next) {
    await ctx.render('index', {
      title: '首页'
    })
  }

  async list (ctx, next) {
    await ctx.render('list', {
      title: '列表页'
    })
  }

  async error (ctx, next) {
    await ctx.render('error', {
      title: '错误页面'
    })
  }
}

module.exports = new Home();