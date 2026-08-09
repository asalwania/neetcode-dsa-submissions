class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = {};
        let aCode = "a".charCodeAt(0);
        for (let word of strs) {
            const nameArray = new Array(26).fill(0);
            for (let c of word) {
                nameArray[c.charCodeAt(0) - aCode]++;
            }

            const groupName = nameArray.join("-");
            if(!groups[groupName]){
                groups[groupName] = []
            }
            groups[groupName].push(word)
        }

        return Object.values(groups);
    }
}
