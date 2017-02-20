// https://leetcode.com/problems/find-bottom-left-tree-value
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    var result = root.val;
    var depth = 0;
    findBottomLeftValueHelper(root, 0);
    
    function findBottomLeftValueHelper(root, level) {
        if(root === null) {
            return;
        }
        
        level++;
        
        if(level > depth) {
            if(root.left) {
                result = root.left.val;
                depth = level;
            } else if(root.right) {
                result = root.right.val;
                depth = level;
            }
        }
        
        findBottomLeftValueHelper(root.left, level);
        findBottomLeftValueHelper(root.right, level);
    } 
    
    return result;
};