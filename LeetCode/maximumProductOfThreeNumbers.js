// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

// Example 1:
// Input: nums = [1,2,3]
// Output: 6

// Example 2:
// Input: nums = [1,2,3,4]
// Output: 24

// Example 3:
// Input: nums = [-1,-2,-3]
// Output: -6

// Constraints:
// 3 <= nums.length <= 104
// -1000 <= nums[i] <= 1000

// Related Topics: Array / Math

// Runtime: 128 ms / Memory: 43.1 MB

var maximumProduct = function (nums) {
  let sorted = nums.sort((a, b) => b - a);
  return Math.max(
    sorted[0] * sorted[1] * sorted[2],
    sorted[0] * sorted[sorted.length - 1] * sorted[sorted.length - 2]
  );
};
