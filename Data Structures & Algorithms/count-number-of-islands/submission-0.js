class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const visited = new Set();
        let res = 0;
        for(let r=0; r<grid.length; r++){
            for(let c=0; c<grid[0].length; c++){
                if(this.explore(r,c,grid,visited)) res++;
            }
        }

        return res;
    }

    explore(r, c, grid, visited){
        const rowInBound = r >=0 && r < grid.length;
        const colInBound = c >=0 && c < grid[0].length;
        if(!rowInBound || !colInBound) return false;
        if(grid[r][c] === "0") return false;
        const pos = r + "," + c;
        if(visited.has(pos)) return false;
        visited.add(pos);
    
        this.explore(r-1,c,grid, visited)
        this.explore(r+1,c,grid, visited) 
        this.explore(r,c-1,grid, visited) 
        this.explore(r,c+1,grid, visited)

        return true;
        
    }
}
