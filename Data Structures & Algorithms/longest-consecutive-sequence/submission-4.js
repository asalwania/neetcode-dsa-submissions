class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums)
        let res=0;
        
        for(let i=0; i<nums.length; i++){
            if(set.has(nums[i]-1)){
                continue;
            }

            let currRes=1
            let currNum=nums[i]
            while(set.has(currNum+1)){
                currRes++;
                currNum += 1;
            }
            res = Math.max(currRes,res)
        }

        return res;
    }
}
