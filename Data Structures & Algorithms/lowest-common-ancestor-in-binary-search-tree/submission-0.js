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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        if(!root) return null;
        console.log(root.val)
        console.log(p.val);
        console.log(q.val);
        const rv = root.val;
        const pv = p.val;
        const qv = q.val
        if((pv < rv && qv > rv) || (pv > rv && qv < rv)) return root;
        if(rv === pv || rv === qv) return root;

        let res;
        if(pv < rv){
            res = this.lowestCommonAncestor(root.left, p, q)
        }else{
            res = this.lowestCommonAncestor(root.right, p, q)
        }

        return res;
    }
}
