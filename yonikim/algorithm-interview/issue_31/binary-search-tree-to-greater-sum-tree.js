/**
 * https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/
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
var bstToGst = function (root) {
  let val = 0;

  const helper = (node) => {
    if (!node) return 0;

    helper(node.right);
    val += node.val;
    node.val = val;
    helper(node.left);
  };

  helper(root);
  return root;
};

const root = [4, 1, 6, 0, 2, 5, 7, null, null, null, 3, null, null, null, 8];
const result = bstToGst(root);
console.log(result);
