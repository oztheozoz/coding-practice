// https://leetcode.com/problems/path-sum/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    return hasPathSumHelper(root, sum, 0);
};

function hasPathSumHelper(node, sum, carry) {
    if (node === null) {
        return false;
    }
    
    var total = node.val + carry;
    
    if (node.left === null && node.right === null) {
        return total === sum;
    }
    
    return hasPathSumHelper(node.left, sum, total) || hasPathSumHelper(node.right, sum, total);
}