class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = {};
        // act -> [1,0,1....] -> "1-0-1...."
        const charCodeOfA = 'a'.charCodeAt(0);
        for(let str of strs){
            const freqArr=new Array(26).fill(0)
            for(let i =0; i<str.length; i++){
                freqArr[str.charCodeAt(i) - charCodeOfA]++
            }
            const grpKey = freqArr.join("-");
            if(!(grpKey in groups)){
                groups[grpKey] = [];
            }
            groups[grpKey].push(str);
        }

        return Object.values(groups);
    }
}
