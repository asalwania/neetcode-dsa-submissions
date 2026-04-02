class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const res = [];
        const count = {};
        nums.forEach(n => count[n] = (count[n] || 0)+1);
        
        const freqArr = Array.from({ length: nums.length + 1 }, () => []);
        
        for(const [num, freq] of Object.entries(count)){
            console.log(freq)
            freqArr[freq].push(+num);
        }

        for(let i=freqArr.length -1 ; i=>0; i--){
            for(const n of freqArr[i]){
                res.push(n)

                if(res.length === k) return res;
            }
        }
        
    }
}
