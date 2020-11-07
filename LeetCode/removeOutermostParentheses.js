// A valid parentheses string is either empty (""), "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.  For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
// A valid parentheses string S is primitive if it is nonempty, and there does not exist a way to split it into S = A+B, with A and B nonempty valid parentheses strings.
// Given a valid parentheses string S, consider its primitive decomposition: S = P_1 + P_2 + ... + P_k, where P_i are primitive valid parentheses strings.
// Return S after removing the outermost parentheses of every primitive string in the primitive decomposition of S.

// Example 1:
// Input: "(()())(())"
// Output: "()()()"
// Explanation: 
// The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
// After removing outer parentheses of each part, this is "()()" + "()" = "()()()".

// Example 2:
// Input: "(()())(())(()(()))"
// Output: "()()()()(())"
// Explanation: 
// The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
// After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".

// Example 3:
// Input: "()()"
// Output: ""
// Explanation: 
// The input string is "()()", with primitive decomposition "()" + "()".
// After removing outer parentheses of each part, this is "" + "" = "".
 
// Note:
// S.length <= 10000
// S[i] is "(" or ")"
// S is a valid parentheses string

// Hint 1:
// Can you find the primitive decomposition? The number of ( and ) characters must be equal.

// Related Topics: Stack

// Runtime: 76 ms / Memory: 40.3 MB

var removeOuterParentheses = function(S) {
    let arr = S.split('')
    let decom = []
    let result = []
    let open = 0
    let close = 0
    for (let i = 0; i < arr.length; i++) {
        decom.push(arr[i])
        arr[i] === "(" ? open++ : close++
        if (open === close) {
            result += (decom.slice(1,-1))
            open = 0
            close = 0
            decom = ''
        } 
    }
    return result
};
