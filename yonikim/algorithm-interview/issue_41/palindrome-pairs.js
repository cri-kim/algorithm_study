/**
 * https://leetcode.com/problems/palindrome-pairs/
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function (words) {
  const result = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (isPalindrome(words[i] + words[j])) {
        result.push([i, j]);
      }
      if (isPalindrome(words[j] + words[i])) {
        result.push([j, i]);
      }
    }
  }
  return result;
};

const isPalindrome = (word) => {
  let left = 0;
  let right = word.length - 1;
  while (left < right) {
    if (word[left] !== word[right]) {
      return false;
    }
    left += 1;
    right -= 1;
  }
  return true;
};

const words = ["bat", "tab", "cat"];
const result = palindromePairs(words);
console.log(result);
