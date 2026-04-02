class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = {};
        const cols = {};
        const boxes = {};

        for(let r in board){
            for (let c in board[r]){
                const curr = board[r][c];
                if(curr === ".") continue;
                
                const boxPos = `${Math.floor(parseInt(r)/3)},${Math.floor(parseInt(c)/3)}`
                if(!rows[r]) rows[r] = new Set();
                if(!cols[c]) cols[c] = new Set();
                if(!boxes[boxPos]) boxes[boxPos] = new Set();
                
                if(rows[r].has(curr) || cols[c].has(curr) || boxes[boxPos].has(curr)){
                    return false;
                }
                rows[r].add(curr);
                cols[c].add(curr);
                boxes[boxPos].add(curr);
            }
        }
        return true;
    }
}
