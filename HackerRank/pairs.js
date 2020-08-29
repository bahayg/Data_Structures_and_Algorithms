// You will be given an array of integers and a target value. Determine the number of pairs of array elements that have a difference equal to a target value.
// For example, given an array of [1, 2, 3, 4] and a target value of 1, we have three values meeting the condition: 2 - 1 = 1, 3 - 2 = 1, and 4 - 3 = 1.

// Function Description
// Complete the pairs function below. It must return an integer representing the number of element pairs having the required difference.
// pairs has the following parameter(s):
// k: an integer, the target difference
// arr: an array of integers

// Input Format
// The first line contains two space-separated integers n and k, the size of arr and the target value.
// The second line contains n space-separated integers of the array arr.

// Constraints
// 2 <= n <= 10^5
// 0 < k < 10^9
// 0 < arr[i] < 2^31 - 1
// each integer arr[i] will be unique

// Output Format
// An integer representing the number of pairs of integers whose difference is .

// Sample Input
// 5 2  
// 1 5 3 4 2 

// Sample Output
// 3

// Explanation
// There are 3 pairs of integers in the set with a difference of 2: [5,3], [4,2] and [3,1] .

// My solution:
function pairs(k, arr) {
    let count = 0
    for (let i=0; i< arr.length-1; i++) {
        for (let j=i+1; j<arr.length; j++) {
            if ((arr[i] - arr[j]) == k || (arr[j] - arr[i]) == k) {
                count++
            }
        }
    }
    return count
}

// Alice's solution:
function pairs(k, arr) {
    let count = 0
    for (let i=0; i< arr.length-1; i++) {
        let j=i+1
        while (j < arr.length) {
            if (Math.abs(arr[j] - arr[i]) == k) count++
            j++
        }
    }
    return count
}

// Sean's solution:
function pairs (k, arr) {
    let hash = {}
    let count = 0
    for (let i of arr) {
        if (hash[i-k]) count += hash[i-k]
        if (hash[i+k]) count += hash[i+k]
        hash[i] = (hash[i] || 0) + 1
    }
    return count
}
