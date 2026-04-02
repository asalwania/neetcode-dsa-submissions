class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const buckets = Array.from({length:nums.length+1}, () => []);
        const freq = {};
        nums.forEach(n => {
            freq[n] = (freq[n] || 0) + 1;
        })

        for( let key in freq){
            const pos = freq[key];
            buckets[pos].push(+key)
        }
        const res = [];
        for(let i=buckets.length-1; i >=0; i--){
            for(let num of buckets[i]){
                res.push(num)
                if(res.length === k){
                    return res;
                }
            }
        }
    }
}
