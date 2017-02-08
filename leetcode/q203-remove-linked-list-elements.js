// https://leetcode.com/problems/remove-linked-list-elements/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    while(head !== null && head.val === val) {
        head = head.next;
    }
    
    var ptr = head;
    
    while(ptr !== null && ptr.next !== null) {
        if(ptr.next.val === val) {
            ptr.next = ptr.next.next;
        } else {
            ptr = ptr.next;
        }
    }
    
    return head;
};