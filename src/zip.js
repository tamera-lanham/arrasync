const zip = (array, ...arrays) => {
  console.log(arrays[0]);

  // TODO: make this more async
  for (const otherArray of arrays) {
    if (otherArray.length !== array.length) {
      throw new Error('Cannot zip arrays of unequal length');
    }
  }

  const results = [];
  for (let i = 0; i < array.length; i++) {
    const subResults = [];
    subResults.push(array[i]);
    for (const otherArray of arrays) {
      subResults.push(otherArray[i]);
    }
    results.push(subResults);
  }

  return results;
};

module.exports = zip;
