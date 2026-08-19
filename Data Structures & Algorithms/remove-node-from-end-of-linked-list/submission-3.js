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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        // 1,2,3,4,5
        let j = n;
        let fast = head;
        while(j && fast){
            fast = fast.next;
            j--;
        }

        let dummy = new ListNode(0,head);
        let curr = dummy;
        while(fast){
            fast=fast.next;
            curr = curr.next;
        }
        
        curr.next = curr.next.next;
        

        return dummy.next;
    }
}
