// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

// Related Topics: Hash Table  / Sort

// Runtime: 88 ms / Memory: 39.6 MB

var isAnagram = function(s, t) {
    let strS = {}
    if (s.length !== t.length) return false
    for (let char of s) {
        strS[char] = (strS[char] || 0) + 1
    }
    for (let char of t) {
        if (!strS[char]) return false
        strS[char] --
    }
        return true
};
