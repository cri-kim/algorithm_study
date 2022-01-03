/**
 * https://leetcode.com/problems/minimum-distance-between-bst-nodes/
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
var minDiffInBST = function (root) {
  let previous = null;
  let min = Number.MAX_SAFE_INTEGER;

  const helper = (node) => {
    if (!node) return;

    helper(node.left);
    if (previous !== null) {
      min = Math.min(min, node.val - previous);
    }
    previous = node.val;
    helper(node.right);
  };

  helper(root);
  return min;
};

const root = [4, 2, 6, 1, 3];
const result = minDiffInBST(root);
console.log(result);
