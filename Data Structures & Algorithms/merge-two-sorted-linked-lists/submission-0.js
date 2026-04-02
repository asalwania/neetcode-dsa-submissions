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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        const dummyNode = new ListNode();
        let node = dummyNode;
        let l1 = list1;
        let l2 = list2;
        
        while(l1 && l2){
            if(l1.val < l2.val){
                node.next = l1;
                l1 = l1.next;
            }else{
                node.next = l2;
                l2 = l2.next;
            }
            node = node.next;
        }
        while(l1){
            node.next = l1;
            l1=l1.next;
            node = node.next;
        }
        while(l2){
            node.next = l2;
            l2=l2.next;
            node = node.next;
        }
        
        return dummyNode.next;
    }
}
