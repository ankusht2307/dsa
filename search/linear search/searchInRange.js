const searchInRange = (array, startIndex, endIndex, target) => {
    // check if the array is empty
    if (array.length === 0) return null;

    // run for loop to find the target
    for(let i = startIndex; i < endIndex; i++) {
        const element = array[i];
        if (element === target) return i;
    }

    // return null if no element found
    return null;
}

let startIndex = 2;
let endIndex = 6;
let arr = [1, 23, 12, 43, 21, 98, 34, 65, -1, -84];
let target = -1;

let elementIndex = searchInRange(arr, startIndex, endIndex, target);

console.log(elementIndex);