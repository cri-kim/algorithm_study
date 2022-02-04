package tree;

import tree.model.TreeNode;
//참고 : https://github.com/lydxlx1/LeetCode/blob/master/src
public class LeetCode1038 {

    private int sum = 0;
    public TreeNode bstToGst(TreeNode root) {
        int sum = 0;
        dfs(root);
        return root;
    }

    void dfs(TreeNode root) {
        if (root == null) {
            return;
        }
        dfs(root.right);
        sum += root.val;
        root.val = sum;
        dfs(root.left);
    }
}
