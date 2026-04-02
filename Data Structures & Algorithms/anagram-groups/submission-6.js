class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};
        for(let word of strs){
            const key = this.createKey(word);
            if(!(key in map)){
                map[key]=[];
            }
            map[key].push(word);
        }

        return Object.values(map);
    }

    createKey(word){
        const numMapArray = new Array(26).fill(0);
        for(let i=0; i<word.length; i++){
            const char = word[i];
            const pos = this.getCharPos(char)
            numMapArray[pos]++;
        }
        return numMapArray.join(",");
    }

    getCharPos(char){
        return char.charCodeAt(0) - 'a'.charCodeAt(0);
    }
}
