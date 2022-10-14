const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
    if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`);
    const controls = {
      discard_next: "--discard-next",
      discard_prev: "--discard-prev",
      double_next: "--double-next",
      double_prev: "--double-prev",
    }
    const controlsValues = Object.values(controls);
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (controlsValues.find(el => el === arr[i])) {
            if (arr[i] === controls.discard_next) {
                arr.splice(i+1, 1);
            }
            if (arr[i] === controls.discard_prev) {
                if (!controlsValues.find(el => el === arr[i-1])) result.pop();
            }
            if (arr[i] === controls.double_next) {
                arr[i+1] ? result.push(arr[i+1]) : false;
            }
            if (arr[i] === controls.double_prev) {
                if (arr[i-1] && !controlsValues.find(el => el === arr[i-1])) {
                  result.push(arr[i-1])
                }
            }
        }
        if (!controlsValues.find(el => el === arr[i])) {
          result.push(arr[i]);
        }
    }
    return result;
}

module.exports = {
  transform
};
