// Given a pattern and a string s, find if s follows the same pattern.
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

// Example 1:
// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true

// Example 2:
// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false

// Example 3:
// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false

// Example 4:
// Input: pattern = "abba", s = "dog dog dog dog"
// Output: false

// Constraints:
// 1 <= pattern.length <= 300
// pattern contains only lower-case English letters.
// 1 <= s.length <= 3000
// s contains only lower-case English letters and spaces ' '.
// s does not contain any leading or trailing spaces.
// All the words in s are separated by a single space.

// Related Topics: Hash Table

// Runtime: 88 ms / Memory: 38.7 MB

var wordPattern = function (pattern, s) {
  let chars = pattern.split("");
  let words = s.split(" ");
  let hash = {};
  if (words.length !== chars.length) return false;
  for (let i = 0; i < words.length; i++) {
    if (hash[chars[i]]) {
      if (hash[chars[i]] !== words[i]) return false;
    } else {
      if (Object.values(hash).includes(words[i])) return false;
      hash[chars[i]] = words[i];
    }
  }
  return true;
};
