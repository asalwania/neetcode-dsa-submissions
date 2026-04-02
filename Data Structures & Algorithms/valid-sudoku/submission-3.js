class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows={};
        const cols={};
        const boxes={};

        for(let r=0; r<board.length; r++){
            for(let c=0; c<board[0].length; c++){
                const curr = board[r][c];
                if(curr === ".") continue;
                const boxPos = `${Math.floor(r/3)}-${Math.floor(c/3)}`
                const rowPos = r.toString();
                const colPos = c.toString();
                if(!rows[rowPos]){
                    rows[rowPos]=new Set();
                }
                if(!cols[colPos]){
                    cols[colPos]=new Set();
                }
                if(!boxes[boxPos]){
                    boxes[boxPos]=new Set();
                }
                if(rows[rowPos].has(curr) || cols[colPos].has(curr) || boxes[boxPos].has(curr)) return false;
                rows[rowPos].add(curr) ;
                cols[colPos].add(curr) ;
                boxes[boxPos].add(curr);
            }
        }
        return true;
    }
}
