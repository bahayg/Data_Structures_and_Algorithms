// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function. 
// Note that a subarray must consist of consecutive elements from the original array. 
// In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

// Constraints:
// Time COmplexity - O(N)
// Space Complexity - O(1)

// My solution:
function maxSubarraySum(arr, num){
    // add whatever parameters you deem necessary - good luck!
    let max = 0
    if (num > arr.length) return null
    for (let i = 0; i < num; i++) {
        max += arr[i]
    }
    let temp = max
    for (let i = num; i < arr.length; i++) {
        temp += arr[i] - arr[i - num] 
        if (temp>max) max=temp
    }
    return max
}

// Colt Steele's Solution:
function maxSubarraySum(arr, num){
    if (arr.length < num) return null;
 
    let total = 0;
    for (let i=0; i<num; i++){
       total += arr[i];
    }
    let currentTotal = total;
    for (let i = num; i < arr.length; i++) {
       currentTotal += arr[i] - arr[i-num];
       total = Math.max(total, currentTotal);
    }
    return total;
}

maxSubarraySum([100,200,300,400], 2) // 700
  