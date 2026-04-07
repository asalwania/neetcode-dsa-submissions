class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];
        const cc = [] // current combination

        const backtrack =(i,target) => {
            if(target === 0){
                res.push([...cc]);
                return;
            }
            if(i >= nums.length || target < 0) return;

            cc.push(nums[i]);
            backtrack(i,target-nums[i]);

            cc.pop();
            backtrack(i+1,target);
        }
        backtrack(0,target);
        return res;
    }
}
