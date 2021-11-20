# 스택, 큐

---

## 유효한 괄호(valid-parentheses)

https://leetcode.com/problems/valid-parentheses/

1. 배열이 특정 요소를 포함하고 있는지 판별한다.

```JavaScript
Array.prototype.includes()
```

## 중복 문자 제거(remove-duplicate-letters)

https://leetcode.com/problems/remove-duplicate-letters/

1. python의 collections.Counter 구현
   - collections.Counter: 리스트의 요소 별 개수를 카운팅

```JavaScript
const Counter = (array) => {
  const counter = {};
  array.forEach((val) => (counter[val] = (counter[val] || 0) + 1));
  return counter;
};
```

## 일일 온도(daily-temperatures)

https://leetcode.com/problems/daily-temperatures/

1. 배열의 길이를 n 으로 initial하고, 값을 0으로 채운다.

```JavaScript
Array(n).fill(0);
```

## 큐를 이용한 스택 구현(implement-stack-using-queues)

https://leetcode.com/problems/implement-stack-using-queues/

### 스택(Stack)

- LIFO(Last-In-First-Out, 후입선출)
- push(item): item을 stack의 top에 삽입
- pop(): stack의 top에 있는 item을 삭제하고 해당 item을 반환
- peek(): stack의 top에 있는 item을 삭제하지 않고 반환
- empty(): stack이 비어있으면 true, 아니면 false 반환

## 스택을 이요한 큐 구현(implement-queue-using-stacks)

https://leetcode.com/problems/implement-queue-using-stacks/

### 큐(Queue)

- FIFO(First-In-First-Out, 선입선출)
- add(item): item을 queue의 끝 부분에 추가
- remove(): queue의 첫번째 item을 삭제
- peek(): queue의 가장 위에 있는 item을 반환
- isEmpty(): queue가 비어있으면 true, 아니면 false 반환

## 원형 큐 디자인(design-circular-queue)

https://leetcode.com/problems/design-circular-queue/

### 원형 큐(Circular Queue)

- enqueue(item): rear의 포인터를 1 증가 시키고, 그 위치에 데이터 삽입
- dequeue(): front의 포인터를 1 증가 시키고, 그 위치의 데이터를 삭제
