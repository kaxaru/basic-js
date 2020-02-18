module.exports = function countCats(matrix) {
  return matrix.map(arr => arr.filter((el) => el=='^^').length).reduce((a,b)=> a+b, 0)
};
