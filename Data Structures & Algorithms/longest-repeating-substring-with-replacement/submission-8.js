class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const freq = {};
        let l = 0;
        let res = 0;
        let maxf = 0;

        for(let r=0; r<s.length; r++){
            freq[s[r]] = 1 + (freq[s[r]] || 0);
            maxf = Math.max(maxf, freq[s[r]])

            while(((r-l+1) - maxf) > k){
                freq[s[l]] = freq[s[l]]-1;
                l++;
            }

            res = Math.max(r-l+1,res)
        }

        return res;
    }
}
