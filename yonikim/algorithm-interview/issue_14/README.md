# 데크, 우선 순위 큐

- 데크(Deque) 는 Double-Ended Queue의 줄임말로, 글자 그대로 양쪽 끝을 모두 추출할 수 있는, 큐를 일반화한 형태으 추상 자료형(ADT) 이다.
- 우선순위 큐: 우선순위 큐는 큐 또는 스택과 같은 추상 자료형과 유사하지만 추가로 각 요소의 '우선순위'와 연관되어 있다.

## 원형 데크 디자인(design-circular-deque)

https://leetcode.com/problems/design-circular-deque/

1. 배열에서 첫번째 요소를 제거하고, 제거된 요소를 반환한다.

```JavaScript
Array.prototype.shift()
```

2. 새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환한다.

```JavaScript
Array.prototype.unshift()
```

3. 배열의 기존 요소를 삭제 또는 교체하거나, 새 요소를 추가하여 배열의 내용을 변경한다.

```JavaScript
Array.prototype.splice()
```

## k개 정렬 리스트 병합(merge-k-sorted-lists)

https://leetcode.com/problems/merge-k-sorted-lists/
