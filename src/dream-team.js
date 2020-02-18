module.exports = function createDreamTeam(arr) {
  return Array.isArray(arr) ? arr
                              .filter(el => typeof(el) == 'string')
                              .map(el => el.split(' ')
                              .filter(el => el.length > 0).map(el => el.toUpperCase()).join(" "))
                              .sort().map(el => [...el][0].toUpperCase())
                              .join("") 
                              : false
};