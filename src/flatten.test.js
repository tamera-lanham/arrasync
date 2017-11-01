const flatten = require('./flatten');

describe('flatten tests', () => {
  test('flattens a 2D list', async () => {
    const list = [['a', 'x'], ['b', 'y'], ['c', 'z']];
    const result = flatten(list);
    expect(result).toEqual(['a', 'x', 'b', 'y', 'c', 'z']);
  });
});
