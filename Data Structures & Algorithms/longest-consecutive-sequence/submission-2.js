class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // 2,20,4,10,3,4,5
        // {2,3,4,5,10,20}
        const set = new Set(nums);
        let longest = 0;
        let curr = 0;
        for(let n of nums){
            if(set.has(n-1)) continue;

            curr = 1;
            while(set.has(n+curr)){
                curr++;
            }
            longest = Math.max(longest, curr);
        }

        return longest;
    }
}
