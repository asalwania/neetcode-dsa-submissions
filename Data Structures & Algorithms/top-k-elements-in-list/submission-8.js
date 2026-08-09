class Solution {
    /**
     *2 <@param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = Array.from({ length: nums.length + 1 }, () => []);
        const map = {};
        for (let i = 0; i < nums.length; i++) {
            const curr = nums[i];
            map[curr] = (map[curr] || 0) + 1;
        }
        console.log;
        for (let key in map) {
            freq[map[+key]].push(+key);
        }

        console.log(freq);
        let res = new Array();
        for (let i = freq.length - 1; i > 0; i--) {
            for (let j = 0; j < freq[i].length; j++) {
                res.push(freq[i][j]);
                k--;
                if (k === 0) return res;
            }
        }
    }
}
