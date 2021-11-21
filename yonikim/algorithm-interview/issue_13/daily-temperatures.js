/**
 * https://leetcode.com/problems/daily-temperatures/
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const result = Array(temperatures.length).fill(0);
  console.log(result);

  for (let i = 0; i < temperatures.length - 1; i++) {
    let day = 0;
    for (let j = i + 1; j < temperatures.length; j++) {
      day += 1;
      if (temperatures[i] < temperatures[j]) {
        console.log(temperatures[i], temperatures[j], day);
        result[i] = day;
        break;
      }
    }
  }
  return result;
};

const temperatures = [30, 60, 90];
const result = dailyTemperatures(temperatures);
console.log(result);
