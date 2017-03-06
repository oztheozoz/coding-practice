// https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    const median = nums.sort((a, b) => {
        return a - b;
    })[Math.floor(nums.length / 2)];
    
    return nums.reduce((total, cur) => {
        return total + Math.abs(median - cur);
    }, 0)
};