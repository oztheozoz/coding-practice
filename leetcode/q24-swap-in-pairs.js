/*
Given a linked list, swap every two adjacent nodes and return its head.

For example,
Given 1->2->3->4, you should return the list as 2->1->4->3.

Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let ptr = head;

    while(ptr !== null && ptr.next !== null) {
        if (head === ptr) {
            head = ptr.next;
        }
        let temp = ptr.next.next;
        ptr.next.next = ptr;
        if(temp === null || temp.next === null) {
            ptr.next = temp;
        } else {
            ptr.next = temp.next;
        }
        ptr = temp;
    }
    
    return head;
};