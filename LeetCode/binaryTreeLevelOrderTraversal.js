// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]

// Related Topics: Tree / Breadth-first Search

// Runtime: 76 ms / Memory: 40.1 MB

var levelOrder = function (root) {
  if (!root) return [];
  let queue = [root],
    result = [];
  while (queue.length) {
    let len = queue.length;
    let levelOrder = [];
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      levelOrder.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(levelOrder);
  }
  return result;
};
