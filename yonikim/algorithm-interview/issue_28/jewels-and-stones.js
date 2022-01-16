/**
 * https://leetcode.com/problems/jewels-and-stones/
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let result = 0;
  const counter = Counter(stones.split(""));

  //   console.log(counter);

  for (jewel of jewels) {
    const r = counter[jewel] || 0;
    result += r;
  }
  return result;
};

const Counter = (array) => {
  const counter = {};
  array.forEach((val) => (counter[val] = (counter[val] || 0) + 1));
  return counter;
};

const jewels = "aA";
const stones = "aAAbbbb";
const result = numJewelsInStones(jewels, stones);
console.log(result);
