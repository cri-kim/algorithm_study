/**
 * https://leetcode.com/problems/diameter-of-binary-tree/
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
var diameterOfBinaryTree = function (root) {
  let max = 0;

  const helper = (node) => {
    if (!node) return 0;

    const left = helper(node.left);
    const right = helper(node.right);

    max = Math.max(max, 1 + left + right);
    return 1 + Math.max(left, right);
  };

  helper(root);
  return max - 1;
};

const root = [1, 2, 3, 4, 5];
const result = diameterOfBinaryTree(root);
console.log(result);
