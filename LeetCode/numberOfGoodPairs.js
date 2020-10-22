// Given an array of integers nums.
// A pair (i,j) is called good if nums[i] == nums[j] and i < j.
// Return the number of good pairs.

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.

// Example 3:

// Input: nums = [1,2,3]
// Output: 0
 
// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

// Hint 1:
// Count how many times each number appears. 
// If a number appears n times, then n * (n – 1) // 2 good pairs can be made with this number.

// Related Topics: Array / Hash Table / Math

// Runtime: 80 ms / Memory: 38.2 MB

var numIdenticalPairs = function(nums) {
    let hash = {}
    let pairs = 0
    for (let i =  0; i < nums.length; i++) {
        hash[nums[i]] = (hash[nums[i]] || 0) + 1
    }
    for (let key in hash) {
        if (hash[key] > 1) pairs += (hash[key]*(hash[key]-1) / 2)
    }
    return pairs
};
