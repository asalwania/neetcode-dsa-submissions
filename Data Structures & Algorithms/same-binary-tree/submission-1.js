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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        let res = true;

        function dfs(n1, n2){
            if(!n1 || !n2){
                if(n1 || n2){
                    res=false;
                }
                return;
            }
            if(n1.val !== n2.val) {
                res=false;
                return;
            }
            dfs(n1.left,n2.left);
            dfs(n1.right, n2.right);
        }

        dfs(p,q)

        return res;
    }
}
