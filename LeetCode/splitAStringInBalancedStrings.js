// Balanced strings are those who have equal quantity of 'L' and 'R' characters.
// Given a balanced string s split it in the maximum amount of balanced strings.
// Return the maximum amount of splitted balanced strings.

// Example 1:
// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

// Example 2:
// Input: s = "RLLLLRRRLR"
// Output: 3
// Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.

// Example 3:
// Input: s = "LLLLRRRR"
// Output: 1
// Explanation: s can be split into "LLLLRRRR".

// Example 4:
// Input: s = "RLRRRLLRLL"
// Output: 2
// Explanation: s can be split into "RL", "RRRLLRLL", since each substring contains an equal number of 'L' and 'R'
 
// Constraints:
// 1 <= s.length <= 1000
// s[i] = 'L' or 'R'

// Hint 1:
// Loop from left to right maintaining a balance variable when it gets an L increase it by one otherwise decrease it by one.

// Hint 2:
// Whenever the balance variable reaches zero then we increase the answer by one.

// Related Topics: String / Greedy

// Runtime: 92 ms / Memory: 37.8 MB

var balancedStringSplit = function(s) {
    let balance = 0
    let answer = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'L') balance++
        else balance--
        if (balance === 0) answer++
    }
    return answer
};
