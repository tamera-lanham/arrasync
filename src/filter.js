const {zip} = require('./zip');

/**		
  * Filter an array based on a true/false test.
  *		
  * @function filter	
  * @param {Array} array - The array to be filtered	
  * @param {function(value, i, array)} func - A function that returns true on a
  * value to be included in the filtered array, and returns false on a value 
  * that shouldn't be included. Optionally can take the index of each value and 
  * the array being filtered as arguments.
*/
const filter = async (array, func) => {
  const promises = [];
  for (const [i, value] of array.entries()) {
    promises.push(func(value, i, array));
  }

  const results = [];
  for (const [value, promise] of await zip(array, promises)) {
    if (await promise) {
      results.push(value);
    }
  }

  return results;
};

module.exports = {filter};
