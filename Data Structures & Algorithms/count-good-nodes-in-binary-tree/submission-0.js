/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root) {
        let currMax = -Infinity;
        const res = this.dfs(root,currMax);
        return res;
    }

    dfs(root,cmax){
        if(!root) return 0;
        let res = 0;
        if(root.val >= cmax){
            res++;
            cmax = root.val;
        }
        res += this.dfs(root.left, cmax);
        res += this.dfs(root.right, cmax);
        return res;
    }
}
