class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // create a hash map {string: string[]}
        const ob = {};
        // loop over the array
        for(let i = 0; i < strs.length; i++){
            const currStr = strs[i];
            // now create an array of len 26 with zero at start
            const freqArray = new Array(26).fill(0);
            // now loop over the string element
            this.updateFreqArray(freqArray,currStr);
            console.log(freqArray)
            const key = freqArray.join(" ")

            if(ob[key]){
                ob[key].push(currStr);
            }else{
                ob[key]=[currStr]
            }

                // now increase the index of the number position
            // convert that array to string and add that as a key in the hash map and add value to 
            // array with current string
        }

        console.log(ob)

        return Object.values(ob);

    }

    updateFreqArray(arr, str){
        for(let i = 0; i < str.length; i++){
            const currChar = str[i];
            const currArrayPos = currChar.charCodeAt(0) - 'a'.charCodeAt(0);
            arr[currArrayPos]++;
        }
    }

    
}
