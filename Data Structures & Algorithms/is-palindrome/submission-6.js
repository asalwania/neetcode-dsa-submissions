class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;
        
        while(l < r){
            while(!this.isAlphaNumeric(s[l]) && l < r) l++;
            while(!this.isAlphaNumeric(s[r]) && l < r) r--;

            if(s[l].toLowerCase() !== s[r].toLowerCase()) return false;
            l++;
            r--;
        }

        return true;
    }

    isAlphaNumeric(char) {
        const code = char.charCodeAt(0);

        return (
            (code >= "a".charCodeAt(0) && code <= "z".charCodeAt(0)) ||
            (code >= "A".charCodeAt(0) && code <= "Z".charCodeAt(0)) ||
            (code >= "0".charCodeAt(0) && code <= "9".charCodeAt(0))
        );
    }
}
