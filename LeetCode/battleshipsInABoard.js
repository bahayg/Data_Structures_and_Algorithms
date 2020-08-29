// Given an 2D board, count how many battleships are in it. The battleships are represented with 'X's, empty slots are represented with '.'s. You may assume the following rules:
// You receive a valid board, made of only battleships or empty slots.
// Battleships can only be placed horizontally or vertically. In other words, they can only be made of the shape 1xN (1 row, N columns) or Nx1 (N rows, 1 column), where N can be of any size.
// At least one horizontal or vertical cell separates between two battleships - there are no adjacent battleships.

// Example:

// X..X
// ...X
// ...X
// In the above board there are 2 battleships.

// Invalid Example:

// ...X
// XXXX
// ...X
// This is an invalid board that you will not receive - as battleships will always have a cell separating between them.

// Follow up:
// Could you do it in one-pass, using only O(1) extra memory and without modifying the value of the board?

// Runtime: 76 ms / Memory: 36.8 MB

countBattleships = board => {
    let shipCount = 0
    for (let i = 0; i < board.length; i ++) {
      for (let j = 0; j < board[i].length; j ++) {
        if (board[i][j] === "X") {
          if (!countedShips(board, i, j)) {
            shipCount ++
          }
        }
      }
    }
    return shipCount
}
  
countedShips = (board, i, j) => {
    if (i > 0 && board[i-1][j] === "X") return true
    if (j > 0 && board[i][j-1] === "X") return true
    return false
}

// Ruby / Runtime: 40 ms / Memory: 10.9 MB

// def count_battleships(board)
//   shipCount = 0
//   board.each_index do |i|
//     board[i].each_index do |j|
//       if board[i][j] == "X" && (i == 0 || board[i-1][j] != "X") && (j == 0 || board[i][j-1] != "X")
//         shipCount += 1
//       end
//     end
//   end
//   shipCount
// end
