// 오류 해결 필요
/**
 * https://leetcode.com/problems/reorder-data-in-log-files/
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
  const letterLogs = {}
  const digitLogs = []
  for (log of logs) {
    const letter = log.split(' ').splice(1).join('')
    // console.log(letter)
    if (/^\d+$/gi.test(letter)) {
      digitLogs.push(log)
    } else {
      letterLogs[log] = letter
    }
  }

  const orderedLetterLogs = orderedObjectValueByKey(letterLogs)
  //   console.log(orderedLetterLogs)

  return orderedLetterLogs.concat(digitLogs)
}

const orderedObjectValueByKey = (unordered) =>
  Object.keys(unordered)
    .sort()
    .reduce((value, key) => {
      value.push(unordered[key])
      return value
    }, [])

const logs = ['1 n u', 'r 527', 'j 893', '6 14', '6 82']
const result = reorderLogFiles(logs)
console.log(result)
