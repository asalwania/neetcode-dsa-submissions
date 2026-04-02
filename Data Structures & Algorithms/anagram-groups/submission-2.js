class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};
        const a = 'a'.charCodeAt(0);

        for(let str of strs){
            const freqArr = new Array(26).fill(0);
            for(let c of str){
                freqArr[c.charCodeAt(0) - a]++;
            }
            const freqStr = freqArr.join("-");
            const arr = map[freqStr] || []
            arr.push(str);
            map[freqStr] = arr;
        }
        
        return Object.values(map);
    }
}
