const reduce = require('./reduce');

/**
 * Given an arbirarily nested array, returns a flat array (no nesting) with 
 * order preserved.
 *  
 * @param {Array} array - nested array
 * 
 * @returns {Array} - flattened array
 */
const flatten = async array => {
  return reduce(
    array,
    async (acc, value) => {
      if (!Array.isArray(value)) {
        acc.push(value);
      } else {
        const flattenedArray = await flatten(value);
        acc.push(...flattenedArray);
      }
      return acc;
    },
    []
  );
};

module.exports = {flatten};
