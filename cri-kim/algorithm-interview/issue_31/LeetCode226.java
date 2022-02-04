package tree;

import tree.model.TreeNode;
//10 minutes
public class LeetCode226 {

    public TreeNode invertTree(TreeNode root) {
        dfs(root);
        return root;
    }
    public void dfs(TreeNode node){
        if(node == null ) return;
        TreeNode temp = node.left;
        node.left = node.right;
        node.right = temp;

        if(node.left != null){
            dfs(node.left);
        }
        if(node.right != null){
            dfs(node.right);
        }
    }
}
