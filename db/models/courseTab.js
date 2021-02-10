const seq = require('../db_connect'),
      { STRING, INT } = require('../../configs/db_type');

const CourseTab = seq.define('coure_tab', {
  cid: {
  	comment: 'course category ID',
  	type: INT,
  	allowNull: false,
  	unique: true
  },
  title: {
  	comment: 'course tab item title text',
  	type: STRING,
  	allowNull: false
  }
});

module.exports = CourseTab;