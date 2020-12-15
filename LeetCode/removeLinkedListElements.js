// Remove all elements from a linked list of integers that have value val.

// Example:
// Input:  1->2->6->3->4->5->6, val = 6
// Output: 1->2->3->4->5

// Related Topics: Linked List

// Runtime: 96 ms / Memory: 43.9 MB

var removeElements = function (head, val) {
  if (!head) return null;
  while (head && head.val === val) {
    head = head.next;
  }
  if (head) {
    let prev = head;
    let curr = head.next;
    while (curr) {
      if (curr.val === val) {
        prev.next = curr.next;
      } else {
        prev = curr;
      }
      curr = curr.next;
    }
  }
  return head;
};
