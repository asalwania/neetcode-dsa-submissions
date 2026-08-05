class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;
        while (l <= r) {
            let m = Math.floor((l + r) / 2);
            if (nums[m] === target) return m;

            if (nums[m] > nums[r]) {
                //mid is in left sorted array
                if (target >= nums[l] && target < nums[m]) {
                    r = m - 1;
                } else {
                    l = m + 1;
                }
            } else {
                // mid is in right shorted array
                if(target <= nums[r] && target > nums[m]){
                    l = m+1;
                }else{
                    r = m-1;
                }

            }
        }

        return -1;
    }
}
