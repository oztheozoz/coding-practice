function ListNode(val) {
    this.val = val;
    this.next = null;
}

function getLinkedListFromArray(arr) {
    let head = null;

    if(arr && arr.length > 0) {
        let cur = null;
        for(let value of arr) {
            if(!cur) {
                cur = new ListNode(value);
                head = cur;
            } else {
                cur.next = new ListNode(value);
                cur = cur.next;
            }
        }
    }

    return head;
}

function reverseLinkedList(list) {
    if(list === null) return null;
    if(list.next === null) return list;

    let head = reverseLinkedList(list.next);

    list.next.next = list;
    list.next = null;

    return head;
}

var testList = getLinkedListFromArray([2,3,4,5,6,7]);
var reverseTestList = reverseLinkedList(testList);