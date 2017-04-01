// https://leetcode.com/problems/find-the-celebrity
/**
 * Definition for knows()
 * 
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
var solution = function(knows) {
    /**
     * @param {integer} n Total people
     * @return {integer} The celebrity
     */
    return function(n) {
        if(n < 2) return -1;
        let celeb = 0;
        
        for(let i = 1; i < n; i++) {
            if(knows(celeb, i)) {
                celeb = i;
            }
        }
        
        for(let i = 0; i < n; i++) {
            if(celeb !== i && (knows(celeb, i) || (!knows(i, celeb)))) return -1;
        }
        
        return celeb;
    };
};