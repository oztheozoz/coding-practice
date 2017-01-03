// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length === 0) {
        return 0;
    } else if(nums.length === 1) {
        return 1;
    } else {
        let lastSeen = nums[0];
        let move = true;
        let ptr2 = 1;
        for(let ptr1 = 1; ptr1 < nums.length; ptr1++) {
            if(lastSeen === nums[ptr1]) {
                move = false;
            } else {
                lastSeen = nums[ptr1];
                if(ptr1 !== ptr2) {
                    nums[ptr2] = nums[ptr1];
                }
                move = true;
            }
            
            if(move) {
                ptr2++;
            }
        }
        return ptr2;
    }
};