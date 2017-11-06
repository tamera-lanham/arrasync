const map = require('./map');

const zip = async (...arrays) => {
  for (const array of arrays) {
    if (array.length !== arrays[0].length) {
      throw new Error('Cannot zip arrays of unequal length');
    }
  }

  return map(arrays[0], async (value, i) => {
    return map(arrays, arr => arr[i]);
  });
};

const unzip = async array => {
  return zip(...array);
};

module.exports = {zip, unzip};
