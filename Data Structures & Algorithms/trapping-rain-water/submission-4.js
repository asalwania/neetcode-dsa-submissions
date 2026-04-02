class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l = 0, r=height.length-1;
        let res = 0, leftMax= height[l], rightMax=height[r];
        while(l<=r){
            if(leftMax<=rightMax){
                res += Math.max((leftMax-height[l]),0)
                leftMax = Math.max(leftMax,height[l])
                l++;
            }else{
                res += Math.max((rightMax-height[r]),0)
                rightMax = Math.max(rightMax,height[r])
                r--;
            }
        }
        return res;
        
    }
}
