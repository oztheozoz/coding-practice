// https://leetcode.com/problems/plus-one/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 1;
    
    for(let i = digits.length - 1; i >= 0; i--) {
        if(carry === 1) digits[i] = digits[i] + carry--;
        if(digits[i] >= 10) {
            carry = 1;
            digits[i] = 0;
        } else {
            break;
        }
    }
    
    if(carry === 1) {
        digits.unshift(carry);
    }
    
    return digits;
};