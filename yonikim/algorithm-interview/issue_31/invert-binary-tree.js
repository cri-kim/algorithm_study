/**
 * https://leetcode.com/problems/invert-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  invert(root);
  return root;
};

const invert = (node) => {
  if (!node) return null;

  const temp = node.left;
  node.left = node.right;
  node.right = temp;
  invert(node.left);
  invert(node.right);
};

const root = [4, 2, 7, 1, 3, 6, 9];
const result = invertTree(root);
console.log(root);
