class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const ob = {};
        for(let i = 0; i<nums.length; i++){
            const currEl = nums[i];
            const requiredEl = target - currEl;
            if(ob[requiredEl] || ob[requiredEl] === 0){
                return [ob[requiredEl], i]
            }
            ob[currEl] = i;
        }
        return [0,1];
    }
}
