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
        if (lists.length === 0) return null;
        while (lists.length !== 1) {
            const l1 = lists.pop();
            const l2 = lists.pop();
            const newList = this.mergeLists(l1, l2);
            lists.push(newList);
        }

        return lists[0];
    }

    mergeLists(l1, l2) {
        const dummy = new ListNode();
        let curr = dummy;
        while(l1 && l2){
            if(l1.val < l2.val){
                curr.next = l1;
                l1 = l1.next;
            } else{
                curr.next = l2;
                l2 = l2.next;
            }
            curr = curr.next;
        }

        if(l1){
            curr.next = l1;
        }else{
            curr.next = l2;
        }

        return dummy.next;
    }
}
