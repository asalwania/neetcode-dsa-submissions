class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let longest = 0;
        for(let n of nums){
            if(!set.has(n-1)){
                let curr=0;
                while(set.has(n+curr)){
                    curr++;
                }
                longest = Math.max(longest,curr)
            }
        }
        return longest;
    }
}
