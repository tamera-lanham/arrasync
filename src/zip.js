const zip = async (...arrays) => {
  // TODO: make this more async with reduce
  for (const array of arrays) {
    if (array.length !== arrays[0].length) {
      throw new Error('Cannot zip arrays of unequal length');
    }
  }

  const results = [];
  for (let i = 0; i < arrays[0].length; i++) {
    const subList = [];

    for (const array of arrays) {
      subList.push(array[i]);
    }
    results.push(subList);
  }

  return results;
};

const unzip = async array => {
  return zip(...array);
};

module.exports = {zip, unzip};
