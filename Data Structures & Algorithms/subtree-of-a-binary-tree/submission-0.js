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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if(root == null) return false;
        
        if((root.val === subRoot.val) ){
            const isSame = this.isSameTree(root, subRoot);
            if(isSame) return true;
        }
            return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
        
    }

    isSameTree(p,q){
        if(q==null && p==null) return true;
        if(q==null || p==null) return false;
        if(p.val !== q.val) return false;

        return this.isSameTree(q.left,p.left) && this.isSameTree(q.right,p.right);
    }
}
