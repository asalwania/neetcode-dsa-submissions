class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows={};
        const cols={};
        const boxes={};
        for(let r=0; r<9; r++){
            for(let c=0; c<9; c++){
                const currEl = board[r][c];
                if(currEl === ".") continue;
                if(rows[r]?.[currEl] || cols[c]?.[currEl] || boxes[this.getBoxHash(r,c)]?.[currEl]){
                    return false;
                }else{
                    if(!rows[r]){
                        rows[r]={};
                    }
                    if(!cols[c]){
                        cols[c]={};
                    }
                    if(!boxes[this.getBoxHash(r,c)]){
                        boxes[this.getBoxHash(r,c)]={};
                    }
                    rows[r][currEl]=1;
                    cols[c][currEl]=1;
                    boxes[this.getBoxHash(r,c)][currEl]=1;
                }
            }
        }

        return true;
    }

    getBoxHash(r,c){
        return `${Math.floor(r/3)}${Math.floor(c/3)}`
    }
}
