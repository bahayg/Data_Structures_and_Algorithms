// Given a sorted linked list, delete all duplicates such that each element appear only once.

// Example 1:
// Input: 1->1->2
// Output: 1->2

// Example 2:
// Input: 1->1->2->3->3
// Output: 1->2->3

// Related Topics: Linked List

// Runtime: 112 ms / Memory: 40 MB

var deleteDuplicates = function(head) {
    let current = head
    while (current && current.next) {
        if (current.val !== current.next.val) current = current.next
        else {
            current.next = current.next.next
        }
    }
    return head
};
