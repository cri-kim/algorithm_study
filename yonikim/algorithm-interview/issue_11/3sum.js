/**
 * https://leetcode.com/problems/3sum/
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // nums[i] + nums[j] + nums[k] = 0

  const result = [];
  nums.sort();

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length - 1; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      for (let k = j + 1; k < nums.length; k++) {
        if (k > j + 1 && nums[k] === nums[k - 1]) continue;
        if (nums[i] + nums[j] + nums[k] === 0) {
          // console.log(`${i}: ${nums[i]} / ${j}: ${nums[j]} / ${k}: ${nums[k]}`);
          result.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }
  return result;
};

const nums = [0];
const result = threeSum(nums);
console.log(result);
