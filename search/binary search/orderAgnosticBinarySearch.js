const search = (array, target) => {
  // check if the array is empty
  if (array.length === 0) return null;

  // check if the array is ascending or descending
  let start = 0;
  let end = array.length - 1;
  let type = '';
  array[start] < array[end] ? (type = 'asc') : (type = 'desc');

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (target > array[mid]) {
      if (type === 'asc') {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    } else if (target < array[mid]) {
      if (type === 'asc') {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      return mid;
    }
  }

  // return null if no element is found
  return null;
};

const descArray = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const ascArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 8
const elementIndex = search(descArray, target);
console.log(elementIndex);
