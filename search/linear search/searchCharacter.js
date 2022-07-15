'use strict';
/**
 * Best case Time complexity: O(1)
 * Worst case Time complexity: O(N)
 * where N is the number of elements
 */
/**
 *
 * @param {*} string
 * @param {*} target
 * @returns {element index of the first occurrence if found otherwise returns null}
 */
const searchCharacter = (string, target) => {
  // check if the array contains the element
  if (string.length === 0) return null;

  // run for loop
  // comment out to check both loops
  // for (let index = 0; index < string.length; index++) {
  //   const element = string[index];
  //   if (element === target) return index;
  // }
  for (const index in string) {
    const element = string[index];
    if (element === target) return index;
  }

  // return null if no element found
  return null;
};

// put in really long string if want to check execution time
// for loop is must faster that forin loop
const str = 'executed';
const target = 'd';
console.time('Execution Time');
const elementIndex = searchCharacter(str, target);
console.timeEnd('Execution Time');
console.log(elementIndex);
