class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l=0,r=0;
        let set=new Set();
        let res=0;
        while(r<s.length){
            const char = s[r];
            // if set has char
            if(set.has(char)){
                set.delete(s[l]);
                l++;
            }else{
                set.add(char);
                r++;
            }
            res = Math.max(res, r-l)
        }
        
        return res;
    }
}
