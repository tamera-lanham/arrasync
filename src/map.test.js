const {map} = require('./map');

describe('Map test', () => {
  test('first map test', async () => {
    const testArray = [1, 1, 2, 3, 5, 8];
    const mapped = await map(testArray, async num => {
      return num * num;
    });
    expect(mapped).toEqual([1, 1, 4, 9, 25, 64]);
  });

  test('use arguments of mapper function', async () => {
    const testArray = ['a', 'b', 'c', 'd'];
    const mapped = await map(testArray, (value, i, array) => {
      return [value, i, array[0]];
    });
    expect(mapped).toMatchSnapshot();
  });

  test('Should catch async errors', async () => {
    const testArray = ['a', 'b'];
    try {
      await map(testArray, async (item) => {
        try {
          // simulate async error happening
          throw new Error('bang');
        } catch (e) {
          throw e
        }
      });
    } catch (e) {
      expect(e.message).toBe('bang');
    }
    
  });
});
