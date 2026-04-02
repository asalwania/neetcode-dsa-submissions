class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let res = 0;
        for(const num of numSet){
            if(!numSet.has(num-1)){
                let currLen = 1;
                while(numSet.has(num+currLen)){
                    currLen++;
                }
                res = Math.max(currLen,res)
            }
        }
        return res;
        
    }
}
