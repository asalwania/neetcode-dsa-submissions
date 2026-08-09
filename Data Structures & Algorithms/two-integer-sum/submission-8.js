class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        nums.forEach((n,i) => {
            map.set(n,i)
        })
        // map = {3:0, 4:1, 5:2, 6:3}
        for (let i = 0; i < nums.length; i++) {
            // for (let j = i + 1; j < nums.length; j++) {
            //     if (nums[i] + nums[j] === target) {
            //         return [i, j];
            //     }
            // }
            const required = target - nums[i]
            const found = map.get(required)
            if(found && found !== i){
                return [i, found]
            }
        }
        return [-1, -1].sort();
    }
}
