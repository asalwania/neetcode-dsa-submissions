class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const visited = new Set();
        let maxArea = 0;

        for(let r=0; r<grid.length; r++){
            for(let c=0; c<grid[0].length; c++){
                const newArea = this.explore(r,c,grid,visited)
                if(newArea > maxArea) maxArea = newArea;
            }
        }

        return maxArea;
    }

    explore(r,c, grid, visited){
        const rowInBound = r >=0 && r < grid.length;
        const colInBound = c >=0 && c < grid[0].length;
        const pos = r+","+c;
        if(!rowInBound || !colInBound) return 0;
        if(grid[r][c] === 0) return 0;
        if(visited.has(pos)) return 0;
        visited.add(pos);
        let res=1;

        res += this.explore(r+1,c,grid,visited);
        res += this.explore(r-1,c,grid,visited);
        res += this.explore(r,c+1,grid,visited);
        res += this.explore(r,c-1,grid,visited);

        console.log(res)

        return res;
    }
}
