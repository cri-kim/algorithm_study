// 시간초과
/**
 * https://leetcode.com/problems/longest-palindromic-substring/
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const strings = s.split('')
  const palindromes = [strings[0]]
  for (let i = 0; i <= strings.length; i++) {
    for (let j = i + 1; j <= strings.length; j++) {
      const string = strings.slice(i, j).join('')
      if (isPalindrome(string)) {
        palindromes.push(string)
      }
    }
  }
  //   console.log(palindromes)
  const result = palindromes.reduce((val, compare) => {
    if (val.length >= compare.length) return val
    return compare
  }, 0)
  return result
}

const isPalindrome = function (s) {
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

const s = 'bb'
const result = longestPalindrome(s)
console.log(result)
