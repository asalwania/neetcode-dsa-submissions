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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root) return [];
        const q = new Queue()
        q.push(root);
        let res = [];
        while(!q.isEmpty()){
            let level = []
            for(let i=q.size(); i > 0; i-- ){
                const curr = q.pop();
                if(curr){
                    level.push(curr.val);
                    q.push(curr.left);
                    q.push(curr.right);
                }
            }
            if(level.length > 0) res.push(level)
        }

        return res
    }
}
