class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) return false;
        const freqArr = new Array(26).fill(0);
        const charCodeofA = 'a'.charCodeAt(0)
        for(let i=0; i<s.length; i++){
            const sIdx = s[i].charCodeAt(0) - charCodeofA;
            const tIdx = t[i].charCodeAt(0) - charCodeofA;
            freqArr[sIdx]++;
            freqArr[tIdx]--;
        }
        return freqArr.every(n => n===0);
    }
}
