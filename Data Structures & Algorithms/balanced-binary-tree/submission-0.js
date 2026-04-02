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
    res = true;
    isBalanced(root) {
        this.height(root);
        return this.res;
    }

    height(node){
        if(node == null){
            return 0;
        }

        const left = this.height(node.left);
        const right = this.height(node.right);
        const hDiff = Math.abs(left - right)
        if(hDiff > 1){
            this.res = false
        }
        return Math.max(right,left) + 1;
    }
}
