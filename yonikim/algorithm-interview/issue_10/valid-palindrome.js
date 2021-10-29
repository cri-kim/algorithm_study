/**
 * https://leetcode.com/problems/valid-palindrome/
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const strings = s.toLowerCase().split('')
  const onlyLetters = []

  for (const str of strings) {
    if (str.match(/[a-z0-9]/i)) {
      onlyLetters.push(str)
    }
  }

  const origin = onlyLetters.join('')
  const reverse = onlyLetters.reverse().join('')
  // console.log(origin, reverse)

  return origin == reverse
}

// const s = "A man, a plan, a canal: Panama"
const s = '0p'
const result = isPalindrome(s)
console.log(result)

/*
Palindrome 이란?
앞에서부터 읽던, 뒤에서부터 읽던 같은 단어
*/
