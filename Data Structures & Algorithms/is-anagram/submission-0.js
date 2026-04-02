class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        const freqObj = {};

        for(let i=0; i < s.length; i++){
            if(freqObj[s[i]] || freqObj[s[i]] === 0){
                freqObj[s[i]] = freqObj[s[i]] + 1;
            }else{
                freqObj[s[i]] = 1;
            }
            if(freqObj[t[i]] || freqObj[t[i]] === 0){
                freqObj[t[i]] = freqObj[t[i]] - 1;
            }else{
                freqObj[t[i]] = -1;
            }
        }

        return !Object.values(freqObj).some(v => v !== 0);;
    }
}
