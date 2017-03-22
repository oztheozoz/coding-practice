// https://leetcode.com/problems/single-number-iii
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let freqMap = new Map();
    let result = [];
    console.log(nums);
    for(let key in nums) {
        if(freqMap.get(nums[key]) === undefined) {
            freqMap.set(nums[key], 1);
        } else {
            freqMap.set(nums[key], freqMap.get(nums[key]) + 1);
        }
    }
    
    for(let [key, value] of freqMap.entries()) {
        if(value === 1) {
            result.push(key);
        }
    }
    
    return result;
};