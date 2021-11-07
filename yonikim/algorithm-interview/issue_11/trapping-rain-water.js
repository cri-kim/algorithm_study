/**
 * https://leetcode.com/problems/trapping-rain-water/
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (!height) return 0;

  let volume = 0;
  let left = 0;
  let right = height.length - 1;
  let left_max = height[left];
  let right_max = height[right];

  while (left < right) {
    left_max = Math.max(height[left], left_max);
    right_max = Math.max(height[right], right_max);

    if (left_max <= right_max) {
      volume += left_max - height[left];
      left += 1;
    } else {
      volume += right_max - height[right];
      right -= 1;
    }
  }
  return volume;
};

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const result = trap(height);
console.log(result);
