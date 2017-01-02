// https://leetcode.com/problems/arranging-coins/

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let rows = 0, counter = 1;
    
    while(counter <= n) {
        n -= counter++;
        rows++;
    }
    
    return rows;
};