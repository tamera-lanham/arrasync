/**		
  * Applies a function against an accumulator and each element in the array 
  * (from left to right) to reduce it to a single value.
  *		
  * @function reduce
  * @param {Array} array - The array to be reduced	
  * @param {function(accumulator, value, i, array)} func - The function to 
  * execute on each value of array, which returns the new value of accumulator
  * at each step. Optionally can take the index of each value and the array 
  * being reduced as arguments.
  * @param accumulator - Accumulates the values returned by func
*/
const reduce = async (array, func, accumlator) => {
  for (const [i, value] of array.entries()) {
    accumlator = await func(accumlator, value, i, array);
  }

  return accumlator;
};

module.exports = {reduce};
