// Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.

// Example 1:
// Input:
//     3
//    / \
//   9  20
//     /  \
//    15   7
// Output: [3, 14.5, 11]
// Explanation:
// The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].

// Note:
// The range of node's value is in the range of 32-bit signed integer.

// Related Topics: Tree

// Runtime: 92 ms / Memory: 43.1 MB

var averageOfLevels = function (root) {
  if (!root) return null;
  let queue = [root],
    result = [];
  while (queue.length) {
    let len = queue.length,
      sum = 0;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      sum += node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(sum / len);
  }
  return result;
};
