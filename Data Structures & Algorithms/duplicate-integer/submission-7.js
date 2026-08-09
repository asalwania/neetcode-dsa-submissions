class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = new Set();
        for (let i = 0; i < nums.length; i++) {
            const curr = nums[i];
            if (seen.has(curr)) return true;
            seen.add(curr);
        }

        return false;
    }
}
