class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        const freqMap = {};
        for(let i=0; i< s.length; i++){
            const sChar = s[i];
            const tChar = t[i];

            freqMap[sChar] = (freqMap[sChar] || 0) + 1;
            freqMap[tChar] = (freqMap[tChar] || 0) - 1;
        }

        for (let v of Object.values(freqMap)){
            if(v !== 0) return false;
        }
        return true;
    }
}
