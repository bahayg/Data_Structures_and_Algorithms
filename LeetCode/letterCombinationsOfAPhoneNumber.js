// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example 1:
// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// Example 2:
// Input: digits = ""
// Output: []

// Example 3:
// Input: digits = "2"
// Output: ["a","b","c"]

// Constraints:
// 0 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].

// Related Topics: String / Backtracking / Depth-first Search / Recursion

// Runtime: 76 ms / Memory: 38.7 MB

var letterCombinations = function (digits) {
  let letters = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  if (!digits) return [];
  let result = [];
  for (let digit of digits) {
    let chars = letters[digit];
    if (result.length == 0) {
      result = result.concat(chars);
      continue;
    }
    let newResult = [];
    for (let letter of result) {
      for (let char of chars) {
        newResult.push(letter + char);
      }
    }
    result = newResult;
  }
  return result;
};
