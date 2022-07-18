const findElement = (array, target) => {
  // check if the array is empty
  if (array.length === 0) return null;

  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (target > array[mid]) {
      start = mid + 1;
    } else if (target < array[mid]) {
      end = mid - 1;
    } else {
      return array[mid];
    }
  }

  // return null if no element is found
  return null;
};

const array = [
  1, 3, 6, 8, 12, 15, 22, 27, 37, 44, 45, 55, 57, 59, 60, 63, 69, 71, 90, 200,
  201,
];
const target = 45;
const element = findElement(array, target);
console.log(element);
