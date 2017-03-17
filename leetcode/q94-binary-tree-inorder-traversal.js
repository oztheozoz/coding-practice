// https://leetcode.com/problems/binary-tree-inorder-traversal
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let result = [];
    inorderTraversalRecurse(root, result);
    
    return result;
};

function inorderTraversalRecurse(root, result) {
    if(root === null) {
        return;
    }
    
    inorderTraversalRecurse(root.left, result);
    result.push(root.val);
    inorderTraversalRecurse(root.right, result);
}