// Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

// Example 1:

// Input: [-4,-1,0,3,10]
// Output: [0,1,9,16,100]

// Example 2:

// Input: [-7,-3,2,3,11]
// Output: [4,9,9,49,121]
 
// Note:

// 1 <= A.length <= 10000
// -10000 <= A[i] <= 10000
// A is sorted in non-decreasing order.

// Related Topics: Array, Two Pointers

// Runtime: 216 ms / Memory: 43.7 MB (error in runtime!)

sortedSquares = arr => {
    return arr.map(num => num*num).sort((a,b) => a-b)
}

// Runtime: 132 ms / Memory: 43.3 MB (error in runtime!)

sortedSquares = arr => {
    let result = []
    for (let i = 0; i < arr.length; i ++) {
      result.push(arr[i]*arr[i])
    }
    return result.sort((a,b) => a-b)
}

// Ruby / Runtime: 168 ms / Memory: 10.8 MB (error in runtime!)

// def sorted_squares (arr)
//   result = []
//   arr.each do |num|
//     result.push(num*num)
//   end
//   result.sort()
// end
