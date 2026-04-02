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
     * @return {boolean}
     */
    hasCycle(head) {
        // let set = new Set();
        // let curr = head;
        // while(curr){
        //     if(set.has(curr)){
        //         return true;
        //     }
        //     set.add(curr);
        //     curr = curr.next;
        // }
        // return false;
        let slow=head;
        let fast=head;

        while(fast && fast.next ){
            fast = fast.next.next;
            slow = slow.next;

            if(fast === slow){
                return true;
            }
        }
        return false;
    }
}
