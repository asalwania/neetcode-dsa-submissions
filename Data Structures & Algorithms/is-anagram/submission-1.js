class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        const testArr = new Array(26).fill(0);
        const a = "a".charCodeAt(0);
        for(let i=0; i<s.length; i++){
            testArr[s.charCodeAt(i) - a]++;
            testArr[t.charCodeAt(i) - a]--;
        }
        return !testArr.some(v => v!==0);
    }
}
