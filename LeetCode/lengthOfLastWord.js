// Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.
// A word is a maximal substring consisting of non-space characters only.

// Example 1:
// Input: s = "Hello World"
// Output: 5

// Example 2:
// Input: s = " "
// Output: 0

// Constraints:
// 1 <= s.length <= 104
// s consists of only English letters and spaces ' '.

// Related Topics: String

// Runtime: 80 ms / Memory: 38.6 MB

var lengthOfLastWord = function (s) {
  let arr = s.trim().split(" ");
  return arr[arr.length - 1].length;
};

// Runtime: 76 ms / Memory: 38.9 MB

var lengthOfLastWord = function (s) {
  let arr = s.trim().split(" ");
  let count = 0;
  for (let i = 0; i < arr[arr.length - 1].length; i++) {
    count++;
  }
  return count;
};
