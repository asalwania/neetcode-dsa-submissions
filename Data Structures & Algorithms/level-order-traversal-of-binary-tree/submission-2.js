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
        const q = new Queue([root]);
        const res = [];

        while (!q.isEmpty()) {
            const group = [];
            for (let i = q.size(); i > 0; i--) {
                const curr = q.pop();
                if (curr) {
                    group.push(curr.val);
                    q.push(curr.left);
                    q.push(curr.right);
                }
            }
            if(group.length > 0) res.push(group)
        }

        return res;
    }
}
