const map = require('./map');

/**
 * Takes multiple arrays and returns an array of sub-arrays, where the first 
 * sub-array holds the first element from each of the input arrays, the second
 * sub-array holds the second element from each of the input arrays, and so on. 
 * Input arrays must have equal length.
 * 
 * @param {...Array} arrays - arrays to be zipped
 * 
 * @returns {Array} - zipped arrays
 */
const zip = async (...arrays) => {
  for (const array of arrays) {
    if (array.length !== arrays[0].length) {
      throw new Error('Cannot zip arrays of unequal length');
    }
  }

  return map(arrays[0], async (value, i) => {
    return map(arrays, arr => arr[i]);
  });
};

/**
 * Does the reverse of zip, equivalent to zip(...array).
 * 
 * @param {Array} array - array to be unzipped
 * 
 * @returns {Array} - unzipped arrays
 */
const unzip = async array => {
  return zip(...array);
};

module.exports = {zip, unzip};
