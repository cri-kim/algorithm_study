/**
 * https://leetcode.com/problems/product-of-array-except-self/
 * 자신을 제외한 나머지 요소들의 곱
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf_TimeLimit = function (nums) {
  const answer = [];
  for (let i = 0; i < nums.length; i++) {
    const num = [...nums];
    num.splice(i, 1);
    let ans = num.reduce(
      (previousValue, currentValue) => previousValue * currentValue
    );
    // console.log(num, ans);
    answer.push(ans);
  }

  return answer;
};

var productExceptSelf = function (nums) {
  const answer = [];
  let left = [];
  left[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    left[i] = nums[i - 1] * left[i - 1];
  }

  let right = [];
  right[nums.length - 1] = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    right[i] = nums[i + 1] * right[i + 1];
  }

  // console.log(left, right);

  for (let i = 0; i < nums.length; i++) {
    const ans = left[i] * right[i];
    answer.push(ans);
  }

  return answer;
};

const nums = [-1, 1, 0, -3, 3];
const result = productExceptSelf(nums);
console.log(result);
