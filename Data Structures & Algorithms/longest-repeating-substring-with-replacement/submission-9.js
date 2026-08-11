class Solution {
    characterReplacement(s, k) {
        let res = 0;
        let l = 0;
        let maxFreq = 0;  // Track max frequency seen
        const freq = {};

        for (let r = 0; r < s.length; r++) {
            freq[s[r]] = (freq[s[r]] || 0) + 1;
            maxFreq = Math.max(maxFreq, freq[s[r]]);  // Update max

            // If replacements needed > k, shrink window
            while (r - l + 1 - maxFreq > k) {
                freq[s[l]]--;
                l++;
            }

            res = Math.max(r - l + 1, res);
        }

        return res;
    }
}