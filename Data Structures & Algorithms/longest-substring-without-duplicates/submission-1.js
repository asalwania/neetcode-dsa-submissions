class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0, r = 0, result = 0, map = {};

        while (r < s.length) {
            while (map[s[r]]) {
                delete map[s[l]];
                l++;
            }

            map[s[r]] = 1;
            result = Math.max(result, r - l + 1);
            r++;

        }
        return result;
    }
}
