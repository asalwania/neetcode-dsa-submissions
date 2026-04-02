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

        this.maxDepth(root);
    
        return this.dia;
        // this.dia = Math.max(this.dia, leftH + rightH);
        // this.diameterOfBinaryTree(root.left);
        // this.diameterOfBinaryTree(root.right);
        // return this.dia;
    }

    maxDepth(node){
        if(node === null) return 0;
        const left = this.maxDepth(node.left);
        const right = this.maxDepth(node.right);
        this.dia = Math.max(this.dia, left+right);
        return Math.max(left,right) + 1;
    }
}
