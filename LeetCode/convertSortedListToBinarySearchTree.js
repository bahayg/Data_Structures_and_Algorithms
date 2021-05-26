// Given the head of a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.
// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

// Example 1:
// Input: head = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: One possible answer is [0,-3,9,-10,null,5], which represents the shown height balanced BST.

// Example 2:
// Input: head = []
// Output: []

// Example 3:
// Input: head = [0]
// Output: [0]

// Example 4:
// Input: head = [1,3]
// Output: [3,1]

// Constraints:
// The number of nodes in head is in the range [0, 2 * 104].
// -105 <= Node.val <= 105

// Related Topics: Linked List / Depth-first Search

// Runtime: 100 ms / Memory: 46.9 MB

var sortedListToBST = function (head) {
  let curr = head;
  let arr = [];
  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }

  const buildTree = (arr) => {
    if (!arr.length) return null;
    let mid = Math.floor(arr.length / 2);
    let root = new TreeNode(arr[mid]);
    root.left = buildTree(arr.slice(0, mid));
    root.right = buildTree(arr.slice(mid + 1));
    return root;
  };
  return buildTree(arr);
};
