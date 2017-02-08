// https://leetcode.com/problems/length-of-last-word/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var result = 0;
    var lastChar = " ";
    
    for(var i = 0; i < s.length; i++) {
        if(lastChar === " " && s[i] !== " ") {
            result = 1;
        } else if(s[i] !== " ") {
            result++;
        }
        
        lastChar = s[i];
    }
    
    return result;
};