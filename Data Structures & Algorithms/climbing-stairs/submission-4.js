class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let dp = new Array(n + 1).fill(null);
        return this.getCount(n, dp);
    }

    getCount(n, dp) {
        if (n < 2) return 1;

        if (dp[n] !== null) return dp[n];

        dp[n] = this.getCount(n - 1, dp) +
                this.getCount(n - 2, dp);

        return dp[n];
    }
}
