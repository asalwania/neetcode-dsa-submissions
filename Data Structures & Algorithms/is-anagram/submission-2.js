class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        const ob = {};
        for(let i = 0; i < s.length; i++){
            const sEl = s[i];
            const tEl = t[i];
            if(ob[sEl]){
                ob[sEl] = ob[sEl] + 1;
            }else{
                ob[sEl] = 1;
            }
            
            if(ob[tEl]){
                ob[tEl] = ob[tEl] - 1;
            }else{
                ob[tEl] = -1;
            }
            
        }

        let result=true
        Object.values(ob).forEach(val => {
            if(val !== 0) {
                result=false;
                return;
            };
        })
        return result;
    }
}
