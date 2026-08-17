class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const tMap = {};
        const window = {};

        for (const c of t) {
            tMap[c] = (tMap[c] || 0) + 1;
        }

        const need = Object.keys(tMap).length;
        let having = 0;

        let min = Infinity;
        let res = [-1, -1];
        let l = 0;

        for (let r = 0; r < s.length; r++) {
            const c = s[r];

            if (tMap[c]) {
                window[c] = (window[c] || 0) + 1;

                if (window[c] === tMap[c]) {
                    having++;
                }
            }

            while (having === need) {
                if (r - l + 1 < min) {
                    min = r - l + 1;
                    res = [l, r];
                }

                const leftChar = s[l];

                if (tMap[leftChar]) {
                    window[leftChar]--;

                    if (window[leftChar] < tMap[leftChar]) {
                        having--;
                    }
                }

                l++;
            }
        }

        return min === Infinity
            ? ""
            : s.slice(res[0], res[1] + 1);
    }
}