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
        let tc=0;
        let dummy = head;
        while(dummy){
            tc++;
            dummy=dummy.next;
        }
        let pos = tc-n;
        const cp=0
        let curr=head;
        let prev=null;
        while(curr){
            if(pos === 0){
                console.log({prev,curr})
                if(!prev) return head.next;
                prev.next = curr.next;
            }
            pos--;
            prev=curr;
            curr=curr.next;

        }
        return head;
    }
}
