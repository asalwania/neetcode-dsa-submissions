class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let es = ""
        for(let str of strs){
            es = es+str.length+"#"+str
        }
        return es;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = []
        let i=0;

        while(i < str.length){
            let j = i;
            while(str[j] !== '#'){
                j++
            }
            const len = +str.slice(i,j)
            const s = str.slice(j+1, j+1+len)
            res.push(s)
            i = j+1+len;
        }

        return res;
    }
}
