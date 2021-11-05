/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit_TimeLimit = function (prices) {
  let max_price = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i; j < prices.length; j++) {
      price = prices[j] - prices[i];
      max_price = Math.max(max_price, price);
    }
  }

  return max_price;
};

var maxProfit = function (prices) {};

const prices = [7, 6, 4, 3, 1];
const result = maxProfit(prices);
console.log(result);
