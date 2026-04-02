class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        
        for(let i=0; i<nums.length;i++){
            const required = target - nums[i];
            const found = map.get(required);
            if(found || found === 0){
                return [found,i]
            }
            map.set(nums[i],i)
        }
        return [-1,-1]
    }
}
