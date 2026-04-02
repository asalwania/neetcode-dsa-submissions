class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProf = 0;
        let i=0,j=1;
        while(i < prices.length -1){
            const currProfit = prices[j]-prices[i];
            if(currProfit >= 0 && j < prices.length - 1 ){
                j++;
            }else{
                i++;
            }
            maxProf = Math.max(maxProf, currProfit);
        }
        return maxProf;
    }
}
