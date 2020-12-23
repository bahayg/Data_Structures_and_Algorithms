// Question:
// Given a package with a weight limit limit and an array arr of item weights, implement a function getIndicesOfItemWeights that finds two items whose sum of weights equals the weight limit limit. Your function should return a pair [i, j] of the indices of the item weights, ordered such that i > j. If such a pair doesn’t exist, return an empty array.
// Analyze the time and space complexities of your solution.

// Example:
// input:  arr = [4, 6, 10, 15, 16],  lim = 21
// output: [3, 1] # since these are the indices of the
//                # weights 6 and 15 whose sum equals to 21

// Constraints:
// [time limit] 5000ms
// [input] array.integer arr
// 0 ≤ arr.length ≤ 100
// [input] integer limit
// [output] array.integer

// Hints:
// A common mistake is to assume that the input array is sorted. Make sure your peer doesn’t make that assumption. Better yet, if your peer is following any common “best practices” in technical interviews, they would know to ask whether they can make any assumptions in the beginning of their interview.
// Another common mistake is to assume that the item weights in the input array are unique. This is not the case. A valid input could be, for instance, arr = [4,4] and limit = 8.
// If your peer can’t come up with a solution, ask for the brute force solution and then ask how they can optimize it.
// If your peer can’t think of a better solution than the brute force, ask them if they’re familiar with any data structures, i.e. a Map/Hash Table, that enable lookups in constant time. Then ask how they can use this data structure to solve the problem efficiently.
// Watch out for hashing an item weight before looking up in the map its complement.
// For instance, for an item weight w that equals to limit/2 (whose complement is also limit/2), hashing the weight before looking up the complement can “detect” a pair even when there is only one item whose weight is w in arr.

// Answer:
// The brute force solution consists of two nested loops. For every index i in the outer loop, we look for j (such that i < j < arr.length) in the inner loop that satisfies the condition arr[i] + arr[j] == lim. The time complexity of this algorithm in the worst case scenario is O(N^2).
// This is a classic case to use a map. We traverse arr only once. For each weight w in arr we compute its complement limit - w and check whether that complement was hashed so far. If we find the complement in the map, we return a pair that consists of w’s and limit - w’s indices. if not, we hash w while using the weight as the hash key and its array index as the hash value. Even if the same weight is found more than once it doesn’t matter because at the time of the lookup we only need one item with that weight.

// Pseudocode:

// function getIndicesOfItemWeights(arr, limit):
//     m  = new Map()

//     for index from 0 to arr.length - 1:
//         w = arr[index]
//         complementIndex = m.findKey(limit - w)
//         if (complementIndex != null):
//             return [index, complementIndex]
//         else:
//             m.insert(w, index)

//     return null

// Time Complexity: going over the array only once, performing constant time work for each weight and assuming we have a good hash function with rare collisions, we get a linear O(N) time complexity.
// Space Complexity: we used a map as an auxiliary space. In the worst case scenario, the space complexity of that map is O(N).

// Time: 236 Passed: 6 Failed: 0
function getIndicesOfItemWeights(arr, limit) {
  // your code goes here
  let hash = {};
  for (let i = 0; i < arr.length; i++) {
    if (hash[limit - arr[i]] >= 0) return [i, hash[limit - arr[i]]];
    hash[arr[i]] = i;
  }
  return [];
}
