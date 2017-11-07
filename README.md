# arrasync
Async and array utilities for ES6

Six functions are included in `arrasync`, all of which are async:
* `map`
* `filter`
* `reduce`
* `flatten`
* `zip`
* `unzip`

## Installation

## Usage

### `map(array, func)`
Asynchronously apply a function to every element of an array, returning an array of the results.

Arguments:
* `array` - the array to be mapped.
* `func(value, index, array)` - the function to be called for each value of array. Can be sync or async, and can optionally take the index of each value and the array being mapped as arguments.

Example:
```javascript
// Map values to their squares

const array = [1, 2, 3, 4, 5];
const squares = await map(array, async value => value ** 2);
console.log(squares); // [1, 4, 9, 16, 25]
```

### `filter(array, func)`

Asynchronously filter an array based on a true/false test.

Arguments:
* `array` - the array to be filtered
* `func(value, index, array)` - a function that returns true on a value to be included, and returns false on a value that shouldn't be included. Can be sync or async, and can optionally take the index of each value and the array being mapped as arguments.

Example:
```javascript
// Filter numbers out of an array

const array = [1, 'a', 'b', 2, 3, 'c', 4, 'd'];
const strings = await filter(array, async value => typeof value !== 'number');
console.log(strings); // ['a', 'b', 'c', 'd']
```

### `reduce(array, func, accumulator)`

Apply a function on each value in an array (from left to right) using an accumulator to reduce it to a single value.

Arguments:
* `array` - the array to be reduced
* `func(accumulator, value, index, array)` - The function to execute on each value of the array, which returns the new value of the accumulator at each step. Can be sync or async, but executes in series either way. Optionally can take the index of each value and the array being reduced as arguments.
* `accumulator` - the initial value of the accumulator

Example:
```javascript
// Sum values of an array

const array = [1, 2, 3, 4, 5];
const sum = await reduce(array, async (accumulator, value) => accumulator + value, 0);
console.log(sum); // 15
```

### `flatten(array)`

Given an arbirarily nested array, returns a flat array with order preserved.

Arguments:
* `array` - the nested array to be flattened

Example:
```javascript
// Flatten a nested array

const array = ['a', [['b', 'c'], 'd', 'e'], 'f', 'g', ['h'], 'i'];
const flattened = await flatten(array);
console.log(flattened) // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
```

### `zip(...arrays)`

 Takes multiple arrays and returns an array of sub-arrays, where the first sub-array holds the first element from each of the input arrays, the second sub-array holds the second element from each of the input arrays, and so on. 
 
 Arguments:
 * `...arrays` - any number of equal-length arrays
 
 Example:
 ```javascript
 // Zip together three arrays
 
 const numbers  = [1, 2, 3, 4, 5];
 const letters  = ['a', 'b', 'c', 'd', 'e'];
 const zipped = await zip(numbers, letters);
 console.log(zipped); // [[1, 'a'], [2, 'b'], [3, 'c'], [4, 'd'], [5, 'e']]
 ```

### `unzip(array)`

Does the reverse of zip, equivalent to zip(...array).

Arguments:
* `array` - array to be unzipped

Example:
```javascript
const array = [[1, 'a'], [2, 'b'], [3, 'c'], [4, 'd'], [5, 'e']]
const unzipped = await unzip(array);
console.log(unzipped); // [[1, 2, 3, 4, 5], ['a', 'b', 'c', 'd', 'e']] 
```
