// https://leetcode.com/problems/minimum-size-subarray-sum
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
 
 /*
 [] 5 => 0
 [3] 4 => 0
 [1,2,3] 3 => 1
 [2, 3, 1, 2, 8, 1, 6] 5 => 2
 [1, 1, 1, 1] 2 => 2
 [2,3,4,5] 26 => 0
 [2,3,1,2,4,3] 7 => 2
 
 while head < nums.length || total >= s && tail < nums.length
 if total < s, add head val to total, head++
 if total >= s,
    minLength = Math.min(minLength, head - tail + 1)
    subtract tail val from total, tail++
 
 if(minLength < nums.length) return minLength
 else return 0;
 
 2 ptrs head and tail
 result is initially 0
 total keeps track of running total
 minLength initially is set to nums.length
 */
var minSubArrayLen = function(s, nums) {
    let runningTotal = 0, length = nums.length, minLength = length + 1, head = 0, tail = 0;
    
    while(head < length || (runningTotal >= s && tail < length)) {
        if(runningTotal < s) {
            runningTotal += nums[head++];
        } else {
            minLength = Math.min(minLength, head - tail);
            runningTotal -= nums[tail++];
        }
    }
    
    if(minLength < length + 1) return minLength;
    return 0;
};