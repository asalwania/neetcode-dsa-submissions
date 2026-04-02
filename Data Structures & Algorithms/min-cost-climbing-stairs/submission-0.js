class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        //  [1,2,1,2,1,1,1],0
        cost.push(0);
        
        for(let i = cost.length-3; i>=0; i--){
            cost[i] = cost[i] + Math.min(cost[i+1],cost[i+2])
        }
        return Math.min(cost[1],cost[0]);
    }
}
