const sliderModel = require('../db/models/slider');

class SliderService {
  async getSliderData () {
    return await sliderModel.findAll({
      where: { status: 1 },
      attributes: {
        exclude: ['cid', 'imgUrl', 'createdAt', 'updatedAt']
      }
    })
  }
}

module.exports = new SliderService();