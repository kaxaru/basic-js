const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sample) {
  let time = typeof(sample) == 'string' ? Number.isNaN(+parseFloat(sample)) ? false : Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sample)) / (0.693 / HALF_LIFE_PERIOD)) : false
  return time > 0 && Number.isFinite(time) ? time : false
};
