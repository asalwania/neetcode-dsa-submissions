class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let i=0, max=0;

        for(let j=1; j<prices.length; j++){
            if(prices[i] < prices[j]){
                max = Math.max(max, prices[j] - prices[i]);
            }else{
                i = j;
            }
        }
        
        return max;
        
    }
}
