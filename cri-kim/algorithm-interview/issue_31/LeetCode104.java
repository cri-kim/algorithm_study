package tree;

import tree.model.TreeNode;

//진행시간 : 10분
public class LeetCode104 {

    private int max = 0;
    public int maxDepth(TreeNode root) {

        findDepth(root, 1);

        return max;
    }

    public void findDepth(TreeNode tree, int depth){
        if(tree == null) return;
        if(tree.left != null) {
            findDepth(tree.left, depth + 1);
        }
        if(tree.right != null) {
            findDepth(tree.right, depth + 1);
        }
        if(depth > this.max){
            this.max = depth;
        }
    }
}
