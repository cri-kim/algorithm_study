/**
 * https://leetcode.com/problems/remove-duplicate-letters/
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  const strings = s.split("");
  const counter = Counter(strings);
  console.log(strings[strings.length - 1]);
  const seen = new Set();
  const stack = [];

  for (str of s) {
    counter[str] -= 1;
    if (seen.has(str)) continue;
    while (
      stack &&
      str < stack[stack.length - 1] &&
      counter[stack[stack.length - 1]] > 0
    ) {
      seen.delete(stack.pop());
    }
    stack.push(str);
    seen.add(str);
  }

  return stack.join("");
};

const Counter = (array) => {
  const counter = {};
  array.forEach((val) => (counter[val] = (counter[val] || 0) + 1));
  return counter;
};

const s = "cbacdcbc";
const result = removeDuplicateLetters(s);
console.log(result);
