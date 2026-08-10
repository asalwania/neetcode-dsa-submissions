class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l=0;
        let r=s.length-1;
        while (l < r) {
            while (!this.isValidChar(s[l]) && l<r) {
                l++;
            }

            while (!this.isValidChar(s[r]) && l<r) {
                r--;
            }

            if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
            l++;
            r--;
        }

        return true;
    }

    isValidChar(c) {
        return (c >= "a" && c <= "z") || (c >= "A" && c <= "Z") || (c >= "0" && c <= "9");
    }
}
