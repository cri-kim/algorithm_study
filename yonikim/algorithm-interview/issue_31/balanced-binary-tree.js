/**
 * https://leetcode.com/problems/balanced-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (!root) return true;

  // console.log(helper(root));
  return helper(root) !== false;
};

const helper = (node) => {
  if (!node) return 0;

  const left = helper(node.left);
  const right = helper(node.right);

  if (left === false || right === false || Math.abs(left - right) > 1) {
    return false;
  }

  return Math.max(left, right) + 1;
};

const root = [1, 2, 2, 3, 3, null, null, 4, 4];
const result = isBalanced(root);
console.log(result);
