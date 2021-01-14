// Given a matrix A, return the transpose of A.
// The transpose of a matrix is the matrix flipped over it's main diagonal, switching the row and column indices of the matrix.

// Example 1:
// Input: [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[1,4,7],[2,5,8],[3,6,9]]

// Example 2:
// Input: [[1,2,3],[4,5,6]]
// Output: [[1,4],[2,5],[3,6]]

// Note:
// 1 <= A.length <= 1000
// 1 <= A[0].length <= 1000

// Hint 1:
// We don't need any special algorithms to do this. You just need to know what the transpose of a matrix looks like. Rows become columns and vice versa!

// Related Topics: Array

// Runtime: 96 ms / Memory: 40.9 MB

var transpose = function (A) {
  let result = [];
  for (let i = 0; i < A[0].length; i++) {
    let col = [];
    for (let j = 0; j < A.length; j++) {
      col.push(A[j][i]);
    }
    result.push(col);
  }
  return result;
};
