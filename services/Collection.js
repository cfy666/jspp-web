const CollectionModel = require('../db/models/collection'),
      { getCollectionCourseData } = require('./Coures');

class CollectionService {
  async getCollectinData () {
    const result = await CollectionModel.findAll({
      raw: true,
      where: { status: 1 },
      attributes: {
        exclude: ['cid', 'createdAt', 'updatedAt']
      }
    })

    return result.map(async (item) => {
      item.courseIdList = item.courseIdList.split(',').map(item => Number(item));
      item.courseDataList = await getCollectionCourseData(item.courseIdList);
      return item;
    });
  }
}

module.exports = new CollectionService();