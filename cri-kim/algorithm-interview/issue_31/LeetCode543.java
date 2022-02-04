package tree;

import tree.model.TreeNode;
//풀이시간 : 30min
public class LeetCode543 {

    private int max;
    public int diameterOfBinaryTree(TreeNode root) {

        if(root == null) return 0;
        getDepth(root);
        return max;
    }

    public int getDepth(TreeNode tree){
        if(tree == null) return 0;
        int leftCnt = getDepth(tree.left);
        int rightCnt = getDepth(tree.right);
        this.max = Math.max(max, leftCnt + rightCnt);
        return Math.max(leftCnt, rightCnt)+1;
    }

}
