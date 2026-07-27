class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {};
        for(let n of nums){
            map[n] = 1 + (map[n] || 0);
        }
        
        const bucket = Array.from({length: nums.length + 1}, () => []);

        Object.entries(map).forEach(([k,v]) => {
            console.log({k,v})
            bucket[v].push(+k);
        })
        

        let res = [];
        for(let i=bucket.length -1; i>=0; i--){
            for(let j=0; j < bucket[i].length; j++){
                res.push(bucket[i][j]);
                if(res.length === k) return res;
            }
        }
    }
}
