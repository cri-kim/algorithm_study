/**
 * https://leetcode.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  const validBracket = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (str of s) {
    if (!Object.keys(validBracket).includes(str)) {
      stack.push(str);
    } else if (validBracket[str] !== stack.pop()) {
      return false;
    }
    // console.log(stack.pop());
  }
  return stack.length === 0;
};

const s = "{[]}";
const result = isValid(s);
console.log(result);
