// https://leetcode.com/problems/contains-duplicate-ii/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let result = false, map = {};
    for(let i = 0; i < nums.length; i++) {
        let value = map[nums[i]];
        
        if(value !== undefined) {
            if(i - value <= k) {
                result = true;
                break;
            } else {
                map[nums[i]] = i;
            }
        } else {
            map[nums[i]] = i;
        }
    }
    return result;
};