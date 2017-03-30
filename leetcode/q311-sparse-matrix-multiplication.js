// https://leetcode.com/problems/sparse-matrix-multiplication
/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var multiply = function(A, B) {
    let rowLengthA = A.length;
    let colLengthA = A[0].length;
    let rowLengthB = B.length;
    let colLengthB = B[0].length;
    let result = [];
    
    for(let i = 0; i < rowLengthA; i++) {
        result.push([]);
        for(let j = 0; j < colLengthB; j++) {
            let sum = 0;
            for(let k = 0; k < rowLengthB; k++) {
                sum += A[i][k] * B[k][j];
            }
            result[i][j] = sum;
        }
    }
    
    return result;
};