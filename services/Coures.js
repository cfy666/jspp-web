const CourseModel = require('../db/models/course');

class CourseService {
  async getCollectionCourseData (idList) {
    return await CourseModel.findAll({
      raw: true,
      where: {
        cid: idList
      },
      attributes: {
        exclude: ['cid', 'posterUrl', 'field', 'createdAt', 'updatedAt']
      }
    })
  }
}

module.exports = new CourseService();