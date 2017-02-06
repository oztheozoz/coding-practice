// https://leetcode.com/problems/isomorphic-strings/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let map1 = new Map(), map2 = new Map();
    for(let i = 0; i < s.length; i++) {
        if(map1.get(s[i]) !== map2.get(t[i])) return false;
        map1.set(s[i], i);
        map2.set(t[i], i);
    }
    
    return true;
};