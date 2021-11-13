const { ListNode } = require("./ListNode");

/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
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
var mergeTwoLists = function (l1, l2) {
  let temp;
  if (!l1 || (l2 && l1.val > l2.val)) {
    temp = l1;
    l1 = l2;
    l2 = temp;
  }
  if (l1) {
    l1.next = mergeTwoLists(l1.next, l2);
  }
  return l1;
};

const l1 = [1, 2, 4];
const l2 = [1, 3, 4];

const result = mergeTwoLists(ListNode(l1), ListNode(l2));
console.log(result);
