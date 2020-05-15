// Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

// You may return any answer array that satisfies this condition.

// Example 1:

// Input: [3,1,2,4]
// Output: [2,4,3,1]
// The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
 
// Note:

// 1 <= A.length <= 5000
// 0 <= A[i] <= 5000

// Runtime: 80 ms / Memory: 37.4 MB

const sortArrayByParity = arr => {
    let even = []
    let odd = []
    let result = []
    for (let i = 0; i < arr.length; i ++) {
      arr[i] % 2 === 0 ? even.push(arr[i]) : odd.push(arr[i]) 
    }
      return result = even.concat(odd)
}

// Runtime: 80 ms / Memory: 36.9 MB

const sortArrayByParity = arr => {
    let result = []
    arr.forEach(num => {
      num % 2 === 0 ? result.unshift(num) : result.push(num)
    })
    return result
}

// Ruby / Runtime: 52 ms / Memory: 10.2 MB

// def sort_array_by_parity(arr)
//   result = []
//   arr.each do |num|
//     num % 2 === 0 ? result.unshift(num) : result.push(num)
//   end
//   result
// end