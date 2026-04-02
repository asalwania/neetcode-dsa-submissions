class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let res = 0, leftMax=[], rightMax=[];
        let currMax=0;
        for(let i=0; i<height.length; i++){
            leftMax[i] = currMax;
            currMax = Math.max(currMax,height[i]);
        }
        currMax=0;
        for(let i=height.length -1; i>=0; i--){
            rightMax[i]=currMax;
            currMax = Math.max(currMax, height[i]);
        }

        for(let i in height){
            res += Math.max((Math.min(leftMax[i],rightMax[i]) - height[i]),0)
        }

        return res;
    }
}
