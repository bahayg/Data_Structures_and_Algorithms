// In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.
// Two nodes of a binary tree are cousins if they have the same depth, but have different parents.
// We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.
// Return true if and only if the nodes corresponding to the values x and y are cousins.

// Example 1:
// Input: root = [1,2,3,4], x = 4, y = 3
// Output: false

// Example 2:
// Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
// Output: true

// Example 3:
// Input: root = [1,2,3,null,4], x = 2, y = 3
// Output: false

// Constraints:
// The number of nodes in the tree will be between 2 and 100.
// Each node has a unique integer value from 1 to 100.

// Related Topics: Tree / Breadth-first Search

// Runtime: 80 ms / Memory: 40.3 MB

var isCousins = function (root, x, y) {
  let depthX = findDepth(root, x, 0);
  let depthY = findDepth(root, y, 0);
  let parentX = findParent(root, x, root.val);
  let parentY = findParent(root, y, root.val);

  if (depthX === depthY && parentX !== parentY) return true;
  else return false;

  function findDepth(root, x, depth = 0) {
    if (root.val === x) return depth;
    else {
      return (
        (root.left && findDepth(root.left, x, depth + 1)) ||
        (root.right && findDepth(root.right, x, depth + 1))
      );
    }
  }

  function findParent(root, x, parent) {
    if (root.val === x) return parent;
    else {
      return (
        (root.left && findParent(root.left, x, root.val)) ||
        (root.right && findParent(root.right, x, root.val))
      );
    }
  }
};
