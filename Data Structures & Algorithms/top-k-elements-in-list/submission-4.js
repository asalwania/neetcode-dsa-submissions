class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // 1,1,1,2,2,3,3,3
        // {1:3, 2:2, 3: 1}
        // [[],[],[2],[1,3]]
        const freqArr = Array.from({length: nums.length+1}, () => [])
        const count = {};
        for(let n of nums){
            count[n] = (count[n]|| 0) +1;
        }

        for(let n in count){
            freqArr[count[n]].push(+n)
        }

        const res = [];
        // [[],[],[2],[1,3]]
        for(let i = freqArr.length-1; i>0; i--){
            for(let n of freqArr[i]){
                res.push(n);
                if(res.length === k) return res;
            }
        }
        return res;
    }
}
