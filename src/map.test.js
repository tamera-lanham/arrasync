const map = require('./map');

describe('Map test', () => {
  test('first map test', async () => {
    const testArray = [1, 1, 2, 3, 5, 8];
    const mapped = await map(testArray, async num => {
      return num * num;
    });
    expect(mapped).toEqual([1, 1, 4, 9, 25, 64]);
  });
});
