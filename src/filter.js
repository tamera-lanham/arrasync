const zip = require('./zip');

const filter = async (array, filter) => {
  const promises = [];
  for (const value of array) {
    promises.push(filter(value));
  }

  const results = [];
  for (const [value, promise] of zip(array, promises)) {
    if (await promise) {
      results.push(value);
    }
  }

  return results;
};

module.exports = filter;
