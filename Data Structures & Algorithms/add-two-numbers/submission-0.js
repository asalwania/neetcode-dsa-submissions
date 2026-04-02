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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {

        const dummy = new ListNode();
        let dm = dummy;
        let carry = 0;

        while(l1 || l2){
            const l1Sum = l1?.val || 0;
            const l2Sum = l2?.val || 0;
            const currSum = carry+l1Sum+l2Sum;
            console.log(currSum)
            dm.next=new ListNode(currSum%10);
            dm=dm.next;
            carry = Math.floor(currSum/10)
            if(l1) l1=l1.next;
            if(l2) l2=l2.next;
        }
        if(carry) dm.next = new ListNode(carry);
        return dummy.next;
    
    }
}
