/**
 * https://leetcode.com/problems/merge-k-sorted-lists/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length === 0) return null;

  while (lists.length > 1) {
    const a = lists.shift();
    const b = lists.shift();
    const merged = mergeLists(a, b);
    lists.push(merged);
  }
  return lists[0];
};

const mergeLists = (a, b) => {
  let dummy = new ListNode(0);
  let current = dummy;

  while (a && b) {
    if (a.val < b.val) {
      current.next = a;
      a = a.next;
    } else {
      current.next = b;
      b = b.next;
    }
    current = current.next;
  }
  current.next = a || b;
  return dummy.next;
};

const lists = [
  [1, 4, 5],
  [1, 3, 4],
  [2, 6],
];

const result = mergeKLists(lists);
console.log(result);
