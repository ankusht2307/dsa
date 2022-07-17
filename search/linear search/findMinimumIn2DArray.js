const findMin = (array) => {
  // check if array is empty
  if (array.length === 0) return null;

  // assuming the min as first element
  let min = array[0][0];
  // run for loop
  for (let row = 0; row < array.length; row++) {
    for (let col = 0; col < array[row].length; col++) {
        console.log(array[row][col]);
        if(array[row][col] < min) min = array[row][col];
    }
  }
  // return the minimum value
  return min;
};

let $2DArray = [
  [21, 453, 0, 8, 98, 4, 6],
  [54, 32, 328, 984, 35, 983, 83],
  [865, 74, 7, -8, -3, 812],
];

let minValue = findMin($2DArray);
console.log(minValue);
