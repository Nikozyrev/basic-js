const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
    if (!date) return 'Unable to determine the time of year!';
    if (Object.prototype.toString.call(date) !== '[object Date]') {
      throw new Error('Invalid date!');
    }
    try {
      date.getMonth();
    } catch (error) {
      throw new Error('Invalid date!');
    }
    if (date.hasOwnProperty('getMonth')) {
      throw new Error('Invalid date!');
    }
    const month = date.getMonth();
    switch (true) {
      case month >= 0 && month <= 1 || month === 11:
        return 'winter';
      case month >= 2 && month <= 4:
        return 'spring';
      case month >= 5 && month <= 7:
        return 'summer';
      case month >= 8 && month <= 10:
        return 'autumn';
    }
}

module.exports = {
  getSeason
};
