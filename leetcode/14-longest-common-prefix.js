// https://leetcode.com/problems/longest-common-prefix/
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var result = "", index = 0;
    
    outer:
    while(true && strs.length > 0) {
        var commonChar = strs[0][index];
        for(let i = 0; i < strs.length; i++) {
            if(commonChar === undefined || strs[i][index] === undefined || strs[i][index] !== commonChar) {
                break outer;
            }
        }
        
        result += commonChar;
        index++;
    }
    
    return result;
};