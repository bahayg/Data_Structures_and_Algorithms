// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,1]
// Output: 1

// Example 2:

// Input: [4,1,2,1,2]
// Output: 4

// Related Topics: Hash Table / Bit Manipulation

// Runtime: 72 ms / Memory: 40.9 MB

var singleNumber = function(nums) {
    let hash = {}
    for (let i = 0; i < nums.length; i ++) {
        hash[nums[i]] ? hash[nums[i]] += 1 : hash[nums[i]] = 1
    }
    return Object.keys(hash).filter(key => hash[key] === 1)  
};
