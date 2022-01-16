/**
 * https://leetcode.com/problems/subsets/
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = getSubsets(nums);
  return result;
};
const getSubsets = function (arr) {
  let flag = new Array(arr.length).fill(false);
  const result = [];

  const subSet = function DFS(depth) {
    if (depth === arr.length) {
      const subSet = arr.filter((el, index) => flag[index]);
      subSets.push(subSet);
      return;
    }

    flag[depth] = true;
    subSet(depth + 1);

    flag[depth] = false;
    subSet(depth + 1);
  };

  subSet(0);
  return subSets;
};

const nums = [1, 2, 3];
const result = subsets(nums);
console.log(result);
