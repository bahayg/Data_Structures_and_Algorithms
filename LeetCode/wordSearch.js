// Given an m x n grid of characters board and a string word, return true if word exists in the grid.
// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Example 1:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true

// Example 2:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true

// Example 3:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false

// Constraints:
// m == board.length
// n = board[i].length
// 1 <= m, n <= 6
// 1 <= word.length <= 15
// board and word consists of only lowercase and uppercase English letters.

// Follow up: Could you use search pruning to make your solution faster with a larger board?

// Related Topics: Array / Backtracking

// Runtime: 268 ms / Memory: 38.9 MB

var exist = function (board, word) {
  const search = (i, j, count) => {
    if (count === word.length) return true;
    if (i < 0 || i >= board.length || j < 0 || j >= board[i].length)
      return false;
    if (board[i][j] !== word[count]) return false;
    board[i][j] = "*"; // mark as visited
    if (
      search(i + 1, j, count + 1) ||
      search(i - 1, j, count + 1) ||
      search(i, j + 1, count + 1) ||
      search(i, j - 1, count + 1)
    )
      return true;
    board[i][j] = word[count]; // reset the board
    return false;
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0] && search(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
};
