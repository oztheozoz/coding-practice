// https://leetcode.com/problems/most-frequent-subtree-sum
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
var findFrequentTreeSum = function(root) {
    let maxCount = 1;
    let tally = {};
    let result = [];
    let tempVal;
    
    findFrequentTreeSumRecurse(root);
    
    function findFrequentTreeSumRecurse(root) {
        if(root === null) {
            return null;
        }
        
        let leftSum = findFrequentTreeSumRecurse(root.left);
        let rightSum = findFrequentTreeSumRecurse(root.right);
        
        if(leftSum === null && rightSum === null) {
            tempVal = root.val;
        } else if(leftSum === null) {
            tempVal = root.val + rightSum;
        } else if(rightSum === null) {
            tempVal = root.val + leftSum;
        } else {
            tempVal = root.val + leftSum + rightSum;
        }
        
        processResult(tempVal);
        
        return tempVal;
    }
    
    function processResult(val) {
        if(tally[val] === undefined) {
            tally[val] = 1;
        } else {
            tally[val]++;
        }
        
        if(tally[val] === maxCount) {
            result.push(val);
        } else if (tally[val] > maxCount) {
            maxCount = tally[val]
            result = [val];
        }
    }
    
    return result;
};