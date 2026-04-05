class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l=0, r=0, res=0, maxf = 0;

        const freq = new Array(26).fill((0));
        const charCodeOfA = "A".charCodeAt(0); 
        
        while(r < s.length){
           freq[s[r].charCodeAt(0) - charCodeOfA]++;
           maxf = Math.max(...freq);

           while((r-l+1 -maxf) > k){
                freq[s[l].charCodeAt(0) - charCodeOfA]--;
                l++;
           }
           res = Math.max(res, r-l+1);
           r++;
        }
        return res;
    }
}
