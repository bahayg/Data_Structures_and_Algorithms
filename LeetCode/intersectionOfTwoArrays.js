// Given two arrays, write a function to compute their intersection.

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]

// Note:
// Each element in the result must be unique.
// The result can be in any order.

// Related Topics: Hash Table / Two Pointers / Binary Search / Sort

// Runtime: 84 ms / Memory: 41.1 MB

var intersection = function (nums1, nums2) {
  let hash1 = {};
  for (let i of nums1) {
    hash1[i] = (hash1[i] || 0) + 1;
  }
  let result = [];
  for (let i of nums2) {
    if (hash1[i]) result.push(i);
  }
  return [...new Set(result)];
};
