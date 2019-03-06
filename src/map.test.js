const {map} = require('./map');

const sleep = seconds => {
  const milliseconds = seconds * 1000;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(`Waited ${seconds} seconds`);
    }, milliseconds);
  });
};

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

  test('should perform tasks in parallel', async () => {
    // To test that all tasks are performmed in parallel
    // we will create an array of promises that simulate an async
    // operation by simply sleeping.
    const testArray = [2, 3, 2];
    // Our map function will sleep for 2 seconds, 3 seconds, and 2 seconds.
    // We want the entire operation to take 3 seconds, not 7 (2 + 3 + 2) seconds.
    // The test will automatically timeout and fail after 5 seconds.
    const mapped = await map(testArray, async seconds => sleep(seconds));
    expect(mapped[1]).toBe('Waited 3 seconds');
  });

  test('Should catch async errors', async () => {
    const testArray = ['a', 'b'];
    try {
      await map(testArray, async item => {
        try {
          // simulate async error happening
          throw new Error('bang');
        } catch (e) {
          throw e;
        }
      });
    } catch (e) {
      expect(e.message).toBe('bang');
    }
  });
});
