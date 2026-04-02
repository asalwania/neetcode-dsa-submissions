class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prev = 1;
        let next = 1;
        const leftProduct=new Array(nums.length);
        const res=new Array(nums.length);
        for(let i=0; i<nums.length; i++){
            leftProduct[i]=prev
            prev = nums[i]*prev;
        }

        for(let i=nums.length - 1; i>=0; i--){
            res[i]=next * leftProduct[i];
            next = nums[i] * next;
        }

        return res;
    }
}
