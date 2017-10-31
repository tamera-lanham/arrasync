const zip = require('./zip');

describe('Zip Tests', () => {
  test('check length match', async () => {
    expect.assertions(1);
    const firstArray = ['a', 'b', 'c'];
    const secondArray = ['x', 'y'];
    try {
      zip(firstArray, secondArray);
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });

  test('zip should combine first elements', () => {
    const firstArray = ['a', 'b', 'c'];
    const secondArray = ['x', 'y', 'z'];
    const expectedResult = [['a', 'x'], ['b', 'y'], ['c', 'z']];

    expect(zip(firstArray, secondArray)).toEqual(expectedResult);
  });
});
