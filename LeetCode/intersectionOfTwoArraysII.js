// Given two arrays, write a function to compute their intersection.

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]

// Note:
// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.

// Follow up:
// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

// Related Topics: Hash Table / Two Pointers / Binary Search / Sort

// Runtime: 84 ms / Memory: 41.3 MB

var intersect = function (nums1, nums2) {
  let hash1 = {};
  for (let i of nums1) {
    hash1[i] = (hash1[i] || 0) + 1;
  }
  let ans = [];
  for (let i of nums2) {
    if (hash1[i]) {
      ans.push(i);
      hash1[i]--;
    }
  }
  return ans;
};
