/**
 * https://leetcode.com/problems/network-delay-time/
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  const adjList = {};
  for (const [u, v, w] of times) {
    adj = [v, w];
    if (adjList[u]) {
      adjList[u].push(adj);
    } else {
      adjList[u] = [];
      adjList[u].push(adj);
    }
  }

  Object.keys(adjList).forEach((key) => {
    adjList[key].sort((a, b) => a[1] - b[1]);
  });

  const dist = {};
  for (let i = 1; i <= n; i++) {
    dist[i] = Number.MAX_SAFE_INTEGER;
  }
  dfs(adjList, dist, k, 0);

  let result = Number.MIN_SAFE_INTEGER;
  for (let i = 1; i <= n; i++) {
    if (dist[i] == Number.MAX_SAFE_INTEGER) return -1;
    result = Math.max(result, dist[i]);
  }
  return result;
};

const dfs = (adjList, dist, start, elapsed) => {
  if (elapsed >= dist[start]) return;
  dist[start] = elapsed;
  if (adjList[start]) {
    for (const next of adjList[start]) {
      dfs(adjList, dist, next[0], elapsed + next[1]);
    }
  }
};

const times = [[1, 2, 1]],
  n = 2,
  k = 2;

const result = networkDelayTime(times, n, k);
console.log(result);
