/**
 * Problem statement: Find the smallest number in the array.
 */

const findMin = (array) => {
  // check if array is empty
  if (array.length === 0) return null;

  let minValue = array[0];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element < minValue) minValue = element;
  }

  return minValue;
};

let arr = [1, 23, 12, 43, 21, 98, 34, 65, -1, -8];
const minNumber = findMin(arr);
console.log(minNumber);
