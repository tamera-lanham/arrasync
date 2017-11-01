const reduce = require('./reduce');

const flatten = async array => {
  return reduce(
    array,
    async (accumulator, value, i, array) => {
      accumulator.push(...value);
      return accumulator;
    },
    []
  );
};

const newFlatten = array => {
  const results = [];
  for (const value of array) {
    if (!Array.isArray(value)) {
      results.push(value);
    } else {
      results.push(...newFlatten(value));
    }
  }
  return results;
};

module.exports = {flatten, newFlatten};
