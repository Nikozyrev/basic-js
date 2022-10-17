const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const resultArr = [];

  const countDigits = String(n).split('').length;

  for (let i = 0; i < countDigits; i++) {
    const numArr = String(n).split('');
    numArr.splice(i, 1);
    resultArr.push(Number(numArr.join('')))
  }

  return Math.max(...resultArr);

}

console.log(deleteDigit(135));

module.exports = {
  deleteDigit
};
