class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProf = 0;
        let l=0;
        let r=0;
        while(r < prices.length){
            maxProf = Math.max(maxProf,prices[r]-prices[l]);
            if(prices[r]-prices[l] <0){
                l++;
            }else{
             r++;
            }
        }
        return maxProf;
    }
}
