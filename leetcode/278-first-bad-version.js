// https://leetcode.com/problems/first-bad-version
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        function recurse(start, end) {
            let mid = Math.floor((start + end) / 2);
            if(isBadVersion(start)) return start;
            
            if(isBadVersion(mid)) {
                end = mid;
            } else {
                start = mid + 1;
            }
            
            return recurse(start, end);
        }
        
        return recurse(1, n);
    };
};