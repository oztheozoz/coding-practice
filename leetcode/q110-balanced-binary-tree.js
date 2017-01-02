// https://leetcode.com/problems/balanced-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(root === null) {
        return true;
    } else if(Math.abs(getTreeHeight(root.left) - getTreeHeight(root.right)) > 1) {
        return false;
    }
    
    return true && isBalanced(root.left) && isBalanced(root.right);
};

function getTreeHeight(node) {
    if(node === null) {
        return 0;
    }
    
    return 1 + Math.max(getTreeHeight(node.left), getTreeHeight(node.right));
}