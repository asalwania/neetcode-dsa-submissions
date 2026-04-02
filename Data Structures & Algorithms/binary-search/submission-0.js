class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l=0, r=nums.length-1;
        while(l <=r){
            const mid = Math.floor((l+r)/2)
            const midEl = nums[mid]
            if(midEl > target){
                r=mid-1;
            }else if(midEl < target){
                l=mid+1;
            }else{
                return mid;
            }
        }
        return -1;
    }
}
