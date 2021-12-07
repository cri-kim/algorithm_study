# 그래프

## [섬의 개수](https://leetcode.com/problems/number-of-islands/)

## [전화 번호 문자 조합](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)

## [순열](https://leetcode.com/problems/permutations/)

- 순열: 서로 다른 원소를 가진 집합에서 대상들을 선택하여 순서 있게 배열하는 것

1. python의 itertools.permutations 구현

```JavaScript
const getPermutations = (array, selectNumber) => {
  const result = [];
  if (selectNumber === 1) return array.map((el) => [el]);

  array.forEach((fixed, index, origin) => {
    const res = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(res, selectNumber - 1);
    const attached = permutations.map((el) => [fixed, ...el]);

    result.push(...attached);
  });
  return result;
};
```

## [조합](https://leetcode.com/problems/combinations/)

- 조합: 서로 다른 원소를 가진 집합에서 원소들을 택하여 만든 부분집합

1. python의 itertools.combinations 구현

```JavaScript
const getCombinations = (array, selectNumber) => {
  const result = [];
  if (selectNumber === 1) return array.map((el) => [el]);

  array.forEach((fixed, index, origin) => {
    const res = origin.slice(index + 1);
    const combinations = getCombinations(res, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);

    result.push(...attached);
  });
  return result;
};
```

## [조합의 합](https://leetcode.com/problems/combination-sum/)

## [부분 집합](https://leetcode.com/problems/subsets/)

## [일정 재구성](https://leetcode.com/problems/reconstruct-itinerary/)

1. 기준 문자열과 비교했을 때 비교 대상 문자열이 정렬상 전에 오는지, 후에 오는지 혹은 같은 순서에 배치되는지를 알려주는 숫자를 리턴한다.

```JavaScript
String.prototype.localeCompare()

'a'.localeCompare('b'); // -1
'b'.localeCompare('a'); // 1
'b'.localeCompare('b'); // 0
```

## [코스 스케줄](https://leetcode.com/problems/course-schedule/)
