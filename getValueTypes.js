function getValueTypes (obj) {
  var newArray = []
  for(key in obj) {
    newArray.push(typeof obj[key])
  }
  return newArray
}

module.exports = getValueTypes
