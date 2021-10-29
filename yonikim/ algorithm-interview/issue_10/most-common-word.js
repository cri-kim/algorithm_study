/**
 * https://leetcode.com/problems/most-common-word/
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  // 알파벳, 대소문자만 남겨두기 ([\w] = [0-9a-zA-Z])
  paragraph = paragraph.replace(/[^\w]/gi, ' ')
  const regex = new RegExp(`\\b${banned.join('|')}\\b`, 'ig')
  // banned 배열에 있는 문자 제거
  paragraph = paragraph.toLowerCase().replace(regex, '')
  // 공백 문자 제거
  const words = paragraph.split(' ').filter((word) => /\w/gi.test(word))

  // console.log(words)
  return mostFrequent(words)
}

const mostFrequent = (arr) =>
  Object.entries(
    arr.reduce((a, v) => {
      a[v] = a[v] ? a[v] + 1 : 1
      return a
    }, {})
  ).reduce((a, v) => (v[1] >= a[1] ? v : a), [null, 0])[0]

const paragraph = 'a.'
const banned = []
const result = mostCommonWord(paragraph, banned)
console.log(result)
