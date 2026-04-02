class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const strMap = {}
        for(let str of strs){
            const aStr = this.createAnagramString(str);
            console.log(aStr)
            if(!strMap[aStr]){
                strMap[aStr] = [];
            }
            strMap[aStr].push(str)
        }

        return Object.values(strMap)
    }

    createAnagramString(s){
        const freqArr = new Array(26).fill(0);
        for(let i=0; i<s.length; i++){
            freqArr[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        return freqArr.join("-");
    }
}
