const filter = require('./filter');

describe('Filter test', () => {
  test('first filter test', async () => {
    const testArray = [1, 1, 2, 3, 5, 8];
    const filtered = await filter(testArray, async num => {
      return num % 2 === 0;
    });
    expect(filtered).toEqual([2, 8]);
  });
});
