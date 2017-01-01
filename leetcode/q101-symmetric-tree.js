// https://leetcode.com/problems/symmetric-tree/

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
var isSymmetric = function(root) {
    if(root !== null) {
        let queue = [root];
        while(queue.length > 0) {
            // Get number of items in level
            let numItems = queue.length;
            let arr = [];
            for(let i = 0; i < numItems; i++) {
                if(queue[0] !== null) queue.push(queue[0].left);
                if(queue[0] !== null) queue.push(queue[0].right);
                let node = queue.shift();
                if(node === null) {
                    arr.push(null);
                } else {
                    arr.push(node.val);
                }
            }
            console.log(arr);
            
            if(!isPalindrome(arr)) {
                return false;
            }
        }
    }
    
    return true;
};

function isPalindrome(arr) {
    for(let i=0, j=arr.length-1; i < j; i++, j--) {
        if(arr[i] !== arr[j]) {
            return false;
        }
    }
    
    return true;
}