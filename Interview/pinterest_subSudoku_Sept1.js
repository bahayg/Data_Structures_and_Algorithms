// You are working on a logic game made up of a series of puzzles. 
// The first type of puzzle you settle on is "sub-Sudoku", a game where the player has to position the numbers 1..N on a NxN matrix.

// Your job is to write a function that, given an NxN matrix, determines if the matrix is valid. 
// A matrix is valid if every row and column contains exactly the numbers 1..N. 
// For example, in a 4x4 matrix, each row and column would contain the numbers 1, 2, 3, and 4.

// If the matrix is valid, return "VALID".
// If it is not valid, return "INVALID".

// The matrix may contain any integer, not just 1..N, and not just positive.
// However, the grid will only contain integers. 

// Examples
// The following matrix should return "VALID":

// 123
// 231
// 312

// Each row and column contains exactly the numbers 1, 2, and 3 in a 3x3 matrix. 


// My Submission:

// NOTE: Public test 1 and 9 return VALID when I run them in another environment, but they do not pass here. 

function checkSubSudoku(matrix) {
    //   Make an array of 1..N
      let numbers = []
      for (let i = 1; i <= matrix.length; i++) {
        numbers.push(i)
      }
      for (let i = 0; i < matrix.length; i++) {
    //     Declare two empty arrays; 
    //     one for "row", another one for "column"
        let rowCheck = []
        let columnCheck = []
        for (let j = 0; j < matrix[i].length; j ++) {
            rowCheck.push(matrix[i][j])
            columnCheck.push(matrix[j][i])
        }
    //     Before you increment i;
    //     Check if the current "row" and "column" arrays includes
    //     every element of "numbers"
        if ((numbers.every(ele => rowCheck.includes(ele))) && (numbers.every(ele => columnCheck.includes(ele)))) {
    //       If yes, empty "row" and "column" arrays and move to next i
          let rowCheck = []
          let columnCheck = []
    //       If no, return "INVALID"
        } else {
          return "INVALID"
        }    
      }
        return "VALID"
}

// These two tests did not pass:

    // 1 2 3 4
    // 2 3 4 1
    // 3 4 1 2
    // 4 1 2 3

// 1 2 3
// 2 3 1
// 3 1 2

// Error: Remove "let" on lines 48 and 49!
