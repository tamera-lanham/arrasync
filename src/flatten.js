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

module.exports = flatten;
