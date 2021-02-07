const PAGE_CONF = require('../configs/page');

class Home {
  async index (ctx, next) {
    await ctx.render('index', {
      title: '首页',
      PAGE_CONF: PAGE_CONF.INDEX
    })
  }

  async list (ctx, next) {
    await ctx.render('list', {
      title: '列表页',
      PAGE_CONF: PAGE_CONF.LIST
    })
  }

  async error (ctx, next) {
    await ctx.render('error', {
      title: '错误页面',
      PAGE_CONF: PAGE_CONF.ERROR
    })
  }
}

module.exports = new Home();