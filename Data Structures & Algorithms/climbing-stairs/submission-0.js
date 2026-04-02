class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let one=1,two=1;
        for(let i=0; i< n;i++){
            const temp = two;
            two = one+two;
            one = temp;
        }
        return one;
    }
}
