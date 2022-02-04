package tree;

import tree.model.TreeNode;

public class LeetCode687 {

    private int max;
    public int longestUnivaluePath(TreeNode root) {
        this.max = 0;
        getPath(root);
        return max;
    }
    public int getPath(TreeNode node){
        if(node == null){
            return 0;
        }
        int left = getPath(node.left);
        int right = getPath(node.right);
        int lPath =0;
        int rPath = 0;
        if(node.left != null && node.val == node.left.val){
            lPath = left + 1;
        }
        if(node.right != null && node.val == node.right.val){
            rPath = right + 1;
        }
        this.max = Math.max(max, lPath+rPath);
        return Math.max(rPath, lPath);
    }

}
