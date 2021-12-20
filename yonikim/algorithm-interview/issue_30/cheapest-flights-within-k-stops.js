/**
 * https://leetcode.com/problems/cheapest-flights-within-k-stops/
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  const adj = new Map();
  for (let [from, to, price] of flights) {
    if (adj.has(from)) adj.get(from).push([to, price]);
    else adj.set(from, [[to, price]]);
  }

  let ans = dijkstra(n, adj, src, k);
  return ans === Infinity ? -1 : ans;
};

const dijkstra = (n, adj, start) => {
  const q = [];
  const dist = new Array(n).fill(Infinity);

  q.push([start, 0, 0]);

  while (q.length) {
    const [here, cost, move] = q.shift();

    if (move > k || !adj.get(here)) continue;

    for (let [there, weight] of adj.get(here)) {
      const nextDist = cost + weight;
      if (dist[there] > nextDist) {
        dist[there] = nextDist;
        q.push([there, nextDist, move + 1]);
      }
    }
  }
  return dist[dst];
};

const n = 3,
  flights = [
    [0, 1, 100],
    [1, 2, 100],
    [0, 2, 500],
  ],
  src = 0,
  dst = 2,
  k = 1;

const result = findCheapestPrice(n, flights, src, dst, k);
console.log(result);
