# 해시 테이블

- 해시 테이블 또는 해시 맵: 키를 값에 매핑할 수 있는 구조인, 연관 배열 추상 자료형(ADT) 를 구현하는 자료구조

## [해시맵 디자인](https://leetcode.com/problems/design-hashmap/)

1. Object 가 특정 key 를 가지고 있는지 확인한다.

```JavaScript
const object = { 'key': 'value' }
Object.prototype.hasOwnProperty('key') // true
Object.prototype.hasOwnProperty('key2') // false
```

## [보석과 돌](https://leetcode.com/problems/jewels-and-stones/)

## [중복 문자 없는 가장 긴 부분 문자열](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

## [상위 K 빈도 요소](https://leetcode.com/problems/top-k-frequent-elements/)

1. python의 collections.Counter 구현
   - collections.Counter: 리스트의 요소 별 개수를 카운팅

```JavaScript
const Counter = (array) => {
  const counter = {};
  array.forEach((val) => (counter[val] = (counter[val] || 0) + 1));
  return counter;
};
```

2. Object value 별 내림차순 구현

```JavaScript
const Ordered = (object) => {
  const order = Object.keys(object).sort((a, b) => object[b] - object[a]);
  return order;
};

```
