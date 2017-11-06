const {zip} = require('./zip');

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

module.exports = filter;
