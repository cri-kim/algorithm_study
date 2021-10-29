# 문자열 조작 

## 유효한 팰린드롬(valid-palindrome)
> Palindrome 이란? 
앞에서부터 읽던 뒤에서부터 읽던 같은 단어

1. 정규식을 통해 해당 단어가 알파벳, 대소문자 으로만 구성되어 있는 단어인지 판단한다.  
``` JavaScript
str.match(/[\w]/gi)
```


2. 배열의 모든 요소를 연결해 하나의 문자열로 만든다. 
``` JavaScript
Array.prototype.join('')
```


3. 배열의 순서를 반전한다. 
``` JavaScript
Array.prototype.reverse()
```


## 문자열 뒤집기(reverse-string)
1. 배열의 순서를 반전한다. 
``` JavaScript
Array.prototype.reverse()
```


## 로그 파일 재정렬(reorder-data-in-log-files)
1. 객체는 key 와 value 로 이뤄져 있으며, 객체의 key 값은 중복이 안된다. 
``` JavaScript
const obj = { key: value }
```


2. 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환한다. 
``` JavaScript
Array.prototype.concat(otherArray)
```


#### [Wrong Answer]

객체의 key 값으로 정렬한 후 value 를 추출하도록 코드를 작성했으나, 중복된 값이 없어짐
``` JavaScript
const orderedObjectValueByKey = (unordered) =>
  Object.keys(unordered)
    .sort()
    .reduce((value, key) => {
      value.push(unordered[key])
      return value
    }, [])
```


## 가장 흔한 단어(most-common-word)
1. 정규식을 통해 해당 단어에서 알파벳, 대소문자만 남겨둔다.
``` JavaScript
paragraph.replace(/[^\w]/gi, ' ')
```


2. 배열 요소에 매칭되는 값이 있는지 찾는 정규식을 만든다.
``` JavaScript
const regex = new RegExp(`\\b${banned.join('|')}\\b`, 'gi')
```


3. 빈도수가 가장 높은 단어를 추출한다.
``` JavaScript
const mostFrequent = (arr) =>
  Object.entries(
    arr.reduce((a, v) => {
      a[v] = a[v] ? a[v] + 1 : 1
      return a
    }, {})
  ).reduce((a, v) => (v[1] >= a[1] ? v : a), [null, 0])[0]
```


## 그룹 애너그램(group-anagrams)
> Anagram 이란? 
한 단어를 구성하는 글자의 개수를 그대로 유지하면서 순서만 바꾼 단어

1. 객체의 value 들만 추출한다.
``` JavaScript
Object.values()
```


## 가장 긴 팰린드롬 부분 문자열(longest-palindromic-substring)
1. 배열의 startIndex부터 endIndex(필수값 아님)에 대한 얕은 복사본을 만들어 새로운 배열 객체로 반환한다. 원본 배열은 바뀌지 않는다.
``` JavaScript
Array.prototype.slice(startIndex, endIndex)
```


#### [Wrong Answer]

시간초과