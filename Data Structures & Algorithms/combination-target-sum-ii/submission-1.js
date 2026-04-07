class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const res = [];
        const cc = [];
        candidates.sort((a, b) => a - b);

        function backtrack(i, target){
            if(target === 0){
                res.push([...cc]);
                return;
            }
            if(i >= candidates.length || target < 0) return;
            
            cc.push(candidates[i]);
            backtrack(i + 1, target - candidates[i]);

            cc.pop();
            while(i+1 < candidates.length && candidates[i] === candidates[i+1]){
                i++;
            }
            backtrack(i + 1, target);
        };

        backtrack(0, target);

        return res;
    }
}
