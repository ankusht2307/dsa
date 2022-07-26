// 1480. Running Sum of 1d Array
// https://leetcode.com/problems/running-sum-of-1d-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  const temp = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i + 1; j++) {
      if (temp[i]) {
        temp[i] += nums[j];
      } else {
        temp[i] = nums[j];
      }
    }
  }
  return temp;
};

const nums = [1, 2, 3, 4];
const ans = runningSum(nums);
console.log(ans);
