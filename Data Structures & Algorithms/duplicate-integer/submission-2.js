class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const ob = {};
        for(let i=0;i < nums.length; i++){
            let currentElement = nums[i];
            if(ob[currentElement]) return true;
            ob[currentElement]=1;
        }
        return false;
    }
}
