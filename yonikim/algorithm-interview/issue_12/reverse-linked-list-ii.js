/**
 * https://leetcode.com/problems/reverse-linked-list-ii/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const { ListNode } = require("./ListNode");

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (!head || left === right) return head;

  const root = new ListNode();
  let start = root;
  root.next = head;

  for (let i = 1; i < left; i++) {
    start = start.next;
  }
  let end = start.next;
  let temp = null;

  for (let i = left; i < right; i++) {
    temp = start.next;
    start.next = end.next;
    end.next = end.next.next;
    start.next.next = temp;
  }
  return root.next;
};

const head = [1, 2, 3, 4, 5];
const left = 2;
const right = 4;
const result = reverseBetween(ListNode(head), left, right);
console.log(result);
