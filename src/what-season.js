const season = ['winter', 'spring', 'summer', 'autumn']

module.exports = function getSeason(date) {
    if (date === undefined) {
      return 'Unable to determine the time of year!'
    }

    if (typeof(date) !== 'object') {
      throw error
    }

    if (!({}.toString.call(date) === '[object Date]')) {
      throw error
    }

  const month = (date.getMonth() + 1) == 12 ? 1 : date.getMonth() + 1
  const seasonNumber = Math.floor(month/3) 

  return seasonNumber == 4 ? season[seasonNumber - 1] : season[seasonNumber]
};
