/**
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const resultLength = digits.length;
  let alphabets = [];
  for (const digit of digits) {
    alphabets = alphabets.concat(PHONE_NUMBER[digit]);
  }

  const combinations = getCombinations(alphabets, resultLength);
  const result = combinations.map((element) => element.join(""));
  return result;
};

const PHONE_NUMBER = {
  1: [],
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "i"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
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

const digits = "23";
const result = letterCombinations(digits);
console.log(result);
