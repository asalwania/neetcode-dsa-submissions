class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        const freqArray = new Array(26).fill(0);
        const charCodeofA = 'a'.charCodeAt(0);
        for(let i=0; i<s.length; i++){
            freqArray[s[i].charCodeAt(0) - charCodeofA]++;
            freqArray[t[i].charCodeAt(0) - charCodeofA]--;
        }

        return freqArray.every(v => v ===0);
    }
}
