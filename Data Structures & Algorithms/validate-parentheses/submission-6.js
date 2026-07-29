class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const map = {
            "(": ")",
            "{": "}",
            "[": "]",
        };
        for (let i = 0; i < s.length; i++) {
            const p = s[i];
            if (p in map) {
                stack.push(p);
            } else {
                if (map[stack[stack.length - 1]] !== p) return false;
                stack.pop();
            }
        }
        return stack.length === 0;
    }
}
