class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(!t) return '';
        const window = {};
        const countT = {};
        let have = 0;
        let res=[-1,-1];
        let minLen = Infinity;

        for(let i=0; i<t.length; i++){
            const c = t[i];
            countT[c] = 1 + (countT[c] || 0);
        }

        const need = Object.keys(countT).length;

        let l=0;
        for(let r=0; r < s.length; r++){
            const c = s[r];
            window[c] = 1 + (window[c] || 0);

            if(countT[c] && countT[c] === window[c]){
                have++;
            }

            while(have === need){
                if(r-l+1 < minLen){
                    minLen = r-l+1;
                    res=[l,r];
                }

                window[s[l]]--;
                if(countT[s[l]] && window[s[l]] < countT[s[l]] ){
                    have--;
                }
                l++;
            }
        }

        return minLen === Infinity ? '' : s.slice(res[0], res[1]+1);
    }
}
