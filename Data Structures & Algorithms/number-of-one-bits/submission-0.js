class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let res=0;
        while(n){
           if(n&1){
            res++;
           } 
           n = n >> 1;
        }
        return res;
    }
}
