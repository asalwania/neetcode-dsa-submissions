class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;

        let l = 0;
        let r = heights.length - 1;

        while (l < r) {
            if (heights[l] < heights[r]) {
                maxArea = Math.max(maxArea, (r - l) * heights[l]);
                l++;
            } else {
                maxArea = Math.max(maxArea, (r - l) * heights[r]);
                r--;
            }
        }
        return maxArea;
    }
}
