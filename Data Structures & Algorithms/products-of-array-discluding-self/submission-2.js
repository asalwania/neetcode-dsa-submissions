class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const res=[]
        let curr=1;
        for(let n of nums){
            res.push(curr);
            curr=n*curr;
        }
        
        curr=1;
        for(let i = nums.length-1; i>=0; i--){
            res[i] = res[i]*curr;
            curr=nums[i]*curr
        }
        return res;
    }
}
