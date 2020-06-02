// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true

// Hint 1:
// An interesting property about a valid parenthesis expression is that a sub-expression of a valid expression should also be a valid expression. (Not every sub-expression) e.g.
// { { } [ ] [ [ [ ] ] ] } is VALID expression
//           [ [ [ ] ] ]    is VALID sub-expression
//   { } [ ]                is VALID sub-expression
// Can we exploit this recursive structure somehow?

// Hint 2:
// What if whenever we encounter a matching pair of parenthesis in the expression, we simply remove it from the expression? This would keep on shortening the expression. e.g.
// { { ( { } ) } }
//       |_|

// { { (      ) } }
//     |______|

// { {          } }
//   |__________|

// {                }
// |________________|

// VALID EXPRESSION!

// Hint 3:
// The stack data structure can come in handy here in representing this recursive structure of the problem. We can't really process this from the inside out because we don't have an idea about the overall structure. But, the stack can help us process this recursively i.e. from outside to inwards.

// Related Topics: String, Stack

// Runtime: 68 ms / Memory: 37 MB

isValid = s => {
    let stck = []
    for (i = 0; i < s.length; i ++) {
      let char = stck[stck.length -1]
      if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
        stck.push(s[i])
      } else if ((char == "(" && s[i] == ")") || (char == "{" && s[i] == "}") || (char == "[" && s[i] == "]")) {
        stck.pop()
      } else return false
    }
      return stck.length ? false : true
}

// Runtime: 68 ms / Memory: 33.3 MB

isValid = s =>  {
  // Create a hash
    let map = {
        ")": "(",
        "}": "{",
        "]": "["
    }
    let stck = [];
    for(let i = 0; i < s.length; i ++){
        if(s[i] === "(" || s[i] === "[" || s[i] === "{") {
            stck.push(s[i]);
        } else if (stck[stck.length -1] === map[s[i]]) { 
            stck.pop()
        } else return false;
    }
    return stck.length ? false : true
}

// Ruby / Runtime: 36 ms / Memory: 9.3 MB

// def is_valid(s)
//   map = {
//         ")" => "(",
//         "}" => "{",
//         "]" => "["
//   } 
//   stck = []
//   s.each_char do |char|
//     if (char === "(" || char === "[" || char === "{")
//       stck.push(char)
//     elsif (stck[-1] === map[char])
//       stck.pop
//     else 
//       return false
//     end
//   end
//   stck.empty? 
// end



// For my blog post:

// "" returns true
// "()" returns true
// "()[]{}" returns true
// "(]" returns false
// "([)]" returns false
// "{[]}" returns true





// "({{(([[((({ Make sure that I am balanced! ]))))}}]}}]"





isValid = s => {
    // Create a stack
    let stck = []
    // Loop through each element in the string
    for (i = 0; i < s.length; i ++) {
      let char = stck[stck.length -1]
      // If you encounter a starting bracket, push it onto the stack
      if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
        stck.push(s[i])
        // Pop the opening bracket off the stack, 
        // if there is a corresponding closing bracket in the string
      } else if ((char == "(" && s[i] == ")") || 
        (char == "{" && s[i] == "}") || 
        (char == "[" && s[i] == "]")) {
        stck.pop()
      } else return false
    }
    // Check empty stack
      return stck.length ? false : true
}