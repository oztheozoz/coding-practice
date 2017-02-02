// https://leetcode.com/problems/palindrome-linked-list/
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
var isPalindrome = function(head) {
    let word = [];
    let result = true;
    
    while(head !== null) {
        word.push(head.val);
        head = head.next;
    }
    
    for(let i = 0, j = word.length - 1; j > i; i++, j--) {
        if (word[i] !== word[j]) {
            result = false;
            break;
        }
    }
    
    return result;
};