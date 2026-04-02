class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l=0,r=nums.length-1;
        while(l<=r){
            const mid = Math.floor((l+r)/2);
            const lEl = nums[l];
            const rEl = nums[r];
            const midEl = nums[mid];
            if(midEl <= rEl){
                // our middle is in right sorted array
                if(target < midEl){
                    r=mid-1;
                }else if(target > midEl){
                    if(target > rEl){
                        r = mid-1;
                    }else if(target < rEl){
                        l = mid+1;
                    }else{
                        return r;
                    }
                }else{
                    return mid;
                }
            }else{
                // our middle is in left sorted arrya
                if(target > midEl){
                    l=mid+1;
                }else if(target < midEl){
                    if(target < lEl){
                        l=mid+1;
                    }else if(target > lEl){
                        r = mid-1;
                    }else{
                        return l;
                    }
                }else{
                    return mid;
                }
            }
        }
        return -1;
    }
}
