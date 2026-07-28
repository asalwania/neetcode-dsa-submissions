class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const res = [1];

        // first add left side prod in the res array
        for (let i = 0; i < nums.length - 1; i++) {
            res.push(nums[i] * res[res.length - 1]);
        }

        // [ 1, 1, 2, 8 ]
        let currRight = 1;

        for(let i=nums.length-1; i>=0; i--){
            res[i] = res[i] * currRight;
            currRight = currRight*nums[i];
        }
        return res;
    }
}
