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
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head.next

        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }

        let second = slow.next;
        slow.next = null;

        let newSecond = this.reverseList(second);

        // 2,4,5 | 8,10
        
        let first= head;
        this.print(first)
        this.print(newSecond)
        while(newSecond){
            const temp1 = first.next;
            const temp2 = newSecond.next;
            newSecond.next = temp1;
            first.next = newSecond;
            first = temp1
            newSecond = temp2;
        }
        
        this.print(head)
        
    }

    reverseList(head){
        let prev=null;
        let curr = head;

        while(curr){
            const temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        return prev;
    }

    print(head){
        let curr = head;
        const arr = [];
        while(curr){
            arr.push(curr.val);
            curr = curr.next;
        }
        console.log(arr.join(" -> "))
    }
}
