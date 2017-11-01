const map = async (array, mapper) => {
  const promises = [];
  for (const [i, value] of array.entries()) {
    promises.push(mapper(value, i, array));
  }

  const results = [];
  for (const promise of promises) {
    results.push(await promise);
  }

  return results;
};

module.exports = map;
