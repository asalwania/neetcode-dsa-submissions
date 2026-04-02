class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l=0,r=nums.length-1;
        while(l<=r){
            const mid = Math.floor((l+r)/2)
            console.log(mid)
            const midEl = nums[mid];
            if(target > midEl){
                l=mid+1;
            }else if(target < midEl){
                r=mid-1;
            }else{
                return mid;
            }
        }
        return -1;
    }
}
