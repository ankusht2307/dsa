const findElementIndex = (array, target) => {
  // checkif the array is not empty
  if (array.length === 0) return null;

  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    // find the mid of the array
    let mid = Math.floor(start + (end - start) / 2);

    if (target > array[mid]) {
      start = mid + 1;
    } else if (target < array[mid]) {
      end = mid - 1;
    } else {
      return mid;
    }
  }
  // if element is not found return null
  return null;
};

const array = [
  1, 3, 6, 8, 12, 15, 22, 27, 37, 44, 45, 55, 57, 59, 60, 63, 69, 71, 90, 200,
  201,
];
const target = 201;
const elementIndex = findElementIndex(array, target);
console.log(elementIndex);
