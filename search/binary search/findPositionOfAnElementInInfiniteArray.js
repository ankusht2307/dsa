/**
 * The array is inifinte that means we cannot
 * use length property.
 */

const findPositionOfAnElementInInfiniteArray = (array, target) => {
  // As we do not know the size of the array
  // let's define start and end.
  let start = 0;
  let end = 1;

  // increase search window after each iteration
  while (target > array[end]) {
    let newStart = end + 1;
    end = end + (end - start + 1) * 2;
    start = newStart;
  }

  return binarySearch(array, target, start, end);
};

const binarySearch = (array, target, start, end) => {
  while (start <= end) {
    let middle = Math.floor(start + (end - start) / 2);
    if (target > array[middle]) {
      start = middle + 1;
    } else if (target < array[middle]) {
      end = middle - 1;
    } else {
      return middle;
    }
  }
  // if not found return null
  return null;
};

let mockInfiniteArray = [
  1, 2, 3, 5, 7, 9, 10, 24, 56, 78, 90, 101, 111, 123, 145,
];
let target = 1;

const element = findPositionOfAnElementInInfiniteArray(mockInfiniteArray, target);
console.log(element);
