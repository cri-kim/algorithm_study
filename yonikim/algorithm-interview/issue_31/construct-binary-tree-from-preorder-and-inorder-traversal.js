/**
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const helper = (p1, p2, i1, i2) => {
    if (p1 > p2 || i1 > i2) return null;

    const value = preorder[p1];
    const index = inorder.indexOf(value);
    const count = index - i1;
    const node = new TreeNode(value);

    node.left = helper(p1 + 1, p1 + count, i1, index - 1);
    node.right = helper(p1 + count + 1, p2, index + 1, i2);
    return node;
  };

  return helper(0, preorder.length - 1, 0, inorder.length - 1);
};

const preorder = [3, 9, 20, 15, 7],
  inorder = [9, 3, 15, 20, 7];

const result = buildTree(preorder, inorder);
console.log(result);
