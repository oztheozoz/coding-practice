// https://leetcode.com/problems/house-robber/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let didNotRobPrev = 0;
    let didRobPrev = 0;
    
    for(let i = 0; i < nums.length; i++) {
        let temp = didNotRobPrev;
        didNotRobPrev = Math.max(didNotRobPrev, didRobPrev);
        didRobPrev = nums[i] + temp;
    }
    
    return Math.max(didNotRobPrev, didRobPrev);
};