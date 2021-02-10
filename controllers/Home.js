const PAGE_CONF = require('../configs/page'),
      navData = require('../configs/nav'),
      linkData = require('../configs/link'),
      manualData = require('../configs/manual'),
      { infomation } = require('../configs/qr'),
      { IMG_BASE_URL } = require('../configs/url'),
      { searchData } = require('../libs/utils');

const { getSliderData } = require('../services/Slider'),
      { getRecomCourseData } = require('../services/RecomCourse'),
      { getCollectinData } = require('../services/Collection'),
      { getStarTeacherData } = require('../services/Teacher'),
      { getGoodStudentData } = require('../services/Student'),
      { getCourseCategory } = require('../services/CourseTab'),
      { getCourseData } = require('../services/Coures');

class Home {
  async index (ctx, next) {
    const sliderData = await getSliderData(),
          recomCourseData = await getRecomCourseData(),
          collectionData = await Promise.all(await getCollectinData()),
          starTeacherData = await getStarTeacherData(),
          goodStudentData = await getGoodStudentData();

    await ctx.render('index', {
      PAGE_CONF: PAGE_CONF.INDEX,
      IMG_BASE_URL,
      qrInfomation: infomation,
      navData,
      sliderData,
      recomCourseData,
      collectionData,
      starTeacherData,
      goodStudentData,
      linkData,
      manualData
    })
  }

  async list (ctx, next) {
    const keyword = ctx.params.kw,
          courseTabData = await getCourseCategory(),
          courseData = await getCourseData();

    await ctx.render('list', {
      PAGE_CONF: PAGE_CONF.LIST,
      IMG_BASE_URL,
      qrInfomation: infomation,
      navData,
      linkData,
      manualData,
      courseTabData,
      courseData: keyword ? searchData(courseData, keyword) : courseData,
      courseDataStr: JSON.stringify(courseData)
    });
  }

  async error (ctx, next) {
    await ctx.render('error', {
      title: '错误页面',
      PAGE_CONF: PAGE_CONF.ERROR
    })
  }
}

module.exports = new Home();