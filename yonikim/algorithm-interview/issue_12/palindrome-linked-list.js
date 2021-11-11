const { ListNode } = require("./ListNode");

/**
 * https://leetcode.com/problems/palindrome-linked-list/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head) return true;

  const listNode = ListNode(head);

  const queue = [];
  let node = head;
  while (node) {
    queue.push(node.val);
    node = node.next;
  }

  while (queue.length > 1) {
    if (queue.shift() != queue.pop()) return false;
  }

  return true;
};

const head = [1, 2, 2, 1];
const result = isPalindrome(head);
console.log(result);
