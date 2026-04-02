class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // 3,4,5,6
        const idxMap = {};
        for(let i=0; i< nums.length; i++){
            const req = target - nums[i];
            if(req in idxMap) return [idxMap[req],i]
            idxMap[nums[i]] = i;
        }
        return [-1,-1];
    }
}
