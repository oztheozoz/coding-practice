// https://leetcode.com/problems/valid-palindrome/
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let i = 0, j = s.length - 1, result = true;
    s = s.toLowerCase();
    
    while (j > i) {
        let isLeftIndexValid = s[i].match(/[A-Za-z0-9]/) !== null;
        let isRightIndexValid = s[j].match(/[A-Za-z0-9]/) !== null;
        
        if(isLeftIndexValid && isRightIndexValid) {
            if(s[i++] !== s[j--]) {
                result = false;
                break;
            }
        } else {
            if(!isLeftIndexValid) {
                i++;
            }
            
            if(!isRightIndexValid) {
                j--;
            }
        }
    }
    
    return result;
};