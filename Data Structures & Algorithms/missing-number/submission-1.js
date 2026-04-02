class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let xor = nums.length;
        nums.forEach((n,i) => {
            xor = xor ^ n;
            xor = xor ^ i;
        })
        return xor;
    }
}
