const {flatten, newFlatten} = require('./flatten');

describe('flatten tests', () => {
  test('flattens a 2D list', async () => {
    const list = [['a', 'x'], ['b', 'y'], ['c', 'z']];
    const result = await flatten(list);
    expect(result).toEqual(['a', 'x', 'b', 'y', 'c', 'z']);
  });
  test('flattens a nasty list', async () => {
    const list = [['a', [['b', 'c'], 'd', 'e'], 'f', 'g', ['h'], 'i']];
    const result = await newFlatten(list);
    expect(result).toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']);
  });
});
