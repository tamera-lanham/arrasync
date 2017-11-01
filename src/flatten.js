const reduce = require('./reduce');

const flatten = array => {
  const results = [];
  for (const value of array) {
    if (!Array.isArray(value)) {
      results.push(value);
    } else {
      results.push(...flatten(value));
    }
  }
  return results;
};

module.exports = {flatten};
