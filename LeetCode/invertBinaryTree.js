// Invert a binary tree.

// Example:
// Input:
//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// Output:
//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

// Trivia:
// This problem was inspired by this original tweet by Max Howell:
// Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so f*** off.

// Related Topics: Array / Two Pointers

// Runtime: 104 ms / Memory: 38 MB

var invertTree = function(root) {
    if(!root) return null
    else {
        [root.right,root.left] = [root.left,root.right]
        invertTree(root.right) 
        invertTree(root.left)
        return root
    } 
};
