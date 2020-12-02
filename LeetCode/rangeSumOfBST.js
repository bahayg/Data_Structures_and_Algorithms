// Given the root node of a binary search tree, return the sum of values of all nodes with a value in the range [low, high].

// Example 1:
// Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
// Output: 32

// Example 2:
// Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
// Output: 23
 
// Constraints:
// The number of nodes in the tree is in the range [1, 2 * 104].
// 1 <= Node.val <= 105
// 1 <= low <= high <= 105
// All Node.val are unique.

// Related Topics: Tree / Depth-first Search / Recursion

// Runtime: 212 ms / Memory: 65 MB

var rangeSumBST = function(root, L, R) {
    if (!root) return 0
    let sum = 0
    if (root.val >= L && root.val <= R) sum = root.val
    return sum + rangeSumBST(root.left, L, R) + rangeSumBST(root.right, L, R)
};

// Runtime: 220 ms / Memory: 68.4 MB

var rangeSumBST = function(root, L, R) {
    if (!root) return 0
    let sum = 0
    if (root.val >= L && root.val <= R) sum = root.val
    if (root.val >= L || root.val >= R) sum += rangeSumBST(root.left, L, R)
    if (root.val <= L || root.val <= R) sum += rangeSumBST(root.right, L, R)
    return sum
};
