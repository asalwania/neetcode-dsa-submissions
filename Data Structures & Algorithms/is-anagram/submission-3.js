class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        const sMap = {};
        const tMap = {};
        for(let i=0; i<s.length; i++){
            const sChar = s[i];
            const tChar = t[i];
            if(!(sChar in sMap)){
                sMap[sChar]=0;
            }
            if(!(tChar in tMap)){
                tMap[tChar]=0;
            }
            sMap[sChar] = sMap[sChar]+1;
            tMap[tChar] = tMap[tChar]+1;
        }

        for(let [k,v] of Object.entries(sMap)){
            if(tMap[k] !== v) return false;
        }
        return true;
    }
}
