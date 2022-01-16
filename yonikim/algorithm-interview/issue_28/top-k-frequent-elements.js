/**
 * https://leetcode.com/problems/top-k-frequent-elements/
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const counter = Counter(nums);
  const result = [];

  const order = Ordered(counter);

  return order.slice(0, k);
};

const Counter = (array) => {
  const counter = {};
  array.forEach((val) => (counter[val] = (counter[val] || 0) + 1));
  return counter;
};

const Ordered = (object) => {
  const order = Object.keys(object).sort((a, b) => object[b] - object[a]);
  return order;
};

const nums = [4, 1, -1, 2, -1, 2, 3];
const k = 2;
const result = topKFrequent(nums, k);
console.log(result);
