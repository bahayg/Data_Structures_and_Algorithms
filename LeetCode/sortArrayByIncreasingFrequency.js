// Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.

// Return the sorted array.

// Example 1:
// Input: nums = [1,1,2,2,2,3]
// Output: [3,1,1,2,2,2]
// Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.

// Example 2:
// Input: nums = [2,3,1,3,2]
// Output: [1,3,3,2,2]
// Explanation: '2' and '3' both have a frequency of 2, so they are sorted in decreasing order.

// Example 3:
// Input: nums = [-1,1,-6,4,5,-6,1,4,1]
// Output: [5,-1,4,4,-6,-6,1,1,1]

// Constraints:
// 1 <= nums.length <= 100
// -100 <= nums[i] <= 100

// Hint 1:
// Count the frequency of each value.

// Hint 2:
// Use a custom comparator to compare values by their frequency. If two values have the same frequency, compare their values.

// Related Topics: Array / Sort

// Runtime: 112 ms / Memory: 40.4 MB

var frequencySort = function (nums) {
  let hash = {};
  for (let i of nums) {
    hash[i] = (hash[i] || 0) + 1;
  }
  return nums.sort((a, b) => hash[a] - hash[b] || b - a);
};
