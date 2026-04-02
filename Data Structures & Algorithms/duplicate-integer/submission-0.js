class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numsObj = {};
        for(let i=0; i<nums.length; i++){
            if(numsObj[nums[i]]){
                return true;
            }
            numsObj[nums[i]]=1;
        }
        return false;
    }
}
