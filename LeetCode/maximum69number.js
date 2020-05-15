// Given a positive integer num consisting only of digits 6 and 9.

// Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

// Example 1:

// Input: num = 9669
// Output: 9969
// Explanation: 
// Changing the first digit results in 6669.
// Changing the second digit results in 9969.
// Changing the third digit results in 9699.
// Changing the fourth digit results in 9666. 
// The maximum number is 9969.

// Example 2:

// Input: num = 9996
// Output: 9999
// Explanation: Changing the last digit 6 to 9 results in the maximum number.

// Example 3:

// Input: num = 9999
// Output: 9999
// Explanation: It is better not to apply any change.
 

// Constraints:

// 1 <= num <= 10^4
// num's digits are 6 or 9.

// Hint 1:
// Convert the number in an array of its digits.

// Hint 2:
// Brute force on every digit to get the maximum number.

// Runtime: 48 ms / Memory: 34 MB

const maximum69Number = num => {
    let arr = num.toString().split("")
    arr.splice(arr.indexOf("6"), 1, "9")
    return arr.join("")
}

// Runtime: 60 ms / Memory: 33.9 MB

const maximum69Number = num => {
    let arr = num.toString().split("")
    for (let i = 0; i < arr.length; i ++) {
      if (arr[i] === "6") {
        arr[i] = "9"
        break
      }
    }
    return arr.join("")
}

// Ruby / Runtime: 32 ms / Memory: 9.3 MB

// def maximum69_number (num)
//   num.to_s.sub("6", "9").to_i    
// end