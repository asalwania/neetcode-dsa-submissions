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
     * @return {boolean}
     */
    isBalanced(root) {
        if(root === null) return true;
        let res=true;

        function height(node){
            if (!node) return 0;
            const lh = height(node.left)
            const rh = height(node.right);
            if(Math.abs(lh-rh) > 1) {
                res=false;
            }
            return Math.max(lh, rh) + 1;
        }

        height(root);

        return res;
    }
    
}
