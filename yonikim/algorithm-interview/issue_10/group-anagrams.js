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

