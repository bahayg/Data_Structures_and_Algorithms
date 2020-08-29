// Given an integer number n, return the difference between the product of its digits and the sum of its digits.

// Example 1:

// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15

// Example 2:

// Input: n = 4421
// Output: 21
// Explanation: 
// Product of digits = 4 * 4 * 2 * 1 = 32 
// Sum of digits = 4 + 4 + 2 + 1 = 11 
// Result = 32 - 11 = 21
 
// Constraints:

// 1 <= n <= 10^5

// Hint 1:
// How to compute all digits of the number ?

// Hint 2:
// Use modulus operator (%) to compute the last digit.

// Hint 3:
// Generalise modulus operator idea to compute all digits.

// Related Topics: Math

// Runtime: 72 ms / Memory: 33.3 MB

subtractProductAndSum = n => {
    let product = 1
    let sum = 0
    while (n != 0) {
      sum += n%10
      product *= n%10
      n = Math.floor(n/10)
    }
    return product - sum
}

// Ruby / Runtime: 36 ms / Memory: 9.3 MB

// def subtract_product_and_sum(n)
//   product = 1
//   sum = 0
//   while (n != 0) 
//     sum += n%10
//     product = product*(n%10)
//     n = (n/10).round
//   end
//   product - sum 
// end
