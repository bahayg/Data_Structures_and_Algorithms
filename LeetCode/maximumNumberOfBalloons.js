// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "leetcode"
// Output: 0

// Constraints:
// 1 <= text.length <= 10^4
// text consists of lower case English letters only.

// Hint 1:
// Count the frequency of letters in the given string.

// Hint 2:
// Find the letter than can make the minimum number of instances of the word "balloon".

// Related Topics: Hash Table / String

// Runtime: 100 ms / Memory: 41.1 MB

var maxNumberOfBalloons = function (text) {
  let hash = {};
  for (let i of text) {
    hash[i] = (hash[i] || 0) + 1;
  }
  let b = hash["b"] ? hash["b"] : 0;
  let a = hash["a"] ? hash["a"] : 0;
  let l = hash["l"] ? Math.floor(hash["l"] / 2) : 0;
  let o = hash["o"] ? Math.floor(hash["o"] / 2) : 0;
  let n = hash["n"] ? hash["n"] : 0;
  return Math.min(b, a, l, o, n);
};
