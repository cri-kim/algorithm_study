/**
 * https://leetcode.com/problems/minimum-height-trees/
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
  if (n === 1) return [0];
  var result = [],
    tree = {},
    list = [],
    i,
    j,
    curr,
    visited = 0;
  for (i = 0; i < edges.length; i++) {
    curr = edges[i];
    if (!tree[curr[0]]) tree[curr[0]] = new Node(curr[0]);
    if (!tree[curr[1]]) tree[curr[1]] = new Node(curr[1]);
    tree[curr[0]].neighbor.push(tree[curr[1]]);
    tree[curr[1]].neighbor.push(tree[curr[0]]);
  }
  for (i in tree) {
    if (tree[i].neighbor.length === 1) {
      list.push(tree[i].val);
    }
  }
  bfs(list);
  for (i = 0; i < list.length; i++) {
    result.push(list[i]);
  }
  return result;

  function Node(val) {
    this.val = val;
    this.neighbor = [];
  }
  function bfs(list) {
    var len = list.length,
      top,
      topNeighbor;
    if (visited >= n - 2) return;
    while (len--) {
      visited++;
      top = tree[list.shift()];
      topNeighbor = top.neighbor[0];
      deleteNode(topNeighbor.neighbor, top.val);
      if (
        topNeighbor.neighbor.length <= 1 &&
        list.indexOf(topNeighbor.val) === -1
      ) {
        list.push(topNeighbor.val);
      }
      delete tree[top.val];
    }
    bfs(list);
  }
  function deleteNode(arr, val) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].val === val) {
        arr.splice(i, 1);
        return;
      }
    }
  }
};

const n = 4,
  edges = [
    [1, 0],
    [1, 2],
    [1, 3],
  ];
const result = findMinHeightTrees(n, edges);
console.log(result);
