/**
 * Problem Statement:  find the greatest number
 * which is smaller or equals to target number.
 * @param {*} array
 * @param {*} target
 * @returns element <= target
 */

const findFloorOfTargetElement = (array, target) => {
  // check if the array is empty
  if (array.length === 0) return null;

  let start = 0;
  let end = array.length - 1;
  // check if the target element is even smaller
  // than the smallest number in the array.
  if (target < array[start]) return null;
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

  // return end if the element not found
  // because the element does not exist between
  // start and end, and the condition is voilated
  // because start is greater than end, so in this
  // case the target will be end because we have to
  // find the smaller or equal number but we haven't find
  // the equal so we have to return the smaller number
  // so in this case the smaller number is end because
  // start > end.
  return array[end];
};

const array = [1, 7, 9, 14, 18, 19, 41, 89, 99];
const target = 1000;
const floorElement = findFloorOfTargetElement(array, target);
console.log(floorElement);
