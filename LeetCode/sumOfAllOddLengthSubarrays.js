// Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.
// A subarray is a contiguous subsequence of the array.
// Return the sum of all odd-length subarrays of arr.

// Example 1:
// Input: arr = [1,4,2,5,3]
// Output: 58
// Explanation: The odd-length subarrays of arr and their sums are:
// [1] = 1
// [4] = 4
// [2] = 2
// [5] = 5
// [3] = 3
// [1,4,2] = 7
// [4,2,5] = 11
// [2,5,3] = 10
// [1,4,2,5,3] = 15
// If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58

// Example 2:
// Input: arr = [1,2]
// Output: 3
// Explanation: There are only 2 subarrays of odd length, [1] and [2]. Their sum is 3.

// Example 3:
// Input: arr = [10,11,12]
// Output: 66 

// Constraints:
// 1 <= arr.length <= 100
// 1 <= arr[i] <= 1000

// Hint 1:
// You can brute force – try every (i,j) pair, and if the length is odd, go through and add the sum to the answer.

// Related Topics: Array

// Runtime: 80 ms / Memory: 38.6 MB

var sumOddLengthSubarrays = function(arr) {
    let sum = 0
    let prev = 0
    for (let i = 0; i < arr.length; i++) {
        prev = arr[i]
        sum += prev
        for (let j = i; j < arr.length - 2; j+=2) {
            prev += arr[j+1] + arr[j+2]
            sum += prev
        }
    }
    return sum
};
