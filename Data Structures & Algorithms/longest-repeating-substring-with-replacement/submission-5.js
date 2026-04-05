class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l=0, r=0, res=0, maxf = 0;

        const freq = new Array(26).fill((0));
        
        while(r < s.length){
           freq[this.getCharCode(s[r])]++;
           maxf = Math.max(...freq);

           while((r-l+1 -maxf) > k){
                freq[this.getCharCode(s[l])]--;
                l++;
           }
           res = Math.max(res, r-l+1);
           r++;
        }
        return res;
    }

    getCharCode(char){
        return char.charCodeAt(0) - "A".charCodeAt(0); 
    }
}
