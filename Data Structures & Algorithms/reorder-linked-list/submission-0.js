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
        // s     s   s f                        
        // 1 -> 2 -> 3-> 4-> 5-> null
       let slow = head;
       let fast = head;

       while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
       }

       // reverse second half;
       let second = null;
       while(slow){
            let temp = slow.next;
            slow.next = second;
            second = slow;
            slow=temp;
       }

        // join both
        let node = head;
        // 1->4->2->3
        // 3;
        while(second.next){
            let t1 = node.next;
            let t2 = second.next; 
            node.next = second;
            node.next.next=t1;
            second = t2;
            node = node.next.next;
        }
    }

    print(list){
        const res=[]
        while(list){
            res.push(list.val);
            list = list.next;
        }
        console.log(res.join("->"))
    }
}
