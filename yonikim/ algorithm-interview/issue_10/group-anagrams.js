/**
 * https://leetcode.com/problems/group-anagrams/
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const result = {}
  for (str of strs) {
    const word = str.split('').sort().join('')
    if (result[word]) {
      result[word].push(str)
    } else {
      result[word] = []
      result[word].push(str)
    }
  }

  return Object.values(result)
}

const strs = ['']
const result = groupAnagrams(strs)
console.log(result)

/*
Anagram 이란?
한 단어를 구성하는 글자의 개수를 그대로 유지하면서 순서만 바꾼 단어
*/
