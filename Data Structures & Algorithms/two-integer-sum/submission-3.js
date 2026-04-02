class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = {};
        nums.forEach((n,i) => {
            map[n] = i+1;
        })

        for(let i=0; i<nums.length; i++){
            if((map[target-nums[i]]) && (i !== map[target-nums[i]]-1)){
                return [i, map[target-nums[i]]-1]
            }
        }
    }
}
