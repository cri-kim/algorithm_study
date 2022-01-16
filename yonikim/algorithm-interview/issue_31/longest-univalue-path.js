/**
 * https://leetcode.com/problems/longest-univalue-path/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function (root) {
  let max = 0;
  const helper = (node) => {
    if (!node) return 0;

    let left = helper(node.left);
    let right = helper(node.right);

    if (node.left) {
      left += node.left.val === node.val ? 1 : -left;
    }
    if (node.right) {
      right += node.right.val === node.val ? 1 : -right;
    }

    max = Math.max(max, left + right);
    return Math.max(left, right);
  };
  helper(root);
  return max;
};

const root = [5, 4, 5, 1, 1, 5];
const result = longestUnivaluePath(root);
console.log(result);
