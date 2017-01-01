/*
https://leetcode.com/problems/binary-tree-level-order-traversal/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result = [];
    levelOrderHelper(root, 0, result);
    return result;
};

function levelOrderHelper(node, level, result) {
    if(node === null) {
        return;
    }
    
    if(result[level]) {
        result[level].push(node.val);
    } else {
        result[level] = [node.val];
    }
    
    levelOrderHelper(node.left, level + 1, result);
    levelOrderHelper(node.right, level + 1, result);
}