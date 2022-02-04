package tree;

import java.util.*;

//참고 : https://cheonhyangzhang.gitbooks.io/leetcode-solutions/content/310-minimum-height-trees.html
public class LeetCode310 {
    public List<Integer> findMinHeightTrees(int n, int[][] edges) {
        Map<Integer, LinkedList<Integer>> adj = new HashMap<Integer, LinkedList<Integer>>();
        init(adj, n, edges);
        List<Integer> leaves = new LinkedList<Integer>();
        for (Integer i:adj.keySet()) {
            if (adj.get(i).size() == 1) {
                leaves.add(i);
            }
        }
        if (leaves.size() == 0) {
            leaves.add(0);
            return leaves;
        }
        while (n > 2) {
            n = n - leaves.size();
            List<Integer> newLeaves = new LinkedList<Integer>();
            for (Integer i:leaves) {
                int nb = adj.get(i).get(0);
                adj.get(nb).remove(i);
                if (adj.get(nb).size() == 1) {
                    newLeaves.add(nb);
                }
            }
            leaves = newLeaves;
        }
        return leaves;
    }
    private void init(Map<Integer, LinkedList<Integer>> adj, int n, int[][] edges) {
        for (int i = 0; i < n; i ++) {
            adj.put(i, new LinkedList<Integer>());
        }
        for (int i = 0; i < edges.length; i ++) {
            adj.get(edges[i][0]).add(edges[i][1]);
            adj.get(edges[i][1]).add(edges[i][0]);
        }
    }
}
