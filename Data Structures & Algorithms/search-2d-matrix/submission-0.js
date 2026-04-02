class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let l=0,r=matrix.length-1;
        while(l<=r){
            let mid=Math.floor((l+r)/2);
            let nums = matrix[mid];
            if(target < nums[0]){
                r=mid-1;
            }else if(target > nums[nums.length-1]){
                l=mid+1;
            }else{
               let il=0, ir=nums.length-1; 
               while(il<=ir){
                let iMid = Math.floor((il+ir)/2);
                let iEl = nums[iMid];
                if(target > iEl){
                    il = iMid+1;
                }else if(target<iEl){
                    ir = iMid-1;
                }else{
                    return true;
                }
               }
               return false;
            }
        }
        return false;
    }
}
