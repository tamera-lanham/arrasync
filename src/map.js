const map = async (array, mapper) => {
  const promises = [];
  for (const value of array) {
    promises.push(mapper(value));
  }

  const results = [];
  for (const promise of promises) {
    results.push(await promise);
  }

  return results;
};

module.exports = map;
