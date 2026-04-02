class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numsObj = {};

        for(let i=0; i<nums.length; i++){
            const requiredValue = target - nums[i];
            if(numsObj[requiredValue] || numsObj[requiredValue] === 0){
                return [i, numsObj[requiredValue]];
            }
            numsObj[nums[i]]=i;
        }
    }
}
