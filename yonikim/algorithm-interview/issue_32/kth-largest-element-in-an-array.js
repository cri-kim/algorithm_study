/**
 * https://leetcode.com/problems/kth-largest-element-in-an-array/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  return nums.sort((a, b) => b - a)[k - 1];
};
const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6],
  k = 4;
const result = findKthLargest(nums, k);
console.log(result);
