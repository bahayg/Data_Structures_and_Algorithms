// Question:
// Given an array of integers arr, write a function absSort(arr), that sorts the array according to the absolute values of the numbers in arr. If two numbers have the same absolute value, sort them according to sign, where the negative numbers come before the positive numbers.

// Examples:
// input:  arr = [2, -7, -2, -2, 0]
// output: [0, -2, -2, 2, -7]

// Constraints:
// [time limit] 5000ms
// [input] array.integer arr
// 0 ≤ arr.length ≤ 10
// [output] array.integer

// Hints:
// We can try either a selection sort, or leveraging the sort function in the language library.
// For a selection sort, we’ll take the largest unsorted value and put it as the next element. To know an element is the largest, we need to write a custom comparison function.
// To leverage the sort function in our library, typically we will also need a custom comparison function.

// Answer:

// Approach #1: Selection Sort
// Write a custom comparison function, such as smaller(a, b) which is true if and only if a is supposed to come before b (and a != b). From here, we can repeatedly find the ‘smallest’ number in A[i], A[i+1], ..., A[A.length - 1] and swapping it with A[i].

// function absSort(arr):
//     function smaller(a, b):
//         if abs(a) < abs(b): return true
//         if abs(a) > abs(b): return false
//         return a < b

//     for i from 0 to arr.length - 2:
//         best = i
//         for j from i to arr.length - 1:
//             if smaller(arr[j], arr[best]):
//                 best = j
//         arr[best], arr[i] = arr[i], arr[best]

//     return arr

// Time Complexity: O(N^2) from our two for loops.
// Space Complexity: O(1), the additional space used by best.

// Approach #2: Custom Sort
// Leverage the sort function of your languages library. Usually, it will have support for either a custom comparison function.
// For a custom comparison function compare(a, b), typically we want to return -1 if a < b, 1 if a > b, and 0 if a == b.

// function absSort(arr):
//     def compare(a, b):
//         if abs(a) < abs(b): return -1
//         if abs(a) > abs(b): return 1
//         if a < b: return -1
//         if a > b: return 1
//         return 0

//     arr.sort(cmp = compare)
//     return arr

// Time Complexity: O(N log N), the complexity of sorting.
// Space Complexity: O(N), the space typically used by compilers in their implementation of sorting operations.

// Time: 199ms Passed: 9 Failed: 0
function absSort(arr) {
  /**
	@param arr: integer[]
	@return: integer[]
	*/

  // your code goes here
  let newArr = arr.sort((a, b) => Math.abs(a) - Math.abs(b));
  for (let i = 1; i < arr.length - 1; i++) {
    if (
      Math.abs(newArr[i]) === Math.abs(newArr[i + 1]) &&
      newArr[i] > newArr[i + 1]
    ) {
      [newArr[i], newArr[i + 1]] = [newArr[i + 1], newArr[i]];
    }
  }
  return newArr;
}
