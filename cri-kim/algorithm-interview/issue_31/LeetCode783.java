package tree;

import tree.model.TreeNode;

public class LeetCode783 {

    public int preimageSizeFZF(int K) {
        if (K == 0) {
            return 5;
        }
        return (int) (search(K) - search(K - 1));
    }
    long search(long K) {
        long left = 0, right = 10L * Integer.MAX_VALUE;
        while (left + 1 < right) {
            long mid = (left + right) / 2;
            if (f(mid) <= K) {
                left = mid;
            } else {
                right = mid;
            }
        }
        return left;
    }

    long f(long n) {
        long cnt = 0;
        while (n > 0) {
            cnt += n / 5;
            n /= 5;
        }
        return cnt;
    }
}
