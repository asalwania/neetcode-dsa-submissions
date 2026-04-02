/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        if(!head) return head;
        let next = null;
        
        while(head){
            const temp = head.next;
            head.next = next;
            next = head;
            head = temp
        }
        
        return next;
    }
}
