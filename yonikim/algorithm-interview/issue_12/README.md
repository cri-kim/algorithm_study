# 연결 리스트

연결 리스트란 데이터(Node) 를 저장할 때 그 다음 순서의 자료가 있는 위치를 데이터에 포함시키는 방식으로 자료를 저장한다.

- Local 에서 테스트할 수 있게끔 ListNode 함수 구현

```JavaScript
module.exports.ListNode = (array = []) => {
  return array.reduceRight((next, val) => ({ val, next }), null);
};
```

- Linked List 직접 구현

```JavaScript
const Node = (val) => {
  this.val = val;
  this.next = null;
};

const LinkedList = () => {
  this.head = new Node("head");
  this.find = find;
  this.append = append;
  this.insert = insert;
  this.remove = remove;
  this.findPrevious = findPrevious;
};

const find = (item) => {
  let currentNode = this.head;
  while (currentNode.val !== item) {
    currentNode = currentNode.next;
  }
  return currentNode;
};

const findPrevious = (item) => {
  let currentNode = this.head;
  while (currentNode.next && currentNode.next.val !== item) {
    currentNode = currentNode.next;
  }
  return currentNode;
};

const append = (newValue) => {
  const newNode = new Node(newValue);
  let current = this.head;
  while (current.next) {
    current = current.next;
  }
  current.next = newNode;
};

const insert = (newValue, item) => {
  let newNode = new Node(newValue);
  let current = this.find(item);

  newNode.next = current.next;
  current.next = newNode;
};

const remove = (item) => {
  let previousNode = this.findPrevious(item);
  previousNode.next = previousNode.next.next;
};

```

---

## 팰린드롬 연결 리스트(palindrome-linked-list)

https://leetcode.com/problems/palindrome-linked-list/

1. 배열의 첫 번째 요소를 제거한 후 그 값을 반환한다.

```JavaScript
Array.prototype.shift()
```

2. 배열의 마지막 요소를 제거한 후 그 값을 반환한다.

```JavaScript
Array.prototype.pop()
```

## 두 정렬 리스트의 병합(merge-two-sorted-lists)

https://leetcode.com/problems/merge-two-sorted-lists/

- 풀이 1

  재귀

## 역순 연결 리스트(reverse-linked-list)

https://leetcode.com/problems/reverse-linked-list/

- 풀이 1

  재귀

## 두 수의 덧셈(add-two-numbers)

https://leetcode.com/problems/add-two-numbers/

- 풀이 1

  재귀

## 페어의 노드 스왑(swap-nodes-in-pairs)

https://leetcode.com/problems/swap-nodes-in-pairs/

- 풀이 1

  재귀

## 홀짝 연결 리스트(odd-even-linked-list)

https://leetcode.com/problems/odd-even-linked-list/

## 역순 연결 리스트 II(reverse-linked-list-ii)

https://leetcode.com/problems/reverse-linked-list-ii/

- start: reverse 되기 직전의 node
- end: 초기 start.next 종료시점에 end 뒤에는 reverse 가 되지 않는 node 들이 오게 된다.
- start 와 end 는 변경되지 않고, temp 변수를 이용하여 next 부분만 수정해서 순서를 변경시킨다.
