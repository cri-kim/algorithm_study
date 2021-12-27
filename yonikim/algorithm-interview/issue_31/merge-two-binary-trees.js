/**
 * https://leetcode.com/problems/merge-two-binary-trees/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  return merge(root1, root2);
};

const merge = (node1, node2) => {
  if (!node1) return node2;
  if (!node2) return node1;

  node1.val += node2.val;
  node1.left = merge(node1.left, node2.left);
  node1.right = merge(node1.right, node2.right);

  return node1;
};

const root1 = [1, 3, 2, 5],
  root2 = [2, 1, 3, null, 4, null, 7];
const result = mergeTrees(root1, root2);
console.log(result);
