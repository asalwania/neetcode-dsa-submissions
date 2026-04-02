class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let xor = 0;
        nums.forEach((n,i) => {
            xor = xor ^ n;
            xor = xor ^ i;
        })
        xor = xor ^ nums.length;
        return xor;
    }
}
