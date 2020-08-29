// Given a linked list, remove the n-th node from the end of list and return its head.

// Example:
// Given linked list: 1->2->3->4->5, and n = 2.

// After removing the second node from the end, the linked list becomes 1->2->3->5.

// Note:
// Given n will always be valid.

// Follow up:
// Could you do this in one pass?

// Hint:
// Maintain two pointers and update one with a delay of n steps.

// Related Topics: Linked List and Two Pointers

// Runtime: 108 ms / Memory: 33.7 MB

removeNthFromEnd = (head, n) => {
    let arr = new Array(n+1)
    for (let node = head; node; node = node.next) {
        arr.push(node)
        arr.shift()
    }
    arr[0] ? arr[0].next = arr[1].next : head = arr[1].next
    return head
}
