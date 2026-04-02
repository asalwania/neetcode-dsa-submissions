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
     * @return {number[]}
     */
    rightSideView(root) {
        if(!root) return [];
        const q = new Queue();

        q.push(root);
        const res = []
        while(!q.isEmpty()){
            for(let i=q.size(); i > 0; i--){
                const curr = q.pop();
                if(curr){
                    if(curr.left) q.push(curr.left);
                    if(curr.right) q.push(curr.right);
                    if(i === 1) res.push(curr.val);
                }
            }
        }
        return res;
    }
}
