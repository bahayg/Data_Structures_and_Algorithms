// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3

// But the following [1,2,2,null,3,null,3] is not:

//     1
//    / \
//   2   2
//    \   \
//    3    3

// Follow up: Solve it both recursively and iteratively.

// Related Topics: Tree / Depth-first Search / Breadth-first Search

// Runtime: 100 ms / Memory: 40.8 MB

var isSymmetric = function (root) {
  if (!root) return true;
  let queue = [];
  queue.push(root, root);
  while (queue.length) {
    let node1 = queue.shift();
    let node2 = queue.shift();
    if (!node1 && !node2) continue;
    if (!node1 || !node2) return false;
    if (node1.val !== node2.val) return false;
    queue.push(node1.left, node2.right);
    queue.push(node1.right, node2.left);
  }
  return true;
};

// Runtime: 96 ms / Memory: 40.8 MB

var isSymmetric = function (root) {
  if (!root) return true;
  return traverse(root.left, root.right);
};

const traverse = (node1, node2) => {
  if (!node1 && !node2) return true;
  if (!node1 || !node2) return false;
  if (node1.val !== node2.val) return false;
  return traverse(node1.left, node2.right) && traverse(node1.right, node2.left);
};
