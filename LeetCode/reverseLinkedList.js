// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL

// Follow up:
// A linked list can be reversed either iteratively or recursively. Could you implement both?

// Related Topics: Linked List

// Runtime: 80 ms / Memory: 40.6 MB

var reverseList = function(head) {
    let prev = null
    let next = null
    let current = head
    while(current !== null) {
        next = current.next
        current.next = prev
        prev = current
        current = next
    }
    return prev
};
