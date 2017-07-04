function getMatrix (n) {

  var smallArr = []
  for (var i = 0; i < n; i++) {
    smallArr.push(0)
  }

  var Arr = []
  for (var i = 0; i < n; i++) {
    Arr.push(smallArr)
  }
    return Arr
}




function updateMatrix (matrix, coords, value) {
}


module.exports = {
  getMatrix: getMatrix,
  updateMatrix: updateMatrix
}
