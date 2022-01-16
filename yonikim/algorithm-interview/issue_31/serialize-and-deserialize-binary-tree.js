/**
 * https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (!root) return null;

  const data = [];
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    if (node) {
      data.push(node.val);

      queue.push(node.left);
      queue.push(node.right);
    } else {
      data.push(null);
    }
  }

  while (data.length > 0 && data[data.length - 1] === null) {
    data.pop();
  }
  return JSON.stringify(data);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  try {
    data = JSON.parse(data);
  } catch (err) {
    return null;
  }

  if (!(data instanceof Array) || data.length === 0) {
    return null;
  }

  const root = new TreeNode(data.shift());
  const queue = [root];

  while (data.length > 0) {
    const node = queue.shift();

    let val = data.shift();
    if (typeof val !== "undefined" && val !== null) {
      node.left = new TreeNode(val);
      queue.push(node.left);
    }

    val = data.shift();
    if (typeof val !== "undefined" && val !== null) {
      node.right = new TreeNode(val);
      queue.push(node.right);
    }
  }
  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

const root = [1, 2, 3, null, null, 4, 5];
const result = serialize(root);
console.log(result);
