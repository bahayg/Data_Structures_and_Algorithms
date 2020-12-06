// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
// You may assume that the array is non-empty and the majority element always exist in the array.

// Example 1:
// Input: [3,2,3]
// Output: 3

// Example 2:
// Input: [2,2,1,1,1,2,2]
// Output: 2

// Related Topics: Array / Divide and Conquer / Bit Manipulation

// Runtime: 88 ms / Memory: 42.7 MB

var majorityElement = function(nums) {
    let obj = {}
    for (let i of nums) {
        obj[i] = (obj[i] || 0) + 1
    }
    for (let key in obj) {
        if (obj[key] > nums.length/2) return key
    }
};
