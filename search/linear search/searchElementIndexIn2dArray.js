const findMinElementIndex = (array, target) => {
  // check if array contains element
  if (array.length === 0) return null;

  // run for loop
  for (let row = 0; row < array.length; row++) {
    for (let col = 0; col < array[row].length; col++) {
      const element = array[row][col];
      if (element === target) return [row, col];
    }
  }

  // if element not found, return null
  return null;
};

let $2DArray = [
  [21, 453, 0, 8, 98, 4, 6],
  [54, 32, 328, 984, 35, 983, 83],
  [865, 74, 7, -8, -3, 812],
];
let target = 812;
const elementIndex = findMinElementIndex($2DArray, target);
console.log(elementIndex);
