const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    const string = `${str}`;
    const repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
    const separator = options.separator ? options.separator : '+';
    const addition = options.hasOwnProperty('addition') ? (`${options.addition}` ) : '';
    const additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
    const additionSeparator = options.additionSeparator ? options.additionSeparator : '|';

    function repeatStr(str, repeatTimes, separator) {
        let result = str;
        for (let i = 0; i < repeatTimes - 1; i++) {
            result = result + separator + str; 
        }
        return result;
    }

    const repeatedAddition = repeatStr(addition, additionRepeatTimes, additionSeparator);
    const stringWithAddition = string + repeatedAddition;
    return repeatStr(stringWithAddition, repeatTimes, separator);
}

module.exports = {
  repeater
};
