// Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
// Find all the elements that appear twice in this array.
// Could you do it without extra space and in O(n) runtime?

// Example:
// Input:
// [4,3,2,7,8,2,3,1]
// Output:
// [2,3]

// Related Topics: Array

// Runtime: 176 ms / Memory: 48.5 MB

var findDuplicates = function(nums) {
    let sortedNums = nums.sort((a,b) => (a-b))
    let result = []
    for(let i = 0; i < nums.length - 1; i++) {
        if (sortedNums[i] === sortedNums[i+1]) {
            result.push(sortedNums[i])
        }  
    }
    return result
};
