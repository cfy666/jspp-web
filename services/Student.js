const StudentModel = require('../db/models/student');

class StudentService {
  async getGoodStudentData () {
    return await StudentModel.findAll({
      where: { status: 1},
      attributes: {
        exclude: ['sid', 'createdAt', 'updatedAt', 'studentImg']
      }
    });
  }
}

module.exports = new StudentService();