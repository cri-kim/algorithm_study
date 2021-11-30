/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let longest = 0;
  let current = "";

  for (let str of s) {
    current = current.substring(current.indexOf(str) + 1);
    current += str;

    longest = Math.max(current.length, longest);
  }

  return longest;
};

const s = "abcabcbb";
const result = lengthOfLongestSubstring(s);
console.log(result);
