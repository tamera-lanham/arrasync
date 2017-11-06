const {zip} = require('./zip');

const filter = async (array, func) => {
  const promises = [];
  for (const value of array) {
    promises.push(func(value));
  }

  const results = [];
  for (const [value, promise] of await zip(array, promises)) {
    if (await promise) {
      results.push(value);
    }
  }

  return results;
};

module.exports = filter;
