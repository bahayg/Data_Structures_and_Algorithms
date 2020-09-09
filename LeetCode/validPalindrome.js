// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true

// Example 2:

// Input: "race a car"
// Output: false

// Constraints:

// s consists only of printable ASCII characters.

// Related Topics: Two Pointers / String

// Runtime: 92 ms / Memory: 38.8 MB

var isPalindrome = function(s) {
    let newString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
    // console.log(newString)
    for (let i = 0; i < newString.length / 2; i ++) {
        if (newString[i] !== newString[newString.length-1-i]) {
            return false
        }
    }
    return true
};
