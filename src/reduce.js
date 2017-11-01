const reduce = async (array, reducer, accumlator) => {
  for (const [i, value] of array.entries()) {
    accumlator = await reducer(accumlator, value, i, array);
  }

  return accumlator;
};

module.exports = reduce;
