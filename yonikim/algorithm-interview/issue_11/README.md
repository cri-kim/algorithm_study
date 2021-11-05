# 배열

## 두 수의 합(two-sum)

https://leetcode.com/problems/two-sum/

- 풀이 1
  Brute force

## 빗물 트래핑(trapping-rain-water)

https://leetcode.com/problems/trapping-rain-water/

- 풀이 1
  Brute force

## 세 수의 합(3sum)

https://leetcode.com/problems/3sum/

## 배열 파티션 I(array-partition-i)

https://leetcode.com/problems/array-partition-i/

1. Array.prototype.sort() 만 사용할 경우 원하는 정렬 값을 얻을 수 없다. 왜냐하면 배열의 요소 값을 문자열로 변환하여 유니코드 값을 비교하기 때문이다. 따라서 함수를 따로 만들어줘야 한다.

```JavaScript
// 오름차순
const compareDesc = (a, b) => {
  return nums.sort((a, b) => a - b);
};

// 내림차순
const compareAsc = (nums) => {
  return nums.sort((a, b) => b - a);
};
```

## 자신을 제외한 배열의 곱(product-of-array-except-self)

https://leetcode.com/problems/product-of-array-except-self/

```JavaScript
Array.prototype.slice()
```

- 풀이 1
  Brute force [Wrong Answer > 시간 초과]

1. reduce 는 배열의 각 요소에 대해 callback 을 실행하여 단 1개의 값을 출력한다.

```JavaScript
Array.prototype.reduce(previousValue, currentValue) => previousValue * currentValue
```

## 주식을 사고팔기 가장 좋은 시점(best-time-to-buy-and-sell-stock)

https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

#### [Wrong Answer]

- 풀이 1
  Brute force [Wrong Answer > 시간 초과]

1. 인자로 받은 0개 이상의 숫자 중 가장 큰 숫자를 반환한다.

```
Math.max()
```
