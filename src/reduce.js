const reduce = async (array, func, accumlator) => {
  for (const [i, value] of array.entries()) {
    accumlator = await func(accumlator, value, i, array);
  }

  return accumlator;
};

module.exports = reduce;
