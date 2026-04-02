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
        // 1->2->3->4->null
        let prev=null,curr=head;
        while(curr){
            const tmp = curr.next;
            curr.next=prev;
            prev=curr;
            curr=tmp;
        }
        return prev;
    }
}
