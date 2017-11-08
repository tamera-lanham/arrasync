const {reduce} = require('./reduce');

describe('Reduce Tests', () => {
  test('Reduces into single value', async () => {
    const list = [1, 2, 3, 4, 5];
    const result = await reduce(
      list,
      (item, accumlator) => {
        return item + accumlator;
      },
      0
    );
    expect(result).toBe(15);
  });

  test('Reduce uses optional arguments', async () => {
    const testArray = ['a', 'b', 'c', 'd'];
    const result = await reduce(
      testArray,
      (accumulator, value, i, array) => {
        accumulator.push([value, i, array[0]]);
        return accumulator;
      },
      []
    );
    expect(result).toMatchSnapshot();
  });
});
