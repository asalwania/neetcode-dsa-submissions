class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = {};
        for(let i=0; i<nums.length; i++){
            const req = target - nums[i];
            if(req in map){
                return [map[req], i];
            }
            map[nums[i]]=i;
        }
        return [-1,-1]
    }
}
