// https://leetcode.com/submissions/detail/93660776/
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
var largestValues = function(root) {
    let result = [];
    
    if(root) {
        let queue = [];
        queue.push(root);
        while(queue.length > 0) {
            let max = Number.NEGATIVE_INFINITY;
            for(let i = 0, l = queue.length; i < l; i++) {
                let node = queue.shift();
                
                if(node.val > max) max = node.val;
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
            }
            
            result.push(max);
        }
    }
    
    return result;
};