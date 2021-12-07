/**
 * https://leetcode.com/problems/permutations/
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  return getPermutations(nums, nums.length);
};

const getPermutations = (array, selectNumber) => {
  const result = [];
  if (selectNumber === 1) return array.map((el) => [el]);

  array.forEach((fixed, index, origin) => {
    const res = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(res, selectNumber - 1);
    const attached = permutations.map((el) => [fixed, ...el]);

    result.push(...attached);
  });
  return result;
};

const nums = [1, 2, 3];
const result = permute(nums);
console.log(result);
