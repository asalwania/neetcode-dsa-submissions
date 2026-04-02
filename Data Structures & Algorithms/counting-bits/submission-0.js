class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        const dp=[0];
        let offset = 1;
        for(let i=1; i <= n; i++){
            if(i === offset * 2){
                offset = i;
            }
            dp.push(1 + dp[i - offset]);
        }
        return dp;
    }
}
