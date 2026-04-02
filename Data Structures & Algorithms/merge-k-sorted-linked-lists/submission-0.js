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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if(lists.length === 0) return null;
        let head = lists[0];

        for(let i=1; i<lists.length; i++){
            let second=lists[i];
            const dummyNode = new ListNode();
            let dn = dummyNode;
            let curr = head;
            while(curr && second){
                if(curr.val < second.val){
                    dn.next=curr;
                    curr = curr.next;
                }else{
                    dn.next=second;
                    second=second.next;
                }
                dn=dn.next;
            }
            
            if(curr){
                dn.next=curr;
            }else{
                dn.next=second;
            }

            head = dummyNode.next;
            
        }
        return head;
    }
}
