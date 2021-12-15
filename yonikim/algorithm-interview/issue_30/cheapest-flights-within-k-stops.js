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
  // 인접 리스트 생성
  const adj = new Map();
  for (let [frm, to, weight] of flights) {
    if (adj.has(frm)) adj.get(frm).push([to, weight]);
    else adj.set(frm, [[to, weight]]);
  }

  function dijkstra(start) {
    let q = [];
    let dist = new Array(n).fill(Infinity);

    q.push([start, 0, 0]);
    dist[start] = 0;

    while (q.length) {
      let [here, cost, move] = q.shift();

      if (move > K || !adj.get(here)) continue;

      for (let [there, weight] of adj.get(here)) {
        let nextDist = cost + weight;
        if (dist[there] > nextDist) {
          dist[there] = nextDist;
          q.push([there, nextDist, move + 1]);
        }
      }
    }

    return dist[dst];
  }

  let ans = dijkstra(src);
  return ans === Infinity ? -1 : ans;
};

const n = 3;
const flights = [
  [0, 1, 100],
  [1, 2, 100],
  [0, 2, 500],
];
const src = 0;
const dst = 2;
const k = 1;

const result = findCheapestPrice(n, flights, src, dst, k);
console.log(result);
