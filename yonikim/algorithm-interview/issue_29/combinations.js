/**
 * https://leetcode.com/problems/combinations/
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const array = Array.from({ length: n }, (v, i) => i + 1);
  //   for (let i = 1; i <= n; i++) {
  // array.push(i);
  //   }
  return getCombinations(array, k);
};

const getCombinations = (array, selectNumber) => {
  const result = [];
  if (selectNumber === 1) return array.map((el) => [el]);

  array.forEach((fixed, index, origin) => {
    const res = origin.slice(index + 1);
    const combinations = getCombinations(res, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);

    result.push(...attached);
  });
  return result;
};

const n = 4,
  k = 2;

const result = combine(n, k);
console.log(result);
