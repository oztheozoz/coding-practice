// https://leetcode.com/problems/battleships-in-a-board
/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    let result = 0;
    
    for(let i = 0, l = board.length; i < l; i++) {
        for(let j = 0, m = board[0].length; j < m; j++) {
            if(board[i][j] === 'X' && (i === 0 || board[i - 1][j] !== 'X') && (j === 0 || board[i][j - 1] !== 'X')) {
                result++;
            }
        }
    }
    
    return result;
};