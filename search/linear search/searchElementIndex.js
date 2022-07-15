/**
 * Best case Time complexity: O(1)
 * Worst case Time complexity: O(N)
 * where N is the number of elements
 */

/**
 *
 * @param {*} array
 * @param {*} target
 * @returns {element index if found otherwise returns null}
 */
const searchElementIndex = (array, target) => {
  // check if the array contains the element
  if (array.length === 0) return null;

  // run for loop
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element === target) return index;
  }

  // return null if no element found
  return null;
};

const nums = [1, 23, 12, 43, 21, 98, 34, 65, -1, -84];
const target = 23;
const elementIndex = searchElementIndex(nums, target);
console.log(elementIndex);
