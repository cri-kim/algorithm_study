/**
 * https://leetcode.com/problems/odd-even-linked-list/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const { ListNode } = require("./ListNode");

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  if (!head) return null;

  let odd = head;
  let even = head.next;
  let even_head = head.next;

  while (even && even.next) {
    odd.next = odd.next.next;
    even.next = even.next.next;
    odd = odd.next;
    even = even.next;
  }

  odd.next = even_head;
  return head;
};

const head = [1, 2, 3, 4, 5];
const result = oddEvenList(ListNode(head));
console.log(result);
