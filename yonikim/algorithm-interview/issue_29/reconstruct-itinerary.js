/**
 * https://leetcode.com/problems/reconstruct-itinerary/
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  const graph = tickets.reduce((a, [from, to]) => {
    a[from] = a[from] || [];
    a[from].push(to);
    return a;
  }, {});

  Object.keys(graph).forEach((key) =>
    graph[key].sort((a, b) => b.localeCompare(a))
  );

  let result = [];
  result = dfs(result, graph, "JFK");

  return result.reverse();
};

const dfs = (result, graph, from) => {
  while (graph[from] && graph[from].length > 0) {
    const to = graph[from].pop();
    dfs(result, graph, to);
  }
  result.push(from);
  return result;
};

const tickets = [
  ["JFK", "SFO"],
  ["JFK", "ATL"],
  ["SFO", "ATL"],
  ["ATL", "JFK"],
  ["ATL", "SFO"],
];
const result = findItinerary(tickets);
console.log(result);
