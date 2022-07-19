/**
 * Problem Statement:  find the smallest number
 * which is greater or equals to target number.
 * @param {*} array
 * @param {*} target
 * @returns element >= target
 */

 const findCeilingOfTargetElement = (array, target) => {
    // check if the array is empty
    if (array.length === 0) return null;
  
    let start = 0;
    let end = array.length - 1;
    // check if the target element is even smaller
    // than the smallest number in the array.
    if (target > array[end]) return null;
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
  
    // return start if the element not found
    // because the element does not exist between
    // start and end, and the condition is voilated
    // because start is greater than end, so in this
    // case the target will be start because we have to
    // fiund the greatest or equal number but we haven't find
    // the equal so we have to return the greatest number
    // so in this case the greatest number is start because
    // start > end.
    return array[start];
  };
  
  const array = [1, 7, 9, 14, 18, 19, 41, 89, 99];
  const target = 0;
  const ceilElement = findCeilingOfTargetElement(array, target);
  console.log(ceilElement);
  