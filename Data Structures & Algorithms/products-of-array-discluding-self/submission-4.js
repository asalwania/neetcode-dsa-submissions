class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let res = [];
        let prev = 1;
        for(let n of nums){
            res.push(prev);
            prev *= n;
        }

        let next = 1;
        // [1,1,2,8]
        for(let i=nums.length-1; i>=0; i--){
            res[i]=res[i]*next;
            next *= nums[i]
        }

        return res;
    }
}
