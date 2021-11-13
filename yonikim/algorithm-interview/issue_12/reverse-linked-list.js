const { ListNode } = require("./ListNode");

/**
 * https://leetcode.com/problems/reverse-linked-list/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  return reverse(head);
};

const reverse = function (node, prev = null) {
  if (!node) return prev;
  next = node.next;
  node.next = prev;
  console.log(next, node);
  return reverse(next, node);
};

const head = [1, 2, 3, 4, 5];
const result = reverseList(ListNode(head));
console.log(result);
