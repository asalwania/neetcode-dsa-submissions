class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const set = new Set();
        let l=0,r=0, max=0;

        while(r < s.length){
            if(set.has(s[r])){
                set.delete(s[l])
                l++;
            }else{
                set.add(s[r]);
                max = Math.max(max, r-l+1);
                r++;
            }
        }
        return max;
    }
}
