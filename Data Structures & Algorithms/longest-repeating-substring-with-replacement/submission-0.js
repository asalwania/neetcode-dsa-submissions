class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const count = {};
        let res = 0;

        let l=0;
        for(let i=0; i< s.length; i++){
            count[s[i]] = (count[s[i]] || 0) + 1
            let swl = i-l+1;
            let maxCount=this.getMax(Object.values(count));
            while(swl - maxCount > k){
                count[s[l]] = count[s[l]]-1;
                l++;
                swl=i-l+1;
                maxCount=this.getMax(Object.values(count));
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
