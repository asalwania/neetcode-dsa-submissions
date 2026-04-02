class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false;
        const s1Map = new Array(26).fill(0)
        const s2Map = new Array(26).fill(0)

        for(let i=0; i< s1.length; i++){
            const currCharIdx = this.getCharCode(s1[i])
            const s2CharIdx = this.getCharCode(s2[i])
            s1Map[currCharIdx]++;
            s2Map[s2CharIdx]++
        }

        let matches = 0;
        for(let i=0; i<26; i++){
            if(s1Map[i] === s2Map[i]){
                matches++;
            }
        }

        if(matches===26) return true;

        let l=0;
        for(let i=s1.length; i< s2.length; i++){
            const lCode = this.getCharCode(s2[l]);
            const rCode = this.getCharCode(s2[i]);
            s2Map[lCode] && s2Map[lCode]--;
            l++;
            s2Map[rCode]++;

            console.log(s1Map, s2Map)
            matches=0;
            for(let j=0; j<26; j++){
            if(s1Map[j] === s2Map[j]){
                matches++;
            }
            if(matches===26) return true;
            }
        }
        return false;
         
    }

    getCharCode(char){
        return char.charCodeAt(0) - "a".charCodeAt(0)
    }
}
