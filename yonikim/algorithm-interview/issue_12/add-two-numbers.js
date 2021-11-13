const { ListNode } = require("./ListNode");

/**
 * https://leetcode.com/problems/add-two-numbers/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {};

const reverse = function (node, prev = null) {
  if (!node) return prev;
  next = node.next;
  node.next = prev;
  return reverse(next, node);
};

const l1 = [2, 4, 3];
const l2 = [5, 6, 4];
const result = addTwoNumbers(ListNode(L1), ListNode(l2));
console.log(result);
