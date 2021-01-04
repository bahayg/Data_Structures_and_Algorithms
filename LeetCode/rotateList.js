// Given the head of a linked list, rotate the list to the right by k places.

// Example 1:
// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]

// Example 2:
// Input: head = [0,1,2], k = 4
// Output: [2,0,1]

// Constraints:
// The number of nodes in the list is in the range [0, 500].
// -100 <= Node.val <= 100
// 0 <= k <= 2 * 109

// Related Topics: Linked List / Two Pointers

// Runtime: 88 ms / Memory: 40.6 MB

var rotateRight = function (head, k) {
  if (!head || k === 0) return head;
  let len = 1,
    tail = head;
  while (tail.next) {
    tail = tail.next;
    len++;
  }
  k = k % len;
  for (let i = 0; i < len - k; i++) {
    tail.next = head;
    tail = head;
    head = head.next;
    tail.next = null;
  }
  return head;
};
