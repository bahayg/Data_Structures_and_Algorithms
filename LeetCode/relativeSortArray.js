// Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.
// Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.  Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.

// Example 1:
// Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
// Output: [2,2,2,1,4,3,3,9,6,7,19]

// Constraints:
// 1 <= arr1.length, arr2.length <= 1000
// 0 <= arr1[i], arr2[i] <= 1000
// All the elements of arr2 are distinct.
// Each arr2[i] is in arr1.

// Hint 1:
// Using a hashmap, we can map the values of arr2 to their position in arr2.

// Hint 2:
// After, we can use a custom sorting function.

// Related Topics: Array / Sort

// Runtime: 92 ms / Memory: 39 MB

var relativeSortArray = function (arr1, arr2) {
  let hash = {};
  for (let i = 0; i < arr2.length; i++) {
    hash[arr2[i]] = i;
  }
  for (let i of arr1) {
    if (!(i in hash)) hash[i] = 1000 + i;
  }
  arr1.sort((a, b) => hash[a] - hash[b]);
  return arr1;
};

// Runtime: 100 ms / Memory: 38.7 MB

var relativeSortArray = function (arr1, arr2) {
  let exist = [],
    nonExist = [];
  for (let i of arr1) {
    if (arr2.includes(i)) exist.push(i);
    else nonExist.push(i);
  }
  return exist
    .sort((a, b) => arr2.indexOf(a) - arr2.indexOf(b))
    .concat(nonExist.sort((a, b) => a - b));
};
