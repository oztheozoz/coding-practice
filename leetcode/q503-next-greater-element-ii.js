// https://leetcode.com/problems/next-greater-element-ii
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let result = [];
    if(nums === null || nums.length === 0) return result;
    if(nums.length === 1) return [-1];
    let stack = [];
    
    for(let i = 0, n = nums.length; i < n; i++) {
        result.push(-1);
    }
    
    for(let i = 0, n = nums.length; i < n * 2; i++) {
        let num = nums[i % n];
        while(stack.length !== 0 && nums[stack[stack.length - 1]] < num) {
            result[stack.pop()] = num;
        }
        
        if(i < n) stack.push(i);
    }
    
    return result;
};