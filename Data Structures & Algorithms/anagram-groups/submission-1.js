class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const a = 97;
        const strsOb = {};
        const result = [];
        
        for(let i =0; i<strs.length; i++){
            const arr = Array(26).fill(0);
            const currStr = strs[i];
            for(let j=0; j < currStr.length; j++){
                const currCharCode = currStr[j].charCodeAt(0);
                arr[currCharCode - a]++;
            }
            const arrStr = arr.join("-");
            console.log(arrStr)
            if(strsOb[arrStr]){
                strsOb[arrStr].push(currStr);
            }else{
                strsOb[arrStr] = [currStr];
            }
        }
        
        Object.values(strsOb).forEach(v => result.push(v));

        return result;
    }
}
