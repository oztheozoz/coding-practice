// https://leetcode.com/problems/maximum-size-subarray-sum-equals-k
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function(nums, k) {
    let max = 0;
    let map = {};
    for(let i = 0, sum = 0, l = nums.length; i < l; i++) {
        sum += nums[i];
        if(sum === k) {
            max = i + 1;
        } else if(map[sum - k] !== undefined) {
            max = Math.max(max, i - map[sum - k]);
        }
        
        if(map[sum] === undefined) map[sum] = i;
    }
    
    return max;
};