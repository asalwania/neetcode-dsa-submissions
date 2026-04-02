class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        function isLetter(char) {
            const code = char.charCodeAt(0);
            return (code >= 65 && code <= 90) || (code >= 97 && code <= 122) || (code >= 48 && code <= 57); // A-Z or a-z
        }

        let l=0,r=s.length-1;
        
        while(l < r){
            if(!isLetter(s[l])){
                l++;
            }else if(!isLetter(s[r])){
                r--;
            }else{
                if(s[l].toLocaleLowerCase() !== s[r].toLocaleLowerCase()) return false;
                l++;
                r--;
            }
        }
        return true;
    }
}
