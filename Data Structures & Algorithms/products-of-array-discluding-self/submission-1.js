class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const res=[]
        const lp = [];
        let curr=1;
        for(let n of nums){
            lp.push(curr);
            curr=n*curr;
        }
        
        curr=1;
        for(let i = nums.length-1; i>=0; i--){
            res[i] = lp[i]*curr;
            curr=nums[i]*curr
        }
        return res;
    }
}
