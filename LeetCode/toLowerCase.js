// Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

// Example 1:
// Input: "Hello"
// Output: "hello"

// Example 2:
// Input: "here"
// Output: "here"

// Example 3:
// Input: "LOVELY"
// Output: "lovely"

// Hint 1:
// Most languages support lowercase conversion for a string data type. However, that is certainly not the purpose of the problem. Think about how the implementation of the lowercase function call can be done easily.

// Hint 2:
// Think ASCII!

// Hint 3:
// Think about the different capital letters and their ASCII codes and how that relates to their lowercase counterparts. Does there seem to be any pattern there? Any mathematical relationship that we can use?

// Related Topics: String

// Runtime: 72 ms / Memory: 38.3 MB

var toLowerCase = function(str) {
    let result = ''
    for (let i = 0; i < str.length; i++) {
        result += (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91) ?  String.fromCharCode(str.charCodeAt(i) + 32) : str[i]
    }
    return result
};
