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
    dia = 0;
    diameterOfBinaryTree(root) {
        if(!root) return 0;

        const leftH = this.maxDepth(root.left);
        const rightH = this.maxDepth(root.right);
        this.dia = Math.max(this.dia, leftH + rightH);
        this.diameterOfBinaryTree(root.left);
        this.diameterOfBinaryTree(root.right);
        return this.dia;
    }

    maxDepth(node){
        if(node === null) return 0;
        return Math.max(this.maxDepth(node.left),this.maxDepth(node.right)) + 1;
    }
}
