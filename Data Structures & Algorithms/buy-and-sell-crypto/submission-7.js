class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let b = prices[0];
        let s = 0;
        let p = 0;
        while(s < prices.length){
            p = Math.max(p, prices[s]-b);
            b = Math.min(b, prices[s])
            s++;
        }
        return p;
    }
}
