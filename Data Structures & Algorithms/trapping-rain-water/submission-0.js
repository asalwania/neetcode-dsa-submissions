class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let res=0;
        const maxLeft = new Array(height.length).fill(0);
        const rightMax = new Array(height.length).fill(0);
        let mxl=0;
        let mxr=0;
        for(let i=0;i<height.length;i++){
            mxl=Math.max(mxl,height[i])
            maxLeft[i]=mxl;

            mxr=Math.max(mxr,height[height.length-1-i])
            rightMax[height.length-1-i]=mxr
        }

        console.log(maxLeft,'===',rightMax)
        
        for(let i=0;i<height.length;i++){
            res+= Math.min(maxLeft[i],rightMax[i]) - height[i];
        }

        return res;
    }
}
