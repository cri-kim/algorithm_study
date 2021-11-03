/**
 * https://leetcode.com/problems/array-partition-i/
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  let sum = 0;
  nums.sort((a, b) => a - b);
  // console.log(nums);
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      console.log(i, sum);
      sum += nums[i];
    }
  }
  return sum;
};

const nums = [6214, -2290, 2833, -7908];
const result = arrayPairSum(nums);
console.log(result);
