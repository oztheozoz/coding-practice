// https://leetcode.com/problems/binary-tree-vertical-order-traversal
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
var verticalOrder = function(root) {
    if(root === null) return [];
    let levelTracker = new Map();
    let queue = [{node: root, level: 0}];
    let minLevel = 0;
    let maxLevel = 0;
    
    while(queue.length !== 0) {
        let obj = queue.shift();
        
        if(obj.level < minLevel) {
            minLevel = obj.level;
        }
        
        if(obj.level > maxLevel) {
            maxLevel = obj.level;
        }
        
        if(levelTracker.get(obj.level) === undefined) {
        levelTracker.set(obj.level, [obj.node.val]);
        } else {
            levelTracker.get(obj.level).push(obj.node.val);
        }
        
        if(obj.node.left) {
            queue.push({node: obj.node.left, level: obj.level - 1});
        }
        
        if(obj.node.right) {
            queue.push({node: obj.node.right, level: obj.level + 1});
        }
    }
    
    let result = [];
    
    for(let i = minLevel; i <= maxLevel; i++) {
        result.push(levelTracker.get(i));
    }
    
    return result;
};