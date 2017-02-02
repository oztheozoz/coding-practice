// https://leetcode.com/problems/minimum-depth-of-binary-tree/
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
var minDepth = function(root) {
    var minDepth = 0;
    
    if (root !== null) {
        let queue = [];
        queue.push(root);
        
        breakPoint:
        while(queue.length !== 0) {
            let queueLength = queue.length;
            minDepth++;
            
            while(queueLength > 0) {
                let node = queue.shift();
                if(node.left === null && node.right === null) {
                    break breakPoint;
                }
                
                if(node.left !== null) {
                    queue.push(node.left);
                }
                
                if(node.right !== null) {
                    queue.push(node.right);
                }
                
                queueLength--;
            }
        }
    }
    
    return minDepth;
};