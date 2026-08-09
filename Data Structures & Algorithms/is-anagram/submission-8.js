class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        const sFreq={};
        const tFreq={};
        
        for(let i=0; i<s.length; i++){
            sFreq[s[i]] = 1+(sFreq[s[i]] || 0)
            tFreq[t[i]] = 1+(tFreq[t[i]] || 0)
        }

        let res = true;
        Object.keys(sFreq).forEach(k => {
            if(sFreq[k] !== tFreq[k]){
                res = false;
                return;
            }
        })
        return res;
    }
}
