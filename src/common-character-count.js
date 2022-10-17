const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
    const s1Arr = s1.split('').sort();
    const s2Arr = s2.split('').sort();
    
    const minArr = s1Arr.length > s2Arr.length ? s2Arr : s1Arr;
    const maxArr = minArr === s1Arr ? s2Arr : s1Arr;
    let result = 0;

    for (let el of minArr) {
      if (maxArr.find(e => e === el)) {
        result++;
        maxArr.splice(maxArr.findIndex(e => e === el), 1);
      }
    }

    return result;
}

module.exports = {
  getCommonCharacterCount
};
