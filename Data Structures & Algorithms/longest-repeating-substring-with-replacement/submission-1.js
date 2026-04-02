class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const count = {};
        let res = 0;
        let currMax=0;

        let l=0;
        for(let i=0; i< s.length; i++){
            count[s[i]] = (count[s[i]] || 0) + 1
            let swl = i-l+1;
            currMax = Math.max(currMax, count[s[i]]);
            while(swl - currMax > k){
                count[s[l]] = count[s[l]]-1;
                l++;
                swl=i-l+1;
            }
            res= Math.max(res, i-l+1);
        }

        return res;
    }

    getMax(arr){
        let max=0;
        arr.forEach(v => max=Math.max(v,max));
        return max;
    }
}
