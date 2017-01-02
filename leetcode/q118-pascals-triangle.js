// https://leetcode.com/problems/pascals-triangle/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows === 0) return [];
    if(numRows === 1) return [[1]];
    
    let result = [[1], [1,1]];
    if(numRows === 2) return result;
    
    for(let i = 2; i < numRows; i++) {
        let prevArr = result[i-1];
        console.log(prevArr);
        let arr = [1];
        for(let j = 0, k = 1; k < prevArr.length; j++, k++) {
            arr.push(prevArr[j] + prevArr[k]);
        }
        arr.push(1);
        result.push(arr);
    }
    
    return result;
};