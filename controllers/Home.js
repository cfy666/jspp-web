const PAGE_CONF = require('../configs/page'),
      navData = require('../configs/nav'),
      { IMG_BASE_URL } = require('../configs/url');

const { getSliderData } = require('../services/Slider'),
      { getRecomCourseData } = require('../services/RecomCourse');

class Home {
  async index (ctx, next) {
    const sliderData = await getSliderData(),
          recomCourseData = await getRecomCourseData();

    await ctx.render('index', {
      PAGE_CONF: PAGE_CONF.INDEX,
      IMG_BASE_URL,
      navData,
      sliderData,
      recomCourseData
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