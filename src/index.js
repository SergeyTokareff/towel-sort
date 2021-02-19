
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix.length === 0) {
    return [];
  }

  let newArr = matrix.map(function(item, index) {
    if (index % 2 !== 0) {
        return item.reverse();
    }
    return item;
  });

  let resArr = [];
  for (let i = 0; i < newArr.length; i++) {
      for (let j = 0; j < newArr[i].length; j++) {
          resArr.push(newArr[i][j]);
      }        
  }
  return resArr;
}

