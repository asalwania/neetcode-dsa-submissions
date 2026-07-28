class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let minSoFar = prices[0]
        for(let i=1; i<prices.length; i++){
            maxProfit = Math.max(maxProfit,prices[i]-minSoFar);
            minSoFar = Math.min(minSoFar,prices[i]);
        }
        return maxProfit;
    }
}
