// Given a non-empty array of integers, return the k most frequent elements.

// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

// Note:
// You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
// Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
// It's guaranteed that the answer is unique, in other words the set of the top k frequent elements is unique.
// You can return the answer in any order.

// Related Topics: Hash Table / Heap

// Runtime: 80 ms / Memory: 40.6 MB

var topKFrequent = function(nums, k) {
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = (map[nums[i]] || 0) + 1
    }
    let sortedMap = Object.keys(map).sort((a,b) => map[b] - map[a])
    let result = []
    for (let i = 0; i < k; i++) {
        result.push(sortedMap[i])
    }
    return result
};
