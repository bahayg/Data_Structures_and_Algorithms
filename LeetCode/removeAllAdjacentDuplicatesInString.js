// Given a string S of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters, and removing them.

// We repeatedly make duplicate removals on S until we no longer can.

// Return the final string after all such duplicate removals have been made.  It is guaranteed the answer is unique.

// Example 1:

// Input: "abbaca"
// Output: "ca"
// Explanation: 
// For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".

// Note:

// 1 <= S.length <= 20000
// S consists only of English lowercase letters.

// Hint:
// Use a stack to process everything greedily.

// Runtime: 80 ms / Memory: 45.2 MB

removeDuplicates = (S) => {
    let stck = []
    for (let i = 0; i < S.length; i ++) {
      if (S[i] == stck[stck.length -1]) {
        stck.pop()
      } else {
        stck.push(S[i])
      }
    }
    return stck.join("")
}

// Ruby / Runtime: 84 ms / Memory: 11.2 MB

// def remove_duplicates(s)
//   stck = []
//   s.each_char do |item|
//     item == stck[-1] ? stck.pop : stck.push(item) 
//   end
//   stck.join
// end
