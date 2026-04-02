class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l=0;
        let r=heights.length-1;
        let maxWater = 0;
        while(l < r){
            const lEl = heights[l];
            const rEl = heights[r];
            const containerWater = Math.min(lEl,rEl)*(r-l);
            maxWater=Math.max(maxWater,containerWater)
            lEl<rEl ? l++:r--;
        }
        return maxWater;
    }
}
