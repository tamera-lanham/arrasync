const reduce = require('./reduce');

const flatten = async array => {
  const results = await reduce(
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
  return results;
};

module.exports = {flatten};
