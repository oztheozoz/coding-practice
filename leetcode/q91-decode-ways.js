// https://leetcode.com/problems/decode-ways
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if(s.length === 0 || s[0] === '0') return 0;
    
    let map = {"": 1};
    let str = "";
    
    for(let i = s.length - 1; i >= 0; i--) {
        str = s[i] + str;
        if(s[i] === '0') continue;
        
        if(str.length > 1) {
            let num = parseInt(str.substring(0, 2));
            
            if(num <= 26) {
                if(str[1] === '0') {
                    map[str] = getValue(str.substring(2));
                } else {
                    map[str] = getValue(str.substring(1)) + getValue(str.substring(2));
                }
            } else {
                if(str[1] === '0') {
                    return 0;
                }
                map[str] = getValue(str.substring(1));
            }
        } else {
            map[str] = 1;
        }
    }
    
    function getValue(key) {
        if(key[0] === '0') {
            return 0;
        } else {
            return map[key];
        }
    }
    
    return map[str];
};