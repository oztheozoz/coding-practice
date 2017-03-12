// https://leetcode.com/problems/sort-characters-by-frequency/?tab=Description#/description
/**
 * @param {string} s
 * @return {string}
 * "abcaabbd"
 * "aaabbcd"
 * [, [c, d], [b], [a]]
 */
var frequencySort = function(s) {
    let freqMap = new Map();
    let result = "";
    
    // Count frequency of characters
    for(let char of s) {
        if(freqMap.get(char) === undefined) {
            freqMap.set(char, 1);
        } else {
            freqMap.set(char, freqMap.get(char) + 1);
        }
    }
    
    let bucket = [];
    for(let [key, value] of freqMap.entries()) {
        if(bucket[value] === undefined) {
            bucket[value] = [key];
        } else {
            bucket[value].push(key);
        }
    }
    
    for(let i = bucket.length; i > 0; i--) {
        if(bucket[i]) {
            let value = bucket[i];
            for(let letter of value) {
                let count = 0;
                while(count < i) {
                    result += letter;
                    count++;
                }
           }
        }
    }
    
    return result;
};