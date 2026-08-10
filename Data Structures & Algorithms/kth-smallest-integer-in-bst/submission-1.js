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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let curr = k;
        let res = root.val;
        const bfs = (node) => {
            if(!node) return;
            

            bfs(node.left);
            curr--;
            if(curr === 0) {
                res = node.val
                return;
            }
            bfs(node.right);
        }

        bfs(root);
        return res;
    }
}
