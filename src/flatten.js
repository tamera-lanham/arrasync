const flatten = array => {
  const results = [];
  for (const subArray of array) {
    results.push(...subArray);
  }
  return results;
};

module.exports = flatten;
