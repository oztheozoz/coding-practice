// https://leetcode.com/problems/find-all-anagrams-in-a-string/
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let result = [];
    if(s.length === 0 || p.length === 0 || p.length > s.length) {
        return result;
    }

    let map = {};

    for(let i = 0; i < p.length; i++) {
        if(map[p[i]] === undefined) {
            map[p[i]] = 1;
        } else {
            map[p[i]]++;
        }
    }

    let count = p.length, l = 0, r = 0;
    while(r < s.length) {
        if(map[s[r++]]-- >= 1) {
            count--;
        }

        if(count === 0) {
            result.push(l);
        }

        if(r - l === p.length && map[s[l++]]++ >= 0) {
            count++;
        }
    }

    return result;
};