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

var maxProfit = function (prices) {
  let min_price = Number.MAX_SAFE_INTEGER;
  let profit = 0;

  for (price of prices) {
    min_price = Math.min(price, min_price);
    profit = Math.max(profit, price - min_price);
  }

  return profit;
};

const prices = [7, 1, 5, 3, 6, 4];
const result = maxProfit(prices);
console.log(result);
