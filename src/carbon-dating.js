const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(activity) {
    if (typeof activity !== 'string') {
      return false;
    }
    const sampleActivity = Number(activity);
    if (Number.isNaN(sampleActivity) || sampleActivity <= 0 || sampleActivity >= 15) {
      return false;
    }
    const ln = Math.log(MODERN_ACTIVITY/sampleActivity);
    const k = 0.693 / HALF_LIFE_PERIOD;
    return Math.ceil(ln / k);
}

module.exports = {
  dateSample
};
