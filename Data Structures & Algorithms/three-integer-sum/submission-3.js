class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const res = [];
        nums.sort((a,b) => a-b);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
        // [-4,-1,-1,0,1,2]
        for(let i=0; i< nums.length; i++){
            if(i > 0 && nums[i-1] === nums[i]){
                continue;
            }

            let l=i+1;
            let r=nums.length-1;

            while(l < r){
               const threeSum = nums[i] + nums[l] + nums[r];
               if(threeSum > 0){
                r--;
               }else if(threeSum < 0){
                l++;
               }else{
                res.push([nums[i], nums[l], nums[r]])
                l++;
                r--;

                while(nums[l] === nums[l-1] && l < r){
                    l++;
                }
               }
            }

        }

        return res;
    }
}
