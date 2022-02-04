package tree;

import tree.model.TreeNode;

import java.util.LinkedList;
import java.util.Queue;
//30minutes
public class LeetCode110 {
    public boolean isBalanced(TreeNode root) {
        if(root == null) return true;
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        while(!queue.isEmpty()){
            TreeNode node = queue.poll();
            int left = getHeight(node.left);
            int right = getHeight(node.right);
            if(Math.abs(left- right) > 1){
                return false;
            }

            if(node.left != null){
                queue.add(node.left);
            }
            if(node.right != null){
                queue.add(node.right);
            }
        }
        return true;
    }

    public int getHeight(TreeNode node){
        if(node == null){return 0;}
        return Math.max(getHeight(node.left), getHeight(node.right))+1;
    }
}
