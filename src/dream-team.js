const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
    if (!Array.isArray(members)) return false;
    const resultArr = [];
    members.forEach((el) => {
        if (typeof el === 'string') {
            resultArr.push(el.trim()[0].toUpperCase());
        }
      }
    )
    return resultArr.sort().join('');
}

console.log(createDreamTeam([' matt', 'Ann', 'Dmitry', 'Max']));
console.log(createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]));

module.exports = {
  createDreamTeam
};
