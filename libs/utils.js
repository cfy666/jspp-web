function searchData (data, keyword) {
  return data.filter((item, index) => item.courseName.toLowerCase().includes(keyword.toLowerCase()));
}

module.exports = {
  searchData
}