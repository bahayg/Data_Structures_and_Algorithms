// Given an integer, write a function to determine if it is a power of two.

// Example 1:

// Input: 1
// Output: true 
// Explanation: 2^0 = 1

// Example 2:

// Input: 16
// Output: true
// Explanation: 2^4 = 16

// Example 3:

// Input: 218
// Output: false

// Related Topics: Math / Bit Manipulation

// Runtime: 136 ms / Memory: 37.5 MB

var isPowerOfTwo = function(n) {
    if (n < 1) return false
    if (n === 1) return true
    if (n%2 !== 0) return false
    else return isPowerOfTwo(n/2) 
};
