// https://leetcode.com/problems/maximum-size-subarray-sum-equals-k
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function(nums, k) {
    let max = 0;
    for(let map = new Map(), l = nums.length, sum = 0, i = 0; i < l; i++) {
        sum += nums[i];
        
        if(sum === k) {
            max = i + 1;
        } else if(map.get(sum - k) !== undefined) {
            max = Math.max(max, i - map.get(sum - k));
        }
        
        if(map.get(sum) === undefined) {
            map.set(sum, i);
        }
    }
    
    return max;
};