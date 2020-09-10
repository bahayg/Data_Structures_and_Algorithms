// Write a function that reverses a string. The input string is given as an array of characters char[].

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.

// Example 1:

// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Example 2:

// Input: ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// Hint:
// The entire logic for reversing a string is based on using the opposite directional two-pointer approach!

// Related Topics: Two Pointers / String

// Runtime: 112 ms / Memory: 43.4 MB

var reverseString = function(s) {
    for (let i = 0; i < s.length / 2; i ++) {     
            [s[i], s[s.length-1-i]] = [s[s.length-1-i], s[i]]
    }
    return s
};
