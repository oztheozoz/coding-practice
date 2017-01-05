// https://leetcode.com/problems/binary-tree-paths/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let result = [];
    recurseHelper(root, "", result);
    return result;
};

function recurseHelper(node, path, result) {
    if(node === null) {
        return;
    }
    
    if(node.left === null && node.right === null) {
        result.push(path + node.val);
    }
    
    if(node.left !== null) {
        recurseHelper(node.left, path + node.val + '->', result);
    }
    
    if(node.right !== null) {
        recurseHelper(node.right, path + node.val + '->', result);   
    }
}