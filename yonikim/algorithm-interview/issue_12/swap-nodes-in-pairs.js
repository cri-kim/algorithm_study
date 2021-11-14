/**
 * https://leetcode.com/problems/swap-nodes-in-pairs/
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
var swapPairs = function (head) {
  if (head && head.next) {
    let next = head.next;
    head.next = swapPairs(next.next);
    next.next = head;
    return next;
  }
  return head;
};

const head = [1, 2, 3, 4];
const result = swapPairs(ListNode(head));
console.log(result);
