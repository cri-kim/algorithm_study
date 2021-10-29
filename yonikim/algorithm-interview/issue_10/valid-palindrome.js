/**
 * https://leetcode.com/problems/valid-palindrome/
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const strings = s.toLowerCase().split('')
  const onlyLetters = []

  for (const str of strings) {
    if (str.match(/[\w]/gi)) {
      onlyLetters.push(str)
    }
  }

  const origin = onlyLetters.join('')
  const reverse = onlyLetters.reverse().join('')
  // console.log(origin, reverse)

  return origin == reverse
}

const s = '0p0'
const result = isPalindrome(s)
console.log(result)