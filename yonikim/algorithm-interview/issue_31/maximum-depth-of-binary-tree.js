/**
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
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
var maxDepth = function (root) {
  const helper = (node) => {
    if (!node) return 0;

    const left = helper(node.left);
    const right = helper(node.right);

    return 1 + Math.max(left, right);
  };

  return helper(root);
};

const root = [3, 9, 20, null, null, 15, 7];
const result = maxDepth(root);
console.log(result);
