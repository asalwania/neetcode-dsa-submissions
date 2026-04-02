class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l=0, r=numbers.length-1;
        while(l < r){
            const cSum = numbers[l] + numbers[r];
            if(cSum > target){
                r--;
            }else if(cSum < target){
                l++;
            }else{
                return [l+1,r+1]
            }
        }
    }
}
