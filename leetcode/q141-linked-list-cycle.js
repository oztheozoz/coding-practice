// https://leetcode.com/problems/linked-list-cycle/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(head !== null) {
        let ptr1 = head, ptr2 = head.next;
        
        while(ptr2 !== null) {
            if(ptr1 === ptr2) {
                return true;
            }
            ptr1 = ptr1.next;
            if(ptr2.next === null) {
                break;
            } else {
                ptr2 = ptr2.next.next;
            }
        }
    }
    
    return false;
};