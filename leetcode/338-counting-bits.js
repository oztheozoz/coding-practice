// https://leetcode.com/problems/counting-bits/
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    let result = [];
    for(let i = 0; i <= num; i++) {
    	let count = 0, curNum = i;
    	while(curNum) {
    		curNum &= curNum - 1
    		count++;
    	}
    	result.push(count);
    }

    return result;
};