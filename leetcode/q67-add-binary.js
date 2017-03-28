// https://leetcode.com/problems/add-binary
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    if(a.length === 0) return b;
    if(b.length === 0) return a;
    
    let numMap = {'0': 0, '1': 1};
    let i = a.length - 1, j = b.length -1, carry = 0, result = "";
    
    while(i >= 0 || j >= 0) {
        let sum = carry;
        if(i >= 0) sum += numMap[a[i--]];
        if(j >= 0) sum += numMap[b[j--]];
        carry = Math.floor(sum / 2);
        result += sum % 2;
    }
    
    if(carry) result += 1;
    
    return result.split("").reverse().join("");
};