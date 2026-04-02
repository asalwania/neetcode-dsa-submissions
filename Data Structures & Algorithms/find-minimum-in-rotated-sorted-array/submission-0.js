class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        // 3,4,5,6,1,2
        //           r
        let res=Infinity;
        let l=0, r=nums.length-1;
        while(l<=r){
            const mid=Math.floor((l+r)/2);
            if(nums[mid] <= nums[r]){
                res=Math.min(res,nums[mid]);
                r=mid-1;
            }else if(nums[mid] > nums[r]){
                res=Math.min(res, nums[r]);
                l=mid+1;
            }else{
                res = Math.min(res,mid);
            }
        }
        return res;
    }
}
