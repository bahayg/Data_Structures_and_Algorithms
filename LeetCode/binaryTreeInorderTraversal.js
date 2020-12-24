// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,3,2]

// Example 2:
// Input: root = []
// Output: []

// Example 3:
// Input: root = [1]
// Output: [1]

// Example 4:
// Input: root = [1,2]
// Output: [2,1]

// Example 5:
// Input: root = [1,null,2]
// Output: [1,2]

// Constraints:
// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

// Follow up:
// Recursive solution is trivial, could you do it iteratively?

// Related Topics: Hash Table / Stack / Tree

// Runtime: 80 ms / Memory: 38.6 MB

var inorderTraversal = function (root) {
  let data = [];
  if (!root) return [];
  function traverse(root) {
    if (root.left) traverse(root.left);
    data.push(root.val);
    if (root.right) traverse(root.right);
  }
  traverse(root);
  return data;
};

// Runtime: 80 ms / Memory: 39 MB

var inorderTraversal = function (root) {
  let result = [];
  let stack = [];
  let current = root;
  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    result.push(current.val);
    current = current.right;
  }
  return result;
};
