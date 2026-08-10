class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const seen = new Set(nums)
        let res = 0;
        for(let n of nums){
            if(seen.has(n-1)) continue;
            let len=1;
            while(seen.has(n + len)){
                len++;
            }
            res = Math.max(len,res);
        }
        return res;
    }
}
